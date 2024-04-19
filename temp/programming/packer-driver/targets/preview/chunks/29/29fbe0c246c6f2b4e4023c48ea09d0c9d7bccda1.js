System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, Sprite, SpriteFrame, tween, Vec3, Animation, bezier, game, Game, BaseComponent, omitStr, bundleDragonTiger, getNodeByNameDeep, mainGameViewModel, gameCacheData, global, config, GameType, _dec, _class, _crd, ccclass, property, DragonTiger_users;

  function divideNumber(num) {
    var result = [];

    if (num < 1000) {
      return result;
    }

    while (num >= 1000) {
      if (num >= 1000000) {
        result.push(1000000);
        num -= 1000000;
      } else if (num >= 500000) {
        result.push(500000);
        num -= 500000;
      } else if (num >= 100000) {
        result.push(100000);
        num -= 100000;
      } else if (num >= 10000) {
        result.push(10000);
        num -= 10000;
      } else if (num >= 5000) {
        result.push(5000);
        num -= 5000;
      } else if (num >= 1000) {
        result.push(1000);
        num -= 1000;
      }
    }

    return result;
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfomitStr(extras) {
    _reporterNs.report("omitStr", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbundleDragonTiger(extras) {
    _reporterNs.report("bundleDragonTiger", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainGameViewModel(extras) {
    _reporterNs.report("mainGameViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMyInfo(extras) {
    _reporterNs.report("MyInfo", "../store/actions/userInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMemberData(extras) {
    _reporterNs.report("MemberData", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetData(extras) {
    _reporterNs.report("BetData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetType(extras) {
    _reporterNs.report("BetType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMemberInfoVo(extras) {
    _reporterNs.report("MemberInfoVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameCacheData(extras) {
    _reporterNs.report("gameCacheData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../../../common/viewModel/GiftUserViewModel", _context.meta, extras);
  }

  _export("divideNumber", divideNumber);

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
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Animation = _cc.Animation;
      bezier = _cc.bezier;
      game = _cc.game;
      Game = _cc.Game;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      omitStr = _unresolved_3.omitStr;
    }, function (_unresolved_4) {
      bundleDragonTiger = _unresolved_4.bundleDragonTiger;
    }, function (_unresolved_5) {
      getNodeByNameDeep = _unresolved_5.getNodeByNameDeep;
    }, function (_unresolved_6) {
      mainGameViewModel = _unresolved_6.mainGameViewModel;
    }, function (_unresolved_7) {
      gameCacheData = _unresolved_7.gameCacheData;
    }, function (_unresolved_8) {
      global = _unresolved_8.global;
    }, function (_unresolved_9) {
      config = _unresolved_9.default;
    }, function (_unresolved_10) {
      GameType = _unresolved_10.GameType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e2391A6zFdO1ZFJ7ifVlxHj", "DragonTiger_users", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Label', 'Node', 'Sprite', 'SpriteFrame', 'tween', 'Vec3', 'Animation', 'UIOpacity', 'bezier', 'Skeleton', 'sp', 'game', 'Game']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DragonTiger_users", DragonTiger_users = (_dec = ccclass('DragonTiger_users'), _dec(_class = class DragonTiger_users extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.leftHeadNode = [];
          this.rightHeadNode = [];
          this.isIcon1 = false;
          this.isIcon2 = false;
          this.isIcon3 = false;
          this.isShowGame = true;
          this.propertyNode = {
            props_spr_icon: new Node()
          };
          this.props = {
            roomLeftInfoVos: [],
            roomRightInfoVos: [],
            memberId: "",
            memberData: {
              gold: 0,
              memberId: "",
              type: 0,
              memberName: ''
            },
            memberName: "",
            usersInfo: null,
            newBetData: null
          };
          this.events = {
            giveGift: (value, memberId, num) => {}
          };
        }

        start() {}

        initState() {
          return {
            goldData: {}
          };
        }

        bindEvent() {
          game.on(Game.EVENT_HIDE, () => {
            //用户切入后台
            this.isShowGame = false;
          });
          game.on(Game.EVENT_SHOW, () => {
            this.isShowGame = true;
          });
        }

        useProps(key, value) {
          if (key === "newBetData") {
            // console.log("newBetData",value.cur);
            if (!value.cur) {
              return;
            }

            this.playFlyChipWinAnimation(value.cur);
          }

          if (key === "usersInfo") {
            // console.log("usersInfo",value.cur);
            // window.setTimeout(() => {
            if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
              error: Error()
            }), mainGameViewModel) : mainGameViewModel).isUnMount || !value.cur) {
              return;
            }

            this.initUsers();
            value.cur.forEach((item, index) => {
              this.initBSUsers(item, item.index);
            }); //  },5000)
          }

          if (key === "roomLeftInfoVos") {}

          if (key === "roomRightInfoVos") {}
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

          if (!usersNode || !userHead) {
            return;
          }

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
        /**获得星星 */


        getStar(parentNode, betType) {
          return this.propertyNode.props_spr_icon;
        }
        /**飞星星抛物线动画 */


        playWinRateTween(tweenNode, endPos, playTime, callBack) {
          var startPos = tweenNode.position;
          var startAngle = tweenNode.eulerAngles;
          var fruitTween = tween(startPos);
          var x = (startPos.x + endPos.x) / 2;
          var y = (startPos.y + endPos.y) / 2;
          var mixY = y + y * 0.6;
          var maxY = y + y * 0.6;
          var mixX = x;
          var maxX = x;

          var progressX = function progressX(start, end, current, t) {
            //@ts-ignore
            current = bezier(start, mixX, maxX, end, t);
            return current;
          };

          var progressY = function progressY(start, end, current, t) {
            //@ts-ignore
            current = bezier(start, mixY, maxY, end, t);
            return current;
          };

          fruitTween.parallel(tween().to(playTime, {
            x: endPos.x
          }, {
            progress: progressX,
            onUpdate: () => {
              tweenNode.isValid && tweenNode.setPosition(startPos);
            }
          }), tween().to(playTime, {
            y: endPos.y
          }, {
            progress: progressY,
            onUpdate: () => {
              tweenNode.isValid && tweenNode.setPosition(startPos);
            }
          })).start();
          tween(startAngle).to(playTime, {
            z: 360
          }, {
            onUpdate: () => {
              if (tweenNode.isValid) {
                tweenNode.eulerAngles = startAngle;
              }
            }
          }).call(() => callBack()).start();
        }

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
              (_crd && bundleDragonTiger === void 0 ? (_reportPossibleCrUseOfbundleDragonTiger({
                error: Error()
              }), bundleDragonTiger) : bundleDragonTiger).load("img/head1/spriteFrame", SpriteFrame, (err, sp) => {
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
        /**
         * 根据下注拆分筹码
         * @param totalBetAmount 
         */


        splitChip(totalBetAmount, chips) {
          if (totalBetAmount < (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).chipTypes[0].value) {
            return;
          }

          for (var i = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).chipTypes.length - 2; i >= 0; i--) {
            var element = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).chipTypes[i];

            if (totalBetAmount >= element.value) {
              chips.push(element.value);
              totalBetAmount -= element.value;
              break;
            }
          }

          this.splitChip(totalBetAmount, chips);
        }

        bindUI() {
          this.initUsers();
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
              }), GameType) : GameType).DRAGON_TIGER, {
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
//# sourceMappingURL=29fbe0c246c6f2b4e4023c48ea09d0c9d7bccda1.js.map