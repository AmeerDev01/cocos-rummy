import { Label, Node, Sprite, UITransform, _decorator, instantiate } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { global } from '../../../hall';
import { getNodeByNameDeep } from '../../../utils/tool';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
}
export interface IEvent {
	close: () => void
}

@ccclass('Rummy_ResultPanel')
export class Rummy_ResultPanel extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	protected propertyNode = {
		props_btn_result_off: new Node(),
		props_content: new Node(),
		props_spr_result_one: new Node(),
		props_label_nextgame_Num: new Label(),
	}

	public props: IProps = {
	}

	public events: IEvent = {
		close: () => { }
	}

	protected initState() {
		return {
			
		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_result_off.on(Node.EventType.TOUCH_END, () => {
			this.events.close();
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
	}

	private buildResultItem() {
		const itemNode = instantiate(this.propertyNode.props_spr_result_one);

		itemNode.getChildByName("label_username").getComponent(Label).string = '';
		itemNode.getChildByName("label_pointNum").getComponent(Label).string = '';
		itemNode.getChildByName("label_moneyNum").getComponent(Label).string = '';
		itemNode.getChildByName("sprite_head");
		itemNode.getChildByName("spr_winner");
		itemNode.getChildByName("spr_lost");

		const props_card_groups = getNodeByNameDeep("props_card_groups", itemNode);
		const cardGroupList = itemNode.getChildByName("card_groups_list")
		cardGroupList.removeAllChildren();
	}

	private buildCardGroup(cardGroupList: Node, props_card_groups: Node) {
		const groupsNode = instantiate(props_card_groups);
		cardGroupList.addChild(groupsNode);
		const groups = groupsNode.getChildByName("groups");

		groups.on(Node.EventType.SIZE_CHANGED, () => {
			this.setGroupWight(groupsNode, groups.getComponent(UITransform).width);
		})
	}

	private setGroupWight(groupNode: Node, width: number) {
		groupNode.getComponent(UITransform).width = width;
		this.getGroupRedKuangNode(groupNode).getComponent(UITransform).width = width + 10;
		this.getGroupHuangKuangNode(groupNode).getComponent(UITransform).width = width + 10;
		this.getGroupLvKuangNode(groupNode).getComponent(UITransform).width = width + 10;
	}

	private getGroupRedKuangNode(groupNode: Node) {
		return groupNode.getChildByName("red_kuang");
	}
	private getGroupHuangKuangNode(groupNode: Node) {
		return groupNode.getChildByName("huang_kuang");
	}
	private getGroupLvKuangNode(groupNode: Node) {
		return groupNode.getChildByName("lv_kuang");
	}

	private startCountdown(countdown: number) {
		let count = countdown
		this.propertyNode.props_label_nextgame_Num.string = count + '';
		this.schedule(() => {
			count--;
			this.propertyNode.props_label_nextgame_Num.string = count + '';
			if (count <= 0) {
				this.events.close();
			}
		}, 1, countdown)
	}

	protected bindUI(): void {
		this.propertyNode.props_content.removeAllChildren();
	}

	update(deltaTime: number) {

	}
}

