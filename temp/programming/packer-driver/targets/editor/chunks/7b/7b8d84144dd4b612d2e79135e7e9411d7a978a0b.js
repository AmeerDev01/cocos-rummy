System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewModel, ActivityType, ApiUrl, fetcher, updateActivityStatus, SKT_MAG_TYPE, sktInstance, sktMsgListener, ActivityViewModel, _crd;

  function _reportPossibleCrUseOfViewModel(extras) {
    _reporterNs.report("ViewModel", "../../base/ViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_ActivityPanel(extras) {
    _reporterNs.report("Hall_ActivityPanel", "../components/Hall_ActivityPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProps(extras) {
    _reporterNs.report("IProps", "../components/Hall_ActivityPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEvent(extras) {
    _reporterNs.report("IEvent", "../components/Hall_ActivityPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityItem(extras) {
    _reporterNs.report("ActivityItem", "../components/Hall_ActivityPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityType(extras) {
    _reporterNs.report("ActivityType", "../components/Hall_ActivityPanel", _context.meta, extras);
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

  function _reportPossibleCrUseOfupdateActivityStatus(extras) {
    _reporterNs.report("updateActivityStatus", "../store/actions/memberInfo", _context.meta, extras);
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
      ActivityType = _unresolved_3.ActivityType;
    }, function (_unresolved_4) {
      ApiUrl = _unresolved_4.ApiUrl;
    }, function (_unresolved_5) {
      fetcher = _unresolved_5.fetcher;
    }, function (_unresolved_6) {
      updateActivityStatus = _unresolved_6.updateActivityStatus;
    }, function (_unresolved_7) {
      SKT_MAG_TYPE = _unresolved_7.SKT_MAG_TYPE;
      sktInstance = _unresolved_7.sktInstance;
      sktMsgListener = _unresolved_7.sktMsgListener;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eedd6nrA79FcYldjCW+ZpJb", "ActivityViewModel", undefined);

      __checkObsolete__(['Node']);

      ActivityViewModel = class ActivityViewModel extends (_crd && ViewModel === void 0 ? (_reportPossibleCrUseOfViewModel({
        error: Error()
      }), ViewModel) : ViewModel) {
        constructor() {
          super("Hall_ActivityPanel");
        }

        begin() {
          (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
            error: Error()
          }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
            error: Error()
          }), ApiUrl) : ApiUrl).ACTIVITY_LIST, {}, "get").then(rsp => {
            this.setActivityItemId(rsp);
            this.setProps({
              activityList: rsp
            });
          }).catch(e => {//this.dispatch(addToastAction({ content: e }))
          });
          this.setEvent({
            setReadStatus: value => {
              this.setReadStatus(this.comp.props.activityList, value);
            },
            getItemUnreadStatus: value => {
              return this.getItemUnreadStatus(value);
            },
            deleteReadStatus: value => {
              this.deleteReadStatus(value);
            }
          });
        }

        initReadStatus() {
          const url = `${(_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
            error: Error()
          }), ApiUrl) : ApiUrl).ACTIVITY_LIST}?t=${Date.parse(new Date())}`;
          (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
            error: Error()
          }), fetcher) : fetcher).send(url, {}, "get").then(rsp => {
            const activityList = rsp;
            this.setActivityItemId(activityList);
            const status = this.getUnreadStatus(activityList);
            this.dispatch((_crd && updateActivityStatus === void 0 ? (_reportPossibleCrUseOfupdateActivityStatus({
              error: Error()
            }), updateActivityStatus) : updateActivityStatus)(status));

            if (activityList && activityList.find(v => v.gameId === (_crd && ActivityType === void 0 ? (_reportPossibleCrUseOfActivityType({
              error: Error()
            }), ActivityType) : ActivityType).TURNPLATE)) {
              this.initTurntabledateStatus(activityList);
            }
          }).catch(e => {//this.dispatch(addToastAction({ content: e }))
          });
        }

        setActivityItemId(activityList) {
          activityList && activityList.forEach(v => v.id = v.name);
        }
        /**
         * 获得活动未读状态
         * @param activityList 
         * @returns 
         */


        getUnreadStatus(activityList, actIds = undefined) {
          if (!actIds) {
            actIds = this.getCacheActIds();

            if (actIds.length === 0) {
              return true;
            }
          }

          for (let i = 0; i < activityList.length; i++) {
            const element = activityList[i];

            if (!actIds.find(v => v === element.id)) {
              return true;
            }
          } // 把已经关闭的活动已读标识删掉


          for (let i = 0; i < actIds.length; i++) {
            const actId = actIds[i];

            if (!activityList.find(v => v.id === actId)) {
              actIds.splice(i, 1);
              i--;
            }
          }

          localStorage.setItem("actIds", JSON.stringify(actIds));
          return false;
        }

        getItemUnreadStatus(value) {
          return !this.getCacheActIds().find(v => v === value);
        }

        setReadStatus(activityList, value) {
          let actIds = this.getCacheActIds();

          if (!actIds.find(v => v === value)) {
            actIds.push(value);
          }

          localStorage.setItem("actIds", JSON.stringify(actIds));
          const status = this.getUnreadStatus(activityList, actIds);
          this.dispatch((_crd && updateActivityStatus === void 0 ? (_reportPossibleCrUseOfupdateActivityStatus({
            error: Error()
          }), updateActivityStatus) : updateActivityStatus)(status));
        }
        /**删除已读状态 */


        deleteReadStatus(value) {
          let actIds = this.getCacheActIds();

          if (actIds.length > 0) {
            actIds = actIds.filter(v => v !== value);
            localStorage.setItem("actIds", JSON.stringify(actIds));
          }
        }
        /**初始化转盘数据 */


        initTurntabledateStatus(activityList) {
          const turntableData = activityList.find(v => v.gameId === (_crd && ActivityType === void 0 ? (_reportPossibleCrUseOfActivityType({
            error: Error()
          }), ActivityType) : ActivityType).TURNPLATE);
          (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
            error: Error()
          }), sktMsgListener) : sktMsgListener).addOnce((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).TURNTABLEDATA, "main", data => {
            if (data[0]) {
              if (data[0].count > 0) {
                this.deleteReadStatus(turntableData.id);
              } else {
                this.setReadStatus(activityList, turntableData.id);
              }
            } else {
              this.setReadStatus(activityList, turntableData.id);
            }
          });
          (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
            error: Error()
          }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
            error: Error()
          }), SKT_MAG_TYPE) : SKT_MAG_TYPE).TURNTABLEDATA);
        }

        getCacheActIds() {
          const value = localStorage.getItem("actIds");
          let actIds = [];

          if (value) {
            actIds = JSON.parse(value);
          }

          return actIds;
        }

        connect() {
          this.inject({}, state => {
            return {};
          });
          return this;
        }

      };

      _export("default", ActivityViewModel);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7b8d84144dd4b612d2e79135e7e9411d7a978a0b.js.map