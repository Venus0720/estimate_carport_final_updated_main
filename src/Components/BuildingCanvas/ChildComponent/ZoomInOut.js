import React from 'react'
import { useSelector } from 'react-redux';


const ZoomInOut = () => {
  const state = useSelector((state)=>state.reducer)
 const zoomIn = () => {    
    state.const_var.controls.setDollyIn(Math.pow(0.95, 1.2));          
    state.const_var.controls.update();
  }

 const zoomOut = () => {    
    state.const_var.controls.setDollyOut(Math.pow(0.95, 1.2));
    state.const_var.controls.update();
  }
  return (
    <div className='zoominoutwrapper'>
        <a onClick={e => zoomIn()}><span className="icon-zoom-in icon"></span></a>
        <a onClick={e => zoomOut()}><span className="icon-zoom-out icon"></span></a>
    </div>
  )
}

export default ZoomInOut;
