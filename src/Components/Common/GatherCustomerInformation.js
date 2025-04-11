import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {showDownloadProgressBar, showSaveLater, talkexpert } from '../../action';
import { handleSaveLatter, inputFieldChangeValue, onLeadSubmitApi, onQuoteSubmitApi, onSubmit } from '../../action/quote.action';
import * as validate from '../Modals/validations';
import Savelater from '../Modals/SaveLater';

function GatherCustomerInformation( {download} ) {
    const dispatch = useDispatch();
    const state = useSelector((state)=>state.reducer)
    const number_format = (param) => {
        return parseFloat(param).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
    const roofdata = state.const_var.color.find((item) => 
    item.id === state.params.p_r_c_id
    );
    const trimdata = state.const_var.color.find((item) => 
    item.id === state.params.p_t_c_id
    );

    const walldata = state.const_var.color.find((item) => 
    item.id === state.params.p_w_c_id
    );
    // const down_payment = state.const_var.post_data?.building?.down_payment_total !=undefined ? state.const_var.post_data?.building?.down_payment_total : 0;
    
    const handleWallSelectonChangeValue = ()=>{
        state.const_var.post_data.first_name = "";
        state.const_var.post_data.phone_no = "" ;
        state.const_var.post_data.email = "";
        state.const_var.displayerrorMessage = {}
        state.const_var.post_data.messageField = ''
        document.querySelector('#saveForm').classList.remove('overlay-container' , 'gather-customer-information')
        document.querySelector('#saveForm').classList.add('d-none');
        state.const_var.checkIval = 0;
        state.const_var.i_g_A_y = [];
    }

    const down_payment = (state.const_var.BuildingPriceArrar['new_down_payment_total']!=undefined)?(state.const_var.BuildingPriceArrar['new_down_payment_total'] +state.const_var.BuildingPriceArrar['custom_down_payment_total'] + state.const_var.BuildingPriceArrar['grvy_value']).toFixed(2):0

    const grand_total = (state.const_var.BuildingPriceArrar!=undefined && state.const_var.BuildingPriceArrar['order_total']!=undefined)?((state.const_var.BuildingPriceArrar['order_total'] + state.const_var.BuildingPriceArrar["custom_subTotal"] + state.const_var.BuildingPriceArrar['additional_charges'])).toFixed(2) :0

    return (
    <div id ='saveForm' className={state.const_var.isShowSaveLater ? 'overlay-container gather-customer-information' : 'd-none'}>
        <div className='gather-customer-information-container'>
            <div className='summary-detail-header'>
                <div className='gather-info'>
                    <div className='building-notification'>
                        <div className='note-header'>
                            <h2>
                                {state.const_var.isShowConnectBox === '1' && 'Ready to Build?'}
                                {state.const_var.isShowConnectBox === '2' && 'Ready to Build?'}
                                {state.const_var.isShowConnectBox === '3' && 'Great Selection!'}
                            </h2>
                            <h2>{state.const_var.isShowConnectBox === '1' && `Let's Get Started Together`}</h2>
                            <h2>{state.const_var.isShowConnectBox === '2' && `Save this Building to Order Later`}</h2>
                            <h2>{state.const_var.isShowConnectBox === '3' && `Save this Building to Order Later`}</h2>
                        </div>
                        <div className='note-footer'>
                            <span>We're here to help! Let us answer your questions & place</span>
                            <span> your building order today.</span>
                        </div>
                    </div>
                    <div className='input-wrap'>
                        <div className='input-container'> 
                            <h2>Full Name*</h2>
                            <input className='input-field' type="text" 
                                onKeyUp={e => validate.alphabetCheck(e)}
                                value={state.const_var.post_data.first_name}
                                onChange={(e) => {
                                    dispatch(inputFieldChangeValue(e, 'first_name' , 'First name' , 'LeadCustomer' , 'FullNameValidation'));
                                }} 
                                maxLength={30}
                            />
                        </div>
                        <div className='invalid-warning'>{state.const_var.displayerrorMessage.first_name}</div>
                        <div className='input-container'>
                            <h2>Email Address*</h2>
                            <input className='input-field' 
                                value={state.const_var.post_data.email}
                                onChange={(e) => {
                                    dispatch(inputFieldChangeValue(e, 'email' , 'Email' , 'LeadCustomer' , 'EmailFieldValidation'));
                                }} 
                            />
                        </div>
                        <div className='invalid-warning'>{state.const_var.displayerrorMessage.email}</div>
                        <div className='input-container'>
                            <h2>Phone*</h2>
                            <input className='input-field'
                                maxLength={10}
                                onKeyUp={e => validate.numericCheck(e)}
                                value={state.const_var.post_data.phone_no}
                                onChange={(e) => {
                                    dispatch(inputFieldChangeValue(e, 'phone_no' , 'Phone number' , 'LeadCustomer' , 'phoneValidation'));
                                }} 
                            />
                        </div>
                        <div className='invalid-warning'>{state.const_var.displayerrorMessage.phone_no}</div>
                        <div className='input-container'>
                            <h2>Your Message</h2>
                            <textarea className='textarea-field' 
                                value={state.const_var.post_data.messageField}
                                onChange={(e) => {  
                                    dispatch(inputFieldChangeValue(e, 'messageField' , 'messageField' , 'LeadCustomer' , 'MessageFieldValidation'));
                                }} 
                            />
                        </div>
                    </div>
                    {/* <div className={state.const_var.is_loader ?'summary-save-btn mt-20 smd-show md-show disabled' : 'summary-save-btn mt-20 smd-show md-show'}>
                        <button 
                            className='help-save-btn'
                            type='submit'  
                            onClick={(e)=> {
                                e.preventDefault();
                                if(state.const_var.isShowConnectBox === '3'){
                                    dispatch(onLeadSubmitApi(e))
                                    if(state.const_var.checkValidate === false){
                                        download()
                                    }
                                }
                                if(state.const_var.isShowConnectBox === '2'){
                                    dispatch(onSubmit(e))
                                }
                            }} 
                        >
                            {
                            state.const_var.is_loader ? <span className='dot-pulse'></span> : <span>Save</span>
                            }                     
                        </button>
                    </div> */}
                    <div className={state.const_var.is_loader ? 'summary-save-btn mb-gather-btn disabled' : 'summary-save-btn mb-gather-btn'}>
                        <button 
                            className='help-save-btn'
                            type='submit'  
                            onClick={(e)=> {
                                e.preventDefault();
                                if(state.const_var.isShowConnectBox === '3'){
                                    dispatch(onLeadSubmitApi(e))
                                    if(state.const_var.checkValidate === false){
                                        download()
                                    }
                                }
                                if(state.const_var.isShowConnectBox === '2'){
                                    dispatch(onSubmit(e))
                                }
                            }} 
                        >
                            {
                            state.const_var.is_loader ? <span className='dot-pulse'></span> : <span>Save</span>
                            }                     
                        </button>
                    </div>
                </div>
                <div className='building-detail'>
                    <div className={(state.const_var.isShowConnectBox === '2' || state.const_var.isShowSaveQuote == true) ? 'main-building-price main-building-price-height' : 'main-building-price' } >
                        <div className='building-show'>
                            <img src={state.const_var.editAPIDataByResponse.data?.building_images[0].image} alt='building_image' />
                            <div className='your-building'>
                                Your Building Summary
                            </div>
                        </div>
                        <div className='building-landing'>
                            <div className='building-name-container'>
                                <div className='building-name'>
                                    <h2>{state.const_var.new_building_name}</h2>
                                </div>
                                <div className='size-container'>
                                    <span>Width&nbsp;<b>{state.params.p_w}'</b></span>
                                    <span>.</span>
                                    <span>Lenght&nbsp;<b>{state.params.p_d}'</b></span>
                                    <span>.</span>
                                    <span>Height&nbsp;<b>{state.params.p_h}'</b></span>
                                </div>
                                
                            </div>
                            <div className='color-container'>
                                <div>
                                    <div className='color-circle' style={{backgroundColor: roofdata?.hex_value}}></div>
                                    <span>Roof</span>
                                    <span><b>{roofdata?.name}</b></span>
                                </div>
                                <div>
                                    <div className='color-circle' style={{backgroundColor: trimdata?.hex_value}}></div>
                                    <span>Trim</span>
                                    <span><b>{trimdata?.name}</b></span>
                                </div>
                                <div>
                                    <div className='color-circle' style={{backgroundColor: walldata?.hex_value}}></div>
                                    <span>Wall</span>
                                    <span><b>{walldata?.name}</b></span>
                                </div>
                            </div>
                            {
                                !(state.const_var.isShowConnectBox === '2') && 
                                !state.const_var.isShowSaveQuote &&
                                    <div className='underline'></div>
                            }
                            {
                                !(state.const_var.isShowConnectBox === '2') &&  !state.const_var.isShowSaveQuote && 
                                <div className='due-total-price'>
                                    <div className='due-today-price'>
                                        <span>Due Today (Down Payment):</span>
                                        <h3>${number_format(down_payment)}</h3>
                                    </div>
                                    <div className='total-amount'>
                                        <span >Building Total:&nbsp;</span>
                                        <h2>$ {number_format(grand_total)}</h2>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='md-hidden' style={{width:"100%" , height:"24px"  , color: "red"}}></div>
            <div className={state.const_var.is_loader ? 'summary-save-btn only-mb-none disabled md-hidden' : 'summary-save-btn only-mb-none md-hidden'}>
                <button 
                    className='help-save-btn'
                    type='submit'  
                    onClick={(e)=> {
                        e.preventDefault();
                        if(state.const_var.isShowConnectBox === '3'){
                            dispatch(onLeadSubmitApi(e))
                            if(state.const_var.checkValidate === false){
                                download()
                            }
                        }
                        if(state.const_var.isShowConnectBox === '2'){
                            dispatch(onSubmit(e))
                        }
                    }} 
                >
                    {
                       state.const_var.is_loader ? <span className='dot-pulse'></span> : <span>Save</span>
                    }                     
                </button>
            </div>
            <div className='downloading-here md-hidden'>
                <span className="d-none">Don't miss this building on your next visit! The building information will be saved as cookies in your browser. But, in case your history</span>
                <span className="d-none">&nbsp;gets cleared, you still have a chance to save this building info. by <span className='bold-downloading' onClick={(e)=>{download()}}>downloading the pdf here.</span></span>
                {/* <span className=""><span className='bold-downloading' onClick={(e)=>{download()}}>Download pdf here</span></span> */}
            </div>
            <div className='popup-close'><span className='close'  onClick={(e)=> {dispatch(talkexpert("show"));handleWallSelectonChangeValue();dispatch(showSaveLater("form",false))}}>&times;</span></div>
        </div>
    </div>
  )
}

export default GatherCustomerInformation;