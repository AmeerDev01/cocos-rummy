import { _decorator, Component, EditBox, ImageAsset, instantiate, Label, native, Node, Prefab, Sprite, SpriteFrame, sys, systemEvent, Texture2D, tween, UIOpacity, UITransform, Vec2, Vec3 } from 'cc';
import { BaseComponent } from '../../../base/BaseComponent';
const { ccclass, property } = _decorator;
import qrcode from "qrcode-generator"
import { BridgeCode } from '../../../common/bridge';
import { addToastAction, ToastType } from '../../store/actions/baseBoard';
import { fetcher, global, lang, sourceManageSeletor } from '../../index';
import { ApiUrl } from '../../apiUrl';
import BaseViewModel from '../../viewModel/BaseViewModel';
import { share_help, IState as SHIState, IProps as SHIprops, IEvent as SHIEvent } from './Hall_PC_share_help';
import { PrefabPathDefine } from '../../sourceDefine/prefabDefine';
import { EffectType } from '../../../utils/NodeIOEffect';
import copyToClipboard from '../../../utils/copyToClipboard';
export interface IState {

}

export interface IProps {
  isShow: boolean,
  forceRefresh: boolean
}
export interface IEvent {
  /**绑定会员 */
  openShareSure?: (id) => void
}

@ccclass('Share_Info')
export class Share_Info extends BaseComponent<IState, IProps, IEvent> {
  isZoomed: boolean
  zoomScale = 3 // 放大的倍数
  fadeDuration = 0.3 // 背景渐变时间，单位为秒
  shareLink = ''
  start() {

  }

  protected propertyNode = {
    props_spr_QR_code: new Node(),
    props_background: new Node(),
    props_btn_fenxiang: new Node(),
    props_Label_num1: new Label(),
    props_Label_totalTaruhan: new Label(),
    props_Label_kode: new Label(),
    props_btn_share_copy: new Node(),
    props_Label_num2: new Label(),
    props_Label_num3: new Label(),
    props_Label_num4: new Label(),
    props_Label_num5: new Label(),
    props_Label_num6: new Label(),
    props_label_link: new Label(),
    props_btn_draw: new Node(),
    props_btn_share_mengi: new Node(),
    props_EditBox_shareName: new Node(),
    props_spr_title: new Node(),
  }

  public props: IProps = {
    isShow: true,
    forceRefresh: false
  }

  public events: IEvent = {
    openShareSure: () => { },
  }

  protected initState() {
    return {

    }
  }

  protected bindEvent(): void {
    this.propertyNode.props_spr_title.on(Node.EventType.TOUCH_END, () => {
      sourceManageSeletor().getFileAsync(PrefabPathDefine._SHARE_SHARE_HELP, Prefab).then(file => {
        let help = new BaseViewModel<share_help, SHIState, SHIprops, SHIEvent>("share_help").mountView(file.source)
          .appendTo(this.node.parent, { effectType: EffectType.EFFECT1, isModal: true }).setProps({
            isShow: true
          }).setEvent({
            onClosePanel: () => {
              help.unMount(EffectType.EFFECT2)
            }
          })
      })
    })
    this.propertyNode.props_btn_share_mengi.on(Node.EventType.TOUCH_END, () => { //绑定会员
      const actingId = this.propertyNode.props_EditBox_shareName.getComponent(EditBox).string.trim();
      if (actingId.length > 0) {
        this.events.openShareSure(actingId)
      }
    })
    this.propertyNode.props_btn_draw.on(Node.EventType.TOUCH_END, () => { // 体现
      this.ekstrakHandle()
    })
    this.propertyNode.props_btn_share_copy.on(Node.EventType.TOUCH_END, () => { // 复制自己编码
      this.copiedToClipboard(this.propertyNode.props_Label_kode.string)
    })
    this.propertyNode.props_btn_fenxiang.on(Node.EventType.TOUCH_END, () => { // 复制
      this.copiedToClipboard(this.shareLink)
    })
    this.propertyNode.props_background.on(Node.EventType.TOUCH_END, () => { // 关闭二维码
      tween(this.propertyNode.props_background.getComponent(UITransform))
        .to(this.fadeDuration, { height: 0 })
        .start()
      this.node.getChildByName('copy_QR_code').destroy()
    })
    this.propertyNode.props_spr_QR_code.on(Node.EventType.TOUCH_END, () => { // 打开二维码
      let node = instantiate(this.propertyNode.props_spr_QR_code)
      node.name = 'copy_QR_code'
      // node.setScale(new Vec3(0, 0, 1))
      node.setPosition(new Vec3(134, 160, 1))
      node.getComponent(UIOpacity).opacity = 255;
      this.createQRCode(this.shareLink, 320, (res => {
        node.getComponent(Sprite).spriteFrame = res;
      }))
      node.getComponent(UITransform).height = 0
      tween(node.getComponent(UITransform))
        .to(0.2, { height: 320 }, { easing: 'sineOut' })
        .start()
      this.node.addChild(node)
      tween(this.propertyNode.props_background.getComponent(UITransform))
        .to(this.fadeDuration, { height: 556 })
        .start()
    })
    this.renderData()
  }

  protected useProps(key: keyof IProps, value: { pre: any, cur: any }) {
    if (key === 'isShow') {
      if (!value.cur) {
        this.propertyNode.props_background.getComponent(UITransform).height = 0
        this.node.getChildByName('copy_QR_code')?.destroy()
      }
      this.node.active = value.cur
    }
    if (key === 'forceRefresh') {
      value.cur && this.renderData()
    }
  }
  private copiedToClipboard(text) { //统一复制
    if (sys.isNative) {
      if (sys.os === sys.OS.ANDROID) {
        native.bridge.sendToNative(BridgeCode.COPY_CLIPBOARD, text);
        global.hallDispatch(addToastAction({ content: lang.write(k => k.MainPaneModule.ShareCopy, {}, { placeStr: "已复制内容到剪切板" }) }))
      }
    } else {
      copyToClipboard(text);
      global.hallDispatch(addToastAction({ content: lang.write(k => k.MainPaneModule.ShareCopy, {}, { placeStr: "已复制内容到剪切板" }) }))
      // navigator.clipboard.writeText(text).then(() => {
      //     global.hallDispatch(addToastAction({ content: lang.write(k => k.MainPaneModule.ShareCopy, {}, { placeStr: "已复制内容到剪切板" }) }))
      // }).catch((err) => {
      //     console.error('share copy fail', err)
      // });
    }
  }
  private renderData() {
    fetcher.send(ApiUrl.RECOMMEND_DATA, {}, "get").then((rsp) => {
      if (rsp.promotionMemberCode && rsp.promotionMemberCode !== '') {
        this.propertyNode.props_EditBox_shareName.getComponent(EditBox).string = rsp.promotionMemberCode
        this.propertyNode.props_EditBox_shareName.getComponent(EditBox).enabled = false
        this.propertyNode.props_btn_share_mengi.active = false
      } else {
        this.propertyNode.props_EditBox_shareName.getComponent(EditBox).enabled = true
        this.propertyNode.props_btn_share_mengi.active = true
      }
      this.propertyNode.props_Label_totalTaruhan.string = rsp.totalPromotionMemberBet.formatAmountWithCommas()
      this.propertyNode.props_Label_kode.string = rsp.promotionCode
      this.propertyNode.props_Label_num1.string = rsp.totalPromotionMemberCount
      this.propertyNode.props_Label_num2.string = rsp.totalPromotionRewardsSum.formatAmountWithCommas()
      this.propertyNode.props_Label_num3.string = rsp.promotionRewardsSum.formatAmountWithCommas()
      this.propertyNode.props_label_link.string = rsp.shareLink

      this.propertyNode.props_btn_draw.getComponent(Sprite).grayscale = rsp.promotionRewardsSum <= 0
      this.shareLink = rsp.shareLink
      this.createQRCode(this.shareLink, 80, (res => {
        this.propertyNode.props_spr_QR_code.getComponent(Sprite).spriteFrame = res;
      }))
    })
    fetcher.send(ApiUrl.RECOMMENDDATATOTODAY, {}, "get").then((rsp) => {
      this.propertyNode.props_Label_num4.string = rsp.todayTotalPromotionMemberCount.formatAmountWithCommas()
      this.propertyNode.props_Label_num5.string = rsp.todayPromotionMemberBet.formatAmountWithCommas()
      this.propertyNode.props_Label_num6.string = rsp.todayPromotionRewardsSum.formatAmountWithCommas()
    })
  }
  private createQRCode(text, sz, callback) {
    let qr = qrcode(4, 'L');
    qr.addData(text);
    qr.make();
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    let size = sz;
    canvas.width = size;
    canvas.height = size;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, size, size);
    // 根据二维码模块计算每个点的大小
    let tileW = size / qr.getModuleCount();
    let tileH = size / qr.getModuleCount();
    // 绘制二维码
    for (let row = 0; row < qr.getModuleCount(); row++) {
      for (let col = 0; col < qr.getModuleCount(); col++) {
        ctx.fillStyle = qr.isDark(row, col) ? "black" : "white";
        ctx.fillRect(Math.round(col * tileW), Math.round(row * tileH), tileW, tileH);
      }
    }
    // 将 Canvas 转换为 ImageAsset
    let imageAsset = new ImageAsset(canvas);
    // 创建 Texture2D
    let texture = new Texture2D();
    texture.image = imageAsset;
    // 应用到 Sprite
    let spriteFrame = new SpriteFrame();
    spriteFrame.texture = texture;
    callback(spriteFrame)
  }
  /**提取分享奖励 */
  private ekstrakHandle() {
    if (parseFloat(this.propertyNode.props_Label_num3.string.replace(/,/g, "")) > 0) {
      fetcher.send(ApiUrl.DRAW_WATER, { type: 0 }).then(() => {
        global.hallDispatch(addToastAction({
          content: lang.write(k => k.BaseBoardModule.operateDone, {}, { placeStr: "操作完成" }), type: ToastType.SUCCESS,
        }))
        this.renderData();
      }).catch((e) => {
      })
    }
  }


  protected bindUI(): void {

  }

  update(deltaTime: number) {

  }
}

