System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioSource, Node, UseSetOption, getFileName, MusicEffectPlayer, _crd, EFF_FILE_EXT_NAME;

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../base/SourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUseSetOption(extras) {
    _reporterNs.report("UseSetOption", "../../utils/UseSetOption", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetFileName(extras) {
    _reporterNs.report("getFileName", "./FishTool", _context.meta, extras);
  }

  _export("MusicEffectPlayer", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioSource = _cc.AudioSource;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      UseSetOption = _unresolved_2.default;
    }, function (_unresolved_3) {
      getFileName = _unresolved_3.getFileName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f5b09/cw9FEh4QtDWUU877f", "MusicEffectPlayer", undefined);
      /**
        音效特效播放
       */


      __checkObsolete__(['AudioClip', 'AudioSource', 'Node']);

      _export("EFF_FILE_EXT_NAME", EFF_FILE_EXT_NAME = '.mp3');

      ////////////////////////////////////-
      _export("MusicEffectPlayer", MusicEffectPlayer = class MusicEffectPlayer {
        constructor(parentNode, sourceManage, musicResConfig, musicEffectConfig) {
          this.uiRoot = void 0;
          this.musicResConfig = null;
          this.musicEffectConfig = null;
          this.musicEffList = null;
          this.audioSource = null;
          this.sourceManage = void 0;

          /**循环音效 */
          this.loopMusic = [];
          this.parentNode = void 0;
          this.bgmNode = void 0;
          this.bgmAudioSource = null;
          this.sourceManage = sourceManage;
          this.uiRoot = new Node();
          this.audioSource = this.uiRoot.addComponent(AudioSource);
          this.parentNode = parentNode;
          parentNode.addChild(this.uiRoot);
          this.init(musicResConfig, musicEffectConfig);
          this.initBgmNode();
        }

        init(musicResConfig, musicEffectConfig) {
          this.musicResConfig = musicResConfig;
          this.musicEffectConfig = musicEffectConfig;
          this.musicEffList = [];
        }

        initBgmNode() {
          this.bgmNode = new Node();
          this.bgmAudioSource = this.bgmNode.addComponent(AudioSource);
          this.parentNode.addChild(this.bgmNode);
        }

        uninit() {
          this.musicResConfig = null;
          this.musicEffectConfig = null;
          this.musicEffList = null;
          this.uiRoot.destroy();
          this.loopMusic.forEach(v => v.destroy());
          this.loopMusic = [];
        }

        mepAnsy(data) {
          let result_lst = {
            mus_eff_id: data.id,
            mus_data_lst: []
          };

          if (data && this.getLength(data.mus_lst) > 0) {
            let mus_lst = data.mus_lst;
            let cur_new_index = 0;
            let new_item = {
              cur_add_time: 0,
              cur_play_index: 0,
              data_lst: [],
              bplay_cmp: false
            };
            result_lst.mus_data_lst.push(new_item);
            let eff_len = this.getLength(mus_lst);

            for (let i = 1; i <= eff_len; i++) {
              result_lst.mus_data_lst[cur_new_index].data_lst.push(mus_lst[i]);

              if (mus_lst[i].nxt_idx === -1 && i < eff_len) {
                let new_item = {
                  cur_add_time: 0,
                  cur_play_index: 0,
                  data_lst: [],
                  bplay_cmp: false
                };
                result_lst.mus_data_lst.push(new_item);
                cur_new_index = result_lst.mus_data_lst.length - 1;
              }
            }
          }

          return result_lst;
        }

        getLength(value) {
          let count = 0;

          for (const k in value) {
            count++;
          }

          return count;
        }

        update(dt) {
          for (let i = 0; i < this.musicEffList.length; i++) {
            let litem = this.musicEffList[i];
            let litem_bcmp = true;

            for (let j = 0; j < litem.mus_data_lst.length; j++) {
              let llitem = litem.mus_data_lst[j];

              if (llitem.bplay_cmp === false) {
                litem_bcmp = false;
                break;
              }
            }

            if (litem_bcmp) {
              this.musicEffList.splice(i, 1);
              break;
            }
          }

          for (let i = 0; i < this.musicEffList.length; i++) {
            let litem = this.musicEffList[i];

            for (let j = 0; j < litem.mus_data_lst.length; j++) {
              let llitem = litem.mus_data_lst[j];

              if (llitem.cur_play_index <= llitem.data_lst.length - 1) {
                if (llitem.cur_add_time >= llitem.data_lst[llitem.cur_play_index].t) {
                  //播放音效
                  let src = this.musicResConfig[llitem.data_lst[llitem.cur_play_index].src_id].file;
                  let loop = llitem.data_lst[llitem.cur_play_index].loop; // AudioEngine.playEffect(src + EFF_FILE_EXT_NAME, loop)

                  this.playSound(this.sourceManage.getFile((_crd && getFileName === void 0 ? (_reportPossibleCrUseOfgetFileName({
                    error: Error()
                  }), getFileName) : getFileName)(src)).source, loop);
                  llitem.cur_add_time = 0;
                  llitem.cur_play_index = llitem.cur_play_index + 1;
                } else {
                  llitem.cur_add_time = llitem.cur_add_time + dt;
                }
              } else {
                llitem.bplay_cmp = true;
              }
            }
          }
        }

        playSound(clip, loop) {
          if (!(_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
            error: Error()
          }), UseSetOption) : UseSetOption).Instance().option.sound) {
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

        pause() {
          this.bgmAudioSource.pause();
          this.loopMusic.forEach(v => v.getComponent(AudioSource).pause());
        }
        /**继续播放 */


        playOn() {
          this.bgmAudioSource.play();
          this.loopMusic.forEach(v => v.getComponent(AudioSource).play());
        }

        createLoopMusic(clip) {
          let node = new Node();
          this.parentNode.addChild(node);
          this.loopMusic.push(node);
          const as = node.addComponent(AudioSource);
          as.clip = clip;
          as.loop = true;
          as.play();
        }

        isNotValid(source) {
          return !source || !source.isValid;
        }

        play(musID) {
          if (musID !== null && musID !== -1) {
            let cfg_data = this.musicEffectConfig[musID];
            let lst = this.mepAnsy(cfg_data);
            let is_exist = false;

            for (const k in this.musicEffList) {
              const v = this.musicEffList[k];

              if (v.mus_eff_id === musID) {
                is_exist = true;
                break;
              }
            }

            if (is_exist === false) {
              if (lst.mus_data_lst.length > 0) {
                this.musicEffList.push(lst);
              }
            }
          }
        }

        playBgm(srcFile) {// this.bgmAudioSource.clip = this.sourceManage.getFile(getFileName(srcFile)).source;
          // this.bgmAudioSource.loop = true;
          // UseSetOption.Instance().option.music && this.bgmAudioSource.play();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=46f461d3db71d0e6495c9540a8c8abceeb6ccd61.js.map