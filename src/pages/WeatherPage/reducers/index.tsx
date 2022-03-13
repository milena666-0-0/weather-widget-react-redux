import { cloneDeep } from "lodash";

import { WeatherState } from "../../../types/weatherState";
import { WeatherAction } from "../../../types/weatherAction";
import * as actions from "../actions/index.tsx";

const initialState: WeatherState = {
	weatherData: [],
	cityName: null,
	country: null,
	isLoading: false,
	errors: null,
};

export const weatherReducer =(state = initialState, action: WeatherAction): WeatherState => {
    switch(action.type) {
        case actions.GET_WEATHER_DATA_REQUEST:
            return {
				...state,
				errors: null,
				isLoading: true,
            }
        case actions.GET_WEATHER_DATA_SUCCESS:
			const { weatherDataForWeek, name, country, airPollution } = action.payload;

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
        case actions.GET_WEATHER_DATA_FAIL:
			return {
				...state,
				isLoading: false,
				errors: action.payload,
			};
        default:
            return state;
    };
};
