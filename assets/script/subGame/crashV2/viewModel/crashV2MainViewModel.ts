import { Node } from "cc"
import ViewModel, { StoreInject } from "../../../base/ViewModel"
import { CrashV2_mainPanel, IEvent, IProps } from "../components/crashV2_mainPanel"
import { getStore } from "../store"
import { StateType } from "../store/reducer"

@StoreInject(getStore())
class CrashV2MainViewModel extends ViewModel<CrashV2_mainPanel, IProps, IEvent> {
    private initCallback;
    constructor(initCallback) {
        super('CrashV2_mainPanel')
        this.initCallback = initCallback;
    }
    protected begin() {
        this.comp.scheduleOnce(() => {
            this.initCallback && this.initCallback()
        }, 1)
    }
    public mountViewNode(viewNode: Node) {
        this.viewNode = viewNode;
        this.viewNode.addComponent(this.componentStr)
        this.comp = this.viewNode.getComponent(this.componentStr) as CrashV2_mainPanel
        return this
    }

    public connect() {
        this.inject({}, (state: StateType) => {
            return {
                gameType: state.game.gameType,
            }
        })
        return this
    }


}

export default CrashV2MainViewModel