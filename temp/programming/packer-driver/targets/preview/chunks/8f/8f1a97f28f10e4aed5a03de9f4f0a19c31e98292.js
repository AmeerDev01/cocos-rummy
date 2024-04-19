System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, BaseComponent, GameType, setShowAuthLaunch, _dec, _class, _crd, ccclass, property, GodWealth_gameBoard;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetShowAuthLaunch(extras) {
    _reporterNs.report("setShowAuthLaunch", "../store/actions/game", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      GameType = _unresolved_3.GameType;
    }, function (_unresolved_4) {
      setShowAuthLaunch = _unresolved_4.setShowAuthLaunch;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8a7a80aBT5KvKV2Dc+FNBa9", "GodWealth_gameBoard", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'tween', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GodWealth_gameBoard", GodWealth_gameBoard = (_dec = ccclass('GodWealth_gameBoard'), _dec(_class = class GodWealth_gameBoard extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_gameBoard: new Node(),
            props_wrap: new Node(),

            /**主界面背景 */
            props_spr_main_bg: new Node() // props_spr_main_greenBg:new Node(),

          };
          this.props = {
            gameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).NONE
          };
          this.events = {
            changeGameHandler: (lastGameType, currGameType) => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.node.on(Node.EventType.TOUCH_END, () => {
            this.dispatch((_crd && setShowAuthLaunch === void 0 ? (_reportPossibleCrUseOfsetShowAuthLaunch({
              error: Error()
            }), setShowAuthLaunch) : setShowAuthLaunch)(false));
          });
        }

        useProps(key, value) {
          if (key === "gameType") {
            this.events.changeGameHandler(value.pre, value.cur); // this.propertyNode.props_spr_main_blueBg.active = value.cur === GameType.MAIN;
            // this.propertyNode.props_spr_main_greenBg.active = value.cur === GameType.SUBGAME1;
          }
        }

        bindUI() {}

        getGameNode() {
          return this.propertyNode.props_gameBoard;
        }

        getWrapNode() {
          return this.propertyNode.props_wrap;
        } // public multiplierBaoHe(callback) {
        // 	rollerPanelViewModel.comp.rollerViewModelMap.forEach((roller, index) => { 
        // 		roller.comp.baoHeItemArr.forEach((item, i) => {
        // 			console.log("item",item);
        // 			const baoHeAmount = item.viewNode.getChildByName("props_amount");
        // 			baoHeAmount.active = false;
        // 			// 获取起始和目标的世界坐标
        // 			let startWorldPos = item.viewNode.getChildByName("props_Particle2D").worldPosition;
        // 			// console.log(footerViewModel.comp.getPropertyNode().props_btn_down_putar as Node);
        // 			let targetWorldPos = (footerViewModel.comp.getPropertyNode().props_word_down_winNum as Node).worldPosition;
        // 			// 创建节点的实例
        // 			const node = instantiate(item.viewNode.getChildByName("props_Particle2D"));
        // 			node.active = true;
        // 			// 将节点添加到目标节点所在的父节点
        // 			footerViewModel.comp.node.addChild(node);
        // 			// 获取父节点的 UITransform 组件
        // 			let uiTransform = footerViewModel.comp.node.getComponent(UITransform);
        // 			// 将世界坐标转换为新父节点的局部坐标
        // 			let startLocalPos = uiTransform.convertToNodeSpaceAR(startWorldPos);
        // 			let targetLocalPos = uiTransform.convertToNodeSpaceAR(targetWorldPos);
        // 			// 设置节点的初始位置
        // 			node.setPosition(startLocalPos);
        // 			// 执行缓动动画
        // 			tween(node)
        // 				.to(1, { position: targetLocalPos }, { easing: 'sineInOut' })
        // 				.call(() => {
        // 					const amountTotal = (footerViewModel.comp.getPropertyNode().props_word_down_winNum as Label).string;
        // 					const baoHeAmount = item.viewNode.getChildByName("props_amount").getChildByName("props_baohe_label").getComponent(Label).string
        // 					console.log("amountTotal",amountTotal,baoHeAmount);
        // 					// let total = Number(this.removeComma(amountTotal)) + Number(this.removeComma(baoHeAmount));
        // 					// (footerViewModel.comp.getPropertyNode().props_word_down_winNum as Label).string = total.formatAmountWithCommas();
        // 					// this.dispatch( changeProfit(total) ); //更新盈亏
        // 					node.destroy()
        // 				})
        // 				.start();
        // 		})
        // 	})
        // }


        removeComma(str) {
          var newStr = str.replace(/,/g, "");
          return newStr;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8f1a97f28f10e4aed5a03de9f4f0a19c31e98292.js.map