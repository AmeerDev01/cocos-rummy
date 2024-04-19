System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, BaseComponent, GameType, IconEffectType, RollerViewModel, phoenix_Audio, playAddNum, sourceManageSeletor, PrefabPathDefine, dataTransfer, DataKeyType, SoundPathDefine, TaskScheduler, phoenix_roller, _dec, _class, _crd, ccclass, property, phoenix_rollerPanel;

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

  function _reportPossibleCrUseOfphoenix_Audio(extras) {
    _reporterNs.report("phoenix_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayAddNum(extras) {
    _reporterNs.report("playAddNum", "../index", _context.meta, extras);
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

  function _reportPossibleCrUseOfStepNumber(extras) {
    _reporterNs.report("StepNumber", "../../../utils/StepNumber", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphoenix_roller(extras) {
    _reporterNs.report("phoenix_roller", "./phoenix_roller", _context.meta, extras);
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
      phoenix_Audio = _unresolved_5.phoenix_Audio;
      playAddNum = _unresolved_5.playAddNum;
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
    }, function (_unresolved_10) {
      phoenix_roller = _unresolved_10.phoenix_roller;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "648d7r1neJKHZUecjakm/pC", "phoenix_rollerPanel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Layout', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("phoenix_rollerPanel", phoenix_rollerPanel = (_dec = ccclass('phoenix_rollerPanel'), _dec(_class = class phoenix_rollerPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.rollerViewModelMap = [];
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.stepNumber = void 0;
          this.propertyNode = {
            /**滑槽主板 */
            props_spr_roller_list: new Node(),

            /**进入小游戏的气泡 出现万能图标时显示*/
            props_spr_smallGame_multipleBg: new Node(),

            /**进入小游戏的气泡 倍数*/
            props_Label_smallGame_multiple: new Node(),

            /**滑槽背景 */
            props_spr_phoenix_Bluebg: new Node(),
            props_spr_phoenix_Redbg: new Node()
          };
          this.props = {
            rollerMap: [],
            iconEffectData: {
              iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                error: Error()
              }), IconEffectType) : IconEffectType).NONE,
              coord: []
            },
            iconYuanBaoEffectData: {
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
            freeGameRate: 0
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

        bindEvent() {}

        useProps(key, value) {
          if (key === "rollerMap") {
            if (!this.rollerViewModelMap.length) {
              this.initRollerList();
            } else {// roller组件自己去订阅store的数据，就不从这里更新了
              // this.rollerViewModelMap.forEach((roller, index) => {
              // 	roller.setProps({ rollerType: this.props.rollerMap[index] })
              // })
            }
          }

          if (key === "iconEffectData") {
            this.rollerViewModelMap.forEach((roller, index) => {
              //index=0情况下=>[0,0][0,2],...=> 获取到一个这种数组:[0,2],描述第几条数组要闪动的图标序号
              var iconEffectArr = this.props.iconEffectData.coord.filter(i => i[0] === index).map(i => i[1]); // console.log("iconEffectArr",iconEffectArr);

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

          if (key === "iconYuanBaoEffectData") {
            this.rollerViewModelMap.forEach((roller, index) => {
              //index=0情况下=>[0,0][0,2],...=> 获取到一个这种数组:[0,2],描述第几条数组要闪动的图标序号
              var iconEffectArr = this.props.iconYuanBaoEffectData.coord.filter(i => i[0] === index).map(i => i[1]);

              if (iconEffectArr.length) {
                //分配到各个滑槽
                roller.setProps({
                  iconYuanBaoEffectData: {
                    iconEffectArr,
                    iconEffect: this.props.iconYuanBaoEffectData.iconEffect
                  }
                });
              } else {
                roller.setProps({
                  iconYuanBaoEffectData: {
                    iconEffectArr: [],
                    iconEffect: (_crd && IconEffectType === void 0 ? (_reportPossibleCrUseOfIconEffectType({
                      error: Error()
                    }), IconEffectType) : IconEffectType).NONE
                  }
                });
              }
            });
          }

          if (key === "iconFreeGameEffectData") {
            this.rollerViewModelMap.forEach((roller, index) => {
              //index=0情况下=>[0,0][0,2],...=> 获取到一个这种数组:[0,2],描述第几条数组要闪动的图标序号
              var iconEffectArr = this.props.iconFreeGameEffectData.coord.filter(i => i[0] === index).map(i => i[1]);

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

          if (key === "jackpotAmount") {// this.taskScheduler.joinqQueue(new Task((done) => {
            // 	this.stepNumber && this.stepNumber.stop()
            // 	this.stepNumber = new StepNumber(value.pre, value.cur, (num) => {
            // 		// this.propertyNode && this.propertyNode.props_Label_up_goldNum && (this.propertyNode.props_Label_up_goldNum.string = (+num.toFixed(0)).formatAmountWithCommas())
            // 		this.propertyNode && this.propertyNode.props_Label_jackpot_num && (this.propertyNode.props_Label_jackpot_num.string = num.formatAmountWithCommas())
            // 	}, () => done())
            // 	this.stepNumber.start()
            // }))
          }

          if (key === "freeGameRate") {
            if (value.cur > 0) {
              (_crd && playAddNum === void 0 ? (_reportPossibleCrUseOfplayAddNum({
                error: Error()
              }), playAddNum) : playAddNum)();
              this.propertyNode.props_Label_smallGame_multiple.getComponent(Label).string = "X" + value.cur;
            } else {
              this.propertyNode.props_Label_smallGame_multiple.getComponent(Label).string = "";
            }
          }
        }

        initRollerList() {
          this.props.rollerMap.forEach(dataItem => {
            var rollerViewModel = new (_crd && RollerViewModel === void 0 ? (_reportPossibleCrUseOfRollerViewModel({
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
                var isAllStop = !this.rollerViewModelMap.some(item => !item.comp.getRoundEnd());
                isAllStop && this.events.allRollStop();
              }
            }).connect();
            this.rollerViewModelMap.push(rollerViewModel);
          });
          var gameType = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
            error: Error()
          }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
            error: Error()
          }), DataKeyType) : DataKeyType).GAME_TYPE);
          (_crd && phoenix_Audio === void 0 ? (_reportPossibleCrUseOfphoenix_Audio({
            error: Error()
          }), phoenix_Audio) : phoenix_Audio).stop();
          (_crd && phoenix_Audio === void 0 ? (_reportPossibleCrUseOfphoenix_Audio({
            error: Error()
          }), phoenix_Audio) : phoenix_Audio).play(gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN ? (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).MAIN_BG : (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).GAME2_BG, true);
        } //小游戏加次数


        multiplier(done) {
          var count = 0;
          this.propertyNode.props_spr_roller_list.children.forEach(item => {
            item.getComponent(_crd && phoenix_roller === void 0 ? (_reportPossibleCrUseOfphoenix_roller({
              error: Error()
            }), phoenix_roller) : phoenix_roller).multiplier(() => {
              count++;

              if (count >= this.propertyNode.props_spr_roller_list.children.length) {
                done();
              }
            });
          });
        }

        destroyCallBack() {
          this.taskScheduler.destoryQueue();
        }

        bindUI() {
          this.propertyNode.props_spr_smallGame_multipleBg.active = false;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a2c94f7ce7380d16e541ad827b06875c97f70b4e.js.map