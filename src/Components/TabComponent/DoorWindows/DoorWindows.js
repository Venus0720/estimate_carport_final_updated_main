import React, { useState } from 'react'
import Door from './ChildComponent/Door'
import Window from './ChildComponent/Window'
import DoorsChangeWallTab from '../../Common/DoorsChangeWallTab'
import { useDispatch, useSelector } from 'react-redux'
import DoorFrameOut from './ChildComponent/DoorFrameout'
import { cameraFocusOnWall, changeActiveWall } from '../../../action'


const DoorWindows = () => {

  // const [state.const_var.wallSectionTab, setstate.const_var.wallSectionTab] = useState("Center Building");
  const state = useSelector((state) => state.reducer)
  const dispatch = useDispatch()

  const wallsContainingComp = state.const_var.entry_points?.map((item) => item?.component_wall_name)
  let centralBuildingData = state.const_var.entry_points?.filter((item) => item.component_wall_name == "c_b_l_w" ||  item.component_wall_name == "c_b_r_w" ||  item.component_wall_name == "c_b_f_w" || item.component_wall_name == "c_b_b_w" );
  let leftLeanData = state.const_var.entry_points?.filter((item) => item.component_wall_name == "L_L_L_W" ||  item.component_wall_name == "L_L_F_W" ||  item.component_wall_name == "L_L_B_W");
  let rightLeanData = state.const_var.entry_points?.filter((item) => item.component_wall_name == "R_L_F_W" ||  item.component_wall_name == "R_L_B_W" ||  item.component_wall_name == "R_L_R_W")
  let frontLeanData = state.const_var.entry_points?.filter((item) => item.component_wall_name == "F_L_F_W" ||  item.component_wall_name == "F_L_R_W" ||  item.component_wall_name == "F_L_L_W")
  let backLeanData = state.const_var.entry_points?.filter((item) => item.component_wall_name == "B_L_S_W" ||  item.component_wall_name == "B_L_B_W" ||  item.component_wall_name == "B_L_F_W");
  let storageData = state.const_var.entry_points?.filter((item) => item.component_wall_name == "c_b_l_s_w" || item.component_wall_name == "c_b_r_s_w" ||  item.component_wall_name == "c_b_f_s_w" ||  
                                                                      item.component_wall_name == "c_b_l_s_r_w" || item.component_wall_name == "c_b_l_s_f_w" || item.component_wall_name == "c_b_l_s_b_w" || 
                                                                        item.component_wall_name == "c_b_r_s_l_w" ||  item.component_wall_name == "c_b_r_s_f_w" || item.component_wall_name == "c_b_r_s_b_w");
  let wallStorageValues = [
      {   //back storage
          left: (state.params.p_l_w == "Close")?"c_b_f_w":"c_b_l_s_w",
          right: (state.params.p_r_w == "Close")?"c_b_r_w":"c_b_r_s_w",
          back: "c_b_b_w",
          front: "c_b_f_s_w",
      },
      {   //Left storage
          right: "c_b_l_s_r_w",
          front: (state.params.p_f_w == "Close")?"c_b_f_w":"c_b_l_s_f_w",
          back: (state.params.p_b_w == "Close")?"c_b_b_w":"c_b_l_s_b_w",
          left: "c_b_l_w"
      },
      {   //Right storage
          left: "c_b_r_s_l_w",
          front: (state.params.p_f_w == "Close")?"c_b_f_w":"c_b_r_s_f_w",
          back: (state.params.p_b_w == "Close")?"c_b_b_w":"c_b_r_s_b_w",
          right: "c_b_r_w"
      },
  ]
  let selectedWallStorage = state.params.p_u_c ? wallStorageValues[0] : state.params.cB_addStorage_check_left ? wallStorageValues[1] : state.params.cB_addStorage_check_right ? wallStorageValues[2] : null
  const data = [
    {
      title: "Center Building",
      key: true,
      addedComponentsData: centralBuildingData,
      type:"centerbuilding",
      walls: [
        {
          label: "Left",
          value: "c_b_l_w",
        },
        {
          label: "Right",
          value: (state.params.singleSlope)? "F_S_L_R_W" : "c_b_r_w",
        },
        {
          label: "Front",
          value: "c_b_f_w",
        },
        {
          label: "Back",
          value: "c_b_b_w",
        },
      ]
    },
    {
      title: "Center Building Storage",
      key: ( state.params.p_u_c || state.params.cB_addStorage_check_left || state.params.cB_addStorage_check_right ),
      addedComponentsData: storageData,
      type:"centerbuildingStorage",
      walls: [
        {
          label: "Left",
          value: selectedWallStorage?.left
        },
        {
          label: "Right",
          value: (state.params.singleSlope)? "F_S_L_R_W" : selectedWallStorage?.right
        },
        {
          label: "Front",
          value: selectedWallStorage?.front
        },
        {
          label: "Back",
          value: selectedWallStorage?.back
        },
      ]
    },
    {
      title: "Left Lean-to's",
      key: state.params.add_left_lean,
      addedComponentsData: leftLeanData,
      type:"leftlean",
      walls: [
        {
          label: "Side",
          value: "L_L_L_W",
      },
      {
          label: "Front",
          value: "L_L_F_W",
        },
      {
          label: "Back",
          value: "L_L_B_W",
      },
      // {
      //   label: "Right Storage Wall",
      //   value: "L_L_R_S_W",
      // },
      // {
      //   label: "Front Storage Wall",
      //   value: "L_L_F_S_W",
      // },
      // {
      //   label: "Left Storage Wall",
      //   value: "L_L_L_S_W",
      // }
      ]
    },
    {
      title: "Right Lean-to's",
      key: state.params.add_right_lean,
      addedComponentsData: rightLeanData,
      type:"rightlean",
      walls: [
        {
          label: "Front",
          value: "R_L_F_W",
      },
      {
          label: "Back",
          value: "R_L_B_W",
      },
      {
          label: "Side",
          value: "R_L_R_W",
      },
      // {
      //   label: "Left Storage Wall",
      //   value: "R_L_L_S_W",
      // }, 
      // {
      //   label: "Right Storage Wall",
      //   value: "R_L_R_S_W",
      // },
      // {
      //   label: "Front Storage Wall",
      //   value: "R_L_F_S_W",
      // }
      ]
    },
    {
      title: "Front Lean-to's",
      key: state.params.add_front_lean,
      addedComponentsData: frontLeanData,
      type:"frontlean",
      walls: [
        {
          label: "Side",
          value: "F_L_F_W",
        },
        {
            label: "Front",
            value: "F_L_R_W",
        },
        {
            label: "Back",
            value: "F_L_L_W",
        },
        // {
        //   label: "Back Storage Wall",
        //   value: "F_L_B_S_W",
        // },
        // {
        //   label: "Right Storage Wall",
        //   value: "F_L_R_S_W",
        // },
        // {
        //   label: "Front Storage Wall",
        //   value: "F_L_F_S_W",
        // }
      ]
    },
    {
      title: "Back Lean-to's",
      key: state.params.add_back_lean,
      addedComponentsData: backLeanData,
      type:"backlean",
      walls: [
        {
          label: "Side",
          value: "B_L_S_W",
        },
        {
            label: "Back",
            value: "B_L_B_W",
        },
        {
            label: "Front",
            value: "B_L_F_W",
        },

        // {
        //   label: "Back Storage Wall",
        //   value: "B_L_B_S_W",
        // },
        // {
        //   label: "Left Storage Wall",
        //   value: "B_L_L_S_W",
        // },
        // {
        //   label: "Front Storage Wall",
        //   value: "B_L_F_S_W",
        // }
      ]
    }
  ]

  function handleWallChange(val) {
    let checkCloseWall = false;
    let checkWallValue = '';
    // this.setState({wallSelect: e.target.value});
    // console.log(e.target.value,"e.target.value",this.props.const_var.scene.getObjectByName(e.target.value))
    dispatch(cameraFocusOnWall(val));
    checkCloseWall = (state.const_var.scene.getObjectByName(val)!=undefined)?state.const_var.scene.getObjectByName(val).visible:true;
    checkWallValue = state.const_var.checkWallClose[state.params.activeWall];
    if(checkWallValue=='utility')
    {
      checkCloseWall = true;
    }else{
      if(state.params[checkWallValue]!='Close')
      {
        checkCloseWall = false;
      }
    }
    // state.const_var.controls.target.set(0, state.params.p_h / 2, 0);
    //state.cameraFocusOnWall(state, e.target.value);
    let dwIconsDiv = document.getElementById("doorwindowicons");
    dwIconsDiv && dwIconsDiv.classList.add("d-none");
}

  return (
    <div className='tab-data-container mb-door-windows-container'>
      {
        data.map((item , index) => {

          return ( item.key &&
            <div className={ item.title === state.const_var.wallSectionTab ? (index === 0 ? 'dw-repeater-box-inner mb-20' : (index === (data.length - 1) ? 'dw-repeater-box-inner mt-20' : 'dw-repeater-box-inner mt-20 mb-20')) : 'dw-repeater-box-inner mb-tab-building'}>
              <div className='prow'>
                <div className={item.title === state.const_var.wallSectionTab ? 'pcol-12 p-0 center-building-border follow-border' : 'pcol-12 p-0 center-building-border' }>
                  <div className={item.title === state.const_var.wallSectionTab ? 'center-building-container' : 'center-building-container building-header-bar'} >
                    {item.title === state.const_var.wallSectionTab ? <span className='building-position' onClick={(e)=>dispatch({type: 'WALLSECTIONTAB', wallSection: item.type, value: 'close'})}>{item.title} <span className='pointer-line'>-</span></span> : <span onClick={(e)=>dispatch({type: 'WALLSECTIONTAB', wallSection: item.type, value: item.title})}>{item.title}</span> } 
                    {item.title === state.const_var.wallSectionTab ? <p onClick={(e)=>dispatch({type: 'WALLSECTIONTAB', wallSection: item.type, value: 'close'})}>&times;</p> : <p className='plus-icon' onClick={(e)=>dispatch({type: 'WALLSECTIONTAB', wallSection: item.type, value: item.title})}>&times;</p> } 
                  </div>
                  {item.title === state.const_var.wallSectionTab && <DoorsChangeWallTab sectionType="doorandwindow" wallsContainingComp={wallsContainingComp} walls={item.walls} type={item?.type}/>} 
                  <div className='center-building-close'>
                  {item.title === state.const_var.wallSectionTab ? <span onClick={(e)=>dispatch({type: 'WALLSECTIONTAB', wallSection: item.type, value: 'close'})}>&times;</span> : <span className='plus-icon' onClick={(e)=>{
                    dispatch({type: 'WALLSECTIONTAB', wallSection: item.type, value: item.title})
                    dispatch(changeActiveWall(item.walls[0].value))
                    handleWallChange(item.walls[0].value)}}>&times;</span> }
                  </div>
                </div>
              </div> 
              { 
                <div className={ item.title === state.const_var.wallSectionTab ? 'door-window-btn-1' : 'door-window-btn-2' } >
                  <div className='callapse-container'>
                    <Door addedComponentsData={item?.addedComponentsData} type={item?.type} door_type={"garageDoor"}/>
                    <Door addedComponentsData={item?.addedComponentsData} type={item?.type} door_type={"walkInDoor"}/>
                    <Window addedComponentsData={item?.addedComponentsData} type={item?.type}/>
                    <DoorFrameOut addedComponentsData={item?.addedComponentsData} type={item?.type}/>
                  </div>
                </div>
              }
            </div>
          )
        })
      }

    </div>
  )
}

export default DoorWindows
