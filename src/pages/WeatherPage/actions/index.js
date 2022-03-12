import { createAction } from "redux-actions";

export const GET_WEATHER_DATA_REQUEST = createAction(
	"GET_WEATHER_DATA_REQUEST"
);

export const GET_WEATHER_DATA_SUCCESS = createAction(
	"GET_WEATHER_DATA_SUCCESS"
);

export const GET_WEATHER_DATA_FAIL = createAction("GET_WEATHER_DATA_FAIL");


// export const SELECT_DAY_FOR_WEATHER_FORECAST = createAction("SELECT_DAY_FOR_WEATHER_FORECAST");


// export const CHANGE_TEMP_MEASURING = createAction("CHANGE_TEMP_MEASURING");



