System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, tween, Vec3, Animation, instantiate, Sprite, SpriteFrame, BaseComponent, getNodeByNameDeep, omitStr, gameCacheData, config, global, bundleBanDarQiuQiu, mainGameViewModel, GameType, _dec, _class, _crd, ccclass, property, BandarQiuQiu_users;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfomitStr(extras) {
    _reporterNs.report("omitStr", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetData(extras) {
    _reporterNs.report("BetData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMemberInfoVo(extras) {
    _reporterNs.report("MemberInfoVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameCacheData(extras) {
    _reporterNs.report("gameCacheData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbundleBanDarQiuQiu(extras) {
    _reporterNs.report("bundleBanDarQiuQiu", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainGameViewModel(extras) {
    _reporterNs.report("mainGameViewModel", "../index", _context.meta, extras);
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
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Animation = _cc.Animation;
      instantiate = _cc.instantiate;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      getNodeByNameDeep = _unresolved_3.getNodeByNameDeep;
      omitStr = _unresolved_3.omitStr;
    }, function (_unresolved_4) {
      gameCacheData = _unresolved_4.gameCacheData;
    }, function (_unresolved_5) {
      config = _unresolved_5.default;
    }, function (_unresolved_6) {
      global = _unresolved_6.global;
    }, function (_unresolved_7) {
      bundleBanDarQiuQiu = _unresolved_7.bundleBanDarQiuQiu;
      mainGameViewModel = _unresolved_7.mainGameViewModel;
    }, function (_unresolved_8) {
      GameType = _unresolved_8.GameType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eb800mxKbFLXZ4N5oSoM/o2", "BandarQiuQiu_users", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'tween', 'Vec3', 'Animation', 'instantiate', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BandarQiuQiu_users", BandarQiuQiu_users = (_dec = ccclass('BandarQiuQiu_users'), _dec(_class = class BandarQiuQiu_users extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_spr_icon: new Node(),
            props_skeleton: new Node(),
            props_skeleton_win1: new Node()
          };
          this.props = {
            usersInfo: null,
            newBetData: null
          };
          this.events = {
            giveGift: (value, memberId, num) => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === "newBetData") {
            if (!value.cur) {
              return;
            } // 下注筹码不存在，不处理


            if (!(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).chipTypes.find(v => v.value === value.cur.betAmount)) {
              return;
            }

            this.playFlyChipWinAnimation(value.cur);
          }

          if (key === "usersInfo") {
            // window.setTimeout(() => {
            if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
              error: Error()
            }), mainGameViewModel) : mainGameViewModel).isUnMount || !value.cur) {
              return;
            }

            this.initUsers();
            value.cur.forEach((item, index) => {
              this.initBSUsers(item, item.index);
            }); // },5000)
          }
        }
        /**
        * 添加win动画效果
        * @param seatNum 榜上座位号
        */


        copyWinAnimation(seatNum) {
          //    console.log("copyWinAnimation");
          this.propertyNode.props_skeleton.removeAllChildren();
          let item = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).headLocations[seatNum];
          let winAnimation = instantiate(this.propertyNode.props_skeleton_win1);
          winAnimation.active = true;
          winAnimation.setPosition(item.x, item.y);
          this.propertyNode.props_skeleton.addChild(winAnimation);
        }
        /** 初始化榜上用户信息 */


        initBSUsers(usersInfo, number) {
          if (!this.node) {
            return;
          }

          ;
          let num = number + 1;
          const usersNode = this.node.children.find(item => item.name.startsWith("props_btn_users" + num));
          const userHead = this.node.children.find(item => item.name.startsWith("spr_user" + num));
          userHead.active = true;
          (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
            error: Error()
          }), global) : global).loadHeadSprite(usersInfo.icon, userHead.getComponent(Sprite)); //加载头像

          (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("Label_gold", usersNode).getComponent(Label).string = usersInfo.gold.formatAmountWithLetter();
          (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("Label_name", usersNode).getComponent(Label).string = (_crd && omitStr === void 0 ? (_reportPossibleCrUseOfomitStr({
            error: Error()
          }), omitStr) : omitStr)(usersInfo.memberName, 12);
        } // public createBSUsers(usersInfo) {
        // 	if(mainGameViewModel.isUnMount){ return }
        // 	usersInfo.forEach((item,index)=>{
        // 		this.initBSUsers(item,item.index)
        // 	})
        // }

        /**初始用户头像 */


        initUsers() {
          for (let i = 0; i < 6; i++) {
            if (this.node) {
              let num = i + 1;
              const usersNode = this.node.children.find(item => item.name.startsWith("props_btn_users" + num));
              const userHead = this.node.children.find(item => item.name.startsWith("spr_user" + num));
              userHead.active = false; // global.loadHeadSprite(usersInfo.icon,userHead.getComponent(Sprite));//加载头像

              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("Label_gold", usersNode).getComponent(Label).string = "";
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("Label_name", usersNode).getComponent(Label).string = "";
              (_crd && bundleBanDarQiuQiu === void 0 ? (_reportPossibleCrUseOfbundleBanDarQiuQiu({
                error: Error()
              }), bundleBanDarQiuQiu) : bundleBanDarQiuQiu).load(`img/head1/spriteFrame`, SpriteFrame, (err, sp) => {
                if (!err) {
                  userHead.getComponent(Sprite).spriteFrame = sp;
                }
              });
            }
          }
        }
        /** 赢钱的动画 +1K */


        playAddGold(betInfo, winGold) {
          let num = betInfo.index + 1;
          const usersNode = this.node.children.find(u => u.name.startsWith("props_btn_users" + num));
          const node = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("Label_gold_up", usersNode);
          node.getComponent(Label).string = "+" + betInfo.gold.formatAmountWithLetter();
          if (winGold <= 0) return;
          const startPosition = new Vec3(node.position.x, node.position.y);
          node.active = true;
          tween(node).by(1, {
            position: new Vec3(0, 30)
          }).call(() => {
            this.scheduleOnce(() => {
              node.active = false;
              node.setPosition(startPosition);
            }, 0.5);
          }).start();
        }
        /**飞金币的动画 */


        playFlyChipWinAnimation(betInfo) {
          if (betInfo.index > 6 || betInfo.memberId === (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
            error: Error()
          }), gameCacheData) : gameCacheData).memberId) {
            return;
          }

          let num = betInfo.index + 1;
          const usersNode = this.node.children.find(u => u.name.startsWith("props_btn_users" + num));
          const users = this.node.children.find(u => u.name.startsWith("spr_user" + num));
          usersNode.getComponent(Animation).play();
          users.getComponent(Animation).play();
        }

        bindUI() {
          this.initUsers();
          this.propertyNode.props_skeleton_win1.active = false;
          this.initHeadClick();
        }

        initHeadClick() {
          this.node.children.filter(v => v.name.startsWith("props_btn_users")).forEach(v => {
            const userIndex = this.getHeadNodeIndex(v);
            v.on(Node.EventType.TOUCH_END, () => {
              const userInfo = this.props.usersInfo.find(v => v.index === userIndex - 1);
              userInfo && userInfo.memberId !== (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                error: Error()
              }), gameCacheData) : gameCacheData).memberId && (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).showGiftWindow((_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).BANDAR_QIU_QIU, {
                memberId: userInfo.memberId,
                head: userInfo.icon,
                gold: userInfo.gold,
                name: userInfo.memberName
              }, (value, memberId) => {
                this.events.giveGift(value, memberId, 0);
              });
            });
          });
        }

        getHeadNodeIndex(userNode) {
          return parseInt(userNode.name.replace("props_btn_users", ""));
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f2ed96e54b05b413fd72f29b0942ef98be2d0137.js.map