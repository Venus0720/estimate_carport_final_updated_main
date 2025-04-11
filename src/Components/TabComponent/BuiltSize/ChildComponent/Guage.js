import React from 'react'
import CustomPopover from '../../../Common/CustomPopover'
import { useDispatch, useSelector } from 'react-redux'
import { gaugeChange } from '../../../../action'
const Guage = () => {
  const state = useSelector((state) => state.reducer)

  const dispatch = useDispatch();

  return (
    <section className={(state.const_var.a_p_d_a.base !== undefined && state.const_var.a_p_d_a.base.length >1) ?'tab-data-padding': 'tab-data-padding d-none'}>
        <div className='prow'>
                <div className='pcol-12 d-flex align-items-center w-auto md-show'>
                    <h3 className={(state.const_var.a_p_d_a.base !== undefined && state.const_var.a_p_d_a.base.length === 0) ? 'd-none' : 'mt-0 mb-0'}>Gauge :</h3>
                </div>
                <div className='pcol-12 md-hidden'>
                    <h3 className={(state.const_var.a_p_d_a.base !== undefined && state.const_var.a_p_d_a.base.length === 0) ? 'd-none' : ''}>Gauge</h3>
                </div>
            {state.const_var.a_p_d_a.base !== undefined && state.const_var.a_p_d_a.base.length > 1 && 
            state.const_var.a_p_d_a.base.map((item, index) => {
                return(
                    <div className='pcol-2'>
                        <div className='input-radio form-element mt-10 md-mt-0'>
                        <div className='input-box'>
                            <input
                            id={item.gauge} 
                            type='radio' 
                            className='none-check-icon'
                            name={'gauge'+index} 
                            value={state.params.gauge_val}
                            checked={(state.params.gauge_val==item.gauge)?true:false}
                            onClick={(e) => dispatch(gaugeChange(e.target.id))}
                            />
                            <label className='label-pointer' for={'gauge'+index}>{item.gauge}</label>
                        </div>
                        </div>
                    </div>            
                )}
            )}
        </div>      
    </section>
  )
}

export default Guage
