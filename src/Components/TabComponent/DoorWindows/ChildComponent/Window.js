import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDoorComponent, changeComponentSize, removeComponent, updateDoorComponent } from "../../../../action";
import delete_icon from '../../../../assets/images/deleteIcon/deleteIcon.svg';

const Window = ({addedComponentsData, type})=> {
  const dispatch = useDispatch();

  const state = useSelector((state)=>state.reducer)

  // let windowData = Object.entries(state.const_var.newComponentArray).filter(([key,value]) => key == "Windows" )

  const [window, setWindow] = useState("Windows");

  let windowObjectData = (state.const_var.newComponentArray['Windows'] != undefined && state.const_var.newComponentArray['Windows']["standard_window"] != undefined ) ?  Object.entries(state.const_var.newComponentArray['Windows']["standard_window"]).map(([key1,value1],index1)=> value1) : []
  let windowObjectArray = windowObjectData[0]

  let windowType = ""
  let windowCategory = ""
  let windowSize = ""

  if(windowObjectArray != undefined && windowObjectArray.length > 0) {
    windowType = windowObjectArray[0]?.door_type
    windowCategory = windowObjectArray[0]?.door_category
    windowSize = windowObjectArray[0]?.name
  }
  
  
  let checkWallOpen = true;
  if(state.const_var.scene != "") {
      const activeWall = type == "centerbuilding" ? state.activeWall: state.activeLeanWalls[type];
      let activeWallObj = state.const_var.scene?.getObjectByName(activeWall);
      if (activeWallObj) {
        checkWallOpen = activeWallObj.visible;
      }
  }
  
    return (
        <>
          <div className={checkWallOpen? "prow mt-20": "prow mt-20 disabled"}>
            {
              addedComponentsData?.length > 0 && addedComponentsData?.filter((item) => item.parent_array_key == "Windows")?.map((entryPoint) => {

                let findIndex = state.const_var.entry_points.findIndex(entry_points => entry_points.uniqueId == entryPoint?.uniqueId);
                 
                return (
                  (type == "centerbuilding" ? entryPoint?.component_wall_name == state.activeWall : entryPoint?.component_wall_name == state.activeLeanWalls[type]) && <div className="dw-section-repeat">
                    <div className="prow">
                      {/* <div className='pcol-4'>
                        <h3>Window</h3>
                        <div className='input-select form-element'>
                          <label class='select'>
                            <select
                            value={entryPoint?.parent_array_key}
                              onChange={(e) => {
                                dispatch(updateDoorComponent(entryPoint?.uniqueId, entryPoint?.component_name,findIndex))
                              
                                let kkey = ''
                                let kkey1 = ''
                                let vvalue1 = []
                                // setWindow(e.target.value)
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
                                if(e.target.value == "Windows") {
                                  n = "window"
                                } 
                                     
                                dispatch(addDoorComponent(
                                  n,
                                  kkey,
                                  state.activeWall,
                                  vvalue1[0].name,
                                  e.target.value,
                                  kkey,
                                  kkey1,
                                  vvalue1[0]
                                ))                       
                              }}
                            > 
                              {
                                windowData?.map((item) => {
                                  let doorType = item[0].replace(/_/g, ' ').replace(/\b[a-z]/g, letter => letter.toUpperCase());
                                  return <option value={item[0]}>{doorType}</option> 
                                })
                              }
                            </select>
                          </label>
                        </div>
                      </div> */}

                      <div className='pcol-4'>
                        <h3>Window Type</h3>
                        <div className='input-select form-element'>
                          <label class='select'>
                            <select
                              value={entryPoint?.nested_array_key}
                              onChange={(e)=> {
                                dispatch(updateDoorComponent(entryPoint?.uniqueId, entryPoint?.component_name,findIndex))
                                
                                if(e.target.options[e.target.selectedIndex]?.dataset.value1!=undefined){
                                  let val = JSON.parse(e.target.options[e.target.selectedIndex].dataset.value1)

                                let n = ""
                                if(window == "Windows") {
                                  n = "window"
                                }

                                dispatch(addDoorComponent(
                                    n,
                                    e.target.options[e.target.selectedIndex].id,
                                    state.activeWall,
                                    val[0].name,
                                    window,
                                    e.target.options[e.target.selectedIndex].id,
                                    e.target.options[e.target.selectedIndex].text,
                                    val[0]
                                ));
                              }
                            }}
                            > 
                              {
                                (state.const_var.newComponentArray[entryPoint?.parent_array_key]!=undefined)?
                                  Object.entries(state.const_var.newComponentArray[entryPoint?.parent_array_key]).map(([key, value], index)=>{
                                    return(Object.entries(state.const_var.newComponentArray[entryPoint?.parent_array_key][key]).map(([key1,value1],index1)=>{
                                      return( 
                                        <option id={key} value={key1} data-value1={JSON.stringify(value1)} >{key1}</option>
                                      )
                                      }
                                    ))
                                  })
                                : null 
                              }
                            </select>
                          </label>
                        </div>
                      </div>

                
                      {
                        (window == "Windows" || window == "Windows_Frameout" ) && <div className='pcol-4'>
                            <div className="d-flex">
                              <h3>Size&nbsp;</h3><span className="inch-font-style">(In Inch)</span>
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
                                          return(
                                            <option value={entryPoint?.name}>
                                              {entryPoint?.name}
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
                      }
                    </div>
                </div>
                )
                })
            }                                   
            <div className="dw-add-cta"  >
              <a className="custom-btn-2" 
                  onClick={(e) => {
                    dispatch(addDoorComponent("window",windowType,type == "centerbuilding" ? state.activeWall : state.activeLeanWalls[type],windowSize,"Windows",windowType,windowCategory));
                  }}>
                    <span className="icon-plus icon"></span>
                    <span className="text" >Add Window</span>
              </a>
            </div>
          </div>
        </>
    )
}

export default Window;