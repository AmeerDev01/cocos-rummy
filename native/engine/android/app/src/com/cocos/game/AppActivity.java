/****************************************************************************
 Copyright (c) 2015-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
package com.cocos.game;

import android.app.Activity;
import android.app.NotificationManager;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.res.Configuration;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.MediaStore;
import android.provider.Settings;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.view.WindowManager;
import android.widget.FrameLayout;
import android.widget.ImageView;

import androidx.core.app.ActivityCompat;
import androidx.core.app.NotificationManagerCompat;
import androidx.core.content.FileProvider;

import com.adjust.sdk.Adjust;
import com.adjust.sdk.AdjustConfig;
import com.adjust.sdk.AdjustEvent;
import com.adjust.sdk.AdjustEventFailure;
import com.adjust.sdk.AdjustEventSuccess;
import com.adjust.sdk.AdjustSessionFailure;
import com.adjust.sdk.AdjustSessionSuccess;
import com.adjust.sdk.LogLevel;
import com.adjust.sdk.OnEventTrackingFailedListener;
import com.adjust.sdk.OnEventTrackingSucceededListener;
import com.adjust.sdk.OnSessionTrackingFailedListener;
import com.adjust.sdk.OnSessionTrackingSucceededListener;
import com.appsflyer.AppsFlyerConversionListener;
import com.appsflyer.AppsFlyerLib;
import com.appsflyer.attribution.AppsFlyerRequestListener;
import com.cocos.game.bridge.EventData;
import com.cocos.game.firebase.FirebaseUtil;
import com.cocos.game.tool.DeviceUtils;
import com.cocos.game.tool.HttpTool;
import com.cocos.game.tool.JSONTool;
import com.cocos.game.tool.NotificationUtil;
import com.cocos.game.tool.PackageCode;
import com.cocos.game.tool.StringUtils;
import com.cocos.game.tool.ThirdpartyCode;
import com.cocos.game.tool.ThreadUtil;
import com.cocos.game.tool.VibrateTool;
import com.cocos.game.vo.ChannelPackageVo;
import com.cocos.game.vo.Res;
import com.cocos.game.vo.ResouceConfig;
import com.cocos.lib.CocosActivity;
import com.cocos.lib.JsbBridge;
import com.cocos.service.SDKWrapper;
import com.facebook.appevents.AppEventsLogger;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import com.HG.IN001.R;

public class AppActivity extends CocosActivity {
    private static final String LOG_TAG = "AppsFlyerOneLinkSimApp";
    private static final String Adjust_LOG_TAG = "AdjustLog";
    private static final String DEV_KEY = "yimPC3Jd7hEA4d6AvctsPH";
    /**
     * 测试环境地址
     */
    private static final String[] CONFIG_URL_DEVS = {
            "https://sg-e-prod.s3.ap-southeast-1.amazonaws.com/jsonConfig-test.json"
    };
    /**
     * 生产环境地址
     */
    private static final String[] CONFIG_URL_PROS = {
            "https://sg-e-prod.s3.ap-southeast-1.amazonaws.com/jsonConfig-test.json"
    };
    private Map<String, Object> conversionData = null;
    private AppEventsLogger facebookLogger;
    private String baseUrl;

    private static String packageCode;
    private static AppActivity instance = null;
    private ChannelPackageVo channelPackageVo;

    public AppActivity() {
        synchronized (LOG_TAG) {
            if (instance == null) {
                instance = this;
            }
        }
    }

    /**
     * 第三方初始化状态
     */
    private static final Map<ThirdpartyCode, Boolean> thirdpartyInitStatus = new HashMap<>();

    static {
        for (ThirdpartyCode value : ThirdpartyCode.values()) {
            thirdpartyInitStatus.put(value, false);
        }
    }

    public static AppActivity getInstance() {
        return instance;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // DO OTHER INITIALIZATION BELOW
        SDKWrapper.shared().init(this);

        // 显示启动页
        showSplash();
        // 本地热更文件处理
        cacheHandle();
        Log.i("LoadCreate", "onCreate ----------------------------");
        Log.i("LoadCreate", "installTime: " + getPackageFirstInstallTime(this.getApplicationContext()));
        Log.i("LoadCreate", "lastUpdateTime " + getPackageLastUpdateTime(this.getApplicationContext()));
        Log.i("LoadCreate", "getVersionCode " + getVersionCode(this.getApplicationContext()));
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            Log.i("LoadCreate", "getFilesDir " + this.getApplicationContext().getFilesDir().toPath());
        }

        // 禁止息屏
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);

        this.gameInit();
    }

    private void gameInit() {
        //极光推送初始化
//        JPushInterface.setDebugMode(false);
//        JPushInterface.init(this);

        // 监听cocos消息
        listenerCocosMsg();

        Log.i("getUniqueId", DeviceUtils.getUniqueId(this));
        Log.i("getAppVersionName", getAppVersionName());

        // 初始化facebook事件记录
        initFacebookLogger();

        // 获得packageCode配置
        packageCode = getMetaDataValue(this.getApplicationContext(), "android.app.package_code", "master");
        initDataStatistics();

        FirebaseUtil.init(this);

        // 初始化通知
        NotificationUtil.initNotification(this);
//        requestNotificationPermission(this);
    }

    public static String getPackageCode() {
        return packageCode;
    }

    /**
     * 获取MetaData信息
     *
     * @param name
     * @param def
     * @return
     */
    public String getMetaDataValue(Context context, String name,
                                   String def) {
        String value = getMetaDataValue(context, name);
        return StringUtils.isEmpty(value) ? def : value;
    }

    public String getMetaDataValue(Context context, String name) {
        Object value = null;
        PackageManager packageManager = context.getPackageManager();
        ApplicationInfo applicationInfo;
        try {
            applicationInfo = packageManager.getApplicationInfo(
                    context.getPackageName(), PackageManager.GET_META_DATA);
            if (applicationInfo != null && applicationInfo.metaData != null) {
                value = applicationInfo.metaData.getString(name);
            }
        } catch (PackageManager.NameNotFoundException e) {
            throw new RuntimeException(
                    "Could not read the name in the manifest file.", e);
        }
        return value != null ? value.toString() : null;
    }

    private void cacheHandle() {
        String versionCodeName = "versionCode";
        String lastUpdateTimeName = "lastUpdateTime";

        PackageInfo packageInfo = getPackageInfo(this.getApplicationContext());
        if (packageInfo == null) {
            return;
        }
        SharedPreferences sharedPreferences = getSharedPreferences("remoteAssets", Context.MODE_PRIVATE);
        final String newVersionCode = packageInfo.versionName;
        final String lastUpdateTime = packageInfo.lastUpdateTime + "";

        String oldVersionCode = sharedPreferences.getString(versionCodeName, "");
        String oldLastUpdateTime = sharedPreferences.getString(lastUpdateTimeName, "");

        if (StringUtils.isEmpty(oldVersionCode) || !oldVersionCode.equals(newVersionCode) ||
                StringUtils.isEmpty(oldLastUpdateTime) || !oldLastUpdateTime.equals(lastUpdateTime)) {
            SharedPreferences.Editor edit = sharedPreferences.edit();
            edit.putString(versionCodeName, newVersionCode);
            edit.putString(lastUpdateTimeName, lastUpdateTime);
            edit.commit();

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                deleteDirectory(this.getApplicationContext().getFilesDir().getPath() + "/remote-asset");
            }
        }
    }

    /**
     * 删除目录及目录下的文件
     *
     * @param filePath 要删除的目录的文件路径
     * @return 目录删除成功返回true，否则返回false
     */
    private boolean deleteDirectory(String filePath) {
        // 如果dir不以文件分隔符结尾，自动添加文件分隔符
        if (!filePath.endsWith(File.separator))
            filePath = filePath + File.separator;
        File dirFile = new File(filePath);
        // 如果dir对应的文件不存在，或者不是一个目录，则退出
        if ((!dirFile.exists()) || (!dirFile.isDirectory())) {
            Log.i("deleteDirectory", "Failed to delete directory：" + filePath + "nonentity！");
            return false;
        }
        boolean flag = true;
        // 删除文件夹中的所有文件包括子目录
        File[] files = dirFile.listFiles();
        for (File file : files) {
            // 删除子文件
            if (file.isFile()) {
                flag = deleteSingleFile(file.getAbsolutePath());
                if (!flag)
                    break;
            }
            // 删除子目录
            else if (file.isDirectory()) {
                flag = deleteDirectory(file
                        .getAbsolutePath());
                if (!flag)
                    break;
            }
        }
        if (!flag) {
            Log.i("deleteDirectory", " Failed to delete a directory！");
            return false;
        }
        // 删除当前目录
        if (dirFile.delete()) {
            Log.e("deleteDirectory", "Copy_Delete.deleteDirectory: Deleting directory " + filePath + " succeeded. Procedure！");
            return true;
        } else {
            Log.i("deleteDirectory", "Failed to delete directory：" + filePath);
            return false;
        }
    }

    /**
     * 删除单个文件
     *
     * @param filePath$Name 要删除的文件的文件名
     * @return 单个文件删除成功返回true，否则返回false
     */
    private boolean deleteSingleFile(String filePath$Name) {
        File file = new File(filePath$Name);
        // 如果文件路径所对应的文件存在，并且是一个文件，则直接删除
        if (file.exists() && file.isFile()) {
            if (file.delete()) {
                Log.e("--Method--", "Copy_Delete.deleteSingleFile: Deleting a single file " + filePath$Name + " succeeded！ ");
                return true;
            } else {
                Log.i("deleteDirectory", "Failed to delete a single file " + filePath$Name);
                return false;
            }
        } else {
            Log.i("deleteDirectory", "Failed to delete a single file ：" + filePath$Name + " nonentity！");
//            Toast.makeText(getApplicationContext(), "删除单个文件失败：" + filePath$Name + "不存在！", Toast.LENGTH_SHORT).show();
            return false;
        }
    }

    public String getPackageFirstInstallTime(Context context) {
        String name = context.getPackageName();
        long time = 0;
        try {
            time = context.getPackageManager().getPackageInfo(name, 0).firstInstallTime;
        } catch (Exception e) {
            e.printStackTrace();
        }
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date d1 = new Date(time);
        return format.format(d1);
    }

    private String getPackageLastUpdateTime(Context context) {
        String name = context.getPackageName();
        long time = 0;
        try {
            time = context.getPackageManager().getPackageInfo(name, 0).lastUpdateTime;
        } catch (Exception e) {
            e.printStackTrace();
        }

        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date d1 = new Date(time);
        return format.format(d1);
    }

    private String getVersionCode(Context context) {
        String name = context.getPackageName();
        try {
            return context.getPackageManager().getPackageInfo(name, 0).versionName;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "0000";
    }

    private PackageInfo getPackageInfo(Context context) {
        String name = context.getPackageName();
        try {
            return context.getPackageManager().getPackageInfo(name, 0);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    private void initFacebookLogger() {
        if (facebookLogger != null) {
            return;
        }
        thirdpartyInitStatus.put(ThirdpartyCode.FACEBOOK, true);
        facebookLogger = AppEventsLogger.newLogger(this);

        //这仅作调试用途。在公开部署应用前，请禁用调试记录。
//        FacebookSdk.setIsDebugEnabled(true);
//        FacebookSdk.addLoggingBehavior(LoggingBehavior.APP_EVENTS);
//        facebookLogger.logEvent("qidong");
    }

    private String getUniqueId() {
        return DeviceUtils.getUniqueId(this);
    }

    private String getAppVersion() {
        return getAppVersionName();
    }

    /**
     * 监听cocos消息
     */
    private void listenerCocosMsg() {
        JsbBridge.setCallback((arg0, arg1) -> {
            // 复制剪贴板消息
            if (JsbBridgeCode.MSG_CODE_COPY_CLIPBOARD.equals(arg0)) {
                ClipboardManager clipboard = (ClipboardManager) this.getSystemService(CLIPBOARD_SERVICE);
                if (clipboard != null) {
                    ClipData clip = ClipData.newPlainText("text", arg1);
                    clipboard.setPrimaryClip(clip);
                    JsbBridge.sendToScript(arg0, "已复制到剪贴板");
                }
            } else if (JsbBridgeCode.IN_APP_EVENTS.equals(arg0)) {
                logEvent(arg1);
            } else if (JsbBridgeCode.UNIQUE_ID.equals(arg0)) {
                JsbBridge.sendToScript(arg0, getUniqueId());
            } else if (JsbBridgeCode.VIBRATE.equals(arg0) && StringUtils.isNotEmpty(arg1)) {
                long milliseconds = Long.parseLong(arg1);
                VibrateTool.vibrate(this, milliseconds);
            } else if (JsbBridgeCode.APP_VERSION.equals(arg0)) {
                JsbBridge.sendToScript(arg0, getAppVersion());
            }
        });
    }

    private ResouceConfig getResouceConfig() {
        String[] configUrls = PackageCode.development.indexOf(packageCode) != -1 ? CONFIG_URL_DEVS : CONFIG_URL_PROS;
        return HttpTool.getConfig(configUrls, 0, 0);
    }

    private void initDataStatistics() {
        // android禁止在主线程里面进行http，官方说法是这样会拖慢启动速度，所以这里加一个异步处理
        new Thread(() -> {
            long startTime = System.currentTimeMillis();
            Log.i(HttpTool.TAG, "initDataStatistics start ==============");

            ResouceConfig resouceConfig = getResouceConfig();
            if (resouceConfig == null) {
                Log.e(HttpTool.TAG, "get resource config failed!");
                return;
            }
            if (StringUtils.isEmpty(resouceConfig.httpBaseUrl)) {
                Log.e(HttpTool.TAG, "get resource config httpBaseUrl null!");
                return;
            }
            this.baseUrl = resouceConfig.httpBaseUrl + "/";

            String url = getUrl("hall/channelPackage/thirdEvent?number=" + packageCode);
            Res<ChannelPackageVo> res = HttpTool.get(url, ChannelPackageVo.class);
            channelPackageVo = res.getContent();
            Log.i(HttpTool.TAG, "http request time channelPackageVo : " + channelPackageVo);
            Log.i(HttpTool.TAG, "http request time : " + (System.currentTimeMillis() - startTime));
            if (channelPackageVo != null) {
                if (channelPackageVo.adjust) {
                    this.initAdjust();
                }
                if (channelPackageVo.appsFlyer) {
                    this.listenerAppsFlyer();
                }
            }
        }).start();
    }

    private String getUrl(String url) {
//        String baseUrl = PackageCode.development.indexOf(packageCode) != -1 ? BASE_URL_DEV : BASE_URL_PRO;
        return this.baseUrl + url;
    }

    private void listenerAppsFlyer() {
        thirdpartyInitStatus.put(ThirdpartyCode.APPSFLYER, true);
        AppsFlyerLib appsflyer = AppsFlyerLib.getInstance();
        appsflyer.setMinTimeBetweenSessions(0);
        appsflyer.setDebugLog(false);

        AppsFlyerConversionListener conversionListener = new AppsFlyerConversionListener() {
            @Override
            public void onConversionDataSuccess(Map<String, Object> conversionDataMap) {
                for (String attrName : conversionDataMap.keySet())
                    Log.d(LOG_TAG, "Conversion attribute: " + attrName + " = " + conversionDataMap.get(attrName));
                String status = Objects.requireNonNull(conversionDataMap.get("af_status")).toString();
                if (status.equals("Non-organic")) {
                    if (Objects.requireNonNull(conversionDataMap.get("is_first_launch")).toString().equals("true")) {
                        Log.d(LOG_TAG, "Conversion: First Launch");
                    } else {
                        Log.d(LOG_TAG, "Conversion: Not First Launch");
                    }
                } else {
                    Log.d(LOG_TAG, "Conversion: This is an organic install.");
                }
                conversionData = conversionDataMap;
            }

            @Override
            public void onConversionDataFail(String errorMessage) {
                Log.d(LOG_TAG, "error getting conversion data: " + errorMessage);
            }

            @Override
            public void onAppOpenAttribution(Map<String, String> attributionData) {
                Log.d(LOG_TAG, "onAppOpenAttribution: This is fake call.");
            }

            @Override
            public void onAttributionFailure(String errorMessage) {
                Log.d(LOG_TAG, "error onAttributionFailure : " + errorMessage);
            }
        };

//        ApplicationInfo info = null;
//        try {
//            info = this.getPackageManager().getApplicationInfo(getPackageName(), PackageManager.GET_META_DATA);
//        } catch (PackageManager.NameNotFoundException e) {
//            e.printStackTrace();
//        }
//        String devkey = info.metaData.getString("appsflyer-dev-key");
        String devkey = getMetaDataValue(this.getApplicationContext(), "appsflyer-dev-key", DEV_KEY);
        appsflyer.init(devkey, conversionListener, this);
        appsflyer.start(this);
        Log.i(LOG_TAG, "appsflyer init success");
    }

    private void initAdjust() {
        thirdpartyInitStatus.put(ThirdpartyCode.ADJUST, true);
        String appToken = getMetaDataValue(this.getApplicationContext(), "adjust.app.token", "test");
        if (channelPackageVo != null && StringUtils.isNotEmpty(channelPackageVo.appToken) && !"0".equals("channelPackageVo")) {
            appToken = channelPackageVo.appToken;
        }
//        String environment = packageCode.indexOf(PackageCode.development) != -1 ? AdjustConfig.ENVIRONMENT_SANDBOX : AdjustConfig.ENVIRONMENT_PRODUCTION;
        String environment = AdjustConfig.ENVIRONMENT_PRODUCTION;
        AdjustConfig adjustConfig = new AdjustConfig(this, appToken, environment);
        adjustConfig.setLogLevel(LogLevel.WARN);
        adjustConfig.setLogLevel(LogLevel.VERBOSE);
        adjustConfig.setOnEventTrackingSucceededListener(new OnEventTrackingSucceededListener() {
            @Override
            public void onFinishedEventTrackingSucceeded(AdjustEventSuccess adjustEventSuccess) {
                Log.i(Adjust_LOG_TAG, String.format("adjust event token %s success message: %s", adjustEventSuccess.eventToken, adjustEventSuccess.message));
            }
        });

        adjustConfig.setOnEventTrackingFailedListener(new OnEventTrackingFailedListener() {
            @Override
            public void onFinishedEventTrackingFailed(AdjustEventFailure adjustEventFailure) {
                Log.w(Adjust_LOG_TAG, String.format("adjust event token %s failure message: %s", adjustEventFailure.eventToken, adjustEventFailure.message));
            }
        });

        adjustConfig.setOnSessionTrackingSucceededListener(new OnSessionTrackingSucceededListener() {
            @Override
            public void onFinishedSessionTrackingSucceeded(AdjustSessionSuccess adjustSessionSuccess) {
                Log.i(Adjust_LOG_TAG, "adjust session success" + adjustSessionSuccess.message);
            }
        });

        adjustConfig.setOnSessionTrackingFailedListener(new OnSessionTrackingFailedListener() {
            @Override
            public void onFinishedSessionTrackingFailed(AdjustSessionFailure adjustSessionFailure) {
                Log.w(Adjust_LOG_TAG, "adjust session failure" + adjustSessionFailure.message);
            }
        });

        Adjust.onCreate(adjustConfig);
        Log.i(Adjust_LOG_TAG, "adjust init success, environment: " + environment + " , appToken: " + appToken);
    }

    private void logEvent(String json) {
        if (json == null || json.length() == 0) {
            return;
        }
        EventData eventData = JSONTool.fromJson(json, EventData.class);
        if (eventData == null) {
            return;
        }

        Log.d("LOG_EVENT", "log event : " + json);
        ThirdpartyCode thirdpartyCode = ThirdpartyCode.of(eventData.getType());
        if (!thirdpartyInitStatus.get(thirdpartyCode)) {
            Log.w("LOG_EVENT", String.format("%s not init", eventData.getType()));
            return;
        }

        if (ThirdpartyCode.APPSFLYER == thirdpartyCode) {
            appsflyerLogEvents(eventData);
        } else if (ThirdpartyCode.FACEBOOK == thirdpartyCode) {
            faceBookLogEvents(eventData);
        } else if (ThirdpartyCode.ADJUST == thirdpartyCode) {
            adjustLogEvents(eventData);
        }
    }

    private void appsflyerLogEvents(EventData eventData) {
        Map<String, Object> eventValues = new HashMap<>();
        if (eventData.getEventParams() != null) {
            for (EventData eventParam : eventData.getEventParams()) {
                eventValues.put(eventParam.getName(), eventParam.getValue());
            }
        }
        AppsFlyerLib.getInstance().logEvent(getApplicationContext(),
                eventData.getName(), eventValues, new AppsFlyerRequestListener() {
                    @Override
                    public void onSuccess() {
                        Log.i(LOG_TAG, eventData.getName() + " - success");
                    }

                    @Override
                    public void onError(int i, String s) {
                        Log.e(LOG_TAG, String.format("faild i: %s, s: %s", i, s));
                    }
                });
    }

    private void faceBookLogEvents(EventData eventData) {
        Bundle params = new Bundle();
        if (eventData.getEventParams() != null) {
            for (EventData eventParam : eventData.getEventParams()) {
                params.putString(eventParam.getName(), eventParam.getValue().toString());
            }
        }
        facebookLogger.logEvent(eventData.getName(), params);
    }

    private void adjustLogEvents(EventData eventData) {
        List<EventData> eventParams = eventData.getEventParams();
        String eventValue = getMetaDataValue(this.getApplicationContext(), "adjust." + eventData.getName(), "test");
        if (channelPackageVo != null) {
            if ("register".equals(eventData.getName()) && StringUtils.isNotEmpty(channelPackageVo.register) && !"0".equals(channelPackageVo.register)) {
                eventValue = channelPackageVo.register;
            } else if ("login".equals(eventData.getName()) && StringUtils.isNotEmpty(channelPackageVo.login) && !"0".equals(channelPackageVo.login)) {
                eventValue = channelPackageVo.login;
            } else if ("first-purchase".equals(eventData.getName()) && StringUtils.isNotEmpty(channelPackageVo.firstPurChase) && !"0".equals(channelPackageVo.firstPurChase)) {
                eventValue = channelPackageVo.firstPurChase;
            } else if ("purchase".equals(eventData.getName()) && StringUtils.isNotEmpty(channelPackageVo.purchase) && !"0".equals(channelPackageVo.purchase)) {
                eventValue = channelPackageVo.purchase;
            } else if ("first-pull-purchase".equals(eventData.getName()) && StringUtils.isNotEmpty(channelPackageVo.firstPullPurchase) && !"0".equals(channelPackageVo.firstPullPurchase)) {
                eventValue = channelPackageVo.firstPullPurchase;
            } else if ("pull-purchase".equals(eventData.getName()) && StringUtils.isNotEmpty(channelPackageVo.pullPurchase) && !"0".equals(channelPackageVo.pullPurchase)) {
                eventValue = channelPackageVo.pullPurchase;
            }
        }

        AdjustEvent adjustEvent = new AdjustEvent(eventValue);
        if (eventParams != null && eventParams.size() > 0) {
            for (EventData eventParam : eventParams) {
                String paramName = eventParam.getName();
                if ("revenue".equals(paramName)) {
                    adjustEvent.setRevenue(Double.valueOf(eventParam.getValue().toString()), eventParam.getType());
                } else if ("orderId".equals(paramName)) {
                    adjustEvent.setOrderId(eventParam.getValue().toString());
//                } else if ("productId".equals(paramName)) {
//                    adjustEvent.setProductId(eventParam.getValue().toString());
//                } else if ("pwd".equals(paramName)) {
//                    adjustEvent.setPurchaseToken(eventParam.getValue().toString());
                }
            }
        }
        Adjust.trackEvent(adjustEvent);
        Log.i(Adjust_LOG_TAG, String.format("adjust log event param: %s, event token: %s ", eventData.getName(), eventValue));
    }

    public String getIMEI() {
        String androidId = Settings.System.getString(getContentResolver(), Settings.Secure.ANDROID_ID);

        if (TextUtils.isEmpty(androidId)) {
            String m_szDevIDshort = "35" + //we make this look like a valid IMEI
                    Build.BOARD.length() % 10 +
                    Build.BRAND.length() % 10 +
                    Build.CPU_ABI.length() % 10 +
                    Build.DEVICE.length() % 10 +
                    Build.DISPLAY.length() % 10 +
                    Build.HOST.length() % 10 +
                    Build.ID.length() % 10 +
                    Build.MANUFACTURER.length() % 10 +
                    Build.MODEL.length() % 10 +
                    Build.PRODUCT.length() % 10 +
                    Build.TAGS.length() % 10 +
                    Build.TYPE.length() % 10 +
                    Build.USER.length() % 10; // 13 digits
            androidId = m_szDevIDshort;
        }

        return androidId;
    }

    //获取当前应用的版本号(展示给消费者的版本号)
    private String getAppVersionName() {
        // 获取packagemanager的实例
        PackageManager packageManager = getPackageManager();
        // getPackageName()是你当前类的包名，0代表是获取版本信息
        PackageInfo packInfo = null;
        try {
            packInfo = packageManager.getPackageInfo(getPackageName(), 0);
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        }
        String version = packInfo.versionName;
        return version;
    }

    @Override
    protected void onResume() {
        super.onResume();
        SDKWrapper.shared().onResume();
        Adjust.onResume();
    }

    @Override
    protected void onPause() {
        super.onPause();
        SDKWrapper.shared().onPause();
        Adjust.onPause();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        // Workaround in https://stackoverflow.com/questions/16283079/re-launch-of-activity-on-home-button-but-only-the-first-time/16447508
        if (!isTaskRoot()) {
            return;
        }
        SDKWrapper.shared().onDestroy();
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        SDKWrapper.shared().onActivityResult(requestCode, resultCode, data);
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        SDKWrapper.shared().onNewIntent(intent);
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        SDKWrapper.shared().onRestart();
    }

    @Override
    protected void onStop() {
        super.onStop();
        SDKWrapper.shared().onStop();
    }

    @Override
    public void onBackPressed() {
        SDKWrapper.shared().onBackPressed();
        super.onBackPressed();
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        SDKWrapper.shared().onConfigurationChanged(newConfig);
        super.onConfigurationChanged(newConfig);
    }

    @Override
    protected void onRestoreInstanceState(Bundle savedInstanceState) {
        SDKWrapper.shared().onRestoreInstanceState(savedInstanceState);
        super.onRestoreInstanceState(savedInstanceState);
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        SDKWrapper.shared().onSaveInstanceState(outState);
        super.onSaveInstanceState(outState);
    }

    @Override
    protected void onStart() {
        SDKWrapper.shared().onStart();
        super.onStart();
    }

    @Override
    public void onLowMemory() {
        SDKWrapper.shared().onLowMemory();
        super.onLowMemory();
    }

    // 获取 路径中的图片 保存到本地
    public static void saveTextureToLocal(String pngPath) {
        Log.d("image png path", pngPath);
        //从路径中读取 照片
        Bitmap bmp = BitmapFactory.decodeFile(pngPath);

        // fileName ==textureName  尽量和JS保存的一致
        String fileName = "textureName";
        File file = new File(pngPath);
        try {
            FileOutputStream fos = new FileOutputStream(file);
            bmp.compress(Bitmap.CompressFormat.PNG, 100, fos);
            fos.flush();
            fos.close();
            Log.d("image save success!!", pngPath);

        } catch (FileNotFoundException e) {
            Log.d("image save error ", e.toString());
            e.printStackTrace();
        } catch (IOException e) {
            Log.d("image save error ", e.toString());
            e.printStackTrace();
        }

        // 其次把文件插入到系统图库
        try {
            MediaStore.Images.Media.insertImage(AppActivity.getInstance().getApplicationContext().getContentResolver(),
                    file.getAbsolutePath(), fileName, null);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        // 最后通知图库更新
        AppActivity.getInstance().getApplicationContext().sendBroadcast(new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE, Uri.parse(file.getAbsolutePath())));

    }

    //开始执行版本更新操作
    public static String downloadApk(String downloadUrl, String titleStr, String contentStr) throws Exception {
        if (StringUtils.isEmpty(downloadUrl) || downloadUrl.length() < 10) {
            Log.w("DownloadApk", "url error: " + downloadUrl);
            return "url error";
        }
        new Thread(() -> {
            String realUrl = null;
            try {
                realUrl = getRedirectUrl(downloadUrl);
            } catch (Exception e) {
                e.printStackTrace();
                Log.e("DownloadApk", "getRedirectUrl error " + e.toString());
            }
            //初始化版本控制
            VersionControl versionControl = new VersionControl();
            boolean download = versionControl.download(instance, realUrl, titleStr, contentStr);
            if (download) {
                versionControl.registerReceiver(instance);
            }
        }).start();

        return "";
    }

    /**
     * 获得短链接重定向后的地址
     *
     * @param path
     * @return
     * @throws Exception
     */
    public static String getRedirectUrl(String path) throws Exception {
        HttpURLConnection conn = (HttpURLConnection) new URL(path)
                .openConnection();
        conn.setInstanceFollowRedirects(false);
        conn.setConnectTimeout(5000);
        String realUrl = conn.getHeaderField("Location");
        if (StringUtils.isEmpty(realUrl)) {
            realUrl = conn.getHeaderField("location");
        }
        if (StringUtils.isEmpty(realUrl)) {
            realUrl = conn.getHeaderField("Target");
        }
        if (StringUtils.isEmpty(realUrl)) {
            realUrl = path;
        }
        return realUrl;
    }

    public static void installApk(String path) {
        String packageName = instance.getPackageName();
        Intent intent = new Intent(Intent.ACTION_VIEW);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        File file = new File(Uri.parse(path).getPath());
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            intent.setFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
            Uri uri = FileProvider.getUriForFile(instance, packageName + ".fileprovider", file);
            intent.setDataAndType(uri, "application/vnd.android.package-archive");
        } else {
            intent.setDataAndType(Uri.fromFile(file), "application/vnd.android.package-archive");
        }
        instance.startActivity(intent);
    }

    private static ImageView sSplashBgImageView = null;

    /**
     * 显示启动页
     */
    private static void showSplash() {
        sSplashBgImageView = new ImageView(instance);
//        sSplashBgImageView.setBackgroundColor(
//                instance.getResources().getColor(R.drawable.splash)
//        );
        sSplashBgImageView.setImageResource(R.drawable.splash);
        sSplashBgImageView.setScaleType(ImageView.ScaleType.FIT_XY);
        instance.addContentView(sSplashBgImageView,
                new WindowManager.LayoutParams(
                        FrameLayout.LayoutParams.MATCH_PARENT,
                        FrameLayout.LayoutParams.MATCH_PARENT
                )
        );
    }

    public static void showSpl() {
        instance.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (sSplashBgImageView != null) {
                    sSplashBgImageView.setVisibility(View.VISIBLE);
                }
            }
        });
    }

    /**
     * 这是给 CC JS 调用的隐藏原生开屏背景的方法
     */
    public static void hideSplash() {
        instance.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (sSplashBgImageView != null) {
                    sSplashBgImageView.setVisibility(View.INVISIBLE);
                }
            }
        });
    }

    /**
     * 获得firebaseToken
     *
     * @return
     */
    public static String getFirebaseToken() {
        return FirebaseUtil.getToken();
    }

    public static final String POST_NOTIFICATIONS = "android.permission.POST_NOTIFICATIONS";
    public static void requestNotificationPermission(Activity activity) {
        if (Build.VERSION.SDK_INT >= 33) {
            if (ActivityCompat.checkSelfPermission(activity, POST_NOTIFICATIONS) == PackageManager.PERMISSION_DENIED) {
                if (!ActivityCompat.shouldShowRequestPermissionRationale(activity, POST_NOTIFICATIONS)) {
                    NotificationUtil.createAlert(activity, new Runnable() {
                        @Override
                        public void run() {
                            enableNotification(activity);
                        }
                    });
                } else {
                    ActivityCompat.requestPermissions(activity, new String[]{POST_NOTIFICATIONS}, 100);
                }
            }
        } else {
            boolean enabled = NotificationManagerCompat.from(activity).areNotificationsEnabled();
            if (!enabled) {
                enableNotification(activity);
            }
        }
    }

    public static void enableNotification(Context context) {
        try {
            Intent intent = new Intent();
            intent.setAction(Settings.ACTION_APP_NOTIFICATION_SETTINGS);
            intent.putExtra(Settings.EXTRA_APP_PACKAGE, context.getPackageName());
            intent.putExtra(Settings.EXTRA_CHANNEL_ID, context.getApplicationInfo().uid);
            intent.putExtra("app_package", context.getPackageName());
            intent.putExtra("app_uid", context.getApplicationInfo().uid);
            context.startActivity(intent);
        } catch (Exception e) {
            e.printStackTrace();
            Intent intent = new Intent();
            intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
            Uri uri = Uri.fromParts("package", context.getPackageName(), null);
            intent.setData(uri);
            context.startActivity(intent);
        }
    }

}
