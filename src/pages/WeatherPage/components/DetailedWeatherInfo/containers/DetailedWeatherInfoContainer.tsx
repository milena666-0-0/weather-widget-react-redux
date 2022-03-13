import { FC } from "react";
import { useSelector } from "react-redux";

import { weatherSelector } from "../../../selectors/index.tsx";
import { DetailedWeatherInfoView } from "../components/DetailedWeatherInfoView.tsx";
import {WeatherData, DailyWeatherData} from '../../../../../types/index';

interface DetailedWeatherProps {
	selectedDay: DailyWeatherData;
	weatherData: WeatherData;
	isInitialMetric: boolean;
	handleChangeMeasuringType: () => void;
};

export const DetailedWeatherInfoContainer: FC<DetailedWeatherProps> = ({
	selectedDay,
	weatherData,
	isInitialMetric,
	handleChangeMeasuringType,
}) => {
	const { cityName, country } = useSelector(weatherSelector);

	return (
		<DetailedWeatherInfoView
			handleChangeMeasuringType={handleChangeMeasuringType}
			isInitialMetric={isInitialMetric}
			cityName={cityName}
			country={country}
			weatherData={weatherData}
			selectedDay={selectedDay}
		/>
	);
};
