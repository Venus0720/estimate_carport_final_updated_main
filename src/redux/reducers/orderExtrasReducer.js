import { params, const_var} from './reducer';
import * as cuBuilding from './pricingReducer';
import * as cuComponent from './componentReducer';
export const extrasState= {
    isSlidebarOpen:false,
    isOrderExtraNotesOpen:false,
    ExtraspriceCalculation:'',
    showhideleftpanel:false, 
    order_extra_items:{},
    AddExtraNotes:'',
    LoginSession:false,
    isSlidebarOpencapture:false,
    ExtrascrmSetting:'',
    BlobImage:false,
    isShowCaptureModal:false,
    estimator_QuestionAnswer:'', 
    BlobImageName:"",
    BlobImageIndex:0,
    is_description:false,
    
}
extrasState.order_extra_items = const_var.order_extra_items;
extrasState.estimator_QuestionAnswer = const_var.estimator_QuestionAnswer;
extrasState.LoginSession = const_var.loginSession;
extrasState.ExtrascrmSetting = const_var.crmSetting;

window.onload = function(){
    if(window.innerWidth < 992){
            const_var.ScrollCaptureEnd=false
        }

        else{
              const_var.ScrollCaptureEnd=true
        }
}


            window.addEventListener("resize",  () => {  

                    if(window.innerWidth < 992){
                        const_var.ScrollCaptureEnd=false
                    }

                    else {
                        const_var.ScrollCaptureEnd=true

                    }
               
             }); 


const orderExtrasReducer = (state = extrasState, action) =>{
    const newState = {...state};
    switch(action.type)
    {
        case "onClickshowhideleftpanel":
        state.showhideleftpanel =! state.showhideleftpanel;
        return{
            ...state,
            showhideleftpanel:state.showhideleftpanel
        }
        break;
        case "showImageEditor":
            const_var.isShowEmageEditor = action.flag;
            state.BlobImageName = action.value;
            if(action.key!='')
            {
                state.BlobImageIndex = (action.key!='')?action.key:state.BlobImageIndex;
                // console.log(action.value,"action.value",action.key,const_var.i_g_A_y)
                const_var.i_g_A_y[action.key].image = action.value;
            }
            
        return{
            ...state,
            action
        }
        break;

        case "handleShowCapture":
        state.isSlidebarOpencapture = true;  
          
        //state.i_g_A_y = const_var.i_g_A_y;
        const bodydom = document.querySelector('body'); 
        bodydom.classList.add("isSlidebarOpen" ,"opencaptureview");
        
            setTimeout(function(){
                    bodydom.classList.add("active-fullview");          
                     cuComponent.onResize();
                }, 400);

     
        return{
            ...state,
            action
        }
        break;
        case "captureBlobImages":
           
            // const tabsoptionscroll = document.querySelector('.photos-screen .vr-scroll-1');      
           
            // tabsoptionscroll.scrollTo(0, 1000); 
            
            document.querySelector('body').classList.add('capture-animate');
            setTimeout(function(){
                document.querySelector('body').classList.remove('capture-animate');
           }, 1000);
            const_var.i_g_A_y.push({"image":const_var.renderer.domElement.toDataURL("image/jpeg")});
            if(const_var.i_g_A_y.length>0)
            {
                const_var.checkCaptuareImage = true;
            }else
            {
                const_var.checkCaptuareImage = false;
            }
            for (var i = 0; i < const_var.i_g_A_y.length; i++) {
                if(const_var.i_g_A_y[i].image_name==undefined || const_var.i_g_A_y[i].image_name=="")
                {
                    const_var.i_g_A_y[i].image_name = "View Image "+(i+1);
                }
            }
            state.BlobImage =! state.BlobImage;
            //const_var.post_data["building"].building_image = const_var.renderer.domElement.toDataURL("image/jpeg",0.5);  
            const tabsoptionscroll = document.querySelector('.testingscroll');      
            if(const_var.ScrollCaptureEnd){
                    setTimeout(function(){
                        tabsoptionscroll.scrollIntoView({ behavior: "smooth"});
                   }, 500);
            }

        return{
            ...state,
            action
        }
        break;
        case "addSluginToBlobImages":
    
            if(action.label!="")
            {
                if(action.label=="image_name")
                {
                    const_var.i_g_A_y[action.key].image_name = action.event.target.value;
                }if(action.label=="description")
                {
                    const_var.i_g_A_y[action.key].description = action.event.target.value;
                }if(action.label=="is_description")
                {
                    const_var.i_g_A_y[action.key].is_description =! action.event.target.value;
                }
                state.BlobImage =! state.BlobImage;
                       
            }else
            {
                // console.log( action.key);
                // action.key.parentNode.parentNode.classList.add('deleting')              

                    const_var.i_g_A_y.splice(action.key, 1);             
                                  
                if(const_var.i_g_A_y.length>0)
                {
                    const_var.checkCaptuareImage = true;
                }else
                {
                    const_var.checkCaptuareImage = false;
                }
                state.BlobImage =! state.BlobImage;
                document.querySelector('body').classList.add('capture-animate');
                setTimeout(function(){
                    document.querySelector('body').classList.remove('capture-animate');
               }, 1000);

            }

            if(action.newKey=='CaptureMobile'){
                action.event.stopPropagation();
            }

            console.log(action)
            //const_var.post_data["building"].building_image = const_var.renderer.domElement.toDataURL("image/jpeg",0.5);  
        return{
            ...state,
            action
        }
        break;
        case "handleShowExtras":
            if(action.key!="extra_close")
            {
                //const_var.i_g_A_y = [];
                // state.isSlidebarOpen = true;         
                //  state.isSlidebarOpencapture = false;        
                // document.querySelector('body').classList.add('isSlidebarOpen');
                state.order_extra_items = const_var.order_extra_items;
                state.estimator_QuestionAnswer = const_var.estimator_QuestionAnswer;
                //  const slidepaneldom = document.querySelector('.slide-panel');                 
                // slidepaneldom.classList.remove("device-capture-screen");
               

            }else
            {
                state.isSlidebarOpen = false;  
                const bodydom = document.querySelector('body');    
                 const slidepaneldom = document.querySelector('.slide-panel'); 
                bodydom.classList.remove("isSlidebarOpen" ,"active-fullview","opencaptureview");
               setTimeout(function(){
                     slidepaneldom.classList.add("device-capture-screen");
                }, 300);
               cuComponent.onResize();
               
            }
        return {
            ...state,
            isSlidebarOpen:state.isSlidebarOpen + state.isOrderExtraNotesOpen
        }
        break;
        case "orderExtrasChangeValue":
            if(action.keyword=="yes")
            {
                action.event.target.value = action.event.target.value.replace(/[^0-9\.]/g, "");
                action.event.target.value = action.event.target.value.replace(/^0+/, '');
                action.event.target.value = action.event.target.value.replace(/,/g, '')
                state.order_extra_items[action.event.target.name] = action.event.target.value;
                var regex = /^\d+(\.\d{0,2})?$/g;
                if (!regex.test(state.order_extra_items[action.event.target.name])) {
                    if(isNaN(parseFloat(state.order_extra_items[action.event.target.name]))==true || state.order_extra_items[action.event.target.name]=="")
                    {
                        state.order_extra_items[action.event.target.name] = 0;
                    }else
                    {
                        state.order_extra_items[action.event.target.name] = state.order_extra_items[action.event.target.name].split(".");
                        state.order_extra_items[action.event.target.name] = state.order_extra_items[action.event.target.name][0]+'.'+state.order_extra_items[action.event.target.name][1].substring(0, 2);
                    }
                }
                
                // var regex = /^\d+(\.\d{0,2})?$/g;
                // if (!regex.test(state.order_extra_items[action.event.target.name])) {
                //     state.order_extra_items[action.event.target.name] = 0;
                // }
                if(isNaN((state.order_extra_items[action.event.target.name])))
                {
                    state.order_extra_items[action.event.target.name] = 0;
                }
                // if(isNaN(parseInt(action.event.target.value))==true || action.event.target.value=='')
                // {
                //     action.event.target.value = 0;
                // }
                // state.order_extra_items[action.event.target.name] = parseInt(action.event.target.value);
                const_var.order_extra_items= state.order_extra_items;
                if(action.value=="processing_fee" && const_var.card_processing_fee!=undefined)
                {
                    const_var.card_processing_fee.is_edit = true;
                }
                if(action.value=="surchargeFees")
                {
                    const_var.UpdatedPriceData.surcharge_amount=undefined;
                    const_var.surcharge_amount_is_edit=true;
                }
                if(action.value=="surchargeFees" && const_var.stateManufacturerAcordingAPIDiscount['surcharge'][params.m_s_n]!=undefined)
                {
                    const_var.stateManufacturerAcordingAPIDiscount['surcharge'][params.m_s_n].is_edit = true;
                }
                // if(action.value=="surchargeFees")
                // {
                //     const_var.UpdatedPriceData.surcharge_taxable = undefined;
                // }

                cuBuilding.cP();
            }else
            {
                if(action.value=="additional_note")
                {
                    state.order_extra_items["additional_note"] = action.event.target.value;
                    const_var.order_extra_items= state.order_extra_items;
                }
                else if(action.value == 'engineer_drawings'){
                    let isInputContinue = action.event.target.value != '' && action.event.target.value.includes('.') && action.event.target.value.split('.')[1].length > 2 ? false : true
                    const_var.order_extra_items.engineer_drawings_name = action.event.target.value
                    if(isInputContinue){
                        if(action.drawingname != undefined){
                            state.order_extra_items["engineer_drawings_name"] = action.drawingname
                            state.order_extra_items["engineer_drawings"] = action.cost || 0
                        }
                        else{
                            action.event.target.value = action.event.target.value.replace(/[^0-9\.]/g, "");
                            action.event.target.value = action.event.target.value.replace(/^0+/, '');
                            action.event.target.value = action.event.target.value.replace(/,/g, '')
                            state.order_extra_items["engineer_drawings"] = action.event.target.value
                        }
                        state.order_extra_items = const_var.order_extra_items
                    }
                    if(isNaN(parseFloat(state.order_extra_items["engineer_drawings"]))==true || state.order_extra_items["engineer_drawings"]=="")
                    {
                        state.order_extra_items["engineer_drawings"] = 0;
                        state.order_extra_items = const_var.order_extra_items
                    }
                }
                else if(action.value=="description")
                { 
                    state.order_extra_items["description"] = action.event.target.value;
                    const_var.order_extra_items= state.order_extra_items;
                } else if(action.value == "permit"){
                    const_var.order_extra_items.permit = action.event.target.value
                    state.order_extra_items["permit"] = action.event.target.value;
                    if(state.order_extra_items["permit"] === "yes"){
                        if(const_var.loginSession!=undefined && const_var.loginSession == false){
                           if(params.p_s_n == 29 && (params.m_s_n == 3 || params.m_s_n == 9)){
                             if(const_var.stateManufacturerAcordingAPI[params.p_s_n].is_labor_show_in_3d==false && const_var.stateManufacturerAcordingAPI[params.p_s_n].is_permit_show_in_3d==true){
                                const_var.order_extra_items['extra_labour'] = parseFloat(const_var.stateManufacturerAcordingAPI[params.p_s_n].order_permit_fee)
                             }else{
                                state.order_extra_items.extra_labour = parseFloat(const_var.stateManufacturerAcordingAPI[params.p_s_n].order_permit_fee)+parseFloat(const_var.stateManufacturerAcordingAPI[params.p_s_n].labor_fee)                        
                             }
                            }else{
                            state.order_extra_items.order_permit_fee = const_var.stateManufacturerAcordingAPI[params.p_s_n].order_permit_fee
                           }
                        }else{
                            const_var.stateManufacturerAcordingAPI[params.p_s_n]!=undefined && const_var.stateManufacturerAcordingAPI[params.p_s_n].length>0 && const_var.stateManufacturerAcordingAPI[params.p_s_n].map((data)=>{
                                if(data.id == params.m_s_n){
                                    if(params.p_s_n == 29 && (params.m_s_n == 3 || params.m_s_n == 9) && const_var.crmSetting.is_module_name !== "inventory"){
                                        state.order_extra_items.extra_labour = parseFloat(data.order_permit_fee)+parseFloat(data.labor_fee)
                                        state.order_extra_items.order_permit_fee = 0
                                    }else{
                                        state.order_extra_items.order_permit_fee = data.order_permit_fee;
                                    }
                                }
                            })
                        }
                    }else if(state.order_extra_items["permit"] === "no" || state.order_extra_items["permit"] === "cust_verify"){
                        if((params.p_s_n == 29 && (params.m_s_n == 3 || params.m_s_n == 9)) && const_var.loginSession!=undefined && const_var.loginSession == false){
                           state.order_extra_items.extra_labour = parseFloat(const_var.stateManufacturerAcordingAPI[params.p_s_n].labor_fee);
                           if(const_var.stateManufacturerAcordingAPI[params.p_s_n].is_labor_show_in_3d==false){
                              const_var.order_extra_items['extra_labour'] = 0
                           }
                        }else{
                            const_var.stateManufacturerAcordingAPI[params.p_s_n]!=undefined && const_var.stateManufacturerAcordingAPI[params.p_s_n].length>0 && const_var.stateManufacturerAcordingAPI[params.p_s_n].map((data)=>{    
                                if(data.id == params.m_s_n && (params.p_s_n == 29 && (params.m_s_n == 3 || params.m_s_n == 9))){
                                   state.order_extra_items.extra_labour = parseFloat(data.labor_fee)
                                }
                            })
                        }
                        state.order_extra_items.order_permit_fee = 0;
                    }
                     state.order_extra_items = const_var.order_extra_items;
                }else
                {
                    state.order_extra_items[action.event.target.name] = action.event.target.value;
                    const_var.order_extra_items= state.order_extra_items;
                }
                cuBuilding.cP();
            }
        return {
            ...state,
            action
        }
        break;
        case "CheckCaptureModalImage":
            state.isShowCaptureModal = action.str;
            if(action.key=='empty')
            {
                const_var.i_g_A_y = [];
                const_var.checkCaptuareImage = false
                // state.isSlidebarOpencapture = true;  
                // const bodydom = document.querySelector('body'); 
                // bodydom.classList.add("isSlidebarOpen" ,"active-fullview","opencaptureview");
            }
        return{
           ...state,
            action
        }
        break;
        case "UpdateState":
            state.order_extra_items = const_var.order_extra_items;
        return{
           ...state,
            action
        }
        break;
    }
return newState;
}
export default orderExtrasReducer;  