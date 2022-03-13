"use strict";
exports.__esModule = true;
exports.DetailedWeatherInfoView = void 0;
var moment_1 = require("moment");
var index_ts_1 = require("../../../../../utils/index.ts");
require("../weatherInfoPannel.scss");
;
exports.DetailedWeatherInfoView = function (_a) {
    var selectedDay = _a.selectedDay, cityName = _a.cityName, country = _a.country, weatherData = _a.weatherData, isInitialMetric = _a.isInitialMetric, handleChangeMeasuringType = _a.handleChangeMeasuringType;
    var currentSelectedDay = weatherData[0].dt === selectedDay.dt;
    var dt = selectedDay.dt, humidity = selectedDay.humidity, wind_speed = selectedDay.wind_speed, wind_deg = selectedDay.wind_deg, max = selectedDay.temp.max;
    var selectedDayTemp = currentSelectedDay ? selectedDay.currentTemp : max;
    var selectedDayWeather = currentSelectedDay
        ? selectedDay.currentWeather[0]
        : selectedDay.weather[0];
    var desc = selectedDayWeather.description.charAt(0).toUpperCase() +
        selectedDayWeather.description.slice(1);
    var air = currentSelectedDay && selectedDay.airPollution;
    var activeC = isInitialMetric ? "weather-pannel__val--active" : "";
    var activeF = !isInitialMetric ? "weather-pannel__val--active" : "";
    return (React.createElement("div", { className: "weather-pannel" },
        React.createElement("div", { className: "weather-pannel__place" },
            React.createElement("p", { className: "weather-pannel__loc" },
                country,
                ", ",
                cityName),
            React.createElement("p", { className: "weather-pannel__time" },
                moment_1["default"](dt * 1000).format("dddd hA"),
                " \u2022 ",
                desc)),
        React.createElement("div", { className: "weather-pannel__main" },
            React.createElement("div", { className: "weather-pannel__deg" },
                React.createElement("img", { src: "http://openweathermap.org/img/wn/" + selectedDayWeather.icon + ".png", alt: "" }),
                React.createElement("span", { className: "weather-pannel__temp" },
                    index_ts_1.roundData(selectedDayTemp),
                    " \u00B0"),
                React.createElement("span", { onClick: handleChangeMeasuringType, className: "weather-pannel__val" },
                    React.createElement("span", { className: activeF }, "F"),
                    " /",
                    " ",
                    React.createElement("span", { className: activeC }, "C"))),
            React.createElement("div", { className: "weather-pannel__info" },
                React.createElement("p", null,
                    "Humidity: ",
                    humidity,
                    "%"),
                React.createElement("p", null,
                    "Wind: ",
                    index_ts_1.roundData(wind_speed),
                    isInitialMetric ? "KPH" : "MPH",
                    " ",
                    index_ts_1.convertWindDegToDir(wind_deg)),
                currentSelectedDay && (React.createElement("p", null,
                    "Air Quality: ",
                    index_ts_1.convertAirPollutionData(air)))))));
};
