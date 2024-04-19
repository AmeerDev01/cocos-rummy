System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, SKT_MAG_TYPE, sktInstance, sktMsgListener, baseBoardView, lang, addToastAction, Throttler, PersonCenterViewModel, _crd;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_PcMainPanel(extras) {
    _reporterNs.report("Hall_PcMainPanel", "../components/Hall_PcMainPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Hall_PcMainPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Hall_PcMainPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKT_MAG_TYPE(extras) {
    _reporterNs.report("SKT_MAG_TYPE", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktInstance(extras) {
    _reporterNs.report("sktInstance", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktMsgListener(extras) {
    _reporterNs.report("sktMsgListener", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbaseBoardView(extras) {
    _reporterNs.report("baseBoardView", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThrottler(extras) {
    _reporterNs.report("Throttler", "../../utils/Throttler", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      ViewModel = _unresolved_2.default;
    }, function (_unresolved_3) {
      SKT_MAG_TYPE = _unresolved_3.SKT_MAG_TYPE;
      sktInstance = _unresolved_3.sktInstance;
      sktMsgListener = _unresolved_3.sktMsgListener;
    }, function (_unresolved_4) {
      baseBoardView = _unresolved_4.baseBoardView;
      lang = _unresolved_4.lang;
    }, function (_unresolved_5) {
      addToastAction = _unresolved_5.addToastAction;
    }, function (_unresolved_6) {
      Throttler = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "94976Jrm9RD1afeyK6uQ2OY", "PersonCenterViewModel", undefined);

      __checkObsolete__(['Node']);

      PersonCenterViewModel = class PersonCenterViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Hall_PcMainPanel');
          this.memberInfoMedifyDone = void 0;
        }

        begin() {
          (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).MEMBER_INFO, {}, {
            isLoading: true
          });
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).add((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).MODIFY_MEMBER_INFO, "member", data => {
            this.memberInfoMedifyDone && this.memberInfoMedifyDone();
            this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
              error: Error()
            }), addToastAction) : addToastAction)({
              content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                error: Error()
              }), lang) : lang).write(k => k.PersonCenterModule.PersonCenterEdit, {}, {
                placeStr: "玩家资料编辑成功"
              })
            }));
            (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
              error: Error()
            }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
              error: Error()
            }), SKT_MAG_TYPE) : SKT_MAG_TYPE).MEMBER_INFO, {}, {
              isLoading: true
            });
          }); // sktMsgListener.add(SKT_MAG_TYPE.CONVERSION, 'member', () => {
          //   this.dispatch(addToastAction({ content: lang.write(k => k.BaseBoardModule.OPERATE_DONE, {}, { placeStr: "操作成功" }) }))
          // })

          this.setEvent({
            memberInfoDone: (gender, nickName, avatarIndex, done) => {
              (_crd && Throttler === void 0 ? (_reportPossibleCrUseOfThrottler({
                error: Error()
              }), Throttler) : Throttler).isDebouncerAsync((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                error: Error()
              }), SKT_MAG_TYPE) : SKT_MAG_TYPE).MODIFY_MEMBER_INFO, 1000, true, () => {
                this.dispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                  error: Error()
                }), addToastAction) : addToastAction)({
                  content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                    error: Error()
                  }), lang) : lang).write(k => k.PersonCenterModule.PersonCenterSumbit, {}, {
                    placeStr: "操作过于频繁，请稍等~"
                  })
                }));
              }).then(isPass => {
                if (!(_crd && baseBoardView === void 0 ? (_reportPossibleCrUseOfbaseBoardView({
                  error: Error()
                }), baseBoardView) : baseBoardView).mainPanelViewModel.isTouristPass()) return;
                this.memberInfoMedifyDone = done;
                (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
                  error: Error()
                }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                  error: Error()
                }), SKT_MAG_TYPE) : SKT_MAG_TYPE).MODIFY_MEMBER_INFO, {
                  gender,
                  nickName,
                  avatarIndex
                }, {
                  isLoading: true
                });
              });
            }
          });
        }

        unMountCallBack() {
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).removeById("member");
        }

        connect() {
          const storeState = this.store.getState();
          this.inject({
            memberInfo: storeState.memberInfo,
            tourist: storeState.memberInfo.tourist
          }, state => {
            return {
              memberInfo: state.memberInfo,
              isShowWebView: state.baseBoard.isShowWebView,
              isLoadRecommendData: state.baseBoard.isLoadRecommendData,
              tourist: state.memberInfo.tourist
            };
          });
          return this;
        }

      };

      _export("default", PersonCenterViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=45ca1753965f790883a1878e5c869604b4f2ee77.js.map