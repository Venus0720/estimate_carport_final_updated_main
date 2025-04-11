import React from 'react'
import ColorBox from '../../../Common/ColorBox'
import { useSelector } from 'react-redux';

const Wainscot = () => {
  const state = useSelector((state) => state.reducer);
  return (
    <div>
      <div className='prow mobile-wainscot-title'>
        <div className='color-container'>
        {
            state.const_var.color?.map((item, index) => {
              return  <ColorBox index={index} colorData={item} type="wainscot_color"/>
            })
        }
        </div>
      </div>
    </div>
  )
}

export default Wainscot;
