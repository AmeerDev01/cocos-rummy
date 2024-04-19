System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, tween, UITransform, Vec3, BaseComponent, config, calBetAmount, GameType, getColumnLockIconArr, IconId, egyptv2_Audio, sourceManageSeletor, PrefabPathDefine, getNodeByNameDeep, EgyptV2SingleIconRollerViewModel, SoundPathDefine, cacheData, _dec, _class, _crd, ccclass, property, EgyptV2_Roller;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconPool(extras) {
    _reporterNs.report("IconPool", "../IconPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEgyptV2Icon(extras) {
    _reporterNs.report("EgyptV2Icon", "./EgyptV2_Icon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcalBetAmount(extras) {
    _reporterNs.report("calBetAmount", "../type", _context.meta, extras);
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

  function _reportPossibleCrUseOfRollerLaunchResult(extras) {
    _reporterNs.report("RollerLaunchResult", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfegyptv2_Audio(extras) {
    _reporterNs.report("egyptv2_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../sourceDefine/prefabDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEgyptV2SingleIconRollerViewModel(extras) {
    _reporterNs.report("EgyptV2SingleIconRollerViewModel", "../viewModel/EgyptV2SingleIconRollerViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundPathDefine(extras) {
    _reporterNs.report("SoundPathDefine", "../sourceDefine/soundDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcacheData(extras) {
    _reporterNs.report("cacheData", "../dataTransfer", _context.meta, extras);
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
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      config = _unresolved_3.default;
    }, function (_unresolved_4) {
      calBetAmount = _unresolved_4.calBetAmount;
      GameType = _unresolved_4.GameType;
      getColumnLockIconArr = _unresolved_4.getColumnLockIconArr;
      IconId = _unresolved_4.IconId;
    }, function (_unresolved_5) {
      egyptv2_Audio = _unresolved_5.egyptv2_Audio;
      sourceManageSeletor = _unresolved_5.sourceManageSeletor;
    }, function (_unresolved_6) {
      PrefabPathDefine = _unresolved_6.PrefabPathDefine;
    }, function (_unresolved_7) {
      getNodeByNameDeep = _unresolved_7.getNodeByNameDeep;
    }, function (_unresolved_8) {
      EgyptV2SingleIconRollerViewModel = _unresolved_8.default;
    }, function (_unresolved_9) {
      SoundPathDefine = _unresolved_9.SoundPathDefine;
    }, function (_unresolved_10) {
      cacheData = _unresolved_10.cacheData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "79319AKPpNNNqz4lXH/XD0v", "EgyptV2_Roller", undefined);

      __checkObsolete__(['_decorator', 'Game', 'instantiate', 'Node', 'sp', 'tween', 'UITransform', 'Vec2', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EgyptV2_Roller", EgyptV2_Roller = (_dec = ccclass('EgyptV2_Roller'), _dec(_class = class EgyptV2_Roller extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
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
          this.rollerLaunchResult = void 0;
          this.sendBetTime = 0;
          this.propertyNode = {
            props_icon_list: new Node(),
            props_big_icon: new Node()
          };
          this.props = {
            gameTypeInfo: {
              lastGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).MAIN,
              currGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).MAIN,
              viewGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).MAIN,
              leftCount: 0
            },
            positionId: 0
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

        isSubGame1() {
          return this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1;
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
          }), IconId) : IconId).BEETLE || id === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).SUN_GOD;
        }

        getIntervalHeight(gameType = undefined) {
          if (gameType === undefined) {
            gameType = this.props.gameTypeInfo.viewGameType;
          }

          if (gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1) {
            return (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).subGameRollOption.intervalHeight1;
          } else if (gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2) {
            return (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).subGameRollOption.intervalHeight2;
          }

          return (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.intervalHeight;
        }

        joinIcon() {
          const length = this.iconArr.length;
          this.lastIndex = this.lastIndex - 1 < 0 ? this.iconRollerQueue.length - 1 : --this.lastIndex;
          const iconId = this.iconRollerQueue[this.lastIndex];
          const iconConfig = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).icon.find(v => v.id === iconId); // 在子游戏2中，初始化不显示甲壳虫和太阳神

          if (this.isSubGame2() && this.isSubGame2SpecialIcon(iconConfig.id)) {
            this.joinIcon();
            return;
          }

          const icon = this.iconPool.getIcon(iconConfig, this.propertyNode.props_icon_list, this.lastIndex);
          icon.showAmount();
          const position = new Vec3(0, this.getRollerPaddingBottom() + icon.getHeight() / 2);
          position.y -= this.getIconContainerAnchorPos();

          if (length > 0) {
            const lastNode = this.iconArr[length - 1];
            position.y = lastNode.getPosition().y + lastNode.getHeight() + this.getIntervalHeight();
          }

          icon.getNode().setPosition(position);
          this.iconArr.push(icon);
          this.setBeetleAmount(icon);
        }
        /**
         * 设置甲壳虫上面的数字
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
            this.randomBeetleAmount(icon);
            return;
          }

          const diff = this.calIndexDiff(this.lastIndex, this.stopIconIndex);

          if (diff >= 3) {
            this.randomBeetleAmount(icon);
            return;
          } // console.log(`setBeetleAmount--- diff:${diff},stopIconIndex:${this.stopIconIndex},lastIndex:${this.lastIndex},columnIndex:${this.columnIndex}`);


          const lockIconDatas = (_crd && getColumnLockIconArr === void 0 ? (_reportPossibleCrUseOfgetColumnLockIconArr({
            error: Error()
          }), getColumnLockIconArr) : getColumnLockIconArr)(this.getFixedChessboardIcon(), this.columnIndex);

          if (lockIconDatas.length === 0) {
            // 没有锁定图标就随机一个金额
            this.randomBeetleAmount(icon);
            return;
          }

          const index = diff === 2 ? 0 : diff === 0 ? 2 : 1;
          const lockIconData = lockIconDatas.find(v => v.index === index);

          if (lockIconData) {
            icon.setAmount(lockIconData.amount);
          }
        }

        randomBeetleAmount(icon) {
          // 没有锁定图标就随机一个金额
          const betAmount = (_crd && calBetAmount === void 0 ? (_reportPossibleCrUseOfcalBetAmount({
            error: Error()
          }), calBetAmount) : calBetAmount)(this.props.positionId);
          let amount = Math.floor(Math.random() * betAmount);
          amount = amount <= 0 ? amount + 1 : amount;
          icon.setAmount(amount);
        }

        getFixedChessboardIcon() {
          if (this.rollerLaunchResult) {
            const si = this.rollerLaunchResult.dl.si[0];

            if (si.gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME2 || this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME2) {
              return si.fixedChessboardIcon;
            }

            return undefined;
          } else {
            return (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
              error: Error()
            }), cacheData) : cacheData).fixedChessboardIcon;
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
          if (this.node && this.node.isValid) {
            if (key === 'gameTypeInfo') {
              if (this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).SUBGAME2 && this.singleIconRollerViewModels.length === 0) {
                this.replaceSingleRollerIcon();
              }

              this.changeRollerHeight(this.props.gameTypeInfo.viewGameType);
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
          this.unscheduleAllCallbacks();
          this.hideIconWin();
          this.hideScatterAnimation();
          this.rollerCount = -1;
          this.isMergeIcon = false;
          this.isSpeedBorder = false;
          this.isRoll = true;

          if (this.isSubGame2()) {
            this.singleIconRollerViewModels.forEach(v => v.comp.startRoll());
          }
        }

        stopRoll(stopIconIndex, rollOverCallback, isSpeedBorder, rollerLaunchResult) {
          this.isSpeedBorder = isSpeedBorder;
          this.stopIconIndex = stopIconIndex;
          this.rollOverCallback = rollOverCallback;
          this.rollerLaunchResult = rollerLaunchResult;
          this.sendBetTime = (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).sendBetTime;
          console.log("roller stop time " + this.sendBetTime); // let value = isSpeedBorder ? 15 : this.columnIndex + 1

          this.rollerCount = 0;

          if (!this.isSubGame2()) {
            isSpeedBorder && this.setSpeedBorderStatus(true); // let value = isSpeedBorder ? 30 : 3;
            // this.addLastJoinIconIndex(this.stopIconIndex, 30);
          } else {
            this.stopSingleRollerIcon(rollerLaunchResult);
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
            totalCount = 20;
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

        mergeIcon(parentNode, rollerLaunchResult) {
          let iconCount = this.getAlikeIconCount(rollerLaunchResult);
          let pos = this.getMergeIconPos(rollerLaunchResult);

          if (pos) {
            this.buildSkeleton(parentNode, pos, iconCount);
            this.isMergeIcon = true;
          }
        }
        /**获得合并图标的位置 */


        getMergeIconPos(rollerLaunchResult, gameType = undefined) {
          if (gameType === undefined) {
            gameType = this.props.gameTypeInfo.viewGameType;
          }

          let iconCount = this.getAlikeIconCount(rollerLaunchResult);
          let pos;

          if (iconCount === this.showIconCount) {
            let bool = true;

            for (let i = 0; i < this.showIconCount; i++) {
              if (!this.isWinIcon(i, rollerLaunchResult)) {
                bool = false;
                break;
              }
            }

            if (bool) {
              // 3个图标取中间的图标的坐标
              pos = this.iconArr[1].getNode().worldPosition;
            }
          } else if (iconCount == this.showIconCount - 1) {
            // 找出两个相邻的图标
            for (let i = 0; i < this.showIconCount - 1; i++) {
              if (this.iconArr[i].getId() === this.iconArr[i + 1].getId() && this.isWinIcon(i, rollerLaunchResult) && this.isWinIcon(i + 1, rollerLaunchResult)) {
                // 用开始的图标的坐标 + 图标的一半 + 间隔的一半
                pos = this.iconArr[i].getNode().worldPosition.clone().add(new Vec3(0, this.iconArr[i].getHeight() / 2 + this.getIntervalHeight(gameType) / 2)); // console.log(`getMergeIconPos begin`, pos.x, pos.y);
              }
            }
          }

          return pos;
        }
        /**是否中奖图标 */


        isWinIcon(index, rollerLaunchResult, iconId = undefined) {
          const wp = rollerLaunchResult.dl.si[0].wp;

          for (const key in wp) {
            const values = wp[key];
            const iconIndexs = values.find(v => v[0] === this.columnIndex);

            if (iconIndexs && iconIndexs[1] === index) {
              if (iconId) {
                return this.iconArr[index].getId() === iconId;
              }

              return true;
            }
          }

          return false;
        }
        /**是否有中奖图标wild */


        isWinWild() {
          if (this.rollerLaunchResult) {
            for (let i = 0; i < this.showIconCount; i++) {
              if (this.isWinIcon(i, this.rollerLaunchResult, (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
                error: Error()
              }), IconId) : IconId).WILD)) {
                return true;
              }
            }
          }

          return false;
        }

        setSpeedBorderStatus(show) {
          this.speddBorderNode.active = show;

          if (show) {
            this.speddBorderNode.setWorldPosition(new Vec3(this.node.worldPosition.x + 11, this.node.worldPosition.y + 13));
            (_crd && egyptv2_Audio === void 0 ? (_reportPossibleCrUseOfegyptv2_Audio({
              error: Error()
            }), egyptv2_Audio) : egyptv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
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

        buildSkeleton(parentNode, pos, iconCount) {
          const fileName = iconCount === 2 ? (_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).TWO_ICON : (_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).THREE_ICON;
          this.bigNode = instantiate((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile(fileName).source);
          this.bigNode.name = "bigNode-" + iconCount;
          parentNode.addChild(this.bigNode);
          this.bigNode.setWorldPosition(pos);
          this.bigNode.setScale(new Vec3(1, this.getBigNodeScaleY(iconCount)));
        }

        getBigNodeScaleY(iconCount, gameType = undefined) {
          if (gameType === undefined) {
            gameType = this.props.gameTypeInfo.viewGameType;
          }

          if (gameType !== (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1) {
            return iconCount ? (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).normalRollOption.twoIconScaleY : (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).normalRollOption.threeIconScaleY;
          } else {
            return iconCount ? (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).subGameRollOption.twoIconScaleY : (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).subGameRollOption.threeIconScaleY;
          }
        }
        /**获得相同图标个数 */


        getAlikeIconCount(rollerLaunchResult) {
          let count = 1;

          for (let i = 0; i < this.showIconCount - 1; i++) {
            if (this.iconArr[i].getId() === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
              error: Error()
            }), IconId) : IconId).WILD && this.iconArr[i].getId() === this.iconArr[i + 1].getId() && this.isWinIcon(i, rollerLaunchResult) && this.isWinIcon(i + 1, rollerLaunchResult)) {
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

          if (!this.isMergeIcon) {
            this.mergeIcon(this.propertyNode.props_big_icon, this.rollerLaunchResult);
          }

          this.scheduleOnce(() => {
            if (this.node.isValid) {
              const icon = this.iconArr[index]; // 如果是WILD图标，并且合并了图标，就不在显示边框了

              if (icon.getId() !== (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
                error: Error()
              }), IconId) : IconId).WILD || !this.isMergeIcon) {
                icon.playWin(this.propertyNode.props_big_icon);
              }
            }
          }, 0.2);
        }
        /**播放甲壳虫动画 */


        playBeetleAnimation(done) {
          let count = 0;
          const beetleArr = this.iconArr.filter((v, index) => v.getId() === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).BEETLE && index < this.showIconCount);

          if (beetleArr.length === 0) {
            done && done();
            return;
          }

          beetleArr.forEach(v => {
            v.playBeetleAnimation(() => {
              count++;

              if (count >= beetleArr.length) {
                done && done();
              }
            });
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

            if (element.getId() === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
              error: Error()
            }), IconId) : IconId).SCATTER) {
              element.playWin(this.propertyNode.props_big_icon, false, false);
            }
          }
        }

        rollOverHandle(rollerLaunchResult) {
          console.log("roller over handle stop time " + this.sendBetTime);
          this.isRoll = false;
          this.stopIconIndex = -1;
          this.isSpeedBorder && this.setSpeedBorderStatus(false); // this.mergeIcon(this.propertyNode.props_big_icon, rollerLaunchResult);

          this.playOneScatterAnimation(); // 滚动结束时，只有在小游戏2才立马添加锁定图标

          this.isSubGame2() && this.addLockIcon();
          (_crd && egyptv2_Audio === void 0 ? (_reportPossibleCrUseOfegyptv2_Audio({
            error: Error()
          }), egyptv2_Audio) : egyptv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).shell_end); // 滚动停止之后需要延迟的时间

          const time = this.isSubGame2() ? 1.5 : 0.05;
          this.events.onCheckNextLeftCount(); // const time = 0.05;

          this.scheduleOnce(() => {
            this.node.isValid && this.rollOverCallback();
          }, time);
        }
        /**添加锁定图标 */


        addLockIcon(isPlayAnimation = true) {
          if (!this.iconPool) {
            return;
          }

          let playCount = 0;
          const lockValues = (_crd && getColumnLockIconArr === void 0 ? (_reportPossibleCrUseOfgetColumnLockIconArr({
            error: Error()
          }), getColumnLockIconArr) : getColumnLockIconArr)(this.getFixedChessboardIcon(), this.columnIndex);
          lockValues.forEach(v => {
            let egyptV2Icon = this.lockIcons.find(iconv => iconv.getIconIndex() === v.index);

            if (!egyptV2Icon) {
              const iconConfig = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).icon.find(icon => icon.id === v.iconId);
              egyptV2Icon = this.iconPool.getIcon(iconConfig, this.propertyNode.props_icon_list, v.index);

              if (!isPlayAnimation || egyptV2Icon.isBeetleIcon()) {
                egyptV2Icon.setAmount(v.amount);
              } else if (egyptV2Icon.isSunGod()) {
                // 播放太阳神出现的音效
                (_crd && egyptv2_Audio === void 0 ? (_reportPossibleCrUseOfegyptv2_Audio({
                  error: Error()
                }), egyptv2_Audio) : egyptv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                  error: Error()
                }), SoundPathDefine) : SoundPathDefine).sunGod);
              }

              const replaceIcon = this.iconArr[v.index];
              egyptV2Icon.setPosition(replaceIcon.getPosition());
              replaceIcon.restore();
              this.iconArr[v.index] = egyptV2Icon;
              this.lockIcons.push(egyptV2Icon);
              this.removeSingleRollerIcon(v.index);
              isPlayAnimation && egyptV2Icon.playBeetleAnimation(() => {
                egyptV2Icon.hideWin();
              });
              playCount++; // console.log(`addlockicon columnIndex ${this.columnIndex} index ${v.index} amount ${v.amount}, this.lockIcons.length ${this.lockIcons.length}`);
            }
          });
          return playCount;
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
          this.lockIcons.forEach(v => v.destory());
          this.lockIcons = [];
        }
        /**
         * 根据索引获得图标的位置
         * @param index 
         * @returns 
         */


        getIconPosByIndex(index, gameType = undefined) {
          if (gameType === undefined) {
            gameType = this.props.gameTypeInfo.viewGameType;
          }

          const height = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.singleRollerHeight;
          const halfHeight = height / 2;
          const paddingBottom = this.getRollerPaddingBottom(gameType);
          let y = 0;

          if (index === 0) {
            // 第一个图标的坐标位置 = 下边距 + icon高度的一半
            y = paddingBottom + halfHeight;
          } else {
            // 从第二开始的坐标 = 下边距 + icon高度的一半 + 图标间隔个数 + icon高度个数
            const interval = this.getIntervalHeight(gameType) * index;
            y = paddingBottom + halfHeight + interval + height * index;
          }

          y -= this.getIconContainerAnchorPos();
          return new Vec3(0, y);
        }
        /**获得图标容器锚点的起始位置 */


        getIconContainerAnchorPos() {
          const iconListUI = this.propertyNode.props_icon_list.getComponent(UITransform);
          return iconListUI.height * iconListUI.anchorY;
        }

        changeRollerHeight(gameType) {
          let rollerHeight = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.rollerHeight;

          if (gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2) {
            rollerHeight = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).subGameRollOption.rollerHeight2;
          } else if (gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1) {
            rollerHeight = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).subGameRollOption.rollerHeight1;
          }

          this.propertyNode.props_icon_list.getComponent(UITransform).height = rollerHeight;

          if (this.isMergeIcon) {
            console.log(`bigNode11 setWorldPosition begin`, this.bigNode.getWorldPosition().x, this.bigNode.getWorldPosition().y);
            const pos = this.getMergeIconPos(this.rollerLaunchResult, gameType); // 重新设置合并图标位置
            // this.bigNode.setWorldPosition(pos);

            console.log(`bigNode11 setWorldPosition end`, pos.x, pos.y);
          }
        }
        /**重置图标位置 */


        resetIconPos(gameType) {
          this.changeRollerHeight(gameType);

          if (gameType !== (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2) {
            for (let i = 0; i < this.iconArr.length; i++) {
              const icon = this.iconArr[i];
              const pos = this.getIconPosByIndex(i, gameType);
              icon.setPosition(pos);
            }
          }

          if (this.isMergeIcon) {
            // console.log(`bigNode setWorldPosition begin`, this.bigNode.getWorldPosition().x, this.bigNode.getWorldPosition().y);
            const pos = this.getMergeIconPos(this.rollerLaunchResult, gameType); // 重新设置合并图标位置

            this.bigNode.setWorldPosition(pos); // console.log(`bigNode setWorldPosition end`, pos.x, pos.y);

            let iconCount = this.getAlikeIconCount(this.rollerLaunchResult);
            this.bigNode.setScale(new Vec3(1, this.getBigNodeScaleY(iconCount, gameType)));
          }
        }
        /**替换单个滚动图标 */


        replaceSingleRollerIcon() {
          this.addLockIcon(false);
          const lockValues = (_crd && getColumnLockIconArr === void 0 ? (_reportPossibleCrUseOfgetColumnLockIconArr({
            error: Error()
          }), getColumnLockIconArr) : getColumnLockIconArr)(this.getFixedChessboardIcon(), this.columnIndex);

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
          }); // 只有从小游戏2退出去的才隐藏甲壳虫上面的数字

          if (this.props.gameTypeInfo.lastGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2 || this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2) {
            // 在切到游戏之后，把甲壳虫上面的数字隐藏了
            for (let i = 0; i < this.showIconCount; i++) {
              if (i >= this.iconArr.length) {
                break;
              }

              const v = this.iconArr[i];

              if (v.isBeetleIcon() || v.getId() === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
                error: Error()
              }), IconId) : IconId).SUN_GOD) {
                v.hideAmount();
              }
            }
          }

          this.lockIcons = [];
          this.singleIconRollerViewModels = [];
        }
        /**构建单个图标滚动 */


        buildSingleRollerIcon(index, pos, icon) {
          const viewModel = new (_crd && EgyptV2SingleIconRollerViewModel === void 0 ? (_reportPossibleCrUseOfEgyptV2SingleIconRollerViewModel({
            error: Error()
          }), EgyptV2SingleIconRollerViewModel) : EgyptV2SingleIconRollerViewModel)().mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
            error: Error()
          }), PrefabPathDefine) : PrefabPathDefine).SINGLE_ICON_ROLLER).source).appendTo(this.propertyNode.props_icon_list);
          viewModel.viewNode.getComponent(UITransform).width = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).subGameRollOption.singleIconMaskWidth;
          viewModel.viewNode.getComponent(UITransform).height = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).subGameRollOption.singleIconMaskHeight;
          this.singleIconRollerViewModels.push(viewModel);
          viewModel.viewNode.setPosition(pos);
          viewModel.comp.initSlot(this.columnIndex, index, icon.getIconIndex(), this.iconPool);
        }

        getRollerPaddingBottom(gameType = undefined) {
          if (gameType === undefined) {
            gameType = this.props.gameTypeInfo.viewGameType;
          }

          if (gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1) {
            return (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).subGameRollOption.rollerPaddingBottom;
          }

          return (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.rollerPaddingBottom;
        }
        /**多图标滚动 */


        multiIconRoller() {
          this.iconArr.forEach(v => {
            v.setPosition(new Vec3(v.getPosition().x, v.getPosition().y - this.getRollSpeed()));
          });
          const frist = this.iconArr[0]; // 图标隐藏的Y坐标 = 图标一半高度 + 滚轴下内边距 + 容器锚点的高度

          let iconHideY = -(frist.getHeight() / 2 + this.getRollerPaddingBottom());
          iconHideY -= this.getIconContainerAnchorPos();

          if (frist.getPosition().y <= iconHideY) {
            // console.log(`columnIndex:${this.columnIndex},stopIconIndex:${this.stopIconIndex}, rollerCount:${this.rollerCount}`);
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
              this.stopIconIndex = -1;
              const duration = 0.1; // 结束之后计算每个图标的最终位置，

              for (let i = 0; i < this.iconArr.length; i++) {
                const icon = this.iconArr[i];
                tween(icon.getNode()).to(duration, {
                  position: this.getIconPosByIndex(i)
                }).start();
              }

              this.scheduleOnce(() => {
                this.rollOverHandle(this.rollerLaunchResult);
              }, duration);
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


        stopSingleRollerIcon(rollerLaunchResult) {
          let count = 0;

          if (this.singleIconRollerViewModels.length === 0) {
            this.isRoll = false;
            this.node.isValid && this.rollOverHandle(this.rollerLaunchResult);
          } else {
            this.singleIconRollerViewModels.forEach(v => v.comp.stopRoll(this.stopIconIndex, () => {
              count++;

              if (count >= this.singleIconRollerViewModels.length) {
                this.isRoll = false;
                this.node.isValid && this.rollOverHandle(this.rollerLaunchResult);
              }
            }, rollerLaunchResult));
          }
        }
        /**获得甲壳虫上面的数字节点 */


        getBeetleNode(isIncludeSunGod = false) {
          const nodes = [];

          for (let i = 0; i < this.showIconCount; i++) {
            const element = this.iconArr[i]; // 获得太阳神图标，数字必须要大于0的

            const isSunGod = isIncludeSunGod && element.getId() === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
              error: Error()
            }), IconId) : IconId).SUN_GOD && element.getAmount() > 0;

            if (element.getId() === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
              error: Error()
            }), IconId) : IconId).BEETLE || isSunGod) {
              nodes.push(element);
            }
          }

          return nodes;
        }
        /**获得太阳神图标 */


        getSunGodIconNode() {
          const lockValues = (_crd && getColumnLockIconArr === void 0 ? (_reportPossibleCrUseOfgetColumnLockIconArr({
            error: Error()
          }), getColumnLockIconArr) : getColumnLockIconArr)(this.getFixedChessboardIcon(), this.columnIndex);

          for (let i = 0; i < this.showIconCount; i++) {
            const element = this.iconArr[i]; // 并且要是锁定的图标

            if (element.getId() === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
              error: Error()
            }), IconId) : IconId).SUN_GOD && element.getAmount() === 0 && lockValues.find(v => v.index === i)) {
              return element;
            }
          }

          return undefined;
        }

        onDestroy() {
          this.isRoll = false;
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
//# sourceMappingURL=559a5e93806995621aa9bd04d3e97ad3902c731d.js.map