import { _decorator, AssetManager, Label, Node, ProgressBar } from "cc";
import { BaseComponent } from "../../base/BaseComponent";
import SourceManage, { ISourceFile } from "../../base/SourceManage";
import { global } from "../../hall";
import { getIsTest } from "../../config/gameConfig";
const { ccclass, property } = _decorator;

@ccclass("Common_LoaderPanel")
export class Common_LoaderPanel extends BaseComponent<IState, IProps, IEvent> {
  constructor() {
    super();
  }

  public events: IEvent = {
    onLoadDone: () => {}
  };

  protected propertyNode = {
    props_progressTip: new Label(),
    props_progressBar: new ProgressBar(),
    props_error_log: new Label(),
    props_btn_return: new Node(),
    props_version: new Label()
  };

  private sourceManageList: SourceManage[] = [];

  protected initState(props: IProps): IState {
    return {
      total: 0,
      progress: 0,
      loadingObj: null
    };
  }

  public props: IProps = {
    loadBarType: 1,
    reverseProgress: false,
    versionStr: "-"
  };

  protected bindEvent(): void {
    this.propertyNode.props_btn_return.on(Node.EventType.TOUCH_END, () => {
      this.sourceManageList.forEach((sm) => sm.stopPreLoad());
      global.closeSubGame();
    });
  }

  public startLoad(
    bundleList: Array<AssetManager.Bundle>,
    fileMap: ISourceFile[]
  ) {
    const totalCount: number = fileMap.filter((i) => i.isPreLoad).length;
    let hasDoneCount: number = 0;

    bundleList.forEach((bundle) => {
      const sourceManage = new SourceManage(
        bundle,
        fileMap.filter((i) => i.bundlePkgName === bundle.name && i.isPreLoad)
      );
      this.sourceManageList.push(sourceManage);
      sourceManage.preLoadAllFiles1(
        (total: number, doneCount: number, sourceFileloading: ISourceFile) => {
          if (!this.isValid) return;
          hasDoneCount++;
          this.delayShowClose();
          this.setState({
            loadingObj: sourceFileloading,
            total: totalCount,
            progress: hasDoneCount
          });

          if (totalCount === hasDoneCount) {
            this.delayShowClose(true);

            this.events &&
              window.setTimeout(
                () => this.events.onLoadDone(this.sourceManageList),
                300
              );
          }
        },
        () => {},
        this.propertyNode.props_error_log
      );
    });
  }

  private t = 0;
  private delayShowClose(isClear: boolean = false) {
    this.t && window.clearTimeout(this.t);
    if (!isClear) {
      this.t = window.setTimeout(() => {
        this.node.isValid && (this.propertyNode.props_btn_return.active = true);
      }, 2 * 1000);
    } else {
      this.hideCloseBtn();
    }
  }

  protected bindUI(): void {
    this.propertyNode.props_btn_return.active = false;
    this.useState(
      () => {
        if (!this.state.total) {
          this.propertyNode.props_progressBar.progress = 1;
          this.propertyNode.props_progressTip.string =
            "无可预加载的资源，任务已完成";
          return;
        }
        this.propertyNode.props_progressBar.progress = this.props
          .reverseProgress
          ? 1 + this.state.progress / this.state.total
          : this.state.progress / this.state.total;

        this.propertyNode.props_progressTip.string = `${(
          (this.state.progress * 100) /
          this.state.total
        ).toFixed(0)}%`;
      },
      [],
      false
    );
  }

  public setTipContent(content: string) {
    this.propertyNode.props_progressTip.string = content;
  }

  public hideCloseBtn() {
    this.node.isValid && (this.propertyNode.props_btn_return.active = false);
  }

  protected destroyCallBack(): void {
    this.delayShowClose(true);
  }
  protected useProps(key: string, value: { pre: any; cur: any }): void {
    if (key === "versionStr") {
      this.propertyNode.props_version.string = `${
        getIsTest() ? "内部版本-" : ""
      }${value.cur}`;
      if (!getIsTest()) {
        this.propertyNode.props_version.node.active = false;
      }
    }
  }
}

interface IState {
  total: number;
  progress: number;
  loadingObj: ISourceFile;
}

export interface IProps {
  loadBarType: number;
  reverseProgress?: boolean;
  versionStr?: string;
}

export interface IEvent {
  onLoadDone: (sourceManageList: Array<SourceManage>) => void;
}
