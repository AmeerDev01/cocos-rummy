import { Label, Node, Sprite, _decorator, log, sp } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import { global } from '../index';
import Throttler from '../../utils/Throttler';
import { ApiUrl } from '../apiUrl';
import { omitStr } from '../../utils/tool';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
	avatarIndex?: number,
	memberId?: string,
	nickName?: string,
	actingId?: string,
}
export interface IEvent {
	batalActing: (actingId: string) => void,
	close: () => void,
}

@ccclass('Hall_ShareSure')
export class Hall_ShareSure extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_btn_set_batal: new Node(),
		props_btn_tentu: new Node(),
		props_Label_pemain: new Label(),
		props_Label_id: new Label(),
		props_spr_head: new Sprite(),
	}

	public props: IProps = {
		avatarIndex: -1,
		memberId: '',
		nickName: '',
		actingId: '',
	}

	public events: IEvent = {
		batalActing: (actingId: string) => { },
		close: () => { },
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_set_batal.on(Node.EventType.TOUCH_END, () => {
			this.events.close();
		});
		this.propertyNode.props_btn_tentu.on(Node.EventType.TOUCH_END, () => {
			Throttler.isDebouncerAsync(ApiUrl.RECOMMEND_BIND, 500, true, () => {
			}).then(isPass => {
				this.events.batalActing(this.props.actingId);
			})
		});
	}

	protected bindUI(): void {
	}

	protected useProps(key: keyof IProps, value: { pre: any; cur: any; }): void {
		log("usr === ", key, value);
		if (key === 'avatarIndex') {
			global.loadHeadSprite(value.cur, this.propertyNode.props_spr_head);
		} else if (key === 'memberId') {
			this.propertyNode.props_Label_id.string = value.cur;
		} else if (key === 'nickName') {
			this.propertyNode.props_Label_pemain.string = omitStr(value.cur, 14);
		}
	}

	update(deltaTime: number) {

	}
}

