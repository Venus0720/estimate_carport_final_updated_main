import React, { Component } from 'react'
import {useDispatch, useSelector } from 'react-redux';
import { orderExtrasChangeValueFromMainAction } from '../../../../action';


const EngineeringDrawing = () => {
      const dispatch =  useDispatch()
      const state = useSelector(state=>state.reducer)
      let isUserData = localStorage.getItem('userData') ? true : false
      
      return (
         <>
        
            <div className='prow mb-3 '>
               <div className='pcol-4'> <h3>Drawings</h3></div>
                  {
                           state.const_var.c_m_a[state.params.p_b_t] != undefined && 
                           state.const_var.c_m_a[state.params.p_b_t].drawings != undefined && state.const_var.c_m_a[state.params.p_b_t].drawings.length > 0 &&
                           state.const_var.c_m_a[state.params.p_b_t].drawings.map((item, idx) => {

                              return (
                                 <div className='input-radio form-element mt-10'>

                                    <div className='input-box'>
                                       <input
                                          id={`draw${item.name}`}
                                          type='radio'
                                          value={item.name}
                                          className='none-check-icon'
                                          name="engineer_drawings"
                                          checked={(state.const_var.order_extra_items.engineer_drawings_name != undefined && state.const_var.order_extra_items.engineer_drawings_name != '' && state.const_var.order_extra_items.engineer_drawings_name.toLowerCase() == item.name.toLowerCase()) ? true : false}
                                          onClick={e => dispatch(orderExtrasChangeValueFromMainAction(e, 'engineer_drawings', 'no', item.cost, item.name))}
                                       />
                                       <label className='label-pointer' for={`draw${item.name}`}>{item.name}</label>
                                    </div>
                                 </div>
                              )
                           })
                        }
                        {/* <>
                          <div className='col-8 drawing-col-sec'>
                             <Radio
                                label={'None'}
                                value={'None'}
                                className='w-full'
                                name="engineer_drawings"
                                checked={(state.sel_engineer_drawings_option.name == 'None')?true:false}
                                onChange={e => state.orderExtrasChangeValue(e, 'engineer_drawings', 'no', 0)}
                             />
                          </div>
                       </> */}
              
        
            </div>
         </>
      )
   }


export default EngineeringDrawing