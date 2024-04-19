System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, BaseComponent, PrefabPathDefine, gameBoardViewModel, sourceManageSeletor, TaskSchedulerDefault, BaseViewModel, _dec, _class, _crd, ccclass, property, Thor_BoxPanel;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThor_AwardBox(extras) {
    _reporterNs.report("Thor_AwardBox", "./Thor_AwardBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAIIState(extras) {
    _reporterNs.report("AIIState", "./Thor_AwardBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAIIProps(extras) {
    _reporterNs.report("AIIProps", "./Thor_AwardBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAIEvent(extras) {
    _reporterNs.report("AIEvent", "./Thor_AwardBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameBoardViewModel(extras) {
    _reporterNs.report("gameBoardViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAward_IProps(extras) {
    _reporterNs.report("Award_IProps", "./Thor_AwardBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskSchedulerDefault(extras) {
    _reporterNs.report("TaskSchedulerDefault", "../../../utils/TaskScheduler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJactpotType(extras) {
    _reporterNs.report("JactpotType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseViewModel(extras) {
    _reporterNs.report("BaseViewModel", "../../../common/viewModel/BaseViewModel", _context.meta, extras);
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
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      PrefabPathDefine = _unresolved_3.PrefabPathDefine;
    }, function (_unresolved_4) {
      gameBoardViewModel = _unresolved_4.gameBoardViewModel;
      sourceManageSeletor = _unresolved_4.sourceManageSeletor;
    }, function (_unresolved_5) {
      TaskSchedulerDefault = _unresolved_5.TaskSchedulerDefault;
    }, function (_unresolved_6) {
      BaseViewModel = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "63ac1lAx7FM14UIIJrNNInw", "Thor_BoxPanel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'sys', 'tween', 'UIOpacity', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Thor_BoxPanel", Thor_BoxPanel = (_dec = ccclass('Thor_BoxPanel'), _dec(_class = class Thor_BoxPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.awardBoxMap = [];
          this.propertyNode = {
            /**宝箱外包裹 */
            props_Layout_box_wrap: new Node(),

            /**剩余次数外节点 */
            props_Layout_times: new Node(),

            /**剩余次数 */
            props_Label_sgTimes: new Label()
          };
          this.props = {
            openDoBoxData: null,
            remainGameTimes: 0,
            BONUS: 0
          };
          this.events = {
            onOpenHandler: boxId => {},
            onFreeGameAmoundChange: amount => {},
            allDoneHandler: () => {},
            updateTimesHandler: (times, jactpotType) => {}
          };
          this.flyTimer = -1;
          this.targetViewModel = void 0;
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === "openDoBoxData" && value.cur) {
            this.targetViewModel = this.awardBoxMap.find(item => item.comp.props.boxId === this.props.openDoBoxData.boxId);
            this.targetViewModel.setProps(this.props.openDoBoxData);
          }

          if (key === "remainGameTimes") {
            this.propertyNode.props_Label_sgTimes.string = this.props.remainGameTimes + '';
          }

          if (key === "BONUS") {
            this.targetViewModel.setProps({
              BONUS: value.cur
            });
          }
        }

        bindUI() {
          for (var i = 0; i < 20; i++) {
            var awardBox = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
              error: Error()
            }), BaseViewModel) : BaseViewModel)("Thor_AwardBox").mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine).AWARD_BOX).source).appendTo(this.propertyNode.props_Layout_box_wrap).setProps({
              boxId: i
            }).setEvent({
              onOpenHandler: boxId => {
                this.events.onOpenHandler(boxId);
              },
              updateTimesHandler: (times, jactpotType) => {
                this.events.updateTimesHandler(times, jactpotType);
              },
              checkFlyEndHandler: () => {
                // console.log(gameBoardViewModel.changeGameTypeTask.isExecute)
                this.flyTimer && window.clearTimeout(this.flyTimer);
                this.flyTimer = window.setTimeout(() => {
                  if ((_crd && gameBoardViewModel === void 0 ? (_reportPossibleCrUseOfgameBoardViewModel({
                    error: Error()
                  }), gameBoardViewModel) : gameBoardViewModel).changeGameTypeTask && !(_crd && gameBoardViewModel === void 0 ? (_reportPossibleCrUseOfgameBoardViewModel({
                    error: Error()
                  }), gameBoardViewModel) : gameBoardViewModel).changeGameTypeTask.isExecute) {
                    (_crd && TaskSchedulerDefault === void 0 ? (_reportPossibleCrUseOfTaskSchedulerDefault({
                      error: Error()
                    }), TaskSchedulerDefault) : TaskSchedulerDefault)().joinqQueue((_crd && gameBoardViewModel === void 0 ? (_reportPossibleCrUseOfgameBoardViewModel({
                      error: Error()
                    }), gameBoardViewModel) : gameBoardViewModel).changeGameTypeTask);
                    this.events.allDoneHandler();
                  }
                }, 3500);
              },
              onFreeGameAmoundChange: amount => {
                this.events.onFreeGameAmoundChange(amount);
              }
            });
            this.awardBoxMap.push(awardBox);
          }
        }

        getTimesNode() {
          return this.propertyNode.props_Layout_times;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d1cd9581af447d3c4a561c176ab824d848506131.js.map