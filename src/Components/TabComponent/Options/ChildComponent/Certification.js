import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cetificateChange } from '../../../../action'
const Certification = () => {
  const state = useSelector((state) => state.reducer)
  const dispatch = useDispatch()
  return (
    <section>
      <div className='prow' style={{display:'block'}}>
        <h3 className='mt-0'>Certification</h3>
        {
          state.const_var.main_extraItems_arr!=undefined && Object.entries(state.const_var.main_extraItems_arr).length>0 && Object.entries(state.const_var.main_extraItems_arr)?.map(([key, value], index) => {
            return (
                <div className='pcol'>
                  <div className='input-radio form-element mt-10'>
                    <div className='input-box'>
                      <input
                        id={`cert ${index}`}
                        type='radio'
                        className='none-check-icon'
                        value={state.params.p_e_i}
                        checked={(state.params.p_e_i== value)?true:false}
                        onClick={() => dispatch(cetificateChange(value, 'center'))}
                      />
                      <label className='label-pointer' for={`cert ${index}`}>{key}</label>
                    </div>
                  </div>
                 </div>
            )
          })
        }
        {/* {state.const_var.post_data?.building?.certificate?.name === "Other" && 
          <div className='pcol'>
            <div className='input-radio form-element mt-10'>
              <div className='input-box'>
                <input
                  id={`cert ${2}`}
                  type='radio'
                  value={state.params.p_e_i}
                  className='none-check-icon'
                  checked={(state.params.p_e_i === "other")?true:false}
                  onClick={() => dispatch(cetificateChange(state.const_var.post_data?.building?.certificate_name, 'center'))}
                />
                <label className='label-pointer' for={`cert ${2}`}>{state.const_var.post_data?.building?.certificate_name}</label>
              </div>
            </div>
          </div>
        } */}

      </div>

      
    </section>
  )
}

export default Certification
