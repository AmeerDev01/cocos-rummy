System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Layout, Prefab, tween, UIOpacity, Vec3, GodWealth_BaseComponent, AudioManager, SoundList, getSpeedTime, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, GodWealth_RollerPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGodWealth_BaseComponent(extras) {
    _reporterNs.report("GodWealth_BaseComponent", "./GodWealth_BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGodWealth_Roller(extras) {
    _reporterNs.report("GodWealth_Roller", "./GodWealth_Roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerType(extras) {
    _reporterNs.report("RollerType", "../Repositories/SlotRepository", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../Managr/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../Managr/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetSpeedTime(extras) {
    _reporterNs.report("getSpeedTime", "../../../../utils/SlotSpeedConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Layout = _cc.Layout;
      Prefab = _cc.Prefab;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GodWealth_BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      AudioManager = _unresolved_3.AudioManager;
      SoundList = _unresolved_3.SoundList;
    }, function (_unresolved_4) {
      getSpeedTime = _unresolved_4.getSpeedTime;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fa5e1oZK95M0ZaEdTuozctt", "GodWealth_RollerPanel", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Layout', 'Node', 'Prefab', 'tween', 'UIOpacity', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GodWealth_RollerPanel", GodWealth_RollerPanel = (_dec = ccclass('GodWealth_RollerPanel'), _dec2 = property(Prefab), _dec(_class = (_class2 = class GodWealth_RollerPanel extends (_crd && GodWealth_BaseComponent === void 0 ? (_reportPossibleCrUseOfGodWealth_BaseComponent({
        error: Error()
      }), GodWealth_BaseComponent) : GodWealth_BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "roller", _descriptor, this);

          this.rollerList = [];
          this.isSpeed = void 0;
        }

        /**所有的滑槽都开始转动，传入停止信号发出后要停止的序列号(从1开始) */
        startAllRoll(stopIndexArr, isSpeed) {
          if (isSpeed === void 0) {
            isSpeed = false;
          }

          this.isSpeed = isSpeed;
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).rollerFast);
          this.rollerList.forEach((roller, i) => {
            roller.getComponent("GodWealth_Roller").startRoll(stopIndexArr[i], isSpeed);
          });
        }

        togglesALLLayer(state) {
          this.rollerList.forEach((roller, i) => {
            roller.getComponent("GodWealth_Roller").togglesThePopUpLayerState(state);
          });
        }
        /**发出停止的信号（启动的时候已经传入了停止位置，不是马上停止，转到位置才停，这里需要传入闪动的图标队列） */


        stopAllRoll(isManualStop, callBack) {
          if (isManualStop) {
            this.isSpeed = true;
          }

          this.stopRoll(0, callBack);
        }

        stopRoll(i, callBack) {
          // 这里调停止滚动的速度
          var time = (_crd && getSpeedTime === void 0 ? (_reportPossibleCrUseOfgetSpeedTime({
            error: Error()
          }), getSpeedTime) : getSpeedTime)(this.isSpeed);
          var isEnd = i >= this.rollerList.length - 1;
          var rollerComp = this.rollerList[i].getComponent("GodWealth_Roller");
          rollerComp.stopRoll((rollerIndex, rollerData) => {
            if (this.node.isValid) {
              if (isEnd) {
                callBack();
              }
            }
          });
          this.scheduleOnce(() => {
            if (this.node.isValid) {
              if (!isEnd) {
                this.stopRoll(i + 1, callBack);
              }
            }
          }, time);
        }
        /**图标闪动 */


        iconFlicker(mode, targetArr, allstate, cb) {
          if (allstate === void 0) {
            allstate = false;
          }

          this.rollerList.forEach((roller, i) => {
            roller.getComponent("GodWealth_Roller").setIconEffect(mode, [], true);

            if (targetArr[i].length && allstate) {
              roller.getComponent("GodWealth_Roller").setIconEffect(mode, targetArr[i]);
              setTimeout(() => {
                this.clearStatus();
                cb();
              }, 1000);
            } else if (targetArr[i].length) {
              roller.getComponent("GodWealth_Roller").setIconEffect(mode, targetArr[i], true);
            }
          });
        }

        clearStatus() {
          this.rollerList.forEach((roller, i) => {
            roller.getComponent("GodWealth_Roller").setIconEffect('coord', [], true);
          });
        }
        /**图标定住 */


        iconDock(mode, targetArr) {
          this.rollerList.forEach((roller, i) => {
            roller.getComponent("GodWealth_Roller").removeAllDockIcon();
            targetArr[i][1].length && roller.getComponent("GodWealth_Roller").addDockIcon(targetArr[i][1]);
          });
        }
        /**卸载面板(淡出) */


        uninstall(done) {
          var ui = this.node.parent.getComponent(UIOpacity);
          tween().target(ui).to(0.5, {
            opacity: 0
          }).call(() => {
            // this.node.parent.removeAllChildren()
            this.node.parent.destroy();
            done && done();
          }).start(); // tween().target(icon).to(0.5, {
          // 	position: new Vec3(icon.position.x, icon.position.y + deviation - (this.rollerData.rollerheight + this.rollerData.intervalHeight))
          // }, {
          // 	easing: "backOut"//"elasticOut"
          // }).call(() => {
          // 	count++
          // 	if (count === this.RollerLayOut.children.length) {
          // 		this.stopCallBack()
          // 	}
          // }).start()
        }

        start() {}

        update(deltaTime) {}

        bindUI() {
          var rollerData = this.getRollProxy().getRepository();
          var layout = this.node.getComponent(Layout); // layout.spacingX = 35

          rollerData.rollerList.forEach((roller, index) => {
            var rollerNode = instantiate(this.roller);
            rollerNode.getComponent("GodWealth_Roller").bindRollerData(index, roller);
            rollerNode.setPosition(new Vec3(0, rollerNode.position.y));
            this.root.addChild(rollerNode);
            this.rollerList.push(rollerNode);
          }); // const rollerNode = instantiate(this.roller);
          // (rollerNode.getComponent("Roller") as Roller).bindRollerData(0, rollerData.rollerList.data[0])
          // rollerNode.setPosition(new Vec3(0, rollerNode.position.y))
          // this.root.addChild(rollerNode)
          // this.rollerList.push(rollerNode)

          this.node.getParent().setScale(0.95, 0.95);
          this.node.getParent().setSiblingIndex(100);
          var ui = this.node.parent.getComponent(UIOpacity);
          ui.opacity = 0;
          tween().target(ui).to(0.5, {
            opacity: 255
          }).call(() => {}).start();
        }

        bindEvent() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "roller", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=519345c5c1d9882a487d437a8656e4fc7a17759f.js.map