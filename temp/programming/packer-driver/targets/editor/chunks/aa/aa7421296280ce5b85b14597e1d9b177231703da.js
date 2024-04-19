System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _crd, ccclass, property, Crash_Userinfo;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f92c586qu1Ak5+cnONEU8Jw", "Crash_Userinfo", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", Crash_Userinfo = (_dec = ccclass('CrashUserinfo'), _dec(_class = class Crash_Userinfo {
        constructor() {
          this.myInfo = null;
          this.oddsList = null;
          this.roomInfoVos = null;
          this.tableId = null;
        }

        setUserInfo(userInfo) {
          this.myInfo = userInfo;
        }

        setGold(num) {
          this.myInfo.gold = num;
        }

        getUserInfo() {
          return this.myInfo;
        }

        setOddsList(list) {
          this.oddsList = list;
        }

        getOddsList() {
          return this.oddsList;
        }

        setRoomInfoVos(roomInfoVos) {
          this.roomInfoVos = roomInfoVos;
        }

        getRoomInfoVos() {
          return this.roomInfoVos;
        }

        setTableId(tableId) {
          this.tableId = tableId;
        }

        getTableId() {
          return this.tableId;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aa7421296280ce5b85b14597e1d9b177231703da.js.map