import React from 'react'
import { useSelector } from 'react-redux';

import thumb_point from '../../assets/images/call/thumb_point.svg';

const BuildingInformation = () => {
    const state = useSelector((state) => state.reducer)



    return (
        <div className='garage-category-container'>
            <div className='garage-category-note'>
                <h2>{state.const_var.new_building_name}</h2>
            </div>
            <div className='garage-category garage-category-wrap'>  
                <div className='prow'>
                    {
                        state.const_var.editAPIDataByResponse.data?.building_inclusion_text2.length > 0 && 
                        state.const_var.editAPIDataByResponse.data?.building_inclusion_text2.map((data, index) => {
                            return (
                                <div className='pcol-6 category-wrap'>
                                    <img src={thumb_point} alt='img' />
                                    {data.replace(/"/g, "").replace(/'/g, "").replace("Lean-tos", "Lean-To's")}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
                
        </div>
    )
}

export default BuildingInformation;