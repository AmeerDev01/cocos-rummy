System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, ProgressBar, BaseComponent, SourceManage, global, GameConfig, _dec, _class, _crd, ccclass, property, Common_LoaderPanel;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../base/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../base/SourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISourceFile(extras) {
    _reporterNs.report("ISourceFile", "../../base/SourceManage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglobal(extras) {
    _reporterNs.report("global", "../../hall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameConfig(extras) {
    _reporterNs.report("GameConfig", "../../config/GameConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      SourceManage = _unresolved_3.default;
    }, function (_unresolved_4) {
      global = _unresolved_4.global;
    }, function (_unresolved_5) {
      GameConfig = _unresolved_5.GameConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9fe7egMqohM6YNejWlC1HlR", "Common_LoaderPanel", undefined);

      __checkObsolete__(['_decorator', 'AssetManager', 'Label', 'Node', 'ProgressBar', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Common_LoaderPanel", Common_LoaderPanel = (_dec = ccclass('Common_LoaderPanel'), _dec(_class = class Common_LoaderPanel extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super();
          this.events = {
            onLoadDone: () => {}
          };
          this.propertyNode = {
            /**进度条节点 */
            props_progressTip: new Label(),
            props_progressBar: new ProgressBar(),
            props_error_log: new Label(),
            props_btn_return: new Node(),
            props_version: new Label()
          };
          this.sourceManageList = [];
          this.props = {
            loadBarType: 1,
            reverseProgress: true,
            versionStr: '-'
          };
          this.t = 0;
        }

        initState(props) {
          return {
            total: 0,
            progress: 0,
            loadingObj: null
          };
        }

        bindEvent() {
          this.propertyNode.props_btn_return.on(Node.EventType.TOUCH_END, () => {
            this.sourceManageList.forEach(sm => sm.stopPreLoad());
            (_crd && global === void 0 ? (_reportPossibleCrUseOfglobal({
              error: Error()
            }), global) : global).closeSubGame({
              isPre: true
            });
          });
        }

        startLoad(bundleList, fileMap) {
          const totalCount = fileMap.filter(i => i.isPreLoad).length;
          let hasDoneCount = 0; // const sourceManageList: Array<SourceManage> = []
          // this.propertyNode.props_error_log.string = "开始加载"

          const self = this;
          bundleList.forEach(bundle => {
            const sourceManage = new (_crd && SourceManage === void 0 ? (_reportPossibleCrUseOfSourceManage({
              error: Error()
            }), SourceManage) : SourceManage)(bundle, fileMap.filter(i => i.bundlePkgName === bundle.name && i.isPreLoad));
            this.sourceManageList.push(sourceManage);
            sourceManage.preLoadAllFiles1((total, doneCount, sourceFileloading) => {
              if (!this.isValid) return;
              hasDoneCount++;
              this.delayShowClose();
              this.setState({
                // loadingObj: sourceFileloading, total, progress: doneCount
                loadingObj: sourceFileloading,
                total: totalCount,
                progress: hasDoneCount
              }); // if (total === doneCount) {

              if (totalCount === hasDoneCount) {
                this.delayShowClose(true); // this.hideCloseBtn();

                this.events && window.setTimeout(() => this.events && this.events.onLoadDone(this.sourceManageList), 1000);
              }
            }, () => {}, this.propertyNode.props_error_log);
          }); // this.sourceManage = new SourceManage(bundle, fileMap)
          // this.sourceManage.preLoadAllFiles1((total: number, doneCount: number, sourceFileloading: ISourceFile) => {
          // 	this.setState({
          // 		loadingObj: sourceFileloading, total, progress: total - doneCount
          // 	})
          // }, () => { this.events.onLoadDone(this.sourceManage) }, this.propertyNode.props_error_log)
        }

        delayShowClose(isClear = false) {
          this.t && window.clearTimeout(this.t);
          !isClear && (this.t = window.setTimeout(() => {
            this.node.isValid && (this.propertyNode.props_btn_return.active = true);
          }, 50 * 1000));
        }

        bindUI() {
          this.propertyNode.props_btn_return.active = false;
          this.useState(() => {
            if (!this.state.total) {
              this.propertyNode.props_progressBar.progress = 1;
              this.propertyNode.props_progressTip.string = "无可预加载的资源，任务已完成";
              return;
            }

            this.propertyNode.props_progressBar.progress = this.props.reverseProgress ? 1 - this.state.progress / this.state.total : this.state.progress / this.state.total; // this.propertyNode.props_progressTip.string = (this.state.progress === this.state.total
            // 	? "已加载完成" : `正在加载资源:${this.state.loadingObj.path}
            // 	(${(this.state.progress) + '/' + this.state.total})`)

            this.propertyNode.props_progressTip.string = `${(this.state.progress * 100 / this.state.total).toFixed(0)}%`;
          }, [], false);
        }

        setTipContent(content) {
          this.propertyNode.props_progressTip.string = content;
        }

        hideCloseBtn() {
          this.propertyNode.props_btn_return.active = false;
        }

        destroyCallBack() {
          this.delayShowClose(true);
        }

        useProps(key, value) {
          // console.log(key, "change", value.cur)
          if (key === "versionStr") {
            this.propertyNode.props_version.string = `${(_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).isDev ? '内部版本-' : ''}${value.cur}`;

            if (!(_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).isDev) {
              this.propertyNode.props_version.node.active = false;
            }
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6524336c353c6e30480f3fcd27eef7b3c03a1206.js.map