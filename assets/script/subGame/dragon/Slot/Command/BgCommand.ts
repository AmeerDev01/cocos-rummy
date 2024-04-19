import Facade from "../../Framework/care/Facade"
import { INotification } from "../../Framework/interfaces/INotification"
import { DialogType } from "../Component/dragon_DialogWin";
import { CommandDefine } from "../Const/CommandDefine";
import { ProxyDefine } from "../Const/ProxyDefine";
import { BgMediatorConst } from "../Mediator/BgMediator";
import { RollerMediatorConst } from "../Mediator/RollerMediator";
import { SubGameType } from "../Proxy/SocketProxy";
import config from "../config";
import { getBgProxy, getSocketProxy } from "../utils";
import { BaseCommand, IListExecute } from './BaseCommand'
import {AudioManager, SceneBgMusic} from "../Managr/AudioManager";
import UseSetOption from "../../../../utils/UseSetOption";
export enum BgCommandConst {
	AUTH = "authentication",
	/**切换游戏界面 */
	GAME_TYPE_CHANGE = "gameTypeChange",
	/**检查自动启动启动，如果是就进行下一局 */
	AUTO_LAUNCH = "autoLaunch"
}

// const listNotificationConst: Array<IlistNotificationer<FruitsSlotCommand>> = [
// 	{
// 		type: MainSlotViewType.INIT_MAIN_PANEL,
// 		handler(notification: INotification) {

// 			return false
// 		}
// 	}
// ]

export class BgCommand extends BaseCommand {
	protected listExecute: Array<IListExecute<BgCommand>> = [
		{
			type: BgMediatorConst.INIT_MAIN_PANEL,
			handler(notification: INotification) {
				// this.updateBetAmount("curr")
				return true
			}
		},
		{
			type: BgCommandConst.AUTH,
			handler(notification: INotification) {
				getSocketProxy().sendAnth()
			}
		},
		{
			type: BgCommandConst.GAME_TYPE_CHANGE,
			handler(notification: INotification) {
				const fbp = getBgProxy();
				const nextGame = fbp.getIsChangeGameRunning()
				if (nextGame !== -1) {
					// //开始切换屏幕
					// this.sendNotification(CommandDefine.BG, { gameTypePre: fbp.getLastGame(), gameTypeNew: nextGame }, FruitsBgCommandConst.GAME_TYPE_CHANGE)
					// const { gameTypePre, gameTypeNew } = notification.getBody()
					const gameTypePre = fbp.getLastGame()
					const gameTypeNew = nextGame
					// 播放飞水果动画,2秒的时候悄悄切换界面
					this.sendNotification(BgMediatorConst.START_FLY_BG)
                    this.sendNotification(BgMediatorConst.INITSCORE,{state:true})
					window.setTimeout(() => {
							if (gameTypeNew === SubGameType.MAIN) {
								getBgProxy().setIsChangeNextGameType(gameTypePre, 0)
                                AudioManager.getInstance().playMusic(SceneBgMusic.mainBg,true)
                               this.sendNotification(BgMediatorConst.UPDATE_GAME_STATUS)
                               this.sendNotification(BgMediatorConst.UPDATE_BTN_LABEL,{frequency:0})
							} else if (gameTypeNew === SubGameType.SUB_GAME1) {
                                this.sendNotification(BgMediatorConst.UPDATE_BTN_LABEL,{frequency:getSocketProxy().getTransferGameInfo().getNumberOfRounds()})
								AudioManager.getInstance().playMusic(SceneBgMusic.gameBg,true)
							} else if (gameTypeNew === SubGameType.SUB_GAME2) {
								//大滑槽
                                this.sendNotification(BgMediatorConst.UPDATE_BTN_LABEL,{frequency:getSocketProxy().getTransferGameInfo().getNumberOfRounds()})
                                AudioManager.getInstance().playMusic(SceneBgMusic.gameBgT,true)
							}
					}, 1000)
				} else {
                    this.sendNotification(CommandDefine.BG, {}, BgCommandConst.AUTO_LAUNCH)
				}
			}
		},
		// {
		// 	type: BgMediatorConst.UPDATE_NUMBER,
		// 	handler(notification: INotification) {
		// 		const betAmount = this.getSocketProxy().getRepository().userServerData
		// 		return {
		// 			betAmount: betAmount,
		// 			score: 0
		// 		}
		// 	}
		// },
		{
			type: BgMediatorConst.UPDATE_BET_AMOUNT,
			handler(notification: INotification) {
				const { order } = notification.getBody()
				return this.updateBetAmount(order)
			}
		},
		{
			type: BgCommandConst.AUTO_LAUNCH,
			handler(notification: INotification) {
				if (getBgProxy().checkAutoLaunch()) {
					getSocketProxy().sendLaunch()

					const fbp = getBgProxy();
					if (fbp.getNextGame() === SubGameType.MAIN) {
						getBgProxy().subtractAutoLaunchTimes()
					}
				}
			}
		},
		{
			type: BgMediatorConst.SHOW_DIALOG_WIN,
			handler(notification: INotification) {
                const { dialogType, amount, keepTime, order, done } = notification.getBody()
				const _amount = amount || getSocketProxy().getTransferGameInfo().getCurrentScore(order)
				const _keepTime = keepTime || 3000
				//获取奖励类型
				const magnification = getSocketProxy().getTransferGameInfo().getMagnification()
				const win = config.winning.find(item => item.minRate <= magnification && magnification <= item.maxRate)
				if (win && !dialogType) {
					let dialogType: DialogType = DialogType.BIG_WIN;
					switch (win.name) {
						case "bigwin": dialogType = DialogType.BIG_WIN; break;
						case "megawin": dialogType = DialogType.MEGA_WIN; break;
						case "superwin": dialogType = DialogType.SUPER_WIN; break;
						case "jackpot": dialogType = DialogType.JACKPOT; break;
					}
					return { dialogType, amount: _amount, keepTime: _keepTime, done }
				} else if (dialogType) {
					//如果dialogType被强制赋值，那么就会强制显示
					return { dialogType, amount: _amount, keepTime: _keepTime, done }
				}else {
                    done()
                }
			}
		}
	]
	private updateBetAmount(order: 'add' | 'subtract' | "max" | "curr") {
        let  str=getSocketProxy().getShiftAmount(order)
        const baseBetAmount = str.value
        UseSetOption.Instance().setGameOption("dragon", { betTarget:str})
        const lineCount = config.linesQueue.length
        return { baseBetAmount, lineCount }
	}
	public execute(notification: INotification): void {
		super.execute(notification)
	}
}
