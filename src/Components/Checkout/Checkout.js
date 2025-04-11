import React, { useEffect } from 'react'
import AmericanExpress from '../../assets/images/creditcard/american-express.png';
import Discover from '../../assets/images/creditcard/discover.png';
import Mastercard from '../../assets/images/creditcard/mastercard.png';
import Visa from '../../assets/images/creditcard/visa.png';
import Creditcard from '../../assets/images/creditcard/credit-card.svg';
import fellowArrow from '../../assets/images/arrow/select-arrow-follow.svg';
import editIcon from '../../assets/images/checkbox/editIcon.svg'
import ProductSummary from '../Common/ProductSummary';
import { AddEditAddressInfo } from '../../action/leadcustomer.action';
import { useDispatch, useSelector } from 'react-redux';
import * as validate from '../Modals/validations';
import { agreeTermsAndConditionCheckboxChange, handleCheckboxForBillingAddress, onSubmitCheckout, onorderTextFiledChangeValue, placeOrderValidation } from '../../action/order.action';
import CustomPopup from '../Common/CustomPopup';
import { twoDecimalPlace } from '../../redux/reducers/utils';
import { OpenCustomPopup, ShowHideCheckout } from '../../action';
import TearmsAndCondition from './TearmsAndCondition';
import BackIcon from '../../assets/images/goBack/go_back.png';
import Md_Back_icon from '../../assets/images/arrow/prev-arrow.svg'


const Checkout = () => {
    
    const dispatch = useDispatch();

    const number_format = (param) => {
      return parseFloat(param).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
    const state = useSelector((state)=> state.reducer)
    const props = useSelector((state)=> state.orderReducer)
    const iscustompopup = useSelector((state)=> state.reducer.iscustompopup);
    useEffect(() => {
        dispatch(AddEditAddressInfo('',"add"))
    },[])
    // const down_payment = state.const_var.post_data?.building?.down_payment_total !=undefined ? state.const_var.post_data?.building?.down_payment_total : 0;
    let leadAddress = state.const_var.LeadCustomerData.address != undefined && state.const_var.LeadCustomerData.address != '' && state.const_var.LeadCustomerData.address.length > 0 && state.const_var.LeadCustomerData.address.length > state.const_var.isAddress_Edit ? state.const_var.LeadCustomerData.address[state.const_var.isAddress_Edit] : ''
    let AddressData = (state.const_var.isAddress_Edit!='')?leadAddress:leadAddress;

    const formatExpiryDate = (input) => {
        const inputValue = input.value;
        const formattedValue = inputValue
          .replace(/\D/g, '')  // Remove non-numeric characters
          .replace(/(\d{2})(\d{0,2})/, '$1/$2');  // Format as MM/YY    
        input.value = formattedValue;
      };

      const handleBackspaceDelete = (event) => {
        const input = event.target;
        const inputValue = input.value;
    
        if ((event.key === 'Backspace' || event.key === 'Delete') && inputValue.endsWith('/')) {
          // Remove the last two characters (including the slash) when pressing Backspace or Delete
          input.value = inputValue.slice(0, -2);
        } else if (event.key === 'Delete') {
          // Remove the last character when pressing Delete
          input.value = inputValue.slice(0, -1);
        }
      }; 
      const down_payment = (state.const_var.BuildingPriceArrar['new_down_payment_total']!=undefined)?(state.const_var.BuildingPriceArrar['new_down_payment_total'] +state.const_var.BuildingPriceArrar['custom_down_payment_total'] + state.const_var.BuildingPriceArrar['grvy_value']).toFixed(2):0
      const grand_total = (state.const_var.BuildingPriceArrar!=undefined && state.const_var.BuildingPriceArrar['order_total']!=undefined)?((state.const_var.BuildingPriceArrar['order_total'] + state.const_var.BuildingPriceArrar["custom_subTotal"] + state.const_var.BuildingPriceArrar['additional_charges'])).toFixed(2) :0
      return (
        <>
        {props.agreeTermsAndConditionCheckbox == true && props.termsAndConditionDialogExtraClassToggle == true? <TearmsAndCondition /> :
        <div className='checkout-wrapper'>
          <div className='check-header'>
            <div className='check-container'>
              <div className='main-header'>
                <div className='deskTop-mobile-title'>
                  <h2>Secure Checkout -&nbsp;</h2><h2>Let's Make It Official!</h2>
                </div>
                <span className='check-out-note'>Please note, all of our buildings come with a<span className='color-font'> 30-day workmanship warranty</span> from the data of installation & a 10-year panel warranty if it should chip or crack. The framing on the 12-gauge or 14-gauge tubing comes with a<span className='color-font'> 20-year rust thru warranty</span>.</span>
              </div>
              <div className='go-back'>
                <img onClick={(e)=> dispatch(ShowHideCheckout())} className='go-back-img md-hidden' src={BackIcon} alt='goBack_image' />
                <div className='md-show' onClick={(e)=> dispatch(ShowHideCheckout())}>
                  <img className='mr-5' src={Md_Back_icon} alt='back-icon'/>
                  <span>BACK</span>
                </div>
              </div>
            </div>
            <div className='check-arrow'></div>
          </div>
          <div className='content-wrapper'>
            <div className='right-background'>
            </div>
            <div className='main-content'>
              <div className='left-side-content'>
                <div className='mb-product-image'>
                  <img src={state.const_var.editAPIDataByResponse.data?.building_images[0]?.image} alt='img' />
                </div>
                <div className='building-property-container'>
                  <div className='building-editor'>
                    <div>
                      <h2>Your Order Summary:</h2>
                      <div className='garage-name md-show'>
                        <h2>{state.const_var.new_building_name}</h2>
                      </div>
                    </div>
                    <button onClick={(e)=> dispatch(ShowHideCheckout())}><img src={editIcon} alt='edit_image' />Edit Order</button>
                  </div>
                  <div className='garage-name md-hidden'>
                    <h2>{state.const_var.new_building_name}</h2>
                  </div>
                  <div className='show-sum'>
                      <div className='show-price'>
                        <hr />
                        <div className='down-payment'>
                          <div className='payment-note'>
                            <span>Due Today <span className='down-payment-note'>{"(Down Payment)"}</span>:&nbsp;</span>
                          </div>
                          <div className='downpayment-price'>
                            <span>
                              ${number_format(down_payment)}
                            </span>
                          </div>
                        </div>
                        <hr />
                        <div className='total-amount'>
                          <div className='total-note'>
                            <span className='mb-total-price'>Building Total :</span>
                            <span className='mb-total-amount'>Building Total : &nbsp;</span>
                          </div>
                          <div className='total-price'>
                            <h2>
                              ${number_format(grand_total)}
                            </h2>
                          </div>
                        </div>
                        <div className='full-order-summary'>
                          <span>
                            View full order summary
                            <img src={fellowArrow} alt='fellow-arrow'/>
                          </span>
                        </div>
                        <hr />
                      </div>
                      <div className='show-images'>
                        <img src={state.const_var.editAPIDataByResponse.data?.building_images[0]?.image} alt='img' />
                      </div>
                  </div>
                  <div className='product-summary-category'>
                    <ProductSummary />
                  </div>
                </div>
              </div>
              <div className='right-side-content'>
              <div className='secure-system'>
                <span className='secure-font-bold'>Secure Payment Systems</span>
                <span className='secure-font-normal'>Step into a zone of safety with our secure payment system, ensuring your financial information is protected.</span>
              </div>
                <div className='contact-delivery-address'>
                  <h2>Contact Information</h2>
                </div>
                <form className='check-out-form'>
                  <div className='prow'>
                      <aside className='pcol-12'>
                        <h4>Where should we deliver your order?</h4>
                      </aside>
                      <aside className='pcol-6'>
                        <h4>First Name <span style={{ color: "red" }}>*</span></h4>
                        <div className='input-text form-element'>
                            <input 
                                type="text"
                                value={state.const_var.post_data?.first_name}
                                className={state.const_var.displayerrorMessage.first_name && 'input-error'}
                                onKeyUp={e => validate.alphabetCheck(e)}
                                onBlur={e => validate.alphabetCheck(e)}
                                onChange={(e) => {
                                    dispatch(onorderTextFiledChangeValue(e, 'first_name', 'First name', 'LeadCustomer' ,'firstNameValidation'));
                                }} 
                                maxLength={30}
                            />
                        </div>
                        <div style={{color:"red",fontSize:"12px",fontWeight:"600"}}>{state.const_var.displayerrorMessage.first_name}</div>
                      </aside>

                      <aside className='pcol-6'>
                        <h4>Last Name <span style={{ color: "red" }}>*</span></h4>
                        <div className='input-text form-element'>
                            <input 
                                type="text"
                                value={state.const_var.post_data?.last_name}
                                className={state.const_var.displayerrorMessage.last_name && 'input-error'}
                                onKeyUp={e => validate.alphabetCheck(e)}
                                onBlur={e => validate.alphabetCheck(e)}
                                onChange={(e) => {
                                    dispatch(onorderTextFiledChangeValue(e, 'last_name', 'Last name', 'LeadCustomer' ,'lastNameValidation'));
                                }} 
                                maxLength={30}
                            />
                        </div>
                        <div style={{color:"red",fontSize:"12px",fontWeight:"600"}}>{state.const_var.displayerrorMessage.last_name}</div>
                      </aside>
                      <aside className='pcol-6'>
                        <h4>Phone <span style={{ color: "red" }}>*</span></h4>
                        <div className='input-text form-element'>
                            <input 
                                type="text"
                                value={state.const_var.post_data?.phone_no}
                                className={state.const_var.displayerrorMessage.phone_no && 'input-error'}
                                onKeyUp={e => validate.numericCheck(e)}
                                onBlur={e => validate.numericCheck(e)}
                                onChange={(e) => { e.target.value.length <= 10 &&
                                    dispatch(onorderTextFiledChangeValue(e, 'phone_no', 'Phone number','LeadCustomer' ,'phoneValidation'));
                                }} 
                                maxLength={10}
                            />
                        </div>
                        <div style={{color:"red",fontSize:"12px",fontWeight:"600"}}>{state.const_var.displayerrorMessage.phone_no}</div>
                      </aside>
                      <aside className='pcol-6'>
                        <h4>Email address <span style={{ color: "red" }}>*</span></h4>
                        <div className='input-text form-element'>
                            <input 
                                type="text"
                                value={state.const_var.post_data?.email}
                                className={state.const_var.displayerrorMessage.email && 'input-error'}
                                onChange={(e) => {
                                    dispatch(onorderTextFiledChangeValue(e, 'email', 'Email','LeadCustomer','emailValidation'));
                                }} 
                            />
                        </div>
                        <div style={{color:"red",fontSize:"12px",fontWeight:"600"}}>{state.const_var.displayerrorMessage.email}</div>
                      </aside>
                      <aside className='pcol-6'>
                        <h4>Shipping Address<span style={{ color: "red" }}>*</span></h4>
                        <div className='input-text form-element'>
                            <input 
                                type="text"
                                value={state.const_var.post_data?.shipping_address_line_1}
                                className={state.const_var.displayerrorMessage.shipping_address_line_1 && 'input-error'}
                                onChange={(e) => {
                                    dispatch(onorderTextFiledChangeValue(e, "shipping_address_line_1", 'Address' , 'LeadCustomer','streetValidation'));
                                }} 
                                maxLength={30}
                            />
                        </div>
                        <div style={{color:"red",fontSize:"12px",fontWeight:"600"}}>{state.const_var.displayerrorMessage.shipping_address_line_1}</div>
                      </aside>
                      <aside className='pcol-6'>
                        <h4>Apartment, suite, unit, etc. (optional)</h4>
                        <div className='input-text form-element'>
                            <input 
                                type="text"
                                value={state.const_var.post_data?.shipping_address_line_2}
                                onChange={(e) => {
                                    dispatch(onorderTextFiledChangeValue(e, "shipping_address_line_2", 'Address', 'LeadCustomer' ,'apartmentValidation'));
                                }} 
                                maxLength={30}
                            />
                        </div>
                        <div style={{color:"red",fontSize:"12px",fontWeight:"600"}}>{state.const_var.displayerrorMessage.shipping_address_line_2}</div>
                      </aside>
                      <aside className='pcol-6'>
                        <h4>Town / City <span style={{ color: "red" }}>*</span></h4>
                        <div className='input-text form-element'>
                            <input 
                                type="text"
                                value={state.const_var.post_data?.shipping_city}
                                className={state.const_var.displayerrorMessage.shipping_city && 'input-error'}
                                onKeyUp={e => validate.alphabetCheck(e)}
                                onBlur={e => validate.alphabetCheck(e)}
                                onChange={(e) => {
                                    // dispatch(onAddressFiledChangeValue(e, 'city', 'City','LeadCustomer','NoValidate1'));
                                    dispatch(onorderTextFiledChangeValue(e, 'shipping_city', 'City','LeadCustomer' ,'cityValidation'));
                                    // validate.alphaSpaceValue(e,'shipping_city');
                                }}
                                // onBlur={e => validate.alphaSpaceValue(e,'city')}
                                maxLength={30}
                            />
                        </div>
                        <div style={{color:"red",fontSize:"12px",fontWeight:"600"}}>{state.const_var.displayerrorMessage.shipping_city}</div>
                      </aside>
                      <aside className='pcol-6'>
                        <h4>State <span style={{ color: "red" }}>*</span></h4>
                        <div className={state.const_var.displayerrorMessage.shipping_state ? 'input-error-select' : 'input-text form-element'} >
                                <label className='select'>
                                <select  value={state.const_var.post_data?.shipping_state} onChange={e => dispatch(onorderTextFiledChangeValue(e, 'shipping_state', 'State','LeadCustomer' ,'stateValidation'))}>
                                    <option value="" id=""></option>
                                    {
                                        state.const_var.bjDData.length > 0 && state.const_var.bjDData.map((item) => {
                                            return(
                                                <option value={item.state_name} id={item.id}>{item.state_name}</option>
                                            )
                                        })
                                    }
                                </select>
                                </label>
                        </div>
                        <div style={{color:"red",fontSize:"12px",fontWeight:"600"}}>{state.const_var.displayerrorMessage.shipping_state}</div>
                      </aside>
                      <aside className='pcol-6'>
                        <h4>ZIP <span style={{ color: "red" }}>*</span></h4>
                        <div className='input-text form-element'>
                            <input 
                                type="text"
                                value={state.const_var.post_data?.shipping_zipcode}
                                className={state.const_var.displayerrorMessage.shipping_zipcode && 'input-error'}
                                onKeyUp={e => validate.numericCheck(e)}
                                onBlur={e => validate.numericCheck(e)}
                                onChange={(e) => { e.target.value.length <= 5 &&
                                    dispatch(onorderTextFiledChangeValue(e, 'shipping_zipcode', 'Zipcode' ,'LeadCustomer', 'zipcodeValidation'));
                                }}
                                maxLength={5}
                            />
                        </div>
                        <div style={{color:"red",fontSize:"12px",fontWeight:"600"}}>{state.const_var.displayerrorMessage.shipping_zipcode}</div>
                      </aside>
                      <aside className='pcol-6'>
                        <h4>Alternative phone (optional)</h4>
                        <div className='input-text form-element'>
                            <input
                                type="text"
                                value={state.const_var.post_data?.mobile_no}
                                onKeyUp={e => validate.numericCheck(e)}
                                onBlur={e => validate.numericCheck(e)}
                                onChange={(e) => { e.target.value.length <= 10 &&
                                    dispatch(onorderTextFiledChangeValue(e, 'mobile_no', 'Phone number','LeadCustomer','phoneValidation'));
                                }} 
                                maxLength={10}
                            />
                        </div>
                        <div style={{color:"red",fontSize:"12px",fontWeight:"600"}}>{state.const_var.displayerrorMessage.mobile_no}</div>
                      </aside>
                      <aside className='pcol-12'>
                        <p className='m-0 phone-note'>You will receive a call at the phone number you provide to confirm the delivery and installation date before the installation crew comes to the delivery site.</p>
                      </aside>
                      <aside className='pcol-12'>
                        <h4 className='order-notes'>Order notes (optional)</h4>
                        <div className='input-text form-element'>
                            <textarea id="w3review" name="w3review" rows="6" cols="50" onChange={(e) => {
                                    dispatch(onorderTextFiledChangeValue(e, 'order_notes', 'Order notes'));                                                     
                                }}
                                value={state.const_var.post_data?.order_notes}
                                >
                            </textarea>
                        </div>
                      </aside>
                      <aside className='pcol-12'>
                        <div className='input-box'>
                          <input id='billignaddress' type='checkbox' value='billingshipping' checked={state.billingAddressCheckbox} onChange={(e) => dispatch(handleCheckboxForBillingAddress(e))}/>
                          <label for='billignaddress' className='building-address'>Billing Address Same As Shipping Address</label>
                        </div>                                           
                      </aside>
                      <aside className='pcol-12 mb-10'>
                        <div className='section-seprator  mb-20'></div>
                        <h2 className='heading1'>Payment:</h2>
                        <h4 className='mb-0'>Pay with card</h4>
                        <div className='cc-images'>
                            <img src={Visa}  alt='sensei 3d'/>
                            <img src={Discover}  alt='sensei 3d'/>
                            <img src={AmericanExpress}  alt='sensei 3d'/>
                            <img src={Mastercard}  alt='sensei 3d'/>
                        </div>
                      </aside>

                      <aside className='pcol-12 mb-0'>
                        <h4 className='credit-card'>Credit or Debit Card <span style={{ color: "red" }}>*</span></h4>
                        <div className={state.const_var.displayerrorMessage.cardnumber || state.const_var.displayerrorMessage.expirydate || state.const_var.displayerrorMessage.cvv ? 'cc-input input-error' : 'cc-input'}> 
                            <img src={Creditcard} alt='sensei 3d' />                                           
                            <input 
                                type="text" 
                                maxLength={16} 
                                className='ccnumber' 
                                placeholder='Card Number'
                                value={state.const_var.post_data?.cardnumber}
                                onKeyUp={(event) =>(event.target.value = event.target.value.replace(/[^0-9.]/g,""))}  
                                onBlur={(event) =>(event.target.value = event.target.value.replace(/[^0-9.]/g,""))}  
                                onChange={(e) => dispatch(onorderTextFiledChangeValue(e, 'cardnumber', 'Card Number','LeadCustomer' ,'cardNumberValidation'))}/>                                    
                            <input 
                                type="text" 
                                id="expiryInput" 
                                className='ccexpiry' 
                                pattern="\d{2}/\d{4}" 
                                placeholder="MM/YYYY" 
                                maxlength="7"
                                value={state.const_var.post_data?.expirydate}
                                onInput={(e) => formatExpiryDate(e.target)} onChange={(e) => dispatch(onorderTextFiledChangeValue(e,"expirydate", "Expiry Date",'LeadCustomer',"expiryValidation"))}
                                onKeyDown={(e) => handleBackspaceDelete(e)}></input>
                            <input 
                                type="text"
                                className='ccvv' 
                                placeholder='CVV' 
                                maxLength={4}
                                value={state.const_var.post_data?.cvv}
                                onKeyUp= {(event) => (event.target.value = event.target.value.replace(/[^0-9.]/g,""))}
                                onBlur= {(event) => (event.target.value = event.target.value.replace(/[^0-9.]/g,""))} 
                                onChange={(e) => dispatch(onorderTextFiledChangeValue(e,"cvv", "CVV",'LeadCustomer',"cvvValidation"))}/>
                        </div>
                      </aside>
                      <div style={{ display: "flex" }}>
                          {
                              state.const_var.displayerrorMessage.cardnumber
                                  ?
                                  <div style={{ color: "red", fontSize: "12px", fontWeight: "600", width: "50%" }}>
                                      {state.const_var.displayerrorMessage.cardnumber}
                                  </div>
                                  :
                                  <div style={{ color: "red", fontSize: "12px", fontWeight: "600", width: "50%" }}>
                                  </div>
                          }
                          {
                              state.const_var.displayerrorMessage.expirydate
                                  ?
                                  <div style={{ color: "red", fontSize: "12px", fontWeight: "600", width: "32%", textAlign: "right" }}>
                                      {state.const_var.displayerrorMessage.expirydate}
                                  </div>
                                  :
                                  <div style={{ color: "red", fontSize: "12px", fontWeight: "600", width: "32%", textAlign: "right" }}>
                                  </div>
                          }
                          {
                              state.const_var.displayerrorMessage.cvv
                                  ?
                                  <div style={{ color: "red", fontSize: "12px", fontWeight: "600", width: "18%", textAlign: "right" }}>
                                      {state.const_var.displayerrorMessage.cvv}
                                  </div>
                                  :
                                  <div style={{ color: "red", fontSize: "12px", fontWeight: "600", width: "18%", textAlign: "right" }}>
                                  </div>
                          }
                      </div>
                      <aside className='pcol-12 m-p'>
                        <div className='term-container'>
                          <div>
                            <input 
                                id='agreeTermsAndConditionCheckbox' 
                                type='checkbox' 
                                value={(props.agreeTermsAndConditionCheckbox==false)?'':props.agreeTermsAndConditionCheckbox} 
                                checked={props.agreeTermsAndConditionCheckbox} 
                                onChange={(e) => dispatch(agreeTermsAndConditionCheckboxChange(e))}/>
                          </div>
                          <div>
                            <label for='agreeTermsAndConditionCheckbox'>I agree to the terms and conditions mentioned in the Building Purchase Binding Agreement.</label>
                          </div>
                        </div> 
                        <div style={{color:"red",fontSize:"12px",fontWeight:"600"}}>{state.const_var.displayerrorMessage.agreeTermsAndConditionCheckbox }</div>                                        
                      </aside>
                  </div>
                </form>
                <div className={state.const_var.is_loader ? 'place-order-container disabled' : 'place-order-container'}>
                  <p className='m-0 place-order-note'>By clicking Place Order, you agree to have your credit card charged <span>$ {number_format(state.const_var.post_data?.building?.dealer_deposit)}</span> today. The remaining balance of <span>$ {number_format(state.const_var.post_data?.building?.due_upon_installation)}</span> is due on your delivery day.</p>
                  <button className='buy-now-cta place-button' onClick={(e) => {
                      e.preventDefault()
                      dispatch(onSubmitCheckout(e))
                  }}>
                    {
                      state.const_var.is_loader ? <span className='dot-pulse'></span> : <span>PLACE YOUR ORDER</span>
                    }
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>}
        </>
      )
}
export default Checkout
