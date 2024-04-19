System.register(["__unresolved_0", "cc", "__unresolved_1", "cc/env"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, getPackageName, DEV, _crd, getGameMapConfig, keyPem, pkgCode, isDev, GameConfig;

  function _reportPossibleCrUseOfgetPackageName(extras) {
    _reporterNs.report("getPackageName", "../common/bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameConfigType(extras) {
    _reporterNs.report("GameConfigType", "../hall/config", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      getPackageName = _unresolved_2.getPackageName;
    }, function (_ccEnv) {
      DEV = _ccEnv.DEV;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b3a43fYAldO2JzRQr5/B8go", "GameConfig", undefined);

      /**获取游戏配置列表 */
      _export("getGameMapConfig", getGameMapConfig = function getGameMapConfig(urlIndex) {
        if (urlIndex === void 0) {
          urlIndex = 0;
        }

        return new Promise((reslove, reject) => {
          fetch(GameConfig.gameConfigUrl[urlIndex] + "?t=" + Date.parse(new Date())).then(response => {
            if (response.status === 200) {
              response.text().then(jsonStr => {
                reslove(JSON.parse(jsonStr.trim()));
              }).catch(e => reject(e)); // response.json().then(({ data, status, message }) => {
              //   if (status === "SUCCESS") {
              //     reslove(data)
              //   } else {
              //     reject(message)
              //   }
              // })
            } else {
              var _urlIndex = urlIndex + 1;

              if (_urlIndex === GameConfig.gameConfigUrl.length) {
                reject('config_error');
              } else {
                reslove(getGameMapConfig(_urlIndex));
              }
            }
          }).catch(e => {
            var _urlIndex = urlIndex + 1;

            if (_urlIndex === GameConfig.gameConfigUrl.length) {
              reject('config_error');
            } else {
              reslove(getGameMapConfig(_urlIndex));
            }
          });
        });
      });

      _export("keyPem", keyPem = {
        /**1024bit */
        key1: {
          /**公钥，用于加密 */
          publicStr: 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCc3prvz5vyN3tmnU7JLaSfE+t5bG4qVoAHLvAAfnK61wy94DLpuCpqrhuShZp7JwDyZwBdK9n/aziA6ekSLwsjhj522Yc6bhVKEqP8ARY2ULi67Uoxf9W5VHz0C5SpxB9hetMcu2hmR6MMvJER6KJVAz8HGZTNqR7aiNWSNUYJCwIDAQAB',

          /**私钥，用于解密 */
          privateStr: 'MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAJzemu/Pm/I3e2adTsktpJ8T63lsbipWgAcu8AB+crrXDL3gMum4KmquG5KFmnsnAPJnAF0r2f9rOIDp6RIvCyOGPnbZhzpuFUoSo/wBFjZQuLrtSjF/1blUfPQLlKnEH2F60xy7aGZHowy8kRHoolUDPwcZlM2pHtqI1ZI1RgkLAgMBAAECgYBvxYzP4jVTWITskJlabtMlJaRaWBAGyqtecus+7toAlsnVYLHmJfrTGEs9E0UHCrt5/DoeKOijPVp9QC15b1uXRlZ0Hw8LnMbTT0+JnJXtTSq8iLXyuOpfDwE9fiy03TxVJwe0S9Nl426TGJ1Sk0Ws6/RuEWTMAJAKMz5fQR82QQJBAP8ijtOgTr26FRE9Oc6KHhgW55sDrWhWMQwSUfR3Wb4A0Ou5PbJqJ+fDoG+kF1sWbChEwbPKb28HZljodYyYJOcCQQCdZsI7IOLwrszaQ6rBLSzch6IBhN0K1s9pynt/kpKXBShgoO+jVOXgC68Z1CM0xrjo1FKcYNDXvU9qhH8fixI9AkAd+tyXp425I6WYGf6x827n28EpaPw2d3JZ/ckdley4s/XYzTKfxXOc+1Ld64VHEdJxxOqSCuafQFpZdi9h7vrfAkBxZuSPVy1J/JZotpHipdqJdErbT082DPfYn2KE0iQ9HCEwJSMiCPuphKF+OWG4F2iHjtmKAxLULHd4Jce1ASx9AkAJSU4jWqaStNhHzegFnMkWNlW//n9Gevsaape5bwj7g2ujCnG2qnEVd1YKv+Xp3WAyYqFQT1tbmea+bODTLmCw'
        },
        key_2048: {
          /**公钥，用于加密 */
          publicStr: 'MIICITANBgkqhkiG9w0BAQEFAAOCAg4AMIICCQKCAgB9osALeextz/jxWZfkkTolwPAwa7ZwL58Fut/qKhzCAg4mj/ej72yKixcxKb063FjO+kgPcytjz3Xrf7kwCzFxWKrBQeh07IJbjaJ7LtsfJnf6WJDTQtnwK9PWMYiLYfVWlxY9aeMMKaRQgcF20VC7v21Lb1cX3apjdHK64vxogpNxWRYfvRkdRaXnCYfEFQk+t3vVw+SgLqkgIQ3BY9cmZfji3OTpm1E0b7w/3+CaDWDoEYbuRqOVmFpiRuwrqXa/uHTk5PbwmNeSWRcf4ZTm+gMEdnUuOasO8rZ/nmtumjV973brYUkgboL4uYXeitnzSLgNXnU7V4UFNog63IBeY1jQMNsz8aY8rJxA1qyAVztW5bCZpWU8+8gQ7FI0l+PbxNSUDuWstCxnqZAY5DpOYGfKYQu2tks66FKWiUNQbgXBr0TtqJP1olD22mCblVhBQ3xQQW5A2ifjvgokohKeJeucGXuoAwpYvPdu+HHr1j9G91Ox0vO4FcAuhNpeUPm9o0AqstHzUSAYch6Y1RNjIz+dabiD01u9GDUVN4yz4yoCGTwAuTuxajV7QgGSxTgCiDkmYLvOAS6QBOfhrbI1/ysOLAFcdhMM1REI1KYlWVbm05IzvZ9hEVdHVha3imIFdAzP89gTRcJOcfe7hwNgCeggsu5WQh8OZwzLJOJF8QIDAQAB',

          /**私钥，用于解密 */
          privateStr: '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'
        }
      });

      pkgCode = (_crd && getPackageName === void 0 ? (_reportPossibleCrUseOfgetPackageName({
        error: Error()
      }), getPackageName) : getPackageName)();
      console.log('env=', DEV, pkgCode);
      isDev = DEV || pkgCode.includes('development'); // const isDev = false;

      _export("GameConfig", GameConfig = {
        /**是否是开发/内部版本 */
        isDev,

        /**用于热更新，会被动态修改 */
        HotUpdateVersion: 1,

        /**本地的App版本号，会被动态修改 */
        appLocalVersion: 'V1.0.1',
        gameConfigUrl: isDev ? ["https://jsconfig.nuih.top/resource-jsonConfig-dev.json", "https://jsconfig.mkom.top/resource-jsonConfig-dev.json"] : ["https://jsconfig.nuih.top/resource-jsonConfig-prod.json", "https://jsconfig.mkom.top/resource-jsonConfig-prod.json", "https://jsconfig.vfen.xyz/resource-jsonConfig-prod.json", "https://jsconfig.hugewin777dl.com/resource-jsonConfig-prod.json"]
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b7c9d66a947d6b62c81359f7bc68007235e9645f.js.map