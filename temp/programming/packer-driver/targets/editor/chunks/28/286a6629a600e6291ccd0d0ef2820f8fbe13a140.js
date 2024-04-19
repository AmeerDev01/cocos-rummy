System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, _dec, _class, _crd, ccclass, property, phoenix_totalBet;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2b924WEOShHq4WzIti8127P", "phoenix_totalBet", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("phoenix_totalBet", phoenix_totalBet = (_dec = ccclass('phoenix_totalBet'), _dec(_class = class phoenix_totalBet extends Component {
        start() {}

        setTotalText(data) {
          this.node.getChildByName('Label_total_multiple').getComponent(Label).string = data.yuanBaoMagnification;
          this.node.getChildByName('Label_total_winNum').getComponent(Label).string = data.yuanBaoAmount;
        }

        destroyed() {
          this.node.destroy();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=286a6629a600e6291ccd0d0ef2820f8fbe13a140.js.map