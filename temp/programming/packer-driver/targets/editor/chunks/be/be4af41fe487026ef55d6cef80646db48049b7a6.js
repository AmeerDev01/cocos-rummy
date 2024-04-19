System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, sp, BaseComponent, SkeletonAnimationPlayer, _dec, _class, _crd, ccclass, property, phoenix_yuanbao_totalBet;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletonAnimationPlayer(extras) {
    _reporterNs.report("SkeletonAnimationPlayer", "../SkeletonPlay", _context.meta, extras);
  }

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
      sp = _cc.sp;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      SkeletonAnimationPlayer = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e7b9fOaF/dBKa8B5b4ZIpCT", "phoenix_yuanbao_totalBet", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'SkeletalAnimationState', 'sp', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("phoenix_yuanbao_totalBet", phoenix_yuanbao_totalBet = (_dec = ccclass('phoenix_yuanbao_totalBet'), _dec(_class = class phoenix_yuanbao_totalBet extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_label_total_multipl: new Label(),
            props_label_total_winNum: new Label(),
            props_skeleton: new Node()
          };
          this.props = {
            yuanBaoRate: null,
            yuanBaoWinNum: null
          };
          this.events = {
            killSelfHandler: () => {}
          };
        }

        start() {
          this.destroyView();
        }

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === "yuanBaoRate") {
            if (value.cur) {
              this.propertyNode.props_label_total_multipl.string = value.cur;
            }
          }

          if (key === "yuanBaoWinNum") {
            if (value.cur) {
              this.propertyNode.props_label_total_winNum.string = Number(value.cur).formatAmountWithCommas();
            }
          }
        }

        destroyView() {
          const titleSkeleton = this.propertyNode.props_skeleton.getComponent(sp.Skeleton);
          let count = 0;
          new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
            error: Error()
          }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(titleSkeleton, 'animation', true, () => {
            count++; // if (count > 1) {

            this.events.killSelfHandler(); // this.node.destroy()
            // }
          }).playAnimation();
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=be4af41fe487026ef55d6cef80646db48049b7a6.js.map