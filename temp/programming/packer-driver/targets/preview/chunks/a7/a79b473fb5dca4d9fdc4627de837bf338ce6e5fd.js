System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Mask, Node, tween, UITransform, Vec3, Widget, BaseComponent, DirectionType, IconEffectType, RollerIconViewModel, fruit777_Audio, sourceManageSeletor, PrefabPathDefine, config, endRollingAction, setRollSpeed, SoundPathDefine, _dec, _class, _crd, ccclass, property, Fruit777_Roller;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerType(extras) {
    _reporterNs.report("RollerType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconType(extras) {
    _reporterNs.report("IconType", "../type", _context.meta, extras);
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

  function _reportPossibleCrUseOffruit777_Audio(extras) {
    _reporterNs.report("fruit777_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
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

  function _reportPossibleCrUseOfsetRollSpeed(extras) {
    _reporterNs.report("setRollSpeed", "../store/actions/roller", _context.meta, extras);
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
      fruit777_Audio = _unresolved_5.fruit777_Audio;
      sourceManageSeletor = _unresolved_5.sourceManageSeletor;
    }, function (_unresolved_6) {
      PrefabPathDefine = _unresolved_6.PrefabPathDefine;
    }, function (_unresolved_7) {
      config = _unresolved_7.default;
    }, function (_unresolved_8) {
      endRollingAction = _unresolved_8.endRollingAction;
      setRollSpeed = _unresolved_8.setRollSpeed;
    }, function (_unresolved_9) {
      SoundPathDefine = _unresolved_9.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9da181YIixJh460iFmi/0zZ", "Fruit777_Roller.old2", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Mask', 'Node', 'tween', 'UITransform', 'Vec3', 'Widget']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Fruit777_Roller", Fruit777_Roller = (_dec = ccclass('Fruit777_Roller'), _dec(_class = class Fruit777_Roller extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

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
          // private coordList: Array<number> = []

          /**主要用于启动的速度变化 */
          this.speed = 0;
          this.rollerHeight = void 0;
          this.rollConfig = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption;
          // /**本轮转动是否结束，不能使用rolling，因为rolling = false之后 ，才开始刹车停止，roundEnd是刹车完之后 */
          // public roundEnd: boolean = true
          this.outIconPool = [];
          this.propertyNode = {
            props_roller: new Node(),
            props_daqipao: new Node()
          };
          this.props = {
            rollerType: null,
            iconEffectData: {
              iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                error: Error()
              }), IconEffectType) : IconEffectType).NONE,
              iconEffectArr: []
            },
            isSpeedUp: false,
            stopMode: 'jump',
            isSortStop: false
          };
          this.events = {
            rollStart: () => {},
            rollEnd: rollerIndex => {}
          };
        }

        start() {
          this.schedule(this.move, 0.01);
        }

        initState() {
          return {
            roundEnd: true
          };
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === "rollerType") {
            if (!value.pre) {
              this.nextJoinIconIndex = this.props.rollerType.direction === (_crd && DirectionType === void 0 ? (_reportPossibleCrUseOfDirectionType({
                error: Error()
              }), DirectionType) : DirectionType).DOWN ? value.cur.iconQueue.length - 1 : 0;
              this.initRoller();
            } else {
              /**
               * 2024-1-4 02:30记录（地点：菲律宾）
               * 尼玛。这个问题找了2个小时，下面这个if一定要在rolling（this.events.rollStart()）判断之前处理，不然在某种特殊情况下，比如上一次最后加入的图标index此时等于将要停止的图标index，
               * 将没有机会joinIcon，直接停止。因为调整nextJoinIconIndex的操作还没有被执行。
               */
              if (value.pre.stopIconIndex !== value.cur.stopIconIndex) {
                if (this.props.stopMode === "jump") {
                  // 放弃这种模式(控制跳跃的距离来实现步停)
                  // this.bringForwardEnd(this.props.rollerType, this.props.isSortStop ? 4 + this.props.rollerType.index * 8 : 4)
                  this.bringForwardEnd(this.props.rollerType, 5);
                } else {
                  this.dispatch((_crd && setRollSpeed === void 0 ? (_reportPossibleCrUseOfsetRollSpeed({
                    error: Error()
                  }), setRollSpeed) : setRollSpeed)(this.props.isSpeedUp ? 1.5 : 1));
                }
              }

              if (value.pre.rolling === false && value.cur.rolling === true) {
                while (this.props.rollerType.direction === (_crd && DirectionType === void 0 ? (_reportPossibleCrUseOfDirectionType({
                  error: Error()
                }), DirectionType) : DirectionType).DOWN && this.lastInsertIconViewModel.comp.node.position.y < 0 || this.props.rollerType.direction === (_crd && DirectionType === void 0 ? (_reportPossibleCrUseOfDirectionType({
                  error: Error()
                }), DirectionType) : DirectionType).UP && this.lastInsertIconViewModel.comp.node.position.y > -this.getRollerHeight()) {
                  this.lastInsertIconViewModel = this.creator();
                }

                this.setState({
                  roundEnd: false
                }); // this.roundEnd = false

                this.events.rollStart();

                var speedUp = index => {
                  // console.log(index)
                  if (this.speed < this.props.rollerType.speed) {
                    this.speed += this.props.rollerType.speed / 20;
                    this.speed > this.props.rollerType.speed && this.speed === this.props.rollerType.speed;
                  } else if (this.speed === this.props.rollerType.speed) {
                    this.unschedule(speedUp);
                  }
                };

                this.schedule(speedUp, 0.02);
              }
            }
          }

          if (key === "iconEffectData") {
            // console.log(this.props.rollerType.index, value.cur)
            // console.log(this.props.rollerType.index, this.props.iconEffectData, this.displayIconList)
            //displayIconList可能还没有清除掉节点已经被释放的对象
            this.speed = 0;
            this.displayIconList = this.displayIconList.filter(i => !i.isUnMount);

            for (var i = 0, l = this.displayIconList.length; i < l; i++) {
              // const index = this.props.rollerType.direction === DirectionType.DOWN ? i : (this.displayIconList.length - 1 - i)

              /**index是图标从下往上的序列号 */
              var index = i;
              var item = this.displayIconList[index];

              if (this.props.iconEffectData.iconEffectArr.indexOf(index) !== -1) {
                item.setProps({
                  iconEffect: this.props.iconEffectData.iconEffect
                });
              } else {
                item.setProps({
                  iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                    error: Error()
                  }), IconEffectType) : IconEffectType).NONE
                });
              }
            }
          }
        }
        /**主要用于初始化的时候 */


        creator() {
          var iconViewModel = this.joinIcon();
          var insideCount = this.propertyNode.props_roller.children.filter(i => i.active).length - 1;
          var position = iconViewModel.comp.node.getPosition();
          var iconData = this.props.rollerType.iconQueue[this.nextJoinIconIndex];
          var itemHeight = iconViewModel.comp.node.getComponent(UITransform).height + iconData.intervalHeight * 2;

          if (this.props.rollerType.direction === (_crd && DirectionType === void 0 ? (_reportPossibleCrUseOfDirectionType({
            error: Error()
          }), DirectionType) : DirectionType).DOWN) {
            iconViewModel.comp.node.setPosition(new Vec3(position.x, -this.getRollerHeight() + itemHeight / 2 + insideCount * itemHeight, 1));
          } else {
            iconViewModel.comp.node.setPosition(new Vec3(position.x, -(insideCount * itemHeight) - itemHeight / 2, 1));
          } // this.coordList.push(iconViewModel.comp.node.position.y)


          return iconViewModel;
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
          this.propertyNode.props_daqipao.active = this.props.rollerType.LargeRoller;
          this.lastInsertIconViewModel = this.creator();

          while (this.props.rollerType.direction === (_crd && DirectionType === void 0 ? (_reportPossibleCrUseOfDirectionType({
            error: Error()
          }), DirectionType) : DirectionType).DOWN && this.lastInsertIconViewModel.comp.node.position.y < 0 || this.props.rollerType.direction === (_crd && DirectionType === void 0 ? (_reportPossibleCrUseOfDirectionType({
            error: Error()
          }), DirectionType) : DirectionType).UP && this.lastInsertIconViewModel.comp.node.position.y > -this.getRollerHeight()) {
            this.lastInsertIconViewModel = this.creator();
          }
        }
        /**提前结束,这个停止方式，应该只支持indexTrgger这种触发方案 */


        bringForwardEnd(rollerType, stopSpeed) {
          if (stopSpeed === void 0) {
            stopSpeed = 4;
          }

          if (rollerType.stopIconIndex + stopSpeed >= this.props.rollerType.iconQueue.length) {
            // this.nextJoinIconIndex = this.props.rollerType.iconQueue.length - rollerType.stopIconIndex
            this.nextJoinIconIndex = rollerType.stopIconIndex + stopSpeed - this.props.rollerType.iconQueue.length;
          } else {
            this.nextJoinIconIndex = rollerType.stopIconIndex + stopSpeed;
          }
        }
        /**
         * 添加图标
         * @returns 
         */


        joinIcon() {
          try {
            //下一个要加入的图标
            // this.nextJoinIconIndex < 0 && (this.nextJoinIconIndex = 0)
            // this.nextJoinIconIndex >= this.props.rollerType.iconQueue.length && (this.nextJoinIconIndex = this.props.rollerType.iconQueue.length - 1)
            var iconData = this.props.rollerType.iconQueue[this.nextJoinIconIndex];

            if (!iconData) {
              console.log(this.nextJoinIconIndex, this.props.rollerType.iconQueue);
            }

            var iconViewModel;

            if (this.outIconPool.length === 0) {
              iconViewModel = new (_crd && RollerIconViewModel === void 0 ? (_reportPossibleCrUseOfRollerIconViewModel({
                error: Error()
              }), RollerIconViewModel) : RollerIconViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                error: Error()
              }), PrefabPathDefine) : PrefabPathDefine).ICON).source);
            } else {
              iconViewModel = this.outIconPool.shift();
              iconViewModel.viewNode.setPosition(new Vec3(0, 0, 1));
            }

            iconViewModel.appendTo(this.propertyNode.props_roller).setProps({
              iconData,
              iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                error: Error()
              }), IconEffectType) : IconEffectType).NONE
            }); // const iconViewModel = new RollerIconViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.ICON).source).appendTo(this.propertyNode.props_roller).setProps({ iconData })

            var position = iconViewModel.comp.node.getPosition(); //icon的高度加上上下纵向高度

            var itemHeight = iconViewModel.comp.node.getComponent(UITransform).height + iconData.intervalHeight * 2;

            if (this.props.rollerType.direction === (_crd && DirectionType === void 0 ? (_reportPossibleCrUseOfDirectionType({
              error: Error()
            }), DirectionType) : DirectionType).DOWN) {
              iconViewModel.comp.node.setPosition(new Vec3(position.x, this.lastLineY + itemHeight - this.props.rollerType.speed, 1));
              this.nextJoinIconIndex--;
              this.nextJoinIconIndex === -1 && (this.nextJoinIconIndex = this.props.rollerType.iconQueue.length - 1);
              this.compensation = iconViewModel.comp.node.position.y;
            } else {
              iconViewModel.comp.node.setPosition(new Vec3(position.x, this.lastLineY - itemHeight + this.props.rollerType.speed, 1));
              this.nextJoinIconIndex++;
              this.nextJoinIconIndex === this.props.rollerType.iconQueue.length - 1 && (this.nextJoinIconIndex = 0);
            }

            this.displayIconList.push(iconViewModel); // console.log(this.displayIconList.map(i => i.id))

            return iconViewModel;
          } catch (e) {
            console.log(this.nextJoinIconIndex, this.props.rollerType.iconQueue);
          }
        }
        /**
         * 滑槽高度，考虑滑槽的高度可能动态，这里动态获取，当然，也可以设置cache=true，获取上一次动态取的高度
         * @param cache 是否取上一次动态取的高度
         * @returns 
         */


        getRollerHeight(cache) {
          if (cache === void 0) {
            cache = false;
          }

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

        move() {
          if (this.props.rollerType.rolling) {
            // this.displayIconList.length > 10 && console.log(this.displayIconList.length)
            if (this.props.rollerType.index === 0 && this.displayIconList.filter(i => i.viewNode.parent).length === 3) {
              debugger;
            }

            this.displayIconList.filter(item => item.comp.node && item.comp.node.active).forEach((iconMv, i) => {
              var _node = iconMv.comp.node;

              var {
                x,
                y,
                z
              } = _node.getPosition();

              if (this.props.rollerType.direction === (_crd && DirectionType === void 0 ? (_reportPossibleCrUseOfDirectionType({
                error: Error()
              }), DirectionType) : DirectionType).DOWN) {
                _node.setPosition(new Vec3(x, y - this.props.rollerType.speed, z));

                if (_node.getPosition().y <= -(this.getRollerHeight(true) + _node.getComponent(UITransform).height / 2)) {
                  this.lastLineY = this.propertyNode.props_roller.children[this.propertyNode.props_roller.children.length - 1].position.y;
                  this.lastRemoveIconIndex = iconMv.comp.props.iconData.queueIndex;
                  iconMv.viewNode.removeFromParent();
                  this.outIconPool.push(iconMv);
                  this.displayIconList = this.displayIconList.filter(i => i.viewNode.parent);
                  this.scheduleOnce(() => {
                    if (this.props.rollerType.stopIconIndex !== this.lastInsertIconViewModel.comp.props.iconData.queueIndex) {}

                    this.lastInsertIconViewModel = this.joinIcon();
                  }, 0.01); // iconMv.unMount().then(() => {
                  // 	if (this.props.rollerType.stopIconIndex !== this.lastInsertIconViewModel.comp.props.iconData.queueIndex) {
                  // 		this.lastInsertIconViewModel = this.joinIcon()
                  // 	}
                  // })
                }

                if (this.props.rollerType.stopIconIndex === this.lastInsertIconViewModel.comp.props.iconData.queueIndex) {
                  // this.props.rollerType.rolling = false
                  this.dispatch((_crd && endRollingAction === void 0 ? (_reportPossibleCrUseOfendRollingAction({
                    error: Error()
                  }), endRollingAction) : endRollingAction)(this.props.rollerType.index, false));
                  var itemHeight = this.rollConfig.singleRollerHeight + this.rollConfig.singleIntervalHeight * 2; // console.log(this.props.rollerType.index, 'delete icon')

                  (_crd && fruit777_Audio === void 0 ? (_reportPossibleCrUseOffruit777_Audio({
                    error: Error()
                  }), fruit777_Audio) : fruit777_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                    error: Error()
                  }), SoundPathDefine) : SoundPathDefine).DING);
                  console.log(iconMv.comp.props.iconData.queueIndex, i, -this.getRollerHeight(true) + (i - 0.5) * itemHeight);
                  tween(iconMv.comp.node).to(this.rollConfig.stopSpeed, {
                    position: new Vec3(x, -this.getRollerHeight(true) + (i - 0.5) * itemHeight, z)
                  }, {
                    easing: "backOut"
                  }).call(() => {
                    if (_node.getPosition().y <= -(this.getRollerHeight(true) + _node.getComponent(UITransform).height / 2)) {
                      // 超出的要删除
                      this.lastLineY = this.propertyNode.props_roller.children[this.propertyNode.props_roller.children.length - 1].position.y;
                      this.lastRemoveIconIndex = iconMv.comp.props.iconData.queueIndex;
                      iconMv.viewNode.removeFromParent();
                      this.outIconPool.push(iconMv);
                      this.displayIconList = this.displayIconList.filter(i => i.viewNode.parent); //这里有一定可能存在多个溢出滑道的图标，所以可能执行2次甚至2次以上

                      if (!this.state.roundEnd && this.displayIconList.length - 1 === i) {
                        this.setState({
                          roundEnd: true
                        });
                        this.events.rollEnd(this.props.rollerType.index);
                      }

                      this.scheduleOnce(() => {}, 0.03); // iconMv.unMount().then(() => {
                      // 	//这里有一定可能存在多个溢出滑道的图标，所以可能执行2次甚至2次以上
                      // 	if (!this.state.roundEnd && this.displayIconList.length - 1 === i) {
                      // 		this.setState({ roundEnd: true })
                      // 		// this.dispatch(setRoundEnd(true))
                      // 		// this.roundEnd = true
                      // 		this.events.rollEnd(this.props.rollerType.index)
                      // 	}
                      // })
                    } else {
                      if (!this.state.roundEnd) {
                        this.setState({
                          roundEnd: true
                        });
                        this.events.rollEnd(this.props.rollerType.index);
                      }
                    }
                  }).start();
                }
              } else {
                _node.setPosition(new Vec3(x, y + this.props.rollerType.speed, z));

                if (_node.getPosition().y >= _node.getComponent(UITransform).height / 2) {
                  this.lastLineY = this.propertyNode.props_roller.children[this.propertyNode.props_roller.children.length - 1].position.y;
                  this.lastRemoveIconIndex = iconMv.comp.props.iconData.queueIndex;
                  iconMv.unMount().then(() => {
                    if (this.props.rollerType.stopIconIndex !== this.lastInsertIconViewModel.comp.props.iconData.queueIndex) {
                      this.lastInsertIconViewModel = this.joinIcon();
                    }
                  });
                }

                if (this.props.rollerType.stopIconIndex === this.lastInsertIconViewModel.comp.props.iconData.queueIndex) {
                  // this.props.rollerType.rolling = false
                  this.dispatch((_crd && endRollingAction === void 0 ? (_reportPossibleCrUseOfendRollingAction({
                    error: Error()
                  }), endRollingAction) : endRollingAction)(this.props.rollerType.index, false));

                  var _itemHeight = this.rollConfig.singleRollerHeight + this.rollConfig.singleIntervalHeight * 2; //恢复到默认位置并对齐，第一个元素是最上面那个


                  tween(iconMv.comp.node).to(this.rollConfig.stopSpeed, {
                    position: new Vec3(x, -_itemHeight * (i - 0.5), z)
                  }, {
                    easing: "backOut"
                  }).call(() => {
                    if (_node.getPosition().y >= _node.getComponent(UITransform).height / 2) {
                      this.lastLineY = this.propertyNode.props_roller.children[this.propertyNode.props_roller.children.length - 1].position.y;
                      this.lastRemoveIconIndex = iconMv.comp.props.iconData.queueIndex;
                      iconMv.unMount().then(() => {
                        // this.events.rollEnd(this.props.rollerType.index)
                        //这里有一定可能存在多个溢出滑道的图标，所以可能执行2次甚至2次以上
                        if (!this.state.roundEnd) {
                          // this.dispatch(setRoundEnd(true))
                          this.setState({
                            roundEnd: true
                          }); // this.roundEnd = true

                          this.events.rollEnd(this.props.rollerType.index);
                        }
                      });
                    } else {
                      if (!this.state.roundEnd) {
                        this.setState({
                          roundEnd: true
                        });
                        this.events.rollEnd(this.props.rollerType.index);
                      }
                    }
                  }).start();
                }
              }
            });
          }
        }

        update(deltaTime) {}

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
//# sourceMappingURL=a79b473fb5dca4d9fdc4627de837bf338ce6e5fd.js.map