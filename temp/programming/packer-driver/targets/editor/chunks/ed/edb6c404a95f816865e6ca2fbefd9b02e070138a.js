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
            stringToBytes: function (str) {
              return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
            },
            // Convert a byte array to a string
            bytesToString: function (bytes) {
              return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
            }
          },
          // Binary encoding
          bin: {
            // Convert a string to a byte array
            stringToBytes: function (str) {
              for (var bytes = [], i = 0; i < str.length; i++) bytes.push(str.charCodeAt(i) & 0xFF);

              return bytes;
            },
            // Convert a byte array to a string
            bytesToString: function (bytes) {
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
//# sourceMappingURL=edb6c404a95f816865e6ca2fbefd9b02e070138a.js.map