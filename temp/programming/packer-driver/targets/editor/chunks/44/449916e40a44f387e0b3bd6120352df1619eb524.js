System.register(["__unresolved_0", "cc", "jsencrypt", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, JSEncrypt, keyPem, _crd, encodeRSA, decodeRSA;

  function _reportPossibleCrUseOfJSEncrypt(extras) {
    _reporterNs.report("JSEncrypt", "jsencrypt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfkeyPem(extras) {
    _reporterNs.report("keyPem", "../config/GameConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_jsencrypt) {
      JSEncrypt = _jsencrypt.default;
    }, function (_unresolved_2) {
      keyPem = _unresolved_2.keyPem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f447akODYxEHKda3UUdGkn2", "RSA", undefined);

      // var encrypt = new JSEncrypt();
      // encrypt.setPublicKey(`-----BEGIN PUBLIC KEY-----${keyPem.key_2048.publicStr}-----END PUBLIC KEY-----`);
      // var encryptedStr = encrypt.encrypt('Message too long for RSAMessage too long for RSAMessage too long for RSAMessage too long for RSAMessage too long for RSAMessage too long for RSAMessage too long for RSAMessage too long for RSAMessage too long for RSAMessage too long for RSAMessage too long for RSAMessage too long for RSAMessage too long for RSAMessage too long for RSAMessage too long for RSA')
      // console.log('encryptedStr', encryptedStr)
      // var decrypt = new JSEncrypt();
      // decrypt.setPrivateKey(`-----BEGIN PRIVATE KEY-----${keyPem.key_2048.privateStr}-----END PRIVATE KEY-----`);
      // var decryptedStr = decrypt.decrypt(encryptedStr as string);
      // console.log('decryptedStr', decryptedStr)

      /**
       * 使用私钥解密数据
       * @param dataToEncrypt 要解密的数据
       * @returns 
       */
      _export("encodeRSA", encodeRSA = dataToEncrypt => {
        const encrypt = new (_crd && JSEncrypt === void 0 ? (_reportPossibleCrUseOfJSEncrypt({
          error: Error()
        }), JSEncrypt) : JSEncrypt)();
        encrypt.setPublicKey(`-----BEGIN PUBLIC KEY-----${(_crd && keyPem === void 0 ? (_reportPossibleCrUseOfkeyPem({
          error: Error()
        }), keyPem) : keyPem).key1.publicStr}-----END PUBLIC KEY-----`);
        return encrypt.encrypt(dataToEncrypt);
      });
      /**
       * 使用公钥加密数据
       * @param dataToDecrypt 要解密的数据
       * @returns 
       */


      _export("decodeRSA", decodeRSA = dataToDecrypt => {
        const decrypt = new (_crd && JSEncrypt === void 0 ? (_reportPossibleCrUseOfJSEncrypt({
          error: Error()
        }), JSEncrypt) : JSEncrypt)();
        decrypt.setPrivateKey(`-----BEGIN PRIVATE KEY-----${(_crd && keyPem === void 0 ? (_reportPossibleCrUseOfkeyPem({
          error: Error()
        }), keyPem) : keyPem).key1.privateStr}-----END PRIVATE KEY-----`);
        return decrypt.decrypt(dataToDecrypt);
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=449916e40a44f387e0b3bd6120352df1619eb524.js.map