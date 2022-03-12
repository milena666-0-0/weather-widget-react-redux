import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { configureStore } from "./store/configureStore";
import { WeatherWidgetLayout } from "./pages/WeatherPage/containers/WeatherWidgetLayout/index";

import "./styles/normalize.css";

const store = configureStore();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<WeatherWidgetLayout />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
