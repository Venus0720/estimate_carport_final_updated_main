import { params, const_var, initialState} from '../../redux/reducers/reducer';

export let errorMessage;
export function onSubmitForm(e) {
   e.preventDefault();
   for (let i = 0; i <= e.target.length - 1; i++){
      
      if(e.target[i].name !=''){
         if (e.target[i].value == ''){

          if(e.target[i].name=="lead_source" || e.target[i].name=="billing_state" || e.target[i].name=="shipping_state")
          { 
            const_var.displayerrorMessage[e.target[i].name] = '';
            const_var.checkValidate = false;
            const_var.checkValidatePattern = false;
          }else
          { 
            const_var.displayerrorMessage[e.target[i].name] = e.target[i].parentNode.innerText + " is required";
            const_var.checkValidate = true;
            const_var.checkValidatePattern = true;
          }
         

         }
         else {
            //console.log(e.target[i].value,typeof e.target[i].name,e.target[i].name,"e.target[i].value",const_var.displayerrorMessage[e.target[i].name])
            if(const_var.checkValidatePattern==false && (const_var.displayerrorMessage[e.target[i].name]=="" || const_var.displayerrorMessage[e.target[i].name]==undefined))
            {  
               const_var.displayerrorMessage[e.target[i].name] = ''; 
               const_var.checkValidate = false;
            }else{
               
               const_var.checkValidate = true;
               const_var.checkValidatePattern = true;
            }
            
         }
      }
     
   }
   //return false;
   return const_var.checkValidate;
}
export function onSubmitEditForm(event) {
   event.preventDefault();
    for (let i = 0; i <= event.target.length - 1; i++){
      if(event.target[i].name=="first_name" && event.target[i].value=="")
      {
          const_var.displayerrorMessage[event.target[i].name] = event.target[i].parentNode.innerText.replace("*","").trim() + " is required";
          const_var.checkValidate = true;
      }if(event.target[i].name=="first_name" && event.target[i].value!="")
      {
          const_var.displayerrorMessage[event.target[i].name] = "";
          const_var.checkValidate = false;
      }
    }
}
export function onSubmitAddressAddEditForm(event) {
   event.preventDefault();
    for (let i = 0; i <= event.target.length - 1; i++){

      var alpha1 = /^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z0-9-, ])*$/;
      var alpha = /^[a-zA-Z,]+(\s{0,1}[a-zA-Z, ])*$/;
      if(event.target[i].name!='zipcode')
      {
         if (event.target[i].value != "") {
            if (event.target[i].name == 'address_line_1') {
               event.target[i].value = event.target[i].value.trim();
               if (event.target[i].value.length > 200) {
                  const_var.displayerrorMessage[event.target[i].name] = " Please enter Less than 200 characters";
                  const_var.checkValidate = true;
                  return;
               }
            }
            if (event.target[i].name == 'address_line_2') {
               event.target[i].value = event.target[i].value.trim();
               if (event.target[i].value.length > 200) {
                  const_var.displayerrorMessage[event.target[i].name] = " Please enter Less than 200 characters";
                  const_var.checkValidate = true;
                  return;
               }
            }
            if (event.target[i].name != "address_line_1" && event.target[i].name != "address_line_2") {
               if (event.target[i].value !== null && alpha.test(event.target[i].value)) {
                  const_var.displayerrorMessage[event.target[i].name] = '';
                  const_var.checkValidate = false;
               } else {
                  const_var.displayerrorMessage[event.target[i].name] = "Please enter only alphabets & spaces";
                  const_var.checkValidate = true;
                  return;
               }
            }
            if (event.target[i].value.length > 50 && (event.target[i].name != 'address_line_1') && (event.target[i].name != 'address_line_2')) {
               const_var.displayerrorMessage[event.target[i].name] = " Please enter Less than 50 characters";
               const_var.checkValidate = true;
               return;
            }
         } if (event.target[i].name == "address_line_1" && event.target[i].value != "") {
            const_var.displayerrorMessage[event.target[i].name] = "";
            const_var.checkValidate = false;
         } if (event.target[i].name == "address_line_2" && event.target[i].value != "") {
            const_var.displayerrorMessage[event.target[i].name] = "";
            const_var.checkValidate = false;
         }
      }
      else{
         var zcode = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;
         if (event.target.value !== null && zcode.test(event.target.value) && event.target.value.length == 5) {
            const_var.displayerrorMessage[event.target[i].name] = '';
            const_var.checkValidate = false;
         } else {
            const_var.displayerrorMessage[event.target[i].name] = 'Please enter a valid Zip Code';
            const_var.checkValidate = true;
         }
      }
    }
}
export function onTextFiledChangeValue(e, type,keyword,checkLead) {
   const_var.checkValidatePattern = false; 
   if(checkLead!=undefined && checkLead!="LeadCustomer")
   {
     if(e.target.value=="")
     {
        const_var.displayerrorMessage[type] = keyword + " is required";
        const_var.checkValidate = true;
        return false;
     } else {
        const_var.displayerrorMessage[type] = '';
        const_var.checkValidate = false;
     }
   } 
   const_var.displayerrorMessage[type] = ''; 
   if(checkLead == "firstNameValidation" || checkLead == "lastNameValidation" || checkLead == "streetValidation" || checkLead == 'apartmentValidation' || checkLead == 'FullNameValidation'){
      alphaCheckValue(e,type)
   }

   if(checkLead == "emailValidation" || checkLead == "EmailFieldValidation"){
      checkValidEmail(e)
   }

   if(checkLead == "phoneValidation"){
      checkValidMobileNumber(e , type)
   }
   if(checkLead == "PhoneLimitValidation") {
      checkLimitPhoneValidation(e , type)
   }
   
   if(checkLead == "zipcodeValidation"){
      onZipCodeValidate(e)
   }

   if(checkLead == "stateValidation" || checkLead == "cityValidation"){
      alphaSpaceValue(e,type)
   }

   if(checkLead == "cardNumberValidation"){
      cardnumberValidate(e)
   }

   if(checkLead == "expiryValidation"){
      expiryValidate(e)
   }

   if(checkLead == "cvvValidation"){
      cvvValidate(e)
   }

   return const_var.checkValidatePattern;  
}
export function checkValidEmail(e)
{
  if(e.target.value!=""){
  var email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (e.target.value !== null && email.test(e.target.value)) {
         const_var.displayerrorMessage['email'] = '';
         const_var.checkValidatePattern = false;
         const_var.checkValidate = false;
      } else {
         const_var.displayerrorMessage['email'] = "Invalid Email";
         const_var.checkValidatePattern = true;
         const_var.checkValidate = true;
       }
  }else
  {
    const_var.displayerrorMessage['email'] = '';
    const_var.checkValidatePattern = false;
  }
}
export  function checkLimitPhoneValidation (e, type) {
   let Num = e.target.value;
   if(Num.length>10) {
      const_var.displayerrorMessage[type] = "You can enter a phone number of up to 10 digits."
   }
}
export function checkValidMobileNumber(e,type)
{
  if(e.target.value!="")
  {
    var number = /^(0|[1-9][0-9]*)$/;
       if (e.target.value !== null && number.test(e.target.value) && e.target.value.length == 10) {
          const_var.displayerrorMessage[type] = '';
          const_var.checkValidatePattern = false;
          const_var.checkValidate = false;
       } else {
          const_var.displayerrorMessage[type] = "Please enter Number only of length 10";
          const_var.checkValidatePattern = true;
          const_var.checkValidate = true;
     }
   }else if(type == "phone_no")
   {
    const_var.displayerrorMessage[type] = '';
    const_var.checkValidatePattern = false;
    const_var.checkValidate = false;
   }
}
export function checkValidMobileNumberForOtherField(e)
{
  if(e.target.value!="")
  {
    var number = /^(0|[1-9][0-9]*)$/;
       if (e.target.value !== null && number.test(e.target.value) && e.target.value.length == 10) {
          const_var.displayerrorMessage['mobile_no'] = '';
          const_var.checkValidatePattern = false;
          const_var.checkValidate = false;
       } else {
          const_var.displayerrorMessage['mobile_no'] = "Please enter Number only of length 10";
          const_var.checkValidatePattern = true;
          const_var.checkValidate = true;
     }
   }else
   {
    const_var.displayerrorMessage['mobile_no'] = '';
    const_var.checkValidatePattern = false;
    const_var.checkValidate = false;
   }
}
export function numericCheckForZipCode(e){
   e.target.value = e.target.value.replace(/[^0-9]/g, "");
  
}
export function numericCheck(e){
   e.target.value = parseInt(e.target.value); 
   e.target.value = e.target.value.replace(/[^0-9]/g, "");
}

export function numericCheckwithExactVal(e){
   e.target.value = parseInt(e.target.value); 
   e.target.value = e.target.value.replace(/[^0-9]/g, "");
   if (e.target.value > 10 || e.target.value < 2) {
      e.target.value = 2;
      params.oncenter_val = 2;
      params.oncenter_val_with_action = "";
   }
  
}

export function numericCheckwithDecimalVal(e)
{
  //let decimal = /^[-+]?[0-9]+\.[0-9]+$/;
  //let decimal = /^(\d|10)\.\d{2}$/;
  //let decimal = /^(?:\d*\.\d{1,2}|\d+)$/;
  //let decimal = /\A[+-]?\d+(?:\.\d{1,2})?\z/;
  // e.target.value = parseInt(e.target.value); 
  //  e.target.value = e.target.value.replace(/[^0-9]/g, "");
  var regex = /^\d+(\.\d{0,2})?$/g;
    if (!regex.test(e.target.value)) {
        e.target.value = 0;
    }
   // if(e.target.value.match(decimal)) 
   // {
   //    return e.target.value;
   // }
   // var RE = /^-{0,1}\d*\.{0,1}\d+$/;
   //  return (RE.test(input));
}
export function numericCheckwithDecimalValForTax(e)
{
  //let decimal = /^[-+]?[0-9]+\.[0-9]+$/;
  //let decimal = /^(\d|10)\.\d{2}$/;
  //let decimal = /^(?:\d*\.\d{1,2}|\d+)$/;
  //let decimal = /\A[+-]?\d+(?:\.\d{1,2})?\z/;
  // e.target.value = parseInt(e.target.value); 
  //  e.target.value = e.target.value.replace(/[^0-9]/g, "");
  var regex = /^\d+(\.\d{0,3})?$/g;
    if (!regex.test(e.target.value)) {
        e.target.value = 0;
    }
   // if(e.target.value.match(decimal)) 
   // {
   //    return e.target.value;
   // }
   // var RE = /^-{0,1}\d*\.{0,1}\d+$/;
   //  return (RE.test(input));
}

export function expiryDateCheck(e){
   e.target.value = e.target.value.replace(/[^0-9/]/g, "");
}

export function alphabetCheck(e){
   e.target.value = e.target.value.replace(/[^a-zA-Z ]/g, "");
}

 export function alphaCheckValue(e,label)
{
 var alpha = /^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z0-9-, ])*$/;
 if(e.target.value!="")
 {
     if (e.target.value !== null && alpha.test(e.target.value)) {
        const_var.displayerrorMessage[label] = '';
        const_var.checkValidatePattern = false;
     } else {
        const_var.displayerrorMessage[label] = "Please enter only alphanumeric & spaces";
        const_var.checkValidatePattern = true;
        const_var.checkValidate = true;
      }
      if (e.target.value.length>50)
      {
         const_var.displayerrorMessage[label] = " Please enter less than 50 characters";
         const_var.checkValidatePattern = true;
         const_var.checkValidate = true;
      }
      if (e.target.value.length<3)
      {
         const_var.displayerrorMessage[label] = " Please enter greater than 3 characters";
         const_var.checkValidatePattern = true;
         const_var.checkValidate = true;
      }
 }else
 {
   const_var.displayerrorMessage[label] = '';
   const_var.checkValidatePattern = false;
 }
}

export function alphaSpaceValue(e,label)
{
 var alpha = /^[a-zA-Z,]+(\s{0,1}[a-zA-Z, ])*$/;
 if(e.target.value!="")
 {
   //console.log(e.target.value);
     if (e.target.value !== null && alpha.test(e.target.value)) {
        const_var.displayerrorMessage[label] = '';
        const_var.checkValidatePattern = false;
     } else {
        const_var.displayerrorMessage[label] = "Please enter only alphabets & spaces";
        const_var.checkValidatePattern = true;
        const_var.checkValidate = true;
      }
      if (e.target.value.length>50)
      {
         const_var.displayerrorMessage[label] = "Please enter less than 50 characters";
         const_var.checkValidatePattern = true;
         const_var.checkValidate = true;
      }
      if (e.target.value.length<3)
      {
         const_var.displayerrorMessage[label] = "Please enter greater than 3 characters";
         const_var.checkValidatePattern = true;
         const_var.checkValidate = true;
      }
 }else
 {
   const_var.displayerrorMessage[label] = '';
   const_var.checkValidatePattern = false;
 }
}

export function onSubmitReportIssueDesc(value, name) {
   let finalValue = value.trim()
   if (finalValue == '' || finalValue.length < 5){
      const_var.displayerrorMessage[name] = finalValue == '' ? "Description required" : "Minimum 5 characters required";
      const_var.checkValidatePattern = true;
      return;
   } else {
      const_var.displayerrorMessage[name] = '';
      const_var.checkValidatePattern = false;
      return;
   }
}
export function onZipCodeValidate(e) {
   var zcode = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;
   if ((e.target.value !== null && zcode.test(e.target.value) && e.target.value.length === 5 ) || e.target.value == '') {
      const_var.displayerrorMessage['shipping_zipcode'] = '';
      const_var.checkValidatePattern = false;
   }
   if(e.target.value !== "" && e.target.value.length < 4){
      const_var.displayerrorMessage['shipping_zipcode'] = 'Please enter a valid Zip Code';
      const_var.checkValidatePattern = true;
      const_var.checkValidate = true;
   }else{
      const_var.displayerrorMessage['shipping_zipcode'] = '';
      const_var.checkValidatePattern = false;
   }
}

export function cardnumberValidate(e){
   var number = /^(0|[1-9][0-9]*)$/;
   if (e.target.value !== null && number.test(e.target.value) && e.target.value.length >= 15 && e.target.value.length <= 16) {
      const_var.displayerrorMessage['cardnumber'] = '';
      const_var.checkValidatePattern = false;
   } else {
      const_var.displayerrorMessage['cardnumber'] = 'Please enter valid card Number of length 15 or 16';
      const_var.checkValidatePattern = true;
      const_var.checkValidate = true;
    }
}

export function expiryValidate(e){
   // var expiryDate = document.getElementById("expiryDate").value;
   var expiryDate = e.target.value;

   var today = new Date(); // gets the current date
   var today_mm = today.getMonth() + 1; // extracts the month portion
   //var today_yy = today.getFullYear() % 100; // extracts the year portion and changes it from yyyy to yy format
   var today_yy = today.getFullYear().toString();

   // errorMessage =  "Please enter valid Expiry Date";
   if(today_mm < 10) { // if today's month is less than 10
      today_mm = '0' + today_mm // prefix it with a '0' to make it 2 digits
   } 
   var mm = expiryDate.substring(0, 2); // get the mm portion of the expiryDate (first two characters)
   var yy = expiryDate.substring(3); // get the yy portion of the expiryDate (from index 3 to end)

   // if (expiryDate.length == 6) {
   //    var expiryDate = expiryDate.substring(0, 2) + '/' + expiryDate.slice(-4);
   //    document.getElementById("expiryDate").value = expiryDate.replace("//", '/');
   // }
   // if (expiryDate.length > 2) {
   //    var expiryDate = expiryDate.substring(0, 2) + '/' + expiryDate.slice(2);
   //    document.getElementById("expiryDate").value = expiryDate.replace("//", '/');
   // }
   if ((yy.length == 4 && mm.length == 2 && yy > today_yy && mm <= 12) || (yy.length == 4 && mm.length == 2 && yy == today_yy && mm >= today_mm && mm <= 12)) {
      // all good because the yy from expiryDate is greater than the current yy
      // or if the yy from expiryDate is the same as the current yy but the mm
      // from expiryDate is greater than the current mm
      const_var.displayerrorMessage['expirydate'] = '';
      const_var.checkValidatePattern = false;
   }
   else
   {
      const_var.displayerrorMessage['expirydate'] = 'Please enter valid Expiry Date';
      const_var.checkValidatePattern = true;
      const_var.checkValidate = true;
   }
}

export function cvvValidate(e){
   var cvv = /^[0-9]{3,4}$/;
   if(e.target.value !== null && cvv.test(e.target.value) && e.target.value.length >= 3 && e.target.value.length <= 4){
      const_var.displayerrorMessage['cvv'] = '';
      const_var.checkValidatePattern = false;
   }else{
      const_var.displayerrorMessage['cvv'] = 'Please enter valid CVV number of length 3 or 4';
      const_var.checkValidatePattern = true;
      const_var.checkValidate = true;
   }
}

