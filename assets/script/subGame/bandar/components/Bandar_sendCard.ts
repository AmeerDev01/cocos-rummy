import { _decorator,instantiate,Node, Quat, tween, UIOpacity, UITransform, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { getNodeByNameDeep, initToggle } from '../../../utils/tool';
import config from '../config';
import TaskScheduler, { Task } from '../../../utils/TaskScheduler';
import { GameStatus } from '../type';
import { mainGameViewModel, playDealCard } from '../index';

const { ccclass, property } = _decorator;


export interface IState {
    seconds: number,
}

export interface IProps {
	countDown: number,
    gameStatus: GameStatus,
    seconds: number,
    
}

export interface IEvent {
	
}


@ccclass('Bandar_sendCard')
export class Bandar_sendCard extends BaseComponent<IState, IProps, IEvent> {
    private taskScheduler=new TaskScheduler();

	start() {
       
	 }

	protected propertyNode = {
        props_all_card:new Node(),
        props_spr_card:new Node()
	}

	public props: IProps = {
        countDown: 0,
        seconds:0,
        gameStatus:null,
	}

	public events: IEvent = {
		
	}

	protected initState() {
		return {
			seconds: 0,
		}
	}

	protected bindEvent(): void {
	

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
        if (key === "seconds") {
            // console.log("this.state.seconds",value.cur);
            this.setState({
                seconds:value.cur
            })
        }
        if (key === "gameStatus") {
            this.propertyNode.props_spr_card.active = value.cur===GameStatus.BET
            if(value.cur===GameStatus.BET){
                this.taskScheduler.joinQueue(new Task((done) => {
                    //  console.log(this.state.seconds);
                    //  console.log(this.props.seconds);
                     
                    if (this.state.seconds > 3) {
                        this.createCard();
                    }
                    done()
                }),false).joinQueue(new Task((done)=>{
                    this.propertyNode.props_spr_card.active=false;
                    done()
                }),false)
            }else {
                window.setTimeout(() => {
                    if(mainGameViewModel.isUnMount){ return }
                    if(!mainGameViewModel.isUnMount){
                        this.removeCard();//移除所有发牌时添加的牌节点
                    }
                },500)
              
            }
        }
	}

    /**发牌 */
    private createCard(){

        config.cardPosition.forEach((endP,index)=>{
            // playDealCard()
            this.propertyNode.props_spr_card.active=true;
            let card=instantiate(this.propertyNode.props_spr_card)
            let scaling;
            if(index % 5 === 0){
                scaling = new Vec3(1, 1);
            }else{
                scaling = new Vec3(0.77, 0.77);
            }
            let task=new Task((done)=>{
                playDealCard()
                this.propertyNode.props_all_card.addChild(card)
                tween(card).to(0.15,{position:new Vec3(endP.x,endP.y),
                 scale:scaling
                }).start();
                window.setTimeout(()=>done(),100)
            })
               
            this.taskScheduler.joinQueue(task, false);
        })

    }

    /**移除发牌的节点及添加的牌 */
    private removeCard(){
        let task=new Task((done)=>{         
            this.propertyNode.props_all_card.removeAllChildren();
            window.setTimeout(()=>done(),1000)
        })
        this.taskScheduler.joinQueue(task,false)
    }

    protected destroyCallBack(): void {
        this.taskScheduler.destoryQueue();
	}

	protected bindUI(): void {
        this.propertyNode.props_spr_card.active = this.props.gameStatus===GameStatus.BET
	}

	update(deltaTime: number) {

	}
}

