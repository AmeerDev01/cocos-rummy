import { _decorator, Button, Component, instantiate, Label, Node, ToggleContainer } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import { fetcher, lang } from '../index';
import { ApiUrl } from '../apiUrl';
import { addToastAction } from '../store/actions/baseBoard';
import { initToggle } from '../../utils/tool';
const { ccclass, property } = _decorator;

export type DailyTaskType = {
	id: number,
	/**累记存款金额范围_下限 */
	amountDown: number,
	/**累记存款金额范围_上限 */
	amountUp: number,
	/**可以领取金额 */
	gold: number,
	/**进度 */
	schedule: number,
	/**是否可领取 */
	isReceive: boolean,
	/**是否已经领取 */
	isAlreadyReceive: boolean
}

export interface IState {

}

export interface IProps {

}
export interface IEvent {
	onCloseHandler: () => void
}

@ccclass('Hall_DailyTask')
export class Hall_DailyTask extends BaseComponent<IState, IProps, IEvent> {
	start() { }

	protected propertyNode = {
		props_ToggleGroup_task: new ToggleContainer,
		props_btn_guanbi: new Button(),
		props_ScrollView_topup: new Node(),
		props_right_topup: new Node(),
		props_ScrollView_login: new Node(),
		props_right_login: new Node(),
		props_ScrollView_game: new Node(),
		props_right_game: new Node(),
		props_ScrollView_share: new Node(),
		props_right_share: new Node(),
	}

	public props: IProps = {

	}

	public events: IEvent = {
		onCloseHandler: () => { }
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_guanbi.node.on(Node.EventType.TOUCH_END, () => {
			this.events.onCloseHandler()
		})
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {

	}

	protected bindUI(): void {
		initToggle(this.propertyNode.props_ToggleGroup_task.node, this.node, new Hall_DailyTask.EventHandler(), "Hall_DailyTask", "dailyTaskToggleCallback")
	}

	private getList(typeIndex: number = 0) {
		fetcher.send(ApiUrl.GET_DAILY_TASK_LIST, {}).then((rsp) => {
			if (typeIndex === 0) {
				const content = this.propertyNode.props_ScrollView_topup.getDeepChildByName('content')
				const templateNode = instantiate(this.propertyNode.props_right_topup)
				this.propertyNode.props_right_topup.active = false
				
			}
		}).catch(e => { })
	}

	private dailyTaskToggleCallback(event: Event, customEventData: string) {
		this.propertyNode.props_ScrollView_topup.active = false
		this.propertyNode.props_ScrollView_login.active = false
		this.propertyNode.props_ScrollView_game.active = false
		this.propertyNode.props_ScrollView_share.active = false
		switch (event.target["name"]) {
			case 'Toggle_topUp':
				this.propertyNode.props_ScrollView_topup.active = true
				this.getList(0)
				break;
			case 'Toggle_login':
				this.propertyNode.props_ScrollView_login.active = true
				break;
			case 'Toggle_game':
				this.propertyNode.props_ScrollView_game.active = true
				break;
			case 'Toggle_share':
				this.propertyNode.props_ScrollView_share.active = true
				break;
		}
	}

	update(deltaTime: number) {

	}
}

