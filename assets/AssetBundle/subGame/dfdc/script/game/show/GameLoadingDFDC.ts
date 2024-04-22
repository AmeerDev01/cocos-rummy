import { _decorator, Component, instantiate, Label, Node, Prefab, ProgressBar, tween } from 'cc';
import { BaseEventDFDC } from '../../base/BaseEventDFDC';
import { BaseLoadResDFDC } from '../../base/BaseLoadResDFDC';
import { BaseSocketDFDC } from '../../base/BaseSocketDFDC';
import { GameConfigDFDC } from '../../config/GameConfigDFDC';
import { BaseSoundMgeDFDC } from '../../base/BaseSoundMgeDFDC';
import { BaseGameDataMgeDFDC } from '../../base/BaseGameDataMgeDFDC';






const { ccclass, property } = _decorator;

@ccclass('GameLoadingDFDC')
export class GameLoadingDFDC extends Component {
    /**进度条 */
    @property(ProgressBar)
    progress: ProgressBar = null;
    /**当进度 */
    @property(Label)
    labLoading: Label = null;
    /**版本号 */
    @property(Label)
    labVersion: Label = null;
    /**音频节点 */
    @property(Node)
    ndSound: Node = null;
    /**退出按钮 */
    @property(Node)
    ndOut: Node = null;

    /**游戏预制体 */
    preGame: Prefab = null;
    /**当前进度 */
    currSchedule: number = 0;
    isGame: boolean = false;

    protected onLoad(): void {
        GameConfigDFDC.isExitGame = false;
        BaseEventDFDC.Instance.on(GameConfigDFDC.gameInitData.bundleName, this.onGameMsg.bind(this));
        BaseSocketDFDC.Instance.gameInitWS();

        GameConfigDFDC.gameInitData.isInitRes = false;
        console.error = () => {

        }
    }
    protected start(): void {
        tween(this).delay(2).call(() => {
            this.ndOut.active = true
        }).start();
        this.setSchedule(0, 1);
        let nd = new Node();
        nd.parent = this.node.parent;
        BaseSoundMgeDFDC.Instance.init(nd);
        BaseSoundMgeDFDC.Instance.playSound(GameConfigDFDC.soundData.loading, true);
        BaseLoadResDFDC.Instance.loadPrefab(GameConfigDFDC.prefabName.gameBody, (a, b) => {
            this.setSchedule(a, b);
        }, (err, ass) => {
            if (ass) {
                GameConfigDFDC.gameInitData.isInitRes = true;
                this.preGame = ass;
                this.startGame();
            } else {
                this.exitGame();
            }
        })

    }
    /**游戏消息 */
    onGameMsg(name: string, data) {
        if (name == GameConfigDFDC.publicEventName.gameWSLogin) {
            this.startGame();
        }
    }
    /**启动游戏 */
    startGame() {
        if (this.isGame) {
            return;
        }
        console.error("88888888888")
        let login = GameConfigDFDC.gameInitData.isInitWs;
        let resEnd = GameConfigDFDC.gameInitData.isInitRes;
        if (login && resEnd) {
            this.isGame = true;
            console.error("55555555555")
            // window.HALL_GLOBAL.hallDispatch(setSubGameRunState(SubGameRunState.RUN));

            window.HALL_GLOBAL.setSubGameRunState(5)
            console.error("6666666666")
            let nd: Node = instantiate(this.preGame);
            nd.parent = this.node.parent;
            tween(this).delay(2).call(() => {
                this.node.active = false;
            }).start();
        }
    }
    /**设置当前进度 */
    setSchedule(curr: number, all: number) {

        if (!this || !this.labLoading) {
            return;
        }
        let num = Math.floor(curr / all * 100);
        if (curr >= all) {
            num = 100;
        }
        if (curr / all < this.currSchedule) {
            return;
        }
        this.currSchedule = curr / all;
        this.labLoading.string = num + "%";
        this.progress.progress = curr / all;
    }
    bet() {
        console.error("点击下注")
        //  BaseSocketDFDC.Instance.sendMsg(MSG_TYPE.LAUNCHER_BET, { positionId: 1 })
    }
    exitGame() {
        BaseSocketDFDC.Instance.exitGame();
        BaseSocketDFDC.Instance.release();
        BaseLoadResDFDC.Instance.release();
        BaseEventDFDC.Instance.release();
        BaseGameDataMgeDFDC.Instance.release();
        BaseSoundMgeDFDC.Instance.release();
    }


}


