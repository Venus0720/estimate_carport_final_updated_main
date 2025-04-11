import React from 'react'
import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { showImage } from '../../action';



const BuildingImage = () => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.reducer)
    const [currentSlide, setCurrentSlide] = useState(0);


    const previous = () => {
        sliderRef.slickPrev();
    };
    const next = () => {
        if(currentSlide + 5 < state.const_var.editAPIDataByResponse.data?.building_images.length) {
            sliderRef.slickNext();
        }
    };
    let sliderRef = useRef(null);
    const settings = {
        prevArrow: <></>,
        nextArrow: <></>,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        afterChange: (index) => {
            setCurrentSlide(index);
        },
    };


    return (
        <div className='picture-container'>
            <div className='image-kind'>
                <h2>Pictures</h2>
            </div>
            <div className='image-header-container'>
                <div className='image-description'>
                    <h3>Pictures will be updated according to your customization & will be available in your quote/order.</h3>
                </div>
                {/* <div className='slider-btn'>
                    {state.const_var.editAPIDataByResponse.data?.building_images.length > 3 &&
                    <>
                        <button className='slider-prev-btn mr-5' onClick={previous}></button>
                        <button className='slider-next-btn' onClick={next}></button>
                    </>
                    }
                </div> */}
            </div>
            <div className='slider-container'>
                <Slider
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings}
                >
                    {   
                        state.const_var.editAPIDataByResponse.data?.building_images.map((data,index)=>{
                            return <div className='slick-slide-item'><img src={data.image} alt='building_image' onClick={(e)=> dispatch(showImage(index))}/></div>
                        })
                    }
                </Slider>
                
            </div>
        </div>
    )
}

export default BuildingImage;