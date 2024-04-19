import Singleton from "./Singleton";
import { Color, Graphics, Label, Node, UITransform } from "cc"

export default class CaptchaGenerator {
  constructor(node: Node, chartLength: number) {
    this.node = node
    this.chartLength = chartLength
    this.generate()
  }
  private node: Node
  private chartLength: number
  private displayNode: Node
  private displayNoiseNode: Node
  public captcha: string
  public generate() {
    this.generateCaptcha(this.chartLength)
    this.displayCaptcha()
    this.addNoise()
  }
  /**生成指定长度的随机字符验证码 */
  private generateCaptcha(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      captcha += charset.charAt(randomIndex);
    }
    this.captcha = captcha
  }
  /**将验证码显示在精灵节点上 */
  private displayCaptcha() {
    // 此处假设你有一个字体文件来渲染文本，你可以在精灵上创建一个Label组件
    this.displayNode && (this.displayNode.destroy())
    this.displayNoiseNode && (this.displayNoiseNode.destroy())
    this.displayNode = new Node();
    const labelComponent = this.displayNode.addComponent(Label);
    labelComponent.string = this.captcha;
    labelComponent.color = new Color(0, 0, 0, 255)
    labelComponent.fontSize = 26 + (parseInt(Math.random() * 6 + '')); // 设置字体大小
    labelComponent.fontFamily = "Arial"; // 设置字体类型
    labelComponent.horizontalAlign = Label.HorizontalAlign.CENTER; // 设置文本水平对齐方式

    // 将Label节点作为子节点添加到验证码精灵节点上
    this.node.addChild(this.displayNode);
  }
  /**添加噪点到验证码图片 */
  private addNoise() {
    // 获取精灵的宽度和高度
    this.displayNoiseNode = new Node()
    const ui = this.node.getComponent(UITransform)
    const transform = this.displayNoiseNode.addComponent(UITransform);
    transform.width = ui.width
    transform.height = ui.height
    const ctx = this.displayNoiseNode.addComponent(Graphics)
    // 添加噪点
    const noiseAmount = 70; // 调整噪点数量
    for (let i = 0; i < noiseAmount; i++) {
      // 随机生成噪点的坐标和颜色
      const x = Math.floor(Math.random() * ui.width / 2 * (Math.random() > 0.5 ? 1 : -1));
      const y = Math.floor(Math.random() * ui.height / 2 * (Math.random() > 0.5 ? 1 : -1));
      const color = new Color(
        Math.random() * 255,
        Math.random() * 255,
        Math.random() * 255,
        255
      );
      // 绘制一个小的随机颜色点
      ctx.fillColor = color//Color.fromHEX(color, '')//hexToColor(color);
      ctx.fillRect(x, y, Math.random() > 0.5 ? 2 : 1, Math.random() > 0.5 ? 2 : 1);
    }
    this.node.addChild(this.displayNoiseNode)
  }
}

