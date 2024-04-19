System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, math, Node, tween, Facade, ProxyDefine, _crd, Vec3, EffectType, bindClickEvent, getRootPosition, getUrlParams, getBgProxy, getLocalCacheDataProxy, getSocketProxy, getSlotProxy;

  function convertToMandK(number) {
    if (number >= 1000000) {
      let M = (number / 1000000).toFixed(2);
      return `${M}M`;
    } else if (number >= 1000) {
      let K = (number / 1000).toFixed(2);
      return `${K}k`;
    } else {
      return `${number}`;
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
      math = _cc.math;
      Node = _cc.Node;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      Facade = _unresolved_2.default;
    }, function (_unresolved_3) {
      ProxyDefine = _unresolved_3.ProxyDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1433fzCmftD/Yg4We4FW2jH", "phoenix_utils", undefined);

      __checkObsolete__(['math', 'Node', 'tween']);

      ({
        Vec3
      } = math);

      _export("EffectType", EffectType = /*#__PURE__*/function (EffectType) {
        EffectType["SCALE"] = "scale";
        return EffectType;
      }({}));

      _export("bindClickEvent", bindClickEvent = (node, effectType = EffectType.SCALE, handler) => {
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
          const x = node.position.x + node.parent.position.x;
          const y = node.position.y + node.parent.position.y;
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
//# sourceMappingURL=ac9b9936918359af8ed548a795b4697ae2f47725.js.map