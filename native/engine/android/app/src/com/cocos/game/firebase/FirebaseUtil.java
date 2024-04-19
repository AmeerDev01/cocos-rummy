package com.cocos.game.firebase;

import android.content.Context;
import android.content.SharedPreferences;

import com.cocos.game.AppActivity;
import com.cocos.game.tool.StringUtils;
import com.google.firebase.FirebaseApp;
import com.google.firebase.messaging.FirebaseMessaging;

public class FirebaseUtil {

    private static final String SHARED_PREFERENCES_KEY = "firebase.data";
    private static final String DATA_KEY = "firebase.data";

    private static String cacheToken = null;

    public static void init(Context context) {
        // 初始化firebase
        FirebaseApp.initializeApp(context);
        FirebaseMessaging.getInstance().setAutoInitEnabled(true);

        // 重试保存token
        retrySaveToken();
    }

    /**
     * 重试保存token
     */
    private static void retrySaveToken() {
        if (cacheToken == null) {
            return;
        }

        saveToken(cacheToken);
    }

    /**
     * 保存令牌
     *
     * @param token
     */
    public static void saveToken(String token) {
        if (AppActivity.getInstance() == null) {
            cacheToken = token;
            return;
        }
        final String keyName = "token";
        SharedPreferences sharedPreferences = AppActivity.getInstance().getSharedPreferences(SHARED_PREFERENCES_KEY, Context.MODE_PRIVATE);
        if (sharedPreferences == null) {
            cacheToken = token;
            return;
        }
        String tokenValue = sharedPreferences.getString(keyName, "");
        if (StringUtils.isEmpty(tokenValue) || !tokenValue.equals(token)) {
            SharedPreferences.Editor edit = sharedPreferences.edit();
            edit.putString(keyName, token);
            edit.commit();
        }
    }

    public static String getToken() {
        SharedPreferences sharedPreferences = AppActivity.getInstance().getSharedPreferences(DATA_KEY, Context.MODE_PRIVATE);
        return sharedPreferences.getString("token", "");
    }
}
