System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, MessageCallBack, Crash_NetMsgDispatcher, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "41712dUyotCgZJL0blkqGOT", "Crash_NetMsgDispatcher", undefined);

      MessageCallBack = class MessageCallBack {
        constructor() {
          this.code = null;
          this.callBacks = [];
        }

        doCallBack(bl, data, args) {
          for (let i = 0; i < this.callBacks.length; ++i) {
            let info = this.callBacks[i];

            if (info.obj) {
              info.callBack.call(info.obj, bl, data, args);
            }
          }
        }

        removeCallBackByObj(obj) {
          for (let i = 0; i < this.callBacks.length; ++i) {
            if (this.callBacks[i].obj === obj) {
              this.callBacks.splice(i, 1);
              break;
            }
          }
        }

      };

      _export("default", Crash_NetMsgDispatcher = class Crash_NetMsgDispatcher {
        constructor() {
          this.msgCallBacks = [];
        }

        static getInstance() {
          if (this.instance == null) {
            this.instance = new Crash_NetMsgDispatcher();
          }

          return this.instance;
        }

        // // private static instance: NetMsgDispatcher = null;
        // private instance:NetMsgDispatcher
        // static getInstance() {
        //     if(!this.instance) {
        //         this.instance = new NetMsgDispatcher();
        //     }
        //     return this.instance;
        // }
        // static  msgCallBacks: Array<MessageCallBack> = [];
        // constructor() {
        //     super()
        //     NetMsgDispatcher.msgCallBacks=[]
        // }
        regCallBack(code, obj, callBack) {
          let msg = this.getMsgCallBackByCode(code);

          if (!msg) {
            msg = new MessageCallBack();
            msg.code = code;
            this.msgCallBacks.push(msg);
          }

          msg.callBacks.push({
            obj: obj,
            callBack: callBack
          });
        }

        removeCallBack(code, obj) {
          let msg = this.getMsgCallBackByCode(code);

          if (!msg) {
            return;
          }

          msg.removeCallBackByObj(obj);
        }

        removeAllProtocolByObj(obj) {
          for (let i = 0; i < this.msgCallBacks.length; ++i) {
            this.msgCallBacks[i].removeCallBackByObj(obj); // Mark: remove MessageCallBack
          }
        }

        getMsgCallBackByCode(code) {
          return this.msgCallBacks.find(item => {
            return item.code === code;
          });
        }

        doMsgCallBack(bl, code, data, args) {
          let callBackInfo = this.getMsgCallBackByCode(code);

          if (callBackInfo) {
            callBackInfo.doCallBack(bl, data, args);
          }
        }

      });

      Crash_NetMsgDispatcher.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a7d3806a58fded48b91afe7df089164c6887c0db.js.map