# 替换几个文件中的packageId
appIdPro=cocos.com.hugeWin777
appIdDev=cocos.com.hugeWin.dev
appName="Hi Win"
appNameDev=$appName" Dev"
env=$2
googleServicesFileNameDev=google-services-dev.json
googleServicesFileNamePro=google-services-pro.json
googleServicesFileName=google-services.json
gradlePropertiesPath=build/android/proj/gradle.properties
if [ -e $gradlePropertiesPath ] ; then
  if [ -z $env ]  ; then
    echo "参数2的\"环境\"不能为空，只能是 dev | pro ======"
  elif [ $env = "dev" ];then
    echo "copy $googleServicesFileNameDev file"
    cp -f $googleServicesFileNameDev native/engine/android/app/$googleServicesFileName
    sed -i "s/$appIdPro/$appIdDev/g" $gradlePropertiesPath

    sed -i "s/>$appName</>$appNameDev</g" native/engine/android/res/values/strings.xml
    sed -i "s/master/development/g" native/engine/android/app/build.gradle
  else
    echo "copy $googleServicesFileNamePro file"
    cp -f $googleServicesFileNamePro native/engine/android/app/$googleServicesFileName
    sed -i "s/$appIdDev/$appIdPro/g" $gradlePropertiesPath
    sed -i "s/>$appNameDev</>$appName</g" native/engine/android/res/values/strings.xml
    sed -i "s/development/master/g" native/engine/android/app/build.gradle
  fi
  
fi

sed -i "s/$appIdPro/$1/g" native/engine/android/app/AndroidManifest.xml
sed -i "s/$appIdPro/$1/g" native/engine/android/app/$googleServicesFileName
sed -i "s/$appIdPro/$1/g" native/engine/android/app/src/com/cocos/game/AppActivity.java
sed -i "s/$appIdPro/$1/g" native/engine/android/app/src/com/cocos/game/tool/NotificationUtil.java