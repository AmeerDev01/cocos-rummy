System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var charenc = {
          // UTF-8 encoding
          utf8: {
            // Convert a string to a byte array
            stringToBytes: function stringToBytes(str) {
              return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
            },
            // Convert a byte array to a string
            bytesToString: function bytesToString(bytes) {
              return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
            }
          },
          // Binary encoding
          bin: {
            // Convert a string to a byte array
            stringToBytes: function stringToBytes(str) {
              for (var bytes = [], i = 0; i < str.length; i++) bytes.push(str.charCodeAt(i) & 0xFF);

              return bytes;
            },
            // Convert a byte array to a string
            bytesToString: function bytesToString(bytes) {
              for (var str = [], i = 0; i < bytes.length; i++) str.push(String.fromCharCode(bytes[i]));

              return str.join('');
            }
          }
        };
        module.exports = charenc; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=0b13530104f37365bac9676c3c1a487bc0ea6514.js.map