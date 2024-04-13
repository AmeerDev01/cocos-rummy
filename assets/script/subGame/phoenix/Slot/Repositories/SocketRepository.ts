import {sys} from "cc"
import {BaseRepository} from "./BaseRepository"
import {initConfig} from "../../../../hall/config"

const wsEnv = {
    isTest: false,
    online: {
        socketIp: "ws://54.251.66.82:15003/ws",
        "token": sys.localStorage.getItem("token"),
        "gameId": 10,
        "roomId": "1672958541691883522"
    },
    local1: {
        socketIp: "ws://192.168.110.180:15007/ws",
        "token": "eyJhbGciOiJIUzI1NiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAE3OSwoCMRBF0b3UOIH8q9I7cOwKKqbECNEgGTSIezftyOnlcXhvaDxhs4mQQnKYFcg-foFCtOYI99lgA19cJI5Fh2txOlhjdUnitKVLYZYaKyMo6NKLvE71INA5JL9goow5RFQwbs-HLM0Yu8azdTlP7uP_QfL58wW0590YlwAAAA.9BQAUrc0Nx-O8_g6jMcCtlCiWmzId9zaxOJoEy6slTs",
        "gameId": 10,
        "roomId": "1673666642699055106"
    },
    local2: {
        socketIp: "ws://192.168.110.218:15007/ws",
        "token": "eyJhbGciOiJIUzI1NiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAE2NQQoDIQwA_5KzQjQxmv1Bz32BuypYEJbioVD69630UuY2h5k39Dxhc5KUyKXoDdTX-RNKIks8ZocNOJSm6VDbqqhlZG_zEclKcw33oFyQwcCoY6_PW1mJqAlDpC-MK04GZh_1PvM4_58ew-cCIHa_h4kAAAA.T8633CWVFeRPedw7EOOzL5tA3fMs-jFcJE_gBwzwG5Q",
        "gameId": 10,
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
                /**
                 * 本轮结算之后的余额
                 */
                "balanceAfterSettlement": 0,
                /**
                 * 投注金额
                 */
                "bettingGoldCoins": 0,
                /**
                 * 换牌的ID及位置，ID指替换成哪张牌,位置为转轴ID和转轴上的位置。
                 */
                "change": {},
                /**
                 * 扣除下注金额之后的余额
                 */
                "coinsAfterBetting": 0,
                /**
                 * 转之前的余额
                 */
                "coinsBeforeBetting": 0,
                /**
                 * 剩余小游戏次数
                 */
                "freeCount": 0,
                /**
                 * 是否有小游戏
                 */
                "freeGame": {},
                /**
                 * 免费游戏赚的金币
                 */
                "freeGameAmount": 0,
                /**
                 * 当前游戏是什么游戏
                 */
                "indexGameType": 0,
                /**
                 * 凤凰图标倍数
                 */
                "magnification": 0,
                /**
                 * 下局游戏是什么游戏
                 */
                "nextGameType": 0,
                /**
                 *5条滚轴对应的道具ID
                 */
                "rollerIcon": [
                    [8, 1, 3],
                    [10,5, 12],
                    [6, 2, 3],
                    [4, 1, 2],
                    [9, 4, 3]
                ],
                /**
                 * 滚轴Id
                 */
                "rollerId": [
                    37,
                    49,
                    33,
                    15,
                    2
                ],
                /**
                 * 总奖励
                 */
                "totalRewards": 0,
                /**
                 * 是否有小游戏
                 */
                "whetherFreeGame": 0,
                /**
                 * 本轮中奖的道具及该道具对应的奖励金额
                 */
                "winningAmount": {},
                /**
                 * 中奖的道具ID以及位置，格式为：“中奖图标ID”[[滚轴id,滚轴上的图标ID]]
                 */
                "winningPosition": {},
                otherGameAttributesVo: {
                    /**
                     * 小游戏次数
                     */
                    "phoenixCount":0,
                    /**
                     * 小游戏右上角次数
                     */
                    "phoenixMagnification":0,
                    /**
                     * 小游戏次数
                     */
                    "totalFreeGameCount":0,
                    /**
                     * 元宝数量
                     */
                    "yuanBaoAmount":0,
                    /**
                     * 元宝位置
                     */
                    yuanBaoPosition:[],
                    /**
                     * 元宝倍数
                     */
                    "yuanBaoMagnification":0,
                    /**
                     * 元宝是否展示弹窗
                     */
                    "yuanBaoSpecialEffect":false,
                }
            }]
        }
    }
}
