System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Node, Toggle, UITransform, Widget, _decorator, tween, BaseComponent, DeskStatus, OperationType, PrefabPathDefine, roomChooseViewModel, sourceManageSeletor, config, SureViewModel, playerBet, _dec, _class, _crd, ccclass, property, AutoType, Qiuqiu_Operation;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeskStatus(extras) {
    _reporterNs.report("DeskStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOperationType(extras) {
    _reporterNs.report("OperationType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfroomChooseViewModel(extras) {
    _reporterNs.report("roomChooseViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSureViewModel(extras) {
    _reporterNs.report("SureViewModel", "../viewModel/SureViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayerBet(extras) {
    _reporterNs.report("playerBet", "../store/action/game", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Node = _cc.Node;
      Toggle = _cc.Toggle;
      UITransform = _cc.UITransform;
      Widget = _cc.Widget;
      _decorator = _cc._decorator;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      DeskStatus = _unresolved_3.DeskStatus;
      OperationType = _unresolved_3.OperationType;
    }, function (_unresolved_4) {
      PrefabPathDefine = _unresolved_4.PrefabPathDefine;
    }, function (_unresolved_5) {
      roomChooseViewModel = _unresolved_5.roomChooseViewModel;
      sourceManageSeletor = _unresolved_5.sourceManageSeletor;
    }, function (_unresolved_6) {
      config = _unresolved_6.default;
    }, function (_unresolved_7) {
      SureViewModel = _unresolved_7.default;
    }, function (_unresolved_8) {
      playerBet = _unresolved_8.playerBet;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b5536OYX3ZP9bQjywfmTRyn", "Qiuqiu_Operation", undefined);

      __checkObsolete__(['Label', 'Node', 'Toggle', 'UITransform', 'Widget', '_decorator', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      AutoType = /*#__PURE__*/function (AutoType) {
        AutoType[AutoType["CALL_ANY"] = 0] = "CALL_ANY";
        AutoType[AutoType["CALL"] = 1] = "CALL";
        AutoType[AutoType["PASS"] = 2] = "PASS";
        AutoType[AutoType["GIVE_UP"] = 3] = "GIVE_UP";
        AutoType[AutoType["PASS_OR_GIVE_UP"] = 4] = "PASS_OR_GIVE_UP";
        return AutoType;
      }(AutoType || {});

      _export("Qiuqiu_Operation", Qiuqiu_Operation = (_dec = ccclass('Qiuqiu_Operation'), _dec(_class = class Qiuqiu_Operation extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.lastBetAmount = -1;
          this.autoType = void 0;
          // private sureNode: Node;
          this.autoBetTimeT = -1;
          this.sureViewModel = void 0;
          this.propertyNode = {
            props_quiqui_operate_going: new Node(),
            props_ToggleGroup_operate_waiting: new Node(),
            props_ToggleGroup_operate_follow: new Node(),
            props_btn_operate_balik: new Node(),
            props_btn_operate_Naik: new Node(),
            props_btn_operate_lkut_or_cek: new Node(),
            props_label_operate_Ikut: new Label(),
            props_btn_operate_cekbalik: new Node(),
            props_btn_operate_cek: new Node(),
            props_btn_operate_lkutapapun: new Node(),
            props_btn_operate_autobalik: new Node(),
            props_btn_operate_autoikut: new Node(),
            props_btn_operate_ikutapaqun: new Node(),
            props_label_operate_autoIkut: new Label()
          };
          this.props = {
            deskStatus: null,
            playerMap: [],
            callAmount: 0,
            betAmount: 0,
            maxAmount: 0,
            opType: null,
            lastActiveSeatIndex: -1,
            currActiveSeatIndex: -1,
            seatIndex: 0
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          //玩家非自己操作的按钮事件
          this.propertyNode.props_btn_operate_cekbalik.on(Toggle.EventType.TOGGLE, toggle => {
            this.setAutoType(toggle, AutoType.PASS_OR_GIVE_UP);
          });
          this.propertyNode.props_btn_operate_cek.on(Toggle.EventType.TOGGLE, toggle => {
            this.setAutoType(toggle, AutoType.PASS);
          });
          this.propertyNode.props_btn_operate_lkutapapun.on(Toggle.EventType.TOGGLE, toggle => {
            this.setAutoType(toggle, AutoType.CALL_ANY);
          });
          this.propertyNode.props_btn_operate_autobalik.on(Toggle.EventType.TOGGLE, toggle => {
            this.setAutoType(toggle, AutoType.GIVE_UP);
          });
          this.propertyNode.props_btn_operate_autoikut.on(Toggle.EventType.TOGGLE, toggle => {
            this.setAutoType(toggle, AutoType.CALL);
          });
          this.propertyNode.props_btn_operate_ikutapaqun.on(Toggle.EventType.TOGGLE, toggle => {
            this.setAutoType(toggle, AutoType.CALL_ANY);
          }); //玩家自己操作的按钮事件

          this.propertyNode.props_btn_operate_Naik.on(Node.EventType.TOUCH_END, () => {
            // this.sureNode.active = !this.sureNode.active;
            this.sureViewModel.comp.showHideAnima(); // 玩家主动操作之后取消自动效果

            this.clearBetTime();
          });
          this.propertyNode.props_btn_operate_balik.on(Node.EventType.TOUCH_END, () => {
            // 玩家主动操作之后取消自动效果
            this.clearBetTime();
            this.lastBetAmount = -1;
            this.playerOp((_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
              error: Error()
            }), OperationType) : OperationType).GIVE_UP, this.props.betAmount);
          });
          this.propertyNode.props_btn_operate_lkut_or_cek.on(Node.EventType.TOUCH_END, () => {
            // 玩家主动操作之后取消自动效果
            this.clearBetTime();
            this.lastBetAmount = -1;
            this.playerOp((_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
              error: Error()
            }), OperationType) : OperationType).CALL, this.props.callAmount);
          });
        }
        /**获得最后一个操作的类型 */


        getLastOperationType() {
          if (this.props.lastActiveSeatIndex < 0) {
            return (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
              error: Error()
            }), OperationType) : OperationType).WAIT;
          }

          return this.props.playerMap[this.props.lastActiveSeatIndex].gameData.opType;
        }

        setAutoType(toggle, autoType) {
          this.autoType = toggle.isChecked ? autoType : null;
        }

        useProps(key, value) {
          switch (key) {
            case 'deskStatus':
            case 'currActiveSeatIndex':
              this.changeOperationType();
              break;

            case 'opType':
              this.props.opType === (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
                error: Error()
              }), OperationType) : OperationType).GIVE_UP && this.showAnima(false);
              break;
          }
        }

        isShow() {
          return this.props.deskStatus === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
            error: Error()
          }), DeskStatus) : DeskStatus).PLAYING;
        }

        isClearStatus() {
          return this.props.deskStatus === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
            error: Error()
          }), DeskStatus) : DeskStatus).WAITING || this.props.deskStatus === (_crd && DeskStatus === void 0 ? (_reportPossibleCrUseOfDeskStatus({
            error: Error()
          }), DeskStatus) : DeskStatus).COUNTDOWNING;
        }

        showOpeationType(show) {
          this.propertyNode.props_quiqui_operate_going.active = show;
          this.propertyNode.props_ToggleGroup_operate_waiting.active = show;
          this.propertyNode.props_ToggleGroup_operate_follow.active = show;
        }

        changeOperationType() {
          var show = this.isShow();

          if (!show || this.props.currActiveSeatIndex === -1) {
            this.showAnima(false);
            this.lastBetAmount = -1;

            if (this.isClearStatus()) {
              this.autoType = null;
              this.cancelSelect();
            } // this.sureNode.active = false;


            this.sureViewModel.comp.showHideAnima(false);
            return;
          } // 设置跟注金额


          this.setCellAmount();

          if (this.isMyOp()) {
            this.changePassAndCell();
            this.propertyNode.props_quiqui_operate_going.active = true;
            this.propertyNode.props_ToggleGroup_operate_waiting.active = false;
            this.propertyNode.props_ToggleGroup_operate_follow.active = false;
          } else {
            this.propertyNode.props_quiqui_operate_going.active = false; // this.sureNode.active = false;

            this.sureViewModel.comp.showHideAnima(false);

            if (this.lastBetAmount === this.props.betAmount) {
              return;
            }

            this.propertyNode.props_ToggleGroup_operate_waiting.active = this.props.callAmount === 0;
            this.propertyNode.props_ToggleGroup_operate_follow.active = this.props.callAmount > 0;
            this.setSelect();
          }

          this.showAnima(true);
          this.lastBetAmount = this.props.betAmount;
        }
        /**是否自己操作 */


        isMyOp() {
          return this.props.seatIndex === this.props.currActiveSeatIndex;
        }
        /**设置选中 */


        setSelect() {
          if (this.autoType === null) {
            return;
          }

          this.cancelSelect();

          if (this.propertyNode.props_ToggleGroup_operate_waiting.active) {
            this.propertyNode.props_btn_operate_cekbalik.getComponent(Toggle).isChecked = this.autoType === AutoType.PASS_OR_GIVE_UP || this.autoType === AutoType.GIVE_UP;
            this.propertyNode.props_btn_operate_lkutapapun.getComponent(Toggle).isChecked = this.autoType === AutoType.CALL_ANY; // 如果从跟注切换到不需要加注时，那么自动效果失效

            this.autoType === AutoType.CALL && (this.autoType = null);
          } else if (this.propertyNode.props_ToggleGroup_operate_follow.active) {
            this.propertyNode.props_btn_operate_autobalik.getComponent(Toggle).isChecked = this.autoType === AutoType.PASS_OR_GIVE_UP || this.autoType === AutoType.GIVE_UP;
            this.propertyNode.props_btn_operate_ikutapaqun.getComponent(Toggle).isChecked = this.autoType === AutoType.CALL_ANY; // 如果从过切换到需要加注时，那么自动就失效

            this.autoType === AutoType.PASS && (this.autoType = null);
          }
        }
        /**当自己操作时，切换过还是跟 */


        changePassAndCell() {
          this.propertyNode.props_btn_operate_lkut_or_cek.children.forEach(v => v.active = false);
          this.propertyNode.props_btn_operate_lkut_or_cek.getChildByName('props_spr_oprate_Ikut').active = this.props.betAmount > 0;
          var labelIkut = this.propertyNode.props_label_operate_Ikut;
          labelIkut.node.active = this.props.betAmount > 0;
          this.propertyNode.props_btn_operate_lkut_or_cek.getChildByName('props_spr_oprate_cek').active = this.props.betAmount === 0;
        }

        setCellAmount() {
          var amount = this.props.callAmount.formatAmountWithLetter(true);
          this.propertyNode.props_label_operate_Ikut.string = amount;
          this.propertyNode.props_label_operate_autoIkut.string = amount;
        }
        /**控制操作面板 */


        showAnima(show) {
          var width = this.node.getComponent(UITransform).width;
          var widget = this.node.getComponent(Widget); // 重连不要动画

          if ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).isReconnect) {
            widget.bottom === 0 && (widget.bottom -= width);
            show && (widget.bottom = 0);
          } else {
            widget.bottom === 0 && (widget.bottom -= width);
            show && tween(widget).to(0.5, {
              bottom: 0
            }).call(() => {
              // 面板显示出来之后如果是自己操作就处理自动操作
              this.node.isValid && this.isMyOp() && this.autoHandle();
            }).start();
          }
        }

        cancelSelect() {
          this.propertyNode.props_ToggleGroup_operate_waiting.children.map(v => v.getComponent(Toggle)).forEach(v => v.isChecked = false);
          this.propertyNode.props_ToggleGroup_operate_follow.children.map(v => v.getComponent(Toggle)).forEach(v => v.isChecked = false);
        }

        bindUI() {
          this.showOpeationType(false);
          this.showAnima(false);
          this.autoType = null;
          this.cancelSelect();
          this.initFillPanel();
        }
        /**自动处理 */


        autoHandle() {
          if (this.autoType === null) {
            return;
          }

          var opType = (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
            error: Error()
          }), OperationType) : OperationType).GIVE_UP;

          switch (this.autoType) {
            case AutoType.CALL:
              opType = (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
                error: Error()
              }), OperationType) : OperationType).CALL;
              break;

            case AutoType.CALL_ANY:
              opType = (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
                error: Error()
              }), OperationType) : OperationType).CALL;
              break;

            case AutoType.GIVE_UP:
              opType = (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
                error: Error()
              }), OperationType) : OperationType).GIVE_UP;
              break;

            case AutoType.PASS:
              opType = (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
                error: Error()
              }), OperationType) : OperationType).PASS;
              break;

            case AutoType.PASS_OR_GIVE_UP:
              opType = this.props.betAmount === 0 ? (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
                error: Error()
              }), OperationType) : OperationType).PASS : (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
                error: Error()
              }), OperationType) : OperationType).GIVE_UP;
              break;
          } // 延迟1秒之后自动发送下注信息


          this.autoBetTimeT = window.setTimeout(() => {
            this.playerOp(opType, this.props.callAmount);
          }, 1000);
        }
        /**
         * 玩家操作
         * @param opType 操作类型
         * @param betAmount 下注金额
         */


        playerOp(opType, betAmount) {
          (_crd && roomChooseViewModel === void 0 ? (_reportPossibleCrUseOfroomChooseViewModel({
            error: Error()
          }), roomChooseViewModel) : roomChooseViewModel).mainBoardViewModel.playerOp(opType, betAmount);
        }

        clearBetTime() {
          this.autoType = null;
          this.autoBetTimeT && window.clearTimeout(this.autoBetTimeT);
          this.autoBetTimeT = -1;
        }
        /**初始化加注面板 */


        initFillPanel() {
          this.sureViewModel = new (_crd && SureViewModel === void 0 ? (_reportPossibleCrUseOfSureViewModel({
            error: Error()
          }), SureViewModel) : SureViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).prefabs_quiqui_sure).source).appendTo(this.node.parent).connect();
          this.sureViewModel.setEvent({
            sendBet: (betAmount, opType) => {
              if ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).isTest) {
                this.dispatch((_crd && playerBet === void 0 ? (_reportPossibleCrUseOfplayerBet({
                  error: Error()
                }), playerBet) : playerBet)((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).testConfig.uid, betAmount, (_crd && OperationType === void 0 ? (_reportPossibleCrUseOfOperationType({
                  error: Error()
                }), OperationType) : OperationType).CALL, 0));
              } else {
                this.playerOp(opType, betAmount);
              }
            }
          }); // this.sureNode = this.sureViewModel.viewNode;
          // this.sureNode.active = false;

          this.sureViewModel.viewNode.active = false;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=970316b7282dd183a154bcb185b1ef8e180b65b4.js.map