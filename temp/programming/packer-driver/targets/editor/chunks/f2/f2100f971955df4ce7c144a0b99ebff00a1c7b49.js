System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Mask, Node, tween, UITransform, Vec3, Widget, BaseComponent, DirectionType, IconEffectType, RollerIconViewModel, sourceManageSeletor, PrefabPathDefine, config, endRollingAction, setRollSpeed, _dec, _class, _crd, ccclass, property, Fruit777_Roller;

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
      sourceManageSeletor = _unresolved_5.sourceManageSeletor;
    }, function (_unresolved_6) {
      PrefabPathDefine = _unresolved_6.PrefabPathDefine;
    }, function (_unresolved_7) {
      config = _unresolved_7.default;
    }, function (_unresolved_8) {
      endRollingAction = _unresolved_8.endRollingAction;
      setRollSpeed = _unresolved_8.setRollSpeed;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e527acIiGxAxrZiLXrWXxfQ", "Fruit777_Roller", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Mask', 'Node', 'tween', 'UITransform', 'Vec3', 'Widget']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Fruit777_Roller", Fruit777_Roller = (_dec = ccclass('Fruit777_Roller'), _dec(_class = class Fruit777_Roller extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
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

          /**最近一次加入的图标 */
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
          // private stopGrid: Array<Array<number>> = [[0,0],[0,0],[0,0]]
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
              if (this.props.rollerType.stopIconIndex && value.pre.stopIconIndex !== value.cur.stopIconIndex) {
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
                // while ((this.props.rollerType.direction === DirectionType.DOWN && this.lastInsertIconViewModel.comp.node.position.y < 0) ||
                // 	(this.props.rollerType.direction === DirectionType.UP && this.lastInsertIconViewModel.comp.node.position.y > -this.getRollerHeight())) {
                // }
                this.joinIcon();
                this.setState({
                  roundEnd: false
                });
                this.events.rollStart();

                const speedUp = index => {
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
            //displayIconList可能还没有清除掉节点已经被释放的对象
            this.speed = 0;
            const displayIconListInside = this.displayIconList.filter(i => i.viewNode.position.y > -this.getRollerHeight(true));

            for (let i = 0, l = displayIconListInside.length; i < l; i++) {
              /**index是图标从下往上的序列号 */
              const index = i;
              const item = displayIconListInside[index];

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
        /**提前结束,这个停止方式，应该只支持indexTrgger这种触发方案 */


        bringForwardEnd(rollerType, stopSpeed = 4) {
          if (rollerType.stopIconIndex + stopSpeed >= this.props.rollerType.iconQueue.length) {
            // this.nextJoinIconIndex = this.props.rollerType.iconQueue.length - rollerType.stopIconIndex
            this.nextJoinIconIndex = rollerType.stopIconIndex + stopSpeed - this.props.rollerType.iconQueue.length;
          } else {
            this.nextJoinIconIndex = rollerType.stopIconIndex + stopSpeed;
          }
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
        }

        initRoller() {
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
          this.nextJoinIconIndex = this.props.rollerType.iconQueue.length - 1;

          while (!this.lastInsertIconViewModel || this.lastInsertIconViewModel && this.lastInsertIconViewModel.viewNode.position.y < 200) {
            this.joinIcon();
          }
        }

        joinIcon() {
          let iconViewModel;
          const iconData = this.props.rollerType.iconQueue[this.nextJoinIconIndex];

          if (this.outIconPool.length === 0) {
            // this.props.rollerType.index === 0 && console.log(this.props.rollerType.index, 'create')
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
          });

          if (this.lastInsertIconViewModel) {
            //已经有图标
            const {
              x,
              y,
              z
            } = this.lastInsertIconViewModel.viewNode.position;
            iconViewModel.viewNode.setPosition(new Vec3(x, y + iconViewModel.viewNode.getComponent(UITransform).height + iconData.intervalHeight * 2, 1));
          } else {
            iconViewModel.viewNode.setPosition(new Vec3(0, -this.getRollerHeight(true) + iconViewModel.viewNode.getComponent(UITransform).height / 2 + iconData.intervalHeight, 1));
          }

          this.nextJoinIconIndex--;
          this.nextJoinIconIndex === -1 && (this.nextJoinIconIndex = this.props.rollerType.iconQueue.length - 1); // console.log(iconViewModel.comp.props.iconData.iconId)

          !this.displayIconList.some(i => i.viewNode.uuid === iconViewModel.viewNode.uuid) && this.displayIconList.push(iconViewModel);
          this.lastInsertIconViewModel = iconViewModel;
        }

        move() {
          if (!this.props.rollerType.rolling) return;
          this.moveIcon(); //最后一个完全进入

          const lastChild = this.propertyNode.props_roller.children[this.propertyNode.props_roller.children.length - 1];

          if (lastChild.position.y < -(lastChild.getComponent(UITransform).height / 2)) {
            this.joinIcon();

            if (this.props.rollerType.stopIconIndex === this.lastInsertIconViewModel.comp.props.iconData.queueIndex) {
              //需要停止的ICON出现
              this.dispatch((_crd && endRollingAction === void 0 ? (_reportPossibleCrUseOfendRollingAction({
                error: Error()
              }), endRollingAction) : endRollingAction)(this.props.rollerType.index, false));
              const geidArr = this.getIconStopSet();
              this.propertyNode.props_roller.children.forEach((c, j) => {
                tween(c).to(this.rollConfig.stopSpeed, {
                  position: new Vec3(c.position.x, geidArr[j], c.position.z)
                }, {
                  easing: "backOut"
                }).start();
              });
              this.scheduleOnce(() => {
                //滑槽最后停止
                this.moveIcon();
                this.setState({
                  roundEnd: true
                });
                this.events.rollEnd(this.props.rollerType.index);
              }, this.rollConfig.stopSpeed);
            }
          }
        }

        moveIcon() {
          //删除图标
          this.propertyNode.props_roller.children.forEach((child, i) => {
            const viewModel = this.displayIconList.find(i => i.viewNode.uuid === child.uuid);
            const {
              x,
              y,
              z
            } = child.getPosition();
            child.setPosition(new Vec3(x, y - this.props.rollerType.speed, z)); //为了让临界溢出图标顺利被删除，后面多加一点提前量

            if (child.position.y <= -(this.getRollerHeight(true) + child.getComponent(UITransform).height / 2 + this.props.rollerType.iconQueue[this.nextJoinIconIndex].intervalHeight) + 60) {
              // this.props.rollerType.index === 0 && console.log(this.props.rollerType.index, 'remove')
              //超出底部
              child.removeFromParent();
              this.displayIconList = this.displayIconList.filter(i => i.viewNode.uuid !== child.uuid);
              viewModel && this.outIconPool.push(viewModel);
            }
          });
        }
        /**根据图标的序号获取停止为止，从最后一个开始，顶部对齐 */


        getIconStopSet() {
          const l = this.propertyNode.props_roller.children.length;
          const gridArr = [];
          let start_y = 0;

          for (let i = l - 1; i >= 0; i--) {
            const nodeHeight = this.propertyNode.props_roller.children[i].getComponent(UITransform).height;
            gridArr.push(start_y - (nodeHeight / 2 + this.rollConfig.singleIntervalHeight)); //累加当前图标的纵向占位

            start_y += -(nodeHeight + this.rollConfig.singleIntervalHeight * 2);
          }

          return gridArr.reverse();
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
//# sourceMappingURL=f2100f971955df4ce7c144a0b99ebff00a1c7b49.js.map