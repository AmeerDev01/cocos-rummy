import { _decorator, Button, Game, instantiate, log, Node, Sprite, SpriteFrame, Tween, tween, UITransform, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { sourceManageSeletor } from '../index';
import { playBtnClick } from '../index';
import { SpriteFramePathDefine } from '../sourceDefine/spriteDefine';
import { AnimationStatus, BetType, GameStatus, Result } from '../type';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	/**最新结果 */
	newResult: Result,
	gameStatus: GameStatus,
	/**动画状态 */
	animationStatus: AnimationStatus,
	results: Result[]
}
export interface IEvent {
	openHistoryMax: () => void
}

@ccclass('Yxx_HistoryMin')
export class Yxx_HistoryMin extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	private init = false;

	protected propertyNode = {
		props_btn_history: new Button(),
		props_history_group: new Node(),
		props_spr_result: new Node(),
		props_history_list: new Node(),
		props_temp_history_list: new Node(),
	}

	public props: IProps = {
		newResult: null,
		gameStatus: null,
		animationStatus: null,
		results: [],
	}

	public events: IEvent = {
		openHistoryMax: () => { }
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_history.node.on(Node.EventType.TOUCH_END, () => {
			playBtnClick();
			this.events.openHistoryMax();
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		// log("history min ==================== ", key, value);
		if (key === 'animationStatus') {
			if (value.cur === AnimationStatus.KAI_GAI) {
				this.createResult(this.props.newResult);
			}
		} else if (key === 'gameStatus' && value.cur === GameStatus.BET && this.props.results.length) {
			// 为了防止通过动画添加历史记录时，由于动画播放的原因没有添加，所以在每次开始游戏的时候，处理一次历史记录
			this.propertyNode.props_history_list.removeAllChildren();
			for (let i = 0; i < this.props.results.length; i++) {
				const element = this.props.results[i];
				this.createResult(element, false);
			}
		} else if (key === 'results' && !this.init) { //游戏初始化时调用
			this.init = true;
			this.propertyNode.props_history_list.removeAllChildren();

			const length = this.props.gameStatus === GameStatus.BET ? this.props.results.length : this.props.results.length - 1;
			for (let i = 0; i < length; i++) {
				const element = this.props.results[i];
				this.createResult(element, false);
			}
		}
	}

	private moveHistory(isTween: boolean = true) {
		const children = this.propertyNode.props_history_list.children;
		const offset = 37;
		for (let index = 0; index < children.length; index++) {
			const element = children[index];
			if (isTween) {
				tween(element).by(0.7, { position: new Vec3(offset, 0) }).start();
			} else {
				element.setPosition(new Vec3(element.position.x + offset, element.position.y));
			}
		}
	}

	public createResult(result: Result, isTween: boolean = true): void {
		this.moveHistory(isTween);
		const groupNode = instantiate(this.propertyNode.props_history_group);
		groupNode.active = true;
		groupNode.removeAllChildren();

		result.betTypes.forEach((v, index) => {
			const node = instantiate(this.propertyNode.props_spr_result);
			groupNode.addChild(node);
			node.getComponent(Sprite).spriteFrame = this.getSpriteFrame(v);
			node.scale = new Vec3(1.0, 1.0);
		})

		if (isTween) {
			this.propertyNode.props_temp_history_list.addChild(groupNode);
			tween(groupNode).by(0.5, { scale: new Vec3(0.2, 0.2) }).by(0.2, { scale: new Vec3(-0.2, -0.2) }).call(() => {
				this.propertyNode.props_history_list.addChild(groupNode);
				this.updateHistoryListWidth();
				this.propertyNode.props_temp_history_list.removeAllChildren();
			}).start();
		} else {
			this.propertyNode.props_history_list.addChild(groupNode);
			this.updateHistoryListWidth();
		}
	}

	private updateHistoryListWidth() {
		this.propertyNode.props_history_list.getComponent(UITransform).width = this.propertyNode.props_history_list.children.length * 37;
	}

	private getSpriteFrame(betType: BetType): SpriteFrame {
		let fileName = '';
		if (betType === BetType.SHRIMP) {
			fileName = SpriteFramePathDefine.HISTORY_MIN_1;
		} else if (betType === BetType.GOURD) {
			fileName = SpriteFramePathDefine.HISTORY_MIN_2;
		} else if (betType === BetType.DEER) {
			fileName = SpriteFramePathDefine.HISTORY_MIN_3;
		} else if (betType === BetType.CHOOK) {
			fileName = SpriteFramePathDefine.HISTORY_MIN_4;
		} else if (betType === BetType.CRAB) {
			fileName = SpriteFramePathDefine.HISTORY_MIN_5;
		} else if (betType === BetType.FISH) {
			fileName = SpriteFramePathDefine.HISTORY_MIN_6;
		}
		return sourceManageSeletor().getFile(fileName).source;
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

