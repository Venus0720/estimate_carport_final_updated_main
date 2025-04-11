"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.quoteState = void 0;

var validate = _interopRequireWildcard(require("../../Components/Modals/validations"));

var _reducer = require("./reducer");

var cuBuilding = _interopRequireWildcard(require("./pricingReducer"));

var cuComponent = _interopRequireWildcard(require("./componentReducer"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var quoteState = {
  checkquoteValidateonly: "",
  saveLatterModal: false,
  orderLaterSubmitBtn: false,
  displayerrorMessage: "",
  i_g_A_y: [],
  crmSetting: {},
  thankYouForSaveLater: false,
  pdfURL: '',
  isShowAlert: false,
  alertUsedMSG: "",
  building_Data: ""
};
exports.quoteState = quoteState;
quoteState.displayerrorMessage = _reducer.const_var.displayerrorMessage;
quoteState.crmSetting = _reducer.const_var.crmSetting;

var quoteReducer = function quoteReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : quoteState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var newState = _objectSpread({}, state);

  switch (action.type) {
    case "handleSaveLatter":
      if (action.payload == "open") {
        if (_reducer.const_var.crmSetting.applyPriceCheck != undefined && _reducer.const_var.crmSetting.applyPriceCheck == true && _reducer.const_var.BuildingPriceArrar['order_total'] != undefined && parseFloat(_reducer.const_var.BuildingPriceArrar['order_total'].toFixed(2)) < parseFloat(3000)) {
          state.thankYouForSaveLater = true;
          state.alertUsedMSG = "Sorry, we are not accepting orders below $3000 (plus tax) currently. Please contact us for your requirements at - " + _reducer.const_var.crmSetting.phone_number;
        } // else if(cuBuilding.CkBngDr() == null)
        // {
        //     state.thankYouForSaveLater = true;
        //     state.alertUsedMSG = "Oops!! Did you forget to add a door to your fully enclosed building? Please see the doors and windows tab given under options panel and proceed with ordering";
        // }
        else {
            state.displayerrorMessage = _reducer.const_var.displayerrorMessage;
            state.thankYouForSaveLater = false;
            state.building_Data = _reducer.const_var.post_data.building;
            state.alertUsedMSG = "";
            _reducer.const_var.checkIval = 0;
            state.i_g_A_y = [];
            _reducer.const_var.i_g_A_y = [];
            state.saveLatterModal = true;
            _reducer.const_var.selectedTabKeyForWheel = "capture";
            cuComponent.removeDoorWindowsIcons();
            cuComponent.TsCeSot('quote');
            state.i_g_A_y = _reducer.const_var.i_g_A_y;
          }
      } else {
        state.thankYouForSaveLater = false;
        state.alertUsedMSG = "";
        state.saveLatterModal = false;
        _reducer.const_var.displayerrorMessage = {};
      }

      return _objectSpread({}, state, {
        checkquoteValidateonly: action
      });
      break;

    case "onquoteTextFiledChangeValue":
      validate.onTextFiledChangeValue(action.event, action.value, action.keyword);
      return _objectSpread({}, state, {
        checkquoteValidateonly: action
      });
      break;

    case "onQuoteSubmit":
      validate.onSubmitForm(action.event);
      action.event.preventDefault();
      var result = {};

      if (_reducer.const_var.checkValidate == false) {
        var newAddress = [];

        for (var i = 0; i <= action.event.target.length - 1; i++) {
          var arr = [{
            key: action.event.target[i].name,
            value: action.event.target[i].value
          }];

          if (arr[0].key == "zipcode") {
            _reducer.const_var.post_data['billing_zipcode'] = arr[0].value;
          } else if (arr[0].key == "phone_no") {
            _reducer.const_var.post_data['mobile_no'] = arr[0].value;
            _reducer.const_var.post_data['phone_no'] = arr[0].value;
          } else if (arr[0].key == "shipping_address_line_1") {
            _reducer.const_var.post_data['billing_address_line_1'] = arr[0].value;
          } else {
            _reducer.const_var.post_data[arr[0].key] = arr[0].value;
          }
        } // console.log(const_var.stateNameAcordingAPI[params.p_s_n],params.p_s_n,"const_var.stateNameAcordingAPI[params.p_s_n].name",const_var.post_data)


        newAddress.push({
          "address_line_1": _reducer.const_var.post_data['billing_address_line_1'],
          "address_line_2": '',
          "zipcode": _reducer.const_var.post_data['billing_zipcode'],
          "county": '',
          "state": _reducer.const_var.stateNameAcordingAPI[_reducer.params.p_s_n],
          'city': '',
          'is_billing': 1,
          'is_installation': 1
        });
        _reducer.const_var.post_data['address'] = newAddress;
        delete _reducer.const_var.post_data['billing_address_line_1'];
        delete _reducer.const_var.post_data['billing_zipcode'];

        if (_reducer.const_var.post_data['building'].leanto != undefined && _reducer.const_var.post_data['building'].leanto.length > 0) {
          if (_reducer.const_var.post_data['building'].leanto.length > 1) {
            _reducer.const_var.post_data['building'].leanto[0].alignment = _reducer.const_var.post_data['building'].leanto[0].leanto_type == 1 ? _reducer.const_var.TypeAlingnment[_reducer.params.leantoAlignmentLeft] : _reducer.const_var.TypeAlingnment[_reducer.params.leantoAlignmentRight];
            _reducer.const_var.post_data['building'].leanto[1].alignment = _reducer.const_var.post_data['building'].leanto[1].leanto_type == 1 ? _reducer.const_var.TypeAlingnment[_reducer.params.leantoAlignmentLeft] : _reducer.const_var.TypeAlingnment[_reducer.params.leantoAlignmentRight];
          } else {
            _reducer.const_var.post_data['building'].leanto[0].alignment = _reducer.const_var.post_data['building'].leanto[0].leanto_type == 1 ? _reducer.const_var.TypeAlingnment[_reducer.params.leantoAlignmentLeft] : _reducer.const_var.TypeAlingnment[_reducer.params.leantoAlignmentRight];
          }
        }

        if (_reducer.const_var.post_data["building"].left_wall_cutpanel == true) {
          _reducer.const_var.post_data["building"].left_wall_price = parseFloat(_reducer.const_var.post_data["building"].left_wall_price) + parseFloat(_reducer.const_var.post_data["building"].left_wall_cut_panel_price);
        }

        if (_reducer.const_var.post_data["building"].right_wall_cutpanel == true) {
          _reducer.const_var.post_data["building"].right_wall_price = parseFloat(_reducer.const_var.post_data["building"].right_wall_price) + parseFloat(_reducer.const_var.post_data["building"].right_wall_cut_panel_price);
        }

        _reducer.const_var.post_data["building"].custom_building = _reducer.const_var.hide_price_calculation;
        _reducer.const_var.post_data["building"].payment_mode = _reducer.const_var.paymentOptionObj[_reducer.params.paymentmode];
        _reducer.const_var.post_data['building'].other_building_type_name = _reducer.params.other_building_type_name;
        _reducer.const_var.post_data['building'].name = _reducer.params.other_building_type_name;
        _reducer.const_var.post_data['name'] = _reducer.const_var.post_data["building"].other_building_type_name;
        _reducer.const_var.post_data["custom_building"] = _reducer.const_var.hide_price_calculation;
        _reducer.const_var.post_data['is_quote'] = 1;
        _reducer.const_var.post_data['charge_card'] = 0;
        _reducer.const_var.post_data['questions'] = _reducer.const_var.estimator_QuestionAnswer;
        _reducer.const_var.post_data['module'] = "quote";
        _reducer.const_var.post_data["module_id"] = "";
        _reducer.const_var.post_data["sub_module"] = "";
        _reducer.const_var.post_data["sub_module_id"] = "";
        _reducer.const_var.post_data['form_type'] = "3d_v3";
        _reducer.const_var.post_data['created_source'] = "3d_v3";
        _reducer.const_var.post_data['is_api'] = 1;
        _reducer.const_var.post_data['lead_source'] = "3D Estimator";
        _reducer.const_var.post_data['referral_source'] = _reducer.const_var.referrer == '' ? document.referrer : _reducer.const_var.referrer;
        _reducer.const_var.post_data['source'] = _reducer.const_var.crmSetting.source;
        _reducer.const_var.post_data['page'] = _reducer.const_var.crmSetting.page;
        _reducer.const_var.post_data['form'] = "Quote Form";
        _reducer.const_var.post_data['building'].surface_level = _reducer.params.job_site_level;
        _reducer.const_var.post_data['building'].electricity = _reducer.params.power_avail;
        _reducer.const_var.post_data['building'].additional_note = _reducer.params.additional_note;
        _reducer.const_var.post_data['api_token'] = _reducer.const_var.crmSetting.api_token;
        _reducer.const_var.post_data["building_data"] = _reducer.const_var.SendAPIBuildingData;
        _reducer.const_var.post_data["pricing_data"] = _reducer.const_var.a_p_d_a;
        state.orderLaterSubmitBtn = true;
      }

      return _objectSpread({}, state, {
        checkquoteValidateonly: action.event
      });
      break;

    case "onQuoteSubmitApi":
      if (action.event.status == true) {
        if (_reducer.const_var.crmSetting.gTag == true) {
          //console.log(window.parent,window,"parent")
          window.analysisCode();
        }

        _reducer.const_var.checkoutBtnDisabled = false;
        state.orderLaterSubmitBtn = false;
        _reducer.const_var.pdfURL = action.event.pdf_url;
        state.pdfURL = action.event.pdf_url;
        state.saveLatterModal = false;
        state.thankYouForSaveLater = true;
      } else {
        var responseMessage = action.event.message;
        responseMessage = responseMessage.replace('[PhoneNumber]', _reducer.const_var.crmSetting.phone_number);
        responseMessage = responseMessage.replace('[Email]', _reducer.const_var.crmSetting.email);
        state.pdfURL = "";
        state.thankYouForSaveLater = true;
        state.saveLatterModal = false;
        state.alertUsedMSG = responseMessage;
        _reducer.const_var.checkoutBtnDisabled = false;
        state.orderLaterSubmitBtn = false;
        state.thankYouForSaveLater = true;
      }

      return _objectSpread({}, state, {
        checkquoteValidateonly: action.event + state.orderLaterSubmitBtn
      });
      break;
  }

  return newState;
};

var _default = quoteReducer;
exports["default"] = _default;