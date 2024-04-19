System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, UITransform, Sprite, Crash_DataManager, Counter, Crash_ViewBase, _dec, _class, _crd, ccclass, property, Crash_Current_rateLayer;

  function _reportPossibleCrUseOfCrash_DataManager(extras) {
    _reporterNs.report("Crash_DataManager", "../manager/Crash_DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCounter(extras) {
    _reporterNs.report("Counter", "../utils/Counter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_ViewBase(extras) {
    _reporterNs.report("Crash_ViewBase", "../BaseView/Crash_ViewBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      UITransform = _cc.UITransform;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      Crash_DataManager = _unresolved_2.Crash_DataManager;
    }, function (_unresolved_3) {
      Counter = _unresolved_3.default;
    }, function (_unresolved_4) {
      Crash_ViewBase = _unresolved_4.Crash_ViewBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57282KVcKlHQ40ulsU1UP4T", "Crash_Current_rateLayer", undefined);

      __checkObsolete__(['_decorator', 'UITransform', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Crash_Current_rateLayer", Crash_Current_rateLayer = (_dec = ccclass('CrashCurrent_rateLayer'), _dec(_class = class Crash_Current_rateLayer extends (_crd && Crash_ViewBase === void 0 ? (_reportPossibleCrUseOfCrash_ViewBase({
        error: Error()
      }), Crash_ViewBase) : Crash_ViewBase) {
        constructor() {
          super(...arguments);
          this.numberSpriteFrame = null;
          this.counter = null;
          this.total = 0;
        }

        init(time, total) {
          var _this = this;

          this.total = total;
          this.numberSpriteFrame = (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
            error: Error()
          }), Crash_DataManager) : Crash_DataManager).getInstance().getNumberSpriteFrame();
          this._nodes['Multiple_5'].getComponent(Sprite).spriteFrame = this.numberSpriteFrame.find(item => item.name === 'zi_hj_beishu_x');
          this._nodes['Multiple_6'].getComponent(Sprite).spriteFrame = this.numberSpriteFrame.find(item => item.name === 'zi_hj_beishu_x');
          this._nodes['Multiple_7'].getComponent(Sprite).spriteFrame = this.numberSpriteFrame.find(item => item.name === 'zi_hj_beishu_x');
          this.counter = new (_crd && Counter === void 0 ? (_reportPossibleCrUseOfCounter({
            error: Error()
          }), Counter) : Counter)(time, 100, this.total, value => {
            var val = value.toFixed(2);
            (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
              error: Error()
            }), Crash_DataManager) : Crash_DataManager).getInstance().setCurrentParameters(value.toFixed(2));
            var arr = val.toString().split(''); // 根据 arr.length 设置节点的活动性

            this._nodes['Multiple_6'].active = arr.length >= 5;
            this._nodes['Multiple_7'].active = arr.length >= 6;

            var _loop = function _loop() {
              var character = arr[index];
              var name = "Multiple_" + (index + 1);
              var sprName = "zi_hj_beishu_" + character;

              if (character === '.') {
                sprName = 'zi_hj_beishu_dian';
                _this._nodes[name].getComponent(UITransform).width = 17;
                _this._nodes[name].getComponent(UITransform).height = 61;
              } else {
                _this._nodes[name].getComponent(UITransform).width = 42;
                _this._nodes[name].getComponent(UITransform).height = 45;
              }

              _this._nodes[name].getComponent(Sprite).spriteFrame = _this.numberSpriteFrame.find(item => item.name === sprName);
            };

            for (var index = 0; index < arr.length; index++) {
              _loop();
            }
          });
        }

        update(deltaTime) {
          if (this.counter) {
            this.counter.update(deltaTime);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b8aa411d28c6ffc634ce88e8d749d6bdf49a7a90.js.map