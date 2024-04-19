System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Prefab, Crash_DataManager, Crash_ViewBase, Crash_RecordItem, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Crash_RecordListLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCrash_DataManager(extras) {
    _reporterNs.report("Crash_DataManager", "../manager/Crash_DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_ViewBase(extras) {
    _reporterNs.report("Crash_ViewBase", "../BaseView/Crash_ViewBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_RecordItem(extras) {
    _reporterNs.report("Crash_RecordItem", "./Crash_RecordItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      Crash_DataManager = _unresolved_2.Crash_DataManager;
    }, function (_unresolved_3) {
      Crash_ViewBase = _unresolved_3.Crash_ViewBase;
    }, function (_unresolved_4) {
      Crash_RecordItem = _unresolved_4.Crash_RecordItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "38a5avllPtBFbgPOK6G0gIi", "Crash_RecordListLayer", undefined);

      __checkObsolete__(['_decorator', 'Node', 'instantiate', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Crash_RecordListLayer", Crash_RecordListLayer = (_dec = ccclass('RecordListLayer'), _dec2 = property(Prefab), _dec(_class = (_class2 = class Crash_RecordListLayer extends (_crd && Crash_ViewBase === void 0 ? (_reportPossibleCrUseOfCrash_ViewBase({
        error: Error()
      }), Crash_ViewBase) : Crash_ViewBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "recordItem", _descriptor, this);
        }

        init() {
          this.node.destroyAllChildren();
          let OddsList = (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
            error: Error()
          }), Crash_DataManager) : Crash_DataManager).getInstance().getUserInfo().getOddsList();
          OddsList.forEach((res, index) => {
            let node = instantiate(this.recordItem);
            node.getChildByName('record_new').active = false;

            if (index === 9) {
              node.getChildByName('record_new').active = true;
            }

            node.getComponent(_crd && Crash_RecordItem === void 0 ? (_reportPossibleCrUseOfCrash_RecordItem({
              error: Error()
            }), Crash_RecordItem) : Crash_RecordItem).init(res);
            node.active = true;
            this.node.addChild(node);
          });
        }

        update(deltaTime) {
          if ((_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
            error: Error()
          }), Crash_DataManager) : Crash_DataManager).getInstance().getCrashStageVo() && (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
            error: Error()
          }), Crash_DataManager) : Crash_DataManager).getInstance().getCrashStageVo().gameType === 3) {
            this.init();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "recordItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aa1197188d307c9dc2d4e2cd40068a5816b4397a.js.map