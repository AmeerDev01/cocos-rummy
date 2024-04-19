System.register(["cc", "cc/env"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AssetManager, assetManager, Component, instantiate, Label, Node, Prefab, resources, EDITOR, _dec, _class, _crd, ccclass, property, SplitBundle;

  function createBundle(id, data, options, onComplete) {
    let bundle = assetManager.bundles.get(data.name);

    if (!bundle) {
      bundle = data.name === AssetManager.BuiltinBundleName.RESOURCES ? resources : new AssetManager.Bundle();
      data.base = data.base || `${id}/`;
      bundle.init(data);
    } //HACK: Can not import scripts in GameView due to the difference of Scripting System between the GameView and Preview


    if (!EDITOR && bundle.name !== "subGame") {
      _context.import(`virtual:///prerequisite-imports/${bundle.name}`).then(() => {
        onComplete(null, bundle);
      }).catch(onComplete);
    } else {
      onComplete(null, bundle);
    }
  }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AssetManager = _cc.AssetManager;
      assetManager = _cc.assetManager;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      resources = _cc.resources;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9064aIMWR9K07Amxkmn35Sd", "SplitBundle", undefined);

      __checkObsolete__(['_decorator', 'Asset', 'AssetManager', 'assetManager', 'Button', 'Component', 'director', 'instantiate', 'js', 'Label', 'Node', 'Prefab', 'resources', 'SceneAsset', 'Script', 'settings', 'System']);

      ({
        ccclass,
        property
      } = _decorator);
      assetManager.factory.register("bundle", createBundle);

      _export("SplitBundle", SplitBundle = (_dec = ccclass('SplitBundle'), _dec(_class = class SplitBundle extends Component {
        constructor(...args) {
          super(...args);
          this._bundle = void 0;
        }

        start() {
          // /** bundle 脚本表 */
          // const bundle_script_tab: Record<string, any> = {};
          // /** js 系统 */
          // const system_js = self["System"];
          // /** 脚本缓存表 */
          // const script_cache_tab: Record<string, any> = system_js[Reflect.ownKeys(system_js).find((v) => typeof v === "symbol")];
          // // 初始化 bundle 脚本表
          // Object.keys(script_cache_tab).forEach((v_s) => {
          //     const current = script_cache_tab[v_s];
          //     const parent = script_cache_tab[v_s].p;
          //     const child = parent.d;
          //     if (!parent || !child || current.id !== parent.id) {
          //         return;
          //     }
          //     const name_s = parent.id.slice((parent.id as string).lastIndexOf("/") + 1);
          //     bundle_script_tab[name_s] = parent;
          // });
          const button = this.node.getChildByName("Button");
          const buttonRun = this.node.getChildByName("Button_run");
          this.node.getChildByName("Label").getComponent(Label).string = "ready";
          button.on(Node.EventType.TOUCH_START, () => {
            // fetch("http://54.251.66.82:8008/subGame/config.90947.json").then((response) => {
            //     if (response.status === 200) {
            //         response.json().then(({ data, status, message }) => {
            //             if (status === "SUCCESS") {
            //             } else {
            //             }
            //         })
            //     } else {
            //     }
            // })
            // settings.overrideSettings('scripting','scriptPackages',['../src/chunks/bundle.87e55.js'])
            // 清理脚本缓存
            // const bundle_s = "subGame"
            // const bundle_root = bundle_script_tab[bundle_s];
            // if (bundle_root) {
            //     bundle_root.d.forEach((v: { id: string }) => {
            //         delete script_cache_tab[v.id];
            //         delete system_js["registerRegistry"][v.id];
            //     });
            //     delete script_cache_tab[bundle_root.id];
            //     delete system_js["registerRegistry"][bundle_root.id];
            // }
            // // 清理 ccclass
            // const reg = new RegExp(`${bundle_s}(_|/)`);
            // Object.keys(js._nameToClass)
            //     .filter((v_s) => v_s.match(reg) !== null)
            //     .forEach((v_s) => {
            //         js.unregisterClass(js.getClassByName(v_s));
            //     });
            // 清理 bundle 资源
            // const bundle = assetManager.getBundle(bundle_s);
            // if (bundle) {
            //     bundle.releaseAll();
            //     assetManager.removeBundle(bundle);
            // }
            this.node.getChildByName("Label").getComponent(Label).string = "go";
            assetManager.loadBundle("http://54.251.66.82:8008/subGame", {
              version: "e8287",
              onFileProgress: (n, t) => {
                console.log(`${n}&${t}`);
              }
            }, (err1, _bundle) => {
              if (!err1) {
                this._bundle = _bundle;
                this.node.getChildByName("Label").getComponent(Label).string = "done";
              } else {
                this.node.getChildByName("Label").getComponent(Label).string = err1.message;
              }
            });
          });
          buttonRun.on(Node.EventType.TOUCH_START, () => {
            this._bundle.load("prefab/gameBg", Prefab, (err2, asset) => {
              if (!err2) {
                const n = instantiate(asset);
                this.node.addChild(n);
              } else {
                this.node.getChildByName("Label").getComponent(Label).string = err2.message;
              }
            });
          });
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5c0dd526d6f9f17b9ebf0a3e2ae585ff7bcbb904.js.map