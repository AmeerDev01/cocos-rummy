System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Animation, Label, game, Game, BaseComponent, GameStatus, mainGameViewModel, playGame, playTimeout, stopBet, TaskScheduler, _dec, _class, _crd, ccclass, property, BandarQiuQiu_begin;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainGameViewModel(extras) {
    _reporterNs.report("mainGameViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayGame(extras) {
    _reporterNs.report("playGame", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayTimeout(extras) {
    _reporterNs.report("playTimeout", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstopBet(extras) {
    _reporterNs.report("stopBet", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskScheduler(extras) {
    _reporterNs.report("TaskScheduler", "../../../utils/TaskScheduler", _context.meta, extras);
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
      Animation = _cc.Animation;
      Label = _cc.Label;
      game = _cc.game;
      Game = _cc.Game;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      GameStatus = _unresolved_3.GameStatus;
    }, function (_unresolved_4) {
      mainGameViewModel = _unresolved_4.mainGameViewModel;
      playGame = _unresolved_4.playGame;
      playTimeout = _unresolved_4.playTimeout;
      stopBet = _unresolved_4.stopBet;
    }, function (_unresolved_5) {
      TaskScheduler = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8dbbbgOqTVFAp3QuUFZnRlD", "BandarQiuQiu_begin", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Animation', 'Label', 'game', 'Game']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BandarQiuQiu_begin", BandarQiuQiu_begin = (_dec = ccclass('BandarQiuQiu_begin'), _dec(_class = class BandarQiuQiu_begin extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.isShowGame = true;
          this.propertyNode = {
            props_spr_begin_bg: new Node(),
            props_spr_startBeil_text: new Node(),
            props_spr_stopBeil_text: new Node(),
            props_spr_countdown_bg: new Node(),
            props_label_clockNum: new Label()
          };
          this.props = {
            gameStatus: null,
            layCountDown: 0,
            countDown: 0
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          game.on(Game.EVENT_HIDE, () => {
            //游戏切入后台
            this.isShowGame = false;
          });
          game.on(Game.EVENT_SHOW, () => {
            //游戏进入
            this.isShowGame = true;

            if (!(_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
              error: Error()
            }), mainGameViewModel) : mainGameViewModel).isUnMount) {
              if (this.node) {}
            }
          });
        }

        useProps(key, value) {
          if (key === "layCountDown") {
            if (value.cur > 0) {
              this.propertyNode.props_label_clockNum.string = value.cur + "";
            }
          }

          if (key === "gameStatus") {
            if (value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).BET) {
              this.playBeginAnim();
              this.propertyNode.props_spr_stopBeil_text.active = false;
              this.propertyNode.props_spr_startBeil_text.active = true;
            } else if (value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).STOP_BET) {
              this.playBeginAnim();
              this.propertyNode.props_spr_startBeil_text.active = false;
              this.propertyNode.props_spr_stopBeil_text.active = true;
            } else if (value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).WAIT) {
              this.playLayAnim();
            } else if (value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).QUIT_GAME) {}
          }
        }
        /**播放开始动画 */


        playBeginAnim() {
          if (!this.isShowGame) {
            this.propertyNode.props_spr_countdown_bg.active = false;
            this.propertyNode.props_spr_begin_bg.active = false;
            return;
          }

          if (this.props.gameStatus === 1) {
            if (this.props && this.props.countDown && this.props.countDown < 5) {
              return;
            }

            ;
            console.log("this.props.countDown", this.props.countDown);
          }

          (_crd && playGame === void 0 ? (_reportPossibleCrUseOfplayGame({
            error: Error()
          }), playGame) : playGame)();

          if (this.props.gameStatus === 2) {
            (_crd && stopBet === void 0 ? (_reportPossibleCrUseOfstopBet({
              error: Error()
            }), stopBet) : stopBet)();
          } // console.log("this.props.gameStatus",this.props.gameStatus);


          this.propertyNode.props_spr_countdown_bg.active = false;
          this.propertyNode.props_spr_begin_bg.active = true;
          var animation = this.propertyNode.props_spr_begin_bg.getComponent(Animation);
          animation.play();
          animation.on(Animation.EventType.FINISHED, () => {
            this.propertyNode.props_spr_begin_bg.active = false;
          }, this);
        }
        /**播放等待动画 */


        playLayAnim() {
          if (!this.isShowGame) {
            this.propertyNode.props_spr_countdown_bg.active = false;
            this.propertyNode.props_spr_begin_bg.active = false;
            return;
          }

          if (this.props && this.props.layCountDown && this.props.layCountDown < 3) {
            return;
          }

          ;
          console.log("this.props.layCountDown", this.props.layCountDown);
          (_crd && playTimeout === void 0 ? (_reportPossibleCrUseOfplayTimeout({
            error: Error()
          }), playTimeout) : playTimeout)();
          this.propertyNode.props_spr_begin_bg.active = false;
          this.propertyNode.props_spr_countdown_bg.active = true;
          var animation = this.propertyNode.props_spr_countdown_bg.getComponent(Animation);
          animation.play();
          animation.on(Animation.EventType.FINISHED, () => {
            this.propertyNode.props_spr_countdown_bg.active = false;
          }, this);
        }

        bindUI() {
          this.propertyNode.props_spr_startBeil_text.active = false;
          this.propertyNode.props_spr_stopBeil_text.active = false;
          this.propertyNode.props_spr_countdown_bg.active = false;
          this.propertyNode.props_spr_begin_bg.active = false;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b3d8b314d6ad7fd704e62f3d3ef98d61af993757.js.map