import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChangeBackgroundAccordingtoCon,ShowHideTranslusant } from '../../../action'
import { geDefaultBuildingData,commonConfirmationAlert } from '../../../action'

const BottomFooter = () => {
  const dispatch = useDispatch()
  const state = useSelector((state)=>state.reducer)
  return (
    <div className='bottomfooter-wrapper'>
      <div className='building-action-container'>
        <a onClick={(e)=> dispatch(ChangeBackgroundAccordingtoCon())}>
          <span className= {((state.const_var.crmSetting.is_show_background!=undefined && state.const_var.crmSetting.is_show_background == true)) ?'icon icon-eyeopen' : 'icon icon-view-ccene'}></span> 
          <span className='text'>Scene</span>
        </a>
      </div>
      <div className='building-action-container'>
        <a onClick={()=>dispatch(commonConfirmationAlert('cancel'))}>
          <span className='icon icon-reset'></span> <span className='text'>Reset</span>
        </a>
      </div>
      <div className='building-action-container'>
        <a onClick={()=>dispatch(ShowHideTranslusant('full')) } className={state.params.is_translusant==true ? 'active-control' :''}>
          <span className="wallSwitch"></span><span>{ state.isfullviewbuilding ?'Frame':'Frame'}</span>
        </a>
      </div>
    </div>
  )
}

export default BottomFooter;