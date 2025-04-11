import React, {useEffect, useState} from 'react'
import ColorBox from '../../../Common/ColorBox'
import { useDispatch, useSelector } from 'react-redux';
import { toggleAllVerticalCheckboxChange, updateWainscot } from '../../../../action';
import Trim from './Trim'
import Wainscot from './Wainscot'
import SidingPanelSection from './SidingPanelSection';

const Siding = () => {
  const state = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const isWallData =  state.params.p_w_c_id;
  const isWainScot = state.params.p_w_c_c_id;

  if(state.const_var.post_data?.building!=undefined){
    state.params.p_w_c_c_id = state.const_var.post_data?.building?.wainscot==undefined ? state.const_var.color[0]?.id : isWainScot ;
  }
  return (
    <>
      <section className={(state.const_var.showWallColorJSX) ? 'tab-data-padding' : 'tab-data-padding d-none'}>
        <div className='prow sides-pcol-3 mb-5'>
            <div className='pcol-12 d-flex align-items-center w-auto md-show'>
              <h3 className='mt-0 mb-0'>Lean-To Siding Panel :</h3>
            </div>
            <div className='pcol-12 md-hidden'>
              <h3>Lean-To Siding Panel</h3>
            </div>
          <div className='pcol-3 d-flex align-items-center w-auto horizontal-mr'>
            <div className='input-radio form-element mt-10 md-mt-0'>
              <div className='input-box'>
                <input
                  id='horizontal'
                  type='radio'
                  name='sidingradio'
                  className='none-check-icon'
                  value='horizontal'
                  checked={!state.params.p_v_w}
                  onChange={() => dispatch(toggleAllVerticalCheckboxChange())} //toggleAllVerticalCheckboxChange
                />
                <label for='horizontal' className='label-pointer'>Horizontal</label>
              </div>
            </div>
          </div>
          <div className='pcol-3 d-flex align-items-center'>
            <div className='input-radio form-element mt-10 md-mt-0'>
              <div className='input-box'>
                <input
                  id='vertical'
                  type='radio'
                  name='sidingradio'
                  value='vertical'
                  className='none-check-icon'
                  checked={state.params.p_v_w}
                  onChange={() => dispatch(toggleAllVerticalCheckboxChange())} //toggleAllVerticalCheckboxChange
                />
                <label for='vertical' className='label-pointer'>Vertical</label>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SidingPanelSection />
      <section className={(state.const_var.showWallColorJSX) ? 'tab-data-padding' : 'tab-data-padding d-none'}>
        <div className='prow d-flex justify-between'>
        <div className='color-box-wrap'>
            {isWallData && 
              <div className='p-col-12 d-flex w-space-nowrap align-item-center mt-15 mb-10 height-20'>
                <h3 className='mt-0 mb-0'>Sides Color</h3>&nbsp;
                <div className="check-color-container d-flex align-items-center">
                  {'('}&nbsp;
                  <div style={{backgroundColor: state.const_var.color.find(item => item.id === state.params.p_w_c_id)?.hex_value, height:'10px', width:'10px'}} className="color-circle"></div>&nbsp;
                  <div className="color-name">{state.const_var.color.find(item => item.id === state.params.p_w_c_id)?.name}</div>&nbsp;
                  {')'}
                </div>
              </div>
            }
            <div className='color-container'>
              {
                state.const_var.color.map((item, index) => {
                  return  <ColorBox index={index} colorData={item} type={"wall_color"}/>
                })
              }
            </div>
          </div>
          <div className='color-box-wrap'>
            <Trim />
          </div>
          <div className='color-box-wrap'>
            <div className={(state.const_var.showWallColorJSX) ? '' : 'd-none'}>
              <div className='input-checkbox form-element mt-15 mb-10'>
                <div className='input-box'>
                  <input
                    id='Wainscot'
                    type='checkbox'
                    name='Wainscot'
                    value='Wainscot'
                    disabled={ (isWallData && isWallData > 0) ? false : true }
                    style={{border:'none', boxShadow:'0px 0px 0px 1px #b3b3b3'}}
                    checked={state.params.p_w_c_n}
                    onChange={() => dispatch(updateWainscot())} 
                  />
                  <label for='Wainscot' className='wainscot label-pointer'>Wainscot</label>&nbsp;
                  <div class="check-color-container d-flex align-items-center">
                    {'('}&nbsp;
                      <div style={{backgroundColor: state.const_var.color.find(item => item.id === state.params.p_w_c_c_id)?.hex_value,height:'10px', width:'10px'}} class="color-circle"></div>&nbsp;
                      <div className="color-name">{state.const_var.color.find(item => item.id === state.params.p_w_c_c_id)?.name}</div>&nbsp;
                    {')'}
                  </div>
                </div>
              </div>
            </div>
            {state.params.p_w_c_n == true ? <Wainscot /> :null}  
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Siding
