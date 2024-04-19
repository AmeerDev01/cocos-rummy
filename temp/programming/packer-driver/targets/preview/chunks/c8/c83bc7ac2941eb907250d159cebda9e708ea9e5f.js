System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b7b2c+OlWxHzJ1nsRsAvDFM", "internalTypes", undefined);
      /**
       * Cache used to store references to objects, used for circular
       * reference checks.
       */
      // We explicitly check for primitive wrapper types
      // eslint-disable-next-line @typescript-eslint/ban-types

      /**
       * Type which encompasses possible instances of TypedArray
       * classes.
       *
       * **NOTE**: This does not include `BigInt64Array` and
       * `BitUint64Array` because those are part of ES2020 and
       * not supported by certain TS configurations. If using
       * either in `areTypedArraysEqual`, you can cast the
       * instance as `TypedArray` and it will work as expected,
       * because runtime checks will still work for those classes.
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c83bc7ac2941eb907250d159cebda9e708ea9e5f.js.map