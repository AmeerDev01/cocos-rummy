System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Mask, Node, Prefab, Size, tween, UITransform, Vec3, phoenix_BaseComponent, config, AudioManager, SoundList, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, phoenix_Roller;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfphoenix_BaseComponent(extras) {
    _reporterNs.report("phoenix_BaseComponent", "./phoenix_BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerType(extras) {
    _reporterNs.report("RollerType", "../Repositories/SlotRepository", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotRepository(extras) {
    _reporterNs.report("SlotRepository", "../Repositories/SlotRepository", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphoenix_Icon(extras) {
    _reporterNs.report("phoenix_Icon", "./phoenix_Icon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotProxy(extras) {
    _reporterNs.report("SlotProxy", "../Proxy/SlotProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../phoenix_config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../Managr/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../Managr/AudioManager", _context.meta, extras);
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
      Mask = _cc.Mask;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Size = _cc.Size;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      phoenix_BaseComponent = _unresolved_2.default;
    }, function (_unresolved_3) {
      config = _unresolved_3.default;
    }, function (_unresolved_4) {
      AudioManager = _unresolved_4.AudioManager;
      SoundList = _unresolved_4.SoundList;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4deb5JBGB9IIqB6XFkBZVBi", "phoenix_Roller", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Mask', 'Node', 'Prefab', 'Size', 'tween', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 动画停止回调
       */

      _export("phoenix_Roller", phoenix_Roller = (_dec = ccclass('phoenix_Roller'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec(_class = (_class2 = class phoenix_Roller extends (_crd && phoenix_BaseComponent === void 0 ? (_reportPossibleCrUseOfphoenix_BaseComponent({
        error: Error()
      }), phoenix_BaseComponent) : phoenix_BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "RollerLayOut", _descriptor, this);

          _initializerDefineProperty(this, "RollerLayOut2", _descriptor2, this);

          // @property(Node)
          // bubble: Node = null
          _initializerDefineProperty(this, "icon", _descriptor3, this);

          _initializerDefineProperty(this, "icon2", _descriptor4, this);

          this.rollerDataRep = void 0;
          this.isRoll = false;
          this.rollerData = void 0;

          /**第几条滑槽，序号 */
          this.rollerIndex = void 0;

          /**此值存在，即要检测停止了 */
          this.endFlag = true;

          /**初始化时，图标开始的排列序号 */
          this.initStartIndex = 0;

          /**下一个要加入的图标 */
          this.lastJoinIconIndex = 0;
          // private target: number = -1

          /**动态效果停止后的动态回调函数 */
          this.stopHandler = void 0;
          this.isSpeed = false;
        }

        start() {}

        bindUI() {
          this.rollerDataRep = this.getRollProxy().getRepository(); // const layout = this.RollerLayOut.getComponent(Layout)
          // layout.spacingY = this.rollerData.roller.intervalHeight
          // 配置滑槽宽高度(也就是蒙板宽高)

          const rootUi = this.root.getComponent(UITransform);
          rootUi.anchorY = 1;
          const rollerUi = this.RollerLayOut.getComponent(UITransform); // rootUi.anchorX = 0

          rollerUi.anchorY = 1; // rollerUi.anchorX = 0

          this.lastJoinIconIndex = this.initStartIndex - 1;
          this.lastJoinIconIndex === -1 && (this.lastJoinIconIndex = this.rollerData.data.length - 1); // 设置蒙版组件高度

          rootUi.setContentSize(new Size(this.rollerData.intervalWidth + this.rollerData.rollerWidth, (this.rollerData.intervalHeight + this.rollerData.rollerheight) * this.rollerData.portraitNum + this.rollerData.intervalHeight)); //设置滑道高度，多一个高度

          rollerUi.setContentSize(new Size(this.rollerData.rollerWidth, (this.rollerData.intervalHeight + this.rollerData.rollerheight) * (this.rollerData.portraitNum + 1))); // 滑道网上顶一个单位（但是上沿有遮挡，再降30）

          this.RollerLayOut.setPosition(this.RollerLayOut.position.x, this.rollerData.intervalHeight + this.rollerData.rollerheight - this.rollerData.intervalHeight); // 初始化即将开始的图标

          for (let i = 0; i < this.rollerData.portraitNum; i++) {
            const icon = instantiate(this.icon);
            icon.setPosition(new Vec3(0, icon.position.y - (this.rollerData.intervalHeight + this.rollerData.rollerheight) * (i + 1)));
            this.RollerLayOut.addChild(icon);
            const index = this.initStartIndex + i;
            icon.getComponent("phoenix_Icon").setFace(this.rollerData.data[index]);
          } // this.bubble.active = this.rollerData.isBigIcon


          this.initRollerLayOut2();
        }

        initRollerLayOut2() {
          const rollerUi = this.RollerLayOut2.getComponent(UITransform);
          rollerUi.anchorY = 1;
          rollerUi.setContentSize(new Size(this.rollerData.rollerWidth, (this.rollerData.intervalHeight + this.rollerData.rollerheight) * this.rollerData.portraitNum));
        }

        bindEvent() {}
        /**指定滑槽数据 */


        bindRollerData(rollerIndex, data) {
          this.rollerData = data;
          this.rollerIndex = rollerIndex;
        } // 元宝动画


        playYuanbao(i) {
          if (i == 0) {
            i = 2;
          } else if (i == 2) {
            i = 0;
          }

          this.RollerLayOut.children.forEach((icon, index) => {
            if (i == index) {
              // 确认元宝位置
              icon.getComponent("phoenix_Icon").playYuanbao();
            }
          });
        }
        /**
         * 开始滚动
         * @param stopIndex 设定要停止的序号（从1开始的）
         */


        startRoll(stopIndex, isSpeed = false) {
          this.isSpeed = isSpeed; // 往上移动一个网格，以便放上下一个要显示的icon

          this.joinIcon(); // console.log(this.rollerIndex, stopIndex);

          this.getRollProxy().setStopIndex(this.rollerIndex, stopIndex);
          this.isRoll = true;
          this.endFlag = false;
          this.RollerLayOut.children.forEach(icon => {
            icon.getComponent("phoenix_Icon").setEffect();
          });
          this.node.getComponent(Mask).enabled = true; // this.rollWithCell('down')
          // console.log(this.getRollProxy().getRepository())
          // if (this.isSpeed) {
          // }
        } // 停止滚动


        stopRoll(cbFn) {
          this.endFlag = true;
          this.stopHandler = cbFn;
          this.addLastJoinIconIndex(this.rollerData.showResult.stopIndex, 3); // (this.getRollProxy() as FruitsSlotProxy).setStopIndex(this.rollerIndex)
        }

        setEndFlag(flag) {
          this.endFlag = flag;
        }

        joinIcon() {
          // this.lastJoinIconIndex === this.rollerData.data.length && (this.lastJoinIconIndex = 0)
          // console.log(this.lastJoinIconIndex)
          const icon = instantiate(this.icon);
          icon.setPosition(icon.position.x, 0);
          this.RollerLayOut.addChild(icon);
          icon.getComponent("phoenix_Icon").setFace(this.rollerData.data[this.lastJoinIconIndex]);
          icon.setSiblingIndex(0);
          this.lastJoinIconIndex--;
          this.lastJoinIconIndex === -1 && (this.lastJoinIconIndex = this.rollerData.data.length - 1); // this.RollerLayOut.removeChild(this.RollerLayOut.children[this.RollerLayOut.children.length - 1])
          // this.RollerLayOut.children[this.RollerLayOut.children.length - 1].destroy()
        }

        stopCallBack() {
          this.node.getComponent(Mask).enabled = false;
          this.stopHandler && this.stopHandler(this.rollerIndex, this.rollerData); // this.RollerLayOut.children.forEach(icon => {
          // 	const comp = (<Icon>icon.getComponent("dragon_Icon"))
          // 	if (comp.iconId === this.target) {
          // 		comp.setEffect('animation')
          // 	}
          // })

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
            error: Error()
          }), SoundList) : SoundList).theRollerStops);
          this.RollerLayOut.children[this.RollerLayOut.children.length - 1].destroy();
        }
        /**
         * 设置当前滑槽的闪动图标()
         * @param mode 传入的是光标id，还是左边序列号
         * @param target 光标位置或者y轴坐标序列
         */


        setIconEffect(mode, target, allState = false) {
          if (mode === 'index') {
            this.RollerLayOut.children.forEach(icon => {
              const comp = icon.getComponent("phoenix_Icon");

              if (target.some(i => i === comp.iconId)) {
                comp.setEffect(1);
              } else {
                comp.setEffect();
              }
            });
          } else {
            let iconIndex = this.rollerData.portraitNum;
            this.RollerLayOut.children.forEach((icon, index) => {
              iconIndex--;
              const comp = icon.getComponent("phoenix_Icon");

              if (target.some(i => i === iconIndex)) {
                comp.setEffect(1);
                comp.playFreeGae(true);
              } else {
                if (allState) {
                  comp.setEffect();
                }
              }
            }); //向上数第几个光标闪动
            // for (let i = 2; i >= 0; i--) {
            // 	const comp = (<Icon>this.RollerLayOut.children[i].getComponent("dragon_Icon"))
            // 	if (!comp) continue
            // 	if (i === target) {
            // 		comp.setEffect(1)
            // 	} else {
            // 		comp.setEffect()
            // 	}
            // }

            this.RollerLayOut.children.forEach((icon, index) => {
              const comp = icon.getComponent("phoenix_Icon");
            });
          }
        }
        /**
         * 添加停靠图标
         * @param index 停靠的序号，从下到上
         */


        addDockIcon(targetArr) {
          this.removeAllDockIcon();
          targetArr.forEach((item, index) => {
            try {
              const icon = instantiate(this.RollerLayOut.children[this.rollerData.portraitNum - 1 - item[0]]);
              icon.getComponent("phoenix_Icon").setFace((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).icon.find(i => i.name === 'baohe').id);
              icon.getComponent("phoenix_Icon").setEffect(1);
              icon.getComponent("phoenix_Icon").hiddenAmounts(true, item[1]); // const _index = this.rollerData.portraitNum - index

              icon.setPosition(new Vec3(0, icon.position.y - this.rollerData.intervalHeight));
              this.RollerLayOut2.addChild(icon);
            } catch (e) {
              console.error(this.RollerLayOut.children[this.rollerData.portraitNum - 1 - item[0]]);
            }
          });
        }

        removeAllDockIcon() {
          this.RollerLayOut2.removeAllChildren();
        } //隐藏显示弹出层2


        togglesThePopUpLayerState(state = false) {
          this.RollerLayOut2.active = state;
        }

        hiddenAmounts(state, amountNum) {
          this.RollerLayOut.children.forEach(icon => {
            icon.getComponent("dragon_Icon").hiddenAmounts(state, amountNum);
          });
        }
        /**滚动一个格子 */


        rollWithCell(position) {
          if (this.isRoll) {
            this.RollerLayOut.children.forEach(icon => {
              // icon.setPosition(new Vec3(icon.position.x, icon.position.y - this.rollerData.rollSpeed))
              tween(icon).to(this.rollerData.rollSpeed / 1000, {
                position: new Vec3(icon.position.x, icon.position.y - (this.rollerData.intervalHeight + this.rollerData.rollerheight))
              }).start();
            });
            window.setTimeout(() => {
              if (this.RollerLayOut.children.length) {
                // if (this.RollerLayOut.children[0].position.y <= -(this.rollerData.rollerheight + this.rollerData.intervalHeight)) {
                const deviation = Math.abs(this.RollerLayOut.children[0].position.y) - (this.rollerData.rollerheight + this.rollerData.intervalHeight); //瞬时的纵向误差

                this.joinIcon(); // 这里要注意

                let _lastJoinIconIndex = this.lastJoinIconIndex + 1;

                if (this.lastJoinIconIndex + 1 >= this.rollerData.data.length) {
                  _lastJoinIconIndex = 0;
                }

                if (this.endFlag && this.rollerData.showResult.stopIndex - 1 === _lastJoinIconIndex) {
                  this.isRoll = false;
                  let count = 0;
                  this.RollerLayOut.children.forEach(icon => {
                    tween().target(icon).to(this.rollerData.rollSpeed / 1000 + 0.3, {
                      position: new Vec3(icon.position.x, icon.position.y + deviation - (this.rollerData.rollerheight + this.rollerData.intervalHeight))
                    }, {
                      easing: "backOut" //"elasticOut"

                    }).call(() => {
                      count++;

                      if (count === this.RollerLayOut.children.length) {
                        this.stopCallBack();
                      }
                    }).start();
                  });
                } // }


                const lastChild = this.RollerLayOut.children[this.RollerLayOut.children.length - 1];

                if (lastChild.position.y <= -(this.rollerData.rollerheight + this.rollerData.intervalHeight) * (this.rollerData.portraitNum + 1)) {
                  lastChild.destroy();
                }

                this.rollWithCell(position);
              }
            }, this.rollerData.rollSpeed);
          }
        }

        addLastJoinIconIndex(stopIndex, value) {
          let newValue = stopIndex + value;

          if (newValue >= this.rollerData.data.length) {
            this.lastJoinIconIndex = newValue - this.rollerData.data.length;
          } else {
            this.lastJoinIconIndex = newValue;
          }
        }

        update(deltaTime) {
          if (this.isRoll) {
            this.RollerLayOut.children.forEach(icon => {
              const speed = this.rollerData.rollSpeed;
              icon.setPosition(new Vec3(icon.position.x, icon.position.y - speed));
            });

            if (this.RollerLayOut.children.length) {
              if (this.RollerLayOut.children[0].position.y <= -(this.rollerData.rollerheight + this.rollerData.intervalHeight)) {
                const deviation = 0; // Math.abs(this.RollerLayOut.children[0].position.y) - (this.rollerData.rollerheight + this.rollerData.intervalHeight) //瞬时的纵向误差

                this.joinIcon(); // 这里要注意

                let _lastJoinIconIndex = this.lastJoinIconIndex + 1;

                if (this.lastJoinIconIndex + 1 >= this.rollerData.data.length) {
                  _lastJoinIconIndex = 0;
                } // console.log(`rollindex: ${this.rollerIndex}, end: ${this.endFlag}, stopIndex: ${this.rollerData.showResult.stopIndex} , lastindex: ${_lastJoinIconIndex}`);


                if (this.endFlag && this.rollerData.showResult.stopIndex - 1 === _lastJoinIconIndex) {
                  this.isRoll = false;
                  let count = 0;
                  this.RollerLayOut.children.forEach((icon, index) => {
                    tween().target(icon).to(0.5, {
                      position: new Vec3(icon.position.x, icon.position.y + deviation - (this.rollerData.rollerheight + this.rollerData.intervalHeight) + index * 18)
                    }, {
                      easing: "backOut" //"elasticOut"

                    }).call(() => {
                      count++;

                      if (count === this.RollerLayOut.children.length) {
                        this.stopCallBack();
                      }
                    }).start();
                  });
                }
              }

              const lastChild = this.RollerLayOut.children[this.RollerLayOut.children.length - 1];

              if (lastChild.position.y <= -(this.rollerData.rollerheight + this.rollerData.intervalHeight) * (this.rollerData.portraitNum + 1)) {
                lastChild.destroy();
              }
            }
          }
        }

        lateUpdate() {// if (this.RollerLayOut.children.length) {
          // 	const lastChild = this.RollerLayOut.children[this.RollerLayOut.children.length - 1]
          // 	if (lastChild.position.y <= -(this.rollerData.rollerheight + this.rollerData.intervalHeight) * (this.rollerData.portraitNum + 1)) {
          // 		lastChild.destroy()
          // 	}
          // }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "RollerLayOut", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "RollerLayOut2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "icon2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ea7ee9a5b22885a11ec8a6f9cf59bd93402c0d41.js.map