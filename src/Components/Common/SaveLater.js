import React from 'react'
import { showSaveThank } from '../../action';
import { useDispatch } from 'react-redux';
import thank_smile from '../../assets/images/thank/thank-you-emoji.png';
import { handleSaveLatter } from '../../action/quote.action';

const SaveLater =()=> {
    const dispatch = useDispatch();
    const saveLatterModal = useSelector((state) => state.quoteReducer.saveLatterModal);

    return (

        <div className='overlay-container'>
            <div className='saveThank-wrap'>
                <div className='saveThank-container'>
                    <span className='thank-info'>Thank You for your patience!!<img src={thank_smile} alt='thanks_smile'/></span>
                    <span className='note'>Hey! We’ll take pictures of this building to attach to the quote/order. It’s nice to be on the same page. Please don’t refresh the page or go back; It won’t take long.</span>
                </div>
                <div className='popup-close'><span className='close'  onClick={(e)=> dispatch(handleSaveLatter("close"))}>&times;</span></div>
            </div>    
        </div>

    )
  
}

export default SaveLater;