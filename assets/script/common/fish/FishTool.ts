import { Animation, AnimationClip, AudioClip, Font, Node, ParticleSystem2D, Prefab, Sprite, SpriteAtlas, SpriteFrame, UITransform, Vec3, sp } from "cc";
import SourceManage, { ISourceFile } from "../../base/SourceManage";

export const getFileType = (file: string) => {
  const strArr = file.split('.');
  const fileSuffie = strArr[1];
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
}

export const getFileName = (file: string) => {
  const strArr = file.split('.');
  const fileSuffie = strArr[1];
  const isPng = fileSuffie === 'png' || fileSuffie === 'jpg';

  if (isPng) {
    return strArr[0] + '/spriteFrame'
  }
  return strArr[0]
}

/**
 * 创建图片节点
 * @param sourceManage 预加载资源管理对象
 * @param parentNode 父节点
 * @param fileSrc 文件路径
 * @returns 
 */
export const createSpriteNode = (sourceManage: SourceManage, parentNode: Node, fileSrc) => {
  const source = sourceManage.getFile(getFileName(fileSrc)).source;
  let fishNode = new Node();
  parentNode.addChild(fishNode);
  fishNode.addComponent(Sprite).spriteFrame = source;
  return fishNode;
}

/**
 * 从图集中创建图片
 * @param sourceManage 预加载资源管理对象
 * @param parentNode 父节点
 * @param src_cfg 文件路径
 * @param spriteName 图片名称
 * @returns 
 */
export const createSpriteAtlasNode = (sourceManage: SourceManage, parentNode: Node, src_cfg, spriteName: string) => {
  const source = sourceManage.getFile(getFileName(src_cfg.file)).source as SpriteAtlas;
  let fishNode = new Node();
  parentNode.addChild(fishNode);
  const sp = fishNode.addComponent(Sprite)
  sp.spriteAtlas = source;
  sp.spriteFrame = source.getSpriteFrame(spriteName);
  return fishNode;
}

/**
 * 获得图片资源
 * @param sourceManage 
 * @param src_cfg 
 * @param spriteName 
 * @returns 
 */
export const getSpriteAtlasBySpriteFrame = (sourceManage: SourceManage, src_cfg, spriteName: string) => {
  const source = sourceManage.getFile(getFileName(src_cfg.file)).source as SpriteAtlas;
  return source.getSpriteFrame(spriteName);
}


/**
 * 获得图片资源
 * @param sourceManage 
 * @param spriteName 
 * @returns 
 */
export const getSpriteFrame = (sourceManage: SourceManage, fileSrc: string) => {
  return sourceManage.getFile(fileSrc).source as SpriteFrame;
}
/**
 * 设置精灵
 * @param sourceManage 
 * @param node 
 * @param spriteName 
 */
export const setSpriteFrameBySpriteAtlas = (sourceManage: SourceManage, node: Node, src_cfg, spriteName: string) => {
  const source = sourceManage.getFile(getFileName(src_cfg.file)).source as SpriteAtlas;
  let sprite = node.getComponent(Sprite);
  if (!sprite) {
    sprite = node.addComponent(Sprite);
  }
  sprite.spriteFrame = source.getSpriteFrame(spriteName);
}

/**
 * 设置精灵
 * @param sourceManage 
 * @param node 
 * @param spriteName 
 */
export const setSpriteFrame = (sourceManage: SourceManage, node: Node, fileSrc: string) => {
  let sprite = node.getComponent(Sprite);
  if (!sprite) {
    sprite = node.addComponent(Sprite);
  }
  sprite.spriteFrame = sourceManage.getFile(fileSrc).source;
}


/**
 * 从图集中设置图片
 * @param sourceManage 预加载资源管理对象
 * @param node 要设置图片的节点
 * @param src_cfg 文件路径
 * @param spriteName 图片名称
 * @returns 
 */
export const setSpriteAtlasNode = (sourceManage: SourceManage, node: Node, src_cfg, spriteName: string) => {
  const source = sourceManage.getFile(getFileName(src_cfg.file)).source as SpriteAtlas;
  let sp = node.getComponent(Sprite)
  if (!sp) {
    sp = node.addComponent(Sprite)
  }
  sp.spriteAtlas = source;
  sp.spriteFrame = source.getSpriteFrame(spriteName);
  return node;
}

/**
 * 创建序列帧动画节点
 * @param sourceManage 预加载资源管理
 * @param parentNode 父节点
 * @param src_cfg 资源配置对象
 * @param isPlay 是否创建之后立马播放
 * @param isLoop 是否循环
 * @returns 
 */
export const createAnimationNode = (sourceManage: SourceManage, parentNode: Node, src_cfg, isPlay: boolean, isLoop: boolean, done = undefined) => {
  const source = sourceManage.getFile(getFileName(src_cfg.file)).source;
  let animationNode = new Node();
  parentNode.addChild(animationNode);
  const sp = animationNode.addComponent(Sprite)
  sp.sizeMode = Sprite.SizeMode.RAW;
  sp.trim = false;
  sp.spriteAtlas = source;
  sp.spriteFrame = source.getSpriteFrame(String(src_cfg.pattern).format(1));
  createAnimation(animationNode, source, src_cfg, isPlay, isLoop, done);
  return animationNode;
}

/**
 * 创建序列帧
 * @param animationNode 动画节点
 * @param spriteAtlas 图集
 * @param src_cfg 资源配置对象
 * @param done 完成之后的回调
 */
export const createAnimation = (animationNode: Node, spriteAtlas: SpriteAtlas, src_cfg, isPlay: boolean, isLoop: boolean, done = undefined) => {
  const fishSpriteFrames = spriteAtlas.getSpriteFrames().filter(v => v.name.startsWith(src_cfg.key + '_')).sort((v1, v2) => {
    const c1 = parseInt(v1.name.split('_')[1])
    const c2 = parseInt(v2.name.split('_')[1])
    return c1 - c2;
  });

  const sample = 1 / src_cfg.ft;
  const clip = AnimationClip.createWithSpriteFrames(fishSpriteFrames, sample)
  clip.wrapMode = isLoop ? AnimationClip.WrapMode.Loop : AnimationClip.WrapMode.Normal;

  const anima = animationNode.addComponent(Animation)
  anima.addClip(clip);
  anima.defaultClip = clip;
  isPlay && anima.play();

  anima.on(Animation.EventType.FINISHED, () => {
    done && done();
  })
}

export const addAnimation = (sourceManage: SourceManage, animationNode: Node, src_cfg, isPlay: boolean, isLoop: boolean, done = undefined) => {
  const spriteAtlas = sourceManage.getFile(getFileName(src_cfg.file)).source as SpriteAtlas;
  createAnimation(animationNode, spriteAtlas, src_cfg, isPlay, isLoop, done)
}

export const getAnimation = (node: Node): Animation => {
  return node.getComponent(Animation);
}

/**
 * 创建粒子动画节点
 * @param sourceManage 预加载资源管理
 * @param parentNode 父节点
 * @param src_cfg 资源配置对象
 * @returns 
 */
export const createParticleSystemNode = (sourceManage: SourceManage, parentNode: Node, src_cfg) => {
  const source = sourceManage.getFile(getFileName(src_cfg.file)).source;
  let node = new Node();
  parentNode.addChild(node);
  const p = node.addComponent(ParticleSystem2D);
  p.file = source;
  p.autoRemoveOnFinish = true;
  return node;
}

/**
 * 创建骨骼动画
 * @param sourceManage 预加载资源管理对象
 * @param parentNode 父节点
 * @param fileSrc 文件路径
 * @returns 
 */
export const createSkeleton = (sourceManage: SourceManage, parentNode: Node, fileSrc) => {
  const source = sourceManage.getFile(getFileName(fileSrc)).source;
  let node = new Node();
  parentNode.addChild(node);
  const sk = node.addComponent(sp.Skeleton);
  sk.skeletonData = source;
  sk.premultipliedAlpha = false;
  sk.loop = true;
  return node;
}
/**
 * 创建字体资源
 * @param sourceManage 
 * @param fileSrc 
 * @returns 
 */
export const createFont = (sourceManage: SourceManage, fileSrc) => {
  const source = sourceManage.getFile(getFileName(fileSrc)).source;
  return source;
}

export const llcompare = (a, b) => {
  return a < b ? -1 : a > b ? 1 : 0;
}

export const llminus = (a, b) => {
  return a - b;
}
export const llplus = (a, b) => {
  return a + b;
}

export const g_ByRandomSelectID = (lst: any[]) => {
  let val = Math.random()
  let sum = 0
  for (let i = 0; i < lst.length; i++) {
    sum = sum + lst[i].gi
    if (sum > val) {
      return lst[i].id
    }
  }

  return -1
}

export const toNodeSpaceAR = (parent: Node, pos) => {
  return parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(pos.x, pos.y));
}
export const toWorldSpaceAR = (parent: Node, pos) => {
  return parent.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(pos.x, pos.y));
}