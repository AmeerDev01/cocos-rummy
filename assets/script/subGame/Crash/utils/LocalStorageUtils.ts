import { sys } from "cc";


export const LOCAL_DATA_KEY = {
    LANG: "LANG",
    TOKEN: "TOKEN",
    OPTION: "option",
    MUSIC_SWITCH: "MUSIC_SWITCH",
    SOUND_SWITCH: "SOUND_SWITCH",
    LAST_SHOW_NOTICE_TM: "LAST_SHOW_NOTICE_TM",
}


export default class LocalStorageUtils {
    public static setItem( key: string, value: any ) {
        sys.localStorage.setItem(key, String(value));
    }

    public static getItem( key: string, type: any = null, defValue: any = null ): any {
        let strValue = sys.localStorage.getItem(key);
        if(!strValue) {
            return defValue;
        }

        if(type == Number) {
            return Number(strValue);
        }

        if(type == Boolean) {
            return strValue != "false";
        }

        if(type == JSON) {
            return JSON.parse(strValue);
        }

        return strValue;
    }
}
