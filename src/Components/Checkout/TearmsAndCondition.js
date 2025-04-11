import React, { useState } from 'react'
import Insimg1 from '../../assets/images/buildingimages/img-1.png';
import Insimg2 from '../../assets/images/buildingimages/img-2.png';
import Insimg3 from '../../assets/images/buildingimages/img-1.png';
import Insimg4 from '../../assets/images/buildingimages/img-4.png';
import Insimg5 from '../../assets/images/buildingimages/img-5.png';
import Insimg6 from '../../assets/images/buildingimages/img-6.png';
import { useDispatch, useSelector } from 'react-redux';
import { genrateSignature, privacyPolicyCheckboxChange, termsAndConditionProceedBtn } from '../../action/order.action';
import ReactSignatureCanvas from 'react-signature-canvas';

const TearmsAndCondition = () => {
    const dispatch = useDispatch();

    const state = useSelector((state)=> state.orderReducer)
    const props = useSelector((state)=> state.reducer)

  return (
    <div className="for-terms-andc-detail">
        <div className="f-18  barlow-semibold d-none">Scroll to the bottom to agree and proceed</div>
        <h5 className="modal-title">Terms & Conditions</h5>
        <p>We greatly appreciates your interest, however, it is imperative that your ground is professionally leveled before the unit can be installed. We and our subcontracted installation crews that we work with will not be able to install the structure if any of the following are indicated at the construction site:
        </p>
        <div className="img-div">
            <div className='img-container'>
                <aside className="text-center">
                    <div>
                        <img src={process.env.REACT_APP_BASE_URL+Insimg1} className="img-fluid" />
                    </div>
                    <label>No Installs on Floating Docks</label>
                </aside>
                <aside className="text-center">
                    <div>
                        <img src={process.env.REACT_APP_BASE_URL+Insimg2} className="img-fluid"/>
                    </div>
                    <label>No Installs on Unlevel Land</label>
                </aside>
                <aside className="text-center">
                    <div>
                        <img src={process.env.REACT_APP_BASE_URL+Insimg3} className="img-fluid" />
                    </div>
                    <label>Wall Installation - 3 Feet Maximum</label>
                </aside>
                <aside className="text-center">
                    <div>
                        <img src={process.env.REACT_APP_BASE_URL+Insimg4} className="img-fluid" />
                    </div>
                    <label>No Installs on Floating Docks</label>
                </aside>
                <aside className="text-center">
                    <div>
                        <img src={process.env.REACT_APP_BASE_URL+Insimg5} className="img-fluid"/>
                    </div>
                    <label>No Installs on Unlevel Land</label>
                </aside>
                <aside className="text-center">
                    <div>
                        <img src={process.env.REACT_APP_BASE_URL+Insimg6} className="img-fluid" />
                    </div>
                    <label>Wall Installation - 3 Feet Maximum</label>
                </aside>
            </div>
            {/* <div className='img-container'>
               
            </div> */}
        </div>
        <p>This is a normal Truck and Trailer (55-60 Ft in Length) that a crew will be using to bring your building to the site. Do you have room for them to reach the job site, unload and turn around? Is there a steep hill or sharp curve they will have to attempt that could hinder their progress?
        </p>
        <p>By signing below the buyer ensures us that the ground is professionally level while also acknowledging that if the installation crew is unable to install the structure due to an unlevel foundation there will be a return trip fee along with a restocking fee that must be paid before returning to the site
        </p>
        <p>Thank you for your understanding and once again we appreciate your business
        </p>
        <div className="following-terms p-0">
            <h6>PURCHASE BINDING AGREEMENT</h6>
            <p>This purchase agreement is made by and between We, and (the "Buyer") agrees, after being fully educated about  various products including fourteen (14) gauge, twelve (12) gauge, noncertified and certified units, to buy, and agrees to sell, pursuant to the terms listed in this Agreement described above. Buyer has read and understands the terms of this agreement, including the terms and conditions contained at the bottom of this document, which terms are expressly incorporated here in by reference, as well as any and all relevant warranty information and agrees to be bound by same.
            </p>
            <p><span className="icon-arrow"></span>Buyer is aware that installation site must be level</p>
            <p><span className="icon-arrow"></span>Buyer is aware that installation site must have no obstructions.</p>
            <p><span className="icon-arrow"></span>Buyer is responsible for all permits, and any other approvals before the commencement of construction.</p>
            <p><span className="icon-arrow"></span>Buyer is aware that if a building permit is required, buyer must purchase a certified unit.</p>
            <h6>Our Company
            </h6>
            <p>We are an online Exclusive Dealer/Broker for multiple manufacturers Nationwide. We have the right to correct any errors made by the Building Specialist concerning pricing or taxes. The pricing is factory direct retail pricing with zero “markup” by We, Inc. If any discounts are given by the manufacturer it is passed to the customer. Additional cost for Engineered Blueprints and labor is case by case dictated by the state, situation and manufacturer requirements; We strives to inform the customer of these different requirements and cost prior to the sale to based on the most current information available. Our goal is to provide a 100% satisfaction experience, pricing and quality material.
            </p>
            <h6>Fabrication/Scheduling
            </h6>
            <p>We are not responsible & or has no involvement in the fabrication or scheduling of said metal building but acts as the liaison to assist the customer with questions & or concerns regarding fabrication or scheduling. Each manufacturer scheduling department will be in contact with the customer generally 2 to 5 days before the installation of the product. The manufacturer will provide the customer with an estimated time of arrival to your property. You are not required to be present, in most cases if the area is clearly marked with the approval from the customer the installers will erect the building. The manufacturer will not install until the customer is ready & in most cases can hold the building for up to a year. If the customer cannot accept delivery on the time or date set by the manufacturer please note that the “lead time” can potentially be delayed until another “run” is scheduled for the area. Unforeseen issues such as inclement weather or canceled installs on the customers “run” may delay the original estimated install date & it is the understanding that We are not responsible for these delays but will assist the customer to the best of our resources to provide a solution. A site visit has to be scheduled for all 32’ - 60’ wide buildings so the location can be evaluated prior to scheduling the actual install. The customer must provide a lift at the time of installation on 32’’ - 60’ wide units & also on 26’ - 30’ wide units that have a side entry garage door or frame-outs greater than 36” wide. Applicable lifts have to be telescopic fork lift.</p>
            <h6>Ground Preparation
            </h6>
            <p>It is the sole responsibility of the customer to prepare the area where the building is to be installed prior to the arrival of the material and installers. The area must be leveled within 3” of slope for proper installation. The area can consist of dirt, gravel, decking, asphalt or concrete. If the area is not leveled to the manufacturers/installers specifications the customer may incur additional cost for material and labor in order to install the building. If the area is not properly leveled and the installers are unable to make adjustments to install the building the customer may incur a return trip of up to 5% of the retail price of the building and understand that the “lead time” may not be immediate to return to install the building.
            </p>
            <h6>Permit Policy
            </h6>
            <p>A building permit may or may not be required by the customer’s county. It is the responsibility of the customer to investigate whether or a building permit is required. If a permit is required it is not the responsibility of We to submit permit applications but will inform the customer to the best of our resources if the customer is in an area that has a history of requiring permitting. If a permit is required it is highly recommended that the customer purchase a “Certified” building. A “Certified” building is defined as designed and engineered to meet and or exceed local building codes and depending on the state, Generic Engineered Plans are included in the Certified price although a few states may be an additional cost.
            </p>
            <h6>Florida Permit Policy</h6>
            <p>A building permit is always required in the state of Florida. All buildings in the state of FL are sold as Certified buildings to meet and or exceed the local engineering requirements. All buildings will come with free FL stamped Generic plans with the following counties as the exception: Lee, St-John, Hernando, Pasco, Hillsborough, Volusia...these counties require “As built plans” and cost range $125-$200 (As-built plans are defined as engineered plans designed specifically the exact size and specs of the customer’s building). Processing for “As built plans” can take up to 4-6 weeks. In most cases, a permit number will be required before the building can be scheduled.</p>
            <h6>Deposit/Refund Policy
            </h6>
            <p>Upon the purchase of a metal building with We, we will require a deposit of 10%, 12%, 15%, or 20% deposit dictated by revenue size of the sale as well the manufacturer’s deposit requirements. This amount is applied towards customers ending balance. A copy of the receipt for the deposit placed will be emailed to the customer and a binding contract with the order details is emailed to the customer with an “E-Signature” required confirming all details of the order are accurate. (E-Signature is defined as an electronic authorization between We and the customer). All deposits are non-refundable with two exceptions: A right to cancel policy is allowed within 48 hours of the purchase date for a full refund minus 5% of the retail cost of the building. The customer understands that there has been time and effort on behalf of We leading up to and finalizing the sale. The second exception is the denial of a building permit. A full refund of the deposit will be refunded once the customer has submitted to We a written denial from the city/county. The customer understands that the denial pertains to the city/county denying the engineering specs or building type of the building and not additional ground work and or additional property renovation required to accept the building. The manufacturer requires a 50% down payment on all orders $15,000 and larger upon the scheduling of your unit for installation. The collection of this money will take place when the customer is contacted by the manufacturer to confirm date of installation, at that time the manufacturer will collect 50% of the remaining balance.
            </p>
        </div>
        <div className="btn-sign">
            <div className="">
                <aside>
                    <p>By signing below the buyer ensures us that the ground is professionally level while also acknowledging that if the installation crew is unable to install the structure due to an unlevel foundation there will be a return trip fee along with a restock fee that must be paid before returning to the site.</p>
                    <div className="check-type-2">
                            <input
                                type='checkbox'
                                className="secondary"
                                ripple="RipplePropF"
                                checked={state.privacyPolicyCheckbox} 
                                onChange={(e)=>dispatch(privacyPolicyCheckboxChange())}               
                                />
                        <label className="checkbox-label">I agree to the terms and conditions mentioned in the Building Purchase Binding Agreement.
                        </label>
                    </div>
                    <div className="text-center">
                        <div className="sig-canvas-wrapper">
                            <ReactSignatureCanvas onEnd={e=>
                              dispatch(genrateSignature('Ok',state.sigPad))} penColor='black' ref={(ref) => { state.sigPad = ref }} 
                            canvasProps={{width: 360, height: 100, className: 'termssign'}} />
                            <div className="canvas-reset">
                                <a  
                                    onClick={e=>dispatch(genrateSignature('Reset',state.sigPad))}
                                    >
                                <span className="icon-replay icons"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="termsc-cta">
                    <button className="btn btn-secondary btn-big" 
                            disabled={state.backToCheckoutBtn === true ? true : false }
                            onClick={e=>dispatch(termsAndConditionProceedBtn())}
                            >Proceed</button>
                    </div>
                </aside>
            </div>
        </div>
        </div>
  )
}


export default TearmsAndCondition;
