import { Node, Vec3, _decorator, instantiate, tween } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { DeskStatus, OperationType, Player } from '../type';
import config from '../config';
import { playFapai } from '../index';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
	deskStatus: DeskStatus,
	playerMap: Player[],
	currActiveSeatIndex: number,
	dealCount: number,
}
export interface IEvent {
	/**获得下一个位置 */
	getNextSeatIndex: (lastIndex: number) => number,
	/**获得位置的发牌点位 */
	getSeatCardPoint: (seatIndex: number, index: number) => Vec3,
	/**飞牌结束的处理 */
	flyCardOverHanler: (seatIndex: number, index: number) => void,
	dealOver: () => void,
}

@ccclass('Qiuqiu_SendCard')
export class Qiuqiu_SendCard extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	private dealCount = 0;
	/**排队索引 */
	private dealIndex = 1;
	/**已经发牌的总张数 */
	private dealTotalCount = 0;

	protected propertyNode = {
		props_icon_qiuqiu_paibei: new Node(),
	}

	public props: IProps = {
		deskStatus: null,
		playerMap: [],
		currActiveSeatIndex: -1,
		dealCount: 0
	}

	public events: IEvent = {
		getNextSeatIndex: (lastIndex: number) => { return 0 },
		getSeatCardPoint: (seatIndex: number, index: number) => { return null },
		flyCardOverHanler: (seatIndex: number, index: number) => { },
		dealOver: () => { },
	}

	protected initState() {
		return {
		}
	}

	protected bindEvent(): void {
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === 'deskStatus') {
			if (value.cur === DeskStatus.FIRST_DISTRIBUTE) {
				this.dealTotalCount = 0;
				this.dealCount = 0;
				this.dealIndex = 1;
				this.showAllCard(true);
				this.beginDeal(3);
			} else if (value.cur === DeskStatus.SECOND_DISTRIBUTE) {
				this.beginDeal(4);
			} else if (value.cur === DeskStatus.COUNTDOWNING) {
				this.showAllCard(false);
			} else if (value.cur === DeskStatus.PLAYING && config.isReconnect) {
				this.reconnectShowCard();
			}
		} else if (key === 'dealCount' && value.cur === DeskStatus.PLAYING && config.isReconnect) {
			this.reconnectShowCard();
		}
	}

	private getGameNumber() {
		let count = 0;
		this.props.playerMap.forEach(v => {
			if (v && v.gameData.isGame && v.gameData.opType !== OperationType.GIVE_UP) {
				count++;
			}
		})
		return count;
	}

	/**
	 * 开始发牌
	 * @param dealNumber 发牌到第几张牌，比如 3，发3张牌，如果再次设置4，表示从前面的基础，发到第4张牌
	 */
	private beginDeal(dealNumber: number) {
		const gameNumber = this.getGameNumber()
		this.roundDeal(gameNumber, dealNumber, this.props.currActiveSeatIndex);
	}

	/**
	 * 圈数发牌
	 * @param gameNumber 游戏人数
	 * @param dealNumber 发牌数量
	 * @param flySeatIndex 发牌开始位置
	 */
	private roundDeal(gameNumber: number, dealNumber: number, flySeatIndex: number) {
		if (this.dealCount >= dealNumber) {
			this.events.dealOver();
			return;
		}
		this.dealCount++;
		const startNode = this.node.getChildByName("prpos_spr_card" + this.dealIndex)
		this.flyCard(startNode, this.dealCount, gameNumber, 0, flySeatIndex, () => {
			if (this.dealCount < dealNumber) {
				this.node.isValid && this.roundDeal(gameNumber, dealNumber, flySeatIndex);
			} else {
				this.events.dealOver();
			}
		});
	}

	/**
	 * 飞牌，使用递归发牌，游戏人数发牌完成之后调用回调方法
	 * @param startNode 飞牌开始位置的节点
	 * @param rountNumber 当前发牌的圈数
	 * @param gameNumber 游戏人数
	 * @param count 发牌次数
	 * @param flySeatIndex 发牌位置
	 * @param done 发牌完成之后的回调方法
	 * @returns 
	 */
	private flyCard(startNode: Node, rountNumber: number, gameNumber: number, count: number, flySeatIndex: number, done) {
		if (count >= gameNumber) {
			done && done();
			return;
		}

		this.dealTotalCount++;
		if (this.dealTotalCount % 4 === 0) { // 一圈最后一个人开始发牌时隐藏开发飞牌位置的节点
			startNode.active = false;
			this.dealIndex++;
		}
		const startPos = startNode.getPosition();
		const seatIndex = flySeatIndex;
		const endPos = this.events.getSeatCardPoint(seatIndex, rountNumber);
		this.createFlyCard(startPos, endPos, () => {
			this.events.flyCardOverHanler(seatIndex, rountNumber);
			startNode = this.node.getChildByName("prpos_spr_card" + this.dealIndex)
			if (count < gameNumber) {
				this.node.isValid && this.flyCard(startNode, rountNumber, gameNumber, ++count, this.events.getNextSeatIndex(seatIndex), done);
			}
		})
	}

	/**
	 * 创建飞牌阶段
	 * @param startPos 开始位置
	 * @param endPos 结束位置
	 * @param done 飞牌过程结束之后回调方法
	 */
	private createFlyCard(startPos: Vec3, endPos: Vec3, done) {
		const flyNode = instantiate(this.propertyNode.props_icon_qiuqiu_paibei);
		flyNode.active = true;
		flyNode.setPosition(startPos);
		this.node.addChild(flyNode);

		if (config.isReconnect) {
			flyNode.setWorldPosition(endPos);
			this.node && this.node.isValid && done && done();
			flyNode.destroy();
		} else {
			playFapai();
			const dealAnimeSpeed = config.isReconnect ? 0 : config.dealAnimeSpeed;
			tween(flyNode).to(dealAnimeSpeed, { worldPosition: endPos }).call(() => {
				this.node && this.node.isValid && done && done();
				flyNode.destroy();
			}).start();
		}
	}

	protected bindUI(): void {
		this.propertyNode.props_icon_qiuqiu_paibei.active = false;
		this.showAllCard(false);
	}

	private showAllCard(show: boolean) {
		this.node.children.filter(v => v.name.startsWith("prpos_spr_card")).forEach(v => v.active = show);
	}

	private reconnectShowCard() {
		let dealCardCount = 0;
		this.dealTotalCount = this.props.dealCount;
		// 累计已发的牌数量
		this.props.playerMap.filter(v => v && v.gameData.isGame).forEach(v => {
			if (v.gameData.dealCardCount > dealCardCount) {
				dealCardCount = v.gameData.dealCardCount;
			}
		});
		this.dealCount = dealCardCount;
		// 发牌索引本身是从1开始，这里要加上1
		this.dealIndex = Math.floor(this.dealTotalCount / 4) + 1

		this.showAllCard(true);
		for (let i = 1; i < this.dealIndex; i++) {
			this.node.getChildByName("prpos_spr_card" + i).active = false;
		}
	}

	update(deltaTime: number) {

	}
}

