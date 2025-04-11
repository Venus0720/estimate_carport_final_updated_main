import { params, const_var} from '../redux/reducers/reducer';
import axios from 'axios';
import {getBuildingData, showDownloadProgressBar, showSaveLater, showSaveThank} from "./index";

 export function handleSaveLatter (value,key){ 
    const_var.displayerrorMessage = {}
 	return(dispatch)=>{
        dispatch({
            type: "handleSaveLatter",
            payload: value,
            key:key,
        })
    }
   
  }
  export function handleSavePublicQuote(value)
  {
    return(dispatch)=>{
        dispatch({
            type: "handleSavePublicQuote",
            payload:value
        })
    }
  }
  export function SendBuildingDatatoPublicServer()
  { 
    return(dispatch) => {
        
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
            const_var.post_data = {...const_var.post_data,...const_var.LeadCustomerData};
            if(const_var.post_data['mobile_no']==undefined)
            {
                const_var.post_data['mobile_no'] = const_var.post_data['phone_no'];
            }
            //const_var.post_data['twoDImageObj'] = const_var.twoDImageObj;
            console.log(const_var.post_data['twoDImageObj'],"const_var.post_data['twoDImageObj']",const_var.twoDImageObj)
            const_var.post_data['source'] =  const_var.crmSetting.source; 
            const_var.post_data['billing_county'] = const_var.post_data.billing_country;
            const_var.post_data['shipping_county'] = const_var.post_data.shipping_country;
            const_var.post_data['module'] = const_var.crmSetting.is_module_name;
            const_var.post_data["module_id"] = const_var.crmSetting.is_module_id;
            const_var.post_data["sub_module"] = const_var.crmSetting.sub_module;
            const_var.post_data["sub_module_id"] = const_var.crmSetting.sub_module_id;
            const_var.post_data["building_data"] = const_var.SendAPIBuildingData;
            const_var.post_data['estimator_domain'] = const_var.crmSetting.main_domain_url;
            const_var.post_data["pricing_data"] = const_var.a_p_d_a;
        return axios.post(const_var.crmSetting.api_post_url+'/api/v1/'+const_var.crmSetting.is_Action_url,const_var.post_data).then(function(response){
                    const_var.post_data["module_id"] = response.data.id;
                    if(response.data.status==true)
                    {
                        const_var.isPublicEdit = false;
                    }
                    dispatch({
                        type:"onQuoteSubmitApi",
                        event : response.data
                    });
                //window.location.href = const_var.crmSetting.source+"/"+const_var.crmSetting.is_module_name+'s/'+response.id;
                
            })
            .catch(function(error){
                console.log(error);
            })
        }
  }
  export function onquoteTextFiledChangeValue (e,name,keyword,flag,updateVar = false){ 
  
    return(dispatch)=>{
        dispatch({
            type: "onquoteTextFiledChangeValue",
            event:e,
            value:name,
            keyword:keyword,
            flagg:flag,
            updateVar:updateVar
        })
    }
  }

export function onSubmit (e,isCreateFeed = false,callApiOnly = false){ 
    return(dispatch)=>{ 
            dispatch({
                type: "onQuoteSubmit",
                event: e
            });
            dispatch(inputValidate(e))
            if(const_var.checkValidate==false){
                const_var.is_loader = true
                const_var.showReportLoading = true;

                if(const_var.post_data.full_name != undefined && const_var.post_data.full_name != ''){
                    let fullname = const_var.post_data.full_name
                    let separation = fullname.split(" ")
                    let fname = separation[0]
                    let lname = separation[1] ? fullname.substr(fullname.indexOf(' ') + 1) : '';
    
                    const_var.post_data['first_name']=fname
                    const_var.post_data['last_name']=lname
                }

                if(isCreateFeed==true && (const_var.ziperrormsg == '' || const_var.ziperrormsg == undefined)){        
                    const formData = new FormData();
                    formData.append('first_name', const_var.post_data.first_name);
                    formData.append('last_name', const_var.post_data.last_name);
                    formData.append('email', const_var.post_data.email);
                    formData.append('phone_no', const_var.post_data.phone_no);
                    formData.append('zipcode', const_var.post_data.address[0].zipcode);
                    formData.append('address', const_var.post_data.address[0].address_line_1);
                    formData.append('api_token', const_var.crmSetting.api_token)
                    formData.append('form', const_var.crmSetting.form);
                    formData.append('source', const_var.crmSetting.source);
                    formData.append('page', const_var.crmSetting.page);
                    formData.append('lead_source', '3D Estimator');
                    return axios.post(const_var.crmSetting.api_post_url + '/api/v1/create-lead', formData, {headers: {        
                            'content-type': 'multipart/form-data'
                        }
                    }).then(function(response){
                        if(response.data.status == true){
                            // getBuildingData()
                            const_var.preQuoteApiCalled = true
                            const_var.preQuoteError = false
                        }
                        else{
                            const_var.preQuoteApiCalled = true
                            const_var.preQuoteError = true
                        }
                        const_var.showReportLoading = false
                        return true
                    })
                    .catch(function(error){
                        const_var.preQuoteApiCalled = true
                        const_var.preQuoteError = true
                        const_var.showReportLoading = false
                        return false
                    })                  
                    
                }
                if(isCreateFeed == false){
                    dispatch(onQuoteSubmitApi(e));                  
                }
            }
    }
}

export function onQuoteSubmitApi(e)
{
    if(const_var.crmSetting.is_zipcode_screen != undefined && const_var.crmSetting.is_zipcode_screen  == true){
        const_var.post_data["building"].state_mfg_zipcode = const_var.state_mfg_zipcode
    }
   return(dispatch) => {
        return axios.post(const_var.crmSetting.api_post_url+'/api/v1/order/save',const_var.post_data).then(function(response){
            dispatch({
                type:"onQuoteSubmitApi",
                event : response.data
            }); 
            // dispatch(showSaveLater("form",false))
            document.querySelector('#saveForm').classList.remove('overlay-container' , 'gather-customer-information')
            document.querySelector('#saveForm').classList.add('d-none')
            const_var.is_loader = false
            dispatch(showSaveThank("show"))
            const_var.post_data.first_name = "";
            const_var.post_data.phone_no = "" ;
            const_var.post_data.email = "";  
            const_var.post_data.messageField = '';   
            const_var.displayerrorMessage = {}
        })
        .catch(function(error){
            console.log(error);
        })
    }
   
}
export function onLeadSubmitApi(e)
{
   return(dispatch) => {
    dispatch(inputValidate(e))
    console.log(const_var.checkValidate,"const_var.checkValidate")
            if (const_var.checkValidate === false) {
                const_var.is_loader = true
                if(!const_var.isShowDownloadProgressBar) {
                    dispatch(showDownloadProgressBar("show"))
                }
              setTimeout(async () => {
                console.log(const_var.pdfBlob,"const_var.pdfBlob")
                const formData = new FormData();
                formData.append('first_name', const_var.post_data.first_name);
                formData.append('last_name', const_var.post_data.last_name);
                formData.append('email', const_var.post_data.email);
                formData.append('phone_no', const_var.post_data.phone_no);
                // formData.append('zipcode', const_var.post_data.address[0].zipcode);
                // formData.append('address', const_var.post_data.address[0].address_line_1);
                formData.append('api_token', const_var.crmSetting.api_token)
                formData.append('form', const_var.crmSetting.form);
                formData.append('source', const_var.crmSetting.source);
                formData.append('page', const_var.crmSetting.page);
                formData.append('lead_source', '3D Estimator');
                formData.append('attachments[]', const_var.pdfBlob);
                return axios.post(const_var.crmSetting.api_post_url + '/api/v1/create-lead', formData, {headers: {        
                        'content-type': 'multipart/form-data'
                    }
                }).then(function(response){
                    if(response.data.status == true){
                
                    dispatch({
                        type:"onQuoteSubmitApi",
                        event : response.data
                    }); 
                    // dispatch(showSaveLater("form",false))  
                    document.querySelector('#saveForm').classList.remove('overlay-container' , 'gather-customer-information')
                    document.querySelector('#saveForm').classList.add('d-none')
                    const_var.is_loader = false
                    dispatch(showSaveThank("show"))
                    const_var.post_data.first_name = "";
                    const_var.post_data.phone_no = "" ;
                    const_var.post_data.email = "";
                    const_var.post_data.messageField = '';        
                    const_var.displayerrorMessage = {};
                    const_var.i_g_A_y = []
                    const_var.checkIval = 0;
                    const_var.isShowDownloadProgressBar = undefined
                } 
                })
                .catch(function(error){
                    console.log(error);
                });               
             },3100);
            }
    }
   
}
export function setThankYouForSaveLaterValue(val)
{
    
   return(dispatch) => {
            dispatch({
                type:"setThankYouForSaveLaterValue",
                val : val
            });   
    }
   
}
export function inputValidate(e) {
    return (dispatch) => {
        dispatch({
            type: "inputValidate",
            event: e
        })
    }
}

export function inputFieldChangeValue (e , name , keyword , flag , ValidationCheck , editEmail  ) {
    return(dispatch)=>{
        dispatch({
            type: "INPUTFIELDCHANGEVALUE",
            event:e,
            value:name,
            keyword:keyword,
            flagg:flag,
            ValidationCheck: ValidationCheck,
            editEmail: editEmail
        })
    }
}

