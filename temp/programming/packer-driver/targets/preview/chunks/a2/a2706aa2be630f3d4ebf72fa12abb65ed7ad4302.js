System.register(["__unresolved_0", "cc", "__unresolved_1", "redux-act"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ActionTypes, initState, reduxAct, _crd;

  function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _reportPossibleCrUseOfActionTypes(extras) {
    _reporterNs.report("ActionTypes", "../actions/memberInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionPayLoad(extras) {
    _reporterNs.report("ActionPayLoad", "../actions/memberInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitStateType(extras) {
    _reporterNs.report("InitStateType", "../actions/memberInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitState(extras) {
    _reporterNs.report("initState", "../actions/memberInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfreduxAct(extras) {
    _reporterNs.report("reduxAct", "redux-act", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      ActionTypes = _unresolved_2.ActionTypes;
      initState = _unresolved_2.initState;
    }, function (_reduxAct) {
      reduxAct = _reduxAct.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "61424RBSPxICYaLsdjmD37Y", "memberInfo", undefined);

      __checkObsolete__(['instantiate']);

      _export("default", (_crd && reduxAct === void 0 ? (_reportPossibleCrUseOfreduxAct({
        error: Error()
      }), reduxAct) : reduxAct).createReducer({
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).SET_MEMBER_INFO]: (state, payload) => _extends({}, state, {
          memberName: payload.memberName,
          avatarIndex: payload.avatarIndex,
          memberAssetGoldPieces: payload.memberAssetGoldPieces,
          memberAssetSafeGoldPieces: payload.memberAssetSafeGoldPieces,
          memberId: payload.memberId,
          nickName: payload.nickName,
          vipLevel: payload.vipLevel,
          level: payload.level,
          phone: payload.phone,
          gender: payload.gender,
          vipLevelExperience: payload.vipLevelExperience,
          levelExperience: payload.levelExperience,
          tourist: payload.tourist,
          memberRechargeWater: payload.memberRechargeWater,
          minimumWithdrawal: payload.minimumWithdrawal,
          canExtractRebateGold: payload.canExtractRebateGold,
          rebateScale: payload.rebateScale,
          totalReturnWaterAmount: payload.totalReturnWaterAmount,
          totalFlowingWater: payload.totalFlowingWater,
          flowingWater: payload.flowingWater
        }),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).RESET_MEMBER_INFO_DATA]: state => _extends({}, Object.assign({}, _crd && initState === void 0 ? (_reportPossibleCrUseOfinitState({
          error: Error()
        }), initState) : initState)),
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).SET_VIP]: (state, payload) => {
          return _extends({}, state, {
            vipLevel: payload.vipLevel,
            vipLevelExperience: payload.vipLevelExperience
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).CHANGE_GOLD]: (state, payload) => {
          return _extends({}, state, {
            memberAssetGoldPieces: state.memberAssetGoldPieces + payload.value
          });
        },
        [(_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
          error: Error()
        }), ActionTypes) : ActionTypes).UPDATE_ACTIVITY_STATUS]: (state, payload) => {
          return _extends({}, state, {
            isUnreadActivity: payload.isUnreadActivity
          });
        }
      }, _crd && initState === void 0 ? (_reportPossibleCrUseOfinitState({
        error: Error()
      }), initState) : initState));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a2706aa2be630f3d4ebf72fa12abb65ed7ad4302.js.map