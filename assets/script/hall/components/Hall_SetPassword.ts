import { _decorator, Component, Node } from 'cc';
import { BaseComponent } from '../../base/BaseComponent';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {

}

export interface IEvent {

}

@ccclass('Hall_SetPassword')
export class Hall_SetPassword extends BaseComponent<IState, IProps, IEvent> {
    start() {

    }

    protected propertyNode = {
        
    }

    public props: IProps = {

    }

    public events: IEvent = {

    }
    protected initState() {
        return {

        }
    }

    protected bindEvent(): void {

    }

    protected useProps(key: keyof IProps, value: { pre: Partial<IState>, cur: Partial<IState> }) {
        /**传入的props变更触发的函数 */
        // console.log(key, "change", value.cur)

    }

    protected bindUI(): void {

    }

    update(deltaTime: number) {

    }
}

