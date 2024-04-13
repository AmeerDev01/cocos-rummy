package com.cocos.game.service;

import android.util.Log;

import com.cocos.game.AppActivity;
import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

public class ExampleFCMService extends FirebaseMessagingService {
    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        super.onMessageReceived(remoteMessage);

        Log.i("fcm", remoteMessage.getData().toString());
    }

    @Override
    public void onNewToken(String s) {
        super.onNewToken(s);
        Log.i("fcm", "start : " + s);
        AppActivity.initAm(s);
        Log.i("fcm", "end : " + s);
    }
}