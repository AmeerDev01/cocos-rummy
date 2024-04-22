import { _decorator, Button, instantiate, Label, log, Node, Sprite, SpriteFrame, UITransform } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { AnimationStatus, BetType, GameStatus, Result } from '../type';
import { SpriteFramePathDefine } from '../sourceDefine/spriteDefine';
import { sourceManageSeletor } from '../index';
import { playBtnClick } from '../index';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	results?: Result[],
	/**最新结果 */
	newResult: Result,
	/**动画状态 */
	animationStatus: AnimationStatus,
}
export interface IEvent {
	close: () => void
}

@ccclass('Yxx_HistoryMax')
export class Yxx_HistoryMax extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_btn_history_close: new Button(),
		props_history_list: new Node(),
		props_history_group: new Node(),
		props_spr_result: new Node(),
		props_label_shrimp_count: new Label(),
		props_label_gourd_count: new Label(),
		props_label_deer_count: new Label(),
		props_label_chook_count: new Label(),
		props_label_crab_count: new Label(),
		props_label_fish_count: new Label(),
	}

	public props: IProps = {
		results: [],
		newResult: null,
		animationStatus: null
	}

	public events: IEvent = {
		close: () => { }
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_history_close.node.on(Node.EventType.TOUCH_END, () => {
			playBtnClick();
			this.events.close();
		});
	}


	private createResult(result: Result, index: number, isAdd: boolean = false): void {
		const groupNode = instantiate(this.propertyNode.props_history_group);
		groupNode.active = true;
		groupNode.getChildByName("spr_history_newBg").active = index === 0;
		const resultListNode = groupNode.getChildByName("result_list");
		resultListNode.removeAllChildren();

		isAdd ? this.propertyNode.props_history_list.insertChild(groupNode, 0) : this.propertyNode.props_history_list.addChild(groupNode);

		result.betTypes.forEach(v => {
			const node = instantiate(this.propertyNode.props_spr_result);
			resultListNode.addChild(node);
			node.getComponent(Sprite).spriteFrame = this.getSpriteFrame(v);
		})

	}

	private hideHistoryNewBg() {
		this.propertyNode.props_history_list.children.forEach(v => {
			v.getChildByName("spr_history_newBg").active = false;
		});
	}

	private getSpriteFrame(betType: BetType): SpriteFrame {
		let fileName = '';
		if (betType === BetType.SHRIMP) {
			fileName = SpriteFramePathDefine.HISTORY_MIN_BIG1
		} else if (betType === BetType.GOURD) {
			fileName = SpriteFramePathDefine.HISTORY_MIN_BIG2;
		} else if (betType === BetType.DEER) {
			fileName = SpriteFramePathDefine.HISTORY_MIN_BIG3;
		} else if (betType === BetType.CHOOK) {
			fileName = SpriteFramePathDefine.HISTORY_MIN_BIG4;
		} else if (betType === BetType.CRAB) {
			fileName = SpriteFramePathDefine.HISTORY_MIN_BIG5;
		} else if (betType === BetType.FISH) {
			fileName = SpriteFramePathDefine.HISTORY_MIN_BIG6;
		}
		return sourceManageSeletor().getFile(fileName).source;
	}

	private getCountLabel(betType: BetType): Label {
		if (betType === BetType.SHRIMP) {
			return this.propertyNode.props_label_shrimp_count;
		} else if (betType === BetType.GOURD) {
			return this.propertyNode.props_label_gourd_count;
		} else if (betType === BetType.DEER) {
			return this.propertyNode.props_label_deer_count;
		} else if (betType === BetType.CHOOK) {
			return this.propertyNode.props_label_chook_count;
		} else if (betType === BetType.CRAB) {
			return this.propertyNode.props_label_crab_count;
		} else if (betType === BetType.FISH) {
			return this.propertyNode.props_label_fish_count;
		}
	}

	private collectResultCount(result: Result[]) {
		if (!result) {
			return;
		}
		const counts: number[] = new Array(7).fill(0).map(() => 0);
		this.props.results.forEach(result => {
			result.betTypes.forEach(type => {
				counts[type]++;
			})
		})

		this.propertyNode.props_label_shrimp_count.string = counts[BetType.SHRIMP] + "";
		this.propertyNode.props_label_gourd_count.string = counts[BetType.GOURD] + "";
		this.propertyNode.props_label_deer_count.string = counts[BetType.DEER] + "";
		this.propertyNode.props_label_chook_count.string = counts[BetType.CHOOK] + "";
		this.propertyNode.props_label_crab_count.string = counts[BetType.CRAB] + "";
		this.propertyNode.props_label_fish_count.string = counts[BetType.FISH] + "";
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === 'results') {
			this.propertyNode.props_history_list.removeAllChildren();
			this.collectResultCount(value.cur);
			[...value.cur].reverse().forEach((v, index) => {
				this.createResult(v, index);
			})
		// } else if (key === 'animationStatus') {
		// 	if (value.cur === AnimationStatus.KAI_GAI) {
		// 		this.hideHistoryNewBg();
		// 		this.createResult(this.props.newResult, 0, true);
		// 	}
		}
	}

	protected bindUI(): void {
	}

	update(deltaTime: number) {

	}
}

