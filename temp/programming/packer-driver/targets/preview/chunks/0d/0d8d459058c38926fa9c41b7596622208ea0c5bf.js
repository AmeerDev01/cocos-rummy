System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, sp, BaseComponent, SkeletonAnimationPlayer, global, BANKER_ID, GameType, gameCacheData, SKT_MAG_TYPE, sktInstance, _dec, _class, _crd, ccclass, property, BandarQiuQiu_heGuan;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletonAnimationPlayer(extras) {
    _reporterNs.report("SkeletonAnimationPlayer", "../SkeletonPlay", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBANKER_ID(extras) {
    _reporterNs.report("BANKER_ID", "../../../common/viewModel/GiftUserViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../../../common/viewModel/GiftUserViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameCacheData(extras) {
    _reporterNs.report("gameCacheData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReqGiftSo(extras) {
    _reporterNs.report("ReqGiftSo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKT_MAG_TYPE(extras) {
    _reporterNs.report("SKT_MAG_TYPE", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktInstance(extras) {
    _reporterNs.report("sktInstance", "../socketConnect", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      SkeletonAnimationPlayer = _unresolved_3.default;
    }, function (_unresolved_4) {
      global = _unresolved_4.global;
    }, function (_unresolved_5) {
      BANKER_ID = _unresolved_5.BANKER_ID;
      GameType = _unresolved_5.GameType;
    }, function (_unresolved_6) {
      gameCacheData = _unresolved_6.gameCacheData;
    }, function (_unresolved_7) {
      SKT_MAG_TYPE = _unresolved_7.SKT_MAG_TYPE;
      sktInstance = _unresolved_7.sktInstance;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c52f8xbAERKjrKvtayaaEuI", "BandarQiuQiu_heGuan", undefined);

      __checkObsolete__(['_decorator', 'Node', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BandarQiuQiu_heGuan", BandarQiuQiu_heGuan = (_dec = ccclass('BandarQiuQiu_heGuan'), _dec(_class = class BandarQiuQiu_heGuan extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_croupier: new Node()
          };
          this.props = {};
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_croupier.on(Node.EventType.TOUCH_END, () => {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).showGiftWindow((_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).BANDAR_QIU_QIU, undefined, value => {
              var data = {
                roomId: (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                  error: Error()
                }), gameCacheData) : gameCacheData).roomId,

                /**道具Id */
                interactionId: value,

                /**获赠玩家 */
                toSitId: _crd && BANKER_ID === void 0 ? (_reportPossibleCrUseOfBANKER_ID({
                  error: Error()
                }), BANKER_ID) : BANKER_ID,

                /** 总共需要花费的金币 */
                num: 0
              };
              (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
                error: Error()
              }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                error: Error()
              }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GIVE_GIFT, data);
            });
          });
        }

        useProps(key, value) {}

        playFaPaiAni() {
          // console.log("111111111,fapai");
          new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
            error: Error()
          }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.propertyNode.props_croupier.getComponent(sp.Skeleton), "fapai", false).playAnimation();
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0d8d459058c38926fa9c41b7596622208ea0c5bf.js.map