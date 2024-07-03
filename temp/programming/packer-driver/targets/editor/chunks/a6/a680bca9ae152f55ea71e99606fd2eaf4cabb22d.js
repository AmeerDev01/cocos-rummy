System.register(["__unresolved_0", "cc", "crypto-ts"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, cryptojs, _crd;

  function _reportPossibleCrUseOfcryptojs(extras) {
    _reporterNs.report("cryptojs", "crypto-ts", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_cryptoTs) {
      cryptojs = _cryptoTs.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2f063UPEPhLCKI7nxnGFFSJ", "encryption", undefined); // import { inject } from "vue"


      // const cryptojs = inject("cryptojs") as any
      _export("default", data => {
        const encryptedKey = (_crd && cryptojs === void 0 ? (_reportPossibleCrUseOfcryptojs({
          error: Error()
        }), cryptojs) : cryptojs).enc.Hex.parse("6bb4837eb74329105ee4568dda7dc67e");
        const encryptedByteStr = (_crd && cryptojs === void 0 ? (_reportPossibleCrUseOfcryptojs({
          error: Error()
        }), cryptojs) : cryptojs).enc.Utf8.parse(data);
        const encryptedData = (_crd && cryptojs === void 0 ? (_reportPossibleCrUseOfcryptojs({
          error: Error()
        }), cryptojs) : cryptojs).AES.encrypt(encryptedByteStr, encryptedKey, {
          mode: (_crd && cryptojs === void 0 ? (_reportPossibleCrUseOfcryptojs({
            error: Error()
          }), cryptojs) : cryptojs).mode.ECB,
          padding: (_crd && cryptojs === void 0 ? (_reportPossibleCrUseOfcryptojs({
            error: Error()
          }), cryptojs) : cryptojs).pad.PKCS7
        });
        return encryptedData.ciphertext.toString();
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a680bca9ae152f55ea71e99606fd2eaf4cabb22d.js.map