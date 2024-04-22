package com.cocos.game.service;

import android.util.Log;

import com.cocos.game.AppActivity;
import com.cocos.game.firebase.FirebaseUtil;
import com.cocos.game.tool.NotificationUtil;
import com.cocos.game.tool.StringUtils;
import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

import java.util.Map;

public class ExampleFCMService extends FirebaseMessagingService {
    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        super.onMessageReceived(remoteMessage);

        if (remoteMessage == null) {
            return;
        }

        String title = "", content = "";
        RemoteMessage.Notification notification = remoteMessage.getNotification();
        if (notification == null) {
            return;
        }
        Map<String, String> data = remoteMessage.getData();
        if (notification != null) {
            title = notification.getTitle();
            content = notification.getBody();
        } else if (data != null) { //这个消息体是亚马逊封装的，其实也可以自定义
            if (data.containsKey("title")) {
                title = data.get("title");
            } else if (data.containsKey("default")) {
                title = data.get("content");
            } else if (data.containsKey("message")) {
                title = data.get("message");
            }
            if (data.containsKey("content")) {
                content = data.get("content");
            }
        }

        if (StringUtils.isEmpty(title)) {
            title = "default title";
        }
        if (StringUtils.isEmpty(content)) {
            content = "default content";
        }

        NotificationUtil.CustomNotification customNotification = new NotificationUtil.CustomNotification();
        customNotification.setTitle(title);
        customNotification.setContent(content);
        customNotification.setMessageId(remoteMessage.getMessageId());
        customNotification.setMessageType(1);
        NotificationUtil.notify(customNotification);
        Log.i("fcm", remoteMessage.getMessageId());
    }

    /**
     * 该方法只有在token有变化时才会有输出，应用重装时会变化
     *
     * @param token
     */
    @Override
    public void onNewToken(String token) {
        super.onNewToken(token);
        Log.i("fcm", "firebase token : " + token);
        FirebaseUtil.saveToken(token);
//        AmazonRegister.instance().register(token);
    }
}