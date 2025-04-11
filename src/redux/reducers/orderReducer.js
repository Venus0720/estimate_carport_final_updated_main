import * as validate from '../../Components/Modals/validations';
import { params, const_var} from './reducer';
import * as cuBuilding from './pricingReducer';
import * as cuComponent from './componentReducer';
import { onSubmitCheckout } from '../../action/order.action';
export const orderState= {
    checkorderValidateonly:"",
    checkoutModal:false,
    termsAndConditionDialogExtraClassToggle:false,
    privacyPolicyCheckbox:false,
    backToCheckoutBtn:true,
    showProcessLoader:false,
    isShowThankYou:false,
    Updatedconst_var:'',
    agreeTermsAndConditionCheckbox: false,
    billingAddressCheckbox:false,
    displayerrorMessage:'',
    order_data:'',
    paymentOption:'',
    sign_jpeg: '', 
    sigPad :{},
    blobImg:'',
    bjD:[],
    orderPDFURL: '',
    invoicePDFURL:'',
    i_g_A_y:[],
    alertUsedMSG:"",
    shippingState:"Select",
    billingState:"Select",
    TempData:{'first_name': '','last_name': '','email': '','phone_no': '',"shipping_zipcode": '',"shipping_address_line_1": '','shippingState': ''},
}
orderState.displayerrorMessage = const_var.displayerrorMessage;
orderState.paymentOption = const_var.paymentOption;
orderState.bjD = const_var.bjD;
orderState.isKLinkEnable= const_var.isKLinkEnable;
if(const_var.isKLinkEnable == true && const_var.crmSetting.pre_quote_form == true && const_var.KLinkDataUpdate == false && const_var.post_data && const_var.post_data.first_name != undefined && const_var.post_data.full_name != ''){
      const_var.post_data.full_name = '';
      const_var.post_data.first_name = '';
      const_var.post_data.last_name = '';
      const_var.post_data.shipping_address_line_1 = '';
      const_var.post_data.shipping_zipcode = '';
      const_var.post_data.shipping_state = '';
      const_var.shippingState = 'Select';
      const_var.KLinkDataUpdate = true;
}
const orderReducer = (state = orderState, action) =>{
    const newState = {...state};
   
    switch(action.type)
    {
    case "handleOrderModal":
        // const_var.orderSaveForm = true
    if(action.payload=="open")
    {
        if(const_var.crmSetting.applyPriceCheck!=undefined && const_var.crmSetting.applyPriceCheck==true && const_var.BuildingPriceArrar['order_total']!=undefined && parseFloat(const_var.BuildingPriceArrar['order_total'].toFixed(2))<parseFloat(3000))
        {
            state.isShowThankYou = true;
            state.alertUsedMSG = "Sorry, we are not accepting orders below $3000 (plus tax) currently. Please contact us for your requirements at - "+const_var.crmSetting.phone_number;
        }
        // else if(cuBuilding.CkBngDr() == null)
        // {
        //     state.isShowThankYou = true;
        //     state.alertUsedMSG = "Oops!! Did you forget to add a door to your fully enclosed building? Please see the doors and windows tab given under options panel and proceed with ordering";
        // }
        else
        {
            const_var.scene.traverse((child) => {
                if (child.type === "Mesh") {
                    child.material.transparent = false;
                    child.material.opacity = 1;
                    child.material.depthWrite = true;
                }
                if((child.name == "frontWallWaterMark" || child.name == "backWallWaterMark" || child.name == "usSteelbuildingCenterGround" || child.name == "eagleLogo")) {
                    child.material.transparent = true;
                    child.material.opacity = 1;
                    child.material.depthWrite = true;
                }
            })
            const_var.focusedSection = "";
            
            if ( params.isShowCenter ||  params.is_translusant ) {
                params.isShowCenter = false;
                params.is_translusant = false;
                cuBuilding.BuildingUpdate(true);
                if (params.add_front_lean) cuBuilding.UpdateFrontLean();
                if (params.add_left_lean) cuBuilding.UpdateLeftLean();
                if (params.add_right_lean) cuBuilding.UpdateRightLean();
                if (params.add_back_lean) cuBuilding.UpdateBackLean();
            }
            const_var.controls.target.set(0, params.p_h / 2, 0);
            const_var.camera.position.set(0, params.p_h + 0, 3.25 * params.p_d);
            const_var.controls.update();

            state.displayerrorMessage = const_var.displayerrorMessage;
            state.isShowThankYou = false;   
            const_var.saveLatterModal = true;
            state.alertUsedMSG = "";
            const_var.checkIval = 0;
            const_var.i_g_A_y = [];
            const_var.selectedTabKeyForWheel ="capture";
            cuComponent.removeDoorWindowsIcons();
            cuComponent.TsCeSot('quote');
            if(const_var.crmSetting.pre_quote_form == true && const_var.preQuoteApiCalled == true && const_var.preQuoteError == false && const_var.loginSession == false)
            {      
                state.TempData.first_name = const_var.post_data.first_name;
                state.TempData.last_name= const_var.post_data.last_name;
                state.TempData.email= const_var.post_data.email;
                state.TempData.phone_no= const_var.post_data.phone_no;
                state.TempData.shipping_zipcode= (const_var.post_data.address!=undefined && const_var.post_data.address.length>0)?const_var.post_data.address[0].zipcode:'';
                state.TempData.shipping_address_line_1= (const_var.post_data.address!=undefined && const_var.post_data.address.length>0)?const_var.post_data.address[0].address_line_1:'';
                state.TempData.shippingState= const_var.stateNameAcordingAPI[params.p_s_n];
                state.shippingState = state.TempData.shippingState;
                const_var.shippingState = state.TempData.shippingState;
                state.isKLinkEnable = const_var.isKLinkEnable;
                const_var.post_data['shipping_zipcode']=(const_var.post_data.address!=undefined && const_var.post_data.address.length>0)?const_var.post_data.address[0].zipcode:'';
                const_var.post_data['shipping_address_line_1']=(const_var.post_data.address!=undefined && const_var.post_data.address.length>0)?const_var.post_data.address[0].address_line_1:'';
                const_var.tempPostData = JSON.parse(JSON.stringify(state.TempData));
                state.KLinkDataUpdate= const_var.KLinkDataUpdate

            }
            const_var.showProcessLoaderchk=true;
            state.checkoutModal = true;
            
            state.order_data = {'phone_number':const_var.crmSetting.phone_number,'order_now':const_var.crmSetting.order_now,'width':const_var.post_data['building'].width,'length':const_var.post_data['building'].length,'height':const_var.post_data['building'].height,'roofstyle':const_var.post_data['building'].roof_style_name,"order_total":const_var.post_data['building'].order_total,"down_payment_discount_total":const_var.post_data['building'].down_payment_discount_total,"discount_amount":const_var.post_data['building'].discount_amount,'sub_order_total':const_var.BuildingPriceArrar['sub_order_total'],'new_down_payment_total':(const_var.BuildingPriceArrar['new_down_payment_total']!=undefined)?(const_var.BuildingPriceArrar['new_down_payment_total'] + const_var.BuildingPriceArrar['grvy_value']).toFixed(2):0,"downPersentage":const_var.post_data['building'].down_payment_rate,'is_loggedin':const_var.loginSession};
            state.blobImg = const_var.renderer.domElement.toDataURL("image/jpeg");
        }
    }else
    {     
        const_var.saveLatterModal = false;  
        state.isShowThankYou = false;
        state.alertUsedMSG = "";
        state.checkoutModal = false;
        const_var.displayerrorMessage = {};
    }
    return{
        ...state,
        checkorderValidateonly:action
    }
    break;
  
    case "onorderTextFiledChangeValue":
    state.isShowThankYou = false;
    state.alertUsedMSG = "";
    let teamp = validate.onTextFiledChangeValue(action.event,action.value,action.keyword, action.ValidationCheck);
    if(action.value == 'first_name' || 
        action.value == 'last_name' || 
            action.value == 'email' || 
                action.value == 'phone_no' || 
                    action.value == 'shipping_zipcode' || 
                        action.value == 'shipping_address_line_1' || 
                            action.value == "shipping_city" || 
                                action.value == "shipping_state" || 
                                    action.value == 'cardnumber' || 
                                        action.value == 'expirydate' ||
                                            action.value == 'cvv' || 
                                                action.value == 'shipping_address_line_2' || 
                                                    action.value == "mobile_no" || 
                                                        action.value == "order_notes"){
        let temp = ""
        if(action.value == 'first_name' || action.value == 'last_name'){
            temp = /^[A-Za-z ]+$/;
        }
        if(action.value == 'email'){
            temp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        }
        if(action.value == 'phone_no' || action.value == "mobile_no"){
            temp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        }
        if(action.value == "shipping_zipcode"){
            temp = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;
        }
        if(action.value == "shipping_address_line_1" || action.value == "shipping_address_line_2" ){
            temp = /^[a-zA-Z,]+(\s{0,1}[a-zA-Z, ])*$/
        }
        if(action.value == "shipping_city" || action.value == "shipping_state" || action.value == "order_notes"){
            temp = /^[a-zA-Z,]+(\s{0,1}[a-zA-Z, ])*$/;
        }
        if(action.value == 'cardnumber'){
            temp = /^(0|[1-9][0-9]*)$/;
        }
        if(action.value == "cvv"){
            temp = /^[0-9]{3,4}$/;
        }
        if(action.value == "expirydate"){
            temp = /[^0-9/]/g;
        }
        const_var.post_data[action.value] = temp.test(action.event.target.value) ? action.event.target.value : (action.value == "expirydate" ? action.event.target.value : null );
        state.TempData[action.value] = temp.test(action.event.target.value) ? action.event.target.value : null;
    }
    return {
        ...state,
        checkorderValidateonly:action
    }
    break;
    case "closefalse":
        state.isShowThankYou = false;
        return {
            ...state,
            action
        }
    break;
    case "handleCheckboxForBillingAddress":
        if(const_var.isBillingAddressSame) {
            console.log(const_var.post_data, "handleCheckboxForBillingAddress")
            if(const_var.post_data.shipping_address_line_1 != undefined) {
                const_var.post_data['billing_address_line_1'] = const_var.post_data.shipping_address_line_1
            } 

            if(const_var.post_data.shipping_address_line_2 != undefined) {
                const_var.post_data['billing_address_line_2'] = const_var.post_data.shipping_address_line_2
            }

            if(const_var.post_data.shipping_city != undefined) {
                const_var.post_data['billing_city'] = const_var.post_data.shipping_city
            }

            if(const_var.post_data.shipping_state != undefined) {
                const_var.post_data['billing_state'] = const_var.post_data.shipping_state
            }

            if(const_var.post_data.shipping_zipcode != undefined) {
                const_var.post_data['billing_zipcode'] = const_var.post_data.shipping_zipcode
            }
        } else {
            const_var.post_data['billing_address_line_1'] = '';
            const_var.post_data['billing_address_line_2'] = '';
            const_var.post_data['billing_city'] = '';
            const_var.post_data['billing_state'] = '';
            const_var.post_data['billing_zipcode'] = '';
            console.log(const_var.post_data, "handleCheckboxForBillingAddress")
        }
        return {
            ...state,
            action
        }

    case "placeOrderValidation":
        if (const_var?.post_data?.first_name != undefined && const_var?.post_data?.first_name !== "") {
            let alpha = /^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z0-9-, ])*$/;
            if (const_var.post_data.first_name !== null && alpha.test(const_var.post_data.first_name)) {
                const_var.displayerrorMessage["first_name"] = '';
                const_var.checkValidatePattern = false;
            } else {
                const_var.displayerrorMessage["first_name"] = "Please enter only alphanumeric & spaces";
                const_var.checkValidatePattern = true;
                const_var.checkValidate = true;
            }
            if (const_var.post_data.first_name.length > 50) {
                const_var.displayerrorMessage["first_name"] = " Please enter less than 50 characters";
                const_var.checkValidatePattern = true;
                const_var.checkValidate = true;
            }
            if (const_var.post_data.first_name.length < 3) {
                const_var.displayerrorMessage["first_name"] = " Please enter greater than 3 characters";
                const_var.checkValidatePattern = true;
                const_var.checkValidate = true;
            }
        } else {
            const_var.displayerrorMessage["first_name"] = 'First name is required';
            const_var.checkValidatePattern = true;
            const_var.checkValidate = true;
        }

        if (const_var?.post_data?.last_name !== undefined && const_var?.post_data?.last_name?.trim() != "") {
            let alpha = /^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z0-9-, ])*$/;
            if (const_var.post_data.last_name !== null && alpha.test(const_var.post_data.last_name)) {
                const_var.displayerrorMessage["last_name"] = '';
                const_var.checkValidatePattern = false;
            } else {
                const_var.displayerrorMessage["last_name"] = "Please enter only alphanumeric & spaces";
                const_var.checkValidatePattern = true;
                const_var.checkValidate = true;
            }
            if (const_var.post_data.last_name.length > 50) {
                const_var.displayerrorMessage["last_name"] = "Please enter less than 50 characters";
                const_var.checkValidatePattern = true;
                const_var.checkValidate = true;
            }
            if (const_var.post_data.last_name.length < 3) {
                const_var.displayerrorMessage["last_name"] = " Please enter greater than 3 characters";
                const_var.checkValidatePattern = true;
                const_var.checkValidate = true;
            }
        } else {
            const_var.displayerrorMessage["last_name"] = 'Last name is required';
            const_var.checkValidatePattern = true;
            const_var.checkValidate = true;
        }

        if (const_var?.post_data?.shipping_address_line_1 == "" || const_var?.post_data?.shipping_address_line_1 == undefined) {
            const_var.displayerrorMessage["shipping_address_line_1"] = 'Address is required';
            const_var.checkValidatePattern = true;
            const_var.checkValidate = true;
        }

        if (const_var?.post_data?.shipping_city != undefined) {
            let alpha = /^[a-zA-Z,]+(\s{0,1}[a-zA-Z, ])*$/;
            //console.log(const_var.post_data.shipping_city);
            if (const_var.post_data.shipping_city !== null && alpha.test(const_var.post_data.shipping_city)) {
                const_var.displayerrorMessage["shipping_city"] = '';
                const_var.checkValidatePattern = false;
            } else {
                const_var.displayerrorMessage["shipping_city"] = "Please enter only alphabets & spaces";
                const_var.checkValidatePattern = true;
                const_var.checkValidate = true;
            }
            if (const_var?.post_data?.shipping_city?.length > 50) {
                const_var.displayerrorMessage["shipping_city"] = " Please enter less than 50 characters";
                const_var.checkValidatePattern = true;
                const_var.checkValidate = true;
            }
            if (const_var.post_data.shipping_city == '') {
                const_var.displayerrorMessage["shipping_city"] = "City is required";
                const_var.checkValidatePattern = true;
                const_var.checkValidate = true;
            }
        } else {
            const_var.displayerrorMessage["shipping_city"] = 'City is required';
            const_var.checkValidatePattern = true;
            const_var.checkValidate = true;
        }

        if (const_var?.post_data?.shipping_state != undefined) {
            let alpha = /^[a-zA-Z,]+(\s{0,1}[a-zA-Z, ])*$/;
            //console.log(const_var.post_data.shipping_state);
            if (const_var.post_data.shipping_state !== null && alpha.test(const_var.post_data.shipping_state)) {
                const_var.displayerrorMessage["shipping_state"] = '';
                const_var.checkValidatePattern = false;
            } else {
                const_var.displayerrorMessage["shipping_state"] = "Please enter only alphabets & spaces";
                const_var.checkValidatePattern = true;
                const_var.checkValidate = true;
            }
            if (const_var.post_data.shipping_state?.length > 50) {
                const_var.displayerrorMessage["shipping_state"] = " Please enter less than 50 characters";
                const_var.checkValidatePattern = true;
                const_var.checkValidate = true;
            }
            if (const_var.post_data.shipping_state == '') {
                const_var.displayerrorMessage["shipping_state"] = "State is required";
                const_var.checkValidatePattern = true;
                const_var.checkValidate = true;
            }
        } else {
            
            const_var.displayerrorMessage["shipping_state"] = 'State is required';
            const_var.checkValidatePattern = true;
            const_var.checkValidate = true;
        }

        if (const_var?.post_data.shipping_zipcode != undefined && const_var?.post_data?.shipping_zipcode.length > 1) {
            var zcode = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;
            if ((const_var.post_data.shipping_zipcode !== null && zcode.test(const_var.post_data.shipping_zipcode) && const_var.post_data.shipping_zipcode.length == 5)) {
                const_var.displayerrorMessage['shipping_zipcode'] = '';
                const_var.checkValidatePattern = false;
            } else if(const_var.post_data?.shipping_zipcode?.length < 4){
                const_var.displayerrorMessage['shipping_zipcode'] = 'Please enter a valid Zip Code';
                const_var.checkValidatePattern = true;
                const_var.checkValidate = true;
            }
        } else {
            const_var.displayerrorMessage['shipping_zipcode'] = 'Zip Code is required';
            const_var.checkValidatePattern = true;
            const_var.checkValidate = true;
        }

        if (const_var?.post_data?.phone_no?.length > 1) {
            var number = /^(0|[1-9][0-9]*)$/;
            if (const_var.post_data.phone_no !== null && number.test(const_var.post_data.phone_no) && const_var.post_data.phone_no.length === 10) {
                const_var.displayerrorMessage['phone_no'] = '';
                const_var.checkValidatePattern = false;
            } else {
                const_var.displayerrorMessage['phone_no'] = "Please enter 10 digit valid phone number";
                const_var.checkValidatePattern = true;
                const_var.checkValidate = true;
            }
        } else {
            const_var.displayerrorMessage['phone_no'] = 'Phone number is required';
            const_var.checkValidatePattern = true;
            const_var.checkValidate = true;
        }

        if (const_var?.post_data?.mobile_no?.length > 1) {
            let number = /^(0|[1-9][0-9]*)$/;
            if (const_var.post_data.mobile_no !== null && number.test(const_var.post_data.mobile_no) && const_var.post_data.mobile_no.length == 10) {
                const_var.displayerrorMessage['mobile_no'] = '';
                const_var.checkValidatePattern = false;
            } else {
                const_var.displayerrorMessage['mobile_no'] = "Please enter 10 digit valid phone number";
                const_var.checkValidatePattern = true;
                const_var.checkValidate = true;
            }
        } else {
            const_var.displayerrorMessage['mobile_no'] = '';
            const_var.checkValidatePattern = false;
        }


        if (const_var?.post_data?.email != "") {

            var email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (const_var.post_data.email !== null && email.test(const_var.post_data.email)) {
                const_var.displayerrorMessage['email'] = '';
                const_var.checkValidatePattern = false;
            } else {
                const_var.displayerrorMessage['email'] = "Invalid Email";
                const_var.checkValidatePattern = true;
                const_var.checkValidate = true;
            }
        } else {
            const_var.displayerrorMessage['email'] = 'Email is required';
            const_var.checkValidatePattern = true;
            const_var.checkValidate = true;
        }

        if (const_var?.post_data?.hasOwnProperty('cardnumber') && (const_var?.post_data?.cardnumber != "" || const_var?.post_data?.cardnumber != undefined)) {
            var number = /^(0|[1-9][0-9]*)$/;
            if (const_var.post_data.cardnumber !== null && number.test(const_var.post_data.cardnumber) && const_var.post_data.cardnumber.length >= 15 && const_var.post_data.cardnumber.length <= 16) {
                const_var.displayerrorMessage["cardnumber"] = '';
                const_var.checkValidatePattern = false;
            } else {
                const_var.displayerrorMessage["cardnumber"] = 'Please enter valid card number of length 15 or 16';
                const_var.checkValidatePattern = true;
                const_var.checkValidate = true;
            }
        } else {
            const_var.displayerrorMessage["cardnumber"] = 'Card Number is required';
            const_var.checkValidatePattern = true;
            const_var.checkValidate = true;
        }

        if (const_var?.post_data?.hasOwnProperty('expirydate') && (const_var?.post_data?.expirydate != "" || const_var?.post_data?.expirydate != undefined)) {
            var expiryDate = const_var?.post_data?.expirydate;

            var today = new Date(); // gets the current date
            var today_mm = today.getMonth() + 1; // extracts the month portion
            //var today_yy = today.getFullYear() % 100; // extracts the year portion and changes it from yyyy to yy format
            var today_yy = today.getFullYear().toString();

            // errorMessage =  "Please enter valid Expiry Date";
            if (today_mm < 10) { // if today's month is less than 10
                today_mm = '0' + today_mm // prefix it with a '0' to make it 2 digits
            }

            var mm = expiryDate.substring(0, 2); // get the mm portion of the expiryDate (first two characters)
            var yy = expiryDate.substring(3); // get the yy portion of the expiryDate (from index 3 to end)

            if ((yy > today_yy && mm <= 12) || (yy == today_yy && mm >= today_mm && mm <= 12)) {

                const_var.displayerrorMessage["expirydate"] = '';
                const_var.checkValidatePattern = false;
            }
            else {
                const_var.displayerrorMessage["expirydate"] = 'Please enter valid Expiry Date';
                const_var.checkValidatePattern = true;
                const_var.checkValidate = true;
            }
        } else {
            const_var.displayerrorMessage["expirydate"] = 'Expiry Date is required';
            const_var.checkValidatePattern = true;
            const_var.checkValidate = true;
        }
        if (const_var?.post_data?.hasOwnProperty('cvv') && (const_var?.post_data?.cvv != '' || const_var?.post_data?.cvv != undefined)) {
            //var cvv = /^(0|[1-9][0-9]*)$/;
            var cvv = /^[0-9]{3,4}$/;
            if (const_var?.post_data?.cvv !== null && cvv.test(const_var?.post_data?.cvv) && const_var?.post_data?.cvv.length >= 3 && newState?.post_data?.cvv.length <= 4) {
                const_var.displayerrorMessage["cvv"] = '';
                const_var.checkValidatePattern = false;
            } else if (const_var?.post_data?.cvv.length < 3) {
                const_var.displayerrorMessage["cvv"] = 'Please enter valid CVV number of length 3 or 4';
                const_var.checkValidatePattern = true;
                const_var.checkValidate = true;
            }
            //console.log(const_var.displayerrorMessage,"const_var.displayerrorMessage",const_var.checkValidatePattern);
        } else {
            const_var.displayerrorMessage["cvv"] = 'CVV is required';
            const_var.checkValidatePattern = true;
            const_var.checkValidate = true;
        }
        if(state.agreeTermsAndConditionCheckbox == false){  
            const_var.displayerrorMessage.agreeTermsAndConditionCheckbox = 'Terms and conditions is required ';
            const_var.checkValidate = true;
        }
        return {
            ...state,
            action
        }
    case "onAddressFieldHandleChangeValue":
        let MainData = '';
        MainData = const_var.isAddress_Edit;
        if (const_var.post_data.address != undefined) {
            // const_var.post_data.address[MainData][action.value] = action.event.target.value;
            if (const_var.post_data.address[MainData] != undefined) {
                const_var.post_data.address[MainData][action.value] = action.event.target.value;
            }
            else {
                const_var.post_data.address.push({ [action.value]: action.event.target.value })
            }
        }
        else {
            const_var.post_data['address'] = []
            if (const_var.post_data.address[MainData] != undefined) {
                const_var.post_data.address[MainData][action.value] = action.event.target.value;
            }
            else {
                const_var.post_data.address.push({ [action.value]: action.event.target.value })
                console.log("const_var.post_data.address", const_var.post_data.address)
            }
        }

        const_var.post_data['address'] = const_var.post_data.address
        const_var.post_data.is_Action = false;
        if (action.ValidationCheck == "NoValidate1") {//console.log(action.event,action.value,action.keyword);
            validate.alphaSpaceValue(action.event, action.value)
        }
        if (action.ValidationCheck == "NoValidate2") {//console.log(action.event,action.value,action.keyword);
            validate.alphaCheckValue(action.event, action.value)
        }
        state.displayerrorMessage = const_var.displayerrorMessage
        return {
            ...state,
            action
        }
        break;
    case "onOrderSubmitCheckout":
        // validate.onSubmitForm(action.event);
        action.event.preventDefault();
        if(const_var.checkValidate==false)
        {
            state.showProcessLoader = true;
        }
    return {
        ...state,
        checkorderValidateonly: action.event
    }
    break;
    case "onSubmitCheckoutApi":
    

        state.showProcessLoader = true;
        const_var.alertUsedFor = "onSubmitCheckoutApi";
        const_var.showProcessLoaderchk = false;
        const_var.thankYouForSaveLater = false;
        const_var.showProcessLoader = false;
        if(const_var.crmSetting.gTag==true)
        {
            //console.log(window.parent,window,"parent")
            window.analysisCode();
        }
        if ((action.event.status == true)) {
            state.invoicePDFURL = action.event.invoice_pdf;
            state.orderPDFURL = action.event.order_pdf;
            const_var.checkoutModal = false;
            state.isShowThankYou = true;
            const_var.shippingState = 'Select';
            const_var.post_data.first_name = ""; 
            const_var.post_data.last_name = ""; 
            const_var.post_data.email = ""; 
            const_var.post_data.phone_no = ""; 
            // const_var.post_data.shipping_zipcode = "";
            // const_var.post_data.shipping_address_line_1 = "";
            // const_var.post_data.shipping_address_line_2 = "";
            // const_var.post_data.shipping_city = "";
            // const_var.post_data.shipping_state = "";
            // const_var.post_data.cardnumber = "";
            // const_var.post_data.expirydate = "";
            // const_var.post_data.cvv = "";
            const_var.post_data.mobile_no = ""; 
            const_var.post_data.order_notes = "";
            // const_var.post_data.billing_zipcode = ""; 
            // const_var.post_data.billing_address_line_1 = "";
            // const_var.post_data.billing_address_line_2 = "";
            // const_var.post_data.billing_city = "";
            // const_var.post_data.billing_state = "";
            // const_var.post_data.card_detail['cardnumber']= "";
            // const_var.post_data.card_detail['expirydate']= "";
            // const_var.post_data.card_detail['cvv']= "";
            state.checkoutModal=false;
            state.billingAddressCheckbox=false;
            state.agreeTermsAndConditionCheckbox=false;
            state.privacyPolicyCheckbox=false;
            state.showProcessLoader = false;
            if(action.event.status == false) {
                const_var.paymentFailedMessage = true;
            }
            const_var.shippingState = 'Select';
            state.TempData = {'first_name': '','last_name': '','email': '','phone_no': '',"shipping_zipcode": '',"shipping_address_line_1": '','shippingState': ''};
        } else {
            const_var.shippingState = 'Select';
            state.TempData = {'first_name': '','last_name': '','email': '','phone_no': '',"shipping_zipcode": '',"shipping_address_line_1": '','shippingState': ''};
                state.showProcessLoader=false;
              let responseMessage = action.event.message;
              responseMessage = responseMessage.replace('[PhoneNumber]',const_var.crmSetting.phone_number);
              responseMessage = responseMessage.replace('[Email]',const_var.crmSetting.email);
              const_var.checkoutModal = false;
              const_var.shippingState = 'Select';
              const_var.shipping_city = "";
              state.isShowThankYou = true;
              state.alertUsedMSG = responseMessage;
              
        }
    return {
        ...state,
        checkorderValidateonly: action.event
    }
    break;
    case "onSubmitCheckoutApiErrorhandling":
        var newmsgforreload = "";
        state.showProcessLoader = false;
        state.isShowThankYou = true;
        state.alertUsedMSG = action.value;
        newmsgforreload = action.value;
    return {
        ...state,
        checkorderValidateonly: action
    }
    break;     
   
    case "privacyPolicyCheckboxChange":
        state.privacyPolicyCheckbox =! state.privacyPolicyCheckbox;
        if(state.privacyPolicyCheckbox==true && typeof const_var.sigPad.isEmpty === "function" && const_var.sigPad.isEmpty()!=undefined && const_var.sigPad.isEmpty()==false && const_var.sign_jpeg!="")
        {
            state.backToCheckoutBtn = false;
        }else
        {
           state.backToCheckoutBtn = true; 
        }
    return{
        ...state,
        checkorderValidateonly:state.privacyPolicyCheckbox
    }
    break;
    case "agreeTermsAndConditionCheckboxChange":
        window.scroll(0,0)
        state.agreeTermsAndConditionCheckbox = true;
        state.termsAndConditionDialogExtraClassToggle = true;
        state.displayerrorMessage.agreeTermsAndConditionCheckbox = '';
        const_var.checkValidate = false;
    return{
        ...state,
        checkorderValidateonly:state.displayerrorMessage.agreeTermsAndConditionCheckbox
    }
    break;
    case "termsAndConditionProceedBtn":
        if(state.privacyPolicyCheckbox == true){
            state.termsAndConditionDialogExtraClassToggle = false;
            state.privacyPolicyCheckbox = false;
        }
    return{
        ...state,
        checkorderValidateonly:state.termsAndConditionDialogExtraClassToggle
    }
    break;
    case "billingAddressCheckboxChange":
        state.billingAddressCheckbox = !state.billingAddressCheckbox;
        const_var.billingAddressCheckbox = state.billingAddressCheckbox;
    return{
        ...state,
        checkorderValidateonly:state.billingAddressCheckbox
    }
    break;
    case "genrateSignature":
    if(action.event=="Reset")
        {
            const_var.sigPad.clear();
            const_var.sign_jpeg = "";
            state.sign_jpeg = "";
            state.backToCheckoutBtn = true;
        }else{
           if(const_var.sigPad.isEmpty()==true)
           {
                state.backToCheckoutBtn = true;
           }else if(state.privacyPolicyCheckbox==true && const_var.sigPad.isEmpty()==false)
           {
                state.backToCheckoutBtn = false;
           }
           state.sign_jpeg = action.value;
           const_var.sign_jpeg = action.value;
        }
    return{
        ...state,
        checkorderValidateonly:action.value+state.backToCheckoutBtn
    }
    break;
    case "SHIPPINGSTATECHANGE":
            const_var.shippingState = action.value;
    state.shippingState = action.value;
        return {
        ...state,
        checkorderValidateonly:action  
    }
    break;
    case "BILLINGSTATECHANGE":
    const_var.billingState = action.value;
    state.billingState = action.value;
    return {
        ...state,
        checkorderValidateonly:action  
    }
    break;
    case "updateTempPostData":
    if(action.isPostReset == true){
        // const_var.post_data['first_name'] = const_var.tempPostData.first_name;
        // const_var.post_data['last_name'] = const_var.tempPostData.last_name;
        // const_var.post_data['email'] = const_var.tempPostData.email;
        // const_var.post_data['phone_no'] = const_var.tempPostData.phone_no;
        // const_var.post_data['shipping_zipcode'] = const_var.tempPostData.shipping_zipcode;
        // const_var.post_data['shipping_address_line_1'] = const_var.tempPostData.shipping_address_line_1;

        state.TempData['first_name'] = const_var.tempPostData.first_name;
        state.TempData['last_name'] = const_var.tempPostData.last_name;
        state.TempData['email'] = const_var.tempPostData.email;
        state.TempData['phone_no'] = const_var.tempPostData.phone_no;
        state.TempData['shipping_zipcode'] = const_var.tempPostData.shipping_zipcode;
        state.TempData['shipping_address_line_1'] = const_var.tempPostData.shipping_address_line_1;
        state.TempData['shippingState'] = const_var.tempPostData.shippingState;


        // TempData:{'first_name': '','last_name': '','email': '','phone_no': '',"shipping_zipcode": '',"shipping_address_line_1": '','shippingState': ''}

        const_var.shippingState = const_var.tempPostData.shippingState;
        state.shippingState = const_var.tempPostData.shippingState;
    }
    const_var.tempPostData = action.value;
    return {
        ...state,
        action  
    }
    break;
}
return newState;
}
 export default orderReducer;   