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

BASE_HOT_PATH           ="HotUpdateGames"
BASE_HOT_SUBGAME        ="iosSubGame"
BASE_HOT_COMPRESSED     ="compressed"


#node创建apk
NODE_BUILD_FORMAT = '/opt/homebrew/bin/node {0}/buildtools/buildManifestGame.js -p {1} -u {2} -v {3} '
baseRemoteUrl ='https://hot.supfutce.com/static'
remoteUrl     =os.path.join(baseRemoteUrl, BASE_HOT_SUBGAME,BASE_HOT_COMPRESSED)

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

folder_names = ['dfdc','starlight','phoenixV2','gxfcV2','godWealthV2','fortuneTiger', 'dragonTiger','fruit777','dragonV2','egyptV2']

# 遍历文件夹的第一层文件和文件夹
def traverse_first_level(folder_path):
    contents = os.listdir(folder_path)
    for item in contents:
        item_path = os.path.join(folder_path, item)
        if os.path.isdir(item_path):
           if item in folder_names:
              file_folder =   os.path.join(hot_path, item) 
              if not os.path.exists(file_folder):
                    os.makedirs(file_folder)
              iout_path1 =os.path.join(file_folder, item)+'.zip'
              hotUpdateZip(item_path,iout_path1)
              print ('构建的子游戏是：'+ item)    
              cmd = NODE_BUILD_FORMAT.format(PRJ_WORK_PATH,file_folder, remoteUrl , '7.4.'+str(HOT_BUILD_NUMBER))
              excuteCmd(cmd)
print ('子游戏的热更新版本号是 '+ '7.4.'+str(HOT_BUILD_NUMBER))     
def copy_file(src_file, dest_folder,file_name):
    # 检查目标文件夹是否存在，如果不存在则创建
    if not os.path.exists(dest_folder):
        os.makedirs(dest_folder)
    file_folder =   os.path.join(dest_folder, file_name)
    if not os.path.exists(file_folder):
        os.makedirs(file_folder)
    # 获取源文件名
    file_name = os.path.basename(src_file)

    # 构建目标文件路径
    dest_file = os.path.join(file_folder, file_name)

    try:
        # 复制文件
        shutil.copy2(src_file, dest_file)
    except IOError as e:
        print ('复制文件失败')			  
def hot_hall_build(folder_path):
    traverse_first_level(folder_path)
    hotUpdateZip(os.path.join(PRJ_WORK_PATH, BASE_HOT_PATH,BASE_HOT_SUBGAME),os.path.join(PRJ_WORK_PATH, BASE_HOT_PATH,BASE_HOT_SUBGAME)+".zip")

#################################开始执行脚本#############################################
print ('开始执行脚本')	
 # 示例用法
folder_path = os.path.join(PRJ_WORK_PATH, 'build/ios/data/assets')  
 # 示例用法
hot_path       = os.path.join(PRJ_WORK_PATH, BASE_HOT_PATH,BASE_HOT_SUBGAME,BASE_HOT_COMPRESSED)
hot_path0       = os.path.join(PRJ_WORK_PATH, BASE_HOT_PATH)
if os.path.exists(hot_path0):
      shutil.rmtree(hot_path0)
print ('hot_path0'+hot_path0)	      
if os.path.exists(hot_path):
      shutil.rmtree(hot_path)
if not os.path.exists(hot_path):
      os.makedirs(hot_path)
hot_hall_build(folder_path)


 
	
	
	
	
	


