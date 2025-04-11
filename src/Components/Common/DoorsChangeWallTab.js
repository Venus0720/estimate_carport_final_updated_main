import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addLeantoSection, cameraFocusOnWall, changeActiveLeanWall, changeActiveWall, changeWallName } from '../../action/index'
import { params } from '../../Constants/constant'

const DoorsChangeWallTab = ({sectionType,wallsContainingComp,walls,type,title}) => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.reducer)

  const checkwallposition = useSelector((state) => state.reducer.checkwallposition)
  let checkCloseWall = false;
  let checkWallValue = '';
  const doorWallObjData = [
    {
      value: 'left',
      name: 'Left',
      key:state.params.add_left_lean
    },
    {
      value: 'right',
      name: 'Right',
      key:state.params.add_right_lean
    },
    {
      value: 'front',
      name: 'Front',
      key:state.params.add_front_lean
    },
    {
      value: 'back',
      name: 'Back',
      key:state.params.add_back_lean
    },
  ]

  // ######################## For door and windows #########################

  let wallSelectionOptions = [];

  let wallSelectionOption = (params) => {
    const centerOptions = [
        {
            label: "Left",
            value: "c_b_l_w",
        },
        {
            label: "Right",
            value: (params.singleSlope)? "F_S_L_R_W" : "c_b_r_w",
        },
        {
            label: "Front",
            value: "c_b_f_w",
        },
        {
            label: "Back",
            value: "c_b_b_w",
        },
    ];
    
    const breezewayOptions = [
                {
                  label: "Front Storage Front Wall ",
                  value: "c_b_f_w",
                },
                {
                  label: "Front Storage Left Wall",
                  value: "c_b_f_s_l_w",
                },
                {
                    label: "Front Storage Right Wall",
                    value:  "c_b_f_s_r_w",
                },
                {
                    label: "Front Storage Back Wall",
                    value: "c_b_f_s_b_w",
                },
            ]
  
   let opt = !params.isBreezeway ? centerOptions : breezewayOptions;
  
    params.p_u_c && (
        opt.push(
            {
                label: "Back Storage Front Wall",
                value: "c_b_f_s_w",
            })       
        );
  
      params.p_u_c && (params.p_r_w  != 'Close') && opt.push({
            label: "Back Storage Right Wall",
            value: "c_b_r_s_w",
        })
  
        if(params.p_u_c && params.p_r_w  === 'Close' && params.activeWall === "c_b_r_s_w") params.activeWall = "c_b_r_w"
  
        params.p_u_c && (params.p_l_w  != 'Close') && opt.push({
          label: "Back Storage Left Wall",
          value: "c_b_l_s_w",
      })
  
        if(params.p_u_c && params.p_l_w  === 'Close' && params.activeWall === "c_b_l_s_w") params.activeWall = "c_b_l_w"
      
  
    params.p_u_c && params.isBreezeway &&
        opt.push(
            {
                label: "Back Storage Back Wall",
                value: "c_b_b_w",
            }
          );
    (params.cB_addStorage_check_left && params.p_b_w != "Close") &&
    opt.push(
        {
          label: "Left Storage Back Wall",
          value: "c_b_l_s_b_w",
        }
    );
    params.cB_addStorage_check_left &&
    opt.push(
        {
          label: "Left Storage Right Wall",
          value: "c_b_l_s_r_w",
        }
    );
    (params.cB_addStorage_check_left  && params.p_f_w != "Close" ) &&
    opt.push(
        {
            label: "Left Storage Front Wall",
            value: "c_b_l_s_f_w",
        }
    );
  
    (params.cB_addStorage_check_right && params.p_f_w != "Close")  &&
        opt.push(
            {
                label: "Right Storage Front Wall",
                value: "c_b_r_s_f_w",
            },
        );
        (params.cB_addStorage_check_right && params.p_b_w != "Close")  &&
        opt.push(
            {
                label: "Right Storage Back Wall",
                value: "c_b_r_s_b_w",
            },
  
        );
        params.cB_addStorage_check_right &&
        opt.push(
            {
                label: "Right Storage Left Wall",
                value: "c_b_r_s_l_w",
            }
        );    
  
    (params.add_left_lean && params.isShowCenter == false) &&
        opt.push(
            {
                label: "Left Lean Side Wall",
                value: "L_L_L_W",
            },
            {
                label: "Left Lean Front Wall",
                value: "L_L_F_W",
            },
            {
                label: "Left Lean Back Wall",
                value: "L_L_B_W",
            }
        );
  
    (params.add_right_lean && params.isShowCenter == false) &&
        opt.push(
            {
                label: "Right Lean Front Wall",
                value: "R_L_F_W",
            },
            {
                label: "Right Lean Back Wall",
                value: "R_L_B_W",
            },
            {
                label: "Right Lean Side Wall",
                value: "R_L_R_W",
            }
        );
  
    (params.add_front_lean && params.isShowCenter == false) &&
        opt.push(
            {
                label: "Front Lean Side Wall",
                value: "F_L_F_W",
            },
            {
                label: "Front Lean Front Wall",
                value: "F_L_R_W",
            },
            {
                label: "Front Lean Back Wall",
                value: "F_L_L_W",
            }
        );
  
    (params.add_back_lean && params.isShowCenter == false) &&
        opt.push(
            {
                label: "Back Lean Side Wall",
                value: "B_L_S_W",
            },
            {
                label: "Back Lean Back Wall",
                value: "B_L_B_W",
            },
            {
                label: "Back Lean Front Wall",
                value: "B_L_F_W",
            }
        );
  
    (params.add_storage_check && params.isShowCenter == false) &&
        opt.push(
            {
                label: "Left Lean Storage Front Wall",
                value: "L_L_F_S_W",
            },
            {
                label: "Left Lean Storage Right Wall",
                value: "L_L_R_S_W",
            }
        );
  
      params.add_storage_check && (params.p_b_c_b_l  != 'Close') && opt.push({
          label: "Left Lean Storage Left Wall",
          value: "L_L_L_S_W",
      })
  
      if(params.add_storage_check && params.p_b_c_b_l  === 'Close' && params.activeWall === "L_L_L_S_W") {params.activeWall = "L_L_L_W"}
  
  
    (params.add_storage_check_right && params.isShowCenter == false) &&
        opt.push(
            {
                label: "Right Lean Storage Front Wall",
                value: "R_L_F_S_W",
            },
            {
                label: "Right Lean Storage Left Wall",
                value: "R_L_L_S_W",
            }         
        );
  
        params.add_storage_check_right && (params.p_b_c_b_r  != 'Close') && opt.push( {
          label: "Right Lean Storage Right Wall",
          value: "R_L_R_S_W",
        })
  
      if(params.add_storage_check_right && params.p_b_c_b_r  === 'Close' && params.activeWall === "R_L_R_S_W") {params.activeWall = "R_L_R_W"}
  
  
    (params.add_storage_check_front && params.isShowCenter == false) &&
        opt.push(
            {
                label: "Front Lean Storage Front Wall",
                value: "F_L_R_S_W",
            }
          /* {
                label: "Front Lean Storage Back Wall",
                value: "F_L_L_W",
            } */
        );
  
        params.add_storage_check_front && (params.p_b_c_b_f_l  != 'Close') && opt.push({
          label: "Front Lean Storage Side Wall",
          value: "F_L_F_S_W",
      })
  
      if(params.add_storage_check_front && params.p_b_c_b_f_l  === 'Close' && params.activeWall === "F_L_F_S_W") {params.activeWall = "F_L_F_W"}
  
  
    (params.add_storage_check_back && params.isShowCenter == false) &&
        opt.push(
            {
                label: "Back Lean Storage Front Wall",
                value: "B_L_L_S_W",
            }
            /* {
                label: "Back Lean Storage Back Wall",
                value: "B_L_B_W",
            }, */
        );
  
        params.add_storage_check_back && (params.p_b_c_b_b_l  != 'Close') && opt.push( {
          label: "Back Lean Storage Side Wall",
          value: "B_L_F_S_W",
      })
  
      if(params.add_storage_check_back && params.p_b_c_b_b_l  === 'Close' && params.activeWall === "B_L_F_S_W") {params.activeWall = "B_L_S_W"}
  
    wallSelectionOptions = opt;
  
    return opt;
  }

  function handleWallChange(val) {
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
    <ul className='doorsChangeWallTab'>
      {
        sectionType === "doorandwindow" ? (
          walls?.map((wall) => {
            let checkActive ;
            if(type == "centerbuilding" || type == "centerbuildingStorage") {
              checkActive = state.activeWall;
            } else {
              checkActive = state.activeLeanWalls[type]
            }
            if(((state.params.p_u_c && wall.label == "Back") || (state.params.cB_addStorage_check_right && wall.label == "Right") || (state.params.cB_addStorage_check_left && wall.label == "Left")) && title == "Center Building Storage") return;
            return <li className={checkActive == wall.value  ? 'active' : wallsContainingComp.includes(wall.value) ?  'with-content': ''}>
              <a onClick={(e) =>{
                
                if(type == "centerbuilding" || type == "centerbuildingStorage") {
                  dispatch(changeActiveWall(wall.value))
                }
                dispatch(changeActiveLeanWall(type, wall.value))
               
                handleWallChange(wall.value)
              } }>
                <span className='wallname'>{wall.label}</span>
                <span className='wallSwitch'></span>
              </a>    
            </li>
          })
        ) : doorWallObjData.map((item, index) => (
        <li className={item.key ? checkwallposition == item.value ? 'active' : 'with-content' : ''} key={index} >
          {item.key ?
            <a onClick={(e) => { dispatch(changeWallName(item.value))}}>
            <span className='wallname'>{item.name}</span>
            <span className='wallSwitch'></span>
            </a>
          : <a onClick={(e) => { dispatch(changeWallName(item.value)); dispatch(addLeantoSection(e.target.value, `add${item.name}Lean`, false, false, false, false))}} >
            <span className='wallname'>{item.name}</span>
            <span className='wallSwitch'></span>
            </a>
          }
        </li>
      )) 
      }
     
    </ul>
  )
}

export default DoorsChangeWallTab;
