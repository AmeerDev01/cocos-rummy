import { _decorator, Component, Label, Node } from 'cc';
import { LanguageConfigZCH } from '../LanguageConfigZCH';

const { ccclass, property } = _decorator;

@ccclass('Language_label')
export class Language_label extends Component {
    @property
    labKey: string = "";
    protected onLoad(): void {

        let config = LanguageConfigZCH[this.labKey];
       
        if (config) {
            if (config[window.HALL_GLOBAL.lang.languageItemType]) {
                this.node.getComponent(Label).string = config[window.HALL_GLOBAL.lang.languageItemType];
            }
        }
    }
}


