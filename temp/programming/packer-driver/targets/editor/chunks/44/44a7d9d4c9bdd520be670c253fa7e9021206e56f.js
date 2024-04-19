System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, BaseComponent, updateWinUsers, _dec, _class, _crd, ccclass, property, DragonTiger_win;

  function formatNumber(num) {
    if (!num) return "0";
    const units = ['', 'K', 'M'];
    let unitIndex = 0; // 将数字按照1000为基数迭代缩小

    while (num >= 1000 && unitIndex < units.length - 1) {
      num /= 1000;
      unitIndex++;
    }

    if (Number.isInteger(num)) {
      return num.formatAmountWithCommas() + units[unitIndex];
    } else {
      // 使用toFixed保留一位小数，并转换成字符串格式
      return Number(num.toFixed(2)).formatAmountWithCommas() + units[unitIndex];
    }
  }

  function paddingNum(num) {
    let logo = ""; //用于记录是正值还是负值

    if (num < 0) {
      logo = "-";
      num = -num; //将负数转正,如果不转正，则下面获取它的length时，会由于有个负号，使得长度+1，最终加逗号位置出错
    }

    let result = num.toString().split(""); //将数字转化为了数组，便于使用数组中的splice方法插入逗号

    let position = result.indexOf("."); //获取小数点的位置，根据有无小数点确定position最终值进入添加逗号环节

    position = position !== -1 ? position -= 1 : result.length; //因为只需考虑整数部分插入逗号，所以需要考虑有没有逗号。有逗号则不等于-1，减去逗号位置，则是下标0~position就是整数部分；若不是小数，则num原本就是整数，直接取其length即可

    while (position > 2) {
      //只要下标值大于2，说明前面还可以插入“,”，则继续循环
      position -= 3; //下标前移3位，然后在这个下标对应的元素后面插入逗号

      result.splice(position + 1, 0, ",");
    }

    return logo + result.join(""); //数组转换为字符串,前面+logo，若为负数则拼接个符号，否则拼接空字符
  }

  function removeComma(str) {
    const newStr = str.replace(/,/g, "");
    return newStr;
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWinInfo(extras) {
    _reporterNs.report("WinInfo", "../store/actions/history", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateWinUsers(extras) {
    _reporterNs.report("updateWinUsers", "./DragonTiger_lose", _context.meta, extras);
  }

  _export({
    formatNumber: formatNumber,
    paddingNum: paddingNum,
    removeComma: removeComma
  });

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

      _cclegacy._RF.push({}, "2d5f2uteGxEGIJSCLTxP+DN", "DragonTiger_win", undefined);

      __checkObsolete__(['_decorator', 'Label', 'Node', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DragonTiger_win", DragonTiger_win = (_dec = ccclass('DragonTiger_win'), _dec(_class = class DragonTiger_win extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_spr_win_bg: new Node(),
            props_label_win_num: new Node(),
            props_spr_user_bg1: new Node(),
            props_spr_user_bg2: new Node(),
            props_spr_user_bg3: new Node(),
            props_spr_user_bg4: new Node()
          };
          this.props = {
            winGold: 0,
            roomWinInfo: []
          };
          this.events = {
            onClosePanel: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {//    this.propertyNode.props_spr_win_bg.on(Node.EventType.TOUCH_END,()=>{
          // 	this.events.onClosePanel()
          // 	playBtnClick();
          //    })
        }

        useProps(key, value) {
          if (key === "winGold") {
            if (value.cur === 0) {
              this.propertyNode.props_label_win_num.getComponent(Label).string = value.cur + "";
            } else {
              this.propertyNode.props_label_win_num.getComponent(Label).string = "+" + value.cur.formatAmountWithCommas();
            }
          }

          if (key === "roomWinInfo") {
            (_crd && updateWinUsers === void 0 ? (_reportPossibleCrUseOfupdateWinUsers({
              error: Error()
            }), updateWinUsers) : updateWinUsers)(this.node); // let headNode:Node[]=[this.propertyNode.props_spr_user_bg1,this.propertyNode.props_spr_user_bg2,this.propertyNode.props_spr_user_bg3,this.propertyNode.props_spr_user_bg4]
            // for(let i=0;i<headNode.length;i++){
            // 	headNode[i].active=false;
            // 	headNode[i].getChildByName("Label_user_name").getComponent(Label).string="";
            // 	headNode[i].getChildByName("Label_user_gold").getComponent(Label).string=""
            // 	bundleDragonTiger.load(`img/head1/spriteFrame`, SpriteFrame, (err, sp) => {
            // 		if (!err) {
            // 			headNode[i].getChildByName(`spr_user_head`).getComponent(Sprite).spriteFrame = sp
            // 		}
            // 	})
            // }
            // for(let i=0;i<value.cur.length;i++){
            // 	for(let j=0;j<headNode.length;j++){
            // 		if(i===j){
            // 			let goldNum:string=formatNumber(value.cur[i].gold)
            // 			headNode[j].active=true;
            // 			headNode[j].getChildByName("Label_user_name").getComponent(Label).string=omitStr(value.cur[i].memberName,20);
            // 			headNode[j].getChildByName("Label_user_gold").getComponent(Label).string="+"+goldNum;
            // 			bundleCommon.load(`resource/head/head_circle_${value.cur[i].icon}/spriteFrame`, SpriteFrame, (err, sp) => {
            // 				if (!err) {
            // 					headNode[i].getChildByName(`spr_user_head`).getComponent(Sprite).spriteFrame = sp
            // 				}
            // 			})
            // 		}
            //     }
            // }
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
//# sourceMappingURL=44a7d9d4c9bdd520be670c253fa7e9021206e56f.js.map