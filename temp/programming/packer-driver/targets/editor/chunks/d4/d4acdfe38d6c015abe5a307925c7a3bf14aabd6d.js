System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ToastType, addToastAction, setLoadingAction, Prefab, sys, baseBoardView, global, hallAudio, lang, sourceManageSeletor, SoundPathDefine, getStore, Throttler, sendNativeVibrate, BaseViewModel, PrefabPathDefine, EffectType, Fetcher, _crd;

  function _reportPossibleCrUseOfredux(extras) {
    _reporterNs.report("redux", "redux", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToastType(extras) {
    _reporterNs.report("ToastType", "../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetLoadingAction(extras) {
    _reporterNs.report("setLoadingAction", "../hall/store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbaseBoardView(extras) {
    _reporterNs.report("baseBoardView", "../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhallAudio(extras) {
    _reporterNs.report("hallAudio", "../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../hall/sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetStore(extras) {
    _reporterNs.report("getStore", "../hall/store", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThrottler(extras) {
    _reporterNs.report("Throttler", "./Throttler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsendNativeVibrate(extras) {
    _reporterNs.report("sendNativeVibrate", "../common/bridge", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_ProhibitPanel(extras) {
    _reporterNs.report("Hall_ProhibitPanel", "../hall/components/login_v2/Hall_ProhibitPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHPState(extras) {
    _reporterNs.report("HPState", "../hall/components/login_v2/Hall_ProhibitPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHPProps(extras) {
    _reporterNs.report("HPProps", "../hall/components/login_v2/Hall_ProhibitPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHPEvent(extras) {
    _reporterNs.report("HPEvent", "../hall/components/login_v2/Hall_ProhibitPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseViewModel(extras) {
    _reporterNs.report("BaseViewModel", "../common/viewModel/BaseViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../hall/sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "./NodeIOEffect", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Prefab = _cc.Prefab;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      ToastType = _unresolved_2.ToastType;
      addToastAction = _unresolved_2.addToastAction;
      setLoadingAction = _unresolved_2.setLoadingAction;
    }, function (_unresolved_3) {
      baseBoardView = _unresolved_3.baseBoardView;
      global = _unresolved_3.global;
      hallAudio = _unresolved_3.hallAudio;
      lang = _unresolved_3.lang;
      sourceManageSeletor = _unresolved_3.sourceManageSeletor;
    }, function (_unresolved_4) {
      SoundPathDefine = _unresolved_4.SoundPathDefine;
    }, function (_unresolved_5) {
      getStore = _unresolved_5.getStore;
    }, function (_unresolved_6) {
      Throttler = _unresolved_6.default;
    }, function (_unresolved_7) {
      sendNativeVibrate = _unresolved_7.sendNativeVibrate;
    }, function (_unresolved_8) {
      BaseViewModel = _unresolved_8.default;
    }, function (_unresolved_9) {
      PrefabPathDefine = _unresolved_9.PrefabPathDefine;
    }, function (_unresolved_10) {
      EffectType = _unresolved_10.EffectType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bce77v+cUNJq5eF6Ew5tFHz", "Fetcher", undefined);

      __checkObsolete__(['Prefab', 'sys']);

      _export("default", Fetcher = class Fetcher {
        constructor(baseUrl) {
          this.dispatch = void 0;
          this.baseUrl = void 0;
          this.baseUrl = baseUrl;
          this.dispatch = (_crd && getStore === void 0 ? (_reportPossibleCrUseOfgetStore({
            error: Error()
          }), getStore) : getStore)().dispatch;
        }

        send(url, sendData = {}, method = 'post', headers, option) {
          return new Promise((reslove, reject) => {
            const param = {
              method,
              headers: Object.assign({
                'Content-Type': 'application/json',
                Token: sys.localStorage.getItem("token") || ""
              }, headers)
            };

            const _option = Object.assign({}, {
              isLoading: true
            }, option);

            if (method !== "get") {
              param["body"] = JSON.stringify(sendData);
            } // console.log('u', this.baseUrl + url)


            (_crd && Throttler === void 0 ? (_reportPossibleCrUseOfThrottler({
              error: Error()
            }), Throttler) : Throttler).isDebouncerAsync(this.baseUrl + url, 500, true, () => {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.PersonCenterModule.PersonCenterSumbit, {}, {
                  placeStr: "操作过于频繁，请稍等~"
                })
              }));
            }).then(isPass => {
              _option.isLoading && this.dispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
                error: Error()
              }), setLoadingAction) : setLoadingAction)({
                isShow: true
              }));
              fetch(this.baseUrl + url, param).then(response => {
                this.dispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
                  error: Error()
                }), setLoadingAction) : setLoadingAction)({
                  isShow: false
                }));

                if (response.status === 200) {
                  response.json().then(({
                    data,
                    code,
                    status,
                    message
                  }) => {
                    if (status === "SUCCESS") {
                      reslove(data);
                    } else if (code === 'BIZ-5101') {
                      //跳转至登录页
                      this.dispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
                        error: Error()
                      }), setLoadingAction) : setLoadingAction)({
                        isShow: false
                      }));

                      if ((_crd && baseBoardView === void 0 ? (_reportPossibleCrUseOfbaseBoardView({
                        error: Error()
                      }), baseBoardView) : baseBoardView).mainPanelViewModel) {
                        (_crd && baseBoardView === void 0 ? (_reportPossibleCrUseOfbaseBoardView({
                          error: Error()
                        }), baseBoardView) : baseBoardView).mainPanelViewModel.logOut();
                      } else {
                        (_crd && baseBoardView === void 0 ? (_reportPossibleCrUseOfbaseBoardView({
                          error: Error()
                        }), baseBoardView) : baseBoardView).loginPageV2ViewModel.comp.events.onOpenLoginDialog();
                      }
                    } else if (code === 'BIZ-5102') {
                      //IP被限制
                      (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
                        error: Error()
                      }), sourceManageSeletor) : sourceManageSeletor)().getFileAsync((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
                        error: Error()
                      }), PrefabPathDefine) : PrefabPathDefine)._PROHIBIT_PANEL, Prefab).then(fileSource => {
                        const prohibitViewModel = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
                          error: Error()
                        }), BaseViewModel) : BaseViewModel)('Hall_ProhibitPanel').mountView(fileSource.source).setEvent({
                          onCloseHandle: () => prohibitViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                            error: Error()
                          }), EffectType) : EffectType).EFFECT1)
                        }).appendTo((_crd && baseBoardView === void 0 ? (_reportPossibleCrUseOfbaseBoardView({
                          error: Error()
                        }), baseBoardView) : baseBoardView).viewNode, {
                          effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                            error: Error()
                          }), EffectType) : EffectType).EFFECT2,
                          isModal: true
                        });
                      });
                    } else {
                      this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                        error: Error()
                      }), addToastAction) : addToastAction)({
                        content: message,
                        type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                          error: Error()
                        }), ToastType) : ToastType).ERROR
                      }));
                      this.dispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
                        error: Error()
                      }), setLoadingAction) : setLoadingAction)({
                        isShow: false
                      }));
                      reject(message);
                    }
                  }).catch(() => {
                    this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                      error: Error()
                    }), addToastAction) : addToastAction)({
                      content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                        error: Error()
                      }), lang) : lang).write(k => k.InitGameModule.FetcherFaild, {}, {
                        placeStr: "json数据解析失败"
                      }),
                      type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                        error: Error()
                      }), ToastType) : ToastType).ERROR
                    }));
                    this.dispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
                      error: Error()
                    }), setLoadingAction) : setLoadingAction)({
                      isShow: false
                    })); // console.log("json数据解析失败", response)

                    (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
                      error: Error()
                    }), hallAudio) : hallAudio).play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                      error: Error()
                    }), SoundPathDefine) : SoundPathDefine).ERROR);
                    reject("json数据解析失败");
                  });
                } else {
                  this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                    error: Error()
                  }), addToastAction) : addToastAction)({
                    content: response.status.toString(),
                    type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                      error: Error()
                    }), ToastType) : ToastType).ERROR
                  }));
                  this.dispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
                    error: Error()
                  }), setLoadingAction) : setLoadingAction)({
                    isShow: false
                  }));
                  (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
                    error: Error()
                  }), hallAudio) : hallAudio).play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                    error: Error()
                  }), SoundPathDefine) : SoundPathDefine).ERROR);
                  reject(response);
                }
              }).catch(e => {
                (_crd && sendNativeVibrate === void 0 ? (_reportPossibleCrUseOfsendNativeVibrate({
                  error: Error()
                }), sendNativeVibrate) : sendNativeVibrate)(100);
                this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                  error: Error()
                }), addToastAction) : addToastAction)({
                  content: e.toString(),
                  type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                    error: Error()
                  }), ToastType) : ToastType).ERROR
                }));
                this.dispatch((_crd && setLoadingAction === void 0 ? (_reportPossibleCrUseOfsetLoadingAction({
                  error: Error()
                }), setLoadingAction) : setLoadingAction)({
                  isShow: false
                }));
                (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
                  error: Error()
                }), hallAudio) : hallAudio).play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                  error: Error()
                }), SoundPathDefine) : SoundPathDefine).ERROR);
                reject(e);
              });
            });
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d4acdfe38d6c015abe5a307925c7a3bf14aabd6d.js.map