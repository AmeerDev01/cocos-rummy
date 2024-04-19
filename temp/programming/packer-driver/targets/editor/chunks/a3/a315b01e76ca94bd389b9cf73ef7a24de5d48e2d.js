System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, instantiate, tween, Vec3, BaseComponent, config, TaskScheduler, Task, cardViewModel, GameStatus, playDealCard, _dec, _class, _crd, ccclass, property, BandarQiuQiu_sendCard;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskScheduler(extras) {
    _reporterNs.report("TaskScheduler", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTask(extras) {
    _reporterNs.report("Task", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcardViewModel(extras) {
    _reporterNs.report("cardViewModel", "../viewModel/BandarQiuQiuGameBoardViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayDealCard(extras) {
    _reporterNs.report("playDealCard", "../index", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      config = _unresolved_3.default;
    }, function (_unresolved_4) {
      TaskScheduler = _unresolved_4.default;
      Task = _unresolved_4.Task;
    }, function (_unresolved_5) {
      cardViewModel = _unresolved_5.cardViewModel;
    }, function (_unresolved_6) {
      GameStatus = _unresolved_6.GameStatus;
    }, function (_unresolved_7) {
      playDealCard = _unresolved_7.playDealCard;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9d184rxpbtK2oM0ZkkBL/wW", "BandarQiuQiu_sendCard", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Animation', 'instantiate', 'tween', 'Vec3', 'UITransform', 'Label', 'game', 'Game']);

      // import { playGame } from '../index';
      ({
        ccclass,
        property
      } = _decorator);

      _export("BandarQiuQiu_sendCard", BandarQiuQiu_sendCard = (_dec = ccclass('BandarQiuQiu_sendCard'), _dec(_class = class BandarQiuQiu_sendCard extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.allDecks = [];
          this.twinCard = [];
          this.randomNumbers = [];
          this.propertyNode = {
            props_spr_sendCard: new Node() // props_spr_all_send_card: new Node(),
            // props_spr_card_item: new Node(),

          };
          this.props = {
            gameStatus: null
          };
          this.events = {};
        }

        start() {
          this.createCards();
        }

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === "gameStatus") {
            if (value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).BET) {// this.createCards()
            } else {// this.twinCard = [];
              // this.allDecks = [];
            }
          }
        }
        /**发牌 */


        createCards() {
          // console.log(("create"));
          this.allDecks = [];
          this.twinCard = [];

          if (!this.propertyNode || !this.node) {
            return;
          }

          this.propertyNode.props_spr_sendCard.active = true;
          this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
            error: Error()
          }), Task) : Task)(done => {
            (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).cardPosition.forEach((endP, i) => {
              let card = instantiate(this.propertyNode.props_spr_sendCard);
              card.scale = new Vec3(1, 1);
              let task = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                (_crd && playDealCard === void 0 ? (_reportPossibleCrUseOfplayDealCard({
                  error: Error()
                }), playDealCard) : playDealCard)();

                if (!this.node) {
                  return;
                }

                this.node.addChild(card);
                tween(card).to(0.1, {
                  position: new Vec3(endP.x, endP.y)
                }, {
                  easing: 'quintOut'
                }).start();
                this.allDecks.push(card);
                window.setTimeout(() => done(), 100);
              });
              this.taskScheduler.joinqQueue(task, false);
            });
            window.setTimeout(() => done(), 500);
          }), false).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
            error: Error()
          }), Task) : Task)(done => {
            this.propertyNode.props_spr_sendCard.active = false;
            window.setTimeout(() => done(), 500);
          }), false).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
            error: Error()
          }), Task) : Task)(done => {
            if (!this.allDecks || this.allDecks.length === 0) {
              return;
            }

            this.randomNumbers = this.getRandomUniqueNumbers(0, 13, 2);
            this.randomNumbers.forEach(item => {
              let card = this.allDecks[item];
              tween(card).to(0.15, {
                position: new Vec3(card.position.x, card.position.y + 30)
              }).start();
            });
            window.setTimeout(() => done(), 500);
          }), false).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
            error: Error()
          }), Task) : Task)(done => {
            if (!this.allDecks || this.allDecks.length === 0) {
              return;
            }

            this.allDecks.forEach((c, d) => {
              if (d !== this.randomNumbers[0] && d !== this.randomNumbers[1]) {
                this.node.removeChild(c);
              } else {
                this.twinCard.push(c);
              }
            });
            window.setTimeout(() => done(), 500);
          }), false).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
            error: Error()
          }), Task) : Task)(done => {
            // console.log(this.twinCard);
            if (!this.twinCard || this.twinCard.length == 0) {
              return;
            }

            if ((_crd && cardViewModel === void 0 ? (_reportPossibleCrUseOfcardViewModel({
              error: Error()
            }), cardViewModel) : cardViewModel).isUnMount) return;
            (_crd && cardViewModel === void 0 ? (_reportPossibleCrUseOfcardViewModel({
              error: Error()
            }), cardViewModel) : cardViewModel).comp.initCardBack();
            this.twinCard.forEach((c, d) => {
              let card = instantiate(c);
              this.node.addChild(card);
              tween(c).to(0.5, {
                position: new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).cardItemPosition[d][0].x, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).cardItemPosition[d][0].y)
              }).call(() => {
                this.node.removeChild(c);
              }).start();
              tween(card).to(0.5, {
                position: new Vec3((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).cardItemPosition[d][1].x, (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).cardItemPosition[d][1].y)
              }).call(() => {
                this.node.removeChild(card);
              }).start();
              window.setTimeout(() => done(), 500);
            });
          }), false).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
            error: Error()
          }), Task) : Task)(done => {
            if ((_crd && cardViewModel === void 0 ? (_reportPossibleCrUseOfcardViewModel({
              error: Error()
            }), cardViewModel) : cardViewModel).isUnMount) return;
            (_crd && cardViewModel === void 0 ? (_reportPossibleCrUseOfcardViewModel({
              error: Error()
            }), cardViewModel) : cardViewModel).comp.initCardBack();
            let backCard = (_crd && cardViewModel === void 0 ? (_reportPossibleCrUseOfcardViewModel({
              error: Error()
            }), cardViewModel) : cardViewModel).comp.getPropertyNode().props_node_card_back;
            backCard.active = true;
            window.setTimeout(() => done(), 500);
          }), false); //     .joinqQueue(new Task((done) => {
          //     window.setTimeout(() => done(), 500);
          // }),false)
        }
        /**取min-max中count个不重复的随机数 */


        getRandomUniqueNumbers(min, max, count) {
          const uniqueNumbers = new Set();

          while (uniqueNumbers.size < count) {
            uniqueNumbers.add(Math.floor(Math.random() * (max + 1 - min)) + min);
          }

          return Array.from(uniqueNumbers);
        }

        bindUI() {
          this.propertyNode.props_spr_sendCard.active = false;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a315b01e76ca94bd389b9cf73ef7a24de5d48e2d.js.map