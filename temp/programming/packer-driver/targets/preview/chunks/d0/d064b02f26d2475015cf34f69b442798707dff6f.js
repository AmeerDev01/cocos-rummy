System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, Sprite, SpriteFrame, BaseComponent, omitStr, bundleCommon, bundleBanDar, gameCacheData, _dec, _class, _crd, ccclass, property, Bandar_win;

  function updateWinUsers(node) {
    var winChild = node.children.filter(v => v.name.startsWith('props_spr_user_bg'));
    winChild.forEach(v => {
      v.active = false;
      v.getChildByName("Label_user_name").getComponent(Label).string = "";
      v.getChildByName("Label_user_gold").getComponent(Label).string = "";
      (_crd && bundleBanDar === void 0 ? (_reportPossibleCrUseOfbundleBanDar({
        error: Error()
      }), bundleBanDar) : bundleBanDar).load("img/head1/spriteFrame", SpriteFrame, (err, sp) => {
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
          var goldNum = item.gold.formatAmountWithLetter();
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

  function _reportPossibleCrUseOfbundleBanDar(extras) {
    _reporterNs.report("bundleBanDar", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameCacheData(extras) {
    _reporterNs.report("gameCacheData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeadType(extras) {
    _reporterNs.report("HeadType", "../type", _context.meta, extras);
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
      bundleBanDar = _unresolved_4.bundleBanDar;
    }, function (_unresolved_5) {
      gameCacheData = _unresolved_5.gameCacheData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7fd7cN3Gf5MZrku3uFDpftC", "Bandar_win", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Node', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bandar_win", Bandar_win = (_dec = ccclass('Bandar_win'), _dec(_class = class Bandar_win extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_spr_win_bg: new Node(),
            props_label_win_num: new Node()
          };
          this.props = {
            myInfo: null // roomWinInfo:[]

          };
          this.events = {
            onClosePanel: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {//    this.propertyNode.props_spr_win_bg.on(Node.EventType.TOUCH_END,()=>{
          // 	this.events.onClosePanel()
          // 	playBtnClick();
          //    })
        }

        useProps(key, value) {
          if (key === "myInfo") {// updateWinUsers(this.node)
            // if(value.cur.winGold===0){
            // 	this.propertyNode.props_label_win_num.getComponent(Label).string=value.cur.winGold
            // }else{
            // 	this.propertyNode.props_label_win_num.getComponent(Label).string="+"+value.cur.winGold.formatAmountWithCommas()
            // }
          }
        }

        updateWinsAndLosses(myInfo) {
          updateWinUsers(this.node);

          if (myInfo.winGold === 0) {
            this.propertyNode.props_label_win_num.getComponent(Label).string = myInfo.winGold + "";
          } else {
            this.propertyNode.props_label_win_num.getComponent(Label).string = "+" + myInfo.winGold.formatAmountWithCommas();
          }
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d064b02f26d2475015cf34f69b442798707dff6f.js.map