System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, Sprite, tween, Vec3, Animation, BaseComponent, mainGameViewModel, sourceManageSelector, SpriteFramePathDefine, TaskScheduler, Task, GameStatus, _dec, _class, _crd, ccclass, property, Bandar_bet_history;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainGameViewModel(extras) {
    _reporterNs.report("mainGameViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSelector(extras) {
    _reporterNs.report("sourceManageSelector", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteFramePathDefine(extras) {
    _reporterNs.report("SpriteFramePathDefine", "../sourceDefine/spriteDefine", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      mainGameViewModel = _unresolved_3.mainGameViewModel;
      sourceManageSelector = _unresolved_3.sourceManageSelector;
    }, function (_unresolved_4) {
      SpriteFramePathDefine = _unresolved_4.SpriteFramePathDefine;
    }, function (_unresolved_5) {
      TaskScheduler = _unresolved_5.default;
      Task = _unresolved_5.Task;
    }, function (_unresolved_6) {
      GameStatus = _unresolved_6.GameStatus;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d4bfeCN4AdPrpp3qnFbx9kj", "Bandar_bet_history", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Node', 'Sprite', 'SpriteFrame', 'tween', 'Vec3', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bandar_bet_history", Bandar_bet_history = (_dec = ccclass('Bandar_bet_history'), _dec(_class = class Bandar_bet_history extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.taskScheduler = new (_crd && TaskScheduler === void 0 ? (_reportPossibleCrUseOfTaskScheduler({
            error: Error()
          }), TaskScheduler) : TaskScheduler)();
          this.oldAllResultList = [];
          this.newAllResultList = [];
          this.propertyNode = {
            props_layout_icon_black: new Node(),
            props_layout_icon_red: new Node(),
            props_layout_icon_plum: new Node(),
            props_layout_icon_diamond: new Node(),
            props_spr_bet_icon: new Node() // props_bet_history_list:new Node(),

          };
          this.props = {
            result1: [],
            result2: [],
            result3: [],
            result4: [],
            gameStatus: null
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          if (key == "result1") {
            // console.log("result1",value.cur);
            if (!value.cur && value.cur.length === 0) return;
            this.createNewResult(this.propertyNode.props_layout_icon_black, value.cur, true);
          }

          if (key == "result2") {
            if (!value.cur && value.cur.length === 0) return;
            this.createNewResult(this.propertyNode.props_layout_icon_red, value.cur, true);
          }

          if (key == "result3") {
            if (!value.cur && value.cur.length === 0) return;
            this.createNewResult(this.propertyNode.props_layout_icon_plum, value.cur, true);
          }

          if (key == "result4") {
            if (!value.cur && value.cur.length === 0) return;
            this.createNewResult(this.propertyNode.props_layout_icon_diamond, value.cur, true);
          }

          if (key === "gameStatus") {
            if (value.cur === (_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
              error: Error()
            }), GameStatus) : GameStatus).WAIT) {
              if (this.newAllResultList.length !== 0) {
                this.oldAllResultList = [...this.newAllResultList];
                this.newAllResultList = [];
              }
            }
          }
        }

        createNewResult(parentNode, resultItem, isTween) {
          if (isTween === void 0) {
            isTween = true;
          }

          var children = parentNode.children; // let position=children[1].getPosition();

          var position = new Vec3(-66, -2, 0);
          var offset = 18;
          var iconNode = instantiate(this.propertyNode.props_spr_bet_icon); //克隆输赢图标

          var newResultList = [];
          var oldAllResult = [];
          var resultII = resultItem;
          this.taskScheduler.joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
            error: Error()
          }), Task) : Task)(done => {
            if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
              error: Error()
            }), mainGameViewModel) : mainGameViewModel).isUnMount || !resultItem || !resultII) return;
            resultII.forEach((item, index) => {
              var childNode = instantiate(iconNode); //克隆输赢图标

              childNode.getComponent(Sprite).spriteFrame = this.getSpriteFrame(item);

              if (index === resultII.length - 1) {
                childNode.setPosition(new Vec3(position.x + offset * (index - 1), -2));
              } else {
                childNode.setPosition(new Vec3(position.x + offset * index, position.y));
              }

              newResultList.push(childNode);
              this.newAllResultList.push(childNode);
              parentNode.addChild(childNode);

              if (index === resultII.length - 1) {
                childNode.getComponent(Animation).play();
              }
            });
            done();
          }), false).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
            error: Error()
          }), Task) : Task)(done => {
            if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
              error: Error()
            }), mainGameViewModel) : mainGameViewModel).isUnMount || !this.oldAllResultList) return;
            this.oldAllResultList.forEach((v, i) => {
              //移除后九个节点，避免在移动时出现重影
              if (i % 10 !== 0) {
                if (!this.node || !parentNode || !parentNode.children) return;
                parentNode.removeChild(v);
              } else {
                oldAllResult.push(v);
              }
            });
            done();
          }), false).joinqQueue(new (_crd && Task === void 0 ? (_reportPossibleCrUseOfTask({
            error: Error()
          }), Task) : Task)(done => {
            if ((_crd && mainGameViewModel === void 0 ? (_reportPossibleCrUseOfmainGameViewModel({
              error: Error()
            }), mainGameViewModel) : mainGameViewModel).isUnMount || !oldAllResult || !newResultList) return;
            oldAllResult.forEach((item, i) => {
              tween(item).to(0.5, {
                position: new Vec3(item.position.x - offset, item.position.y)
              }).call(() => {
                if (!this.node || !parentNode || !parentNode.children) return;
                parentNode.removeChild(item);
              }).start(); // console.log(this.node);

              newResultList.forEach((v, index) => {
                if (index !== newResultList.length - 1) {
                  tween(v).to(0.5, {
                    position: new Vec3(v.position.x - offset, v.position.y)
                  }).call(() => {}).start();
                }
              });
            });
            done(); // window.setTimeout(()=>done(),0)
          }), false);
        }

        createResult(parentNode, resultItem, isTween) {
          if (isTween === void 0) {
            isTween = true;
          }

          var children = parentNode.children;
          var position = new Vec3(-84, -2, 0);
          var offset = 18;
          var iconNode = instantiate(this.propertyNode.props_spr_bet_icon); //克隆输赢图标

          var result = resultItem;
          parentNode.removeAllChildren();
          result.forEach((item, index) => {
            var childNode = instantiate(iconNode); //克隆输赢图标

            childNode.getComponent(Sprite).spriteFrame = this.getSpriteFrame(item);
            childNode.setPosition(new Vec3(position.x + offset * index, position.y)); // if(index===0){
            // 	this.oldAllResultList.push(childNode)
            // }

            this.oldAllResultList.push(childNode);
            parentNode.addChild(childNode);

            if (index === result.length - 1) {
              childNode.getComponent(Animation).play();
            }
          });
        }

        getSpriteFrame(result) {
          var fileName = '';

          if (result === 1) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_HISTORY_WIN;
          } else if (result === 2) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_HISTORY_LOSE;
          }

          return (_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile(fileName).source;
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=389cdb43b6e385083d04b71f59854b2ea52c190d.js.map