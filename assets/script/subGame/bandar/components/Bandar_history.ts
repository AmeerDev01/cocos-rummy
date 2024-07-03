import { _decorator,instantiate,Label,Node, Sprite, SpriteFrame } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { getNodeByNameDeep, initToggle } from '../../../utils/tool';
import { SpriteFramePathDefine } from '../sourceDefine/spriteDefine';
import { playBtnClick, sourceManageSelector } from '../index';
import { Statistik, History, RokerTar } from '../type';
import { Roker } from '../store/actions/history';
const { ccclass, property } = _decorator;



export interface IState {

}

export interface IProps {
	tren:History[],
	statistik : Statistik[],
	rekor:Roker,
}
export interface IEvent {
	onClosePanel:()=>void
}


@ccclass('Bandar_history')
export class Bandar_history extends BaseComponent<IState, IProps, IEvent> {
	
	start() {
         
		 
	 }

	protected propertyNode = {
		props_content:new Node(),
		props_spr_new_bg:new Node(),
		props_layout_other_history:new Node(),
		props_history_bg_off:new Node(),
		props_Toggle1:new Node(),
		props_Toggle2:new Node(),
        props_Toggle3:new Node(),
	}

	public props: IProps = {
		tren:null,
	    statistik :null,
		rekor:null,
		
	}

	public events: IEvent = {
		onClosePanel:()=>{}
	}

	protected initState() {
		return {
			
		}
	}

	protected bindEvent(): void {
       this.propertyNode.props_Toggle1.on(Node.EventType.TOUCH_END,()=>{
		playBtnClick()
	   });
	   this.propertyNode.props_Toggle2.on(Node.EventType.TOUCH_END,()=>{
		playBtnClick()
	   });
	   this.propertyNode.props_Toggle3.on(Node.EventType.TOUCH_END,()=>{
		playBtnClick()
	   });
	   this.propertyNode.props_history_bg_off.on(Node.EventType.TOUCH_END,()=>{
		 playBtnClick()
		 this.events.onClosePanel();
	   })
	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if (key === "tren") {

          this.createHistoryTr(value.cur)
	  }
	  if(key==="statistik"){

		this.createHistorySta(value.cur);

	  }

	  if(key==="rekor"){

		this.createHistoryRok(value.cur);
	  }
	}

	/**创建历史记录tren */
	private createHistoryTr(tren){
		this.propertyNode.props_content.removeAllChildren();
		tren.forEach((item,index)=>{
		   let historyItem
           if(index===0){
			 historyItem=instantiate(this.propertyNode.props_spr_new_bg);
			 let spr_allMark=getNodeByNameDeep("spr_allMark",historyItem).getComponent(Sprite);
			 spr_allMark.spriteFrame=sourceManageSelector().getFile(SpriteFramePathDefine.BANDAR_HISTORY_BARU).source;
		   }else{
			 historyItem=instantiate(this.propertyNode.props_layout_other_history);
			 let spr_allMark=getNodeByNameDeep("spr_allMark",historyItem)
			 spr_allMark.getComponent(Sprite).spriteFrame=item.semua > 0 ? this.getWinLossSpriteFrame(item.semua):this.getWinLossSpriteFrame(1);
			 spr_allMark.active = item.semua > 0;
		   }
		   historyItem.setPosition(0,-34-index*53);
		   let black= getNodeByNameDeep("spr_history_black",historyItem).getComponent(Sprite);
		   let red=getNodeByNameDeep("spr_history_red",historyItem).getComponent(Sprite)
		   let plum=getNodeByNameDeep("spr_history_plum",historyItem).getComponent(Sprite)
		   let diamond=getNodeByNameDeep("spr_history_diamond",historyItem).getComponent(Sprite)
		   black.spriteFrame=this.getSpriteFrame(item.black);
		   red.spriteFrame=this.getSpriteFrame(item.red);
		   plum.spriteFrame=this.getSpriteFrame(item.plum);
		   diamond.spriteFrame=this.getSpriteFrame(item.diamond);
		   this.propertyNode.props_content.addChild(historyItem)
		})
	}
	/**创建历史记录statistilk */
	private createHistorySta(statistik){
		statistik.forEach((item,index)=>{
			let num=index+1;
			let label_winRate=getNodeByNameDeep("label_winRate", getNodeByNameDeep("props_spr_refresh"+num,this.node));
			let label_winMatches=getNodeByNameDeep("label_winMatches", getNodeByNameDeep("props_spr_refresh"+num,this.node));
			let label_loseMatches=getNodeByNameDeep("label_loseMatches", getNodeByNameDeep("props_spr_refresh"+num,this.node));
			let tingkatNum=(item.tingkat*100).toFixed(2)
			label_winRate.getComponent(Label).string="Win Rate:"+tingkatNum+"%";
			label_winMatches.getComponent(Label).string="Win:"+item.menang;
			label_loseMatches.getComponent(Label).string="Lose:"+item.kalah;
		})
	}

	/**创建历史记录roker */
	private createHistoryRok(roker){
		for(let key in roker){
			let item=roker[key];
			let label_num=getNodeByNameDeep("label_num", getNodeByNameDeep("spr_userRefresh_"+key,this.node));
			let label_num_win=getNodeByNameDeep("label_num_win", getNodeByNameDeep("spr_userRefresh_"+key,this.node));
			let label_num_lose=getNodeByNameDeep("label_num_lose", getNodeByNameDeep("spr_userRefresh_"+key,this.node));
			label_num.getComponent(Label).string=item.taruhan+'';
			label_num_win.getComponent(Label).string=item.menang+'';
			label_num_lose.getComponent(Label).string=item.chip+"";
		}
	}


	private getSpriteFrame(result:number): SpriteFrame {
		let fileName = '';
		if (result === 1) {
			fileName = SpriteFramePathDefine.BANDAR_HISTORY_MENANG;
		} else if (result === 2) {
			fileName = SpriteFramePathDefine.BANDAR_HISTORY_KALAH;
		} 
		return sourceManageSelector().getFile(fileName).source;
	}

	private getWinLossSpriteFrame(result:number): SpriteFrame {
		let fileName = '';
	    if (result === 1) {
			fileName = SpriteFramePathDefine.BANDAR_HISTORY_SEMUA_WIN
		} else if (result === 2) {
			fileName = SpriteFramePathDefine.BANDAR_HISTORY_SEMUA_LOSS;
		} 
		return sourceManageSelector().getFile(fileName).source;
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

