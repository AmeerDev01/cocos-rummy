System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ViewModel, StoreInject, getStore, _dec, _class, _crd, ccclass, property, BetAreaViewModel;

  function _reportPossibleCrUseOfBandar_betArea(extras) {
    _reporterNs.report("Bandar_betArea", "../components/Bandar_betArea", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Bandar_betArea", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Bandar_betArea", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
      StoreInject = _unresolved_2.StoreInject;
    }, function (_unresolved_3) {
      getStore = _unresolved_3.getStore;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "45620hrMyJJe7Z1zjkYb8Dj", "BandarBetAreaViewModel", undefined);

      __checkObsolete__(['_decorator', 'assetManager', 'AssetManager', 'Component', 'instantiate', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      BetAreaViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class BetAreaViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Bandar_betArea');
        }

        begin() {}

        connect() {
          const storeState = this.store.getState();
          this.inject({
            winArea: storeState.pokerDetail.winArea
          }, state => {
            return {
              gameStatus: state.game.gameStatus,
              gold: state.game.gold,

              /**选择的筹码 */
              selectChip: state.bet.selectChip,
              myInfo: state.game.myInfo,
              newBetData: state.bet.newBetData,
              winArea: state.pokerDetail.winArea,
              goldData: state.bet.goldData,
              cardRate: state.bet.cardRate,
              allWinUsers: state.bet.allWinUsers,
              lastBet: state.bet.lastBet,
              tips: state.game.tips,
              memberBet: state.bet.memberBet,
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
        // public initBetData(memberBetDetail: MemberData[], seats: MemberInfoVo[]): void {
        //   if (!memberBetDetail) return;
        //   memberBetDetail.forEach(v => {
        //     const seat = seats.find(seat => seat.memberId === v.memberId);
        //     const index = seat ? seat.index : config.gameOption.lookOnIndex;
        //     const betData = convertBetData(v, index);
        //     betData.isMyBet = gameCacheData.memberId === betData.userId;
        //     betData.isFly = false;
        //     this.dispatch(seatBet(betData));
        //     this.dispatch(changeSeatBet(betData));
        //   });
        // }


      }) || _class);

      _export("default", BetAreaViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a2379b2fa60a7a4ecac889583e5e003be89a397a.js.map