import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';


const Savelater = () => {
    // const dispatch = useDispatch()
    const state = useSelector((state)=>state.reducer);
    return(
        <div className={(state.const_var.saveLatterModal || state.const_var.isShowSaveLaterForPdf) ? ' overlay-container cu-modal-overlay ' :'d-none' } id='Savelater'>
            <div className='cu-modal-container thank-you-modal'>
            <div className="loader-for-modal"></div>
            <div className='heading-txt'>PLEASE WAIT</div>
            <div className='desc-txt'>Hey! We’ll take pictures of this building to attach to the quote/order. It’s nice to be on the same page. Please don’t refresh the page or go back; It won’t take long.</div>
            <div className='desc-txt hg-desc-txt mb-0'>Thank YOU FOR YOUR PATIENCE!!</div>
            </div>
        </div>
    )
}
export default Savelater;