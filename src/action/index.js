import { batch } from 'react-redux'
import { params, const_var,initialState,calcOverhangSize} from '../redux/reducers/reducer';
import * as Constant from  '../Constants/constant.js';
import * as cuComponent from '../redux/reducers/componentReducer';
import {getDealerStateList, resetErrMsg} from "./login.action.js";
import {GenrateBuildingDatatoServer} from "./leadcustomer.action.js";
import axios from 'axios';
import * as CenterBuildingArrows from '../_helper/UpdateArrow&Dimension';
import * as utils from '../redux/reducers/utils'
export function geDefaultBuildingDataForKlink(DomainURI) {
    if(const_var!=undefined && const_var.crmSetting.header_key==undefined)
    {
        const_var.crmSetting.header_key = {"x-api-key":"9vZYfym4VG99tLmdoqWYI8TYW01klRpr7ywM7SA5"};
        const_var.crmSetting.price_api_url = "https://api.senseicrm.com/";
    }
    const_var.showProcessLoaderchkEdit = true;
    let settingData = const_var.crmSetting;//document.getElementById('root').getAttribute('data');
    let apiData = {
        "api_token": const_var.crmSetting.api_token,
        "hash":DomainURI[1]
    };
    let apiUrl = const_var.crmSetting.api_post_url + '/api/v1/klink';
    let Newresponse = [];
    let NewBuildingresponse = [];
    return (dispatch) => {
        return axios.post(apiUrl, apiData).then(function (response) {
            if(response.data.status==false)
            {
                dispatch({
                    type:"ManageKlinkExpire",
                    value:response.data.message
                })
            }else{

            if (response.data.data.request_data == undefined) {
                response.data.data.request_data = [];
                response.data.data.request_data['building'] = response.data.data.form_data;
            }
            response.data.data.tax = {};
            response.data.data.building_images = [];
            response.data.data.personal_info = {
                "id": '',
                "first_name": 'rr',
                "last_name": '',
                "email": '',
                "email_2": '',
                "phone_no": '',
                "phone_no_2": '',
                "mobile_no": '',
                "source": '',
                "u_id": '',
                "address": [

                ]
            };
            if( response.data.data.pricing_data.cupola && Object.keys(response.data.data.pricing_data.cupola).length>0) {
                if (Array.isArray( response.data.data.pricing_data.cupola)){
                    response.data.data.pricing_data.cupola = {
                        "without_windows":  response.data.data.pricing_data.cupola.map(cupola => {
                            return {
                                "id": cupola.id,
                                "map_id": cupola["`map_id`"],
                                "structure": cupola.structure,
                                "cost": cupola.cost,
                                "name": "Without Windows",
                                "slug": "without_windows"
                            }
                        })
                    };
                }
              }
            if (response.data.data.pricing_data.garage_door_v3 != undefined && response.data.data.pricing_data.garage_door_v3.overhead_door_door != undefined) {  
                utils.manageOverheadDoorObject(response);
            }
            if((response.data.data.request_data.building!=undefined) && (response.data.data.request_data.building.manufacturer==2 || response.data.data.request_data.building.manufacturer==17) )
            {    
                var apiDataBuilding = {"manufacturer_id":response.data.data.request_data.building.manufacturer,"state_id":response.data.data.request_data.building.state};
                return axios.post(const_var.crmSetting.price_api_url+"get-building-data",apiDataBuilding,{"headers":const_var.crmSetting.header_key}).then((response1)=>{
                    //console.log(response,'response');
                    if(response1.data.data.default_building.filter(data=>data.heavy_snow==0).length==0)
                    {
                        const_var.CheckSnowLoadValue = 65;
                        const_var.noCursorClass = true;
                    }

                    response.data.data.building_data.color = response1.data.data.color;
                    response.data.data.building_data.color_object = response1.data.data.color_object;
                    response.data.data.building_data.garageDoorColor = response1.data.data.garageDoorColor;
                    response.data.data.building_data = response1.data.data;

                    let roofColor = response.data.data.building_data.color.find((color)=>response.data.data.request_data.building.roof_color.name == color.name)
                    if(roofColor != undefined){
                        response.data.data.request_data.building.roof_color.hex_value = roofColor.hex_value;
                        response.data.data.request_data.building.roof_color.red_value = roofColor.red_value;
                        response.data.data.request_data.building.roof_color.green_value = roofColor.green_value;
                        response.data.data.request_data.building.roof_color.blue_value = roofColor.blue_value;
                    }
                    let wallColor = response.data.data.building_data.color.find((color)=>response.data.data.request_data.building.wall_color.name == color.name)
                    if(wallColor != undefined){
                        response.data.data.request_data.building.wall_color.hex_value = wallColor.hex_value;
                        response.data.data.request_data.building.wall_color.red_value = wallColor.red_value;
                        response.data.data.request_data.building.wall_color.green_value = wallColor.green_value;
                        response.data.data.request_data.building.wall_color.blue_value = wallColor.blue_value;
                    }
                    let trimColor = response.data.data.building_data.color.find((color)=>response.data.data.request_data.building.trim_color.name == color.name)
                    if(trimColor != undefined){
                        response.data.data.request_data.building.trim_color.hex_value = trimColor.hex_value;
                        response.data.data.request_data.building.trim_color.red_value = trimColor.red_value;
                        response.data.data.request_data.building.trim_color.green_value = trimColor.green_value;
                        response.data.data.request_data.building.trim_color.blue_value = trimColor.blue_value;
                    }
                    
                    const_var.editAPIDataByResponse = response.data;
                    const_var.showFullPageLoader = false;
                    const_var.AllBuildingData.data = response.data.data.building_data;
                    const_var.AllBuildingData.success = true; 
                    const_var.AllBuildingData.message = 'success'; 
                    dispatch({
                        type: "SETDEFAULTCONFIGURATION",
                        value: response.data.data
                    });
                    dispatch(getDealerStateList());
                    Newresponse['data'] = response.data.data.pricing_data;
                    Newresponse['success'] = true;
                    //dispatch(setPricingData(response.data));
          
                })
            }else{  
                const_var.editAPIDataByResponse = response.data;
                const_var.showFullPageLoader = false;
                const_var.AllBuildingData.data = response.data.data.building_data;
                const_var.AllBuildingData.success = true; 
                const_var.AllBuildingData.message = 'success'; 
                dispatch({
                    type: "SETDEFAULTCONFIGURATION",
                    value: response.data.data
                });
                dispatch(getDealerStateList());
                Newresponse['data'] = response.data.data.pricing_data;
                Newresponse['success'] = true;
            }
            //dispatch(setPricingData(response.data));
          
                
            }

        })
            .catch(function (error) {
                console.log(error);
            })
    }

}
// export function geDefaultBuildingData()
// {
//     const_var.showProcessLoaderchkEdit = true;  
//     let settingData = const_var.crmSetting;//document.getElementById('root').getAttribute('data');
//     let apiData = "";
//     if(const_var.crmSetting.duplicate_module!='' && settingData.is_module_name=="inventory" && settingData.sub_module_id!="" && settingData.sub_module!='')
//     {
//         apiData = {"api_token":settingData.api_token,"module":settingData.is_module_name,"module_id":settingData.is_module_id,"sub_module_name":settingData.sub_module,"sub_module_id":settingData.sub_module_id};
//     }else
//     {
//         apiData = {"api_token":settingData.api_token,"module":settingData.is_module_name,"module_id":settingData.is_module_id};
//     }
    
//     let apiUrl = settingData.api_post_url+'/api/v1/order/edit';
//     let Newresponse = [];
//     let NewBuildingresponse = [];
//     return(dispatch) => {
//         return axios.post(apiUrl,apiData).then(function(response){
//             // console.log(response,"responseresponse" );
//             if(response.data.data.request_data==undefined)
//             {
//                 response.data.data.request_data = [];
//                 response.data.data.request_data['building'] = response.data.data.form_data;
//             }
//             if(const_var.crmSetting.duplicate_module!='' && settingData.is_module_name=="inventory")
//             {
//                 const_var.crmSetting.is_module_name = const_var.crmSetting.duplicate_module;
//             }
//             const_var.editAPIDataByResponse = response.data;
//             if(const_var.editAPIDataByResponse.data.building_data!=undefined && Object.keys(const_var.editAPIDataByResponse.data.building_data.length>0))
//             {
//                 const_var.editAPIDataByResponse.data.building_data.default_building.map((item,index)=>{
//                     let BuildingMainData = const_var.editAPIDataByResponse.data.building_data.building.filter(building => building.building_type.building_id == item.building_id);
//                     if(BuildingMainData.length==0)
//                     {
//                         const_var.editAPIDataByResponse.data.building_data.default_building.splice(index,1);
//                     }
//                 });
//             }
//             if((response.data.data.pricing_data.jtrim!=undefined) && response.data.data.pricing_data.jtrim.length==1)
//               {
//                  if(response.data.data.pricing_data.jtrim[0].type==undefined)
//                  {
//                     response.data.data.pricing_data.jtrim[0].type = 'side';
//                  }   
//               }
//             if((response.data.data.request_data.building!=undefined) && response.data.data.request_data.building.has_utility==true)
//             {
//                 response.data.data.request_data.building.utility_name = (response.data.data.request_data.building.utility_name==undefined)?'back':response.data.data.request_data.building.utility_name;
//             }  
//             //response.data.data.building_data;
//             const_var.ConditionArrForLean = [];
//             dispatch({
//                 type:"SETDEFAULTCONFIGURATION",
//                 value : response.data.data
//             });
//             dispatch(getDealerStateList());
//             Newresponse['data'] = response.data.data.pricing_data;
//             Newresponse['success'] = true;
//             dispatch(setPricingData(response));
            
            
//         })
//         .catch(function(error){
//             console.log(error);
//         })
//     }
    
// }

export function getCarportPricingData() {
    let apiData = {
        "api_token": "PSDCGcsMIbRaHqID1eXzCRiJLBl1BdAcUZrT4fbLvgLKiUq9AHw7riEaD9rWtRH8",
        "estimator_domain":"safewaysteel.com",
        "product_id":"MTYxNQ=="
    };
    let apiUrl = 'https://crm.senseicrm.com/api/v1/product/get'

    return (dispatch) => {
        return axios.post(apiUrl,apiData).then((response) => {
            console.log(response, "getCarportPricingData")
            dispatch({
                type: "getCarportPricingData",
                response: response.data
            })
        }).catch((err) => {
            console.log(err, "getCarportPricingData")
        })
    }


}

export function geDefaultBuildingData(key)
{   document.querySelector('body').classList.add('active-modal-loader')
    if(const_var!=undefined && const_var.crmSetting.header_key==undefined)
    {
        const_var.crmSetting.header_key = {"x-api-key":"9vZYfym4VG99tLmdoqWYI8TYW01klRpr7ywM7SA5"};
        const_var.crmSetting.price_api_url = "https://api.senseicrm.com/";
    }
    const_var.showProcessLoaderchkEdit = true;  
    let settingData = const_var.crmSetting;//document.getElementById('root').getAttribute('data');
    // let apiUrl = settingData.api_post_url+'/api/v1/order/edit';
    let new_product_id = const_var.crmSetting.crm_product_id;
    let newData = window.location.href.split("#/");
    if(window.location.href.split("#/").length==2)
    {
        new_product_id = newData[1]
    } 
    let apiData = {
        "api_token": const_var.crmSetting.api_token,//"13IMU4ZLF9WyrjRj6JuTfVRwGswQVmfBpO39w7bYvaFT93nbcTKE8PnUBv4bWMrM",
        "estimator_domain":const_var.crmSetting.main_domain_url,
        "product_id":new_product_id
    };
    let apiUrl = settingData.api_post_url+'/api/v1/product/get'
    let Newresponse = [];
    let NewBuildingresponse = [];
    const_var.noCursorClass = false;
    cuComponent.removeAlltheComponent()
    const_var.entry_points = []
    return(dispatch) => {
        return axios.post(apiUrl,apiData).then(function(response){
            // console.log(response,"responseresponse" );
                        if(response.data.data.request_data==undefined)
            {
                response.data.data.request_data = [];
                response.data.data.request_data['building'] = response.data.data.form_data;
            }
            if(response.data.data.pricing_data!=undefined)
            {
                if(response.data.data.pricing_data.window_frameout_v3!=undefined)
                {
                    Object.entries(response.data.data.pricing_data.window_frameout_v3).map(([key, value], index) => {
                        for (var i = 0; i < response.data.data.pricing_data.window_frameout_v3[key].length; i++) {
                            if(response.data.data.pricing_data.window_frameout_v3[key][i].name=="Man Door")
                            {
                                response.data.data.pricing_data.window_frameout_v3[key][i].name = "Standard";
                            }
                        }
                    })
                }
            }

            if (response.data.data.pricing_data.garage_door_v3 != undefined && response.data.data.pricing_data.garage_door_v3.overhead_door_door != undefined) {  
                utils.manageOverheadDoorObject(response);
            }


            if(const_var.crmSetting.duplicate_module!='' && settingData.is_module_name=="inventory")
            {
                const_var.crmSetting.is_module_name = const_var.crmSetting.duplicate_module;
            }
            if(const_var.crmSetting.duplicate_module=='inventory' && settingData.is_module_name=="order")
            {
                const_var.crmSetting.is_module_name = const_var.crmSetting.duplicate_module;
                params.display_product_status= "in_stock";
                response.data.data.request_data.status = params.display_product_status;
            }
            let checkImages = response.data.data.building_images?.filter(data=>data.is_checked!=undefined && data.is_checked==true);
            // if(checkImages.length>0)
            // {
            //     const_var.checkIsEditData = true;
            // }else{
                const_var.checkIsEditData = false;
            // }
            const_var.UpdatedPriceData.surcharge_amount = undefined;

            if((response.data.data.request_data.building!=undefined) && key !=undefined)
            {
                response.data.data.request_data.building.state = key
            }

            if(const_var.crmSetting.is_zipcode_screen != undefined && const_var.crmSetting.is_zipcode_screen == true && response.data.data.request_data != undefined && response.data.data.request_data.building != undefined && response.data.data.request_data.building.state_mfg_zipcode != undefined && response.data.data.request_data.building.state_mfg_zipcode != null && response.data.data.request_data.building.state_mfg_zipcode != ''){
                const_var.state_mfg_zipcode = response.data.data.request_data.building.state_mfg_zipcode
            }
            if(response.data.data!=undefined && response.data.data.request_data!=undefined &&  response.data.data.request_data.building!=undefined && response.data.data.request_data.building.old_permit_Fee!=undefined){
                const_var.exact_order_permit_fee = response.data.data.request_data.building.old_permit_Fee
                const_var.old_permit_Fee = response.data.data.request_data.building.old_permit_Fee
            }

            if((response.data.data.request_data.building!=undefined) && (response.data.data.request_data.building.manufacturer==2 || response.data.data.request_data.building.manufacturer==17) )
            {    

                if(response.data.data.request_data.building.order_extra_items!=undefined && response.data.data.request_data.building.order_extra_items.freight_fee!=undefined)
                {
                    response.data.data.request_data.building.order_extra_items.freight = response.data.data.request_data.building.order_extra_items.freight_fee;
                }
                // var apiDataBuilding = {"manufacturer_id":response.data.data.request_data.building.manufacturer,"state_id":response.data.data.request_data.building.state};
                // return axios.post(apiUrl,apiData).then((response1)=>{
                    
                    if(response.data.data.building_data.default_building.filter(data=>data.heavy_snow==0).length==0)
                    {
                        const_var.CheckSnowLoadValue = 65;
                        const_var.noCursorClass = true;
                    }
                    response.data.data.color = response.data.data.building_data.color;
                    response.data.data.color_object = response.data.data.building_data.color_object;
                    response.data.data.garageDoorColor = response.data.data.building_data.garageDoorColor;
                    // response.data.data.building_data = response.data.data;
                    const_var.editAPIDataByResponse = response.data;
                  
                    if((response.data.data.request_data.building!=undefined) && response.data.data.request_data.building.manufacturer==17 )
                    {
                        if(response.data.data.request_data.building.certificate!=undefined && response.data.data.pricing_data.certificate!=undefined)
                        {
                            if(response.data.data.request_data.building.certificate.name == "140 MPH + 50 PSF Certified")
                            {
                                response.data.data.request_data.building.certificate.name = "145 MPH + 50 PSF Certified";
                                response.data.data.request_data.building.certificate_name = "145 MPH + 50 PSF Certified";
                            }
                            if(response.data.data.pricing_data.certificate.length>0)
                            {
                                for(var i =0;i<=response.data.data.pricing_data.certificate.length-1;i++)
                                {
                                    if(response.data.data.pricing_data.certificate[i].name == "140 MPH + 50 PSF Certified")
                                    {
                                        response.data.data.pricing_data.certificate[i].name = "145 MPH + 50 PSF Certified";
                                    }
                                }
                            }
                            if(response.data.data.request_data.building.certificate.name !="" && response.data.data.request_data.building.width <30)
                            {
                                if(response.data.data.request_data.building.certificate.name == "115 MPH + 70 PSF Certified")
                                {
                                    response.data.data.request_data.building.certificate.name = "115 MPH + 65 PSF Certified";
                                    response.data.data.request_data.building.certificate_name = "115 MPH + 65 PSF Certified";
                                }if(response.data.data.request_data.building.certificate.name == "115 MPH + 40 PSF Certified")
                                {
                                    response.data.data.request_data.building.certificate.name = "115 MPH + 50 PSF Certified";
                                    response.data.data.request_data.building.certificate_name = "115 MPH + 50 PSF Certified";
                                }
                                if(response.data.data.request_data.building.certificate.name == "145 MPH + 35 PSF Certified")
                                {
                                    response.data.data.request_data.building.certificate.name = "30 PSF Certified";
                                    response.data.data.request_data.building.certificate_name = "30 PSF Certified";
                                }
                                if(response.data.data.request_data.building.certificate.name == "30 PSF Certified")
                                {
                                    response.data.data.request_data.building.certificate.name = "145 MPH + 30PSF Certified";
                                    response.data.data.request_data.building.certificate_name = "145 MPH + 30PSF Certified";
                                }
                                if(response.data.data.pricing_data.certificate.length>0)
                                {
                                    for(var i =0;i<=response.data.data.pricing_data.certificate.length-1;i++)
                                    {
                                        if(response.data.data.pricing_data.certificate[i].name == "115 MPH + 70 PSF Certified")
                                        {
                                            response.data.data.pricing_data.certificate[i].name = "115 MPH + 65 PSF Certified";
                                        }
                                        if(response.data.data.pricing_data.certificate[i].name == "115 MPH + 40 PSF Certified")
                                        {
                                            response.data.data.pricing_data.certificate[i].name = "115 MPH + 50 PSF Certified";
                                        }
                                        if(response.data.data.pricing_data.certificate[i].name == "145 MPH + 35 PSF Certified")
                                        {
                                            response.data.data.pricing_data.certificate[i].name = "30 PSF Certified";
                                        }
                                        if(response.data.data.pricing_data.certificate[i].name == "30 PSF Certified")
                                        {
                                            response.data.data.pricing_data.certificate[i].name = "145 MPH + 30PSF Certified";
                                        }
                                    }
                                }
                            }
                        }
                    }

                    if( response.data.data.pricing_data.cupola && Object.keys(response.data.data.pricing_data.cupola).length>0) {
                        if (Array.isArray( response.data.data.pricing_data.cupola)){
                            response.data.data.pricing_data.cupola = {
                                "without_windows":  response.data.data.pricing_data.cupola.map(cupola => {
                                    return {
                                        "id": cupola.id,
                                        "map_id": cupola["`map_id`"],
                                        "structure": cupola.structure,
                                        "cost": cupola.cost,
                                        "name": "Without Windows",
                                        "slug": "without_windows"
                                    }
                                })
                            };
                        }
                      }
                    if(const_var.editAPIDataByResponse.data.building_data!=undefined && Object.keys(const_var.editAPIDataByResponse.data.building_data.length>0))
                    {
                        const_var.editAPIDataByResponse.data.building_data.default_building.map((item,index)=>{
                            let BuildingMainData = const_var.editAPIDataByResponse.data.building_data.building.filter(building => building.building_type.building_id == item.building_id);
                            if(BuildingMainData.length==0)
                            {
                                const_var.editAPIDataByResponse.data.building_data.default_building.splice(index,1);
                            }
                        });
                    }
                    if((response.data.data.pricing_data.jtrim!=undefined) && response.data.data.pricing_data.jtrim.length==1)
                      {
                         if(response.data.data.pricing_data.jtrim[0].type==undefined)
                         {
                            response.data.data.pricing_data.jtrim[0].type = 'side';
                         }   
                      }
                    if((response.data.data.request_data.building!=undefined) && response.data.data.request_data.building.has_utility==true)
                    {
                        response.data.data.request_data.building.utility_name = (response.data.data.request_data.building.utility_name==undefined)?'back':response.data.data.request_data.building.utility_name;
                    } 
                    if(response.data.data.request_data.building.order_extra_items!=undefined && response.data.data.request_data.building.order_extra_items.freight_fee!=undefined)
                    {
                        response.data.data.request_data.building.order_extra_items.freight = response.data.data.request_data.building.order_extra_items.freight_fee;
                    }
                    const_var.AllBuildingData.data = response.data.data.building_data;
                    const_var.AllBuildingData.success = true; 
                    const_var.AllBuildingData.message = 'success'; 
                    //response.data.data.building_data;
                    response.data.data.personal_info = {
                            "id": '',
                            "first_name": '',
                            "last_name": '',
                            "email": '',
                            "email_2": '',
                            "phone_no": '',
                            "phone_no_2": '',
                            "mobile_no": '',
                            "source": '',
                            "u_id": '',
                            "address": [
            
                            ]
                        };
                    const_var.ConditionArrForLean = [];
                    dispatch({
                        type:"SETDEFAULTCONFIGURATION",
                        value : response.data.data
                    });
                    dispatch(getDealerStateList());
                    //const_var.hide_price_calculation = 0;
                    Newresponse['data'] = response.data.data.pricing_data;
                    Newresponse['success'] = true;
                    dispatch(setPricingData(response));
                    
                
                    
                // })

            }else{
                if((response.data.data.request_data.building!=undefined))
                {
                    if(response.data.data.pricing_data!=undefined && response.data.data.pricing_data.additional_features.length>0)
                    {
                        for(var i =0;i<=response.data.data.pricing_data.additional_features.length-1;i++)
                        {
                            if(response.data.data.pricing_data.additional_features[i].cost_type!=undefined)
                            {
                                if(response.data.data.pricing_data.additional_features[i].cost_type == "%" && (response.data.data.pricing_data.additional_features[i].percentage_of==null || response.data.data.pricing_data.additional_features[i].percentage_of==''))
                                {
                                    response.data.data.pricing_data.additional_features[i].cost_type = "$";
                                }
                            }
                        }
                    }
                    if(response.data.data.request_data.building.additionalFeaturesArray!=undefined)
                    {
                        response.data.data.request_data.building.additionalFeaturesArray.map((value,key)=>{
                                if(value != null)
                                {
                                    if(value.cost_type!=undefined)
                                    {
                                        if(value.cost_type == "%" && (value.percentage_of==null || value.percentage_of==''))
                                        value.cost_type = "$";
                                    }
                                }
                            }) 
                            
                        
                    }
                }
                /*Apply check For Certificate Manufacturer ID 4,5*/
               
                if((response.data.data.request_data.building!=undefined) && response.data.data.request_data.building.manufacturer==5)
                {
                    if(( response.data.data.request_data.building.state==4  || response.data.data.request_data.building.state==25 || response.data.data.request_data.building.state==33 || response.data.data.request_data.building.state==44 ))
                    {
                        if(response.data.data.request_data.building.certificate!=undefined && response.data.data.pricing_data.certificate!=undefined)
                        {
                            if(response.data.data.request_data.building.certificate.name == "130 MPH + 30 PSF Certified" || response.data.data.request_data.building.certificate.name =="30 PSF Snow Load Certified")
                            {
                                response.data.data.request_data.building.certificate.name = "105 MPH + 30 PSF Certified";
                                response.data.data.request_data.building.certificate_name = "105 MPH + 30 PSF Certified";
                                if(response.data.data.pricing_data.certificate.length>0)
                                {
                                    for(var i =0;i<=response.data.data.pricing_data.certificate.length-1;i++)
                                    {
                                        if(response.data.data.pricing_data.certificate[i].name == "130 MPH + 30 PSF Certified" || response.data.data.pricing_data.certificate[i].name =="30 PSF Snow Load Certified")
                                        {
                                            response.data.data.pricing_data.certificate[i].name = "105 MPH + 30 PSF Certified";
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                /*End check For Certificate*/

                /*Apply check For Certificate Manufacturer ID 4,5*/
               
                if((response.data.data.request_data.building!=undefined) && response.data.data.request_data.building.manufacturer==4)
                {
                    if(( response.data.data.request_data.building.state==2 || response.data.data.request_data.building.state==5 || response.data.data.request_data.building.state==39 || response.data.data.request_data.building.state==3 || response.data.data.request_data.building.state==16 || response.data.data.request_data.building.state==27 || response.data.data.request_data.building.state==32 || response.data.data.request_data.building.state==38 ))
                    {
                        if(response.data.data.request_data.building.certificate!=undefined && response.data.data.pricing_data.certificate!=undefined)
                        {
                            if(response.data.data.request_data.building.certificate.name == "130 MPH + 30 PSF Certified" || response.data.data.request_data.building.certificate.name =="30 PSF Snow Load Certified")
                            {
                                response.data.data.request_data.building.certificate.name = "105 MPH + 30 PSF Certified";
                                response.data.data.request_data.building.certificate_name = "105 MPH + 30 PSF Certified";
                                if(response.data.data.pricing_data.certificate.length>0)
                                {
                                    for(var i =0;i<=response.data.data.pricing_data.certificate.length-1;i++)
                                    {
                                        if(response.data.data.pricing_data.certificate[i].name == "130 MPH + 30 PSF Certified" || response.data.data.pricing_data.certificate[i].name =="30 PSF Snow Load Certified")
                                        {
                                            response.data.data.pricing_data.certificate[i].name = "105 MPH + 30 PSF Certified";
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                /*End check For Certificate*/

                if((response.data.data.request_data.building!=undefined) && response.data.data.request_data.building.manufacturer==19 )
                {
                    if(response.data.data.request_data.building.certificate!=undefined && response.data.data.pricing_data.certificate!=undefined)
                    {
                        if(response.data.data.request_data.building.certificate.name == "30 PSF Certified")
                        {
                            response.data.data.request_data.building.certificate.name = "Built to Local Code";
                            response.data.data.request_data.building.certificate_name = "Built to Local Code";
                            if(response.data.data.pricing_data.certificate.length>0)
                            {
                                for(var i =0;i<=response.data.data.pricing_data.certificate.length-1;i++)
                                {
                                    if(response.data.data.pricing_data.certificate[i].name == "30 PSF Certified")
                                    {
                                        response.data.data.pricing_data.certificate[i].name = "Built to Local Code";
                                    }
                                }
                            }
                            if(response.data.data.request_data.building.leanto.length>0)
                            {
                                for(var i =0;i<=response.data.data.request_data.building.leanto.length-1;i++)
                                {
                                    if(response.data.data.request_data.building.leanto[i].certificate.name === "30 PSF Certified")
                                    {
                                        response.data.data.request_data.building.leanto[i].certificate.name = "Built to Local Code";
                                    }
                                    for(var ii =0;ii<=response.data.data.request_data.building.leanto[i].pricing_data.certificate.length-1;ii++)
                                    {
                                        if(response.data.data.request_data.building.leanto[i].pricing_data.certificate[ii].name === "30 PSF Certified")
                                        {
                                            response.data.data.request_data.building.leanto[i].pricing_data.certificate[ii].name = "Built to Local Code";
                                        }
                                    }
                                    
                                }
                                
                            }
                        }
                        if(response.data.data.request_data.building.certificate.name === "Built To Local Code")
                        {
                            response.data.data.request_data.building.certificate.name = "Built to Local Code";
                            response.data.data.request_data.building.certificate_name = "Built to Local Code";
                            if(response.data.data.request_data.building.leanto.length>0)
                            {
                                for(var i =0;i<=response.data.data.request_data.building.leanto.length-1;i++)
                                {
                                    if(response.data.data.request_data.building.leanto[i].certificate.name === "Built to Local Code")
                                    {
                                        response.data.data.request_data.building.leanto[i].certificate.name = "Built To Local Code";
                                    }
                                    for(var ii =0;ii<=response.data.data.request_data.building.leanto[i].pricing_data.certificate.length-1;ii++)
                                    {
                                        if(response.data.data.request_data.building.leanto[i].pricing_data.certificate[ii].name === "Built to Local Code")
                                        {
                                            response.data.data.request_data.building.leanto[i].pricing_data.certificate[ii].name = "Built To Local Code";
                                        }
                                    }
                                    
                                }
                                
                            }
                            
                        }
                    }
                }
                if(response.data.data.building_data.default_building.filter(data=>data.heavy_snow==0).length==0)
                {
                    const_var.CheckSnowLoadValue = 65;
                    const_var.noCursorClass = true;
                }
                if(response.data.data.request_data.building != undefined && response.data.data.request_data.building.state == 31 && response.data.data.request_data.building.manufacturer==93 && response.data.data.module_id_string && response.data.data.module_id_string == "ODR-000011" && response.data.data.module_id && response.data.data.module_id=="akNKYVlPdVJsZ3FKZU9URk43NjJaUT09") {
                    if(response.data.data.request_data.building.ExtraItemsFeaturesArray!=undefined && response.data.data.request_data.building.ExtraItemsFeaturesArray.length>0)
                    {
                        if(response.data.data.pricing_data.extra_items != undefined && response.data.data.pricing_data.extra_items[0].checkbox.length == 0)
                        {
                            if( response.data.data.request_data.building.ExtraItemsFeaturesArray.length == 1 && response.data.data.request_data.building.extra_items.length == 1 )
                            {
                                if (response.data.data.request_data.building.ExtraItemsFeaturesArray[0].name == 'ground_certificate' && response.data.data.request_data.building.extra_items[0].other_item_name == 'ground_certificate') 
                                {
                                    response.data.data.request_data.building.ExtraItemsFeaturesArray = []; 
                                    response.data.data.request_data.building.extra_items = []; 
                                }
                            }
                        }
                    }
                }
                if((response.data.data.request_data.building!=undefined) && response.data.data.request_data.building.manufacturer==17 )
                {
                    if(response.data.data.request_data.building.certificate!=undefined && response.data.data.pricing_data.certificate!=undefined)
                    {
                        if(response.data.data.request_data.building.certificate.name == "140 MPH + 50 PSF Certified")
                        {
                            response.data.data.request_data.building.certificate.name = "145 MPH + 50 PSF Certified";
                            response.data.data.request_data.building.certificate_name = "145 MPH + 50 PSF Certified";
                        }
                        if(response.data.data.pricing_data.certificate.length>0)
                        {
                            for(var i =0;i<=response.data.data.pricing_data.certificate.length-1;i++)
                            {
                                if(response.data.data.pricing_data.certificate[i].name == "140 MPH + 50 PSF Certified")
                                {
                                    response.data.data.pricing_data.certificate[i].name = "145 MPH + 50 PSF Certified";
                                }
                            }
                        }
                        if(response.data.data.request_data.building.certificate.name !="" && response.data.data.request_data.building.width <30)
                        {
                            if(response.data.data.request_data.building.certificate.name == "115 MPH + 70 PSF Certified")
                            {
                                response.data.data.request_data.building.certificate.name = "115 MPH + 65 PSF Certified";
                                response.data.data.request_data.building.certificate_name = "115 MPH + 65 PSF Certified";
                            }if(response.data.data.request_data.building.certificate.name == "115 MPH + 40 PSF Certified")
                            {
                                response.data.data.request_data.building.certificate.name = "115 MPH + 50 PSF Certified";
                                response.data.data.request_data.building.certificate_name = "115 MPH + 50 PSF Certified";
                            }
                            if(response.data.data.request_data.building.certificate.name == "145 MPH + 35 PSF Certified")
                            {
                                response.data.data.request_data.building.certificate.name = "30 PSF Certified";
                                response.data.data.request_data.building.certificate_name = "30 PSF Certified";
                            }
                            if(response.data.data.request_data.building.certificate.name == "30 PSF Certified")
                            {
                                response.data.data.request_data.building.certificate.name = "145 MPH + 30PSF Certified";
                                response.data.data.request_data.building.certificate_name = "145 MPH + 30PSF Certified";
                            }
                            if(response.data.data.pricing_data.certificate.length>0)
                            {
                                for(var i =0;i<=response.data.data.pricing_data.certificate.length-1;i++)
                                {
                                    if(response.data.data.pricing_data.certificate[i].name == "115 MPH + 70 PSF Certified")
                                    {
                                        response.data.data.pricing_data.certificate[i].name = "115 MPH + 65 PSF Certified";
                                    }
                                    if(response.data.data.pricing_data.certificate[i].name == "115 MPH + 40 PSF Certified")
                                    {
                                        response.data.data.pricing_data.certificate[i].name = "115 MPH + 50 PSF Certified";
                                    }
                                    if(response.data.data.pricing_data.certificate[i].name == "145 MPH + 35 PSF Certified")
                                    {
                                        response.data.data.pricing_data.certificate[i].name = "30 PSF Certified";
                                    }
                                    if(response.data.data.pricing_data.certificate[i].name == "30 PSF Certified")
                                    {
                                        response.data.data.pricing_data.certificate[i].name = "145 MPH + 30PSF Certified";
                                    }
                                }
                            }
                        }
                    }
                }

                if( response.data.data.pricing_data.cupola && Object.keys(response.data.data.pricing_data.cupola).length>0) {
                    if (Array.isArray( response.data.data.pricing_data.cupola)){
                        response.data.data.pricing_data.cupola = {
                            "without_windows":  response.data.data.pricing_data.cupola.map(cupola => {
                                return {
                                    "id": cupola.id,
                                    "map_id": cupola["`map_id`"],
                                    "structure": cupola.structure,
                                    "cost": cupola.cost,
                                    "name": "Without Windows",
                                    "slug": "without_windows"
                                }
                            })
                        };
                    }
                  }
                if(response.data.data!==undefined){
                    response.data.data.personal_info = {
                        "id": '',
                        "first_name": '',
                        "last_name": '',
                        "email": '',
                        "email_2": '',
                        "phone_no": '',
                        "phone_no_2": '',
                        "mobile_no": '',
                        "source": '',
                        "u_id": '',
                        "address": [
        
                        ]
                    };
                }
                const_var.editAPIDataByResponse = response.data;
                if(const_var.editAPIDataByResponse.data.building_data!=undefined && Object.keys(const_var.editAPIDataByResponse.data.building_data.length>0))
                {
                    const_var.editAPIDataByResponse.data.building_data.default_building.map((item,index)=>{
                        let BuildingMainData = const_var.editAPIDataByResponse.data.building_data.building.filter(building => building.building_type.building_id == item.building_id);
                        if(BuildingMainData.length==0)
                        {
                            const_var.editAPIDataByResponse.data.building_data.default_building.splice(index,1);
                        }
                    });
                }
                if((response.data.data.pricing_data.jtrim!=undefined) && response.data.data.pricing_data.jtrim.length==1)
                {
                     if(response.data.data.pricing_data.jtrim[0].type==undefined)
                     {
                        response.data.data.pricing_data.jtrim[0].type = 'side';
                     }   
                }
                if((response.data.data.request_data.building!=undefined) && response.data.data.request_data.building.has_utility==true)
                {
                    response.data.data.request_data.building.utility_name = (response.data.data.request_data.building.utility_name==undefined)?'back':response.data.data.request_data.building.utility_name;
                }
                if(response.data.data.request_data.building.order_extra_items!=undefined && response.data.data.request_data.building.order_extra_items.freight_fee!=undefined)
                {
                    response.data.data.request_data.building.order_extra_items.freight = response.data.data.request_data.building.order_extra_items.freight_fee;
                }
                const_var.AllBuildingData.data = response.data.data.building_data;
                const_var.AllBuildingData.success = true; 
                const_var.AllBuildingData.message = 'success'; 
                const_var.duplicateTaxZipCode = response.data.data.request_data.building.tax_zipcode
                
                // if(response.data.data.pricing_data.overhang != undefined && ((response.data.data.pricing_data.overhang.end != undefined && response.data.data.pricing_data.overhang.end.length > 0) || (response.data.data.pricing_data.overhang.side != undefined && response.data.data.pricing_data.overhang.side.length > 0) || (response.data.data.pricing_data.overhang.both != undefined && response.data.data.pricing_data.overhang.both!= '' && response.data.data.pricing_data.overhang.both!= null)) && response.data.data.request_data.building.ExtraItemsFeaturesArray != undefined && response.data.data.request_data.building.ExtraItemsFeaturesArray.length > 0){

                if(response.data.data.request_data.building.ExtraItemsFeaturesArray != undefined && response.data.data.request_data.building.ExtraItemsFeaturesArray.length > 0){

                    let overhangOpt = response.data.data.request_data.building.ExtraItemsFeaturesArray.filter(obj => obj!= null && obj.name && obj.name == "overhang")
                    let endOverhang = []
                    let sideOverhang = ''
                    let bothOverhang = ''
                    let EndSize = 0.5;
                    let SideSize = 0.5;
                    let BothSize = 0.5;

                    endOverhang = overhangOpt.filter(obj => obj.label.toLowerCase().includes('end'));
                    sideOverhang = overhangOpt.filter(obj => obj.label.toLowerCase().includes('side'));
                    bothOverhang = overhangOpt.filter(obj => obj.label.toLowerCase().includes('both') && obj.sheet_type != undefined && obj.sheet_type == 'both');

                    if(response.data.data.pricing_data.overhang!=undefined && ((response.data.data.pricing_data.overhang.end != undefined && response.data.data.pricing_data.overhang.end.length > 0) || (response.data.data.pricing_data.overhang.side != undefined && response.data.data.pricing_data.overhang.side.length > 0) || (response.data.data.pricing_data.overhang.both != undefined && response.data.data.pricing_data.overhang.both!= '' && response.data.data.pricing_data.overhang.both!= null))){

                        // EndSize = endOverhang.length > 0 ? calcOverhangSize(endOverhang[0].sheet_name) : 0.5
                        // SideSize = sideOverhang.length > 0 ? calcOverhangSize(sideOverhang[0].sheet_name) : 0.5
                        // BothSize = bothOverhang.length > 0 ? calcOverhangSize(bothOverhang[0].sheet_name) : 0.5
                        EndSize = endOverhang.length > 0 ? calcOverhangSize(endOverhang!=undefined && endOverhang[0].sheet_name ? endOverhang[0].sheet_name : endOverhang[0].name) : 0.5
                        SideSize = sideOverhang.length > 0 ? calcOverhangSize(sideOverhang!=undefined && sideOverhang[0].sheet_name ? sideOverhang[0].sheet_name : sideOverhang[0].name) : 0.5
                        BothSize = bothOverhang.length > 0 ? calcOverhangSize(bothOverhang!=undefined && bothOverhang[0].sheet_name ? bothOverhang[0].sheet_name : bothOverhang[0].name) : 0.5
                        // EndSize = endOverhang.length > 0 ? endOverhang[0].sheet_name.split(`'`)[0] : 0.5
                        // SideSize = sideOverhang.length > 0 ? sideOverhang[0].sheet_name.split(`'`)[0] : 0.5
                        // BothSize = bothOverhang.length > 0 ? bothOverhang[0].sheet_name.split(`'`)[0] : 0.5

                        params.o_v_h_n_g = (SideSize != 0.5 || BothSize != 0.5) ? true : false
                        params.o_v_h_n_g_e = (EndSize != 0.5 || BothSize != 0.5) ? true : false
                    }
                    else{
                        EndSize = endOverhang.length > 0 ? 1 : 0.5
                        SideSize = sideOverhang.length > 0 ? 1 : 0.5
                        BothSize = bothOverhang.length > 0 ? 1 : 0.5
                    }                   
                    const_var.isOverhang = {
                        'end' : {
                            isChecked: endOverhang.length > 0 ? true : false,
                            selected: endOverhang.length > 0 ? (endOverhang[0].sheet_name ? endOverhang[0].sheet_name : endOverhang[0].label) : '',
                            size: bothOverhang.length > 0 ? 1 : EndSize
                        },
                        'side' : {
                            isChecked: sideOverhang.length > 0 ? true : false,
                            selected: sideOverhang.length > 0 ? (sideOverhang[0].sheet_name ? sideOverhang[0].sheet_name : sideOverhang[0].label) : '',
                            size: bothOverhang.length > 0 ? 1 : SideSize
                        },
                        'both' : {
                            isChecked: bothOverhang.length > 0 ? true : false,
                            selected: bothOverhang.length > 0 ? (bothOverhang[0].sheet_name ? bothOverhang[0].sheet_name : bothOverhang[0].label) : '',
                            size: BothSize
                        }
                    }
                }
                //response.data.data.building_data;
                const_var.ConditionArrForLean = [];
                dispatch({
                    type:"SETDEFAULTCONFIGURATION",
                    value : response.data.data
                });
                dispatch(getDealerStateList());
               
                Newresponse['data'] = response.data.data.pricing_data;
                Newresponse['success'] = true;
                dispatch(setPricingData(response)); 
            }
            // console.log(response.data.data,'response.data.data')
            
            
            
        })
        .catch(function(error){
            console.log(error);
        })
    }
    
}

export function SetBuildingAccordingToComparission(parVal)
{
        if(const_var!=undefined && const_var.crmSetting.header_key==undefined)
    {
        const_var.crmSetting.header_key = {"x-api-key":"9vZYfym4VG99tLmdoqWYI8TYW01klRpr7ywM7SA5"};
        const_var.crmSetting.price_api_url = "https://api.senseicrm.com/";
    }
    cuComponent.removeAlltheComponent();
    cuComponent.removeAllCupolas();
    params.showCompareMnfList_1 = params.showCompareMnfList_2 = false;
    params.m_n_f_1 = params.m_n_f_2 = "Select";
    const_var.crmSetting.is_Edit = true;
    const_var.isInsulaltionForOldQuotes = false;
    const_var.isPriceAPIcalled = false;
    const_var.showProcessLoaderchkEdit = true;  
    const_var.checkPickThisBuilding = true;  
    const_var.isBreezewayPickThisBuilding = true;  
    let settingData = const_var.crmSetting;//document.getElementById('root').getAttribute('data');
    let Newresponse = [];
    let NewBuildingresponse = [];
    const_var.defaultBuildingArr = [];
    const_var.DistanceArr = [];
    const_var.ConditionArr = [];
    const_var.entry_points = [];
    const_var.garageDoorColor = [];
    const_var.newLeanArr = [];
    params.o_v_h_n_g=params.o_v_h_n_g_e=false
    
    return(dispatch) => {
        
            // console.log(response,"responseresponse" );
            if(const_var.crmSetting.duplicate_module!='' && settingData.is_module_name=="inventory")
            {
                const_var.crmSetting.is_module_name = const_var.crmSetting.duplicate_module;
            }
            const_var.ComparisionDataArray[parVal].tax = {};
            const_var.ComparisionDataArray[parVal].building_images = [];

            if(const_var.ComparisionDataArray[parVal].personal_info==undefined)
            {
                const_var.ComparisionDataArray[parVal].personal_info = {
                    "id": const_var.ComparisionDataArray[parVal].request_data.id,
                    "first_name": const_var.ComparisionDataArray[parVal].request_data.first_name,
                    "last_name": const_var.ComparisionDataArray[parVal].request_data.last_name,
                    "email": const_var.ComparisionDataArray[parVal].request_data.email,
                    "email_2": const_var.ComparisionDataArray[parVal].request_data.email_2,
                    "phone_no": const_var.ComparisionDataArray[parVal].request_data.phone_no,
                    "phone_no_2": const_var.ComparisionDataArray[parVal].request_data.phone_no,
                    "mobile_no": const_var.ComparisionDataArray[parVal].request_data.mobile_no,
                    "source": const_var.ComparisionDataArray[parVal].request_data.lead_source,
                    "u_id": const_var.ComparisionDataArray[parVal].request_data.u_id,
                    "address": const_var.ComparisionDataArray[parVal].request_data.address,
                };
            }
            // const_var.editAPIDataByResponse = {data:{}}
            let response = {};
            response.status = true;
            const_var.ComparisionDataArray[parVal].paramsData.params_cancel = {};
            if(const_var.stateManufacturerAcordingAPIDiscount['surcharge']!=undefined && const_var.stateManufacturerAcordingAPIDiscount['surcharge'][const_var.ComparisionDataArray[parVal].paramsData.m_s_n]==undefined )
            {
                const_var.ComparisionDataArray[parVal].request_data.building.surchargeFees = 0;
                const_var.ComparisionDataArray[parVal].request_data.building.surcharge_amount = 0;
                const_var.ComparisionDataArray[parVal].request_data.building.order_extra_items['surchargeFees'] = 0;
            }
            // console.log(const_var.ComparisionDataArray,parVal,"const_var.ComparisionDataArray[parVal]")
            // console.log(const_var.ComparisionDataArray[parVal], "const_var.ComparisionDataArray[parVal]" ,const_var.ComparisionDataArray[parVal].request_data.building.entry_points )
            if(const_var.ComparisionDataArray[parVal].request_data.building.entry_points.length > 0 ){
                for (let key in const_var.ComparisionDataArray[parVal].request_data.building.entry_points){
                    if ((const_var.ComparisionDataArray[parVal].request_data.building.entry_points[key].parent_array_key != undefined) && (const_var.ComparisionDataArray[parVal].request_data.building.entry_points[key].parent_array_key == "Garage")){
                        delete const_var.ComparisionDataArray[parVal].request_data.building.entry_points[key].isHeaderSeal
                        delete const_var.ComparisionDataArray[parVal].request_data.building.entry_points[key].isCertified
                        delete const_var.ComparisionDataArray[parVal].request_data.building.entry_points[key].isChainHoist
                        delete const_var.ComparisionDataArray[parVal].request_data.building.entry_points[key].isAutomaticOpeners
                        delete const_var.ComparisionDataArray[parVal].request_data.building.entry_points[key].isEndWallInstallationFee
                        delete const_var.ComparisionDataArray[parVal].request_data.building.entry_points[key].isSideWallInstallationFee
                    }
                }
            }

            // console.log( const_var.ComparisionDataArray[parVal].request_data.building.entry_points,"entry_points");
            response.data = JSON.parse(JSON.stringify(const_var.ComparisionDataArray[parVal]));
            
            const_var.editAPIDataByResponse.data = const_var.ComparisionDataArray[parVal];
            const_var.stateChangeflag = const_var.ComparisionDataArray[parVal].paramsData.p_s_n;
            const_var.stateMenuChangeflag = const_var.ComparisionDataArray[parVal].paramsData.m_s_n;
            const_var.AllBuildingData.data = const_var.editAPIDataByResponse.data.building_data;
            const_var.AllBuildingData.success = true; 
            const_var.AllBuildingData.message = 'success'; 
            const pricingData = JSON.parse(JSON.stringify(const_var.editAPIDataByResponse.data.pricing_data));

            if (const_var.editAPIDataByResponse.data.building_data.garageDoorColor.length > 0) {
                for (var i = 0; i <= const_var.editAPIDataByResponse.data.building_data.garageDoorColor.length - 1; i++) {
                    const_var.garageDoorColor[const_var.editAPIDataByResponse.data.building_data.garageDoorColor[i].id] = const_var.editAPIDataByResponse.data.building_data.garageDoorColor[i];
                }
            } else {
                const_var.garageDoorColor[params.g_d_c_Obj.id] = params.g_d_c_Obj;
            }
            
            if((const_var.editAPIDataByResponse.data.pricing_data.roof_pitch!=undefined) && const_var.editAPIDataByResponse.data.pricing_data.roof_pitch.length>0)
            {
                const_var.BuildingRoofPitch = [];
                for(var i= 0; i <=  const_var.editAPIDataByResponse.data.pricing_data.roof_pitch.length -1; i++ ){
                    const_var.BuildingRoofPitch[const_var.editAPIDataByResponse.data.pricing_data.roof_pitch[i].roof_pitch] = const_var.editAPIDataByResponse.data.pricing_data.roof_pitch[i].roof_pitch.replace("/", "");
                }

                let leanData = const_var.editAPIDataByResponse.data.request_data.building.leanto
                if(leanData.length>0){
                   const_var.BuildingLRoofPitch = [];
                   for ( var i=0; i <= leanData.length-1; i++ ) {
                       for (var j=0; j <= leanData[i].pricing_data.roof_pitch.length - 1; j++) {
                          const_var.BuildingLRoofPitch[leanData[i].pricing_data.roof_pitch[j].roof_pitch] = leanData[i].pricing_data.roof_pitch[j].roof_pitch.replace("/","");
                       }
                   }
                } 

            }
            if(const_var.editAPIDataByResponse.data.building_data!=undefined && Object.keys(const_var.editAPIDataByResponse.data.building_data.length>0))
            {
                const_var.editAPIDataByResponse.data.building_data.default_building.map((item,index)=>{
                    let BuildingMainData = const_var.editAPIDataByResponse.data.building_data.building.filter(building => building.building_type.building_id == item.building_id);
                    if(BuildingMainData.length==0)
                    {
                        const_var.editAPIDataByResponse.data.building_data.default_building.splice(index,1);
                    }
                });
            }
            if((const_var.editAPIDataByResponse.data.pricing_data.jtrim!=undefined) && const_var.editAPIDataByResponse.data.pricing_data.jtrim.length==1)
              {
                 if(const_var.editAPIDataByResponse.data.pricing_data.jtrim[0].type==undefined)
                 {
                    const_var.editAPIDataByResponse.data.pricing_data.jtrim[0].type = 'side';
                 }   
              }

              let newObjData = JSON.parse(JSON.stringify(const_var.additionalFeaturesArray));
              const_var.additionalFeaturesArray = const_var.editAPIDataByResponse.data.pricing_data.additional_features;
              if(const_var.editAPIDataByResponse.data.request_data.building.additional_features==undefined)
              {
                const_var.additionalFeaturesArray.map((value,key)=>{
                    newObjData.map((data,index)=>{
                        if(data != null && data.additional_feature==value.additional_feature)
                        {
                            const_var.additionalFeaturesArray[key].is_checked = data.is_checked;
                            const_var.UpdatedPriceData['elements'][const_var.additionalFeaturesArray[key].additional_feature.toString()] = undefined;
                        }
                    }) 
                    
                })
               
             }
            const_var.ComparisionDataArray[parVal].request_data.building.additionalFeaturesArray = const_var.additionalFeaturesArray;
             
            const checkBoxExtraItems = JSON.parse(JSON.stringify(const_var.ExtraItemsFeaturesArray));
            let newExtraItemsCheckbox = [];
            const certificate = const_var.editAPIDataByResponse.data.request_data.building.certificate;
           
            if(
                (const_var.editAPIDataByResponse.data.pricing_data.extra_items) && const_var.editAPIDataByResponse.data.pricing_data.extra_items.length>0 && const_var.editAPIDataByResponse.data.pricing_data.extra_items[0].checkbox!=undefined && const_var.editAPIDataByResponse.data.pricing_data.extra_items[0].checkbox.length>0
                ||
                (
                    const_var.editAPIDataByResponse.data.pricing_data.overhang != undefined && (
                        (const_var.editAPIDataByResponse.data.pricing_data.overhang.end != undefined && const_var.editAPIDataByResponse.data.pricing_data.overhang.end.length != 0) || 
                        (const_var.editAPIDataByResponse.data.pricing_data.overhang.side != undefined && const_var.editAPIDataByResponse.data.pricing_data.overhang.side.length != 0) || 
                        (const_var.editAPIDataByResponse.data.pricing_data.overhang.both != undefined && const_var.editAPIDataByResponse.data.pricing_data.overhang.both != null && const_var.editAPIDataByResponse.data.pricing_data.overhang.both != '')
                    )
                )
            ) {
                if(const_var.editAPIDataByResponse.data.pricing_data.extra_items[0].checkbox!=undefined && const_var.editAPIDataByResponse.data.pricing_data.extra_items[0].checkbox.length>0) {
                        pricingData.extra_items[0].checkbox.forEach( (currentItem,index) => {
                            let oldItem = checkBoxExtraItems.find(oldItem => oldItem && oldItem.label === currentItem.label);
                            // let isCalcBoth = false
                        if(oldItem == undefined && currentItem.name == "overhang"){
                            let lblOnly = currentItem.label.includes(`"`) ? currentItem.label.split(`"`)[1] : currentItem.label.split(`'`)[1];                           
                            lblOnly = lblOnly.toLowerCase()

                            let isBothOverhang = checkBoxExtraItems.filter(obj=> obj && obj.sheet_type != undefined && obj.sheet_type == 'both')
                            if(isBothOverhang.length!= 0){
                                oldItem = isBothOverhang[0]
                            }
                            else{
                                oldItem = checkBoxExtraItems.filter(obj => obj && obj.label != undefined && obj.label.toLowerCase().includes(lblOnly));
                                oldItem = oldItem[0]
                            }
                            // if(currentItem.label.includes('end')){
                            //     oldItem = checkBoxExtraItems.find(oldItem => oldItem && oldItem.label);
                            // }
                            // if(currentItem.label.includes('side')){}
                        }

                                                if(currentItem.name != 'overhang' || (currentItem.name == 'overhang' && (const_var.editAPIDataByResponse.data.pricing_data.overhang == undefined || (const_var.editAPIDataByResponse.data.pricing_data.overhang != undefined && const_var.editAPIDataByResponse.data.pricing_data.overhang.end.length == 0 && const_var.editAPIDataByResponse.data.pricing_data.overhang.side.length == 0 && (const_var.editAPIDataByResponse.data.pricing_data.overhang.both == '' || const_var.editAPIDataByResponse.data.pricing_data.overhang.both == null))))){

                            if (oldItem) {
                                currentItem.is_checked = oldItem.is_checked;
                                currentItem.quantity = oldItem.quantity;
                                if (currentItem.label == "4ft on Center" && currentItem.cost == 0 && oldItem.cost != 0){
                                    const fourFeetExtraItem = const_var.ComparisionDataArray[parVal].request_data.building.extra_items.find(exIt => exIt.item_name == "4ft on Center");
                                    currentItem.cost = fourFeetExtraItem ? fourFeetExtraItem.item_price : oldItem.cost;
                                }
                                if (currentItem.label == "4ft on Center" && certificate && certificate.distance_on_center && certificate.distance_on_center == 4){
                                    currentItem.cost = 0;
                                }
                                const_var.extraItemsFeaturesCost[index] = currentItem.cost;

                                if(currentItem.name == 'overhang'){
                                    let oType = oldItem.label.toLowerCase().includes('sides') ? 'side' : 'end'
                                    if(oType == 'end'){
                                        params.o_v_h_n_g_e = true;
                                        const_var.isOverhang['end'] = {
                                            isChecked: true,
                                            selected: oldItem.label,
                                            size: 1
                                        }
                                    }
                                    if(oType == 'side'){
                                        params.o_v_h_n_g = true;
                                        // const_var.isOverhang.side.isChecked = true
                                        const_var.isOverhang['side'] = {
                                            isChecked: true,
                                            selected: oldItem.label,
                                            size: 1
                                        }
                                    }
                                }
                            } else {
                                currentItem = null;
                                const_var.extraItemsFeaturesCost[index] = null;
                            }

                            
                            newExtraItemsCheckbox.push(currentItem);
                        }
                    });   
                }              
                if(pricingData.overhang != undefined && ((pricingData.overhang.end != undefined && pricingData.overhang.end.length != 0) || (pricingData.overhang.side != undefined && pricingData.overhang.side.length != 0) || (pricingData.overhang.both != undefined && pricingData.overhang.both != null && pricingData.overhang.both != ''))){
                    let oldItem = ''

                    let isCommon=''

                    if(pricingData.overhang.end != undefined && pricingData.overhang.end.length != 0){
                        // let currIdx = pricingData.overhang.side != undefined && pricingData.overhang.side.length != 0 ? pricingData.extra_items[0].checkbox.length + 1 : pricingData.extra_items[0].checkbox.length
                        // let currIdx = pricingData.overhang.end != undefined && pricingData.overhang.end.length != 0 ? pricingData.extra_items[0].checkbox.length + 1 : pricingData.extra_items[0].checkbox.length
                        let currIdx = pricingData.extra_items[0].checkbox.length > 0 ? pricingData.extra_items[0].checkbox.length  : 0
                        let oldItem = checkBoxExtraItems.filter(obj => obj && (obj.label.toLowerCase().includes('end') || obj.sheet_type =="both"))
                        
                        oldItem = oldItem.length > 0 ? oldItem[0] : ''
                        // if(oldItem != ''){
                        //     // let size = oldItem.label.split(`'`)[0]        
                        //     let size = calcOverhangSize(oldItem.label)       
                        //     let currentItem = parseInt(size) > 1 && pricingData.overhang.end.length > 1 ? pricingData.overhang.end[parseInt(size) - 1] : pricingData.overhang.end[0]
                        //     // let currentItem = size == 2 && pricingData.overhang.end.length == 2 ? pricingData.overhang.end[1] : pricingData.overhang.end[0]

                        //     if (oldItem && oldItem != '') {
                        //         currentItem.is_checked = oldItem.is_checked;
                        //         currentItem.quantity = oldItem.quantity;
                        //         const_var.extraItemsFeaturesCost[currIdx] = currentItem.cost;
                        //     } else {
                        //         currentItem = null;
                        //         const_var.extraItemsFeaturesCost[currIdx] = null;
                        //     }
                        //     // newExtraItemsCheckbox.push(currentItem);
                        //     newExtraItemsCheckbox[currIdx] = currentItem
                        // }
                        if(oldItem != ''){
                            // let size = oldItem.label.split(`'`)[0]
                            let size = calcOverhangSize(oldItem.label)
                            
                            // let selObj = pricingData.overhang.side.filter(obj => obj.sheet_name && obj.sheet_name.includes(`"` ? calcOverhangSize(obj.sheet_name) == size : obj.sheet_name))

                            let selobj = pricingData.overhang.end[0]
                            if(oldItem.sheet_type != undefined && oldItem.sheet_type != '' && oldItem.sheet_type != null && oldItem.sheet_type =='both'){
                                let endData = pricingData.overhang.end.filter(obj => obj.sheet_name.split(`'`)[0] == 1)
                               
                                if(pricingData.overhang.side != undefined && pricingData.overhang.side.length != 0){
                                    let sideData = pricingData.overhang.side.filter(obj => obj.sheet_name.split(`'`)[0] == 1)
                                    if(sideData.length > 0 && endData.length > 0){
                                        selobj = endData[0]
                                    }
                                    else{
                                        pricingData.overhang.side.map((sItem)=>{
                                            if(isCommon == ''){
                                                let endData = pricingData.overhang.end.filter(obj => obj.sheet_name.split(`'`)[0] == sItem.sheet_name.split(`'`)[0])
                                                // sideData = endData.length > 0 ? sItem : ''
                                                isCommon = endData.length > 0 ? endData[0].sheet_name.split(`'`)[0] : ''
                                                if(endData.length > 0){
                                                    selobj = endData[0]
                                                }
                                            }
                                        })
                                    }
                                }
                                else{
                                    selobj=  endData.length > 0 ? endData[0] : pricingData.overhang.end[0]
                                }
                            }
                            else{
                                if (pricingData.overhang.end.length > 1) {
                                    selobj = pricingData.overhang.end.filter(obj => {
                                        if (obj.sheet_name) {
                                            if (obj.sheet_name.includes(`"`)) {
                                                let Objsize = calcOverhangSize(obj.sheet_name)
                                                return size == Objsize
                                            }
                                            else {
                                                let Objsize = obj.sheet_name.split(`'`)[0]
                                                return size == Objsize
                                            }
                                        }
                                    })
                                    selobj = selobj.length > 0 ? selobj[0] : pricingData.overhang.end[0]
                                }
                            }
                            let currentItem = selobj
                            // let currentItem = size == 2 && pricingData.overhang.end.length == 2 ? pricingData.overhang.end[1] : pricingData.overhang.end[0]
                            if (oldItem && oldItem != '') {
                                currentItem['is_checked'] = oldItem.is_checked;
                                currentItem['quantity'] = oldItem.quantity;
                                const_var.extraItemsFeaturesCost[currIdx] = currentItem.cost;
                            } else {
                                currentItem = null;
                                const_var.extraItemsFeaturesCost[currIdx] = null;
                            }
                            // newExtraItemsCheckbox.push(currentItem);

                            // let curridx= pricingData.overhang.end != undefined && pricingData.overhang.end.length != 0 ? pricingData.extra_items[0].checkbox.length + 1 : pricingData.extra_items[0].checkbox.length

                            newExtraItemsCheckbox[currIdx] = currentItem
                            // "value": value.sheet_name == "2' end Overhang" ? "2' Overhang on ends" : "1' Overhang on ends",
                            // "label": value.sheet_name == "2' end Overhang" ? "2' Overhang on ends" : "1' Overhang on ends"
                           
                            if(const_var.isOverhang && const_var.isOverhang.end.isChecked == true){
                                const_var.isOverhang.end['selected'] = currentItem.sheet_name
                                const_var.isOverhang.end['size'] = calcOverhangSize(currentItem.sheet_name)
                            }
                        }
                        if(const_var.isOverhang && const_var.isOverhang.end.isChecked == true){
                            params.o_v_h_n_g_e = true
                        }
                    }
                    if(pricingData.overhang.side != undefined && pricingData.overhang.side.length != 0){
                        let currIdx = pricingData.overhang.end != undefined && pricingData.overhang.end.length != 0 ? pricingData.extra_items[0].checkbox.length + 1 : pricingData.extra_items[0].checkbox.length
                        let oldItem = checkBoxExtraItems.filter(obj => obj && (obj.label.toLowerCase().includes('side') || obj.sheet_type =="both"))
                        oldItem = oldItem.length > 0 ? oldItem[0] : ''

                        if(oldItem != ''){
                            // let size = oldItem.label.split(`'`)[0]
                            let size = calcOverhangSize(oldItem.label)
                            
                            // let selObj = pricingData.overhang.side.filter(obj => obj.sheet_name && obj.sheet_name.includes(`"` ? calcOverhangSize(obj.sheet_name) == size : obj.sheet_name))

                            let selobj = pricingData.overhang.side[0]
                            if(oldItem.sheet_type != undefined && oldItem.sheet_type != '' && oldItem.sheet_type != null && oldItem.sheet_type =='both'){
                                let sideData = pricingData.overhang.side.filter(obj => obj.sheet_name.split(`'`)[0] == 1)
                             
                                if(pricingData.overhang.end != undefined && pricingData.overhang.end.length != 0){
                                    let endData = pricingData.overhang.end.filter(obj => obj.sheet_name.split(`'`)[0] == 1)
                                    if(endData.length > 0 && sideData.length > 0){
                                        selobj = sideData[0]
                                    }
                                    else{
                                        pricingData.overhang.end.map((sItem)=>{
                                            if(isCommon == ''){
                                                let sideData = pricingData.overhang.side.filter(obj => obj.sheet_name.split(`'`)[0] == sItem.sheet_name.split(`'`)[0])
                                                // endData = sideData.length > 0 ? sItem : ''
                                                isCommon = sideData.length > 0 ? sideData[0].sheet_name.split(`'`)[0] : ''
                                                if(sideData.length > 0){
                                                    selobj = sideData[0]
                                                }
                                            }
                                            else{
                                                if(isCommon != ''){
                                                    sideData = pricingData.overhang.side.filter(obj => obj.sheet_name.split(`'`)[0] == isCommon)
                                                    if(sideData.length > 0){
                                                        selobj = sideData[0]
                                                    }
                                                }
                                            }
                                        })
                                    }
                                }
                                else{
                                    selobj=  sideData.length > 0 ? sideData[0] : pricingData.overhang.side[0]
                                }
                            }
                            else{
                                if (pricingData.overhang.side.length > 1) {
                                    selobj = pricingData.overhang.side.filter(obj => {
                                        if (obj.sheet_name) {
                                            if (obj.sheet_name.includes(`"`)) {
                                                let Objsize = calcOverhangSize(obj.sheet_name)
                                                return size == Objsize
                                            }
                                            else {
                                                let Objsize = obj.sheet_name.split(`'`)[0]
                                                return size == Objsize
                                            }
                                        }
                                    })
                                    selobj = selobj.length > 0 ? selobj[0] : pricingData.overhang.side[0]
                                }
                            }

                            let currentItem = selobj
                            // let currentItem = size == 2 && pricingData.overhang.side.length == 2 ? pricingData.overhang.side[1] : pricingData.overhang.side[0]
                            if (oldItem && oldItem != '') {
                                currentItem['is_checked'] = oldItem.is_checked;
                                currentItem['quantity'] = oldItem.quantity;
                                const_var.extraItemsFeaturesCost[currIdx] = currentItem.cost;
                            } else {
                                currentItem = null;
                                const_var.extraItemsFeaturesCost[currIdx] = null;
                            }
                            // newExtraItemsCheckbox.push(currentItem);

                            // let curridx= pricingData.overhang.end != undefined && pricingData.overhang.end.length != 0 ? pricingData.extra_items[0].checkbox.length + 1 : pricingData.extra_items[0].checkbox.length

                            newExtraItemsCheckbox[currIdx] = currentItem
                            // "value": value.sheet_name == "2' Side Overhang" ? "2' Overhang on Sides" : "1' Overhang on Sides",
                            // "label": value.sheet_name == "2' Side Overhang" ? "2' Overhang on Sides" : "1' Overhang on Sides"
                           
                            if(const_var.isOverhang && const_var.isOverhang.side.isChecked == true){
                                const_var.isOverhang.side['selected'] = currentItem.sheet_name
                                const_var.isOverhang.side['size'] = calcOverhangSize(currentItem.sheet_name)
                            }
                        }

                        if(const_var.isOverhang && const_var.isOverhang.side.isChecked == true){
                            params.o_v_h_n_g = true
                        }
                    }
                    if(pricingData.overhang.both != undefined && pricingData.overhang.both != null && pricingData.overhang.both != ''){
                        let currentItem = pricingData.overhang.both
                        oldItem = checkBoxExtraItems.find(oldItem => oldItem && oldItem.label.toLowerCase().includes('overhang'));
                        let currIdx= pricingData.extra_items[0].checkbox.length
                        if (oldItem && oldItem != '') {
                            currentItem.is_checked = oldItem.is_checked;
                            currentItem.quantity = oldItem.quantity;
                            currentItem.sheet_type = 'both';
                            currentItem.sheet_name = "1' Overhang";
                            currentItem.label = "1' Overhang";
                            currentItem.name = 'overhang';
                            const_var.extraItemsFeaturesCost[currIdx] = currentItem.cost;
                        } else {
                            currentItem = null;
                            const_var.extraItemsFeaturesCost[currIdx] = null;
                        }
                        // newExtraItemsCheckbox.push(currentItem);
                        newExtraItemsCheckbox[currIdx] = currentItem

                        if(const_var.isOverhang && const_var.isOverhang.both.isChecked == true){
                            params.o_v_h_n_g = true;
                            params.o_v_h_n_g_e = true;
                        }
                    }
                } 
            } else {
                const_var.ExtraItemsFeaturesArray = [];
            }
            const_var.ComparisionDataArray[parVal].request_data.building.ExtraItemsFeaturesArray = newExtraItemsCheckbox;
            const checkFourFeetOnCenter = const_var.ComparisionDataArray[parVal].request_data.building.ExtraItemsFeaturesArray.find((ei)=> ei && ei.label === "4ft on Center");
            if (const_var.editAPIDataByResponse.data.pricing_data.building_structure && const_var.editAPIDataByResponse.data.pricing_data.building_structure.length >0){
               if (const_var.editAPIDataByResponse.data.pricing_data.building_structure[0].distance_on_center && const_var.editAPIDataByResponse.data.pricing_data.building_structure[0].distance_on_center === 5 && checkFourFeetOnCenter === undefined && const_var.ComparisionDataArray[parVal].paramsData.fourth_center_cost){
                const_var.ComparisionDataArray[parVal].paramsData.fourth_center_cost = false;
                params.fourth_center_cost = false;
               }
            }

            let newObjDataQuantityArray = JSON.parse(JSON.stringify(const_var.ExtraItemsFeaturesQuantityArray));
            let newExtraItemsCheckboxQuantity = [];
            if((const_var.editAPIDataByResponse.data.pricing_data.extra_items!=undefined) && const_var.editAPIDataByResponse.data.pricing_data.extra_items.length>0) {
                  if(const_var.editAPIDataByResponse.data.pricing_data.extra_items[0].checkbox_quantity!=undefined && const_var.editAPIDataByResponse.data.pricing_data.extra_items[0].checkbox_quantity.length>0) {
                      (pricingData.extra_items[0].checkbox_quantity).forEach( (currentItem , index) => {
                          let oldItem = newObjDataQuantityArray.find(oldItem => oldItem && oldItem.label === currentItem.label);
                          if (oldItem) {
                              currentItem.is_checked = oldItem.is_checked;
                              currentItem.quantity = oldItem.quantity;
                              currentItem.is_edit = oldItem.is_edit;
                              if ( oldItem.name == "bows" && oldItem.cost == 0 && oldItem.is_disabled != undefined && oldItem.is_disabled) {
                                  if (const_var.ComparisionDataArray[parVal].paramsData.fourth_center_cost) {
                                      if (certificate && certificate.distance_on_center != undefined && certificate.distance_on_center != 4 && const_var.ComparisionDataArray[parVal].request_data.building.fourthCenterCostWithExtrabows ){
                                         currentItem.cost = oldItem.cost;
                                         currentItem.double_leg = oldItem.cost;
                                         currentItem.ladder_leg = oldItem.cost;
                                         currentItem.is_disabled = oldItem.is_disabled;
                                      }
                                   } 
                               }
                              const_var.extraItemsFeaturesQuantityCost[index] = currentItem.cost;
                          } else {
                              currentItem = null;
                              const_var.extraItemsFeaturesQuantityCost[index] = null;
                          }

                          newExtraItemsCheckboxQuantity.push(currentItem);
                      });    
                  } else {
                      const_var.ExtraItemsFeaturesQuantityArray = [];
                  }
              } else {
                  const_var.ExtraItemsFeaturesQuantityArray = [];
             }
            const_var.ComparisionDataArray[parVal].request_data.building.ExtraItemsFeaturesQuantityArray = newExtraItemsCheckboxQuantity;

            if((const_var.ComparisionDataArray[parVal].post_data.building!=undefined) && const_var.ComparisionDataArray[parVal].post_data.building.has_utility==true)
            {
                const_var.ComparisionDataArray[parVal].post_data.building.utility_name = (const_var.ComparisionDataArray[parVal].post_data.building.utility_name==undefined)?'back':const_var.ComparisionDataArray[parVal].post_data.building.utility_name;
            } 
            const_var.UpdatedPriceData.leanto = undefined; 
            //const_var.editAPIDataByResponse.data.building_data;
            const_var.ConditionArrForLean = [];
            // console.log(const_var.ComparisionDataArray[parVal],"const_var.ComparisionDataArray[parVal]")
            dispatch({
                type:"SETDEFAULTCONFIGURATION",
                value : const_var.ComparisionDataArray[parVal]
            });
            const_var.CheckSnowLoadValue = 35;
            params.isSnowLoad = false;
            dispatch(getDealerStateList());
            Newresponse['data'] = const_var.editAPIDataByResponse.data.pricing_data;
            Newresponse['success'] = true;
            const_var.isShowCompare = false;

            //dispatch(setPricingData(response)); 
        }
        
            
            
            
       
    
}
export function CallPublicAPI()
{
    let settingData = const_var.crmSetting;//document.getElementById('root').getAttribute('data');
    let apiData = "";
    apiData = {"module_id":settingData.is_module_id};
    let apiUrl = settingData.api_post_url+'/api/v1/3d/edit-start';
    return(dispatch) => {
        return axios.post(apiUrl,apiData).then(function(response){
            dispatch({
                type:"CallPublicAPI",
                value : response
            });
            
        })
        .catch(function(error){
            console.log(error);
        })
    }
}
export function sendDatatoServer(e)
{
    return(dispatch)=>{
          dispatch({type: "RAISETICKETS",response:''})  
          let postData = {'api_token':const_var.crmSetting.api_token,"user_id":const_var.crmSetting.login_user_id,'ticket_title':'License Upgrade Ticket','ticket_description':'I want to access the Price Comparison feature. Please upgrade my license.','type':'feature_request'};
          return axios.post(const_var.crmSetting.api_post_url+'/api/v1/tickets/save',postData).then(function(response){
            //    console.log(response.data,"response") 
                if(response.data.status==true)
                {
                    dispatch({type: "RAISETICKETS",response:response.data})
                }
          })
          .catch(function(error){
              console.log(error);
          })
  }
}
export function getBuildingData(data){
    const_var.showReportLoading = true
    if(const_var!=undefined && const_var.crmSetting.header_key==undefined)
    {
        const_var.crmSetting.header_key = {"x-api-key":"9vZYfym4VG99tLmdoqWYI8TYW01klRpr7ywM7SA5"};
        const_var.crmSetting.price_api_url = "https://api.senseicrm.com/";
    }
    return(dispatch) => {
            const_var.b_t_x_P_g = [];
            const_var.fromGetBuildingData = true;
            //const_var.stateColorAcordingAPI[params.p_s_n] = {};
            const_var.editstateColorAcordingAPI[params.p_s_n] = {};
            const_var.CheckSnowLoadValue = 35;
            params.isSnowLoad = false;
            if(const_var.stateColorAcordingAPI[params.p_s_n]==undefined)
            {
                const_var.stateColorAcordingAPI[params.p_s_n] = {};
            }
            const_var.noCursorClass = false;
            const_var.garageDoorColor = [];
            const_var.leanGetDataLeft = const_var.leanGetDataRight = const_var.leanGetDataFront = const_var.leanGetDataBack = "";
            const_var.editstateColorAcordingAPI[params.p_s_n] = {};
            const_var.stateChangeflag = params.p_s_n;
            const_var.stateMenuChangeflag = params.m_s_n;
            const_var.mapIdforLean = "";
            const_var.defaultBuildingArr = [];
            const_var.bjDData = [];
            // const_var.LeadCustomerData = [];
            const_var.additionalFeaturesArray=[]; 
            const_var.ExtraItemsFeaturesArray=[];
            const_var.extraItemsFeaturesCost=[];
            const_var.extraItemsFeaturesQuantityCost=[];
            const_var.ExtraItemsFeaturesQuantityArray=[];
            const_var.ExtraItemsFeaturesDropdownQuantityArray=[]; 
            const_var.surcharge_amount_is_edit = false;
            cuComponent.removeAlltheComponent();
            const_var.is_loader = true;
            //const_var.showProcessLoaderchkEdit = false;
            var apiDataBuilding = {"manufacturer_id":params.m_s_n,"state_id":params.p_s_n};
            
            let apiData = {
                "api_token": "PSDCGcsMIbRaHqID1eXzCRiJLBl1BdAcUZrT4fbLvgLKiUq9AHw7riEaD9rWtRH8",
                "estimator_domain":"safewaysteel.com",
                "product_id":"MTYxNQ=="
            };
            let apiUrl = 'https://crm.senseicrm.com/api/v1/product/get'

            return axios.post(apiUrl, apiData).then((response)=>{console.log(response.data.data.building_data, "setBuildingData----2")
                let data = {
                    data : response.data.data.building_data,
                    message : "success",
                    success : true
                }
                console.log(const_var.CheckSnowLoadValue, "setBuildingData----AllBuildingData")

                if(response.data.data.building_data?.default_building.filter(data=>data.heavy_snow==0 || data.heavy_snow== null).length==0)
                {
                    const_var.CheckSnowLoadValue = 65;
                    const_var.noCursorClass = true;
                }
                cuComponent.removeAlltheComponent();
                dispatch({
                    type: "DISABLE_DOOR_WINDOW_EDIT_ICONS",
                })
                console.log(response.data.data.building_data, "setBuildingData----changeBuildingData")
                // dispatch(changeBuildingData(response.data.data));
dispatch(changeBuildingData( {
                    data : response.data.data.building_data,
                    message : "success",
                    success : true
                }))
                const_var.showProcessLoaderchkEdit = false;
               
                dispatch(getSelectedTabstate("buildingtypetab"));
                 let snowValChk = const_var.CheckSnowLoadValue ==65?1:0;
                 
                 console.log(response.data.data.building_data.default_building,const_var.CheckSnowLoadValue,snowValChk, "setBuildingData----2")


                 let filterResult = response.data.data.building_data.default_building.filter(data=> data.name.includes("Standard Garages"));
                 if(filterResult.length==0)
                 {
                    filterResult = response.data.data.building_data.default_building.filter(data=>data.heavy_snow==snowValChk && data.name.includes("RV Covers"));
                 }
                
                 console.log(filterResult, "setBuildingData----2")
                 dispatch(buildingStyleChange(filterResult[0]?.id,[])); 
                 dispatch(isOpenWelcomeModal(true,''));  
                setTimeout(()=>{
                    const checkaddmodalclass =   document.querySelector('.welcomeparent');
                    if(checkaddmodalclass!=undefined) {
                    document.querySelector('.welcomeparent').classList.add('showwelcomeparent')
                        
                    }
                },500)            
                 
                const_var.showReportLoading = false
            
                console.log(data,const_var.defaultBuildingArr, "setBuildingData----2")
            })
        //    return axios.post(const_var.crmSetting.price_api_url+"get-building-data",apiDataBuilding,{"headers":const_var.crmSetting.header_key}).then((response)=>{
        //      if(response!=undefined)
        //      {  
                
        //         console.log(response.data.data ,"default_building");
        //         if(response.data.data.default_building.filter(data=>data.heavy_snow==0).length==0)
        //         {
        //             const_var.CheckSnowLoadValue = 65;
        //             const_var.noCursorClass = true;
        //         }
        //         cuComponent.removeAlltheComponent();
        //         dispatch({
        //             type: "DISABLE_DOOR_WINDOW_EDIT_ICONS",
        //         })
        //         console.log(response.data, "setBuildingData----changeBuildingData")
        //         dispatch(changeBuildingData(response.data));
        //         const_var.showProcessLoaderchkEdit = false;
               
        //         dispatch(getSelectedTabstate("buildingtypetab"));
        //          let snowValChk = const_var.CheckSnowLoadValue ==65?1:0;

        //          console.log(const_var.AllBuildingData.data.default_building, const_var.CheckSnowLoadValue,snowValChk, "setBuildingData----AllBuildingData")
                 
        //          let filterResult = const_var.AllBuildingData.data.default_building.filter(data=>data.heavy_snow==snowValChk && data.name.includes("Standard Garages"));
        //          if(filterResult.length==0)
        //          {
        //             filterResult = const_var.AllBuildingData.data.default_building.filter(data=>data.heavy_snow==snowValChk && data.name.includes("RV Covers"));
        //          }

        //          console.log(filterResult, "setBuildingData----2")
        //         dispatch(buildingStyleChange(filterResult[0].id,[])); 
        //          dispatch(isOpenWelcomeModal(true,''));  
        //         setTimeout(()=>{
        //             const checkaddmodalclass =   document.querySelector('.welcomeparent');
        //             if(checkaddmodalclass!=undefined) {
        //             document.querySelector('.welcomeparent').classList.add('showwelcomeparent')
                        
        //             }
        //         },500)            
                 
        //         const_var.showReportLoading = false

        //         console.log(data,const_var.defaultBuildingArr, "setBuildingData----2")
        //     }
            
        // }) .catch(function(error){
        //     const_var.showReportLoading = false
        //         console.log(error);
        // })
    }
}
export function buildingStyleChangeAccordingtoType(val,typen)
{    
  document.querySelector('body').classList.add('active-modal-loader');
    if(val==undefined && typen==undefined && const_var.b_o_J_1!=undefined)
    {
        if(const_var.b_o_J_1[params.p_b_t]!=undefined && const_var.b_o_J_1[params.p_b_t].includes("Custom"))
        {
            const_var.checkmoreCustomizeFlag = !const_var.checkmoreCustomizeFlag;
        }
    }
    if(val==undefined && typen==undefined)
    {
        document.querySelector('body').classList.remove('active-modal-loader');
        return (dispatch) =>{
            dispatch({type: "BUILDINGSTYLECHANGEBYTYPE"})
        }
    }else{
        const_var.CheckDoorForEdit = true;
        return (dispatch) =>{
            //console.log(typen.length);
            if(typen.length>1)
            {
                //console.log(val,typen,"buildingStyleChangeAccordingtoType");
                
                    dispatch({type: "BUILDINGSTYLECHANGEBYTYPE",
                        value: val,
                        othertype:typen
                    })
            }else
            {
                const_var.isCheckDisabled = true;
                dispatch(buildingStyleChange(val,typen));
            }
        }
    }
}

export function getComparisionData(key,val){

       let newMapID = '', isBreezewayBuildingAvailabeToCompare;
        
    return(dispatch) => {
            dispatch({
                type: "SETCOMPARISIONBUILDINGLOADER",                                       
                mfgindex:val
            })
            params[`${"m_n_f"}${val}`] = Number(key);
            if (!const_var.isTBSOldQuotesForVerticalRoof && (key == 13 && params.p_r_s !== 3 && (params.add_front_lean==true || params.add_back_lean == true))){
                dispatch({
                    type: "NoDataCompare",                                      
                    mfgindex:val,
                    key:key
                })
                return
            }
            if (key == 10 && ((params.p_w == 14 || params.p_w == 16) ||
                (params.lean_p_w == 14 || params.lean_p_w == 16) ||
                (params.leanR_p_w == 14 || params.leanR_p_w == 16) ||
                (params.leanF_p_w == 14 || params.leanF_p_w == 16) ||
                (params.leanB_p_w == 14 || params.leanB_p_w == 16))){
                dispatch({
                    type: "NoDataCompare",                                      
                    mfgindex:val,
                    key:key
                })
                return
            }
            var apiDataBuilding = {"manufacturer_id":key,"state_id":params.p_s_n};
            const_var.leantoCompare = [];
            const_var.leanGetDataRightComparision = '';
            const_var.leanGetDataLeftComparision = '';
            return axios.post(const_var.crmSetting.price_api_url+"get-building-data",apiDataBuilding,{"headers":const_var.crmSetting.header_key}).then((responseNew)=>{
                if(responseNew.data.data.default_building.filter(data=>data.heavy_snow==0).length==0)
                {
                    const_var.CheckSnowLoadValue = 65;
                    const_var.noCursorClass = true;
                }
                let response = responseNew.data.data;
                dispatch({
                    type: "SETCOMPARISIONBUILDINGLOADER",                                       
                    mfgindex:val
                })
                const_var.ComparisionDataArray[key+val] = {};
                const_var.ComparisionDataArray[key+val].building_data = response;
                const_var.ComparisionDataArray[key+val].colorObj = response.garageDoorColor;
                if ( const_var.ComparisionDataArray[key+val].building_data.manufacture_data != undefined && const_var.ComparisionDataArray[key+val].building_data.manufacture_data.length > 0) {
                    const_var.compare_leanto_condition_by_mfg = const_var.ComparisionDataArray[key+val].building_data.manufacture_data[0];
                }

                if (params.isBreezeway && params.cB_addStorage_check_front && params.p_u_c && response.default_building && response.default_building.length > 0 ) {
                    let checkBreezeway = response.default_building.find(building => building.name.includes("Breezeway Building"));
                    if (checkBreezeway  == undefined) {
                        isBreezewayBuildingAvailabeToCompare = false;
                        dispatch({
                            type: "NoDataCompare",                                      
                            mfgindex:val,
                            key:key
                        })
                        return
                    } else if (checkBreezeway.is_breezeway_building == 1){
                        isBreezewayBuildingAvailabeToCompare = true;
                    }       
                } 


                let checkDataIsPrecent = response.building.filter(data=>data.building_type.type_of_building==const_var.c_m_a[params.p_b_t].defaultBuldingcheck);
                if(checkDataIsPrecent.length>0)
                {
                    let isBuildingDataAvailable = false;
                for (var i=0;i<=response.building.length-1;i++) {
                  
                    if(const_var.c_m_a[params.p_b_t].defaultBuldingcheck == response.building[i].building_type.type_of_building )
                    {

                        if ( const_var.ComparisionDataArray[key+val] == undefined) {
                            const_var.ComparisionDataArray[key+val] = {};
                            const_var.ComparisionDataArray[key+val].building_data = response;
                            const_var.ComparisionDataArray[key+val].colorObj = response.garageDoorColor;
                            if ( const_var.ComparisionDataArray[key+val].building_data.manufacture_data != undefined && const_var.ComparisionDataArray[key+val].building_data.manufacture_data.length > 0) {
                                const_var.compare_leanto_condition_by_mfg = const_var.ComparisionDataArray[key+val].building_data.manufacture_data[0];
                            }
                        }
                        
                        const_var.ConditionArrCompare[response.building[i].building_type.building_id] = [];
                        const_var.DistanceArrCompare[response.building[i].building_type.building_id] = [];
                        const_var.CompareBuildingMaxHeight = '';
                        const_var.ComparisionDataArray[key+val].mainBuildingID = {'building_id':response.building[i].building_type.building_id,'building_index':i};
                        let chkRoof = response.building[i].roof_style.filter(data=>data.roof_id==params.p_r_s);

                      for (var j = 0; j < response.building[i].roof_style.length; j++) {
                        if(response.building[i].roof_style[j].roof_id==params.p_r_s)
                        {
                            if((response.building[i].roof_style[j].min_start_width<=params.p_w && params.p_w<= response.building[i].roof_style[j].max_width) && (response.building[i].roof_style[j].min_start_length<=params.p_d && params.p_d<= response.building[i].roof_style[j].building_max_length) && (response.building[i].roof_style[j].min_height<=params.p_h && params.p_h<= response.building[i].roof_style[j].max_height))
                            {
                                isBuildingDataAvailable = true;
                                newMapID = response.building[i].roof_style[j].map_id;
                                let apiData = "";
                                let distanceOnCenter = response.building[i].roof_style[j].distance_on_center;
                                let exactutility = params.p_u_t;
                                
                                if(params.p_u_c && !params.isBreezeway){
                                    if(distanceOnCenter==4)
                                    {
                                        exactutility = (Math.floor(params.p_u_t/distanceOnCenter)*distanceOnCenter);
                                    }
                                } 
                                // if (params.isBreezeway && params.cB_addStorage_check_front && params.p_u_c && distanceOnCenter != const_var.DistanceArr[params.p_b_t][params.p_r_s]) {
                                //     exactutility = distanceOnCenter == 4 ? findNearestMultipleOfFour(exactutility) : findNearestMultipleOfFive(exactutility);
                                //     frontStorageLength = distanceOnCenter == 4 ?  findNearestMultipleOfFour(frontStorageLength) : findNearestMultipleOfFive(frontStorageLength);
                                // }

                                const_var.CompareBuildingMaxHeight = response.building[i].roof_style[j].max_height;;
                                let sideComboWidth = 0 ;
                                let sideComboPitchHeight =0;
                                if (params.cB_addStorage_check_left || params.cB_addStorage_check_right){
                                    if (params.cB_addStorage_check_left) {
                                        sideComboWidth = params.cB_addStorage_left;
                                        
                                    } else if(params.cB_addStorage_check_right) {
                                        sideComboWidth = params.cB_addStorage_right;
                                    }
                                    
                                    if(parseInt(sideComboWidth)> (params.p_w/2))
                                    {
                                        sideComboPitchHeight = parseInt(params.p_h)+ parseInt(params.p_r_p);//parseInt(params.p_h + Math.ceil((params.p_r_p * (params.p_w/2))/12)) //parseInt(params.p_h+(Math.ceil(((params.p_r_p/(params.p_w/2))))))
                                    }else
                                    {
                                        sideComboPitchHeight = parseInt(params.p_h+(Math.ceil(((params.p_r_p/(params.p_w/2))*sideComboWidth))))
                                    }
                                    if(sideComboPitchHeight>response.building[i].roof_style[j].max_height)
                                    {
                                        sideComboPitchHeight = response.building[i].roof_style[j].max_height;
                                    }
                                }

                                const_var.DistanceArrCompare[response.building[i].building_type.building_id][response.building[i].roof_style[j].roof_id] = response.building[i].roof_style[j].distance_on_center;
                                const_var.ConditionArrCompare[response.building[i].building_type.building_id][response.building[i].roof_style[j].roof_id] = response.building[i].roof_style[j].conditions['condition'];
                                if(const_var.b_o_J_1[params.p_b_t].includes("Free Standing Lean-to"))
                                {
                                    let chkFixedWidth = false;
                                    chkFixedWidth = const_var.c_m_a[params.p_b_t]?const_var.c_m_a[params.p_b_t].fixed_new_leg_width?const_var.c_m_a[params.p_b_t].fixed_new_leg_width.length>0?true:false:false:false;
                                    if (const_var.post_data.building.utility_name !="back") {
                                        if(parseInt(sideComboWidth)> (params.p_w/2))
                                        {
                                            sideComboPitchHeight = parseInt(Math.round(params.p_h-params.p_r_p)+(Math.ceil(((params.p_r_p/(params.p_w))*sideComboWidth))));//parseInt(Math.round(params.p_h-params.p_r_p) + Math.ceil((params.p_r_p * (params.p_w/2))/12)) //parseInt(Math.round(params.p_h-params.p_r_p)+(Math.ceil(((params.p_r_p/(params.p_w/2))))))
                                        }else
                                        {
                                            sideComboPitchHeight = parseInt(Math.round(params.p_h-params.p_r_p)+(Math.ceil(((params.p_r_p/(params.p_w))*sideComboWidth))))
                                        }
                                        if(sideComboPitchHeight>response.building[i].roof_style[j].max_height)
                                        {
                                            sideComboPitchHeight = response.building[i].roof_style[j].max_height;
                                        }
                                        apiData = {"gauge":params.gauge_val, "width":(params.p_b_t =="2")?params.p_w+24:params.p_w,"height":params.p_h,"single_slope_height": (const_var.c_m_a[params.p_b_t]!=undefined && const_var.c_m_a[params.p_b_t].fixed_new_leg_width!=undefined && const_var.c_m_a[params.p_b_t].fixed_new_leg_width.length>0 ) ? Math.floor(params.p_h-((params.p_w * params.p_r_p) / 12)) : Math.round(params.p_h-((params.p_w * params.p_r_p) / 12)),"length":params.p_d,"map_id":newMapID,"roof_id":params.p_r_s,"lean_to_height":0,"utility_width":(params.cB_addStorage_check_left ||params.cB_addStorage_check_right )?sideComboWidth:0,"pitch_height":sideComboPitchHeight,"is_smaller_frame_width":chkFixedWidth};
                                     } else {
                                         apiData = {"gauge":params.gauge_val, "width":(params.p_b_t =="2")?params.p_w+24:params.p_w,"height":params.p_h,"single_slope_height": (const_var.c_m_a[params.p_b_t]!=undefined && const_var.c_m_a[params.p_b_t].fixed_new_leg_width!=undefined && const_var.c_m_a[params.p_b_t].fixed_new_leg_width.length>0 ) ? Math.floor(params.p_h-((params.p_w * params.p_r_p) / 12)) : Math.round(params.p_h-((params.p_w * params.p_r_p) / 12)),"length":params.p_d,"map_id":newMapID,"roof_id":params.p_r_s,"lean_to_height":0,"utility_length":(params.p_u_c==true)?exactutility:0,"is_smaller_frame_width":chkFixedWidth};
                                     }
                                }else
                                {
                                  if (const_var.post_data.building.utility_name !="back") {
                                      apiData = {"gauge":params.gauge_val,"width":(params.p_b_t =="2")?params.p_w+24:params.p_w,"height":params.p_h,"length":params.p_d,"map_id":newMapID,"roof_id":params.p_r_s,"lean_to_height":0,"utility_width":(params.cB_addStorage_check_left ||params.cB_addStorage_check_right )?sideComboWidth:0,"pitch_height":sideComboPitchHeight};
                                   }else{
                                       apiData = {"gauge":params.gauge_val,"width":(params.p_b_t =="2")?params.p_w+24:params.p_w,"height":params.p_h,"length":params.p_d,"map_id":newMapID,"roof_id":params.p_r_s,"lean_to_height":0,"utility_length":(params.p_u_c==true)?exactutility:0, "front_utility_length":(params.cB_addStorage_check_front) ? params.cB_addStorage_front : 0,};
                                   }
                                }
                                if(const_var.b_o_J_1[params.p_b_t] == "Custom Buildings")
                                {
                                    apiData.is_lean_to_price = true;
                                }
                                return axios.post(const_var.crmSetting.price_api_url+'get-building-pricing',apiData,{"headers":const_var.crmSetting.header_key}).then(function(responseData){
                                    

                                    const_var.ComparisionDataArray[key+val].pricing_data = responseData.data.data;
                                    const_var.ComparisionDataArray[key+val].paramsData = {...params};
                                    const_var.ComparisionDataArray[key+val].paramsData.m_s_n = key;
                                    const_var.ComparisionDataArray[key+val].paramsData.p_b_t = response.building[i].building_type.building_id;
                                    const_var.ComparisionDataArray[key+val].drawingOBJ = response.building[i].drawings != undefined ? response.building[i].drawings: [];
                                    const_var.ComparisionDataArray[key+val].default_lean_id = (response.building[i].building_type.lean_to_building_id != undefined) ? response.building[i].building_type.lean_to_building_id : 2;
                                    if (const_var.ComparisionDataArray[key+val].pricing_data.insulation.length == 0){
                                        const_var.ComparisionDataArray[key+val].paramsData.p_i_o = 0;
                                        const_var.ComparisionDataArray[key+val].paramsData.p_r_o = false;
                                        const_var.ComparisionDataArray[key+val].paramsData.p_f_i = false;
                                    }
                                    if((params.add_front_lean==true || params.add_back_lean == true) && const_var.compare_leanto_condition_by_mfg.end_lean_to == false)
                                    {
                                        const_var.ComparisionDataArray[key+val].paramsData.add_front_lean = false;
                                        if (params.add_back_lean )const_var.ComparisionDataArray[key+val].paramsData.add_back_lean = false;
                                    }
                                    if(const_var.ComparisionDataArray[key+val].request_data!=undefined && const_var.ComparisionDataArray[key+val].request_data.building!=undefined && const_var.ComparisionDataArray[key+val].request_data.building.leanto!=undefined && const_var.ComparisionDataArray[key+val].request_data.building.leanto.length==0)
                                    {
                                        const_var.UpdatedPriceData.leanto = undefined;
                                    }
                                    if(params.p_u_c==true){
                                        const_var.ComparisionDataArray[key+val].paramsData.p_u_t = exactutility;
                                    } 
                                    if(params.isBreezeway  && params.cB_addStorage_check_front && params.p_u_c ){
                                        // if ( exactutility % 4 == 0 && params.cB_addStorage_front % 4 == 0 && const_var.DistanceArr[params.p_b_t][params.p_r_s] == 4){
                                        //     if (const_var.ComparisionDataArray[key+val].pricing_data && const_var.ComparisionDataArray[key+val].pricing_data.building_structure && const_var.ComparisionDataArray[key+val].pricing_data.building_structure.length >0 && const_var.ComparisionDataArray[key+val].pricing_data.building_structure[0].distance_on_center == 5 ){
                                        //         const_var.ComparisionDataArray[key+val].pricing_data.building_structure[0].distance_on_center =  const_var.DistanceArr[params.p_b_t][params.p_r_s];
                                        //     }
                                        // }
                                        // if (( exactutility % 10 == 0 && params.cB_addStorage_front % 10 == 0 || const_var.breezewayLength % 10 == 0 )&& const_var.DistanceArr[params.p_b_t][params.p_r_s] == 5){
                                        //     if (const_var.ComparisionDataArray[key+val].pricing_data && const_var.ComparisionDataArray[key+val].pricing_data.building_structure && const_var.ComparisionDataArray[key+val].pricing_data.building_structure.length >0 && const_var.ComparisionDataArray[key+val].pricing_data.building_structure[0].distance_on_center == 4 ){
                                        //         const_var.ComparisionDataArray[key+val].pricing_data.building_structure[0].distance_on_center =  const_var.DistanceArr[params.p_b_t][params.p_r_s];
                                        //     }
                                        // }

                                        if (const_var.ComparisionDataArray[key+val].pricing_data && const_var.ComparisionDataArray[key+val].pricing_data.building_structure && const_var.ComparisionDataArray[key+val].pricing_data.building_structure.length >0 && const_var.ComparisionDataArray[key+val].pricing_data.building_structure[0].distance_on_center != undefined){
                                            const_var.ComparisionDataArray[key+val].pricing_data.building_structure[0].distance_on_center =  const_var.DistanceArr[params.p_b_t][params.p_r_s];
                                        }
                                        // console.log(const_var.ComparisionDataArray[key+val].pricing_data ,"pricing_data");
                                    }
                     

                                    
                                    if(responseData.data.success==false)
                                    {
                                        dispatch({type: "NoDataCompare",                                      
                                        mfgindex:val,
                                        key:key
                                    })
                                    }
                                    if(val=="_1")
                                    {
                                        params.m_s_n_1 = key+val;
                                    }if(val=="_2")
                                    {
                                        params.m_s_n_2 = key+val;
                                    }
                                    params[`${"showCompareMnfList"}${val}`] = false;
                                    dispatch({type: "SETCOMPARISIONBUILDINGDATA",
                                        value: const_var.ComparisionDataArray,
                                        iiD:key+val
                                    })
                                    if(params.add_right_lean==true || params.add_left_lean==true || params.add_front_lean==true || params.add_back_lean==true)
                                    {
                                        dispatch({type: "SETCOMPARISIONBUILDINGLOADER",                                       
                                            mfgindex:val
                                        })
                                    }
                                    
                                    if(params.add_left_lean==true && const_var.compare_leanto_condition_by_mfg.side_lean_to == true )
                                    {
                                        dispatch(getPricingDataForLeantoComparision(true,'addLeftLean',key+val,newMapID,response.building[i].building_type.heavy_snow));
                                    }
                                    if(params.add_front_lean==true && const_var.compare_leanto_condition_by_mfg.end_lean_to == true)
                                    {
                                        dispatch(getPricingDataForLeantoComparision(true,'addFrontLean',key+val,newMapID,response.building[i].building_type.heavy_snow));
                                    }

                                    if(params.add_back_lean==true && const_var.compare_leanto_condition_by_mfg.end_lean_to == true)
                                    {
                                        dispatch(getPricingDataForLeantoComparision(true,'addBackLean',key+val,newMapID,response.building[i].building_type.heavy_snow));
                                    }
                                    if(params.add_right_lean==true && const_var.compare_leanto_condition_by_mfg.side_lean_to == true)
                                    {
                                        dispatch(getPricingDataForLeantoComparision(true,'addRightLean',key+val,newMapID,response.building[i].building_type.heavy_snow));
                                    }
                                    
                              
                                })
                            }else
                            {
                                /* 
                                    * commenting this in the else case and adding after next to the response.building for loop 
                                    * The reason behind this is due to on every iteration if the condtion dosen't meet then it will comes to this else condition and shows no data to compare
                                    * for a movement and on the second iteration there is posibitity that the conditions matched then its shows the building data 
                                    * which looks odd therefore handling this case after the for loop
                                */
                               
                                // dispatch({type: "NoDataCompare",                                      
                                //         mfgindex:val,
                                //         key:key
                                // })        
                            }
                        }if(chkRoof.length==0)
                        {
                            let indexVal = 0;
                            if(response.building[i].roof_style.length==3)
                            {
                                indexVal = 2;
                            }
                            if(response.building[i].roof_style.length==2)
                            {
                                indexVal = 1;
                            }
                            if(response.building[i].roof_style.length==1)
                            {
                                indexVal = 0;
                            }
                            if((response.building[i].roof_style[indexVal].min_width<=params.p_w && params.p_w<= response.building[i].roof_style[indexVal].max_width) && (response.building[i].roof_style[indexVal].min_start_length<=params.p_d && params.p_d<= response.building[i].roof_style[indexVal].building_max_length) && (response.building[i].roof_style[indexVal].min_height<=params.p_h && params.p_h<= response.building[i].roof_style[indexVal].max_height))
                            {
                                isBuildingDataAvailable = true;
                                const_var.DistanceArrCompare[response.building[i].building_type.building_id][response.building[i].roof_style[indexVal].roof_id] = response.building[i].roof_style[indexVal].distance_on_center;
                                const_var.ConditionArrCompare[response.building[i].building_type.building_id][response.building[i].roof_style[indexVal].roof_id] = response.building[i].roof_style[indexVal].conditions['condition'];
                                newMapID = response.building[i].roof_style[indexVal].map_id;
                                let apiData = "";
                                let chkFixedWidth = false;
                                chkFixedWidth = const_var.c_m_a[params.p_b_t]?const_var.c_m_a[params.p_b_t].fixed_new_leg_width?const_var.c_m_a[params.p_b_t].fixed_new_leg_width.length>0?true:false:false:false;
                                if(const_var.b_o_J_1[params.p_b_t].includes("Free Standing Lean-to"))
                                {
                                    if (const_var.post_data.building.utility_name !="back") {
                                        apiData = {"width":(params.p_b_t =="2")?params.p_w+24:params.p_w,"height":params.p_h,"single_slope_height": (const_var.c_m_a[params.p_b_t]!=undefined && const_var.c_m_a[params.p_b_t].fixed_new_leg_width!=undefined && const_var.c_m_a[params.p_b_t].fixed_new_leg_width.length>0 ) ? Math.floor(params.p_h-((params.p_w * params.p_r_p) / 12)) : Math.round(params.p_h-((params.p_w * params.p_r_p) / 12)),"length":params.p_d,"map_id":newMapID,"roof_id":response.building[i].roof_style[indexVal].roof_id,"lean_to_height":0,"utility_width":(params.cB_addStorage_check_left ||params.cB_addStorage_check_right )?(params.p_b_t =="2")?((params.p_w+24)/2):(params.p_w/2):0,"pitch_height":Math.round(params.p_h+params.p_r_p),"is_smaller_frame_width":chkFixedWidth};
                                     } else {
                                         apiData = {"width":(params.p_b_t =="2")?params.p_w+24:params.p_w,"height":params.p_h,"single_slope_height": (const_var.c_m_a[params.p_b_t]!=undefined && const_var.c_m_a[params.p_b_t].fixed_new_leg_width!=undefined && const_var.c_m_a[params.p_b_t].fixed_new_leg_width.length>0 ) ? Math.floor(params.p_h-((params.p_w * params.p_r_p) / 12)) : Math.round(params.p_h-((params.p_w * params.p_r_p) / 12)),"length":params.p_d,"map_id":newMapID,"roof_id":response.building[i].roof_style[indexVal].roof_id,"lean_to_height":0,"utility_length":(params.p_u_c==true)?params.p_u_t:0,"is_smaller_frame_width":chkFixedWidth};
                                     }
                                    
                                        //  apiData = {"width":(params.p_b_t =="2")?params.p_w+24:params.p_w,"height":params.p_h,"single_slope_height":Math.round(params.p_h-((params.p_w * params.p_r_p) / 12)),"length":params.p_d,"map_id":newMapID,"roof_id":response.building[i].roof_style[indexVal].roof_id,"lean_to_height":0,"utility_length":(params.p_u_c==true)?params.p_u_t:0,};
                                }else
                                {
                                    if (const_var.post_data.building.utility_name !="back") {
                                        apiData = {"width":(params.p_b_t =="2")?params.p_w+24:params.p_w,"height":params.p_h,"length":params.p_d,"map_id":newMapID,"roof_id":response.building[i].roof_style[indexVal].roof_id,"lean_to_height":0,"utility_width":(params.cB_addStorage_check_left ||params.cB_addStorage_check_right )?(params.p_b_t =="2")?((params.p_w+24)/2):(params.p_w/2):0,"pitch_height":Math.round(params.p_h+params.p_r_p)};
                                     }else{
                                         apiData = {"width":(params.p_b_t =="2")?params.p_w+24:params.p_w,"height":params.p_h,"length":params.p_d,"map_id":newMapID,"roof_id":response.building[i].roof_style[indexVal].roof_id,"lean_to_height":0,"utility_length":(params.p_u_c==true)?params.p_u_t:0,"front_utility_length":(params.cB_addStorage_check_front) ? Math.round(params.cB_addStorage_front) : 0,};
                                     }
                                        //  apiData = {"width":(params.p_b_t =="2")?params.p_w+24:params.p_w,"height":params.p_h,"length":params.p_d,"map_id":newMapID,"roof_id":response.building[i].roof_style[indexVal].roof_id,"lean_to_height":0,"utility_length":(params.p_u_c==true)?params.p_u_t:0,};
                                }
                                if(const_var.b_o_J_1[params.p_b_t] == "Custom Buildings")
                                {
                                    apiData.is_lean_to_price = true;
                                }
                                return axios.post(const_var.crmSetting.price_api_url+'get-building-pricing',apiData,{"headers":const_var.crmSetting.header_key}).then(function(responseData){
                                   
                                    const_var.ComparisionDataArray[key+val].pricing_data = responseData.data.data;
                                    const_var.ComparisionDataArray[key+val].paramsData = {...params};
                                    const_var.ComparisionDataArray[key+val].paramsData.p_r_s = response.building[i].roof_style[indexVal].roof_id;
                                    const_var.ComparisionDataArray[key+val].paramsData.m_s_n = key;
                                    const_var.ComparisionDataArray[key+val].paramsData.p_b_t = response.building[i].building_type.building_id;
                                    const_var.ComparisionDataArray[key+val].drawingOBJ = response.building[i].drawings != undefined ? response.building[i].drawings : [];
                                    const_var.ComparisionDataArray[key+val].default_lean_id = (response.building[i].building_type.lean_to_building_id != undefined) ? response.building[i].building_type.lean_to_building_id : 2;
                                    if(responseData.data.success==false)
                                    {
                                        dispatch({type: "NoDataCompare",                                      
                                        mfgindex:val,
                                        key:key
                                    })
                                    }
                                    if(val=="_1")
                                    {
                                        params.m_s_n_1 = key+val;
                                    }if(val=="_2")
                                    {
                                        params.m_s_n_2 = key+val;
                                    }
                                    dispatch({type: "SETCOMPARISIONBUILDINGDATA",
                                        value: const_var.ComparisionDataArray,
                                        iiD:key+val
                                    })
                                    
                                    if(params.add_left_lean==true  && const_var.compare_leanto_condition_by_mfg.side_lean_to == true)
                                    {
                                        dispatch(getPricingDataForLeantoComparision(true,'addLeftLean',key+val,newMapID,response.building[i].building_type.heavy_snow));
                                    }
                                    if(params.add_front_lean==true && const_var.compare_leanto_condition_by_mfg.end_lean_to == true)
                                    {
                                        dispatch(getPricingDataForLeantoComparision(true,'addFrontLean',key+val,newMapID,response.building[i].building_type.heavy_snow));
                                    }
                                    if(params.add_back_lean==true && const_var.compare_leanto_condition_by_mfg.end_lean_to == true)
                                    {
                                        dispatch(getPricingDataForLeantoComparision(true,'addBackLean',key+val,newMapID,response.building[i].building_type.heavy_snow));
                                    }
                                    if(params.add_right_lean==true  && const_var.compare_leanto_condition_by_mfg.side_lean_to == true)
                                    {
                                        dispatch(getPricingDataForLeantoComparision(true,'addRightLean',key+val,newMapID,response.building[i].building_type.heavy_snow));
                                    }
                                    
                              
                                })
                            }else
                            {
                                /* 
                                    * commenting this in the else case and adding after next to the parent(response.building) for loop 
                                    * The reason behind this is due to on every iteration if the condtion dosen't meet then it will comes to this else condition and shows no data to compare
                                    * for a movement and on the second iteration there is posibitity that the conditions matched then its shows the building data 
                                    * which looks odd therefore handling this case after the for loop
                                */

                                // dispatch({type: "NoDataCompare",                                      
                                //         mfgindex:val,
                                //         key:key
                                // })
                            }
                        }
                        
                      }


                  }
                  }
                    if (!isBuildingDataAvailable) {
                        dispatch({
                            type: "NoDataCompare",                                      
                            mfgindex:val,
                            key:key
                        })    
                    } 
                  } else
                  {
                        dispatch({type: "NoDataCompare",                                      
                            mfgindex:val,
                            key:key
                        })
                                    
                  }
                   

                  
                // let apiData = "";
                // if(const_var.b_o_J_1[params.p_b_t]=="Free Standing Lean-to")
                // {
                //     apiData = {"width":(params.p_b_t =="2")?params.p_w+24:params.p_w,"height":params.p_h,"single_slope_height":Math.round(params.p_h-((params.p_w * params.p_r_p) / 12)),"length":params.p_d,"map_id":const_var.Map_Id[params.p_b_t],"roof_id":params.p_r_s,"lean_to_height":0,"utility_length":(params.p_u_c==true)?params.p_u_t:0,};
                // }else
                // {
                //     apiData = {"width":(params.p_b_t =="2")?params.p_w+24:params.p_w,"height":params.p_h,"length":params.p_d,"map_id":const_var.Map_Id[params.p_b_t],"roof_id":params.p_r_s,"lean_to_height":0,"utility_length":(params.p_u_c==true)?params.p_u_t:0,};
                // }
                // return axios.post(const_var.crmSetting.price_api_url+'get-building-pricing',apiData,{"headers":const_var.crmSetting.header_key}).then(function(responseData){
                //     console.log(responseData,"responseData")
                // })    
                
        }) 
  
    }
  
    // const_var.ComparisionDataArray[key].building_data = ; 
    // const_var.ComparisionDataArray[key].pricing_data = ; 
    
}

export function getPricingDataForLeantoComparision(e,type,iiD,newMapID,heavy_snowVal)
{
    let LeanBuilding = newMapID;
    if(const_var!=undefined && const_var.crmSetting.header_key==undefined)
    {
        const_var.crmSetting.header_key = {"x-api-key":"9vZYfym4VG99tLmdoqWYI8TYW01klRpr7ywM7SA5"};
        const_var.crmSetting.price_api_url = "https://api.senseicrm.com/";
    }
    let newHeight = params.lean_p_h;

    if(const_var.ComparisionDataArray[iiD].building_data !== undefined && const_var.ComparisionDataArray[iiD].building_data.building !== undefined && const_var.ComparisionDataArray[iiD].building_data.building.length > 0){
        // console.log(const_var.ComparisionDataArray[iiD].building_data,"const_var.ComparisionDataArray[iiD].building_data",heavy_snowVal,"heavy_snowVal");
        // console.log(const_var.c_m_a,"const_var.c_m_a",const_var.c_m_a[params.p_b_t],"const_var.c_m_a[params.p_b_t]",const_var.c_m_a[params.p_b_t].default_lean_id,"const_var.c_m_a[params.p_b_t].default_lean_id");

        const_var.ComparisionDataArray[iiD].building_data.building.map(item => {
            // console.log(item.building_type.heavy_snow,"=====",heavy_snowVal );
            if(item.building_type.heavy_snow==1 && const_var.CheckSnowLoadValue==65)
            {
                if(item.building_type.building_id == const_var.ComparisionDataArray[iiD].default_lean_id){
                    LeanBuilding = item.building_type.map_id;
                }
            }if(item.building_type.heavy_snow==0 && const_var.CheckSnowLoadValue!=65)
            {
                if(item.building_type.building_id == const_var.ComparisionDataArray[iiD].default_lean_id){
                    LeanBuilding = item.building_type.map_id;
                }
            }
            
        });
    }else
    {

       if(const_var.c_m_a[params.p_b_t].defaultBuldingcheck==1)
        {
            LeanBuilding = newMapID;
        }else
        {
            LeanBuilding = newMapID;
        }
        // console.log(LeanBuilding,"LeanBuilding 22" ,const_var.c_m_a[params.p_b_t].defaultBuldingcheck);
    }
    var str = "";
    let porchLengthEnd = 0;
    let porchLengthSide = 0;
    //console.log(const_var.Map_Id[const_var.b_n_B_d],const_var.b_n_B_d,params.p_b_t);
    let utilitWidth = 0;
    let exactCalculation = 0;
    if(params.cB_addStorage_check_right || params.cB_addStorage_check_left)
    {
        utilitWidth = (params.cB_addStorage_check_right==true)?params.cB_addStorage_right:params.cB_addStorage_left;  
        if(parseInt(utilitWidth)> (params.p_w/2))
        {
            exactCalculation = parseInt(params.p_h)+ parseInt(params.p_r_p);//parseInt(params.p_h + Math.ceil((params.p_r_p * (params.p_w/2))/12)) //parseInt(params.p_h+(Math.ceil(((params.p_r_p/(params.p_w/2))))))
        }else
        {
            exactCalculation = parseInt(params.p_h+(Math.ceil(((params.p_r_p/(params.p_w/2))*utilitWidth))))
        }
        if(exactCalculation > const_var.CompareBuildingMaxHeight)
        {
            exactCalculation = const_var.CompareBuildingMaxHeight;
        }
    }
    if(type=="addLeftLean")
    {
        if ( params.add_left_front_lean_porch==true && const_var.compare_leanto_condition_by_mfg.wrap_around == true ) {
            porchLengthSide = parseInt(params.leanF_p_w);
        }
        if ( params.add_left_back_lean_porch==true && const_var.compare_leanto_condition_by_mfg.wrap_around == true ) { 
            porchLengthSide = parseInt(params.leanB_p_w);
            
        }if ( params.add_left_front_lean_porch==true && params.add_left_back_lean_porch==true && const_var.compare_leanto_condition_by_mfg.wrap_around == true ) {
            porchLengthSide = parseInt(params.leanB_p_w)+parseInt(params.leanF_p_w);
        }
        const_var.ComparisionDataArray[iiD].paramsData.lean_p_h = (newHeight.min_height>params.lean_p_h)?newHeight.min_height:params.lean_p_h;
        str = params.add_left_lean;
        var apiData = {"gauge":params.gauge_val,"width":params.lean_p_w,"height":const_var.ComparisionDataArray[iiD].paramsData.lean_p_h,"length":params.lean_p_d +porchLengthSide,"map_id":LeanBuilding,"roof_id":const_var.ComparisionDataArray[iiD].paramsData.p_r_s,"central_width":params.p_w,"central_height":params.p_h,"central_length":params.p_d,"central_utility_length":(params.p_u_c==true)?params.p_u_t:0,"central_utility_width":parseInt(utilitWidth),"central_pitch_height":exactCalculation,"utility_length":(params.add_storage_check==true)?params.add_storage:0,"central_map_id":newMapID};
    }if(type=="addFrontLean")
    {
        if( params.add_right_front_lean_porch==true && const_var.compare_leanto_condition_by_mfg.wrap_around == true) {
            porchLengthEnd = parseInt(params.leanR_p_w);
        }if (params.add_left_front_lean_porch==true && const_var.compare_leanto_condition_by_mfg.wrap_around == true) {
            porchLengthEnd = parseInt(params.lean_p_w);
        }if (params.add_right_front_lean_porch==true && params.add_left_front_lean_porch==true && const_var.compare_leanto_condition_by_mfg.wrap_around == true) {
            porchLengthEnd = parseInt(params.lean_p_w) + parseInt(params.leanR_p_w);
        }
        const_var.ComparisionDataArray[iiD].paramsData.leanF_p_h = (newHeight.min_height>params.leanF_p_h)?newHeight.min_height:params.leanF_p_h;
        str = params.add_front_lean;
         var apiData = {"gauge":params.gauge_val,"width":params.leanF_p_w,"height":const_var.ComparisionDataArray[iiD].paramsData.leanF_p_h,"length":params.leanF_p_d+porchLengthEnd,"map_id":LeanBuilding,"roof_id":const_var.ComparisionDataArray[iiD].paramsData.p_r_s,"central_width":params.p_w,"central_height":params.p_h,"central_length":params.p_d,"central_utility_length":(params.p_u_c==true)?params.p_u_t:0,"central_utility_width":parseInt(utilitWidth),"central_pitch_height":exactCalculation,"utility_length":(params.add_storage_check_front==true)?params.add_storage_front:0,"central_map_id":newMapID};
    }if(type=="addBackLean")
    {
        if( params.add_right_back_lean_porch==true && const_var.compare_leanto_condition_by_mfg.wrap_around == true) {
            porchLengthEnd = parseInt(params.leanR_p_w);
        }if (params.add_left_back_lean_porch==true && const_var.compare_leanto_condition_by_mfg.wrap_around == true) {
            porchLengthEnd = parseInt(params.lean_p_w);
        }if (params.add_right_back_lean_porch==true && params.add_left_back_lean_porch==true && const_var.compare_leanto_condition_by_mfg.wrap_around == true) {
            porchLengthEnd = parseInt(params.lean_p_w) + parseInt(params.leanR_p_w);
        }
        const_var.ComparisionDataArray[iiD].paramsData.leanB_p_h = (newHeight.min_height>params.leanB_p_h)?newHeight.min_height:params.leanB_p_h;
        str = params.add_back_lean;
        var apiData = {"gauge":params.gauge_val,"width":params.leanB_p_w,"height":const_var.ComparisionDataArray[iiD].paramsData.leanB_p_h,"length":params.leanB_p_d+porchLengthEnd,"map_id":LeanBuilding,"roof_id":const_var.ComparisionDataArray[iiD].paramsData.p_r_s,"central_width":params.p_w,"central_height":params.p_h,"central_length":params.p_d,"central_utility_length":(params.p_u_c==true)?params.p_u_t:0,"central_utility_width":parseInt(utilitWidth),"central_pitch_height":exactCalculation,"utility_length":(params.add_storage_check_back==true)?params.add_storage_back:0,"central_map_id":newMapID};
    }if(type=="addRightLean")
    {
        if( params.add_right_front_lean_porch==true && const_var.compare_leanto_condition_by_mfg.wrap_around == true ) {
            porchLengthSide = parseInt(params.leanF_p_w);
        }if (params.add_right_back_lean_porch==true && const_var.compare_leanto_condition_by_mfg.wrap_around == true) {
            porchLengthSide = parseInt(params.leanB_p_w);
        }if (params.add_right_front_lean_porch==true && params.add_right_back_lean_porch==true && const_var.compare_leanto_condition_by_mfg.wrap_around == true) {
            porchLengthSide = parseInt(params.leanB_p_w)+parseInt(params.leanF_p_w);
        }
        const_var.ComparisionDataArray[iiD].paramsData.leanR_p_h = (newHeight.min_height>params.leanR_p_h)?newHeight.min_height:params.leanR_p_h;
        str = params.add_right_lean;
        var apiData = {"gauge":params.gauge_val,"width":params.leanR_p_w,"height":const_var.ComparisionDataArray[iiD].paramsData.leanR_p_h,"length":params.leanR_p_d+porchLengthSide,"map_id":LeanBuilding,"roof_id":const_var.ComparisionDataArray[iiD].paramsData.p_r_s,"central_width":params.p_w,"central_height":params.p_h,"central_length":params.p_d,"central_utility_length":(params.p_u_c==true)?params.p_u_t:0,"central_utility_width":parseInt(utilitWidth),"central_pitch_height":exactCalculation,"utility_length":(params.add_storage_check_right==true)?params.add_storage_right:0,"central_map_id":newMapID};
    }
        return(dispatch) => {
        if(const_var.b_o_J_1[params.p_b_t] == "Custom Buildings")
        {
            apiData.is_lean_to_price = true;
        }    
        return axios.post(const_var.crmSetting.price_api_url+'get-building-pricing',apiData,{"headers":const_var.crmSetting.header_key}).then(function(response){
            if(response.data.success==false)
            {
                let stateManufacturerIds = iiD.split('_');
                dispatch({
                    type: "NoDataCompare",                                      
                    mfgindex:"_"+stateManufacturerIds[1],
                    key:stateManufacturerIds[0]
                })
                delete const_var.ComparisionDataArray[iiD];
            }else
            {
                dispatch(setPricingDataForLeantoComparision(response.data,type,iiD));
            }
        })
        .catch(function(error){
            console.log(error);
        })
    }
    
   
}

export function changeComparisonData(e,iid)
{
    return(dispatch)=>{
        dispatch({
            type:"changeComparisonData",
            event:e,
            iid:iid
        })
    }
}
export  function buildingStyleChange(val,type) {    
    const_var.isOverhang = {
        'end' : {
            isChecked: false,
            selected: '',
            size: 0.5
        },
        'side' : {
            isChecked: false,
            selected: '',
            size: 0.5
        },
        'both' : {
            isChecked: false,
            selected: '',
            size: 0.5
        }
    }
    const_var.CheckDefaultLoadForTween = true;
    const_var.CheckDoorForEdit = true;
    const_var.isShowbuildingtype = false;
    const_var.crmSetting.is_Edit = false;
    const_var.checkPickThisBuilding = false;
    const_var.isInsulaltionForOldQuotes = false;
    const_var.isTBSOldQuotesForVerticalRoof = false;
    if(const_var!=undefined && const_var.crmSetting.header_key==undefined)
    {
        const_var.crmSetting.header_key = {"x-api-key":"9vZYfym4VG99tLmdoqWYI8TYW01klRpr7ywM7SA5"};
        const_var.crmSetting.price_api_url = "https://api.senseicrm.com/";
    }
    params.oncenter_val_with_action = "";
    params.oncenter_val = 0;
    const_var.surcharge_amount_is_edit = false;
    const_var.is_loader = true;
    return (dispatch) =>{
        dispatch({type: "BUILDINGSTYLECHANGE",
        value: val
    })
      //dispatch(getSelectedTab('buildsizes'));  
      let apiData = "";
        if(const_var.b_o_J_1[params.p_b_t].includes("Free Standing Lean-to"))
        {
            if (const_var.b_o_J_1[params.p_b_t].includes("Free Standing Lean-to")) {
                params.p_r_p = 2;
                params.b_r_p = "212";
            }
            let chkFixedWidth = false;
            chkFixedWidth = const_var.c_m_a[params.p_b_t]?const_var.c_m_a[params.p_b_t].fixed_new_leg_width?const_var.c_m_a[params.p_b_t].fixed_new_leg_width.length>0?true:false:false:false;
            apiData = {"width":(params.p_b_t =="2")?params.p_w+24:params.p_w,"height":params.p_h,"single_slope_height": (const_var.c_m_a[params.p_b_t]!=undefined && const_var.c_m_a[params.p_b_t].fixed_new_leg_width!=undefined && const_var.c_m_a[params.p_b_t].fixed_new_leg_width.length>0 ) ? Math.floor(params.p_h-((params.p_w * params.p_r_p) / 12)) : Math.round(params.p_h-((params.p_w * params.p_r_p) / 12)),"length":params.p_d,"map_id":const_var.Map_Id[params.p_b_t],"roof_id":params.p_r_s,"lean_to_height":0,"utility_length":(params.p_u_c==true)?params.p_u_t:0,"is_smaller_frame_width":chkFixedWidth};
        }else
        {
            apiData = {"width":(params.p_b_t =="2")?params.p_w+24:params.p_w,"height":params.p_h,"length":params.p_d,"map_id":const_var.Map_Id[params.p_b_t],"roof_id":params.p_r_s,"lean_to_height":0,"utility_length":(params.p_u_c==true)?params.p_u_t:0,"front_utility_length":(params.cB_addStorage_check_front) ? Math.round(params.cB_addStorage_front) : 0,};
        }
        if(const_var.b_o_J_1[params.p_b_t] == "Custom Buildings")
        {
            apiData.is_lean_to_price = true;
        }
      //apiData = {"width":(params.p_b_t =="2")?params.p_w+24:params.p_w,"height":params.p_h,"length":params.p_d,"map_id":const_var.Map_Id[params.p_b_t],"roof_id":params.p_r_s,"lean_to_height":0,"utility_length":(params.p_u_c==true)?params.p_u_t:0,};
      return axios.post(const_var.crmSetting.price_api_url+'get-building-pricing',apiData,{"headers":const_var.crmSetting.header_key}).then(function(response){
        const_var.UpdatedPriceData.roof_style_price_changed = true;
        const_var.UpdatedPriceData.height_price_changed = true;
        const_var.UpdatedPriceData.roof_pitch_price_changed = true;
        
        if(params.p_i_o !=0 && response.data.data != undefined && response.data.data.central_insulation != undefined && const_var.isInsulaltionForOldQuotes == false && const_var.crmSetting.is_Edit == true && response.data.data.central_insulation.filter(obj => obj.insulation_id == params.p_i_o).length == 0){
            params.p_i_o = 0
            params.selectedInsulationId = response.data.data.central_insulation[0].insulation_id
            // params.insulation.center.showInsulation=false
            params.insulation.center.isCheked= false 
            params.insulation.center.insulationId = 0 
            params.insulation.center.roofOnly = false 
            params.insulation.center.fullBuilding = false 
            params.insulation.center.showInsulationOptions = false 
            params.insulation.center.isDisableFullInsulation = false
        }

        dispatch({
            type:"resetAlltheEditValue",
            value: val
        })
        dispatch(setPricingData(response.data,"h"));
        if(const_var.defaultBuildingArr[val].leanto=="both")
        {
            const_var.checkforLeanto = true;
            dispatch(getPricingDataForLeanto(true,'addLeftLean'));
            dispatch(getPricingDataForLeanto(true,'addRightLean'));
            const_var.checkforLeanto = true;
        }if(params.add_left_lean==true)
        {
            const_var.checkforLeanto = true;
            dispatch(getPricingDataForLeanto(true,'addLeftLean'));
            //dispatch(getPricingDataForLeanto(true,'addRightLean'));
        }
        if(params.add_right_lean==true)
        {
            const_var.checkforLeanto = true;
            //dispatch(getPricingDataForLeanto(true,'addLeftLean'));
            dispatch(getPricingDataForLeanto(true,'addRightLean'));
        }
        if(params.add_front_lean==true)
        {
            const_var.checkforLeanto = true;
            dispatch(getPricingDataForLeanto(true,'addFrontLean'));
        }
        if(params.add_back_lean==true)
        {
            const_var.checkforLeanto = true;
            dispatch(getPricingDataForLeanto(true,'addBackLean'));
        }
        const_var.UpdatedPriceData.connection_fee_end_changed = true;
        const_var.UpdatedPriceData.connection_fee_side_changed = true;
        const_var.UpdatedPriceData.left_front_wrap_connection_fee_changed = true;
        const_var.UpdatedPriceData.right_front_wrap_connection_fee_changed = true;
        const_var.UpdatedPriceData.right_back_wrap_connection_fee_changed = true;
        const_var.UpdatedPriceData.left_back_wrap_connection_fee_changed = true;
        const_var.UpdatedPriceData.common_length_changed = true;

        
        //console.log(const_var.defaultBuildingArr[val].leanto,"const_var.defaultBuildingArr[val].leanto")
        if(const_var.crmSetting.selected_sub_module==1 && const_var.crmSetting.form_action=="create" && const_var.crmSetting.login_user_id!=undefined)
        {
                        let searchParam = {'user_id':const_var.crmSetting.login_user_id,'api_token':const_var.crmSetting.api_token,"search_text":"","limit":100,"offset":0,"module":const_var.crmSetting.sub_module,"module_id":const_var.crmSetting.sub_module_id};
            return axios.post(const_var.crmSetting.api_post_url+'/api/v1/lead-customer-list',searchParam).then(function(response){
                if(response.data.data.length>0)
                {
                    if(response.data.data[0].address!=undefined && response.data.data[0].address.length>0)
                    {
                        let priceData = (response.data.data[0].address!=undefined)?response.data.data[0].address.filter(address => address.is_billing == 1):undefined;
                        let priceData1 = (response.data.data[0].address!=undefined)?response.data.data[0].address.filter(address => address.is_installation == 1):undefined;
                        response.data.data[0].address.map((slide, index) => {
                        if(priceData!=undefined && priceData<=0)
                        {
                            if(slide.is_default==1)
                            {
                                response.data.data[0].address[index].is_billing = 1;
                            }
                        }if(priceData1!=undefined && priceData1<=0)
                        {
                            if(slide.is_default==1)
                            {
                                response.data.data[0].address[index].is_installation = 1;
                            }
                        }
                        });
                    }
                    if(response.data.states!=undefined)
                    {
                        const_var.leadSourceStateData = response.data.states;
                        //console.log(const_var.leadSourceStateData,"const_var.leadSourceStateData")
                    }

                    if((response.data.data[0].address.length>0 && response.data.data[0].address!=undefined && response.data.data[0].address[0].zipcode!='' && response.data.data[0].address[0].zipcode!=null && response.data.data[0].address[0].zipcode!=undefined) && (const_var.tax.percentage==0))
                    {
                        let zipData = {'zip_code':response.data.data[0].address[0].zipcode, 'api_token':const_var.crmSetting.api_token};
                        // console.log('zip_code', zipData);
                        return axios.post(const_var.crmSetting.api_post_url+'/api/v1/tax-from-zip',zipData).then(function(response1){
                                if(response1.data.status==true)
                                {
                                    if(const_var.MoreTaxinputs.length>0)
                                    {
                                        const_var.MoreTaxinputs = [];
                                    }
                                    response.data.data[0].taxPersentage = response1.data.data[0];
                                    if(response1.data.tax_data!=undefined && response1.data.tax_data!='')
                                    {
                                        let i = 0;
                                        Object.entries(response1.data.tax_data).sort().map(([value, key])=>{
                                            if(key!=0)
                                            {
                                                if(i==0)
                                                {
                                                    response.data.data[0].taxPersentage = key;
                                                    const_var.tax.name = const_var.taxTypeName[value];
                                                }else{
                                                    const_var.MoreTaxinputs.push({'amount':0,'name':const_var.taxTypeName[value],'percentage':key,'type':'per'})
                                                }
                                                i++;
                                            }
                                            
                                        })
                                        //const_var.tax.name = action.value.data.tax_data.city_rate!=0?action.value.data.tax_data.city_rate:action.value.data.tax_data.county_rate;
                                    }
                                    //newvalue:response.data.tax_data!=undefined?response.data.tax_data:'',
                                }else
                                {
                                    response.data.data[0].taxPersentage = 0;
                                }
                                dispatch({
                                        type: "handleCustomerData",
                                        event:"",
                                        row:response.data.data[0],
                                        isSelect:"",
                                        rowIndex:"",
                                        eventType:""
                                    });
                                     
                                })
                        
                    }else
                    {
                        dispatch({
                            type: "handleCustomerData",
                            event:"",
                            row:response.data.data[0],
                            isSelect:"",
                            rowIndex:"",
                            eventType:""
                        })
                    }
                }
                //dispatch(handleCustomerData())
            })
        }
    })

      
};  

}
export function getPricingDataForLeanto(e,type,chk,flag,legstype,insulation)
{
    const_var.is_loader = true;
    let LeanBuilding = const_var.Map_Id[params.p_b_t];
    if(const_var!=undefined && const_var.crmSetting.header_key==undefined)
    {
        const_var.crmSetting.header_key = {"x-api-key":"9vZYfym4VG99tLmdoqWYI8TYW01klRpr7ywM7SA5"};
        const_var.crmSetting.price_api_url = "https://api.senseicrm.com/";
    }
    if(const_var.SendAPIBuildingData !== undefined && const_var.SendAPIBuildingData.building !== undefined && const_var.SendAPIBuildingData.building.length > 0){
        const_var.SendAPIBuildingData.building.map(item => {
            if(item.building_type.heavy_snow==1 && const_var.CheckSnowLoadValue==65)
            {
                if(item.building_type.building_id == const_var.c_m_a[params.p_b_t].default_lean_id){
                    LeanBuilding = item.building_type.map_id;
                }
            }if(item.building_type.heavy_snow==0 && const_var.CheckSnowLoadValue!=65)
            {
                if(item.building_type.building_id == const_var.c_m_a[params.p_b_t].default_lean_id){
                    LeanBuilding = item.building_type.map_id;
                }
            }
        });
    }else
    {
       if(const_var.c_m_a[params.p_b_t].defaultBuldingcheck==1)
        {
            LeanBuilding = const_var.Map_Id[params.p_b_t];
        }else
        {
            LeanBuilding = const_var.mapIdforLean;
        }
    }
    var str = "";
    //console.log(const_var.Map_Id[const_var.b_n_B_d],const_var.b_n_B_d,params.p_b_t);
    let porchLengthEnd = 0;
    let porchLengthSide = 0;
    let utilitWidth = 0;
    let exactCalculation = 0;
    if(params.cB_addStorage_check_right || params.cB_addStorage_check_left)
    {
        utilitWidth = (params.cB_addStorage_check_right==true)?params.cB_addStorage_right:params.cB_addStorage_left;  
        if(parseInt(utilitWidth)> (params.p_w/2))
        {
            exactCalculation = parseInt(params.p_h)+ parseInt(params.p_r_p);//parseInt(params.p_h + Math.ceil((params.p_r_p * (params.p_w/2))/12)) //parseInt(params.p_h+(Math.ceil(((params.p_r_p/(params.p_w/2))))))
        }else
        {
            exactCalculation = parseInt(params.p_h+(Math.ceil(((params.p_r_p/(params.p_w/2))*utilitWidth))))
        }
        if(exactCalculation>const_var.buildingHeightArray[const_var.buildingHeightArray.length-1].value)
        {
            exactCalculation = const_var.buildingHeightArray[const_var.buildingHeightArray.length-1].value;
        }
    }
    if(type=="addLeftLean")
    {
        // console.log(params.add_left_front_lean_porch,"params.add_left_front_lean_porch")
        if(params.add_left_front_lean_porch==true)
        {
            porchLengthSide = parseInt(params.leanF_p_w);
            const_var.UpdatedPriceData.front_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.left_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.left_front_wrap_connection_fee_changed = true;
        }if(params.add_left_back_lean_porch==true)
        {
            const_var.UpdatedPriceData.back_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.left_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.left_back_wrap_connection_fee_changed = true;
            porchLengthSide = parseInt(params.leanB_p_w);
        }if(params.add_left_front_lean_porch==true && params.add_left_back_lean_porch==true)
        {
            const_var.UpdatedPriceData.front_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.back_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.left_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.left_front_wrap_connection_fee_changed = true;
            const_var.UpdatedPriceData.left_back_wrap_connection_fee_changed = true;

            porchLengthSide = parseInt(params.leanB_p_w)+parseInt(params.leanF_p_w);
        }
        const_var.UpdatedPriceData.left_lean_roof_style_price_changed = true;
        if (insulation != "roofInsulation") const_var.UpdatedPriceData.left_lean_insulation_price_changed = true;
        str = params.add_left_lean;
        var apiData = {"width":params.lean_p_w,"height":params.lean_p_h,"length":params.lean_p_d+porchLengthSide,"map_id":LeanBuilding,"roof_id":params.p_r_s,"central_width":params.p_w,"central_height":params.p_h,"central_length":params.p_d,"central_utility_length":(params.p_u_c==true)?params.p_u_t:0,"central_utility_width":parseInt(utilitWidth),"central_pitch_height":exactCalculation,"utility_length":(params.add_storage_check==true)?params.add_storage:0,"central_map_id":const_var.Map_Id[params.p_b_t]};
    }if(type=="addRightLean")
    {
        if(params.add_right_front_lean_porch==true )
        {
            porchLengthSide = parseInt(params.leanF_p_w);
            const_var.UpdatedPriceData.front_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.right_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.right_front_wrap_connection_fee_changed = true;
        }if(params.add_right_back_lean_porch==true)
        {
            const_var.UpdatedPriceData.back_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.right_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.right_back_wrap_connection_fee_changed = true;
            porchLengthSide = parseInt(params.leanB_p_w);
        }if(params.add_right_front_lean_porch==true && params.add_right_back_lean_porch==true)
        {
            const_var.UpdatedPriceData.front_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.back_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.right_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.right_front_wrap_connection_fee_changed = true;
            const_var.UpdatedPriceData.right_back_wrap_connection_fee_changed = true;
            porchLengthSide = parseInt(params.leanB_p_w)+parseInt(params.leanF_p_w);
        }
        const_var.UpdatedPriceData.right_lean_roof_style_price_changed = true;
        if (insulation != "roofInsulation") const_var.UpdatedPriceData.right_lean_insulation_price_changed = true;
        str = params.add_right_lean;
        var apiData = {"width":params.leanR_p_w,"height":params.leanR_p_h,"length":params.leanR_p_d + porchLengthSide,"map_id":LeanBuilding,"roof_id":params.p_r_s,"central_width":params.p_w,"central_height":params.p_h,"central_length":params.p_d,"central_utility_length":(params.p_u_c==true)?params.p_u_t:0,"central_utility_width":parseInt(utilitWidth),"central_pitch_height":exactCalculation,"utility_length":(params.add_storage_check_right==true)?params.add_storage_right:0,"central_map_id":const_var.Map_Id[params.p_b_t]};
    }
    if(type=="addFrontLean")
    {
        if(params.add_right_front_lean_porch==true)
        {
            porchLengthEnd = parseInt(params.leanR_p_w);
            const_var.UpdatedPriceData.front_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.right_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.right_front_wrap_connection_fee_changed = true;
        }if(params.add_left_front_lean_porch==true)
        {
            const_var.UpdatedPriceData.front_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.left_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.left_front_wrap_connection_fee_changed = true;
            porchLengthEnd = parseInt(params.lean_p_w);
        }if(params.add_right_front_lean_porch==true && params.add_left_front_lean_porch==true)
        {
            const_var.UpdatedPriceData.front_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.right_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.left_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.left_front_wrap_connection_fee_changed = true;
            const_var.UpdatedPriceData.right_front_wrap_connection_fee_changed = true;
            porchLengthEnd = parseInt(params.lean_p_w) + parseInt(params.leanR_p_w);
        }
        const_var.UpdatedPriceData.front_lean_roof_style_price_changed = true;
        if (insulation != "roofInsulation")const_var.UpdatedPriceData.front_lean_insulation_price_changed = true;
        str = params.add_front_lean;
        var apiData = {"width":params.leanF_p_w,"height":params.leanF_p_h,"length":params.leanF_p_d + porchLengthEnd,"map_id":LeanBuilding,"roof_id":params.p_r_s,"central_width":params.p_w,"central_height":params.p_h,"central_length":params.p_d,"central_utility_length":(params.p_u_c==true)?params.p_u_t:0,"central_utility_width":parseInt(utilitWidth),"central_pitch_height":exactCalculation,"utility_length":(params.add_storage_check_front==true)?params.add_storage_front:0,"central_map_id":const_var.Map_Id[params.p_b_t]};
    }
    const_var.CallApionAction = true;  
    if(type=="addBackLean")
    {
        if(params.add_right_back_lean_porch==true)
        {
            const_var.UpdatedPriceData.back_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.right_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.right_back_wrap_connection_fee_changed = true;
            porchLengthEnd = parseInt(params.leanR_p_w);
        }if(params.add_left_back_lean_porch==true)
        {
            const_var.UpdatedPriceData.back_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.left_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.left_back_wrap_connection_fee_changed = true;
            porchLengthEnd = parseInt(params.lean_p_w);
        }if(params.add_right_back_lean_porch==true && params.add_left_back_lean_porch==true)
        {
            const_var.UpdatedPriceData.right_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.back_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.left_lean_roof_style_price_changed = true;
            const_var.UpdatedPriceData.right_back_wrap_connection_fee_changed = true;
            const_var.UpdatedPriceData.left_back_wrap_connection_fee_changed = true;
            porchLengthEnd = parseInt(params.lean_p_w) + parseInt(params.leanR_p_w);
        }
        const_var.UpdatedPriceData.back_lean_roof_style_price_changed = true;
        if (insulation != "roofInsulation") const_var.UpdatedPriceData.back_lean_insulation_price_changed = true;
        str = params.add_back_lean;
        var apiData = {"width":params.leanB_p_w,"height":params.leanB_p_h,"length":params.leanB_p_d + porchLengthEnd,"map_id":LeanBuilding,"roof_id":params.p_r_s,"central_width":params.p_w,"central_height":params.p_h,"central_length":params.p_d,"central_utility_length":(params.p_u_c==true)?params.p_u_t:0,"central_utility_width":parseInt(utilitWidth),"central_pitch_height":exactCalculation,"utility_length":(params.add_storage_check_back==true)?params.add_storage_back:0,"central_map_id":const_var.Map_Id[params.p_b_t]};
    }
    const_var.CallApionAction = true;  
    const_var.isPriceAPIcalled = true; 
    const_var.UpdatedPriceData.connection_fee_end_changed = true;
    const_var.UpdatedPriceData.connection_fee_side_changed = true;
    if(params.p_j_t==true)
    {
        const_var.UpdatedPriceData.common_length_changed = true;
    }
    const_var.UpdatedPriceData.certificate_price_changed = true;
    // const_var.UpdatedPriceData.insulation_price = undefined;
    resetCheckBoxQuantityExtraBowsPrice();
    //console.log(str,"getPricingDataForLeanto",e,type);
    if(apiData!=undefined)
    {
        apiData.gauge = const_var.g_v;
    }
    if(const_var.b_o_J_1[params.p_b_t] == "Custom Buildings")
    {
        apiData.is_lean_to_price = true;
    }
    if(str!="")
    {
        return(dispatch) => {
        return axios.post(const_var.crmSetting.price_api_url+'get-building-pricing',apiData,{"headers":const_var.crmSetting.header_key}).then(function(response){
            const_var.showDisabledClass = false;
            if(response.data.success==false)
            {
                dispatch(setPricingDataForLeanto(Constant.customLeantoPriceData,type));
            }else
            {
                if(type=="addLeftLean")
                {
                    const_var.UpdatedPriceData.left_lean_roof_style_price_changed = true;
                    const_var.UpdatedPriceData.left_lean_height_price_changed = true;
                    const_var.UpdatedPriceData.connection_fee_side_changed = true;
                    const_var.UpdatedPriceData.connection_fee_end_changed = true;

                    if( params.add_left_front_lean_porch ) const_var.UpdatedPriceData.left_front_wrap_connection_fee_changed = true;
                    if( params.add_left_back_lean_porch ) const_var.UpdatedPriceData.left_back_wrap_connection_fee_changed = true;
                    if( params.add_left_front_lean_porch && params.add_left_back_lean_porch ) {
                        const_var.UpdatedPriceData.left_front_wrap_connection_fee_changed = true;
                        const_var.UpdatedPriceData.left_back_wrap_connection_fee_changed = true;
                    }
                }if(type=="addRightLean")
                {
            
                    const_var.UpdatedPriceData.right_lean_roof_style_price_changed = true;
                    const_var.UpdatedPriceData.right_lean_height_price_changed = true;
                    const_var.UpdatedPriceData.connection_fee_side_changed = true;
                    const_var.UpdatedPriceData.connection_fee_end_changed = true;
                    if( params.add_right_front_lean_porch ) const_var.UpdatedPriceData.right_front_wrap_connection_fee_changed = true;
                    if( params.add_right_back_lean_porch ) const_var.UpdatedPriceData.right_back_wrap_connection_fee_changed = true;
                    if( params.add_right_front_lean_porch && params.add_right_back_lean_porch ) {
                        const_var.UpdatedPriceData.right_front_wrap_connection_fee_changed = true;
                        const_var.UpdatedPriceData.right_back_wrap_connection_fee_changed = true;
                    }
                }
                if(type=="addFrontLean")
                {
                    
                    const_var.UpdatedPriceData.front_lean_roof_style_price_changed = true;
                    const_var.UpdatedPriceData.front_lean_height_price_changed = true;
                    const_var.UpdatedPriceData.connection_fee_side_changed = true;
                    const_var.UpdatedPriceData.connection_fee_end_changed = true;
                    if( params.add_left_front_lean_porch ) const_var.UpdatedPriceData.left_front_wrap_connection_fee_changed = true;
                    if( params.add_right_front_lean_porch ) const_var.UpdatedPriceData.right_front_wrap_connection_fee_changed = true;
                    if( params.add_right_front_lean_porch && params.add_left_front_lean_porch ){
                        const_var.UpdatedPriceData.left_front_wrap_connection_fee_changed = true;
                        const_var.UpdatedPriceData.right_front_wrap_connection_fee_changed = true;
                    }
                }
                if(type=="addBackLean")
                {
                    const_var.UpdatedPriceData.back_lean_roof_style_price_changed = true;
                    const_var.UpdatedPriceData.back_lean_height_price_changed = true;
                    const_var.UpdatedPriceData.connection_fee_side_changed = true;
                    const_var.UpdatedPriceData.connection_fee_end_changed = true;
                    if( params.add_right_back_lean_porch ) const_var.UpdatedPriceData.right_back_wrap_connection_fee_changed = true;
                    if( params.add_left_back_lean_porch ) const_var.UpdatedPriceData.left_back_wrap_connection_fee_changed = true;
                    if( params.add_right_back_lean_porch && params.add_left_back_lean_porch==true ) {
                        const_var.UpdatedPriceData.right_back_wrap_connection_fee_changed = true;
                        const_var.UpdatedPriceData.left_back_wrap_connection_fee_changed = true;
                    }
                }
                if(flag==undefined)
                {
                    const_var.checkforLeanto = true;
                }
                if(params.p_i_o !=0)
                {
                    if (insulation != "roofInsulation") const_var.UpdatedPriceData.insulation_price = undefined;
                    // const_var.UpdatedPriceData.height_price_changed = true;
                    // const_var.UpdatedPriceData.roof_style_price_changed= true;
                    // const_var.UpdatedPriceData.bothLeanto = true;
                    if(response.data.data != undefined && response.data.data.central_insulation != undefined && const_var.isInsulaltionForOldQuotes == false && const_var.crmSetting.is_Edit == true && response.data.data.central_insulation.filter(obj => obj.insulation_id == params.p_i_o).length == 0){
                        // const_var.isInsulaltionForOldQuotes = true
                        params.p_i_o = 0
                        params.selectedInsulationId = response.data.data.central_insulation[0].insulation_id
                        // params.insulation.center.showInsulation=false
                        params.insulation.center.isCheked= false 
                        params.insulation.center.insulationId = 0 
                        params.insulation.center.roofOnly = false 
                        params.insulation.center.fullBuilding = false 
                        params.insulation.center.showInsulationOptions = false 
                        params.insulation.center.isDisableFullInsulation = false
                    }  
                }
                legstype == "checkLegs" ? const_var.checkForLeantoLegs = true : const_var.checkForLeantoLegs = false;
                const_var.UpdatedPriceData.certificate_price_changed = true;
                const_var.UpdatedPriceData.surcharge_amount=undefined;
                dispatch(setPricingDataForLeanto(response.data,type));
            }
            
            if(const_var.UpdatedPriceData.connection_fee_side_changed!=true)
            {
                const_var.UpdatedPriceData.connection_fee_side_changed = true;
                const_var.UpdatedPriceData.wainscot_price_changed = true;
            }
            
        })
        .catch(function(error){
            console.log(error);
        })
    }
    }else
    {
       // console.log("rahul you in this condition")
        return(dispatch)=>{
            const_var.UpdatedPriceData.surcharge_amount=undefined;
            if(type=="addFrontLean")
            {
                dispatch(setPricingDataForLeanto(const_var.leanGetDataFront, type));
            }if(type=="addBackLean")
            {
                dispatch(setPricingDataForLeanto(const_var.leanGetDataBack, type));
            }else
            {
                dispatch(setPricingDataForLeanto((type=="addLeftLean")?const_var.leanGetDataLeft:const_var.leanGetDataRight, type));
            }
        }
    }
   
}

export function getPricingData(flag,leanVal,newStr)
{
    const_var.is_loader = true;
    if(const_var!=undefined && const_var.crmSetting.header_key==undefined)
    {
        const_var.crmSetting.header_key = {"x-api-key":"9vZYfym4VG99tLmdoqWYI8TYW01klRpr7ywM7SA5"};
        const_var.crmSetting.price_api_url = "https://api.senseicrm.com/";
    }
    let Mainval = 0;
    if(params.p_b_t=="2"){
        Mainval = (params.p_r_s==4 || params.p_r_s==5) ? params.p_h - 5 : params.p_h - 3;
    }else{
        Mainval = 0;
    }
    const_var.CallApionAction = true;  
    const_var.isPriceAPIcalled = true;  
    //console.log(params.p_u_c,params.p_u_t,"params.p_u_c")
    let apiData = "";
    let exactCalculation = 0;
    let incloseVal = 0;
    if(params.cB_addStorage_check_left==true)
    {
        incloseVal = params.cB_addStorage_left;
    }
    if(params.cB_addStorage_check_right==true)
    {
        incloseVal = params.cB_addStorage_right;
    }
    if(parseInt(incloseVal)> (params.p_w/2))
    {
        exactCalculation = parseInt(params.p_h + Math.ceil((params.p_r_p * (params.p_w/2))/12)) //parseInt(params.p_h+(Math.ceil(((params.p_r_p/(params.p_w/2))))))
    }else
    {
        exactCalculation = parseInt(params.p_h+(Math.ceil(((params.p_r_p/(params.p_w/2))*incloseVal))))
    }
    if(exactCalculation>const_var.buildingHeightArray[const_var.buildingHeightArray.length-1].value)
    {
        exactCalculation = const_var.buildingHeightArray[const_var.buildingHeightArray.length-1].value;
    }
    
    if(const_var.b_o_J_1[params.p_b_t].includes("Free Standing Lean-to"))
    {
        let chkFixedWidth = false;
        chkFixedWidth = const_var.c_m_a[params.p_b_t]?const_var.c_m_a[params.p_b_t].fixed_new_leg_width?const_var.c_m_a[params.p_b_t].fixed_new_leg_width.length>0?true:false:false:false;
        if(incloseVal!=0)
        {
            if(parseInt(incloseVal)> (params.p_w/2))
            {
                exactCalculation = parseInt(Math.round(params.p_h-params.p_r_p)+(Math.ceil(((params.p_r_p/(params.p_w))*incloseVal))));//parseInt(Math.round(params.p_h-params.p_r_p) + Math.ceil((params.p_r_p * (params.p_w/2))/12)) //parseInt(Math.round(params.p_h-params.p_r_p)+(Math.ceil(((params.p_r_p/(params.p_w/2))))))
            }else
            {
                exactCalculation = parseInt(Math.round(params.p_h-params.p_r_p)+(Math.ceil(((params.p_r_p/(params.p_w))*incloseVal))))
            }
            if(exactCalculation>const_var.buildingHeightArray[const_var.buildingHeightArray.length-1].value)
            {
                exactCalculation = const_var.buildingHeightArray[const_var.buildingHeightArray.length-1].value;
            }

            apiData = {"width":(params.p_b_t =="2")?params.p_w+24:params.p_w,"height":params.p_h,"single_slope_height": (const_var.c_m_a[params.p_b_t]!=undefined && const_var.c_m_a[params.p_b_t].fixed_new_leg_width!=undefined && const_var.c_m_a[params.p_b_t].fixed_new_leg_width.length>0 ) ? Math.floor(params.p_h-((params.p_w * params.p_r_p) / 12)) : Math.round(params.p_h-((params.p_w * params.p_r_p) / 12)),"length":params.p_d,"map_id":const_var.Map_Id[params.p_b_t],"roof_id":params.p_r_s,"lean_to_height":0,"utility_length":(params.p_u_c==true)?params.p_u_t:0,"utility_width":parseInt(incloseVal),"pitch_height":exactCalculation,"is_smaller_frame_width":chkFixedWidth};
        }else{
            apiData = {"width":(params.p_b_t =="2")?params.p_w+24:params.p_w,"height":params.p_h,"single_slope_height": (const_var.c_m_a[params.p_b_t]!=undefined && const_var.c_m_a[params.p_b_t].fixed_new_leg_width!=undefined && const_var.c_m_a[params.p_b_t].fixed_new_leg_width.length>0 ) ? Math.floor(params.p_h-((params.p_w * params.p_r_p) / 12)) : Math.round(params.p_h-((params.p_w * params.p_r_p) / 12)),"length":params.p_d,"map_id":const_var.Map_Id[params.p_b_t],"roof_id":params.p_r_s,"lean_to_height":0,"utility_length":(params.p_u_c==true)?params.p_u_t:0,"is_smaller_frame_width":chkFixedWidth};
        }
    }else
    {
        if(incloseVal!=0)
        {
            apiData = {"width":(params.p_b_t =="2")?params.p_w+24:params.p_w,"height":params.p_h,"length":params.p_d,"map_id":const_var.Map_Id[params.p_b_t],"roof_id":params.p_r_s,"lean_to_height":Mainval,"utility_length":(params.p_u_c==true)?params.p_u_t:0,"utility_width":parseInt(incloseVal),"pitch_height":exactCalculation};
        }else{
            apiData = {"width":(params.p_b_t =="2")?params.p_w+24:params.p_w,"height":params.p_h,"length":params.p_d,"map_id":const_var.Map_Id[params.p_b_t],"roof_id":params.p_r_s,"lean_to_height":Mainval,"utility_length":(params.p_u_c==true)?Math.round(params.p_u_t):0,"front_utility_length":(params.cB_addStorage_check_front) ? Math.round(params.cB_addStorage_front) : 0,};
        }
    }
    const_var.UpdatedPriceData.connection_fee_side_changed = true;
    if(params.p_j_t==true)
    {
        const_var.UpdatedPriceData.common_length_changed = true;
    }
    if(params.p_u_c==true || params.cB_addStorage_check_left==true || params.cB_addStorage_check_right==true || params.noStorageCertificatePriceChange)
    {
        const_var.UpdatedPriceData.utility_price_changed = true;
        const_var.UpdatedPriceData.front_utility_price_changed = true;
        const_var.UpdatedPriceData.certificate_price_changed = true;
        const_var.UpdatedPriceData.roof_pitch_price_changed = true;
        if ( params.noStorageCertificatePriceChange ) params.noStorageCertificatePriceChange = false;
    }
    resetCheckBoxQuantityExtraBowsPrice();

    if(apiData!=undefined)
    {
        apiData.gauge = const_var.g_v;
    }
    if(const_var.b_o_J_1[params.p_b_t] == "Custom Buildings")
    {
        apiData.is_lean_to_price = true;
    }
    return(dispatch) => {
        return axios.post(const_var.crmSetting.price_api_url+'get-building-pricing',apiData,{"headers":const_var.crmSetting.header_key}).then(function(response){
            if(params.p_i_o !=0)
            {
                if(response.data.data != undefined && response.data.data.insulation != undefined && const_var.isInsulaltionForOldQuotes == false && const_var.crmSetting.is_Edit == true && response.data.data.insulation.filter(obj => obj.insulation_id == params.p_i_o).length == 0){
                    // const_var.isInsulaltionForOldQuotes = true
                    params.p_i_o = 0
                    params.selectedInsulationId = response.data.data.insulation[0].insulation_id
                    // params.insulation.center.showInsulation=false
                    params.insulation.center.isCheked= false 
                    params.insulation.center.insulationId = 0 
                    params.insulation.center.roofOnly = false 
                    params.insulation.center.fullBuilding = false 
                    params.insulation.center.showInsulationOptions = false 
                    params.insulation.center.isDisableFullInsulation = false
                }
                else{
                    const_var.UpdatedPriceData.height_price_changed = true;
                    const_var.UpdatedPriceData.roof_style_price_changed= true;
                    const_var.UpdatedPriceData.bothLeanto = true;
                }
            }
            if(params.p_w_c_n==true)
            {
                const_var.UpdatedPriceData.wainscot_price_changed = true;
            }
            if(flag==undefined)
            {
                if(newStr=="w" || newStr=="l" || newStr=="h")
                {
                    const_var.UpdatedPriceData.right_wall_price_changed = true;
                    const_var.UpdatedPriceData.left_wall_price_changed = true;
                    const_var.UpdatedPriceData.left_wall_cut_panel_price_changed = true;
                    const_var.UpdatedPriceData.right_wall_cut_panel_price_changed = true;
                    const_var.UpdatedPriceData.front_wall_price_changed = true;
                    const_var.UpdatedPriceData.back_wall_price_changed = true;
                }
            }
            dispatch(setPricingData(response.data,newStr));
            if (params.isBreezeway && (params.cB_addStorage_check_front && params.p_u_c)){
                const_var.UpdatedPriceData.utility_price_changed = true;
                const_var.UpdatedPriceData.front_utility_price_changed = true;
                const_var.UpdatedPriceData.wainscot_price_changed = true;
                const_var.UpdatedPriceData.color_price_changed = true;
                const_var.UpdatedPriceData.roof_pitch_price_changed = true;
                const_var.UpdatedPriceData.connection_fee_end_changed = true;
                const_var.UpdatedPriceData.roof_style_price_changed= true;
            }
            // dispatch(CheckDoorWindowsInstallationFees(response.data));
            // if(flag=='dimension')
            // {
            //     dispatch({
            //         type:'CallDoorCSG',
            //     });
            // }
            if(flag==undefined)
            {
                const_var.UpdatedPriceData.roof_style_price_changed = true;
                const_var.UpdatedPriceData.height_price_changed = true;
                const_var.UpdatedPriceData.roof_pitch_price_changed = true;
                //const_var.UpdatedPriceData.height_price_changed = true;
                if(params.add_front_lean==true)
                {
                    if(params.add_left_front_lean_porch==true || params.add_right_front_lean_porch==true)
                    {
                        dispatch(getPricingDataForLeanto(leanVal,'addFrontLean',params.lean_p_w,false,'checkLegs'));
                    }else{
                        dispatch(getPricingDataForLeanto(true,'addFrontLean','',undefined,'checkLegs'));
                    }
                    
                }
                if(params.add_left_lean==true)
                {
                    if(params.add_left_front_lean_porch==true || params.add_left_back_lean_porch==true)
                    {
                        dispatch(getPricingDataForLeanto(leanVal,'addLeftLean',params.leanF_p_w,false,'checkLegs'));
                    }else{
                        dispatch(getPricingDataForLeanto(true,'addLeftLean','',undefined,'checkLegs'));
                    }
                    //dispatch(getPricingDataForLeanto(true,'addRightLean'));
                }
                if(params.add_right_lean==true)
                {
                    if(params.add_right_front_lean_porch==true || params.add_right_back_lean_porch==true)
                    {
                        dispatch(getPricingDataForLeanto(leanVal,'addRightLean',params.leanF_p_w,false,'checkLegs'));
                    }else
                    {
                        dispatch(getPricingDataForLeanto(true,'addRightLean','',undefined,'checkLegs'));
                    }
                }
                if(params.add_back_lean==true)
                {
                    if(params.add_left_back_lean_porch==true || params.add_right_back_lean_porch==true)
                    {
                        dispatch(getPricingDataForLeanto(leanVal,'addBackLean',params.lean_p_w,false,'checkLegs'));
                    }else{
                        dispatch(getPricingDataForLeanto(true,'addBackLean','',undefined,'checkLegs'));
                    }
                    
                }
            }
        })
        .catch(function(error){
            console.log(error);
        })
    }
   
}

function resetCheckBoxQuantityExtraBowsPrice() {
    const_var.ExtraItemsFeaturesQuantityArray.length > 0 &&  const_var.ExtraItemsFeaturesQuantityArray.map(checkBoxQuantity => {
        if (checkBoxQuantity && checkBoxQuantity.name == "bows") {
            if (const_var.UpdatedPriceData['elements'] != undefined && const_var.UpdatedPriceData['elements'][checkBoxQuantity.label.toString()] != undefined && const_var.UpdatedPriceData['elements'][checkBoxQuantity.label.toString()].is_edit==true) {
                checkBoxQuantity.is_edit = false;
                const_var.UpdatedPriceData['elements'][checkBoxQuantity.label.toString()].is_edit = false;
            }
        }
    });
}

export function getPricingDataforUtility(val,combo,incloseVal)
{
    const_var.is_loader = true;
    if(const_var!=undefined && const_var.crmSetting.header_key==undefined)
    {
        const_var.crmSetting.header_key = {"x-api-key":"9vZYfym4VG99tLmdoqWYI8TYW01klRpr7ywM7SA5"};
        const_var.crmSetting.price_api_url = "https://api.senseicrm.com/";
    }
    let Mainval = 0;
    if(params.p_b_t=="2"){
        Mainval = (params.p_r_s==4 || params.p_r_s==5) ? params.p_h - 5 : params.p_h - 3;
    }else{
        Mainval = 0;
    }
    const_var.CallApionAction = true;  
    const_var.isPriceAPIcalled = true; 
    // console.log(params.p_u_c,params.p_u_t,"params.p_u_c",val,const_var.DistanceArr[params.p_b_t][params.p_r_s]);
    if(const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
    {
        params.p_u_t = params.p_u_t > const_var.DistanceArr[params.p_b_t][params.p_r_s] *1 ? params.p_u_t :  Math.floor((params.p_d-const_var.DistanceArr[params.p_b_t][params.p_r_s]) / const_var.DistanceArr[params.p_b_t][params.p_r_s]) * const_var.DistanceArr[params.p_b_t][params.p_r_s];
        // params.p_u_t = const_var.DistanceArr[params.p_b_t][params.p_r_s] *1 ;
    }
    let apiData = "";
    let exactCalculation = 0;
    if(parseInt(incloseVal)> (params.p_w/2))
    {
        exactCalculation = parseInt(params.p_h)+ parseInt(params.p_r_p);//parseInt(params.p_h + Math.ceil((params.p_r_p * (params.p_w/2))/12)) //parseInt(params.p_h+(Math.ceil(((params.p_r_p/(params.p_w/2))))))
    }else
    {
        exactCalculation = parseInt(params.p_h+(Math.ceil(((params.p_r_p/(params.p_w/2))*incloseVal))))
    }
    if(exactCalculation>const_var.buildingHeightArray[const_var.buildingHeightArray.length-1].value)
    {
        exactCalculation = const_var.buildingHeightArray[const_var.buildingHeightArray.length-1].value;
    }
    // console.log(const_var.buildingHeightArray,params.p_r_p,params.p_w/2,params.p_h,incloseVal,"incloseVal",exactCalculation,"exactCalculation",parseInt(params.p_h+(Math.ceil(((params.p_r_p/(params.p_w/2)))))),parseInt(params.p_h+(Math.ceil(((params.p_r_p/(params.p_w/2))*incloseVal)))))
    if(const_var.b_o_J_1[params.p_b_t].includes("Free Standing Lean-to"))
    {
        let chkFixedWidth = false;
        chkFixedWidth = const_var.c_m_a[params.p_b_t]?const_var.c_m_a[params.p_b_t].fixed_new_leg_width?const_var.c_m_a[params.p_b_t].fixed_new_leg_width.length>0?true:false:false:false;
        if(combo!=undefined)
        {
            if(parseInt(incloseVal)> (params.p_w/2))
            {
                exactCalculation = parseInt(Math.round(params.p_h-params.p_r_p)+(Math.ceil(((params.p_r_p/(params.p_w))*incloseVal))));//parseInt(Math.round(params.p_h-params.p_r_p) + Math.ceil((params.p_r_p * (params.p_w/2))/12)) //parseInt(Math.round(params.p_h-params.p_r_p)+(Math.ceil(((params.p_r_p/(params.p_w/2))))))
            }else
            {
                exactCalculation = parseInt(Math.round(params.p_h-params.p_r_p)+(Math.ceil(((params.p_r_p/(params.p_w))*incloseVal))))
            }
            if(exactCalculation>const_var.buildingHeightArray[const_var.buildingHeightArray.length-1].value)
            {
                exactCalculation = const_var.buildingHeightArray[const_var.buildingHeightArray.length-1].value;
            }
            apiData = {"width":(params.p_b_t =="2")?params.p_w+24:params.p_w,"height":params.p_h,"single_slope_height": (const_var.c_m_a[params.p_b_t]!=undefined && const_var.c_m_a[params.p_b_t].fixed_new_leg_width!=undefined && const_var.c_m_a[params.p_b_t].fixed_new_leg_width.length>0 ) ? Math.floor(params.p_h-((params.p_w * params.p_r_p) / 12)) : Math.round(params.p_h-((params.p_w * params.p_r_p) / 12)),"length":params.p_d,"map_id":const_var.Map_Id[params.p_b_t],"roof_id":params.p_r_s,"lean_to_height":0,"utility_width":parseInt(incloseVal),"pitch_height":exactCalculation,"is_smaller_frame_width":chkFixedWidth};
        }else
        {
            apiData = {"width":(params.p_b_t =="2")?params.p_w+24:params.p_w,"height":params.p_h,"single_slope_height": (const_var.c_m_a[params.p_b_t]!=undefined && const_var.c_m_a[params.p_b_t].fixed_new_leg_width!=undefined && const_var.c_m_a[params.p_b_t].fixed_new_leg_width.length>0 ) ? Math.floor(params.p_h-((params.p_w * params.p_r_p) / 12)) : Math.round(params.p_h-((params.p_w * params.p_r_p) / 12)),"length":params.p_d,"map_id":const_var.Map_Id[params.p_b_t],"roof_id":params.p_r_s,"lean_to_height":0,"utility_length":(params.p_u_c==true)?params.p_u_t:0,"is_smaller_frame_width":chkFixedWidth};
        }
    }else
    {
        if(combo!=undefined)
        {
            apiData = {"width":(params.p_b_t =="2")?params.p_w+24:params.p_w,"height":params.p_h,"length":params.p_d,"map_id":const_var.Map_Id[params.p_b_t],"roof_id":params.p_r_s,"lean_to_height":Mainval,"utility_width":parseInt(incloseVal),"pitch_height":exactCalculation};
        }else
        {
            apiData = {"width":(params.p_b_t =="2")?params.p_w+24:params.p_w,"height":params.p_h,"length":params.p_d,"map_id":const_var.Map_Id[params.p_b_t],"roof_id":params.p_r_s,"lean_to_height":Mainval,"utility_length":params.p_u_t,/* "front_utility_length": Math.round(params.cB_addStorage_front) */};
        }
    }
    if(/* params.cB_addStorage_check_front || */ params.p_u_c==true || incloseVal!=undefined )
    {
        const_var.UpdatedPriceData.connection_fee_end_changed = true;
        const_var.UpdatedPriceData.connection_fee_side_changed = true;
        const_var.UpdatedPriceData.utility_price_changed = true;
        const_var.UpdatedPriceData.front_wall_price_changed = true;
        const_var.UpdatedPriceData.back_wall_price_changed = true;
        const_var.UpdatedPriceData.insulation_price = undefined;
        if(params.p_j_t==true)
        {
            const_var.UpdatedPriceData.common_length_changed = true;
        }
        if(params.p_i_o !=0)
        {
            const_var.UpdatedPriceData.height_price_changed = true;
            const_var.UpdatedPriceData.roof_style_price_changed= true;
            const_var.UpdatedPriceData.bothLeanto = true;
        }
        if(apiData!=undefined)
        {
            apiData.gauge = const_var.g_v;
        }
        if(const_var.b_o_J_1[params.p_b_t] == "Custom Buildings")
        {
            apiData.is_lean_to_price = true;
        }
        return(dispatch) => {
            return axios.post(const_var.crmSetting.price_api_url+'get-building-pricing',apiData,{"headers":const_var.crmSetting.header_key}).then(function(response){
                if(params.p_i_o !=0 && response.data.data != undefined && response.data.data.insulation != undefined && const_var.isInsulaltionForOldQuotes == false && const_var.crmSetting.is_Edit == true && response.data.data.insulation.filter(obj => obj.insulation_id == params.p_i_o).length == 0){
                    // const_var.isInsulaltionForOldQuotes = true
                    params.p_i_o = 0
                    params.selectedInsulationId = response.data.data.insulation[0].insulation_id
                    // params.insulation.center.showInsulation=false
                    params.insulation.center.isCheked= false 
                    params.insulation.center.insulationId = 0 
                    params.insulation.center.roofOnly = false 
                    params.insulation.center.fullBuilding = false 
                    params.insulation.center.showInsulationOptions = false 
                    params.insulation.center.isDisableFullInsulation = false
                }
                dispatch(setPricingData(response.data,true));
                dispatch(CheckDoorWindowsInstallationFees(response.data));
            })
            .catch(function(error){
                console.log(error);
            })
        }
    }else
    {
         return(dispatch)=>{
            dispatch({type: "UTILITYPRICECALCULATION",
                value: const_var.a_p_d_a,
                str:params.p_u_c
            })
        }
    }

   
}
export function changeBuildingData(apiResponse){
    return {
        type: "CHANGEBUILDINGDATA",
        value: apiResponse
    }
    
}
export function CheckOtherBuildingType(value,defaultVal)
{
    return{
        type:"CheckOtherBuildingType",
        value:value,
        defaultVal:defaultVal
    }
}
export function setPricingDataForLeantoComparision(apiResponse,type,iiD)
{
    return{
        type:"setPricingDataForLeantoComparision",
        value:apiResponse,
        str:type,
        iiD:iiD
    }
}
export function CheckDoorWindowsInstallationFees(response)
{
    return{
        type:"CheckDoorWindowsInstallationFees",
        value:response
    }
}
export function setPricingDataForLeanto(apiResponse, type)
{
    return {
        type:"SETPRICINGDATAFORLEANTO",
        value : apiResponse,
        str : type
    }
}
export function setPricingData(apiResponse,newFlag)
{
    if(newFlag!=undefined)
    {
        if((newFlag=="w"|| newFlag=="l"))
        {
            const_var.UpdatedPriceData.roof_style_price_changed= true;
            const_var.UpdatedPriceData.roof_pitch_price_changed = true;
            const_var.UpdatedPriceData.height_price_changed = true;
        }if((newFlag=="h"))
        {
            const_var.UpdatedPriceData.height_price_changed= true;
            const_var.UpdatedPriceData.roof_pitch_price_changed = true;
        }
    }
    return {
        type:"SETPRICINGDATA",
        value : apiResponse,
        str:newFlag,
    }
}
export  function roofColorChange(str , a) {
    return (dispatch) =>{
        dispatch({type: "COLOR",
        value: a,
        str: str
    })
      };
      
}

export function buildingSurfaceChange(val)
{
    return (dispatch) =>{
        dispatch({type: "SURFACECHANGE",
        value: val
    })
      };
}

export function getBuildingDataforProduct(e){
    if (const_var !== undefined && const_var.crmSetting.header_key === undefined) {
        const_var.crmSetting.header_key = { "x-api-key": "9vZYfym4VG99tLmdoqWYI8TYW01klRpr7ywM7SA5" };
        const_var.crmSetting.price_api_url = "https://api.senseicrm.com/";
    }
    console.log(const_var.stateManufacturerAcordingAPI[e],const_var.bjD,e,const_var.Map_Id[params.p_b_t],params.p_b_t,const_var.Map_Id);
    let checkFlag = [];
    let checkFlagNew = false;

    return (dispatch) => {
        dispatch({type: "STATECHANGEVALUE",payload: null});
        params.p_s_m = const_var.stateManufacturerAcordingAPI[e].id;
        var apiDataBuilding = { "manufacturer_id": params.m_s_n, "state_id": parseInt(e) };
        return axios.post(const_var.crmSetting.price_api_url + "get-building-data", apiDataBuilding, { "headers": const_var.crmSetting.header_key }).then((response) => {
            console.log(response.data.data,"response");
            if(response.data.data.building.length>0)
            {
            for (var i = 0; i <= response.data.data.building.length - 1; i++) {
                checkFlag.push(i);
                console.log(checkFlag,response.data.data.building.length,response.data.data.building[i].building_type.map_id ,"!=", const_var.Map_Id[params.p_b_t],e,params.p_s_n)
                if(response.data.data.building[i].building_type.map_id == const_var.Map_Id[params.p_b_t])
                {
                    console.log(response.data.data.building[i].building_type.map_id ,"!=", const_var.Map_Id[params.p_b_t],e,params.p_s_n)
                    params.p_s_n = parseInt(e);
                    const_var.isShowSaveQuote = false;
                    dispatch({type: "STATECHANGEVALUE",
                            payload: parseInt(e)});
                    return;
                }else
                {
                    if(response.data.data.building[i].building_type.map_id != const_var.Map_Id[params.p_b_t])
                    {
                        const_var.isShowSaveQuote = true;
                        dispatch({type: "STATECHANGEVALUE",
                            payload: parseInt(e)});
                        return;
                        
                    }
                }
            }
            }else
            {
                const_var.isShowSaveQuote = true;
                dispatch({type: "STATECHANGEVALUE",
                    payload: parseInt(e)});
                return;
            }
            
        }).catch(function (error) {
            console.log(error);
        })
    }
}
export function stateManufacturerChange(val,key)
{
    //const_var.shippingState = 'Select';
    if(const_var.crmSetting.pre_quote_form == true && const_var.post_data.address != undefined && const_var.post_data.address.length > 0 && const_var.shippingState != undefined && const_var.shippingState != '' && const_var.stateNameAcordingAPI[val]!=undefined && const_var.stateNameAcordingAPI[val] != const_var.shippingState){
        delete const_var.post_data.address;
        delete const_var.post_data.shipping_zipcode;
        delete const_var.post_data.full_name;
        delete const_var.post_data.first_name;
        delete const_var.post_data.last_name;
        delete const_var.post_data.phone_no;
        delete const_var.post_data.email;
        const_var.shippingState = 'Select';
        const_var.tempPostData = {}
    }  

    return (dispatch) =>{
        const_var.showInfoError = true
        if(val != "Select")
        {
            dispatch({type: "stateManufacturerChange",
                value: val,
                key:key
            })
        }
    };
    
}
export function setZipCodeVal(val)
{
    return (dispatch) =>{
        dispatch({
            type: "setZipCodeVal",
            value: val
        })
    };    
}
export  function roofStyleChange(val) {    
    return (dispatch) =>{
        dispatch({type: "ROOFSTYLECHANGE",
        value: val
    })
      };
      
}
export function changeBuildingDimension({val,str,checkLean,checkCustomDimension,secondParam,leftFront, rightFront, leftBack, rightBack, skipCheck})
{   
    // console.log(val,str,checkLean,checkCustomDimension,secondParam,"val,str,checkLean,checkCustomDimension,secondParam")
    // console.log({leftFront, rightFront, leftBack, rightBack});
    // ,'','' ,this.props.params.add_left_front_lean_porch, this.props.params.add_right_front_lean_porch,this.props.params.add_left_back_lean_porch, this.props.params.add_right_back_lean_porch
        return (dispatch) =>{
            if (!skipCheck) {

                params.preAction = {val,str,checkLean,checkCustomDimension,secondParam,leftFront, rightFront, leftBack, rightBack, skipCheck, type: "CHANGEDIMENSION"};

                if(checkLean==undefined) {
                    dispatch({
                        type:"checkCHANGEDIMENSION",
                        value:val,
                        str:str,
                        secondParam:(secondParam==undefined)?undefined:secondParam,
                        checkCustomDimension:(checkCustomDimension==undefined)?undefined:checkCustomDimension,
                    })
                } else {
                    dispatch({
                        type:"checkCHANGEDIMENSION",
                        value:val,
                        str:str
                    })
                }
            }
            if(!const_var.isShowAlert || skipCheck) {
                if(checkLean==undefined)
                {    
                    batch(() => {
                        dispatch({
                            type:"CHANGEDIMENSION",
                            value:val,
                            str:str,
                            secondParam:(secondParam==undefined)?undefined:secondParam,
                            checkCustomDimension:(checkCustomDimension==undefined)?undefined:checkCustomDimension,
                        })
                        // dispatch({
                        //     type:"setupTween",
                        // });
                        if(const_var.isShowAlert==false)
                        {
                            if((str=="w" || str == "l") && params.singleSlope==true)
                            {
                                if(const_var.c_m_a[params.p_b_t]!=undefined && const_var.c_m_a[params.p_b_t].fixed_new_leg_width!=undefined && const_var.c_m_a[params.p_b_t].fixed_new_leg_width.length>0)
                                {
                                    const_var.buildingHeightArray =[]
                                    let filterData = const_var.c_m_a[params.p_b_t].fixed_new_leg_width[0][params.p_w];
                                     Array.apply(null, { length: filterData.max_height + 1 }).map(Number.call, Number).slice(filterData.min_height).map((val, index) => {
                                            const_var.buildingHeightArray.push({ "value": val, "label": val +" x "+ (filterData.min_smaller_height+index)});
                                        
                                     })  
                                    let chkHeight = const_var.buildingHeightArray.filter((data)=>data.value==params.p_h);
                                    if(chkHeight.length==0)
                                    {
                                        params.p_h = const_var.buildingHeightArray[0].value;
                                    }
                                    CenterBuildingArrows.updateCenterBuildingArrows()
                                    const_var.entry_points.map((value,key)=>{
                                        CenterBuildingArrows.centerVerticalDoorArrow(value.entry_position, value.entry_dimension_height,value.component_wall_name,value.uniqueId);
                                        CenterBuildingArrows.centerVerticalDoorArrowB(value.entry_position, value.entry_dimension_height,value.component_wall_name,value.uniqueId);
                                    })
                                }
                             }
                            dispatch(getPricingData(undefined,val,str));
                            if(checkCustomDimension!=undefined || str=="w" || str=="l" )
                            {
                                const_var.UpdatedPriceData.roof_style_price_changed = true;
                                const_var.UpdatedPriceData.roof_pitch_price_changed = true;
                                const_var.UpdatedPriceData.height_price_changed = true;
                                // if(const_var.crmSetting.is_Edit == true){

                                //     dispatch({type: "stateManufacturerChange",
                                //         value: params.m_s_n,
                                //         key:"manufacturer"
                                //     })
                                // }

                            }
                            if(str=="h" )
                            {
                                const_var.UpdatedPriceData.height_price_changed = true;
                                const_var.UpdatedPriceData.roof_pitch_price_changed = true;
                                // if(const_var.crmSetting.is_Edit == true){
                                //     dispatch({type: "stateManufacturerChange",
                                //         value: params.m_s_n,
                                //         key:"manufacturer"
                                //     })
                                // }
                            }
                        
                        }
                        
                    });
                    //dispatch(getPricingData(false));

                }else
                {
                    batch(() => {
                        dispatch({
                            type:"CHANGEDIMENSION",
                            value:val,
                            str:str
                        })
                        // dispatch({
                        //     type:"setupTween",
                        // });
                        const checkLegs =(str == 'leanF_h' || str == 'lean_h' || str == 'leanR_h' || str == 'leanB_h') ?  undefined : 'checkLegs';
                        if ((leftFront || rightFront || leftBack  || rightBack) && (str=='leanF_l' || str=='lean_l' || str=='leanR_l' || str=='leanB_l' )){

                            if(checkLean=="left")
                            {
                                dispatch(getPricingDataForLeanto(val,"addLeftLean",'',false, checkLegs));
                                
                            }if(checkLean=="right")
                            {
                                dispatch(getPricingDataForLeanto(val,"addRightLean",'',false, checkLegs));
                                
                            }
                            if(checkLean=="front")
                            {
                                dispatch(getPricingDataForLeanto(val,"addFrontLean",'',false, checkLegs));
                                
                            }
                            if(checkLean=="back")
                            {
                                dispatch(getPricingDataForLeanto(val,"addBackLean",'',false, checkLegs));
                                
                            }
                        }else{
                            // if ((!leftFront && !rightFront && !leftBack  && !rightBack)){

                                if(checkLean=="left")
                                {
                                    dispatch(getPricingDataForLeanto(val,"addLeftLean",'',false, checkLegs));
                                    
                                }if(checkLean=="right")
                                {
                                    dispatch(getPricingDataForLeanto(val,"addRightLean",'',false, checkLegs));
                                    
                                }
                                if(checkLean=="front")
                                {
                                    dispatch(getPricingDataForLeanto(val,"addFrontLean",'',false, checkLegs));
                                    
                                }
                                if(checkLean=="back")
                                {
                                    dispatch(getPricingDataForLeanto(val,"addBackLean",'',false, checkLegs));
                                    
                                }
                            // }
                        }
                        // } else {
                        //      dispatch(handleLeanPorchPrices(leftFront, rightFront, leftBack, rightBack)); 

                        // }
                        
                    });
                }
                params.preAction = {};
            }
        }
   
}
export function changePorchDimension(val,str,checkLean,checkCustomDimension,secondParam)
{   
        return (dispatch) =>{
          batch(() => {
            dispatch({
                type:"CHANGEPORCHDIMENSION",
                value:val,
                str:str,
                secondParam:(secondParam==undefined)?undefined:secondParam,
                checkCustomDimension:(checkCustomDimension==undefined)?undefined:checkCustomDimension,
            })
        });
        }
    }

export function makeDimensionUpdate()
{
    return (dispatch) =>{
        dispatch({
            type:"makeDimensionUpdate"
        })
    }
}
export function getSelectedTab(key){
    return(dispatch)=>{
        batch(() => {
        if(key=="capture")
        {   
            // dispatch(ShowHideTranslusant(''));
            dispatch(handleCloseforDoorWindows(1));
        }
        dispatch({
            type:"SELECTED_TAB",
            key: key        
        });    
                    
        });
            
    }
}
export function toggleFullyOpenedCheckboxChange(e, str) {
    return(dispatch)=>{
            dispatch({
                type:"FULLYOPENED",
                event:e,
                value: str
            })
    }
}
export function toggleFullyEnclosedCheckboxChange(e, str) {
    return(dispatch)=>{
            dispatch({
                type:"FULLYENCLOSED",
                event:e,
                value: str
            })
    }
}

// for state change tab

export function getSelectedTabstate(key,setPreStateOnly = false, resetErrorMsg = false){
      const removea = document.querySelector('body');   
      removea.classList.remove("active-total-price");

    //   console.log(key,"getSelectedTabstate")
    const_var.showReportLoading = false;

    // if(const_var.crmSetting.is_zipcode_screen != undefined && const_var.crmSetting.is_zipcode_screen == true  && (const_var.state_mfg_zipcode == undefined || const_var.state_mfg_zipcode == '')){
    //     const_var.hideZipCodeField = true
    // }
    if(setPreStateOnly == true || const_var.isKLinkEnable == true){
        const_var.showStateOnly = true
        const_var.apiCalledforState = false
    }
    return(dispatch)=>{
        if(resetErrorMsg == true){
            dispatch(resetErrMsg())
        }
        dispatch({
            type:"SELECTED_TAB_STATE",
            key: key   
        });        
    }
}
export function toggleAllVerticalCheckboxChange()
{
    return (dispatch)=>{
        dispatch({
            type:"ALLVERTICAL"
        })
    }
}
export function APICalledForState(value)
{
    return (dispatch)=>{
        dispatch({
            type:"APICalledForState",
            value: value
        })
    }
}
export function toggleCutPanelsCheckboxChange(key)
{
    return (dispatch) =>{
        dispatch({
            type:"CUTPANELACTION",
            key:key
        })
    }
}
export function handleWallSelectonChangeValue(e,wall)
{
    return(dispatch)=>{
        dispatch({
            type:"INDUVIDUALWALLCHANGE",
            value:e,
            wall:wall
        })
    }
}
export function updateWainscot()
{
    return(dispatch)=>{
        dispatch({
            type:"ADDWAINSCOT"
        })
    }
}
export function trussChange(trussName) {
    return(dispatch)=>{
        dispatch({
            type:"TRUSSCHANGEFUNCTION",
            value:trussName
        })
    }
}
export function gaugeChange(e)
{
    const_var.is_loader = true;
    return(dispatch)=>{
        // dispatch({
        //     type:"GAUGEACTION",
        //     value:e
        // })
        if(const_var!=undefined && const_var.crmSetting.header_key==undefined)
        {
            const_var.crmSetting.header_key = {"x-api-key":"9vZYfym4VG99tLmdoqWYI8TYW01klRpr7ywM7SA5"};
            const_var.crmSetting.price_api_url = "https://api.senseicrm.com/";
        }
        let apiData = {};
        if(const_var.b_o_J_1[params.p_b_t].includes("Free Standing Lean-to"))
        {
            let chkFixedWidth = false;
            chkFixedWidth = const_var.c_m_a[params.p_b_t]?const_var.c_m_a[params.p_b_t].fixed_new_leg_width?const_var.c_m_a[params.p_b_t].fixed_new_leg_width.length>0?true:false:false:false;
            if(params.cB_addStorage_check_right || params.cB_addStorage_check_left)
            {
                let utilitWidth = (params.cB_addStorage_check_right==true)?params.cB_addStorage_right:params.cB_addStorage_left;  
                let exactCalculation = 0;
                if(parseInt(utilitWidth)> (params.p_w/2))
                {
                    exactCalculation = parseInt(Math.round(params.p_h-params.p_r_p)+(Math.ceil(((params.p_r_p/(params.p_w))*utilitWidth))));//parseInt(Math.round(params.p_h-params.p_r_p) + Math.ceil((params.p_r_p * (params.p_w/2))/12)) //parseInt(Math.round(params.p_h-params.p_r_p)+(Math.ceil(((params.p_r_p/(params.p_w/2))))))
                }else
                {
                    exactCalculation = parseInt(Math.round(params.p_h-params.p_r_p)+(Math.ceil(((params.p_r_p/(params.p_w))*utilitWidth))))
                }
                if(exactCalculation>const_var.buildingHeightArray[const_var.buildingHeightArray.length-1].value)
                {
                    exactCalculation = const_var.buildingHeightArray[const_var.buildingHeightArray.length-1].value;
                }

                apiData.center = {"gauge":e,"width":(params.p_b_t =="2")?params.p_w+24:params.p_w,"height":params.p_h,"single_slope_height": (const_var.c_m_a[params.p_b_t]!=undefined && const_var.c_m_a[params.p_b_t].fixed_new_leg_width!=undefined && const_var.c_m_a[params.p_b_t].fixed_new_leg_width.length>0 ) ? Math.floor(params.p_h-((params.p_w * params.p_r_p) / 12)) : Math.round(params.p_h-((params.p_w * params.p_r_p) / 12)),"length":params.p_d,"map_id":const_var.Map_Id[params.p_b_t],"roof_id":params.p_r_s,"lean_to_height":0,"utility_width":parseInt(utilitWidth),"pitch_height":exactCalculation,"is_smaller_frame_width":chkFixedWidth};
            }else
            {
                apiData.center = {"gauge":e,"width":(params.p_b_t =="2")?params.p_w+24:params.p_w,"height":params.p_h,"single_slope_height":(const_var.c_m_a[params.p_b_t]!=undefined && const_var.c_m_a[params.p_b_t].fixed_new_leg_width!=undefined && const_var.c_m_a[params.p_b_t].fixed_new_leg_width.length>0 ) ? Math.floor(params.p_h-((params.p_w * params.p_r_p) / 12)) : Math.round(params.p_h-((params.p_w * params.p_r_p) / 12)),"length":params.p_d,"map_id":const_var.Map_Id[params.p_b_t],"roof_id":params.p_r_s,"lean_to_height":0,"utility_length":(params.p_u_c==true)?params.p_u_t:0,"front_utility_length":(params.cB_addStorage_check_front) ? Math.round(params.cB_addStorage_front) : 0,"is_smaller_frame_width":chkFixedWidth};
            }
        }else
        {
            if(params.cB_addStorage_check_right || params.cB_addStorage_check_left)
            {
                let utilitWidth = (params.cB_addStorage_check_right==true)?params.cB_addStorage_right:params.cB_addStorage_left;  
                let exactCalculation = 0;
                if(parseInt(utilitWidth)> (params.p_w/2))
                {
                    exactCalculation = parseInt(params.p_h)+ parseInt(params.p_r_p);//parseInt(params.p_h + Math.ceil((params.p_r_p * (params.p_w/2))/12)) //parseInt(params.p_h+(Math.ceil(((params.p_r_p/(params.p_w/2))))))
                }else
                {
                    exactCalculation = parseInt(params.p_h+(Math.ceil(((params.p_r_p/(params.p_w/2))*utilitWidth))))
                }
                if(exactCalculation>const_var.buildingHeightArray[const_var.buildingHeightArray.length-1].value)
                {
                    exactCalculation = const_var.buildingHeightArray[const_var.buildingHeightArray.length-1].value;
                }  
                apiData.center = {"gauge":e,"width":(params.p_b_t =="2")?params.p_w+24:params.p_w,"height":params.p_h,"length":params.p_d,"map_id":const_var.Map_Id[params.p_b_t],"roof_id":params.p_r_s,"lean_to_height":0,"utility_width":parseInt(utilitWidth),"pitch_height":exactCalculation};
            }else
            {
                apiData.center = {"gauge":e,"width":(params.p_b_t =="2")?params.p_w+24:params.p_w,"height":params.p_h,"length":params.p_d,"map_id":const_var.Map_Id[params.p_b_t],"roof_id":params.p_r_s,"lean_to_height":0,"utility_length":(params.p_u_c==true)?params.p_u_t:0,"front_utility_length":(params.cB_addStorage_check_front) ? Math.round(params.cB_addStorage_front) : 0,};
            }
        }
        if(params.add_left_lean==true || params.add_right_lean==true || params.add_back_lean==true || params.add_front_lean==true)
        {
            let LeanBuilding = const_var.Map_Id[params.p_b_t];
            if(const_var.SendAPIBuildingData !== undefined && const_var.SendAPIBuildingData.building !== undefined && const_var.SendAPIBuildingData.building.length > 0){
                const_var.SendAPIBuildingData.building.map(item => {
                    if(item.building_type.heavy_snow==1 && const_var.CheckSnowLoadValue==65)
                    {
                        if(item.building_type.building_id == const_var.c_m_a[params.p_b_t].default_lean_id){
                            LeanBuilding = item.building_type.map_id;
                        }
                    }if(item.building_type.heavy_snow==0 && const_var.CheckSnowLoadValue!=65)
                    {
                        if(item.building_type.building_id == const_var.c_m_a[params.p_b_t].default_lean_id){
                            LeanBuilding = item.building_type.map_id;
                        }
                    }
                });
            }else
            {
               if(const_var.c_m_a[params.p_b_t].defaultBuldingcheck==1)
                {
                    LeanBuilding = const_var.Map_Id[params.p_b_t];
                }else
                {
                    LeanBuilding = const_var.mapIdforLean;
                }
            }
            var str = "";
            //console.log(const_var.Map_Id[const_var.b_n_B_d],const_var.b_n_B_d,params.p_b_t);
            let porchLengthEnd = 0;
            let porchLengthSide = 0;
            
            let utilitWidth = 0;
            let exactCalculation = 0;
            if(params.cB_addStorage_check_right || params.cB_addStorage_check_left)
            {
                utilitWidth = (params.cB_addStorage_check_right==true)?params.cB_addStorage_right:params.cB_addStorage_left;  
                if(parseInt(utilitWidth)> (params.p_w/2))
                {
                    exactCalculation = parseInt(params.p_h)+ parseInt(params.p_r_p);//parseInt(params.p_h + Math.ceil((params.p_r_p * (params.p_w/2))/12)) //parseInt(params.p_h+(Math.ceil(((params.p_r_p/(params.p_w/2))))))
                }else
                {
                    exactCalculation = parseInt(params.p_h+(Math.ceil(((params.p_r_p/(params.p_w/2))*utilitWidth))))
                }
                if(exactCalculation>const_var.buildingHeightArray[const_var.buildingHeightArray.length-1].value)
                {
                    exactCalculation = const_var.buildingHeightArray[const_var.buildingHeightArray.length-1].value;
                }
            }

            if(params.add_left_lean==true)
            {
                // console.log(params.add_left_front_lean_porch,"params.add_left_front_lean_porch")
                if(params.add_left_front_lean_porch==true)
                {
                    porchLengthSide = parseInt(params.leanF_p_w);
                    
                }if(params.add_left_back_lean_porch==true)
                {
                    porchLengthSide = parseInt(params.leanB_p_w);
                }if(params.add_left_front_lean_porch==true && params.add_left_back_lean_porch==true)
                {
                    
                    porchLengthSide = parseInt(params.leanB_p_w)+parseInt(params.leanF_p_w);
                }
                str = params.add_left_lean;
                apiData.left = {"gauge":e,"width":params.lean_p_w,"height":params.lean_p_h,"length":params.lean_p_d+porchLengthSide,"map_id":LeanBuilding,"roof_id":params.p_r_s,"central_width":params.p_w,"central_height":params.p_h,"central_length":params.p_d,"central_utility_length":(params.p_u_c==true)?params.p_u_t:0,"central_utility_width":parseInt(utilitWidth),"central_pitch_height":exactCalculation,"utility_length":(params.add_storage_check==true)?params.add_storage:0,"central_map_id":const_var.Map_Id[params.p_b_t]};
            }if(params.add_right_lean==true)
            {
                if(params.add_right_front_lean_porch==true )
                {
                    porchLengthSide = parseInt(params.leanF_p_w);
                    
                }if(params.add_right_back_lean_porch==true)
                {
                    
                    porchLengthSide = parseInt(params.leanB_p_w);
                }if(params.add_right_front_lean_porch==true && params.add_right_back_lean_porch==true)
                {
                    
                    porchLengthSide = parseInt(params.leanB_p_w)+parseInt(params.leanF_p_w);
                }
                
                str = params.add_right_lean;
                apiData.right = {"gauge":e,"width":params.leanR_p_w,"height":params.leanR_p_h,"length":params.leanR_p_d + porchLengthSide,"map_id":LeanBuilding,"roof_id":params.p_r_s,"central_width":params.p_w,"central_height":params.p_h,"central_length":params.p_d,"central_utility_length":(params.p_u_c==true)?params.p_u_t:0,"central_utility_width":parseInt(utilitWidth),"central_pitch_height":exactCalculation,"utility_length":(params.add_storage_check_right==true)?params.add_storage_right:0,"central_map_id":const_var.Map_Id[params.p_b_t]};
            }
            if(params.add_front_lean==true)
            {
                if(params.add_right_front_lean_porch==true)
                {
                    porchLengthEnd = parseInt(params.leanR_p_w);
                    
                }if(params.add_left_front_lean_porch==true)
                {
                    
                    porchLengthEnd = parseInt(params.lean_p_w);
                }if(params.add_right_front_lean_porch==true && params.add_left_front_lean_porch==true)
                {
                    
                    porchLengthEnd = parseInt(params.lean_p_w) + parseInt(params.leanR_p_w);
                }
                str = params.add_front_lean;
                apiData.front = {"gauge":e,"width":params.leanF_p_w,"height":params.leanF_p_h,"length":params.leanF_p_d + porchLengthEnd,"map_id":LeanBuilding,"roof_id":params.p_r_s,"central_width":params.p_w,"central_height":params.p_h,"central_length":params.p_d,"central_utility_length":(params.p_u_c==true)?params.p_u_t:0,"central_utility_width":parseInt(utilitWidth),"central_pitch_height":exactCalculation,"utility_length":(params.add_storage_check_front==true)?params.add_storage_front:0,"central_map_id":const_var.Map_Id[params.p_b_t]};
            }
            if(params.add_back_lean==true)
            {
                if(params.add_right_back_lean_porch==true)
                {
                    porchLengthEnd = parseInt(params.leanR_p_w);
                }if(params.add_left_back_lean_porch==true)
                {
                    porchLengthEnd = parseInt(params.lean_p_w);
                }if(params.add_right_back_lean_porch==true && params.add_left_back_lean_porch==true)
                {
                    porchLengthEnd = parseInt(params.lean_p_w) + parseInt(params.leanR_p_w);
                }
                
                str = params.add_back_lean;
                apiData.back = {"gauge":e,"width":params.leanB_p_w,"height":params.leanB_p_h,"length":params.leanB_p_d + porchLengthEnd,"map_id":LeanBuilding,"roof_id":params.p_r_s,"central_width":params.p_w,"central_height":params.p_h,"central_length":params.p_d,"central_utility_length":(params.p_u_c==true)?params.p_u_t:0,"central_utility_width":parseInt(utilitWidth),"central_pitch_height":exactCalculation,"utility_length":(params.add_storage_check_back==true)?params.add_storage_back:0,"central_map_id":const_var.Map_Id[params.p_b_t]};
            }
        }
        const_var.UpdatedPriceData.left_wall_price_changed= true; 
        const_var.UpdatedPriceData.right_wall_price_changed= true; 
        const_var.UpdatedPriceData.front_wall_price_changed= true; 
        const_var.UpdatedPriceData.back_wall_price_changed= true; 
        const_var.UpdatedPriceData.utility_price_changed= true; 
        const_var.UpdatedPriceData.front_utility_price_changed = true;
        const_var.UpdatedPriceData.left_lean_left_wall_price_changed= true; 
        const_var.UpdatedPriceData.left_lean_front_wall_price_changed= true;
        const_var.UpdatedPriceData.left_lean_back_wall_price_changed= true;
        const_var.UpdatedPriceData.left_lean_utility_price_changed= true; 
        const_var.UpdatedPriceData.right_lean_right_wall_price_changed= true; 
        const_var.UpdatedPriceData.right_lean_front_wall_price_changed= true; 
        const_var.UpdatedPriceData.right_lean_back_wall_price_changed= true; 
        const_var.UpdatedPriceData.right_lean_utility_price_changed= true; 
        const_var.UpdatedPriceData.front_lean_left_wall_price_changed= true; 
        const_var.UpdatedPriceData.front_lean_front_wall_price_changed= true;
        const_var.UpdatedPriceData.front_lean_back_wall_price_changed= true;
        const_var.UpdatedPriceData.front_lean_utility_price_changed= true;
        const_var.UpdatedPriceData.back_lean_left_wall_price_changed= true; 
        const_var.UpdatedPriceData.back_lean_front_wall_price_changed= true; 
        const_var.UpdatedPriceData.back_lean_back_wall_price_changed= true; 
        const_var.UpdatedPriceData.back_lean_utility_price_changed= true;
        // const_var.UpdatedPriceData.surcharge_amount = undefined;
        return axios.post(const_var.crmSetting.price_api_url+'api/v1/pricing/gauge',apiData,{"headers":const_var.crmSetting.header_key}).then(function(response){
            dispatch({
                type:"GAUGEACTION",
                value:e,
                apiResponseData:response.data.data
            })
        })
        .catch(function(error){
            console.log(error);
        })
        // if(const_var!=undefined && const_var.crmSetting.header_key==undefined)
        // {
        //     const_var.crmSetting.header_key = {"x-api-key":"9vZYfym4VG99tLmdoqWYI8TYW01klRpr7ywM7SA5"};
        //     const_var.crmSetting.price_api_url = "https://api.senseicrm.com/";
        // }
    
        // let apiData = "";
        // apiData = {"width":params.p_w,"height":params.p_h,"length":params.p_d,"map_id":const_var.Map_Id[params.p_b_t],"roof_id":params.p_r_s,"lean_to_height":0,"utility_length":(params.p_u_c==true)?params.p_u_t:0,};
        // return axios.post(const_var.crmSetting.price_api_url+'api/v1/pricing/gauge',apiData,{"headers":const_var.crmSetting.header_key}).then(function(response){
        //     console.log(response,"response");
        //     dispatch({
        //         type:"GAUGEACTION",
        //         value:e
        //     })
        // })
        // .catch(function(error){
        //     console.log(error);
        // })
       
    }
}

export function handleCanopyCheckboxChange(e)
{
    return(dispatch)=>{
        dispatch({
            type:"handleCanopyCheckboxChange",
            value:e
        })
    }
}
export function handleCupola(e, option, uniqueId, cupola) {
    return(dispatch)=>{
        dispatch({
            type:"handleCupola",
            value:e,
            option:option,
            uniqueId:uniqueId,
            cupola:cupola
        })
    }
}
export function setPriceForCupola (flag,length){ 
    return {
        type:"setPriceForCupola",
        flag:flag,
        length:length
    }
  }

export function cetificateChange(e,val,other)
{
    return(dispatch)=>{
        dispatch({
            type:"PRICEDATACERTIFICATION",
            value:e,
            str:val,
            other:other
        })
    }
}
export function handleLiftRequired(val)
{
    return(dispatch)=>{
        dispatch({
            type:'handleLiftRequired',
            value:val
        })
    }
}
export function extraItemsAction(e,condition,nextVal,index,indexName,checkIndex)
{
    if(checkIndex=="anchors")
    {
        return(dispatch)=>{
            dispatch({
                type:"AdditionComponentAdd",
                value:e,
                condition:condition,
                nextVal:nextVal,
                index:index,
                indexName:indexName,
                checkIndex:checkIndex
            })
        }
    }if(checkIndex=="addNewComponent")
    {
        return(dispatch)=>{
            dispatch({
                type:"AddNewComponentAdd",
                value:e,
                condition:condition,
                nextVal:nextVal,
                index:index,
                indexName:indexName,
                checkIndex:checkIndex
            })
        }
    }if(checkIndex=="addNewTax"){
        return(dispatch)=>{
            dispatch({
                type:"addNewTax",
                value:e,
                condition:condition,
                nextVal:nextVal,
                index:index,
                indexName:indexName,
                checkIndex:checkIndex
            })
        }
    }else
    {
        return(dispatch)=>{
            dispatch({
                type:"EXTRAELEMENTS",
                value:e,
                condition:condition,
                nextVal:nextVal,
                index:index,
                indexName:indexName,
                checkIndex:checkIndex
            })
            if ( condition == "extraitemsCheckbox" && nextVal && nextVal.name != undefined && nextVal.name == "fourth_center_cost" && (params.isBreezeway || params.p_u_c)){
                dispatch(getPricingData(false));
            }
        }
    }
    
}

export function handleInsulation(e, condition, _type, ) {
    return(dispatch) => {
        dispatch({
            type:"handleInsulation",
            value:e,
            condition:condition,
            _type:_type,
        })
    }
}

export function handleOverhang(e, isfor ,condition,nextVal,index,indexName,checkIndex) {
    let overHangSize = const_var.isOverhang[isfor]['size'];
    // let nextValWithSize = overHangSize != 0.5 ? nextVal.filter(obj => obj.sheet_name.includes(overHangSize))[0] : nextVal[0];
    let nextValWithSize = nextVal.filter(obj => obj.sheet_name.includes(overHangSize));
    nextValWithSize = nextValWithSize.length > 0 ? nextValWithSize[0] : nextVal[0];
    return(dispatch) => {
        dispatch({
            type:"handleOverhang",
            value:e,
            isfor: isfor
        })
       dispatch({
           type:"EXTRAELEMENTS",
           value:e,
           condition:condition,
           nextVal: nextValWithSize,
        //    nextVal: const_var.isOverhang[isfor]['size'] == 2 ? nextVal[1] : nextVal[0],
           index:index,
           indexName:indexName,
           checkIndex:checkIndex
       })
    }
}

export function handleOverhangSel(e, isfor, condition,nextVal,index,indexName,checkIndex) {
    let overHangSize = const_var.isOverhang[isfor]['size'];
    // let nextValWithSize = overHangSize != 0.5 ? nextVal.filter(obj => obj.sheet_name.includes(e))[0] : nextVal[0];
    let nextValWithSize = nextVal.filter(obj => obj.sheet_name.includes(e));
    nextValWithSize = nextValWithSize.length > 0 ? nextValWithSize[0] : nextVal[0];
    return(dispatch) => {
        dispatch({
            type:"handleOverhangSel",
            value:e,
            isfor: isfor
        })
       dispatch({
           type:"EXTRAELEMENTS",
           value:e,
           condition:condition,
           nextVal: nextValWithSize,
        //    nextVal: const_var.isOverhang[isfor]['size'] == 2 ? nextVal[1] : nextVal[0],
           index:index,
           indexName:indexName,
           checkIndex:checkIndex,
           isSelect: true
       })
    }
}

export function confirmStateAction(e)
{
    return(dispatch)=>{
        dispatch({
            type:"confirmStateAction",
            value:e
        })
    }
}

export function extraInformationAction(e,condition)
{
    return(dispatch)=>{
        dispatch({
            type:"EXTRAINFORMATION",
            value:e,
            condition:condition
        })
    }
}
export function handleLeanToWallSelectonChangeValue(e, wall,typeofLean)
{
    return(dispatch)=>{
        dispatch({
            type:"INDUVIDUALLEANTOWALLCHANGE",
            value:e,
            wall:wall,
            typeofLean:typeofLean
        })
    }
}
export function toggleAddUtilityCheckboxChange(e, storage, incloseVal) {
    return(dispatch)=>{
        batch(() => {
        dispatch({
            type:"ADDUTILITY",
            value:e.target.value,
            storage:storage,
        })
        if(params.p_u_c == true || params.cB_addStorage_check_front){
            dispatch(getPricingDataforUtility(e));
        } 
        if(storage == "both"){
            dispatch(getPricingDataforUtility(e,'left_combo',params.cB_addStorage_left));
            dispatch(getPricingDataforUtility(e,'right_combo',params.cB_addStorage_right));
        }
        if(storage == "bothside_with_back"){
            dispatch(getPricingDataforUtility(e));
            dispatch(getPricingDataforUtility(e,'left_combo',params.cB_addStorage_left));
            dispatch(getPricingDataforUtility(e,'right_combo',params.cB_addStorage_right));
        }
        if(params.cB_addStorage_check_left == true){
            incloseVal = params.cB_addStorage_left;
            dispatch(getPricingDataforUtility(e,'left_combo',incloseVal));
        } 
        if (params.cB_addStorage_check_right == true) {
            incloseVal = params.cB_addStorage_right;
            dispatch(getPricingDataforUtility(e,'right_combo',incloseVal));
        }
    });
    }
}
export function nostorage(e,val)
{
    let chkSideCombo= false;
    return(dispatch)=>{
        if(params.p_u_c==true || params.cB_addStorage_check_left==true || params.cB_addStorage_check_right==true)
        {
            chkSideCombo = true;
        }
        dispatch({
            type:"NOSTORAGE",
            event:e,
            val:val
        })
        if(chkSideCombo==true)
        {
            if (const_var.crmSetting.is_Edit){
                const_var.UpdatedPriceData.left_wall_price_changed = true;
                const_var.UpdatedPriceData.right_wall_price_changed = true;
            } 
            dispatch(getPricingData(false));
            const_var.UpdatedPriceData.front_wall_price_changed = true;
            const_var.UpdatedPriceData.back_wall_price_changed = true;
        }
    }
}
export function toggleAddUtilityCheckboxChangeForFront()
{
    return(dispatch)=>{
        dispatch({
            type:"ADDUTILITYFRONT",
        })
    }
}
export function toggleAddUtilityCheckboxChangeForBack()
{
    return(dispatch)=>{
        dispatch({
            type:"ADDUTILITYBACK",
        })
    }
}
export function toggleAddUtilityCheckboxChangeForLeft()
{
    return(dispatch)=>{
        dispatch({
            type:"ADDUTILITYLEFT",
        })
    }
}
export function toggleAddUtilityCheckboxChangeForRight()
{
    return(dispatch)=>{
        dispatch({
            type:"ADDUTILITYRIGHT",
        })
    }
}

export function handleUtilityLenghtSelectonChangeValue(e,str)
{
    return(dispatch)=>{
        dispatch({
            type:"UTILITYLENGHTCHANGE",            
            value:e,
            str:str
        })
    }
}

export function handleUtilityLenghtSelectonChangeValueCB(e,str)
{
    return(dispatch)=>{
        dispatch({
            type:"UTILITYLENGHTCHANGECB",            
            value:e,
            str:str
        })
    }
}

export function handleUtilityLenghtSelectonChangeValueCBL(e,str)
{
    return(dispatch)=>{
        dispatch({
            type:"UTILITYLENGHTCHANGECBL",            
            value:e,
            str:str
        })
    }
}

export function alertCancel(alertUsedFor){  
    // console.log(alertUsedFor, "alertUsedFor",const_var.alertUsedFor);  
    return(dispatch)=>{
        dispatch({
            type: "alertCancel",
            alertUsedFor: alertUsedFor
        })
        // if (const_var.alertUsedFor == "YouCanNotAddPorch" || const_var.alertUsedFor == "YourCanNotAddPorch"){
        //     console.log(alertUsedFor, "alertUsedFor",const_var.alertUsedFor,params.params_cancel,params); 
        //     dispatch(handleLeanPorchPrices(params.params_cancel.add_left_front_lean_porch, params.params_cancel.add_right_front_lean_porch, params.params_cancel.add_left_back_lean_porch, params.params_cancel.add_right_back_lean_porch)); 
        // }
        
    }
}
export function alertDone(alertUsedFor,key){

    return(dispatch)=>{

        if(const_var.alertUsedFor=="REMOVEPOSITIONCOMPONENT") {
                batch(() => {
                    dispatch({
                        type:"addLeantoSection",
                        event:undefined,
                        value: `add${key[0].toUpperCase() + key.slice(1)}Lean`,
                        chkRemoveLean:false
                    })
                   dispatch(getPricingDataForLeanto(undefined,`add${key[0].toUpperCase() + key.slice(1)}Lean`));
                  

                   
                });
                addLeantoSection(undefined, `add${key[0].toUpperCase() + key.slice(1)}Lean`, false, false, false, false,false);
            }
        if(const_var.alertUsedFor=="CancelOrderQuote")
        {
            let dwIconsDiv = document.getElementById("doorwindowicons");
            dwIconsDiv && dwIconsDiv.classList.add("d-none");
            if(const_var.BuldingIDforReset!=undefined){
                cuComponent.removeAlltheComponent(true);
                dispatch(geDefaultBuildingData(params.p_s_n));
                
            }      
        }
        //This code is for custom building
        if(const_var.alertUsedFor == "customBuildings"){
            const_var.dealer_discount_label = "" ;
            const_var.manufacturer_discount_label = "" ;
            if(const_var.checkmoreCustomizeFlag!=undefined && const_var.checkmoreCustomizeFlag == false){
                let cutomBuildingData = const_var.defaultBuildingArr.filter(checkbuildtype => checkbuildtype.name.includes('Custom Buildings') );
                dispatch(buildingStyleChangeAccordingtoType(cutomBuildingData[0].id,cutomBuildingData[0].other_building_id.split(",")))
                if(const_var.loginSession == false ){
                    const_var.hide_price_calculation  = 1              
                }
            }else{
                let cutomBuildingData = const_var.defaultBuildingArr.filter(checkbuildtype => checkbuildtype.name.includes('Garage') );
                dispatch(buildingStyleChangeAccordingtoType(cutomBuildingData[0].id,cutomBuildingData[0].other_building_id.split(",")))
                if(const_var.loginSession == false && const_var.stateData!= undefined){
                    const_var.hide_price_calculation = const_var.stateData.hide_price_calculation
                }
            }
        }
        if(const_var.alertUsedFor=="ManageKlinkMessage")
        {
            dispatch({
                type:"GenrateBuildingDatatoServer",
                event:"",
                key:"genrate",
                    
            })
        } 
        if(const_var.alertUsedFor=="YourCanNotAddLeanTo")
        {
            const_var.UpdatedPriceData.front_wall_price_changed = true;
            const_var.UpdatedPriceData.back_wall_price_changed = true;
            const_var.UpdatedPriceData.left_wall_price_changed = true;
            const_var.UpdatedPriceData.right_wall_price_changed = true;
            dispatch(getPricingData(undefined,params.p_h,'h'));
        }
        if (const_var.alertUsedFor == "YouCanNotAddPorch" || const_var.alertUsedFor == "YourCanNotAddPorch" || const_var.alertUsedFor == "YourCanNotAlignPorch" || const_var.alertUsedFor == "YourCanNotChangePorch"){
            // console.log(alertUsedFor, "alertUsedFor",const_var.alertUsedFor,params.params_cancel,params); 
            dispatch(handleLeanPorchPrices(params.params_cancel.add_left_front_lean_porch, params.params_cancel.add_right_front_lean_porch, params.params_cancel.add_left_back_lean_porch, params.params_cancel.add_right_back_lean_porch)); 
            
            if (params.preAction.type === "changeBuildingRoof") {
                changeBuildingRoof({...params.preAction, skipCheck: true})(dispatch);
            } else if (params.preAction.type === "CHANGEDIMENSION") {
                changeBuildingDimension({...params.preAction, skipCheck: true})(dispatch);
            } else if (params.preAction.type === "changeLeantoPosition") {
                changeLeantoPosition({...params.preAction, skipCheck: true})(dispatch);
            }

        }
        dispatch({
            type: "alertDone",        
            alertUsedFor: alertUsedFor
        })
        
    }
}


export function handleClose (){ 
    return(dispatch)=>{
        dispatch({
            type: "handleClose",
        })
    }

}

export function handleAccordion (event,key){ 
    return(dispatch)=>{
        dispatch({
            type: "handleAccordion",
            value :event,
            key:key
        })
    }
}


export function DeviceCapture(key,id)
{
    return(dispatch)=>{
        dispatch({
             type: "DeviceCapture",
             key:key,
             id:id,
        })
    }
}

export function handleCloseforDoorWindows(uniqueid)
{
    return(dispatch)=>{
        dispatch({
             type: "handleCloseforDoorWindows",
             uniqueid:uniqueid
        })
    }
}

export function hancleClickOutside()
{
    return(dispatch)=>{
        dispatch({
             type: "hancleClickOutside"
           
        })
    }
}
  export function handleSidePanel(e,isActiveSlide)
  {
      return(dispatch) =>{
          dispatch({
              type:"handleSidePanel",
              event:e,
              isActiveSlide:isActiveSlide 
          })
      }
  }  
  export function handleCloseBuildingModal()
  {
    return(dispatch)=>{
        dispatch({
            type: "handleCloseBuildingModal",
        })
    }
  }
    export function handleShowWhatThis (str, id){ 
    return(dispatch)=>{
        dispatch({
            type: "handleShowWhatThis",
            value: str,
            id:id
        })
    }
   
  }

  export function handleShowfeedback (category,e,typen){
      
    if(category=="submit")
    {
              
          let userObj = "";
          if(localStorage.getItem('userData')!=undefined)
          {
            userObj = JSON.parse(localStorage.getItem('userData'));
          }
        let postData = {"user_name":userObj.first_name+' '+userObj.last_name,'user_email':userObj.email,'company_name':userObj.company_name,'like_status':const_var.feedback_object_to_server.like_count,'feedback':const_var.feedback_object_to_server.feedback};
        return(dispatch) => {
            dispatch({
                type: "handleShowfeedback",
                category:'handleShowfeedbackloader',
                               
            })
        return axios.post(const_var.crmSetting.api_post_url+'/api/v1/3d/send_feedback',postData).then(function(response){
                    if(response.data.status==true)
                    {
                        dispatch({
                            type: "handleShowfeedback",
                            category:'success',
                        })
                    }
                     
                })
        }

        
    }else{
        return(dispatch)=>{
        dispatch({
            type: "handleShowfeedback",
            category:category,
            event:e,
            typen:typen,

        })
        }    
    }
    
   
  }

  export function handleShowsummarymodal (str, id){ 
    return(dispatch)=>{
        dispatch({
            type: "handleShowsummarymodal",
            value: str,
            id:id
        })
    }
   
  }
 
export function hasDoublelegBaiserail(e, buildingType)
{
    return(dispatch)=>{
        dispatch({
            type:"hasDoublelegBaiserail",
            event:e,
            buildingType:buildingType,
        })
    }
}
export function showSingleSlope(key,e)
{
    return(dispatch)=>{
        dispatch({
            type:"showSingleSlope",
            event:e,
            key:key
        })
    }
}
export function Update_estimator_QuestionAnswer(e,key,key1,id,question_id,parentId)
{
    return(dispatch)=>{
        dispatch({
            type:"Update_estimator_QuestionAnswer",
            event:e,
            key:key,
            key1:key1,
            id:id,
            question_id:question_id,
            parentId:parentId
        })
    }
}
export function addCustomComponent(e,value,pos,dim)
{
    return(dispatch)=>{
        dispatch({
            type:"addCustomComponent",
            event:e,
            value:value,
            con:pos,
            dim:(dim!=undefined)?dim:''
        })
    }
}
export function removeComponent(uniqueId,component_name,uniqueindex)
{
    return(dispatch)=>{
        dispatch({
            type:"removeComponent",
            uniqueId:uniqueId,
            component_name:component_name,
            uniqueindex:uniqueindex
        })
    }
}
export function cloneComponent(uniqueid,doorObj)
{
    return(dispatch)=>{
        dispatch({
            type:"cloneComponent",
            uniqueid:uniqueid,
            doorObj:doorObj
        })
    }
}
export function changeProductStatus(e)
{
    return(dispatch)=>{
        dispatch({
            type:"changeProductStatus",
            event:e
        })
    }
}
export function changeBuildingRoof({event,value, skipCheck}) {
    
    return(dispatch)=>{

        if (!skipCheck) {
            params.preAction = {event, value, type: "changeBuildingRoof"};
            dispatch({
                type:"checkChangeBuildingRoof",
                event:event,
                value:value
            })
        }
        if(!const_var.isShowAlert || skipCheck) {
            dispatch({
                type:"changeBuildingRoof",
                event:event,
                value:value
            })
            if(params.cB_addStorage_check_left == true){
                dispatch(getPricingDataforUtility(event,'left_combo',params.cB_addStorage_left));
            } 
            if (params.cB_addStorage_check_right == true) {
                dispatch(getPricingDataforUtility(event,'right_combo',params.cB_addStorage_right));
            }
            // var checkAPI = false;
            var LeantoName = "";
            if(params.add_right_lean==true && value=="right")
            {
                dispatch(getPricingDataForLeanto(true,"addRightLean",'',false, '', "roofInsulation")); 
            }if(params.add_left_lean==true && value=="left")
            {
                dispatch(getPricingDataForLeanto(true,"addLeftLean",'',false, '', "roofInsulation" ));
            }if(params.add_front_lean==true && value=="front")
            {
                dispatch(getPricingDataForLeanto(true,"addFrontLean",'',false, '', "roofInsulation" ));
            }if(params.add_back_lean==true && value=="back")
            {
                dispatch(getPricingDataForLeanto(true,"addBackLean",'',false, '', "roofInsulation" ));
            }

            params.preAction = {};
        }
        
    }
}
export function handleClickForFrameValue(trimdoor,doorname,commonDoorType,doortype,uniqueId,dropdownType)
{
    return(dispatch)=>{
        dispatch({
            type:"handleClickForFrameValue",
            trimdoor:trimdoor,
            comName:doorname,
            comDoorType:commonDoorType,
            comType:doortype,
            comId:uniqueId,
            dropdownType:dropdownType
        })
    }
}
export function editComponentSize(trimdoor,doorname,commonDoorType,doortype,uniqueId,dropdownType)
{
    return(dispatch)=>{
        dispatch({
            type:"editComponentSize",
            trimdoor:trimdoor,
            comName:doorname,
            comDoorType:commonDoorType,
            comType:doortype,
            comId:uniqueId,
            dropdownType:dropdownType
        })
    }
}

export function headerSealChainHoistAction(event,value, UniqueId,bool_var,doorObj) {
    return(dispatch)=>{
        dispatch({
            type:"headerSealChainHoistAction",
            event:event,
            value:value,
            UniqueId:UniqueId,
            bool_var:bool_var,
            componentObj:doorObj
        })
    }
}

export function onSubmitState (e){
    return(dispatch)=>{
        dispatch({
            type: "onSubmitState",
            event: e
        })
    }
  }


  export function showInsulationAction()
{
    return(dispatch)=>{
        dispatch({
            type:"showInsulationAction"
        })
    }
}



export function toggleActionForUtility(val)
{
    return(dispatch)=>{
        dispatch({
            type:"toggleActionForUtility",
            value: val
        })
    }
}
export function showCenterBuilding()
{
    return(dispatch)=>{
        dispatch({
            type:"showCenterBuilding",
        })
    }
}
export function addLeantoSection(e, str, leftFront, rightFront, leftBack, rightBack,chkRemoveLean)
{
    console.log(e, str, leftFront, rightFront, leftBack, rightBack,chkRemoveLean,"e, str, leftFront, rightFront, leftBack, rightBack")
  if (!const_var.isTBSOldQuotesForVerticalRoof && (params.m_s_n == 13 && params.p_r_s !== 3 && (str == "addFrontLean" || str == "addBackLean" ))){
    return(dispatch) => {
      dispatch({
        type:"addLeantoSection",
        event:e,
        value: "endLeantosForTubulerBuildingMnf",
        chkRemoveLean:chkRemoveLean
      })
    }
  } else {
    return(dispatch)=>{
        batch(() => {
            dispatch({
                type:"addLeantoSection",
                event:e,
                value: str,
                chkRemoveLean:chkRemoveLean
            })
           dispatch(getPricingDataForLeanto(e,str));
           if(leftFront || rightFront || leftBack || rightBack)
           {
                dispatch(handleLeanPorchPrices(leftFront, rightFront, leftBack, rightBack));
           }

           
        });
    }
  }
}
export function addLeantoPorches(e, str,chk ,isFrontLeanAdded, isLeftLeanAdded, isRightLeanAdded, isBackLeanAdded , key) {

  if (!const_var.isTBSOldQuotesForVerticalRoof && params.m_s_n == 13 && params.p_r_s !== 3){
    return(dispatch) => {
      dispatch({
        type:"addLeantoPorches",
        event:e,
        value: "endLeantoPorchessForTubulerBuildingMnf"
      })
    }
  } else {
    return(dispatch)=>{
        batch(() => {
            dispatch({
                type:"addLeantoPorches",
                event:e,
                value: str,
                key:key,
            })
            if(key != undefined && key == 'FullBuilding'){
                if(params.add_full_lean_porch == true){
                    dispatch({
                        type: 'changeWallName',
                        key:'front',
                    })
                }
                else{
                    dispatch({
                        type: 'changeWallName',
                        key: params.add_front_lean ? 'front' : params.add_right_lean ? 'right' : params.add_left_lean ? 'left' : params.add_back_lean ? 'back' : '',
                    })
                }
            }
           
            if(key != 'FullBuilding'){
                if((str=="addLeftFrontLeanToPorch" && params.add_left_front_lean_porch == true) || (str=="addRightFrontLeanToPorch" && params.add_right_front_lean_porch == true)){
                    dispatch({
                        type: 'changeWallName',
                        key:'front',
                    })
                }
                if((str=="addLeftBackLeanToPorch"  && params.add_left_back_lean_porch == true) || (str=="addRightBackLeanToPorch" && params.add_right_back_lean_porch == true)){
                    dispatch({
                        type: 'changeWallName',
                        key:'back',
                    })
                }
                if(!params.add_left_front_lean_porch && !params.add_right_front_lean_porch && !params.add_left_back_lean_porch && !params.add_right_back_lean_porch){
                    dispatch({
                        type: 'changeWallName',
                        key: params.add_front_lean ? 'front' : params.add_right_lean ? 'right' : params.add_left_lean ? 'left' : params.add_back_lean ? 'back' : '',
                    })
                }
            }
            if(chk!=undefined && const_var.isShowAlert==false)
            {
                if(str=="addLeftFrontLeanToPorch")
                {
                    dispatch(getPricingDataForLeanto(e,'addFrontLean',params.lean_p_w,false, isFrontLeanAdded ? 'checkLegs': undefined ));
                    dispatch(getPricingDataForLeanto(e,'addLeftLean',params.leanF_p_w,false, isLeftLeanAdded ? 'checkLegs': undefined ));
                }
                if(str=="addRightFrontLeanToPorch")
                {
                    dispatch(getPricingDataForLeanto(e,'addFrontLean',params.leanR_p_w,false, isFrontLeanAdded ? 'checkLegs': undefined ));
                    dispatch(getPricingDataForLeanto(e,'addRightLean',params.leanF_p_w,false, isRightLeanAdded ? 'checkLegs': undefined ));
                }
                if(str=="addLeftBackLeanToPorch")
                {
                    dispatch(getPricingDataForLeanto(e,'addBackLean',params.lean_p_w,false, isBackLeanAdded ? 'checkLegs': undefined ));
                    dispatch(getPricingDataForLeanto(e,'addLeftLean',params.leanB_p_w,false, isLeftLeanAdded ? 'checkLegs': undefined ));
                }
                if(str=="addRightBackLeanToPorch")
                {
                    dispatch(getPricingDataForLeanto(e,'addBackLean',params.leanR_p_w,false, isBackLeanAdded ? 'checkLegs': undefined ));
                    dispatch(getPricingDataForLeanto(e,'addRightLean',params.leanB_p_w,false, isRightLeanAdded ? 'checkLegs': undefined ));
                }
            }
            
        });
    }
  }
}


export function handleLeanPorchPrices( leftFront, rightFront, leftBack, rightBack)
{
    return(dispatch) =>{
        batch(() => {
            if (leftFront) {
                dispatch(getPricingDataForLeanto('','addFrontLean',params.lean_p_w,false, 'checkLegs'));
                dispatch(getPricingDataForLeanto('','addLeftLean',params.leanF_p_w,false, 'checkLegs'));
            }
            if (rightFront) {
                dispatch(getPricingDataForLeanto('','addFrontLean',params.leanR_p_w,false, 'checkLegs'));
                dispatch(getPricingDataForLeanto('','addRightLean',params.leanF_p_w,false, 'checkLegs'));
            }
            if(leftBack)
            {
                dispatch(getPricingDataForLeanto('','addBackLean',params.lean_p_w,false, 'checkLegs'));
                dispatch(getPricingDataForLeanto('','addLeftLean',params.leanB_p_w,false, 'checkLegs'));
            }
            if(rightBack)
            {
                dispatch(getPricingDataForLeanto('','addBackLean',params.leanR_p_w,false, 'checkLegs'));
                dispatch(getPricingDataForLeanto('','addRightLean',params.leanB_p_w,false, 'checkLegs'));
            }
     })
    }
}

export function changeLeantoPosition({event,value, skipCheck})
{
    return(dispatch)=>{

        if (!skipCheck) {
            params.preAction = {event, value, type: "changeLeantoPosition"}
            dispatch({
                type:"checkChangeLeantoPosition",
                event,
                value
            })
        }

        if (!const_var.isShowAlert || skipCheck) {
            dispatch({
                type:"changeLeantoPosition",
                event,
                value
            })

            params.preAction = {};
        }

    }
}
export function ChangeLeanWidth(e,val) {
    return(dispatch)=>{
        dispatch({
            type:"ChangeLeanWidth",
            value:e,
            num:val,
        })
    }
}

export function CheckSnowLoadBuilding()
{
     return(dispatch)=>{
        dispatch({
            type:"CheckSnowLoadBuilding",
            // value:value
        });
        dispatch(changeBuildingData(const_var.AllBuildingData));
        let snowValChk = const_var.CheckSnowLoadValue ==65?1:0;
        let filterResult = const_var.AllBuildingData.data.default_building.filter(data=>data.heavy_snow==snowValChk && data.image_name.includes("Garages.png"));
        if(filterResult.length==0)
        {
            filterResult = const_var.AllBuildingData.data.default_building.filter(data=>data.heavy_snow==snowValChk && data.name.includes("RV Covers"));
        }
        dispatch(buildingStyleChange(filterResult[0].id,[]));
    }
   
}

export function AddandRemoveComponent(e,key,index,typeMatch) {
    return{
        type:"AddandRemoveComponent",
        key:key,
        value:e.target.value,
        index:index,
        typeMatch:typeMatch
    }
}



export function TaxDepositCalculation(e,key,index)
{
    return(dispatch)=>{
        dispatch({
        type: "TaxDepositCalculation",
        value: e,
        key:key,
        index:index,
        
    })
    }
}
export function commonsActionforAttribute(e,key,setZipCode = '')
{
        return{
        type: "commonsActionforAttribute",
        value: e,
        key:key,
        setZipCode: setZipCode
    }
}
export function handleShowFullPageLoader (){ 
    return(dispatch)=>{
        dispatch({
            type: "handleShowFullPageLoader",
        })
    }
   
  }
export function callTaxApiAndCalculatePrice(e)
{
        return(dispatch)=>{
        dispatch({
        type:"callTaxApiAndCalculatePrice",
        value:e,
        key:"add_zipcode"
    })
        if(params.tax_zipcode.length>=4)
    {
        let zipData = {'zip_code':params.tax_zipcode, 'api_token':const_var.crmSetting.api_token};
        return axios.post(const_var.crmSetting.api_post_url+'/api/v1/tax-from-zip',zipData).then(function(response){
                if(response.data.status==true && const_var.MoreTaxinputs.length>0)
                {
                    const_var.MoreTaxinputs = [];
                }
                if(response.data.status==true && response.data.data.length<=0 && response.data.tax_data!=null)
                {
                    const_var.tax.percentage = 0;
                }
                dispatch({
                        type:"callTaxApiAndCalculatePrice",
                        value : response.data,
                        newvalue:response.data.tax_data!=undefined?response.data.tax_data:'',
                        key:"calculate_zipcode"
                    });
                     
                })

    }else
    {
        const_var.tax.amount = 0;
    }
    }
}

export function changeComponent(doorName,uniqueId,component_Obj)
{
    return(dispatch)=>{
        let dwIconsDiv = document.getElementById("doorwindowicons");
        dwIconsDiv && dwIconsDiv.classList.add("d-none");
        dispatch({
            type:"changeComponent",
            doorName,
            uniqueId:uniqueId,
            component_Obj:component_Obj,
        })
    }
}

export function changeComponentSize(doorsize,uniqueId,component_Obj,is_trim,is_Checked)
{
    return(dispatch)=>{
        let dwIconsDiv = document.getElementById("doorwindowicons");
        dwIconsDiv && dwIconsDiv.classList.add("d-none");
        dispatch({
            type:"changeComponentSize",
            doorsize:doorsize,
            uniqueId:uniqueId,
            component_Obj:component_Obj,
            is_trim:is_trim,
            is_Checked:is_Checked
        })
    }
}

export function clearComponents(e)
{
      return(dispatch)=>{
        dispatch({
            type:"clearComponents",
            value:e
        })

    }
 
}
export function ChangeBackgroundAccordingtoCon(e)
{
      return(dispatch)=>{
        dispatch({
            type:"ChangeBackgroundAccordingtoCon",
            value:e
        })

    }
 
}
export function ShowMeasure(e)
{
    return{
        type:"ShowMeasure",
        value:e
    }
}

export function centerAlignWallComponent(e) {
   return {
     type: "CENTERALIGNWALLCOMPONENT",
     value: e
   }
}

export function changeOtherBuildingTypeName(e,other)
{
    return{
        type:"changeOtherBuildingTypeName",
        value:e,
        other:other
    }
}
export function commonConfirmationAlert(key)
{
    return{
        type:"commonConfirmationAlert",
        key:key
    }
}
export function genratePrintImages (value){ 
    return{
        type: "genratePrintImages",
        payload:value
    }
   
  }
export function manageSideLeanUI(e,val)
{
    return{
        type:"manageSideLeanUI",
        event:e,
        value:val
    }
}  
export function showMoreLessSidesAndEnds(position)
{
    return(dispatch)=>{
        dispatch({
            type:"showMoreLessSidesAndEnds",
            position:position
        })

    }
}
export function ShowHideTranslusant(val)
{
    return(dispatch)=>{
        dispatch({
            type:"ShowHideTranslusant",
            value:val
        })
    }
}
export function updatePaymentOption(event,key)
{
    return(dispatch)=>{
        dispatch({
            type:"updatePaymentOption",
            event:event,
            key:key
        })
    }
}
export function orderExtrasChangeValueFromMainAction(e,name,keyword)
{
    return(dispatch)=>{
        dispatch({
            type: "orderExtrasChangeValue",
            event:e,
            value:name,
            keyword:keyword
        })
    }
}

export function handleBreezawayFrameAndStorages(e,option) {
    return(dispatch)=>{
        dispatch({
            type:"handleBreezawayFrameAndStorages",
            value:e,
            option:option,
     
        })
    }
}


export function addDoorComponent(compType, compName, wall,componentsize,arraykey1,arraykey2,arraykey3,obj) {
    return (dispatch) => {
        dispatch({
            type: "ADD_DOOR_COMPONENT",
            compType,
            compName,
            wall,
            componentsize:componentsize,
            parentkey:arraykey1,
            childkey:arraykey2,
            nestedkey:arraykey3,
            obj:obj
        });
    };
}

export function updateDoorComponent(uniqueId,componentName,uniqueIndex){
    return (dispatch) => {
        dispatch({
            type: "updateDoorComponent",
            uniqueId: uniqueId,
            componentName: componentName,
            uniqueIndex: uniqueIndex
        })
    }
}

export function cameraFocusOnWall(wall) {
    return (dispatch) => {
         dispatch({
            type: "CAMERA_FOCUS_ON_WALL",
            value: wall,
        });
        // dispatch({
        //     type: "DISABLE_DOOR_WINDOW_EDIT_ICONS",
        // })
        // cuComponent.cameraFocusOnWall(state, wall, () => {
        //     dispatch({
        //         type: "ENABLE_DOOR_WINDOW_EDIT_ICONS",
        //     });
        // })
    };
}
export function handleIconClick(e,type)
{
    return(dispatch)=>{
        dispatch({
            type:"handleIconClick",
            event:e,
            value:type
        })
    }
}

export function setPricingForComponent (flag,id,indexVal,chk,is_editChk){ 
    return{
        type:"setPricingForComponent",
            flag:flag,
            id:id,
            indexVal:indexVal,
            chk:chk,
            is_editChk:is_editChk
    }
   
  }
  export function setPricingForSurcharge (value){ 
    return{
        type:"setPricingForSurcharge",
            value:value
    }
   
  }
  export function changeBuildingOnCenter(val,action)
  {
    return(dispatch)=>{
        dispatch({
            type:"changeBuildingOnCenter",
            value:val,
            actionType:action
        })
    }
  }

  export function CheckSharingAlertBox(val)
  {
    return(dispatch)=>{
        dispatch({
            type:"CheckSharingAlertBox",
            value:val
        })
    }
  } 


export function isOpenBookaDemo(val)

  {
    return(dispatch)=>{
        dispatch({
            type:"isOpenBookaDemo",
            value:val
        })
    }
  }

  export function UsertourAction(val,key,opennumber)

  {
    return(dispatch)=>{
        dispatch({
            type:"UsertourAction",
            value:val,
            key:key,
            opennumber:opennumber
        })
    }
  }

export function isOpenWelcomeModal(val,key)
  {
    return(dispatch)=>{
        dispatch({
            type:"isOpenWelcomeModal",
            value:val,
            key:key,
        })
    }
  }


export function isOpenLayoutDesignModal(val,key)
  {
    return(dispatch)=>{
        dispatch({
            type:"isOpenLayoutDesignModal",
            value:val,
            key:key,
        })
    }
  }


  export function prepareNewBuilding(val)
  {
    const_var.isFromCompare = true;
    const_var.isMultiSelectDrawingOpt = true
        return(dispatch)=>{
            dispatch(SetBuildingAccordingToComparission(val));
            document.querySelector('body').classList.remove('modal-open');
              document.querySelector('body').classList.remove('active-twod-drawing-popup');

        }
        

  }
  export function publicEditFun(val,key)
  {
    document.querySelector('body').classList.add("customer-edit-loader");
    return(dispatch)=>{
        var apiUrl = const_var.crmSetting.api_post_url + '/api/v1/3d-public/edit-start';
        return axios.post(apiUrl,{"module_string":const_var.isPublicModuleID}).then(function (response) {
            if(response.data.status==true)
            {

                dispatch({
                    type:"publicEditFun",
                    value:val,
                    key:key
                })
                document.querySelector('body').classList.remove("customer-edit-loader");
            }

        })
        .catch(function (error) {
            dispatch({
                type:"publicEditFun",
                value:error.response.data.message,
                key:key,
                actionType:"error"
            })
            document.querySelector('body').classList.remove("customer-edit-loader");

        })
        

    }
  }
export function submitReportIssue(desc, url, screenShot)
{
    if(desc && desc != ''){
        return(dispatch)=>{
            let timestamp = new Date().getTime();
            dispatch({
                type: "handleReportLoader",
                value: true
            })
            let postData = {
                'api_token':const_var.crmSetting.api_token,
                "user_id":const_var.crmSetting.login_user_id != undefined ? const_var.crmSetting.login_user_id : '',
                "title": "Report this issue : 3D",
                'description':desc,
                'current_url': url,
                'timestamp': timestamp,
                'last_activity': '',
                'region_state': const_var.stateNameAcordingAPI[params.p_s_n],
                'building_type': params.building_type_name,
                'manufacturer_name': const_var.stateManufacturerAcordingAPIDiscount['manuName'][params.m_s_n],
                'map_id': const_var.Map_Id[params.p_b_t],
                'type': '3d_issue',
                'attachments': [
                    {
                      "file": screenShot,
                      "file_name": "report"
                    }
                ]
            };
            return axios.post(const_var.crmSetting.api_post_url+'/api/v1/tickets/report_issue',postData).then(function(response){
                if(response.data.status==true) {
                    dispatch({
                        type: "submitReportIssue",
                        response:response.data
                    })
                    dispatch({
                        type: "handleReportLoader",
                        value: false
                    })
                }
                else{
                    dispatch({
                        type:"submitReportIssue",
                        errormsg:response.data.message
                    })
                    dispatch({
                        type: "handleReportLoader",
                        value: false
                    })
                }
    
            })
            .catch(function (error) {
                dispatch({
                    type:"submitReportIssue",
                    errormsg: 'Server Error. Please try again later.' // error.response.data.message
                })
                dispatch({
                    type: "handleReportLoader",
                    value: false
                })
            })
        }
    }
    else{
        return(dispatch)=>{
            dispatch({
                type: "submitReportIssue",
                response: ''
            })
        }
    }
}
export function manageReportIssueModal(show)
{
    return(dispatch)=>{
        dispatch({
            type: 'manageReportIssueModal',
            value: show
        })
    }
      
}
export function ManageKlinkExpire(data)
{
    return(dispatch)=>{
        dispatch({
            type:"ManageKlinkExpire",
            value:data
        })
    }
}
export function setScreenShot(val)
{
    return(dispatch)=>{
        dispatch({
            type: 'setScreenShot',
            value: val
        })
    }
}
          
export function resetErrorMsg(key){
    return(dispatch)=>{
        dispatch({
            type: 'resetErrorMsg',
            response: '',
            key: key
        })
    }
}
export function zipCodeError(msg)
{
        return(dispatch)=>{
        dispatch({
            type: 'zipCodeError',
            msg: msg
        })
    }
      
}
export function showStateField(val, apiCallForStateVal = '')
{
    return(dispatch)=>{
        dispatch({
            type: 'showStateField',
            value: val,
            apiCallForStateVal: apiCallForStateVal
        })
    }
      
}
export function handleDescription(val)
{
    return(dispatch)=>{
        dispatch({
            type: 'handleDescription',
            value: val
        })
    }
      
}
export function handleReportLoader(val)
{
    return(dispatch)=>{
        dispatch({
            type: 'handleReportLoader',
            value: val
        })
    }
      
}
export function updatePreQuoteErr(val,resetState = false)
{
    return(dispatch)=>{
        dispatch({
            type: 'updatePreQuoteErr',
            value: val,
            resetState: resetState
        })
    }
}
export function updatePostData()
{
    return(dispatch)=>{
        dispatch({
            type: 'updatePostData'
        })
    }
}

export function handleTabsClick(key)
{
    return(dispatch)=>{
        dispatch({
            type: 'handleTabsClick',
            key:key,
        })
    }
}

export function changeWallName(key)
{
    return(dispatch)=>{
        dispatch({
            type: 'changeWallName',
            key:key,
        })
    }
}

export function changeActiveWall(value) {
    return(dispatch) => {
        dispatch({
            type: "changeActiveWall",
            value:value,
        })
    }
}

export function changeActiveLeanWall(key,value) {
    return(dispatch) => {
        dispatch({
            type: "changeActiveLeanWall",
            key:key,
            value:value,
        })
    }
}

export function changeWrapSide(key)
{
    return(dispatch)=>{
        dispatch({
            type: 'changeWrapSide',
            key:key,
        })
    }
}
export const setDoorDataType = (value,item) =>{
    return (dispatch) => {
        dispatch({
            type: "setDoorDataType",
            value:value,
            item:item,
        })
    }
}
export const setWindowDataType = (value,item) =>{
    return (dispatch) => {
        dispatch({
            type: "setWindowDataType",
            value:value,
            item:item,
        })
    }
}
export const addDoorWindowComponent = (componentType,key,index) =>{
    return (dispatch) => {
        dispatch({
            type: "addDoorWindowComponent",
            componentType:componentType,
            key:key,
            index:index,
        })
    }
}
export const setDoorDataSize = (value,item) =>{
    return (dispatch) => {
        dispatch({
            type: "setDoorDataSize",
            value:value,
            item:item,
        })
    }
}

export const setLeanTos = (value,item) =>{
    return (dispatch) => {
        dispatch({
            type: "setLeanTos",
            value:value,
            item:item,
        })
    }
}

export const setColorData = (key,value,name,id) => {
    return (dispatch) => {
        dispatch({
            type:"setColorData",
            key:key,
            value:value,
            name:name,
            id:id
        })
    }
}

export const setRadioButtonValue = (value) => {
    return (dispatch) => {
        dispatch({
            type:"setRadioButtonValue",
            value: value
        })
    }
}

export const setUtilityPosition = (value) => {
    return (dispatch) => {
        dispatch({
            type: "setUtilityPosition",
            value:value
        })
    }
}

export const setCheckboxValue = (key) => {
    return (dispatch) => {
        dispatch({
            type: "setCheckboxValue",
            key:key
        })
    }
}
export const deleteLeanTo = (key) => {
    return (dispatch) => {
        dispatch({
            type: "deleteLeanTo",
            key:key
        })
    }
}

export const moreDetail = (show) => {
    return (dispatch) => {
        dispatch({
            type: "moredetail",
            key: show
        })
    }
}

export const talkexpert = (show) => {
    return (dispatch) => {
        dispatch({
            type: "TALKEXPERT",
            key: show
        })
    }
}

export const showSaveLater = (value,show) => {
    return (dispatch) => {
        dispatch({
            type: "ShowSavelater",
            value:value,
            key: show
        })
    }
}

export const connectshare = (show) => {
    return (dispatch) => {
        dispatch({
            type: "SHOWSHARE",
            key: show
        })
    }
}

export const showImage = (show) => {
    return (dispatch) => {
        dispatch({
            type: "SHOWIMAGE",
            key: show,
        })
    }
}

export const closeThank = (key) => {
    return (dispatch) => {
        dispatch({
            type: "closefalse",
            key: key
        })
    }
}
export const showDownloadProgressBar = (show) => {
    return (dispatch) => {
        dispatch({
            type: "SHOWDOWNLOADPROGRESSBAR",
            key: show
        })
    }
}
export const showSaveThank = (show) => {
    return (dispatch) => {
        dispatch({
            type: "SHOWSAVETHANK",
            key: show
        })
    }
}


export const callForPricing = (show) => {
    return (dispatch) => {
        dispatch({
            type: "CALLFORPRICING",
            key: show
        })
    }
}

export const OpenCustomPopup = (value) => {
    return (dispatch) => {
        dispatch({
            type: "OpenCustomPopup",
            value:value
        })
    }
}

export const ShowHideCheckout = (value) => {
    return (dispatch) => {
        dispatch({
            type: "ShowHideCheckout",
            value:value
        })
    }
}

export const isConfirm = (value) => {
    return (dispatch) => {
        dispatch({
            type: "ISCONFIRM",
            value:value
        })
    }
}

export const ShowBuynowConfirm = (value) => {
    return (dispatch) => {
        dispatch({
            type: "ShowBuynowConfirm",
            value:value
        })
    }
}
export const ShowCustomizeBuilding = (value) => {
    return (dispatch) => {
        dispatch({
            type: "ShowCustomizeBuilding",
            value:value
        })
    }
}
export const ShowMobilePopUp = (value) => {
    return (dispatch) => {
        dispatch({
            type: "ShowSpecification",
            value:value
        })
    }
}
export const setIsMobile = (value) => {
    return (dispatch) => {
        dispatch({
            type: "SetIsMobile",
            value:value
        })
    }
}

export const updateSliderRange = (key,value) => {
    return (dispatch) => {
        dispatch({
            type: "updateSliderRange",
            key:key,
            value:value
        })
    }
}
