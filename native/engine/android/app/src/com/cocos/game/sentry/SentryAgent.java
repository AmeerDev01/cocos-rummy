package com.cocos.game.sentry;
 
import android.util.Log;
 
 
import java.util.Map;

import io.sentry.Sentry;

public class SentryAgent {
    public static void postException(int category, String name, String location, String reason, String stack) {
        String message = String.format(" - msg : %s\n - location : %s\n - detail : \n%s\n", reason, location, stack);
        Sentry.captureMessage(message);
//        Log.i("SentryAgent", message);
    }
}