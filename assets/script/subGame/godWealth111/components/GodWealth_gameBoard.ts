import { _decorator, Component, instantiate, Label, Node, tween, UITransform } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { GameType } from '../type';
import { changeProfit, setShowAuthLaunch } from '../store/actions/game';
import { rollerPanelViewModel } from '../viewModel/GameBoardViewModel';
import { footerViewModel } from '../index';
import { getNodeByNameDeep } from '../../../utils/tool';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	gameType: GameType
}
export interface IEvent {
	/**子游戏值改变要执行的函数 */
	changeGameHandler: (lastGameType: GameType, currGameType: GameType) => void
}

@ccclass('GodWealth_gameBoard')
export class GodWealth_gameBoard extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_gameBoard: new Node(),
		props_wrap: new Node(),
		/**主界面背景 */
		props_spr_main_bg: new Node(),
		// props_spr_main_greenBg:new Node(),
				
	}

	public props: IProps = {
		gameType: GameType.NONE
	}

	public events: IEvent = {
		changeGameHandler: (lastGameType: GameType, currGameType: GameType) => { }
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.node.on(Node.EventType.TOUCH_END, () => {
			this.dispatch(setShowAuthLaunch(false))
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "gameType") {
			this.events.changeGameHandler(value.pre, value.cur)
			// this.propertyNode.props_spr_main_blueBg.active = value.cur === GameType.MAIN;
			// this.propertyNode.props_spr_main_greenBg.active = value.cur === GameType.SUBGAME1;
		}
	}

	protected bindUI(): void {
		
	}

	public getGameNode() {
		return this.propertyNode.props_gameBoard
	}

	public getWrapNode() {
		return this.propertyNode.props_wrap
	}

	// public multiplierBaoHe(callback) {
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

	private removeComma(str){
		const newStr=str.replace(/,/g,"")
		return newStr
	}


	update(deltaTime: number) {

	}
}

