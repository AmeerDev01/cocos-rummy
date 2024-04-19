System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, tween, UITransform, Vec3, BaseComponent, config, calBetAmount, GameType, getColumnLockIconArr, IconId, GxfcV2_Audio, getNodeByNameDeep, SoundPathDefine, cacheData, _dec, _class, _crd, ccclass, property, GxfcV2_Roller;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconPool(extras) {
    _reporterNs.report("IconPool", "../IconPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGxfcV2Icon(extras) {
    _reporterNs.report("GxfcV2Icon", "./GxfcV2_Icon", _context.meta, extras);
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

  function _reportPossibleCrUseOfGxfcV2_Audio(extras) {
    _reporterNs.report("GxfcV2_Audio", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGxfcV2SingleIconRollerViewModel(extras) {
    _reporterNs.report("GxfcV2SingleIconRollerViewModel", "../viewModel/GxfcV2SingleIconRollerViewModel", _context.meta, extras);
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
      GxfcV2_Audio = _unresolved_5.GxfcV2_Audio;
    }, function (_unresolved_6) {
      getNodeByNameDeep = _unresolved_6.getNodeByNameDeep;
    }, function (_unresolved_7) {
      SoundPathDefine = _unresolved_7.SoundPathDefine;
    }, function (_unresolved_8) {
      cacheData = _unresolved_8.cacheData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b251dO1q9NNh7hKt1BxeX2F", "GxfcV2_Roller", undefined);

      __checkObsolete__(['_decorator', 'Game', 'instantiate', 'Node', 'sp', 'tween', 'UITransform', 'Vec2', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GxfcV2_Roller", GxfcV2_Roller = (_dec = ccclass('GxfcV2_Roller'), _dec(_class = class GxfcV2_Roller extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
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
          this.wildIcon = void 0;
          // public winWildIcon: WildIcon[] = []
          this.winWildIcon = [];

          /**滚动次数 */
          this.rollerCount = -1;

          /**大图标 */
          this.bigNode = void 0;
          this.rollerLaunchResult = void 0;
          this.sendBetTime = 0;
          this.propertyNode = {
            props_icon_list: new Node(),
            props_big_icon: new Node(),
            props_wild_icon_list: new Node()
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

        getWildListNode() {
          return this.propertyNode.props_wild_icon_list;
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

          if (this.isSubGame1()) {// this.initWildColumn(this.showIconCount + 1);
          }
        }

        initColumn(iconCount) {
          for (var i = 0; i < iconCount; i++) {
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


        isSubGame2SpecialIcon(id) {// return id === IconId.BEETLE || id === IconId.SUN_GOD;
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
          }), config) : config).icon.find(v => v.id === iconId); // 在子游戏2中，初始化不显示甲壳虫和太阳神
          // if (this.isSubGame2() && this.isSubGame2SpecialIcon(iconConfig.id)) {
          // 	this.joinIcon();
          // 	return;
          // }

          var icon = this.iconPool.getIcon(iconConfig, this.propertyNode.props_icon_list, this.lastIndex);
          icon.showAmount();
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
          // if (icon.getId() !== IconId.BEETLE) {
          // 	return;
          // }
          if (this.props.gameTypeInfo.currGameType !== (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2 && this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2) {
            this.randomBeetleAmount(icon);
            return;
          }

          var diff = this.calIndexDiff(this.lastIndex, this.stopIconIndex);

          if (diff >= 3) {
            this.randomBeetleAmount(icon);
            return;
          } // console.log(`setBeetleAmount--- diff:${diff},stopIconIndex:${this.stopIconIndex},lastIndex:${this.lastIndex},columnIndex:${this.columnIndex}`);


          var lockIconDatas = (_crd && getColumnLockIconArr === void 0 ? (_reportPossibleCrUseOfgetColumnLockIconArr({
            error: Error()
          }), getColumnLockIconArr) : getColumnLockIconArr)(this.getFixedChessboardIcon(), this.columnIndex);

          if (lockIconDatas.length === 0) {
            // 没有锁定图标就随机一个金额
            this.randomBeetleAmount(icon);
            return;
          }

          var index = diff === 2 ? 0 : diff === 0 ? 2 : 1;
          var lockIconData = lockIconDatas.find(v => v.index === index);

          if (lockIconData) {
            icon.setAmount(lockIconData.amount);
          }
        }

        randomBeetleAmount(icon) {
          // 没有锁定图标就随机一个金额
          var betAmount = (_crd && calBetAmount === void 0 ? (_reportPossibleCrUseOfcalBetAmount({
            error: Error()
          }), calBetAmount) : calBetAmount)(this.props.positionId);
          var amount = Math.floor(Math.random() * betAmount);
          amount = amount <= 0 ? amount + 1 : amount;
          icon.setAmount(amount);
        }

        getFixedChessboardIcon() {
          if (this.rollerLaunchResult) {
            var si = this.rollerLaunchResult.dl.si[0];

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

        joinJinWildIcon(rollerId, rollerLaunchResult) {
          this.propertyNode.props_wild_icon_list.active = true;
          var icon = this.wildIcon;
          this.propertyNode.props_wild_icon_list.removeAllChildren();

          for (var i = 0; i < this.showIconCount; i++) {
            var jinWildicon = instantiate(icon);
            jinWildicon.setPosition(0, -150);
            this.propertyNode.props_wild_icon_list.addChild(jinWildicon);
            var endPos = new Vec3(0, -150 + (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).normalRollOption.singleRollerHeight * i);
            tween(jinWildicon).to(0.5, {
              position: endPos
            }).start();
            console.log("this.isWinJinWildIcon(i, rollerLaunchResult, rollerId)", this.isWinJinWildIcon(i, rollerLaunchResult, rollerId));

            if (this.isWinJinWildIcon(i, rollerLaunchResult, rollerId)) {
              // const wild = {
              // 	index: i,
              // 	wildIcon:jinWildicon
              // }
              // this.winWildIcon.push(wild);
              this.winWildIcon.push(jinWildicon); // mainViewModel.rollerPanelViewModel.comp.winWildIcon.push(jinWildicon)
            }
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
          this.propertyNode.props_wild_icon_list.active = false;
          this.propertyNode.props_wild_icon_list.removeAllChildren();
          this.winWildIcon = [];

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

          var newValue = stopIndex + value;

          if (newValue >= this.iconRollerQueue.length) {
            newValue = newValue - this.iconRollerQueue.length;
          }

          this.lastIndex = newValue;
        }

        getStopIconIndex() {
          // console.log(`getStopIconIndex--- rollerCount:${this.rollerCount},columnIndex:${this.columnIndex},lastIndex:${this.lastIndex}`);
          var totalCount = 1 * (this.columnIndex + 1); // if (this.isSpeedBorder) {
          // 	totalCount = 20;
          // }

          if (this.rollerCount <= totalCount) {
            if (this.rollerCount === totalCount) {
              // console.log(`getStopIconIndex--- rollerCount:${this.rollerCount},columnIndex:${this.columnIndex},lastIndex:${this.lastIndex},	stopIconIndex:${this.stopIconIndex}`);
              this.addLastJoinIconIndex(this.stopIconIndex, 3);
            }

            return -1;
          }

          return this.stopIconIndex;
        }

        bindUI() {
          this.wildIcon = this.propertyNode.props_wild_icon_list.getChildByName("icon");
        }
        /**获得滚动速度 */


        getRollSpeed() {
          // if (this.isSpeedBorder) {
          // 	return config.normalRollOption.expectRollerSpeed;
          // }
          return (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.rollerSpeed;
        }

        mergeIcon(parentNode, rollerLaunchResult) {
          var iconCount = this.getAlikeIconCount(rollerLaunchResult);
          var pos = this.getMergeIconPos(rollerLaunchResult);

          if (pos) {
            this.buildSkeleton(parentNode, pos, iconCount);
            this.isMergeIcon = true;
          }
        }
        /**获得合并图标的位置 */


        getMergeIconPos(rollerLaunchResult, gameType) {
          if (gameType === void 0) {
            gameType = undefined;
          }

          if (gameType === undefined) {
            gameType = this.props.gameTypeInfo.viewGameType;
          }

          var iconCount = this.getAlikeIconCount(rollerLaunchResult);
          var pos;

          if (iconCount === this.showIconCount) {
            var bool = true;

            for (var i = 0; i < this.showIconCount; i++) {
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
            for (var _i = 0; _i < this.showIconCount - 1; _i++) {
              if (this.iconArr[_i].getId() === this.iconArr[_i + 1].getId() && this.isWinIcon(_i, rollerLaunchResult) && this.isWinIcon(_i + 1, rollerLaunchResult)) {
                // 用开始的图标的坐标 + 图标的一半 + 间隔的一半
                pos = this.iconArr[_i].getNode().worldPosition.clone().add(new Vec3(0, this.iconArr[_i].getHeight() / 2 + this.getIntervalHeight(gameType) / 2)); // console.log(`getMergeIconPos begin`, pos.x, pos.y);
              }
            }
          }

          return pos;
        }
        /**是否中奖图标 */


        isWinIcon(index, rollerLaunchResult, iconId) {
          if (iconId === void 0) {
            iconId = undefined;
          }

          var wp = rollerLaunchResult.dl.si[0].wp;

          for (var key in wp) {
            var values = wp[key];
            var iconIndexs = values.find(v => v[0] === this.columnIndex);

            if (iconIndexs && iconIndexs[1] === index) {
              if (iconId) {
                return this.iconArr[index].getId() === iconId;
              }

              return true;
            }
          }

          return false;
        }
        /**是否中奖图标 */


        isWinJinWildIcon(index, rollerLaunchResult, columnIndex) {
          var wp = rollerLaunchResult.dl.si[0].wp;

          for (var key in wp) {
            var values = wp[key];
            var iconIndexs = values.find(v => v[0] === columnIndex);

            if (iconIndexs && iconIndexs[1] === index) {
              // if (iconId) {
              // 	return this.iconArr[index].getId() === iconId;
              // }
              return true;
            }
          }

          return false;
        }
        /**是否有中奖图标wild */


        isWinWild() {
          if (this.rollerLaunchResult) {
            for (var i = 0; i < this.showIconCount; i++) {
              if (this.isWinIcon(i, this.rollerLaunchResult, (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
                error: Error()
              }), IconId) : IconId).WILD1) || this.isWinIcon(i, this.rollerLaunchResult, (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
                error: Error()
              }), IconId) : IconId).WILD2)) {
                return true;
              }
            }
          }

          return false;
        }

        setSpeedBorderStatus(show) {
          this.speddBorderNode.active = show;

          if (show) {
            this.speddBorderNode.setWorldPosition(new Vec3(this.node.worldPosition.x + 11, this.node.worldPosition.y + 13)); // GxfcV2_Audio.playOneShot(SoundPathDefine.fast_roller)

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

        buildSkeleton(parentNode, pos, iconCount) {// const fileName = iconCount === 2 ? PrefabPathDefine.TWO_ICON : PrefabPathDefine.THREE_ICON;
          // this.bigNode = instantiate(sourceManageSeletor().getFile(fileName).source);
          // this.bigNode.name = "bigNode-" + iconCount;
          // parentNode.addChild(this.bigNode);
          // this.bigNode.setWorldPosition(pos);
          // this.bigNode.setScale(new Vec3(1, this.getBigNodeScaleY(iconCount)))
        }

        getBigNodeScaleY(iconCount, gameType) {
          if (gameType === void 0) {
            gameType = undefined;
          }

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
          var count = 1;

          for (var i = 0; i < this.showIconCount - 1; i++) {
            if ((this.iconArr[i].getId() === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
              error: Error()
            }), IconId) : IconId).WILD1 || this.iconArr[i].getId() === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
              error: Error()
            }), IconId) : IconId).WILD2) && this.iconArr[i].getId() === this.iconArr[i + 1].getId() && this.isWinIcon(i, rollerLaunchResult) && this.isWinIcon(i + 1, rollerLaunchResult)) {
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
          // console.log("222222222",this.isRoll);
          if (this.isRoll) {
            return;
          } // console.log("222222222");
          // debugger


          if (!this.isMergeIcon) {
            this.mergeIcon(this.propertyNode.props_big_icon, this.rollerLaunchResult);
          }

          this.scheduleOnce(() => {
            if (this.node.isValid) {
              var icon = this.iconArr[index]; // 如果是WILD图标，并且合并了图标，就不在显示边框了

              if (icon.getId() !== (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
                error: Error()
              }), IconId) : IconId).WILD1 || icon.getId() !== (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
                error: Error()
              }), IconId) : IconId).WILD2 || !this.isMergeIcon) {
                icon.playWin(this.propertyNode.props_big_icon);
              }
            }
          }, 0.2);
        }
        /**是否是与金发同一列的图标 */
        // private isChangeJinFa(rollerLaunchResult: RollerLaunchResult,index,RollerId) {
        // 	const wildRollerId = rollerLaunchResult.dl.si[0].wildRollerId
        // 	const wp = rollerLaunchResult.dl.si[0].wp
        // 	for (const key in wp) {
        // 		const values = wp[key] as [];
        // 		const iconIndexs = values.find(v => v[0] === RollerId)
        // 		if (iconIndexs ) {//&& iconIndexs[1] === index
        // 			return true
        // 		}
        // 	}
        // 	return false
        // }

        /**播放金发wild动画
         * @param RollerId 滚轴的id值
         */


        playJinFaWild(rollerLaunchResult, RollerId, done) {
          var _this = this;

          console.log("playJinFaWild", RollerId);
          var wildRollerId = rollerLaunchResult.dl.si[0].wildRollerId;

          var _loop = function _loop(i) {
            var element = _this.iconArr[i];
            console.log("element", element); // console.log(this.isChangeJinFa(rollerLaunchResult, i, RollerId));

            if (wildRollerId && wildRollerId.length > 0) {
              // if (i === 2) {
              element.playJinWild(_this.propertyNode.props_big_icon, () => {
                _this.scheduleOnce(() => {
                  if (i !== 2) {
                    element.changeToJinWild();
                    element.faceNode.getComponent(UITransform).width = 160;
                    element.faceNode.getComponent(UITransform).height = 146;

                    if (i === 0) {
                      _this.scheduleOnce(() => {
                        done && done();
                      }, 1);
                    }
                  }
                }, 1);
              }); // } else {
              // }
            }
          };

          for (var i = this.showIconCount - 1; i >= 0; i--) {
            _loop(i);
          }
        }
        /**播放甲壳虫动画 */
        // public playBeetleAnimation(done) {
        // let count = 0;
        // const beetleArr = this.iconArr.filter((v, index) => v.getId() === IconId.BEETLE && index < this.showIconCount)
        // if (beetleArr.length === 0) {
        // 	done && done();
        // 	return;
        // }
        // beetleArr.forEach(v => {
        // 	v.playBeetleAnimation(() => {
        // 		count++;
        // 		if (count >= beetleArr.length) {
        // 			done && done();
        // 		}
        // 	})
        // })
        // }

        /**播放一次scatter动画 */


        playOneScatterAnimation() {
          // 小游戏2不播放
          if (this.isSubGame2()) {
            return;
          }

          for (var i = 0; i < this.showIconCount; i++) {
            var element = this.iconArr[i];

            if (element.getId() === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
              error: Error()
            }), IconId) : IconId).SCATTER) {
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
          }), cacheData) : cacheData).rollerLaunchResult.dl.si[0].freegame;
          var isLoop = Object.keys(freeGame).length > 0 ? true : false;

          if (isLoop) {
            for (var i = 0; i < this.showIconCount; i++) {
              var element = this.iconArr[i];

              if (element.getId() === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
                error: Error()
              }), IconId) : IconId).SCATTER) {
                element.playScatterWin(this.propertyNode.props_big_icon, true);
              }
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
          (_crd && GxfcV2_Audio === void 0 ? (_reportPossibleCrUseOfGxfcV2_Audio({
            error: Error()
          }), GxfcV2_Audio) : GxfcV2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
            error: Error()
          }), SoundPathDefine) : SoundPathDefine).beatDrum); // 滚动停止之后需要延迟的时间

          var time = this.isSubGame2() ? 1.5 : 0.05;
          this.events.onCheckNextLeftCount(); // const time = 0.05;

          this.scheduleOnce(() => {
            this.node.isValid && this.rollOverCallback();
          }, time);
        }
        /**添加锁定图标 */


        addLockIcon(isPlayAnimation) {
          if (isPlayAnimation === void 0) {
            isPlayAnimation = true;
          }

          if (!this.iconPool) {
            return;
          }

          var playCount = 0;
          var lockValues = (_crd && getColumnLockIconArr === void 0 ? (_reportPossibleCrUseOfgetColumnLockIconArr({
            error: Error()
          }), getColumnLockIconArr) : getColumnLockIconArr)(this.getFixedChessboardIcon(), this.columnIndex);
          lockValues.forEach(v => {
            var GxfcV2Icon = this.lockIcons.find(iconv => iconv.getIconIndex() === v.index);

            if (!GxfcV2Icon) {
              var iconConfig = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).icon.find(icon => icon.id === v.iconId);
              GxfcV2Icon = this.iconPool.getIcon(iconConfig, this.propertyNode.props_icon_list, v.index); // if (!isPlayAnimation || GxfcV2Icon.isBeetleIcon()) {
              // 	GxfcV2Icon.setAmount(v.amount);
              // } else if (GxfcV2Icon.isSunGod()) {
              // 	// 播放太阳神出现的音效
              // 	// GxfcV2_Audio.playOneShot(SoundPathDefine.sunGod)
              // }

              var replaceIcon = this.iconArr[v.index];
              GxfcV2Icon.setPosition(replaceIcon.getPosition());
              replaceIcon.restore();
              this.iconArr[v.index] = GxfcV2Icon;
              this.lockIcons.push(GxfcV2Icon);
              this.removeSingleRollerIcon(v.index);
              isPlayAnimation && GxfcV2Icon.playBeetleAnimation(() => {
                GxfcV2Icon.hideWin();
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

          if (this.isMergeIcon) {
            console.log("bigNode11 setWorldPosition begin", this.bigNode.getWorldPosition().x, this.bigNode.getWorldPosition().y);
            var pos = this.getMergeIconPos(this.rollerLaunchResult, gameType); // 重新设置合并图标位置
            // this.bigNode.setWorldPosition(pos);

            console.log("bigNode11 setWorldPosition end", pos.x, pos.y);
          }
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

          if (this.isMergeIcon) {
            // console.log(`bigNode setWorldPosition begin`, this.bigNode.getWorldPosition().x, this.bigNode.getWorldPosition().y);
            var _pos = this.getMergeIconPos(this.rollerLaunchResult, gameType); // 重新设置合并图标位置


            this.bigNode.setWorldPosition(_pos); // console.log(`bigNode setWorldPosition end`, pos.x, pos.y);

            var iconCount = this.getAlikeIconCount(this.rollerLaunchResult);
            this.bigNode.setScale(new Vec3(1, this.getBigNodeScaleY(iconCount, gameType)));
          }
        }
        /**替换单个滚动图标 */


        replaceSingleRollerIcon() {
          var _this2 = this;

          this.addLockIcon(false);
          var lockValues = (_crd && getColumnLockIconArr === void 0 ? (_reportPossibleCrUseOfgetColumnLockIconArr({
            error: Error()
          }), getColumnLockIconArr) : getColumnLockIconArr)(this.getFixedChessboardIcon(), this.columnIndex);

          var _loop2 = function _loop2(i) {
            var v = _this2.iconArr[i]; // 替换不是甲壳虫和太阳神图标
            // if (!this.isSubGame2SpecialIcon(v.getId())) {

            if (!lockValues.find(lock => lock.index === i)) {
              _this2.buildSingleRollerIcon(i, v.getPosition(), v);

              v.getNode().active = false;
            }
          };

          for (var i = 0; i < this.iconArr.length; i++) {
            _loop2(i);
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
          }); // 只有从小游戏2退出去的才隐藏甲壳虫上面的数字

          if (this.props.gameTypeInfo.lastGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2 || this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME2) {
            // 在切到游戏之后，把甲壳虫上面的数字隐藏了
            for (var i = 0; i < this.showIconCount; i++) {
              if (i >= this.iconArr.length) {
                break;
              }

              var v = this.iconArr[i]; // if (v.isBeetleIcon() || v.getId() === IconId.SUN_GOD) {
              // 	v.hideAmount();
              // }
            }
          }

          this.lockIcons = [];
          this.singleIconRollerViewModels = [];
        }
        /**构建单个图标滚动 */


        buildSingleRollerIcon(index, pos, icon) {// const viewModel = new GxfcV2SingleIconRollerViewModel()
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
              this.stopIconIndex = -1;
              var duration = 0.1; // 结束之后计算每个图标的最终位置，

              for (var i = 0; i < this.iconArr.length; i++) {
                var icon = this.iconArr[i];
                tween(icon.getNode()).to(duration, {
                  position: this.getIconPosByIndex(i)
                }).start();
              } // if(this.isSubGame1() && )


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
        // public getBeetleNode(isIncludeSunGod: boolean = false) {
        // 	const nodes: GxfcV2Icon[] = [];
        // 	for (let i = 0; i < this.showIconCount; i++) {
        // 		const element = this.iconArr[i];
        // 		// 获得太阳神图标，数字必须要大于0的
        // 		const isSunGod = isIncludeSunGod && element.getId() === IconId.SUN_GOD && element.getAmount() > 0;
        // 		if (element.getId() === IconId.BEETLE || isSunGod) {
        // 			nodes.push(element);
        // 		}
        // 	}
        // 	return nodes;
        // }

        /**获得太阳神图标 */
        // public getSunGodIconNode() {
        // 	const lockValues = getColumnLockIconArr(this.getFixedChessboardIcon(), this.columnIndex)
        // 	for (let i = 0; i < this.showIconCount; i++) {
        // 		const element = this.iconArr[i];
        // 		// 并且要是锁定的图标
        // 		if (element.getId() === IconId.SUN_GOD && element.getAmount() === 0 && lockValues.find(v => v.index === i)) {
        // 			return element;
        // 		}
        // 	}
        // 	return undefined;
        // }


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
//# sourceMappingURL=a1da2a3da39262b747ff1ed3a26a9d322958f6cb.js.map