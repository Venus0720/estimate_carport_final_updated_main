import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import delivery from '../../assets/images/thank/delivery.svg';
import free from '../../assets/images/thank/free.svg';
import support from '../../assets/images/thank/support.svg';
import thank from '../../assets/images/thank/font-thank.svg';
import downloadOrderIcon from '../../assets/images/downloadIcon/download_white.svg';
import downloadInvoiceIcon from '../../assets/images/downloadIcon/downloadBlack.svg';
import mb_thank_img from '../../assets/images/mobile-images/thankImage/thankImage.svg';
import { closeThank } from '../../action';



function Thank({download}) {
    const dispatch = useDispatch();
    const props = useSelector(state=>state.orderReducer)
    return (
        <div className='thank-wrap'>
            <div className='thank-container'>
                <div className='thank-content'>
                    <div className='thank-note'>
                        <h2>
                        Thank You,<br/>Thrilled You Stopped By!
                        </h2>
                    </div>
                    <div className='detail-note-download'>
                        <div className='notification'>
                            <span className='notify-mb'>We have emailed the order to you with your building </span>
                            <span>specifications and pictures. Feel free to call us at <span className='phone-color'>(386) 754-1818</span> with any questions or to place an order.</span>
                        </div>
                        <div className='button-placement'>
                            <div className='thank-down-btn order-btn'><button onClick={e=>download()}><img src={downloadOrderIcon} alt='download_image'/>DOWNLOAD ORDER</button></div>
                            <div className='thank-down-btn invoice-btn'><button onClick={() => window.open(props.invoicePDFURL, '_blank')} ><img src={downloadInvoiceIcon} alt='download_image'/>DOWNLOAD INVOICE</button></div>
                        </div>
                    </div>
                </div>
                <img className='lg-thank-font ' src={thank} alt='thank-img' />
                {/* <img className='mb-thank-image' src={mb_thank_img} alt='mobile-thank-img' /> */}
            </div>
            <div className='thank-footer'>
                <div className='footer-content'>
                    <div className='thank-vertical'></div>
                    <div className='functionality'>
                        <span>Be rest assured of -</span>
                    </div>
                    <div className='thank-vertical'></div>
                    <div className='functionality'>
                        <img src={delivery} alt='delivery_img' />
                        <span>
                            Timely Delivery of
                        </span>
                        <span>
                            Your Building
                        </span>
                    </div>
                    <div className='thank-vertical'></div>
                    <div className='functionality'>
                        <img src={free} alt='free_installaton_image' />
                        <span>Free Installation</span>
                        <span>of Building</span>
                    </div>
                    <div className='thank-vertical'></div>
                    <div className='functionality'>
                        <img src={support} alt='support_image'/>
                        <span>Customer</span>
                        <span>Support on Call</span>
                    </div>
                    <div className='thank-vertical'></div>
                </div>
            </div>
            <div className='popup-close'><span className='close'  onClick={(e)=> { window.location.reload()}}>&times;</span></div>
        </div>
    )
}

export default Thank;