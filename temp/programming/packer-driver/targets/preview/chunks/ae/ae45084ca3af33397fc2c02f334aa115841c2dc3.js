System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ViewModel, StoreInject, ModalBox, BaseViewModel, global, lang, addToastAction, CountdownTool, EffectType, config, playGameBegin, sourceManageSeletor, getPlayer, getRoomUpper, SKT_MAG_TYPE, sktInstance, sktMsgListener, PrefabPathDefine, getStore, beginGameCountdown, changeDealer, changeDeskStatus, changeOperationPlayer, clearRoomData, dealHandCard, joinSeat, operationCountdown, playerBet, playerReady, quitSeat, saveBalanceInfo, saveWinBalanceInfo, updateCallAmount, DeskStatus, OperationType, convertCardValue, convertOpType, convertServerAction, GameRuleViewModel, MineViewModel, OperationViewModel, OpponentViewModel, SendCardViewModel, _dec, _class, _crd, MainBoardViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModalBox(extras) {
    _reporterNs.report("ModalBox", "../../../common/ModalBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseViewModel(extras) {
    _reporterNs.report("BaseViewModel", "../../../common/viewModel/BaseViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCountdownTool(extras) {
    _reporterNs.report("CountdownTool", "../../../utils/CountdownTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQiuqiu_MainBoard(extras) {
    _reporterNs.report("Qiuqiu_MainBoard", "../components/Qiuqiu_MainBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Qiuqiu_MainBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Qiuqiu_MainBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQiuqiu_SetPanel(extras) {
    _reporterNs.report("Qiuqiu_SetPanel", "../components/Qiuqiu_SetPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPIEvent(extras) {
    _reporterNs.report("SPIEvent", "../components/Qiuqiu_SetPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPIProps(extras) {
    _reporterNs.report("SPIProps", "../components/Qiuqiu_SetPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPIState(extras) {
    _reporterNs.report("SPIState", "../components/Qiuqiu_SetPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayGameBegin(extras) {
    _reporterNs.report("playGameBegin", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetPlayer(extras) {
    _reporterNs.report("getPlayer", "../qiuqiu_tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetRoomUpper(extras) {
    _reporterNs.report("getRoomUpper", "../qiuqiu_tool", _context.meta, extras);
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

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbeginGameCountdown(extras) {
    _reporterNs.report("beginGameCountdown", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeDealer(extras) {
    _reporterNs.report("changeDealer", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeDeskStatus(extras) {
    _reporterNs.report("changeDeskStatus", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeOperationPlayer(extras) {
    _reporterNs.report("changeOperationPlayer", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclearRoomData(extras) {
    _reporterNs.report("clearRoomData", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdealHandCard(extras) {
    _reporterNs.report("dealHandCard", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfjoinSeat(extras) {
    _reporterNs.report("joinSeat", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfoperationCountdown(extras) {
    _reporterNs.report("operationCountdown", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerBet(extras) {
    _reporterNs.report("playerBet", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerReady(extras) {
    _reporterNs.report("playerReady", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfquitSeat(extras) {
    _reporterNs.report("quitSeat", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsaveBalanceInfo(extras) {
    _reporterNs.report("saveBalanceInfo", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsaveWinBalanceInfo(extras) {
    _reporterNs.report("saveWinBalanceInfo", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateCallAmount(extras) {
    _reporterNs.report("updateCallAmount", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBalanceInfo(extras) {
    _reporterNs.report("BalanceInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBalancePlayerVo(extras) {
    _reporterNs.report("BalancePlayerVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCountdown(extras) {
    _reporterNs.report("Countdown", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeskStatus(extras) {
    _reporterNs.report("DeskStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOperationType(extras) {
    _reporterNs.report("OperationType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOperationVo(extras) {
    _reporterNs.report("OperationVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPushDealerVo(extras) {
    _reporterNs.report("PushDealerVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQiuQiuCardVo(extras) {
    _reporterNs.report("QiuQiuCardVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomInfo(extras) {
    _reporterNs.report("RoomInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconvertCardValue(extras) {
    _reporterNs.report("convertCardValue", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconvertOpType(extras) {
    _reporterNs.report("convertOpType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconvertServerAction(extras) {
    _reporterNs.report("convertServerAction", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameRuleViewModel(extras) {
    _reporterNs.report("GameRuleViewModel", "./GameRuleViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMineViewModel(extras) {
    _reporterNs.report("MineViewModel", "./MineViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOperationViewModel(extras) {
    _reporterNs.report("OperationViewModel", "./OperationViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpponentViewModel(extras) {
    _reporterNs.report("OpponentViewModel", "./OpponentViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSendCardViewModel(extras) {
    _reporterNs.report("SendCardViewModel", "./SendCardViewModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
      StoreInject = _unresolved_2.StoreInject;
    }, function (_unresolved_3) {
      ModalBox = _unresolved_3.default;
    }, function (_unresolved_4) {
      BaseViewModel = _unresolved_4.default;
    }, function (_unresolved_5) {
      global = _unresolved_5.global;
      lang = _unresolved_5.lang;
    }, function (_unresolved_6) {
      addToastAction = _unresolved_6.addToastAction;
    }, function (_unresolved_7) {
      CountdownTool = _unresolved_7.default;
    }, function (_unresolved_8) {
      EffectType = _unresolved_8.EffectType;
    }, function (_unresolved_9) {
      config = _unresolved_9.default;
    }, function (_unresolved_10) {
      playGameBegin = _unresolved_10.playGameBegin;
      sourceManageSeletor = _unresolved_10.sourceManageSeletor;
    }, function (_unresolved_11) {
      getPlayer = _unresolved_11.getPlayer;
      getRoomUpper = _unresolved_11.getRoomUpper;
    }, function (_unresolved_12) {
      SKT_MAG_TYPE = _unresolved_12.SKT_MAG_TYPE;
      sktInstance = _unresolved_12.sktInstance;
      sktMsgListener = _unresolved_12.sktMsgListener;
    }, function (_unresolved_13) {
      PrefabPathDefine = _unresolved_13.PrefabPathDefine;
    }, function (_unresolved_14) {
      getStore = _unresolved_14.getStore;
    }, function (_unresolved_15) {
      beginGameCountdown = _unresolved_15.beginGameCountdown;
      changeDealer = _unresolved_15.changeDealer;
      changeDeskStatus = _unresolved_15.changeDeskStatus;
      changeOperationPlayer = _unresolved_15.changeOperationPlayer;
      clearRoomData = _unresolved_15.clearRoomData;
      dealHandCard = _unresolved_15.dealHandCard;
      joinSeat = _unresolved_15.joinSeat;
      operationCountdown = _unresolved_15.operationCountdown;
      playerBet = _unresolved_15.playerBet;
      playerReady = _unresolved_15.playerReady;
      quitSeat = _unresolved_15.quitSeat;
      saveBalanceInfo = _unresolved_15.saveBalanceInfo;
      saveWinBalanceInfo = _unresolved_15.saveWinBalanceInfo;
      updateCallAmount = _unresolved_15.updateCallAmount;
    }, function (_unresolved_16) {
      DeskStatus = _unresolved_16.DeskStatus;
      OperationType = _unresolved_16.OperationType;
      convertCardValue = _unresolved_16.convertCardValue;
      convertOpType = _unresolved_16.convertOpType;
      convertServerAction = _unresolved_16.convertServerAction;
    }, function (_unresolved_17) {
      GameRuleViewModel = _unresolved_17.default;
    }, function (_unresolved_18) {
      MineViewModel = _unresolved_18.default;
    }, function (_unresolved_19) {
      OperationViewModel = _unresolved_19.default;
    }, function (_unresolved_20) {
      OpponentViewModel = _unresolved_20.default;
    }, function (_unresolved_21) {
      SendCardViewModel = _unresolved_21.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57f4aqF+ABOVZU5TMkSxrcp", "MainBoardViewModel", undefined);

      MainBoardViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class MainBoardViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor(roomInfo, tableId, onComplate, myChairId, memberId) {
          super('Qiuqiu_MainBoard');
          this.roomInfo = void 0;
          this.tableId = void 0;
          this.onComplate = void 0;
          this.myChairId = void 0;
          this.memberId = void 0;
          this.mineViewModel = void 0;
          this.opponentViewModels = [];

          /**发牌组件 */
          this.sendCardViewModel = void 0;
          this.operationViewModel = void 0;
          this.openationCountdownTool = void 0;
          this.beginGameCountdownTool = void 0;
          this.roomInfo = roomInfo;
          this.tableId = tableId;
          this.onComplate = onComplate;
          this.myChairId = myChairId;
          this.memberId = memberId;
        }

        begin() {
          this.initSeat();
          this.initSendCardViewModel();
          this.initOperationViewModel();
          this.listenerSocket();
          var setPanel = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
            error: Error()
          }), BaseViewModel) : BaseViewModel)('Qiuqiu_SetPanel').mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).SET_PANEL).source).appendTo(this.viewNode);
          this.setEvent({
            openSetPanel: toggle => {
              setPanel.comp.showToggle(toggle);
            },
            openShopPanel: () => {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).openShop();
            },
            onQuitRoom: () => {
              this.quitRoom();
            },
            dealerBeginOut: () => {},
            getSeatFlyClipStartPos: seatIndex => {
              if (seatIndex === 0) {
                return this.mineViewModel.comp.getFlyChipStartPosition();
              }

              var viewModel = this.opponentViewModels[seatIndex];
              if (!viewModel) return null;
              return viewModel.comp.getFlyChipStartPosition();
            }
          });
          setPanel.setEvent({
            onQuitGame: () => {
              this.quitRoom();
            },
            onChangeRoom: () => {// this.changeRoom();
            },
            openGameRule: () => {
              new (_crd && GameRuleViewModel === void 0 ? (_reportPossibleCrUseOfGameRuleViewModel({
                error: Error()
              }), GameRuleViewModel) : GameRuleViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                error: Error()
              }), PrefabPathDefine) : PrefabPathDefine).prefabs_quiqui_modal).source).appendTo(this.viewNode, {
                effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                  error: Error()
                }), EffectType) : EffectType).EFFECT1,
                isModal: true
              });
            }
          });
          this.onComplate && this.onComplate();
        }

        initSeat() {
          for (var i = 0; i < (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).seatNumber; i++) {
            if (i === 0) {
              this.mineViewModel = new (_crd && MineViewModel === void 0 ? (_reportPossibleCrUseOfMineViewModel({
                error: Error()
              }), MineViewModel) : MineViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                error: Error()
              }), PrefabPathDefine) : PrefabPathDefine).prefabs_quiqui_mine).source).appendTo(this.comp.getPlayerWrapNode()).setEvent({
                getHealerPosition: () => {
                  return this.comp.getHealerPosition();
                }
              }).connect();
              this.opponentViewModels.push(null);
            } else {
              var prefabName = '';
              if (i === 1) prefabName = (_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                error: Error()
              }), PrefabPathDefine) : PrefabPathDefine).prefabs_quiqui_left1;else if (i === 2) prefabName = (_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                error: Error()
              }), PrefabPathDefine) : PrefabPathDefine).prefabs_quiqui_left2;else if (i === 3) prefabName = (_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                error: Error()
              }), PrefabPathDefine) : PrefabPathDefine).prefabs_quiqui_left3;else if (i === 4) prefabName = (_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                error: Error()
              }), PrefabPathDefine) : PrefabPathDefine).prefabs_quiqui_right3;else if (i === 5) prefabName = (_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                error: Error()
              }), PrefabPathDefine) : PrefabPathDefine).prefabs_quiqui_right2;else if (i === 6) prefabName = (_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                error: Error()
              }), PrefabPathDefine) : PrefabPathDefine).prefabs_quiqui_right1;
              var opponentViewModel = new (_crd && OpponentViewModel === void 0 ? (_reportPossibleCrUseOfOpponentViewModel({
                error: Error()
              }), OpponentViewModel) : OpponentViewModel)(i).mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile(prefabName).source).appendTo(this.comp.getPlayerWrapNode()).setEvent({
                getHealerPosition: () => {
                  return this.comp.getHealerPosition();
                }
              }).connect();
              this.opponentViewModels.push(opponentViewModel);
            }
          }
        }

        ready() {
          if (this.comp.props.gold < this.roomInfo.lower || this.comp.props.gold > (_crd && getRoomUpper === void 0 ? (_reportPossibleCrUseOfgetRoomUpper({
            error: Error()
          }), getRoomUpper) : getRoomUpper)(this.roomInfo)) {
            this.quitRoom();
            (_crd && ModalBox === void 0 ? (_reportPossibleCrUseOfModalBox({
              error: Error()
            }), ModalBox) : ModalBox).Instance().show({
              content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.palyingModule.ExceedUpper, {}, {
                placeStr: "对不起，您的金币改房间进入要求!"
              }),
              type: "Prompt"
            }, () => {
              // _option.confirmDoneBeforeFn()
              // baseBoardView.comp.closeSubGame(_option.isPre)
              // _option.confirmDoneAfterFn()
              return true;
            });
            return;
          }

          (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).READY, {
            roomId: this.roomInfo.roomId,
            tableId: this.tableId,
            memberId: this.memberId
          });
        }

        isGameIn() {
          if (!(_crd && getPlayer === void 0 ? (_reportPossibleCrUseOfgetPlayer({
            error: Error()
          }), getPlayer) : getPlayer)(this.comp.props.playerMap, this.memberId).gameData.isGame) {
            return false;
          }

          var notGameIn = this.comp.props.deskStatus === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
            error: Error()
          }), DeskStatus) : DeskStatus).WAITING || this.comp.props.deskStatus === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
            error: Error()
          }), DeskStatus) : DeskStatus).CLSOE;

          if (notGameIn) {
            return false;
          }

          if (this.comp.props.deskStatus === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
            error: Error()
          }), DeskStatus) : DeskStatus).COUNTDOWNING && this.getBeginGameCountdown() > 1) {
            return false;
          }

          this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
            error: Error()
          }), addToastAction) : addToastAction)({
            content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
              error: Error()
            }), lang) : lang).write(k => k.palyingModule.GameExit, {}, {
              placeStr: "您正在游戏中，退出失败，请游戏结束后重试。"
            })
          }));
          return true;
        }

        getBeginGameCountdown() {
          var c = this.comp.props.beginGameCountdown;
          return c ? c.countdown : 0;
        }

        quitRoom() {
          // 游戏中不能退出游戏
          if (this.isGameIn()) {
            return;
          }

          (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).QUIT_ROOM, {
            memberId: this.memberId,
            tableId: this.tableId
          });
          (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).isReconnect = false;
          this.comp.clearData();
          this.unMount();
          this.dispatch((_crd && clearRoomData === void 0 ? (_reportPossibleCrUseOfclearRoomData({
            error: Error()
          }), clearRoomData) : clearRoomData)(0));
        }

        changeRoom() {
          // 游戏中不能退出游戏
          if (this.isGameIn()) {
            return;
          }

          (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).CHANGE_ROOM, {
            gameId: (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameId,
            tableId: this.tableId,
            roomId: this.roomInfo.roomId
          });
          this.comp.clearData();
          this.stopCountdown();
          this.dispatch((_crd && clearRoomData === void 0 ? (_reportPossibleCrUseOfclearRoomData({
            error: Error()
          }), clearRoomData) : clearRoomData)(0));
        }
        /**
         * 玩家操作
         * @param opType 操作类型
         * @param betAmount 下注金额
         */


        playerOp(opType, betAmount) {
          (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).PLAYER_OP, {
            tableId: this.tableId,
            memberId: this.memberId,
            chairId: this.myChairId,
            betAmount: betAmount,
            action: (_crd && convertServerAction === void 0 ? (_reportPossibleCrUseOfconvertServerAction({
              error: Error()
            }), convertServerAction) : convertServerAction)(opType)
          });
        }

        enterGame(player) {
          if (player.isSelf) {
            player.seatIndex = 0;
            this.dispatch((_crd && joinSeat === void 0 ? (_reportPossibleCrUseOfjoinSeat({
              error: Error()
            }), joinSeat) : joinSeat)(player));

            if (!player.gameData.isReady) {
              this.ready();
            }
          } else {
            this.setPlayerSeatIndex(player);
            this.dispatch((_crd && joinSeat === void 0 ? (_reportPossibleCrUseOfjoinSeat({
              error: Error()
            }), joinSeat) : joinSeat)(player));
          }
        }
        /**设置本地座位 */


        setPlayerSeatIndex(player) {
          // 如果自己的座位号小于对手座位号，直接用对手的座位减去自己的座位号就得到了本地座位号
          // 如果自己的座位号大于对手座位号，用最大座位号减去自己的座位号然后再加上对手的座位号就得到了本地座位号
          var seatIndex = this.myChairId < player.chairId ? player.chairId - this.myChairId : (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).seatNumber - this.myChairId + player.chairId;
          player.seatIndex = seatIndex;
        }

        unMountCallBack() {
          this.removeListener();
          this.stopCountdown();
        }

        stopCountdown() {
          this.openationCountdownTool && this.openationCountdownTool.stop();
          this.beginGameCountdownTool && this.beginGameCountdownTool.stop();
          this.openationCountdownTool = undefined;
          this.beginGameCountdownTool = undefined;
        }

        removeListener() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).READY);
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).BEGIN_GAME_COUNTDOWN);
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GAME_STATE_CHANGE);
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).PUSH_DEALER);
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).PUSH_DEAL);
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).PLAYER_OP);
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).BALANCE);
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).QUIT_ROOM);
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).CHANGE_ROOM);
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).remove((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).SECOND_PUSH_DEAL);
        }

        listenerSocket() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).READY, 'room', data => {
            this.dispatch((_crd && playerReady === void 0 ? (_reportPossibleCrUseOfplayerReady({
              error: Error()
            }), playerReady) : playerReady)(data.memberId));
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).BEGIN_GAME_COUNTDOWN, 'room', data => {
            if (this.comp && this.comp.isValid) {
              var seatIndex = this.comp.props.currActiveSeatIndex;
              var coutndown = {
                countdown: data,
                seatIndex: seatIndex,
                time: Date.now()
              };
              this.dispatch((_crd && changeDeskStatus === void 0 ? (_reportPossibleCrUseOfchangeDeskStatus({
                error: Error()
              }), changeDeskStatus) : changeDeskStatus)((_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
                error: Error()
              }), DeskStatus) : DeskStatus).COUNTDOWNING));
              this.dispatch((_crd && beginGameCountdown === void 0 ? (_reportPossibleCrUseOfbeginGameCountdown({
                error: Error()
              }), beginGameCountdown) : beginGameCountdown)(coutndown));
            }
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).PUSH_DEALER, 'room', data => {
            this.dispatch((_crd && changeDealer === void 0 ? (_reportPossibleCrUseOfchangeDealer({
              error: Error()
            }), changeDealer) : changeDealer)(data.bankerId));
            this.beginGameBetAnte();
            this.startCountdown(data.countdown, false);
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GAME_STATE_CHANGE, 'room', data => {});
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).PUSH_DEAL, 'room', data => {
            var values = data.pokers.map(v => (_crd && convertCardValue === void 0 ? (_reportPossibleCrUseOfconvertCardValue({
              error: Error()
            }), convertCardValue) : convertCardValue)(v.smallNum, v.bigNum));

            if (data.stage === 1) {
              this.dispatch((_crd && dealHandCard === void 0 ? (_reportPossibleCrUseOfdealHandCard({
                error: Error()
              }), dealHandCard) : dealHandCard)(values));
              window.setTimeout(() => {
                this.dispatch((_crd && changeDeskStatus === void 0 ? (_reportPossibleCrUseOfchangeDeskStatus({
                  error: Error()
                }), changeDeskStatus) : changeDeskStatus)((_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
                  error: Error()
                }), DeskStatus) : DeskStatus).FIRST_DISTRIBUTE));
              }, 1000);
            } else if (data.stage === 2) {
              // const cards = this.comp.props.playerMap[0].gameData.cards.concat(values[values.length - 1]);
              var cards = values;
              this.dispatch((_crd && dealHandCard === void 0 ? (_reportPossibleCrUseOfdealHandCard({
                error: Error()
              }), dealHandCard) : dealHandCard)(cards)); // 延迟执行是为了让创建手牌之后真实坐标

              this.comp.scheduleOnce(() => {
                this.dispatch((_crd && changeDeskStatus === void 0 ? (_reportPossibleCrUseOfchangeDeskStatus({
                  error: Error()
                }), changeDeskStatus) : changeDeskStatus)((_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
                  error: Error()
                }), DeskStatus) : DeskStatus).SECOND_DISTRIBUTE));
              }, 0.1);
            }
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).SECOND_PUSH_DEAL, 'room', data => {
            var fourCard = data >= 0 ? data : -1;

            if (fourCard >= 0) {
              var cards = this.comp.props.playerMap[0].gameData.cards.concat(fourCard);
              this.dispatch((_crd && dealHandCard === void 0 ? (_reportPossibleCrUseOfdealHandCard({
                error: Error()
              }), dealHandCard) : dealHandCard)(cards));
            } // 延迟执行是为了让创建手牌之后真实坐标


            this.comp.scheduleOnce(() => {
              this.dispatch((_crd && changeDeskStatus === void 0 ? (_reportPossibleCrUseOfchangeDeskStatus({
                error: Error()
              }), changeDeskStatus) : changeDeskStatus)((_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
                error: Error()
              }), DeskStatus) : DeskStatus).SECOND_DISTRIBUTE));
            }, 0.1);
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).PLAYER_OP, 'room', data => {
            this.dispatch((_crd && playerBet === void 0 ? (_reportPossibleCrUseOfplayerBet({
              error: Error()
            }), playerBet) : playerBet)(data.memBerInfo.memberId, data.betAmount, (_crd && convertOpType === void 0 ? (_reportPossibleCrUseOfconvertOpType({
              error: Error()
            }), convertOpType) : convertOpType)(data.action, data.betAmount), data.memBerInfo.gold));

            if (data.qiuqiuNext) {
              var completionPlayer = data.qiuqiuNext.completionPlayer;

              for (var key in completionPlayer) {
                if (Object.hasOwnProperty.call(completionPlayer, key)) {
                  var callAmount = completionPlayer[key];
                  this.dispatch((_crd && updateCallAmount === void 0 ? (_reportPossibleCrUseOfupdateCallAmount({
                    error: Error()
                  }), updateCallAmount) : updateCallAmount)(key, callAmount));
                }
              }

              this.dispatch((_crd && changeOperationPlayer === void 0 ? (_reportPossibleCrUseOfchangeOperationPlayer({
                error: Error()
              }), changeOperationPlayer) : changeOperationPlayer)(data.qiuqiuNext.memberId));
              this.startCountdown(data.qiuqiuNext.leftTime);
            } else {
              this.startCountdown(0);
            }
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).BALANCE, 'room', data => {
            var balances = [];
            data.forEach(v => {
              var player = (_crd && getPlayer === void 0 ? (_reportPossibleCrUseOfgetPlayer({
                error: Error()
              }), getPlayer) : getPlayer)(this.comp.props.playerMap, v.memberId);
              var cards = v.pokers ? v.pokers.map(poker => (_crd && convertCardValue === void 0 ? (_reportPossibleCrUseOfconvertCardValue({
                error: Error()
              }), convertCardValue) : convertCardValue)(poker.smallNum, poker.bigNum)) : [];

              if (v.memberId === this.memberId) {
                cards = player.gameData.cards;
              }

              this.dispatch((_crd && saveBalanceInfo === void 0 ? (_reportPossibleCrUseOfsaveBalanceInfo({
                error: Error()
              }), saveBalanceInfo) : saveBalanceInfo)(v.memberId, v.memBerGold, v.gold, cards));
              balances.push({
                winloss: v.gold,
                seatIndex: player.seatIndex
              });
            });
            this.dispatch((_crd && saveWinBalanceInfo === void 0 ? (_reportPossibleCrUseOfsaveWinBalanceInfo({
              error: Error()
            }), saveWinBalanceInfo) : saveWinBalanceInfo)(balances));
            this.dispatch((_crd && changeDeskStatus === void 0 ? (_reportPossibleCrUseOfchangeDeskStatus({
              error: Error()
            }), changeDeskStatus) : changeDeskStatus)((_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).CLSOE)); // 收到结算之后，延迟一哈发送准备

            window.setTimeout(() => {
              if (this.comp.node.isValid) {
                this.dispatch((_crd && changeDeskStatus === void 0 ? (_reportPossibleCrUseOfchangeDeskStatus({
                  error: Error()
                }), changeDeskStatus) : changeDeskStatus)((_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
                  error: Error()
                }), DeskStatus) : DeskStatus).WAITING));
                this.ready();
              }
            }, 3000);
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).QUIT_ROOM, 'room', data => {
            this.pushQuitRoom(data.memberId);
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).CHANGE_ROOM, 'room', data => {
            this.pushQuitRoom(data.memberId);
          });
        }
        /**开局下底注 */


        beginGameBetAnte() {
          this.comp.props.playerMap.filter(v => v && v.gameData.isGame).forEach(v => {
            var gold = v.glodAmount - (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).afee;
            this.dispatch((_crd && playerBet === void 0 ? (_reportPossibleCrUseOfplayerBet({
              error: Error()
            }), playerBet) : playerBet)(v.uid, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).afee, (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
              error: Error()
            }), OperationType) : OperationType).WAIT, gold));
          });
        }

        pushQuitRoom(memberId) {
          // if (this.memberId === memberId) {
          //   this.comp.clearData();
          //   this.unMount();
          //   this.dispatch(clearRoomData(0));
          // } else {
          this.dispatch((_crd && quitSeat === void 0 ? (_reportPossibleCrUseOfquitSeat({
            error: Error()
          }), quitSeat) : quitSeat)(memberId));

          if (this.comp.props.deskStatus === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
            error: Error()
          }), DeskStatus) : DeskStatus).COUNTDOWNING) {
            // 小于2人了，暂停倒计时
            var roomLength = this.comp.props.playerMap.filter(v => v).length;

            if (roomLength < 2) {
              this.dispatch((_crd && changeDeskStatus === void 0 ? (_reportPossibleCrUseOfchangeDeskStatus({
                error: Error()
              }), changeDeskStatus) : changeDeskStatus)((_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
                error: Error()
              }), DeskStatus) : DeskStatus).WAITING));
            }
          } // }

        }
        /**获得下一个操作的座位号 */


        getNextSeatIndex(lastIndex, count) {
          if (count === void 0) {
            count = 0;
          }

          if (count > (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).seatNumber || !this.comp.props || !this.comp.isValid) return -1;
          var nextIndex = lastIndex + 1 >= (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).seatNumber ? 0 : lastIndex + 1;
          var player = this.comp.props.playerMap[nextIndex];

          if (player && player.gameData.isGame && player.gameData.opType !== (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
            error: Error()
          }), OperationType) : OperationType).GIVE_UP) {
            return player.seatIndex;
          }

          return this.getNextSeatIndex(nextIndex, ++count);
        }
        /**开始出牌倒计时 */


        startCountdown(count, isStart) {
          if (isStart === void 0) {
            isStart = true;
          }

          if (!this.openationCountdownTool) {
            this.openationCountdownTool = new (_crd && CountdownTool === void 0 ? (_reportPossibleCrUseOfCountdownTool({
              error: Error()
            }), CountdownTool) : CountdownTool)(schedule => {
              if (this.comp && this.comp.isValid) {
                var seatIndex = this.comp.props.currActiveSeatIndex;
                var coutndown = {
                  countdown: schedule,
                  seatIndex: seatIndex,
                  time: Date.now()
                };
                this.dispatch((_crd && operationCountdown === void 0 ? (_reportPossibleCrUseOfoperationCountdown({
                  error: Error()
                }), operationCountdown) : operationCountdown)(coutndown));
              }

              if (schedule === 0) {
                (_crd && playGameBegin === void 0 ? (_reportPossibleCrUseOfplayGameBegin({
                  error: Error()
                }), playGameBegin) : playGameBegin)();
              }
            });
          }

          if (isStart) {
            count = count === -1 ? this.openationCountdownTool.getCountdown() : count;
            this.openationCountdownTool.start(count);
          } else {
            this.openationCountdownTool.setCountdown(count);
          }
        }
        /**开始游戏倒计时 */


        beginGameCountdownHandle(count) {
          if (!this.beginGameCountdownTool) {
            this.beginGameCountdownTool = new (_crd && CountdownTool === void 0 ? (_reportPossibleCrUseOfCountdownTool({
              error: Error()
            }), CountdownTool) : CountdownTool)(schedule => {
              if (this.comp && this.comp.isValid) {
                var seatIndex = this.comp.props.currActiveSeatIndex;
                var coutndown = {
                  countdown: schedule,
                  seatIndex: seatIndex,
                  time: Date.now()
                };
                this.dispatch((_crd && beginGameCountdown === void 0 ? (_reportPossibleCrUseOfbeginGameCountdown({
                  error: Error()
                }), beginGameCountdown) : beginGameCountdown)(coutndown));
              }
            });
          }

          this.beginGameCountdownTool.start(count);
        }

        initSendCardViewModel() {
          this.sendCardViewModel = new (_crd && SendCardViewModel === void 0 ? (_reportPossibleCrUseOfSendCardViewModel({
            error: Error()
          }), SendCardViewModel) : SendCardViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).prefads_quiqui_sendcard).source).appendTo(this.comp.node).connect();
          this.sendCardViewModel.setEvent({
            getNextSeatIndex: lastIndex => {
              if (lastIndex === -1) return this.comp.props.currActiveSeatIndex;
              return this.getNextSeatIndex(lastIndex, 0);
            },
            getSeatCardPoint: (seatIndex, index) => {
              if (seatIndex === 0) {
                return this.mineViewModel.comp.getHandCardPosition(index);
              }

              var viewModel = this.opponentViewModels[seatIndex];
              if (!viewModel) return null;
              return viewModel.comp.getHandCardPosition(index);
            },
            dealOver: () => {
              this.dispatch((_crd && changeDeskStatus === void 0 ? (_reportPossibleCrUseOfchangeDeskStatus({
                error: Error()
              }), changeDeskStatus) : changeDeskStatus)((_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
                error: Error()
              }), DeskStatus) : DeskStatus).PLAYING));
              this.startCountdown(-1, true);
            }
          });
        }

        initOperationViewModel() {
          this.operationViewModel = new (_crd && OperationViewModel === void 0 ? (_reportPossibleCrUseOfOperationViewModel({
            error: Error()
          }), OperationViewModel) : OperationViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).prefabs_quiqui_operate).source).appendTo(this.comp.node).connect();
        }

        connect() {
          this.inject({}, state => {
            return {
              deskStatus: state.deskData.deskStatus,
              playerMap: state.deskData.playerMap,
              lastActiveSeatIndex: state.deskData.lastActiveSeatIndex,
              currActiveSeatIndex: state.deskData.currActiveSeatIndex,
              gold: state.deskData.gold,
              totalBetAmount: state.deskData.totalBetAmount,
              newBetInfo: state.deskData.newBetInfo,
              beginGameCountdown: state.deskData.beginGameCountdown,
              balanceInfos: state.deskData.balanceInfos
            };
          });
          return this;
        }

      }) || _class);

      _export("default", MainBoardViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ae45084ca3af33397fc2c02f334aa115841c2dc3.js.map