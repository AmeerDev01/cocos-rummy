System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, tween, Node, math, Facade, ProxyDefine, _crd, Vec3, EffectType, bindClickEvent, getRootPosition, getUrlParams, getBgProxy, getLocalCacheDataProxy, getSocketProxy, getSlotProxy;

  function convertToMandK(number) {
    if (number >= 1000000) {
      var M = (number / 1000000).toFixed(2);
      return M + "M";
    } else if (number >= 1000) {
      var K = (number / 1000).toFixed(2);
      return K + "k";
    } else {
      return "" + number;
    }
  }

  function _reportPossibleCrUseOfFacade(extras) {
    _reporterNs.report("Facade", "../Framework/care/Facade", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyDefine(extras) {
    _reporterNs.report("ProxyDefine", "./Const/ProxyDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBgProxy(extras) {
    _reporterNs.report("BgProxy", "./Proxy/BgProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalCacheDataProxy(extras) {
    _reporterNs.report("LocalCacheDataProxy", "./Proxy/LocalCacheDataProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSocketProxy(extras) {
    _reporterNs.report("SocketProxy", "./Proxy/SocketProxy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSlotProxy(extras) {
    _reporterNs.report("SlotProxy", "./Proxy/SlotProxy", _context.meta, extras);
  }

  _export("convertToMandK", convertToMandK);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      tween = _cc.tween;
      Node = _cc.Node;
      math = _cc.math;
    }, function (_unresolved_2) {
      Facade = _unresolved_2.default;
    }, function (_unresolved_3) {
      ProxyDefine = _unresolved_3.ProxyDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5508duSEClOEa+GwTgzQ9rn", "utils", undefined);

      __checkObsolete__(['tween', 'Node', 'math', 'NodeEventType']);

      ({
        Vec3
      } = math);

      _export("EffectType", EffectType = /*#__PURE__*/function (EffectType) {
        EffectType["SCALE"] = "scale";
        return EffectType;
      }({}));

      _export("bindClickEvent", bindClickEvent = function bindClickEvent(node, effectType, handler) {
        if (effectType === void 0) {
          effectType = EffectType.SCALE;
        }

        node.on(Node.EventType.TOUCH_START, () => {
          tween(node).to(0.1, {
            position: new Vec3(node.getPosition().x, node.getPosition().y - 5)
          }).start();
        });
        node.on(Node.EventType.TOUCH_END, () => {
          tween(node).to(0.1, {
            position: new Vec3(node.getPosition().x, node.getPosition().y + 5)
          }).call(() => {
            handler && handler();
          }).start();
        });
      });

      _export("getRootPosition", getRootPosition = (node, totalX, totalY) => {
        if (node.parent.name === 'Canvas') {
          return new Vec3(totalX, totalY, 0);
        } else {
          var x = node.position.x + node.parent.position.x;
          var y = node.position.y + node.parent.position.y;
          return getRootPosition(node.parent, x, y);
        }
      });

      _export("getUrlParams", getUrlParams = name => {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substring(1).match(reg);

        if (r != null) {
          return unescape(r[2]);
        }

        return null;
      });

      _export("getBgProxy", getBgProxy = () => {
        return (_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
          error: Error()
        }), Facade) : Facade).Instance.retrieveProxy((_crd && ProxyDefine === void 0 ? (_reportPossibleCrUseOfProxyDefine({
          error: Error()
        }), ProxyDefine) : ProxyDefine).BG);
      });

      _export("getLocalCacheDataProxy", getLocalCacheDataProxy = () => {
        return (_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
          error: Error()
        }), Facade) : Facade).Instance.retrieveProxy((_crd && ProxyDefine === void 0 ? (_reportPossibleCrUseOfProxyDefine({
          error: Error()
        }), ProxyDefine) : ProxyDefine).LOCAL_CACHE_DATA);
      });

      _export("getSocketProxy", getSocketProxy = () => {
        return (_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
          error: Error()
        }), Facade) : Facade).Instance.retrieveProxy((_crd && ProxyDefine === void 0 ? (_reportPossibleCrUseOfProxyDefine({
          error: Error()
        }), ProxyDefine) : ProxyDefine).WEBSOCKET);
      });

      _export("getSlotProxy", getSlotProxy = () => {
        return (_crd && Facade === void 0 ? (_reportPossibleCrUseOfFacade({
          error: Error()
        }), Facade) : Facade).Instance.retrieveProxy((_crd && ProxyDefine === void 0 ? (_reportPossibleCrUseOfProxyDefine({
          error: Error()
        }), ProxyDefine) : ProxyDefine).SLOT);
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5c7b560a084c554b50f051f6f7429ca4a1d26f56.js.map