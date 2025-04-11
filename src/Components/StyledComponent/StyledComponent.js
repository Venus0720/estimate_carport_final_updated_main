import React, { useState ,useCallback } from 'react'
import TabComponent from '../TabComponent/TabComponent'
import CustomPopover from '../Common/CustomPopover'
import { useSelector, useDispatch } from 'react-redux';
import ChildComponent from './ParentComponent';
import ParentComponent from './ParentComponent';
import CustomPopup from '../Common/CustomPopup';
import {OpenCustomPopup} from '../../action/index';
const StyledComponent = () => {
  const dispatch = useDispatch()
  const iscustompopup = useSelector((state)=> state.reducer.iscustompopup);
  console.log(iscustompopup,"iscustompopup")
  const [value, setValue] = useState('50')
  const ColorObj = useSelector((state) => state.reducer.const_var.color);

  const [count, setCount] = useState(0);

  // Memoized handleIncrement function
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Dependency array



  return (
    <div className='style-component' style={{ margin: '50px', position:'relative' }}>
      <ParentComponent/>
      <div className='input-checkbox form-element'>
        <div className='input-box'>
          <input id='checkbox1' type='checkbox' value='yes' />
          <label for='checkbox1'>checkbox</label>
        </div>
      </div>

      <div className='input-radio form-element'>
        <div className='input-box'>
          <input id='radio1' type='radio' name='radiob' value='yes' />
          <label for='radio1'>radio</label>
        </div>
        <div className='input-box'>
          <input id='radio2' type='radio' name='radiob' value='yes' />

          <label for='radio2'>radio</label>
        </div>
      </div>

      <div className='input-select form-element'>
        <label class='select'>
          <select>
            <option value='1'>optin1</option>
            <option value='2'>option2</option>

            <option value='3'>option3</option>
          </select>
        </label>
      </div>

      <div className='input-range form-element'>
        <input
          type='range'
          value={value}
          min='0'
          max='100'
          step='1'
          class='progress'
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <TabComponent />

      <CustomPopover
        ctacontent={<span>Click me</span>}
        position='right'
        trigger='hover'
        content={<div>This is the popover content!</div>}
      />

      <CustomPopover
        ctacontent={<span>Click me</span>}
        position='top'
        trigger='click'
        content={<div>This is the popover content!</div>}
      />

      <CustomPopover
        ctacontent={<span>Click me</span>}
        position='bottom'
        trigger='hover'
        content={<div>This is the popover content!</div>}
      />

      <h2>Roofing:</h2>

      <h3>Style:</h3>

      <div className='color-box'>
        <input id='newvalue' type='radio' name='radiob' value='yes' />
        <label for='newvalue' className='active'>
          <span
            className='color-code'
            style={{ backgroundColor: 'red' }}
          ></span>
          <span className='color-name'>Barn Red</span>
          <span className='icon check-icon'></span>
        </label>
      </div>


  <label class="custom-toggle mt-30">
	<span class="custom-toggle-label mr-5">No</span>

	<input class="custom-toggle-checkbox" type="checkbox"  />
	<div class="custom-toggle-switch"></div>
	<span class="custom-toggle-label ml-5">Yes</span>
</label>


<button onClick={()=>dispatch(OpenCustomPopup(true))}>Open Popup</button>
      <CustomPopup isPopupOpen={iscustompopup} onClosePopup={()=>dispatch(OpenCustomPopup(false))}>
        <h2>This is a custom popup!</h2>
        <p>Popup content goes here.</p>
      </CustomPopup>

          {/* it will show when we will add ("active-modal-loader") this class on body */}
          <div className="modal-loading-wrapper">
            <div className="modal-loading-wrapper-inner">
                <div className="loader-for-modal"></div>
            </div>
          </div>


    </div>
  )
}

export default StyledComponent
