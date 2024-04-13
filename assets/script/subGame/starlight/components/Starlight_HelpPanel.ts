import { _decorator, Button, Component, Label, log, Node, PageView } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import { starlight_Audio } from '../index';
import { SoundPathDefine } from '../sourceDefine/soundDefine';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	ante:number
}
export interface IEvent {
	closeHandler: () => void
}

@ccclass('Starlight_HelpPanel')
export class Starlight_HelpPanel extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}
	private basicMagnification={
		yellow_gem:[5,15,40],
		blue_green_gem:[8,18,80],
		green_gem:[10,20,100],
		blue_gem:[16,24,160],
		red_gem:[20,30,200],
		star:[30,40,240],
		moon:[40,100,300],
		heart:[50,200,500],
		sun:[200,500,1000],
		scatter:[60,100,2000],
	 }
	protected propertyNode = {
		props_btn_insst5roduce_close: new Button(),
		props_btn_introduce_next: new Button(),
		props_btn_introduce_last: new Button(),
		props_PageView_instroduce_banner: new PageView(),
		props_spr_page1: new Node(),
	}

	public props: IProps = {
		ante:0
	}

	public events: IEvent = {
		closeHandler: () => { }
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if(key === 'ante'){
			this.renderingRules(value.cur)
		}
	}
	renderingRules(num:number){
		this.basicMagnification
		for(let i in this.basicMagnification){
			this.propertyNode.props_spr_page1.children.forEach(item=>{
				if(item.name===i){
					item.getChildByName('Label_rate_num1').getChildByName('label_num').getComponent(Label).string=(this.basicMagnification[i][0] * num).formatAmountWithLetter()
					item.getChildByName('Label_rate_num2').getChildByName('label_num').getComponent(Label).string=(this.basicMagnification[i][1] * num).formatAmountWithLetter()
					item.getChildByName('Label_rate_num3').getChildByName('label_num').getComponent(Label).string=(this.basicMagnification[i][2] * num).formatAmountWithLetter()
				}
			})
		}
	}
	protected bindUI(): void {
		this.propertyNode.props_btn_insst5roduce_close.node.on(Button.EventType.CLICK, () => {
			this.events.closeHandler()
		}, true)
		this.propertyNode.props_btn_introduce_last.interactable=false
		this.propertyNode.props_btn_introduce_last.node.on(Node.EventType.TOUCH_END,()=>{
			starlight_Audio.playOneShot(SoundPathDefine.DRAGANDDROPTOTURNTHEPAGE)
            const index = this.propertyNode.props_PageView_instroduce_banner.getCurrentPageIndex();
            if (index > 0) {
                this.propertyNode.props_PageView_instroduce_banner.scrollToPage(index - 1, 0.5); // 切换到上一页，可设置切换动画时间
            }
			this.propertyNode.props_btn_introduce_last.interactable=index > 1
			this.propertyNode.props_btn_introduce_next.interactable=true
        })
        this.propertyNode.props_btn_introduce_next.node.on(Node.EventType.TOUCH_END,()=>{
			starlight_Audio.playOneShot(SoundPathDefine.DRAGANDDROPTOTURNTHEPAGE)
            const index = this.propertyNode.props_PageView_instroduce_banner.getCurrentPageIndex();
            if (index < this.propertyNode.props_PageView_instroduce_banner.getPages().length - 1) {
                this.propertyNode.props_PageView_instroduce_banner.scrollToPage(index + 1, 0.5); // 切换到下一页，可设置切换动画时间
            }
			this.propertyNode.props_btn_introduce_last.interactable=true
			this.propertyNode.props_btn_introduce_next.interactable=index < this.propertyNode.props_PageView_instroduce_banner.getPages().length - 2
        })
	}

	update(deltaTime: number) {

	}
}

