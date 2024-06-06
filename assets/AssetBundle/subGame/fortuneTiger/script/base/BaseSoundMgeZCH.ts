
import { _decorator, Component, AudioSource, AudioClip, Node, director } from 'cc';
import { GameConfigZCH } from '../config/GameConfigZCH';
import { BaseLoadResZCH } from './BaseLoadResZCH';
import UseSetOption from '../../../../../script/utils/UseSetOption';


const { ccclass, property } = _decorator;


@ccclass('BaseSoundMgeZCH')
export class BaseSoundMgeZCH extends Component {
    bgAudio: AudioSource = null;
    audioList: AudioSource[] = [];
    /**当前背景音乐类型 */
    currBgType: number = -1;
    /**音频路径 */
    resUrl: string = "res/sound/";
    /**当前正在播放的音效 */
    currList: { name: string, audio: AudioSource }[] = [];


    private static _gameSoun: BaseSoundMgeZCH = null;
    public static get Instance(): BaseSoundMgeZCH {
        if (!BaseSoundMgeZCH._gameSoun) {
            BaseSoundMgeZCH._gameSoun = new BaseSoundMgeZCH();
        }
        return BaseSoundMgeZCH._gameSoun;
    }
    /** 
     * 音量数据*/
    soundData: { musicVolume: number, musicOpen: boolean, soundVolume: number, soundOpen: boolean } = {
        musicVolume: 1,
        musicOpen: true,
        soundOpen: true,
        soundVolume: 1
    }

    /**销毁 */
    release() {
        this.pauseMusic();
        this.pauseSound();
        this.bgAudio.node.parent.removeAllChildren();
        this.bgAudio = null;
        this.audioList = [];
        this.currList = [];
      
        BaseSoundMgeZCH._gameSoun = null;
    }
    init(node: Node) {
        if (!this.bgAudio) {
            let nd1: Node = new Node();
            this.bgAudio = nd1.addComponent(AudioSource);
            nd1.parent = node;
        }
        this.soundData.musicOpen = UseSetOption.Instance().option.music;
        this.soundData.soundOpen = UseSetOption.Instance().option.sound;
      
    }
    /**监听 背景音乐设置开关 */
    onBgOpen(data) {
        this.soundData.musicOpen = data.open;
        this.setMusicOpen(data.open);
    }
    /** 监听 音效开关 */
    onSoundOpen(data) {
        this.setSoundOpen(data.open);
    }
    /**************************************************************** */
    /**播放背景音乐 0 普通 1免费时 2翻牌*/
    playMusic(type: number) {
        if (type == this.currBgType) {
            return;
        }
        this.currBgType = type;
        if (!this.soundData.musicOpen) {
            return;
        }
        let url = GameConfigZCH.soundData.bgm1;
        if (type == 2) {
            url == GameConfigZCH.soundData.bgm2;
        }
        url = this.resUrl + url;
        BaseLoadResZCH.Instance.loadAudio(url, (err, ass: AudioClip) => {
            if (ass) {
                this.bgAudio.clip = ass;
                this.bgAudio.loop = true;
                this.bgAudio.playOnAwake = true;
                if (this.soundData.musicOpen) {
                    this.bgAudio.play();
                }
            }
        })
    }
    /**停止播放背景 */
    pauseMusic() {
        if (!this.bgAudio) {
            return;
        }
        if (this.bgAudio.playing) {
            this.bgAudio.stop();
        }
    }
    /**设置背景音乐开关 */
    setMusicOpen(isOpen: boolean) {
        this.soundData.musicOpen = !!isOpen;
        if (isOpen) {
            if (!this.bgAudio.playing) {
                let type = this.currBgType;
                this.currBgType = -1;
                this.playMusic(type);
            }
        } else {
            this.pauseMusic();
        }
    }
    /**设置背景音乐大小 */
    setMusicNum(num: number) {
        if (!this.bgAudio) {
            return;
        }
        this.soundData.musicVolume = num;
        this.bgAudio.volume = num;
    }
    /************************************************************************* */
    /**停止  所有播放音效 */
    pauseSound() {
        for (let i = 0; i < this.audioList.length; ++i) {
            if (this.audioList[i] && this.audioList[i].playing) {
                this.audioList[i].stop();
            }
        }
        this.currList = [];
    }
    /**停止指定音效 */
    stopSoundName(name: string) {
        let url = this.resUrl + name;
        for (let i = 0; i < this.currList.length; ++i) {
            if (this.currList[i].name == url) {
                if (this.currList[i].audio.playing) {
                    this.currList[i].audio.stop();
                }
            }
        }
    }
    /**设置音效开关 */
    setSoundOpen(isOpen: boolean) {
        this.soundData.soundOpen = !!isOpen;
        if (!isOpen) {
            this.pauseSound();
        }
    }
    /**设置音效大小 */
    setSoundNum(num: number) {
        for (let i = 0; i < this.audioList.length; ++i) {
            this.audioList[i].volume = num;
        }
    }
    getAudio(): AudioSource {
        for (let i = 0; i < this.audioList.length; ++i) {
            if (!this.audioList[i].playing) {
                return this.audioList[i];
            }
        }
        let nd: Node = new Node();
        let audio = nd.addComponent(AudioSource);
        nd.parent = this.bgAudio.node.parent;
        audio.volume = this.soundData.musicVolume;
        this.audioList.push(audio);
        return audio;
    }
    /**播放音效 */
    playSound(name: string, loop: boolean = false) {
        let url = this.resUrl + name;
        BaseLoadResZCH.Instance.loadAudio(url, (err, ass: AudioClip) => {
            if (ass) {
                if (this.soundData.soundOpen) {
                    let audio = this.getAudio();
                    audio.clip = ass;
                    audio.loop = loop;
                    audio.play();
                    this.addAudio({ name: url, audio: audio });
                }
            } else {
                console.error(" 加载音频失败----", url);
            }
        })
    }
    /**添加正在播放的音乐 */
    addAudio(data: { name: string, audio: AudioSource }) {
        for (let i = 0; i < this.currList.length; ++i) {
            if (!this.currList[i].audio.playing) {
                this.currList.splice(i, 1);
                i--;
            }
        }
        this.currList.push(data);
    }

    /**播放按钮音效 */
    playTouchBtn() {
        let url = this.resUrl + GameConfigZCH.soundData.btn;
        this.playSound(url);
    }












}


