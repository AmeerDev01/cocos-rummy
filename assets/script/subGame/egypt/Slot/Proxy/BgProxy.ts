import BaseProxy from "./BaseProxy"
import { instantiate, log } from "cc";
import config from "../config"
import { AutoLaunchType, BgRepository, StopMode } from "../Repositories/BgRepository";
import { BgMediatorConst } from "../Mediator/BgMediator";
import { SubGameType } from "./SocketProxy";

export enum RollerType {
	/**普通的5列小滑槽 */
	NORMAL = "iconRollerQueue",
	/**3列滑槽，中间为大滑槽 */
	LARGE = "largeIconRollerQueue"
}
export class BgProxy extends BaseProxy<BgRepository> {
    private SpriteFrames=[]
	public constructor(proxyName: string = null, data: any = null) {
		super(proxyName, data);
		this.repository = new BgRepository()
	}
    public setSpriteFrames(data){
        this.SpriteFrames=data
    }
    public getSpriteFrames(){
        return this.SpriteFrames
    }
	/**配置将要运行的子游戏 */
	public setIsChangeNextGameType(gameTypePre: SubGameType, gameTypeNew: SubGameType) {
        console.log(this.repository.lastGame , gameTypeNew)
        this.repository.isChangeGame = ( this.repository.lastGame !== gameTypeNew)
        this.repository.lastGame = gameTypePre
        this.repository.nextGame = gameTypeNew
	}
	/**从缓存数据重获取是否切换游戏模块游戏模块,若返回-1 则不切换，若切换直接返回下一个游戏代码 */
	public getIsChangeGameRunning() {
		if (this.repository.isChangeGame) {
			return this.repository.nextGame
		}
		return -1
	}
	/**获取将要正在进行的游戏 */
	public getNextGame() {
		return this.repository.nextGame
	}
	/**获取上一个游戏 */
	public getLastGame() {
		return this.repository.lastGame
	}
	/**设置自动下注的类型 */
	public setDisable(disable: boolean) {
		// console.log('setDisable ---- ', disable);
		this.repository.isDisable = disable
        this.sendNotification(BgMediatorConst.UPDATE_GAME_STATUS)
	}
	/**获取禁用状态 */
	public getDisable() {
		return this.repository.isDisable
	}
	/**设置自动下注的类型 */
	public setAutoLaunchType(type: AutoLaunchType) {
		this.repository.autoLaunchType = type
		this.sendNotification(BgMediatorConst.UPDATE_AUTO_LAUNCH)
		if (type === AutoLaunchType.DISABLE) {
			this.repository.reaminAutoLaunchTimes = 0
		} else if (!this.isUNLIMT()) {
			switch (type) {
				case AutoLaunchType.T10: this.repository.reaminAutoLaunchTimes = 10; break;
				case AutoLaunchType.T20: this.repository.reaminAutoLaunchTimes = 20; break;
				case AutoLaunchType.T50: this.repository.reaminAutoLaunchTimes = 50; break;
				case AutoLaunchType.T100: this.repository.reaminAutoLaunchTimes = 100; break;
				case AutoLaunchType.T500: this.repository.reaminAutoLaunchTimes = 500; break;
			}
		} else if (this.isUNLIMT()) {
			//无限
		}
	}
	/**获取正在运行的游戏模块 */
	public getAutoLaunchType() {
		return this.repository.autoLaunchType
	}
	public isSpeed(){
			return this.getAutoLaunchType() === AutoLaunchType.UNLIMT_FAST || this.getStopMode() === StopMode.QUEUE_STOP;
	}
	/**获得停止模式 */
	public getStopMode(){
			return this.repository.stopMode;
	}
	public setStopMode(stopMode: StopMode){
			this.repository.stopMode = stopMode;
	}
	/**减去自动执行次数 */
	public subtractAutoLaunchTimes() {
		if (!this.isUNLIMT()) {
			// 无限次数的时候不关注剩余次数
			if (this.repository.reaminAutoLaunchTimes > 0) {
				this.repository.reaminAutoLaunchTimes--
			}
			if (this.repository.reaminAutoLaunchTimes <= 0) {
				this.repository.reaminAutoLaunchTimes = 0
				this.repository.autoLaunchType = AutoLaunchType.DISABLE
			}
		}
		this.sendNotification(BgMediatorConst.UPDATE_AUTO_LAUNCH)
	}
	public isUNLIMT(){
		return this.repository.autoLaunchType == AutoLaunchType.UNLIMT || this.repository.autoLaunchType == AutoLaunchType.UNLIMT_FAST
	}
	public getTotal(){
        let total
        switch (this.repository.autoLaunchType) {
            case AutoLaunchType.T10:
                total = 10;
                break;
            case AutoLaunchType.T20:
                total = 20;
                break;
            case AutoLaunchType.T50:
                total = 50;
                break;
            case AutoLaunchType.T100:
                total = 100;
                break;
            case AutoLaunchType.T500:
                total = 500;
                break;
        }
        return total
    }
	public getAutoLaunchNum(){
		return this.getTotal() - this.repository.reaminAutoLaunchTimes
	}
	/**检查自动启动 */
	public checkAutoLaunch() {
		// console.log('reaminAutoLaunchTimes', this.repository.reaminAutoLaunchTimes)
		if (this.repository.autoLaunchType === AutoLaunchType.DISABLE) {
			return false
		} else {
			if (this.isUNLIMT()) {
				return true
			} else {
				if (this.repository.reaminAutoLaunchTimes <= 0) {
					this.repository.reaminAutoLaunchTimes = 0
					this.repository.autoLaunchType = AutoLaunchType.DISABLE
				}
				return this.repository.reaminAutoLaunchTimes > 0
			}
		}
	}
}
