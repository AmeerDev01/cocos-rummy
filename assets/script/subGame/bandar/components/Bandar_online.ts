import { _decorator,Label,Node, sp, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { getNodePositionInCanvas, initToggle } from '../../../utils/tool';
import { BetData, gameCacheData } from '../type';
import { WinUser } from '../store/actions/bet';
import { footerViewModel } from '../viewModel/BandarGameBoardViewModel';
const { ccclass, property } = _decorator;



export interface IState {

}

export interface IProps {
	 /**在线人数 */
	 onlineNum: number,
	 allWinUsers:WinUser[],
}
export interface IEvent {
	
}


@ccclass('Bandar_online')
export class Bandar_online extends BaseComponent<IState, IProps, IEvent> {
	start() {
	
	 }

	protected propertyNode = {
		/** 在线人数图标 */
		props_btn_users: new Node(),
		/** 在线人数 */
		props_label_users_num: new Label(),
		/**赢 动画 */
		props_skeleton_win:new Node(),
	}

	public props: IProps = {
		onlineNum:null,
		allWinUsers:null
	}

	public events: IEvent = {
		
	}

	protected initState() {
		return {
			
		}
	}

	protected bindEvent(): void {
	

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
         if(key==="onlineNum"){
			this.propertyNode.props_label_users_num.string = value.cur + ""
		 }
		 if(key==="allWinUsers"){
			// console.log(value.cur);
			// if(!value.cur){
			// 	return
			// }
			
			// value.cur.forEach((item)=>{
			// 	if(item.index>6 && item.memberId!==gameCacheData.memberId){
			// 		console.log("allwinitemindex",item.index,item.memberId);
			// 		this.playWinAni()
			// 	}else if(item.memberId===gameCacheData.memberId){
			// 		console.log("allwinitemindex",item.index,item.memberId);
			// 		footerViewModel.comp.palyAddUp(item)
			// 	}
			// })
			
		 }
	}


	/** 播放其他玩家赢 动画 */
	public playWinAni(){
		// console.log("playWinAni");
		
		this.propertyNode.props_skeleton_win.active=true;
		this.propertyNode.props_skeleton_win.getComponent(sp.Skeleton).animation="animation";
	}

	toggleCallback(event: Event, customEventData: string) {

	}

	protected bindUI(): void {
		this.propertyNode.props_skeleton_win.active=false;
				
	}

	update(deltaTime: number) {

	}
}

