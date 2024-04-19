System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EditBox, Node, Toggle, Vec3, _decorator, screen, view, BaseComponent, mainViewModel, fishConfig, SKT_MAG_TYPE, sktMsgListener, config, fishCommondConfig, _dec, _class, _crd, ccclass, property, Fish_Test;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainViewModel(extras) {
    _reporterNs.report("mainViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishConfig(extras) {
    _reporterNs.report("fishConfig", "../config/ByFishConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKT_MAG_TYPE(extras) {
    _reporterNs.report("SKT_MAG_TYPE", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktMsgListener(extras) {
    _reporterNs.report("sktMsgListener", "../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOffishCommondConfig(extras) {
    _reporterNs.report("fishCommondConfig", "../config/ByCommonConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      EditBox = _cc.EditBox;
      Node = _cc.Node;
      Toggle = _cc.Toggle;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
      screen = _cc.screen;
      view = _cc.view;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      mainViewModel = _unresolved_3.mainViewModel;
    }, function (_unresolved_4) {
      fishConfig = _unresolved_4.fishConfig;
    }, function (_unresolved_5) {
      SKT_MAG_TYPE = _unresolved_5.SKT_MAG_TYPE;
      sktMsgListener = _unresolved_5.sktMsgListener;
    }, function (_unresolved_6) {
      config = _unresolved_6.default;
    }, function (_unresolved_7) {
      fishCommondConfig = _unresolved_7.fishCommondConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "14935E4I+BGRaYF3BP77nlJ", "Fish_Test", undefined);

      __checkObsolete__(['EditBox', 'Node', 'Toggle', 'UITransform', 'Vec3', '_decorator', 'screen', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Fish_Test", Fish_Test = (_dec = ccclass('Fish_Test'), _dec(_class = class Fish_Test extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.propertyNode = {
            props_btn_Info: new Node(),
            props_change_bg: new Node(),
            props_clear_fish: new Node(),
            props_scale: new Node()
          };
          this.props = {};
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          var lastId;
          var count = 0;
          this.node.getChildByName('Button').on(Node.EventType.TOUCH_END, () => {
            lastId && (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
              error: Error()
            }), mainViewModel) : mainViewModel).getFishManager().clearAllSceneAllFish();
            var fishNo = this.node.getChildByName('FishNo').getComponent(EditBox).string;
            var cuvNo = this.node.getChildByName('CuvNo').getComponent(EditBox).string;
            var Angle = this.node.getChildByName('Angle').getComponent(EditBox).string;
            var startPos = this.node.getChildByName('startPos').getComponent(EditBox).string.split(',');
            (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
              error: Error()
            }), mainViewModel) : mainViewModel).getFishManager().addFish({
              object_id: count++,
              fish_id: Number(fishNo),
              cve_id: Number(cuvNo),
              run_t: 0,
              spos: new Vec3(parseInt(startPos[0]), parseInt(startPos[1])),
              breserve: false,
              angle: Number(Angle),
              user_info: {}
            });
          });
          this.node.getChildByName('SuoDing').on(Toggle.EventType.TOGGLE, e => {
            (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
              error: Error()
            }), mainViewModel) : mainViewModel).getBatteryManager().getMyselfBatteryObj().setLockFisState(e.isChecked);
          });
          this.propertyNode.props_btn_Info.on(Node.EventType.TOUCH_END, () => {
            (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).selfUserId = '10000';
            var enterRoomVo = {
              roomId: 1,
              seats: [{
                /**座位顺序(0-5) */
                order: 2,

                /**当前积分 */
                cedit: 100000,

                /**头像地址 */
                icon: '1',

                /**玩家昵称 */
                nickName: '测试',

                /**玩家IP */
                ip: 'string',

                /**玩家ID */
                playerId: (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).selfUserId,

                /**性别 */
                sex: 1,

                /**准备状态 */
                ready: 0,

                /**子弹数量 */
                bullet: 1000000,

                /**离线(即被系统托管),0:没有离线,非0:离线 */
                offline: 0,

                /**vip等级 */
                vip: 1,

                /**等级 */
                level: 1
              }]
            };
            (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
              error: Error()
            }), sktMsgListener) : sktMsgListener).dispath((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
              error: Error()
            }), SKT_MAG_TYPE) : SKT_MAG_TYPE).JOIN_ROOM, enterRoomVo);
            var scence = {
              /**场景id */
              scenceId: 1,

              /**鱼 */
              fishs: [],

              /**炮台 */
              batterys: [{
                /**玩家id */
                playerId: (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                  error: Error()
                }), config) : config).testConfig.playerId,

                /**座位顺序 */
                order: 1,

                /**炮管分数 */
                score: 1,

                /**炮管数量 */
                num: 0,

                /**是否能量炮(0:不是,非0:能量炮) */
                power: 0,

                /**皮肤 */
                skin: 1
              }],

              /**代发碰撞玩家列表 */
              insteadPlayers: []
            };
            window.setTimeout(() => {
              (_crd && sktMsgListener === void 0 ? (_reportPossibleCrUseOfsktMsgListener({
                error: Error()
              }), sktMsgListener) : sktMsgListener).dispath((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                error: Error()
              }), SKT_MAG_TYPE) : SKT_MAG_TYPE).REQ_SCENCE, scence);
            }, 100);
          });
          this.propertyNode.props_change_bg.on(Node.EventType.TOUCH_END, () => {
            var id = this.randomInt(16) + 1;
            (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
              error: Error()
            }), mainViewModel) : mainViewModel).getBackgroundSceneManager().cutBackgroundScene(id);
          });
          (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
            error: Error()
          }), mainViewModel) : mainViewModel).setSendYrbyReqHit(msg => {
            var fishInfo = (_crd && fishConfig === void 0 ? (_reportPossibleCrUseOffishConfig({
              error: Error()
            }), fishConfig) : fishConfig).find(v => v.id === msg.fishConfigId); // mainViewModel.fishDeath(1, msg.fishId, fishInfo.max_rate);

            var lst = [{
              fishId: msg.fishId,
              score: fishInfo.max_rate
            }, {
              fishId: msg.fishId + 1,
              score: fishInfo.max_rate
            }, {
              fishId: msg.fishId + 2,
              score: fishInfo.max_rate
            }]; // mainViewModel.fishLstDeath(1, lst)
          });
          this.propertyNode.props_clear_fish.on(Node.EventType.TOUCH_END, () => {
            (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
              error: Error()
            }), mainViewModel) : mainViewModel).roomViewModel.clearAllFish();
          });
          this.propertyNode.props_scale.on(Toggle.EventType.TOGGLE, e => {
            var scale = e.isChecked ? view.getVisibleSize().width / (_crd && fishCommondConfig === void 0 ? (_reportPossibleCrUseOffishCommondConfig({
              error: Error()
            }), fishCommondConfig) : fishCommondConfig).scene_size.width : 1;
            (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
              error: Error()
            }), mainViewModel) : mainViewModel).setScale(scale);
          });
        }

        randomInt(max) {
          if (max < 2) {
            return 0;
          }

          return Math.floor(Math.random() * max);
        }

        useProps(key, value) {}

        bindUI() {
          console.log(view.getResolutionPolicy());
          console.log(view.getVisibleSize());
          console.log(view.getVisibleSize());
          console.log(screen.windowSize);
          console.log(screen.resolution);
          console.log(screen.devicePixelRatio);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7b0b6b46e465b2d317c6b700672a4465251c05b7.js.map