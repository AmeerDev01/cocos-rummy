package com.cocos.game;

import static android.content.Context.DOWNLOAD_SERVICE;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.DownloadManager;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.database.Cursor;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.util.Log;


import androidx.core.content.FileProvider;

import com.cocos.lib.JsbBridge;

import java.io.File;

public class VersionControl {

    //第一步: 下载APK
    private long downloadId = -1;
    private DownloadManager downloadManager;

    public boolean download(Context context, String url, String titleStr, String contentStr) {
        String apkName = url.substring(url.lastIndexOf("/") + 1);
        //设置下载的路径
        File file = new File(context.getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS), "hugeWin.apk");
        // 暂时注释掉，有可能远程包已经更新了，本地的包还是旧版本
//        if (file.exists()) {
//            String packageName = context.getPackageName();
//            Intent intent = new Intent(Intent.ACTION_VIEW);
//            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
//            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
//                intent.setFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
//                Uri uri = FileProvider.getUriForFile(context, packageName + ".fileprovider", file);
//                intent.setDataAndType(uri, "application/vnd.android.package-archive");
//            } else {
//                intent.setDataAndType(Uri.fromFile(file), "application/vnd.android.package-archive");
//            }
//            context.startActivity(intent);
//            return false;
//        }
        //创建下载任务
        DownloadManager.Request request = new DownloadManager.Request(Uri.parse(url));
        //在通知栏中显示，默认就是显示的
        request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE);
        request.setTitle(titleStr);
        request.setDescription(contentStr);
        request.setDestinationUri(Uri.fromFile(file));
        file.getAbsolutePath();
        //获取DownloadManager
        downloadManager = (DownloadManager) context.getSystemService(DOWNLOAD_SERVICE);
        //将下载请求放入队列
        downloadId = downloadManager.enqueue(request);

        return true;
    }

    //第二步: 监听下载结果
    private BroadcastReceiver broadcastReceiver;

    public void registerReceiver(Context context) {
        // 注册广播监听系统的下载完成事件。
        IntentFilter intentFilter = new IntentFilter(DownloadManager.ACTION_DOWNLOAD_COMPLETE);
        broadcastReceiver = new BroadcastReceiver() {
            @Override
            public void onReceive(Context context, Intent intent) {
                long thisDownloadId = intent.getLongExtra(DownloadManager.EXTRA_DOWNLOAD_ID, -1);
                if (thisDownloadId != -1 && downloadId != -1) {
                    if (thisDownloadId == downloadId) {
                        //下载完成，检查下载状态
                        checkStatus(context);
                    }
                }
            }
        };
        context.registerReceiver(broadcastReceiver, intentFilter);
    }

    public void unRegisterReceiver(Context context) {
        if (broadcastReceiver != null) {
            context.unregisterReceiver(broadcastReceiver);
        }
    }

    //第三部: 检查下载状态，是否下载成功
    @SuppressLint("Range")
    private void checkStatus(Context context) {

        DownloadManager.Query query = new DownloadManager.Query();
        // 执行查询, 返回一个 Cursor (相当于查询数据库)
        Cursor cursor = downloadManager.query(query);
        if (!cursor.moveToFirst()) {
            cursor.close();
        }
        int id = cursor.getInt(cursor.getColumnIndex(DownloadManager.COLUMN_ID));
        //通过下载的id查找
        query.setFilterById(id);

        // 获取下载好的 apk 路径
        String localFilename = null;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            localFilename = cursor.getString(cursor.getColumnIndex(DownloadManager.COLUMN_LOCAL_URI));
        } else {
            localFilename = cursor.getString(cursor.getColumnIndex(DownloadManager.COLUMN_LOCAL_FILENAME));
        }

        if (cursor.moveToFirst()) {
            int status = cursor.getInt(cursor.getColumnIndex(DownloadManager.COLUMN_STATUS));
            switch (status) {
                case DownloadManager.STATUS_PAUSED:
                    //下载暂停
                    Log.d("fxHou", "Download pause");
                    break;
                case DownloadManager.STATUS_PENDING:
                    //下载延迟
                    Log.d("fxHou", "Download delay");
                    break;
                case DownloadManager.STATUS_RUNNING:
                    //正在下载
                    Log.d("fxHou", "downloading");
                    break;
                case DownloadManager.STATUS_SUCCESSFUL:
                    //下载完成安装APK
                    installApk(context, localFilename);
                    cursor.close();
                    break;
                case DownloadManager.STATUS_FAILED:
                    //下载失败
                    Log.d("fxHou", "download failed");
                    cursor.close();
                    JsbBridge.sendToScript("downloadApk", "failed");
                    break;
                default:
                    break;
            }
        }
    }

    //第四部: 安装apk
    private void installApk(Context context, String path) {
        String packageName = context.getPackageName();
        Intent intent = new Intent(Intent.ACTION_VIEW);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        File file = new File(Uri.parse(path).getPath());
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            intent.setFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
            Uri uri = FileProvider.getUriForFile(context, packageName + ".fileprovider", file);
            intent.setDataAndType(uri, "application/vnd.android.package-archive");
        } else {
            intent.setDataAndType(Uri.fromFile(file), "application/vnd.android.package-archive");
        }
        context.startActivity(intent);
    }

}
