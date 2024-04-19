System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, areArraysEqualDefault, areDatesEqualDefault, areMapsEqualDefault, areObjectsEqualDefault, areObjectsEqualStrictDefault, arePrimitiveWrappersEqualDefault, areRegExpsEqualDefault, areSetsEqualDefault, areTypedArraysEqual, combineComparators, createIsCircular, _crd, ARGUMENTS_TAG, BOOLEAN_TAG, DATE_TAG, MAP_TAG, NUMBER_TAG, OBJECT_TAG, REG_EXP_TAG, SET_TAG, STRING_TAG, isArray, isTypedArray, assign, getTag;

  /**
   * Create a comparator method based on the type-specific equality comparators passed.
   */
  function createEqualityComparator(_ref) {
    var {
      areArraysEqual,
      areDatesEqual,
      areMapsEqual,
      areObjectsEqual,
      arePrimitiveWrappersEqual,
      areRegExpsEqual,
      areSetsEqual,
      areTypedArraysEqual
    } = _ref;

    /**
     * compare the value of the two objects and return true if they are equivalent in values
     */
    return function comparator(a, b, state) {
      // If the items are strictly equal, no need to do a value comparison.
      if (a === b) {
        return true;
      } // If the items are not non-nullish objects, then the only possibility
      // of them being equal but not strictly is if they are both `NaN`. Since
      // `NaN` is uniquely not equal to itself, we can use self-comparison of
      // both objects, which is faster than `isNaN()`.


      if (a == null || b == null || typeof a !== 'object' || typeof b !== 'object') {
        return a !== a && b !== b;
      }

      var constructor = a.constructor; // Checks are listed in order of commonality of use-case:
      //   1. Common complex object types (plain object, array)
      //   2. Common data values (date, regexp)
      //   3. Less-common complex object types (map, set)
      //   4. Less-common data values (promise, primitive wrappers)
      // Inherently this is both subjective and assumptive, however
      // when reviewing comparable libraries in the wild this order
      // appears to be generally consistent.
      // Constructors should match, otherwise there is potential for false positives
      // between class and subclass or custom object and POJO.

      if (constructor !== b.constructor) {
        return false;
      } // `isPlainObject` only checks against the object's own realm. Cross-realm
      // comparisons are rare, and will be handled in the ultimate fallback, so
      // we can avoid capturing the string tag.


      if (constructor === Object) {
        return areObjectsEqual(a, b, state);
      } // `isArray()` works on subclasses and is cross-realm, so we can avoid capturing
      // the string tag or doing an `instanceof` check.


      if (isArray(a)) {
        return areArraysEqual(a, b, state);
      } // `isTypedArray()` works on all possible TypedArray classes, so we can avoid
      // capturing the string tag or comparing against all possible constructors.


      if (isTypedArray != null && isTypedArray(a)) {
        return areTypedArraysEqual(a, b, state);
      } // Try to fast-path equality checks for other complex object types in the
      // same realm to avoid capturing the string tag. Strict equality is used
      // instead of `instanceof` because it is more performant for the common
      // use-case. If someone is subclassing a native class, it will be handled
      // with the string tag comparison.


      if (constructor === Date) {
        return areDatesEqual(a, b, state);
      }

      if (constructor === RegExp) {
        return areRegExpsEqual(a, b, state);
      }

      if (constructor === Map) {
        return areMapsEqual(a, b, state);
      }

      if (constructor === Set) {
        return areSetsEqual(a, b, state);
      } // Since this is a custom object, capture the string tag to determing its type.
      // This is reasonably performant in modern environments like v8 and SpiderMonkey.


      var tag = getTag(a);

      if (tag === DATE_TAG) {
        return areDatesEqual(a, b, state);
      }

      if (tag === REG_EXP_TAG) {
        return areRegExpsEqual(a, b, state);
      }

      if (tag === MAP_TAG) {
        return areMapsEqual(a, b, state);
      }

      if (tag === SET_TAG) {
        return areSetsEqual(a, b, state);
      }

      if (tag === OBJECT_TAG) {
        // The exception for value comparison is custom `Promise`-like class instances. These should
        // be treated the same as standard `Promise` objects, which means strict equality, and if
        // it reaches this point then that strict equality comparison has already failed.
        return typeof a.then !== 'function' && typeof b.then !== 'function' && areObjectsEqual(a, b, state);
      } // If an arguments tag, it should be treated as a standard object.


      if (tag === ARGUMENTS_TAG) {
        return areObjectsEqual(a, b, state);
      } // As the penultimate fallback, check if the values passed are primitive wrappers. This
      // is very rare in modern JS, which is why it is deprioritized compared to all other object
      // types.


      if (tag === BOOLEAN_TAG || tag === NUMBER_TAG || tag === STRING_TAG) {
        return arePrimitiveWrappersEqual(a, b, state);
      } // If not matching any tags that require a specific type of comparison, then we hard-code false because
      // the only thing remaining is strict equality, which has already been compared. This is for a few reasons:
      //   - Certain types that cannot be introspected (e.g., `WeakMap`). For these types, this is the only
      //     comparison that can be made.
      //   - For types that can be introspected, but rarely have requirements to be compared
      //     (`ArrayBuffer`, `DataView`, etc.), the cost is avoided to prioritize the common
      //     use-cases (may be included in a future release, if requested enough).
      //   - For types that can be introspected but do not have an objective definition of what
      //     equality is (`Error`, etc.), the subjective decision is to be conservative and strictly compare.
      // In all cases, these decisions should be reevaluated based on changes to the language and
      // common development practices.


      return false;
    };
  }
  /**
   * Create the configuration object used for building comparators.
   */


  function createEqualityComparatorConfig(_ref2) {
    var {
      circular,
      createCustomConfig,
      strict
    } = _ref2;
    var config = {
      areArraysEqual: strict ? _crd && areObjectsEqualStrictDefault === void 0 ? (_reportPossibleCrUseOfareObjectsEqualStrictDefault({
        error: Error()
      }), areObjectsEqualStrictDefault) : areObjectsEqualStrictDefault : _crd && areArraysEqualDefault === void 0 ? (_reportPossibleCrUseOfareArraysEqualDefault({
        error: Error()
      }), areArraysEqualDefault) : areArraysEqualDefault,
      areDatesEqual: _crd && areDatesEqualDefault === void 0 ? (_reportPossibleCrUseOfareDatesEqualDefault({
        error: Error()
      }), areDatesEqualDefault) : areDatesEqualDefault,
      areMapsEqual: strict ? (_crd && combineComparators === void 0 ? (_reportPossibleCrUseOfcombineComparators({
        error: Error()
      }), combineComparators) : combineComparators)(_crd && areMapsEqualDefault === void 0 ? (_reportPossibleCrUseOfareMapsEqualDefault({
        error: Error()
      }), areMapsEqualDefault) : areMapsEqualDefault, _crd && areObjectsEqualStrictDefault === void 0 ? (_reportPossibleCrUseOfareObjectsEqualStrictDefault({
        error: Error()
      }), areObjectsEqualStrictDefault) : areObjectsEqualStrictDefault) : _crd && areMapsEqualDefault === void 0 ? (_reportPossibleCrUseOfareMapsEqualDefault({
        error: Error()
      }), areMapsEqualDefault) : areMapsEqualDefault,
      areObjectsEqual: strict ? _crd && areObjectsEqualStrictDefault === void 0 ? (_reportPossibleCrUseOfareObjectsEqualStrictDefault({
        error: Error()
      }), areObjectsEqualStrictDefault) : areObjectsEqualStrictDefault : _crd && areObjectsEqualDefault === void 0 ? (_reportPossibleCrUseOfareObjectsEqualDefault({
        error: Error()
      }), areObjectsEqualDefault) : areObjectsEqualDefault,
      arePrimitiveWrappersEqual: _crd && arePrimitiveWrappersEqualDefault === void 0 ? (_reportPossibleCrUseOfarePrimitiveWrappersEqualDefault({
        error: Error()
      }), arePrimitiveWrappersEqualDefault) : arePrimitiveWrappersEqualDefault,
      areRegExpsEqual: _crd && areRegExpsEqualDefault === void 0 ? (_reportPossibleCrUseOfareRegExpsEqualDefault({
        error: Error()
      }), areRegExpsEqualDefault) : areRegExpsEqualDefault,
      areSetsEqual: strict ? (_crd && combineComparators === void 0 ? (_reportPossibleCrUseOfcombineComparators({
        error: Error()
      }), combineComparators) : combineComparators)(_crd && areSetsEqualDefault === void 0 ? (_reportPossibleCrUseOfareSetsEqualDefault({
        error: Error()
      }), areSetsEqualDefault) : areSetsEqualDefault, _crd && areObjectsEqualStrictDefault === void 0 ? (_reportPossibleCrUseOfareObjectsEqualStrictDefault({
        error: Error()
      }), areObjectsEqualStrictDefault) : areObjectsEqualStrictDefault) : _crd && areSetsEqualDefault === void 0 ? (_reportPossibleCrUseOfareSetsEqualDefault({
        error: Error()
      }), areSetsEqualDefault) : areSetsEqualDefault,
      areTypedArraysEqual: strict ? _crd && areObjectsEqualStrictDefault === void 0 ? (_reportPossibleCrUseOfareObjectsEqualStrictDefault({
        error: Error()
      }), areObjectsEqualStrictDefault) : areObjectsEqualStrictDefault : _crd && areTypedArraysEqual === void 0 ? (_reportPossibleCrUseOfareTypedArraysEqual({
        error: Error()
      }), areTypedArraysEqual) : areTypedArraysEqual
    };

    if (createCustomConfig) {
      config = assign({}, config, createCustomConfig(config));
    }

    if (circular) {
      var areArraysEqual = (_crd && createIsCircular === void 0 ? (_reportPossibleCrUseOfcreateIsCircular({
        error: Error()
      }), createIsCircular) : createIsCircular)(config.areArraysEqual);
      var areMapsEqual = (_crd && createIsCircular === void 0 ? (_reportPossibleCrUseOfcreateIsCircular({
        error: Error()
      }), createIsCircular) : createIsCircular)(config.areMapsEqual);
      var areObjectsEqual = (_crd && createIsCircular === void 0 ? (_reportPossibleCrUseOfcreateIsCircular({
        error: Error()
      }), createIsCircular) : createIsCircular)(config.areObjectsEqual);
      var areSetsEqual = (_crd && createIsCircular === void 0 ? (_reportPossibleCrUseOfcreateIsCircular({
        error: Error()
      }), createIsCircular) : createIsCircular)(config.areSetsEqual);
      config = assign({}, config, {
        areArraysEqual,
        areMapsEqual,
        areObjectsEqual,
        areSetsEqual
      });
    }

    return config;
  }
  /**
   * Default equality comparator pass-through, used as the standard `isEqual` creator for
   * use inside the built comparator.
   */


  function createInternalEqualityComparator(compare) {
    return function (a, b, _indexOrKeyA, _indexOrKeyB, _parentA, _parentB, state) {
      return compare(a, b, state);
    };
  }
  /**
   * Create the `isEqual` function used by the consuming application.
   */


  function createIsEqual(_ref3) {
    var {
      circular,
      comparator,
      createState,
      equals,
      strict
    } = _ref3;

    if (createState) {
      return function isEqual(a, b) {
        var {
          cache = circular ? new WeakMap() : undefined,
          meta
        } = createState();
        return comparator(a, b, {
          cache,
          equals,
          meta,
          strict
        });
      };
    }

    if (circular) {
      return function isEqual(a, b) {
        return comparator(a, b, {
          cache: new WeakMap(),
          equals,
          meta: undefined,
          strict
        });
      };
    }

    var state = {
      cache: undefined,
      equals,
      meta: undefined,
      strict
    };
    return function isEqual(a, b) {
      return comparator(a, b, state);
    };
  }

  function _reportPossibleCrUseOfareArraysEqualDefault(extras) {
    _reporterNs.report("areArraysEqualDefault", "./equals", _context.meta, extras);
  }

  function _reportPossibleCrUseOfareDatesEqualDefault(extras) {
    _reporterNs.report("areDatesEqualDefault", "./equals", _context.meta, extras);
  }

  function _reportPossibleCrUseOfareMapsEqualDefault(extras) {
    _reporterNs.report("areMapsEqualDefault", "./equals", _context.meta, extras);
  }

  function _reportPossibleCrUseOfareObjectsEqualDefault(extras) {
    _reporterNs.report("areObjectsEqualDefault", "./equals", _context.meta, extras);
  }

  function _reportPossibleCrUseOfareObjectsEqualStrictDefault(extras) {
    _reporterNs.report("areObjectsEqualStrictDefault", "./equals", _context.meta, extras);
  }

  function _reportPossibleCrUseOfarePrimitiveWrappersEqualDefault(extras) {
    _reporterNs.report("arePrimitiveWrappersEqualDefault", "./equals", _context.meta, extras);
  }

  function _reportPossibleCrUseOfareRegExpsEqualDefault(extras) {
    _reporterNs.report("areRegExpsEqualDefault", "./equals", _context.meta, extras);
  }

  function _reportPossibleCrUseOfareSetsEqualDefault(extras) {
    _reporterNs.report("areSetsEqualDefault", "./equals", _context.meta, extras);
  }

  function _reportPossibleCrUseOfareTypedArraysEqual(extras) {
    _reporterNs.report("areTypedArraysEqual", "./equals", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcombineComparators(extras) {
    _reporterNs.report("combineComparators", "./utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateIsCircular(extras) {
    _reporterNs.report("createIsCircular", "./utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComparatorConfig(extras) {
    _reporterNs.report("ComparatorConfig", "./internalTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCreateState(extras) {
    _reporterNs.report("CreateState", "./internalTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCustomEqualCreatorOptions(extras) {
    _reporterNs.report("CustomEqualCreatorOptions", "./internalTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEqualityComparator(extras) {
    _reporterNs.report("EqualityComparator", "./internalTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInternalEqualityComparator(extras) {
    _reporterNs.report("InternalEqualityComparator", "./internalTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "./internalTypes", _context.meta, extras);
  }

  _export({
    createEqualityComparator: createEqualityComparator,
    createEqualityComparatorConfig: createEqualityComparatorConfig,
    createInternalEqualityComparator: createInternalEqualityComparator,
    createIsEqual: createIsEqual
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      areArraysEqualDefault = _unresolved_2.areArraysEqual;
      areDatesEqualDefault = _unresolved_2.areDatesEqual;
      areMapsEqualDefault = _unresolved_2.areMapsEqual;
      areObjectsEqualDefault = _unresolved_2.areObjectsEqual;
      areObjectsEqualStrictDefault = _unresolved_2.areObjectsEqualStrict;
      arePrimitiveWrappersEqualDefault = _unresolved_2.arePrimitiveWrappersEqual;
      areRegExpsEqualDefault = _unresolved_2.areRegExpsEqual;
      areSetsEqualDefault = _unresolved_2.areSetsEqual;
      areTypedArraysEqual = _unresolved_2.areTypedArraysEqual;
    }, function (_unresolved_3) {
      combineComparators = _unresolved_3.combineComparators;
      createIsCircular = _unresolved_3.createIsCircular;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a4585jxRFxKO6maUbLXpYVQ", "comparator", undefined);

      ARGUMENTS_TAG = '[object Arguments]';
      BOOLEAN_TAG = '[object Boolean]';
      DATE_TAG = '[object Date]';
      MAP_TAG = '[object Map]';
      NUMBER_TAG = '[object Number]';
      OBJECT_TAG = '[object Object]';
      REG_EXP_TAG = '[object RegExp]';
      SET_TAG = '[object Set]';
      STRING_TAG = '[object String]';
      ({
        isArray
      } = Array);
      isTypedArray = typeof ArrayBuffer === 'function' && ArrayBuffer.isView ? ArrayBuffer.isView : null;
      ({
        assign
      } = Object);
      getTag = Object.prototype.toString.call.bind(Object.prototype.toString);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d70fb3b5afa9ea18693149f6132721008290be05.js.map