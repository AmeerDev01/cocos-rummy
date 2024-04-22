import { _decorator, Component, Node, Toggle } from 'cc';
import UseSetOption from '../../../../../../script/utils/UseSetOption';
import { BaseEventDFDC } from '../../base/BaseEventDFDC';
import { BaseSoundMgeDFDC } from '../../base/BaseSoundMgeDFDC';
import { GameConfigDFDC } from '../../config/GameConfigDFDC';
const { ccclass, property } = _decorator;

@ccclass('GameSettingDFDC')
export class GameSettingDFDC extends Component {
    /**音效开关 */
    @property(Toggle)
    togSound: Toggle = null;
    /**背景音乐 */
    @property(Toggle)
    togMusic: Toggle = null;
    protected onLoad(): void {
        this.setInitShow();
    }
    setInitShow() {
        this.togMusic.isChecked = UseSetOption.Instance().option.music;
        this.togSound.isChecked = UseSetOption.Instance().option.sound;
    }
    /**音效回掉 */
    touchSound() {
        let isTouch = this.togSound.isChecked;
        UseSetOption.Instance().setOption("sound", isTouch);
        BaseSoundMgeDFDC.Instance.onSoundOpen({ open: isTouch });
    }
    /**背景回掉 */
    touchMusic() {
        let isTouch = this.togMusic.isChecked;
        UseSetOption.Instance().setOption("music", isTouch);
        BaseSoundMgeDFDC.Instance.onBgOpen({ open: isTouch });
    }
    closePop() {
        BaseEventDFDC.Instance.emit(GameConfigDFDC.gamePopShow.closePop, GameConfigDFDC.prefabName.gameSet);
    }
}


