System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, BaseComponent, updateWinUsers, _dec, _class, _crd, ccclass, property, Bandar_lose;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeadType(extras) {
    _reporterNs.report("HeadType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateWinUsers(extras) {
    _reporterNs.report("updateWinUsers", "./Bandar_win", _context.meta, extras);
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
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      updateWinUsers = _unresolved_3.updateWinUsers;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1a7f27Dg0tMnaAzSObzLIpX", "Bandar_lose", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Node', 'Sprite', 'SpriteFrame']); // import { WinInfo } from '../store/actions/history';


      ({
        ccclass,
        property
      } = _decorator);

      _export("Bandar_lose", Bandar_lose = (_dec = ccclass('Bandar_lose'), _dec(_class = class Bandar_lose extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_spr_win_bg: new Node(),
            props_label_lose_num: new Node()
          };
          this.props = {
            myInfo: null // roomWinInfo:[],

          };
          this.events = {
            onClosePanel: () => {}
          };
        }

        start() {// updateWinUsers(this.node)
        }

        initState() {
          return {};
        }

        bindEvent() {//   this.propertyNode.props_spr_win_bg.on(Node.EventType.TOUCH_END,()=>{
          // 	playBtnClick();
          // 	this.events.onClosePanel()
          //   })
        }

        useProps(key, value) {
          if (key === "myInfo") {// updateWinUsers(this.node)
            // if(value.cur.winGold===0){
            // 	this.propertyNode.props_label_lose_num.getComponent(Label).string=value.cur.winGold
            // }else{
            // 	let goldNum:string=Math.abs(value.cur.winGold).formatAmountWithCommas()
            // 	this.propertyNode.props_label_lose_num.getComponent(Label).string="-"+goldNum
            // }
          }
        }

        updateWinsAndLosses(myInfo) {
          (_crd && updateWinUsers === void 0 ? (_reportPossibleCrUseOfupdateWinUsers({
            error: Error()
          }), updateWinUsers) : updateWinUsers)(this.node);

          if (myInfo.winGold === 0) {
            this.propertyNode.props_label_lose_num.getComponent(Label).string = myInfo.winGold + "";
          } else {
            let goldNum = Math.abs(myInfo.winGold).formatAmountWithCommas();
            this.propertyNode.props_label_lose_num.getComponent(Label).string = "-" + goldNum;
          }
        }

        toggleCallback(event, customEventData) {}

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=74caee97afcbe605480582de310ac5146b3675a7.js.map