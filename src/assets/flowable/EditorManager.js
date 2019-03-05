/**流程图编辑器 类
 * @params modelData: 流程图实例数据
 * @params stencilData: 流程元素/组件
 **/
export default class EditorManager {
  constructor (config) {
    this.treeFilteredElements = ['SubProcess', 'CollapsedSubProcess']
    this.canvasTracker = new Hash()
    this.structualIcons = {
      'SubProcess': 'expanded.subprocess.png',
      'CollapsedSubProcess': 'subprocess.png',
      'EventSubProcess': 'event.subprocess.png'
    }
    this.current = this.modelId // 当前流程id
    this.loading = true

    // 设置 this.modelData
    this.setModelData(config.modelData)
    // 设置 this.stencilData
    this.setStencilData(config.stencilData)

    const baseUrl = "http://b3mn.org/stencilset/";
    const stencilSet = new ORYX.Core.StencilSet.StencilSet(baseUrl, config.stencilData);
    ORYX.Core.StencilSet.loadStencilSet(baseUrl, stencilSet, '6609363a-3be5-11e9-afe0-82ad27eff10d');
    jQuery.ajax({
      type: "GET",
      url: 'flowable/editor-app/plugins.xml',
      success: function(data, textStatus, jqXHR){
        ORYX._loadPlugins(data)
      }
    });

    this.bootEditor()
  }

  getModelId () { return this.modelId }
  setModelId (modelId) { this.modelId = modelId }

  getModel () {
    this.syncCanvasTracker()

    var modelMetaData = this.getBaseModelData()

    var stencilId = undefined
    var stencilSetNamespace = undefined
    var stencilSetUrl = undefined
    if (modelMetaData.model.stencilset.namespace == 'http://b3mn.org/stencilset/cmmn1.1#') {
      stencilId = 'CMMNDiagram'
      stencilSetNamespace = 'http://b3mn.org/stencilset/cmmn1.1#'
      stencilSetUrl = '../editor/stencilsets/cmmn1.1/cmmn1.1.json'
    } else {
      stencilId = 'BPMNDiagram'
      stencilSetNamespace = 'http://b3mn.org/stencilset/bpmn2.0#'
      stencilSetUrl = '../editor/stencilsets/bpmn2.0/bpmn2.0.json'
    }

    //this is an object.
    var editorConfig = this.editor.getJSON()
    var model = {
      modelId: this.modelId,
      bounds: editorConfig.bounds,
      properties: editorConfig.properties,
      childShapes: JSON.parse(this.canvasTracker.get(this.modelId)),
      stencil: {
        id: stencilId
      },
      stencilset: {
        namespace: stencilSetNamespace,
        url: stencilSetUrl
      }
    }

    this._mergeCanvasToChild(model)

    return model
  }

  setModelData (response) {
    this.modelData = response
    // _this.UPDATE_modelData(response)
  }
  getBaseModelData () { return this.modelData }

  getCurrentModelId () { return this.current }

  getStencilData () { return this.stencilData }
  setStencilData (stencilData) {
    //we don't want a references!
    this.stencilData = jQuery.extend(true, {}, stencilData)
  }

  getSelection () { return this.editor.selection }
  setSelection (selection) { this.editor.setSelection(selection) }
  updateSelection () { this.editor.updateSelection() }

  getSubSelection () {
    return this.editor._subSelection
  }

  bootEditor () {
    //TODO: populate the canvas with correct json sections.
    //resetting the state
    this.canvasTracker = new Hash()
    var config = jQuery.extend(true, {}, this.modelData) //avoid a reference to the original object.
    if (!config.model.childShapes) {
      config.model.childShapes = []
    }

    //this will remove any childshapes of a collapseable
    this.findAndRegisterCanvas(config.model.childShapes)

    // subprocess.

    //this will be overwritten almost
    this.canvasTracker.set(config.modelId, JSON.stringify(config.model.childShapes))

    // instantly.
    this.editor = new ORYX.Editor(config)
    this.current = this.editor.id
    this.loading = false


    FLOWABLE.eventBus.editor = this.editor
    FLOWABLE.eventBus.dispatch('ORYX-EDITOR-LOADED', {})
    FLOWABLE.eventBus.dispatch(FLOWABLE.eventBus.EVENT_TYPE_EDITOR_BOOTED, {})

    const eventMappings = [
      { oryxType: ORYX.CONFIG.EVENT_SELECTION_CHANGED, flowableType: FLOWABLE.eventBus.EVENT_TYPE_SELECTION_CHANGE },
      { oryxType: ORYX.CONFIG.EVENT_DBLCLICK, flowableType: FLOWABLE.eventBus.EVENT_TYPE_DOUBLE_CLICK },
      { oryxType: ORYX.CONFIG.EVENT_MOUSEOUT, flowableType: FLOWABLE.eventBus.EVENT_TYPE_MOUSE_OUT },
      { oryxType: ORYX.CONFIG.EVENT_MOUSEOVER, flowableType: FLOWABLE.eventBus.EVENT_TYPE_MOUSE_OVER },
      { oryxType: ORYX.CONFIG.EVENT_EDITOR_INIT_COMPLETED, flowableType: FLOWABLE.eventBus.EVENT_TYPE_EDITOR_READY },
      {
        oryxType: ORYX.CONFIG.EVENT_PROPERTY_CHANGED,
        flowableType: FLOWABLE.eventBus.EVENT_TYPE_PROPERTY_VALUE_CHANGED
      }
    ]

    eventMappings.forEach((eventMapping) => {
      this.registerOnEvent(eventMapping.oryxType, function (event) {
        FLOWABLE.eventBus.dispatch(eventMapping.flowableType, event)
      })
    })
  }

  handleEvents (events) {
    this.editor.handleEvents(events)
  }

  registerOnEvent (event, callback) {
    this.editor.registerOnEvent(event, callback)
  }

  getChildShapeByResourceId (resourceId) {
    return this.editor.getCanvas().getChildShapeByResourceId(resourceId)
  }

  getJSON () { return this.editor.getJSON() }
  getStencilSets () { return this.editor.getStencilSets() }
  getCanvas () { return this.editor.getCanvas() }
  getRules () { return this.editor.getRules() }
  getEditor () {
    //TODO: find out if we can avoid exposing the editor object to angular.
    return this.editor
  }

  getTree () {
    //build a tree of all subprocesses and there children.
    var result = new Hash()
    var parent = this.getModel()
    result.set('name', parent.properties['name'] || 'No name provided')
    result.set('id', this.modelId)
    result.set('type', 'root')
    result.set('current', this.current === this.modelId)
    var childShapes = parent.childShapes
    var children = this._buildTreeChildren(childShapes)
    result.set('children', children)
    return result.toObject()
  }

  executeCommands (commands) {
    this.editor.executeCommands(commands)
  }
  eventCoordinates (coordinates) {
    return this.editor.eventCoordinates(coordinates)
  }

  eventCoordinatesXY (x, y) {
    return this.editor.eventCoordinatesXY(x, y)
  }


  edit (resourceId) {
    //Save the current canvas in the canvastracker if it is the root process.
    this.syncCanvasTracker()

    this.loading = true

    var shapes = this.getCanvas().getChildren()
    shapes.each(function (shape) {
      this.editor.deleteShape(shape)
    }.bind(this))

    shapes = this.canvasTracker.get(resourceId)
    if (!shapes) {
      shapes = JSON.stringify([])
    }

    this.editor.loadSerialized({
      childShapes: shapes
    })

    this.getCanvas().update()

    this.current = resourceId

    this.loading = false
    FLOWABLE.eventBus.dispatch('EDITORMANAGER-EDIT-ACTION', {})
    FLOWABLE.eventBus.dispatch(FLOWABLE.eventBus.EVENT_TYPE_UNDO_REDO_RESET, {})
  }


  _buildTreeChildren (childShapes) {
    var children = []
    for (var i = 0; i < childShapes.length; i++) {
      var childShape = childShapes[i]
      var stencilId = childShape.stencil.id
      //we are currently only interested in the expanded subprocess and collapsed processes
      if (stencilId && this.treeFilteredElements.indexOf(stencilId) > -1) {
        var child = new Hash()
        child.set('name', childShape.properties.name || 'No name provided')
        child.set('id', childShape.resourceId)
        child.set('type', stencilId)
        child.set('current', childShape.resourceId === this.current)

        //check if childshapes

        if (stencilId === 'CollapsedSubProcess') {
          //the save function stores the real object as a childshape
          //it is possible that there is no child element because the user did not open the collapsed subprocess.
          if (childShape.childShapes.length === 0) {
            child.set('children', [])
          } else {
            child.set('children', this._buildTreeChildren(childShape.childShapes))
          }
          child.set('editable', true)
        } else {
          child.set('children', this._buildTreeChildren(childShape.childShapes))
          child.set('editable', false)
        }
        child.set('icon', this.structualIcons[stencilId])
        children.push(child.toObject())
      }
    }
    return children
  }

  syncCanvasTracker () {
    var shapes = this.getCanvas().getChildren()
    var jsonShapes = []
    shapes.each(function (shape) {
      //toJson is an summary object but its not a json string.!!!!!
      jsonShapes.push(shape.toJSON())
    })
    this.canvasTracker.set(this.current, JSON.stringify(jsonShapes))
  }

  findAndRegisterCanvas (childShapes) {
    for (var i = 0; i < childShapes.length; i++) {
      var childShape = childShapes[i]
      if (childShape.stencil.id === 'CollapsedSubProcess') {
        if (childShape.childShapes.length > 0) {
          //the canvastracker will auto correct itself with a new canvasmodel see this.edit()...
          this.findAndRegisterCanvas(childShape.childShapes)
          //a canvas can't be nested as a child because the editor would crash on redundant information.
          this.canvasTracker.set(childShape.resourceId, JSON.stringify(childShape.childShapes))
          //reference to config will clear the value.
          childShape.childShapes = []
        } else {
          this.canvasTracker.set(childShape.resourceId, '[]')
        }
      }
    }
  }

  _mergeCanvasToChild (parent) {
    for (var i = 0; i < parent.childShapes.length; i++) {
      var childShape = parent.childShapes[i]
      if (childShape.stencil.id === 'CollapsedSubProcess') {

        var elements = this.canvasTracker.get(childShape.resourceId)
        if (elements) {
          elements = JSON.parse(elements)
        } else {
          elements = []
        }
        childShape.childShapes = elements
        this._mergeCanvasToChild(childShape)
      } else if (childShape.stencil.id === 'SubProcess') {
        this._mergeCanvasToChild(childShape)
      } else {
        //do nothing?
      }
    }
  }

  dispatchOryxEvent (event) {
    FLOWABLE.eventBus.dispatchOryxEvent(event)
  }

  isLoading () {
    return this.loading
  }

  navigateTo (resourceId) {
    //TODO: this could be improved by check if the resourceId is not equal to the current tracker...
    this.syncCanvasTracker()
    var found = false
    this.canvasTracker.each(function (pair) {
      var key = pair.key
      var children = JSON.parse(pair.value)
      var targetable = this._findTarget(children, resourceId)
      if (!found && targetable) {
        this.edit(key)
        var flowableShape = this.getCanvas().getChildShapeByResourceId(targetable)
        this.setSelection([flowableShape], [], true)
        found = true
      }
    }, this)
  }

  _findTarget (children, resourceId) {
    for (var i = 0; i < children.length; i++) {
      var child = children[i]
      if (child.resourceId === resourceId) {
        return child.resourceId
      } else if (child.properties && child.properties['overrideid'] === resourceId) {
        return child.resourceId
      } else {
        var result = this._findTarget(child.childShapes, resourceId)
        if (result) {
          return result
        }
      }
    }
    return false
  }
}