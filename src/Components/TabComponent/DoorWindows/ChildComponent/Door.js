import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDoorComponent, changeComponentSize, removeComponent, updateDoorComponent } from "../../../../action";
import delete_icon from '../../../../assets/images/deleteIcon/deleteIcon.svg';

const Door = ({addedComponentsData,type,door_type})=> {

  const dispatch = useDispatch();

  const state = useSelector((state)=>state.reducer)

  const [door, setDoor] = useState("Garage");

useEffect(()=>{
  if(door_type == "garageDoor"){
    setDoor("Garage")
  }else{
    setDoor("Walk")
  }
},[door_type])

  let doorData = Object.entries(state.const_var.newComponentArray).filter(([key,value]) => !key.includes("Windows") && !key.includes("Garage_Frameout") && !key.includes("Walk_Frameout"))

  let doorObjectData = (state.const_var.newComponentArray['Garage'] != undefined && state.const_var.newComponentArray['Garage']["standard_door"] != undefined ) ?  Object.entries(state.const_var.newComponentArray['Garage']["standard_door"]).map(([key1,value1],index1)=> value1) : []
  if(door_type == "walkInDoor") doorObjectData = (state.const_var.newComponentArray['Walk'] != undefined && state.const_var.newComponentArray['Walk']["standard_walkin"] != undefined ) ?  Object.entries(state.const_var.newComponentArray['Walk']["standard_walkin"]).map(([key1,value1],index1)=> value1) : []
  let doorObjectArray = doorObjectData[0]

  let doorCategory = ""
  let doorType = ""
  let doorSize = ""

  if(doorObjectArray != undefined && doorObjectArray.length > 0) {
    doorCategory = doorObjectArray[0]?.door_category
    doorType = doorObjectArray[0]?.door_type
    doorSize = doorObjectArray[0]?.name
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
          <div className={checkWallOpen? "prow pt-20": "prow pt-20 disabled"}>
            {
              addedComponentsData?.length > 0 && addedComponentsData?.filter((item) => (item.parent_array_key == "Garage" && door_type == "garageDoor") ||
                (item.parent_array_key == "Walk" && door_type == "walkInDoor")
              )?.map((entryPoint) => {
          
                let findIndex = state.const_var.entry_points.findIndex(entry_points => entry_points.uniqueId == entryPoint?.uniqueId);
                
                return (
                  (type == "centerbuilding" ? entryPoint?.component_wall_name == state.activeWall : entryPoint?.component_wall_name == state.activeLeanWalls[type]) && <div className="dw-section-repeat">
                    <div className="prow">
                      {
                      ((entryPoint?.parent_array_key == "Garage" && door_type == "garageDoor") || (entryPoint?.parent_array_key == "Walk" && door_type == "walkInDoor")) && <div className='pcol-4'>
                        <h3>Door Type</h3>
                        <div className='input-select form-element'>
                          <label class='select'>
                            <select
                              value={entryPoint?.nested_array_key}
                              onChange={(e)=> {
                                state.const_var.changingComponentType = true;
                                dispatch(updateDoorComponent(entryPoint?.uniqueId, entryPoint?.component_name,findIndex))
                                
                                if(e.target.options[e.target.selectedIndex]?.dataset.value1!=undefined){
                                  let val = JSON.parse(e.target.options[e.target.selectedIndex].dataset.value1)

                                let n = ""
                                if(door == "Garage") {
                                  n = "garage_door"
                                } 

                                if(door == "Walk") {
                                  n = "walkin"
                                }

                                dispatch(addDoorComponent(
                                    n,
                                    e.target.options[e.target.selectedIndex].id,
                                    state.activeWall,
                                    val[0].name,
                                    door,
                                    e.target.options[e.target.selectedIndex].id,
                                    e.target.options[e.target.selectedIndex].text,
                                    val[0]
                                ));

                                state.const_var.changingComponentType = false;
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
            }

                
                      {
                      ((entryPoint?.parent_array_key == "Garage" && door_type == "garageDoor") || (entryPoint?.parent_array_key == "Walk" && door_type == "walkInDoor")) && <div className='pcol-4'>
                        <div style={{display:'flex'}}>
                          <h3>Size&nbsp;</h3><span className="inch-font-style">(In feet)</span>
                        </div>
                        <div className='input-select form-element'>
                          <label class='select'>
                            <select
                              value={entryPoint != undefined && entryPoint?.entry_doorNewType==undefined? entryPoint?.name:entryPoint?.entry_doorNewType}
                              onChange={(e) =>dispatch(changeComponentSize(e.target.value, entryPoint?.uniqueId,entryPoint))}
                            > 
                              {
                                (state.const_var.newComponentArray[entryPoint?.parent_array_key][entryPoint?.child_array_key][entryPoint?.nested_array_key]["Size"]!=undefined)?
                                    Object.entries(state.const_var.newComponentArray[entryPoint?.parent_array_key][entryPoint?.child_array_key][entryPoint?.nested_array_key]["Size"]).map(([key, value], index)=>{
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
                          <div className='d-flex justify-center align-item-center del-ico' onClick={(e)=> {
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
                      if(door_type == "garageDoor"){
                        dispatch(addDoorComponent("garage_door",doorType,type == "centerbuilding" ? state.activeWall : state.activeLeanWalls[type],doorSize,"Garage",doorType,doorCategory,doorObjectArray?.[0]));
                      }else{
                        dispatch(addDoorComponent("walkin",doorType,type == "centerbuilding" ? state.activeWall : state.activeLeanWalls[type],doorSize,"Walk",doorType,doorCategory,doorObjectArray?.[0]));
                      }
                    }}
                >
                  <span className="icon-plus icon"></span>
                  <span className="text" >{(door_type == "garageDoor")?"Add Door" : "Add Walk-in Door"}</span>
                </a>
              </div>   
              
          </div>   
        </>
    )
}

export default Door