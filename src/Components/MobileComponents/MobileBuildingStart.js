import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import right_arrow_icon from '../../assets/images/mobile-images/arrow-icon/right-arrow-image.svg'
import customize from '../../assets/images/mobile-images/customizeYourBuildingImage/customize.svg';
import { ShowCustomizeBuilding, showImage, ShowMobilePopUp } from '../../action';
const MobileBuildingStart = () => {
    
    const state = useSelector((state) => state.reducer)
    const dispatch = useDispatch();


  return (
    <>
        <div className='mobile-building-start'>
            <div className='mobile-building-images div-sort-1'>
                <h3 onClick={(e)=> dispatch(showImage(0))}>
                    Building Pictures
                </h3>
                <div className='d-flex'>
                    <div className='mb-images'>
                        {
                            state.const_var.editAPIDataByResponse.data?.building_images.slice(0,3).map((data, index)=>{
                                return <img src={data.image} alt='building_image' onClick={(e)=> dispatch(showImage(index))}/>
                            })
                        }
                    </div>
                    <img className='ml-20' src={right_arrow_icon} alt='right-arrow-image' onClick={(e)=> dispatch(showImage(0))}/>
                </div>
            </div>
            <div className='hr-style'></div>
            <div className='div-sort-1' onClick={(e) => dispatch(ShowMobilePopUp("specification"))}>
                <h3>Specification</h3>
                <img src={right_arrow_icon} alt='right-arrow-icon' onClick={(e) => dispatch(ShowMobilePopUp("specification"))}/>
            </div>
            <div className='hr-style'></div>
            <div className='div-sort-1' onClick={(e) => dispatch(ShowMobilePopUp("buildingsummary"))}>
                <h3>Building Summary</h3>
                <img src={right_arrow_icon} alt='right-arrow-icon' onClick={(e) => dispatch(ShowMobilePopUp("buildingsummary"))}/>
            </div>
            <div className='hr-style'></div>
            <div className='customize-btn'>
                <button onClick={(e) =>dispatch(ShowCustomizeBuilding("show"))}>
                    <img src={customize} alt='customize_icon'/>
                    CUSTOMIZE YOUR BUILDING
                </button>
            </div>
        </div>
    </>
  )
}

export default MobileBuildingStart;