import { _decorator, Component, Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { GameType } from '../type';
import { setShowAuthLaunch } from '../store/actions/game';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {

}
export interface IEvent {
	/**子游戏值改变要执行的函数 */
	changeGameHandler: (lastGameType: GameType, currGameType: GameType) => void
}

@ccclass('phoenix_flyBg')
export class phoenix_flyBg extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {

				
	}

	public props: IProps = {

	}

	public events: IEvent = {
		changeGameHandler: (lastGameType: GameType, currGameType: GameType) => { }
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
	
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
	
	}

	protected bindUI(): void {
		
	}

    private mirrorImage() {
        const bl = Math.random() >= 0.5;
        this.node.getChildByName('caishenguochang').setScale(bl ? -1 : 1, 1)
    }

	update(deltaTime: number) {

	}
}

