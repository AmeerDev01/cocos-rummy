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
        'use strict'; // do not edit .js files directly - edit src/index.jst

        module.exports = function equal(a, b) {
          if (a === b) return true;

          if (a && b && typeof a == 'object' && typeof b == 'object') {
            if (a.constructor !== b.constructor) return false;
            var length, i, keys;

            if (Array.isArray(a)) {
              length = a.length;
              if (length != b.length) return false;

              for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;

              return true;
            }

            if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
            if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
            if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
            keys = Object.keys(a);
            length = keys.length;
            if (length !== Object.keys(b).length) return false;

            for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

            for (i = length; i-- !== 0;) {
              var key = keys[i];
              if (!equal(a[key], b[key])) return false;
            }

            return true;
          } // true if both NaN, false otherwise


          return a !== a && b !== b;
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=458317e069b2f8c9ac59f6c3350faa5ac9bfdf0a.js.map