// Generated from GeneralJSON.g4 by antlr-blockly
// 语句集合和表达式集合
GeneralJSONBlocks = {
    "jpairorempty": [
        "jpair",
        "jpairstring",
        "jpairnumber",
        "jpairempty"
    ],
    "jelementorempty": [
        "jelement",
        "jelementstring",
        "jelementnumber",
        "jelementempty"
    ],
    "json": [
        "jobject",
        "jarray",
        "jnumber",
        "jbool",
        "jstring",
        "jfix1",
        "jfix2",
        "jnull"
    ]
}


// 所有域的默认行为
Object.assign(GeneralJSONBlocks,{
    "IdStr": {
        "type": "field_input",
        "text": "IdStr_default"
    },
    "NormalStr": {
        "type": "field_input",
        "text": "NormalStr_default"
    },
    "TryIntStr": {
        "type": "field_input",
        "text": "TryIntStr_default"
    },
    "Evalstr": {
        "type": "field_input",
        "text": "Evalstr_default"
    },
    "Int": {
        "type": "field_number",
        "value": 0,
        "min": 0,
        "precision": 1
    },
    "Bool": {
        "type": "field_checkbox",
        "checked": true
    },
    "Colour": {
        "type": "field_colour",
        "colour": "#ff0000"
    },
    "BGNL": {
        "type": "input_dummy"
    }
});




    if(globalThis?.blocklydynamiclist?.names){
        for (var [kk,vv] of globalThis.blocklydynamiclist.names) {
            GeneralJSONBlocks[kk].options=vv.map(v=>typeof v===typeof ''?[v,v]:v)
            GeneralJSONBlocks[kk].default=GeneralJSONBlocks[kk].options[0][1]
        }
    }
    // 所有方块的实际内容
Object.assign(GeneralJSONBlocks,{
    "top": {
        "type": "statement",
        "json": {
            "type": "top",
            "message0": "%1",
            "args0": [
                {
                    "type": "input_value",
                    "name": "v",
                    "check": GeneralJSONBlocks.json
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 260
        },
        "generFunc": function(block) {
            var v = Blockly.JavaScript.valueToCode(block, 'v', 
              Blockly.JavaScript.ORDER_ATOMIC);
            if (v==='') {
                throw new OmitedError(block,'v','top');
            }
            var code = GeneralJSONFunctions.defaultCode('top',eval('['+GeneralJSONBlocks['top'].args.join(',')+']'),block);
            return code;
        },
        "args": ["v"],
        "argsType": ["value"],
        "argsGrammarName": ["json"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return GeneralJSONFunctions.fieldDefault('top',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return GeneralJSONFunctions.xmlText('top',inputs,next,isShadow,comment,attribute);
        }
    },
    "jpairstring": {
        "type": "statement",
        "json": {
            "type": "jpairstring",
            "message0": "%1 : string %2",
            "args0": [
                Object.assign({},GeneralJSONBlocks.Evalstr,{
                    "name": "k",
                    "text": ""
                }),
                Object.assign({},GeneralJSONBlocks.NormalStr,{
                    "name": "v",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "jpairstring",
            "nextStatement": GeneralJSONBlocks.jpairorempty
        },
        "generFunc": function(block) {
            var k = block.getFieldValue('k');
            k = GeneralJSONFunctions.pre('Evalstr')(k,block,'k','jpairstring');
            var v = block.getFieldValue('v');
            v = GeneralJSONFunctions.pre('NormalStr')(v,block,'v','jpairstring');
            var code = GeneralJSONFunctions.defaultCode('jpairstring',eval('['+GeneralJSONBlocks['jpairstring'].args.join(',')+']'),block);
            return code;
        },
        "args": ["k","v"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Evalstr","NormalStr"],
        "omitted": [true,true],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return GeneralJSONFunctions.fieldDefault('jpairstring',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return GeneralJSONFunctions.xmlText('jpairstring',inputs,next,isShadow,comment,attribute);
        }
    },
    "jpairnumber": {
        "type": "statement",
        "json": {
            "type": "jpairnumber",
            "message0": "%1 : number %2",
            "args0": [
                Object.assign({},GeneralJSONBlocks.Evalstr,{
                    "name": "k",
                    "text": ""
                }),
                Object.assign({},GeneralJSONBlocks.Evalstr,{
                    "name": "v",
                    "text": "0"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "jpairnumber",
            "nextStatement": GeneralJSONBlocks.jpairorempty
        },
        "generFunc": function(block) {
            var k = block.getFieldValue('k');
            k = GeneralJSONFunctions.pre('Evalstr')(k,block,'k','jpairnumber');
            var v = block.getFieldValue('v');
            if (v==='') {
                throw new OmitedError(block,'v','jpairnumber');
            }
            v = GeneralJSONFunctions.pre('Evalstr')(v,block,'v','jpairnumber');
            var code = GeneralJSONFunctions.defaultCode('jpairnumber',eval('['+GeneralJSONBlocks['jpairnumber'].args.join(',')+']'),block);
            return code;
        },
        "args": ["k","v"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Evalstr","Evalstr"],
        "omitted": [true,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return GeneralJSONFunctions.fieldDefault('jpairnumber',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return GeneralJSONFunctions.xmlText('jpairnumber',inputs,next,isShadow,comment,attribute);
        }
    },
    "jpairempty": {
        "type": "statement",
        "json": {
            "type": "jpairempty",
            "message0": "emtpy object",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "jpairempty",
            "nextStatement": GeneralJSONBlocks.jpairorempty
        },
        "generFunc": function(block) {
            var code = GeneralJSONFunctions.defaultCode('jpairempty',eval('['+GeneralJSONBlocks['jpairempty'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return GeneralJSONFunctions.fieldDefault('jpairempty',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return GeneralJSONFunctions.xmlText('jpairempty',inputs,next,isShadow,comment,attribute);
        }
    },
    "jpair": {
        "type": "statement",
        "json": {
            "type": "jpair",
            "message0": "%1 : %2",
            "args0": [
                Object.assign({},GeneralJSONBlocks.Evalstr,{
                    "name": "k",
                    "text": ""
                }),
                {
                    "type": "input_value",
                    "name": "v",
                    "check": GeneralJSONBlocks.json
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "jpair",
            "nextStatement": GeneralJSONBlocks.jpairorempty
        },
        "generFunc": function(block) {
            var k = block.getFieldValue('k');
            k = GeneralJSONFunctions.pre('Evalstr')(k,block,'k','jpair');
            var v = Blockly.JavaScript.valueToCode(block, 'v', 
              Blockly.JavaScript.ORDER_ATOMIC);
            if (v==='') {
                throw new OmitedError(block,'v','jpair');
            }
            var code = GeneralJSONFunctions.defaultCode('jpair',eval('['+GeneralJSONBlocks['jpair'].args.join(',')+']'),block);
            return code;
        },
        "args": ["k","v"],
        "argsType": ["field","value"],
        "argsGrammarName": ["Evalstr","json"],
        "omitted": [true,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return GeneralJSONFunctions.fieldDefault('jpair',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return GeneralJSONFunctions.xmlText('jpair',inputs,next,isShadow,comment,attribute);
        }
    },
    "jelementstring": {
        "type": "statement",
        "json": {
            "type": "jelementstring",
            "message0": "string %1",
            "args0": [
                Object.assign({},GeneralJSONBlocks.NormalStr,{
                    "name": "v",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "jelementstring",
            "nextStatement": GeneralJSONBlocks.jelementorempty
        },
        "generFunc": function(block) {
            var v = block.getFieldValue('v');
            v = GeneralJSONFunctions.pre('NormalStr')(v,block,'v','jelementstring');
            var code = GeneralJSONFunctions.defaultCode('jelementstring',eval('['+GeneralJSONBlocks['jelementstring'].args.join(',')+']'),block);
            return code;
        },
        "args": ["v"],
        "argsType": ["field"],
        "argsGrammarName": ["NormalStr"],
        "omitted": [true],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return GeneralJSONFunctions.fieldDefault('jelementstring',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return GeneralJSONFunctions.xmlText('jelementstring',inputs,next,isShadow,comment,attribute);
        }
    },
    "jelementnumber": {
        "type": "statement",
        "json": {
            "type": "jelementnumber",
            "message0": "number %1",
            "args0": [
                Object.assign({},GeneralJSONBlocks.Evalstr,{
                    "name": "v",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "jelementnumber",
            "nextStatement": GeneralJSONBlocks.jelementorempty
        },
        "generFunc": function(block) {
            var v = block.getFieldValue('v');
            if (v==='') {
                throw new OmitedError(block,'v','jelementnumber');
            }
            v = GeneralJSONFunctions.pre('Evalstr')(v,block,'v','jelementnumber');
            var code = GeneralJSONFunctions.defaultCode('jelementnumber',eval('['+GeneralJSONBlocks['jelementnumber'].args.join(',')+']'),block);
            return code;
        },
        "args": ["v"],
        "argsType": ["field"],
        "argsGrammarName": ["Evalstr"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return GeneralJSONFunctions.fieldDefault('jelementnumber',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return GeneralJSONFunctions.xmlText('jelementnumber',inputs,next,isShadow,comment,attribute);
        }
    },
    "jelementempty": {
        "type": "statement",
        "json": {
            "type": "jelementempty",
            "message0": "empty array",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "jelementempty",
            "nextStatement": GeneralJSONBlocks.jelementorempty
        },
        "generFunc": function(block) {
            var code = GeneralJSONFunctions.defaultCode('jelementempty',eval('['+GeneralJSONBlocks['jelementempty'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return GeneralJSONFunctions.fieldDefault('jelementempty',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return GeneralJSONFunctions.xmlText('jelementempty',inputs,next,isShadow,comment,attribute);
        }
    },
    "jelement": {
        "type": "statement",
        "json": {
            "type": "jelement",
            "message0": "%1",
            "args0": [
                {
                    "type": "input_value",
                    "name": "v",
                    "check": GeneralJSONBlocks.json
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "jelement",
            "nextStatement": GeneralJSONBlocks.jelementorempty
        },
        "generFunc": function(block) {
            var v = Blockly.JavaScript.valueToCode(block, 'v', 
              Blockly.JavaScript.ORDER_ATOMIC);
            if (v==='') {
                throw new OmitedError(block,'v','jelement');
            }
            var code = GeneralJSONFunctions.defaultCode('jelement',eval('['+GeneralJSONBlocks['jelement'].args.join(',')+']'),block);
            return code;
        },
        "args": ["v"],
        "argsType": ["value"],
        "argsGrammarName": ["json"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return GeneralJSONFunctions.fieldDefault('jelement',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return GeneralJSONFunctions.xmlText('jelement',inputs,next,isShadow,comment,attribute);
        }
    },
    "jfix1": {
        "type": "value",
        "json": {
            "type": "jfix1",
            "message0": "一个固化的json例子 %1 %2 %3 %4 %5 %6",
            "args0": [
                {
                    "type": "input_dummy"
                },
                Object.assign({},GeneralJSONBlocks.Evalstr,{
                    "name": "k",
                    "text": "0"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},GeneralJSONBlocks.Evalstr,{
                    "name": "a",
                    "text": "1"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_value",
                    "name": "v",
                    "check": GeneralJSONBlocks.json
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "jfix1"
        },
        "generFunc": function(block) {
            var k = block.getFieldValue('k');
            if (k==='') {
                throw new OmitedError(block,'k','jfix1');
            }
            k = GeneralJSONFunctions.pre('Evalstr')(k,block,'k','jfix1');
            var a = block.getFieldValue('a');
            if (a==='') {
                throw new OmitedError(block,'a','jfix1');
            }
            a = GeneralJSONFunctions.pre('Evalstr')(a,block,'a','jfix1');
            var v = Blockly.JavaScript.valueToCode(block, 'v', 
              Blockly.JavaScript.ORDER_ATOMIC);
            if (v==='') {
                throw new OmitedError(block,'v','jfix1');
            }
            var code = GeneralJSONFunctions.defaultCode('jfix1',eval('['+GeneralJSONBlocks['jfix1'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["k","a","v"],
        "argsType": ["field","field","value"],
        "argsGrammarName": ["Evalstr","Evalstr","json"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return GeneralJSONFunctions.fieldDefault('jfix1',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return GeneralJSONFunctions.xmlText('jfix1',inputs,next,isShadow,comment,attribute);
        }
    },
    "jfix2": {
        "type": "value",
        "json": {
            "type": "jfix2",
            "message0": "另一个固化的json例子 %1 %2 %3 %4 %5 %6",
            "args0": [
                {
                    "type": "input_dummy"
                },
                Object.assign({},GeneralJSONBlocks.Evalstr,{
                    "name": "k",
                    "text": "2"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},GeneralJSONBlocks.Evalstr,{
                    "name": "a",
                    "text": "4"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_value",
                    "name": "v",
                    "check": GeneralJSONBlocks.json
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "jfix2",
            "inputsInline": true
        },
        "generFunc": function(block) {
            var k = block.getFieldValue('k');
            if (k==='') {
                throw new OmitedError(block,'k','jfix2');
            }
            k = GeneralJSONFunctions.pre('Evalstr')(k,block,'k','jfix2');
            var a = block.getFieldValue('a');
            if (a==='') {
                throw new OmitedError(block,'a','jfix2');
            }
            a = GeneralJSONFunctions.pre('Evalstr')(a,block,'a','jfix2');
            var v = Blockly.JavaScript.valueToCode(block, 'v', 
              Blockly.JavaScript.ORDER_ATOMIC);
            if (v==='') {
                throw new OmitedError(block,'v','jfix2');
            }
            var code = GeneralJSONFunctions.defaultCode('jfix2',eval('['+GeneralJSONBlocks['jfix2'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["k","a","v"],
        "argsType": ["field","field","value"],
        "argsGrammarName": ["Evalstr","Evalstr","json"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return GeneralJSONFunctions.fieldDefault('jfix2',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return GeneralJSONFunctions.xmlText('jfix2',inputs,next,isShadow,comment,attribute);
        }
    },
    "jobject": {
        "type": "value",
        "json": {
            "type": "jobject",
            "message0": "object %1",
            "args0": [
                {
                    "type": "input_statement",
                    "name": "v",
                    "check": GeneralJSONBlocks.jpairorempty
                }
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "jobject"
        },
        "generFunc": function(block) {
            var v = Blockly.JavaScript.statementToCode(block, 'v');
            if (v==='') {
                throw new OmitedError(block,'v','jobject');
            }
            var code = GeneralJSONFunctions.defaultCode('jobject',eval('['+GeneralJSONBlocks['jobject'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["v"],
        "argsType": ["statement"],
        "argsGrammarName": ["jpairorempty"],
        "omitted": [false],
        "multi": [true],
        "fieldDefault": function (keyOrIndex) {
            return GeneralJSONFunctions.fieldDefault('jobject',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return GeneralJSONFunctions.xmlText('jobject',inputs,next,isShadow,comment,attribute);
        }
    },
    "jarray": {
        "type": "value",
        "json": {
            "type": "jarray",
            "message0": "array %1",
            "args0": [
                {
                    "type": "input_statement",
                    "name": "v",
                    "check": GeneralJSONBlocks.jelementorempty
                }
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "jarray"
        },
        "generFunc": function(block) {
            var v = Blockly.JavaScript.statementToCode(block, 'v');
            if (v==='') {
                throw new OmitedError(block,'v','jarray');
            }
            var code = GeneralJSONFunctions.defaultCode('jarray',eval('['+GeneralJSONBlocks['jarray'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["v"],
        "argsType": ["statement"],
        "argsGrammarName": ["jelementorempty"],
        "omitted": [false],
        "multi": [true],
        "fieldDefault": function (keyOrIndex) {
            return GeneralJSONFunctions.fieldDefault('jarray',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return GeneralJSONFunctions.xmlText('jarray',inputs,next,isShadow,comment,attribute);
        }
    },
    "jnumber": {
        "type": "value",
        "json": {
            "type": "jnumber",
            "message0": "number %1",
            "args0": [
                Object.assign({},GeneralJSONBlocks.Evalstr,{
                    "name": "v",
                    "text": "0"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "jnumber"
        },
        "generFunc": function(block) {
            var v = block.getFieldValue('v');
            if (v==='') {
                throw new OmitedError(block,'v','jnumber');
            }
            v = GeneralJSONFunctions.pre('Evalstr')(v,block,'v','jnumber');
            var code = GeneralJSONFunctions.defaultCode('jnumber',eval('['+GeneralJSONBlocks['jnumber'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["v"],
        "argsType": ["field"],
        "argsGrammarName": ["Evalstr"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return GeneralJSONFunctions.fieldDefault('jnumber',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return GeneralJSONFunctions.xmlText('jnumber',inputs,next,isShadow,comment,attribute);
        }
    },
    "jbool": {
        "type": "value",
        "json": {
            "type": "jbool",
            "message0": "boolean %1",
            "args0": [
                Object.assign({},GeneralJSONBlocks.Bool,{
                    "name": "v"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "jbool"
        },
        "generFunc": function(block) {
            var v = block.getFieldValue('v') === 'TRUE';
            v = GeneralJSONFunctions.pre('Bool')(v,block,'v','jbool');
            var code = GeneralJSONFunctions.defaultCode('jbool',eval('['+GeneralJSONBlocks['jbool'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["v"],
        "argsType": ["field"],
        "argsGrammarName": ["Bool"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return GeneralJSONFunctions.fieldDefault('jbool',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return GeneralJSONFunctions.xmlText('jbool',inputs,next,isShadow,comment,attribute);
        }
    },
    "jstring": {
        "type": "value",
        "json": {
            "type": "jstring",
            "message0": "string %1",
            "args0": [
                Object.assign({},GeneralJSONBlocks.NormalStr,{
                    "name": "v",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "jstring"
        },
        "generFunc": function(block) {
            var v = block.getFieldValue('v');
            v = GeneralJSONFunctions.pre('NormalStr')(v,block,'v','jstring');
            var code = GeneralJSONFunctions.defaultCode('jstring',eval('['+GeneralJSONBlocks['jstring'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["v"],
        "argsType": ["field"],
        "argsGrammarName": ["NormalStr"],
        "omitted": [true],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return GeneralJSONFunctions.fieldDefault('jstring',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return GeneralJSONFunctions.xmlText('jstring',inputs,next,isShadow,comment,attribute);
        }
    },
    "jnull": {
        "type": "value",
        "json": {
            "type": "jnull",
            "message0": "null",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "jnull"
        },
        "generFunc": function(block) {
            var code = GeneralJSONFunctions.defaultCode('jnull',eval('['+GeneralJSONBlocks['jnull'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return GeneralJSONFunctions.fieldDefault('jnull',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return GeneralJSONFunctions.xmlText('jnull',inputs,next,isShadow,comment,attribute);
        }
    }
});



//生成代码中,当一个不允许省略的值或块省略时,会抛出这个错误
function OmitedError(block, var_, rule, fileName, lineNumber) {
    var message = 'no omitted '+var_+' at '+rule;
    var instance = new Error(message, fileName, lineNumber);
    instance.block = block;
    instance.varName = var_;
    instance.blockName = rule;
    instance.name = 'OmitedError';
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    if (Error.captureStackTrace) {
        Error.captureStackTrace(instance, OmitedError);
    }
    return instance;
}

OmitedError.prototype = Object.create(Error.prototype);
OmitedError.prototype.constructor = OmitedError;
//处理此错误的omitedcheckUpdateFunction定义在下面

//生成代码中,当一个不允许多个语句输入的块放入多语句时,会抛出这个错误
function MultiStatementError(block, var_, rule, fileName, lineNumber) {
    var message = 'no multi-Statement '+var_+' at '+rule;
    var instance = new Error(message, fileName, lineNumber);
    instance.block = block;
    instance.varName = var_;
    instance.blockName = rule;
    instance.name = 'MultiStatementError';
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    if (Error.captureStackTrace) {
        Error.captureStackTrace(instance, MultiStatementError);
    }
    return instance;
}

MultiStatementError.prototype = Object.create(Error.prototype);
MultiStatementError.prototype.constructor = MultiStatementError;
//处理此错误的omitedcheckUpdateFunction定义在下面


GeneralJSONFunctions={}

GeneralJSONFunctions.Evalstr_pre = function(str) {
    if (parseFloat(str)+''===str) {
        return parseFloat(str)
    } 
    return str;
}

GeneralJSONFunctions.TryIntStr_pre = function(str) {
    if (parseInt(str)+''===str) {
        return parseInt(str)
    } 
    return str;
}

GeneralJSONBlocks.jpairorempty.forEach(blockname => {
    GeneralJSONBlocks[blockname].json.colour=70
})

GeneralJSONBlocks.jelementorempty.forEach(blockname => {
    GeneralJSONBlocks[blockname].json.colour=100
})
GeneralJSONFunctions.Int_pre = function(intstr) {
    return parseInt(intstr);
}

GeneralJSONFunctions.Number_pre = function(intstr) {
    return parseFloat(intstr);
}

//返回各LexerRule文本域的预处理函数,方便用来统一转义等等
GeneralJSONFunctions.pre = function(LexerId) {
    if (GeneralJSONFunctions.hasOwnProperty(LexerId+'_pre')) {
        return GeneralJSONFunctions[LexerId+'_pre'];
    }
    return function(obj,block,fieldName,blockType){return obj}
}



// GeneralJSONFunctions.fieldDefault
// 根据输入是整数字符串或null
// 第index个或者名字为key的域的默认值, null时返回所有field默认值的数组
GeneralJSONFunctions.fieldDefault = function (ruleName,keyOrIndex) {
    var rule = GeneralJSONBlocks[ruleName];
    var iskey=typeof keyOrIndex==typeof '';
    var isindex=typeof keyOrIndex==typeof 0;
    function args0_content_to_default(cnt) {
        var key = ({
            'field_input':'text',
            'field_multilinetext':'text',
            'field_number':'value',
            'field_dropdown':'default',
            'field_checkbox':'checked',
            'field_colour':'colour',
            'field_angle':'angle',
            // 'field_image':'src'
        })[cnt.type];
        return cnt[key];
    }
    var allDefault=[];
    for(var ii=0,index=-1,cnt;cnt=rule.json.args0[ii];ii++){
        if (!cnt.name || cnt.type.slice(0,5)!='field' || cnt.type=='field_image') continue;
        index++;
        if (iskey && cnt.name==keyOrIndex)return args0_content_to_default(cnt);
        if (isindex && index==keyOrIndex)return args0_content_to_default(cnt);
        allDefault.push(args0_content_to_default(cnt))
    }
    if (iskey || isindex) return undefined;
    return allDefault;
}



// GeneralJSONFunctions.defaultCode_TEXT
GeneralJSONFunctions.defaultCode_TEXT = function (ruleName,args,block) {
    var rule = GeneralJSONBlocks[ruleName];
    var message=rule.json.message0;
    var args0=rule.json.args0;
    for(var ii=0,jj=0;ii<args0.length;ii++){
        message=message.split(new RegExp('%'+(ii+1)+'\\b'));
        var content='\n';
        if (args0[ii].type==='input_dummy') {
            message[1]=message[1].slice(1);
        } else if(args0[ii].type==='field_image') {
            content=args0[ii].alt;
        } else {
            content=args[jj++];
        }
        if (args0[ii].type=="input_statement") {
            message[0]=message[0]+'\n';
            message[1]=message[1].slice(1);
        }
        message=message.join(content);
    }
    if (rule.type=='statement') {
        message=message+'\n';
    }
    return message;
}

GeneralJSONFunctions.defaultCode_JSON_TYPE='type'

GeneralJSONFunctions.parserPre={}
GeneralJSONFunctions.parserPre.pre = function(LexerId) {
    if (GeneralJSONFunctions.parserPre.hasOwnProperty(LexerId+'_pre')) {
        return GeneralJSONFunctions.parserPre[LexerId+'_pre'];
    }
    return function(obj,blockObj,fieldName,blockType,index){return obj}
}
/** @class */
GeneralJSONFunctions.parserClass = function (params) {
}
GeneralJSONFunctions.parserClass.prototype.parse = function (obj,next) {
    var blockType = obj[GeneralJSONFunctions.defaultCode_JSON_TYPE]
    var rule = GeneralJSONBlocks[blockType]
    if (GeneralJSONFunctions.parserPre.hasOwnProperty(blockType+'_pre')) {
        obj = GeneralJSONFunctions.parserPre[blockType+'_pre'](obj)
    }
    var input = []
    for (var index = 0; index < rule.args.length; index++) {
        var dobj = obj[rule.args[index]];
        if (rule.argsType[index]==='statement') {
            if (!rule.multi[index])dobj=[dobj];
            var snext=null
            while (dobj.length) {
                var ds=dobj.pop()
                snext=this.parse(ds,snext)
            }
            input.push(snext)
        } else if (rule.argsType[index]==='value') {
            input.push(this.parse(dobj))
        } else {
            var LexerId = rule.argsGrammarName[index]
            input.push(GeneralJSONFunctions.parserPre.pre(LexerId)(dobj,obj,rule.args[index],blockType,index))
        }
    }
    return rule.xmlText(input,next)
}
GeneralJSONFunctions.parser=new GeneralJSONFunctions.parserClass()
GeneralJSONFunctions.parse=function(obj){
    var xml_text = GeneralJSONFunctions.parser.parse(obj);
    var xml = Blockly.Xml.textToDom('<xml>'+xml_text+'</xml>');
    GeneralJSONFunctions.workspace().clear();
    Blockly.Xml.domToWorkspace(xml, GeneralJSONFunctions.workspace());
}

// GeneralJSONFunctions.defaultCode_JSON
GeneralJSONFunctions.defaultCode_JSON = function (ruleName,args,block) {
    var rule = GeneralJSONBlocks[ruleName];
    var values=args
    var output={}
    var ret=''
    if (rule.type==='statement'||rule.type==='value') {
        output[GeneralJSONFunctions.defaultCode_JSON_TYPE]=rule.json.type
        ret=block.getNextBlock()==null?'':','
    }
    for (var index = 0; index < values.length; index++) {
        var value = values[index];
        if (rule.argsType[index]==='statement') {
            output[rule.args[index]]=eval('['+value+']')
            if (!rule.multi[index]) output[rule.args[index]]=output[rule.args[index]][0];
        } else if (rule.argsType[index]==='value') {
            output[rule.args[index]]=eval('('+value+')')
        } else {
            output[rule.args[index]]=value
        }
    }
    ret=JSON.stringify(output,null,4)+ret
    return ret
}

// GeneralJSONFunctions.defaultCode
GeneralJSONFunctions.defaultCode=GeneralJSONFunctions.defaultCode_JSON



// GeneralJSONFunctions.xmlText
// 构造这个方法是为了能够不借助workspace,从语法树直接构造图块结构
// inputs的第i个元素是第i个args的xmlText,null或undefined表示空
// next是其下一个语句的xmlText
GeneralJSONFunctions.xmlText = function (ruleName,inputs,next,isShadow,comment,attribute) {
    var rule = GeneralJSONBlocks[ruleName];
    var blocktext = isShadow?'shadow':'block';
    var xmlText = [];
    xmlText.push('<'+blocktext+' type="'+ruleName+'"');
    for (var attr in attribute) {
        xmlText.push(' '+attr+'="'+attribute[attr]+'"');
    }
    xmlText.push('>');
    if(!inputs)inputs=[];
    var inputIsArray = inputs instanceof Array;
    for (var ii=0,inputType;inputType=rule.argsType[ii];ii++) {
        var input = inputIsArray?inputs[ii]:inputs[rule.args[ii]];
        var _input = '';
        var noinput = input==null;
        if(noinput && inputType==='field' && GeneralJSONBlocks[rule.argsGrammarName[ii]].type!=='field_dropdown') continue;
        if(noinput && inputType==='field') {
            noinput = false;
            input = rule.fieldDefault(rule.args[ii])
        }
        if(noinput) input = '';
        if(inputType==='field' && GeneralJSONBlocks[rule.argsGrammarName[ii]].type==='field_checkbox')input=input?'TRUE':'FALSE';
        if(inputType!=='field') {
            var subList = false;
            var subrulename = rule.argsGrammarName[ii];
            var subrule = GeneralJSONBlocks[subrulename];
            if (subrule instanceof Array) {
                subrulename=subrule[subrule.length-1];
                subrule = GeneralJSONBlocks[subrulename];
                subList = true;
            }
            _input = subrule.xmlText([],null,true);
            if(noinput && !subList && !isShadow) {
                //无输入的默认行为是: 如果语句块的备选方块只有一个,直接代入方块
                input = subrule.xmlText();
            }
        }
        xmlText.push('<'+inputType+' name="'+rule.args[ii]+'">');
        xmlText.push(_input+input);
        xmlText.push('</'+inputType+'>');
    }
    if(comment){
        xmlText.push('<comment><![CDATA[');
        xmlText.push(comment.replace(/]]>/g,'] ] >'));
        xmlText.push(']]></comment>');
    }
    if (next) {
        xmlText.push('<next>');
        xmlText.push(next);
        xmlText.push('</next>');
    }
    xmlText.push('</'+blocktext+'>');
    return xmlText.join('');
}



// GeneralJSONFunctions.blocksIniter
// 把各方块的信息注册到Blockly中
GeneralJSONFunctions.blocksIniter = function(){
    var blocksobj = GeneralJSONBlocks;
    for(var key in blocksobj) {
        var value = blocksobj[key];
        if(value instanceof Array)continue;
        if(/^[A-Z].*$/.exec(key))continue;
        (function(key,value){
            if (value.menu && value.menu.length) {
                var menuRegisterMixin={
                    customContextMenu: function(options) {
                        for(var ii=0,op;op=value.menu[ii];ii++){
                            var option = {enabled: true};
                            option.text = op[0];
                            var check = 'function('
                            if (option.text.slice(0,check.length)==check){
                                option.text=eval('('+option.text+')(this)');
                            }
                            (function(block,fstr){
                                option.callback = function(){
                                    eval(fstr)
                                }
                            })(this,op[1]);
                            options.push(option);
                        }
                    }
                };
                value.json.extensions=value.json.extensions||[];
                var mixinName = 'contextMenu_GeneralJSON_'+value.json.type
                value.json.extensions.push(mixinName)
                Blockly.Extensions.registerMixin(mixinName,menuRegisterMixin);
            }
            Blockly.Blocks[key] = {
                init: function() {this.jsonInit(value.json);}
            }
            Blockly.JavaScript[key] = value.generFunc;
        })(key,value);
    }
}


GeneralJSONFunctions.blocksIniter();


var toolbox = (function(){

    var toolboxXml=document.createElement('xml')

    // 调整这个obj来更改侧边栏和其中的方块
    // 可以直接填 '<block type="xxx">...</block>'
    // 标签 '<label text="标签文本"></label>'
    var toolboxObj = {
        // 每个键值对作为一页
        "statement": [
            // 所有语句块
            GeneralJSONBlocks["top"].xmlText(),
            GeneralJSONBlocks["jpairstring"].xmlText(),
            GeneralJSONBlocks["jpairnumber"].xmlText(),
            GeneralJSONBlocks["jpairempty"].xmlText(),
            GeneralJSONBlocks["jpair"].xmlText(),
            GeneralJSONBlocks["jelementstring"].xmlText(),
            GeneralJSONBlocks["jelementnumber"].xmlText(),
            GeneralJSONBlocks["jelementempty"].xmlText(),
            GeneralJSONBlocks["jelement"].xmlText(),
        ],
        "value": [
            // 所有值块
            GeneralJSONBlocks["jfix1"].xmlText(),
            GeneralJSONBlocks["jfix2"].xmlText(),
            GeneralJSONBlocks["jobject"].xmlText(),
            GeneralJSONBlocks["jarray"].xmlText(),
            GeneralJSONBlocks["jnumber"].xmlText(),
            GeneralJSONBlocks["jbool"].xmlText(),
            GeneralJSONBlocks["jstring"].xmlText(),
            GeneralJSONBlocks["jnull"].xmlText(),
        ]
    }

    var getCategory = function(toolboxXml,name,custom){
        var node = document.createElement('category');
        node.setAttribute('name',name);
        if(custom)node.setAttribute('custom',custom);
        toolboxXml.appendChild(node);
        return node;
    }

    var toolboxGap = '<sep gap="5"></sep>'

    for (var name in toolboxObj){
        var custom = null;
        if(name=='xxxxxx')custom='xxxxxx';
        if(name=='zzzzzz')custom='zzzzzz';
        getCategory(toolboxXml,name,custom).innerHTML = toolboxObj[name].join(toolboxGap);
        var node = document.createElement('sep');
        node.setAttribute('gap',5*3);
        toolboxXml.appendChild(node);
    }

    return toolboxXml;
})();



    var workspace = Blockly.inject('blocklyDiv',{
        media: globalThis.blocklymedia,
        toolbox: toolbox,
        zoom:{
            controls: true,
            wheel: false,//false
            startScale: 0.7,
            maxScale: 1.2,
            minScale: 0.2,
            scaleSpeed: 1.08
        },
        trashcan: false,
    });
    GeneralJSONFunctions.workspace = function(){return workspace}
    
    function omitedcheckUpdateFunction(event) {
        var codeAreaFunc = function(err,data){blocklyinput.value=err?String(err):data;window?.trigger?.call(null,[err,data])}
        try {
            if (["delete","create","move","finished_loading"].indexOf(event.type)!==-1) return;
            var code = Blockly.JavaScript.workspaceToCode(workspace);
            codeAreaFunc(null,code);
        } catch (error) {
            codeAreaFunc(error,null);
            if (error instanceof OmitedError ||error instanceof MultiStatementError){
                var blockName = error.blockName;
                var varName = error.varName;
                var block = error.block;
            }
            console.log(error);
        }
    }
    
    workspace.addChangeListener(omitedcheckUpdateFunction);
    
//自动禁用任何未连接到根块的块
workspace.addChangeListener(Blockly.Events.disableOrphans);


// debugFunctions
function showXML() {
    xml = Blockly.Xml.workspaceToDom(workspace);
    xml_text = Blockly.Xml.domToPrettyText(xml);
    console.log(xml_text);
    xml_text = Blockly.Xml.domToText(xml);
    console.log(xml_text);
    console.log(xml);
}

function runCode() {
    // Generate JavaScript code and run it.
    window.LoopTrap = 1000;
    Blockly.JavaScript.INFINITE_LOOP_TRAP =
        'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    code = Blockly.JavaScript.workspaceToCode(workspace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    try {
        eval('obj=' + code);
        console.log(obj);
    } catch (e) {
        alert(e);
    }
}

    window.buildBlocks&&window.buildBlocks()
    