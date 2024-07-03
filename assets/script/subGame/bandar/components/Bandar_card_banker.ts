import { _decorator,instantiate,Label,Node, Skeleton, sp, Sprite, SpriteFrame, tween, UITransform, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { getNodeByNameDeep, getNodePositionInCanvas, initToggle } from '../../../utils/tool';
import { SpriteFramePathDefine } from '../sourceDefine/spriteDefine';
import { mainGameViewModel, playTurnCard, sourceManageSelector } from '../index';
import { CardNum, Poker } from '../store/actions/pokerDetail';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import TaskScheduler, { Task } from '../../../utils/TaskScheduler';
import config from '../config';
import { gameCacheData, GameStatus } from '../type';
import { sendViewModel } from '../viewModel/BandarGameBoardViewModel';
const { ccclass, property } = _decorator;

export type CardP= {
	cardNum:number,
	cardSum:number,
	up:number,
	down:number,
	card:Node,
}

	/**获取特殊奖资源 */
export function getSpecialCard(result) {
	// console.log("result",result);
	
	let fileName = '';
	if (result === 7) {
		fileName = SpriteFramePathDefine.SIX_DEVIL;
	}else if (result === 6) {
		fileName = SpriteFramePathDefine.TWIN_CARDS;
	} else if (result === 5) {
		fileName = SpriteFramePathDefine.SMALL_CARDS;
	} else if (result === 4) {
		fileName = SpriteFramePathDefine.BIG_CARDS;
	} else if (result === 3) {
		fileName = SpriteFramePathDefine.QIU_QIU;
	} 
	// console.log("fileName",fileName);
	
	return sourceManageSelector().getFile(fileName).source;
}


/**点数 */ 
export function sumCard(up:number,down:number):number{
	let num:number
  
	num=(up+down)%10
  
    return num
}
/**重新排序 重组 */
export function restructureCard(array:CardP[],newCard:number[]){
    //  console.log("array",array);
	// console.log("newCard",newCard);
	
	if(!array || !newCard || array === undefined|| newCard === undefined || array.length<=0 || newCard.length<=0){
		return
	}
	// let result:number=-1;//用于判定特殊奖
	// let sameIndex:number=0;
	// let sumSixIndex:number=0
	// let allSum=0
	// const combinations = [];
	const C = newCard.map((num) => {
		const item = array.find((obj) => obj.cardNum === num);
		if (item === undefined) { return };
		return {cardNum:num,cardSum:item.cardSum, card: item.card,up:item.up,down:item.down};
	});
		// console.log("CCCCC",C);
		
		
	// // 两两相加并取余数
	// for (let i = 0; i < array.length; i++) {
	// 	for (let j = i + 1; j < array.length; j++) {
	// 		const sum = (array[i].cardSum + array[j].cardSum) % 10;
	// 		let obj={
	// 			sum:sum,num1:array[i].cardSum,num2:array[j].cardSum
	// 		}
	// 		combinations.push(obj);
	// 	}
	// }

	// for(let i=0;i<array.length;i++){
		
	// 	if(array[i].up===array[i].down){
    //       sameIndex++;
	// 	}
	// 	if(array[i].up+array[i].down===6){
	// 		sumSixIndex++;
	// 	}
	// 	allSum=allSum+array[i].up+array[i].down
		
	// }

	// // 找出最大值A所对应的两个数，并从数组中移除
	// if(C.length===0){
	// 	return
	// }
	// console.log("C",C);
	
	if (!C || C === undefined) { return };
	if (C[0] === undefined) { return };
	const maxIndices = (C[0].cardSum+C[1].cardSum)%10
	let mimIndices=(C[2].cardSum+C[3].cardSum)%10 ;
	// if(sumSixIndex>=4){
	// 	result=0
	// }
	// if(sameIndex>=4){
	// 	result=1
	// }
	// if(allSum>=39){
	// 	result=3
	// }else if(allSum<=9){
	// 	result=2
	// }
	// if(maxIndices===9 && mimIndices === 9){
	// 	result=4
	// }
	let obj={
		newArray:C,
		max:maxIndices,
		min:mimIndices,
		// result:result
	}
	return obj

}


export interface IState {

}

export interface IProps {
	bankerPoker:number[],
	countDown:number,
	gameStatus: GameStatus,
	cardType: number[],
	farmhouse: CardNum,
	allCardType: number[],
	
}

export interface IEvent {
	
}


@ccclass('Bandar_card_banker')
export class Bandar_card_banker extends BaseComponent<IState, IProps, IEvent> {
	private taskScheduler = new TaskScheduler();
	private newCardPo: CardP[] = [];
	start() {}

	protected propertyNode = {
		props_banker_all_card:new Node(),
		props_skeleton_rollcard:new Node(),
		props_spr_bankercard_num_bg:new Node(),
		props_bankercard_num_query:new Node(),
		props_bankercard_type:new Node(),
		props_label_cardbanker_winnum:new Node(),
		props_label_cardbanker_losenum:new Node()
	}

	public props: IProps = {
		bankerPoker: null,
		countDown: 0,
		gameStatus: null,
		cardType: null,
		farmhouse: null,
		allCardType:null,
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
		if (key === "farmhouse") {
			if (value.cur && Object.keys(value.cur).length != 0 ) {
				window.setTimeout(() => {
					if (!this.propertyNode) { return }
					let item = this.props.allCardType[0];
					this.propertyNode.props_bankercard_type.getComponent(Sprite).spriteFrame = item > 2 ? getSpecialCard(item) : getSpecialCard(3);
					this.propertyNode.props_bankercard_type.active = item > 2;//这里是特殊奖
					this.propertyNode.props_label_cardbanker_losenum.getComponent(Label).string = value.cur.num1 + ":" + value.cur.num2;
					this.propertyNode.props_label_cardbanker_losenum.active = item <= 2;
					this.propertyNode.props_spr_bankercard_num_bg.active = true;
				}, 500)
				
			}
		}
		if (key === "allCardType") {
			if (!value.cur) { return };
			this.propertyNode.props_bankercard_type.getComponent(Sprite).spriteFrame = value.cur[0] > 2 ? getSpecialCard(value.cur[0]) : getSpecialCard(3);
			this.propertyNode.props_bankercard_type.active = value.cur[0] > 2;//这里是特殊奖
	    }
		if (key === "bankerPoker") {
           if(sendViewModel.isUnMount) return
           let allCard= sendViewModel.comp.getPropertyNode().props_all_card as Node
		   allCard.children.forEach(v=>{
			tween(v).to(0.1,{scale:new Vec3(0.1,0.1)}).start()
		   })  
			this.changeCardInfo(value.cur);
	   }
		if (key === "gameStatus") {
			if (mainGameViewModel.isUnMount) { return }
			this.propertyNode.props_label_cardbanker_losenum.active=false;
			if (value.cur === GameStatus.BET) {
				if (mainGameViewModel.isUnMount) { return }
				window.setTimeout(() => {
					if (mainGameViewModel.isUnMount) {  return }
					this.propertyNode.props_bankercard_num_query.active=true;
					this.propertyNode.props_spr_bankercard_num_bg.active=true;
				},2000)
			}else if(value.cur===GameStatus.STOP_BET){
				this.propertyNode.props_bankercard_num_query.active=false;
				this.propertyNode.props_spr_bankercard_num_bg.active=true;
				window.setTimeout(() => {
					if (mainGameViewModel.isUnMount) {  return }
					this.playAnimation()
				},100)
			}else if(value.cur===GameStatus.WAIT){
				this.initCard();
				this.propertyNode.props_label_cardbanker_losenum.active=false;
			}
	   }
	}

	/**init */
	private initCard() {
		this.propertyNode.props_bankercard_num_query.active=false;
		this.propertyNode.props_spr_bankercard_num_bg.active=false;
		this.propertyNode.props_label_cardbanker_losenum.active=false;
		this.propertyNode.props_bankercard_type.active=false
		this.propertyNode.props_banker_all_card.removeAllChildren();
		this.newCardPo = [];
		this.taskScheduler.destoryQueue();
	}
	/**翻牌动画 */
	private playAnimation(){
		/**翻牌 */
		let task1 = new Task((done) => {
			playTurnCard()
			this.propertyNode.props_banker_all_card.children.forEach(item=>{
				getNodeByNameDeep("props_skeleton_rollcard", item).active = true;
				// getNodeByNameDeep("props_skeleton_rollcard",item).getComponent(sp.Skeleton).animation="animation";
				getNodeByNameDeep("spr_card_bg", item).active = true;
			})
			window.setTimeout(() => done(), 100);
		})
		/**展示牌 */
		let task2 = new Task((done) => {
			this.propertyNode.props_banker_all_card.children.forEach(item=>{
				getNodeByNameDeep("spr_card_bg", item).active = true;
				getNodeByNameDeep("props_skeleton_rollcard", item).active = false;
			})
			window.setTimeout(() => done(), 100);
		})
        /**牌换位置 */
		let task3 = new Task((done) => {
           this.changeCardPosition();
		   
		   window.setTimeout(() => done(), 300);
		})

		this.taskScheduler.joinQueue(task1,false).joinQueue(task2,false).joinQueue(task3,false)
	}

	/**改变牌资源 */
	private changeCardInfo(bankerPoker:number[]){
		// console.log(bankerPoker);
		if (!bankerPoker) { return };
		this.newCardPo=[]
		this.propertyNode.props_banker_all_card.removeAllChildren();
		
		bankerPoker.forEach((item,index)=>{
			let card=instantiate(sourceManageSelector().getFile(PrefabPathDefine.MAIN_CARD_BIG).source)
			let itemCard=this.getCard(item);
			let num:number=0
			getNodeByNameDeep("props_skeleton_rollcard",card).active=true;
			getNodeByNameDeep("spr_card_bg",card).active=false;
			if(index===1){ num = 48 } 
			else if(index===2) { num = 100 }
			else if(index===3) { num = 148 }
			card.setPosition( -328+num , 300 )

			getNodeByNameDeep("spr_card_up", card).getComponent(Sprite).spriteFrame = this.getSpriteFrame(itemCard.up);
			getNodeByNameDeep("spr_card_down", card).getComponent(Sprite).spriteFrame = this.getSpriteFrame(itemCard.down);
			let itemCardNum = sumCard(itemCard.up, itemCard.down);
			let cardP={cardNum:item,cardSum:itemCardNum,up:itemCard.up,down:itemCard.down,card:card};
			this.newCardPo.push(cardP);
			getNodeByNameDeep("props_banker_all_card",this.node).addChild(card);

		})
	}
	/**获取每张牌的组型 */
	private getCard(cardT:number){
        return config.cardType[cardT]
    }
	/**改变牌的位置 */
    private changeCardPosition(){
	    let banker=restructureCard(this.newCardPo,gameCacheData.newBankerPoker);
	    if(!banker){
		 return
	    }
	//    console.log("this.newCardPo",this.newCardPo);
	   
    //    console.log("banker",banker);
	   
		banker.newArray.forEach((item, index) => {
			let result = this.props.cardType;
			let endP = config.cardItemPosition[0][index];
			tween(item.card).to(0.6,{position:new Vec3(endP.x,endP.y)})
			.call(()=>{
				// if(){}//需要判定比例情况来展示比例还是特殊奖，特殊奖共有5种，需要判定用哪种资源
			    // console.log("banker.result--------",banker.result);
			    if (mainGameViewModel.isUnMount) {  return }
				this.propertyNode.props_bankercard_num_query.active = false;
				this.propertyNode.props_label_cardbanker_losenum.getComponent(Label).string = banker.max + ":" + banker.min;
				this.propertyNode.props_label_cardbanker_losenum.active = result[0] <= 2;//这里是比例展示
				this.propertyNode.props_bankercard_type.getComponent(Sprite).spriteFrame = result[0] > 2 ? getSpecialCard(result[0]) : getSpecialCard(3);
				this.propertyNode.props_bankercard_type.active = result[0] > 2;//这里是特殊奖
			
				
		  }).start();
	   })
	}


	protected destroyCallBack(): void {
		this.taskScheduler.destoryQueue();
	}

	public createBankerCard() {
		for (let i = 0; i < 4; i++){
			let card = instantiate(sourceManageSelector().getFile(PrefabPathDefine.MAIN_CARD_BIG).source);
			let num:number=0
			getNodeByNameDeep("props_skeleton_rollcard", card).active = true;
			getNodeByNameDeep("spr_card_bg", card).active = false;
			if(i===1){ num = 48 } 
			else if(i===2) { num = 100 }
			else if(i===3) { num = 148 }
			card.setPosition( -328+num , 300 )
			getNodeByNameDeep("props_banker_all_card",this.node).addChild(card);
		}
	}
	/**获取牌的点数资源 */
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

	protected bindUI(): void {		
		this.propertyNode.props_banker_all_card.removeAllChildren();
		this.propertyNode.props_label_cardbanker_losenum.active = false;
		this.propertyNode.props_bankercard_num_query.active = false;
		this.propertyNode.props_spr_bankercard_num_bg.active = false;
		this.propertyNode.props_bankercard_type.active = false;
	}

	update(deltaTime: number) {

	}
}

