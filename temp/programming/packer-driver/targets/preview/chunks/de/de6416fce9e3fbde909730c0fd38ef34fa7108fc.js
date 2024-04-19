System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, ViewModel, EffectType, ApiUrl, fetcher, deviceInfo, getPackageName, registerAppsflyerEvents, RegV2ViewModel, _crd;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_RegPageV(extras) {
    _reporterNs.report("Hall_RegPageV2", "../../components/login_v2/Hall_RegPageV2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../../components/login_v2/Hall_RegPageV2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../../components/login_v2/Hall_RegPageV2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "../../apiUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOffetcher(extras) {
    _reporterNs.report("fetcher", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdeviceInfo(extras) {
    _reporterNs.report("deviceInfo", "../../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetPackageName(extras) {
    _reporterNs.report("getPackageName", "../../../common/bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfregisterAppsflyerEvents(extras) {
    _reporterNs.report("registerAppsflyerEvents", "../../../common/bridge", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
    }, function (_unresolved_3) {
      EffectType = _unresolved_3.EffectType;
    }, function (_unresolved_4) {
      ApiUrl = _unresolved_4.ApiUrl;
    }, function (_unresolved_5) {
      fetcher = _unresolved_5.fetcher;
    }, function (_unresolved_6) {
      deviceInfo = _unresolved_6.deviceInfo;
    }, function (_unresolved_7) {
      getPackageName = _unresolved_7.getPackageName;
      registerAppsflyerEvents = _unresolved_7.registerAppsflyerEvents;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fc09fJVgvpMHp8RfvM3D98U", "RegV2ViewModel", undefined);

      __checkObsolete__(['Node', 'sys']);

      _export("default", RegV2ViewModel = class RegV2ViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Hall_RegPageV2');
        }

        begin() {
          this.setProps({});
          this.setEvent({
            closeHandler: () => {
              this.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT2);
            },
            regHandler: (loginName, password) => {
              (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
                error: Error()
              }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
                error: Error()
              }), ApiUrl) : ApiUrl).REG, {
                pkgCode: (_crd && getPackageName === void 0 ? (_reportPossibleCrUseOfgetPackageName({
                  error: Error()
                }), getPackageName) : getPackageName)(),
                macCode: (_crd && deviceInfo === void 0 ? (_reportPossibleCrUseOfdeviceInfo({
                  error: Error()
                }), deviceInfo) : deviceInfo).getUniqueId(),
                memberName: loginName,
                password
              }).then(data => {
                var values = data.split(",");
                var token = values.length === 1 ? data : values[0]; //注册成功

                sys.localStorage.setItem('token', token);
                this.comp.events.regDoneHandler();
                (_crd && registerAppsflyerEvents === void 0 ? (_reportPossibleCrUseOfregisterAppsflyerEvents({
                  error: Error()
                }), registerAppsflyerEvents) : registerAppsflyerEvents)(loginName, password);
              }).catch(e => {
                console.log(e);
              });
            }
          });
        }

        connect(initProps) {
          if (initProps === void 0) {
            initProps = {};
          }

          this.inject(initProps, state => {
            return {};
          });
          return this;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=de6416fce9e3fbde909730c0fd38ef34fa7108fc.js.map