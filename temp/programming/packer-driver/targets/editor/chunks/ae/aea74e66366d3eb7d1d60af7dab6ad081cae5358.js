System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Label, Node, Sprite, SpriteFrame, BaseComponent, bundleCommon, fetcher, global, lang, sourceManageSeletor, ApiUrl, addToastAction, ToastType, SKT_MAG_TYPE, sktInstance, BaseViewModel, EffectType, PrefabPathDefine, _dec, _class, _crd, ccclass, property, Hall_PC_BackWater;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbundleCommon(extras) {
    _reporterNs.report("bundleCommon", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOffetcher(extras) {
    _reporterNs.report("fetcher", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOflang(extras) {
    _reporterNs.report("lang", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsourceManageSeletor(extras) {
    _reporterNs.report("sourceManageSeletor", "../../index", _context.meta, extras);
  }

  function _reportPossibleCrUseOfApiUrl(extras) {
    _reporterNs.report("ApiUrl", "../../apiUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaddToastAction(extras) {
    _reporterNs.report("addToastAction", "../../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToastType(extras) {
    _reporterNs.report("ToastType", "../../store/actions/baseBoard", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHall_WaterHelp(extras) {
    _reporterNs.report("Hall_WaterHelp", "../Hall_WaterHelp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHHIState(extras) {
    _reporterNs.report("HHIState", "../Hall_WaterHelp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHHIprops(extras) {
    _reporterNs.report("HHIprops", "../Hall_WaterHelp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHHIEvent(extras) {
    _reporterNs.report("HHIEvent", "../Hall_WaterHelp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSKT_MAG_TYPE(extras) {
    _reporterNs.report("SKT_MAG_TYPE", "../../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsktInstance(extras) {
    _reporterNs.report("sktInstance", "../../socketConnect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInitStateType(extras) {
    _reporterNs.report("InitStateType", "../../store/actions/memberInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseViewModel(extras) {
    _reporterNs.report("BaseViewModel", "../../viewModel/BaseViewModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectType(extras) {
    _reporterNs.report("EffectType", "../../../utils/NodeIOEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrefabPathDefine(extras) {
    _reporterNs.report("PrefabPathDefine", "../../sourceDefine/prefabDefine", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      bundleCommon = _unresolved_3.bundleCommon;
      fetcher = _unresolved_3.fetcher;
      global = _unresolved_3.global;
      lang = _unresolved_3.lang;
      sourceManageSeletor = _unresolved_3.sourceManageSeletor;
    }, function (_unresolved_4) {
      ApiUrl = _unresolved_4.ApiUrl;
    }, function (_unresolved_5) {
      addToastAction = _unresolved_5.addToastAction;
      ToastType = _unresolved_5.ToastType;
    }, function (_unresolved_6) {
      SKT_MAG_TYPE = _unresolved_6.SKT_MAG_TYPE;
      sktInstance = _unresolved_6.sktInstance;
    }, function (_unresolved_7) {
      BaseViewModel = _unresolved_7.default;
    }, function (_unresolved_8) {
      EffectType = _unresolved_8.EffectType;
    }, function (_unresolved_9) {
      PrefabPathDefine = _unresolved_9.PrefabPathDefine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2ce86pRzsZLELtTfSSjJG1J", "Hall_PC_BackWater", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EditBox', 'Label', 'Node', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Hall_PC_BackWater", Hall_PC_BackWater = (_dec = ccclass('Hall_PC_BackWater'), _dec(_class = class Hall_PC_BackWater extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.propertyNode = {
            /**可提返水 */
            props_label_water_pro: new Label(),
            //

            /**有效下注 */
            props_label_sisa: new Label(),

            /**返水比例 */
            props_label_skalaSaat: new Label(),

            /**洗码数 */
            props_label_jumlah: new Label(),

            /**返水的vip级别 */
            props_water_spr_vip: new Sprite(),

            /**确认抽取返水 */
            props_water_cuci: new Button(),

            /**返水置灰覆盖节点 */
            props_spr_word_cuci: new Node(),

            /**返水最小值说明 */
            props_Label_lorem: new Label(),

            /**返水说明 */
            props_btn_ratio_help: new Button()
          };
          this.props = {
            memberInfo: null
          };
          this.events = {};
        }

        start() {}

        initState() {
          return {};
        }

        bindEvent() {
          /**确认提取返水 */
          this.propertyNode.props_water_cuci.node.on(Node.EventType.TOUCH_END, () => {
            (_crd && fetcher === void 0 ? (_reportPossibleCrUseOffetcher({
              error: Error()
            }), fetcher) : fetcher).send((_crd && ApiUrl === void 0 ? (_reportPossibleCrUseOfApiUrl({
              error: Error()
            }), ApiUrl) : ApiUrl).DRAW_WATER, {
              type: 1
            }).then(data => {
              (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
                error: Error()
              }), global) : global).hallDispatch((_crd && addToastAction === void 0 ? (_reportPossibleCrUseOfaddToastAction({
                error: Error()
              }), addToastAction) : addToastAction)({
                content: (_crd && lang === void 0 ? (_reportPossibleCrUseOflang({
                  error: Error()
                }), lang) : lang).write(k => k.BaseBoardModule.operateDone, {}, {
                  placeStr: "操作完成"
                }),
                type: (_crd && ToastType === void 0 ? (_reportPossibleCrUseOfToastType({
                  error: Error()
                }), ToastType) : ToastType).SUCCESS
              }));
              (_crd && sktInstance === void 0 ? (_reportPossibleCrUseOfsktInstance({
                error: Error()
              }), sktInstance) : sktInstance).sendSktMessage((_crd && SKT_MAG_TYPE === void 0 ? (_reportPossibleCrUseOfSKT_MAG_TYPE({
                error: Error()
              }), SKT_MAG_TYPE) : SKT_MAG_TYPE).MEMBER_INFO, {});
            });
          });
          this.propertyNode.props_btn_ratio_help.node.on(Node.EventType.TOUCH_END, () => {
            const waterHelpViewModel = new (_crd && BaseViewModel === void 0 ? (_reportPossibleCrUseOfBaseViewModel({
              error: Error()
            }), BaseViewModel) : BaseViewModel)("Hall_WaterHelp").mountView((_crd && sourceManageSeletor === void 0 ? (_reportPossibleCrUseOfsourceManageSeletor({
              error: Error()
            }), sourceManageSeletor) : sourceManageSeletor)().getFile((_crd && PrefabPathDefine === void 0 ? (_reportPossibleCrUseOfPrefabPathDefine({
              error: Error()
            }), PrefabPathDefine) : PrefabPathDefine).HELL_WATER_HELP).source).appendTo(this.node, {
              effectType: (_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT1,
              isModal: true
            }).setEvent({
              onCloseHandler: () => waterHelpViewModel.unMount((_crd && EffectType === void 0 ? (_reportPossibleCrUseOfEffectType({
                error: Error()
              }), EffectType) : EffectType).EFFECT2)
            });
          });
        }

        useProps(key, value) {
          if (key === "memberInfo") {
            if (!this.props.memberInfo.memberId) return;
            const memberInfoNew = value.cur;
            (_crd && bundleCommon === void 0 ? (_reportPossibleCrUseOfbundleCommon({
              error: Error()
            }), bundleCommon) : bundleCommon).load(`resource/vip/b_VIP${memberInfoNew.vipLevel}/spriteFrame`, SpriteFrame, (err, sp) => {
              !err && this.propertyNode && (this.propertyNode.props_water_spr_vip.spriteFrame = sp);
            });
            this.propertyNode.props_label_water_pro.string = this.props.memberInfo.memberRechargeWater.formatAmountWithCommas();
            this.propertyNode.props_label_sisa.string = this.props.memberInfo.totalFlowingWater.formatAmountWithCommas();
            this.propertyNode.props_label_jumlah.string = this.props.memberInfo.totalReturnWaterAmount.formatAmountWithCommas();
            this.propertyNode.props_label_skalaSaat.string = this.props.memberInfo.rebateScale * 10000 + '';
            this.propertyNode.props_Label_lorem.string = this.propertyNode.props_Label_lorem.string.replace('0', this.props.memberInfo.minimumWithdrawal.formatAmountWithCommas());
            /**如果抽数值小于最小返水线，就置灰 */

            this.propertyNode.props_spr_word_cuci.active = this.props.memberInfo.minimumWithdrawal > this.props.memberInfo.memberRechargeWater;
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
//# sourceMappingURL=aea74e66366d3eb7d1d60af7dab6ad081cae5358.js.map