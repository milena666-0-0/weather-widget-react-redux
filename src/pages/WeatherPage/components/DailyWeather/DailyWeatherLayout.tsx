import { FC } from "react";

import {
	DailyWeatherData,
	WeatherData,
} from "../../../../types/dailyWeatherData.tsx";
import { WeatherForOneDayCardView } from "../WeatherForOneDayCard/WeatherForOneDayCardView.tsx";

import "./dailyWeatherPannel.scss";

interface DailyWeatherLayoutProps {
	weatherData: WeatherData;
	handleSelectDay: () => void;
	selectedDay: DailyWeatherData;
};

export const DailyWeatherLayout: FC<DailyWeatherLayoutProps> = ({
	weatherData,
	handleSelectDay,
	selectedDay,
}) => {
	return (
		<div className="daily-forecast">
			{weatherData &&
				weatherData.map((dailyForecast: DailyWeatherData) => (
					<WeatherForOneDayCardView
						key={dailyForecast.dt}
						selectedDay={selectedDay}
						dailyForecast={dailyForecast}
						handleSelectDay={handleSelectDay}
					/>
				))}
		</div>
	);
};
