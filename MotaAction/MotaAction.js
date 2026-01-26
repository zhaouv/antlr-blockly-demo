// Generated from MotaAction.g4 by antlr-blockly
// 语句集合和表达式集合
MotaActionBlocks = {
    "shoplist": [
        "shopsub",
        "shopitem",
        "shopcommonevent",
        "emptyshop"
    ],
    "levelChooseList": [
        "levelChooseChoice",
        "levelChooseEmpty"
    ],
    "floorPartitionList": [
        "floorPartitionItem",
        "floorPartitionEmpty"
    ],
    "equipList": [
        "equipKnown",
        "equipUnknown",
        "equipEmpty"
    ],
    "floorImageList": [
        "floorOneImage",
        "floorEmptyImage"
    ],
    "doorKeyList": [
        "doorKeyKnown",
        "doorKeyUnknown",
        "doorKeyEmpty"
    ],
    "nameMapList": [
        "nameMapBgm",
        "nameMapSoundKnown",
        "nameMapSoundUnknown",
        "nameMapImage",
        "nameMapAnimate",
        "nameMapUnknown",
        "nameMapEmpty"
    ],
    "splitImagesList": [
        "splitImagesOne",
        "splitImagesEmpty"
    ],
    "action": [
        "text_0_s",
        "text_1_s",
        "text_2_s",
        "moveTextBox_s",
        "clearTextBox_s",
        "comment_s",
        "autoText_s",
        "scrollText_s",
        "setText_s",
        "tip_s",
        "setValue_s",
        "setEnemy_s",
        "setEnemyOnPoint_s",
        "resetEnemyOnPoint_s",
        "moveEnemyOnPoint_s",
        "moveEnemyOnPoint_1_s",
        "setEquip_s",
        "setFloor_s",
        "setGlobalAttribute_s",
        "setGlobalValue_s",
        "setGlobalFlag_s",
        "setNameMap_s",
        "show_s",
        "hide_s",
        "setBlockOpacity_s",
        "setBlockFilter_s",
        "trigger_s",
        "insert_1_s",
        "insert_2_s",
        "exit_s",
        "setBlock_s",
        "turnBlock_s",
        "showFloorImg_s",
        "hideFloorImg_s",
        "showBgFgMap_s",
        "hideBgFgMap_s",
        "setBgFgBlock_s",
        "setHeroIcon_s",
        "update_s",
        "showStatusBar_s",
        "hideStatusBar_s",
        "setHeroOpacity_s",
        "sleep_s",
        "wait_s",
        "waitAsync_s",
        "stopAsync_s",
        "battle_s",
        "battle_1_s",
        "openDoor_s",
        "closeDoor_s",
        "changeFloor_s",
        "changePos_s",
        "setViewport_s",
        "setViewport_1_s",
        "lockViewport_s",
        "useItem_s",
        "loadEquip_s",
        "unloadEquip_s",
        "openShop_s",
        "disableShop_s",
        "follow_s",
        "unfollow_s",
        "animate_s",
        "animate_1_s",
        "stopAnimate_s",
        "vibrate_s",
        "showImage_s",
        "showImage_1_s",
        "hideImage_s",
        "showTextImage_s",
        "moveImage_s",
        "rotateImage_s",
        "scaleImage_s",
        "showGif_s",
        "setCurtain_0_s",
        "setCurtain_1_s",
        "screenFlash_s",
        "setWeather_s",
        "move_s",
        "moveAction_s",
        "moveHero_s",
        "jump_s",
        "jump_1_s",
        "jumpHero_s",
        "jumpHero_1_s",
        "playBgm_s",
        "pauseBgm_s",
        "resumeBgm_s",
        "loadBgm_s",
        "freeBgm_s",
        "playSound_s",
        "playSound_1_s",
        "stopSound_s",
        "setVolume_s",
        "setBgmSpeed_s",
        "win_s",
        "lose_s",
        "restart_s",
        "if_s",
        "if_1_s",
        "switch_s",
        "for_s",
        "forEach_s",
        "while_s",
        "dowhile_s",
        "break_s",
        "continue_s",
        "input_s",
        "input2_s",
        "choices_s",
        "confirm_s",
        "callBook_s",
        "callSave_s",
        "autoSave_s",
        "forbidSave_s",
        "callLoad_s",
        "previewUI_s",
        "clearMap_s",
        "setAttribute_s",
        "setFilter_s",
        "fillText_s",
        "fillBoldText_s",
        "drawTextContent_s",
        "fillRect_s",
        "strokeRect_s",
        "drawLine_s",
        "drawArrow_s",
        "fillPolygon_s",
        "strokePolygon_s",
        "fillEllipse_s",
        "strokeEllipse_s",
        "fillArc_s",
        "strokeArc_s",
        "drawImage_s",
        "drawImage_1_s",
        "drawIcon_s",
        "drawBackground_s",
        "drawSelector_s",
        "drawSelector_1_s",
        "unknown_s",
        "function_s",
        "pass_s"
    ],
    "textDrawingList": [
        "textDrawing",
        "textDrawingEmpty"
    ],
    "waitContext": [
        "waitContext_1",
        "waitContext_2",
        "waitContext_3",
        "waitContext_4",
        "waitContext_empty"
    ],
    "expression": [
        "op2_e",
        "negate_e",
        "unaryOperation_e",
        "bool_e",
        "idFixedList_e",
        "idFlag_e",
        "idTemp_e",
        "idIdList_e",
        "idString_e",
        "enemyattr_e",
        "blockId_e",
        "blockNumber_e",
        "blockCls_e",
        "equip_e",
        "nextXY_e",
        "isReplaying_e",
        "hasVisitedFloor_e",
        "isShopVisited_e",
        "hasEquip_e",
        "canBattle_e",
        "damage_e",
        "damage_1_e",
        "rand_e",
        "evalString_e"
    ]
}


// 所有域的默认行为
Object.assign(MotaActionBlocks,{
    "IdText": {
        "type": "field_input",
        "text": "IdText_default"
    },
    "RawEvalString": {
        "type": "field_input",
        "text": "RawEvalString_default"
    },
    "JsonEvalString": {
        "type": "field_input",
        "text": "JsonEvalString_default"
    },
    "PosString": {
        "type": "field_input",
        "text": "PosString_default"
    },
    "IntString": {
        "type": "field_input",
        "text": "IntString_default"
    },
    "ColorString": {
        "type": "field_input",
        "text": "ColorString_default"
    },
    "FontString": {
        "type": "field_input",
        "text": "FontString_default"
    },
    "Floor_List": {
        "type": "field_dropdown",
        "options": [
            ["楼层ID","floorId"],
            ["前一楼",":before"],
            ["后一楼",":next"],
            ["当前楼",":now"]
        ],
        "default": "floorId"
    },
    "Stair_List": {
        "type": "field_dropdown",
        "options": [
            ["坐标","loc"],
            ["上楼梯","upFloor"],
            ["下楼梯","downFloor"],
            ["保持不变",":now"],
            ["中心对称点",":symmetry"],
            ["x对称点",":symmetry_x"],
            ["y对称点",":symmetry_y"],
            ["楼传落点","flyPoint"]
        ],
        "default": "loc"
    },
    "SetTextPosition_List": {
        "type": "field_dropdown",
        "options": [
            ["不改变","null"],
            ["距离顶部","up"],
            ["居中","center"],
            ["距离底部","down"]
        ],
        "default": "null"
    },
    "TextAlign_List": {
        "type": "field_dropdown",
        "options": [
            ["不改变","null"],
            ["左对齐","left"],
            ["左右居中","center"],
            ["右对齐","right"]
        ],
        "default": "null"
    },
    "TextBaseline_List": {
        "type": "field_dropdown",
        "options": [
            ["不改变","null"],
            ["顶部","top"],
            ["悬挂","hanging"],
            ["居中","middle"],
            ["标准值","alphabetic"],
            ["ideographic","ideographic"],
            ["底部","bottom"]
        ],
        "default": "null"
    },
    "Reverse_List": {
        "type": "field_dropdown",
        "options": [
            ["不改变","null"],
            ["左右翻转",":x"],
            ["上下翻转",":y"],
            ["中心翻转",":o"]
        ],
        "default": "null"
    },
    "ShopUse_List": {
        "type": "field_dropdown",
        "options": [
            ["金币","money"],
            ["经验","exp"]
        ],
        "default": "money"
    },
    "Arithmetic_List": {
        "type": "field_dropdown",
        "options": [
            ["加","+"],
            ["减","-"],
            ["乘","*"],
            ["除","/"],
            ["取余","%"],
            ["乘方","**"],
            ["等于","==="],
            ["不等于","!=="],
            ["大于",">"],
            ["小于","<"],
            ["大于等于",">="],
            ["小于等于","<="],
            ["且","&&"],
            ["或","||"],
            ["异或","^"],
            ["取较大","max"],
            ["取较小","min"],
            ["弱相等","=="],
            ["弱不相等","!="],
            ["开始于","startsWith"],
            ["结束于","endsWith"],
            ["包含","includes"]
        ],
        "default": "+"
    },
    "AssignOperator_List": {
        "type": "field_dropdown",
        "options": [
            ["设为","="],
            ["增加","+="],
            ["减少","-="],
            ["乘以","*="],
            ["除以","/="],
            ["乘方","**="],
            ["除以并取商","//="],
            ["除以并取余","%="],
            ["设为不小于","max="],
            ["设为不大于","min="]
        ],
        "default": "="
    },
    "UnaryOperator_List": {
        "type": "field_dropdown",
        "options": [
            ["向下取整","Math.floor"],
            ["向上取整","Math.ceil"],
            ["四舍五入","Math.round"],
            ["整数截断","Math.trunc"],
            ["绝对值","Math.abs"],
            ["开方","Math.sqrt"],
            ["变量类型","typeof"]
        ],
        "default": "Math.floor"
    },
    "Weather_List": {
        "type": "field_dropdown",
        "options": [
            ["无","null"],
            ["雨","rain"],
            ["雪","snow"],
            ["晴","sun"],
            ["雾","fog"],
            ["云","cloud"]
        ],
        "default": "null"
    },
    "B_0_List": {
        "type": "field_dropdown",
        "options": [
            ["不改变","null"],
            ["不可通行","true"],
            ["可以通行","false"]
        ],
        "default": "null"
    },
    "B_1_List": {
        "type": "field_dropdown",
        "options": [
            ["不改变","null"],
            ["设为粗体","true"],
            ["取消粗体","false"]
        ],
        "default": "null"
    },
    "Bg_Fg_List": {
        "type": "field_dropdown",
        "options": [
            ["背景层","bg"],
            ["前景层","fg"]
        ],
        "default": "bg"
    },
    "Bg_Fg2_List": {
        "type": "field_dropdown",
        "options": [
            ["背景层","bg"],
            ["前景层","fg"],
            ["自适配","auto"]
        ],
        "default": "bg"
    },
    "IgnoreChangeFloor_List": {
        "type": "field_dropdown",
        "options": [
            ["全局默认值","null"],
            ["可穿透","true"],
            ["不可穿透","false"]
        ],
        "default": "null"
    },
    "Event_List": {
        "type": "field_dropdown",
        "options": [
            ["普通事件","null"],
            ["战前事件","beforeBattle"],
            ["战后事件","afterBattle"],
            ["道具后事件","afterGetItem"],
            ["开门后事件","afterOpenDoor"]
        ],
        "default": "null"
    },
    "Floor_Meta_List": {
        "type": "field_dropdown",
        "options": [
            ["楼层中文名","title"],
            ["状态栏名称","name"],
            ["能否楼传飞到","canFlyTo"],
            ["能否楼传飞出","canFlyFrom"],
            ["能否打开快捷商店","canUseQuickShop"],
            ["是否不可浏览地图","cannotViewMap"],
            ["是否不可瞬间移动","cannotMoveDirectly"],
            ["默认地面ID","defaultGround"],
            ["宝石血瓶效果","ratio"],
            ["上楼点坐标","upFloor"],
            ["下楼点坐标","downFloor"],
            ["楼传落点坐标","flyPoint"],
            ["背景音乐","bgm"],
            ["画面色调","color"],
            ["天气和强度","weather"],
            ["是否地下层","underGround"]
        ],
        "default": "title"
    },
    "Global_Attribute_List": {
        "type": "field_dropdown",
        "options": [
            ["全局字体","font"],
            ["横屏左侧状态栏背景","statusLeftBackground"],
            ["竖屏上方状态栏背景","statusTopBackground"],
            ["竖屏下方道具栏背景","toolsBackground"],
            ["边框颜色","borderColor"],
            ["状态栏文字色","statusBarColor"],
            ["选中框颜色","selectColor"],
            ["楼层转换样式","floorChangingStyle"],
            ["装备列表","equipName"]
        ],
        "default": "font"
    },
    "Global_Value_List": {
        "type": "field_dropdown",
        "options": [
            ["血网伤害","lavaDamage"],
            ["中毒伤害","poisonDamage"],
            ["衰弱效果","weakValue"],
            ["红宝石效果","redGem"],
            ["蓝宝石效果","blueGem"],
            ["绿宝石效果","greenGem"],
            ["红血瓶效果","redPotion"],
            ["蓝血瓶效果","bluePotion"],
            ["黄血瓶效果","yellowPotion"],
            ["绿血瓶效果","greenPotion"],
            ["破甲比例","breakArmor"],
            ["反击比例","counterAttack"],
            ["净化比例","purify"],
            ["仇恨增加值","hatred"],
            ["图块每帧时间","animateSpeed"],
            ["上下楼时间","floorChangeTime"]
        ],
        "default": "lavaDamage"
    },
    "Global_Flag_List": {
        "type": "field_dropdown",
        "options": [
            ["显示当前楼层","s:enableFloor"],
            ["显示勇士图标","s:enableName"],
            ["显示当前等级","s:enableLv"],
            ["启用生命上限","s:enableHPMax"],
            ["显示生命值","s:enableHP"],
            ["显示魔力值","s:enableMana"],
            ["显示攻击力","s:enableAtk"],
            ["显示防御力","s:enableDef"],
            ["显示护盾值","s:enableMDef"],
            ["显示金币值","s:enableMoney"],
            ["显示经验值","s:enableExp"],
            ["允许等级提升","s:enableLevelUp"],
            ["升级扣除模式","s:levelUpLeftMode"],
            ["显示钥匙数量","s:enableKeys"],
            ["显示绿钥匙","s:enableGreenKey"],
            ["显示破炸飞","s:enablePZF"],
            ["显示毒衰咒","s:enableDebuff"],
            ["显示当前技能","s:enableSkill"],
            ["横屏底部工具栏","extendToolbar"],
            ["楼梯边才能楼传","flyNearStair"],
            ["楼传平面塔模式","flyRecordPosition"],
            ["开启加点","enableAddPoint"],
            ["开启负伤","enableNegativeDamage"],
            ["夹击不超伤害值","betweenAttackMax"],
            ["二分计算临界","useLoop"],
            ["允许轻按","enableGentleClick"],
            ["允许走到将死领域","canGoDeadZone"],
            ["允许瞬间移动","enableMoveDirectly"],
            ["阻激夹域后禁用快捷商店","disableShopOnDamage"],
            ["虚化前景层","blurFg"]
        ],
        "default": "s:enableFloor"
    },
    "NextXY_List": {
        "type": "field_dropdown",
        "options": [
            ["横坐标","nextX"],
            ["纵坐标","nextY"]
        ],
        "default": "nextX"
    },
    "EquipValueType_List": {
        "type": "field_dropdown",
        "options": [
            ["数值项","value"],
            ["百分比项","percentage"]
        ],
        "default": "value"
    },
    "Vibrate_List": {
        "type": "field_dropdown",
        "options": [
            ["左右","horizontal"],
            ["上下","vertical"],
            ["左上-右下","diagonal1"],
            ["左下-右上","diagonal2"],
            ["随机","random"]
        ],
        "default": "horizontal"
    },
    "Colour": {
        "type": "field_colour",
        "colour": "#ff0000"
    },
    "Angle": {
        "type": "field_angle",
        "angle": 90
    },
    "Bool": {
        "type": "field_checkbox",
        "checked": true
    },
    "Int": {
        "type": "field_number",
        "value": 0,
        "min": 0,
        "precision": 1
    },
    "NInt": {
        "type": "field_input",
        "text": "NInt_default"
    },
    "Letter_List": {
        "type": "field_dropdown",
        "options": [
            ["A","A"],
            ["B","B"],
            ["C","C"],
            ["D","D"],
            ["E","E"],
            ["F","F"],
            ["G","G"],
            ["H","H"],
            ["I","I"],
            ["J","J"],
            ["K","K"],
            ["L","L"],
            ["M","M"],
            ["N","N"],
            ["O","O"],
            ["P","P"],
            ["Q","Q"],
            ["R","R"],
            ["S","S"],
            ["T","T"],
            ["U","U"],
            ["V","V"],
            ["W","W"],
            ["X","X"],
            ["Y","Y"],
            ["Z","Z"]
        ],
        "default": "A"
    },
    "Number": {
        "type": "field_number",
        "value": 0
    },
    "Direction_List": {
        "type": "field_dropdown",
        "options": [
            ["上","up"],
            ["下","down"],
            ["左","left"],
            ["右","right"]
        ],
        "default": "up"
    },
    "DirectionEx_List": {
        "type": "field_dropdown",
        "options": [
            ["不变","null"],
            ["朝上","up"],
            ["朝下","down"],
            ["朝左","left"],
            ["朝右","right"],
            ["左转",":left"],
            ["右转",":right"],
            ["背对",":back"],
            ["角色同向",":hero"],
            ["角色反向",":backhero"]
        ],
        "default": "null"
    },
    "StepString": {
        "type": "field_input",
        "text": "StepString_default"
    },
    "IdString": {
        "type": "field_input",
        "text": "IdString_default"
    },
    "FixedId_List": {
        "type": "field_dropdown",
        "options": [
            ["生命","status:hp"],
            ["生命上限","status:hpmax"],
            ["攻击","status:atk"],
            ["防御","status:def"],
            ["护盾","status:mdef"],
            ["黄钥匙","item:yellowKey"],
            ["蓝钥匙","item:blueKey"],
            ["红钥匙","item:redKey"],
            ["金币","status:money"],
            ["经验","status:exp"],
            ["魔力","status:mana"],
            ["魔力上限","status:manamax"],
            ["当前横坐标","status:x"],
            ["当前纵坐标","status:y"],
            ["当前朝向","status:direction"],
            ["攻击增益","buff:atk"],
            ["防御增益","buff:def"],
            ["护盾增益","buff:mdef"]
        ],
        "default": "status:hp"
    },
    "Id_List": {
        "type": "field_dropdown",
        "options": [
            ["变量","flag"],
            ["状态","status"],
            ["物品","item"],
            ["增益","buff"],
            ["独立开关","switch"],
            ["临时变量","temp"],
            ["全局存储","global"]
        ],
        "default": "flag"
    },
    "EnemyId_List": {
        "type": "field_dropdown",
        "options": [
            ["生命","hp"],
            ["攻击","atk"],
            ["防御","def"],
            ["金币","money"],
            ["经验","exp"],
            ["加点","point"],
            ["特殊属性","special"],
            ["名称","name"],
            ["映射名","displayInBook"],
            ["属性值","value"],
            ["退化扣攻","atkValue"],
            ["退化扣防","defValue"],
            ["不可炸","notBomb"],
            ["九宫格领域","zoneSquare"],
            ["领域范围","range"],
            ["连击数","n"],
            ["吸血到自身","add"],
            ["固伤值","damage"]
        ],
        "default": "hp"
    },
    "EnemyPoint_List": {
        "type": "field_dropdown",
        "options": [
            ["生命","hp"],
            ["攻击","atk"],
            ["防御","def"],
            ["金币","money"],
            ["经验","exp"],
            ["加点","point"],
            ["名称","name"]
        ],
        "default": "hp"
    },
    "Equip_List": {
        "type": "field_dropdown",
        "options": [
            ["生命","hp"],
            ["生命上限","hpmax"],
            ["攻击","atk"],
            ["防御","def"],
            ["护盾","mdef"],
            ["魔力","mana"],
            ["魔力上限","manamax"]
        ],
        "default": "hp"
    },
    "Key_List": {
        "type": "field_dropdown",
        "options": [
            ["黄钥匙","yellowKey"],
            ["蓝钥匙","blueKey"],
            ["红钥匙","redKey"],
            ["绿钥匙","greenKey"],
            ["铁门钥匙","steelKey"]
        ],
        "default": "yellowKey"
    },
    "Move_List": {
        "type": "field_dropdown",
        "options": [
            ["上","up"],
            ["下","down"],
            ["左","left"],
            ["右","right"],
            ["前","forward"],
            ["后","backward"],
            ["左上","leftup"],
            ["左下","leftdown"],
            ["右上","rightup"],
            ["右下","rightdown"],
            ["设置速度","speed"]
        ],
        "default": "up"
    },
    "MoveMode_List": {
        "type": "field_dropdown",
        "options": [
            ["匀速移动",""],
            ["缓入快出","easeIn"],
            ["快入缓出","easeOut"],
            ["缓入缓出","easeInOut"],
            ["随机","random"]
        ],
        "default": ""
    },
    "NameMap_List": {
        "type": "field_dropdown",
        "options": [
            ["确定","确定"],
            ["取消","取消"],
            ["操作失败","操作失败"],
            ["光标移动","光标移动"],
            ["打开界面","打开界面"],
            ["读档","读档"],
            ["存档","存档"],
            ["获得道具","获得道具"],
            ["回血","回血"],
            ["宝石","宝石"],
            ["炸弹","炸弹"],
            ["飞行器","飞行器"],
            ["开关门","开关门"],
            ["上下楼","上下楼"],
            ["跳跃","跳跃"],
            ["破墙镐","破墙镐"],
            ["破冰镐","破冰镐"],
            ["阻激夹域","阻激夹域"],
            ["穿脱装备","穿脱装备"],
            ["商店","商店"]
        ],
        "default": "确定"
    },
    "EvalString": {
        "type": "field_input",
        "text": "EvalString_default"
    },
    "EvalString_Multi": {
        "type": "field_multilinetext",
        "text": "EvalString_Multi_default"
    },
    "BGNL": {
        "type": "input_dummy"
    }
});




    if(globalThis?.blocklydynamiclist?.names){
        for (var [kk,vv] of globalThis.blocklydynamiclist.names) {
            MotaActionBlocks[kk].options=vv.map(v=>typeof v===typeof ''?[v,v]:v)
            MotaActionBlocks[kk].default=MotaActionBlocks[kk].options[0][1]
        }
    }
    // 所有方块的实际内容
Object.assign(MotaActionBlocks,{
    "common_m": {
        "type": "statement",
        "json": {
            "type": "common_m",
            "message0": "编辑事件 %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "action",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 250
        },
        "generFunc": function(block) {
            var action = Blockly.JavaScript.statementToCode(block, 'action');
            if (action==='') {
                throw new OmitedError(block,'action','common_m');
            }
            var code = MotaActionFunctions.defaultCode('common_m',eval('['+MotaActionBlocks['common_m'].args.join(',')+']'),block);
            return code;
        },
        "args": ["action"],
        "argsType": ["statement"],
        "argsGrammarName": ["action"],
        "omitted": [false],
        "multi": [true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('common_m',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('common_m',inputs,next,isShadow,comment,attribute);
        }
    },
    "event_m": {
        "type": "statement",
        "json": {
            "type": "event_m",
            "message0": "事件 %1 覆盖触发器 %2 启用 %3 通行状态 %4 显伤 %5 不透明度 %6 %7 该点特效 虚化 %8 色相 %9 灰度 %10 反色 %11 阴影 %12 %13 %14",
            "args0": [
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "trigger",
                    "checked": true
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "enable"
                }),
                Object.assign({},MotaActionBlocks.B_0_List,{
                    "name": "noPass",
                    "default": "null"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "displayDamage"
                }),
                Object.assign({},MotaActionBlocks.Number,{
                    "name": "opacity",
                    "value": 1
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.Number,{
                    "name": "blur"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "hue"
                }),
                Object.assign({},MotaActionBlocks.Number,{
                    "name": "grayscale"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "invert",
                    "checked": false
                }),
                Object.assign({},MotaActionBlocks.Number,{
                    "name": "shadow"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "action",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "编辑魔塔的事件",
            "helpUrl": "/_docs/#/instruction",
            "colour": 250
        },
        "generFunc": function(block) {
            var trigger = block.getFieldValue('trigger') === 'TRUE';
            trigger = MotaActionFunctions.pre('Bool')(trigger,block,'trigger','event_m');
            var enable = block.getFieldValue('enable') === 'TRUE';
            enable = MotaActionFunctions.pre('Bool')(enable,block,'enable','event_m');
            var noPass = block.getFieldValue('noPass');
            noPass = MotaActionFunctions.pre('B_0_List')(noPass,block,'noPass','event_m');
            var displayDamage = block.getFieldValue('displayDamage') === 'TRUE';
            displayDamage = MotaActionFunctions.pre('Bool')(displayDamage,block,'displayDamage','event_m');
            var opacity = block.getFieldValue('opacity');
            opacity = MotaActionFunctions.pre('Number')(opacity,block,'opacity','event_m');
            var blur = block.getFieldValue('blur');
            blur = MotaActionFunctions.pre('Number')(blur,block,'blur','event_m');
            var hue = block.getFieldValue('hue');
            hue = MotaActionFunctions.pre('Int')(hue,block,'hue','event_m');
            var grayscale = block.getFieldValue('grayscale');
            grayscale = MotaActionFunctions.pre('Number')(grayscale,block,'grayscale','event_m');
            var invert = block.getFieldValue('invert') === 'TRUE';
            invert = MotaActionFunctions.pre('Bool')(invert,block,'invert','event_m');
            var shadow = block.getFieldValue('shadow');
            shadow = MotaActionFunctions.pre('Number')(shadow,block,'shadow','event_m');
            var action = Blockly.JavaScript.statementToCode(block, 'action');
            if (action==='') {
                throw new OmitedError(block,'action','event_m');
            }
            // default : [false,true,null,true,1,0,0,0,false,0,null]
            if (opacity < 0 || opacity > 1) throw '不透明度需要在0~1之间';
            if (blur < 0) throw '虚化不得小于0；0为完全没有虚化';
            if (hue < 0 || hue >= 360) throw '色相需要在0~359之间';
            if (grayscale < 0 || grayscale > 1) throw '灰度需要在0~1之间';
            if (shadow < 0) throw '阴影不得小于0；0为完全没有阴影';
            var code = MotaActionFunctions.defaultCode('event_m',eval('['+MotaActionBlocks['event_m'].args.join(',')+']'),block);
            return code;
        },
        "args": ["trigger","enable","noPass","displayDamage","opacity","blur","hue","grayscale","invert","shadow","action"],
        "argsType": ["field","field","field","field","field","field","field","field","field","field","statement"],
        "argsGrammarName": ["Bool","Bool","B_0_List","Bool","Number","Number","Int","Number","Bool","Number","action"],
        "omitted": [false,false,false,false,false,false,false,false,false,false,false],
        "multi": [false,false,false,false,false,false,false,false,false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('event_m',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('event_m',inputs,next,isShadow,comment,attribute);
        }
    },
    "autoEvent_m": {
        "type": "statement",
        "json": {
            "type": "autoEvent_m",
            "message0": "自动事件： 触发条件 %1 优先级 %2 %3 仅在本层检测 %4 事件流中延迟执行 %5 允许多次执行 %6 %7 %8",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString_Multi,{
                    "name": "condition"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "priority"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "currentFloor"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "delayExecute"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "multiExecute"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "action",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 250
        },
        "generFunc": function(block) {
            var condition = block.getFieldValue('condition');
            if (condition==='') {
                throw new OmitedError(block,'condition','autoEvent_m');
            }
            condition = MotaActionFunctions.pre('EvalString_Multi')(condition,block,'condition','autoEvent_m');
            var priority = block.getFieldValue('priority');
            priority = MotaActionFunctions.pre('Int')(priority,block,'priority','autoEvent_m');
            var currentFloor = block.getFieldValue('currentFloor') === 'TRUE';
            currentFloor = MotaActionFunctions.pre('Bool')(currentFloor,block,'currentFloor','autoEvent_m');
            var delayExecute = block.getFieldValue('delayExecute') === 'TRUE';
            delayExecute = MotaActionFunctions.pre('Bool')(delayExecute,block,'delayExecute','autoEvent_m');
            var multiExecute = block.getFieldValue('multiExecute') === 'TRUE';
            multiExecute = MotaActionFunctions.pre('Bool')(multiExecute,block,'multiExecute','autoEvent_m');
            var action = Blockly.JavaScript.statementToCode(block, 'action');
            if (action==='') {
                throw new OmitedError(block,'action','autoEvent_m');
            }
            var code = MotaActionFunctions.defaultCode('autoEvent_m',eval('['+MotaActionBlocks['autoEvent_m'].args.join(',')+']'),block);
            return code;
        },
        "args": ["condition","priority","currentFloor","delayExecute","multiExecute","action"],
        "argsType": ["field","field","field","field","field","statement"],
        "argsGrammarName": ["EvalString_Multi","Int","Bool","Bool","Bool","action"],
        "omitted": [false,false,false,false,false,false],
        "multi": [false,false,false,false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('autoEvent_m',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('autoEvent_m',inputs,next,isShadow,comment,attribute);
        }
    },
    "level_m": {
        "type": "statement",
        "json": {
            "type": "level_m",
            "message0": "等级提升 %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "levelCase",
                    "check": "levelCase"
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 250
        },
        "generFunc": function(block) {
            var levelCase = Blockly.JavaScript.statementToCode(block, 'levelCase');
            if (levelCase==='') {
                throw new OmitedError(block,'levelCase','level_m');
            }
            var code = MotaActionFunctions.defaultCode('level_m',eval('['+MotaActionBlocks['level_m'].args.join(',')+']'),block);
            return code;
        },
        "args": ["levelCase"],
        "argsType": ["statement"],
        "argsGrammarName": ["levelCase"],
        "omitted": [false],
        "multi": [true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('level_m',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('level_m',inputs,next,isShadow,comment,attribute);
        }
    },
    "levelCase": {
        "type": "statement",
        "json": {
            "type": "levelCase",
            "message0": "需求 %1 称号 %2 是否扣除经验 %3 %4 %5",
            "args0": [
                {
                    "type": "input_value",
                    "name": "need",
                    "check": MotaActionBlocks.expression
                },
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "title"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "remove"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "action",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "levelCase",
            "nextStatement": "levelCase"
        },
        "generFunc": function(block) {
            var need = Blockly.JavaScript.valueToCode(block, 'need', 
              Blockly.JavaScript.ORDER_ATOMIC);
            if (need==='') {
                throw new OmitedError(block,'need','levelCase');
            }
            var title = block.getFieldValue('title');
            title = MotaActionFunctions.pre('EvalString')(title,block,'title','levelCase');
            var remove = block.getFieldValue('remove') === 'TRUE';
            remove = MotaActionFunctions.pre('Bool')(remove,block,'remove','levelCase');
            var action = Blockly.JavaScript.statementToCode(block, 'action');
            if (action==='') {
                throw new OmitedError(block,'action','levelCase');
            }
            var code = MotaActionFunctions.defaultCode('levelCase',eval('['+MotaActionBlocks['levelCase'].args.join(',')+']'),block);
            return code;
        },
        "args": ["need","title","remove","action"],
        "argsType": ["value","field","field","statement"],
        "argsGrammarName": ["expression","EvalString","Bool","action"],
        "omitted": [false,true,false,false],
        "multi": [false,false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('levelCase',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('levelCase',inputs,next,isShadow,comment,attribute);
        }
    },
    "shop_m": {
        "type": "statement",
        "json": {
            "type": "shop_m",
            "message0": "全局商店列表 %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "shoplist",
                    "check": MotaActionBlocks.shoplist
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 250
        },
        "generFunc": function(block) {
            var shoplist = Blockly.JavaScript.statementToCode(block, 'shoplist');
            if (shoplist==='') {
                throw new OmitedError(block,'shoplist','shop_m');
            }
            var code = MotaActionFunctions.defaultCode('shop_m',eval('['+MotaActionBlocks['shop_m'].args.join(',')+']'),block);
            return code;
        },
        "args": ["shoplist"],
        "argsType": ["statement"],
        "argsGrammarName": ["shoplist"],
        "omitted": [false],
        "multi": [true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('shop_m',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('shop_m',inputs,next,isShadow,comment,attribute);
        }
    },
    "emptyshop": {
        "type": "statement",
        "json": {
            "type": "emptyshop",
            "message0": " ",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "emptyshop",
            "nextStatement": MotaActionBlocks.shoplist
        },
        "generFunc": function(block) {
            var code = MotaActionFunctions.defaultCode('emptyshop',eval('['+MotaActionBlocks['emptyshop'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('emptyshop',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('emptyshop',inputs,next,isShadow,comment,attribute);
        }
    },
    "shopsub": {
        "type": "statement",
        "json": {
            "type": "shopsub",
            "message0": "商店 id %1 标题 %2 图像 %3 %4 文字 %5 %6 快捷名称 %7 未开启不显示 %8 不可预览 %9 %10 %11",
            "args0": [
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "id"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "title"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "icon"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.EvalString_Multi,{
                    "name": "text"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "textInList"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "mustEnable"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "disablePreview"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "choices",
                    "check": "shopChoices"
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "shopsub",
            "nextStatement": MotaActionBlocks.shoplist
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','shopsub');
            }
            id = MotaActionFunctions.pre('IdString')(id,block,'id','shopsub');
            var title = block.getFieldValue('title');
            title = MotaActionFunctions.pre('EvalString')(title,block,'title','shopsub');
            var icon = block.getFieldValue('icon');
            icon = MotaActionFunctions.pre('IdString')(icon,block,'icon','shopsub');
            var text = block.getFieldValue('text');
            text = MotaActionFunctions.pre('EvalString_Multi')(text,block,'text','shopsub');
            var textInList = block.getFieldValue('textInList');
            if (textInList==='') {
                throw new OmitedError(block,'textInList','shopsub');
            }
            textInList = MotaActionFunctions.pre('EvalString')(textInList,block,'textInList','shopsub');
            var mustEnable = block.getFieldValue('mustEnable') === 'TRUE';
            mustEnable = MotaActionFunctions.pre('Bool')(mustEnable,block,'mustEnable','shopsub');
            var disablePreview = block.getFieldValue('disablePreview') === 'TRUE';
            disablePreview = MotaActionFunctions.pre('Bool')(disablePreview,block,'disablePreview','shopsub');
            var choices = Blockly.JavaScript.statementToCode(block, 'choices');
            if (choices==='') {
                throw new OmitedError(block,'choices','shopsub');
            }
            var code = MotaActionFunctions.defaultCode('shopsub',eval('['+MotaActionBlocks['shopsub'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id","title","icon","text","textInList","mustEnable","disablePreview","choices"],
        "argsType": ["field","field","field","field","field","field","field","statement"],
        "argsGrammarName": ["IdString","EvalString","IdString","EvalString_Multi","EvalString","Bool","Bool","shopChoices"],
        "omitted": [false,true,true,true,false,false,false,false],
        "multi": [false,false,false,false,false,false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('shopsub',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('shopsub',inputs,next,isShadow,comment,attribute);
        }
    },
    "shopChoices": {
        "type": "statement",
        "json": {
            "type": "shopChoices",
            "message0": "商店选项 %1 使用条件 %2 %3 图标 %4 颜色 %5 %6 出现条件 %7 %8 %9",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "text"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "condition"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "icon"
                }),
                Object.assign({},MotaActionBlocks.ColorString,{
                    "name": "colorS"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "color"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "showCondition"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "action",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "shopChoices",
            "nextStatement": "shopChoices"
        },
        "generFunc": function(block) {
            var text = block.getFieldValue('text');
            if (text==='') {
                throw new OmitedError(block,'text','shopChoices');
            }
            text = MotaActionFunctions.pre('EvalString')(text,block,'text','shopChoices');
            var condition = block.getFieldValue('condition');
            if (condition==='') {
                throw new OmitedError(block,'condition','shopChoices');
            }
            condition = MotaActionFunctions.pre('EvalString')(condition,block,'condition','shopChoices');
            var icon = block.getFieldValue('icon');
            icon = MotaActionFunctions.pre('IdString')(icon,block,'icon','shopChoices');
            var colorS = block.getFieldValue('colorS');
            colorS = MotaActionFunctions.pre('ColorString')(colorS,block,'colorS','shopChoices');
            var color = block.getFieldValue('color');
            color = MotaActionFunctions.pre('Colour')(color,block,'color','shopChoices');
            var showCondition = block.getFieldValue('showCondition');
            showCondition = MotaActionFunctions.pre('EvalString')(showCondition,block,'showCondition','shopChoices');
            var action = Blockly.JavaScript.statementToCode(block, 'action');
            if (action==='') {
                throw new OmitedError(block,'action','shopChoices');
            }
            var code = MotaActionFunctions.defaultCode('shopChoices',eval('['+MotaActionBlocks['shopChoices'].args.join(',')+']'),block);
            return code;
        },
        "args": ["text","condition","icon","colorS","color","showCondition","action"],
        "argsType": ["field","field","field","field","field","field","statement"],
        "argsGrammarName": ["EvalString","EvalString","IdString","ColorString","Colour","EvalString","action"],
        "omitted": [false,false,true,true,false,true,false],
        "multi": [false,false,false,false,false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('shopChoices',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('shopChoices',inputs,next,isShadow,comment,attribute);
        }
    },
    "shopitem": {
        "type": "statement",
        "json": {
            "type": "shopitem",
            "message0": "道具商店 id %1 快捷名称 %2 使用 %3 未开启不显示 %4 %5 %6",
            "args0": [
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "id"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "textInList"
                }),
                Object.assign({},MotaActionBlocks.ShopUse_List,{
                    "name": "use"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "mustEnable"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "choices",
                    "check": "shopItemChoices"
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "shopitem",
            "nextStatement": MotaActionBlocks.shoplist
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','shopitem');
            }
            id = MotaActionFunctions.pre('IdString')(id,block,'id','shopitem');
            var textInList = block.getFieldValue('textInList');
            if (textInList==='') {
                throw new OmitedError(block,'textInList','shopitem');
            }
            textInList = MotaActionFunctions.pre('EvalString')(textInList,block,'textInList','shopitem');
            var use = block.getFieldValue('use');
            use = MotaActionFunctions.pre('ShopUse_List')(use,block,'use','shopitem');
            var mustEnable = block.getFieldValue('mustEnable') === 'TRUE';
            mustEnable = MotaActionFunctions.pre('Bool')(mustEnable,block,'mustEnable','shopitem');
            var choices = Blockly.JavaScript.statementToCode(block, 'choices');
            if (choices==='') {
                throw new OmitedError(block,'choices','shopitem');
            }
            var code = MotaActionFunctions.defaultCode('shopitem',eval('['+MotaActionBlocks['shopitem'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id","textInList","use","mustEnable","choices"],
        "argsType": ["field","field","field","field","statement"],
        "argsGrammarName": ["IdString","EvalString","ShopUse_List","Bool","shopItemChoices"],
        "omitted": [false,false,false,false,false],
        "multi": [false,false,false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('shopitem',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('shopitem',inputs,next,isShadow,comment,attribute);
        }
    },
    "shopItemChoices": {
        "type": "statement",
        "json": {
            "type": "shopItemChoices",
            "message0": "道具名 %1 存量 %2 买入价格 %3 卖出价格 %4 出现条件 %5",
            "args0": [
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "id"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "number"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "money"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "sell"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "condition"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "shopItemChoices",
            "nextStatement": "shopItemChoices"
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','shopItemChoices');
            }
            id = MotaActionFunctions.pre('IdString')(id,block,'id','shopItemChoices');
            var number = block.getFieldValue('number');
            number = MotaActionFunctions.pre('IntString')(number,block,'number','shopItemChoices');
            var money = block.getFieldValue('money');
            money = MotaActionFunctions.pre('EvalString')(money,block,'money','shopItemChoices');
            var sell = block.getFieldValue('sell');
            sell = MotaActionFunctions.pre('EvalString')(sell,block,'sell','shopItemChoices');
            var condition = block.getFieldValue('condition');
            condition = MotaActionFunctions.pre('EvalString')(condition,block,'condition','shopItemChoices');
            var code = MotaActionFunctions.defaultCode('shopItemChoices',eval('['+MotaActionBlocks['shopItemChoices'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id","number","money","sell","condition"],
        "argsType": ["field","field","field","field","field"],
        "argsGrammarName": ["IdString","IntString","EvalString","EvalString","EvalString"],
        "omitted": [false,true,true,true,true],
        "multi": [false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('shopItemChoices',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('shopItemChoices',inputs,next,isShadow,comment,attribute);
        }
    },
    "shopcommonevent": {
        "type": "statement",
        "json": {
            "type": "shopcommonevent",
            "message0": "公共事件商店 id %1 快捷名称 %2 未开启不显示 %3 %4 执行的公共事件名 %5 参数列表 %6",
            "args0": [
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "id"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "textInList"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "mustEnable"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "commonEvent"
                }),
                Object.assign({},MotaActionBlocks.JsonEvalString,{
                    "name": "args"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "shopcommonevent",
            "nextStatement": MotaActionBlocks.shoplist
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','shopcommonevent');
            }
            id = MotaActionFunctions.pre('IdString')(id,block,'id','shopcommonevent');
            var textInList = block.getFieldValue('textInList');
            if (textInList==='') {
                throw new OmitedError(block,'textInList','shopcommonevent');
            }
            textInList = MotaActionFunctions.pre('EvalString')(textInList,block,'textInList','shopcommonevent');
            var mustEnable = block.getFieldValue('mustEnable') === 'TRUE';
            mustEnable = MotaActionFunctions.pre('Bool')(mustEnable,block,'mustEnable','shopcommonevent');
            var commonEvent = block.getFieldValue('commonEvent');
            if (commonEvent==='') {
                throw new OmitedError(block,'commonEvent','shopcommonevent');
            }
            commonEvent = MotaActionFunctions.pre('EvalString')(commonEvent,block,'commonEvent','shopcommonevent');
            var args = block.getFieldValue('args');
            args = MotaActionFunctions.pre('JsonEvalString')(args,block,'args','shopcommonevent');
            var code = MotaActionFunctions.defaultCode('shopcommonevent',eval('['+MotaActionBlocks['shopcommonevent'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id","textInList","mustEnable","commonEvent","args"],
        "argsType": ["field","field","field","field","field"],
        "argsGrammarName": ["IdString","EvalString","Bool","EvalString","JsonEvalString"],
        "omitted": [false,false,false,false,true],
        "multi": [false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('shopcommonevent',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('shopcommonevent',inputs,next,isShadow,comment,attribute);
        }
    },
    "beforeBattle_m": {
        "type": "statement",
        "json": {
            "type": "beforeBattle_m",
            "message0": "战斗开始前 %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "action",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 250
        },
        "generFunc": function(block) {
            var action = Blockly.JavaScript.statementToCode(block, 'action');
            if (action==='') {
                throw new OmitedError(block,'action','beforeBattle_m');
            }
            var code = MotaActionFunctions.defaultCode('beforeBattle_m',eval('['+MotaActionBlocks['beforeBattle_m'].args.join(',')+']'),block);
            return code;
        },
        "args": ["action"],
        "argsType": ["statement"],
        "argsGrammarName": ["action"],
        "omitted": [false],
        "multi": [true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('beforeBattle_m',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('beforeBattle_m',inputs,next,isShadow,comment,attribute);
        }
    },
    "afterBattle_m": {
        "type": "statement",
        "json": {
            "type": "afterBattle_m",
            "message0": "战斗结束后 %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "action",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 250
        },
        "generFunc": function(block) {
            var action = Blockly.JavaScript.statementToCode(block, 'action');
            if (action==='') {
                throw new OmitedError(block,'action','afterBattle_m');
            }
            var code = MotaActionFunctions.defaultCode('afterBattle_m',eval('['+MotaActionBlocks['afterBattle_m'].args.join(',')+']'),block);
            return code;
        },
        "args": ["action"],
        "argsType": ["statement"],
        "argsGrammarName": ["action"],
        "omitted": [false],
        "multi": [true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('afterBattle_m',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('afterBattle_m',inputs,next,isShadow,comment,attribute);
        }
    },
    "afterGetItem_m": {
        "type": "statement",
        "json": {
            "type": "afterGetItem_m",
            "message0": "获取道具后 轻按时不触发 %1 %2 %3",
            "args0": [
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "disableOnGentleClick"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "action",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 250
        },
        "generFunc": function(block) {
            var disableOnGentleClick = block.getFieldValue('disableOnGentleClick') === 'TRUE';
            disableOnGentleClick = MotaActionFunctions.pre('Bool')(disableOnGentleClick,block,'disableOnGentleClick','afterGetItem_m');
            var action = Blockly.JavaScript.statementToCode(block, 'action');
            if (action==='') {
                throw new OmitedError(block,'action','afterGetItem_m');
            }
            var code = MotaActionFunctions.defaultCode('afterGetItem_m',eval('['+MotaActionBlocks['afterGetItem_m'].args.join(',')+']'),block);
            return code;
        },
        "args": ["disableOnGentleClick","action"],
        "argsType": ["field","statement"],
        "argsGrammarName": ["Bool","action"],
        "omitted": [false,false],
        "multi": [false,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('afterGetItem_m',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('afterGetItem_m',inputs,next,isShadow,comment,attribute);
        }
    },
    "afterOpenDoor_m": {
        "type": "statement",
        "json": {
            "type": "afterOpenDoor_m",
            "message0": "打开门后 %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "action",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 250
        },
        "generFunc": function(block) {
            var action = Blockly.JavaScript.statementToCode(block, 'action');
            if (action==='') {
                throw new OmitedError(block,'action','afterOpenDoor_m');
            }
            var code = MotaActionFunctions.defaultCode('afterOpenDoor_m',eval('['+MotaActionBlocks['afterOpenDoor_m'].args.join(',')+']'),block);
            return code;
        },
        "args": ["action"],
        "argsType": ["statement"],
        "argsGrammarName": ["action"],
        "omitted": [false],
        "multi": [true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('afterOpenDoor_m',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('afterOpenDoor_m',inputs,next,isShadow,comment,attribute);
        }
    },
    "firstArrive_m": {
        "type": "statement",
        "json": {
            "type": "firstArrive_m",
            "message0": "首次到达楼层 %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "action",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 250
        },
        "generFunc": function(block) {
            var action = Blockly.JavaScript.statementToCode(block, 'action');
            if (action==='') {
                throw new OmitedError(block,'action','firstArrive_m');
            }
            var code = MotaActionFunctions.defaultCode('firstArrive_m',eval('['+MotaActionBlocks['firstArrive_m'].args.join(',')+']'),block);
            return code;
        },
        "args": ["action"],
        "argsType": ["statement"],
        "argsGrammarName": ["action"],
        "omitted": [false],
        "multi": [true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('firstArrive_m',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('firstArrive_m',inputs,next,isShadow,comment,attribute);
        }
    },
    "eachArrive_m": {
        "type": "statement",
        "json": {
            "type": "eachArrive_m",
            "message0": "每次到达楼层 %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "action",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 250
        },
        "generFunc": function(block) {
            var action = Blockly.JavaScript.statementToCode(block, 'action');
            if (action==='') {
                throw new OmitedError(block,'action','eachArrive_m');
            }
            var code = MotaActionFunctions.defaultCode('eachArrive_m',eval('['+MotaActionBlocks['eachArrive_m'].args.join(',')+']'),block);
            return code;
        },
        "args": ["action"],
        "argsType": ["statement"],
        "argsGrammarName": ["action"],
        "omitted": [false],
        "multi": [true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('eachArrive_m',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('eachArrive_m',inputs,next,isShadow,comment,attribute);
        }
    },
    "changeFloor_m": {
        "type": "statement",
        "json": {
            "type": "changeFloor_m",
            "message0": "楼梯, 传送门 %1 %2 %3 %4 x %5 , y %6 朝向 %7 动画时间 %8 穿透性 %9",
            "args0": [
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.Floor_List,{
                    "name": "floorIdL"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "floorId"
                }),
                Object.assign({},MotaActionBlocks.Stair_List,{
                    "name": "stair"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.DirectionEx_List,{
                    "name": "direction"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.IgnoreChangeFloor_List,{
                    "name": "ignoreChangeFloor"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 250
        },
        "generFunc": function(block) {
            var floorIdL = block.getFieldValue('floorIdL');
            floorIdL = MotaActionFunctions.pre('Floor_List')(floorIdL,block,'floorIdL','changeFloor_m');
            var floorId = block.getFieldValue('floorId');
            floorId = MotaActionFunctions.pre('IdString')(floorId,block,'floorId','changeFloor_m');
            var stair = block.getFieldValue('stair');
            stair = MotaActionFunctions.pre('Stair_List')(stair,block,'stair','changeFloor_m');
            var x = block.getFieldValue('x');
            x = MotaActionFunctions.pre('PosString')(x,block,'x','changeFloor_m');
            var y = block.getFieldValue('y');
            y = MotaActionFunctions.pre('PosString')(y,block,'y','changeFloor_m');
            var direction = block.getFieldValue('direction');
            direction = MotaActionFunctions.pre('DirectionEx_List')(direction,block,'direction','changeFloor_m');
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('IntString')(time,block,'time','changeFloor_m');
            var ignoreChangeFloor = block.getFieldValue('ignoreChangeFloor');
            ignoreChangeFloor = MotaActionFunctions.pre('IgnoreChangeFloor_List')(ignoreChangeFloor,block,'ignoreChangeFloor','changeFloor_m');
            var code = MotaActionFunctions.defaultCode('changeFloor_m',eval('['+MotaActionBlocks['changeFloor_m'].args.join(',')+']'),block);
            return code;
        },
        "args": ["floorIdL","floorId","stair","x","y","direction","time","ignoreChangeFloor"],
        "argsType": ["field","field","field","field","field","field","field","field"],
        "argsGrammarName": ["Floor_List","IdString","Stair_List","PosString","PosString","DirectionEx_List","IntString","IgnoreChangeFloor_List"],
        "omitted": [false,true,false,true,true,false,true,false],
        "multi": [false,false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('changeFloor_m',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('changeFloor_m',inputs,next,isShadow,comment,attribute);
        }
    },
    "commonEvent_m": {
        "type": "statement",
        "json": {
            "type": "commonEvent_m",
            "message0": "公共事件 %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "action",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 250
        },
        "generFunc": function(block) {
            var action = Blockly.JavaScript.statementToCode(block, 'action');
            if (action==='') {
                throw new OmitedError(block,'action','commonEvent_m');
            }
            var code = MotaActionFunctions.defaultCode('commonEvent_m',eval('['+MotaActionBlocks['commonEvent_m'].args.join(',')+']'),block);
            return code;
        },
        "args": ["action"],
        "argsType": ["statement"],
        "argsGrammarName": ["action"],
        "omitted": [false],
        "multi": [true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('commonEvent_m',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('commonEvent_m',inputs,next,isShadow,comment,attribute);
        }
    },
    "item_m": {
        "type": "statement",
        "json": {
            "type": "item_m",
            "message0": "使用道具事件 %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "action",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 250
        },
        "generFunc": function(block) {
            var action = Blockly.JavaScript.statementToCode(block, 'action');
            if (action==='') {
                throw new OmitedError(block,'action','item_m');
            }
            var code = MotaActionFunctions.defaultCode('item_m',eval('['+MotaActionBlocks['item_m'].args.join(',')+']'),block);
            return code;
        },
        "args": ["action"],
        "argsType": ["statement"],
        "argsGrammarName": ["action"],
        "omitted": [false],
        "multi": [true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('item_m',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('item_m',inputs,next,isShadow,comment,attribute);
        }
    },
    "levelChoose_m": {
        "type": "statement",
        "json": {
            "type": "levelChoose_m",
            "message0": "难度分歧 %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "levelChoose",
                    "check": MotaActionBlocks.levelChooseList
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 250
        },
        "generFunc": function(block) {
            var levelChoose = Blockly.JavaScript.statementToCode(block, 'levelChoose');
            if (levelChoose==='') {
                throw new OmitedError(block,'levelChoose','levelChoose_m');
            }
            var code = MotaActionFunctions.defaultCode('levelChoose_m',eval('['+MotaActionBlocks['levelChoose_m'].args.join(',')+']'),block);
            return code;
        },
        "args": ["levelChoose"],
        "argsType": ["statement"],
        "argsGrammarName": ["levelChooseList"],
        "omitted": [false],
        "multi": [true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('levelChoose_m',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('levelChoose_m',inputs,next,isShadow,comment,attribute);
        }
    },
    "levelChooseEmpty": {
        "type": "statement",
        "json": {
            "type": "levelChooseEmpty",
            "message0": " ",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "levelChooseEmpty",
            "nextStatement": MotaActionBlocks.levelChooseList
        },
        "generFunc": function(block) {
            var code = MotaActionFunctions.defaultCode('levelChooseEmpty',eval('['+MotaActionBlocks['levelChooseEmpty'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('levelChooseEmpty',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('levelChooseEmpty',inputs,next,isShadow,comment,attribute);
        }
    },
    "levelChooseChoice": {
        "type": "statement",
        "json": {
            "type": "levelChooseChoice",
            "message0": "难度分歧项 名称 %1 简写 %2 变量:hard值 %3 颜色 %4 %5 %6 %7",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "title"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "name"
                }),
                Object.assign({},MotaActionBlocks.NInt,{
                    "name": "hard"
                }),
                Object.assign({},MotaActionBlocks.ColorString,{
                    "name": "colorS"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "color"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "action",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "levelChooseChoice",
            "nextStatement": MotaActionBlocks.levelChooseList
        },
        "generFunc": function(block) {
            var title = block.getFieldValue('title');
            if (title==='') {
                throw new OmitedError(block,'title','levelChooseChoice');
            }
            title = MotaActionFunctions.pre('EvalString')(title,block,'title','levelChooseChoice');
            var name = block.getFieldValue('name');
            if (name==='') {
                throw new OmitedError(block,'name','levelChooseChoice');
            }
            name = MotaActionFunctions.pre('EvalString')(name,block,'name','levelChooseChoice');
            var hard = block.getFieldValue('hard');
            if (hard==='') {
                throw new OmitedError(block,'hard','levelChooseChoice');
            }
            hard = MotaActionFunctions.pre('NInt')(hard,block,'hard','levelChooseChoice');
            var colorS = block.getFieldValue('colorS');
            colorS = MotaActionFunctions.pre('ColorString')(colorS,block,'colorS','levelChooseChoice');
            var color = block.getFieldValue('color');
            color = MotaActionFunctions.pre('Colour')(color,block,'color','levelChooseChoice');
            var action = Blockly.JavaScript.statementToCode(block, 'action');
            if (action==='') {
                throw new OmitedError(block,'action','levelChooseChoice');
            }
            var code = MotaActionFunctions.defaultCode('levelChooseChoice',eval('['+MotaActionBlocks['levelChooseChoice'].args.join(',')+']'),block);
            return code;
        },
        "args": ["title","name","hard","colorS","color","action"],
        "argsType": ["field","field","field","field","field","statement"],
        "argsGrammarName": ["EvalString","EvalString","NInt","ColorString","Colour","action"],
        "omitted": [false,false,false,true,false,false],
        "multi": [false,false,false,false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('levelChooseChoice',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('levelChooseChoice',inputs,next,isShadow,comment,attribute);
        }
    },
    "floorPartition_m": {
        "type": "statement",
        "json": {
            "type": "floorPartition_m",
            "message0": "高层塔分区管理 %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "floorPartition",
                    "check": MotaActionBlocks.floorPartitionList
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 250
        },
        "generFunc": function(block) {
            var floorPartition = Blockly.JavaScript.statementToCode(block, 'floorPartition');
            if (floorPartition==='') {
                throw new OmitedError(block,'floorPartition','floorPartition_m');
            }
            var code = MotaActionFunctions.defaultCode('floorPartition_m',eval('['+MotaActionBlocks['floorPartition_m'].args.join(',')+']'),block);
            return code;
        },
        "args": ["floorPartition"],
        "argsType": ["statement"],
        "argsGrammarName": ["floorPartitionList"],
        "omitted": [false],
        "multi": [true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('floorPartition_m',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('floorPartition_m',inputs,next,isShadow,comment,attribute);
        }
    },
    "floorPartitionEmpty": {
        "type": "statement",
        "json": {
            "type": "floorPartitionEmpty",
            "message0": " ",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "floorPartitionEmpty",
            "nextStatement": MotaActionBlocks.floorPartitionList
        },
        "generFunc": function(block) {
            var code = MotaActionFunctions.defaultCode('floorPartitionEmpty',eval('['+MotaActionBlocks['floorPartitionEmpty'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('floorPartitionEmpty',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('floorPartitionEmpty',inputs,next,isShadow,comment,attribute);
        }
    },
    "floorPartitionItem": {
        "type": "statement",
        "json": {
            "type": "floorPartitionItem",
            "message0": "分区项 起始楼层ID %1 终止楼层ID（不填代表到最后一层） %2",
            "args0": [
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "id1"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "id2"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "floorPartitionItem",
            "nextStatement": MotaActionBlocks.floorPartitionList
        },
        "generFunc": function(block) {
            var id1 = block.getFieldValue('id1');
            if (id1==='') {
                throw new OmitedError(block,'id1','floorPartitionItem');
            }
            id1 = MotaActionFunctions.pre('IdString')(id1,block,'id1','floorPartitionItem');
            var id2 = block.getFieldValue('id2');
            id2 = MotaActionFunctions.pre('IdString')(id2,block,'id2','floorPartitionItem');
            var code = MotaActionFunctions.defaultCode('floorPartitionItem',eval('['+MotaActionBlocks['floorPartitionItem'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id1","id2"],
        "argsType": ["field","field"],
        "argsGrammarName": ["IdString","IdString"],
        "omitted": [false,true],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('floorPartitionItem',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('floorPartitionItem',inputs,next,isShadow,comment,attribute);
        }
    },
    "equip_m": {
        "type": "statement",
        "json": {
            "type": "equip_m",
            "message0": "装备 类型 %1 装备动画（第一个装备格有效） %2 %3 数值提升项 %4 百分比提升项 %5 穿上时事件 %6 脱下时事件 %7 此道具cls须为equips并设置canUseItemEffect",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "type"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "animate"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "value",
                    "check": MotaActionBlocks.equipList
                },
                {
                    "type": "input_statement",
                    "name": "percentage",
                    "check": MotaActionBlocks.equipList
                },
                {
                    "type": "input_statement",
                    "name": "equipEvent",
                    "check": MotaActionBlocks.action
                },
                {
                    "type": "input_statement",
                    "name": "unequipEvent",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 250
        },
        "generFunc": function(block) {
            var type = block.getFieldValue('type');
            if (type==='') {
                throw new OmitedError(block,'type','equip_m');
            }
            type = MotaActionFunctions.pre('EvalString')(type,block,'type','equip_m');
            var animate = block.getFieldValue('animate');
            animate = MotaActionFunctions.pre('IdString')(animate,block,'animate','equip_m');
            var value = Blockly.JavaScript.statementToCode(block, 'value');
            if (value==='') {
                throw new OmitedError(block,'value','equip_m');
            }
            var percentage = Blockly.JavaScript.statementToCode(block, 'percentage');
            if (percentage==='') {
                throw new OmitedError(block,'percentage','equip_m');
            }
            var equipEvent = Blockly.JavaScript.statementToCode(block, 'equipEvent');
            if (equipEvent==='') {
                throw new OmitedError(block,'equipEvent','equip_m');
            }
            var unequipEvent = Blockly.JavaScript.statementToCode(block, 'unequipEvent');
            if (unequipEvent==='') {
                throw new OmitedError(block,'unequipEvent','equip_m');
            }
            var code = MotaActionFunctions.defaultCode('equip_m',eval('['+MotaActionBlocks['equip_m'].args.join(',')+']'),block);
            return code;
        },
        "args": ["type","animate","value","percentage","equipEvent","unequipEvent"],
        "argsType": ["field","field","statement","statement","statement","statement"],
        "argsGrammarName": ["EvalString","IdString","equipList","equipList","action","action"],
        "omitted": [false,true,false,false,false,false],
        "multi": [false,false,true,true,true,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('equip_m',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('equip_m',inputs,next,isShadow,comment,attribute);
        }
    },
    "equipKnown": {
        "type": "statement",
        "json": {
            "type": "equipKnown",
            "message0": "%1 : %2",
            "args0": [
                Object.assign({},MotaActionBlocks.Equip_List,{
                    "name": "key"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "value"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "equipKnown",
            "nextStatement": MotaActionBlocks.equipList
        },
        "generFunc": function(block) {
            var key = block.getFieldValue('key');
            key = MotaActionFunctions.pre('Equip_List')(key,block,'key','equipKnown');
            var value = block.getFieldValue('value');
            if (value==='') {
                throw new OmitedError(block,'value','equipKnown');
            }
            value = MotaActionFunctions.pre('EvalString')(value,block,'value','equipKnown');
            var code = MotaActionFunctions.defaultCode('equipKnown',eval('['+MotaActionBlocks['equipKnown'].args.join(',')+']'),block);
            return code;
        },
        "args": ["key","value"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Equip_List","EvalString"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('equipKnown',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('equipKnown',inputs,next,isShadow,comment,attribute);
        }
    },
    "equipUnknown": {
        "type": "statement",
        "json": {
            "type": "equipUnknown",
            "message0": "%1 : %2",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "key"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "value"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "equipUnknown",
            "nextStatement": MotaActionBlocks.equipList
        },
        "generFunc": function(block) {
            var key = block.getFieldValue('key');
            if (key==='') {
                throw new OmitedError(block,'key','equipUnknown');
            }
            key = MotaActionFunctions.pre('EvalString')(key,block,'key','equipUnknown');
            var value = block.getFieldValue('value');
            if (value==='') {
                throw new OmitedError(block,'value','equipUnknown');
            }
            value = MotaActionFunctions.pre('EvalString')(value,block,'value','equipUnknown');
            var code = MotaActionFunctions.defaultCode('equipUnknown',eval('['+MotaActionBlocks['equipUnknown'].args.join(',')+']'),block);
            return code;
        },
        "args": ["key","value"],
        "argsType": ["field","field"],
        "argsGrammarName": ["EvalString","EvalString"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('equipUnknown',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('equipUnknown',inputs,next,isShadow,comment,attribute);
        }
    },
    "equipEmpty": {
        "type": "statement",
        "json": {
            "type": "equipEmpty",
            "message0": " ",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "equipEmpty",
            "nextStatement": MotaActionBlocks.equipList
        },
        "generFunc": function(block) {
            var code = MotaActionFunctions.defaultCode('equipEmpty',eval('['+MotaActionBlocks['equipEmpty'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('equipEmpty',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('equipEmpty',inputs,next,isShadow,comment,attribute);
        }
    },
    "floorImage_m": {
        "type": "statement",
        "json": {
            "type": "floorImage_m",
            "message0": "楼层贴图 %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "floorImage",
                    "check": MotaActionBlocks.floorImageList
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 250
        },
        "generFunc": function(block) {
            var floorImage = Blockly.JavaScript.statementToCode(block, 'floorImage');
            if (floorImage==='') {
                throw new OmitedError(block,'floorImage','floorImage_m');
            }
            var code = MotaActionFunctions.defaultCode('floorImage_m',eval('['+MotaActionBlocks['floorImage_m'].args.join(',')+']'),block);
            return code;
        },
        "args": ["floorImage"],
        "argsType": ["statement"],
        "argsGrammarName": ["floorImageList"],
        "omitted": [false],
        "multi": [true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('floorImage_m',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('floorImage_m',inputs,next,isShadow,comment,attribute);
        }
    },
    "floorOneImage": {
        "type": "statement",
        "json": {
            "type": "floorOneImage",
            "message0": "图片名 %1 翻转 %2 图层 %3 绘制坐标 x %4 y %5 初始禁用 %6 %7 裁剪起点坐标 x %8 y %9 宽 %10 高 %11 帧数 %12",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "name"
                }),
                Object.assign({},MotaActionBlocks.Reverse_List,{
                    "name": "reverse"
                }),
                Object.assign({},MotaActionBlocks.Bg_Fg2_List,{
                    "name": "canvas"
                }),
                Object.assign({},MotaActionBlocks.NInt,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.NInt,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "disable"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "sx"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "sy"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "w"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "h"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "frame"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "floorOneImage",
            "nextStatement": MotaActionBlocks.floorImageList
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            if (name==='') {
                throw new OmitedError(block,'name','floorOneImage');
            }
            name = MotaActionFunctions.pre('EvalString')(name,block,'name','floorOneImage');
            var reverse = block.getFieldValue('reverse');
            reverse = MotaActionFunctions.pre('Reverse_List')(reverse,block,'reverse','floorOneImage');
            var canvas = block.getFieldValue('canvas');
            canvas = MotaActionFunctions.pre('Bg_Fg2_List')(canvas,block,'canvas','floorOneImage');
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','floorOneImage');
            }
            x = MotaActionFunctions.pre('NInt')(x,block,'x','floorOneImage');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','floorOneImage');
            }
            y = MotaActionFunctions.pre('NInt')(y,block,'y','floorOneImage');
            var disable = block.getFieldValue('disable') === 'TRUE';
            disable = MotaActionFunctions.pre('Bool')(disable,block,'disable','floorOneImage');
            var sx = block.getFieldValue('sx');
            sx = MotaActionFunctions.pre('IntString')(sx,block,'sx','floorOneImage');
            var sy = block.getFieldValue('sy');
            sy = MotaActionFunctions.pre('IntString')(sy,block,'sy','floorOneImage');
            var w = block.getFieldValue('w');
            w = MotaActionFunctions.pre('IntString')(w,block,'w','floorOneImage');
            var h = block.getFieldValue('h');
            h = MotaActionFunctions.pre('IntString')(h,block,'h','floorOneImage');
            var frame = block.getFieldValue('frame');
            frame = MotaActionFunctions.pre('IntString')(frame,block,'frame','floorOneImage');
            var code = MotaActionFunctions.defaultCode('floorOneImage',eval('['+MotaActionBlocks['floorOneImage'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","reverse","canvas","x","y","disable","sx","sy","w","h","frame"],
        "argsType": ["field","field","field","field","field","field","field","field","field","field","field"],
        "argsGrammarName": ["EvalString","Reverse_List","Bg_Fg2_List","NInt","NInt","Bool","IntString","IntString","IntString","IntString","IntString"],
        "omitted": [false,false,false,false,false,false,true,true,true,true,true],
        "multi": [false,false,false,false,false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('floorOneImage',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('floorOneImage',inputs,next,isShadow,comment,attribute);
        }
    },
    "floorEmptyImage": {
        "type": "statement",
        "json": {
            "type": "floorEmptyImage",
            "message0": " ",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "floorEmptyImage",
            "nextStatement": MotaActionBlocks.floorImageList
        },
        "generFunc": function(block) {
            var code = MotaActionFunctions.defaultCode('floorEmptyImage',eval('['+MotaActionBlocks['floorEmptyImage'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('floorEmptyImage',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('floorEmptyImage',inputs,next,isShadow,comment,attribute);
        }
    },
    "doorInfo_m": {
        "type": "statement",
        "json": {
            "type": "doorInfo_m",
            "message0": "门信息 开关门时间 %1 开门音效 %2 关门音效 %3 %4 需要钥匙 %5 如需撞到开门还需要把图块触发器改成 openDoor %6 开门后事件 %7",
            "args0": [
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "openSound"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "closeSound"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "keys",
                    "check": MotaActionBlocks.doorKeyList
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "afterOpenDoor",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 250
        },
        "generFunc": function(block) {
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('Int')(time,block,'time','doorInfo_m');
            var openSound = block.getFieldValue('openSound');
            openSound = MotaActionFunctions.pre('EvalString')(openSound,block,'openSound','doorInfo_m');
            var closeSound = block.getFieldValue('closeSound');
            closeSound = MotaActionFunctions.pre('EvalString')(closeSound,block,'closeSound','doorInfo_m');
            var keys = Blockly.JavaScript.statementToCode(block, 'keys');
            if (keys==='') {
                throw new OmitedError(block,'keys','doorInfo_m');
            }
            var afterOpenDoor = Blockly.JavaScript.statementToCode(block, 'afterOpenDoor');
            if (afterOpenDoor==='') {
                throw new OmitedError(block,'afterOpenDoor','doorInfo_m');
            }
            var code = MotaActionFunctions.defaultCode('doorInfo_m',eval('['+MotaActionBlocks['doorInfo_m'].args.join(',')+']'),block);
            return code;
        },
        "args": ["time","openSound","closeSound","keys","afterOpenDoor"],
        "argsType": ["field","field","field","statement","statement"],
        "argsGrammarName": ["Int","EvalString","EvalString","doorKeyList","action"],
        "omitted": [false,true,true,false,false],
        "multi": [false,false,false,true,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('doorInfo_m',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('doorInfo_m',inputs,next,isShadow,comment,attribute);
        }
    },
    "doorKeyKnown": {
        "type": "statement",
        "json": {
            "type": "doorKeyKnown",
            "message0": "%1 : %2 需要但不消耗 %3",
            "args0": [
                Object.assign({},MotaActionBlocks.Key_List,{
                    "name": "key"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "count"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "noCost"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "doorKeyKnown",
            "nextStatement": MotaActionBlocks.doorKeyList
        },
        "generFunc": function(block) {
            var key = block.getFieldValue('key');
            key = MotaActionFunctions.pre('Key_List')(key,block,'key','doorKeyKnown');
            var count = block.getFieldValue('count');
            count = MotaActionFunctions.pre('Int')(count,block,'count','doorKeyKnown');
            var noCost = block.getFieldValue('noCost') === 'TRUE';
            noCost = MotaActionFunctions.pre('Bool')(noCost,block,'noCost','doorKeyKnown');
            var code = MotaActionFunctions.defaultCode('doorKeyKnown',eval('['+MotaActionBlocks['doorKeyKnown'].args.join(',')+']'),block);
            return code;
        },
        "args": ["key","count","noCost"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["Key_List","Int","Bool"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('doorKeyKnown',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('doorKeyKnown',inputs,next,isShadow,comment,attribute);
        }
    },
    "doorKeyUnknown": {
        "type": "statement",
        "json": {
            "type": "doorKeyUnknown",
            "message0": "%1 : %2 需要但不消耗 %3",
            "args0": [
                Object.assign({},MotaActionBlocks.Key_List,{
                    "name": "key"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "count"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "noCost"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "doorKeyUnknown",
            "nextStatement": MotaActionBlocks.doorKeyList
        },
        "generFunc": function(block) {
            var key = block.getFieldValue('key');
            key = MotaActionFunctions.pre('Key_List')(key,block,'key','doorKeyUnknown');
            var count = block.getFieldValue('count');
            count = MotaActionFunctions.pre('Int')(count,block,'count','doorKeyUnknown');
            var noCost = block.getFieldValue('noCost') === 'TRUE';
            noCost = MotaActionFunctions.pre('Bool')(noCost,block,'noCost','doorKeyUnknown');
            var code = MotaActionFunctions.defaultCode('doorKeyUnknown',eval('['+MotaActionBlocks['doorKeyUnknown'].args.join(',')+']'),block);
            return code;
        },
        "args": ["key","count","noCost"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["Key_List","Int","Bool"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('doorKeyUnknown',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('doorKeyUnknown',inputs,next,isShadow,comment,attribute);
        }
    },
    "doorKeyEmpty": {
        "type": "statement",
        "json": {
            "type": "doorKeyEmpty",
            "message0": " ",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "doorKeyEmpty",
            "nextStatement": MotaActionBlocks.doorKeyList
        },
        "generFunc": function(block) {
            var code = MotaActionFunctions.defaultCode('doorKeyEmpty',eval('['+MotaActionBlocks['doorKeyEmpty'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('doorKeyEmpty',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('doorKeyEmpty',inputs,next,isShadow,comment,attribute);
        }
    },
    "faceIds_m": {
        "type": "statement",
        "json": {
            "type": "faceIds_m",
            "message0": "行走图朝向: %1 向下ID %2 向左ID %3 向右ID %4 向上ID %5",
            "args0": [
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "down"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "left"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "right"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "up"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 250
        },
        "generFunc": function(block) {
            var down = block.getFieldValue('down');
            down = MotaActionFunctions.pre('IdString')(down,block,'down','faceIds_m');
            var left = block.getFieldValue('left');
            left = MotaActionFunctions.pre('IdString')(left,block,'left','faceIds_m');
            var right = block.getFieldValue('right');
            right = MotaActionFunctions.pre('IdString')(right,block,'right','faceIds_m');
            var up = block.getFieldValue('up');
            up = MotaActionFunctions.pre('IdString')(up,block,'up','faceIds_m');
            var code = MotaActionFunctions.defaultCode('faceIds_m',eval('['+MotaActionBlocks['faceIds_m'].args.join(',')+']'),block);
            return code;
        },
        "args": ["down","left","right","up"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["IdString","IdString","IdString","IdString"],
        "omitted": [true,true,true,true],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('faceIds_m',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('faceIds_m',inputs,next,isShadow,comment,attribute);
        }
    },
    "mainStyle_m": {
        "type": "statement",
        "json": {
            "type": "mainStyle_m",
            "message0": "主要样式设置： 标题界面背景图： %1 %2 竖屏标题界面背景图： %3 %4 标题样式；可写 display: none 隐藏标题 %5 %6 标题按钮样式： %7 %8 横屏状态栏背景；url(...) 0 0/100% 100% no-repeat 可将图片拉伸自适配 %9 %10 %11 竖屏状态栏背景： %12 %13 竖屏工具栏背景： %14 %15 楼层切换样式： %16 %17 状态栏颜色 %18 %19 边框颜色 %20 %21 %22 选中框颜色 %23 %24 全局字体 %25",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "startBackground",
                    "text": "project/images/bg.jpg"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "startVerticalBackground",
                    "text": "project/images/bg.jpg"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "startLogoStyle",
                    "text": "color: white"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "startButtonsStyle",
                    "text": "background-color: #32369F; opacity: 0.85; color: #FFFFFF; border: ,FFFFFF 2px solid; caret-color: #FFD700;"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "statusLeftBackground",
                    "text": "url(project/materials/ground.png) repeat"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "statusTopBackground",
                    "text": "url(project/materials/ground.png) repeat"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "toolsBackground",
                    "text": "url(project/materials/ground.png) repeat"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "floorChangingStyle",
                    "text": "background-color: black; color: white"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.ColorString,{
                    "name": "statusBarColorS",
                    "text": "255,255,255,1"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "statusBarColor",
                    "colour": "rgba(255,255,255,1)"
                }),
                Object.assign({},MotaActionBlocks.ColorString,{
                    "name": "borderColorS",
                    "text": "204,204,204,1"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "borderColor",
                    "colour": "rgba(204,204,204,1)"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.ColorString,{
                    "name": "selectColor",
                    "text": "255,215,0,1"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "selectColorS",
                    "colour": "rgba(255,215,0,1)"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "font",
                    "text": "Verdana"
                })
            ],
            "tooltip": "主要样式设置",
            "helpUrl": "",
            "colour": 250
        },
        "generFunc": function(block) {
            var startBackground = block.getFieldValue('startBackground');
            if (startBackground==='') {
                throw new OmitedError(block,'startBackground','mainStyle_m');
            }
            startBackground = MotaActionFunctions.pre('EvalString')(startBackground,block,'startBackground','mainStyle_m');
            var startVerticalBackground = block.getFieldValue('startVerticalBackground');
            if (startVerticalBackground==='') {
                throw new OmitedError(block,'startVerticalBackground','mainStyle_m');
            }
            startVerticalBackground = MotaActionFunctions.pre('EvalString')(startVerticalBackground,block,'startVerticalBackground','mainStyle_m');
            var startLogoStyle = block.getFieldValue('startLogoStyle');
            if (startLogoStyle==='') {
                throw new OmitedError(block,'startLogoStyle','mainStyle_m');
            }
            startLogoStyle = MotaActionFunctions.pre('EvalString')(startLogoStyle,block,'startLogoStyle','mainStyle_m');
            var startButtonsStyle = block.getFieldValue('startButtonsStyle');
            if (startButtonsStyle==='') {
                throw new OmitedError(block,'startButtonsStyle','mainStyle_m');
            }
            startButtonsStyle = MotaActionFunctions.pre('EvalString')(startButtonsStyle,block,'startButtonsStyle','mainStyle_m');
            var statusLeftBackground = block.getFieldValue('statusLeftBackground');
            if (statusLeftBackground==='') {
                throw new OmitedError(block,'statusLeftBackground','mainStyle_m');
            }
            statusLeftBackground = MotaActionFunctions.pre('EvalString')(statusLeftBackground,block,'statusLeftBackground','mainStyle_m');
            var statusTopBackground = block.getFieldValue('statusTopBackground');
            if (statusTopBackground==='') {
                throw new OmitedError(block,'statusTopBackground','mainStyle_m');
            }
            statusTopBackground = MotaActionFunctions.pre('EvalString')(statusTopBackground,block,'statusTopBackground','mainStyle_m');
            var toolsBackground = block.getFieldValue('toolsBackground');
            if (toolsBackground==='') {
                throw new OmitedError(block,'toolsBackground','mainStyle_m');
            }
            toolsBackground = MotaActionFunctions.pre('EvalString')(toolsBackground,block,'toolsBackground','mainStyle_m');
            var floorChangingStyle = block.getFieldValue('floorChangingStyle');
            if (floorChangingStyle==='') {
                throw new OmitedError(block,'floorChangingStyle','mainStyle_m');
            }
            floorChangingStyle = MotaActionFunctions.pre('EvalString')(floorChangingStyle,block,'floorChangingStyle','mainStyle_m');
            var statusBarColorS = block.getFieldValue('statusBarColorS');
            if (statusBarColorS==='') {
                throw new OmitedError(block,'statusBarColorS','mainStyle_m');
            }
            statusBarColorS = MotaActionFunctions.pre('ColorString')(statusBarColorS,block,'statusBarColorS','mainStyle_m');
            var statusBarColor = block.getFieldValue('statusBarColor');
            statusBarColor = MotaActionFunctions.pre('Colour')(statusBarColor,block,'statusBarColor','mainStyle_m');
            var borderColorS = block.getFieldValue('borderColorS');
            if (borderColorS==='') {
                throw new OmitedError(block,'borderColorS','mainStyle_m');
            }
            borderColorS = MotaActionFunctions.pre('ColorString')(borderColorS,block,'borderColorS','mainStyle_m');
            var borderColor = block.getFieldValue('borderColor');
            borderColor = MotaActionFunctions.pre('Colour')(borderColor,block,'borderColor','mainStyle_m');
            var selectColor = block.getFieldValue('selectColor');
            if (selectColor==='') {
                throw new OmitedError(block,'selectColor','mainStyle_m');
            }
            selectColor = MotaActionFunctions.pre('ColorString')(selectColor,block,'selectColor','mainStyle_m');
            var selectColorS = block.getFieldValue('selectColorS');
            selectColorS = MotaActionFunctions.pre('Colour')(selectColorS,block,'selectColorS','mainStyle_m');
            var font = block.getFieldValue('font');
            if (font==='') {
                throw new OmitedError(block,'font','mainStyle_m');
            }
            font = MotaActionFunctions.pre('EvalString')(font,block,'font','mainStyle_m');
            var code = MotaActionFunctions.defaultCode('mainStyle_m',eval('['+MotaActionBlocks['mainStyle_m'].args.join(',')+']'),block);
            return code;
        },
        "args": ["startBackground","startVerticalBackground","startLogoStyle","startButtonsStyle","statusLeftBackground","statusTopBackground","toolsBackground","floorChangingStyle","statusBarColorS","statusBarColor","borderColorS","borderColor","selectColor","selectColorS","font"],
        "argsType": ["field","field","field","field","field","field","field","field","field","field","field","field","field","field","field"],
        "argsGrammarName": ["EvalString","EvalString","EvalString","EvalString","EvalString","EvalString","EvalString","EvalString","ColorString","Colour","ColorString","Colour","ColorString","Colour","EvalString"],
        "omitted": [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        "multi": [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('mainStyle_m',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('mainStyle_m',inputs,next,isShadow,comment,attribute);
        }
    },
    "nameMap_m": {
        "type": "statement",
        "json": {
            "type": "nameMap_m",
            "message0": "文件别名设置 （可以游戏中使用此别名代替原始文件名） %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "nameMap",
                    "check": MotaActionBlocks.nameMapList
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 250
        },
        "generFunc": function(block) {
            var nameMap = Blockly.JavaScript.statementToCode(block, 'nameMap');
            if (nameMap==='') {
                throw new OmitedError(block,'nameMap','nameMap_m');
            }
            var code = MotaActionFunctions.defaultCode('nameMap_m',eval('['+MotaActionBlocks['nameMap_m'].args.join(',')+']'),block);
            return code;
        },
        "args": ["nameMap"],
        "argsType": ["statement"],
        "argsGrammarName": ["nameMapList"],
        "omitted": [false],
        "multi": [true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('nameMap_m',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('nameMap_m',inputs,next,isShadow,comment,attribute);
        }
    },
    "nameMapBgm": {
        "type": "statement",
        "json": {
            "type": "nameMapBgm",
            "message0": "映射背景音乐 名称 %1 映射到文件 %2",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "name"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "file"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "nameMapBgm",
            "nextStatement": MotaActionBlocks.nameMapList
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            if (name==='') {
                throw new OmitedError(block,'name','nameMapBgm');
            }
            name = MotaActionFunctions.pre('EvalString')(name,block,'name','nameMapBgm');
            var file = block.getFieldValue('file');
            if (file==='') {
                throw new OmitedError(block,'file','nameMapBgm');
            }
            file = MotaActionFunctions.pre('EvalString')(file,block,'file','nameMapBgm');
            var code = MotaActionFunctions.defaultCode('nameMapBgm',eval('['+MotaActionBlocks['nameMapBgm'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","file"],
        "argsType": ["field","field"],
        "argsGrammarName": ["EvalString","EvalString"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('nameMapBgm',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('nameMapBgm',inputs,next,isShadow,comment,attribute);
        }
    },
    "nameMapSoundKnown": {
        "type": "statement",
        "json": {
            "type": "nameMapSoundKnown",
            "message0": "映射系统音效 名称 %1 映射到文件 %2",
            "args0": [
                Object.assign({},MotaActionBlocks.NameMap_List,{
                    "name": "name"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "file"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "nameMapSoundKnown",
            "nextStatement": MotaActionBlocks.nameMapList
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            name = MotaActionFunctions.pre('NameMap_List')(name,block,'name','nameMapSoundKnown');
            var file = block.getFieldValue('file');
            if (file==='') {
                throw new OmitedError(block,'file','nameMapSoundKnown');
            }
            file = MotaActionFunctions.pre('EvalString')(file,block,'file','nameMapSoundKnown');
            var code = MotaActionFunctions.defaultCode('nameMapSoundKnown',eval('['+MotaActionBlocks['nameMapSoundKnown'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","file"],
        "argsType": ["field","field"],
        "argsGrammarName": ["NameMap_List","EvalString"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('nameMapSoundKnown',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('nameMapSoundKnown',inputs,next,isShadow,comment,attribute);
        }
    },
    "nameMapSoundUnknown": {
        "type": "statement",
        "json": {
            "type": "nameMapSoundUnknown",
            "message0": "映射音效 名称 %1 映射到文件 %2",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "name"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "file"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "nameMapSoundUnknown",
            "nextStatement": MotaActionBlocks.nameMapList
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            if (name==='') {
                throw new OmitedError(block,'name','nameMapSoundUnknown');
            }
            name = MotaActionFunctions.pre('EvalString')(name,block,'name','nameMapSoundUnknown');
            var file = block.getFieldValue('file');
            if (file==='') {
                throw new OmitedError(block,'file','nameMapSoundUnknown');
            }
            file = MotaActionFunctions.pre('EvalString')(file,block,'file','nameMapSoundUnknown');
            var code = MotaActionFunctions.defaultCode('nameMapSoundUnknown',eval('['+MotaActionBlocks['nameMapSoundUnknown'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","file"],
        "argsType": ["field","field"],
        "argsGrammarName": ["EvalString","EvalString"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('nameMapSoundUnknown',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('nameMapSoundUnknown',inputs,next,isShadow,comment,attribute);
        }
    },
    "nameMapImage": {
        "type": "statement",
        "json": {
            "type": "nameMapImage",
            "message0": "映射图片 名称 %1 映射到文件 %2",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "name"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "file"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "nameMapImage",
            "nextStatement": MotaActionBlocks.nameMapList
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            if (name==='') {
                throw new OmitedError(block,'name','nameMapImage');
            }
            name = MotaActionFunctions.pre('EvalString')(name,block,'name','nameMapImage');
            var file = block.getFieldValue('file');
            if (file==='') {
                throw new OmitedError(block,'file','nameMapImage');
            }
            file = MotaActionFunctions.pre('EvalString')(file,block,'file','nameMapImage');
            var code = MotaActionFunctions.defaultCode('nameMapImage',eval('['+MotaActionBlocks['nameMapImage'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","file"],
        "argsType": ["field","field"],
        "argsGrammarName": ["EvalString","EvalString"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('nameMapImage',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('nameMapImage',inputs,next,isShadow,comment,attribute);
        }
    },
    "nameMapAnimate": {
        "type": "statement",
        "json": {
            "type": "nameMapAnimate",
            "message0": "映射动画 名称 %1 映射到文件 %2",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "name"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "file"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "nameMapAnimate",
            "nextStatement": MotaActionBlocks.nameMapList
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            if (name==='') {
                throw new OmitedError(block,'name','nameMapAnimate');
            }
            name = MotaActionFunctions.pre('EvalString')(name,block,'name','nameMapAnimate');
            var file = block.getFieldValue('file');
            if (file==='') {
                throw new OmitedError(block,'file','nameMapAnimate');
            }
            file = MotaActionFunctions.pre('IdString')(file,block,'file','nameMapAnimate');
            var code = MotaActionFunctions.defaultCode('nameMapAnimate',eval('['+MotaActionBlocks['nameMapAnimate'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","file"],
        "argsType": ["field","field"],
        "argsGrammarName": ["EvalString","IdString"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('nameMapAnimate',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('nameMapAnimate',inputs,next,isShadow,comment,attribute);
        }
    },
    "nameMapUnknown": {
        "type": "statement",
        "json": {
            "type": "nameMapUnknown",
            "message0": "未知映射 名称 %1 映射到文件 %2",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "name"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "file"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "nameMapUnknown",
            "nextStatement": MotaActionBlocks.nameMapList
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            if (name==='') {
                throw new OmitedError(block,'name','nameMapUnknown');
            }
            name = MotaActionFunctions.pre('EvalString')(name,block,'name','nameMapUnknown');
            var file = block.getFieldValue('file');
            if (file==='') {
                throw new OmitedError(block,'file','nameMapUnknown');
            }
            file = MotaActionFunctions.pre('EvalString')(file,block,'file','nameMapUnknown');
            var code = MotaActionFunctions.defaultCode('nameMapUnknown',eval('['+MotaActionBlocks['nameMapUnknown'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","file"],
        "argsType": ["field","field"],
        "argsGrammarName": ["EvalString","EvalString"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('nameMapUnknown',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('nameMapUnknown',inputs,next,isShadow,comment,attribute);
        }
    },
    "nameMapEmpty": {
        "type": "statement",
        "json": {
            "type": "nameMapEmpty",
            "message0": " ",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "nameMapEmpty",
            "nextStatement": MotaActionBlocks.nameMapList
        },
        "generFunc": function(block) {
            var code = MotaActionFunctions.defaultCode('nameMapEmpty',eval('['+MotaActionBlocks['nameMapEmpty'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('nameMapEmpty',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('nameMapEmpty',inputs,next,isShadow,comment,attribute);
        }
    },
    "splitImages_m": {
        "type": "statement",
        "json": {
            "type": "splitImages_m",
            "message0": "图片切分（你可以将一张png格式的大图切分为若干小图） %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "splitImages",
                    "check": MotaActionBlocks.splitImagesList
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 250
        },
        "generFunc": function(block) {
            var splitImages = Blockly.JavaScript.statementToCode(block, 'splitImages');
            if (splitImages==='') {
                throw new OmitedError(block,'splitImages','splitImages_m');
            }
            var code = MotaActionFunctions.defaultCode('splitImages_m',eval('['+MotaActionBlocks['splitImages_m'].args.join(',')+']'),block);
            return code;
        },
        "args": ["splitImages"],
        "argsType": ["statement"],
        "argsGrammarName": ["splitImagesList"],
        "omitted": [false],
        "multi": [true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('splitImages_m',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('splitImages_m',inputs,next,isShadow,comment,attribute);
        }
    },
    "splitImagesOne": {
        "type": "statement",
        "json": {
            "type": "splitImagesOne",
            "message0": "图片切分项 图片名 %1 每个小图宽度 %2 高度 %3 生成小图的前缀 %4",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "name"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "width"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "height"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "prefix"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "splitImagesOne",
            "nextStatement": MotaActionBlocks.splitImagesList
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            if (name==='') {
                throw new OmitedError(block,'name','splitImagesOne');
            }
            name = MotaActionFunctions.pre('EvalString')(name,block,'name','splitImagesOne');
            var width = block.getFieldValue('width');
            width = MotaActionFunctions.pre('Int')(width,block,'width','splitImagesOne');
            var height = block.getFieldValue('height');
            height = MotaActionFunctions.pre('Int')(height,block,'height','splitImagesOne');
            var prefix = block.getFieldValue('prefix');
            if (prefix==='') {
                throw new OmitedError(block,'prefix','splitImagesOne');
            }
            prefix = MotaActionFunctions.pre('EvalString')(prefix,block,'prefix','splitImagesOne');
            var code = MotaActionFunctions.defaultCode('splitImagesOne',eval('['+MotaActionBlocks['splitImagesOne'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","width","height","prefix"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["EvalString","Int","Int","EvalString"],
        "omitted": [false,false,false,false],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('splitImagesOne',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('splitImagesOne',inputs,next,isShadow,comment,attribute);
        }
    },
    "splitImagesEmpty": {
        "type": "statement",
        "json": {
            "type": "splitImagesEmpty",
            "message0": " ",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "splitImagesEmpty",
            "nextStatement": MotaActionBlocks.splitImagesList
        },
        "generFunc": function(block) {
            var code = MotaActionFunctions.defaultCode('splitImagesEmpty',eval('['+MotaActionBlocks['splitImagesEmpty'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('splitImagesEmpty',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('splitImagesEmpty',inputs,next,isShadow,comment,attribute);
        }
    },
    "text_0_s": {
        "type": "statement",
        "json": {
            "type": "text_0_s",
            "message0": "显示文章 : %1",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString_Multi,{
                    "name": "text"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "text_0_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var text = block.getFieldValue('text');
            if (text==='') {
                throw new OmitedError(block,'text','text_0_s');
            }
            text = MotaActionFunctions.pre('EvalString_Multi')(text,block,'text','text_0_s');
            var code = MotaActionFunctions.defaultCode('text_0_s',eval('['+MotaActionBlocks['text_0_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["text"],
        "argsType": ["field"],
        "argsGrammarName": ["EvalString_Multi"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('text_0_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('text_0_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "text_1_s": {
        "type": "statement",
        "json": {
            "type": "text_1_s",
            "message0": "标题 %1 图像 %2 对话框效果 %3 起点 px %4 py %5 宽 %6 编号 %7 不等待操作 %8 %9 %10",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "title"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "icon"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "effective"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "px"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "py"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "width"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "code"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.EvalString_Multi,{
                    "name": "text"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "text_1_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var title = block.getFieldValue('title');
            title = MotaActionFunctions.pre('EvalString')(title,block,'title','text_1_s');
            var icon = block.getFieldValue('icon');
            icon = MotaActionFunctions.pre('EvalString')(icon,block,'icon','text_1_s');
            var effective = block.getFieldValue('effective');
            effective = MotaActionFunctions.pre('EvalString')(effective,block,'effective','text_1_s');
            var px = block.getFieldValue('px');
            px = MotaActionFunctions.pre('PosString')(px,block,'px','text_1_s');
            var py = block.getFieldValue('py');
            py = MotaActionFunctions.pre('PosString')(py,block,'py','text_1_s');
            var width = block.getFieldValue('width');
            width = MotaActionFunctions.pre('PosString')(width,block,'width','text_1_s');
            var code = block.getFieldValue('code');
            code = MotaActionFunctions.pre('Int')(code,block,'code','text_1_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','text_1_s');
            var text = block.getFieldValue('text');
            if (text==='') {
                throw new OmitedError(block,'text','text_1_s');
            }
            text = MotaActionFunctions.pre('EvalString_Multi')(text,block,'text','text_1_s');
            var code = MotaActionFunctions.defaultCode('text_1_s',eval('['+MotaActionBlocks['text_1_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["title","icon","effective","px","py","width","code","async","text"],
        "argsType": ["field","field","field","field","field","field","field","field","field"],
        "argsGrammarName": ["EvalString","EvalString","EvalString","PosString","PosString","PosString","Int","Bool","EvalString_Multi"],
        "omitted": [true,true,true,true,true,true,false,false,false],
        "multi": [false,false,false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('text_1_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('text_1_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "text_2_s": {
        "type": "statement",
        "json": {
            "type": "text_2_s",
            "message0": "标题 %1 图像 %2 对话框效果 %3 起点 px %4 py %5 宽 %6 编号 %7 不等待操作 %8 %9 %10 %11 %12",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "title"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "icon"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "effective"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "px"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "py"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "width"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "code"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.EvalString_Multi,{
                    "name": "text"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "draw",
                    "check": MotaActionBlocks.textDrawingList
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "text_2_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var title = block.getFieldValue('title');
            title = MotaActionFunctions.pre('EvalString')(title,block,'title','text_2_s');
            var icon = block.getFieldValue('icon');
            icon = MotaActionFunctions.pre('EvalString')(icon,block,'icon','text_2_s');
            var effective = block.getFieldValue('effective');
            effective = MotaActionFunctions.pre('EvalString')(effective,block,'effective','text_2_s');
            var px = block.getFieldValue('px');
            px = MotaActionFunctions.pre('PosString')(px,block,'px','text_2_s');
            var py = block.getFieldValue('py');
            py = MotaActionFunctions.pre('PosString')(py,block,'py','text_2_s');
            var width = block.getFieldValue('width');
            width = MotaActionFunctions.pre('PosString')(width,block,'width','text_2_s');
            var code = block.getFieldValue('code');
            code = MotaActionFunctions.pre('Int')(code,block,'code','text_2_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','text_2_s');
            var text = block.getFieldValue('text');
            if (text==='') {
                throw new OmitedError(block,'text','text_2_s');
            }
            text = MotaActionFunctions.pre('EvalString_Multi')(text,block,'text','text_2_s');
            var draw = Blockly.JavaScript.statementToCode(block, 'draw');
            var code = MotaActionFunctions.defaultCode('text_2_s',eval('['+MotaActionBlocks['text_2_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["title","icon","effective","px","py","width","code","async","text","draw"],
        "argsType": ["field","field","field","field","field","field","field","field","field","statement"],
        "argsGrammarName": ["EvalString","EvalString","EvalString","PosString","PosString","PosString","Int","Bool","EvalString_Multi","textDrawingList"],
        "omitted": [true,true,true,true,true,true,false,false,false,true],
        "multi": [false,false,false,false,false,false,false,false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('text_2_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('text_2_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "textDrawing": {
        "type": "statement",
        "json": {
            "type": "textDrawing",
            "message0": "立绘 %1 翻转 %2 绘制坐标 x %3 y %4 宽 %5 高 %6 %7 裁剪坐标 x %8 y %9 宽 %10 高 %11 不透明度 %12 旋转角度 %13",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "name"
                }),
                Object.assign({},MotaActionBlocks.Reverse_List,{
                    "name": "reverse"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "w"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "h"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "sx"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "sy"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "sw"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "sh"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "opacity"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "angle"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "textDrawing",
            "nextStatement": MotaActionBlocks.textDrawingList
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            if (name==='') {
                throw new OmitedError(block,'name','textDrawing');
            }
            name = MotaActionFunctions.pre('EvalString')(name,block,'name','textDrawing');
            var reverse = block.getFieldValue('reverse');
            reverse = MotaActionFunctions.pre('Reverse_List')(reverse,block,'reverse','textDrawing');
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','textDrawing');
            }
            x = MotaActionFunctions.pre('IntString')(x,block,'x','textDrawing');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','textDrawing');
            }
            y = MotaActionFunctions.pre('IntString')(y,block,'y','textDrawing');
            var w = block.getFieldValue('w');
            w = MotaActionFunctions.pre('IntString')(w,block,'w','textDrawing');
            var h = block.getFieldValue('h');
            h = MotaActionFunctions.pre('IntString')(h,block,'h','textDrawing');
            var sx = block.getFieldValue('sx');
            sx = MotaActionFunctions.pre('IntString')(sx,block,'sx','textDrawing');
            var sy = block.getFieldValue('sy');
            sy = MotaActionFunctions.pre('IntString')(sy,block,'sy','textDrawing');
            var sw = block.getFieldValue('sw');
            sw = MotaActionFunctions.pre('IntString')(sw,block,'sw','textDrawing');
            var sh = block.getFieldValue('sh');
            sh = MotaActionFunctions.pre('IntString')(sh,block,'sh','textDrawing');
            var opacity = block.getFieldValue('opacity');
            opacity = MotaActionFunctions.pre('EvalString')(opacity,block,'opacity','textDrawing');
            var angle = block.getFieldValue('angle');
            angle = MotaActionFunctions.pre('IntString')(angle,block,'angle','textDrawing');
            var code = MotaActionFunctions.defaultCode('textDrawing',eval('['+MotaActionBlocks['textDrawing'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","reverse","x","y","w","h","sx","sy","sw","sh","opacity","angle"],
        "argsType": ["field","field","field","field","field","field","field","field","field","field","field","field"],
        "argsGrammarName": ["EvalString","Reverse_List","IntString","IntString","IntString","IntString","IntString","IntString","IntString","IntString","EvalString","IntString"],
        "omitted": [false,false,false,false,true,true,true,true,true,true,true,true],
        "multi": [false,false,false,false,false,false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('textDrawing',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('textDrawing',inputs,next,isShadow,comment,attribute);
        }
    },
    "textDrawingEmpty": {
        "type": "statement",
        "json": {
            "type": "textDrawingEmpty",
            "message0": " ",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "textDrawingEmpty",
            "nextStatement": MotaActionBlocks.textDrawingList
        },
        "generFunc": function(block) {
            var code = MotaActionFunctions.defaultCode('textDrawingEmpty',eval('['+MotaActionBlocks['textDrawingEmpty'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('textDrawingEmpty',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('textDrawingEmpty',inputs,next,isShadow,comment,attribute);
        }
    },
    "moveTextBox_s": {
        "type": "statement",
        "json": {
            "type": "moveTextBox_s",
            "message0": "移动对话框 : %1 px %2 py %3 使用增量 %4 移动方式 %5 动画时间 %6 不等待执行完毕 %7",
            "args0": [
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "code"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "px"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "py"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "relative"
                }),
                Object.assign({},MotaActionBlocks.MoveMode_List,{
                    "name": "moveMode"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "moveTextBox_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var code = block.getFieldValue('code');
            code = MotaActionFunctions.pre('Int')(code,block,'code','moveTextBox_s');
            var px = block.getFieldValue('px');
            if (px==='') {
                throw new OmitedError(block,'px','moveTextBox_s');
            }
            px = MotaActionFunctions.pre('PosString')(px,block,'px','moveTextBox_s');
            var py = block.getFieldValue('py');
            if (py==='') {
                throw new OmitedError(block,'py','moveTextBox_s');
            }
            py = MotaActionFunctions.pre('PosString')(py,block,'py','moveTextBox_s');
            var relative = block.getFieldValue('relative') === 'TRUE';
            relative = MotaActionFunctions.pre('Bool')(relative,block,'relative','moveTextBox_s');
            var moveMode = block.getFieldValue('moveMode');
            moveMode = MotaActionFunctions.pre('MoveMode_List')(moveMode,block,'moveMode','moveTextBox_s');
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('Int')(time,block,'time','moveTextBox_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','moveTextBox_s');
            var code = MotaActionFunctions.defaultCode('moveTextBox_s',eval('['+MotaActionBlocks['moveTextBox_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["code","px","py","relative","moveMode","time","async"],
        "argsType": ["field","field","field","field","field","field","field"],
        "argsGrammarName": ["Int","PosString","PosString","Bool","MoveMode_List","Int","Bool"],
        "omitted": [false,false,false,false,false,false,false],
        "multi": [false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('moveTextBox_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('moveTextBox_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "clearTextBox_s": {
        "type": "statement",
        "json": {
            "type": "clearTextBox_s",
            "message0": "清除对话框 : %1",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "code"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "clearTextBox_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var code = block.getFieldValue('code');
            code = MotaActionFunctions.pre('EvalString')(code,block,'code','clearTextBox_s');
            var code = MotaActionFunctions.defaultCode('clearTextBox_s',eval('['+MotaActionBlocks['clearTextBox_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["code"],
        "argsType": ["field"],
        "argsGrammarName": ["EvalString"],
        "omitted": [true],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('clearTextBox_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('clearTextBox_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "comment_s": {
        "type": "statement",
        "json": {
            "type": "comment_s",
            "message0": "添加注释 : %1",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString_Multi,{
                    "name": "text"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "comment_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var text = block.getFieldValue('text');
            if (text==='') {
                throw new OmitedError(block,'text','comment_s');
            }
            text = MotaActionFunctions.pre('EvalString_Multi')(text,block,'text','comment_s');
            var code = MotaActionFunctions.defaultCode('comment_s',eval('['+MotaActionBlocks['comment_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["text"],
        "argsType": ["field"],
        "argsGrammarName": ["EvalString_Multi"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('comment_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('comment_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "autoText_s": {
        "type": "statement",
        "json": {
            "type": "autoText_s",
            "message0": "自动剧情文本: 标题 %1 图像 %2 对话框效果 %3 时间 %4 %5 %6",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "title"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "icon"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "effective"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "time"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.EvalString_Multi,{
                    "name": "text"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "autoText_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var title = block.getFieldValue('title');
            title = MotaActionFunctions.pre('EvalString')(title,block,'title','autoText_s');
            var icon = block.getFieldValue('icon');
            icon = MotaActionFunctions.pre('EvalString')(icon,block,'icon','autoText_s');
            var effective = block.getFieldValue('effective');
            effective = MotaActionFunctions.pre('EvalString')(effective,block,'effective','autoText_s');
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('Int')(time,block,'time','autoText_s');
            var text = block.getFieldValue('text');
            if (text==='') {
                throw new OmitedError(block,'text','autoText_s');
            }
            text = MotaActionFunctions.pre('EvalString_Multi')(text,block,'text','autoText_s');
            var code = MotaActionFunctions.defaultCode('autoText_s',eval('['+MotaActionBlocks['autoText_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["title","icon","effective","time","text"],
        "argsType": ["field","field","field","field","field"],
        "argsGrammarName": ["EvalString","EvalString","EvalString","Int","EvalString_Multi"],
        "omitted": [true,true,true,false,false],
        "multi": [false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('autoText_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('autoText_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "scrollText_s": {
        "type": "statement",
        "json": {
            "type": "scrollText_s",
            "message0": "滚动剧情文本: 时间 %1 行距 %2 不等待执行完毕 %3 %4 %5",
            "args0": [
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.Number,{
                    "name": "lineHeight"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.EvalString_Multi,{
                    "name": "text"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "scrollText_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('Int')(time,block,'time','scrollText_s');
            var lineHeight = block.getFieldValue('lineHeight');
            lineHeight = MotaActionFunctions.pre('Number')(lineHeight,block,'lineHeight','scrollText_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','scrollText_s');
            var text = block.getFieldValue('text');
            if (text==='') {
                throw new OmitedError(block,'text','scrollText_s');
            }
            text = MotaActionFunctions.pre('EvalString_Multi')(text,block,'text','scrollText_s');
            var code = MotaActionFunctions.defaultCode('scrollText_s',eval('['+MotaActionBlocks['scrollText_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["time","lineHeight","async","text"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["Int","Number","Bool","EvalString_Multi"],
        "omitted": [false,false,true,false],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('scrollText_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('scrollText_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "setText_s": {
        "type": "statement",
        "json": {
            "type": "setText_s",
            "message0": "设置剧情文本的属性 位置 %1 偏移像素 %2 对齐 %3 粗体 %4 %5 标题颜色 %6 %7 正文颜色 %8 %9 背景色 %10 %11 %12 标题大小 %13 正文大小 %14 行距 %15 打字间隔 %16 字符间距 %17 淡入淡出时间 %18",
            "args0": [
                Object.assign({},MotaActionBlocks.SetTextPosition_List,{
                    "name": "position"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "offset"
                }),
                Object.assign({},MotaActionBlocks.TextAlign_List,{
                    "name": "align"
                }),
                Object.assign({},MotaActionBlocks.B_1_List,{
                    "name": "bold"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.ColorString,{
                    "name": "titleColorS"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "titleColor"
                }),
                Object.assign({},MotaActionBlocks.ColorString,{
                    "name": "textColorS"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "textColor"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "background"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "bgColor"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "titleSize"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "textSize"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "lineHeight"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "typeTime"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "letterSpacing"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "animateTime"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "setText_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var position = block.getFieldValue('position');
            position = MotaActionFunctions.pre('SetTextPosition_List')(position,block,'position','setText_s');
            var offset = block.getFieldValue('offset');
            offset = MotaActionFunctions.pre('IntString')(offset,block,'offset','setText_s');
            var align = block.getFieldValue('align');
            align = MotaActionFunctions.pre('TextAlign_List')(align,block,'align','setText_s');
            var bold = block.getFieldValue('bold');
            bold = MotaActionFunctions.pre('B_1_List')(bold,block,'bold','setText_s');
            var titleColorS = block.getFieldValue('titleColorS');
            titleColorS = MotaActionFunctions.pre('ColorString')(titleColorS,block,'titleColorS','setText_s');
            var titleColor = block.getFieldValue('titleColor');
            titleColor = MotaActionFunctions.pre('Colour')(titleColor,block,'titleColor','setText_s');
            var textColorS = block.getFieldValue('textColorS');
            textColorS = MotaActionFunctions.pre('ColorString')(textColorS,block,'textColorS','setText_s');
            var textColor = block.getFieldValue('textColor');
            textColor = MotaActionFunctions.pre('Colour')(textColor,block,'textColor','setText_s');
            var background = block.getFieldValue('background');
            background = MotaActionFunctions.pre('EvalString')(background,block,'background','setText_s');
            var bgColor = block.getFieldValue('bgColor');
            bgColor = MotaActionFunctions.pre('Colour')(bgColor,block,'bgColor','setText_s');
            var titleSize = block.getFieldValue('titleSize');
            titleSize = MotaActionFunctions.pre('IntString')(titleSize,block,'titleSize','setText_s');
            var textSize = block.getFieldValue('textSize');
            textSize = MotaActionFunctions.pre('IntString')(textSize,block,'textSize','setText_s');
            var lineHeight = block.getFieldValue('lineHeight');
            lineHeight = MotaActionFunctions.pre('IntString')(lineHeight,block,'lineHeight','setText_s');
            var typeTime = block.getFieldValue('typeTime');
            typeTime = MotaActionFunctions.pre('IntString')(typeTime,block,'typeTime','setText_s');
            var letterSpacing = block.getFieldValue('letterSpacing');
            letterSpacing = MotaActionFunctions.pre('IntString')(letterSpacing,block,'letterSpacing','setText_s');
            var animateTime = block.getFieldValue('animateTime');
            animateTime = MotaActionFunctions.pre('IntString')(animateTime,block,'animateTime','setText_s');
            var code = MotaActionFunctions.defaultCode('setText_s',eval('['+MotaActionBlocks['setText_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["position","offset","align","bold","titleColorS","titleColor","textColorS","textColor","background","bgColor","titleSize","textSize","lineHeight","typeTime","letterSpacing","animateTime"],
        "argsType": ["field","field","field","field","field","field","field","field","field","field","field","field","field","field","field","field"],
        "argsGrammarName": ["SetTextPosition_List","IntString","TextAlign_List","B_1_List","ColorString","Colour","ColorString","Colour","EvalString","Colour","IntString","IntString","IntString","IntString","IntString","IntString"],
        "omitted": [false,true,true,true,true,false,true,false,true,false,true,true,true,true,true,true],
        "multi": [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('setText_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('setText_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "tip_s": {
        "type": "statement",
        "json": {
            "type": "tip_s",
            "message0": "显示提示 : %1 图标ID %2",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "text"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "icon"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "tip_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var text = block.getFieldValue('text');
            if (text==='') {
                throw new OmitedError(block,'text','tip_s');
            }
            text = MotaActionFunctions.pre('EvalString')(text,block,'text','tip_s');
            var icon = block.getFieldValue('icon');
            icon = MotaActionFunctions.pre('IdString')(icon,block,'icon','tip_s');
            var code = MotaActionFunctions.defaultCode('tip_s',eval('['+MotaActionBlocks['tip_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["text","icon"],
        "argsType": ["field","field"],
        "argsGrammarName": ["EvalString","IdString"],
        "omitted": [false,true],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('tip_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('tip_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "setValue_s": {
        "type": "statement",
        "json": {
            "type": "setValue_s",
            "message0": "数值操作 : 名称 %1 %2 %3 不刷新状态栏 %4",
            "args0": [
                {
                    "type": "input_value",
                    "name": "name",
                    "check": "idString_e"
                },
                Object.assign({},MotaActionBlocks.AssignOperator_List,{
                    "name": "operator"
                }),
                {
                    "type": "input_value",
                    "name": "value",
                    "check": MotaActionBlocks.expression
                },
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "norefresh"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "setValue_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var name = Blockly.JavaScript.valueToCode(block, 'name', 
              Blockly.JavaScript.ORDER_ATOMIC);
            if (name==='') {
                throw new OmitedError(block,'name','setValue_s');
            }
            var operator = block.getFieldValue('operator');
            operator = MotaActionFunctions.pre('AssignOperator_List')(operator,block,'operator','setValue_s');
            var value = Blockly.JavaScript.valueToCode(block, 'value', 
              Blockly.JavaScript.ORDER_ATOMIC);
            if (value==='') {
                throw new OmitedError(block,'value','setValue_s');
            }
            var norefresh = block.getFieldValue('norefresh') === 'TRUE';
            norefresh = MotaActionFunctions.pre('Bool')(norefresh,block,'norefresh','setValue_s');
            var code = MotaActionFunctions.defaultCode('setValue_s',eval('['+MotaActionBlocks['setValue_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","operator","value","norefresh"],
        "argsType": ["value","field","value","field"],
        "argsGrammarName": ["idString_e","AssignOperator_List","expression","Bool"],
        "omitted": [false,false,false,false],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('setValue_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('setValue_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "setEnemy_s": {
        "type": "statement",
        "json": {
            "type": "setEnemy_s",
            "message0": "设置怪物属性 : 怪物ID %1 的 %2 %3 %4 不刷新显伤 %5",
            "args0": [
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "id"
                }),
                Object.assign({},MotaActionBlocks.EnemyId_List,{
                    "name": "property"
                }),
                Object.assign({},MotaActionBlocks.AssignOperator_List,{
                    "name": "operator"
                }),
                {
                    "type": "input_value",
                    "name": "value",
                    "check": MotaActionBlocks.expression
                },
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "norefresh"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "setEnemy_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','setEnemy_s');
            }
            id = MotaActionFunctions.pre('IdString')(id,block,'id','setEnemy_s');
            var property = block.getFieldValue('property');
            property = MotaActionFunctions.pre('EnemyId_List')(property,block,'property','setEnemy_s');
            var operator = block.getFieldValue('operator');
            operator = MotaActionFunctions.pre('AssignOperator_List')(operator,block,'operator','setEnemy_s');
            var value = Blockly.JavaScript.valueToCode(block, 'value', 
              Blockly.JavaScript.ORDER_ATOMIC);
            if (value==='') {
                throw new OmitedError(block,'value','setEnemy_s');
            }
            var norefresh = block.getFieldValue('norefresh') === 'TRUE';
            norefresh = MotaActionFunctions.pre('Bool')(norefresh,block,'norefresh','setEnemy_s');
            var code = MotaActionFunctions.defaultCode('setEnemy_s',eval('['+MotaActionBlocks['setEnemy_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id","property","operator","value","norefresh"],
        "argsType": ["field","field","field","value","field"],
        "argsGrammarName": ["IdString","EnemyId_List","AssignOperator_List","expression","Bool"],
        "omitted": [false,false,false,false,false],
        "multi": [false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('setEnemy_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('setEnemy_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "setEquip_s": {
        "type": "statement",
        "json": {
            "type": "setEquip_s",
            "message0": "设置装备属性 : 装备ID %1 %2 的 %3 %4 %5",
            "args0": [
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "id"
                }),
                Object.assign({},MotaActionBlocks.EquipValueType_List,{
                    "name": "valueType"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "property"
                }),
                Object.assign({},MotaActionBlocks.AssignOperator_List,{
                    "name": "operator"
                }),
                {
                    "type": "input_value",
                    "name": "value",
                    "check": MotaActionBlocks.expression
                }
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "setEquip_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','setEquip_s');
            }
            id = MotaActionFunctions.pre('IdString')(id,block,'id','setEquip_s');
            var valueType = block.getFieldValue('valueType');
            valueType = MotaActionFunctions.pre('EquipValueType_List')(valueType,block,'valueType','setEquip_s');
            var property = block.getFieldValue('property');
            if (property==='') {
                throw new OmitedError(block,'property','setEquip_s');
            }
            property = MotaActionFunctions.pre('EvalString')(property,block,'property','setEquip_s');
            var operator = block.getFieldValue('operator');
            operator = MotaActionFunctions.pre('AssignOperator_List')(operator,block,'operator','setEquip_s');
            var value = Blockly.JavaScript.valueToCode(block, 'value', 
              Blockly.JavaScript.ORDER_ATOMIC);
            if (value==='') {
                throw new OmitedError(block,'value','setEquip_s');
            }
            var code = MotaActionFunctions.defaultCode('setEquip_s',eval('['+MotaActionBlocks['setEquip_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id","valueType","property","operator","value"],
        "argsType": ["field","field","field","field","value"],
        "argsGrammarName": ["IdString","EquipValueType_List","EvalString","AssignOperator_List","expression"],
        "omitted": [false,false,false,false,false],
        "multi": [false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('setEquip_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('setEquip_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "setEnemyOnPoint_s": {
        "type": "statement",
        "json": {
            "type": "setEnemyOnPoint_s",
            "message0": "设置某点怪物属性 : x %1 , y %2 楼层 %3 的 %4 %5 %6 不刷新显伤 %7",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "floorId"
                }),
                Object.assign({},MotaActionBlocks.EnemyPoint_List,{
                    "name": "property"
                }),
                Object.assign({},MotaActionBlocks.AssignOperator_List,{
                    "name": "operator"
                }),
                {
                    "type": "input_value",
                    "name": "value",
                    "check": MotaActionBlocks.expression
                },
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "norefresh"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "setEnemyOnPoint_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            x = MotaActionFunctions.pre('EvalString')(x,block,'x','setEnemyOnPoint_s');
            var y = block.getFieldValue('y');
            y = MotaActionFunctions.pre('EvalString')(y,block,'y','setEnemyOnPoint_s');
            var floorId = block.getFieldValue('floorId');
            floorId = MotaActionFunctions.pre('IdString')(floorId,block,'floorId','setEnemyOnPoint_s');
            var property = block.getFieldValue('property');
            property = MotaActionFunctions.pre('EnemyPoint_List')(property,block,'property','setEnemyOnPoint_s');
            var operator = block.getFieldValue('operator');
            operator = MotaActionFunctions.pre('AssignOperator_List')(operator,block,'operator','setEnemyOnPoint_s');
            var value = Blockly.JavaScript.valueToCode(block, 'value', 
              Blockly.JavaScript.ORDER_ATOMIC);
            if (value==='') {
                throw new OmitedError(block,'value','setEnemyOnPoint_s');
            }
            var norefresh = block.getFieldValue('norefresh') === 'TRUE';
            norefresh = MotaActionFunctions.pre('Bool')(norefresh,block,'norefresh','setEnemyOnPoint_s');
            var code = MotaActionFunctions.defaultCode('setEnemyOnPoint_s',eval('['+MotaActionBlocks['setEnemyOnPoint_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y","floorId","property","operator","value","norefresh"],
        "argsType": ["field","field","field","field","field","value","field"],
        "argsGrammarName": ["EvalString","EvalString","IdString","EnemyPoint_List","AssignOperator_List","expression","Bool"],
        "omitted": [true,true,true,false,false,false,false],
        "multi": [false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('setEnemyOnPoint_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('setEnemyOnPoint_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "resetEnemyOnPoint_s": {
        "type": "statement",
        "json": {
            "type": "resetEnemyOnPoint_s",
            "message0": "重置某点怪物属性 : x %1 , y %2 楼层 %3 不刷新显伤 %4",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "floorId"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "norefresh"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "resetEnemyOnPoint_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            x = MotaActionFunctions.pre('EvalString')(x,block,'x','resetEnemyOnPoint_s');
            var y = block.getFieldValue('y');
            y = MotaActionFunctions.pre('EvalString')(y,block,'y','resetEnemyOnPoint_s');
            var floorId = block.getFieldValue('floorId');
            floorId = MotaActionFunctions.pre('IdString')(floorId,block,'floorId','resetEnemyOnPoint_s');
            var norefresh = block.getFieldValue('norefresh') === 'TRUE';
            norefresh = MotaActionFunctions.pre('Bool')(norefresh,block,'norefresh','resetEnemyOnPoint_s');
            var code = MotaActionFunctions.defaultCode('resetEnemyOnPoint_s',eval('['+MotaActionBlocks['resetEnemyOnPoint_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y","floorId","norefresh"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["EvalString","EvalString","IdString","Bool"],
        "omitted": [true,true,true,false],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('resetEnemyOnPoint_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('resetEnemyOnPoint_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "moveEnemyOnPoint_s": {
        "type": "statement",
        "json": {
            "type": "moveEnemyOnPoint_s",
            "message0": "移动某点怪物属性 : 起点 x %1 , y %2 终点 x %3 y %4 楼层 %5 不刷新显伤 %6",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "fromX"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "fromY"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "toX"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "toY"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "floorId"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "norefresh"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "moveEnemyOnPoint_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var fromX = block.getFieldValue('fromX');
            fromX = MotaActionFunctions.pre('PosString')(fromX,block,'fromX','moveEnemyOnPoint_s');
            var fromY = block.getFieldValue('fromY');
            fromY = MotaActionFunctions.pre('PosString')(fromY,block,'fromY','moveEnemyOnPoint_s');
            var toX = block.getFieldValue('toX');
            toX = MotaActionFunctions.pre('PosString')(toX,block,'toX','moveEnemyOnPoint_s');
            var toY = block.getFieldValue('toY');
            toY = MotaActionFunctions.pre('PosString')(toY,block,'toY','moveEnemyOnPoint_s');
            var floorId = block.getFieldValue('floorId');
            floorId = MotaActionFunctions.pre('IdString')(floorId,block,'floorId','moveEnemyOnPoint_s');
            var norefresh = block.getFieldValue('norefresh') === 'TRUE';
            norefresh = MotaActionFunctions.pre('Bool')(norefresh,block,'norefresh','moveEnemyOnPoint_s');
            var code = MotaActionFunctions.defaultCode('moveEnemyOnPoint_s',eval('['+MotaActionBlocks['moveEnemyOnPoint_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["fromX","fromY","toX","toY","floorId","norefresh"],
        "argsType": ["field","field","field","field","field","field"],
        "argsGrammarName": ["PosString","PosString","PosString","PosString","IdString","Bool"],
        "omitted": [true,true,true,true,true,false],
        "multi": [false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('moveEnemyOnPoint_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('moveEnemyOnPoint_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "moveEnemyOnPoint_1_s": {
        "type": "statement",
        "json": {
            "type": "moveEnemyOnPoint_1_s",
            "message0": "移动某点怪物属性 : 起点 x %1 , y %2 增量 dx %3 dy %4 楼层 %5 不刷新显伤 %6",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "fromX"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "fromY"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "dx"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "dy"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "floorId"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "norefresh"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "moveEnemyOnPoint_1_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var fromX = block.getFieldValue('fromX');
            fromX = MotaActionFunctions.pre('PosString')(fromX,block,'fromX','moveEnemyOnPoint_1_s');
            var fromY = block.getFieldValue('fromY');
            fromY = MotaActionFunctions.pre('PosString')(fromY,block,'fromY','moveEnemyOnPoint_1_s');
            var dx = block.getFieldValue('dx');
            dx = MotaActionFunctions.pre('PosString')(dx,block,'dx','moveEnemyOnPoint_1_s');
            var dy = block.getFieldValue('dy');
            dy = MotaActionFunctions.pre('PosString')(dy,block,'dy','moveEnemyOnPoint_1_s');
            var floorId = block.getFieldValue('floorId');
            floorId = MotaActionFunctions.pre('IdString')(floorId,block,'floorId','moveEnemyOnPoint_1_s');
            var norefresh = block.getFieldValue('norefresh') === 'TRUE';
            norefresh = MotaActionFunctions.pre('Bool')(norefresh,block,'norefresh','moveEnemyOnPoint_1_s');
            var code = MotaActionFunctions.defaultCode('moveEnemyOnPoint_1_s',eval('['+MotaActionBlocks['moveEnemyOnPoint_1_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["fromX","fromY","dx","dy","floorId","norefresh"],
        "argsType": ["field","field","field","field","field","field"],
        "argsGrammarName": ["PosString","PosString","PosString","PosString","IdString","Bool"],
        "omitted": [true,true,true,true,true,false],
        "multi": [false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('moveEnemyOnPoint_1_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('moveEnemyOnPoint_1_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "setFloor_s": {
        "type": "statement",
        "json": {
            "type": "setFloor_s",
            "message0": "设置楼层属性 : %1 楼层名 %2 为 %3",
            "args0": [
                Object.assign({},MotaActionBlocks.Floor_Meta_List,{
                    "name": "property"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "floorId"
                }),
                Object.assign({},MotaActionBlocks.JsonEvalString,{
                    "name": "value"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "setFloor_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var property = block.getFieldValue('property');
            property = MotaActionFunctions.pre('Floor_Meta_List')(property,block,'property','setFloor_s');
            var floorId = block.getFieldValue('floorId');
            floorId = MotaActionFunctions.pre('IdString')(floorId,block,'floorId','setFloor_s');
            var value = block.getFieldValue('value');
            if (value==='') {
                throw new OmitedError(block,'value','setFloor_s');
            }
            value = MotaActionFunctions.pre('JsonEvalString')(value,block,'value','setFloor_s');
            var code = MotaActionFunctions.defaultCode('setFloor_s',eval('['+MotaActionBlocks['setFloor_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["property","floorId","value"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["Floor_Meta_List","IdString","JsonEvalString"],
        "omitted": [false,true,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('setFloor_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('setFloor_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "setGlobalAttribute_s": {
        "type": "statement",
        "json": {
            "type": "setGlobalAttribute_s",
            "message0": "设置全局属性 : %1 为 %2",
            "args0": [
                Object.assign({},MotaActionBlocks.Global_Attribute_List,{
                    "name": "name"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "value"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "setGlobalAttribute_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            name = MotaActionFunctions.pre('Global_Attribute_List')(name,block,'name','setGlobalAttribute_s');
            var value = block.getFieldValue('value');
            if (value==='') {
                throw new OmitedError(block,'value','setGlobalAttribute_s');
            }
            value = MotaActionFunctions.pre('EvalString')(value,block,'value','setGlobalAttribute_s');
            var code = MotaActionFunctions.defaultCode('setGlobalAttribute_s',eval('['+MotaActionBlocks['setGlobalAttribute_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","value"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Global_Attribute_List","EvalString"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('setGlobalAttribute_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('setGlobalAttribute_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "setGlobalValue_s": {
        "type": "statement",
        "json": {
            "type": "setGlobalValue_s",
            "message0": "设置全局数值 : %1 为 %2",
            "args0": [
                Object.assign({},MotaActionBlocks.Global_Value_List,{
                    "name": "name"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "value"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "setGlobalValue_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            name = MotaActionFunctions.pre('Global_Value_List')(name,block,'name','setGlobalValue_s');
            var value = block.getFieldValue('value');
            if (value==='') {
                throw new OmitedError(block,'value','setGlobalValue_s');
            }
            value = MotaActionFunctions.pre('EvalString')(value,block,'value','setGlobalValue_s');
            var code = MotaActionFunctions.defaultCode('setGlobalValue_s',eval('['+MotaActionBlocks['setGlobalValue_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","value"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Global_Value_List","EvalString"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('setGlobalValue_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('setGlobalValue_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "setGlobalFlag_s": {
        "type": "statement",
        "json": {
            "type": "setGlobalFlag_s",
            "message0": "设置系统开关 : %1 %2",
            "args0": [
                Object.assign({},MotaActionBlocks.Global_Flag_List,{
                    "name": "name"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "value"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "setGlobalFlag_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            name = MotaActionFunctions.pre('Global_Flag_List')(name,block,'name','setGlobalFlag_s');
            var value = block.getFieldValue('value') === 'TRUE';
            value = MotaActionFunctions.pre('Bool')(value,block,'value','setGlobalFlag_s');
            var code = MotaActionFunctions.defaultCode('setGlobalFlag_s',eval('['+MotaActionBlocks['setGlobalFlag_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","value"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Global_Flag_List","Bool"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('setGlobalFlag_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('setGlobalFlag_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "setNameMap_s": {
        "type": "statement",
        "json": {
            "type": "setNameMap_s",
            "message0": "设置文件别名 : %1 为 %2",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "name"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "value"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "setNameMap_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            if (name==='') {
                throw new OmitedError(block,'name','setNameMap_s');
            }
            name = MotaActionFunctions.pre('EvalString')(name,block,'name','setNameMap_s');
            var value = block.getFieldValue('value');
            value = MotaActionFunctions.pre('EvalString')(value,block,'value','setNameMap_s');
            var code = MotaActionFunctions.defaultCode('setNameMap_s',eval('['+MotaActionBlocks['setNameMap_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","value"],
        "argsType": ["field","field"],
        "argsGrammarName": ["EvalString","EvalString"],
        "omitted": [false,true],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('setNameMap_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('setNameMap_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "show_s": {
        "type": "statement",
        "json": {
            "type": "show_s",
            "message0": "显示事件 x %1 , y %2 楼层 %3 动画时间 %4 不等待执行完毕 %5",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "floorId"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "show_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            x = MotaActionFunctions.pre('EvalString')(x,block,'x','show_s');
            var y = block.getFieldValue('y');
            y = MotaActionFunctions.pre('EvalString')(y,block,'y','show_s');
            var floorId = block.getFieldValue('floorId');
            floorId = MotaActionFunctions.pre('IdString')(floorId,block,'floorId','show_s');
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('IntString')(time,block,'time','show_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','show_s');
            var code = MotaActionFunctions.defaultCode('show_s',eval('['+MotaActionBlocks['show_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y","floorId","time","async"],
        "argsType": ["field","field","field","field","field"],
        "argsGrammarName": ["EvalString","EvalString","IdString","IntString","Bool"],
        "omitted": [true,true,true,true,true],
        "multi": [false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('show_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('show_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "hide_s": {
        "type": "statement",
        "json": {
            "type": "hide_s",
            "message0": "隐藏事件 x %1 , y %2 楼层 %3 同时删除 %4 动画时间 %5 不等待执行完毕 %6",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "floorId"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "remove"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "hide_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            x = MotaActionFunctions.pre('EvalString')(x,block,'x','hide_s');
            var y = block.getFieldValue('y');
            y = MotaActionFunctions.pre('EvalString')(y,block,'y','hide_s');
            var floorId = block.getFieldValue('floorId');
            floorId = MotaActionFunctions.pre('IdString')(floorId,block,'floorId','hide_s');
            var remove = block.getFieldValue('remove') === 'TRUE';
            remove = MotaActionFunctions.pre('Bool')(remove,block,'remove','hide_s');
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('IntString')(time,block,'time','hide_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','hide_s');
            var code = MotaActionFunctions.defaultCode('hide_s',eval('['+MotaActionBlocks['hide_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y","floorId","remove","time","async"],
        "argsType": ["field","field","field","field","field","field"],
        "argsGrammarName": ["EvalString","EvalString","IdString","Bool","IntString","Bool"],
        "omitted": [true,true,true,false,true,true],
        "multi": [false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('hide_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('hide_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "setBlockOpacity_s": {
        "type": "statement",
        "json": {
            "type": "setBlockOpacity_s",
            "message0": "设置图块不透明度 x %1 , y %2 楼层 %3 不透明度 %4 动画时间 %5 不等待执行完毕 %6",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "floorId"
                }),
                Object.assign({},MotaActionBlocks.Number,{
                    "name": "opacity"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "setBlockOpacity_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            x = MotaActionFunctions.pre('EvalString')(x,block,'x','setBlockOpacity_s');
            var y = block.getFieldValue('y');
            y = MotaActionFunctions.pre('EvalString')(y,block,'y','setBlockOpacity_s');
            var floorId = block.getFieldValue('floorId');
            floorId = MotaActionFunctions.pre('IdString')(floorId,block,'floorId','setBlockOpacity_s');
            var opacity = block.getFieldValue('opacity');
            opacity = MotaActionFunctions.pre('Number')(opacity,block,'opacity','setBlockOpacity_s');
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('IntString')(time,block,'time','setBlockOpacity_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','setBlockOpacity_s');
            var code = MotaActionFunctions.defaultCode('setBlockOpacity_s',eval('['+MotaActionBlocks['setBlockOpacity_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y","floorId","opacity","time","async"],
        "argsType": ["field","field","field","field","field","field"],
        "argsGrammarName": ["EvalString","EvalString","IdString","Number","IntString","Bool"],
        "omitted": [true,true,true,false,true,true],
        "multi": [false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('setBlockOpacity_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('setBlockOpacity_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "setBlockFilter_s": {
        "type": "statement",
        "json": {
            "type": "setBlockFilter_s",
            "message0": "设置图块特效 x %1 , y %2 楼层 %3 虚化 %4 色相 %5 灰度 %6 反色 %7 阴影 %8",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "floorId"
                }),
                Object.assign({},MotaActionBlocks.Number,{
                    "name": "blur"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "hue"
                }),
                Object.assign({},MotaActionBlocks.Number,{
                    "name": "grayscale"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "invert"
                }),
                Object.assign({},MotaActionBlocks.Number,{
                    "name": "shadow"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "setBlockFilter_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            x = MotaActionFunctions.pre('EvalString')(x,block,'x','setBlockFilter_s');
            var y = block.getFieldValue('y');
            y = MotaActionFunctions.pre('EvalString')(y,block,'y','setBlockFilter_s');
            var floorId = block.getFieldValue('floorId');
            floorId = MotaActionFunctions.pre('IdString')(floorId,block,'floorId','setBlockFilter_s');
            var blur = block.getFieldValue('blur');
            blur = MotaActionFunctions.pre('Number')(blur,block,'blur','setBlockFilter_s');
            var hue = block.getFieldValue('hue');
            hue = MotaActionFunctions.pre('Int')(hue,block,'hue','setBlockFilter_s');
            var grayscale = block.getFieldValue('grayscale');
            grayscale = MotaActionFunctions.pre('Number')(grayscale,block,'grayscale','setBlockFilter_s');
            var invert = block.getFieldValue('invert') === 'TRUE';
            invert = MotaActionFunctions.pre('Bool')(invert,block,'invert','setBlockFilter_s');
            var shadow = block.getFieldValue('shadow');
            shadow = MotaActionFunctions.pre('Number')(shadow,block,'shadow','setBlockFilter_s');
            var code = MotaActionFunctions.defaultCode('setBlockFilter_s',eval('['+MotaActionBlocks['setBlockFilter_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y","floorId","blur","hue","grayscale","invert","shadow"],
        "argsType": ["field","field","field","field","field","field","field","field"],
        "argsGrammarName": ["EvalString","EvalString","IdString","Number","Int","Number","Bool","Number"],
        "omitted": [true,true,true,false,false,false,false,false],
        "multi": [false,false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('setBlockFilter_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('setBlockFilter_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "trigger_s": {
        "type": "statement",
        "json": {
            "type": "trigger_s",
            "message0": "触发系统事件 x %1 , y %2",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "trigger_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            x = MotaActionFunctions.pre('PosString')(x,block,'x','trigger_s');
            var y = block.getFieldValue('y');
            y = MotaActionFunctions.pre('PosString')(y,block,'y','trigger_s');
            var code = MotaActionFunctions.defaultCode('trigger_s',eval('['+MotaActionBlocks['trigger_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y"],
        "argsType": ["field","field"],
        "argsGrammarName": ["PosString","PosString"],
        "omitted": [true,true],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('trigger_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('trigger_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "insert_1_s": {
        "type": "statement",
        "json": {
            "type": "insert_1_s",
            "message0": "插入公共事件 %1 参数列表 %2",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "name"
                }),
                Object.assign({},MotaActionBlocks.JsonEvalString,{
                    "name": "args"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "insert_1_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            if (name==='') {
                throw new OmitedError(block,'name','insert_1_s');
            }
            name = MotaActionFunctions.pre('EvalString')(name,block,'name','insert_1_s');
            var args = block.getFieldValue('args');
            args = MotaActionFunctions.pre('JsonEvalString')(args,block,'args','insert_1_s');
            var code = MotaActionFunctions.defaultCode('insert_1_s',eval('['+MotaActionBlocks['insert_1_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","args"],
        "argsType": ["field","field"],
        "argsGrammarName": ["EvalString","JsonEvalString"],
        "omitted": [false,true],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('insert_1_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('insert_1_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "insert_2_s": {
        "type": "statement",
        "json": {
            "type": "insert_2_s",
            "message0": "插入事件 x %1 , y %2 %3 楼层 %4 参数列表 %5",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.Event_List,{
                    "name": "which"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "floorId"
                }),
                Object.assign({},MotaActionBlocks.JsonEvalString,{
                    "name": "args"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "insert_2_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            x = MotaActionFunctions.pre('PosString')(x,block,'x','insert_2_s');
            var y = block.getFieldValue('y');
            y = MotaActionFunctions.pre('PosString')(y,block,'y','insert_2_s');
            var which = block.getFieldValue('which');
            which = MotaActionFunctions.pre('Event_List')(which,block,'which','insert_2_s');
            var floorId = block.getFieldValue('floorId');
            floorId = MotaActionFunctions.pre('IdString')(floorId,block,'floorId','insert_2_s');
            var args = block.getFieldValue('args');
            args = MotaActionFunctions.pre('JsonEvalString')(args,block,'args','insert_2_s');
            var code = MotaActionFunctions.defaultCode('insert_2_s',eval('['+MotaActionBlocks['insert_2_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y","which","floorId","args"],
        "argsType": ["field","field","field","field","field"],
        "argsGrammarName": ["PosString","PosString","Event_List","IdString","JsonEvalString"],
        "omitted": [true,true,true,true,true],
        "multi": [false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('insert_2_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('insert_2_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "exit_s": {
        "type": "statement",
        "json": {
            "type": "exit_s",
            "message0": "立刻结束当前事件",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "exit_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var code = MotaActionFunctions.defaultCode('exit_s',eval('['+MotaActionBlocks['exit_s'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('exit_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('exit_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "setBlock_s": {
        "type": "statement",
        "json": {
            "type": "setBlock_s",
            "message0": "转变图块为 %1 x %2 , y %3 楼层 %4 动画时间 %5 不等待执行完毕 %6",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "number"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "floorId"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "setBlock_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var number = block.getFieldValue('number');
            if (number==='') {
                throw new OmitedError(block,'number','setBlock_s');
            }
            number = MotaActionFunctions.pre('EvalString')(number,block,'number','setBlock_s');
            var x = block.getFieldValue('x');
            x = MotaActionFunctions.pre('EvalString')(x,block,'x','setBlock_s');
            var y = block.getFieldValue('y');
            y = MotaActionFunctions.pre('EvalString')(y,block,'y','setBlock_s');
            var floorId = block.getFieldValue('floorId');
            floorId = MotaActionFunctions.pre('IdString')(floorId,block,'floorId','setBlock_s');
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('IntString')(time,block,'time','setBlock_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','setBlock_s');
            var code = MotaActionFunctions.defaultCode('setBlock_s',eval('['+MotaActionBlocks['setBlock_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["number","x","y","floorId","time","async"],
        "argsType": ["field","field","field","field","field","field"],
        "argsGrammarName": ["EvalString","EvalString","EvalString","IdString","IntString","Bool"],
        "omitted": [false,true,true,true,true,false],
        "multi": [false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('setBlock_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('setBlock_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "turnBlock_s": {
        "type": "statement",
        "json": {
            "type": "turnBlock_s",
            "message0": "事件转向 %1 x %2 , y %3 楼层 %4",
            "args0": [
                Object.assign({},MotaActionBlocks.DirectionEx_List,{
                    "name": "direction"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "floorId"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "turnBlock_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var direction = block.getFieldValue('direction');
            direction = MotaActionFunctions.pre('DirectionEx_List')(direction,block,'direction','turnBlock_s');
            var x = block.getFieldValue('x');
            x = MotaActionFunctions.pre('EvalString')(x,block,'x','turnBlock_s');
            var y = block.getFieldValue('y');
            y = MotaActionFunctions.pre('EvalString')(y,block,'y','turnBlock_s');
            var floorId = block.getFieldValue('floorId');
            floorId = MotaActionFunctions.pre('IdString')(floorId,block,'floorId','turnBlock_s');
            var code = MotaActionFunctions.defaultCode('turnBlock_s',eval('['+MotaActionBlocks['turnBlock_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["direction","x","y","floorId"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["DirectionEx_List","EvalString","EvalString","IdString"],
        "omitted": [false,true,true,true],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('turnBlock_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('turnBlock_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "showFloorImg_s": {
        "type": "statement",
        "json": {
            "type": "showFloorImg_s",
            "message0": "显示贴图 像素坐标 x %1 , y %2 楼层 %3",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "floorId"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "showFloorImg_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            x = MotaActionFunctions.pre('EvalString')(x,block,'x','showFloorImg_s');
            var y = block.getFieldValue('y');
            y = MotaActionFunctions.pre('EvalString')(y,block,'y','showFloorImg_s');
            var floorId = block.getFieldValue('floorId');
            floorId = MotaActionFunctions.pre('IdString')(floorId,block,'floorId','showFloorImg_s');
            var code = MotaActionFunctions.defaultCode('showFloorImg_s',eval('['+MotaActionBlocks['showFloorImg_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y","floorId"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["EvalString","EvalString","IdString"],
        "omitted": [true,true,true],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('showFloorImg_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('showFloorImg_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "hideFloorImg_s": {
        "type": "statement",
        "json": {
            "type": "hideFloorImg_s",
            "message0": "隐藏贴图 像素坐标 x %1 , y %2 楼层 %3",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "floorId"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "hideFloorImg_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            x = MotaActionFunctions.pre('EvalString')(x,block,'x','hideFloorImg_s');
            var y = block.getFieldValue('y');
            y = MotaActionFunctions.pre('EvalString')(y,block,'y','hideFloorImg_s');
            var floorId = block.getFieldValue('floorId');
            floorId = MotaActionFunctions.pre('IdString')(floorId,block,'floorId','hideFloorImg_s');
            var code = MotaActionFunctions.defaultCode('hideFloorImg_s',eval('['+MotaActionBlocks['hideFloorImg_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y","floorId"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["EvalString","EvalString","IdString"],
        "omitted": [true,true,true],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('hideFloorImg_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('hideFloorImg_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "showBgFgMap_s": {
        "type": "statement",
        "json": {
            "type": "showBgFgMap_s",
            "message0": "显示图层块 %1 x %2 , y %3 楼层 %4",
            "args0": [
                Object.assign({},MotaActionBlocks.Bg_Fg_List,{
                    "name": "name"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "floorId"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "showBgFgMap_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            name = MotaActionFunctions.pre('Bg_Fg_List')(name,block,'name','showBgFgMap_s');
            var x = block.getFieldValue('x');
            x = MotaActionFunctions.pre('EvalString')(x,block,'x','showBgFgMap_s');
            var y = block.getFieldValue('y');
            y = MotaActionFunctions.pre('EvalString')(y,block,'y','showBgFgMap_s');
            var floorId = block.getFieldValue('floorId');
            floorId = MotaActionFunctions.pre('IdString')(floorId,block,'floorId','showBgFgMap_s');
            var code = MotaActionFunctions.defaultCode('showBgFgMap_s',eval('['+MotaActionBlocks['showBgFgMap_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","x","y","floorId"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["Bg_Fg_List","EvalString","EvalString","IdString"],
        "omitted": [false,true,true,true],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('showBgFgMap_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('showBgFgMap_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "hideBgFgMap_s": {
        "type": "statement",
        "json": {
            "type": "hideBgFgMap_s",
            "message0": "隐藏图层块 %1 x %2 , y %3 楼层 %4",
            "args0": [
                Object.assign({},MotaActionBlocks.Bg_Fg_List,{
                    "name": "name"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "floorId"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "hideBgFgMap_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            name = MotaActionFunctions.pre('Bg_Fg_List')(name,block,'name','hideBgFgMap_s');
            var x = block.getFieldValue('x');
            x = MotaActionFunctions.pre('EvalString')(x,block,'x','hideBgFgMap_s');
            var y = block.getFieldValue('y');
            y = MotaActionFunctions.pre('EvalString')(y,block,'y','hideBgFgMap_s');
            var floorId = block.getFieldValue('floorId');
            floorId = MotaActionFunctions.pre('IdString')(floorId,block,'floorId','hideBgFgMap_s');
            var code = MotaActionFunctions.defaultCode('hideBgFgMap_s',eval('['+MotaActionBlocks['hideBgFgMap_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","x","y","floorId"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["Bg_Fg_List","EvalString","EvalString","IdString"],
        "omitted": [false,true,true,true],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('hideBgFgMap_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('hideBgFgMap_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "setBgFgBlock_s": {
        "type": "statement",
        "json": {
            "type": "setBgFgBlock_s",
            "message0": "转变图层块 %1 为 %2 x %3 , y %4 楼层 %5",
            "args0": [
                Object.assign({},MotaActionBlocks.Bg_Fg_List,{
                    "name": "name"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "number"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "floorId"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "setBgFgBlock_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            name = MotaActionFunctions.pre('Bg_Fg_List')(name,block,'name','setBgFgBlock_s');
            var number = block.getFieldValue('number');
            if (number==='') {
                throw new OmitedError(block,'number','setBgFgBlock_s');
            }
            number = MotaActionFunctions.pre('EvalString')(number,block,'number','setBgFgBlock_s');
            var x = block.getFieldValue('x');
            x = MotaActionFunctions.pre('EvalString')(x,block,'x','setBgFgBlock_s');
            var y = block.getFieldValue('y');
            y = MotaActionFunctions.pre('EvalString')(y,block,'y','setBgFgBlock_s');
            var floorId = block.getFieldValue('floorId');
            floorId = MotaActionFunctions.pre('IdString')(floorId,block,'floorId','setBgFgBlock_s');
            var code = MotaActionFunctions.defaultCode('setBgFgBlock_s',eval('['+MotaActionBlocks['setBgFgBlock_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","number","x","y","floorId"],
        "argsType": ["field","field","field","field","field"],
        "argsGrammarName": ["Bg_Fg_List","EvalString","EvalString","EvalString","IdString"],
        "omitted": [false,false,true,true,true],
        "multi": [false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('setBgFgBlock_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('setBgFgBlock_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "setHeroIcon_s": {
        "type": "statement",
        "json": {
            "type": "setHeroIcon_s",
            "message0": "更改角色行走图 %1 不重绘 %2",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "name"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "noDraw"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "setHeroIcon_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            name = MotaActionFunctions.pre('EvalString')(name,block,'name','setHeroIcon_s');
            var noDraw = block.getFieldValue('noDraw') === 'TRUE';
            noDraw = MotaActionFunctions.pre('Bool')(noDraw,block,'noDraw','setHeroIcon_s');
            var code = MotaActionFunctions.defaultCode('setHeroIcon_s',eval('['+MotaActionBlocks['setHeroIcon_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","noDraw"],
        "argsType": ["field","field"],
        "argsGrammarName": ["EvalString","Bool"],
        "omitted": [true,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('setHeroIcon_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('setHeroIcon_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "update_s": {
        "type": "statement",
        "json": {
            "type": "update_s",
            "message0": "更新状态栏和地图显伤 不检查自动事件 %1",
            "args0": [
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "doNotCheckAutoEvents"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "update_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var doNotCheckAutoEvents = block.getFieldValue('doNotCheckAutoEvents') === 'TRUE';
            doNotCheckAutoEvents = MotaActionFunctions.pre('Bool')(doNotCheckAutoEvents,block,'doNotCheckAutoEvents','update_s');
            var code = MotaActionFunctions.defaultCode('update_s',eval('['+MotaActionBlocks['update_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["doNotCheckAutoEvents"],
        "argsType": ["field"],
        "argsGrammarName": ["Bool"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('update_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('update_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "showStatusBar_s": {
        "type": "statement",
        "json": {
            "type": "showStatusBar_s",
            "message0": "显示状态栏",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "showStatusBar_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var code = MotaActionFunctions.defaultCode('showStatusBar_s',eval('['+MotaActionBlocks['showStatusBar_s'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('showStatusBar_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('showStatusBar_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "hideStatusBar_s": {
        "type": "statement",
        "json": {
            "type": "hideStatusBar_s",
            "message0": "隐藏状态栏 不隐藏竖屏工具栏 %1",
            "args0": [
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "toolbox"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "hideStatusBar_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var toolbox = block.getFieldValue('toolbox') === 'TRUE';
            toolbox = MotaActionFunctions.pre('Bool')(toolbox,block,'toolbox','hideStatusBar_s');
            var code = MotaActionFunctions.defaultCode('hideStatusBar_s',eval('['+MotaActionBlocks['hideStatusBar_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["toolbox"],
        "argsType": ["field"],
        "argsGrammarName": ["Bool"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('hideStatusBar_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('hideStatusBar_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "setHeroOpacity_s": {
        "type": "statement",
        "json": {
            "type": "setHeroOpacity_s",
            "message0": "设置勇士不透明度 %1 渐变方式 %2 动画时间 %3 不等待执行完毕 %4",
            "args0": [
                Object.assign({},MotaActionBlocks.Number,{
                    "name": "opacity"
                }),
                Object.assign({},MotaActionBlocks.MoveMode_List,{
                    "name": "moveMode"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "setHeroOpacity_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var opacity = block.getFieldValue('opacity');
            opacity = MotaActionFunctions.pre('Number')(opacity,block,'opacity','setHeroOpacity_s');
            var moveMode = block.getFieldValue('moveMode');
            moveMode = MotaActionFunctions.pre('MoveMode_List')(moveMode,block,'moveMode','setHeroOpacity_s');
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('IntString')(time,block,'time','setHeroOpacity_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','setHeroOpacity_s');
            var code = MotaActionFunctions.defaultCode('setHeroOpacity_s',eval('['+MotaActionBlocks['setHeroOpacity_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["opacity","moveMode","time","async"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["Number","MoveMode_List","IntString","Bool"],
        "omitted": [false,false,true,false],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('setHeroOpacity_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('setHeroOpacity_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "sleep_s": {
        "type": "statement",
        "json": {
            "type": "sleep_s",
            "message0": "等待 %1 毫秒 不可被Ctrl跳过 %2",
            "args0": [
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "noSkip"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "sleep_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('Int')(time,block,'time','sleep_s');
            var noSkip = block.getFieldValue('noSkip') === 'TRUE';
            noSkip = MotaActionFunctions.pre('Bool')(noSkip,block,'noSkip','sleep_s');
            var code = MotaActionFunctions.defaultCode('sleep_s',eval('['+MotaActionBlocks['sleep_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["time","noSkip"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Int","Bool"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('sleep_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('sleep_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "battle_s": {
        "type": "statement",
        "json": {
            "type": "battle_s",
            "message0": "强制战斗 %1",
            "args0": [
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "id"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "battle_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','battle_s');
            }
            id = MotaActionFunctions.pre('IdString')(id,block,'id','battle_s');
            var code = MotaActionFunctions.defaultCode('battle_s',eval('['+MotaActionBlocks['battle_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id"],
        "argsType": ["field"],
        "argsGrammarName": ["IdString"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('battle_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('battle_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "battle_1_s": {
        "type": "statement",
        "json": {
            "type": "battle_1_s",
            "message0": "强制战斗 x %1 , y %2",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "battle_1_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            x = MotaActionFunctions.pre('PosString')(x,block,'x','battle_1_s');
            var y = block.getFieldValue('y');
            y = MotaActionFunctions.pre('PosString')(y,block,'y','battle_1_s');
            var code = MotaActionFunctions.defaultCode('battle_1_s',eval('['+MotaActionBlocks['battle_1_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y"],
        "argsType": ["field","field"],
        "argsGrammarName": ["PosString","PosString"],
        "omitted": [true,true],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('battle_1_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('battle_1_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "openDoor_s": {
        "type": "statement",
        "json": {
            "type": "openDoor_s",
            "message0": "开门 x %1 , y %2 楼层 %3 需要钥匙 %4 不等待执行完毕 %5",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "floorId"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "needKey"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "openDoor_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            x = MotaActionFunctions.pre('PosString')(x,block,'x','openDoor_s');
            var y = block.getFieldValue('y');
            y = MotaActionFunctions.pre('PosString')(y,block,'y','openDoor_s');
            var floorId = block.getFieldValue('floorId');
            floorId = MotaActionFunctions.pre('IdString')(floorId,block,'floorId','openDoor_s');
            var needKey = block.getFieldValue('needKey') === 'TRUE';
            needKey = MotaActionFunctions.pre('Bool')(needKey,block,'needKey','openDoor_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','openDoor_s');
            var code = MotaActionFunctions.defaultCode('openDoor_s',eval('['+MotaActionBlocks['openDoor_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y","floorId","needKey","async"],
        "argsType": ["field","field","field","field","field"],
        "argsGrammarName": ["PosString","PosString","IdString","Bool","Bool"],
        "omitted": [true,true,true,true,false],
        "multi": [false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('openDoor_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('openDoor_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "closeDoor_s": {
        "type": "statement",
        "json": {
            "type": "closeDoor_s",
            "message0": "关门 x %1 , y %2 ID %3 不等待执行完毕 %4",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "id"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "closeDoor_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            x = MotaActionFunctions.pre('PosString')(x,block,'x','closeDoor_s');
            var y = block.getFieldValue('y');
            y = MotaActionFunctions.pre('PosString')(y,block,'y','closeDoor_s');
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','closeDoor_s');
            }
            id = MotaActionFunctions.pre('IdString')(id,block,'id','closeDoor_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','closeDoor_s');
            var code = MotaActionFunctions.defaultCode('closeDoor_s',eval('['+MotaActionBlocks['closeDoor_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y","id","async"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["PosString","PosString","IdString","Bool"],
        "omitted": [true,true,false,false],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('closeDoor_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('closeDoor_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "changeFloor_s": {
        "type": "statement",
        "json": {
            "type": "changeFloor_s",
            "message0": "楼层切换 %1 %2 %3 x %4 , y %5 朝向 %6 动画时间 %7",
            "args0": [
                Object.assign({},MotaActionBlocks.Floor_List,{
                    "name": "floorId"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "id"
                }),
                Object.assign({},MotaActionBlocks.Stair_List,{
                    "name": "stair"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.DirectionEx_List,{
                    "name": "direction"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "time"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "changeFloor_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var floorId = block.getFieldValue('floorId');
            floorId = MotaActionFunctions.pre('Floor_List')(floorId,block,'floorId','changeFloor_s');
            var id = block.getFieldValue('id');
            id = MotaActionFunctions.pre('IdString')(id,block,'id','changeFloor_s');
            var stair = block.getFieldValue('stair');
            stair = MotaActionFunctions.pre('Stair_List')(stair,block,'stair','changeFloor_s');
            var x = block.getFieldValue('x');
            x = MotaActionFunctions.pre('PosString')(x,block,'x','changeFloor_s');
            var y = block.getFieldValue('y');
            y = MotaActionFunctions.pre('PosString')(y,block,'y','changeFloor_s');
            var direction = block.getFieldValue('direction');
            direction = MotaActionFunctions.pre('DirectionEx_List')(direction,block,'direction','changeFloor_s');
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('IntString')(time,block,'time','changeFloor_s');
            var code = MotaActionFunctions.defaultCode('changeFloor_s',eval('['+MotaActionBlocks['changeFloor_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["floorId","id","stair","x","y","direction","time"],
        "argsType": ["field","field","field","field","field","field","field"],
        "argsGrammarName": ["Floor_List","IdString","Stair_List","PosString","PosString","DirectionEx_List","IntString"],
        "omitted": [false,true,false,true,true,false,true],
        "multi": [false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('changeFloor_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('changeFloor_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "changePos_s": {
        "type": "statement",
        "json": {
            "type": "changePos_s",
            "message0": "位置朝向切换 x %1 , y %2 朝向 %3",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.DirectionEx_List,{
                    "name": "direction"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "changePos_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            x = MotaActionFunctions.pre('PosString')(x,block,'x','changePos_s');
            var y = block.getFieldValue('y');
            y = MotaActionFunctions.pre('PosString')(y,block,'y','changePos_s');
            var direction = block.getFieldValue('direction');
            direction = MotaActionFunctions.pre('DirectionEx_List')(direction,block,'direction','changePos_s');
            var code = MotaActionFunctions.defaultCode('changePos_s',eval('['+MotaActionBlocks['changePos_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y","direction"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["PosString","PosString","DirectionEx_List"],
        "omitted": [true,true,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('changePos_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('changePos_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "useItem_s": {
        "type": "statement",
        "json": {
            "type": "useItem_s",
            "message0": "使用道具 %1",
            "args0": [
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "id"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "useItem_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','useItem_s');
            }
            id = MotaActionFunctions.pre('IdString')(id,block,'id','useItem_s');
            var code = MotaActionFunctions.defaultCode('useItem_s',eval('['+MotaActionBlocks['useItem_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id"],
        "argsType": ["field"],
        "argsGrammarName": ["IdString"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('useItem_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('useItem_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "loadEquip_s": {
        "type": "statement",
        "json": {
            "type": "loadEquip_s",
            "message0": "装上装备 %1",
            "args0": [
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "id"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "loadEquip_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','loadEquip_s');
            }
            id = MotaActionFunctions.pre('IdString')(id,block,'id','loadEquip_s');
            var code = MotaActionFunctions.defaultCode('loadEquip_s',eval('['+MotaActionBlocks['loadEquip_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id"],
        "argsType": ["field"],
        "argsGrammarName": ["IdString"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('loadEquip_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('loadEquip_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "unloadEquip_s": {
        "type": "statement",
        "json": {
            "type": "unloadEquip_s",
            "message0": "卸下第 %1 格装备孔的装备",
            "args0": [
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "pos"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "unloadEquip_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var pos = block.getFieldValue('pos');
            pos = MotaActionFunctions.pre('Int')(pos,block,'pos','unloadEquip_s');
            var code = MotaActionFunctions.defaultCode('unloadEquip_s',eval('['+MotaActionBlocks['unloadEquip_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["pos"],
        "argsType": ["field"],
        "argsGrammarName": ["Int"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('unloadEquip_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('unloadEquip_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "openShop_s": {
        "type": "statement",
        "json": {
            "type": "openShop_s",
            "message0": "启用全局商店 %1 同时打开 %2",
            "args0": [
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "id"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "open"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "openShop_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','openShop_s');
            }
            id = MotaActionFunctions.pre('IdString')(id,block,'id','openShop_s');
            var open = block.getFieldValue('open') === 'TRUE';
            open = MotaActionFunctions.pre('Bool')(open,block,'open','openShop_s');
            var code = MotaActionFunctions.defaultCode('openShop_s',eval('['+MotaActionBlocks['openShop_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id","open"],
        "argsType": ["field","field"],
        "argsGrammarName": ["IdString","Bool"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('openShop_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('openShop_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "disableShop_s": {
        "type": "statement",
        "json": {
            "type": "disableShop_s",
            "message0": "禁用全局商店 %1",
            "args0": [
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "id"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "disableShop_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','disableShop_s');
            }
            id = MotaActionFunctions.pre('IdString')(id,block,'id','disableShop_s');
            var code = MotaActionFunctions.defaultCode('disableShop_s',eval('['+MotaActionBlocks['disableShop_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id"],
        "argsType": ["field"],
        "argsGrammarName": ["IdString"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('disableShop_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('disableShop_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "follow_s": {
        "type": "statement",
        "json": {
            "type": "follow_s",
            "message0": "跟随勇士 行走图 %1",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "name"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "follow_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            if (name==='') {
                throw new OmitedError(block,'name','follow_s');
            }
            name = MotaActionFunctions.pre('EvalString')(name,block,'name','follow_s');
            var code = MotaActionFunctions.defaultCode('follow_s',eval('['+MotaActionBlocks['follow_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name"],
        "argsType": ["field"],
        "argsGrammarName": ["EvalString"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('follow_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('follow_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "unfollow_s": {
        "type": "statement",
        "json": {
            "type": "unfollow_s",
            "message0": "取消跟随 行走图 %1",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "name"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "unfollow_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            name = MotaActionFunctions.pre('EvalString')(name,block,'name','unfollow_s');
            var code = MotaActionFunctions.defaultCode('unfollow_s',eval('['+MotaActionBlocks['unfollow_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name"],
        "argsType": ["field"],
        "argsGrammarName": ["EvalString"],
        "omitted": [true],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('unfollow_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('unfollow_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "vibrate_s": {
        "type": "statement",
        "json": {
            "type": "vibrate_s",
            "message0": "画面震动 方向 %1 时间 %2 速度 %3 振幅 %4 不等待执行完毕 %5",
            "args0": [
                Object.assign({},MotaActionBlocks.Vibrate_List,{
                    "name": "direction"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "speed"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "power"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "vibrate_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var direction = block.getFieldValue('direction');
            direction = MotaActionFunctions.pre('Vibrate_List')(direction,block,'direction','vibrate_s');
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('Int')(time,block,'time','vibrate_s');
            var speed = block.getFieldValue('speed');
            speed = MotaActionFunctions.pre('Int')(speed,block,'speed','vibrate_s');
            var power = block.getFieldValue('power');
            power = MotaActionFunctions.pre('Int')(power,block,'power','vibrate_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','vibrate_s');
            var code = MotaActionFunctions.defaultCode('vibrate_s',eval('['+MotaActionBlocks['vibrate_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["direction","time","speed","power","async"],
        "argsType": ["field","field","field","field","field"],
        "argsGrammarName": ["Vibrate_List","Int","Int","Int","Bool"],
        "omitted": [false,false,false,false,false],
        "multi": [false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('vibrate_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('vibrate_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "animate_s": {
        "type": "statement",
        "json": {
            "type": "animate_s",
            "message0": "显示动画 %1 位置 x %2 y %3 相对窗口坐标 %4 不等待执行完毕 %5",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "name"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "alignWindow"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "animate_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            if (name==='') {
                throw new OmitedError(block,'name','animate_s');
            }
            name = MotaActionFunctions.pre('EvalString')(name,block,'name','animate_s');
            var x = block.getFieldValue('x');
            x = MotaActionFunctions.pre('PosString')(x,block,'x','animate_s');
            var y = block.getFieldValue('y');
            y = MotaActionFunctions.pre('PosString')(y,block,'y','animate_s');
            var alignWindow = block.getFieldValue('alignWindow') === 'TRUE';
            alignWindow = MotaActionFunctions.pre('Bool')(alignWindow,block,'alignWindow','animate_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','animate_s');
            var code = MotaActionFunctions.defaultCode('animate_s',eval('['+MotaActionBlocks['animate_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","x","y","alignWindow","async"],
        "argsType": ["field","field","field","field","field"],
        "argsGrammarName": ["EvalString","PosString","PosString","Bool","Bool"],
        "omitted": [false,true,true,false,false],
        "multi": [false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('animate_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('animate_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "animate_1_s": {
        "type": "statement",
        "json": {
            "type": "animate_1_s",
            "message0": "显示动画并跟随角色 %1 不等待执行完毕 %2",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "name"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "animate_1_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            if (name==='') {
                throw new OmitedError(block,'name','animate_1_s');
            }
            name = MotaActionFunctions.pre('EvalString')(name,block,'name','animate_1_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','animate_1_s');
            var code = MotaActionFunctions.defaultCode('animate_1_s',eval('['+MotaActionBlocks['animate_1_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","async"],
        "argsType": ["field","field"],
        "argsGrammarName": ["EvalString","Bool"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('animate_1_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('animate_1_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "stopAnimate_s": {
        "type": "statement",
        "json": {
            "type": "stopAnimate_s",
            "message0": "停止所有动画 执行动画回调 %1",
            "args0": [
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "doCallback"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "stopAnimate_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var doCallback = block.getFieldValue('doCallback') === 'TRUE';
            doCallback = MotaActionFunctions.pre('Bool')(doCallback,block,'doCallback','stopAnimate_s');
            var code = MotaActionFunctions.defaultCode('stopAnimate_s',eval('['+MotaActionBlocks['stopAnimate_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["doCallback"],
        "argsType": ["field"],
        "argsGrammarName": ["Bool"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('stopAnimate_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('stopAnimate_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "setViewport_s": {
        "type": "statement",
        "json": {
            "type": "setViewport_s",
            "message0": "设置视角 左上角坐标 x %1 , y %2 移动方式 %3 动画时间 %4 不等待执行完毕 %5",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.MoveMode_List,{
                    "name": "moveMode"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "setViewport_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            x = MotaActionFunctions.pre('PosString')(x,block,'x','setViewport_s');
            var y = block.getFieldValue('y');
            y = MotaActionFunctions.pre('PosString')(y,block,'y','setViewport_s');
            var moveMode = block.getFieldValue('moveMode');
            moveMode = MotaActionFunctions.pre('MoveMode_List')(moveMode,block,'moveMode','setViewport_s');
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('Int')(time,block,'time','setViewport_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','setViewport_s');
            var code = MotaActionFunctions.defaultCode('setViewport_s',eval('['+MotaActionBlocks['setViewport_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y","moveMode","time","async"],
        "argsType": ["field","field","field","field","field"],
        "argsGrammarName": ["PosString","PosString","MoveMode_List","Int","Bool"],
        "omitted": [true,true,false,false,false],
        "multi": [false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('setViewport_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('setViewport_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "setViewport_1_s": {
        "type": "statement",
        "json": {
            "type": "setViewport_1_s",
            "message0": "设置视角 增量坐标 dx %1 , dy %2 移动方式 %3 动画时间 %4 不等待执行完毕 %5",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "dx"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "dy"
                }),
                Object.assign({},MotaActionBlocks.MoveMode_List,{
                    "name": "moveMode"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "setViewport_1_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var dx = block.getFieldValue('dx');
            dx = MotaActionFunctions.pre('PosString')(dx,block,'dx','setViewport_1_s');
            var dy = block.getFieldValue('dy');
            dy = MotaActionFunctions.pre('PosString')(dy,block,'dy','setViewport_1_s');
            var moveMode = block.getFieldValue('moveMode');
            moveMode = MotaActionFunctions.pre('MoveMode_List')(moveMode,block,'moveMode','setViewport_1_s');
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('Int')(time,block,'time','setViewport_1_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','setViewport_1_s');
            var code = MotaActionFunctions.defaultCode('setViewport_1_s',eval('['+MotaActionBlocks['setViewport_1_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["dx","dy","moveMode","time","async"],
        "argsType": ["field","field","field","field","field"],
        "argsGrammarName": ["PosString","PosString","MoveMode_List","Int","Bool"],
        "omitted": [true,true,false,false,false],
        "multi": [false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('setViewport_1_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('setViewport_1_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "lockViewport_s": {
        "type": "statement",
        "json": {
            "type": "lockViewport_s",
            "message0": "是否锁定视角 %1",
            "args0": [
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "lock"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "lockViewport_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var lock = block.getFieldValue('lock') === 'TRUE';
            lock = MotaActionFunctions.pre('Bool')(lock,block,'lock','lockViewport_s');
            var code = MotaActionFunctions.defaultCode('lockViewport_s',eval('['+MotaActionBlocks['lockViewport_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["lock"],
        "argsType": ["field"],
        "argsGrammarName": ["Bool"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('lockViewport_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('lockViewport_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "showImage_s": {
        "type": "statement",
        "json": {
            "type": "showImage_s",
            "message0": "显示图片 图片编号 %1 图片 %2 翻转 %3 %4 绘制的起点像素 x %5 y %6 不透明度 %7 时间 %8 不等待执行完毕 %9",
            "args0": [
                Object.assign({},MotaActionBlocks.NInt,{
                    "name": "code"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "image"
                }),
                Object.assign({},MotaActionBlocks.Reverse_List,{
                    "name": "reverse"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.Number,{
                    "name": "opacity"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "showImage_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var code = block.getFieldValue('code');
            if (code==='') {
                throw new OmitedError(block,'code','showImage_s');
            }
            code = MotaActionFunctions.pre('NInt')(code,block,'code','showImage_s');
            var image = block.getFieldValue('image');
            if (image==='') {
                throw new OmitedError(block,'image','showImage_s');
            }
            image = MotaActionFunctions.pre('EvalString')(image,block,'image','showImage_s');
            var reverse = block.getFieldValue('reverse');
            reverse = MotaActionFunctions.pre('Reverse_List')(reverse,block,'reverse','showImage_s');
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','showImage_s');
            }
            x = MotaActionFunctions.pre('PosString')(x,block,'x','showImage_s');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','showImage_s');
            }
            y = MotaActionFunctions.pre('PosString')(y,block,'y','showImage_s');
            var opacity = block.getFieldValue('opacity');
            opacity = MotaActionFunctions.pre('Number')(opacity,block,'opacity','showImage_s');
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('Int')(time,block,'time','showImage_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','showImage_s');
            var code = MotaActionFunctions.defaultCode('showImage_s',eval('['+MotaActionBlocks['showImage_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["code","image","reverse","x","y","opacity","time","async"],
        "argsType": ["field","field","field","field","field","field","field","field"],
        "argsGrammarName": ["NInt","EvalString","Reverse_List","PosString","PosString","Number","Int","Bool"],
        "omitted": [false,false,false,false,false,false,false,false],
        "multi": [false,false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('showImage_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('showImage_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "showImage_1_s": {
        "type": "statement",
        "json": {
            "type": "showImage_1_s",
            "message0": "显示图片 图片编号 %1 图片 %2 翻转 %3 %4 裁剪的起点像素 x %5 y %6 宽 %7 高 %8 不透明度 %9 %10 绘制的起点像素 x %11 y %12 宽 %13 高 %14 时间 %15 不等待执行完毕 %16",
            "args0": [
                Object.assign({},MotaActionBlocks.NInt,{
                    "name": "code"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "image"
                }),
                Object.assign({},MotaActionBlocks.Reverse_List,{
                    "name": "reverse"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "sx"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "sy"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "sw"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "sh"
                }),
                Object.assign({},MotaActionBlocks.Number,{
                    "name": "opacity"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "w"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "h"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "showImage_1_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var code = block.getFieldValue('code');
            if (code==='') {
                throw new OmitedError(block,'code','showImage_1_s');
            }
            code = MotaActionFunctions.pre('NInt')(code,block,'code','showImage_1_s');
            var image = block.getFieldValue('image');
            if (image==='') {
                throw new OmitedError(block,'image','showImage_1_s');
            }
            image = MotaActionFunctions.pre('EvalString')(image,block,'image','showImage_1_s');
            var reverse = block.getFieldValue('reverse');
            reverse = MotaActionFunctions.pre('Reverse_List')(reverse,block,'reverse','showImage_1_s');
            var sx = block.getFieldValue('sx');
            if (sx==='') {
                throw new OmitedError(block,'sx','showImage_1_s');
            }
            sx = MotaActionFunctions.pre('PosString')(sx,block,'sx','showImage_1_s');
            var sy = block.getFieldValue('sy');
            if (sy==='') {
                throw new OmitedError(block,'sy','showImage_1_s');
            }
            sy = MotaActionFunctions.pre('PosString')(sy,block,'sy','showImage_1_s');
            var sw = block.getFieldValue('sw');
            sw = MotaActionFunctions.pre('PosString')(sw,block,'sw','showImage_1_s');
            var sh = block.getFieldValue('sh');
            sh = MotaActionFunctions.pre('PosString')(sh,block,'sh','showImage_1_s');
            var opacity = block.getFieldValue('opacity');
            opacity = MotaActionFunctions.pre('Number')(opacity,block,'opacity','showImage_1_s');
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','showImage_1_s');
            }
            x = MotaActionFunctions.pre('PosString')(x,block,'x','showImage_1_s');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','showImage_1_s');
            }
            y = MotaActionFunctions.pre('PosString')(y,block,'y','showImage_1_s');
            var w = block.getFieldValue('w');
            w = MotaActionFunctions.pre('PosString')(w,block,'w','showImage_1_s');
            var h = block.getFieldValue('h');
            h = MotaActionFunctions.pre('PosString')(h,block,'h','showImage_1_s');
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('Int')(time,block,'time','showImage_1_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','showImage_1_s');
            var code = MotaActionFunctions.defaultCode('showImage_1_s',eval('['+MotaActionBlocks['showImage_1_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["code","image","reverse","sx","sy","sw","sh","opacity","x","y","w","h","time","async"],
        "argsType": ["field","field","field","field","field","field","field","field","field","field","field","field","field","field"],
        "argsGrammarName": ["NInt","EvalString","Reverse_List","PosString","PosString","PosString","PosString","Number","PosString","PosString","PosString","PosString","Int","Bool"],
        "omitted": [false,false,false,false,false,true,true,false,false,false,true,true,false,false],
        "multi": [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('showImage_1_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('showImage_1_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "showTextImage_s": {
        "type": "statement",
        "json": {
            "type": "showTextImage_s",
            "message0": "显示图片化文本 %1 %2 图片编号 %3 起点像素 x %4 y %5 行距 %6 翻转 %7 不透明度 %8 时间 %9 不等待执行完毕 %10",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString_Multi,{
                    "name": "text"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.NInt,{
                    "name": "code"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.Number,{
                    "name": "lineHeight"
                }),
                Object.assign({},MotaActionBlocks.Reverse_List,{
                    "name": "reverse"
                }),
                Object.assign({},MotaActionBlocks.Number,{
                    "name": "opacity"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "showTextImage_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var text = block.getFieldValue('text');
            if (text==='') {
                throw new OmitedError(block,'text','showTextImage_s');
            }
            text = MotaActionFunctions.pre('EvalString_Multi')(text,block,'text','showTextImage_s');
            var code = block.getFieldValue('code');
            if (code==='') {
                throw new OmitedError(block,'code','showTextImage_s');
            }
            code = MotaActionFunctions.pre('NInt')(code,block,'code','showTextImage_s');
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','showTextImage_s');
            }
            x = MotaActionFunctions.pre('PosString')(x,block,'x','showTextImage_s');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','showTextImage_s');
            }
            y = MotaActionFunctions.pre('PosString')(y,block,'y','showTextImage_s');
            var lineHeight = block.getFieldValue('lineHeight');
            lineHeight = MotaActionFunctions.pre('Number')(lineHeight,block,'lineHeight','showTextImage_s');
            var reverse = block.getFieldValue('reverse');
            reverse = MotaActionFunctions.pre('Reverse_List')(reverse,block,'reverse','showTextImage_s');
            var opacity = block.getFieldValue('opacity');
            opacity = MotaActionFunctions.pre('Number')(opacity,block,'opacity','showTextImage_s');
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('Int')(time,block,'time','showTextImage_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','showTextImage_s');
            var code = MotaActionFunctions.defaultCode('showTextImage_s',eval('['+MotaActionBlocks['showTextImage_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["text","code","x","y","lineHeight","reverse","opacity","time","async"],
        "argsType": ["field","field","field","field","field","field","field","field","field"],
        "argsGrammarName": ["EvalString_Multi","NInt","PosString","PosString","Number","Reverse_List","Number","Int","Bool"],
        "omitted": [false,false,false,false,false,false,false,false,false],
        "multi": [false,false,false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('showTextImage_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('showTextImage_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "hideImage_s": {
        "type": "statement",
        "json": {
            "type": "hideImage_s",
            "message0": "清除图片 图片编号 %1 时间 %2 不等待执行完毕 %3",
            "args0": [
                Object.assign({},MotaActionBlocks.NInt,{
                    "name": "code"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "hideImage_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var code = block.getFieldValue('code');
            if (code==='') {
                throw new OmitedError(block,'code','hideImage_s');
            }
            code = MotaActionFunctions.pre('NInt')(code,block,'code','hideImage_s');
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('Int')(time,block,'time','hideImage_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','hideImage_s');
            var code = MotaActionFunctions.defaultCode('hideImage_s',eval('['+MotaActionBlocks['hideImage_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["code","time","async"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["NInt","Int","Bool"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('hideImage_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('hideImage_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "showGif_s": {
        "type": "statement",
        "json": {
            "type": "showGif_s",
            "message0": "显示或清除动图 %1 起点像素位置 x %2 y %3",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "name"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "showGif_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            name = MotaActionFunctions.pre('EvalString')(name,block,'name','showGif_s');
            var x = block.getFieldValue('x');
            x = MotaActionFunctions.pre('PosString')(x,block,'x','showGif_s');
            var y = block.getFieldValue('y');
            y = MotaActionFunctions.pre('PosString')(y,block,'y','showGif_s');
            var code = MotaActionFunctions.defaultCode('showGif_s',eval('['+MotaActionBlocks['showGif_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","x","y"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["EvalString","PosString","PosString"],
        "omitted": [true,true,true],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('showGif_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('showGif_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "moveImage_s": {
        "type": "statement",
        "json": {
            "type": "moveImage_s",
            "message0": "图片移动 图片编号 %1 终点像素位置 x %2 y %3 %4 不透明度 %5 移动方式 %6 移动时间 %7 不等待执行完毕 %8",
            "args0": [
                Object.assign({},MotaActionBlocks.NInt,{
                    "name": "code"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "toX"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "toY"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "opacity"
                }),
                Object.assign({},MotaActionBlocks.MoveMode_List,{
                    "name": "moveMode"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "moveImage_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var code = block.getFieldValue('code');
            if (code==='') {
                throw new OmitedError(block,'code','moveImage_s');
            }
            code = MotaActionFunctions.pre('NInt')(code,block,'code','moveImage_s');
            var toX = block.getFieldValue('toX');
            toX = MotaActionFunctions.pre('PosString')(toX,block,'toX','moveImage_s');
            var toY = block.getFieldValue('toY');
            toY = MotaActionFunctions.pre('PosString')(toY,block,'toY','moveImage_s');
            var opacity = block.getFieldValue('opacity');
            opacity = MotaActionFunctions.pre('EvalString')(opacity,block,'opacity','moveImage_s');
            var moveMode = block.getFieldValue('moveMode');
            moveMode = MotaActionFunctions.pre('MoveMode_List')(moveMode,block,'moveMode','moveImage_s');
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('Int')(time,block,'time','moveImage_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','moveImage_s');
            var code = MotaActionFunctions.defaultCode('moveImage_s',eval('['+MotaActionBlocks['moveImage_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["code","toX","toY","opacity","moveMode","time","async"],
        "argsType": ["field","field","field","field","field","field","field"],
        "argsGrammarName": ["NInt","PosString","PosString","EvalString","MoveMode_List","Int","Bool"],
        "omitted": [false,true,true,true,false,false,false],
        "multi": [false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('moveImage_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('moveImage_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "rotateImage_s": {
        "type": "statement",
        "json": {
            "type": "rotateImage_s",
            "message0": "图片旋转 图片编号 %1 中心点像素 x %2 y %3 移动方式 %4 %5 旋转度数（正数顺时针，负数逆时针） %6 旋转时间 %7 不等待执行完毕 %8",
            "args0": [
                Object.assign({},MotaActionBlocks.NInt,{
                    "name": "code"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "centerX"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "centerY"
                }),
                Object.assign({},MotaActionBlocks.MoveMode_List,{
                    "name": "moveMode"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.NInt,{
                    "name": "angle"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "rotateImage_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var code = block.getFieldValue('code');
            if (code==='') {
                throw new OmitedError(block,'code','rotateImage_s');
            }
            code = MotaActionFunctions.pre('NInt')(code,block,'code','rotateImage_s');
            var centerX = block.getFieldValue('centerX');
            centerX = MotaActionFunctions.pre('PosString')(centerX,block,'centerX','rotateImage_s');
            var centerY = block.getFieldValue('centerY');
            centerY = MotaActionFunctions.pre('PosString')(centerY,block,'centerY','rotateImage_s');
            var moveMode = block.getFieldValue('moveMode');
            moveMode = MotaActionFunctions.pre('MoveMode_List')(moveMode,block,'moveMode','rotateImage_s');
            var angle = block.getFieldValue('angle');
            if (angle==='') {
                throw new OmitedError(block,'angle','rotateImage_s');
            }
            angle = MotaActionFunctions.pre('NInt')(angle,block,'angle','rotateImage_s');
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('Int')(time,block,'time','rotateImage_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','rotateImage_s');
            var code = MotaActionFunctions.defaultCode('rotateImage_s',eval('['+MotaActionBlocks['rotateImage_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["code","centerX","centerY","moveMode","angle","time","async"],
        "argsType": ["field","field","field","field","field","field","field"],
        "argsGrammarName": ["NInt","PosString","PosString","MoveMode_List","NInt","Int","Bool"],
        "omitted": [false,true,true,false,false,false,false],
        "multi": [false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('rotateImage_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('rotateImage_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "scaleImage_s": {
        "type": "statement",
        "json": {
            "type": "scaleImage_s",
            "message0": "图片放缩 图片编号 %1 中心点像素 x %2 y %3 移动方式 %4 %5 放缩比例 %6 动画时间 %7 不等待执行完毕 %8",
            "args0": [
                Object.assign({},MotaActionBlocks.NInt,{
                    "name": "code"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "centerX"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "centerY"
                }),
                Object.assign({},MotaActionBlocks.MoveMode_List,{
                    "name": "moveMode"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.Number,{
                    "name": "scale"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "scaleImage_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var code = block.getFieldValue('code');
            if (code==='') {
                throw new OmitedError(block,'code','scaleImage_s');
            }
            code = MotaActionFunctions.pre('NInt')(code,block,'code','scaleImage_s');
            var centerX = block.getFieldValue('centerX');
            centerX = MotaActionFunctions.pre('PosString')(centerX,block,'centerX','scaleImage_s');
            var centerY = block.getFieldValue('centerY');
            centerY = MotaActionFunctions.pre('PosString')(centerY,block,'centerY','scaleImage_s');
            var moveMode = block.getFieldValue('moveMode');
            moveMode = MotaActionFunctions.pre('MoveMode_List')(moveMode,block,'moveMode','scaleImage_s');
            var scale = block.getFieldValue('scale');
            scale = MotaActionFunctions.pre('Number')(scale,block,'scale','scaleImage_s');
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('Int')(time,block,'time','scaleImage_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','scaleImage_s');
            var code = MotaActionFunctions.defaultCode('scaleImage_s',eval('['+MotaActionBlocks['scaleImage_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["code","centerX","centerY","moveMode","scale","time","async"],
        "argsType": ["field","field","field","field","field","field","field"],
        "argsGrammarName": ["NInt","PosString","PosString","MoveMode_List","Number","Int","Bool"],
        "omitted": [false,true,true,false,false,false,false],
        "multi": [false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('scaleImage_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('scaleImage_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "setCurtain_0_s": {
        "type": "statement",
        "json": {
            "type": "setCurtain_0_s",
            "message0": "更改画面色调 %1 %2 动画时间 %3 %4 渐变方式 %5 持续到下一个本事件 %6 不等待执行完毕 %7",
            "args0": [
                Object.assign({},MotaActionBlocks.ColorString,{
                    "name": "colorS"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "color"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "time"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.MoveMode_List,{
                    "name": "moveMode"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "keep"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "setCurtain_0_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var colorS = block.getFieldValue('colorS');
            if (colorS==='') {
                throw new OmitedError(block,'colorS','setCurtain_0_s');
            }
            colorS = MotaActionFunctions.pre('ColorString')(colorS,block,'colorS','setCurtain_0_s');
            var color = block.getFieldValue('color');
            color = MotaActionFunctions.pre('Colour')(color,block,'color','setCurtain_0_s');
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('IntString')(time,block,'time','setCurtain_0_s');
            var moveMode = block.getFieldValue('moveMode');
            moveMode = MotaActionFunctions.pre('MoveMode_List')(moveMode,block,'moveMode','setCurtain_0_s');
            var keep = block.getFieldValue('keep') === 'TRUE';
            keep = MotaActionFunctions.pre('Bool')(keep,block,'keep','setCurtain_0_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','setCurtain_0_s');
            var code = MotaActionFunctions.defaultCode('setCurtain_0_s',eval('['+MotaActionBlocks['setCurtain_0_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["colorS","color","time","moveMode","keep","async"],
        "argsType": ["field","field","field","field","field","field"],
        "argsGrammarName": ["ColorString","Colour","IntString","MoveMode_List","Bool","Bool"],
        "omitted": [false,false,true,false,false,false],
        "multi": [false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('setCurtain_0_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('setCurtain_0_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "setCurtain_1_s": {
        "type": "statement",
        "json": {
            "type": "setCurtain_1_s",
            "message0": "恢复画面色调 动画时间 %1 渐变方式 %2 不等待执行完毕 %3",
            "args0": [
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.MoveMode_List,{
                    "name": "moveMode"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "setCurtain_1_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('IntString')(time,block,'time','setCurtain_1_s');
            var moveMode = block.getFieldValue('moveMode');
            moveMode = MotaActionFunctions.pre('MoveMode_List')(moveMode,block,'moveMode','setCurtain_1_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','setCurtain_1_s');
            var code = MotaActionFunctions.defaultCode('setCurtain_1_s',eval('['+MotaActionBlocks['setCurtain_1_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["time","moveMode","async"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["IntString","MoveMode_List","Bool"],
        "omitted": [true,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('setCurtain_1_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('setCurtain_1_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "screenFlash_s": {
        "type": "statement",
        "json": {
            "type": "screenFlash_s",
            "message0": "画面闪烁 %1 %2 单次时间 %3 执行次数 %4 渐变方式 %5 不等待执行完毕 %6",
            "args0": [
                Object.assign({},MotaActionBlocks.ColorString,{
                    "name": "colorS"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "color"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "times"
                }),
                Object.assign({},MotaActionBlocks.MoveMode_List,{
                    "name": "moveMode"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "screenFlash_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var colorS = block.getFieldValue('colorS');
            if (colorS==='') {
                throw new OmitedError(block,'colorS','screenFlash_s');
            }
            colorS = MotaActionFunctions.pre('ColorString')(colorS,block,'colorS','screenFlash_s');
            var color = block.getFieldValue('color');
            color = MotaActionFunctions.pre('Colour')(color,block,'color','screenFlash_s');
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('Int')(time,block,'time','screenFlash_s');
            var times = block.getFieldValue('times');
            times = MotaActionFunctions.pre('IntString')(times,block,'times','screenFlash_s');
            var moveMode = block.getFieldValue('moveMode');
            moveMode = MotaActionFunctions.pre('MoveMode_List')(moveMode,block,'moveMode','screenFlash_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','screenFlash_s');
            var code = MotaActionFunctions.defaultCode('screenFlash_s',eval('['+MotaActionBlocks['screenFlash_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["colorS","color","time","times","moveMode","async"],
        "argsType": ["field","field","field","field","field","field"],
        "argsGrammarName": ["ColorString","Colour","Int","IntString","MoveMode_List","Bool"],
        "omitted": [false,false,false,true,false,false],
        "multi": [false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('screenFlash_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('screenFlash_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "setWeather_s": {
        "type": "statement",
        "json": {
            "type": "setWeather_s",
            "message0": "更改天气 %1 强度 %2 持续到下个本事件 %3",
            "args0": [
                Object.assign({},MotaActionBlocks.Weather_List,{
                    "name": "name"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "level"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "keep"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "setWeather_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            name = MotaActionFunctions.pre('Weather_List')(name,block,'name','setWeather_s');
            var level = block.getFieldValue('level');
            level = MotaActionFunctions.pre('Int')(level,block,'level','setWeather_s');
            var keep = block.getFieldValue('keep') === 'TRUE';
            keep = MotaActionFunctions.pre('Bool')(keep,block,'keep','setWeather_s');
            var code = MotaActionFunctions.defaultCode('setWeather_s',eval('['+MotaActionBlocks['setWeather_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","level","keep"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["Weather_List","Int","Bool"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('setWeather_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('setWeather_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "move_s": {
        "type": "statement",
        "json": {
            "type": "move_s",
            "message0": "移动事件 x %1 , y %2 动画时间 %3 不消失 %4 不等待执行完毕 %5 %6 %7",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "keep"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "steps",
                    "check": "moveDirection"
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "move_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            x = MotaActionFunctions.pre('PosString')(x,block,'x','move_s');
            var y = block.getFieldValue('y');
            y = MotaActionFunctions.pre('PosString')(y,block,'y','move_s');
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('IntString')(time,block,'time','move_s');
            var keep = block.getFieldValue('keep') === 'TRUE';
            keep = MotaActionFunctions.pre('Bool')(keep,block,'keep','move_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','move_s');
            var steps = Blockly.JavaScript.statementToCode(block, 'steps');
            if (steps==='') {
                throw new OmitedError(block,'steps','move_s');
            }
            var code = MotaActionFunctions.defaultCode('move_s',eval('['+MotaActionBlocks['move_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y","time","keep","async","steps"],
        "argsType": ["field","field","field","field","field","statement"],
        "argsGrammarName": ["PosString","PosString","IntString","Bool","Bool","moveDirection"],
        "omitted": [true,true,true,false,false,false],
        "multi": [false,false,false,false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('move_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('move_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "moveDirection": {
        "type": "statement",
        "json": {
            "type": "moveDirection",
            "message0": "移动方向 %1 格数 %2",
            "args0": [
                Object.assign({},MotaActionBlocks.Move_List,{
                    "name": "direction"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "steps"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "moveDirection",
            "nextStatement": "moveDirection"
        },
        "generFunc": function(block) {
            var direction = block.getFieldValue('direction');
            direction = MotaActionFunctions.pre('Move_List')(direction,block,'direction','moveDirection');
            var steps = block.getFieldValue('steps');
            steps = MotaActionFunctions.pre('Int')(steps,block,'steps','moveDirection');
            var code = MotaActionFunctions.defaultCode('moveDirection',eval('['+MotaActionBlocks['moveDirection'].args.join(',')+']'),block);
            return code;
        },
        "args": ["direction","steps"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Move_List","Int"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('moveDirection',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('moveDirection',inputs,next,isShadow,comment,attribute);
        }
    },
    "moveAction_s": {
        "type": "statement",
        "json": {
            "type": "moveAction_s",
            "message0": "勇士前进一格或撞击",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "moveAction_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var code = MotaActionFunctions.defaultCode('moveAction_s',eval('['+MotaActionBlocks['moveAction_s'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('moveAction_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('moveAction_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "moveHero_s": {
        "type": "statement",
        "json": {
            "type": "moveHero_s",
            "message0": "无视地形移动勇士 动画时间 %1 不等待执行完毕 %2 %3 %4",
            "args0": [
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "steps",
                    "check": "moveDirection"
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "moveHero_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('IntString')(time,block,'time','moveHero_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','moveHero_s');
            var steps = Blockly.JavaScript.statementToCode(block, 'steps');
            if (steps==='') {
                throw new OmitedError(block,'steps','moveHero_s');
            }
            var code = MotaActionFunctions.defaultCode('moveHero_s',eval('['+MotaActionBlocks['moveHero_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["time","async","steps"],
        "argsType": ["field","field","statement"],
        "argsGrammarName": ["IntString","Bool","moveDirection"],
        "omitted": [true,false,false],
        "multi": [false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('moveHero_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('moveHero_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "jump_s": {
        "type": "statement",
        "json": {
            "type": "jump_s",
            "message0": "跳跃事件 起始 x %1 , y %2 终止 x %3 , y %4 动画时间 %5 不消失 %6 不等待执行完毕 %7",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "fromX"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "fromY"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "toX"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "toY"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "keep"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "jump_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var fromX = block.getFieldValue('fromX');
            fromX = MotaActionFunctions.pre('PosString')(fromX,block,'fromX','jump_s');
            var fromY = block.getFieldValue('fromY');
            fromY = MotaActionFunctions.pre('PosString')(fromY,block,'fromY','jump_s');
            var toX = block.getFieldValue('toX');
            toX = MotaActionFunctions.pre('PosString')(toX,block,'toX','jump_s');
            var toY = block.getFieldValue('toY');
            toY = MotaActionFunctions.pre('PosString')(toY,block,'toY','jump_s');
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('IntString')(time,block,'time','jump_s');
            var keep = block.getFieldValue('keep') === 'TRUE';
            keep = MotaActionFunctions.pre('Bool')(keep,block,'keep','jump_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','jump_s');
            var code = MotaActionFunctions.defaultCode('jump_s',eval('['+MotaActionBlocks['jump_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["fromX","fromY","toX","toY","time","keep","async"],
        "argsType": ["field","field","field","field","field","field","field"],
        "argsGrammarName": ["PosString","PosString","PosString","PosString","IntString","Bool","Bool"],
        "omitted": [true,true,true,true,true,false,false],
        "multi": [false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('jump_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('jump_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "jump_1_s": {
        "type": "statement",
        "json": {
            "type": "jump_1_s",
            "message0": "跳跃事件 起始 x %1 , y %2 增量 dx %3 , dy %4 动画时间 %5 不消失 %6 不等待执行完毕 %7",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "fromX"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "fromY"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "dx"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "dy"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "keep"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "jump_1_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var fromX = block.getFieldValue('fromX');
            fromX = MotaActionFunctions.pre('PosString')(fromX,block,'fromX','jump_1_s');
            var fromY = block.getFieldValue('fromY');
            fromY = MotaActionFunctions.pre('PosString')(fromY,block,'fromY','jump_1_s');
            var dx = block.getFieldValue('dx');
            dx = MotaActionFunctions.pre('PosString')(dx,block,'dx','jump_1_s');
            var dy = block.getFieldValue('dy');
            dy = MotaActionFunctions.pre('PosString')(dy,block,'dy','jump_1_s');
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('IntString')(time,block,'time','jump_1_s');
            var keep = block.getFieldValue('keep') === 'TRUE';
            keep = MotaActionFunctions.pre('Bool')(keep,block,'keep','jump_1_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','jump_1_s');
            var code = MotaActionFunctions.defaultCode('jump_1_s',eval('['+MotaActionBlocks['jump_1_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["fromX","fromY","dx","dy","time","keep","async"],
        "argsType": ["field","field","field","field","field","field","field"],
        "argsGrammarName": ["PosString","PosString","PosString","PosString","IntString","Bool","Bool"],
        "omitted": [true,true,true,true,true,false,false],
        "multi": [false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('jump_1_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('jump_1_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "jumpHero_s": {
        "type": "statement",
        "json": {
            "type": "jumpHero_s",
            "message0": "跳跃勇士 x %1 , y %2 动画时间 %3 不等待执行完毕 %4",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "jumpHero_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            x = MotaActionFunctions.pre('PosString')(x,block,'x','jumpHero_s');
            var y = block.getFieldValue('y');
            y = MotaActionFunctions.pre('PosString')(y,block,'y','jumpHero_s');
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('IntString')(time,block,'time','jumpHero_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','jumpHero_s');
            var code = MotaActionFunctions.defaultCode('jumpHero_s',eval('['+MotaActionBlocks['jumpHero_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y","time","async"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["PosString","PosString","IntString","Bool"],
        "omitted": [true,true,true,false],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('jumpHero_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('jumpHero_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "jumpHero_1_s": {
        "type": "statement",
        "json": {
            "type": "jumpHero_1_s",
            "message0": "跳跃勇士 增量 dx %1 , dy %2 动画时间 %3 不等待执行完毕 %4",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "dx"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "dy"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "jumpHero_1_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var dx = block.getFieldValue('dx');
            dx = MotaActionFunctions.pre('PosString')(dx,block,'dx','jumpHero_1_s');
            var dy = block.getFieldValue('dy');
            dy = MotaActionFunctions.pre('PosString')(dy,block,'dy','jumpHero_1_s');
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('IntString')(time,block,'time','jumpHero_1_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','jumpHero_1_s');
            var code = MotaActionFunctions.defaultCode('jumpHero_1_s',eval('['+MotaActionBlocks['jumpHero_1_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["dx","dy","time","async"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["PosString","PosString","IntString","Bool"],
        "omitted": [true,true,true,false],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('jumpHero_1_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('jumpHero_1_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "playBgm_s": {
        "type": "statement",
        "json": {
            "type": "playBgm_s",
            "message0": "播放背景音乐 %1 开始播放秒数 %2 持续到下个本事件 %3",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "name"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "startTime"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "keep"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "playBgm_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            if (name==='') {
                throw new OmitedError(block,'name','playBgm_s');
            }
            name = MotaActionFunctions.pre('EvalString')(name,block,'name','playBgm_s');
            var startTime = block.getFieldValue('startTime');
            startTime = MotaActionFunctions.pre('Int')(startTime,block,'startTime','playBgm_s');
            var keep = block.getFieldValue('keep') === 'TRUE';
            keep = MotaActionFunctions.pre('Bool')(keep,block,'keep','playBgm_s');
            var code = MotaActionFunctions.defaultCode('playBgm_s',eval('['+MotaActionBlocks['playBgm_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","startTime","keep"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["EvalString","Int","Bool"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('playBgm_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('playBgm_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "pauseBgm_s": {
        "type": "statement",
        "json": {
            "type": "pauseBgm_s",
            "message0": "暂停背景音乐",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "pauseBgm_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var code = MotaActionFunctions.defaultCode('pauseBgm_s',eval('['+MotaActionBlocks['pauseBgm_s'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('pauseBgm_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('pauseBgm_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "resumeBgm_s": {
        "type": "statement",
        "json": {
            "type": "resumeBgm_s",
            "message0": "恢复背景音乐 从暂停位置继续播放 %1",
            "args0": [
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "resume"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "resumeBgm_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var resume = block.getFieldValue('resume') === 'TRUE';
            resume = MotaActionFunctions.pre('Bool')(resume,block,'resume','resumeBgm_s');
            var code = MotaActionFunctions.defaultCode('resumeBgm_s',eval('['+MotaActionBlocks['resumeBgm_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["resume"],
        "argsType": ["field"],
        "argsGrammarName": ["Bool"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('resumeBgm_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('resumeBgm_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "loadBgm_s": {
        "type": "statement",
        "json": {
            "type": "loadBgm_s",
            "message0": "预加载背景音乐 %1",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "name"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "loadBgm_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            if (name==='') {
                throw new OmitedError(block,'name','loadBgm_s');
            }
            name = MotaActionFunctions.pre('EvalString')(name,block,'name','loadBgm_s');
            var code = MotaActionFunctions.defaultCode('loadBgm_s',eval('['+MotaActionBlocks['loadBgm_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name"],
        "argsType": ["field"],
        "argsGrammarName": ["EvalString"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('loadBgm_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('loadBgm_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "freeBgm_s": {
        "type": "statement",
        "json": {
            "type": "freeBgm_s",
            "message0": "释放背景音乐的缓存 %1",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "name"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "freeBgm_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            if (name==='') {
                throw new OmitedError(block,'name','freeBgm_s');
            }
            name = MotaActionFunctions.pre('EvalString')(name,block,'name','freeBgm_s');
            var code = MotaActionFunctions.defaultCode('freeBgm_s',eval('['+MotaActionBlocks['freeBgm_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name"],
        "argsType": ["field"],
        "argsGrammarName": ["EvalString"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('freeBgm_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('freeBgm_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "playSound_s": {
        "type": "statement",
        "json": {
            "type": "playSound_s",
            "message0": "播放音效 %1 停止之前音效 %2 音调 %3 等待播放完毕 %4",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "name"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "stop"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "pitch"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "sync"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "playSound_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            if (name==='') {
                throw new OmitedError(block,'name','playSound_s');
            }
            name = MotaActionFunctions.pre('EvalString')(name,block,'name','playSound_s');
            var stop = block.getFieldValue('stop') === 'TRUE';
            stop = MotaActionFunctions.pre('Bool')(stop,block,'stop','playSound_s');
            var pitch = block.getFieldValue('pitch');
            pitch = MotaActionFunctions.pre('IntString')(pitch,block,'pitch','playSound_s');
            var sync = block.getFieldValue('sync') === 'TRUE';
            sync = MotaActionFunctions.pre('Bool')(sync,block,'sync','playSound_s');
            var code = MotaActionFunctions.defaultCode('playSound_s',eval('['+MotaActionBlocks['playSound_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","stop","pitch","sync"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["EvalString","Bool","IntString","Bool"],
        "omitted": [false,true,true,true],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('playSound_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('playSound_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "playSound_1_s": {
        "type": "statement",
        "json": {
            "type": "playSound_1_s",
            "message0": "播放系统音效 %1 停止之前音效 %2 音调 %3 等待播放完毕 %4",
            "args0": [
                Object.assign({},MotaActionBlocks.NameMap_List,{
                    "name": "name"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "stop"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "pitch"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "sync"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "playSound_1_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var name = block.getFieldValue('name');
            name = MotaActionFunctions.pre('NameMap_List')(name,block,'name','playSound_1_s');
            var stop = block.getFieldValue('stop') === 'TRUE';
            stop = MotaActionFunctions.pre('Bool')(stop,block,'stop','playSound_1_s');
            var pitch = block.getFieldValue('pitch');
            pitch = MotaActionFunctions.pre('IntString')(pitch,block,'pitch','playSound_1_s');
            var sync = block.getFieldValue('sync') === 'TRUE';
            sync = MotaActionFunctions.pre('Bool')(sync,block,'sync','playSound_1_s');
            var code = MotaActionFunctions.defaultCode('playSound_1_s',eval('['+MotaActionBlocks['playSound_1_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","stop","pitch","sync"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["NameMap_List","Bool","IntString","Bool"],
        "omitted": [false,true,true,true],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('playSound_1_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('playSound_1_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "stopSound_s": {
        "type": "statement",
        "json": {
            "type": "stopSound_s",
            "message0": "停止所有音效",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "stopSound_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var code = MotaActionFunctions.defaultCode('stopSound_s',eval('['+MotaActionBlocks['stopSound_s'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('stopSound_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('stopSound_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "setVolume_s": {
        "type": "statement",
        "json": {
            "type": "setVolume_s",
            "message0": "设置音量 %1 渐变时间 %2 不等待执行完毕 %3",
            "args0": [
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "value"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "time"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "setVolume_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var value = block.getFieldValue('value');
            value = MotaActionFunctions.pre('Int')(value,block,'value','setVolume_s');
            var time = block.getFieldValue('time');
            time = MotaActionFunctions.pre('IntString')(time,block,'time','setVolume_s');
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','setVolume_s');
            var code = MotaActionFunctions.defaultCode('setVolume_s',eval('['+MotaActionBlocks['setVolume_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["value","time","async"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["Int","IntString","Bool"],
        "omitted": [false,true,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('setVolume_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('setVolume_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "setBgmSpeed_s": {
        "type": "statement",
        "json": {
            "type": "setBgmSpeed_s",
            "message0": "设置背景音乐播放速度 %1 同时改变音调 %2",
            "args0": [
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "value"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "pitch"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "setBgmSpeed_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var value = block.getFieldValue('value');
            value = MotaActionFunctions.pre('Int')(value,block,'value','setBgmSpeed_s');
            var pitch = block.getFieldValue('pitch') === 'TRUE';
            pitch = MotaActionFunctions.pre('Bool')(pitch,block,'pitch','setBgmSpeed_s');
            var code = MotaActionFunctions.defaultCode('setBgmSpeed_s',eval('['+MotaActionBlocks['setBgmSpeed_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["value","pitch"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Int","Bool"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('setBgmSpeed_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('setBgmSpeed_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "win_s": {
        "type": "statement",
        "json": {
            "type": "win_s",
            "message0": "游戏胜利,结局 : %1 不计入榜单 %2 不结束游戏 %3",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "reason"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "norank"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "noexit"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "win_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var reason = block.getFieldValue('reason');
            reason = MotaActionFunctions.pre('EvalString')(reason,block,'reason','win_s');
            var norank = block.getFieldValue('norank') === 'TRUE';
            norank = MotaActionFunctions.pre('Bool')(norank,block,'norank','win_s');
            var noexit = block.getFieldValue('noexit') === 'TRUE';
            noexit = MotaActionFunctions.pre('Bool')(noexit,block,'noexit','win_s');
            var code = MotaActionFunctions.defaultCode('win_s',eval('['+MotaActionBlocks['win_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["reason","norank","noexit"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["EvalString","Bool","Bool"],
        "omitted": [true,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('win_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('win_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "lose_s": {
        "type": "statement",
        "json": {
            "type": "lose_s",
            "message0": "游戏失败,结局 : %1",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "reason"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "lose_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var reason = block.getFieldValue('reason');
            reason = MotaActionFunctions.pre('EvalString')(reason,block,'reason','lose_s');
            var code = MotaActionFunctions.defaultCode('lose_s',eval('['+MotaActionBlocks['lose_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["reason"],
        "argsType": ["field"],
        "argsGrammarName": ["EvalString"],
        "omitted": [true],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('lose_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('lose_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "restart_s": {
        "type": "statement",
        "json": {
            "type": "restart_s",
            "message0": "直接回到标题界面",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "restart_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var code = MotaActionFunctions.defaultCode('restart_s',eval('['+MotaActionBlocks['restart_s'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('restart_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('restart_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "input_s": {
        "type": "statement",
        "json": {
            "type": "input_s",
            "message0": "接受用户输入数字,提示 : %1",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "text"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "input_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var text = block.getFieldValue('text');
            if (text==='') {
                throw new OmitedError(block,'text','input_s');
            }
            text = MotaActionFunctions.pre('EvalString')(text,block,'text','input_s');
            var code = MotaActionFunctions.defaultCode('input_s',eval('['+MotaActionBlocks['input_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["text"],
        "argsType": ["field"],
        "argsGrammarName": ["EvalString"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('input_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('input_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "input2_s": {
        "type": "statement",
        "json": {
            "type": "input2_s",
            "message0": "接受用户输入文本,提示 : %1",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "text"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "input2_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var text = block.getFieldValue('text');
            if (text==='') {
                throw new OmitedError(block,'text','input2_s');
            }
            text = MotaActionFunctions.pre('EvalString')(text,block,'text','input2_s');
            var code = MotaActionFunctions.defaultCode('input2_s',eval('['+MotaActionBlocks['input2_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["text"],
        "argsType": ["field"],
        "argsGrammarName": ["EvalString"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('input2_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('input2_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "if_s": {
        "type": "statement",
        "json": {
            "type": "if_s",
            "message0": "如果 : %1 %2 %3 否则 : %4 %5",
            "args0": [
                {
                    "type": "input_value",
                    "name": "condition",
                    "check": MotaActionBlocks.expression
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "trueActions",
                    "check": MotaActionBlocks.action
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "falseActions",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "if_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var condition = Blockly.JavaScript.valueToCode(block, 'condition', 
              Blockly.JavaScript.ORDER_ATOMIC);
            if (condition==='') {
                throw new OmitedError(block,'condition','if_s');
            }
            var trueActions = Blockly.JavaScript.statementToCode(block, 'trueActions');
            if (trueActions==='') {
                throw new OmitedError(block,'trueActions','if_s');
            }
            var falseActions = Blockly.JavaScript.statementToCode(block, 'falseActions');
            if (falseActions==='') {
                throw new OmitedError(block,'falseActions','if_s');
            }
            var code = MotaActionFunctions.defaultCode('if_s',eval('['+MotaActionBlocks['if_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["condition","trueActions","falseActions"],
        "argsType": ["value","statement","statement"],
        "argsGrammarName": ["expression","action","action"],
        "omitted": [false,false,false],
        "multi": [false,true,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('if_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('if_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "if_1_s": {
        "type": "statement",
        "json": {
            "type": "if_1_s",
            "message0": "如果 : %1 %2 %3",
            "args0": [
                {
                    "type": "input_value",
                    "name": "condition",
                    "check": MotaActionBlocks.expression
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "trueActions",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "if_1_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var condition = Blockly.JavaScript.valueToCode(block, 'condition', 
              Blockly.JavaScript.ORDER_ATOMIC);
            if (condition==='') {
                throw new OmitedError(block,'condition','if_1_s');
            }
            var trueActions = Blockly.JavaScript.statementToCode(block, 'trueActions');
            if (trueActions==='') {
                throw new OmitedError(block,'trueActions','if_1_s');
            }
            var code = MotaActionFunctions.defaultCode('if_1_s',eval('['+MotaActionBlocks['if_1_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["condition","trueActions"],
        "argsType": ["value","statement"],
        "argsGrammarName": ["expression","action"],
        "omitted": [false,false],
        "multi": [false,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('if_1_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('if_1_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "switch_s": {
        "type": "statement",
        "json": {
            "type": "switch_s",
            "message0": "多重分歧 条件判定 : %1 %2 %3",
            "args0": [
                {
                    "type": "input_value",
                    "name": "condition",
                    "check": MotaActionBlocks.expression
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "caseList",
                    "check": "switchCase"
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "switch_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var condition = Blockly.JavaScript.valueToCode(block, 'condition', 
              Blockly.JavaScript.ORDER_ATOMIC);
            if (condition==='') {
                throw new OmitedError(block,'condition','switch_s');
            }
            var caseList = Blockly.JavaScript.statementToCode(block, 'caseList');
            if (caseList==='') {
                throw new OmitedError(block,'caseList','switch_s');
            }
            var code = MotaActionFunctions.defaultCode('switch_s',eval('['+MotaActionBlocks['switch_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["condition","caseList"],
        "argsType": ["value","statement"],
        "argsGrammarName": ["expression","switchCase"],
        "omitted": [false,false],
        "multi": [false,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('switch_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('switch_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "switchCase": {
        "type": "statement",
        "json": {
            "type": "switchCase",
            "message0": "如果是 %1 的场合 不跳出 %2 %3 %4",
            "args0": [
                {
                    "type": "input_value",
                    "name": "case1",
                    "check": MotaActionBlocks.expression
                },
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "nobreak"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "action",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "switchCase",
            "nextStatement": "switchCase"
        },
        "generFunc": function(block) {
            var case1 = Blockly.JavaScript.valueToCode(block, 'case1', 
              Blockly.JavaScript.ORDER_ATOMIC);
            if (case1==='') {
                throw new OmitedError(block,'case1','switchCase');
            }
            var nobreak = block.getFieldValue('nobreak') === 'TRUE';
            nobreak = MotaActionFunctions.pre('Bool')(nobreak,block,'nobreak','switchCase');
            var action = Blockly.JavaScript.statementToCode(block, 'action');
            if (action==='') {
                throw new OmitedError(block,'action','switchCase');
            }
            var code = MotaActionFunctions.defaultCode('switchCase',eval('['+MotaActionBlocks['switchCase'].args.join(',')+']'),block);
            return code;
        },
        "args": ["case1","nobreak","action"],
        "argsType": ["value","field","statement"],
        "argsGrammarName": ["expression","Bool","action"],
        "omitted": [false,false,false],
        "multi": [false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('switchCase',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('switchCase',inputs,next,isShadow,comment,attribute);
        }
    },
    "choices_s": {
        "type": "statement",
        "json": {
            "type": "choices_s",
            "message0": "选项 : %1 %2 标题 %3 图像 %4 超时毫秒数 %5 宽度 %6 %7 %8",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString_Multi,{
                    "name": "text"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "title"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "icon"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "timeout"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "width"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "choices",
                    "check": "choicesContext"
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "choices_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var text = block.getFieldValue('text');
            text = MotaActionFunctions.pre('EvalString_Multi')(text,block,'text','choices_s');
            var title = block.getFieldValue('title');
            title = MotaActionFunctions.pre('EvalString')(title,block,'title','choices_s');
            var icon = block.getFieldValue('icon');
            icon = MotaActionFunctions.pre('IdString')(icon,block,'icon','choices_s');
            var timeout = block.getFieldValue('timeout');
            timeout = MotaActionFunctions.pre('Int')(timeout,block,'timeout','choices_s');
            var width = block.getFieldValue('width');
            width = MotaActionFunctions.pre('IntString')(width,block,'width','choices_s');
            var choices = Blockly.JavaScript.statementToCode(block, 'choices');
            if (choices==='') {
                throw new OmitedError(block,'choices','choices_s');
            }
            var code = MotaActionFunctions.defaultCode('choices_s',eval('['+MotaActionBlocks['choices_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["text","title","icon","timeout","width","choices"],
        "argsType": ["field","field","field","field","field","statement"],
        "argsGrammarName": ["EvalString_Multi","EvalString","IdString","Int","IntString","choicesContext"],
        "omitted": [true,true,true,false,true,false],
        "multi": [false,false,false,false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('choices_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('choices_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "choicesContext": {
        "type": "statement",
        "json": {
            "type": "choicesContext",
            "message0": "子选项 %1 图标 %2 颜色 %3 %4 启用条件 %5 出现条件 %6 %7 %8",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "text"
                }),
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "icon"
                }),
                Object.assign({},MotaActionBlocks.ColorString,{
                    "name": "colorS"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "color"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "need"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "condition"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "action",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "choicesContext",
            "nextStatement": "choicesContext"
        },
        "generFunc": function(block) {
            var text = block.getFieldValue('text');
            if (text==='') {
                throw new OmitedError(block,'text','choicesContext');
            }
            text = MotaActionFunctions.pre('EvalString')(text,block,'text','choicesContext');
            var icon = block.getFieldValue('icon');
            icon = MotaActionFunctions.pre('IdString')(icon,block,'icon','choicesContext');
            var colorS = block.getFieldValue('colorS');
            colorS = MotaActionFunctions.pre('ColorString')(colorS,block,'colorS','choicesContext');
            var color = block.getFieldValue('color');
            color = MotaActionFunctions.pre('Colour')(color,block,'color','choicesContext');
            var need = block.getFieldValue('need');
            need = MotaActionFunctions.pre('EvalString')(need,block,'need','choicesContext');
            var condition = block.getFieldValue('condition');
            condition = MotaActionFunctions.pre('EvalString')(condition,block,'condition','choicesContext');
            var action = Blockly.JavaScript.statementToCode(block, 'action');
            if (action==='') {
                throw new OmitedError(block,'action','choicesContext');
            }
            var code = MotaActionFunctions.defaultCode('choicesContext',eval('['+MotaActionBlocks['choicesContext'].args.join(',')+']'),block);
            return code;
        },
        "args": ["text","icon","colorS","color","need","condition","action"],
        "argsType": ["field","field","field","field","field","field","statement"],
        "argsGrammarName": ["EvalString","IdString","ColorString","Colour","EvalString","EvalString","action"],
        "omitted": [false,true,true,false,true,true,false],
        "multi": [false,false,false,false,false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('choicesContext',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('choicesContext',inputs,next,isShadow,comment,attribute);
        }
    },
    "confirm_s": {
        "type": "statement",
        "json": {
            "type": "confirm_s",
            "message0": "显示确认框 : %1 超时毫秒数 %2 %3 确定的场合 : （默认选中 %4 ） %5 %6 取消的场合 : %7 %8",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString_Multi,{
                    "name": "text"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "timeout"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "default1"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "yesActions",
                    "check": MotaActionBlocks.action
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "noActions",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "confirm_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var text = block.getFieldValue('text');
            if (text==='') {
                throw new OmitedError(block,'text','confirm_s');
            }
            text = MotaActionFunctions.pre('EvalString_Multi')(text,block,'text','confirm_s');
            var timeout = block.getFieldValue('timeout');
            timeout = MotaActionFunctions.pre('Int')(timeout,block,'timeout','confirm_s');
            var default1 = block.getFieldValue('default1') === 'TRUE';
            default1 = MotaActionFunctions.pre('Bool')(default1,block,'default1','confirm_s');
            var yesActions = Blockly.JavaScript.statementToCode(block, 'yesActions');
            if (yesActions==='') {
                throw new OmitedError(block,'yesActions','confirm_s');
            }
            var noActions = Blockly.JavaScript.statementToCode(block, 'noActions');
            if (noActions==='') {
                throw new OmitedError(block,'noActions','confirm_s');
            }
            var code = MotaActionFunctions.defaultCode('confirm_s',eval('['+MotaActionBlocks['confirm_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["text","timeout","default1","yesActions","noActions"],
        "argsType": ["field","field","field","statement","statement"],
        "argsGrammarName": ["EvalString_Multi","Int","Bool","action","action"],
        "omitted": [false,false,false,false,false],
        "multi": [false,false,false,true,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('confirm_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('confirm_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "for_s": {
        "type": "statement",
        "json": {
            "type": "for_s",
            "message0": "循环遍历 :  %1 从 %2 到 %3 步增 %4 %5 %6",
            "args0": [
                {
                    "type": "input_value",
                    "name": "name",
                    "check": MotaActionBlocks.expression
                },
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "from"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "to"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "step"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "data",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "for_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var name = Blockly.JavaScript.valueToCode(block, 'name', 
              Blockly.JavaScript.ORDER_ATOMIC);
            if (name==='') {
                throw new OmitedError(block,'name','for_s');
            }
            var from = block.getFieldValue('from');
            if (from==='') {
                throw new OmitedError(block,'from','for_s');
            }
            from = MotaActionFunctions.pre('EvalString')(from,block,'from','for_s');
            var to = block.getFieldValue('to');
            if (to==='') {
                throw new OmitedError(block,'to','for_s');
            }
            to = MotaActionFunctions.pre('EvalString')(to,block,'to','for_s');
            var step = block.getFieldValue('step');
            if (step==='') {
                throw new OmitedError(block,'step','for_s');
            }
            step = MotaActionFunctions.pre('EvalString')(step,block,'step','for_s');
            var data = Blockly.JavaScript.statementToCode(block, 'data');
            if (data==='') {
                throw new OmitedError(block,'data','for_s');
            }
            var code = MotaActionFunctions.defaultCode('for_s',eval('['+MotaActionBlocks['for_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","from","to","step","data"],
        "argsType": ["value","field","field","field","statement"],
        "argsGrammarName": ["expression","EvalString","EvalString","EvalString","action"],
        "omitted": [false,false,false,false,false],
        "multi": [false,false,false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('for_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('for_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "forEach_s": {
        "type": "statement",
        "json": {
            "type": "forEach_s",
            "message0": "循环遍历 : 以 %1 逐项读取列表 %2 %3 %4",
            "args0": [
                {
                    "type": "input_value",
                    "name": "name",
                    "check": MotaActionBlocks.expression
                },
                Object.assign({},MotaActionBlocks.JsonEvalString,{
                    "name": "list"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "data",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "forEach_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var name = Blockly.JavaScript.valueToCode(block, 'name', 
              Blockly.JavaScript.ORDER_ATOMIC);
            if (name==='') {
                throw new OmitedError(block,'name','forEach_s');
            }
            var list = block.getFieldValue('list');
            if (list==='') {
                throw new OmitedError(block,'list','forEach_s');
            }
            list = MotaActionFunctions.pre('JsonEvalString')(list,block,'list','forEach_s');
            var data = Blockly.JavaScript.statementToCode(block, 'data');
            if (data==='') {
                throw new OmitedError(block,'data','forEach_s');
            }
            var code = MotaActionFunctions.defaultCode('forEach_s',eval('['+MotaActionBlocks['forEach_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["name","list","data"],
        "argsType": ["value","field","statement"],
        "argsGrammarName": ["expression","JsonEvalString","action"],
        "omitted": [false,false,false],
        "multi": [false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('forEach_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('forEach_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "while_s": {
        "type": "statement",
        "json": {
            "type": "while_s",
            "message0": "前置条件循环 ： 当 %1 时 %2 %3",
            "args0": [
                {
                    "type": "input_value",
                    "name": "condition",
                    "check": MotaActionBlocks.expression
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "data",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "while_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var condition = Blockly.JavaScript.valueToCode(block, 'condition', 
              Blockly.JavaScript.ORDER_ATOMIC);
            if (condition==='') {
                throw new OmitedError(block,'condition','while_s');
            }
            var data = Blockly.JavaScript.statementToCode(block, 'data');
            if (data==='') {
                throw new OmitedError(block,'data','while_s');
            }
            var code = MotaActionFunctions.defaultCode('while_s',eval('['+MotaActionBlocks['while_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["condition","data"],
        "argsType": ["value","statement"],
        "argsGrammarName": ["expression","action"],
        "omitted": [false,false],
        "multi": [false,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('while_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('while_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "dowhile_s": {
        "type": "statement",
        "json": {
            "type": "dowhile_s",
            "message0": "后置条件循环 ： %1 %2 当 %3 时",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "data",
                    "check": MotaActionBlocks.action
                },
                {
                    "type": "input_value",
                    "name": "condition",
                    "check": MotaActionBlocks.expression
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "dowhile_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var data = Blockly.JavaScript.statementToCode(block, 'data');
            if (data==='') {
                throw new OmitedError(block,'data','dowhile_s');
            }
            var condition = Blockly.JavaScript.valueToCode(block, 'condition', 
              Blockly.JavaScript.ORDER_ATOMIC);
            if (condition==='') {
                throw new OmitedError(block,'condition','dowhile_s');
            }
            var code = MotaActionFunctions.defaultCode('dowhile_s',eval('['+MotaActionBlocks['dowhile_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["data","condition"],
        "argsType": ["statement","value"],
        "argsGrammarName": ["action","expression"],
        "omitted": [false,false],
        "multi": [true,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('dowhile_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('dowhile_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "break_s": {
        "type": "statement",
        "json": {
            "type": "break_s",
            "message0": "跳出循环或公共事件 层数 %1",
            "args0": [
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "n"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "break_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var n = block.getFieldValue('n');
            n = MotaActionFunctions.pre('Int')(n,block,'n','break_s');
            var code = MotaActionFunctions.defaultCode('break_s',eval('['+MotaActionBlocks['break_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["n"],
        "argsType": ["field"],
        "argsGrammarName": ["Int"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('break_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('break_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "continue_s": {
        "type": "statement",
        "json": {
            "type": "continue_s",
            "message0": "提前结束循环或跳出公共事件 层数 %1",
            "args0": [
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "n"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "continue_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var n = block.getFieldValue('n');
            n = MotaActionFunctions.pre('Int')(n,block,'n','continue_s');
            var code = MotaActionFunctions.defaultCode('continue_s',eval('['+MotaActionBlocks['continue_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["n"],
        "argsType": ["field"],
        "argsGrammarName": ["Int"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('continue_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('continue_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "wait_s": {
        "type": "statement",
        "json": {
            "type": "wait_s",
            "message0": "等待用户操作并获得按键或点击信息 仅检测子块 %1 超时毫秒数 %2 %3 %4",
            "args0": [
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "forceChild"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "timeout"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "data",
                    "check": MotaActionBlocks.waitContext
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "wait_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var forceChild = block.getFieldValue('forceChild') === 'TRUE';
            forceChild = MotaActionFunctions.pre('Bool')(forceChild,block,'forceChild','wait_s');
            var timeout = block.getFieldValue('timeout');
            timeout = MotaActionFunctions.pre('Int')(timeout,block,'timeout','wait_s');
            var data = Blockly.JavaScript.statementToCode(block, 'data');
            var code = MotaActionFunctions.defaultCode('wait_s',eval('['+MotaActionBlocks['wait_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["forceChild","timeout","data"],
        "argsType": ["field","field","statement"],
        "argsGrammarName": ["Bool","Int","waitContext"],
        "omitted": [false,false,true],
        "multi": [false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('wait_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('wait_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "waitContext_1": {
        "type": "statement",
        "json": {
            "type": "waitContext_1",
            "message0": "按键的场合： 键值（右键查表） %1 不进行剩余判定 %2 %3 %4",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "keycode"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "break1"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "action",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "waitContext_1",
            "nextStatement": MotaActionBlocks.waitContext
        },
        "generFunc": function(block) {
            var keycode = block.getFieldValue('keycode');
            if (keycode==='') {
                throw new OmitedError(block,'keycode','waitContext_1');
            }
            keycode = MotaActionFunctions.pre('EvalString')(keycode,block,'keycode','waitContext_1');
            var break1 = block.getFieldValue('break1') === 'TRUE';
            break1 = MotaActionFunctions.pre('Bool')(break1,block,'break1','waitContext_1');
            var action = Blockly.JavaScript.statementToCode(block, 'action');
            if (action==='') {
                throw new OmitedError(block,'action','waitContext_1');
            }
            var code = MotaActionFunctions.defaultCode('waitContext_1',eval('['+MotaActionBlocks['waitContext_1'].args.join(',')+']'),block);
            return code;
        },
        "args": ["keycode","break1","action"],
        "argsType": ["field","field","statement"],
        "argsGrammarName": ["EvalString","Bool","action"],
        "omitted": [false,false,false],
        "multi": [false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('waitContext_1',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('waitContext_1',inputs,next,isShadow,comment,attribute);
        }
    },
    "waitContext_2": {
        "type": "statement",
        "json": {
            "type": "waitContext_2",
            "message0": "点击的场合： 像素x范围 %1 ~ %2 ; y范围 %3 ~ %4 不进行剩余判定 %5 %6 %7",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "px1"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "px2"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "py1"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "py2"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "break1"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "action",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "waitContext_2",
            "nextStatement": MotaActionBlocks.waitContext
        },
        "generFunc": function(block) {
            var px1 = block.getFieldValue('px1');
            if (px1==='') {
                throw new OmitedError(block,'px1','waitContext_2');
            }
            px1 = MotaActionFunctions.pre('PosString')(px1,block,'px1','waitContext_2');
            var px2 = block.getFieldValue('px2');
            if (px2==='') {
                throw new OmitedError(block,'px2','waitContext_2');
            }
            px2 = MotaActionFunctions.pre('PosString')(px2,block,'px2','waitContext_2');
            var py1 = block.getFieldValue('py1');
            if (py1==='') {
                throw new OmitedError(block,'py1','waitContext_2');
            }
            py1 = MotaActionFunctions.pre('PosString')(py1,block,'py1','waitContext_2');
            var py2 = block.getFieldValue('py2');
            if (py2==='') {
                throw new OmitedError(block,'py2','waitContext_2');
            }
            py2 = MotaActionFunctions.pre('PosString')(py2,block,'py2','waitContext_2');
            var break1 = block.getFieldValue('break1') === 'TRUE';
            break1 = MotaActionFunctions.pre('Bool')(break1,block,'break1','waitContext_2');
            var action = Blockly.JavaScript.statementToCode(block, 'action');
            if (action==='') {
                throw new OmitedError(block,'action','waitContext_2');
            }
            var code = MotaActionFunctions.defaultCode('waitContext_2',eval('['+MotaActionBlocks['waitContext_2'].args.join(',')+']'),block);
            return code;
        },
        "args": ["px1","px2","py1","py2","break1","action"],
        "argsType": ["field","field","field","field","field","statement"],
        "argsGrammarName": ["PosString","PosString","PosString","PosString","Bool","action"],
        "omitted": [false,false,false,false,false,false],
        "multi": [false,false,false,false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('waitContext_2',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('waitContext_2',inputs,next,isShadow,comment,attribute);
        }
    },
    "waitContext_3": {
        "type": "statement",
        "json": {
            "type": "waitContext_3",
            "message0": "自定义条件的场合： %1 不进行剩余判定 %2 %3 %4",
            "args0": [
                {
                    "type": "input_value",
                    "name": "condition",
                    "check": MotaActionBlocks.expression
                },
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "break1"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "action",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "waitContext_3",
            "nextStatement": MotaActionBlocks.waitContext
        },
        "generFunc": function(block) {
            var condition = Blockly.JavaScript.valueToCode(block, 'condition', 
              Blockly.JavaScript.ORDER_ATOMIC);
            if (condition==='') {
                throw new OmitedError(block,'condition','waitContext_3');
            }
            var break1 = block.getFieldValue('break1') === 'TRUE';
            break1 = MotaActionFunctions.pre('Bool')(break1,block,'break1','waitContext_3');
            var action = Blockly.JavaScript.statementToCode(block, 'action');
            if (action==='') {
                throw new OmitedError(block,'action','waitContext_3');
            }
            var code = MotaActionFunctions.defaultCode('waitContext_3',eval('['+MotaActionBlocks['waitContext_3'].args.join(',')+']'),block);
            return code;
        },
        "args": ["condition","break1","action"],
        "argsType": ["value","field","statement"],
        "argsGrammarName": ["expression","Bool","action"],
        "omitted": [false,false,false],
        "multi": [false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('waitContext_3',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('waitContext_3',inputs,next,isShadow,comment,attribute);
        }
    },
    "waitContext_4": {
        "type": "statement",
        "json": {
            "type": "waitContext_4",
            "message0": "超时的场合： 不进行剩余判定 %1 %2 %3",
            "args0": [
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "break1"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "action",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "waitContext_4",
            "nextStatement": MotaActionBlocks.waitContext
        },
        "generFunc": function(block) {
            var break1 = block.getFieldValue('break1') === 'TRUE';
            break1 = MotaActionFunctions.pre('Bool')(break1,block,'break1','waitContext_4');
            var action = Blockly.JavaScript.statementToCode(block, 'action');
            if (action==='') {
                throw new OmitedError(block,'action','waitContext_4');
            }
            var code = MotaActionFunctions.defaultCode('waitContext_4',eval('['+MotaActionBlocks['waitContext_4'].args.join(',')+']'),block);
            return code;
        },
        "args": ["break1","action"],
        "argsType": ["field","statement"],
        "argsGrammarName": ["Bool","action"],
        "omitted": [false,false],
        "multi": [false,true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('waitContext_4',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('waitContext_4',inputs,next,isShadow,comment,attribute);
        }
    },
    "waitContext_empty": {
        "type": "statement",
        "json": {
            "type": "waitContext_empty",
            "message0": " ",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "waitContext_empty",
            "nextStatement": MotaActionBlocks.waitContext
        },
        "generFunc": function(block) {
            var code = MotaActionFunctions.defaultCode('waitContext_empty',eval('['+MotaActionBlocks['waitContext_empty'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('waitContext_empty',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('waitContext_empty',inputs,next,isShadow,comment,attribute);
        }
    },
    "waitAsync_s": {
        "type": "statement",
        "json": {
            "type": "waitAsync_s",
            "message0": "等待所有异步事件执行完毕 不等待动画 %1 等待音效 %2",
            "args0": [
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "excludeAnimates"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "includeSounds"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "waitAsync_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var excludeAnimates = block.getFieldValue('excludeAnimates') === 'TRUE';
            excludeAnimates = MotaActionFunctions.pre('Bool')(excludeAnimates,block,'excludeAnimates','waitAsync_s');
            var includeSounds = block.getFieldValue('includeSounds') === 'TRUE';
            includeSounds = MotaActionFunctions.pre('Bool')(includeSounds,block,'includeSounds','waitAsync_s');
            var code = MotaActionFunctions.defaultCode('waitAsync_s',eval('['+MotaActionBlocks['waitAsync_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["excludeAnimates","includeSounds"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Bool","Bool"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('waitAsync_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('waitAsync_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "stopAsync_s": {
        "type": "statement",
        "json": {
            "type": "stopAsync_s",
            "message0": "立刻结束所有异步事件 %1",
            "args0": [
                {
                    "type": "input_dummy"
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "stopAsync_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var code = MotaActionFunctions.defaultCode('stopAsync_s',eval('['+MotaActionBlocks['stopAsync_s'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('stopAsync_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('stopAsync_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "callBook_s": {
        "type": "statement",
        "json": {
            "type": "callBook_s",
            "message0": "呼出怪物手册",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "callBook_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var code = MotaActionFunctions.defaultCode('callBook_s',eval('['+MotaActionBlocks['callBook_s'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('callBook_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('callBook_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "callSave_s": {
        "type": "statement",
        "json": {
            "type": "callSave_s",
            "message0": "呼出存档页面",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "callSave_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var code = MotaActionFunctions.defaultCode('callSave_s',eval('['+MotaActionBlocks['callSave_s'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('callSave_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('callSave_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "autoSave_s": {
        "type": "statement",
        "json": {
            "type": "autoSave_s",
            "message0": "自动存档 读档到触发前 %1",
            "args0": [
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "removeLast"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "autoSave_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var removeLast = block.getFieldValue('removeLast') === 'TRUE';
            removeLast = MotaActionFunctions.pre('Bool')(removeLast,block,'removeLast','autoSave_s');
            var code = MotaActionFunctions.defaultCode('autoSave_s',eval('['+MotaActionBlocks['autoSave_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["removeLast"],
        "argsType": ["field"],
        "argsGrammarName": ["Bool"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('autoSave_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('autoSave_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "forbidSave_s": {
        "type": "statement",
        "json": {
            "type": "forbidSave_s",
            "message0": "是否禁止存档 %1",
            "args0": [
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "forbid"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "forbidSave_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var forbid = block.getFieldValue('forbid') === 'TRUE';
            forbid = MotaActionFunctions.pre('Bool')(forbid,block,'forbid','forbidSave_s');
            var code = MotaActionFunctions.defaultCode('forbidSave_s',eval('['+MotaActionBlocks['forbidSave_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["forbid"],
        "argsType": ["field"],
        "argsGrammarName": ["Bool"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('forbidSave_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('forbidSave_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "callLoad_s": {
        "type": "statement",
        "json": {
            "type": "callLoad_s",
            "message0": "呼出读档页面",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "callLoad_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var code = MotaActionFunctions.defaultCode('callLoad_s',eval('['+MotaActionBlocks['callLoad_s'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('callLoad_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('callLoad_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "previewUI_s": {
        "type": "statement",
        "json": {
            "type": "previewUI_s",
            "message0": "ui绘制并预览 （双击此项可进行预览） %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "action",
                    "check": MotaActionBlocks.action
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "previewUI_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var action = Blockly.JavaScript.statementToCode(block, 'action');
            if (action==='') {
                throw new OmitedError(block,'action','previewUI_s');
            }
            var code = MotaActionFunctions.defaultCode('previewUI_s',eval('['+MotaActionBlocks['previewUI_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["action"],
        "argsType": ["statement"],
        "argsGrammarName": ["action"],
        "omitted": [false],
        "multi": [true],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('previewUI_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('previewUI_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "clearMap_s": {
        "type": "statement",
        "json": {
            "type": "clearMap_s",
            "message0": "清除画布 起点像素 x %1 y %2 宽 %3 高 %4",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "width"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "height"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "clearMap_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            x = MotaActionFunctions.pre('PosString')(x,block,'x','clearMap_s');
            var y = block.getFieldValue('y');
            y = MotaActionFunctions.pre('PosString')(y,block,'y','clearMap_s');
            var width = block.getFieldValue('width');
            width = MotaActionFunctions.pre('PosString')(width,block,'width','clearMap_s');
            var height = block.getFieldValue('height');
            height = MotaActionFunctions.pre('PosString')(height,block,'height','clearMap_s');
            var code = MotaActionFunctions.defaultCode('clearMap_s',eval('['+MotaActionBlocks['clearMap_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y","width","height"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["PosString","PosString","PosString","PosString"],
        "omitted": [true,true,true,true],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('clearMap_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('clearMap_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "setAttribute_s": {
        "type": "statement",
        "json": {
            "type": "setAttribute_s",
            "message0": "设置画布属性 字体 %1 填充样式 %2 %3 边框样式 %4 %5 %6 线宽度 %7 不透明度 %8 对齐 %9 基准线 %10 z值 %11",
            "args0": [
                Object.assign({},MotaActionBlocks.FontString,{
                    "name": "font"
                }),
                Object.assign({},MotaActionBlocks.ColorString,{
                    "name": "fillStyleS"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "fillStyle"
                }),
                Object.assign({},MotaActionBlocks.ColorString,{
                    "name": "strokeStyleS"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "strokeStyle"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "lineWidth"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "alpha"
                }),
                Object.assign({},MotaActionBlocks.TextAlign_List,{
                    "name": "align"
                }),
                Object.assign({},MotaActionBlocks.TextBaseline_List,{
                    "name": "baseline"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "z"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "setAttribute_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var font = block.getFieldValue('font');
            font = MotaActionFunctions.pre('FontString')(font,block,'font','setAttribute_s');
            var fillStyleS = block.getFieldValue('fillStyleS');
            fillStyleS = MotaActionFunctions.pre('ColorString')(fillStyleS,block,'fillStyleS','setAttribute_s');
            var fillStyle = block.getFieldValue('fillStyle');
            fillStyle = MotaActionFunctions.pre('Colour')(fillStyle,block,'fillStyle','setAttribute_s');
            var strokeStyleS = block.getFieldValue('strokeStyleS');
            strokeStyleS = MotaActionFunctions.pre('ColorString')(strokeStyleS,block,'strokeStyleS','setAttribute_s');
            var strokeStyle = block.getFieldValue('strokeStyle');
            strokeStyle = MotaActionFunctions.pre('Colour')(strokeStyle,block,'strokeStyle','setAttribute_s');
            var lineWidth = block.getFieldValue('lineWidth');
            lineWidth = MotaActionFunctions.pre('IntString')(lineWidth,block,'lineWidth','setAttribute_s');
            var alpha = block.getFieldValue('alpha');
            alpha = MotaActionFunctions.pre('EvalString')(alpha,block,'alpha','setAttribute_s');
            var align = block.getFieldValue('align');
            align = MotaActionFunctions.pre('TextAlign_List')(align,block,'align','setAttribute_s');
            var baseline = block.getFieldValue('baseline');
            baseline = MotaActionFunctions.pre('TextBaseline_List')(baseline,block,'baseline','setAttribute_s');
            var z = block.getFieldValue('z');
            z = MotaActionFunctions.pre('IntString')(z,block,'z','setAttribute_s');
            var code = MotaActionFunctions.defaultCode('setAttribute_s',eval('['+MotaActionBlocks['setAttribute_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["font","fillStyleS","fillStyle","strokeStyleS","strokeStyle","lineWidth","alpha","align","baseline","z"],
        "argsType": ["field","field","field","field","field","field","field","field","field","field"],
        "argsGrammarName": ["FontString","ColorString","Colour","ColorString","Colour","IntString","EvalString","TextAlign_List","TextBaseline_List","IntString"],
        "omitted": [true,true,false,true,false,true,true,false,false,true],
        "multi": [false,false,false,false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('setAttribute_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('setAttribute_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "setFilter_s": {
        "type": "statement",
        "json": {
            "type": "setFilter_s",
            "message0": "设置画布特效 虚化 %1 色相 %2 灰度 %3 反色 %4 阴影 %5",
            "args0": [
                Object.assign({},MotaActionBlocks.Number,{
                    "name": "blur"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "hue"
                }),
                Object.assign({},MotaActionBlocks.Number,{
                    "name": "grayscale"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "invert"
                }),
                Object.assign({},MotaActionBlocks.Number,{
                    "name": "shadow"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "setFilter_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var blur = block.getFieldValue('blur');
            blur = MotaActionFunctions.pre('Number')(blur,block,'blur','setFilter_s');
            var hue = block.getFieldValue('hue');
            hue = MotaActionFunctions.pre('Int')(hue,block,'hue','setFilter_s');
            var grayscale = block.getFieldValue('grayscale');
            grayscale = MotaActionFunctions.pre('Number')(grayscale,block,'grayscale','setFilter_s');
            var invert = block.getFieldValue('invert') === 'TRUE';
            invert = MotaActionFunctions.pre('Bool')(invert,block,'invert','setFilter_s');
            var shadow = block.getFieldValue('shadow');
            shadow = MotaActionFunctions.pre('Number')(shadow,block,'shadow','setFilter_s');
            var code = MotaActionFunctions.defaultCode('setFilter_s',eval('['+MotaActionBlocks['setFilter_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["blur","hue","grayscale","invert","shadow"],
        "argsType": ["field","field","field","field","field"],
        "argsGrammarName": ["Number","Int","Number","Bool","Number"],
        "omitted": [false,false,false,false,false],
        "multi": [false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('setFilter_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('setFilter_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "fillText_s": {
        "type": "statement",
        "json": {
            "type": "fillText_s",
            "message0": "绘制文本 x %1 y %2 样式 %3 %4 字体 %5 最大宽度 %6 %7 %8",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.ColorString,{
                    "name": "styleS"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "style"
                }),
                Object.assign({},MotaActionBlocks.FontString,{
                    "name": "font"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "maxWidth"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "text"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "fillText_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','fillText_s');
            }
            x = MotaActionFunctions.pre('PosString')(x,block,'x','fillText_s');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','fillText_s');
            }
            y = MotaActionFunctions.pre('PosString')(y,block,'y','fillText_s');
            var styleS = block.getFieldValue('styleS');
            styleS = MotaActionFunctions.pre('ColorString')(styleS,block,'styleS','fillText_s');
            var style = block.getFieldValue('style');
            style = MotaActionFunctions.pre('Colour')(style,block,'style','fillText_s');
            var font = block.getFieldValue('font');
            font = MotaActionFunctions.pre('FontString')(font,block,'font','fillText_s');
            var maxWidth = block.getFieldValue('maxWidth');
            maxWidth = MotaActionFunctions.pre('IntString')(maxWidth,block,'maxWidth','fillText_s');
            var text = block.getFieldValue('text');
            if (text==='') {
                throw new OmitedError(block,'text','fillText_s');
            }
            text = MotaActionFunctions.pre('EvalString')(text,block,'text','fillText_s');
            var code = MotaActionFunctions.defaultCode('fillText_s',eval('['+MotaActionBlocks['fillText_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y","styleS","style","font","maxWidth","text"],
        "argsType": ["field","field","field","field","field","field","field"],
        "argsGrammarName": ["PosString","PosString","ColorString","Colour","FontString","IntString","EvalString"],
        "omitted": [false,false,true,false,true,true,false],
        "multi": [false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('fillText_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('fillText_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "fillBoldText_s": {
        "type": "statement",
        "json": {
            "type": "fillBoldText_s",
            "message0": "绘制描边文本 x %1 y %2 样式 %3 %4 描边颜色 %5 %6 字体 %7 %8 %9",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.ColorString,{
                    "name": "styleS"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "style"
                }),
                Object.assign({},MotaActionBlocks.ColorString,{
                    "name": "strokeStyleS"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "strokeStyle"
                }),
                Object.assign({},MotaActionBlocks.FontString,{
                    "name": "font"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "text"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "fillBoldText_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','fillBoldText_s');
            }
            x = MotaActionFunctions.pre('PosString')(x,block,'x','fillBoldText_s');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','fillBoldText_s');
            }
            y = MotaActionFunctions.pre('PosString')(y,block,'y','fillBoldText_s');
            var styleS = block.getFieldValue('styleS');
            styleS = MotaActionFunctions.pre('ColorString')(styleS,block,'styleS','fillBoldText_s');
            var style = block.getFieldValue('style');
            style = MotaActionFunctions.pre('Colour')(style,block,'style','fillBoldText_s');
            var strokeStyleS = block.getFieldValue('strokeStyleS');
            strokeStyleS = MotaActionFunctions.pre('ColorString')(strokeStyleS,block,'strokeStyleS','fillBoldText_s');
            var strokeStyle = block.getFieldValue('strokeStyle');
            strokeStyle = MotaActionFunctions.pre('Colour')(strokeStyle,block,'strokeStyle','fillBoldText_s');
            var font = block.getFieldValue('font');
            font = MotaActionFunctions.pre('FontString')(font,block,'font','fillBoldText_s');
            var text = block.getFieldValue('text');
            if (text==='') {
                throw new OmitedError(block,'text','fillBoldText_s');
            }
            text = MotaActionFunctions.pre('EvalString')(text,block,'text','fillBoldText_s');
            var code = MotaActionFunctions.defaultCode('fillBoldText_s',eval('['+MotaActionBlocks['fillBoldText_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y","styleS","style","strokeStyleS","strokeStyle","font","text"],
        "argsType": ["field","field","field","field","field","field","field","field"],
        "argsGrammarName": ["PosString","PosString","ColorString","Colour","ColorString","Colour","FontString","EvalString"],
        "omitted": [false,false,true,false,true,false,true,false],
        "multi": [false,false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('fillBoldText_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('fillBoldText_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "drawTextContent_s": {
        "type": "statement",
        "json": {
            "type": "drawTextContent_s",
            "message0": "绘制多行文本 %1 %2 起点像素 x %3 y %4 最大宽度 %5 颜色 %6 %7 %8 对齐 %9 字体大小 %10 行距 %11 粗体 %12",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString_Multi,{
                    "name": "text"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "maxWidth"
                }),
                Object.assign({},MotaActionBlocks.ColorString,{
                    "name": "colorS"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "color"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.TextAlign_List,{
                    "name": "align"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "fontSize"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "lineHeight"
                }),
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "bold"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "drawTextContent_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var text = block.getFieldValue('text');
            if (text==='') {
                throw new OmitedError(block,'text','drawTextContent_s');
            }
            text = MotaActionFunctions.pre('EvalString_Multi')(text,block,'text','drawTextContent_s');
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','drawTextContent_s');
            }
            x = MotaActionFunctions.pre('PosString')(x,block,'x','drawTextContent_s');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','drawTextContent_s');
            }
            y = MotaActionFunctions.pre('PosString')(y,block,'y','drawTextContent_s');
            var maxWidth = block.getFieldValue('maxWidth');
            maxWidth = MotaActionFunctions.pre('IntString')(maxWidth,block,'maxWidth','drawTextContent_s');
            var colorS = block.getFieldValue('colorS');
            colorS = MotaActionFunctions.pre('ColorString')(colorS,block,'colorS','drawTextContent_s');
            var color = block.getFieldValue('color');
            color = MotaActionFunctions.pre('Colour')(color,block,'color','drawTextContent_s');
            var align = block.getFieldValue('align');
            align = MotaActionFunctions.pre('TextAlign_List')(align,block,'align','drawTextContent_s');
            var fontSize = block.getFieldValue('fontSize');
            fontSize = MotaActionFunctions.pre('IntString')(fontSize,block,'fontSize','drawTextContent_s');
            var lineHeight = block.getFieldValue('lineHeight');
            lineHeight = MotaActionFunctions.pre('IntString')(lineHeight,block,'lineHeight','drawTextContent_s');
            var bold = block.getFieldValue('bold') === 'TRUE';
            bold = MotaActionFunctions.pre('Bool')(bold,block,'bold','drawTextContent_s');
            var code = MotaActionFunctions.defaultCode('drawTextContent_s',eval('['+MotaActionBlocks['drawTextContent_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["text","x","y","maxWidth","colorS","color","align","fontSize","lineHeight","bold"],
        "argsType": ["field","field","field","field","field","field","field","field","field","field"],
        "argsGrammarName": ["EvalString_Multi","PosString","PosString","IntString","ColorString","Colour","TextAlign_List","IntString","IntString","Bool"],
        "omitted": [false,false,false,true,true,false,false,true,true,false],
        "multi": [false,false,false,false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('drawTextContent_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('drawTextContent_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "fillRect_s": {
        "type": "statement",
        "json": {
            "type": "fillRect_s",
            "message0": "绘制矩形 起点像素 x %1 y %2 宽 %3 高 %4 圆角半径 %5 旋转度数 %6 颜色 %7 %8",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "width"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "height"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "radius"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "angle"
                }),
                Object.assign({},MotaActionBlocks.ColorString,{
                    "name": "styleS"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "style"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "fillRect_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','fillRect_s');
            }
            x = MotaActionFunctions.pre('PosString')(x,block,'x','fillRect_s');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','fillRect_s');
            }
            y = MotaActionFunctions.pre('PosString')(y,block,'y','fillRect_s');
            var width = block.getFieldValue('width');
            if (width==='') {
                throw new OmitedError(block,'width','fillRect_s');
            }
            width = MotaActionFunctions.pre('PosString')(width,block,'width','fillRect_s');
            var height = block.getFieldValue('height');
            if (height==='') {
                throw new OmitedError(block,'height','fillRect_s');
            }
            height = MotaActionFunctions.pre('PosString')(height,block,'height','fillRect_s');
            var radius = block.getFieldValue('radius');
            radius = MotaActionFunctions.pre('PosString')(radius,block,'radius','fillRect_s');
            var angle = block.getFieldValue('angle');
            angle = MotaActionFunctions.pre('PosString')(angle,block,'angle','fillRect_s');
            var styleS = block.getFieldValue('styleS');
            styleS = MotaActionFunctions.pre('ColorString')(styleS,block,'styleS','fillRect_s');
            var style = block.getFieldValue('style');
            style = MotaActionFunctions.pre('Colour')(style,block,'style','fillRect_s');
            var code = MotaActionFunctions.defaultCode('fillRect_s',eval('['+MotaActionBlocks['fillRect_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y","width","height","radius","angle","styleS","style"],
        "argsType": ["field","field","field","field","field","field","field","field"],
        "argsGrammarName": ["PosString","PosString","PosString","PosString","PosString","PosString","ColorString","Colour"],
        "omitted": [false,false,false,false,true,true,true,false],
        "multi": [false,false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('fillRect_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('fillRect_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "strokeRect_s": {
        "type": "statement",
        "json": {
            "type": "strokeRect_s",
            "message0": "绘制矩形边框 起点像素 x %1 y %2 宽 %3 高 %4 圆角半径 %5 旋转度数 %6 颜色 %7 %8 线宽 %9",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "width"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "height"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "radius"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "angle"
                }),
                Object.assign({},MotaActionBlocks.ColorString,{
                    "name": "styleS"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "style"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "lineWidth"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "strokeRect_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','strokeRect_s');
            }
            x = MotaActionFunctions.pre('PosString')(x,block,'x','strokeRect_s');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','strokeRect_s');
            }
            y = MotaActionFunctions.pre('PosString')(y,block,'y','strokeRect_s');
            var width = block.getFieldValue('width');
            if (width==='') {
                throw new OmitedError(block,'width','strokeRect_s');
            }
            width = MotaActionFunctions.pre('PosString')(width,block,'width','strokeRect_s');
            var height = block.getFieldValue('height');
            if (height==='') {
                throw new OmitedError(block,'height','strokeRect_s');
            }
            height = MotaActionFunctions.pre('PosString')(height,block,'height','strokeRect_s');
            var radius = block.getFieldValue('radius');
            radius = MotaActionFunctions.pre('PosString')(radius,block,'radius','strokeRect_s');
            var angle = block.getFieldValue('angle');
            angle = MotaActionFunctions.pre('PosString')(angle,block,'angle','strokeRect_s');
            var styleS = block.getFieldValue('styleS');
            styleS = MotaActionFunctions.pre('ColorString')(styleS,block,'styleS','strokeRect_s');
            var style = block.getFieldValue('style');
            style = MotaActionFunctions.pre('Colour')(style,block,'style','strokeRect_s');
            var lineWidth = block.getFieldValue('lineWidth');
            lineWidth = MotaActionFunctions.pre('IntString')(lineWidth,block,'lineWidth','strokeRect_s');
            var code = MotaActionFunctions.defaultCode('strokeRect_s',eval('['+MotaActionBlocks['strokeRect_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y","width","height","radius","angle","styleS","style","lineWidth"],
        "argsType": ["field","field","field","field","field","field","field","field","field"],
        "argsGrammarName": ["PosString","PosString","PosString","PosString","PosString","PosString","ColorString","Colour","IntString"],
        "omitted": [false,false,false,false,true,true,true,false,true],
        "multi": [false,false,false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('strokeRect_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('strokeRect_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "drawLine_s": {
        "type": "statement",
        "json": {
            "type": "drawLine_s",
            "message0": "绘制线段 起点像素 x %1 y %2 终点像素 x %3 y %4 颜色 %5 %6 线宽 %7",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x1"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y1"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x2"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y2"
                }),
                Object.assign({},MotaActionBlocks.ColorString,{
                    "name": "styleS"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "style"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "lineWidth"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "drawLine_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x1 = block.getFieldValue('x1');
            if (x1==='') {
                throw new OmitedError(block,'x1','drawLine_s');
            }
            x1 = MotaActionFunctions.pre('PosString')(x1,block,'x1','drawLine_s');
            var y1 = block.getFieldValue('y1');
            if (y1==='') {
                throw new OmitedError(block,'y1','drawLine_s');
            }
            y1 = MotaActionFunctions.pre('PosString')(y1,block,'y1','drawLine_s');
            var x2 = block.getFieldValue('x2');
            if (x2==='') {
                throw new OmitedError(block,'x2','drawLine_s');
            }
            x2 = MotaActionFunctions.pre('PosString')(x2,block,'x2','drawLine_s');
            var y2 = block.getFieldValue('y2');
            if (y2==='') {
                throw new OmitedError(block,'y2','drawLine_s');
            }
            y2 = MotaActionFunctions.pre('PosString')(y2,block,'y2','drawLine_s');
            var styleS = block.getFieldValue('styleS');
            styleS = MotaActionFunctions.pre('ColorString')(styleS,block,'styleS','drawLine_s');
            var style = block.getFieldValue('style');
            style = MotaActionFunctions.pre('Colour')(style,block,'style','drawLine_s');
            var lineWidth = block.getFieldValue('lineWidth');
            lineWidth = MotaActionFunctions.pre('IntString')(lineWidth,block,'lineWidth','drawLine_s');
            var code = MotaActionFunctions.defaultCode('drawLine_s',eval('['+MotaActionBlocks['drawLine_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x1","y1","x2","y2","styleS","style","lineWidth"],
        "argsType": ["field","field","field","field","field","field","field"],
        "argsGrammarName": ["PosString","PosString","PosString","PosString","ColorString","Colour","IntString"],
        "omitted": [false,false,false,false,true,false,true],
        "multi": [false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('drawLine_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('drawLine_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "drawArrow_s": {
        "type": "statement",
        "json": {
            "type": "drawArrow_s",
            "message0": "绘制箭头 起点像素 x %1 y %2 终点像素 x %3 y %4 颜色 %5 %6 线宽 %7",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x1"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y1"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x2"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y2"
                }),
                Object.assign({},MotaActionBlocks.ColorString,{
                    "name": "styleS"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "style"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "lineWidth"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "drawArrow_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x1 = block.getFieldValue('x1');
            if (x1==='') {
                throw new OmitedError(block,'x1','drawArrow_s');
            }
            x1 = MotaActionFunctions.pre('PosString')(x1,block,'x1','drawArrow_s');
            var y1 = block.getFieldValue('y1');
            if (y1==='') {
                throw new OmitedError(block,'y1','drawArrow_s');
            }
            y1 = MotaActionFunctions.pre('PosString')(y1,block,'y1','drawArrow_s');
            var x2 = block.getFieldValue('x2');
            if (x2==='') {
                throw new OmitedError(block,'x2','drawArrow_s');
            }
            x2 = MotaActionFunctions.pre('PosString')(x2,block,'x2','drawArrow_s');
            var y2 = block.getFieldValue('y2');
            if (y2==='') {
                throw new OmitedError(block,'y2','drawArrow_s');
            }
            y2 = MotaActionFunctions.pre('PosString')(y2,block,'y2','drawArrow_s');
            var styleS = block.getFieldValue('styleS');
            styleS = MotaActionFunctions.pre('ColorString')(styleS,block,'styleS','drawArrow_s');
            var style = block.getFieldValue('style');
            style = MotaActionFunctions.pre('Colour')(style,block,'style','drawArrow_s');
            var lineWidth = block.getFieldValue('lineWidth');
            lineWidth = MotaActionFunctions.pre('IntString')(lineWidth,block,'lineWidth','drawArrow_s');
            var code = MotaActionFunctions.defaultCode('drawArrow_s',eval('['+MotaActionBlocks['drawArrow_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x1","y1","x2","y2","styleS","style","lineWidth"],
        "argsType": ["field","field","field","field","field","field","field"],
        "argsGrammarName": ["PosString","PosString","PosString","PosString","ColorString","Colour","IntString"],
        "omitted": [false,false,false,false,true,false,true],
        "multi": [false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('drawArrow_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('drawArrow_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "fillPolygon_s": {
        "type": "statement",
        "json": {
            "type": "fillPolygon_s",
            "message0": "绘制多边形 顶点像素列表 x %1 y %2 颜色 %3 %4",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "xs"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "ys"
                }),
                Object.assign({},MotaActionBlocks.ColorString,{
                    "name": "styleS"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "style"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "fillPolygon_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var xs = block.getFieldValue('xs');
            if (xs==='') {
                throw new OmitedError(block,'xs','fillPolygon_s');
            }
            xs = MotaActionFunctions.pre('EvalString')(xs,block,'xs','fillPolygon_s');
            var ys = block.getFieldValue('ys');
            if (ys==='') {
                throw new OmitedError(block,'ys','fillPolygon_s');
            }
            ys = MotaActionFunctions.pre('EvalString')(ys,block,'ys','fillPolygon_s');
            var styleS = block.getFieldValue('styleS');
            styleS = MotaActionFunctions.pre('ColorString')(styleS,block,'styleS','fillPolygon_s');
            var style = block.getFieldValue('style');
            style = MotaActionFunctions.pre('Colour')(style,block,'style','fillPolygon_s');
            var code = MotaActionFunctions.defaultCode('fillPolygon_s',eval('['+MotaActionBlocks['fillPolygon_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["xs","ys","styleS","style"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["EvalString","EvalString","ColorString","Colour"],
        "omitted": [false,false,true,false],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('fillPolygon_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('fillPolygon_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "strokePolygon_s": {
        "type": "statement",
        "json": {
            "type": "strokePolygon_s",
            "message0": "绘制多边形边框 顶点像素列表 x %1 y %2 颜色 %3 %4 线宽 %5",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "xs"
                }),
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "ys"
                }),
                Object.assign({},MotaActionBlocks.ColorString,{
                    "name": "styleS"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "style"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "lineWidth"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "strokePolygon_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var xs = block.getFieldValue('xs');
            if (xs==='') {
                throw new OmitedError(block,'xs','strokePolygon_s');
            }
            xs = MotaActionFunctions.pre('EvalString')(xs,block,'xs','strokePolygon_s');
            var ys = block.getFieldValue('ys');
            if (ys==='') {
                throw new OmitedError(block,'ys','strokePolygon_s');
            }
            ys = MotaActionFunctions.pre('EvalString')(ys,block,'ys','strokePolygon_s');
            var styleS = block.getFieldValue('styleS');
            styleS = MotaActionFunctions.pre('ColorString')(styleS,block,'styleS','strokePolygon_s');
            var style = block.getFieldValue('style');
            style = MotaActionFunctions.pre('Colour')(style,block,'style','strokePolygon_s');
            var lineWidth = block.getFieldValue('lineWidth');
            lineWidth = MotaActionFunctions.pre('IntString')(lineWidth,block,'lineWidth','strokePolygon_s');
            var code = MotaActionFunctions.defaultCode('strokePolygon_s',eval('['+MotaActionBlocks['strokePolygon_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["xs","ys","styleS","style","lineWidth"],
        "argsType": ["field","field","field","field","field"],
        "argsGrammarName": ["EvalString","EvalString","ColorString","Colour","IntString"],
        "omitted": [false,false,true,false,true],
        "multi": [false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('strokePolygon_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('strokePolygon_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "fillEllipse_s": {
        "type": "statement",
        "json": {
            "type": "fillEllipse_s",
            "message0": "绘制椭圆 中心 x %1 y %2 长半径 %3 短半径 %4 旋转度数 %5 颜色 %6 %7",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "a"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "b"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "angle"
                }),
                Object.assign({},MotaActionBlocks.ColorString,{
                    "name": "styleS"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "style"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "fillEllipse_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','fillEllipse_s');
            }
            x = MotaActionFunctions.pre('PosString')(x,block,'x','fillEllipse_s');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','fillEllipse_s');
            }
            y = MotaActionFunctions.pre('PosString')(y,block,'y','fillEllipse_s');
            var a = block.getFieldValue('a');
            if (a==='') {
                throw new OmitedError(block,'a','fillEllipse_s');
            }
            a = MotaActionFunctions.pre('PosString')(a,block,'a','fillEllipse_s');
            var b = block.getFieldValue('b');
            if (b==='') {
                throw new OmitedError(block,'b','fillEllipse_s');
            }
            b = MotaActionFunctions.pre('PosString')(b,block,'b','fillEllipse_s');
            var angle = block.getFieldValue('angle');
            angle = MotaActionFunctions.pre('PosString')(angle,block,'angle','fillEllipse_s');
            var styleS = block.getFieldValue('styleS');
            styleS = MotaActionFunctions.pre('ColorString')(styleS,block,'styleS','fillEllipse_s');
            var style = block.getFieldValue('style');
            style = MotaActionFunctions.pre('Colour')(style,block,'style','fillEllipse_s');
            var code = MotaActionFunctions.defaultCode('fillEllipse_s',eval('['+MotaActionBlocks['fillEllipse_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y","a","b","angle","styleS","style"],
        "argsType": ["field","field","field","field","field","field","field"],
        "argsGrammarName": ["PosString","PosString","PosString","PosString","PosString","ColorString","Colour"],
        "omitted": [false,false,false,false,true,true,false],
        "multi": [false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('fillEllipse_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('fillEllipse_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "strokeEllipse_s": {
        "type": "statement",
        "json": {
            "type": "strokeEllipse_s",
            "message0": "绘制椭圆边框 中心 x %1 y %2 长半径 %3 短半径 %4 旋转度数 %5 颜色 %6 %7 线宽 %8",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "a"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "b"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "angle"
                }),
                Object.assign({},MotaActionBlocks.ColorString,{
                    "name": "styleS"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "style"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "lineWidth"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "strokeEllipse_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','strokeEllipse_s');
            }
            x = MotaActionFunctions.pre('PosString')(x,block,'x','strokeEllipse_s');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','strokeEllipse_s');
            }
            y = MotaActionFunctions.pre('PosString')(y,block,'y','strokeEllipse_s');
            var a = block.getFieldValue('a');
            if (a==='') {
                throw new OmitedError(block,'a','strokeEllipse_s');
            }
            a = MotaActionFunctions.pre('PosString')(a,block,'a','strokeEllipse_s');
            var b = block.getFieldValue('b');
            if (b==='') {
                throw new OmitedError(block,'b','strokeEllipse_s');
            }
            b = MotaActionFunctions.pre('PosString')(b,block,'b','strokeEllipse_s');
            var angle = block.getFieldValue('angle');
            angle = MotaActionFunctions.pre('PosString')(angle,block,'angle','strokeEllipse_s');
            var styleS = block.getFieldValue('styleS');
            styleS = MotaActionFunctions.pre('ColorString')(styleS,block,'styleS','strokeEllipse_s');
            var style = block.getFieldValue('style');
            style = MotaActionFunctions.pre('Colour')(style,block,'style','strokeEllipse_s');
            var lineWidth = block.getFieldValue('lineWidth');
            lineWidth = MotaActionFunctions.pre('IntString')(lineWidth,block,'lineWidth','strokeEllipse_s');
            var code = MotaActionFunctions.defaultCode('strokeEllipse_s',eval('['+MotaActionBlocks['strokeEllipse_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y","a","b","angle","styleS","style","lineWidth"],
        "argsType": ["field","field","field","field","field","field","field","field"],
        "argsGrammarName": ["PosString","PosString","PosString","PosString","PosString","ColorString","Colour","IntString"],
        "omitted": [false,false,false,false,true,true,false,true],
        "multi": [false,false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('strokeEllipse_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('strokeEllipse_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "fillArc_s": {
        "type": "statement",
        "json": {
            "type": "fillArc_s",
            "message0": "绘制扇形 中心 x %1 y %2 半径 %3 起点角度 %4 终点角度 %5 颜色 %6 %7",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "r"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "start"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "end"
                }),
                Object.assign({},MotaActionBlocks.ColorString,{
                    "name": "styleS"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "style"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "fillArc_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','fillArc_s');
            }
            x = MotaActionFunctions.pre('PosString')(x,block,'x','fillArc_s');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','fillArc_s');
            }
            y = MotaActionFunctions.pre('PosString')(y,block,'y','fillArc_s');
            var r = block.getFieldValue('r');
            if (r==='') {
                throw new OmitedError(block,'r','fillArc_s');
            }
            r = MotaActionFunctions.pre('PosString')(r,block,'r','fillArc_s');
            var start = block.getFieldValue('start');
            if (start==='') {
                throw new OmitedError(block,'start','fillArc_s');
            }
            start = MotaActionFunctions.pre('PosString')(start,block,'start','fillArc_s');
            var end = block.getFieldValue('end');
            if (end==='') {
                throw new OmitedError(block,'end','fillArc_s');
            }
            end = MotaActionFunctions.pre('PosString')(end,block,'end','fillArc_s');
            var styleS = block.getFieldValue('styleS');
            styleS = MotaActionFunctions.pre('ColorString')(styleS,block,'styleS','fillArc_s');
            var style = block.getFieldValue('style');
            style = MotaActionFunctions.pre('Colour')(style,block,'style','fillArc_s');
            var code = MotaActionFunctions.defaultCode('fillArc_s',eval('['+MotaActionBlocks['fillArc_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y","r","start","end","styleS","style"],
        "argsType": ["field","field","field","field","field","field","field"],
        "argsGrammarName": ["PosString","PosString","PosString","PosString","PosString","ColorString","Colour"],
        "omitted": [false,false,false,false,false,true,false],
        "multi": [false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('fillArc_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('fillArc_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "strokeArc_s": {
        "type": "statement",
        "json": {
            "type": "strokeArc_s",
            "message0": "绘制弧 中心 x %1 y %2 半径 %3 起点角度 %4 终点角度 %5 颜色 %6 %7 线宽 %8",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "r"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "start"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "end"
                }),
                Object.assign({},MotaActionBlocks.ColorString,{
                    "name": "styleS"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "style"
                }),
                Object.assign({},MotaActionBlocks.IntString,{
                    "name": "lineWidth"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "strokeArc_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','strokeArc_s');
            }
            x = MotaActionFunctions.pre('PosString')(x,block,'x','strokeArc_s');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','strokeArc_s');
            }
            y = MotaActionFunctions.pre('PosString')(y,block,'y','strokeArc_s');
            var r = block.getFieldValue('r');
            if (r==='') {
                throw new OmitedError(block,'r','strokeArc_s');
            }
            r = MotaActionFunctions.pre('PosString')(r,block,'r','strokeArc_s');
            var start = block.getFieldValue('start');
            if (start==='') {
                throw new OmitedError(block,'start','strokeArc_s');
            }
            start = MotaActionFunctions.pre('PosString')(start,block,'start','strokeArc_s');
            var end = block.getFieldValue('end');
            if (end==='') {
                throw new OmitedError(block,'end','strokeArc_s');
            }
            end = MotaActionFunctions.pre('PosString')(end,block,'end','strokeArc_s');
            var styleS = block.getFieldValue('styleS');
            styleS = MotaActionFunctions.pre('ColorString')(styleS,block,'styleS','strokeArc_s');
            var style = block.getFieldValue('style');
            style = MotaActionFunctions.pre('Colour')(style,block,'style','strokeArc_s');
            var lineWidth = block.getFieldValue('lineWidth');
            lineWidth = MotaActionFunctions.pre('IntString')(lineWidth,block,'lineWidth','strokeArc_s');
            var code = MotaActionFunctions.defaultCode('strokeArc_s',eval('['+MotaActionBlocks['strokeArc_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y","r","start","end","styleS","style","lineWidth"],
        "argsType": ["field","field","field","field","field","field","field","field"],
        "argsGrammarName": ["PosString","PosString","PosString","PosString","PosString","ColorString","Colour","IntString"],
        "omitted": [false,false,false,false,false,true,false,true],
        "multi": [false,false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('strokeArc_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('strokeArc_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "drawImage_s": {
        "type": "statement",
        "json": {
            "type": "drawImage_s",
            "message0": "绘制图片 %1 翻转 %2 起点像素 x %3 y %4 宽 %5 高 %6 旋转度数 %7",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "image"
                }),
                Object.assign({},MotaActionBlocks.Reverse_List,{
                    "name": "reverse"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "w"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "h"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "angle"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "drawImage_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var image = block.getFieldValue('image');
            if (image==='') {
                throw new OmitedError(block,'image','drawImage_s');
            }
            image = MotaActionFunctions.pre('EvalString')(image,block,'image','drawImage_s');
            var reverse = block.getFieldValue('reverse');
            reverse = MotaActionFunctions.pre('Reverse_List')(reverse,block,'reverse','drawImage_s');
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','drawImage_s');
            }
            x = MotaActionFunctions.pre('PosString')(x,block,'x','drawImage_s');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','drawImage_s');
            }
            y = MotaActionFunctions.pre('PosString')(y,block,'y','drawImage_s');
            var w = block.getFieldValue('w');
            w = MotaActionFunctions.pre('PosString')(w,block,'w','drawImage_s');
            var h = block.getFieldValue('h');
            h = MotaActionFunctions.pre('PosString')(h,block,'h','drawImage_s');
            var angle = block.getFieldValue('angle');
            angle = MotaActionFunctions.pre('PosString')(angle,block,'angle','drawImage_s');
            var code = MotaActionFunctions.defaultCode('drawImage_s',eval('['+MotaActionBlocks['drawImage_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["image","reverse","x","y","w","h","angle"],
        "argsType": ["field","field","field","field","field","field","field"],
        "argsGrammarName": ["EvalString","Reverse_List","PosString","PosString","PosString","PosString","PosString"],
        "omitted": [false,false,false,false,true,true,true],
        "multi": [false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('drawImage_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('drawImage_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "drawImage_1_s": {
        "type": "statement",
        "json": {
            "type": "drawImage_1_s",
            "message0": "绘制图片 %1 翻转 %2 裁剪的起点像素 x %3 y %4 宽 %5 高 %6 %7 绘制的起点像素 x %8 y %9 宽 %10 高 %11 旋转度数 %12",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "image"
                }),
                Object.assign({},MotaActionBlocks.Reverse_List,{
                    "name": "reverse"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "sx"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "sy"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "sw"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "sh"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "w"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "h"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "angle"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "drawImage_1_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var image = block.getFieldValue('image');
            if (image==='') {
                throw new OmitedError(block,'image','drawImage_1_s');
            }
            image = MotaActionFunctions.pre('EvalString')(image,block,'image','drawImage_1_s');
            var reverse = block.getFieldValue('reverse');
            reverse = MotaActionFunctions.pre('Reverse_List')(reverse,block,'reverse','drawImage_1_s');
            var sx = block.getFieldValue('sx');
            if (sx==='') {
                throw new OmitedError(block,'sx','drawImage_1_s');
            }
            sx = MotaActionFunctions.pre('PosString')(sx,block,'sx','drawImage_1_s');
            var sy = block.getFieldValue('sy');
            if (sy==='') {
                throw new OmitedError(block,'sy','drawImage_1_s');
            }
            sy = MotaActionFunctions.pre('PosString')(sy,block,'sy','drawImage_1_s');
            var sw = block.getFieldValue('sw');
            if (sw==='') {
                throw new OmitedError(block,'sw','drawImage_1_s');
            }
            sw = MotaActionFunctions.pre('PosString')(sw,block,'sw','drawImage_1_s');
            var sh = block.getFieldValue('sh');
            if (sh==='') {
                throw new OmitedError(block,'sh','drawImage_1_s');
            }
            sh = MotaActionFunctions.pre('PosString')(sh,block,'sh','drawImage_1_s');
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','drawImage_1_s');
            }
            x = MotaActionFunctions.pre('PosString')(x,block,'x','drawImage_1_s');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','drawImage_1_s');
            }
            y = MotaActionFunctions.pre('PosString')(y,block,'y','drawImage_1_s');
            var w = block.getFieldValue('w');
            if (w==='') {
                throw new OmitedError(block,'w','drawImage_1_s');
            }
            w = MotaActionFunctions.pre('PosString')(w,block,'w','drawImage_1_s');
            var h = block.getFieldValue('h');
            if (h==='') {
                throw new OmitedError(block,'h','drawImage_1_s');
            }
            h = MotaActionFunctions.pre('PosString')(h,block,'h','drawImage_1_s');
            var angle = block.getFieldValue('angle');
            angle = MotaActionFunctions.pre('PosString')(angle,block,'angle','drawImage_1_s');
            var code = MotaActionFunctions.defaultCode('drawImage_1_s',eval('['+MotaActionBlocks['drawImage_1_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["image","reverse","sx","sy","sw","sh","x","y","w","h","angle"],
        "argsType": ["field","field","field","field","field","field","field","field","field","field","field"],
        "argsGrammarName": ["EvalString","Reverse_List","PosString","PosString","PosString","PosString","PosString","PosString","PosString","PosString","PosString"],
        "omitted": [false,false,false,false,false,false,false,false,false,false,true],
        "multi": [false,false,false,false,false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('drawImage_1_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('drawImage_1_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "drawIcon_s": {
        "type": "statement",
        "json": {
            "type": "drawIcon_s",
            "message0": "绘制图标 ID %1 帧 %2 起点像素 x %3 y %4 宽 %5 高 %6",
            "args0": [
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "id"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "frame"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "width"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "height"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "drawIcon_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','drawIcon_s');
            }
            id = MotaActionFunctions.pre('IdString')(id,block,'id','drawIcon_s');
            var frame = block.getFieldValue('frame');
            frame = MotaActionFunctions.pre('Int')(frame,block,'frame','drawIcon_s');
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','drawIcon_s');
            }
            x = MotaActionFunctions.pre('PosString')(x,block,'x','drawIcon_s');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','drawIcon_s');
            }
            y = MotaActionFunctions.pre('PosString')(y,block,'y','drawIcon_s');
            var width = block.getFieldValue('width');
            width = MotaActionFunctions.pre('PosString')(width,block,'width','drawIcon_s');
            var height = block.getFieldValue('height');
            height = MotaActionFunctions.pre('PosString')(height,block,'height','drawIcon_s');
            var code = MotaActionFunctions.defaultCode('drawIcon_s',eval('['+MotaActionBlocks['drawIcon_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id","frame","x","y","width","height"],
        "argsType": ["field","field","field","field","field","field"],
        "argsGrammarName": ["IdString","Int","PosString","PosString","PosString","PosString"],
        "omitted": [false,false,false,false,true,true],
        "multi": [false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('drawIcon_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('drawIcon_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "drawBackground_s": {
        "type": "statement",
        "json": {
            "type": "drawBackground_s",
            "message0": "绘制背景图 %1 %2 起点像素 x %3 y %4 宽 %5 高 %6",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "background"
                }),
                Object.assign({},MotaActionBlocks.Colour,{
                    "name": "bgColor"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "width"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "height"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "drawBackground_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var background = block.getFieldValue('background');
            if (background==='') {
                throw new OmitedError(block,'background','drawBackground_s');
            }
            background = MotaActionFunctions.pre('EvalString')(background,block,'background','drawBackground_s');
            var bgColor = block.getFieldValue('bgColor');
            bgColor = MotaActionFunctions.pre('Colour')(bgColor,block,'bgColor','drawBackground_s');
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','drawBackground_s');
            }
            x = MotaActionFunctions.pre('PosString')(x,block,'x','drawBackground_s');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','drawBackground_s');
            }
            y = MotaActionFunctions.pre('PosString')(y,block,'y','drawBackground_s');
            var width = block.getFieldValue('width');
            if (width==='') {
                throw new OmitedError(block,'width','drawBackground_s');
            }
            width = MotaActionFunctions.pre('PosString')(width,block,'width','drawBackground_s');
            var height = block.getFieldValue('height');
            if (height==='') {
                throw new OmitedError(block,'height','drawBackground_s');
            }
            height = MotaActionFunctions.pre('PosString')(height,block,'height','drawBackground_s');
            var code = MotaActionFunctions.defaultCode('drawBackground_s',eval('['+MotaActionBlocks['drawBackground_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["background","bgColor","x","y","width","height"],
        "argsType": ["field","field","field","field","field","field"],
        "argsGrammarName": ["EvalString","Colour","PosString","PosString","PosString","PosString"],
        "omitted": [false,false,false,false,false,false],
        "multi": [false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('drawBackground_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('drawBackground_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "drawSelector_s": {
        "type": "statement",
        "json": {
            "type": "drawSelector_s",
            "message0": "绘制闪烁光标 %1 编号 %2 起点像素 x %3 y %4 宽 %5 高 %6",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString,{
                    "name": "image"
                }),
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "code"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "width"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "height"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "drawSelector_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var image = block.getFieldValue('image');
            if (image==='') {
                throw new OmitedError(block,'image','drawSelector_s');
            }
            image = MotaActionFunctions.pre('EvalString')(image,block,'image','drawSelector_s');
            var code = block.getFieldValue('code');
            code = MotaActionFunctions.pre('Int')(code,block,'code','drawSelector_s');
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','drawSelector_s');
            }
            x = MotaActionFunctions.pre('PosString')(x,block,'x','drawSelector_s');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','drawSelector_s');
            }
            y = MotaActionFunctions.pre('PosString')(y,block,'y','drawSelector_s');
            var width = block.getFieldValue('width');
            if (width==='') {
                throw new OmitedError(block,'width','drawSelector_s');
            }
            width = MotaActionFunctions.pre('PosString')(width,block,'width','drawSelector_s');
            var height = block.getFieldValue('height');
            if (height==='') {
                throw new OmitedError(block,'height','drawSelector_s');
            }
            height = MotaActionFunctions.pre('PosString')(height,block,'height','drawSelector_s');
            var code = MotaActionFunctions.defaultCode('drawSelector_s',eval('['+MotaActionBlocks['drawSelector_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["image","code","x","y","width","height"],
        "argsType": ["field","field","field","field","field","field"],
        "argsGrammarName": ["EvalString","Int","PosString","PosString","PosString","PosString"],
        "omitted": [false,false,false,false,false,false],
        "multi": [false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('drawSelector_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('drawSelector_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "drawSelector_1_s": {
        "type": "statement",
        "json": {
            "type": "drawSelector_1_s",
            "message0": "清除闪烁光标 编号 %1",
            "args0": [
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "code"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "drawSelector_1_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var code = block.getFieldValue('code');
            code = MotaActionFunctions.pre('Int')(code,block,'code','drawSelector_1_s');
            var code = MotaActionFunctions.defaultCode('drawSelector_1_s',eval('['+MotaActionBlocks['drawSelector_1_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["code"],
        "argsType": ["field"],
        "argsGrammarName": ["Int"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('drawSelector_1_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('drawSelector_1_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "unknown_s": {
        "type": "statement",
        "json": {
            "type": "unknown_s",
            "message0": "自定义事件 %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.JsonEvalString,{
                    "name": "data"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "unknown_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var data = block.getFieldValue('data');
            if (data==='') {
                throw new OmitedError(block,'data','unknown_s');
            }
            data = MotaActionFunctions.pre('JsonEvalString')(data,block,'data','unknown_s');
            var code = MotaActionFunctions.defaultCode('unknown_s',eval('['+MotaActionBlocks['unknown_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["data"],
        "argsType": ["field"],
        "argsGrammarName": ["JsonEvalString"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('unknown_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('unknown_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "function_s": {
        "type": "statement",
        "json": {
            "type": "function_s",
            "message0": "自定义JS脚本 不自动执行下一个事件 %1 %2 %3",
            "args0": [
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "async"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},MotaActionBlocks.RawEvalString,{
                    "name": "function1"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "function_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var async = block.getFieldValue('async') === 'TRUE';
            async = MotaActionFunctions.pre('Bool')(async,block,'async','function_s');
            var function1 = block.getFieldValue('function1');
            if (function1==='') {
                throw new OmitedError(block,'function1','function_s');
            }
            function1 = MotaActionFunctions.pre('RawEvalString')(function1,block,'function1','function_s');
            var code = MotaActionFunctions.defaultCode('function_s',eval('['+MotaActionBlocks['function_s'].args.join(',')+']'),block);
            return code;
        },
        "args": ["async","function1"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Bool","RawEvalString"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('function_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('function_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "pass_s": {
        "type": "statement",
        "json": {
            "type": "pass_s",
            "message0": " ",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "pass_s",
            "nextStatement": MotaActionBlocks.action
        },
        "generFunc": function(block) {
            var code = MotaActionFunctions.defaultCode('pass_s',eval('['+MotaActionBlocks['pass_s'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('pass_s',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('pass_s',inputs,next,isShadow,comment,attribute);
        }
    },
    "op2_e": {
        "type": "value",
        "json": {
            "type": "op2_e",
            "message0": "%1 %2 %3",
            "args0": [
                {
                    "type": "input_value",
                    "name": "a",
                    "check": MotaActionBlocks.expression
                },
                Object.assign({},MotaActionBlocks.Arithmetic_List,{
                    "name": "op"
                }),
                {
                    "type": "input_value",
                    "name": "b",
                    "check": MotaActionBlocks.expression
                }
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "op2_e"
        },
        "generFunc": function(block) {
            var a = Blockly.JavaScript.valueToCode(block, 'a', 
              Blockly.JavaScript.ORDER_ATOMIC);
            if (a==='') {
                throw new OmitedError(block,'a','op2_e');
            }
            var op = block.getFieldValue('op');
            op = MotaActionFunctions.pre('Arithmetic_List')(op,block,'op','op2_e');
            var b = Blockly.JavaScript.valueToCode(block, 'b', 
              Blockly.JavaScript.ORDER_ATOMIC);
            if (b==='') {
                throw new OmitedError(block,'b','op2_e');
            }
            var code = MotaActionFunctions.defaultCode('op2_e',eval('['+MotaActionBlocks['op2_e'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["a","op","b"],
        "argsType": ["value","field","value"],
        "argsGrammarName": ["expression","Arithmetic_List","expression"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('op2_e',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('op2_e',inputs,next,isShadow,comment,attribute);
        }
    },
    "negate_e": {
        "type": "value",
        "json": {
            "type": "negate_e",
            "message0": "非 %1",
            "args0": [
                {
                    "type": "input_value",
                    "name": "expression",
                    "check": MotaActionBlocks.expression
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "negate_e"
        },
        "generFunc": function(block) {
            var expression = Blockly.JavaScript.valueToCode(block, 'expression', 
              Blockly.JavaScript.ORDER_ATOMIC);
            if (expression==='') {
                throw new OmitedError(block,'expression','negate_e');
            }
            var code = MotaActionFunctions.defaultCode('negate_e',eval('['+MotaActionBlocks['negate_e'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["expression"],
        "argsType": ["value"],
        "argsGrammarName": ["expression"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('negate_e',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('negate_e',inputs,next,isShadow,comment,attribute);
        }
    },
    "unaryOperation_e": {
        "type": "value",
        "json": {
            "type": "unaryOperation_e",
            "message0": "%1 %2",
            "args0": [
                Object.assign({},MotaActionBlocks.UnaryOperator_List,{
                    "name": "operator"
                }),
                {
                    "type": "input_value",
                    "name": "expression",
                    "check": MotaActionBlocks.expression
                }
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "unaryOperation_e"
        },
        "generFunc": function(block) {
            var operator = block.getFieldValue('operator');
            operator = MotaActionFunctions.pre('UnaryOperator_List')(operator,block,'operator','unaryOperation_e');
            var expression = Blockly.JavaScript.valueToCode(block, 'expression', 
              Blockly.JavaScript.ORDER_ATOMIC);
            if (expression==='') {
                throw new OmitedError(block,'expression','unaryOperation_e');
            }
            var code = MotaActionFunctions.defaultCode('unaryOperation_e',eval('['+MotaActionBlocks['unaryOperation_e'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["operator","expression"],
        "argsType": ["field","value"],
        "argsGrammarName": ["UnaryOperator_List","expression"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('unaryOperation_e',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('unaryOperation_e',inputs,next,isShadow,comment,attribute);
        }
    },
    "bool_e": {
        "type": "value",
        "json": {
            "type": "bool_e",
            "message0": ": %1",
            "args0": [
                Object.assign({},MotaActionBlocks.Bool,{
                    "name": "value"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "bool_e"
        },
        "generFunc": function(block) {
            var value = block.getFieldValue('value') === 'TRUE';
            value = MotaActionFunctions.pre('Bool')(value,block,'value','bool_e');
            var code = MotaActionFunctions.defaultCode('bool_e',eval('['+MotaActionBlocks['bool_e'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["value"],
        "argsType": ["field"],
        "argsGrammarName": ["Bool"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('bool_e',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('bool_e',inputs,next,isShadow,comment,attribute);
        }
    },
    "idString_e": {
        "type": "value",
        "json": {
            "type": "idString_e",
            "message0": "%1",
            "args0": [
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "id"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "idString_e"
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','idString_e');
            }
            id = MotaActionFunctions.pre('IdString')(id,block,'id','idString_e');
            var code = MotaActionFunctions.defaultCode('idString_e',eval('['+MotaActionBlocks['idString_e'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["id"],
        "argsType": ["field"],
        "argsGrammarName": ["IdString"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('idString_e',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('idString_e',inputs,next,isShadow,comment,attribute);
        }
    },
    "idIdList_e": {
        "type": "value",
        "json": {
            "type": "idIdList_e",
            "message0": "%1 : %2",
            "args0": [
                Object.assign({},MotaActionBlocks.Id_List,{
                    "name": "type"
                }),
                Object.assign({},MotaActionBlocks.IdText,{
                    "name": "value"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "idString_e"
        },
        "generFunc": function(block) {
            var type = block.getFieldValue('type');
            type = MotaActionFunctions.pre('Id_List')(type,block,'type','idIdList_e');
            var value = block.getFieldValue('value');
            if (value==='') {
                throw new OmitedError(block,'value','idIdList_e');
            }
            value = MotaActionFunctions.pre('IdText')(value,block,'value','idIdList_e');
            var code = MotaActionFunctions.defaultCode('idIdList_e',eval('['+MotaActionBlocks['idIdList_e'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["type","value"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Id_List","IdText"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('idIdList_e',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('idIdList_e',inputs,next,isShadow,comment,attribute);
        }
    },
    "idFixedList_e": {
        "type": "value",
        "json": {
            "type": "idFixedList_e",
            "message0": "%1",
            "args0": [
                Object.assign({},MotaActionBlocks.FixedId_List,{
                    "name": "id"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "idString_e"
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            id = MotaActionFunctions.pre('FixedId_List')(id,block,'id','idFixedList_e');
            var code = MotaActionFunctions.defaultCode('idFixedList_e',eval('['+MotaActionBlocks['idFixedList_e'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["id"],
        "argsType": ["field"],
        "argsGrammarName": ["FixedId_List"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('idFixedList_e',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('idFixedList_e',inputs,next,isShadow,comment,attribute);
        }
    },
    "enemyattr_e": {
        "type": "value",
        "json": {
            "type": "enemyattr_e",
            "message0": "怪物 %1 的 %2",
            "args0": [
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "enemyId"
                }),
                Object.assign({},MotaActionBlocks.EnemyId_List,{
                    "name": "property"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "enemyattr_e"
        },
        "generFunc": function(block) {
            var enemyId = block.getFieldValue('enemyId');
            if (enemyId==='') {
                throw new OmitedError(block,'enemyId','enemyattr_e');
            }
            enemyId = MotaActionFunctions.pre('IdString')(enemyId,block,'enemyId','enemyattr_e');
            var property = block.getFieldValue('property');
            property = MotaActionFunctions.pre('EnemyId_List')(property,block,'property','enemyattr_e');
            var code = MotaActionFunctions.defaultCode('enemyattr_e',eval('['+MotaActionBlocks['enemyattr_e'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["enemyId","property"],
        "argsType": ["field","field"],
        "argsGrammarName": ["IdString","EnemyId_List"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('enemyattr_e',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('enemyattr_e',inputs,next,isShadow,comment,attribute);
        }
    },
    "blockId_e": {
        "type": "value",
        "json": {
            "type": "blockId_e",
            "message0": "图块ID: %1 , %2",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "blockId_e"
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','blockId_e');
            }
            x = MotaActionFunctions.pre('PosString')(x,block,'x','blockId_e');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','blockId_e');
            }
            y = MotaActionFunctions.pre('PosString')(y,block,'y','blockId_e');
            var code = MotaActionFunctions.defaultCode('blockId_e',eval('['+MotaActionBlocks['blockId_e'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["x","y"],
        "argsType": ["field","field"],
        "argsGrammarName": ["PosString","PosString"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('blockId_e',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('blockId_e',inputs,next,isShadow,comment,attribute);
        }
    },
    "blockNumber_e": {
        "type": "value",
        "json": {
            "type": "blockNumber_e",
            "message0": "图块数字: %1 , %2",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "blockNumber_e"
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','blockNumber_e');
            }
            x = MotaActionFunctions.pre('PosString')(x,block,'x','blockNumber_e');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','blockNumber_e');
            }
            y = MotaActionFunctions.pre('PosString')(y,block,'y','blockNumber_e');
            var code = MotaActionFunctions.defaultCode('blockNumber_e',eval('['+MotaActionBlocks['blockNumber_e'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["x","y"],
        "argsType": ["field","field"],
        "argsGrammarName": ["PosString","PosString"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('blockNumber_e',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('blockNumber_e',inputs,next,isShadow,comment,attribute);
        }
    },
    "blockCls_e": {
        "type": "value",
        "json": {
            "type": "blockCls_e",
            "message0": "图块类别: %1 , %2",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "blockCls_e"
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','blockCls_e');
            }
            x = MotaActionFunctions.pre('PosString')(x,block,'x','blockCls_e');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','blockCls_e');
            }
            y = MotaActionFunctions.pre('PosString')(y,block,'y','blockCls_e');
            var code = MotaActionFunctions.defaultCode('blockCls_e',eval('['+MotaActionBlocks['blockCls_e'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["x","y"],
        "argsType": ["field","field"],
        "argsGrammarName": ["PosString","PosString"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('blockCls_e',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('blockCls_e',inputs,next,isShadow,comment,attribute);
        }
    },
    "nextXY_e": {
        "type": "value",
        "json": {
            "type": "nextXY_e",
            "message0": "前方 %1 格的 %2",
            "args0": [
                Object.assign({},MotaActionBlocks.NInt,{
                    "name": "distance"
                }),
                Object.assign({},MotaActionBlocks.NextXY_List,{
                    "name": "type"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "nextXY_e"
        },
        "generFunc": function(block) {
            var distance = block.getFieldValue('distance');
            if (distance==='') {
                throw new OmitedError(block,'distance','nextXY_e');
            }
            distance = MotaActionFunctions.pre('NInt')(distance,block,'distance','nextXY_e');
            var type = block.getFieldValue('type');
            type = MotaActionFunctions.pre('NextXY_List')(type,block,'type','nextXY_e');
            var code = MotaActionFunctions.defaultCode('nextXY_e',eval('['+MotaActionBlocks['nextXY_e'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["distance","type"],
        "argsType": ["field","field"],
        "argsGrammarName": ["NInt","NextXY_List"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('nextXY_e',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('nextXY_e',inputs,next,isShadow,comment,attribute);
        }
    },
    "isReplaying_e": {
        "type": "value",
        "json": {
            "type": "isReplaying_e",
            "message0": "录像播放中",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "isReplaying_e"
        },
        "generFunc": function(block) {
            var code = MotaActionFunctions.defaultCode('isReplaying_e',eval('['+MotaActionBlocks['isReplaying_e'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('isReplaying_e',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('isReplaying_e',inputs,next,isShadow,comment,attribute);
        }
    },
    "hasVisitedFloor_e": {
        "type": "value",
        "json": {
            "type": "hasVisitedFloor_e",
            "message0": "访问过楼层 %1",
            "args0": [
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "floorId"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "hasVisitedFloor_e"
        },
        "generFunc": function(block) {
            var floorId = block.getFieldValue('floorId');
            if (floorId==='') {
                throw new OmitedError(block,'floorId','hasVisitedFloor_e');
            }
            floorId = MotaActionFunctions.pre('IdString')(floorId,block,'floorId','hasVisitedFloor_e');
            var code = MotaActionFunctions.defaultCode('hasVisitedFloor_e',eval('['+MotaActionBlocks['hasVisitedFloor_e'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["floorId"],
        "argsType": ["field"],
        "argsGrammarName": ["IdString"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('hasVisitedFloor_e',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('hasVisitedFloor_e',inputs,next,isShadow,comment,attribute);
        }
    },
    "isShopVisited_e": {
        "type": "value",
        "json": {
            "type": "isShopVisited_e",
            "message0": "开启过商店 %1",
            "args0": [
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "shopId"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "isShopVisited_e"
        },
        "generFunc": function(block) {
            var shopId = block.getFieldValue('shopId');
            if (shopId==='') {
                throw new OmitedError(block,'shopId','isShopVisited_e');
            }
            shopId = MotaActionFunctions.pre('IdString')(shopId,block,'shopId','isShopVisited_e');
            var code = MotaActionFunctions.defaultCode('isShopVisited_e',eval('['+MotaActionBlocks['isShopVisited_e'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["shopId"],
        "argsType": ["field"],
        "argsGrammarName": ["IdString"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('isShopVisited_e',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('isShopVisited_e',inputs,next,isShadow,comment,attribute);
        }
    },
    "hasEquip_e": {
        "type": "value",
        "json": {
            "type": "hasEquip_e",
            "message0": "当前正在装备 %1",
            "args0": [
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "equipId"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "hasEquip_e"
        },
        "generFunc": function(block) {
            var equipId = block.getFieldValue('equipId');
            if (equipId==='') {
                throw new OmitedError(block,'equipId','hasEquip_e');
            }
            equipId = MotaActionFunctions.pre('IdString')(equipId,block,'equipId','hasEquip_e');
            var code = MotaActionFunctions.defaultCode('hasEquip_e',eval('['+MotaActionBlocks['hasEquip_e'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["equipId"],
        "argsType": ["field"],
        "argsGrammarName": ["IdString"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('hasEquip_e',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('hasEquip_e',inputs,next,isShadow,comment,attribute);
        }
    },
    "canBattle_e": {
        "type": "value",
        "json": {
            "type": "canBattle_e",
            "message0": "当前能否战斗 %1",
            "args0": [
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "enemyId"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "canBattle_e"
        },
        "generFunc": function(block) {
            var enemyId = block.getFieldValue('enemyId');
            if (enemyId==='') {
                throw new OmitedError(block,'enemyId','canBattle_e');
            }
            enemyId = MotaActionFunctions.pre('IdString')(enemyId,block,'enemyId','canBattle_e');
            var code = MotaActionFunctions.defaultCode('canBattle_e',eval('['+MotaActionBlocks['canBattle_e'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["enemyId"],
        "argsType": ["field"],
        "argsGrammarName": ["IdString"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('canBattle_e',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('canBattle_e',inputs,next,isShadow,comment,attribute);
        }
    },
    "damage_e": {
        "type": "value",
        "json": {
            "type": "damage_e",
            "message0": "战斗伤害 怪物ID %1",
            "args0": [
                Object.assign({},MotaActionBlocks.IdString,{
                    "name": "enemyId"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "damage_e"
        },
        "generFunc": function(block) {
            var enemyId = block.getFieldValue('enemyId');
            if (enemyId==='') {
                throw new OmitedError(block,'enemyId','damage_e');
            }
            enemyId = MotaActionFunctions.pre('IdString')(enemyId,block,'enemyId','damage_e');
            var code = MotaActionFunctions.defaultCode('damage_e',eval('['+MotaActionBlocks['damage_e'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["enemyId"],
        "argsType": ["field"],
        "argsGrammarName": ["IdString"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('damage_e',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('damage_e',inputs,next,isShadow,comment,attribute);
        }
    },
    "damage_1_e": {
        "type": "value",
        "json": {
            "type": "damage_1_e",
            "message0": "战斗伤害 点坐标 x %1 y %2",
            "args0": [
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "x"
                }),
                Object.assign({},MotaActionBlocks.PosString,{
                    "name": "y"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "damage_1_e"
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','damage_1_e');
            }
            x = MotaActionFunctions.pre('PosString')(x,block,'x','damage_1_e');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','damage_1_e');
            }
            y = MotaActionFunctions.pre('PosString')(y,block,'y','damage_1_e');
            var code = MotaActionFunctions.defaultCode('damage_1_e',eval('['+MotaActionBlocks['damage_1_e'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["x","y"],
        "argsType": ["field","field"],
        "argsGrammarName": ["PosString","PosString"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('damage_1_e',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('damage_1_e',inputs,next,isShadow,comment,attribute);
        }
    },
    "rand_e": {
        "type": "value",
        "json": {
            "type": "rand_e",
            "message0": "随机数 [0,  %1 )",
            "args0": [
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "max"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "rand_e"
        },
        "generFunc": function(block) {
            var max = block.getFieldValue('max');
            max = MotaActionFunctions.pre('Int')(max,block,'max','rand_e');
            var code = MotaActionFunctions.defaultCode('rand_e',eval('['+MotaActionBlocks['rand_e'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["max"],
        "argsType": ["field"],
        "argsGrammarName": ["Int"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('rand_e',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('rand_e',inputs,next,isShadow,comment,attribute);
        }
    },
    "equip_e": {
        "type": "value",
        "json": {
            "type": "equip_e",
            "message0": "第 %1 格装备孔",
            "args0": [
                Object.assign({},MotaActionBlocks.Int,{
                    "name": "slot"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "equip_e"
        },
        "generFunc": function(block) {
            var slot = block.getFieldValue('slot');
            slot = MotaActionFunctions.pre('Int')(slot,block,'slot','equip_e');
            var code = MotaActionFunctions.defaultCode('equip_e',eval('['+MotaActionBlocks['equip_e'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["slot"],
        "argsType": ["field"],
        "argsGrammarName": ["Int"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('equip_e',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('equip_e',inputs,next,isShadow,comment,attribute);
        }
    },
    "idFlag_e": {
        "type": "value",
        "json": {
            "type": "idFlag_e",
            "message0": "独立开关 %1",
            "args0": [
                Object.assign({},MotaActionBlocks.Letter_List,{
                    "name": "letter"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "idString_e"
        },
        "generFunc": function(block) {
            var letter = block.getFieldValue('letter');
            letter = MotaActionFunctions.pre('Letter_List')(letter,block,'letter','idFlag_e');
            var code = MotaActionFunctions.defaultCode('idFlag_e',eval('['+MotaActionBlocks['idFlag_e'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["letter"],
        "argsType": ["field"],
        "argsGrammarName": ["Letter_List"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('idFlag_e',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('idFlag_e',inputs,next,isShadow,comment,attribute);
        }
    },
    "idTemp_e": {
        "type": "value",
        "json": {
            "type": "idTemp_e",
            "message0": "临时变量 %1",
            "args0": [
                Object.assign({},MotaActionBlocks.Letter_List,{
                    "name": "letter"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "idString_e"
        },
        "generFunc": function(block) {
            var letter = block.getFieldValue('letter');
            letter = MotaActionFunctions.pre('Letter_List')(letter,block,'letter','idTemp_e');
            var code = MotaActionFunctions.defaultCode('idTemp_e',eval('['+MotaActionBlocks['idTemp_e'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["letter"],
        "argsType": ["field"],
        "argsGrammarName": ["Letter_List"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('idTemp_e',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('idTemp_e',inputs,next,isShadow,comment,attribute);
        }
    },
    "evalString_e": {
        "type": "value",
        "json": {
            "type": "evalString_e",
            "message0": "%1",
            "args0": [
                Object.assign({},MotaActionBlocks.EvalString_Multi,{
                    "name": "value"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 330,
            "output": "evalString_e"
        },
        "generFunc": function(block) {
            var value = block.getFieldValue('value');
            if (value==='') {
                throw new OmitedError(block,'value','evalString_e');
            }
            value = MotaActionFunctions.pre('EvalString_Multi')(value,block,'value','evalString_e');
            var code = MotaActionFunctions.defaultCode('evalString_e',eval('['+MotaActionBlocks['evalString_e'].args.join(',')+']'),block);
            return [code, Blockly.JavaScript.ORDER_NONE];
        },
        "args": ["value"],
        "argsType": ["field"],
        "argsGrammarName": ["EvalString_Multi"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return MotaActionFunctions.fieldDefault('evalString_e',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return MotaActionFunctions.xmlText('evalString_e',inputs,next,isShadow,comment,attribute);
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


MotaActionFunctions={}


MotaActionFunctions.Int_pre = function(intstr) {
    return parseInt(intstr);
}

MotaActionFunctions.Number_pre = function(intstr) {
    return parseFloat(intstr);
}

//返回各LexerRule文本域的预处理函数,方便用来统一转义等等
MotaActionFunctions.pre = function(LexerId) {
    if (MotaActionFunctions.hasOwnProperty(LexerId+'_pre')) {
        return MotaActionFunctions[LexerId+'_pre'];
    }
    return function(obj,block,fieldName,blockType){return obj}
}



// MotaActionFunctions.fieldDefault
// 根据输入是整数字符串或null
// 第index个或者名字为key的域的默认值, null时返回所有field默认值的数组
MotaActionFunctions.fieldDefault = function (ruleName,keyOrIndex) {
    var rule = MotaActionBlocks[ruleName];
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



// MotaActionFunctions.defaultCode_TEXT
MotaActionFunctions.defaultCode_TEXT = function (ruleName,args,block) {
    var rule = MotaActionBlocks[ruleName];
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

MotaActionFunctions.defaultCode_JSON_TYPE='type'

MotaActionFunctions.parserPre={}
MotaActionFunctions.parserPre.pre = function(LexerId) {
    if (MotaActionFunctions.parserPre.hasOwnProperty(LexerId+'_pre')) {
        return MotaActionFunctions.parserPre[LexerId+'_pre'];
    }
    return function(obj,blockObj,fieldName,blockType,index){return obj}
}
/** @class */
MotaActionFunctions.parserClass = function (params) {
}
MotaActionFunctions.parserClass.prototype.parse = function (obj,next) {
    var blockType = obj[MotaActionFunctions.defaultCode_JSON_TYPE]
    var rule = MotaActionBlocks[blockType]
    if (MotaActionFunctions.parserPre.hasOwnProperty(blockType+'_pre')) {
        obj = MotaActionFunctions.parserPre[blockType+'_pre'](obj)
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
            input.push(MotaActionFunctions.parserPre.pre(LexerId)(dobj,obj,rule.args[index],blockType,index))
        }
    }
    return rule.xmlText(input,next)
}
MotaActionFunctions.parser=new MotaActionFunctions.parserClass()
MotaActionFunctions.parse=function(obj){
    var xml_text = MotaActionFunctions.parser.parse(obj);
    var xml = Blockly.Xml.textToDom('<xml>'+xml_text+'</xml>');
    MotaActionFunctions.workspace().clear();
    Blockly.Xml.domToWorkspace(xml, MotaActionFunctions.workspace());
}

// MotaActionFunctions.defaultCode_JSON
MotaActionFunctions.defaultCode_JSON = function (ruleName,args,block) {
    var rule = MotaActionBlocks[ruleName];
    var values=args
    var output={}
    var ret=''
    if (rule.type==='statement'||rule.type==='value') {
        output[MotaActionFunctions.defaultCode_JSON_TYPE]=rule.json.type
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

// MotaActionFunctions.defaultCode
MotaActionFunctions.defaultCode=MotaActionFunctions.defaultCode_JSON



// MotaActionFunctions.xmlText
// 构造这个方法是为了能够不借助workspace,从语法树直接构造图块结构
// inputs的第i个元素是第i个args的xmlText,null或undefined表示空
// next是其下一个语句的xmlText
MotaActionFunctions.xmlText = function (ruleName,inputs,next,isShadow,comment,attribute) {
    var rule = MotaActionBlocks[ruleName];
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
        if(noinput && inputType==='field' && MotaActionBlocks[rule.argsGrammarName[ii]].type!=='field_dropdown') continue;
        if(noinput && inputType==='field') {
            noinput = false;
            input = rule.fieldDefault(rule.args[ii])
        }
        if(noinput) input = '';
        if(inputType==='field' && MotaActionBlocks[rule.argsGrammarName[ii]].type==='field_checkbox')input=input?'TRUE':'FALSE';
        if(inputType!=='field') {
            var subList = false;
            var subrulename = rule.argsGrammarName[ii];
            var subrule = MotaActionBlocks[subrulename];
            if (subrule instanceof Array) {
                subrulename=subrule[subrule.length-1];
                subrule = MotaActionBlocks[subrulename];
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



// MotaActionFunctions.blocksIniter
// 把各方块的信息注册到Blockly中
MotaActionFunctions.blocksIniter = function(){
    var blocksobj = MotaActionBlocks;
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
                var mixinName = 'contextMenu_MotaAction_'+value.json.type
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


MotaActionFunctions.blocksIniter();


var toolbox = (function(){

    var toolboxXml=document.createElement('xml')

    // 调整这个obj来更改侧边栏和其中的方块
    // 可以直接填 '<block type="xxx">...</block>'
    // 标签 '<label text="标签文本"></label>'
    var toolboxObj = {
        // 每个键值对作为一页
        "statement": [
            // 所有语句块
            MotaActionBlocks["common_m"].xmlText(),
            MotaActionBlocks["event_m"].xmlText(),
            MotaActionBlocks["autoEvent_m"].xmlText(),
            MotaActionBlocks["level_m"].xmlText(),
            MotaActionBlocks["levelCase"].xmlText(),
            MotaActionBlocks["shop_m"].xmlText(),
            MotaActionBlocks["emptyshop"].xmlText(),
            MotaActionBlocks["shopsub"].xmlText(),
            MotaActionBlocks["shopChoices"].xmlText(),
            MotaActionBlocks["shopitem"].xmlText(),
            MotaActionBlocks["shopItemChoices"].xmlText(),
            MotaActionBlocks["shopcommonevent"].xmlText(),
            MotaActionBlocks["beforeBattle_m"].xmlText(),
            MotaActionBlocks["afterBattle_m"].xmlText(),
            MotaActionBlocks["afterGetItem_m"].xmlText(),
            MotaActionBlocks["afterOpenDoor_m"].xmlText(),
            MotaActionBlocks["firstArrive_m"].xmlText(),
            MotaActionBlocks["eachArrive_m"].xmlText(),
            MotaActionBlocks["changeFloor_m"].xmlText(),
            MotaActionBlocks["commonEvent_m"].xmlText(),
            MotaActionBlocks["item_m"].xmlText(),
            MotaActionBlocks["levelChoose_m"].xmlText(),
            MotaActionBlocks["levelChooseEmpty"].xmlText(),
            MotaActionBlocks["levelChooseChoice"].xmlText(),
            MotaActionBlocks["floorPartition_m"].xmlText(),
            MotaActionBlocks["floorPartitionEmpty"].xmlText(),
            MotaActionBlocks["floorPartitionItem"].xmlText(),
            MotaActionBlocks["equip_m"].xmlText(),
            MotaActionBlocks["equipKnown"].xmlText(),
            MotaActionBlocks["equipUnknown"].xmlText(),
            MotaActionBlocks["equipEmpty"].xmlText(),
            MotaActionBlocks["floorImage_m"].xmlText(),
            MotaActionBlocks["floorOneImage"].xmlText(),
            MotaActionBlocks["floorEmptyImage"].xmlText(),
            MotaActionBlocks["doorInfo_m"].xmlText(),
            MotaActionBlocks["doorKeyKnown"].xmlText(),
            MotaActionBlocks["doorKeyUnknown"].xmlText(),
            MotaActionBlocks["doorKeyEmpty"].xmlText(),
            MotaActionBlocks["faceIds_m"].xmlText(),
            MotaActionBlocks["mainStyle_m"].xmlText(),
            MotaActionBlocks["nameMap_m"].xmlText(),
            MotaActionBlocks["nameMapBgm"].xmlText(),
            MotaActionBlocks["nameMapSoundKnown"].xmlText(),
            MotaActionBlocks["nameMapSoundUnknown"].xmlText(),
            MotaActionBlocks["nameMapImage"].xmlText(),
            MotaActionBlocks["nameMapAnimate"].xmlText(),
            MotaActionBlocks["nameMapUnknown"].xmlText(),
            MotaActionBlocks["nameMapEmpty"].xmlText(),
            MotaActionBlocks["splitImages_m"].xmlText(),
            MotaActionBlocks["splitImagesOne"].xmlText(),
            MotaActionBlocks["splitImagesEmpty"].xmlText(),
            MotaActionBlocks["text_0_s"].xmlText(),
            MotaActionBlocks["text_1_s"].xmlText(),
            MotaActionBlocks["text_2_s"].xmlText(),
            MotaActionBlocks["textDrawing"].xmlText(),
            MotaActionBlocks["textDrawingEmpty"].xmlText(),
            MotaActionBlocks["moveTextBox_s"].xmlText(),
            MotaActionBlocks["clearTextBox_s"].xmlText(),
            MotaActionBlocks["comment_s"].xmlText(),
            MotaActionBlocks["autoText_s"].xmlText(),
            MotaActionBlocks["scrollText_s"].xmlText(),
            MotaActionBlocks["setText_s"].xmlText(),
            MotaActionBlocks["tip_s"].xmlText(),
            MotaActionBlocks["setValue_s"].xmlText(),
            MotaActionBlocks["setEnemy_s"].xmlText(),
            MotaActionBlocks["setEquip_s"].xmlText(),
            MotaActionBlocks["setEnemyOnPoint_s"].xmlText(),
            MotaActionBlocks["resetEnemyOnPoint_s"].xmlText(),
            MotaActionBlocks["moveEnemyOnPoint_s"].xmlText(),
            MotaActionBlocks["moveEnemyOnPoint_1_s"].xmlText(),
            MotaActionBlocks["setFloor_s"].xmlText(),
            MotaActionBlocks["setGlobalAttribute_s"].xmlText(),
            MotaActionBlocks["setGlobalValue_s"].xmlText(),
            MotaActionBlocks["setGlobalFlag_s"].xmlText(),
            MotaActionBlocks["setNameMap_s"].xmlText(),
            MotaActionBlocks["show_s"].xmlText(),
            MotaActionBlocks["hide_s"].xmlText(),
            MotaActionBlocks["setBlockOpacity_s"].xmlText(),
            MotaActionBlocks["setBlockFilter_s"].xmlText(),
            MotaActionBlocks["trigger_s"].xmlText(),
            MotaActionBlocks["insert_1_s"].xmlText(),
            MotaActionBlocks["insert_2_s"].xmlText(),
            MotaActionBlocks["exit_s"].xmlText(),
            MotaActionBlocks["setBlock_s"].xmlText(),
            MotaActionBlocks["turnBlock_s"].xmlText(),
            MotaActionBlocks["showFloorImg_s"].xmlText(),
            MotaActionBlocks["hideFloorImg_s"].xmlText(),
            MotaActionBlocks["showBgFgMap_s"].xmlText(),
            MotaActionBlocks["hideBgFgMap_s"].xmlText(),
            MotaActionBlocks["setBgFgBlock_s"].xmlText(),
            MotaActionBlocks["setHeroIcon_s"].xmlText(),
            MotaActionBlocks["update_s"].xmlText(),
            MotaActionBlocks["showStatusBar_s"].xmlText(),
            MotaActionBlocks["hideStatusBar_s"].xmlText(),
            MotaActionBlocks["setHeroOpacity_s"].xmlText(),
            MotaActionBlocks["sleep_s"].xmlText(),
            MotaActionBlocks["battle_s"].xmlText(),
            MotaActionBlocks["battle_1_s"].xmlText(),
            MotaActionBlocks["openDoor_s"].xmlText(),
            MotaActionBlocks["closeDoor_s"].xmlText(),
            MotaActionBlocks["changeFloor_s"].xmlText(),
            MotaActionBlocks["changePos_s"].xmlText(),
            MotaActionBlocks["useItem_s"].xmlText(),
            MotaActionBlocks["loadEquip_s"].xmlText(),
            MotaActionBlocks["unloadEquip_s"].xmlText(),
            MotaActionBlocks["openShop_s"].xmlText(),
            MotaActionBlocks["disableShop_s"].xmlText(),
            MotaActionBlocks["follow_s"].xmlText(),
            MotaActionBlocks["unfollow_s"].xmlText(),
            MotaActionBlocks["vibrate_s"].xmlText(),
            MotaActionBlocks["animate_s"].xmlText(),
            MotaActionBlocks["animate_1_s"].xmlText(),
            MotaActionBlocks["stopAnimate_s"].xmlText(),
            MotaActionBlocks["setViewport_s"].xmlText(),
            MotaActionBlocks["setViewport_1_s"].xmlText(),
            MotaActionBlocks["lockViewport_s"].xmlText(),
            MotaActionBlocks["showImage_s"].xmlText(),
            MotaActionBlocks["showImage_1_s"].xmlText(),
            MotaActionBlocks["showTextImage_s"].xmlText(),
            MotaActionBlocks["hideImage_s"].xmlText(),
            MotaActionBlocks["showGif_s"].xmlText(),
            MotaActionBlocks["moveImage_s"].xmlText(),
            MotaActionBlocks["rotateImage_s"].xmlText(),
            MotaActionBlocks["scaleImage_s"].xmlText(),
            MotaActionBlocks["setCurtain_0_s"].xmlText(),
            MotaActionBlocks["setCurtain_1_s"].xmlText(),
            MotaActionBlocks["screenFlash_s"].xmlText(),
            MotaActionBlocks["setWeather_s"].xmlText(),
            MotaActionBlocks["move_s"].xmlText(),
            MotaActionBlocks["moveDirection"].xmlText(),
            MotaActionBlocks["moveAction_s"].xmlText(),
            MotaActionBlocks["moveHero_s"].xmlText(),
            MotaActionBlocks["jump_s"].xmlText(),
            MotaActionBlocks["jump_1_s"].xmlText(),
            MotaActionBlocks["jumpHero_s"].xmlText(),
            MotaActionBlocks["jumpHero_1_s"].xmlText(),
            MotaActionBlocks["playBgm_s"].xmlText(),
            MotaActionBlocks["pauseBgm_s"].xmlText(),
            MotaActionBlocks["resumeBgm_s"].xmlText(),
            MotaActionBlocks["loadBgm_s"].xmlText(),
            MotaActionBlocks["freeBgm_s"].xmlText(),
            MotaActionBlocks["playSound_s"].xmlText(),
            MotaActionBlocks["playSound_1_s"].xmlText(),
            MotaActionBlocks["stopSound_s"].xmlText(),
            MotaActionBlocks["setVolume_s"].xmlText(),
            MotaActionBlocks["setBgmSpeed_s"].xmlText(),
            MotaActionBlocks["win_s"].xmlText(),
            MotaActionBlocks["lose_s"].xmlText(),
            MotaActionBlocks["restart_s"].xmlText(),
            MotaActionBlocks["input_s"].xmlText(),
            MotaActionBlocks["input2_s"].xmlText(),
            MotaActionBlocks["if_s"].xmlText(),
            MotaActionBlocks["if_1_s"].xmlText(),
            MotaActionBlocks["switch_s"].xmlText(),
            MotaActionBlocks["switchCase"].xmlText(),
            MotaActionBlocks["choices_s"].xmlText(),
            MotaActionBlocks["choicesContext"].xmlText(),
            MotaActionBlocks["confirm_s"].xmlText(),
            MotaActionBlocks["for_s"].xmlText(),
            MotaActionBlocks["forEach_s"].xmlText(),
            MotaActionBlocks["while_s"].xmlText(),
            MotaActionBlocks["dowhile_s"].xmlText(),
            MotaActionBlocks["break_s"].xmlText(),
            MotaActionBlocks["continue_s"].xmlText(),
            MotaActionBlocks["wait_s"].xmlText(),
            MotaActionBlocks["waitContext_1"].xmlText(),
            MotaActionBlocks["waitContext_2"].xmlText(),
            MotaActionBlocks["waitContext_3"].xmlText(),
            MotaActionBlocks["waitContext_4"].xmlText(),
            MotaActionBlocks["waitContext_empty"].xmlText(),
            MotaActionBlocks["waitAsync_s"].xmlText(),
            MotaActionBlocks["stopAsync_s"].xmlText(),
            MotaActionBlocks["callBook_s"].xmlText(),
            MotaActionBlocks["callSave_s"].xmlText(),
            MotaActionBlocks["autoSave_s"].xmlText(),
            MotaActionBlocks["forbidSave_s"].xmlText(),
            MotaActionBlocks["callLoad_s"].xmlText(),
            MotaActionBlocks["previewUI_s"].xmlText(),
            MotaActionBlocks["clearMap_s"].xmlText(),
            MotaActionBlocks["setAttribute_s"].xmlText(),
            MotaActionBlocks["setFilter_s"].xmlText(),
            MotaActionBlocks["fillText_s"].xmlText(),
            MotaActionBlocks["fillBoldText_s"].xmlText(),
            MotaActionBlocks["drawTextContent_s"].xmlText(),
            MotaActionBlocks["fillRect_s"].xmlText(),
            MotaActionBlocks["strokeRect_s"].xmlText(),
            MotaActionBlocks["drawLine_s"].xmlText(),
            MotaActionBlocks["drawArrow_s"].xmlText(),
            MotaActionBlocks["fillPolygon_s"].xmlText(),
            MotaActionBlocks["strokePolygon_s"].xmlText(),
            MotaActionBlocks["fillEllipse_s"].xmlText(),
            MotaActionBlocks["strokeEllipse_s"].xmlText(),
            MotaActionBlocks["fillArc_s"].xmlText(),
            MotaActionBlocks["strokeArc_s"].xmlText(),
            MotaActionBlocks["drawImage_s"].xmlText(),
            MotaActionBlocks["drawImage_1_s"].xmlText(),
            MotaActionBlocks["drawIcon_s"].xmlText(),
            MotaActionBlocks["drawBackground_s"].xmlText(),
            MotaActionBlocks["drawSelector_s"].xmlText(),
            MotaActionBlocks["drawSelector_1_s"].xmlText(),
            MotaActionBlocks["unknown_s"].xmlText(),
            MotaActionBlocks["function_s"].xmlText(),
            MotaActionBlocks["pass_s"].xmlText(),
        ],
        "value": [
            // 所有值块
            MotaActionBlocks["op2_e"].xmlText(),
            MotaActionBlocks["negate_e"].xmlText(),
            MotaActionBlocks["unaryOperation_e"].xmlText(),
            MotaActionBlocks["bool_e"].xmlText(),
            MotaActionBlocks["idString_e"].xmlText(),
            MotaActionBlocks["idIdList_e"].xmlText(),
            MotaActionBlocks["idFixedList_e"].xmlText(),
            MotaActionBlocks["enemyattr_e"].xmlText(),
            MotaActionBlocks["blockId_e"].xmlText(),
            MotaActionBlocks["blockNumber_e"].xmlText(),
            MotaActionBlocks["blockCls_e"].xmlText(),
            MotaActionBlocks["nextXY_e"].xmlText(),
            MotaActionBlocks["isReplaying_e"].xmlText(),
            MotaActionBlocks["hasVisitedFloor_e"].xmlText(),
            MotaActionBlocks["isShopVisited_e"].xmlText(),
            MotaActionBlocks["hasEquip_e"].xmlText(),
            MotaActionBlocks["canBattle_e"].xmlText(),
            MotaActionBlocks["damage_e"].xmlText(),
            MotaActionBlocks["damage_1_e"].xmlText(),
            MotaActionBlocks["rand_e"].xmlText(),
            MotaActionBlocks["equip_e"].xmlText(),
            MotaActionBlocks["idFlag_e"].xmlText(),
            MotaActionBlocks["idTemp_e"].xmlText(),
            MotaActionBlocks["evalString_e"].xmlText(),
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
    MotaActionFunctions.workspace = function(){return workspace}
    
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
    