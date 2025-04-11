import React, { Component } from 'react';
import { params, const_var,initialState} from '../redux/reducers/reducer';
import * as cuComponent from '../redux/reducers/componentReducer';

import axios from 'axios';
import {callTaxApiAndCalculatePrice} from "./index";

export function SendBuildingDatatoServer (){
        
        return (dispatch) =>{
        if(const_var.crmSetting.is_module_name=="inventory")
        {
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
            if (const_var.post_data.building != undefined && const_var.post_data['building'].other_building_type_name=='') {
                params.other_building_type_name = params.building_type_name + " - " + params.p_w + " x " + params.p_d + " x " + params.p_h
                const_var.post_data['building'].other_building_type_name = params.other_building_type_name;
                const_var.post_data['building'].name = params.other_building_type_name;
            }
            const_var.post_data["building"].building_type_name = const_var.post_data["building"].other_building_type_name;
            const_var.post_data['product_name'] = const_var.post_data["building"].other_building_type_name;
            const_var.post_data['name'] = const_var.post_data["building"].other_building_type_name;
            const_var.post_data['status'] = params.display_product_status;
            if(const_var.post_data["building"].left_wall_cutpanel==true)
            {
                const_var.post_data["building"].left_wall_price = parseFloat(const_var.post_data["building"].left_wall_price) + parseFloat(const_var.post_data["building"].left_wall_cut_panel_price);
            }if(const_var.post_data["building"].right_wall_cutpanel==true)
            {
                const_var.post_data["building"].right_wall_price = parseFloat(const_var.post_data["building"].right_wall_price) + parseFloat(const_var.post_data["building"].right_wall_cut_panel_price);
            }
            if(const_var.crmSetting.is_zipcode_screen != undefined && const_var.crmSetting.is_zipcode_screen  == true){
                const_var.post_data["building"].state_mfg_zipcode = const_var.state_mfg_zipcode
            }
            const_var.post_data["building"].is_showBackgroundImage = const_var.crmSetting.is_show_background;
            const_var.post_data["building"].custom_building = (const_var.b_o_J_1[params.p_b_t]=="Custom Buildings")?1:const_var.hide_price_calculation;
            const_var.post_data['building'].custom_distance_on_center = (params.oncenter_val_with_action!='')?params.oncenter_val_with_action:'';
            const_var.post_data["building"].payment_mode = const_var.paymentOptionObj[params.paymentmode];
            const_var.post_data["user_id"] = const_var.crmSetting.login_user_id;
            const_var.post_data['is_quote'] = 1;
            const_var.post_data['questions'] = const_var.estimator_QuestionAnswer;
            const_var.post_data['charge_card'] = 0;
            const_var.post_data['form_type'] = "3d_v3";
            const_var.post_data['created_source'] = "3d_v3";
            const_var.post_data['is_api'] = 1;
            const_var.post_data['referral_source'] = const_var.referrer;
            const_var.post_data['source'] =  const_var.crmSetting.source; 
            const_var.post_data['page'] = const_var.crmSetting.page;
            const_var.post_data['form'] = "Quote Form";
            const_var.post_data['api_token'] = const_var.crmSetting.api_token;
            const_var.post_data['building_update'] = true;
            const_var.post_data['pdf_price_breakdown'] = const_var.order_extra_items['pdf_price_breakdown'];
            const_var.post_data['description'] = (const_var.order_extra_items['description']!=undefined)?const_var.order_extra_items['description']:'';
            const_var.post_data['module'] = const_var.crmSetting.is_module_name;
            const_var.post_data["module_id"] = const_var.crmSetting.is_module_id;
            const_var.post_data["sub_module"] = const_var.crmSetting.sub_module;
            const_var.post_data["sub_module_id"] = const_var.crmSetting.sub_module_id;
            const_var.post_data["in_app"] = 1;
            const_var.post_data["building_data"] = const_var.SendAPIBuildingData;
            const_var.post_data["pricing_data"] = const_var.a_p_d_a;
            const_var.post_data["imageDataLayout"] = const_var.twodImageData;
           console.log(const_var.post_data["imageDataLayout"],"const_var.post_data",const_var.twodImageData)
        return axios.post(const_var.crmSetting.api_post_url+'/api/v1/'+const_var.crmSetting.is_Action_url,const_var.post_data).then(function(response){
                    const_var.post_data["module_id"] = response.data.id;
                    // if(response.data.status==true)
                    // {
                    //     const_var.crmSetting.is_module_id = response.data.id;
                    //     const_var.crmSetting.is_Action_url = "order/update";
                    // }
                    var element = document.getElementsByClassName('spinner-active')[0];
                    element.classList.remove("spinner-active");
                    window.location.href = response.data.redirect_url;
                    
                //window.location.href = const_var.crmSetting.source+"/"+const_var.crmSetting.is_module_name+'s/'+response.id;
                
            })
            .catch(function(error){
                console.log(error);
            })
        }else
        {    
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
            if (const_var.post_data.building != undefined && const_var.post_data['building'].other_building_type_name=='') {
                params.other_building_type_name = params.building_type_name + " - " + params.p_w + " x " + params.p_d + " x " + params.p_h
                const_var.post_data['building'].other_building_type_name = params.other_building_type_name;
                const_var.post_data['building'].name = params.other_building_type_name;
            }
            const_var.post_data["building"].building_type_name = const_var.post_data["building"].other_building_type_name;
            const_var.post_data['name'] = const_var.post_data["building"].other_building_type_name;
            if(const_var.post_data["building"].left_wall_cutpanel==true)
            {
                const_var.post_data["building"].left_wall_price = parseFloat(const_var.post_data["building"].left_wall_price) + parseFloat(const_var.post_data["building"].left_wall_cut_panel_price);
            }if(const_var.post_data["building"].right_wall_cutpanel==true)
            {
                const_var.post_data["building"].right_wall_price = parseFloat(const_var.post_data["building"].right_wall_price) + parseFloat(const_var.post_data["building"].right_wall_cut_panel_price);
            }
            if(const_var.post_data["building"].surcharge_amount!=0)
            {
                const_var.post_data["building"].surcharge_taxable = (const_var.post_data["building"].surcharge_taxable==undefined)?0:const_var.post_data["building"].surcharge_taxable;
            }
            const_var.post_data["building"].is_showBackgroundImage = const_var.crmSetting.is_show_background;
            const_var.post_data['building'].custom_distance_on_center = (params.oncenter_val_with_action!='')?params.oncenter_val_with_action:'';
            const_var.post_data["building"].custom_building = (const_var.b_o_J_1[params.p_b_t]=="Custom Buildings")?1:const_var.hide_price_calculation;
            const_var.post_data["building"].payment_mode = const_var.paymentOptionObj[params.paymentmode];
            const_var.post_data["user_id"] = const_var.crmSetting.login_user_id;
            const_var.post_data['is_quote'] = 1;
            const_var.post_data['questions'] = const_var.estimator_QuestionAnswer;
            const_var.post_data['charge_card'] = 0;
            const_var.post_data['form_type'] = "3d_v3";
            const_var.post_data['created_source'] = "3d_v3";
            const_var.post_data['is_api'] = 1;
            const_var.post_data['referral_source'] = const_var.referrer;
            const_var.post_data['page'] = const_var.crmSetting.page;
            const_var.post_data['form'] = "Quote Form";
            const_var.post_data['api_token'] = const_var.crmSetting.api_token;
            const_var.post_data['building_update'] = true;
            const_var.post_data['pdf_price_breakdown'] = const_var.order_extra_items['pdf_price_breakdown'];
            const_var.post_data['zipCode'] = const_var.zipCode
            const_var.post_data = {...const_var.post_data,...const_var.LeadCustomerData};
            if(const_var.post_data['mobile_no']==undefined)
            {
                const_var.post_data['mobile_no'] = const_var.post_data['phone_no'];
            }
            if(const_var.crmSetting.is_zipcode_screen != undefined && const_var.crmSetting.is_zipcode_screen  == true){
                const_var.post_data["building"].state_mfg_zipcode = const_var.state_mfg_zipcode
            }
            //const_var.post_data['twoDImageObj'] = const_var.twoDImageObj;
            const_var.post_data['source'] =  const_var.crmSetting.source; 
            const_var.post_data['billing_county'] = const_var.post_data.billing_country;
            const_var.post_data['shipping_county'] = const_var.post_data.shipping_country;
            const_var.post_data['module'] = const_var.crmSetting.is_module_name;
            const_var.post_data["module_id"] = const_var.crmSetting.is_module_id;
            const_var.post_data["sub_module"] = const_var.crmSetting.sub_module;
            const_var.post_data["sub_module_id"] = const_var.crmSetting.sub_module_id;
            const_var.post_data["in_app"] = 1;
            const_var.post_data["building_data"] = const_var.SendAPIBuildingData;
            const_var.post_data["pricing_data"] = const_var.a_p_d_a;
                    return axios.post(const_var.crmSetting.api_post_url+'/api/v1/'+const_var.crmSetting.is_Action_url,const_var.post_data).then(function(response){
                    const_var.post_data["module_id"] = response.data.id;
                    if(response.data.status==true)
                    {
                        const_var.crmSetting.is_module_id = response.data.id;
                        const_var.crmSetting.is_Action_url = "order/update";
                    }
                    var element = document.getElementsByClassName('spinner-active')[0];
                    element.classList.remove("spinner-active");
                    //window.location.href = response.data.redirect_url;
                    dispatch({type:"GenrateBuildingDatatoServer",
                        event:"",
                        key:"",
                        returnRespone:response.data,
                    })
                //window.location.href = const_var.crmSetting.source+"/"+const_var.crmSetting.is_module_name+'s/'+response.id;
                
            })
            .catch(function(error){
                console.log(error);
            })
        }
    }
    
}

export function GenrateBuildingDatatoServer(e,key)
{
    return (dispatch) =>{
            dispatch({type:"GenrateBuildingDatatoServer",
            event:e,
            key:key
        })
    };
}
export function handleProductModal(e)
{
    return{
        type:"handleProductModal",
        value:e
    }
}

export function getDefaultLeadCustomerData()
{
    return(dispatch) => {
    let searchParam = {'user_id':const_var.crmSetting.login_user_id,'api_token':const_var.crmSetting.api_token,"search_text":"","limit":100,"offset":0,"module":const_var.crmSetting.sub_module,"module_id":const_var.crmSetting.sub_module_id};
            return axios.post(const_var.crmSetting.api_post_url+'/api/v1/lead-customer-list',searchParam).then(function(response){
            //console.log("rahul",response);
            //dispatch(handleCustomerData())
        })
    }
}
export function onSearchRecords(e,key,value)
{
    e.preventDefault();
    value = e.target[0].value;
    return(dispatch) => {
        let domainURL="";
        var searchParam = "";
        if(key=="Customers")
        {
            searchParam = {'user_id':const_var.crmSetting.login_user_id,'api_token':const_var.crmSetting.api_token,"search_text":value,"limit":100,"offset":0,"module":const_var.crmSetting.sub_module}
            domainURL = "customer-list";
        }else
        {
            searchParam = {'user_id':const_var.crmSetting.login_user_id,'api_token':const_var.crmSetting.api_token,"search_text":value,"limit":100,"offset":0,"module":const_var.crmSetting.sub_module}
            domainURL = "lead-list";
        }
                return axios.post(const_var.crmSetting.api_post_url+'/api/v1/lead-customer-list',searchParam).then(function(response){
                dispatch({
                    type: "onSearchRecords",
                    event:e,
                    value: response.data,
                    key:key,
                    search_text:value
                })
        })
        .catch(function(error){
            console.log(error);
        })
    }
}
export function handleCommonModal(e,chksave,flag) {
    if(chksave!=undefined && (Object.keys(const_var.LeadCustomerData).length>0) && (const_var.LeadCustomerData.first_name!=undefined && const_var.LeadCustomerData.first_name != ''))
{
        if(const_var.crmSetting.is_klink_generated==true && flag==undefined)
    {
        return{
            type:"ManageKlinkExpire",
            value:false
        }
    }else{
        return{
            type:"GenrateBuildingDatatoServer",
            event:"",
            key:"genrate"
        }
    }
}else
{
    if(e=="lead_customer")
{
          const removea = document.querySelector('body');   
      removea.classList.remove("active-total-price");
    return(dispatch)=>{
        dispatch({
                type:"handleCommonModal",
                value : '',
                event:e
            });
                        // if(const_var.leadSourceData=='' && const_var.crmSetting.selected_sub_module!=1)
            if(const_var.leadSourceData=='')
            {
                return axios.post(const_var.crmSetting.api_post_url+'/api/v1/lead-source',{"api_token":const_var.crmSetting.api_token}).then(function(response){
                dispatch({
                type:"handleCommonModal",
                value : response.data,
                event:e
                });
                })
                .catch(function(error){
                console.log(error,"error")
                })
            }
    }
} else if (e=='terms_conditions') {
        return{
        type:"handleCommonModal",
        value : "terms_conditions",
        event:e
}
}
else
{
        return{
            type:"handleCommonModal",
            value : "close",
            event:e
    }
}
}
}

export function handleCustomerData(e,row, isSelect, rowIndex,eventType) {
    Object.entries(row).map(([key, value]) => {
       if(value==null || value=="null")
       {
            row[key] ="";
       }
    })
    return(dispatch)=>{
        dispatch({
                    type: "handleCustomerData",
                    event:e,
                    row:row,
                    isSelect:isSelect,
                    rowIndex:rowIndex,
                    eventType:eventType
                });
                if(const_var.crmSetting.is_Edit != true && eventType == undefined && row.address && row.address.length == 0){
                    dispatch(callTaxApiAndCalculatePrice(''))
                }
        if(const_var.LeadCustomerData.showZip!=undefined)
                    {
                        let zipData = {'zip_code':const_var.LeadCustomerData.showZip, 'api_token':const_var.crmSetting.api_token};
                        return axios.post(const_var.crmSetting.api_post_url+'/api/v1/tax-from-zip',zipData).then(function(response1){
                                if(response1.data.status==false)
                                {
                                    dispatch({
                                        type: "handleCustomerDataWithAPI",
                                        event:"",
                                        responseData:'',
                                    });
                                }else
                                {
                                    dispatch({
                                        type: "handleCustomerDataWithAPI",
                                        event:"",
                                        responseData:response1.data,
                                    });
                                }
                                
                                     
                                })
                        
                    }else{
                        const_var.MoreTaxinputs = [];
                    }
    }

}
export function commonsActionforLeadCustomer(e,key)
{
    return{
        type: "commonsActionforLeadCustomer",
        value: e,
        key:key
    }
}
export function AddCustomerLeadRecord (e,key){ 
        return(dispatch)=>{ 
        if(key=="billing")
        {
                        dispatch({type:"AddCustomerLeadRecord","event":e,"key":"billing_create"});
            if(const_var.checkValidate==false && key=="billing")
            {
                dispatch({type:"AddCustomerLeadRecord","event":e,"key":"billing"});
            }
        }else
        { 
                        dispatch({type:"AddCustomerLeadRecord","event":e,"key":key});
            if(const_var.checkValidate==false && key=="create")
            {
                dispatch({type:"AddCustomerLeadRecord","event":e,"key":"save"});
            }
        }
    }
}
export function AddEditAddressRecord(e)
{
    return(dispatch)=>{
        dispatch({
            type:"AddEditAddressRecord",
            event:e,
            key:"create",
        })
        if(const_var.checkValidate==false)
        {
            dispatch({type:"AddEditAddressRecord","event":e,"key":"save"});
        }
        if(const_var.isSetZip == true && const_var.crmSetting.is_Edit != true ){
            dispatch(callTaxApiAndCalculatePrice(const_var.LeadCustomerData.address[0].zipcode))
            const_var.isSetZip = false
        }
        if(const_var.LeadCustomerData && const_var.LeadCustomerData.address && const_var.LeadCustomerData.address.length > 0 && const_var.crmSetting.is_Edit != true){
            let defaultAdd = const_var.LeadCustomerData.address.filter(obj => obj.is_billing == 1)
            defaultAdd = defaultAdd[0]
            if(defaultAdd.zipcode != undefined && defaultAdd.zipcode != params.tax_zipcode){
                dispatch(callTaxApiAndCalculatePrice(defaultAdd.zipcode))
            }
        }
    }
}
export function AddEditAddressInfo(e,key,is_Checked, isRecChecked)
{
    return(dispatch)=>{
        dispatch({
            type: "AddEditAddressInfo",
            event:e,
            key:key,
            is_Checked:is_Checked
        })
        if(const_var.crmSetting.is_Edit != true && key == 'add' && const_var.LeadCustomerData && (const_var.LeadCustomerData.address == undefined || const_var.LeadCustomerData.address && const_var.LeadCustomerData.address.length == 0)){
            const_var.isSetZip = true
        }
        if(const_var.crmSetting.is_Edit != true && key == 'update' && is_Checked == 'is_billing' && const_var.LeadCustomerData && const_var.LeadCustomerData.address && const_var.LeadCustomerData.address.length > 0){
            dispatch(callTaxApiAndCalculatePrice(const_var.LeadCustomerData.address[e].zipcode))
        }
        // if(const_var.LeadCustomerData && const_var.LeadCustomerData.address && const_var.LeadCustomerData.address.length > 0){
        //     let defaultAdd = const_var.LeadCustomerData.address.filter(obj => obj.is_billing == 1)
        //     defaultAdd = defaultAdd[0]
        //     dispatch(callTaxApiAndCalculatePrice(defaultAdd.zipcode))
        // }
    }
}
export function onAddressFiledChangeValue(e,name,keyword,flag,ValidationCheck,editEmail)
{
        return(dispatch)=>{
        dispatch({
            type: "onAddressFiledChangeValue",
            event:e,
            value:name,
            keyword:keyword,
            flagg:flag,
            ValidationCheck:ValidationCheck,
            editEmail:editEmail
        })
    }
}
export function onTextFiledChangeValue (e,name,keyword,flag,ValidationCheck,editEmail){ 
    return(dispatch)=>{
        dispatch({
            type: "onTextFiledChangeValue",
            event:e,
            value:name,
            keyword:keyword,
            flagg:flag,
            ValidationCheck:ValidationCheck,
            editEmail:editEmail
        })
    }
}  

export function handlePlaceOrder(e) {
    return (dispatch) => {
        dispatch({
            type:"handlePlaceOrder",
            event: e
        })
    }
}

export function handleCheckboxForBillingAddress(e) {
    return (dispatch) => {
        dispatch({
            type : "handleCheckboxForBillingAddress",
            event : e
        })
    }
}