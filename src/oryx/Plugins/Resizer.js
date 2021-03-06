import ORYX_Config from '../CONFIG'
import ORYX_Utils from '../Utils'

// 拖拽改变尺寸
export default class Resizer {
  constructor (parentId, orientation, facade) {
    this.parentId = parentId
    this.orientation = orientation
    this.facade = facade

    this.node = ORYX_Utils.graft('http://www.w3.org/1999/xhtml', $('canvasSection'),
      ['div', { 'class': 'resizer_' + this.orientation, style: 'left:0px; top:0px;position:absolute;' }])

    this.handleMouseDownFun = this.handleMouseDown.bind(this)
    this.handleMouseUpFun = this.handleMouseUp.bind(this)
    this.handleMouseMoveFun = this.handleMouseMove.bind(this)

    this.node.addEventListener(ORYX_Config.EVENT_MOUSEDOWN, this.handleMouseDownFun, true)

    this.dragEnable = false
    this.offSetPosition = { x: 0, y: 0 }
    this.bounds = undefined

    this.canvasNode = this.facade.getCanvas().node

    this.minSize = undefined
    this.maxSize = undefined

    this.aspectRatio = undefined

    this.resizeCallbacks = []
    this.resizeStartCallbacks = []
    this.resizeEndCallbacks = []
    this.hide()

    // Calculate the Offset
    this.scrollNode = this.node.parentNode.parentNode.parentNode
  }
  handleMouseDown (event) {
    this.dragEnable = true
    this.offsetScroll = { x: this.scrollNode.scrollLeft, y: this.scrollNode.scrollTop }

    this.offSetPosition = {
      x: Event.pointerX(event) - this.position.x,
      y: Event.pointerY(event) - this.position.y
    }

    this.resizeStartCallbacks.each((function (value) {
      value(this.bounds)
    }).bind(this))

    document.documentElement.addEventListener(ORYX_Config.EVENT_MOUSEUP, this.handleMouseUpFun, true)
    document.documentElement.addEventListener(ORYX_Config.EVENT_MOUSEMOVE, this.handleMouseMoveFun, false)
  }

  handleMouseUp (event) {
    this.dragEnable = false
    this.containmentParentNode = null
    this.resizeEndCallbacks.each((function (value) {
      value(this.bounds)
    }).bind(this))

    document.documentElement.removeEventListener(ORYX_Config.EVENT_MOUSEUP, this.handleMouseUpFun, true)
    document.documentElement.removeEventListener(ORYX_Config.EVENT_MOUSEMOVE, this.handleMouseMoveFun, false)
  }

  handleMouseMove (event) {
    if (!this.dragEnable) {
      return
    }

    if (event.shiftKey || event.ctrlKey) {
      this.aspectRatio = this.bounds.width() / this.bounds.height()
    } else {
      this.aspectRatio = undefined
    }

    let position = {
      x: Event.pointerX(event) - this.offSetPosition.x,
      y: Event.pointerY(event) - this.offSetPosition.y
    }

    position.x -= this.offsetScroll.x - this.scrollNode.scrollLeft
    position.y -= this.offsetScroll.y - this.scrollNode.scrollTop

    position.x = Math.min(position.x, this.facade.getCanvas().bounds.width())
    position.y = Math.min(position.y, this.facade.getCanvas().bounds.height())

    let offset = {
      x: position.x - this.position.x,
      y: position.y - this.position.y
    }

    if (this.aspectRatio) {
      // fixed aspect ratio
      let newAspectRatio = (this.bounds.width() + offset.x) / (this.bounds.height() + offset.y)
      if (newAspectRatio > this.aspectRatio) {
        offset.x = this.aspectRatio * (this.bounds.height() + offset.y) - this.bounds.width()
      } else if (newAspectRatio < this.aspectRatio) {
        offset.y = (this.bounds.width() + offset.x) / this.aspectRatio - this.bounds.height()
      }
    }

    // respect minimum and maximum sizes of stencil
    if (this.orientation === 'northwest' || this.orientation === 'north' || this.orientation === 'west') {
      if (this.bounds.width() - offset.x > this.maxSize.width) {
        offset.x = -(this.maxSize.width - this.bounds.width())
        if (this.aspectRatio)
          offset.y = this.aspectRatio * offset.x
      }
      if (this.bounds.width() - offset.x < this.minSize.width) {
        offset.x = -(this.minSize.width - this.bounds.width())
        if (this.aspectRatio)
          offset.y = this.aspectRatio * offset.x
      }
      if (this.bounds.height() - offset.y > this.maxSize.height) {
        offset.y = -(this.maxSize.height - this.bounds.height())
        if (this.aspectRatio)
          offset.x = offset.y / this.aspectRatio
      }
      if (this.bounds.height() - offset.y < this.minSize.height) {
        offset.y = -(this.minSize.height - this.bounds.height())
        if (this.aspectRatio)
          offset.x = offset.y / this.aspectRatio
      }

    } else {
      // defaults to southeast
      if (this.bounds.width() + offset.x > this.maxSize.width) {
        offset.x = this.maxSize.width - this.bounds.width()
        if (this.aspectRatio)
          offset.y = this.aspectRatio * offset.x
      }
      if (this.bounds.width() + offset.x < this.minSize.width) {
        offset.x = this.minSize.width - this.bounds.width()
        if (this.aspectRatio)
          offset.y = this.aspectRatio * offset.x
      }
      if (this.bounds.height() + offset.y > this.maxSize.height) {
        offset.y = this.maxSize.height - this.bounds.height()
        if (this.aspectRatio)
          offset.x = offset.y / this.aspectRatio
      }
      if (this.bounds.height() + offset.y < this.minSize.height) {
        offset.y = this.minSize.height - this.bounds.height()
        if (this.aspectRatio)
          offset.x = offset.y / this.aspectRatio
      }
    }

    // if (this.orientation === 'northwest') {
    //   this.bounds.extend({ x: -offset.x, y: -offset.y })
    //   this.bounds.moveBy(offset)
    // } else { // defaults to southeast
    //   this.bounds.extend(offset)
    // }

    switch (this.orientation) {
      case 'northwest':
        this.bounds.extend({ x: -offset.x, y: -offset.y })
        this.bounds.moveBy(offset)
        break
      case 'southeast':
        this.bounds.extend(offset)
        break
      case 'north':
        this.bounds.extend({ x: 0, y: -offset.y })
        this.bounds.moveBy({ x: 0, y: offset.y })
        break
      case 'south':
        this.bounds.extend({ x: 0, y: offset.y })
        break
      case 'west':
        this.bounds.extend({ x: -offset.x, y: 0 })
        this.bounds.moveBy({ x: offset.x, y: 0 })
        break
      case 'east':
        this.bounds.extend({ x: offset.x, y: 0 })
        break
    }
    this.update()

    this.resizeCallbacks.each((function (value) {
      value(this.bounds)
    }).bind(this))

    Event.stop(event)
  }

  registerOnResizeStart (callback) {
    if (!this.resizeStartCallbacks.member(callback)) {
      this.resizeStartCallbacks.push(callback)
    }
  }

  unregisterOnResizeStart (callback) {
    if (this.resizeStartCallbacks.member(callback)) {
      this.resizeStartCallbacks = this.resizeStartCallbacks.without(callback)
    }
  }

  registerOnResizeEnd (callback) {
    if (!this.resizeEndCallbacks.member(callback)) {
      this.resizeEndCallbacks.push(callback)
    }
  }

  unregisterOnResizeEnd (callback) {
    if (this.resizeEndCallbacks.member(callback)) {
      this.resizeEndCallbacks = this.resizeEndCallbacks.without(callback)
    }
  }

  registerOnResize (callback) {
    if (!this.resizeCallbacks.member(callback)) {
      this.resizeCallbacks.push(callback)
    }
  }

  unregisterOnResize (callback) {
    if (this.resizeCallbacks.member(callback)) {
      this.resizeCallbacks = this.resizeCallbacks.without(callback)
    }
  }

  hide () {
    this.node.style.display = 'none'
  }

  show () {
    if (this.bounds)
      this.node.style.display = ''
  }

  setBounds (bounds, min, max, aspectRatio) {
    this.bounds = bounds

    if (!min) {
      min = {
        width: ORYX_Config.CustomConfigs.UI_CONFIG.MINIMUM_SIZE,
        height: ORYX_Config.CustomConfigs.UI_CONFIG.MINIMUM_SIZE
      }
    }

    if (!max) {
      max = { width: ORYX_Config.MAXIMUM_SIZE, height: ORYX_Config.MAXIMUM_SIZE }
    }

    this.minSize = min
    this.maxSize = max

    this.aspectRatio = aspectRatio
    this.update()
  }

  update () {
    if (!this.bounds) {
      return
    }

    let upL = this.bounds.upperLeft()

    if (this.bounds.width() < this.minSize.width) {
      this.bounds.set(upL.x, upL.y, upL.x + this.minSize.width, upL.y + this.bounds.height())
    }
    if (this.bounds.height() < this.minSize.height) {
      this.bounds.set(upL.x, upL.y, upL.x + this.bounds.width(), upL.y + this.minSize.height)
    }
    if (this.bounds.width() > this.maxSize.width) {
      this.bounds.set(upL.x, upL.y, upL.x + this.maxSize.width, upL.y + this.bounds.height())
    }
    if (this.bounds.height() > this.maxSize.height) {
      this.bounds.set(upL.x, upL.y, upL.x + this.bounds.width(), upL.y + this.maxSize.height)
    }

    let a = this.canvasNode.getScreenCTM()

    upL.x *= a.a
    upL.y *= a.d

    let additionalIEZoom = ORYX_Utils.IEZoomBelow10(1)
    let canvasSectionOffset = jQuery('#canvasSection').offset()
    if (additionalIEZoom === 1) {
      upL.y = upL.y - canvasSectionOffset.top + a.f
      upL.x = upL.x - canvasSectionOffset.left + a.e
    } else {
      let canvasOffsetLeft = canvasSectionOffset.left
      let canvasScrollLeft = jQuery('#canvasSection').scrollLeft()
      let canvasScrollTop = jQuery('#canvasSection').scrollTop()

      let offset = a.e - (canvasOffsetLeft * additionalIEZoom)
      let additionaloffset = 0
      if (offset > 10) {
        additionaloffset = (offset / additionalIEZoom) - offset
      }
      upL.y = upL.y - (canvasSectionOffset.top * additionalIEZoom) + ((canvasScrollTop * additionalIEZoom) - canvasScrollTop) + a.f
      upL.x = upL.x - (canvasOffsetLeft * additionalIEZoom) + additionaloffset + ((canvasScrollLeft * additionalIEZoom) - canvasScrollLeft) + a.e
    }
    // console.log('orientation', this.orientation)
    // console.log('additionalIEZoom', additionalIEZoom)
    // console.log('canvasSectionOffset', canvasSectionOffset)
    // console.log('upL', upL)
    // console.log('==============')

    switch (this.orientation) {
      case 'northwest':
        upL.x -= 13
        upL.y -= 13
        break
      case 'southeast':
        upL.x += (a.a * this.bounds.width()) + 3
        upL.y += (a.d * this.bounds.height()) + 3
        break
      case 'north':
        // upL.x = 0
        upL.y -= 5
        this.node.style.width = (a.a * this.bounds.width()) + 'px'
        break
      case 'south':
        // upL.x = 0
        upL.y += (a.d * this.bounds.height()) - 5
        this.node.style.width = (a.a * this.bounds.width()) + 'px'
        break
      case 'west':
        upL.x -= 5
        // upL.y = 0
        this.node.style.height = (a.d * this.bounds.height()) + 'px'
        break
      case 'east':
        upL.x += (a.a * this.bounds.width()) - 5
        // upL.y = 0
        this.node.style.height = (a.d * this.bounds.height()) + 'px'
        break
    }

    this.position = upL

    this.node.style.left = this.position.x + 'px'
    this.node.style.top = this.position.y + 'px'
  }

  clearAddEventListener () {
    this.node.removeEventListener(ORYX_Config.EVENT_MOUSEDOWN, this.handleMouseDownFun, true)
  }
}
