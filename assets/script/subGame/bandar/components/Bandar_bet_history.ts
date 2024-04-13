import { _decorator,instantiate,Node, Sprite, SpriteFrame, tween, Vec3, Animation } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { getNodeByNameDeep, getNodePositionInCanvas, initToggle } from '../../../utils/tool';
import { mainGameViewModel, sourceManageSelector } from '../index';
import { SpriteFramePathDefine } from '../sourceDefine/spriteDefine';
import TaskScheduler, { Task } from '../../../utils/TaskScheduler';
import { GameStatus } from '../type';
import { HistoryItem } from '../store/actions/history';

const { ccclass, property } = _decorator;



export interface IState {

}

export interface IProps {
	result1:number[],
	result2:number[],
	result3:number[],
	result4:number[],
	gameStatus:GameStatus
}
export interface IEvent {
	
}


@ccclass('Bandar_bet_history')
export class Bandar_bet_history extends BaseComponent<IState, IProps, IEvent> {
	private taskScheduler = new TaskScheduler();
	private oldAllResultList = [];
	private newAllResultList = []
	start() {}

	protected propertyNode = {
        props_layout_icon_black: new Node(),
		props_layout_icon_red: new Node(),
		props_layout_icon_plum: new Node(),
		props_layout_icon_diamond: new Node(),
		props_spr_bet_icon: new Node(),
		// props_bet_history_list:new Node(),
	}

	public props: IProps = {
		result1:[],
		result2:[],
		result3:[],
		result4:[],
		gameStatus:null
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
		if (key == "result1") { 
			// console.log("result1",value.cur);
			if (!value.cur && value.cur.length === 0) return;
			this.createNewResult(this.propertyNode.props_layout_icon_black,value.cur,true) ;
	
		}
		if (key == "result2") {
			if (!value.cur && value.cur.length === 0) return;
			
			this.createNewResult(this.propertyNode.props_layout_icon_red,value.cur,true);

		}
		if (key == "result3") { 
			if (!value.cur && value.cur.length === 0) return;
			
			this.createNewResult(this.propertyNode.props_layout_icon_plum,value.cur,true);

		}
		if (key == "result4") { 
			if (!value.cur && value.cur.length === 0) return;
			
			this.createNewResult(this.propertyNode.props_layout_icon_diamond,value.cur,true) ;

		}
		if(key==="gameStatus"){
			if(value.cur === GameStatus.WAIT){
				if(this.newAllResultList.length !== 0){
					this.oldAllResultList = [...this.newAllResultList]
					this.newAllResultList = []
				}
			
			}
		}
	}


	private createNewResult(parentNode:Node, resultItem:number[], isTween: boolean = true){
		const children = parentNode.children;

		// let position=children[1].getPosition();
		let position = new Vec3(-66,-2,0);
		const offset = 18;
		const iconNode = instantiate(this.propertyNode.props_spr_bet_icon);//克隆输赢图标
        let newResultList = []
		let oldAllResult = []
		const resultII = resultItem;
		this.taskScheduler.joinQueue(new Task((done) => {
			if (mainGameViewModel.isUnMount || !resultItem || !resultII) return;
			resultII.forEach((item,index)=>{
				const childNode = instantiate(iconNode);//克隆输赢图标
	
				childNode.getComponent(Sprite).spriteFrame = this.getSpriteFrame(item)
				if(index === resultII.length - 1){
	
					childNode.setPosition(new Vec3(position.x + offset*(index-1), -2))
				}else{
					childNode.setPosition(new Vec3(position.x + offset*index, position.y))
				}
	
				newResultList.push(childNode)
				this.newAllResultList.push(childNode)
			
				parentNode.addChild(childNode)
				if(index === resultII.length - 1){
					childNode.getComponent(Animation).play()
				}
	
			})
			done()
		}), false).joinQueue(new Task((done) => {
			if (mainGameViewModel.isUnMount || !this.oldAllResultList) return;
			this.oldAllResultList.forEach((v,i)=>{//移除后九个节点，避免在移动时出现重影
				if (i % 10 !== 0) {
					if (!this.node || !parentNode || !parentNode.children) return;
					parentNode.removeChild(v)
				}else{
					oldAllResult.push(v)
				}
			})
			done()
		}),false).joinQueue(new Task((done) => {
			if (mainGameViewModel.isUnMount || !oldAllResult || !newResultList) return;
			oldAllResult.forEach((item,i)=>{
				tween(item).to(0.5,{position:new Vec3(item.position.x-offset,item.position.y)}).call(()=>{
					if (!this.node || !parentNode || !parentNode.children) return;
					parentNode.removeChild(item)
				}).start()
				// console.log(this.node);
				newResultList.forEach((v,index)=>{
					if(index !== newResultList.length - 1){
						tween(v).to(0.5,{position:new Vec3(v.position.x-offset,v.position.y)}).call(()=>{
							
						}).start()
					}	
				})
	
				
			})
			done()
			// window.setTimeout(()=>done(),0)
		}),false)
		
	} 

	public createResult(parentNode:Node, resultItem:number[], isTween: boolean = true){

		const children = parentNode.children;

		let position = new Vec3(-84,-2,0);
		const offset = 18;
		const iconNode = instantiate(this.propertyNode.props_spr_bet_icon);//克隆输赢图标
		const result = resultItem;
		parentNode.removeAllChildren();
		result.forEach((item,index)=>{
			const childNode = instantiate(iconNode);//克隆输赢图标

			childNode.getComponent(Sprite).spriteFrame = this.getSpriteFrame(item)

			childNode.setPosition(new Vec3(position.x + offset * index, position.y))
            // if(index===0){
			// 	this.oldAllResultList.push(childNode)
			// }
			this.oldAllResultList.push(childNode)
			parentNode.addChild(childNode)
			if(index === result.length-1){
				childNode.getComponent(Animation).play()
			}

		})

	} 


	private getSpriteFrame(result:number): SpriteFrame {
		let fileName = '';
		if (result === 1) {
			fileName = SpriteFramePathDefine.BANDAR_HISTORY_WIN;
		} else if (result === 2) {
			fileName = SpriteFramePathDefine.BANDAR_HISTORY_LOSE;
		} 
		return sourceManageSelector().getFile(fileName).source;
	}

	protected bindUI(): void {

				
	}

	update(deltaTime: number) {

	}
}

