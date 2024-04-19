System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, AudioSource, Node, director, UseSetOption, AudioMgr, _crd;

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../base/SourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUseSetOption(extras) {
    _reporterNs.report("UseSetOption", "./UseSetOption", _context.meta, extras);
  }

  _export("AudioMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      Node = _cc.Node;
      director = _cc.director;
    }, function (_unresolved_2) {
      UseSetOption = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "47834m/vD9CzZNQE2oT77EH", "AudioMgr", undefined); //AudioMgr.ts


      // import { sourceManageSeletor } from '../hall';
      __checkObsolete__(['AudioClip', 'AudioSource', 'Node', 'director']);

      /**
       * @en
       * this is a sington class for audio play, can be easily called from anywhere in you project.
       * @zh
       * 这是一个用于播放音频的单件类，可以很方便地在项目的任何地方调用。
       */
      _export("AudioMgr", AudioMgr = class AudioMgr {
        constructor(sourceManage) {
          /**背景音乐 */
          this._audioSource = void 0;

          /**长音效 */
          this._longSoundSource = void 0;

          /**短音效 */
          this._shortSoundSource = void 0;
          this.sourceManage = void 0;
          // private audioMgr: Node
          this.nodes = [];
          this.disable = false;
          this.sourceManage = sourceManage;
          this._audioSource = this.createNode("__bgm_music__");
          this._longSoundSource = this.createNode("__long_sound__");
          this._shortSoundSource = this.createNode("__short_sound__");
        }

        get audioSource() {
          return this._audioSource;
        }

        getAudioInstance() {
          return this._audioSource;
        }

        createNode(name) {
          const audioMgr = new Node();
          audioMgr.name = name; //@en add to the scene.
          //@zh 添加节点到场景

          director.getScene().addChild(audioMgr); //@en make it as a persistent node, so it won't be destroied when scene change.
          //@zh 标记为常驻节点，这样场景切换的时候就不会被销毁了

          director.addPersistRootNode(audioMgr);
          this.nodes.push(audioMgr); //@en add AudioSource componrnt to play audios.
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


        playOneShot(sound, volume = 1.0, isReplace = true) {
          if (!(_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
            error: Error()
          }), UseSetOption) : UseSetOption).Instance().option.sound) return;
          if (this.disable) return;
          const source = this.sourceManage.getFile(sound).source;

          if (source instanceof AudioClip) {
            // this._audioSource.playOneShot(source, volume);
            isReplace ? this.playSound(source) : this._audioSource.playOneShot(source, volume); // this.playSound(source);
          } else {
            const bundler = this.sourceManage.bundle;
            bundler.load(source, (err, clip) => {
              if (err) {
                console.log(err);
              } else {
                // this._audioSource.playOneShot(clip, volume);
                this.playSound(clip);
              }
            });
          }
        }

        isNotValid(source) {
          return !source || !source.isValid;
        }

        playSound(clip) {
          const audioSource = clip.getDuration() > 1 ? this._longSoundSource : this._shortSoundSource;
          if (this.isNotValid(audioSource)) return;
          audioSource.clip = clip;
          audioSource.loop = false;
          audioSource.play();
        }

        getPlayingVolume() {
          return this.audioSource.volume;
        }
        /**
         * @en
         * play long audio, such as the bg music
         * @zh
         * 播放长音频，比如 背景音乐
         * @param sound clip or url for the sound
         * @param volume 
         */


        play(sound, isLoop = false, volume = 1.0) {
          if (!(_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
            error: Error()
          }), UseSetOption) : UseSetOption).Instance().option.music) return;
          if (this.disable) return;
          if (this.isNotValid(this.audioSource)) return;
          console.log('play:' + sound);
          const source = this.sourceManage.getFile(sound).source;

          if (source instanceof AudioClip) {
            this._audioSource.clip = source;
            this._audioSource.loop = isLoop;
            this._audioSource.playOnAwake = true;
            this.audioSource.volume = volume;

            this._audioSource.play();
          } else {
            const bundler = this.sourceManage.bundle;
            bundler.load(source, (err, clip) => {
              if (this.isNotValid(this.audioSource)) return;

              if (err) {
                console.log(err);
              } else {
                this._audioSource.clip = clip;
                this._audioSource.loop = isLoop;
                this.audioSource.volume = volume;

                this._audioSource.play();
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
          if (!(_crd && UseSetOption === void 0 ? (_reportPossibleCrUseOfUseSetOption({
            error: Error()
          }), UseSetOption) : UseSetOption).Instance().option.music) return;

          this._audioSource.play();
        }

        remove() {
          // this.audioMgr.destroy()
          this.nodes.forEach(v => v.destroy());
          this.nodes = [];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=03dfa24dd25e1c14293177e1952059f9adc9dd45.js.map