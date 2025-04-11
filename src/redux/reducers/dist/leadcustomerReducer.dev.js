"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.leadcustomerState = void 0;

var cuBuilding = _interopRequireWildcard(require("./pricingReducer"));

var validate = _interopRequireWildcard(require("../../Components/Modals/validations"));

var _reducer = require("./reducer");

var cuComponent = _interopRequireWildcard(require("./componentReducer"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var leadcustomerState = {
  showCustomerModal: false,
  showTermsCondition: false,
  searchData: {},
  searchType: 'Leads',
  leadSourceData: {},
  showCustomerLeadRecord: false,
  LeadCustomerData: {},
  showEditEmail: false,
  LeadCustomerPostData: {},
  search_lead_customer: '',
  showInstallationAddressDetails: false,
  displayerrorMessage: "",
  i_g_A_y: true,
  is_module_name: "",
  addCustomerData: false,
  isShowSuccessOq: false,
  targetRedirectUrl: "",
  returnRespone: "",
  thankYouForSaveLater: false,
  alertUsedMSG: "",
  showAddressView: false,
  isAddress_Edit: '',
  has_customer_permission: "0",
  checkImageCount: [],
  checkCustomerEdit: false,
  leadSourceStateData: {}
};
exports.leadcustomerState = leadcustomerState;
leadcustomerState.leadSourceStateData = _reducer.const_var.leadSourceStateData != '' && Object.keys(_reducer.const_var.leadSourceStateData).length > 0 ? _reducer.const_var.leadSourceStateData : leadcustomerState.leadSourceStateData;
leadcustomerState.displayerrorMessage = _reducer.const_var.displayerrorMessage;
_reducer.const_var.LeadCustomerData = leadcustomerState.LeadCustomerData;
leadcustomerState.is_module_name = _reducer.const_var.crmSetting.is_module_name;
leadcustomerState.targetRedirectUrl = _reducer.const_var.targetRedirectUrl;
leadcustomerState.targetRedirectUrl.web_url = _reducer.const_var.crmSetting.web_url;
leadcustomerState.targetRedirectUrl.form_action = _reducer.const_var.crmSetting.form_action;
leadcustomerState.targetRedirectUrl.sub_module = _reducer.const_var.crmSetting.sub_module;
leadcustomerState.targetRedirectUrl.selected_sub_module = _reducer.const_var.crmSetting.selected_sub_module;
leadcustomerState.has_customer_permission = _reducer.const_var.crmSetting.has_customer_permission;
leadcustomerState.checkImageCount = _reducer.const_var.i_g_A_y;
leadcustomerState.checkCustomerEdit = _reducer.const_var.crmSetting.is_quote_Edit;

var leadcustomerReducer = function leadcustomerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : leadcustomerState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var newState = _objectSpread({}, state);

  switch (action.type) {
    case "testAction":
      return _objectSpread({}, state, {
        action: action
      });

    case "onTextFiledChangeValue":
      state.LeadCustomerData[action.value] = action.event.target.value;
      state.LeadCustomerData.is_Action = false;

      if (action.ValidationCheck != "NoValidate") {
        validate.onTextFiledChangeValue(action.event, action.value, action.keyword, "LeadCustomer");
      }

      if (action.ValidationCheck == "NoValidate1") {
        //console.log(action.event,action.value,action.keyword);
        validate.alphaSpaceValue(action.event, action.value);
      }

      if (action.ValidationCheck == "NoValidate2") {
        //console.log(action.event,action.value,action.keyword);
        validate.alphaCheckValue(action.event, action.value);
      }

      if (action.editEmail == "editEmail") {
        state.LeadCustomerData.email_2 = action.event.target.value;
      }

      return _objectSpread({}, state, {
        action: action
      });
      break;

    case "onAddressFiledChangeValue":
      var MainData = '';
      MainData = state.isAddress_Edit;
      state.LeadCustomerData.address[MainData][action.value] = action.event.target.value;
      state.LeadCustomerData.is_Action = false;

      if (action.ValidationCheck == "NoValidate1") {
        //console.log(action.event,action.value,action.keyword);
        validate.alphaSpaceValue(action.event, action.value);
      }

      if (action.ValidationCheck == "NoValidate2") {
        //console.log(action.event,action.value,action.keyword);
        validate.alphaCheckValue(action.event, action.value);
      }

      return _objectSpread({}, state, {
        action: action
      });
      break;

    case "handleProductModal":
      // if(const_var.entry_points.length==0)
      // {
      //     state.thankYouForSaveLater = true;
      //     state.alertUsedMSG = "Oops!! Did you forget to add a door to your fully enclosed building? Please see the doors and windows tab given under options panel and proceed with ordering";
      // }else if(const_var.post_data["building"].roof_style_price==0 && const_var.b_o_J_1[params.p_b_t]!="Custom Buildings")
      // {
      //     state.thankYouForSaveLater = true;
      //     state.alertUsedMSG = "Basic Price should be greater than 0";
      // }
      if (_reducer.const_var.post_data["building"].roof_style_price == 0 && _reducer.const_var.b_o_J_1[_reducer.params.p_b_t] != "Custom Buildings") {
        state.thankYouForSaveLater = true;
        state.alertUsedMSG = "Basic Price should be greater than 0";
      } else {
        _reducer.params.is_translusant = false;
        cuBuilding.BuildingUpdate(true, "");
        state.alertUsedMSG = "";
        state.thankYouForSaveLater = false;

        _reducer.const_var.controls.target.set(0, _reducer.params.p_h / 2, 0);

        _reducer.const_var.camera.position.set(0, _reducer.params.p_h + 0, 3.25 * _reducer.params.p_d);

        _reducer.const_var.controls.update();

        state.returnRespone = "";
        state.showCustomerModal = false;
        state.isShowSuccessOq = true;
        state.i_g_A_y = false;

        if (_reducer.const_var.checkCaptuareImage != true) {
          _reducer.const_var.checkIval = 0;
          _reducer.const_var.i_g_A_y = [];
        }

        _reducer.const_var.selectedTabKeyForWheel = "capture";
        cuComponent.removeDoorWindowsIcons();
        cuComponent.TsCeSot('quote', "finalsubmit");
      }

      return _objectSpread({}, state, {
        action: action
      });
      break;

    case "AddEditAddressInfo":
      //console.log(action,"action")
      if (action.key == 'edit') {
        state.showAddressView = true;
        state.isAddress_Edit = action.event;

        if (state.LeadCustomerData.address != undefined) {
          state.LeadCustomerData.address[state.isAddress_Edit].address_line_1 = state.LeadCustomerData.address[state.isAddress_Edit].address_line_1.trim();
          state.LeadCustomerData.address[state.isAddress_Edit].is_edit = 1;
          _reducer.const_var.addressBook[state.isAddress_Edit].is_edit = 1;
        }
      }

      if (action.key == 'back') {
        state.LeadCustomerData.address[state.isAddress_Edit].address_line_1 = _reducer.const_var.addressBook[state.isAddress_Edit].new_address_line_1;
        state.LeadCustomerData.address[state.isAddress_Edit].address_line_2 = _reducer.const_var.addressBook[state.isAddress_Edit].new_address_line_2;
        state.LeadCustomerData.address[state.isAddress_Edit].zipcode = _reducer.const_var.addressBook[state.isAddress_Edit].new_zipcode;
        state.LeadCustomerData.address[state.isAddress_Edit].city = _reducer.const_var.addressBook[state.isAddress_Edit].new_city;
        state.LeadCustomerData.address[state.isAddress_Edit].county = _reducer.const_var.addressBook[state.isAddress_Edit].new_county;
        state.LeadCustomerData.address[state.isAddress_Edit].state = _reducer.const_var.addressBook[state.isAddress_Edit].new_state;

        if (state.LeadCustomerData.address[state.isAddress_Edit].address_line_1 == '' && state.LeadCustomerData.address[state.isAddress_Edit].is_edit != 1) {
          state.LeadCustomerData.address.splice(state.isAddress_Edit, 1);

          _reducer.const_var.addressBook.splice(state.isAddress_Edit, 1);
        }

        state.showAddressView = false;
        state.displayerrorMessage = {}; //state.isAddress_Edit = action.event;
      }

      if (action.key == 'add') {
        state.showAddressView = true;

        if (state.LeadCustomerData.address != undefined && state.LeadCustomerData.address.length > 0) {
          state.LeadCustomerData.address.push({
            "address_line_1": '',
            "address_line_2": '',
            "zipcode": '',
            "county": '',
            "state": '',
            'city': '',
            'is_billing': 0,
            'is_installation': 0
          });

          _reducer.const_var.addressBook.push({
            "new_address_line_1": '',
            "new_address_line_2": '',
            "new_zipcode": '',
            "new_county": '',
            "new_state": '',
            'new_city': '',
            'is_billing': 0,
            'is_installation': 0
          });
        } else {
          //console.log(state.LeadCustomerData,"state.LeadCustomerData")
          if (state.LeadCustomerData.address == undefined) {
            state.LeadCustomerData.address = [];
          }

          state.LeadCustomerData.address.push({
            "address_line_1": '',
            "address_line_2": '',
            "zipcode": '',
            "county": '',
            "state": '',
            'city': '',
            'is_default': 1,
            'is_billing': 1,
            'is_installation': 1
          });

          _reducer.const_var.addressBook.push({
            "new_address_line_1": '',
            "new_address_line_2": '',
            "new_zipcode": '',
            "new_county": '',
            "new_state": '',
            'new_city': '',
            'is_default': 1,
            'is_billing': 1,
            'is_installation': 1
          });
        }

        state.isAddress_Edit = state.LeadCustomerData.address.length > 0 ? state.LeadCustomerData.address.length - 1 : state.LeadCustomerData.address.length;
      }

      if (action.key == 'update') {
        state.showAddressView = false;
        state.LeadCustomerData['address'].map(function (val, index) {
          if (action.is_Checked != undefined) {
            val[action.is_Checked] = 0;
            _reducer.const_var.addressBook[index].is_Checked = 0;

            if (action.event == index) {
              val[action.is_Checked] = 1;
              _reducer.const_var.addressBook[index].is_Checked = 1;
            }
          }
        }); //console.log(state.LeadCustomerData['address'],"state.LeadCustomerData['address']")
      }

      return _objectSpread({}, state, {
        action: action
      });
      break;

    case "AddEditAddressRecord":
      if (action.key == "create") {
        validate.onSubmitAddressAddEditForm(action.event);
        action.event.preventDefault();
        state.displayerrorMessage = _reducer.const_var.displayerrorMessage;
      } else {
        for (var i = 0; i <= action.event.target.length - 1; i++) {
          if (action.event.target[i].name != "") {
            var newKeyName = "new_" + action.event.target[i].name;
            _reducer.const_var.addressBook[state.isAddress_Edit][newKeyName] = action.event.target[i].value;
          }
        }

        state.LeadCustomerData.address.map(function (val, index) {
          if (val.address_line_1 == "" && val.address_line_2 == "" && val.county == "" && val.city == "" && val.state == "" && val.zipcode == "") {
            if (state.LeadCustomerData.address[index].notRemove == undefined || state.LeadCustomerData.address[index].notRemove == false) {
              state.LeadCustomerData.address.splice(index, 1);
            }
          }
        }); // console.log(state.LeadCustomerData,"state.LeadCustomerData")

        state.showAddressView = false;
      }

      return _objectSpread({}, state, {
        action: action
      });
      break;

    case "GenrateBuildingDatatoServer":
      if (action.key != "") {
        if (action.event != "") {
          action.event.preventDefault();
        } // if(const_var.entry_points.length==0)
        // {
        //     state.thankYouForSaveLater = true;
        //     state.alertUsedMSG = "Oops!! Did you forget to add a door to your fully enclosed building? Please see the doors and windows tab given under options panel and proceed with ordering";
        // }else if(const_var.post_data["building"].roof_style_price==0 && const_var.b_o_J_1[params.p_b_t]!="Custom Buildings")
        // {
        //     state.thankYouForSaveLater = true;
        //     state.alertUsedMSG = "Basic Price should be greater than 0";
        // }


        if (_reducer.const_var.post_data["building"].roof_style_price == 0 && _reducer.const_var.b_o_J_1[_reducer.params.p_b_t] != "Custom Buildings") {
          state.thankYouForSaveLater = true;
          state.alertUsedMSG = "Basic Price should be greater than 0";
        } else {
          _reducer.params.is_translusant = false;
          cuBuilding.BuildingUpdate(true, "");
          state.is_module_name = _reducer.const_var.crmSetting.is_module_name;
          state.targetRedirectUrl = _reducer.const_var.targetRedirectUrl;
          state.targetRedirectUrl.web_url = _reducer.const_var.crmSetting.web_url;
          state.targetRedirectUrl.form_action = _reducer.const_var.crmSetting.form_action;
          state.targetRedirectUrl.sub_module = _reducer.const_var.crmSetting.sub_module;
          state.targetRedirectUrl.selected_sub_module = _reducer.const_var.crmSetting.selected_sub_module;
          state.alertUsedMSG = "";
          state.thankYouForSaveLater = false;

          _reducer.const_var.controls.target.set(0, _reducer.params.p_h / 2, 0);

          _reducer.const_var.camera.position.set(0, _reducer.params.p_h + 0, 3.25 * _reducer.params.p_d);

          _reducer.const_var.controls.update();

          state.returnRespone = "";
          state.showCustomerModal = false;
          state.isShowSuccessOq = true;
          state.i_g_A_y = false;

          if (_reducer.const_var.checkCaptuareImage != true) {
            _reducer.const_var.checkIval = 0;
            _reducer.const_var.i_g_A_y = [];
          }

          _reducer.const_var.selectedTabKeyForWheel = "capture";
          cuComponent.removeDoorWindowsIcons();
          cuComponent.TsCeSot('quote', "finalsubmit");
        }
      } else {
        state.targetRedirectUrl.sub_module = _reducer.const_var.crmSetting.sub_module;
        state.returnRespone = action.returnRespone;
      }

      return _objectSpread({}, state, {
        action: action
      });

    case "handleCommonModal":
      if (action.value == "terms_conditions") {
        state.showTermsCondition = true;
      } else {
        if (action.value == "") {
          state.alertUsedMSG = "";
          state.thankYouForSaveLater = false; //state.LeadCustomerData.ShowEdit = false;

          state.showCustomerLeadRecord = false;
          state.showCustomerModal = true;
          state.searchData = {}; // state.LeadCustomerData = {};

          if (_reducer.const_var.LeadCustomerData != undefined) {
            state.LeadCustomerData = _reducer.const_var.LeadCustomerData;
            state.LeadCustomerData['is_ActionButton'] = true;
          }

          state.leadSourceData = _reducer.const_var.leadSourceData;

          if (_reducer.const_var.crmSetting.is_Edit == true) {
            state.searchType = _reducer.const_var.crmSetting.sub_module == "customer" ? "Customers" : "Leads";

            if (_reducer.const_var.crmSetting.sub_module == null) {
              _reducer.const_var.crmSetting.sub_module = state.searchType == "Customers" ? "customer" : "lead";
            }

            if (_reducer.const_var.leadSourceStateData != '' && Object.keys(_reducer.const_var.leadSourceStateData).length > 0) {
              state.leadSourceStateData[''] = 'Select';

              _reducer.const_var.leadSourceStateData.map(function (val, key) {
                state.leadSourceStateData[val.code] = val.name;
              });
            }
          } else {
            state.searchType = _reducer.const_var.crmSetting.is_module_name == "order" ? "Customers" : "Leads";

            if (_reducer.const_var.crmSetting.selected_sub_module == 1 && _reducer.const_var.crmSetting.form_action == "create") {
              _reducer.const_var.crmSetting.sub_module = _reducer.const_var.crmSetting.sub_module;
            } else {
              _reducer.const_var.crmSetting.sub_module = state.searchType == "Customers" ? "customer" : "lead";
            }
          }

          state.targetRedirectUrl.sub_module = _reducer.const_var.crmSetting.sub_module;
        }

        if (action.value == "close") {
          state.alertUsedMSG = "";
          state.thankYouForSaveLater = false;
          state.showCustomerLeadRecord = false;
          state.showCustomerModal = false;
          state.showTermsCondition = false;
          state.displayerrorMessage = '';
          state.searchData = {};
          state.isShowSuccessOq = false; //state.LeadCustomerData = {};

          state.searchType = _reducer.const_var.crmSetting.is_module_name == "order" ? "Customers" : "Leads";
        }

        if (action.value != "close" && action.value != "") {
          if (_reducer.const_var.crmSetting.is_Edit != true) {
            state.LeadCustomerData = {};
          }

          state.showCustomerLeadRecord = false;
          state.leadSourceData = action.value.data; //state.leadSourceStateData = action.value.states;

          state.leadSourceStateData[''] = 'Select';
          action.value.states.map(function (val, key) {
            // console.log(val,"value")
            state.leadSourceStateData[val.code] = val.name; // console.log(state.leadSourceStateData,"state.leadSourceStateData")
          });
          Object.entries(state.leadSourceData).map(function (val, index) {
            if (index == 0) {
              state.LeadCustomerData.lead_source = val[1];
            }

            if (val[0] == "call_in") {
              state.LeadCustomerData.lead_source = val[0];
            }
          });
          _reducer.const_var.leadSourceData = action.value.data;
          state.searchData = {}; // state.LeadCustomerData = {};

          state.searchType = _reducer.const_var.crmSetting.is_module_name == "order" ? "Customers" : "Leads";
        }
      }

      state.i_g_A_y = true;
      return _objectSpread({}, state, {
        action: action
      });
      break;

    case "commonsActionforLeadCustomer":
      if (action.key == "Search") {
        state.searchType = action.value;

        if (state.searchType == "Customers" && _reducer.const_var.crmSetting.is_module_name == "quote") {
          state.addCustomerData = true;
        } else {
          state.addCustomerData = false;
        }

        state.LeadCustomerData = state.LeadCustomerData != undefined ? state.LeadCustomerData : {};
        document.getElementById("configuration").reset();
        state.searchData = {};
        state.showCustomerLeadRecord = false;
        _reducer.const_var.crmSetting.sub_module = state.searchType == "Customers" ? "customer" : "lead";
        state.targetRedirectUrl.sub_module = _reducer.const_var.crmSetting.sub_module; //state.searchType = "Leads";
      }

      if (action.key == "Search_Value") {
        state.search_lead_customer = action.value;
      }

      if (action.key == "same_as") {
        state.showInstallationAddressDetails = !state.showInstallationAddressDetails;
        state.LeadCustomerData.is_Action = false;
      }

      return _objectSpread({}, state, {
        action: action
      });
      break;

    case "AddCustomerLeadRecord":
      if (action.key == "create") {
        validate.onSubmitEditForm(action.event);
        action.event.preventDefault();
        state.displayerrorMessage = _reducer.const_var.displayerrorMessage;
      }

      if (action.key == "save") {
        var checkValidateIssue = true;

        if (_reducer.const_var.LeadCustomerData != undefined || _reducer.const_var.LeadCustomerData != '') {
          state.LeadCustomerData = _reducer.const_var.LeadCustomerData;
        }

        for (var _i = 0; _i <= action.event.target.length - 1; _i++) {
          if (action.event.target[_i].name != "") {
            if (state.displayerrorMessage[action.event.target[_i].name] != '' && state.displayerrorMessage[action.event.target[_i].name] != undefined) {
              checkValidateIssue = false;
            }
          } // console.log(checkValidateIssue,"checkValidateIssue",action.event.target[i].name,"&&", state.displayerrorMessage[action.event.target[i].name],"&&",state.displayerrorMessage[action.event.target[i].name],"state.showCustomerLeadRecord");


          var arr = [{
            key: action.event.target[_i].name,
            value: action.event.target[_i].value
          }];
          state.LeadCustomerData[arr[0].key] = arr[0].value;
          state.LeadCustomerPostData[arr[0].key] = arr[0].value;
        }

        if (_reducer.const_var.crmSetting.is_module_name == "quote" && state.searchType == "Customers") {
          state.searchType = "Leads";
        }

        state.LeadCustomerData['ShowEdit'] = checkValidateIssue;
        state.LeadCustomerData['api_token'] = _reducer.const_var.crmSetting.api_token;
        _reducer.const_var.LeadCustomerData = state.LeadCustomerPostData;
        state.showCustomerLeadRecord = checkValidateIssue;
      }

      if (action.key == "billing_create") {
        validate.onSubmitEditForm(action.event);
        action.event.preventDefault();
        state.displayerrorMessage = _reducer.const_var.displayerrorMessage;
      }

      if (action.key == "billing") {
        var same_asData = "";
        var _checkValidateIssue = false;

        for (var _i2 = 0; _i2 <= action.event.target.length - 1; _i2++) {
          if (action.event.target[_i2].name == "first_name") {
            state.LeadCustomerPostData['first_name'] = action.event.target[_i2].value;
          } else if (action.event.target[_i2].name == "last_name") {
            state.LeadCustomerPostData['last_name'] = action.event.target[_i2].value;
          } else if (action.event.target[_i2].name == "email") {
            state.LeadCustomerPostData['email'] = action.event.target[_i2].value;
          } else if (action.event.target[_i2].name == "phone_no") {
            state.LeadCustomerPostData['phone_no'] = action.event.target[_i2].value;
          } else if (action.event.target[_i2].name == "mobile_no") {
            state.LeadCustomerPostData['mobile_no'] = action.event.target[_i2].value;
          } else {
            if (state.showInstallationAddressDetails == false) {
              if (action.event.target[_i2].name.includes('shipping') == false) {
                state.LeadCustomerPostData['billing_' + action.event.target[_i2].name] = action.event.target[_i2].value;

                if (state.showInstallationAddressDetails == false) {
                  state.LeadCustomerPostData['shipping_' + action.event.target[_i2].name] = action.event.target[_i2].value;
                }
              }
            } else {
              if (action.event.target[_i2].name.includes('shipping') == false) {
                state.LeadCustomerPostData['billing_' + action.event.target[_i2].name] = action.event.target[_i2].value;
              } else {
                state.LeadCustomerPostData[action.event.target[_i2].name] = action.event.target[_i2].value;
              }
            }
          }

          if (action.event.target[_i2].name != "" && state.displayerrorMessage[action.event.target[_i2].name] != '' && state.displayerrorMessage[action.event.target[_i2].name] != undefined) {
            //console.log(action.event.target[i].name,state.displayerrorMessage[action.event.target[i].name],"state.displayerrorMessage[action.event.target[i].name]")
            _checkValidateIssue = true;
          }
        }

        state.showCustomerLeadRecord = _checkValidateIssue;

        if (_checkValidateIssue != true) {
          state.LeadCustomerData = _objectSpread({}, state.LeadCustomerData, {}, state.LeadCustomerPostData);
          state.LeadCustomerData['is_Action'] = true;
          _reducer.const_var.crmSetting.sub_module_id = state.LeadCustomerData.u_id != undefined ? state.LeadCustomerData.u_id : _reducer.const_var.crmSetting.sub_module_id;

          if (_reducer.const_var.crmSetting.selected_sub_module == 1 && _reducer.const_var.crmSetting.form_action == "create") {
            _reducer.const_var.crmSetting.sub_module = _reducer.const_var.crmSetting.sub_module;
          } else {
            _reducer.const_var.crmSetting.sub_module = _reducer.const_var.crmSetting.is_Edit == true ? _reducer.const_var.crmSetting.sub_module : state.searchType == "Customers" ? "customer" : "lead";
          }

          state.targetRedirectUrl.sub_module = _reducer.const_var.crmSetting.sub_module;
          _reducer.const_var.LeadCustomerData = _objectSpread({}, state.LeadCustomerData, {}, state.LeadCustomerPostData);
        }

        state.showCustomerModal = _checkValidateIssue;

        if (_checkValidateIssue == false) {
          state.leadSourceData = {};
          state.searchData = {};
          state.searchType = "Leads";
        }
      }

      if (action.key == "back") {
        state.LeadCustomerData = {};
        _reducer.const_var.LeadCustomerData = {};
        state.showCustomerLeadRecord = false;
      }

      return _objectSpread({}, state, {
        action: action
      });
      break;

    case "onSearchRecords":
      action.event.preventDefault();
      state.searchData = action.value.data.length > 0 ? action.value.data : ["No"];
      state.search_lead_customer = action.search_text;

      if (action.value.states != undefined) {
        _reducer.const_var.leadSourceStateData = action.value.states;
        state.leadSourceStateData[''] = 'Select';
        action.value.states.map(function (val, key) {
          state.leadSourceStateData[val.code] = val.name;
        });
      }

      return _objectSpread({}, state, {
        action: action
      });
      break;

    case "handleCustomerData":
      if (action.eventType != "back") {
        if (action.row.email == "") {
          action.row.email = '';
        }

        if (action.row.email_2 == "") {
          action.row.email_2 = '';
        }

        var newPhoneNumber = '';

        if (action.row.phone_no != '' && newPhoneNumber == '') {
          newPhoneNumber = action.row.phone_no;
        }

        if (action.row.mobile_no != '' && newPhoneNumber == '') {
          newPhoneNumber = action.row.mobile_no;
        }

        if (action.row.phone_no_2 != '' && newPhoneNumber == '') {
          newPhoneNumber = action.row.phone_no_2;
        } //action.row.phone_no = newPhoneNumber;


        state.displayerrorMessage = "";
        _reducer.const_var.displayerrorMessage = {};
        action.row.ShowEdit = true;
        state.LeadCustomerData = action.row;

        if (action.event == "" && state.LeadCustomerData.taxPersentage != undefined && state.LeadCustomerData.taxPersentage != '' && _reducer.params.tax_exempt == false) {
          _reducer.const_var.tax.percentage = state.LeadCustomerData.taxPersentage;

          if (isNaN(parseInt(_reducer.const_var.tax.amount)) == true) {
            _reducer.const_var.tax.amount = 0;
          }

          cuBuilding.cP();
        } else {
          _reducer.const_var.tax.percentage = 0;
          _reducer.const_var.tax.amount = 0;

          if (isNaN(parseInt(_reducer.const_var.tax.amount)) == true) {
            _reducer.const_var.tax.amount = 0;
          }

          cuBuilding.cP();
        }

        if (_reducer.const_var.leadSourceStateData != '' && Object.keys(_reducer.const_var.leadSourceStateData).length > 0) {
          state.leadSourceStateData[''] = 'Select';

          _reducer.const_var.leadSourceStateData.map(function (val, key) {
            state.leadSourceStateData[val.code] = val.name;
          });
        }

        _reducer.params.tax_zipcode = '';
        state.LeadCustomerData['address'] = state.LeadCustomerData.address;
        state.LeadCustomerData.address.map(function (val, index) {
          state.LeadCustomerData['address'][index].notRemove = true;

          _reducer.const_var.addressBook.push({
            'new_address_line_1': val.address_line_1,
            'new_address_line_2': val.address_line_2,
            'new_zipcode': val.zipcode,
            'new_state': val.state,
            'new_city': val.city,
            'new_county': val.county
          });

          if (action.event == "") {
            if (val.is_default == 1) {
              state.LeadCustomerData['showZip'] = val.zipcode;
              _reducer.const_var.LeadCustomerData.showZip = val.zipcode;
            }
          } else {
            if (val.is_default == 1) {
              state.LeadCustomerData['showZip'] = val.zipcode;
              _reducer.const_var.LeadCustomerData.showZip = val.zipcode;
            }
          }
        }); //const_var.addressBook = state.LeadCustomerData.address;

        state.LeadCustomerData["billing_address_line_1"] = state.LeadCustomerData["shipping_address_line_1"] = state.LeadCustomerData.address_line_1;
        state.LeadCustomerData["billing_address_line_2"] = state.LeadCustomerData["shipping_address_line_2"] = state.LeadCustomerData.address_line_2;
        state.LeadCustomerData["billing_city"] = state.LeadCustomerData["shipping_city"] = state.LeadCustomerData.city;
        state.LeadCustomerData["billing_state"] = state.LeadCustomerData["shipping_state"] = state.LeadCustomerData.state;
        state.LeadCustomerData["billing_country"] = state.LeadCustomerData["shipping_country"] = state.LeadCustomerData.county;
        state.LeadCustomerData["billing_zipcode"] = state.LeadCustomerData["shipping_zipcode"] = state.LeadCustomerData.zipcode;

        if (_reducer.const_var.crmSetting.selected_sub_module == 1 && _reducer.const_var.crmSetting.form_action == "create") {
          _reducer.const_var.crmSetting.sub_module = _reducer.const_var.crmSetting.sub_module;
        } else {
          _reducer.const_var.crmSetting.sub_module = state.searchType == "Customers" ? "customer" : "lead";
        }

        state.LeadCustomerData.lead_source = state.searchType == "Customers" ? action.row.source : action.row.lead_source;
        _reducer.const_var.LeadCustomerData = state.LeadCustomerData;
        _reducer.const_var.crmSetting.sub_module_id = action.row.u_id;
        state.targetRedirectUrl.sub_module = _reducer.const_var.crmSetting.sub_module;
      } else {
        state.LeadCustomerData.ShowEdit = false;
      }

      return _objectSpread({}, state, {
        action: action
      });

    case "handleCustomerDataWithAPI":
      if (action.event == "") {
        state.LeadCustomerData.taxPersentage = action.responseData != '' ? action.responseData.data[0] : _reducer.const_var.tax.percentage;
        _reducer.const_var.tax.percentage = state.LeadCustomerData.taxPersentage;

        if (isNaN(parseInt(_reducer.const_var.tax.amount)) == true) {
          _reducer.const_var.tax.amount = 0;
        }

        if (_reducer.params.tax_exempt == true) {
          _reducer.const_var.tax.percentage = 0;
          _reducer.const_var.tax.amount = 0;
          _reducer.params.tax_zipcode = '';

          if (isNaN(parseInt(_reducer.const_var.tax.amount)) == true) {
            _reducer.const_var.tax.amount = 0;
          }
        }

        cuBuilding.cP();
      }

      return _objectSpread({}, state, {
        action: action
      });

    case "CloseEditemial":
      state.showEditEmail = false;
      return _objectSpread({}, state, {
        action: action
      });
  }

  return newState;
};

var _default = leadcustomerReducer;
exports["default"] = _default;