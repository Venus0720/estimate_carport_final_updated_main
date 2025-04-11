import * as cuBuilding from './pricingReducer';
import * as validate from '../../Components/Modals/validations';
import { params, const_var} from './reducer';
import * as cuComponent from './componentReducer';
export const leadcustomerState = {
    showCustomerModal: false,
    showTermsCondition: false,
    searchData:{},
    searchType:'Leads',
    leadSourceData:{},
    showCustomerLeadRecord:false,
    LeadCustomerData:{},
    showEditEmail:false,
    LeadCustomerPostData:{},
    search_lead_customer:'',
    showInstallationAddressDetails:false,
    displayerrorMessage:"",
    i_g_A_y:true,
    is_module_name:"",
    addCustomerData:false,
    isShowSuccessOq:false,
    targetRedirectUrl:"",
    returnRespone:"",
    thankYouForSaveLater:false,
    alertUsedMSG:"",
    showAddressView:false,
    isAddress_Edit:'',
    has_customer_permission:"0",
    checkImageCount:[],
    checkCustomerEdit:false,
    leadSourceStateData:{},
}
leadcustomerState.leadSourceStateData = (const_var.leadSourceStateData!='' && Object.keys(const_var.leadSourceStateData).length>0)?const_var.leadSourceStateData:leadcustomerState.leadSourceStateData;
leadcustomerState.displayerrorMessage = const_var.displayerrorMessage;
const_var.LeadCustomerData = leadcustomerState.LeadCustomerData;
leadcustomerState.is_module_name = const_var.crmSetting.is_module_name;
leadcustomerState.targetRedirectUrl = const_var.targetRedirectUrl;
leadcustomerState.targetRedirectUrl.web_url = const_var.crmSetting.web_url;
leadcustomerState.targetRedirectUrl.form_action = const_var.crmSetting.form_action;
leadcustomerState.targetRedirectUrl.sub_module = const_var.crmSetting.sub_module;
leadcustomerState.targetRedirectUrl.selected_sub_module = const_var.crmSetting.selected_sub_module;
leadcustomerState.has_customer_permission = const_var.crmSetting.has_customer_permission;
leadcustomerState.checkImageCount = const_var.i_g_A_y;
leadcustomerState.checkCustomerEdit = const_var.crmSetting.is_quote_Edit;
const leadcustomerReducer = (state = leadcustomerState,action) =>
{
    const newState = {...state};
    switch (action.type)
    {
        case "testAction":
        return{
            ...state,
            action
        }
        case "onTextFiledChangeValue":
        state.LeadCustomerData[action.value] = action.event.target.value;
        state.LeadCustomerData.is_Action = false;
        if(action.ValidationCheck!="NoValidate")
        {
            validate.onTextFiledChangeValue(action.event,action.value,action.keyword,"LeadCustomer");
        }
        if(action.ValidationCheck=="NoValidate1"){//console.log(action.event,action.value,action.keyword);
            validate.alphaSpaceValue(action.event,action.value)
        }
        if(action.ValidationCheck=="NoValidate2"){//console.log(action.event,action.value,action.keyword);
            validate.alphaCheckValue(action.event,action.value)
        }
        if(action.editEmail=="editEmail")
        {
            state.LeadCustomerData.email_2 = action.event.target.value;
        }
        return {
            ...state,
            action
        }
        break;
        case "onAddressFiledChangeValue":
        let MainData = '';
        MainData = state.isAddress_Edit;      
        if(state.LeadCustomerData.address != undefined){
            // state.LeadCustomerData.address[MainData][action.value] = action.event.target.value;
            if(state.LeadCustomerData.address[MainData] != undefined){
                state.LeadCustomerData.address[MainData][action.value] = action.event.target.value;
            }
            else{
                state.LeadCustomerData.address.push({[action.value]: action.event.target.value})
            }
        }
        else{
            state.LeadCustomerData['address'] = []            
            if(state.LeadCustomerData.address[MainData] != undefined){
                state.LeadCustomerData.address[MainData][action.value] = action.event.target.value;
            }
            else{
                state.LeadCustomerData.address.push({[action.value]: action.event.target.value})
            }
        }
        
        const_var.LeadCustomerData['address'] = state.LeadCustomerData.address
        state.LeadCustomerData.is_Action = false;
        if(action.ValidationCheck=="NoValidate1"){//console.log(action.event,action.value,action.keyword);
            validate.alphaSpaceValue(action.event,action.value)
        }
        if(action.ValidationCheck=="NoValidate2"){//console.log(action.event,action.value,action.keyword);
            validate.alphaCheckValue(action.event,action.value)
        }
        state.displayerrorMessage = const_var.displayerrorMessage
        return {
            ...state,
            action
        }
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
            // if(const_var.post_data["building"].roof_style_price==0 && const_var.b_o_J_1[params.p_b_t]!="Custom Buildings")
            // {
            //     state.thankYouForSaveLater = true;
            //     state.alertUsedMSG = "Basic Price should be greater than 0";
            // }
            // else
            // {
              console.log(action,"11111")
            if ( params.isShowCenter ||  params.is_translusant ) {
                params.isShowCenter = false;
                params.is_translusant = false;
                cuBuilding.BuildingUpdate(true,"");
                if (params.add_front_lean) cuBuilding.UpdateFrontLean();
                if (params.add_left_lean) cuBuilding.UpdateLeftLean();
                if (params.add_right_lean) cuBuilding.UpdateRightLean();
                if (params.add_back_lean) cuBuilding.UpdateBackLean();
            }
                state.alertUsedMSG = "";
                state.thankYouForSaveLater = false;
                const_var.controls.target.set(0, params.p_h / 2, 0);
                const_var.camera.position.set(0, params.p_h + 0, 3.25 * params.p_d);
                const_var.controls.update();
                state.returnRespone = "";   
                state.showCustomerModal = false;   
                state.isShowSuccessOq=true;
                state.i_g_A_y = false;
                if(const_var.checkCaptuareImage!=true)
                {
                    const_var.checkIval = 0;
                    const_var.i_g_A_y = [];
                }
                const_var.selectedTabKeyForWheel ="capture";
                cuComponent.removeDoorWindowsIcons();

                //     let checkBodyThyumb= document.querySelector('body')
                //       if(checkBodyThyumb.classList.contains('activethumb-view')){
                //     checkBodyThyumb.classList.remove('active-offset-thumbnail')
                //     const_var.ClickforPhotosMobile.current.click(); 
                //     setTimeout(()=>{
                //     cuComponent.TsCeSot('quote',"finalsubmit");
                //     },500)
                //  }
                //  else{
                    cuComponent.TsCeSot('quote',"finalsubmit");
                //  }

               
            //}
        return{
            ...state,
            action
        }
        break;
        case "AddEditAddressInfo":
//console.log(action,"action")

            if(action.key=='edit')
            {
                const_var.TempLeadCustomerData =  Object.assign({}, state.LeadCustomerData.address[action.event])
                state.showAddressView = true;
                state.isAddress_Edit = action.event;
                if(state.LeadCustomerData.address!=undefined)
                {
                    state.LeadCustomerData.address[state.isAddress_Edit].address_line_1 = state.LeadCustomerData.address[state.isAddress_Edit].address_line_1.trim();
                    state.LeadCustomerData.address[state.isAddress_Edit].is_edit = 1;
                    const_var.addressBook[state.isAddress_Edit].is_edit = 1;
                }
                
            }if(action.key=='back')
            {
                // state.LeadCustomerData.address[state.isAddress_Edit].address_line_1 = const_var.addressBook[state.isAddress_Edit].new_address_line_1;
                // state.LeadCustomerData.address[state.isAddress_Edit].address_line_2 = const_var.addressBook[state.isAddress_Edit].new_address_line_2;
                // state.LeadCustomerData.address[state.isAddress_Edit].zipcode = const_var.addressBook[state.isAddress_Edit].new_zipcode;
                // state.LeadCustomerData.address[state.isAddress_Edit].city = const_var.addressBook[state.isAddress_Edit].new_city;
                // state.LeadCustomerData.address[state.isAddress_Edit].county = const_var.addressBook[state.isAddress_Edit].new_county;
                // state.LeadCustomerData.address[state.isAddress_Edit].state = const_var.addressBook[state.isAddress_Edit].new_state;

               
                // if(state.LeadCustomerData.address[state.isAddress_Edit].address_line_1=='' && state.LeadCustomerData.address[state.isAddress_Edit].is_edit!=1)
                if(state.LeadCustomerData.address && state.LeadCustomerData.address.length > 0 && state.LeadCustomerData.address[state.isAddress_Edit] != undefined && state.LeadCustomerData.address[state.isAddress_Edit].is_edit!=1)
                {
                    state.LeadCustomerData.address.splice(state.isAddress_Edit,1);
                    const_var.addressBook.splice(state.isAddress_Edit,1);
                }
                if(state.LeadCustomerData.address && state.LeadCustomerData.address.length > 0 && state.LeadCustomerData.address[state.isAddress_Edit] != undefined && state.LeadCustomerData.address[state.isAddress_Edit].is_edit == 1){
                    state.LeadCustomerData.address[state.isAddress_Edit] = const_var.TempLeadCustomerData
                }
                state.showAddressView = false;
                state.displayerrorMessage = {};
                //state.isAddress_Edit = action.event;
            }if(action.key=='add')
            {
                state.showAddressView = true;
                if(state.LeadCustomerData.address!=undefined && state.LeadCustomerData.address.length>0)
                {
                    state.LeadCustomerData.address.push({"address_line_1":'',"address_line_2":'',"zipcode":'',"county":'',"state":'','city':'','is_billing':0,'is_installation':0});
                    const_var.addressBook.push({"new_address_line_1":'',"new_address_line_2":'',"new_zipcode":'',"new_county":'',"new_state":'','new_city':'','is_billing':0,'is_installation':0});
                }else
                {
//console.log(state.LeadCustomerData,"state.LeadCustomerData")
                    if(state.LeadCustomerData.address==undefined)
                    {
                        state.LeadCustomerData.address = [];
                    }
                    state.LeadCustomerData.address.push({"address_line_1":'',"address_line_2":'',"zipcode":'',"county":'',"state":'','city':'','is_default':1,'is_billing':1,'is_installation':1});
                    const_var.addressBook.push({"new_address_line_1":'',"new_address_line_2":'',"new_zipcode":'',"new_county":'',"new_state":'','new_city':'','is_default':1,'is_billing':1,'is_installation':1});
                }
                state.isAddress_Edit = (state.LeadCustomerData.address.length>0)?state.LeadCustomerData.address.length-1:state.LeadCustomerData.address.length;
            }
            if(action.key=='update')
            {
                state.showAddressView = false;
                state.LeadCustomerData['address'].map((val, index) => {
                    if(action.is_Checked!=undefined)
                    {
                        val[action.is_Checked] = 0;
                        const_var.addressBook[index].is_Checked = 0;
                        if(action.event==index)
                        {
                            val[action.is_Checked] = 1;
                            const_var.addressBook[index].is_Checked = 1;

                        }
                    }
            
                });
                //console.log(state.LeadCustomerData['address'],"state.LeadCustomerData['address']")
            }
        return{
            ...state,
            action
        }
        break;
        case "AddEditAddressRecord":
            if(action.key=="create")
            {
                validate.onSubmitAddressAddEditForm(action.event);
                action.event.preventDefault();
                state.displayerrorMessage = const_var.displayerrorMessage;
            
                
            }else
            {
                for(let i=0; i <= action.event.target.length-1; i++)
                {
                    if((action.event.target[i].name!=""))
                    {
                        var newKeyName = "new_"+action.event.target[i].name;
                        const_var.addressBook[state.isAddress_Edit][newKeyName] = action.event.target[i].value;
                    }
                }
                state.LeadCustomerData.address.map((val, index) => {
                        if(val.address_line_1=="" && val.address_line_2=="" && val.county=="" && val.city=="" && val.state=="" && val.zipcode=="")
                        {
                            if(state.LeadCustomerData.address[index].notRemove==undefined || state.LeadCustomerData.address[index].notRemove==false)
                            {
                                state.LeadCustomerData.address.splice(index,1);
                            }
                        }
                });
// console.log(state.LeadCustomerData,"state.LeadCustomerData")
                state.showAddressView = false;
               
            }
        return{
            ...state,
            action
        }
        break;
        case "GenrateBuildingDatatoServer":
                if(action.key!="")
                {
                     if(action.event!="")
                     {
                        action.event.preventDefault();
                     }
                    // if(const_var.entry_points.length==0)
                    // {
                    //     state.thankYouForSaveLater = true;
                    //     state.alertUsedMSG = "Oops!! Did you forget to add a door to your fully enclosed building? Please see the doors and windows tab given under options panel and proceed with ordering";
                    // }else if(const_var.post_data["building"].roof_style_price==0 && const_var.b_o_J_1[params.p_b_t]!="Custom Buildings")
                    // {
                    //     state.thankYouForSaveLater = true;
                    //     state.alertUsedMSG = "Basic Price should be greater than 0";
                    // }
                    // if(const_var.post_data["building"].roof_style_price==0 && const_var.b_o_J_1[params.p_b_t]!="Custom Buildings")
                    // {
                    //     state.thankYouForSaveLater = true;
                    //     state.alertUsedMSG = "Basic Price should be greater than 0";
                    // }
                    // else
                    // {
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
                        
                        params.is_translusant = false;
                        params.isShowCenter = false;
                        const_var.entry_points.map((val, i) => {
                            if (val.entry_component_location != "fend" && val.entry_component_location != "bend" && val.entry_component_location != "lside" && val.entry_component_location != "rside" && val.entry_component_location != "ufend") {
                                const_var.scene.getObjectByName(val.component_name + val.uniqueId).visible = true;
                            }
                        })
                        cuBuilding.BuildingUpdate(true,);
                        if (params.add_front_lean) cuBuilding.UpdateFrontLean();
                        if (params.add_left_lean) cuBuilding.UpdateLeftLean();
                        if (params.add_right_lean) cuBuilding.UpdateRightLean();
                        if (params.add_back_lean) cuBuilding.UpdateBackLean();
                        state.is_module_name = const_var.crmSetting.is_module_name;
                        state.targetRedirectUrl = const_var.targetRedirectUrl;
                        state.targetRedirectUrl.web_url = const_var.crmSetting.web_url;
                        state.targetRedirectUrl.form_action = const_var.crmSetting.form_action;
                        state.targetRedirectUrl.sub_module = const_var.crmSetting.sub_module;
                        state.targetRedirectUrl.selected_sub_module = const_var.crmSetting.selected_sub_module;
                        state.targetRedirectUrl.loggeedincrmflag = const_var.crmSetting.is_CRM==false && const_var.crmSetting.is_loggedin==true;
                        state.alertUsedMSG = "";
                        state.thankYouForSaveLater = false;
                         const_var.controls.target.set(0, params.p_h / 2, 0);
                         const_var.camera.position.set(0, params.p_h + 0, 3.25 * params.p_d);
                         const_var.controls.update();
                         state.returnRespone = "";   
                         state.showCustomerModal = false;   
                         state.isShowSuccessOq=true;          
                         state.i_g_A_y = false;
                         if(const_var.checkCaptuareImage!=true)
                         {
                            const_var.checkIval = 0;
                            const_var.i_g_A_y = [];
                         }
                         const_var.selectedTabKeyForWheel ="capture";
                         cuComponent.removeDoorWindowsIcons();
                         
                    let checkBodyThyumb= document.querySelector('body')
                      if(checkBodyThyumb.classList.contains('activethumb-view')){
                    checkBodyThyumb.classList.remove('active-offset-thumbnail')
                    const_var.ClickforPhotosMobile.current.click(); 
                    setTimeout(()=>{
                   cuComponent.TsCeSot('quote',"finalsubmit");
                    },500)
                 }
                 else{
                   cuComponent.TsCeSot('quote',"finalsubmit");
                 }
                     //}
                }else
                {
                    state.targetRedirectUrl.sub_module = const_var.crmSetting.sub_module;
                    state.returnRespone = action.returnRespone;
                 
                }
                
                
        return{
            ...state,
            action
        }
        case "handleCommonModal":
            state.is_module_name = const_var.crmSetting.is_module_name;
            if(action.value=="terms_conditions")
            {
                state.showTermsCondition = true;
            }

            else {
                if(action.value=="")
                {
                    state.alertUsedMSG = "";
                    state.thankYouForSaveLater = false;
                    //state.LeadCustomerData.ShowEdit = false;
                    state.showCustomerLeadRecord = false;
                    state.showCustomerModal = true;
                    state.searchData = {};
                    // state.LeadCustomerData = {};

                    if(const_var.LeadCustomerData!=undefined)
                    {
                        state.LeadCustomerData = const_var.LeadCustomerData;
                        state.LeadCustomerData['is_ActionButton'] = true;
                        state.LeadCustomerData['ShowEdit'] = const_var.LeadCustomerData && const_var.LeadCustomerData.ShowEdit != undefined ? const_var.LeadCustomerData.ShowEdit : (const_var.LeadCustomerData.first_name != undefined && const_var.LeadCustomerData.first_name != '' ? true : false);
                    }
                    state.leadSourceData= const_var.leadSourceData;
                    if(const_var.crmSetting.is_Edit==true)
                    {
                        state.searchType = (const_var.crmSetting.sub_module=="customer")?"Customers":"Leads";
                        if(const_var.crmSetting.sub_module==null)
                        {
                            const_var.crmSetting.sub_module = (state.searchType=="Customers")?"customer":"lead";
                        }
                        if(const_var.leadSourceStateData!='' && Object.keys(const_var.leadSourceStateData).length>0)
                        {
                            state.leadSourceStateData[''] = 'Select';
                            const_var.leadSourceStateData.map((val,key)=>{
                                state.leadSourceStateData[val.code] = val.name;
                            })
                        }
                    }else
                    {
                        state.searchType = (const_var.crmSetting.is_module_name=="order")?"Customers":"Leads";
                        if(const_var.crmSetting.selected_sub_module==1 && const_var.crmSetting.form_action=="create")
                        {
                            const_var.crmSetting.sub_module = const_var.crmSetting.sub_module;
                        }else
                        {
                            const_var.crmSetting.sub_module = (state.searchType=="Customers")?"customer":"lead";
                        }
                    }
                    state.targetRedirectUrl.sub_module = const_var.crmSetting.sub_module;
                }if(action.value=="close")
                {
                    if(state.showAddressView != undefined && state.showAddressView == true){
                        if(state.LeadCustomerData.address && state.LeadCustomerData.address != undefined && state.LeadCustomerData.address.length > 0 && state.isAddress_Edit != undefined && (state.isAddress_Edit != '' || state.isAddress_Edit == 0) && state.LeadCustomerData.address[state.isAddress_Edit] != undefined){
                            if(state.LeadCustomerData.address[state.isAddress_Edit].is_edit != undefined && state.LeadCustomerData.address[state.isAddress_Edit].is_edit == 1){
                                state.LeadCustomerData.address[state.isAddress_Edit] = const_var.TempLeadCustomerData
                            }
                            else{
                                state.LeadCustomerData.address.pop()
                            }
                            state.showAddressView=false 
                        }
                    }

                    state.alertUsedMSG = "";
                    state.thankYouForSaveLater = false;
                    state.showCustomerLeadRecord = false;
                    state.showCustomerModal = false;
                    state.showTermsCondition = false;
                    state.displayerrorMessage = '';
                    state.searchData = {};
                    state.isShowSuccessOq=false;
                    //state.LeadCustomerData = {};
                    state.searchType = (const_var.crmSetting.is_module_name=="order")?"Customers":"Leads";
                }
                if(action.value!="close" && action.value!="")
                {
                    if(const_var.crmSetting.is_Edit!=true && const_var.crmSetting.sub_module_id=='')
                    {
                        state.LeadCustomerData = {};
                    }
                    state.showCustomerLeadRecord = false;
                    state.leadSourceData= action.value.data;
                    //state.leadSourceStateData = action.value.states;
                    state.leadSourceStateData[''] = 'Select';
                    action.value.states.map((val,key)=>{
// console.log(val,"value")
                        state.leadSourceStateData[val.code] = val.name;
// console.log(state.leadSourceStateData,"state.leadSourceStateData")
                    })
                    
                    Object.entries(state.leadSourceData).map((val, index) => {
                        if(index==0)
                        {
                            state.LeadCustomerData.lead_source = val[1];
                        }
                        if(val[0]=="call_in")
                        {
                            state.LeadCustomerData.lead_source = val[0];
                        }
                    });
                    const_var.leadSourceData = action.value.data;
                    state.searchData = {};
                    // state.LeadCustomerData = {};
                    state.searchType = (const_var.crmSetting.is_module_name=="order")?"Customers":"Leads";
                }
            }

           
            state.i_g_A_y = true;
        return {
            ...state,
            action
        }
        break;
        case "commonsActionforLeadCustomer":
            if(action.key=="Search")
            {
                state.searchType = action.value;
                if(state.searchType=="Customers" && const_var.crmSetting.is_module_name=="quote")
                {
                    state.addCustomerData = true;
                }else
                {
                    state.addCustomerData = false;
                }
                state.LeadCustomerData = (state.LeadCustomerData!=undefined)?state.LeadCustomerData:{};
                document.getElementById("configuration").reset();
                state.searchData = {};
                state.showCustomerLeadRecord = false;
                const_var.crmSetting.sub_module = (state.searchType=="Customers")?"customer":"lead";
                state.targetRedirectUrl.sub_module = const_var.crmSetting.sub_module;
                //state.searchType = "Leads";
            }if(action.key=="Search_Value")
            {
                state.search_lead_customer = action.value;
            }
            if(action.key=="same_as")
            {
                state.showInstallationAddressDetails = !state.showInstallationAddressDetails;
                state.LeadCustomerData.is_Action = false;
            }
            
        return{
            ...state,
            action
        }
        break;    
        case "AddCustomerLeadRecord":
                        if(action.key=="create")
            {
                validate.onSubmitEditForm(action.event);
                action.event.preventDefault();
                state.displayerrorMessage = const_var.displayerrorMessage;
            }if(action.key=="save")
            {
                                let checkValidateIssue = true;
                if(const_var.LeadCustomerData!=undefined || const_var.LeadCustomerData!='')
                {
                    state.LeadCustomerData = const_var.LeadCustomerData;
                }
                for(let i=0; i <= action.event.target.length-1; i++)
                {
                    if((action.event.target[i].name!=""))
                    {
                        if((state.displayerrorMessage[action.event.target[i].name]!='' && state.displayerrorMessage[action.event.target[i].name]!=undefined))
                        {
                            checkValidateIssue = false;
                        }
                    }
                    // console.log(checkValidateIssue,"checkValidateIssue",action.event.target[i].name,"&&", state.displayerrorMessage[action.event.target[i].name],"&&",state.displayerrorMessage[action.event.target[i].name],"state.showCustomerLeadRecord");
                   
                    var arr = [{key:action.event.target[i].name, value:action.event.target[i].value}];
                    state.LeadCustomerData[arr[0].key] = arr[0].value;
                    state.LeadCustomerPostData[arr[0].key] = arr[0].value;
                }
                if(const_var.crmSetting.is_module_name=="quote" && state.searchType=="Customers")
                {
                    state.searchType = "Leads";
                }
                state.LeadCustomerData['ShowEdit'] = checkValidateIssue;
                state.LeadCustomerData['api_token'] = const_var.crmSetting.api_token;
                const_var.LeadCustomerData = state.LeadCustomerPostData;
                state.showCustomerLeadRecord = checkValidateIssue;
                                
            }
            if(action.key=="billing_create")
            {
                validate.onSubmitEditForm(action.event);
                action.event.preventDefault();
                state.displayerrorMessage = const_var.displayerrorMessage;
            }
            if(action.key=="billing")
            {
                let same_asData = "";
                let checkValidateIssue = false;
                if(state.showAddressView != undefined && state.showAddressView == true){
                    if(state.LeadCustomerData.address && state.LeadCustomerData.address != undefined && state.LeadCustomerData.address.length > 0 && state.isAddress_Edit != undefined && (state.isAddress_Edit != '' || state.isAddress_Edit == 0) && state.LeadCustomerData.address[state.isAddress_Edit] != undefined){
                        if(state.LeadCustomerData.address[state.isAddress_Edit].is_edit != undefined && state.LeadCustomerData.address[state.isAddress_Edit].is_edit == 1){
                            state.LeadCustomerData.address[state.isAddress_Edit] = const_var.TempLeadCustomerData
                        }
                        else{
                            state.LeadCustomerData.address.pop()
                        }
                        state.showAddressView=false 
                    }
                }

                for(let i=0; i <= action.event.target.length-1; i++)
                {
                    if(action.event.target[i].name=="first_name")
                    {
                        state.LeadCustomerPostData['first_name'] = action.event.target[i].value;
                    }else if(action.event.target[i].name=="last_name"){
                        state.LeadCustomerPostData['last_name'] = action.event.target[i].value;
                    }else if(action.event.target[i].name=="email"){
                        state.LeadCustomerPostData['email'] = action.event.target[i].value;
                    }else if(action.event.target[i].name=="phone_no")
                    {
                        state.LeadCustomerPostData['phone_no'] = action.event.target[i].value;
                    }else if(action.event.target[i].name=="mobile_no")
                    {
                        state.LeadCustomerPostData['mobile_no'] = action.event.target[i].value;
                    }else
                    {
                    
                        if(state.showInstallationAddressDetails==false)
                        {
                            if(action.event.target[i].name.includes('shipping')==false)
                            {
                                state.LeadCustomerPostData['billing_'+action.event.target[i].name] = action.event.target[i].value;
                                if(state.showInstallationAddressDetails==false)
                                {
                                    state.LeadCustomerPostData['shipping_'+action.event.target[i].name] = action.event.target[i].value;
                                }
                            }
                        }else
                        {
                            if(action.event.target[i].name.includes('shipping')==false)
                            {
                                state.LeadCustomerPostData['billing_'+action.event.target[i].name] = action.event.target[i].value;
                            }else
                            {
                                state.LeadCustomerPostData[action.event.target[i].name] = action.event.target[i].value;
                            }
                        }
                    }
                    
                    if(action.event.target[i].name!="" && state.displayerrorMessage[action.event.target[i].name]!='' && state.displayerrorMessage[action.event.target[i].name]!=undefined)
                    {
                        //console.log(action.event.target[i].name,state.displayerrorMessage[action.event.target[i].name],"state.displayerrorMessage[action.event.target[i].name]")
                        checkValidateIssue = true;
                    }
                }

                state.showCustomerLeadRecord = checkValidateIssue;
                if(checkValidateIssue!=true)
                {
                    state.LeadCustomerData = {...state.LeadCustomerData,...state.LeadCustomerPostData};
                    state.LeadCustomerData['is_Action'] = true;
                    const_var.crmSetting.sub_module_id =(state.LeadCustomerData.u_id!=undefined)?state.LeadCustomerData.u_id:const_var.crmSetting.sub_module_id;
                    if(const_var.crmSetting.selected_sub_module==1 && const_var.crmSetting.form_action=="create")
                    {
                        const_var.crmSetting.sub_module = const_var.crmSetting.sub_module;
                    }else
                    {
                        const_var.crmSetting.sub_module = (const_var.crmSetting.is_Edit==true)?const_var.crmSetting.sub_module:(state.searchType=="Customers")?"customer":"lead";
                    }
                    state.targetRedirectUrl.sub_module = const_var.crmSetting.sub_module;
                    const_var.LeadCustomerData = {...state.LeadCustomerData,...state.LeadCustomerPostData};
                }

                state.showCustomerModal = checkValidateIssue;
                if(checkValidateIssue==false)
                {
                    state.leadSourceData= {};
                    state.searchData = {};
                    state.searchType = "Leads";
                }
            }if(action.key=="back")
            {
                if(state.showAddressView != undefined && state.showAddressView == true){
                    if(state.LeadCustomerData.address && state.LeadCustomerData.address != undefined && state.LeadCustomerData.address.length > 0 && state.isAddress_Edit != undefined && (state.isAddress_Edit != '' || state.isAddress_Edit == 0) && state.LeadCustomerData.address[state.isAddress_Edit] != undefined){
                        if(state.LeadCustomerData.address[state.isAddress_Edit].is_edit != undefined && state.LeadCustomerData.address[state.isAddress_Edit].is_edit == 1){
                            state.LeadCustomerData.address[state.isAddress_Edit] = const_var.TempLeadCustomerData
                        }
                        else{
                            state.LeadCustomerData.address.pop()
                        }
                        state.showAddressView=false 
                    }
                }
                
                state.searchType = (const_var.crmSetting.is_module_name=="order")?"Customers":"Leads";
                state.is_module_name = const_var.crmSetting.is_module_name;
                state.LeadCustomerData = {};
                const_var.LeadCustomerData = {};
                state.LeadCustomerPostData = {}
                state.showAddressView=false 
                
                state.showCustomerLeadRecord = false;
                
                if(const_var.crmSetting.sub_module == "" && const_var.checkPickThisBuilding){
                    const_var.crmSetting.sub_module =  state.searchType=="Customers" ? "customer" : "lead";
                }
            }
        return{
            ...state,
            action
        }
        break;
        case "onSearchRecords":
            action.event.preventDefault();
            state.searchData = (action.value.data.length>0)?action.value.data:["No"];
            state.search_lead_customer = action.search_text;
            const_var.checkValidate = false
            if(action.value.states!=undefined)
            {
                const_var.leadSourceStateData = action.value.states;
                state.leadSourceStateData[''] = 'Select';
                action.value.states.map((val,key)=>{
                    state.leadSourceStateData[val.code] = val.name;
                })
            }
            
        return{
            ...state,
           action
        }
        break;
        case "handleCustomerData":
            if(action.eventType!="back")
            {
                if(action.row.email=="")
                {
                    action.row.email = '';
                    
                }if(action.row.email_2=="")
                {
                    action.row.email_2 = '';
                    
                }
                var newPhoneNumber = '';
                if(action.row.phone_no!='' && newPhoneNumber=='')
                {
                    newPhoneNumber = action.row.phone_no;
                }
                if(action.row.mobile_no!='' && newPhoneNumber=='')
                {
                    newPhoneNumber = action.row.mobile_no;
                }
                if(action.row.phone_no_2!='' && newPhoneNumber=='')
                {
                    newPhoneNumber = action.row.phone_no_2;
                }
                //action.row.phone_no = newPhoneNumber;
                
                state.displayerrorMessage = "";
                const_var.displayerrorMessage = {};
                action.row.ShowEdit = true;    
                state.LeadCustomerData = action.row;
                if(action.event=="" && state.LeadCustomerData.taxPersentage!=undefined && state.LeadCustomerData.taxPersentage!='' && params.tax_exempt==false)
                {
                    const_var.tax.percentage = state.LeadCustomerData.taxPersentage;
                    const_var.tax.tax_value = const_var.tax.percentage;
                    if(isNaN(parseInt(const_var.tax.amount))==true)
                    {
                      const_var.tax.amount = 0;
                    }
                    cuBuilding.cP();
                }else
                {
                    const_var.tax.percentage = 0;
                    const_var.tax.tax_value = const_var.tax.percentage;
                    const_var.tax.amount = 0;
                    if(isNaN(parseInt(const_var.tax.amount))==true)
                    {
                      const_var.tax.amount = 0;
                    }
                    cuBuilding.cP();
                }
                if(const_var.leadSourceStateData!='' && Object.keys(const_var.leadSourceStateData).length>0)
                {
                    state.leadSourceStateData[''] = 'Select';
                    const_var.leadSourceStateData.map((val,key)=>{
                        state.leadSourceStateData[val.code] = val.name;
                    })
                }
                params.tax_zipcode = '';
                state.LeadCustomerData['address'] = state.LeadCustomerData.address;
                state.LeadCustomerData.address.map((val, index) => {
                    state.LeadCustomerData['address'][index].notRemove = true;
                    const_var.addressBook.push({'new_address_line_1':val.address_line_1,'new_address_line_2':val.address_line_2,'new_zipcode':val.zipcode,'new_state':val.state,'new_city':val.city,'new_county':val.county});
                    if(action.event=="")
                    {
                        if(val.is_default==1)
                        {
                            state.LeadCustomerData['showZip'] = val.zipcode;
                            const_var.LeadCustomerData.showZip = val.zipcode;
                        }
                    }else
                    {
                        if(val.is_default==1)
                        {
                            state.LeadCustomerData['showZip'] = val.zipcode;
                            const_var.LeadCustomerData.showZip = val.zipcode;
                        }
                    }
                    
                });
                
                //const_var.addressBook = state.LeadCustomerData.address;
                
                state.LeadCustomerData["billing_address_line_1"] = state.LeadCustomerData["shipping_address_line_1"] = state.LeadCustomerData.address_line_1;
                state.LeadCustomerData["billing_address_line_2"] = state.LeadCustomerData["shipping_address_line_2"] = state.LeadCustomerData.address_line_2;
                state.LeadCustomerData["billing_city"] = state.LeadCustomerData["shipping_city"] = state.LeadCustomerData.city;
                state.LeadCustomerData["billing_state"] = state.LeadCustomerData["shipping_state"] = state.LeadCustomerData.state;
                state.LeadCustomerData["billing_country"] = state.LeadCustomerData["shipping_country"] = state.LeadCustomerData.county;
                state.LeadCustomerData["billing_zipcode"] = state.LeadCustomerData["shipping_zipcode"] = state.LeadCustomerData.zipcode;
                
                
                if(const_var.crmSetting.selected_sub_module==1 && const_var.crmSetting.form_action=="create")
                {
                    const_var.crmSetting.sub_module = const_var.crmSetting.sub_module;
                }else
                {
                    const_var.crmSetting.sub_module = (state.searchType=="Customers")?"customer":"lead";
                }
                state.LeadCustomerData.lead_source = (state.searchType=="Customers")?action.row.source:action.row.lead_source;
                const_var.LeadCustomerData = state.LeadCustomerData;
                const_var.crmSetting.sub_module_id =action.row.u_id; 
                state.targetRedirectUrl.sub_module = const_var.crmSetting.sub_module;
            }else
            {
                state.LeadCustomerData.ShowEdit = false;
            }
            return {
                ...state,
                action
            }
            case "handleCustomerDataWithAPI":
                if(action.event=="")
                {
                    state.LeadCustomerData.taxPersentage = (action.responseData!='')?action.responseData.data[0]:const_var.tax.percentage;
                    if(action.responseData.tax_data==undefined || action.responseData.tax_data==null)
                    {
                        const_var.MoreTaxinputs = [];
                    }
                    if(action.responseData.tax_data!=undefined && action.responseData.tax_data!='')
                    {
                        if(const_var.MoreTaxinputs.length>0)
                        {
                            const_var.MoreTaxinputs = [];
                        }
                        let i = 0;
                        Object.entries(action.responseData.tax_data).sort().map(([value, key])=>{
                            if(key!=0)
                            {
                                if(i==0)
                                {
                                    state.LeadCustomerData.taxPersentage = key;
                                    const_var.tax.name = const_var.taxTypeName[value];
                                }else{
                                    const_var.MoreTaxinputs.push({'amount':0,'name':const_var.taxTypeName[value],'percentage':key,'type':'per'})
                                }
                                i++;
                            }
                        })
                        //state.const_var.tax.name = action.value.data.tax_data.city_rate!=0?action.value.data.tax_data.city_rate:action.value.data.tax_data.county_rate;
                    }
                    const_var.tax.percentage = state.LeadCustomerData.taxPersentage;
                    const_var.tax.tax_value = const_var.tax.percentage;
                    if(isNaN(parseInt(const_var.tax.amount))==true)
                    {
                      const_var.tax.amount = 0;
                    }
                    if(params.tax_exempt==true)
                    {
                        const_var.tax.percentage = 0;
                        const_var.tax.tax_value = const_var.tax.percentage;
                        const_var.tax.amount = 0;
                        params.tax_zipcode = '';
                        if(isNaN(parseInt(const_var.tax.amount))==true)
                        {
                          const_var.tax.amount = 0;
                        }
                    }
                    cuBuilding.cP();
                }
            return{
                ...state,
                action
            }
        case "CloseEditemial":
            state.showEditEmail = false;
            return {
                ...state,
                action
            }
        
        case "handlePlaceOrder":
            console.log(state.LeadCustomerData, "const_var.LeadCustomerData")

                if(state.LeadCustomerData.last_name!="")
                {
                    let alpha = /^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z0-9-, ])*$/;
                    if (state.LeadCustomerData.last_name !== null && alpha.test(state.LeadCustomerData.last_name)) {
                       const_var.displayerrorMessage["last_name"] = '';
                       const_var.checkValidatePattern = false;
                    } else {
                       const_var.displayerrorMessage["last_name"] = "Please enter only alphanumeric & spaces";
                       const_var.checkValidatePattern = true;
                     }
                     if (state.LeadCustomerData.last_name.length>50)
                     {
                        const_var.displayerrorMessage["last_name"] = " Please enter Less than 50 characters";
                        const_var.checkValidatePattern = true;
                     }
                } else
                {
                  const_var.displayerrorMessage["last_name"] = 'Last Name is Required';
                  const_var.checkValidatePattern = true;
                }


                if(state.LeadCustomerData.first_name!=undefined)
                {
                    let alpha = /^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z0-9-, ])*$/;
                    if (state.LeadCustomerData.first_name !== null && alpha.test(state.LeadCustomerData.first_name)) {
                       const_var.displayerrorMessage["first_name"] = '';
                       const_var.checkValidatePattern = false;
                    } else {
                       const_var.displayerrorMessage["first_name"] = "Please enter only alphanumeric & spaces";
                       const_var.checkValidatePattern = true;
                     }
                     if (state.LeadCustomerData.first_name?.length>50)
                     {
                        const_var.displayerrorMessage["first_name"] = " Please enter Less than 50 characters";
                        const_var.checkValidatePattern = true;
                     }
                } else
                {
                  const_var.displayerrorMessage["first_name"] = 'First Name is Required';
                  const_var.checkValidatePattern = true;
                }

                if(state.LeadCustomerData.shipping_address_line_1 == "" || state.LeadCustomerData.shipping_address_line_1 == undefined ) {
                    const_var.displayerrorMessage["shipping_address_line_1"] = 'Address is Required';
                    const_var.checkValidatePattern = true;
                }

                if(state.LeadCustomerData.shipping_city != undefined)
                {
                    let alpha = /^[a-zA-Z,]+(\s{0,1}[a-zA-Z, ])*$/;
                  //console.log(state.LeadCustomerData.shipping_city);
                    if (state.LeadCustomerData.shipping_city !== null && alpha.test(state.LeadCustomerData.shipping_city)) {
                       const_var.displayerrorMessage["shipping_city"] = '';
                       const_var.checkValidatePattern = false;
                    } else {
                       const_var.displayerrorMessage["shipping_city"] = "Please enter only alphabets & spaces";
                       const_var.checkValidatePattern = true;
                     }
                     if (state.LeadCustomerData.shipping_city?.length>50)
                     {
                        const_var.displayerrorMessage["shipping_city"] = " Please enter Less than 50 characters";
                        const_var.checkValidatePattern = true;
                     }
                     if(state.LeadCustomerData.shipping_city == '') {
                        const_var.displayerrorMessage["shipping_city"] = "City is Required";
                        const_var.checkValidatePattern = true;
                     }
                }else
                {
                  const_var.displayerrorMessage["shipping_city"] = 'City is Required';
                  const_var.checkValidatePattern = true;
                }

                if(state.LeadCustomerData.shipping_state != undefined)
                {
                    let alpha = /^[a-zA-Z,]+(\s{0,1}[a-zA-Z, ])*$/;
                  //console.log(state.LeadCustomerData.shipping_state);
                    if (state.LeadCustomerData.shipping_state !== null && alpha.test(state.LeadCustomerData.shipping_state)) {
                       const_var.displayerrorMessage["shipping_state"] = '';
                       const_var.checkValidatePattern = false;
                    } else {
                       const_var.displayerrorMessage["shipping_state"] = "Please enter only alphabets & spaces";
                       const_var.checkValidatePattern = true;
                     }
                     if (state.LeadCustomerData.shipping_state?.length>50)
                     {
                        const_var.displayerrorMessage["shipping_state"] = " Please enter Less than 50 characters";
                        const_var.checkValidatePattern = true;
                     }
                     if(state.LeadCustomerData.shipping_state == '') {
                        const_var.displayerrorMessage["shipping_state"] = "State is Required";
                        const_var.checkValidatePattern = true;
                     }
                }else
                {
                  const_var.displayerrorMessage["shipping_state"] = 'State is Required';
                  const_var.checkValidatePattern = true;
                }


                if(state.LeadCustomerData.shipping_zipcode != undefined || state.LeadCustomerData.shipping_zipcode == '') {
                    var zcode = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;
                    if ((state.LeadCustomerData.shipping_zipcode !== null && zcode.test(state.LeadCustomerData.shipping_zipcode) && state.LeadCustomerData.shipping_zipcode.length == 5 )|| state.LeadCustomerData.shipping_zipcode == '') {
                       const_var.displayerrorMessage['shipping_zipcode'] = '';
                       const_var.checkValidatePattern = false;
                    } else {
                       const_var.displayerrorMessage['shipping_zipcode'] = 'Please enter a valid Zip Code';
                       const_var.checkValidatePattern = true;
                    }
                } else {
                    const_var.displayerrorMessage['shipping_zipcode'] = 'ZipCode is Required';
                    const_var.checkValidatePattern = true;
                }



                if(state.LeadCustomerData.phone_no!="")
                {
                  var number = /^(0|[1-9][0-9]*)$/;
                     if (state.LeadCustomerData.phone_no !== null && number.test(state.LeadCustomerData.phone_no) && state.LeadCustomerData.phone_no.length == 10) {
                        const_var.displayerrorMessage['phone_no'] = '';
                        const_var.checkValidatePattern = false;
                     } else {
                        const_var.displayerrorMessage['phone_no'] = "Please enter Number only of length 10";
                        const_var.checkValidatePattern = true;
                   }
                 }else
                 {
                  const_var.displayerrorMessage['phone_no'] = 'Phone number is Required';
                  const_var.checkValidatePattern = true;
                 }

                 if(state.LeadCustomerData.mobile_no!="")
                 {
                   let number = /^(0|[1-9][0-9]*)$/;
                      if (state.LeadCustomerData.mobile_no !== null && number.test(state.LeadCustomerData.mobile_no) && state.LeadCustomerData.mobile_no.length == 10) {
                         const_var.displayerrorMessage['mobile_no'] = '';
                         const_var.checkValidatePattern = false;
                      } else {
                         const_var.displayerrorMessage['mobile_no'] = "Please enter Number only of length 10";
                         const_var.checkValidatePattern = true;
                    }
                  }else
                  {
                   const_var.displayerrorMessage['mobile_no'] = '';
                   const_var.checkValidatePattern = false;
                  }


                 if(state.LeadCustomerData.email!="")
                 {
                   
                 var email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                     if (state.LeadCustomerData.email !== null && email.test(state.LeadCustomerData.email)) {
                        const_var.displayerrorMessage['email'] = '';
                        const_var.checkValidatePattern = false;
                     } else {
                        const_var.displayerrorMessage['email'] = "Invalid Email";
                        const_var.checkValidatePattern = true;
                      }
                 }else
                 {
                   const_var.displayerrorMessage['email'] = 'Email is Required';
                   const_var.checkValidatePattern = true;
                 }

                 if (state.LeadCustomerData.hasOwnProperty('cardnumber') && (state.LeadCustomerData.cardnumber!="" || state.LeadCustomerData.cardnumber != undefined)) {
                    var number = /^(0|[1-9][0-9]*)$/;
                    if (state.LeadCustomerData.cardnumber !== null && number.test(state.LeadCustomerData.cardnumber) && state.LeadCustomerData.cardnumber.length >= 15 && state.LeadCustomerData.cardnumber.length <= 16) {
                       const_var.displayerrorMessage["cardnumber"] = '';
                       const_var.checkValidatePattern = false;
                    } else {
                       const_var.displayerrorMessage["cardnumber"] = 'Please enter valid card Number of length 15 or 16';
                       const_var.checkValidatePattern = true;
                     }
                 } else {
                    const_var.displayerrorMessage["cardnumber"] = 'Card Number is Required';
                    const_var.checkValidatePattern = true;
                 }
                 
                 if (state.LeadCustomerData.hasOwnProperty('expirydate') && (state.LeadCustomerData.expirydate!="" || state.LeadCustomerData.expirydate != undefined)) {
                    var expiryDate = state.LeadCustomerData.expirydate;
              
                    var today = new Date(); // gets the current date
                    var today_mm = today.getMonth() + 1; // extracts the month portion
                    //var today_yy = today.getFullYear() % 100; // extracts the year portion and changes it from yyyy to yy format
                    var today_yy = today.getFullYear().toString().substring(2);
              
                    // errorMessage =  "Please enter valid Expiry Date";
                    if(today_mm < 10) { // if today's month is less than 10
                       today_mm = '0' + today_mm // prefix it with a '0' to make it 2 digits
                    } 
              
                    var mm = expiryDate.substring(0, 2); // get the mm portion of the expiryDate (first two characters)
                    var yy = expiryDate.substring(3); // get the yy portion of the expiryDate (from index 3 to end)
              
                    if ((yy > today_yy && mm <= 12) || (yy == today_yy && mm >= today_mm && mm <= 12)) {
                     
                       const_var.displayerrorMessage["expirydate"] = '';
                       const_var.checkValidatePattern = false;
                    }
                    else
                    {
                       const_var.displayerrorMessage["expirydate"] = 'Please enter valid Expiry Date';
                       const_var.checkValidatePattern = true;
                    }
                 } else {
                    const_var.displayerrorMessage["expirydate"] = 'Expiry Date is Required';
                    const_var.checkValidatePattern = true;
                 }
                 
                 if (state.LeadCustomerData.hasOwnProperty('cvv') && (state.LeadCustomerData.cvv != "" || state.LeadCustomerData.cvv != undefined )) {
                    //var cvv = /^(0|[1-9][0-9]*)$/;
                    var cvv = /^[0-9]{3,4}$/;
                    if (state.LeadCustomerData.cvv !== null && cvv.test(state.LeadCustomerData.cvv) && state.LeadCustomerData.cvv.length >= 3 && state.LeadCustomerData.cvv.length <= 4) {
                       const_var.displayerrorMessage["cvv"] = '';
                       const_var.checkValidatePattern = false;
                    } else {
                       const_var.displayerrorMessage["cvv"] = 'Please enter valid CVV number of length 3 or 4';
                       const_var.checkValidatePattern = true;
                     }
                     //console.log(const_var.displayerrorMessage,"const_var.displayerrorMessage",const_var.checkValidatePattern);
                 } else {
                    const_var.displayerrorMessage["cvv"] = 'CVV is Required';
                    const_var.checkValidatePattern = true;
                 }

            return {
                ...state,
                action
            }

        case "handleCheckboxForBillingAddress":
            const_var.isBillingAddressSame = action.event.target.checked;

            if(const_var.isBillingAddressSame) {
                console.log(state.LeadCustomerData, "handleCheckboxForBillingAddress")
                if(state.LeadCustomerData.shipping_address_line_1 != undefined) {
                    state.LeadCustomerData['billing_address_line_1'] = state.LeadCustomerData.shipping_address_line_1
                } 

                if(state.LeadCustomerData.shipping_address_line_2 != undefined) {
                    state.LeadCustomerData['billing_address_line_2'] = state.LeadCustomerData.shipping_address_line_2
                }

                if(state.LeadCustomerData.shipping_city != undefined) {
                    state.LeadCustomerData['billing_city'] = state.LeadCustomerData.shipping_city
                }

                if(state.LeadCustomerData.shipping_state != undefined) {
                    state.LeadCustomerData['billing_state'] = state.LeadCustomerData.shipping_state
                }

                if(state.LeadCustomerData.shipping_zipcode != undefined) {
                    state.LeadCustomerData['billing_zipcode'] = state.LeadCustomerData.shipping_zipcode
                }
            } else {
                state.LeadCustomerData['billing_address_line_1'] = '';
                state.LeadCustomerData['billing_address_line_2'] = '';
                state.LeadCustomerData['billing_city'] = '';
                state.LeadCustomerData['billing_state'] = '';
                state.LeadCustomerData['billing_zipcode'] = '';
                console.log(state.LeadCustomerData, "handleCheckboxForBillingAddress")
            }

            return {
                ...state,
                action
            }

        default:
            return {
                ...state
            }
    }
    return newState;
}
export default leadcustomerReducer;