import { _decorator, Button, Component, Game, log, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { changeOnlineNumber, changeSeat, changeSeatBet, initState, joinGame, otherJoinGame, quitGame } from '../store/actions/game';
import { seatBet } from '../store/actions/bet';
import { BetData, BetType, GameStatus, HeadType, Result } from '../type';
import config, { initBetData, initHeadType } from '../config';
import { changeGameStatus, countdown } from '../store/actions/gameFlow';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	seats: HeadType[],
	onlineNumber: number,
	gameStatus: GameStatus
}
export interface IEvent {

}

@ccclass('Yxx_Test')
export class Yxx_Test extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_bet_btn: new Button(),
		props_online: new Button(),
		props_join: new Button(),
		props_other_join: new Button(),
		props_start_game: new Button(),
		props_quit_game: new Button(),
	}

	public props: IProps = {
		seats: [],
		onlineNumber: 0,
		gameStatus: null
	}

	public events: IEvent = {

	}

	protected initState() {
		return {

		}
	}

	private otherIndex = 0;
	protected bindEvent(): void {
		this.propertyNode.props_bet_btn.node.on(Node.EventType.TOUCH_END, () => {
			this.bet();
		})

		this.propertyNode.props_online.node.on(Node.EventType.TOUCH_END, () => {
			this.dispatch(changeOnlineNumber(this.props.onlineNumber + 1));
		});

		this.propertyNode.props_start_game.node.on(Node.EventType.TOUCH_END, () => {
			this.dispatch(changeGameStatus(GameStatus.BET, 5, null));
		});

		this.propertyNode.props_join.node.on(Node.EventType.TOUCH_END, () => {
			const headType = initHeadType(this.random(config.gameOption.seatNumber));
			headType.has = true;
			headType.headUrl = "";
			headType.gold = 100000;
			headType.goldStr = '';
			headType.userId = Date.parse(new Date().toString()).toString();
			headType.level = this.random(3) + 1;
			headType.name = '大佬';
			headType.winloss = 0;
			this.dispatch(joinGame(headType));
		});
		this.propertyNode.props_other_join.node.on(Node.EventType.TOUCH_END, () => {
			this.otherIndex = this.random(config.gameOption.seatNumber);

			const headType = initHeadType(this.otherIndex);
			headType.has = true;
			headType.headUrl = "";
			headType.gold = 100000;
			headType.goldStr = '';
			headType.userId = Date.parse(new Date().toString()).toString();
			headType.level = 3;
			headType.name = "外专局还是-" + this.otherIndex
			headType.winloss = 0;

			this.dispatch(otherJoinGame(headType));
		});

		this.propertyNode.props_quit_game.node.on(Node.EventType.TOUCH_END, () => {
			this.quitGame();
		});
	}

	private t: number = 0;
	private startCountdown(count: number) {
		if (this.t > 0) return;
		this.dispatch(countdown(count));
		this.t = window.setInterval(() => {
			this.dispatch(countdown(--count));
			if (count <= 0) {
				window.clearInterval(this.t);
				this.t = 0;

				const result: Result = {
					time: Date.parse(new Date().toString()),
					betTypes: [
						this.randomBetType(),
						this.randomBetType(),
						this.randomBetType(),
						// BetType.CHOOK,
						// BetType.CHOOK,
						// BetType.CHOOK,
					]
				}

				this.dispatch(changeGameStatus(GameStatus.STOP_BET, 0, result));

				window.setTimeout(() => {
					this.dispatch(changeGameStatus(GameStatus.BET, count, result));
				}, 13000);
			}
		}, 1000)
	}

	private bet(): void {
		if (this.props.gameStatus !== GameStatus.BET) {
			return;
		}
		let isMyBet = false;
		let index = Math.floor(Math.random() * config.gameOption.seatNumber + 1);
		// index = this.otherIndex;
		let chipIndex = Math.floor(Math.random() * config.chipTypes.length);

		const betData = initBetData(index, "1", this.randomBetType(), config.chipTypes[chipIndex].value)
		betData.isMyBet = isMyBet;
		this.dispatch(seatBet(betData));
		this.dispatch(changeSeatBet(betData));
	}

	private randomBetType(): BetType {
		return this.random(6) + 1;
	}

	private quitGame() {
		// let index = Math.floor(Math.random() * config.gameOption.seatNumber);

		this.dispatch(quitGame(this.props.seats[this.otherIndex].userId));

	}

	private random(max: number) {
		return Math.floor(Math.random() * max)
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === 'gameStatus') {
			if (value.cur === GameStatus.BET) {
				this.startCountdown(5);
			}
		}
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

