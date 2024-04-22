import { Node } from "cc";
import { GodWealthV2Icon } from "./components/GodWealthV2_Icon";

export class IconPool {
  private icons: GodWealthV2Icon[] = [];

  constructor(iconConfigs: any[]) {
    this.init(iconConfigs);
  }

  private init(iconConfigs: any[]) {
    iconConfigs.forEach(v => {
      for (let i = 0; i < 4; i++) {
        const icon = new GodWealthV2Icon(v)
        icon.resetIcon(v)
        icon.restore();
        this.icons.push(icon);
      }
    })
  }

  /**获得可用的icon */
  public getIcon(iconConfig, parentNode: Node, iconIndex: number): GodWealthV2Icon {
    let icon = this.icons.find(v => !v.isUse() && v.getId() === iconConfig.id);
    if (!icon) {
      icon = new GodWealthV2Icon(iconConfig);
      this.icons.push(icon);
    }
    icon.resetIcon(iconConfig, parentNode, iconIndex);
    // console.log("this.icons.lenth ", this.icons.length, " use length " , this.icons.filter(v => v.isUse()).length);
    return icon;
  }

  public unInit() {
    this.icons.forEach(v => v.destory());
    this.icons = [];
  }
}