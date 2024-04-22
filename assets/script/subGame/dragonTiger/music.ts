import {dragonTiger_Audio} from './index';
import { SoundPathDefine } from './sourceDefine/soundDefine';


/**
 * 背景音乐
 */
export const playMainBg = () => {
    dragonTiger_Audio.play(SoundPathDefine.MAIN_BG, true);
}
/**
 * 游戏开始
 */
export const playGame = () => {
    dragonTiger_Audio.playOneShot(SoundPathDefine.VOICE_CHIP);
}
/**
 * 按钮单击音效
 */
export const playBtnClick = () => {
    dragonTiger_Audio.playOneShot(SoundPathDefine.BTN_CLICK);
}

/**
 * 下注筹码音效
 */
export const playChip = () => {
    dragonTiger_Audio.playOneShot(SoundPathDefine.CHIP);
}

/**
 * 失败音效
 */
export const playDefeat = () => {
    dragonTiger_Audio.playOneShot(SoundPathDefine.DEFEAT);
}
  
/**
 * 胜利音效
 */
export const playWin = () => {
   dragonTiger_Audio.playOneShot(SoundPathDefine.WIN);
}
/**
 * 5秒倒计时
 */
export const playTimeout = () => {
    dragonTiger_Audio.playOneShot(SoundPathDefine.TIME_OUT);
}
/**
 * 金币收集音效
 */
export const playGetCoin = () => {
    dragonTiger_Audio.playOneShot(SoundPathDefine.GET_COIN);
}
/**
 * 翻牌声
 */
export const playTurnCard = () => {
    dragonTiger_Audio.playOneShot(SoundPathDefine.TURN_CARD);
}
/**
 * 翻虎
 */
export const playTigerCard = () => {
    dragonTiger_Audio.playOneShot(SoundPathDefine.TIGER_CARD);
}
/**
 * 翻龙
 */
export const playDragonCard = () => {
    dragonTiger_Audio.playOneShot(SoundPathDefine.DRAGON_CARD);
}