import { _decorator,Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { initToggle } from '../../../utils/tool';
import {ruleViewModel, setViewModel} from '../ViewModel/DragonTigerTitleViewModel';
import { playBtnClick } from '../music';
import { global, lang } from '../../../hall';
import { addToastAction } from '../../../hall/store/actions/baseBoard';
import { setMemberBetAction } from '../store/actions/history';
const { ccclass, property } = _decorator;



export interface IState {

}

export interface IProps {
	memberBet:object,
  winType:number,
}
export interface IEvent {
	  onClosePanel:()=>void
    returnHall: () => void;
    openMenuPanel: () => void;
    openHelpPenel: () => void;
    openSetPanel: () => void;
}


@ccclass('DragonTiger_title')
export class DragonTiger_title extends BaseComponent<IState, IProps, IEvent> {
  private isOpenMenu=false;
	start() { }

	protected propertyNode = {
        // 返回按钮
        props_btn_title_return: new Node(),
        // 菜单按钮
        props_btn_title_menu: new Node(),
        // 菜单-设置
        props_btn_title_set: new Node(),
        // 菜单—说明
        props_btn_title_help: new Node(),
	}

	public props: IProps = {
    memberBet:null,
    winType:0,
	}

	public events: IEvent = {
		    onClosePanel: () => { },
        returnHall: () => {},
        openMenuPanel: () => {},
        openHelpPenel: () => {},
        openSetPanel: () => {},
	}

	protected initState() {
		return {
			
		}
	}

	protected bindEvent(): void {
        this.propertyNode.props_btn_title_return.on(Node.EventType.TOUCH_END,() => {
          playBtnClick();
          if (this.props.memberBet && Object.keys(this.props.memberBet).length != 0 ) {
            global.hallDispatch(addToastAction({ content: lang.write(k => k.palyingModule.GameExit,{},{ placeStr:"您正在游戏中，退出失败，请游戏结束后重试。" }) }));
            return;
          }
          this.events.returnHall();
        });
        this.propertyNode.props_btn_title_menu.on(Node.EventType.TOUCH_END, () => {
    
            this.events.openMenuPanel();
            playBtnClick();
        });
        this.propertyNode.props_btn_title_help.on(Node.EventType.TOUCH_END, () => {
          playBtnClick();
          if(ruleViewModel===undefined){
            this.events.openHelpPenel();
          
        }else{
          if(ruleViewModel.isUnMount){
            this.events.openHelpPenel();
          }
        }
          
        });
        this.propertyNode.props_btn_title_set.on(Node.EventType.TOUCH_END, () => {
          playBtnClick();
          if(setViewModel===undefined){
              this.events.openSetPanel();
            
          }else{
            if(setViewModel.isUnMount){
              this.events.openSetPanel();
            }
          }
        });

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
     if(key==="winType"){}
     if(key==="memberBet"){}
	}

	toggleCallback(event: Event, customEventData: string) {

	}

	protected bindUI(): void {

		
		
	}

	update(deltaTime: number) {

	}
}

