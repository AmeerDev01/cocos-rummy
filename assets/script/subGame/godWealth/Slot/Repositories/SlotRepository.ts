import { BaseRepository } from "./BaseRepository"

/**滑槽间隔 */
const interval: number = 35

export type RollerType = {
	/**滚槽轮数据 */
	data: number[],
	/**显示结果，若空数组就表示在滚动中 */
	showResult: {
		/**将要加入滑槽的图标 */
		startIndex: number,
		/**停止的首行序号，注意从1开始起 */
		stopIndex: number,
		/**停止的 */
		result: number[]
	},
	/**纵向显示的单位数 */
	portraitNum: number,
	/**横垮的宽度单位数 */
	landscapeNum: number,
	/**滚动速度 */
	rollSpeed: number,
	/**单位滚槽宽度 */
	rollerWidth: number,
	/**间隔宽度 */
	intervalWidth: number,
	/**单位滚槽高度 */
	rollerheight: number,
	/**间隔高度 */
	intervalHeight: number,
	/**是否是大图标 */
	isBigIcon: boolean
}

// export type RollerListType = {
// 	// /**纵向显示的单位数 */
// 	// portraitNum: number,
// 	// /**横垮的宽度单位数 */
// 	// landscapeNum: number,
// 	/**滑槽列表 */
// 	data: RollerType[]
// }
/** 小滚槽示例数据 */
export const roller: RollerType = {
	data: [],
	showResult: {
		startIndex: 0,
		stopIndex: -1,
		result: []
	},
	portraitNum: 3,
	landscapeNum: 1,
	rollSpeed: 40,
	rollerWidth: 100,
	intervalWidth: 52,
	rollerheight: 125,
	intervalHeight: 0,
	isBigIcon: false
}

export class SlotRepository extends BaseRepository {
	constructor() {
		super()
	}
	/**滚槽列表面板 */
	public rollerList: RollerType[] = []
}
