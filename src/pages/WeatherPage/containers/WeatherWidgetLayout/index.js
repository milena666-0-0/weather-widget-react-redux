import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";

import { WeatherInfoPannelContainer } from "../../components/WeatherInfoPannel/containers/WeatherInfoPannelContainer";
import { SearchByLocationInputContainer } from "../../components/SearchInput/containers/SearchByLocationInputContainer";

import { DailyWeatherLayout } from "../../components/DailyWeather/DailyWeatherLayout";
import { weatherSelector } from "../../selectors/index";

import "./weatherApp.scss";

export const WeatherWidgetLayout = () => {

	const { weatherData } = useSelector(weatherSelector);

	const [selectedDay, setSelectedDay] = useState(null);

	useEffect(() => {
		if (weatherData) {
			setSelectedDay(weatherData[0]);
		}
	}, [weatherData]);

	const handleSelectDay = (dt) => {
		const findSelectedDay = weatherData.find(
			(day) => day.dt === dt
		);
		setSelectedDay(findSelectedDay);
	};

	return (
		<main className="weather-app">
			<SearchByLocationInputContainer selectedDay={selectedDay} />
			<div className="weather-widget__container">
				{selectedDay && (
					<WeatherInfoPannelContainer
						weatherData={weatherData}
						selectedDay={selectedDay}
					/>
				)}
				<DailyWeatherLayout
					handleSelectDay={handleSelectDay}
					weatherData={weatherData}
				/>
			</div>
		</main>
	);
};
