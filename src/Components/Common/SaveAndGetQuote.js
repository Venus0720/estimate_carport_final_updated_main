import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { moreDetail , talkexpert } from '../../action';
import buildingArrow from '../../assets/images/arrow/building-arrow.svg';
import { handleSaveLatter } from '../../action/quote.action';

function SaveandQuote() {
  const state = useSelector((state) => state.reducer);
  const dispatch = useDispatch();


  return (
    <div className={state.const_var.isShowSaveQuote===false ? 'sum-small-bar' : 'sum-small-bar save-quote'}>

        <div className='bar-left-container'>
            <div className='bar-left'>
                <div className='bar-left-side'>
                    <div className='more-details'>
                        <span onClick={(e)=> dispatch(moreDetail("show"))}>{'Building Summary'}&nbsp;<img src={buildingArrow} alt='img'/></span>
                    </div>
                </div>
            </div>
            
        </div>
        <div className={'bar-right-container' }>
            <div className={ state.const_var.isShowSaveQuote===false ? 'bar-right' : 'bar-right padding-0' } >
                <div className='right-side-quote' onClick={(e)=> {dispatch(handleSaveLatter("open"));dispatch(talkexpert("2"))}}>
                    <button>SAVE & GET QUOTE</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SaveandQuote;