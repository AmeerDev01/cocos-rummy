/****************************************************************************
 Copyright (c) 2010-2013 cocos2d-x.org
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2022 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
 worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
 not use Cocos Creator software for developing other software or tools that's
 used for developing games. You are not granted to publish, distribute,
 sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
****************************************************************************/
#import "AppDelegate.h"
#import "ViewController.h"
#import "View.h"

#include "platform/ios/IOSPlatform.h"
#import "platform/ios/AppDelegateBridge.h"
#import "service/SDKWrapper.h"
#include "platform/apple/JsbBridge.h"
#import <UIKit/UIKit.h>
#import <AudioToolbox/AudioToolbox.h>
JsbBridge* jsbBridge = nullptr;
UIApplication* app = nullptr;



@implementation AppDelegate
@synthesize window;
@synthesize appDelegateBridge;

#pragma mark -
#pragma mark Application lifecycle

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [[SDKWrapper shared] application:application didFinishLaunchingWithOptions:launchOptions];
    appDelegateBridge = [[AppDelegateBridge alloc] init];
    
    // Add the view controller's view to the window and display.
    CGRect bounds = [[UIScreen mainScreen] bounds];
    self.window   = [[UIWindow alloc] initWithFrame:bounds];

    // Should create view controller first, cc::Application will use it.
    _viewController                           = [[ViewController alloc] init];
    _viewController.view                      = [[View alloc] initWithFrame:bounds];
    _viewController.view.contentScaleFactor   = UIScreen.mainScreen.scale;
    _viewController.view.multipleTouchEnabled = true;
    [self.window setRootViewController:_viewController];

    [self.window makeKeyAndVisible];
    [appDelegateBridge application:application didFinishLaunchingWithOptions:launchOptions];
    
    jsbBridge = [JsbBridge sharedInstance];
    [jsbBridge setCallback:icallback];
    [UIApplication sharedApplication].idleTimerDisabled = YES;
    return YES;
}

- (void)applicationWillResignActive:(UIApplication *)application {
    /*
     Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
     Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
     */
    [[SDKWrapper shared] applicationWillResignActive:application];
    [appDelegateBridge applicationWillResignActive:application];
}

- (void)applicationDidBecomeActive:(UIApplication *)application {
    /*
     Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
     */
    [[SDKWrapper shared] applicationDidBecomeActive:application];
    [appDelegateBridge applicationDidBecomeActive:application];
}

- (void)applicationDidEnterBackground:(UIApplication *)application {
    /*
     Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
     If your application supports background execution, called instead of applicationWillTerminate: when the user quits.
     */
    [[SDKWrapper shared] applicationDidEnterBackground:application];
}

- (void)applicationWillEnterForeground:(UIApplication *)application {
    /*
     Called as part of  transition from the background to the inactive state: here you can undo many of the changes made on entering the background.
     */
    [[SDKWrapper shared] applicationWillEnterForeground:application];
}

- (void)applicationWillTerminate:(UIApplication *)application {
    [[SDKWrapper shared] applicationWillTerminate:application];
    [appDelegateBridge applicationWillTerminate:application];
}

#pragma mark -
#pragma mark Memory management

- (void)applicationDidReceiveMemoryWarning:(UIApplication *)application {
    [[SDKWrapper shared] applicationDidReceiveMemoryWarning:application];
}

//fox begin
static ICallback icallback = ^void (NSString* _arg0, NSString* _arg1){
    NSLog(@"########........  ICallback  %@  ",_arg0);
    if([_arg0 isEqual:@"copyclipboard"]){/**复制剪切板 */
        UIPasteboard* past = [UIPasteboard generalPasteboard];
        past.string = _arg1;
    }else if ([_arg0 isEqual:@"inAppEvents"]){/**应用内事件（埋点） */
         
    }else if ([_arg0 isEqual:@"VIBRATE"]){/**震动 */
        AudioServicesPlaySystemSound(kSystemSoundID_Vibrate);
    }else if ([_arg0 isEqual:@"UNIQUE_ID"]){ /**获得设备唯一id */
        NSString *uuid = [[NSUUID UUID] UUIDString];
        [jsbBridge sendToScript:@"UNIQUE_ID" arg1:uuid];
    }else if ([_arg0 isEqual:@"APP_VERSION"]){ /**APP的版本号码 */
        NSDictionary *infoDictionary = [[NSBundle mainBundle] infoDictionary];//iOS 获取到的 APP 的信息
        NSString *applocalversion = [infoDictionary objectForKey:@"CFBundleShortVersionString"];// app版本
        NSString * versionStr = [NSString stringWithFormat:@"%@%@",@"V", applocalversion];
        [jsbBridge sendToScript:@"APP_VERSION" arg1:versionStr];
    }else if ([_arg0 isEqual:@"downloadApk"]){
        
    }
};
 
// 获取剪切板的内容
+(NSString *)getClipboardMsg {
    return [[UIPasteboard generalPasteboard] string];
}
//复制功能实现
+(void)copy:(NSString*)str
{
    UIPasteboard* past = [UIPasteboard generalPasteboard];
    past.string = str;
}

// 获取包名信息
+(NSString *)getPackageCode:(NSString*)str {
    NSDictionary *infoDictionary = [[NSBundle mainBundle] infoDictionary];//iOS 获取到的 APP 的信息
    NSString *app_BundleId = [infoDictionary objectForKey:@"AppSideUUID"];
    return app_BundleId;
}
//唤醒某个app
+(void)jumpToApp:(NSString*)str
{
    UIApplication *application = [UIApplication sharedApplication];
    NSURL *URL = [NSURL URLWithString:str];
    [application openURL:URL options:@{} completionHandler:^(BOOL success) {
        if (success) {
             NSLog(@"Opened url");
        }
    }];
}
//保存图片到相册
+(void)photoTo:(NSString*)path
{
    UIImage* img = [UIImage imageWithContentsOfFile:path];
    UIImageWriteToSavedPhotosAlbum(img,self,NULL,NULL);
}
//判断app是否安装过
+(bool)checkInstallApp:(NSString*)str{
    NSURL* url = [NSURL URLWithString:str];
    if([[UIApplication sharedApplication] canOpenURL:url])
    {
        return YES;
    }
    else
    {
        return NO;
    }
}
//复制图片
+(void)copyImage:(NSString*)path
{
    UIPasteboard* past = [UIPasteboard generalPasteboard];
    UIImage* img = [UIImage imageWithContentsOfFile:path];
    past.image = img;
    NSLog(@"######.........  copyImage path  %@ ",path);
}



//fox end

@end
