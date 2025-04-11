import * as validate from '../../Components/Modals/validations';
import { params, const_var,initialState} from './reducer';
import * as cuBuilding from './pricingReducer';
export const loginState= {
    checkLoginValidateonly:"",
    loginErroHandling:"",
    formsubmitHandle:"",
    displayerrorMessage:{},
    loginRememberMe:false,
    alertCheckLoginAPI:'',
    alertForLoginAPI:'',
    alertForLoginAPIMSG:'',
    loginSucess:false,
    parentReducerData:"",
    targetRedirectUrl:"",
    iframeEvents: ""
}
loginState.displayerrorMessage = const_var.displayerrorMessage;
loginState.parentReducerData = const_var.crmSetting;
loginState.targetRedirectUrl = const_var.targetRedirectUrl;
const loginReducer = (state = loginState, action) => {
    const newState = { ...state };
        switch (action.type) {
        case "onLoginTextFiledChangeValue":
        state.alertCheckLoginAPI = false;
        let userObj = '';
        if(localStorage.getItem('RememberuserData')!=undefined)
        {
            userObj = JSON.parse(localStorage.getItem('RememberuserData'));
            userObj[action.value] = action.event.target.value;
            localStorage.setItem("RememberuserData",JSON.stringify(userObj));
        }
        validate.onTextFiledChangeValue(action.event,action.value,action.keyword);
        state.displayerrorMessage = const_var.displayerrorMessage;

        return {
            ...state,
            checkLoginValidateonly:action
        }
        break;
        case "onSubmitLoginApiErrorhandling":
            state.loginSucess = false;
            var newmsgforreload = ""; 
            state.alertCheckLoginAPI = true;                
            state.alertForLoginAPI = "onSubmitLoginApiErrorhandling";
            state.alertForLoginAPIMSG = action.value;
            newmsgforreload = action.value + state.alertCheckLoginAPI;
        return {
            ...state,
            action
        }
        break;
        case "onSubmitLogin":
        if(action.key=="login")
        {
            state.loginSucess = true;
            state.alertCheckLoginAPI = false;   
            const_var.confirmState = false;
            const_var.is_loggedinUserData = action.event.data.userdata;
            const_var.crmSetting.api_token = const_var.is_loggedinUserData.api_token;
            const_var.username = action.event.data.userdata.name;
            const_var.selectedTabstate = 'statechange';
            const_var.loginSession = true;
            action.data['first_name'] = const_var.is_loggedinUserData.first_name;
            action.data['last_name'] = const_var.is_loggedinUserData.last_name;
            action.data['user_id'] = const_var.is_loggedinUserData.id;
            action.data['api_token'] = const_var.is_loggedinUserData.api_token;
            action.data['company_name'] = const_var.is_loggedinUserData.company_name;
            localStorage.setItem("userData",JSON.stringify(action.data));
            localStorage.setItem("access_token",action.event.data.userdata.jwt_token);
            state.iframeEvents && state.iframeEvents.postMessage({ access_token: action.event.data.userdata.jwt_token }, "*");
            if (state.loginRememberMe == true) {
                action.remember['remember'] = state.loginRememberMe;
                localStorage.setItem("RememberuserData",JSON.stringify(action.remember));
                
            }else{
                localStorage.username = "";
                localStorage.checkbox = "";
            } 
        }else
        {
            action.event.preventDefault();
            validate.onSubmitForm(action.event);
            state.displayerrorMessage = const_var.displayerrorMessage;
        }
        return{
            ...state,
            checkLoginValidateonly:action
        }
        break;
        case "loginRememberMeChange":
        state.loginRememberMe = !state.loginRememberMe;
        state.alertCheckLoginAPI = false;
        if(state.loginRememberMe==false)
        {
            localStorage.removeItem('RememberuserData');
        }
        return{
            ...state,
            checkLoginValidateonly:action
        }
        break;
        case "onSubmitLogout":
        // localStorage.removeItem('userData');
        localStorage.removeItem('userData');
        localStorage.clear();
        const_var.loginSession = false;
        const_var.logindrpdwn= false;
        const_var.logininitial= true;  
        window.location.href = state.parentReducerData.navigation_url.logout
        return{
            ...state,
            checkLoginValidateonly:action
            //newColor:state.const_var.loginSession+action.event
        }
        break;
        case "iframeEvent":
            return {
               ...state,
               iframeEvents: action.event
           }
       break;
        case "resetErrMsg":
            state.displayerrorMessage = {};
            const_var.displayerrorMessage = {};
            return {
               ...state,
               action
           }
       break;
        
      }

    return newState;
  };
  export default loginReducer;