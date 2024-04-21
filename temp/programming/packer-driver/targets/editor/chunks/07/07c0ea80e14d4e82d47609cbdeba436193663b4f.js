System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Mask, Node, sp, tween, UITransform, Vec3, Widget, BaseComponent, DirectionType, IconEffectType, RollerIconViewModel, sourceManageSeletor, starlight_Audio, PrefabPathDefine, config, endRollingAction, SkeletonAnimationPlayer, dataTransfer, DataKeyType, SoundPathDefine, _dec, _class, _crd, ccclass, property, Starlight_Roller;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerType(extras) {
    _reporterNs.report("RollerType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDirectionType(extras) {
    _reporterNs.report("DirectionType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconEffectType(extras) {
    _reporterNs.report("IconEffectType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollOptionType(extras) {
    _reporterNs.report("RollOptionType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerIconViewModel(extras) {
    _reporterNs.report("RollerIconViewModel", "../viewModel/RollerIconViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstarlight_Audio(extras) {
    _reporterNs.report("starlight_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfendRollingAction(extras) {
    _reporterNs.report("endRollingAction", "../store/actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletonAnimationPlayer(extras) {
    _reporterNs.report("SkeletonAnimationPlayer", "../SkeletonPlay", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdataTransfer(extras) {
    _reporterNs.report("dataTransfer", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataKeyType(extras) {
    _reporterNs.report("DataKeyType", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Mask = _cc.Mask;
      Node = _cc.Node;
      sp = _cc.sp;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      DirectionType = _unresolved_3.DirectionType;
      IconEffectType = _unresolved_3.IconEffectType;
    }, function (_unresolved_4) {
      RollerIconViewModel = _unresolved_4.default;
    }, function (_unresolved_5) {
      sourceManageSeletor = _unresolved_5.sourceManageSeletor;
      starlight_Audio = _unresolved_5.starlight_Audio;
    }, function (_unresolved_6) {
      PrefabPathDefine = _unresolved_6.PrefabPathDefine;
    }, function (_unresolved_7) {
      config = _unresolved_7.default;
    }, function (_unresolved_8) {
      endRollingAction = _unresolved_8.endRollingAction;
    }, function (_unresolved_9) {
      SkeletonAnimationPlayer = _unresolved_9.default;
    }, function (_unresolved_10) {
      dataTransfer = _unresolved_10.default;
      DataKeyType = _unresolved_10.DataKeyType;
    }, function (_unresolved_11) {
      SoundPathDefine = _unresolved_11.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6cc823DSqJC66xAIigiNBjr", "Starlight_Roller", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'log', 'Mask', 'Node', 'sp', 'tween', 'UITransform', 'Vec3', 'Widget']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Starlight_Roller", Starlight_Roller = (_dec = ccclass('Starlight_Roller'), _dec(_class = class Starlight_Roller extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          /**展示中的图标列表 */
          this.displayIconList = [];

          /**下一个将要加入的icon */
          this.nextJoinIconIndex = 0;

          /**刚刚卸载掉的图标 */
          this.lastRemoveIconIndex = 0;

          /**删补图标时候的纵向补偿值 */
          this.compensation = 0;
          this.lastInsertIconViewModel = void 0;
          this.timer_clear = void 0;
          this.lastLineY = 0;
          this.coordList = [];
          this.rollerHeight = void 0;
          this.rollConfig = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption;
          this.timeCounter = 0;
          this.scrollInterval = 0.3;
          // 滚动间隔，可以根据需求调整
          this.renderState = false;
          this.scatterCount = 0;
          // /**本轮转动是否结束，不能使用rolling，因为rolling = false之后 ，才开始刹车停止，roundEnd是刹车完之后 */
          // public roundEnd: boolean = true
          this.destructionIsComplete = false;
          // 图标销毁情况
          this.multiple = 0;
          //倍数
          this.itemHeight = 0;
          this.winningData = [];
          this.multiplierIcon = [];
          this.propertyNode = {
            props_roller: new Node() //props_daqipao: new Node()

          };
          this.props = {
            rollerType: null,
            iconEffectData: {
              iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                error: Error()
              }), IconEffectType) : IconEffectType).NONE,
              iconEffectArr: [],
              time: 0
            },
            isHasten: false
          };
          this.events = {
            rollStart: () => {},
            setMask: bl => {},
            rollEnd: rollerIndex => {},
            setRoleAttack: isState => {},
            effectEnd: () => {}
          };
        }

        start() {}

        initState() {
          return {
            roundEnd: true
          };
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === 'isHasten') {
            this.scrollInterval = !this.props.isHasten ? 0.1 : 0.3;
          }

          if (key === "rollerType") {
            if (!value.pre) {
              //this.nextJoinIconIndex = this.props.rollerType.direction === DirectionType.DOWN ? (value.cur.iconQueue as IconType[]).length - 1 : 0
              this.initRoller();
            } else {
              this.renderState = true;

              if (value.pre.rolling === false && value.cur.rolling === true) {
                this.setState({
                  roundEnd: false
                });
                this.winningData = [];
                this.multiple = 0;
                this.multiplierIcon = [];
                this.scatterCount = 0;
                this.events.setRoleAttack(0); //  this.events.setMask(true)
              }
            }
          }

          if (key === "iconEffectData") {
            const effectLength = this.props.iconEffectData.iconEffectArr.length;
            let effectCount = 0;

            const itemEffectEnd = () => {
              effectCount++;

              if (effectCount >= effectLength) {
                // this.events.effectEnd();
                this.reScroll(true); // 重新滚动

                (_crd && starlight_Audio === void 0 ? (_reportPossibleCrUseOfstarlight_Audio({
                  error: Error()
                }), starlight_Audio) : starlight_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                  error: Error()
                }), SoundPathDefine) : SoundPathDefine).SCATTERT_RIGGER);
              }
            }; //displayIconList可能还没有清除掉节点已经被释放的对象


            this.destructionIsComplete = false;
            this.displayIconList = this.displayIconList.filter(i => !i.isUnMount);
            let isReScroll = false; //console.log(this.props.iconEffectData);

            for (let i = 0, l = this.displayIconList.length; i < l; i++) {
              // const index = this.props.rollerType.direction === DirectionType.DOWN ? i : (this.displayIconList.length - 1 - i)

              /**index是图标从下往上的序列号 */
              const item = this.displayIconList[i]; // console.log('clear --------- ' , this.props.rollerType.index, JSON.stringify(item.comp.props.iconData), i,
              // 	JSON.stringify(this.props.iconEffectData.iconEffectArr), this.props.iconEffectData.iconEffectArr.indexOf(i));

              if (this.props.iconEffectData.iconEffectArr.indexOf(i) !== -1) {
                isReScroll = true;
                item.setProps({
                  iconEffect: this.props.iconEffectData.iconEffect
                });
                this.scheduleOnce(() => {
                  (_crd && starlight_Audio === void 0 ? (_reportPossibleCrUseOfstarlight_Audio({
                    error: Error()
                  }), starlight_Audio) : starlight_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                    error: Error()
                  }), SoundPathDefine) : SoundPathDefine).WIN1);
                  item.unMount().then(() => {
                    itemEffectEnd();
                  });
                }, 1.2);
              } else {
                item.setProps({
                  iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                    error: Error()
                  }), IconEffectType) : IconEffectType).NONE
                });
              }
            }

            this.destructionIsComplete = true;
          }
        }

        sparkling(callback) {
          let count = 0;

          if (this.winningData.length > 0) {
            this.winningData.length > 0 && this.winningData.forEach((item, i) => {
              item.comp.palyScatter(true, () => {
                count++;

                if (count >= this.winningData.length) {
                  callback();
                }
              });
            });
          } else {
            callback();
          }
        }

        multiplier(callBack) {
          // 倍数相乘特效
          let count = 0;

          if (this.multiplierIcon.length > 0) {
            this.multiplierIcon.forEach(item => {
              item.comp.playallPurpose(() => {
                count++;

                if (count >= this.winningData.length) {
                  callBack();
                }
              });
            });
          } else {
            callBack();
          }
        }

        getDestroyed() {
          return this.destructionIsComplete;
        }

        reScroll(state) {
          // 重新滚动
          let length = this.propertyNode.props_roller.children.length;

          if (length === 5) {
            return;
          } else if (length === 0) {
            this.renderIcons(length, state);
          } else {
            this.propertyNode.props_roller.children.forEach((item, index) => {
              let {
                x,
                y
              } = item.getPosition();
              let yp = -this.getRollerHeight() + index * this.itemHeight + this.itemHeight / 2;
              tween(item).to(this.scrollInterval, {
                position: new Vec3(x, yp, 1)
              }, {
                easing: 'cubicIn'
              }) // 使用 to 缓动到新位置
              .call(() => {
                // 在动画完成后执行操作
                if (index === length - 1) {
                  this.renderIcons(length, state);
                }
              }).call(() => {
                if (y !== yp) {
                  tween(item).to(0.08, {
                    position: new Vec3(x, yp + 8, 1)
                  }, {
                    easing: 'sineOut'
                  }) // 初次回弹向上
                  // .to(0.05, { position: new Vec3(x, yp - 6, 1) }, { easing: 'sineIn' }) // 回弹向下
                  // .to(0.05, { position: new Vec3(x, yp + 3, 1) }, { easing: 'sineOut' }) // 再次回弹向上
                  .to(0.05, {
                    position: new Vec3(x, yp, 1)
                  }, {
                    easing: 'sineIn'
                  }) // 最终回到原位
                  .call(() => {}).start();
                }
              }).start();
            });
          }
        }

        creator() {
          const iconViewModel = this.joinIcon();
          const insideCount = this.propertyNode.props_roller.children.filter(i => i.active).length - 1;
          const position = iconViewModel.comp.node.getPosition();
          const iconData = this.props.rollerType.iconQueue[this.nextJoinIconIndex];
          const itemHeight = iconViewModel.comp.node.getComponent(UITransform).height + iconData.intervalHeight * 2;
          this.itemHeight = itemHeight;

          if (this.props.rollerType.direction === (_crd && DirectionType === void 0 ? (_reportPossibleCrUseOfDirectionType({
            error: Error()
          }), DirectionType) : DirectionType).DOWN) {
            let py = -this.getRollerHeight() + itemHeight / 2 + insideCount * itemHeight;
            tween(iconViewModel.comp.node).to(this.scrollInterval, {
              position: new Vec3(position.x, py, 1)
            }, {
              easing: 'cubicIn'
            }) // 使用 to 缓动到新位置
            .call(() => {
              // 在动画完成后执行操作
              if (iconViewModel.iconId == 10) {
                this.winningData.push(iconViewModel); // iconViewModel.comp.playAni(true)
                // // this.events.setMask(false)
                // let zindex=iconViewModel.comp.node._siblingIndex
                // iconViewModel.comp.node.setSiblingIndex(100)
                // this.scheduleOnce(()=>{
                // 	// this.events.setMask(true)
                // 	iconViewModel.comp.node.setSiblingIndex(zindex)
                // },1)
              }

              if (iconViewModel.iconId > 10) {
                this.node.getChildByName('shandian_icon').setPosition(new Vec3(0, -300 + insideCount * itemHeight + itemHeight / 2, 1));
                this.node.getChildByName('shandian_icon').active = true; // if(iconViewModel.iconId>11){
                // 	}

                new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
                  error: Error()
                }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.node.getChildByName('shandian_icon').getComponent(sp.Skeleton), iconViewModel.TheNameOfTheAnimation, false, () => {
                  this.node.getChildByName('shandian_icon').active = false; // let props_label_rate_num=iconViewModel.comp.node.getChildByName('props_label_rate_num')
                  // let node = instantiate(props_label_rate_num)
                  // const beginPosition = getNodePositionInCanvas(node)
                  // let parentNode = winShowViewModel.comp.getPropertyNode().props_label_gold as Node
                  // const targetPosition = getNodePositionInCanvas(parentNode)
                  // node.setPosition(new Vec3(targetPosition))
                }).playAnimation();
              }
            }).to(0.08, {
              position: new Vec3(position.x, py + 8, 1)
            }, {
              easing: 'sineOut'
            }) // 初次回弹向上
            .to(0.05, {
              position: new Vec3(position.x, py, 1)
            }, {
              easing: 'sineIn'
            }) // 最终回到原位
            .start();
          } else {
            iconViewModel.comp.node.setPosition(new Vec3(position.x, -(insideCount * itemHeight) - itemHeight / 2, 1));
          }

          this.coordList.push(iconViewModel.comp.node.position.y);
          return iconViewModel;
        }

        renderIcons(i, state) {
          // console.log('renderIcons -- index: ', this.props.rollerType.index, 'count: ', i ,'stopIconIndex: ', this.props.rollerType.stopIconIndex)
          (_crd && starlight_Audio === void 0 ? (_reportPossibleCrUseOfstarlight_Audio({
            error: Error()
          }), starlight_Audio) : starlight_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).DROP_DOWN, 1, false);
          let count = i || 0;
          const maxCount = 5;

          for (let j = count; j < maxCount; j++) {
            if (this.props.rollerType.direction === (_crd && DirectionType === void 0 ? (_reportPossibleCrUseOfDirectionType({
              error: Error()
            }), DirectionType) : DirectionType).DOWN) {
              this.scheduleOnce(() => {
                this.lastInsertIconViewModel = this.creator();
              }, j * 0.05);
            } else {
              break; // 如果方向不是 DOWN，跳出循环
            }
          }
        }
        /**初始化 */


        initRoller() {
          //取队列最后n个图标
          // const iconQueue = [...this.props.iconQueue]
          // const iconQueue = clone(this.props.iconQueue)
          this.rollConfig = this.props.rollerType.LargeRoller ? (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).largeRollOption : (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption;
          this.propertyNode.props_roller.getComponent(UITransform).width = this.props.rollerType.width;
          this.propertyNode.props_roller.getComponent(Widget).left = this.props.rollerType.intervalWidth;
          this.propertyNode.props_roller.getComponent(Widget).right = this.props.rollerType.intervalWidth;
          this.node.getComponent(UITransform).width = this.props.rollerType.width + this.props.rollerType.intervalWidth * 2;
          this.lastInsertIconViewModel = this.creator();
          this.renderIcons();
        }
        /**添加图标 */


        joinIcon() {
          //滑槽中的图表数
          //下一个要加入的图标
          const iconData = this.props.rollerType.iconQueue[this.nextJoinIconIndex];

          if (iconData.iconId > 10) {
            const rateItem = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
              error: Error()
            }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
              error: Error()
            }), DataKeyType) : DataKeyType).RATES).find(item => item[2] === iconData.iconId && this.props.rollerType.index === item[0]);

            if (rateItem) {
              iconData.multiple = rateItem[3];
              this.multiple += rateItem[3];
            }
          }

          const iconViewModel = new (_crd && RollerIconViewModel === void 0 ? (_reportPossibleCrUseOfRollerIconViewModel({
            error: Error()
          }), RollerIconViewModel) : RollerIconViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).ICON).source).appendTo(this.propertyNode.props_roller).setProps({
            iconData
          });
          const position = iconViewModel.comp.node.getPosition(); //icon的高度加上上下纵向高度

          const itemHeight = iconViewModel.comp.node.getComponent(UITransform).height + iconData.intervalHeight * 2;

          if (this.props.rollerType.direction === (_crd && DirectionType === void 0 ? (_reportPossibleCrUseOfDirectionType({
            error: Error()
          }), DirectionType) : DirectionType).DOWN) {
            iconViewModel.comp.node.setPosition(new Vec3(position.x, this.lastLineY + itemHeight - this.props.rollerType.speed, 1));
            this.nextJoinIconIndex++;
            this.nextJoinIconIndex === this.props.rollerType.iconQueue.length && (this.nextJoinIconIndex = 0);
            this.compensation = iconViewModel.comp.node.position.y;
          } else {
            iconViewModel.comp.node.setPosition(new Vec3(position.x, this.lastLineY - itemHeight + this.props.rollerType.speed, 1));
            this.nextJoinIconIndex--;
            this.nextJoinIconIndex === -1 && (this.nextJoinIconIndex = this.props.rollerType.iconQueue.length - 1);
          }

          if (iconData.iconId == 10) {
            iconViewModel.iconId = iconData.iconId;
            this.scatterCount++;

            if (this.scatterCount > 3) {
              this.events.setRoleAttack(1);
            }
          }

          if (iconData.iconId > 10) {
            iconViewModel.iconId = iconData.iconId;

            switch (iconData.iconId) {
              case 11:
                iconViewModel.TheNameOfTheAnimation = "sd_green";
                break;

              case 12:
                iconViewModel.TheNameOfTheAnimation = "sd_blue";
                break;

              case 13:
                iconViewModel.TheNameOfTheAnimation = "sd_purple";
                break;

              case 14:
                iconViewModel.TheNameOfTheAnimation = "sd_red";
                break;
            }

            this.events.setRoleAttack(2);
            this.multiplierIcon.push(iconViewModel); // this.events.setRoleAttack(1)
          } // this.events.setRoleAttack(true)


          this.displayIconList.push(iconViewModel);
          return iconViewModel;
        }
        /**
         * 滑槽高度，考虑滑槽的高度可能动态，这里动态获取，当然，也可以设置cache=true，获取上一次动态取的高度
         * @param cache 是否取上一次动态取的高度
         * @returns
         */


        getRollerHeight(cache = false) {
          if (!cache) {
            this.rollerHeight = this.propertyNode.props_roller.getComponent(UITransform).height;
          }

          return this.rollerHeight;
        }

        bindUI() {
          this.rollerHeight = this.getRollerHeight();
          this.useState((key, value) => {
            this.node.getComponent(Mask).enabled = !value.cur;
          }, ["roundEnd"]);
          !this.timer_clear && (this.timer_clear = window.setInterval(() => {
            this.displayIconList = this.displayIconList.filter(iconMv => {
              if (iconMv.isUnMount) {
                iconMv = undefined;
                return false;
              }

              return true;
            });
          }, 200));
        }

        isResetConditionMet(index, node, rollerHeight) {
          const nodeHeight = node.getComponent(UITransform).height;
          return this.timeCounter != 0 && index === this.displayIconList.length - 1 && node.getPosition().y <= -(rollerHeight + nodeHeight * 5);
        }

        scrollElement() {
          const rollerHeight = this.getRollerHeight(true);
          this.displayIconList.filter(item => item.comp.node && item.comp.node.active).forEach((iconMv, i) => {
            const _node = iconMv.comp.node;

            const {
              x,
              y,
              z
            } = _node.getPosition();

            if (this.props.rollerType.direction === (_crd && DirectionType === void 0 ? (_reportPossibleCrUseOfDirectionType({
              error: Error()
            }), DirectionType) : DirectionType).DOWN) {
              _node.setPosition(new Vec3(x, y - this.props.rollerType.speed, z));

              if (this.isResetConditionMet(i, _node, rollerHeight)) {
                this.timeCounter = 0;
                this.setState({
                  roundEnd: true
                }); // starlight_Audio.playOneShot(SoundPathDefine.DROP_DOWN)

                this.dispatch((_crd && endRollingAction === void 0 ? (_reportPossibleCrUseOfendRollingAction({
                  error: Error()
                }), endRollingAction) : endRollingAction)(this.props.rollerType.index, false));
                this.propertyNode.props_roller.destroyAllChildren(); // 超过底部卸载所以node

                let timer = setInterval(() => {
                  if (!this.props) {
                    return;
                  }

                  if (this.props.rollerType.stopIconIndex && this.props.rollerType.stopIconIndex != -1) {
                    // 接口返回停止下标才开始掉落
                    clearInterval(timer);
                    this.nextJoinIconIndex = this.props.rollerType.stopIconIndex - 1;
                    this.renderIcons(this.propertyNode.props_roller.children.length);
                    this.scheduleOnce(() => {
                      if (this.props.rollerType.index === 5 && this.renderState) {
                        //避免触发多次
                        this.renderState = false;
                        this.events.rollEnd(this.props.rollerType.index);
                      }
                    }, 0.5);
                  }
                }, 100);
              }
            }
          });
        }

        update(deltaTime) {
          if (this.props.rollerType.rolling) {
            this.timeCounter += 0.05;

            if (this.timeCounter >= this.scrollInterval * this.props.rollerType.index) {
              this.scrollElement();
            }
          }
        }

        getRoundEnd() {
          return this.state.roundEnd;
        }

        onDestroy() {
          window.clearInterval(this.timer_clear);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=07c0ea80e14d4e82d47609cbdeba436193663b4f.js.map