System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, tween, UITransform, Vec3, BaseComponent, config, calBetAmount, GameType, getColumnLockIconArr, IconId, mainViewModel, phoenixV2_Audio, getNodeByNameDeep, SoundPathDefine, cacheData, _dec, _class, _crd, ccclass, property, PhoenixV2_Roller;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconPool(extras) {
    _reporterNs.report("IconPool", "../IconPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPhoenixV2Icon(extras) {
    _reporterNs.report("PhoenixV2Icon", "./PhoenixV2_Icon", _context.meta, extras);
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

  function _reportPossibleCrUseOfSmallGame(extras) {
    _reporterNs.report("SmallGame", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainViewModel(extras) {
    _reporterNs.report("mainViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfphoenixV2_Audio(extras) {
    _reporterNs.report("phoenixV2_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPhoenixV2SingleIconRollerViewModel(extras) {
    _reporterNs.report("PhoenixV2SingleIconRollerViewModel", "../viewModel/PhoenixV2SingleIconRollerViewModel", _context.meta, extras);
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
      mainViewModel = _unresolved_5.mainViewModel;
      phoenixV2_Audio = _unresolved_5.phoenixV2_Audio;
    }, function (_unresolved_6) {
      getNodeByNameDeep = _unresolved_6.getNodeByNameDeep;
    }, function (_unresolved_7) {
      SoundPathDefine = _unresolved_7.SoundPathDefine;
    }, function (_unresolved_8) {
      cacheData = _unresolved_8.cacheData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e3624qCoNBHKKJV/ItWnbQi", "PhoenixV2_Roller", undefined);

      __checkObsolete__(['_decorator', 'Game', 'instantiate', 'Node', 'sp', 'tween', 'UITransform', 'Vec2', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PhoenixV2_Roller", PhoenixV2_Roller = (_dec = ccclass('PhoenixV2_Roller'), _dec(_class = class PhoenixV2_Roller extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

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
              }), GameType) : GameType).NONE,
              viewGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).NONE,
              currGameType: (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
                error: Error()
              }), GameType) : GameType).NONE,
              leftCount: 0
            },
            positionId: 0,
            chooseSmallGame: null
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        setColumnEffectNode(props_column_effect_node) {
          this.props_column_effect_node = props_column_effect_node;
          this.iconAnimationNode = this.props_column_effect_node.getChildByName("props_icon_animation"); // this.speddBorderNode = this.props_column_effect_node.getChildByName("props_speed_border")

          this.speddBorderNode = (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
            error: Error()
          }), mainViewModel) : mainViewModel).comp.getBorderNode();
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
          for (var i = 0; i < iconCount; i++) {
            // if (this.props.gameTypeInfo.viewGameType === GameType.MAIN) {
            // 	this.props.chooseSmallGame.id = 1;
            // }
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
          var newValue = index + value;

          if (newValue >= this.iconRollerQueue.length) {
            newValue = newValue - this.iconRollerQueue.length;
          }

          return newValue;
        }
        /**是否小游戏2的特殊图标 */


        isSubGame1SpecialIcon(id) {
          return id === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).BEETLE || id === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).WILD;
        }

        getIntervalHeight(gameType) {
          if (gameType === void 0) {
            gameType = undefined;
          }

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
          var length = this.iconArr.length;
          this.lastIndex = this.lastIndex - 1 < 0 ? this.iconRollerQueue.length - 1 : --this.lastIndex;
          var iconId = this.iconRollerQueue[this.lastIndex];
          var iconConfig = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).icon.find(v => v.id === iconId); // 在子游戏1中，初始化不显示甲壳虫和太阳神

          if (this.isSubGame2() && this.isSubGame1SpecialIcon(iconConfig.id)) {
            this.joinIcon();
            return;
          }

          var icon = this.iconPool.getIcon(iconConfig, this.propertyNode.props_icon_list, this.lastIndex);

          if (iconConfig.id === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).WILD && this.props.gameTypeInfo.viewGameType !== (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN) {
            icon.changeIcon(this.props.chooseSmallGame.id);
          } else if (iconConfig.id === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).WILD && this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN) {
            icon.changeIcon(0);
          }

          var position = new Vec3(0, this.getRollerPaddingBottom() + icon.getHeight() / 2);
          position.y -= this.getIconContainerAnchorPos();

          if (length > 0) {
            var lastNode = this.iconArr[length - 1];
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
            return;
          }

          var diff = this.calIndexDiff(this.lastIndex, this.stopIconIndex);

          if (diff >= 3) {
            return;
          } // console.log(`setBeetleAmount--- diff:${diff},stopIconIndex:${this.stopIconIndex},lastIndex:${this.lastIndex},columnIndex:${this.columnIndex}`);


          var lockIconDatas = (_crd && getColumnLockIconArr === void 0 ? (_reportPossibleCrUseOfgetColumnLockIconArr({
            error: Error()
          }), getColumnLockIconArr) : getColumnLockIconArr)(this.getFixedChessboardIcon(), this.columnIndex);

          if (lockIconDatas.length === 0) {
            // 没有锁定图标就随机一个金额
            var betAmount = (_crd && calBetAmount === void 0 ? (_reportPossibleCrUseOfcalBetAmount({
              error: Error()
            }), calBetAmount) : calBetAmount)(this.props.positionId);
            var amount = Math.floor(Math.random() * betAmount);
            amount = amount <= 0 ? amount = 1 : amount;
            icon.setAmount(amount);
            return;
          }

          var index = diff === 2 ? 0 : diff === 0 ? 2 : 1;
          var lockIconData = lockIconDatas.find(v => v.index === index);

          if (lockIconData) {
            var _amount = lockIconData.amount >= 10000 ? lockIconData.amount.formatAmountWithLetter() : lockIconData.amount;

            icon.setAmount(_amount);
          }
        }

        getFixedChessboardIcon() {
          if (this.rollerLaunchResult) {
            var si = this.rollerLaunchResult.dl.si[0];

            if (si.nextGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME2 || this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
              error: Error()
            }), GameType) : GameType).SUBGAME2) {// return si.fixedChessboardIcon;
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
          var diff = index1 - index2;

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
          }), cacheData) : cacheData).sendBetTime; // console.log("roller stop time " + this.sendBetTime);
          // let value = isSpeedBorder ? 15 : this.columnIndex + 1

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

          var newValue = stopIndex + value;

          if (newValue >= this.iconRollerQueue.length) {
            newValue = newValue - this.iconRollerQueue.length;
          }

          this.lastIndex = newValue;
        }

        getStopIconIndex() {
          // console.log(`getStopIconIndex--- rollerCount:${this.rollerCount},columnIndex:${this.columnIndex},lastIndex:${this.lastIndex}`);
          var totalCount = 1 * (this.columnIndex + 1);

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

        mergeIcon(parentNode, rollerLaunchResult) {
          var iconCount = this.getAlikeIconCount();
          var pos;

          if (iconCount === this.showIconCount) {
            for (var i = 0; i < this.showIconCount; i++) {
              if (!this.isWinIcon(i, rollerLaunchResult)) {
                return;
              }
            } // 3个图标取中间的图标的坐标


            pos = this.iconArr[1].getNode().worldPosition;
          } else if (iconCount === this.showIconCount - 1) {
            // 找出两个相邻的图标
            for (var _i = 0; _i < this.showIconCount - 1; _i++) {
              if (this.iconArr[_i].getId() === this.iconArr[_i + 1].getId() && this.isWinIcon(_i, rollerLaunchResult) && this.isWinIcon(_i + 1, rollerLaunchResult)) {
                pos = this.iconArr[_i].getNode().worldPosition.clone().add(new Vec3(0, this.iconArr[_i].getHeight() / 2 + this.getIntervalHeight()));
              }
            }
          }
        }
        /**是否中奖图标 */


        isWinIcon(index, rollerLaunchResult) {
          var wp = rollerLaunchResult && rollerLaunchResult.dl.si[0].winningPosition;

          for (var key in wp) {
            var values = wp[key];
            var iconIndexs = values.find(v => v[0] === this.columnIndex);

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
            (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
              error: Error()
            }), phoenixV2_Audio) : phoenixV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).FAST_ROLLER);
            var scaleX = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).normalRollOption.expectBorderScaleX;
            var scaleY = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
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
        /**获得相同图标个数 */


        getAlikeIconCount() {
          var count = 1;

          for (var i = 0; i < this.showIconCount - 1; i++) {
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
          } // this.scheduleOnce(() => {


          if (this.node.isValid) {
            var icon = this.iconArr[index]; // 如果是WILD图标，并且合并了图标，就不在显示边框了

            if (icon.getId() !== (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
              error: Error()
            }), IconId) : IconId).WILD || !this.isMergeIcon) {
              icon.playWin(this.propertyNode.props_big_icon);
            }
          } // }, 0.2)

        }
        /**播放中奖图标动画 */


        playYuanBaoWinIcon(index) {
          if (this.isRoll) {
            return;
          }

          this.scheduleOnce(() => {
            if (this.node.isValid) {
              var icon = this.iconArr[index]; // 如果是元宝第1列 第5列中奖

              if (icon.getId() === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
                error: Error()
              }), IconId) : IconId).BEETLE) {
                icon.playYuanBaoWinIcon(this.propertyNode.props_big_icon, true);
              }
            }
          }, 0.2);
        } // /**播放甲壳虫动画 */
        // public playBeetleAnimation(done) {
        // 	let count = 0;
        // 	const beetleArr = this.iconArr.filter((v, index) => v.getId() === IconId.BEETLE && index < this.showIconCount)
        // 	if (beetleArr.length === 0) {
        // 		done && done();
        // 		return;
        // 	}
        // 	beetleArr.forEach(v => {
        // 		v.playBeetleAnimation(() => {
        // 			count++;
        // 			if (count >= beetleArr.length) {
        // 				done && done();
        // 			}
        // 		})
        // 	})
        // }

        /**播放一次scatter动画 */


        playOneScatterAnimation() {
          // 小游戏2不播放
          if (this.isSubGame2()) {
            return;
          }

          for (var i = 0; i < this.showIconCount; i++) {
            var element = this.iconArr[i]; // const freeGame = cacheData.rollerLaunchResult && cacheData.rollerLaunchResult.dl.si[0].freeGame;
            // const isLoop = Object.keys(freeGame).length > 0 ? true : false;	

            if (element.getId() === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
              error: Error()
            }), IconId) : IconId).SCATTER) {
              (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
                error: Error()
              }), phoenixV2_Audio) : phoenixV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                error: Error()
              }), SoundPathDefine) : SoundPathDefine).SCATTER);
              element.playWin(this.propertyNode.props_big_icon, false, false);
            }
          }
        }
        /**播放scatter动画 进入小游戏 */


        playScatterAnimation() {
          // this.hideIconWin();
          var freeGame = (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).rollerLaunchResult && (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).rollerLaunchResult.dl.si[0].freeGame;
          var isLoop = Object.keys(freeGame).length > 0 ? true : false;

          if (isLoop) {
            for (var i = 0; i < this.showIconCount; i++) {
              var element = this.iconArr[i];

              if (element.getId() === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
                error: Error()
              }), IconId) : IconId).SCATTER) {
                element.playScatterWin(this.propertyNode.props_big_icon, false);
              }
            }
          }
        }
        /**播放一次元宝动画 */


        playOneYuanBaoAnimation(isWin) {
          if (isWin === void 0) {
            isWin = false;
          }

          for (var i = 0; i < this.showIconCount; i++) {
            var element = this.iconArr[i];

            if (element.getId() === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
              error: Error()
            }), IconId) : IconId).BEETLE) {
              element.yinBiNode.active = false;
              element.playYuanBaoWinIcon(this.propertyNode.props_big_icon, isWin);
            }
          }
        }

        rollOverHandle(rollerLaunchResult) {
          // console.log("roller over handle stop time " + this.sendBetTime);
          this.isRoll = false;
          this.stopIconIndex = -1;
          this.isSpeedBorder && this.setSpeedBorderStatus(false);

          if (this.columnIndex === 0 || this.columnIndex === 4) {
            this.playOneYuanBaoAnimation(false);
          }

          this.playOneScatterAnimation();
          var lockIconCount = this.addLockIcon();
          (_crd && phoenixV2_Audio === void 0 ? (_reportPossibleCrUseOfphoenixV2_Audio({
            error: Error()
          }), phoenixV2_Audio) : phoenixV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).SHELL_END); // 有播放甲壳虫动画，晚一点结束

          var time = lockIconCount > 0 && this.isSubGame2() ? 4 : 0.05;
          this.scheduleOnce(() => {
            this.node.isValid && this.rollOverCallback();
          }, time);
        }
        /**添加锁定图标 */


        addLockIcon() {
          var playCount = 0;
          var lockValues = (_crd && getColumnLockIconArr === void 0 ? (_reportPossibleCrUseOfgetColumnLockIconArr({
            error: Error()
          }), getColumnLockIconArr) : getColumnLockIconArr)(this.getFixedChessboardIcon(), this.columnIndex);
          lockValues.forEach(v => {
            var phoenixV2Icon = this.lockIcons.find(iconv => iconv.getIconIndex() === v.index);

            if (!phoenixV2Icon) {
              var iconConfig = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).icon.find(icon => icon.id === v.iconId);
              phoenixV2Icon = this.iconPool.getIcon(iconConfig, this.propertyNode.props_icon_list, v.index);
              phoenixV2Icon.setAmount(v.amount);
              var replaceIcon = this.iconArr[v.index];
              phoenixV2Icon.setPosition(replaceIcon.getPosition());
              replaceIcon.restore();
              this.iconArr[v.index] = phoenixV2Icon;
              this.lockIcons.push(phoenixV2Icon);
              this.removeSingleRollerIcon(v.index);
              phoenixV2Icon.playBeetleAnimation(() => {
                phoenixV2Icon.hideWin();
              });
              playCount++; // console.log(`addlockicon columnIndex ${this.columnIndex} index ${v.index} amount ${v.amount}, this.lockIcons.length ${this.lockIcons.length}`);
            }
          });
          return playCount;
        }

        removeSingleRollerIcon(index) {
          for (var i = 0; i < this.singleIconRollerViewModels.length; i++) {
            var element = this.singleIconRollerViewModels[i];

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


        getIconPosByIndex(index, gameType) {
          if (gameType === void 0) {
            gameType = undefined;
          }

          if (gameType === undefined) {
            gameType = this.props.gameTypeInfo.viewGameType;
          }

          var height = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.singleRollerHeight;
          var halfHeight = height / 2;
          var paddingBottom = this.getRollerPaddingBottom(gameType);
          var y = 0;

          if (index === 0) {
            // 第一个图标的坐标位置 = 下边距 + icon高度的一半
            y = paddingBottom + halfHeight;
          } else {
            // 从第二开始的坐标 = 下边距 + icon高度的一半 + 图标间隔个数 + icon高度个数
            var interval = this.getIntervalHeight(gameType) * index;
            y = paddingBottom + halfHeight + interval + height * index;
          }

          y -= this.getIconContainerAnchorPos();
          return new Vec3(0, y);
        }
        /**获得图标容器锚点的起始位置 */


        getIconContainerAnchorPos() {
          var iconListUI = this.propertyNode.props_icon_list.getComponent(UITransform);
          return iconListUI.height * iconListUI.anchorY;
        }

        changeRollerHeight(gameType) {
          var rollerHeight = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
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
        }
        /**重置图标位置 */


        resetIconPos(gameType) {
          this.changeRollerHeight(gameType);

          if (gameType !== (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2) {
            for (var i = 0; i < this.iconArr.length; i++) {
              var icon = this.iconArr[i];
              var pos = this.getIconPosByIndex(i, gameType);
              icon.setPosition(pos);
            }
          }
        }
        /**替换单个滚动图标 */


        replaceSingleRollerIcon() {
          var _this = this;

          var lockValues = (_crd && getColumnLockIconArr === void 0 ? (_reportPossibleCrUseOfgetColumnLockIconArr({
            error: Error()
          }), getColumnLockIconArr) : getColumnLockIconArr)(this.getFixedChessboardIcon(), this.columnIndex);

          var _loop = function _loop(i) {
            var v = _this.iconArr[i]; // 替换不是甲壳虫和太阳神图标
            // if (!this.isSubGame2SpecialIcon(v.getId())) {

            if (!lockValues.find(lock => lock.index === i)) {
              _this.buildSingleRollerIcon(i, v.getPosition(), v);

              v.getNode().active = false;
            }
          };

          for (var i = 0; i < this.iconArr.length; i++) {
            _loop(i);
          }
        }
        /**替换多个滚动图标 */


        replaceMultiRollerIcon() {
          this.singleIconRollerViewModels.forEach(v => {
            var firstIcon = v.comp.getFirstIcon();
            firstIcon.getNode().removeFromParent();
            var index = v.comp.getSlotIndex();
            this.propertyNode.props_icon_list.addChild(firstIcon.getNode());
            firstIcon.setPosition(this.getIconPosByIndex(index));
            this.iconArr[index] = firstIcon;
            v.unMount();
          });
          this.lockIcons = [];
          this.singleIconRollerViewModels = [];
        }
        /**构建单个图标滚动 */


        buildSingleRollerIcon(index, pos, icon) {// const viewModel = new PhoenixV2SingleIconRollerViewModel()
          // 	.mountView(sourceManageSeletor().getFile(PrefabPathDefine.SINGLE_ICON_ROLLER).source)
          // 	.appendTo(this.propertyNode.props_icon_list);
          // viewModel.viewNode.getComponent(UITransform).width = config.subGameRollOption.singleIconMaskWidth;
          // viewModel.viewNode.getComponent(UITransform).height = config.subGameRollOption.singleIconMaskHeight;
          // this.singleIconRollerViewModels.push(viewModel);
          // viewModel.viewNode.setPosition(pos);
          // viewModel.comp.initSlot(this.columnIndex, index, icon.getIconIndex(), this.iconPool);
        }

        getRollerPaddingBottom(gameType) {
          if (gameType === void 0) {
            gameType = undefined;
          }

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
          var frist = this.iconArr[0]; // 图标隐藏的Y坐标 = 图标一半高度 + 滚轴下内边距 + 容器锚点的高度

          var iconHideY = -(frist.getHeight() / 2 + this.getRollerPaddingBottom());
          iconHideY -= this.getIconContainerAnchorPos();

          if (frist.getPosition().y <= iconHideY) {
            // console.log(`columnIndex:${this.columnIndex},stopIconIndex:${this.stopIconIndex}, rollerCount:${this.rollerCount}`);
            if (this.rollerCount >= 0) {
              this.rollerCount++;
            }

            this.iconArr.shift();
            frist.restore();
            this.joinIcon();
            var endIcon = this.iconArr[2];

            if (endIcon.getIconIndex() === this.getStopIconIndex()) {
              // console.log(`xxxxxxxxxxx-----columnIndex:${this.columnIndex},stopIconIndex:${this.stopIconIndex},endIcon.getIconIndex():${endIcon.getIconIndex()},this.getStopIconIndex():${this.getStopIconIndex()}`);
              this.isRoll = false;
              this.stopIconIndex = -1; // 结束之后计算每个图标的最终位置，

              var count = 0;

              for (var i = 0; i < this.iconArr.length; i++) {
                var icon = this.iconArr[i];
                tween(icon.getNode()).to(0.1, {
                  position: this.getIconPosByIndex(i)
                }).call(() => {
                  count++;

                  if (count >= this.iconArr.length) {
                    this.node.isValid && this.rollOverHandle(this.rollerLaunchResult);
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


        stopSingleRollerIcon(rollerLaunchResult) {
          var count = 0;

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


        getBeetleAmountNode() {
          var nodes = [];

          for (var i = 0; i < this.showIconCount; i++) {
            var element = this.iconArr[i];

            if (this.isSubGame1SpecialIcon(element.getId())) {
              var amountNode = element.getAmountNode();
              amountNode && nodes.push(amountNode);
            }
          }

          return nodes;
        }

        getWildLiZiNode() {
          var amountNodes = [];
          var nodes = []; // console.log(" this.iconArr111", this.iconArr);
          // console.log("this.columnIndex111",this.columnIndex);

          for (var i = 0; i < this.showIconCount; i++) {
            var element = this.iconArr[i];
            var isWinIcon = this.isWinIconPhoenix((_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
              error: Error()
            }), cacheData) : cacheData).rollerLaunchResult, i); // console.log("amount111 isWinIcon",isWinIcon);

            if (isWinIcon && element.getId() === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
              error: Error()
            }), IconId) : IconId).WILD) {
              var amount = element.getAmountNode();
              var amount2DNode = element.getParticle2DNode();

              if (amount) {
                amountNodes.push(amount);
                nodes.push(amount2DNode);
              }
            }
          } // console.log("amountNodes------->:",amountNodes);


          return {
            amountNodes,
            nodes
          };
        } // /**是否wild中奖图标 */


        isWinIconPhoenix(rollerLaunchResult, index) {
          var wp = rollerLaunchResult && rollerLaunchResult.dl.si[0].winningPosition; // console.log("phoenixCount111",rollerLaunchResult.dl.si[0].otherGameAttributesVo.phoenixCount);

          var result = []; // let iconIndexs;

          for (var key in wp) {
            var values = wp[key];
            var iconIndexs = values.find(v => v[0] === this.columnIndex);

            if (iconIndexs && iconIndexs[1] === index && this.iconArr[index].getId() === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
              error: Error()
            }), IconId) : IconId).WILD) {
              return true;
            }
          } // for (const key in wp) {
          // 	result.push(...wp[key])
          // }
          // console.log("result111",result);
          // iconIndexs = result.find(v => v[0] === this.columnIndex)
          // // for (let i = 0; i < this.showIconCount; i++) {
          // 	if (iconIndexs && iconIndexs[1] === index && this.iconArr[index].getId() === IconId.WILD) {
          // 		// console.log("iconIndexs111",iconIndexs);
          // 		return true;
          // 	}
          // // }


          return false;
        }
        /**是否元宝中奖图标 */


        isYuanBaoWinIcon(rollerLaunchResult) {
          var wp = rollerLaunchResult && rollerLaunchResult.dl.si[0].otherGameAttributesVo.yuanBaoPosition;
          var values = wp;
          var iconIndexs = values.find(v => v[0] === this.columnIndex);

          for (var i = 0; i < this.showIconCount; i++) {
            if (iconIndexs && iconIndexs[1] === i) {
              return true;
            }
          }

          return false;
        }
        /**获得元宝上面的银币节点 */


        getYuanBaoYinBiNode() {
          var nodes = [];

          for (var i = 0; i < this.showIconCount; i++) {
            var element = this.iconArr[i];

            if (element.getId() === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
              error: Error()
            }), IconId) : IconId).BEETLE) {
              var yinBINode = element.getYinBiNode(); // console.log("yinBINode",yinBINode);
              // console.log("yinBINode", yinBINode.active);
              // console.log("yinBINode isYuanBaoWinIcon",this.isWinIconPhoenix(cacheData.rollerLaunchResult));

              var isYuanBaoWinIcon = this.isYuanBaoWinIcon((_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
                error: Error()
              }), cacheData) : cacheData).rollerLaunchResult);
              yinBINode && isYuanBaoWinIcon && nodes.push(yinBINode);
            }
          }

          return nodes;
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
//# sourceMappingURL=fe9bd5cf21fd5eacb5eddafdbb8a6560f13a1462.js.map