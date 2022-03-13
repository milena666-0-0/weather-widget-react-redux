"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WeatherInfoPannelContainer = void 0;

var _react = require("react");

var _reactRedux = require("react-redux");

var _index = require("../../../selectors/index");

var _WeatherInfoPannelView = require("../components/WeatherInfoPannelView");

// import { CHANGE_TEMP_MEASURING } from "../../../actions";
var WeatherInfoPannelContainer = function WeatherInfoPannelContainer(_ref) {
  var selectedDay = _ref.selectedDay,
      weatherData = _ref.weatherData;

  var _useSelector = (0, _reactRedux.useSelector)(_index.weatherSelector),
      cityName = _useSelector.cityName,
      country = _useSelector.country;

  return {};
};

exports.WeatherInfoPannelContainer = WeatherInfoPannelContainer;