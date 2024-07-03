import { Label, Node, Toggle, UITransform, Vec3, _decorator, instantiate, tween } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import config from '../config';
import { BalanceInfo, BetInfo, Countdown, DeskStatus, Player } from '../type';
import StepNumber from '../../../utils/StepNumber';
import ChipViewModel from '../viewModel/ChipViewModel';
import { playBtnClick, playCoin, playXiazhuJinbi, sourceManageSeletor } from '../index';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { Task, TaskSchedulerDefault } from '../../../utils/TaskScheduler';
import { splitChip } from '../qiuqiu_tool';
import { getNodeByNameDeep } from '../../../utils/tool';
import { global } from '../../../hall';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	deskStatus: DeskStatus
	/**玩家 */
	playerMap: Player[],
	/**上一个做动作的玩家 */
	lastActiveSeatIndex: number,
	/**当前要做动作的用户 */
	currActiveSeatIndex: number,
	gold: number,
	totalBetAmount: number,
	/**最新下注 */
	newBetInfo: BetInfo,
	/**开始游戏倒计时 */
	beginGameCountdown: Countdown,
	/**本局的结算用户的结算信息 */
	balanceInfos: BalanceInfo[],
}
export interface IEvent {
	openSetPanel: (toggle: boolean) => void,
	openShopPanel: () => void,
	onQuitRoom: () => void,
	/**庄家开始出牌 */
	dealerBeginOut: () => void,
	/**获得座位飞筹码开始位置 */
	getSeatFlyClipStartPos: (seatIndex: number) => Vec3,
}

@ccclass('Qiuqiu_MainBoard')
export class Qiuqiu_MainBoard extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_btn_title_menu: new Node(),
		props_clip_area: new Node(),
		props_player_wrap: new Node(),
		props_label_pot_num: new Label(),
		props_btn_title_shop: new Node(),
		props_btn_title_chat: new Node(),
		/**荷官节点 */
		props_dealer: new Node(),
		/**赔付筹码的放置区域 */
		props_paid_area: new Node(),
		/**单个人赔付筹码的放置区域 */
		props_pilechip: new Node(),
		/**开始游戏倒计时 */
		props_label_cutdown_num: new Label(),
	}

	public props: IProps = {
		deskStatus: DeskStatus.WAITING,
		playerMap: new Array(config.seatNumber).fill(null),
		lastActiveSeatIndex: -1,
		currActiveSeatIndex: -1,
		gold: 0,
		totalBetAmount: -1,
		newBetInfo: null,
		beginGameCountdown: null,
		balanceInfos: []
	}

	public events: IEvent = {
		openSetPanel: (toggle: boolean) => { },
		openShopPanel: () => { },
		onQuitRoom: () => { },
		dealerBeginOut: () => { },
		getSeatFlyClipStartPos: () => { return null },
	}

	public getPlayerWrapNode() {
		return this.propertyNode.props_player_wrap;
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_title_menu.on(Node.EventType.TOUCH_END, () => {
			playBtnClick();
			this.events.openSetPanel(this.propertyNode.props_btn_title_menu.getComponent(Toggle).isChecked);
		})
		this.propertyNode.props_btn_title_shop.on(Node.EventType.TOUCH_END, () => {
			playBtnClick();
			global.openShop();
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === 'totalBetAmount') {
			this.updateTotalBetAmount(value);
		} else if (key === 'newBetInfo') {
			this.flyClip();
		} else if (key === 'deskStatus') {
			if (DeskStatus.WAITING === value.cur || DeskStatus.COUNTDOWNING === value.cur) {
				this.clearData();
			} else if (DeskStatus.CLSOE === value.cur) {
				this.recycleChip();
			}
		} else if (key === 'beginGameCountdown') {
			this.updateBeginGameCountdown();
		}
	}

	protected bindUI(): void {
		this.propertyNode.props_pilechip.active = false;
		this.propertyNode.props_label_cutdown_num.node.parent.active = false;
	}

	private step: StepNumber;
	/**更新累计下注 */
	private updateTotalBetAmount(value: { pre: any, cur: any }) {
		if (value.cur === 0) {
			this.propertyNode.props_label_pot_num.string = this.formatNumber(0);
			return;
		}

		this.step && this.step.stop();
		this.step = new StepNumber(value.pre, value.cur, (num) => {
			num = Math.floor(num);
			this.node.isValid && (this.propertyNode.props_label_pot_num.string = this.formatNumber(num));
		});
		this.step.set(100)
		this.step.start();
	}

	private formatNumber(value: number) {
		let pot = value + '';
		for (let i = 0; i < 12 - value.toString().length; i++) {
			pot = '0' + pot;
		}
		return pot.substring(0, 3) + ' ' + pot.substring(3, 6) + ' ' + pot.substring(6, 9) + ' ' + pot.substring(9, 12)
	}

	/**飞筹码 */
	private flyClip() {
		const betInfo = this.props.newBetInfo;
		if (!betInfo) return;
		playXiazhuJinbi();
		const pos = this.events.getSeatFlyClipStartPos(betInfo.seatIndex);
		const startPos = this.propertyNode.props_clip_area.getComponent(UITransform).convertToNodeSpaceAR(pos);

		const chips = splitChip(betInfo.amount);
		chips.forEach(v => {
			const endPos = this.randomEndPos();
			this.createChip(false, startPos, endPos, v, this.propertyNode.props_clip_area, 0.3);
		})
	}

	/**
	 * 创建筹码，同时飞筹码
	 * @param startPosIsWorlds 开始坐标是否世界坐标
	 * @param startPos 开始坐标
	 * @param endPos 结束坐标
	 * @param value 筹码值
	 * @param parentNode 上级节点
	 * @param speed 筹码飞翔速度
	 * @param done 筹码飞完之后回调函数
	 */
	private createChip(startPosIsWorlds: boolean, startPos: Vec3, endPos: Vec3, value: number, parentNode: Node, speed: number, done = null) {
		let chip = new ChipViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.prefabs_quiqui_chip).source).appendTo(parentNode)
			.setProps({
				value: value
			}).connect();


		startPosIsWorlds ? chip.viewNode.setWorldPosition(startPos) : chip.viewNode.setPosition(startPos);
		tween(chip.viewNode).to(speed, { position: endPos }).call(() => {
			this.node.isValid && done && done();
		}).start();
	}

	private flyChipSpeed = 0.2
	/**回收筹码 */
	public recycleChip() {
		this.propertyNode.props_paid_area.removeAllChildren();
		const endPos = this.propertyNode.props_dealer.getWorldPosition();
		let count = 0;

		const children = this.propertyNode.props_clip_area.children;
		const length = children.length;
		children.forEach(v => {
			tween(v).to(this.flyChipSpeed, { worldPosition: endPos }).removeSelf().call(() => {
				count++;
				if (count >= length) {
					this.node.isValid && this.pileChip(endPos);
				}
			}).start();
		})
	}

	/**堆筹码 */
	private pileChip(startPos: Vec3) {
		const wins = this.props.balanceInfos;

		// 通过递归，第一堆往用户头像飞完之后，接到飞第二堆
		const flyToPlayer = (arrIndex: number) => {
			const pildChipNode = this.propertyNode.props_paid_area.children[arrIndex]
			if (!pildChipNode) return;

			const startNode = this.getPileChipNode(pildChipNode);
			pildChipNode.getChildByName("spr_chip_bg").setScale(new Vec3(0, 0))
			this.node.isValid && this.chipFlyToPlayer(startNode, wins[arrIndex].seatIndex, () => {
				arrIndex++;
				if (!this.node.isValid) return;
				// pildChipNode.setScale(new Vec3(0, 0))
				if (arrIndex < wins.length) {
					flyToPlayer(arrIndex);
				} else {
					this.propertyNode.props_paid_area.removeAllChildren();
				}
			});
		}

		// 通过递归，从荷官开始飞向桌面，开始堆第一堆，第一堆完了之后开始堆第二堆，所有都堆完了之后，开始飞向用户筹码
		const paid = (arrIndex: number) => {
			// 筹码回收完了之后的下一步操作
			this.node.isValid && this.paidChip(startPos, wins[arrIndex].seatIndex, wins[arrIndex].winloss, () => {
				arrIndex++;
				if (arrIndex < wins.length) {
					paid(arrIndex);
				} else {
					flyToPlayer(0);
				}
			});
		}

		paid(0);
	}

	/**
	 * 赔付筹码
	 * @param dealerPos 荷官位置 
	 * @param winSeatIndex 赢的位置
	 * @param winAmount 赢的金额
	 * @param done 完成的回调函数
	 */
	private paidChip(dealerPos: Vec3, winSeatIndex: number, winAmount: number, done) {
		const pildChipNode = instantiate(this.propertyNode.props_pilechip);
		pildChipNode.active = true;
		this.propertyNode.props_paid_area.addChild(pildChipNode);

		// 显示赔付
		getNodeByNameDeep('props_label_chip', pildChipNode).getComponent(Label).string = winAmount.formatAmountWithLetter();
		const startNode = this.getPileChipNode(pildChipNode);
		const endPos = startNode.getComponent(UITransform).convertToNodeSpaceAR(startNode.getWorldPosition());

		const chips = splitChip(winAmount);
		const length = chips.length;
		for (let i = 0; i < length; i++) {
			this.scheduleOnce(() => {
				this.node.isValid && this.createChip(true, dealerPos, endPos, chips[i], startNode, this.flyChipSpeed, () => {
					if (i === length - 1) {
						// 停顿一下再放用户头像飞
						// this.scheduleOnce(() => {
						this.node.isValid && done && done();
						// }, 0.5)
					}
				});
				endPos.y += 5;
			}, 0.05 * (i + 1))
		}
	}

	private getPileChipNode(node: Node) {
		return node && node.getChildByName("props_chips");
	}

	/**
	 * 筹码飞向用户
	 * @param pildChipNode 
	 * @param flyToSeatIndex 
	 * @param done 
	 */
	private chipFlyToPlayer(pildChipNode: Node, flyToSeatIndex: number, done) {
		const endPos = this.events.getSeatFlyClipStartPos(flyToSeatIndex);
		// 飞向自己时播放收金币的音效
		flyToSeatIndex === 0 && playCoin();
		const children = pildChipNode.children;
		const length = children.length;
		for (let i = 0; i < length; i++) {
			const v = children[i];
			tween(v).to(this.flyChipSpeed * (i + 1), { worldPosition: endPos }).removeSelf().call(() => {
				if (i === length - 1) {
					done && done();
				}
			}).start();
		}

	}

	/**随机筹码结束位置 */
	private randomEndPos() {
		const tf = this.propertyNode.props_clip_area.getComponent(UITransform);
		const x = Math.random() * tf.width;
		const y = Math.random() * tf.height;
		return new Vec3(x, y);
	}

	/**获得荷官位置 */
	public getHealerPosition() {
		return this.propertyNode.props_dealer.getWorldPosition();
	}

	public clearData() {
		this.updateTotalBetAmount({ pre: 0, cur: 0 })
		this.propertyNode.props_paid_area.removeAllChildren();
		this.propertyNode.props_clip_area.removeAllChildren();
	}

	private updateBeginGameCountdown() {
		const countdown = this.props.beginGameCountdown;
		if (countdown && countdown.countdown > 0) {
			this.propertyNode.props_label_cutdown_num.node.parent.active = true;
			this.propertyNode.props_label_cutdown_num.string = countdown.countdown < 10 ? '0' + countdown.countdown : countdown.countdown + '';
		} else {
			this.propertyNode.props_label_cutdown_num.node.parent.active = false;
		}
	}

	update(deltaTime: number) {

	}
}

