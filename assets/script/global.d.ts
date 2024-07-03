import { Sprite, Vec3, Node } from "cc";
import { AnyAction } from "redux";
import { BuyType } from "./hall/components/Hall_ShopPanel";
import { GameType, UserInfo } from "./common/viewModel/GiftUserViewModel";
import Internationalization from "./language/Internationalization";
import languagePkg, { defaultLanguageType } from "./language/languagePkg";
import { HallGameGateType, config } from "./hall/config";
import WebSocketStarter from "./common/WebSocketStarter";
import { ToastPosition, ToastType } from "./hall/store/actions/baseBoard";
import { SubGameRunState, HallEventType } from "./hallType";


declare global {
  interface Number {
    /**
     * 转换数字为带逗号的国际通用的金额计数法
     */
    formatAmountWithCommas(fractionDigits?: number): string;
    /**
     * 转换数字为K\M\B的计数形式
     */
    formatAmountWithLetter(): string;
    /**
     * 转换数字为K\M\B的计数形式(2)
     * @param isInteger 是否保留K之后的数字
     */
    formatAmountWithLetter2(isInteger: boolean): string;

    /**
     * 将数字转换为非四舍五入的小数点保留位
     */
    toFixedFix(fractionDigits?: number): number
  }

  interface String {
    /**
     * 格式化字符串，比如：字符串有{0}占位符，第一参数的值替换这个占位符
     * @param value 
     */
    format(...value): string;
  }

  interface Window {
    Android: any,
    fbq: any,
    /**用于全局调用/读取的大厅资源 */
    HALL_GLOBAL: {
      /**使用大厅的store */
      hallDispatch: (action: AnyAction) => void
      /**
       * 关闭子游戏
       * @param isPre 是否在初始化完成之前退出，一般指在加载的时候退出
       * @param confirmContent 如果值非空的话，则会弹出确认框
       * @param confirmDoneAfterFn 点击确认后，在实施关闭游戏之后要做的事情
       * @param confirmDoneBeforeFn 点击确认后，在实施关闭游戏之前要做的事情
       */
      closeSubGame: (option?: { isPre?: boolean, confirmContent?: string, confirmDoneAfterFn?: Function, confirmDoneBeforeFn?: Function }) => void
      /**打开商城 */
      openShop: (buyType?: BuyType) => void
      /**打开个人中心 */
      openPersonCenter: (index?: number) => void
      /**打开vip主界面 */
      openVipMain: () => void
      /**打开签到页 */
      openSign: () => void
      /**加载头像 */
      loadHeadSprite: (icon: number, sprite: Sprite) => void
      /**更新子游戏的进度信息 */
      setSubGameGate: (gameId: number, progress: number) => void
      /**是否允许打开子游戏,一般用于子游戏的第一个首预制体已经加载完毕 */
      isAllowOpenSubGame: (gameId: number) => void
      /**显示礼物窗口 */
      showGiftWindow: (gameType: GameType, userInfo: UserInfo | null, callback) => void
      /**飞礼物 */
      flyGift: (fromMemberId: string, toMemberId: string, startPos: Vec3, endPos: Vec3, value: number, parentNode: Node) => void
      /**设置加载状态 */
      setLoading: (isShow: boolean, flagId: string, isAllowCloseLoading?: boolean) => void
      /**
       * 加toast弹出信息
       * forceLandscape:强制横屏，若为false，则根据游戏的横竖屏自动旋转
       */
      addToast: (content: string, option: { type?: ToastType, position?: ToastPosition, forceLandscape?: boolean }) => void
      /**设置游戏运行状态 */
      setSubGameRunState: (subGameRunState: SubGameRunState) => void
      /** 注册子游戏
       * @param gameId 游戏id
       * @param hallEvent 大厅事件回调
       */
      registerGame(gameId: number, hallEvent: (hallEvent: HallEventType, payLoad: any) => void)
      /**子游戏加载进度 */
      loadSubGameProgress: (gameId: number, progress: number) => void
      /**语言 */
      lang: Internationalization<typeof languagePkg>
      /**子游戏运行状态 */
      SubGameRunState: typeof SubGameRunState
      /**支持的语言/地区/信息 */
      defaultLanguageType: typeof defaultLanguageType
      /**大厅的配置文件内容 */
      config: typeof config
      wsInstance: WebSocketStarter,
      /**当前游戏配置  如果为空 表示 在大厅 */
      currGameConfig: HallGameGateType,
    }
  }
}




export { }