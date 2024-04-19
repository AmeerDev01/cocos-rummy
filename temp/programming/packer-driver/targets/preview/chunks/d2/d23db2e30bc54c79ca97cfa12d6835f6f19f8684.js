System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Button, instantiate, Label, Node, sp, Sprite, tween, Vec3, BaseComponent, global, lang, addToastAction, config, playBtnClick, playDong, playSieve, playTimeout, sourceManageSeletor, yxxAudio, SoundPathDefine, SpriteFramePathDefine, AnimationStatus, BetType, GameStatus, BANKER_ID, GameType, _dec, _class, _crd, ccclass, property, Yxx_GameBoard;

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

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayBtnClick(extras) {
    _reporterNs.report("playBtnClick", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayDong(extras) {
    _reporterNs.report("playDong", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplaySieve(extras) {
    _reporterNs.report("playSieve", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayTimeout(extras) {
    _reporterNs.report("playTimeout", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfyxxAudio(extras) {
    _reporterNs.report("yxxAudio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteFramePathDefine(extras) {
    _reporterNs.report("SpriteFramePathDefine", "../sourceDefine/spriteDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationStatus(extras) {
    _reporterNs.report("AnimationStatus", "../type", _context.meta, extras);
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

  function _reportPossibleCrUseOfResult(extras) {
    _reporterNs.report("Result", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTipType(extras) {
    _reporterNs.report("TipType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserInfo(extras) {
    _reporterNs.report("UserInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBANKER_ID(extras) {
    _reporterNs.report("BANKER_ID", "../../../common/viewModel/GiftUserViewModel", _context.meta, extras);
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
      Animation = _cc.Animation;
      Button = _cc.Button;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      global = _unresolved_3.global;
      lang = _unresolved_3.lang;
    }, function (_unresolved_4) {
      addToastAction = _unresolved_4.addToastAction;
    }, function (_unresolved_5) {
      config = _unresolved_5.default;
    }, function (_unresolved_6) {
      playBtnClick = _unresolved_6.playBtnClick;
      playDong = _unresolved_6.playDong;
      playSieve = _unresolved_6.playSieve;
      playTimeout = _unresolved_6.playTimeout;
      sourceManageSeletor = _unresolved_6.sourceManageSeletor;
      yxxAudio = _unresolved_6.yxxAudio;
    }, function (_unresolved_7) {
      SoundPathDefine = _unresolved_7.SoundPathDefine;
    }, function (_unresolved_8) {
      SpriteFramePathDefine = _unresolved_8.SpriteFramePathDefine;
    }, function (_unresolved_9) {
      AnimationStatus = _unresolved_9.AnimationStatus;
      BetType = _unresolved_9.BetType;
      GameStatus = _unresolved_9.GameStatus;
    }, function (_unresolved_10) {
      BANKER_ID = _unresolved_10.BANKER_ID;
      GameType = _unresolved_10.GameType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8edbfyFvmhMn64qPWuPDIlZ", "Yxx_GameBoard", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Button', 'instantiate', 'Label', 'Node', 'sp', 'Sprite', 'tween', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Yxx_GameBoard", Yxx_GameBoard = (_dec = ccclass('Yxx_GameBoard'), _dec(_class = class Yxx_GameBoard extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.isComplete = false;
          this.propertyNode = {
            props_bg: new Node(),
            props_gameBoard: new Node(),
            props_desk_bg: new Node(),
            props_menu: new Node(),
            props_btn_title_return: new Button(),
            props_btn_title_menu: new Button(),
            props_btn_title_set: new Button(),
            props_btn_title_help: new Button(),
            props_mask_titrle: new Animation(),
            props_label_countDownNum: new Label(),
            props_countdown_bg: new Node(),
            props_xiazhu_begin: new Node(),
            props_xiazhu_end: new Node(),
            props_result_wait: new Node(),
            props_dice_container1: new Node(),
            props_dice_container2: new Node(),
            props_dice: new Node(),
            props_open_panzi: new Node(),
            props_open_gai: new Node(),
            props_close_panzi: new Node(),
            props_close_gai: new Node(),
            props_heguan_zc: new Node(),
            props_heguan_kaijiang: new Node(),
            props_remind_repeat: new Node(),
            props_remind_noBet: new Node(),
            props_heguan_node: new Node()
          };
          this.props = {
            gameStatus: null,
            newResult: null,
            myHead: null,
            seats: [],
            countdown: 0,
            tipType: null
          };
          this.events = {
            openSettingView: () => {},
            openWinLossView: (userInfos, balance) => {},
            clearView: () => {},
            changeAnimationStatus: animationStatus => {},
            quitGame: () => {},
            openRulePanel: () => {},
            giveGift: (value, memberId, num) => {}
          };
          this.isShowMenu = false;
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.bindEvent1();
        }

        bindEvent1() {
          this.propertyNode.props_btn_title_menu.node.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.updateMenuStatus();
          });
          this.propertyNode.props_btn_title_set.node.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.events.openSettingView();
          });
          this.propertyNode.props_btn_title_help.node.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.events.openRulePanel();
          });
          this.propertyNode.props_btn_title_return.node.on(Node.EventType.TOUCH_END, () => {
            if (this.props.myHead.betAmount > 0) {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.palyingModule.GameExit, {}, {
                  placeStr: "您有下注，不能退出"
                })
              }));
              return;
            }

            this.events.quitGame();
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
          });
          this.getSkeleton(this.propertyNode.props_xiazhu_begin).setCompleteListener(() => {
            this.getSkeleton(this.propertyNode.props_xiazhu_begin).enabled = false;
          });
          this.getSkeleton(this.propertyNode.props_xiazhu_end).setCompleteListener(() => {
            this.getSkeleton(this.propertyNode.props_xiazhu_end).enabled = false; // 结束动画之后，开始播放开奖动画

            this.scheduleOnceEnhance(() => {
              if (!this.props.newResult) return;
              this.playPrizeAnimation();
            }, 0.5);
          });
          this.getSkeleton(this.propertyNode.props_open_panzi).setCompleteListener(index => {// log("props_open_panzi end");
          }); // 开盖动画结束之后暂停开盖动画，同时开始关闭盖子的动画

          this.getSkeleton(this.propertyNode.props_open_gai).setCompleteListener(index => {
            this.playOpenGaiAnimation(false); // 所有延时动画都要加上如果下注状态就不处理了

            this.scheduleOnceEnhance(() => {
              this.events.changeAnimationStatus((_crd && AnimationStatus === void 0 ? (_reportPossibleCrUseOfAnimationStatus({
                error: Error()
              }), AnimationStatus) : AnimationStatus).FLY_CHIP);
              this.events.changeAnimationStatus((_crd && AnimationStatus === void 0 ? (_reportPossibleCrUseOfAnimationStatus({
                error: Error()
              }), AnimationStatus) : AnimationStatus).HEAD_ADD_GOLD);
            }, 3); // 开盖动画结束之后，给一定延时打开结算面板一个延时

            this.scheduleOnceEnhance(() => {
              this.props.myHead.betAmount > 0 && this.events.openWinLossView(null, this.props.myHead.winloss);
              var balanceTime = 3; // 结算面板打开之后，给一定延时清除数据

              this.scheduleOnceEnhance(() => {
                this.events.clearView();
              }, balanceTime); // 结算面板打开之后，给一定延时开始播放关盖动画，比清空数据要稍晚一点

              this.scheduleOnceEnhance(() => {
                this.playCloseGaiAnimation(true);
              }, balanceTime + 1);
            }, 3);
          }); // 关闭盖子动画结束之后，暂停动画，同时显示待开盖的动画

          this.getSkeleton(this.propertyNode.props_close_gai).setCompleteListener(index => {
            this.playCloseGaiAnimation(false);
            this.getSkeleton(this.propertyNode.props_result_wait).enabled = true;
          });
          this.propertyNode.props_mask_titrle.on(Animation.EventType.FINISHED, () => {
            this.isShowMenu = !this.isShowMenu;
          });
          this.propertyNode.props_heguan_node.on(Node.EventType.TOUCH_END, () => {
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).showGiftWindow((_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).YXX, undefined, value => {
              this.events.giveGift(value, _crd && BANKER_ID === void 0 ? (_reportPossibleCrUseOfBANKER_ID({
                error: Error()
              }), BANKER_ID) : BANKER_ID, 0);
            });
          });
        }

        useProps(key, value) {
          if (key === 'countdown') {
            this.updateCountDown(value.cur);
          } else if (key === 'gameStatus') {
            // log("game board ==", key, value);
            if (value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).BET) {
              this.unscheduleAllCallbacks();
              this.getSkeleton(this.propertyNode.props_xiazhu_begin).enabled = true;
              this.getSkeleton(this.propertyNode.props_xiazhu_end).enabled = false; // 由于把应用切换到后台之后，前面动画就暂停了，因此在开始下注之后，强行关闭动画

              this.getSkeleton(this.propertyNode.props_result_wait).enabled = true; // 清理界面

              this.events.clearView();
              this.resetSkeleton(this.getCountdownSkeleton());
              this.updateHeGuan(false); // 停止动画

              this.playCloseGaiAnimation(false);
              this.playOpenGaiAnimation(false);
            } else if (value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).STOP_BET) {
              this.getSkeleton(this.propertyNode.props_xiazhu_end).enabled = true;
              this.updateHeGuan(true);
            }
          } else if (key === 'tipType' && value.cur) {
            if (this.props.tipType.type === 0) {
              this.openNoBet();
            } else if (this.props.tipType.type === 1) {
              this.openRemindRepeat();
            }
          }
        }

        updateCountDown(countdown) {
          if (!this.isComplete) return;
          this.propertyNode.props_label_countDownNum.string = countdown + "";
          this.propertyNode.props_countdown_bg.active = countdown > 0;
          this.getCountdownSkeleton().paused = countdown > 3;
          countdown === 3 && (_crd && playTimeout === void 0 ? (_reportPossibleCrUseOfplayTimeout({
            error: Error()
          }), playTimeout) : playTimeout)();
          countdown <= 0 && this.resetSkeleton(this.getCountdownSkeleton());
        }
        /**重置骨骼动画 */


        resetSkeleton(sk) {
          sk.setAnimation(0, "animation", true);
        }

        playPrizeAnimation() {
          if (!this.isBet()) {
            this.getSkeleton(this.propertyNode.props_result_wait).enabled = false;
          }

          this.playOpenGaiAnimation(true);
        }

        getCountdownSkeleton() {
          return this.propertyNode.props_countdown_bg.getComponent(sp.Skeleton);
        }

        getSkeleton(node) {
          return node.getComponent(sp.Skeleton);
        }

        bindUI() {
          // this.propertyNode.props_mask_titrle.enabled = false;
          this.getSkeleton(this.propertyNode.props_xiazhu_begin).enabled = false;
          this.getSkeleton(this.propertyNode.props_xiazhu_end).enabled = false;
          this.propertyNode.props_countdown_bg.active = false;
          this.propertyNode.props_dice_container1.removeAllChildren();
          this.playOpenGaiAnimation(false);
          this.playCloseGaiAnimation(false); // this.updateHeGuan(false);

          this.initHandle(false);
        }

        playOpenGaiAnimation(play) {
          if (play && this.isBet()) {
            return;
          }

          this.getSkeleton(this.propertyNode.props_open_panzi).enabled = play;
          this.getSkeleton(this.propertyNode.props_open_gai).enabled = play;
          this.getSkeleton(this.propertyNode.props_open_panzi).paused = !play;
          this.getSkeleton(this.propertyNode.props_open_gai).paused = !play;

          if (!play) {
            this.propertyNode.props_dice_container1.active = false;
          }

          play && this.addDice();
        }

        playCloseGaiAnimation(play) {
          if (play && this.isBet()) {
            return;
          }

          this.getSkeleton(this.propertyNode.props_close_panzi).enabled = play;
          this.getSkeleton(this.propertyNode.props_close_gai).enabled = play;
          this.getSkeleton(this.propertyNode.props_close_panzi).paused = !play;
          this.getSkeleton(this.propertyNode.props_close_gai).paused = !play;
          this.propertyNode.props_dice_container2.active = play;

          if (!play) {
            this.propertyNode.props_dice_container2.active = false;
          } else {
            // playSieve();
            this.scheduleOnceEnhance(() => {
              (_crd && playSieve === void 0 ? (_reportPossibleCrUseOfplaySieve({
                error: Error()
              }), playSieve) : playSieve)();
              (_crd && yxxAudio === void 0 ? (_reportPossibleCrUseOfyxxAudio({
                error: Error()
              }), yxxAudio) : yxxAudio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).SIEVE);
            }, 1);
            this.scheduleOnceEnhance(() => {
              (_crd && playDong === void 0 ? (_reportPossibleCrUseOfplayDong({
                error: Error()
              }), playDong) : playDong)();
            }, 2.7);
            this.events.changeAnimationStatus((_crd && AnimationStatus === void 0 ? (_reportPossibleCrUseOfAnimationStatus({
              error: Error()
            }), AnimationStatus) : AnimationStatus).CLOSE_GAI);
          }
        }

        updateHeGuan(kaijiang) {
          this.getSkeleton(this.propertyNode.props_heguan_kaijiang).enabled = kaijiang;
          this.getSkeleton(this.propertyNode.props_heguan_zc).enabled = !kaijiang;
        }
        /**添加骰子 */


        addDice() {
          // 添加骰子的时候开盖盘子上面的骰子
          this.propertyNode.props_dice_container1.active = true; // 清理历史骰子

          this.propertyNode.props_dice_container1.removeAllChildren();
          this.propertyNode.props_dice_container2.removeAllChildren(); // 随机骰子位置

          var positions = this.randomDicePosition(); // 同时添加开盖盘子和关闭盖子盘子上面的骰子

          this.props.newResult && this.props.newResult.betTypes.forEach((v, index) => {
            this.createDice(v, positions[index], this.propertyNode.props_dice_container1);
            this.createDice(v, positions[index], this.propertyNode.props_dice_container2);
          }); // 由于挂载在开盖盘子上面的节点在动画结束时隐藏有一点点延迟，因此这里模拟同步动画时间

          this.scheduleOnceEnhance(() => {
            this.propertyNode.props_dice_container1.active = false;
          }, 1.87);
          this.scheduleOnceEnhance(() => {
            (_crd && playDong === void 0 ? (_reportPossibleCrUseOfplayDong({
              error: Error()
            }), playDong) : playDong)();
          }, 0.5); // 播放添加历史记录动画

          this.scheduleOnceEnhance(() => {
            this.events.changeAnimationStatus((_crd && AnimationStatus === void 0 ? (_reportPossibleCrUseOfAnimationStatus({
              error: Error()
            }), AnimationStatus) : AnimationStatus).KAI_GAI);
          }, 1.2);
        }

        scheduleOnceEnhance(handle, delay) {
          // if (this.isBet()) return;
          this.scheduleOnce(handle, delay);
        }

        isBet() {
          return this.props && this.props.gameStatus === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).BET;
        }

        randomDicePosition() {
          var index = Math.floor(Math.random() * (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).dicePosition.length);
          var arr = [...(_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).dicePosition];
          arr.splice(index, 1);
          return arr;
        }

        createDice(betType, position, parent) {
          var node = instantiate(this.propertyNode.props_dice);
          node.getComponent(Sprite).spriteFrame = (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile(this.getDiceName(betType)).source;
          node.setScale(new Vec3(0.9, 0.9));
          parent.addChild(node);
          node.setPosition(position);
        }

        getDiceName(betType) {
          if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).CHOOK === betType) {
            return (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).DICE_4;
          } else if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).CRAB === betType) {
            return (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).DICE_5;
          } else if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).DEER === betType) {
            return (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).DICE_3;
          } else if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).FISH === betType) {
            return (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).DICE_6;
          } else if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).GOURD === betType) {
            return (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).DICE_2;
          } else if ((_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).SHRIMP === betType) {
            return (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).DICE_1;
          }
        }

        getGameNode() {
          return this.propertyNode.props_gameBoard;
        }

        initHandle(active) {
          this.propertyNode.props_bg.active = active;
          this.propertyNode.props_desk_bg.active = active;
          this.propertyNode.props_menu.active = active;
          this.propertyNode.props_result_wait.active = active;
          this.propertyNode.props_heguan_zc.active = active;
          this.propertyNode.props_heguan_kaijiang.active = active;
          this.isComplete = active;
        }

        initEnd() {
          this.initHandle(true);
        }

        updateMenuStatus() {
          if (!this.propertyNode.props_mask_titrle || !this.propertyNode.props_mask_titrle.defaultClip) {
            return;
          }

          var anStatus = this.propertyNode.props_mask_titrle.getState(this.propertyNode.props_mask_titrle.defaultClip.name);

          if (anStatus.isPlaying) {
            return;
          } // 动画倒放


          if (this.isShowMenu) {
            anStatus.speed = -1;
            anStatus.time = anStatus.duration;
          } else {
            anStatus.speed = 1;
            anStatus.time = 0;
          }

          this.propertyNode.props_mask_titrle.play();
        }

        destroyCallBack() {
          this.unscheduleAllCallbacks();
        }

        openNoBet() {
          this.propertyNode.props_remind_noBet.active = true;
          tween(this.propertyNode.props_remind_noBet).delay(2).call(() => {
            this.propertyNode.props_remind_noBet.active = false;
          }).start();
        }

        openRemindRepeat() {
          this.propertyNode.props_remind_repeat.active = true;
          tween(this.propertyNode.props_remind_repeat).delay(2).call(() => {
            this.propertyNode.props_remind_repeat.active = false;
          }).start();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d23db2e30bc54c79ca97cfa12d6835f6f19f8684.js.map