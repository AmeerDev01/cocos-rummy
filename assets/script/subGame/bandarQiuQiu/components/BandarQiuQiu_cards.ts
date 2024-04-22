import { _decorator, Node, Animation, Label, SpriteFrame, Sprite, Color, sp, Vec3, game, Game, instantiate } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { getNodeByNameDeep, getNodePositionInCanvas } from '../../../utils/tool';
import { GameStatus, TwinNum } from '../type';
import config from '../config';
import { SpriteFramePathDefine } from '../sourceDefine/spriteDefine';
import { mainGameViewModel, playPK, playTurnCard, sourceManageSelector } from '../index';
import TaskScheduler, { Task } from '../../../utils/TaskScheduler';
import { sendCardsViewModel } from '../viewModel/BandarQiuQiuGameBoardViewModel';
import { CardType } from '../store/actions/bet';
import SkeletonAnimationPlayer from '../SkeletonPlay';

const { ccclass, property } = _decorator;



export interface IState {
	cardType: CardType,   
}

export interface IProps {
	countDown: number,
	gameStatus: GameStatus,
	blueCard: number[],
	redCard: number[],
	twinNum: TwinNum,
	cardType: CardType,
	
}
export interface IEvent {
	
}


@ccclass('BandarQiuQiu_cards')
export class BandarQiuQiu_cards extends BaseComponent<IState, IProps, IEvent> {
	private taskScheduler = new TaskScheduler();
	private isShowGame: boolean = true;
	// private backCard: Node = null;
	start() {
		
	}

	protected propertyNode = {
		props_layout_cards:new Node(),
		props_spr_clock_bg: new Node(),
		props_label_clock_num: new Node(),

		props_skeleton_blue_cardType: new Node(),
		props_skeleton_red_cardType: new Node(),
		props_spr_blue_win_bg: new Node(),
		props_spr_red_win_bg: new Node(),

		props_node_card_back: new Node(),
		props_note_blue_cardBack: new Node(),
		props_note_red_cardBack: new Node(),
		props_spr_blueCard1: new Node(),
		props_spr_blueCard2: new Node(),
		props_spr_redCard1: new Node(),
		props_spr_redCard2: new Node(),
		props_note_card_roll: new Node(),
		props_spr_blue_roll_card1: new Node(),
		props_spr_blue_roll_card2: new Node(),
		props_spr_red_roll_card1: new Node(),
		props_spr_red_roll_card2: new Node(),

		props_label_blue_winNum: new Label(),
		props_label_red_loseNum: new Label(),
		
		props_skleton_commpare_bg: new Node(),
		props_skleton_commpare_vs: new Node(),
	}

	public props: IProps = {
		countDown: 0,
		gameStatus: null,
		blueCard: null,
	    redCard: null,
		twinNum: null,
		cardType:null,
	}

	public events: IEvent = {
		
	}

	protected initState() {
		return {
			cardType: null,
			
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
		if (key === "countDown") { 
			// console.log("countDown",value.cur);
			
			if (value.cur <= 15 && value.cur > 0) {
				this.propertyNode.props_node_card_back.active = true;
			}
			if (value.cur > 0) {
				this.propertyNode.props_spr_clock_bg.active = true;
				this.propertyNode.props_label_clock_num.getComponent(Label).string = value.cur + ""
			}else {
				this.propertyNode.props_spr_clock_bg.active = false;
			}
		}
		if (key === "gameStatus") {
			console.log("gameStatus",value.cur);
			
			if (value.cur === GameStatus.BET) {
				// this.propertyNode.props_node_card_back.active = true;

				this.initialCardState()
			} else if (value.cur === GameStatus.STOP_BET) {
				window.setTimeout(() => {
				    this.playAnimation()
				},2000)
				
			} else if (value.cur === GameStatus.WAIT) {
				this.initCardActive();
				this.initialCardState();
			}
			
		}
		if (key === "blueCard") {}
		if (key === "redCard") {}
		if (key === "cardType") {
			if(!value.cur){ return }
			if (value.cur.blueType > value.cur.redType) {
				this.propertyNode.props_label_blue_winNum.color = new Color().fromHEX("#FFD119");
				this.propertyNode.props_label_red_loseNum.color = new Color().fromHEX("#FFFFFF");
			} else  if (value.cur.blueType < value.cur.redType) {
				this.propertyNode.props_label_red_loseNum.color = new Color().fromHEX("#FFD119");
				this.propertyNode.props_label_blue_winNum.color = new Color().fromHEX("#FFFFFF");
			} else if (value.cur.greenType > 0) {
				this.propertyNode.props_label_blue_winNum.color = new Color().fromHEX("#FFD119");
				this.propertyNode.props_label_red_loseNum.color = new Color().fromHEX("#FFD119");
			}
		}
		if (key === "twinNum") {
			if(!value.cur){ return }
			this.comparePoints(value.cur)
		}
		
	}

	/**初始牌节点的激活状态 */
	private initCardActive() {
		this.propertyNode.props_spr_red_win_bg.active = false;
		this.propertyNode.props_spr_blue_win_bg.active = false;
		this.propertyNode.props_skeleton_blue_cardType.active = false;
		this.propertyNode.props_skeleton_red_cardType.active = false;
		this.propertyNode.props_note_card_roll.active = false;
		this.propertyNode.props_node_card_back.active = false;
		this.propertyNode.props_skleton_commpare_bg.active = false;
		this.propertyNode.props_skleton_commpare_vs.active = false;
		this.propertyNode.props_spr_clock_bg.active = false;
	}

	/**播放 移动牌 翻牌 动画 */
	private playAnimation() {
		console.log("this.isShowGame22",this.isShowGame);
		if (!this.isShowGame) {
			this.initialCardState();
			return
		};
		if (mainGameViewModel.isUnMount) { return };
		//避免使用原始节点在弱网情况下播放动画后卡帧，每次克隆，让动画保持初始状态。
		let backCard = instantiate(this.propertyNode.props_node_card_back);
		this.propertyNode.props_node_card_back.active = false;
		backCard.active = true;
		this.propertyNode.props_layout_cards.parent.addChild(backCard);
		this.taskScheduler.joinQueue(new Task((done) => {
			this.propertyNode.props_skleton_commpare_bg.active = true;
			window.setTimeout(()=>done(),300)
		}), false).joinQueue(new Task((done) => {
			playPK();
			console.log("backCard",backCard,backCard.getComponent(Animation));
			backCard.getComponent(Animation).play("animation_cardBack_move");
			// this.propertyNode.props_node_card_back.getComponent(Animation).play("animation_cardBack_move");

			this.propertyNode.props_skleton_commpare_vs.active = true;
			window.setTimeout(()=>done(),1500)
		}), false).joinQueue(new Task((done) => {
			backCard.getComponent(Animation).play("animation_cardBack_roll");
			// this.propertyNode.props_node_card_back.getComponent(Animation).play("animation_cardBack_roll");
			window.setTimeout(()=>done(),200)
		}), false).joinQueue(new Task((done) => {
			playTurnCard();
			if (backCard && backCard.isValid) {
				backCard.active = false;
				backCard.destroy();
				backCard = null;
			}
			// this.propertyNode.props_node_card_back.active = false;
			this.propertyNode.props_note_card_roll.active = true;
			// this.propertyNode.props_node_card_back.getComponent(Animation).stop();
			this.propertyNode.props_note_card_roll.getComponent(Animation).play("animation_card_roll");

			console.log(this.props.blueCard,this.props.redCard);
			// this.initCardBack();
			this.initialCardState()
			this.changeCardUpDown(this.props.blueCard,this.props.redCard)
			window.setTimeout(()=>done(),1500)
		}),false).joinQueue(new Task((done) => {
			this.propertyNode.props_note_card_roll.getComponent(Animation).play("animation_card_move");
			this.propertyNode.props_skleton_commpare_bg.active = false;
			this.propertyNode.props_skleton_commpare_vs.active = false;
			window.setTimeout(()=>done(),500)
		}), false).joinQueue(new Task((done) => {
			if (!this.props || !this.props.cardType || !this.props.twinNum) return
			console.log("this.props.twinNum",this.props.twinNum,this.props.cardType);
			this.playWinBg(this.props.twinNum,this.props.cardType)
			if (this.props.cardType.greenType > 0) {
				let ani = this.getGreenCardTypeSkeleton(this.props.cardType.greenType);
				this.propertyNode.props_skeleton_blue_cardType.active = true;
			    this.propertyNode.props_skeleton_red_cardType.active = true;
				new SkeletonAnimationPlayer(this.propertyNode.props_skeleton_blue_cardType.getComponent(sp.Skeleton), ani, false).playAnimation();
				new SkeletonAnimationPlayer(this.propertyNode.props_skeleton_red_cardType.getComponent(sp.Skeleton), ani, false).playAnimation();
			}
			if (this.props.cardType.blueType > 0) {
				let ani = this.getBlueRedCardTypeSkeleton(this.props.cardType.blueType);
				this.propertyNode.props_skeleton_blue_cardType.active = true;
				new SkeletonAnimationPlayer(this.propertyNode.props_skeleton_blue_cardType.getComponent(sp.Skeleton), ani, false).playAnimation();	
			}
			if (this.props.cardType.redType > 0) {
				let ani = this.getBlueRedCardTypeSkeleton(this.props.cardType.redType);
				this.propertyNode.props_skeleton_red_cardType.active = true;				
				new SkeletonAnimationPlayer(this.propertyNode.props_skeleton_red_cardType.getComponent(sp.Skeleton), ani, false).playAnimation();
			}
			
			window.setTimeout(()=>done(),500)
		}),false).joinQueue(new Task((done) => {
			this.initialCardState();
			// console.log("parent",this.propertyNode.props_layout_cards.parent);
			
			window.setTimeout(()=>done(),500)
		}),false)
		
	}

	
	/**更改牌的点数 */
	public changeCardUpDown(blueCard,redCard) {
		if (!blueCard || !redCard ) { return };
		// if (!redCard ) { return };
		blueCard.forEach((b,i) => {
			let itemCard = this.getCard(b);
			let num = i + 1;
			let card = getNodeByNameDeep("props_spr_blue_roll_card" + num, this.propertyNode.props_note_card_roll);
			getNodeByNameDeep("spr_cardNum_up", card).getComponent(Sprite).spriteFrame = this.getSpriteFrame(itemCard.up);
			getNodeByNameDeep("spr_cardNum_down", card).getComponent(Sprite).spriteFrame = this.getSpriteFrame(itemCard.down);
	
		})
		redCard.forEach((r,i) => {
			let itemCard = this.getCard(r);
			let num = i + 1;
			let card = getNodeByNameDeep("props_spr_red_roll_card" + num, this.propertyNode.props_note_card_roll);
			getNodeByNameDeep("spr_cardNum_up", card).getComponent(Sprite).spriteFrame = this.getSpriteFrame(itemCard.up);
			getNodeByNameDeep("spr_cardNum_down", card).getComponent(Sprite).spriteFrame = this.getSpriteFrame(itemCard.down);
			
		})
	}

	/**比较点数，更改labelNum颜色 */

	private comparePoints(twins:TwinNum) {
		if (twins) {
			this.propertyNode.props_label_blue_winNum.string = twins.blueNum + "";
			this.propertyNode.props_label_red_loseNum.string = twins.redNum + "";
			this.propertyNode.props_label_blue_winNum.color = new Color().fromHEX("#FFFFFF");
			this.propertyNode.props_label_red_loseNum.color = new Color().fromHEX("#FFFFFF");

			if (twins.blueNum > twins.redNum) {
				this.propertyNode.props_label_blue_winNum.color = new Color().fromHEX("#FFD119");
			} else if(twins.blueNum < twins.redNum){
				this.propertyNode.props_label_red_loseNum.color = new Color().fromHEX("#FFD119");
			} else if (twins.blueNum === twins.redNum) {
				this.propertyNode.props_label_blue_winNum.color = new Color().fromHEX("#FFD119");
				this.propertyNode.props_label_red_loseNum.color = new Color().fromHEX("#FFD119");
			}		
		}
	}

	/**比较点数 和特殊牌型，判断是否展示赢的光圈 */
	public playWinBg(twins: TwinNum,cardType) {
		
		if (cardType) {
			if (cardType.blueType > cardType.redType) {
				this.propertyNode.props_spr_blue_win_bg.active = true;
				this.propertyNode.props_spr_red_win_bg.active = false;

			} else  if (cardType.blueType < cardType.redType) {
				this.propertyNode.props_spr_red_win_bg.active = true;
				this.propertyNode.props_spr_blue_win_bg.active = false;

			} else if(cardType.greenType <= 0){
				
				if (twins) {
				
					if (twins.blueNum > twins.redNum) {
						this.propertyNode.props_spr_blue_win_bg.active = true;
						this.propertyNode.props_spr_red_win_bg.active = false;
		
					} else if(twins.blueNum < twins.redNum){
						this.propertyNode.props_spr_red_win_bg.active = true;
						this.propertyNode.props_spr_blue_win_bg.active = false;
		
					} 
				}
			}
		}
	}

	private initialCardState() {
		// this.propertyNode.props_note_blue_cardBack.setPosition(-309, 0);
		// this.propertyNode.props_note_red_cardBack.setPosition(309, 0);
		// this.propertyNode.props_spr_blueCard1.setPosition(-34, 0);
		// this.propertyNode.props_spr_blueCard2.setPosition(34, 0);
		// this.propertyNode.props_spr_redCard1.setPosition(-34, 0);
		// this.propertyNode.props_spr_redCard2.setPosition(34, 0);
         
		// this.propertyNode.props_note_blue_cardBack.scale = new Vec3(1, 1);
		// this.propertyNode.props_spr_blueCard1.scale = new Vec3(0.7, 0.7);
		// this.propertyNode.props_spr_blueCard2.scale = new Vec3(0.7, 0.7);
		// this.propertyNode.props_spr_redCard1.scale = new Vec3(0.7, 0.7);
		// this.propertyNode.props_spr_redCard2.scale = new Vec3(0.7, 0.7);
		// this.propertyNode.props_note_red_cardBack.scale = new Vec3(1, 1);
	}
	public initCardBack() {
		// this.propertyNode.props_note_blue_cardBack.setPosition(-309, 0);
		// this.propertyNode.props_note_red_cardBack.setPosition(309, 0);
		// this.propertyNode.props_spr_blueCard1.setPosition(-34, 0);
		// this.propertyNode.props_spr_blueCard2.setPosition(34, 0);
		// this.propertyNode.props_spr_redCard1.setPosition(-34, 0);
		// this.propertyNode.props_spr_redCard2.setPosition(34, 0);
		// this.propertyNode.props_spr_blueCard1.scale = new Vec3(0.7, 0.7);
		// this.propertyNode.props_spr_blueCard2.scale = new Vec3(0.7, 0.7);
		// this.propertyNode.props_spr_redCard1.scale = new Vec3(0.7, 0.7);
		// this.propertyNode.props_spr_redCard2.scale = new Vec3(0.7, 0.7);
	}

	/**获取每张牌的组型 */
	private getCard(cardT:number){
        return config.cardType[cardT]
	}

	/**计算点数 */
	private sumCard(itemCard):number{
		let num: number;
	  
		num = (itemCard.up + itemCard.down) % 10;
	  
		return num;
	}

	/**切换输赢数字颜色 */
	private changeNumColor(num) {
		if (num === 1) {
			return new Color().fromHEX("#FFD119");
		} else if (num === 2) {
			return new Color().fromHEX("#FFFFFF");
		}
	}
	

	/**获取牌的点数资源 */
	private getSpriteFrame(result:number): SpriteFrame {
		let fileName = '';
		if (result === 0) {
			fileName = SpriteFramePathDefine.BANDARQIUQIU_POKER0;
		}else if (result === 1) {
			fileName = SpriteFramePathDefine.BANDARQIUQIU_POKER1;
		} else if (result === 2) {
			fileName = SpriteFramePathDefine.BANDARQIUQIU_POKER2;
		} else if (result === 3) {
			fileName = SpriteFramePathDefine.BANDARQIUQIU_POKER3;
		} else if (result === 4) {
			fileName = SpriteFramePathDefine.BANDARQIUQIU_POKER4;
		} else if (result === 5) {
			fileName = SpriteFramePathDefine.BANDARQIUQIU_POKER5;
		} else if (result === 6) {
			fileName = SpriteFramePathDefine.BANDARQIUQIU_POKER6;
		} 
		return sourceManageSelector().getFile(fileName).source;
	}

	/**获取牌的点数资源 */
	private getBlueRedCardTypeSkeleton(result:number) {
		let animationName = '';
		if (result < 2) { return };
		if (result === 2) {
			animationName = "qiu";
		} else if (result === 3) {
			animationName = "twin";
		} 
		return animationName;
	}

	
	/**获取牌的点数资源 */
	private getGreenCardTypeSkeleton(result:number) {
		let animationName = '';
		if (result < 2) { return };
		 if (result === 2) {
			animationName = "qiuqiu";
		} else if (result === 3) {
			animationName = "twins";
		} else if (result === 4) {
			animationName = "six";
		}
		return animationName;
	}

	protected destroyCallBack(): void {
		this.taskScheduler.destoryQueue();
        this.taskScheduler.stopQueue(false)
	}

	protected bindUI(): void {
		this.initCardActive()
		// this.propertyNode.props_spr_clock_bg.active = false;
				
	}

	update(deltaTime: number) {

	}
}

