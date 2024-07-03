import { Label, Layout, Node, Sprite, UITransform, _decorator, instantiate } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { global } from '../../../hall';
import { getNodeByNameDeep } from '../../../utils/tool';
import { BalanceInfo, Card, CardGroupType, Countdown, GroupInfo, GroupType, RummyUserPokerVo } from '../type';
import { rummyRoomChoseView } from '../index';
import config from '../config';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
import { calCardGroupType, isJoker } from '../rummyTool';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
	/**结算倒计时 */
	balanceCountdown: Countdown,
	balanceInfos?: BalanceInfo[],
}
export interface IEvent {
	close: () => void,
	callback: () => void
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
		balanceCountdown: undefined,
		balanceInfos: undefined,
	}

	public events: IEvent = {
		close: () => { },
		callback: () => { },
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_result_off.on(Node.EventType.TOUCH_END, () => {
			rummyRoomChoseView.playSound(SoundPathDefine.btn_click)
			this.events.close();
			this.events.callback();
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (this.node && this.node.isValid) {
			if (key === 'balanceCountdown' && this.props.balanceCountdown) {
				this.startCountdown(this.props.balanceCountdown.countdown)
			} else if (key === 'balanceInfos') {
				this.propertyNode.props_content.removeAllChildren();
				this.props.balanceInfos.forEach((v, i) => {
					this.buildResultItem(v, i);
				})
			}
		}
	}

	private buildResultItem(balanceInfo: BalanceInfo, index: number) {
		const itemNode = instantiate(this.propertyNode.props_spr_result_one);
		this.propertyNode.props_content.addChild(itemNode);

		const gold = balanceInfo.type === 1 ? balanceInfo.gold : -balanceInfo.gold;
		itemNode.getChildByName("label_username").getComponent(Label).string = balanceInfo.nickName;
		itemNode.getChildByName("label_pointNum").getComponent(Label).string = balanceInfo.score + '';
		itemNode.getChildByName("label_moneyNum").getComponent(Label).string = gold.formatAmountWithLetter();

		global.loadHeadSprite(balanceInfo.avatarIndex, getNodeByNameDeep('sprite_head', itemNode).getComponent(Sprite));
		itemNode.getChildByName("spr_winner").active = index === 0;
		itemNode.getChildByName("spr_lost").active = index !== 0;

		const props_card_groups = getNodeByNameDeep("props_card_groups", itemNode);

		// 过滤没有牌的的组
		balanceInfo.cardGroup = balanceInfo.cardGroup.filter(v => v.poker.length > 0);
		this.calGroup(balanceInfo.cardGroup);

		if (!balanceInfo.drop && balanceInfo.cardGroup.length > 0) {
			const cardGroupList = itemNode.getChildByName("card_groups_list")
			cardGroupList.removeAllChildren();
			cardGroupList.getComponent(Layout).spacingX = 10;
			if (balanceInfo.cardGroup.length > 0) {
				balanceInfo.cardGroup.forEach(v => {
					const cards = v.poker;
					const groupType = v.groupType
					this.buildCardGroup(cardGroupList, props_card_groups, cards, groupType);
				})
			}
		} else {
			const drop_list = itemNode.getChildByName("drop_list")
			drop_list.getComponent(Layout).spacingX = -47;
			for (let i = 0; i < config.gameConfig.backPokerCount; i++) {
				rummyRoomChoseView.getGameMain().comp.getCardBackNode(drop_list);
			}
		}
	}

	private calGroup(cardGroup: RummyUserPokerVo[]) {
		cardGroup.forEach(v => {
			v.poker.forEach(v => {
				if (!isJoker(v)) {
					v.laizi = v.wild
				}
			})
			v.cardGroupType = calCardGroupType(v.poker).cardGroupType
			v.groupType = GroupType.NOT;
			// 是否为顺子
			if (v.cardGroupType === CardGroupType.PURE_STRAIGHT) {
				v.groupType = GroupType.PURE;
			} else if (v.cardGroupType === CardGroupType.STRAIGHT ||
				v.cardGroupType === CardGroupType.BOMB ||
				v.cardGroupType === CardGroupType.ALL_LAIZI) {
				v.groupType = GroupType.FAKE;
			}
		})

		cardGroup.sort((v1, v2) => v2.cardGroupType - v1.cardGroupType);
		cardGroup.forEach((v, i) => {
			// 如果第一个是真组，那么之后的都变为绿色
			let groupType = v.groupType;
			if (cardGroup[0].groupType === GroupType.PURE && groupType === GroupType.FAKE) {
				groupType = GroupType.PURE;
			}
			if (groupType === GroupType.PURE) {
				if (i === 1) {
					// 如果第二个是假组，并且还是炸弹的话，就是为黄色框
					if (v.groupType === GroupType.FAKE && v.cardGroupType === CardGroupType.BOMB) {
						groupType = GroupType.FAKE;
					}
				} else if (i > 1 && v.cardGroupType === CardGroupType.BOMB) {
					if (cardGroup[1].groupType === GroupType.FAKE && cardGroup[1].cardGroupType === CardGroupType.BOMB) {
						groupType = GroupType.FAKE;
					}
				}
			}
			v.groupType = groupType;
		})
	}

	private buildCardGroup(cardGroupList: Node, props_card_groups: Node, cards: Card[], groupType: number) {
		const groupsNode = instantiate(props_card_groups);
		cardGroupList.addChild(groupsNode);
		const groups = groupsNode.getChildByName("groups");
		groups.getComponent(Layout).spacingX = -47;

		groups.on(Node.EventType.SIZE_CHANGED, () => {
			this.setGroupWight(groupsNode, groups.getComponent(UITransform).width);
		})

		cards.forEach(v => {
			const cardView = rummyRoomChoseView.getGameMain().comp.getCard(groups, false);
			cardView.setProps({
				card: v
			})
		})

		if (groupType === GroupType.NOT) {
			this.getGroupRedKuangNode(groupsNode).active = true;
		} else if (groupType === GroupType.FAKE) {
			this.getGroupHuangKuangNode(groupsNode).active = true;
		} else if (groupType === GroupType.PURE) {
			this.getGroupLvKuangNode(groupsNode).active = true;
		}
	}

	private setGroupWight(groupNode: Node, width: number) {
		groupNode.getComponent(UITransform).width = width;
		this.getGroupRedKuangNode(groupNode).getComponent(UITransform).width = width + 5;
		this.getGroupHuangKuangNode(groupNode).getComponent(UITransform).width = width + 5;
		this.getGroupLvKuangNode(groupNode).getComponent(UITransform).width = width + 5;
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
		this.propertyNode.props_label_nextgame_Num.string = countdown + '';
		if (countdown <= 0) {
			this.events.close();
		}
	}

	protected bindUI(): void {
		this.propertyNode.props_content.removeAllChildren();
	}

	update(deltaTime: number) {

	}
}

