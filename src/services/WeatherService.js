import {
	GET_WEATHER_DATA_REQUEST,
	GET_WEATHER_DATA_SUCCESS,
	GET_WEATHER_DATA_FAIL,
} from "../pages/WeatherPage/actions/index";

import api from "../api/config";
import { accessKeys } from "../api/accessKeys";

export const getWeatherDataByLocation = (city, units = "metric") => {
	return async (dispatch) => {
		try {
			dispatch(GET_WEATHER_DATA_REQUEST(city));
			const coords = await getLocationByCity(city);

			const { lat, lon, name, country } = coords.data[0];

			const extendedWeatherData = await Promise.all([
				getWeatherData(lat, lon, units),
				getAirPollution(lat, lon),
			]);

			const weatherDataForWeek = extendedWeatherData[0].data;
			const airPollution = extendedWeatherData[1].data.list[0].main.aqi;

			const weatherData = {
				airPollution,
				weatherDataForWeek,
				name,
				country,
			};

			dispatch(GET_WEATHER_DATA_SUCCESS(weatherData));
		} catch (e) {
			dispatch(GET_WEATHER_DATA_FAIL(e));
		}
	};
};

export const getWeatherData = async (lat, lon, units = "metric") => {
	try {

		const weatherData = await api.get(`data/2.5/onecall`, {
			params: {
				lat,
				lon,
				exclude: "minutely,hourly,alerts",
				units,
				appid: accessKeys.API_KEY,
			},
		});
		return weatherData;
	} catch (e) {
		return e;
	}
};

export const getLocationByCity = async (city) => {
	try {
		const coords = await api.get(`geo/1.0/direct`, {
			params: { q: city, appid: accessKeys.API_KEY },
		});
		return coords;
	} catch (e) {
		return e;
	}
};

export const getAirPollution = async (lat, lon) => {
	try {
		const airPollution = await api.get(`data/2.5/air_pollution`, {
			params: {
				lat,
				lon,
				appid: accessKeys.API_KEY,
			},
		});
		return airPollution;
	} catch (e) {
		return e;
	}
};
