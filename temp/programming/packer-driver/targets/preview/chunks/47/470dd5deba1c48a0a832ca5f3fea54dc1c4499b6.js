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
          var result_lst = {
            mus_eff_id: data.id,
            mus_data_lst: []
          };

          if (data && this.getLength(data.mus_lst) > 0) {
            var mus_lst = data.mus_lst;
            var cur_new_index = 0;
            var new_item = {
              cur_add_time: 0,
              cur_play_index: 0,
              data_lst: [],
              bplay_cmp: false
            };
            result_lst.mus_data_lst.push(new_item);
            var eff_len = this.getLength(mus_lst);

            for (var i = 1; i <= eff_len; i++) {
              result_lst.mus_data_lst[cur_new_index].data_lst.push(mus_lst[i]);

              if (mus_lst[i].nxt_idx === -1 && i < eff_len) {
                var _new_item = {
                  cur_add_time: 0,
                  cur_play_index: 0,
                  data_lst: [],
                  bplay_cmp: false
                };
                result_lst.mus_data_lst.push(_new_item);
                cur_new_index = result_lst.mus_data_lst.length - 1;
              }
            }
          }

          return result_lst;
        }

        getLength(value) {
          var count = 0;

          for (var k in value) {
            count++;
          }

          return count;
        }

        update(dt) {
          for (var i = 0; i < this.musicEffList.length; i++) {
            var litem = this.musicEffList[i];
            var litem_bcmp = true;

            for (var j = 0; j < litem.mus_data_lst.length; j++) {
              var llitem = litem.mus_data_lst[j];

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

          for (var _i = 0; _i < this.musicEffList.length; _i++) {
            var _litem = this.musicEffList[_i];

            for (var _j = 0; _j < _litem.mus_data_lst.length; _j++) {
              var _llitem = _litem.mus_data_lst[_j];

              if (_llitem.cur_play_index <= _llitem.data_lst.length - 1) {
                if (_llitem.cur_add_time >= _llitem.data_lst[_llitem.cur_play_index].t) {
                  //播放音效
                  var src = this.musicResConfig[_llitem.data_lst[_llitem.cur_play_index].src_id].file;
                  var loop = _llitem.data_lst[_llitem.cur_play_index].loop; // AudioEngine.playEffect(src + EFF_FILE_EXT_NAME, loop)

                  this.playSound(this.sourceManage.getFile((_crd && getFileName === void 0 ? (_reportPossibleCrUseOfgetFileName({
                    error: Error()
                  }), getFileName) : getFileName)(src)).source, loop);
                  _llitem.cur_add_time = 0;
                  _llitem.cur_play_index = _llitem.cur_play_index + 1;
                } else {
                  _llitem.cur_add_time = _llitem.cur_add_time + dt;
                }
              } else {
                _llitem.bplay_cmp = true;
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

          var audioSource = this.audioSource;
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
          var node = new Node();
          this.parentNode.addChild(node);
          this.loopMusic.push(node);
          var as = node.addComponent(AudioSource);
          as.clip = clip;
          as.loop = true;
          as.play();
        }

        isNotValid(source) {
          return !source || !source.isValid;
        }

        play(musID) {
          if (musID !== null && musID !== -1) {
            var cfg_data = this.musicEffectConfig[musID];
            var lst = this.mepAnsy(cfg_data);
            var is_exist = false;

            for (var k in this.musicEffList) {
              var v = this.musicEffList[k];

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
//# sourceMappingURL=470dd5deba1c48a0a832ca5f3fea54dc1c4499b6.js.map