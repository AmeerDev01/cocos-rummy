import { _decorator,Label,Node, Sprite, SpriteFrame } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { formatNumber, omitStr } from '../../../utils/tool';
import { bundleCommon, bundleBanDar } from '../index';
import { gameCacheData, HeadType,} from '../type';
const { ccclass, property } = _decorator;

export function updateWinUsers(node){
	let winChild = node.children.filter(v => v.name.startsWith('props_spr_user_bg'));
	winChild.forEach(v=>{
		v.active = false;
		v.getChildByName("Label_user_name").getComponent(Label).string = "";
		v.getChildByName("Label_user_gold").getComponent(Label).string = "";
		bundleBanDar.load(`img/head1/spriteFrame`, SpriteFrame, (err, sp) => {
			if (!err) {
				v.getChildByName(`spr_user_head`).getComponent(Sprite).spriteFrame = sp
			}
		})
	});
   gameCacheData.winList.forEach((item,index)=>{
	   winChild.forEach((v, i) => {
		if(index === i){
			let goldNum: string = item.gold.formatAmountWithLetter();
			v.active = true;
			v.getChildByName("Label_user_name").getComponent(Label).string = omitStr(item.memberName, 12);
			v.getChildByName("Label_user_gold").getComponent(Label).string = "+" + goldNum;
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
	myInfo: HeadType,
	// roomWinInfo:WinInfo[]
}
export interface IEvent {
	onClosePanel:()=>void
}


@ccclass('Bandar_win')
export class Bandar_win extends BaseComponent<IState, IProps, IEvent> {
	start() {
		
	 }

	protected propertyNode = {
		props_spr_win_bg:new Node(),
        props_label_win_num:new Node(),

	}

	public props: IProps = {
		myInfo:null
		// roomWinInfo:[]
	}

	public events: IEvent = {
		onClosePanel:()=>{}
	}

	protected initState() {
		return {
			
		}
	}

	protected bindEvent(): void {
	//    this.propertyNode.props_spr_win_bg.on(Node.EventType.TOUCH_END,()=>{
	// 	this.events.onClosePanel()
	// 	playBtnClick();
	//    })
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {

		if(key==="myInfo"){
			// updateWinUsers(this.node)
			// if(value.cur.winGold===0){
			// 	this.propertyNode.props_label_win_num.getComponent(Label).string=value.cur.winGold
			// }else{
			// 	this.propertyNode.props_label_win_num.getComponent(Label).string="+"+value.cur.winGold.formatAmountWithCommas()
			// }
			
		}	
	
			
	}

	public updateWinsAndLosses(myInfo){

		updateWinUsers(this.node)
			if(myInfo.winGold===0){
				this.propertyNode.props_label_win_num.getComponent(Label).string = myInfo.winGold + "";
			}else{
				this.propertyNode.props_label_win_num.getComponent(Label).string = "+" + myInfo.winGold.formatAmountWithCommas();
			}
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

