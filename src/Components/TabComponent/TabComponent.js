import React, { useState } from 'react'
import Options from './Options/Options'
import DoorWindows from './DoorWindows/DoorWindows'
import BuiltSize from './BuiltSize/BuiltSize'
import Leantos from './Leantos/Leantos'
import { useSelector, useDispatch } from 'react-redux';
import { handleTabsClick } from '../../action/index';
 import { updateAlertMessage } from '../../redux/reducers/utils.js';
import DoorsChangeWallTab from '../Common/DoorsChangeWallTab'
import ChangeWallTab from '../Common/ChangeWallTab'
import TabSubTitle from './BuiltSize/ChildComponent/TabSubTitle'

const TabComponent = () => {
  
  const state = useSelector((state) => state.reducer)
  
  const dispatch = useDispatch();

  const activemaintabkey = useSelector((state) => state.reducer.activemaintabkey);

  const noSpaceToAddCupola =  state.const_var.alertUsedFor === "noSpaceToAddCupola" ? true : false;    
  const noSpaceToUpdateCupola =  state.const_var.alertUsedFor === "noSpaceToUpdateCupola" ? true : false;

  return (
    <div className='tabcontainer'>

      <div className={`tab-content ${activemaintabkey === 'doorWindows' ? 'without-tab-content' : ''}`}>
        <div
          className={`tab-data ${activemaintabkey === 'builtSize' ? 'active' : ''}`}
        >
          <BuiltSize />
        </div>
        <div className={`tab-data ${activemaintabkey === 'leantos' ? 'active' : ''}`}>
          <ChangeWallTab />
          <Leantos />
        </div>
        <div
          className={`tab-data ${activemaintabkey === 'doorWindows' ? 'active' : ''}`}
        >
          <DoorWindows />
        </div>
        <div className={`tab-data ${activemaintabkey === 'options' ? 'active' : ''}`}>
          <Options />
        </div>
      </div>
    </div>
  )
}

export default TabComponent
