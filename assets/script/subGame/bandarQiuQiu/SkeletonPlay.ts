import { _decorator, Component, CCInteger,SpriteFrame,sp} from 'cc';
const { ccclass, property } = _decorator;

@ccclass
export default class SkeletonAnimationPlayer {
    private skeleton: sp.Skeleton | null = null;
    private animationName: string = "";
    private loop: boolean = false;
    private onAnimationComplete: (() => void) | null = null;

    constructor(
        skeleton: sp.Skeleton,
        animationName: string,
        loop: boolean = false,
        onAnimationComplete?: () => void // 将回调参数设为可选
    ) {
        this.skeleton = skeleton;
        this.animationName = animationName;
        this.loop = loop;
        this.onAnimationComplete = onAnimationComplete || null; // 使用默认值为 null
    }

    playAnimation() {
        if (this.skeleton && this.animationName) {
            // 监听动画播放完成事件
            this.skeleton&&this.skeleton.setCompleteListener((trackEntry) => {
                if (trackEntry.animation.name === this.animationName && this.onAnimationComplete) {
                    this.onAnimationComplete();
                }
            });

            // 设置循环
            this.skeleton.setAnimation(0, this.animationName, this.loop);
        } else {
            console.error("Skeleton or animation name not assigned.");
        }
    }

    stopAnimation() {
        if (this.skeleton) {
            this.skeleton.clearTracks();
        }
    }

    // 切换到不同的动画
    changeAnimation(animationName: string,isLoop=false,onAnimationComplete=null) {
        this.animationName = animationName;
        this.loop = isLoop;
        this.onAnimationComplete = onAnimationComplete;
        this.playAnimation();
    }
}