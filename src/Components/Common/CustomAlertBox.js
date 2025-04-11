import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { alertCancel, alertDone, handleClose, handleTabsClick } from '../../action/index';
import { updateAlertMessage } from '../../redux/reducers/utils.js';
import CustomPopup from './CustomPopup.js';


const CustomAlertBox = () => {
    const dispatch = useDispatch()
    const state = useSelector((state)=>state.reducer);

    return(
        <>
           {state.const_var.isShowAlert &&
            <CustomPopup isPopupOpen={state.const_var.isShowAlert} onClosePopup={()=>dispatch(alertCancel(state.const_var.alertUsedFor))} >
                <h2>Alert!!</h2>
                <p>{updateAlertMessage(state.const_var.alertUsedFor)}</p>
                <div className='button-sec'>
                    {(state.const_var.alertUsedFor!="RegularRoofStyle") ?
                        <button onClick={()=> {
                            dispatch(handleClose(state.const_var.alertUsedFor, true))
                            dispatch(alertDone(state.const_var.alertUsedFor, state.checkwallposition))
                        }} className='solid-btn'>          
                        <span className="text">{state.const_var.alertUsedFor == "captuareIMG" ?'Ok':'Ok'}</span> 
                        </button>
                        //  <a className="btn btn-secondary text-uppercase mw-100" onClick={e => this.handleClose(state.const_var.alertUsedFor, true)}>               
                        //   <span className="text">Done</span>                 
                        // </a> 
                    :null
                    }  
                    {(state.const_var.alertUsedFor!="YourCanNotAddLeanTo" && state.const_var.alertUsedFor!="noSpaceForComponentDuringLoading" && state.const_var.alertUsedFor!="YouCanNotAddPorch" && state.const_var.alertUsedFor!="restrictedBuildingHeight" && state.const_var.alertUsedFor!="restrictedBuildingHeight1")?

                        <button onClick={()=> {
                            dispatch(handleClose(state.const_var.alertUsedFor, false))
                            dispatch(alertCancel(state.const_var.alertUsedFor))
                        }} className='link-btn'>             
                        <span className="text">{(state.const_var.alertUsedFor!="RegularRoofStyle")?'Cancel':'Ok'}</span>
                        </button>
                      :null
                    }
                </div>
            </CustomPopup>
            }
        </>
    )
}
export default CustomAlertBox;