import { Node } from "cc";
import { ThorV2Icon } from "./components/ThorV2_Icon";

export class IconPool {
  private icons: ThorV2Icon[] = [];

  constructor(iconConfigs: any[]) {
    this.init(iconConfigs);
  }

  private init(iconConfigs: any[]) {
    iconConfigs.forEach(v => {
      for (let i = 0; i < 4; i++) {
        const icon = new ThorV2Icon(v)
        icon.resetIcon(v)
        icon.restore();
        this.icons.push(icon);
      }
    })
  }

  /**获得可用的icon */
  public getIcon(iconConfig, parentNode: Node, iconIndex: number): ThorV2Icon {
    let icon = this.icons.find(v => !v.isUse() && v.getId() === iconConfig.id);
    if (!icon) {
      icon = new ThorV2Icon(iconConfig);
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