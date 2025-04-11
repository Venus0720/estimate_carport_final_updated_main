"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reducer = _interopRequireDefault(require("../reducers/reducer"));

var _loginReducer = _interopRequireDefault(require("../reducers/loginReducer"));

var _quoteReducer = _interopRequireDefault(require("../reducers/quoteReducer"));

var _orderReducer = _interopRequireDefault(require("../reducers/orderReducer"));

var _eventReducer = _interopRequireDefault(require("../reducers/eventReducer"));

var _componentReducer = _interopRequireDefault(require("../reducers/componentReducer"));

var _leadcustomerReducer = _interopRequireDefault(require("../reducers/leadcustomerReducer"));

var _priceUpdateReducer = _interopRequireDefault(require("../reducers/priceUpdateReducer"));

var _orderExtrasReducer = _interopRequireDefault(require("../reducers/orderExtrasReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = (0, _redux.combineReducers)({
  reducer: _reducer["default"],
  loginReducer: _loginReducer["default"],
  quoteReducer: _quoteReducer["default"],
  orderReducer: _orderReducer["default"],
  orderExtrasReducer: _orderExtrasReducer["default"],
  priceUpdateReducer: _priceUpdateReducer["default"],
  leadcustomerReducer: _leadcustomerReducer["default"],
  eventReducer: _eventReducer["default"],
  componentReducer: _componentReducer["default"]
});
var store = (0, _redux.createStore)(rootReducer, (0, _redux.applyMiddleware)(_reduxThunk["default"]));
var _default = store;
exports["default"] = _default;