import { FC } from "react";
import moment from "moment";

import {
	roundData,
	convertAirPollutionData,
	convertWindDegToDir,
} from "../../../../../utils/index.ts";
import {WeatherData, DailyWeatherData} from '../../../../../types/index';

import "../weatherInfoPannel.scss";

interface DetailedWeatherProps {
	selectedDay: DailyWeatherData;
	cityName: string;
	country: string;
	weatherData: WeatherData;
	isInitialMetric: boolean;
	handleChangeMeasuringType: () => void;
};

export const DetailedWeatherInfoView: FC<DetailedWeatherProps> = ({
	selectedDay,
	cityName,
	country,
	weatherData,
	isInitialMetric,
	handleChangeMeasuringType,
}) => {
	const currentSelectedDay = weatherData[0].dt === selectedDay.dt;
	const {
		dt,
		humidity,
		wind_speed,
		wind_deg,
		temp: { max },
	} = selectedDay;

	const selectedDayTemp = currentSelectedDay ? selectedDay.currentTemp : max;

	const selectedDayWeather = currentSelectedDay
		? selectedDay.currentWeather[0]
		: selectedDay.weather[0];

	const desc =
		selectedDayWeather.description.charAt(0).toUpperCase() +
		selectedDayWeather.description.slice(1);

	const air = currentSelectedDay && selectedDay.airPollution;

	const activeC = isInitialMetric ? "weather-pannel__val--active" : "";
	const activeF = !isInitialMetric ? "weather-pannel__val--active" : "";

	return (
		<div className="weather-pannel">
			<div className="weather-pannel__place">
				<p className="weather-pannel__loc">
					{country}, {cityName}
				</p>
				<p className="weather-pannel__time">
					{moment(dt * 1000).format("dddd hA")} • {desc}
					{}
				</p>
			</div>
			<div className="weather-pannel__main">
				<div className="weather-pannel__deg">
					<img
						src={`http://openweathermap.org/img/wn/${selectedDayWeather.icon}.png`}
						alt=""
					/>

					<span className="weather-pannel__temp">
						{roundData(selectedDayTemp)} °
					</span>
					<span
						onClick={handleChangeMeasuringType}
						className="weather-pannel__val"
					>
						<span className={activeF}>F</span> /{" "}
						<span className={activeC}>C</span>
					</span>
				</div>
				<div className="weather-pannel__info">
					<p>Humidity: {humidity}%</p>
					<p>
						Wind: {roundData(wind_speed)}
						{isInitialMetric ? "KPH" : "MPH"}{" "}
						{convertWindDegToDir(wind_deg)}
					</p>
					{currentSelectedDay && (
						<p>Air Quality: {convertAirPollutionData(air)}</p>
					)}
				</div>
			</div>
		</div>
	);
};
