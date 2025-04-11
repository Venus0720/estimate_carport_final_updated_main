import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as THREE from "three";
import { updateSliderRange } from '../../../action';

const HorizontalSlider = () => {

  const state = useSelector((state)=>state.reducer)
  const horizontalSliderRange = useSelector((state)=>state.reducer.horizontalSliderRange)
  const dispatch = useDispatch();
 
  const buildingRotation = (value) => {   
    dispatch(updateSliderRange("horizontal",value))

    const existing_distance = Math.sqrt(Math.pow(state.const_var.camera.position.x, 2) + Math.pow(state.const_var.camera.position.z, 2));
    // Get the value of the slider
    const angle = parseFloat(value);
  
    // Convert degrees to radians
    const radians = THREE.MathUtils.degToRad(angle);
  
    // Calculate new camera position based on angle
    const x = Math.sin(radians) * existing_distance
    const z = Math.cos(radians) * existing_distance

    // Update camera position
    state.const_var.camera.position.set(x, state.const_var.camera.position.y, z);
  
    // Point the camera at the scene center
    state.const_var.camera.lookAt(state.const_var.scene.position);
    state.const_var.controls.update();
  }

  return (
    <div className='horizontalslider-wrapper'>
        <div className='input-range form-element canvas-slider'>
        <input
          id='horizontal-slider'
          type='range'         
          min='0'
          max='360'
          step='1'
          class='progress'
          value={horizontalSliderRange}
         onChange={e=>buildingRotation(e.target.value)}
        />
      </div>
    </div>
  )
}

export default HorizontalSlider;