System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, tween, Vec3, BaseComponent, config, GameType, getColumnLockIconArr, IconId, Dragonv2_Audio, sourceManageSeletor, PrefabPathDefine, cacheData, getNodeByNameDeep, DragonV2SingleIconRollerViewModel, SoundPathDefine, _dec, _class, _crd, ccclass, property, DragonV2_Roller;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconPool(extras) {
    _reporterNs.report("IconPool", "../IconPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDragonV2Icon(extras) {
    _reporterNs.report("DragonV2Icon", "./DragonV2Icon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTypeInfo(extras) {
    _reporterNs.report("GameTypeInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetColumnLockIconArr(extras) {
    _reporterNs.report("getColumnLockIconArr", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconId(extras) {
    _reporterNs.report("IconId", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDragonv2_Audio(extras) {
    _reporterNs.report("Dragonv2_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcacheData(extras) {
    _reporterNs.report("cacheData", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDragonV2SingleIconRollerViewModel(extras) {
    _reporterNs.report("DragonV2SingleIconRollerViewModel", "../viewModel/DragonV2SingleIconRollerViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      config = _unresolved_3.default;
    }, function (_unresolved_4) {
      GameType = _unresolved_4.GameType;
      getColumnLockIconArr = _unresolved_4.getColumnLockIconArr;
      IconId = _unresolved_4.IconId;
    }, function (_unresolved_5) {
      Dragonv2_Audio = _unresolved_5.Dragonv2_Audio;
      sourceManageSeletor = _unresolved_5.sourceManageSeletor;
    }, function (_unresolved_6) {
      PrefabPathDefine = _unresolved_6.PrefabPathDefine;
    }, function (_unresolved_7) {
      cacheData = _unresolved_7.cacheData;
    }, function (_unresolved_8) {
      getNodeByNameDeep = _unresolved_8.getNodeByNameDeep;
    }, function (_unresolved_9) {
      DragonV2SingleIconRollerViewModel = _unresolved_9.default;
    }, function (_unresolved_10) {
      SoundPathDefine = _unresolved_10.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "37f46FsVvRLZav6zjwHOsz8", "DragonV2_Roller", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Node', 'sp', 'tween', 'UITransform', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DragonV2_Roller", DragonV2_Roller = (_dec = ccclass('DragonV2_Roller'), _dec(_class = class DragonV2_Roller extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          /**当前最后添加的图标索引位置 */
          this.lastIndex = 0;

          /**显示图标数量 */
          this.showIconCount = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.showIconCount;

          /**停止图标索引 */
          this.stopIconIndex = -1;

          /**列的索引 */
          this.columnIndex = 0;

          /**图标池 */
          this.iconPool = void 0;

          /**图标轮播队列 */
          this.iconRollerQueue = void 0;

          /**是否正在滚动 */
          this.isRoll = false;

          /**滚轴上的图标，包含看不见的 */
          this.iconArr = [];

          /**图标间隔 */
          this.intervalHeight = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.intervalHeight;

          /**滚动结束回调方法 */
          this.rollOverCallback = void 0;

          /**是否快速边框（期待scatter中奖边框） */
          this.isSpeedBorder = void 0;

          /**列特效层 */
          this.props_column_effect_node = void 0;

          /**图标动画层节点 */
          this.iconAnimationNode = void 0;

          /**锁定图标节点 */
          this.props_lock_icon_list = void 0;

          /**快速滚动层节点 */
          this.speddBorderNode = void 0;

          /**是否合并图标了 */
          this.isMergeIcon = false;

          /**锁定图标列表 */
          this.lockIcons = [];

          /**单个图标的滚动 */
          this.singleIconRollerViewModels = [];

          /**滚动次数 */
          this.rollerCount = -1;

          /**大图标 */
          this.bigNode = void 0;
          this.propertyNode = {
            props_icon_list: new Node(),
            props_big_icon: new Node(),
            props_pyrosphere: new Node()
          };
          this.props = {
            // rollerInfo: undefined,
            // rollerStatus: RollerStatus.END,
            gameTypeInfo: {
              lastGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).NONE,
              viewGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).NONE,
              currGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).NONE,
              leftCount: 0
            }
          };
          this.events = {
            onCheckNextLeftCount: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        setColumnEffectNode(props_column_effect_node) {
          this.props_column_effect_node = props_column_effect_node;
          this.iconAnimationNode = this.props_column_effect_node.getChildByName("props_icon_animation");
          this.speddBorderNode = this.props_column_effect_node.getChildByName("props_speed_border");
          this.props_lock_icon_list = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
            error: Error()
          }), getNodeByNameDeep) : getNodeByNameDeep)("props_lock_icon_list", this.props_column_effect_node);
        }

        initSlot(columnIndex, iconPool) {
          this.iconPool = iconPool;
          this.columnIndex = columnIndex;
          this.iconRollerQueue = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).iconRollerQueue[this.columnIndex];
          this.lastIndex = Math.floor(Math.random() * this.iconRollerQueue.length);
          this.initColumn(this.showIconCount + 1);

          if (this.isSubGame2()) {
            this.addLockIcon();
            this.replaceSingleRollerIcon();
          }
        }

        initColumn(iconCount) {
          for (let i = 0; i < iconCount; i++) {
            this.joinIcon();
          }
        }

        isSubGame2() {
          return this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2;
        }

        addIconIndex(index, value) {
          let newValue = index + value;

          if (newValue >= this.iconRollerQueue.length) {
            newValue = newValue - this.iconRollerQueue.length;
          }

          return newValue;
        }
        /**是否小游戏2的特殊图标 */


        isSubGame2SpecialIcon(id) {
          return id === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).BEETLE;
        }

        joinIcon() {
          const length = this.iconArr.length;
          this.lastIndex = this.lastIndex - 1 < 0 ? this.iconRollerQueue.length - 1 : --this.lastIndex;
          const iconId = this.iconRollerQueue[this.lastIndex];
          const iconConfig = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).icon.find(v => v.id === iconId); // 在子游戏2中，初始化不显示宝盒

          if (this.isSubGame2() && this.isSubGame2SpecialIcon(iconConfig.id)) {
            this.joinIcon();
            return;
          }

          const icon = this.iconPool.getIcon(iconConfig, this.propertyNode.props_icon_list, this.lastIndex);
          const position = new Vec3(0, this.intervalHeight + icon.getHeight() / 2);

          if (length > 0) {
            const lastNode = this.iconArr[length - 1];
            position.y = lastNode.getPosition().y + lastNode.getHeight() + this.intervalHeight;
          }

          icon.getNode().setPosition(position);
          this.iconArr.push(icon);

          if (iconConfig.id === 12) {
            icon.amountNode.active = false;
            icon.changeIcon(false);
          }

          this.setBeetleAmount(icon);
        }

        hidePyrosphere(state) {
          // 1隐藏火圈 2显示火圈 3移除火圈
          if (state == 1) {
            this.propertyNode.props_pyrosphere.active = false;
          } else if (state == 2) {
            this.propertyNode.props_pyrosphere.active = true;
          } else {
            this.propertyNode.props_pyrosphere.removeAllChildren();
          }
        }

        removeDuplicatesByIndex(data) {
          const seen = new Set();
          const uniqueData = [];

          for (const array of data) {
            const indexValue = array[1];

            if (!seen.has(indexValue)) {
              seen.add(indexValue);
              uniqueData.push(array);
            }
          }

          return uniqueData;
        }

        joinringOfFireIcon(key) {
          // 加入新火圈
          this.propertyNode.props_pyrosphere.active = true;
          this.joinToStartMoving(key);
        }

        thePresenceOrAbsenceOfARingOfFire(key, callbak) {
          // 检测是否火圈是否存在
          let children = this.propertyNode.props_pyrosphere.children;

          if (children.length > 0) {
            let arr = children.filter(item => item.key === key[1]);

            if (arr.length > 0) {
              callbak(true);
            } else {
              callbak(false);
            }
          } else {
            callbak(false);
          }
        }

        joinToStartMoving(key) {
          let node = instantiate((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).PYROSPHERE).source);
          console.log(key);
          node.key = key[1];
          this.nodeMOve(node, key[1] * (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.singleRollerHeight + (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.singleRollerHeight, false);
          this.propertyNode.props_pyrosphere.addChild(node);
        }

        renderTheRingOfFire(callBack) {
          // 有老火圈先移动老火
          let children = this.propertyNode.props_pyrosphere.children;

          if (children.length > 0) {
            children.forEach(item => {
              item.key = item.key - 1;
              item.getChildByName('wlid').active = false;
              item.getChildByName('moveRingOfFire').active = true;
              console.log(item.getPosition().y - (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).normalRollOption.singleRollerHeight, '111111111');
              let ty = item.key < 0 ? -300 : item.key * (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).normalRollOption.singleRollerHeight + (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).normalRollOption.singleRollerHeight;
              this.nodeMOve(item, ty, item.key < 0);
            });
          }

          this.scheduleOnce(() => {
            callBack();
          }, 0.5);
        }
        /* 火圈移动*/


        nodeMOve(item, targetY, isDestroy = false) {
          let duration = 0.3;
          (_crd && Dragonv2_Audio === void 0 ? (_reportPossibleCrUseOfDragonv2_Audio({
            error: Error()
          }), Dragonv2_Audio) : Dragonv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).fallBall);
          tween(item).to(duration, {
            position: new Vec3(item.position.x, targetY, item.position.z)
          }).to(0.08, {
            position: new Vec3(item.position.x, targetY + 8, item.position.z)
          }, {
            easing: 'sineOut'
          }) // 初次回弹向上
          .to(0.05, {
            position: new Vec3(item.position.x, targetY, item.position.z)
          }, {
            easing: 'sineIn'
          }) // 最终回到原位
          .call(() => {
            if (isDestroy) {
              item.destroy();
            }
          }).start();
        }
        /**
         * 设置宝盒上面的数字
         */


        setBeetleAmount(icon) {
          if (icon.getId() !== (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).BEETLE) {
            return;
          }

          if (this.props.gameTypeInfo.currGameType !== (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2 && this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2) {
            return;
          }

          const diff = this.calIndexDiff(this.lastIndex, this.stopIconIndex);

          if (diff >= 3) {
            return;
          } // console.log(`setBeetleAmount--- diff:${diff},stopIconIndex:${this.stopIconIndex},lastIndex:${this.lastIndex},columnIndex:${this.columnIndex}`);


          const lockIconDatas = (_crd && getColumnLockIconArr === void 0 ? (_reportPossibleCrUseOfgetColumnLockIconArr({
            error: Error()
          }), getColumnLockIconArr) : getColumnLockIconArr)((_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).fixedChessboardIcon, this.columnIndex);

          if (lockIconDatas.length === 0) {
            return;
          }

          const index = diff === 2 ? 0 : diff === 0 ? 2 : 1;
          const lockIconData = lockIconDatas.find(v => v.index === index);

          if (lockIconData) {
            const amount = lockIconData.amount >= 10000 ? lockIconData.amount : lockIconData.amount;
            icon.setAmount(amount);
          }
        }
        /**计算两个索引的差值 */


        calIndexDiff(index1, index2) {
          let diff = index1 - index2;

          if (index1 < index2) {
            diff = index1 + this.iconRollerQueue.length - index2;
          }

          return diff;
        }

        bindEvent() {}

        useProps(key, value) {
          if (key === 'gameTypeInfo') {
            if (this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME2 && this.singleIconRollerViewModels.length === 0) {
              this.replaceSingleRollerIcon();
            }
          }
        }
        /**隐藏图标中奖效果 */


        hideIconWin() {
          this.stopWinIcon();
          this.iconAnimationNode.children.forEach(v => {
            v.name === 'bigNode' && v.destroy();
          });
          this.bigNode && this.bigNode.destroy();
          this.bigNode = null;
          this.iconAnimationNode.removeAllChildren();
          this.propertyNode.props_big_icon.removeAllChildren();
        }

        startRoll() {
          this.hideIconWin();
          this.hideScatterAnimation();
          this.rollerCount = -1;
          this.isMergeIcon = false;
          this.isSpeedBorder = false;
          this.isRoll = true;
          (_crd && Dragonv2_Audio === void 0 ? (_reportPossibleCrUseOfDragonv2_Audio({
            error: Error()
          }), Dragonv2_Audio) : Dragonv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).fast_roller);

          if (this.isSubGame2()) {
            this.singleIconRollerViewModels.forEach(v => v.comp.startRoll());
          }
        }

        stopRoll(stopIconIndex, rollOverCallback, isSpeedBorder = false) {
          this.isSpeedBorder = isSpeedBorder;
          this.stopIconIndex = stopIconIndex;
          this.rollOverCallback = rollOverCallback;
          this.rollerCount = 0;

          if (!this.isSubGame2()) {
            isSpeedBorder && this.setSpeedBorderStatus(true);
          } else {
            this.stopSingleRollerIcon();
          }
        }

        addLastJoinIconIndex(stopIndex, value) {
          if (stopIndex < 0) {
            return;
          }

          let newValue = stopIndex + value;

          if (newValue >= this.iconRollerQueue.length) {
            newValue = newValue - this.iconRollerQueue.length;
          }

          this.lastIndex = newValue;
        }

        getStopIconIndex() {
          // console.log(`getStopIconIndex--- rollerCount:${this.rollerCount},columnIndex:${this.columnIndex},lastIndex:${this.lastIndex}`);
          let totalCount = 1 * (this.columnIndex + 1);

          if (this.isSpeedBorder) {
            totalCount = 30;
          }

          if (this.rollerCount <= totalCount) {
            if (this.rollerCount === totalCount) {
              // console.log(`getStopIconIndex--- rollerCount:${this.rollerCount},columnIndex:${this.columnIndex},lastIndex:${this.lastIndex},	stopIconIndex:${this.stopIconIndex}`);
              this.addLastJoinIconIndex(this.stopIconIndex, 3);
            }

            return -1;
          }

          return this.stopIconIndex;
        }

        bindUI() {}
        /**获得滚动速度 */


        getRollSpeed() {
          if (this.isSpeedBorder) {
            return (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).normalRollOption.expectRollerSpeed;
          }

          return (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.rollerSpeed;
        }

        mergeIcon(parentNode) {
          let iconCount = this.getAlikeIconCount();
          let pos;

          if (iconCount === this.showIconCount) {
            for (let i = 0; i < this.showIconCount; i++) {
              if (!this.isWinIcon(i)) {
                return;
              }
            } // 3个图标取中间的图标的坐标


            pos = this.iconArr[1].getNode().worldPosition;
          } else if (iconCount === this.showIconCount - 1) {
            // 找出两个相邻的图标
            for (let i = 0; i < this.showIconCount - 1; i++) {
              if (this.iconArr[i].getId() === this.iconArr[i + 1].getId() && this.isWinIcon(i) && this.isWinIcon(i + 1)) {
                pos = this.iconArr[i].getNode().worldPosition.clone().add(new Vec3(0, this.iconArr[i].getHeight() / 2 + this.intervalHeight));
              }
            }
          } // if (pos) {
          // 	this.buildSkeleton(parentNode, pos, iconCount);
          // 	this.isMergeIcon = true;
          // }

        }
        /**是否中奖图标 */


        isWinIcon(index) {
          const wp = (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).rollerLaunchResult.dl.si[0].wp;

          for (const key in wp) {
            const values = wp[key];
            const iconIndexs = values.find(v => v[0] === this.columnIndex);

            if (iconIndexs && iconIndexs[1] === index) {
              return true;
            }
          }

          return false;
        }

        setSpeedBorderStatus(show) {
          this.speddBorderNode.active = show;

          if (show) {
            this.speddBorderNode.setWorldPosition(new Vec3(this.node.worldPosition.x, this.node.worldPosition.y));
            (_crd && Dragonv2_Audio === void 0 ? (_reportPossibleCrUseOfDragonv2_Audio({
              error: Error()
            }), Dragonv2_Audio) : Dragonv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).fast_roller);
            let scaleX = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).normalRollOption.expectBorderScaleX;
            let scaleY = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).normalRollOption.expectBorderScaleY;

            if (this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME1) {
              scaleX = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).subGameRollOption.expectBorderScaleX;
              scaleY = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).subGameRollOption.expectBorderScaleY;
            }

            this.speddBorderNode.setScale(new Vec3(scaleX, scaleY, 1));
          }
        }

        buildSkeleton(parentNode, pos, iconCount) {// const fileName = iconCount === 2 ? PrefabPathDefine.TWO_ICON : PrefabPathDefine.THREE_ICON;
          // this.bigNode = instantiate(sourceManageSeletor().getFile(fileName).source);
          // this.bigNode.name = "bigNode";
          // parentNode.addChild(this.bigNode);
          // this.bigNode.setWorldPosition(pos);
        }
        /**获得相同图标个数 */


        getAlikeIconCount() {
          let count = 1;

          for (let i = 0; i < this.showIconCount - 1; i++) {
            if (this.iconArr[i].getId() === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
              error: Error()
            }), IconId) : IconId).WILD && this.iconArr[i].getId() === this.iconArr[i + 1].getId()) {
              count++;
            }
          }

          return count;
        }
        /**停止赢的图标闪烁 */


        stopWinIcon() {
          this.iconArr.filter(v => v.getId() !== (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).SCATTER).forEach(v => v.hideWin());
        }
        /**暂停赢的图标 */


        pauseWinIcon() {
          this.iconArr.filter(v => v.getId() !== (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).SCATTER).forEach(v => v.pauseWin());
        }

        hideScatterAnimation() {
          this.iconArr.filter(v => v.getId() === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).SCATTER).forEach(v => v.hideWin());
        }
        /**播放中奖图标动画 */


        playWinIcon(index) {
          if (this.isRoll) {
            return;
          }

          const icon = this.iconArr[index]; // 如果是WILD图标，并且合并了图标，就不在显示边框了

          if (icon.getId() !== (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).WILD) {
            if (this.propertyNode.props_pyrosphere.children.length > 0) {
              this.propertyNode.props_pyrosphere.children.forEach(item => {
                if (item.key == index) {
                  item.getChildByName('moveRingOfFire').active = false;
                  item.getChildByName('wlid').active = true;
                } else {
                  item.getChildByName('moveRingOfFire').active = true;
                  item.getChildByName('wlid').active = false;
                }
              });
            }

            icon.playWin(this.propertyNode.props_big_icon);
          }
        }
        /**播放宝盒动画 */


        playBaoHeAnimation(done) {
          let count = 0;
          const beetleArr = this.iconArr.filter((v, index) => v.getId() === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).BEETLE && index < this.showIconCount);

          if (beetleArr.length === 0) {
            done && done();
            return;
          }

          beetleArr.forEach(v => {
            if (this.isSubGame2()) {
              v.playGame2BaoHeAnimation(() => {
                count++;

                if (count >= beetleArr.length) {
                  done && done();
                }
              });
            } else {
              v.playBaoHeAnimation(() => {
                count++;

                if (count >= beetleArr.length) {
                  done && done();
                }
              });
            }
          });
        }
        /**播放一次scatter动画 */


        playOneScatterAnimation() {
          // 小游戏2不播放
          if (this.isSubGame2()) {
            return;
          }

          for (let i = 0; i < this.showIconCount; i++) {
            const element = this.iconArr[i];
            const freeGame = (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
              error: Error()
            }), cacheData) : cacheData).rollerLaunchResult.dl.si[0].freegame;
            const isLoop = Object.keys(freeGame).length > 0 ? true : false;

            if (element.getId() === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
              error: Error()
            }), IconId) : IconId).SCATTER) {
              element.faceAnimationNode.scale = new Vec3(0.9, 0.9);
              element.playWin(this.propertyNode.props_big_icon, false, isLoop);
            }
          }
        }

        rollOverHandle() {
          this.isRoll = false;
          this.stopIconIndex = -1;
          this.isSpeedBorder && this.setSpeedBorderStatus(false); // this.mergeIcon(this.propertyNode.props_big_icon, rollerLaunchResult);

          this.playOneScatterAnimation(); // 滚动结束时，只有在小游戏2才立马添加锁定图标

          this.isSubGame2() && this.addLockIcon();
          (_crd && Dragonv2_Audio === void 0 ? (_reportPossibleCrUseOfDragonv2_Audio({
            error: Error()
          }), Dragonv2_Audio) : Dragonv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).shell_end); // 滚动停止之后需要延迟的时间

          const time = this.isSubGame2() ? 1.5 : 0.05; // const time = 0.05;

          this.events.onCheckNextLeftCount();
          this.scheduleOnce(() => {
            this.node.isValid && this.rollOverCallback();
          }, time);
        }
        /**添加锁定图标 */


        addLockIcon() {
          const lockValues = (_crd && getColumnLockIconArr === void 0 ? (_reportPossibleCrUseOfgetColumnLockIconArr({
            error: Error()
          }), getColumnLockIconArr) : getColumnLockIconArr)((_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).fixedChessboardIcon, this.columnIndex);
          lockValues.forEach(v => {
            let DragonV2Icon = this.lockIcons.find(iconv => iconv.getIconIndex() === v.index);

            if (!DragonV2Icon) {
              const iconConfig = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).icon.find(icon => icon.id === v.iconId);
              DragonV2Icon = this.iconPool.getIcon(iconConfig, this.propertyNode.props_icon_list, v.index);
              DragonV2Icon.setAmount(v.amount);
              const replaceIcon = this.iconArr[v.index];
              DragonV2Icon.setPosition(replaceIcon.getPosition());

              if (iconConfig.id === 12) {
                DragonV2Icon.amountNode.active = true;
              }

              replaceIcon.restore();
              this.iconArr[v.index] = DragonV2Icon;
              let pot = DragonV2Icon.getPosition();
              DragonV2Icon.setPosition(new Vec3(pot.x + 15, pot.y));
              this.lockIcons.push(DragonV2Icon);
              this.removeSingleRollerIcon(v.index);
              DragonV2Icon.changeIcon(true);
              DragonV2Icon.playBaoHeAnimation(() => {// const endPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(mainViewModel.getStartBtnPos());
                // let ParticleNode = instantiate(sourceManageSeletor().getFile(PrefabPathDefine.Particle2D).source);
                // const startPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(ParticleNode.getWorldPosition());
                // ParticleNode.active = true;
                // console.log("ParticleNode",ParticleNode);
                // mainViewModel.rollerPanelViewModel.viewNode.addChild(ParticleNode);
                // ParticleNode.setPosition(startPos)
                // tween(ParticleNode).to(config.subGameRollOption.beetleFlyTime, { position: endPos }).call(() => {
                // 	ParticleNode.destroy();
                // }).start()
              });
            }
          });
        }

        removeSingleRollerIcon(index) {
          for (let i = 0; i < this.singleIconRollerViewModels.length; i++) {
            const element = this.singleIconRollerViewModels[i];

            if (element.comp.getSlotIndex() === index) {
              element.unMount();
              this.singleIconRollerViewModels.splice(i, 1);
              break;
            }
          }
        }
        /**删除锁定图标 */


        removeLockIcon() {
          // this.lockIcons.forEach(v => v.borderNode2.active = false)
          this.lockIcons.forEach(v => v.destory());
          this.lockIcons = [];
        }
        /**
         * 根据索引获得图标的位置
         * @param index 
         * @returns 
         */


        getIconPosByIndex(index) {
          const height = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.singleRollerHeight;
          const interval = this.intervalHeight * (index + 1);
          const y = interval + height / 2 + height * index;
          return new Vec3(0, y);
        }
        /**替换单个滚动图标 */


        replaceSingleRollerIcon() {
          console.log('替换滚动图标');
          const lockValues = (_crd && getColumnLockIconArr === void 0 ? (_reportPossibleCrUseOfgetColumnLockIconArr({
            error: Error()
          }), getColumnLockIconArr) : getColumnLockIconArr)((_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).fixedChessboardIcon, this.columnIndex);

          for (let i = 0; i < this.iconArr.length; i++) {
            const v = this.iconArr[i]; // 替换不是甲壳虫和太阳神图标
            // if (!this.isSubGame2SpecialIcon(v.getId())) {

            if (!lockValues.find(lock => lock.index === i)) {
              this.buildSingleRollerIcon(i, v.getPosition(), v);
              v.getNode().active = false;
            }
          }
        }
        /**替换多个滚动图标 */


        replaceMultiRollerIcon() {
          this.singleIconRollerViewModels.forEach(v => {
            const firstIcon = v.comp.getFirstIcon();
            firstIcon.getNode().removeFromParent();
            const index = v.comp.getSlotIndex();
            this.propertyNode.props_icon_list.addChild(firstIcon.getNode());
            firstIcon.setPosition(this.getIconPosByIndex(index));
            this.iconArr[index] = firstIcon;
            v.unMount();
          });
          this.lockIcons = [];
          this.singleIconRollerViewModels = [];
        }
        /**构建单个图标滚动 */


        buildSingleRollerIcon(index, pos, icon) {
          const viewModel = new (_crd && DragonV2SingleIconRollerViewModel === void 0 ? (_reportPossibleCrUseOfDragonV2SingleIconRollerViewModel({
            error: Error()
          }), DragonV2SingleIconRollerViewModel) : DragonV2SingleIconRollerViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).SINGLE_ICON_ROLLER).source).appendTo(this.propertyNode.props_icon_list);
          this.singleIconRollerViewModels.push(viewModel);
          viewModel.viewNode.setPosition(pos);
          viewModel.comp.initSlot(this.columnIndex, index, icon.getIconIndex(), this.iconPool);
        }
        /**多图标滚动 */


        multiIconRoller() {
          this.iconArr.forEach(v => {
            v.setPosition(new Vec3(v.getPosition().x, v.getPosition().y - this.getRollSpeed()));
          });
          const frist = this.iconArr[0];

          if (frist.getPosition().y <= -(frist.getHeight() / 2 + this.intervalHeight)) {
            if (this.rollerCount >= 0) {
              this.rollerCount++;
            }

            this.iconArr.shift();
            frist.restore();
            this.joinIcon();
            const endIcon = this.iconArr[2];

            if (endIcon.getIconIndex() === this.getStopIconIndex()) {
              // console.log(`xxxxxxxxxxx-----columnIndex:${this.columnIndex},stopIconIndex:${this.stopIconIndex},endIcon.getIconIndex():${endIcon.getIconIndex()},this.getStopIconIndex():${this.getStopIconIndex()}`);
              this.isRoll = false;
              this.stopIconIndex = -1; // 结束之后计算每个图标的最终位置，

              let count = 0;

              for (let i = 0; i < this.iconArr.length; i++) {
                const icon = this.iconArr[i];
                tween(icon.getNode()).to(0.1, {
                  position: this.getIconPosByIndex(i)
                }).call(() => {
                  count++;

                  if (count >= this.iconArr.length) {
                    this.node && this.node.isValid && this.rollOverHandle();
                  }
                }).start();
              }
            }
          }
        }

        isMultiRoll() {
          return this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN || this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1;
        }
        /**停止单个图标的滚动 */


        stopSingleRollerIcon() {
          let count = 0;

          if (this.singleIconRollerViewModels.length === 0) {
            this.isRoll = false;
            this.node && this.node.isValid && this.rollOverHandle();
          } else {
            this.singleIconRollerViewModels.forEach(v => v.comp.stopRoll(this.stopIconIndex, () => {
              count++;

              if (count >= this.singleIconRollerViewModels.length) {
                this.isRoll = false;
                this.node && this.node.isValid && this.rollOverHandle();
              }
            }));
          }
        }
        /**获得宝盒上面的数字节点 */


        getBeetleAmountNode() {
          const nodes = [];

          for (let i = 0; i < this.showIconCount; i++) {
            const element = this.iconArr[i];

            if (this.isSubGame2SpecialIcon(element.getId())) {
              const amountNode = element.getAmountNode();
              amountNode && nodes.push(amountNode);
            }
          }

          return nodes;
        }
        /**获得宝盒上面的数字节点 */


        getBaoHeParticleNode() {
          console.log(this.iconArr, this.columnIndex);
          const ParticleNodes = [];

          for (let i = 0; i < this.showIconCount; i++) {
            const element = this.iconArr[i];

            if (this.isSubGame2SpecialIcon(element.getId())) {
              const amountNode = element.getAmountNode();
              amountNode && ParticleNodes.push(amountNode); //  const ParticleNode = element.getParticleNode();
              // console.log(ParticleNode,'sssssss');
              // ParticleNode && ParticleNodes.push(ParticleNode);
            }
          }

          console.log("ParticleNodes", ParticleNodes);
          return ParticleNodes;
        }

        update(deltaTime) {
          if (this.isRoll && this.iconArr.length > 0) {
            if (this.isMultiRoll()) {
              this.multiIconRoller();
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=db908a6be9f24d0301c3d3800fc6a3c535595a15.js.map