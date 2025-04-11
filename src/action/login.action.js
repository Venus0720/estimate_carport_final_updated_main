import { params, const_var} from '../redux/reducers/reducer';
import { batch } from 'react-redux'
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {zipCodeError,updatePreQuoteErr} from "./index.js";

export function onLoginTextFiledChangeValue (e,name,keyword,flag){ 
    return(dispatch)=>{
        dispatch({
            type: "onLoginTextFiledChangeValue",
            event:e,
            value:name,
            keyword:keyword,
            flagg:flag
        })
    }
}
export function onSubmitLogin (e){ 

return(dispatch)=>{
      dispatch({
          type: "onSubmitLogin",
          event : e,
          key:"validate"
      });
      if(const_var.checkValidate==false)
      {

        const_var.showReportLoading = true;
          let rememberVal = {};
          for(let i=0; i <= e.target.length-1; i++){
              var arr = [{key:e.target[i].name, value:e.target[i].value}];
                  const_var.post_data[arr[0].key] = arr[0].value;
                  rememberVal[arr[0].key] = arr[0].value;
              }
          let loginApiData = {'email':const_var.post_data['username'],'password':const_var.post_data['password']};
          return axios.post(const_var.crmSetting.api_post_url+'/api/v1/login',loginApiData).then(function(response){
          const_var.preQuoteError = true
          if(const_var.crmSetting.is_zipcode_screen != undefined && const_var.crmSetting.is_zipcode_screen == true){
            params.m_s_n = ''
          }

          dispatch({
                  type:"onSubmitLogin",
                  event : response.data,
                  data:loginApiData,
                  remember:rememberVal,
                  key:"login"
              });
              const_var.showReportLoading = false;
          
          if(const_var.crmSetting.is_zipcode_screen != undefined && const_var.crmSetting.is_zipcode_screen == true){
            if(const_var.state_mfg_zipcode){
              dispatch(getDealerStateList(false, true, const_var.state_mfg_zipcode));
            }
            else{
              dispatch(getDealerStateList(false, false));
            }
          }
          else{
            dispatch(getDealerStateList());
          }
          
          

          const removea = document.querySelector('body');   

           removea.click(); 
          
        
          })
          .catch(function(error){
            const_var.showReportLoading = false;
              if(error.response.status != 200){
                  dispatch(onSubmitLoginApiErrorhandling(e, 'Wrong email or password'));
              }
          })
      }

  }

}

export function onSubmitLoginApiErrorhandling(e, message){
  return {
      type: "onSubmitLoginApiErrorhandling",
      event: e,
      value: message
  }
}

export function loginRememberMeChange()
{
    return(dispatch)=>{
        dispatch({
            type:"loginRememberMeChange"
        })
    }
}
  
export function onSubmitLogout (e){ 
  return(dispatch)=>{
      dispatch({
          type: "onSubmitLogout",
          event: e
      })
  }
}

export function getDealerStateList(isZipEnable = false,isApiCall = true,zipCode){
  const_var.zipManufErrMsg = '';
  const_var.isZipcodeIncluded = true;
  if(const_var.crmSetting.is_zipcode_screen != undefined && const_var.crmSetting.is_zipcode_screen == true && const_var.showStateField == false && const_var.showStateOnly == false){
    const_var.showReportLoading = true
  }
  if(zipCode==undefined)
  {
    zipCode = '';
  }else
  {
    zipCode = zipCode;
  }
  let NewBuildingresponse = [];
  let Newresponse = [];
  let NewLeanresponse = [];
  
  return(dispatch) => {
      let StateApiData = "";
      let newData = "";
      if(const_var.crmSetting.pre_quote_form == true && const_var.loginSession==false && const_var.showStateField == false && const_var.showStateOnly == false){
        dispatch(zipCodeError(''))
      }
      if(isZipEnable == true){   
        if(const_var.crmSetting.is_zipcode_screen != undefined && const_var.crmSetting.is_zipcode_screen == true && const_var.showStateField == false && const_var.showStateOnly == false){
          const_var.showReportLoading = false
        }
        const_var.showProcessLoaderchkEdit = false;
      }
      else{
        if(localStorage.getItem('userData')!=undefined )
        {
          newData = JSON.parse(localStorage.getItem('userData'));
          const_var.crmSetting.login_user_id = newData["user_id"];
          const_var.crmSetting.api_token = newData["api_token"];
          const_var.is_loggedinUserData.id = newData["user_id"];
          StateApiData = {'user_id':newData["user_id"],'api_token':newData["api_token"]};
          const_var.loginSession=true;
        }else
        {
          StateApiData = {'user_id':(const_var.is_loggedinUserData!=undefined)?const_var.is_loggedinUserData.id:2,'api_token':(const_var.is_loggedinUserData!=undefined)?const_var.crmSetting.api_token:const_var.crmSetting.api_token};
        }
        if(const_var.loginSession==false)
        {
          StateApiData = {'user_id':null,'api_token':const_var.crmSetting.api_token,"estimator_domain":(const_var.crmSetting.main_domain_url!=undefined)?const_var.crmSetting.main_domain_url:"cibirix.com"};
        }
        if(const_var.crmSetting.api_token=="GuEssZt4YAZi5ot69xbO9I4w3dbxgPJNXsUFCJJPevH3zt1ONTUabif5hRKJ41Oc")
        {
            const_var.wallNameColor = "red";
        } 
        if(zipCode && const_var.crmSetting.is_Edit!=true){
          StateApiData = {...StateApiData,...{ 'zipcode': zipCode}}
        }
        if(const_var.crmSetting.is_zipcode_screen != undefined && const_var.crmSetting.is_zipcode_screen == true && const_var.state_mfg_zipcode != undefined && const_var.state_mfg_zipcode != '' && const_var.state_mfg_zipcode != null){
          StateApiData = {...StateApiData,...{ 'zipcode': const_var.state_mfg_zipcode}}
        }
        
        if(const_var.crmSetting.is_zipcode_screen != undefined && const_var.crmSetting.is_zipcode_screen && !isApiCall){   
          if(const_var.showStateField == false && const_var.showStateOnly == false){
            const_var.showReportLoading = false
          }
          dispatch({
            type: "SELECTED_TAB_STATE",
            key: "statechange"     
          });  
        }
        else{
            batch(() => {
              return axios.post(const_var.crmSetting.api_post_url+'/api/v1/state-manufacturer-list',StateApiData).then(function(response){
              const_var.showReportLoading = false
              if(const_var.crmSetting.pre_quote_form != undefined && const_var.crmSetting.pre_quote_form == true && response.data.status == false && const_var.loginSession == false && localStorage.getItem('userData')==undefined){
                const_var.SApiCalled = true;
                const_var.showStateField = true
                dispatch(zipCodeError(response.data.message));
                // dispatch(getDealerStateList());
                if(zipCode != undefined && zipCode != ''){
                  const_var.shippingState = ''
                }
                // return;
              }
              if(const_var.crmSetting.is_zipcode_screen != undefined && const_var.crmSetting.is_zipcode_screen == true){
                // const_var.showReportLoading = false
                if(response.data.status == false && const_var.loginSession == false && localStorage.getItem('userData')==undefined ){
                  const_var.SApiCalled = true;
                  dispatch(zipCodeError(response.data.message))
                  return;
                }
                if(response.data.status == false && const_var.loginSession == true && (const_var.crmSetting.is_loggedin == true || localStorage.getItem('userData')!=undefined)){
                  const_var.showStateZip = true
                  dispatch(zipCodeError(response.data.message))
                }
                if(response.data.status == true && response.data.message != undefined && response.data.message != ''){
                  const_var.zipManufErrMsg = response.data.message
                }
              }
                const_var.MFApiCalled = true;
                const_var.SApiCalled = true;
                if(response.data.is_maintenance!=undefined && response.data.is_maintenance)
                {
                    const_var.IsMentananceWindow = true;
                    return;
                }
                // if((const_var.crmSetting.is_zipcode_screen == false && const_var.crmSetting.pre_quote_form == false) && response.data.data.length==1 && const_var.crmSetting.is_Edit==false)
                if(((const_var.crmSetting.is_zipcode_screen == undefined || const_var.crmSetting.is_zipcode_screen == false) && (const_var.crmSetting.pre_quote_form == false || const_var.crmSetting.pre_quote_form == undefined)) && response.data.data.length==1 && const_var.crmSetting.is_Edit==false)
                {
                  const_var.showProcessLoaderchkEdit = true;
                }
                if(response.data.data.length>1 && const_var.crmSetting.is_Edit==false)
                {
                  const_var.showProcessLoaderchkEdit = false;
                }
                if(const_var.crmSetting.is_Edit==true)
                {
                  if(const_var.editAPIDataByResponse.data!=undefined && const_var.editAPIDataByResponse.data.created_at<"2023-02-20" && const_var.editAPIDataByResponse.data.request_data.building.surcharge_on_discounted_subtotal==undefined )
                  {
                    let updatedData = '';
                    let NewData = response.data.data.filter(newData => newData.id==params.p_s_n );
                    if(NewData.length>0)
                    {
                        updatedData = NewData[0].manufacturer_list.filter(data=>data.id==params.m_s_n)[0];
                        if(updatedData!='' && updatedData.surcharge.length>0)
                        {
                            updatedData.surcharge.map((data,key)=>{
                              updatedData.surcharge[key].surcharge_on_discounted_subtotal = 0;
                              //console.log(data,key,updatedData,"const_var.editAPIDataByResponse.data.request_data.building.surcharge_on_discounted_subtotal!=undefined")
                              //data[key].surcharge_on_discounted_subtotal = 0;
                            })
                        }
                    }
                    //console.log("rahulllll",updatedData)
                  }
                  
                }
                let chkRecords = response.data.data.filter(data=>{return data.manufacturer_list.length});
                if(chkRecords.length>0 && const_var.crmSetting.is_Edit==true && response.data.data.filter(data=>data.manufacturer_list.filter(newData => data.id==params.p_s_n &&newData.id == params.m_s_n).length > 0 ? true : false ).length==0)
                {
                  
                  dispatch({
                    type:"CheckSharingAlertBox",
                    value : 'show'
                  });
                }else{
                  if(const_var.editAPIDataByResponse!=undefined && Object.keys(const_var.editAPIDataByResponse).length>0 && const_var.editAPIDataByResponse.data!=undefined && const_var.editAPIDataByResponse.data.request_data!=undefined)
                  {
                      if(const_var.editAPIDataByResponse.data.all_state_and_manufacturers!=undefined && Object.keys(const_var.editAPIDataByResponse.data.all_state_and_manufacturers).length>0)
                      response.data.data.filter(data=>{
                        if(data.id==params.p_s_n)
                        {
                          return data.manufacturer_list = const_var.editAPIDataByResponse.data.all_state_and_manufacturers[0].manufacturer_list.filter(data=>data.id==params.m_s_n)[0];
                        }  
                      });
                      
                  }
                  dispatch({
                      type:"setDealerStateList",
                      value : response.data
                  });
                  dispatch({
                      type: "SELECTED_TAB_STATE",
                      key: "statechange"     
                  });  
                
                  if(const_var.crmSetting.is_Edit==true)
                {
                  NewBuildingresponse['data'] = const_var.editAPIDataByResponse.data.building_data;
                  dispatch({
                      type: "DEFAULTBUILDINGDATA",
                      value: NewBuildingresponse
                  });
                  
                  dispatch({
                    type:"SELECTED_TAB_STATE",
                    key: "buildingtypetab"        
                  });  
                  Newresponse['data'] = const_var.editAPIDataByResponse.data.pricing_data;
                  Newresponse['success'] = true;
                  const_var.CallApionAction = true;  
                  const_var.UpdatedPriceData = const_var.editAPIDataByResponse.data.request_data.building;
                    dispatch({
                        type:"SETPRICINGDATA",
                        value : Newresponse
                    });
                    if((const_var.newLeanArr['left']!=undefined) && (const_var.newLeanArr['left'].leanto_type==1) && const_var.newLeanArr['left'].pricing_data && const_var.newLeanArr['left'].pricing_data != '')
                    {
                        NewLeanresponse['data'] = const_var.newLeanArr['left'].pricing_data;
                        NewLeanresponse['success'] = true;
                        const_var.UpdatedPriceData.leanto[const_var.newLeanArr['left'].main_index] = const_var.newLeanArr['left'];
                        dispatch({
                          type:"SETPRICINGDATAFORLEANTO",
                          value : NewLeanresponse,
                          str : "addLeftLean"
                        });
                        //cuBuilding.cPforLLeanOnly(const_var.leanGetDataLeft);
                    }
                    if((const_var.newLeanArr['right']!=undefined) && (const_var.newLeanArr['right'].leanto_type==2)  && const_var.newLeanArr['right'].pricing_data && const_var.newLeanArr['right'].pricing_data != '')
                    {
                        NewLeanresponse['data'] = const_var.newLeanArr['right'].pricing_data;
                        NewLeanresponse['success'] = true;
                        const_var.UpdatedPriceData.leanto[const_var.newLeanArr['right'].main_index] = const_var.newLeanArr['right'];
                        dispatch({
                          type:"SETPRICINGDATAFORLEANTO",
                          value : NewLeanresponse,
                          str : "addRightLean"
                        });
                        //cuBuilding.cPforRLeanOnly(const_var.leanGetDataRight);
                    }if((const_var.newLeanArr['front']!=undefined) && (const_var.newLeanArr['front'].leanto_type==3))
                    {
                        NewLeanresponse['data'] = const_var.newLeanArr['front'].pricing_data;
                        NewLeanresponse['success'] = true;
                        const_var.UpdatedPriceData.leanto[const_var.newLeanArr['front'].main_index] = const_var.newLeanArr['front'];
                        dispatch({
                          type:"SETPRICINGDATAFORLEANTO",
                          value : NewLeanresponse,
                          str : "addFrontLean"
                        });
      
                        //cuBuilding.cPforRLeanOnly(const_var.leanGetDataRight);
                    }if((const_var.newLeanArr['back']!=undefined) && (const_var.newLeanArr['back'].leanto_type==4))
                    {
                        NewLeanresponse['data'] = const_var.newLeanArr['back'].pricing_data;
                        NewLeanresponse['success'] = true;
                        const_var.UpdatedPriceData.leanto[const_var.newLeanArr['back'].main_index] = const_var.newLeanArr['back'];
                        dispatch({
                          type:"SETPRICINGDATAFORLEANTO",
                          value : NewLeanresponse,
                          str : "addBackLean"
                        });
                        //cuBuilding.cPforRLeanOnly(const_var.leanGetDataRight);
                    }
                    dispatch({type:"editActionAfterPreparingData",data:const_var.editAPIDataByResponse.data.building_data});
                    dispatch({type:"loadCupolaInEditMode",data:const_var.editAPIDataByResponse.data.request_data.building});
                    //const_var.hide_price_calculation = 0;
                  }
                }
                if(const_var.crmSetting.pre_quote_form == true && zipCode != undefined && zipCode != ''){
                  const_var.shippingState = const_var.stateNameAcordingAPI[params.p_s_n]
                }
                  })
                  .catch(function(error){
                    if(error.response.status != 200){
                      if(const_var.crmSetting.is_zipcode_screen != undefined && const_var.crmSetting.is_zipcode_screen == true){
                        const_var.showReportLoading = false
                      }
                      const_var.SApiCalled = true;
                      const_var.showStateField = true
                      dispatch(zipCodeError(error.response.data.message))
                      let userLoggedIn = localStorage.getItem('userData') ? true : false
                      if(error.response!=undefined && error.response.data!=undefined && error.response.data.status==false && const_var.crmSetting.pre_quote_form == true && const_var.loginSession == false && userLoggedIn == false)
                      {
                        dispatch(getDealerStateList());
                      }
                      if(const_var.crmSetting.pre_quote_form == true && zipCode != undefined && zipCode != ''){
                        const_var.shippingState = ''
                      }
                      // dispatch(updatePreQuoteErr(true));
                    }
                })
            })   
        }
      }
  }
}

export function logingFromCRM(access_token) {
   return (dispatch) => {
       const decoded = jwt_decode(access_token);

       const eventData = {
           data: {
               userdata: {
                   "name": decoded.first_name + " " + decoded.last_name,
                   "api_token": decoded.api_token,
                   "email": decoded.email,
                   "first_name": decoded.first_name,
                   "last_name": decoded.last_name,
                   "id": decoded.user_id,
                   "jwt_token": access_token
               }
           }
       }
       const loginApiData = { 'email': decoded.email, 'password': const_var.post_data['password'] };
       dispatch({
           type: "onSubmitLogin",
           event: eventData,
           data: loginApiData,
           key: "login"
       });
        if(const_var.crmSetting.is_zipcode_screen != undefined && const_var.crmSetting.is_zipcode_screen){
          if(const_var.loginSession == false){
            this.props.getDealerStateList(); 
          }
        }
        else{
          dispatch(getDealerStateList());
        }
   }

}
export function iframeEvent(eventData) {

   return (dispatch) => {

       dispatch({
           type: "iframeEvent",
           event: eventData,
       });
   }
}
export function resetErrMsg() {
   return (dispatch) => {
       dispatch({
           type: "resetErrMsg"
       });
   }
}

