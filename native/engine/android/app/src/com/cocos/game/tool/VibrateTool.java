package com.cocos.game.tool;

import android.app.Activity;
import android.app.Service;
import android.os.Vibrator;

public class VibrateTool {
    //震动milliseconds毫秒
    public static void vibrate(final Activity activity, long milliseconds) {
        Vibrator vib = (Vibrator) activity.getSystemService(Service.VIBRATOR_SERVICE);
        vib.vibrate(milliseconds);
    }
    //以pattern[]方式震动
    public static void vibrate(final Activity activity, long[] pattern,int repeat){
        Vibrator vib = (Vibrator) activity.getSystemService(Service.VIBRATOR_SERVICE);
        vib.vibrate(pattern,repeat);
    }
    //取消震动
    public static void virateCancle(final Activity activity){
        Vibrator vib = (Vibrator) activity.getSystemService(Service.VIBRATOR_SERVICE);
        vib.cancel();
    }
}
