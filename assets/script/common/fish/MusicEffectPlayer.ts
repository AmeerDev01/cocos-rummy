/**
  音效特效播放
 */

import { AudioClip, AudioSource, Node } from "cc";
import SourceManage from "../../base/SourceManage";
import UseSetOption from "../../utils/UseSetOption";
import { getFileName } from "./FishTool";

export const EFF_FILE_EXT_NAME = '.mp3'

type Item = {
  cur_add_time: number;
  cur_play_index: number;
  data_lst: any[];
  bplay_cmp: boolean;
}

type Result = {
  mus_eff_id: number,
  mus_data_lst: Item[],
}

////////////////////////////////////-
export class MusicEffectPlayer {

  private uiRoot: Node;
  private musicResConfig = null
  private musicEffectConfig = null
  private musicEffList: Result[] = null
  private audioSource: AudioSource = null
  private sourceManage: SourceManage;

  /**循环音效 */
  private loopMusic: Node[] = [];
  private parentNode: Node;

  private bgmNode: Node;
  private bgmAudioSource: AudioSource = null

  constructor(parentNode: Node, sourceManage: SourceManage, musicResConfig, musicEffectConfig) {
    this.sourceManage = sourceManage;
    this.uiRoot = new Node();
    this.audioSource = this.uiRoot.addComponent(AudioSource);
    this.parentNode = parentNode;
    parentNode.addChild(this.uiRoot);

    this.init(musicResConfig, musicEffectConfig)
    this.initBgmNode();
  }

  private init(musicResConfig, musicEffectConfig) {
    this.musicResConfig = musicResConfig
    this.musicEffectConfig = musicEffectConfig
    this.musicEffList = []
  }

  private initBgmNode() {
    this.bgmNode = new Node();
    this.bgmAudioSource = this.bgmNode.addComponent(AudioSource);
    this.parentNode.addChild(this.bgmNode);
  }

  public uninit() {
    this.musicResConfig = null
    this.musicEffectConfig = null
    this.musicEffList = null
    this.uiRoot.destroy();
    this.loopMusic.forEach(v => v.destroy())
    this.loopMusic = [];
  }

  public mepAnsy(data) {
    let result_lst: Result = {
      mus_eff_id: data.id,
      mus_data_lst: [],
    }

    if (data && this.getLength(data.mus_lst) > 0) {
      let mus_lst = data.mus_lst
      let cur_new_index = 0

      let new_item: Item = { cur_add_time: 0, cur_play_index: 0, data_lst: [], bplay_cmp: false, }
      result_lst.mus_data_lst.push(new_item)
      let eff_len = this.getLength(mus_lst)

      for (let i = 1; i <= eff_len; i++) {
        result_lst.mus_data_lst[cur_new_index].data_lst.push(mus_lst[i])
        if (mus_lst[i].nxt_idx === -1 && i < eff_len) {
          let new_item: Item = { cur_add_time: 0, cur_play_index: 0, data_lst: [], bplay_cmp: false, }
          result_lst.mus_data_lst.push(new_item)
          cur_new_index = result_lst.mus_data_lst.length - 1
        }
      }
    }

    return result_lst
  }

  private getLength(value) {
    let count = 0;
    for (const k in value) {
      count++;
    }
    return count;
  }

  public update(dt) {
    for (let i = 0; i < this.musicEffList.length; i++) {
      let litem = this.musicEffList[i]
      let litem_bcmp = true

      for (let j = 0; j < litem.mus_data_lst.length; j++) {
        let llitem = litem.mus_data_lst[j]
        if (llitem.bplay_cmp === false) {
          litem_bcmp = false
          break
        }
      }

      if (litem_bcmp) {
        this.musicEffList.splice(i, 1)
        break
      }
    }

    for (let i = 0; i < this.musicEffList.length; i++) {
      let litem = this.musicEffList[i]
      for (let j = 0; j < litem.mus_data_lst.length; j++) {
        let llitem = litem.mus_data_lst[j]

        if (llitem.cur_play_index <= llitem.data_lst.length - 1) {
          if (llitem.cur_add_time >= llitem.data_lst[llitem.cur_play_index].t) {

            //播放音效
            let src = this.musicResConfig[llitem.data_lst[llitem.cur_play_index].src_id].file
            let loop = llitem.data_lst[llitem.cur_play_index].loop
            // AudioEngine.playEffect(src + EFF_FILE_EXT_NAME, loop)
            this.playSound(this.sourceManage.getFile(getFileName(src)).source, loop)

            llitem.cur_add_time = 0
            llitem.cur_play_index = llitem.cur_play_index + 1
          } else {
            llitem.cur_add_time = llitem.cur_add_time + dt
          }
        } else {
          llitem.bplay_cmp = true
        }
      }
    }
  }

  private playSound(clip: AudioClip, loop: boolean) {
    if (!UseSetOption.Instance().option.sound) {
      return;
    }

    if (loop) {
      this.createLoopMusic(clip);
      return;
    }
    const audioSource = this.audioSource;
    if (this.isNotValid(audioSource)) return;
    audioSource.clip = clip;
    audioSource.loop = loop;
    audioSource.play();
  }

  public pause() {
    this.bgmAudioSource.pause();
    this.loopMusic.forEach(v => v.getComponent(AudioSource).pause())
  }

  /**继续播放 */
  public playOn() {
    this.bgmAudioSource.play();
    this.loopMusic.forEach(v => v.getComponent(AudioSource).play())
  }

  private createLoopMusic(clip: AudioClip) {
    let node = new Node;
    this.parentNode.addChild(node);
    this.loopMusic.push(node);
    const as = node.addComponent(AudioSource);
    as.clip = clip;
    as.loop = true;
    as.play();
  }

  private isNotValid(source: AudioSource) {
    return !source || !source.isValid;
  }

  public play(musID) {
    if (musID !== null && musID !== -1) {
      let cfg_data = this.musicEffectConfig[musID]
      let lst = this.mepAnsy(cfg_data)
      let is_exist = false
      for (const k in this.musicEffList) {
        const v = this.musicEffList[k];
        if (v.mus_eff_id === musID) {
          is_exist = true
          break
        }
      }

      if (is_exist === false) {
        if (lst.mus_data_lst.length > 0) {
          this.musicEffList.push(lst)
        }
      }
    }
  }

  public playBgm(srcFile) {
    // this.bgmAudioSource.clip = this.sourceManage.getFile(getFileName(srcFile)).source;
    // this.bgmAudioSource.loop = true;
    // UseSetOption.Instance().option.music && this.bgmAudioSource.play();
  }
}


