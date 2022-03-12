import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { SearchByLocationInputView } from "../components/SearchByLocationInputView";
import { getWeatherDataByLocation } from "../../../../../services/WeatherService";

export const SearchByLocationInputContainer = ({selectedDay}) => {
	const dispatch = useDispatch();

	const [city, setCity] = useState("");

	const handleChange = (e) => {
		setCity(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};


	useEffect(() => {
		if (!city) return;
		dispatch(getWeatherDataByLocation(city));
	}, [dispatch, city]);

	// useEffect(() => {
	// 	if (selectedDay) {
	// 		dispatch(getWeatherDataByLocation(city));
	// 	}
	// }, []);

	return (
		<SearchByLocationInputView
			city={city}
			handleChange={handleChange}
			handleSubmit={handleSubmit}
		/>
	);
};
