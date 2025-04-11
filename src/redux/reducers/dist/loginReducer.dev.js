"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.loginState = void 0;

var validate = _interopRequireWildcard(require("../../Components/Modals/validations"));

var _reducer = require("./reducer");

var cuBuilding = _interopRequireWildcard(require("./pricingReducer"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var loginState = {
  checkLoginValidateonly: "",
  loginErroHandling: "",
  formsubmitHandle: "",
  displayerrorMessage: {},
  loginRememberMe: false,
  alertCheckLoginAPI: '',
  alertForLoginAPI: '',
  alertForLoginAPIMSG: '',
  loginSucess: false,
  parentReducerData: "",
  targetRedirectUrl: "",
  iframeEvents: ""
};
exports.loginState = loginState;
loginState.displayerrorMessage = _reducer.const_var.displayerrorMessage;
loginState.parentReducerData = _reducer.const_var.crmSetting;
loginState.targetRedirectUrl = _reducer.const_var.targetRedirectUrl;

var loginReducer = function loginReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : loginState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var newState = _objectSpread({}, state);

  switch (action.type) {
    case "onLoginTextFiledChangeValue":
      state.alertCheckLoginAPI = false;
      var userObj = '';

      if (localStorage.getItem('RememberuserData') != undefined) {
        userObj = JSON.parse(localStorage.getItem('RememberuserData'));
        userObj[action.value] = action.event.target.value;
        localStorage.setItem("RememberuserData", JSON.stringify(userObj));
      }

      validate.onTextFiledChangeValue(action.event, action.value, action.keyword);
      return _objectSpread({}, state, {
        checkLoginValidateonly: action
      });
      break;

    case "onSubmitLoginApiErrorhandling":
      state.loginSucess = false;
      var newmsgforreload = "";
      state.alertCheckLoginAPI = true;
      state.alertForLoginAPI = "onSubmitLoginApiErrorhandling";
      state.alertForLoginAPIMSG = action.value;
      newmsgforreload = action.value + state.alertCheckLoginAPI;
      return _objectSpread({}, state, {
        action: action
      });
      break;

    case "onSubmitLogin":
      if (action.key == "login") {
        state.loginSucess = true;
        state.alertCheckLoginAPI = false;
        _reducer.const_var.confirmState = false;
        _reducer.const_var.is_loggedinUserData = action.event.data.userdata;
        _reducer.const_var.crmSetting.api_token = _reducer.const_var.is_loggedinUserData.api_token;
        _reducer.const_var.username = action.event.data.userdata.name;
        _reducer.const_var.selectedTabstate = 'statechange';
        _reducer.const_var.loginSession = true;
        action.data['first_name'] = _reducer.const_var.is_loggedinUserData.first_name;
        action.data['last_name'] = _reducer.const_var.is_loggedinUserData.last_name;
        action.data['user_id'] = _reducer.const_var.is_loggedinUserData.id;
        action.data['api_token'] = _reducer.const_var.is_loggedinUserData.api_token;
        localStorage.setItem("userData", JSON.stringify(action.data));
        localStorage.setItem("access_token", action.event.data.userdata.jwt_token);
        state.iframeEvents && state.iframeEvents.postMessage({
          access_token: action.event.data.userdata.jwt_token
        }, "*");

        if (state.loginRememberMe == true) {
          action.remember['remember'] = state.loginRememberMe;
          localStorage.setItem("RememberuserData", JSON.stringify(action.remember));
        } else {
          localStorage.username = "";
          localStorage.checkbox = "";
        }
      } else {
        action.event.preventDefault();
        validate.onSubmitForm(action.event);
      }

      return _objectSpread({}, state, {
        checkLoginValidateonly: action
      });
      break;

    case "loginRememberMeChange":
      state.loginRememberMe = !state.loginRememberMe;
      state.alertCheckLoginAPI = false;

      if (state.loginRememberMe == false) {
        localStorage.removeItem('RememberuserData');
      }

      return _objectSpread({}, state, {
        checkLoginValidateonly: action
      });
      break;

    case "onSubmitLogout":
      // localStorage.removeItem('userData');
      localStorage.removeItem('userData');
      localStorage.clear();
      _reducer.const_var.loginSession = false;
      _reducer.const_var.logindrpdwn = false;
      _reducer.const_var.logininitial = true;
      window.location.href = state.parentReducerData.navigation_url.logout;
      return _objectSpread({}, state, {
        checkLoginValidateonly: action //newColor:state.const_var.loginSession+action.event

      });
      break;

    case "iframeEvent":
      return _objectSpread({}, state, {
        iframeEvents: action.event
      });
      break;
  }

  return newState;
};

var _default = loginReducer;
exports["default"] = _default;