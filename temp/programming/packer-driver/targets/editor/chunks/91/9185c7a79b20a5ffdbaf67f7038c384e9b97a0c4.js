System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Sprite, Toggle, Vec3, BaseComponent, global, sourceManageSeletor, isChatShieldingUser, putChatShieldingUser, removeChatShieldingUser, SpriteFramePathDefine, SkeletonPathDefine, SoundPathDefine, _dec, _class, _crd, ccclass, property, GIFT_ICON_CONFIG, Common_GiftUser;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../viewModel/GiftUserViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisChatShieldingUser(extras) {
    _reporterNs.report("isChatShieldingUser", "../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfputChatShieldingUser(extras) {
    _reporterNs.report("putChatShieldingUser", "../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfremoveChatShieldingUser(extras) {
    _reporterNs.report("removeChatShieldingUser", "../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteFramePathDefine(extras) {
    _reporterNs.report("SpriteFramePathDefine", "../sourceDefine/spriteDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkeletonPathDefine(extras) {
    _reporterNs.report("SkeletonPathDefine", "../sourceDefine/skeletonDefine", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      Toggle = _cc.Toggle;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      global = _unresolved_3.global;
      sourceManageSeletor = _unresolved_3.sourceManageSeletor;
    }, function (_unresolved_4) {
      isChatShieldingUser = _unresolved_4.isChatShieldingUser;
      putChatShieldingUser = _unresolved_4.putChatShieldingUser;
      removeChatShieldingUser = _unresolved_4.removeChatShieldingUser;
    }, function (_unresolved_5) {
      SpriteFramePathDefine = _unresolved_5.SpriteFramePathDefine;
    }, function (_unresolved_6) {
      SkeletonPathDefine = _unresolved_6.SkeletonPathDefine;
    }, function (_unresolved_7) {
      SoundPathDefine = _unresolved_7.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "be63cx3Ku1G+YXp0wWclBZL", "Common_GiftUser", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'instantiate', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'Toggle', 'UITransform', 'Vec3', 'WebView']);

      ({
        ccclass,
        property
      } = _decorator);

      /**
       * 礼物图标配置
       */
      _export("GIFT_ICON_CONFIG", GIFT_ICON_CONFIG = [{
        value: 1,
        spriteFramePath: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).img_icon_cock,
        skeletonPath: (_crd && SkeletonPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletonPathDefine({
          error: Error()
        }), SkeletonPathDefine) : SkeletonPathDefine).cock,
        dub: (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).cock,
        angle: 0,
        offset: new Vec3(0, 0)
      }, {
        value: 2,
        spriteFramePath: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).img_icon_egg,
        skeletonPath: (_crd && SkeletonPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletonPathDefine({
          error: Error()
        }), SkeletonPathDefine) : SkeletonPathDefine).egg,
        dub: (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).egg,
        angle: 360,
        offset: new Vec3(0, 0)
      }, {
        value: 3,
        spriteFramePath: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).img_icon_durian,
        skeletonPath: (_crd && SkeletonPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletonPathDefine({
          error: Error()
        }), SkeletonPathDefine) : SkeletonPathDefine).durian,
        dub: (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).durian,
        angle: 360,
        offset: new Vec3(20, 0)
      }, {
        value: 4,
        spriteFramePath: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).img_icon_rose,
        skeletonPath: (_crd && SkeletonPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletonPathDefine({
          error: Error()
        }), SkeletonPathDefine) : SkeletonPathDefine).rose,
        dub: (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).rose,
        angle: 0,
        offset: new Vec3(0, 0)
      }, {
        value: 5,
        spriteFramePath: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).img_icon_beer,
        skeletonPath: (_crd && SkeletonPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletonPathDefine({
          error: Error()
        }), SkeletonPathDefine) : SkeletonPathDefine).beer,
        dub: (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).beer,
        angle: 0,
        offset: new Vec3(0, 0)
      }, {
        value: 6,
        spriteFramePath: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).img_icon_pan,
        skeletonPath: (_crd && SkeletonPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletonPathDefine({
          error: Error()
        }), SkeletonPathDefine) : SkeletonPathDefine).pan,
        dub: (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).pan,
        angle: 0,
        offset: new Vec3(-50, 25)
      }, {
        value: 7,
        spriteFramePath: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).img_icon_money,
        skeletonPath: (_crd && SkeletonPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletonPathDefine({
          error: Error()
        }), SkeletonPathDefine) : SkeletonPathDefine).money,
        dub: (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).money,
        angle: 0,
        offset: new Vec3(0, 0)
      }, {
        value: 8,
        spriteFramePath: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).img_icon_bucket,
        skeletonPath: (_crd && SkeletonPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletonPathDefine({
          error: Error()
        }), SkeletonPathDefine) : SkeletonPathDefine).bucket,
        dub: (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).bucket,
        angle: 0,
        offset: new Vec3(30, 0)
      }, {
        value: 9,
        spriteFramePath: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).img_icon_shoe,
        skeletonPath: (_crd && SkeletonPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletonPathDefine({
          error: Error()
        }), SkeletonPathDefine) : SkeletonPathDefine).shoe,
        dub: (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).shoe,
        angle: 360 * 5,
        offset: new Vec3(0, 0)
      }, {
        value: 10,
        spriteFramePath: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).img_icon_kiss,
        skeletonPath: (_crd && SkeletonPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletonPathDefine({
          error: Error()
        }), SkeletonPathDefine) : SkeletonPathDefine).kiss,
        dub: (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).kiss,
        angle: 0,
        offset: new Vec3(0, 0)
      }, {
        value: 11,
        spriteFramePath: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).img_icon_tomato,
        skeletonPath: (_crd && SkeletonPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletonPathDefine({
          error: Error()
        }), SkeletonPathDefine) : SkeletonPathDefine).tomato,
        dub: (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).tomato,
        angle: 360,
        offset: new Vec3(0, -20)
      }, {
        value: 12,
        spriteFramePath: (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
          error: Error()
        }), SpriteFramePathDefine) : SpriteFramePathDefine).img_icon_brick,
        skeletonPath: (_crd && SkeletonPathDefine === void 0 ? (_reportPossibleCrUseOfSkeletonPathDefine({
          error: Error()
        }), SkeletonPathDefine) : SkeletonPathDefine).brick,
        dub: (_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).brick,
        angle: 360,
        offset: new Vec3(0, 0)
      }]);

      _export("Common_GiftUser", Common_GiftUser = (_dec = ccclass('Common_GiftUser'), _dec(_class = class Common_GiftUser extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          /**全局的播放次数 */
          this.playCount = 1;
          this.props = {
            isUser: true,
            gameType: undefined,
            memberId: undefined,
            head: undefined,
            name: undefined,
            gold: 0
          };
          this.events = {
            selectGift: (value, count) => {}
          };
          this.propertyNode = {
            props_head: new Node(),
            props_label_gift_userName: new Label(),
            props_label_gift_userGold: new Label(),
            props_gift_on_off: new Node(),
            props_top_croupier: new Node(),
            props_heguan_yxx: new Node(),
            props_heguan_bandar: new Node(),
            props_top_user: new Node(),
            props_play_number: new Node(),
            props_gift_groups: new Node(),
            props_btn_gift_box: new Node(),
            props_spr_gift_bg_user: new Node(),
            props_spr_gift_bg_dealer: new Node()
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.node.on(Node.EventType.TOUCH_END, () => {
            this.node.active = false;
          });
          this.propertyNode.props_gift_on_off.on(Toggle.EventType.TOGGLE, e => {
            const key = "gift_" + this.props.memberId;

            if (e.isChecked) {
              (_crd && putChatShieldingUser === void 0 ? (_reportPossibleCrUseOfputChatShieldingUser({
                error: Error()
              }), putChatShieldingUser) : putChatShieldingUser)(this.props.memberId);
            } else {
              (_crd && removeChatShieldingUser === void 0 ? (_reportPossibleCrUseOfremoveChatShieldingUser({
                error: Error()
              }), removeChatShieldingUser) : removeChatShieldingUser)(this.props.memberId);
            }
          });
          this.propertyNode.props_play_number.children.forEach(v => {
            v.on(Toggle.EventType.TOGGLE, e => {
              if (e.isChecked) {
                this.playCount = parseInt(v.name.replace("toggle_", ""));
              } else {
                this.playCount = 1;
              }
            });
          });
        }

        getPlayNumber() {
          const toggles = this.propertyNode.props_play_number.children;

          for (let i = 0; i < toggles.length; i++) {
            const toggle = toggles[i].getComponent(Toggle);

            if (toggle.isChecked) {
              return parseInt(toggle.node.name.replace("toggle_", ""));
            }
          }

          return 1;
        }

        useProps(key, value) {
          if (key === 'isUser') {} else if (key === 'head') {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).loadHeadSprite(value.cur, this.propertyNode.props_head.getComponent(Sprite));
          } else if (key === 'name') {
            this.propertyNode.props_label_gift_userName.string = value.cur;
          } else if (key === 'gold') {
            this.propertyNode.props_label_gift_userGold.string = this.props.gold.formatAmountWithLetter();
          } else if (key === 'gameType') {} else if (key === 'memberId') {
            this.propertyNode.props_gift_on_off.getComponent(Toggle).isChecked = (_crd && isChatShieldingUser === void 0 ? (_reportPossibleCrUseOfisChatShieldingUser({
              error: Error()
            }), isChatShieldingUser) : isChatShieldingUser)(this.props.memberId);
          } else if (key === '_setDone') {
            this.propertyNode.props_top_user.active = this.props.isUser;
            this.propertyNode.props_spr_gift_bg_user.active = this.props.isUser;
            this.propertyNode.props_spr_gift_bg_dealer.active = !this.props.isUser; // this.propertyNode.props_top_croupier.active = !this.props.isUser;
            // if (this.propertyNode.props_top_croupier.active) {
            // 	this.propertyNode.props_heguan_yxx.active = this.props.gameType === GameType.YXX;
            // 	this.propertyNode.props_heguan_bandar.active = this.props.gameType === GameType.BANDAR_QIU_QIU || this.props.gameType === GameType.BANDAR;
            // }
          }
        }

        bindUI() {
          const toggle = this.propertyNode.props_play_number.children.find(v => v.name === "toggle_" + this.playCount);
          toggle && (toggle.getComponent(Toggle).isChecked = true);
          this.initIconConfig();
        }

        initIconConfig() {
          this.propertyNode.props_btn_gift_box.active = false;
          GIFT_ICON_CONFIG.forEach(v => {
            const iconNode = instantiate(this.propertyNode.props_btn_gift_box);
            iconNode.active = true;
            iconNode.getChildByName("spr_gift_icon").getComponent(Sprite).spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)("common").getFile(v.spriteFramePath).source;
            this.propertyNode.props_gift_groups.addChild(iconNode);
            iconNode.on(Node.EventType.TOUCH_END, () => {
              this.events.selectGift(v.value, this.playCount);
              this.node.active = false;
            });
          });
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9185c7a79b20a5ffdbaf67f7038c384e9b97a0c4.js.map