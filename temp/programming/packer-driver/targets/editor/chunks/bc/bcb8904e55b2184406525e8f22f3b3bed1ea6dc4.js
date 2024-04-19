System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Rect, UITransform, Vec2, Vec3, view, createSpriteAtlasNode, getSpriteAtlasBySpriteFrame, toNodeSpaceAR, LockFish, _crd, sqrt, sin, cos, atan, pow, abs, pi, pia;

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../base/SourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateSpriteAtlasNode(extras) {
    _reporterNs.report("createSpriteAtlasNode", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetSpriteAtlasBySpriteFrame(extras) {
    _reporterNs.report("getSpriteAtlasBySpriteFrame", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOftoNodeSpaceAR(extras) {
    _reporterNs.report("toNodeSpaceAR", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishManager(extras) {
    _reporterNs.report("FishManager", "./FishManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBatteryManager(extras) {
    _reporterNs.report("BatteryManager", "./BatteryManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattery(extras) {
    _reporterNs.report("Battery", "./Battery", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFish(extras) {
    _reporterNs.report("Fish", "./Fish", _context.meta, extras);
  }

  _export("LockFish", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Rect = _cc.Rect;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      view = _cc.view;
    }, function (_unresolved_2) {
      createSpriteAtlasNode = _unresolved_2.createSpriteAtlasNode;
      getSpriteAtlasBySpriteFrame = _unresolved_2.getSpriteAtlasBySpriteFrame;
      toNodeSpaceAR = _unresolved_2.toNodeSpaceAR;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a221cBuEaNOs6Pj1cvXi/RU", "LockFish", undefined);
      /**
        锁定功能
       */


      __checkObsolete__(['Node', 'Rect', 'UITransform', 'Vec2', 'Vec3', 'view']);

      sqrt = Math.sqrt;
      sin = Math.sin;
      cos = Math.cos;
      atan = Math.atan;
      pow = Math.pow;
      abs = Math.abs;
      pi = Math.PI;
      pia = 180;
      /**
      info = {
        parent,
        side,
        is_local,
        lkey,
        offset_pos,
        player_id,
      }
       */

      _export("LockFish", LockFish = class LockFish {
        constructor(info, commonConfig, sourceManage, fishManager, batteryManager) {
          this.spos = void 0;
          this.spos1 = void 0;
          this.parent = void 0;
          this.side = void 0;
          this.player_id = void 0;
          this.is_local = void 0;
          this.off_pos = void 0;
          this.lkey = void 0;
          this.spr_lock_line = void 0;
          this.block = void 0;
          this.is_lock_success = void 0;
          this.lock_fish_lst = void 0;
          this.cur_lock_index = void 0;
          this.cur_lock_obj_id = void 0;
          this.cur_lock_angle = void 0;
          this.remot_lock_angle = void 0;
          this.lock_call = void 0;
          this.is_lock_change = void 0;
          this.is_force_lock = void 0;
          this.front_force_lock_obj_id = void 0;
          // 调整锁定线的间距，设置这两个值
          this.lock_spr_dis = void 0;
          this.line_r = void 0;
          this.last_spr = void 0;
          this.last_spr_r = void 0;
          this.sourceManage = void 0;
          this.fishManager = void 0;
          this.batteryManager = void 0;
          this.commonConfig = void 0;
          this.lockTexturesInfo = void 0;
          this.rect = void 0;
          this.commonConfig = commonConfig;
          this.sourceManage = sourceManage;
          this.fishManager = fishManager;
          this.batteryManager = batteryManager;
          this.rect = new Rect(0, 0, view.getVisibleSize().width, view.getVisibleSize().height);
          this.init(info);
        }

        init(info) {
          this.spos = new Vec3();
          this.spos1 = new Vec3();
          this.parent = info.parent;
          this.side = info.side;
          this.player_id = info.player_id;
          this.is_local = info.is_local; // this.off_pos = info.offset_pos

          this.off_pos = new Vec3(0, 0);
          this.lkey = info.lkey;
          this.spr_lock_line = [];
          this.block = false;
          this.is_lock_success = false;
          this.lock_fish_lst = [];
          this.cur_lock_index = -1;
          this.cur_lock_obj_id = -1;
          this.lock_spr_dis = 30;
          this.cur_lock_angle = 0;
          this.remot_lock_angle = 0;
          this.lock_call = null;
          this.is_lock_change = false;
          this.is_force_lock = false;
          this.lockTexturesInfo = info.lockTexturesInfo;
          this.front_force_lock_obj_id = -1;
          let frame_name = info.lkey + '_1';
          let test_size = (_crd && getSpriteAtlasBySpriteFrame === void 0 ? (_reportPossibleCrUseOfgetSpriteAtlasBySpriteFrame({
            error: Error()
          }), getSpriteAtlasBySpriteFrame) : getSpriteAtlasBySpriteFrame)(this.sourceManage, this.lockTexturesInfo, frame_name);
          this.line_r = 0;

          if (test_size.width <= test_size.height) {
            this.line_r = test_size.width / 2;
          } else {
            this.line_r = test_size.height / 2;
          }

          let last_frame_name = info.lkey;
          this.last_spr = (_crd && createSpriteAtlasNode === void 0 ? (_reportPossibleCrUseOfcreateSpriteAtlasNode({
            error: Error()
          }), createSpriteAtlasNode) : createSpriteAtlasNode)(this.sourceManage, this.parent, this.lockTexturesInfo, last_frame_name);
          this.last_spr.active = false; // this.last_spr.setWorldPosition(new Vec3(0, 0))

          this.last_spr.setPosition((_crd && toNodeSpaceAR === void 0 ? (_reportPossibleCrUseOftoNodeSpaceAR({
            error: Error()
          }), toNodeSpaceAR) : toNodeSpaceAR)(this.batteryManager.getRootNode(), new Vec3(0, 0)));
          let width = this.last_spr.getComponent(UITransform).width;
          let height = this.last_spr.getComponent(UITransform).height;
          this.last_spr_r = 0;

          if (width <= height) {
            this.last_spr_r = width / 2;
          } else {
            this.last_spr_r = height / 2;
          }
        }

        lock() {
          this.block = true;
          this.is_lock_change = false;
          this.is_force_lock = false;
          this.front_force_lock_obj_id = -1;

          if (this.lock_fish_lst.length > 0) {
            this.cur_lock_index = this.cur_lock_index + 1;

            if (this.cur_lock_index > this.lock_fish_lst.length) {
              this.cur_lock_index = 0;
            } //this.cur_lock_obj_id = -1


            let cur_fsh_obj = this.lock_fish_lst[this.cur_lock_index];

            if (cur_fsh_obj) {
              this.cur_lock_obj_id = cur_fsh_obj.getObjectId(); //print("begin lock fish>>>>>>>>>>>>>>>>")

              this.is_lock_change = true;
              this.is_lock_success = true;

              if (this.lock_call) {
                this.lock_call(this.cur_lock_obj_id);
              }
            }
          }
        }

        setLockFish(fsh_id) {
          if (this.is_local === false) {
            this.block = true;
          }

          if (this.block && fsh_id !== -1) {
            this.is_lock_success = true;
            this.cur_lock_obj_id = fsh_id;
          }
        }

        forceToLockFish(fsh_id) {
          if (this.is_local === true && fsh_id !== -1) {
            this.block = true;
            this.is_force_lock = true;
            this.front_force_lock_obj_id = this.cur_lock_obj_id;
            this.cur_lock_obj_id = fsh_id;
            this.is_lock_success = true;
          }
        }

        resetLockLst(lst) {
          this.lock_fish_lst = lst;
        }

        unlock() {
          this.cur_lock_index = -1;
          this.cur_lock_obj_id = -1;
          this.is_force_lock = false;
          this.front_force_lock_obj_id = -1;
          this.block = false;
          this.is_lock_success = false;
          this.cur_lock_angle = 0;
          this.remot_lock_angle = 0;
          this.last_spr.active = false;

          for (let k = 0; k < this.spr_lock_line.length; k++) {
            const v = this.spr_lock_line[k];
            if (!v) continue;
            v.active = false;
          }
        }

        selectLockFish() {
          if (this.is_force_lock && this.is_local) {
            let fsh_obj = this.fishManager.getFishObjById(this.cur_lock_obj_id);

            if (this.isFishCanLock(fsh_obj)) {
              this.is_lock_success = true;

              if (this.lock_call) {
                if (this.front_force_lock_obj_id !== this.cur_lock_obj_id && this.cur_lock_obj_id !== -1) {
                  this.front_force_lock_obj_id = this.cur_lock_obj_id;
                  this.is_lock_change = true;
                  console.log("force to lock fish >>>>>>>>>>>");
                  this.lock_call(this.cur_lock_obj_id);
                }
              }

              return fsh_obj;
            }

            return null;
          }

          if (this.is_local === false) {
            let fsh_obj = this.fishManager.getFishObjById(this.cur_lock_obj_id);

            if (this.isFishCanLock(fsh_obj)) {
              this.is_lock_success = true;
              this.is_lock_change = true;
              return fsh_obj;
            }

            return null;
          }

          let new_index = -1;

          for (let k = 0; k < this.lock_fish_lst.length; k++) {
            const v = this.lock_fish_lst[k];
            if (!v) continue;

            if (this.cur_lock_obj_id === v.getObjectId() && this.isFishCanLock(v) === true) {
              this.is_lock_change = false;
              return v;
            }

            if (this.isFishCanLock(v) === true && new_index === -1) {
              new_index = k;
            }
          }

          if (new_index === -1) {
            this.cur_lock_index = -1;
            this.cur_lock_obj_id = -1;
            this.is_lock_success = false;
            this.is_lock_change = true;
          } else {
            this.cur_lock_index = new_index;
            this.cur_lock_obj_id = this.lock_fish_lst[this.cur_lock_index].getObjectId();

            if (this.lock_call) {
              this.lock_call(this.cur_lock_obj_id);
            }

            this.is_lock_success = true;
            this.is_lock_change = true;
          }

          return this.lock_fish_lst[this.cur_lock_index];
        }

        isFishCanLock(fsh_obj) {
          if (fsh_obj) {
            let fpos = fsh_obj.getCurrentPos();
            let battery_obj = this.batteryManager.getBatteryByPlayerId(this.player_id);
            let bpos = battery_obj.getNoOffsetBulletPos(); // let rect = new Rect(0, 0, this.commonConfig.bonding_size.width, this.commonConfig.bonding_size.height)

            let dis = sqrt(pow(fpos.x - bpos.x, 2) + pow(fpos.y - bpos.y, 2));

            if (this.rect.contains(new Vec2(fpos.x, fpos.y)) && this.isPosValid(this.side, bpos, fpos) && dis > 65) {
              return true;
            }
          }

          return false;
        }

        isPosValid(side, spos, epos) {
          let angle = this.getRotationAngle(spos, epos, side);
          let angle_valide = false;

          if (side === 1 && (angle >= 0 && angle <= 90 || angle >= 270 && angle <= 360) && spos.x < epos.x) {
            angle_valide = true;
          } else if (side === 2 && angle >= 90 && angle <= 270 && spos.x > epos.x) {
            angle_valide = true;
          } else if (side === 3 && angle >= 180 && angle <= 360 && epos.y < spos.y) {
            angle_valide = true;
          } else if (side === 4 && angle >= 0 && angle <= 180 && epos.y > spos.y) {
            angle_valide = true;
          }

          return angle_valide;
        }

        update(dt) {
          if (this.block === true) {
            let fsh_obj = this.selectLockFish();

            if (fsh_obj && this.is_lock_success === true) {
              let battery_obj = this.batteryManager.getBatteryByPlayerId(this.player_id);

              if (battery_obj) {
                // 获得炮管位置
                this.spos = battery_obj.getNoOffsetBulletPos().clone();
              }

              let end_pos = fsh_obj.getCurrentPos().clone();
              this.spos.x = this.spos.x - this.off_pos.x;
              this.spos.y = this.spos.y - this.off_pos.y; // console.log('lockfish', end_pos.x, end_pos.y, 'off_pos', this.off_pos.x, this.off_pos.y);

              end_pos.x = end_pos.x - this.off_pos.x;
              end_pos.y = end_pos.y - this.off_pos.y;
              this.resetLockLineByPos(this.spos, end_pos, battery_obj);
            } else {
              for (let k = 0; k < this.spr_lock_line.length; k++) {
                const v = this.spr_lock_line[k];
                if (!v) continue;
                v.active = false;
              }

              this.last_spr.active = false;

              if (this.is_force_lock || !this.is_local) {
                this.is_force_lock = false;
                this.block = false;
                this.is_lock_success = false;
              }
            }
          }
        }

        resetLockLineByPos(pos1, pos2, battery_obj) {
          let angle = this.getRotationAngle(pos1, pos2, this.side);

          if (battery_obj) {
            battery_obj.setAngle(angle);
            this.spos1 = battery_obj.getSendBulletPos().clone();
            this.spos1.x = this.spos1.x - this.off_pos.x;
            this.spos1.y = this.spos1.y - this.off_pos.y;
          }

          let distance = sqrt(pow(this.spos1.x - pos2.x, 2) + pow(this.spos1.y - pos2.y, 2));
          distance = distance - (this.line_r + this.last_spr_r);
          let show_index = 0;
          let dist_add = 0;
          let lst_len = this.spr_lock_line.length;

          for (let i = 1; i <= lst_len; i++) {
            dist_add = (i - 1) * (this.line_r * 2 + this.lock_spr_dis);

            if (dist_add > distance) {
              show_index = i - 1;
              break;
            }

            let cal_dis = (i - 1) * (this.line_r * 2 + this.lock_spr_dis);
            let pos = this.getPosByDistanceAndAngle(cal_dis, angle); // this.spr_lock_line[i - 1].setWorldPosition(pos)

            this.spr_lock_line[i - 1].setPosition((_crd && toNodeSpaceAR === void 0 ? (_reportPossibleCrUseOftoNodeSpaceAR({
              error: Error()
            }), toNodeSpaceAR) : toNodeSpaceAR)(this.batteryManager.getRootNode(), pos));
            this.spr_lock_line[i - 1].active = true; // this.spr_lock_line[i - 1].angle = 360 - angle;

            this.spr_lock_line[i - 1].angle = angle;
          }

          let frame_name = this.lkey + `_1`;

          while (dist_add < distance) {
            let obj = (_crd && createSpriteAtlasNode === void 0 ? (_reportPossibleCrUseOfcreateSpriteAtlasNode({
              error: Error()
            }), createSpriteAtlasNode) : createSpriteAtlasNode)(this.sourceManage, this.parent, this.lockTexturesInfo, frame_name);
            this.spr_lock_line.push(obj);
            let pos = this.getPosByDistanceAndAngle(dist_add, angle); // obj.setWorldPosition(pos)

            obj.setPosition((_crd && toNodeSpaceAR === void 0 ? (_reportPossibleCrUseOftoNodeSpaceAR({
              error: Error()
            }), toNodeSpaceAR) : toNodeSpaceAR)(this.batteryManager.getRootNode(), pos));
            obj.active = true; // obj.angle = 360 - angle

            obj.angle = angle;
            dist_add = dist_add + (this.line_r * 2 + this.lock_spr_dis);
            show_index = show_index + 1;
          }

          this.last_spr.active = true; // this.last_spr.setWorldPosition(new Vec3(pos2.x, pos2.y))

          this.last_spr.setPosition((_crd && toNodeSpaceAR === void 0 ? (_reportPossibleCrUseOftoNodeSpaceAR({
            error: Error()
          }), toNodeSpaceAR) : toNodeSpaceAR)(this.batteryManager.getRootNode(), pos2)); // console.log("this.last_spr posotion ", this.last_spr.position.x, this.last_spr.position.y, this.last_spr.worldPosition.x, this.last_spr.worldPosition.y);

          for (let i = show_index; i < this.spr_lock_line.length; i++) {
            this.spr_lock_line[i].active = false;
          }

          this.cur_lock_angle = angle;
        }

        getPosByDistanceAndAngle(dis, angle) {
          let ranti = angle / 180 * pi;
          let sx = dis * cos(ranti);
          let sy = dis * sin(ranti);
          return new Vec3(this.spos1.x + sx, this.spos1.y + sy);
        }

        getRotationAngle(pos1, pos2, side) {
          let angle = 0;

          if (abs(pos1.x - pos2.x) < 0.5) {
            if (side === 1 && pos1.y >= pos2.y) {
              angle = 90;
            } else if (side === 1 && pos1.y < pos2.y) {
              angle = 270;
            } else if (side === 2 && pos1.y >= pos2.y) {
              angle = 90;
            } else if (side === 2 && pos1.y < pos2.y) {
              angle = 270;
            } else if (side === 3) {
              angle = 270;
            } else if (side === 4) {
              angle = 90;
            }
          } else {
            let k = (pos1.y - pos2.y) / (pos1.x - pos2.x);
            angle = atan(k) * pia / pi;

            if (side === 1 && angle <= 0) {
              angle = 2 * pia + angle;
            } else if (side === 2) {
              angle = pia + angle;
            } else if (side === 3 && angle > 0) {
              angle = pia + angle;
            } else if (side === 3 && angle <= 0) {
              angle = 2 * pia + angle;
            } else if (side === 4 && angle <= 0) {
              angle = pia + angle;
            }
          }

          return angle;
        }

        getLockState() {
          if (this.block === true && this.is_lock_success === true) {
            return true;
          }

          return false;
        }

        getCurrentLockFishId() {
          if (this.is_lock_success && this.block === true) {
            return this.cur_lock_obj_id;
          }

          return -1;
        }

        getCurrentLockAngle() {
          return this.cur_lock_angle;
        }

        setLockCall(call) {
          this.lock_call = call;
        }

        isLockObjChange() {
          return this.is_lock_change;
        }

        destroy() {
          for (let k = 0; k < this.spr_lock_line.length; k++) {
            const v = this.spr_lock_line[k];
            if (!v) continue;
            v.destroy();
          }

          this.last_spr.destroy();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bcb8904e55b2184406525e8f22f3b3bed1ea6dc4.js.map