import { _decorator, Component, Game, game, instantiate, Label, bezier,Node, Tween, tween, UIOpacity, UITransform, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { BetData, BetType, CardStatus, gameCacheData, GameStatus, HeadType, SendBet, TipsVo } from '../type';
import { setNewBetDataAction, WinUser } from '../store/actions/bet';
import ChipViewModel from '../viewModel/BandarQiuQiuChipViewModel';
import TaskScheduler, { Task } from '../../../utils/TaskScheduler';
import { formatNumber, getNodeByNameDeep, getNodePositionInCanvas } from '../../../utils/tool';
import config, { initBetData } from '../config';
import { SKT_MAG_TYPE, sktInstance } from '../socketConnect';
import { mainGameViewModel, playChip, playGetCoin, sourceManageSelector } from '../index';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { footerViewModel, usersViewModel } from '../viewModel/BandarQiuQiuGameBoardViewModel';
import { global, lang } from '../../../hall';
import { ToastPosition, addToastAction } from '../../../hall/store/actions/baseBoard';
const { ccclass, property } = _decorator;


type BetInfo = {
	index: number,
	userId: string,
	isMe: boolean,
	chips: ChipViewModel[]
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
	goldData: object,
	/**赢的区域 计算出倍率 */
	winAreaRate:number[],
	allWinUsers:WinUser[],
	lastBet: SendBet[],
	cancelBetData:BetData,
	memberBet: object,
	tips: TipsVo[],
}

export interface IEvent {

}

@ccclass('BandarQiuQiu_betArea')
export class BandarQiuQiu_betArea extends BaseComponent<IState, IProps, IEvent> {
	private betLoading = false;
	private betAreaInfo: Map<BetType, BetInfo[]> = new Map();
	// 是否锁定下注
	private isLockBet: boolean = false;
	private tweens: Tween<UIOpacity>[] = [];
	private isShowGame: boolean = true;
	private isFlyStar: boolean = false;
	private areaInfo :BetType[] = [1,2,3,4,5,6,7,8,9];
	public lastArr:SendBet[] = [];
	public amountArr:SendBet[] = [];
	private taskScheduler = new TaskScheduler()
	start() {
      
	}

	protected propertyNode = {
		props_btn_blue_win: new Node(),
		props_btn_blue_twin: new Node(),
		props_btn_blue_qiu: new Node(),
		props_btn_red_win: new Node(),
		props_btn_red_twin: new Node(),
		props_btn_red_qiu: new Node(),
		props_btn_green_win: new Node(),
		props_btn_green_twins: new Node(),
		props_btn_green_qiuqiu:new Node(),
	}

	public props: IProps = {
		gameStatus:null,
		gold:0,
		selectChip:1000,
		myInfo:null,
		newBetData:null,
		winArea:null,
		goldData:null,
		winAreaRate:null,
		allWinUsers:null,
		lastBet: [],
		cancelBetData:null,
		memberBet: null,
		tips:null,
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
		this.propertyNode.props_btn_blue_qiu.on(Node.EventType.TOUCH_END, () => { this.myBet(BetType.BLUE_QIU) });
		this.propertyNode.props_btn_blue_twin.on(Node.EventType.TOUCH_END, () => { this.myBet(BetType.BLUE_TWIN) });
		this.propertyNode.props_btn_blue_win.on(Node.EventType.TOUCH_END, () => { this.myBet(BetType.BLUE) });
		this.propertyNode.props_btn_red_qiu.on(Node.EventType.TOUCH_END, () => { this.myBet(BetType.RED_QIU) });
		this.propertyNode.props_btn_red_twin.on(Node.EventType.TOUCH_END, () => { this.myBet(BetType.RED_TWIN) });
		this.propertyNode.props_btn_red_win.on(Node.EventType.TOUCH_END, () => { this.myBet(BetType.RED) });
		this.propertyNode.props_btn_green_qiuqiu.on(Node.EventType.TOUCH_END, () => { this.myBet(BetType.GREEN_QIU) });
		this.propertyNode.props_btn_green_twins.on(Node.EventType.TOUCH_END, () => { this.myBet(BetType.GREEN_SIX_TWINS) });
		this.propertyNode.props_btn_green_win.on(Node.EventType.TOUCH_END, () => { this.myBet(BetType.GREEN_DRAW) });
 
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "newBetData" && value.cur) {
			if (!value.cur) { return }
			if (value.cur.memberId === gameCacheData.memberId) { return };
			this.flyChip(value.cur)
		}
		if (key === 'cancelBetData') {			
			this.cancelBet(value.cur);
		}
		if (key === "goldData") {
			if (!value.cur || value.cur === undefined) { return };
			if(value.cur && Object.keys(value.cur).length != 0){   
				for (let key in value.cur) {
					let areaNode = this.getNodeByBetType(this.getNodeToBetType(Number(key)))
						getNodeByNameDeep("label_bet_all", areaNode).getComponent(Label).string = formatNumber(value.cur[key]);
				}
			  }   
		}
		if (key === "memberBet") {
			if (!value.cur || value.cur === undefined) { return };
			if (Object.keys(value.cur).length != 0) { 
			  for(let key in value.cur){
				let areaNode = this.getNodeByBetType(this.getNodeToBetType(Number(key)))
					if(value.cur[key] === 0){
						getNodeByNameDeep("label_bet_mine", areaNode).getComponent(Label).string = ""
					} else {
						getNodeByNameDeep("spr_bet_bg", areaNode).active = true;
						getNodeByNameDeep("label_bet_mine", areaNode).getComponent(Label).string = formatNumber(value.cur[key]);
					}
			  }
			}
	    }
		if (key === "gameStatus") {  
			if (value.cur === GameStatus.STOP_BET) {
				if (mainGameViewModel.isUnMount) { return }
				this.lastArr=[...this.amountArr];
				this.taskScheduler.joinqQueue(new Task((done) => {
					window.setTimeout(() => {
						if (mainGameViewModel.isUnMount) { return }
						if (value.cur === GameStatus.STOP_BET && this.props) {
							
							this.playWinAnimation(this.props.winAreaRate);
							this.flyToHeGuan();
						}	
					},6000)
					
					window.setTimeout(() => done(), 1000)
				}),false).joinqQueue(new Task((done) => {
					window.setTimeout(() => {
						if(mainGameViewModel.isUnMount){ return }
						this.flyChipToWinArea();
					},6000)

					window.setTimeout(() => done(), 1000)
				}),false)
			
			}else if(value.cur === GameStatus.WAIT){
				this.betAreaInfo.clear();
				this.clearAllBetAreaGold();
			} else if (value.cur === GameStatus.BET) {
				this.betLoading = false;
				this.clearBetWinAreaAni(this.areaInfo)
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
					
				}, 2000)
				
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
								//   onlineViewModel.comp.playWinAni()
							}
						}else{
							footerViewModel.comp.palyAddUp(item)
						}
						
					})
				},2000)
			
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
	}

	private isBetStatus(): boolean {
		console.log(this.props.gameStatus);
		
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
		if (this.isLockBet = this.props.gold <= 5000) {
			// 提示用户余额不足
			global.hallDispatch(addToastAction({ content: lang.write(k => k.palyingModule.RechangeGlod, {}, { placeStr: "对不起，您的金币不足，请充值!" }) }));
			return;
		}
		const betData = initBetData(this.props.myInfo.index, this.props.myInfo.memberId, betType, this.props.selectChip);
		betData.isMyBet = true;//当前用户是否下注
		this.betLoading = true;
		const sendBet:SendBet = {
			roomId: gameCacheData.roomId,
            memberId: this.props.myInfo.memberId,
            memberName: this.props.myInfo.memberName,
            gold: betData.betAmount,
            betType: betData.betType,
			isMe: betData.isMyBet,
			betId:betData.betId

		}
	   // 下注信息发送给服务器
	   sktInstance.sendSktMessage(SKT_MAG_TYPE.BET_ALL, sendBet);
	   this.flyChip(betData);
	  
	//    this.amountArr.push(sendBet);
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
		const betArea = this.getNodeByBetType(betData.betType).getChildByName("Layout_bet");
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
			// chipNode.setPosition(startPosition)
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

		this.updateBetAreaGold(betData, betArea.parent);
	}

	/**下注总筹码 */
	private updateAllBet(){
		// for(let key in gameCacheData.goldData){
		// 	let areaNode = this.getNodeByBetType(this.getNodeToBetType(Number(key)))
		// 	// if(gameCacheData.goldData[key] === 0){
		// 	// 	getNodeByNameDeep("label_bet_all", areaNode).getComponent(Label).string = ""
		// 	// }else{
		// 		getNodeByNameDeep("label_bet_all", areaNode).getComponent(Label).string = formatNumber(gameCacheData.goldData[key]);
		// 	// }
		// }
	}

    /**清除所有下注区域的金币 */
	public clearAllBetAreaGold() {
		// this.dispatch(changeGoldDataAction({}))
		this.clearBetAreaGold(this.propertyNode.props_btn_blue_qiu);
		this.clearBetAreaGold(this.propertyNode.props_btn_blue_twin);
		this.clearBetAreaGold(this.propertyNode.props_btn_blue_win);
		this.clearBetAreaGold(this.propertyNode.props_btn_green_qiuqiu);
		this.clearBetAreaGold(this.propertyNode.props_btn_green_twins);
		this.clearBetAreaGold(this.propertyNode.props_btn_green_win);
		this.clearBetAreaGold(this.propertyNode.props_btn_red_qiu);
		this.clearBetAreaGold(this.propertyNode.props_btn_red_twin);
		this.clearBetAreaGold(this.propertyNode.props_btn_red_win);
		this.hideAllWinRate();
		this.areaInfo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		this.clearBetWinAreaAni(this.areaInfo)
		this.hideWinSprite();
		this.amountArr = [];	
	}

	private clearBetAreaGold(betArea: Node) {
		betArea.getChildByName("Layout_bet").removeAllChildren();
		
		this.updateBetAreaGold({
			index: 0, memberId: "", betAmount: 0, betType: null, totalBetAmount: 0, meTotalBetAmount: 0
		}, betArea);
	}

	/** 隐藏当前玩家下注金币值 */
	private hideBetMine() {
		if (!this.node || !this.node.isValid) return;
		this.node.children.filter(v => v.name.startsWith("props_btn_")).forEach(v => {
			v.getChildByName("spr_bet_bg").active = false;
		})
	}

	/**
	 * 隐藏下注区域的高亮
	 */
	private hideWinSprite() {
		this.node.children.filter(v => v.name.startsWith("props_btn_")).forEach(v => {
			v.getChildByName("sprite_animation_Win").getComponent(UIOpacity).opacity = 0;
		})

		if (this.tweens) {
			this.tweens.forEach(v => v.stop());
			this.tweens = [];
		}
	}

	/**清除赢的区域动画 */
	private clearBetWinAreaAni(winArea){
		winArea.forEach(item=>{
			let winAreaNode = this.getNodeByBetType(item);
			getNodeByNameDeep("sprite_animation_Win",winAreaNode).active = false;
		})
	}
	
	/** 播放赢的区域动画效果 */
	public playWinAnimation(winArea) {	

		if (!winArea|| winArea.length === 0  ) {
			return
		}
		winArea.forEach((item,index)=>{
             let winAreaNode = this.getNodeByBetType(item);
			 getNodeByNameDeep("sprite_animation_Win",winAreaNode).active = true;
		 	const uiOpacity = this.getNodeByBetType(item).getChildByName("sprite_animation_Win").getComponent(UIOpacity) as UIOpacity;
			const t = tween(uiOpacity).repeatForever(tween().to(0.5, { opacity: 255 }).to(0.5, { opacity: 0 }));
			t.start();
			this.tweens.push(t);
		 })
	}

	/** 下注总值 用户下注值 */
	private updateBetAreaGold(betData: BetData, betArea: Node): void {
		if (betData.totalBetAmount === 0) {			
			getNodeByNameDeep("label_bet_all", betArea).getComponent(Label).string = "0"; 
			getNodeByNameDeep("label_bet_mine", betArea).getComponent(Label).string = "";
			getNodeByNameDeep("label_bet_mine", betArea).parent.active = betData.meTotalBetAmount > 0;
		} else {
			// getNodeByNameDeep("label_bet_all", betArea).getComponent(Label).string = formatNumber(this.props.goldData);
		}

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
			if(!this.props.winAreaRate){//没有中奖区域
				v.forEach(betInfo => {
					chips = chips.concat(betInfo.chips);
				});
			}
			// 找出未中奖的区域
			if(this.props.winAreaRate){
				// playGetCoin()
				if (!this.props.winAreaRate.find(betType => betType === k)) {
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
		if( mainGameViewModel.isUnMount ){ return }
		if(!this.props || !this.props.goldData || !this.props.winAreaRate ){//没有任何下注 没有赢的区域
			return
		}else{
			playGetCoin()
		}
		this.props.winAreaRate.forEach((item,index)=>{
			const betData = { betType:item, betAmount:this.props.goldData[item]};
			this.flyWinChip(betData,index)
		})
	}

	/** 赢的区域飞金币到用户头像 */
	private flyWinAreaToUser(betInfo,isFly: boolean = true): void{
		if(!this.props.winAreaRate ){ return}
		this.props.winAreaRate.forEach(v => {
			const betInfos = this.betAreaInfo.get(v);
					console.log("betInfos",betInfos);
			if (betInfos) {
				betInfos.forEach(betInfo => {
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
		let odds=this.getNodeToBetRateType(this.props.winAreaRate[index])
		const betArea = this.getNodeByBetType(winBetData.betType).getChildByName("Layout_bet");
		const copyBetInfo = this.copyBetInfo(betInfos, betArea, odds);
		let chips: ChipViewModel[] = [];
		copyBetInfo.forEach(v => chips = chips.concat(v.chips));
		const uiTransform = this.node.getComponent(UITransform);
		chips.forEach(v => {
			const startPosition = new Vec3 (config.gameOption.dealerPosition.x,config.gameOption.dealerPosition.y);
			const endPositon = this.randomBetEndPosition(betArea);

			const chipNode = v.comp.node;
			chipNode.setWorldPosition(uiTransform.convertToWorldSpaceAR(startPosition));

			tween(chipNode).to(1, { position: endPositon },{easing: 'quintOut'})
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
		this.getStar( betType ).active  =  true;
	}

	/**获得星星 */
	private getStar(betType: BetType) {
		return this.node.children.find(winRate => winRate.name.startsWith("props_win_rate_max_" + betType));
	}

	/** 隐藏星星 */
	private hideAllWinRate() {
		if (!this.node || !this.node.isValid) return;
		this.node.children.filter(winRate => winRate.name.startsWith("props_win_rate_max")).forEach(v => v.active = false);
	}
	
	/**飞星星 */
	private flyStar(parentNode:Node, betType: BetType) {
		const endPosition = getNodePositionInCanvas(this.getStar(  betType ));
		let starIcon = usersViewModel.comp.getPropertyNode().props_spr_icon as Node
		// let starIcon = getNodeByNameDeep("props_spr_icon",this.node.parent.getChildByName("prefabs_bandar_users"));
		const starNode  =  instantiate(starIcon);
		const startPosition = getNodePositionInCanvas(starIcon)
		starNode.active = true;
		this.node.addChild(starNode);
		starNode.setPosition(startPosition);
        tween(starNode).to(1,{scale:new Vec3(1.2,1.2)}).start();
		this.playWinRateTween(starNode, endPosition, 1, () => {
			
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
		if (BetType.BLUE === betType) {
			return this.propertyNode.props_btn_blue_win;
		} else if (BetType.BLUE_QIU === betType) {
			return this.propertyNode.props_btn_blue_qiu;
		} else if (BetType.BLUE_TWIN === betType) {
			return this.propertyNode.props_btn_blue_twin;
		} else if (BetType.GREEN_DRAW === betType) {
			return this.propertyNode.props_btn_green_win;
		} else if (BetType.GREEN_QIU === betType) {
			return this.propertyNode.props_btn_green_qiuqiu
		} else if (BetType.GREEN_SIX_TWINS === betType) {
			return this.propertyNode.props_btn_green_twins;
		} else if (BetType.RED === betType) {
			return this.propertyNode.props_btn_red_win;
		} else if (BetType.RED_QIU === betType) {
			return this.propertyNode.props_btn_red_qiu;
		} else if (BetType.RED_TWIN === betType) {
			return this.propertyNode.props_btn_red_twin;
		} 
	}

	private getNodeToBetType(betType: number) {
		if (1 === betType) {
			return BetType.BLUE
		} else if (2 === betType) {
			return BetType.BLUE_QIU;
		}else if (3 === betType) {
			return BetType.BLUE_TWIN;
		}  else if (4 === betType) {
			return BetType.RED;
		} else if (5 === betType) {
			return BetType.RED_QIU;
		} else if (6 === betType) {
			return BetType.RED_TWIN;
		} else if (7 === betType) {
			return BetType.GREEN_DRAW;
		} else if (8 === betType) {
			return BetType.GREEN_QIU;
		} else if (9 === betType) {
			return BetType.GREEN_SIX_TWINS;
		}
	}
	private getNodeToBetRateType(winArea: number) {
		if (1 === winArea || winArea === 4) {
			return CardStatus.NORMAL
		} else if (2 === winArea || winArea === 5) {
			return CardStatus.QIU;
		}else if (3 === winArea || winArea === 6) {
			return CardStatus.TWIN;
		} else if (7 === winArea) {
			return CardStatus.GREEN_DRAW;
		} else if (8 === winArea) {
			return CardStatus.GREEN_QIU;
		} else if (9 === winArea) {
			return CardStatus.GREEN_SIX_TWINS;
		}
	}
	protected destroyCallBack(): void {
		this.taskScheduler.destoryQueue();
        this.taskScheduler.stopQueue(false)
	}
	protected removeComma(str){
		const newStr = str.replace(/,/g,"")
		return newStr
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

	private cancelBet(cancelBetData: BetData) {
		console.log("cancelBetData",cancelBetData);
		
		if (cancelBetData) {
			const betInfos = this.betAreaInfo.get(cancelBetData.betType);
			console.log("betInfos",betInfos);
			if (betInfos === undefined) return;
			if (betInfos && betInfos.length > 0) {
				const chips = betInfos.find(v => v.userId === gameCacheData.memberId || v.isMe).chips;
				console.log("chips",chips);
				
				for (let i = 0; i < chips.length; i++) {
					const chip = chips[i];
					if (chip.comp.props.value === cancelBetData.betAmount) {
						chips.splice(i, 1);
						this.chipFlyToHead(chip, undefined);
						break;
					}
				}
			}

			const betArea = this.getNodeByBetType(cancelBetData.betType).getChildByName("Layout_bet");
			this.updateBetAreaGold(cancelBetData, betArea.parent);

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
	protected bindUI(): void {
		this.hideAllWinRate();
		this.hideWinSprite();
		this.hideBetMine();
	}

	update(deltaTime: number) {

	}
}

