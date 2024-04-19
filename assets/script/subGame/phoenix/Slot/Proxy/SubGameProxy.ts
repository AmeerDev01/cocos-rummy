import BaseProxy from "./BaseProxy"
import {SubGameRepository} from "../Repositories/SubGameRepository";

export enum RollerType {
    /**普通的5列小滑槽 */
    NORMAL = "iconRollerQueue",
    /**3列滑槽，中间为大滑槽 */
    LARGE = "largeIconRollerQueue"
}

export class SubGameProxy extends BaseProxy<SubGameRepository> {
    public constructor(proxyName: string = null, data: any = null) {
        super(proxyName, data);
        this.repository = new SubGameRepository()
    }

    /**设置最近点击的宝箱ID */
    public setRecentlyOpenBoxId(boxId: string) {
        this.repository.recentlyOpenBoxId = boxId
    }

    /**获取最近点击的宝箱ID */
    public getRecentlyOpenBoxId() {
        return this.repository.recentlyOpenBoxId
    }
}
