import { _decorator } from 'cc';
import { bigWinType, gameBetData, jackpotType, showIconSpine } from '../config/DefinedDataTypeDFDC';
import { GameConfigDFDC } from '../config/GameConfigDFDC';
import { BaseEventDFDC } from './BaseEventDFDC';
import { LanguageConfigDFDC } from './LanguageConfigDFDC';


const { ccclass, property } = _decorator;

@ccclass('BaseGameDataMgeDFDC')
export class BaseGameDataMgeDFDC {
    private static _BaseGameDataMgeDFDC: BaseGameDataMgeDFDC = null;
    public static get Instance(): BaseGameDataMgeDFDC {
        if (!BaseGameDataMgeDFDC._BaseGameDataMgeDFDC) {
            BaseGameDataMgeDFDC._BaseGameDataMgeDFDC = new BaseGameDataMgeDFDC();
        }
        return BaseGameDataMgeDFDC._BaseGameDataMgeDFDC;
    }

    release() {
        // BaseGameDataMgeDFDC._BaseGameDataMgeDFDC = null;
    }
    /**游戏投注数据 */
    private gameBetData: gameBetData = null;
    currBetIndex: number = 0;
    /**获取多语言文子显示 */
    getLangTxt(key: string): string {
        let config = LanguageConfigDFDC[key]
        if (config) {
            if (config[window.HALL_GLOBAL.lang.languageItemType]) {
                return config[window.HALL_GLOBAL.lang.languageItemType];
            }
        }
        return "";
    }

    initGame(data) {
        this.gameBetData = {
            gold: data.bl,
            goldShow: data.bl,
            bet: GameConfigDFDC.gameInitData.betList[data.lineId - 1] * GameConfigDFDC.gameInitData.betMultiple,
            prizeList: [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]],
            isFreeFirst: false,
            isFreeLast: false,
            superRoll: 100,
            freeNumSurplus: data.freeGameCount,
            freeNumAll: data.totalFreeGameCount,
            currGetFreeNum: 0,
            currWinGold: 0,
            allWinGold: data.freeGameAmount,
            winLines: [],
            currGameType: data.gameType,
            nextGameType: data.gameType,
            jbpWildNum: data.dfdcWildIntegral,
            jackIconList: data.grid,
            jackIconWin: data.winningIcon,
            jackMap: data.jackmap,
            betIndex: data.lineId - 1,
            /**赢钱倍数 */
            magnification: 0,
        }
        if (this.gameBetData.jackIconList && this.gameBetData.jackIconList.length) {
            for (let i = 0; i < this.gameBetData.jackIconList.length; ++i) {
                this.gameBetData.jackIconList[i] = this.orderList(this.gameBetData.jackIconList[i]);
            }
            this.gameBetData.jackIconList = this.orderList(this.gameBetData.jackIconList);
        }
    }


    /**数组乱序 */
    orderList(list: any[]): any[] {
        for (let i = 0; i < list.length; ++i) {
            const j = Math.floor(Math.random() * list.length);
            let a = list[i];
            let b = list[j];
            list[i] = b;
            list[j] = a;
        }
        return list;
    }
    test() {
        let data = {
            "bl": this.gameBetData.gold,
            "blab": 4.800,
            "blb": 5.000,
            "bubble": 0.00,
            "change": {},
            "cs": 0.00,
            "ctw": 0.00,
            "dfdcWildIntegral": { 6: 2 },
            "esb": {},
            "fireRingSwitch": 0,
            "fixedChessboardIcon": [],
            "fixedChessboardIconAndAmount": [],
            "freeCount": 10,
            "freeGameAmount": 0.00,
            "freegame": { 17: [[0, 2], [1, 0], [3, 0]] },
            "gameType": 1,
            "iconStay": 0,
            "indexGameType": 0,
            "lw": { 3: 0.8 },
            "magnification": 5,
            "oneFreeCount": 10,
            "np": 0.00,
            "rl": [[3, 1, 17], [17, 16, 14], [3, 5, 13], [17, 12, 1], [12, 4, 1]],
            "rollerId": [45, 36, 51, 55, 6],
            "sc": 0,
            "sgb": 0,
            "tb": 0.16,
            "tbb": 0.200,
            "totalFreeGameCount": 10,
            "tw": 0.8,
            "wp": { 3: [[0, 0], [1, 1], [2, 0]] }
        }

        this.setGameRollData(data);

    }
    /**获取 投注列表数据*/
    getBetList(): number[] {
        return GameConfigDFDC.gameInitData.betList;
    }
    /**获取投注挡位 */
    getBetIndex(): number {
        if (this.gameBetData.betIndex) {
            return this.gameBetData.betIndex;
        }
        return this.currBetIndex;
    }
    setBetIndex(index: number) {
        this.gameBetData.betIndex = index;
        this.currBetIndex = index;
    }
    /**获取jackpot倍数 */
    getJackpotPool(jackpot: jackpotType): number {
        if (this.gameBetData.jackMap && this.gameBetData.jackMap[jackpot]) {
            return this.gameBetData.jackMap[jackpot];
        }
        return GameConfigDFDC.gameInitData.jackMap[jackpot];
    }

    /**获取icon位置偏移信息 */
    getIconPosPY(icon: number): showIconSpine {
        let list = GameConfigDFDC.gameInitData.iconPos;
        for (let i = 0; i < list.length; ++i) {
            if (list[i].icon == icon) {
                return list[i];
            }
        }
        return { x: 0, y: 0, icon: icon };
    }
    /**获取聚宝盆wild 的数量*/
    getJBPWildNum(index: number): number {
        let list = GameConfigDFDC.gameInitData.changeIcon;
        if (index >= list[0]) {
            if (this.gameBetData.jbpWildNum[index]) {
                return this.gameBetData.jbpWildNum[index];
            }

        }
        return 0;
    }
    /**设置转到数据 */
    setGameRollData(data) {
        // data = { "dl": { "si": [{ "bl": this.gameBetData.gold, "blab": 4.800, "blb": 5.000, "bubble": 0.00, "change": {}, "cs": 0.00, "ctw": 0.00, "dfdcWildIntegral": 2, "esb": {}, "fireRingSwitch": 0, "fixedChessboardIcon": [], "fixedChessboardIconAndAmount": [], "freeCount": 0, "freeGameAmount": 0.00, "freegame": {}, "gameType": 0, "iconStay": 0, "indexGameType": 0, "lw": { "13": 0.000640 }, "magnification": 0.080, "np": 0.00, "rl": [[13, 10, 5], [13, 15, 2], [5, 12, 13], [5, 16, 3], [1, 12, 12]], "rollerId": [78, 64, 75, 66, 43], "sc": 0, "sgb": 0, "tb": 0.008, "tbb": 0.200, "totalFreeGameCount": 0, "tw": 0.000640, "wp": { "13": [[0, 0], [1, 0], [2, 2], [3, 1]] } }] } }
        // data = data.dl.si[0];
        let s2 = localStorage.getItem("bet0");
        // if (s2) {
        //     data = JSON.parse(s2);
        // }
        let s = JSON.stringify(data);
        localStorage.setItem("bet0", s);
        console.error(data);
        this.gameBetData.bet = data.cs;
        this.gameBetData.gold = data.bl;
        this.gameBetData.goldShow = data.blab;
        this.gameBetData.jbpWildNum = data.dfdcWildIntegral;
        this.gameBetData.freeNumSurplus = data.freeCount;
        this.gameBetData.currGameType = data.gameType;
        this.gameBetData.nextGameType = data.gameType;
        this.gameBetData.prizeList = data.rl ? data.rl : [];
        this.gameBetData.freeNumAll = data.totalFreeGameCount;
        this.gameBetData.currWinGold = data.tw;
        this.gameBetData.allWinGold = data.freeGameAmount;
        this.gameBetData.betIndex = data.lineId - 1;
        if (this.gameBetData.freeNumAll == this.gameBetData.freeNumSurplus) {
            this.gameBetData.allWinGold = this.gameBetData.currWinGold;
        }
        this.gameBetData.winLines = [];
        if (data.magnification) {
            this.gameBetData.magnification = data.magnification;
        } else {
            this.gameBetData.magnification = 0;
        }
        this.gameBetData.currGetFreeNum = data.oneFreeCount;
        this.gameBetData.jackIconList = data.grid;
        this.gameBetData.jackIconWin = data.winningIcon;
        if (data.wp) {
            for (let key in data.wp) {
                if (key != GameConfigDFDC.iconID.scatter + "") {
                    let win = data.wp[key];
                    let list = [];
                    for (let i = 0; i < win.length; ++i) {
                        let wd: showIconSpine = {
                            x: win[i][0],
                            y: win[i][1],
                            icon: this.gameBetData.prizeList[win[i][0]][win[i][1]]
                        }
                        list.push(wd);
                    }
                    this.gameBetData.winLines.push(list);
                }
            }
        }
        BaseEventDFDC.Instance.emit(GameConfigDFDC.wsReceive.bet);
    }
    /**获取玩家金币 */
    getMyGold(): number {
        return this.gameBetData.gold;
    }
    /**玩家金币变化 */
    setMyGold(data: any) {
        this.gameBetData.gold = data.gold;
        BaseEventDFDC.Instance.emit(GameConfigDFDC.publicEventName.goldChange);
    }
    /**获取玩家显示的金币 */
    getShowGold(): number {
        return this.gameBetData.goldShow;
    }
    /**获取当前投注金币 */
    getCurrBetGold(): number {
        if (this.gameBetData.bet) {
            return this.gameBetData.bet;
        }
        return GameConfigDFDC.gameInitData.betList[0];
    }
    /**获取 投注下标 */
    getCurrBetIndex(): number {
        if (this.gameBetData.bet) {
            let list = GameConfigDFDC.gameInitData.betList;
            for (let i = 0; i < list.length; ++i) {
                if (this.gameBetData.bet == list[i]) {
                    return i;
                }
            }
        }
        return 0;
    }

    /**获取jackpot 的开奖数据 */
    getJackpotOpenData(): jackpotType[][] {
        return this.gameBetData.jackIconList;
    }
    /**获取是否是五连 */
    get5Lian(): boolean {
        for (let i = 0; i < this.gameBetData.winLines.length; ++i) {
            let list: number[] = [0, 0, 0, 0, 0];
            for (let j = 0; j < this.gameBetData.winLines[i].length; ++j) {
                if (this.gameBetData.winLines[i][j].x < list.length) {
                    list[this.gameBetData.winLines[i][j].x] = 1;
                }
            }
            if (list.indexOf(0) == -1) {
                return true;
            }
        }
        return false;
    }

    /**获取当局玩家赢钱 */
    getCurrWin(): number {
        return this.gameBetData.currWinGold;
    }
    /**获取该局总赢钱 */
    getAllWin(): number {
        return this.gameBetData.allWinGold;
    }
    /**获取jackpot 赢钱 */
    getJackpoWin(): number {
        return this.gameBetData.currWinGold;
    }
    /**获取 scatter 动画播放*/
    getScatterSpine(): showIconSpine[] {
        let list = this.gameBetData.prizeList;
        let scatter: showIconSpine[] = [];
        for (let i = 0; i < list.length; ++i) {
            if (i < GameConfigDFDC.gameInitData.gameRollX) {
                for (let j = 0; j < list[i].length; ++j) {
                    if (list[i][j] == GameConfigDFDC.iconID.scatter) {
                        let sca: showIconSpine = {
                            x: i,
                            y: j,
                            icon: GameConfigDFDC.iconID.scatter
                        }
                        scatter.push(sca);
                    }
                }
            }
        }
        if (scatter.length < 2) {
            scatter = [];
        }
        return scatter;
    }
    /**获取 已经出现的scatter数量 */
    getScatterNum(index: number): number {
        let list = this.gameBetData.prizeList;
        let num = 0;
        if (list[index].indexOf(GameConfigDFDC.iconID.scatter) >= 0) {
            for (let i = 0; i < list.length; ++i) {
                if (i <= index) {
                    for (let j = 0; j < list[i].length; ++j) {
                        if (list[i][j] == GameConfigDFDC.iconID.scatter) {
                            num++;
                        }
                    }
                } else {
                    break;
                }
            }
        }
        return num;
    }
    /**获取所有wild动画 */
    getWildSpine(): showIconSpine[] {
        let list: showIconSpine[] = [];
        for (let i = 0; i < this.gameBetData.prizeList.length; ++i) {
            for (let j = 0; j < this.gameBetData.prizeList[i].length; ++j) {
                if (this.gameBetData.prizeList[i][j] == GameConfigDFDC.iconID.wild) {
                    let spine = {
                        x: i,
                        y: j,
                        icon: GameConfigDFDC.iconID.wild
                    }
                    list.push(spine);
                }
            }
        }
        return list;
    }
    /**获取所有中将动画 */
    getSpineAll(): showIconSpine[] {
        let list: showIconSpine[] = [];
        for (let i = 0; i < this.gameBetData.winLines.length; ++i) {
            for (let j = 0; j < this.gameBetData.winLines[i].length; ++j) {
                let h = false;
                for (let k = 0; k < list.length; ++k) {
                    if (this.gameBetData.winLines[i][j].x == list[k].x && this.gameBetData.winLines[i][j].y == list[k].y) {
                        h = true;
                        break;
                    }
                }
                if (!h) {
                    list.push(this.gameBetData.winLines[i][j]);
                }
            }
        }
        return list;
    }
    /**获取中将线动画 */
    getSpineLines(): showIconSpine[][] {
        return this.gameBetData.winLines;
    }
    /**判断是否是 当局一次未获得免费 */
    getFirstFree() {
        if (this.gameBetData.freeNumAll) {
            if (this.gameBetData.freeNumSurplus == this.gameBetData.freeNumAll) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    /**获取当局是否是最后一局免费 */
    getLastFree(): boolean {
        if (this.gameBetData.freeNumAll) {
            if (this.gameBetData.freeNumSurplus == 0) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }
    /**获取下一局是否是免费游戏 */
    getNextIsFree(): boolean {
        if (this.gameBetData.freeNumSurplus == 0) {
            return false;
        } else {
            return true;
        }
    }
    /**获取剩余免费次数 */
    getSurplusFree(): number {
        return this.gameBetData.freeNumSurplus;
    }
    /**获取当前局获取的免费次数 */
    getCurrGetFreeNum(): number {
        return this.gameBetData.currGetFreeNum;
    }
    /**获取免费总次数 */
    getAllFreeNum(): number {
        return this.gameBetData.freeNumAll;
    }
    /**获取下句游戏类型 0付费转轴slot 1免费转轴slot 2翻牌小游戏 */
    getNextGameType(): number {
        return this.gameBetData.currGameType;
    }


    /**获取开奖 图标 */
    getPrizeList(): number[][] {
        if (!this.gameBetData.prizeList || this.gameBetData.prizeList.length == 0) {
            return [];
        }
        let s = JSON.stringify(this.gameBetData.prizeList);
        let list = JSON.parse(s);
        return list;
    }
    /**获取 超级旋转下标 */
    getSuperIndex(): number {
        let list = this.gameBetData.prizeList;
        let num = 0;
        for (let i = 0; i < list.length; ++i) {
            for (let j = 0; j < list[i].length; ++j) {
                if (list[i][j] == GameConfigDFDC.iconID.scatter) {
                    num++;
                    if (num == 2) {
                        return i + 1;
                    }
                }
            }
        }
        return 100;
    }
    /**获取大奖类型 */
    getBigWinType(): bigWinType {

        let num = this.gameBetData.currWinGold;
        if (num == 0) {
            return bigWinType.noWin;
        } else if (this.gameBetData.magnification < GameConfigDFDC.gameInitData.bigWin) {
            return bigWinType.small;
        } else if (this.gameBetData.magnification < GameConfigDFDC.gameInitData.megaWin) {
            return bigWinType.bigWin;
        } else if (this.gameBetData.magnification < GameConfigDFDC.gameInitData.superWin) {
            return bigWinType.megaWin;
        } else {
            return bigWinType.superWin;
        }
    }
    /**获取 jackpot开奖 类型 */
    getJackpotType(): jackpotType {
        return this.gameBetData.jackIconWin;
    }
    /**获取转轴滚动图标 */
    getRollIcon(index: number, num: number): number[] {
        let list: number[] = [1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 16, 17];
        let changeBet: number[] = GameConfigDFDC.gameInitData.changeIcon;
        let bet1: number[] = [2, 3, 4, 5];
        let bet2: number[] = [6, 7, 8, 9]
        let rollList: number[] = [];
        for (let i = 0; i < num; ++i) {
            let num1 = Math.floor(Math.random() * (list.length - 1));
            if (num1 >= 0 || num1 < list.length) {
                rollList.push(list[num1]);
            }
        }
        for (let i = 0; i < changeBet.length; ++i) {
            if (index >= changeBet[i]) {
                for (let j = 0; j < rollList.length; ++j) {
                    if (rollList[j] == bet1[i]) {
                        rollList[j] = bet2[i];
                    }
                }
            }
        }
        return rollList;
    }
}


