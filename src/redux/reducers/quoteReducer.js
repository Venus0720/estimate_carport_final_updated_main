import * as validate from '../../Components/Modals/validations';
import { params, const_var} from './reducer';
import * as cuBuilding from './pricingReducer';
import * as cuComponent from './componentReducer';
export const quoteState= {
    checkquoteValidateonly:"",
    saveLatterModal:false,
    orderLaterSubmitBtn:false,
    displayerrorMessage:"",
    i_g_A_y:[],
    crmSetting:{},
    thankYouForSaveLater:false,
    pdfURL:'',
    isShowAlert:false,
    alertUsedMSG:"",
    building_Data:"",
    showStateOnly: false,
    preQuoteError: false,
    preQuoteApiCalled: false,
    post_data: {},
    TempData:{'first_name': '','last_name': '','email': '','phone_no': '',"message":''},
}
quoteState.displayerrorMessage = const_var.displayerrorMessage;
quoteState.crmSetting = const_var.crmSetting;
const quoteReducer = (state = quoteState, action) =>{
    const newState = {...state};
    switch(action.type)
    {
        case "handleSaveLatter":
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

        if(action.payload=="open")
        {
            document.querySelector('#Savelater').classList.add('overlay-container' , 'cu-modal-overlay')

            if(const_var.crmSetting.applyPriceCheck!=undefined && const_var.crmSetting.applyPriceCheck==true && const_var.BuildingPriceArrar['order_total']!=undefined && parseFloat(const_var.BuildingPriceArrar['order_total'].toFixed(2))<parseFloat(3000))
            {
                state.thankYouForSaveLater = true;
                state.alertUsedMSG = "Sorry, we are not accepting orders below $3000 (plus tax) currently. Please contact us for your requirements at - "+const_var.crmSetting.phone_number;
            }
            // else if(cuBuilding.CkBngDr() == null)
            // {
            //     state.thankYouForSaveLater = true;
            //     state.alertUsedMSG = "Oops!! Did you forget to add a door to your fully enclosed building? Please see the doors and windows tab given under options panel and proceed with ordering";
            // }
            else
            {
                state.preQuoteApiCalled = const_var.preQuoteApiCalled;
                state.preQuoteError = const_var.preQuoteError;
                state.post_data = const_var.post_data;
                state.showStateOnly = const_var.showStateOnly;
                state.displayerrorMessage = const_var.displayerrorMessage;
                state.thankYouForSaveLater = false;
                state.building_Data = const_var.post_data.building;
                state.alertUsedMSG = "";
                const_var.checkIval = 0;
                state.i_g_A_y = [];
                const_var.i_g_A_y = [];
                state.saveLatterModal = true;
                const_var.saveLatterModal = true;
                const_var.selectedTabKeyForWheel ="capture";
                cuComponent.removeDoorWindowsIcons();
                if ( params.isShowCenter ||  params.is_translusant ) {
                    params.isShowCenter = false;
                    params.is_translusant = false;
                    cuBuilding.BuildingUpdate(true,);
                    if (params.add_front_lean) cuBuilding.UpdateFrontLean();
                    if (params.add_left_lean) cuBuilding.UpdateLeftLean();
                    if (params.add_right_lean) cuBuilding.UpdateRightLean();
                    if (params.add_back_lean) cuBuilding.UpdateBackLean();
                }
                const_var.controls.target.set(0, params.p_h / 2, 0);
                const_var.camera.position.set(0, params.p_h + 0, 3.25 * params.p_d);
                const_var.controls.update();
                let checkBodyThyumb= document.querySelector('body')
                if(checkBodyThyumb.classList.contains('activethumb-view')){
                checkBodyThyumb.classList.remove('active-offset-thumbnail')
                const_var.ClickforPhotosMobile.current.click(); 

                
                if(action.key != undefined && action.key == "lead"){
                    setTimeout(()=>{
                        cuComponent.TsCeSot('lead');
                    },500)
                }else{
                    setTimeout(()=>{
                        cuComponent.TsCeSot('quote');
                    },500) 
                }
               
            }
             else{
                if(action.key != undefined && action.key == "lead"){
                    cuComponent.TsCeSot('lead');
                }else{
                    cuComponent.TsCeSot('quote');
                }   
             }
                  state.i_g_A_y = const_var.i_g_A_y;

            }
        }else
        {
                            state.thankYouForSaveLater = false;
                state.alertUsedMSG = "";
                state.saveLatterModal = false;
                const_var.saveLatterModal = false;
                const_var.displayerrorMessage = {};
        }
        return{
            ...state,
            checkquoteValidateonly:action
        }
        break;
        case "inputValidate":
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
            // if (const_var?.post_data?.first_name !== undefined && const_var?.post_data?.first_name !== "") {
            //     var name = 'ok';
            // } else {
            //     const_var.displayerrorMessage["first_name"] = 'NameField is required';
            //     var name = 'no';
            // }
            // if (const_var?.post_data?.email !== undefined && const_var?.post_data?.email !== "") {
            //     var email = 'ok';
            // } else {
            //     const_var.displayerrorMessage["email"] = 'EmailField is required';
            //     var email = 'no';
    
            // }
            // if (const_var?.post_data?.phone_no !== undefined && const_var?.post_data?.phone_no !== "") {
            //     var phone = 'ok';
            // } else {
            //     const_var.displayerrorMessage["phone_no"] = 'PhoneField is required';
            //     var phone = 'no';
            // }
            // if (const_var?.post_data?.messageField !== undefined && const_var?.post_data?.messageField !== "") {
            //     var message = 'ok';
    
            // } else {
            //     const_var.displayerrorMessage["messageField"] = 'MessageField is required';
            //     var message = 'no';
            // }
            // if(name == 'ok' && email == 'ok' && phone == 'ok' && message == 'ok') {
            //     const_var.bookmarkfieldvalidate = true;
            // }
            return {
                ...state,
                action
            }
        case "INPUTFIELDCHANGEVALUE":
                state.isShowThankYou = false;
                state.alertUsedMSG = "";
                validate.onTextFiledChangeValue(action.event,action.value,action.keyword, action.ValidationCheck);
                if(action.value == 'first_name' || action.value == 'email' || action.value == 'phone_no' || action.value == 'messageField' ){ //Add remain field name
                    const_var.post_data[action.value] = action.event.target.value;
                    state.TempData[action.value] = action.event.target.value;
                    
                }
                return {
                    ...state,
                    checkorderValidateonly:action
                }
                break;
        case "handleSavePublicQuote":
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
            state.thankYouForSaveLater = false;
            state.building_Data = const_var.post_data.building;
            state.alertUsedMSG = "";
            const_var.checkIval = 0;
            state.i_g_A_y = [];
            const_var.i_g_A_y = [];
            const_var.checkCaptuareImage = false;
            state.saveLatterModal = true;
            const_var.selectedTabKeyForWheel ="capture";
            cuComponent.removeDoorWindowsIcons();
            let checkBodyThyumb= document.querySelector('body')
            if(checkBodyThyumb.classList.contains('activethumb-view')){
            checkBodyThyumb.classList.remove('active-offset-thumbnail')
            const_var.ClickforPhotosMobile.current.click(); 
            setTimeout(()=>{
                                cuComponent.TsCeSot('quote');
            },500)
        }
        else{
                                 cuComponent.TsCeSot('quote');                   
             }
              state.i_g_A_y = const_var.i_g_A_y;
        return{
            ...state,
            action
        }
        break;
        case "onquoteTextFiledChangeValue":
        validate.onTextFiledChangeValue(action.event,action.value,action.keyword);
        // if(action.updateVar == true && const_var.checkValidate == false){
        if(action.updateVar == true){
            if(action.value == 'zipcode'){
                const_var.zipCode = action.event.target ? action.event.target.value : action.event
                const_var.post_data['billing_zipcode'] = action.event.target ? action.event.target.value : action.event
            }
            else if(action.value == 'shipping_address_line_1'){
                const_var.post_data['billing_address_line_1'] = action.event.target.value
            }
            else{
                const_var.post_data[action.value]= action.event.target.value
            }          
        }       
        return {
            ...state,
            checkquoteValidateonly:action
        }
        break;
        case "onQuoteSubmit":
            if(const_var.crmSetting.pre_quote_form == true && const_var.loginSession == false && const_var.preQuoteApiCalled == true && const_var.preQuoteError == false && const_var.showStateOnly != true){
                if (const_var.checkValidate == false){ 
                    
                    delete const_var.post_data['billing_address_line_1'];
                    delete const_var.post_data['billing_zipcode'];
        
                        if(const_var.post_data && const_var.post_data.building && const_var.post_data['building'].leanto!=undefined && const_var.post_data['building'].leanto.length>0)
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
                        if(const_var.post_data && const_var.post_data.building && const_var.post_data["building"].left_wall_cutpanel==true)
                        {
                            const_var.post_data["building"].left_wall_price = parseFloat(const_var.post_data["building"].left_wall_price) + parseFloat(const_var.post_data["building"].left_wall_cut_panel_price);
                        }if(const_var.post_data && const_var.post_data.building && const_var.post_data["building"].right_wall_cutpanel==true)
                        {
                            const_var.post_data["building"].right_wall_price = parseFloat(const_var.post_data["building"].right_wall_price) + parseFloat(const_var.post_data["building"].right_wall_cut_panel_price);
                        }
                        if (const_var.post_data && const_var.post_data.building && const_var.post_data.building != undefined && const_var.post_data['building'].other_building_type_name=='') {
                            params.other_building_type_name = params.building_type_name + " - " + params.p_w + " x " + params.p_d + " x " + params.p_h
                            const_var.post_data['building'].other_building_type_name = params.other_building_type_name;
                            const_var.post_data['building'].name = params.other_building_type_name;
                        }
                        if(const_var.post_data && const_var.post_data.building && const_var.post_data['building'].leanto!=undefined && const_var.post_data['building'].leanto.length>0)
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
                        if(const_var.post_data && const_var.post_data.building && const_var.post_data["building"].surcharge_amount!=0)
                        {
                            const_var.post_data["building"].surcharge_taxable = (const_var.post_data["building"].surcharge_taxable==undefined)?0:const_var.post_data["building"].surcharge_taxable;
                        }
                        const_var.post_data["building"].is_showBackgroundImage = const_var.crmSetting.is_show_background;
                        const_var.post_data['building'].tax_zipcode = const_var.post_data['billing_zipcode'];
                        const_var.post_data["building"].custom_building = const_var.hide_price_calculation;
                        const_var.post_data["building"].payment_mode = const_var.paymentOptionObj[params.paymentmode];
                        const_var.post_data['building'].other_building_type_name = params.other_building_type_name;
                        const_var.post_data['building'].name = params.other_building_type_name;
                        const_var.post_data['name'] = const_var.post_data["building"].other_building_type_name;
                        const_var.post_data["custom_building"] = const_var.hide_price_calculation;
                        const_var.post_data['is_quote'] = 1;
                        const_var.post_data['charge_card'] = 0;
                        const_var.post_data['questions'] = const_var.estimator_QuestionAnswer;
                        const_var.post_data['module'] = "quote";
                        const_var.post_data["module_id"] = ""
                        const_var.post_data["sub_module"] = "";
                        const_var.post_data["sub_module_id"] = "";
                        const_var.post_data['form_type'] = "3d_v3";
                        const_var.post_data['created_source'] = "3d_v3";
                        const_var.post_data['pdf_price_breakdown'] = const_var.price_breakdown_key[const_var.crmSetting.is_module_name]; 
                        const_var.post_data['is_api'] = 1;
                        const_var.post_data['lead_source'] = "3D Estimator";
                        const_var.post_data['referral_source'] = (const_var.referrer=='')?document.referrer:const_var.referrer;
                        const_var.post_data['source'] = const_var.crmSetting.source; 
                        const_var.post_data['page'] = const_var.crmSetting.page;
                        const_var.post_data['form'] = "Quote Form";
                        const_var.post_data['building'].surface_level = params.job_site_level;
                        const_var.post_data['building'].electricity = params.power_avail;
                        const_var.post_data['building'].additional_note = params.additional_note;
                        const_var.post_data['api_token'] = const_var.crmSetting.api_token;
                        const_var.post_data["building_data"] = const_var.SendAPIBuildingData;
                        const_var.post_data["pricing_data"] = const_var.a_p_d_a;
                        const_var.post_data['estimator_domain'] = const_var.crmSetting.main_domain_url;
                        if(const_var.referralID!='')
                        {
                            const_var.post_data['referral_id'] = const_var.referralID;
                            const_var.post_data['lead_source'] = "3D Estimator Referral";
                        }
                        state.orderLaterSubmitBtn = true;
                }
                return {
                    ...state,
                    checkquoteValidateonly: action.event
                }
            }
            else{
                validate.onSubmitForm(action.event);
                action.event.preventDefault();
                var result = {}; 
                if (const_var.checkValidate == false){ 
                    var newAddress = [];
                    for(let i=0; i <= action.event.target.length-1; i++){
                    var arr = [{key:action.event.target[i].name, value:action.event.target[i].value}];
                        if(arr[0].key=="zipcode")
                        {
                            const_var.post_data['billing_zipcode'] = arr[0].value;
                        }else if(arr[0].key=="phone_no"){
                            const_var.post_data['mobile_no'] = arr[0].value;
                            const_var.post_data['phone_no'] = arr[0].value;
                        }else if(arr[0].key=="shipping_address_line_1")
                        {
                            const_var.post_data['billing_address_line_1'] = arr[0].value;
                        }else
                        {
                            const_var.post_data[arr[0].key] = arr[0].value;
                        }
                    }
                    newAddress.push({"address_line_1":const_var.post_data['billing_address_line_1'],"address_line_2":'',"zipcode":const_var.post_data['billing_zipcode'],"county":'',"state":'','city':'','is_billing':1,'is_installation':1});
                    const_var.post_data['address'] = newAddress;
                    delete const_var.post_data['billing_address_line_1'];
                    delete const_var.post_data['billing_zipcode'];
                   
                    if(const_var.isKLinkEnable == true || const_var.crmSetting.pre_quote_form == false || const_var.crmSetting.pre_quote_form == undefined || (const_var.crmSetting.pre_quote_form == true && const_var.loginSession == true) || const_var.showStateOnly == true || (const_var.crmSetting.pre_quote_form == true && const_var.loginSession == false && (const_var.preQuoteError == true || (const_var.preQuoteApiCalled == false && const_var.showStateField == true )))){
        
                        if(const_var.post_data && const_var.post_data.building && const_var.post_data['building'].leanto!=undefined && const_var.post_data['building'].leanto.length>0)
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
                        if(const_var.post_data && const_var.post_data.building && const_var.post_data["building"].left_wall_cutpanel==true)
                        {
                            const_var.post_data["building"].left_wall_price = parseFloat(const_var.post_data["building"].left_wall_price) + parseFloat(const_var.post_data["building"].left_wall_cut_panel_price);
                        }if(const_var.post_data && const_var.post_data.building && const_var.post_data["building"].right_wall_cutpanel==true)
                        {
                            const_var.post_data["building"].right_wall_price = parseFloat(const_var.post_data["building"].right_wall_price) + parseFloat(const_var.post_data["building"].right_wall_cut_panel_price);
                        }
                        if (const_var.post_data && const_var.post_data.building && const_var.post_data.building != undefined && const_var.post_data['building'].other_building_type_name=='') {
                            params.other_building_type_name = params.building_type_name + " - " + params.p_w + " x " + params.p_d + " x " + params.p_h
                            const_var.post_data['building'].other_building_type_name = params.other_building_type_name;
                            const_var.post_data['building'].name = params.other_building_type_name;
                        }
                        if(const_var.post_data && const_var.post_data.building && const_var.post_data['building'].leanto!=undefined && const_var.post_data['building'].leanto.length>0)
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
                        if(const_var.post_data && const_var.post_data.building && const_var.post_data["building"].surcharge_amount!=0)
                        {
                            const_var.post_data["building"].surcharge_taxable = (const_var.post_data["building"].surcharge_taxable==undefined)?0:const_var.post_data["building"].surcharge_taxable;
                        }
                        const_var.post_data["building"].is_showBackgroundImage = const_var.crmSetting.is_show_background;
                        const_var.post_data['building'].tax_zipcode = const_var.post_data['billing_zipcode'];
                        const_var.post_data["building"].custom_building = const_var.hide_price_calculation;
                        const_var.post_data["building"].payment_mode = const_var.paymentOptionObj[params.paymentmode];
                        const_var.post_data['building'].other_building_type_name = params.other_building_type_name;
                        const_var.post_data['building'].name = params.other_building_type_name;
                        const_var.post_data['name'] = const_var.post_data["building"].other_building_type_name;
                        const_var.post_data["custom_building"] = const_var.hide_price_calculation;
                        const_var.post_data['is_quote'] = 1;
                        const_var.post_data['charge_card'] = 0;
                        const_var.post_data['questions'] = const_var.estimator_QuestionAnswer;
                        const_var.post_data['module'] = "quote";
                        const_var.post_data["module_id"] = ""
                        const_var.post_data["sub_module"] = "";
                        const_var.post_data["sub_module_id"] = "";
                        const_var.post_data['form_type'] = "3d_v3";
                        const_var.post_data['created_source'] = "3d_v3";
                        const_var.post_data['pdf_price_breakdown'] = const_var.price_breakdown_key[const_var.crmSetting.is_module_name]; 
                        const_var.post_data['is_api'] = 1;
                        const_var.post_data['lead_source'] = "3D Estimator";
                        const_var.post_data['referral_source'] = (const_var.referrer=='')?document.referrer:const_var.referrer;
                        const_var.post_data['source'] = const_var.crmSetting.source; 
                        const_var.post_data['page'] = const_var.crmSetting.page;
                        const_var.post_data['form'] = "Quote Form";
                        const_var.post_data['building'].surface_level = params.job_site_level;
                        const_var.post_data['building'].electricity = params.power_avail;
                        const_var.post_data['building'].additional_note = params.additional_note;
                        const_var.post_data['api_token'] = const_var.crmSetting.api_token;
                        const_var.post_data["building_data"] = const_var.SendAPIBuildingData;
                        const_var.post_data["pricing_data"] = const_var.a_p_d_a;
                        const_var.post_data['estimator_domain'] = const_var.crmSetting.main_domain_url;
                        if(const_var.referralID!='')
                        {
                            const_var.post_data['referral_id'] = const_var.referralID;
                            const_var.post_data['lead_source'] = "3D Estimator Referral";
                        }
                        state.orderLaterSubmitBtn = true;
                    }
                }
                return {
                    ...state,
                    checkquoteValidateonly: action.event
                }
            }
        break;
        case "onQuoteSubmitApi":

        if ((action.event.status == true)) {
            if(const_var.crmSetting.gTag==true)
            {
                //console.log(window.parent,window,"parent")
                window.analysisCode();
            }
            const_var.checkoutBtnDisabled = false;
            state.orderLaterSubmitBtn = false;
            const_var.pdfURL = action.event.pdf_url;
            state.pdfURL = action.event.pdf_url;
            state.saveLatterModal = false;
            const_var.saveLatterModal = false;
            state.thankYouForSaveLater = true;
            
        }else
        {
            let responseMessage = action.event.message;
            responseMessage = responseMessage.replace('[PhoneNumber]',const_var.crmSetting.phone_number);
            responseMessage = responseMessage.replace('[Email]',const_var.crmSetting.email);
            state.pdfURL = "";
            state.thankYouForSaveLater = true;
            state.saveLatterModal = false;
            const_var.saveLatterModal = false;
            state.alertUsedMSG = responseMessage;
            const_var.checkoutBtnDisabled = false;
            state.orderLaterSubmitBtn = false;
            state.thankYouForSaveLater = true;
            
        }
        return {
            ...state,
            checkquoteValidateonly: action.event+state.orderLaterSubmitBtn
        }
        case "setThankYouForSaveLaterValue":
            state.thankYouForSaveLater = action.val;
        return {
            ...state
        }
        break;
    }
    return newState;
}
 export default quoteReducer;