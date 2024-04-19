System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, instantiate, Label, Node, Sprite, BaseComponent, BetType, SpriteFramePathDefine, sourceManageSeletor, playBtnClick, _dec, _class, _crd, ccclass, property, Yxx_HistoryMax;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnimationStatus(extras) {
    _reporterNs.report("AnimationStatus", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBetType(extras) {
    _reporterNs.report("BetType", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResult(extras) {
    _reporterNs.report("Result", "../type", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteFramePathDefine(extras) {
    _reporterNs.report("SpriteFramePathDefine", "../sourceDefine/spriteDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplayBtnClick(extras) {
    _reporterNs.report("playBtnClick", "../index", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      BetType = _unresolved_3.BetType;
    }, function (_unresolved_4) {
      SpriteFramePathDefine = _unresolved_4.SpriteFramePathDefine;
    }, function (_unresolved_5) {
      sourceManageSeletor = _unresolved_5.sourceManageSeletor;
    }, function (_unresolved_6) {
      playBtnClick = _unresolved_6.playBtnClick;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0c5beeEh3lKuYAdex0pFjM7", "Yxx_HistoryMax", undefined);

      __checkObsolete__(['_decorator', 'Button', 'instantiate', 'Label', 'log', 'Node', 'Sprite', 'SpriteFrame', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Yxx_HistoryMax", Yxx_HistoryMax = (_dec = ccclass('Yxx_HistoryMax'), _dec(_class = class Yxx_HistoryMax extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            props_btn_history_close: new Button(),
            props_history_list: new Node(),
            props_history_group: new Node(),
            props_spr_result: new Node(),
            props_label_shrimp_count: new Label(),
            props_label_gourd_count: new Label(),
            props_label_deer_count: new Label(),
            props_label_chook_count: new Label(),
            props_label_crab_count: new Label(),
            props_label_fish_count: new Label()
          };
          this.props = {
            results: [],
            newResult: null,
            animationStatus: null
          };
          this.events = {
            close: () => {}
          };
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          this.propertyNode.props_btn_history_close.node.on(Node.EventType.TOUCH_END, () => {
            (_crd && playBtnClick === void 0 ? (_reportPossibleCrUseOfplayBtnClick({
              error: Error()
            }), playBtnClick) : playBtnClick)();
            this.events.close();
          });
        }

        createResult(result, index, isAdd = false) {
          const groupNode = instantiate(this.propertyNode.props_history_group);
          groupNode.active = true;
          groupNode.getChildByName("spr_history_newBg").active = index === 0;
          const resultListNode = groupNode.getChildByName("result_list");
          resultListNode.removeAllChildren();
          isAdd ? this.propertyNode.props_history_list.insertChild(groupNode, 0) : this.propertyNode.props_history_list.addChild(groupNode);
          result.betTypes.forEach(v => {
            const node = instantiate(this.propertyNode.props_spr_result);
            resultListNode.addChild(node);
            node.getComponent(Sprite).spriteFrame = this.getSpriteFrame(v);
          });
        }

        hideHistoryNewBg() {
          this.propertyNode.props_history_list.children.forEach(v => {
            v.getChildByName("spr_history_newBg").active = false;
          });
        }

        getSpriteFrame(betType) {
          let fileName = '';

          if (betType === (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).SHRIMP) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).HISTORY_MIN_BIG1;
          } else if (betType === (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).GOURD) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).HISTORY_MIN_BIG2;
          } else if (betType === (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).DEER) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).HISTORY_MIN_BIG3;
          } else if (betType === (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).CHOOK) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).HISTORY_MIN_BIG4;
          } else if (betType === (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).CRAB) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).HISTORY_MIN_BIG5;
          } else if (betType === (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).FISH) {
            fileName = (_crd && SpriteFramePathDefine === void 0 ? (_reportPossibleCrUseOfSpriteFramePathDefine({
              error: Error()
            }), SpriteFramePathDefine) : SpriteFramePathDefine).HISTORY_MIN_BIG6;
          }

          return (_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
            error: Error()
          }), sourceManageSeletor) : sourceManageSeletor)().getFile(fileName).source;
        }

        getCountLabel(betType) {
          if (betType === (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).SHRIMP) {
            return this.propertyNode.props_label_shrimp_count;
          } else if (betType === (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).GOURD) {
            return this.propertyNode.props_label_gourd_count;
          } else if (betType === (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).DEER) {
            return this.propertyNode.props_label_deer_count;
          } else if (betType === (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).CHOOK) {
            return this.propertyNode.props_label_chook_count;
          } else if (betType === (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).CRAB) {
            return this.propertyNode.props_label_crab_count;
          } else if (betType === (_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).FISH) {
            return this.propertyNode.props_label_fish_count;
          }
        }

        collectResultCount(result) {
          if (!result) {
            return;
          }

          const counts = new Array(7).fill(0).map(() => 0);
          this.props.results.forEach(result => {
            result.betTypes.forEach(type => {
              counts[type]++;
            });
          });
          this.propertyNode.props_label_shrimp_count.string = counts[(_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).SHRIMP] + "";
          this.propertyNode.props_label_gourd_count.string = counts[(_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).GOURD] + "";
          this.propertyNode.props_label_deer_count.string = counts[(_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).DEER] + "";
          this.propertyNode.props_label_chook_count.string = counts[(_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).CHOOK] + "";
          this.propertyNode.props_label_crab_count.string = counts[(_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).CRAB] + "";
          this.propertyNode.props_label_fish_count.string = counts[(_crd && BetType === void 0 ? (_reportPossibleCrUseOfBetType({
            error: Error()
          }), BetType) : BetType).FISH] + "";
        }

        useProps(key, value) {
          if (key === 'results') {
            this.propertyNode.props_history_list.removeAllChildren();
            this.collectResultCount(value.cur);
            [...value.cur].reverse().forEach((v, index) => {
              this.createResult(v, index);
            }); // } else if (key === 'animationStatus') {
            // 	if (value.cur === AnimationStatus.KAI_GAI) {
            // 		this.hideHistoryNewBg();
            // 		this.createResult(this.props.newResult, 0, true);
            // 	}
          }
        }

        bindUI() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dfb30644ab98008293d28c3bbb080b3e1e1f3dce.js.map