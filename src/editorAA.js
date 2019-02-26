export const AA = {
  "title": "Process editor",
  "namespace": "http://b3mn.org/stencilset/bpmn2.0#",
  "description": "BPMN process editor",
  "propertyPackages": [
    {
      "name": "process_idpackage",
      "properties": [
        {
          "id": "process_id",
          "type": "String",
          "title": "Process identifier",
          "value": "process",
          "description": "Unique identifier of the process definition.",
          "popular": true
        }
      ]
    },
    {
      "name": "overrideidpackage",
      "properties": [
        {
          "id": "overrideid",
          "type": "String",
          "title": "Id",
          "value": "",
          "description": "Unique identifier of the element.",
          "popular": true
        }
      ]
    },
    {
      "name": "namepackage",
      "properties": [
        {
          "id": "name",
          "type": "String",
          "title": "Name",
          "value": "",
          "description": "The descriptive name of the BPMN element.",
          "popular": true,
          "refToView": "text_name"
        }
      ]
    },
    {
      "name": "documentationpackage",
      "properties": [
        {
          "id": "documentation",
          "type": "Text",
          "title": "Documentation",
          "value": "",
          "description": "The descriptive name of the BPMN element.",
          "popular": true
        }
      ]
    },
    {
      "name": "categorypackage",
      "properties": [
        {
          "id": "categorydefinition",
          "type": "String",
          "title": "Category",
          "value": "",
          "description": "Category of the BPMN element.",
          "popular": true
        }
      ]
    },
    {
      "name": "process_authorpackage",
      "properties": [
        {
          "id": "process_author",
          "type": "String",
          "title": "Process author",
          "value": "",
          "description": "Author of the process definition.",
          "popular": true
        }
      ]
    },
    {
      "name": "process_versionpackage",
      "properties": [
        {
          "id": "process_version",
          "type": "String",
          "title": "Process version string (documentation only)",
          "value": "",
          "description": "Version identifier for documentation purpose.",
          "popular": true
        }
      ]
    },
    {
      "name": "process_historylevelpackage",
      "properties": [
        {
          "id": "process_historylevel",
          "type": "flowable-processhistorylevel",
          "title": "Set a specific history level for this process definition",
          "value": "",
          "description": "Set a specific history level for this process definition",
          "popular": true
        }
      ]
    },
    {
      "name": "isexecutablepackage",
      "properties": [
        {
          "id": "isexecutable",
          "type": "Boolean",
          "title": "Is executable",
          "value": "true",
          "description": "Is the process executable?",
          "popular": true
        }
      ]
    },
    {
      "name": "process_potentialstarteruserpackage",
      "properties": [
        {
          "id": "process_potentialstarteruser",
          "type": "String",
          "title": "Potential starter user",
          "value": "",
          "description": "Which user, can start the process?",
          "popular": true
        }
      ]
    },
    {
      "name": "process_potentialstartergrouppackage",
      "properties": [
        {
          "id": "process_potentialstartergroup",
          "type": "String",
          "title": "Potential starter group",
          "value": "",
          "description": "Which group, can start the process?",
          "popular": true
        }
      ]
    },
    {
      "name": "process_namespacepackage",
      "properties": [
        {
          "id": "process_namespace",
          "type": "String",
          "title": "Target namespace",
          "value": "http://www.flowable.org/processdef",
          "description": "Target namespace for the process definition.",
          "popular": true
        }
      ]
    },
    {
      "name": "process_iseagerexecutionfetchpackage",
      "properties": [
        {
          "id": "iseagerexecutionfetch",
          "type": "Boolean",
          "title": "Eager execution fetching",
          "value": "false",
          "description": "Enable eager execution fetching for this process definition?",
          "popular": true
        }
      ]
    },
    {
      "name": "asynchronousdefinitionpackage",
      "properties": [
        {
          "id": "asynchronousdefinition",
          "type": "Boolean",
          "title": "Asynchronous",
          "value": "false",
          "description": "Define the activity as asynchronous.",
          "popular": true
        }
      ]
    },
    {
      "name": "datapropertiespackage",
      "properties": [
        {
          "id": "dataproperties",
          "type": "Complex",
          "title": "Data Objects",
          "value": "",
          "description": "Definition of the data object properties",
          "popular": true
        }
      ]
    },
    {
      "name": "exclusivedefinitionpackage",
      "properties": [
        {
          "id": "exclusivedefinition",
          "type": "Boolean",
          "title": "Exclusive",
          "value": "false",
          "description": "Define the activity as exclusive.",
          "popular": true
        }
      ]
    },
    {
      "name": "executionlistenerspackage",
      "properties": [
        {
          "id": "executionlisteners",
          "type": "multiplecomplex",
          "title": "Execution listeners",
          "value": "",
          "description": "Listeners for an activity, process, sequence flow, start and end event.",
          "popular": true
        }
      ]
    },
    {
      "name": "tasklistenerspackage",
      "properties": [
        {
          "id": "tasklisteners",
          "type": "multiplecomplex",
          "title": "Task listeners",
          "value": "",
          "description": "Listeners for a user task",
          "popular": true
        }
      ]
    },
    {
      "name": "eventlistenerspackage",
      "properties": [
        {
          "id": "eventlisteners",
          "type": "multiplecomplex",
          "title": "Event listeners",
          "value": "",
          "description": "Listeners for any event happening in the Flowable Engine. It's also possible to rethrow the event as a signal, message or error event",
          "popular": true
        }
      ]
    },
    {
      "name": "usertaskassignmentpackage",
      "properties": [
        {
          "id": "usertaskassignment",
          "type": "Complex",
          "title": "Assignments",
          "value": "",
          "description": "Assignment definition for the user task",
          "popular": true
        }
      ]
    },
    {
      "name": "formpropertiespackage",
      "properties": [
        {
          "id": "formproperties",
          "type": "Complex",
          "title": "Form properties",
          "value": "",
          "description": "Definition of the form with a list of form properties",
          "popular": true
        }
      ]
    },
    {
      "name": "formkeydefinitionpackage",
      "properties": [
        {
          "id": "formkeydefinition",
          "type": "String",
          "title": "Form key",
          "value": "",
          "description": "Form key that provides a reference to a form.",
          "popular": true
        }
      ]
    },
    {
      "name": "duedatedefinitionpackage",
      "properties": [
        {
          "id": "duedatedefinition",
          "type": "String",
          "title": "Due date",
          "value": "",
          "description": "Due date of the user task.",
          "popular": true
        }
      ]
    },
    {
      "name": "prioritydefinitionpackage",
      "properties": [
        {
          "id": "prioritydefinition",
          "type": "String",
          "title": "Priority",
          "value": "",
          "description": "Priority of the user task.",
          "popular": true
        }
      ]
    },
    {
      "name": "servicetaskclasspackage",
      "properties": [
        {
          "id": "servicetaskclass",
          "type": "String",
          "title": "Class",
          "value": "",
          "description": "Class that implements the service task logic.",
          "popular": true
        }
      ]
    },
    {
      "name": "servicetaskexpressionpackage",
      "properties": [
        {
          "id": "servicetaskexpression",
          "type": "Text",
          "title": "Expression",
          "value": "",
          "description": "Service task logic defined with an expression.",
          "popular": true
        }
      ]
    },
    {
      "name": "servicetaskdelegateexpressionpackage",
      "properties": [
        {
          "id": "servicetaskdelegateexpression",
          "type": "Text",
          "title": "Delegate expression",
          "value": "",
          "description": "Service task logic defined with a delegate expression.",
          "popular": true
        }
      ]
    },
    {
      "name": "servicetaskfieldspackage",
      "properties": [
        {
          "id": "servicetaskfields",
          "type": "Complex",
          "title": "Class fields",
          "value": "",
          "description": "Field extensions",
          "popular": true
        }
      ]
    },
    {
      "name": "servicetaskresultvariablepackage",
      "properties": [
        {
          "id": "servicetaskresultvariable",
          "type": "String",
          "title": "Result variable name",
          "value": "",
          "description": "Process variable name to store the service task result.",
          "popular": true
        }
      ]
    },
    {
      "name": "servicetaskresultvariablepackage",
      "properties": [
        {
          "id": "servicetaskUseLocalScopeForResultVariable",
          "type": "Boolean",
          "title": "Use local scope for result variable",
          "value": "false",
          "description": "Flag that marks that the used resultVariable needs to be saved as a local variable",
          "popular": true
        }
      ]
    },
    {
      "name": "servicetasktriggerablepackage",
      "properties": [
        {
          "id": "servicetasktriggerable",
          "type": "Boolean",
          "title": "Set service task to be triggerable",
          "value": "false",
          "description": "Sets the service task to be triggerable",
          "popular": true
        }
      ]
    },
    {
      "name": "scriptformatpackage",
      "properties": [
        {
          "id": "scriptformat",
          "type": "String",
          "title": "Script format",
          "value": "",
          "description": "Script format of the script task.",
          "popular": true
        }
      ]
    },
    {
      "name": "scripttextpackage",
      "properties": [
        {
          "id": "scripttext",
          "type": "Text",
          "title": "Script",
          "value": "",
          "description": "Script text of the script task.",
          "popular": true
        }
      ]
    },
    {
      "name": "scriptautostorevariablespackage",
      "properties": [
        {
          "id": "scriptautostorevariables",
          "type": "Boolean",
          "title": "Auto Store Variables",
          "value": "false",
          "description": "Automatically store all script variables to the process.",
          "popular": true
        }
      ]
    },
    {
      "name": "shellcommandpackage",
      "properties": [
        {
          "id": "shellcommand",
          "type": "String",
          "title": "Command",
          "value": "",
          "description": "Shell task command",
          "popular": true
        }
      ]
    },
    {
      "name": "shellarg1package",
      "properties": [
        {
          "id": "shellarg1",
          "type": "Text",
          "title": "Argument 1",
          "value": "",
          "description": "Shell commnad arg 1",
          "popular": true
        }
      ]
    },
    {
      "name": "shellarg2package",
      "properties": [
        {
          "id": "shellarg2",
          "type": "Text",
          "title": "Argument 2",
          "value": "",
          "description": "Shell commnad arg 2",
          "popular": true
        }
      ]
    },
    {
      "name": "shellarg3package",
      "properties": [
        {
          "id": "shellarg3",
          "type": "Text",
          "title": "Argument 3",
          "value": "",
          "description": "Shell commnad arg 3",
          "popular": true
        }
      ]
    },
    {
      "name": "shellarg4package",
      "properties": [
        {
          "id": "shellarg4",
          "type": "Text",
          "title": "Argument 4",
          "value": "",
          "description": "Shell commnad arg 4",
          "popular": true
        }
      ]
    },
    {
      "name": "shellarg5package",
      "properties": [
        {
          "id": "shellarg5",
          "type": "Text",
          "title": "Argument 5",
          "value": "",
          "description": "Shell commnad arg 5",
          "popular": true
        }
      ]
    },
    {
      "name": "shellwaitpackage",
      "properties": [
        {
          "id": "shellwait",
          "type": "Text",
          "title": "Wait",
          "value": "",
          "description": "Flag to wait for shell command execution end",
          "popular": true
        }
      ]
    },
    {
      "name": "shelloutputvariablepackage",
      "properties": [
        {
          "id": "shelloutputvariable",
          "type": "Text",
          "title": "Output variable",
          "value": "",
          "description": "Variable to store shell commnad output",
          "popular": true
        }
      ]
    },
    {
      "name": "shellerrorcodevariablepackage",
      "properties": [
        {
          "id": "shellerrorcodevariable",
          "type": "Text",
          "title": "Error code variable",
          "value": "",
          "description": "Variable to store shell commnad error code",
          "popular": true
        }
      ]
    },
    {
      "name": "shellredirecterrorpackage",
      "properties": [
        {
          "id": "shellredirecterror",
          "type": "Text",
          "title": "Redirect error",
          "value": "",
          "description": "If true merge error output with standard output",
          "popular": true
        }
      ]
    },
    {
      "name": "shellcleanenvpackage",
      "properties": [
        {
          "id": "shellcleanenv",
          "type": "Text",
          "title": "Clean env",
          "value": "",
          "description": "Clean shell execution environment",
          "popular": true
        }
      ]
    },
    {
      "name": "shelldirectorypackage",
      "properties": [
        {
          "id": "shelldirectory",
          "type": "Text",
          "title": "Directory",
          "value": "",
          "description": "Shell process working directory",
          "popular": true
        }
      ]
    },
    {
      "name": "ruletask_rulespackage",
      "properties": [
        {
          "id": "ruletask_rules",
          "type": "String",
          "title": "Rules",
          "value": "",
          "description": "Rules of the rule task.",
          "popular": true
        }
      ]
    },
    {
      "name": "ruletask_variables_inputpackage",
      "properties": [
        {
          "id": "ruletask_variables_input",
          "type": "String",
          "title": "Input variables",
          "value": "",
          "description": "Input variables of the rule task.",
          "popular": true
        }
      ]
    },
    {
      "name": "ruletask_excludepackage",
      "properties": [
        {
          "id": "ruletask_exclude",
          "type": "Boolean",
          "title": "Exclude",
          "value": "false",
          "description": "Use the rules property as exclusion.",
          "popular": true
        }
      ]
    },
    {
      "name": "ruletask_resultpackage",
      "properties": [
        {
          "id": "ruletask_result",
          "type": "String",
          "title": "Result variable",
          "value": "",
          "description": "Result variable of the rule task.",
          "popular": true
        }
      ]
    },
    {
      "name": "mailtaskheaderspackage",
      "properties": [
        {
          "id": "mailtaskheaders",
          "type": "Text",
          "title": "Headers",
          "value": "",
          "description": "Line separated Mail headers (For example - X-Attribute: value).",
          "popular": true
        }
      ]
    },
    {
      "name": "mailtasktopackage",
      "properties": [
        {
          "id": "mailtaskto",
          "type": "Text",
          "title": "To",
          "value": "",
          "description": "The recipients if the e-mail. Multiple recipients are defined in a comma-separated list.",
          "popular": true
        }
      ]
    },
    {
      "name": "mailtaskfrompackage",
      "properties": [
        {
          "id": "mailtaskfrom",
          "type": "Text",
          "title": "From",
          "value": "",
          "description": "The sender e-mail address. If not provided, the default configured from address is used.",
          "popular": true
        }
      ]
    },
    {
      "name": "mailtasksubjectpackage",
      "properties": [
        {
          "id": "mailtasksubject",
          "type": "Text",
          "title": "Subject",
          "value": "",
          "description": "The subject of the e-mail.",
          "popular": true
        }
      ]
    },
    {
      "name": "mailtaskccpackage",
      "properties": [
        {
          "id": "mailtaskcc",
          "type": "Text",
          "title": "Cc",
          "value": "",
          "description": "The cc's of the e-mail. Multiple recipients are defined in a comma-separated list",
          "popular": true
        }
      ]
    },
    {
      "name": "mailtaskbccpackage",
      "properties": [
        {
          "id": "mailtaskbcc",
          "type": "Text",
          "title": "Bcc",
          "value": "",
          "description": "The bcc's of the e-mail. Multiple recipients are defined in a comma-separated list",
          "popular": true
        }
      ]
    },
    {
      "name": "mailtasktextpackage",
      "properties": [
        {
          "id": "mailtasktext",
          "type": "Text",
          "title": "Text",
          "value": "",
          "description": "The content of the e-mail, in case one needs to send plain none-rich e-mails. Can be used in combination with html, for e-mail clients that don't support rich content. The client will then fall back to this text-only alternative.",
          "popular": true
        }
      ]
    },
    {
      "name": "mailtaskhtmlpackage",
      "properties": [
        {
          "id": "mailtaskhtml",
          "type": "Text",
          "title": "Html",
          "value": "",
          "description": "A piece of HTML that is the content of the e-mail.",
          "popular": true
        }
      ]
    },
    {
      "name": "mailtaskcharsetpackage",
      "properties": [
        {
          "id": "mailtaskcharset",
          "type": "String",
          "title": "Charset",
          "value": "",
          "description": "Allows to change the charset of the email, which is necessary for many non-English languages. ",
          "popular": true
        }
      ]
    },
    {
      "name": "httptaskrequestmethodpackage",
      "properties": [
        {
          "id": "httptaskrequestmethod",
          "type": "flowable-http-request-method",
          "title": "Request method",
          "value": "",
          "description": "Request method (For example - GET,POST,PUT etc).",
          "popular": true
        }
      ]
    },
    {
      "name": "httptaskrequesturlpackage",
      "properties": [
        {
          "id": "httptaskrequesturl",
          "type": "Text",
          "title": "Request URL",
          "value": "",
          "description": "Request URL (For example - http://flowable.org).",
          "popular": true
        }
      ]
    },
    {
      "name": "httptaskrequestheaderspackage",
      "properties": [
        {
          "id": "httptaskrequestheaders",
          "type": "Text",
          "title": "Request headers",
          "value": "",
          "description": "Line separated HTTP request headers (For example - Content-Type: application/json).",
          "popular": true
        }
      ]
    },
    {
      "name": "httptaskrequestbodypackage",
      "properties": [
        {
          "id": "httptaskrequestbody",
          "type": "Text",
          "title": "Request body",
          "value": "",
          "description": "Request body (For example- ${sampleBody}).",
          "popular": true
        }
      ]
    },
    {
      "name": "httptaskrequestbodyencodingpackage",
      "properties": [
        {
          "id": "httptaskrequestbodyencoding",
          "type": "Text",
          "title": "Request body encoding",
          "value": "",
          "description": "Request body encoding (For example- UTF-8).",
          "popular": true
        }
      ]
    },
    {
      "name": "httptaskrequesttimeoutpackage",
      "properties": [
        {
          "id": "httptaskrequesttimeout",
          "type": "String",
          "title": "Request timeout",
          "value": "",
          "description": "Timeout in milliseconds for the request (For example - 5000).",
          "popular": true
        }
      ]
    },
    {
      "name": "httptaskdisallowredirectspackage",
      "properties": [
        {
          "id": "httptaskdisallowredirects",
          "type": "String",
          "title": "Disallow redirects",
          "value": "",
          "description": "Flag to disallow HTTP redirects.",
          "popular": true
        }
      ]
    },
    {
      "name": "httptaskfailstatuscodespackage",
      "properties": [
        {
          "id": "httptaskfailstatuscodes",
          "type": "String",
          "title": "Fail status codes",
          "value": "",
          "description": "Comma separated list of HTTP response status codes to retry, for example 400,5XX.",
          "popular": true
        }
      ]
    },
    {
      "name": "httptaskhandlestatuscodespackage",
      "properties": [
        {
          "id": "httptaskhandlestatuscodes",
          "type": "String",
          "title": "Handle status codes",
          "value": "",
          "description": "Comma separated list of HTTP response status codes to ignore, for example 404,3XX.",
          "popular": true
        }
      ]
    },
    {
      "name": "httptaskignoreexceptionpackage",
      "properties": [
        {
          "id": "httptaskignoreexception",
          "type": "String",
          "title": "Ignore exception",
          "value": "",
          "description": "Flag to ignore exceptions.",
          "popular": true
        }
      ]
    },
    {
      "name": "httptasksaveresponseparameterstransientpackage",
      "properties": [
        {
          "id": "httptasksaveresponseparameterstransient",
          "type": "String",
          "title": "Save response as a transient variable",
          "value": "",
          "description": "Flag indicating to store the response variable(s) transient",
          "popular": true
        }
      ]
    },
    {
      "name": "httptasksaveresponseasjsonpackage",
      "properties": [
        {
          "id": "httptasksaveresponseasjson",
          "type": "String",
          "title": "Save response as JSON",
          "value": "",
          "description": "Flag indicating to store the response variable as a JSON variable instead of a String",
          "popular": true
        }
      ]
    },
    {
      "name": "skipexpressionpackage",
      "properties": [
        {
          "id": "skipexpression",
          "type": "String",
          "title": "Skip expression",
          "value": "",
          "description": "Skip an expression execution associated with task or association or not.",
          "popular": true
        }
      ]
    },
    {
      "name": "httptaskresponsevariablenamepackage",
      "properties": [
        {
          "id": "httptaskresponsevariablename",
          "type": "String",
          "title": "Response variable name",
          "value": "",
          "description": "Define the variable name to store the http response.",
          "popular": true
        }
      ]
    },
    {
      "name": "httptasksaverequestvariablespackage",
      "properties": [
        {
          "id": "httptasksaverequestvariables",
          "type": "String",
          "title": "Save request variables",
          "value": "",
          "description": "Flag to save request variables.",
          "popular": true
        }
      ]
    },
    {
      "name": "httptasksaveresponseparameterspackage",
      "properties": [
        {
          "id": "httptasksaveresponseparameters",
          "type": "String",
          "title": "Save response status, headers",
          "value": "",
          "description": "Flag to save response status, headers etc.",
          "popular": true
        }
      ]
    },
    {
      "name": "httptaskresultvariableprefixpackage",
      "properties": [
        {
          "id": "httptaskresultvariableprefix",
          "type": "String",
          "title": "Result variable prefix",
          "value": "",
          "description": "Prefix for the execution variable names.",
          "popular": true
        }
      ]
    },
    {
      "name": "callactivitycalledelementpackage",
      "properties": [
        {
          "id": "callactivitycalledelement",
          "type": "String",
          "title": "Called element",
          "value": "",
          "description": "Process reference.",
          "popular": true
        }
      ]
    },
    {
      "name": "callactivitycalledelementtypepackage",
      "properties": [
        {
          "id": "callactivitycalledelementtype",
          "type": "flowable-calledelementtype",
          "title": "Called element type",
          "value": "key",
          "description": "Type of the used process reference.",
          "popular": true
        }
      ]
    },
    {
      "name": "callactivityinparameterspackage",
      "properties": [
        {
          "id": "callactivityinparameters",
          "type": "Complex",
          "title": "In parameters",
          "value": "",
          "description": "Definition of the input parameters",
          "popular": true
        }
      ]
    },
    {
      "name": "callactivityoutparameterspackage",
      "properties": [
        {
          "id": "callactivityoutparameters",
          "type": "Complex",
          "title": "Out parameters",
          "value": "",
          "description": "Definition of the output parameters",
          "popular": true
        }
      ]
    },
    {
      "name": "callactivityinheritvariablespackage",
      "properties": [
        {
          "id": "callactivityinheritvariables",
          "type": "Boolean",
          "title": "Inherit variables in sub process",
          "value": "false",
          "description": "Inherit parent process variables in the sub process.",
          "popular": true
        }
      ]
    },
    {
      "name": "callactivitysamedeploymentpackage",
      "properties": [
        {
          "id": "callactivitysamedeployment",
          "type": "Boolean",
          "title": "Start the referenced process from the same deployment.",
          "value": "false",
          "description": "Use the referenced process from the same deployment.",
          "popular": true
        }
      ]
    },
    {
      "name": "callactivityfallbacktodefaulttenantpackage",
      "properties": [
        {
          "id": "callactivityfallbacktodefaulttenant",
          "type": "Boolean",
          "title": "Fallback to default tenant",
          "value": "false",
          "description": "Look for the definition by key in the default tenant when current tenant search fails.",
          "popular": true
        }
      ]
    },
    {
      "name": "callactivityprocessinstancenamepackage",
      "properties": [
        {
          "id": "callactivityprocessinstancename",
          "type": "String",
          "title": "Process instance name",
          "value": "",
          "description": "An expression that resolves to the name of the child process instance",
          "popular": true
        }
      ]
    },
    {
      "name": "callactivityinheritbusinesskeypackage",
      "properties": [
        {
          "id": "callactivityinheritbusinesskey",
          "type": "Boolean",
          "title": "Inherit business key",
          "value": "false",
          "description": "Inherit the business key from the parent process.",
          "popular": true
        }
      ]
    },
    {
      "name": "callactivityuselocalscopeforoutparameterspackage",
      "properties": [
        {
          "id": "callactivityuselocalscopeforoutparameters",
          "type": "Boolean",
          "title": "Use local scope for out parameters",
          "value": "false",
          "description": "Use local variable scope for out parameters.",
          "popular": true
        }
      ]
    },
    {
      "name": "callactivitybusinesskeypackage",
      "properties": [
        {
          "id": "callactivitybusinesskey",
          "type": "String",
          "title": "Business key expression",
          "value": "",
          "description": "An expression that resolves to a business key for the child process instance",
          "popular": true
        }
      ]
    },
    {
      "name": "callactivitycompleteasyncpackage",
      "properties": [
        {
          "id": "callactivitycompleteasync",
          "type": "Boolean",
          "title": "Complete asynchronously",
          "value": "",
          "description": "If set, the child process ending and completing the call activity is done asynchronously. Useful when using parallel multi instance with a called process definition that has async tasks.",
          "popular": true
        }
      ]
    },
    {
      "name": "cameltaskcamelcontextpackage",
      "properties": [
        {
          "id": "cameltaskcamelcontext",
          "type": "String",
          "title": "Camel context",
          "value": "",
          "description": "An optional camel context definition, if left empty the default is used.",
          "popular": true
        }
      ]
    },
    {
      "name": "muletaskendpointurlpackage",
      "properties": [
        {
          "id": "muletaskendpointurl",
          "type": "String",
          "title": "Endpoint url",
          "value": "",
          "description": "A required endpoint url to sent the message to Mule.",
          "popular": true
        }
      ]
    },
    {
      "name": "muletasklanguagepackage",
      "properties": [
        {
          "id": "muletasklanguage",
          "type": "String",
          "title": "Language",
          "value": "",
          "description": "A required definition for the language to resolve the payload expression, like juel.",
          "popular": true
        }
      ]
    },
    {
      "name": "muletaskpayloadexpressionpackage",
      "properties": [
        {
          "id": "muletaskpayloadexpression",
          "type": "Text",
          "title": "Payload expression",
          "value": "",
          "description": "A required definition for the payload of the message sent to Mule.",
          "popular": true
        }
      ]
    },
    {
      "name": "muletaskresultvariablepackage",
      "properties": [
        {
          "id": "muletaskresultvariable",
          "type": "String",
          "title": "Result variable",
          "value": "",
          "description": "An optional result variable for the payload returned.",
          "popular": true
        }
      ]
    },
    {
      "name": "conditionsequenceflowpackage",
      "properties": [
        {
          "id": "conditionsequenceflow",
          "type": "Complex",
          "title": "Flow condition",
          "value": "",
          "description": "The condition of the sequence flow",
          "popular": true
        }
      ]
    },
    {
      "name": "defaultflowpackage",
      "properties": [
        {
          "id": "defaultflow",
          "type": "Boolean",
          "title": "Default flow",
          "value": "false",
          "description": "Define the sequence flow as default",
          "popular": true,
          "refToView": "default"
        }
      ]
    },
    {
      "name": "conditionalflowpackage",
      "properties": [
        {
          "id": "conditionalflow",
          "type": "Boolean",
          "title": "Conditional flow",
          "value": "false",
          "description": "Define the sequence flow with a condition",
          "popular": true
        }
      ]
    },
    {
      "name": "timercycledefinitionpackage",
      "properties": [
        {
          "id": "timercycledefinition",
          "type": "String",
          "title": "Time cycle (e.g. R3/PT10H)",
          "value": "",
          "description": "Define the timer with a ISO-8601 cycle.",
          "popular": true
        }
      ]
    },
    {
      "name": "timerdatedefinitionpackage",
      "properties": [
        {
          "id": "timerdatedefinition",
          "type": "String",
          "title": "Time date in ISO-8601",
          "value": "",
          "description": "Define the timer with a ISO-8601 date definition.",
          "popular": true
        }
      ]
    },
    {
      "name": "timerdurationdefinitionpackage",
      "properties": [
        {
          "id": "timerdurationdefinition",
          "type": "String",
          "title": "Time duration (e.g. PT5M)",
          "value": "",
          "description": "Define the timer with a ISO-8601 duration.",
          "popular": true
        }
      ]
    },
    {
      "name": "timerenddatedefinitionpackage",
      "properties": [
        {
          "id": "timerenddatedefinition",
          "type": "String",
          "title": "Time End Date in ISO-8601",
          "value": "",
          "description": "Define the timer with a ISO-8601 duration.",
          "popular": true
        }
      ]
    },
    {
      "name": "messagerefpackage",
      "properties": [
        {
          "id": "messageref",
          "type": "String",
          "title": "Message reference",
          "value": "",
          "description": "Define the message name.",
          "popular": true
        }
      ]
    },
    {
      "name": "signalrefpackage",
      "properties": [
        {
          "id": "signalref",
          "type": "String",
          "title": "Signal reference",
          "value": "",
          "description": "Define the signal name.",
          "popular": true
        }
      ]
    },
    {
      "name": "errorrefpackage",
      "properties": [
        {
          "id": "errorref",
          "type": "String",
          "title": "Error reference",
          "value": "",
          "description": "Define the error name.",
          "popular": true
        }
      ]
    },
    {
      "name": "cancelactivitypackage",
      "properties": [
        {
          "id": "cancelactivity",
          "type": "Boolean",
          "title": "Cancel activity",
          "value": "true",
          "description": "Should the activity be cancelled",
          "popular": true,
          "refToView": [
            "frame",
            "frame2"
          ]
        }
      ]
    },
    {
      "name": "initiatorpackage",
      "properties": [
        {
          "id": "initiator",
          "type": "String",
          "title": "Initiator",
          "value": "",
          "description": "Initiator of the process.",
          "popular": true
        }
      ]
    },
    {
      "name": "textpackage",
      "properties": [
        {
          "id": "text",
          "type": "String",
          "title": "Text",
          "value": "",
          "description": "The text of the text annotation.",
          "popular": true,
          "refToView": "text"
        }
      ]
    },
    {
      "name": "multiinstance_typepackage",
      "properties": [
        {
          "id": "multiinstance_type",
          "type": "flowable-multiinstance",
          "title": "Multi-instance type",
          "value": "None",
          "description": "Repeated activity execution (parallel or sequential) can be displayed through different loop types",
          "popular": true,
          "refToView": "multiinstance"
        }
      ]
    },
    {
      "name": "multiinstance_cardinalitypackage",
      "properties": [
        {
          "id": "multiinstance_cardinality",
          "type": "String",
          "title": "Cardinality (Multi-instance)",
          "value": "",
          "description": "Define the cardinality of multi instance.",
          "popular": true
        }
      ]
    },
    {
      "name": "multiinstance_collectionpackage",
      "properties": [
        {
          "id": "multiinstance_collection",
          "type": "String",
          "title": "Collection (Multi-instance)",
          "value": "",
          "description": "Define the collection for the multi instance.",
          "popular": true
        }
      ]
    },
    {
      "name": "multiinstance_variablepackage",
      "properties": [
        {
          "id": "multiinstance_variable",
          "type": "String",
          "title": "Element variable (Multi-instance)",
          "value": "",
          "description": "Define the element variable for the multi instance.",
          "popular": true
        }
      ]
    },
    {
      "name": "multiinstance_conditionpackage",
      "properties": [
        {
          "id": "multiinstance_condition",
          "type": "String",
          "title": "Completion condition (Multi-instance)",
          "value": "",
          "description": "Define the completion condition for the multi instance.",
          "popular": true
        }
      ]
    },
    {
      "name": "isforcompensationpackage",
      "properties": [
        {
          "id": "isforcompensation",
          "type": "Boolean",
          "title": "Is for compensation",
          "value": "false",
          "description": "A flag that identifies whether this activity is intended for the purposes of compensation.",
          "popular": true,
          "refToView": "compensation"
        }
      ]
    },
    {
      "name": "sequencefloworderpackage",
      "properties": [
        {
          "id": "sequencefloworder",
          "type": "Complex",
          "title": "Flow order",
          "value": "",
          "description": "Order outgoing sequence flows.",
          "popular": true
        }
      ]
    },
    {
      "name": "signaldefinitionspackage",
      "properties": [
        {
          "id": "signaldefinitions",
          "type": "multiplecomplex",
          "title": "Signal definitions",
          "value": "",
          "description": "Signal definitions",
          "popular": true
        }
      ]
    },
    {
      "name": "messagedefinitionspackage",
      "properties": [
        {
          "id": "messagedefinitions",
          "type": "multiplecomplex",
          "title": "Message definitions",
          "value": "",
          "description": "Message definitions",
          "popular": true
        }
      ]
    },
    {
      "name": "istransactionpackage",
      "properties": [
        {
          "id": "istransaction",
          "type": "Boolean",
          "title": "Is a transaction sub process",
          "value": "false",
          "description": "A flag that identifies whether this sub process is of type transaction.",
          "popular": true,
          "refToView": "border"
        }
      ]
    },
    {
      "name": "formreferencepackage",
      "properties": [
        {
          "id": "formreference",
          "type": "Complex",
          "title": "Form reference",
          "value": "",
          "description": "Reference to a form",
          "popular": true
        }
      ]
    },
    {
      "name": "terminateAllpackage",
      "properties": [
        {
          "id": "terminateAll",
          "type": "Boolean",
          "title": "Terminate all",
          "value": "false",
          "description": "Enable to terminate the process instance",
          "popular": true
        }
      ]
    },
    {
      "name": "decisiontaskdecisiontablereferencepackage",
      "properties": [
        {
          "id": "decisiontaskdecisiontablereference",
          "type": "Complex",
          "title": "Decision table reference",
          "value": "",
          "description": "Set the decision table reference",
          "popular": true
        }
      ]
    },
    {
      "name": "decisiontaskthrowerroronnohitspackage",
      "properties": [
        {
          "id": "decisiontaskthrowerroronnohits",
          "type": "Boolean",
          "title": "Throw error if no rules were hit",
          "value": "false",
          "description": "Should an error be thrown if no rules of the decision table were hit and consequently no result was found.",
          "popular": true
        }
      ]
    },
    {
      "name": "decisiontaskfallbacktodefaulttenantpackage",
      "properties": [
        {
          "id": "decisiontaskfallbacktodefaulttenant",
          "type": "Boolean",
          "title": "Fallback to default tenant",
          "value": "false",
          "description": "Find decision definition without tenant when previous attemps to find it with tenant failed.",
          "popular": true
        }
      ]
    },
    {
      "name": "interruptingpackage",
      "properties": [
        {
          "id": "interrupting",
          "type": "Boolean",
          "title": "Interrupting",
          "value": "true",
          "description": "Should all parent executions be terminated?",
          "popular": true,
          "refToView": [
            "frame"
          ]
        }
      ]
    },
    {
      "name": "completionconditionpackage",
      "properties": [
        {
          "id": "completioncondition",
          "type": "String",
          "title": "Completion condition",
          "value": "",
          "description": "The completion condition for the adhoc sub process",
          "popular": true
        }
      ]
    },
    {
      "name": "orderingpackage",
      "properties": [
        {
          "id": "ordering",
          "type": "flowable-ordering",
          "title": "Ordering",
          "value": "Parallel",
          "description": "The ordering for the adhoc sub process",
          "popular": true
        }
      ]
    },
    {
      "name": "cancelremaininginstancespackage",
      "properties": [
        {
          "id": "cancelremaininginstances",
          "type": "Boolean",
          "title": "Cancel remaining instances",
          "value": "true",
          "description": "Cancel the remaining instances for the adhoc sub process?",
          "popular": true
        }
      ]
    }
  ],
  "stencils": [
    {
      "type": "node",
      "id": "BPMNDiagram",
      "title": "BPMN-Diagram",
      "description": "A BPMN 2.0 diagram.",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n   width=\"800\"\n   height=\"600\"\n   version=\"1.0\">\n  <defs></defs>\n  <g pointer-events=\"fill\" >\n    <polygon stroke=\"black\" fill=\"black\" stroke-width=\"1\" points=\"0,0 0,590 9,599 799,599 799,9 790,0\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" />\n    <rect id=\"diagramcanvas\" oryx:resize=\"vertical horizontal\" x=\"0\" y=\"0\" width=\"790\" height=\"590\" stroke=\"black\" stroke-width=\"2\" fill=\"white\" />\n    \t<text font-size=\"22\" id=\"diagramtext\" x=\"400\" y=\"25\" oryx:align=\"top center\" stroke=\"#373e48\"></text>\n  </g>\n</svg>",
      "icon": "diagram.png",
      "groups": [
        "Diagram"
      ],
      "mayBeRoot": true,
      "hide": true,
      "propertyPackages": [
        "process_idpackage",
        "namepackage",
        "documentationpackage",
        "process_authorpackage",
        "process_versionpackage",
        "process_namespacepackage",
        "process_historylevelpackage",
        "isexecutablepackage",
        "datapropertiespackage",
        "executionlistenerspackage",
        "eventlistenerspackage",
        "signaldefinitionspackage",
        "messagedefinitionspackage",
        "process_potentialstarteruserpackage",
        "process_potentialstartergrouppackage",
        "process_iseagerexecutionfetchpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [

      ]
    },
    {
      "type": "node",
      "id": "StartNoneEvent",
      "title": "Start event",
      "description": "A start event without a specific trigger",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   width=\"40\"\n   height=\"40\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"16\" oryx:cy=\"16\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <g pointer-events=\"fill\">\n    <circle id=\"bg_frame\" cx=\"16\" cy=\"16\" r=\"15\" stroke=\"#585858\" fill=\"#ffffff\" stroke-width=\"1\"/>\n\t<text font-size=\"11\" \n\t\tid=\"text_name\" \n\t\tx=\"16\" y=\"33\" \n\t\toryx:align=\"top center\" \n\t\tstroke=\"#373e48\"\n\t></text>\n  </g>\n</svg>",
      "icon": "startevent/none.png",
      "groups": [
        "Start Events"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "executionlistenerspackage",
        "initiatorpackage",
        "formkeydefinitionpackage",
        "formreferencepackage",
        "formpropertiespackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "sequence_start",
        "Startevents_all",
        "StartEventsMorph",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "StartTimerEvent",
      "title": "Start timer event",
      "description": "A start event with a timer trigger",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   width=\"40\"\n   height=\"40\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"16\" oryx:cy=\"16\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <g pointer-events=\"fill\">\n    <circle \n    \tid=\"bg_frame\" \n    \tcx=\"16\" \n    \tcy=\"16\" \n    \tr=\"15\" \n    \tstroke=\"#585858\" \n    \tfill=\"#ffffff\" \n    \tstroke-width=\"1\"\n    \tstyle=\"stroke-dasharray: 5.5, 3\" />\n    <circle id=\"frame\" cx=\"16\" cy=\"16\" r=\"15\" stroke=\"#585858\" fill=\"none\" stroke-width=\"1\"/>\n    \n    <path id=\"path1\" transform=\"translate(6,6)\"\n    \td=\"M 10 0 C 4.4771525 0 0 4.4771525 0 10 C 0 15.522847 4.4771525 20 10 20 C 15.522847 20 20 15.522847 20 10 C 20 4.4771525 15.522847 1.1842379e-15 10 0 z M 9.09375 1.03125 C 9.2292164 1.0174926 9.362825 1.0389311 9.5 1.03125 L 9.5 3.5 L 10.5 3.5 L 10.5 1.03125 C 15.063526 1.2867831 18.713217 4.9364738 18.96875 9.5 L 16.5 9.5 L 16.5 10.5 L 18.96875 10.5 C 18.713217 15.063526 15.063526 18.713217 10.5 18.96875 L 10.5 16.5 L 9.5 16.5 L 9.5 18.96875 C 4.9364738 18.713217 1.2867831 15.063526 1.03125 10.5 L 3.5 10.5 L 3.5 9.5 L 1.03125 9.5 C 1.279102 5.0736488 4.7225326 1.4751713 9.09375 1.03125 z M 9.5 5 L 9.5 8.0625 C 8.6373007 8.2844627 8 9.0680195 8 10 C 8 11.104569 8.8954305 12 10 12 C 10.931981 12 11.715537 11.362699 11.9375 10.5 L 14 10.5 L 14 9.5 L 11.9375 9.5 C 11.756642 8.7970599 11.20294 8.2433585 10.5 8.0625 L 10.5 5 L 9.5 5 z \"  \n    \tfill=\"#585858\" stroke=\"none\" />\n   \n\t<text font-size=\"11\" \n\t\tid=\"text_name\" \n\t\tx=\"16\" y=\"33\" \n\t\toryx:align=\"top center\" \n\t\tstroke=\"#373e48\"\n\t></text>\n  </g>\n</svg>",
      "icon": "startevent/timer.png",
      "groups": [
        "Start Events"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "executionlistenerspackage",
        "timercycledefinitionpackage",
        "timerdatedefinitionpackage",
        "timerdurationdefinitionpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "sequence_start",
        "Startevents_all",
        "StartEventsMorph",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "StartSignalEvent",
      "title": "Start signal event",
      "description": "A start event with a signal trigger",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   width=\"40\"\n   height=\"40\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"16\" oryx:cy=\"16\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <g pointer-events=\"fill\">\n\n    <circle \n    \tid=\"bg_frame\" \n    \tcx=\"16\" \n    \tcy=\"16\" \n    \tr=\"15\" \n    \tstroke=\"#585858\" \n    \tfill=\"#ffffff\" \n    \tstroke-width=\"1\"\n    \tstyle=\"stroke-dasharray: 5.5, 3\" />\n    <circle id=\"frame\" cx=\"16\" cy=\"16\" r=\"15\" stroke=\"#585858\" fill=\"none\" stroke-width=\"1\"/>\n    <path\n       d=\"M 8.7124971,21.247342 L 23.333334,21.247342 L 16.022915,8.5759512 L 8.7124971,21.247342 z\"\n       id=\"triangle\"\n       stroke=\"#585858\"\n       style=\"fill:none;stroke-width:1.4;stroke-miterlimit:4;stroke-dasharray:none\" />\n\t<text font-size=\"11\" \n\t\tid=\"text_name\" \n\t\tx=\"16\" y=\"33\" \n\t\toryx:align=\"top center\" \n\t\tstroke=\"#373e48\"\n\t></text>\n  </g>\n</svg>",
      "icon": "startevent/signal.png",
      "groups": [
        "Start Events"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "executionlistenerspackage",
        "signalrefpackage",
        "interruptingpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "sequence_start",
        "Startevents_all",
        "StartEventsMorph",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "StartMessageEvent",
      "title": "Start message event",
      "description": "A start event with a message trigger",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   width=\"40\"\n   height=\"40\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"16\" oryx:cy=\"16\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <g pointer-events=\"fill\">\n    <circle \n    \tid=\"bg_frame\" \n    \tcx=\"16\" \n    \tcy=\"16\" \n    \tr=\"15\" \n    \tstroke=\"#585858\" \n    \tfill=\"#ffffff\" \n    \tstroke-width=\"1\"\n    \tstyle=\"stroke-dasharray: 5.5, 3\" />\n    \n    <circle id=\"frame\" cx=\"16\" cy=\"16\" r=\"15\" stroke=\"#585858\" fill=\"none\" stroke-width=\"1\"/>\n    \n    <path transform=\"translate(7,7)\" id=\"path1\" stroke=\"none\" fill=\"#585858\" stroke-width=\"1\" d=\"m 0.5,2.5 0,13 17,0 0,-13 z M 2,4 6.5,8.5 2,13 z M 4,4 14,4 9,9 z m 12,0 0,9 -4.5,-4.5 z M 7.5,9.5 9,11 10.5,9.5 15,14 3,14 z\"/>\n\t<text font-size=\"11\" \n\t\tid=\"text_name\" \n\t\tx=\"16\" y=\"33\" \n\t\toryx:align=\"top center\" \n\t\tstroke=\"#373e48\"\n\t></text>\n  </g>\n</svg>",
      "icon": "startevent/message.png",
      "groups": [
        "Start Events"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "executionlistenerspackage",
        "messagerefpackage",
        "interruptingpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "sequence_start",
        "Startevents_all",
        "StartEventsMorph",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "StartErrorEvent",
      "title": "Start error event",
      "description": "A start event that catches a thrown BPMN error",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   width=\"40\"\n   height=\"40\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"16\" oryx:cy=\"16\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx=\"16\" oryx:cy=\"16\" />\n  <g pointer-events=\"fill\">\n    <circle id=\"bg_frame\" cx=\"16\" cy=\"16\" r=\"15\" stroke=\"#585858\" fill=\"#ffffff\" stroke-width=\"1\"/>\n    \n    <path\n         stroke=\"#585858\"\n         style=\"fill:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10\"\n         d=\"M 22.820839,11.171502 L 19.36734,24.58992 L 13.54138,14.281819 L 9.3386512,20.071607 L 13.048949,6.8323057 L 18.996148,16.132659 L 22.820839,11.171502 z\"\n         id=\"errorPolygon\" />\n\t<text font-size=\"11\" \n\t\tid=\"text_name\" \n\t\tx=\"16\" y=\"33\" \n\t\toryx:align=\"top center\" \n\t\tstroke=\"#373e48\"\n\t></text>\n  </g>\n</svg>",
      "icon": "startevent/error.png",
      "groups": [
        "Start Events"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "executionlistenerspackage",
        "errorrefpackage",
        "interruptingpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "sequence_start",
        "Startevents_all",
        "StartEventsMorph",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "UserTask",
      "title": "User task",
      "description": "A manual task assigned to a specific person",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n\n   width=\"102\"\n   height=\"82\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"20\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"40\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"60\" oryx:anchors=\"left\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"20\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"40\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"60\" oryx:anchors=\"right\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"40\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <g pointer-events=\"fill\" oryx:minimumSize=\"50 40\">\n\t<rect id=\"text_frame\" oryx:anchors=\"bottom top right left\" x=\"1\" y=\"1\" width=\"94\" height=\"79\" rx=\"10\" ry=\"10\" stroke=\"none\" stroke-width=\"0\" fill=\"none\" />\n\t<rect id=\"bg_frame\" oryx:resize=\"vertical horizontal\" x=\"0\" y=\"0\" width=\"100\" height=\"80\" rx=\"10\" ry=\"10\" stroke=\"#bbbbbb\" stroke-width=\"1\" fill=\"#f9f9f9\" />\n\t\t<text \n\t\t\tfont-size=\"12\" \n\t\t\tid=\"text_name\" \n\t\t\tx=\"50\" \n\t\t\ty=\"40\" \n\t\t\toryx:align=\"middle center\"\n\t\t\toryx:fittoelem=\"text_frame\"\n\t\t\tstroke=\"#373e48\">\n\t\t</text>\n\t\n\t<g id=\"userTask\" transform=\"translate(3,3)\">\n\t\t<path oryx:anchors=\"top left\"\n       \t\tstyle=\"fill:#d1b575;stroke:none;\"\n       \t\t d=\"m 1,17 16,0 0,-1.7778 -5.333332,-3.5555 0,-1.7778 c 1.244444,0 1.244444,-2.3111 1.244444,-2.3111 l 0,-3.0222 C 12.555557,0.8221 9.0000001,1.0001 9.0000001,1.0001 c 0,0 -3.5555556,-0.178 -3.9111111,3.5555 l 0,3.0222 c 0,0 0,2.3111 1.2444443,2.3111 l 0,1.7778 L 1,15.2222 1,17 17,17\" \n         />\n\t\t\n\t</g>\n  \n\t<g id=\"parallel\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M46 70 v8 M50 70 v8 M54 70 v8\" stroke-width=\"2\" />\n\t</g>\n\t\n\t<g id=\"sequential\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" stroke-width=\"2\" d=\"M46,76h10M46,72h10 M46,68h10\"/>\n\t</g>\n\t\n\n\t<g id=\"compensation\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74\" stroke-width=\"1\" />\n\t</g>\n  </g>\n</svg>",
      "icon": "activity/list/type.user.png",
      "groups": [
        "Activities"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "asynchronousdefinitionpackage",
        "exclusivedefinitionpackage",
        "executionlistenerspackage",
        "multiinstance_typepackage",
        "multiinstance_cardinalitypackage",
        "multiinstance_collectionpackage",
        "multiinstance_variablepackage",
        "multiinstance_conditionpackage",
        "isforcompensationpackage",
        "usertaskassignmentpackage",
        "formkeydefinitionpackage",
        "formreferencepackage",
        "duedatedefinitionpackage",
        "prioritydefinitionpackage",
        "formpropertiespackage",
        "tasklistenerspackage",
        "skipexpressionpackage",
        "categorypackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "Activity",
        "sequence_start",
        "sequence_end",
        "ActivitiesMorph",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "ServiceTask",
      "title": "Service task",
      "description": "An automatic task with service logic",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n\n   width=\"102\"\n   height=\"82\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"20\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"40\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"60\" oryx:anchors=\"left\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"20\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"40\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"60\" oryx:anchors=\"right\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"40\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <g pointer-events=\"fill\" oryx:minimumSize=\"50 40\">\n\t<rect id=\"text_frame\" oryx:anchors=\"bottom top right left\" x=\"1\" y=\"1\" width=\"94\" height=\"79\" rx=\"10\" ry=\"10\" stroke=\"none\" stroke-width=\"0\" fill=\"none\" />\n\t<rect id=\"bg_frame\" oryx:resize=\"vertical horizontal\" x=\"0\" y=\"0\" width=\"100\" height=\"80\" rx=\"10\" ry=\"10\" stroke=\"#bbbbbb\" stroke-width=\"1\" fill=\"#f9f9f9\" />\n\t\t<text \n\t\t\tfont-size=\"12\" \n\t\t\tid=\"text_name\" \n\t\t\tx=\"50\" \n\t\t\ty=\"40\" \n\t\t\toryx:align=\"middle center\"\n\t\t\toryx:fittoelem=\"text_frame\"\n\t\t\tstroke=\"#373e48\">\n\t\t</text>\n\t\n\t<g id=\"serviceTask\" transform=\"translate(3,3)\">\n\t<path oryx:anchors=\"top left\"\n\t\tstyle=\"fill:#72a7d0;stroke:none\"\n     d=\"M 8,1 7.5,2.875 c 0,0 -0.02438,0.250763 -0.40625,0.4375 C 7.05724,3.330353 7.04387,3.358818 7,3.375 6.6676654,3.4929791 6.3336971,3.6092802 6.03125,3.78125 6.02349,3.78566 6.007733,3.77681 6,3.78125 5.8811373,3.761018 5.8125,3.71875 5.8125,3.71875 l -1.6875,-1 -1.40625,1.4375 0.96875,1.65625 c 0,0 0.065705,0.068637 0.09375,0.1875 0.002,0.00849 -0.00169,0.022138 0,0.03125 C 3.6092802,6.3336971 3.4929791,6.6676654 3.375,7 3.3629836,7.0338489 3.3239228,7.0596246 3.3125,7.09375 3.125763,7.4756184 2.875,7.5 2.875,7.5 L 1,8 l 0,2 1.875,0.5 c 0,0 0.250763,0.02438 0.4375,0.40625 0.017853,0.03651 0.046318,0.04988 0.0625,0.09375 0.1129372,0.318132 0.2124732,0.646641 0.375,0.9375 -0.00302,0.215512 -0.09375,0.34375 -0.09375,0.34375 L 2.6875,13.9375 4.09375,15.34375 5.78125,14.375 c 0,0 0.1229911,-0.09744 0.34375,-0.09375 0.2720511,0.147787 0.5795915,0.23888 0.875,0.34375 0.033849,0.01202 0.059625,0.05108 0.09375,0.0625 C 7.4756199,14.874237 7.5,15.125 7.5,15.125 L 8,17 l 2,0 0.5,-1.875 c 0,0 0.02438,-0.250763 0.40625,-0.4375 0.03651,-0.01785 0.04988,-0.04632 0.09375,-0.0625 0.332335,-0.117979 0.666303,-0.23428 0.96875,-0.40625 0.177303,0.0173 0.28125,0.09375 0.28125,0.09375 l 1.65625,0.96875 1.40625,-1.40625 -0.96875,-1.65625 c 0,0 -0.07645,-0.103947 -0.09375,-0.28125 0.162527,-0.290859 0.262063,-0.619368 0.375,-0.9375 0.01618,-0.04387 0.04465,-0.05724 0.0625,-0.09375 C 14.874237,10.52438 15.125,10.5 15.125,10.5 L 17,10 17,8 15.125,7.5 c 0,0 -0.250763,-0.024382 -0.4375,-0.40625 C 14.669647,7.0572406 14.641181,7.0438697 14.625,7 14.55912,6.8144282 14.520616,6.6141566 14.4375,6.4375 c -0.224363,-0.4866 0,-0.71875 0,-0.71875 L 15.40625,4.0625 14,2.625 l -1.65625,1 c 0,0 -0.253337,0.1695664 -0.71875,-0.03125 l -0.03125,0 C 11.405359,3.5035185 11.198648,3.4455201 11,3.375 10.95613,3.3588185 10.942759,3.3303534 10.90625,3.3125 10.524382,3.125763 10.5,2.875 10.5,2.875 L 10,1 8,1 z m 1,5 c 1.656854,0 3,1.3431458 3,3 0,1.656854 -1.343146,3 -3,3 C 7.3431458,12 6,10.656854 6,9 6,7.3431458 7.3431458,6 9,6 z\" />\n\t</g>\n  \n\t<g id=\"parallel\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M46 70 v8 M50 70 v8 M54 70 v8\" stroke-width=\"2\" />\n\t</g>\n\t\n\t<g id=\"sequential\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" stroke-width=\"2\" d=\"M46,76h10M46,72h10 M46,68h10\"/>\n\t</g>\n\t\n\t<g id=\"compensation\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74\" stroke-width=\"1\" />\n\t</g>\n  </g>\n</svg>",
      "icon": "activity/list/type.service.png",
      "groups": [
        "Activities"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "asynchronousdefinitionpackage",
        "exclusivedefinitionpackage",
        "servicetasktriggerablepackage",
        "executionlistenerspackage",
        "multiinstance_typepackage",
        "multiinstance_cardinalitypackage",
        "multiinstance_collectionpackage",
        "multiinstance_variablepackage",
        "multiinstance_conditionpackage",
        "isforcompensationpackage",
        "servicetaskclasspackage",
        "servicetaskexpressionpackage",
        "servicetaskdelegateexpressionpackage",
        "servicetaskfieldspackage",
        "servicetaskresultvariablepackage",
        "skipexpressionpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "Activity",
        "sequence_start",
        "sequence_end",
        "ActivitiesMorph",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "ScriptTask",
      "title": "Script task",
      "description": "An automatic task with script logic",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n\n   width=\"102\"\n   height=\"82\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"20\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"40\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"60\" oryx:anchors=\"left\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"20\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"40\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"60\" oryx:anchors=\"right\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"40\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <g pointer-events=\"fill\" oryx:minimumSize=\"50 40\">\n\t<rect id=\"text_frame\" oryx:anchors=\"bottom top right left\" x=\"1\" y=\"1\" width=\"94\" height=\"79\" rx=\"10\" ry=\"10\" stroke=\"none\" stroke-width=\"0\" fill=\"none\" />\n\t<rect id=\"bg_frame\" oryx:resize=\"vertical horizontal\" x=\"0\" y=\"0\" width=\"100\" height=\"80\" rx=\"10\" ry=\"10\" stroke=\"#bbbbbb\" stroke-width=\"1\" fill=\"#f9f9f9\" />\n\t\t<text \n\t\t\tfont-size=\"12\" \n\t\t\tid=\"text_name\" \n\t\t\tx=\"50\" \n\t\t\ty=\"40\" \n\t\t\toryx:align=\"middle center\"\n\t\t\toryx:fittoelem=\"text_frame\"\n\t\t\tstroke=\"#373e48\">\n\t\t</text>\n\t\n\t<g id=\"scriptTask\" transform=\"translate(2,2)\">\n\t\t<path oryx:anchors=\"top left\"\n\t\t\td=\"m 5,2 0,0.094 c 0.23706,0.064 0.53189,0.1645 0.8125,0.375 0.5582,0.4186 1.05109,1.228 1.15625,2.5312 l 8.03125,0 1,0 1,0 c 0,-3 -2,-3 -2,-3 l -10,0 z M 4,3 4,13 2,13 c 0,3 2,3 2,3 l 9,0 c 0,0 2,0 2,-3 L 15,6 6,6 6,5.5 C 6,4.1111 5.5595,3.529 5.1875,3.25 4.8155,2.971 4.5,3 4.5,3 L 4,3 z\"\n     \t\tstyle=\"fill:#72a7d0;stroke:none\"\n\t\t/>\n\t</g>\n  \n\t<g id=\"parallel\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M46 70 v8 M50 70 v8 M54 70 v8\" stroke-width=\"2\" />\n\t</g>\n\t<g id=\"sequential\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" stroke-width=\"2\" d=\"M46,76h10M46,72h10 M46,68h10\"/>\n\t</g>\n\t\n\n\t<g id=\"compensation\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74\" stroke-width=\"1\" />\n\t</g>\n  </g>\n</svg>",
      "icon": "activity/list/type.script.png",
      "groups": [
        "Activities"
      ],
      "propertyPackages": [
        "scriptformatpackage",
        "scripttextpackage",
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "asynchronousdefinitionpackage",
        "exclusivedefinitionpackage",
        "executionlistenerspackage",
        "multiinstance_typepackage",
        "multiinstance_cardinalitypackage",
        "multiinstance_collectionpackage",
        "multiinstance_variablepackage",
        "multiinstance_conditionpackage",
        "isforcompensationpackage",
        "scriptautostorevariablespackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "Activity",
        "sequence_start",
        "sequence_end",
        "ActivitiesMorph",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "BusinessRule",
      "title": "Business rule task",
      "description": "An automatic task with rule logic",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n\n   width=\"102\"\n   height=\"82\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"20\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"40\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"60\" oryx:anchors=\"left\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"20\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"40\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"60\" oryx:anchors=\"right\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"40\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <g pointer-events=\"fill\" oryx:minimumSize=\"50 40\">\n  \t<defs>\n\t\t<radialGradient id=\"background\" cx=\"10%\" cy=\"10%\" r=\"100%\" fx=\"10%\" fy=\"10%\">\n\t\t\t<stop offset=\"0%\" stop-color=\"#ffffff\" stop-opacity=\"1\"/>\n\t\t\t<stop id=\"fill_el\" offset=\"100%\" stop-color=\"#ffffcc\" stop-opacity=\"1\"/>\n\t\t</radialGradient>\n\t</defs>\n\t\n\t<rect id=\"text_frame\" oryx:anchors=\"bottom top right left\" x=\"1\" y=\"1\" width=\"94\" height=\"79\" rx=\"10\" ry=\"10\" stroke=\"none\" stroke-width=\"0\" fill=\"none\" />\n\t<rect id=\"bg_frame\" oryx:resize=\"vertical horizontal\" x=\"0\" y=\"0\" width=\"100\" height=\"80\" rx=\"10\" ry=\"10\" stroke=\"#bbbbbb\" stroke-width=\"1\" fill=\"#f9f9f9\" />\n\t\t<text \n\t\t\tfont-size=\"12\" \n\t\t\tid=\"text_name\" \n\t\t\tx=\"50\" \n\t\t\ty=\"40\" \n\t\t\toryx:align=\"middle center\"\n\t\t\toryx:fittoelem=\"text_frame\"\n\t\t\tstroke=\"#373e48\">\n\t\t</text>\n    \n\t<g id=\"businessRuleTask\" transform=\"translate(4,3)\">\n\t\t<path oryx:anchors=\"top left\" \n\t\t\t d=\"m 1,2 0,14 16,0 0,-14 z m 1.45458,5.6000386 2.90906,0 0,2.7999224 -2.90906,0 z m 4.36364,0 8.72718,0 0,2.7999224 -8.72718,0 z m -4.36364,4.1998844 2.90906,0 0,2.800116 -2.90906,0 z m 4.36364,0 8.72718,0 0,2.800116 -8.72718,0 z\"\n     \t\tstyle=\"fill:#72a7d0;stroke:none\"\n\t\t/>\n\t</g>\n\t\n\t<g id=\"parallel\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M46 70 v8 M50 70 v8 M54 70 v8\" stroke-width=\"2\" />\n\t</g>\n\t\n\t<g id=\"sequential\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" stroke-width=\"2\" d=\"M46,76h10M46,72h10 M46,68h10\"/>\n\t</g>\n\n\t<g id=\"compensation\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74\" stroke-width=\"1\" />\n\t</g>\n  </g>\n</svg>",
      "icon": "activity/list/type.business.rule.png",
      "groups": [
        "Activities"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "asynchronousdefinitionpackage",
        "exclusivedefinitionpackage",
        "executionlistenerspackage",
        "multiinstance_typepackage",
        "multiinstance_cardinalitypackage",
        "multiinstance_collectionpackage",
        "multiinstance_variablepackage",
        "multiinstance_conditionpackage",
        "isforcompensationpackage",
        "ruletask_rulespackage",
        "ruletask_variables_inputpackage",
        "ruletask_excludepackage",
        "ruletask_resultpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "Activity",
        "sequence_start",
        "sequence_end",
        "ActivitiesMorph",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "ReceiveTask",
      "title": "Receive task",
      "description": "An task that waits for a signal",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n\n   width=\"102\"\n   height=\"82\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"20\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"40\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"60\" oryx:anchors=\"left\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"20\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"40\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"60\" oryx:anchors=\"right\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"40\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <g pointer-events=\"fill\" oryx:minimumSize=\"50 40\">\n\t<rect id=\"text_frame\" oryx:anchors=\"bottom top right left\" x=\"1\" y=\"1\" width=\"94\" height=\"79\" rx=\"10\" ry=\"10\" stroke=\"none\" stroke-width=\"0\" fill=\"none\" />\n\t<rect id=\"bg_frame\" oryx:resize=\"vertical horizontal\" x=\"0\" y=\"0\" width=\"100\" height=\"80\" rx=\"10\" ry=\"10\" stroke=\"#bbbbbb\" stroke-width=\"1\" fill=\"#f9f9f9\" />\n\t\t<text \n\t\t\tfont-size=\"12\" \n\t\t\tid=\"text_name\" \n\t\t\tx=\"50\" \n\t\t\ty=\"40\" \n\t\t\toryx:align=\"middle center\"\n\t\t\toryx:fittoelem=\"text_frame\"\n\t\t\tstroke=\"#373e48\">\n\t\t</text>\n    \n\t<g id=\"receiveTask\" transform=\"translate(4,3)\">\n\t\t<path oryx:anchors=\"left top\" \n\t\t\t style=\"fill:#16964d;stroke:none;\"\n     \t\t d=\"m 0.5,2.5 0,13 17,0 0,-13 z M 2,4 6.5,8.5 2,13 z M 4,4 14,4 9,9 z m 12,0 0,9 -4.5,-4.5 z M 7.5,9.5 9,11 10.5,9.5 15,14 3,14 z\"\n\t\t />\n\t</g>\n\t\n\t<g id=\"parallel\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M46 70 v8 M50 70 v8 M54 70 v8\" stroke-width=\"2\" />\n\t</g>\n\t\n\t<g id=\"sequential\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" stroke-width=\"2\" d=\"M46,76h10M46,72h10 M46,68h10\"/>\n\t</g>\n\n\t<g id=\"compensation\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74\" stroke-width=\"1\" />\n\t</g>\n  </g>\n</svg>",
      "icon": "activity/list/type.receive.png",
      "groups": [
        "Activities"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "asynchronousdefinitionpackage",
        "exclusivedefinitionpackage",
        "executionlistenerspackage",
        "multiinstance_typepackage",
        "multiinstance_cardinalitypackage",
        "multiinstance_collectionpackage",
        "multiinstance_variablepackage",
        "multiinstance_conditionpackage",
        "isforcompensationpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "Activity",
        "sequence_start",
        "sequence_end",
        "ActivitiesMorph",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "ManualTask",
      "title": "Manual task",
      "description": "An automatic task with no logic",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n\n   width=\"102\"\n   height=\"82\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"20\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"40\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"60\" oryx:anchors=\"left\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"20\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"40\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"60\" oryx:anchors=\"right\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"40\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <g pointer-events=\"fill\" oryx:minimumSize=\"50 40\">\n\t<rect id=\"text_frame\" oryx:anchors=\"bottom top right left\" x=\"1\" y=\"1\" width=\"94\" height=\"79\" rx=\"10\" ry=\"10\" stroke=\"none\" stroke-width=\"0\" fill=\"none\" />\n\t<rect id=\"bg_frame\" oryx:resize=\"vertical horizontal\" x=\"0\" y=\"0\" width=\"100\" height=\"80\" rx=\"10\" ry=\"10\" stroke=\"#bbbbbb\" stroke-width=\"1\" fill=\"#f9f9f9\" />\n\t\t<text \n\t\t\tfont-size=\"12\" \n\t\t\tid=\"text_name\" \n\t\t\tx=\"50\" \n\t\t\ty=\"40\" \n\t\t\toryx:align=\"middle center\"\n\t\t\toryx:fittoelem=\"text_frame\"\n\t\t\tstroke=\"#373e48\">\n\t\t</text>\n    <g id=\"manualTask\" transform=\"translate(3,1)\">\n    \t<path oryx:anchors=\"top left\"\n    \t\tstyle=\"fill:#d1b575;stroke=none\"\n     \t\td=\"m 17,9.3290326 c -0.0069,0.5512461 -0.455166,1.0455894 -0.940778,1.0376604 l -5.792746,0 c 0.0053,0.119381 0.0026,0.237107 0.0061,0.355965 l 5.154918,0 c 0.482032,-0.0096 0.925529,0.49051 0.919525,1.037574 -0.0078,0.537128 -0.446283,1.017531 -0.919521,1.007683 l -5.245273,0 c -0.01507,0.104484 -0.03389,0.204081 -0.05316,0.301591 l 2.630175,0 c 0.454137,-0.0096 0.872112,0.461754 0.866386,0.977186 C 13.619526,14.554106 13.206293,15.009498 12.75924,15 L 3.7753054,15 C 3.6045812,15 3.433552,14.94423 3.2916363,14.837136 c -0.00174,0 -0.00436,0 -0.00609,0 C 1.7212035,14.367801 0.99998255,11.458641 1,11.458641 L 1,7.4588393 c 0,0 0.6623144,-1.316333 1.8390583,-2.0872584 1.1767614,-0.7711868 6.8053358,-2.40497 7.2587847,-2.8052901 0.453484,-0.40032 1.660213,1.4859942 0.04775,2.4010487 C 8.5332315,5.882394 8.507351,5.7996113 8.4370292,5.7936859 l 6.3569748,-0.00871 c 0.497046,-0.00958 0.952273,0.5097676 0.94612,1.0738232 -0.0053,0.556126 -0.456176,1.0566566 -0.94612,1.0496854 l -4.72435,0 c 0.01307,0.1149374 0.0244,0.2281319 0.03721,0.3498661 l 5.952195,0 c 0.494517,-0.00871 0.947906,0.5066305 0.940795,1.0679848 z\"\n    \t/>\n\t</g>\n\t\n\t<g id=\"parallel\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M46 70 v8 M50 70 v8 M54 70 v8\" stroke-width=\"2\" />\n\t</g>\n\t\n\t<g id=\"sequential\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" stroke-width=\"2\" d=\"M46,76h10M46,72h10 M46,68h10\"/>\n\t</g>\n\n\t<g id=\"compensation\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74\" stroke-width=\"1\" />\n\t</g>\n  </g>\n</svg>",
      "icon": "activity/list/type.manual.png",
      "groups": [
        "Activities"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "asynchronousdefinitionpackage",
        "exclusivedefinitionpackage",
        "executionlistenerspackage",
        "multiinstance_typepackage",
        "multiinstance_cardinalitypackage",
        "multiinstance_collectionpackage",
        "multiinstance_variablepackage",
        "multiinstance_conditionpackage",
        "isforcompensationpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "Activity",
        "sequence_start",
        "sequence_end",
        "ActivitiesMorph",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "MailTask",
      "title": "Mail task",
      "description": "An mail task",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n\n   width=\"102\"\n   height=\"82\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"20\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"40\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"60\" oryx:anchors=\"left\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"20\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"40\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"60\" oryx:anchors=\"right\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"40\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <g pointer-events=\"fill\" oryx:minimumSize=\"50 40\">\n\t<rect id=\"text_frame\" oryx:anchors=\"bottom top right left\" x=\"1\" y=\"1\" width=\"94\" height=\"79\" rx=\"10\" ry=\"10\" stroke=\"none\" stroke-width=\"0\" fill=\"none\" />\n\t<rect id=\"bg_frame\" oryx:resize=\"vertical horizontal\" x=\"0\" y=\"0\" width=\"100\" height=\"80\" rx=\"10\" ry=\"10\" stroke=\"#bbbbbb\" stroke-width=\"1\" fill=\"#f9f9f9\" />\n\t\t<text \n\t\t\tfont-size=\"12\" \n\t\t\tid=\"text_name\" \n\t\t\tx=\"50\" \n\t\t\ty=\"40\" \n\t\t\toryx:align=\"middle center\"\n\t\t\toryx:fittoelem=\"text_frame\"\n\t\t\tstroke=\"#373e48\">\n\t\t</text>\n    \n\t<g id=\"sendTask\" transform=\"translate(4,3)\">\n\t\n\t<!-- path here -->\n\t\t<path oryx:anchors=\"top left\"\n\t\t\tstyle=\"fill:#16964d;stroke:none;\"\n     \t\td=\"M 1 3 L 9 11 L 17 3 L 1 3 z M 1 5 L 1 13 L 5 9 L 1 5 z M 17 5 L 13 9 L 17 13 L 17 5 z M 6 10 L 1 15 L 17 15 L 12 10 L 9 13 L 6 10 z \"\n     \t/>\n\t</g>\n\t\n\t<g id=\"parallel\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M46 70 v8 M50 70 v8 M54 70 v8\" stroke-width=\"2\" />\n\t</g>\n\t\n\t<g id=\"sequential\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" stroke-width=\"2\" d=\"M46,76h10M46,72h10 M46,68h10\"/>\n\t</g>\n\n\t<g id=\"compensation\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74\" stroke-width=\"1\" />\n\t</g>\n  </g>\n</svg>",
      "icon": "activity/list/type.send.png",
      "groups": [
        "Activities"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "asynchronousdefinitionpackage",
        "exclusivedefinitionpackage",
        "executionlistenerspackage",
        "multiinstance_typepackage",
        "multiinstance_cardinalitypackage",
        "multiinstance_collectionpackage",
        "multiinstance_variablepackage",
        "multiinstance_conditionpackage",
        "isforcompensationpackage",
        "mailtaskheaderspackage",
        "mailtasktopackage",
        "mailtaskfrompackage",
        "mailtasksubjectpackage",
        "mailtaskccpackage",
        "mailtaskbccpackage",
        "mailtasktextpackage",
        "mailtaskhtmlpackage",
        "mailtaskcharsetpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "Activity",
        "sequence_start",
        "sequence_end",
        "ActivitiesMorph",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "CamelTask",
      "title": "Camel task",
      "description": "An task that sends a message to Camel",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n\n   width=\"102\"\n   height=\"82\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"20\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"40\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"60\" oryx:anchors=\"left\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"20\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"40\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"60\" oryx:anchors=\"right\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"40\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <g pointer-events=\"fill\" oryx:minimumSize=\"50 40\">\n\t<rect id=\"text_frame\" oryx:anchors=\"bottom top right left\" x=\"1\" y=\"1\" width=\"94\" height=\"79\" rx=\"10\" ry=\"10\" stroke=\"none\" stroke-width=\"0\" fill=\"none\" />\n\t<rect id=\"bg_frame\" oryx:resize=\"vertical horizontal\" x=\"0\" y=\"0\" width=\"100\" height=\"80\" rx=\"10\" ry=\"10\" stroke=\"#bbbbbb\" stroke-width=\"1\" fill=\"#f9f9f9\" />\n\t\t<text \n\t\t\tfont-size=\"12\" \n\t\t\tid=\"text_name\" \n\t\t\tx=\"50\" \n\t\t\ty=\"40\" \n\t\t\toryx:align=\"middle center\"\n\t\t\toryx:fittoelem=\"text_frame\"\n\t\t\tstroke=\"#373e48\">\n\t\t</text>\n\t\n\t<g id=\"camelTask\" transform=\"translate(4,4)\">\n\t\t<path\n     style=\"fill:#bd4848;fill-opacity:1\"\n     d=\"m 8.1878027,15.383782 c -0.824818,-0.3427 0.375093,-1.1925 0.404055,-1.7743 0.230509,-0.8159 -0.217173,-1.5329 -0.550642,-2.2283 -0.106244,-0.5273 -0.03299,-1.8886005 -0.747194,-1.7818005 -0.712355,0.3776 -0.9225,1.2309005 -1.253911,1.9055005 -0.175574,1.0874 -0.630353,2.114 -0.775834,3.2123 -0.244009,0.4224 -1.741203,0.3888 -1.554386,-0.1397 0.651324,-0.3302 1.13227,-0.9222 1.180246,-1.6705 0.0082,-0.7042 -0.133578,-1.3681 0.302178,-2.0083 0.08617,-0.3202 0.356348,-1.0224005 -0.218996,-0.8051 -0.694517,0.2372 -1.651062,0.6128 -2.057645,-0.2959005 -0.696769,0.3057005 -1.102947,-0.611 -1.393127,-1.0565 -0.231079,-0.6218 -0.437041,-1.3041 -0.202103,-1.9476 -0.185217,-0.7514 -0.39751099,-1.5209 -0.35214999,-2.301 -0.243425,-0.7796 0.86000899,-1.2456 0.08581,-1.8855 -0.76078999,0.1964 -1.41630099,-0.7569 -0.79351899,-1.2877 0.58743,-0.52829998 1.49031699,-0.242 2.09856399,-0.77049998 0.816875,-0.3212 1.256619,0.65019998 1.923119,0.71939998 0.01194,0.7333 -0.0031,1.5042 -0.18417,2.2232 -0.194069,0.564 -0.811196,1.6968 0.06669,1.9398 0.738382,-0.173 1.095723,-0.9364 1.659041,-1.3729 0.727298,-0.3962 1.093982,-1.117 1.344137,-1.8675 0.400558,-0.8287 1.697676,-0.6854 1.955367,0.1758 0.103564,0.5511 0.9073983,1.7538 1.2472763,0.6846 0.121868,-0.6687 0.785541,-1.4454 1.518183,-1.0431 0.813587,0.4875 0.658233,1.6033 1.285504,2.2454 0.768715,0.8117 1.745394,1.4801 2.196633,2.5469 0.313781,0.8074 0.568552,1.707 0.496624,2.5733 -0.35485,0.8576005 -1.224508,-0.216 -0.64725,-0.7284 0.01868,-0.3794 -0.01834,-1.3264 -0.370249,-1.3272 -0.123187,0.7586 -0.152778,1.547 -0.10869,2.3154 0.270285,0.6662005 1.310741,0.7653005 1.060553,1.6763005 -0.03493,0.9801 0.294343,1.9505 0.148048,2.9272 -0.320479,0.2406 -0.79575,0.097 -1.185062,0.1512 -0.165725,0.3657 -0.40138,0.921 -1.020848,0.6744 -0.564671,0.1141 -1.246404,-0.266 -0.578559,-0.7715 0.679736,-0.5602 0.898618,-1.5362 0.687058,-2.3673 -0.529674,-1.108 -1.275984,-2.0954005 -1.839206,-3.1831005 -0.634619,-0.1004 -1.251945,0.6779 -1.956789,0.7408 -0.6065893,-0.038 -1.0354363,-0.06 -0.8495673,0.6969005 0.01681,0.711 0.152396,1.3997 0.157345,2.1104 0.07947,0.7464 0.171287,1.4944 0.238271,2.2351 0.237411,1.0076 -0.687542,1.1488 -1.414811,0.8598 z m 6.8675483,-1.8379 c 0.114364,-0.3658 0.206751,-1.2704 -0.114466,-1.3553 -0.152626,0.5835 -0.225018,1.1888 -0.227537,1.7919 0.147087,-0.1166 0.265559,-0.2643 0.342003,-0.4366 z\"\n     />\n\t</g>\n  \n\t<g id=\"parallel\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M46 70 v8 M50 70 v8 M54 70 v8\" stroke-width=\"2\" />\n\t</g>\n\t<g id=\"sequential\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" stroke-width=\"2\" d=\"M46,76h10M46,72h10 M46,68h10\"/>\n\t</g>\n\t\n\n\t<g id=\"compensation\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74\" stroke-width=\"1\" />\n\t</g>\n  </g>\n</svg>",
      "icon": "activity/list/type.camel.png",
      "groups": [
        "Activities"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "asynchronousdefinitionpackage",
        "exclusivedefinitionpackage",
        "executionlistenerspackage",
        "multiinstance_typepackage",
        "multiinstance_cardinalitypackage",
        "multiinstance_collectionpackage",
        "multiinstance_variablepackage",
        "multiinstance_conditionpackage",
        "isforcompensationpackage",
        "cameltaskcamelcontextpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "Activity",
        "sequence_start",
        "sequence_end",
        "ActivitiesMorph",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "HttpTask",
      "title": "Http task",
      "description": "A HTTP task",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n\n   width=\"102\"\n   height=\"82\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"20\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"40\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"60\" oryx:anchors=\"left\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"20\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"40\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"60\" oryx:anchors=\"right\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"40\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <g pointer-events=\"fill\" oryx:minimumSize=\"50 40\">\n\t<rect id=\"text_frame\" oryx:anchors=\"bottom top right left\" x=\"1\" y=\"1\" width=\"94\" height=\"79\" rx=\"10\" ry=\"10\" stroke=\"none\" stroke-width=\"0\" fill=\"none\" />\n\t<rect id=\"bg_frame\" oryx:resize=\"vertical horizontal\" x=\"0\" y=\"0\" width=\"100\" height=\"80\" rx=\"10\" ry=\"10\" stroke=\"#bbbbbb\" stroke-width=\"1\" fill=\"#f9f9f9\" />\n\t\t<text \n\t\t\tfont-size=\"12\" \n\t\t\tid=\"text_name\" \n\t\t\tx=\"50\" \n\t\t\ty=\"40\" \n\t\t\toryx:align=\"middle center\"\n\t\t\toryx:fittoelem=\"text_frame\"\n\t\t\tstroke=\"#373e48\">\n\t\t</text>\n    \n\t<g id=\"sendTask\" transform=\"translate(4,3)\">\n\t\n\t<!-- path here -->\n\t\t<path oryx:anchors=\"top left\"\n\t\t\tstyle=\"fill:#16964d;stroke:none;\"\n     \t\td=\"m 16.704699,5.9229055 q 0.358098,0 0.608767,0.2506681 0.250669,0.250668 0.250669,0.6087677 0,0.3580997 -0.250669,0.6087677 -0.250669,0.2506679 -0.608767,0.2506679 -0.358098,0 -0.608767,-0.2506679 -0.250669,-0.250668 -0.250669,-0.6087677 0,-0.3580997 0.250669,-0.6087677 0.250669,-0.2506681 0.608767,-0.2506681 z m 2.578308,-2.0053502 q -2.229162,0 -3.854034,0.6759125 -1.624871,0.6759067 -3.227361,2.2694472 -0.716197,0.725146 -1.575633,1.7457293 L 7.2329969,8.7876913 Q 7.0897576,8.8055849 7.000233,8.9309334 L 4.9948821,12.368677 q -0.035811,0.06267 -0.035811,0.143242 0,0.107426 0.080572,0.205905 l 0.5729577,0.572957 q 0.125334,0.116384 0.2864786,0.07162 l 2.4708789,-0.760963 2.5156417,2.515645 -0.76096,2.470876 q -0.009,0.02687 -0.009,0.08057 0,0.125338 0.08058,0.205905 l 0.572957,0.572958 q 0.170096,0.152194 0.349146,0.04476 l 3.437744,-2.005351 q 0.125335,-0.08953 0.143239,-0.232763 l 0.17905,-3.392986 q 1.02058,-0.859435 1.745729,-1.575629 1.67411,-1.6830612 2.309735,-3.2049805 0.635625,-1.5219191 0.635625,-3.8585111 0,-0.1253369 -0.08505,-0.2148575 -0.08505,-0.089526 -0.201431,-0.089526 z \"\n     \t/>\n\t</g>\n\t\n\t<g id=\"parallel\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M46 70 v8 M50 70 v8 M54 70 v8\" stroke-width=\"2\" />\n\t</g>\n\t\n\t<g id=\"sequential\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" stroke-width=\"2\" d=\"M46,76h10M46,72h10 M46,68h10\"/>\n\t</g>\n\n\t<g id=\"compensation\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74\" stroke-width=\"1\" />\n\t</g>\n  </g>\n</svg>",
      "icon": "activity/list/type.http.png",
      "groups": [
        "Activities"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "asynchronousdefinitionpackage",
        "exclusivedefinitionpackage",
        "executionlistenerspackage",
        "multiinstance_typepackage",
        "multiinstance_cardinalitypackage",
        "multiinstance_collectionpackage",
        "multiinstance_variablepackage",
        "multiinstance_conditionpackage",
        "isforcompensationpackage",
        "httptaskrequestmethodpackage",
        "httptaskrequesturlpackage",
        "httptaskrequestheaderspackage",
        "httptaskrequestbodypackage",
        "httptaskrequestbodyencodingpackage",
        "httptaskrequesttimeoutpackage",
        "httptaskdisallowredirectspackage",
        "httptaskfailstatuscodespackage",
        "httptaskhandlestatuscodespackage",
        "httptaskignoreexceptionpackage",
        "httptaskresponsevariablenamepackage",
        "httptasksaverequestvariablespackage",
        "httptasksaveresponseparameterspackage",
        "httptaskresultvariableprefixpackage",
        "httptasksaveresponseparameterstransientpackage",
        "httptasksaveresponseasjsonpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "Activity",
        "sequence_start",
        "sequence_end",
        "ActivitiesMorph",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "MuleTask",
      "title": "Mule task",
      "description": "An task that sends a message to Mule",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n\n   width=\"102\"\n   height=\"82\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"20\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"40\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"60\" oryx:anchors=\"left\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"20\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"40\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"60\" oryx:anchors=\"right\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"40\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <g pointer-events=\"fill\" oryx:minimumSize=\"50 40\">\n\t<rect id=\"text_frame\" oryx:anchors=\"bottom top right left\" x=\"1\" y=\"1\" width=\"94\" height=\"79\" rx=\"10\" ry=\"10\" stroke=\"none\" stroke-width=\"0\" fill=\"none\" />\n\t<rect id=\"bg_frame\" oryx:resize=\"vertical horizontal\" x=\"0\" y=\"0\" width=\"100\" height=\"80\" rx=\"10\" ry=\"10\" stroke=\"#bbbbbb\" stroke-width=\"1\" fill=\"#f9f9f9\" />\n\t\t<text \n\t\t\tfont-size=\"12\" \n\t\t\tid=\"text_name\" \n\t\t\tx=\"50\" \n\t\t\ty=\"40\" \n\t\t\toryx:align=\"middle center\"\n\t\t\toryx:fittoelem=\"text_frame\"\n\t\t\tstroke=\"#373e48\">\n\t\t</text>\n\t\n\t<g id=\"muleTask\" transform=\"translate(4,4)\">\n\t\t<path\n     style=\"fill:#bd4848;fill-opacity:1\"\n     d=\"M 8,0 C 3.581722,0 0,3.5817 0,8 c 0,4.4183 3.581722,8 8,8 4.418278,0 8,-3.5817 8,-8 L 16,7.6562 C 15.813571,3.3775 12.282847,0 8,0 z M 5.1875,2.7812 8,7.3437 10.8125,2.7812 c 1.323522,0.4299 2.329453,1.5645 2.8125,2.8438 1.136151,2.8609 -0.380702,6.4569 -3.25,7.5937 -0.217837,-0.6102 -0.438416,-1.2022 -0.65625,-1.8125 0.701032,-0.2274 1.313373,-0.6949 1.71875,-1.3125 0.73624,-1.2317 0.939877,-2.6305 -0.03125,-4.3125 l -2.75,4.0625 -0.65625,0 -0.65625,0 -2.75,-4 C 3.5268433,7.6916 3.82626,8.862 4.5625,10.0937 4.967877,10.7113 5.580218,11.1788 6.28125,11.4062 6.063416,12.0165 5.842837,12.6085 5.625,13.2187 2.755702,12.0819 1.238849,8.4858 2.375,5.625 2.858047,4.3457 3.863978,3.2112 5.1875,2.7812 z\"\n     />\n\t</g>\n  \n\t<g id=\"parallel\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M46 70 v8 M50 70 v8 M54 70 v8\" stroke-width=\"2\" />\n\t</g>\n\t<g id=\"sequential\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" stroke-width=\"2\" d=\"M46,76h10M46,72h10 M46,68h10\"/>\n\t</g>\n\t\n\n\t<g id=\"compensation\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74\" stroke-width=\"1\" />\n\t</g>\n  </g>\n</svg>",
      "icon": "activity/list/type.mule.png",
      "groups": [
        "Activities"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "asynchronousdefinitionpackage",
        "exclusivedefinitionpackage",
        "executionlistenerspackage",
        "multiinstance_typepackage",
        "multiinstance_cardinalitypackage",
        "multiinstance_collectionpackage",
        "multiinstance_variablepackage",
        "multiinstance_conditionpackage",
        "isforcompensationpackage",
        "muletaskendpointurlpackage",
        "muletasklanguagepackage",
        "muletaskpayloadexpressionpackage",
        "muletaskresultvariablepackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "Activity",
        "sequence_start",
        "sequence_end",
        "ActivitiesMorph",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "SendTask",
      "title": "Send task",
      "description": "An task that sends a message",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n\n   width=\"102\"\n   height=\"82\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"20\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"40\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"60\" oryx:anchors=\"left\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"20\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"40\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"60\" oryx:anchors=\"right\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"40\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <g pointer-events=\"fill\" oryx:minimumSize=\"50 40\">\n\t<rect id=\"text_frame\" oryx:anchors=\"bottom top right left\" x=\"1\" y=\"1\" width=\"94\" height=\"79\" rx=\"10\" ry=\"10\" stroke=\"none\" stroke-width=\"0\" fill=\"none\" />\n\t<rect id=\"bg_frame\" oryx:resize=\"vertical horizontal\" x=\"0\" y=\"0\" width=\"100\" height=\"80\" rx=\"10\" ry=\"10\" stroke=\"#bbbbbb\" stroke-width=\"1\" fill=\"#f9f9f9\" />\n\t\t<text \n\t\t\tfont-size=\"12\" \n\t\t\tid=\"text_name\" \n\t\t\tx=\"50\" \n\t\t\ty=\"40\" \n\t\t\toryx:align=\"middle center\"\n\t\t\toryx:fittoelem=\"text_frame\"\n\t\t\tstroke=\"#373e48\">\n\t\t</text>\n    \n\t<g id=\"sendTask\" transform=\"translate(4,3)\">\n\t\n\t<!-- path here -->\n\t\t<path oryx:anchors=\"top left\"\n\t\t\tstyle=\"fill:#16964d;stroke:none;\"\n     \t\td=\"M 1 3 L 9 11 L 17 3 L 1 3 z M 1 5 L 1 13 L 5 9 L 1 5 z M 17 5 L 13 9 L 17 13 L 17 5 z M 6 10 L 1 15 L 17 15 L 12 10 L 9 13 L 6 10 z \"\n     \t/>\n\t</g>\n\t\n\t<g id=\"parallel\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M46 70 v8 M50 70 v8 M54 70 v8\" stroke-width=\"2\" />\n\t</g>\n\t\n\t<g id=\"sequential\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" stroke-width=\"2\" d=\"M46,76h10M46,72h10 M46,68h10\"/>\n\t</g>\n\n\t<g id=\"compensation\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74\" stroke-width=\"1\" />\n\t</g>\n  </g>\n</svg>",
      "icon": "activity/list/type.send.png",
      "groups": [
        "Activities"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "asynchronousdefinitionpackage",
        "exclusivedefinitionpackage",
        "executionlistenerspackage",
        "multiinstance_typepackage",
        "multiinstance_cardinalitypackage",
        "multiinstance_collectionpackage",
        "multiinstance_variablepackage",
        "multiinstance_conditionpackage",
        "isforcompensationpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "Activity",
        "sequence_start",
        "sequence_end",
        "ActivitiesMorph",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "DecisionTask",
      "title": "Decision task",
      "description": "Task to use the Flowable DMN rule engine",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n\n   width=\"102\"\n   height=\"82\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"20\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"40\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"60\" oryx:anchors=\"left\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"20\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"40\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"60\" oryx:anchors=\"right\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"40\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <g pointer-events=\"fill\" oryx:minimumSize=\"50 40\">\n\t<rect id=\"text_frame\" oryx:anchors=\"bottom top right left\" x=\"1\" y=\"1\" width=\"94\" height=\"79\" rx=\"10\" ry=\"10\" stroke=\"none\" stroke-width=\"0\" fill=\"none\" />\n\t<rect id=\"bg_frame\" oryx:resize=\"vertical horizontal\" x=\"0\" y=\"0\" width=\"100\" height=\"80\" rx=\"10\" ry=\"10\" stroke=\"#bbbbbb\" stroke-width=\"1\" fill=\"#f9f9f9\" />\n\t\t<text \n\t\t\tfont-size=\"12\" \n\t\t\tid=\"text_name\" \n\t\t\tx=\"50\" \n\t\t\ty=\"40\" \n\t\t\toryx:align=\"middle center\"\n\t\t\toryx:fittoelem=\"text_frame\"\n\t\t\tstroke=\"#373e48\">\n\t\t</text>\n\t\n\t<g id=\"decisionTask\" transform=\"translate(4,3)\">\n\t\t<path oryx:anchors=\"top left\"\n\t\t\t d=\"m 1,2 0,14 16,0 0,-14 z m 1.9,2.4000386 3.7,0 0,2.7999224 -3.7,0 z m 4.36364,0 3.7,0 0,2.7999224 -3.7,0 z m 4.36364,0 3.7,0 0,2.7999224 -3.7,0 z m -8.67364,3.9 3.7,0 0,2.7999224 -3.7,0 z m 4.36364,0 3.7,0 0,2.7999224 -3.7,0 z m 4.36364,0 3.7,0 0,2.7999224 -3.7,0 z m -8.67364,3.9 3.7,0 0,2.7999224 -3.7,0 z m 4.36364,0 3.7,0 0,2.7999224 -3.7,0 z m 4.36364,0 3.7,0 0,2.7999224 -3.7,0 z\"\n     \t\tstyle=\"fill:#72a7d0;stroke:none\"\n\t\t/>\n\t</g>\n\n\t<g id=\"parallel\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M46 70 v8 M50 70 v8 M54 70 v8\" stroke-width=\"2\" />\n\t</g>\n\t\n\t<g id=\"sequential\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" stroke-width=\"2\" d=\"M46,76h10M46,72h10 M46,68h10\"/>\n\t</g>\n\t\n\t<g id=\"compensation\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74\" stroke-width=\"1\" />\n\t</g>\n  </g>\n</svg>",
      "icon": "activity/list/type.decision.png",
      "groups": [
        "Activities"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "asynchronousdefinitionpackage",
        "exclusivedefinitionpackage",
        "executionlistenerspackage",
        "multiinstance_typepackage",
        "multiinstance_cardinalitypackage",
        "multiinstance_collectionpackage",
        "multiinstance_variablepackage",
        "multiinstance_conditionpackage",
        "isforcompensationpackage",
        "decisiontaskdecisiontablereferencepackage",
        "decisiontaskthrowerroronnohitspackage",
        "decisiontaskfallbacktodefaulttenantpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "Activity",
        "sequence_start",
        "sequence_end",
        "ActivitiesMorph",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "ShellTask",
      "title": "Shell task",
      "description": "An automatic task with shell batch logic",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n\n   width=\"102\"\n   height=\"82\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"20\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"40\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"60\" oryx:anchors=\"left\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"20\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"40\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"60\" oryx:anchors=\"right\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"40\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <g pointer-events=\"fill\" oryx:minimumSize=\"50 40\">\n\t<rect id=\"text_frame\" oryx:anchors=\"bottom top right left\" x=\"1\" y=\"1\" width=\"94\" height=\"79\" rx=\"10\" ry=\"10\" stroke=\"none\" stroke-width=\"0\" fill=\"none\" />\n\t<rect id=\"bg_frame\" oryx:resize=\"vertical horizontal\" x=\"0\" y=\"0\" width=\"100\" height=\"80\" rx=\"10\" ry=\"10\" stroke=\"#bbbbbb\" stroke-width=\"1\" fill=\"#f9f9f9\" />\n\t\t<text \n\t\t\tfont-size=\"12\" \n\t\t\tid=\"text_name\" \n\t\t\tx=\"50\" \n\t\t\ty=\"40\" \n\t\t\toryx:align=\"middle center\"\n\t\t\toryx:fittoelem=\"text_frame\"\n\t\t\tstroke=\"#373e48\">\n\t\t</text>\n\t\n\t<g id=\"shellTask\" transform=\"translate(2,2)\">\n\t\t<path oryx:anchors=\"top left\"\n\t\t\td=\"m 1,2 0,14 16,0 0,-14 z m 1.4,3 12.7,0 0,10 -12.7,0 z\"\n     \t\tstyle=\"fill:#72a7d0;stroke:none\"\n\t\t/><text x='3' y='9' style='fill:#72a7d0;font-size:5px;'><![CDATA[>_]]></text>\n\t</g>\n  \n\t<g id=\"parallel\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M46 70 v8 M50 70 v8 M54 70 v8\" stroke-width=\"2\" />\n\t</g>\n\t<g id=\"sequential\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" stroke-width=\"2\" d=\"M46,76h10M46,72h10 M46,68h10\"/>\n\t</g>\n\t\n\n\t<g id=\"compensation\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74\" stroke-width=\"1\" />\n\t</g>\n  </g>\n</svg>",
      "icon": "activity/list/type.shell.png",
      "groups": [
        "Activities"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "asynchronousdefinitionpackage",
        "shellcommandpackage",
        "shellarg1package",
        "shellarg2package",
        "shellarg3package",
        "shellarg4package",
        "shellarg5package",
        "shellwaitpackage",
        "shelloutputvariablepackage",
        "shellerrorcodevariablepackage",
        "shellredirecterrorpackage",
        "shellcleanenvpackage",
        "shelldirectorypackage",
        "exclusivedefinitionpackage",
        "executionlistenerspackage",
        "multiinstance_typepackage",
        "multiinstance_cardinalitypackage",
        "multiinstance_collectionpackage",
        "multiinstance_variablepackage",
        "multiinstance_conditionpackage",
        "isforcompensationpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "Activity",
        "sequence_start",
        "sequence_end",
        "ActivitiesMorph",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "SubProcess",
      "title": "Sub process",
      "description": "A sub process scope",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n   width=\"200\"\n   height=\"160\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"50\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"80\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"110\" oryx:anchors=\"left\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"70\" oryx:cy=\"159\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"100\" oryx:cy=\"159\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"130\" oryx:cy=\"159\" oryx:anchors=\"bottom\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"199\" oryx:cy=\"50\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"199\" oryx:cy=\"80\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"199\" oryx:cy=\"110\" oryx:anchors=\"right\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"70\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"100\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"130\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"100\" oryx:cy=\"80\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <g pointer-events=\"fill\" oryx:minimumSize=\"120 100\" oryx:maximumSize=\"\" >\n    <rect id=\"text_frame\" oryx:anchors=\"bottom top right left\" x=\"0\" y=\"0\" width=\"190\" height=\"160\" rx=\"10\" ry=\"10\" stroke=\"none\" stroke-width=\"0\" fill=\"none\" />\n\t<rect id=\"bg_frame\" oryx:anchors=\"bottom top right left\" x=\"0\" y=\"0\" width=\"200\" height=\"160\" rx=\"10\" ry=\"10\" stroke=\"#bbbbbb\" stroke-width=\"1\" fill=\"#ffffff\" />\n\t<rect id=\"border\" oryx:anchors=\"top bottom left right\" oryx:resize=\"vertical horizontal\" x=\"2.5\" y=\"2.5\" width=\"195\" height=\"155\" rx=\"8\" ry=\"8\" stroke=\"black\" stroke-width=\"1\" fill=\"none\" />\n\t<text \n\t\tfont-size=\"12\" \n\t\tid=\"text_name\" \n\t\tx=\"8\" \n\t\ty=\"10\" \n\t\toryx:align=\"top left\"\n\t\toryx:fittoelem=\"text_frame\"\n\t\toryx:anchors=\"left top\" \n\t\tstroke=\"#373e48\">\n\t</text>\n\t\n\t<g \tid=\"parallel\"\n\t\ttransform=\"translate(1)\">\n\t\t<path \n\t\t\tid=\"parallelpath\"\n\t\t\toryx:anchors=\"bottom\" \n\t\t\tfill=\"none\" stroke=\"#bbbbbb\" d=\"M96 145 v10 M100 145 v10 M104 145 v10\" \n\t\t\tstroke-width=\"2\"\n\t\t/>\n\t</g>\n\t<g \tid=\"sequential\"\n\t\ttransform=\"translate(1)\">\n\t\t<path \n\t\t\tid=\"sequentialpath\"\n\t\t\toryx:anchors=\"bottom\" \n\t\t\tfill=\"none\" stroke=\"#bbbbbb\" stroke-width=\"2\" d=\"M95,154h10 M95,150h10 M95,146h10\"\n\t\t/>\n\t</g>\n  </g>\n</svg>",
      "icon": "activity/expanded.subprocess.png",
      "groups": [
        "Structural"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "asynchronousdefinitionpackage",
        "exclusivedefinitionpackage",
        "datapropertiespackage",
        "executionlistenerspackage",
        "multiinstance_typepackage",
        "multiinstance_cardinalitypackage",
        "multiinstance_collectionpackage",
        "multiinstance_variablepackage",
        "multiinstance_conditionpackage",
        "istransactionpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "Activity",
        "sequence_start",
        "sequence_end",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "CollapsedSubProcess",
      "title": "Collapsed Sub process",
      "description": "A sub process scope",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n   width=\"102\"\n   height=\"82\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"20\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"40\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"60\" oryx:anchors=\"left\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"20\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"40\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"60\" oryx:anchors=\"right\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"40\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <g pointer-events=\"fill\" oryx:minimumSize=\"50 40\">\n\t<rect id=\"text_frame\" oryx:anchors=\"bottom top right left\" x=\"1\" y=\"1\" width=\"94\" height=\"79\" rx=\"10\" ry=\"10\" stroke=\"none\" stroke-width=\"0\" fill=\"none\" />\n\t<rect id=\"bg_frame\" oryx:resize=\"vertical horizontal\" x=\"0\" y=\"0\" width=\"100\" height=\"80\" rx=\"10\" ry=\"10\" stroke=\"#bbbbbb\" stroke-width=\"1\" fill=\"#f9f9f9\" />\n\t\t<text \n\t\t\tfont-size=\"12\" \n\t\t\tid=\"text_name\" \n\t\t\tx=\"50\" \n\t\t\ty=\"40\" \n\t\t\toryx:align=\"middle center\"\n\t\t\toryx:fittoelem=\"text_frame\"\n\t\t\tstroke=\"#373e48\">\n\t\t</text>\n\t<g id=\"subprocess\">\n\t\t<rect height=\"10\" width=\"10\" x=\"45\" y=\"65\" stroke=\"#bbbbbb\" fill=\"none\" />\n\t\t<path d=\"M50 65 L50 75\" stroke=\"black\" />\n\t\t<path d=\"M45 70 L55 70\" stroke=\"black\" />\n\t</g>\n  </g>\n</svg>",
      "icon": "activity/subprocess.png",
      "groups": [
        "Structural"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "asynchronousdefinitionpackage",
        "exclusivedefinitionpackage",
        "datapropertiespackage",
        "executionlistenerspackage",
        "multiinstance_typepackage",
        "multiinstance_cardinalitypackage",
        "multiinstance_collectionpackage",
        "multiinstance_variablepackage",
        "multiinstance_conditionpackage",
        "istransactionpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "Activity",
        "sequence_start",
        "sequence_end",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "EventSubProcess",
      "title": "Event sub process",
      "description": "A event sub process scope",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n   width=\"200\"\n   height=\"160\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"0\" oryx:cy=\"80\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"100\" oryx:cy=\"160\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"200\" oryx:cy=\"80\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"100\" oryx:cy=\"0\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"100\" oryx:cy=\"80\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <g pointer-events=\"fill\" oryx:minimumSize=\"120 100\" oryx:maximumSize=\"\" >\n\t<rect id=\"text_frame\" oryx:anchors=\"bottom top right left\" x=\"0\" y=\"0\" width=\"190\" height=\"160\" rx=\"10\" ry=\"10\" stroke=\"none\" stroke-width=\"0\" fill=\"none\" />\n\t<rect id=\"bg_frame\" oryx:anchors=\"bottom top right left\" oryx:resize=\"vertical horizontal\" x=\"0\" y=\"0\" width=\"200\" height=\"160\" rx=\"10\" ry=\"10\" stroke=\"#bbbbbb\" stroke-width=\"1\" stroke-dasharray=\"2,2,2\" fill=\"#ffffff\" />\n    \t<text \n\t\t\tfont-size=\"12\" \n\t\t\tid=\"text_name\" \n\t\t\tx=\"8\" \n\t\t\ty=\"10\" \n\t\t\toryx:align=\"top left\"\n\t\t\toryx:fittoelem=\"text_frame\"\n\t\t\toryx:anchors=\"left top\" \n\t\t\tstroke=\"#373e48\">\n\t\t</text>\n    \t\n\t<g id=\"none\"></g>\n\t\n  </g>\n</svg>",
      "icon": "activity/event.subprocess.png",
      "groups": [
        "Structural"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "asynchronousdefinitionpackage",
        "exclusivedefinitionpackage",
        "executionlistenerspackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "Activity",
        "all",
        "EventSubProcess"
      ]
    },
    {
      "type": "node",
      "id": "CallActivity",
      "title": "Call activity",
      "description": "A call activity",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n\n   width=\"102\"\n   height=\"82\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"20\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"40\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"60\" oryx:anchors=\"left\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"79\" oryx:anchors=\"bottom\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"20\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"40\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"99\" oryx:cy=\"60\" oryx:anchors=\"right\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"25\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"75\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"50\" oryx:cy=\"40\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <g pointer-events=\"fill\" oryx:minimumSize=\"50 40\">\n\t<rect id=\"text_frame\" oryx:anchors=\"bottom top right left\" x=\"1\" y=\"1\" width=\"94\" height=\"79\" rx=\"10\" ry=\"10\" stroke=\"none\" stroke-width=\"0\" fill=\"none\" />\n    <rect oryx:resize=\"vertical horizontal\" oryx:anchors=\"bottom top right left\" x=\"0\" y=\"0\" width=\"100\" height=\"80\" rx=\"10\" ry=\"10\" stroke=\"#bbbbbb\" stroke-width=\"4\" fill=\"none\" />\n\t<rect id=\"bg_frame\" oryx:resize=\"vertical horizontal\" x=\"0\" y=\"0\" width=\"100\" height=\"80\" rx=\"10\" ry=\"10\" stroke=\"#bbbbbb\" stroke-width=\"1\" fill=\"#f9f9f9\" />\n\t\t<text \n\t\t\tfont-size=\"12\" \n\t\t\tid=\"text_name\" \n\t\t\tx=\"50\" \n\t\t\ty=\"40\" \n\t\t\toryx:align=\"middle center\"\n\t\t\toryx:fittoelem=\"text_frame\"\n\t\t\tstroke=\"#373e48\">\n\t\t</text>\n    \n\t<g id=\"parallel\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M46 70 v8 M50 70 v8 M54 70 v8\" stroke-width=\"2\" />\n\t</g>\n\t\n\t<g id=\"sequential\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" stroke-width=\"2\" d=\"M46,76h10M46,72h10 M46,68h10\"/>\n\t</g>\n\n\t<g id=\"compensation\">\n\t\t<path oryx:anchors=\"bottom\" fill=\"none\" stroke=\"#bbbbbb\" d=\"M 62 74 L 66 70 L 66 78 L 62 74 L 62 70 L 58 74 L 62 78 L 62 74\" stroke-width=\"1\" />\n\t</g>\n  </g>\n</svg>",
      "icon": "activity/task.png",
      "groups": [
        "Structural"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "asynchronousdefinitionpackage",
        "exclusivedefinitionpackage",
        "callactivitycompleteasyncpackage",
        "executionlistenerspackage",
        "callactivitycalledelementpackage",
        "callactivitycalledelementtypepackage",
        "callactivityinparameterspackage",
        "callactivityoutparameterspackage",
        "callactivityinheritvariablespackage",
        "callactivitysamedeploymentpackage",
        "callactivityfallbacktodefaulttenantpackage",
        "callactivityprocessinstancenamepackage",
        "callactivityinheritbusinesskeypackage",
        "callactivitybusinesskeypackage",
        "callactivityuselocalscopeforoutparameterspackage",
        "multiinstance_typepackage",
        "multiinstance_cardinalitypackage",
        "multiinstance_collectionpackage",
        "multiinstance_variablepackage",
        "multiinstance_conditionpackage",
        "isforcompensationpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "Activity",
        "sequence_start",
        "sequence_end",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "ExclusiveGateway",
      "title": "Exclusive gateway",
      "description": "A choice gateway",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns=\"http://www.w3.org/2000/svg\"\n   version=\"1.0\"\n   width=\"40\"\n   height=\"40\">\n  <defs\n     id=\"defs4\" />\n  <oryx:magnets>\n    <oryx:magnet\n       oryx:default=\"yes\"\n       oryx:cy=\"16\"\n       oryx:cx=\"16\" />\n  </oryx:magnets>\t\t\t\t\t\n  <g>\n  \n    <path\n       d=\"M -4.5,16 L 16,-4.5 L 35.5,16 L 16,35.5z\"\n       id=\"bg_frame\"\n       fill=\"#ffffff\"\n       stroke=\"#585858\"\n       style=\"stroke-width:1\" />\n    <g\n       id=\"cross\">\n      <path\n      \tid=\"crosspath\"\n      \tstroke=\"#585858\"\n      \tfill=\"#585858\"\n        d=\"M 8.75,7.55 L 12.75,7.55 L 23.15,24.45 L 19.25,24.45 z\"\n        style=\"stroke-width:1\" />\n      <path\n      \tid=\"crosspath2\"\n      \tstroke=\"#585858\"\n      \tfill=\"#585858\"\n        d=\"M 8.75,24.45 L 19.25,7.55 L 23.15,7.55 L 12.75,24.45 z\"\n        style=\"stroke-width:1\" />\n    </g>\n\t\n\t<text id=\"text_name\" x=\"26\" y=\"26\" oryx:align=\"left top\"/>\n\t\n  </g>\n</svg>\n",
      "icon": "gateway/exclusive.databased.png",
      "groups": [
        "Gateways"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "asynchronousdefinitionpackage",
        "exclusivedefinitionpackage",
        "sequencefloworderpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "sequence_start",
        "GatewaysMorph",
        "sequence_end",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "ParallelGateway",
      "title": "Parallel gateway",
      "description": "A parallel gateway",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns=\"http://www.w3.org/2000/svg\"\n   version=\"1.0\"\n   width=\"40\"\n   height=\"40\">\n   \n  <oryx:magnets>\n    <oryx:magnet\n       oryx:default=\"yes\"\n       oryx:cy=\"16\"\n       oryx:cx=\"16\" />\n  </oryx:magnets>\n  <g>\n    <path\n       d=\"M -4.5,16 L 16,-4.5 L 35.5,16 L 16,35.5z\"\n       id=\"bg_frame\"\n       fill=\"#ffffff\"\n       stroke=\"#585858\"\n       style=\"stroke-width:1\" />\n    <path\n       d=\"M 6.75,16 L 25.75,16 M 16,6.75 L 16,25.75\"\n       id=\"path9\"\n       stroke=\"#585858\"\n       style=\"fill:none;stroke-width:3\" />\n    \n\t<text id=\"text_name\" x=\"26\" y=\"26\" oryx:align=\"left top\"/>\n\t\n  </g>\n</svg>\n",
      "icon": "gateway/parallel.png",
      "groups": [
        "Gateways"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "asynchronousdefinitionpackage",
        "exclusivedefinitionpackage",
        "sequencefloworderpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "sequence_start",
        "GatewaysMorph",
        "sequence_end",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "InclusiveGateway",
      "title": "Inclusive gateway",
      "description": "An inclusive gateway",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns=\"http://www.w3.org/2000/svg\"\n   version=\"1.0\"\n   width=\"40\"\n   height=\"40\">\n  <oryx:magnets>\n    <oryx:magnet\n       oryx:default=\"yes\"\n       oryx:cy=\"16\"\n       oryx:cx=\"16\" />\n  </oryx:magnets>\n  <g>\n\n    <path\n       d=\"M -4.5,16 L 16,-4.5 L 35.5,16 L 16,35.5z\"\n       id=\"bg_frame\"\n       fill=\"#ffffff\"\n       stroke=\"#585858\"\n       style=\"stroke-width:1\" />\n    <circle\n    \tid=\"circle\"\n    \tstroke=\"#585858\"\n\t\tcx=\"16\"\n\t\tcy=\"16\"\n\t\tr=\"9.75\"\n\t\tstyle=\"fill:none;stroke-width:2.5\" />\n    \n\t<text id=\"text_name\" x=\"26\" y=\"26\" oryx:align=\"left top\"/>\n\t\n  </g>\n</svg>\n",
      "icon": "gateway/inclusive.png",
      "groups": [
        "Gateways"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "asynchronousdefinitionpackage",
        "exclusivedefinitionpackage",
        "sequencefloworderpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "sequence_start",
        "GatewaysMorph",
        "sequence_end",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "EventGateway",
      "title": "Event gateway",
      "description": "An event gateway",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns=\"http://www.w3.org/2000/svg\"\n   version=\"1.0\"\n   width=\"40\"\n   height=\"40\">\n\n  <oryx:magnets>\n    <oryx:magnet\n       oryx:default=\"yes\"\n       oryx:cy=\"16\"\n       oryx:cx=\"16\" />\n  </oryx:magnets>\n  <g\n     id=\"g1027\">\n    <path\n       d=\"M -4.5,16 L 16,-4.5 L 35.5,16 L 16,35.5z\"\n       id=\"bg_frame\"\n       fill=\"#ffffff\"\n       stroke=\"#585858\"\n       style=\"stroke-width:1\" />\n    <circle\n       id=\"circle\"\n       cx=\"16\"\n       cy=\"16\"\n       r=\"10.4\"\n       stroke=\"#585858\"\n       style=\"fill:none;stroke-width:0.5\" />\n    <circle\n       id=\"circle2\"\n       cx=\"16\"\n       cy=\"16\"\n       r=\"11.7\"\n       stroke=\"#585858\"\n       style=\"fill:none;stroke-width:0.5\" />\n    <path\n       d=\"M 20.327514,22.344972 L 11.259248,22.344216 L 8.4577203,13.719549 L 15.794545,8.389969 L 23.130481,13.720774 L 20.327514,22.344972 z\"\n       id=\"middlePolygon\"\n       stroke=\"#585858\"\n       style=\"fill:none;fill-opacity:1;stroke-width:1.39999998;stroke-linejoin:bevel;stroke-opacity:1\" />\n    <g\n       id=\"instantiate\">\n      <path\n         d=\"M -4.5,16 L 16,-4.5 L 35.5,16 L 16,35.5z\"\n         id=\"bg_frame2\"\n         fill=\"#ffffff\"\n         stroke=\"#585858\"\n         style=\"stroke-width:1\" />\n      <circle\n         id=\"circle3\"\n         cx=\"16\"\n         cy=\"16\"\n         r=\"11\"\n         stroke=\"#585858\"\n         style=\"fill:none;stroke-width:1\" />\n      <path\n         d=\"M 20.327514,22.344972 L 11.259248,22.344216 L 8.4577203,13.719549 L 15.794545,8.389969 L 23.130481,13.720774 L 20.327514,22.344972 z\"\n         id=\"middlePolygon2\"\n         stroke=\"#585858\"\n         style=\"fill:none;fill-opacity:1;stroke-width:1.39999998;stroke-linejoin:bevel;stroke-opacity:1\" />\n      <g\n         id=\"parallel\">\n        <path\n           d=\"M -4.5,16 L 16,-4.5 L 35.5,16 L 16,35.5z\"\n           id=\"bg_frame3\"\n           style=\"stroke-width:1\"\n           stroke=\"#585858\"\n           fill=\"#ffffff\" />\n\n        <path\n           style=\"fill:none;stroke-width:1.5\"\n           stroke=\"#585858\"\n           d=\"m 16.128163,8.1671486 7.721331,5.6098764 -2.949286,9.076969 -9.544091,0 -2.9492862,-9.07697 z\"/>\n        <circle     \n           cx=\"16\"\n           cy=\"16\"\n           r=\"11.5\"\n           stroke=\"#585858\"\n           style=\"fill:none;stroke:#000000;stroke-width:0.4;\"\n           />\n        <circle \n           cx=\"16\"\n           cy=\"16\"\n           r=\"10.5\"\n           stroke=\"#585858\"\n           style=\"fill:none;stroke-width:0.4;\" />\n      </g>\n    </g>\n    <text\n       id=\"text_name\"\n       x=\"26\"\n       y=\"26\"\n       oryx:align=\"left top\" />\n  </g>\n\n</svg>\n",
      "icon": "gateway/eventbased.png",
      "groups": [
        "Gateways"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "asynchronousdefinitionpackage",
        "exclusivedefinitionpackage",
        "sequencefloworderpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "sequence_start",
        "GatewaysMorph",
        "sequence_end",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "BoundaryErrorEvent",
      "title": "Boundary error event",
      "description": "A boundary event that catches a BPMN error",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   width=\"40\"\n   height=\"40\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"16\" oryx:cy=\"16\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx=\"16\" oryx:cy=\"16\" />\n  <g pointer-events=\"fill\">\n    <circle id=\"bg_frame\" cx=\"16\" cy=\"16\" r=\"15\" stroke=\"#585858\" fill=\"#ffffff\" stroke-width=\"1\"/>\n    <circle id=\"frame\" cx=\"16\" cy=\"16\" r=\"12\" stroke=\"#585858\" fill=\"none\" stroke-width=\"1\"/>\n    \n    <path\n         stroke=\"#585858\"\n         style=\"fill:none;stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10\"\n         d=\"M 22.820839,11.171502 L 19.36734,24.58992 L 13.54138,14.281819 L 9.3386512,20.071607 L 13.048949,6.8323057 L 18.996148,16.132659 L 22.820839,11.171502 z\"\n         id=\"errorPolygon\" />\n\t<text font-size=\"11\" \n\t\tid=\"text_name\" \n\t\tx=\"16\" y=\"33\" \n\t\toryx:align=\"top center\" \n\t\tstroke=\"#373e48\"\n\t></text>\n  </g>\n</svg>",
      "icon": "catching/error.png",
      "groups": [
        "Boundary Events"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "errorrefpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "sequence_start",
        "BoundaryEventsMorph",
        "IntermediateEventOnActivityBoundary"
      ]
    },
    {
      "type": "node",
      "id": "BoundaryTimerEvent",
      "title": "Boundary timer event",
      "description": "A boundary event with a timer trigger",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   width=\"40\"\n   height=\"40\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"16\" oryx:cy=\"16\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx=\"16\" oryx:cy=\"16\" />\n  <g pointer-events=\"fill\">\n    <circle \n    \tid=\"bg_frame\" \n    \tcx=\"16\" \n    \tcy=\"16\" \n    \tr=\"15\" \n    \tstroke=\"#585858\" \n    \tfill=\"#ffffff\" \n    \tstroke-width=\"1\"\n    \tstyle=\"stroke-dasharray: 5.5, 3\" />\n    \t\n    <circle \n    \tid=\"frame2_non_interrupting\" \n    \tcx=\"16\" \n    \tcy=\"16\" \n    \tr=\"12\" \n    \tstroke=\"#585858\" \n    \tfill=\"none\" \n    \tstroke-width=\"1\"\n    \tstyle=\"stroke-dasharray: 4.5, 3\" />\n    \n    <circle id=\"frame\" cx=\"16\" cy=\"16\" r=\"15\" stroke=\"#585858\" fill=\"none\" stroke-width=\"1\"/>\n    <circle id=\"frame2\" cx=\"16\" cy=\"16\" r=\"12\" stroke=\"#585858\" fill=\"none\" stroke-width=\"1\"/>\n    \n    <path id=\"path1\" transform=\"translate(6,6)\"\n    \td=\"M 10 0 C 4.4771525 0 0 4.4771525 0 10 C 0 15.522847 4.4771525 20 10 20 C 15.522847 20 20 15.522847 20 10 C 20 4.4771525 15.522847 1.1842379e-15 10 0 z M 9.09375 1.03125 C 9.2292164 1.0174926 9.362825 1.0389311 9.5 1.03125 L 9.5 3.5 L 10.5 3.5 L 10.5 1.03125 C 15.063526 1.2867831 18.713217 4.9364738 18.96875 9.5 L 16.5 9.5 L 16.5 10.5 L 18.96875 10.5 C 18.713217 15.063526 15.063526 18.713217 10.5 18.96875 L 10.5 16.5 L 9.5 16.5 L 9.5 18.96875 C 4.9364738 18.713217 1.2867831 15.063526 1.03125 10.5 L 3.5 10.5 L 3.5 9.5 L 1.03125 9.5 C 1.279102 5.0736488 4.7225326 1.4751713 9.09375 1.03125 z M 9.5 5 L 9.5 8.0625 C 8.6373007 8.2844627 8 9.0680195 8 10 C 8 11.104569 8.8954305 12 10 12 C 10.931981 12 11.715537 11.362699 11.9375 10.5 L 14 10.5 L 14 9.5 L 11.9375 9.5 C 11.756642 8.7970599 11.20294 8.2433585 10.5 8.0625 L 10.5 5 L 9.5 5 z \"  \n    \tfill=\"#585858\" stroke=\"none\" />\n    \t\n\t<text font-size=\"11\" \n\t\tid=\"text_name\" \n\t\tx=\"16\" y=\"33\" \n\t\toryx:align=\"top center\" \n\t\tstroke=\"#373e48\"\n\t></text>\n  </g>\n</svg>",
      "icon": "catching/timer.png",
      "groups": [
        "Boundary Events"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "timercycledefinitionpackage",
        "timerdatedefinitionpackage",
        "timerdurationdefinitionpackage",
        "timerenddatedefinitionpackage",
        "cancelactivitypackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "sequence_start",
        "BoundaryEventsMorph",
        "IntermediateEventOnActivityBoundary"
      ]
    },
    {
      "type": "node",
      "id": "BoundarySignalEvent",
      "title": "Boundary signal event",
      "description": "A boundary event with a signal trigger",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   width=\"40\"\n   height=\"40\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"16\" oryx:cy=\"16\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx=\"16\" oryx:cy=\"16\" />\n  <g pointer-events=\"fill\">\n    <circle \n    \tid=\"bg_frame\" \n    \tcx=\"16\" \n    \tcy=\"16\" \n    \tr=\"15\" \n    \tstroke=\"#585858\" \n    \tfill=\"#ffffff\" \n    \tstroke-width=\"1\"\n    \tstyle=\"stroke-dasharray: 5.5, 3\" />\n    \t\n    <circle \n    \tid=\"frame2_non_interrupting\" \n    \tcx=\"16\" \n    \tcy=\"16\" \n    \tr=\"12\" \n    \tstroke=\"#585858\" \n    \tfill=\"none\" \n    \tstroke-width=\"1\"\n    \tstyle=\"stroke-dasharray: 4.5, 3\" />\n    \n    <circle id=\"frame\" cx=\"16\" cy=\"16\" r=\"15\" stroke=\"#585858\" fill=\"none\" stroke-width=\"1\"/>\n    <circle id=\"frame2\" cx=\"16\" cy=\"16\" r=\"12\" stroke=\"#585858\" fill=\"none\" stroke-width=\"1\"/>\n\t<path\n\t   id=\"signalCatching\"\n\t   stroke=\"#585858\"\n       d=\"M 8.7124971,21.247342 L 23.333334,21.247342 L 16.022915,8.5759512 L 8.7124971,21.247342 z\"\n       style=\"fill:none;stroke-width:1.4;stroke-miterlimit:4;stroke-dasharray:none\" />\n\t<text font-size=\"11\" \n\t\tid=\"text_name\" \n\t\tx=\"16\" y=\"33\" \n\t\toryx:align=\"top center\" \n\t\tstroke=\"#373e48\"\n\t></text>\n  </g>\n</svg>",
      "icon": "catching/signal.png",
      "groups": [
        "Boundary Events"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "signalrefpackage",
        "cancelactivitypackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "sequence_start",
        "BoundaryEventsMorph",
        "IntermediateEventOnActivityBoundary"
      ]
    },
    {
      "type": "node",
      "id": "BoundaryMessageEvent",
      "title": "Boundary message event",
      "description": "A boundary event with a message trigger",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   width=\"40\"\n   height=\"40\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"16\" oryx:cy=\"16\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx=\"16\" oryx:cy=\"16\" />\n  <g pointer-events=\"fill\">\n    <circle \n    \tid=\"bg_frame\" \n    \tcx=\"16\" \n    \tcy=\"16\" \n    \tr=\"15\" \n    \tstroke=\"#585858\" \n    \tfill=\"#ffffff\" \n    \tstroke-width=\"1\"\n    \tstyle=\"stroke-dasharray: 5.5, 3\" />\n    \t\n    <circle \n    \tid=\"frame2_non_interrupting\" \n    \tcx=\"16\" \n    \tcy=\"16\" \n    \tr=\"12\" \n    \tstroke=\"#585858\" \n    \tfill=\"none\" \n    \tstroke-width=\"1\"\n    \tstyle=\"stroke-dasharray: 4.5, 3\" />\n    \t\n    <circle id=\"frame\" cx=\"16\" cy=\"16\" r=\"15\" stroke=\"#585858\" fill=\"none\" stroke-width=\"1\"/>\n    <circle id=\"frame2\" cx=\"16\" cy=\"16\" r=\"12\" stroke=\"#585858\" fill=\"none\" stroke-width=\"1\"/>\n    \n\t<g id=\"messageCatching\">\n\t\t<path transform=\"translate(7,7)\" id=\"path1\" stroke=\"none\" fill=\"#585858\" stroke-width=\"1\" d=\"M 1 3 L 9 11 L 17 3 L 1 3 z M 1 5 L 1 13 L 5 9 L 1 5 z M 17 5 L 13 9 L 17 13 L 17 5 z M 6 10 L 1 15 L 17 15 L 12 10 L 9 13 L 6 10 z \"/>\n\t</g>\n\t<text font-size=\"11\" \n\t\tid=\"text_name\" \n\t\tx=\"16\" y=\"33\" \n\t\toryx:align=\"top center\" \n\t\tstroke=\"#373e48\"\n\t></text>\n\t\n  </g>\n</svg>",
      "icon": "catching/message.png",
      "groups": [
        "Boundary Events"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "messagerefpackage",
        "cancelactivitypackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "sequence_start",
        "BoundaryEventsMorph",
        "IntermediateEventOnActivityBoundary"
      ]
    },
    {
      "type": "node",
      "id": "BoundaryCancelEvent",
      "title": "Boundary cancel event",
      "description": "A boundary cancel event",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   width=\"40\"\n   height=\"40\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"16\" oryx:cy=\"16\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx=\"16\" oryx:cy=\"16\" />\n  <g pointer-events=\"fill\">\n  \n    <circle id=\"bg_frame\" cx=\"16\" cy=\"16\" r=\"15\" stroke=\"#585858\" fill=\"#ffffff\" stroke-width=\"1\"/>\n    <circle id=\"frame\" cx=\"16\" cy=\"16\" r=\"12\" stroke=\"#585858\" fill=\"none\" stroke-width=\"1\"/>\n    \n    <path\n       d=\"M 7.2839105,10.27369 L 10.151395,7.4062062 L 15.886362,13.141174 L 21.621331,7.4062056 L 24.488814,10.273689 L 18.753846,16.008657 L 24.488815,21.743626 L 21.621331,24.611111 L 15.886362,18.876142 L 10.151394,24.611109 L 7.283911,21.743625 L 13.018878,16.008658 L 7.2839105,10.27369 z\"\n       id=\"cancelCross\" fill=\"none\" stroke=\"#585858\" stroke-width=\"1.7\" />\n\t<text font-size=\"11\" \n\t\tid=\"text_name\" \n\t\tx=\"16\" y=\"33\" \n\t\toryx:align=\"top center\" \n\t\tstroke=\"#373e48\"\n\t></text>\n  </g>\n</svg>",
      "icon": "catching/cancel.png",
      "groups": [
        "Boundary Events"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "sequence_start",
        "BoundaryEventsMorph",
        "IntermediateEventOnActivityBoundary"
      ]
    },
    {
      "type": "node",
      "id": "BoundaryCompensationEvent",
      "title": "Boundary compensation event",
      "description": "A boundary compensation event",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   width=\"40\"\n   height=\"40\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"16\" oryx:cy=\"16\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx=\"16\" oryx:cy=\"16\" />\n  <g pointer-events=\"fill\">\n\t\n    <circle id=\"bg_frame\" cx=\"16\" cy=\"16\" r=\"15\" stroke=\"#585858\" fill=\"#ffffff\" stroke-width=\"1\"/>\n    <circle id=\"frame\" cx=\"16\" cy=\"16\" r=\"12\" stroke=\"#585858\" fill=\"#ffffff\" stroke-width=\"1\"/>\n    \n    <polygon id=\"poly1\" stroke=\"#585858\" fill=\"none\" stroke-width=\"1.4\" points=\"15,9 15,23 8,16\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" />\n    <polygon id=\"poly2\" stroke=\"#585858\" fill=\"none\" stroke-width=\"1.4\" points=\"22,9 22,23 15,16\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\" />\n\t<text font-size=\"11\" \n\t\tid=\"text_name\" \n\t\tx=\"16\" y=\"33\" \n\t\toryx:align=\"top center\" \n\t\tstroke=\"#373e48\"\n\t></text>\n </g>\n</svg>",
      "icon": "catching/compensation.png",
      "groups": [
        "Boundary Events"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "BoundaryEventsMorph",
        "IntermediateEventOnActivityBoundary",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "CatchTimerEvent",
      "title": "Intermediate timer catching event",
      "description": "An intermediate catching event with a timer trigger",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   width=\"40\"\n   height=\"40\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"16\" oryx:cy=\"16\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx=\"16\" oryx:cy=\"16\" />\n  <g pointer-events=\"fill\">\n    <circle \n    \tid=\"bg_frame\" \n    \tcx=\"16\" \n    \tcy=\"16\" \n    \tr=\"15\" \n    \tstroke=\"#585858\" \n    \tfill=\"#ffffff\" \n    \tstroke-width=\"1\"\n    \tstyle=\"stroke-dasharray: 5.5, 3\" />\n    \t\n    <circle \n    \tid=\"frame2_non_interrupting\" \n    \tcx=\"16\" \n    \tcy=\"16\" \n    \tr=\"12\" \n    \tstroke=\"#585858\" \n    \tfill=\"none\" \n    \tstroke-width=\"1\"\n    \tstyle=\"stroke-dasharray: 4.5, 3\" />\n    \n    <circle id=\"frame\" cx=\"16\" cy=\"16\" r=\"15\" stroke=\"#585858\" fill=\"none\" stroke-width=\"1\"/>\n    <circle id=\"frame2\" cx=\"16\" cy=\"16\" r=\"12\" stroke=\"#585858\" fill=\"none\" stroke-width=\"1\"/>\n    \n    <path id=\"path1\" transform=\"translate(6,6)\"\n    \td=\"M 10 0 C 4.4771525 0 0 4.4771525 0 10 C 0 15.522847 4.4771525 20 10 20 C 15.522847 20 20 15.522847 20 10 C 20 4.4771525 15.522847 1.1842379e-15 10 0 z M 9.09375 1.03125 C 9.2292164 1.0174926 9.362825 1.0389311 9.5 1.03125 L 9.5 3.5 L 10.5 3.5 L 10.5 1.03125 C 15.063526 1.2867831 18.713217 4.9364738 18.96875 9.5 L 16.5 9.5 L 16.5 10.5 L 18.96875 10.5 C 18.713217 15.063526 15.063526 18.713217 10.5 18.96875 L 10.5 16.5 L 9.5 16.5 L 9.5 18.96875 C 4.9364738 18.713217 1.2867831 15.063526 1.03125 10.5 L 3.5 10.5 L 3.5 9.5 L 1.03125 9.5 C 1.279102 5.0736488 4.7225326 1.4751713 9.09375 1.03125 z M 9.5 5 L 9.5 8.0625 C 8.6373007 8.2844627 8 9.0680195 8 10 C 8 11.104569 8.8954305 12 10 12 C 10.931981 12 11.715537 11.362699 11.9375 10.5 L 14 10.5 L 14 9.5 L 11.9375 9.5 C 11.756642 8.7970599 11.20294 8.2433585 10.5 8.0625 L 10.5 5 L 9.5 5 z \"  \n    \tfill=\"#585858\" stroke=\"none\" />\n    \t\n\t<text font-size=\"11\" \n\t\tid=\"text_name\" \n\t\tx=\"16\" y=\"33\" \n\t\toryx:align=\"top center\" \n\t\tstroke=\"#373e48\"\n\t></text>\n  </g>\n</svg>",
      "icon": "catching/timer.png",
      "groups": [
        "Intermediate Catching Events"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "executionlistenerspackage",
        "timercycledefinitionpackage",
        "timerdatedefinitionpackage",
        "timerdurationdefinitionpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "sequence_start",
        "sequence_end",
        "CatchEventsMorph",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "CatchSignalEvent",
      "title": "Intermediate signal catching event",
      "description": "An intermediate catching event with a signal trigger",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   width=\"40\"\n   height=\"40\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"16\" oryx:cy=\"16\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx=\"16\" oryx:cy=\"16\" />\n  <g pointer-events=\"fill\">\n    <circle \n    \tid=\"bg_frame\" \n    \tcx=\"16\" \n    \tcy=\"16\" \n    \tr=\"15\" \n    \tstroke=\"#585858\" \n    \tfill=\"#ffffff\" \n    \tstroke-width=\"1\"\n    \tstyle=\"stroke-dasharray: 5.5, 3\" />\n    \t\n    <circle \n    \tid=\"frame2_non_interrupting\" \n    \tcx=\"16\" \n    \tcy=\"16\" \n    \tr=\"12\" \n    \tstroke=\"#585858\" \n    \tfill=\"none\" \n    \tstroke-width=\"1\"\n    \tstyle=\"stroke-dasharray: 4.5, 3\" />\n    \n    <circle id=\"frame\" cx=\"16\" cy=\"16\" r=\"15\" stroke=\"#585858\" fill=\"none\" stroke-width=\"1\"/>\n    <circle id=\"frame2\" cx=\"16\" cy=\"16\" r=\"12\" stroke=\"#585858\" fill=\"none\" stroke-width=\"1\"/>\n\t<path\n\t   id=\"signalCatching\"\n\t   stroke=\"#585858\"\n       d=\"M 8.7124971,21.247342 L 23.333334,21.247342 L 16.022915,8.5759512 L 8.7124971,21.247342 z\"\n       style=\"fill:none;stroke-width:1.4;stroke-miterlimit:4;stroke-dasharray:none\" />\n\t<text font-size=\"11\" \n\t\tid=\"text_name\" \n\t\tx=\"16\" y=\"33\" \n\t\toryx:align=\"top center\" \n\t\tstroke=\"#373e48\"\n\t></text>\n  </g>\n</svg>",
      "icon": "catching/signal.png",
      "groups": [
        "Intermediate Catching Events"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "executionlistenerspackage",
        "signalrefpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "sequence_start",
        "sequence_end",
        "CatchEventsMorph",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "CatchMessageEvent",
      "title": "Intermediate message catching event",
      "description": "An intermediate catching event with a message trigger",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   width=\"40\"\n   height=\"40\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"16\" oryx:cy=\"16\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx=\"16\" oryx:cy=\"16\" />\n  <g pointer-events=\"fill\">\n    <circle \n    \tid=\"bg_frame\" \n    \tcx=\"16\" \n    \tcy=\"16\" \n    \tr=\"15\" \n    \tstroke=\"#585858\" \n    \tfill=\"#ffffff\" \n    \tstroke-width=\"1\"\n    \tstyle=\"stroke-dasharray: 5.5, 3\" />\n    \t\n    <circle \n    \tid=\"frame2_non_interrupting\" \n    \tcx=\"16\" \n    \tcy=\"16\" \n    \tr=\"12\" \n    \tstroke=\"#585858\" \n    \tfill=\"none\" \n    \tstroke-width=\"1\"\n    \tstyle=\"stroke-dasharray: 4.5, 3\" />\n    \t\n    <circle id=\"frame\" cx=\"16\" cy=\"16\" r=\"15\" stroke=\"#585858\" fill=\"none\" stroke-width=\"1\"/>\n    <circle id=\"frame2\" cx=\"16\" cy=\"16\" r=\"12\" stroke=\"#585858\" fill=\"none\" stroke-width=\"1\"/>\n    \n\t<g id=\"messageCatching\">\n\t\t<path transform=\"translate(7,7)\" id=\"path1\" stroke=\"#585858\" fill=\"none\" stroke-width=\"1\" d=\"M 1 3 L 9 11 L 17 3 L 1 3 z M 1 5 L 1 13 L 5 9 L 1 5 z M 17 5 L 13 9 L 17 13 L 17 5 z M 6 10 L 1 15 L 17 15 L 12 10 L 9 13 L 6 10 z \"/>\n\t</g>\n\t<text font-size=\"11\" \n\t\tid=\"text_name\" \n\t\tx=\"16\" y=\"33\" \n\t\toryx:align=\"top center\" \n\t\tstroke=\"#373e48\"\n\t></text>\n\t\n  </g>\n</svg>",
      "icon": "catching/message.png",
      "groups": [
        "Intermediate Catching Events"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "executionlistenerspackage",
        "messagerefpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "sequence_start",
        "sequence_end",
        "CatchEventsMorph",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "ThrowNoneEvent",
      "title": "Intermediate none throwing event",
      "description": "An intermediate event without a specific trigger",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   width=\"40\"\n   height=\"40\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"16\" oryx:cy=\"16\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx=\"16\" oryx:cy=\"16\" />\n  <g pointer-events=\"fill\">\n  \n    <circle id=\"bg_frame\" cx=\"16\" cy=\"16\" r=\"15\" stroke=\"#585858\" fill=\"#ffffff\" stroke-width=\"1\"/>\n    <circle id=\"frame\" cx=\"16\" cy=\"16\" r=\"12\" stroke=\"#585858\" fill=\"none\" stroke-width=\"1\"/>\n\t<text font-size=\"11\" \n\t\tid=\"text_name\" \n\t\tx=\"16\" y=\"33\" \n\t\toryx:align=\"top center\" \n\t\tstroke=\"#373e48\"\n\t></text>\n  </g>\n</svg>",
      "icon": "throwing/none.png",
      "groups": [
        "Intermediate Throwing Events"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "executionlistenerspackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "ThrowEventsMorph",
        "sequence_start",
        "sequence_end",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "ThrowSignalEvent",
      "title": "Intermediate signal throwing event",
      "description": "An intermediate event with a signal trigger",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   width=\"40\"\n   height=\"40\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"16\" oryx:cy=\"16\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx=\"16\" oryx:cy=\"16\" />\n  <g pointer-events=\"fill\">\n    <circle id=\"bg_frame\" cx=\"16\" cy=\"16\" r=\"15\" stroke=\"#585858\" fill=\"#ffffff\" stroke-width=\"1\"/>\n    <circle id=\"frame\" cx=\"16\" cy=\"16\" r=\"12\" stroke=\"#585858\" fill=\"none\" stroke-width=\"1\"/>\n    <path\n\t   id=\"signalThrowing\"\n       d=\"M 8.7124971,21.247342 L 23.333334,21.247342 L 16.022915,8.5759512 L 8.7124971,21.247342 z\"\n       fill=\"#585858\"\n       stroke=\"#585858\"\n       style=\"stroke-width:1.4;stroke-miterlimit:4;stroke-dasharray:none\" />\n\t<text font-size=\"11\" \n\t\tid=\"text_name\" \n\t\tx=\"16\" y=\"33\" \n\t\toryx:align=\"top center\" \n\t\tstroke=\"#373e48\"\n\t></text>\n  </g>\n</svg>",
      "icon": "throwing/signal.png",
      "groups": [
        "Intermediate Throwing Events"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "executionlistenerspackage",
        "signalrefpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "ThrowEventsMorph",
        "sequence_start",
        "sequence_end",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "EndNoneEvent",
      "title": "End event",
      "description": "An end event without a specific trigger",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   width=\"40\"\n   height=\"40\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"16\" oryx:cy=\"16\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <g pointer-events=\"fill\">\n    <circle id=\"bg_frame\" cx=\"16\" cy=\"16\" r=\"14\" stroke=\"#585858\" fill=\"#ffffff\" stroke-width=\"3\"/>\n\t<text font-size=\"11\" \n\t\tid=\"text_name\" \n\t\tx=\"16\" y=\"32\" \n\t\toryx:align=\"top center\" \n\t\tstroke=\"#373e48\"\n\t></text>\n  </g>\n</svg>",
      "icon": "endevent/none.png",
      "groups": [
        "End Events"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "executionlistenerspackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "EndEventsMorph",
        "sequence_end",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "EndErrorEvent",
      "title": "End error event",
      "description": "An end event that throws an error event",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   width=\"40\"\n   height=\"40\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"16\" oryx:cy=\"16\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <oryx:docker oryx:cx=\"16\" oryx:cy=\"16\" />\n  <g pointer-events=\"fill\">\n    <circle id=\"bg_frame\" cx=\"16\" cy=\"16\" r=\"14\" stroke=\"#585858\" fill=\"#ffffff\" stroke-width=\"3\"/>\n    \n    <path\n         fill=\"#585858\"\n         stroke=\"#585858\"\n         style=\"stroke-width:1.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10\"\n         d=\"M 22.820839,11.171502 L 19.36734,24.58992 L 13.54138,14.281819 L 9.3386512,20.071607 L 13.048949,6.8323057 L 18.996148,16.132659 L 22.820839,11.171502 z\"\n         id=\"errorPolygon\" />\n\t<text font-size=\"11\" \n\t\tid=\"text_name\" \n\t\tx=\"16\" y=\"32\" \n\t\toryx:align=\"top center\" \n\t\tstroke=\"#373e48\"\n\t></text>\n  </g>\n</svg>",
      "icon": "endevent/error.png",
      "groups": [
        "End Events"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "executionlistenerspackage",
        "errorrefpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "EndEventsMorph",
        "sequence_end",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "EndCancelEvent",
      "title": "End cancel event",
      "description": "A cancel end event",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   width=\"40\"\n   height=\"40\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"16\" oryx:cy=\"16\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <g pointer-events=\"fill\">\n    <circle id=\"bg_frame\" cx=\"16\" cy=\"16\" r=\"14\" stroke=\"#585858\" fill=\"#ffffff\" stroke-width=\"3\"/>\n    \n    <path id=\"path1\" d=\"M 9 9 L 23 23 M 9 23 L 23 9\" fill=\"none\" stroke=\"#585858\" stroke-width=\"5\" />\n\t<text font-size=\"11\" \n\t\tid=\"text_name\" \n\t\tx=\"16\" y=\"32\" \n\t\toryx:align=\"top center\" \n\t\tstroke=\"#373e48\"\n\t></text>\n  </g>\n</svg>",
      "icon": "endevent/cancel.png",
      "groups": [
        "End Events"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "executionlistenerspackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "EndEventsMorph",
        "sequence_end",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "EndTerminateEvent",
      "title": "End terminate event",
      "description": "A terminate end event",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   width=\"40\"\n   height=\"40\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"16\" oryx:cy=\"16\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <g pointer-events=\"fill\">\n    <circle id=\"bg_frame\" cx=\"16\" cy=\"16\" r=\"14\" stroke=\"#585858\" fill=\"#ffffff\" stroke-width=\"3\"/>\n    \n    <circle id=\"circle1\" cx=\"16\" cy=\"16\" r=\"9\" stroke=\"#585858\" fill=\"#585858\" stroke-width=\"1\"/>\n\t<text font-size=\"11\" \n\t\tid=\"text_name\" \n\t\tx=\"16\" y=\"32\" \n\t\toryx:align=\"top center\" \n\t\tstroke=\"#373e48\"\n\t></text>\n  </g>\n</svg>",
      "icon": "endevent/terminate.png",
      "groups": [
        "End Events"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "executionlistenerspackage",
        "terminateAllpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "EndEventsMorph",
        "sequence_end",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "Pool",
      "title": "Pool",
      "description": "A pool to stucture the process definition",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n   width=\"600\"\n   height=\"250\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"0\" oryx:cy=\"124\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"299\" oryx:cy=\"249\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"599\" oryx:cy=\"124\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"299\" oryx:cy=\"0\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"299\" oryx:cy=\"124\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <g pointer-events=\"none\" >\n    <defs>\n\t\t<radialGradient id=\"background\" cx=\"0%\" cy=\"10%\" r=\"100%\" fx=\"20%\" fy=\"10%\">\n\t\t\t<stop offset=\"0%\" stop-color=\"#ffffff\" stop-opacity=\"1\"/>\n\t\t\t<stop id=\"fill_el\" offset=\"100%\" stop-color=\"#ffffff\" stop-opacity=\"1\"/>\n\t\t</radialGradient>\n\t</defs>\n\t  \t\n  \t<rect\n  \t\tid=\"border\"\n  \t\tclass=\"stripable-element-force\"\n  \t\toryx:resize=\"vertical horizontal\"\n  \t\tx=\"0\"\n  \t\ty=\"0\"\n  \t\twidth=\"600\"\n  \t\theight=\"250\"\n  \t\tfill=\"none\"\n  \t\tstroke-width=\"9\"\n  \t\tstroke=\"none\"\n  \t\tvisibility=\"visible\"\n  \t\tpointer-events=\"stroke\"\n  \t/>\n    <rect\n    \tid=\"c\"\n    \toryx:resize=\"vertical horizontal\"\n    \tx=\"0\"\n    \ty=\"0\"\n    \twidth=\"600\" \n    \theight=\"250\" \n    \tstroke=\"black\" \n    \tfill=\"url(#background) white\"\n    \tfill-opacity=\"0.3\" \n    />\n    \n\t<rect \n\t\tid=\"caption\"\n\t\toryx:anchors=\"left top bottom\"\n\t\tx=\"0\"\n\t\ty=\"0\"\n\t\twidth=\"30\"\n\t\theight=\"250\"\n\t\tstroke=\"black\"\n\t\tstroke-width=\"1\"\n\t\tfill=\"url(#background) white\"\n\t\tpointer-events=\"all\"\n\t/>\n\t\n\t<rect \n\t\tid=\"captionDisableAntialiasing\"\n\t\toryx:anchors=\"left top bottom\"\n\t\tx=\"0\"\n\t\ty=\"0\"\n\t\twidth=\"30\"\n\t\theight=\"250\"\n\t\tstroke=\"black\"\n\t\tstroke-width=\"1\"\n\t\tfill=\"url(#background) white\"\n\t\tpointer-events=\"all\"\n\t/>\n\t\n    <text x=\"13\" y=\"125\" font-size=\"12\" id=\"text_name\" oryx:fittoelem=\"caption\" oryx:align=\"middle center\" oryx:anchors=\"left\" oryx:rotate=\"270\" fill=\"black\" stroke=\"black\"></text>\n    \n  </g>\n</svg>",
      "icon": "swimlane/pool.png",
      "groups": [
        "Swimlanes"
      ],
      "layout": [
        {
          "type": "layout.bpmn2_0.pool"
        }
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "process_idpackage",
        "isexecutablepackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "canContainArtifacts",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "Lane",
      "title": "Lane",
      "description": "A lane to stucture the process definition",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n   width=\"600\"\n   height=\"250\"\n   version=\"1.0\">\n  <defs></defs>\n  <g pointer-events=\"none\" >\n  \n     <defs>\n\t\t<radialGradient id=\"background\" cx=\"0%\" cy=\"10%\" r=\"200%\" fx=\"20%\" fy=\"10%\">\n\t\t\t<stop offset=\"0%\" stop-color=\"#ffffff\" stop-opacity=\"1\"/>\n\t\t\t<stop id=\"fill_el\" offset=\"100%\" stop-color=\"#ffffff\" stop-opacity=\"0\"/>\n\t\t</radialGradient>\n\t</defs>\n\t\n  \t<rect id=\"border_invisible\" class=\"stripable-element-force\" oryx:resize=\"vertical horizontal\" x=\"0\" y=\"0\" width=\"600\" height=\"250\" fill=\"none\" stroke-width=\"10\" stroke=\"white\" visibility=\"hidden\" pointer-events=\"stroke\"/>\t\t\n\t<rect id=\"border\" oryx:resize=\"vertical horizontal\" x=\"0\" y=\"0\" width=\"600\" height=\"250\" stroke=\"black\" stroke-width=\"1\" fill=\"url(#background) white\" pointer-events=\"none\" />\n\t\n\t\n\t<rect \n\t\tid=\"caption\"\n\t\toryx:anchors=\"left top bottom\"\n\t\tx=\"0\"\n\t\ty=\"1\"\n\t\twidth=\"30\"\n\t\theight=\"248\"\n\t\tstroke=\"black\"\n\t\tstroke-width=\"0\"\n\t\tfill=\"white\"\n\t\tvisibility=\"hidden\"\n\t\tclass=\"stripable-element-force\"\n\t\tpointer-events=\"all\"\n\t/>\n\t\n\t<path\n\t\tstroke=\"black\"\n\t\tstroke-width=\"1\"\n\t\tfill=\"none\"\n\t\td=\"M 0,0 L 0,250\"\n        oryx:anchors=\"left top bottom\"\n        id=\"captionDisableAntialiasing\"\n    />\n\t\n\t<!--rect \n\t\tid=\"captionDisableAntialiasing\"\n\t\toryx:anchors=\"left top bottom\"\n\t\tx=\"0\"\n\t\ty=\"0\"\n\t\twidth=\"30\"\n\t\theight=\"250\"\n\t\tstroke=\"black\"\n\t\tstroke-width=\"1\"\n\t\tfill=\"url(#background) white\"\n\t/-->\n\t\n    <text \n\t\tx=\"13\"\n\t\ty=\"125\"\n\t\toryx:rotate=\"270\" \n\t\tfont-size=\"12\" \n\t\tid=\"text_name\" \n\t\toryx:align=\"middle center\" \n\t\toryx:anchors=\"left\"\n\t\toryx:fittoelem=\"caption\"\n\t\tfill=\"black\" \n\t\tstroke=\"black\">\n\t</text>\n  </g>\n</svg>",
      "icon": "swimlane/lane.png",
      "groups": [
        "Swimlanes"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "PoolChild",
        "canContainArtifacts",
        "all"
      ]
    },
    {
      "type": "edge",
      "id": "SequenceFlow",
      "title": "Sequence flow",
      "description": "Sequence flow defines the execution order of activities.",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\r\n<svg\r\n\txmlns=\"http://www.w3.org/2000/svg\"\r\n\txmlns:oryx=\"http://www.b3mn.org/oryx\"\r\n\tversion=\"1.0\"\r\n\toryx:edge=\"edge\" >\r\n\t<defs>\r\n\t  \t<marker id=\"start\" refX=\"1\" refY=\"5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"17\" markerHeight=\"11\" orient=\"auto\">\r\n\t  \t\t<!-- <path id=\"conditional\"   d=\"M 0 6 L 8 1 L 15 5 L 8 9 L 1 5\" fill=\"white\" stroke=\"black\" stroke-width=\"1\" /> -->\r\n\t\t\t<path id=\"default\" d=\"M 5 0 L 11 10\" fill=\"white\" stroke=\"#585858\" stroke-width=\"1\" />\r\n\t  \t</marker>\r\n\t  \t<marker id=\"end\" refX=\"15\" refY=\"6\" markerUnits=\"userSpaceOnUse\" markerWidth=\"15\" markerHeight=\"12\" orient=\"auto\">\r\n\t  \t\t<path id=\"arrowhead\" d=\"M 0 1 L 15 6 L 0 11z\" fill=\"#585858\" stroke=\"#585858\" stroke-linejoin=\"round\" stroke-width=\"2\" />\r\n\t  \t</marker>\r\n\t</defs>\r\n\t<g id=\"edge\">\r\n\t\t<path id=\"bg_frame\" d=\"M10 50 L210 50\" stroke=\"#585858\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" marker-start=\"url(#start)\" marker-end=\"url(#end)\" />\r\n\t\t<text id=\"text_name\" x=\"0\" y=\"0\" oryx:edgePosition=\"startTop\"/>\r\n\t</g>\r\n</svg>",
      "icon": "connector/sequenceflow.png",
      "groups": [
        "Connecting Objects"
      ],
      "layout": [
        {
          "type": "layout.bpmn2_0.sequenceflow"
        }
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "conditionsequenceflowpackage",
        "executionlistenerspackage",
        "defaultflowpackage",
        "skipexpressionpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "ConnectingObjectsMorph",
        "all"
      ]
    },
    {
      "type": "edge",
      "id": "MessageFlow",
      "title": "Message flow",
      "description": "Message flow to connect elements in different pools.",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\r\n<svg\r\n\txmlns=\"http://www.w3.org/2000/svg\"\r\n\txmlns:oryx=\"http://www.b3mn.org/oryx\"\r\n\tversion=\"1.0\"\r\n\toryx:edge=\"edge\" >\r\n\t<defs>\r\n\t\t<marker id=\"start\" oryx:optional=\"yes\" oryx:enabled=\"yes\" refX=\"5\" refY=\"5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"10\" orient=\"auto\">\r\n\t  \t\t<!-- <path d=\"M 10 10 L 0 5 L 10 0\" fill=\"none\" stroke=\"#585858\" /> -->\r\n\t  \t\t<circle id=\"arrowhead\" cx=\"5\" cy=\"5\" r=\"5\" fill=\"white\" stroke=\"black\" />\r\n\t  \t</marker>\r\n\r\n\t  \t<marker id=\"end\" refX=\"10\" refY=\"5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"10\" orient=\"auto\">\r\n\t  \t\t<path id=\"arrowhead2\" d=\"M 0 0 L 10 5 L 0 10 L 0 0\" fill=\"white\" stroke=\"#585858\" />\r\n\t  \t</marker>\r\n\t</defs>\r\n\t<g id=\"edge\">\r\n\t    <path id=\"bg_frame\" d=\"M10 50 L210 50\" stroke=\"#585858\" fill=\"none\" stroke-width=\"2\" stroke-dasharray=\"3, 4\" marker-start=\"url(#start)\" marker-end=\"url(#end)\" />\r\n\t\t<text id=\"text_name\" x=\"0\" y=\"0\" oryx:edgePosition=\"midTop\"/>\r\n\t</g>\r\n</svg>",
      "icon": "connector/messageflow.png",
      "groups": [
        "Connecting Objects"
      ],
      "layout": [
        {
          "type": "layout.bpmn2_0.sequenceflow"
        }
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "ConnectingObjectsMorph",
        "all"
      ]
    },
    {
      "type": "edge",
      "id": "Association",
      "title": "Association",
      "description": "Associates a text annotation with an element.",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\r\n<svg\r\n\txmlns=\"http://www.w3.org/2000/svg\"\r\n\txmlns:oryx=\"http://www.b3mn.org/oryx\"\r\n\tversion=\"1.0\"\r\n\toryx:edge=\"edge\" >\r\n\t<g id=\"edge\">\r\n\t    <path id=\"bg_frame\" d=\"M10 50 L210 50\" stroke=\"#585858\" fill=\"none\" stroke-width=\"2\" stroke-dasharray=\"3, 4\" />\r\n\t\t<text id=\"name\" x=\"0\" y=\"0\" oryx:edgePosition=\"midTop\" oryx:offsetTop=\"6\" style=\"font-size:9px;\"/>\r\n\t</g>\r\n</svg>",
      "icon": "connector/association.undirected.png",
      "groups": [
        "Connecting Objects"
      ],
      "layout": [
        {
          "type": "layout.bpmn2_0.sequenceflow"
        }
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "ConnectingObjectsMorph",
        "all"
      ]
    },
    {
      "type": "edge",
      "id": "DataAssociation",
      "title": "DataAssociation",
      "description": "Associates a data element with an activity.",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\r\n<svg\r\n\txmlns=\"http://www.w3.org/2000/svg\"\r\n\txmlns:oryx=\"http://www.b3mn.org/oryx\"\r\n\tversion=\"1.0\"\r\n\toryx:edge=\"edge\" >\r\n\t<defs>\r\n\t  \t<marker id=\"end\" refX=\"10\" refY=\"5\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"10\" orient=\"auto\">\r\n\t  \t\t<path id=\"arrowhead\" d=\"M 0 0 L 10 5 L 0 10\" fill=\"none\" stroke=\"#585858\" />\r\n\t  \t</marker>\r\n\t</defs>\r\n\t<g id=\"edge\">\r\n\t    <path id=\"bg_frame\" d=\"M10 50 L210 50\" stroke=\"#585858\" fill=\"none\" stroke-width=\"2\" stroke-dasharray=\"3, 4\" marker-end=\"url(#end)\" />\r\n\t\t<text id=\"name\" x=\"0\" y=\"0\" oryx:edgePosition=\"midTop\" oryx:offsetTop=\"6\" style=\"font-size:9px;\"/>\r\n\t</g>\r\n</svg>",
      "icon": "connector/association.unidirectional.png",
      "groups": [
        "Connecting Objects"
      ],
      "layout": [
        {
          "type": "layout.bpmn2_0.sequenceflow"
        }
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "ConnectingObjectsMorph",
        "all"
      ]
    },
    {
      "type": "node",
      "id": "TextAnnotation",
      "title": "Text annotation",
      "description": "Annotates elements with description text.",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n   width=\"102\"\n   height=\"51\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"2\" oryx:cy=\"25\" oryx:anchors=\"left\" oryx:default=\"yes\"/>\n  </oryx:magnets>\n  <g pointer-events=\"all\" oryx:minimumSize=\"10 20\" oryx:maximumSize=\"\" >\n  <rect \n\tid=\"textannotationrect\"\n\toryx:resize=\"vertical horizontal\"\n\tx=\"1\" \n\ty=\"1\"\n\twidth=\"100\"\n\theight=\"50\"\n\tstroke=\"none\"\n\tfill=\"none\" />\n  <path \n  \tid = \"frame\"\n\td=\"M20,1 L1,1 L1,50 L20,50\" \n\toryx:anchors=\"top bottom left\" \n\tstroke=\"#585858\" \n\tfill=\"none\" \n\tstroke-width=\"1\" />\n    \n    <text \n\t\tfont-size=\"12\" \n\t\tid=\"text\" \n\t\tx=\"5\" \n\t\ty=\"25\" \n\t\toryx:align=\"middle left\"\n\t\toryx:fittoelem=\"textannotationrect\"\n\t\toryx:anchors=\"left\"\n\t\tstroke=\"#373e48\">\n\t</text>\n  </g>\n</svg>",
      "icon": "artifact/text.annotation.png",
      "groups": [
        "Artifacts"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "textpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "all"
      ]
    },
    {
      "type": "node",
      "id": "DataStore",
      "title": "Data store",
      "description": "Reference to a data store.",
      "view": "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"no\" ?>\r\n<svg \r\n\txmlns=\"http://www.w3.org/2000/svg\"\r\n\txmlns:svg=\"http://www.w3.org/2000/svg\"\r\n   \txmlns:oryx=\"http://www.b3mn.org/oryx\"\r\n   \txmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n\t\r\n\twidth=\"63.001px\" \r\n\theight=\"61.173px\"\r\n\tversion=\"1.0\">\r\n\t<defs></defs>\r\n\t<oryx:magnets>\r\n\t\t<oryx:magnet oryx:cx=\"0\" oryx:cy=\"30.5865\" oryx:anchors=\"left\" />\r\n\t\t<oryx:magnet oryx:cx=\"31.5005\" oryx:cy=\"61.173\" oryx:anchors=\"bottom\" />\r\n\t\t<oryx:magnet oryx:cx=\"63.001\" oryx:cy=\"30.5865\" oryx:anchors=\"right\" />\r\n\t\t<oryx:magnet oryx:cx=\"31.5005\" oryx:cy=\"0\" oryx:anchors=\"top\" />\r\n\t\t<oryx:magnet oryx:cx=\"31.5005\" oryx:cy=\"30.5865\" oryx:default=\"yes\" />\r\n\t</oryx:magnets>\r\n\t\r\n\t<g>\r\n\t\t<defs>\r\n\t\t\t<radialGradient id=\"background\" cx=\"30%\" cy=\"30%\" r=\"50%\" fx=\"0%\" fy=\"0%\">\r\n\t\t\t\t<stop offset=\"0%\" stop-color=\"#ffffff\" stop-opacity=\"1\"></stop>\r\n\t\t\t\t<stop offset=\"100%\" stop-color=\"#ffffff\" stop-opacity=\"1\" id=\"fill_el\"></stop>\r\n\t\t\t</radialGradient>\r\n\t\t</defs>\r\n\t\t\r\n\t\t<path id=\"bg_frame\" fill=\"url(#background) #ffffff\" stroke=\"#000000\" d=\"M31.634,0.662c20.013,0,31.292,3.05,31.292,5.729c0,2.678,0,45.096,0,48.244\r\n\t\t\tc0,3.148-16.42,6.2-31.388,6.2c-14.968,0-30.613-2.955-30.613-6.298c0-3.342,0-45.728,0-48.05\r\n\t\t\tC0.925,4.165,11.622,0.662,31.634,0.662z\"/>\r\n\t\t<path id=\"bg_frame2\" fill=\"none\" stroke=\"#000000\" d=\"\r\n\t\t\tM62.926,15.69c0,1.986-3.62,6.551-31.267,6.551c-27.646,0-30.734-4.686-30.734-6.454 M0.925,11.137\r\n\t\t\tc0,1.769,3.088,6.455,30.734,6.455c27.647,0,31.267-4.565,31.267-6.551 M0.925,6.487c0,2.35,3.088,6.455,30.734,6.455\r\n\t\t\tc27.647,0,31.267-3.912,31.267-6.552 M62.926,6.391v4.844 M0.949,6.391v4.844 M62.926,11.041v4.844 M0.949,11.041v4.844\"/>\r\n\t\t\t \t\r\n\t\t<text font-size=\"12\" id=\"text_name\" x=\"31\" y=\"66\" oryx:align=\"center top\" stroke=\"black\" />\r\n\t\t\t \r\n\t</g>\r\n</svg>\r\n",
      "icon": "dataobject/data.store.png",
      "groups": [
        "Artifacts"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "all"
      ]
    },
    {
      "type": "node",
      "id": "AdhocSubProcess",
      "title": "Adhoc sub process",
      "description": "An adhoc sub process",
      "view": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns:oryx=\"http://www.b3mn.org/oryx\"\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n   width=\"200\"\n   height=\"160\"\n   version=\"1.0\">\n  <defs></defs>\n  <oryx:magnets>\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"50\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"80\" oryx:anchors=\"left\" />\n  \t<oryx:magnet oryx:cx=\"1\" oryx:cy=\"110\" oryx:anchors=\"left\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"70\" oryx:cy=\"159\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"100\" oryx:cy=\"159\" oryx:anchors=\"bottom\" />\n  \t<oryx:magnet oryx:cx=\"130\" oryx:cy=\"159\" oryx:anchors=\"bottom\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"199\" oryx:cy=\"50\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"199\" oryx:cy=\"80\" oryx:anchors=\"right\" />\n  \t<oryx:magnet oryx:cx=\"199\" oryx:cy=\"110\" oryx:anchors=\"right\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"70\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"100\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t<oryx:magnet oryx:cx=\"130\" oryx:cy=\"1\" oryx:anchors=\"top\" />\n  \t\n  \t<oryx:magnet oryx:cx=\"100\" oryx:cy=\"80\" oryx:default=\"yes\" />\n  </oryx:magnets>\n  <g pointer-events=\"fill\" oryx:minimumSize=\"120 100\" oryx:maximumSize=\"\" >\n    <rect id=\"text_frame\" oryx:anchors=\"bottom top right left\" x=\"0\" y=\"0\" width=\"190\" height=\"160\" rx=\"10\" ry=\"10\" stroke=\"none\" stroke-width=\"0\" fill=\"none\" />\n\t<rect id=\"bg_frame\" oryx:anchors=\"bottom top right left\" x=\"0\" y=\"0\" width=\"200\" height=\"160\" rx=\"10\" ry=\"10\" stroke=\"#bbbbbb\" stroke-width=\"1\" fill=\"#ffffff\" />\n\t<text \n\t\tfont-size=\"12\" \n\t\tid=\"text_name\" \n\t\tx=\"8\" \n\t\ty=\"10\" \n\t\toryx:align=\"top left\"\n\t\toryx:fittoelem=\"text_frame\"\n\t\toryx:anchors=\"left top\" \n\t\tstroke=\"#373e48\">\n\t</text>\n\t\n\t<text \n\t\toryx:anchors=\"bottom\"\n\t\tx=\"101\"\n\t\ty=\"157\"\n\t\tfont-size=\"20\"\n\t\ttransform=\"translate(8,0)\"\n\t>~</text>\n  </g>\n</svg>",
      "icon": "activity/adhoc.subprocess.png",
      "groups": [
        "Structural"
      ],
      "propertyPackages": [
        "overrideidpackage",
        "namepackage",
        "documentationpackage",
        "completionconditionpackage",
        "orderingpackage",
        "cancelremaininginstancespackage"
      ],
      "hiddenPropertyPackages": [

      ],
      "roles": [
        "Activity",
        "sequence_start",
        "sequence_end",
        "all"
      ]
    }
  ],
  "rules": {
    "cardinalityRules": [
      {
        "role": "Startevents_all",
        "incomingEdges": [
          {
            "role": "SequenceFlow",
            "maximum": 0
          }
        ]
      },
      {
        "role": "Endevents_all",
        "outgoingEdges": [
          {
            "role": "SequenceFlow",
            "maximum": 0
          }
        ]
      }
    ],
    "connectionRules": [
      {
        "role": "SequenceFlow",
        "connects": [
          {
            "from": "sequence_start",
            "to": [
              "sequence_end"
            ]
          }
        ]
      },
      {
        "role": "Association",
        "connects": [
          {
            "from": "sequence_start",
            "to": [
              "TextAnnotation"
            ]
          },
          {
            "from": "sequence_end",
            "to": [
              "TextAnnotation"
            ]
          },
          {
            "from": "TextAnnotation",
            "to": [
              "sequence_end"
            ]
          },
          {
            "from": "BoundaryCompensationEvent",
            "to": [
              "sequence_end"
            ]
          },
          {
            "from": "TextAnnotation",
            "to": [
              "sequence_start"
            ]
          },
          {
            "from": "BoundaryCompensationEvent",
            "to": [
              "sequence_start"
            ]
          }
        ]
      },
      {
        "role": "DataAssociation",
        "connects": [
          {
            "from": "sequence_start",
            "to": [
              "DataStore"
            ]
          },
          {
            "from": "sequence_end",
            "to": [
              "DataStore"
            ]
          },
          {
            "from": "DataStore",
            "to": [
              "sequence_end"
            ]
          },
          {
            "from": "DataStore",
            "to": [
              "sequence_start"
            ]
          }
        ]
      },
      {
        "role": "IntermediateEventOnActivityBoundary",
        "connects": [
          {
            "from": "Activity",
            "to": [
              "IntermediateEventOnActivityBoundary"
            ]
          }
        ]
      }
    ],
    "containmentRules": [
      {
        "role": "BPMNDiagram",
        "contains": [
          "all"
        ]
      },
      {
        "role": "SubProcess",
        "contains": [
          "sequence_start",
          "sequence_end",
          "from_task_event",
          "to_task_event",
          "EventSubProcess",
          "TextAnnotation",
          "DataStore"
        ]
      },
      {
        "role": "AdhocSubProcess",
        "contains": [
          "sequence_start",
          "sequence_end",
          "from_task_event",
          "to_task_event",
          "TextAnnotation",
          "DataStore"
        ]
      },
      {
        "role": "EventSubProcess",
        "contains": [
          "sequence_start",
          "sequence_end",
          "from_task_event",
          "to_task_event",
          "TextAnnotation",
          "DataStore"
        ]
      },
      {
        "role": "Pool",
        "contains": [
          "Lane"
        ]
      },
      {
        "role": "Lane",
        "contains": [
          "sequence_start",
          "sequence_end",
          "EventSubProcess",
          "TextAnnotation",
          "DataStore"
        ]
      }
    ],
    "morphingRules": [
      {
        "role": "ActivitiesMorph",
        "baseMorphs": [
          "UserTask"
        ],
        "preserveBounds": true
      },
      {
        "role": "GatewaysMorph",
        "baseMorphs": [
          "ExclusiveGateway"
        ]
      },
      {
        "role": "StartEventsMorph",
        "baseMorphs": [
          "StartNoneEvent"
        ]
      },
      {
        "role": "EndEventsMorph",
        "baseMorphs": [
          "StartNoneEvent"
        ]
      },
      {
        "role": "CatchEventsMorph",
        "baseMorphs": [
          "CatchTimerEvent"
        ]
      },
      {
        "role": "ThrowEventsMorph",
        "baseMorphs": [
          "ThrowNoneEvent"
        ]
      },
      {
        "role": "BoundaryEventsMorph",
        "baseMorphs": [
          "ThrowNoneEvent"
        ]
      },
      {
        "role": "BoundaryCompensationEvent",
        "baseMorphs": [
          "BoundaryCompensationEvent"
        ]
      },
      {
        "role": "TextAnnotation",
        "baseMorphs": [
          "TextAnnotation"
        ]
      },
      {
        "role": "DataStore",
        "baseMorphs": [
          "DataStore"
        ]
      }
    ]
  }
}