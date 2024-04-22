import { _decorator, Component, Toggle } from 'cc';
import UseSetOption from '../../../../../../script/utils/UseSetOption';
import { BaseSoundMgeZCH } from '../../base/BaseSoundMgeZCH';
import { BaseEventZCH } from '../../base/BaseEventZCH';
import { GameConfigZCH } from '../../config/GameConfigZCH';
const { ccclass, property } = _decorator;

@ccclass('GameSettingZCH')
export class GameSettingZCH extends Component {
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
        BaseSoundMgeZCH.Instance.onSoundOpen({ open: isTouch });
    }
    /**背景回掉 */
    touchMusic() {
        let isTouch = this.togMusic.isChecked;
        UseSetOption.Instance().setOption("music", isTouch);
        BaseSoundMgeZCH.Instance.onBgOpen({ open: isTouch });
    }
    closePop() {
        BaseEventZCH.Instance.emit(GameConfigZCH.gamePopShow.closePop, GameConfigZCH.prefabName.gameSet);
    }
}



