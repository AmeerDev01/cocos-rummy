## 打包说明
> 正式包的证书: hugeWin.keystore   <br>
> 正式包的证书信息 <br>
> 密钥库密码: qweasd-000   <br>
> 密钥库别名: hugeWinalias  <br>
> 密钥库别名密码: qweasd-000   <br>
> 
  #### 修改需要包id的文件列表
  * AppActivity.java
  * AndroidManifest.xml
  * google-services.json
### master(主包) 印尼版
  * 包id cocos.com.hugeWin777
### master(主包) 印度版
  * 包id cocos.com.hugeWin777.india
### miMarket(海外小米包)
  * 包id coco.com.hugeWin
### XmHy1
  * 包id coco.com.hugeWin.domino
  * 需要支持平台 armeabi-v7a:arm64-v8a
  * 修改 native\engine\android\app\build.gradle 中的 
    > debug {
            debuggable false
            jniDebuggable false
            renderscriptDebuggable false
        }

### 打包步骤
* 在git的console命令输入中执行 merge-subgame3.sh
* 修改包id，文件修改参考 包id文件列表
* 构建发布 -> 构建
* 把 native\engine\android\build.gradle.tmp 文件内容复制到 build\android\proj\build.gradle 文件
* 修改添加 android.enableJetifier=true 配置到 build\android\proj\gradle.properties 文件的android.useAndroidX=true配置的下面
* 修改 native\engine\android\app\build.gradle 中的 versionName和PACKAGE_CODE
* 生成热更新本地文件，一般升级apk本地的热更新版本要比线上的热更新版本要高一个
* 构建发布 -> 构建
* 构建发布 -> 生成

### 在游戏里面旋转屏幕后，安卓就崩溃了
> 目前这个bug在3.7.3修复了，3.7.0需要修改底层的C代码，修改文件：<br>
> cocos\editors\Creator\3.7.0\resources\resources\3d\engine\native\cocos\platform\android\AndroidPlatform.cpp,<br>
> 在该文件的412行的下面添加代码 ev.windowId = ISystemWindow::mainWindowId; <br>
> github修改该bug的解决方案: https://github.com/cocos/cocos-engine/commit/3a9ea052f3854dcdd42cc7ba4953668f7980b4af

### 替换cocos底层Java代码，用于实现在webview中h5打开本地相册的功能, CocosEditBoxActivity是解决键盘输入时崩溃问题
> 把 native/endine/android/CocosActivity.java <br>
>  native/endine/android/CocosWebView.java <br>
>  native/endine/android/CocosWebViewHelper.java <br>
>  native/endine/android/CocosEditBoxActivity.java <br>
> 这几个文件覆盖Cocos引擎代码，<br>
> 需要覆盖引擎的路径为 cocos\editors\Creator\3.7.0\resources\resources\3d\engine\native\cocos\platform\android\java\src\com\cocos\lib<br>
> 该路径为 windows路径，macos系统自己去找
### 替换cocos底层C++代码，用于实现JS异常捕获发送到sentry平台
> 把 native/endine/android/CocosApplication.cpp <br>
> 需要覆盖引擎的路径为 cocos\editors\Creator\3.7.0\resources\resources\3d\engine\native\cocos\application<br>
> 该路径为 windows路径，macos系统自己去找