System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Sprite, Color, Crash_DataManager, _dec, _class, _crd, ccclass, property, Crash_PlayerItem;

  function _reportPossibleCrUseOfCrash_DataManager(extras) {
    _reporterNs.report("Crash_DataManager", "db://assets/script/subGame/Crash/manager/Crash_DataManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      Crash_DataManager = _unresolved_2.Crash_DataManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1d79fO6KDVALanCDOGDGIq4", "Crash_PlayerItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Sprite', 'Color']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Crash_PlayerItem", Crash_PlayerItem = (_dec = ccclass('PlayerItem'), _dec(_class = class Crash_PlayerItem extends Component {
        constructor(...args) {
          super(...args);
          this.itemInfo = {};
          this.state = true;
          this.isMe = false;
        }

        init(item, isMe) {
          if (isMe) {
            this.isMe = true;
            this.node.getComponent(Sprite).color = new Color(255, 122, 122);
          }

          this.itemInfo = item;
          this.node.getChildByName('label_name').getComponent(Label).string = item.memberName;
          this.node.getChildByName('label_number').getComponent(Label).string = item.gold.formatAmountWithCommas();
          let sprList = (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
            error: Error()
          }), Crash_DataManager) : Crash_DataManager).getInstance().getHeadSpriteFrame();
          let headImgUrl = `head_circle_${item.avatarIndex}`;
          let spr = sprList.find(item => {
            return item.name == headImgUrl;
          });
          this.node.getChildByName('headImg').getComponent(Sprite).spriteFrame = spr;

          if (item.odds) {
            this.node.getChildByName('label_rate').getComponent(Label).string = 'x' + item.odds;
          }
        }

        isShowWin() {
          this.node.getChildByName('win').active = true;
        }

        getoperated() {
          return this.state;
        }

        getisMe() {
          return this.isMe;
        }

        operated() {
          this.state = false;
        }

        getItemInfo() {
          return this.itemInfo;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=85e573aeee437521fe3ee8777464c0e1936d829c.js.map