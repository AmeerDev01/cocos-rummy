System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ProgressBar, Label, Crash_ViewBase, Crash_NetMsgDispatcher, Countdown, _dec, _class, _crd, ccclass, property, Crash_Persian_puritan;

  function _reportPossibleCrUseOfCrash_ViewBase(extras) {
    _reporterNs.report("Crash_ViewBase", "../BaseView/Crash_ViewBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_NetMsgDispatcher(extras) {
    _reporterNs.report("Crash_NetMsgDispatcher", "../net/Crash_NetMsgDispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCountdown(extras) {
    _reporterNs.report("Countdown", "../utils/Countdown", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      ProgressBar = _cc.ProgressBar;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      Crash_ViewBase = _unresolved_2.Crash_ViewBase;
    }, function (_unresolved_3) {
      Crash_NetMsgDispatcher = _unresolved_3.default;
    }, function (_unresolved_4) {
      Countdown = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9647cjW1NhPTYvttQnDUMKO", "Crash_Persian_puritan", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'ProgressBar', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Crash_Persian_puritan", Crash_Persian_puritan = (_dec = ccclass('Persian_puritan'), _dec(_class = class Crash_Persian_puritan extends (_crd && Crash_ViewBase === void 0 ? (_reportPossibleCrUseOfCrash_ViewBase({
        error: Error()
      }), Crash_ViewBase) : Crash_ViewBase) {
        constructor(...args) {
          super(...args);
          this.countdown = void 0;
          this.stateMachine = true;
        }

        init(time) {
          // if(!this.stateMachine){
          //     return
          // }
          this.stateMachine = false;
          let conversionTime = time * 10;
          this._nodes['Label_text'].getComponent(Label).string = `Jada game dimulai ${time}s`;

          if (this.countdown) {
            this.countdown.stopCountdown();
          }

          this.countdown = new (_crd && Countdown === void 0 ? (_reportPossibleCrUseOfCountdown({
            error: Error()
          }), Countdown) : Countdown)();
          this.countdown.startCountdown({
            duration: conversionTime,
            onUpdate: time => {
              let node = this._nodes['Progress_bar'];
              this._nodes['Label_text'].getComponent(Label).string = `Jada game dimulai ${(time / 10).toFixed(2)}s`;
              node.getComponent(ProgressBar).progress = time / conversionTime;
            },
            onEnd: () => {
              this.node.active = false;
              this.stateMachine = true;
              this.countdown.stopCountdown();
            }
          });
        }

        getStateMachine() {
          return this.stateMachine;
        }

        onDestroy() {
          super.onDestroy();
          this.countdown && this.countdown.stopCountdown();
          (_crd && Crash_NetMsgDispatcher === void 0 ? (_reportPossibleCrUseOfCrash_NetMsgDispatcher({
            error: Error()
          }), Crash_NetMsgDispatcher) : Crash_NetMsgDispatcher).getInstance().removeAllProtocolByObj(this);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=24a7b95aed57c75c75d1d4e21b09446ec027d087.js.map