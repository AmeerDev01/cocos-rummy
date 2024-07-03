import { _decorator, Node, Animation, Label, game, Game } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { initToggle } from '../../../utils/tool';
import { GameStatus } from '../type';
import { mainGameViewModel, playGame, playTimeout, stopBet } from '../index';
import { sendCardsViewModel } from '../viewModel/BandarQiuQiuGameBoardViewModel';
import TaskScheduler, { Task } from '../../../utils/TaskScheduler';
const { ccclass, property } = _decorator;



export interface IState {

}

export interface IProps {
	gameStatus: GameStatus,
	layCountDown: number,
	countDown:number,
}
export interface IEvent {
	
}


@ccclass('BandarQiuQiu_begin')
export class BandarQiuQiu_begin extends BaseComponent<IState, IProps, IEvent> {
	private taskScheduler = new TaskScheduler();
	private isShowGame: boolean = true;
	start() {
      
	  
	 }

	protected propertyNode = {
		props_spr_begin_bg: new Node(),
		props_spr_startBeil_text: new Node(),
		props_spr_stopBeil_text: new Node(),
		props_spr_countdown_bg: new Node(),
		props_label_clockNum:new Label(),
	}

	public props: IProps = {
		gameStatus: null,
		layCountDown: 0,
		countDown:0,
	}

	public events: IEvent = {
		
	}

	protected initState() {
		return {
			
		}
	}

	protected bindEvent(): void {
		game.on(Game.EVENT_HIDE,()=>{//游戏切入后台
            this.isShowGame = false;
		})
		game.on(Game.EVENT_SHOW,()=>{//游戏进入
			  this.isShowGame = true;
			  if (!mainGameViewModel.isUnMount) {
				  if (this.node) {
					  
				  }
			  }
			  
		})

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "layCountDown") {
			if (value.cur > 0) {
				this.propertyNode.props_label_clockNum.string = value.cur + "";
			} 
			
		}
		if (key === "gameStatus") {
			if (value.cur === GameStatus.BET) {
				this.playBeginAnim();
				this.propertyNode.props_spr_stopBeil_text.active = false;
				this.propertyNode.props_spr_startBeil_text.active = true;

			} else if (value.cur === GameStatus.STOP_BET) {			
				this.playBeginAnim();
				this.propertyNode.props_spr_startBeil_text.active = false;
				this.propertyNode.props_spr_stopBeil_text.active = true;
			} else if (value.cur === GameStatus.WAIT) {
				this.playLayAnim();
			} else if (value.cur === GameStatus.QUIT_GAME) {
				
			}
		}
		
	}
    /**播放开始动画 */
	private playBeginAnim() {
		if (!this.isShowGame) {
			this.propertyNode.props_spr_countdown_bg.active = false;
			this.propertyNode.props_spr_begin_bg.active = false;
			return
		}
		if (this.props.gameStatus === 1) {
			
			if (this.props && this.props.countDown && this.props.countDown < 5) { return };
			console.log("this.props.countDown",this.props.countDown);
		}

		
		playGame();
		if (this.props.gameStatus === 2) {
			stopBet()
		}
		// console.log("this.props.gameStatus",this.props.gameStatus);
		this.propertyNode.props_spr_countdown_bg.active = false;
		this.propertyNode.props_spr_begin_bg.active = true;

        let animation = this.propertyNode.props_spr_begin_bg.getComponent(Animation);
        animation.play()
        animation.on(Animation.EventType.FINISHED,()=>{
			this.propertyNode.props_spr_begin_bg.active = false;
        },this)
	}
	/**播放等待动画 */
	private playLayAnim() {
		if (!this.isShowGame) {
			this.propertyNode.props_spr_countdown_bg.active = false;
			this.propertyNode.props_spr_begin_bg.active = false;
			return
		}
		if (this.props && this.props.layCountDown && this.props.layCountDown < 3) { return };
		console.log("this.props.layCountDown",this.props.layCountDown);
				
		playTimeout();
		this.propertyNode.props_spr_begin_bg.active = false;
		this.propertyNode.props_spr_countdown_bg.active = true;

		let animation = this.propertyNode.props_spr_countdown_bg.getComponent(Animation);
		animation.play();
		animation.on(Animation.EventType.FINISHED,()=>{
			this.propertyNode.props_spr_countdown_bg.active = false;
		},this)
	}

	protected bindUI(): void {
		this.propertyNode.props_spr_startBeil_text.active = false;
		this.propertyNode.props_spr_stopBeil_text.active = false;
		this.propertyNode.props_spr_countdown_bg.active = false;
		this.propertyNode.props_spr_begin_bg.active = false;
	}

	update(deltaTime: number) {

	}
}

