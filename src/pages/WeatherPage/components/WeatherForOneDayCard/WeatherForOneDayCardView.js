import { memo } from "react";
import moment from "moment";

import { roundData } from "../../../../utils/changeMeasuring";

import "./weatherForOneDayCard.scss";

export const WeatherForOneDayCardView = memo(
	({ dailyForecast, handleSelectDay }) => {
		const {
			dt,
			temp: { max, min },
			weather,
		} = dailyForecast;

		return (
			<div
				className="weather-card weather-card--active"
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

				<span className="weather-card__highest-temp">{roundData(max)}</span>
				<span className="weather-card__lowest-temp">{roundData(min)}</span>
			</div>
		);
	}
);
