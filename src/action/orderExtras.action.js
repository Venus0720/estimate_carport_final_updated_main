import axios from 'axios';

export function orderExtrasChangeValue (e,name,keyword){ 
    return(dispatch)=>{
        dispatch({
            type: "orderExtrasChangeValue",
            event:e,
            value:name,
            keyword:keyword
        })
    }
}
export function handleShowExtras(key) {
    return {
        type: "handleShowExtras",
        key:key
    }
}

export function handleShowCapture(e) {
    return {
        type: "handleShowCapture",
         value: e
    }
}
export function captureBlobImages(e)
{
    return(dispatch)=>{
        dispatch({
            type: "captureBlobImages",
            event: e
        })
    }
}
export function onClickshowhideleftpanel (e){ 
    return(dispatch)=>{
        dispatch({
            type: "onClickshowhideleftpanel",
            event: e
        })
    }
}
export function showImageEditor(e,value,flag,key)
{
    return(dispatch) =>{
        dispatch({
            type:"showImageEditor",
            event:e,
            value:value,
            flag:flag,
            key:key
        })
    }
}
export function addSluginToBlobImages(e,key,label,extrakey)
{
    return(dispatch)=>{
        dispatch({
            type: "addSluginToBlobImages",
            event: e,
            key:key,
            label:label,
            newKey:extrakey
        })
    }
}
export function CheckCaptureModalImage(str,key){ 
    return(dispatch)=>{
        dispatch({
            type: "CheckCaptureModalImage",
            str:(str=="open")?true:false,
            key:key
          
        })
    }
   
  }

