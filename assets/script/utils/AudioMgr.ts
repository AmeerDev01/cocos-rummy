//AudioMgr.ts
import { AudioClip, AudioSource, Node, director } from 'cc';
// import { sourceManageSeletor } from '../hall';
import SourceManage from '../base/SourceManage';
import UseSetOption from './UseSetOption';
/**
 * @en
 * this is a sington class for audio play, can be easily called from anywhere in you project.
 * @zh
 * 这是一个用于播放音频的单件类，可以很方便地在项目的任何地方调用。
 */
export class AudioMgr<M> {
  /**背景音乐 */
  private _audioSource: AudioSource;
  /**长音效 */
  private _longSoundSource: AudioSource;
  /**短音效 */
  private _shortSoundSource: AudioSource;
  private sourceManage: SourceManage
  // private audioMgr: Node
  private nodes: Array<Node> = [];
  constructor(sourceManage: SourceManage) {
    this.sourceManage = sourceManage

    this._audioSource = this.createNode("__bgm_music__");
    this._longSoundSource = this.createNode("__long_sound__");
    this._shortSoundSource = this.createNode("__short_sound__");
  }
  public disable: boolean = false
  public get audioSource() {
    return this._audioSource;
  }

  public getAudioInstance() {
    return this._audioSource
  }

  private createNode(name: string) {
    const audioMgr = new Node();
    audioMgr.name = name;

    //@en add to the scene.
    //@zh 添加节点到场景
    director.getScene().addChild(audioMgr);

    //@en make it as a persistent node, so it won't be destroied when scene change.
    //@zh 标记为常驻节点，这样场景切换的时候就不会被销毁了
    director.addPersistRootNode(audioMgr);

    this.nodes.push(audioMgr);

    //@en add AudioSource componrnt to play audios.
    //@zh 添加 AudioSource 组件，用于播放音频。
    return audioMgr.addComponent(AudioSource);
  }

  /**
   * @en
   * play short audio, such as strikes,explosions
   * @zh
   * 播放短音频,比如 打击音效，爆炸音效等
   * @param sound clip or url for the audio
   * @param volume 
   */
  playOneShot(sound: M, volume: number = 1.0, isReplace: boolean = true) {
    if (!UseSetOption.Instance().option.sound) return
    if (this.disable) return
    const source = this.sourceManage.getFile(sound as string).source
    if (source instanceof AudioClip) {
      // this._audioSource.playOneShot(source, volume);
      isReplace ? this.playSound(source) : this._audioSource.playOneShot(source, volume)
      // this.playSound(source);
    }
    else {
      const bundler = this.sourceManage.bundle
      bundler.load(source, (err, clip: AudioClip) => {
        if (err) {
          console.log(err);
        }
        else {
          // this._audioSource.playOneShot(clip, volume);
          this.playSound(clip);
        }
      });
    }
  }

  private isNotValid(source: AudioSource) {
    return !source || !source.isValid;
  }

  private playSound(clip: AudioClip) {
    const audioSource = clip.getDuration() > 1 ? this._longSoundSource : this._shortSoundSource;
    if (this.isNotValid(audioSource)) return;
    audioSource.clip = clip;
    audioSource.loop = false;
    audioSource.play();
  }
  getPlayingVolume() {
    return this.audioSource.volume
  }
  /**
   * @en
   * play long audio, such as the bg music
   * @zh
   * 播放长音频，比如 背景音乐
   * @param sound clip or url for the sound
   * @param volume 
   */
  play(sound: M, isLoop: boolean = false, volume: number = 1.0) {
    if (!UseSetOption.Instance().option.music) return
    if (this.disable) return
    if (this.isNotValid(this.audioSource)) return;
    console.log('play:' + sound)
    const source = this.sourceManage.getFile(sound as string).source
    if (source instanceof AudioClip) {
      this._audioSource.clip = source
      this._audioSource.loop = isLoop
      this._audioSource.playOnAwake = true
      this.audioSource.volume = volume
      this._audioSource.play()
    }
    else {
      const bundler = this.sourceManage.bundle
      bundler.load(source, (err, clip: AudioClip) => {
        if (this.isNotValid(this.audioSource)) return;
        if (err) {
          console.log(err);
        }
        else {
          this._audioSource.clip = clip
          this._audioSource.loop = isLoop
          this.audioSource.volume = volume
          this._audioSource.play()
        }
      });
    }
  }

  /**
   * stop the audio play
   */
  stop() {
    this._audioSource.stop();
  }
  longStop() {
    this._longSoundSource.stop();
  }
  /**
   * pause the audio play
   */
  pause() {
    this._audioSource.pause();
  }

  /**
   * resume the audio play
   */
  resume() {
    if (!UseSetOption.Instance().option.music) return
    this._audioSource.play();
  }

  remove() {
    // this.audioMgr.destroy()
    this.nodes.forEach(v => v.destroy());
    this.nodes = [];
  }
}
