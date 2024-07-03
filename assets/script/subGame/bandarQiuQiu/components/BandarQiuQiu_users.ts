import { _decorator, Component, Label, Node, tween, Vec3, Animation, instantiate, Sprite, SpriteFrame } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { getNodeByNameDeep, getNodePositionInCanvas, omitStr } from '../../../utils/tool';
import { BetData, MemberInfoVo, gameCacheData } from '../type';
import config from '../config';
import { global } from '../../../hall';
import { bundleBanDarQiuQiu, mainGameViewModel } from '../index';
import { GameType } from '../../../common/viewModel/GiftUserViewModel';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	newBetData: BetData,
	usersInfo: MemberInfoVo[],
	
}
export interface IEvent {
	giveGift: (value: number, memberId: string, num: number) => void
}

@ccclass('BandarQiuQiu_users')
export class BandarQiuQiu_users extends BaseComponent<IState, IProps, IEvent> {
	start() {
	}

	protected propertyNode = {
		props_spr_icon:new Node(),
		props_skeleton:new Node(),
		props_skeleton_win1: new Node(),
	}

	public props: IProps = {
		usersInfo: null,
		newBetData:null,
	}

	public events: IEvent = {
		giveGift: (value: number, memberId: string, num: number) => {}
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if(key==="newBetData"){
			if (!value.cur) { return }
			// 下注筹码不存在，不处理
			if (!config.chipTypes.find(v => v.value === value.cur.betAmount)) {
				return;
			}
			this.playFlyChipWinAnimation(value.cur);
		}
		
		if(key==="usersInfo"){
			// window.setTimeout(() => {
				if(mainGameViewModel.isUnMount || !value.cur){ return }
				this.initUsers()
				value.cur.forEach((item,index)=>{
					this.initBSUsers(item,item.index)
				})
			// },5000)
		   
		}
	}

    /**
	 * 添加win动画效果
	 * @param seatNum 榜上座位号
	 */
    public copyWinAnimation(seatNum:number){
		//    console.log("copyWinAnimation");
		this.propertyNode.props_skeleton.removeAllChildren()
		let item = config.headLocations[seatNum]
		let winAnimation = instantiate(this.propertyNode.props_skeleton_win1);
		winAnimation.active = true;
		winAnimation.setPosition(item.x,item.y);

	    this.propertyNode.props_skeleton.addChild(winAnimation);
	}

	/** 初始化榜上用户信息 */
	public initBSUsers(usersInfo:MemberInfoVo,number){
		if (!this.node) { return };
		let num=number+1
        const usersNode=this.node.children.find( item => item.name.startsWith("props_btn_users"+num));
		const userHead = this.node.children.find(item => item.name.startsWith("spr_user" + num));
		userHead.active = true;
		global.loadHeadSprite(usersInfo.icon,userHead.getComponent(Sprite));//加载头像
		getNodeByNameDeep("Label_gold",usersNode).getComponent(Label).string=usersInfo.gold.formatAmountWithLetter();
		getNodeByNameDeep("Label_name",usersNode).getComponent(Label).string=omitStr(usersInfo.memberName,12);
	}
	
	// public createBSUsers(usersInfo) {
	// 	if(mainGameViewModel.isUnMount){ return }
	// 	usersInfo.forEach((item,index)=>{
	// 		this.initBSUsers(item,item.index)
	// 	})
	// }
	/**初始用户头像 */
	private initUsers() {
		for (let i = 0; i < 6; i++){
			if (this.node) {
			   let num=i+1
			   const usersNode=this.node.children.find( item => item.name.startsWith("props_btn_users"+num));
				const userHead = this.node.children.find(item => item.name.startsWith("spr_user" + num));
				userHead.active = false;
			   // global.loadHeadSprite(usersInfo.icon,userHead.getComponent(Sprite));//加载头像
			   getNodeByNameDeep("Label_gold",usersNode).getComponent(Label).string="";
			   getNodeByNameDeep("Label_name",usersNode).getComponent(Label).string="";
			   bundleBanDarQiuQiu.load(`img/head1/spriteFrame`, SpriteFrame, (err, sp) => {
				   if (!err) {
					   userHead.getComponent(Sprite).spriteFrame = sp;
				   }
			   })
		   }
		   
	   }
	}

	/** 赢钱的动画 +1K */
	public playAddGold(betInfo, winGold:number){

		let num = betInfo.index+1
		const usersNode = this.node.children.find( u => u.name.startsWith("props_btn_users"+num) )
		const node = getNodeByNameDeep("Label_gold_up", usersNode);
		node.getComponent(Label).string="+" + betInfo.gold.formatAmountWithLetter()
		if(winGold <= 0) return;
		const startPosition = new Vec3(node.position.x, node.position.y);
		node.active = true;

		tween(node).by(1, { position: new Vec3(0, 30) }).call(() => {
			this.scheduleOnce(() => {
				node.active = false;
				node.setPosition(startPosition);
			}, 0.5);
		}).start();
    }

	/**飞金币的动画 */
	private playFlyChipWinAnimation(betInfo){

		if(betInfo.index > 6 || betInfo.memberId === gameCacheData.memberId){
			return
		}
		let num = betInfo.index+1;
		const usersNode = this.node.children.find( u => u.name.startsWith("props_btn_users"+num) );
		const users = this.node.children.find( u => u.name.startsWith("spr_user"+num) );
		usersNode.getComponent(Animation).play();
		users.getComponent(Animation).play();
	}
	
	

	protected bindUI(): void {
		this.initUsers()
		this.propertyNode.props_skeleton_win1.active = false;
		this.initHeadClick();
    }

	
	private initHeadClick(){
		this.node.children.filter(v=>v.name.startsWith("props_btn_users")).forEach(v=>{
			const userIndex = this.getHeadNodeIndex(v);
			v.on(Node.EventType.TOUCH_END, ()=>{
				const userInfo = this.props.usersInfo.find(v=>v.index === userIndex - 1);
				userInfo && userInfo.memberId !== gameCacheData.memberId && global.showGiftWindow(GameType.BANDAR_QIU_QIU, {
					memberId: userInfo.memberId,
					head: userInfo.icon,
					gold: userInfo.gold,
					name: userInfo.memberName,
				}, (value: number, memberId: string) => {
					this.events.giveGift(value, memberId, 0);
				})
			});
		})
	}

	private getHeadNodeIndex(userNode:Node){
		return parseInt(userNode.name.replace("props_btn_users", ""));
	}

	update(deltaTime: number) {

	}
}

