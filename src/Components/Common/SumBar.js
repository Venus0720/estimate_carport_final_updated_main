import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { moreDetail } from '../../action';
import { ShowBuynowConfirm } from '../../action';
import BuynowConfirm from './BuynowConfirm';
import Build_sum_arrow from '../../assets/images/arrow/building-summary-arrow.svg'

function SumBar() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.reducer);
    // const down_payment = state.const_var.post_data?.building?.down_payment_total !=undefined ? state.const_var.post_data?.building?.down_payment_total : 0;
    const number_format = (param) => {
        return parseFloat(param).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
    const down_payment = (state.const_var.BuildingPriceArrar['new_down_payment_total']!=undefined)?(state.const_var.BuildingPriceArrar['new_down_payment_total'] +state.const_var.BuildingPriceArrar['custom_down_payment_total'] + state.const_var.BuildingPriceArrar['grvy_value']).toFixed(2):0
    const grand_total = (state.const_var.BuildingPriceArrar!=undefined && state.const_var.BuildingPriceArrar['order_total']!=undefined)?((state.const_var.BuildingPriceArrar['order_total'] + state.const_var.BuildingPriceArrar["custom_subTotal"] + state.const_var.BuildingPriceArrar['additional_charges'])).toFixed(2) :0 ;

    return (
        <div className='sum-bar'>

            <div className='price-side'>
                <div className='due-container'>
                    <div className='due-today-note'>Due Today<div className='deposit'>&nbsp;(Deposit)</div>&nbsp;:</div>
                    <div className='due-price'>
                        <span>&nbsp;${number_format(down_payment)}</span>
                    </div>
                </div>
                <div className='total-container'>
                    <div className='total-amount'>
                        <span>Building Total :</span>
                        <span>&nbsp;${number_format(grand_total)}</span>
                    </div>
                    <div className='vertical'></div>
                    <div className='more-details'>
                        <span className='d-flex' onClick={(e)=> dispatch(moreDetail("show"))}>{'Building Summary'}<img className='ml-5' src={Build_sum_arrow} alt='right-arrow' /></span>
                    </div>
                </div>
            </div>
            <div className='btn-side'>
                {state.isShowBuynowConfirm && <BuynowConfirm />}
                <div className='buy-now-btn' id='buy-now-btn' onClick={(e)=>{dispatch(ShowBuynowConfirm())}}>BUY NOW</div>
            </div>
        </div>
    )
}

export default SumBar;