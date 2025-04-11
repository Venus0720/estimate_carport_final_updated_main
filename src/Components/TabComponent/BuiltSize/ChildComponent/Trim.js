import React from 'react'
import ColorBox from '../../../Common/ColorBox'
import { useSelector } from 'react-redux';

const Trim = () => {
  const state = useSelector((state) => state.reducer);
  return (
    <div>
      <div className='pcol-12 d-flex align-item-center w-space-nowrap mt-15 mb-10 height-20'>
        <h3 className='mt-0 mb-0'>Trim Color</h3>&nbsp;
        <div class="check-color-container d-flex align-items-center">
            {'('}&nbsp;
              <div style={{backgroundColor: state.const_var.color.find(item => item.id === state.params.p_t_c_id)?.hex_value,height:'10px', width:'10px'}} class="color-circle"></div>&nbsp;
              <div className="color-name">{state.const_var.color.find(item => item.id === state.params.p_t_c_id)?.name}</div>&nbsp;
            {')'}
          </div>
      </div>        
      <div className='color-container'>
      {
          state.const_var.color?.map((item, index) => {
            return  <ColorBox index={index} colorData={item} type="trim_color"/>
          })
      }
      </div>
    </div>
  )
}

export default Trim;
