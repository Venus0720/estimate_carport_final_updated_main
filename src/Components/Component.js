import React ,{useEffect , useRef, useState} from 'react';
import TabComponent from './TabComponent/TabComponent';
import TabComponentHeader from './TabComponent/TabComponentHeader';
import BuildingCanvas from './BuildingCanvas/BuildingCanvas';
import SumBar from './Common/SumBar';
import NextPrevFooter from './Common/NextPrevFooter';
import ProductSummary from './Common/ProductSummary';
import SlideImage from './Common/SlideImage';
import GatherCustomerInformation from './Common/GatherCustomerInformation';
import Checkout from './Checkout/Checkout';
import { useSelector, useDispatch } from 'react-redux';
import SaveandQuote from './Common/SaveAndGetQuote';
import DownloadProgressBar from './Common/DownloadProgressBar';
import { setIsMobile } from '../action';
import BuildingImage from './Common/BuildingImage';
import BuildingInformation from './Common/BuildingInformation';
import { const_var } from '../redux/reducers/reducer';
import MobileHeader from './MobileComponents/MobileHeader';
import BuildingAction from './Common/BuildingAction';
import { moreDetail,getBuildingDataforProduct, showDownloadProgressBar, ShowMobilePopUp} from '../action';
import Thank from './Common/ThankYou';
import SaveThank from './Common/SaveThank';
import House from '../assets/images/header/house.svg';
import Dolor from '../assets/images/header/dolor.svg';
import Setting from '../assets/images/header/setting.svg';
import DoorWindowIcons from './TabComponent/DoorWindows/DoorWindowIcons';
import DoorWindowEditBox from './TabComponent/DoorWindows/DoorWindowEditBox';
import CustomizeYourBuilding from './MobileComponents/CustomizeYourBuilding';
import MobileBuildingStart from './MobileComponents/MobileBuildingStart';
import Share from './Common/Share';
import CustomAlertBox from './Common/CustomAlertBox';
import location_icon from '../assets/images/mobile-images/position/position.svg'
import building_arrow from '../assets/images/arrow/viewBuildingArrow.svg'
import Savelater from './Modals/SaveLater';

const Component = ()=> {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.reducer)
    const detail = state.const_var.isShowMoreDetail;
    let isShowConfigBox = useSelector(state => state.reducer.const_var.isShowConfigBox);
    const isShowThankYou = useSelector(state => state.orderReducer.isShowThankYou);
    const activemaintabkey = useSelector((state) => state.reducer.activemaintabkey);
    const [isBlink, setBlink] = useState(true);
    const { checkwallposition } = state;
    
    useEffect(()=>{
        const activescroll = document.querySelector('.config-option-sec-inner-scroll');
        if (activescroll?.scrollHeight > activescroll?.clientHeight) {
            activescroll?.classList.add('activescroll');
        } else {
            activescroll?.classList.remove('activescroll');
        }
        
    },[activemaintabkey])

    const stickyElementRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);
    const [headerOffset, setHeaderOffset] = useState(0);
    const handleScroll = () => {
        if (window.pageYOffset >= headerOffset) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    useEffect(() => {

        setHeaderOffset(stickyElementRef.current?.offsetTop)
    }, []);             

    const downloadPdf = () => {
        if(!state.const_var.isShowDownloadProgressBar) {
            dispatch(showDownloadProgressBar("show"))
        }
    }

    const handleResize = () => {
        if(window.innerWidth <= 992) {
            dispatch(setIsMobile(true))
        } else {
            dispatch(setIsMobile(false))
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    useEffect(() => {
        handleResize()
    }, []);

    return (
        <>  
            <div className="modal-loading-wrapper">
                <div className="modal-loading-wrapper-inner">
                    <div className="loader-for-modal"></div>
                </div>
            </div>
            <div></div>
            { !state.isMobile ?
                (
                    <div className='desktop-container'>   
                        <div className={(isShowConfigBox ? '':'d-none')}>
                            <div className={((const_var.crmSetting.is_header != undefined && const_var.crmSetting.is_header == true) ? 'container':'d-none')}>
                                <div className='component-wrapper'>
                                    <div className='component-wrapper-inner'>
                                        <div className='head-wrap'>
                                            <div className='SKU'>
                                                <span>SKU - PB#94</span>
                                            </div>
                                            <div className='building-name'>
                                                <h2>24x31x8 Vertical roof side entry carport</h2>
                                            </div>
                                            <div className='Loream-Ipsum'>
                                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</span>
                                                <span>printer took a galley of type and scrambled it to make a type specimen book.</span>
                                            </div>
                                            <div className='functionality-container'>
                                                <div className='funtionality-first'>
                                                    <img src={House} alt='house icon' />
                                                    <span>Rent-To-Own</span>
                                                    <div className='vertical'></div>
                                                    <img src={Dolor} alt='dolor icon' />
                                                    <sapn className='financing'>Financing</sapn>
                                                </div>
                                                <div className='functionality-second'>   
                                                    <div>
                                                        <img src={Setting} alt='setting icon'/>
                                                    </div>
                                                    <div className='delivery-star'>
                                                        <div>
                                                            <h2>* Delivery & Installation:</h2> 
                                                        </div>
                                                        <div className='note'>
                                                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='garage-picture-container'>
                                <div className='container d-flex'>
                                    <BuildingInformation />
                                    <BuildingImage />
                                </div>
                            </div>
                            <div className="head" >
                                <div className='container'>
                                    <div className='component-wrapper'>
                                        <div className='component-wrapper-inner'>
                                            <div className='head-wrap'>
                                                <div className='head-footer'>
                                                    <div className='left-footer'>
                                                        <div className='customize-note'>
                                                            <h2>Customize Your Building</h2>
                                                            <span>Pick your installation state for accurate pricing</span>
                                                        </div>
                                                        <div className='bulkhead'></div>
                                                        <div className='state-container'>
                                                            <img src={location_icon} alt='location_icon' />
                                                            <select className={`select-state ${isBlink? 'animation-pulse' : ''}`} onClick={()=>setBlink(false)} value={state.params.p_s_n} onChange={(e) => dispatch(getBuildingDataforProduct(e.target.value,"state"))}>
                                                                {
                                                                    const_var.bjDData.map((item) => {
                                                                        return <option value={item.id}>{item.state_name}</option>
                                                                    })
                                                                }
                                                            </select>
                                                            <div className='current-state'>
                                                                <span>Current State</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='right-footer'>
                                                        <TabComponentHeader />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='content-container'>
                                <div className='right-background'>
                                </div>
                                <div className='container'>
                                    <div className='component-wrapper'>
                                        <div className='component-wrapper-inner'>
                                            <div className='confige-wrapper'>
                                                <div className='config-building-sec'>
                                                    <div className='add-control'>
                                                        <BuildingAction />
                                                        <div className='more-details'>
                                                            <span className='d-flex' onClick={(e)=> dispatch(moreDetail("show"))}>{'View Building Summary'}<img className='ml-5' src={building_arrow} alt='right_arrow'/></span>
                                                        </div>
                                                    </div>
                                                    <div className='building-size'>
                                                        <BuildingCanvas
                                                            handleClickAction={e =>   dispatch({
                                                                type: "UPDATE_DOOR_WINDOW_EDIT_ICONS",
                                                                event: e
                                                            })}
                                                        />
                                                    <div className="doorwindowicons-1">
                                                        <div id="doorwindowicons">
                                                            <DoorWindowIcons />   
                                                        </div> 
                                                    </div>  
                                                        <DoorWindowEditBox />
                                                    </div>
                                                    
                                                </div>
                                                <div id="inner-div-scroll" className={window.innerWidth > 992 ? 'config-option-sec right-sec-scoll pb-0' : 'config-option-sec' }>
                                                    <div className='config-option-sec-inner'>
                                                        <div className='config-option-sec-inner-scroll'>
                                                            <TabComponent/>
                                                        </div>
                                                    </div>
                                                    <div className={window.innerWidth > 992 ? 'sticky-footer'  : "" } ><NextPrevFooter/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                { !state.const_var.isShowSaveQuote ? <div className='sum-container'><SumBar /></div> : <div className='sum-container'><SaveandQuote /></div> }
                            </div>
                        </div>
                        
                        { detail && 
                            <div className='component-summary' onClick={(e)=> dispatch(moreDetail("hide"))}>
                                <div className={`product-summary-wrapper ${detail ? 'show' : 'hide'}`} onClick={e=>e.stopPropagation()}>
                                    <span className='close'  onClick={(e)=> dispatch(moreDetail("show"))}>&times;</span>
                                    <h2 className='heading1 '>Building Summary:</h2>
                                    <ProductSummary />
                                </div>
                            </div>
                        }
                    </div>  
                ): (
                    <div className='mobile-container'>
                        <div  className={isShowConfigBox ? '':'d-none'}>
                            <MobileHeader />
                            <div className='container'>
                                    <div className='component-wrapper'>
                                        <div className='component-wrapper-inner'>
                                            <div className='confige-wrapper'>
                                                <div className='config-building-sec'>
                                                    <div className='building-size' style={{height: (window.innerHeight - 352) + 'px'}}>
                                                        <BuildingCanvas
                                                            handleClickAction={e =>   dispatch({
                                                                type: "UPDATE_DOOR_WINDOW_EDIT_ICONS",
                                                                event: e
                                                            })}
                                                        />
                                                        <div className="doorwindowicons-1">
                                                            <div id="doorwindowicons">
                                                                <DoorWindowIcons />   
                                                            </div> 
                                                        </div>  
                                                        
                                                        <DoorWindowEditBox />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {state.isCustomizeBuilding ? <CustomizeYourBuilding /> : <MobileBuildingStart />}
                            { !state.const_var.isShowSaveQuote ? <div className='sum-container'><SumBar /></div> : <div className='sum-container'><SaveandQuote /></div> }
                        </div>
                    </div>
                )
            }
            <CustomAlertBox/>
            {state.const_var.isShowSaveThankBox && <SaveThank/>}
            {state.const_var.isShowShare && <Share />}
            {state.const_var.isShowThankBox && <Thank download={downloadPdf}/> }
             <GatherCustomerInformation download={downloadPdf} />      
             <Savelater />
            <div className={`${isShowThankYou ? 'd-none': (isShowConfigBox ? 'd-none':'container')}`}>
                <Checkout/>
            </div>
            {state.const_var.isShowDownloadProgressBar && <DownloadProgressBar />}
            {(state.const_var.isShowImage !== undefined && state.const_var.isShowImage !== -1) && <SlideImage/>}
            { state.isShowSpecification &&
                <div className='specification-wrap'>
                    <BuildingInformation />
                    <div className='popup-close'><span className='close'  onClick={(e)=> dispatch(ShowMobilePopUp("specification"))}>&times;</span></div>
                </div>
            }
            { state.isShowMobileBuildingSummary &&
                <div className='specification-wrap'>
                    <div className='mb-building-summary-header'>
                        <h2>Building Summary</h2>
                    </div>
                    <ProductSummary />
                    <div className='popup-close'><span className='close'  onClick={(e)=> dispatch(ShowMobilePopUp("buildingsummary"))}>&times;</span></div>
                </div>
            }
        </>
    )
}
export default Component;