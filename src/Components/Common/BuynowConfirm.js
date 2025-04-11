import React, {useEffect, useRef} from 'react'
import { ShowHideCheckout, ShowBuynowConfirm } from '../../action';
import { useDispatch, useSelector } from 'react-redux';
import { handleOrderModal } from '../../action/order.action';

const BuynowConfirm = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.reducer);
    const confirmContainerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(event.target === document.getElementById("buy-now-btn")){
                return;
            }
            if (confirmContainerRef.current && !confirmContainerRef.current.contains(event.target)) {
                event.stopPropagation();
                event.preventDefault();
                dispatch(ShowBuynowConfirm());
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dispatch]);
    
    return (
        <div ref={confirmContainerRef} className='confirm-container'>
            <div className='confirm-notification'>
                <span className='mb-2'>Taxes & any additional charges for your location will</span>
                <span>be calculated after the order confirmation</span>
            </div>
            <div className='confirm-check'>
                <input
                    type='checkbox'
                    id='confirm-id'
                    style={{border:'none',boxShadow:'rgb(179, 179, 179) 0px 0px 0px 1px'}}
                    checked={state.const_var.saveLatterModal} 
                    onClick={()=>dispatch(handleOrderModal('open'))}
                />
                <label for='confirm-id'>Yes, I confirm the building colors & components</label>
            </div>
            <div className='fellow-arrow'></div>
        </div>
    )
}

export default BuynowConfirm;