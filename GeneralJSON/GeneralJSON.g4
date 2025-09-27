grammar GeneralJSON;

top: v=json;

jpairorempty 
    : jpair 
    | k=Evalstr? ':' 'string' v=NormalStr? #jpairstring
/* jpairstring
defaultMap:{k:'',v:''}
*/
    | k=Evalstr? ':' 'number' v=Evalstr #jpairnumber
/* jpairnumber
defaultMap:{k:'',v:'0'}
*/
    | 'emtpy object' #jpairempty
;

jpair : k=Evalstr? ':' v=json
/* jpair
defaultMap:{k:''}
*/;

jelementorempty 
    : jelement 
    | 'string' v=NormalStr? #jelementstring
/* jelementstring
defaultMap:{v:''}
*/
    | 'number' v=Evalstr #jelementnumber
/* jelementnumber
defaultMap:{v:'0'}
*/
    | 'empty array' #jelementempty
;
jelement : v=json;

statExprSplit : '=== statement ^ === expression v ===' ;

json
    :   jobject
    |   jarray
    |   jnumber
    |   jbool
    |   jstring
    |   jfix1
    |   jfix2
    |   jnull
    ;

jfix1 : '一个固化的json例子' BGNL k=Evalstr BGNL a=Evalstr BGNL v=json
/* jfix1
defaultMap:{k:'0',a:'1'}
*/;
jfix2 : '另一个固化的json例子' BGNL k=Evalstr BGNL a=Evalstr BGNL v=json
/* jfix2
defaultMap:{k:'2',a:'4'}
*/;

jobject : 'object' v=jpairorempty+;

jarray : 'array' v=jelementorempty+;

jnumber : 'number' v=Evalstr
/* jnumber
defaultMap:{v:'0'}
*/;

jbool : 'boolean' v=Bool;

jstring : 'string' v=NormalStr?
/* jstring
defaultMap:{v:''}
*/;

jnull : 'null';

IdStr
    :   'varfas'+ ;
NormalStr
    :   'varfass'+ ;
TryIntStr
    :   'varfass'+ ;
Evalstr
    :   'varfass'+ ;

Int :   [0-9]+ ;
Bool:   'true'|'false' ;
Colour:   'asdfgdh'* ;
BGNL:   'asfvaswvr'? 'asdvaswvr'? ;

MeaningfulSplit : '=== meaningful ^ ===' ;

NEWLINE:'\r'? '\n' ; 
        // return newlines to parser (is end-statement signal)
WS  :   [ \t]+ -> skip ;         // toss out whitespace


/* Call_BeforeType
//this.evisitor.recieveOrder='ORDER_NONE';
// this.evisitor.valueColor=330;
this.evisitor.statementColor=300;
// this.evisitor.entryColor=250;

// this.evisitor.idstring_eColor=310;
this.evisitor.gateArgsColor=220;
this.evisitor.structureColor=70;
this.evisitor.shapeColor=130;
// this.evisitor.eventColor=220;
// this.evisitor.soundColor=20;
*/

/* Call_BeforeBlock
delete(this.block('jfix1').inputsInline);
this.block('jfix2').inputsInline=true;

delete(this.block('jpair').inputsInline);
delete(this.block('jelement').inputsInline);

// this.block('prog').inputsInline=true;
// this.block('idString_1_e').output='idString_e';
// this.block('idString_2_e').output='idString_e';
*/

/* Insert_FunctionStart

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

*/