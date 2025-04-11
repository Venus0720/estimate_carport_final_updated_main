import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleWallSelectonChangeValue } from '../../../../action';

const SidingPanelSection = () => {
    
    const dispatch = useDispatch()
    const state = useSelector((state) => state.reducer);
    const [sidesEndsWallFlag,setSidesEndsWallFlag] = useState("");
    
    useEffect(() => {
        if (state.params.p_f_w === "Close" && state.params.p_r_w === "Close" && state.params.p_l_w === "Close" && state.params.p_b_w === "Close") {
            setSidesEndsWallFlag("close");
        }else if(state.params.p_f_w === "Open" && state.params.p_r_w === "Open" && state.params.p_l_w === "Open" && state.params.p_b_w === "Open") {
            setSidesEndsWallFlag("open")
        }
         else {
            setSidesEndsWallFlag("partial");
        }
    }, [state.params.p_f_w, state.params.p_r_w, state.params.p_l_w, state.params.p_b_w]);

    return (
        <>
            <section className='tab-data-padding'>
            <div className="prow sides-pcol-3 mb-10">
                <div className="prow">
                    <div className='pcol-12 d-flex align-items-center w-auto md-show lean-side-ends'>
                        <h3 className='md-show mt-0 mb-0'>Lean-To Sides & Ends :</h3>
                    </div>
                    <div className='pcol-12 d-flex align-items-center md-hidden'>
                        <h3 className='md-hidden'>Lean-To Sides & Ends</h3>
                    </div>
                    <div className='pcol-3 d-flex align-items-center w-auto mt-10 md-mt-0 horizontal-mr'>
                        <div className='input-checkbox form-element d-flex align-items-center lean-side-ends'>
                            <div className='input-box'>
                            <input id='partialCental' className="side-ends" type='checkbox' value='yes' checked={sidesEndsWallFlag == "partial"}
                            onClick={(e)=>setSidesEndsWallFlag("partial")}/>
                            <label for='partialCental' className="label-pointer">Partial</label>
                            </div>
                        </div>
                    </div>
                    <div className='pcol-3 d-flex align-items-center w-auto mt-10 md-mt-0 horizontal-mr'>
                        <div className='input-checkbox form-element lean-side-ends'>
                            <div className='input-box'>
                            <input id='closedCentral' className="side-ends" type='checkbox'  checked={sidesEndsWallFlag == "close"}
                            onClick={e => {
                                if (state.params.p_f_w !== "Close" ) {
                                    dispatch(handleWallSelectonChangeValue("Close", "front"));
                                }
                                if(state.params.p_l_w !== "Close"){
                                    dispatch(handleWallSelectonChangeValue("Close","left"));
                                }
                                if(state.params.p_r_w !== "Close"){
                                    dispatch(handleWallSelectonChangeValue("Close", "right"));
                                }
                                if(state.params.p_b_w !== "Close"){
                                    dispatch(handleWallSelectonChangeValue("Close", "back"));
                                }
                            setSidesEndsWallFlag("close")
                            }} value='yes' />
                            <label for='closedCentral' className="label-pointer">Closed</label>
                            </div>
                        </div>
                    </div>
                    
                    <div className={state.params.add_front_lean == false && state.params.add_back_lean == false && state.params.add_left_lean == false && state.params.add_right_lean == false ? 'pcol-3 mt-10 md-mt-0 w-auto' : 'pcol-3 disabled mt-10 md-mt-0 w-auto'}>
                        <div className='input-checkbox form-element lean-side-ends'>
                            <div className='input-box'>
                            <input id='OpenCentral' className="side-ends" type='checkbox'  checked={sidesEndsWallFlag == "open"}
                            onClick={e => {
                            dispatch(handleWallSelectonChangeValue("Open", "front"));
                            dispatch(handleWallSelectonChangeValue("Open","left")); 
                            dispatch(handleWallSelectonChangeValue("Open", "right"));
                            dispatch(handleWallSelectonChangeValue("Open", "back"));
                            if( state.params.p_f_w === "Open" && state.params.p_r_w === "Open" && state.params.p_l_w === "Open" && state.params.p_b_w === "Open"){
                            setSidesEndsWallFlag("open")
                            }
                            }} value='yes' />
                            <label for='OpenCentral' className="label-pointer">Open</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            {sidesEndsWallFlag == "partial" && 
            <section className='siding-section-container'>
                <div className='siding-section'>
                    <div className='prow'> 
                            <div className='pcol-3'>
                                <h3 className='mt-0'>Front</h3>
                                <div className='input-select form-element'>
                                    <label className='select'>
                                        <select
                                            onChange={e=> dispatch(handleWallSelectonChangeValue(e.target.value, "front"))}
                                            value={!state.params.isBreezeway ? state.params.p_f_w:'Open'}
                                        >
                                        {Object.entries(state.const_var.wallArray["front"]).map(([key, value]) => {return <option value={value}>{key}</option>})}
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div className={state.params.p_u_c && !state.params.isBreezeway ? 'pcol-3 disabled': 'pcol-3'}>
                                <h3 className='mt-0'>Back</h3>
                                <div className='input-select form-element'>
                                    <label className='select'>
                                        <select
                                            value={!state.params.isBreezeway ? state.params.p_b_w : 'Open'}
                                            onChange={e=> dispatch(handleWallSelectonChangeValue(e.target.value, "back"))}
                                        >
                                        {Object.entries(state.const_var.wallArray["back"]).map(([key, value]) => {return <option value={value}>{key}</option>})}
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div className={state.params.cB_addStorage_check_left == true ? 'pcol-3 disabled': 'pcol-3'}>
                                <h3 className='mt-0'>Left</h3>
                                <div className='input-select form-element'>
                                    <label className='select'>
                                        <select
                                            value={state.params.p_l_w}
                                            onChange={e=> dispatch(handleWallSelectonChangeValue(e.target.value, "left"))}
                                        >
                                        {Object.entries(state.jsonDataL).map(([key, value]) => {return <option value={value}>{key}</option>})}
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div className={state.params.cB_addStorage_check_right == true ? 'pcol-3 disabled': 'pcol-3'}>
                                <h3 className='mt-0'>Right</h3>
                                <div className='input-select form-element'>
                                    <label className='select'>
                                        <select
                                            value={state.params.p_r_w}
                                            onChange={e=> dispatch(handleWallSelectonChangeValue(e.target.value, "right"))}
                                        >
                                        {Object.entries(state.jsonDataR).map(([key, value]) => {return <option value={value}>{key}</option>})}
                                        </select>
                                    </label>
                                </div>
                            </div>
                            
                    </div>
                    <div className='top-arrow'></div>
                </div>
            </section>
        }
        </>
    )
}

export default SidingPanelSection;