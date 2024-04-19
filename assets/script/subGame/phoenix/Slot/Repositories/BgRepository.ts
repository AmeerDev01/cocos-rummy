import { SubGameType } from "../Proxy/SocketProxy"
import { BaseRepository } from "./BaseRepository"

export enum AutoLaunchType {
    UNLIMT,
    UNLIMT_FAST,
    T500,
    T100,
    T50,
    T20,
    T10,
    DISABLE,
}

/**
 * 停止模式
 */
export enum StopMode {
    NORMAL,
    /**排队停止 */
    QUEUE_STOP,
}

export class BgRepository extends BaseRepository {
    constructor() {
        super()
    }
    /**是否禁用才做 */
    public isDisable: boolean = false
    /**正在进行的子游戏模块 */
    // public gameRunning: SubGameType = SubGameType.MAIN
    /**下一局是否要切换游戏（先把数据缓存这这里） */
    public isChangeGame: boolean = false
    /**将要进行的游戏 */
    public nextGame: SubGameType = SubGameType.MAIN
    /**上一个游戏 */
    public lastGame: SubGameType = SubGameType.MAIN
    /**自动启动类型 */
    public autoLaunchType: AutoLaunchType = AutoLaunchType.DISABLE
    /**游戏剩余的次数(自动启动类型必须打开) */
    public reaminAutoLaunchTimes: number = 0
    /**小游戏剩余次数 */
    public numberOfTimesRemaining: number = 0
    /**小游戏总次数 */
    public totalNumberOfTimes: number = 0
    /**当前游戏 */
    public currentGame: SubGameType = SubGameType.MAIN
    /**停止模式 */
    public stopMode: StopMode = StopMode.QUEUE_STOP

}
