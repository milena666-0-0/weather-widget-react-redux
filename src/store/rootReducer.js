import { combineReducers } from "redux";

import { weatherReducer } from "../pages/WeatherPage/reducers/index";

const rootReducer = combineReducers({
	weather: weatherReducer,
});

export default rootReducer;
