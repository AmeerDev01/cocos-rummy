System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Proxy, sys, LocalCacheDataProxy, _crd;

  function _reportPossibleCrUseOfProxy(extras) {
    _reporterNs.report("Proxy", "../../Framework/patterns/proxy/Proxy", _context.meta, extras);
  }

  _export("LocalCacheDataProxy", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      Proxy = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1f3dcICxohKI7+Tc4e+H2Ff", "LocalCacheDataProxy", undefined);

      __checkObsolete__(['sys']);

      _export("LocalCacheDataProxy", LocalCacheDataProxy = class LocalCacheDataProxy extends (_crd && Proxy === void 0 ? (_reportPossibleCrUseOfProxy({
        error: Error()
      }), Proxy) : Proxy) {
        constructor(proxyName = null, data = null) {
          super(proxyName, data);
          this.localStorage = null;
          this.cache = null;
          this.localStorage = sys.localStorage;
          this.cache = new Map();
        }
        /**
        		* 获得登录缓存数据
        		*/
        // getLoginData(): LoginData {
        //     return <LoginData>JSON.parse(this.localStorage.getItem(LocalCacheDataProxy.LOGIN_DATA));
        // }

        /**
         * 保存登录缓存数据
         * @param {*} loginData 
         */


        setLoginData(loginData) {
          this.localStorage.setItem(LocalCacheDataProxy.LOGIN_DATA, JSON.stringify(loginData));
        }
        /**
         * 获得用户TOKEN
         */


        getUserToken() {
          return this.getCache(LocalCacheDataProxy.TOKEN);
        }
        /**
         * 保存用户token
         * @param {*} userToken 
         */


        setUserToken(userToken) {
          this.setCache(LocalCacheDataProxy.TOKEN, userToken);
        }

        getCache(key) {
          return this.cache.get(key);
        }

        setCache(key, value) {
          this.cache.set(key, value);
        }

      });

      LocalCacheDataProxy.LOGIN_DATA = "LOGIN_DATA";
      LocalCacheDataProxy.TOKEN = "TOKEN";
      LocalCacheDataProxy.INVITE_CODE = "INVITE_CODE";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c93ab519e7e4598dd31307138d33c08880ab8f4c.js.map