import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { const_var } from "../../../../redux/reducers/reducer";
import delete_icon from '../../../../assets/images/deleteIcon/deleteIcon.svg';



import { changeBuildingDimension, changeBuildingRoof, changeLeantoPosition, deleteLeanTo, handleLeanToWallSelectonChangeValue, hasDoublelegBaiserail } from "../../../../action";

const Position = ()=> {
  const dispatch = useDispatch();

  const state = useSelector((state)=>state.reducer);

  const checkwallposition = useSelector((state) => state.reducer.checkwallposition)
  const [leanToDataObj,setLeanToDataObj] = useState({});
  const [sidesEndsWallFlag,setSidesEndsWallFlag] = useState("");
  const [leantosAlignment,setLeantosAlignment] = useState("");
  const [leantosHeightDropDown,setLeantosHeightDropDown] = useState([]);
  const [leantosWidthAl,setLeantosWidthAl] = useState("");

  const AlignmentArr = [
    { value: 1, label: "Center" },
    { value: 2, label: "Front" },
    { value: 3, label: "Back" },
  ]

  useEffect(()=>{
    switch (checkwallposition) {
      case "front":
            setLeanToDataObj(
                    {
                      ...leanToDataObj,
                          "width":state.params.leanF_p_w,
                          "length":state.params.leanF_p_d,
                          "height":state.params.leanF_p_h,
                          "strWidth":'leanF_w',
                          "strLength":'leanF_l',
                          "strHeight":'leanF_h',
                          "leantoAlignment":state.params.leantoAlignmentFront,
                          "leantoRoofPitch":state.params.b_l_t_r_pF,
                          "leanToWidthObj":state.const_var.dimensionsLeanLWF,
                          "leanToLengthObj":const_var.dimensionsLeanLDF,
                          "leantoFrontWall":'front_leanto_front',
                          "leantoBackWall":'front_leanto_back',
                          "leantoLeftWall":'front_leanto_left',
                          "leantoFrontValue":state.params.p_b_c_b_f_f,
                          "leantoBackValue":state.params.p_b_c_b_f_b,
                          "leantoLeftValue":state.params.p_b_c_b_f_l, 
                          "showDoublelegbaserail":state.const_var.leanFHasDoublelegshow,
                          "disableDoublelegbaserail":state.const_var.leanFHasDoublelegdisable,
                          "doublelegValue":state.params.leanF_p_e_l,
                          "doubleLegName":state.const_var.leanFHasDoublelegName,
                    }            
             ) 
            setLeantosAlignment(state.params.leanF_p_d)  
            setLeantosHeightDropDown(state.const_var.dimensionsLeanLHF)
            setLeantosWidthAl(state.params.p_w)  
        break;
      case "back":
            setLeanToDataObj(
                    {
                      ...leanToDataObj,
                          "width":state.params.leanB_p_w,
                          "length":state.params.leanB_p_d,
                          "height":state.params.leanB_p_h,
                          "strWidth":'leanB_w',
                          "strLength":'leanB_l',
                          "strHeight":'leanB_h',
                          "leantoAlignment":state.params.leantoAlignmentBack,
                          "leantoRoofPitch":state.params.b_l_t_r_pB,
                          "leanToWidthObj":state.const_var.dimensionsLeanLWB,
                          "leanToLengthObj":const_var.dimensionsLeanLDB,
                          "leantoFrontWall":'back_leanto_front',
                          "leantoBackWall":'back_leanto_back',
                          "leantoLeftWall":'back_leanto_left',
                          "leantoFrontValue":state.params.p_b_c_b_b_f,
                          "leantoBackValue":state.params.p_b_c_b_b_b,
                          "leantoLeftValue":state.params.p_b_c_b_b_l,  
                          "showDoublelegbaserail":state.const_var.leanBHasDoublelegshow,
                          "disableDoublelegbaserail":state.const_var.leanBHasDoublelegdisable,
                          "doublelegValue":state.params.leanB_p_e_l,
                          "doubleLegName":state.const_var.leanBHasDoublelegName, 
                    }
             )
            setLeantosAlignment(state.params.leanB_p_d) 
            setLeantosHeightDropDown(state.const_var.dimensionsLeanLHB)
            setLeantosWidthAl(state.params.p_w)  

        break;
      case "left":
            setLeanToDataObj(
                    {
                      ...leanToDataObj,
                          "width":state.params.lean_p_w,
                          "length":state.params.lean_p_d,
                          "height":state.params.lean_p_h,
                          "strWidth":'lean_w',
                          "strLength":'lean_l',
                          "strHeight":'lean_h',
                          "leantoAlignment":state.params.leantoAlignmentLeft,
                          "leantoRoofPitch":state.params.b_l_t_r_p,
                          "leanToWidthObj":state.const_var.dimensionsLeanLW,
                          "leanToLengthObj":const_var.dimensionsLeanLD,
                          "leantoFrontWall":'left_leanto_front',
                          "leantoBackWall":'left_leanto_back',
                          "leantoLeftWall":'left_leanto_left',
                          "leantoFrontValue":state.params.p_b_c_b_l_f,
                          "leantoBackValue":state.params.p_b_c_b_l_b,
                          "leantoLeftValue":state.params.p_b_c_b_l,
                          "showDoublelegbaserail":state.const_var.leanHasDoublelegshow,
                          "disableDoublelegbaserail":state.const_var.leanHasDoublelegdisable,
                          "doublelegValue":state.params.lean_p_e_l,
                          "doubleLegName":state.const_var.leanHasDoublelegName,              
                    }
             )
              setLeantosAlignment(state.params.lean_p_d)
              setLeantosHeightDropDown(state.const_var.dimensionsLeanLH)
              setLeantosWidthAl(state.params.p_d)  
        break;
      case "right":
            setLeanToDataObj(
                    {
                      ...leanToDataObj,
                          "width":state.params.leanR_p_w,
                          "length":state.params.leanR_p_d,
                          "height":state.params.leanR_p_h,
                          "strWidth":'leanR_w',
                          "strLength":'leanR_l',
                          "strHeight":'leanR_h',
                          "leantoAlignment":state.params.leantoAlignmentRight,
                          "leantoRoofPitch":state.params.b_l_t_r_pR,
                          "leanToWidthObj":state.const_var.dimensionsLeanLWR,
                          "leanToLengthObj":state.const_var.dimensionsLeanLDR,
                          "leantoFrontWall":'right_leanto_front',
                          "leantoBackWall":'right_leanto_back',
                          "leantoLeftWall":'right_leanto_right',
                          "leantoFrontValue":state.params.p_b_c_b_r_f,
                          "leantoBackValue":state.params.p_b_c_b_r_b,
                          "leantoLeftValue":state.params.p_b_c_b_r,
                          "showDoublelegbaserail":state.const_var.leanRHasDoublelegshow,
                          "disableDoublelegbaserail":state.const_var.leanRHasDoublelegdisable,
                          "doublelegValue":state.params.leanR_p_e_l,
                          "doubleLegName":state.const_var.leanRHasDoublelegName,
                    }
             )
             setLeantosAlignment(state.params.leanR_p_d)
             setLeantosHeightDropDown(state.const_var.dimensionsLeanLHR)  
             setLeantosWidthAl(state.params.p_d)  
        break;
      default:
        break;
    }

    if(leanToDataObj.leantoFrontValue == "Close" && leanToDataObj.leantoBackValue == "Close" && leanToDataObj.leantoLeftValue == "Close"){
        setSidesEndsWallFlag("close")
    }else if(leanToDataObj.leantoFrontValue == "Open" && leanToDataObj.leantoBackValue == "Open" && leanToDataObj.leantoLeftValue == "Open"){
        setSidesEndsWallFlag("open")
    }else{
        setSidesEndsWallFlag("partial")
    }
  },[checkwallposition,state,leanToDataObj.leantoFrontValue,leanToDataObj.leantoBackValue,leanToDataObj.leantoLeftValue]);
  if(checkwallposition == ""){
    return null
  } else{
    return (

      <>
        <div className="prow tab-data-padding leanto-appearance-container">
          <div className='pcol-3'>
            <h3>Width</h3>
            <div className='input-select form-element'>
              <label class='select'>
                <select
                onChange={(e)=>dispatch(changeBuildingDimension({val: e.target.value, str: leanToDataObj.strWidth, checkLean:checkwallposition,checkCustomDimension:'',secondParam:'' ,leftFront:state.params.add_left_front_lean_porch, rightFront:state.params.add_right_front_lean_porch,leftBack:state.params.add_left_back_lean_porch, rightBack:state.params.add_right_back_lean_porch}))}
                value={leanToDataObj.width}
                >
                  <optgroup label="Standard">
                    {leanToDataObj.leanToWidthObj!=undefined && leanToDataObj.leanToWidthObj[0]?.options.map((data)=><option value={data.value}>{data.value}</option>)}
                  </optgroup>
                  <optgroup label="Custom">
                    {leanToDataObj.leanToWidthObj!=undefined && leanToDataObj.leanToWidthObj[1]?.options.map((data)=><option value={data.value}>{data.value}</option>)}
                  </optgroup>
                </select>
              </label>
            </div>
          </div>
          <div className='pcol-3'>
            <h3>Length</h3>
            <div className='input-select form-element'>
              <label class='select'>
                <select
                onChange={(e)=>dispatch(changeBuildingDimension({val: e.target.value, str: leanToDataObj.strLength, checkLean:checkwallposition,checkCustomDimension:'',secondParam:'' ,leftFront:state.params.add_left_front_lean_porch, rightFront:state.params.add_right_front_lean_porch,leftBack:state.params.add_left_back_lean_porch, rightBack:state.params.add_right_back_lean_porch}))}
                value={leanToDataObj.length}
                >
                  <optgroup label="Standard">
                    {leanToDataObj.leanToLengthObj!=undefined && leanToDataObj.leanToLengthObj[0]?.options.map((data)=><option value={data.value}>{data.value}</option>)}
                  </optgroup>
                  <optgroup label="Custom">
                    {leanToDataObj.leanToLengthObj!=undefined && leanToDataObj.leanToLengthObj[1]?.options.map((data)=><option value={data.value}>{data.value}</option>)}
                  </optgroup>
                </select>
              </label>
            </div>
          </div>
          <div className='pcol-3'>
            <h3>Height</h3>
            <div className='input-select form-element'>
              <label class='select'>
                <select
                  onChange={(e)=>dispatch(changeBuildingDimension({val: e.target.value, str: leanToDataObj.strHeight, checkLean:checkwallposition,checkCustomDimension:'',secondParam:'' ,leftFront:state.params.add_left_front_lean_porch, rightFront:state.params.add_right_front_lean_porch,leftBack:state.params.add_left_back_lean_porch, rightBack:state.params.add_right_back_lean_porch}))}
                  value={leanToDataObj.height}
                >
                  {leantosHeightDropDown.length>0 && leantosHeightDropDown?.map((data)=><option value={data}>{data}</option>)}
                </select>
              </label>
            </div>
          
          {leanToDataObj.showDoublelegbaserail === true ?
            <div className={leanToDataObj.disableDoublelegbaserail ?'input-radio form-element mt-10 disabled':'input-radio form-element mt-10'}>
              <div className='input-box'>
                <input 
                  id={`${leanToDataObj.doublelegValue}`}
                  className='none-check-icon' 
                  type='radio' 
                  checked={leanToDataObj.doublelegValue} 
                  onClick={(e) => dispatch(hasDoublelegBaiserail(e.target.value, `${checkwallposition}Lean`))}/>
                <label for={`${leanToDataObj.doublelegValue}`} className='label-pointer'>{(!leanToDataObj.doubleLegName.includes("Baserails")) ? leanToDataObj.doubleLegName +" Baserail ": leanToDataObj.doubleLegName}</label>
              </div>
            </div>
          :null}
          </div>
        </div>
        <section className="tab-data-padding">
          <div className="prow mt-20">
              <div className="roof-pitch-container">
                <div className="pcol-12 md-hidden">
                  <h3>Lean-To Roof Pitch</h3>
                </div>
                <div className="w-auto md-show mr-15">
                  <h3>Lean-To Roof Pitch :</h3>
                </div>
                {Object.entries(state.const_var.BuildingLRoofPitch).map(([key, value])=>
                  <div className="roof-pitch">
                    <input id={key} type="radio" className="none-check-icon" name="roof-pitch" value={value} checked={leanToDataObj.leantoRoofPitch == value ? true : false} onClick={(e) => dispatch((changeBuildingRoof({event: e.target.value, value:checkwallposition})))}/>
                    <label className="label-pointer" for={key}>{key}</label>
                  </div>
                )}
              </div>
           {(leantosAlignment < leantosWidthAl  ) ?
            <div className='pcol-3'>
              <h3>Alignment:</h3>
              <div className='input-select form-element'>
                  <label class='select'>
                  <select
                    onChange={e => dispatch(changeLeantoPosition({event: e.target.value, value: checkwallposition}))}
                    value = {leanToDataObj.leantoAlignment}
                  >
                    {AlignmentArr.map((data)=><option value={data.value}>{data.label}</option>)}
                  </select>
                  </label>
              </div>
            </div>:null}
          </div>
        </section>

        <section className="tab-data-padding">
          <div className="prow mt-5">
            <div className="prow side-ends sides-pcol-3">
              <div className='pcol-12 d-flex align-items-center lean-side-ends' style={{width:(window.innerWidth < 1279 && window.innerWidth > 992) && 'auto'}}>
                <h3 className='md-hidden'>Lean-To Sides & Ends</h3>
                <h3 className='md-show mt-0 mb-0'>Lean-To Sides & Ends :</h3>
              </div>
              <div className='pcol-3 w-auto horizontal-mr lean-side-ends'>
                  <div className='input-checkbox form-element'>
                      <div className='input-box'>
                      <input id='partiallean' className="side-ends" type='checkbox' value='yes' checked={sidesEndsWallFlag == "partial"}
                      onClick={(e)=>setSidesEndsWallFlag("partial")}/>
                      <label for='partiallean' className="label-pointer">Partial</label>
                      </div>
                  </div>
              </div>
              <div className='pcol-3 w-auto horizontal-mr lean-side-ends'>
                  <div className='input-checkbox form-element'>
                    <div className='input-box'>
                    <input id='openlean' className="side-ends" type='checkbox'  checked={sidesEndsWallFlag == "open"}
                    onClick={e => {
                        dispatch(handleLeanToWallSelectonChangeValue("Open", leanToDataObj.leantoFrontWall, checkwallposition));
                        dispatch(handleLeanToWallSelectonChangeValue("Open", leanToDataObj.leantoBackWall, checkwallposition)); 
                        dispatch(handleLeanToWallSelectonChangeValue("Open", leanToDataObj.leantoLeftWall, checkwallposition));
                        setSidesEndsWallFlag("open")
                      }} value='yes' />
                    <label for='openlean' className="label-pointer">Open</label>
                    </div>
                  </div>
              </div>
              <div className='pcol-3 w-auto'>
                  <div className='input-checkbox form-element lean-side-ends'>
                    <div className='input-box'>
                    <input id='closed' className="side-ends" type='checkbox'  checked={sidesEndsWallFlag == "close"}
                    onClick={e => {
                      if(leanToDataObj.leantoFrontWall !== "Close"){
                        dispatch(handleLeanToWallSelectonChangeValue("Close", leanToDataObj.leantoFrontWall, checkwallposition));
                      }
                      if(leanToDataObj.leantoBackWall !== "Close"){
                        dispatch(handleLeanToWallSelectonChangeValue("Close", leanToDataObj.leantoBackWall, checkwallposition)); 
                      }
                      if(leanToDataObj.leantoLeftWall !== "Close"){
                        dispatch(handleLeanToWallSelectonChangeValue("Close", leanToDataObj.leantoLeftWall, checkwallposition));
                      }
                      setSidesEndsWallFlag("close")
                      }} value='yes' />
                    <label for='closed' className="label-pointer">Closed</label>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section>

        {sidesEndsWallFlag == "partial" && 
          <section className="siding-section-container">
            <div className="siding-section">
              <div className="prow lean-sides">
                <div className='pcol-3'>
                  <h3>Front</h3>
                  <div className='input-select form-element'>
                    <label class='select'>
                      <select
                        onChange={e => dispatch(handleLeanToWallSelectonChangeValue(e.target.value, leanToDataObj.leantoFrontWall, checkwallposition))}
                        value={leanToDataObj.leantoFrontValue}
                      >
                      {Object.entries((checkwallposition == "front" || checkwallposition == "back") ? state[checkwallposition + "lentoSides"] : state[checkwallposition + "lentoEnds"]).map(([key, value], index) => <option value={value}>{key}</option>)}
                      </select>
                    </label>
                  </div>
                </div>
                <div className='pcol-3'>
                  <h3>Back</h3>
                  <div className='input-select form-element'>
                    <label class='select'>
                      <select
                        onChange={e => dispatch(handleLeanToWallSelectonChangeValue(e.target.value, leanToDataObj.leantoBackWall, checkwallposition))}
                        value={leanToDataObj.leantoBackValue}
                      >
                      {Object.entries((checkwallposition == "front" || checkwallposition == "back") ? state[checkwallposition + "lentoSides"] : state[checkwallposition + "lentoEnds"]).map(([key, value], index) => <option value={value}>{key}</option>)}

                      </select>
                    </label>
                  </div>
                </div>
                <div className='pcol-3'>
                  <h3>Side</h3>
                  <div className='input-select form-element'>
                    <label class='select'>
                    <select
                        onChange={e => dispatch(handleLeanToWallSelectonChangeValue(e.target.value, leanToDataObj.leantoLeftWall, checkwallposition))}
                        value={leanToDataObj.leantoLeftValue}                        
                      >
                      {Object.entries((checkwallposition == "front" || checkwallposition == "back") ? state[checkwallposition + "lentoEnds"] : state[checkwallposition + "lentoSides"]).map(([key, value], index) => <option value={value}>{key}</option>)}
                      </select>
                    </label>
                  </div>
                </div>   
              </div>
              <div className="top-arrow"></div>
            </div>
          </section>
        }
        
     </>
     
    )
}
}

export default Position