import { IWeatherDataInterface } from "./weatherDataInterface";

export interface IDailyWeatherData {
	dt: number;
	temp: {
		min: number;
		max: number;
	};
	humidity: number;
	wind_speed: number;
	wind_deg: number;
	weather: IWeatherDataInterface[];
};
