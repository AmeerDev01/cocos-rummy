import { BaseRepository } from "./BaseRepository"



export class SubGameRepository extends BaseRepository {
	constructor() {
		super()
	}
	/**最近点击的宝箱ID */
	public recentlyOpenBoxId: string = ''
}