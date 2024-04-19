System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, tween, Vec3, BaseComponent, config, TaskScheduler, Task, GameStatus, mainGameViewModel, playDealCard, _dec, _class, _crd, ccclass, property, Bandar_sendCard;

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

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainGameViewModel(extras) {
    _reporterNs.report("mainGameViewModel", "../index", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Node = _cc.Node;
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
      GameStatus = _unresolved_5.GameStatus;
    }, function (_unresolved_6) {
      mainGameViewModel = _unresolved_6.mainGameViewModel;
      playDealCard = _unresolved_6.playDealCard;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9e549XsnJNG4Y7P/JRI11jd", "Bandar_sendCard", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Node', 'Quat', 'tween', 'UIOpacity', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bandar_sendCard", Bandar_sendCard = (_dec = ccclass('Bandar_sendCard'), _dec(_class = class Bandar_sendCard extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.propertyNode = {
            props_all_card: new Node(),
            props_spr_card: new Node()
          };
          this.props = {
            countDown: 0,
            seconds: 0,
            gameStatus: null
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {
            seconds: 0
          };
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === "seconds") {
            // console.log("this.state.seconds",value.cur);
            this.setState({
              seconds: value.cur
            });
          }

          if (key === "gameStatus") {
            this.propertyNode.props_spr_card.active = value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).BET;

            if (value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).BET) {
              this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                //  console.log(this.state.seconds);
                //  console.log(this.props.seconds);
                if (this.state.seconds > 3) {
                  this.createCard();
                }

                done();
              }), false).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
                error: Error()
              }), Task) : Task)(done => {
                this.propertyNode.props_spr_card.active = false;
                done();
              }), false);
            } else {
              window.setTimeout(() => {
                if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
                  error: Error()
                }), mainGameViewModel) : mainGameViewModel).isUnMount) {
                  return;
                }

                if (!(_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
                  error: Error()
                }), mainGameViewModel) : mainGameViewModel).isUnMount) {
                  this.removeCard(); //移除所有发牌时添加的牌节点
                }
              }, 500);
            }
          }
        }
        /**发牌 */


        createCard() {
          (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).cardPosition.forEach((endP, index) => {
            // playDealCard()
            this.propertyNode.props_spr_card.active = true;
            var card = instantiate(this.propertyNode.props_spr_card);
            var scaling;

            if (index % 5 === 0) {
              scaling = new Vec3(1, 1);
            } else {
              scaling = new Vec3(0.77, 0.77);
            }

            var task = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
              error: Error()
            }), Task) : Task)(done => {
              (_crd && playDealCard === void 0 ? (_reportPossibleCrUseOfplayDealCard({
                error: Error()
              }), playDealCard) : playDealCard)();
              this.propertyNode.props_all_card.addChild(card);
              tween(card).to(0.15, {
                position: new Vec3(endP.x, endP.y),
                scale: scaling
              }).start();
              window.setTimeout(() => done(), 100);
            });
            this.taskScheduler.joinqQueue(task, false);
          });
        }
        /**移除发牌的节点及添加的牌 */


        removeCard() {
          var task = new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
            error: Error()
          }), Task) : Task)(done => {
            this.propertyNode.props_all_card.removeAllChildren();
            window.setTimeout(() => done(), 1000);
          });
          this.taskScheduler.joinqQueue(task, false);
        }

        destroyCallBack() {
          this.taskScheduler.destoryQueue();
        }

        bindUI() {
          this.propertyNode.props_spr_card.active = this.props.gameStatus === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).BET;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f37dd664d280bc9a129911fbd15ae0416fcdae4b.js.map