package com.cocos.game.tool;

public class ThreadUtil {
    public static void asyncRun(Runnable runnable){
        new Thread(runnable).start();
    }
}
