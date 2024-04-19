import { Button, Label, Node, ProgressBar, ScrollView, Sprite, SpriteFrame, Toggle, UITransform, Vec3, _decorator, instantiate, log, sp, tween } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import { config, vipMap } from '../config';
import { getNodeByNameDeep } from '../../utils/tool';
import { global, sourceManageSeletor } from '../index';
import { SpriteFramePathDefine } from '../sourceDefine/spriteDefine';
import { InitStateType } from '../store/actions/memberInfo';
const { ccclass, property } = _decorator;

export interface IState {
}

export interface IProps {
	memberInfo: InitStateType
}
export interface IEvent {
	close: () => void
}

@ccclass('Hall_VipMain')
export class Hall_VipMain extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	private locateInitPosition: Vec3;
	protected propertyNode = {
		props_btn_vip_close: new Button(),
		props_diamond_icon: new Node(),
		props_me_vip_level_label: new Node(),
		props_btn_topup: new Button(),
		props_remind_next_level_gold: new Node(),
		props_remind_vip: new Node(),
		props_pro_levelbar: new Node(),
		props_node_locate: new Node(),
		props_togglegroup_vip: new Node(),
		props_vip_toggle_item: new Node(),
		props_remindtext_next_label_gold: new Node(),
		props_remindtext_vip: new Node(),
		props_ScrollView_vip: new Node(),
		props_btn_aktifkan: new Button(),
	}

	public props: IProps = {
		memberInfo: null,
	}

	public events: IEvent = {
		close: () => { }
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_vip_close.node.on(Node.EventType.TOUCH_END, () => {
			this.events.close();
		});
		this.propertyNode.props_btn_topup.node.on(Node.EventType.TOUCH_END, () => {
			global.openShop();
			// test代码
			// const info = instantiate(this.props);
			// info.memberInfo.vipLevel = 4;
			// info.memberInfo.vipLevelExperience = 1000;
			// this.setProps(info);
		});
		this.propertyNode.props_btn_aktifkan.node.on(Node.EventType.TOUCH_END, () => {
			global.openShop();
		});
	}

	protected bindUI(): void {
		this.locateInitPosition = new Vec3(this.propertyNode.props_node_locate.position.x, this.propertyNode.props_node_locate.position.y);
	}

	protected useProps(key: keyof IProps, value: { pre: any; cur: any; }): void {
		if (key === 'memberInfo') {
			// test代码
			// this.props.memberInfo.vipLevelExperience = 2500000;
			// this.props.memberInfo.vipLevel = 13;

			this.initVipToggle();
			this.updateDiamondIcon(this.props.memberInfo.vipLevel);
			this.updateRemindInfo();
			this.updateLevelBar();
			this.updateBarLevelLabel(this.props.memberInfo.vipLevel);
		}
	}

	private initVipToggle() {
		const maxVipLevel = vipMap.length;
		let userVipLevel = this.props.memberInfo.vipLevel;
		if (this.props.memberInfo.vipLevel >= maxVipLevel) {
			userVipLevel = 0;
		}

		this.propertyNode.props_togglegroup_vip.removeAllChildren();
		vipMap.forEach(v => {
			const vipLevel = v[0];
			const vipToggleItem = instantiate(this.propertyNode.props_vip_toggle_item);
			getNodeByNameDeep("label_vip_unchecked", vipToggleItem).getComponent(Label).string = "VIP" + vipLevel;
			getNodeByNameDeep("label_vip_checked", vipToggleItem).getComponent(Label).string = "VIP" + vipLevel;
			this.propertyNode.props_togglegroup_vip.addChild(vipToggleItem);
			const isChecked = vipLevel === userVipLevel + 1;
			// 默认显示为下一个等级
			vipToggleItem.getComponent(Toggle).isChecked = isChecked;

			// isChecked && this.updateRemindtextInfo(v);
			if (isChecked) {
				this.updateRemindtextInfo(v);
				if (userVipLevel > 10) {
					this.propertyNode.props_ScrollView_vip.getComponent(ScrollView).scrollToRight();
				}
			}

			vipToggleItem.on(Node.EventType.TOUCH_END, () => {
				this.updateRemindtextInfo(v);
			});
		})
	}

	/**更新等级进度条 */
	private updateLevelBar() {
		const maxVipLevel = vipMap.length;
		const userTotalRechange = this.getUserTotalRechange();
		const vipLevel = this.props.memberInfo.vipLevel;

		const vipLevelExperience = this.props.memberInfo.vipLevelExperience

		// 当前经验值 / 下一个等级需要的经验值 得到当前等级到下一个等级的一个百分比
		// const percent = vipLevel < maxVipLevel ? this.props.memberInfo.vipLevelExperience / vipMap.find(v => v[0] === vipLevel + 1)[1] / 10 : 0;
		// const barValue = vipLevel / maxVipLevel + percent;
		const percent = vipLevel < maxVipLevel ? vipLevelExperience / vipMap.find(v => v[0] === vipLevel + 1)[1] * 0.5 : 0;
		const barValue = vipLevel < maxVipLevel ? (vipLevel === 0 ? 0 : 0.5) + percent : 1;

		const locateNode = this.propertyNode.props_node_locate;
		const locateInitPosition = this.locateInitPosition;
		const bar = this.propertyNode.props_pro_levelbar.getComponent(ProgressBar);
		locateNode.getChildByName("label_suffer").getComponent(Label).string = userTotalRechange.formatAmountWithCommas();

		tween(bar).to(0.5, { progress: barValue > 1 ? 1 : barValue }, {
			onUpdate: () => {
				const barWidth = bar.barSprite.getComponent(UITransform).width;
				locateNode.setPosition(new Vec3(locateInitPosition.x + barWidth,
					locateInitPosition.y));
			}
		}).start();
	}

	private updateBarLevelLabel(vipLevel: number) {
		let levels = [];
		if (vipLevel === 0) {
			levels = [0, 1, 2]
		} else if (vipLevel >= vipMap.length) {
			levels = [vipLevel - 2, vipLevel - 1, vipLevel]
		} else {
			levels = [vipLevel - 1, vipLevel, vipLevel + 1]
		}

		this.propertyNode.props_pro_levelbar.children.filter(v => v.name.startsWith("spr_level_")).forEach((v, i) => {
			v.getChildByName("Label_level_vip").getComponent(Label).string = levels[i] + "";
		})
	}

	/**更新钻石图标 */
	private async updateDiamondIcon(vipLevel: number) {
		let iconFile = "";
		if (vipLevel >= 12) {
			iconFile = SpriteFramePathDefine._DIAMOND_ICON_5;
		} else if (vipLevel >= 9) {
			iconFile = SpriteFramePathDefine._DIAMOND_ICON_4;
		} else if (vipLevel >= 6) {
			iconFile = SpriteFramePathDefine._DIAMOND_ICON_3;
		} else if (vipLevel >= 3) {
			iconFile = SpriteFramePathDefine._DIAMOND_ICON_2;
		} else {
			iconFile = SpriteFramePathDefine._DIAMOND_ICON_1;
		}

		this.propertyNode.props_diamond_icon.getComponent(Sprite).spriteFrame = (await sourceManageSeletor().getFileAsync(iconFile, SpriteFrame)).source;
		this.propertyNode.props_me_vip_level_label.getComponent(Label).string = vipLevel + "";
	}

	/**更新top的等级文字描述 */
	private updateRemindInfo() {
		const maxVipLevel = vipMap.length;
		let nextLevel = this.props.memberInfo.vipLevel + 1;
		if (nextLevel >= maxVipLevel) {
			this.propertyNode.props_remind_next_level_gold.getComponent(Label).string = '0';
			this.propertyNode.props_remind_vip.getComponent(Label).string = "VIP" + maxVipLevel;
			return;
		}
		const vipInfo = vipMap.find(v => v[0] === nextLevel);
		const experience = vipInfo[1] - this.props.memberInfo.vipLevelExperience;
		this.propertyNode.props_remind_next_level_gold.getComponent(Label).string = experience.formatAmountWithCommas();
		this.propertyNode.props_remind_vip.getComponent(Label).string = "VIP" + nextLevel;
	}

	/**更新bottom的等级文字描述 */
	private updateRemindtextInfo(vipInfo: number[]) {
		const vipLevel = vipInfo[0];

		if (vipLevel <= this.props.memberInfo.vipLevel) {
			this.propertyNode.props_remindtext_next_label_gold.getComponent(Label).string = "0";
		} else {
			this.propertyNode.props_remindtext_next_label_gold.getComponent(Label).string =
				(this.getTotalRechange(vipLevel) - this.getUserTotalRechange()).formatAmountWithCommas();
		}
		this.propertyNode.props_remindtext_vip.getComponent(Label).string = "VIP" + vipLevel;
	}

	/**获得用户累计充值 */
	private getUserTotalRechange() {
		return this.getTotalRechange(this.props.memberInfo.vipLevel) + this.props.memberInfo.vipLevelExperience;
	}

	/**获得充值到vip10时需要总的充值金币 */
	private getTotalRechange(vipLevel: number = 99) {
		let sum = 0;
		vipMap.filter(v => v[0] <= vipLevel).forEach(v => sum += v[1]);
		return sum;
	}

	update(deltaTime: number) {

	}
}

