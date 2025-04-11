"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.orderState = void 0;

var validate = _interopRequireWildcard(require("../../Components/Modals/validations"));

var _reducer = require("./reducer");

var cuBuilding = _interopRequireWildcard(require("./pricingReducer"));

var cuComponent = _interopRequireWildcard(require("./componentReducer"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var orderState = {
  checkorderValidateonly: "",
  checkoutModal: false,
  termsAndConditionDialogExtraClassToggle: false,
  privacyPolicyCheckbox: false,
  backToCheckoutBtn: true,
  showProcessLoader: false,
  isShowThankYou: false,
  Updatedconst_var: '',
  agreeTermsAndConditionCheckbox: false,
  billingAddressCheckbox: false,
  displayerrorMessage: '',
  order_data: '',
  paymentOption: '',
  sign_jpeg: '',
  sigPad: {},
  blobImg: '',
  bjD: [],
  orderPDFURL: '',
  invoicePDFURL: '',
  i_g_A_y: [],
  alertUsedMSG: "",
  shippingState: "Select",
  billingState: "Select"
};
exports.orderState = orderState;
orderState.displayerrorMessage = _reducer.const_var.displayerrorMessage;
orderState.paymentOption = _reducer.const_var.paymentOption;
orderState.bjD = _reducer.const_var.bjD;

var orderReducer = function orderReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : orderState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var newState = _objectSpread({}, state);

  switch (action.type) {
    case "handleOrderModal":
      if (action.payload == "open") {
        if (_reducer.const_var.crmSetting.applyPriceCheck != undefined && _reducer.const_var.crmSetting.applyPriceCheck == true && _reducer.const_var.BuildingPriceArrar['order_total'] != undefined && parseFloat(_reducer.const_var.BuildingPriceArrar['order_total'].toFixed(2)) < parseFloat(3000)) {
          state.isShowThankYou = true;
          state.alertUsedMSG = "Sorry, we are not accepting orders below $3000 (plus tax) currently. Please contact us for your requirements at - " + _reducer.const_var.crmSetting.phone_number;
        } // else if(cuBuilding.CkBngDr() == null)
        // {
        //     state.isShowThankYou = true;
        //     state.alertUsedMSG = "Oops!! Did you forget to add a door to your fully enclosed building? Please see the doors and windows tab given under options panel and proceed with ordering";
        // }
        else {
            state.displayerrorMessage = _reducer.const_var.displayerrorMessage;
            state.isShowThankYou = false;
            state.alertUsedMSG = "";
            _reducer.const_var.checkIval = 0;
            _reducer.const_var.i_g_A_y = [];
            _reducer.const_var.selectedTabKeyForWheel = "capture";
            cuComponent.removeDoorWindowsIcons();
            cuComponent.TsCeSot('quote');
            _reducer.const_var.showProcessLoaderchk = true;
            state.checkoutModal = true;
            state.order_data = {
              'phone_number': _reducer.const_var.crmSetting.phone_number,
              'order_now': _reducer.const_var.crmSetting.order_now,
              'width': _reducer.const_var.post_data['building'].width,
              'length': _reducer.const_var.post_data['building'].length,
              'height': _reducer.const_var.post_data['building'].height,
              'roofstyle': _reducer.const_var.post_data['building'].roof_style_name,
              "order_total": _reducer.const_var.post_data['building'].order_total,
              "downPersentage": _reducer.const_var.post_data['building'].down_payment_rate,
              'is_loggedin': _reducer.const_var.loginSession
            };
            state.blobImg = _reducer.const_var.renderer.domElement.toDataURL("image/jpeg");
          }
      } else {
        state.isShowThankYou = false;
        state.alertUsedMSG = "";
        state.checkoutModal = false;
        _reducer.const_var.displayerrorMessage = {};
      }

      return _objectSpread({}, state, {
        checkorderValidateonly: action
      });
      break;

    case "onorderTextFiledChangeValue":
      state.isShowThankYou = false;
      state.alertUsedMSG = "";
      validate.onTextFiledChangeValue(action.event, action.value, action.keyword);
      return _objectSpread({}, state, {
        checkorderValidateonly: action
      });
      break;

    case "onOrderSubmitCheckout":
      validate.onSubmitForm(action.event);
      action.event.preventDefault();

      if (_reducer.const_var.checkValidate == false) {
        state.showProcessLoader = true;
      }

      return _objectSpread({}, state, {
        checkorderValidateonly: action.event
      });
      break;

    case "onSubmitCheckoutApi":
      state.showProcessLoader = true;
      _reducer.const_var.alertUsedFor = "onSubmitCheckoutApi";
      _reducer.const_var.showProcessLoaderchk = false;
      _reducer.const_var.thankYouForSaveLater = false;
      _reducer.const_var.showProcessLoader = false;

      if (_reducer.const_var.crmSetting.gTag == true) {
        //console.log(window.parent,window,"parent")
        window.analysisCode();
      }

      if (action.event.status == true) {
        state.invoicePDFURL = action.event.invoice_pdf;
        state.orderPDFURL = action.event.order_pdf;
        _reducer.const_var.checkoutModal = false;
        state.isShowThankYou = true;
        state.showProcessLoader = false;

        if (action.event.status == false) {
          _reducer.const_var.paymentFailedMessage = true;
        }
      } else {
        state.showProcessLoader = false;
        var responseMessage = action.event.message;
        responseMessage = responseMessage.replace('[PhoneNumber]', _reducer.const_var.crmSetting.phone_number);
        responseMessage = responseMessage.replace('[Email]', _reducer.const_var.crmSetting.email);
        _reducer.const_var.checkoutModal = false;
        state.isShowThankYou = true;
        state.alertUsedMSG = responseMessage;
      }

      return _objectSpread({}, state, {
        checkorderValidateonly: action.event
      });
      break;

    case "onSubmitCheckoutApiErrorhandling":
      var newmsgforreload = "";
      state.showProcessLoader = false;
      state.isShowThankYou = true;
      state.alertUsedMSG = action.value;
      newmsgforreload = action.value;
      return _objectSpread({}, state, {
        checkorderValidateonly: action
      });
      break;

    case "privacyPolicyCheckboxChange":
      state.privacyPolicyCheckbox = !state.privacyPolicyCheckbox;

      if (state.privacyPolicyCheckbox == true && typeof _reducer.const_var.sigPad.isEmpty === "function" && _reducer.const_var.sigPad.isEmpty() != undefined && _reducer.const_var.sigPad.isEmpty() == false && _reducer.const_var.sign_jpeg != "") {
        state.backToCheckoutBtn = false;
      } else {
        state.backToCheckoutBtn = true;
      }

      return _objectSpread({}, state, {
        checkorderValidateonly: state.privacyPolicyCheckbox
      });
      break;

    case "agreeTermsAndConditionCheckboxChange":
      state.agreeTermsAndConditionCheckbox = true;
      state.termsAndConditionDialogExtraClassToggle = true;
      state.displayerrorMessage.agreeTermsAndConditionCheckbox = '';
      _reducer.const_var.checkValidate = false;
      return _objectSpread({}, state, {
        checkorderValidateonly: state.displayerrorMessage.agreeTermsAndConditionCheckbox
      });
      break;

    case "termsAndConditionProceedBtn":
      state.termsAndConditionDialogExtraClassToggle = false;
      return _objectSpread({}, state, {
        checkorderValidateonly: state.termsAndConditionDialogExtraClassToggle
      });
      break;

    case "billingAddressCheckboxChange":
      state.billingAddressCheckbox = !state.billingAddressCheckbox;
      _reducer.const_var.billingAddressCheckbox = state.billingAddressCheckbox;
      return _objectSpread({}, state, {
        checkorderValidateonly: state.billingAddressCheckbox
      });
      break;

    case "genrateSignature":
      if (action.event == "Reset") {
        _reducer.const_var.sigPad.clear();

        _reducer.const_var.sign_jpeg = "";
        state.sign_jpeg = "";
        state.backToCheckoutBtn = true;
      } else {
        if (_reducer.const_var.sigPad.isEmpty() == true) {
          state.backToCheckoutBtn = true;
        } else if (state.privacyPolicyCheckbox == true && _reducer.const_var.sigPad.isEmpty() == false) {
          state.backToCheckoutBtn = false;
        }

        state.sign_jpeg = action.value;
        _reducer.const_var.sign_jpeg = action.value;
      }

      return _objectSpread({}, state, {
        checkorderValidateonly: action.value + state.backToCheckoutBtn
      });
      break;

    case "SHIPPINGSTATECHANGE":
      _reducer.const_var.shippingState = action.value;
      state.shippingState = action.value;
      return _objectSpread({}, state, {
        checkorderValidateonly: action
      });
      break;

    case "BILLINGSTATECHANGE":
      _reducer.const_var.billingState = action.value;
      state.billingState = action.value;
      return _objectSpread({}, state, {
        checkorderValidateonly: action
      });
      break;
  }

  return newState;
};

var _default = orderReducer;
exports["default"] = _default;