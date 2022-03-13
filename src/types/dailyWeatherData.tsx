import { WeatherData } from "./weatherData";

export interface DailyWeatherData {
	dt: number;
	sunrise?: number;
	sunset?: number;
	moonrise?: number;
	moonset?: number;
	moon_phase?: number;
	temp: {
		min: number;
		max: number;
	};
	airPollution?: number;
	currentTemp?: number;
	humidity: number;
	wind_speed: number;
	wind_deg: number;
	weather: WeatherData[];
	currentWeather?: WeatherData[];
	feels_like?: {
		day: number;
		night: number;
		eve: number;
		morn: number;
	};
	pressure?: number;
	dew_point?: number;
	clouds?: number;
	pop?: number;
	rain?: number;
	uvi?: number;
};
