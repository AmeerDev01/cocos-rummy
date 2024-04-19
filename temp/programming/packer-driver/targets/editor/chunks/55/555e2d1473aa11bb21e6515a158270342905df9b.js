System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, fetcher, ViewModel, EffectType, addToastAction, changeWebView, loadRecommendData, ApiUrl, lang, ShareSureViewModel, _crd;

  function _reportPossibleCrUseOffetcher(extras) {
    _reporterNs.report("fetcher", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_ShareSure(extras) {
    _reporterNs.report("Hall_ShareSure", "../components/Hall_ShareSure", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Hall_ShareSure", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Hall_ShareSure", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeWebView(extras) {
    _reporterNs.report("changeWebView", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfloadRecommendData(extras) {
    _reporterNs.report("loadRecommendData", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "../apiUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../index", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      fetcher = _unresolved_2.fetcher;
    }, function (_unresolved_3) {
      ViewModel = _unresolved_3.default;
    }, function (_unresolved_4) {
      EffectType = _unresolved_4.EffectType;
    }, function (_unresolved_5) {
      addToastAction = _unresolved_5.addToastAction;
      changeWebView = _unresolved_5.changeWebView;
      loadRecommendData = _unresolved_5.loadRecommendData;
    }, function (_unresolved_6) {
      ApiUrl = _unresolved_6.ApiUrl;
    }, function (_unresolved_7) {
      lang = _unresolved_7.lang;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dce23oBx4dB9Lz1BbHJGmPo", "ShareSureViewModel", undefined);

      ShareSureViewModel = class ShareSureViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Hall_ShareSure');
        }

        begin() {
          this.dispatch((_crd && changeWebView === void 0 ? (_reportPossibleCrUseOfchangeWebView({
            error: Error()
          }), changeWebView) : changeWebView)(false));
          this.setEvent({
            close: () => {
              this.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT2);
              this.dispatch((_crd && changeWebView === void 0 ? (_reportPossibleCrUseOfchangeWebView({
                error: Error()
              }), changeWebView) : changeWebView)(true));
            },
            batalActing: actingId => {
              (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
                error: Error()
              }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
                error: Error()
              }), ApiUrl) : ApiUrl).RECOMMEND_BIND, {
                promotionCode: actingId
              }, "post").then(rsp => {
                this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                  error: Error()
                }), addToastAction) : addToastAction)({
                  content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                    error: Error()
                  }), lang) : lang).write(k => k.MainPaneModule.ShareSure, {}, {
                    placeStr: "绑定成功"
                  })
                })); // 绑定之后重新加载推荐数据

                this.dispatch((_crd && loadRecommendData === void 0 ? (_reportPossibleCrUseOfloadRecommendData({
                  error: Error()
                }), loadRecommendData) : loadRecommendData)(0));
                this.comp.events.close();
              }).catch(e => {//this.dispatch(addToastAction({ content: e }))
              });
            }
          });
        }

        connect() {
          this.inject({}, state => {
            return {};
          });
          return this;
        }

      };

      _export("default", ShareSureViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=555e2d1473aa11bb21e6515a158270342905df9b.js.map