import { Node } from "cc"
import ViewModel from "../../base/ViewModel"
import { Common_LoaderPanel, IProps, IEvent } from "../components/Common_LoaderPanel"
import SourceManage from "../../base/SourceManage"
import { config } from "../../hall/config"

class LoaderPanelViewModel extends ViewModel<Common_LoaderPanel, IProps, IEvent> {
  constructor() {
    super('Common_LoaderPanel')
  }
  protected begin() { }
  protected init() { }
  public connect(initProps: Partial<IProps> = {}) {
    this.inject(initProps, () => {
      return {
        onLoadDone: (sourceManage: SourceManage) => { },
        loadBarType: 2
      }
    })
    return this
  }
}

export default LoaderPanelViewModel