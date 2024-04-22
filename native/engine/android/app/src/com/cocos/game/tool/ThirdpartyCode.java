package com.cocos.game.tool;

import java.util.Arrays;

/**
 * 第三方
 */
public enum ThirdpartyCode {
    APPSFLYER("appsflyer"),
    FACEBOOK("facebook"),
    ADJUST("adjust");

    private String name;
    ThirdpartyCode(String name){
        this.name = name;
    }

    public String getName(){
        return this.name;
    }

    public static ThirdpartyCode of(String name){
        for (ThirdpartyCode value : values()) {
            if(value.getName().equals(name)){
                return value;
            }
        }
        return ADJUST;
    }
}
