import BaseProxy from "./BaseProxy"
import { SlotRepository, roller } from "../Repositories/SlotRepository"
import { instantiate, log } from "cc";
import config from "../config"

export enum RollerType {
	/**普通的5列小滑槽 */
	NORMAL = "iconRollerQueue",
	/**3列滑槽，中间为大滑槽 */
	LARGE = "largeIconRollerQueue"
}
export class SlotProxy extends BaseProxy<SlotRepository> {
	public constructor(proxyName: string = null, data: any = null) {
		super(proxyName, data);
		this.repository = new SlotRepository()
	}
	// private repository: FruitsSlotRepository
	/**
	 * 初始化滑槽数据
	 * @param rollerType NORMAL展示5列, LARGE展示3列且中间为大滑槽
	 */
	public initRoller() {
		// 首先重置
		// console.log("rollerType", rollerType)
		this.repository.rollerList = []
		config.iconRollerQueue.forEach((rollerData, i) => {
			//如果只有3列数据，那需要将将第二排设置为大滑槽数据
			// const data = Object.assign({}, (rollerType === RollerType.LARGE && i === 1) ? bigRoller : roller, { data: rollerData })
			const data = Object.assign({}, roller, { data: rollerData })
			this.repository.rollerList[i] = instantiate(data)
		})
	}

	/**
	 * 设置停止序号（控制停止） 
	 * @param rollerIndex 滑槽序号
	 * @param stopIndex 停止的序号（规则从1开始，默认为-1：停止）
	 */
	public setStopIndex(rollerIndex: number, stopIndex: number) {
		const showResult = this.repository.rollerList[rollerIndex].showResult
		showResult.stopIndex = stopIndex
	}

	/**
	 * 赋值结果数据
	 * @param rollerIndex 滑槽序号
	 * @param stopIndex 数据开始截取结果的序号（从1开始的）
	 * @param resultData 结果数据（其实可以不用，但是可以看得出获取了多少个元素）
	 */
	public setResult(rollerIndex: number, stopIndex: number, resultData: number[]) {
		const rollerData = this.repository.rollerList[rollerIndex]
		if (rollerData) {
			rollerData.showResult.stopIndex = stopIndex
			rollerData.showResult.result = resultData
		} else {
			log("未找到对应的滚槽数据载体")
		}
	}

	public getRollerList() {
		return this.repository.rollerList
	}
}