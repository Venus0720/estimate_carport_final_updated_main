import React, { useRef  } from 'react';
import "../../assets/scss/partials/slick.min.css";
import Slider from "react-slick";
import building from '../../assets/images/building.png';

import { useSelector } from 'react-redux';

const ProductSlider = () => {
  let sliderRef = useRef(null);
  
  // Custom next button component
  const NextArrow = (props) => {
    const { onClick } = props;
    return <a className='slicknextprev slick-next' onClick={onClick}><span className="icon-arrow"></span></a>;
  };
  
  // Custom prev button component
  const PrevArrow = (props) => {
    const { onClick } = props;
    return <a className='slicknextprev slick-prev' onClick={onClick}><span className="icon-arrow"></span></a>;
  };
  const state = useSelector((state)=>state.reducer)
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };
  return (
    
    <div className='product-slider-wrapper'>
    <Slider ref={slider => {
          sliderRef = slider;
          }}
          {...settings}>
      {state.const_var.editAPIDataByResponse.data!=undefined && state.const_var.editAPIDataByResponse.data.building_images.length>0 &&  
       state.const_var.editAPIDataByResponse.data.building_images.map((data)=>{
        let upercase = data.image_name;
        let uper = upercase.toUpperCase();
        return  <div>
                  <h3 className='image-name'>{uper} VIEW</h3>
                  <img className='pimg-fluid' alt='sensei 3d' src={data.image} />
                </div>
      })}
    </Slider>
      <div className='image-click-container'>
        <div className='image-container'>
          {state.const_var.editAPIDataByResponse.data!=undefined && state.const_var.editAPIDataByResponse.data.building_images.length>0 &&  
          state.const_var.editAPIDataByResponse.data.building_images.map((data,index)=>{
            return <div className='image-field' onClick={e => sliderRef.slickGoTo(index) }><img className='pimg-fluid' alt='sensei 3d' src={data.image} /></div>
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductSlider;
