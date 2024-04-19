System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, sp, BaseComponent, SkeletonAnimationPlayer, starlight_Audio, SoundPathDefine, _dec, _class, _crd, ccclass, property, ROLE_STATE, Starlight_RoleView;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletonAnimationPlayer(extras) {
    _reporterNs.report("SkeletonAnimationPlayer", "../SkeletonPlay", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstarlight_Audio(extras) {
    _reporterNs.report("starlight_Audio", "../index", _context.meta, extras);
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
      SkeletonAnimationPlayer = _unresolved_3.default;
    }, function (_unresolved_4) {
      starlight_Audio = _unresolved_4.starlight_Audio;
    }, function (_unresolved_5) {
      SoundPathDefine = _unresolved_5.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1c908geNEROfZ5LOZuXZuBd", "Starlight_RoleView", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'Layout', 'Node', 'ScrollView', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);
      ROLE_STATE = {
        MAIN: "idle",
        ATTACK: "idle_j"
      };

      _export("Starlight_RoleView", Starlight_RoleView = (_dec = ccclass('Starlight_RoleView'), _dec(_class = class Starlight_RoleView extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.ani = void 0;
          this.propertyNode = {
            props_princess: new Node(),
            props_princess2: new Node(),
            props_flash: new Node()
          };
          this.props = {
            roleAttack: 0,
            gameType: 0
          };
          this.events = {};
        }

        start() {
          this.ani = new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
            error: Error()
          }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.propertyNode.props_princess.getComponent(sp.Skeleton), ROLE_STATE.MAIN, true, () => {});
        }

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === 'gameType') {
            new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
              error: Error()
            }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.propertyNode.props_princess.getComponent(sp.Skeleton), ROLE_STATE.MAIN, true).playAnimation(); // if (this.props.gameType === GameType.MAIN) {
            // } else if (this.props.gameType === GameType.SUBGAME1) {
            // 	new SkeletonAnimationPlayer(this.propertyNode.props_princess.getComponent(sp.Skeleton), ROLE_STATE.ATTACK, false).playAnimation();
            // }
          }

          if (key === 'roleAttack') {
            if (value.cur === 0) {
              if (this.ani) {
                (_crd && starlight_Audio === void 0 ? (_reportPossibleCrUseOfstarlight_Audio({
                  error: Error()
                }), starlight_Audio) : starlight_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                  error: Error()
                }), SoundPathDefine) : SoundPathDefine).THOR_SMILES);
                this.ani = new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
                  error: Error()
                }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.propertyNode.props_princess.getComponent(sp.Skeleton), ROLE_STATE.MAIN, true, () => {});
                this.ani.playAnimation();
              }
            } else if (value.cur === 1) {
              if (this.ani) {
                this.ani.changeAnimation(ROLE_STATE.ATTACK, false, () => {
                  this.ani.changeAnimation(ROLE_STATE.MAIN, true, () => {});
                });
              }
            } else if (value.cur === 2) {
              this.propertyNode.props_princess.active = false;
              this.propertyNode.props_princess2.active = true;
              new (_crd && SkeletonAnimationPlayer === void 0 ? (_reportPossibleCrUseOfSkeletonAnimationPlayer({
                error: Error()
              }), SkeletonAnimationPlayer) : SkeletonAnimationPlayer)(this.propertyNode.props_princess2.getComponent(sp.Skeleton), 'idle4', false, () => {
                this.propertyNode.props_princess.active = true;
                this.propertyNode.props_princess2.active = false;
              }).playAnimation();
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
//# sourceMappingURL=8ebe86e4f7890f31d332d47647a7c85717dae511.js.map