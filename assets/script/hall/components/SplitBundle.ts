import { _decorator, Asset, AssetManager, assetManager, Button, Component, director, instantiate, js, Label, Node, Prefab, resources, SceneAsset, Script, settings, System } from 'cc';
import { EDITOR } from 'cc/env';

const { ccclass, property } = _decorator;

function createBundle (id: string, data: any, options: Record<string, any>, onComplete: ((err: Error | null, data?: AssetManager.Bundle | null) => void)) {
    let bundle = assetManager.bundles.get(data.name);
    if (!bundle) {
        bundle = data.name === AssetManager.BuiltinBundleName.RESOURCES ? resources : new AssetManager.Bundle();
        data.base = data.base || `${id}/`;
        bundle.init(data);
    }
    //HACK: Can not import scripts in GameView due to the difference of Scripting System between the GameView and Preview
    if (!EDITOR && bundle.name !== "subGame") {
        import(`virtual:///prerequisite-imports/${bundle.name}`).then(() => {
            onComplete(null, bundle);
        }).catch(onComplete);
    } else {
        onComplete(null, bundle);
    }
}

assetManager.factory.register("bundle", createBundle)


@ccclass('SplitBundle')
export class SplitBundle extends Component {
    private _bundle: AssetManager.Bundle
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




        const button = this.node.getChildByName("Button")
        const buttonRun = this.node.getChildByName("Button_run")
        this.node.getChildByName("Label").getComponent(Label).string = "ready"
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

            this.node.getChildByName("Label").getComponent(Label).string = "go"
            assetManager.loadBundle("http://54.251.66.82:8008/subGame",
                {
                    version: "e8287",
                    onFileProgress: (n, t) => {
                        console.log(`${n}&${t}`)
                    }
                }, (err1, _bundle) => {
                    if (!err1) {
                        this._bundle = _bundle
                        this.node.getChildByName("Label").getComponent(Label).string = "done"
                    } else {
                        this.node.getChildByName("Label").getComponent(Label).string = err1.message
                    }
                })
        })

        buttonRun.on(Node.EventType.TOUCH_START, () => {
            this._bundle.load("prefab/gameBg", Prefab, (err2, asset: Prefab) => {
                if (!err2) {
                    const n = instantiate(asset)
                    this.node.addChild(n);

                } else {
                    this.node.getChildByName("Label").getComponent(Label).string = err2.message
                }
            })
        })
    }

    update(deltaTime: number) {

    }
}

