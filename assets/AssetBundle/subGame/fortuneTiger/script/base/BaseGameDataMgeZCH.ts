import { _decorator } from 'cc';
import { bigWinType, gameBetData, showIconSpine, winLinesList } from '../config/DefinedDataTypeZCH';
import { GameConfigZCH } from '../config/GameConfigZCH';
import { BaseEventZCH } from './BaseEventZCH';
import { LanguageConfigZCH } from './LanguageConfigZCH';
import { LanguageItemType } from '../../../../../script/language/languagePkg';

const { ccclass, property } = _decorator;

@ccclass('BaseGameDataMgeZCH')
export class BaseGameDataMgeZCH {
    private static _GameDataMgeZCH: BaseGameDataMgeZCH = null;
    public static get Instance(): BaseGameDataMgeZCH {
        if (!BaseGameDataMgeZCH._GameDataMgeZCH) {
            BaseGameDataMgeZCH._GameDataMgeZCH = new BaseGameDataMgeZCH();
        }
        return BaseGameDataMgeZCH._GameDataMgeZCH;
    }
    release() {
        BaseGameDataMgeZCH._GameDataMgeZCH = null;
    }
    currBetIndex: number = 0;
    /**游戏投注数据 */
    gameBetData: gameBetData = null;
    /**是否在游戏中 */
    gameIng: boolean = false;
    /**上一局免费的停止图标 */
    freeIconList: number[][] = [];
    /**免费游戏图标 */
    freeIcon: number = 0;
    /**获取多语言文子显示 */
    getLangTxt(key: string): string {
        let config = LanguageConfigZCH[key]
        let language = window.HALL_GLOBAL.lang.languageItemType;
        if (language == "zh") {
            language = LanguageItemType.EN;
        }
        if (config) {
            if (config[language]) {
                return config[language];
            }
        }
        return "";
    }

    initGame(data) {
        this.gameBetData = {
            gold: data.bl,
            bet: GameConfigZCH.gameInitData.betList[0] * GameConfigZCH.gameInitData.betMultiple,
            prizeList: [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]],
            winLines: [],
            allWinGold: 20,
            freeIcon: data.freeGameItem || 0,
            freeIconList: [],
            betIndex: data.lineId,
            magnification: 0,
            isFreeGameChance: false,
            isFreeGameCurr: !!data.gameType,
            isFreeGameNext: false,
            isFreeGameFirst: false,
            isFreeGameLast: false,
        }
        if (data.rollerIcon && data.gameType) {
            this.gameBetData.prizeList = data.rollerIcon;
        }
        this.setFreeIconList();
        // this.gameBetData.freeIcon = 0;
        // this.gameBetData.isFreeGameCurr = false;
    }
    /**获取 投注列表数据*/
    getBetList(): number[] {
        return GameConfigZCH.gameInitData.betList;
    }

    /**获取icon位置偏移信息 */
    getIconPosPY(icon: number): showIconSpine {
        let list = GameConfigZCH.gameInitData.iconPos;
        for (let i = 0; i < list.length; ++i) {
            if (list[i].icon == icon) {
                return list[i];
            }
        }
        return { x: 0, y: 0, icon: icon };
    }
    setGameIng(isGame: boolean) {
        this.gameIng = isGame;
    }
    getGameIng(): boolean {
        return this.gameIng;
    }
    /**设置当前免费游戏 出了的图标 */
    setFreeIconList() {
        if (this.gameBetData.isFreeGameCurr && !this.gameBetData.isFreeGameLast) {
            this.freeIconList = this.gameBetData.prizeList;

        } else {
            this.freeIconList = [];
            this.freeIcon = 0;
        }
    }


    /**设置转到数据 */
    setGameRollData(data) {
        if (data.totalRewards) {
            // debugger
        }
        // let s = JSON.stringify(data);
        // localStorage.setItem("zch_bet", s);
        // data = JSON.parse(localStorage.getItem("zch_bet"))
        //     console.error(data)
        this.gameBetData = {
            gold: data.balanceAfterSettlement,
            bet: data.bettingGoldCoins,//GameConfigZCH.gameInitData.betList[0] * GameConfigZCH.gameInitData.betMultiple,
            // prizeList: [[1, 2, 17], [1, 2, 17], [1, 2, 3], [1, 2, 3], [1, 2, 3]],
            prizeList: data.rollerIcon,
            allWinGold: data.totalRewards,
            winLines: [
                // [{ x: 0, y: 0, icon: 1 }, { x: 1, y: 0, icon: 1 }, { x: 2, y: 0, icon: 7 }],
                // [{ x: 0, y: 2, icon: 2 }, { x: 1, y: 1, icon: 2 }, { x: 2, y: 0, icon: 7 }]
            ],
            magnification: data.magnification,
            freeIcon: data.freeGameItem,
            freeIconList: [],
            betIndex: 0,
            isFreeGameChance: !!data.whetherFreeGame,
            isFreeGameCurr: !!data.indexGameType,
            isFreeGameNext: !!data.nextGameType,
            isFreeGameFirst: false,
            isFreeGameLast: false,
        }
        if (!this.gameBetData.isFreeGameCurr) {
            if (Math.random() < 0.2) {
                this.gameBetData.isFreeGameChance = true;
            }
        }
        if (this.gameBetData.isFreeGameChance && this.gameBetData.isFreeGameCurr) {
            this.gameBetData.isFreeGameFirst = true;
        }
        if (this.gameBetData.isFreeGameCurr && !this.gameBetData.isFreeGameNext) {
            this.gameBetData.isFreeGameLast = true;
        }
        if (this.gameBetData.freeIcon) {
            this.freeIcon = this.gameBetData.freeIcon;
        }
        for (let key in data.winningPosition) {
            let winLin: winLinesList = {
                index: parseInt(key),
                iconList: [],
            }
            for (let i = 0; i < data.winningPosition[key].length; ++i) {
                let iocnD: showIconSpine = {
                    x: data.winningPosition[key][i][0],
                    y: data.winningPosition[key][i][1],
                    icon: this.gameBetData.prizeList[data.winningPosition[key][i][0]][data.winningPosition[key][i][1]],
                }
                winLin.iconList.push(iocnD);
            }
            this.gameBetData.winLines.push(winLin);
        }

        BaseEventZCH.Instance.emit(GameConfigZCH.wsReceive.bet);
    }


    /**获取玩家金币 */
    getMyGold(): number {
        return this.gameBetData.gold;
    }
    /**获取当前投注金币 */
    getCurrBetGold(): number {
        if (this.gameBetData.bet) {
            return this.gameBetData.bet;
        }
        return GameConfigZCH.gameInitData.betList[0];
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
    /**获取该局总赢钱 */
    getAllWin(): number {
        return this.gameBetData.allWinGold;
    }

    /**获取所有wild动画 */
    getWildSpine(): showIconSpine[] {
        let list: showIconSpine[] = [];
        for (let i = 0; i < this.gameBetData.prizeList.length; ++i) {
            for (let j = 0; j < this.gameBetData.prizeList[i].length; ++j) {
                if (this.gameBetData.prizeList[i][j] == GameConfigZCH.iconID.wild) {
                    let spine = {
                        x: i,
                        y: j,
                        icon: GameConfigZCH.iconID.wild
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
            for (let j = 0; j < this.gameBetData.winLines[i].iconList.length; ++j) {
                let h = false;
                for (let k = 0; k < list.length; ++k) {
                    if (this.gameBetData.winLines[i].iconList[j].x == list[k].x && this.gameBetData.winLines[i].iconList[j].y == list[k].y) {
                        h = true;
                        break;
                    }
                }
                if (!h) {
                    list.push(this.gameBetData.winLines[i].iconList[j]);
                }
            }
        }
        return list;
    }
    /**获取所有中将动画 */
    getSpineList(): winLinesList[] {
        return this.gameBetData.winLines;
    }

    /**获取大奖类型 */
    getBigWinType(): bigWinType {
        let num = this.gameBetData.magnification;
        if (num == 0) {
            return bigWinType.noWin;
        } else if (num < GameConfigZCH.gameInitData.bigWin) {
            return bigWinType.small;
        } else if (num < GameConfigZCH.gameInitData.megaWin) {
            return bigWinType.bigWin;
        } else if (num < GameConfigZCH.gameInitData.superWin) {
            return bigWinType.megaWin;
        }
    }

    /**获取转轴滚动图标 */
    getRollIcon(index: number, num: number): number[] {
        let list: number[] = [1, 2, 3, 4, 5, 6, 7];
        let rollList: number[] = [];
        for (let i = 0; i < num; ++i) {
            let num1 = Math.floor(Math.random() * (list.length - 1));
            if (num1 >= 0 || num1 < list.length) {
                rollList.push(list[num1]);
            }
        }
        if (this.gameBetData.freeIcon) {
            rollList[Math.floor(Math.random() * rollList.length)] = this.gameBetData.freeIcon;
            rollList.push(this.gameBetData.freeIcon);
        }
        return rollList;
    }

    /********************************************************************************  */

    /**获取当局所有中奖 的 免费游戏图标 */
    getCurrFreeIcon(): showIconSpine[] {
        let list: showIconSpine[] = [];
        let icons: number[][] = this.gameBetData.prizeList;
        for (let i = 0; i < icons.length; ++i) {
            for (let j = 0; j < icons[i].length; ++j) {
                if (icons[i][j] == this.gameBetData.freeIcon || icons[i][j] == GameConfigZCH.iconID.wild) {
                    let ic = {
                        x: i,
                        y: j,
                        icon: icons[i][j]
                    }
                    list.push(ic);
                }
            }
        }

        return list
    }

    /**获取中将线 */
    getSpineLines(): number[] {
        let list: number[] = [];
        for (let i = 0; i < this.gameBetData.winLines.length; ++i) {
            list.push(this.gameBetData.winLines[i].index);
        }
        return list;
    }

    /**获取当局是否获得小游戏的机会 */
    getIsObtainFree(): boolean {
        return this.gameBetData.isFreeGameChance;
    }
    /**获取当前是否是小游戏 */
    getCurrIsFreeGame(): boolean {
        return this.gameBetData.isFreeGameCurr;
    }
    /**获取下局是否是小游戏 */
    getNextIsFreeGame(): boolean {
        return this.gameBetData.isFreeGameNext;
    }
    /**获取本局是否时最后一次小游戏 */
    getLastFreeGame(): boolean {
        return this.gameBetData.isFreeGameLast;
    }
    /**获取首次小游戏 */
    getFirstFree(): boolean {
        return this.gameBetData.isFreeGameFirst;
    }
    /**获取下一局是否是小游戏 */
    // getCurrIsFreeGame(): boolean {
    //     return this.gameBetData.isFreeGameNext;
    // }
    /**中奖10倍的图标 */
    getIcon10(): number {
        if (this.gameBetData.freeIcon) {
            return this.gameBetData.freeIcon;
        }
        return this.freeIcon;
    }
    /**获取开奖 图标 */
    getPrizeList(): number[][] {
        if (this.gameBetData.isFreeGameCurr && this.freeIconList && this.freeIconList.length) {
            let list: number[][] = [];
            for (let i = 0; i < this.freeIconList.length; ++i) {
                let list1: number[] = [];
                for (let j = 0; j < this.freeIconList[i].length; ++j) {
                    if (this.freeIconList[i][j] != this.gameBetData.prizeList[i][j]) {
                        list1.push(this.gameBetData.prizeList[i][j]);
                    } else {
                        list1.push(0);
                    }
                }
                list.push(list1);
            }
            return list;
        }
        return this.gameBetData.prizeList;
    }
}


