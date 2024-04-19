package com.cocos.game.tool;

import android.app.AlertDialog;
import android.app.AppOpsManager;
import android.app.Dialog;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.media.AudioAttributes;
import android.media.Ringtone;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;

import androidx.annotation.RequiresApi;
import androidx.core.app.NotificationCompat;
import androidx.fragment.app.DialogFragment;

import com.cocos.game.AppActivity;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

import cocos.com.hugeWin777.R;

public class NotificationUtil {
    private static final String CHECK_OP_NO_THROW = "checkOpNoThrow";
    private static final String OP_POST_NOTIFICATION = "OP_POST_NOTIFICATION";

    /**
     * 普通渠道
     */
    private static final String DEFAULT_CHANNEL = "DEFAULT_CHANNEL";
    /**
     * 紧急通知渠道
     */
    private static final String URGENCY_CHANNEL = "Common";

    private static final Map<String, ChannelInfo> channelDefines = new HashMap<>();

    public static void createAlert(Context context, Runnable runnable){
        AlertDialog.Builder builder = new AlertDialog.Builder(context);
        builder.setTitle("Notification");
        builder.setMessage("123123")
                .setPositiveButton("Setting", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int id) {
                        runnable.run();
                    }
                })
                .setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int id) {
                        // User cancels the dialog.
                    }
                });
        builder.show();
    }

    /**
     * 初始化通知
     *
     * @param context
     */
    public static void initNotification(Context context) {
        channelDefines.put(URGENCY_CHANNEL, new ChannelInfo(URGENCY_CHANNEL, URGENCY_CHANNEL, context));
//        channelDefines.put(DEFAULT_CHANNEL, new ChannelInfo(DEFAULT_CHANNEL, DEFAULT_CHANNEL, context));
    }

    public static void notify(CustomNotification customNotification) {
        Ringtone ringtone = RingtoneManager.getRingtone(AppActivity.getInstance(), Settings.System.DEFAULT_NOTIFICATION_URI);
        if (ringtone != null) {
            ringtone.play();
        }
//        if (customNotification.getMessageType() == 1) {
        urgencyNotify(customNotification.getTitle(), customNotification.getContent());
//        } else {
//            commonNotify(customNotification.getTitle(), customNotification.getContent());
//        }
    }

    /**
     * 创建重要通知
     *
     * @param title
     * @param content
     */
    private static void urgencyNotify(String title, String content) {
        ChannelInfo channelInfo = channelDefines.get(URGENCY_CHANNEL);
        AppActivity appActivity = AppActivity.getInstance();

        Intent intent = new Intent(appActivity, AppActivity.class);
        PendingIntent pendingIntent = PendingIntent.getActivity(appActivity, 0, intent, PendingIntent.FLAG_IMMUTABLE);
        NotificationCompat.Builder builder = new NotificationCompat.Builder(appActivity, channelInfo.getId());
        builder.setDefaults(Notification.DEFAULT_ALL | Notification.DEFAULT_SOUND)
                .setContentTitle(title)
                .setContentText(content)
                .setPriority(NotificationCompat.PRIORITY_HIGH) // 高 发出声音。
                .setSmallIcon(R.mipmap.ic_launcher)
                .setNumber(999) // 自定义桌面通知数量
                .setContentIntent(pendingIntent)
                .setCategory(NotificationCompat.CATEGORY_MESSAGE)
                .setVisibility(NotificationCompat.VISIBILITY_PUBLIC)
                .setAutoCancel(true);
        int id = (int) (Math.random() * 100000);
        channelInfo.getNotificationManager().notify(id, builder.build());
    }

    /**
     * 创建普通通知
     *
     * @param title
     * @param content
     */
    private static void commonNotify(String title, String content) {
        ChannelInfo channelInfo = channelDefines.get(DEFAULT_CHANNEL);
        AppActivity appActivity = AppActivity.getInstance();
        Intent intent = new Intent(appActivity, AppActivity.class);
        PendingIntent pendingIntent = PendingIntent.getActivity(appActivity, 0, intent, PendingIntent.FLAG_IMMUTABLE);
        NotificationCompat.Builder builder = new NotificationCompat.Builder(appActivity, channelInfo.getId());
        builder.setDefaults(Notification.DEFAULT_ALL | Notification.DEFAULT_SOUND)
                .setContentTitle(title)
                .setContentText(content)
                .setPriority(NotificationCompat.PRIORITY_DEFAULT)
                .setSmallIcon(R.mipmap.ic_launcher)
//                .setLargeIcon(BitmapFactory.decodeResource(resources, R.mipmap.ic_avatar))
                .setNumber(999) // 自定义桌面通知数量
                .setContentIntent(pendingIntent)
                .setCategory(NotificationCompat.CATEGORY_MESSAGE)
                .setVisibility(NotificationCompat.VISIBILITY_PUBLIC)
                .setAutoCancel(true);
        int id = (int) (Math.random() * 100000);
        channelInfo.getNotificationManager().notify(id, builder.build());
    }

    //调用该方法获取是否开启通知栏权限
    public static boolean isNotifyEnabled(Context context) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            return isEnableV26(context);
        } else {
            return isEnabledV19(context);
        }
    }

    /**
     * 8.0以下判断
     *
     * @param context api19  4.4及以上判断
     * @return
     */
    @RequiresApi(api = Build.VERSION_CODES.KITKAT)
    private static boolean isEnabledV19(Context context) {

        AppOpsManager mAppOps =
                (AppOpsManager) context.getSystemService(Context.APP_OPS_SERVICE);

        ApplicationInfo appInfo = context.getApplicationInfo();
        String pkg = context.getApplicationContext().getPackageName();
        int uid = appInfo.uid;
        Class appOpsClass = null;

        try {
            appOpsClass = Class.forName(AppOpsManager.class.getName());

            Method checkOpNoThrowMethod =
                    appOpsClass.getMethod(CHECK_OP_NO_THROW,
                            Integer.TYPE, Integer.TYPE, String.class);

            Field opPostNotificationValue = appOpsClass.getDeclaredField(OP_POST_NOTIFICATION);
            int value = (Integer) opPostNotificationValue.get(Integer.class);

            return ((Integer) checkOpNoThrowMethod.invoke(mAppOps, value, uid, pkg) ==
                    AppOpsManager.MODE_ALLOWED);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }


    /**
     * 8.0及以上通知权限判断
     *
     * @param context
     * @return
     */
    private static boolean isEnableV26(Context context) {
        ApplicationInfo appInfo = context.getApplicationInfo();
        String pkg = context.getApplicationContext().getPackageName();
        int uid = appInfo.uid;
        try {
            NotificationManager notificationManager = (NotificationManager)
                    context.getSystemService(Context.NOTIFICATION_SERVICE);
            Method sServiceField = notificationManager.getClass().getDeclaredMethod("getService");
            sServiceField.setAccessible(true);
            Object sService = sServiceField.invoke(notificationManager);

            Method method = sService.getClass().getDeclaredMethod("areNotificationsEnabledForPackage"
                    , String.class, Integer.TYPE);
            method.setAccessible(true);
            return (boolean) method.invoke(sService, pkg, uid);
        } catch (Exception e) {
            return true;
        }
    }

    private static class ChannelInfo {
        private String id;
        private String name;
        private NotificationManager notificationManager;
        private NotificationChannel notificationChannel;

        public ChannelInfo(String id, String name, Context context) {
            this.id = id;
            this.name = name;
            notificationManager = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);

            int importance = NotificationManager.IMPORTANCE_HIGH;
            if (URGENCY_CHANNEL.equals(id)) {
                importance = NotificationManager.IMPORTANCE_HIGH;
            }
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
//                Uri parse = Uri.parse("android.resource://" + context.getPackageName() + "/" + R.raw.beer);
                Uri defaultSoundUri = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);
                AudioAttributes att = new AudioAttributes.Builder()
                        .setUsage(AudioAttributes.USAGE_NOTIFICATION)
                        .setContentType(AudioAttributes.CONTENT_TYPE_SPEECH)
                        .build();
                notificationChannel = new NotificationChannel(id, name, importance);
                notificationChannel.setSound(defaultSoundUri, att);
                notificationChannel.enableVibration(true);
                notificationChannel.setLockscreenVisibility(Notification.VISIBILITY_PUBLIC);
                notificationManager.createNotificationChannel(notificationChannel);
            }
        }

        public String getId() {
            return id;
        }

        public String getName() {
            return name;
        }

        public NotificationManager getNotificationManager() {
            return notificationManager;
        }
    }

    /**
     * 自定义消息通知
     */
    public static class CustomNotification {
        private String title;
        private String content;
        /**
         * 消息类型 0：普通 1：紧急
         */
        private int messageType;
        private String messageId;
        private Long messageSendLong;

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getContent() {
            return content;
        }

        public void setContent(String content) {
            this.content = content;
        }

        public int getMessageType() {
            return messageType;
        }

        public void setMessageType(int messageType) {
            this.messageType = messageType;
        }

        public String getMessageId() {
            return messageId;
        }

        public void setMessageId(String messageId) {
            this.messageId = messageId;
        }

        public Long getMessageSendLong() {
            return messageSendLong;
        }

        public void setMessageSendLong(Long messageSendLong) {
            this.messageSendLong = messageSendLong;
        }
    }

}
