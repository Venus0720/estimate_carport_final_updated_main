"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.extrasState = void 0;

var _reducer = require("./reducer");

var cuBuilding = _interopRequireWildcard(require("./pricingReducer"));

var cuComponent = _interopRequireWildcard(require("./componentReducer"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var extrasState = {
  isSlidebarOpen: false,
  isOrderExtraNotesOpen: false,
  ExtraspriceCalculation: '',
  showhideleftpanel: false,
  order_extra_items: {},
  AddExtraNotes: '',
  LoginSession: false,
  isSlidebarOpencapture: false,
  ExtrascrmSetting: '',
  BlobImage: false,
  isShowCaptureModal: false,
  estimator_QuestionAnswer: '',
  BlobImageName: "",
  BlobImageIndex: 0,
  is_description: false
};
exports.extrasState = extrasState;
extrasState.order_extra_items = _reducer.const_var.order_extra_items;
extrasState.estimator_QuestionAnswer = _reducer.const_var.estimator_QuestionAnswer;
extrasState.LoginSession = _reducer.const_var.loginSession;
extrasState.ExtrascrmSetting = _reducer.const_var.crmSetting;

var orderExtrasReducer = function orderExtrasReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : extrasState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var newState = _objectSpread({}, state);

  switch (action.type) {
    case "onClickshowhideleftpanel":
      state.showhideleftpanel = !state.showhideleftpanel;
      return _objectSpread({}, state, {
        showhideleftpanel: state.showhideleftpanel
      });
      break;

    case "showImageEditor":
      _reducer.const_var.isShowEmageEditor = action.flag;
      state.BlobImageName = action.value;

      if (action.key != '') {
        state.BlobImageIndex = action.key != '' ? action.key : state.BlobImageIndex; // console.log(action.value,"action.value",action.key,const_var.i_g_A_y)

        _reducer.const_var.i_g_A_y[action.key].image = action.value;
      }

      return _objectSpread({}, state, {
        action: action
      });
      break;

    case "handleShowCapture":
      state.isSlidebarOpencapture = true; //state.i_g_A_y = const_var.i_g_A_y;

      var bodydom = document.querySelector('body');
      bodydom.classList.add("isSlidebarOpen", "opencaptureview");
      setTimeout(function () {
        bodydom.classList.add("active-fullview");
        cuComponent.onResize();
      }, 400);
      return _objectSpread({}, state, {
        action: action
      });
      break;

    case "captureBlobImages":
      document.querySelector('body').classList.add('capture-animate');
      setTimeout(function () {
        document.querySelector('body').classList.remove('capture-animate');
      }, 1000);

      _reducer.const_var.i_g_A_y.push({
        "image": _reducer.const_var.renderer.domElement.toDataURL("image/jpeg")
      });

      if (_reducer.const_var.i_g_A_y.length > 0) {
        _reducer.const_var.checkCaptuareImage = true;
      } else {
        _reducer.const_var.checkCaptuareImage = false;
      }

      for (var i = 0; i < _reducer.const_var.i_g_A_y.length; i++) {
        if (_reducer.const_var.i_g_A_y[i].image_name == undefined || _reducer.const_var.i_g_A_y[i].image_name == "") {
          _reducer.const_var.i_g_A_y[i].image_name = "View Image " + (i + 1);
        }
      }

      state.BlobImage = !state.BlobImage; //const_var.post_data["building"].building_image = const_var.renderer.domElement.toDataURL("image/jpeg",0.5);  

      return _objectSpread({}, state, {
        action: action
      });
      break;

    case "addSluginToBlobImages":
      if (action.label != "") {
        if (action.label == "image_name") {
          _reducer.const_var.i_g_A_y[action.key].image_name = action.event.target.value;
        }

        if (action.label == "description") {
          _reducer.const_var.i_g_A_y[action.key].description = action.event.target.value;
        }

        if (action.label == "is_description") {
          _reducer.const_var.i_g_A_y[action.key].is_description = !action.event.target.value;
        }

        state.BlobImage = !state.BlobImage;
      } else {
        _reducer.const_var.i_g_A_y.splice(action.key, 1);

        if (_reducer.const_var.i_g_A_y.length > 0) {
          _reducer.const_var.checkCaptuareImage = true;
        } else {
          _reducer.const_var.checkCaptuareImage = false;
        }

        state.BlobImage = !state.BlobImage;
      } //const_var.post_data["building"].building_image = const_var.renderer.domElement.toDataURL("image/jpeg",0.5);  


      return _objectSpread({}, state, {
        action: action
      });
      break;

    case "handleShowExtras":
      if (action.key != "extra_close") {
        //const_var.i_g_A_y = [];
        // state.isSlidebarOpen = true;         
        //  state.isSlidebarOpencapture = false;        
        // document.querySelector('body').classList.add('isSlidebarOpen');
        state.order_extra_items = _reducer.const_var.order_extra_items;
        state.estimator_QuestionAnswer = _reducer.const_var.estimator_QuestionAnswer; //  const slidepaneldom = document.querySelector('.slide-panel');                 
        // slidepaneldom.classList.remove("device-capture-screen");
      } else {
        state.isSlidebarOpen = false;

        var _bodydom = document.querySelector('body');

        var slidepaneldom = document.querySelector('.slide-panel');

        _bodydom.classList.remove("isSlidebarOpen", "active-fullview", "opencaptureview");

        setTimeout(function () {
          slidepaneldom.classList.add("device-capture-screen");
        }, 300);
        cuComponent.onResize();
      }

      return _objectSpread({}, state, {
        isSlidebarOpen: state.isSlidebarOpen + state.isOrderExtraNotesOpen
      });
      break;

    case "orderExtrasChangeValue":
      if (action.keyword == "yes") {
        action.event.target.value = action.event.target.value.replace(/[^0-9\.]/g, "");
        action.event.target.value = action.event.target.value.replace(/^0+/, '');
        action.event.target.value = action.event.target.value.replace(/,/g, '');
        state.order_extra_items[action.event.target.name] = action.event.target.value;
        var regex = /^\d+(\.\d{0,2})?$/g;

        if (!regex.test(state.order_extra_items[action.event.target.name])) {
          if (isNaN(parseFloat(state.order_extra_items[action.event.target.name])) == true || state.order_extra_items[action.event.target.name] == "") {
            state.order_extra_items[action.event.target.name] = 0;
          } else {
            state.order_extra_items[action.event.target.name] = state.order_extra_items[action.event.target.name].split(".");
            state.order_extra_items[action.event.target.name] = state.order_extra_items[action.event.target.name][0] + '.' + state.order_extra_items[action.event.target.name][1].substring(0, 2);
          }
        } // var regex = /^\d+(\.\d{0,2})?$/g;
        // if (!regex.test(state.order_extra_items[action.event.target.name])) {
        //     state.order_extra_items[action.event.target.name] = 0;
        // }


        if (isNaN(state.order_extra_items[action.event.target.name])) {
          state.order_extra_items[action.event.target.name] = 0;
        } // if(isNaN(parseInt(action.event.target.value))==true || action.event.target.value=='')
        // {
        //     action.event.target.value = 0;
        // }
        // state.order_extra_items[action.event.target.name] = parseInt(action.event.target.value);


        _reducer.const_var.order_extra_items = state.order_extra_items;

        if (action.value == "processing_fee" && _reducer.const_var.card_processing_fee != undefined) {
          _reducer.const_var.card_processing_fee.is_edit = true;
        }

        if (action.value == "surchargeFees" && _reducer.const_var.stateManufacturerAcordingAPIDiscount['surcharge'][_reducer.params.m_s_n] != undefined) {
          _reducer.const_var.stateManufacturerAcordingAPIDiscount['surcharge'][_reducer.params.m_s_n].is_edit = true;
        }

        cuBuilding.cP();
      } else {
        if (action.value == "additional_note") {
          state.order_extra_items["additional_note"] = action.event.target.value;
          _reducer.const_var.order_extra_items = state.order_extra_items;
        } else if (action.value == "description") {
          state.order_extra_items["description"] = action.event.target.value;
          _reducer.const_var.order_extra_items = state.order_extra_items;
        } else {
          state.order_extra_items[action.event.target.name] = action.event.target.value;
          _reducer.const_var.order_extra_items = state.order_extra_items;
        }

        cuBuilding.cP();
      }

      return _objectSpread({}, state, {
        ExtraspriceCalculation: action
      });
      break;

    case "CheckCaptureModalImage":
      state.isShowCaptureModal = action.str;

      if (action.key == 'empty') {
        _reducer.const_var.i_g_A_y = [];
        _reducer.const_var.checkCaptuareImage = false; // state.isSlidebarOpencapture = true;  
        // const bodydom = document.querySelector('body'); 
        // bodydom.classList.add("isSlidebarOpen" ,"active-fullview","opencaptureview");
      }

      return _objectSpread({}, state, {
        action: action
      });
      break;
  }

  return newState;
};

var _default = orderExtrasReducer;
exports["default"] = _default;