System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioSource, Crash_NetMsgDispatcher, ProtocolCode, establishAConnection, Crash_ViewBase, Crash_DataManager, Crash_Persian_puritan, Crash_Game_contentLayer, Crash_RecordListLayer, AudioManager, SceneBgMusic, WsManager, Crash_GameManager, _dec, _class, _crd, ccclass, property, Crash_Main_UI;

  function _reportPossibleCrUseOfCrash_NetMsgDispatcher(extras) {
    _reporterNs.report("Crash_NetMsgDispatcher", "../net/Crash_NetMsgDispatcher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocolCode(extras) {
    _reporterNs.report("ProtocolCode", "../net/protocol/ProtocolDef", _context.meta, extras);
  }

  function _reportPossibleCrUseOfestablishAConnection(extras) {
    _reporterNs.report("establishAConnection", "../net/protocol/WsProtocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_ViewBase(extras) {
    _reporterNs.report("Crash_ViewBase", "../BaseView/Crash_ViewBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_DataManager(extras) {
    _reporterNs.report("Crash_DataManager", "../manager/Crash_DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_Persian_puritan(extras) {
    _reporterNs.report("Crash_Persian_puritan", "./Crash_Persian_puritan", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_Game_contentLayer(extras) {
    _reporterNs.report("Crash_Game_contentLayer", "./Crash_Game_contentLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_RecordListLayer(extras) {
    _reporterNs.report("Crash_RecordListLayer", "./Crash_RecordListLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../manager/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneBgMusic(extras) {
    _reporterNs.report("SceneBgMusic", "../manager/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWsManager(extras) {
    _reporterNs.report("WsManager", "../net/Crash_WsManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrash_GameManager(extras) {
    _reporterNs.report("Crash_GameManager", "../manager/Crash_GameManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AudioSource = _cc.AudioSource;
    }, function (_unresolved_2) {
      Crash_NetMsgDispatcher = _unresolved_2.default;
    }, function (_unresolved_3) {
      ProtocolCode = _unresolved_3.ProtocolCode;
    }, function (_unresolved_4) {
      establishAConnection = _unresolved_4.establishAConnection;
    }, function (_unresolved_5) {
      Crash_ViewBase = _unresolved_5.Crash_ViewBase;
    }, function (_unresolved_6) {
      Crash_DataManager = _unresolved_6.Crash_DataManager;
    }, function (_unresolved_7) {
      Crash_Persian_puritan = _unresolved_7.Crash_Persian_puritan;
    }, function (_unresolved_8) {
      Crash_Game_contentLayer = _unresolved_8.Crash_Game_contentLayer;
    }, function (_unresolved_9) {
      Crash_RecordListLayer = _unresolved_9.Crash_RecordListLayer;
    }, function (_unresolved_10) {
      AudioManager = _unresolved_10.AudioManager;
      SceneBgMusic = _unresolved_10.SceneBgMusic;
    }, function (_unresolved_11) {
      WsManager = _unresolved_11.default;
    }, function (_unresolved_12) {
      Crash_GameManager = _unresolved_12.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0d19ar6GiJEGKvdGAr5dnhm", "Crash_Main_UI", undefined);

      __checkObsolete__(['_decorator', 'AudioSource', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Crash_Main_UI", Crash_Main_UI = (_dec = ccclass('Main_UI'), _dec(_class = class Crash_Main_UI extends (_crd && Crash_ViewBase === void 0 ? (_reportPossibleCrUseOfCrash_ViewBase({
        error: Error()
      }), Crash_ViewBase) : Crash_ViewBase) {
        constructor() {
          super(...arguments);
          this.gameTypeStop1 = true;
          this.gameTypeStop2 = true;
          this.timeAccumulator = 0;
        }

        start() {
          (_crd && Crash_NetMsgDispatcher === void 0 ? (_reportPossibleCrUseOfCrash_NetMsgDispatcher({
            error: Error()
          }), Crash_NetMsgDispatcher) : Crash_NetMsgDispatcher).getInstance().regCallBack((_crd && ProtocolCode === void 0 ? (_reportPossibleCrUseOfProtocolCode({
            error: Error()
          }), ProtocolCode) : ProtocolCode).RES_ROOM_RETURN, this, this.sendChatRsp);
          var url = window.location.href;
          var tokenRegex = /token=([^&]+)/;
          var match = url.match(tokenRegex);
          var token = match && match[1];
          var data = {
            "token": localStorage.getItem('token') || token
          };
          new (_crd && establishAConnection === void 0 ? (_reportPossibleCrUseOfestablishAConnection({
            error: Error()
          }), establishAConnection) : establishAConnection)().setParams(data.token).send(data);
          var audio = this.node.addComponent(AudioSource);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).getInstance().setAudioSource(audio);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).getInstance().playMusic((_crd && SceneBgMusic === void 0 ? (_reportPossibleCrUseOfSceneBgMusic({
            error: Error()
          }), SceneBgMusic) : SceneBgMusic).mainBg, true);
        }

        update(deltaTime) {
          var crashStageVo = (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
            error: Error()
          }), Crash_DataManager) : Crash_DataManager).getInstance().getCrashStageVo();
          if (!crashStageVo) return;

          if (crashStageVo.gameType === 1) {
            this._nodes['persiapan_putaran'].active = true;
            this._nodes['game_content'].active = false;

            if (this.gameTypeStop1) {
              this._nodes['persiapan_putaran'].getComponent(_crd && Crash_Persian_puritan === void 0 ? (_reportPossibleCrUseOfCrash_Persian_puritan({
                error: Error()
              }), Crash_Persian_puritan) : Crash_Persian_puritan).init(crashStageVo.seconds); // let persiapanPutaran= this._nodes['persiapan_putaran'].getComponent(Crash_Persian_puritan)
              // if(persiapanPutaran.getStateMachine()){
              //     this._nodes['persiapan_putaran'].getComponent(Crash_Persian_puritan).init(crashStageVo.seconds);
              // }


              this.gameTypeStop1 = false;
              this.gameTypeStop2 = true;
              return;
            }
          } else if (crashStageVo.gameType === 2) {
            this.gameTypeStop1 = true;
            this._nodes['persiapan_putaran'].active = false;
            this._nodes['game_content'].active = true;

            if (this.gameTypeStop2) {
              this._nodes['game_content'].getComponent(_crd && Crash_Game_contentLayer === void 0 ? (_reportPossibleCrUseOfCrash_Game_contentLayer({
                error: Error()
              }), Crash_Game_contentLayer) : Crash_Game_contentLayer).init();

              this.gameTypeStop2 = false;
            }
          } else if (crashStageVo.gameType === 3) {
            //this._nodes['persiapan_putaran'].active=false
            this.gameTypeStop1 = true;
          } // 同步音效设置


          this.timeAccumulator += deltaTime;

          if (this.timeAccumulator >= 3) {
            this.timeAccumulator = 0;
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).getInstance().updateTheMusicStatus();
          }

          (_crd && WsManager === void 0 ? (_reportPossibleCrUseOfWsManager({
            error: Error()
          }), WsManager) : WsManager).getInstance().update(deltaTime);
        } // 进入房间


        sendChatRsp(bl, data, args) {
          if (bl) {
            var rea = data.data;
            var param = {
              gameType: 1,
              seconds: rea.seconds
            };
            (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
              error: Error()
            }), Crash_DataManager) : Crash_DataManager).getInstance().setCrashStageVo(param);
            (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
              error: Error()
            }), Crash_DataManager) : Crash_DataManager).getInstance().getUserInfo().setUserInfo(rea.myInfo);
            (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
              error: Error()
            }), Crash_DataManager) : Crash_DataManager).getInstance().getUserInfo().setOddsList(rea.oddsList);
            (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
              error: Error()
            }), Crash_DataManager) : Crash_DataManager).getInstance().getUserInfo().setRoomInfoVos(rea.roomInfoVos);
            (_crd && Crash_DataManager === void 0 ? (_reportPossibleCrUseOfCrash_DataManager({
              error: Error()
            }), Crash_DataManager) : Crash_DataManager).getInstance().getUserInfo().setTableId(rea.roomId);
            var node = this._nodes['recordList'];

            if (node && node.components && node.components.length) {
              node.getComponent(_crd && Crash_RecordListLayer === void 0 ? (_reportPossibleCrUseOfCrash_RecordListLayer({
                error: Error()
              }), Crash_RecordListLayer) : Crash_RecordListLayer).init();
            }

            (_crd && Crash_GameManager === void 0 ? (_reportPossibleCrUseOfCrash_GameManager({
              error: Error()
            }), Crash_GameManager) : Crash_GameManager).getInstance().setIsLogin(true);
          }
        }

        onDestroy() {
          super.onDestroy();
          (_crd && Crash_NetMsgDispatcher === void 0 ? (_reportPossibleCrUseOfCrash_NetMsgDispatcher({
            error: Error()
          }), Crash_NetMsgDispatcher) : Crash_NetMsgDispatcher).getInstance().removeAllProtocolByObj(this);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9325638c8c3a3eafc668915098f402093ab33cb8.js.map