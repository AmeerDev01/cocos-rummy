export const ROLL_TIME = 200;
export const getSpeedTime = (isSpeed: boolean) => {
		// 这里调停止滚动的速度
		return isSpeed ? 0.01 : 0.5;
}