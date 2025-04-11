"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.priceUpdateState = void 0;

var _reducer = require("./reducer");

var cuBuilding = _interopRequireWildcard(require("./pricingReducer"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var priceUpdateState = {
  changePriceCalculation: '',
  UpdatedPriceData: '',
  PriceData: ''
};
exports.priceUpdateState = priceUpdateState;
priceUpdateState.UpdatedPriceData = _reducer.const_var.UpdatedPriceData;

var priceUpdateReducer = function priceUpdateReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : priceUpdateState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var newState = _objectSpread({}, state);

  switch (action.type) {
    case "updatePriceCalculation":
      cuBuilding.updatePriceCalculation(action.newVal, action.oldVal, action.key, action.leanVal, action.objIndex, action.uniqueId, action.elementObjIndex, action.extraItemType);
      state.PriceData = _reducer.const_var.post_data.building;
      return _objectSpread({}, state, {
        changePriceCalculation: action
      });
  }

  return newState;
};

var _default = priceUpdateReducer;
exports["default"] = _default;