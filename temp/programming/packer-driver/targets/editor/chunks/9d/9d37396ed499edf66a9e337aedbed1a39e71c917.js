System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Vec3, Graphics, Color, Vec2, tween, Animation, Label, Crash_ViewBase, Crash_Current_rateLayer, Crash_DataManager, Crash_Dotted_lineLayer, Counter, Crash_Pre_dotLayer, AudioManager, SoundList, _dec, _class, _class2, _descriptor, _crd, ccclass, property, Crash_Game_contentLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCrash_ViewBase(extras) {
    _reporterNs.report("Crash_ViewBase", "../BaseView/Crash_ViewBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_Current_rateLayer(extras) {
    _reporterNs.report("Crash_Current_rateLayer", "./Crash_Current_rateLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_DataManager(extras) {
    _reporterNs.report("Crash_DataManager", "../manager/Crash_DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_Dotted_lineLayer(extras) {
    _reporterNs.report("Crash_Dotted_lineLayer", "./Crash_Dotted_lineLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCounter(extras) {
    _reporterNs.report("Counter", "../utils/Counter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_Pre_dotLayer(extras) {
    _reporterNs.report("Crash_Pre_dotLayer", "./Crash_Pre_dotLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../manager/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../manager/AudioManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Vec3 = _cc.Vec3;
      Graphics = _cc.Graphics;
      Color = _cc.Color;
      Vec2 = _cc.Vec2;
      tween = _cc.tween;
      Animation = _cc.Animation;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      Crash_ViewBase = _unresolved_2.Crash_ViewBase;
    }, function (_unresolved_3) {
      Crash_Current_rateLayer = _unresolved_3.Crash_Current_rateLayer;
    }, function (_unresolved_4) {
      Crash_DataManager = _unresolved_4.Crash_DataManager;
    }, function (_unresolved_5) {
      Crash_Dotted_lineLayer = _unresolved_5.Crash_Dotted_lineLayer;
    }, function (_unresolved_6) {
      Counter = _unresolved_6.default;
    }, function (_unresolved_7) {
      Crash_Pre_dotLayer = _unresolved_7.Crash_Pre_dotLayer;
    }, function (_unresolved_8) {
      AudioManager = _unresolved_8.AudioManager;
      SoundList = _unresolved_8.SoundList;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "676d6r08YlJBIJVO9Mf9Yhu", "Crash_Game_contentLayer", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Vec3', 'Graphics', 'Color', 'Vec2', 'tween', 'Animation', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Crash_Game_contentLayer", Crash_Game_contentLayer = (_dec = ccclass('Game_contentLayer'), _dec(_class = (_class2 = class Crash_Game_contentLayer extends (_crd && Crash_ViewBase === void 0 ? (_reportPossibleCrUseOfCrash_ViewBase({
        error: Error()
      }), Crash_ViewBase) : Crash_ViewBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "drawProgress", _descriptor, this);

          this.counter = null;
          this.angleInDegrees = void 0;
        }

        onLoad() {
          super.onLoad();
        }

        init() {
          let LotteryData = (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
            error: Error()
          }), Crash_DataManager) : Crash_DataManager).getInstance().getLotteryData();
          let seconds = (LotteryData.seconds / 1000).toFixed(2);
          let total = LotteryData.drawPrizeNum || 10;
          this._nodes['spine'].active = true;
          let times = Number(seconds) > 3 ? 3 : Number(seconds);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).xiu);
          setTimeout(() => {
            this.playAnimation();
          }, LotteryData.seconds);
          tween(this).to(times, {}, {
            onUpdate: (target, ratio) => {
              this.setDrawProgress(ratio);
            }
          }).call(() => {}).start();

          this._nodes['current_rate'].getComponent(_crd && Crash_Current_rateLayer === void 0 ? (_reportPossibleCrUseOfCrash_Current_rateLayer({
            error: Error()
          }), Crash_Current_rateLayer) : Crash_Current_rateLayer).init(seconds, total);

          this._nodes['Dotted_line'].getComponent(_crd && Crash_Dotted_lineLayer === void 0 ? (_reportPossibleCrUseOfCrash_Dotted_lineLayer({
            error: Error()
          }), Crash_Dotted_lineLayer) : Crash_Dotted_lineLayer).init(seconds, total);

          this._nodes['pre_dot'].getComponent(_crd && Crash_Pre_dotLayer === void 0 ? (_reportPossibleCrUseOfCrash_Pre_dotLayer({
            error: Error()
          }), Crash_Pre_dotLayer) : Crash_Pre_dotLayer).init(seconds, total);

          this.counter = new (_crd && Counter === void 0 ? (_reportPossibleCrUseOfCounter({
            error: Error()
          }), Counter) : Counter)(Number(seconds), 10, total, value => {
            this._nodes['Dotted_line'].setPosition(0, value * -126 + 252);

            this._nodes['pre_dot'].setPosition(value * -100, 4);
          });
        }

        playAnimation() {
          if (!this._nodes) return;

          let animationComponent = this._nodes['spine'].getComponent(Animation);

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).bingo);
          const animationState = animationComponent.getState('hide');

          if (animationState) {
            animationState.repeatCount = 1;
            animationComponent.on(Animation.EventType.FINISHED, (type, state) => {
              state.time = 0;
              state.sample();
              this._nodes && (this._nodes['spine'].active = false);
              animationComponent.off(Animation.EventType.FINISHED);
            }, this);
            animationComponent.play('hide');
          }
        }

        setDrawProgress(value) {
          this.drawProgress = value;
          this.drawBezierCurve(this.drawProgress, point => {
            let angle = Math.atan2(point.y, point.x); // console.log(angle);

            if (angle > 1) {
              angle = 0.01;
            }

            this.angleInDegrees = angle * (180 / Math.PI);
            this._nodes && this._nodes['spine'].setPosition(point.x, point.y);
            this._nodes && (this._nodes['spine'].eulerAngles = new Vec3(0, 0, -90 + this.angleInDegrees * 6));
          });
        }

        drawBezierCurve(progress, onPointUpdated) {
          const graphics = this._nodes['BezierCurve'].getComponent(Graphics); // 清除之前的绘制内容


          graphics.clear(); // 设置线条宽度和颜色

          graphics.lineWidth = 5;
          graphics.strokeColor = Color.WHITE;
          const startPoint = new Vec2(-70, 0);
          const controlPoint1 = new Vec2(700, 50); // 更靠近起点的控制点

          const controlPoint2 = new Vec2(800, 80); // 更靠近终点的控制点

          const endPoint = new Vec2(800, 205); // 计算贝塞尔曲线上的点

          const points = [];

          for (let t = 0; t <= progress; t += 0.01) {
            const point = this.calculateBezierPoint(t, startPoint, controlPoint1, controlPoint2, endPoint);
            points.push(point);
            onPointUpdated(point);
          } // 绘制贝塞尔曲线


          graphics.moveTo(startPoint.x, startPoint.y);

          for (const point of points) {
            graphics.lineTo(point.x, point.y);
          }

          graphics.stroke();
        }

        calculateBezierPoint(t, p0, p1, p2, p3) {
          const x = Math.pow(1 - t, 3) * p0.x + 3 * Math.pow(1 - t, 2) * t * p1.x + 3 * (1 - t) * Math.pow(t, 2) * p2.x + Math.pow(t, 3) * p3.x;
          const y = Math.pow(1 - t, 3) * p0.y + 3 * Math.pow(1 - t, 2) * t * p1.y + 3 * (1 - t) * Math.pow(t, 2) * p2.y + Math.pow(t, 3) * p3.y;
          return new Vec2(x, y);
        }

        update(deltaTime) {
          if (this.counter) {
            this.counter.update(deltaTime);
          }

          let data = (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
            error: Error()
          }), Crash_DataManager) : Crash_DataManager).getInstance();
          if (!data.getCrashStageVo()) return;

          if (data.getCrashStageVo().gameType === 3) {
            let winGold = data.getUserInfo().getUserInfo();
            let WIN = this._nodes['WIN'];

            if ((winGold == null ? void 0 : winGold.winGold) > 0) {
              if (!WIN.active) {
                (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                  error: Error()
                }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
                  error: Error()
                }), SoundList) : SoundList).ding);
              }

              WIN.active = true;
              WIN.getChildByName('win_label').getComponent(Label).string = String(winGold.winGold);
            }
          } else {
            let winGold = data.getUserInfo().getUserInfo();
            delete winGold.winGold;
            this._nodes['WIN'].active = false;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "drawProgress", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9d37396ed499edf66a9e337aedbed1a39e71c917.js.map