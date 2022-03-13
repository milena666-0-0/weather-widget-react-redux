"use strict";
exports.__esModule = true;
exports.DetailedWeatherInfoContainer = void 0;
var react_redux_1 = require("react-redux");
var index_tsx_1 = require("../../../selectors/index.tsx");
var DetailedWeatherInfoView_tsx_1 = require("../components/DetailedWeatherInfoView.tsx");
;
exports.DetailedWeatherInfoContainer = function (_a) {
    var selectedDay = _a.selectedDay, weatherData = _a.weatherData, isInitialMetric = _a.isInitialMetric, handleChangeMeasuringType = _a.handleChangeMeasuringType;
    var _b = react_redux_1.useSelector(index_tsx_1.weatherSelector), cityName = _b.cityName, country = _b.country;
    return (React.createElement(DetailedWeatherInfoView_tsx_1.DetailedWeatherInfoView, { handleChangeMeasuringType: handleChangeMeasuringType, isInitialMetric: isInitialMetric, cityName: cityName, country: country, weatherData: weatherData, selectedDay: selectedDay }));
};
