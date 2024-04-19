System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, find, instantiate, Node, PrefabPathDefine, sourceManageSeletor, effectFade, getNodePositionInCanvas, Guide, _crd;

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../hall/sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeffectFade(extras) {
    _reporterNs.report("effectFade", "./NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodePositionInCanvas(extras) {
    _reporterNs.report("getNodePositionInCanvas", "./tool", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Prefab = _cc.Prefab;
      find = _cc.find;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      PrefabPathDefine = _unresolved_2.PrefabPathDefine;
    }, function (_unresolved_3) {
      sourceManageSeletor = _unresolved_3.sourceManageSeletor;
    }, function (_unresolved_4) {
      effectFade = _unresolved_4.effectFade;
    }, function (_unresolved_5) {
      getNodePositionInCanvas = _unresolved_5.getNodePositionInCanvas;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d54e22UGvBN2rQ7KsSus4Hx", "Guide", undefined);

      __checkObsolete__(['Prefab', 'Widget', 'find', 'instantiate']);

      __checkObsolete__(['Node']);

      _export("default", Guide = class Guide {
        constructor(focusNode, explainNode) {
          this.focusNode = void 0;
          this.explainNode = void 0;
          this.mainBgNode = void 0;
          this.doneHandler = void 0;
          this.focusNode = focusNode;
          this.explainNode = explainNode;
        }

        creatorBg() {
          return new Promise((resovle, reject) => {
            (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine)._GUIDE_PANEL, Prefab).then(_ref => {
              var {
                source
              } = _ref;
              resovle(instantiate(source));
            }).catch(() => {
              reject('error');
            });
          });
        }

        begin() {
          this.creatorBg().then(bgNode => {
            this.mainBgNode = bgNode;
            find('Canvas').addChild(this.mainBgNode);
            (_crd && effectFade === void 0 ? (_reportPossibleCrUseOfeffectFade({
              error: Error()
            }), effectFade) : effectFade)(this.mainBgNode).enter();
            var position = (_crd && getNodePositionInCanvas === void 0 ? (_reportPossibleCrUseOfgetNodePositionInCanvas({
              error: Error()
            }), getNodePositionInCanvas) : getNodePositionInCanvas)(this.focusNode);

            var _focusNode = instantiate(this.focusNode);

            var _explainNode = instantiate(this.explainNode);

            _explainNode.active = true;

            _focusNode.setPosition(position);

            this.mainBgNode.addChild(_focusNode);
            this.mainBgNode.addChild(_explainNode);
            this.mainBgNode.once(Node.EventType.TOUCH_END, () => {
              (_crd && effectFade === void 0 ? (_reportPossibleCrUseOfeffectFade({
                error: Error()
              }), effectFade) : effectFade)(this.mainBgNode).out().then(() => {
                this.mainBgNode.destroy();
              });
              this.doneHandler && this.doneHandler();
            });
          });
          return this;
        }

        bindDone(done) {
          this.doneHandler = done;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=958e3be6de4e24e482474a8a49d82a43dca359a8.js.map