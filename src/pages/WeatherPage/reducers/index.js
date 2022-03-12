import { handleActions } from "redux-actions";
import { cloneDeep } from "lodash";

import { measurements } from "../../../utils/changeMeasuring";
import * as actions from "../actions/index";

const initialState = {
	weatherData: [],
	cityName: null,
	country: null,
	isLoading: false,
	errors: null,
};

export const weatherReducer = handleActions(
	{
		[actions.GET_WEATHER_DATA_REQUEST]: (state) => {
			return {
				...state,
				errors: null,
				isLoading: true,
			};
		},
		[actions.GET_WEATHER_DATA_SUCCESS]: (state, { payload }) => {
			const { weatherDataForWeek, name, country, airPollution } = payload;

			const copy = cloneDeep(weatherDataForWeek.daily);

			const {
				weather: currentWeather,
				dt,
				humidity,
				temp: currentTemp,
				wind_deg,
				wind_speed,
			} = weatherDataForWeek.current;

			const currentDayInfo = {
				...copy[0],
				currentWeather,
				dt,
				humidity,
				currentTemp,
				wind_deg,
				wind_speed,
				airPollution,
			};

			copy.splice(0, 1, currentDayInfo);

			return {
				...state,
				weatherData: copy,
				cityName: name,
				country,
				isLoading: false,
				errors: null,
			};
		},
		[actions.GET_WEATHER_DATA_FAIL]: (state, { payload }) => {
			console.log(payload);

			return {
				...state,
				isLoading: false,
				errors: payload,
			};
		},

		// [actions.SELECT_DAY_FOR_WEATHER_FORECAST]: (state, { payload }) => {
		// 	return {
		// 		...state,
		// 		selectedDayData: payload,
		// 	};
		// },

		// [actions.CHANGE_TEMP_MEASURING]: (state) => {
		// 	const measuringTypeToChange =
		// 		state.tempMeasuringType === measurements.CELCIUS
		// 			? measurements.FAHRENHEIT
		// 			: measurements.CELCIUS;

		// 	return {
		// 		...state,
		// 		tempMeasuringType: measuringTypeToChange,
		// 	};
		// },
	},
	initialState
);
