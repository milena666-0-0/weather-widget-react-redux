import {
	useState,
	useEffect,
	FC,
	FormEvent,
	useMemo,
	useCallback,
} from "react";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";

import { DailyWeatherData } from "../../../../../types/weatherData";
import { SearchInputView } from "../components/SearchInputView.tsx";
import { getWeatherDataByLocation } from "../../../../../services/WeatherService.tsx";

interface SearchInput {
	selectedDay: DailyWeatherData;
	isInitialMetric: boolean;
}

export const SearchInputContainer: FC<SearchInput> = ({
	selectedDay,
	isInitialMetric,
}) => {
	const dispatch = useDispatch();

	const [city, setCity] = useState("");

	const handleChange = (e: FormEvent<HTMLInputElement>) => {
		setCity(e.currentTarget.value);
	};

	const handleCleanInput = useCallback(() => {
		setCity("");
	}, []);

	const debouncedFetchData = useMemo(() => {
		return debounce((city: string) => {
			dispatch(getWeatherDataByLocation(city));
		}, 500);
	}, []);

	useEffect(() => {
		if (!city) return;
		debouncedFetchData(city);
	}, [city]);

	useEffect(() => {
		const measiringType: string = isInitialMetric ? "metric" : "imperial";

		if (selectedDay) {
			dispatch(getWeatherDataByLocation(city, measiringType));
		}
	}, [isInitialMetric]);

	return (
		<SearchInputView
			city={city}
			handleCleanInput={handleCleanInput}
			handleChange={handleChange}
		/>
	);
};
