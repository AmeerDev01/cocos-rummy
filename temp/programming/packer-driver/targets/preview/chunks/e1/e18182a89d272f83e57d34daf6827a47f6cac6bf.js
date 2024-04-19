System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, StoreInject, getStore, SKT_MAG_TYPE, sktInstance, gameCacheData, _dec, _class, _crd, HeadViewModel;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreInject(extras) {
    _reporterNs.report("StoreInject", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Yxx_Head", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Yxx_Head", _context.meta, extras);
  }

  function _reportPossibleCrUseOfYxx_Head(extras) {
    _reporterNs.report("Yxx_Head", "../components/Yxx_Head", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKT_MAG_TYPE(extras) {
    _reporterNs.report("SKT_MAG_TYPE", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktInstance(extras) {
    _reporterNs.report("sktInstance", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqGiftSo(extras) {
    _reporterNs.report("ReqGiftSo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameCacheData(extras) {
    _reporterNs.report("gameCacheData", "../serverType", _context.meta, extras);
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
      SKT_MAG_TYPE = _unresolved_4.SKT_MAG_TYPE;
      sktInstance = _unresolved_4.sktInstance;
    }, function (_unresolved_5) {
      gameCacheData = _unresolved_5.gameCacheData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ac5db8edixK64q7SyOPVS8n", "HeadViewModel", undefined);

      __checkObsolete__(['log']);

      HeadViewModel = (_dec = (_crd && StoreInject === void 0 ? (_reportPossibleCrUseOfStoreInject({
        error: Error()
      }), StoreInject) : StoreInject)((_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
        error: Error()
      }), getStore) : getStore)()), _dec(_class = class HeadViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Yxx_Head');
        }

        begin() {
          this.setEvent({
            giveGift: (value, memberId, num) => {
              var data = {
                roomId: (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                  error: Error()
                }), gameCacheData) : gameCacheData).roomId,

                /**道具Id */
                interactionId: value,

                /**获赠玩家 */
                toSitId: memberId,

                /** 总共需要花费的金币 */
                num: num
              };
              (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
                error: Error()
              }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                error: Error()
              }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GIVE_GIFT, data);
            }
          });
        }

        connect() {
          this.inject({}, state => {
            return {
              headType: state.game.seats[this.comp.props.headType.index],
              betData: state.bet.newBetData,
              animationStatus: state.gameFlow.animationStatus
            };
          });
          return this;
        }

      }) || _class);

      _export("default", HeadViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e18182a89d272f83e57d34daf6827a47f6cac6bf.js.map