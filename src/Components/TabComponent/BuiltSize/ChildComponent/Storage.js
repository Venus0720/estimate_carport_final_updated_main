import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPricingData, getPricingDataforUtility, handleUtilityLenghtSelectonChangeValue, nostorage, toggleAddUtilityCheckboxChange } from '../../../../action';
import { const_var } from '../../../../redux/reducers/reducer';

const Storage = () => {
  const state = useSelector((state) => state.reducer)

  const [utilityLengthKey,setUtilityLengthKey] = useState("")
  const [utilityLength,setUtilityLength] = useState("")
  const [utilityPostion,setUtilityPosition] = useState("none")
  const [dropDownSizeData,setDropDownSizeData] = useState([])
  const dispatch = useDispatch();

  const storagePositionData = [
    {label: "None",value :"none"},
    {label: "Back Storage",value :"back"},
    {label: "Right Storage",value :"right"},
    {label: "Left Storage",value :"left"},
  ]

  useEffect(()=>{
    if(state.params.p_u_c) {
      setUtilityPosition("back");
      setUtilityLengthKey("center")
      setDropDownSizeData(const_var.b_u_D_p_a);
      setUtilityLength(state.params.p_u_t);
    }else if (state.params.cB_addStorage_check_left) {
      setUtilityPosition("left");
      setUtilityLengthKey("centerLeft")
      setDropDownSizeData(const_var.b_u_D_p_a_c_b);
      setUtilityLength(state.params.cB_addStorage_left);
    }else if (state.params.cB_addStorage_check_right) {
      setDropDownSizeData(const_var.b_u_D_p_a_c_b)
      setUtilityPosition("right");
      setUtilityLengthKey("centerRight")
      setUtilityLength(state.params.cB_addStorage_right);
    }else if(state.params.nostorage){
      setUtilityPosition("none");
    }
  },[state.params.p_u_c,state.params.cB_addStorage_check_left,state.params.cB_addStorage_check_right,utilityLength,utilityPostion,state.params.nostorage,state.params.p_u_t,state.params.cB_addStorage_right,state.params.cB_addStorage_left,const_var.b_u_D_p_a,const_var.b_u_D_p_a_c_b])


  const handlepricing = (value)=>{
    if(utilityPostion == "left"){
      dispatch(getPricingDataforUtility(value,'left_combo',value))
    }
    if(utilityPostion == "right"){
      dispatch(getPricingDataforUtility(value,'right_combo',value))
    }
    if(utilityPostion == "back"){
      dispatch(getPricingData("false"))
    }
   }
  return (
    <section className='tab-data-padding'>
      <div className='prow'>
      </div>
      <div className='prow'>

      <div className='pcol-3' style={{whiteSpace:'nowrap'}}>
          <h3>Add Storage</h3>
          <div className='input-select form-element'>
            <label class='select'>
              <select
                value={utilityPostion}
                onChange={(e) =>{            
                  if(e.target.value === "back") {
                    dispatch(toggleAddUtilityCheckboxChange(e, e.target.value,'backStorage'))
                  }
                  if(e.target.value === "left") {
                    dispatch(toggleAddUtilityCheckboxChange(e, e.target.value, state.params.cB_addStorage_left))
                  } 
                  if(e.target.value === "right") {
                    dispatch(toggleAddUtilityCheckboxChange(e, e.target.value,state.params.cB_addStorage_right))
                  }
                  if(e.target.value === "none") {
                    dispatch(nostorage(e))
                  }
               
              }}>
                {
                  storagePositionData?.map((item) =>  <option  value={item.value} >{item.label}</option>)
                }
              </select>
            </label>
          </div>
        </div>

        <div className='pcol-3' style={{whiteSpace:'nowrap'}}>
          {(utilityPostion != "" && utilityPostion != "none" && utilityLength!="") && <h3>Enclosed Area</h3>}
            <div className='input-select form-element'>
            {(utilityPostion != "" && utilityPostion != "none" && utilityLength!="") ? 
            <label class='select'>
              <select 
                value={utilityLength}
                onChange={(e) => {
                  dispatch(handleUtilityLenghtSelectonChangeValue(e, utilityLengthKey));
                  handlepricing(e.target.value)
                }}> 
                {
                  Object.entries(dropDownSizeData)?.map(([key,value]) => <option value={value}>{key}</option> )
                }
              </select>
            </label>:null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Storage;
