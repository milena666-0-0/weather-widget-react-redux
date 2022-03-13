import { memo, FC } from "react";
import moment from "moment";

import { roundData } from "../../../../utils/index.ts";
import { DailyWeatherData } from "../../../../types/index";

import "./weatherForOneDayCard.scss";

interface WeatherForOneDayCardViewProps {
	handleSelectDay: () => void;
	selectedDay: DailyWeatherData;
	dailyForecast: DailyWeatherData;
}

export const WeatherForOneDayCardView: FC<WeatherForOneDayCardViewProps> = memo(
	({ dailyForecast, handleSelectDay, selectedDay }) => {
		const {
			dt,
			temp: { max, min },
			weather,
		} = dailyForecast;

		const activeCardClassname =
			selectedDay && selectedDay.dt === dt ? "weather-card--active" : "";

		return (
			<div
				className={`weather-card ${activeCardClassname}`}
				onClick={() => handleSelectDay(dt)}
			>
				<h3 className="weather-card__day">
					{dt &&
						moment(dt * 1000)
							.add("days")
							.format("ddd")}
				</h3>
				<img
					className="weather-card__icon"
					src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
					alt="weather-pic"
				/>

				<span className="weather-card__highest-temp">
					{roundData(max)}
				</span>
				<span className="weather-card__lowest-temp">
					{roundData(min)}
				</span>
			</div>
		);
	}
);
