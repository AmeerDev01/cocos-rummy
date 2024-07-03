import { _decorator, Label, Sprite, SpriteFrame } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { formatNumber, getGoldShorten, getNodeByNameDeep, loadRemoteImage, omitStr } from '../../../utils/tool';
import config from '../config';
import { UserInfo } from '../type';
import { global } from '../../../hall';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	userInfos?: UserInfo[],
	balance?: number,
}
export interface IEvent {

}

@ccclass('Yxx_WinPanel')
export class Yxx_WinPanel extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_win_label: new Label(),
	}

	public props: IProps = {
		userInfos: null,
		balance: 0
	}

	public events: IEvent = {

	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {

	}

	private updateUserInfo(userInfo: UserInfo, index: number) {
		index++;
		const userNode = this.node.getChildByName("spr_user_bg" + index);
		userNode.active = true;
		getNodeByNameDeep("Label_user_name", userNode).getComponent(Label).string = omitStr(userInfo.name, config.gameOption.nicknameOmitLength);
		getNodeByNameDeep("Label_user_gold", userNode).getComponent(Label).string = "+" + getGoldShorten(userInfo.gold);

		global.loadHeadSprite(userInfo.icon, getNodeByNameDeep("spr_user_head", userNode).getComponent(Sprite));
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === 'userInfos') {
			this.props.userInfos.forEach((v, index) => {
				this.updateUserInfo(v, index);
			})

		} else if (key === 'balance') {
			this.propertyNode.props_win_label.string = "+" + formatNumber(value.cur);
		}
	}

	protected bindUI(): void {
		this.node.children.forEach(v => {
			if (v.name.startsWith("spr_user_bg")) {
				v.active = false;
			}
		})
	}

	protected onDestroy(): void {
		this.props.userInfos = null;
	}

	update(deltaTime: number) {

	}
}

