System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ViewModel, StoreInject, config, roomChooseViewModel, getStore, showOutCard, PlayerSatus, genCardItem, _dec, _class, _crd, MineViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDomino_Mine(extras) {
    _reporterNs.report("Domino_Mine", "../components/Domino_Mine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Domino_Mine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Domino_Mine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfroomChooseViewModel(extras) {
    _reporterNs.report("roomChooseViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshowOutCard(extras) {
    _reporterNs.report("showOutCard", "../store/action/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerSatus(extras) {
    _reporterNs.report("PlayerSatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgenCardItem(extras) {
    _reporterNs.report("genCardItem", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardViewModel(extras) {
    _reporterNs.report("CardViewModel", "./CardViewModel", _context.meta, extras);
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
      config = _unresolved_3.default;
    }, function (_unresolved_4) {
      roomChooseViewModel = _unresolved_4.roomChooseViewModel;
    }, function (_unresolved_5) {
      getStore = _unresolved_5.getStore;
    }, function (_unresolved_6) {
      showOutCard = _unresolved_6.showOutCard;
    }, function (_unresolved_7) {
      PlayerSatus = _unresolved_7.PlayerSatus;
      genCardItem = _unresolved_7.genCardItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "76231WiffNIkpIoz4t3m/6W", "MineViewModel", undefined);

      ;
      MineViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class MineViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Domino_Mine');
          this.handCardViewModelList = void 0;
        }

        begin() {
          this.setEvent({
            onOutCard: (value, azimuth) => {
              const cardItem = (_crd && genCardItem === void 0 ? (_reportPossibleCrUseOfgenCardItem({
                error: Error()
              }), genCardItem) : genCardItem)(value);
              cardItem.azimuth = azimuth;
              cardItem.seatIndex = 0;

              if ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).isTest) {
                this.dispatch((_crd && showOutCard === void 0 ? (_reportPossibleCrUseOfshowOutCard({
                  error: Error()
                }), showOutCard) : showOutCard)(cardItem));
              } else {
                (_crd && roomChooseViewModel === void 0 ? (_reportPossibleCrUseOfroomChooseViewModel({
                  error: Error()
                }), roomChooseViewModel) : roomChooseViewModel).mainBoardViewModel.sendOutCard(cardItem);
              }
            }
          });
        }

        connect() {
          this.inject({}, state => {
            const selfPlayer = state.deskData.playerMap[0];
            return {
              deskStatus: state.deskData.statue,
              outCardItem: state.deskData.outCardItem,
              leftOutCardItem: state.deskData.leftOutCardItem,
              rightOutCardItem: state.deskData.rightOutCardItem,
              newCardItem: state.deskData.newCardItem,
              currActiveSeatIndex: state.deskData.currActiveSeatIndex,
              outCountdown: state.deskData.outCountdown,
              uid: selfPlayer ? selfPlayer.uid : '',

              /**头像序号 */
              head: selfPlayer ? selfPlayer.head : 0,
              nickName: selfPlayer ? selfPlayer.nickName : '',
              glodAmount: selfPlayer ? selfPlayer.glodAmount : 0,

              /**状态 */
              state: selfPlayer ? selfPlayer.gameData.state : (_crd && PlayerSatus === void 0 ? (_reportPossibleCrUseOfPlayerSatus({
                error: Error()
              }), PlayerSatus) : PlayerSatus).WAITING,

              /**是否是庄家 */
              isMaster: selfPlayer ? selfPlayer.gameData.isMaster : false,

              /**剩余牌数量 */
              remainCardCount: selfPlayer ? selfPlayer.gameData.remainCardCount : 0,

              /**手牌组，正常情况下，只有玩家自身才有 */
              cardIList: selfPlayer ? selfPlayer.gameData.cardIList : [],

              /**跟不上的牌点数 */
              noWayCardNumber: selfPlayer ? selfPlayer.gameData.noWayCardNumber : [],
              isActive: false,
              winloss: selfPlayer ? selfPlayer.winloss : 0
            };
          });
          return this;
        }

      }) || _class);

      _export("default", MineViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b673f3d37269c3b3339465583ef9d976d116e527.js.map