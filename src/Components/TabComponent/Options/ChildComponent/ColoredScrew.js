import React from 'react'
import CustomPopover from '../../../Common/CustomPopover'
import { useDispatch, useSelector } from 'react-redux';
import { extraItemsAction, setCheckboxValue } from '../../../../action';
const ColoredScrew = () => {

  const isColoredScrew = useSelector((state) => state.reducer.isColoredScrew)
  const state = useSelector((state) => state.reducer)
  const dispatch = useDispatch();

  return (
    <section>
      <div className='prow'>
        {/* <div className='p-col-12 d-flex justify-between align-item-center mb-10'> */}
          {/* <h2>Colored Screw:</h2> */}
          {/* <CustomPopover
            ctacontent={<span className='icon-info icon'></span>}
            position='left'
            trigger='hover'
            content={
              <div style={{ width: '200px' }}>This is the popover content!</div>
            }
          /> */}
        {/* </div> */}

        {state.const_var.post_data?.building?.additionalFeaturesArray && state.const_var.post_data?.building?.additionalFeaturesArray.length > 0 && 
          state.const_var.post_data?.building?.additionalFeaturesArray.map((val, index) => {
            if (val?.additional_feature === 'Colored Screws') {
              return (     
                <div>
                  <div className='p-col-12 d-flex justify-between align-item-center mb-10'>
                    <h2>Colored Screw:</h2>
                  </div>
                  <div className='pcol-3' key={index}>            
                    <label className="custom-toggle mt-10">
                      <span className="custom-toggle-label mr-5">No</span>
                      <input 
                        className="custom-toggle-checkbox"
                        type="checkbox" 
                        id={`color-screw-${index}`} 
                        checked={val.is_checked}
                        onChange={(e) => dispatch(extraItemsAction(e.target.value, 'additionalFeatures', val, index))}/>
                      <div className="custom-toggle-switch"></div>
                      <span className="custom-toggle-label ml-5">Yes</span>
                    </label>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })
        }
 
      </div>
    </section>
  )
}

export default ColoredScrew
