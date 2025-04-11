import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buildingSurfaceChange, cetificateChange, extraInformationAction, extraItemsAction, handleOverhang, handleOverhangSel, orderExtrasChangeValueFromMainAction } from '../../../../action'
import EngineeringDrawing from './EngineeringDrawing'
import concreteImg from '../../../../assets/images/installationSurface/concrete.png';
import asphaltImg from '../../../../assets/images/installationSurface/asphalt.png';
import groundImg from '../../../../assets/images/installationSurface/ground.png';
import gravelImg from '../../../../assets/images/installationSurface/gravel.png';


const ExtraOptions = () => {
    const state = useSelector((state) => state.reducer)
    const dispatch = useDispatch()
    const elementPrice = state.const_var.UpdatedPriceData.length > 0 && state.const_var.UpdatedPriceData['elements']!=undefined && state.const_var.UpdatedPriceData['elements'];

    let isOldOverhang = state.const_var.a_p_d_a.overhang != undefined && ((state.const_var.a_p_d_a.overhang.end != undefined && state.const_var.a_p_d_a.overhang.end.length > 0) || (state.const_var.a_p_d_a.overhang.side != undefined && state.const_var.a_p_d_a.overhang.side.length > 0) || (state.const_var.a_p_d_a.overhang.both != undefined && state.const_var.a_p_d_a.overhang.both != '')) ? false : true

    let endOverhangIndex = isOldOverhang == false && state.const_var.a_p_d_a.overhang != undefined && state.const_var.a_p_d_a.overhang.end != undefined && state.const_var.a_p_d_a.overhang.end.length > 0 ? state.const_var.a_p_d_a.extra_items[0].checkbox.length : 0;


    let sideOverhangIndex = isOldOverhang == false &&  state.const_var.a_p_d_a.overhang != undefined && state.const_var.a_p_d_a.overhang.end != undefined && state.const_var.a_p_d_a.overhang.end.length > 0 && state.const_var.a_p_d_a.overhang.side != undefined && state.const_var.a_p_d_a.overhang.side.length > 0 ? endOverhangIndex + 1 : (isOldOverhang == false && state.const_var.a_p_d_a.overhang!=undefined && state.const_var.a_p_d_a.overhang.side != undefined && state.const_var.a_p_d_a.overhang.side.length > 0 ? state.const_var.a_p_d_a.extra_items[0].checkbox.length : 0);

    let bothOverhangIndex = isOldOverhang == false && state.const_var.a_p_d_a.overhang != undefined && state.const_var.a_p_d_a.overhang.both != undefined && state.const_var.a_p_d_a.overhang.both != '' ? state.const_var.a_p_d_a.extra_items[0].checkbox.length : 0
    
    if(isOldOverhang == false && state.const_var.a_p_d_a.overhang != undefined && state.const_var.a_p_d_a.overhang.both != undefined && state.const_var.a_p_d_a.overhang.both != ''){
        state.const_var.a_p_d_a.overhang.both = {...state.const_var.a_p_d_a.overhang.both, 'sheet_name': "1' Overhang", 'sheet_type': "both"}
    }
    let chkPermit = '';
    if((state.const_var.stateManufacturerAcordingAPI!=undefined) )
    {
    if(state.const_var.stateManufacturerAcordingAPI[state.params.p_s_n]!= undefined)
    {
        chkPermit = state.const_var.stateManufacturerAcordingAPI[state.params.p_s_n];
    }
    }

    let checkFlag = false
    if((state.params.p_s_n == 29 && (state.params.m_s_n == 3 || state.params.m_s_n == 9)) && ( chkPermit.is_labor_show_in_3d == 1 || chkPermit.is_permit_show_in_3d==true)){
        checkFlag = true
    }else{
        if(chkPermit.is_labor_show_in_3d == 1){
            checkFlag = true
        }
    }
    const InstallationArray = [
        {value:1,label:"Concrete"},
        {value:2,label:"Asphalt"},
        {value:3,label:"Ground"},
        {value:4,label:"Gravel"},
    ]
    const ImageArray = [
        concreteImg,
        asphaltImg,
        groundImg,
        gravelImg
    ]

let isUserData = localStorage.getItem('userData') ? true : false
return (
    <section>
      <div className='prow'>
        <div className='p-col-12 d-flex justify-between align-item-center'>
          <h3>Extra Options</h3>
        </div>
        {
            isOldOverhang == false && state.const_var.a_p_d_a.overhang != undefined && state.const_var.a_p_d_a.overhang.end !=undefined && state.const_var.a_p_d_a.overhang.end.length > 0 && state.params.p_r_s != "1" && 
            <>
            {state.const_var.a_p_d_a.overhang.end.length > 1 ?
                <>
                    <div className="input-checkbox form-element">      
                        <div className="input-box">
                            <input
                                type='checkbox'
                                checked={(state.const_var.ExtraItemsFeaturesArray.length>0 && state.const_var.ExtraItemsFeaturesArray[endOverhangIndex]!=undefined && state.const_var.ExtraItemsFeaturesArray[endOverhangIndex].is_checked!=undefined)?state.const_var.ExtraItemsFeaturesArray[endOverhangIndex].is_checked:false} 
                                id="End Overhang"
                                onClick={e => dispatch(handleOverhang(e.target.value, 'end','extraitemsCheckbox', state.const_var.a_p_d_a.overhang.end,endOverhangIndex))}
                            />
                            <label for={"End Overhang"}>{"End Overhang"}</label>
                        </div>          
                    </div>
                
                    {state.const_var.ExtraItemsFeaturesArray.length>0 && state.const_var.ExtraItemsFeaturesArray[endOverhangIndex]!=undefined && state.const_var.ExtraItemsFeaturesArray[endOverhangIndex].is_checked!=undefined && state.const_var.ExtraItemsFeaturesArray[endOverhangIndex].is_checked &&
                        <div className='prow'>
                            <div className='input-checkbox form-element mt-10'>
                                <div className="input-box">
                                   <select     
                                        defaultValue={state.const_var.isOverhang.end.selected}
                                        onClick={e => dispatch(handleOverhangSel(e.target.value, 'end','extraitemsCheckbox',state.const_var.a_p_d_a.overhang.end,endOverhangIndex))}
                                        >
                                        {Object.entries(state.const_var.a_p_d_a.overhang.end).map(([key, value]) => {
                                        return <option value={value.sheet_name}>{value.sheet_name}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                    }
                </>
                :
                <div className={(state.const_var.loginSession==false && state.const_var.a_p_d_a.overhang.end[0].cost==0 )?"input-checkbox form-element d-none":"input-checkbox form-element "}>
                    <div className="input-box">
                        <input 
                            type='checkbox'
                            checked={(state.const_var.ExtraItemsFeaturesArray.length>0 && state.const_var.ExtraItemsFeaturesArray[endOverhangIndex]!=undefined && state.const_var.ExtraItemsFeaturesArray[endOverhangIndex].is_checked!=undefined)?state.const_var.ExtraItemsFeaturesArray[endOverhangIndex].is_checked:false} 
                            id={state.const_var.a_p_d_a.overhang.end[0].sheet_name} 
                            onClick={e =>dispatch(extraItemsAction(e.target.value,'extraitemsCheckbox',state.const_var.a_p_d_a.overhang.end[0],endOverhangIndex,'overhang')) } 
                        />  
                        <label for={`over${state.const_var.a_p_d_a.overhang.end[0].sheet_name}`}>{state.const_var.a_p_d_a.overhang.end[0].sheet_name}</label>
                    </div>
                </div>
            }
            
        </>
        }
        { isOldOverhang == false && state.const_var.a_p_d_a.overhang != undefined && state.const_var.a_p_d_a.overhang.side !=undefined && state.const_var.a_p_d_a.overhang.side.length > 0 && state.params.p_r_s != "1" &&
            <>
            {state.const_var.a_p_d_a.overhang.side.length > 1 ?
                <>
                    <div className="input-checkbox form-element">      
                        <div className="input-box">
                            <input
                                type='checkbox'
                                checked={(state.const_var.ExtraItemsFeaturesArray.length>0 && state.const_var.ExtraItemsFeaturesArray[sideOverhangIndex]!=undefined && state.const_var.ExtraItemsFeaturesArray[sideOverhangIndex].is_checked!=undefined)?state.const_var.ExtraItemsFeaturesArray[sideOverhangIndex].is_checked:false} 
                                id="Side Overhang"
                                onClick={e => dispatch(handleOverhang(e.target.value, 'side','extraitemsCheckbox', state.const_var.a_p_d_a.overhang.side,sideOverhangIndex))}
                            />
                            <label for={"Side Overhang"}>{"Side Overhang"}</label>
                        </div>          
                    </div>
                    {state.const_var.ExtraItemsFeaturesArray.length>0 && state.const_var.ExtraItemsFeaturesArray[sideOverhangIndex]!=undefined && state.const_var.ExtraItemsFeaturesArray[sideOverhangIndex].is_checked!=undefined && state.const_var.ExtraItemsFeaturesArray[sideOverhangIndex].is_checked &&
                        <div className='prow'>
                            <div className='input-checkbox form-element mt-10'>
                                <div className="input-box">
                                <select  
                                    defaultValue={state.const_var.isOverhang.side.selected}
                                    // defaultValue={{
                                    //     "value": state.const_var.isOverhang.side.selected,
                                    //     "label": state.const_var.isOverhang.side.selected
                                    // }}
                                    // value={state.const_var.isOverhang.side.selected}
                                    onClick={e => dispatch(handleOverhangSel(e.target.value, 'side','extraitemsCheckbox',state.const_var.a_p_d_a.overhang.side,sideOverhangIndex))}
                                    
                                    >
                                    {Object.entries(state.const_var.a_p_d_a.overhang.side).map(([key, value]) => {
                                     return <option value={value.sheet_name}>{value.sheet_name}</option>
                                    })}
                                </select>
                                </div>
                            </div>
                        </div>
                    }
                </>
                :
                <div className={(state.const_var.loginSession==false && state.const_var.a_p_d_a.overhang.side[0].cost==0 )?"input-checkbox form-element d-none":"input-checkbox form-element "}>
                    <div className="input-box">
                        <input 
                          type='checkbox'
                          checked={(state.const_var.ExtraItemsFeaturesArray.length>0 && state.const_var.ExtraItemsFeaturesArray[sideOverhangIndex]!=undefined && state.const_var.ExtraItemsFeaturesArray[sideOverhangIndex].is_checked!=undefined)?state.const_var.ExtraItemsFeaturesArray[sideOverhangIndex].is_checked:false} 
                          onClick={e => dispatch(extraItemsAction(e.target.value,'extraitemsCheckbox',state.const_var.a_p_d_a.overhang.side[0],sideOverhangIndex,'overhang')) } 
                        />  
                       <label for={`over${state.const_var.a_p_d_a.overhang.side[0].sheet_name}`}>{state.const_var.a_p_d_a.overhang.side[0].sheet_name}</label>
                    </div>
                </div>
            }
         </>
        }
        {isOldOverhang == false && state.const_var.a_p_d_a.overhang != undefined && state.const_var.a_p_d_a.overhang.both !=undefined && state.const_var.a_p_d_a.overhang.both.length > 0 && state.params.p_r_s != "1" &&
            <>
                <div className={(state.const_var.loginSession==false && state.const_var.a_p_d_a.overhang.both.cost==0 )?"input-checkbox form-element d-none":"input-checkbox form-element "}>
                    <div className="input-box"> 
                        <input 
                            id={`over${state.const_var.a_p_d_a.overhang.both.sheet_name}`}
                            type='checkbox'
                            style={{border:'none', boxShadow:'0px 0px 0px 1px #b3b3b3'}}
                            checked={(state.const_var.ExtraItemsFeaturesArray.length>0 && state.const_var.ExtraItemsFeaturesArray[bothOverhangIndex]!=undefined && state.const_var.ExtraItemsFeaturesArray[bothOverhangIndex].is_checked!=undefined)?state.const_var.ExtraItemsFeaturesArray[bothOverhangIndex].is_checked:false} 
                            onClick={e => dispatch(extraItemsAction(e.target.value,'extraitemsCheckbox',state.const_var.a_p_d_a.overhang.both,bothOverhangIndex,'overhang')) } 
                        />   
                       <label for={`over${state.const_var.a_p_d_a.overhang.both.sheet_name}`} className='label-pointer'>{state.const_var.a_p_d_a.overhang.both.sheet_name}</label>
                    </div>           
                </div>                        
            </>
        }
        {((state.const_var.a_p_d_a.extra_items) && state.const_var.a_p_d_a.extra_items.length>0 && state.const_var.a_p_d_a.extra_items[0].checkbox!=undefined)?
            state.const_var.a_p_d_a.extra_items[0].checkbox.map((val, index)=> {
                let chkFlagForDistanceonCenter = false;
                let chkFlagForDistanceonCenterSBS = false;
                if(state.const_var.ExtraItemsFeaturesArray.length>0 && state.const_var.ExtraItemsFeaturesArray[index]!=undefined && state.const_var.ExtraItemsFeaturesArray[index].is_checked!=undefined)
                {
                  if(state.const_var.ExtraItemsFeaturesArray[index].is_checked && state.params.isDefaultfourFeet==true && (val.name == "fourth_center_cost" || val.label == "4ft on Center"))
                  {
                      chkFlagForDistanceonCenter = true;
                  }
                  if(state.const_var.DistanceArr.length>0 && state.const_var.DistanceArr[state.params.p_b_t][state.params.p_r_s]!=undefined)
                  {
                      if(state.const_var.DistanceArr[state.params.p_b_t][state.params.p_r_s]==4 )
                      {
                        if((val.name == "fourth_center_cost" || val.label == "4ft on Center") && val.cost==0)
                        {
                            chkFlagForDistanceonCenterSBS = true;
                        }
                      }
                  }
                }  
                return (  
                  <div className={(state.const_var.loginSession==false && val.cost==0)? "prow d-none" :"prow " + (((state.params.p_r_s != "1" && isOldOverhang == true) || val.name != "overhang") ? '' : ' d-none')}>
                    <div className={(val.name != "fourth_center_cost" && val.name != "overhang")?'input-checkbox form-element mt-10 d-none':(state.params.isDefaultfourFeet && (val.name == "fourth_center_cost" || val.label == "4ft on Center"))?'input-checkbox form-element mt-10 disabled' : 'input-checkbox form-element mt-10'}> 
                        <div className='input-box' >
                            <input 
                                id={`4feet ${index}`}
                                type='checkbox'                             
                                style={{border:'none', boxShadow:'0px 0px 0px 1px #b3b3b3'}}
                                checked={(state.const_var.ExtraItemsFeaturesArray.length>0 && state.const_var.ExtraItemsFeaturesArray[index]!=undefined && state.const_var.ExtraItemsFeaturesArray[index].is_checked!=undefined)?state.const_var.ExtraItemsFeaturesArray[index].is_checked:false} 
                                // disabled={(state.params.isDefaultfourFeet && (val.name == "fourth_center_cost" || val.label == "4ft on Center"))?true:false }
                                onClick={(e) => dispatch(extraItemsAction(e.target.value,'extraitemsCheckbox',val,index)) } 
                            />
                            <label className='label-pointer' for={`4feet ${index}`}>{val.label}</label>
                            {(val.name != "fourth_center_cost" && val.name != "overhang")?
                              <span >(Non Visual)</span>
                              :(chkFlagForDistanceonCenter==true)?<span >(Included)</span>:null
                            }
                      </div>         
                    </div>   
                  </div>
                )
              })
            :null
        }
        {((state.const_var.a_p_d_a.extra_items) && state.const_var.a_p_d_a.extra_items.length>0 && state.const_var.a_p_d_a.extra_items[0].checkbox_quantity!=undefined)?             
            state.const_var.a_p_d_a.extra_items[0].checkbox_quantity.map((val, index) => {                        
                let chkFlagForDistanceonCenterItem = false;
                  if(state.const_var.ExtraItemsFeaturesQuantityArray.length>0 && state.const_var.ExtraItemsFeaturesQuantityArray[index]!=undefined && state.const_var.ExtraItemsFeaturesQuantityArray[index].is_disabled!=undefined)
                  {
                    chkFlagForDistanceonCenterItem = (state.const_var.ExtraItemsFeaturesQuantityArray[index].is_disabled==true)?true:false; 
                  }
                  return (
                        <div className='prow' >
                          <div className= {(state.const_var.loginSession==false && val.cost==0 )?'input-checkbox form-element mt-10 d-none' :chkFlagForDistanceonCenterItem?'input-checkbox form-element mt-10 disabled' : 'input-checkbox form-element mt-10'}>
                           <div className='input-box ' >
                            <input
                              id={`quantity ${index}`}
                              type='checkbox'
                              style={{border:'none', boxShadow:'0px 0px 0px 1px #b3b3b3'}}
                              checked={(state.const_var.ExtraItemsFeaturesQuantityArray.length>0 && state.const_var.ExtraItemsFeaturesQuantityArray[index]!=undefined && state.const_var.ExtraItemsFeaturesQuantityArray[index].is_checked!=undefined)?state.const_var.ExtraItemsFeaturesQuantityArray[index].is_checked:false} 
                            //   disabled={(state.const_var.ExtraItemsFeaturesQuantityArray.length>0 && state.const_var.ExtraItemsFeaturesQuantityArray[index]!=undefined && state.const_var.ExtraItemsFeaturesQuantityArray[index].is_disabled!=undefined)?state.const_var.ExtraItemsFeaturesQuantityArray[index].is_disabled:false}
                        
                              onClick={(e) => dispatch(extraItemsAction(e.target.value,'extraitemsCheckboxwithQuantity',val,index))}
                            />
                            <label className='label-pointer' for={`quantity ${val.index}`}>{val.label}</label>
                            {(chkFlagForDistanceonCenterItem==true)?<span >(Included)</span>:<span>(Non Visual)</span>}
                          </div>
                        </div>
                      </div>
                  )
             })
            :null
        } 
        {((state.const_var.a_p_d_a.additional_features) && state.const_var.a_p_d_a.additional_features.length>0 )?
                     state.const_var.a_p_d_a.additional_features.map((val, index) => {
                     return (   
                        <div className={(state.const_var.loginSession==false && val.cost==0 )?"input-checkbox form-element mt-10 d-none":"input-checkbox form-element mt-10 "} >
                            <div className='input-box'> 
                                <input 
                                    id={`extra ${index}`}
                                    type='checkbox'
                                    style={{border:'none', boxShadow:'0px 0px 0px 1px #b3b3b3'}}
                                    checked={(state.const_var.additionalFeaturesArray.length>0 && state.const_var.additionalFeaturesArray[index]!=undefined && state.const_var.additionalFeaturesArray[index].is_checked!=undefined)?state.const_var.additionalFeaturesArray[index].is_checked:false} 
                                    onClick={e =>dispatch(extraItemsAction(e.target.value,'additionalFeatures',val,index)) } 
                                />
                                <label className='label-pointer' for={`extra ${index}`}>{val.additional_feature}</label>
                                <span class="additional-info ml-1">(Non Visual)</span>
                            </div>
                        </div>
                  )
                })
            :null
        } 
        {(state.const_var.loginSession == false)?
            <div className='site-information'>
                <div className='prow mt-4 mb-2'>
                    <div className='pcol-12 mt-3'>
                        <h3 >Site Information </h3>                                
                    </div>
                </div>
                <div className='prow mb-10'>
                    <div className='pcol-4'>
                        <h5> Job Site Level -</h5>
                    </div>
                    <div className='pcol-2'>
                        <div className='input-box '>
                            <input
                                type='radio'
                                id="jobyes"
                                className='none-check-icon'
                                style={{boxShadow:'0px 0px 0px 1px #b3b3b3'}}
                                value="yes"
                                checked={(state.params.job_site_level == "yes")?true:false}
                                name="job_site_level"
                                onClick={e => dispatch(extraInformationAction(e.target.value,'jobsite'))}
                            />
                            <label className='label-pointer' for={`job${"yes"}`}>{"Yes"}</label>
                        </div>
                    </div>
                    <div className='pcol-2'>
                        <div className='input-box '>
                            <input
                                type='radio'
                                id="jobno"
                                className='none-check-icon'
                                style={{boxShadow:'0px 0px 0px 1px #b3b3b3'}}
                                value="no"
                                name="job_site_level"
                                checked={(state.params.job_site_level == "no")?true:false}
                                onClick={e => dispatch(extraInformationAction(e.target.value,'jobsite'))}
                            />
                            <label className='label-pointer' for={`job${"no"}`}>{"No"}</label>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
                <div className='prow mb-10'>
                    <div className='pcol-4'><h5> Power Available -</h5></div>
                    <div className='pcol-2'>
                        <div className='input-box'>
                            <input
                                type='radio'
                                id="poweryes"
                                style={{boxShadow:'0px 0px 0px 1px #b3b3b3'}}
                                value="yes"
                                className='none-check-icon'
                                checked={(state.params.power_avail == "yes")?true:false}
                                name="surface_level"
                                onClick={e => dispatch(extraInformationAction(e.target.value,'power'))}
                            />
                            <label className='label-pointer' for={`power${"yes"}`}>{"Yes"}</label>
                        </div>
                    </div>
                    <div className='pcol-2'>
                        <div className='input-box'>
                            <input
                                type='radio'
                                id="powerno"
                                value="no"
                                className='none-check-icon'
                                style={{boxShadow:'0px 0px 0px 1px #b3b3b3'}}
                                name="surface_level"
                                checked={(state.params.power_avail == "no")?true:false}
                                onClick={e => dispatch(extraInformationAction(e.target.value,'power'))}
                            />
                            <label className='label-pointer' for={`power${"no"}`}>{"No"}</label>
                        </div>
                    </div>
                </div>
                {(state.const_var.loginSession==false && chkPermit!='' && chkPermit.is_permit_show_in_3d==true && state.const_var.isKLinkEnable == false)?
                    <div className='prow mb-10 '>
                        <div className='pcol-4'><h5  >Permit Required</h5></div>
                        <div className='pcol-2'>
                            <div className='input-box'>
                                <input
                                    type='radio'
                                    id='permit-yes'
                                    className='none-check-icon'
                                    style={{boxShadow:'0px 0px 0px 1px #b3b3b3'}}
                                    value="yes"
                                    checked={(state.const_var.order_extra_items.permit == "yes")?true:false}
                                    name="permit"
                                    onClick={e => dispatch(orderExtrasChangeValueFromMainAction(e, 'permit', 'no'))}
                                />                               
                                <label className='label-pointer' for={`permit-yes`}>{"Yes"}</label>
                            </div>
                        </div>
                        <div className='pcol-2'>
                            <div className='input-box'>
                                <input
                                    type='radio'
                                    id="permit-no"
                                    className='none-check-icon'
                                    style={{boxShadow:'0px 0px 0px 1px #b3b3b3'}}
                                    value="no"
                                    name="permit"
                                    checked={(state.const_var.order_extra_items.permit == "no")?true:false}
                                    onClick={e => dispatch(orderExtrasChangeValueFromMainAction(e, 'permit', 'no'))}
                                />
                                <label className='label-pointer' for={`permit-no`}>{"No"}</label>
                            </div>
                        </div>
                    </div>
                :null
                }
                {(state.const_var.loginSession == false && state.const_var.order_extra_items.extra_labour!=0 && chkPermit!='' && checkFlag==true  )?
                    <div className='prow mb-10 '>
                        <div className='pcol-4'><h5 >Labor Fee</h5></div>                                                                        
                    </div>
                :null}
                {(state.const_var.loginSession == false && state.const_var.order_extra_items.document_fee!=0 && chkPermit!='' && chkPermit.is_document_show_in_3d == 1  )?
                    <div className='prow mb-10 '>
                        <div className='pcol-4'><h5 >Document Fee</h5></div>                                          
                    </div>
                :null}
                {(state.const_var.loginSession == false && state.const_var.order_extra_items.order_processing_fee!=0 && chkPermit!='' && chkPermit.is_processing_show_in_3d == 1  )?
                    <div className='prow mb-10 '>
                        <div className='pcol-4'> <h5 >Processing Fee </h5></div>                                                                       
                    </div>
                :null}
                        
               
            </div>
        :null
        }
        {
            state.const_var.loginSession == false && 
            isUserData == false && state.const_var.c_m_a[state.params.p_b_t] != undefined && 
            state.const_var.c_m_a[state.params.p_b_t].drawings != undefined &&  state.const_var.c_m_a[state.params.p_b_t].drawings.length > 0 &&
            <EngineeringDrawing />
        }
        <div className={'prow mt-4 mb-2 p-0'}>
            <div className='pcol-12'><h3 >Installation Surface </h3> </div>
            <div className='pcol-12 p-0'>
                <ul style={{display: 'flex'}} className='custom-tab-type-1 mb-0 mt-0'>
                    {InstallationArray.map( (value, index) => {                                                                
                        return (
                            <label key={index} className={state.params.p_i_s == value.value ? 'installation-sort label-pointer active' : 'installation-sort label-pointer' } for={`install${index}`}>
                                <div className='check-container'>
                                    <input
                                        id={`install${index}`}
                                        type="radio"
                                        name="surface"
                                        style={{border:'none',boxShadow:'0px 0px 0px 1px #b3b3b3'}}
                                        value={value.value}
                                        checked={ state.params.p_i_s == value.value ?true:false}
                                        onClick={(e) =>dispatch(buildingSurfaceChange(e.target.value, value.label))}   
                                    />
                                    <span> {value.label}</span>
                                </div>
                                <img src={ImageArray[index]} alt='installation_img'/>
                            </label>
                        )                                   
                    })}
                </ul>
            </div>
        </div>                
                    
                    {/* <div className='prow mb-3'>
                    <div className='pcol-12'>
                    <div className="floating-label-input">
                                 <input
                                        textarea                         
                                        fullwidth
                                        label="Extra Notes"
                                        rows={4}
                                        maxLength={1000}
                                        onBlur={e=>dispatch(extraInformationAction(e.target.value,'notes'))}
                                        characterCount
                                        helpText={{
                                        persistent: true,
                                }}
                              /> 
                        </div>
                    </div>
                    </div> */}
      </div>
    </section>
  )
}

export default ExtraOptions
