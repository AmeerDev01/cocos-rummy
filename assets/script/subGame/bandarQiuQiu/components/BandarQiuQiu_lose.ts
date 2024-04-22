import { _decorator,Label,Node, Sprite, SpriteFrame } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { formatNumber, initToggle, omitStr } from '../../../utils/tool';
import { bundleCommon, bundleBanDarQiuQiu } from '../index';
import { HeadType, WinInfo } from '../type';
import { updateWinUsers } from './BandarQiuQiu_win';
const { ccclass, property } = _decorator;



export interface IState {
  
}

export interface IProps {
	myInfo: HeadType,
	// roomWinInfo:WinInfo[],
	
}
export interface IEvent {
	onClosePanel:()=>void
}


@ccclass('BandarQiuQiu_lose')
export class BandarQiuQiu_lose extends BaseComponent<IState, IProps, IEvent> {
	start() {
	 }

	protected propertyNode = {
      props_spr_win_bg:new Node(),
      props_label_lose_num:new Node(),

	}

	public props: IProps = {
		myInfo:null,
		// roomWinInfo:[],
		
	}

	public events: IEvent = {
		onClosePanel:()=>{}
	}

	protected initState() {
		return {
			
		}
	}

	protected bindEvent(): void {
	

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		
		if(key==="myInfo"){
			updateWinUsers(this.node)
			if(value.cur.winGold===0){
				this.propertyNode.props_label_lose_num.getComponent(Label).string=value.cur.winGold
			}else{
				let goldNum:string=Math.abs(value.cur.winGold).formatAmountWithCommas()
				this.propertyNode.props_label_lose_num.getComponent(Label).string="-"+goldNum
			}
			
			
		}			


	}

	public updateWinsAndLosses(myInfo){
		updateWinUsers(this.node)
		if(myInfo.winGold===0){
			this.propertyNode.props_label_lose_num.getComponent(Label).string=myInfo.winGold
		}else{
			let goldNum:string=Math.abs(myInfo.winGold).formatAmountWithCommas()
			this.propertyNode.props_label_lose_num.getComponent(Label).string="-"+goldNum
			
		}
	}


	toggleCallback(event: Event, customEventData: string) {

	}

	protected bindUI(): void {

				
	}

	update(deltaTime: number) {

	}
}

