
/*
特殊注入demo
doubleclicktext : EvalString_1
previewBlock : true
// [x, y, floorId, forceFloor]
selectPoint : ["PosString_0", "PosString_1", "IdString_0", true]
// 自动补全
allIds : ['EvalString_1']
allEnemys : ['EvalString_1']
allItems : ['EvalString_1']
allImages : ['EvalString_1']
allAnimates : ['EvalString_1']
allBgms : ['EvalString_1']
allSounds : ['EvalString_1']
allShops : ['EvalString_1']
allFloorIds : ['EvalString_1']
// 选择素材
material : ["./project/animates/", "IdString_0"]
*/


grammar MotaAction;

//===============parser===============
//===blockly语句===

common_m
    :   '编辑事件' BGNL action=action+ 
    
;


//事件 事件编辑器入口之一
event_m
    :   '事件' BGNL  '覆盖触发器' trigger=Bool '启用' enable=Bool '通行状态' noPass=B_0_List '显伤' displayDamage=Bool '不透明度' opacity=Number BGNL  '该点特效' '虚化' blur=Number '色相' hue=Int '灰度' grayscale=Number '反色' invert=Bool '阴影' shadow=Number BGNL  action=action+ 
    

/* event_m
tooltip : 编辑魔塔的事件
helpUrl : /_docs/#/instruction
defaultMap : {trigger:false,trigger:true,noPass:'null',opacity:1,invert:false}
// default : [false,true,null,true,1,0,0,0,false,0,null]
if (opacity < 0 || opacity > 1) throw '不透明度需要在0~1之间';
if (blur < 0) throw '虚化不得小于0；0为完全没有虚化';
if (hue < 0 || hue >= 360) throw '色相需要在0~359之间';
if (grayscale < 0 || grayscale > 1) throw '灰度需要在0~1之间';
if (shadow < 0) throw '阴影不得小于0；0为完全没有阴影';
var code = MotaActionFunctions.defaultCode('event_m',eval('['+MotaActionBlocks['event_m'].args.join(',')+']'),block);
return code;
*/;


//自动事件 事件编辑器入口之一
autoEvent_m
    :   '自动事件：' '触发条件' condition=EvalString_Multi '优先级' priority=Int BGNL  '仅在本层检测' currentFloor=Bool '事件流中延迟执行' delayExecute=Bool '允许多次执行' multiExecute=Bool BGNL  action=action+ 
    
;

//升级 事件编辑器入口之一
level_m
    :   '等级提升' BGNL  levelCase=levelCase+ 
    

;

levelCase
    :   '需求' need=expression '称号' title=EvalString? '是否扣除经验' remove=Bool BGNL  action=action+


;

//商店 事件编辑器入口之一
shop_m
    :   '全局商店列表' BGNL  shoplist=shoplist+
    
;

shoplist
    :   shopsub
    |   shopitem
    |   shopcommonevent
    |   emptyshop
    ;

emptyshop
    :   ' '

;

shopsub
    :   '商店 id' id=IdString '标题' title=EvalString? '图像' icon=IdString? BGNL  '文字' text=EvalString_Multi? BGNL  '快捷名称' textInList=EvalString '未开启不显示' mustEnable=Bool '不可预览' disablePreview=Bool BGNL  choices=shopChoices+ 
    

;

shopChoices
    :   '商店选项' text=EvalString '使用条件' condition=EvalString BGNL  '图标' icon=IdString? '颜色' colorS=ColorString? color=Colour '出现条件' showCondition=EvalString? BGNL  action=action+ 
    

;

shopitem
    :   '道具商店 id' id=IdString '快捷名称' textInList=EvalString '使用' use=ShopUse_List '未开启不显示' mustEnable=Bool BGNL  choices=shopItemChoices+ 


;

shopItemChoices
    :   '道具名' id=IdString '存量' number=IntString? '买入价格' money=EvalString? '卖出价格' sell=EvalString? '出现条件' condition=EvalString? 

;

shopcommonevent
    :   '公共事件商店 id' id=IdString '快捷名称' textInList=EvalString '未开启不显示' mustEnable=Bool BGNL '执行的公共事件名' commonEvent=EvalString '参数列表' args=JsonEvalString?
    
;

//beforeBattle 事件编辑器入口之一
beforeBattle_m
    :   '战斗开始前' BGNL  action=action+ 
    
;

//afterBattle 事件编辑器入口之一
afterBattle_m
    :   '战斗结束后' BGNL  action=action+ 
    

;

//afterGetItem 事件编辑器入口之一
afterGetItem_m
    :   '获取道具后' '轻按时不触发' disableOnGentleClick=Bool BGNL  action=action+ 
    

;

//afterOpenDoor 事件编辑器入口之一
afterOpenDoor_m
    :   '打开门后' BGNL  action=action+ 
    

;

//firstArrive 事件编辑器入口之一
firstArrive_m
    :   '首次到达楼层' BGNL  action=action+ 
    

;

//eachArrive 事件编辑器入口之一
eachArrive_m
    :   '每次到达楼层' BGNL  action=action+ 


;

//changeFloor 事件编辑器入口之一
changeFloor_m
    :   '楼梯, 传送门' BGNL  floorIdL=Floor_List floorId=IdString? stair=Stair_List 'x' x=PosString? ',' 'y' y=PosString? '朝向' direction=DirectionEx_List '动画时间' time=IntString? '穿透性' ignoreChangeFloor=IgnoreChangeFloor_List 
    

;

//commonEvent 事件编辑器入口之一
commonEvent_m
    :   '公共事件' BGNL  action=action+ 


;

//item 事件编辑器入口之一
item_m
    :   '使用道具事件' BGNL  action=action+ 


;

// levelChoose 事件编辑器入口之一
levelChoose_m
    :   '难度分歧' BGNL levelChoose=levelChooseList+ 


;

levelChooseList
    : levelChooseChoice
    | levelChooseEmpty;

levelChooseEmpty
    :   ' '
    
;

levelChooseChoice
   :    '难度分歧项' '名称' title=EvalString '简写' name=EvalString '变量:hard值' hard=NInt '颜色' colorS=ColorString? color=Colour BGNL  action=action+ 

;

floorPartition_m
    :   '高层塔分区管理' BGNL floorPartition=floorPartitionList+ 


;

floorPartitionList
    : floorPartitionItem
    | floorPartitionEmpty;

floorPartitionEmpty
    :   ' '
    
;

floorPartitionItem
   :    '分区项' '起始楼层ID' id1=IdString '终止楼层ID（不填代表到最后一层）' id2=IdString? 

;


// equip 事件编辑器入口之一
equip_m 
    :   '装备' '类型' type=EvalString '装备动画（第一个装备格有效）' animate=IdString? BGNL '数值提升项' value=equipList+ '百分比提升项' percentage=equipList+ '穿上时事件' equipEvent=action+ '脱下时事件' unequipEvent=action+ '此道具cls须为equips并设置canUseItemEffect' 


;

equipList
    : equipKnown
    | equipUnknown
    | equipEmpty;


equipKnown
    : key=Equip_List ':' value=EvalString 


;

equipUnknown
    : key=EvalString ':' value=EvalString 


;


equipEmpty
    :   ' '
    
;

floorImage_m
    : '楼层贴图' BGNL  floorImage=floorImageList+ 


;

floorImageList
    :   floorOneImage
    |   floorEmptyImage;

floorOneImage
    :   '图片名' name=EvalString '翻转' reverse=Reverse_List '图层' canvas=Bg_Fg2_List '绘制坐标' 'x' x=NInt 'y' y=NInt '初始禁用' disable=Bool BGNL  
        '裁剪起点坐标' 'x' sx=IntString? 'y' sy=IntString? '宽' w=IntString? '高' h=IntString? '帧数' frame=IntString? 


;

floorEmptyImage
    :   ' '
    
;


// doorInfo 事件编辑器入口之一
doorInfo_m 
    :   '门信息' '开关门时间' time=Int '开门音效' openSound=EvalString? '关门音效' closeSound=EvalString? BGNL  '需要钥匙' keys=doorKeyList+ '如需撞到开门还需要把图块触发器改成 openDoor' BGNL  '开门后事件' afterOpenDoor=action+ 


;

doorKeyList
    : doorKeyKnown
    | doorKeyUnknown
    | doorKeyEmpty;


doorKeyKnown
    : key=Key_List ':' count=Int '需要但不消耗' noCost=Bool 


;

doorKeyUnknown
    : key=Key_List ':' count=Int '需要但不消耗' noCost=Bool 


;


doorKeyEmpty
    :   ' '
    
;


faceIds_m
    : '行走图朝向:' BGNL  '向下ID' down=IdString? '向左ID' left=IdString? '向右ID' right=IdString? '向上ID' up=IdString?  


;


mainStyle_m
    : '主要样式设置：' '标题界面背景图：' startBackground=EvalString BGNL  
      '竖屏标题界面背景图：' startVerticalBackground=EvalString BGNL  
      '标题样式；可写 display: none 隐藏标题' startLogoStyle=EvalString BGNL  
      '标题按钮样式：' startButtonsStyle=EvalString BGNL  
      '横屏状态栏背景；url(...) 0 0/100% 100% no-repeat 可将图片拉伸自适配' BGNL  statusLeftBackground=EvalString BGNL   
      '竖屏状态栏背景：' statusTopBackground=EvalString BGNL  
      '竖屏工具栏背景：' toolsBackground=EvalString BGNL  
      '楼层切换样式：' floorChangingStyle=EvalString BGNL 
      '状态栏颜色' statusBarColorS=ColorString statusBarColor=Colour '边框颜色' borderColorS=ColorString borderColor=Colour BGNL 
      '选中框颜色' selectColor=ColorString selectColorS=Colour '全局字体' font=EvalString 

/* mainStyle_m
tooltip : 主要样式设置
defaultMap : {startBackground:"project/images/bg.jpg",startVerticalBackground:"project/images/bg.jpg",startLogoStyle:"color: white",startButtonsStyle:"background-color: #32369F; opacity: 0.85; color: #FFFFFF; border: ,FFFFFF 2px solid; caret-color: #FFD700;",statusLeftBackground:"url(project/materials/ground.png) repeat",statusTopBackground:"url(project/materials/ground.png) repeat",toolsBackground:"url(project/materials/ground.png) repeat",floorChangingStyle:"background-color: black; color: white",statusBarColorS:"255,255,255,1",statusBarColor:"rgba(255,255,255,1)",borderColorS:"204,204,204,1",borderColor:"rgba(204,204,204,1)",selectColor:"255,215,0,1",selectColorS:"rgba(255,215,0,1)",font:"Verdana"}
*/;

nameMap_m
    : '文件别名设置' '（可以游戏中使用此别名代替原始文件名）' BGNL  nameMap=nameMapList+ 

;

nameMapList
    :   nameMapBgm
    |   nameMapSoundKnown
    |   nameMapSoundUnknown
    |   nameMapImage
    |   nameMapAnimate
    |   nameMapUnknown
    |   nameMapEmpty;

nameMapBgm
    : '映射背景音乐' '名称' name=EvalString '映射到文件' file=EvalString 

;

nameMapSoundKnown
    : '映射系统音效' '名称' name=NameMap_List '映射到文件' file=EvalString 

;

nameMapSoundUnknown
    : '映射音效' '名称' name=EvalString '映射到文件' file=EvalString 

;

nameMapImage
    : '映射图片' '名称' name=EvalString '映射到文件' file=EvalString 

;

nameMapAnimate
    : '映射动画' '名称' name=EvalString '映射到文件' file=IdString 

;

nameMapUnknown
    : '未知映射' '名称' name=EvalString '映射到文件' file=EvalString 

;

nameMapEmpty
    :   ' '
    
;


splitImages_m
    :   '图片切分（你可以将一张png格式的大图切分为若干小图）' BGNL splitImages=splitImagesList+ 


;

splitImagesList
    : splitImagesOne
    | splitImagesEmpty;


splitImagesOne
    :   '图片切分项' '图片名' name=EvalString '每个小图宽度' width=Int '高度' height=Int '生成小图的前缀' prefix=EvalString 

;

splitImagesEmpty
    :   ' '
    
;

//为了避免关键字冲突,全部加了_s
//动作
action
    :   text_0_s
    |   text_1_s
    |   text_2_s
    |   moveTextBox_s
    |   clearTextBox_s
    |   comment_s
    |   autoText_s
    |   scrollText_s
    |   setText_s
    |   tip_s
    |   setValue_s
    |   setEnemy_s
    |   setEnemyOnPoint_s
    |   resetEnemyOnPoint_s
    |   moveEnemyOnPoint_s
    |   moveEnemyOnPoint_1_s
    |   setEquip_s
    |   setFloor_s
    |   setGlobalAttribute_s
    |   setGlobalValue_s
    |   setGlobalFlag_s
    |   setNameMap_s
    |   show_s
    |   hide_s
    |   setBlockOpacity_s
    |   setBlockFilter_s
    |   trigger_s
    |   insert_1_s
    |   insert_2_s
    |   exit_s
    |   setBlock_s
    |   turnBlock_s
    |   showFloorImg_s
    |   hideFloorImg_s
    |   showBgFgMap_s
    |   hideBgFgMap_s
    |   setBgFgBlock_s
    |   setHeroIcon_s
    |   update_s
    |   showStatusBar_s
    |   hideStatusBar_s
    |   setHeroOpacity_s
    |   sleep_s
    |   wait_s
    |   waitAsync_s
    |   stopAsync_s
    |   battle_s
    |   battle_1_s
    |   openDoor_s
    |   closeDoor_s
    |   changeFloor_s
    |   changePos_s
    |   setViewport_s
    |   setViewport_1_s
    |   lockViewport_s
    |   useItem_s
    |   loadEquip_s
    |   unloadEquip_s
    |   openShop_s
    |   disableShop_s
    |   follow_s
    |   unfollow_s
    |   animate_s
    |   animate_1_s
    |   stopAnimate_s
    |   vibrate_s
    |   showImage_s
    |   showImage_1_s
    |   hideImage_s
    |   showTextImage_s
    |   moveImage_s
    |   rotateImage_s
    |   scaleImage_s
    |   showGif_s
    |   setCurtain_0_s
    |   setCurtain_1_s
    |   screenFlash_s
    |   setWeather_s
    |   move_s
    |   moveAction_s
    |   moveHero_s
    |   jump_s
    |   jump_1_s
    |   jumpHero_s
    |   jumpHero_1_s
    |   playBgm_s
    |   pauseBgm_s
    |   resumeBgm_s
    |   loadBgm_s
    |   freeBgm_s
    |   playSound_s
    |   playSound_1_s
    |   stopSound_s
    |   setVolume_s
    |   setBgmSpeed_s
    |   win_s
    |   lose_s
    |   restart_s
    |   if_s
    |   if_1_s
    |   switch_s
    |   for_s
    |   forEach_s
    |   while_s
    |   dowhile_s
    |   break_s
    |   continue_s
    |   input_s
    |   input2_s
    |   choices_s
    |   confirm_s
    |   callBook_s
    |   callSave_s
    |   autoSave_s
    |   forbidSave_s
    |   callLoad_s
    |   previewUI_s
    |   clearMap_s
    |   setAttribute_s
    |   setFilter_s
    |   fillText_s
    |   fillBoldText_s
    |   drawTextContent_s
    |   fillRect_s
    |   strokeRect_s
    |   drawLine_s
    |   drawArrow_s
    |   fillPolygon_s
    |   strokePolygon_s
    |   fillEllipse_s
    |   strokeEllipse_s
    |   fillArc_s
    |   strokeArc_s
    |   drawImage_s
    |   drawImage_1_s
    |   drawIcon_s
    |   drawBackground_s
    |   drawSelector_s
    |   drawSelector_1_s
    |   unknown_s
    |   function_s
    |   pass_s
    ;

text_0_s
    :   '显示文章' ':' text=EvalString_Multi 
    

;

text_1_s
    :   '标题' title=EvalString? '图像' icon=EvalString? '对话框效果' effective=EvalString? '起点 px' px=PosString? 'py' py=PosString? '宽' width=PosString? '编号' code=Int '不等待操作' async=Bool BGNL  text=EvalString_Multi 
    

;

text_2_s
    :   '标题' title=EvalString? '图像' icon=EvalString? '对话框效果' effective=EvalString? '起点 px' px=PosString? 'py' py=PosString? '宽' width=PosString? '编号' code=Int '不等待操作' async=Bool BGNL  text=EvalString_Multi BGNL  draw=textDrawingList* 
    

;

textDrawingList
    :   textDrawing
    |   textDrawingEmpty
    ;

textDrawing
    :   '立绘' name=EvalString '翻转' reverse=Reverse_List '绘制坐标' 'x' x=IntString 'y' y=IntString '宽' w=IntString? '高' h=IntString? BGNL 
        '裁剪坐标' 'x' sx=IntString? 'y' sy=IntString? '宽' sw=IntString? '高' sh=IntString? '不透明度' opacity=EvalString? '旋转角度' angle=IntString?
    ;

textDrawingEmpty
    :   ' '
    ;

moveTextBox_s
    :   '移动对话框' ':' code=Int 'px' px=PosString 'py' py=PosString '使用增量' relative=Bool '移动方式' moveMode=MoveMode_List '动画时间' time=Int '不等待执行完毕' async=Bool 
    ;

clearTextBox_s
    :   '清除对话框' ':' code=EvalString? 
    ;

comment_s
    :   '添加注释' ':' text=EvalString_Multi 
    ;

autoText_s
    :   '自动剧情文本: 标题' title=EvalString? '图像' icon=EvalString? '对话框效果' effective=EvalString? '时间' time=Int BGNL text=EvalString_Multi 
    ;

scrollText_s
    :   '滚动剧情文本:' '时间' time=Int '行距' lineHeight=Number '不等待执行完毕' async=Bool? BGNL text=EvalString_Multi 
    ;

setText_s
    :   '设置剧情文本的属性' '位置' position=SetTextPosition_List '偏移像素' offset=IntString? '对齐' align=TextAlign_List? '粗体' bold=B_1_List? BGNL '标题颜色' titleColorS=ColorString? titleColor=Colour '正文颜色' textColorS=ColorString? textColor=Colour '背景色' background=EvalString? bgColor=Colour BGNL '标题大小' titleSize=IntString? '正文大小' textSize=IntString? '行距' lineHeight=IntString? '打字间隔' typeTime=IntString? '字符间距' letterSpacing=IntString? '淡入淡出时间' animateTime=IntString? 
    ;

tip_s
    :   '显示提示' ':' text=EvalString '图标ID' icon=IdString? 
    ;

setValue_s
    :   '数值操作' ':' '名称' name=idString_e operator=AssignOperator_List value=expression '不刷新状态栏' norefresh=Bool 
    ;

setEnemy_s
    :   '设置怪物属性' ':' '怪物ID' id=IdString '的' property=EnemyId_List operator=AssignOperator_List value=expression '不刷新显伤' norefresh=Bool 
    ;

setEquip_s
    :   '设置装备属性' ':' '装备ID' id=IdString valueType=EquipValueType_List '的' property=EvalString operator=AssignOperator_List value=expression 
    ;

setEnemyOnPoint_s
    :   '设置某点怪物属性' ':' 'x' x=EvalString? ',' 'y' y=EvalString? '楼层' floorId=IdString? '的' property=EnemyPoint_List operator=AssignOperator_List value=expression '不刷新显伤' norefresh=Bool 
    ;

resetEnemyOnPoint_s
    :   '重置某点怪物属性' ':' 'x' x=EvalString? ',' 'y' y=EvalString? '楼层' floorId=IdString? '不刷新显伤' norefresh=Bool 
    ;

moveEnemyOnPoint_s
    :   '移动某点怪物属性' ':' '起点' 'x' fromX=PosString? ',' 'y' fromY=PosString? '终点' 'x' toX=PosString? 'y' toY=PosString? '楼层' floorId=IdString? '不刷新显伤' norefresh=Bool 
    ;

moveEnemyOnPoint_1_s
    :   '移动某点怪物属性' ':' '起点' 'x' fromX=PosString? ',' 'y' fromY=PosString? '增量' 'dx' dx=PosString? 'dy' dy=PosString? '楼层' floorId=IdString? '不刷新显伤' norefresh=Bool 
    ;

setFloor_s
    :   '设置楼层属性' ':' property=Floor_Meta_List '楼层名' floorId=IdString? '为' value=JsonEvalString 
    ;

setGlobalAttribute_s
    :   '设置全局属性' ':' name=Global_Attribute_List '为' value=EvalString 
    ;

setGlobalValue_s
    :   '设置全局数值' ':' name=Global_Value_List '为' value=EvalString 
    ;

setGlobalFlag_s
    :   '设置系统开关' ':' name=Global_Flag_List value=Bool 
    ;

setNameMap_s
    :   '设置文件别名' ':' name=EvalString '为' value=EvalString? 
    ;

show_s
    :   '显示事件' 'x' x=EvalString? ',' 'y' y=EvalString? '楼层' floorId=IdString? '动画时间' time=IntString? '不等待执行完毕' async=Bool? 
    ;

hide_s
    :   '隐藏事件' 'x' x=EvalString? ',' 'y' y=EvalString? '楼层' floorId=IdString? '同时删除' remove=Bool '动画时间' time=IntString? '不等待执行完毕' async=Bool? 
    ;

setBlockOpacity_s
    :   '设置图块不透明度' 'x' x=EvalString? ',' 'y' y=EvalString? '楼层' floorId=IdString? '不透明度' opacity=Number '动画时间' time=IntString? '不等待执行完毕' async=Bool? 
    ;

setBlockFilter_s
    :   '设置图块特效' 'x' x=EvalString? ',' 'y' y=EvalString? '楼层' floorId=IdString? '虚化' blur=Number '色相' hue=Int '灰度' grayscale=Number '反色' invert=Bool '阴影' shadow=Number 
    ;

trigger_s
    :   '触发系统事件' 'x' x=PosString? ',' 'y' y=PosString? 
    ;

insert_1_s
    :   '插入公共事件' name=EvalString '参数列表' args=JsonEvalString? 
    ;

insert_2_s
    :   '插入事件' 'x' x=PosString? ',' 'y' y=PosString? which=Event_List? '楼层' floorId=IdString? '参数列表' args=JsonEvalString? 
    ;

exit_s
    :   '立刻结束当前事件' 
    ;

setBlock_s
    :   '转变图块为' number=EvalString 'x' x=EvalString? ',' 'y' y=EvalString? '楼层' floorId=IdString? '动画时间' time=IntString? '不等待执行完毕' async=Bool 
    ;

turnBlock_s
    :   '事件转向' direction=DirectionEx_List 'x' x=EvalString? ',' 'y' y=EvalString? '楼层' floorId=IdString? 
    ;

showFloorImg_s
    :   '显示贴图' '像素坐标' 'x' x=EvalString? ',' 'y' y=EvalString? '楼层' floorId=IdString? 
    ;

hideFloorImg_s
    :   '隐藏贴图' '像素坐标' 'x' x=EvalString? ',' 'y' y=EvalString? '楼层' floorId=IdString? 
    ;

showBgFgMap_s
    :   '显示图层块' name=Bg_Fg_List 'x' x=EvalString? ',' 'y' y=EvalString? '楼层' floorId=IdString? 
    ;

hideBgFgMap_s
    :   '隐藏图层块' name=Bg_Fg_List 'x' x=EvalString? ',' 'y' y=EvalString? '楼层' floorId=IdString? 
    ;

setBgFgBlock_s
    :   '转变图层块' name=Bg_Fg_List '为' number=EvalString 'x' x=EvalString? ',' 'y' y=EvalString? '楼层' floorId=IdString? 
    ;

setHeroIcon_s
    :   '更改角色行走图' name=EvalString? '不重绘' noDraw=Bool 
    ;

update_s
    :   '更新状态栏和地图显伤' '不检查自动事件' doNotCheckAutoEvents=Bool 
    ;

showStatusBar_s
    :   '显示状态栏' 
    ;

hideStatusBar_s
    :   '隐藏状态栏' '不隐藏竖屏工具栏' toolbox=Bool 
    ;

setHeroOpacity_s
    :   '设置勇士不透明度' opacity=Number '渐变方式' moveMode=MoveMode_List '动画时间' time=IntString? '不等待执行完毕' async=Bool 
    ;

sleep_s
    :   '等待' time=Int '毫秒' '不可被Ctrl跳过' noSkip=Bool 
    ;

battle_s
    :   '强制战斗' id=IdString 
    ;

battle_1_s
    :   '强制战斗' 'x' x=PosString? ',' 'y' y=PosString? 
    ;

openDoor_s
    :   '开门' 'x' x=PosString? ',' 'y' y=PosString? '楼层' floorId=IdString? '需要钥匙' needKey=Bool? '不等待执行完毕' async=Bool 
    ;

closeDoor_s
    :   '关门' 'x' x=PosString? ',' 'y' y=PosString? 'ID' id=IdString '不等待执行完毕' async=Bool 
    ;

changeFloor_s
    :   '楼层切换' floorId=Floor_List id=IdString? stair=Stair_List 'x' x=PosString? ',' 'y' y=PosString? '朝向' direction=DirectionEx_List '动画时间' time=IntString? 
    ;

changePos_s
    :   '位置朝向切换' 'x' x=PosString? ',' 'y' y=PosString? '朝向' direction=DirectionEx_List 
    ;

useItem_s
    :   '使用道具' id=IdString 
    ;

loadEquip_s
    :   '装上装备' id=IdString 
    ;

unloadEquip_s
    :   '卸下第' pos=Int '格装备孔的装备' 
    ;

openShop_s
    :   '启用全局商店' id=IdString '同时打开' open=Bool 
    ;

disableShop_s
    :   '禁用全局商店' id=IdString 
    ;

follow_s
    :   '跟随勇士' '行走图' name=EvalString 
    ;

unfollow_s
    :   '取消跟随' '行走图' name=EvalString? 
    ;

vibrate_s
    :   '画面震动' '方向' direction=Vibrate_List '时间' time=Int '速度' speed=Int '振幅' power=Int '不等待执行完毕' async=Bool 
    ;

animate_s
    :   '显示动画' name=EvalString '位置' 'x' x=PosString? 'y' y=PosString? '相对窗口坐标' alignWindow=Bool '不等待执行完毕' async=Bool 
    ;

animate_1_s
    :   '显示动画并跟随角色' name=EvalString '不等待执行完毕' async=Bool 
    ;

stopAnimate_s
    :   '停止所有动画' '执行动画回调' doCallback=Bool 
    ;

setViewport_s
    :   '设置视角' '左上角坐标' 'x' x=PosString? ',' 'y' y=PosString? '移动方式' moveMode=MoveMode_List '动画时间' time=Int '不等待执行完毕' async=Bool 
    ;

setViewport_1_s
    :   '设置视角' '增量坐标' 'dx' dx=PosString? ',' 'dy' dy=PosString? '移动方式' moveMode=MoveMode_List '动画时间' time=Int '不等待执行完毕' async=Bool 
    ;

lockViewport_s
    :   '是否锁定视角' lock=Bool 
    ;

showImage_s
    :   '显示图片' '图片编号' code=NInt '图片' image=EvalString '翻转' reverse=Reverse_List BGNL
        '绘制的起点像素' 'x' x=PosString 'y' y=PosString '不透明度' opacity=Number '时间' time=Int '不等待执行完毕' async=Bool 
    ;

showImage_1_s
    :   '显示图片' '图片编号' code=NInt '图片' image=EvalString '翻转' reverse=Reverse_List BGNL
        '裁剪的起点像素' 'x' sx=PosString 'y' sy=PosString '宽' sw=PosString? '高' sh=PosString? '不透明度' opacity=Number BGNL
        '绘制的起点像素' 'x' x=PosString 'y' y=PosString '宽' w=PosString? '高' h=PosString? '时间' time=Int '不等待执行完毕' async=Bool 
    ;

showTextImage_s
    :   '显示图片化文本' text=EvalString_Multi BGNL
        '图片编号' code=NInt '起点像素' 'x' x=PosString 'y' y=PosString '行距' lineHeight=Number '翻转' reverse=Reverse_List '不透明度' opacity=Number '时间' time=Int '不等待执行完毕' async=Bool 
    ;

hideImage_s
    :   '清除图片' '图片编号' code=NInt '时间' time=Int '不等待执行完毕' async=Bool 
    ;

showGif_s
    :   '显示或清除动图' name=EvalString? '起点像素位置' 'x' x=PosString? 'y' y=PosString? 
    ;

moveImage_s
    :   '图片移动' '图片编号' code=NInt '终点像素位置' 'x' toX=PosString? 'y' toY=PosString? BGNL
        '不透明度' opacity=EvalString? '移动方式' moveMode=MoveMode_List '移动时间' time=Int '不等待执行完毕' async=Bool 
    ;

rotateImage_s
    :   '图片旋转' '图片编号' code=NInt '中心点像素' 'x' centerX=PosString? 'y' centerY=PosString? '移动方式' moveMode=MoveMode_List BGNL '旋转度数（正数顺时针，负数逆时针）' angle=NInt '旋转时间' time=Int '不等待执行完毕' async=Bool 
    ;

scaleImage_s
    :   '图片放缩' '图片编号' code=NInt '中心点像素' 'x' centerX=PosString? 'y' centerY=PosString? '移动方式' moveMode=MoveMode_List BGNL '放缩比例' scale=Number '动画时间' time=Int '不等待执行完毕' async=Bool 
    ;

setCurtain_0_s
    :   '更改画面色调' colorS=ColorString color=Colour '动画时间' time=IntString? BGNL '渐变方式' moveMode=MoveMode_List '持续到下一个本事件' keep=Bool '不等待执行完毕' async=Bool 
    ;

setCurtain_1_s
    :   '恢复画面色调' '动画时间' time=IntString? '渐变方式' moveMode=MoveMode_List '不等待执行完毕' async=Bool 
    ;

screenFlash_s
    :   '画面闪烁' colorS=ColorString color=Colour '单次时间' time=Int '执行次数' times=IntString? '渐变方式' moveMode=MoveMode_List '不等待执行完毕' async=Bool 
    ;

setWeather_s
    :   '更改天气' name=Weather_List '强度' level=Int '持续到下个本事件' keep=Bool 
    ;

move_s
    :   '移动事件' 'x' x=PosString? ',' 'y' y=PosString? '动画时间' time=IntString? '不消失' keep=Bool '不等待执行完毕' async=Bool BGNL steps=moveDirection+ 
    ;

moveDirection
    :   '移动方向' direction=Move_List '格数' steps=Int 
    ;

moveAction_s
    :   '勇士前进一格或撞击' 
    ;

moveHero_s
    :   '无视地形移动勇士' '动画时间' time=IntString? '不等待执行完毕' async=Bool BGNL steps=moveDirection+ 
    ;

jump_s
    :   '跳跃事件' '起始 x' fromX=PosString? ',' 'y' fromY=PosString? '终止 x' toX=PosString? ',' 'y' toY=PosString? '动画时间' time=IntString? '不消失' keep=Bool '不等待执行完毕' async=Bool 
    ;

jump_1_s
    :   '跳跃事件' '起始 x' fromX=PosString? ',' 'y' fromY=PosString? '增量 dx' dx=PosString? ',' 'dy' dy=PosString? '动画时间' time=IntString? '不消失' keep=Bool '不等待执行完毕' async=Bool 
    ;

jumpHero_s
    :   '跳跃勇士' 'x' x=PosString? ',' 'y' y=PosString? '动画时间' time=IntString? '不等待执行完毕' async=Bool 
    ;

jumpHero_1_s
    :   '跳跃勇士' '增量 dx' dx=PosString? ',' 'dy' dy=PosString? '动画时间' time=IntString? '不等待执行完毕' async=Bool 
    ;

playBgm_s
    :   '播放背景音乐' name=EvalString '开始播放秒数' startTime=Int '持续到下个本事件' keep=Bool 
    ;

pauseBgm_s
    :   '暂停背景音乐' 
    ;

resumeBgm_s
    :   '恢复背景音乐' '从暂停位置继续播放' resume=Bool 
    ;

loadBgm_s
    :   '预加载背景音乐' name=EvalString 
    ;

freeBgm_s
    :   '释放背景音乐的缓存' name=EvalString 
    ;

playSound_s
    :   '播放音效' name=EvalString '停止之前音效' stop=Bool? '音调' pitch=IntString? '等待播放完毕' sync=Bool? 
    ;

playSound_1_s
    :   '播放系统音效' name=NameMap_List '停止之前音效' stop=Bool? '音调' pitch=IntString? '等待播放完毕' sync=Bool? 
    ;

stopSound_s
    :   '停止所有音效' 
    ;

setVolume_s
    :   '设置音量' value=Int '渐变时间' time=IntString? '不等待执行完毕' async=Bool 
    ;

setBgmSpeed_s
    :   '设置背景音乐播放速度' value=Int '同时改变音调' pitch=Bool 
    ;

win_s
    :   '游戏胜利,结局' ':' reason=EvalString? '不计入榜单' norank=Bool '不结束游戏' noexit=Bool 
    ;

lose_s
    :   '游戏失败,结局' ':' reason=EvalString? 
    ;

restart_s
    :   '直接回到标题界面' 
    ;

input_s
    :   '接受用户输入数字,提示' ':' text=EvalString 
    ;

input2_s
    :   '接受用户输入文本,提示' ':' text=EvalString 
    ;

if_s
    :   '如果' ':' condition=expression BGNL trueActions=action+ '否则' ':' BGNL falseActions=action+ 
    ;

if_1_s
    :   '如果' ':' condition=expression BGNL trueActions=action+ 
    ;

switch_s
    :   '多重分歧 条件判定' ':' condition=expression BGNL caseList=switchCase+ 
    ;

switchCase
    :   '如果是' case1=expression '的场合' '不跳出' nobreak=Bool BGNL action=action+ 
    ;

choices_s
    :   '选项' ':' text=EvalString_Multi? BGNL '标题' title=EvalString? '图像' icon=IdString? '超时毫秒数' timeout=Int '宽度' width=IntString? BGNL choices=choicesContext+ 
    ;

choicesContext
    :   '子选项' text=EvalString '图标' icon=IdString? '颜色' colorS=ColorString? color=Colour '启用条件' need=EvalString? '出现条件' condition=EvalString? BGNL action=action+ 
    ;

confirm_s
    :   '显示确认框' ':' text=EvalString_Multi '超时毫秒数' timeout=Int BGNL '确定的场合' ':' '（默认选中' default1=Bool '）' BGNL yesActions=action+ '取消的场合' ':' BGNL noActions=action+ 
    ;

for_s
    :   '循环遍历' ': ' name=expression '从' from=EvalString '到' to=EvalString '步增' step=EvalString BGNL data=action+ 
    ;

forEach_s
    :   '循环遍历' ': 以' name=expression '逐项读取列表' list=JsonEvalString BGNL data=action+ 
    ;

while_s
    :   '前置条件循环' '：' '当' condition=expression '时' BGNL data=action+ 
    ;

dowhile_s
    :   '后置条件循环' '：' BGNL data=action+ '当' condition=expression '时' 
    ;

break_s
    :   '跳出循环或公共事件' '层数' n=Int 
    ;

continue_s
    :   '提前结束循环或跳出公共事件' '层数' n=Int 
    ;

wait_s
    :   '等待用户操作并获得按键或点击信息' '仅检测子块' forceChild=Bool '超时毫秒数' timeout=Int BGNL data=waitContext* 
    ;

waitContext
    :   waitContext_1
    |   waitContext_2
    |   waitContext_3
    |   waitContext_4
    |   waitContext_empty
    ;

waitContext_1
    :   '按键的场合：' '键值（右键查表）' keycode=EvalString '不进行剩余判定' break1=Bool BGNL action=action+ 
    ;

waitContext_2
    :   '点击的场合：' '像素x范围' px1=PosString '~' px2=PosString '; y范围' py1=PosString '~' py2=PosString '不进行剩余判定' break1=Bool BGNL action=action+ 
    ;

waitContext_3
    :   '自定义条件的场合：' condition=expression '不进行剩余判定' break1=Bool BGNL action=action+ 
    ;

waitContext_4
    :   '超时的场合：' '不进行剩余判定' break1=Bool BGNL action=action+ 
    ;

waitContext_empty : ' '
    ;

waitAsync_s
    :   '等待所有异步事件执行完毕' '不等待动画' excludeAnimates=Bool '等待音效' includeSounds=Bool 
    ;

stopAsync_s
    :   '立刻结束所有异步事件' BGNL 
    ;

callBook_s
    :   '呼出怪物手册' 
    ;

callSave_s
    :   '呼出存档页面' 
    ;

autoSave_s
    :   '自动存档' '读档到触发前' removeLast=Bool 
    ;

forbidSave_s
    :   '是否禁止存档' forbid=Bool 
    ;

callLoad_s
    :   '呼出读档页面' 
    ;

previewUI_s
    :   'ui绘制并预览' '（双击此项可进行预览）' BGNL action=action+ 
    ;

clearMap_s
    :   '清除画布' '起点像素' 'x' x=PosString? 'y' y=PosString? '宽' width=PosString? '高' height=PosString? 
    ;

setAttribute_s
    :   '设置画布属性' '字体' font=FontString? '填充样式' fillStyleS=ColorString? fillStyle=Colour '边框样式' strokeStyleS=ColorString? strokeStyle=Colour BGNL '线宽度' lineWidth=IntString? '不透明度' alpha=EvalString? '对齐' align=TextAlign_List '基准线' baseline=TextBaseline_List 'z值' z=IntString? 
    ;

setFilter_s
    :   '设置画布特效' '虚化' blur=Number '色相' hue=Int '灰度' grayscale=Number '反色' invert=Bool '阴影' shadow=Number 
    ;

fillText_s
    :   '绘制文本' 'x' x=PosString 'y' y=PosString '样式' styleS=ColorString? style=Colour '字体' font=FontString? '最大宽度' maxWidth=IntString? BGNL text=EvalString 
    ;

fillBoldText_s
    :   '绘制描边文本' 'x' x=PosString 'y' y=PosString '样式' styleS=ColorString? style=Colour '描边颜色' strokeStyleS=ColorString? strokeStyle=Colour '字体' font=FontString? BGNL text=EvalString 
    ;

drawTextContent_s
    :   '绘制多行文本' text=EvalString_Multi BGNL '起点像素' 'x' x=PosString 'y' y=PosString '最大宽度' maxWidth=IntString? '颜色' colorS=ColorString? color=Colour BGNL '对齐' align=TextAlign_List '字体大小' fontSize=IntString? '行距' lineHeight=IntString? '粗体' bold=Bool 
    ;

fillRect_s
    :   '绘制矩形' '起点像素' 'x' x=PosString 'y' y=PosString '宽' width=PosString '高' height=PosString '圆角半径' radius=PosString? '旋转度数' angle=PosString? '颜色' styleS=ColorString? style=Colour 
    ;

strokeRect_s
    :   '绘制矩形边框' '起点像素' 'x' x=PosString 'y' y=PosString '宽' width=PosString '高' height=PosString '圆角半径' radius=PosString? '旋转度数' angle=PosString? '颜色' styleS=ColorString? style=Colour '线宽' lineWidth=IntString? 
    ;

drawLine_s
    :   '绘制线段' '起点像素' 'x' x1=PosString 'y' y1=PosString '终点像素' 'x' x2=PosString 'y' y2=PosString '颜色' styleS=ColorString? style=Colour '线宽' lineWidth=IntString? 
    ;

drawArrow_s
    :   '绘制箭头' '起点像素' 'x' x1=PosString 'y' y1=PosString '终点像素' 'x' x2=PosString 'y' y2=PosString '颜色' styleS=ColorString? style=Colour '线宽' lineWidth=IntString? 
    ;

fillPolygon_s
    :   '绘制多边形' '顶点像素列表' 'x' xs=EvalString 'y' ys=EvalString '颜色' styleS=ColorString? style=Colour 
    ;

strokePolygon_s
    :   '绘制多边形边框' '顶点像素列表' 'x' xs=EvalString 'y' ys=EvalString '颜色' styleS=ColorString? style=Colour '线宽' lineWidth=IntString? 
    ;

fillEllipse_s
    :   '绘制椭圆' '中心' 'x' x=PosString 'y' y=PosString '长半径' a=PosString '短半径' b=PosString '旋转度数' angle=PosString? '颜色' styleS=ColorString? style=Colour 
    ;

strokeEllipse_s
    :   '绘制椭圆边框' '中心' 'x' x=PosString 'y' y=PosString '长半径' a=PosString '短半径' b=PosString '旋转度数' angle=PosString? '颜色' styleS=ColorString? style=Colour '线宽' lineWidth=IntString? 
    ;

fillArc_s
    :   '绘制扇形' '中心' 'x' x=PosString 'y' y=PosString '半径' r=PosString '起点角度' start=PosString '终点角度' end=PosString '颜色' styleS=ColorString? style=Colour 
    ;

strokeArc_s
    :   '绘制弧' '中心' 'x' x=PosString 'y' y=PosString '半径' r=PosString '起点角度' start=PosString '终点角度' end=PosString '颜色' styleS=ColorString? style=Colour '线宽' lineWidth=IntString? 
    ;

drawImage_s
    :   '绘制图片' image=EvalString '翻转' reverse=Reverse_List '起点像素' 'x' x=PosString 'y' y=PosString '宽' w=PosString? '高' h=PosString? '旋转度数' angle=PosString? 
    ;

drawImage_1_s
    :   '绘制图片' image=EvalString '翻转' reverse=Reverse_List '裁剪的起点像素' 'x' sx=PosString 'y' sy=PosString '宽' sw=PosString '高' sh=PosString BGNL
        '绘制的起点像素' 'x' x=PosString 'y' y=PosString '宽' w=PosString '高' h=PosString '旋转度数' angle=PosString? 
    ;

drawIcon_s
    :   '绘制图标' 'ID' id=IdString '帧' frame=Int '起点像素' 'x' x=PosString 'y' y=PosString '宽' width=PosString? '高' height=PosString? 
    ;

drawBackground_s
    :   '绘制背景图' background=EvalString bgColor=Colour '起点像素' 'x' x=PosString 'y' y=PosString '宽' width=PosString '高' height=PosString 
    ;

drawSelector_s
    :   '绘制闪烁光标' image=EvalString '编号' code=Int '起点像素' 'x' x=PosString 'y' y=PosString '宽' width=PosString '高' height=PosString 
    ;

drawSelector_1_s
    :   '清除闪烁光标' '编号' code=Int 
    ;

unknown_s
    :   '自定义事件' BGNL data=JsonEvalString 
    ;

function_s
    :   '自定义JS脚本' '不自动执行下一个事件' async=Bool BGNL function1=RawEvalString 
    ;

pass_s
    :   ' '
    ;

statExprSplit : '=== statement ^ === expression v ===' ;
//===blockly表达式===

expression
    :   a=expression op=Arithmetic_List b=expression #op2_e
    |   negate_e
    |   unaryOperation_e
    |   bool_e
    |   idFixedList_e
    |   idFlag_e
    |   idTemp_e
    |   idIdList_e
    |   idString_e
    |   enemyattr_e
    |   blockId_e
    |   blockNumber_e
    |   blockCls_e
    |   equip_e
    |   nextXY_e
    |   isReplaying_e
    |   hasVisitedFloor_e
    |   isShopVisited_e
    |   hasEquip_e
    |   canBattle_e
    |   damage_e
    |   damage_1_e
    |   rand_e
    |   evalString_e
    ;

negate_e
    :   '非' expression=expression
    ;

unaryOperation_e
    :   operator=UnaryOperator_List expression=expression
    ;

bool_e
    :   ':' value=Bool
    ;

idString_e
    :   id=IdString
    ;

idIdList_e
    :   type=Id_List ':' value=IdText
    ;

idFixedList_e
    :   id=FixedId_List
    ;

enemyattr_e
    :   '怪物' enemyId=IdString '的' property=EnemyId_List
    ;

blockId_e
    :   '图块ID:' x=PosString ',' y=PosString
    ;

blockNumber_e
    :   '图块数字:' x=PosString ',' y=PosString
    ;

blockCls_e
    :   '图块类别:' x=PosString ',' y=PosString
    ;

nextXY_e
    :   '前方' distance=NInt '格的' type=NextXY_List
    ;

isReplaying_e
    :   '录像播放中'
    ;

hasVisitedFloor_e
    :   '访问过楼层' floorId=IdString
    ;

isShopVisited_e
    :   '开启过商店' shopId=IdString
    ;

hasEquip_e
    :   '当前正在装备' equipId=IdString
    ;

canBattle_e
    :   '当前能否战斗' enemyId=IdString
    ;

damage_e
    :   '战斗伤害' '怪物ID' enemyId=IdString
    ;

damage_1_e
    :   '战斗伤害' '点坐标' 'x' x=PosString 'y' y=PosString
    ;

rand_e
    :   '随机数 [0, ' max=Int ')'
    ;

equip_e
    :   '第' slot=Int '格装备孔'
    ;

idFlag_e
    :   '独立开关' letter=Letter_List
    ;

idTemp_e
    :   '临时变量' letter=Letter_List
    ;

evalString_e
    :   value=EvalString_Multi
    ;

//===============lexer===============

IdText
    :   'sdeirughvuiyasdeb'+ //为了被识别为复杂词法规则
    ;

RawEvalString
    :   'sdeirughvuiyasdbe'+ //为了被识别为复杂词法规则
    ;

JsonEvalString
    :   'sdeirughvuiyasdbe'+ //为了被识别为复杂词法规则
    ;  

PosString
    :   'sdeirughvuiyasbde'+ //为了被识别为复杂词法规则
    ;

IntString
    :   'sdeirughvuiyasbde'+ //为了被识别为复杂词法规则
    ;

ColorString
    :   'sdeirughvuiyasbde'+ //为了被识别为复杂词法规则
    ;

FontString
    :   'sdeirughvuiyasbde'+ //为了被识别为复杂词法规则
    ;

Floor_List
    :   '楼层ID'|'前一楼'|'后一楼'|'当前楼'
    /*Floor_List ['floorId',':before',':next',':now']*/;

Stair_List
    :   '坐标'|'上楼梯'|'下楼梯'|'保持不变'|'中心对称点'|'x对称点'|'y对称点'|'楼传落点'
    /*Stair_List ['loc','upFloor','downFloor',':now',':symmetry',':symmetry_x',':symmetry_y','flyPoint']*/;

SetTextPosition_List
    :   '不改变'|'距离顶部'|'居中'|'距离底部'
    /*SetTextPosition_List ['null','up','center','down']*/;

TextAlign_List
    :   '不改变'|'左对齐'|'左右居中'|'右对齐'
    /*TextAlign_List ['null','left','center','right']*/;

TextBaseline_List
    :   '不改变'|'顶部'|'悬挂'|'居中'|'标准值'|'ideographic'|'底部'
    /*TextBaseline_List ['null','top','hanging','middle','alphabetic','ideographic','bottom']*/;

Reverse_List
    :   '不改变'|'左右翻转'|'上下翻转'|'中心翻转'
    /*Reverse_List ['null',':x',':y',':o']*/;

ShopUse_List
    :   '金币' | '经验'
    /*ShopUse_List ['money','exp']*/;

Arithmetic_List
    :   '加'|'减'|'乘'|'除'|'取余'|'乘方'|'等于'|'不等于'|'大于'|'小于'|'大于等于'|'小于等于'|'且'|'或'|'异或'|'取较大'|'取较小'|'弱相等'|'弱不相等'|'开始于'|'结束于'|'包含'
    /*Arithmetic_List ['+','-','*','/','%','**','===','!==','>','<','>=','<=','&&','||','^','max','min','==','!=','startsWith','endsWith','includes']*/;

AssignOperator_List
    :   '设为'|'增加'|'减少'|'乘以'|'除以'|'乘方'|'除以并取商'|'除以并取余'|'设为不小于'|'设为不大于'
    /*AssignOperator_List ['=','+=','-=','*=','/=','**=','//=','%=','max=','min=']*/;  

UnaryOperator_List
    :   '向下取整'|'向上取整'|'四舍五入'|'整数截断'|'绝对值'|'开方'|'变量类型'
    /*UnaryOperator_List ['Math.floor', 'Math.ceil', 'Math.round', 'Math.trunc', 'Math.abs', 'Math.sqrt', 'typeof']*/;

Weather_List
    :   '无'|'雨'|'雪'|'晴'|'雾'|'云'
    /*Weather_List ['null','rain','snow','sun','fog','cloud']*/;

B_0_List
    :   '不改变'|'不可通行'|'可以通行'
    /*B_0_List ['null','true','false']*/;

B_1_List
    :   '不改变'|'设为粗体'|'取消粗体'
    /*B_1_List ['null','true','false']*/;

Bg_Fg_List
    :   '背景层'|'前景层'
    /*Bg_Fg_List ['bg','fg']*/;

Bg_Fg2_List
    :   '背景层'|'前景层'|'自适配'
    /*Bg_Fg2_List ['bg','fg','auto']*/;

IgnoreChangeFloor_List
    :   '全局默认值' | '可穿透' | '不可穿透'
    /*IgnoreChangeFloor_List ['null','true','false']*/;

Event_List
    :   '普通事件'|'战前事件'|'战后事件'|'道具后事件'|'开门后事件'
    /*Event_List ['null','beforeBattle','afterBattle','afterGetItem','afterOpenDoor']*/;

Floor_Meta_List
    :   '楼层中文名'|'状态栏名称'|'能否楼传飞到'|'能否楼传飞出'|'能否打开快捷商店'|'是否不可浏览地图'|'是否不可瞬间移动'|'默认地面ID'|'宝石血瓶效果'|'上楼点坐标'|'下楼点坐标'|'楼传落点坐标'|'背景音乐'|'画面色调'|'天气和强度'|'是否地下层'
    /*Floor_Meta_List ['title','name','canFlyTo', 'canFlyFrom', 'canUseQuickShop', 'cannotViewMap', 'cannotMoveDirectly', 'defaultGround', 'ratio', 'upFloor', 'downFloor', 'flyPoint', 'bgm', 'color', 'weather', 'underGround']*/;

Global_Attribute_List
    :   '全局字体'|'横屏左侧状态栏背景'|'竖屏上方状态栏背景'|'竖屏下方道具栏背景'|'边框颜色'|'状态栏文字色'|'选中框颜色'|'楼层转换样式'|'装备列表'
    /*Global_Attribute_List ['font','statusLeftBackground','statusTopBackground', 'toolsBackground', 'borderColor', 'statusBarColor', 'selectColor', 'floorChangingStyle', 'equipName']*/;

Global_Value_List
    :   '血网伤害'|'中毒伤害'|'衰弱效果'|'红宝石效果'|'蓝宝石效果'|'绿宝石效果'|'红血瓶效果'|'蓝血瓶效果'|'黄血瓶效果'|'绿血瓶效果'|'破甲比例'|'反击比例'|'净化比例'|'仇恨增加值'|'图块每帧时间'|'上下楼时间'
    /*Global_Value_List ['lavaDamage','poisonDamage','weakValue', 'redGem', 'blueGem', 'greenGem', 'redPotion', 'bluePotion', 'yellowPotion', 'greenPotion', 'breakArmor', 'counterAttack', 'purify', 'hatred', 'animateSpeed', 'floorChangeTime']*/;


Global_Flag_List
    :   '显示当前楼层'|'显示勇士图标'|'显示当前等级'|'启用生命上限'|'显示生命值'|'显示魔力值'|'显示攻击力'|'显示防御力'|'显示护盾值'|'显示金币值'|'显示经验值'|'允许等级提升'|'升级扣除模式'|'显示钥匙数量'|'显示绿钥匙'|'显示破炸飞'|'显示毒衰咒'|'显示当前技能'|'横屏底部工具栏'|'楼梯边才能楼传'|'楼传平面塔模式'|'开启加点'|'开启负伤'|'夹击不超伤害值'|'二分计算临界'|'允许轻按'|'允许走到将死领域'|'允许瞬间移动'|'阻激夹域后禁用快捷商店'|'虚化前景层'
    /*Global_Flag_List ['s:enableFloor','s:enableName','s:enableLv', 's:enableHPMax', 's:enableHP', 's:enableMana', 's:enableAtk', 's:enableDef', 's:enableMDef', 's:enableMoney', 's:enableExp', 's:enableLevelUp', 's:levelUpLeftMode', 's:enableKeys', 's:enableGreenKey', 's:enablePZF', 's:enableDebuff', 's:enableSkill', 'extendToolbar', 'flyNearStair', 'flyRecordPosition', 'enableAddPoint', 'enableNegativeDamage', 'betweenAttackMax', 'useLoop', 'enableGentleClick', 'canGoDeadZone', 'enableMoveDirectly', 'disableShopOnDamage', 'blurFg']*/;

NextXY_List
    :   '横坐标'|'纵坐标'
    /*NextXY_List ['nextX','nextY']*/;

EquipValueType_List
    :   '数值项'|'百分比项'
    /*EquipValueType_List ['value','percentage']*/;

Vibrate_List
    :   '左右'|'上下'|'左上-右下'|'左下-右上'|'随机'
    /*Vibrate_List ['horizontal','vertical','diagonal1','diagonal2','random']*/;

Colour
    :   'sdeirughvuiyasdeb'+ //为了被识别为复杂词法规则
    ;

Angle
    :   'sdeirughvuiyasdeb'+ //为了被识别为复杂词法规则
    ;

Bool:   'TRUE' 
    |   'FALSE'
    ;

Int :   '0' | [1-9][0-9]* ; // no leading zeros

NInt : '0' | '-'? [1-9][0-9]* ;

Letter_List
    :  'A'|'B'|'C'|'D'|'E'|'F'|'G'|'H'|'I'|'J'|'K'|'L'|'M'|'N'|'O'|'P'|'Q'|'R'|'S'|'T'|'U'|'V'|'W'|'X'|'Y'|'Z'
    /*Letter_List ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']*/;


Number
    :   '-'? Int '.' Int EXP?   // 1.35, 1.35E-9, 0.3, -4.5
    |   '-'? Int EXP            // 1e10 -3e4
    |   '-'? Int                // -3, 45
    ;
fragment EXP : [Ee] [+\-]? Int ; // \- since - means "range" inside [...]

Direction_List
    :   '上'|'下'|'左'|'右'
    /*Direction_List ['up','down','left','right']*/;

DirectionEx_List
    :   '不变'|'朝上'|'朝下'|'朝左'|'朝右'|'左转'|'右转'|'背对'|'角色同向'|'角色反向'
    /*DirectionEx_List ['null','up','down','left','right',':left',':right',':back',':hero',':backhero']*/;

StepString
    :   (Direction_List Int?)+
    ;

IdString
    :   [0-9a-zA-Z_][0-9a-zA-Z_:]*
    ;

FixedId_List
    :   '生命'|'生命上限'|'攻击'|'防御'|'护盾'|'黄钥匙'|'蓝钥匙'|'红钥匙'|'金币'|'经验'|'魔力'|'魔力上限'|'当前横坐标'|'当前纵坐标'|'当前朝向'|'攻击增益'|'防御增益'|'护盾增益'
    /*FixedId_List ['status:hp','status:hpmax','status:atk','status:def','status:mdef','item:yellowKey','item:blueKey','item:redKey','status:money','status:exp','status:mana','status:manamax','status:x','status:y','status:direction','buff:atk','buff:def','buff:mdef']*/;

Id_List
    :   '变量' | '状态' | '物品' | '增益' | '独立开关' | '临时变量' |'全局存储'
    /*Id_List ['flag','status','item', 'buff', 'switch', 'temp', 'global']*/;

EnemyId_List
    :   '生命'|'攻击'|'防御'|'金币'|'经验'|'加点'|'特殊属性'|'名称'|'映射名'|'属性值'|'退化扣攻'|'退化扣防'|'不可炸'|'九宫格领域'|'领域范围'|'连击数'|'吸血到自身'|'固伤值'
    /*EnemyId_List ['hp','atk','def','money','exp','point','special','name','displayInBook','value','atkValue','defValue','notBomb','zoneSquare','range','n','add','damage']*/;

EnemyPoint_List
    :   '生命'|'攻击'|'防御'|'金币'|'经验'|'加点'|'名称'
    /*EnemyPoint_List ['hp','atk','def','money','exp','point','name']*/;

Equip_List
    :   '生命'|'生命上限'|'攻击'|'防御'|'护盾'|'魔力'|'魔力上限'
    /*Equip_List ['hp','hpmax','atk','def','mdef','mana','manamax']*/;

Key_List
    :   '黄钥匙'|'蓝钥匙'|'红钥匙'|'绿钥匙'|'铁门钥匙'
    /*Key_List ['yellowKey','blueKey','redKey','greenKey','steelKey']*/;

Move_List
    :   '上'|'下'|'左'|'右'|'前'|'后'|'左上'|'左下'|'右上'|'右下'|'设置速度'
    /*Move_List ['up','down','left','right','forward','backward','leftup','leftdown','rightup','rightdown','speed']*/;

MoveMode_List
    :   '匀速移动'|'缓入快出'|'快入缓出'|'缓入缓出'|'随机'
    /*MoveMode_List ['', 'easeIn', 'easeOut', 'easeInOut', 'random']*/;

NameMap_List
    :   '确定'|'取消'|'操作失败'|'光标移动'|'打开界面'|'读档'|'存档'|'获得道具'|'回血'|'宝石'|'炸弹'|'飞行器'|'开关门'|'上下楼'|'跳跃'|'破墙镐'|'破冰镐'|'阻激夹域'|'穿脱装备'|'商店'
    /*NameMap_List ['确定','取消','操作失败','光标移动','打开界面','读档','存档','获得道具','回血','宝石','炸弹','飞行器','开关门','上下楼','跳跃','破墙镐','破冰镐','阻激夹域','穿脱装备','商店']*/;

//转blockly后不保留需要加"
EvalString
    :   Equote_double (ESC_double | ~["\\])* Equote_double
    ;

EvalString_Multi
    :   Equote_double (ESC_double | ~["\\])* Equote_double
    ;

fragment ESC_double :   '\\' (["\\/bfnrt] | UNICODE) ;
fragment UNICODE : 'u' HEX HEX HEX HEX ;
fragment HEX : [0-9a-fA-F] ;

BGNL
    :   'BGNLaergayergfuybgv'
    ;

MeaningfulSplit : '=== meaningful ^ ===' ;

fragment Equote_double : '"' ;

WhiteSpace
    :   [ \t]+ -> skip
    ;

BlockComment
    :   '/*' .*? '*/' -> skip
    ;

LineComment
    :   '//' ~[\r\n]* -> skip
    ;

/* Call_BeforeType
//this.evisitor.recieveOrder='ORDER_NONE';
this.evisitor.valueColor=330;
this.evisitor.statementColor=70;
this.evisitor.entryColor=250;

this.evisitor.idstring_eColor=310;
this.evisitor.subColor=250;
this.evisitor.dataColor=130;
this.evisitor.eventColor=220;
this.evisitor.soundColor=20;
this.evisitor.commentColor=285;
this.evisitor.mapColor=175;
this.evisitor.uiColor=359;
this.evisitor.imageColor=45;
*/

/* Call_BeforeBlock
delete(this.block('negate_e').inputsInline);
this.block('idIdList_e').output='idString_e';
this.block('idFixedList_e').output='idString_e';
this.block('idFlag_e').output='idString_e';
this.block('idTemp_e').output='idString_e';
*/



