import { _decorator, Component, Game, game, instantiate, Node, Sprite, SpriteFrame, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { gameCacheData, GameStatus, HeadType, History, MemberInfoVo } from '../type';
import { SpriteFramePathDefine } from '../sourceDefine/spriteDefine';
import { mainGameViewModel, playBtnClick, playMyLose, playMyWin, sourceManageSelector } from '../index';
import TaskScheduler, { Task } from '../../../utils/TaskScheduler';
import { betAreaViewModel, historyViewModel, loseViewModel, winViewModel } from '../viewModel/BandarQiuQiuGameBoardViewModel';
import { setMyWinLose } from '../store/actions/game';
import { SKT_MAG_TYPE, sktInstance } from '../socketConnect';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	countDown:number,
	usersInfo:MemberInfoVo[],
	myInfo:HeadType,
	myWinLose:number,
	gameStatus: GameStatus,
	// initGameType: GameStatus,
	minHistory:number[],
}
export interface IEvent {
	openHistoryPanel: () => void,
	openWinPanel:() => void,
	openLosePanel: () => void,
	sendGameShowEvent: () => void,
}

@ccclass('BandarQiuQiu_gameBoard')
export class BandarQiuQiu_gameBoard extends BaseComponent<IState, IProps, IEvent> {
	private taskScheduler=new TaskScheduler()
	public isShowGame:boolean=true;
	start() {

	}

	protected propertyNode = {
		props_btn_history: new Node(),
		props_mim_history: new Node(),
		props_history_icon:new Node(),
		props_history_icon_new:new Node(),
	}

	public props: IProps = {
		countDown: 0,
		usersInfo: null,
		// initGameType: null,
		gameStatus:null,
		myInfo: null,
		myWinLose: null,
		minHistory: null,
		
	}

	public events: IEvent = {
		openHistoryPanel: () => { },
		openWinPanel: () => { },
		openLosePanel: () => { },
		sendGameShowEvent: () => { },

	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {

		game.on(Game.EVENT_HIDE,()=>{//游戏切入后台
			this.isShowGame=false
		})
		game.on(Game.EVENT_SHOW,()=>{//游戏进入
			  this.isShowGame = true;
			  if (!mainGameViewModel.isUnMount) {
				  if (this.node) {
					  this.events.sendGameShowEvent();
				  }
			  }
			  
		})
		this.propertyNode.props_btn_history.on(Node.EventType.TOUCH_END, () => {
			playBtnClick();
			sktInstance.sendSktMessage(SKT_MAG_TYPE.HISTORY,gameCacheData.roomId)
		    this.events.openHistoryPanel()
	    })
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "myWinLose") {
			if (value.cur === 0) { return }
			this.taskScheduler.joinQueue(new Task((done) => {
				window.setTimeout(()=>{
					if (value.cur === 1) {
						playMyWin();
						this.events.openWinPanel();
						let myInfo = this.props.myInfo;
						winViewModel.comp.updateWinsAndLosses(myInfo);
						// console.log("this.props.myInfo",this.props.myInfo);
						this.closePopup()
					} else if (value.cur === 2) {
						playMyLose();
						this.events.openLosePanel();
						let myInfo = this.props.myInfo;
						loseViewModel.comp.updateWinsAndLosses(myInfo);
						// console.log("this.props.myInfo",this.props.myInfo);
						this.closePopup()
					}
				},4000)
				window.setTimeout(() => done(), 1000);
			}), false).joinQueue(new Task((done) => {
				this.dispatch(setMyWinLose(0));
				window.setTimeout(() => done(), 1000);
			}),false)
				
		}
		if (key === "minHistory") {

			window.setTimeout(() => {
				if (historyViewModel && !historyViewModel.isUnMount) {
					sktInstance.sendSktMessage(SKT_MAG_TYPE.HISTORY,gameCacheData.roomId)
				}
				this.createMinHistory(value.cur)
			}, 4000);

		}
       
	}

	/**更新小面板历史记录 */
	public createMinHistory(minHistory) {
		if (mainGameViewModel.isUnMount ) { return };
        if(!this.propertyNode){ return }
		this.propertyNode.props_mim_history.removeAllChildren();

		minHistory.forEach((m, i) => {
			let minHItem = instantiate(this.propertyNode.props_history_icon);
			minHItem.getComponent(Sprite).spriteFrame = this.getSpriteFrame(m);
			
			this.propertyNode.props_mim_history.addChild(minHItem);
			if (i === minHistory.length - 1) {
				let newX = -237.5 + (minHistory.length * 24.5);
				this.propertyNode.props_history_icon_new.setPosition(newX, this.propertyNode.props_history_icon_new.position.y)

			}
		})
	}

	/**清除缓存数据 */
	private clearTheCacheData() {
		
	}

	 /**自动关闭输赢结算弹窗*/
	 protected closePopup(){
		 if (!mainGameViewModel.isUnMount) {
		  //五秒后自动关闭结算弹框
		  // let time:number=this.initSeconds*1000
			let time: number = 3 * 1000;
			window.setTimeout(() => {
				// this.init()
				if (winViewModel != undefined) {
					if (!winViewModel.isUnMount) {
						winViewModel.unMount();
					}
				}
				if (loseViewModel != undefined) {
					if (!loseViewModel.isUnMount) {
						loseViewModel.unMount();
					}
				}
			}, time);
			betAreaViewModel.comp.clearAllBetAreaGold();
		}                
	}  
	
	/**
	 * 初始化上榜用户的数据
	 */
	public initUsers(usersInfo:MemberInfoVo[]){
		usersInfo.forEach((item,i)=>{
			item.index=i
		})
	
	}

	protected destroyCallBack(): void {
		this.taskScheduler.destoryQueue();
	}

	private getSpriteFrame(result:number): SpriteFrame {
		let fileName = '';
		if (result === 1) {
			fileName = SpriteFramePathDefine.BANDARQIUQIU_MIN_HISTORY_BLUE_WIN;
		} else if (result === 2) {
			fileName = SpriteFramePathDefine.BANDARQIUQIU_MIN_HISTORY_RED_WIN;
		} else if (result === 3) {
			fileName = SpriteFramePathDefine.BANDARQIUQIU_MIN_HISTORY_LV_WIN;
		} 
		return sourceManageSelector().getFile(fileName).source;
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

