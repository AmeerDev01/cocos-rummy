import { _decorator, Component, instantiate, Label, Node, Prefab, ProgressBar, tween, UITransform } from 'cc';
import { BaseEventZCH } from '../../base/BaseEventZCH';
import { BaseLoadResZCH } from '../../base/BaseLoadResZCH';
import { BaseSocketZCH } from '../../base/BaseSocketZCH';
import { GameConfigZCH } from '../../config/GameConfigZCH';
import { BaseSoundMgeZCH } from '../../base/BaseSoundMgeZCH';
import { BaseGameDataMgeZCH } from '../../base/BaseGameDataMgeZCH';




const { ccclass, property } = _decorator;

@ccclass('GameLoadingZCH')
export class GameLoadingZCH extends Component {
    /**进度条 */
    @property(ProgressBar)
    progress: ProgressBar = null;
    /**当进度 */
    @property(Label)
    labLoading: Label = null;
    /**游戏预制体 */
    preGame: Prefab = null;
    /**当前加载进度 */
    loadNum: number = 0;
    /**退出按钮 */
    @property(Node)
    ndOut: Node = null;
    isGame: boolean = false;
    protected onLoad(): void {

        let ndp = this.node.parent.getComponent(UITransform);
        let w = ndp.width;
        let h = ndp.height;
        ndp.width = h;
        ndp.height = w;
        this.node.parent.angle = 90;
        this.node.getComponent(UITransform).width = Math.min(w, h);
        this.node.getComponent(UITransform).height = Math.max(w, h);
    }
    protected onDestroy(): void {
        let ndp = this.node.parent.getComponent(UITransform);
        let w = ndp.width;
        let h = ndp.height;
        ndp.width = h;
        ndp.height = w;
        this.node.parent.angle = 0;
        BaseLoadResZCH.Instance.release();
        BaseEventZCH.Instance.release();
        BaseGameDataMgeZCH.Instance.release();
        BaseSoundMgeZCH.Instance.release();
        BaseSocketZCH.Instance.release();
    }
    start() {
        BaseEventZCH.Instance.on(GameConfigZCH.gameInitData.bundleName, this.onGameMsg.bind(this));
        tween(this).delay(2).call(() => {
            this.ndOut.active = true
        }).start();
        let nd = new Node();
        nd.parent = this.node.parent;
        BaseSoundMgeZCH.Instance.init(nd);
        BaseSocketZCH.Instance.gameInitWS();
        this.setSchedule(0, 1);
        BaseLoadResZCH.Instance.loadPrefab(GameConfigZCH.prefabName.gameBody, (a, b) => {
            this.setSchedule(a, b);
        }, (err, ass) => {
            if (ass) {
                GameConfigZCH.gameInitData.isInitRes = true;
                this.preGame = ass;
                this.startGame();
            } else {
                this.exitGame();
            }
        })


    }
    /**游戏消息 */
    onGameMsg(name: string, data) {
        if (name == GameConfigZCH.publicEventName.gameWSLogin) {
            this.startGame();
        }
    }
    /**启动游戏 */
    startGame() {
        if (this.isGame) {
            return;
        }
        let login = GameConfigZCH.gameInitData.isInitWs;
        let resEnd = GameConfigZCH.gameInitData.isInitRes;

        if (login && resEnd) {
            GameConfigZCH.gameInitData.isInitRes = false;
            let nd: Node = instantiate(this.preGame);
            nd.parent = this.node.parent;
            window.HALL_GLOBAL.setSubGameRunState(window.HALL_GLOBAL.SubGameRunState.RUN);
            tween(this).delay(2).call(() => {
                this.node.active = false;
            }).start();
        }
    }
    /**设置当前进度 */
    setSchedule(curr: number, all: number) {
        let num = Math.floor(curr / all * 100);
        if (curr >= all) {
            num = 100;
        }
        if (num < this.loadNum) {
            return;
        }
        this.loadNum = num;
        this.labLoading.string = num + "%";
        this.progress.progress = num / 100;
    }
    bet() {
        console.error("点击下注")
        BaseSocketZCH.Instance.sendMsg({ positionId: 1 })
    }
    exitGame() {
        BaseSocketZCH.Instance.exitGame();
        BaseSocketZCH.Instance.release();
        BaseLoadResZCH.Instance.release();
        BaseEventZCH.Instance.release();
        BaseGameDataMgeZCH.Instance.release();
        BaseSoundMgeZCH.Instance.release();
    }


}


