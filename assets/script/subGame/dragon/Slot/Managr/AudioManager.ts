import { assert, AudioClip, AudioSource, clamp01 } from "cc";
import LocalStorageUtils, { LOCAL_DATA_KEY } from "../utils/LocalStorageUtils";
import Singleton from "./Singleton";
export const SceneBgMusic = {
    mainBg: "dragon_bg", // 主音乐
    gameBg: "dragon_sg_bg1",// 小游戏1主音乐
    gameBgT: "dragon_sg_bg2",//小游戏2主音乐
}
export const SoundList = {
    buttonClick: "btn_click", //点击按钮
    coinCollection: "get_coin", // 金币收集结算
    rollerFast: "fast_roller", //滚轴加速
    theRollerStops: "shell_end",//滚轴停止滚动
    miniGameRingtones: "ling", // 小游戏铃声
    voice: "dragon_sound",    //小游戏动画龙吟声
    spitOut: "dragon_ball", //金龙吐球
    fallBall: "dragon_fall", //火球向下掉
    dragAndDropToTurnThePage: "turn",// 规则翻页
    add_coin: "maxCoin",// 增加下注、最大下注
    reduce_coin: "minCoin",// 减小下注
    chooseNum: "biu", //选择自转次数时音效
}

export class AudioManager extends Singleton {
    //private static instance: AudioManager = null;
    private audioSource?: AudioSource = null;
    private soundVolume: number = 1;
    private MusicVolum: number = 1;
    private AudioClipArray = []
    public static getInstance(): AudioManager {
        return super._getInstance<AudioManager>();
    }
    public init(_bundle) {
        return new Promise((resolve, reject) => {
            _bundle.loadDir("audio", AudioClip, (err, clip) => {
                if (err) {
                    console.warn('load audioClip failed: ', err);
                    reject(err)
                    return;
                }
                resolve(true)
                this.AudioClipArray = clip
            })
        })

    }
    public updateTheMusicStatus() {
        let OPTION = LocalStorageUtils.getItem(LOCAL_DATA_KEY.OPTION, JSON, true);
        this.soundVolume = OPTION.sound ? 1 : 0;
        this.MusicVolum = OPTION.music ? 0.5 : 0;
        this.setMusicVolume(this.MusicVolum);
    }
    public setAudioSource(audioSource: AudioSource) {
        let OPTION = LocalStorageUtils.getItem(LOCAL_DATA_KEY.OPTION, JSON, true);
        this.audioSource = audioSource;
        this.soundVolume = OPTION.sound ? 1 : 0;
        this.MusicVolum = OPTION.music ? 0.5 : 0;
        this.setMusicVolume(this.MusicVolum);
    }
    public playMusic(name: string, loop: boolean) {
        if (!this.audioSource || !this.audioSource.isValid) return;
        assert(this.audioSource, 'AudioManager not inited!');
        if (name == "") { return; }
        // if(!(this.audioSource.volume > 0)) {
        //     return;
        // }
        this.pauseMusic()
        this.audioSource.loop = loop;
        let music = this.AudioClipArray.find(item => item.name === name)
        if (music) {
            if (!this.audioSource || !this.audioSource.isValid) return;
            console.info("playMusic ", name);
            this.audioSource.clip = music;
            if (!this.audioSource.playing) {
                this.audioSource.play();
            }
        } else {
            console.info("audioNotFound ", name);
        }

        // this.bundle.load("audio/" + name, AudioClip, (err, clip)=> {
        //     if (err) {
        //         console.warn('load audioClip failed: ', err);
        //         return;
        //     }
        //     if(!this.audioSource || !this.audioSource.isValid) return;
        //     console.info("playMusic ", name);
        //     this.audioSource.clip = clip;
        //     if (!this.audioSource.playing) {
        //         this.audioSource.play();
        //     }
        // });
    }

    public pauseMusic() {
        if (!this.audioSource || !this.audioSource.isValid) { return; }
        this.audioSource.playing && this.audioSource.pause();
    }

    public resumeMusic() {
        if (!this.audioSource || !this.audioSource.isValid) { return; }

        this.audioSource.playing && this.audioSource.play();
    }

    public playSound(name: string) {
        if (!(this.soundVolume > 0)) {
            return;
        }
        if (!this.audioSource || !this.audioSource.isValid) return;
        name = name ?? "";
        assert(this.audioSource, 'AudioManager not inited!');
        let sound = this.AudioClipArray.find(item => item.name === name)
        if (sound) {
            if (!this.audioSource || !this.audioSource.isValid) return;
            console.info("playSound ", name);
            this.setMusicVolume(this.soundVolume)
            this.audioSource.playOneShot(sound, this.audioSource.volume ? this.audioSource.volume / this.soundVolume : this.soundVolume);
            this.setMusicVolume(this.MusicVolum)
        } else {
            console.info("audioNotFound ", name);
        }
        // this.bundle.load("audio/" + name, AudioClip, (err, clip)=> {
        //     if (err) {
        //         console.warn('load audioClip failed: ', err);
        //         return;
        //     }
        //     if(!this.audioSource || !this.audioSource.isValid) return;
        //     console.info("playSound ", name);
        //     this.setMusicVolume(this.soundVolume)
        //     this.audioSource.playOneShot(clip, this.audioSource.volume ? this.audioSource.volume / this.soundVolume : this.soundVolume);
        //     this.setMusicVolume(this.MusicVolum)
        // });
    }

    private setMusicVolume(flag: number) {
        assert(this.audioSource, 'AudioManager not inited!');
        flag = clamp01(flag);
        this.audioSource.volume = flag;
    }

    private setSoundVolume(flag: number) {
        this.soundVolume = flag;
    }

    public openMusic() {
        this.setMusicVolume(0.5);
    }

    public closeMusic(cb) {
        this.setMusicVolume(0);
        this.audioSource.destroy()
        cb()
    }

    public openSound() {
        this.setSoundVolume(1);
    }

    public closeSound() {
        this.setSoundVolume(0);
    }
}
