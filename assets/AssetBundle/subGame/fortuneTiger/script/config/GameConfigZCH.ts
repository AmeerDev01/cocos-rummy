import { _decorator, Component, Enum, Node, tween } from 'cc';
import { gameInitData } from './DefinedDataTypeZCH';


const { ccclass, property } = _decorator;
/**游戏配置文件 */
@ccclass('GameConfigZCH')
export class GameConfigZCH {
    /**游戏初始化数据 */
    public static gameInitData: gameInitData = {
        bundleName: "fortuneTiger",
        gameName: "招财虎",
        gameHost: "SLOTS",
        isInitRes: false,
        isInitWs: false,
        gameID: 21,
        gameRollX: 3,
        gameRollY: 3,
        betList: [0.04, 0.16, 0.32, 0.8, 1.6, 3.6, 8, 16, 36, 60, 120, 160, 320],
        bigWin: 25,
        megaWin: 50,
        superWin: 150,
        betMultiple: 5,
        iconPos: [

        ]
    }
    /**游戏通用事件名称 */
    public static publicEventName = {
        /**游戏加载 */
        gameLoadStart: "public_gameLoadStart",
        /**游戏加载完成 */
        gameLoadEnd: "public_gameLoadEnd",
        /**游戏网络连接完成*/
        gameWSLogin: "public_gameWSLogin",
        /**游戏初始化 */
        gameInit: "public_gameInit",
        /**游戏网络消息回复事件 */
        wsReceive: "public_wsReceive",
        /**投注变化 */
        betChange: "public_betChange",
        /**自动投注  */
        autoBet: "public_autoBet",
        /**添加玩家金币 */
        goldChange: "goldChange",
    }
    /**icon对于id */
    public static iconID = {
        icon1: 1,
        icon2: 2,
        icon3: 3,

        icon4: 4,
        icon5: 5,
        icon6: 6,
        wild: 7
    }
    /**网络消息 */
    public static wsReceive = {
        bet: "ws_bet",
    }
    /**游戏预制体名称 */
    public static prefabName = {
        /**主游戏 */
        gameBody: "prefab_fortuneTiger_main",
        /** 帮助*/
        gameRule: "prefab_fortuneTiger_rule",
        /**bigWin */
        gameBigWin: "prefab_fortuneTiger_win",
        /**自动弹窗 */
        autoShow: "prefab_fortuneTiger_auto",
        /**设置界面 */
        gameSet: "prefab_fortuneTiger_set"
    }
    /**子游戏 事件名称*/
    public static gameEventName = {
        /**启动旋转 */
        startRoll: "startRoll",
        /**点击停止旋转 */
        touchStop: "touchStop",
        /**准备停止旋转 */
        stopRoll: "stopRoll",
        /**收到投注消息 */
        receiveBetMsg: "receiveBetMsg",
        /**单轴转动停止 */
        stopEndRollOne: "stopEndRollOne",
        /**正在播放单个icon动画 需要隐藏图标 */
        iconSpineIng: "iconSpineIng",
        /**当个图标动画播放完毕 */
        iconSpineEnd: "iconSpineEnd",
        /**赢钱区域加钱 */
        addGoldWin: "addGoldWin",
        /**玩家金币加钱 */
        addGoldMy: "addGoldMy",
        /**一局游戏 流程走完 可以开始下一句游戏 */
        newGame: "newGame",
        /**设置icon坐标*/
        setIconPos: "setIconPos",
        /**显示所有icon图标 */
        showIocnSpr: "showIocnSpr",
        /**wild 飞行动画 结束 */
        wildTweenEnd: "scatterTweenEnd",
        /**缩小显示窗口 */
        showViewSmall: "showViewSmall",
        /**放到显示窗口 */
        showViewBig: "showViewBig",
        /**播放线条 */
        showLine: "showLine",
    }
    /**播放老虎 动画事件 */
    public static showTigerSpine = {
        /**老虎 进入免费游戏  但又没中 退出来的动画*/
        tiger_in_out: "tiger_in_out",
        /**免费游戏结算 */
        tiger_free_win: "tiger_free_win",
        /**播放老虎小游戏动画 */
        tiger_free_ing: "tiger_free_ing",
        /**播放小虎 开红包动画*/
        tiger_redPak: "tiger_redPak",
    }
    /**老虎动画名称 */
    public static tigetSpinName = {
        /**默认动画 */
        idle: "idle",
        /**免费游戏中的动画 */
        freeGameIng: "rs_idle",
        /**wild 飞行完成的动画 */
        flyEnd: "wild_collect",
        /**窗口缩小的动画 */
        scale_S: "zo_start",
        /**窗口缩小的动画 常驻*/
        scale_S_idle: "zo_idle",
        /**没有获取 奖励的动画 */
        noGetFreeGame: "zo_exit",
        /**红包动画 */
        redPk: "rs_start",
        /**小游戏结算动画 */
        freeWin: "rs_win",
        /**小游戏结算动画 常驻*/
        freeWin_idle: "rs_win_idle",
        /**小游戏流程退出 */
        freeOut: "rs_win_exit"
    }
    /**弹窗显示事件 */
    public static gamePopShow = {
        /**显示bigWin弹窗 */
        showBigWin_open: "showBigWin_open",
        /**关闭bigWin弹窗 */
        showBigWin_close: "showBigWin_close",
        /**显示自动投注 弹窗*/
        showAutoBet_open: "showAutoBet_open",
        /**规则 */
        showRule: "pop_showRule",
        /**vip */
        showVip: "showVip",
        /**设置 */
        showSetUp: "pop_showSetUp",
        /**点击商城 */
        showShop: "pop_showShop",

        /**关闭弹窗 */
        closePop: "closePop",
    }
    /**声音 */
    public static soundData = {
        btn: "btn_click",
        /** 游戏背景 */
        bgm1: "zch_main_bg",
        /**免费背景 */
        bgm2: "zch_free_bg",
        /**所有滚轴停止的的音效 */
        rollerStop: "roller_stop",
        /**缩小滚轴的音效 */
        rollSmall: "suofang_roller",
        /**缩小后未进入小游戏的音效 */
        noFree: "suofang_tiger",
        /**wild 飞行动画的音效 */
        wild: "wild",
        /**连线音效 */
        lineWin: "line_win",
        /**进入小游戏音频 */
        freeGame: "free_trans",
        /**小游戏线路中奖音效 */
        freeWin: "free_line_win",
        /**退出下游戏的音效 */
        rollBig: "free_many",
        /**触发bigwin */
        bigwin: "bigwin",
        /**触发superwin */
        superwin: "superwin",
        /**触发mageewin */
        mageewin: "mageewin"
    }


}


