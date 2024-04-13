import { _decorator, Button, Component, Label, Node, Sprite } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {
	miniGameAmount?:string
	balance?:number
	
}
export interface IEvent {
	closeHandler:()=>void
	confirmThePayment:()=>void
}

@ccclass('Starlight_SgBox')
export class Starlight_SgBox extends BaseComponent<IState, IProps, IEvent> {
	private miniGameAmount=0
	btn_state=true
	start() {

	}

	protected propertyNode = {
		props_label_box_gold:new Label(),
		props_btn_box_off:new Button(),
		props_btn_box_on:new Node()
	}

	public props: IProps = {
		miniGameAmount:"",
		balance:0
	}

	public events: IEvent = {
		closeHandler:()=>{},
		confirmThePayment:()=>{}
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {
		this.propertyNode.props_btn_box_off.node.on(Node.EventType.TOUCH_END,()=>{
			this.events.closeHandler()
		})
		this.propertyNode.props_btn_box_on.getComponent(Button).node.on(Button.EventType.CLICK,()=>{
			if(this.btn_state){
				this.btn_state=false
				this.events.confirmThePayment()
			}
		})
	}
	removeComma(str){
		const newStr = str.replace(/,/g,"")
		return newStr
	}
	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
		if(key==="miniGameAmount"){
			this.propertyNode.props_label_box_gold.string=this.props.miniGameAmount
			this.miniGameAmount=Number(this.removeComma(value.cur))
		}
		if(key==="balance"){
			if(value.cur && this.miniGameAmount>0){
				console.log(value.cur , this.miniGameAmount);
				this.propertyNode.props_btn_box_on.getComponent(Sprite).grayscale=!(value.cur >= this.miniGameAmount)
				this.propertyNode.props_btn_box_on.getComponent(Button).interactable=(value.cur >= this.miniGameAmount)
			}
		}
	}

	protected bindUI(): void {

	}

	update(deltaTime: number) {

	}
}

