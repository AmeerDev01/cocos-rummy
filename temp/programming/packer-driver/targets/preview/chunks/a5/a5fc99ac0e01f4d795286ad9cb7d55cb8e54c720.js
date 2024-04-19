System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, Sprite, SpriteFrame, BaseComponent, omitStr, bundleCommon, bundleDragonTiger, formatNumber, gameCacheData, _dec, _class, _crd, ccclass, property, DragonTiger_lose;

  function updateWinUsers(node) {
    var winChild = node.children.filter(v => v.name.startsWith('props_spr_user_bg'));
    winChild.forEach(v => {
      v.active = false;
      v.getChildByName("Label_user_name").getComponent(Label).string = "";
      v.getChildByName("Label_user_gold").getComponent(Label).string = "";
      (_crd && bundleDragonTiger === void 0 ? (_reportPossibleCrUseOfbundleDragonTiger({
        error: Error()
      }), bundleDragonTiger) : bundleDragonTiger).load("img/head1/spriteFrame", SpriteFrame, (err, sp) => {
        if (!err) {
          v.getChildByName("spr_user_head").getComponent(Sprite).spriteFrame = sp;
        }
      });
    });
    (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
      error: Error()
    }), gameCacheData) : gameCacheData).winList.forEach((item, index) => {
      winChild.forEach((v, i) => {
        if (index === i) {
          var goldNum = (_crd && formatNumber === void 0 ? (_reportPossibleCrUseOfformatNumber({
            error: Error()
          }), formatNumber) : formatNumber)(item.gold);
          v.active = true;
          v.getChildByName("Label_user_name").getComponent(Label).string = (_crd && omitStr === void 0 ? (_reportPossibleCrUseOfomitStr({
            error: Error()
          }), omitStr) : omitStr)(item.memberName, 12);
          v.getChildByName("Label_user_gold").getComponent(Label).string = "+" + goldNum;
          (_crd && bundleCommon === void 0 ? (_reportPossibleCrUseOfbundleCommon({
            error: Error()
          }), bundleCommon) : bundleCommon).load("resource/head/head_circle_" + item.icon + "/spriteFrame", SpriteFrame, (err, sp) => {
            if (!err) {
              v.getChildByName("spr_user_head").getComponent(Sprite).spriteFrame = sp;
            }
          });
        }
      });
    });
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfomitStr(extras) {
    _reporterNs.report("omitStr", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbundleCommon(extras) {
    _reporterNs.report("bundleCommon", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbundleDragonTiger(extras) {
    _reporterNs.report("bundleDragonTiger", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfformatNumber(extras) {
    _reporterNs.report("formatNumber", "./DragonTiger_win", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinInfo(extras) {
    _reporterNs.report("WinInfo", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameCacheData(extras) {
    _reporterNs.report("gameCacheData", "../type", _context.meta, extras);
  }

  _export("updateWinUsers", updateWinUsers);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      omitStr = _unresolved_3.omitStr;
    }, function (_unresolved_4) {
      bundleCommon = _unresolved_4.bundleCommon;
      bundleDragonTiger = _unresolved_4.bundleDragonTiger;
    }, function (_unresolved_5) {
      formatNumber = _unresolved_5.formatNumber;
    }, function (_unresolved_6) {
      gameCacheData = _unresolved_6.gameCacheData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "be77amlmedLoKUVtWmFBUfA", "DragonTiger_lose", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Node', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DragonTiger_lose", DragonTiger_lose = (_dec = ccclass('DragonTiger_lose'), _dec(_class = class DragonTiger_lose extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_spr_win_bg: new Node(),
            props_label_lose_num: new Node(),
            props_spr_user_bg1: new Node(),
            props_spr_user_bg2: new Node(),
            props_spr_user_bg3: new Node(),
            props_spr_user_bg4: new Node()
          };
          this.props = {
            winGold: 0,
            roomWinInfo: []
          };
          this.events = {
            onClosePanel: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {//   this.propertyNode.props_spr_win_bg.on(Node.EventType.TOUCH_END,()=>{
          // 	playBtnClick();
          // 	this.events.onClosePanel()
          //   })
        }

        useProps(key, value) {
          if (key === "winGold") {
            // console.log("winGold",value.cur);
            // console.log(Math.abs(value.cur));
            if (value.cur === 0) {
              this.propertyNode.props_label_lose_num.getComponent(Label).string = value.cur + "";
            } else {
              var goldNum = Math.abs(value.cur).formatAmountWithCommas();
              this.propertyNode.props_label_lose_num.getComponent(Label).string = "-" + goldNum;
            }
          }

          if (key === "roomWinInfo") {
            updateWinUsers(this.node); // let headNode:Node[]=[this.propertyNode.props_spr_user_bg1,this.propertyNode.props_spr_user_bg2,this.propertyNode.props_spr_user_bg3,this.propertyNode.props_spr_user_bg4]	
            //     for(let i=0;i<headNode.length;i++){
            // 		headNode[i].active=false;
            // 		headNode[i].getChildByName("Label_user_name").getComponent(Label).string="";
            // 		headNode[i].getChildByName("Label_user_gold").getComponent(Label).string=""
            // 		bundleDragonTiger.load(`img/head1/spriteFrame`, SpriteFrame, (err, sp) => {
            // 			if (!err) {
            // 				headNode[i].getChildByName(`spr_user_head`).getComponent(Sprite).spriteFrame = sp
            // 			}
            // 		})
            // 	}
            // 	for(let i=0;i<value.cur.length;i++){
            // 		for(let j=0;j<headNode.length;j++){
            // 			if(i===j){
            // 				let goldNum:string=formatNumber(value.cur[i].gold)
            // 				headNode[j].active=true;
            // 				headNode[j].getChildByName("Label_user_name").getComponent(Label).string=omitStr(value.cur[i].memberName,20);
            // 				headNode[j].getChildByName("Label_user_gold").getComponent(Label).string="+"+goldNum;
            // 				bundleCommon.load(`resource/head/head_circle_${value.cur[i].icon}/spriteFrame`, SpriteFrame, (err, sp) => {
            // 					if (!err) {
            // 						headNode[j].getChildByName(`spr_user_head`).getComponent(Sprite).spriteFrame = sp
            // 					}
            // 				})
            // 			}
            // 	    }
            //     }
          }
        }

        toggleCallback(event, customEventData) {}

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a5fc99ac0e01f4d795286ad9cb7d55cb8e54c720.js.map