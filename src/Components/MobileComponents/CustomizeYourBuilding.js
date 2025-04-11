import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import left_arrow from '../../assets/images/mobile-images/arrow-icon/left-arrow-icon.svg'
import TabComponentHeader from '../TabComponent/TabComponentHeader';
import TabComponent from '../TabComponent/TabComponent';
import NextPrevFooter from '../Common/NextPrevFooter';
import { ShowCustomizeBuilding } from '../../action';

const CustomizeYourBuilding = () => {
  
  const state = useSelector((state) => state.reducer)
  const dispatch = useDispatch();
  return (
    <>
        <div className='mb-customize-your-building-header' id='mobile-tab-id' >
            <div className='back-container' onClick={(e) =>dispatch(ShowCustomizeBuilding("show"))}>
                <img src={left_arrow} alt='left-arrow-icon'/>
                <h3>BACK</h3>
            </div>
            <h2>Customize Your Building</h2>
        </div>
        <TabComponentHeader />
        <TabComponent />
        <NextPrevFooter />
    </>
  )
}

export default CustomizeYourBuilding;