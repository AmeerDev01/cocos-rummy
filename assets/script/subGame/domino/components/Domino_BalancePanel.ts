import { Label, Node, Sprite, _decorator, instantiate } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { BalancePlayer, CardItem, CardPosition, DeskStatus, genCardItem } from '../type';
import { global } from '../../../hall';
import CardViewModel from '../viewModel/CardViewModel';
import { roomChooseViewModel, sourceManageSeletor } from '../index';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import ViewModel from '../../../base/ViewModel';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	balancePlayers?: BalancePlayer[]
}
export interface IEvent {
	close: () => void,
	onQuitRoom: () => void,
	onReady: (time: boolean) => void,
}

@ccclass('Domino_BalancePanel')
export class Domino_BalancePanel extends BaseComponent<IState, IProps, IEvent> {
	start() {
	}

	private count = 0;
	protected propertyNode = {
		props_btn_quit: new Node(),
		props_btn_continue: new Node(),
		props_label_times: new Label(),
		props_players: new Node(),
		props_player_item: new Node(),
	}

	private views: CardViewModel[] = [];

	public props: IProps = {
		balancePlayers: null,
	}

	public events: IEvent = {
		close: () => { },
		onQuitRoom: () => { },
		onReady: () => { },
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_quit.on(Node.EventType.TOUCH_END, () => {
			this.clearCountdown();
			this.events.onQuitRoom();
		})
		this.propertyNode.props_btn_continue.on(Node.EventType.TOUCH_END, () => {
			this.clearCountdown();
			this.events.close();
			this.events.onReady(false);
		})
	}

	private t = 0;
	private startCountdown(count) {
		this.count = count;
		this.node && this.node.isValid && (this.propertyNode.props_label_times.string = this.count + "s");
		this.t = window.setInterval(() => {
			this.node && this.node.isValid && (this.propertyNode.props_label_times.string = --this.count + "s");
			if (this.count <= 0) {
				window.clearInterval(this.t);
				this.events.close();
				this.events.onReady(true);
			}
		}, 1000)
	}

	private clearCountdown() {
		this.t && window.clearInterval(this.t);
	}

	protected destroyCallBack(): void {
		this.clearCountdown();
		this.views.forEach(v => v.unMount());
	}

	private initPlayer() {
		this.propertyNode.props_players.removeAllChildren();
		this.props.balancePlayers.forEach(v => this.genPlayerItem(v))
		this.startCountdown(5);
	}

	private getOddsStr(odds: number) {
		switch (odds) {
			case 1: return 'SINGLE';
			case 2: return 'DOUBLE';
			case 3: return 'TRIPLE';
			case 4: return 'QUARTET';
			case 5: return 'QUINTET';
		}

		return '';
	}

	private genPlayerItem(balancePlayer: BalancePlayer) {
		const playerItem = instantiate(this.propertyNode.props_player_item)
		this.propertyNode.props_players.addChild(playerItem);
		playerItem.getChildByName('props_label_name').getComponent(Label).string = balancePlayer.nickName;
		playerItem.getChildByName('props_label_id').getComponent(Label).string = "ID:" + balancePlayer.memberId;
		playerItem.getChildByName('props_label_odds').getComponent(Label).string = this.getOddsStr(balancePlayer.odds);
		playerItem.getChildByName('props_label_bet').getComponent(Label).string = balancePlayer.bet.formatAmountWithLetter();
		playerItem.getChildByName('props_label_count').getComponent(Label).string = (balancePlayer.count > 0 ? '+' : '') + balancePlayer.count.formatAmountWithLetter();

		const headSprite = playerItem.getChildByName('props_btn_mine_head').getComponent(Sprite);
		// global.loadHeadSprite(balancePlayer.icon, headSprite);

		const cards = playerItem.getChildByName('props_layout_cards')
		balancePlayer.cards.forEach(v => {
			this.genCardItemViewModel(genCardItem(v), cards);
		})
	}

	private genCardItemViewModel(cardItem: CardItem, parentNode: Node) {
		const cardViewModel = new CardViewModel()
			.mountView(sourceManageSeletor().getFile(PrefabPathDefine.CARD).source)
			.appendTo(parentNode)
			.setProps({
				upFace: cardItem.upFace,
				downFace: cardItem.downFace,
				alignValue: cardItem.alignValue,
				value: cardItem.value,
				position: CardPosition.VERTICAL,
				type: 1,
				isShow: true,
				isBright: true,
			}).connect();
		this.views.push(cardViewModel);
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		key === 'balancePlayers' && this.initPlayer();
	}

	protected bindUI(): void {
	}

	update(deltaTime: number) {

	}
}

