import { IWeatherDataInterface } from "./weatherDataInterface";

export interface ICurrentWeatherData {
	dt: number;
	temp: number;
	humidity: number;
	wind_speed: number;
	wind_deg: number;
	weather: IWeatherDataInterface[];
}
