import { _decorator,Game,game,instantiate,Label,Node, sp, Sprite, SpriteFrame, tween, UITransform, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { formatNumber, getNodeByNameDeep, getNodePositionInCanvas, initToggle } from '../../../utils/tool';
import { SpriteFramePathDefine } from '../sourceDefine/spriteDefine';
import { mainGameViewModel, playTurnCard, sourceManageSelector } from '../index';
import prefabDefine, { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { CardNum, Poker } from '../store/actions/pokerDetail';
import { BetType, gameCacheData, GameStatus } from '../type';
import TaskScheduler, { Task } from '../../../utils/TaskScheduler';
import config from '../config';
import { CardP, getSpecialCard, restructureCard, sumCard } from './Bandar_card_banker';
import { changeAllCardRateAction, setMemberBetAction } from '../store/actions/bet';
import { betAreaViewModel } from '../viewModel/BandarGameBoardViewModel';
const { ccclass, property } = _decorator;



export interface IState {

}

export interface IProps {
	/** 黑桃区域牌信息*/
	blackPoker: number[],
	/** 红桃区域牌信息*/
	redPoker: number[],
	/** 梅花区域牌信息*/
	plumPoker: number[],
	/** 方块区域牌信息*/
	diamondPoker: number[],
	areaWinLose:number[],
	countDown:number,
	gameStatus:GameStatus,
	memberBet:object,
	allCardRate: number[],
	cardType: number[],
	spadeNum: CardNum,
	heartNum: CardNum,
	sakuraNum: CardNum,
	blockNum: CardNum,
	//结算时进入房间使用的cardtype数据
	allCardType:number[],
}
export interface IEvent {
	
}


@ccclass('Bandar_card_user')
export class Bandar_card_user extends BaseComponent<IState, IProps, IEvent> {
	private taskScheduler=new TaskScheduler()
	private areaInfo : BetType[] = [1,2,3,4];
	private blackCard :CardP[]=[];
	private redCard :CardP[]=[];
	private plumCard :CardP[]=[];
	private diamondCard :CardP[]=[];
	private allUserCard:Array<Array<CardP>>=[];
	private userCard: Node[] = []
	private isShowGame: boolean = true;
	start() {}

	protected propertyNode = {
		props_spr_usercard_num_bg:new Node(),
		props_usercard_num_query:new Node(),
		props_usercard_type:new Node(),
		props_label_carduser_losenum:new Node(),
		props_label_carduser_winnum:new Node(),
		// props_bandar_userbet:new Node(),
		props_user_all_card:new Node(),
	}

	public props: IProps = {
		/** 黑桃区域牌信息*/
		blackPoker: null,
		/** 红桃区域牌信息*/
		redPoker: null,
		/** 梅花区域牌信息*/
		plumPoker:null,
		/** 方块区域牌信息*/
		diamondPoker: null,
		areaWinLose:null,
		countDown:0,
		gameStatus:null,
		memberBet:null,
		allCardRate: null,
		cardType: null,
		spadeNum: null,
		heartNum: null,
		sakuraNum: null,
		blockNum: null,
		allCardType:null,
	}

	public events: IEvent = {
		
	}

	protected initState() {
		return {
			
		}
	}

	protected bindEvent(): void {
		game.on(Game.EVENT_HIDE,()=>{//游戏切入后台
			this.isShowGame = false
		})
		game.on(Game.EVENT_SHOW,()=>{//游戏进入
			this.isShowGame = true;
		})

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "spadeNum") {
			if (value.cur && Object.keys(value.cur).length != 0) {
				// window.setTimeout(() => {
					// console.log("this.userCard",this.userCard);
					// console.log(!this.userCard);
					if(mainGameViewModel.isUnMount){ return }
					if(!this.userCard || this.userCard.length===0){ return }
					let item = this.props.allCardType[1];
					getNodeByNameDeep("props_usercard_type", this.userCard[0]).getComponent(Sprite).spriteFrame = item > 2 ? getSpecialCard(item) : getSpecialCard(3);
					getNodeByNameDeep("props_usercard_type", this.userCard[0]).active = item > 2;;//这里是特殊奖
					getNodeByNameDeep("props_label_carduser_losenum", this.userCard[0]).getComponent(Label).string = value.cur.num1 + ":" + value.cur.num2;
					getNodeByNameDeep("props_label_carduser_losenum", this.userCard[0]).active = value.cur.win === 2;
					getNodeByNameDeep("props_label_carduser_winnum", this.userCard[0]).getComponent(Label).string = value.cur.num1 + ":" + value.cur.num2;
					getNodeByNameDeep("props_label_carduser_winnum", this.userCard[0]).active = item > 2 ? false : value.cur.win === 1;
					if(value.cur.win===1){ betAreaViewModel.comp.playWinArea(1) }
				// }, 500)
					
				    
			} 
		}
		if (key === "heartNum") {
			if (value.cur && Object.keys(value.cur).length != 0) {
				// window.setTimeout(() => {
					if(mainGameViewModel.isUnMount){ return }
					if(!this.userCard || this.userCard.length===0){ return }
					let item = this.props.allCardType[2];
					getNodeByNameDeep("props_usercard_type", this.userCard[1]).getComponent(Sprite).spriteFrame =  item > 2 ? getSpecialCard(item) : getSpecialCard(3);
					getNodeByNameDeep("props_usercard_type", this.userCard[1]).active = item > 2;;//这里是特殊奖
					getNodeByNameDeep("props_label_carduser_losenum", this.userCard[1]).getComponent(Label).string = value.cur.num1 + ":" + value.cur.num2;
					getNodeByNameDeep("props_label_carduser_losenum", this.userCard[1]).active = value.cur.win === 2;
					getNodeByNameDeep("props_label_carduser_winnum", this.userCard[1]).getComponent(Label).string = value.cur.num1 + ":" + value.cur.num2;
					getNodeByNameDeep("props_label_carduser_winnum", this.userCard[1]).active = item > 2 ? false : value.cur.win === 1;
					if(value.cur.win===1){ betAreaViewModel.comp.playWinArea(2) }
				// }, 500)
					
			} 
		}
		if (key === "sakuraNum") {
			if (value.cur && Object.keys(value.cur).length != 0) {
				// window.setTimeout(() => {
					if(mainGameViewModel.isUnMount){ return }
					if(!this.userCard || this.userCard.length===0){ return }
					let item = this.props.allCardType[3];
					getNodeByNameDeep("props_usercard_type", this.userCard[2]).getComponent(Sprite).spriteFrame = item > 2 ? getSpecialCard(item) : getSpecialCard(3);
					getNodeByNameDeep("props_usercard_type", this.userCard[2]).active = item > 2;//这里是特殊奖
					getNodeByNameDeep("props_label_carduser_losenum", this.userCard[2]).getComponent(Label).string = value.cur.num1 + ":" + value.cur.num2;
					getNodeByNameDeep("props_label_carduser_losenum", this.userCard[2]).active = value.cur.win === 2;
					getNodeByNameDeep("props_label_carduser_winnum", this.userCard[2]).getComponent(Label).string = value.cur.num1 + ":" + value.cur.num2;
				getNodeByNameDeep("props_label_carduser_winnum", this.userCard[2]).active = item > 2 ? false : value.cur.win === 1;
					if(value.cur.win===1){ betAreaViewModel.comp.playWinArea(3) }
				// },500)
				
			} 
		}
		if (key === "blockNum") {
			if (value.cur && Object.keys(value.cur).length != 0) {
				// window.setTimeout(() => {
					if(mainGameViewModel.isUnMount){ return }
					if(!this.userCard || this.userCard.length===0){ return }
					let item = this.props.allCardType[4];
					getNodeByNameDeep("props_usercard_type", this.userCard[3]).getComponent(Sprite).spriteFrame = item > 2 ? getSpecialCard(item) : getSpecialCard(3);
					getNodeByNameDeep("props_usercard_type", this.userCard[3]).active =item > 2;;//这里是特殊奖
					getNodeByNameDeep("props_label_carduser_losenum", this.userCard[3]).getComponent(Label).string = value.cur.num1 + ":" + value.cur.num2;
					getNodeByNameDeep("props_label_carduser_losenum", this.userCard[3]).active = value.cur.win === 2;
					getNodeByNameDeep("props_label_carduser_winnum", this.userCard[3]).getComponent(Label).string = value.cur.num1 + ":" + value.cur.num2;
					getNodeByNameDeep("props_label_carduser_winnum", this.userCard[3]).active = item > 2 ? false : value.cur.win === 1;
					if(value.cur.win===1){ betAreaViewModel.comp.playWinArea(4) }
				// },500)
				
			} 
		}
        
		if (key === "allCardType") {
			window.setTimeout(() => {
				if (mainGameViewModel.isUnMount) { return }
				if (!value.cur) { return };
				value.cur.forEach((item,i) => {
					if (item != 2 && i != 0 && this.userCard.length != 0) {
						// window.setTimeout(() => {
							getNodeByNameDeep("props_label_carduser_winnum", this.userCard[i - 1]).active = false;
							getNodeByNameDeep("props_usercard_type", this.userCard[i - 1]).getComponent(Sprite).spriteFrame = getSpecialCard(item);
							getNodeByNameDeep("props_usercard_type", this.userCard[i - 1]).active = true;//这里是特殊奖
							
						// },500)
						
					}
				})
			},600)
		}

		if (key === "blackPoker") {
			// console.log("blackPoker",value.cur);
			
			this.createCard(this.userCard[0], 0, value.cur);
	
		}
		if (key === "redPoker") {
			// console.log("redPoker",value.cur);

			this.createCard(this.userCard[1],1,value.cur);
		}
		if (key === "plumPoker") {
			// console.log("plumPoker",value.cur);

			this.createCard(this.userCard[2],2,value.cur);
		}
		if (key === "diamondPoker") {
			// console.log("diamondPoker",value.cur);

			this.createCard(this.userCard[3],3,value.cur);
		}
		if(key==="gameStatus"){

			if (value.cur === GameStatus.BET) {
				if (mainGameViewModel.isUnMount) {  return }
				this.areaInfo.forEach((item,index)=>{
					let poker=instantiate(sourceManageSelector().getFile(PrefabPathDefine.MAIN_CARD_USER).source);
					let pokerPosition = new Vec3(0, 0, 1)
					// let	pokerPosition = getNodePositionInCanvas(this.node);

					poker.setPosition(pokerPosition.x+index*220,pokerPosition.y);
					this.userCard.push(poker);
					this.node.parent.addChild(poker);
					window.setTimeout(() => {
						if (mainGameViewModel.isUnMount) { return }
						getNodeByNameDeep("props_usercard_num_query",poker).active=true;
						getNodeByNameDeep("props_spr_usercard_num_bg",poker).active=true;
					},2000)	
				})
				
			}else if(value.cur===GameStatus.STOP_BET){
				window.setTimeout(() => {
					if (mainGameViewModel.isUnMount) { return }
					this.playAnimation()
				},1000)
				
			}else{			
				// this.findCardUser()
				this.clearCardArr()
			}
		}
	}



    /** 初始化 牌 改变资源 */
	private createCard(parentNode: Node, type: number, cardInfos) {
		// console.log("this.userCard",this.userCard);
		
		// console.log("cardInfos1111111111",parentNode,cardInfos);
		if(!parentNode || !cardInfos){return}
		getNodeByNameDeep("props_user_all_card",parentNode).removeAllChildren()
		let cardInfo=cardInfos;
		cardInfo.forEach((item,index)=>{
			let card=instantiate(sourceManageSelector().getFile(PrefabPathDefine.MAIN_CARD_SMALL).source);
			let itemCard=this.getCard(item);
			let num:number=0;
			getNodeByNameDeep("props_skeleton_rollcard",card).active=true;
			getNodeByNameDeep("spr_card_bg",card).active=false;
            if(index===1){ num=38 } 
			else if(index===2) { num=80 }
			else if(index===3) { num=118 }
			let X=-388+num ;
			card.setPosition(X,-155);
			let itemCardNum=sumCard(itemCard.up,itemCard.down)
			if(type===0){
				let newCard={cardNum:item,cardSum:itemCardNum,up:itemCard.up,down:itemCard.down,card:card}
				this.blackCard.push(newCard)
			}else if(type===1){
				let newCard={cardNum:item,cardSum:itemCardNum,up:itemCard.up,down:itemCard.down,card:card}
				this.redCard.push(newCard)
			}else if(type===2){
				let newCard={cardNum:item,cardSum:itemCardNum,up:itemCard.up,down:itemCard.down,card:card}
				this.plumCard.push(newCard)
			}else if(type===3){
				let newCard={cardNum:item,cardSum:itemCardNum,up:itemCard.up,down:itemCard.down,card:card}
				this.diamondCard.push(newCard)
			}
			getNodeByNameDeep("spr_card_up",card).getComponent(Sprite).spriteFrame=this.getSpriteFrame(itemCard.up)
			getNodeByNameDeep("spr_card_down",card).getComponent(Sprite).spriteFrame=this.getSpriteFrame(itemCard.down)
			getNodeByNameDeep("props_user_all_card",parentNode).addChild(card)
		})


	}


	/**翻牌动画 */
	private playAnimation() {
		// console.log("this.userCard",this.userCard);
		
		if (this.userCard.length === 0) { return }
		this.userCard.forEach((itemCard, index) => {
			// playTurnCard()
			let banker;
			this.taskScheduler.joinQueue(new Task((done) => {
				// console.log("111");
				playTurnCard()	
				getNodeByNameDeep("props_user_all_card",itemCard).children.forEach(c=>{
					getNodeByNameDeep("props_skeleton_rollcard",c).active=true;
					// getNodeByNameDeep("props_skeleton_rollcard",c).getComponent(sp.Skeleton).animation="animation";
				});
				window.setTimeout(() => done(), 100)
			}), false).joinQueue(new Task((done) => {
				// console.log("222");
				getNodeByNameDeep("props_user_all_card",itemCard).children.forEach(c=>{
					getNodeByNameDeep("spr_card_bg",c).active=true;
					getNodeByNameDeep("props_skeleton_rollcard",c).active=false;
				
				})
				if(index===0){ banker= this.blackCard 
				}else if(index===1){ banker= this.redCard
				}else if(index===2){ banker= this.plumCard
				} else if (index === 3) { banker = this.diamondCard }
				// console.log("banker111111",banker);
				window.setTimeout(() => done(), 100);
			}), false).joinQueue(new Task((done) => {
				// console.log("3333");
				
				let userAllCard=[];
				userAllCard.push(gameCacheData.newBlackPoker);
				userAllCard.push(gameCacheData.newRedPoker);
				userAllCard.push(gameCacheData.newPlumPoker)
				userAllCard.push(gameCacheData.newDiamondPoker);
				// console.log("banker22222222",banker);

				let bankerItem=restructureCard(banker,userAllCard[index]);
				if (!bankerItem || !bankerItem.newArray) { return };
				bankerItem.newArray.forEach((item, i) => {
					// console.log("item111111",item);
					
					let result = this.props.cardType;
					let endP = config.cardItemPosition[1][i];
					tween(item.card).to(0.6, { position: new Vec3(endP.x, endP.y) })
					.call(()=>{
						// if(){}//需要判定比例情况来展示比例还是特殊奖，特殊奖共有5种，需要判定用哪种资源
						// console.log("bankerItem.result-------",bankerItem.result);
						if (mainGameViewModel.isUnMount) {  return }
						getNodeByNameDeep("props_usercard_num_query", itemCard).active = false;
						getNodeByNameDeep("props_label_carduser_losenum", itemCard).getComponent(Label).string = bankerItem.max + ":" + bankerItem.min;
						getNodeByNameDeep("props_label_carduser_losenum", itemCard).active = result[index + 1] <= 2;//这里是输的比例展示.需要判定输赢
						getNodeByNameDeep("props_label_carduser_winnum", itemCard).getComponent(Label).string = bankerItem.max + ":" + bankerItem.min;
						

						getNodeByNameDeep("props_usercard_type", itemCard).getComponent(Sprite).spriteFrame = result[index + 1] > 2 ? getSpecialCard(result[index + 1]) : getSpecialCard(3);
						getNodeByNameDeep("props_usercard_type", itemCard).active = result[index + 1] > 2;//这里是特殊奖
						getNodeByNameDeep("props_label_carduser_winnum", itemCard).active = result[index + 1] <= 2 && this.props.areaWinLose[index] === 1;

						getNodeByNameDeep("bandar_userbet", itemCard).active = true;
						let isBet: boolean;
						if(!this.props.memberBet){
							isBet = true;/**没有下注 */
						}else{
							isBet = !this.props.memberBet.hasOwnProperty(index + 1);
						}
						
						getNodeByNameDeep("label_userbet_no", itemCard).active = isBet;/**没有下注ui节点 */
						if(!isBet){/**若用户下注 区域下ui节点展示情况*/
							let rateNode = getNodeByNameDeep("label_userbet_rate", itemCard);
							let winNode = getNodeByNameDeep("label_userbet_win", itemCard);
							let loseNode = getNodeByNameDeep("label_userbet_lose", itemCard);
							let rate = this.props.allCardRate[index] - 1;
							// console.log("this.props.memberBet[index + 1]",this.props.memberBet[index + 1],index + 1);
							
							let winLoseNum = this.props.memberBet[index + 1] * rate;
							// console.log("winLoseNum",winLoseNum);
							
							rateNode.getComponent(Label).string = "x" + rate;
							winNode.getComponent(Label).string = "+" + formatNumber(winLoseNum);
							loseNode.getComponent(Label).string = "-" + formatNumber(winLoseNum);
							rateNode.active = true;
							winNode.active = this.props.areaWinLose[index] === 1;
							loseNode.active = this.props.areaWinLose[index] === 2;
						}

					}).start();
				})

				window.setTimeout(()=>done(),400)
			}),false)
			
			
		})

	}

	private clearCardArr(){
		this.blackCard=[];
		this.redCard=[];
		this.plumCard=[];
		this.diamondCard=[];
		this.dispatch(setMemberBetAction(null))
		this.userCard.forEach(item => {
			getNodeByNameDeep("props_usercard_num_query",item).active=false;
			getNodeByNameDeep("props_spr_usercard_num_bg",item).active=false;
			getNodeByNameDeep("props_usercard_type",item).active=false;
			getNodeByNameDeep("props_label_carduser_losenum",item).active=false;
			getNodeByNameDeep("props_label_carduser_winnum",item).active=false;
			getNodeByNameDeep("bandar_userbet",item).active=false;
			this.node.parent.removeChild(item)
			
		})
		
		this.userCard = []
		this.taskScheduler.destoryQueue()
		
	}
	protected destroyCallBack(): void {
		this.taskScheduler.destoryQueue();
	}

	public createUserCard() {
		
		this.areaInfo.forEach((item,index)=>{
			let poker=instantiate(sourceManageSelector().getFile(PrefabPathDefine.MAIN_CARD_USER).source);
			let pokerPosition
			if (this.node) {
				pokerPosition = getNodePositionInCanvas(this.node);
			}
			poker.setPosition(pokerPosition.x + index * 220, pokerPosition.y);
			for (let i = 0; i < 4; i++){
				let card = instantiate(sourceManageSelector().getFile(PrefabPathDefine.MAIN_CARD_SMALL).source);
				let num:number=0;
				getNodeByNameDeep("props_skeleton_rollcard",card).active=true;
				getNodeByNameDeep("spr_card_bg",card).active=false;
				if(i===1){ num=38 } 
				else if(i===2) { num=80 }
				else if(i===3) { num=118 }
				let X = -388 + num;
				card.setPosition(X,-155);
				getNodeByNameDeep("props_user_all_card",poker).addChild(card)
			}
			getNodeByNameDeep("bandar_userbet", poker).active = true;
			getNodeByNameDeep("label_userbet_no", poker).active = true;

			this.userCard.push(poker);
			this.node.parent.addChild(poker);
			getNodeByNameDeep("props_spr_usercard_num_bg",poker).active=true;

		})
	}

	private getSpriteFrame(result:number): SpriteFrame {
		let fileName = '';
		if (result === 0) {
			fileName = SpriteFramePathDefine.BANDAR_POKER0;
		}else if (result === 1) {
			fileName = SpriteFramePathDefine.BANDAR_POKER1;
		} else if (result === 2) {
			fileName = SpriteFramePathDefine.BANDAR_POKER2;
		} else if (result === 3) {
			fileName = SpriteFramePathDefine.BANDAR_POKER3;
		} else if (result === 4) {
			fileName = SpriteFramePathDefine.BANDAR_POKER4;
		} else if (result === 5) {
			fileName = SpriteFramePathDefine.BANDAR_POKER5;
		} else if (result === 6) {
			fileName = SpriteFramePathDefine.BANDAR_POKER6;
		} 
		return sourceManageSelector().getFile(fileName).source;
	}

	/**获取每张牌的组型 */
	private getCard(cardT:number){
        return config.cardType[cardT]
    }

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

