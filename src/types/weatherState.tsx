import { DailyWeatherData } from "./dailyWeatherData";

export interface WeatherState {
	weatherData: DailyWeatherData[];
	cityName: string;
	country: string;
	isLoading: boolean;
	errors: any;
};
