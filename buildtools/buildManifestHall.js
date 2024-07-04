const fs = require('fs');
const path = require('path');
const crypto = require('crypto');


// 读取项目根目录
var projectDir = '';  
// 版本号
var projectVersion = '';  
var  remoteUrlK = "7.4.4";

// Parse arguments
var i = 2;
while ( i < process.argv.length) {
    var arg = process.argv[i];
    switch (arg) {
        case '-p' :
            projectDir = process.argv[i+1];
            console.log(`Reading project directory: ${projectDir}`);
            i += 2;
            break;
        case '-u' :
            remoteUrlK = process.argv[i+1];
            console.log(`Reading project remoteUrlK: ${remoteUrlK}`);
            i += 2;
            break;
        case '-v' :
            projectVersion = process.argv[i+1];
            console.log(`Reading project projectVersion: ${projectVersion}`);
            i += 2;
            break;
        default :
            i++;
            break;
    }
}
// 配置项
const version = {
    version: `${projectVersion}`, // 请根据实际情况修改版本号
    remoteManifestUrl: `${remoteUrlK}/project.manifest`,
    remoteVersionUrl: `${remoteUrlK}/version.manifest`,
    packageUrl: `${remoteUrlK}/`,
    compressed: false
};
const manifest = {
    packageUrl: version.packageUrl,
    remoteManifestUrl: version.remoteManifestUrl,
    remoteVersionUrl: version.remoteVersionUrl,
    version: version.version,
    assets: {},
    searchPaths: [],
    compressed: version.compressed
};

// 读取并遍历目录函数
function readDir(dir, obj) {
    if (!fs.existsSync(dir)) {
        console.error(`Directory does not exist: ${dir}`);
        return;
    }

    const subpaths = fs.readdirSync(dir);
    for (let i = 0; i < subpaths.length; ++i) {
        const subpath = path.join(dir, subpaths[i]);
        if (!fs.existsSync(subpath)) {
            console.warn(`Path does not exist: ${subpath}`);
            continue;
        }

        const subStat = fs.statSync(subpath);
        if (subStat.isDirectory()) {
            readDir(subpath, obj);
        } else if (subStat.isFile()) {
            const size = subStat.size;
            const md5 = crypto.createHash('md5').update(fs.readFileSync(subpath)).digest('hex');
            const compressed = path.extname(subpath).toLowerCase() === '.zip';

            // 将相对路径从当前目录开始计算
            let relative = path.relative(projectDir, subpath);
            relative = relative.replace(/\\/g, '/');
            obj[relative] = {
                size: size,
                md5: md5
            };
            if (compressed) {
                obj[relative].compressed = true;
            }
        }
    }
}



try {
    readDir(projectDir, manifest.assets);
    // 保存 project.manifest 文件
    const projectManifestPath = path.join(projectDir, 'project.manifest');
    fs.writeFile(projectManifestPath, JSON.stringify(manifest, null, 2), (err) => {
        if (err) throw err;
        console.log('project.manifest 文件已生成');
    });

    // 保存 version.manifest 文件
    const versionManifestPath = path.join(projectDir, 'version.manifest');
    fs.writeFile(versionManifestPath, JSON.stringify(version, null, 2), (err) => {
        if (err) throw err;
        console.log('version.manifest 文件已生成');
    });
} catch (err) {
    console.error(`Error reading directory: ${err.message}`);
}
