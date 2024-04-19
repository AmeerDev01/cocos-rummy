System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _add, _remove, _has, _check, _all, _clear, _enableChecking, _disableChecking, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.add = add;
        exports.remove = remove;
        exports.has = has;
        exports.check = check;
        exports.all = all;
        exports.clear = clear;
        exports.enableChecking = enableChecking;
        exports.disableChecking = disableChecking;
        var types = {};
        var config = {
          checkExisting: true
        };

        function add(name) {
          types[name] = true;
        }

        function remove(name) {
          types[name] = false;
        }

        function has(name) {
          return !!types[name];
        }

        function check(name) {
          if (config.checkExisting && has(name)) {
            throw new TypeError("Duplicate action type: ".concat(name));
          }
        }

        function all() {
          return Object.keys(types).filter(has);
        }

        function clear() {
          all().forEach(remove);
        }

        function enableChecking() {
          config.checkExisting = true;
        }

        function disableChecking() {
          config.checkExisting = false;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _add = module.exports.add;
        _remove = module.exports.remove;
        _has = module.exports.has;
        _check = module.exports.check;
        _all = module.exports.all;
        _clear = module.exports.clear;
        _enableChecking = module.exports.enableChecking;
        _disableChecking = module.exports.disableChecking;
      }, {});
    }
  };
});
//# sourceMappingURL=93829e42acfa6f10d9b3b4f260f9d53caa10c1d9.js.map