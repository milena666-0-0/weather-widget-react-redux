import { IWeatherDataInterface } from "./weatherDataInterface";
import { IDailyWeatherData } from "./dailyWeatherDataInterface";

export interface IData {
	lat: number;
	lon: number;
	current: IWeatherDataInterface;
	daily: IDailyWeatherData[];
}
