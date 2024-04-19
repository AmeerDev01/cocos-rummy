System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, bezier, Button, Game, game, instantiate, Label, Node, tween, UIOpacity, UITransform, Vec3, BaseComponent, global, lang, addToastAction, ToastPosition, formatNumber, getNodeByNameDeep, config, initBetData, playChip, playGetCoin, sourceManageSeletor, PrefabPathDefine, AnimationStatus, BetType, GameStatus, ChipViewModel, _dec, _class, _crd, ccclass, property, Yxx_BetArea;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToastPosition(extras) {
    _reporterNs.report("ToastPosition", "../../../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfformatNumber(extras) {
    _reporterNs.report("formatNumber", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitBetData(extras) {
    _reporterNs.report("initBetData", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayChip(extras) {
    _reporterNs.report("playChip", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayGetCoin(extras) {
    _reporterNs.report("playGetCoin", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationStatus(extras) {
    _reporterNs.report("AnimationStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetData(extras) {
    _reporterNs.report("BetData", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetType(extras) {
    _reporterNs.report("BetType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeadType(extras) {
    _reporterNs.report("HeadType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPowerVo(extras) {
    _reporterNs.report("PowerVo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResult(extras) {
    _reporterNs.report("Result", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChipViewModel(extras) {
    _reporterNs.report("ChipViewModel", "../viewModel/ChipViewModel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      bezier = _cc.bezier;
      Button = _cc.Button;
      Game = _cc.Game;
      game = _cc.game;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      global = _unresolved_3.global;
      lang = _unresolved_3.lang;
    }, function (_unresolved_4) {
      addToastAction = _unresolved_4.addToastAction;
      ToastPosition = _unresolved_4.ToastPosition;
    }, function (_unresolved_5) {
      formatNumber = _unresolved_5.formatNumber;
      getNodeByNameDeep = _unresolved_5.getNodeByNameDeep;
    }, function (_unresolved_6) {
      config = _unresolved_6.default;
      initBetData = _unresolved_6.initBetData;
    }, function (_unresolved_7) {
      playChip = _unresolved_7.playChip;
      playGetCoin = _unresolved_7.playGetCoin;
      sourceManageSeletor = _unresolved_7.sourceManageSeletor;
    }, function (_unresolved_8) {
      PrefabPathDefine = _unresolved_8.PrefabPathDefine;
    }, function (_unresolved_9) {
      AnimationStatus = _unresolved_9.AnimationStatus;
      BetType = _unresolved_9.BetType;
      GameStatus = _unresolved_9.GameStatus;
    }, function (_unresolved_10) {
      ChipViewModel = _unresolved_10.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a5ec4FMkjNFBZNC9HoHuRad", "Yxx_BetArea", undefined);

      __checkObsolete__(['_decorator', 'bezier', 'Button', 'Game', 'game', 'instantiate', 'Label', 'Node', 'Tween', 'tween', 'UIOpacity', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Yxx_BetArea", Yxx_BetArea = (_dec = ccclass('Yxx_BetArea'), _dec(_class = class Yxx_BetArea extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.initFinish = true;
          this.betLoading = false;
          this.tweens = [];
          this.betAreaInfo = new Map();
          this.animationCount = 0;
          this.animationTotalCount = 0;
          this.isShowGame = true;
          // 是否锁定下注
          this.isLockBet = false;
          this.betTimer = new Set();
          this.propertyNode = {
            props_btn_deer: new Node(),
            props_btn_chook: new Node(),
            props_btn_crab: new Node(),
            props_btn_fish: new Node(),
            props_btn_shrimp: new Node(),
            props_btn_gourd: new Node(),
            props_xingxing: new Node()
          };
          this.props = {
            newBetData: null,
            selectChip: 1000,
            myHead: null,
            gameStatus: null,
            newResult: null,
            animationStatus: null,
            powers: null,
            cancelBetData: null
          };
          this.events = {
            myBet: betData => {},
            clearBet: () => {},
            openShop: () => {},
            sendGameShowEvent: () => {}
          };
          this.eventShowCallback = void 0;
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.initAreaEvent();
          game.on(Game.EVENT_HIDE, () => {
            this.isShowGame = false; // console.log("EVENT_HIDE =========");
          });
          this.eventShowCallback = game.on(Game.EVENT_SHOW, () => {
            this.isShowGame = true; // console.log("EVENT_SHOW =========");

            this.events.sendGameShowEvent();
          });
        }

        destroyCallBack() {
          this.eventShowCallback && game.off(Game.EVENT_SHOW, this.eventShowCallback);
        }

        initAreaEvent() {
          this.propertyNode.props_btn_deer.on(Node.EventType.TOUCH_END, () => this.meBet((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).DEER));
          this.propertyNode.props_btn_chook.on(Node.EventType.TOUCH_END, () => this.meBet((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).CHOOK));
          this.propertyNode.props_btn_crab.on(Node.EventType.TOUCH_END, () => this.meBet((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).CRAB));
          this.propertyNode.props_btn_fish.on(Node.EventType.TOUCH_END, () => this.meBet((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).FISH));
          this.propertyNode.props_btn_shrimp.on(Node.EventType.TOUCH_END, () => this.meBet((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).SHRIMP));
          this.propertyNode.props_btn_gourd.on(Node.EventType.TOUCH_END, () => this.meBet((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).GOURD));
        }

        changeBetAreaStatus() {
          this.node.children.filter(v => v.name.startsWith("props_btn_")).forEach(v => {
            v.getComponent(Button).transition = this.isBetStatus() ? Button.Transition.SPRITE : Button.Transition.NONE;
          });
        }
        /**
         * 开始下注处理
         */


        startBetHandle() {
          // this.initFinish = true;
          this.betTimer && this.betTimer.clear();
          this.updateLockBetStatus(); // 清理下注区域数据

          this.betAreaInfo.clear(); // 隐藏赢的区域

          this.hideWinSprite(); // 清理桌面筹码

          this.clearAllBetAreaGlod();
          this.hideAllWinRate(); // 清理redix里的下注数据

          this.events.clearBet(); // this.testbet();
        } // private test_t = 0;
        // private testbet() {
        // 	if (this.test_t === -2) {
        // 		return;
        // 	}
        // 	window.clearInterval(this.test_t);
        // 	this.test_t = window.setInterval(() => {
        // 		this.meBet(BetType.DEER);
        // 	}, 100)
        // }

        /**
         * 隐藏下注区域的高亮
         */


        hideWinSprite() {
          this.node.children.filter(v => v.name.startsWith("props_btn_")).forEach(v => {
            v.getChildByName("Sprite_Win").getComponent(UIOpacity).opacity = 0;
          });

          if (this.tweens) {
            this.tweens.forEach(v => v.stop());
            this.tweens = [];
          }
        }
        /**
         * 闪烁赢的区域
         */


        flickerWinSprite(result) {
          Array.from(new Set(result.betTypes)).forEach(v => {
            var uiOpacity = this.getNodeByBetType(v).getChildByName("Sprite_Win").getComponent(UIOpacity);
            var t = tween(uiOpacity).repeatForever(tween().to(0.5, {
              opacity: 255
            }).to(0.5, {
              opacity: 0
            }));
            t.start();
            this.tweens.push(t);
          });
        }

        getNodeByBetType(betType) {
          if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).CHOOK === betType) {
            return this.propertyNode.props_btn_chook;
          } else if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).CRAB === betType) {
            return this.propertyNode.props_btn_crab;
          } else if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).DEER === betType) {
            return this.propertyNode.props_btn_deer;
          } else if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).FISH === betType) {
            return this.propertyNode.props_btn_fish;
          } else if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).GOURD === betType) {
            return this.propertyNode.props_btn_gourd;
          } else if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).SHRIMP === betType) {
            return this.propertyNode.props_btn_shrimp;
          }
        }

        isBetStatus() {
          return this.props.gameStatus === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).BET;
        }
        /**
         * 自己下注
         * @param betType 
         * @returns 
         */


        meBet(betType) {
          if (!this.isBetStatus()) {
            return;
          } // console.log('meBet betLoading ---------------------', this.betLoading, this.props.myHead.gold);
          // 等待下注返回后才能进行下一次下注


          if (this.betLoading || !this.initFinish) {
            return;
          }

          if (this.isLockBet) {
            return;
          }

          if (this.props.selectChip > this.props.myHead.gold) {
            // 提示用户余额不足
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
              error: Error()
            }), addToastAction) : addToastAction)({
              content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.palyingModule.RechangeGlod, {}, {
                placeStr: "您的余额不足请充值"
              })
            })); // 打开商店
            // this.events.openShop();

            return;
          }

          this.betLoading = true;
          var betData = (_crd && initBetData === void 0 ? (_reportPossibleCrUseOfinitBetData({
            error: Error()
          }), initBetData) : initBetData)(this.props.myHead.index, this.props.myHead.userId, betType, this.props.selectChip);
          betData.isMyBet = true;
          this.events.myBet(betData);
        }

        useProps(key, value) {
          // console.log("bet area props ", key, value);
          if (key === 'newBetData' && value.cur) {
            this.flyChip(value.cur);
          } else if (key === 'powers') {
            this.initFinish = true;
            this.updateLockBetStatus();
          } else if (key === 'gameStatus') {
            this.changeBetAreaStatus();

            if (value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).BET) {
              this.betLoading = false;
              this.startBetHandle();
            }
          } else if (key === 'animationStatus') {
            if (value.cur === (_crd && AnimationStatus === void 0 ? (_reportPossibleCrUseOfAnimationStatus({
              error: Error()
            }), AnimationStatus) : AnimationStatus).FLY_CHIP) {
              this.flyToHealerChip();
            } else if (value.cur === (_crd && AnimationStatus === void 0 ? (_reportPossibleCrUseOfAnimationStatus({
              error: Error()
            }), AnimationStatus) : AnimationStatus).KAI_GAI) {
              this.flickerWinSprite(this.props.newResult);
            } else if (value.cur === (_crd && AnimationStatus === void 0 ? (_reportPossibleCrUseOfAnimationStatus({
              error: Error()
            }), AnimationStatus) : AnimationStatus).CLOSE_GAI) {
              this.hideWinSprite();
              this.betAreaInfo.clear();
              this.clearAllBetAreaGlod();
              this.hideAllWinRate();
            } else if (value.cur === (_crd && AnimationStatus === void 0 ? (_reportPossibleCrUseOfAnimationStatus({
              error: Error()
            }), AnimationStatus) : AnimationStatus).RECHANGE_ADD_GOLD) {
              if (this.isBetStatus()) {
                this.updateLockBetStatus();
              }
            }
          } else if (key === 'cancelBetData') {
            // console.log("bet area props ", key, value);
            // try {
            // 	const d = null;
            // 	d.e = 0;
            // } catch (error) {
            // 	console.error(error);
            // }
            this.cancelBet(value.cur);
          } else if (key === 'myHead' && value.cur) {
            this.updateLockBetStatus();
            this.betLoading = false; // console.log('useProps    betLoading ---------------------', this.betLoading, this.props.myHead.gold);
          }
        }
        /**
         * 获得飞筹码速度（秒），一般用于 tween
         * @returns 
         */


        getFlyChipSpeedSecond() {
          return (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.flyChipSpeed;
        }
        /**
         * 获得飞筹码速度（毫秒）
         * @returns 
         */


        getFlyChipSpeedMilliscond() {
          return this.getFlyChipSpeedSecond() * 1000;
        }
        /**
         * 飞筹码
         * @param betData 
         * @param isFly 是否飞筹码的动画，false用于刚进入初始化筹码
         */


        flyChip(betData, isFly) {
          if (isFly === void 0) {
            isFly = true;
          }

          if (betData.isMyBet) {// this.betLoading = false;
            // console.log("my flyChip", betData);
          }

          var isRobot = betData.userId.startsWith('170');

          if (!isRobot) {
            if (this.betTimer.has(betData.time)) {
              // console.log(`${betData.userId} 下注金额 ${betData.betAmount}, 重复了, time: ${betData.time}`);
              return;
            }

            this.betTimer.add(betData.time);
          } // 下注筹码不存在，不处理


          if (!(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).chipTypes.find(v => v.value === betData.betAmount)) {
            return;
          }

          isFly = betData.isFly;
          isFly = this.isShowGame;
          var betArea = this.getBetArea(betData.betType).getChildByName("Layout_bet");
          var viewModel = this.createChip(betData.betAmount, betData.betId, betArea);
          var isWinRateBet = this.isWinRateBet(betData.betType); // log("flyChip ===", betData);

          this.addBetInfo(betData, viewModel);
          var chipNode = viewModel.comp.node;
          var endPositon = this.randomBetEndPosition(betArea);

          if (isFly) {
            var uiTransform = this.node.getComponent(UITransform);
            var startPosition = this.getBetStartPosition(betData);
            chipNode.setWorldPosition(uiTransform.convertToWorldSpaceAR(startPosition));
            tween(chipNode).to(this.getFlyChipSpeedSecond(), {
              position: endPositon
            }, {
              easing: 'quintOut'
            }).start();

            if (!isWinRateBet && betData.index === (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.winRateMaxIndex) {
              this.flyStar(startPosition, betData.betType);
            }

            (_crd && playChip === void 0 ? (_reportPossibleCrUseOfplayChip({
              error: Error()
            }), playChip) : playChip)();
          } else {
            chipNode.setPosition(endPositon);

            if (betData.index === (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.winRateMaxIndex) {
              this.showWinRate(betData.betType);
            }
          }

          this.updateBetAreaGlod(betData, betArea.parent);
        }
        /**是否大赢家位置下注 */


        isWinRateBet(betType) {
          var betInfos = this.betAreaInfo.get(betType);
          if (!betInfos || betInfos.length === 0) return undefined;
          return betInfos.find(v => v.index === (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.winRateMaxIndex);
        }
        /**飞星星 */


        flyStar(startPosition, betType) {
          var endPosition = this.getStar(betType).position;
          var starNode = instantiate(this.propertyNode.props_xingxing);
          starNode.active = true;
          this.node.addChild(starNode);
          starNode.setPosition(startPosition);
          this.playWinRateTween(starNode, endPosition, 1, () => {
            this.scheduleOnce(() => {
              this.showWinRate(betType);
              starNode.destroy();
            }, 0.5);
          });
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
        /**
         * 筹码飞向荷官
         */


        flyToHealerChip() {
          var chips = [];
          this.betAreaInfo.forEach((v, k) => {
            // 找出未中奖的区域
            if (!this.props.newResult.betTypes.find(betType => betType === k)) {
              v.forEach(betInfo => {
                chips = chips.concat(betInfo.chips);
              });
            }
          });
          this.lossAreaFlyChip(chips);
        } // 输的区域动画飞向荷官之后结束的处理，然后是荷官飞筹码到赢的区域


        lossAnimationEnd() {
          this.animationCount++;

          if (this.animationCount < this.animationTotalCount) {
            return;
          }

          this.animationTotalCount = 0;
          this.animationCount = 0; // log("lossAnimationEnd ====");

          this.scheduleOnce(() => {
            this.node.isValid && this.props.newResult && new Set(this.props.newResult.betTypes).forEach(v => {
              var number = this.props.newResult.betTypes.filter(betType => betType === v).length;
              this.animationTotalCount += this.healerFlyToBetArea(v, number);
            });
          }, 0.5);
        }
        /**荷官飞筹码到下注区域结束 */


        flyHealerToBetAreaEnd() {
          this.animationCount++;

          if (this.animationCount < this.animationTotalCount) {
            return;
          }

          this.animationTotalCount = 0;
          this.animationCount = 0; // log("flyHealerToBetAreaEnd ====");

          this.scheduleOnce(() => {
            // 筹码飞向头像
            this.flyBetAreaToHead();
          }, 0.5);
        }
        /**
         * 筹码下注区域飞向头像
         */


        flyBetAreaToHead() {
          new Set(this.props.newResult.betTypes).forEach(v => {
            var betInfos = this.betAreaInfo.get(v);

            if (betInfos) {
              betInfos.forEach(betInfo => {
                betInfo.chips.forEach(chip => {
                  this.chipFlyToHead(chip, betInfo);
                });
              });
            }
          });
        }
        /**筹码飞向用户头像 */


        chipFlyToHead(chip, betInfo) {
          var chipNode = chip.comp.node;
          var endPositon = betInfo ? this.getFlyToHeadEndPosition(betInfo) : this.getMyHeadPosition();
          var uiTransform = this.node.getComponent(UITransform);
          tween(chipNode).to(this.getFlyChipSpeedSecond(), {
            worldPosition: uiTransform.convertToWorldSpaceAR(endPositon)
          }).call(() => {
            chip.unMount();
          }).start();
        }
        /**筹码飞向头像的结束坐标 */


        getFlyToHeadEndPosition(betInfo) {
          if (betInfo.isMe) {
            // 播放获得金币的音效
            (_crd && playGetCoin === void 0 ? (_reportPossibleCrUseOfplayGetCoin({
              error: Error()
            }), playGetCoin) : playGetCoin)();
            return this.getMyHeadPosition();
          }

          if (betInfo.index >= (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.seatNumber) {
            return new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.onlineNumberPosition.x, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.onlineNumberPosition.y);
          }

          return new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).headLocations[betInfo.index].x, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).headLocations[betInfo.index].y);
        }
        /**
         * 获得自己的头像位置
         * @returns 
         */


        getMyHeadPosition() {
          return new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.myHeadPosition.x, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.myHeadPosition.y);
        }
        /**
         * 输的区域飞筹码
         * @param chips 
         */


        lossAreaFlyChip(chips) {
          this.animationTotalCount = chips.length;

          if (this.animationTotalCount === 0) {
            this.lossAnimationEnd();
            return;
          }

          chips.forEach(chip => {
            var chipNode = chip.comp.node;
            var endPositon = this.getDealerPosition();
            var uiTransform = this.node.getComponent(UITransform);
            tween(chipNode).to(this.getFlyChipSpeedSecond(), {
              worldPosition: uiTransform.convertToWorldSpaceAR(endPositon)
            }).call(() => {
              this.lossAnimationEnd();
              chip.unMount();
            }).start();
          });
        }

        getDealerPosition() {
          return new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.dealerPosition.x, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.dealerPosition.y);
        }
        /**
         * 荷官飞筹码到下注区域
         * @param chips 
         * @param prizeCount 奖励个数 
         */


        healerFlyToBetArea(betType, prizeCount) {
          var betInfos = this.betAreaInfo.get(betType);

          if (!betInfos) {
            return 0;
          } // log("healerFlyToBetArea === betInfos", betInfos);
          // 获得赔率


          var odds = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).betTypeOdds.find(v => v.betType === betType).odds[prizeCount - 1];
          var uiTransform = this.node.getComponent(UITransform);
          var betArea = this.getBetArea(betType).getChildByName("Layout_bet");
          var copyBetInfo = this.copyBetInfo(betInfos, betArea, odds);
          var chips = [];
          copyBetInfo.forEach(v => chips = chips.concat(v.chips)); // log("healerFlyToBetArea === ", chips.length);

          chips.forEach(v => {
            var startPosition = this.getDealerPosition();
            var endPositon = this.randomBetEndPosition(betArea);
            var chipNode = v.comp.node;
            chipNode.setWorldPosition(uiTransform.convertToWorldSpaceAR(startPosition));
            tween(chipNode).to(this.getFlyChipSpeedSecond(), {
              position: endPositon
            }).call(() => {
              this.flyHealerToBetAreaEnd();
            }).start();
          }); // 把荷官赔付的筹码加入到用户下注的数组中去

          copyBetInfo.forEach(v => {
            var betInfo = betInfos.find(bb => bb.userId === v.userId);
            betInfo.chips = betInfo.chips.concat(v.chips);
          });
          return chips.length;
        }

        copyBetInfo(betInfos, parent, odds) {
          var arr = [];
          new Array(odds).fill(0).forEach(v => {
            betInfos.forEach(betInfo => {
              arr.push({
                index: betInfo.index,
                userId: betInfo.userId,
                isMe: betInfo.isMe,
                chips: betInfo.chips.filter(chip => chip.comp.props).map(chip => this.createChip(chip.comp.props.value, chip.comp.props.betId, parent))
              });
            });
          });
          return arr;
        }

        clearAllBetAreaGlod() {
          this.animationCount = 0;
          this.animationTotalCount = 0;
          this.clearBetAreaGlod(this.propertyNode.props_btn_chook);
          this.clearBetAreaGlod(this.propertyNode.props_btn_crab);
          this.clearBetAreaGlod(this.propertyNode.props_btn_deer);
          this.clearBetAreaGlod(this.propertyNode.props_btn_fish);
          this.clearBetAreaGlod(this.propertyNode.props_btn_gourd);
          this.clearBetAreaGlod(this.propertyNode.props_btn_shrimp);
        }

        clearBetAreaGlod(betArea) {
          betArea.getChildByName("Layout_bet").removeAllChildren();
          this.updateBetAreaGlod({
            index: 0,
            userId: "",
            betAmount: 0,
            betType: null,
            betId: '',
            totalBetAmount: 0,
            meTotalBetAmount: 0
          }, betArea);
        }

        updateBetAreaGlod(betData, betArea) {
          if (betData.totalBetAmount === 0) {
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("Label_bet_all", betArea).getComponent(Label).string = "";
          } else {
            (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("Label_bet_all", betArea).getComponent(Label).string = (_crd && formatNumber === void 0 ? (_reportPossibleCrUseOfformatNumber({
              error: Error()
            }), formatNumber) : formatNumber)(betData.totalBetAmount);
          }

          (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("Label_bet_mine", betArea).parent.active = betData.meTotalBetAmount > 0;
          (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("Label_bet_mine", betArea).getComponent(Label).string = (_crd && formatNumber === void 0 ? (_reportPossibleCrUseOfformatNumber({
            error: Error()
          }), formatNumber) : formatNumber)(betData.meTotalBetAmount);
        }
        /**
         * 获得下注筹码飞的开始坐标
         * @param index 
         * @returns 
         */


        getBetStartPosition(betData) {
          if (betData.isMyBet) {
            return new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.myHeadPosition.x, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.myHeadPosition.y);
          }

          if (betData.index >= (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.seatNumber) {
            return new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.onlineNumberPosition.x, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.onlineNumberPosition.y);
          }

          return new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).headLocations[betData.index].x, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).headLocations[betData.index].y);
        }

        randomBetEndPosition(betArea) {
          var uiTransform = betArea.getComponent(UITransform);
          var width = uiTransform.width * 0.5;
          var height = uiTransform.height * 0.2;
          var x = width / 2 - Math.random() * width;
          var y = height / 2 - Math.random() * height;
          return new Vec3(x, y);
        }

        getBetArea(betType) {
          if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).CHOOK === betType) {
            return this.propertyNode.props_btn_chook;
          } else if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).CRAB === betType) {
            return this.propertyNode.props_btn_crab;
          } else if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).DEER === betType) {
            return this.propertyNode.props_btn_deer;
          } else if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).FISH === betType) {
            return this.propertyNode.props_btn_fish;
          } else if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).GOURD === betType) {
            return this.propertyNode.props_btn_gourd;
          } else if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).SHRIMP === betType) {
            return this.propertyNode.props_btn_shrimp;
          }
        }

        createChip(chipValue, betId, parent) {
          return new (_crd && ChipViewModel === void 0 ? (_reportPossibleCrUseOfChipViewModel({
            error: Error()
          }), ChipViewModel) : ChipViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).CHIP).source).appendTo(parent).connect().setProps({
            value: chipValue,
            betId
          });
        }
        /**
         * 添加下注信息
         * @param betData 
         * @param viewModel 
         */


        addBetInfo(betData, viewModel) {
          var betInfos = this.betAreaInfo.get(betData.betType);

          if (!betInfos) {
            betInfos = [];
            this.betAreaInfo.set(betData.betType, betInfos);
          }

          var betInfo = betInfos.find(v => v.userId === betData.userId);

          if (betInfo) {
            betInfo.chips.push(viewModel);
          } else {
            betInfos.push({
              index: betData.index,
              userId: betData.userId,
              isMe: betData.isMyBet,
              chips: [viewModel]
            });
          } // log("addBetInfo : ", betData.betType, betInfos);

        }
        /**显示星星在下注区域 */


        showWinRate(betType) {
          if (!this.node || !this.node.isValid) return;
          this.getStar(betType).active = true;
        }
        /**获得星星 */


        getStar(betType) {
          return this.node.children.find(winRate => winRate.name.startsWith("props_win_rate_max_" + betType));
        }

        hideAllWinRate() {
          if (!this.node || !this.node.isValid) return;
          this.node.children.filter(winRate => winRate.name.startsWith("props_win_rate_max")).forEach(v => v.active = false);
        }

        updateLockBetStatus() {
          if (!this.props.myHead) {
            return;
          }

          this.isLockBet = this.props.myHead.gold < (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.unlockBetMinGold;

          if (!this.isLockBet && this.props.powers && this.props.powers.length > 0) {
            this.isLockBet = true;
          }
        }

        cancelBet(cancelBetData) {
          if (cancelBetData) {
            // window.clearInterval(this.test_t);
            // this.test_t = -2;
            var recycleChip = false;
            var betInfos = this.betAreaInfo.get(cancelBetData.betType);

            if (betInfos && betInfos.length > 0) {
              var chips = betInfos.find(v => v.isMe).chips;

              for (var i = 0; i < chips.length; i++) {
                var chip = chips[i];

                if (chip.comp.props.value === cancelBetData.betAmount) {
                  chips.splice(i, 1);
                  this.chipFlyToHead(chip, undefined);
                  recycleChip = true;
                  break;
                }
              }
            }

            if (recycleChip) {
              var betArea = this.getBetArea(cancelBetData.betType).getChildByName("Layout_bet");
              this.updateBetAreaGlod(cancelBetData, betArea.parent);
              var betAmount = cancelBetData.betAmount < 10000 ? cancelBetData.betAmount.formatAmountWithCommas() : cancelBetData.betAmount.formatAmountWithLetter();
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                position: (_crd && ToastPosition === void 0 ? (_reportPossibleCrUseOfToastPosition({
                  error: Error()
                }), ToastPosition) : ToastPosition).MIDDLE,
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.InitGameModule.BetFaild, {}, {
                  placeStr: "{0} 筹码下注失败"
                }).format(betAmount)
              }));
            }
          }
        }

        bindUI() {
          this.hideWinSprite();
          this.clearAllBetAreaGlod();
          this.hideAllWinRate();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6434824c33edcfdeb48b5e93b7184c4d68cdfbe6.js.map