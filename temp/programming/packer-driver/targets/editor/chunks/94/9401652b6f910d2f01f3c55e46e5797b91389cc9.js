System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, StoreInject, global, config, convertBetData, convertToServerBetType, gameCacheData, SKT_MAG_TYPE, sktInstance, getStore, clearBet, seatBet, changeSeatBet, _dec, _class, _crd, BetAreaViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Yxx_BetArea", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Yxx_BetArea", _context.meta, extras);
  }

  function _reportPossibleCrUseOfYxx_BetArea(extras) {
    _reporterNs.report("Yxx_BetArea", "../components/Yxx_BetArea", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMebmerBet(extras) {
    _reporterNs.report("MebmerBet", "../serverType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSendBet(extras) {
    _reporterNs.report("SendBet", "../serverType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconvertBetData(extras) {
    _reporterNs.report("convertBetData", "../serverType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconvertToServerBetType(extras) {
    _reporterNs.report("convertToServerBetType", "../serverType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameCacheData(extras) {
    _reporterNs.report("gameCacheData", "../serverType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKT_MAG_TYPE(extras) {
    _reporterNs.report("SKT_MAG_TYPE", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktInstance(extras) {
    _reporterNs.report("sktInstance", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclearBet(extras) {
    _reporterNs.report("clearBet", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfseatBet(extras) {
    _reporterNs.report("seatBet", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeSeatBet(extras) {
    _reporterNs.report("changeSeatBet", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetData(extras) {
    _reporterNs.report("BetData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeadType(extras) {
    _reporterNs.report("HeadType", "../type", _context.meta, extras);
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
      global = _unresolved_3.global;
    }, function (_unresolved_4) {
      config = _unresolved_4.default;
    }, function (_unresolved_5) {
      convertBetData = _unresolved_5.convertBetData;
      convertToServerBetType = _unresolved_5.convertToServerBetType;
      gameCacheData = _unresolved_5.gameCacheData;
    }, function (_unresolved_6) {
      SKT_MAG_TYPE = _unresolved_6.SKT_MAG_TYPE;
      sktInstance = _unresolved_6.sktInstance;
    }, function (_unresolved_7) {
      getStore = _unresolved_7.getStore;
    }, function (_unresolved_8) {
      clearBet = _unresolved_8.clearBet;
      seatBet = _unresolved_8.seatBet;
    }, function (_unresolved_9) {
      changeSeatBet = _unresolved_9.changeSeatBet;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e07a4Rx5TdOCbAopCxME19N", "BetAreaViewModel", undefined);

      __checkObsolete__(['log']);

      BetAreaViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class BetAreaViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Yxx_BetArea');
        }

        begin() {
          this.setEvent({
            /** 自己下注，FooterViewModel 也有相同代码 */
            myBet: betData => {
              if ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).isTest) {
                this.dispatch((_crd && seatBet === void 0 ? (_reportPossibleCrUseOfseatBet({
                  error: Error()
                }), seatBet) : seatBet)(betData));
                this.dispatch((_crd && changeSeatBet === void 0 ? (_reportPossibleCrUseOfchangeSeatBet({
                  error: Error()
                }), changeSeatBet) : changeSeatBet)(betData));
              } else {
                if ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).preBet) {
                  this.dispatch((_crd && seatBet === void 0 ? (_reportPossibleCrUseOfseatBet({
                    error: Error()
                  }), seatBet) : seatBet)(betData));
                  this.dispatch((_crd && changeSeatBet === void 0 ? (_reportPossibleCrUseOfchangeSeatBet({
                    error: Error()
                  }), changeSeatBet) : changeSeatBet)(betData));
                }

                const sendBet = {
                  roomId: (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                    error: Error()
                  }), gameCacheData) : gameCacheData).roomId,
                  memberId: this.comp.props.myHead.userId,
                  memberName: this.comp.props.myHead.name,
                  gold: betData.betAmount,
                  betType: (_crd && convertToServerBetType === void 0 ? (_reportPossibleCrUseOfconvertToServerBetType({
                    error: Error()
                  }), convertToServerBetType) : convertToServerBetType)(betData.betType),
                  betId: betData.betId
                }; // 下注信息发送给服务器

                (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
                  error: Error()
                }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                  error: Error()
                }), SKT_MAG_TYPE) : SKT_MAG_TYPE).LAUNCHER_BET, sendBet);
              }
            },
            clearBet: () => {
              this.dispatch((_crd && clearBet === void 0 ? (_reportPossibleCrUseOfclearBet({
                error: Error()
              }), clearBet) : clearBet)(false));
            },
            openShop: () => {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).openShop();
            },
            sendGameShowEvent: () => {
              (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
                error: Error()
              }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                error: Error()
              }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GAME_SHOW, {
                roomId: (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                  error: Error()
                }), gameCacheData) : gameCacheData).roomId
              });
            }
          });
        }

        connect() {
          this.inject({}, state => {
            return {
              newBetData: state.bet.newBetData,
              selectChip: state.bet.selectChip,
              myHead: state.game.myHead,
              gameStatus: state.gameFlow.gameStatus,
              newResult: state.gameFlow.newResult,
              animationStatus: state.gameFlow.animationStatus,
              powers: state.game.powers,
              cancelBetData: state.bet.cancelBetData
            };
          });
          return this;
        }
        /**
         * 初始化下注
         * @param memberBetDetail 
         * @param seats 
         */


        initBetData(memberBetDetail, seats) {
          if (!memberBetDetail) return;
          memberBetDetail.forEach(v => {
            const seat = seats.find(seat => seat.userId === v.memberId);
            const index = seat ? seat.index : (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.lookOnIndex;
            const betData = (_crd && convertBetData === void 0 ? (_reportPossibleCrUseOfconvertBetData({
              error: Error()
            }), convertBetData) : convertBetData)(v, index);
            betData.isMyBet = (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).memberId === betData.userId;
            betData.isFly = false;
            this.dispatch((_crd && seatBet === void 0 ? (_reportPossibleCrUseOfseatBet({
              error: Error()
            }), seatBet) : seatBet)(betData));
            this.dispatch((_crd && changeSeatBet === void 0 ? (_reportPossibleCrUseOfchangeSeatBet({
              error: Error()
            }), changeSeatBet) : changeSeatBet)(betData));
          });
        }

      }) || _class);

      _export("default", BetAreaViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9401652b6f910d2f01f3c55e46e5797b91389cc9.js.map