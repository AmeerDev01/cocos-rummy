System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, getStrictProperties, hasOwn, sameValueZeroEqual, _crd, OWNER, getOwnPropertyDescriptor, keys;

  /**
   * Whether the arrays are equal in value.
   */
  function areArraysEqual(a, b, state) {
    let index = a.length;

    if (b.length !== index) {
      return false;
    }

    while (index-- > 0) {
      if (!state.equals(a[index], b[index], index, index, a, b, state)) {
        return false;
      }
    }

    return true;
  }
  /**
   * Whether the dates passed are equal in value.
   */


  function areDatesEqual(a, b) {
    return (_crd && sameValueZeroEqual === void 0 ? (_reportPossibleCrUseOfsameValueZeroEqual({
      error: Error()
    }), sameValueZeroEqual) : sameValueZeroEqual)(a.getTime(), b.getTime());
  }
  /**
   * Whether the `Map`s are equal in value.
   */


  function areMapsEqual(a, b, state) {
    if (a.size !== b.size) {
      return false;
    }

    const matchedIndices = {};
    const aIterable = a.entries();
    let index = 0;
    let aResult;
    let bResult;

    while (aResult = aIterable.next()) {
      if (aResult.done) {
        break;
      }

      const bIterable = b.entries();
      let hasMatch = false;
      let matchIndex = 0;

      while (bResult = bIterable.next()) {
        if (bResult.done) {
          break;
        }

        const [aKey, aValue] = aResult.value;
        const [bKey, bValue] = bResult.value;

        if (!hasMatch && !matchedIndices[matchIndex] && (hasMatch = state.equals(aKey, bKey, index, matchIndex, a, b, state) && state.equals(aValue, bValue, aKey, bKey, a, b, state))) {
          matchedIndices[matchIndex] = true;
        }

        matchIndex++;
      }

      if (!hasMatch) {
        return false;
      }

      index++;
    }

    return true;
  }
  /**
   * Whether the objects are equal in value.
   */


  function areObjectsEqual(a, b, state) {
    const properties = keys(a);
    let index = properties.length;

    if (keys(b).length !== index) {
      return false;
    }

    let property; // Decrementing `while` showed faster results than either incrementing or
    // decrementing `for` loop and than an incrementing `while` loop. Declarative
    // methods like `some` / `every` were not used to avoid incurring the garbage
    // cost of anonymous callbacks.

    while (index-- > 0) {
      property = properties[index];

      if (property === OWNER && (a.$$typeof || b.$$typeof) && a.$$typeof !== b.$$typeof) {
        return false;
      }

      if (!(_crd && hasOwn === void 0 ? (_reportPossibleCrUseOfhasOwn({
        error: Error()
      }), hasOwn) : hasOwn)(b, property) || !state.equals(a[property], b[property], property, property, a, b, state)) {
        return false;
      }
    }

    return true;
  }
  /**
   * Whether the objects are equal in value with strict property checking.
   */


  function areObjectsEqualStrict(a, b, state) {
    const properties = (_crd && getStrictProperties === void 0 ? (_reportPossibleCrUseOfgetStrictProperties({
      error: Error()
    }), getStrictProperties) : getStrictProperties)(a);
    let index = properties.length;

    if ((_crd && getStrictProperties === void 0 ? (_reportPossibleCrUseOfgetStrictProperties({
      error: Error()
    }), getStrictProperties) : getStrictProperties)(b).length !== index) {
      return false;
    }

    let property;
    let descriptorA;
    let descriptorB; // Decrementing `while` showed faster results than either incrementing or
    // decrementing `for` loop and than an incrementing `while` loop. Declarative
    // methods like `some` / `every` were not used to avoid incurring the garbage
    // cost of anonymous callbacks.

    while (index-- > 0) {
      property = properties[index];

      if (property === OWNER && (a.$$typeof || b.$$typeof) && a.$$typeof !== b.$$typeof) {
        return false;
      }

      if (!(_crd && hasOwn === void 0 ? (_reportPossibleCrUseOfhasOwn({
        error: Error()
      }), hasOwn) : hasOwn)(b, property)) {
        return false;
      }

      if (!state.equals(a[property], b[property], property, property, a, b, state)) {
        return false;
      }

      descriptorA = getOwnPropertyDescriptor(a, property);
      descriptorB = getOwnPropertyDescriptor(b, property);

      if ((descriptorA || descriptorB) && (!descriptorA || !descriptorB || descriptorA.configurable !== descriptorB.configurable || descriptorA.enumerable !== descriptorB.enumerable || descriptorA.writable !== descriptorB.writable)) {
        return false;
      }
    }

    return true;
  }
  /**
   * Whether the primitive wrappers passed are equal in value.
   */


  function arePrimitiveWrappersEqual(a, b) {
    return (_crd && sameValueZeroEqual === void 0 ? (_reportPossibleCrUseOfsameValueZeroEqual({
      error: Error()
    }), sameValueZeroEqual) : sameValueZeroEqual)(a.valueOf(), b.valueOf());
  }
  /**
   * Whether the regexps passed are equal in value.
   */


  function areRegExpsEqual(a, b) {
    return a.source === b.source && a.flags === b.flags;
  }
  /**
   * Whether the `Set`s are equal in value.
   */


  function areSetsEqual(a, b, state) {
    if (a.size !== b.size) {
      return false;
    }

    const matchedIndices = {};
    const aIterable = a.values();
    let aResult;
    let bResult;

    while (aResult = aIterable.next()) {
      if (aResult.done) {
        break;
      }

      const bIterable = b.values();
      let hasMatch = false;
      let matchIndex = 0;

      while (bResult = bIterable.next()) {
        if (bResult.done) {
          break;
        }

        if (!hasMatch && !matchedIndices[matchIndex] && (hasMatch = state.equals(aResult.value, bResult.value, aResult.value, bResult.value, a, b, state))) {
          matchedIndices[matchIndex] = true;
        }

        matchIndex++;
      }

      if (!hasMatch) {
        return false;
      }
    }

    return true;
  }
  /**
   * Whether the TypedArray instances are equal in value.
   */


  function areTypedArraysEqual(a, b) {
    let index = a.length;

    if (b.length !== index) {
      return false;
    }

    while (index-- > 0) {
      if (a[index] !== b[index]) {
        return false;
      }
    }

    return true;
  }

  function _reportPossibleCrUseOfgetStrictProperties(extras) {
    _reporterNs.report("getStrictProperties", "./utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhasOwn(extras) {
    _reporterNs.report("hasOwn", "./utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsameValueZeroEqual(extras) {
    _reporterNs.report("sameValueZeroEqual", "./utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDictionary(extras) {
    _reporterNs.report("Dictionary", "./internalTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrimitiveWrapper(extras) {
    _reporterNs.report("PrimitiveWrapper", "./internalTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "./internalTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTypedArray(extras) {
    _reporterNs.report("TypedArray", "./internalTypes", _context.meta, extras);
  }

  _export({
    areArraysEqual: areArraysEqual,
    areDatesEqual: areDatesEqual,
    areMapsEqual: areMapsEqual,
    areObjectsEqual: areObjectsEqual,
    areObjectsEqualStrict: areObjectsEqualStrict,
    arePrimitiveWrappersEqual: arePrimitiveWrappersEqual,
    areRegExpsEqual: areRegExpsEqual,
    areSetsEqual: areSetsEqual,
    areTypedArraysEqual: areTypedArraysEqual
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      getStrictProperties = _unresolved_2.getStrictProperties;
      hasOwn = _unresolved_2.hasOwn;
      sameValueZeroEqual = _unresolved_2.sameValueZeroEqual;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8b30aaCQd1BbZ3wIYsreGor", "equals", undefined);

      OWNER = '_owner';
      ({
        getOwnPropertyDescriptor,
        keys
      } = Object);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ef76003ed909b21189b2b2e98ccddbaf1b692db6.js.map