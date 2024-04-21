System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, ViewType, Crash_ViewBase;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "afc809VJEVOd6oourdJYUZe", "Crash_ViewBase", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ViewType", ViewType = /*#__PURE__*/function (ViewType) {
        ViewType[ViewType["Frame"] = 1] = "Frame";
        ViewType[ViewType["Dialog"] = 2] = "Dialog";
        ViewType[ViewType["Tips"] = 3] = "Tips";
        ViewType[ViewType["Top"] = 4] = "Top";
        return ViewType;
      }({}));

      _export("Crash_ViewBase", Crash_ViewBase = (_dec = ccclass('ViewBase'), _dec(_class = class Crash_ViewBase extends Component {
        constructor() {
          super(...arguments);
          this._viewType = ViewType.Frame;
          this._name = "";
          this._config = null;
          this._nodes = {};
        }

        getViewType() {
          return this._viewType;
        }

        _init() {
          console.log("ViewBase init");

          var dealChilds = node => {
            var children = node.children;

            for (var i = 0; i < children.length; ++i) {
              var child = children[i];
              this._nodes[child.name] = child;
              dealChilds(child);
            }
          };

          dealChilds(this.node);
        }

        pushTo() {}

        addTo() {}

        pop() {}

        setName(name) {
          this._name = name;
        }

        getName() {
          return this._name;
        }

        setConfig(config) {
          this._config = config;
        }

        onLoad() {
          this._init();
        }

        onDestroy() {}

        start() {}

        update(ft) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=860a3337bbd99ecc97f1d508df74061b3f50e048.js.map