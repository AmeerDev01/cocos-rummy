import { _decorator,instantiate,Label,Node, Sprite, SpriteFrame, Toggle, tween, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { getNodeByNameDeep, getNodePositionInCanvas, getUUID, initToggle } from '../../../utils/tool';
import { BetData, BetType, gameCacheData, GameStatus, HeadType, SendBet, TipsVo } from '../type';
import { changeSelectChipAction, setBetDataAction, setLastBetAction, WinUser } from '../store/actions/bet';
import { mainGameViewModel, playBtnClick, playChooseChip, sourceManageSelector } from '../index';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { SpriteFramePathDefine } from '../sourceDefine/spriteDefine';
import config, { initBetData } from '../config';
import FooterViewModel from '../viewModel/BandarFooterViewModel';
import ChipViewModel from '../viewModel/BandarChipViewModel';
import { global, lang } from '../../../hall';
import { addToastAction } from '../../../hall/store/actions/baseBoard';
import { SKT_MAG_TYPE, sktInstance } from '../socketConnect';
import { betAreaViewModel } from '../viewModel/BandarGameBoardViewModel';
const { ccclass, property } = _decorator;



export interface IState {

}

export interface IProps {
	/**用户金币 */
	gold:number,
	/**上一局下注 */
	lastBet: SendBet[],
	gameStatus:GameStatus,
	allWinUsers: WinUser[],
	myInfo: HeadType,
	tips:TipsVo[]
}
export interface IEvent {
	
}


@ccclass('Bandar_footer')
export class Bandar_footer extends BaseComponent<IState, IProps, IEvent> {
	private repeatArr:SendBet[]=[];
	private amountArr:SendBet[]=[];
	public newLastArr:SendBet[]=[];
	public isRepeat: boolean = true;
	
	start() {

	 }

	protected propertyNode = {
		/**金币不足弹框提示 */
		props_layout_lock: new Node(),
		/** 重复下注按钮 */
		props_btn_auto:new Node(),
		/**金币组 */
		props_ToggleGroup:new Node(),
		/**用户头像 */
		props_user_avatar:new Node(),
		/**重复按钮动画 */
		props_animation_auto:new Node(),

		props_label_user_goldNum:new Node(),

		props_spr_bet_remind:new Node(),

		props_label_gold_up: new Node(),

		props_btn_add: new Node(),
		
		props_btn_shop: new Node(),
		/**金币不满足的提示 */
		props_tips_gold: new Node(),
		/**vip不满足的提示 */
		props_tips_vip: new Node(),
		/**不是下注时间的提示 */
		props_remind_noBet: new Node(),
		/**上一把没有下注的提示 */
		props_remind_repeat:new Node(),
		
	}

	public props: IProps = {
		gold:null,
		lastBet:null,
		gameStatus:null,
		allWinUsers: null,
		myInfo: null,
		tips:null,
	}

	public events: IEvent = {
		
	}

	protected initState() {
		return {
			
		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_auto.on(Node.EventType.TOUCH_END,()=>{
			playBtnClick()
             this.repeatBet()
		})

		this.propertyNode.props_btn_add.on(Node.EventType.TOUCH_END, () => {
			playBtnClick()
			global.openShop()
		})

		this.propertyNode.props_btn_shop.on(Node.EventType.TOUCH_END,()=>{
			playBtnClick()
			global.openShop()
		  })
	
		initToggle( this.propertyNode.props_ToggleGroup,this.node,new Bandar_footer.EventHandler(),"Bandar_footer","channelToggleCallback" );
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
        if(key === "gold"){
			this.judgeCoin(value.cur);
			this.updateLockBetState();
			// this.propertyNode.props_layout_lock.active = value.cur <= 5000 || value.cur === undefined;
			if( value.cur <= 0 || value.cur == undefined){
			  this.propertyNode.props_label_user_goldNum.getComponent(Label).string="0"
			}else{
			  this.propertyNode.props_label_user_goldNum.getComponent(Label).string=parseInt(value.cur).formatAmountWithCommas()
			}
			this.repeatArr=betAreaViewModel.comp.lastArr
			if(this.repeatArr.length!=0){
				this.resumeRepeatButtonHighlighting(value.cur,this.repeatArr)
			}

		}
		if (key === 'tips') {
			// console.log(value.cur);
			
			if (value.cur && value.cur.length > 0) {
				// this.updateLockBetState();
				this.updateTipsShow();
				
			}else {
				this.propertyNode.props_layout_lock.active = false;
			}
		}
		if (key === "myInfo") {
			global.loadHeadSprite(value.cur.icon,this.propertyNode.props_user_avatar.getComponent(Sprite));//加载头像
			// window.setTimeout(() => {
			// 	if (mainGameViewModel.isUnMount) { return }
			// 	this.propertyNode.props_label_user_goldNum.getComponent(Label).string=value.cur.gold.formatAmountWithCommas()
			// },3000)
		}


		if(key === "gameStatus"){
			if(value.cur===GameStatus.STOP_BET){

			}else{
                this.isRepeat=false;
				this.newLastArr=[]
				this.judgeCoin(this.props.gold);
				this.updateLockBetState();
			}
		}
	}


	/**Toggle选中金币的回调 效果切换*/ 
	protected channelToggleCallback(event: Event, customEventData: string) {
		playChooseChip()
		const toggleArr: Node[] = event.target["parent"].children;
		for (let i = 0; i < toggleArr.length; i++) {       
			if (toggleArr[i].getComponent(Toggle).isChecked) {
				let num=config.chipTypes[i].value;
				this.dispatch(changeSelectChipAction(num));//更新选中的金币值
				toggleArr[i].children[0].active = false;
				toggleArr[i].children[1].active = true;
			} else {
				toggleArr[i].children[0].active = true;
				toggleArr[i].children[1].active = false;
			}
		}
	}


	/**金币不足*/
	protected judgeCoin(gold){
	// 当用户的金币值小于下注的金币值时，下注金币呈现灰度，不可点击
	this.propertyNode.props_ToggleGroup.children.forEach(item=>{
		let Label_chips=getNodeByNameDeep("Label_chips",item).getComponent(Label)
		let amountNum:string=Label_chips.string
	//   item.getChildByName("spr_chips").getChildByName("Label_chips").getComponent(Label).string
		if(amountNum.charAt(amountNum.length-1)=="K"){   
			amountNum=String(Number(amountNum.substring(0,amountNum.length-1))*1000)
		}else if(amountNum.charAt(amountNum.length-1)=="M"){
			amountNum=String(Number(amountNum.substring(0,amountNum.length-1))*1000000)
		}
		if(gold<Number(amountNum) ){
			item.getChildByName("spr_chips").getComponent(Sprite).grayscale=true;
			Label_chips.font=sourceManageSelector().getFile(config.chipTypes[6].fontUrl).source
			item.getComponent(Toggle).interactable=false;
			// item.getComponent(Toggle).isChecked=false;
			item.children[0].active=true;
			item.children[1].active=false;
		}else{
			item.getChildByName("spr_chips").getComponent(Sprite).grayscale=false;
			item.getComponent(Toggle).interactable=true;

			let font=this.getFontSpriteFrame(Number(amountNum))
			
			Label_chips.font=font          
			item.getComponent(Toggle).isChecked=false;

			// 默认选中上一局最后下注的金币
			if(item.getComponent(Toggle).isChecked){
				item.children[0].active=false;
				item.children[1].active=true;
			}
		}  
	})


	}
	
	private isBetStatus(): boolean {
		// console.log("footer  this.props.gameStatus",this.props.gameStatus);
		
		return this.props.gameStatus === GameStatus.BET;
	}

	/**重复下注按钮*/ 
	protected repeatBet() { 
		this.clearRepeatBet();
         
		if (!this.isBetStatus()) {
			if (!this.propertyNode && !this.propertyNode.props_remind_noBet) { return };
			this.propertyNode.props_remind_noBet.active = true;
			tween(this.propertyNode.props_remind_noBet)
			.delay(2)
			.call(() => { 
				this.propertyNode.props_remind_noBet.active  = false;
			})
			.start()
			return
		}
		if (this.props.tips && this.props.tips.length > 0) {
			return;
		}
		// console.log("betAreaViewModel.comp.lastArr",betAreaViewModel.comp.lastArr);
		this.repeatArr = betAreaViewModel.comp.lastArr;
		// console.log("this.repeatArr", this.repeatArr)
		if (this.repeatArr.length === 0) {
			if (!this.propertyNode && !this.propertyNode.props_remind_repeat) { return };
			this.propertyNode.props_remind_repeat.active = true;
			tween(this.propertyNode.props_remind_repeat)
			.delay(2)
			.call(() => { 
				this.propertyNode.props_remind_repeat.active  = false;
			})
			.start()
			return
		}
		this.isRepeat=true;
		// this.newLastArr=[...this.props.lastBet];//重复下注成功，保留数据,如果未点击，清空
		// 恢复上一次下注的情况
		// this.resumeRepeatButtonHighlighting(this.props.gold,this.repeatArr)
		let total: number = 0;
		let type1Total: number = 0;
		let type2Total: number = 0;
		let type3Total: number = 0;
		let type4Total: number = 0;
	
		for (var i = 0; i < this.repeatArr.length; i++) { 
			total += this.repeatArr[i].gold;
			
			if (this.repeatArr[i].betType === 1) {
				type1Total += this.repeatArr[i].gold;
			}else if (this.repeatArr[i].betType === 2) {
				type2Total += this.repeatArr[i].gold;
			}else if (this.repeatArr[i].betType === 3) {
				type3Total += this.repeatArr[i].gold;
			}else if (this.repeatArr[i].betType === 4) {
				type4Total += this.repeatArr[i].gold;
			}
		}
		let betData1 = { typeTotal: type1Total, type: 1, betId:"" };
		let betData2 = { typeTotal: type2Total, type: 2, betId:"" };
		let betData3 = { typeTotal: type3Total, type: 3, betId:"" };
		let betData4 = { typeTotal: type4Total, type: 4, betId:"" };
		let lastBetArr = [betData1,betData2,betData3,betData4];
        
		if(this.props.gold>=total*6){//只有用户总金额大于所有重复下注的金币额之和 才可以下注
			// for (var i = 0; i < this.repeatArr.length; i++) {  
			// 	//下注发信息到服务器			
			// 	sktInstance.sendSktMessage(SKT_MAG_TYPE.BET_ALL, this.repeatArr[i])
			// }
			for (let i = 0; i < lastBetArr.length; i++){	
				lastBetArr[i].betId = getUUID();

				const chips: number[] = [];
				this.splitChip(lastBetArr[i].typeTotal, chips);

				chips.forEach(chip => {
					const sendBet: SendBet = {
						roomId: gameCacheData.roomId,
						memberId: this.props.myInfo.memberId,
						memberName: this.props.myInfo.memberName,
						gold: chip,
						betType: lastBetArr[i].type,
						isMe: true,
						betId: lastBetArr[i].betId,
					}

					sktInstance.sendSktMessage(SKT_MAG_TYPE.BET_ALL, sendBet)
					const betData = initBetData(this.props.myInfo.index, this.props.myInfo.memberId, lastBetArr[i].type, chip);
					betData.isMyBet = true;
					betAreaViewModel.comp.flyChip(betData);
				})
				
			}
			// betAreaViewModel.comp.amountArr.push(...betAreaViewModel.comp.lastArr)
			  
		}else{//禁止下注
			// 提示用户余额不足
			this.propertyNode.props_spr_bet_remind.active=true;
			window.setTimeout(()=>{
				this.propertyNode.props_spr_bet_remind.active=false
			},2000)
			// global.hallDispatch(addToastAction({ content: lang.write(k => k.InitGameModule.GameBoardInit, {}, { placeStr: "余额不足，您只能下注账户余额的1/6!" }) }))

			return;
		}
		
	}

	/**
   * 根据下注拆分筹码
   * @param totalBetAmount 
   */
	private splitChip(totalBetAmount: number, chips: number[]) {
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

	 
    private resumeRepeatButtonHighlighting(gold,repeatArr){
	    // console.log("repeatArr",repeatArr);
	
		let total:number=0
		for (var i = 0; i < repeatArr.length; i++) { 
			total+=this.repeatArr[i].gold
		}

		if(gold>=total*6){//只有用户总金额大于所有重复下注的金币额之和 才可以下注
			// this.propertyNode.props_btn_auto.getComponent(Sprite).grayscale=false;
			// this.propertyNode.props_animation_auto.active=true;
			this.propertyNode.props_spr_bet_remind.active=false;
				
		}else{//禁止下注
			// 提示用户余额不足

		//   global.hallDispatch(addToastAction({ content: lang.write(k => k.moduleName2.DragonTigerGlod,{},{ placeStr:"对不起，您的金币不足，请充值!" }) }));
			return;
		}
    }
	
	/**清除重复下注按钮的数据*/ 
	protected clearRepeatBet() {
		this.repeatArr=[]
	}

	public palyAddUp(betInfo){
		let node=this.propertyNode.props_label_gold_up
		node.getComponent(Label).string="+"+betInfo.gold.formatAmountWithLetter()
		const startPosition = new Vec3(node.position.x, node.position.y);
		node.active=true;
		tween(node).by(1, { position: new Vec3(0, 30) }).call(() => {
			this.scheduleOnce(() => {
				node.active = false;
				node.setPosition(startPosition);
			}, 0.5);
		}).start();
	}

	/**更新锁定下注区域状态 */
	private updateLockBetState() { 
	// 是否锁定下注  金币不足5千时出现充值弹框
		let isLockBet = this.props.gold < 5000 || this.props.gold == undefined || this.props.gold == 0;
		if (this.props.tips && this.props.tips.length > 0) {
			isLockBet = true;
		} else {
			isLockBet = false;
		}
		if (isLockBet) {
			this.updateTipsValue(this.propertyNode.props_tips_gold, String(5000));
			this.updateTipsShow();

		} 
		this.propertyNode.props_layout_lock.active = isLockBet;
		
	}

	private updateTipsShow() {
		this.propertyNode.props_tips_vip.active = false;
		this.propertyNode.props_tips_gold.active = false;

		if (this.props.tips && this.props.tips.length > 0) {
			const tips = this.props.tips[0]
			let node;
			if ('vip' === tips.name.toLowerCase()) {
				node = this.propertyNode.props_tips_vip;
			} else if ('gold' === tips.name.toLowerCase()) {
				node = this.propertyNode.props_tips_gold;
			}else if ('level' === tips.name.toLowerCase()) {
				node = this.propertyNode.props_tips_vip;
			} 
			node && this.updateTipsValue(node, tips.num);
		}

    } 
  
	private updateTipsValue(node: Node, num: string) {
        node.active = true;
		node.getChildByName('Label_lock_num').getComponent(Label).string = Number(num).formatAmountWithCommas();
		this.propertyNode.props_layout_lock.active = true;
	}
	

	private getSpriteFrame(result:number): SpriteFrame {
			let fileName = '';
			if (result === 0) {
				fileName = config.chipTypes[0].fileUrl;
			}else if (result === 1) {
				fileName = config.chipTypes[1].fileUrl;
			} else if (result === 2) {
				fileName = config.chipTypes[2].fileUrl;
			}else if (result === 3) {
				fileName = config.chipTypes[3].fileUrl;
			} else if (result === 4) {
				fileName = config.chipTypes[4].fileUrl;
			} else if (result === 5) {
				fileName = config.chipTypes[5].fileUrl;
			} else if (result === 6) {
				fileName = config.chipTypes[6].fileUrl;
			} 
			return sourceManageSelector().getFile(fileName).source;
	}
	private getFontSpriteFrame(result:number): SpriteFrame {
		let fileName = '';
		if (result === 1000) {
			fileName = config.chipTypes[0].fontUrl;
		}else if (result === 5000) {
			fileName = config.chipTypes[1].fontUrl;
		} else if (result === 10000) {
			fileName = config.chipTypes[2].fontUrl;
		}else if (result === 100000) {
			fileName = config.chipTypes[3].fontUrl;
		} else if (result === 500000) {
			fileName = config.chipTypes[4].fontUrl;
		} else if (result === 1000000) {
			fileName = config.chipTypes[5].fontUrl;
		} else if (result === 0) {
			fileName = config.chipTypes[6].fontUrl;
		} 
		return sourceManageSelector().getFile(fileName).source;
    }


	toggleCallback(event: Event, customEventData: string) {

	}

	protected bindUI(): void {
		
		this.propertyNode.props_layout_lock.active = false;
				
	}

	update(deltaTime: number) {

	}
}

