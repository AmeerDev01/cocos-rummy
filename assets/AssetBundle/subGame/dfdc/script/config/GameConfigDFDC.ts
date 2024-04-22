import { _decorator, Component, Enum, Node, tween } from 'cc';
import { gameInitData } from './DefinedDataTypeDFDC';


const { ccclass, property } = _decorator;
/**游戏配置文件 */
@ccclass('GameConfigDFDC')
export class GameConfigDFDC {
    /**游戏是否退出 */
    public static isExitGame: boolean = false;
    /**游戏初始化数据 */
    public static gameInitData: gameInitData = {
        bundleName: "dfdc",
        gameName: "多福多财",
        gameHost: "SLOTS",
        isInitRes: false,
        isInitWs: false,
        gameID: 18,
        gameRollX: 5,
        gameRollY: 3,
        betList: [0.2, 0.8, 1.6, 4, 8, 18, 40, 80, 180, 300, 600, 800, 1600],
        bigWin: 250,
        megaWin: 500,
        superWin: 1500,
        jackpotGrandList: [0.2, 0.5, 1],
        changeIcon: [5, 6, 7, 8],
        betMultiple: 1,
        jackpotWildList: [0, 0, 0, 0, 0, 100, 100, 100, 100, 120, 160, 200, 210],
        iconPos: [
            { x: 2, y: -2, icon: 1 },
            { x: 9, y: 0, icon: 2 },
            { x: 7, y: 4, icon: 3 },
            { x: 2, y: -3, icon: 4 },
            { x: 2, y: -3, icon: 5 },
            { x: 1, y: -3, icon: 6 },
            { x: 2, y: -3, icon: 7 },
            { x: 2, y: -3, icon: 8 },
            { x: 2, y: -2, icon: 9 },
            { x: 2, y: -2, icon: 10 },
            { x: 2, y: -2, icon: 11 },
            { x: 2, y: -3, icon: 12 },
            { x: 2, y: -2, icon: 13 },
            { x: 2, y: -2, icon: 14 },
            { x: 2, y: -2, icon: 15 },
            { x: 0, y: 0, icon: 16 },
            { x: 0, y: 0, icon: 17 },
        ],
        jackMap: {
            GRAND: 40,
            MAJOR: 30,
            MINI: 10,
            MINOR: 20
        }
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
        /**玩家金币变化 */
        goldChange: "goldChange",
    }
    /**icon对于id */
    public static iconID = {
        /**金币 */
        gold: 1,
        /**银元宝 */
        yuanBao1: 2,
        /**绿乌龟 */
        wuGui1: 3,
        /**船 */
        chuan1: 4,
        /**鸟 */
        niao1: 5,
        /**金元宝 */
        yuanBao2: 6,
        /**金乌龟 */
        wuGui2: 7,
        /**金帆船 */
        chuan2: 8,
        /**金鸟 */
        niao2: 9,
        A: 10,
        K: 11,
        Q: 12,
        J: 13,
        icon_10: 14,
        icon_9: 15,
        wild: 16,
        scatter: 17
    }
    /**网络消息 */
    public static wsReceive = {
        bet: "ws_bet",
    }
    /**游戏预制体名称 */
    public static prefabName = {
        /**初始显示弹窗 */
        initPop: "prefab_dfdc_init",
        /**初始显示  面游戏时弹窗 */
        initPopFree: "prefab_dfdc_initFree",
        /**主游戏 */
        gameBody: "prefab_dfdc_main",
        /**jackpot */
        gameJackpot: "prefab_dfdc_jackpot_game",
        /** 帮助*/
        gameRule: "prefab_dfdc_rule",
        /**bigWin */
        gameBigWin: "prefab_dfdc_win",
        /**免费次数弹窗 */
        freeNumPre: "prefab_dfdc_freeNum",
        /**免费赢钱弹窗 */
        freeWinPre: "prefab_dfdc_freeWin",
        /** jackpot 赢钱预制体*/
        jackpotWin: "prefab_dfdc_JackpoyWin",
        /**自动弹窗 */
        autoShow: "prefab_auto",
        /**设置界面 */
        gameSet: "prefab_dfdc_set",
    }
    /**子游戏 事件名称*/
    public static gameEventName = {
        /**启动旋转 */
        startRoll: "startRoll",
        /**停止旋转 (收到消息开始停止)*/
        stopRoll: "stopRoll",
        /**点击停止按钮 */
        touchStop: "touchStop",
        /**收到投注消息 */
        receiveBetMsg: "getBetMsg",
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
        /**设置超级滚动坐标 */
        setRollPos: "setRullPos",
        /**播放超级滚动动画 */
        showRollSpine: "showRollSpine",
        /**显示所有icon图标 */
        showIocnSpr: "showIocnSpr",
        /**蝙蝠 飞行动画 结束 */
        wildTweenEnd: "scatterTweenEnd",
        /**点击 jackpot 翻牌 */
        touchJackpo: "touchJackpo",
        /**当前游戏类型 */
        showCurrGameType: "showCurrGameType",
    }
    /**弹窗显示事件 */
    public static gamePopShow = {
        /**显示免费获取次数界面 */
        showCurrFreeNum_open: "showCurrFreeNum_open",
        /**关闭免费获取次数界面 */
        showCurrFreeNum_close: "showCurrFreeNum_close",
        /**显示免费游戏 赢钱界面 */
        showFreeWin_open: "showFreeWin_open",
        /**关闭免费游戏 赢钱界面 */
        showFreeWin_close: "showFreeWin_close",
        /**打开小游戏 */
        showJackPot_open: "showJackPot_open",
        /**关闭小游戏 */
        showJackPot_close: "showJackPot_close",
        /**打开小游戏赢钱界面 */
        showJackPotWin_open: "showJackPotWin_open",
        /**关闭小游戏赢钱界面 */
        showJackPotWin_close: "showJackPotWin_close",
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
        /**关闭 初始化显示界面（免费） */
        closeInitFree: "closeInitFree",
        /**关闭弹窗 */
        closePop: "closePop",
    }
    /**声音 */
    public static soundData = {
        btn: "",
        /** 游戏背景 */
        bgm1: "dfdc_main_bgm",
        /**免费背景 */
        bgm2: "dfdc_free_bgm",
        /** 翻牌小游戏 */
        bgm3: "dfdc_bonus_bgm",
        /**从大厅进入加载页面的音效 */
        loading: "game_loading",
        /** 初始化游戏音效*/
        initShow: "dfdc_opening",
        /**点击旋转按钮时的音效 */
        touchSpin: "dfdc_spin",
        /**点击停止按钮声音 */
        touchStop: "hkfg_btn_stop",
        /**点击减小按钮 */
        touchCutBet: "hkfg_btn_minusbet",
        /**点击加 按钮 */
        touchAddBet: "hkfg_btn_plusbet",
        /**翻牌小游戏 翻牌音效 */
        touchCard: "dfdc_bonus_select",
        /**超级滚动 滚动时声音 */
        superRull: "base_main_scatterlong",
        /** scatter 出现的声音*/
        scatter1: "base_main_scatter_1",
        scatter2: "base_main_scatter_2",
        scatter3: "base_main_scatter_3",
        /**播放所有中将icon */
        showAllIcon: "base_main_smallwin",
        /**播放单线中将音效 */
        showOneIcon: "base_main_midwin",
        /** 添加 玩家金币*/
        goldAdd: "share_money",
        /**wild 蝙蝠飞行结束的动画 */
        wildTweenEnd: "dfdc_fly_fu",
        /** 5连*/
        fiveWin: "wulian",
        /**免费 赢钱展示 */
        popFreeWin: "dfdc_result",
        /**翻牌小游戏赢钱的音效 */
        popCardFree: "dfdc_bonus_result",
        /**免费次数弹窗的音效 */
        popFreeNum: "hkfg_f_vo",
        /**bigwin */
        popBigWin1: "bigwin",
        popBigWin2: "megawin",
        popBigWin3: "dfdc_superwin",
    }


}


