import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";

import { DetailedWeatherInfoContainer } from "../../components/DetailedWeatherInfo/containers/DetailedWeatherInfoContainer.tsx";
import { SearchInputContainer } from "../../components/SearchInput/containers/SearchInputContainer.tsx";
import { DailyWeatherLayout } from "../../components/DailyWeather/DailyWeatherLayout.tsx";
import { weatherSelector } from "../../selectors/index.tsx";
import { DailyWeather } from "../../../../types/dailyWeatherData";

import cloudImg from "../../../../static/imgs/error.png";

import "./weatherApp.scss";

export const WeatherWidgetLayout = () => {
	const { weatherData, errors, isLoading } = useSelector(weatherSelector);

	const [selectedDay, setSelectedDay] = useState<DailyWeather>(null);
	const [isInitialMetric, setIsInitialMetric] = useState<boolean>(true);

	useEffect(() => {
		if (weatherData) {
			setSelectedDay(weatherData[0]);
		}
	}, [weatherData]);

	const handleChangeMeasuringType = useCallback(() => {
		setIsInitialMetric((isMetric) => !isMetric);
	}, []);

	const handleSelectDay = useCallback((dt: number) => {
		const findSelectedDay = weatherData.find((day: DailyWeather) => day.dt === dt);
		setSelectedDay(findSelectedDay);
	}, [weatherData]);

	const content = !(errors || isLoading) && selectedDay;
	const loading = !errors && isLoading;

	return (
		<main className="weather-app">
			<SearchInputContainer
				isInitialMetric={isInitialMetric}
				selectedDay={selectedDay}
			/>
			<div className="weather-widget__container">
				{content && (
					<>
						<DetailedWeatherInfoContainer
							handleChangeMeasuringType={
								handleChangeMeasuringType
							}
							isInitialMetric={isInitialMetric}
							weatherData={weatherData}
							selectedDay={selectedDay}
						/>
						<DailyWeatherLayout
							selectedDay={selectedDay}
							handleSelectDay={handleSelectDay}
							weatherData={weatherData}
						/>
					</>
				)}
				{errors && (
					<div className="weather-error">
						<img
							className="weather-error__pic"
							src={cloudImg}
							alt="cloud"
						/>
						<div className="weather-error__desc">
							We could not find weather information for the
							location above
						</div>
					</div>
				)}
				{loading && <div className="weather-loading">Loading...</div>}
			</div>
		</main>
	);
};
