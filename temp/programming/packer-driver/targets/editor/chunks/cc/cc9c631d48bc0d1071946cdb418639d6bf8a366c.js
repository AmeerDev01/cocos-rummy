System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, instantiate, Prefab, global, Crash_ViewBase, Crash_DataManager, Crash_WsManager, AudioManager, SoundList, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Crash_TopNavigationLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_ViewBase(extras) {
    _reporterNs.report("Crash_ViewBase", "../BaseView/Crash_ViewBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_DataManager(extras) {
    _reporterNs.report("Crash_DataManager", "../manager/Crash_DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_WsManager(extras) {
    _reporterNs.report("Crash_WsManager", "../net/Crash_WsManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../manager/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundList(extras) {
    _reporterNs.report("SoundList", "../manager/AudioManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Node = _cc.Node;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      global = _unresolved_2.global;
    }, function (_unresolved_3) {
      Crash_ViewBase = _unresolved_3.Crash_ViewBase;
    }, function (_unresolved_4) {
      Crash_DataManager = _unresolved_4.Crash_DataManager;
    }, function (_unresolved_5) {
      Crash_WsManager = _unresolved_5.default;
    }, function (_unresolved_6) {
      AudioManager = _unresolved_6.AudioManager;
      SoundList = _unresolved_6.SoundList;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f9bf59v5ltNDZFrNDiF19cZ", "Crash_TopNavigationLayer", undefined);

      __checkObsolete__(['_decorator', 'director', 'Label', 'Node', 'instantiate', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Crash_TopNavigationLayer", Crash_TopNavigationLayer = (_dec = ccclass('TopNavigationLayer'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec(_class = (_class2 = class Crash_TopNavigationLayer extends (_crd && Crash_ViewBase === void 0 ? (_reportPossibleCrUseOfCrash_ViewBase({
        error: Error()
      }), Crash_ViewBase) : Crash_ViewBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "game_teen", _descriptor, this);

          _initializerDefineProperty(this, "game_settings", _descriptor2, this);

          this.timeAccumulator = 0;
        }

        start() {
          this._nodes['backMian'].on(Node.EventType.TOUCH_END, () => {
            (_crd && Crash_WsManager === void 0 ? (_reportPossibleCrUseOfCrash_WsManager({
              error: Error()
            }), Crash_WsManager) : Crash_WsManager).getInstance().closeConnect();
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).getInstance().closeMusic(() => {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).closeSubGame();
            });
          });

          this._nodes['btn_history'].on(Node.EventType.TOUCH_END, () => {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).buttonClick);
            let node = instantiate(this.game_teen);
            this.node.parent.getChildByName('tips').addChild(node);
          });

          this._nodes['btn_seting'].on(Node.EventType.TOUCH_END, () => {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).getInstance().playSound((_crd && SoundList === void 0 ? (_reportPossibleCrUseOfSoundList({
              error: Error()
            }), SoundList) : SoundList).buttonClick);
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).openPersonCenter(2); // let node=instantiate(this.game_settings)
            // this.node.parent.getChildByName('tips').addChild(node)
          });
        }

        update(deltaTime) {
          this.timeAccumulator += deltaTime;

          if (this.timeAccumulator >= 1) {
            this.timeAccumulator = 0;
            const userinfo = (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
              error: Error()
            }), Crash_DataManager) : Crash_DataManager).getInstance().getUserInfo();

            if (userinfo && userinfo.getRoomInfoVos()) {
              let RoomInfoVos = userinfo.getRoomInfoVos();
              this._nodes['label_count'].getComponent(Label).string = RoomInfoVos.length;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "game_teen", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "game_settings", [_dec3], {
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
//# sourceMappingURL=cc9c631d48bc0d1071946cdb418639d6bf8a366c.js.map