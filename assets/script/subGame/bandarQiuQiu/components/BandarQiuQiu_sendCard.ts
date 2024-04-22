import { _decorator, Node, Animation, instantiate, tween, Vec3, UITransform, Label, game, Game } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { getNodePositionInCanvas, initToggle } from '../../../utils/tool';
import config from '../config';
import TaskScheduler, { Task } from '../../../utils/TaskScheduler';
import { cardViewModel, heGuanViewModel } from '../viewModel/BandarQiuQiuGameBoardViewModel';
import { GameStatus } from '../type';
import { mainGameViewModel, playDealCard } from '../index';
import { BandarQiuQiu_heGuan } from './BandarQiuQiu_heGuan';
import BaseViewModel from '../../../common/viewModel/BaseViewModel';
// import { playGame } from '../index';
const { ccclass, property } = _decorator;



export interface IState {

}

export interface IProps {
    gameStatus: GameStatus,
}
export interface IEvent {
	
}


@ccclass('BandarQiuQiu_sendCard')
export class BandarQiuQiu_sendCard extends BaseComponent<IState, IProps, IEvent> {
    private taskScheduler = new TaskScheduler();
    private allDecks = [];
    private twinCard = [];
    private randomNumbers = [];
	start() {
        this.createCards();

	 }

	protected propertyNode = {
        props_spr_sendCard: new Node(),
        // props_spr_all_send_card: new Node(),
        // props_spr_card_item: new Node(),
    
        
	}

	public props: IProps = {
		gameStatus:null,
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
        if (key === "gameStatus") {
			if (value.cur === GameStatus.BET) {
               
                // this.createCards()
            } else {
                // this.twinCard = [];
                // this.allDecks = [];
            }
		}
	}

    /**发牌 */
    public createCards() {
        // console.log(("create"));
        this.allDecks = [];
        this.twinCard = [];
        if(!this.propertyNode || !this.node){ return }
        this.propertyNode.props_spr_sendCard.active = true;

        this.taskScheduler.joinQueue(new Task((done) => {
            config.cardPosition.forEach((endP, i) => {
                let card = instantiate(this.propertyNode.props_spr_sendCard);
                card.scale=new Vec3(1,1)
                let task=new Task((done)=>{
                    playDealCard()
                    if(!this.node){return}
                    this.node.addChild(card)
                    tween(card).to(0.1, { position: new Vec3(endP.x, endP.y) }, {easing: 'quintOut'}).start();

                    this.allDecks.push(card)
                    window.setTimeout(()=>done(),100)
                })
                this.taskScheduler.joinQueue(task, false);
               
            })
            window.setTimeout(()=>done(),500)
            
        }), false)
        .joinQueue(new Task((done) => {
            this.propertyNode.props_spr_sendCard.active = false;
            window.setTimeout(()=>done(),500)
        }), false).joinQueue(new Task((done) => {
           if(!this.allDecks || this.allDecks.length === 0){ return }
            
            this.randomNumbers=this.getRandomUniqueNumbers(0,13,2)
            this.randomNumbers.forEach(item => {
                let card = this.allDecks[item]

                tween(card).to(0.15, { position: new Vec3(card.position.x, card.position.y + 30) }).start();
            })
 
            window.setTimeout(()=>done(),500)
        }), false).joinQueue(new Task((done) => {
           if(!this.allDecks || this.allDecks.length === 0){ return }
            this.allDecks.forEach((c, d) => {
                if (d !== this.randomNumbers[0] && d!==this.randomNumbers[1]) {  
                    this.node.removeChild(c);
                } else {
                    this.twinCard.push(c);
                }
            })
            window.setTimeout(()=>done(),500)
        }),false).joinQueue(new Task((done) => {
            // console.log(this.twinCard);
            if (!this.twinCard || this.twinCard.length == 0) { return }
            if(cardViewModel.isUnMount) return
            cardViewModel.comp.initCardBack()
            this.twinCard.forEach((c, d) => {
                let card = instantiate(c);
                this.node.addChild(card);
                tween(c).to(0.5, { position: new Vec3(config.cardItemPosition[d][0].x, config.cardItemPosition[d][0].y) }).call(() => {
                    this.node.removeChild(c)
                }).start()
                tween(card).to(0.5, { position: new Vec3(config.cardItemPosition[d][1].x, config.cardItemPosition[d][1].y) }).call(() => {
                    this.node.removeChild(card)
                }).start();

                window.setTimeout(() => done(), 500);

            })
        }),false).joinQueue(new Task((done) => {
            if (cardViewModel.isUnMount) return;
            cardViewModel.comp.initCardBack()
            let backCard = cardViewModel.comp.getPropertyNode().props_node_card_back as Node;
            backCard.active = true;
            window.setTimeout(() => done(), 500);
        }), false)
        //     .joinQueue(new Task((done) => {
  
        //     window.setTimeout(() => done(), 500);
        // }),false)
      
    }

    /**取min-max中count个不重复的随机数 */
    private getRandomUniqueNumbers(min, max, count) {
        const uniqueNumbers = new Set();
    
        while (uniqueNumbers.size < count) {
            uniqueNumbers.add(Math.floor(Math.random() * (max + 1 - min)) + min);
        }
    
        return Array.from(uniqueNumbers);
    }

	protected bindUI(): void {

        this.propertyNode.props_spr_sendCard.active = false;
	}

	update(deltaTime: number) {

	}
}

