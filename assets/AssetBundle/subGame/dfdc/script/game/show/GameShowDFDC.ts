import { _decorator, Component, game, Node, Prefab, tween } from 'cc';
import { BaseEventDFDC } from '../../base/BaseEventDFDC';
import { GameConfigDFDC } from '../../config/GameConfigDFDC';
import { BaseGameDataMgeDFDC } from '../../base/BaseGameDataMgeDFDC';
import { BaseSoundMgeDFDC } from '../../base/BaseSoundMgeDFDC';
import { gameType } from '../../config/DefinedDataTypeDFDC';
import { JackpotGameDFDC } from './JackpotGameDFDC';

const { ccclass, property } = _decorator;

@ccclass('GameShowDFDC')
export class GameShowDFDC extends Component {

    /**免费游戏背景节点 */
    @property(Node)
    ndFreeBg: Node = null;
    /**翻牌游戏节点 */
    @property(Node)
    ndJackpot: Node = null;
    /**旋转游戏节点 */
    @property(Node)
    ndRoll: Node = null;
    /**当前游戏类型 */
    currType: number = -1;

    protected onLoad(): void {
        BaseEventDFDC.Instance.on(GameConfigDFDC.gameInitData.bundleName, this.onEventMsg.bind(this));


    }
    protected start(): void {
        tween(this).delay(3).call(() => {
            let type = BaseGameDataMgeDFDC.Instance.getNextGameType();
            if (type == gameType.gamePay) {
                BaseSoundMgeDFDC.Instance.playMusic(1);
            } else if (type == gameType.gameFree) {
                BaseSoundMgeDFDC.Instance.playMusic(2);
            } else if (type == gameType.jackpot) {
                BaseSoundMgeDFDC.Instance.playMusic(3);
            }

        }).start();
        this.initShow(true);
        BaseSoundMgeDFDC.Instance.stopSoundName(GameConfigDFDC.soundData.loading);
    }
    initShow(isInit: boolean) {

        let type = BaseGameDataMgeDFDC.Instance.getNextGameType();

        if (type == this.currType) {
            return;
        }
        BaseEventDFDC.Instance.emit(GameConfigDFDC.gameEventName.showCurrGameType, type);
        this.currType = type;
        if (type == gameType.gamePay) {
            BaseSoundMgeDFDC.Instance.playMusic(1);
            this.ndRoll.active = true;
            this.ndFreeBg.active = false;
            this.ndJackpot.active = false;
        } else if (type == gameType.gameFree) {
            BaseSoundMgeDFDC.Instance.playMusic(2);
            this.ndRoll.active = true;
            this.ndFreeBg.active = true;
            this.ndJackpot.active = false;
        } else if (type == gameType.jackpot) {
            BaseSoundMgeDFDC.Instance.playMusic(3);
            // this.ndRoll.active = false;
            // this.ndFreeBg.active = false;
            this.ndJackpot.active = true;
            if (isInit) {
                this.ndJackpot.getComponent(JackpotGameDFDC).showStartJackpot(true);
            } else {
                this.ndJackpot.getComponent(JackpotGameDFDC).showStartJackpot(false);
            }
        }
    }
    test() {
        // this.ndRoll.active = false;

    }
    test2() {
        BaseSoundMgeDFDC.Instance.playMusic(1);
        this.ndRoll.active = true;
        this.ndFreeBg.active = false;
        this.ndJackpot.active = false;
    }
    onEventMsg(name: string, data) {
        if (name == "iconSpineEnd" || name == "iconSpineIng" || name == "showIocnSpr") {

        } else {
            console.error("事件----》", name, "----", data)
        }

        switch (name) {
            case GameConfigDFDC.gameEventName.setIconPos: {
                BaseEventDFDC.Instance.emit(GameConfigDFDC.publicEventName.gameInit);
            } break;
            case GameConfigDFDC.gameEventName.newGame: {
                this.initShow(false);
            } break;
            case GameConfigDFDC.gameEventName.startRoll: {

            } break;
            case GameConfigDFDC.gamePopShow.showJackPotWin_close: {
                this.hideJackpot();
            } break;
        }
    }

    /**关闭jackpot 游戏 */
    hideJackpot() {
        this.ndRoll.active = true;
        // this.ndJackpot.active = false;
        // BaseEventDFDC.Instance.emit(GameConfigDFDC.gamePopShow.showJackPotWin_open);
    }
}


