import ViewModel from "../../base/ViewModel"
import { EffectType } from "../../utils/NodeIOEffect"
import { ApiUrl } from "../apiUrl"
import { Hall_SignIn, IEvent, IProps, WeekType } from "../components/Hall_SignIn"
import { fetcher } from "../index"
import { changeGold } from "../store/actions/memberInfo"
import { StateType } from "../store/reducer"

class SignInViewModel extends ViewModel<Hall_SignIn, IProps, IEvent> {
  constructor() {
    super('Hall_SignIn')
  }

  protected begin() {
    this.getSignInList();

    this.setEvent({
      requestGetSignInList: () => {
        this.getSignInList();
      },
      requestSign: (weekType: WeekType) => {
        this.signIn(weekType);
      },
      // close: () => {
      //   this.unMount(EffectType.EFFECT2);
      // },
      onChangeGold: (value: number) => {
        this.dispatch(changeGold(value));
      }
    })
  }

  protected unMountCallBack() {
  }

  public connect() {
    this.inject({}, (state: StateType) => {
      return {
        memberInfo: state.memberInfo
      }
    })
    return this
  }

  public getSignInList() {
    fetcher.send(ApiUrl.GET_MEMBER_SIGN_IN_LIST, {}, "get").then((rsp) => {
      this.setProps({
        signInDatas: rsp,
        signSuccess: false,
      })
    }).catch((e) => {
      //this.dispatch(addToastAction({ content: e }))
    })
  }

  private signIn(weekType: WeekType) {
    fetcher.send(ApiUrl.SIGN_IN, {}, "post").then((rsp) => {
      this.setProps({
        signSuccess: true,
      })
    }).catch((e) => {
      //this.dispatch(addToastAction({ content: e }))
    })
  }
}

export default SignInViewModel