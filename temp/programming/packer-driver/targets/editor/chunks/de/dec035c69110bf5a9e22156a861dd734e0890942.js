System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, BaseComponent, GameType, IconEffectType, RollerViewModel, footerViewModel, godWealth_Audio, jackPotViewModel, sourceManageSeletor, PrefabPathDefine, dataTransfer, DataKeyType, SoundPathDefine, TaskScheduler, Task, StepNumber, rollerPanelViewModel, _dec, _class, _crd, ccclass, property, GodWealth_rollerPanel;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconEffectType(extras) {
    _reporterNs.report("IconEffectType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerType(extras) {
    _reporterNs.report("RollerType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerViewModel(extras) {
    _reporterNs.report("RollerViewModel", "../viewModel/RollerViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOffooterViewModel(extras) {
    _reporterNs.report("footerViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgodWealth_Audio(extras) {
    _reporterNs.report("godWealth_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfjackPotViewModel(extras) {
    _reporterNs.report("jackPotViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
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

  function _reportPossibleCrUseOfTaskScheduler(extras) {
    _reporterNs.report("TaskScheduler", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStepNumber(extras) {
    _reporterNs.report("StepNumber", "../../../utils/StepNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrollerPanelViewModel(extras) {
    _reporterNs.report("rollerPanelViewModel", "../viewModel/GameBoardViewModel", _context.meta, extras);
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
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      GameType = _unresolved_3.GameType;
      IconEffectType = _unresolved_3.IconEffectType;
    }, function (_unresolved_4) {
      RollerViewModel = _unresolved_4.default;
    }, function (_unresolved_5) {
      footerViewModel = _unresolved_5.footerViewModel;
      godWealth_Audio = _unresolved_5.godWealth_Audio;
      jackPotViewModel = _unresolved_5.jackPotViewModel;
      sourceManageSeletor = _unresolved_5.sourceManageSeletor;
    }, function (_unresolved_6) {
      PrefabPathDefine = _unresolved_6.PrefabPathDefine;
    }, function (_unresolved_7) {
      dataTransfer = _unresolved_7.default;
      DataKeyType = _unresolved_7.DataKeyType;
    }, function (_unresolved_8) {
      SoundPathDefine = _unresolved_8.SoundPathDefine;
    }, function (_unresolved_9) {
      TaskScheduler = _unresolved_9.default;
      Task = _unresolved_9.Task;
    }, function (_unresolved_10) {
      StepNumber = _unresolved_10.default;
    }, function (_unresolved_11) {
      rollerPanelViewModel = _unresolved_11.rollerPanelViewModel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b37667Trq5G15x855PRyr02", "GodWealth_rollerPanel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Layout', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GodWealth_rollerPanel", GodWealth_rollerPanel = (_dec = ccclass('GodWealth_rollerPanel'), _dec(_class = class GodWealth_rollerPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.rollerViewModelMap = [];
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.stepNumber = void 0;
          this.propertyNode = {
            /**滑槽主板 */
            props_spr_roller_list: new Node(),
            props_spr_roller_list2: new Node(),
            props_grand_number: new Label(),
            props_major_number: new Label(),
            props_mini_number: new Label(),
            props_God_tk_center: new Node()
          };
          this.props = {
            rollerMap: [],
            iconEffectData: {
              iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                error: Error()
              }), IconEffectType) : IconEffectType).NONE,
              coord: []
            },
            iconBaoHeEffectData: {
              iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                error: Error()
              }), IconEffectType) : IconEffectType).NONE,
              coord: []
            },
            iconFreeGameEffectData: {
              iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                error: Error()
              }), IconEffectType) : IconEffectType).NONE,
              coord: []
            },
            jackpotAmount: 0,
            isSortStop: false,
            stopMode: 'index',
            freeGameRate: 0,
            viewGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).NONE,
            currGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).NONE
          };
          this.events = {
            allRollStop: () => {},
            panelRollEnd: rollerIndex => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_God_tk_center.on(Node.EventType.TOUCH_END, () => {
            (_crd && jackPotViewModel === void 0 ? (_reportPossibleCrUseOfjackPotViewModel({
              error: Error()
            }), jackPotViewModel) : jackPotViewModel).viewNode.active = !(_crd && jackPotViewModel === void 0 ? (_reportPossibleCrUseOfjackPotViewModel({
              error: Error()
            }), jackPotViewModel) : jackPotViewModel).viewNode.active;
          });
        }

        useProps(key, value) {
          if (key === "rollerMap") {
            console.log("rollerMap", value.cur);

            if (!this.rollerViewModelMap.length) {
              this.initRollerList(); //初始进入游戏时 为宝盒游戏

              if (this.props.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).SUBGAME2) {
                //渲染宝盒 异步
                this.scheduleOnce(() => {
                  this.showBaoHeAmount();
                }); // window.setTimeout(() => {
                // 	this.showBaoHeAmount()
                // })
              }
            } else {// roller组件自己去订阅store的数据，就不从这里更新了
              // this.rollerViewModelMap.forEach((roller, index) => {
              // 	roller.setProps({ rollerType: this.props.rollerMap[index] })
              // })
            }
          }

          if (key === "iconEffectData") {
            this.rollerViewModelMap.forEach((roller, index) => {
              //index=0情况下=>[0,0][0,2],...=> 获取到一个这种数组:[0,2],描述第几条数组要闪动的图标序号
              const iconEffectArr = this.props.iconEffectData.coord.filter(i => i[0] === index).map(i => i[1]);

              if (iconEffectArr.length) {
                //分配到各个滑槽
                roller.setProps({
                  iconEffectData: {
                    iconEffectArr,
                    iconEffect: this.props.iconEffectData.iconEffect
                  }
                });
              } else {
                roller.setProps({
                  iconEffectData: {
                    iconEffectArr: [],
                    iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                      error: Error()
                    }), IconEffectType) : IconEffectType).NONE
                  }
                });
              }
            });
          }

          if (key === "iconBaoHeEffectData") {
            this.showBaoHeAmount();
          }

          if (key === "iconFreeGameEffectData") {
            this.rollerViewModelMap.forEach((roller, index) => {
              //index=0情况下=>[0,0][0,2],...=> 获取到一个这种数组:[0,2],描述第几条数组要闪动的图标序号
              const iconEffectArr = this.props.iconFreeGameEffectData.coord.filter(i => i[0] === index).map(i => i[1]);

              if (iconEffectArr.length) {
                //分配到各个滑槽
                roller.setProps({
                  iconFreeGameEffectData: {
                    iconEffectArr,
                    iconEffect: this.props.iconFreeGameEffectData.iconEffect
                  }
                });
              } else {
                roller.setProps({
                  iconFreeGameEffectData: {
                    iconEffectArr: [],
                    iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                      error: Error()
                    }), IconEffectType) : IconEffectType).NONE
                  }
                });
              }
            });
          }

          if (key === "jackpotAmount") {
            let baseBetAmountTarget = (_crd && footerViewModel === void 0 ? (_reportPossibleCrUseOffooterViewModel({
              error: Error()
            }), footerViewModel) : footerViewModel).comp.getPositionData();

            if (baseBetAmountTarget.value >= 20) {
              let grandNode = (_crd && rollerPanelViewModel === void 0 ? (_reportPossibleCrUseOfrollerPanelViewModel({
                error: Error()
              }), rollerPanelViewModel) : rollerPanelViewModel).comp.getGrandNode();
              let startNumberGrand = parseInt(grandNode.string.replace(/,/g, ""));
              this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                this.stepNumber && this.stepNumber.stop();
                this.stepNumber = new (_crd && StepNumber === void 0 ? (_reportPossibleCrUseOfStepNumber({
                  error: Error()
                }), StepNumber) : StepNumber)(value.pre, value.cur, num => {
                  // this.propertyNode && this.propertyNode.props_Label_up_goldNum && (this.propertyNode.props_Label_up_goldNum.string = (+num.toFixed(0)).formatAmountWithCommas())
                  grandNode && (grandNode.getComponent(Label).string = (+num.toFixed(0)).formatAmountWithCommas());
                }, () => done());
                this.stepNumber.start();
              }));
            }
          } // if (key === "viewGameType") {
          // 	this.propertyNode.props_spr_roller_list2.active = value.cur === GameType.SUBGAME2;
          // }

        }

        showBaoHeAmount() {
          this.rollerViewModelMap.forEach((roller, index) => {
            //index=0情况下=>[0,0][0,2],...=> 获取到一个这种数组:[0,2],描述第几条数组要闪动的图标序号
            const baoheIconNum = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
              error: Error()
            }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
              error: Error()
            }), DataKeyType) : DataKeyType).FIXED_CHESSBOARD_ICON).filter(i => i[0] === index).map(i => i[2]); //宝盒的金币值

            const iconEffectArr = this.props.iconBaoHeEffectData.coord.filter(i => i[0] === index).map(i => i[1]);

            if (iconEffectArr.length) {
              //分配到各个滑槽
              roller.setProps({
                iconBaoHeEffectData: {
                  iconEffectArr,
                  baoheIconNum,
                  iconEffect: this.props.iconBaoHeEffectData.iconEffect
                }
              });
            } else {
              roller.setProps({
                iconBaoHeEffectData: {
                  iconEffectArr: [],
                  baoheIconNum: [],
                  iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                    error: Error()
                  }), IconEffectType) : IconEffectType).NONE
                }
              });
            }
          });
        }

        getGrandNode() {
          return this.propertyNode.props_grand_number;
        }

        getMajorNode() {
          return this.propertyNode.props_major_number;
        }

        getMiniNode() {
          return this.propertyNode.props_mini_number;
        }

        initRollerList() {
          this.props.rollerMap.forEach(dataItem => {
            const rollerViewModel = new (_crd && RollerViewModel === void 0 ? (_reportPossibleCrUseOfRollerViewModel({
              error: Error()
            }), RollerViewModel) : RollerViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine).ROLLER).source).appendTo(this.propertyNode.props_spr_roller_list).setProps({
              rollerType: dataItem
            }).setEvent({
              rollEnd: rollerIndex => {
                this.events.panelRollEnd(rollerIndex);
                let isAllStop = !this.rollerViewModelMap.some(item => !item.comp.getRoundEnd());
                isAllStop && this.events.allRollStop();
              }
            }).connect();
            this.rollerViewModelMap.push(rollerViewModel);
          });
          const gameType = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
            error: Error()
          }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
            error: Error()
          }), DataKeyType) : DataKeyType).GAME_TYPE);
          (_crd && godWealth_Audio === void 0 ? (_reportPossibleCrUseOfgodWealth_Audio({
            error: Error()
          }), godWealth_Audio) : godWealth_Audio).stop();
          (_crd && godWealth_Audio === void 0 ? (_reportPossibleCrUseOfgodWealth_Audio({
            error: Error()
          }), godWealth_Audio) : godWealth_Audio).play(gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN ? (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).MAIN_BG : gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1 ? (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).GAME1_BG : (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).GAME2_BG, true);
        }

        destroyCallBack() {
          this.taskScheduler.destoryQueue();
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dec035c69110bf5a9e22156a861dd734e0890942.js.map