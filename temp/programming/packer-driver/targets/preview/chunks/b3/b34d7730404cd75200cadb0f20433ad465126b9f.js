System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assert, AudioClip, clamp01, LocalStorageUtils, LOCAL_DATA_KEY, Singleton, AudioManager, _crd, SceneBgMusic, SoundList;

  function _reportPossibleCrUseOfLocalStorageUtils(extras) {
    _reporterNs.report("LocalStorageUtils", "../utils/LocalStorageUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLOCAL_DATA_KEY(extras) {
    _reporterNs.report("LOCAL_DATA_KEY", "../utils/LocalStorageUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "./Singleton", _context.meta, extras);
  }

  _export("AudioManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assert = _cc.assert;
      AudioClip = _cc.AudioClip;
      clamp01 = _cc.clamp01;
    }, function (_unresolved_2) {
      LocalStorageUtils = _unresolved_2.default;
      LOCAL_DATA_KEY = _unresolved_2.LOCAL_DATA_KEY;
    }, function (_unresolved_3) {
      Singleton = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a59f9s3orhCkYrHCm9mzk2J", "AudioManager", undefined);

      __checkObsolete__(['assert', 'AudioClip', 'AudioSource', 'clamp01']);

      _export("SceneBgMusic", SceneBgMusic = {
        mainBg: "main_bgm" // 背景音乐

      });

      _export("SoundList", SoundList = {
        buttonClick: "btn_click",
        //点击按钮
        bingo: "bingo",
        //爆炸
        ding: "ding",
        //亮晶晶
        xiu: "xiu" //火箭发射

      });

      _export("AudioManager", AudioManager = class AudioManager extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super(...arguments);
          //private static instance: AudioManager = null;
          this.audioSource = null;
          this.soundVolume = 1;
          this.MusicVolum = 1;
          this.AudioClipArray = [];
        }

        static getInstance() {
          return super._getInstance();
        }

        init(_bundle) {
          return new Promise((resolve, reject) => {
            _bundle.loadDir("res/audio", AudioClip, (err, clip) => {
              if (err) {
                console.warn('load audioClip failed: ', err);
                reject(err);
                return;
              }

              resolve(true);
              this.AudioClipArray = clip;
            });
          });
        }

        updateTheMusicStatus() {
          var OPTION = (_crd && LocalStorageUtils === void 0 ? (_reportPossibleCrUseOfLocalStorageUtils({
            error: Error()
          }), LocalStorageUtils) : LocalStorageUtils).getItem((_crd && LOCAL_DATA_KEY === void 0 ? (_reportPossibleCrUseOfLOCAL_DATA_KEY({
            error: Error()
          }), LOCAL_DATA_KEY) : LOCAL_DATA_KEY).OPTION, JSON, true);
          this.soundVolume = OPTION.sound ? 1 : 0;
          this.MusicVolum = OPTION.music ? 0.5 : 0;
          this.setMusicVolume(this.MusicVolum);
        }

        setAudioSource(audioSource) {
          var OPTION = (_crd && LocalStorageUtils === void 0 ? (_reportPossibleCrUseOfLocalStorageUtils({
            error: Error()
          }), LocalStorageUtils) : LocalStorageUtils).getItem((_crd && LOCAL_DATA_KEY === void 0 ? (_reportPossibleCrUseOfLOCAL_DATA_KEY({
            error: Error()
          }), LOCAL_DATA_KEY) : LOCAL_DATA_KEY).OPTION, JSON, true);
          this.audioSource = audioSource;
          this.soundVolume = OPTION.sound ? 1 : 0;
          this.MusicVolum = OPTION.music ? 0.5 : 0;
          this.setMusicVolume(this.MusicVolum);
        }

        playMusic(name, loop) {
          if (!this.audioSource || !this.audioSource.isValid) return;
          assert(this.audioSource, 'AudioManager not inited!');

          if (name == "") {
            return;
          } // if(!(this.audioSource.volume > 0)) {
          //     return;
          // }


          this.pauseMusic();
          this.audioSource.loop = loop;
          var music = this.AudioClipArray.find(item => item.name === name);

          if (music) {
            if (!this.audioSource || !this.audioSource.isValid) return;
            console.info("playMusic ", name);
            this.audioSource.clip = music;

            if (!this.audioSource.playing) {
              this.audioSource.play();
            }
          } else {
            console.info("audioNotFound ", name);
          } // this.bundle.load("audio/" + name, AudioClip, (err, clip)=> {
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

        pauseMusic() {
          if (!this.audioSource || !this.audioSource.isValid) {
            return;
          }

          this.audioSource.playing && this.audioSource.pause();
        }

        resumeMusic() {
          if (!this.audioSource || !this.audioSource.isValid) {
            return;
          }

          this.audioSource.playing && this.audioSource.play();
        }

        playSound(name) {
          var _name;

          if (!(this.soundVolume > 0)) {
            return;
          }

          if (!this.audioSource || !this.audioSource.isValid) return;
          name = (_name = name) != null ? _name : "";
          assert(this.audioSource, 'AudioManager not inited!');
          var sound = this.AudioClipArray.find(item => item.name === name);

          if (sound) {
            if (!this.audioSource || !this.audioSource.isValid) return;
            console.info("playSound ", name);
            this.setMusicVolume(this.soundVolume);
            this.audioSource.playOneShot(sound, this.audioSource.volume ? this.audioSource.volume / this.soundVolume : this.soundVolume);
            this.setMusicVolume(this.MusicVolum);
          } else {
            console.info("audioNotFound ", name);
          } // this.bundle.load("audio/" + name, AudioClip, (err, clip)=> {
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

        setMusicVolume(flag) {
          assert(this.audioSource, 'AudioManager not inited!');
          flag = clamp01(flag);
          this.audioSource.volume = flag;
        }

        setSoundVolume(flag) {
          this.soundVolume = flag;
        }

        openMusic() {
          this.setMusicVolume(0.5);
        }

        closeMusic(cb) {
          this.setMusicVolume(0);
          this.audioSource.destroy();
          cb();
        }

        openSound() {
          this.setSoundVolume(1);
        }

        closeSound() {
          this.setSoundVolume(0);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b34d7730404cd75200cadb0f20433ad465126b9f.js.map