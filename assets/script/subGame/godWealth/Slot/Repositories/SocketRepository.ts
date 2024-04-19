import { sys } from "cc"
import { BaseRepository } from "./BaseRepository"
import { getUrlParams } from "../GodWealth_utils"
import {initConfig} from "db://assets/script/hall/config";

const wsEnv = {
	isTest: false,
	online: {
		socketIp: "ws://54.251.66.82:15003/ws",
		"token": sys.localStorage.getItem("token"),
		"gameId": 6,
		"roomId": "1672958541691883522"
	},
	local1: {
		socketIp: "ws://192.168.110.180:15003/ws",
		"token": "eyJhbGciOiJIUzI1NiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAE3OSwoCMRBF0b3UOIH8q9I7cOwKKqbECNEgGTSIezftyOnlcXhvaDxhs4mQQnKYFcg-foFCtOYI99lgA19cJI5Fh2txOlhjdUnitKVLYZYaKyMo6NKLvE71INA5JL9goow5RFQwbs-HLM0Yu8azdTlP7uP_QfL58wW0590YlwAAAA.9BQAUrc0Nx-O8_g6jMcCtlCiWmzId9zaxOJoEy6slTs",
		"gameId": 6,
		"roomId": "1673666642699055106"
	},
	local2: {
		socketIp: "ws://192.168.110.218:15003/ws",
		"token": "eyJhbGciOiJIUzI1NiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAE2NQQoDIQwA_5KzQjQxmv1Bz32BuypYEJbioVD69630UuY2h5k39Dxhc5KUyKXoDdTX-RNKIks8ZocNOJSm6VDbqqhlZG_zEclKcw33oFyQwcCoY6_PW1mJqAlDpC-MK04GZh_1PvM4_58ew-cCIHa_h4kAAAA.T8633CWVFeRPedw7EOOzL5tA3fMs-jFcJE_gBwzwG5Q",
		"gameId": 6,
		"roomId": "1674774075278364674"
	}
}

const configUrl = "http://54.251.66.82:10001/hall/api/game/wsList"
export class SocketRepository extends BaseRepository {
	constructor() {
		super()
	}
	public socketConfig(): Promise<{ socketIp: string, token: string, gameId: number, roomId: string }> {
		const env = wsEnv.online
		if (wsEnv.isTest) {
			return new Promise((reslove, reject) => {
				reslove(wsEnv.local2)
			})
		} else {
			return new Promise((reslove, reject) => {
                initConfig().then((response) => {
                    const item = response.gameConfig.find(item => item.id === env.gameId)
                    if (item) {
                        reslove(Object.assign(env, {
                            socketIp: item.ws,
                            token: sys.localStorage.getItem("token")
                        }))
                    } else {
                        reject("gameID未找到")
                    }
                })
			})
		}
	}

	/**用户下注的档位序号 */
	public userSwitch: number = 1

	public userServerData = {
		memberAssetGoldPieces: 0,//10300000,
		memberId: "",//"1668156680288485378",
		tableId: "",//"1660486324357214210"
		gameType: 0, //初始的游戏
		lv: 0
	}
	/**下注之后获取的最后一次结果数据 */
	public rollerLaunchResult = {
		"dl": {
			"si": [{
				/**本轮结算之后的余额 */
				"bl": 0,
				/**扣除下注金额之后的余额 */
				"blab": 13210000,
				/**转之前的余额 */
				"blb": 13300000,
				/**气泡奖励 */
				"bubble": 0,
				// /**投注金额 */
				// "cs": 0,
				"iconStay": 0,
				/**要定住的图标 */
				"fixedChessboardIcon": [],
				/**这一此转动获得的奖励 */
				"ctw": 0,
				/**免费游戏的图标和位置 */
				"freegame": { "1": 150000 },
				/**剩余小游戏次数 */
				"freeCount": 20,
				/**免费游戏（小游戏）的得分奖励 */
				"freeGameAmount": 0,
				"gameType": 0,
				/**本轮中奖的道具及该道具对应的奖励金额 */
				"lw": { "6": 0 },
				/**获得的奖励倍数 */
				"magnification": 10,
				/**盈亏情况 */
				"np": 0,
				/**	5条滚轴对应的道具ID【上升或下降前】 */
				"rl": [[9, 10, 11], [6, 7, 8], [6, 7, 8], [2, 3, 4], [7, 8, 9]],
				/**滚轴Id */
				"rollerId": [9, 39, 39, 24, 29],
				/**页面出现"上升/下降"图标的个数 */
				"sc": 0,
				/**进入的小游戏ID，0不进入，1对应小游戏1,2对应小游戏2。 */
				"sgb": 0,
				/**每条线的投注额 */
				"tb": 10000,
				/**本轮投注总额 */
				"tbb": 90000,
				/**总奖励 */
				"tw": 0,
				/**中奖的道具ID以及位置，格式为：“中奖图标ID”[[滚轴id,滚轴上的图标ID]] */
				"wp": { "2": [[0, 0], [1, 0], [2, 0]] }
			}]
		}
	}
}
