package com.cocos.game.tool;

import com.google.gson.Gson;

public class JSONTool {

    public static String toJson(Object value) {
        Gson gson = new Gson();
        return gson.toJson(value);
    }

    public static <T> T fromJson(String json, Class<T> classOfT) {
        Gson gson = new Gson();
        return gson.fromJson(json, classOfT);
    }
}
