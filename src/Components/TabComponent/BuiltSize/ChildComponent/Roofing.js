import React, {useEffect, useState} from 'react'
import ColorBox from '../../../Common/ColorBox';
import { useDispatch, useSelector } from "react-redux";
import { const_var } from '../../../../redux/reducers/reducer';
import { changeBuildingRoof, getPricingData, roofStyleChange, changeBuildingDimension, hasDoublelegBaiserail  } from '../../../../action';
import diagonal_arrow from '../../../../assets/images/startFromScratch/diagonal.svg';

const Roofing = () => {
  
  const state = useSelector((state) => state.reducer);
  const isRoofdata = state.params.p_r_c_id;
  const dispatch = useDispatch();
  
  return (
    <section className='tab-data-padding'>
      <div className='prow'>
        <div className='prow d-flex mb-25'>
          <span className='customize-building-note'>Customize this Building</span>
          <span className='built-size-or'>OR</span>
          <span className='start-from-scratch'>Start from Scratch<img src={diagonal_arrow} alt='diagonal-arrow'/></span>
        </div>
        <div className='pcol-4 d-flex'>
          <div>
            <h3 className='w-space-nowrap'>Increase Height</h3>
            <div className='input-select form-element'>
              <label class='select'>
                <select onChange={(e) => dispatch(changeBuildingDimension({val:e.target.value, str: 'h'}))} value={state.params.p_h}>
                  {
                    const_var.buildingHeightArray.map((item) =><option value={item.value}>{item.label}</option> )
                  }
                </select>
              </label>
            </div>
          </div>
          
          {state.const_var.hasDoublelegshow === true ?
            <div className={state.const_var.hasDoublelegdisable ?'input-radio form-element mt-35 ml-10 disabled':'input-radio form-element mt-35 ml-10'}>
              <div className='input-box'>
                <div>
                  <input 
                    id='doublelegbaserail'
                    className='none-check-icon' 
                    type='radio' 
                    checked={state.params.p_e_l} 
                    onClick={(e) => dispatch(hasDoublelegBaiserail(e.target.value, "center"))}/>
                </div>
                <label for='doublelegbaserail' className='double-leg label-pointer w-space-nowrap'>{(!state.const_var.isSingleBaseRail && !state.const_var.hasDoublelegName.includes("Baserails")) ? state.const_var.hasDoublelegName +" Baserail ": state.const_var.hasDoublelegName}</label>
              </div>
            </div>
          :null}
        </div>
      </div>
      <div className='prow mt-35'>

        <div className='pcol-3' style={{width: '200px'}}>
          <h3 className='mt-0'>Roof Style</h3>
          {/* <div className='input-select form-element'>
            <label class='select'>
              <select 
                value={state.params.p_r_s}
                onChange={(e) => {
                  dispatch(roofStyleChange(e.target.value));
                  dispatch(getPricingData());
                }} 
              >
              {const_var.roof_style?.map((item) => <option value={item.roof_id}>{item.name}</option>)}        
              </select>
            </label>Vertical
          </div> */}
          <div className='input-checkbox form-element mt-15'>
            <div className='input-box' >
              <input 
                type='checkbox'                             
                style={{border:'none', boxShadow:'0px 0px 0px 1px #b3b3b3'}}
                disabled={ const_var.roof_style?.length < 2 ? true : false }
                value={state.params.p_r_s}
              />
              <label className='label-pointer'>Upgrade to Vertical</label>
            </div>   
          </div>
        </div>
        <div className='pcol-3'>
          <h3 className='mt-0 w-space-nowrap'>Roof Pitch</h3>
          <div className='input-select form-element'>
            <label class='select'>
              <select onChange={(e) => dispatch(changeBuildingRoof({event: e.target.value, value: 'center'}))} value={state.params.b_r_p}>
                {
                  Object.keys(const_var.BuildingRoofPitch)?.map((item) => <option value={item.replace("/","")}>{item}</option>)
                }
              </select>
            </label>
          </div>
        </div>
      </div>
      {isRoofdata &&
      <div className='prow'>
        <div className='color-box-wrap mt-20'>
          <div className='p-col-12 d-flex align-item-center w-space-nowrap mt-15 mb-5'>
            <h3 className='mb-0 mt-0'>Roof Color</h3>&nbsp;
            <div class="check-color-container d-flex align-items-center">
              {'('}&nbsp;
                <div style={{backgroundColor: state.const_var.color.find(item => item.id === state.params.p_r_c_id)?.hex_value,height:'10px', width:'10px'}} class="color-circle"></div>&nbsp;
                <div className="color-name">
                  {state.const_var.color.find(item => item.id === state.params.p_r_c_id)?.name}
                </div>
              {' )'}
            </div>
          </div>
          <div className='color-container'>
            {
              state.const_var.color.map((item) => {
                return  <ColorBox colorData={item} type="roof_color"/>
              })
            }
          </div>
        </div>
      </div>}
    </section>
  )
}

export default Roofing
