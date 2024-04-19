System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, AnimationClip, AudioClip, Font, Node, ParticleSystem2D, Prefab, Sprite, SpriteAtlas, SpriteFrame, UITransform, Vec3, sp, _crd, getFileType, getFileName, createSpriteNode, createSpriteAtlasNode, getSpriteAtlasBySpriteFrame, getSpriteFrame, setSpriteFrameBySpriteAtlas, setSpriteFrame, setSpriteAtlasNode, createAnimationNode, createAnimation, addAnimation, getAnimation, createParticleSystemNode, createSkeleton, createFont, llcompare, llminus, llplus, g_ByRandomSelectID, toNodeSpaceAR, toWorldSpaceAR;

  function _reportPossibleCrUseOfSourceManage(extras) {
    _reporterNs.report("SourceManage", "../../base/SourceManage", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Animation = _cc.Animation;
      AnimationClip = _cc.AnimationClip;
      AudioClip = _cc.AudioClip;
      Font = _cc.Font;
      Node = _cc.Node;
      ParticleSystem2D = _cc.ParticleSystem2D;
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
      SpriteAtlas = _cc.SpriteAtlas;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      sp = _cc.sp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e120fzTOhMp79FiNnFecx9", "FishTool", undefined);

      __checkObsolete__(['Animation', 'AnimationClip', 'AudioClip', 'Font', 'Node', 'ParticleSystem2D', 'Prefab', 'Sprite', 'SpriteAtlas', 'SpriteFrame', 'UITransform', 'Vec3', 'sp']);

      _export("getFileType", getFileType = file => {
        var strArr = file.split('.');
        var fileSuffie = strArr[1];

        if (fileSuffie === 'plist') {
          return SpriteAtlas;
        } else if (fileSuffie === 'json') {
          return sp.SkeletonData;
        } else if (fileSuffie === 'prefab') {
          return Prefab;
        } else if (fileSuffie === 'fnt') {
          return Font;
        } else if (fileSuffie === 'mp3') {
          return AudioClip;
        }

        return SpriteFrame;
      });

      _export("getFileName", getFileName = file => {
        var strArr = file.split('.');
        var fileSuffie = strArr[1];
        var isPng = fileSuffie === 'png' || fileSuffie === 'jpg';

        if (isPng) {
          return strArr[0] + '/spriteFrame';
        }

        return strArr[0];
      });
      /**
       * 创建图片节点
       * @param sourceManage 预加载资源管理对象
       * @param parentNode 父节点
       * @param fileSrc 文件路径
       * @returns 
       */


      _export("createSpriteNode", createSpriteNode = (sourceManage, parentNode, fileSrc) => {
        var source = sourceManage.getFile(getFileName(fileSrc)).source;
        var fishNode = new Node();
        parentNode.addChild(fishNode);
        fishNode.addComponent(Sprite).spriteFrame = source;
        return fishNode;
      });
      /**
       * 从图集中创建图片
       * @param sourceManage 预加载资源管理对象
       * @param parentNode 父节点
       * @param src_cfg 文件路径
       * @param spriteName 图片名称
       * @returns 
       */


      _export("createSpriteAtlasNode", createSpriteAtlasNode = (sourceManage, parentNode, src_cfg, spriteName) => {
        var source = sourceManage.getFile(getFileName(src_cfg.file)).source;
        var fishNode = new Node();
        parentNode.addChild(fishNode);
        var sp = fishNode.addComponent(Sprite);
        sp.spriteAtlas = source;
        sp.spriteFrame = source.getSpriteFrame(spriteName);
        return fishNode;
      });
      /**
       * 获得图片资源
       * @param sourceManage 
       * @param src_cfg 
       * @param spriteName 
       * @returns 
       */


      _export("getSpriteAtlasBySpriteFrame", getSpriteAtlasBySpriteFrame = (sourceManage, src_cfg, spriteName) => {
        var source = sourceManage.getFile(getFileName(src_cfg.file)).source;
        return source.getSpriteFrame(spriteName);
      });
      /**
       * 获得图片资源
       * @param sourceManage 
       * @param spriteName 
       * @returns 
       */


      _export("getSpriteFrame", getSpriteFrame = (sourceManage, fileSrc) => {
        return sourceManage.getFile(fileSrc).source;
      });
      /**
       * 设置精灵
       * @param sourceManage 
       * @param node 
       * @param spriteName 
       */


      _export("setSpriteFrameBySpriteAtlas", setSpriteFrameBySpriteAtlas = (sourceManage, node, src_cfg, spriteName) => {
        var source = sourceManage.getFile(getFileName(src_cfg.file)).source;
        var sprite = node.getComponent(Sprite);

        if (!sprite) {
          sprite = node.addComponent(Sprite);
        }

        sprite.spriteFrame = source.getSpriteFrame(spriteName);
      });
      /**
       * 设置精灵
       * @param sourceManage 
       * @param node 
       * @param spriteName 
       */


      _export("setSpriteFrame", setSpriteFrame = (sourceManage, node, fileSrc) => {
        var sprite = node.getComponent(Sprite);

        if (!sprite) {
          sprite = node.addComponent(Sprite);
        }

        sprite.spriteFrame = sourceManage.getFile(fileSrc).source;
      });
      /**
       * 从图集中设置图片
       * @param sourceManage 预加载资源管理对象
       * @param node 要设置图片的节点
       * @param src_cfg 文件路径
       * @param spriteName 图片名称
       * @returns 
       */


      _export("setSpriteAtlasNode", setSpriteAtlasNode = (sourceManage, node, src_cfg, spriteName) => {
        var source = sourceManage.getFile(getFileName(src_cfg.file)).source;
        var sp = node.getComponent(Sprite);

        if (!sp) {
          sp = node.addComponent(Sprite);
        }

        sp.spriteAtlas = source;
        sp.spriteFrame = source.getSpriteFrame(spriteName);
        return node;
      });
      /**
       * 创建序列帧动画节点
       * @param sourceManage 预加载资源管理
       * @param parentNode 父节点
       * @param src_cfg 资源配置对象
       * @param isPlay 是否创建之后立马播放
       * @param isLoop 是否循环
       * @returns 
       */


      _export("createAnimationNode", createAnimationNode = function createAnimationNode(sourceManage, parentNode, src_cfg, isPlay, isLoop, done) {
        if (done === void 0) {
          done = undefined;
        }

        var source = sourceManage.getFile(getFileName(src_cfg.file)).source;
        var animationNode = new Node();
        parentNode.addChild(animationNode);
        var sp = animationNode.addComponent(Sprite);
        sp.sizeMode = Sprite.SizeMode.RAW;
        sp.trim = false;
        sp.spriteAtlas = source;
        sp.spriteFrame = source.getSpriteFrame(String(src_cfg.pattern).format(1));
        createAnimation(animationNode, source, src_cfg, isPlay, isLoop, done);
        return animationNode;
      });
      /**
       * 创建序列帧
       * @param animationNode 动画节点
       * @param spriteAtlas 图集
       * @param src_cfg 资源配置对象
       * @param done 完成之后的回调
       */


      _export("createAnimation", createAnimation = function createAnimation(animationNode, spriteAtlas, src_cfg, isPlay, isLoop, done) {
        if (done === void 0) {
          done = undefined;
        }

        var fishSpriteFrames = spriteAtlas.getSpriteFrames().filter(v => v.name.startsWith(src_cfg.key + '_')).sort((v1, v2) => {
          var c1 = parseInt(v1.name.split('_')[1]);
          var c2 = parseInt(v2.name.split('_')[1]);
          return c1 - c2;
        });
        var sample = 1 / src_cfg.ft;
        var clip = AnimationClip.createWithSpriteFrames(fishSpriteFrames, sample);
        clip.wrapMode = isLoop ? AnimationClip.WrapMode.Loop : AnimationClip.WrapMode.Normal;
        var anima = animationNode.addComponent(Animation);
        anima.addClip(clip);
        anima.defaultClip = clip;
        isPlay && anima.play();
        anima.on(Animation.EventType.FINISHED, () => {
          done && done();
        });
      });

      _export("addAnimation", addAnimation = function addAnimation(sourceManage, animationNode, src_cfg, isPlay, isLoop, done) {
        if (done === void 0) {
          done = undefined;
        }

        var spriteAtlas = sourceManage.getFile(getFileName(src_cfg.file)).source;
        createAnimation(animationNode, spriteAtlas, src_cfg, isPlay, isLoop, done);
      });

      _export("getAnimation", getAnimation = node => {
        return node.getComponent(Animation);
      });
      /**
       * 创建粒子动画节点
       * @param sourceManage 预加载资源管理
       * @param parentNode 父节点
       * @param src_cfg 资源配置对象
       * @returns 
       */


      _export("createParticleSystemNode", createParticleSystemNode = (sourceManage, parentNode, src_cfg) => {
        var source = sourceManage.getFile(getFileName(src_cfg.file)).source;
        var node = new Node();
        parentNode.addChild(node);
        var p = node.addComponent(ParticleSystem2D);
        p.file = source;
        p.autoRemoveOnFinish = true;
        return node;
      });
      /**
       * 创建骨骼动画
       * @param sourceManage 预加载资源管理对象
       * @param parentNode 父节点
       * @param fileSrc 文件路径
       * @returns 
       */


      _export("createSkeleton", createSkeleton = (sourceManage, parentNode, fileSrc) => {
        var source = sourceManage.getFile(getFileName(fileSrc)).source;
        var node = new Node();
        parentNode.addChild(node);
        var sk = node.addComponent(sp.Skeleton);
        sk.skeletonData = source;
        sk.premultipliedAlpha = false;
        sk.loop = true;
        return node;
      });
      /**
       * 创建字体资源
       * @param sourceManage 
       * @param fileSrc 
       * @returns 
       */


      _export("createFont", createFont = (sourceManage, fileSrc) => {
        var source = sourceManage.getFile(getFileName(fileSrc)).source;
        return source;
      });

      _export("llcompare", llcompare = (a, b) => {
        return a < b ? -1 : a > b ? 1 : 0;
      });

      _export("llminus", llminus = (a, b) => {
        return a - b;
      });

      _export("llplus", llplus = (a, b) => {
        return a + b;
      });

      _export("g_ByRandomSelectID", g_ByRandomSelectID = lst => {
        var val = Math.random();
        var sum = 0;

        for (var i = 0; i < lst.length; i++) {
          sum = sum + lst[i].gi;

          if (sum > val) {
            return lst[i].id;
          }
        }

        return -1;
      });

      _export("toNodeSpaceAR", toNodeSpaceAR = (parent, pos) => {
        return parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(pos.x, pos.y));
      });

      _export("toWorldSpaceAR", toWorldSpaceAR = (parent, pos) => {
        return parent.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(pos.x, pos.y));
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=013bdeb5af7b21e4010be702c22f2798cd53d51e.js.map