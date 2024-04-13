import { _decorator, log, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
import config, { initHeadType } from '../config';
import { sourceManageSeletor } from '../index';
import { PrefabPathDefine } from '../sourceDefine/prefabDefine';
import { HeadType } from '../type';
import HeadViewModel from '../viewModel/HeadViewModel';
const { ccclass, property } = _decorator;

export interface IState {

}

export interface IProps {

}
export interface IEvent {
	initSeat: (seats: HeadType[]) => void
}

@ccclass('Yxx_HeadPanel')
export class Yxx_HeadPanel extends BaseComponent<IState, IProps, IEvent> {
	start() {

	}

	protected propertyNode = {

	}

	public props: IProps = {

	}

	public events: IEvent = {
		initSeat: (seats: HeadType[]) => { }
	}

	protected initState() {
		return {

		}
	}

	protected bindEvent(): void {

	}

	protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {

	}

	protected bindUI(): void {
	}

	public initHead(seats: HeadType[]): void {
		const isInit = seats.length === 0;
		config.headLocations.forEach((v, index) => {
			const headType = isInit ? initHeadType(index) : seats[index];
			headType.pos = new Vec3(v.x, v.y);
			let headViewModel = new HeadViewModel().mountView(sourceManageSeletor().getFile(PrefabPathDefine.HEAD).source).appendTo(this.node).connect().setProps({
				headType
			});
			headViewModel.comp.initLocation(headType.pos);
			isInit && seats.push(headType);
		})

		this.events.initSeat(seats);
	}

	update(deltaTime: number) {

	}
}

