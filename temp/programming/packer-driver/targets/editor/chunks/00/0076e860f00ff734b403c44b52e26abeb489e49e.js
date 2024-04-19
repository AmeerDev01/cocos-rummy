System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, dragonTiger_Audio, SoundPathDefine, _crd, playMainBg, playGame, playBtnClick, playChip, playDefeat, playWin, playTimeout, playGetCoin, playTurnCard, playTigerCard, playDragonCard;

  function _reportPossibleCrUseOfdragonTiger_Audio(extras) {
    _reporterNs.report("dragonTiger_Audio", "./index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "./sourceDefine/soundDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      dragonTiger_Audio = _unresolved_2.dragonTiger_Audio;
    }, function (_unresolved_3) {
      SoundPathDefine = _unresolved_3.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c92felzbWhKq7kDe0WOrmW2", "music", undefined);

      /**
       * 背景音乐
       */
      _export("playMainBg", playMainBg = () => {
        (_crd && dragonTiger_Audio === void 0 ? (_reportPossibleCrUseOfdragonTiger_Audio({
          error: Error()
        }), dragonTiger_Audio) : dragonTiger_Audio).play((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).MAIN_BG, true);
      });
      /**
       * 游戏开始
       */


      _export("playGame", playGame = () => {
        (_crd && dragonTiger_Audio === void 0 ? (_reportPossibleCrUseOfdragonTiger_Audio({
          error: Error()
        }), dragonTiger_Audio) : dragonTiger_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).VOICE_CHIP);
      });
      /**
       * 按钮单击音效
       */


      _export("playBtnClick", playBtnClick = () => {
        (_crd && dragonTiger_Audio === void 0 ? (_reportPossibleCrUseOfdragonTiger_Audio({
          error: Error()
        }), dragonTiger_Audio) : dragonTiger_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).BTN_CLICK);
      });
      /**
       * 下注筹码音效
       */


      _export("playChip", playChip = () => {
        (_crd && dragonTiger_Audio === void 0 ? (_reportPossibleCrUseOfdragonTiger_Audio({
          error: Error()
        }), dragonTiger_Audio) : dragonTiger_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).CHIP);
      });
      /**
       * 失败音效
       */


      _export("playDefeat", playDefeat = () => {
        (_crd && dragonTiger_Audio === void 0 ? (_reportPossibleCrUseOfdragonTiger_Audio({
          error: Error()
        }), dragonTiger_Audio) : dragonTiger_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).DEFEAT);
      });
      /**
       * 胜利音效
       */


      _export("playWin", playWin = () => {
        (_crd && dragonTiger_Audio === void 0 ? (_reportPossibleCrUseOfdragonTiger_Audio({
          error: Error()
        }), dragonTiger_Audio) : dragonTiger_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).WIN);
      });
      /**
       * 5秒倒计时
       */


      _export("playTimeout", playTimeout = () => {
        (_crd && dragonTiger_Audio === void 0 ? (_reportPossibleCrUseOfdragonTiger_Audio({
          error: Error()
        }), dragonTiger_Audio) : dragonTiger_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).TIME_OUT);
      });
      /**
       * 金币收集音效
       */


      _export("playGetCoin", playGetCoin = () => {
        (_crd && dragonTiger_Audio === void 0 ? (_reportPossibleCrUseOfdragonTiger_Audio({
          error: Error()
        }), dragonTiger_Audio) : dragonTiger_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).GET_COIN);
      });
      /**
       * 翻牌声
       */


      _export("playTurnCard", playTurnCard = () => {
        (_crd && dragonTiger_Audio === void 0 ? (_reportPossibleCrUseOfdragonTiger_Audio({
          error: Error()
        }), dragonTiger_Audio) : dragonTiger_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).TURN_CARD);
      });
      /**
       * 翻虎
       */


      _export("playTigerCard", playTigerCard = () => {
        (_crd && dragonTiger_Audio === void 0 ? (_reportPossibleCrUseOfdragonTiger_Audio({
          error: Error()
        }), dragonTiger_Audio) : dragonTiger_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).TIGER_CARD);
      });
      /**
       * 翻龙
       */


      _export("playDragonCard", playDragonCard = () => {
        (_crd && dragonTiger_Audio === void 0 ? (_reportPossibleCrUseOfdragonTiger_Audio({
          error: Error()
        }), dragonTiger_Audio) : dragonTiger_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
          error: Error()
        }), SoundPathDefine) : SoundPathDefine).DRAGON_CARD);
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0076e860f00ff734b403c44b52e26abeb489e49e.js.map