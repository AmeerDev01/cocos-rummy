 #!/usr/bin/python
# -*- coding: UTF-8 -*- 
#Desc: 客户定制打包脚本
import io
import os
import json
from xml.dom import minidom
import shutil
import codecs
import urllib
import urllib2
import sys
import time
import subprocess
import zipfile 
import tarfile
import subprocess
import datetime

reload(sys)  
sys.setdefaultencoding('utf8')

import argparse

parser = argparse.ArgumentParser(description='manual to this script')
parser.add_argument('--PRJ_WORK_PATH', type=str, default = None)
parser.add_argument('--BUILD_NUMBER', type=str, default = None)
GlobalArgs = parser.parse_args()
#工作目录
PRJ_WORK_PATH     =GlobalArgs.PRJ_WORK_PATH
BUILD_NUMBER      =GlobalArgs.BUILD_NUMBER
HOT_BUILD_NUMBER      = int(BUILD_NUMBER) + 50

BASE_HOT_PATH   ="iosHotUpdate"
BASE_HOT_VERION ="Version1"

#node创建apk
NODE_BUILD_FORMAT = '/opt/homebrew/bin/node {0}/buildtools/buildManifestHall.js -p {1} -u {2} -v {3} '

#执行平台CMD命令
def excuteCmd(cmdStr):
	os.system(cmdStr)

def zip_ya(startdir,file_news):
	z = zipfile.ZipFile(file_news,'w',zipfile.ZIP_DEFLATED) #参数一：文件夹名
	for dirpath, dirnames, filenames in os.walk(startdir):
		fpath = dirpath.replace(startdir,'') #这一句很重要，不replace的话，就从根目录开始复制
		fpath = fpath and fpath + os.sep or ''#这句话理解我也点郁闷，实现当前文件夹以及包含的所有文件的压缩
		for filename in filenames:
			z.write(os.path.join(dirpath, filename),fpath+filename)
	print ('压缩成功')		
	z.close()

def hotUpdateZip(inPath,outPath):
	if os.path.isfile(outPath):
		os.remove(outPath)
	zip_ya(inPath,outPath)


# 获取当前时间的时间戳（秒级别）
current_timestamp = int(time.time())
# 将时间戳转换为分钟级别时间戳
minute_timestamp = int(current_timestamp % 60)
timestamp = int(time.time())
baseRemoteUrl ='https://hot.supfutce.com/static'
remoteUrl     =os.path.join(baseRemoteUrl, BASE_HOT_PATH,BASE_HOT_VERION)
def hot_hall_build():
    copy_hot_file()
    cmd = NODE_BUILD_FORMAT.format(PRJ_WORK_PATH,base_version_path, remoteUrl , '1.0.'+str(HOT_BUILD_NUMBER))
    excuteCmd(cmd)
    hotUpdateZip(base_ios_path,base_ios_path+".zip")
print ('大厅热更新版本号是： '+ '1.0.'+str(HOT_BUILD_NUMBER))

print ('复制出来的地址是 '+ '1.0.'+str(HOT_BUILD_NUMBER))
folder_names = ['main', 'common', 'hall', 'internal', 'resources', 'common']
def traverse_copy_files(folder_path,out_path):
    contents = os.listdir(folder_path)
    for item in contents:
        item_path = os.path.join(folder_path, item)
        if os.path.isdir(item_path):
           if item  in folder_names:
               out_item_path = os.path.join(out_path, item) 
               shutil.copytree(item_path , out_item_path)	


def copy_file(src_file, dest_folder):
    try:
        # 复制文件
        shutil.copytree(src_file , dest_folder)	
    except IOError as e:
        print ('复制文件失败')			  

def copy_hot_file():
     traverse_copy_files(src_assets_path,hot_assets_path)
     array = ['jsb-adapter', 'src', 'application.js', 'main.js']
     # 遍历数组并打印每个元素
     for element in array:
         src_path     =os.path.join(src_folder_path,element)
         out_path     =os.path.join(base_version_path,element)
         if os.path.isdir(src_path):
            shutil.copytree(src_path , out_path)	
         else:
             shutil.copy(src_path , out_path)	 

#################################开始执行脚本#############################################
print ('开始执行脚本')	
 # 示例用法
src_folder_path = os.path.join(PRJ_WORK_PATH, 'build/ios/data')  
src_assets_path     =os.path.join(src_folder_path, 'assets')
 # 示例用法
hot_hall_path       = os.path.join(PRJ_WORK_PATH, 'HotUpdateHall') 
if os.path.exists(hot_hall_path):
      shutil.rmtree(hot_hall_path)
if not os.path.exists(hot_hall_path):
       os.makedirs(hot_hall_path)   
base_ios_path     =os.path.join(hot_hall_path, BASE_HOT_PATH)
if not os.path.exists(base_ios_path):
       os.makedirs(base_ios_path)
base_version_path     =os.path.join(base_ios_path, BASE_HOT_VERION)
if not os.path.exists(base_version_path):
       os.makedirs(base_version_path)
hot_assets_path     =os.path.join(base_version_path, 'assets')
if not os.path.exists(hot_assets_path):
       os.makedirs(hot_assets_path)
hot_hall_build()

 
	
	
	
	
	


