import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ShowHideCheckout } from '../../action/index';

export const BuyNowComponent = (()=> {
    const state = useSelector((state) => state.reducer);
    const dispatch = useDispatch();

    return (
        <div className='buy-now-wrapper'>
            <a onClick={()=>dispatch(ShowHideCheckout())}
            className={`buy-now-cta custom-btn-1`} 
            style={{height: '50px'}}
            >
            <span className='text'>Buy Now</span>
            </a>
        </div> 
    )   
})