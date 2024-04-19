System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "cc/env", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, native, sys, ViewModel, fetcher, sourceManageSeletor, HallPrefabPathDefine, PrefabPathDefine, ToastType, addToastAction, setLoadingAction, setSubGameInfoAction, socketConnect, SKT_MAG_TYPE, removeInstance, sktInstance, sktMsgListener, EffectType, MainPanelViewModel, SubGameRunState, config, deviceInfo, subGameList, ApiUrl, resetMemberInfo, resetWithDrawInfo, lang, NATIVE, BridgeCode, getDeviceUniqueId, LoginPageV2ViewModel, BaseViewModel, BaseBoardViewModel, _crd;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_Baseboard(extras) {
    _reporterNs.report("Hall_Baseboard", "../components/Hall_Baseboard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Hall_Baseboard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Hall_Baseboard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginPageViewModel(extras) {
    _reporterNs.report("LoginPageViewModel", "./LoginPageViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOffetcher(extras) {
    _reporterNs.report("fetcher", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallPrefabPathDefine(extras) {
    _reporterNs.report("HallPrefabPathDefine", "../../hall/sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../../hall/sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToastType(extras) {
    _reporterNs.report("ToastType", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetLoadingAction(extras) {
    _reporterNs.report("setLoadingAction", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetSubGameInfoAction(extras) {
    _reporterNs.report("setSubGameInfoAction", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsocketConnect(extras) {
    _reporterNs.report("socketConnect", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKT_MAG_TYPE(extras) {
    _reporterNs.report("SKT_MAG_TYPE", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfremoveInstance(extras) {
    _reporterNs.report("removeInstance", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktInstance(extras) {
    _reporterNs.report("sktInstance", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktMsgListener(extras) {
    _reporterNs.report("sktMsgListener", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainPanelViewModel(extras) {
    _reporterNs.report("MainPanelViewModel", "./MainPanelViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallGameGateType(extras) {
    _reporterNs.report("HallGameGateType", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubGameRunState(extras) {
    _reporterNs.report("SubGameRunState", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdeviceInfo(extras) {
    _reporterNs.report("deviceInfo", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsubGameList(extras) {
    _reporterNs.report("subGameList", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "../apiUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresetMemberInfo(extras) {
    _reporterNs.report("resetMemberInfo", "../store/actions/memberInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresetWithDrawInfo(extras) {
    _reporterNs.report("resetWithDrawInfo", "../store/actions/withdraw", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBridgeCode(extras) {
    _reporterNs.report("BridgeCode", "../../common/bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetDeviceUniqueId(extras) {
    _reporterNs.report("getDeviceUniqueId", "../../common/bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginPageV2ViewModel(extras) {
    _reporterNs.report("LoginPageV2ViewModel", "./login_v2/LoginPageV2ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseViewModel(extras) {
    _reporterNs.report("BaseViewModel", "./BaseViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_GivePanel(extras) {
    _reporterNs.report("Hall_GivePanel", "../components/Hall_GivePanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGPIState(extras) {
    _reporterNs.report("GPIState", "../components/Hall_GivePanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGPIProps(extras) {
    _reporterNs.report("GPIProps", "../components/Hall_GivePanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGPIEvent(extras) {
    _reporterNs.report("GPIEvent", "../components/Hall_GivePanel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Prefab = _cc.Prefab;
      native = _cc.native;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
    }, function (_unresolved_3) {
      fetcher = _unresolved_3.fetcher;
      sourceManageSeletor = _unresolved_3.sourceManageSeletor;
    }, function (_unresolved_4) {
      HallPrefabPathDefine = _unresolved_4.PrefabPathDefine;
      PrefabPathDefine = _unresolved_4.PrefabPathDefine;
    }, function (_unresolved_5) {
      ToastType = _unresolved_5.ToastType;
      addToastAction = _unresolved_5.addToastAction;
      setLoadingAction = _unresolved_5.setLoadingAction;
      setSubGameInfoAction = _unresolved_5.setSubGameInfoAction;
    }, function (_unresolved_6) {
      socketConnect = _unresolved_6.default;
      SKT_MAG_TYPE = _unresolved_6.SKT_MAG_TYPE;
      removeInstance = _unresolved_6.removeInstance;
      sktInstance = _unresolved_6.sktInstance;
      sktMsgListener = _unresolved_6.sktMsgListener;
    }, function (_unresolved_7) {
      EffectType = _unresolved_7.EffectType;
    }, function (_unresolved_8) {
      MainPanelViewModel = _unresolved_8.default;
    }, function (_unresolved_9) {
      SubGameRunState = _unresolved_9.SubGameRunState;
      config = _unresolved_9.config;
      deviceInfo = _unresolved_9.deviceInfo;
      subGameList = _unresolved_9.subGameList;
    }, function (_unresolved_10) {
      ApiUrl = _unresolved_10.ApiUrl;
    }, function (_unresolved_11) {
      resetMemberInfo = _unresolved_11.resetMemberInfo;
    }, function (_unresolved_12) {
      resetWithDrawInfo = _unresolved_12.resetWithDrawInfo;
    }, function (_unresolved_13) {
      lang = _unresolved_13.lang;
    }, function (_ccEnv) {
      NATIVE = _ccEnv.NATIVE;
    }, function (_unresolved_14) {
      BridgeCode = _unresolved_14.BridgeCode;
      getDeviceUniqueId = _unresolved_14.getDeviceUniqueId;
    }, function (_unresolved_15) {
      LoginPageV2ViewModel = _unresolved_15.default;
    }, function (_unresolved_16) {
      BaseViewModel = _unresolved_16.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3e1ef61PFxHqqra7AtNZo0n", "BaseBoardViewModel", undefined);

      __checkObsolete__(['Node', 'Prefab', 'native', 'sys']);

      BaseBoardViewModel = class BaseBoardViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Hall_Baseboard');
          this.loginPageViewModel = void 0;
          this.loginPageV2ViewModel = void 0;
          this.mainPanelViewModel = void 0;
        }

        // private personCanterMainPanel:
        begin() {
          this.initInvite();
          this.listenerBridge();
          (_crd && getDeviceUniqueId === void 0 ? (_reportPossibleCrUseOfgetDeviceUniqueId({
            error: Error()
          }), getDeviceUniqueId) : getDeviceUniqueId)();
          this.setProps({
            toastData: {
              content: "",
              type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                error: Error()
              }), ToastType) : ToastType).NORMAL
            },
            isLoading: false,
            isAllowCloseLoading: false
          });
          this.setEvent({
            onGameClose: () => {
              // this.setProps({ openGameInfo: null })
              this.dispatch((_crd && setSubGameInfoAction === void 0 ? (_reportPossibleCrUseOfsetSubGameInfoAction({
                error: Error()
              }), setSubGameInfoAction) : setSubGameInfoAction)(null)); //看有没有礼包需要弹出

              (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
                error: Error()
              }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                error: Error()
              }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GIFT_LIST, {});
            },
            toastDone: () => {
              //这里重置下toast的内容，不然下次其他数据触发更新，会将之前的数据带过去，然后显示旧信息，因为内容为空的时候信息不会显示
              this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: ""
              }));
            }
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).addOnce((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).AUTH, "auth", () => {// this.dispatch(addToastAction({ content: lang.write(k => k.BaseBoardModule.BaseBoardBeat, {}, { placeStr: "认证成功~" }) }))
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).addOnce((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).GIVE_GLOD, "give", data => {
            (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine)._HELL_WELCOME, Prefab).then(file => {
              const givePanel = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
                error: Error()
              }), BaseViewModel) : BaseViewModel)('Hall_GivePanel').mountView(file.source).appendTo(this.parentNode, {
                effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                  error: Error()
                }), EffectType) : EffectType).EFFECT1,
                isModal: true
              }).setEvent({
                onClosePanel: () => {
                  givePanel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                    error: Error()
                  }), EffectType) : EffectType).EFFECT2);
                }
              }).setProps({
                amount: data.coins
              });
            });
          });
          const baseBoard = this.comp.getPropertyNode().props_mainBoard;
          this.initLoginPanel(baseBoard, true); // hallAudio.play(SoundPathDefine.MAIN_BGM, true)
        }

        initMainPanel(baseBoard) {
          this.mainPanelViewModel = new (_crd && MainPanelViewModel === void 0 ? (_reportPossibleCrUseOfMainPanelViewModel({
            error: Error()
          }), MainPanelViewModel) : MainPanelViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && HallPrefabPathDefine === void 0 ? (_reportPossibleCrUseOfHallPrefabPathDefine({
            error: Error()
          }), HallPrefabPathDefine) : HallPrefabPathDefine).MAIN_PANEL).source).appendTo(baseBoard).setEvent({
            onTouchIntoHandler: gameInfo => {// this.dispatch(setSubGameInfoAction(gameInfo))
              // this.mainPanelViewModel.viewNode.active = false
            }
          }).connect();

          this.mainPanelViewModel.logOut = (isForce = false) => {
            const exit = () => {
              if (!sys.localStorage.getItem("token")) return;
              this.comp.props.openGameInfo && this.comp.closeSubGame();
              sys.localStorage.removeItem("token"); // this.comp.getMainBoardNode().destroyAllChildren()

              this.initLoginPanel(baseBoard, false);
              (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
                error: Error()
              }), sktInstance) : sktInstance).close();
              (_crd && removeInstance === void 0 ? (_reportPossibleCrUseOfremoveInstance({
                error: Error()
              }), removeInstance) : removeInstance)();
              this.dispatch((_crd && resetMemberInfo === void 0 ? (_reportPossibleCrUseOfresetMemberInfo({
                error: Error()
              }), resetMemberInfo) : resetMemberInfo)(undefined));
              this.dispatch((_crd && resetWithDrawInfo === void 0 ? (_reportPossibleCrUseOfresetWithDrawInfo({
                error: Error()
              }), resetWithDrawInfo) : resetWithDrawInfo)(undefined));
              this.comp.scheduleOnce(() => {
                // 踏马的，这里有点诡异
                this.mainPanelViewModel.unMount().then(() => {
                  this.mainPanelViewModel = null;
                });
              }, 0.3);
            };

            if (isForce) {
              this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.BaseBoardModule.BaseBoardLogin, {}, {
                  placeStr: "抱歉，您的登录信息变更，已自动退出~"
                })
              }));
              exit();
            } else {
              (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
                error: Error()
              }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
                error: Error()
              }), ApiUrl) : ApiUrl).LOGIN_OUT).then(data => exit()).catch(e => {
                !isForce && this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                  error: Error()
                }), addToastAction) : addToastAction)({
                  content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                    error: Error()
                  }), lang) : lang).write(k => k.BaseBoardModule.BaseBoardExit, {}, {
                    placeStr: "退出失败~"
                  })
                }));
              });
            }
          };
        }
        /**
         * 初始化加载框
         * @param baseBoard 加载到的底板
         * @param isAutoLogin 是否自动登录
         */


        async initLoginPanel(baseBoard, isAutoLogin = true) {
          // this.loginPageViewModel = new LoginPageViewModel()
          this.loginPageV2ViewModel = new (_crd && LoginPageV2ViewModel === void 0 ? (_reportPossibleCrUseOfLoginPageV2ViewModel({
            error: Error()
          }), LoginPageV2ViewModel) : LoginPageV2ViewModel)().mountView((await (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && HallPrefabPathDefine === void 0 ? (_reportPossibleCrUseOfHallPrefabPathDefine({
            error: Error()
          }), HallPrefabPathDefine) : HallPrefabPathDefine)._LOGIN_PAGE_V2, Prefab)).source).appendTo(baseBoard).setEvent({
            onLoginSuccess: () => {
              this.dispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
                error: Error()
              }), setLoadingAction) : setLoadingAction)({
                isShow: true
              })); //初始化通信

              (_crd && socketConnect === void 0 ? (_reportPossibleCrUseOfsocketConnect({
                error: Error()
              }), socketConnect) : socketConnect)().then(() => {
                // if (config.appLocalVersion < config.appOnlineVersion) {
                //   //弹出更新提示
                //   this.dispatch(addToastAction({ content: "请更新App至最新版" }))
                // } else {
                //   this.loginPageViewModel.unMount(EffectType.EFFECT1)
                //   sktInstance.sendSktMessage(SKT_MAG_TYPE.AUTH, sys.localStorage.getItem("token"))
                //   // 打开大厅页面
                //   this.initMainPanel(baseBoard)
                // }
                this.loginPageV2ViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                  error: Error()
                }), EffectType) : EffectType).EFFECT1);
                (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
                  error: Error()
                }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                  error: Error()
                }), SKT_MAG_TYPE) : SKT_MAG_TYPE).AUTH, {
                  token: sys.localStorage.getItem("token"),
                  gameId: 0
                }); // 打开大厅页面

                this.initMainPanel(baseBoard);
              }).catch(e => {
                (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
                  error: Error()
                }), sktInstance) : sktInstance).close();
                this.dispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
                  error: Error()
                }), setLoadingAction) : setLoadingAction)({
                  isShow: false
                }));
              });
            }
          }).setProps({
            isAutoLogin
          }).connect();
        }
        /**是否允许打开子游戏,一般用于子游戏的第一个首预制体已经加载完毕 */


        isAllowOpenSubGame(gameId) {
          if (this.comp.props.openGameInfo) {
            this.mainPanelViewModel.comp.setSubGameGate(gameId, 0, false);
            return false;
          } else {
            //先取得
            //const gateViewModel = this.mainPanelViewModel.comp.gateViewModelList.find(item => item.comp.props.gamesId.indexOf(gameId) !== -1)
            const hallGameGate = (_crd && subGameList === void 0 ? (_reportPossibleCrUseOfsubGameList({
              error: Error()
            }), subGameList) : subGameList).find(i => i.gameId === gameId);

            if (hallGameGate.runState === (_crd && SubGameRunState === void 0 ? (_reportPossibleCrUseOfSubGameRunState({
              error: Error()
            }), SubGameRunState) : SubGameRunState).CANCEL) {
              return false;
            }

            this.dispatch((_crd && setSubGameInfoAction === void 0 ? (_reportPossibleCrUseOfsetSubGameInfoAction({
              error: Error()
            }), setSubGameInfoAction) : setSubGameInfoAction)((_crd && subGameList === void 0 ? (_reportPossibleCrUseOfsubGameList({
              error: Error()
            }), subGameList) : subGameList).find(i => i.gameId === gameId)));
            return true;
          }
        } // public connect(initProps: Partial<IProps> = {}) {


        connect(initProps = {}) {
          this.inject(initProps, state => {
            // console.log(state.baseBoard.toastData)
            if (state.baseBoard.subGameInfo === null) {
              this.mainPanelViewModel && (this.mainPanelViewModel.viewNode.active = true);
            }

            return {
              toastData: state.baseBoard.toastData,
              isLoading: state.baseBoard.loadPayload.isShow,
              isAllowCloseLoading: state.baseBoard.loadPayload.isAllowCloseLoading,
              openGameInfo: state.baseBoard.subGameInfo
            };
          }, false);
        }
        /**监听原生发来的数据 */


        listenerBridge() {
          if (NATIVE) {
            native.bridge.onNative = (arg0, arg1) => {
              // const bridgeData = JSON.parse(arg1) as BridgeData;
              if ((_crd && BridgeCode === void 0 ? (_reportPossibleCrUseOfBridgeCode({
                error: Error()
              }), BridgeCode) : BridgeCode).COPY_CLIPBOARD === arg0) {// this.dispatch(addToastAction({ content: lang.write(k => k.HallModule.HallCopy, {}, { placeStr: "已复制内容到剪切板" }) }))
              } else if ((_crd && BridgeCode === void 0 ? (_reportPossibleCrUseOfBridgeCode({
                error: Error()
              }), BridgeCode) : BridgeCode).UNIQUE_ID === arg0) {
                // deviceInfo.uniqueId = arg1;
                (_crd && deviceInfo === void 0 ? (_reportPossibleCrUseOfdeviceInfo({
                  error: Error()
                }), deviceInfo) : deviceInfo).setUniqueId(arg1);
              } else if ((_crd && BridgeCode === void 0 ? (_reportPossibleCrUseOfBridgeCode({
                error: Error()
              }), BridgeCode) : BridgeCode).APP_VERSION === arg0) {
                console.log(arg1);
              }
            };
          }
        }

        initInvite() {
          if (!NATIVE) {
            let reqUrl = window.location.href;
            reqUrl = reqUrl.substring(reqUrl.indexOf("?") + 1);
            const params = reqUrl.split("&");
            let referer = '';
            let ap = '';
            const packageType = '0';

            const getParamValue = (param, key) => {
              return param.substring(param.indexOf("=") + 1);
            };

            if (params) {
              params.forEach(v => {
                if (v.indexOf('referer') !== -1) {
                  referer = getParamValue(v, 'referer');
                } else if (v.indexOf('ap') !== -1) {
                  ap = getParamValue(v, 'ap');
                }
              });
            }

            if (ap) {
              const url = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).httpBaseUrl + (_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
                error: Error()
              }), ApiUrl) : ApiUrl).INVITE + '?referer=' + referer + '&ap=' + ap + '&packageType=' + packageType;
              fetch(url).then(response => {}).catch(e => {});
            } else {
              console.log("ap not found");
            }
          }
        }

      };

      _export("default", BaseBoardViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=50064a1059ff0a35c72b7a9a50e32d6f2a18e59e.js.map