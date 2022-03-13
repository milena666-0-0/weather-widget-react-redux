import * as actions from "../pages/WeatherPage/actions/index";

interface GET_WEATHER_DATA_REQUEST {
	type: typeof actions.GET_WEATHER_DATA_REQUEST;
	payload: string;
}

interface GET_WEATHER_DATA_SUCCESS {
	type: typeof actions.GET_WEATHER_DATA_SUCCESS;
	payload: any;
}

interface GET_WEATHER_DATA_FAIL {
	type: typeof actions.GET_WEATHER_DATA_FAIL;
	payload: any;
}

export type WeatherAction =
	| GET_WEATHER_DATA_REQUEST
	| GET_WEATHER_DATA_SUCCESS
	| GET_WEATHER_DATA_FAIL;
