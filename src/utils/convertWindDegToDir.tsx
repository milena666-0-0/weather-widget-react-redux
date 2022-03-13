import { windDirections } from "../constants/windDirections.tsx";

export const convertWindDegToDir = (winDeg: number): string => {
	const dir =
		Math.round(((winDeg %= 360) < 0 ? winDeg + 360 : winDeg) / 45) % 8;
	return windDirections[dir];
};
