System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Sprite, instantiate, sp, tween, ViewModel, GIFT_ICON_CONFIG, commonAudio, sourceManageSeletor, PrefabPathDefine, isChatShieldingUser, SoundPathDefine, GiftUserViewModel, _crd, BANKER_ID, GameType, initStatus;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommon_GiftUser(extras) {
    _reporterNs.report("Common_GiftUser", "../components/Common_GiftUser", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Common_GiftUser", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Common_GiftUser", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGIFT_ICON_CONFIG(extras) {
    _reporterNs.report("GIFT_ICON_CONFIG", "../components/Common_GiftUser", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcommonAudio(extras) {
    _reporterNs.report("commonAudio", "../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisChatShieldingUser(extras) {
    _reporterNs.report("isChatShieldingUser", "../../utils/tool", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      instantiate = _cc.instantiate;
      sp = _cc.sp;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
    }, function (_unresolved_3) {
      GIFT_ICON_CONFIG = _unresolved_3.GIFT_ICON_CONFIG;
    }, function (_unresolved_4) {
      commonAudio = _unresolved_4.commonAudio;
      sourceManageSeletor = _unresolved_4.sourceManageSeletor;
    }, function (_unresolved_5) {
      PrefabPathDefine = _unresolved_5.PrefabPathDefine;
    }, function (_unresolved_6) {
      isChatShieldingUser = _unresolved_6.isChatShieldingUser;
    }, function (_unresolved_7) {
      SoundPathDefine = _unresolved_7.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f0c1aQRrJ5FoKuWaed2rvqI", "GiftUserViewModel", undefined);

      __checkObsolete__(['Node', 'Sprite', 'Vec3', 'instantiate', 'sp', 'tween']);

      _export("BANKER_ID", BANKER_ID = "1100000");

      _export("GameType", GameType = /*#__PURE__*/function (GameType) {
        GameType[GameType["YXX"] = 1] = "YXX";
        GameType[GameType["DRAGON_TIGER"] = 2] = "DRAGON_TIGER";
        GameType[GameType["BANDAR_QIU_QIU"] = 3] = "BANDAR_QIU_QIU";
        GameType[GameType["BANDAR"] = 4] = "BANDAR";
        return GameType;
      }({}));

      initStatus = false;
      GiftUserViewModel = class GiftUserViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Common_GiftUser');
        }

        begin() {
          initStatus = false;
        }

        connect(initProps) {
          if (initProps === void 0) {
            initProps = {};
          }

          this.inject(initProps, () => {
            return {};
          });
          return this;
        }

        /**
         * 显示礼物窗口
         * @param parent 
         * @param gameType 游戏类型
         * @param userInfo 
         * @param startPos 
         * @param endPos 
         */
        static show(parent, gameType, userInfo, callback) {
          if (initStatus) {
            return;
          }

          initStatus = true;

          if (this.instance) {
            this.instance.viewNode.active = true;
            this.instance.viewNode.setSiblingIndex(this.instance.viewNode.parent.children.length);
            initStatus = false;
          } else {
            this.instance = new GiftUserViewModel().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)("common").getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine).GIFT_USER).source).appendTo(parent);
          }

          var memberId = userInfo ? userInfo.memberId : BANKER_ID;
          (_crd && commonAudio === void 0 ? (_reportPossibleCrUseOfcommonAudio({
            error: Error()
          }), commonAudio) : commonAudio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).spin);
          this.instance.setProps({
            isUser: userInfo ? true : false,
            gameType: gameType,
            head: userInfo ? userInfo.head : 0,
            gold: userInfo ? userInfo.gold : 0,
            name: userInfo ? userInfo.name : "",
            memberId: userInfo ? userInfo.memberId : ""
          }).setEvent({
            selectGift: (value, count) => {
              for (var i = 0; i < count; i++) {
                window.setTimeout(() => {
                  callback && callback(value, memberId);
                }, 200 * i);
              }
            }
          });
        }
        /**
         * 飞礼物
         * @param parent 
         * @param fromMemberId 开始的用户id
         * @param toMemberId 结束的用户id
         * @param startPos 
         * @param endPos 
         * @param value 
         * @param count 执行次数
         */


        static flyGift(parent, fromMemberId, toMemberId, startPos, endPos, value) {
          if ((_crd && isChatShieldingUser === void 0 ? (_reportPossibleCrUseOfisChatShieldingUser({
            error: Error()
          }), isChatShieldingUser) : isChatShieldingUser)(fromMemberId) || (_crd && isChatShieldingUser === void 0 ? (_reportPossibleCrUseOfisChatShieldingUser({
            error: Error()
          }), isChatShieldingUser) : isChatShieldingUser)(toMemberId)) {
            return;
          }

          if (!startPos || !endPos) {
            return;
          }

          var sourceFile = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)("common").getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).GIFT_ANIMATION);

          if (!sourceFile) {
            console.error((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine).GIFT_ANIMATION, " prefab not fround");
            return;
          }

          var iconConfig = this.getIconConfig(value);

          if (!iconConfig) {
            console.error("gift spriteFrame is null");
            return;
          }

          var node = instantiate(sourceFile.source);
          parent.addChild(node);
          var sprGiftNode = node.getChildByName("props_spr_gift").getComponent(Sprite);
          sprGiftNode.spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)("common").getFile(iconConfig.spriteFramePath).source;
          var giftAnimationNode = node.getChildByName("props_gift_animation");
          var skeleton = giftAnimationNode.getComponent(sp.Skeleton);
          var source = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)("common").getFile(iconConfig.skeletonPath).source;
          skeleton.skeletonData = source;
          skeleton.setAnimation(0, "animation", false);
          skeleton.paused = true;
          giftAnimationNode.active = false;
          skeleton.setCompleteListener(() => {
            node.destroy();
          });
          node.setWorldPosition(startPos);
          endPos = endPos.add(iconConfig.offset);
          tween(node).to(0.5, {
            worldPosition: endPos,
            angle: iconConfig.angle
          }).call(() => {
            if (node.isValid) {
              giftAnimationNode.active = true;
              sprGiftNode.node.active = false;
              skeleton.paused = false;
              (_crd && commonAudio === void 0 ? (_reportPossibleCrUseOfcommonAudio({
                error: Error()
              }), commonAudio) : commonAudio).playOneShot(iconConfig.dub);
            }
          }).start();
        }

        static getIconConfig(value) {
          var iconConfig = (_crd && GIFT_ICON_CONFIG === void 0 ? (_reportPossibleCrUseOfGIFT_ICON_CONFIG({
            error: Error()
          }), GIFT_ICON_CONFIG) : GIFT_ICON_CONFIG).find(v => v.value === value);

          if (iconConfig) {
            return iconConfig;
          }

          return undefined;
        }

      };
      GiftUserViewModel.instance = null;

      _export("default", GiftUserViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eb3ef9602a2e5a2d88f65d44eb72ac7ca05c4d7a.js.map