System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "fast-deep-equal", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, director, instantiate, Label, Node, tween, Vec3, BaseComponent, setLoadingAction, setSubGameInfoAction, ToastPosition, ToastType, isEqual, BundleSplit, baseBoardView, hallAudio, SoundPathDefine, sendNativeVibrate, _dec, _class, _crd, ccclass, property, Hall_Baseboard;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetLoadingAction(extras) {
    _reporterNs.report("setLoadingAction", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetSubGameInfoAction(extras) {
    _reporterNs.report("setSubGameInfoAction", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToastPosition(extras) {
    _reporterNs.report("ToastPosition", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToastType(extras) {
    _reporterNs.report("ToastType", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisEqual(extras) {
    _reporterNs.report("isEqual", "fast-deep-equal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallGameGateType(extras) {
    _reporterNs.report("HallGameGateType", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBundleSplit(extras) {
    _reporterNs.report("BundleSplit", "../../utils/BundleSplit", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbaseBoardView(extras) {
    _reporterNs.report("baseBoardView", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhallAudio(extras) {
    _reporterNs.report("hallAudio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsendNativeVibrate(extras) {
    _reporterNs.report("sendNativeVibrate", "../../common/bridge", _context.meta, extras);
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
      director = _cc.director;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      setLoadingAction = _unresolved_3.setLoadingAction;
      setSubGameInfoAction = _unresolved_3.setSubGameInfoAction;
      ToastPosition = _unresolved_3.ToastPosition;
      ToastType = _unresolved_3.ToastType;
    }, function (_fastDeepEqual) {
      isEqual = _fastDeepEqual.default;
    }, function (_unresolved_4) {
      BundleSplit = _unresolved_4.default;
    }, function (_unresolved_5) {
      baseBoardView = _unresolved_5.baseBoardView;
      hallAudio = _unresolved_5.hallAudio;
    }, function (_unresolved_6) {
      SoundPathDefine = _unresolved_6.SoundPathDefine;
    }, function (_unresolved_7) {
      sendNativeVibrate = _unresolved_7.sendNativeVibrate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "08afaFjMwdLE6aCtkXXR/3y", "Hall_Baseboard", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'director', 'find', 'game', 'instantiate', 'Label', 'Node', 'sys', 'tween', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_Baseboard", Hall_Baseboard = (_dec = ccclass('Hall_Baseboard'), _dec(_class = class Hall_Baseboard extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.toastTimer = 0;
          this.openGameId = 0;
          this.propertyNode = {
            /**底板重启 */
            props_restart: new Node(),

            /**底板重启按钮 */
            props_Button_restart: new Node(),

            /**toast模板节点(正常提示) */
            props_toast_template_normal: new Node(),

            /**toast模板节点(错误提示) */
            props_toast_template_error: new Node(),

            /**放置toast的包裹节点 */
            props_toastWrap_bottom: new Node(),
            props_toastWrap_middle: new Node(),
            props_toastWrap_top: new Node(),

            /**放置主内容的面板 */
            props_mainBoard: new Node(),

            /**加载中的节点 */
            props_loading: new Node(),

            /**关闭loading */
            props_btn_close_loading: new Button(),

            /**盛放子游戏的node */
            props_subGameBoard: new Node(),

            /**游戏的头部框 */
            // props_subGameBoardHeader: new Node(),

            /**关闭按钮 */
            // props_closeButton: new Node(),

            /**加载图 */
            props_icon_dating_loading: new Node(),

            /**头部条 */
            // props_subGameHeader: new Node(),

            /**跑马灯 */
            props_marquee: new Node(),

            /**中奖通告 */
            props_winnerBox: new Node()
          };
          this.props = {
            toastData: {
              content: "",
              type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                error: Error()
              }), ToastType) : ToastType).NORMAL
            },
            isLoading: false,
            isAllowCloseLoading: false,
            openGameInfo: null
          };
          this.events = {
            toastDone: () => {},
            onGameClose: () => {}
          };
          this.closeGameHandler = void 0;
          this.closeGameHandlerTempList = [];
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          // this.propertyNode.props_Button_restart.on(Node.EventType.TOUCH_END, () => {
          // 	sys.isNative && game.restart()
          // })
          // this.propertyNode.props_subGameHeader.getChildByName("Up_Left").getChildByName("Back_Bg").on(Node.EventType.TOUCH_END, () => {
          // 	// this.closeSubGame()
          // 	(find("Canvas/baseBoard").getComponent('Hall_Baseboard') as any).closeSubGame()
          // })
          this.propertyNode.props_btn_close_loading.node.on(Node.EventType.TOUCH_END, () => {
            this.dispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
              error: Error()
            }), setLoadingAction) : setLoadingAction)({
              isShow: false
            }));
          });
        }

        useProps(key, value) {
          if (key === "toastData") {
            if (!(_crd && isEqual === void 0 ? (_reportPossibleCrUseOfisEqual({
              error: Error()
            }), isEqual) : isEqual)(value.pre, value.cur) && value.cur.content) {
              this.addToast(value.cur);
            }
          }

          if (key === "isLoading") {
            this.propertyNode.props_loading.active = value.cur;
          }

          if (key === "isAllowCloseLoading") {
            this.propertyNode.props_btn_close_loading.node.active = value.cur;
          }

          if (key === "openGameInfo") {
            if (value.cur) {
              //打开游戏
              (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
                error: Error()
              }), hallAudio) : hallAudio).pause();
              (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
                error: Error()
              }), hallAudio) : hallAudio).disable = true;
              this.dispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
                error: Error()
              }), setLoadingAction) : setLoadingAction)({
                isShow: false
              }));
              (_crd && sendNativeVibrate === void 0 ? (_reportPossibleCrUseOfsendNativeVibrate({
                error: Error()
              }), sendNativeVibrate) : sendNativeVibrate)(200);
              (_crd && baseBoardView === void 0 ? (_reportPossibleCrUseOfbaseBoardView({
                error: Error()
              }), baseBoardView) : baseBoardView).mainPanelViewModel.viewNode.active = false;
              this.closeGameHandler = this.closeGameHandlerTempList.find(item => item.gameId === this.props.openGameInfo.gameId).closeFn;
            }
          }
        }

        bindUI() {
          director.addPersistRootNode(this.node); // new MarqueeViewModel().mountView(sourceManageSeletor("common").getFile(PrefabPathDefine.MARQUEE).source).appendTo(this.propertyNode.props_marquee).connect()
        }

        /**开始初始化子游戏 */
        beginInitSubGame(gameInfo) {
          // if (this.openGameId) return
          // 打开游戏底板
          this.propertyNode.props_subGameBoard.active = true; // this.propertyNode.props_subGameHeader.active = true
          // this.propertyNode.props_subGameBoardHeader.active = true
          // this.propertyNode.props_subGameBoardHeader.getChildByName("subGameName").getComponent(Label).string = gameInfo.gameName

          this.openGameId = gameInfo.gameId;
          var closeFn = gameInfo.startUpHandler(this.propertyNode.props_subGameBoard);

          if (this.closeGameHandlerTempList.some(i => i.gameId === gameInfo.gameId)) {
            this.closeGameHandlerTempList.find(i => i.gameId === gameInfo.gameId).closeFn = closeFn;
          } else {
            this.closeGameHandlerTempList.push({
              gameId: gameInfo.gameId,
              closeFn: closeFn
            });
          } // effect1(this.propertyNode.props_subGameBoard).enter().then(() => { })
          // director.loadScene("fruit777")

        }

        closeSubGame(isPre) {
          if (isPre === void 0) {
            isPre = false;
          }

          if (!this.props.openGameInfo) return;
          this.openGameId = 0;
          var gameId = this.props.openGameInfo.gameId; // effect1(this.propertyNode.props_subGameBoard).out(false).then(() => { })

          (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
            error: Error()
          }), hallAudio) : hallAudio).disable = false;
          (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
            error: Error()
          }), hallAudio) : hallAudio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).BTU_CLICK);

          if (!isPre) {
            if (this.closeGameHandler) {
              this.closeGameHandler();
            } else {
              console.error("未返回结束游戏的方案");
            }
          }

          this.propertyNode.props_subGameBoard.destroyAllChildren();
          this.events.onGameClose();
          (_crd && baseBoardView === void 0 ? (_reportPossibleCrUseOfbaseBoardView({
            error: Error()
          }), baseBoardView) : baseBoardView).mainPanelViewModel.viewNode.active = true;
          this.dispatch((_crd && setSubGameInfoAction === void 0 ? (_reportPossibleCrUseOfsetSubGameInfoAction({
            error: Error()
          }), setSubGameInfoAction) : setSubGameInfoAction)(null)); // this.propertyNode.props_subGameBoard.active = false
          // hallAudio.resume()

          (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
            error: Error()
          }), hallAudio) : hallAudio).resume(); //.play(SoundPathDefine.MAIN_BGM, true)

          this.closeGameHandler = undefined;
          (_crd && baseBoardView === void 0 ? (_reportPossibleCrUseOfbaseBoardView({
            error: Error()
          }), baseBoardView) : baseBoardView).mainPanelViewModel.openReliefPanel();
          this.scheduleOnce(() => {
            (_crd && BundleSplit === void 0 ? (_reportPossibleCrUseOfBundleSplit({
              error: Error()
            }), BundleSplit) : BundleSplit).releaseBundle(gameId);
          }, 1); // this.propertyNode.props_subGameHeader.active = false
        }

        addToast(toastObj) {
          var toastWrap;

          switch (toastObj.position) {
            case (_crd && ToastPosition === void 0 ? (_reportPossibleCrUseOfToastPosition({
              error: Error()
            }), ToastPosition) : ToastPosition).BOTTOM:
              toastWrap = this.propertyNode.props_toastWrap_bottom;
              break;

            case (_crd && ToastPosition === void 0 ? (_reportPossibleCrUseOfToastPosition({
              error: Error()
            }), ToastPosition) : ToastPosition).MIDDLE:
              toastWrap = this.propertyNode.props_toastWrap_middle;
              break;

            case (_crd && ToastPosition === void 0 ? (_reportPossibleCrUseOfToastPosition({
              error: Error()
            }), ToastPosition) : ToastPosition).TOP:
              toastWrap = this.propertyNode.props_toastWrap_top;
              break;
          }

          if (toastObj.type !== (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
            error: Error()
          }), ToastType) : ToastType).ERROR && toastObj.position === (_crd && ToastPosition === void 0 ? (_reportPossibleCrUseOfToastPosition({
            error: Error()
          }), ToastPosition) : ToastPosition).BOTTOM) {
            toastWrap = this.propertyNode.props_toastWrap_middle;
          }

          toastWrap.setSiblingIndex(1000);
          var props_toast = instantiate(toastObj.type === (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
            error: Error()
          }), ToastType) : ToastType).ERROR ? this.propertyNode.props_toast_template_error : this.propertyNode.props_toast_template_normal);
          props_toast.getChildByName("toastLabel").getComponent(Label).string = toastObj.content;
          props_toast.active = true;
          toastWrap.addChild(props_toast);
          props_toast.setScale(new Vec3(1, 0, 1));
          tween(props_toast).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }).delay(3).to(0.1, {
            scale: new Vec3(1, 0, 1)
          }).call(() => {
            props_toast.destroy();
            this.events.toastDone();
          }).start(); // props_toast.setScale(new Vec3(1, 1, 1))
          // const { x, y, z } = props_toast.position
          // tween(props_toast).to(0.1, { position: new Vec3(x, y, z) }).delay(3).to(0.1, { position: new Vec3(x, y + 100, z) }).call(() => {
          // 	props_toast.destroy()
          // 	this.events.toastDone()
          // }).start()
          // tween(props_toast).to(0.2, { position: new Vec3(x, y) }, { easing: "backOut" }).delay(2).to(0.1, { position: new Vec3(x, y + 200) }).call(() => {
          // 	props_toast.destroy()
          // 	this.events.toastDone()
          // }).start()
        }

        getSubGameWrapNode() {
          return this.propertyNode.props_subGameBoard;
        }

        getMainBoardNode() {
          return this.propertyNode.props_mainBoard;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bfb4380529f8b10596eb11072ac4648ab39f20e0.js.map