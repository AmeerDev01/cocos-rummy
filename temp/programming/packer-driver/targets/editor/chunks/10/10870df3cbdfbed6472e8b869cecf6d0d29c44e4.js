System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, getOwnPropertyNames, getOwnPropertySymbols, hasOwnProperty, hasOwn;

  /**
   * Combine two comparators into a single comparators.
   */
  function combineComparators(comparatorA, comparatorB) {
    return function isEqual(a, b, state) {
      return comparatorA(a, b, state) && comparatorB(a, b, state);
    };
  }
  /**
   * Wrap the provided `areItemsEqual` method to manage the circular state, allowing
   * for circular references to be safely included in the comparison without creating
   * stack overflows.
   */


  function createIsCircular(areItemsEqual) {
    return function isCircular(a, b, state) {
      if (!a || !b || typeof a !== 'object' || typeof b !== 'object') {
        return areItemsEqual(a, b, state);
      }

      const {
        cache
      } = state;
      const cachedA = cache.get(a);
      const cachedB = cache.get(b);

      if (cachedA && cachedB) {
        return cachedA === b && cachedB === a;
      }

      cache.set(a, b);
      cache.set(b, a);
      const result = areItemsEqual(a, b, state);
      cache.delete(a);
      cache.delete(b);
      return result;
    };
  }
  /**
   * Get the properties to strictly examine, which include both own properties that are
   * not enumerable and symbol properties.
   */


  function getStrictProperties(object) {
    return getOwnPropertyNames(object).concat(getOwnPropertySymbols(object));
  }
  /**
   * Whether the object contains the property passed as an own property.
   */


  /**
   * Whether the values passed are strictly equal or both NaN.
   */
  function sameValueZeroEqual(a, b) {
    return a || b ? a === b : a === b || a !== a && b !== b;
  }

  function _reportPossibleCrUseOfAnyEqualityComparator(extras) {
    _reporterNs.report("AnyEqualityComparator", "./internalTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCache(extras) {
    _reporterNs.report("Cache", "./internalTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCircularState(extras) {
    _reporterNs.report("CircularState", "./internalTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDictionary(extras) {
    _reporterNs.report("Dictionary", "./internalTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "./internalTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTypeEqualityComparator(extras) {
    _reporterNs.report("TypeEqualityComparator", "./internalTypes", _context.meta, extras);
  }

  _export({
    combineComparators: combineComparators,
    createIsCircular: createIsCircular,
    getStrictProperties: getStrictProperties,
    sameValueZeroEqual: sameValueZeroEqual
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "50199G1EaVIpJeSmRMdUKuz", "utils", undefined);

      ({
        getOwnPropertyNames,
        getOwnPropertySymbols
      } = Object);
      ({
        hasOwnProperty
      } = Object.prototype);

      _export("hasOwn", hasOwn = Object.hasOwn || ((object, property) => hasOwnProperty.call(object, property)));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=10870df3cbdfbed6472e8b869cecf6d0d29c44e4.js.map