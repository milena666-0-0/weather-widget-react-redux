"use strict";
exports.__esModule = true;
exports.SearchInputContainer = void 0;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var lodash_1 = require("lodash");
var SearchInputView_tsx_1 = require("../components/SearchInputView.tsx");
var WeatherService_tsx_1 = require("../../../../../services/WeatherService.tsx");
exports.SearchInputContainer = function (_a) {
    var selectedDay = _a.selectedDay, isInitialMetric = _a.isInitialMetric;
    var dispatch = react_redux_1.useDispatch();
    var _b = react_1.useState(""), city = _b[0], setCity = _b[1];
    var handleChange = function (e) {
        setCity(e.currentTarget.value);
    };
    var handleCleanInput = react_1.useCallback(function () {
        setCity("");
    }, []);
    var debouncedFetchData = react_1.useMemo(function () {
        return lodash_1.debounce(function (city) {
            dispatch(WeatherService_tsx_1.getWeatherDataByLocation(city));
        }, 500);
    }, []);
    react_1.useEffect(function () {
        if (!city)
            return;
        debouncedFetchData(city);
    }, [city]);
    react_1.useEffect(function () {
        var measiringType = isInitialMetric ? "metric" : "imperial";
        if (selectedDay) {
            dispatch(WeatherService_tsx_1.getWeatherDataByLocation(city, measiringType));
        }
    }, [isInitialMetric]);
    return (React.createElement(SearchInputView_tsx_1.SearchInputView, { city: city, handleCleanInput: handleCleanInput, handleChange: handleChange }));
};
