System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, toStringFunction, create, SUPPORTS_SYMBOL, copyObjectLoose, getRegExpFlags, toStringObject, LegacyCache, getTag, createCache, DEFAULT_LOOSE_OPTIONS;

  function getRegExpFlagsModern(regExp) {
    return regExp.flags;
  }

  function getRegExpFlagsLegacy(regExp) {
    var flags = '';

    if (regExp.global) {
      flags += 'g';
    }

    if (regExp.ignoreCase) {
      flags += 'i';
    }

    if (regExp.multiline) {
      flags += 'm';
    }

    if (regExp.unicode) {
      flags += 'u';
    }

    if (regExp.sticky) {
      flags += 'y';
    }

    return flags;
  }

  function getTagLegacy(value) {
    var type = toStringObject.call(value);
    return type.substring(8, type.length - 1);
  }

  function getTagModern(value) {
    return value[Symbol.toStringTag] || getTagLegacy(value);
  }

  function createCacheLegacy() {
    return new LegacyCache();
  }

  function createCacheModern() {
    return new WeakMap();
  }

  function copyRegExp(regExp, state) {
    var clone = new state.Constructor(regExp.source, getRegExpFlags(regExp));
    clone.lastIndex = regExp.lastIndex;
    return clone;
  }

  function copySetLoose(set, state) {
    var clone = new state.Constructor(); // set in the cache immediately to be able to reuse the object recursively

    state.cache.set(set, clone);
    set.forEach(function (value) {
      clone.add(state.copier(value, state));
    });
    return clone;
  }

  function copyObjectLooseLegacy(object, state) {
    var clone = getCleanClone(state.prototype); // set in the cache immediately to be able to reuse the object recursively

    state.cache.set(object, clone);

    for (var key in object) {
      if (Object.hasOwnProperty.call(object, key)) {
        clone[key] = state.copier(object[key], state);
      }
    }

    return clone;
  }

  function copyObjectLooseModern(object, state) {
    var clone = getCleanClone(state.prototype); // set in the cache immediately to be able to reuse the object recursively

    state.cache.set(object, clone);

    for (var key in object) {
      if (Object.hasOwnProperty.call(object, key)) {
        clone[key] = state.copier(object[key], state);
      }
    }

    var symbols = Object.getOwnPropertySymbols(object);

    for (var index = 0, length_3 = symbols.length, symbol = void 0; index < length_3; ++index) {
      symbol = symbols[index];

      if (Object.propertyIsEnumerable.call(object, symbol)) {
        clone[symbol] = state.copier(object[symbol], state);
      }
    }

    return clone;
  }

  function getCleanClone(prototype) {
    if (!prototype) {
      return create(null);
    }

    var Constructor = prototype.constructor;

    if (Constructor === Object) {
      return prototype === Object.prototype ? {} : create(prototype);
    }

    if (~toStringFunction.call(Constructor).indexOf('[native code]')) {
      try {
        return new Constructor();
      } catch (_a) {}
    }

    return create(prototype);
  }

  function copyMapLoose(map, state) {
    var clone = new state.Constructor(); // set in the cache immediately to be able to reuse the object recursively

    state.cache.set(map, clone);
    map.forEach(function (value, key) {
      clone.set(key, state.copier(value, state));
    });
    return clone;
  }

  function copyDate(date, state) {
    return new state.Constructor(date.getTime());
  }
  /**
   * Copy the contents of the ArrayBuffer.
   */


  function copyArrayBuffer(arrayBuffer, _state) {
    return arrayBuffer.slice(0);
  }
  /**
   * Create a new Blob with the contents of the original.
   */


  function copyBlob(blob, _state) {
    return blob.slice(0, blob.size, blob.type);
  }
  /**
   * Create a new DataView with the contents of the original.
   */


  function copyDataView(dataView, state) {
    return new state.Constructor(copyArrayBuffer(dataView.buffer, undefined));
  }
  /**
   * Deeply copy the indexed values in the array.
   */


  function copyArrayLoose(array, state) {
    var clone = new state.Constructor(); // set in the cache immediately to be able to reuse the object recursively

    state.cache.set(array, clone);

    for (var index = 0, length_2 = array.length; index < length_2; ++index) {
      clone[index] = state.copier(array[index], state);
    }

    return clone;
  }

  function createCopier(options) {
    var normalizedOptions = Object.assign({}, DEFAULT_LOOSE_OPTIONS, options);
    var tagSpecificCopiers = getTagSpecificCopiers(normalizedOptions);
    var array = tagSpecificCopiers.Array,
        object = tagSpecificCopiers.Object;

    function copier(value, state) {
      state.prototype = state.Constructor = undefined;

      if (!value || typeof value !== 'object') {
        return value;
      }

      if (state.cache.has(value)) {
        return state.cache.get(value);
      }

      state.prototype = Object.getPrototypeOf(value);
      state.Constructor = state.prototype && state.prototype.constructor; // plain objects

      if (!state.Constructor || state.Constructor === Object) {
        return object(value, state);
      } // arrays


      if (Array.isArray(value)) {
        return array(value, state);
      }

      var tagSpecificCopier = tagSpecificCopiers[getTag(value)];

      if (tagSpecificCopier) {
        return tagSpecificCopier(value, state);
      }

      return typeof value.then === 'function' ? value : object(value, state);
    }

    return function copy(value) {
      return copier(value, {
        Constructor: undefined,
        cache: createCache(),
        copier: copier,
        prototype: undefined
      });
    };
  }

  function getTagSpecificCopiers(options) {
    return {
      Arguments: options.object,
      Array: options.array,
      ArrayBuffer: options.arrayBuffer,
      Blob: options.blob,
      Boolean: copyPrimitiveWrapper,
      DataView: options.dataView,
      Date: options.date,
      Error: options.error,
      Float32Array: options.arrayBuffer,
      Float64Array: options.arrayBuffer,
      Int8Array: options.arrayBuffer,
      Int16Array: options.arrayBuffer,
      Int32Array: options.arrayBuffer,
      Map: options.map,
      Number: copyPrimitiveWrapper,
      Object: options.object,
      Promise: copySelf,
      RegExp: options.regExp,
      Set: options.set,
      String: copyPrimitiveWrapper,
      WeakMap: copySelf,
      WeakSet: copySelf,
      Uint8Array: options.arrayBuffer,
      Uint8ClampedArray: options.arrayBuffer,
      Uint16Array: options.arrayBuffer,
      Uint32Array: options.arrayBuffer,
      Uint64Array: options.arrayBuffer
    };
  }

  function copyPrimitiveWrapper(primitiveObject, state) {
    return new state.Constructor(primitiveObject.valueOf());
  }

  function copySelf(value, _state) {
    return value;
  }

  _export("createCopier", createCopier);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4271dRPophJg7s9S9Xs78Y9", "fastCopy", undefined);

      toStringFunction = Function.prototype.toString;
      create = Object.create;
      SUPPORTS_SYMBOL = typeof Object.getOwnPropertySymbols === 'function';
      copyObjectLoose = SUPPORTS_SYMBOL ? copyObjectLooseModern : copyObjectLooseLegacy;
      getRegExpFlags = /test/g.flags === 'g' ? getRegExpFlagsModern : getRegExpFlagsLegacy;
      toStringObject = Object.prototype.toString;

      LegacyCache =
      /** @class */
      function () {
        function LegacyCache() {
          this._keys = [];
          this._values = [];
        }

        LegacyCache.prototype.has = function (key) {
          return !!~this._keys.indexOf(key);
        };

        LegacyCache.prototype.get = function (key) {
          return this._values[this._keys.indexOf(key)];
        };

        LegacyCache.prototype.set = function (key, value) {
          this._keys.push(key);

          this._values.push(value);
        };

        return LegacyCache;
      }();

      getTag = typeof Symbol !== 'undefined' ? getTagModern : getTagLegacy;
      createCache = typeof WeakMap !== 'undefined' ? createCacheModern : createCacheLegacy;
      DEFAULT_LOOSE_OPTIONS = {
        array: copyArrayLoose,
        arrayBuffer: copyArrayBuffer,
        blob: copyBlob,
        dataView: copyDataView,
        date: copyDate,
        error: copySelf,
        map: copyMapLoose,
        object: copyObjectLoose,
        regExp: copyRegExp,
        set: copySetLoose
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=48ee17a9c0491869180272dac56519ca139f623c.js.map