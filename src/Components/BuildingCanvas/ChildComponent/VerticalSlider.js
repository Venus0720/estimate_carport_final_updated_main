import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as THREE from "three";
import { updateSliderRange } from '../../../action';


const VerticalSlider = () => {
  const state = useSelector((state)=>state.reducer);
  const verticalSliderRange = useSelector((state)=>state.reducer.verticalSliderRange);
  const dispatch = useDispatch()

  const buildingRotation = (value) => {  
    dispatch(updateSliderRange("vertical",value))

    var radians = THREE.MathUtils.degToRad(value);

    // Calculate spherical coordinates
    var spherical = new THREE.Spherical().setFromVector3(state.const_var.camera.position);
    spherical.phi = radians;

    // Convert spherical coordinates back to Cartesian coordinates
    state.const_var.camera.position.setFromSpherical(spherical);
    
    state.const_var.controls.update();

  }
  
  return (
    <div className='verticalslider-wrapper'>
        <div className='input-range form-element canvas-slider'>
        <input
          id='vertical-slider'
          type='range'         
          min = "1"
          max = "180"
          step='1'
          class='progress'
          value={verticalSliderRange}
         onChange={e=>buildingRotation(e.target.value)}
        />
      </div>
    </div>
  )
}

export default VerticalSlider;