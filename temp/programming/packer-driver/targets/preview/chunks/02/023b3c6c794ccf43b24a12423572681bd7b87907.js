System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Node, BaseComponent, changeOnlineNumber, changeSeatBet, joinGame, otherJoinGame, quitGame, seatBet, GameStatus, config, initBetData, initHeadType, changeGameStatus, countdown, _dec, _class, _crd, ccclass, property, Yxx_Test;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeOnlineNumber(extras) {
    _reporterNs.report("changeOnlineNumber", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeSeatBet(extras) {
    _reporterNs.report("changeSeatBet", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfjoinGame(extras) {
    _reporterNs.report("joinGame", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfotherJoinGame(extras) {
    _reporterNs.report("otherJoinGame", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfquitGame(extras) {
    _reporterNs.report("quitGame", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfseatBet(extras) {
    _reporterNs.report("seatBet", "../store/actions/bet", _context.meta, extras);
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

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitBetData(extras) {
    _reporterNs.report("initBetData", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinitHeadType(extras) {
    _reporterNs.report("initHeadType", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchangeGameStatus(extras) {
    _reporterNs.report("changeGameStatus", "../store/actions/gameFlow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcountdown(extras) {
    _reporterNs.report("countdown", "../store/actions/gameFlow", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      changeOnlineNumber = _unresolved_3.changeOnlineNumber;
      changeSeatBet = _unresolved_3.changeSeatBet;
      joinGame = _unresolved_3.joinGame;
      otherJoinGame = _unresolved_3.otherJoinGame;
      quitGame = _unresolved_3.quitGame;
    }, function (_unresolved_4) {
      seatBet = _unresolved_4.seatBet;
    }, function (_unresolved_5) {
      GameStatus = _unresolved_5.GameStatus;
    }, function (_unresolved_6) {
      config = _unresolved_6.default;
      initBetData = _unresolved_6.initBetData;
      initHeadType = _unresolved_6.initHeadType;
    }, function (_unresolved_7) {
      changeGameStatus = _unresolved_7.changeGameStatus;
      countdown = _unresolved_7.countdown;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "44019jNMKBN5a2EW8Xs2HRV", "Yxx_Test", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Game', 'log', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Yxx_Test", Yxx_Test = (_dec = ccclass('Yxx_Test'), _dec(_class = class Yxx_Test extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_bet_btn: new Button(),
            props_online: new Button(),
            props_join: new Button(),
            props_other_join: new Button(),
            props_start_game: new Button(),
            props_quit_game: new Button()
          };
          this.props = {
            seats: [],
            onlineNumber: 0,
            gameStatus: null
          };
          this.events = {};
          this.otherIndex = 0;
          this.t = 0;
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_bet_btn.node.on(Node.EventType.TOUCH_END, () => {
            this.bet();
          });
          this.propertyNode.props_online.node.on(Node.EventType.TOUCH_END, () => {
            this.dispatch((_crd && changeOnlineNumber === void 0 ? (_reportPossibleCrUseOfchangeOnlineNumber({
              error: Error()
            }), changeOnlineNumber) : changeOnlineNumber)(this.props.onlineNumber + 1));
          });
          this.propertyNode.props_start_game.node.on(Node.EventType.TOUCH_END, () => {
            this.dispatch((_crd && changeGameStatus === void 0 ? (_reportPossibleCrUseOfchangeGameStatus({
              error: Error()
            }), changeGameStatus) : changeGameStatus)((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).BET, 5, null));
          });
          this.propertyNode.props_join.node.on(Node.EventType.TOUCH_END, () => {
            var headType = (_crd && initHeadType === void 0 ? (_reportPossibleCrUseOfinitHeadType({
              error: Error()
            }), initHeadType) : initHeadType)(this.random((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.seatNumber));
            headType.has = true;
            headType.headUrl = "";
            headType.gold = 100000;
            headType.goldStr = '';
            headType.userId = Date.parse(new Date().toString()).toString();
            headType.level = this.random(3) + 1;
            headType.name = '大佬';
            headType.winloss = 0;
            this.dispatch((_crd && joinGame === void 0 ? (_reportPossibleCrUseOfjoinGame({
              error: Error()
            }), joinGame) : joinGame)(headType));
          });
          this.propertyNode.props_other_join.node.on(Node.EventType.TOUCH_END, () => {
            this.otherIndex = this.random((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).gameOption.seatNumber);
            var headType = (_crd && initHeadType === void 0 ? (_reportPossibleCrUseOfinitHeadType({
              error: Error()
            }), initHeadType) : initHeadType)(this.otherIndex);
            headType.has = true;
            headType.headUrl = "";
            headType.gold = 100000;
            headType.goldStr = '';
            headType.userId = Date.parse(new Date().toString()).toString();
            headType.level = 3;
            headType.name = "外专局还是-" + this.otherIndex;
            headType.winloss = 0;
            this.dispatch((_crd && otherJoinGame === void 0 ? (_reportPossibleCrUseOfotherJoinGame({
              error: Error()
            }), otherJoinGame) : otherJoinGame)(headType));
          });
          this.propertyNode.props_quit_game.node.on(Node.EventType.TOUCH_END, () => {
            this.quitGame();
          });
        }

        startCountdown(count) {
          if (this.t > 0) return;
          this.dispatch((_crd && countdown === void 0 ? (_reportPossibleCrUseOfcountdown({
            error: Error()
          }), countdown) : countdown)(count));
          this.t = window.setInterval(() => {
            this.dispatch((_crd && countdown === void 0 ? (_reportPossibleCrUseOfcountdown({
              error: Error()
            }), countdown) : countdown)(--count));

            if (count <= 0) {
              window.clearInterval(this.t);
              this.t = 0;
              var result = {
                time: Date.parse(new Date().toString()),
                betTypes: [this.randomBetType(), this.randomBetType(), this.randomBetType() // BetType.CHOOK,
                // BetType.CHOOK,
                // BetType.CHOOK,
                ]
              };
              this.dispatch((_crd && changeGameStatus === void 0 ? (_reportPossibleCrUseOfchangeGameStatus({
                error: Error()
              }), changeGameStatus) : changeGameStatus)((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
                error: Error()
              }), GameStatus) : GameStatus).STOP_BET, 0, result));
              window.setTimeout(() => {
                this.dispatch((_crd && changeGameStatus === void 0 ? (_reportPossibleCrUseOfchangeGameStatus({
                  error: Error()
                }), changeGameStatus) : changeGameStatus)((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
                  error: Error()
                }), GameStatus) : GameStatus).BET, count, result));
              }, 13000);
            }
          }, 1000);
        }

        bet() {
          if (this.props.gameStatus !== (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).BET) {
            return;
          }

          var isMyBet = false;
          var index = Math.floor(Math.random() * (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).gameOption.seatNumber + 1); // index = this.otherIndex;

          var chipIndex = Math.floor(Math.random() * (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).chipTypes.length);
          var betData = (_crd && initBetData === void 0 ? (_reportPossibleCrUseOfinitBetData({
            error: Error()
          }), initBetData) : initBetData)(index, "1", this.randomBetType(), (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).chipTypes[chipIndex].value);
          betData.isMyBet = isMyBet;
          this.dispatch((_crd && seatBet === void 0 ? (_reportPossibleCrUseOfseatBet({
            error: Error()
          }), seatBet) : seatBet)(betData));
          this.dispatch((_crd && changeSeatBet === void 0 ? (_reportPossibleCrUseOfchangeSeatBet({
            error: Error()
          }), changeSeatBet) : changeSeatBet)(betData));
        }

        randomBetType() {
          return this.random(6) + 1;
        }

        quitGame() {
          // let index = Math.floor(Math.random() * config.gameOption.seatNumber);
          this.dispatch((_crd && quitGame === void 0 ? (_reportPossibleCrUseOfquitGame({
            error: Error()
          }), quitGame) : quitGame)(this.props.seats[this.otherIndex].userId));
        }

        random(max) {
          return Math.floor(Math.random() * max);
        }

        useProps(key, value) {
          if (key === 'gameStatus') {
            if (value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).BET) {
              this.startCountdown(5);
            }
          }
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=023b3c6c794ccf43b24a12423572681bd7b87907.js.map