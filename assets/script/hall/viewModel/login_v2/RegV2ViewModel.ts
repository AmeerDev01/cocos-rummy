import { Node, sys } from "cc"
import ViewModel from "../../../base/ViewModel"
import { StateType } from "../../store/reducer"
import { Hall_RegPageV2, IProps, IEvent } from "../../components/login_v2/Hall_RegPageV2"
import { EffectType } from "../../../utils/NodeIOEffect"
import { ApiUrl } from "../../apiUrl"
import { fetcher, sourceManageSeletor } from "../../index"
import { deviceInfo } from "../../config"
import { getPackageName, registerAppsflyerEvents } from "../../../common/bridge"

export default class RegV2ViewModel extends ViewModel<Hall_RegPageV2, IProps, IEvent> {
  constructor() {
    super('Hall_RegPageV2')
  }
  protected begin() {
    this.setProps({

    })
    this.setEvent({
      closeHandler: () => {
        this.unMount(EffectType.EFFECT2)
      },
      regHandler: (loginName, password) => {
        fetcher.send(ApiUrl.REG, {
          pkgCode: getPackageName(),
          macCode: deviceInfo.getUniqueId(),
          memberName: loginName, password
        }).then((data) => {
          const values = data.split(",")
          let token = values.length === 1 ? data : values[0];
          //注册成功
          sys.localStorage.setItem('token', token)
          this.comp.events.regDoneHandler()
          registerAppsflyerEvents(loginName, password);
        }).catch((e) => {
          console.log(e)
        })
      }
    })
  }
  public connect(initProps: Partial<IProps> = {}) {
    this.inject(initProps, (state: StateType) => {
      return {}
    })
    return this
  }
}