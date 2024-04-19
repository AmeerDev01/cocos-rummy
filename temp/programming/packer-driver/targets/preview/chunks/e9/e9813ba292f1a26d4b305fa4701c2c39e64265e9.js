System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, sp, BaseComponent, GameType, SkeletonAnimationPlayer, thor_Audio, SoundPathDefine, _dec, _class, _crd, ccclass, property, ROLE_STATE, Thor_RoleView;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletonAnimationPlayer(extras) {
    _reporterNs.report("SkeletonAnimationPlayer", "../SkeletonPlay", _context.meta, extras);
  }

  function _reportPossibleCrUseOfthor_Audio(extras) {
    _reporterNs.report("thor_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      GameType = _unresolved_3.GameType;
    }, function (_unresolved_4) {
      SkeletonAnimationPlayer = _unresolved_4.default;
    }, function (_unresolved_5) {
      thor_Audio = _unresolved_5.thor_Audio;
    }, function (_unresolved_6) {
      SoundPathDefine = _unresolved_6.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0bf00y+paFI74cyWZxvQtju", "Thor_RoleView", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'Layout', 'Node', 'ScrollView', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);
      ROLE_STATE = {
        MAIN: "anima_3",
        SUBGAME1: "anima_2",
        ATTACK: "anima_1"
      };

      _export("Thor_RoleView", Thor_RoleView = (_dec = ccclass('Thor_RoleView'), _dec(_class = class Thor_RoleView extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.ani = void 0;
          this.propertyNode = {
            props_thor: new Node()
          };
          this.props = {
            roleAttack: false,
            gameType: 0
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === 'gameType') {
            if (this.props.gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).MAIN) {
              new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
                error: Error()
              }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.propertyNode.props_thor.getComponent(sp.Skeleton), ROLE_STATE.MAIN, true).playAnimation();
            } else if (this.props.gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME1) {
              new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
                error: Error()
              }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.propertyNode.props_thor.getComponent(sp.Skeleton), ROLE_STATE.SUBGAME1, true).playAnimation();
            }
          }

          if (key === 'roleAttack') {
            if (!value.cur) {
              if (!this.ani) {
                (_crd && thor_Audio === void 0 ? (_reportPossibleCrUseOfthor_Audio({
                  error: Error()
                }), thor_Audio) : thor_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                  error: Error()
                }), SoundPathDefine) : SoundPathDefine).THOR_SMILES);
                this.ani = this.propertyNode.props_thor && new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
                  error: Error()
                }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.propertyNode.props_thor.getComponent(sp.Skeleton), ROLE_STATE.ATTACK, false, () => {
                  if (this.props.gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                    error: Error()
                  }), GameType) : GameType).MAIN) {
                    this.ani.changeAnimation(ROLE_STATE.MAIN, true, () => {
                      this.ani = null;
                    });
                  } else {
                    this.ani.changeAnimation(ROLE_STATE.SUBGAME1, true, () => {
                      this.ani = null;
                    });
                  }
                });
                this.ani.playAnimation();
              }
            }
          }
        }

        startFalling() {}

        clearTheDrop() {}

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e9813ba292f1a26d4b305fa4701c2c39e64265e9.js.map