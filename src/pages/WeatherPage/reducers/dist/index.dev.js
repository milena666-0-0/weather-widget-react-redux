"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.weatherReducer = void 0;

var _reduxActions = require("redux-actions");

var _lodash = require("lodash");

var _changeMeasuring = require("../../../utils/changeMeasuring");

var actions = _interopRequireWildcard(require("../actions/index"));

var _handleActions;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  weatherData: [],
  cityName: null,
  country: null,
  isLoading: false,
  errors: null
};
var weatherReducer = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, actions.GET_WEATHER_DATA_REQUEST, function (state) {
  return _objectSpread({}, state, {
    errors: null,
    isLoading: true
  });
}), _defineProperty(_handleActions, actions.GET_WEATHER_DATA_SUCCESS, function (state, _ref) {
  var payload = _ref.payload;
  var weatherDataForWeek = payload.weatherDataForWeek,
      name = payload.name,
      country = payload.country,
      airPollution = payload.airPollution;
  var copy = (0, _lodash.cloneDeep)(weatherDataForWeek.daily);
  var _weatherDataForWeek$c = weatherDataForWeek.current,
      currentWeather = _weatherDataForWeek$c.weather,
      dt = _weatherDataForWeek$c.dt,
      humidity = _weatherDataForWeek$c.humidity,
      currentTemp = _weatherDataForWeek$c.temp,
      wind_deg = _weatherDataForWeek$c.wind_deg,
      wind_speed = _weatherDataForWeek$c.wind_speed;

  var currentDayInfo = _objectSpread({}, copy[0], {
    currentWeather: currentWeather,
    dt: dt,
    humidity: humidity,
    currentTemp: currentTemp,
    wind_deg: wind_deg,
    wind_speed: wind_speed,
    airPollution: airPollution
  });

  copy.splice(0, 1, currentDayInfo);
  return _objectSpread({}, state, {
    weatherData: copy,
    cityName: name,
    country: country,
    isLoading: false,
    errors: null
  });
}), _defineProperty(_handleActions, actions.GET_WEATHER_DATA_FAIL, function (state, _ref2) {
  var payload = _ref2.payload;
  console.log(payload);
  return _objectSpread({}, state, {
    isLoading: false,
    errors: payload
  });
}), _handleActions), initialState);
exports.weatherReducer = weatherReducer;