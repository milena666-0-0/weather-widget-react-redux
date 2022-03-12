import { WeatherForOneDayCardView } from "../WeatherForOneDayCard/WeatherForOneDayCardView";

import "./dailyWeatherPannel.scss";

export const DailyWeatherLayout = ({
	weatherData,
	handleSelectDay,
}) => {

	console.log(weatherData)
	return (
		<div className="daily-forecast">
			{weatherData &&
				weatherData.map((dailyForecast) => (
					<WeatherForOneDayCardView
						handleSelectDay={handleSelectDay}
						key={dailyForecast.dt}
						dailyForecast={dailyForecast}
					/>
				))}
		</div>
	);
};
