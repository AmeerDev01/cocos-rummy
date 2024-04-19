System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, ApiUrl, fetcher, MailBoxViewModel, _crd;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_MailBox(extras) {
    _reporterNs.report("Hall_MailBox", "../components/Hall_MailBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Hall_MailBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Hall_MailBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMailItemType(extras) {
    _reporterNs.report("MailItemType", "../components/Hall_MailBox", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../store/reducer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "../apiUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOffetcher(extras) {
    _reporterNs.report("fetcher", "../index", _context.meta, extras);
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
      ApiUrl = _unresolved_3.ApiUrl;
    }, function (_unresolved_4) {
      fetcher = _unresolved_4.fetcher;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1b5367RRtpMBagxAgd+HM67", "MailBoxViewModel", undefined);

      __checkObsolete__(['Node']);

      MailBoxViewModel = class MailBoxViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super('Hall_MailBox');
        }

        begin() {
          this.getMailList();
          this.setEvent({
            onDeleteHandler: item => {
              return new Promise((resolve, reject) => {
                (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
                  error: Error()
                }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
                  error: Error()
                }), ApiUrl) : ApiUrl).DELETE_EMAIL, {
                  data: item.id
                }).then(rsp => {
                  // this.getMailList()
                  resolve(true);
                }); //删除
                // this.getMailList()
                // resolve(true)
              });
            },
            onCheckMail: item => {
              return new Promise((resolve, reject) => {
                (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
                  error: Error()
                }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
                  error: Error()
                }), ApiUrl) : ApiUrl).CHECK_EMAIL, {
                  data: item.id
                }).then(rsp => {
                  // this.getMailList()
                  resolve(true);
                });
              });
            }
          });
        }

        getMailList() {
          (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
            error: Error()
          }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
            error: Error()
          }), ApiUrl) : ApiUrl).EMAIL_LIST, {}, "get").then(rsp => {
            this.setProps({
              mailList: rsp
            });
          }).catch(e => {//this.dispatch(addToastAction({ content: e }))
          });
        }

        connect() {
          this.inject({}, state => {
            return {
              mailList: []
            };
          });
          return this;
        }

      };

      _export("default", MailBoxViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1b7149970b1f7b34e880ea8f61b5ca5beae2f9d4.js.map