import React, {useEffect, useState} from 'react'
import { useSelector , useDispatch,} from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { showImage } from '../../action';
import { Carousel } from 'react-responsive-carousel';
import prevIcon from '../../assets/images/mobile-images/slideImage/prev.svg';
import nextIcon from '../../assets/images/mobile-images/slideImage/next.svg';

function SlideImage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const state = useSelector((state) => state.reducer)
    const dispatch = useDispatch();
    const totalSlides = state.const_var.editAPIDataByResponse.data?.building_images.length;

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };
    
    const handlePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    useEffect(() => {
        setCurrentSlide(state.const_var.isShowImage)
    }, []);  


    return (
        <div className='overlay-container'>
            <div className='slide-image-container'>
                <div className='main-image-container'>
                    {state.isMobile && 
                        <div className='building-image-description'>
                            <h2>Building Pictures</h2>
                            <span>Here are the original images of the building.</span>
                            <span>Customize building images will be captured when you place an order or submit a quote request.</span>
                        </div>
                    }
                    <Carousel selectedItem={currentSlide} showIndicators={false} showStatus={false} showArrows={false}  >
                        {   
                            state.const_var.editAPIDataByResponse.data?.building_images.map((data)=>{
                                return <div className='image-height'><div className='carousel-image-name'>{data.image_name}</div><img src={data.image} alt='building_image' /></div>
                            })
                        }
                    </Carousel>
                    <div className='next-prev-arrow'>
                        <div className='prev-arrow-icon'>
                            <img src={prevIcon} alt='prev-icon' onClick={handlePrev} />
                        </div>
                        <div>
                            <img src={nextIcon} alt='next-icon' onClick={handleNext}/>
                        </div>
                    </div>
                </div>
                <div className='popup-close'><span className='close' style={{color:'white', textShadow:'0 0 3px #000000, 0 0 5px #000000'}} onClick={(e)=> dispatch(showImage(-1))}>&times;</span></div>
            </div> 
        </div>
    )
}

export default SlideImage