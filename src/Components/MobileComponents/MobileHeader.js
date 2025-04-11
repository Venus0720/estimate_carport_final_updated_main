import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getBuildingDataforProduct } from '../../action';
import { const_var } from '../../redux/reducers/reducer';


import location_icon from '../../assets/images/mobile-images/position/position.svg';
import BuildingAction from '../Common/BuildingAction';

const MobileHeader = () => {
    
    const dispatch = useDispatch();
    const state = useSelector((state) => state.reducer)

    const [isBlink, setBlink] = useState(true);
    return (
        <>
            <div className='mobile-header'>
                <div className='location-container'>
                    <img src={location_icon} alt='location_icon'/>
                    <div className='select-location select'>
                        <select onClick={()=>setBlink(false)} value={state.params.p_s_n} onChange={(e) => dispatch(getBuildingDataforProduct(e.target.value,"state"))}>
                            {
                                const_var.bjDData.map((item) => {
                                    return <option value={item.id}>{item.state_name}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div><BuildingAction/></div>
            </div>
        </>
    )
}

export default MobileHeader;