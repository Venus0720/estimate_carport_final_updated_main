import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addLeantoPorches, changeWrapSide } from '../../../../action/index';
import { params } from "../../../../Constants/constant";

const Wrap = ()=> {
 
    const dispatch = useDispatch();
    const checkwrapside = useSelector((state) => state.reducer.checkwrapside)
    const state = useSelector((state) => state.reducer)

    if(state.params.add_right_back_lean_porch === false || state.params.add_left_back_lean_porch === false || state.params.add_right_front_lean_porch === false || state.params.add_left_front_lean_porch === false){
      state.params.add_full_lean_porch = false
    }else {
      state.params.add_full_lean_porch = true;
    }

    const doorWallObjData = [
        {
          value: 'LeftFront',
          name: 'Front-Left',
          key:state.params.add_left_front_lean_porch,
        },
        {
          value: 'RightFront',
          name: 'Front-Right',
          key:state.params.add_right_front_lean_porch,
        },
        {
          value: 'LeftBack',
          name: 'Back-Left',
          key:state.params.add_left_back_lean_porch,
        },
        {
          value: 'RightBack',
          name: 'Back-Right',
          key:state.params.add_right_back_lean_porch,
        },
        {
            value: 'FullBuilding',
            name: 'Full Building',
            key : state.params.add_full_lean_porch,
          },
   
      ]
      
      return (
        <section className="tab-data-padding">
          <h3 className="mt-20">Wrap</h3>
          <div className="pcol-12 p-0">
            <ul className='custom-tab-type-1 mb-0 mt-0'>
              {doorWallObjData.map((item, index) =>(                        
                <li className={`${item.key ? checkwrapside == item.value ? 'active' : 'with-content' : ''}`} key={index} >                          
                  <a onClick={(e) => {  
                    dispatch(changeWrapSide(item.value));
                    if(item.value === "FullBuilding"){
                      dispatch(addLeantoPorches(state.params.add_left_front_lean_porch, `addLeftFrontLeanToPorch`,2 ,params.add_front_lean, params.add_left_lean, params.add_right_lean, params.add_back_lean , "FullBuilding"));
                      dispatch(addLeantoPorches(state.params.add_right_front_lean_porch, `addRightFrontLeanToPorch`,2 ,params.add_front_lean, params.add_left_lean, params.add_right_lean, params.add_back_lean , "FullBuilding"));
                      dispatch(addLeantoPorches(state.params.add_left_back_lean_porch, `addLeftBackLeanToPorch`,2 ,params.add_front_lean, params.add_left_lean, params.add_right_lean, params.add_back_lean , "FullBuilding"));
                      dispatch(addLeantoPorches(state.params.add_right_back_lean_porch, `addRightBackLeanToPorch`,2 ,params.add_front_lean, params.add_left_lean, params.add_right_lean, params.add_back_lean , "FullBuilding"));                              
                    }else{
                      dispatch(addLeantoPorches(item.key, `add${item.value}LeanToPorch`,2 ,params.add_front_lean, params.add_left_lean, params.add_right_lean, params.add_back_lean));
                    } 
                    }}
                  >
                    <span className='wallcheck'></span>
                    <span className='wallname'>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section> 
      )
}

export default Wrap