System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, StoreInject, BaseViewModel, global, lang, addToastAction, EffectType, config, playDead, playSend, playWin, sourceManageSeletor, SKT_MAG_TYPE, sktInstance, sktMsgListener, PrefabPathDefine, getStore, changeDeskStatus, changeOutCardPlayer, changePlayerStatus, clearRoomData, deal, initSelfSeat, joinSeat, outCountdown, quitSeat, sendBalance, setWinlossType, showOutCard, updatePlayerLewat, DeskStatus, PlayerSatus, SeatPosition, convertAzimuth, genCardItem, BalancePanelViewModel, EndingViewModel, MineViewModel, OpponentViewModel, RecordViewModel, _dec, _class, _crd, MainBoardViewModel;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
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

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDomino_MainBoard(extras) {
    _reporterNs.report("Domino_MainBoard", "../components/Domino_MainBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Domino_MainBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Domino_MainBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDomino_SetPanel(extras) {
    _reporterNs.report("Domino_SetPanel", "../components/Domino_SetPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPIEvent(extras) {
    _reporterNs.report("SPIEvent", "../components/Domino_SetPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPIProps(extras) {
    _reporterNs.report("SPIProps", "../components/Domino_SetPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPIState(extras) {
    _reporterNs.report("SPIState", "../components/Domino_SetPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayDead(extras) {
    _reporterNs.report("playDead", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplaySend(extras) {
    _reporterNs.report("playSend", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayWin(extras) {
    _reporterNs.report("playWin", "../index", _context.meta, extras);
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

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeDeskStatus(extras) {
    _reporterNs.report("changeDeskStatus", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeOutCardPlayer(extras) {
    _reporterNs.report("changeOutCardPlayer", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangePlayerStatus(extras) {
    _reporterNs.report("changePlayerStatus", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclearRoomData(extras) {
    _reporterNs.report("clearRoomData", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdeal(extras) {
    _reporterNs.report("deal", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitSelfSeat(extras) {
    _reporterNs.report("initSelfSeat", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfjoinSeat(extras) {
    _reporterNs.report("joinSeat", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfoutCountdown(extras) {
    _reporterNs.report("outCountdown", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfquitSeat(extras) {
    _reporterNs.report("quitSeat", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsendBalance(extras) {
    _reporterNs.report("sendBalance", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetWinlossType(extras) {
    _reporterNs.report("setWinlossType", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshowOutCard(extras) {
    _reporterNs.report("showOutCard", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdatePlayerLewat(extras) {
    _reporterNs.report("updatePlayerLewat", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBalancePlayer(extras) {
    _reporterNs.report("BalancePlayer", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardItem(extras) {
    _reporterNs.report("CardItem", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCountdown(extras) {
    _reporterNs.report("Countdown", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeskStatus(extras) {
    _reporterNs.report("DeskStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDominoDeductMoneyVo(extras) {
    _reporterNs.report("DominoDeductMoneyVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStateVo(extras) {
    _reporterNs.report("GameStateVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOutCardDataSo(extras) {
    _reporterNs.report("OutCardDataSo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOutCardDataVo(extras) {
    _reporterNs.report("OutCardDataVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerSatus(extras) {
    _reporterNs.report("PlayerSatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPushDealerVo(extras) {
    _reporterNs.report("PushDealerVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomInfo(extras) {
    _reporterNs.report("RoomInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSeatPosition(extras) {
    _reporterNs.report("SeatPosition", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconvertAzimuth(extras) {
    _reporterNs.report("convertAzimuth", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgenCardItem(extras) {
    _reporterNs.report("genCardItem", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBalancePanelViewModel(extras) {
    _reporterNs.report("BalancePanelViewModel", "./BalancePanelViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEndingViewModel(extras) {
    _reporterNs.report("EndingViewModel", "./EndingViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMineViewModel(extras) {
    _reporterNs.report("MineViewModel", "./MineViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpponentViewModel(extras) {
    _reporterNs.report("OpponentViewModel", "./OpponentViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRecordViewModel(extras) {
    _reporterNs.report("RecordViewModel", "./RecordViewModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
      StoreInject = _unresolved_2.StoreInject;
    }, function (_unresolved_3) {
      BaseViewModel = _unresolved_3.default;
    }, function (_unresolved_4) {
      global = _unresolved_4.global;
      lang = _unresolved_4.lang;
    }, function (_unresolved_5) {
      addToastAction = _unresolved_5.addToastAction;
    }, function (_unresolved_6) {
      EffectType = _unresolved_6.EffectType;
    }, function (_unresolved_7) {
      config = _unresolved_7.default;
    }, function (_unresolved_8) {
      playDead = _unresolved_8.playDead;
      playSend = _unresolved_8.playSend;
      playWin = _unresolved_8.playWin;
      sourceManageSeletor = _unresolved_8.sourceManageSeletor;
    }, function (_unresolved_9) {
      SKT_MAG_TYPE = _unresolved_9.SKT_MAG_TYPE;
      sktInstance = _unresolved_9.sktInstance;
      sktMsgListener = _unresolved_9.sktMsgListener;
    }, function (_unresolved_10) {
      PrefabPathDefine = _unresolved_10.PrefabPathDefine;
    }, function (_unresolved_11) {
      getStore = _unresolved_11.getStore;
    }, function (_unresolved_12) {
      changeDeskStatus = _unresolved_12.changeDeskStatus;
      changeOutCardPlayer = _unresolved_12.changeOutCardPlayer;
      changePlayerStatus = _unresolved_12.changePlayerStatus;
      clearRoomData = _unresolved_12.clearRoomData;
      deal = _unresolved_12.deal;
      initSelfSeat = _unresolved_12.initSelfSeat;
      joinSeat = _unresolved_12.joinSeat;
      outCountdown = _unresolved_12.outCountdown;
      quitSeat = _unresolved_12.quitSeat;
      sendBalance = _unresolved_12.sendBalance;
      setWinlossType = _unresolved_12.setWinlossType;
      showOutCard = _unresolved_12.showOutCard;
      updatePlayerLewat = _unresolved_12.updatePlayerLewat;
    }, function (_unresolved_13) {
      DeskStatus = _unresolved_13.DeskStatus;
      PlayerSatus = _unresolved_13.PlayerSatus;
      SeatPosition = _unresolved_13.SeatPosition;
      convertAzimuth = _unresolved_13.convertAzimuth;
      genCardItem = _unresolved_13.genCardItem;
    }, function (_unresolved_14) {
      BalancePanelViewModel = _unresolved_14.default;
    }, function (_unresolved_15) {
      EndingViewModel = _unresolved_15.default;
    }, function (_unresolved_16) {
      MineViewModel = _unresolved_16.default;
    }, function (_unresolved_17) {
      OpponentViewModel = _unresolved_17.default;
    }, function (_unresolved_18) {
      RecordViewModel = _unresolved_18.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "174aeiyChtNC5WRqaXyMZg8", "MainBoardViewModel", undefined);

      __checkObsolete__(['Node', 'Vec3']);

      MainBoardViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class MainBoardViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Domino_MainBoard');
          this.onComplate = void 0;
          this.seatMine = void 0;
          this.seatRight = void 0;
          this.seatTop = void 0;
          this.seatLeft = void 0;
          this.distributeCards = void 0;
          this.playerMap = [];
          this.myChairId = void 0;
          this.roomId = void 0;
          this.memberId = void 0;
          this.tableId = void 0;
          this.lower = void 0;
          this.upper = void 0;
          this.roomInfo = void 0;

          /**出牌倒计时 */
          this.outCountdown = 0;
          this.balancePanelViewModel = void 0;
          this.endingViewModel = void 0;
          // 是否可以出牌
          this.isCanOutCard = false;
          this.TaskScheduler = void 0;
          this.t = 0;
        }

        begin() {
          this.listenerSocket();
          this.seatMine = new (_crd && MineViewModel === void 0 ? (_reportPossibleCrUseOfMineViewModel({
            error: Error()
          }), MineViewModel) : MineViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).MINE_SEAT).source).appendTo(this.comp.getPlayerWrapNode()).connect();
          this.seatLeft = new (_crd && OpponentViewModel === void 0 ? (_reportPossibleCrUseOfOpponentViewModel({
            error: Error()
          }), OpponentViewModel) : OpponentViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).LEFT_SEAT).source).appendTo(this.comp.getPlayerWrapNode()).initSeatIndex(1).connect();
          this.seatTop = new (_crd && OpponentViewModel === void 0 ? (_reportPossibleCrUseOfOpponentViewModel({
            error: Error()
          }), OpponentViewModel) : OpponentViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).TOP_SEAT).source).appendTo(this.comp.getPlayerWrapNode()).initSeatIndex(2).connect();
          this.seatRight = new (_crd && OpponentViewModel === void 0 ? (_reportPossibleCrUseOfOpponentViewModel({
            error: Error()
          }), OpponentViewModel) : OpponentViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).RIGHT_SEAT).source).appendTo(this.comp.getPlayerWrapNode()).initSeatIndex(3).connect();
          var setPanel = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
            error: Error()
          }), BaseViewModel) : BaseViewModel)('Domino_SetPanel').mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).SET_PANEL).source).appendTo(this.viewNode);
          new (_crd && RecordViewModel === void 0 ? (_reportPossibleCrUseOfRecordViewModel({
            error: Error()
          }), RecordViewModel) : RecordViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).RECORD).source).appendTo(this.viewNode).connect();
          this.setEvent({
            openSetPanel: toggle => {
              setPanel.comp.showToggle(toggle);
            },
            openShopPanel: () => {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).openShop();
            },
            flyCard: (cardPanelNode, cardNode, seatIndex) => {
              this.deal(seatIndex); // 自己飞牌的终点是牌插入的位置

              if (seatIndex === 0) {
                this.seatMine.comp.deal(endPosition => {
                  this.comp.flyCard(cardPanelNode, cardNode, endPosition, seatIndex);
                });
              } else {
                this.comp.flyCard(cardPanelNode, cardNode, this.getEndPosition(seatIndex), seatIndex);
              }
            },
            getSeatPosition: seatIndex => {
              return this.getSeatPosition(seatIndex);
            },
            onQuitRoom: () => {
              this.quitRoom();
            },
            dealerBeginOut: () => {
              this.dispatch((_crd && changeDeskStatus === void 0 ? (_reportPossibleCrUseOfchangeDeskStatus({
                error: Error()
              }), changeDeskStatus) : changeDeskStatus)((_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
                error: Error()
              }), DeskStatus) : DeskStatus).PLAYING, null)); // 下一个出牌的用户

              var nextPlayer = this.comp.props.playerMap.find(v => v && v.gameData.isMaster);
              this.dispatch((_crd && changeOutCardPlayer === void 0 ? (_reportPossibleCrUseOfchangeOutCardPlayer({
                error: Error()
              }), changeOutCardPlayer) : changeOutCardPlayer)(nextPlayer.seatIndex)); // 开始倒计时

              this.startCountdown(8);
            }
          });
          setPanel.setEvent({
            onQuitGame: () => {
              this.quitRoom();
            },
            onChangeRoom: () => {// this.changeRoom();
            }
          });
          this.seatMine.setEvent({
            onReady: () => {
              this.ready();
            }
          });
          this.onComplate && this.onComplate();
        }

        ready() {
          (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).READY, {
            roomId: this.roomId,
            tableId: this.tableId,
            memberId: this.memberId
          });
        }

        isGameIn() {
          if (this.getPlayer(this.memberId).gameData.state === (_crd && PlayerSatus === void 0 ? (_reportPossibleCrUseOfPlayerSatus({
            error: Error()
          }), PlayerSatus) : PlayerSatus).WAITING) {
            return false;
          }

          var notGameIn = this.comp.props.statue === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
            error: Error()
          }), DeskStatus) : DeskStatus).WAITING || this.comp.props.statue === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
            error: Error()
          }), DeskStatus) : DeskStatus).CLSOE;

          if (notGameIn) {
            return false;
          }

          if (this.comp.props.statue === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
            error: Error()
          }), DeskStatus) : DeskStatus).COUNTDOWNING && this.comp.getBeginGameCountdownCount() > 1) {
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
          this.comp.clearData();
          this.unMount();
          this.t && window.clearInterval(this.t);
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
            roomId: this.roomId
          });
          this.comp.clearData();
          this.t && window.clearInterval(this.t);
          this.dispatch((_crd && clearRoomData === void 0 ? (_reportPossibleCrUseOfclearRoomData({
            error: Error()
          }), clearRoomData) : clearRoomData)(0));
        }

        enterGame(player) {
          if (player.isSelf) {
            this.dispatch((_crd && initSelfSeat === void 0 ? (_reportPossibleCrUseOfinitSelfSeat({
              error: Error()
            }), initSelfSeat) : initSelfSeat)(player));

            if (player.gameData.state === (_crd && PlayerSatus === void 0 ? (_reportPossibleCrUseOfPlayerSatus({
              error: Error()
            }), PlayerSatus) : PlayerSatus).WAITING) {
              this.ready(); // // 进入房间之后自动准备
              // window.setTimeout(() => {
              // }, 50);
            }
          } else {
            this.dispatch((_crd && joinSeat === void 0 ? (_reportPossibleCrUseOfjoinSeat({
              error: Error()
            }), joinSeat) : joinSeat)(this.getPlayerSeatPositionByChairId(player.chairId), player));
          }
        }

        deal(seatIndex) {
          seatIndex === 1 && this.seatLeft.comp.deal();
          seatIndex === 2 && this.seatTop.comp.deal();
          seatIndex === 3 && this.seatRight.comp.deal();
        }

        getEndPosition(seatIndex) {
          if (seatIndex === 1) {
            return this.seatLeft.comp.node.getChildByName('props_Layout_cards_handCards').position;
          } else if (seatIndex === 2) {
            return this.seatTop.comp.node.getChildByName('props_Layout_cards_handCards').position;
          } else if (seatIndex === 3) {
            return this.seatRight.comp.node.getChildByName('props_Layout_cards_handCards').position;
          }
        }

        getSeatPosition(seatIndex) {
          if (seatIndex === 0) {
            return this.seatMine.comp.node.getChildByName('spr_bg').position;
          } else if (seatIndex === 1) {
            return this.seatLeft.comp.node.getChildByName('spr_bg').position;
          } else if (seatIndex === 2) {
            return this.seatTop.comp.node.getChildByName('spr_bg').position;
          } else if (seatIndex === 3) {
            return this.seatRight.comp.node.getChildByName('spr_bg').position;
          }
        }
        /**通过chairId，结合自身方向获取响应的坐位方向 */


        getPlayerSeatPositionByChairId(chairId) {
          var seatList = [];

          switch (this.myChairId) {
            case 1:
              seatList = [(_crd && SeatPosition === void 0 ? (_reportPossibleCrUseOfSeatPosition({
                error: Error()
              }), SeatPosition) : SeatPosition).DOWN, (_crd && SeatPosition === void 0 ? (_reportPossibleCrUseOfSeatPosition({
                error: Error()
              }), SeatPosition) : SeatPosition).LEFT, (_crd && SeatPosition === void 0 ? (_reportPossibleCrUseOfSeatPosition({
                error: Error()
              }), SeatPosition) : SeatPosition).TOP, (_crd && SeatPosition === void 0 ? (_reportPossibleCrUseOfSeatPosition({
                error: Error()
              }), SeatPosition) : SeatPosition).RIGHT];
              break;

            case 2:
              seatList = [(_crd && SeatPosition === void 0 ? (_reportPossibleCrUseOfSeatPosition({
                error: Error()
              }), SeatPosition) : SeatPosition).RIGHT, (_crd && SeatPosition === void 0 ? (_reportPossibleCrUseOfSeatPosition({
                error: Error()
              }), SeatPosition) : SeatPosition).DOWN, (_crd && SeatPosition === void 0 ? (_reportPossibleCrUseOfSeatPosition({
                error: Error()
              }), SeatPosition) : SeatPosition).LEFT, (_crd && SeatPosition === void 0 ? (_reportPossibleCrUseOfSeatPosition({
                error: Error()
              }), SeatPosition) : SeatPosition).TOP];
              break;

            case 3:
              seatList = [(_crd && SeatPosition === void 0 ? (_reportPossibleCrUseOfSeatPosition({
                error: Error()
              }), SeatPosition) : SeatPosition).TOP, (_crd && SeatPosition === void 0 ? (_reportPossibleCrUseOfSeatPosition({
                error: Error()
              }), SeatPosition) : SeatPosition).RIGHT, (_crd && SeatPosition === void 0 ? (_reportPossibleCrUseOfSeatPosition({
                error: Error()
              }), SeatPosition) : SeatPosition).DOWN, (_crd && SeatPosition === void 0 ? (_reportPossibleCrUseOfSeatPosition({
                error: Error()
              }), SeatPosition) : SeatPosition).LEFT];
              break;

            case 4:
              seatList = [(_crd && SeatPosition === void 0 ? (_reportPossibleCrUseOfSeatPosition({
                error: Error()
              }), SeatPosition) : SeatPosition).LEFT, (_crd && SeatPosition === void 0 ? (_reportPossibleCrUseOfSeatPosition({
                error: Error()
              }), SeatPosition) : SeatPosition).TOP, (_crd && SeatPosition === void 0 ? (_reportPossibleCrUseOfSeatPosition({
                error: Error()
              }), SeatPosition) : SeatPosition).RIGHT, (_crd && SeatPosition === void 0 ? (_reportPossibleCrUseOfSeatPosition({
                error: Error()
              }), SeatPosition) : SeatPosition).DOWN];
              break;
          }

          return seatList[--chairId];
        }
        /**
         * 获取下一个要等待动作的用户
         * @param lastUid 上一个在动的用户
         */


        getNextNativePlayer(lastUid) {
          var playerViewModelMap = [this.seatMine, this.seatLeft, this.seatTop, this.seatRight];
          var thisIndex = 0;

          if (lastUid) {
            var lastIndex = playerViewModelMap.findIndex(item => item.comp.props['uid'] === lastUid);

            if (lastIndex === 3) {
              thisIndex = 0;
            } else {
              thisIndex++;
            }

            return playerViewModelMap[thisIndex];
          } else {
            return playerViewModelMap.find(item => item.comp.props['isMaster']);
          }
        }

        unMountCallBack() {
          this.removeListener();
          this.t && window.clearInterval(this.t);
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
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).OUT_CARD);
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
        }

        listenerSocket() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).READY, 'room', data => {
            var gameData = this.getPlayerGameData(data.memberId);
            gameData.state = (_crd && PlayerSatus === void 0 ? (_reportPossibleCrUseOfPlayerSatus({
              error: Error()
            }), PlayerSatus) : PlayerSatus).READY;
            this.dispatch((_crd && changePlayerStatus === void 0 ? (_reportPossibleCrUseOfchangePlayerStatus({
              error: Error()
            }), changePlayerStatus) : changePlayerStatus)(data.memberId, gameData));
          }); // sktMsgListener.add(SKT_MAG_TYPE.BEGIN_GAME_COUNTDOWN, 'room', (data) => {
          //   this.dispatch(changeDeskStatus(DeskStatus.COUNTDOWNING));
          // });

          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).PUSH_DEALER, 'room', data => {
            var gameData = this.getPlayerGameData(data.villageId);
            gameData.isMaster = true;
            this.dispatch((_crd && changePlayerStatus === void 0 ? (_reportPossibleCrUseOfchangePlayerStatus({
              error: Error()
            }), changePlayerStatus) : changePlayerStatus)(data.villageId, gameData));
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GAME_STATE_CHANGE, 'room', data => {
            // 开始游戏倒计时
            if (data.gameState === 1) {
              this.comp.setBeginGameCountdownCount(data.seconds);
              this.dispatch((_crd && changeDeskStatus === void 0 ? (_reportPossibleCrUseOfchangeDeskStatus({
                error: Error()
              }), changeDeskStatus) : changeDeskStatus)((_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
                error: Error()
              }), DeskStatus) : DeskStatus).COUNTDOWNING, {
                time: data.seconds,
                seatIndex: -1,
                timestamp: Date.now()
              }));
            }
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).PUSH_DEAL, 'room', data => {
            this.balancePanelViewModel && this.balancePanelViewModel.unMount();
            this.balancePanelViewModel = null;
            this.endingViewModel && this.endingViewModel.unMount();
            this.endingViewModel = null;
            var cardItems = data.map(v => (_crd && genCardItem === void 0 ? (_reportPossibleCrUseOfgenCardItem({
              error: Error()
            }), genCardItem) : genCardItem)(v));
            this.dispatch((_crd && deal === void 0 ? (_reportPossibleCrUseOfdeal({
              error: Error()
            }), deal) : deal)(cardItems));
            this.dispatch((_crd && changeDeskStatus === void 0 ? (_reportPossibleCrUseOfchangeDeskStatus({
              error: Error()
            }), changeDeskStatus) : changeDeskStatus)((_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).DISTRIBUTE, null));
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).OUT_CARD, 'room', data => {
            // 停止倒计时
            this.startCountdown(0);
            this.dispatch((_crd && changeDeskStatus === void 0 ? (_reportPossibleCrUseOfchangeDeskStatus({
              error: Error()
            }), changeDeskStatus) : changeDeskStatus)((_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
              error: Error()
            }), DeskStatus) : DeskStatus).PLAYING, null)); // 出牌的用户

            var outPlayer = this.comp.props.playerMap.find(v => v && v.chairId === data.chairId);

            if (data.card >= 0) {
              // 出的牌
              var cardItem = (_crd && genCardItem === void 0 ? (_reportPossibleCrUseOfgenCardItem({
                error: Error()
              }), genCardItem) : genCardItem)(data.card);
              cardItem.seatIndex = outPlayer.seatIndex;
              cardItem.azimuth = (_crd && convertAzimuth === void 0 ? (_reportPossibleCrUseOfconvertAzimuth({
                error: Error()
              }), convertAzimuth) : convertAzimuth)(data.position);
              this.dispatch((_crd && showOutCard === void 0 ? (_reportPossibleCrUseOfshowOutCard({
                error: Error()
              }), showOutCard) : showOutCard)(cardItem));
              (_crd && playSend === void 0 ? (_reportPossibleCrUseOfplaySend({
                error: Error()
              }), playSend) : playSend)();
            } else {
              this.flyGold(data.dominoDeductMoneyVo);
              this.dispatch((_crd && updatePlayerLewat === void 0 ? (_reportPossibleCrUseOfupdatePlayerLewat({
                error: Error()
              }), updatePlayerLewat) : updatePlayerLewat)(data.dominoMemBerInfo.memberId, data.dominoMemBerInfo.lewatPokes));
            } // 下一个出牌的用户


            var nextPlayer = this.getPlayer(data.dominoNext.memberId); // 设置是否

            this.isCanOutCard = data.dominoNext.memberId === this.memberId;
            this.dispatch((_crd && changeOutCardPlayer === void 0 ? (_reportPossibleCrUseOfchangeOutCardPlayer({
              error: Error()
            }), changeOutCardPlayer) : changeOutCardPlayer)(nextPlayer.seatIndex)); // 开始倒计时

            this.startCountdown(data.dominoNext.leftTime);
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).BALANCE, 'room', data => {
            // 停止倒计时
            this.startCountdown(0);
            this.openBalancePanel(data);
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

        pushQuitRoom(memberId) {
          // if (this.memberId === memberId) {
          //   this.comp.clearData();
          //   this.unMount();
          //   this.dispatch(clearRoomData(0));
          // } else {
          this.dispatch((_crd && quitSeat === void 0 ? (_reportPossibleCrUseOfquitSeat({
            error: Error()
          }), quitSeat) : quitSeat)(memberId));

          if (this.comp.props.statue === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
            error: Error()
          }), DeskStatus) : DeskStatus).COUNTDOWNING) {
            // 小于2人了，暂停倒计时
            var roomLength = this.comp.props.playerMap.filter(v => v).length;

            if (roomLength < 2) {
              this.dispatch((_crd && changeDeskStatus === void 0 ? (_reportPossibleCrUseOfchangeDeskStatus({
                error: Error()
              }), changeDeskStatus) : changeDeskStatus)((_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
                error: Error()
              }), DeskStatus) : DeskStatus).WAITING, null));
            }
          } // }

        }

        getPlayer(memberId) {
          return this.comp.props.playerMap.find(v => v && v.uid === memberId);
        }

        flyGold(dominoDeductMoneyVo) {
          if (dominoDeductMoneyVo) {
            var startIndex = this.getPlayer(dominoDeductMoneyVo.lossMemberId).seatIndex;
            var endIndex = this.getPlayer(dominoDeductMoneyVo.winMemberId).seatIndex;
            this.comp.flyGold(startIndex, endIndex, () => {
              this.dispatch((_crd && setWinlossType === void 0 ? (_reportPossibleCrUseOfsetWinlossType({
                error: Error()
              }), setWinlossType) : setWinlossType)({
                winloss: dominoDeductMoneyVo.money,
                lossSeatIndex: startIndex,
                winSeatIndex: endIndex
              }));
            });
          }
        }

        changeNextPlayer(memberId) {
          this.dispatch((_crd && changeDeskStatus === void 0 ? (_reportPossibleCrUseOfchangeDeskStatus({
            error: Error()
          }), changeDeskStatus) : changeDeskStatus)((_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
            error: Error()
          }), DeskStatus) : DeskStatus).PLAYING, null)); // 下一个出牌的用户
          // const nextPlayer = this.comp.props.playerMap.find(v => v && v.uid === memberId);
          // this.dispatch(changeOutCardPlayer(nextPlayer.seatIndex));
          // // 开始倒计时
          // this.startCountdown(data.dominoNext.leftTime);
        }

        getPlayerGameData(memberId) {
          var player = this.comp.props.playerMap.find(v => v && v.uid === memberId);

          var gameData = _extends({}, player.gameData);

          return gameData;
        }

        convertPosition(azimuth) {
          return azimuth + 1;
        }
        /**出牌 */


        sendOutCard(cardItem) {
          if (!this.isCanOutCard) {
            console.log('你当前不能出牌');
          }

          ;

          if (cardItem.azimuth) {
            var outCardLength = this.comp.props.outCardItem.length;
            cardItem.azimuth = outCardLength === 0 ? 2 : cardItem.azimuth;
          }

          var player = this.comp.props.playerMap[cardItem.seatIndex];
          var poker = cardItem.value >= 0 ? cardItem.value : undefined;
          var outCard = {
            gameId: (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameId + '',
            tableId: player.tableId,
            chairId: player.chairId,
            position: this.convertPosition(cardItem.azimuth),
            poker: poker,
            memberId: player.uid
          };
          (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).OUT_CARD, outCard);
        }

        /**开始出牌倒计时 */
        startCountdown(count) {
          this.outCountdown = count;
          this.t && window.clearInterval(this.t);

          if (this.outCountdown > 0) {
            this.countdown(this.outCountdown);
            this.t = window.setInterval(() => {
              this.countdown(--this.outCountdown);

              if (this.outCountdown <= 0) {
                window.clearInterval(this.t);
              }
            }, 1000);
          } else {
            this.countdown(this.outCountdown);
          }
        }

        countdown(count) {
          if (this.comp && this.comp.isValid) {
            var seatIndex = this.comp.props.currActiveSeatIndex;
            var coutndown = {
              time: count,
              seatIndex: seatIndex
            };
            this.dispatch((_crd && outCountdown === void 0 ? (_reportPossibleCrUseOfoutCountdown({
              error: Error()
            }), outCountdown) : outCountdown)(coutndown));
          } else {
            this.t && window.clearInterval(this.t);
          }
        }

        openEndingOdds(odds, done) {
          window.setTimeout(() => {
            if (this.viewNode && this.viewNode.isValid) {
              this.endingViewModel && this.endingViewModel.unMount();
              this.endingViewModel = null;
              this.endingViewModel = new (_crd && EndingViewModel === void 0 ? (_reportPossibleCrUseOfEndingViewModel({
                error: Error()
              }), EndingViewModel) : EndingViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                error: Error()
              }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                error: Error()
              }), PrefabPathDefine) : PrefabPathDefine).GAME_ENDING_ODDS).source).appendTo(this.viewNode, {
                effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                  error: Error()
                }), EffectType) : EffectType).EFFECT1
              }).setProps({
                odds: odds
              }).connect();
              done();
            }
          }, 2000);
        }

        openBalancePanel(balances) {
          var myBalance = balances.find(v => v.memberId === this.memberId);
          var winloss = myBalance.count;
          this.dispatch((_crd && sendBalance === void 0 ? (_reportPossibleCrUseOfsendBalance({
            error: Error()
          }), sendBalance) : sendBalance)(balances));
          this.openEndingOdds(myBalance.odds, () => {
            var prefabPath = winloss > 0 ? (_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine).WIN_BALANCE_PANEL : (_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine).LOSE_BALANCE_PANEL;
            window.setTimeout(() => {
              winloss > 0 ? (_crd && playWin === void 0 ? (_reportPossibleCrUseOfplayWin({
                error: Error()
              }), playWin) : playWin)() : (_crd && playDead === void 0 ? (_reportPossibleCrUseOfplayDead({
                error: Error()
              }), playDead) : playDead)();
              this.dispatch((_crd && changeDeskStatus === void 0 ? (_reportPossibleCrUseOfchangeDeskStatus({
                error: Error()
              }), changeDeskStatus) : changeDeskStatus)((_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
                error: Error()
              }), DeskStatus) : DeskStatus).CLSOE, null));

              if (this.viewNode && this.viewNode.isValid) {
                this.endingViewModel && this.endingViewModel.unMount();
                this.endingViewModel = null;
                this.balancePanelViewModel && this.balancePanelViewModel.unMount();
                this.balancePanelViewModel = null;
                this.balancePanelViewModel = new (_crd && BalancePanelViewModel === void 0 ? (_reportPossibleCrUseOfBalancePanelViewModel({
                  error: Error()
                }), BalancePanelViewModel) : BalancePanelViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                  error: Error()
                }), sourceManageSeletor) : sourceManageSeletor)().getFile(prefabPath).source).appendTo(this.viewNode, {
                  effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                    error: Error()
                  }), EffectType) : EffectType).EFFECT1
                }).setProps({
                  balancePlayers: balances
                }).setEvent({
                  onReady: time => {
                    // 余额不足，如果是倒计时结束了，就退出游戏，如果是手动点击继续，就弹出商城
                    if (this.comp.props.gold < this.roomInfo.lower) {
                      if (time) {
                        this.quitRoom();
                      } else {
                        (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                          error: Error()
                        }), global) : global).openShop();
                      }

                      return;
                    }

                    this.dispatch((_crd && changeDeskStatus === void 0 ? (_reportPossibleCrUseOfchangeDeskStatus({
                      error: Error()
                    }), changeDeskStatus) : changeDeskStatus)((_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
                      error: Error()
                    }), DeskStatus) : DeskStatus).WAITING, null));
                    this.ready();
                  },
                  onQuitRoom: () => {
                    this.quitRoom();
                  }
                });
              }
            }, 2000);
          });
        }

        connect() {
          this.inject({}, state => {
            this.playerMap = state.deskData.playerMap;
            return {
              quitRoomAction: state.deskData.quitRoomAction,
              readyCountdown: state.deskData.readyCountdown,
              statue: state.deskData.statue,
              noShowCardNumber: state.deskData.noShowCardNumber,
              outCardItem: state.deskData.outCardItem,
              leftOutCardItem: state.deskData.leftOutCardItem,
              rightOutCardItem: state.deskData.rightOutCardItem,
              playerMap: state.deskData.playerMap,
              lastActiveSeatIndex: state.deskData.lastActiveSeatIndex,
              currActiveSeatIndex: state.deskData.currActiveSeatIndex,
              newCardItem: state.deskData.newCardItem,
              intendOutCard: state.deskData.intendOutCard,
              gold: state.deskData.gold,
              balanceOdds: state.deskData.balanceOdds
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
//# sourceMappingURL=6e7e5f34197dc3535c7d0679c7d9c66c3d809a8a.js.map