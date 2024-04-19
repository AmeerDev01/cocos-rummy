System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, BaseComponent, _dec, _class, _crd, ccclass, property, Thor_BoxPanel;

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

  function _reportPossibleCrUseOfAward_IProps(extras) {
    _reporterNs.report("Award_IProps", "./Thor_AwardBox", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1ac555BOpNPTb3y4sAfXbd+", "Thor_BoxPanel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'sys', 'tween', 'UIOpacity', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Thor_BoxPanel", Thor_BoxPanel = (_dec = ccclass('Thor_BoxPanel'), _dec(_class = class Thor_BoxPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
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

        bindUI() {// for (let i = 0; i < 20; i++) {
          // 	const awardBox = new BaseViewModel<Thor_AwardBox, AIIState, AIIProps, AIEvent>("Thor_AwardBox").mountView(sourceManageSeletor().getFile(PrefabPathDefine.AWARD_BOX).source)
          // 		.appendTo(this.propertyNode.props_Layout_box_wrap).setProps({ boxId: i }).setEvent({
          // 			onOpenHandler: (boxId) => {
          // 				this.events.onOpenHandler(boxId)
          // 			},
          // 			updateTimesHandler: (times, jactpotType) => {
          // 				this.events.updateTimesHandler(times, jactpotType)
          // 			},
          // 			checkFlyEndHandler: () => {
          // 				// console.log(gameBoardViewModel.changeGameTypeTask.isExecute)
          // 				this.flyTimer && window.clearTimeout(this.flyTimer)
          // 				this.flyTimer = window.setTimeout(() => {
          // 					if (gameBoardViewModel.changeGameTypeTask && !gameBoardViewModel.changeGameTypeTask.isExecute) {
          // 						TaskSchedulerDefault().joinqQueue(gameBoardViewModel.changeGameTypeTask)
          // 						this.events.allDoneHandler()
          // 					}
          // 				}, 3500)
          // 			},
          // 			onFreeGameAmoundChange: (amount: number) => {
          // 				this.events.onFreeGameAmoundChange(amount)
          // 			}
          // 		})
          // 	this.awardBoxMap.push(awardBox)
          // }
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
//# sourceMappingURL=926d49866ca491a910f291b8f6f4a61f6f2581d6.js.map