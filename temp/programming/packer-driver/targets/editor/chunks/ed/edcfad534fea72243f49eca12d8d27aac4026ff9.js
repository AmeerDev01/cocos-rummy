System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, Sprite, tween, Vec3, BaseComponent, getGoldShorten, omitStr, SpriteFramePathDefine, AnimationStatus, config, gameCacheData, global, sourceManageSeletor, GameType, _dec, _class, _crd, ccclass, property, Yxx_Head;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetGoldShorten(extras) {
    _reporterNs.report("getGoldShorten", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfomitStr(extras) {
    _reporterNs.report("omitStr", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteFramePathDefine(extras) {
    _reporterNs.report("SpriteFramePathDefine", "../sourceDefine/spriteDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationStatus(extras) {
    _reporterNs.report("AnimationStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetData(extras) {
    _reporterNs.report("BetData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeadType(extras) {
    _reporterNs.report("HeadType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameCacheData(extras) {
    _reporterNs.report("gameCacheData", "../serverType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../../../common/viewModel/GiftUserViewModel", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      getGoldShorten = _unresolved_3.getGoldShorten;
      omitStr = _unresolved_3.omitStr;
    }, function (_unresolved_4) {
      SpriteFramePathDefine = _unresolved_4.SpriteFramePathDefine;
    }, function (_unresolved_5) {
      AnimationStatus = _unresolved_5.AnimationStatus;
    }, function (_unresolved_6) {
      config = _unresolved_6.default;
    }, function (_unresolved_7) {
      gameCacheData = _unresolved_7.gameCacheData;
    }, function (_unresolved_8) {
      global = _unresolved_8.global;
    }, function (_unresolved_9) {
      sourceManageSeletor = _unresolved_9.sourceManageSeletor;
    }, function (_unresolved_10) {
      GameType = _unresolved_10.GameType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2fba9iDEOVNG5kXMkJVRBhs", "Yxx_Head", undefined);

      __checkObsolete__(['_decorator', 'Label', 'log', 'Node', 'Sprite', 'SpriteFrame', 'tween', 'UITransform', 'Vec3', 'Widget']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Yxx_Head", Yxx_Head = (_dec = ccclass('Yxx_Head'), _dec(_class = class Yxx_Head extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_gold: new Label(),
            props_gold_up: new Node(),
            props_name: new Label(),
            props_head: new Sprite(),
            props_btn_user: new Sprite(),
            props_head_bg_1: new Node(),
            props_head_bg_2: new Node(),
            props_head_bg_3: new Node(),
            props_head_bg_4: new Node()
          };
          this.props = {
            headType: null,
            betData: null,
            animationStatus: null
          };
          this.events = {
            giveGift: (value, memberId, num) => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_head.node.on(Node.EventType.TOUCH_END, () => {
            // 不能给自己发
            if (this.props.headType.userId && this.props.headType.userId !== (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
              error: Error()
            }), gameCacheData) : gameCacheData).memberId) {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).showGiftWindow((_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).YXX, {
                memberId: this.props.headType.userId,
                head: this.props.headType.icon,
                gold: this.props.headType.gold,
                name: this.props.headType.name
              }, (value, userInfo) => {
                this.events.giveGift(value, userInfo, 0); // global.flyGift("11", "2", this.node.parent.getComponent(UITransform).convertToWorldSpaceAR(config.gameOption.myHeadPosition),
                // 	this.propertyNode.props_head.node.worldPosition, value);
              });
            }
          });
        }

        useProps(key, value) {
          if (key === 'headType') {
            // log("head props =====", key, value);
            let oldData = value.pre;
            let newData = value.cur;
            if (!newData) return;

            if (!oldData) {
              this.changeUserType(newData.level);
              this.propertyNode.props_name.string = (_crd && omitStr === void 0 ? (_reportPossibleCrUseOfomitStr({
                error: Error()
              }), omitStr) : omitStr)(newData.name, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).gameOption.nicknameOmitLength);
              this.propertyNode.props_gold.string = (_crd && getGoldShorten === void 0 ? (_reportPossibleCrUseOfgetGoldShorten({
                error: Error()
              }), getGoldShorten) : getGoldShorten)(newData.gold);
              this.loadHead(newData.icon);
              return;
            }

            if (oldData.userId !== newData.userId) {
              this.changeUserType(newData.level);
              this.propertyNode.props_name.string = (_crd && omitStr === void 0 ? (_reportPossibleCrUseOfomitStr({
                error: Error()
              }), omitStr) : omitStr)(newData.name, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).gameOption.nicknameOmitLength);
              this.propertyNode.props_gold.string = (_crd && getGoldShorten === void 0 ? (_reportPossibleCrUseOfgetGoldShorten({
                error: Error()
              }), getGoldShorten) : getGoldShorten)(newData.gold);
              this.loadHead(newData.icon);
            } else {
              if (oldData.gold !== newData.gold) {
                this.propertyNode.props_gold.string = (_crd && getGoldShorten === void 0 ? (_reportPossibleCrUseOfgetGoldShorten({
                  error: Error()
                }), getGoldShorten) : getGoldShorten)(newData.gold);
              }
            }
          } else if (key === 'betData' && value.cur && !value.cur.isMyBet && value.cur.index === this.props.headType.index) {
            this.joggle();
          } else if (key === "animationStatus") {
            if (value.cur === (_crd && AnimationStatus === void 0 ? (_reportPossibleCrUseOfAnimationStatus({
              error: Error()
            }), AnimationStatus) : AnimationStatus).HEAD_ADD_GOLD) {
              !this.isMe() && this.playAddGlodAnimation(this.props.headType.winloss);
              this.propertyNode.props_gold.string = (_crd && getGoldShorten === void 0 ? (_reportPossibleCrUseOfgetGoldShorten({
                error: Error()
              }), getGoldShorten) : getGoldShorten)(this.props.headType.gold);
            }
          }
        }

        isMe() {
          return this.props.headType.userId === (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
            error: Error()
          }), gameCacheData) : gameCacheData).memberId;
        }
        /**
         * 加载玩家头像
         * @param headUrl 
         */


        loadHead(icon) {
          if (!icon || icon <= 0) {
            this.propertyNode.props_head.spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).DEFAULT_HEAD).source;
            return;
          }

          (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
            error: Error()
          }), global) : global).loadHeadSprite(icon, this.propertyNode.props_head);
        }
        /**
         * 头像抖动
         */


        joggle() {
          let index = this.props.headType.index;
          let offset = index < 3 ? 20 : -20;
          tween(this.propertyNode.props_btn_user.node).to(0.1, {
            position: new Vec3(offset, 0)
          }).to(0.1, {
            position: new Vec3(0, 0)
          }).start();
        }

        changeUserType(level) {
          this.propertyNode.props_head_bg_1.active = false;
          this.propertyNode.props_head_bg_2.active = false;
          this.propertyNode.props_head_bg_3.active = false; // this.propertyNode.props_head_bg_4.active = false;

          if (level === 1) {
            this.propertyNode.props_head_bg_1.active = true;
          } else if (level === 2) {
            this.propertyNode.props_head_bg_2.active = true;
          } else if (level === 3) {
            this.propertyNode.props_head_bg_3.active = true; // } else if (level === 4) {
            // 	this.propertyNode.props_head_bg_4.active = true;
          }
        }

        bindUI() {// this.playAddGlodAnimation(100);
        }

        initLocation(location) {
          this.node.setPosition(location);
        }

        playAddGlodAnimation(winloss) {
          // winloss = 1000;
          if (winloss <= 0) return;
          const startPosition = new Vec3(this.propertyNode.props_gold_up.position.x, this.propertyNode.props_gold_up.position.y);
          this.propertyNode.props_gold_up.getComponent(Label).string = "+" + (_crd && getGoldShorten === void 0 ? (_reportPossibleCrUseOfgetGoldShorten({
            error: Error()
          }), getGoldShorten) : getGoldShorten)(winloss);
          this.propertyNode.props_gold_up.active = true;
          tween(this.propertyNode.props_gold_up).by(1, {
            position: new Vec3(0, 30)
          }).call(() => {
            this.scheduleOnce(() => {
              this.propertyNode.props_gold_up.active = false;
              this.propertyNode.props_gold_up.setPosition(startPosition);
            }, 0.5);
          }).start();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=edcfad534fea72243f49eca12d8d27aac4026ff9.js.map