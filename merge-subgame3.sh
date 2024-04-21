git reset #删除的是已跟踪的文件，将已commit的回退。
git checkout -- assets/ #放弃工作区中全部的修改，之前是放在第一个执行，但是第一次执行会失败
git checkout -- native/
git checkout -- build-templates/
git pull origin pro
git pull origin main
# 删除需要更新的文件和目录
rm -rf assets/script/ 
rm -rf assets/AssetBundle/common
rm -rf assets/AssetBundle/hall
rm -rf assets/AssetBundle/sence
rm -rf build-templates
rm -rf assets/wheel
rm -rf build-templates
rm -rf package.json
rm -rf assets/AssetBundle/subGame
rm -rf assets/AssetBundle/subGame.meta
#把subGame3的部分文件和目录拉到hall中来
git checkout pro assets/script/
git checkout pro assets/AssetBundle/common
git checkout pro assets/AssetBundle/hall
git checkout pro assets/AssetBundle/sence
git checkout pro build-templates
git checkout pro assets/wheel
git checkout pro package.json

# 替换几个文件中的packageId
sh ./replacePackageId.sh $1 $2