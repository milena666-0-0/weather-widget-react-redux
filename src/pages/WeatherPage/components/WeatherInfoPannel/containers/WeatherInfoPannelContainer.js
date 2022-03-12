import { useCallback } from "react";
import { useSelector } from "react-redux";

// import { CHANGE_TEMP_MEASURING } from "../../../actions";
import { weatherSelector } from "../../../selectors/index";
import { WeatherInfoPannelView } from "../components/WeatherInfoPannelView";

export const WeatherInfoPannelContainer = ({ selectedDay, weatherData }) => {
	const { cityName, country } = useSelector(weatherSelector);

	return (
		<WeatherInfoPannelView
			cityName={cityName}
			country={country}
			weatherData={weatherData}
			selectedDay={selectedDay}
			// handleChangeMeasurement={handleChangeMeasurement}
		/>
	);
};
