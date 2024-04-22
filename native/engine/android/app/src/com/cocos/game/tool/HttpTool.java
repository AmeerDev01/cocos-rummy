package com.cocos.game.tool;

import android.util.Log;

import com.cocos.game.vo.Res;
import com.cocos.game.vo.ResouceConfig;

import java.util.concurrent.TimeUnit;

import okhttp3.OkHttpClient;
import okhttp3.Request;


public final class HttpTool {
    public static final String TAG = "HTTP_TOOL";
    private static final int CONNECT_TIMEOUT = 10;
    private static final int READ_TIMEOUT = 10;
    private static final int WRITE_TIMEOUT = 10;

    public static ResouceConfig getConfig(String[] urls, int index, int count) {
        if (count >= urls.length) {
            Log.w(TAG, "get config count exceed the limit");
            return null;
        }
        if (index >= urls.length) {
            index = 0;
        }
        String url = urls[index];
        ResouceConfig config = getConfig(url);
        if (config == null || StringUtils.isEmpty(config.httpBaseUrl)) {
            config = getConfig(urls, ++index, ++count);
        }

        return config;
    }

    public static ResouceConfig getConfig(String url) {
        OkHttpClient client = new OkHttpClient().newBuilder()
//                .connectTimeout(CONNECT_TIMEOUT, TimeUnit.SECONDS)
//                .readTimeout(READ_TIMEOUT, TimeUnit.SECONDS)
//                .writeTimeout(WRITE_TIMEOUT, TimeUnit.SECONDS)
                .build();
        Request request = new Request.Builder().url(url).build();

        okhttp3.Response response = null;
        try {
            response = client.newCall(request).execute();

            if (response.isSuccessful()) {
//                Log.i(TAG, response.body().string());
                String resStr = response.body().string();

                Log.i(TAG, String.format("http getConfig url %s, response : %s", url, resStr));
                return JSONTool.fromJson(resStr, ResouceConfig.class);
            } else {
                Log.i(TAG, url + " okHttp is request error");
            }
        } catch (Exception e) {
            e.printStackTrace();
            Log.e(TAG, url + " request fialed");
        }
        return null;
    }

    public static <T> Res<T> get(String url, Class<T> tClass) {
        OkHttpClient client = new OkHttpClient();
        Request request = new Request.Builder().url(url).build();
        okhttp3.Response response = null;
        try {
            response = client.newCall(request).execute();

            if (response.isSuccessful()) {
//                Log.i(TAG, response.body().string());
                String resStr = response.body().string();

                Log.i(TAG, String.format("http get request url %s, response : %s", url, resStr));
                Res res = JSONTool.fromJson(resStr, Res.class);
                T t = JSONTool.fromJson(JSONTool.toJson(res.getContent()), tClass);
                res.setContent(t);
                return res;
            } else {
                Log.i(TAG, url + " okHttp is request error");
            }
        } catch (Exception e) {
            e.printStackTrace();
            Log.e(TAG, url + " request fialed");
        }

        Res res = new Res();
        res.setCode("200");
        try {
            res.setContent(tClass.newInstance());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return res;
    }
}
