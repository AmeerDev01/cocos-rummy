import { _decorator, Component, log, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { GameType } from '../type';
import { setShowAuthLaunch } from '../store/actions/game';
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

@ccclass('Thor_GameBoard')
export class Thor_GameBoard extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_gameBoard: new Node(),
		props_wrap: new Node()
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

	update(deltaTime: number) {

	}
}
