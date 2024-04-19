System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, Singleton, hallAudio, SoundPathDefine, UseSetOption, _crd, audio, setActiveAudio;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "./Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhallAudio(extras) {
    _reporterNs.report("hallAudio", "../hall/index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../hall/sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioMgr(extras) {
    _reporterNs.report("AudioMgr", "./AudioMgr", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.default;
    }, function (_unresolved_3) {
      hallAudio = _unresolved_3.hallAudio;
    }, function (_unresolved_4) {
      SoundPathDefine = _unresolved_4.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c83a4zp58NGYqg3Y66a4D5c", "UseSetOption", undefined);

      __checkObsolete__(['assert', 'sys']);

      _export("setActiveAudio", setActiveAudio = _audio => {
        audio = _audio;
      });

      _export("default", UseSetOption = class UseSetOption extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super();
          this.option = {
            music: true,
            sound: true,
            vibration: true,
            language: 'english',
            gameSet: {}
          };
          var option = sys.localStorage.getItem('option');

          if (!option) {
            sys.localStorage.setItem('option', JSON.stringify(this.option));
          } else {
            this.option = JSON.parse(sys.localStorage.getItem('option'));
            !this.option.gameSet && (this.option.gameSet = {});
          }
        }

        setOption(key, value) {
          this.option[key] = value;
          sys.localStorage.setItem('option', JSON.stringify(this.option));

          if (key === "music") {
            value ? (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
              error: Error()
            }), hallAudio) : hallAudio) && (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
              error: Error()
            }), hallAudio) : hallAudio).play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).MAIN_BGM, true) : (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
              error: Error()
            }), hallAudio) : hallAudio) && (_crd && hallAudio === void 0 ? (_reportPossibleCrUseOfhallAudio({
              error: Error()
            }), hallAudio) : hallAudio).stop();

            if (audio) {
              value ? audio.resume() : audio.pause();
            }
          }
        }
        /**专门用于设置gameSet */


        setGameOption(gameKey, value) {
          var option = UseSetOption.Instance().option.gameSet;

          if (!option[gameKey]) {
            option[gameKey] = value;
          } else {
            Object.assign(option[gameKey], value);
          }

          this.setOption('gameSet', Object.assign({}, this.option.gameSet, {
            [gameKey]: option[gameKey]
          }));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a92f4a485a609734ac1a6099173b124909c7c6b8.js.map