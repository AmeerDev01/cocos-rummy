System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, sys, ViewModel, StoreInject, getStore, GetHallStore, footerViewModel, fruit777_Audio, sourceManageSeletor, SKT_MAG_TYPE, sktInstance, sktMsgListener, addToastAction, dataTransfer, DataKeyType, refreshData, config, PrefabPathDefine, setRollRoundEnd, changeProfit, setSubGameTimes, setWaiting, updateBalance, updateSubGameTimes, GameType, JactpotType, BaseViewModel, OpenStatus, SoundPathDefine, lang, _dec, _class, _crd, BoxPanelViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFruit777_BoxPanel(extras) {
    _reporterNs.report("Fruit777_BoxPanel", "../components/Fruit777_BoxPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Fruit777_BoxPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Fruit777_BoxPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFruit777_JackPot(extras) {
    _reporterNs.report("Fruit777_JackPot", "../components/Fruit777_JackPot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJPIState(extras) {
    _reporterNs.report("JPIState", "../components/Fruit777_JackPot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJPIprops(extras) {
    _reporterNs.report("JPIprops", "../components/Fruit777_JackPot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJPIEvent(extras) {
    _reporterNs.report("JPIEvent", "../components/Fruit777_JackPot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetHallStore(extras) {
    _reporterNs.report("GetHallStore", "../../../hall/store", _context.meta, extras);
  }

  function _reportPossibleCrUseOffooterViewModel(extras) {
    _reporterNs.report("footerViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOffruit777_Audio(extras) {
    _reporterNs.report("fruit777_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKT_MAG_TYPE(extras) {
    _reporterNs.report("SKT_MAG_TYPE", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktInstance(extras) {
    _reporterNs.report("sktInstance", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktMsgListener(extras) {
    _reporterNs.report("sktMsgListener", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdataTransfer(extras) {
    _reporterNs.report("dataTransfer", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataKeyType(extras) {
    _reporterNs.report("DataKeyType", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrefreshData(extras) {
    _reporterNs.report("refreshData", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetRollRoundEnd(extras) {
    _reporterNs.report("setRollRoundEnd", "../store/actions/roller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeProfit(extras) {
    _reporterNs.report("changeProfit", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetSubGameTimes(extras) {
    _reporterNs.report("setSubGameTimes", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetWaiting(extras) {
    _reporterNs.report("setWaiting", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateBalance(extras) {
    _reporterNs.report("updateBalance", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateSubGameTimes(extras) {
    _reporterNs.report("updateSubGameTimes", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJactpotType(extras) {
    _reporterNs.report("JactpotType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseViewModel(extras) {
    _reporterNs.report("BaseViewModel", "../../../common/viewModel/BaseViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenStatus(extras) {
    _reporterNs.report("OpenStatus", "../components/Fruit777_AwardBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../../hall", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
      StoreInject = _unresolved_2.StoreInject;
    }, function (_unresolved_3) {
      getStore = _unresolved_3.getStore;
    }, function (_unresolved_4) {
      GetHallStore = _unresolved_4.getStore;
    }, function (_unresolved_5) {
      footerViewModel = _unresolved_5.footerViewModel;
      fruit777_Audio = _unresolved_5.fruit777_Audio;
      sourceManageSeletor = _unresolved_5.sourceManageSeletor;
    }, function (_unresolved_6) {
      SKT_MAG_TYPE = _unresolved_6.SKT_MAG_TYPE;
      sktInstance = _unresolved_6.sktInstance;
      sktMsgListener = _unresolved_6.sktMsgListener;
    }, function (_unresolved_7) {
      addToastAction = _unresolved_7.addToastAction;
    }, function (_unresolved_8) {
      dataTransfer = _unresolved_8.default;
      DataKeyType = _unresolved_8.DataKeyType;
      refreshData = _unresolved_8.refreshData;
    }, function (_unresolved_9) {
      config = _unresolved_9.default;
    }, function (_unresolved_10) {
      PrefabPathDefine = _unresolved_10.PrefabPathDefine;
    }, function (_unresolved_11) {
      setRollRoundEnd = _unresolved_11.setRollRoundEnd;
    }, function (_unresolved_12) {
      changeProfit = _unresolved_12.changeProfit;
      setSubGameTimes = _unresolved_12.setSubGameTimes;
      setWaiting = _unresolved_12.setWaiting;
      updateBalance = _unresolved_12.updateBalance;
      updateSubGameTimes = _unresolved_12.updateSubGameTimes;
    }, function (_unresolved_13) {
      GameType = _unresolved_13.GameType;
      JactpotType = _unresolved_13.JactpotType;
    }, function (_unresolved_14) {
      BaseViewModel = _unresolved_14.default;
    }, function (_unresolved_15) {
      OpenStatus = _unresolved_15.OpenStatus;
    }, function (_unresolved_16) {
      SoundPathDefine = _unresolved_16.SoundPathDefine;
    }, function (_unresolved_17) {
      lang = _unresolved_17.lang;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cd98bR/D7lO35zRlxWKiHIt", "BoxPanelViewModel", undefined);

      __checkObsolete__(['Node', 'instantiate', 'sys']);

      BoxPanelViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class BoxPanelViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Fruit777_BoxPanel');
          this.openWaitingBoxId = -1;
          this.jackpot = void 0;
        }

        begin() {
          (_crd && fruit777_Audio === void 0 ? (_reportPossibleCrUseOffruit777_Audio({
            error: Error()
          }), fruit777_Audio) : fruit777_Audio).stop();
          (_crd && fruit777_Audio === void 0 ? (_reportPossibleCrUseOffruit777_Audio({
            error: Error()
          }), fruit777_Audio) : fruit777_Audio).play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).BG_MUSIC_1, true);
          this.dispatch((_crd && setRollRoundEnd === void 0 ? (_reportPossibleCrUseOfsetRollRoundEnd({
            error: Error()
          }), setRollRoundEnd) : setRollRoundEnd)(false)); // console.log('SUBGAME_TIMES')

          this.dispatch((_crd && changeProfit === void 0 ? (_reportPossibleCrUseOfchangeProfit({
            error: Error()
          }), changeProfit) : changeProfit)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
            error: Error()
          }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
            error: Error()
          }), DataKeyType) : DataKeyType).FREE_GAME_AMOUNT)));
          this.dispatch((_crd && updateSubGameTimes === void 0 ? (_reportPossibleCrUseOfupdateSubGameTimes({
            error: Error()
          }), updateSubGameTimes) : updateSubGameTimes)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
            error: Error()
          }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
            error: Error()
          }), DataKeyType) : DataKeyType).SUBGAME_TIMES)));
          this.jackpot = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
            error: Error()
          }), BaseViewModel) : BaseViewModel)('Fruit777_JackPot').mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).JACK_POT).source).appendTo(this.viewNode);
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).LAUNCHER_BET, "box", (data, error) => {
            if (!error) {
              // console.log('box', data)
              (_crd && refreshData === void 0 ? (_reportPossibleCrUseOfrefreshData({
                error: Error()
              }), refreshData) : refreshData)(data); //这里尤其注意，gameType变了，这里的数据一定要阻止
              // if (dataTransfer(DataKeyType.GAME_TYPE) !== GameType.SUBGAME1) return

              const awardInfo = (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).AWARD_INFO);

              for (let key in awardInfo) {
                if (key === "BONUS") {
                  this.setProps({
                    BONUS: awardInfo[key]
                  });
                } else {
                  const awardBoxItem = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                    error: Error()
                  }), config) : config).awardBoxItem.find(item => item.id === +key); // console.log(key, awardBoxItem)

                  awardBoxItem && this.setProps({
                    openDoBoxData: {
                      boxId: this.openWaitingBoxId,
                      dataId: awardBoxItem.id,
                      times: awardBoxItem.addTimes,
                      levelUp: awardBoxItem.up,
                      fruitFileName: awardBoxItem.fileName,
                      score: awardInfo[key],
                      distance: awardBoxItem.distance,
                      BONUS: 0,
                      name: awardBoxItem.name
                    }
                  });
                }
              }

              this.openWaitingBoxId = -1;
            } else {
              this.openWaitingBoxId = -1;
            }
          }, 10);
          this.setEvent({
            onOpenHandler: boxId => {
              console.log('open', this.openWaitingBoxId);
              (_crd && fruit777_Audio === void 0 ? (_reportPossibleCrUseOffruit777_Audio({
                error: Error()
              }), fruit777_Audio) : fruit777_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).OPEN_AWARDBOX);

              if (this.openWaitingBoxId === -1 && (_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).SUBGAME_TIMES) !== 0) {
                this.openWaitingBoxId = boxId;
                (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
                  error: Error()
                }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                  error: Error()
                }), SKT_MAG_TYPE) : SKT_MAG_TYPE).LAUNCHER_BET, {
                  positionId: (_crd && footerViewModel === void 0 ? (_reportPossibleCrUseOffooterViewModel({
                    error: Error()
                  }), footerViewModel) : footerViewModel).comp.getPositionData().positionId,
                  tableId: JSON.parse(sys.localStorage.getItem('fruit777')).tableId,
                  gameId: (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                    error: Error()
                  }), config) : config).gameId
                });
                this.dispatch((_crd && setWaiting === void 0 ? (_reportPossibleCrUseOfsetWaiting({
                  error: Error()
                }), setWaiting) : setWaiting)(false));
              } else {
                (_crd && GetHallStore === void 0 ? (_reportPossibleCrUseOfGetHallStore({
                  error: Error()
                }), GetHallStore) : GetHallStore)().dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                  error: Error()
                }), addToastAction) : addToastAction)({
                  content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                    error: Error()
                  }), lang) : lang).write(k => k.InitGameModule.HoldOn, {}, {
                    placeStr: "Hold on please..."
                  })
                }));
              }
            },
            onFreeGameAmoundChange: () => {
              this.dispatch((_crd && changeProfit === void 0 ? (_reportPossibleCrUseOfchangeProfit({
                error: Error()
              }), changeProfit) : changeProfit)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).FREE_GAME_AMOUNT)));
            },
            allDoneHandler: () => {
              this.dispatch((_crd && setSubGameTimes === void 0 ? (_reportPossibleCrUseOfsetSubGameTimes({
                error: Error()
              }), setSubGameTimes) : setSubGameTimes)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).SUBGAME_TIMES)));
            },
            updateTimesHandler: (times, jackPotTypeName) => {
              if ((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).GAME_TYPE) === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).SUBGAME1) {
                this.dispatch((_crd && updateSubGameTimes === void 0 ? (_reportPossibleCrUseOfupdateSubGameTimes({
                  error: Error()
                }), updateSubGameTimes) : updateSubGameTimes)(times));
                this.dispatch((_crd && setWaiting === void 0 ? (_reportPossibleCrUseOfsetWaiting({
                  error: Error()
                }), setWaiting) : setWaiting)(true));
              } else {
                this.dispatch((_crd && updateSubGameTimes === void 0 ? (_reportPossibleCrUseOfupdateSubGameTimes({
                  error: Error()
                }), updateSubGameTimes) : updateSubGameTimes)(0));
              }

              this.dispatch((_crd && updateBalance === void 0 ? (_reportPossibleCrUseOfupdateBalance({
                error: Error()
              }), updateBalance) : updateBalance)((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
                error: Error()
              }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
                error: Error()
              }), DataKeyType) : DataKeyType).BALANCE)));

              if (jackPotTypeName !== undefined) {
                const props = instantiate(this.jackpot.comp.props);
                jackPotTypeName === (_crd && JactpotType === void 0 ? (_reportPossibleCrUseOfJactpotType({
                  error: Error()
                }), JactpotType) : JactpotType).BANANA && (props.fruitHeader['banana'] = true);
                jackPotTypeName === (_crd && JactpotType === void 0 ? (_reportPossibleCrUseOfJactpotType({
                  error: Error()
                }), JactpotType) : JactpotType).APPLE && (props.fruitHeader['apple'] = true);
                jackPotTypeName === (_crd && JactpotType === void 0 ? (_reportPossibleCrUseOfJactpotType({
                  error: Error()
                }), JactpotType) : JactpotType).GRAPE && (props.fruitHeader['grape'] = true);
                jackPotTypeName === (_crd && JactpotType === void 0 ? (_reportPossibleCrUseOfJactpotType({
                  error: Error()
                }), JactpotType) : JactpotType).STRAWBERRY && (props.fruitHeader['strawberry'] = true);
                jackPotTypeName === (_crd && JactpotType === void 0 ? (_reportPossibleCrUseOfJactpotType({
                  error: Error()
                }), JactpotType) : JactpotType).WATERMELON && (props.fruitHeader['watermelon'] = true);
                jackPotTypeName === (_crd && JactpotType === void 0 ? (_reportPossibleCrUseOfJactpotType({
                  error: Error()
                }), JactpotType) : JactpotType).LEVEL && (props['level'] = props.level + 1);
                this.jackpot.setProps(props);
              }
            }
          });
          this.comp.scheduleOnce(() => {
            this.dispatch((_crd && setWaiting === void 0 ? (_reportPossibleCrUseOfsetWaiting({
              error: Error()
            }), setWaiting) : setWaiting)(true));
          }, 1.5);
          (_crd && footerViewModel === void 0 ? (_reportPossibleCrUseOffooterViewModel({
            error: Error()
          }), footerViewModel) : footerViewModel).autoLauncherPanel.setLaunchEvent(() => {
            this.manualBetHandler();
          });
        } //用于自动触发


        manualBetHandler() {
          if ((_crd && dataTransfer === void 0 ? (_reportPossibleCrUseOfdataTransfer({
            error: Error()
          }), dataTransfer) : dataTransfer)((_crd && DataKeyType === void 0 ? (_reportPossibleCrUseOfDataKeyType({
            error: Error()
          }), DataKeyType) : DataKeyType).GAME_TYPE) === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1 && this.comp.awardBoxMap) {
            for (let i = 0, l = this.comp.awardBoxMap.length; i < l; i++) {
              const awardBox = this.comp.awardBoxMap[i];

              if (awardBox.comp.getOpenStatus() === (_crd && OpenStatus === void 0 ? (_reportPossibleCrUseOfOpenStatus({
                error: Error()
              }), OpenStatus) : OpenStatus).CLOSE) {
                awardBox.comp.openAwardBox();
                break;
              }
            }
          }
        }

        unMountCallBack() {
          // this.comp.awardBoxMap.forEach(vm => vm.unMount())
          // this.jackpot.unMount()
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).removeById("box");
        }

        connect() {
          this.inject({}, state => {
            return {
              remainGameTimes: state.game.remainSubGameTimes
            };
          });
          return this;
        }

      }) || _class);

      _export("default", BoxPanelViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b68e198de1de8584242f05a07521bae8ea44c0dd.js.map