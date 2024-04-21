System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, Component, Label, Node, Sprite, UITransform, Vec2, Vec3, instantiate, sp, view, addAnimation, createAnimationNode, createSkeleton, getAnimation, llcompare, llminus, llplus, pi, pia, LockFish, BatteryHitScoreMgr, global, Battery, _crd, GAME_TYPE_FRIENDROOM, GAME_TYPE_GOLDROOM;

  function _reportPossibleCrUseOfBatteryManager(extras) {
    _reporterNs.report("BatteryManager", "./BatteryManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../base/SourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddAnimation(extras) {
    _reporterNs.report("addAnimation", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateAnimationNode(extras) {
    _reporterNs.report("createAnimationNode", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateSkeleton(extras) {
    _reporterNs.report("createSkeleton", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetAnimation(extras) {
    _reporterNs.report("getAnimation", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfllcompare(extras) {
    _reporterNs.report("llcompare", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfllminus(extras) {
    _reporterNs.report("llminus", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfllplus(extras) {
    _reporterNs.report("llplus", "./FishTool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpi(extras) {
    _reporterNs.report("pi", "./CalculteRule", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpia(extras) {
    _reporterNs.report("pia", "./CalculteRule", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFishManager(extras) {
    _reporterNs.report("FishManager", "./FishManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletManager(extras) {
    _reporterNs.report("BulletManager", "./BulletManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLockFish(extras) {
    _reporterNs.report("LockFish", "./LockFish", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBatteryHitScoreMgr(extras) {
    _reporterNs.report("BatteryHitScoreMgr", "./BatteryHitScoreMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBackgroundSceneManager(extras) {
    _reporterNs.report("BackgroundSceneManager", "./BackgroundSceneManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMusicEffectPlayer(extras) {
    _reporterNs.report("MusicEffectPlayer", "./MusicEffectPlayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../hall", _context.meta, extras);
  }

  _export("Battery", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Animation = _cc.Animation;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      instantiate = _cc.instantiate;
      sp = _cc.sp;
      view = _cc.view;
    }, function (_unresolved_2) {
      addAnimation = _unresolved_2.addAnimation;
      createAnimationNode = _unresolved_2.createAnimationNode;
      createSkeleton = _unresolved_2.createSkeleton;
      getAnimation = _unresolved_2.getAnimation;
      llcompare = _unresolved_2.llcompare;
      llminus = _unresolved_2.llminus;
      llplus = _unresolved_2.llplus;
    }, function (_unresolved_3) {
      pi = _unresolved_3.pi;
      pia = _unresolved_3.pia;
    }, function (_unresolved_4) {
      LockFish = _unresolved_4.LockFish;
    }, function (_unresolved_5) {
      BatteryHitScoreMgr = _unresolved_5.BatteryHitScoreMgr;
    }, function (_unresolved_6) {
      global = _unresolved_6.global;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e14c2bnlilP36KuTavcVaW8", "Battery", undefined);

      __checkObsolete__(['Animation', 'AnimationClip', 'Component', 'EventTouch', 'Label', 'Node', 'Prefab', 'Sprite', 'SpriteAtlas', 'UITransform', 'Vec2', 'Vec3', 'Widget', 'instantiate', 'sp', 'view']);

      GAME_TYPE_FRIENDROOM = 2;
      GAME_TYPE_GOLDROOM = 1;

      _export("Battery", Battery = class Battery extends Component {
        constructor() {
          super(...arguments);
          this.textureConfig = void 0;
          this.commonConfig = void 0;
          this.batteryAllConfig = void 0;
          this.batterySkinConfig = void 0;
          this.batScoreConfig = void 0;
          this.fntScoreConfig = void 0;
          this.sendBulletMax = 20;
          this.send_ReqLock = void 0;
          this.send_ReqFire = void 0;
          this.send_ReqCancelLock = void 0;
          this.send_ReqSwitchBattery = void 0;
          this.wepShow = void 0;
          this.dataManager = void 0;
          this.noMoney = void 0;
          this.uiCreater = void 0;
          this.stop_all_action = void 0;
          this.batteryConfig = void 0;
          this.skinConfig = void 0;
          this.side = void 0;
          this.cur_angle = void 0;
          this.cur_move_pos = void 0;

          /**炮口的位置 */
          this.local_pos = void 0;
          this.key_is_down = void 0;
          this.send_bullet_add_time = void 0;
          this.user_info = void 0;
          this.front_fish_data_id = void 0;
          this.is_auto_send = void 0;
          this.use_auto_send = void 0;
          this.auto_exit_time = void 0;
          this.auto_exit_time_add = void 0;
          this.begin_pos = void 0;
          this.move_pos = void 0;
          this.bulletSartPos = void 0;
          this.show_persion_ui = void 0;
          this.show_change_battery_ui = false;
          //显示看换炮页
          this.skeleton_obj = null;
          //炮管骨骼动画
          this.spr_obj = null;
          //炮管帧动画
          this.paohuo_obj = null;
          //炮火
          this.pao_am_obj = null;
          //加减炮效果
          this.pao_lock_obj = null;
          //锁定时效果
          this.is_play_over = false;
          //发炮动画是否播放完成
          this.is_pao_over = false;
          //炮火动画是否播放完成
          this.is_can_use_lock = false;
          //是否启动锁定
          this.add_fish_gold = [];
          //加钱列表
          this.sken_scale_org = 0;
          this.sendBulletNum = 0;
          this.ui_lst = void 0;
          this.ui_lstInit = void 0;
          this.node_pao_position = void 0;
          this.paohuo_src = void 0;
          this.pao_am_src = void 0;
          this.pao_lock_src = void 0;
          this.lock_obj = void 0;
          this.hit_score_obj = void 0;
          this.sourceManager = void 0;
          this.fishManager = void 0;
          this.bulletManager = void 0;
          this.batteryManager = void 0;
          this.backgroundSceneManager = void 0;
          this.musicEffectPlayer = void 0;
          this.parentNode = void 0;
        }

        create(ui, ttConfig, cConfig, bbConfig, skConfig, scoreConfig, fntConfig, sendFuncs, sceneParam, sourceManager, fishManager, bulletManager, batteryManager, backgroundSceneManager, musicEffectPlayer) {
          this.textureConfig = ttConfig;
          this.commonConfig = cConfig;
          this.batteryAllConfig = bbConfig;
          this.batterySkinConfig = skConfig;
          this.batScoreConfig = scoreConfig;
          this.fntScoreConfig = fntConfig;
          this.uiCreater = ui;
          this.send_ReqLock = sendFuncs.lock;
          this.send_ReqFire = sendFuncs.fire;
          this.send_ReqCancelLock = sendFuncs.cancelLock;
          this.send_ReqSwitchBattery = sendFuncs.switchBattery;
          this.wepShow = sceneParam.wepShow;
          this.dataManager = sceneParam.dataManager;
          this.noMoney = sceneParam.noMoney;
          this.sourceManager = sourceManager;
          this.fishManager = fishManager;
          this.bulletManager = bulletManager;
          this.batteryManager = batteryManager;
          this.backgroundSceneManager = backgroundSceneManager;
          this.musicEffectPlayer = musicEffectPlayer;
          this.init();
        }

        init() {
          this.initData();
          this.initUI();
        }

        initData() {
          this.stop_all_action = false;
          this.batteryConfig = null;
          this.skinConfig = null;
          this.side = 0;
          this.cur_angle = 0;
          this.cur_move_pos = new Vec3();
          this.local_pos = new Vec3();
          this.key_is_down = false;
          this.send_bullet_add_time = 0;
          this.user_info = {
            //用户数据
            player_id: '',
            //玩家id
            server_id: 0,
            //玩家id
            set_id: 0,
            is_local: false,
            //是否为本地，区别自己与别人的炮台
            gold: 0,
            //金币
            head_id: 0,
            //头像
            level: 0,
            //等级
            vip_level: 0,
            //vip等级
            nick_name: "",
            //昵称
            battery_id: 0,
            //炮id
            battery_score: 0,
            //炮分数
            isPowerBattery: false,
            //是否能量炮
            room_id: '',
            //房间号
            ready: 1,
            //0:准备,1未准备
            offline: 0,
            //0:没有离线,非0:离线
            bullet: 0 //剩余子弹  

          };
          this.front_fish_data_id = -1; //上一次锁定的鱼类型id

          this.is_auto_send = false; //是否自动开炮

          this.use_auto_send = false; //是否使用自动开炮

          this.auto_exit_time = 60; //自动退出时间

          this.auto_exit_time_add = 0; //退出计时器

          this.begin_pos = new Vec3(0, 0); //开始点击位置

          this.move_pos = new Vec3(0, 0); //移动位置

          this.bulletSartPos = new Vec3(0, 0); //子弹发射位置

          this.show_persion_ui = false; //显示个人信息页

          this.show_change_battery_ui = false; //显示看换炮页

          this.skeleton_obj = null; //炮管骨骼动画

          this.spr_obj = null; //炮管帧动画

          this.paohuo_obj = null; //炮火

          this.pao_am_obj = null; //加减炮效果

          this.pao_lock_obj = null; //锁定时效果

          this.is_play_over = false; //发炮动画是否播放完成

          this.is_pao_over = false; //炮火动画是否播放完成

          this.is_can_use_lock = false; //是否启动锁定

          this.add_fish_gold = []; //加钱列表

          this.sken_scale_org = 0;
          this.sendBulletNum = 0;
        }

        getNodePao() {
          return this.ui_lst.getChildByName('node_pao');
        }

        initUI() {
          this.ui_lst = instantiate(this.uiCreater);
          this.ui_lstInit = instantiate(this.uiCreater);
          this.node.addChild(this.ui_lst);
          this.node_pao_position = this.getNodePao().getWorldPosition();
          this.node.setSiblingIndex(this.node.children.length);
          this.registerEvent();
          this.setUIstate();
          this.resetCheckUI();
          this.setReady();
          this.showOffline();
          this.newAnimationsAndobject();
          this.hit_score_obj = new (_crd && BatteryHitScoreMgr === void 0 ? (_reportPossibleCrUseOfBatteryHitScoreMgr({
            error: Error()
          }), BatteryHitScoreMgr) : BatteryHitScoreMgr)(this.sourceManager, this.ui_lst, this.batScoreConfig, this.fntScoreConfig, this.batteryManager.getRootNode());
        }

        newAnimationsAndobject() {
          this.paohuo_src = this.textureConfig[this.commonConfig.battery_paohuo_src_id];

          if (this.paohuo_src) {
            if (!this.paohuo_obj) {
              this.paohuo_obj = (_crd && createAnimationNode === void 0 ? (_reportPossibleCrUseOfcreateAnimationNode({
                error: Error()
              }), createAnimationNode) : createAnimationNode)(this.sourceManager, this.getNodePao(), this.paohuo_src, false, false, () => {
                this.is_pao_over = false;
                this.paohuo_obj.active = false;
              });
              this.paohuo_obj.setPosition(125, 0);
              this.paohuo_obj.active = false;
              this.paohuo_obj.angle = 90;
            }
          }

          this.pao_am_src = this.textureConfig[this.commonConfig.battery_am_src_id];

          if (this.pao_am_src) {
            if (!this.pao_am_obj) {
              this.pao_am_obj = (_crd && createAnimationNode === void 0 ? (_reportPossibleCrUseOfcreateAnimationNode({
                error: Error()
              }), createAnimationNode) : createAnimationNode)(this.sourceManager, this.getNodePao(), this.pao_am_src, false, false, () => {
                this.is_pao_over = false;
                this.paohuo_obj.active = false;
              });
              this.pao_am_obj.setPosition(0, 0);
              this.pao_am_obj.active = false;
              this.pao_am_obj.setSiblingIndex(10000);
            }
          }

          this.pao_lock_src = this.textureConfig[this.commonConfig.battery_lock_src_id];

          if (this.pao_lock_src) {
            if (!this.pao_lock_obj) {
              this.pao_lock_obj = (_crd && createAnimationNode === void 0 ? (_reportPossibleCrUseOfcreateAnimationNode({
                error: Error()
              }), createAnimationNode) : createAnimationNode)(this.sourceManager, this.getNodePao(), this.pao_lock_src, false, true); // getAnimation(this.pao_lock_obj).stop();

              this.pao_lock_obj.setPosition(0, 10);
              this.pao_lock_obj.active = false;
            }
          }
        }

        setUIstate() {
          this.ui_lst.getChildByName('img_wait_add').active = true;
          this.ui_lst.getChildByName('img_battery_bk').active = false;
          this.ui_lst.getChildByName('img_nomoney').active = false;
          this.ui_lst.getChildByName('img_lock').active = false;
          this.ui_lst.getChildByName('img_ctrlbk').active = false;
          this.ui_lst.getChildByName('btn_change_battery').active = false;
          this.ui_lst.getChildByName('spr_yourthis').active = false;
          this.ui_lst.getChildByName('img_informationbk').active = false;
          this.ui_lst.getChildByName('fnt_addscore').active = false;
          this.ui_lst.getChildByName('spr_egr').active = false; // this.ui_lst.getChildByName('spr_egr').stopAllActions()

          this.ui_lst.getChildByName('fnt_score').getComponent(Label).string = "0";
          this.ui_lst.getChildByName('fnt_beishu').getComponent(Label).string = "11";
          this.ui_lst.getChildByName('txt_nick').getComponent(Label).string = "default"; // this.ui_lst.txt_level.getComponent(cc.Label).string = ("default")

          this.ui_lst.getChildByName('txt_viplevel').getComponent(Label).string = "default";
        }

        registerTouch(parentNode) {// parentNode.on(Node.EventType.TOUCH_START, this.onTouchBegan.bind(this));
          // parentNode.on(Node.EventType.TOUCH_MOVE, this.onTouchMoved.bind(this));
          // parentNode.on(Node.EventType.TOUCH_END, this.onTouchEnded.bind(this));
        }

        unRegisterTouch(parentNode) {// parentNode.off(Node.EventType.TOUCH_START);
          // parentNode.off(Node.EventType.TOUCH_MOVE);
          // parentNode.off(Node.EventType.TOUCH_END);
        }

        resetCheckUI() {// todo
          // if (VersionManager.isResourceInvalide()) {
          //   this.ui_lst.getChildByName('btn_head').setEnabled(false)
          // }
        }

        registerEvent() {
          this.ui_lst.getChildByName('btn_head').on(Node.EventType.TOUCH_END, e => {
            this.show_persion_ui = !this.show_persion_ui;
            this.ui_lst.getChildByName('img_informationbk').active = this.show_persion_ui;
          });
          this.ui_lst.getChildByName('btn_change_battery').on(Node.EventType.TOUCH_END, e => {
            if (this.user_info.is_local === true) {
              console.log("show change battery dlg >>>>>>>");
              this.show_change_battery_ui = !this.show_change_battery_ui;
              this.ui_lst.getChildByName('img_ctrlbk').active = this.show_change_battery_ui;
              this.ui_lst.getChildByName('btn_change_battery').active = this.show_change_battery_ui;
              this.wepShow.show(this.textureConfig, this.batterySkinConfig);
            }
          });
          this.ui_lst.getChildByName('btn_minus').on(Node.EventType.TOUCH_END, e => {
            if (this.user_info.is_local === true) {
              this.onMinusBarrelIndex();
            }
          });
          this.ui_lst.getChildByName('btn_plus').on(Node.EventType.TOUCH_END, e => {
            if (this.user_info.is_local === true) {
              this.onAddBarrelIndex();
            }
          });
          this.ui_lst.getChildByName('img_battery_bk').on(Node.EventType.TOUCH_END, e => {
            if (this.user_info.is_local === true) {
              this.show_change_battery_ui = !this.show_change_battery_ui;
              this.ui_lst.getChildByName('img_ctrlbk').active = this.show_change_battery_ui;
              this.ui_lst.getChildByName('btn_change_battery').active = this.show_change_battery_ui;
            }
          });
        }

        getSceneWidth() {
          return this.commonConfig.scene_size.width;
        }

        getSceneHeight() {
          return this.commonConfig.scene_size.height;
        }

        onTouchBegan(e) {
          if (this.user_info.is_local === true) {
            this.key_is_down = true;

            if (this.isLockFish() === true) {
              return true;
            }

            var local_pos = e.getUILocation();
            var pos = new Vec3(local_pos.x, local_pos.y);

            if (this.isMyBattery() === true && this.side === 3) {
              pos = new Vec3(view.getVisibleSize().x - local_pos.x, view.getVisibleSize().y - local_pos.y);
            }

            this.rotationBatteryByPos(pos);
            this.begin_pos = pos;
            this.send_bullet_add_time = this.batteryConfig.send_v;

            if (this.isMyBattery() === true) {
              this.ui_lst.getChildByName('btn_change_battery').active = false;
              this.ui_lst.getChildByName('img_ctrlbk').active = false;
              this.show_change_battery_ui = false;
            }
          }

          return true;
        }

        onTouchMoved(e) {
          if (this.user_info.is_local === true) {
            this.key_is_down = true;

            if (this.isLockFish() === true) {
              return true;
            }

            var local_pos = e.getUILocation();
            var pos = local_pos;

            if (this.isMyBattery() === true && this.side === 3) {
              pos = new Vec3(view.getVisibleSize().x - local_pos.x, view.getVisibleSize().y - local_pos.y);
            }

            this.rotationBatteryByPos(pos);
            this.move_pos = pos;
          }

          return true;
        }

        onTouchEnded(e) {
          if (this.user_info.is_local === true) {
            this.key_is_down = false;

            if (this.is_can_use_lock === true) {
              if (Math.abs(this.begin_pos.x - this.move_pos.x) < 20 && Math.abs(this.begin_pos.y - this.move_pos.y) < 20 || this.move_pos.x === 0 && this.move_pos.y === 0) {
                var local_pos = e.getUILocation();
                var pos = local_pos;

                if (this.isMyBattery() === true && this.side === 3) {
                  pos = new Vec3(view.getVisibleSize().x - local_pos.x, view.getVisibleSize().y - local_pos.y);
                }

                this.lockFishByPoint(pos);

                if (this.isLockFish() === true) {
                  // console.log("lock fish pos("..pos.x.. ","..pos.y.. ")")
                  this.setAutoFire(true);
                }
              }
            }

            this.begin_pos = new Vec3();
            this.move_pos = new Vec3();
          }

          return false;
        }

        lockFishByPoint(pos) {
          var fsh_id = this.fishManager.getFishIdByPoint(pos);
          this.lock_obj.forceToLockFish(fsh_id);
        }

        setAutoFire(bauto) {
          if (bauto !== null && this.user_info.is_local === true) {
            this.is_auto_send = bauto;

            if (this.use_auto_send === true) {
              this.is_auto_send = true;
            }
          }
        }

        isMyBattery() {
          return this.user_info.is_local;
        }

        rotationBatteryByPos(pos) {
          this.cur_angle = this.getRotationAngle(pos, this.local_pos, this.side);
          var rotate_angle = this.getBatteryRotationAngle(this.cur_angle); // console.log(pos, this.local_pos, rotate_angle);

          this.getNodePao().angle = rotate_angle;
        } // private getBatteryRotationAngle(bangle) {
        //   let rotate_angle = 0
        //   if (this.side === 1) {
        //     rotate_angle = 2 * pia - bangle - pia / 2
        //   } else if (this.side === 2) {
        //     rotate_angle = 2 * pia - bangle - pia * 3 / 2
        //   } else if (this.side === 3) {
        //     rotate_angle = bangle;
        //   } else if (this.side === 4) {
        //     rotate_angle = bangle
        //   }
        //   return rotate_angle
        // }


        getBatteryRotationAngle(bangle) {
          var rotate_angle = 0;

          if (this.side == 1) {
            rotate_angle = 2 * (_crd && pia === void 0 ? (_reportPossibleCrUseOfpia({
              error: Error()
            }), pia) : pia) - bangle - (_crd && pia === void 0 ? (_reportPossibleCrUseOfpia({
              error: Error()
            }), pia) : pia) / 2;
          } else if (this.side == 2) {
            rotate_angle = 2 * (_crd && pia === void 0 ? (_reportPossibleCrUseOfpia({
              error: Error()
            }), pia) : pia) - bangle - (_crd && pia === void 0 ? (_reportPossibleCrUseOfpia({
              error: Error()
            }), pia) : pia) * 3 / 2;
          } else if (this.side == 3) {
            rotate_angle = (_crd && pia === void 0 ? (_reportPossibleCrUseOfpia({
              error: Error()
            }), pia) : pia) + bangle;
          } else if (this.side == 4) {
            rotate_angle = bangle;
          }

          return rotate_angle;
        } //获取到为逆时针角度


        getRotationAngle(pos1, pos2, side) {
          var angle = 0;

          if (pos1.x === pos2.x) {
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
            var k = (pos1.y - pos2.y) / (pos1.x - pos2.x); // angle =  Math.atan2(pos1.y - pos2.y, pos1.x - pos2.x) * 180 / Math.PI

            angle = Math.atan(k) * (_crd && pia === void 0 ? (_reportPossibleCrUseOfpia({
              error: Error()
            }), pia) : pia) / (_crd && pi === void 0 ? (_reportPossibleCrUseOfpi({
              error: Error()
            }), pi) : pi);

            if (side === 1 && angle <= 0) {
              angle = 2 * (_crd && pia === void 0 ? (_reportPossibleCrUseOfpia({
                error: Error()
              }), pia) : pia) + angle;
            } else if (side === 2) {
              angle = (_crd && pia === void 0 ? (_reportPossibleCrUseOfpia({
                error: Error()
              }), pia) : pia) + angle;
            } else if (side === 3 && angle > 0) {
              angle = (_crd && pia === void 0 ? (_reportPossibleCrUseOfpia({
                error: Error()
              }), pia) : pia) + angle;
            } else if (side === 3 && angle <= 0) {
              angle = 2 * (_crd && pia === void 0 ? (_reportPossibleCrUseOfpia({
                error: Error()
              }), pia) : pia) + angle;
            } else if (side === 4 && angle <= 0) {
              angle = (_crd && pia === void 0 ? (_reportPossibleCrUseOfpia({
                error: Error()
              }), pia) : pia) + angle;
            }
          }

          return angle;
        }
        /**
          info = {
            user_info = {
              player_id 	 = 0,//玩家id
              is_let 	 = false,//是否为本地，区别自己与别人的炮台
              gold 		 = 0,//金币
              head_id 	 = 0,//头像
              level 		 = 0,//等级
              vip_level 	 = 0,//vip等级
              nick_name 	 = "1234",//昵称
              battery_id   = 0 炮台id
              isPowerBattery = false //是否能量炮
              battery_score= 0
              room_id      = 0,
              bullet       = 0, //剩余子弹  
            },
            side,
            local_pos,
          }
         */


        setBatteryInfo(info, parentNode) {
          this.parentNode = parentNode;
          this.user_info = info.user_info;
          this.sendBulletNum = 0;
          this.ui_lst.getChildByName('img_battery_bk').active = true;
          this.ui_lst.getChildByName('img_wait_add').active = false;
          this.batteryConfig = this.batteryAllConfig[this.user_info.battery_id];
          this.skinConfig = this.batterySkinConfig[this.batteryConfig.id];
          this.side = info.side;
          this.local_pos = info.local_pos;
          var paoPos = this.getNodePao().getWorldPosition();
          this.local_pos = paoPos;

          if (parentNode.angle === 180) {
            //getVisibleSize
            this.local_pos = new Vec3(view.getVisibleSize().x - paoPos.x, view.getVisibleSize().y - paoPos.y);
          } // const pos = this.node.getWorldPosition();


          if (this.side === 3) {
            this.cur_angle = 270; // this.local_pos = { x: info.local_pos.x, y: info.local_pos.y - this.node_pao_position.y }
            // this.local_pos = new Vec3(info.local_pos.x, pos.y - this.getNodePao().position.y);
          } else if (this.side === 4) {
            // this.local_pos = { x: info.local_pos.x, y: info.local_pos.y + this.node_pao_position.y }
            // this.local_pos = new Vec3(info.local_pos.x, pos.y + this.getNodePao().position.y);
            this.cur_angle = 90;
          }

          this.showEnterAnimation();
          this.setUIinfo();
          this.setReady();
          this.showOffline(); //do change src

          this.setBatterySrcByConfig();
          this.createLockObj();
          this.hit_score_obj.newSomeObject();

          if (this.user_info.is_local === true) {
            this.registerTouch(parentNode);
          }

          this.updateEgrAction();
        }

        showEnterAnimation() {//todo
          // if (this.user_info.is_local === true) {
          //   let move0 = cc.MoveBy.create(0.3, cc.v2(0, -70))
          //   let move1 = move0.reverse()
          //   let move2 = cc.MoveBy.create(0.3, cc.v2(0, -70))
          //   let move3 = move2.reverse()
          //   let move4 = cc.MoveBy.create(0.3, cc.v2(0, -70))
          //   let move5 = move4.reverse()
          //   let call_cmp = cc.callFunc(() => {
          //     this.ui_lst.spr_yourthis.active = false
          //   })
          //   let seq = cc.sequence([move0, move1, move2, move3, move4, move5, call_cmp])
          //   this.ui_lst.spr_yourthis.active = true
          //   this.ui_lst.spr_yourthis.runAction(seq)
          // }
        }

        setUIinfo() {
          //todo
          // this.ui_lst.txt_nick.getComponent(Label).string = ("昵称：" + string.substr2(this.user_info.nick_name, 8))
          // this.ui_lst.txt_level.getComponent(cc.Label).string = ("等级："  +  this.user_info.level)
          this.ui_lst.getChildByName('txt_viplevel').getComponent(Label).string = "VIP等级：" + this.user_info.vip_level;
          this.ui_lst.getChildByName('fnt_score').getComponent(Label).string = "" + this.user_info.gold;

          if (this.dataManager.getRoomType() === GAME_TYPE_FRIENDROOM) {
            this.ui_lst.getChildByName('fnt_beishu').getComponent(Label).string = this.user_info.bullet + '';
          } else {
            this.ui_lst.getChildByName('fnt_beishu').getComponent(Label).string = this.user_info.battery_score + '';
          }

          this.ui_lst.getChildByName('btn_change_battery').active = false;
          this.ui_lst.getChildByName('img_ctrlbk').active = false;

          if (this.isMyBattery() === true && this.dataManager.getRoomType() !== GAME_TYPE_FRIENDROOM) {
            this.ui_lst.getChildByName('img_ctrlbk').active = true;
            this.ui_lst.getChildByName('btn_change_battery').active = true;
            this.show_change_battery_ui = true;
          } else {
            this.ui_lst.getChildByName('btn_minus').active = false;
            this.ui_lst.getChildByName('btn_plus').active = false;
          }

          if (this.dataManager.getRoomType() === GAME_TYPE_GOLDROOM) {
            if ((_crd && llcompare === void 0 ? (_reportPossibleCrUseOfllcompare({
              error: Error()
            }), llcompare) : llcompare)(this.user_info.gold, this.user_info.battery_score) < 0) {
              this.ui_lst.getChildByName('img_nomoney').active = true;
            } else {
              this.ui_lst.getChildByName('img_nomoney').active = false;
            }
          }

          this.ui_lst.getChildByName('img_informationbk').active = false; // 显示头像

          var headSprite = this.ui_lst.getChildByName('btn_head').getComponent(Sprite);
          (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
            error: Error()
          }), global) : global).loadHeadSprite(this.user_info.head_id, headSprite); // 设置vip等级
          // let vip_frame = PlayerManager.getVipIcon(this.user_info.vip_level)
          // res.load({ bundle: R.imgs.NAME, url: vip_frame,1, type: cc.SpriteFrame }).then(v => {
          //                 if (this.isValid) {
          //                     this.ui_lst.img_vip.getComponent(cc.Sprite).spriteFrame = v.resource;
          //                 }
          //             });
        }

        setUserUIHidden() {
          this.show_persion_ui = false;
          this.ui_lst.getChildByName('img_informationbk').active = false;
        } //minus battery score


        onMinusBarrelIndex() {
          var room_info = this.dataManager.getRoomInfo(this.user_info.room_id);

          if (room_info && !this.user_info.isPowerBattery) {
            this.send_ReqSwitchBattery({
              type: 1
            });
          }
        } //add battery score


        onAddBarrelIndex() {
          var room_info = this.dataManager.getRoomInfo(this.user_info.room_id);

          if (room_info && !this.user_info.isPowerBattery) {
            this.send_ReqSwitchBattery({
              type: 0
            });
          }
        }

        setReady() {
          if (this.dataManager.getRoomType() === GAME_TYPE_FRIENDROOM) {
            this.ui_lst.getChildByName('img_ready').active = this.user_info.ready === 0 && this.dataManager.stage === 0;
          } else {
            this.ui_lst.getChildByName('img_ready').active = false;
          }
        }

        showOffline() {
          if (this.dataManager.getRoomType() === GAME_TYPE_FRIENDROOM) {
            this.ui_lst.getChildByName('img_diaoxian').active = this.user_info.offline !== 0;
          } else {
            this.ui_lst.getChildByName('img_diaoxian').active = false;
          }
        }

        isLockFish() {
          if (this.lock_obj) {
            if (this.lock_obj.getLockState() && this.lock_obj.getCurrentLockFishId() !== -1) {
              return true;
            }
          }

          return false;
        }

        getLockFishId() {
          if (this.lock_obj) {
            return this.lock_obj.getCurrentLockFishId();
          }

          return -1;
        }

        setBatteryBeishu(beishu, is_eff) {
          if ((_crd && llcompare === void 0 ? (_reportPossibleCrUseOfllcompare({
            error: Error()
          }), llcompare) : llcompare)(this.user_info.gold, beishu) < 0) {
            this.ui_lst.getChildByName('img_lock').active = true;

            if (this.ui_lst.getChildByName('img_nomoney').active === true) {
              this.ui_lst.getChildByName('img_lock').active = false;
            }
          } else {
            this.ui_lst.getChildByName('img_lock').active = false;
          }

          this.user_info.battery_score = beishu;
          this.ui_lst.getChildByName('fnt_beishu').getComponent(Label).string = this.user_info.battery_score + '';

          if (is_eff === true) {
            this.pao_am_obj.active = true;
            this.pao_am_obj.getComponent(Animation).play();
            this.runBatteryFireAni();
            this.musicEffectPlayer.play(this.commonConfig.battery_am_mus_id);
          }
        }

        cutBattery(id) {
          this.user_info.battery_id = id;
          this.batteryConfig = this.batteryAllConfig[id];
          this.skinConfig = this.batterySkinConfig[this.batteryConfig.id]; // this.paohuo_obj.stopAllActions()

          this.paohuo_obj.active = false;
          this.is_play_over = false;
          this.is_pao_over = false;
          this.musicEffectPlayer.play(this.commonConfig.battery_change_mus_id);
          this.setBatterySrcByConfig();
        }

        setLockFish(fsh_id) {
          if (this.lock_obj) {
            this.lock_obj.setLockFish(fsh_id);

            if (this.pao_lock_obj.active === false) {
              this.pao_lock_obj.active = true;
              (_crd && getAnimation === void 0 ? (_reportPossibleCrUseOfgetAnimation({
                error: Error()
              }), getAnimation) : getAnimation)(this.pao_lock_obj).play();
              this.pao_lock_obj.setSiblingIndex(this.pao_lock_obj.parent.children.length);
            }
          }
        }

        getLockAngle() {
          if (this.lock_obj) {
            return this.lock_obj.getCurrentLockAngle();
          }

          return 0;
        }

        isLockObjChange() {
          if (this.lock_obj) {
            return this.lock_obj.isLockObjChange();
          }

          return true;
        }

        getSide() {
          return this.side;
        }

        isLongTimeNoSendBullet() {
          var is_no_send = false;

          if (this.user_info.is_local === true) {
            if (this.auto_exit_time_add > this.auto_exit_time) {
              is_no_send = true;
            } else {
              is_no_send = false;
            }
          }

          return is_no_send;
        }

        resumeBatteryState() {
          this.stop_all_action = false;
          this.batteryConfig = null;
          this.skinConfig = null;
          this.side = 0;
          this.cur_move_pos = new Vec3();
          this.cur_angle = 0;
          this.local_pos = new Vec3();
          this.key_is_down = false;
          this.send_bullet_add_time = 0;
          this.user_info = {
            player_id: '',
            set_id: 0,
            server_id: 0,
            is_local: false,
            gold: 0,
            head_id: 0,
            level: 0,
            vip_level: 0,
            nick_name: "",
            battery_id: 0,
            battery_score: 0,
            isPowerBattery: false,
            room_id: '',
            ready: 0,
            offline: 0,
            bullet: 0
          };
          this.front_fish_data_id = -1;
          this.is_auto_send = false;
          this.use_auto_send = false;
          this.auto_exit_time_add = 0;
          this.begin_pos = new Vec3();
          this.move_pos = new Vec3();
          this.show_persion_ui = false; //显示个人信息页

          this.show_change_battery_ui = false; //显示看换炮页

          this.is_play_over = false; //发炮动画是否播放完成

          this.is_pao_over = false; //炮火动画是否播放完成

          this.is_can_use_lock = false; //是否启动锁定

          this.sendBulletNum = 0;

          if (this.spr_obj) {
            this.spr_obj.destroy();
            this.spr_obj = null;
          }

          if (this.skeleton_obj) {
            // this.skeleton_obj.getComponent(sp.Skeleton).clearTracks()
            this.skeleton_obj.destroy();
            this.skeleton_obj = null;
          } // setSpriteAtlasNode(this.sourceManager, this.pao_lock_obj, this.pao_lock_src, String(this.pao_lock_src.pattern).format(1))


          (_crd && getAnimation === void 0 ? (_reportPossibleCrUseOfgetAnimation({
            error: Error()
          }), getAnimation) : getAnimation)(this.pao_lock_obj).stop();
          this.pao_lock_obj.active = false; // setSpriteAtlasNode(this.sourceManager, this.pao_am_obj, this.pao_am_src, String(this.pao_am_src.pattern).format(1))

          (_crd && getAnimation === void 0 ? (_reportPossibleCrUseOfgetAnimation({
            error: Error()
          }), getAnimation) : getAnimation)(this.pao_am_obj).stop();
          this.pao_am_obj.active = false; // setSpriteAtlasNode(this.sourceManager, this.paohuo_obj, this.paohuo_src, String(this.paohuo_src.pattern).format(1))

          (_crd && getAnimation === void 0 ? (_reportPossibleCrUseOfgetAnimation({
            error: Error()
          }), getAnimation) : getAnimation)(this.paohuo_obj).stop();
          this.paohuo_obj.active = false;
          this.getNodePao().angle = 90;
          this.setUIstate();

          if (this.lock_obj !== null) {
            this.lock_obj.destroy();
            this.lock_obj = null;
          }

          this.hit_score_obj.clear();
          this.add_fish_gold = [];
          this.unRegisterTouch(this.parentNode);
        }

        setBatterySrcByConfig() {
          var skins = this.skinConfig;
          this.paohuo_obj.setPosition(this.batteryConfig.paohuo_offset, 0);

          if (this.spr_obj) {
            this.spr_obj.destroy();
            this.spr_obj = null;
          }

          if (this.skeleton_obj) {
            // this.skeleton_obj.getComponent(sp.Skeleton).clearTracks()
            this.skeleton_obj.destroy();
            this.skeleton_obj = null;
          }

          if (skins) {
            if (skins.id === 0) {
              //sprite
              var anis = this.textureConfig[skins.src];
              this.spr_obj = (_crd && createAnimationNode === void 0 ? (_reportPossibleCrUseOfcreateAnimationNode({
                error: Error()
              }), createAnimationNode) : createAnimationNode)(this.sourceManager, this.getNodePao(), anis, false, false);
              this.spr_obj.getComponent(UITransform).setAnchorPoint(new Vec2(0.35, 0.5));
              this.spr_obj.setPosition(0, 0); // console.log("spr_obj", this.spr_obj);
            } else {
              // let js_file = skins.src + ".json"
              // let as_file = skins.src + ".atlas"
              // this.skeleton_obj = sp.SkeletonAnimation.create(js_file, as_file)
              this.skeleton_obj = (_crd && createSkeleton === void 0 ? (_reportPossibleCrUseOfcreateSkeleton({
                error: Error()
              }), createSkeleton) : createSkeleton)(this.sourceManager, this.getNodePao(), skins.src);
              var sk = this.skeleton_obj.getComponent(sp.Skeleton);
              sk.setAnimation(0, skins.ani1, true);
              this.sken_scale_org = sk.timeScale;
              this.skeleton_obj.addComponent(UITransform).setAnchorPoint(new Vec2(0.35, 0.5));
              this.skeleton_obj.setPosition(30, 0);
              sk.setCompleteListener(() => {
                this.is_play_over = false;
                sk.timeScale = this.sken_scale_org;
                sk.setAnimation(0, skins.ani1, true);
              });
            }
          }
        }

        setRotationAndPosBySide(side) {
          if (side === 1) {
            this.ui_lst.angle = 90;
            this.cur_angle = 0;
          } else if (side === 2) {
            this.ui_lst.angle = 270;
            this.cur_angle = 180;
          } else if (side === 3) {
            this.ui_lst.angle = 180;
            this.cur_angle = 270;
          } else if (side === 4) {
            this.ui_lst.angle = 0;
            this.cur_angle = 90;
          }
        }

        createLockObj() {
          if (!this.lock_obj) {
            var pos = this.node.getWorldPosition();

            if (this.parentNode.angle === 180) {
              pos = new Vec3(view.getVisibleSize().x - pos.x, view.getVisibleSize().y - pos.y);
            }

            var info = {
              parent: this.parentNode,
              side: this.side,
              is_local: this.user_info.is_local,
              lkey: this.batteryConfig.lock_line_key,
              lockTexturesInfo: this.textureConfig[this.commonConfig.lock_src_id],
              offset_pos: pos.clone(),
              player_id: this.user_info.player_id
            };
            this.lock_obj = new (_crd && LockFish === void 0 ? (_reportPossibleCrUseOfLockFish({
              error: Error()
            }), LockFish) : LockFish)(info, this.commonConfig, this.sourceManager, this.fishManager, this.batteryManager);
            this.lock_obj.setLockCall(fsh_id => {
              this.sendLockMsg(fsh_id);
            });
          }
        }

        sendLockMsg(fsh_id) {
          if (this.user_info.is_local === true) {
            var msg = {
              fishId: fsh_id
            };
            this.send_ReqLock(msg);
          }
        }

        updateEgrAction() {
          var sprEgr = this.ui_lst.getChildByName('spr_egr');

          if (this.user_info.isPowerBattery) {
            if (sprEgr.active === false) {
              sprEgr.active = true;
              var config = this.textureConfig[this.commonConfig.battyer_egr];
              var an = (_crd && getAnimation === void 0 ? (_reportPossibleCrUseOfgetAnimation({
                error: Error()
              }), getAnimation) : getAnimation)(sprEgr);

              if (an) {
                an.play();
              } else {
                (_crd && addAnimation === void 0 ? (_reportPossibleCrUseOfaddAnimation({
                  error: Error()
                }), addAnimation) : addAnimation)(this.sourceManager, sprEgr, config, true, true);
              } // todo
              // let animation = cc.AnimationCache.getInstance().getAnimation(config.key)
              // if( animation === null ){
              //   animation = g_CreateAnimation(config, false)
              //   cc.AnimationCache.getInstance().addAnimation(animation, config.key)
              // }
              // animation.retain()
              // let animate = cc.Animate.create(animation)
              // animation.release()
              // this.ui_lst.spr_egr.runAction(cc.RepeatForever.create(animate))

            }
          } else {
            // this.ui_lst.getChildByName('spr_egr').stopAllActions()
            sprEgr.active = false;
          }
        }
        /**获得子弹的发射位置 */


        getSendBulletPos() {
          var ranti = this.cur_angle / (_crd && pia === void 0 ? (_reportPossibleCrUseOfpia({
            error: Error()
          }), pia) : pia) * (_crd && pi === void 0 ? (_reportPossibleCrUseOfpi({
            error: Error()
          }), pi) : pi); // const localPos = toNodeSpaceAR(this.batteryManager.getRootNode(), this.local_pos);

          this.bulletSartPos.x = this.local_pos.x + this.batteryConfig.offset_dis * Math.cos(ranti);
          this.bulletSartPos.y = this.local_pos.y + this.batteryConfig.offset_dis * Math.sin(ranti);
          return this.bulletSartPos;
        }
        /**没有偏移的子弹发射位置 */


        getNoOffsetBulletPos() {
          return this.local_pos;
        }

        update(dt) {
          if (this.stop_all_action === true) {
            return;
          }

          if (this.user_info.player_id === '') {
            return;
          }

          if (this.lock_obj) {
            this.lock_obj.update(dt);
          } //run lock


          if (this.isLockFish()) {
            this.cur_angle = this.lock_obj.getCurrentLockAngle();
            var rotate_angle = this.getBatteryRotationAngle(this.cur_angle); // if (this.side === 1) {
            //   rotate_angle = 2 * pia - this.cur_angle - pia / 2
            // } else if (this.side === 2) {
            //   rotate_angle = 2 * pia - this.cur_angle - pia * 3 / 2
            // } else if (this.side === 3) {
            //   rotate_angle = this.cur_angle
            // } else if (this.side === 4) {
            //   rotate_angle = this.cur_angle
            // }

            this.getNodePao().angle = rotate_angle;
          }

          this.sendBullet(dt);

          if (this.user_info.is_local === true) {
            if (this.auto_exit_time_add < this.auto_exit_time) {
              this.auto_exit_time_add = this.auto_exit_time_add + dt;
            }

            if (this.isLockFish() === true) {
              this.setAutoFire(true);
            } else {
              this.setAutoFire(false);
            }
          }
        }

        setAngle(angle) {
          this.cur_angle = angle;
        }

        sendBullet(dt) {
          if (this.send_bullet_add_time > this.batteryConfig.send_v) {
            this.send_bullet_add_time = 0;

            if (this.isCanSendBullet() === true) {
              //todo
              var msg = {
                angle: this.cur_angle,
                bulletId: this.batteryManager.getBulletID()
              };
              this.send_ReqFire && this.send_ReqFire(msg);
              this.runSendBullet(this.cur_angle, false, msg.bulletId);

              if (this.dataManager.getRoomType() === GAME_TYPE_GOLDROOM) {
                //金币房
                this.user_info.gold = (_crd && llminus === void 0 ? (_reportPossibleCrUseOfllminus({
                  error: Error()
                }), llminus) : llminus)(this.user_info.gold, this.user_info.battery_score);

                if ((_crd && llcompare === void 0 ? (_reportPossibleCrUseOfllcompare({
                  error: Error()
                }), llcompare) : llcompare)(this.user_info.gold, 0) <= 0) {
                  this.user_info.gold = 0;
                }

                this.ui_lst.getChildByName('fnt_score').getComponent(Label).string = "" + this.user_info.gold;
              }

              this.sendBulletNum = this.sendBulletNum + 1;
            }
          } else {
            this.send_bullet_add_time = this.send_bullet_add_time + dt;
          }
        } //是否定时发射子弹


        isCanSendBullet() {
          var is_can_send_bullet = false;
          var cut_state = this.backgroundSceneManager.getSceneState();

          if ((this.key_is_down === true || this.is_auto_send === true && this.user_info.is_local === true) && cut_state === 1 && this.sendBulletNum < this.sendBulletMax) {
            if (this.isHaveEnoughScore() === true) {
              if (this.dataManager.getRoomType() === GAME_TYPE_FRIENDROOM) {
                //好友房
                if (this.dataManager.stage === 1) {
                  //只有在游戏开始后才能发子弹
                  is_can_send_bullet = true;
                }
              } else {
                is_can_send_bullet = true;
              }
            } else {
              this.is_auto_send = false;
            }
          }

          return is_can_send_bullet;
        }
        /**
         * 发射子弹
         * @param angle 
         * @param bserver 
         * @param server_id 
         * @returns 
         */


        runSendBullet(angle, bserver, server_id) {
          if (bserver === true && this.user_info.is_local === true) {
            return;
          }

          if (this.user_info.is_local === true) {
            this.musicEffectPlayer.play(this.batteryConfig.mus_eff_lst[0]);
          }

          var bulletID = this.batteryConfig.bullet[0];

          if (this.user_info.is_local === false) {
            bulletID = this.batteryConfig.bullet[1];
          }

          if (this.user_info.is_local === true || this.isLockFish() === true) {
            angle = this.cur_angle;
          }

          this.bulletManager.sendBullet(bulletID, this.getSendBulletPos(), angle, this.side, this.user_info.player_id, server_id, this.getLockFishId(), this.user_info.is_local);
          this.runBatteryFireAni();
          this.runFirePaohuoAni();

          if (this.user_info.is_local === false && this.isLockFish() === false) {
            this.cur_angle = angle;
            var rotate_angle = this.getBatteryRotationAngle(this.cur_angle);
            this.getNodePao().angle = rotate_angle;
          }

          if (this.user_info.is_local === true) {
            this.auto_exit_time_add = 0;
          }
        }
        /**
         * 开炮动画
         */


        runBatteryFireAni() {
          var skins = this.skinConfig;

          if (this.spr_obj) {
            var an = this.spr_obj.getComponent(Animation); // an.stop();

            an.play();
          }

          if (this.skeleton_obj && this.is_play_over === false) {
            this.is_play_over = true;
            var sk = this.skeleton_obj.getComponent(sp.Skeleton);
            sk.setAnimation(0, skins.ani2, false);
            sk.timeScale = skins.time_scale;
          }
        }

        runFirePaohuoAni() {
          if (this.is_pao_over === false) {
            this.paohuo_obj.active = true;
            this.paohuo_obj.getComponent(Animation).play();
            this.is_pao_over = true;
          }
        }

        isHaveEnoughScore() {
          if (this.user_info.is_local === true) {
            if (this.dataManager.getRoomType() === GAME_TYPE_FRIENDROOM) {
              //好友房
              if ((_crd && llcompare === void 0 ? (_reportPossibleCrUseOfllcompare({
                error: Error()
              }), llcompare) : llcompare)(this.user_info.bullet, 0) <= 0) {
                this.is_auto_send = false;
                this.resetLockandAutoFireState(); //todo
                // TipsManager.showOkOnce(330011)

                return false;
              }

              return true;
            } else {
              var room_info = this.dataManager.getRoomInfo(this.user_info.room_id);

              if ((_crd && llcompare === void 0 ? (_reportPossibleCrUseOfllcompare({
                error: Error()
              }), llcompare) : llcompare)(this.user_info.gold, this.user_info.battery_score) < 0 || (_crd && llcompare === void 0 ? (_reportPossibleCrUseOfllcompare({
                error: Error()
              }), llcompare) : llcompare)(this.user_info.gold, room_info.lower) < 0 || (_crd && llcompare === void 0 ? (_reportPossibleCrUseOfllcompare({
                error: Error()
              }), llcompare) : llcompare)(this.user_info.gold, 0) === 0) {
                if (this.ui_lst.getChildByName('img_nomoney').active === false) {
                  this.ui_lst.getChildByName('img_nomoney').active = true;
                  this.ui_lst.getChildByName('img_lock').active = false;
                }

                this.is_auto_send = false;
                this.resetLockandAutoFireState();
                this.noMoney.show();
                return false;
              } else {
                this.ui_lst.getChildByName('img_nomoney').active = false;
                return true;
              }
            }
          }

          return true;
        }

        resetLockandAutoFireState() {
          this.setLockFisState(false);
          this.setFireState(false);
          this.batteryManager.callControl();
        }

        setLockFisState(state) {
          if (this.user_info.is_local === true) {
            this.is_can_use_lock = state;

            if (this.is_can_use_lock === true) {
              this.pao_lock_obj.active = true;
              (_crd && getAnimation === void 0 ? (_reportPossibleCrUseOfgetAnimation({
                error: Error()
              }), getAnimation) : getAnimation)(this.pao_lock_obj).play();
              this.pao_lock_obj.setSiblingIndex(this.pao_lock_obj.parent.children.length);
            } else {
              (_crd && getAnimation === void 0 ? (_reportPossibleCrUseOfgetAnimation({
                error: Error()
              }), getAnimation) : getAnimation)(this.pao_lock_obj).stop();
              this.pao_lock_obj.active = false;
              this.unLockFish();
            }
          }
        }

        setFireState(state) {
          this.use_auto_send = state;

          if (this.isLockFish() === false) {
            this.setAutoFire(state);
          }
        }

        lockFish() {
          if (this.lock_obj && this.backgroundSceneManager.getSceneState() === 1) {
            this.lock_obj.lock();
          }
        }

        unLockFish() {
          if (this.lock_obj) {
            this.lock_obj.unlock();
          }

          if (this.user_info.is_local === true) {
            this.send_ReqCancelLock({});
          }
        }

        setUnlockFish() {
          if (this.lock_obj && this.user_info.is_local === false) {
            this.lock_obj.unlock(); // this.pao_lock_obj.stopAllActions()

            (_crd && getAnimation === void 0 ? (_reportPossibleCrUseOfgetAnimation({
              error: Error()
            }), getAnimation) : getAnimation)(this.pao_lock_obj).stop();
            this.pao_lock_obj.active = false; //todo
            // this.pao_lock_obj.setSpriteFrame(string.format(this.pao_lock_src.pattern, 1))
          }
        }

        getUserInfo() {
          return this.user_info;
        }

        getBatteryPos() {
          return this.local_pos;
        }

        setScoreVal(val) {
          if (this.dataManager.getRoomType() === GAME_TYPE_FRIENDROOM) {
            var show_val = (_crd && llminus === void 0 ? (_reportPossibleCrUseOfllminus({
              error: Error()
            }), llminus) : llminus)(val, this.user_info.gold);
            this.user_info.gold = val;
            this.setHitScore(show_val);
            this.ui_lst.getChildByName('fnt_score').getComponent(Label).string = "" + val;
          } else {
            console.log("set score value  +  +  +  +  +  +  +  +  +  +  +  +  +  +  +  +  +  = " + val); // if(CC_DEBUG) console.log(this.add_fish_gold)

            for (var k = 0; k < this.add_fish_gold.length; k++) {
              var v = this.add_fish_gold[k];
              val = (_crd && llminus === void 0 ? (_reportPossibleCrUseOfllminus({
                error: Error()
              }), llminus) : llminus)(val, v);
            }

            this.user_info.gold = val;
            var _show_val = this.user_info.gold;

            if ((_crd && llcompare === void 0 ? (_reportPossibleCrUseOfllcompare({
              error: Error()
            }), llcompare) : llcompare)(_show_val, 0) < 0) {
              _show_val = 0;
            }

            this.ui_lst.getChildByName('fnt_score').getComponent(Label).string = "" + _show_val;
            var room_info = this.dataManager.getRoomInfo(this.user_info.room_id); // if (this.user_info.is_local === false) {

            if ((_crd && llcompare === void 0 ? (_reportPossibleCrUseOfllcompare({
              error: Error()
            }), llcompare) : llcompare)(this.user_info.gold, room_info.lower) < 0 || (_crd && llcompare === void 0 ? (_reportPossibleCrUseOfllcompare({
              error: Error()
            }), llcompare) : llcompare)(this.user_info.gold, 0) === 0) {
              this.ui_lst.getChildByName('img_nomoney').active = true;
            } else {
              this.ui_lst.getChildByName('img_nomoney').active = false;
            } // }

          }
        }

        setHitScore(score) {
          var addScoreNode = this.ui_lst.getChildByName('fnt_addscore');
          addScoreNode.setSiblingIndex(addScoreNode.parent.children.length);
          var pos = addScoreNode.getWorldPosition();
          var rotat = addScoreNode.angle;
          var id = this.user_info.is_local ? 1 : 2;

          if (this.dataManager.getRoomType() === GAME_TYPE_FRIENDROOM) {
            id = (_crd && llcompare === void 0 ? (_reportPossibleCrUseOfllcompare({
              error: Error()
            }), llcompare) : llcompare)(score, 0) >= 0 ? 3 : 4;
          }

          console.log("battery set setHitScore  +  +  +  +  +  +  +  +  +  +  +  +  +  +  +  +  +  +  +  +  +  " + score);
          this.add_fish_gold.push(score);
          this.hit_score_obj.show(pos.clone(), rotat, score, id, () => {
            if (this.add_fish_gold.length > 0 && this.dataManager.getRoomType() !== GAME_TYPE_FRIENDROOM) {
              var fishGold = this.add_fish_gold.shift();
              this.user_info.gold = (_crd && llplus === void 0 ? (_reportPossibleCrUseOfllplus({
                error: Error()
              }), llplus) : llplus)(this.user_info.gold, fishGold);
              this.ui_lst.getChildByName('fnt_score').getComponent(Label).string = "" + this.user_info.gold;
              var room_info = this.dataManager.getRoomInfo(this.user_info.room_id);

              if ((_crd && llcompare === void 0 ? (_reportPossibleCrUseOfllcompare({
                error: Error()
              }), llcompare) : llcompare)(this.user_info.gold, room_info.lower) < 0 || (_crd && llcompare === void 0 ? (_reportPossibleCrUseOfllcompare({
                error: Error()
              }), llcompare) : llcompare)(this.user_info.gold, 0) === 0) {
                this.ui_lst.getChildByName('img_nomoney').active = true;
              } else {
                this.ui_lst.getChildByName('img_nomoney').active = false;
              }
            }
          });
        } //就是界面控制，没意思 ==============


        rotationInformation(set_id) {
          set_id = parseInt(set_id);

          if (set_id === 4 || set_id === 3) {
            this.ui_lst.getChildByName('img_gold').angle = 0;
            this.ui_lst.getChildByName('fnt_beishu').angle = 0;
            var position = this.ui_lst.getChildByName('fnt_beishu').getPosition();
            this.ui_lst.getChildByName('fnt_beishu').setPosition(new Vec3(position.x, position.y + 10));
            this.ui_lst.getChildByName('fnt_score').angle = 0;

            if (set_id === 4) {
              this.ui_lst.getChildByName('fnt_score').getComponent(UITransform).setAnchorPoint(new Vec2(1, 0.5));
            } else {
              this.ui_lst.getChildByName('fnt_score').getComponent(UITransform).setAnchorPoint(new Vec2(0, 0.5));
            }

            position = this.ui_lst.getChildByName('fnt_score').getPosition();
            this.ui_lst.getChildByName('fnt_score').setPosition(new Vec3(position.x, position.y - 10));
            this.ui_lst.getChildByName('btn_head').angle = 0;
            this.ui_lst.getChildByName('img_vipbk').angle = 0;
            this.ui_lst.getChildByName('img_nomoney').angle = 0;
            this.ui_lst.getChildByName('fnt_addscore').angle = 0;
            this.ui_lst.getChildByName('img_wait_add').angle = 180;
            this.ui_lst.getChildByName("img_informationbk").angle = 0; // this.ui_lst.getChildByName("img_informationbk").setRotationSkewX(0)
            // this.ui_lst.getChildByName("img_informationbk").setRotationSkewY(0)

            this.ui_lst.getChildByName('txt_nick').angle = 0; // this.ui_lst.txt_level.setRotation(0)

            this.ui_lst.getChildByName('txt_viplevel').angle = 0;
            var bk_size = this.ui_lst.getChildByName('img_informationbk').getComponent(UITransform);
            position = this.ui_lst.getChildByName('txt_nick').getPosition();
            var new_pos = {
              x: bk_size.width - position.x,
              y: bk_size.height - position.y + 26
            };
            this.ui_lst.getChildByName('txt_nick').setPosition(new_pos.x, new_pos.y);
            bk_size = this.ui_lst.getChildByName('img_informationbk').getComponent(UITransform); // x,y     = this.ui_lst.txt_level.getPosition()
            // new_pos = {x = bk_size.width - x,y = bk_size.height - y + 26}
            // this.ui_lst.txt_level.setPosition(new_pos.x,new_pos.y)

            position = this.ui_lst.getChildByName('txt_viplevel').getPosition();
            new_pos = {
              x: bk_size.width - position.x,
              y: bk_size.height - position.y + 26
            };
            this.ui_lst.getChildByName('txt_viplevel').setPosition(new_pos.x, new_pos.y);
          } else if (set_id === 2 || set_id === 1) {
            this.ui_lst.getChildByName('fnt_beishu').angle = 180;

            var _position = this.ui_lst.getChildByName('fnt_beishu').getPosition();

            this.ui_lst.getChildByName('fnt_beishu').setPosition(new Vec3(_position.x, _position.y - 10));
            this.ui_lst.getChildByName('img_gold').angle = 180;
            this.ui_lst.getChildByName('fnt_score').angle = 180;

            if (set_id === 2) {
              this.ui_lst.getChildByName('fnt_score').getComponent(UITransform).setAnchorPoint(new Vec2(0, 0.5));
            } else {
              this.ui_lst.getChildByName('fnt_score').getComponent(UITransform).setAnchorPoint(new Vec2(1, 0.5));
            }

            _position = this.ui_lst.getChildByName('fnt_score').getPosition();
            this.ui_lst.getChildByName('fnt_score').setPosition(new Vec3(_position.x, _position.y + 10));
            this.ui_lst.getChildByName('btn_head').angle = 180;
            this.ui_lst.getChildByName('img_vipbk').angle = 180;
            this.ui_lst.getChildByName('img_nomoney').angle = 180;
            this.ui_lst.getChildByName('img_lock').angle = 180;
            this.ui_lst.getChildByName('fnt_addscore').angle = 180;
            this.ui_lst.getChildByName('img_wait_add').angle = 180;
            this.ui_lst.getChildByName('txt_nick').angle = 180;
            this.ui_lst.getChildByName('txt_viplevel').angle = 180;

            var _bk_size = this.ui_lst.getChildByName('img_informationbk').getComponent(UITransform);

            _position = this.ui_lst.getChildByName('txt_nick').getPosition();
            var _new_pos = {
              x: _bk_size.width - _position.x,
              y: _bk_size.height - _position.y + 26
            };
            this.ui_lst.getChildByName('txt_nick').setPosition(_new_pos.x, _new_pos.y);
            _bk_size = this.ui_lst.getChildByName('img_informationbk').getComponent(UITransform); // x,y     = this.ui_lst.txt_level.getPosition()
            // new_pos = {x = bk_size.width - x,y = bk_size.height - y + 26}
            // this.ui_lst.txt_level.setPosition(new_pos.x,new_pos.y)

            _position = this.ui_lst.getChildByName('txt_viplevel').getPosition();
            _new_pos = {
              x: _bk_size.width - _position.x,
              y: _bk_size.height - _position.y + 26
            };
            this.ui_lst.getChildByName('txt_viplevel').setPosition(_new_pos.x, _new_pos.y);
          }
        }

        resetRotation() {
          this.ui_lst.getChildByName('img_gold').angle = this.ui_lstInit.getChildByName('img_gold').angle;
          this.ui_lst.getChildByName('fnt_beishu').angle = this.ui_lstInit.getChildByName('fnt_beishu').angle;
          this.ui_lst.getChildByName('fnt_beishu').setPosition(this.ui_lstInit.getChildByName('fnt_beishu').position);
          this.ui_lst.getChildByName('fnt_score').angle = this.ui_lstInit.getChildByName('fnt_score').angle;
          this.ui_lst.getChildByName('fnt_score').getComponent(UITransform).setAnchorPoint(this.ui_lstInit.getChildByName('fnt_score').getComponent(UITransform).anchorPoint);
          this.ui_lst.getChildByName('fnt_score').setPosition(this.ui_lstInit.getChildByName('fnt_score').position);
          this.ui_lst.getChildByName('btn_head').angle = this.ui_lstInit.getChildByName('btn_head').angle;
          this.ui_lst.getChildByName('img_vipbk').angle = this.ui_lstInit.getChildByName('img_vipbk').angle;
          this.ui_lst.getChildByName('img_nomoney').angle = this.ui_lstInit.getChildByName('img_nomoney').angle;
          this.ui_lst.getChildByName('fnt_addscore').angle = this.ui_lstInit.getChildByName('fnt_addscore').angle;
          this.ui_lst.getChildByName('img_wait_add').angle = this.ui_lstInit.getChildByName('img_wait_add').angle;
          this.ui_lst.getChildByName("img_informationbk").angle = this.ui_lstInit.getChildByName("img_informationbk").angle;
          this.ui_lst.getChildByName('txt_nick').angle = this.ui_lstInit.getChildByName('txt_nick').angle;
          this.ui_lst.getChildByName('txt_viplevel').angle = this.ui_lstInit.getChildByName('txt_viplevel').angle;
          this.ui_lst.getChildByName('txt_nick').setPosition(this.ui_lstInit.getChildByName('txt_nick').position);
          this.ui_lst.getChildByName('txt_viplevel').setPosition(this.ui_lstInit.getChildByName('txt_viplevel').position);
        }

        setStartGame() {
          if (Number(this.user_info.player_id) === 0) {
            if (this.dataManager.getRoomType() === GAME_TYPE_FRIENDROOM) {
              this.ui_lst.getChildByName('img_wait_add').active = false;
            }
          } else {
            this.ui_lst.getChildByName('img_ready').active = false;
          }
        }

        getDEfntConfig() {
          if (this.batteryConfig) {
            return this.batteryConfig.defnt;
          }
        }

        minusBulletNum() {
          this.sendBulletNum = this.sendBulletNum - 1;

          if (this.sendBulletNum < 0) {
            this.sendBulletNum = 0;
          }
        }

        isPowerBattery() {
          return this.user_info.isPowerBattery;
        }

        setPowerBattery(isPower) {
          this.user_info.isPowerBattery = isPower;
          this.updateEgrAction();
        }

        onDestroy() {
          this.hit_score_obj = null;
          this.sourceManager = null;
          this.fishManager = null;
          this.bulletManager = null;
          this.batteryManager = null;
          this.backgroundSceneManager = null;
          this.musicEffectPlayer = null;
          this.parentNode = null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7fd4462de6b2a76a02b481fc2a05af63f8cbe9fd.js.map