import { Node, sys } from "cc";
import ViewModel from "../../../base/ViewModel";
import { StateType } from "../../store/reducer";
import {
  Hall_RegPageV2,
  IProps,
  IEvent
} from "../../components/login_v2/Hall_RegPageV2";
import { EffectType } from "../../../utils/NodeIOEffect";
import { ApiUrl } from "../../apiUrl";
import { fetcher, lang, sourceManageSeletor } from "../../index";
import { config, deviceInfo } from "../../../config/config";
import {
  getPackageName,
  registerAppsflyerEvents
} from "../../../common/bridge";
import { addToastAction } from "../../store/actions/baseBoard";
import { defaultLanguageType } from "../../../language/languagePkg";

export default class RegV2ViewModel extends ViewModel<
  Hall_RegPageV2,
  IProps,
  IEvent
> {
  constructor() {
    super("Hall_RegPageV2");
  }
  protected begin() {
    this.setProps({});
    this.setEvent({
      closeHandler: () => {
        this.unMount(EffectType.EFFECT2);
      },
      regHandler: (loginName, password, verificationCode) => {
        fetcher
          .send(ApiUrl.REG, {
            pkgCode: getPackageName(),
            macCode: deviceInfo.getUniqueId(),
            memberName:
              defaultLanguageType[config.country].phoneAreaNum + loginName,
            password,
            verificationCode
          })
          .then((data) => {
            const values = data.split(",");
            let token = values.length === 1 ? data : values[0];
            //注册成功
            sys.localStorage.setItem("token", token);
            this.comp.events.regDoneHandler();
            registerAppsflyerEvents(loginName, password);
          })
          .catch((e) => {
            console.log(e);
          });
      },
      sendSmsCode: (phoneNumber: string) => {
        return new Promise((reslove, reject) => {
          fetcher
            .send(ApiUrl.SEND_SMS, { phone: phoneNumber })
            .then((rsp) => {
              this.dispatch(
                addToastAction({
                  content: lang.write(
                    (k) => k.BindPhoneModule.BindPhoneSend,
                    {},
                    { placeStr: "验证信息已经发送，请注意查收" }
                  )
                })
              );
              reslove(rsp);
            })
            .catch((e) => {
              this.dispatch(
                addToastAction({
                  content: lang.write(
                    (k) => k.BindPhoneModule.BindPhonesSendError,
                    {},
                    { placeStr: "请求失败：${e}" }
                  )
                })
              );
              reject(e);
            });
        });
      }
    });
  }
  public connect(initProps: Partial<IProps> = {}) {
    this.inject(initProps, (state: StateType) => {
      return {};
    });
    return this;
  }
}
