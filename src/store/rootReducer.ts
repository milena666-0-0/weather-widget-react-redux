import { combineReducers } from "redux";

import { weatherReducer } from "../pages/WeatherPage/reducers/index.tsx";

const rootReducer = combineReducers({
	weather: weatherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
