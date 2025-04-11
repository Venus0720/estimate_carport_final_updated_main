import { OpenCustomPopup, showSaveThank } from '../action/index';
import { params, const_var} from '../redux/reducers/reducer';
import axios from 'axios';




export function onorderTextFiledChangeValue (e,name,keyword,flag,ValidationCheck,editEmail){ 
    return(dispatch)=>{
        dispatch({
            type: "onorderTextFiledChangeValue",
            event:e,
            value:name,
            keyword:keyword,
            flagg:flag,
            ValidationCheck: ValidationCheck,
            editEmail: editEmail
        })
    }
  }
export function handleOrderModal(e)
{
    return(dispatch)=>{
        dispatch({
            type: "handleOrderModal",
            payload:e
        })
    }
}


  export function onSubmitCheckout (e){ 
    //console.log("onSubmitCheckout","Rahul",e);
    return(dispatch)=>{  
    dispatch({
        type: "onOrderSubmitCheckout",
        event: e
    });
    dispatch(placeOrderValidation(e))

    if (const_var.checkValidate == false){ 
            const_var.is_loader = true
            let isAddressDataDelete = (const_var.crmSetting.pre_quote_form == true && const_var.preQuoteApiCalled == true && const_var.preQuoteError == false && const_var.loginSession == false) ? false : true;

            const_var.post_data['card_detail'] = {};
            var newAddress = [];
            const_var.showProcessLoader = true;
            const_var.submitCheckoutBtn = true;  
            for(let i=0; i <= e.target.length-1; i++){
            var arr = [{key:e.target[i].name, value:e.target[i].value}];
                if(arr[0].key=="phone_no"){
                    const_var.post_data['mobile_no'] = arr[0].value;
                    const_var.post_data['phone_no'] = arr[0].value;
                }else
                {
                    const_var.post_data[arr[0].key] = arr[0].value;
                }
                //const_var.post_data[arr[0].key] = arr[0].value;
            }
            // const_var.post_data.shipping_state = const_var.shippingState;
            const_var.post_data['billing_state'] = const_var.billingState;
            if(const_var.billingAddressCheckbox==true)
            {
                const_var.post_data['billing_address_line_1'] = const_var.post_data['shipping_address_line_1'];
                const_var.post_data['billing_city'] = const_var.post_data['shipping_city'];
                const_var.post_data['billing_state'] = const_var.post_data['shipping_state'];
                const_var.post_data['billing_zipcode'] = const_var.post_data['shipping_zipcode'];
                newAddress.push({"address_line_1":const_var.post_data['shipping_address_line_1'],"address_line_2":'',"zipcode":const_var.post_data['shipping_zipcode'],"county":'',"state":const_var.post_data['shipping_state'],'city':const_var.post_data['shipping_city'],'is_billing':1,'is_installation':1});
            }else
            {
                newAddress.push({"address_line_1":const_var.post_data['billing_address_line_1'],"address_line_2":'',"zipcode":const_var.post_data['billing_zipcode'],"county":'',"state":const_var.post_data['billing_state'],'city':const_var.post_data['billing_city'],'is_billing':1});
                newAddress.push({"address_line_1":const_var.post_data['shipping_address_line_1'],"address_line_2":'',"zipcode":const_var.post_data['shipping_zipcode'],"county":'',"state":const_var.post_data['shipping_state'],'city':const_var.post_data['shipping_city'],'is_installation':1});
            }
            const_var.post_data['address'] = newAddress;
            if(const_var.post_data['building'].leanto!=undefined && const_var.post_data['building'].leanto.length>0)
            {
                if(const_var.post_data['building'].leanto.length>1)
                {
                    const_var.post_data['building'].leanto[0].alignment = (const_var.post_data['building'].leanto[0].leanto_type==1)?const_var.TypeAlingnment[params.leantoAlignmentLeft]:const_var.TypeAlingnment[params.leantoAlignmentRight];
                    const_var.post_data['building'].leanto[1].alignment = (const_var.post_data['building'].leanto[1].leanto_type==1)?const_var.TypeAlingnment[params.leantoAlignmentLeft]:const_var.TypeAlingnment[params.leantoAlignmentRight];
                }else
                {
                    const_var.post_data['building'].leanto[0].alignment = (const_var.post_data['building'].leanto[0].leanto_type==1)?const_var.TypeAlingnment[params.leantoAlignmentLeft]:const_var.TypeAlingnment[params.leantoAlignmentRight];
                }
            }
            if(const_var.post_data["building"].left_wall_cutpanel==true)
            {
                const_var.post_data["building"].left_wall_price = parseFloat(const_var.post_data["building"].left_wall_price) + parseFloat(const_var.post_data["building"].left_wall_cut_panel_price);
            }if(const_var.post_data["building"].right_wall_cutpanel==true)
            {
                const_var.post_data["building"].right_wall_price = parseFloat(const_var.post_data["building"].right_wall_price) + parseFloat(const_var.post_data["building"].right_wall_cut_panel_price);
            }
            if (const_var.post_data.building != undefined && const_var.post_data['building'].other_building_type_name=='') {
                params.other_building_type_name = params.building_type_name + " - " + params.p_w + " x " + params.p_d + " x " + params.p_h
                const_var.post_data['building'].other_building_type_name = params.other_building_type_name;
                const_var.post_data['building'].name = params.other_building_type_name;
            }
            if(const_var.post_data['building'].leanto!=undefined && const_var.post_data['building'].leanto.length>0)
            {
                for(var i=0;i<=const_var.post_data['building'].leanto.length-1;i++)
                {
                    if(const_var.post_data['building'].leanto[i].leanto_type==1)
                    {
                        const_var.post_data['building'].leanto[i].alignment = const_var.TypeAlingnment[params.leantoAlignmentLeft];
                    }
                    if(const_var.post_data['building'].leanto[i].leanto_type==2)
                    {
                        const_var.post_data['building'].leanto[i].alignment = const_var.TypeAlingnment[params.leantoAlignmentRight];
                    }
                    if(const_var.post_data['building'].leanto[i].leanto_type==3)
                    {
                        const_var.post_data['building'].leanto[i].alignment = const_var.endLeanAlingnmentType[params.leantoAlignmentFront];
                    }
                    if(const_var.post_data['building'].leanto[i].leanto_type==4)
                    {
                        const_var.post_data['building'].leanto[i].alignment = const_var.endLeanAlingnmentType[params.leantoAlignmentBack];
                    }
                }
            }
            if(const_var.post_data["building"].surcharge_amount!=0)
            {
                const_var.post_data["building"].surcharge_taxable = (const_var.post_data["building"].surcharge_taxable==undefined)?0:const_var.post_data["building"].surcharge_taxable;
            }
            const_var.post_data["building"].is_showBackgroundImage = const_var.crmSetting.is_show_background;
            const_var.post_data['building'].tax_zipcode = const_var.post_data['billing_zipcode'];
            const_var.post_data['building'].other_building_type_name = params.other_building_type_name;
            const_var.post_data["building"].payment_mode = const_var.paymentOptionObj[params.paymentmode];
            const_var.post_data['building'].name = params.other_building_type_name;
            const_var.post_data['name'] = const_var.post_data["building"].other_building_type_name;
            const_var.post_data["building"].custom_building = const_var.hide_price_calculation;
            const_var.post_data["custom_building"] = const_var.hide_price_calculation;
            const_var.post_data['pdf_price_breakdown'] = const_var.price_breakdown_key[const_var.crmSetting.is_module_name];
            const_var.post_data['api_token']       =const_var.crmSetting.api_token;
            const_var.post_data['charge_card'] = 1;
            const_var.post_data['is_quote'] = 0;
            const_var.post_data['questions'] = const_var.estimator_QuestionAnswer;
            const_var.post_data['module'] = "order";
            const_var.post_data["module_id"] = ""
            const_var.post_data["sub_module"] = "";
            const_var.post_data["sub_module_id"] = "";
            const_var.post_data['form_type'] = "3d_v3";
            const_var.post_data['created_source'] = "3d_v3";
            const_var.post_data['is_api'] = 1;
            const_var.post_data['lead_source'] = "3D Estimator";
            const_var.post_data['referral_source'] = (const_var.referrer=='')?document.referrer:const_var.referrer;
            const_var.post_data['source'] = const_var.crmSetting.source;
            const_var.post_data['page'] = const_var.crmSetting.page;
            const_var.post_data['form'] = "Order Form";
            const_var.post_data['building'].surface_level = params.job_site_level;
            const_var.post_data['building'].electricity = params.power_avail; 
            const_var.post_data['building'].additional_note = params.additional_note;
            const_var.post_data['sign_jpeg'] = const_var.sign_jpeg;
            const_var.post_data['collect_card'] = 1;
            const_var.post_data["building_data"] = const_var.SendAPIBuildingData;
            const_var.post_data["pricing_data"] = const_var.a_p_d_a;
            const_var.post_data['estimator_domain'] = const_var.crmSetting.main_domain_url;

            const_var.post_data['card_detail']["cardnumber"] = const_var.post_data.cardnumber;
            const_var.post_data['card_detail']["expirydate"] = const_var.post_data.expirydate;
            const_var.post_data['card_detail']["cvv"] = const_var.post_data.cvv;
            const_var.post_data['card_detail']["cardholder_name"] = const_var.post_data.cardholder;
            // delete const_var.post_data['cardnumber'];
            // delete const_var.post_data['cardholder'];
            // delete const_var.post_data['cvv'];
            // delete const_var.post_data['expirydate'];

            // delete const_var.post_data['billing_address_line_1'];
            // delete const_var.post_data['billing_city'];
            // delete const_var.post_data['billing_state'];
            // delete const_var.post_data['billing_zipcode'];

            // delete const_var.post_data['shipping_city'];
            if(isAddressDataDelete == true){
                // delete const_var.post_data['shipping_address_line_1'];
                // delete const_var.post_data['shipping_state'];
                // delete const_var.post_data['shipping_zipcode'];
            }

            const_var.checkStripeID = true;
            //const_var.post_data.stripe_token = response.id;
            if(const_var.checkStripeID==true)
            {
                dispatch(onSubmitCheckoutApi(e));
            }
            

            //const_var.post_data.payment_type = const_var.paymentOption.type;
            // if(const_var.paymentOption.type==1)
            // {
            //     window.Stripe.card.createToken({
            //         number: const_var.post_data['cardnumber'],
            //         exp_month: const_var.post_data['expirydate'].split('/')[0],
            //         exp_year: const_var.post_data['expirydate'].split('/')[1],
            //         cvc: const_var.post_data['cvv']   
            //       }, (status, response) => {
            //         if (status === 200) {
            //             const_var.post_data['card_detail']["cardnumber"] = const_var.post_data.cardnumber;
            //             const_var.post_data['card_detail']["expirydate"] = const_var.post_data.expirydate;
            //             const_var.post_data['card_detail']["cvv"] = const_var.post_data.cvv;
            //             const_var.checkStripeID = true;
            //             const_var.post_data.stripe_token = response.id;
            //             if(const_var.checkStripeID==true)
            //             {
            //                 dispatch(onSubmitCheckoutApi(e));
            //             }
            //         } else {
            //             const_var.checkStripeID = false;
            //             if(response.error){
            //                 dispatch(onSubmitCheckoutApiErrorhandling(e, response.error.message));
            //             }
            //         }
            //       });
            // }else
            // {
            //     dispatch(onSubmitCheckoutApi(e)); 
            // }

        }
    
    }
  }

  export function onSubmitCheckoutApiErrorhandling(e, message){
    return {
        type: "onSubmitCheckoutApiErrorhandling",
        event: e,
        value: message
    }
  }
 

 export function onSubmitCheckoutApi(e)
{
    if(const_var.crmSetting.is_zipcode_screen != undefined && const_var.crmSetting.is_zipcode_screen  == true){
        const_var.post_data["building"].state_mfg_zipcode = const_var.state_mfg_zipcode
    }
    return(dispatch) => {
        return axios.post(const_var.crmSetting.api_post_url+'/api/v1/order/save',const_var.post_data).then(function(response){
            if(response.data.status == true){
                dispatch({
                        type:"onSubmitCheckoutApi",
                        event : response.data
                    }); 
                const_var.is_loader = false
                dispatch(showSaveThank())
            }else{
                const_var.errorMessage = response.data.message
                dispatch(OpenCustomPopup(true))
            }
        })
        .catch(function(error){
            console.log(error);
        })
    }
   
}
export function privacyPolicyCheckboxChange()
{
    return(dispatch)=>{
        dispatch({
            type:"privacyPolicyCheckboxChange"
        })
    }
}
export function genrateSignature(val,key)
{
    const_var.sigPad = key;
    return(dispatch)=>{
        dispatch({
            type:"genrateSignature",
            value:key.getTrimmedCanvas().toDataURL('image/png'),
            event:val
        })
    }
}
export function agreeTermsAndConditionCheckboxChange()
{
    return(dispatch)=>{
        dispatch({
            type:"agreeTermsAndConditionCheckboxChange"
        })
    }
}

export function termsAndConditionProceedBtn()
{
    return(dispatch)=>{
        dispatch({
            type:"termsAndConditionProceedBtn"
        })
    }
}


export function billingAddressCheckboxChange()
{
    return(dispatch)=>{
        dispatch({
            type:"billingAddressCheckboxChange"
        })
    }
}
export function shippingStateChange(val)
{
    return (dispatch) =>{
        dispatch({type: "SHIPPINGSTATECHANGE",
        value: val
    })
      };
}

export function billingStateChange(val)
{
    return (dispatch) =>{
        dispatch({type: "BILLINGSTATECHANGE",
        value: val
    })
      };
}
export function updateTempPostData(val, isPostReset)
{
    return (dispatch) =>{
        dispatch({type: "updateTempPostData",
            value: val,
            isPostReset: isPostReset
        })
    };
}

//On submit validation check
export function placeOrderValidation(e) {
    return (dispatch) => {
        dispatch({
            type: "placeOrderValidation",
            event: e
        })
    }
}



//Address Field Change
export function onAddressFieldHandleChangeValue(e, name, keyword, flag, ValidationCheck, editEmail) {
    return (dispatch) => {
        dispatch({
            type: "onAddressFieldHandleChangeValue",
            event: e,
            value: name,
            keyword: keyword,
            flagg: flag,
            ValidationCheck: ValidationCheck,
            editEmail: editEmail
        })
    }
}
//Billing address is same as Shipping address Checkbox
export function handleCheckboxForBillingAddress(e) {
    return (dispatch) => {
        dispatch({
            type : "handleCheckboxForBillingAddress",
            event : e
        })
    }
}