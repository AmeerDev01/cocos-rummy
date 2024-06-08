import { Button, Label, Node, ProgressBar, ScrollView, Sprite, SpriteFrame, Toggle, UITransform, Vec3, _decorator, instantiate, log, logID, sp, tween } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
import { config, vipMap } from '../config';
import { getNodeByNameDeep } from '../../utils/tool';
import { fetcher, global, sourceManageSeletor } from '../index';
import { SpriteFramePathDefine } from '../sourceDefine/spriteDefine';
import { InitStateType } from '../store/actions/memberInfo';
import { ISourceFile } from '../../base/SourceManage';
import { ApiUrl } from '../apiUrl';
import VipMainViewModel from '../viewModel/VipMainViewModel';
import { VipBonus, setLoadingAction, updateVipBonusInfo } from '../store/actions/baseBoard';
const { ccclass, property } = _decorator;


export interface IState {
}

export interface IProps {
	memberInfo: InitStateType,
	vipBonusInfo: VipBonus,
}
export interface IEvent {
	close: () => void
}

/**VIP图标路径 */
const VIP_ICON_PATH = 'vip/resource/img/icon_dt_xinxi_vip{0}/spriteFrame';

export const vipSpriteFileLoad = (bundlePkgName: string) => {
	const _arr: ISourceFile[] = []
	// 最大等级，包含VIP0，所以要多一个
	for (let i = 1; i <= vipMap.length + 1; i++) {
		_arr.push({
			bundlePkgName,
			path: VIP_ICON_PATH.format(i),
			sourceType: SpriteFrame,
			source: null,
			isPreLoad: true
		})
	}
	return _arr;
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


		props_spr_promotion:new Node(),
		props_spr_daily:new Node(),
		props_spr_weekly:new Node(),
		props_spr_monthly:new Node(),
	}

	public props: IProps = {
		memberInfo: null,
		vipBonusInfo: null,
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

	protected useProps(key: keyof IProps | '_setDone', value: { pre: any; cur: any; }): void {
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

		if (key === "vipBonusInfo") {
			if(!value.cur) return
			this.getUserVipGoldNd(this.propertyNode.props_spr_promotion).string = value.cur.myUpgradeBonus + '';
			this.getUserVipGoldNd(this.propertyNode.props_spr_daily).string = value.cur.myDayBonus + '';
			this.getUserVipGoldNd(this.propertyNode.props_spr_weekly).string = value.cur.myWeeklyBonus + '';
			this.getUserVipGoldNd(this.propertyNode.props_spr_monthly).string = value.cur.myMonthlyBonus + '';
			
			this.getOtherVipGoldNd(this.propertyNode.props_spr_promotion).string = value.cur.clickUpgradeBonus + '';
			this.getOtherVipGoldNd(this.propertyNode.props_spr_daily).string = value.cur.clickDayBonus + '';
			this.getOtherVipGoldNd(this.propertyNode.props_spr_weekly).string = value.cur.clickWeeklyBonus + '';
			this.getOtherVipGoldNd(this.propertyNode.props_spr_monthly).string = value.cur.clickMonthlyBonus + '';
			// this.dispatch(setLoadingAction({ isShow: false, flagId: 'vip' }))

		}
	}

	private initVipToggle() {
		const maxVipLevel = vipMap.length;
		let userVipLevel = this.props.memberInfo.vipLevel;
		if (this.props.memberInfo.vipLevel >= maxVipLevel) {
			userVipLevel = maxVipLevel;
		}

		this.propertyNode.props_togglegroup_vip.removeAllChildren();
		vipMap.forEach(v => {
			const vipLevel = v[0];
			const vipToggleItem = instantiate(this.propertyNode.props_vip_toggle_item);
			getNodeByNameDeep("label_vip_unchecked", vipToggleItem).getComponent(Label).string = "VIP" + vipLevel;
			getNodeByNameDeep("label_vip_checked", vipToggleItem).getComponent(Label).string = "VIP" + vipLevel;
			getNodeByNameDeep("label_achieve_vip", vipToggleItem).getComponent(Label).string = "VIP" + vipLevel;
			getNodeByNameDeep("spr_achieve_vip", vipToggleItem).active = vipLevel <= userVipLevel;
			this.propertyNode.props_togglegroup_vip.addChild(vipToggleItem);
			// 默认显示为下一个等级
			// const isChecked = vipLevel === userVipLevel + 1;
			//默认显示未当前等级
			const isChecked = vipLevel === userVipLevel 

			vipToggleItem.getComponent(Toggle).isChecked = isChecked;

			// isChecked && this.updateRemindtextInfo(v);
			if (isChecked) {
				this.updateRemindtextInfo(v);
				if (userVipLevel > 10) {
					this.propertyNode.props_ScrollView_vip.getComponent(ScrollView).scrollToRight();
				}
			} else {
				if (userVipLevel === 0) {
					this.updateRemindtextInfo(v);
				}
			}
			

			vipToggleItem.on(Node.EventType.TOUCH_END, () => {
				this.getVipBonus(vipLevel)
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
	} xx

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
		let iconFile = VIP_ICON_PATH.format(vipLevel + 1);

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
		let userVipLevel = this.props.memberInfo.vipLevel;
		this.getOtherVip(this.propertyNode.props_spr_promotion).string = vipLevel +'';
		this.getOtherVip(this.propertyNode.props_spr_daily).string = vipLevel +'';
		this.getOtherVip(this.propertyNode.props_spr_weekly).string = vipLevel +'';
		this.getOtherVip(this.propertyNode.props_spr_monthly).string = vipLevel +'';
        
		this.getUserVip(this.propertyNode.props_spr_promotion).string = "VIP" + userVipLevel;
		this.getUserVip(this.propertyNode.props_spr_daily).string = "VIP" + userVipLevel;
		this.getUserVip(this.propertyNode.props_spr_weekly).string = "VIP" + userVipLevel;
		this.getUserVip(this.propertyNode.props_spr_monthly).string = "VIP" + userVipLevel;

		
		if (vipLevel <= userVipLevel) {
			this.propertyNode.props_remindtext_next_label_gold.getComponent(Label).string = "0";
			
			if (vipLevel < userVipLevel) {
				//升级奖
				this.getAvailableNode(this.propertyNode.props_spr_promotion).active = false;
				// this.getReceivedNode(this.propertyNode.props_spr_promotion).active = true;
				this.getLockNode(this.propertyNode.props_spr_promotion).active = true; 
				this.getLockNode(this.propertyNode.props_spr_promotion).getChildByName("spr_vip_lock").active = false;

				//每日
				this.getAvailableNode(this.propertyNode.props_spr_daily).active = false;
				// this.getReceivedNode(this.propertyNode.props_spr_daily).active = false;
				this.getLockNode(this.propertyNode.props_spr_daily).active = true;
				this.getLockNode(this.propertyNode.props_spr_daily).getChildByName("spr_vip_lock").active = false;
				//每周
				this.getAvailableNode(this.propertyNode.props_spr_weekly).active = false;
				// this.getReceivedNode(this.propertyNode.props_spr_weekly).active = false;
				this.getLockNode(this.propertyNode.props_spr_weekly).active = true;
				this.getLockNode(this.propertyNode.props_spr_weekly).getChildByName("spr_vip_lock").active = false;

				//每月
				this.getAvailableNode(this.propertyNode.props_spr_monthly).active = false;
				// this.getReceivedNode(this.propertyNode.props_spr_monthly).active = false;
				this.getLockNode(this.propertyNode.props_spr_monthly).active = true;
				this.getLockNode(this.propertyNode.props_spr_monthly).getChildByName("spr_vip_lock").active = false;

			} else if (vipLevel === userVipLevel) {
				//升级奖
				this.getAvailableNode(this.propertyNode.props_spr_promotion).active = true;
				// this.getReceivedNode(this.propertyNode.props_spr_promotion).active = true;
				this.getLockNode(this.propertyNode.props_spr_promotion).active = false; 
				//每日
				this.getAvailableNode(this.propertyNode.props_spr_daily).active = true;
				// this.getReceivedNode(this.propertyNode.props_spr_daily).active = false;
				this.getLockNode(this.propertyNode.props_spr_daily).active = false;
				//每周
				this.getAvailableNode(this.propertyNode.props_spr_weekly).active = true;
				// this.getReceivedNode(this.propertyNode.props_spr_weekly).active = false;
				this.getLockNode(this.propertyNode.props_spr_weekly).active = false;
				//每月
				this.getAvailableNode(this.propertyNode.props_spr_monthly).active = true;
				// this.getReceivedNode(this.propertyNode.props_spr_monthly).active = false;
				this.getLockNode(this.propertyNode.props_spr_monthly).active = false;
			}

		} else {
			this.propertyNode.props_remindtext_next_label_gold.getComponent(Label).string =
				(this.getTotalRechange(vipLevel) - this.getUserTotalRechange()).formatAmountWithCommas();
			
			//升级奖
			this.getAvailableNode(this.propertyNode.props_spr_promotion).active = false;
			this.getReceivedNode(this.propertyNode.props_spr_promotion).active = false;
			this.getLockNode(this.propertyNode.props_spr_promotion).active = true;
			this.getLockNode(this.propertyNode.props_spr_promotion).getChildByName("spr_vip_lock").active = true;
			//每日
			this.getAvailableNode(this.propertyNode.props_spr_daily).active = false;
			this.getReceivedNode(this.propertyNode.props_spr_daily).active = false;
			this.getLockNode(this.propertyNode.props_spr_daily).active = true;
			this.getLockNode(this.propertyNode.props_spr_daily).getChildByName("spr_vip_lock").active = true;
			//每周
			this.getAvailableNode(this.propertyNode.props_spr_weekly).active = false;
			this.getReceivedNode(this.propertyNode.props_spr_weekly).active = false;
			this.getLockNode(this.propertyNode.props_spr_weekly).active = true;
			this.getLockNode(this.propertyNode.props_spr_weekly).getChildByName("spr_vip_lock").active = true;
			//每月
			this.getAvailableNode(this.propertyNode.props_spr_monthly).active = false;
			this.getReceivedNode(this.propertyNode.props_spr_monthly).active = false;
			this.getLockNode(this.propertyNode.props_spr_monthly).active = true;
			this.getLockNode(this.propertyNode.props_spr_monthly).getChildByName("spr_vip_lock").active = true;
		}
		this.propertyNode.props_remindtext_vip.getComponent(Label).string = "VIP" + vipLevel;
	}

	/**获取福利未领取状态节点 */
	private getAvailableNode(parentNode:Node) {
		return parentNode.getChildByName("spr_available")
	}
	/**获取福利已领取状态节点 */
	private getReceivedNode(parentNode:Node) {
		return parentNode.getChildByName("spr_received")
	}
	/**获取福利锁住状态节点 */
	private getLockNode(parentNode:Node) {
		return parentNode.getChildByName("spr_locked")
	}
	/**福利 获取当前用户vip等级的节点 */
	private getUserVip(parentNode:Node) {
		return getNodeByNameDeep("label_vip", parentNode).getComponent(Label)
	}
	/**福利 获取其他vip等级的节点 */
	private getOtherVip(parentNode:Node) {
		return getNodeByNameDeep("spr_label_vip", parentNode).getComponent(Label)
	}
	/**获取当前用户vip等级 金币福利值节点 */
	private getUserVipGoldNd(parentNode:Node) {
		return getNodeByNameDeep("spr_label_gold", parentNode).getComponent(Label)
	}
	/**获取其他vip等级 金币福利值节点 */
	private getOtherVipGoldNd(parentNode:Node) {
		return getNodeByNameDeep("label_gold", parentNode).getComponent(Label)
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
	/**获取当前点击vip等级的金币福利 */
	private getVipBonus(vipLevel) {
		this.dispatch(updateVipBonusInfo(null))
		fetcher.send(ApiUrl.GET_VIP_BONUS, { vipLevel: vipLevel }).then(async (rsp) => {
			this.dispatch(setLoadingAction({ isShow: false, flagId: 'vip' }))
			this.dispatch(updateVipBonusInfo(rsp))
		}).catch((e) => {
		  console.log(e)
		})
	  }

	update(deltaTime: number) {

	}
}

