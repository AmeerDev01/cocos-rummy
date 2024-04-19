import { _decorator,Label,Node, Sprite, SpriteFrame } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { initToggle, omitStr } from '../../../utils/tool';
import { bundleCommon, bundleDragonTiger } from '../index';
import {formatNumber} from './DragonTiger_win';
import { WinInfo } from '../store/actions/history';
import { playBtnClick } from '../index';
import { gameCacheData } from '../type';
const { ccclass, property } = _decorator;

export function updateWinUsers(node){
	let winChild=node.children.filter(v=>v.name.startsWith('props_spr_user_bg'))
	winChild.forEach(v=>{
			v.active=false;
			v.getChildByName("Label_user_name").getComponent(Label).string="";
			v.getChildByName("Label_user_gold").getComponent(Label).string=""
			bundleDragonTiger.load(`img/head1/spriteFrame`, SpriteFrame, (err, sp) => {
				if (!err) {
					v.getChildByName(`spr_user_head`).getComponent(Sprite).spriteFrame = sp
				}
			})
	});
   gameCacheData.winList.forEach((item,index)=>{
	 winChild.forEach((v,i)=>{
		if(index===i){
			let goldNum: string = formatNumber(item.gold);
			v.active=true;
			v.getChildByName("Label_user_name").getComponent(Label).string=omitStr(item.memberName,12);
			v.getChildByName("Label_user_gold").getComponent(Label).string="+"+goldNum;
			bundleCommon.load(`resource/head/head_circle_${item.icon}/spriteFrame`, SpriteFrame, (err, sp) => {
				if (!err) {
					v.getChildByName(`spr_user_head`).getComponent(Sprite).spriteFrame = sp
				}
			})
		}
	 })
   })
}

export interface IState {
  
}

export interface IProps {
	winGold:number,
	roomWinInfo:WinInfo[],
	
}
export interface IEvent {
	onClosePanel:()=>void
}


@ccclass('DragonTiger_lose')
export class DragonTiger_lose extends BaseComponent<IState, IProps, IEvent> {
	start() {
	   
	 }

	protected propertyNode = {
      props_spr_win_bg:new Node(),
      props_label_lose_num:new Node(),
	  props_spr_user_bg1:new Node(),
	  props_spr_user_bg2:new Node(),
	  props_spr_user_bg3:new Node(),
	  props_spr_user_bg4:new Node(),
	}

	public props: IProps = {
		winGold:0,
		roomWinInfo:[],
		
	}

	public events: IEvent = {
		onClosePanel:()=>{}
	}

	protected initState() {
		return {
			
		}
	}

	protected bindEvent(): void {
	//   this.propertyNode.props_spr_win_bg.on(Node.EventType.TOUCH_END,()=>{
	// 	playBtnClick();
	// 	this.events.onClosePanel()
	//   })

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "winGold") {
			// console.log("winGold",value.cur);
			// console.log(Math.abs(value.cur));
			
			if(value.cur === 0){
				this.propertyNode.props_label_lose_num.getComponent(Label).string = value.cur + "";
			}else{
				let goldNum: string = Math.abs(value.cur).formatAmountWithCommas();
				this.propertyNode.props_label_lose_num.getComponent(Label).string = "-" + goldNum;
			}
			
		}
		if (key === "roomWinInfo") {
			updateWinUsers(this.node)
			// let headNode:Node[]=[this.propertyNode.props_spr_user_bg1,this.propertyNode.props_spr_user_bg2,this.propertyNode.props_spr_user_bg3,this.propertyNode.props_spr_user_bg4]	
			//     for(let i=0;i<headNode.length;i++){
			// 		headNode[i].active=false;
			// 		headNode[i].getChildByName("Label_user_name").getComponent(Label).string="";
			// 		headNode[i].getChildByName("Label_user_gold").getComponent(Label).string=""
			// 		bundleDragonTiger.load(`img/head1/spriteFrame`, SpriteFrame, (err, sp) => {
			// 			if (!err) {
			// 				headNode[i].getChildByName(`spr_user_head`).getComponent(Sprite).spriteFrame = sp
			// 			}
			// 		})
					
			// 	}

			// 	for(let i=0;i<value.cur.length;i++){
			// 		for(let j=0;j<headNode.length;j++){
			// 			if(i===j){
			// 				let goldNum:string=formatNumber(value.cur[i].gold)
			// 				headNode[j].active=true;
			// 				headNode[j].getChildByName("Label_user_name").getComponent(Label).string=omitStr(value.cur[i].memberName,20);
			// 				headNode[j].getChildByName("Label_user_gold").getComponent(Label).string="+"+goldNum;
			// 				bundleCommon.load(`resource/head/head_circle_${value.cur[i].icon}/spriteFrame`, SpriteFrame, (err, sp) => {
			// 					if (!err) {
			// 						headNode[j].getChildByName(`spr_user_head`).getComponent(Sprite).spriteFrame = sp
			// 					}
			// 				})
			// 			}
			// 	    }
			//     }
		
		}	


	}



	toggleCallback(event: Event, customEventData: string) {

	}

	protected bindUI(): void {

				
	}

	update(deltaTime: number) {

	}
}

