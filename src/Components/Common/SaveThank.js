import React from 'react'
import { showSaveThank } from '../../action';
import { useDispatch } from 'react-redux';

function SaveThank() {
    const dispatch = useDispatch();
    return (
        <div className='overlay-container'>
            <div className='saveThank-wrap'>
                <div className='saveThank-container'>
                    <span className='thank-info'>Thank You!!</span>
                    <span className='note'>One of our building specialists will be connecting with you soon</span>
                </div>
                <div className='popup-close'><span className='close'  onClick={(e)=> dispatch(showSaveThank("show"))}>&times;</span></div>
            </div>    
        </div>
    )
}

export default SaveThank;