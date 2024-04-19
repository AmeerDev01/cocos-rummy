System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Graphics, Label, Node, Sprite, Vec3, instantiate, misc, tween, ActionCurve, ActionEffectPlayer, createAnimationNode, createParticleSystemNode, createSpriteNode, g_ByRandomSelectID, getAnimation, toNodeSpaceAR, Fish, _crd, sin, cos, sqrt, pow, deg, pia, pi, fishZOrder, isDrawBondingBox, isDrawCurve, useTestLabel;

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../base/SourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionCurve(extras) {
    _reporterNs.report("ActionCurve", "./ActionCurve", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionEffectPlayer(extras) {
    _reporterNs.report("ActionEffectPlayer", "./ActionEffectPlayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateAnimationNode(extras) {
    _reporterNs.report("createAnimationNode", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateParticleSystemNode(extras) {
    _reporterNs.report("createParticleSystemNode", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateSpriteNode(extras) {
    _reporterNs.report("createSpriteNode", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfg_ByRandomSelectID(extras) {
    _reporterNs.report("g_ByRandomSelectID", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetAnimation(extras) {
    _reporterNs.report("getAnimation", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOftoNodeSpaceAR(extras) {
    _reporterNs.report("toNodeSpaceAR", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBatteryManager(extras) {
    _reporterNs.report("BatteryManager", "./BatteryManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattery(extras) {
    _reporterNs.report("Battery", "./Battery", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishGoldManager(extras) {
    _reporterNs.report("FishGoldManager", "./FishGoldManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishLabelFntManager(extras) {
    _reporterNs.report("FishLabelFntManager", "./FishLabelFntManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillPlayer(extras) {
    _reporterNs.report("SkillPlayer", "./SkillPlayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillItemLine(extras) {
    _reporterNs.report("SkillItemLine", "./utils/skills/SkillItemLine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMusicEffectPlayer(extras) {
    _reporterNs.report("MusicEffectPlayer", "./MusicEffectPlayer", _context.meta, extras);
  }

  _export("Fish", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      Graphics = _cc.Graphics;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      Vec3 = _cc.Vec3;
      instantiate = _cc.instantiate;
      misc = _cc.misc;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      ActionCurve = _unresolved_2.ActionCurve;
    }, function (_unresolved_3) {
      ActionEffectPlayer = _unresolved_3.ActionEffectPlayer;
    }, function (_unresolved_4) {
      createAnimationNode = _unresolved_4.createAnimationNode;
      createParticleSystemNode = _unresolved_4.createParticleSystemNode;
      createSpriteNode = _unresolved_4.createSpriteNode;
      g_ByRandomSelectID = _unresolved_4.g_ByRandomSelectID;
      getAnimation = _unresolved_4.getAnimation;
      toNodeSpaceAR = _unresolved_4.toNodeSpaceAR;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "066dacU7zBG6Jn7RUbF5Qeg", "Fish", undefined);

      __checkObsolete__(['Color', 'Graphics', 'Label', 'Node', 'Sprite', 'UITransform', 'Vec3', 'instantiate', 'misc', 'tween']);

      sin = Math.sin;
      cos = Math.cos;
      sqrt = Math.sqrt;
      pow = Math.pow;
      deg = misc.degreesToRadians;
      pia = 180;
      pi = Math.PI;
      fishZOrder = 20000;
      /**是否绘制出包围盒 */

      isDrawBondingBox = false;
      /**是否绘制路径 */

      isDrawCurve = false;
      /**测试坐标 */

      useTestLabel = false;

      _export("Fish", Fish = class Fish {
        constructor(objID, fishID, curveID, isSkew, runSeconds, startPos, isReserve, angle, userInfo, sceneID, textureConfig, fishConfigs, bondingBoxConfig, curveConfig, actionConfig, commonConfig, sourceManage, parantNode, batteryManager, fishGoldManager, fishLabelFntManager, skillPlayer, musicEffectPlayer, scaleRatio, rootNode) {
          this.commonConfig = void 0;
          this.actionConfig = void 0;
          this.skillConfig = void 0;
          this.objectID = void 0;
          this.isSkew = void 0;
          this.runedSeconds = void 0;
          this.userInfo = void 0;
          this.sceneID = void 0;
          this.bbConfig = void 0;
          this.cvConfig = void 0;
          this.curveObject = void 0;
          this.curveDrawObj = void 0;
          this.currentAngle = void 0;
          this.fishLevel = void 0;
          this.fishScore = void 0;
          this.skewMod = void 0;
          this.isUseChangeBGM = void 0;
          this.aliveList = void 0;
          this.deathList = void 0;
          this.curRlineObjList = void 0;
          this.curLineObjList = void 0;
          this.goldEndPos = void 0;
          this.currentPos = void 0;
          this.uiRoot = void 0;
          this.textureConfig = [];
          this.fishConfigs = void 0;
          this.fishConfig = void 0;
          this.bondingBoxConfig = [];
          this.curveConfig = [];
          this.parantNode = void 0;

          /**包围盒节点 */
          this.draw = void 0;

          /**label坐标节点 */
          this.tesLabelObj = void 0;
          this.sourceManage = void 0;
          this.batteryManager = void 0;
          this.fishGoldManager = void 0;
          this.fishLabelFntManager = void 0;
          this.skillPlayer = void 0;
          this.musicEffectPlayer = void 0;

          /**缩放比例 */
          this.scaleRatio = 1;
          this.rootNode = void 0;
          this.textureConfig = textureConfig;
          this.fishConfigs = fishConfigs;
          this.bondingBoxConfig = bondingBoxConfig;
          this.curveConfig = curveConfig;
          this.sourceManage = sourceManage;
          this.parantNode = parantNode;
          this.actionConfig = actionConfig;
          this.commonConfig = commonConfig;
          this.batteryManager = batteryManager;
          this.fishGoldManager = fishGoldManager;
          this.fishLabelFntManager = fishLabelFntManager;
          this.skillPlayer = skillPlayer;
          this.musicEffectPlayer = musicEffectPlayer;
          this.scaleRatio = scaleRatio;
          this.rootNode = rootNode;
          this.init(objID, fishID, curveID, isSkew, runSeconds, startPos, isReserve, angle, userInfo, sceneID);
        }

        init(objID, fishID, curveID, isSkew, runSeconds, startPos, isReserve, angle, userInfo, sceneID) {
          startPos = startPos.multiplyScalar(this.scaleRatio);
          this.objectID = objID;
          this.isSkew = isSkew;
          this.runedSeconds = runSeconds; //鱼运动时间

          this.userInfo = userInfo; //用户数据

          this.sceneID = sceneID; //场景ID

          this.fishConfig = this.fishConfigs[fishID];
          this.bbConfig = this.bondingBoxConfig[this.fishConfig.bbx_id];
          this.cvConfig = this.curveConfig[curveID]; //print("birth fish ========== "  +  this.fishConfig.desc  +  " id =========== "  +  this.fishConfig.id)
          // 创建路径计算对象

          this.curveObject = new (_crd && ActionCurve === void 0 ? (_reportPossibleCrUseOfActionCurve({
            error: Error()
          }), ActionCurve) : ActionCurve)(startPos, this.cvConfig.ratio);

          for (let i = 0; i < this.cvConfig.data.length; i++) {
            const cveinfo = instantiate(this.cvConfig.data[i]); // if (cveinfo.type !== CURVE_TYPE.pbl && cveinfo.type !== CURVE_TYPE.ccve) {

            cveinfo.x1 *= this.scaleRatio;
            cveinfo.x2 *= this.scaleRatio; // }

            cveinfo.fparam.r *= this.scaleRatio;
            cveinfo.fparam.a *= this.scaleRatio;
            cveinfo.fparam.b *= this.scaleRatio;
            cveinfo.fparam.c *= this.scaleRatio;
            cveinfo.fparam.k *= this.scaleRatio;
            this.curveObject.addCurve(cveinfo);
          }

          this.curveObject.setActionReserve(isReserve);
          angle = angle > 0 ? angle : this.cvConfig.angle;
          this.curveObject.setActionRotation(angle); // member

          this.currentAngle = 0; //当前偏转角度

          this.fishLevel = 0; //鱼等级

          this.fishScore = 0; //鱼分数

          this.skewMod = 1; //翻转值

          this.isUseChangeBGM = false; //是否改变背景音

          this.aliveList = []; //出生特效列表

          this.deathList = []; //死亡特效列表

          this.curRlineObjList = []; //当前关联鱼对象列表

          this.curLineObjList = []; //连接线对象

          this.goldEndPos = new Vec3(); //金币飞往的最后位置

          this.currentPos = new Vec3(); //当前运动到的点
          // ui

          this.uiRoot = new Node();
          this.uiRoot.setSiblingIndex(fishZOrder);
          this.parantNode.addChild(this.uiRoot);
          this.createFishItem(this.fishConfig.alive, this.aliveList, true);
          this.createFishItem(this.fishConfig.death, this.deathList, false); // this.showAliveSpr(false)
          // this.showDeadSpr(false)

          if (isDrawCurve) {
            this.drawFishCurve(startPos);
          }

          if (isDrawBondingBox) {
            this.draw = new Node();
            this.addGraphics(this.draw);
            this.uiRoot.insertChild(this.draw, 1000);
          }

          if (useTestLabel) {
            this.tesLabelObj = new Node();
            const label = this.tesLabelObj.addComponent(Label);
            this.tesLabelObj.setPosition(0, 0);
            this.uiRoot.addChild(this.tesLabelObj);
            label.string = "test";
            label.fontSize = 40;
          }
        }

        deadEffEndCall() {
          let info = {
            spos: this.currentPos,
            angle: this.currentAngle,
            number: this.fishScore,
            end_pos: new Vec3(this.goldEndPos.x, this.goldEndPos.y),
            beishu: this.fishConfig.max_rate
          };
          this.fishGoldManager.play(info);
          this.curLineObjList.forEach(v => v.destroy());

          if (isDrawCurve) {
            this.curveDrawObj.destroy();
          }

          this.uiRoot.destroy();
          this.clear();
        }

        clear() {
          this.textureConfig = null;
          this.fishConfigs = null;
          this.bondingBoxConfig = null;
          this.curveConfig = null;
          this.sourceManage = null;
          this.parantNode = null;
          this.actionConfig = null;
          this.batteryManager = null;
          this.fishGoldManager = null;
          this.fishLabelFntManager = null;
          this.skillPlayer = null;
          this.musicEffectPlayer = null;
        }

        addOtherTime(dt) {
          this.runedSeconds = this.runedSeconds + dt;
        }

        update(dt) {
          if (this.batteryManager.getBackgroundSceneManager().getSceneState() === 2 && this.sceneID !== this.batteryManager.getBackgroundSceneManager().getCurrentSceneId() && this.sceneID !== -1) {
            dt = dt * this.commonConfig.cut_scene_fish_vx;
          }

          this.runedSeconds = this.runedSeconds + dt;
          const res = this.curveObject.getPosAndAngleByTime(this.runedSeconds);
          this.currentPos = res[0];
          this.currentAngle = res[1];
          this.setFishPosAndAngle();
          this.skewFish();

          if (isDrawBondingBox) {
            const graphics = this.draw.getComponent(Graphics);
            graphics.clear();

            for (const key in this.bbConfig.data) {
              const v = this.bbConfig.data[key];
              if (!v) continue;
              graphics.circle(v.a, v.b, v.r);
              graphics.stroke(); // graphics.circle(v.a, v.b, 5);
              // graphics.stroke();
            } // graphics.circle(0, 0, 5);
            // graphics.stroke();

          }
        }

        addGraphics(node) {
          let graphics = node.getComponent(Graphics);

          if (!graphics) {
            graphics = node.addComponent(Graphics);
          } // 设置线条宽度和颜色


          graphics.lineWidth = 2;
          graphics.strokeColor = Color.WHITE;
          return graphics;
        }

        isShotFish(cirLst) {
          // let ranti = (this.currentAngle / pia) * pi
          // 这里 360 - this.currentAngle，是在碰撞检测的时候有时候距离有点远
          let ranti = deg(360 - this.currentAngle);

          if (this.currentPos) {
            for (let i = 0; i < cirLst.length; i++) {
              const v = cirLst[i];

              for (const m in this.bbConfig.data) {
                const n = this.bbConfig.data[m];
                let newA = (n.a * cos(ranti) + this.skewMod * n.b * sin(ranti)) * this.scaleRatio;
                let newB = (this.skewMod * n.b * cos(ranti) - n.a * sin(ranti)) * this.scaleRatio;
                let dist = sqrt(pow(newA + this.currentPos.x - v.a, 2) + pow(newB + this.currentPos.y - v.b, 2));

                if (v.r + n.r > dist) {
                  return true;
                }
              }
            }
          }

          return false;
        }

        getCurrentBBX() {
          let bbx = instantiate(this.bbConfig.data); // let ranti = (this.currentAngle / pia) * pi
          // 这里 360 - this.currentAngle，是在碰撞检测的时候有时候距离有点远

          let ranti = deg(360 - this.currentAngle);

          for (const k in this.bbConfig.data) {
            const v = this.bbConfig.data[k];
            bbx[k].a = (v.a * cos(ranti) + this.skewMod * v.b * sin(ranti)) * this.scaleRatio + this.currentPos.x;
            bbx[k].b = (this.skewMod * v.b * cos(ranti) - v.a * sin(ranti)) * this.scaleRatio + this.currentPos.y; // 把鱼的包围盒坐标转换为世界坐标
            // const world = this.convertToWorldSpaceAR(new Vec3(bbx[k].a, bbx[k].b))
            // bbx[k].a = world.x
            // bbx[k].b = world.y
          } // console.log(' currentPos : ', this.currentPos, ' currentAngle : ', this.currentAngle, " bbx : ", JSON.stringify(bbx));


          return bbx;
        }

        isPointInFish(pos) {
          if (this.currentPos) {
            // let ranti = (this.currentAngle / pia) * pi
            // 这里 360 - this.currentAngle，是在碰撞检测的时候有时候距离有点远
            let ranti = deg(360 - this.currentAngle);

            for (const m in this.bbConfig.data) {
              const n = this.bbConfig.data[m];
              let newA = (n.a * cos(ranti) + this.skewMod * n.b * sin(ranti)) * this.scaleRatio;
              let newB = (this.skewMod * n.b * cos(ranti) - n.a * sin(ranti)) * this.scaleRatio;
              let dist = sqrt(pow(newA + this.currentPos.x - pos.x, 2) + pow(newB + this.currentPos.y - pos.y, 2));

              if (n.r > dist) {
                return true;
              }
            }
          }

          return false;
        }

        fishDead() {
          this.showAliveSpr(false);
          this.showDeadSpr(true);
          this.uiRoot.setSiblingIndex(this.uiRoot.parent.children.length);
          this.runDeadEff();
        }

        fishOut() {
          if (isDrawCurve) {
            this.curveDrawObj.destroy();
          }

          if (this.isUseChangeBGM) {// BackgroundSceneManager.resumeBkMus()
          }

          this.uiRoot.destroy();
        }

        isOutofTime() {
          return this.curveObject.isCurveEnd();
        }

        fishStart() {
          this.showAliveSpr(true);
          this.showDeadSpr(false);
          this.runStartEff();
          const res = this.curveObject.getPosAndAngleByTime(0.00001);
          this.currentPos = res[0];
          this.currentAngle = res[1];
          this.setFishPosAndAngle();
        }

        getObjectId() {
          return this.objectID;
        }

        getDataId() {
          return this.fishConfig.id;
        }

        setUserInfo(info) {
          this.userInfo = info;
        }

        getUserInfo() {
          return this.userInfo;
        }

        getCurrentPosAndAngle() {
          return [this.currentPos, this.currentAngle];
        }

        getCurrentAngle() {
          return this.currentAngle;
        }

        setGoldMoveEndPos(pos) {
          this.goldEndPos = pos;
        }

        setScoreVal(val) {
          this.fishScore = val;
        }

        getScoreVal() {
          return this.fishScore;
        }

        getBeishu() {
          return this.fishConfig.max_rate;
        }

        getLockLevel() {
          return this.fishConfig.lock_level;
        }

        getCurrentPos() {
          return this.currentPos;
        }

        addLineRelObj(obj) {
          this.curRlineObjList.push(obj);
        }

        getLineRelObjLst() {
          return this.curRlineObjList;
        }

        addCurrentLineObj(obj) {
          this.curLineObjList.push(obj);
        }

        setFishLevel(level) {
          this.fishLevel = level;
        }

        getFishLevel() {
          return this.fishLevel;
        }

        getFishConfigId() {
          return this.fishConfig.id;
        }

        getFishSceneId() {
          return this.sceneID;
        }

        showFishEff() {
          for (let k = 0; k < this.aliveList.length; k++) {
            const v = this.aliveList[k];
            v.spr.getComponent(Sprite).color = new Color(255, 0, 0);
            window.setTimeout(() => {
              v.spr.isValid && (v.spr.getComponent(Sprite).color = new Color(255, 255, 255));
            }, 100);
          }
        }

        setUseChangeBgm(buse) {
          this.isUseChangeBGM = buse;
        }

        getParent() {
          return this.uiRoot.getParent();
        }

        createFishItem(data, lst, busepit) {
          let len = data.view_inf.length - 1;

          for (let i = 0; i <= len; i++) {
            let src_cfg = this.textureConfig[data.view_inf[i].src_id];

            if (!src_cfg) {
              debugger;
            }

            let item = {
              loop: data.view_inf[i].loop,
              act_id: data.view_inf[i].act_id,
              src_id: data.view_inf[i].src_id,
              stype: src_cfg.stype,
              sspos: data.view_inf[i].pos,
              ani_key: src_cfg.key,
              spr: new Node()
            };

            if (src_cfg.stype === 1) {
              //序列帧
              item.spr = (_crd && createAnimationNode === void 0 ? (_reportPossibleCrUseOfcreateAnimationNode({
                error: Error()
              }), createAnimationNode) : createAnimationNode)(this.sourceManage, this.uiRoot, src_cfg, false, item.loop === -1);
              item.spr.setPosition(data.view_inf[i].pos.x, data.view_inf[i].pos.y);
            } else if (src_cfg.stype === 2) {
              //图片
              item.spr = (_crd && createSpriteNode === void 0 ? (_reportPossibleCrUseOfcreateSpriteNode({
                error: Error()
              }), createSpriteNode) : createSpriteNode)(this.sourceManage, this.uiRoot, src_cfg.file);
              item.spr.setPosition(data.view_inf[i].pos.x, data.view_inf[i].pos.y);
            } else if (src_cfg.stype === 3) {
              //粒子
              if (busepit) {
                let pit_obj = (_crd && createParticleSystemNode === void 0 ? (_reportPossibleCrUseOfcreateParticleSystemNode({
                  error: Error()
                }), createParticleSystemNode) : createParticleSystemNode)(this.sourceManage, this.uiRoot, src_cfg);
                pit_obj.setPosition(data.view_inf[i].pos.x, data.view_inf[i].pos.y);
              }
            }

            lst.push(item);
          }
        }

        showAliveSpr(bshow) {
          this.aliveList.forEach(v => v && v.spr && (v.spr.active = bshow));
        }

        showDeadSpr(bshow) {
          this.deathList.forEach(v => v && v.spr && (v.spr.active = bshow));
        }

        drawFishCurve(startPos) {
          let tmpCurveObj = instantiate(this.curveObject);
          this.curveDrawObj = new Node();
          const graphics = this.addGraphics(this.curveDrawObj);
          this.parantNode.insertChild(this.curveDrawObj, 100000000); // let spos = instantiate(startPos);

          let spos = (_crd && toNodeSpaceAR === void 0 ? (_reportPossibleCrUseOftoNodeSpaceAR({
            error: Error()
          }), toNodeSpaceAR) : toNodeSpaceAR)(this.rootNode, startPos);
          let drawDt = 0;

          while (!tmpCurveObj.isCurveEnd()) {
            let epos = tmpCurveObj.getPosAndSlopeByTime(drawDt)[0]; // console.log(epos.x, epos.y);

            epos = (_crd && toNodeSpaceAR === void 0 ? (_reportPossibleCrUseOftoNodeSpaceAR({
              error: Error()
            }), toNodeSpaceAR) : toNodeSpaceAR)(this.rootNode, epos);
            graphics.moveTo(spos.x, spos.y);
            graphics.lineTo(epos.x, epos.y);
            graphics.stroke(); // spos = instantiate(epos)

            spos = instantiate(epos);
            drawDt = drawDt + 0.1;
          }
        }

        setFishPosAndAngle() {
          if (useTestLabel) {
            this.tesLabelObj.getComponent(Label).string = `${this.currentPos.x}, ${this.currentPos.y}`;
          } // this.uiRoot.setWorldPosition(new Vec3(this.currentPos.x, this.currentPos.y))


          this.uiRoot.setPosition((_crd && toNodeSpaceAR === void 0 ? (_reportPossibleCrUseOftoNodeSpaceAR({
            error: Error()
          }), toNodeSpaceAR) : toNodeSpaceAR)(this.rootNode, new Vec3(this.currentPos.x, this.currentPos.y)));
          this.uiRoot.angle = this.currentAngle; // console.log(this.currentPos.x, this.currentPos.y,  this.uiRoot.position.x, this.uiRoot.position.y);
        }

        skewFish() {
          if (this.isSkew === true && this.curveObject.getActionWay() === 1) {
            this.aliveList.filter(v => v && v.spr && v.stype === 1).forEach(v => {
              const scale = v.spr.getScale();
              v.spr.setScale(scale.x, scale.y > 0 ? -scale.y : scale.y);
            });
            this.draw && this.draw.setScale(1, -1); // v.spr.setRotationSkewX(180)

            this.skewMod = -1;
          } else if (this.isSkew === false && this.curveObject.getActionWay() === -1) {
            this.aliveList.filter(v => v && v.spr && v.stype === 1).forEach(v => {
              const scale = v.spr.getScale();
              v.spr.setScale(scale.x, scale.y > 0 ? -scale.y : scale.y);
            });
            this.draw && this.draw.setScale(1, -1); // v.spr.setRotationSkewX(180)

            this.skewMod = -1;
          }
        }

        runStartEff() {
          for (let k = 0; k < this.aliveList.length; k++) {
            const v = this.aliveList[k];

            if (v.stype === 1) {
              (_crd && getAnimation === void 0 ? (_reportPossibleCrUseOfgetAnimation({
                error: Error()
              }), getAnimation) : getAnimation)(v.spr).play();
            } else if (v.stype === 2) {//todo
            } else if (v.stype === 3) {
              //todo
              let srcConfig = this.textureConfig[v.src_id];
              let pit_obj = (_crd && createParticleSystemNode === void 0 ? (_reportPossibleCrUseOfcreateParticleSystemNode({
                error: Error()
              }), createParticleSystemNode) : createParticleSystemNode)(this.sourceManage, this.uiRoot, srcConfig);
              pit_obj.setPosition(v.sspos.x, v.sspos.y); // let piObj = createParticleSystemNode(this.sourceManage, this.uiRoot, srcConfig);
              // piObj.setPosition(v.sspos.x, v.sspos.y)
            }

            if (v.spr) {
              (_crd && ActionEffectPlayer === void 0 ? (_reportPossibleCrUseOfActionEffectPlayer({
                error: Error()
              }), ActionEffectPlayer) : ActionEffectPlayer).play(v.spr, () => {}, this.actionConfig[v.act_id]);
            }
          }

          this.musicEffectPlayer.play((_crd && g_ByRandomSelectID === void 0 ? (_reportPossibleCrUseOfg_ByRandomSelectID({
            error: Error()
          }), g_ByRandomSelectID) : g_ByRandomSelectID)(this.fishConfig.alive.mus_lst));

          for (let i = 0; i <= this.fishConfig.alive.skl_id_lst.length; i++) {
            this.skillPlayer.play(this, this.fishConfig.alive.skl_id_lst[i]);
          }
        }

        runDeadEff() {
          this.deathList.forEach(v => {
            if (v.stype === 1) {
              (_crd && getAnimation === void 0 ? (_reportPossibleCrUseOfgetAnimation({
                error: Error()
              }), getAnimation) : getAnimation)(v.spr).play();
            } else if (v.stype === 2) {//todo
            } else if (v.stype === 3) {
              //todo
              let tc = this.textureConfig[v.src_id];
              let pobj = (_crd && createParticleSystemNode === void 0 ? (_reportPossibleCrUseOfcreateParticleSystemNode({
                error: Error()
              }), createParticleSystemNode) : createParticleSystemNode)(this.sourceManage, this.uiRoot, tc);
              pobj.setPosition(v.sspos.x, v.sspos.y);
            }

            (_crd && ActionEffectPlayer === void 0 ? (_reportPossibleCrUseOfActionEffectPlayer({
              error: Error()
            }), ActionEffectPlayer) : ActionEffectPlayer).play(v.spr, null, this.actionConfig[v.act_id], this);
          });
          let fntID = 1;
          let btObj = this.batteryManager.getBatteryByPlayerId(this.userInfo.player_id);

          if (btObj) {
            let fnt = btObj.getDEfntConfig();

            if (fnt) {
              fntID = btObj.isMyBattery() === true ? fnt[0] : fnt[1];
            }
          }

          this.fishLabelFntManager.play(this.currentPos, this.fishScore, fntID, this.fishConfig.max_rate);
          this.musicEffectPlayer.play((_crd && g_ByRandomSelectID === void 0 ? (_reportPossibleCrUseOfg_ByRandomSelectID({
            error: Error()
          }), g_ByRandomSelectID) : g_ByRandomSelectID)(this.fishConfig.death.mus_lst));

          for (let i = 0; i < this.fishConfig.death.skl_id_lst.length; i++) {
            this.skillPlayer.play(this, this.fishConfig.death.skl_id_lst[i]);
          }

          if (this.fishConfig.death.dead_act_id) {
            (_crd && ActionEffectPlayer === void 0 ? (_reportPossibleCrUseOfActionEffectPlayer({
              error: Error()
            }), ActionEffectPlayer) : ActionEffectPlayer).play(this.uiRoot, () => {
              this.deadEffEndCall();
            }, this.actionConfig[this.fishConfig.death.dead_act_id], null);
          } else {
            tween(this.uiRoot).delay(0.2).call(() => {
              this.uiRoot.isValid && this.deadEffEndCall();
            }).start();
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fead66444bfce3bbb83f52cd0e4d9dcd147bf72a.js.map