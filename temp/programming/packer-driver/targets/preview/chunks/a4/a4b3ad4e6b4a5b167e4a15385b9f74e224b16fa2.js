System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Sprite, SpriteFrame, tween, Vec3, Animation, BaseComponent, getNodeByNameDeep, omitStr, config, gameCacheData, global, bundleBanDar, mainGameViewModel, TaskScheduler, GameType, _dec, _class, _crd, ccclass, property, Bandar_users;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfomitStr(extras) {
    _reporterNs.report("omitStr", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetData(extras) {
    _reporterNs.report("BetData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameCacheData(extras) {
    _reporterNs.report("gameCacheData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMemberInfoVo(extras) {
    _reporterNs.report("MemberInfoVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbundleBanDar(extras) {
    _reporterNs.report("bundleBanDar", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainGameViewModel(extras) {
    _reporterNs.report("mainGameViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinUser(extras) {
    _reporterNs.report("WinUser", "../store/actions/bet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskScheduler(extras) {
    _reporterNs.report("TaskScheduler", "../../../utils/TaskScheduler", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      getNodeByNameDeep = _unresolved_3.getNodeByNameDeep;
      omitStr = _unresolved_3.omitStr;
    }, function (_unresolved_4) {
      config = _unresolved_4.default;
    }, function (_unresolved_5) {
      gameCacheData = _unresolved_5.gameCacheData;
    }, function (_unresolved_6) {
      global = _unresolved_6.global;
    }, function (_unresolved_7) {
      bundleBanDar = _unresolved_7.bundleBanDar;
      mainGameViewModel = _unresolved_7.mainGameViewModel;
    }, function (_unresolved_8) {
      TaskScheduler = _unresolved_8.default;
    }, function (_unresolved_9) {
      GameType = _unresolved_9.GameType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "749fcS2h6ZHUZmMm4bkBEat", "Bandar_users", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'tween', 'Vec3', 'Animation', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bandar_users", Bandar_users = (_dec = ccclass('Bandar_users'), _dec(_class = class Bandar_users extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.propertyNode = {
            props_btn_users1: new Node(),
            props_spr_icon: new Node(),
            props_skeleton: new Node(),
            props_skeleton_win1: new Node()
          };
          this.props = {
            newBetData: null,
            usersInfo: null,
            allWinUsers: null
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
            }

            this.playFlyChipWinAnimation(value.cur);
          }

          if (key === "allWinUsers") {}

          if (key === "usersInfo") {
            //  window.setTimeout(() => {
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
          var item = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).headLocations[seatNum];
          var winAnimation = instantiate(this.propertyNode.props_skeleton_win1);
          winAnimation.active = true;
          winAnimation.setPosition(item.x, item.y); //    winAnimation.getComponent(sp.Skeleton).animation="animation"
          //    console.log("winAnimation",winAnimation);

          this.propertyNode.props_skeleton.addChild(winAnimation);
        }
        /** 初始化榜上用户信息 */


        initBSUsers(usersInfo, number) {
          if (!this.node) {
            return;
          }

          ;
          var num = number + 1;
          var usersNode = this.node.children.find(item => item.name.startsWith("props_btn_users" + num));
          var userHead = this.node.children.find(item => item.name.startsWith("spr_user" + num));
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
        }
        /** 赢钱的动画 +1K */


        playAddGold(betInfo, winGold) {
          var num = betInfo.index + 1;
          var usersNode = this.node.children.find(u => u.name.startsWith("props_btn_users" + num));
          var node = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("Label_gold_up", usersNode);
          node.getComponent(Label).string = "+" + betInfo.gold.formatAmountWithLetter();
          if (winGold <= 0) return;
          var startPosition = new Vec3(node.position.x, node.position.y);
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

          var num = betInfo.index + 1;
          var usersNode = this.node.children.find(u => u.name.startsWith("props_btn_users" + num));
          var users = this.node.children.find(u => u.name.startsWith("spr_user" + num));
          usersNode.getComponent(Animation).play();
          users.getComponent(Animation).play();
        }
        /**初始用户头像 */


        initUsers() {
          var _this = this;

          var _loop = function _loop() {
            if (_this.node) {
              var _num = i + 1;

              var usersNode = _this.node.children.find(item => item.name.startsWith("props_btn_users" + _num));

              var userHead = _this.node.children.find(item => item.name.startsWith("spr_user" + _num));

              userHead.active = false; // global.loadHeadSprite(usersInfo.icon,userHead.getComponent(Sprite));//加载头像

              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("Label_gold", usersNode).getComponent(Label).string = "";
              (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("Label_name", usersNode).getComponent(Label).string = "";
              (_crd && bundleBanDar === void 0 ? (_reportPossibleCrUseOfbundleBanDar({
                error: Error()
              }), bundleBanDar) : bundleBanDar).load("img/head1/spriteFrame", SpriteFrame, (err, sp) => {
                if (!err) {
                  userHead.getComponent(Sprite).spriteFrame = sp;
                }
              });
            }
          };

          for (var i = 0; i < 6; i++) {
            _loop();
          }
        }

        bindUI() {
          this.initUsers();
          this.propertyNode.props_skeleton_win1.active = false;
          this.initHeadClick();
        }

        initHeadClick() {
          this.node.children.filter(v => v.name.startsWith("props_btn_users")).forEach(v => {
            var userIndex = this.getHeadNodeIndex(v);
            v.on(Node.EventType.TOUCH_END, () => {
              var userInfo = this.props.usersInfo.find(v => v.index === userIndex - 1);
              userInfo && userInfo.memberId !== (_crd && gameCacheData === void 0 ? (_reportPossibleCrUseOfgameCacheData({
                error: Error()
              }), gameCacheData) : gameCacheData).memberId && (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).showGiftWindow((_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).BANDAR, {
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
//# sourceMappingURL=a4b3ad4e6b4a5b167e4a15385b9f74e224b16fa2.js.map