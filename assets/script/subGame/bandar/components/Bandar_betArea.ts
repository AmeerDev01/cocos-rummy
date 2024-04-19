import { _decorator,instantiate,Label,Node, tween, UITransform, Vec3, bezier, Quat, Skeleton, sp, game, Game, Component, } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { formatNumber, getNodeByNameDeep, getNodePositionInCanvas, initToggle } from '../../../utils/tool';
import { BetData, BetType, gameCacheData, GameStatus, HeadType, SendBet, TipsVo } from '../type';
import { global, lang } from '../../../hall';
import { ToastPosition, addToastAction } from '../../../hall/store/actions/baseBoard';
import ChipViewModel from '../viewModel/BandarChipViewModel';
import OnlineViewModel from '../viewModel/BandarOnlineViewModel';
import { mainGameViewModel, playChip, playGetCoin, sourceManageSelector, stopBet } from '../index';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import config, { initBetData } from '../config';
import { SKT_MAG_TYPE, sktInstance } from '../socketConnect';
import TaskScheduler, { Task } from '../../../utils/TaskScheduler';
import { WinUser, changeGoldDataAction, setLastBetAction, setNewBetDataAction } from '../store/actions/bet';
import { footerViewModel, onlineViewModel, usersViewModel } from '../viewModel/BandarGameBoardViewModel';
const { ccclass, property } = _decorator;

type BetInfo = {
	index: number,
	userId: string,
	isMe: boolean,
	chips: ChipViewModel[]
}
export function removeComma(str){
	const newStr = str.replace(/,/g,"")
	return newStr
}

export interface IState {
}

export interface IProps {
	gameStatus:GameStatus,
	gold:number,
	/**选择的筹码 */
	selectChip: number,
	myInfo: HeadType,
	newBetData:BetData,
	winArea: number[],
	goldData:object,
	cardRate:number[],
	allWinUsers:WinUser[],
	lastBet: SendBet[],
	tips: TipsVo[],
	memberBet: object,
	cancelBetData:BetData
}

export interface IEvent {}


@ccclass('Bandar_betArea')
export class Bandar_betArea extends BaseComponent<IState, IProps, IEvent> {
	private betLoading = false;
	public betAreaInfo: Map<BetType, BetInfo[]> = new Map();
	// 是否锁定下注
	private isLockBet: boolean = false;
	private isShowGame: boolean = true;
	private isFlyStar: boolean = false;
	private areaInfo :BetType[] = [1,2,3,4];
	public lastArr:SendBet[] = [];
	public amountArr:SendBet[] = [];
	private taskScheduler = new TaskScheduler();
	public sendBet: SendBet = null;
	private betId: number = 0;
	start() {}

	protected propertyNode = {
		props_btn_black:new Node(),
		props_btn_red:new Node(),
		props_btn_plum:new Node(),
		props_btn_diamond:new Node(),
	}

	public props: IProps = {
		gameStatus:null,
		gold:0,
		selectChip:1000,
		myInfo:null,
		newBetData:null,
		winArea:null,
		goldData:null,
		cardRate:null,
		allWinUsers:null,
		lastBet: [],
		tips: null,
		memberBet: null,
		cancelBetData:null,
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
		this.propertyNode.props_btn_black.on(Node.EventType.TOUCH_END,()=>{this.myBet(BetType.BLACK)});
		this.propertyNode.props_btn_red.on(Node.EventType.TOUCH_END,()=>{this.myBet(BetType.RED)});
		this.propertyNode.props_btn_plum.on(Node.EventType.TOUCH_END,()=>{this.myBet(BetType.PLUM)});
		this.propertyNode.props_btn_diamond.on(Node.EventType.TOUCH_END,()=>{this.myBet(BetType.DIAMOND)});
      
	}
	
	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
      if(key === "selectChip"){}
	  if (key === "newBetData" && value.cur) {
		  if (!value.cur) { return }
		  if (value.cur.memberId === gameCacheData.memberId) {
			// this.amountArr.push(this.sendBet);	
			return
		  };
		  this.flyChip(value.cur)
		}
		if (key === 'cancelBetData') {
			this.cancelBet(value.cur);
		}
		if (key === "goldData") {
			if (!value.cur || value.cur === undefined) { return };
			if(value.cur && Object.keys(value.cur).length != 0){   
				for(let key in value.cur){
				  let areaNode = this.getNodeByBetType(this.getNodeToBetType(Number(key)))
					if(value.cur[key] === 0){
						getNodeByNameDeep("Label_bet_all", areaNode).getComponent(Label).string = ""
					}else{
						getNodeByNameDeep("Label_bet_all", areaNode).getComponent(Label).string = formatNumber(value.cur[key]);
					}
				}
			  }   
	    }
		if (key === "memberBet") {
			if (!value.cur || value.cur === undefined) { return };
			if (Object.keys(value.cur).length != 0) { 
			  for(let key in value.cur){
				let areaNode = this.getNodeByBetType(this.getNodeToBetType(Number(key)))
					if(value.cur[key] === 0){
						getNodeByNameDeep("Label_bet_mine", areaNode).getComponent(Label).string = ""
					} else {
						getNodeByNameDeep("spr_bet_bg", areaNode).active = true;
						getNodeByNameDeep("Label_bet_mine", areaNode).getComponent(Label).string = formatNumber(value.cur[key]);
					}
			  }
			}
	    }	
	  if(key === "allWinUsers"){
		  // console.log("allWinUsers",value.cur);
		if(!value.cur){ return }
		this.taskScheduler.joinqQueue(new Task((done)=>{
			window.setTimeout(() => {
				if(mainGameViewModel.isUnMount){ return }
				if(value.cur){
					value.cur.forEach(item=>{		 
						this.flyWinAreaToUser(item)
					})
				}
				
			}, 100)
			
			window.setTimeout(() => done(), 1000)
		}),false).joinqQueue(new Task((done)=>{
			window.setTimeout(() => {
				if(mainGameViewModel.isUnMount){ return }
				if(!value.cur){
					return
				}
				value.cur.forEach(item=>{
					if(item.memberId !== gameCacheData.memberId){
						if(item.index < 6 && item.index >= 0){
							usersViewModel.comp.copyWinAnimation(item.index);
							usersViewModel.comp.playAddGold(item ,item.gold)
						}else if(item.index > 6 ){					
							onlineViewModel.comp.playWinAni()
						}
					}else{
						footerViewModel.comp.palyAddUp(item)
					}
				  
				})
			},100)
		
			window.setTimeout(()=>done(),1000)
		}),false).joinqQueue(new Task((done)=>{
			window.setTimeout(() => {
				if(mainGameViewModel.isUnMount){ return }
				// 清理下注区域数据
				this.betAreaInfo.clear();
				this.clearBetWinAreaAni([1,2,3,4])
			}, 3000)
					
			window.setTimeout(() => done(), 1000)
		}))
		
	  }
	  if (key === "winArea") {}
	  if(key === "lastBet"){}
	  if (key === "gameStatus") {
		    // console.log("gameStatus",value.cur);
			
			if (value.cur === GameStatus.STOP_BET) {
				if (mainGameViewModel.isUnMount) { return }
				this.lastArr=[...this.amountArr];
				this.taskScheduler.joinqQueue(new Task((done) => {
					window.setTimeout(() => {
						if (mainGameViewModel.isUnMount) { return }
						if (value.cur === GameStatus.STOP_BET && this.props) {
                            // console.log("this.props.winArea",this.props.winArea);
							
							this.playWinAnimation(this.props.winArea);
							this.flyToHeGuan();
						}	
					},4000)
					
					window.setTimeout(() => done(), 1000)
				}),false).joinqQueue(new Task((done) => {
					window.setTimeout(() => {
						if(mainGameViewModel.isUnMount){ return }
						this.flyChipToWinArea();
					},4000)

					window.setTimeout(() => done(), 1000)
				}),false)
			
			}else if(value.cur === GameStatus.WAIT){
				this.betAreaInfo.clear();
				this.clearAllBetAreaGold();
				getNodeByNameDeep("Label_bet_all",this.propertyNode.props_btn_black).getComponent(Label).string = ""; 
				getNodeByNameDeep("Label_bet_all",this.propertyNode.props_btn_red).getComponent(Label).string = ""; 
				getNodeByNameDeep("Label_bet_all",this.propertyNode.props_btn_plum).getComponent(Label).string = ""; 
				getNodeByNameDeep("Label_bet_all",this.propertyNode.props_btn_diamond).getComponent(Label).string = ""; 
			} else if (value.cur === GameStatus.BET) {
				this.betLoading = false;
				this.areaInfo=[1,2,3,4]
				this.clearBetWinAreaAni(this.areaInfo)
			}
		
	  }
	}

	private isBetStatus(): boolean {
		return this.props.gameStatus === GameStatus.BET;
	}
	
	/**
	 * 自己下注
	 * @param betType 
	 * @returns 
	 */
	private myBet(betType: BetType): void {
		if (!this.isBetStatus()) {//下注阶段才能下注
			return;
		}
		// 等待下注返回后才能进行下一次下注
		if (this.betLoading) {
			return;
		}
		if (this.props.tips && this.props.tips.length > 0) {
			return;
		}
		if (this.isLockBet = this.props.gold < 5000) {
			return;
		}
		if (this.props.gold < this.props.selectChip*6) {
			// 提示用户余额不足
			let bet_remind = footerViewModel.comp.getPropertyNode().props_spr_bet_remind as Node 
			bet_remind.active = true;
			window.setTimeout(()=>{
				bet_remind.active = false
			},2000)
			// global.hallDispatch(addToastAction({ content: "余额不足，您只能下注账户余额的1/6!" }));
			return;
		}
		
        // this.betId++
		const betData = initBetData(this.props.myInfo.index, this.props.myInfo.memberId, betType, this.props.selectChip);
		betData.isMyBet = true;//当前用户是否下注
		this.betLoading = true;
		this.sendBet = {
			roomId: gameCacheData.roomId,
            memberId: this.props.myInfo.memberId,
            memberName: this.props.myInfo.memberName,
            gold: betData.betAmount,
            betType: betData.betType,
			isMe: betData.isMyBet,
			betId:betData.betId
		}
	   // 下注信息发送给服务器
	   sktInstance.sendSktMessage(SKT_MAG_TYPE.BET_ALL, this.sendBet);
	   this.flyChip(betData);

	//    this.amountArr.push(this.sendBet);

	}

	/**
	 * 飞筹码
	 * @param betData 
	 * @param isFly 是否飞筹码的动画，false用于刚进入初始化筹码
	 */
	public flyChip(betData: BetData, isFly: boolean = true): void {
		if (betData.isMyBet) {
			this.betLoading = false;
		}
		// 下注筹码不存在，不处理
		if (!config.chipTypes.find(v => v.value === betData.betAmount)) {
			return;
		}
		isFly = betData.isFly;
		isFly = this.isShowGame;
		const betArea = this.getNodeByBetType(betData.betType).getChildByName("Layout_bet_chips");
		const viewModel = this.createChip(betData.betAmount, betArea);
		let radom = Math.random()*90-90;//旋转角度
		const chipNode = viewModel.comp.node;
		const endPosition = this.randomBetEndPosition(betArea);
		this.addBetInfo(betData,viewModel);
		this.updateAllBet();
		if (isFly) {
			playChip()
			const uiTransform = this.node.getComponent(UITransform);
			const startPosition = this.getBetStartPosition(betData);
			chipNode.setWorldPosition(uiTransform.convertToWorldSpaceAR(startPosition));
			tween(chipNode).to(0.3, { position: endPosition , angle:-radom,},{easing: 'quintOut'}).start();
			// if (!isWinRateBet && betData.index === config.gameOption.winRateMaxIndex) {
			if (betData.index === config.gameOption.winRateMaxIndex) {
				//判定是否是未展示星星的区域数组 若未展示，返回区域下标 否（即已展示） 返回-1
				let betTypeIndex = this.areaInfo.indexOf(betData.betType);

				if(betTypeIndex >= 0){
					this.areaInfo.splice(betTypeIndex,1);//移除展示了的区域
					// 飞星星
                    this.flyStar(this.getNodeByBetType(betData.betType), betData.betType);	
				}
			}
		}

		// this.updateBetAreaGold(betData, betArea.parent);
	}

	/**下注总筹码 */
	private updateAllBet(){
		// for(let key in gameCacheData.goldData){
		// 	let areaNode = this.getNodeByBetType(this.getNodeToBetType(Number(key)))
		// 	if(gameCacheData.goldData[key] === 0){
		// 		getNodeByNameDeep("Label_bet_all", areaNode).getComponent(Label).string = ""
		// 	}else{
		// 		getNodeByNameDeep("Label_bet_all", areaNode).getComponent(Label).string = formatNumber(gameCacheData.goldData[key]);
		// 	}
		// }
	}

    /**清除所有下注区域的金币 */
	public clearAllBetAreaGold() {
		this.dispatch(changeGoldDataAction({"1":0,"2":0,"3":0,"4":0}));
		this.clearBetAreaGold(this.propertyNode.props_btn_black);
		this.clearBetAreaGold(this.propertyNode.props_btn_red);
		this.clearBetAreaGold(this.propertyNode.props_btn_plum);
		this.clearBetAreaGold(this.propertyNode.props_btn_diamond);
		this.hideAllWinRate();
		this.areaInfo = [1, 2, 3, 4];
		this.clearBetWinAreaAni(this.areaInfo);
		// this.lastArr = [...this.amountArr];//
		this.amountArr = [];
		// this.betId = 0;
	}

	private clearBetAreaGold(betArea: Node) {
		betArea.getChildByName("Layout_bet_chips").removeAllChildren();
		
		this.updateBetAreaGold({
			index: 0, memberId: "", betAmount: 0, betType: null, betId: '', totalBetAmount: 0, meTotalBetAmount: 0
		}, betArea);
	}


	/**清除赢的区域动画 */
	private clearBetWinAreaAni(winArea){
		 winArea.forEach(item=>{
			let winAreaNode = this.getNodeByBetType(item);
			getNodeByNameDeep("animation_win1",winAreaNode).active = false;
			getNodeByNameDeep("animation_win2",winAreaNode).active = false;
		 })
	}
	
	/** 播放赢的区域动画效果 */
	private playWinAnimation(winArea) {

		if (!winArea|| winArea.length === 0  ) {
			return
		}
		winArea.forEach((item,index)=>{
             let winAreaNode = this.getNodeByBetType(item);
			 getNodeByNameDeep("animation_win1",winAreaNode).active = true;
			window.setTimeout(() => {
				if(mainGameViewModel.isUnMount){ return }
				getNodeByNameDeep("animation_win2",winAreaNode).active = true;
			 },500)			 
		 })
	}

	/** 播放赢的区域动画效果 */
	public playWinArea(type) {

		let winAreaNode = this.getNodeByBetType(type);
		getNodeByNameDeep("animation_win1",winAreaNode).active = true;
		window.setTimeout(() => {
			if(mainGameViewModel.isUnMount){ return }
			getNodeByNameDeep("animation_win2",winAreaNode).active = true;
		},500)			 
		
	}

	/** 下注总值 用户下注值 */
	private updateBetAreaGold(betData: BetData, betArea: Node): void {
		if (betData.totalBetAmount === 0) {			
			getNodeByNameDeep("Label_bet_all", betArea).getComponent(Label).string = ""; 
			getNodeByNameDeep("Label_bet_mine", betArea).getComponent(Label).string = "";
			getNodeByNameDeep("Label_bet_mine", betArea).parent.active = betData.meTotalBetAmount > 0;
		} else {
			// getNodeByNameDeep("Label_bet_all", betArea).getComponent(Label).string = formatNumber(this.props.goldData);
		}

		// if (betData.memberId === gameCacheData.memberId) {
		// 	getNodeByNameDeep("spr_bet_bg", betArea).active = true;
		// 	let mineAmount = getNodeByNameDeep("Label_bet_mine", betArea).getComponent(Label).string;
		// 	let totalMine = Number(removeComma(mineAmount) )+betData.betAmount;
		// 	getNodeByNameDeep("Label_bet_mine", betArea).getComponent(Label).string = formatNumber(totalMine);
		// 	getNodeByNameDeep("Label_bet_mine", betArea).parent.active = totalMine > 0;
		// }

	}

    /** 创造对应选取的金币  */
	private createChip(chipValue: number, parent: Node): ChipViewModel {
		return new ChipViewModel().mountView(sourceManageSelector().getFile(PrefabPathDefine.MAIN_CHIP).source).appendTo(parent).connect().setProps({ value: chipValue });
	}

	/** 获得下注筹码飞的开始坐标 */
	private getBetStartPosition(betData: BetData): Vec3 {
		if (betData.isMyBet) {
			return new Vec3(config.gameOption.myHeadPosition.x, config.gameOption.myHeadPosition.y);
		}

		if (betData.index >= config.gameOption.seatNumber) {
			return new Vec3(config.gameOption.onlineNumberPosition.x, config.gameOption.onlineNumberPosition.y);
		}

		return new Vec3(config.headLocations[betData.index].x, config.headLocations[betData.index].y);
	}
	
	/**筹码飞向头像的结束坐标 */
	private getFlyToHeadEndPosition(betInfo: BetInfo) {
		if (betInfo.isMe) {
			// 播放获得金币的音效
			playGetCoin();
			return new Vec3(config.gameOption.myHeadPosition.x, config.gameOption.myHeadPosition.y);
		}

		if (betInfo.index >= config.gameOption.seatNumber) {
			return new Vec3(config.gameOption.onlineNumberPosition.x, config.gameOption.onlineNumberPosition.y);
		}

		return new Vec3(config.headLocations[betInfo.index].x, config.headLocations[betInfo.index].y);
	}
	/** 获得下注筹码飞的结束坐标 */
	private randomBetEndPosition(betArea: Node): Vec3 {
		const uiTransform: UITransform = betArea.getComponent(UITransform);
		const width = uiTransform.width * 0.8;
		const height = uiTransform.height * 0.6;
		let x = width / 2 - Math.random() * width;
		let y = height / 2 - Math.random() * height;

		return new Vec3(x, y);
	}

	/** 金币飞向荷官 */
	private flyToHeGuan(){//this.betAreaInfo 的chip存储了金币节点，可遍历它进行位置移动
		// playGetCoin()
		let chips: ChipViewModel[] = [];
		this.betAreaInfo.forEach((v, k) => {
			if(!this.props.winArea){//没有中奖区域
				v.forEach(betInfo => {
					chips = chips.concat(betInfo.chips);
				});
			}
			// 找出未中奖的区域
			if(this.props.winArea){
				// playGetCoin()
				if (!this.props.winArea.find(betType => betType === k)) {
					v.forEach(betInfo => {
						chips = chips.concat(betInfo.chips);
					});
				}
			}	
			
		})
		
		//未中奖区域
		this.FlyLossAreaToHe(chips)
	}

    
	/** 未中奖区域飞金币到荷官位置 */
	private FlyLossAreaToHe(chips: ChipViewModel[]) {
		if (chips.length != 0) {
			playGetCoin()
		}
		chips.forEach(chip => {
			const chipNode = chip.comp.node;
			const endPositon = new Vec3 (config.gameOption.dealerPosition.x,config.gameOption.dealerPosition.y);
			const uiTransform = this.node.getComponent(UITransform);

			tween(chipNode).to(0.8, { worldPosition: uiTransform.convertToWorldSpaceAR(endPositon),scale:new Vec3(0.1,0.1) }, {easing: 'quintOut'})
				.call(() => {
					// this.lossAnimationEnd();
					chip.unMount();
				})
				.start();
		})
	}

	/** 荷官飞金币到赢的区域 */
	private flyChipToWinArea(){//需要当前赢的区域 获得赔率，添加对应翻倍金币移动到对应赢的区域
		// console.log("this.props.goldData",this.props.goldData);
        //  console.log("this.props.goldData",!this.props.goldData);
		//  console.log("this.props.winArea",this.props.winArea);
		if( mainGameViewModel.isUnMount ){ return }
		if(!this.props || !this.props.goldData || !this.props.winArea ){//没有任何下注 没有赢的区域
			return
		}else{
			playGetCoin()
		}
		this.props.winArea.forEach((item,index)=>{
			const betData = { betType:item, betAmount:this.props.goldData[item]};
			this.flyWinChip(betData,index)

		})
		
	}

	/**
	 * 获得自己的头像位置
	 * @returns 
	 */
	private getMyHeadPosition() {
		return new Vec3(config.gameOption.myHeadPosition.x, config.gameOption.myHeadPosition.y);
	}
	/**筹码飞向用户头像 */
	private chipFlyToHead(chip: ChipViewModel, betInfo: BetInfo) {
		const chipNode = chip.comp.node;
		const endPositon = betInfo ? this.getFlyToHeadEndPosition(betInfo) : this.getMyHeadPosition();
		const uiTransform = this.node.getComponent(UITransform);
		tween(chipNode).to(0.3, { worldPosition: uiTransform.convertToWorldSpaceAR(endPositon) })
			.call(() => {
				chip.unMount();
			})
			.start();
	}
	/** 赢的区域飞金币到用户头像 */
	private flyWinAreaToUser(betInfo,isFly: boolean = true): void{
		// console.log("this.props.winArea touser",this.props.winArea);
		// console.log("betInfo",betInfo);
		if (!this.props.winArea) { return }
		playGetCoin()
		this.props.winArea.forEach(v => {
			const betInfos = this.betAreaInfo.get(v);
			if (betInfos) {
				betInfos.forEach(betInfo => {
					// console.log("betinfo22",betInfo);
					
					betInfo.chips.forEach(chip => {
						const chipNode = chip.comp.node;
						const endPositon = this.getFlyToHeadEndPosition(betInfo);
						const uiTransform = this.node.getComponent(UITransform);

						tween(chipNode).to(0.8, { worldPosition: uiTransform.convertToWorldSpaceAR(endPositon) ,scale:new Vec3(0.1,0.1)},{easing: 'quintOut'})
							.call(() => {
								chip.unMount();
							})
							.start();
					})
				});
			}
		})
	}

    /** 飞向赢 区域*/
	private flyWinChip(winBetData,index:number , isFly: boolean = true){
		const betInfos = this.betAreaInfo.get(winBetData.betType);
		if (!betInfos) {
			return 0;
		}
		isFly = this.isShowGame;
		let odds=this.props.cardRate[index]-1
		const betArea = this.getNodeByBetType(winBetData.betType).getChildByName("Layout_bet_chips");
		// console.log("this.props.cardRate",this.props.cardRate);
		const copyBetInfo = this.copyBetInfo(betInfos, betArea, odds);
		let chips: ChipViewModel[] = [];
		copyBetInfo.forEach(v => chips = chips.concat(v.chips));
		const uiTransform = this.node.getComponent(UITransform);
		// log("healerFlyToBetArea === ", chips.length);
		chips.forEach(v => {
			const startPosition = new Vec3 (config.gameOption.dealerPosition.x,config.gameOption.dealerPosition.y);
			const endPositon = this.randomBetEndPosition(betArea);

			const chipNode = v.comp.node;
			chipNode.setWorldPosition(uiTransform.convertToWorldSpaceAR(startPosition));

			tween(chipNode).to(0.5, { position: endPositon },{easing: 'quintOut'})
			// .call(() => { this.flyHealerToBetAreaEnd() })
			.start();
		})

		// 把荷官赔付的筹码加入到用户下注的数组中去
		copyBetInfo.forEach(v => {
			const betInfo = betInfos.find(bb => bb.userId === v.userId);
			betInfo.chips = betInfo.chips.concat(v.chips);
		})
		
	}

	private  copyBetInfo(betInfos: BetInfo[], parent: Node, odds: number): BetInfo[] {
		const arr: BetInfo[] = [];

		new Array(odds).fill(0).forEach(v => {
			betInfos.forEach(betInfo => {
				arr.push({
					index: betInfo.index,
					userId: betInfo.userId,
					isMe: betInfo.isMe,
					chips: betInfo.chips.filter(chip => chip.comp.props).map(chip => this.createChip(chip.comp.props.value, parent))
				})
			})
		})

		return arr;
	}

	/**
	 * 添加下注信息
	 * @param betData 
	 * @param viewModel 
	 */
	private addBetInfo(betData: BetData, viewModel: ChipViewModel) {
		let betInfos = this.betAreaInfo.get(betData.betType);
		if (!betInfos) {
			betInfos = [];
			this.betAreaInfo.set(betData.betType, betInfos);
		}
		
		let betInfo = betInfos.find(v => v.userId === betData.memberId);
		if (betInfo) {
			betInfo.chips.push(viewModel);
		} else {
			betInfos.push({
				index: betData.index,
				userId: betData.memberId,
				isMe: betData.isMyBet,
				chips: [viewModel]
			})
		}

	}

	/**显示星星在下注区域 */
	private showWinRate(betType: BetType) {
		if (!this.node || !this.node.isValid) return;
		this.getStar( this.getNodeByBetType(betType), betType ).active  =  true;
	}

	/**获得星星 */
	private getStar(parentNode:Node, betType: BetType) {
		return parentNode.getChildByName("spr_bet_star");
	}

	/** 隐藏星星 */
	private hideAllWinRate() {
		if (!this.node || !this.node.isValid) return;
		this.propertyNode.props_btn_black.getChildByName("spr_bet_star").active = false;
		this.propertyNode.props_btn_red.getChildByName("spr_bet_star").active = false;
		this.propertyNode.props_btn_plum.getChildByName("spr_bet_star").active = false;
		this.propertyNode.props_btn_diamond.getChildByName("spr_bet_star").active = false;
	}
	
	/**飞星星 */
	private flyStar(parentNode:Node, betType: BetType) {
		const endPosition = getNodePositionInCanvas(this.getStar( parentNode, betType ));
		let starIcon = usersViewModel.comp.getPropertyNode().props_spr_icon as Node
		// let starIcon = getNodeByNameDeep("props_spr_icon",this.node.parent.getChildByName("prefabs_bandar_users"));
		const starNode  =  instantiate(starIcon);
		const startPosition = getNodePositionInCanvas(starIcon)
		starNode.active  =  true;
		this.node.addChild(starNode);
		starNode.setPosition(startPosition);
        tween(starNode).to(0.5,{scale:new Vec3(0.8,0.8)}).start();
		this.playWinRateTween(starNode, endPosition, 0.5, () => {
			
			this.scheduleOnce(() => {
				this.showWinRate(betType);
				starNode.destroy();
				if(this.isFlyStar){this.isFlyStar = false}
			}, 0.5);
		});
		
	}

	/**飞星星抛物线动画 */
	private playWinRateTween(tweenNode: Node, endPos: Vec3, playTime: number, callBack: Function) {
		const startPos  =  tweenNode.position;
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

	/** 获取点击区域的节点 */
	private getNodeByBetType(betType: BetType) {
		if (BetType.BLACK === betType) {
			return this.propertyNode.props_btn_black;
		} else if (BetType.RED === betType) {
			return this.propertyNode.props_btn_red;
		} else if (BetType.PLUM === betType) {
			return this.propertyNode.props_btn_plum;
		} else if (BetType.DIAMOND === betType) {
			return this.propertyNode.props_btn_diamond;
		} 
	}

	private getNodeToBetType(betType: number) {
		if (1 === betType) {
			return BetType.BLACK;
		} else if (2 === betType) {
			return BetType.RED;
		} else if (3 === betType) {
			return BetType.PLUM;
		} else if (4 === betType) {
			return BetType.DIAMOND;
		} 
	}
	protected destroyCallBack(): void {
		this.taskScheduler.destoryQueue();
        this.taskScheduler.stopQueue(false)
	}
	private cancelBet(cancelBetData: BetData) {
		// console.log("cancelBetData",cancelBetData);
		
		if (cancelBetData) {
			const betInfos = this.betAreaInfo.get(cancelBetData.betType);
			// console.log("betInfos",betInfos);
			if (betInfos === undefined) return;
			if (betInfos && betInfos.length > 0) {
				const chips = betInfos.find(v => v.userId === gameCacheData.memberId || v.isMe).chips;
				// console.log("chips",chips);
				
				for (let i = 0; i < chips.length; i++) {
					const chip = chips[i];
					if (chip.comp.props.value === cancelBetData.betAmount) {
						chips.splice(i, 1);
						this.chipFlyToHead(chip, undefined);
						break;
					}
				}
			}

			const betArea = this.getNodeByBetType(cancelBetData.betType).getChildByName("Layout_bet_chips");
			// this.updateBetAreaGold(cancelBetData, betArea.parent);

			const betAmount = cancelBetData.betAmount < 10000 ? cancelBetData.betAmount.formatAmountWithCommas() : cancelBetData.betAmount.formatAmountWithLetter();

			global.hallDispatch(
				addToastAction({
					position: ToastPosition.MIDDLE,
					content:
						lang.write(k => k.InitGameModule.BetFaild, {}, { placeStr: "{0} 筹码下注失败" }).format(betAmount)
				})
			)
		}
	}

	protected bindUI(): void {}

}