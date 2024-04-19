import { Animation, Button, Label, Node, Sprite, _decorator, log } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import Throttler from '../../utils/Throttler';
import { ApiUrl } from '../apiUrl';
import { global, sourceManageSeletor } from '../index';
import { InitStateType } from '../store/actions/memberInfo';
import { SpriteFramePathDefine } from '../sourceDefine/spriteDefine';
const { ccclass, property } = _decorator;

export type SignInDataType = {
	/**金币 */
	gold: number,
	/**签到时间 周一到周天 */
	day: number,
	/**签到状态 0:未签到  1:已签到 2: 已过期 */
	status: number,
	/**是否可以点击 (0:否 ,1:是) */
	tap: number,
	vip: number,
	vipGold: number,
}

export const enum WeekType {
	MONDAY = 'monday',
	TUESDAY = 'tuesday',
	WEDNESDAY = 'wednesday',
	THURSDAY = 'thursday',
	FRIDAY = 'friday',
	SATURDAY = 'saturday',
	SUNDAY = 'sunday',
	ULTIMATE = 'ultimate',
}

export interface IState {
	/**当前签到类型 */
	weekType: WeekType,
}

export interface IProps {
	memberInfo?: InitStateType,
	signInDatas?: SignInDataType[],
	/**签到成功 */
	signSuccess?: boolean,
}
export interface IEvent {
	requestGetSignInList: () => void,
	requestSign: (weekType: WeekType) => void,
	close: () => void,
	onChangeGold: (value: number) => void,
}

@ccclass('Hall_SignIn')
export class Hall_SignIn extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		props_btn_close: new Button(),
		props_btn_menerima: new Button(),
		props_btn_unMenerima: new Node(),
		props_spr_signIn_vipbg: new Node(),
		props_vip_num: new Label(),
		props_vip_level: new Sprite(),
	}

	public props: IProps = {
		memberInfo: null,
		signInDatas: [],
		signSuccess: false,
	}

	public events: IEvent = {
		requestGetSignInList: () => { },
		requestSign: (weekType: WeekType) => { },
		close: () => { },
		onChangeGold: (value: number) => { },
	}

	protected initState() {
		return {
			weekType: null
		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_close.node.on(Node.EventType.TOUCH_END, () => {
			this.events.close();
		});
		this.propertyNode.props_spr_signIn_vipbg.on(Node.EventType.TOUCH_END, () => {
			this.events.close();
			global.openVipMain();
		});
		this.propertyNode.props_btn_menerima.node.on(Node.EventType.TOUCH_END, () => {
			const weekType = this.getSignInWeekType();
			// 签到防抖
			Throttler.isDebouncerAsync(ApiUrl.SIGN_IN + weekType, 500, true, () => {
			}).then(isPass => {
				this.setState({ weekType });
				this.events.requestSign(this.state.weekType);
				this.updateSignStatus(false);
			})
		});
	}

	/**
	 * 更新签到状态
	 * @param active 
	 */
	private updateSignStatus(active: boolean) {
		this.propertyNode.props_btn_menerima.node.active = active;
		this.propertyNode.props_btn_unMenerima.active = !active;
	}

	/**
	 * 
	 * @param weekType 星期类型
	 * @param type 0：待签到，1：已签到 2：已过期
	 * @param gold 显示的金币
	 */
	private updatePositionStatus(signInDataType: SignInDataType) {
		const weekType = this.getWeekType(signInDataType.day);
		const type = signInDataType.status;
		const gold = signInDataType.gold;

		const signNode = this.getSignInNode(weekType);
		signNode.active = true;
		const goldNode = signNode.getChildByName("label_gold");
		const unclaimedNode = signNode.getChildByName("spr_unclaimed");
		const alreadyNode = signNode.getChildByName("spr_already");
		goldNode.active = false;
		unclaimedNode.active = false;
		alreadyNode.active = false;

		if (type === 0) {
			goldNode.active = true;
			goldNode.getComponent(Label).string = gold.formatAmountWithLetter();
		} else if (type === 1) {
			signNode.getChildByName('qiandao_dailingqu').active = false;
			signNode.getChildByName('spr_gold').getComponent(Sprite).grayscale = true;
			alreadyNode.active = true;
		} else if (type === 2) {
			signNode.getChildByName('qiandao_dailingqu').active = false;
			signNode.getChildByName('spr_gold').getComponent(Sprite).grayscale = true;
			unclaimedNode.active = true;
		} else {
			goldNode.active = true;
			goldNode.getComponent(Label).string = gold.formatAmountWithLetter();
		}
	}

	private getSignInNode(nodename: WeekType) {
		return this.node.getChildByName("Layout_" + nodename);
	}

	/**播放签到动画 */
	private playSignInAnimaton(weekType: WeekType) {
		if (!weekType) return;
		const signNode = this.getSignInNode(weekType);
		signNode.getComponent(Animation).play();
		signNode.setSiblingIndex(99);

		const signInData = this.props.signInDatas.find(v => v.day === this.getDay(weekType));
		let gold = signInData ? signInData.gold : 0;

		if (this.props.memberInfo.vipLevel >= signInData.vip) {
			gold += signInData.vipGold;
		}

		// 动画播放完成之后关闭窗口，星期天播放之后不马上关闭
		if (WeekType.SUNDAY !== weekType) {
			signNode.getComponent(Animation).on(Animation.EventType.FINISHED, () => {
				this.events.onChangeGold(gold);
				this.events.close();
			});
		} else {
			this.events.onChangeGold(gold);
		}
	}

	private getWeekType(day: number) {
		if (day === 1) {
			return WeekType.MONDAY;
		} else if (day === 2) {
			return WeekType.TUESDAY;
		} else if (day === 3) {
			return WeekType.WEDNESDAY;
		} else if (day === 4) {
			return WeekType.THURSDAY;
		} else if (day === 5) {
			return WeekType.FRIDAY;
		} else if (day === 6) {
			return WeekType.SATURDAY;
		} else if (day === 7) {
			return WeekType.SUNDAY;
		} else if (day === 8) {
			return WeekType.ULTIMATE;
		}
	}

	private getDay(weekType: WeekType) {
		if (WeekType.MONDAY === weekType) {
			return 1;
		} else if (WeekType.TUESDAY === weekType) {
			return 2;
		} else if (WeekType.WEDNESDAY === weekType) {
			return 3;
		} else if (WeekType.THURSDAY === weekType) {
			return 4;
		} else if (WeekType.FRIDAY === weekType) {
			return 5;
		} else if (WeekType.SATURDAY === weekType) {
			return 6;
		} else if (WeekType.SUNDAY === weekType) {
			return 7;
		} else if (WeekType.ULTIMATE === weekType) {
			return 8;
		}
	}

	/**是否星期天签到 */
	private isSignSunday() {
		return this.props.signInDatas.find(v => v.day === this.getDay(WeekType.SUNDAY));
	}

	private init(datas: SignInDataType[]) {
		// 可以签到的某一天
		const signDay = datas.find(v => v.tap === 1);
		datas.forEach(v => {
			this.updatePositionStatus(v);
		})
		if (signDay) {
			// 如果是第8天，表示已经连续签到第7天，直接请求最后一次签到
			if (signDay.day === this.getDay(WeekType.ULTIMATE)) {
				this.events.requestSign(WeekType.ULTIMATE);
				return;
			}

			this.updateSignStatus(true);
			this.updateChangeVip(signDay.vip);
			this.propertyNode.props_vip_num.string = '+' + signDay.vipGold.formatAmountWithLetter();
		} else {
			this.updateSignStatus(false);
			// 初始化没有可签到的选项时，同时上一次又是签到的星期天，就直接关闭窗口
			// 出现这种情况就是签到了星期天，但是没有连续签到7天
			if (this.state.weekType === WeekType.SUNDAY) {
				this.scheduleOnce(() => {
					this.events.close();
				}, 0.5);
			}
			const lastSignDay = [...datas].reverse().find(v => v.status === 1)
			this.updateChangeVip(lastSignDay.vip);
			this.propertyNode.props_vip_num.string = '+' + lastSignDay.vipGold.formatAmountWithLetter();
		}
	}

	private getSignInWeekType() {
		const signDay = this.props.signInDatas.find(v => v.tap === 1);
		return signDay && this.getWeekType(signDay.day);
	}

	protected useProps(key: keyof IProps, value: { pre: Partial<IState>, cur: Partial<IState> }) {
		log("signin use props", key, value);
		if (key === 'signInDatas') {
			const newData = value.cur as SignInDataType[];
			if (newData.length > 0) {
				this.init(newData);
			}
		} else if (key === 'signSuccess' && value.cur) {
			const signType = this.getSignInWeekType();
			this.playSignInAnimaton(signType);

			// 星期天签到之后再请求一次，看能不能完成连续签到
			if (WeekType.SUNDAY === signType) {
				this.events.requestGetSignInList();
			}
		}
	}

	private updateChangeVip(vipLevel: number) {
		vipLevel = vipLevel ? vipLevel : 0;
		this.propertyNode.props_vip_level.spriteFrame = sourceManageSeletor('common').getFile(`resource/vip/b_VIP${vipLevel}/spriteFrame`).source;
	}

	protected bindUI(): void {
		this.updateSignStatus(false);
		this.node.children.filter(v => v.name.startsWith("Layout_")).forEach(v => v.active = false);
	}

	update(deltaTime: number) { }
}

