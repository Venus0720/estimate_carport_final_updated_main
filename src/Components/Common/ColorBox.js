import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { roofColorChange, setColorData } from '../../action';

const ColorBox = ({ colorData, type }) => {
  const state = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  let selectedColorId;
  if (state.length === 0 && colorData === undefined) {
    return null;
  }

  switch (type) {
    case "roof_color":
      selectedColorId = state.params.p_r_c_id;
      break;
    case "wall_color":
      selectedColorId = state.params.p_w_c_id;
      break;
    case "trim_color":
      selectedColorId = state.params.p_t_c_id;
      break;
    case "wainscot_color":
      selectedColorId = state.params.p_w_c_c_id;
      break;
    default:
      selectedColorId = "";
      break;
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsHovered(false);
    dispatch(setColorData(type, colorData?.hex_value, colorData?.name, colorData?.id));
    
    switch (type) {
      case "roof_color":
        dispatch(roofColorChange('Roof', colorData));
        break;
      case "wall_color":
        dispatch(roofColorChange('Wall', colorData));
        break;
      case "trim_color":
        dispatch(roofColorChange('Trim', colorData));
        break;
      case "wainscot_color":
        dispatch(roofColorChange('Wainscot', colorData));
        break;
      default:
        break;
    }
  };

  return (
    <div
      className='color-box'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{backgroundColor:colorData?.hex_value }}
    >
      <label htmlFor='newvalue' onClick={handleClick} className={`${selectedColorId === colorData?.id ? "active" : isHovered ? "hovered" : ""}`} title={colorData?.name}>
      </label>
    </div>
  );
};

export default ColorBox;
