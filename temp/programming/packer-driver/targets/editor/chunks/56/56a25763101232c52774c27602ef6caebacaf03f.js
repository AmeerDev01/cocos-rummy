System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, Hall, Singleton, App, _crd;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "./utils/Singleton", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      find = _cc.find;
    }, function (_unresolved_2) {
      Hall = _unresolved_2;
    }, function (_unresolved_3) {
      Singleton = _unresolved_3.default;
    }, function (_unresolved_4) {}],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a8b186DlXdEjKuWtVl9uCOO", "App", undefined);

      __checkObsolete__(['_decorator', 'find']);

      _export("default", App = class App extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        start() {
          // console.log('encrypAesEcb', encrypAesEcb('test-demo'))
          Hall.startUp(find('Canvas'));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=56a25763101232c52774c27602ef6caebacaf03f.js.map