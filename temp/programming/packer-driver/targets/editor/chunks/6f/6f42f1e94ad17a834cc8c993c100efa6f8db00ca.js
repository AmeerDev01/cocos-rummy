System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Mask, Node, tween, UITransform, Vec3, Widget, BaseComponent, DirectionType, IconEffectType, GameType, SMALLGAME, RollerIconViewModel, sourceManageSeletor, PrefabPathDefine, config, endRollingAction, setRollSpeed, dataTransfer, DataKeyType, _dec, _class, _crd, ccclass, property, GodWealth_roller;

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

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSMALLGAME(extras) {
    _reporterNs.report("SMALLGAME", "../type", _context.meta, extras);
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

  function _reportPossibleCrUseOfdataTransfer(extras) {
    _reporterNs.report("dataTransfer", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataKeyType(extras) {
    _reporterNs.report("DataKeyType", "../dataTransfer", _context.meta, extras);
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
      GameType = _unresolved_3.GameType;
      SMALLGAME = _unresolved_3.SMALLGAME;
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
    }, function (_unresolved_9) {
      dataTransfer = _unresolved_9.default;
      DataKeyType = _unresolved_9.DataKeyType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a451bNQNmNPAos1PoDc1kFm", "GodWealth_roller", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Mask', 'Node', 'sp', 'tween', 'UITransform', 'Vec3', 'Widget']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GodWealth_roller", GodWealth_roller = (_dec = ccclass('GodWealth_roller'), _dec(_class = class GodWealth_roller extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          /**展示中的图标列表 */
          this.displayIconList = [];
          this.displayIconList2 = [];

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
          this.rollerHeight = void 0;
          this.rollConfig = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption;
          this.baoHeItemArr = [];
          // /**本轮转动是否结束，不能使用rolling，因为rolling = false之后 ，才开始刹车停止，roundEnd是刹车完之后 */
          // public roundEnd: boolean = true
          this.propertyNode = {
            props_roller: new Node(),
            props_roller2: new Node(),
            props_roller_mask: new Node()
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
            isSortStop: false,
            iconBaoHeEffectData: {
              iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                error: Error()
              }), IconEffectType) : IconEffectType).NONE,
              baoheIconNum: [],
              iconEffectArr: []
            },
            iconFreeGameEffectData: {
              iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                error: Error()
              }), IconEffectType) : IconEffectType).NONE,
              iconEffectArr: []
            },
            iconEffectItemData: {
              iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                error: Error()
              }), IconEffectType) : IconEffectType).NONE,
              iconEffectArr: []
            },
            baoheIcon: [],
            viewGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).NONE,
            currGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).NONE,
            freeGamePositionId: (_crd && SMALLGAME === void 0 ? (_reportPossibleCrUseOfSMALLGAME({
              error: Error()
            }), SMALLGAME) : SMALLGAME).CHOSSE0,
            isJumpStop: false
          };
          this.events = {
            rollStart: () => {},
            rollEnd: rollerIndex => {}
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
          if (key === "rollerType") {
            if (!value.pre) {
              this.nextJoinIconIndex = this.props.rollerType.direction === (_crd && DirectionType === void 0 ? (_reportPossibleCrUseOfDirectionType({
                error: Error()
              }), DirectionType) : DirectionType).DOWN ? value.cur.iconQueue.length - 1 : 0;
              this.initRoller();
            } else {
              //更新
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
                }); // console.log("this.props.isJumpStop isSortStop",this.props.isSortStop);
                // if (!this.props.isSortStop) {
                // 	playFastRoller()
                // }

                this.events.rollStart();
              }

              if (value.cur.rolling === false) {}

              if (value.pre.stopIconIndex !== value.cur.stopIconIndex) {
                if (this.props.stopMode === "jump") {
                  // 放弃这种模式(控制跳跃的距离来实现步停)
                  this.bringForwardEnd(this.props.rollerType, 2);
                } else {
                  this.dispatch((_crd && setRollSpeed === void 0 ? (_reportPossibleCrUseOfsetRollSpeed({
                    error: Error()
                  }), setRollSpeed) : setRollSpeed)(this.props.isSpeedUp ? 1.5 : 1));
                }
              }
            }
          }

          if (key === "iconEffectData") {
            //displayIconList可能还没有清除掉节点已经被释放的对象
            const baoheIconNum = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
              error: Error()
            }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
              error: Error()
            }), DataKeyType) : DataKeyType).FIXED_CHESSBOARD_ICON).filter(i => i[0] === this.props.rollerType.index).map(i => i[2]); //宝盒的金币值

            const baoheIconIndex = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
              error: Error()
            }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
              error: Error()
            }), DataKeyType) : DataKeyType).FIXED_CHESSBOARD_ICON).filter(i => i[0] === this.props.rollerType.index).map(i => i[1]); //宝盒的下标

            this.displayIconList = this.displayIconList.filter(i => !i.isUnMount);

            for (let i = 0, l = this.displayIconList.length; i < l; i++) {
              /**index是图标从下往上的序列号 */
              const index = i;
              const item = this.displayIconList[index];

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

              if (baoheIconIndex.indexOf(index) !== -1) {
                if (item.comp.props.iconData.iconId === 12) {
                  item.comp.getPropertyNode().props_amount.active = true;
                  item.comp.getPropertyNode().props_baohe_label.string = baoheIconNum[baoheIconIndex.indexOf(index)] + '';
                }
              }
            }
          }

          if (key === "baoheIcon") {}

          if (key === "iconBaoHeEffectData") {
            this.clearBaoHeIcon();
            this.baoHeItemArr = [];

            if (this.props.currGameType !== (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME2) {
              return;
            }

            ;

            if (value.cur.iconEffectArr.length) {
              value.cur.iconEffectArr.forEach((p, i) => {
                let index = 1;
                let baoHeIcon = new (_crd && RollerIconViewModel === void 0 ? (_reportPossibleCrUseOfRollerIconViewModel({
                  error: Error()
                }), RollerIconViewModel) : RollerIconViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                  error: Error()
                }), PrefabPathDefine) : PrefabPathDefine).ICON2).source).appendTo(this.propertyNode.props_roller2).setProps({
                  baoHeAmount: value.cur.baoheIconNum[i]
                }).connect(); // const iconNodeSprite = baoHeIcon.comp.getWrapNode().getChildByName("iconNode_sprite");

                const {
                  x,
                  y,
                  z
                } = baoHeIcon.viewNode.getPosition();

                if (p === 0) {
                  index = 2;
                } else if (p === 2) {
                  index = 0;
                }

                baoHeIcon.viewNode.setPosition(new Vec3(x, y - index * (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).normalRollOption.singleRollerHeight - 70));
                baoHeIcon.comp.getPropertyNode().props_baohe_label.string = value.cur.baoheIconNum[i] + '';
                baoHeIcon.comp.getPropertyNode().props_amount.active = true;
                this.baoHeItemArr.push(baoHeIcon);
              });
            }
          }

          if (key === "iconFreeGameEffectData") {
            //displayIconList可能还没有清除掉节点已经被释放的对象
            this.displayIconList = this.displayIconList.filter(i => !i.isUnMount);

            for (let i = 0, l = this.displayIconList.length; i < l; i++) {
              /**index是图标从下往上的序列号 */
              const index = i;
              const item = this.displayIconList[index];

              if (this.props.iconFreeGameEffectData.iconEffectArr.indexOf(index) !== -1) {
                item.setProps({
                  iconFreeGameEffect: this.props.iconFreeGameEffectData.iconEffect
                });
              } else {
                item.setProps({
                  iconFreeGameEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                    error: Error()
                  }), IconEffectType) : IconEffectType).NONE
                });
              }
            }
          }

          if (key === "viewGameType") {
            this.propertyNode.props_roller2.active = value.cur === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME2;
            this.propertyNode.props_roller_mask.active = value.cur === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME2;
          }
        }

        clearBaoHeIcon() {
          this.propertyNode.props_roller2.removeAllChildren();
        }
        /**主要用于初始化的时候 */


        creator(isInit = false) {
          // const baoheIconNum = dataTransfer(DataKeyType.FIXED_CHESSBOARD_ICON)
          // console.log("baoheIconNum",baoheIconNum);
          const iconViewModel = this.joinIcon(isInit);
          const insideCount = this.propertyNode.props_roller.children.filter(i => i.active).length - 1;
          const position = iconViewModel.comp.node.getPosition();
          const iconData = this.props.rollerType.iconQueue[this.nextJoinIconIndex];
          const itemHeight = iconViewModel.comp.node.getComponent(UITransform).height + iconData.intervalHeight * 2;

          if (this.props.rollerType.direction === (_crd && DirectionType === void 0 ? (_reportPossibleCrUseOfDirectionType({
            error: Error()
          }), DirectionType) : DirectionType).DOWN) {
            iconViewModel.comp.node.setPosition(new Vec3(position.x, -this.getRollerHeight() + itemHeight / 2 + insideCount * itemHeight, 1));

            if (iconViewModel.comp.props.iconData.iconId === 12) {//宝盒图标
              // (iconViewModel.comp.getPropertyNode().props_amount as Node).active = true;
              // (iconViewModel.comp.getPropertyNode().props_baohe_label as Label).string = '888';
            }
          } else {
            iconViewModel.comp.node.setPosition(new Vec3(position.x, -(insideCount * itemHeight) - itemHeight / 2, 1));
          }

          return iconViewModel;
        }
        /**初始化 */


        initRoller() {
          //取队列最后n个图标	 
          this.rollConfig = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption;
          this.propertyNode.props_roller.getComponent(UITransform).width = this.props.rollerType.width;
          this.propertyNode.props_roller.getComponent(Widget).left = this.props.rollerType.intervalWidth;
          this.propertyNode.props_roller.getComponent(Widget).right = this.props.rollerType.intervalWidth;
          this.node.getComponent(UITransform).width = this.props.rollerType.width + this.props.rollerType.intervalWidth * 2; // this.propertyNode.props_daqipao.active = this.props.rollerType.LargeRoller

          this.lastInsertIconViewModel = this.creator(true);

          while (this.props.rollerType.direction === (_crd && DirectionType === void 0 ? (_reportPossibleCrUseOfDirectionType({
            error: Error()
          }), DirectionType) : DirectionType).DOWN && this.lastInsertIconViewModel.comp.node.position.y < 0 || this.props.rollerType.direction === (_crd && DirectionType === void 0 ? (_reportPossibleCrUseOfDirectionType({
            error: Error()
          }), DirectionType) : DirectionType).UP && this.lastInsertIconViewModel.comp.node.position.y > -this.getRollerHeight()) {
            this.lastInsertIconViewModel = this.creator(true);
          }
        }
        /**提前结束,这个停止方式，应该只支持indexTrgger这种触发方案 */


        bringForwardEnd(rollerType, stopSpeed = 4) {
          if (rollerType.stopIconIndex + stopSpeed >= this.props.rollerType.iconQueue.length) {
            if (rollerType.stopIconIndex === this.props.rollerType.iconQueue.length) {
              this.nextJoinIconIndex = 2;
            } else {
              this.nextJoinIconIndex = this.props.rollerType.iconQueue.length - rollerType.stopIconIndex;
            }
          } else {
            if (rollerType.stopIconIndex === 2) {
              this.nextJoinIconIndex = 4;
            }

            {
              this.nextJoinIconIndex = rollerType.stopIconIndex + stopSpeed;
            }
          }
        } // private showBaoHeAmount() {
        // 	let rl = dataTransfer(DataKeyType.TU_BIAO_ID);
        // 	let arrItemArr = [];
        // 	rl.forEach((arrItem, index) => arrItemArr.push(...arrItem));
        // 	console.log("arrItemArr",arrItemArr);
        // 	arrItemArr.forEach
        // }

        /**
         * 添加图标
         * @returns 
         */


        joinIcon(isInit = false) {
          //下一个要加入的图标
          const iconData = this.props.rollerType.iconQueue[this.nextJoinIconIndex];
          const iconViewModel = new (_crd && RollerIconViewModel === void 0 ? (_reportPossibleCrUseOfRollerIconViewModel({
            error: Error()
          }), RollerIconViewModel) : RollerIconViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).ICON).source).appendTo(this.propertyNode.props_roller).setProps({
            iconData
          }).connect();
          const position = iconViewModel.comp.node.getPosition();

          if (iconData && iconData.iconId === 12 && isInit) {
            //this.props && this.props.viewGameType === GameType.SUBGAME2 &&
            console.log("iconData.iconId isInit", iconData.iconId, isInit);
            iconViewModel.comp.getPropertyNode().props_amount.active = true;
            iconViewModel.comp.getPropertyNode().props_baohe_label.string = (Math.random() * 100).toFixed(0) + '';
          } //icon的高度加上上下纵向高度


          const itemHeight = iconViewModel.comp.node.getComponent(UITransform).height + iconData.intervalHeight * 2;

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
            this.nextJoinIconIndex === this.props.rollerType.iconQueue.length && (this.nextJoinIconIndex = 0);
          }

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

        update(deltaTime) {
          if (this.props.rollerType.rolling) {
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

                if (_node.getPosition().y <= -(this.getRollerHeight(true) + _node.getComponent(UITransform).height / 2)) {
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
                  const itemHeight = this.rollConfig.singleRollerHeight + this.rollConfig.singleIntervalHeight * 2; // console.log(this.props.rollerType.index, 'delete icon')

                  tween(iconMv.comp.node).to(this.rollConfig.stopSpeed, {
                    position: new Vec3(x, -this.getRollerHeight(true) + (i - 0.5) * itemHeight, z)
                  }, {
                    easing: "backOut"
                  }).call(() => {
                    if (_node.getPosition().y <= -(this.getRollerHeight(true) + _node.getComponent(UITransform).height / 2)) {
                      // 超出的要删除
                      this.lastLineY = this.propertyNode.props_roller.children[this.propertyNode.props_roller.children.length - 1].position.y;
                      this.lastRemoveIconIndex = iconMv.comp.props.iconData.queueIndex;
                      iconMv.unMount().then(() => {
                        //这里有一定可能存在多个溢出滑道的图标，所以可能执行2次甚至2次以上
                        if (!this.state.roundEnd && this.displayIconList.length - 1 === i) {
                          this.setState({
                            roundEnd: true
                          }); // this.dispatch(setRoundEnd(true))
                          // this.roundEnd = true

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
                  const itemHeight = this.rollConfig.singleRollerHeight + this.rollConfig.singleIntervalHeight * 2; //恢复到默认位置并对齐，第一个元素是最上面那个

                  tween(iconMv.comp.node).to(this.rollConfig.stopSpeed, {
                    position: new Vec3(x, -itemHeight * (i - 0.5), z)
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
//# sourceMappingURL=6f42f1e94ad17a834cc8c993c100efa6f8db00ca.js.map