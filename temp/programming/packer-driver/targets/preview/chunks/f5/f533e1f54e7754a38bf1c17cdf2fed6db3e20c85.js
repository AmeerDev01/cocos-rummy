System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Node, Vec3, Shake, SkillItemBossComing, SkillItemLine, SkillItemRotationScore, createFont, createParticleSystemNode, toNodeSpaceAR, SkillRegisterFunc, _crd;

  function _reportPossibleCrUseOfBackgroundSceneManager(extras) {
    _reporterNs.report("BackgroundSceneManager", "../BackgroundSceneManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillPlayer(extras) {
    _reporterNs.report("SkillPlayer", "../SkillPlayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShake(extras) {
    _reporterNs.report("Shake", "../../../utils/Shake", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillItemBossComing(extras) {
    _reporterNs.report("SkillItemBossComing", "./skills/SkillItemBossComing", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillItemLine(extras) {
    _reporterNs.report("SkillItemLine", "./skills/SkillItemLine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillItemRotationScore(extras) {
    _reporterNs.report("SkillItemRotationScore", "./skills/SkillItemRotationScore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateFont(extras) {
    _reporterNs.report("createFont", "../FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateParticleSystemNode(extras) {
    _reporterNs.report("createParticleSystemNode", "../FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOftoNodeSpaceAR(extras) {
    _reporterNs.report("toNodeSpaceAR", "../FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBatteryManager(extras) {
    _reporterNs.report("BatteryManager", "../BatteryManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish(extras) {
    _reporterNs.report("Fish", "../Fish", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../../base/SourceManage", _context.meta, extras);
  }

  _export("SkillRegisterFunc", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Shake = _unresolved_2.Shake;
    }, function (_unresolved_3) {
      SkillItemBossComing = _unresolved_3.SkillItemBossComing;
    }, function (_unresolved_4) {
      SkillItemLine = _unresolved_4.SkillItemLine;
    }, function (_unresolved_5) {
      SkillItemRotationScore = _unresolved_5.SkillItemRotationScore;
    }, function (_unresolved_6) {
      createFont = _unresolved_6.createFont;
      createParticleSystemNode = _unresolved_6.createParticleSystemNode;
      toNodeSpaceAR = _unresolved_6.toNodeSpaceAR;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f0843N+Zr1CIpmnEaa0B4CD", "SkillRegisterFunc", undefined);
      /**
        技能注册
       */


      __checkObsolete__(['Label', 'Node', 'Vec3']);

      //full screen shake
      _export("SkillRegisterFunc", SkillRegisterFunc = class SkillRegisterFunc {
        constructor(skillPlayer, backgroundSceneManager, sourceManage, batteryManager, prefabName) {
          this.skillPlayer = void 0;
          this.backgroundSceneManager = void 0;
          this.sourceManage = void 0;
          this.batteryManager = void 0;
          this.prefabName = void 0;
          this.rootNode = void 0;
          this.funs = [{
            func: this.fullScreenVibration.bind(this),
            ids: [1]
          }, {
            func: this.lineFish.bind(this),
            ids: [3, 4]
          }, {
            func: this.bigFishBoom.bind(this),
            ids: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
          }, {
            func: this.rotationScore.bind(this),
            ids: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
          }, {
            func: this.bossComming.bind(this),
            ids: [50, 51, 52]
          }, {
            func: this.changeBGM.bind(this),
            ids: [55]
          }, {
            func: this.resumeCurrentBGM.bind(this),
            ids: [56]
          }, {
            func: this.addShowWord.bind(this),
            ids: [100]
          }];
          this.skillPlayer = skillPlayer;
          this.backgroundSceneManager = backgroundSceneManager;
          this.sourceManage = sourceManage;
          this.batteryManager = batteryManager;
          this.prefabName = prefabName;
        }

        init(rootNode) {
          this.rootNode = rootNode;
        }

        uninit() {
          this.skillPlayer = null;
          this.backgroundSceneManager = null;
          this.sourceManage = null;
          this.batteryManager = null;
        }

        fullScreenVibration(obj, id) {
          var skillConfig = this.skillPlayer.getConfigs().skConfig;
          var commonConfig = this.skillPlayer.getConfigs().comConfig;
          var bkObj = this.backgroundSceneManager.getCurrentBkSenceObj();

          if (bkObj && skillConfig[id]) {
            (_crd && Shake === void 0 ? (_reportPossibleCrUseOfShake({
              error: Error()
            }), Shake) : Shake).create().shake(bkObj.uiRoot, skillConfig[id].t, skillConfig[id].dx, skillConfig[id].loop).start();
          }
        }

        lineFish(exeObj, skid) {
          var skillConfig = this.skillPlayer.getConfigs().skConfig;
          var textureConfig = this.skillPlayer.getConfigs().tConfig;
          var pt = exeObj.getParent();
          var spos = exeObj.getCurrentPos();
          var rlines = exeObj.getLineRelObjLst();
          var sid = skillConfig[skid].src_id;

          for (var i = 0; i < rlines.length; i++) {
            var epos = rlines[i].getCurrentPos();
            var info = {
              pos1: spos,
              pos2: epos,
              parent: pt,
              src_id: sid
            };
            exeObj.addCurrentLineObj(new (_crd && SkillItemLine === void 0 ? (_reportPossibleCrUseOfSkillItemLine({
              error: Error()
            }), SkillItemLine) : SkillItemLine)(this.sourceManage, info, textureConfig, this.rootNode));
          }

          console.log("execute line skill fshid =  " + exeObj.getObjectId() + ",line lst (" + spos.x + " " + spos.y + ")" + " cfg id = " + exeObj.getFishConfigId());
        }

        addShowWord(exeObj, skid) {
          var skillConfig = this.skillPlayer.getConfigs().skConfig;
          var buf = exeObj.getChildByName(skillConfig[skid].key);
          var fl = exeObj.getFishLevel();

          if (buf != null) {
            buf.getComponent(Label).string = "" + fl;
          } else {
            buf = new Node();
            var label = buf.addComponent(Label);
            exeObj.addChild(buf);
            label.string = fl; // buf = cc.Label.createWithBMFont(skillConfig[skid].fnt_src, `${fl}`)

            label.font = (_crd && createFont === void 0 ? (_reportPossibleCrUseOfcreateFont({
              error: Error()
            }), createFont) : createFont)(this.sourceManage, skillConfig[skid].fnt_src);
            buf.name = skillConfig[skid].key; // buf.setWorldPosition(new Vec3(skillConfig[skid].pos.x, skillConfig[skid].pos.y))

            var pos = skillConfig[skid].pos;
            buf.setPosition((_crd && toNodeSpaceAR === void 0 ? (_reportPossibleCrUseOftoNodeSpaceAR({
              error: Error()
            }), toNodeSpaceAR) : toNodeSpaceAR)(this.rootNode, pos));
          }
        }

        bigFishBoom(exeObj, skid) {
          var skillConfig = this.skillPlayer.getConfigs().skConfig;
          var textureConfig = this.skillPlayer.getConfigs().tConfig;
          var pos = exeObj.getCurrentPos();
          var ski = skillConfig[skid];

          for (var k in ski.src_id_lst) {
            var v = ski.src_id_lst[k];
            if (v == null) continue;
            var srcItem = textureConfig[v];

            if (srcItem.stype == 1) {} else if (srcItem.stype == 2) {} else if (srcItem.stype == 3) {
              var pobj = (_crd && createParticleSystemNode === void 0 ? (_reportPossibleCrUseOfcreateParticleSystemNode({
                error: Error()
              }), createParticleSystemNode) : createParticleSystemNode)(this.sourceManage, exeObj.getParent(), srcItem);
              pobj.setPosition((_crd && toNodeSpaceAR === void 0 ? (_reportPossibleCrUseOftoNodeSpaceAR({
                error: Error()
              }), toNodeSpaceAR) : toNodeSpaceAR)(this.rootNode, pos));
              pobj.setSiblingIndex(pobj.parent.children.length);
            }
          }
        }

        bossComming(obj, id) {
          var skillConfig = this.skillPlayer.getConfigs().skConfig;
          var textureConfig = this.skillPlayer.getConfigs().tConfig;
          var config = skillConfig[id];

          if (config) {
            var _obj = new (_crd && SkillItemBossComing === void 0 ? (_reportPossibleCrUseOfSkillItemBossComing({
              error: Error()
            }), SkillItemBossComing) : SkillItemBossComing)(this.skillPlayer, this.sourceManage, this.batteryManager.getParentObj(), config, textureConfig);

            _obj.uiRoot.setPosition(0, 0);
          }
        }

        changeBGM(obj, id) {
          var skillConfig = this.skillPlayer.getConfigs().skConfig;
          var config = skillConfig[id];

          if (config) {
            this.backgroundSceneManager.forceChangeBkMus(config.bgm_id);
            obj.setUseChangeBgm(true);
          }
        }

        resumeCurrentBGM(obj, id) {
          this.backgroundSceneManager.resumeBkMus();
        }

        rotationScore(obj, id) {
          var skillConfig = this.skillPlayer.getConfigs().skConfig;
          var textureConfig = this.skillPlayer.getConfigs().tConfig;
          var config = skillConfig[id];

          if (config) {
            var userInfo = obj.getUserInfo();
            var batObj = this.batteryManager.getBatteryByPlayerId(userInfo.player_id);

            if (batObj) {
              var pos = batObj.getBatteryPos();
              var info = {
                beishu: obj.getBeishu(),
                score: obj.getScoreVal(),
                spr_name: config.spr_name,
                src_id: config.src_id
              };
              var skItem = new (_crd && SkillItemRotationScore === void 0 ? (_reportPossibleCrUseOfSkillItemRotationScore({
                error: Error()
              }), SkillItemRotationScore) : SkillItemRotationScore)(this.sourceManage, this.prefabName, this.batteryManager.getParentObj(), info, textureConfig);

              if (batObj.getSide() == 3) {
                skItem.uiRoot.setPosition((_crd && toNodeSpaceAR === void 0 ? (_reportPossibleCrUseOftoNodeSpaceAR({
                  error: Error()
                }), toNodeSpaceAR) : toNodeSpaceAR)(this.rootNode, new Vec3(pos.x, pos.y - 200))); // skItem.uiRoot.setWorldPosition(new Vec3(pos.x, pos.y - 200))
              } else {
                skItem.uiRoot.setPosition((_crd && toNodeSpaceAR === void 0 ? (_reportPossibleCrUseOftoNodeSpaceAR({
                  error: Error()
                }), toNodeSpaceAR) : toNodeSpaceAR)(this.rootNode, new Vec3(pos.x, pos.y + 200))); // skItem.uiRoot.setWorldPosition(new Vec3(pos.x, pos.y + 200))
              }

              skItem.uiRoot.setSiblingIndex(skItem.uiRoot.parent.children.length);

              if (this.skillPlayer.getUseSkew() == true) {
                skItem.uiRoot.setScale(new Vec3(-1, -1));
              }
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f533e1f54e7754a38bf1c17cdf2fed6db3e20c85.js.map