System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Vec3, BaseComponent, config, GameType, getColumnLockIconArr, IconId, cacheData, _dec, _class, _crd, ccclass, property, DragonV2_SingleIconRoller;

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
      cacheData = _unresolved_5.cacheData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5846bihPCZDj64r47/o+LD7", "DragonV2_SingleIconRoller", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Mask', 'Node', 'sp', 'tween', 'UITransform', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DragonV2_SingleIconRoller", DragonV2_SingleIconRoller = (_dec = ccclass('DragonV2_SingleIconRoller'), _dec(_class = class DragonV2_SingleIconRoller extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          /**当前最后添加的图标索引位置 */
          this.lastIndex = 0;

          /**显示图标数量 */
          this.showIconCount = 1;

          /**停止图标索引 */
          this.stopIconIndex = -1;

          /**列的索引 */
          this.columnIndex = 0;

          /**插槽索引 */
          this.slotIndex = 0;

          /**图标池 */
          this.iconPool = void 0;

          /**图标轮播队列 */
          this.iconRollerQueue = void 0;

          /**滚轴上的图标，包含看不见的 */
          this.iconArr = [];

          /**图标间隔 */
          this.intervalHeight = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).normalRollOption.intervalHeight;

          /**滚动结束回调方法 */
          this.rollOverCallback = void 0;

          /**列特效层 */
          this.props_column_effect_node = void 0;

          /**图标动画层节点 */
          this.iconAnimationNode = void 0;
          this.isRoll = false;
          this.rollCount = 0;
          this.rollerSpeed = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).subGameRollOption.rollerSpeed;
          this.propertyNode = {
            props_icon_list: new Node()
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
            }
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        setColumnEffectNode(props_column_effect_node) {
          this.props_column_effect_node = props_column_effect_node;
          this.iconAnimationNode = this.props_column_effect_node.getChildByName("props_icon_animation");
        }

        initSlot(columnIndex, slotIndex, lastIndex, iconPool) {
          this.columnIndex = columnIndex;
          this.iconRollerQueue = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).iconRollerQueue[this.columnIndex];
          this.slotIndex = slotIndex;
          this.lastIndex = this.addIconIndex(lastIndex, 1);
          this.iconPool = iconPool;
          this.initColumn(this.showIconCount + 1);
        }

        getSlotIndex() {
          return this.slotIndex;
        }

        initColumn(iconCount) {
          for (let i = 0; i < iconCount; i++) {
            this.joinIcon();
          }
        }

        joinIcon() {
          const length = this.iconArr.length;
          this.lastIndex = this.lastIndex - 1 < 0 ? this.iconRollerQueue.length - 1 : --this.lastIndex;
          const iconId = this.iconRollerQueue[this.lastIndex];
          const iconConfig = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).icon.find(v => v.id === iconId);
          const icon = this.iconPool.getIcon(iconConfig, this.propertyNode.props_icon_list, this.lastIndex);
          const position = new Vec3(0, 0);

          if (iconConfig.id === 12) {
            icon.amountNode.active = true;
            icon.changeIcon(true);
          }

          if (length > 0) {
            const lastNode = this.iconArr[length - 1];
            position.y = lastNode.getPosition().y + lastNode.getHeight() + this.intervalHeight;
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

          const diff = this.calIndexDiff(this.lastIndex, this.stopIconIndex);

          if (diff > 1) {
            return;
          }

          const lockIconDatas = (_crd && getColumnLockIconArr === void 0 ? (_reportPossibleCrUseOfgetColumnLockIconArr({
            error: Error()
          }), getColumnLockIconArr) : getColumnLockIconArr)((_crd && cacheData === void 0 ? (_reportPossibleCrUseOfcacheData({
            error: Error()
          }), cacheData) : cacheData).fixedChessboardIcon, this.columnIndex);

          if (lockIconDatas.length === 0) {
            return;
          }

          const lockIconData = lockIconDatas.find(v => v.index === this.slotIndex);

          if (lockIconData) {
            icon.setAmount(lockIconData.amount);
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

        useProps(key, value) {}
        /**隐藏图标中奖效果 */


        hideIconWin() {
          this.stopWinIcon();
          this.iconAnimationNode.children.forEach(v => {
            v.name === 'bigNode' && v.destroy();
          });
          this.iconAnimationNode.removeAllChildren();
        }

        startRoll() {
          this.isRoll = true;
          this.rollCount = 0;
          this.rollerSpeed = (_crd && config === void 0 ? (_reportPossibleCrUseOfconfig({
            error: Error()
          }), config) : config).subGameRollOption.rollerSpeed;
        }

        stopRoll(stopIconIndex, rollOverCallback) {
          this.stopIconIndex = stopIconIndex;
          this.rollOverCallback = rollOverCallback;
          const diff = this.slotIndex === 2 ? 0 : this.slotIndex === 0 ? 2 : 1;
          this.stopIconIndex = this.addIconIndex(this.stopIconIndex, diff);
          this.addLastJoinIconIndex(this.stopIconIndex, 3);
          console.log(`stopRoll--- columnIndex:${this.columnIndex},slotIndex:${this.slotIndex},stopIconIndex:${this.stopIconIndex}, lastIndex:${this.lastIndex}`);
        }

        addLastJoinIconIndex(stopIndex, value) {
          this.lastIndex = this.addIconIndex(stopIndex, value);
        }

        addIconIndex(index, value) {
          let newValue = index + value;

          if (newValue >= this.iconRollerQueue.length) {
            newValue = newValue - this.iconRollerQueue.length;
          }

          return newValue;
        }

        getStopIconIndex() {
          return this.stopIconIndex;
        }

        bindUI() {}
        /**获得滚动速度 */


        getRollSpeed() {
          if (this.rollCount <= 30 || this.stopIconIndex === -1) {
            // this.rollCount >= 60 && this.addLastJoinIconIndex(this.stopIconIndex, 1)
            return this.rollerSpeed;
          }

          let rollerSpeed = this.rollerSpeed;

          if (this.rollCount % 5 === 0) {
            rollerSpeed -= 5;
            rollerSpeed = rollerSpeed <= 0 ? 1 : rollerSpeed;
            this.rollerSpeed = rollerSpeed;
          } // console.log(`columnIndex:${this.columnIndex},slotIndex:${this.slotIndex},rollCount:${this.rollCount},lastIndex:${this.lastIndex},stopIconIndex:${this.stopIconIndex},rollerSpeed:${rollerSpeed}`);


          return rollerSpeed;
        }
        /**停止赢的图标闪烁 */


        stopWinIcon() {
          this.iconArr.forEach(v => v.hideWin());
        }
        /**播放中奖图标动画 */


        playWinIcon(index) {
          const icon = this.iconArr[index];
          console.log("playWinIcon", index, this.columnIndex, '++++++++++'); // 如果是WILD图标，并且合并了图标，就不在显示边框了

          if (icon.getId() !== (_crd && IconId === void 0 ? (_reportPossibleCrUseOfIconId({
            error: Error()
          }), IconId) : IconId).WILD) {
            icon.playWin(this.iconAnimationNode);
          }
        }

        rollOverHandle(endIcon) {
          this.scheduleOnce(() => {
            this.node.isValid && this.rollOverCallback();
          }, 0.05);
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
        /**获得第一个图标 */


        getFirstIcon() {
          return this.iconArr.shift();
        }

        rollerIcon() {
          this.rollCount++;
          const speed = this.getRollSpeed();
          this.iconArr.forEach(v => {
            v.setPosition(new Vec3(v.getPosition().x, v.getPosition().y - speed));
          });
          const frist = this.iconArr[0];
          const hideY = -(frist.getHeight() + this.intervalHeight); // console.log(`columnIndex:${this.columnIndex},slotIndex:${this.slotIndex},lastIndex:${this.lastIndex},stopIconIndex:${this.stopIconIndex},y:${frist.getPosition().y},hideY:${hideY}`);

          if (frist.getPosition().y <= hideY) {
            this.iconArr.shift();
            frist.restore();
            this.joinIcon();
            const endIcon = this.iconArr[0];

            if (endIcon.getIconIndex() === this.getStopIconIndex()) {
              this.isRoll = false;
              this.stopIconIndex = -1;
              this.rollOverHandle(endIcon);
            }
          }
        }

        onDestroy() {
          this.iconArr.forEach(v => v.restore());
          this.iconArr = [];
          this.iconRollerQueue = null;
          this.props_column_effect_node = null;
          this.iconAnimationNode = null;
        }

        update(deltaTime) {
          if (this.isRoll) {
            this.rollerIcon();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c173b4f294f88e804d58a9548cf928b0d2826690.js.map