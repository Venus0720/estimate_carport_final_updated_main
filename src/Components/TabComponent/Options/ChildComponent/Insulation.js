import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { extraItemsAction } from '../../../../action'

const Insulation = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.reducer)
  // const [enoughtSpace, setEnoughtSpace] = useState(true);
  // const handleResize = () => {
  //   if(window.innerWidth <= 1280) {
  //     setEnoughtSpace(false)
  //   } else {
  //     setEnoughtSpace(true)
  //   }
  // }

  // useEffect(() => {
  //   handleResize()
  // }, [window.innerWidth]);

  return (
    <section>
      <h3>Insulation</h3>
        {
          Object.entries(state.const_var.insulationJson)?.map(([key,item],index) => {
            return  <>
                      <div className='prow mb-10 flex-nowrap'>
                        <div style={{width: 'auto'}} className={index === 2 ? 'd-flex align-items-center' : 'pcol-3 d-flex align-items-center'}>
                          <div className='input-radio form-element'>
                            <div className='input-box'>
                              <input
                                id={`insu ${key}`}
                                type='radio'
                                className='none-check-icon'
                                name='insulation'
                                checked={ state.params.p_i_o == key ?true:false}
                                value={state.params.p_i_o}
                                onChange={e =>dispatch(extraItemsAction(key, 'insulation'))}
                              />
                              {(state.params.p_i_o == key && item !== 'None') ? <label className='label-pointer' for={`insu ${key}`}>{item}&nbsp;</label> : <label className='label-pointer' for={`insu ${key}`}>{item}</label> }
                            </div>
                          </div>
                        </div>
                        {(((state.params.p_i_o == key && item !== 'None') && window.innerWidth > 1280) || ((state.params.p_i_o == key && item !== 'None') && (window.innerWidth < 993 && window.innerWidth > 599 ))) &&
                          <div className='option-container'>
                            <div style={{width: 'auto'}} className='pcol-2'>
                              <div className='input-radio form-element'>
                                <div className='input-box'>
                                  <input
                                    type='radio'
                                    id="RoofOnly"
                                    className='none-check-icon'
                                    checked={state.params.p_r_o}
                                    value={state.params.p_i_o}
                                    onChange={e => dispatch(extraItemsAction(key, 'roofOnly'))}
                                  />
                                  <label className='label-pointer' for={"RoofOnly"}>{"Roof Only"}</label>
                                </div>
                              </div>
                            </div>
                            <div style={{width: 'auto'}} className='pcol-2'>
                              <div className='input-radio form-element'>
                                <div className='input-box'>
                                  <input
                                    type='radio'
                                    id="FullBuilding"
                                    className='none-check-icon'
                                    checked={state.params.p_f_i}
                                    value={state.params.p_i_o}
                                    onChange={e => dispatch(extraItemsAction(key, 'fullBuilding'))}
                                  />
                                  <label className='label-pointer' for={"FullBuilding"}>{"Full Building"}</label>
                                </div>
                              </div>
                            </div>
                            <div className='option-arrow' style={{top:'16px', left: '-6px'}}></div>
                          </div>
                        }
                      </div>
                      { ((window.innerWidth <= 1280 && window.innerWidth > 992) || window.innerWidth < 600) &&
                        <div className='prow mb-10'>
                          {(state.params.p_i_o == key && item !== 'None') && 
                            <div className='option-container prow'>
                              <div style={{width: 'auto'}} className='pcol-2'>
                                <div className='input-radio form-element'>
                                  <div className='input-box'>
                                    <input
                                      type='radio'
                                      id="RoofOnly"
                                      className='none-check-icon'
                                      checked={state.params.p_r_o}
                                      value={state.params.p_i_o}
                                      onChange={e => dispatch(extraItemsAction(key, 'roofOnly'))}
                                    />
                                    <label className='label-pointer' for={"RoofOnly"}>{"Roof Only"}</label>
                                  </div>
                                </div>
                              </div>
                              <div style={{width: 'auto'}} className='pcol-2'>
                                <div className='input-radio form-element'>
                                  <div className='input-box'>
                                    <input
                                      type='radio'
                                      id="FullBuilding"
                                      className='none-check-icon'
                                      checked={state.params.p_f_i}
                                      value={state.params.p_i_o}
                                      onChange={e => dispatch(extraItemsAction(key, 'fullBuilding'))}
                                    />
                                    <label className='label-pointer' for={"FullBuilding"}>{"Full Building"}</label>
                                  </div>
                                </div>
                              </div>
                              <div className='option-arrow' style={{top:'-5px', left:'3px'}}></div>
                            </div>
                          }
                        </div>
                      }
                    </>
                  })
        }
    </section>
  )
}

export default Insulation
