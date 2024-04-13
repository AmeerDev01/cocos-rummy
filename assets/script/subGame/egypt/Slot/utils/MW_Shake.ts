import { _decorator, Component, Node, tween, Tween, Vec3 } from 'cc';
const { ccclass } = _decorator;

@ccclass('MW_Shake')
export class MW_Shake extends Component {
    private _originalPos: Vec3 = new Vec3();
    private _shakeXTween = new Tween();
    private _shakeYTween = new Tween();
    private _shakeXYTween = new Tween();

    start() {
    }

	private _shakeX(target: Node, duration: number, offset: number) {
		return tween(target)
			.to((duration / 7), { position: new Vec3(target.position).add3f(offset + 1, 0, 0) }, { easing: "sineInOut" })
			.to((duration / 7), { position: new Vec3(target.position).add3f(-offset * 2 - 2, 0, 0) }, { easing: "sineInOut" })
			.to((duration / 7), { position: new Vec3(target.position).add3f(offset * 3 + 3, 0, 0) }, { easing: "sineInOut" })
			.to((duration / 7), { position: new Vec3(target.position).add3f(-offset * 4 - 4, 0, 0) }, { easing: "sineInOut" })
			.to((duration / 7), { position: new Vec3(target.position).add3f(offset * 3 + 3, 0, 0) }, { easing: "sineInOut" })
			.to((duration / 7), { position: new Vec3(target.position).add3f(-offset * 2 - 2, 0, 0) }, { easing: "sineInOut" })
			.to((duration / 7), { position: new Vec3(target.position).add3f(offset + 1, 0, 0) }, { easing: "sineInOut" })
	}

	private _shakeY(target: Node, duration: number, offset: number) {
		return tween(target)
			.to((duration / 7), { position: new Vec3(target.position).add3f(0, offset + 1, 0) }, { easing: "sineInOut" })
			.to((duration / 7), { position: new Vec3(target.position).add3f(0, -offset * 2 - 2, 0) }, { easing: "sineInOut" })
			.to((duration / 7), { position: new Vec3(target.position).add3f(0, offset * 3 + 3, 0) }, { easing: "sineInOut" })
			.to((duration / 7), { position: new Vec3(target.position).add3f(0, -offset * 4 - 4, 0) }, { easing: "sineInOut" })
			.to((duration / 7), { position: new Vec3(target.position).add3f(0, offset * 3 + 3, 0) }, { easing: "sineInOut" })
			.to((duration / 7), { position: new Vec3(target.position).add3f(0, -offset * 2 - 2, 0) }, { easing: "sineInOut" })
			.to((duration / 7), { position: new Vec3(target.position).add3f(0, offset + 1, 0) }, { easing: "sineInOut" })
	}

	private _shakeXY(target: Node, duration: number, offset: number) {
		return tween(target)
			.to((duration / 14), { position: new Vec3(target.position).add3f(offset + 1, 0, 0) }, { easing: "sineInOut" })
			.to((duration / 14), { position: new Vec3(target.position).add3f(0, offset + 1, 0) }, { easing: "sineInOut" })
			.to((duration / 14), { position: new Vec3(target.position).add3f(0, -offset * 2 - 2, 0) }, { easing: "sineInOut" })
			.to((duration / 14), { position: new Vec3(target.position).add3f(-offset * 2 - 2, 0, 0) }, { easing: "sineInOut" })
			.to((duration / 14), { position: new Vec3(target.position).add3f(offset * 3 + 3, 0, 0) }, { easing: "sineInOut" })
			.to((duration / 14), { position: new Vec3(target.position).add3f(0, offset * 3 + 3, 0) }, { easing: "sineInOut" })
			.to((duration / 14), { position: new Vec3(target.position).add3f(0, -offset * 4 - 4, 0) }, { easing: "sineInOut" })
			.to((duration / 14), { position: new Vec3(target.position).add3f(-offset * 4 - 4, 0, 0) }, { easing: "sineInOut" })
			.to((duration / 14), { position: new Vec3(target.position).add3f(0, offset * 3 + 3, 0) }, { easing: "sineInOut" })
			.to((duration / 14), { position: new Vec3(target.position).add3f(offset * 3 + 3, 0, 0) }, { easing: "sineInOut" })
			.to((duration / 14), { position: new Vec3(target.position).add3f(0, -offset * 2 - 2, 0) }, { easing: "sineInOut" })
			.to((duration / 14), { position: new Vec3(target.position).add3f(-offset * 2 - 2, 0, 0) }, { easing: "sineInOut" })
			.to((duration / 14), { position: new Vec3(target.position).add3f(0, offset + 1, 0) }, { easing: "sineInOut" })
			.to((duration / 14), { position: new Vec3(target.position).add3f(offset + 1, 0, 0) }, { easing: "sineInOut" })
	}

	/*
	Shake the target.
	Pass "x" to shake to the left and right.
	Pass "y" to shake to the top and bottom.
	Pass "xy" to shake in all directions.
	*/
	public shake(target: Node, duration: number = 0.5, offset: number = 1, repeat: number = 1, direction: string = "x") {
		this._originalPos = target.getPosition().clone();
		let tw: Tween<Node>;
		if (direction.toLowerCase() === "x") {
			tw = this._shakeX(target, duration, offset);
		} else if (direction.toLowerCase() === "y") {
			tw = this._shakeY(target, duration, offset)
		} else {
			tw = this._shakeXY(target, duration, offset);
		}
		tw.to(0, { position: this._originalPos });
		tw.union();

		if (repeat === -1) {
			tw.repeatForever()
		} else {
			tw.repeat(repeat)
		}
        tw.start();
	}

    stopShaking() {
        this._shakeXTween.stop();
        this._shakeYTween.stop();
        this.node.setPosition(this._originalPos);
    }
}
