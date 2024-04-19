System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, Sprite, BaseComponent, getNodeByNameDeep, SpriteFramePathDefine, playBtnClick, sourceManageSelector, _dec, _class, _crd, ccclass, property, Bandar_history;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetNodeByNameDeep(extras) {
    _reporterNs.report("getNodeByNameDeep", "../../../utils/tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteFramePathDefine(extras) {
    _reporterNs.report("SpriteFramePathDefine", "../sourceDefine/spriteDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayBtnClick(extras) {
    _reporterNs.report("playBtnClick", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSelector(extras) {
    _reporterNs.report("sourceManageSelector", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStatistik(extras) {
    _reporterNs.report("Statistik", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHistory(extras) {
    _reporterNs.report("History", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoker(extras) {
    _reporterNs.report("Roker", "../store/actions/history", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      getNodeByNameDeep = _unresolved_3.getNodeByNameDeep;
    }, function (_unresolved_4) {
      SpriteFramePathDefine = _unresolved_4.SpriteFramePathDefine;
    }, function (_unresolved_5) {
      playBtnClick = _unresolved_5.playBtnClick;
      sourceManageSelector = _unresolved_5.sourceManageSelector;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "291f85NvNBKVKDEOjKe5Oi9", "Bandar_history", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Label', 'Node', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bandar_history", Bandar_history = (_dec = ccclass('Bandar_history'), _dec(_class = class Bandar_history extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_content: new Node(),
            props_spr_new_bg: new Node(),
            props_layout_other_history: new Node(),
            props_history_bg_off: new Node(),
            props_Toggle1: new Node(),
            props_Toggle2: new Node(),
            props_Toggle3: new Node()
          };
          this.props = {
            tren: null,
            statistik: null,
            rekor: null
          };
          this.events = {
            onClosePanel: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_Toggle1.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
          });
          this.propertyNode.props_Toggle2.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
          });
          this.propertyNode.props_Toggle3.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
          });
          this.propertyNode.props_history_bg_off.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.events.onClosePanel();
          });
        }

        useProps(key, value) {
          if (key === "tren") {
            this.createHistoryTr(value.cur);
          }

          if (key === "statistik") {
            this.createHistorySta(value.cur);
          }

          if (key === "rekor") {
            this.createHistoryRok(value.cur);
          }
        }
        /**创建历史记录tren */


        createHistoryTr(tren) {
          this.propertyNode.props_content.removeAllChildren();
          tren.forEach((item, index) => {
            let historyItem;

            if (index === 0) {
              historyItem = instantiate(this.propertyNode.props_spr_new_bg);
              let spr_allMark = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("spr_allMark", historyItem).getComponent(Sprite);
              spr_allMark.spriteFrame = (_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
                error: Error()
              }), sourceManageSelector) : sourceManageSelector)().getFile((_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
                error: Error()
              }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_HISTORY_BARU).source;
            } else {
              historyItem = instantiate(this.propertyNode.props_layout_other_history);
              let spr_allMark = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
                error: Error()
              }), getNodeByNameDeep) : getNodeByNameDeep)("spr_allMark", historyItem);
              spr_allMark.getComponent(Sprite).spriteFrame = item.semua > 0 ? this.getWinLossSpriteFrame(item.semua) : this.getWinLossSpriteFrame(1);
              spr_allMark.active = item.semua > 0;
            }

            historyItem.setPosition(0, -34 - index * 53);
            let black = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("spr_history_black", historyItem).getComponent(Sprite);
            let red = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("spr_history_red", historyItem).getComponent(Sprite);
            let plum = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("spr_history_plum", historyItem).getComponent(Sprite);
            let diamond = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("spr_history_diamond", historyItem).getComponent(Sprite);
            black.spriteFrame = this.getSpriteFrame(item.black);
            red.spriteFrame = this.getSpriteFrame(item.red);
            plum.spriteFrame = this.getSpriteFrame(item.plum);
            diamond.spriteFrame = this.getSpriteFrame(item.diamond);
            this.propertyNode.props_content.addChild(historyItem);
          });
        }
        /**创建历史记录statistilk */


        createHistorySta(statistik) {
          statistik.forEach((item, index) => {
            let num = index + 1;
            let label_winRate = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("label_winRate", (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("props_spr_refresh" + num, this.node));
            let label_winMatches = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("label_winMatches", (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("props_spr_refresh" + num, this.node));
            let label_loseMatches = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("label_loseMatches", (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("props_spr_refresh" + num, this.node));
            let tingkatNum = (item.tingkat * 100).toFixed(2);
            label_winRate.getComponent(Label).string = "Tingkat Menang:" + tingkatNum + "%";
            label_winMatches.getComponent(Label).string = "Menang:" + item.menang;
            label_loseMatches.getComponent(Label).string = "Kalah:" + item.kalah;
          });
        }
        /**创建历史记录roker */


        createHistoryRok(roker) {
          for (let key in roker) {
            let item = roker[key];
            let label_num = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("label_num", (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("spr_userRefresh_" + key, this.node));
            let label_num_win = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("label_num_win", (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("spr_userRefresh_" + key, this.node));
            let label_num_lose = (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("label_num_lose", (_crd && getNodeByNameDeep === void 0 ? (_reportPossibleCrUseOfgetNodeByNameDeep({
              error: Error()
            }), getNodeByNameDeep) : getNodeByNameDeep)("spr_userRefresh_" + key, this.node));
            label_num.getComponent(Label).string = item.taruhan + '';
            label_num_win.getComponent(Label).string = item.menang + '';
            label_num_lose.getComponent(Label).string = item.chip + "";
          }
        }

        getSpriteFrame(result) {
          let fileName = '';

          if (result === 1) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_HISTORY_MENANG;
          } else if (result === 2) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_HISTORY_KALAH;
          }

          return (_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile(fileName).source;
        }

        getWinLossSpriteFrame(result) {
          let fileName = '';

          if (result === 1) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_HISTORY_SEMUA_WIN;
          } else if (result === 2) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).BANDAR_HISTORY_SEMUA_LOSS;
          }

          return (_crd && sourceManageSelector === void 0 ? (_reportPossibleCrUseOfsourceManageSelector({
            error: Error()
          }), sourceManageSelector) : sourceManageSelector)().getFile(fileName).source;
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0c42a7df4a0e5f440797aa684ca2e797e2d660a3.js.map