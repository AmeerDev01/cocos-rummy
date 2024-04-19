

export const ProtocolCode = {
    /** HTTP */
    USER_LOGIN: "USER_LOGIN",
    NATIVE_USER_LOGIN: "NATIVE_USER_LOGIN",
    GET_NOTICE: "GET_NOTICE",
    // crash
    /**心跳 */
    REQ_HEART_BEAT: "CRASH:1",
    RES_HEART_BEAT: "CRASH:-1",
    /** WEBSOCKET */
    REQ_USER_INFORMATION: 'CRASH:2',
    RES_USER_INFORMATION: 'CRASH:-2',

    // 玩家下注请求
    REQ_PLAYER_WAGERING: 'CRASH:802',
    //玩家下注返回
    RES_PLAYER_WAGERING: 'CRASH:-802',

    // 进入房间返回
    RES_ROOM_RETURN: 'CRASH:-4',

    //游戏开奖返回
    RES_LOTTERY_RETURN: 'CRASH:-805',

    //游戏结算返回
    RES_SETTLEMENT_RETURN: 'CRASH:-804',

    //查看房间开奖记录请求
    REQ_ROOM_DRAWING_RECORDS: 'CRASH:8013',

    //查看房间开奖记录返回
    RES_ROOM_DRAWING_RECORDS: 'CRASH:-8013',
    // 玩家总下注
    RES_ROOM_TOTAL_BETS: 'CRASH:-8102',
    // 时间同步
    RES_TIME_SYNCHRONIZATION: 'CRASH:-8101',
    // 下注列表
    LIST_OF_BETS: 'CRASH:-8104',
    // 后台充值金币
    REFRESH_COINS: "CRASH:-10",
    // vip等级
    VIPLEVEL: "CRASH:-11",
}
