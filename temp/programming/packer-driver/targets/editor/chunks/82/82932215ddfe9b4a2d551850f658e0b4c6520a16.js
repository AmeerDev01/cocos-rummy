System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Crash_WsManager, ProtocolCode, WsProtocol, establishAConnection, PlayerWagering, RoomDrawingRecords, _crd;

  function _reportPossibleCrUseOfCrash_WsManager(extras) {
    _reporterNs.report("Crash_WsManager", "../Crash_WsManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocolCode(extras) {
    _reporterNs.report("ProtocolCode", "./ProtocolDef", _context.meta, extras);
  }

  _export({
    WsProtocol: void 0,
    establishAConnection: void 0,
    PlayerWagering: void 0,
    RoomDrawingRecords: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Crash_WsManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      ProtocolCode = _unresolved_3.ProtocolCode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5ced8R4iAFOcIQKDjTBaLYz", "WsProtocol", undefined);

      _export("WsProtocol", WsProtocol = class WsProtocol {
        constructor(code) {
          this.queueId = null;
          this.code = null;
          this.data = null;
          this.token = null;
          this.args = null;
          this.sendTm = null;
          this.code = code;
        }

        toString() {
          let obj = {
            code: this.code,
            data: this.data,
            queueId: this.queueId
          };

          if (this.token) {
            obj.token = this.token;
          }

          return JSON.stringify(obj);
        }

        setData(data) {
          this.data = data;
        }

        send(...args) {
          this.args = args;
          (_crd && Crash_WsManager === void 0 ? (_reportPossibleCrUseOfCrash_WsManager({
            error: Error()
          }), Crash_WsManager) : Crash_WsManager).getInstance().send(this);
        }

      }); // 获取用户信息


      _export("establishAConnection", establishAConnection = class establishAConnection extends WsProtocol {
        constructor() {
          super((_crd && ProtocolCode === void 0 ? (_reportPossibleCrUseOfProtocolCode({
            error: Error()
          }), ProtocolCode) : ProtocolCode).REQ_USER_INFORMATION);
        }

        setParams(token) {
          this.token = token;
          return this;
        }

      }); //获取玩家下注请求


      _export("PlayerWagering", PlayerWagering = class PlayerWagering extends WsProtocol {
        constructor() {
          super((_crd && ProtocolCode === void 0 ? (_reportPossibleCrUseOfProtocolCode({
            error: Error()
          }), ProtocolCode) : ProtocolCode).REQ_PLAYER_WAGERING);
        }

        setParams(data) {
          this.data = {
            roomId: data.tableId,
            memberName: data.memberName,
            memberId: data.memberId,
            gold: data.gold,
            odds: data.odds
          };
          return this;
        }

      }); // 获取查看房间开奖记录


      _export("RoomDrawingRecords", RoomDrawingRecords = class RoomDrawingRecords extends WsProtocol {
        constructor() {
          super((_crd && ProtocolCode === void 0 ? (_reportPossibleCrUseOfProtocolCode({
            error: Error()
          }), ProtocolCode) : ProtocolCode).REQ_ROOM_DRAWING_RECORDS);
        }

        setParams(data) {
          this.data = data.tableId;
          return this;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=82932215ddfe9b4a2d551850f658e0b4c6520a16.js.map