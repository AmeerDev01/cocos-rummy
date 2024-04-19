System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Vec3, BaseComponent, config, initHeadType, sourceManageSeletor, PrefabPathDefine, HeadViewModel, _dec, _class, _crd, ccclass, property, Yxx_HeadPanel;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitHeadType(extras) {
    _reporterNs.report("initHeadType", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeadType(extras) {
    _reporterNs.report("HeadType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeadViewModel(extras) {
    _reporterNs.report("HeadViewModel", "../viewModel/HeadViewModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      config = _unresolved_3.default;
      initHeadType = _unresolved_3.initHeadType;
    }, function (_unresolved_4) {
      sourceManageSeletor = _unresolved_4.sourceManageSeletor;
    }, function (_unresolved_5) {
      PrefabPathDefine = _unresolved_5.PrefabPathDefine;
    }, function (_unresolved_6) {
      HeadViewModel = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b6a73JdP6lGU5SJtjrvjIBB", "Yxx_HeadPanel", undefined);

      __checkObsolete__(['_decorator', 'log', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Yxx_HeadPanel", Yxx_HeadPanel = (_dec = ccclass('Yxx_HeadPanel'), _dec(_class = class Yxx_HeadPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {};
          this.props = {};
          this.events = {
            initSeat: seats => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {}

        bindUI() {}

        initHead(seats) {
          const isInit = seats.length === 0;
          (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).headLocations.forEach((v, index) => {
            const headType = isInit ? (_crd && initHeadType === void 0 ? (_reportPossibleCrUseOfinitHeadType({
              error: Error()
            }), initHeadType) : initHeadType)(index) : seats[index];
            headType.pos = new Vec3(v.x, v.y);
            let headViewModel = new (_crd && HeadViewModel === void 0 ? (_reportPossibleCrUseOfHeadViewModel({
              error: Error()
            }), HeadViewModel) : HeadViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine).HEAD).source).appendTo(this.node).connect().setProps({
              headType
            });
            headViewModel.comp.initLocation(headType.pos);
            isInit && seats.push(headType);
          });
          this.events.initSeat(seats);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4655b46dc0207acf2730b8dadeb1d4c96339e246.js.map