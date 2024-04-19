import { _decorator,instantiate,Label,Node, Sprite, SpriteFrame, tween, Vec3, Animation, UIOpacity,bezier, Skeleton, sp, game, Game} from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { initToggle, omitStr } from '../../../utils/tool';
import { SKT_MAG_TYPE, sktMsgListener } from '../socketConnect';
import { sourceManageSeletor,bundleDragonTiger ,bundleCommon} from "../index";
import {getNodePositionInCanvas,getNodeByNameDeep} from '../../../utils/tool';
import {mainGameViewModel} from '../index';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import {MyInfo} from '../store/actions/userInfo';
import {formatNumber} from './DragonTiger_win';
import { MemberData, setRoomLeftInfosAction, setRoomRightInfosAction } from '../store/actions/history';
import { bundlePkgName } from '../sourceDefine';
import { playChip, playGetCoin } from '../index';
import { BetData, BetType, MemberInfoVo, gameCacheData } from '../type';
import { global } from '../../../hall';
import config from '../config';
import { GameType } from '../../../common/viewModel/GiftUserViewModel';
const { ccclass, property } = _decorator;

export interface SettlementGold{
	():MyInfo[]
}

export interface IState {
	goldData:object
}

export interface IProps {
	roomLeftInfoVos:MyInfo[],
    roomRightInfoVos:MyInfo[],
	memberId:string,
	memberData:MemberData,
	memberName: string,
	usersInfo: MemberInfoVo[];
	newBetData:BetData
	
}
export interface IEvent {
	giveGift: (value: number, memberId: string, num: number) => void
}
export function divideNumber(num: number): number[] {
	let result: number[] = [];
	if (num < 1000) {
	  return result;
	}
  
	while (num >= 1000) {
	  if (num >= 1000000) {
		result.push(1000000);
		num -= 1000000;
	  }else if (num >= 500000) {
		result.push(500000);
		num -= 500000;
	  }else if (num >= 100000) {
		result.push(100000);
		num -= 100000;
	  } else if (num >= 10000) {
		result.push(10000);
		num -= 10000;
	  } else if (num >= 5000) {
		result.push(5000);
		num -= 5000;
	  } else if (num >= 1000) {
		result.push(1000);
		num -= 1000;
	  }
	}
  
	return result;
}




@ccclass('DragonTiger_users')
export class DragonTiger_users extends BaseComponent<IState, IProps, IEvent> {
	private leftHeadNode:Node[]=[]
	private rightHeadNode:Node[]=[]
	private isIcon1:boolean=false;
	private isIcon2:boolean=false;
	private isIcon3:boolean=false;
	private isShowGame:boolean=true;
	start() {

	}

	protected propertyNode = {

		props_spr_icon:new Node(),
	}

	public props: IProps = {
		roomLeftInfoVos:[],
        roomRightInfoVos:[],
		memberId:"",
		memberData:{
			gold: 0,
			memberId: "",
			type:0,
			memberName:'',
		},
		memberName: "",
		usersInfo: null,
		newBetData:null,
		
	}

	public events: IEvent = {
		giveGift: (value: number, memberId: string, num: number) => {}
	}

	protected initState() {
		return {
		  goldData:{}
		}
	}

	protected bindEvent(): void {
		game.on(Game.EVENT_HIDE, () => {//用户切入后台
			this.isShowGame=false;
		 });
		game.on(Game.EVENT_SHOW, () => {
		   this.isShowGame=true
		})
		

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "newBetData") {
			// console.log("newBetData",value.cur);
			
			if(!value.cur){ return }
			this.playFlyChipWinAnimation(value.cur);
 
		}
		if (key === "usersInfo") {
			// console.log("usersInfo",value.cur);
			
			// window.setTimeout(() => {
				if(mainGameViewModel.isUnMount || !value.cur){ return }
				this.initUsers();
				
			   value.cur.forEach((item,index)=>{
				   this.initBSUsers(item,item.index)
			   })
		  //  },5000)
		   
		}
        if (key==="roomLeftInfoVos") {

			 
		}
		
		if(key==="roomRightInfoVos"){

			
		}
	
}



	/** 初始化榜上用户信息 */
	public initBSUsers(usersInfo:MemberInfoVo,number){
		if (!this.node) { return };
		let num = number + 1;
		const usersNode = this.node.children.find(item => item.name.startsWith("props_btn_users" + num));
		const userHead = this.node.children.find(item => item.name.startsWith("spr_user" + num));
		if (!usersNode || !userHead) { return }
		userHead.active = true;
		global.loadHeadSprite(usersInfo.icon,userHead.getComponent(Sprite));//加载头像
		getNodeByNameDeep("Label_gold",usersNode).getComponent(Label).string=usersInfo.gold.formatAmountWithLetter();
		getNodeByNameDeep("Label_name",usersNode).getComponent(Label).string=omitStr(usersInfo.memberName,12);
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
	

	/** 赢钱的动画 +1K */
	public playAddGold(betInfo, winGold:number){

		let num = betInfo.index + 1;
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


	/**获得星星 */
	private getStar(parentNode:Node, betType: BetType) {
		return this.propertyNode.props_spr_icon
	}





	/**飞星星抛物线动画 */
	public playWinRateTween(tweenNode: Node, endPos: Vec3, playTime: number, callBack: Function) {
		const startPos = tweenNode.position;
		const startAngle = tweenNode.eulerAngles;
		const fruitTween = tween(startPos);

		const x = (startPos.x + endPos.x) / 2;
		const y = (startPos.y + endPos.y) / 2;

		const mixY = y + y * 0.6;
		const maxY = y + y * 0.6;
		const mixX = x;
		const maxX = x;
		var progressX = function (start, end, current, t) {
			//@ts-ignore
			current = bezier(start, mixX, maxX, end, t);
			return current;
		}
		var progressY = function (start, end, current, t) {
			//@ts-ignore
			current = bezier(start, mixY, maxY, end, t);
			return current;
		}

		fruitTween.parallel(
			tween().to(playTime, { x: endPos.x }, {
				progress: progressX, onUpdate: () => {
					tweenNode.isValid && tweenNode.setPosition(startPos);
				}
			}),
			tween().to(playTime, { y: endPos.y }, {
				progress: progressY, onUpdate: () => {
					tweenNode.isValid && tweenNode.setPosition(startPos);
				}
			}),
		).start();
		tween(startAngle).to(playTime, { z: 360 }, {
			onUpdate: () => {
				if (tweenNode.isValid) {
					tweenNode.eulerAngles = startAngle;
				}
			}
		}).call(() => callBack()).start();
	}
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
			   bundleDragonTiger.load(`img/head1/spriteFrame`, SpriteFrame, (err, sp) => {
				   if (!err) {
					   userHead.getComponent(Sprite).spriteFrame = sp;
				   }
			   })
		   }
		   
	   }
	}

		/**
   * 根据下注拆分筹码
   * @param totalBetAmount 
   */
	public splitChip(totalBetAmount: number, chips: number[]) {
		if (totalBetAmount < config.chipTypes[0].value) {
			return;
		}
		for (let i = config.chipTypes.length - 2; i >= 0; i--) {
			const element = config.chipTypes[i];

			if (totalBetAmount >= element.value) {

			chips.push(element.value);
			totalBetAmount -= element.value;
			break;
			}
		}
		this.splitChip(totalBetAmount, chips);
	}

	protected bindUI(): void {
		this.initUsers();

		this.initHeadClick();
	}

	private initHeadClick(){
		this.node.children.filter(v=>v.name.startsWith("props_btn_users")).forEach(v=>{
			const userIndex = this.getHeadNodeIndex(v);
			v.on(Node.EventType.TOUCH_END, ()=>{
				const userInfo = this.props.usersInfo.find(v=>v.index === userIndex - 1);
				userInfo && userInfo.memberId !== gameCacheData.memberId && global.showGiftWindow(GameType.DRAGON_TIGER, {
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

