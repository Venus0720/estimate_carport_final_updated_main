import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { handleTabsClick } from '../../action/index';

const TabComponentHeader = () => {
  const dispatch = useDispatch();
  const activemaintabkey = useSelector((state) => state.reducer.activemaintabkey);

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

  return (
    <div className='tabcontainer'>
      <div className='tab-cta'>
        <ul>
          <a
            className={activemaintabkey === 'builtSize' ? 'active' : ''}
            onClick={() => {
              dispatch (handleTabsClick('builtSize'))
              scrollToTop()
            }}
          >
            Built & Size
            <div className='tab-arrow'></div>
          </a>
          <a
            className={activemaintabkey === 'leantos' ? 'active' : ''}
            onClick={() => {
              dispatch (handleTabsClick('leantos'))
              scrollToTop()
            }}
          >
            Lean To's
            <div className='tab-arrow'></div>
          </a>
          <a
            className={activemaintabkey === 'doorWindows' ? 'active' : ''}
            onClick={() => {
              dispatch (handleTabsClick('doorWindows'))
              scrollToTop()
            }}
          >
            Doors & Windows
            <div className='tab-arrow'></div>
          </a>
          <a
            className={activemaintabkey === 'options' ? 'active' : ''}
             onClick={() => {
               dispatch (handleTabsClick('options'))
               scrollToTop()
            }}
          >
            Options
            <div className='tab-arrow'></div>
          </a>
        </ul>
      </div>
    </div>
  )
}

export default TabComponentHeader;
