import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDoorComponent, changeComponentSize, removeComponent, updateDoorComponent } from "../../../../action";
import delete_icon from '../../../../assets/images/deleteIcon/deleteIcon.svg';

const DoorFrameOut = ({addedComponentsData,type})=> {

  const dispatch = useDispatch();

  const state = useSelector((state)=>state.reducer)

  let doorFrameoutObjectData = (state.const_var.newComponentArray['Garage_Frameout'] != undefined && state.const_var.newComponentArray['Garage_Frameout']["standard_door"] != undefined ) ?  Object.entries(state.const_var.newComponentArray['Garage_Frameout']["standard_door"]).map(([key1,value1],index1)=> key1) : []
  let doorFrameoutType = ""
  let doorFrameoutCategory = ""

  if(doorFrameoutObjectData != undefined && doorFrameoutObjectData.length > 0) {
    doorFrameoutType = "standard_door"
    doorFrameoutCategory = doorFrameoutObjectData[0]
  
  }
  let doorData = Object.entries(state.const_var.newComponentArray).filter(([key,value]) => key != "Windows" && !(key == "Garage") && !(key == "Walk"))
  let windowSize = doorData.length > 0 && doorData[1][1].standard_window?.Standard[0].name
  let walkinSize = doorData.length > 0 && doorData[2][1].standard_walkin["Man Door"][0].name 
  
  let isFrameoutDisableWalls = (state.params.activeWall == 'c_b_f_w' && state.params.p_f_w != "Close" ) || 
  (state.params.activeWall == 'c_b_b_w' && state.params.p_b_w != "Close") || 
  (state.params.activeWall == 'L_L_F_W' && state.params.p_b_c_b_l_f != "Close") ||
  (state.params.activeWall == 'L_L_B_W' && state.params.p_b_c_b_l_b != "Close") || 
  (state.params.activeWall == 'R_L_F_W' && state.params.p_b_c_b_r_f != "Close") || 
  (state.params.activeWall == 'R_L_B_W' && state.params.p_b_c_b_r_b != "Close") ||
  (state.params.activeWall == 'F_L_R_W' && state.params.p_b_c_b_f_f != "Close") ||
  (state.params.activeWall == 'F_L_L_W' && state.params.p_b_c_b_f_b != "Close") ||
  (state.params.activeWall == 'B_L_F_W' && state.params.p_b_c_b_b_f != "Close") ||
  (state.params.activeWall == 'B_L_B_W' && state.params.p_b_c_b_b_b != "Close");

  return (
        <>
          <div className='prow mt-20'>
            {
              addedComponentsData?.length > 0 && addedComponentsData?.filter((item) => 
              item.parent_array_key == "Garage_Frameout"
              )?.map((entryPoint) => {
                let findIndex = state.const_var.entry_points.findIndex(entry_points => entry_points.uniqueId == entryPoint?.uniqueId);
                let maxWidth1 = '';
                let maxHeight1 = '';
                let minWidth1 = '';
                let minHeight1 = '';

                if(entryPoint?.parent_array_key=="Walk" || entryPoint?.parent_array_key=="Walk_Frameout" || entryPoint?.parent_array_key == "Windows_Frameout")
                {
                  maxWidth1 = 72;
                  maxHeight1 = 84;
                  minWidth1 = 24;
                  minHeight1 = 60;
                }
                return (
                  (type == "centerbuilding" ? entryPoint?.component_wall_name == state.activeWall : entryPoint?.component_wall_name == state.activeLeanWalls[type]) && <div className="dw-section-repeat">
                    <div className="prow">
                      <div className='pcol-4'>
                        <h3>Door Frameout</h3> 
                        <div className='input-select form-element'>
                          <label class='select'>
                            <select
                            value={entryPoint?.parent_array_key}
                              onChange={(e) => {
                            
                                let selectedUniqueId = e.target.options[e.target.selectedIndex].id;
                                dispatch(updateDoorComponent(selectedUniqueId, entryPoint?.component_name,findIndex))
                              
                                let kkey = ''
                                let kkey1 = ''
                                let vvalue1 = []
                                if(state.const_var.newComponentArray[e.target.value] != undefined) {
                                  Object.entries(state.const_var.newComponentArray[e.target.value]).map(([key, value], index)=>{
                                    return(
                                    Object.entries(state.const_var.newComponentArray[e.target.value][key]).map(([key1,value1],index1)=> {
                                    if(index1 === 0) {
                                      kkey = key;
                                      kkey1 = key1;
                                      vvalue1 = value1
                                      return value1
                                    }
                                    })
                                    )
                                })
                                }

                                let n = ""
                        
                                if(e.target.value == "Garage_Frameout") {
                                  n = "garage_door_frameout"
                                }

                                if(e.target.value == "Walk_Frameout") {
                                  n = "walkin_frameout"
                                }

                                if(e.target.value == "Windows_Frameout") {
                                  n = "window_frameout"
                                }
                                


                                if(e.target.value == "Garage_Frameout" ){
                                  dispatch(addDoorComponent(
                                    n,
                                    kkey,
                                    entryPoint.component_wall_name,
                                    state.const_var.customFrameoutInitialSize,
                                    "Garage_Frameout",
                                    kkey,
                                    kkey1,
                                    vvalue1[0]
                                  ))

                                } else {
                                  dispatch(addDoorComponent(
                                    n,
                                    kkey,
                                    entryPoint.component_wall_name,
                                    vvalue1[0].name,
                                    e.target.value,
                                    kkey,
                                    kkey1,
                                    vvalue1[0]
                                  ))

                                } 
                                
                              }}
                            > 
                              {
                                doorData?.map((el) => {
                                  // console.log(el, "doorType")
                                  let doorType = el[0].replace(/_/g, ' ').replace(/\b[a-z]/g, letter => letter.toUpperCase());
                                  // console.log(doorType,"doorType")
                                  return <option id={entryPoint?.uniqueId}  value={el[0]}>{doorType}</option> 
                                })
                              }
                            </select>
                          </label>
                        </div>
                      </div>
                
                      {/* {
                      (entryPoint?.parent_array_key == "Walk_Frameout") && <><div className='pcol-3'>
                        <h3>Width</h3>
                        <div className='input-select form-element'>
                          <label class='select'>
                            <select
                              value={entryPoint.name.split("x")[0]}
                              onChange={(e) =>dispatch(changeComponentSize(e.target.value+'x'+entryPoint.name.split("x")[1], entryPoint?.uniqueId,entryPoint))}
                            > 
                              {
                                Array.apply(null, { length: maxWidth1 + 1 }).map(Number.call, Number).slice(minWidth1).map((value, index)=>{
                                      return(
                                        <option value={value}>
                                          {value}
                                        </option>
                                    )
                                  }) 
                              }
                              </select>
                            </label>
                          </div>
                        </div>
                        <div className='pcol-4'>
                            <h3>Height</h3>
                            <div className='input-select form-element'>
                              <label class='select'>
                              <select
                                  value={entryPoint.name.split("x")[1]}
                                  onChange={(e) =>dispatch(changeComponentSize(entryPoint?.name.split("x")[0]+'x'+e.target.value, entryPoint?.uniqueId,entryPoint))}
                                > 
                                  {
                                    Array.apply(null, { length: maxHeight1 + 1 }).map(Number.call, Number).slice(minHeight1).map((value, index)=>{
                                          return(
                                            <option value={value}>
                                              {value}
                                            </option>
                                        )
                                      }) 
                                  }
                                  </select>
                                </label>
                              </div>
                            </div>
                      </>
                      } */}


                      <div className='pcol-2'>
                        <div className="d-flex">
                          <h3 className="feet-space">Width</h3><span className="inch-font-style pl-5">(In feet)</span>
                        </div>
                        <div className='input-select form-element'>
                          <label class='select'>
                            <select
                              value={entryPoint?.entry_dimension_width}
                              onChange={(e)=>dispatch(changeComponentSize(e.target.value+'x'+entryPoint.entry_dimension_height,entryPoint?.uniqueId,entryPoint))}
                            > 
                              {
                                (state.const_var.newComponentArray[entryPoint?.parent_array_key][entryPoint?.child_array_key][entryPoint?.nested_array_key]["Width"]!=undefined)?
                                    Object.entries(state.const_var.newComponentArray[entryPoint?.parent_array_key][entryPoint?.child_array_key][entryPoint?.nested_array_key]["Width"]).map(([key, value], index)=>{
                                      return(
                                        <option value={key}>
                                          {key}’
                                        </option>
                                    )
                                        })
                                    :null 
                              }
                            </select>
                          </label>
                        </div>
                      </div>     

                      <div className='pcol-2'>
                        <div className="d-flex">
                          <h3 className="feet-space">Height</h3><span className="inch-font-style pl-5">(In feet)</span>
                        </div>
                        <div className='input-select form-element'>
                          <label class='select'>
                            <select
                              value={entryPoint?.entry_dimension_height}
                              onChange={(e)=>dispatch(changeComponentSize(entryPoint?.entry_dimension_width+'x'+e.target.value,entryPoint?.uniqueId,entryPoint))}
                            > 
                              {
                                (state.const_var.newComponentArray[entryPoint?.parent_array_key][entryPoint?.child_array_key][entryPoint?.nested_array_key]["Height"]!=undefined)?
                                  Object.entries(state.const_var.newComponentArray[entryPoint?.parent_array_key][entryPoint?.child_array_key][entryPoint?.nested_array_key]["Height"]).map(([key, value], index)=>{
                                    return(
                                      <option value={key}>
                                        {key}’
                                      </option>
                                    )
                                })
                                :null 
                              }
                            </select>
                          </label>
                        </div>
                        <div className='del-ico d-flex justify-center align-item-center' onClick={(e)=> {
                            dispatch(removeComponent(entryPoint?.uniqueId,entryPoint?.component_name,findIndex))
                        }}>
                          <a className="remove-dw-cta"><img src={delete_icon} alt="delete-img" /></a>
                        </div>
                      </div>     


                      
                    </div>
                </div>
                )
              })
            }              
              
           
          </div>   
          <div className='prow'>
            {
              addedComponentsData?.length > 0 && addedComponentsData?.filter((item) => 
              item.parent_array_key == "Walk_Frameout" || item.parent_array_key == "Windows_Frameout"
              )?.map((entryPoint) => {
              // console.log(entryPoint,"entryPoint")
                let findIndex = state.const_var.entry_points.findIndex(entry_points => entry_points.uniqueId == entryPoint?.uniqueId);
                let maxWidth1 = '';
                let maxHeight1 = '';
                let minWidth1 = '';
                let minHeight1 = '';

                if(entryPoint?.parent_array_key=="Walk" || entryPoint?.parent_array_key=="Walk_Frameout" || entryPoint?.parent_array_key == "Windows_Frameout")
                {
                  maxWidth1 = 72;
                  maxHeight1 = 84;
                  minWidth1 = 24;
                  minHeight1 = 60;
                }
                return (
                  (type == "centerbuilding" ? entryPoint?.component_wall_name == state.activeWall : entryPoint?.component_wall_name == state.activeLeanWalls[type]) && <div className="dw-section-repeat">
                    <div className="prow">
                      <div className='pcol-4'>
                        <h3>Walk-in & Window Frameout</h3> 
                        <div className='input-select form-element'>
                          <label class='select'>
                            <select
                            value={entryPoint?.parent_array_key}
                              onChange={(e) => {
                            
                                let selectedUniqueId = e.target.options[e.target.selectedIndex].id;
                                dispatch(updateDoorComponent(selectedUniqueId, entryPoint?.component_name,findIndex))
                              
                                let kkey = ''
                                let kkey1 = ''
                                let vvalue1 = []
                                if(state.const_var.newComponentArray[e.target.value] != undefined) {
                                  Object.entries(state.const_var.newComponentArray[e.target.value]).map(([key, value], index)=>{
                                    return(
                                    Object.entries(state.const_var.newComponentArray[e.target.value][key]).map(([key1,value1],index1)=> {
                                    if(index1 === 0) {
                                      kkey = key;
                                      kkey1 = key1;
                                      vvalue1 = value1
                                      return value1
                                    }
                                    })
                                    )
                                })
                                }

                                let n = ""
                        
                                if(e.target.value == "Walk_Frameout") {
                                  n = "walkin_frameout"
                                }
                                if(e.target.value == "Windows_Frameout") {
                                  n = "window_frameout"
                                } 

                                if(e.target.value == "Garage_Frameout") {
                                  n = "garage_door_frameout"
                                } 

                                dispatch(addDoorComponent(
                                  n,
                                  kkey,
                                  state.activeWall,
                                  e.target.value == "Garage_Frameout" ? state.const_var.customFrameoutInitialSize: vvalue1[0].name,
                                  e.target.value,
                                  kkey,
                                  kkey1,
                                  vvalue1[0]
                                ))
                                
                              }}
                            > 
                              {
                                doorData?.map((el) => {
                                  // console.log(el, "doorType")
                                  let doorType = el[0].replace(/_/g, ' ').replace(/\b[a-z]/g, letter => letter.toUpperCase());
                                  // console.log(doorType,"doorType")
                                  return <option id={entryPoint?.uniqueId}  value={el[0]}>{doorType}</option> 
                                })
                              }
                            </select>
                          </label>
                        </div>
                      </div>
                
                      {/* {
                      (entryPoint?.parent_array_key == "Walk_Frameout") && <><div className='pcol-3'>
                        <h3>Width</h3>
                        <div className='input-select form-element'>
                          <label class='select'>
                            <select
                              value={entryPoint.name.split("x")[0]}
                              onChange={(e) =>dispatch(changeComponentSize(e.target.value+'x'+entryPoint.name.split("x")[1], entryPoint?.uniqueId,entryPoint))}
                            > 
                              {
                                Array.apply(null, { length: maxWidth1 + 1 }).map(Number.call, Number).slice(minWidth1).map((value, index)=>{
                                      return(
                                        <option value={value}>
                                          {value}
                                        </option>
                                    )
                                  }) 
                              }
                              </select>
                            </label>
                          </div>
                        </div>
                        <div className='pcol-4'>
                            <h3>Height</h3>
                            <div className='input-select form-element'>
                              <label class='select'>
                              <select
                                  value={entryPoint.name.split("x")[1]}
                                  onChange={(e) =>dispatch(changeComponentSize(entryPoint?.name.split("x")[0]+'x'+e.target.value, entryPoint?.uniqueId,entryPoint))}
                                > 
                                  {
                                    Array.apply(null, { length: maxHeight1 + 1 }).map(Number.call, Number).slice(minHeight1).map((value, index)=>{
                                          return(
                                            <option value={value}>
                                              {value}
                                            </option>
                                        )
                                      }) 
                                  }
                                  </select>
                                </label>
                              </div>
                            </div>
                      </>
                      } */}


                      <div className='pcol-4'>
                        <div style={{display:'flex'}}>
                          <h3>Size</h3><span className="inch-font-style pl-5">(In Inch)</span>
                        </div>
                        <div className='input-select form-element'>
                          <label class='select'>
                            <select
                              value={entryPoint != undefined && entryPoint?.entry_doorNewType==undefined? entryPoint?.name:entryPoint?.entry_doorNewType}
                              onChange={(e) => {
                                dispatch(changeComponentSize(e.target.value, entryPoint?.uniqueId,entryPoint));
                              }}
                            > 
                              {
                                (state.const_var.newComponentArray[entryPoint?.parent_array_key][entryPoint?.child_array_key][entryPoint?.nested_array_key]["Size"]!=undefined)?
                                    Object.entries(state.const_var.newComponentArray[entryPoint?.parent_array_key][entryPoint?.child_array_key][entryPoint?.nested_array_key]["Size"]).map(([key, value], index)=>{
                                      // console.log(key,"state.const_var.newComponentArray");
                                      return(
                                        <option value={key}>
                                          {key}
                                        </option>
                                    )
                                        })
                                    :null 
                              }
                            </select>
                          </label>
                        </div>
                        <div className='del-ico d-flex justify-center align-item-center' onClick={(e)=> {
                        dispatch(removeComponent(entryPoint?.uniqueId,entryPoint?.component_name,findIndex))
                      }}>
                        <a className="remove-dw-cta"><img src={delete_icon} alt="delete-img" /></a>
                      </div>
                      </div>

                      
                    </div>
                </div>
                )
              })
            }              
          </div>
          <div className={isFrameoutDisableWalls ? "dw-add-cta disabled": "dw-add-cta"}>
                <a className="custom-btn-2" 
                onClick={(e) => {
                  dispatch(addDoorComponent(
                    "garage_door_frameout",
                    doorFrameoutType,
                    type == "centerbuilding" ? state.activeWall : state.activeLeanWalls[type],
                    state.const_var.customFrameoutInitialSize,
                    "Garage_Frameout",
                    doorFrameoutType,
                    doorFrameoutCategory
                  ))
                }}>
                  <span className="icon-plus icon"></span>
                  <span className="text" >Add Garage Frameout</span>
                </a>
                <a className="custom-btn-2" 
                onClick={(e) => {
                  dispatch(addDoorComponent(
                    "walkin_frameout",
                    'standard_walkin',
                    type == "centerbuilding" ? state.activeWall : state.activeLeanWalls[type],
                    walkinSize,
                    "Walk_Frameout",
                    'standard_walkin',
                    "Man Door",
                    
                    
                  ))
                }}>
                  <span className="icon-plus icon"></span>
                  <span className="text" >Add Walk-In Frameout</span>
                </a>
                <a className="custom-btn-2" 
                onClick={(e) => {
                  dispatch(addDoorComponent(
                    "window_frameout",
                    'standard_window',
                    type == "centerbuilding" ? state.activeWall : state.activeLeanWalls[type],
                    windowSize,
                    "Windows_Frameout",
                    'standard_window',
                    "Standard"
                  ))
                }}>
                  <span className="icon-plus icon"></span>
                  <span className="text" >Add Windows Frameout</span>
                </a>
            </div>
        </>
    )
}

export default DoorFrameOut