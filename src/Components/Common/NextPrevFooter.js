import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleTabsClick } from '../../action/index';
import Next_icon from '../../assets/images/arrow/update_both_arrow.svg'

const NextPrevFooter = () => {
  const dispatch = useDispatch()
  const activemaintabkey = useSelector(
    (state) => state.reducer.activemaintabkey,
  )
  const state = useSelector((state) => state.reducer)
  let nextclickvalue, prevclickvalue

  const scrollToTop = () => {
    let desktopTabPosition = document.getElementById("inner-div-scroll");
    let mobileTabPosition = document.getElementById("mobile-tab-id");
    if (mobileTabPosition) {
      setTimeout(() => {
        mobileTabPosition.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else if (desktopTabPosition) {
      setTimeout(() => {
        desktopTabPosition.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, 100);
    }
  };

  switch (activemaintabkey) {
    case 'builtSize':
      nextclickvalue = 'leantos'
      break
    case 'leantos':
      nextclickvalue = 'doorWindows'
      prevclickvalue = 'builtSize'
      break
    case 'doorWindows':
      nextclickvalue = 'options'
      prevclickvalue = 'leantos'
      break

    case 'options':
      prevclickvalue = 'doorWindows'
      break
    default:
      nextclickvalue = 'leantos'
      break
  }

  return (
    <div className='next-prev-footer'>
      <a
        onClick={() => {
          dispatch(handleTabsClick(prevclickvalue)) 
          scrollToTop()
          }}

        className={`previous-cta custom-btn-1 blue-clr-btn ${
          activemaintabkey != 'builtSize' ? '' : 'invisibleelemtn'
        }`}
      >
        <img className='prev-icon' src={Next_icon} alt='Next_icon'/>
        <span className='text prev-next ml-5'>PREV</span>
      </a>

      <a
        onClick={() => {
          dispatch(handleTabsClick(nextclickvalue))
          scrollToTop()
        }}
        className={`next-cta custom-btn-1 blue-clr-btn ${
          activemaintabkey != 'options' ? '' : 'invisibleelemtn'
        }`}
      >
        <span className='text prev-next mr-5'>NEXT</span>
        <img src={Next_icon} alt='Next_icon'/>
      </a>
    </div>
  )
}

export default NextPrevFooter
