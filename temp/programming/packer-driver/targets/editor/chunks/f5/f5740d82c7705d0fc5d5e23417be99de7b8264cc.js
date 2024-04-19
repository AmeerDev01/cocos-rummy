System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, sp, BaseComponent, _dec, _class, _crd, ccclass, property, Bandar_online;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinUser(extras) {
    _reporterNs.report("WinUser", "../store/actions/bet", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Node = _cc.Node;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ae608eWXDpAi7RzSfe3Os41", "Bandar_online", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Node', 'sp', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bandar_online", Bandar_online = (_dec = ccclass('Bandar_online'), _dec(_class = class Bandar_online extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            /** 在线人数图标 */
            props_btn_users: new Node(),

            /** 在线人数 */
            props_label_users_num: new Label(),

            /**赢 动画 */
            props_skeleton_win: new Node()
          };
          this.props = {
            onlineNum: null,
            allWinUsers: null
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === "onlineNum") {
            this.propertyNode.props_label_users_num.string = value.cur + "";
          }

          if (key === "allWinUsers") {// console.log(value.cur);
            // if(!value.cur){
            // 	return
            // }
            // value.cur.forEach((item)=>{
            // 	if(item.index>6 && item.memberId!==gameCacheData.memberId){
            // 		console.log("allwinitemindex",item.index,item.memberId);
            // 		this.playWinAni()
            // 	}else if(item.memberId===gameCacheData.memberId){
            // 		console.log("allwinitemindex",item.index,item.memberId);
            // 		footerViewModel.comp.palyAddUp(item)
            // 	}
            // })
          }
        }
        /** 播放其他玩家赢 动画 */


        playWinAni() {
          // console.log("playWinAni");
          this.propertyNode.props_skeleton_win.active = true;
          this.propertyNode.props_skeleton_win.getComponent(sp.Skeleton).animation = "animation";
        }

        toggleCallback(event, customEventData) {}

        bindUI() {
          this.propertyNode.props_skeleton_win.active = false;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f5740d82c7705d0fc5d5e23417be99de7b8264cc.js.map