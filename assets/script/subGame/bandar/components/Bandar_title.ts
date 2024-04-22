import { _decorator,Node } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { initToggle } from '../../../utils/tool';
import { playBtnClick } from '../index';
import { global, lang } from '../../../hall';
import { addToastAction } from '../../../hall/store/actions/baseBoard';
import { ruleViewModel, setViewModel } from '../viewModel/BandarTitleViewModel';
import { BetData, HeadType } from '../type';
const { ccclass, property } = _decorator;



export interface IState {

}

export interface IProps {
	betData: BetData,
	memberBet:object,
}
export interface IEvent {
	onClosePanel:()=>void
    returnHall: () => void;
    openMenuPanel: () => void;
    openHelpPanel: () => void;
    openSetPanel: () => void;
}


@ccclass('Bandar_title')
export class Bandar_title extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {
		/**返回按钮*/ 
		props_btn_title_return: new Node(),
		/** 菜单按钮*/
		props_btn_title_menu: new Node(),
		/**菜单-设置*/ 
		props_btn_title_set: new Node(),
		/**菜单—说明*/ 
		props_btn_title_help: new Node(),
	}

	public props: IProps = {
		betData: null,
		memberBet: null,
		
	}

	public events: IEvent = {
		onClosePanel: () => {},
        returnHall: () => {},
        openMenuPanel: () => {},
        openHelpPanel: () => {},
        openSetPanel: () => {},
	}

	protected initState() {
		return {
			
		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_title_return.on(Node.EventType.TOUCH_END,() => {
			playBtnClick();
			// console.log("this.props.memberBet",this.props.memberBet);
			
			if (this.props.memberBet && Object.keys(this.props.memberBet).length != 0) {
				global.hallDispatch(addToastAction({ content: lang.write(k => k.palyingModule.GameExit, {}, { placeStr: "您有下注，不能退出" })  }));
			  return;
			}
			this.events.returnHall();
		});
		this.propertyNode.props_btn_title_menu.on(Node.EventType.TOUCH_END, () => {
			playBtnClick();
			this.events.openMenuPanel();
		});
		this.propertyNode.props_btn_title_help.on(Node.EventType.TOUCH_END, () => {
			playBtnClick();	
			this.events.openHelpPanel();			
		});
		this.propertyNode.props_btn_title_set.on(Node.EventType.TOUCH_END, () => {
			playBtnClick();
			this.events.openSetPanel();

		});

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {

	}

	toggleCallback(event: Event, customEventData: string) {

	}

	protected bindUI(): void {

				
	}

	update(deltaTime: number) {

	}
}

