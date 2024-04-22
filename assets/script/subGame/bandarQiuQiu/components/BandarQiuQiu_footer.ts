import { _decorator, Component, Label, Node, sp, Sprite, SpriteFrame, Toggle, tween, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import config, { initBetData } from '../config';
import { changeSelectChipAction, setMemberBetAction } from '../store/actions/bet';
import { getNodeByNameDeep, getNodePositionInCanvas, getUUID, initToggle, omitStr } from '../../../utils/tool';
import { playBtnClick, playChooseChip, sourceManageSelector } from '../index';
import { betAreaViewModel } from '../viewModel/BandarQiuQiuGameBoardViewModel';
import { SKT_MAG_TYPE, sktInstance } from '../socketConnect';
import { gameCacheData, GameStatus, HeadType, SendBet, TipsVo } from '../type';
import { global, lang } from '../../../hall';
import { addToastAction } from '../../../hall/store/actions/baseBoard';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	/**用户金币 */
	gold:number,
	gameStatus:GameStatus,
	myInfo: HeadType,
	onlineNum: number,
	tips:TipsVo[]
}
export interface IEvent {

}

@ccclass('BandarQiuQiu_footer')
export class BandarQiuQiu_footer extends BaseComponent<IState, IProps, IEvent> {
	private repeatArr:SendBet[]=[];
	public newLastArr:SendBet[]=[];
	// public isRepeat:boolean=true;

	start() {
	}

	protected propertyNode = {
		/**金币不足弹框提示 */
		props_layout_lock: new Node(),
		/** 重复下注按钮 */
		props_btn_auto: new Node(),
		/**重复按钮动画 */
		props_animation_auto: new Node(),
		/**金币组 */
		props_ToggleGroup: new Node(),
		/**用户头像 */
		props_user_avatar: new Node(),
		props_label_user_goldNum: new Node(),
		props_label_gold_up: new Node(),
		props_btn_add: new Node(),
		props_btn_shop: new Node(),
		props_skeleton_win: new Node(),
		props_label_users_num: new Label(),
		props_tips_vip: new Node(),
		props_tips_gold:new Node(),
		
		props_label_userName: new Label(),
		props_remind_noBet: new Node(),
		props_remind_repeat:new Node(),
	}

	public props: IProps = {
		gold:null,
		gameStatus:null,
		myInfo: null,
		onlineNum: null,
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

		initToggle( this.propertyNode.props_ToggleGroup,this.node,new BandarQiuQiu_footer.EventHandler(),"BandarQiuQiu_footer","channelToggleCallback" );
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "gold") {
			this.judgeCoin(value.cur);
			this.updateLockBetState();
			// this.propertyNode.props_layout_lock.active = value.cur <= 5000 || value.cur === undefined;
			if( value.cur <= 0 || value.cur == undefined){
				this.propertyNode.props_label_user_goldNum.getComponent(Label).string = "0";
			}else{
				this.propertyNode.props_label_user_goldNum.getComponent(Label).string = parseInt(value.cur).formatAmountWithCommas();
			}
			this.repeatArr = betAreaViewModel.comp.lastArr;

		}
		if (key === "myInfo") {
			this.propertyNode.props_label_userName.string = omitStr(value.cur.memberName + "", 12);
			global.loadHeadSprite(value.cur.icon,this.propertyNode.props_user_avatar.getComponent(Sprite));//加载头像
		}

		if(key==="onlineNum"){
			this.propertyNode.props_label_users_num.string = value.cur + "";
		}
		if (key === 'tips') {
			if (value.cur && value.cur.length > 0) {
				// this.updateLockBetState();
				this.updateTipsShow();
			}else {
				this.propertyNode.props_layout_lock.active = false;
			}
		}

		if(key === "gameStatus"){
			if(value.cur === GameStatus.STOP_BET){

			}else{
				this.newLastArr = [];
				this.judgeCoin(this.props.gold);
				this.updateLockBetState();
				this.clearCacheData()
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
			let Label_chips = getNodeByNameDeep("Label_chips", item).getComponent(Label);
			let amountNum: string = Label_chips.string;
			if(amountNum.charAt(amountNum.length-1)=="K"){   
				amountNum = String(Number(amountNum.substring(0, amountNum.length - 1)) * 1000);
			}else if(amountNum.charAt(amountNum.length-1)=="M"){
				amountNum = String(Number(amountNum.substring(0, amountNum.length - 1)) * 1000000);
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
		this.repeatArr = betAreaViewModel.comp.lastArr;
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
		let total: number = 0;
		let type1Total: number = 0;
		let type2Total: number = 0;
		let type3Total: number = 0;
		let type4Total: number = 0;
		let type5Total: number = 0;
		let type6Total: number = 0;
		let type7Total: number = 0;
		let type8Total: number = 0;
		let type9Total: number = 0;
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
			}else if (this.repeatArr[i].betType === 5) {
				type5Total += this.repeatArr[i].gold;
			}else if (this.repeatArr[i].betType === 6) {
				type6Total += this.repeatArr[i].gold;
			}else if (this.repeatArr[i].betType === 7) {
				type7Total += this.repeatArr[i].gold;
			}else if (this.repeatArr[i].betType === 8) {
				type8Total += this.repeatArr[i].gold;
			}else if (this.repeatArr[i].betType === 9) {
				type9Total += this.repeatArr[i].gold;
			}
		}
		let betData1 = { typeTotal: type1Total, type: 1, betId:"" };
		let betData2 = { typeTotal: type2Total, type: 2, betId:"" };
		let betData3 = { typeTotal: type3Total, type: 3, betId:"" };
		let betData4 = { typeTotal: type4Total, type: 4, betId: "" };
		let betData5 = { typeTotal: type5Total, type: 5, betId:"" };
		let betData6 = { typeTotal: type6Total, type: 6, betId:"" };
		let betData7 = { typeTotal: type7Total, type: 7, betId:"" };
		let betData8 = { typeTotal: type8Total, type: 8, betId: "" };
		let betData9 = { typeTotal: type9Total, type: 9, betId:"" };
		
		let lastBetArr = [betData1,betData2,betData3,betData4,betData5,betData6,betData7,betData8,betData9];
        
		if(this.props.gold >= total){//只有用户总金额大于所有重复下注的金币额之和 才可以下注
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
			global.hallDispatch(addToastAction({ content: lang.write(k => k.palyingModule.RechangeGlod, {}, { placeStr: "对不起，您的金币不足，请充值!" }) }))

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

		
	/**清除重复下注按钮的数据*/ 
	protected clearRepeatBet() {
		this.repeatArr = [];
	}
	/**清除缓存 */
	private clearCacheData() {
		this.dispatch(setMemberBetAction(null));
		
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
	
	/** 播放其他玩家赢 动画 */
	public playWinAni(){
		// console.log("playWinAni");
		
		this.propertyNode.props_skeleton_win.active=true;
		this.propertyNode.props_skeleton_win.getComponent(sp.Skeleton).animation="animation";
	}

	/**更新锁定下注区域状态 */
	private updateLockBetState() { 
		// 是否锁定下注  金币不足5千时出现充值弹框
			let isLockBet = this.props.gold <= 5000 || this.props.gold == undefined || this.props.gold == 0;
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

	private getFontSpriteFrame(result: number): SpriteFrame {
		let fileName = '';
		if (result === config.chipTypes[0].value) {
			fileName = config.chipTypes[0].fontUrl;
		}else if (result === config.chipTypes[1].value) {
			fileName = config.chipTypes[1].fontUrl;
		} else if (result === config.chipTypes[2].value) {
			fileName = config.chipTypes[2].fontUrl;
		}else if (result === config.chipTypes[3].value) {
			fileName = config.chipTypes[3].fontUrl;
		} else if (result === config.chipTypes[4].value) {
			fileName = config.chipTypes[4].fontUrl;
		} else if (result === config.chipTypes[5].value) {
			fileName = config.chipTypes[5].fontUrl;
		} else if (result == config.chipTypes[6].value) {
			fileName = config.chipTypes[6].fontUrl;
		} 
		return sourceManageSelector().getFile(fileName).source;
	}

	protected bindUI(): void {
		this.propertyNode.props_skeleton_win.active = false;
		this.propertyNode.props_layout_lock.active = false;
	}

	update(deltaTime: number) {

	}
}

