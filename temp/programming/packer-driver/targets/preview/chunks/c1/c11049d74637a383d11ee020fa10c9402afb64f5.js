System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, ViewModel, StoreInject, global, getUUID, config, convertToServerBetType, gameCacheData, SKT_MAG_TYPE, sktInstance, getStore, seatBet, _selectChip, changeSeatBet, setTipType, _dec, _class, _crd, FooterViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetUUID(extras) {
    _reporterNs.report("getUUID", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Yxx_Footer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Yxx_Footer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfYxx_Footer(extras) {
    _reporterNs.report("Yxx_Footer", "../components/Yxx_Footer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSendBet(extras) {
    _reporterNs.report("SendBet", "../serverType", _context.meta, extras);
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

  function _reportPossibleCrUseOfseatBet(extras) {
    _reporterNs.report("seatBet", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfselectChip(extras) {
    _reporterNs.report("selectChip", "../store/actions/bet", _context.meta, extras);
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

  function _reportPossibleCrUseOfsetTipType(extras) {
    _reporterNs.report("setTipType", "../store/actions/gameFlow", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
      StoreInject = _unresolved_2.StoreInject;
    }, function (_unresolved_3) {
      global = _unresolved_3.global;
    }, function (_unresolved_4) {
      getUUID = _unresolved_4.getUUID;
    }, function (_unresolved_5) {
      config = _unresolved_5.default;
    }, function (_unresolved_6) {
      convertToServerBetType = _unresolved_6.convertToServerBetType;
      gameCacheData = _unresolved_6.gameCacheData;
    }, function (_unresolved_7) {
      SKT_MAG_TYPE = _unresolved_7.SKT_MAG_TYPE;
      sktInstance = _unresolved_7.sktInstance;
    }, function (_unresolved_8) {
      getStore = _unresolved_8.getStore;
    }, function (_unresolved_9) {
      seatBet = _unresolved_9.seatBet;
      _selectChip = _unresolved_9.selectChip;
    }, function (_unresolved_10) {
      changeSeatBet = _unresolved_10.changeSeatBet;
    }, function (_unresolved_11) {
      setTipType = _unresolved_11.setTipType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "89f40ndvgBFhJBkolImlHbH", "FooterViewModel", undefined);

      __checkObsolete__(['instantiate', 'tween']);

      FooterViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class FooterViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Yxx_Footer');
        }

        begin() {
          this.setEvent({
            selectChip: value => {
              this.dispatch((_crd && _selectChip === void 0 ? (_reportPossibleCrUseOfselectChip({
                error: Error()
              }), _selectChip) : _selectChip)(value));
            },

            /**重复下注，主要 BetAreaViewModel 也有相同的代码 */
            repeatLastBet: lastBet => {
              if (lastBet && lastBet.length === 0) {
                // let remind_repeat= this.comp.getRemindRepeatNode()
                // if (!remind_repeat) { return };
                // remind_repeat.active = true;
                // tween(remind_repeat)
                // .delay(2)
                // .call(() => { 
                //   remind_repeat.active  = false;
                // })
                // .start()
                this.dispatch((_crd && setTipType === void 0 ? (_reportPossibleCrUseOfsetTipType({
                  error: Error()
                }), setTipType) : setTipType)({
                  time: Date.now() + Math.random(),
                  type: 1
                }));
                return;
              }

              if ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).isTest) {
                lastBet.forEach(v => {
                  this.dispatch((_crd && seatBet === void 0 ? (_reportPossibleCrUseOfseatBet({
                    error: Error()
                  }), seatBet) : seatBet)(v));
                  this.dispatch((_crd && changeSeatBet === void 0 ? (_reportPossibleCrUseOfchangeSeatBet({
                    error: Error()
                  }), changeSeatBet) : changeSeatBet)(v));
                });
              } else {
                var gold = this.comp.props.myHead.gold;
                lastBet.forEach(betData => {
                  var chips = [];
                  this.splitChip(betData.betAmount, chips);
                  chips.forEach(chip => {
                    if (this.comp.getLockBet(gold)) {
                      return;
                    }

                    var chipBet = instantiate(betData);
                    chipBet.meTotalBetAmount = 0;
                    chipBet.totalBetAmount = 0;
                    chipBet.isMyBet = true;
                    chipBet.betAmount = chip;
                    chipBet.betId = (_crd && getUUID === void 0 ? (_reportPossibleCrUseOfgetUUID({
                      error: Error()
                    }), getUUID) : getUUID)();
                    chipBet.time = Date.now() + Math.random();
                    gold -= chip;

                    if ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                      error: Error()
                    }), config) : config).preBet) {
                      this.dispatch((_crd && seatBet === void 0 ? (_reportPossibleCrUseOfseatBet({
                        error: Error()
                      }), seatBet) : seatBet)(chipBet));
                      this.dispatch((_crd && changeSeatBet === void 0 ? (_reportPossibleCrUseOfchangeSeatBet({
                        error: Error()
                      }), changeSeatBet) : changeSeatBet)(chipBet));
                    }

                    var sendBet = {
                      roomId: (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                        error: Error()
                      }), gameCacheData) : gameCacheData).roomId,
                      memberId: this.comp.props.myHead.userId,
                      memberName: this.comp.props.myHead.name,
                      gold: chip,
                      betType: (_crd && convertToServerBetType === void 0 ? (_reportPossibleCrUseOfconvertToServerBetType({
                        error: Error()
                      }), convertToServerBetType) : convertToServerBetType)(betData.betType),
                      betId: chipBet.betId
                    }; // 下注信息发送给服务器

                    (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
                      error: Error()
                    }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                      error: Error()
                    }), SKT_MAG_TYPE) : SKT_MAG_TYPE).LAUNCHER_BET, sendBet);
                  });
                });
              }
            },
            openShop: () => {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).openShop();
            }
          });
        }
        /**
         * 根据下注拆分筹码
         * @param totalBetAmount 
         */


        splitChip(totalBetAmount, chips) {
          if (totalBetAmount < (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).chipTypes[0].value) {
            return;
          }

          for (var i = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).chipTypes.length - 1; i >= 0; i--) {
            var element = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).chipTypes[i];

            if (totalBetAmount >= element.value) {
              chips.push(element.value);
              totalBetAmount -= element.value;
              break;
            }
          }

          this.splitChip(totalBetAmount, chips);
        }

        connect() {
          this.inject({}, state => {
            return {
              myHead: state.game.myHead,
              lastBet: state.bet.lastBet,
              newBetData: state.bet.newBetData,
              selectChip: state.bet.selectChip,
              onlineNumber: state.game.onlineNumber,
              animationStatus: state.gameFlow.animationStatus,
              gameStatus: state.gameFlow.gameStatus,
              powers: state.game.powers
            };
          });
          return this;
        }

      }) || _class);

      _export("default", FooterViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c11049d74637a383d11ee020fa10c9402afb64f5.js.map