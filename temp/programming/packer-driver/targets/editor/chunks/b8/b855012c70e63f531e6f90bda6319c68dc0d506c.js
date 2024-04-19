System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, sp, Tween, tween, UITransform, Vec3, BaseComponent, config, cacheData, playThorAnimation, GameModeType, GameType, IconId, mainViewModel, thorv2_Audio, SoundPathDefine, _dec, _class, _crd, ccclass, property, TWEEN_ICON_TAG, SingleRollerStatus, ThorV2_Roller;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfconfig(extras) {
    _reporterNs.report("config", "../config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcacheData(extras) {
    _reporterNs.report("cacheData", "../dataTransfer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconPool(extras) {
    _reporterNs.report("IconPool", "../IconPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayThorAnimation(extras) {
    _reporterNs.report("playThorAnimation", "../store/actions/game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameModeType(extras) {
    _reporterNs.report("GameModeType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameType(extras) {
    _reporterNs.report("GameType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTypeInfo(extras) {
    _reporterNs.report("GameTypeInfo", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIconId(extras) {
    _reporterNs.report("IconId", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRollerLaunchResult(extras) {
    _reporterNs.report("RollerLaunchResult", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfThorV2Icon(extras) {
    _reporterNs.report("ThorV2Icon", "./ThorV2_Icon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmainViewModel(extras) {
    _reporterNs.report("mainViewModel", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfthorv2_Audio(extras) {
    _reporterNs.report("thorv2_Audio", "../index", _context.meta, extras);
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
      Node = _cc.Node;
      sp = _cc.sp;
      Tween = _cc.Tween;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      config = _unresolved_3.default;
    }, function (_unresolved_4) {
      cacheData = _unresolved_4.cacheData;
    }, function (_unresolved_5) {
      playThorAnimation = _unresolved_5.playThorAnimation;
    }, function (_unresolved_6) {
      GameModeType = _unresolved_6.GameModeType;
      GameType = _unresolved_6.GameType;
      IconId = _unresolved_6.IconId;
    }, function (_unresolved_7) {
      mainViewModel = _unresolved_7.mainViewModel;
      thorv2_Audio = _unresolved_7.thorv2_Audio;
    }, function (_unresolved_8) {
      SoundPathDefine = _unresolved_8.SoundPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8da30VgIPdC6owt9eVioOr6", "ThorV2_Roller", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'ITweenOption', 'Node', 'sp', 'Tween', 'tween', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      TWEEN_ICON_TAG = 1;

      SingleRollerStatus = /*#__PURE__*/function (SingleRollerStatus) {
        SingleRollerStatus[SingleRollerStatus["CLEAN"] = 0] = "CLEAN";
        SingleRollerStatus[SingleRollerStatus["WAIT"] = 1] = "WAIT";
        SingleRollerStatus[SingleRollerStatus["ADD"] = 2] = "ADD";
        SingleRollerStatus[SingleRollerStatus["OPEN"] = 3] = "OPEN";
        return SingleRollerStatus;
      }(SingleRollerStatus || {});

      _export("ThorV2_Roller", ThorV2_Roller = (_dec = ccclass('ThorV2_Roller'), _dec(_class = class ThorV2_Roller extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
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
          this.columnIndex = -1;

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

          /**大图标 */
          this.bigNode = void 0;
          this.rollerLaunchResult = void 0;
          this.sendBetTime = 0;

          /**是否加速 */
          this.isSpeed = false;
          this.singleRollerStatus = SingleRollerStatus.CLEAN;
          this.cleanAllIconOverCallback = void 0;
          this.props_shandian_iconSk = void 0;

          /**待播放动画的图标 */
          this.waitPlayAnimationIcon = [];
          this.isWaitAddIcon = false;
          this.propertyNode = {
            props_icon_list: new Node(),
            props_big_icon: new Node(),
            props_number: new Node(),
            props_shandian_icon: new Node()
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
            positionId: 0,
            gameModeType: null
          };
          this.events = {
            onCheckNextLeftCount: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        initSlot(columnIndex, iconPool) {
          this.iconPool = iconPool;
          this.columnIndex = columnIndex;
          this.setIconRollerQueue();
          this.lastIndex = Math.floor(Math.random() * this.iconRollerQueue.length);
          this.initColumn(this.showIconCount);
        }

        setIconRollerQueue() {
          if (this.columnIndex === -1) {
            return;
          }

          if (this.props.gameModeType === (_crd && GameModeType === void 0 ? (_reportPossibleCrUseOfGameModeType({
            error: Error()
          }), GameModeType) : GameModeType).buyToWin && this.isMainGame()) {
            this.iconRollerQueue = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).rateIconRollerQueue[this.columnIndex];
          } else {
            this.iconRollerQueue = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).iconRollerQueue[this.columnIndex];
          }
        }

        initColumn(iconCount) {
          for (let i = 0; i < iconCount; i++) {
            this.joinIcon();
          }
        }

        isSubGame1() {
          return this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1;
        }

        isMainGame() {
          return this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN;
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
          }), config) : config).icon.find(v => v.id === iconId); // 初始化时不加入倍率图标

          if (iconConfig.id >= (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).ODDS_ICON_GREEN && iconConfig.id <= (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).ODDS_ICON_RED || iconConfig.id === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).SCATTER) {
            return this.joinIcon();
          }

          const icon = this.iconPool.getIcon(iconConfig, this.propertyNode.props_icon_list, this.lastIndex);
          const position = new Vec3(0, this.getRollerPaddingBottom() + icon.getHeight() / 2);
          position.y -= this.getIconContainerAnchorPos();

          if (length > 0) {
            const lastNode = this.iconArr[length - 1];
            position.y = lastNode.getPosition().y + lastNode.getHeight() + this.getIntervalHeight();
          }

          icon.getNode().setPosition(position);
          this.iconArr.push(icon); // this.setBeetleAmount(icon);
        }
        /**创建新的图标 */


        newIcon() {
          this.lastIndex = this.lastIndex + 1 >= this.iconRollerQueue.length ? 0 : ++this.lastIndex;
          const iconId = this.iconRollerQueue[this.lastIndex];
          const iconConfig = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).icon.find(v => v.id === iconId);
          const icon = this.iconPool.getIcon(iconConfig, this.propertyNode.props_icon_list, this.lastIndex);
          icon.setWidth(this.getSingleRollerWidth());
          const position = this.geticonBirthPos();
          icon.getNode().setPosition(position);
          return icon;
        }
        /**计算两个索引的差值 */


        calIndexDiff(index1, index2) {
          let diff = index1 - index2;

          if (index1 < index2) {
            diff = index1 + this.iconRollerQueue.length - index2;
          }

          return diff;
        }

        bindEvent() {
          this.props_shandian_iconSk.setCompleteListener(() => {
            this.props_shandian_iconSk.node.active = false;
            this.props_shandian_iconSk.clearTracks();
          });
        }

        useProps(key, value) {
          if (this.node && this.node.isValid) {
            if (key === 'gameTypeInfo') {
              this.changeRollerHeight(this.props.gameTypeInfo.viewGameType);
            } else if (key === 'gameModeType') {
              this.setIconRollerQueue();
            }
          }
        }
        /**隐藏图标中奖效果 */


        hideIconWin() {
          this.resetFaceAnimationNodeOrOdds();
          this.bigNode && this.bigNode.destroy();
          this.bigNode = null;
          this.propertyNode.props_big_icon.removeAllChildren();
        }

        startRoll(isSpeed, done) {
          this.cleanAllIconOverCallback = done;
          this.singleRollerStatus = SingleRollerStatus.CLEAN;
          this.setIconRollerQueue();
          this.unscheduleAllCallbacks();
          this.waitPlayAnimationIcon = [];
          this.hideIconWin();
          this.hideScatterAnimation();
          this.stopIconIndex = -1;
          this.isSpeed = isSpeed;
          this.isRoll = true;
          this.clearAllIconHandle(1);
        }

        stopRoll(stopIconIndex, rollOverCallback, isSpeedBorder, rollerLaunchResult) {
          this.rollOverCallback = rollOverCallback;
          this.rollerLaunchResult = rollerLaunchResult;
          this.sendBetTime = (_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).sendBetTime;
          this.subLastJoinIconIndex(stopIconIndex, 1);
          this.stopIconIndex = stopIconIndex; // console.log("roller stop time " + this.sendBetTime, "singleRollerStatus", this.singleRollerStatus);

          if (this.singleRollerStatus === SingleRollerStatus.WAIT) {
            this.fillIconData();
            this.addIconHandle();
          } else {
            this.isWaitAddIcon = true;
          }
        }
        /**清理所有图标处理 */


        clearAllIconHandle(type) {
          // console.log(`clearAllIconHandle start columnIndex:${this.columnIndex} singleRollerStatus:${this.singleRollerStatus}`)
          this.clearAllIcon(!this.isSpeed, () => {
            // console.log(`clearAllIconHandle  end columnIndex:${this.columnIndex} singleRollerStatus:${this.singleRollerStatus} type:${type}`)
            this.singleRollerStatus = SingleRollerStatus.WAIT;
            this.cleanAllIconOverCallback && this.cleanAllIconOverCallback();
            this.cleanAllIconOverCallback = null;
          });
        }

        addIconHandle() {
          this.addIcon(() => {
            this.rollOverHandle(this.rollerLaunchResult);
          });
        }
        /**消除后补充图标 */


        clearAfterFillIconHandle(done) {
          this.fillIconData();
          this.addIcon(() => {
            done && done();
            (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
              error: Error()
            }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
              error: Error()
            }), SoundPathDefine) : SoundPathDefine).SINGLE_ICON_FALL);
          });
        }
        /**填充图标数据，未掉落到插槽 */


        fillIconData() {
          const emptyStartIndex = this.getFirstEmptyIconIndex(); // 计算从空图标位置之后有几个非空图标

          let notEmptyCount = 0;

          for (let i = emptyStartIndex + 1; i < this.iconArr.length; i++) {
            const element = this.iconArr[i];

            if (element) {
              notEmptyCount++;
            }
          } // console.log(`fillIconData columnIndex:${this.columnIndex}, emptyStartIndex:${emptyStartIndex}, notEmptyCount:${notEmptyCount}`)


          const addIconCount = this.showIconCount - this.getFirstEmptyIconIndex();

          if (addIconCount > notEmptyCount) {
            for (let i = 0; i < addIconCount - notEmptyCount; i++) {
              this.addNewIcon();
            }
          }
        }

        getOdds(index, id, rollerLaunchResult) {
          if (!rollerLaunchResult) {
            return '';
          }

          const rates = rollerLaunchResult.dl.si[0].otherGameAttributesVo.rates;

          for (let i = 0; i < rates.length; i++) {
            const v = rates[i];
            const itemId = v[2];

            if (this.columnIndex === v[0] && itemId === id) {
              const odds = v[3] + 'X';
              return odds;
            }
          }

          return '';
        }
        /**加速 */


        speed() {
          if (this.isSpeed) {
            return;
          } // console.log(`speed ===========================`)


          this.isSpeed = true;

          if (this.singleRollerStatus === SingleRollerStatus.CLEAN) {
            this.clearAllIconHandle(2);
          } else if (this.singleRollerStatus === SingleRollerStatus.ADD) {
            this.addIconHandle();
          }
        }

        subLastJoinIconIndex(stopIndex, value) {
          if (stopIndex < 0) {
            return;
          }

          let newValue = stopIndex - value;

          if (newValue < 0) {
            newValue = this.iconRollerQueue.length + newValue;
          }

          this.lastIndex = newValue;
        }

        bindUI() {
          this.props_shandian_iconSk = this.propertyNode.props_shandian_icon.getComponent(sp.Skeleton);
        }
        /**是否中奖图标 */


        isWinIcon(index, rollerLaunchResult, iconId = undefined) {
          const wp = rollerLaunchResult.dl.si[0].winningPosition;

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

        buildSkeleton(parentNode, pos, iconCount) {// const fileName = iconCount === 2 ? PrefabPathDefine.TWO_ICON : PrefabPathDefine.THREE_ICON;
          // this.bigNode = instantiate(sourceManageSeletor().getFile(fileName).source);
          // this.bigNode.name = "bigNode-" + iconCount;
          // parentNode.addChild(this.bigNode);
          // this.bigNode.setWorldPosition(pos);
          // this.bigNode.setScale(new Vec3(1, this.getBigNodeScaleY(iconCount)))
        }
        /**还原倍率图标和scatter图标 */


        resetFaceAnimationNodeOrOdds() {
          this.iconArr.filter(v => v).forEach(v => v.resetFaceAnimationNodeOrOdds());
        }

        hideScatterAnimation() {// this.iconArr.filter(v => v.getId() === IconId.SCATTER).forEach(v => v.hideWin());
        }
        /**消除图标 */


        clearIcon(indexs, roundIndex, done) {
          const timeScale = this.isSpeed ? (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).iconTimeScaleSpeed : (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).iconTimeScaleCommon;

          if (this.node.isValid) {
            let count = 0;
            indexs.forEach(index => {
              const icon = this.iconArr[index];
              icon.playWin(this.propertyNode.props_big_icon, roundIndex, timeScale, true, false, () => {
                this.iconArr[index] = null;
                count++;

                if (count >= indexs.length) {
                  done && done();
                }
              });
            });
          }
        }
        /**播放scatter的动画，然后进入小游戏弹窗 */


        playScatterAnimation(done) {
          const scatterIcons = [];

          for (let i = 0; i < this.showIconCount; i++) {
            const icon = this.iconArr[i];

            if (icon && icon.isScatterIcon()) {
              scatterIcons.push(icon);
            }
          }

          if (scatterIcons.length === 0) {
            done && done();
            return;
          }

          const timeScale = this.isSpeed ? (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).iconTimeScaleSpeed : (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).iconTimeScaleCommon;
          let count = 0;
          scatterIcons.forEach(icon => {
            icon.playWin(this.propertyNode.props_big_icon, 0, timeScale, false, false, () => {
              count++;

              if (count >= scatterIcons.length) {
                done && done();
              }
            });
          });
        }

        rollOverHandle(rollerLaunchResult) {
          // console.log("roller over handle stop time " + this.sendBetTime, this.columnIndex);
          this.isRoll = false;
          this.stopIconIndex = -1; // if (this.isSpeed) {
          // 	thorv2_Audio.playOneShot(SoundPathDefine.QUICK_STOP)
          // } else {
          // 	thorv2_Audio.playOneShot(SoundPathDefine.DROP_BOTTOM)
          // }
          // 滚动停止之后需要延迟的时间

          const time = 0.05;
          this.events.onCheckNextLeftCount(); // const time = 0.05;

          this.scheduleOnce(() => {
            this.node.isValid && this.rollOverCallback();
          }, time);
        }

        getIconDropTime() {
          return (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.iconDropTime;
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

          if (index >= this.showIconCount) {
            y += 20;
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
          let rollerWidth = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.rollerWidth;

          if (gameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).SUBGAME1) {
            rollerHeight = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).subGameRollOption.rollerHeight;
            rollerWidth = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).subGameRollOption.rollerWidth;
          }

          if (this.columnIndex === 0) {
            rollerWidth = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).normalRollOption.rollerWidth0;
          } else if (this.columnIndex === 5) {
            rollerWidth = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
              error: Error()
            }), config) : config).normalRollOption.rollerWidth5;
          }

          const uiTransform = this.propertyNode.props_icon_list.getComponent(UITransform);
          uiTransform.height = rollerHeight;
          uiTransform.width = rollerWidth;
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
        /**清空所有图标 */


        clearAllIcon(isDelay, done) {
          this.unscheduleAllCallbacks();
          Tween.stopAllByTag(TWEEN_ICON_TAG);
          const columnDelayTime = isDelay ? this.columnIndex * 0.01 : 0;
          let count = 0;
          this.scheduleOnce(() => {
            const icons = this.iconArr.filter(v => v);
            this.iconArr.forEach((v, i) => {
              if (v) {
                this.dropIcon(i, v, i, -1, () => {
                  this.iconArr[i] = null;
                  count++;

                  if (count >= icons.length) {
                    done && done();
                  }
                }, isDelay);
              }
            });
          }, columnDelayTime);
        }

        addIcon(done) {
          const isDelay = !this.isSpeed;
          let startIndex = this.getFirstEmptyIconIndex();

          if (startIndex === -1) {
            done && done();
            return;
          }

          this.unscheduleAllCallbacks();
          Tween.stopAllByTag(TWEEN_ICON_TAG); // 需要填充的索引

          const fillIndexs = [];
          const fillIcons = [];

          for (let i = startIndex; i < this.showIconCount; i++) {
            fillIndexs.push(i);

            for (let j = startIndex + 1; j < this.iconArr.length; j++) {
              const element = this.iconArr[j];

              if (element && !fillIcons.find(v => v.index === j)) {
                fillIcons.push({
                  icon: element,
                  index: j
                });
                break;
              }
            }
          }

          const time = isDelay ? this.columnIndex * 0.05 : 0;
          let count = 0;
          /**所有动画播放结束之后的处理 */

          const executeOver = () => {
            count++;

            if (count >= fillIndexs.length) {
              done && done();
            }
          };

          this.scheduleOnce(() => {
            fillIndexs.forEach((fillIndex, i) => {
              const nextIndex = fillIndex;
              const {
                icon,
                index
              } = fillIcons[i];
              const iconObj = icon;

              if (iconObj.isOddsIcon()) {
                const oddsValue = this.getOdds(nextIndex, iconObj.getId(), this.rollerLaunchResult);

                if (oddsValue) {
                  iconObj.setOddsIcon(oddsValue);
                }

                (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
                  error: Error()
                }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                  error: Error()
                }), SoundPathDefine) : SoundPathDefine).WILD_SHOW);
              } // console.log(`addIcon index:${index} nextIndex:${nextIndex}`);


              this.dropIcon(i, iconObj, index, nextIndex, () => {
                this.iconArr[index] = null;
                this.iconArr[nextIndex] = iconObj;
                iconObj.setIconIndex(nextIndex);

                if (this.deleteWaitPlayAnimationIcon(iconObj.getId())) {
                  if (iconObj.isScatterIcon()) {
                    (_crd && thorv2_Audio === void 0 ? (_reportPossibleCrUseOfthorv2_Audio({
                      error: Error()
                    }), thorv2_Audio) : thorv2_Audio).playOneShot((_crd && SoundPathDefine === void 0 ? (_reportPossibleCrUseOfSoundPathDefine({
                      error: Error()
                    }), SoundPathDefine) : SoundPathDefine).SCATTER_SHOW);
                  }

                  iconObj.playWin(this.propertyNode.props_big_icon, 0, 1, false, false);
                  iconObj.playLabelRate(this.propertyNode.props_number);
                  this.scheduleOnce(() => {
                    executeOver();
                  }, 0.2);
                } else {
                  executeOver();
                }
              }, isDelay);
            });
          }, time);
        }

        deleteWaitPlayAnimationIcon(id) {
          for (let i = 0; i < this.waitPlayAnimationIcon.length; i++) {
            const element = this.waitPlayAnimationIcon[i];

            if (element === id) {
              this.waitPlayAnimationIcon.splice(i, 1);
              return true;
            }
          }

          return false;
        }

        addNewIcon() {
          let index = -1;
          const newIcon = this.newIcon();

          for (let i = this.showIconCount; i < this.iconArr.length; i++) {
            const element = this.iconArr[i];

            if (!element) {
              this.iconArr[i] = newIcon;
              index = i;
              break;
            }
          }

          if (index === -1) {
            this.iconArr.push(newIcon);
            index = this.iconArr.length - 1;
          }

          newIcon.setPosition(this.getIconPosByIndex(index));

          if (newIcon.isOddsIcon()) {
            this.dispatch((_crd && playThorAnimation === void 0 ? (_reportPossibleCrUseOfplayThorAnimation({
              error: Error()
            }), playThorAnimation) : playThorAnimation)({
              time: Date.now(),
              timeScale: this.isSpeed ? (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).iconTimeScaleSpeed : (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
                error: Error()
              }), config) : config).iconTimeScaleCommon
            }));
            this.waitPlayAnimationIcon.push(newIcon.getId());
          } else if (newIcon.isScatterIcon()) {
            this.waitPlayAnimationIcon.push(newIcon.getId());
          }

          return {
            icon: newIcon,
            index
          };
        }
        /**获得第一个空图标位置 */


        getFirstEmptyIconIndex() {
          for (let i = 0; i < this.showIconCount; i++) {
            if (!this.iconArr[i]) {
              return i;
            }
          }

          return -1;
        }
        /**
         * 掉落图标
         * @param icon 
         * @param curIndex 图标当前位置
         * @param nextindex -1表示直接隐藏图标
         * @param done 
         * @param isDelay 
         */


        dropIcon(orderIndex, icon, curIndex, nextindex, done, isDelay = false) {
          const rowDelayTime = orderIndex * 0.02;
          const delayTime = isDelay ? this.columnIndex * 0.1 + rowDelayTime : 0;
          const pos = nextindex === -1 ? this.getIconHidePos(icon.getPosition()) : this.getIconPosByIndex(nextindex);
          const dropTime = this.getIconDropTime();

          if (icon.isOddsIcon() && nextindex >= 0) {
            this.playLightning(pos, icon, delayTime + dropTime);
          }

          let opts = undefined;

          if (nextindex >= 0) {// opts = {
            // 	easing: 'backOut',
            // }
          }

          const tw = tween(icon.getNode()).tag(TWEEN_ICON_TAG).delay(delayTime).to(dropTime, {
            position: new Vec3(pos.x, pos.y)
          }, opts);

          if (nextindex >= 0) {
            // tw.to(0.08, { position: new Vec3(pos.x, pos.y + 8, 1) }, { easing: 'sineOut' }) // 初次回弹向上
            // tw.to(0.05, { position: new Vec3(pos.x, pos.y, 1) }, { easing: 'sineIn' }) // 最终回到原位
            tw.to(0.05, {
              position: new Vec3(pos.x, pos.y - 25, 1)
            }, {
              easing: 'sineOut'
            }); // 初次回弹向上

            tw.to(0.05, {
              position: new Vec3(pos.x, pos.y, 1)
            }, {
              easing: 'sineIn'
            }); // 最终回到原位
          }

          tw.call(() => {
            if (nextindex === -1) {
              icon.restore();
            }

            done && done(); // console.log(`dropIcon icon:${icon.getId()} curIndex:${curIndex} nextindex:${nextindex},pos:${pos}`);
          }).start();
        }
        /**出生位置 */


        geticonBirthPos() {
          let y = this.getIconContainerAnchorPos() + (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.singleRollerHeight;
          let pos = new Vec3();
          pos.y += y;
          return pos;
        }
        /**所有图标隐藏的位置 */


        getIconHidePos(startPos) {
          // let y = this.getIconContainerAnchorPos() + config.normalRollOption.singleRollerHeight;
          const iconListUI = this.propertyNode.props_icon_list.getComponent(UITransform);
          let pos = new Vec3(startPos.x, startPos.y);
          pos.y -= iconListUI.height;
          return pos;
        }
        /**播放数字 */


        playAmount(indexs, amount) {
          // console.log(`playAmount columnIndex:${this.columnIndex}, indexs ${indexs} amount:${amount}`)
          let startIndex = 0;
          const middleIndex = Math.floor(this.showIconCount / 2);
          const indexsTemp = indexs.map(v => v + '');

          for (let i = 0; i < this.showIconCount; i++) {
            const leftIndex = middleIndex - startIndex;
            const rightIndex = middleIndex + startIndex;

            if (leftIndex < 0 || rightIndex >= this.showIconCount) {
              break;
            }

            if (indexsTemp.find(v => v === leftIndex + '')) {
              this.iconArr[leftIndex].playAmount(this.propertyNode.props_number, amount);
              break;
            }

            if (indexsTemp.find(v => v === rightIndex + '')) {
              this.iconArr[rightIndex].playAmount(this.propertyNode.props_number, amount);
              break;
            }

            startIndex++;
          }
        }
        /**获得中间位置排序 */


        getMiddleOrder(indexs) {
          if (indexs.length === 0) {
            return 99;
          }

          const middleColumnIndex = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).columnCount % 2 === 0 ? ((_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).columnCount - 1) / 2 : (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).columnCount / 2;
          let order = Math.abs(middleColumnIndex - this.columnIndex) * 5;
          let startIndex = 0;
          const middleIndex = Math.floor(this.showIconCount / 2);
          const indexsTemp = indexs.map(v => v + '');

          for (let i = 0; i < this.showIconCount; i++) {
            const leftIndex = middleIndex - startIndex;
            const rightIndex = middleIndex + startIndex;

            if (indexsTemp.find(v => v === leftIndex + '')) {
              order += startIndex;
              break;
            }

            if (indexsTemp.find(v => v === rightIndex + '')) {
              order += startIndex;
              break;
            }

            startIndex++;
          } // console.log(`playAmount columnIndex:${this.columnIndex}, indexs ${indexs} order:${order}, middleColumnIndex:${middleColumnIndex}`)


          return order;
        }

        isIconType(index, iconId) {
          return this.iconArr[index].getId() === iconId;
        }
        /**播放闪电 */


        playLightning(endPos, icon, time) {
          if (icon.isLightningIcon()) {
            return;
          }

          let an = "sd_red";

          if (icon.getId() === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).ODDS_ICON_BLUE) {
            an = 'sd_blue';
          } else if (icon.getId() === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).ODDS_ICON_GREEN) {
            an = 'sd_green';
          } else if (icon.getId() === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).ODDS_ICON_PURPLE) {
            an = 'sd_purple';
          } else if (icon.getId() === (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).ODDS_ICON_RED) {
            an = 'sd_red';
          }

          time += (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.lightningDetryShowTime;
          icon.setPlayLightning(true);
          this.scheduleOnce(() => {
            // this.props_shandian_iconSk.node.active = true;
            // this.props_shandian_iconSk.node.setPosition(endPos);
            // this.props_shandian_iconSk.setAnimation(0, an, false);
            this.playLightningAnimation(an, endPos);
          }, time);
        }

        playLightningAnimation(an, endPos) {
          const topNode = (_crd && mainViewModel === void 0 ? (_reportPossibleCrUseOfmainViewModel({
            error: Error()
          }), mainViewModel) : mainViewModel).comp.getTopNode();
          this.props_shandian_iconSk.node.active = true;
          this.props_shandian_iconSk.node.removeAllChildren();
          topNode.addChild(this.props_shandian_iconSk.node);
          const worldPos = this.toWorldSpaceAR(this.propertyNode.props_icon_list, endPos);
          endPos = this.toNodeSpaceAR(topNode, worldPos);
          this.props_shandian_iconSk.node.setPosition(endPos);
          this.props_shandian_iconSk.setAnimation(0, an, false);
        }

        toNodeSpaceAR(parent, pos) {
          return parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(pos.x, pos.y));
        }

        toWorldSpaceAR(parent, pos) {
          return parent.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(pos.x, pos.y));
        }
        /**播放倍率节点 */


        playOddsAnimation(done) {
          let totalCount = 0;

          for (let i = 0; i < this.showIconCount; i++) {
            if (this.iconArr[i].isOddsIcon()) {
              totalCount++;
            }
          }

          if (totalCount === 0) {
            done && done();
            return;
          }

          let count = 0;

          for (let i = 0; i < this.showIconCount; i++) {
            const element = this.iconArr[i];

            if (element.isOddsIcon()) {
              element.playOddsIcon(this.propertyNode.props_big_icon, () => {
                count++;

                if (count >= totalCount) {
                  done && done();
                }
              });
            }
          }
        }
        /**获得所有的倍率节点 */


        getOddsLabelNodes() {
          const labelNodes = [];

          for (let i = 0; i < this.showIconCount; i++) {
            if (this.iconArr[i].isOddsIcon()) {
              labelNodes.push(this.iconArr[i]);
            }
          }

          return labelNodes;
        }

        playLabelAnimation(parentNode, endPos, done) {
          const labelNodes = this.getOddsLabelNodes();

          if (labelNodes.length === 0) {
            done && done();
            return;
          }
        }

        getSingleRollerWidth() {
          return this.props.gameTypeInfo.viewGameType === (_crd && GameType === void 0 ? (_reportPossibleCrUseOfGameType({
            error: Error()
          }), GameType) : GameType).MAIN ? (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.singleRollerWidth : (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).subGameRollOption.singleRollerWidth;
        }

        onDestroy() {
          this.isRoll = false;
          this.isWaitAddIcon = false;
        }

        update(deltaTime) {
          if (this.isWaitAddIcon && this.singleRollerStatus === SingleRollerStatus.WAIT) {
            this.isWaitAddIcon = false;
            this.fillIconData();
            this.addIconHandle();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b855012c70e63f531e6f90bda6319c68dc0d506c.js.map