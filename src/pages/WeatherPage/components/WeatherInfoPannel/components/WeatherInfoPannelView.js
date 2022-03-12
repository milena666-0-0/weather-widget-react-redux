import moment from "moment";

import { roundData } from "../../../../../utils/changeMeasuring";

import "../weatherInfoPannel.scss";

export const WeatherInfoPannelView = ({
	selectedDay,
	cityName,
	country,
	tempMeasuringType,
	handleChangeMeasurement,
}) => {
	const { dt, humidity, currentWeather, wind_speed, currentTemp } =
		selectedDay || {};

	const { icon, id, description } = currentWeather[0];

	const classnameForC =
		tempMeasuringType === "CELCIUS" ? "weather-pannel__val--active" : "";
	const classnameForF =
		tempMeasuringType === "FAHRENHEIT" ? "weather-pannel__val--active" : "";

	return (
		<div className="weather-pannel">
			<div className="weather-pannel__place">
				<p className="weather-pannel__loc">
					{country}, {cityName}
				</p>
				<p className="weather-pannel__time">
					{moment(dt * 1000).format("dddd hA")} •
				</p>
			</div>
			<div className="weather-pannel__main">
				<div className="weather-pannel__deg">
					{/* {icon && (
						<img
							src={`http://openweathermap.org/img/wn/${icon}.png`}
							alt=""
						/>
					)} */}
					<span className="weather-pannel__temp">
						{roundData(currentTemp)} °
					</span>
					<span
						onClick={handleChangeMeasurement}
						className="weather-pannel__val"
					>
						<span className={classnameForC}>F</span> /{" "}
						<span className={classnameForF}>C</span>
					</span>
				</div>
				<div className="weather-pannel__info">
					<p>Humidity: {humidity}%</p>
					<p>
						Wind:{" "}
						{/* {tempMeasuringType === "CELCIUS"
							? mileToKm(wind_speed)
							: kmToMile(wind_speed)}{" "}
						{tempMeasuringType === "CELCIUS" ? "KPH" : "MPH"} SE */}
					</p>
					<p>Air Quality: Moderate</p>
				</div>
			</div>
		</div>
	);
};
