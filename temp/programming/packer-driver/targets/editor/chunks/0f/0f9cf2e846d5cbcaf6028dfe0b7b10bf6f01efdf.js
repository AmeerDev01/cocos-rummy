System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, createEqualityComparatorConfig, createEqualityComparator, createInternalEqualityComparator, createIsEqual, sameValueZeroEqual, _crd, deepEqual, strictDeepEqual, circularDeepEqual, strictCircularDeepEqual, shallowEqual, strictShallowEqual, circularShallowEqual, strictCircularShallowEqual;

  /**
   * Create a custom equality comparison method.
   *
   * This can be done to create very targeted comparisons in extreme hot-path scenarios
   * where the standard methods are not performant enough, but can also be used to provide
   * support for legacy environments that do not support expected features like
   * `RegExp.prototype.flags` out of the box.
   */
  function createCustomEqual(options = {}) {
    const {
      circular = false,
      createInternalComparator: createCustomInternalComparator,
      createState,
      strict = false
    } = options;
    const config = (_crd && createEqualityComparatorConfig === void 0 ? (_reportPossibleCrUseOfcreateEqualityComparatorConfig({
      error: Error()
    }), createEqualityComparatorConfig) : createEqualityComparatorConfig)(options);
    const comparator = (_crd && createEqualityComparator === void 0 ? (_reportPossibleCrUseOfcreateEqualityComparator({
      error: Error()
    }), createEqualityComparator) : createEqualityComparator)(config);
    const equals = createCustomInternalComparator ? createCustomInternalComparator(comparator) : (_crd && createInternalEqualityComparator === void 0 ? (_reportPossibleCrUseOfcreateInternalEqualityComparator({
      error: Error()
    }), createInternalEqualityComparator) : createInternalEqualityComparator)(comparator);
    return (_crd && createIsEqual === void 0 ? (_reportPossibleCrUseOfcreateIsEqual({
      error: Error()
    }), createIsEqual) : createIsEqual)({
      circular,
      comparator,
      createState,
      equals,
      strict
    });
  }

  function _reportPossibleCrUseOfcreateEqualityComparatorConfig(extras) {
    _reporterNs.report("createEqualityComparatorConfig", "./comparator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateEqualityComparator(extras) {
    _reporterNs.report("createEqualityComparator", "./comparator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateInternalEqualityComparator(extras) {
    _reporterNs.report("createInternalEqualityComparator", "./comparator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateIsEqual(extras) {
    _reporterNs.report("createIsEqual", "./comparator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCustomEqualCreatorOptions(extras) {
    _reporterNs.report("CustomEqualCreatorOptions", "./internalTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsameValueZeroEqual(extras) {
    _reporterNs.report("sameValueZeroEqual", "./utils", _context.meta, extras);
  }

  _export("createCustomEqual", createCustomEqual);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      createEqualityComparatorConfig = _unresolved_2.createEqualityComparatorConfig;
      createEqualityComparator = _unresolved_2.createEqualityComparator;
      createInternalEqualityComparator = _unresolved_2.createInternalEqualityComparator;
      createIsEqual = _unresolved_2.createIsEqual;
    }, function (_unresolved_3) {
      sameValueZeroEqual = _unresolved_3.sameValueZeroEqual;
    }, function (_unresolved_4) {
      var _exportObj = {};

      for (var _key in _unresolved_4) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _unresolved_4[_key];
      }

      _export(_exportObj);
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d2fcbTZkC5OTqknvBFklKgs", "index", undefined);

      _export("sameValueZeroEqual", sameValueZeroEqual);

      /**
       * Whether the items passed are deeply-equal in value.
       */
      _export("deepEqual", deepEqual = createCustomEqual());
      /**
       * Whether the items passed are deeply-equal in value based on strict comparison.
       */


      _export("strictDeepEqual", strictDeepEqual = createCustomEqual({
        strict: true
      }));
      /**
       * Whether the items passed are deeply-equal in value, including circular references.
       */


      _export("circularDeepEqual", circularDeepEqual = createCustomEqual({
        circular: true
      }));
      /**
       * Whether the items passed are deeply-equal in value, including circular references,
       * based on strict comparison.
       */


      _export("strictCircularDeepEqual", strictCircularDeepEqual = createCustomEqual({
        circular: true,
        strict: true
      }));
      /**
       * Whether the items passed are shallowly-equal in value.
       */


      _export("shallowEqual", shallowEqual = createCustomEqual({
        createInternalComparator: () => _crd && sameValueZeroEqual === void 0 ? (_reportPossibleCrUseOfsameValueZeroEqual({
          error: Error()
        }), sameValueZeroEqual) : sameValueZeroEqual
      }));
      /**
       * Whether the items passed are shallowly-equal in value based on strict comparison
       */


      _export("strictShallowEqual", strictShallowEqual = createCustomEqual({
        strict: true,
        createInternalComparator: () => _crd && sameValueZeroEqual === void 0 ? (_reportPossibleCrUseOfsameValueZeroEqual({
          error: Error()
        }), sameValueZeroEqual) : sameValueZeroEqual
      }));
      /**
       * Whether the items passed are shallowly-equal in value, including circular references.
       */


      _export("circularShallowEqual", circularShallowEqual = createCustomEqual({
        circular: true,
        createInternalComparator: () => _crd && sameValueZeroEqual === void 0 ? (_reportPossibleCrUseOfsameValueZeroEqual({
          error: Error()
        }), sameValueZeroEqual) : sameValueZeroEqual
      }));
      /**
       * Whether the items passed are shallowly-equal in value, including circular references,
       * based on strict comparison.
       */


      _export("strictCircularShallowEqual", strictCircularShallowEqual = createCustomEqual({
        circular: true,
        createInternalComparator: () => _crd && sameValueZeroEqual === void 0 ? (_reportPossibleCrUseOfsameValueZeroEqual({
          error: Error()
        }), sameValueZeroEqual) : sameValueZeroEqual,
        strict: true
      }));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0f9cf2e846d5cbcaf6028dfe0b7b10bf6f01efdf.js.map