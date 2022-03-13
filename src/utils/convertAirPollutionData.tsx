import { airPollutionData } from "../constants/airPollutionData.tsx";

export const convertAirPollutionData = (airQuality: number): string => {
	return Object.entries(airPollutionData).find(
		([_, value]) => value === airQuality
	)[0];
};
