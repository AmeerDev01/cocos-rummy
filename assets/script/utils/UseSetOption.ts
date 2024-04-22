import { assert, sys } from "cc"
import Singleton from "./Singleton"
import { hallAudio } from "../hall/index"
import { SoundPathDefine } from "../hall/sourceDefine/soundDefine"
import { AudioMgr } from "./AudioMgr"

type OptionType = {
  music: boolean,
  sound: boolean,
  vibration: boolean,
  language: 'default' | 'english',
  gameSet: { [key: string]: any }
}
let audio: AudioMgr<any>
export const setActiveAudio = (_audio: AudioMgr<any>) => {
  audio = _audio
}

export default class UseSetOption extends Singleton {
  constructor() {
    super()
    const option = sys.localStorage.getItem('option')
    if (!option) {
      sys.localStorage.setItem('option', JSON.stringify(this.option))
    } else {
      this.option = JSON.parse(sys.localStorage.getItem('option'))
      !this.option.gameSet && (this.option.gameSet = {})
    }
  }
  public option: OptionType = {
    music: true,
    sound: true,
    vibration: true,
    language: 'english',
    gameSet: {}
  }
  setOption(key: keyof OptionType, value: any) {
    this.option[key as string] = value
    sys.localStorage.setItem('option', JSON.stringify(this.option))
    if (key === "music") {
      value ? hallAudio && hallAudio.play(SoundPathDefine.MAIN_BGM, true) : hallAudio && hallAudio.stop()
      if (audio) {
        value ? audio.resume() : audio.pause()
      }
    }
  }
  /**专门用于设置gameSet */
  setGameOption(gameKey: string, value: object) {
    const option = UseSetOption.Instance().option.gameSet
    if (!option[gameKey]) {
      option[gameKey] = value
    } else {
      Object.assign(option[gameKey], value)
    }
    this.setOption('gameSet', Object.assign({}, this.option.gameSet, { [gameKey]: option[gameKey] }))
  }
}