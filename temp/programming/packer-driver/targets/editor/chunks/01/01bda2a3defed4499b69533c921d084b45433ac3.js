System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, StoreInject, getStore, PlayerSatus, _dec, _class, _crd, OpponentViewModel;

  function _reportPossibleCrUseOfDomino_Opponent(extras) {
    _reporterNs.report("Domino_Opponent", "../components/Domino_Opponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Domino_Opponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Domino_Opponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerSatus(extras) {
    _reporterNs.report("PlayerSatus", "../type", _context.meta, extras);
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
      getStore = _unresolved_3.getStore;
    }, function (_unresolved_4) {
      PlayerSatus = _unresolved_4.PlayerSatus;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a1d4chVgxJEk7DsHGHHB3tn", "OpponentViewModel", undefined);

      __checkObsolete__(['Node']);

      OpponentViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class OpponentViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Domino_Opponent');
          this.seatIndex = -1;
        }

        begin() {}

        initSeatIndex(index) {
          this.seatIndex = index;
          return this;
        }

        connect() {
          this.inject({}, state => {
            const player = state.deskData.playerMap[this.seatIndex];
            return {
              deskStatus: state.deskData.statue,
              currActiveSeatIndex: state.deskData.currActiveSeatIndex,
              outCountdown: state.deskData.outCountdown,
              newCardItem: state.deskData.newCardItem,
              uid: player ? player.uid : '',

              /**头像序号 */
              head: player ? player.head : 0,
              nickName: player ? player.nickName : '',
              glodAmount: player ? player.glodAmount : 0,

              /**状态 */
              state: player ? player.gameData.state : (_crd && PlayerSatus === void 0 ? (_reportPossibleCrUseOfPlayerSatus({
                error: Error()
              }), PlayerSatus) : PlayerSatus).WAITING,

              /**是否是庄家 */
              isMaster: player ? player.gameData.isMaster : false,

              /**剩余牌数量 */
              remainCardCount: player ? player.gameData.remainCardCount : 0,

              /**倒计时 */
              // countDownTime: player ? player.gameData.countDownTime : 0,

              /**手牌组，正常情况下，只有玩家自身才有 */
              cardIList: player ? player.gameData.cardIList : [],

              /**跟不上的牌点数 */
              noWayCardNumber: player ? player.gameData.noWayCardNumber : [],
              isActive: false,
              seatIndex: this.seatIndex,
              winloss: player ? player.winloss : 0
            };
          });
          return this;
        }

      }) || _class);

      _export("default", OpponentViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=01bda2a3defed4499b69533c921d084b45433ac3.js.map