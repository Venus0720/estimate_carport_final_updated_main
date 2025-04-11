import React, { useState } from 'react';
import buildimage from '../../assets/images/building.png';
import { ShowHideCheckout } from '../../action/index';
import { useDispatch, useSelector } from 'react-redux';
import {BuyNowComponent} from '../Common/ResuseComponent';
import CustomPopover from './CustomPopover';
import { twoDecimalPlace } from '../../redux/reducers/utils';

const ProductSummary = () => {
    const state = useSelector((state)=>state.reducer)
    const isWainScot = state.params.p_w_c_c_id;
    const detail = state.const_var.isShowMoreDetail;
    const dispatch = useDispatch();
    const sub_order_total = useSelector((state)=> state.reducer.const_var.UpdatedPriceData.sub_order_total)

    const number_format = (param) => {
        return parseFloat(param).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
    const  upperCaseFirst = (str)=>{
        if(typeof str=='string')
        {
          return str.charAt(0).toUpperCase() + str.substring(1);
        }else
        {
          return str;
        }
      }
    const   properCase = (str)=>{
        if(str !== undefined && str !== "" && typeof str=='string')
        {
          return str.replace(
           /\w\S*/g,
           function(txt) {
             return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
           }
         );
        }else
        {
          return str;
        }
      }
    let selected_position = 'none';
    let selected_area = '';
    if(state.params.p_u_c) {
        selected_position = "Back";
        selected_area = state.params.p_u_t;
    }else if (state.params.cB_addStorage_check_left) {
        selected_position = "Left";
        selected_area = state.params.cB_addStorage_left;
    }else if (state.params.cB_addStorage_check_right) {
        selected_position = "Right";
        selected_area = state.params.cB_addStorage_right;
    }else {
        selected_position = 'none';
    }

    state.const_var.post_data?.building?.entry_points?.sort((a, b) => a.entry_component_location.localeCompare(b.entry_component_location));

    const {electricity, inside_city, installation_ready, surface_level, permit, pdf_price_breakdown, dont_show_processing_fee_pdf}= state.const_var.post_data.building !==undefined && state.const_var.post_data.building.order_extra_items;

    let extraItemLabel= ["Jtrim","End Jtrim", "End Cross Bracing", "Side Cross Bracing"];
    if(state.const_var.a_p_d_a.extra_items !==undefined && state.const_var.a_p_d_a.extra_items.length > 0){
        state.const_var.a_p_d_a.extra_items[0].checkbox.map(item =>{
           extraItemLabel.push(item.label);
        })
     }
     if(state.const_var.a_p_d_a.additional_features !==undefined && state.const_var.a_p_d_a.additional_features.length > 0){
        state.const_var.a_p_d_a.additional_features.map(item =>{
           extraItemLabel.push(item.additional_feature);
        })
     }
    const certificate = state.const_var.post_data.building && state.const_var.post_data.building.certificate;

   let lean_Width = 0
    // if(state.params.add_front_lean == true){
    //     lean_Width += state.params.leanF_p_w
    // }
    // if(state.params.add_back_lean == true){
    //     lean_Width += state.params.leanB_p_w
    // }
    if(state.params.add_left_lean == true){       
         lean_Width += state.params.lean_p_w
    }
    if(state.params.add_right_lean == true){
        lean_Width += state.params.leanR_p_w
    }
    let building_name = "";
    let building_dimensions = "";
    building_dimensions = `${parseFloat(state.const_var.post_data?.building?.width)+lean_Width}X${state.const_var.post_data?.building?.length}X${state.const_var.post_data?.building?.height}`
    state.const_var.new_building_name = properCase(`${building_dimensions} ${state.const_var.post_data?.building?.roof_style_name} Roof building`);


    let cupolaEntries  = []; 
    if (state.const_var.post_data.building && state.const_var.post_data.building.cupolaEntries && state.const_var.post_data.building.cupolaEntries.length > 0){
      
       cupolaEntries = state.const_var.post_data.building.cupolaEntries.reduce((acc, cupola) => {
          const key = `${cupola.cupolaName}-${cupola.dimension}`;
          const index = acc.findIndex((group) => group.key === key);
        
          if (index === -1) {
            acc.push({
              key,
              cupolaName: cupola.cupolaName,
              dimension: cupola.dimension,
              quantity: 1,
              totalPrice: parseFloat(cupola.cupola_price)
            });
          } else {
            acc[index].quantity++;
            acc[index].totalPrice += parseFloat(cupola.cupola_price);
          }
        
          return acc;
       }, []);
    }


    return (
        <div className='product-summary-scroll'>
            <hr className='mb-hr-style d-none'/>
            <div className='for-checkout-sec'> 
            </div>
                <div className='summary-list-wrapper' style={{padding: detail ? '0 65px' : ''}}>
                    <div className='sumary-list-outer-column'>
                    <h6>Base</h6>
                        <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                            <div className='summary-list-content summary-list-name'>Building Name: </div>
                            <div className='summary-list-content summary-list-value'>{state.const_var.new_building_name}</div>
                            <div className='summary-list-content summary-list-price'></div>
                        </div>
                        <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                            <div className='summary-list-content summary-list-name'>Roof Style: </div>
                            <div className='summary-list-content summary-list-value'>{state.const_var.post_data?.building?.roof_style_name}</div>
                            <div className='summary-list-content summary-list-price'></div>
                        </div>
                        <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                            <div className='summary-list-content summary-list-name'>Installation Surface: </div>
                            <div className='summary-list-content summary-list-value'>{state.const_var.post_data?.building?.installation_surface}</div>
                            <div className='summary-list-content summary-list-price'></div>
                        </div>

                    </div>

                    <div className='hr-style'></div>

                    <div className='sumary-list-outer-column'>          
                    <h6>BUILDING DIMENSION</h6>
                        <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                            <div className='summary-list-content summary-list-name'>Size (WxL): </div>
                            <div className='summary-list-content summary-list-value'>{state.const_var.post_data?.building?.width}'x{state.const_var.post_data?.building?.length}' (Roof Length {state.params.p_d + state.params.frame_length}')</div>
                            <div className='summary-list-content summary-list-price'>$ {state.const_var.post_data?.building?.roof_style_price}</div>
                        </div>
                        <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                            <div className='summary-list-content summary-list-name'>Height: </div>
                            <div className='summary-list-content summary-list-value'>{state.params.singleSlope == true ? (state.const_var.c_m_a[state.params.p_b_t]!=undefined && state.const_var.c_m_a[state.params.p_b_t].fixed_new_leg_width!=undefined && state.const_var.c_m_a[state.params.p_b_t].fixed_new_leg_width.length>0  ? state.params.p_h  +" x " +Math.floor(state.params.p_h-((state.params.p_w * state.params.p_r_p) / 12)):state.params.p_h ): state.params.p_h} Feet {(state.params.p_e_l) ? (!state.const_var.isSingleBaseRail && !state.const_var.hasDoublelegName.includes("Baserails")) ? state.const_var.hasDoublelegName +" Baserail " : state.const_var.hasDoublelegName:""}</div>
                            <div className='summary-list-content summary-list-price'>$ {state.const_var.post_data?.building?.height_price}</div>
                        </div>
                        <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                            <div className='summary-list-content summary-list-name'>Roof Pitch: </div>
                            <div className='summary-list-content summary-list-value'>{state.const_var.post_data?.building?.roof_pitch}</div>
                            <div className='summary-list-content summary-list-price'>$ {state.const_var.post_data?.building?.roof_pitch_price}</div>
                        </div>
                        <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                            <div className='summary-list-content summary-list-name'>Gauge: </div>
                            <div className='summary-list-content summary-list-value'>{state.const_var.post_data?.building?.gauge} GA</div>
                            <div className='summary-list-content summary-list-price'></div>
                        </div>
                        <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                            <div className='summary-list-content summary-list-name'>Wind/Snow: </div>
                            <div className='summary-list-content summary-list-value'>{state.const_var.post_data.building === undefined ? state.const_var.editAPIDataByResponse.data?.request_data?.building.certificate.name : state.const_var.post_data?.building?.certificate_name}</div>
                            <div className='summary-list-content summary-list-price'></div>
                        </div>
                    </div>
                    {(state.params.p_i_o == '0') ? '' :
                        <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                            <div className="summary-list-content summary-list-name">Insulation:</div>
                            <div className='summary-list-content summary-list-value'>{(state.params.p_r_o ==true)?state.const_var.insulationJson[state.params.p_i_o] + "(Roof Only)":state.const_var.insulationJson[state.params.p_i_o] + "(Full Building)"} </div>
                    
                        </div>
                    }
                    {(state.const_var.post_data.building!=undefined &&(state.const_var.post_data.building.has_utility == true || state.const_var.post_data.building.has_utility_front )) ? (
                            <>
                                <div className='hr-style'></div>
                                <div className='sumary-list-outer-column'>          
                                    <h6>Storage</h6>
                                    <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                                        <div className='summary-list-content summary-list-name'>{selected_position} : </div>
                                        <div className='summary-list-content summary-list-value'>{selected_area + " Feet"}</div>
                                        <div className='summary-list-content summary-list-price'></div>
                                    </div>
                                </div>
                            </>
                        ): null
                    }

                    {(cupolaEntries && cupolaEntries.length > 0) &&
                    <>
                        <div className='hr-style'></div>
                        <div className="sumary-list-outer-column ">
                        <h6>Cupola</h6>                        
                            {cupolaEntries.sort((a, b)=> a.dimension.split("x")[0] - b.dimension.split("x")[0]).map((cupola ) => (
                                
                                <div className={detail ? "summary-list-section-detail": "summary-list-section"} key={cupola.key}>  
                                    <div className='summary-list-content summary-list-name'>{cupola.cupolaName} ({cupola.dimension}') </div>
                                    <div className='summary-list-content summary-list-value'>Qty: {cupola.quantity}</div>
                                </div>
                                )) 
                            }
                        </div>
                    </>
                    }
                    <div className='hr-style'></div>
                    <div className='sumary-list-outer-column'>
                    <h6>WALLS ({state.const_var.post_data?.building?.vertical_walls? 'VERTICAL' : 'HORIZONTAL'})</h6>
                        {(state.const_var.post_data?.building?.front_wall ==  state.const_var.post_data?.building?.back_wall   && state.const_var.post_data?.building?.left_wall == state.const_var.post_data?.building?.right_wall && state.const_var.post_data?.building?.left_wall  == state.const_var.post_data?.building?.front_wall) ?  
                            <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                                <div className='summary-list-content summary-list-name'>Walls: </div>
                                <div className='summary-list-content summary-list-value'>{state.const_var.TypeWallName[(state.const_var.post_data.building!=undefined)?state.const_var.post_data.building.front_wall:0]}</div>
                            </div>
                        : <>
                            <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                                <div className='summary-list-content summary-list-name'>Front End: </div>
                                <div className='summary-list-content summary-list-value'>{state.const_var.TypeWallName[(state.const_var.post_data.building!=undefined)?state.const_var.post_data.building.front_wall:0]}</div>
                                <div className='summary-list-content summary-list-price'>$ {state.const_var.post_data?.building?.front_wall_price}</div>
                            </div>
                            <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                                <div className='summary-list-content summary-list-name'>Back End: </div>
                                <div className='summary-list-content summary-list-value'>{state.const_var.TypeWallName[(state.const_var.post_data.building!=undefined)?state.const_var.post_data.building.back_wall:0]}</div>
                                <div className='summary-list-content summary-list-price'>$ {state.const_var.post_data?.building?.back_wall_price}</div>
                            
                            </div>
                            <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                                <div className='summary-list-content summary-list-name'>Left Side: </div>
                                <div className='summary-list-content summary-list-value'>{(state.params.p_l_w != 'Close' && state.params.p_l_w != 'Open' && state.params.p_l_w != 'One_Fourth_Close' && state.params.p_l_w != 'Three_Fourth_Close' && state.params.p_l_w != 'Half_Close') ? state.params.p_l_w + " Panel" :  state.const_var.TypeWallName[(state.const_var.post_data.building!=undefined)?state.const_var.post_data.building.left_wall:0]} {(state.const_var.post_data.building!=undefined && state.params.p_c_p_l == true)? "+ Cut Panel ": ""}</div>
                                <div className='summary-list-content summary-list-price'>$ {state.const_var.post_data?.building?.left_wall_price}</div>
                            
                            </div>
                            <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                                <div className='summary-list-content summary-list-name'>Right Side: </div>
                                <div className='summary-list-content summary-list-value'>{(state.params.p_r_w != 'Close' && state.params.p_r_w != 'Open' && state.params.p_r_w != 'One_Fourth_Close' && state.params.p_r_w != 'Three_Fourth_Close' && state.params.p_r_w != 'Half_Close') ? state.params.p_r_w + " Panel" :  state.const_var.TypeWallName[(state.const_var.post_data.building!=undefined)?state.const_var.post_data.building.right_wall:0]} {(state.const_var.post_data.building!=undefined && state.params.p_c_p_r == true)? "+ Cut Panel ": ""}</div>
                            </div>
                        </>}
                    </div>
                        
                        <div className='hr-style'></div>
                        <div className='sumary-list-outer-column'>
                    <h6>COLORS</h6>
                        <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                            <div className='summary-list-content summary-list-name'>Roof: </div>
                            <div className='summary-list-content summary-list-value'>{state.const_var.post_data?.building?.roof_color?.name}</div>
                            <div className='summary-list-content summary-list-price'>$ {state.const_var.post_data?.building?.roof_color?.cost}</div>
                        
                        </div>
                        <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                            <div className='summary-list-content summary-list-name'>Trim: </div>
                            <div className='summary-list-content summary-list-value'>{state.const_var.post_data?.building?.trim_color?.name}</div>
                            <div className='summary-list-content summary-list-price'>$ {state.const_var.post_data?.building?.trim_color?.cost}</div>
                        
                        </div>
                        <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                            <div className='summary-list-content summary-list-name'>Wall: </div>
                            <div className='summary-list-content summary-list-value'>{state.const_var.post_data?.building?.wall_color?.name}</div>
                            <div className='summary-list-content summary-list-price'>$ {state.const_var.post_data?.building?.wall_color?.cost}</div>
                        
                        </div>
                        {state.const_var.post_data?.building?.wainscot!=undefined &&
                            <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                                <div className='summary-list-content summary-list-name'>Wainscot: </div>
                                <div className='summary-list-content summary-list-value'>{state.const_var.post_data?.building?.wainscot?.name}</div>
                                <div className='summary-list-content summary-list-price'>$ {state.const_var.post_data?.building?.wainscot?.cost}</div>
                            </div>}

                    </div>

                    <div className='hr-style'></div>

                    {(state.const_var.post_data?.building?.leanto!=undefined && state.const_var.post_data?.building?.leanto.length > 0)  ? 
                    <>                            
                    {Object.entries(state.const_var.post_data?.building?.leanto).map(([key, value]) => {                      
                        return ( 
                        <div className='sumary-list-outer-column'>   
                                
                            <h6>{state.const_var.mainLeantoValue[value.leanto_type]} LEAN-TO</h6>
                            <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                                <div className='summary-list-content summary-list-name'>Size (WxL): </div>
                                <div className='summary-list-content summary-list-value'>{value.width} x {value.length} Feet
                                    {(value.leanto_type == 1 || value.leanto_type == 2) ?
                                        ((value.porch !=undefined) ? <> &nbsp; | &nbsp; Wrapped length {value.porch.length + " " + "'"}  </> : null)
                                        :
                                        ((value.wrappedLength != 0) ? <>  &nbsp; | &nbsp; Wrapped length {value.wrappedLength + " " + "'"} </> : null)
                                    }
                                </div>
                                <div className='summary-list-content summary-list-price'>$ {value.basic_price}</div>
                            </div>
                            <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                                <div className='summary-list-content summary-list-name'>Height: </div>
                                <div className='summary-list-content summary-list-value'>{value.height} Feet {(value.lean_has_double_leg)? !value.lean_has_double_leg_name.includes("Baserails") ? value.lean_has_double_leg_name +" Baserail " : value.lean_has_double_leg_name:""}</div>
                                <div className='summary-list-content summary-list-price'>$ {value.height_price}</div>
                            </div>
                            <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                                <div className='summary-list-content summary-list-name'>Roof Pitch: </div>
                                <div className='summary-list-content summary-list-value'>{value.roof_pitch}</div>
                                <div className='summary-list-content summary-list-price'>$ {value.roof_pitch_price}</div>
                            </div>
                            <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                                <div className='summary-list-content summary-list-name'>Alignment: </div>
                                <div className='summary-list-content summary-list-value'>{(value.alignment)}</div>
                                <div className='summary-list-content summary-list-price'></div>
                            </div>
                            {state.const_var.TypeWallName[value.front_wall] ==  state.const_var.TypeWallName[value.back_wall] && state.const_var.TypeWallName[value.back_wall] ==  state.const_var.TypeWallName[value.side_wall]  ?
                                <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                                    <div className='summary-list-content summary-list-name'>Walls: </div>
                                    <div className='summary-list-content summary-list-value'>{state.const_var.TypeWallName[value.side_wall]}</div>
                                </div>
                            : 
                            <>
                                <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                                    <div className='summary-list-content summary-list-name'>Front End: </div>
                                    <div className='summary-list-content summary-list-value'>{state.const_var.TypeWallName[value.front_wall]}</div>
                                    <div className='summary-list-content summary-list-price'>$ {value.front_wall_price}</div>
                                    
                                </div>
                                <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                                    <div className='summary-list-content summary-list-name'>Back End: </div>
                                    <div className='summary-list-content summary-list-value'>{state.const_var.TypeWallName[value.back_wall]}</div>
                                    <div className='summary-list-content summary-list-price'>$ {(value.back_wall_price==undefined)?0:value.back_wall_price}</div>
                                    
                                </div>
                                <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                                    <div className='summary-list-content summary-list-name'>Side Wall: </div>
                                    <div className='summary-list-content summary-list-value'>{(value.side_wall!="open" && value.side_wall!="close" && value.side_wall != 'one_fourth_close' && value.side_wall != 'three_fourth_close' && value.side_wall != 'half_close')?value.side_wall + ' Panel':state.const_var.TypeWallName[value.side_wall]}</div>
                                    <div className='summary-list-content summary-list-price'>$ {value.side_wall_price}</div>
                                </div>
                            </>
                            }
                            {value.utility_length != undefined ? 
                            <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                                <div className='summary-list-content summary-list-name'> Utility Storage: </div>
                                <div className='summary-list-content summary-list-value'>{value.utility_length} Feet</div>
                                <div className='summary-list-content summary-list-price'>$ {value.utility_price}</div>
                                
                            </div>:null}
                            {value.insulation_type != undefined ? 
                            <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                                <div className='summary-list-content summary-list-name'>Insulation: </div>
                                <div className='summary-list-content summary-list-value'>{value.insulation_type.name} Feet</div>
                                <div className='summary-list-content summary-list-price'>$ {value.insulation_price}</div>
                                
                            </div>:null}

                            <div className='hr-style'></div>                       
                        </div>
                        )
                    })}
                    </>:null}
                    {( state.const_var.post_data?.building?.entry_points.length>0)?
                    <div className='sumary-list-outer-column'>
                    <h6>COMPONENTS</h6>
                        <div className=''>
                        {
                            state.const_var.post_data?.building?.entry_points?.map((el) => {
                            let wallName = '';
                            switch(el.component_wall_name) {
                                case "c_b_l_w":
                                    wallName = "Left Wall"
                                    break;
                                case "c_b_r_w":
                                    wallName = "Right Wall"
                                    break;
                                case "c_b_f_w":
                                    wallName = "Front Wall"
                                    break;
                                case "c_b_b_w":
                                    wallName = "Back Wall"
                                    break;
                                case "L_L_L_W":
                                    wallName = "Left Leanto Left Wall"
                                    break;
                                case "L_L_F_W":
                                    wallName = "Left Leanto Front Wall"
                                    break;
                                case "L_L_B_W":
                                    wallName = "Left Leanto Back Wall"
                                    break;
                                case "R_L_F_W":
                                    wallName = "Right Leanto Front Wall"
                                    break;
                                case "R_L_B_W":
                                    wallName = "Right Leanto Back Wall"
                                    break;
                                case  "R_L_R_W":
                                    wallName = "Right Leanto Right Wall"
                                    break;
                                case "F_L_F_W":
                                    wallName = "Front Leanto Front Wall"
                                    break;
                                case "F_L_R_W":
                                    wallName = "Front Leanto Right Wall"
                                    break;
                                case "F_L_L_W":
                                    wallName = "Front Leanto Left Wall"
                                    break;
                                case "B_L_S_W":
                                    wallName = "Back Leanto Side Wall"
                                    break;
                                case "B_L_B_W":
                                    wallName = "Back Leanto Back Wall"
                                    break;
                                case "B_L_F_W":
                                    wallName = "Back Leanto Front Wall"
                                    break;
                                default:
                                    wallName = "Front Wall"
                                    break
                            }
                            let measurementType = el.entry_type.includes('door') ? "Feet" : "Inch"
                            let componentType = el.entry_type.includes('window') ? "" : "Door"
                            let component_name = `${el?.name}' on ${wallName} with ${el?.entry_overhead_type_name!=undefined ? "type" + " " + el.entry_overhead_type_name : ""} ${el?.entry_trim_kit == true ? ", 45 Degree":""} ${el?.entry_insulated === true ? ", Insulated" : ""} , ${el?.entry_garageDoor_color_Obj?.name} Color${el?.entry_certified === true ? ", Certified" : ""}${el?.entry_is_header_seal === true ? ",  Header seal" : ""}${el.entry_is_chain_hoist === true ? ", Chain hoist" : ""}${el?.entry_automatic_openers === true ? ", Automatic opener" : ""} ${el?.entry_is_outside_keypad_add_on_options === true ? ", Outside keypad" : ""}  ${el?.entry_is_remote_add_on_options === true ? ", Remote" : ""}${el?.entry_motor === true ? ", "+el.entry_motor_name +" Motor": ""} ${el?.entry_is_frame_out_add_on_options == true ? ", Frame out add on":""}`;

                            return ( 
                                <div className='summary-list-component-garage-margin-bottom'>
                                    {measurementType === 'Feet' ? (
                                        <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                                            <div className='summary-list-content summary-list-name'>{el.parent_array_key.replace("_", " ")} {componentType} ({el.nested_array_key})</div>
                                            <div className='summary-list-content summary-list-value'>{component_name} </div>
                                            <div className='summary-list-content summary-list-price'>$ {el.entry_price}</div>
                                        </div>
                                    ) : 
                                    (
                                        <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                                            <div className='summary-list-content summary-list-name'>{el.parent_array_key.replace("_", " ")} {componentType} ({el.nested_array_key})</div>
                                            <div className='summary-list-content summary-list-value'>{wallName} | {el.name} {measurementType}</div>
                                            <div className='summary-list-content summary-list-price'>$ {el.entry_price}</div>
                                        </div>
                                    )
                                    }
                                
                                </div>
                            )
                            })
                        }
                        </div>
                        <div className='hr-style'></div>                      
                    </div>
                    :null
                    }
                    {(state.const_var.post_data.building!=undefined && (state.const_var.post_data.building.extra_items.length >0 || state.const_var.post_data.building.connection_fee_end !=undefined || state.const_var.post_data.building.connection_fee_side!=undefined || state.params.p_i_o!=0))? 
                        <div className="sumary-list-outer-column ">
                            <h6 >Options</h6>
                        </div>
                    : null}
                    {(state.const_var.post_data.building!=undefined && state.const_var.post_data.building.extra_items!=undefined)?
                        Object.entries(state.const_var.post_data.building.extra_items).map(([key, value]) => {
                            return (
                                <div className={detail ? "summary-list-section-detail": "summary-list-section"} key={key}>
                                    <div  className='summary-list-content summary-list-name' >{(value.item_name !== "Jtrim")? (value.item_name) : "Side Jtrim"}</div>
                                    {
                                    value.other_item_name == "overhang" && !value.item_name.toLowerCase().includes('end') && !value.item_name.toLowerCase().includes('side') &&
                                    <div  className='summary-list-content summary-list-name' > (End + Side)</div>
                                    }
                                    {value.other_item_name != "overhang" &&
                                    <div  className='summary-list-content summary-list-value'>
                                        { extraItemLabel.indexOf(value.item_name) > -1 && value.item_quantity==1 ? (value.item_name == "4ft on Center" && value.item_price ==0 && certificate && certificate.distance_on_center && certificate.distance_on_center == 4 )? "Included" : ((state.params.isDefaultfourFeet==true))?"Included" : "Yes" : (value.is_disabled!=undefined)?"Included":value.item_quantity} 
                                    </div>
                                    }
                                    <div className='summary-list-content summary-list-price'>$ {value.item_price}</div>
                                </div>
                            )                  
                        })
                    :null }
                    {(state.const_var.post_data.building!=undefined && state.const_var.post_data.building.connection_fee_end !=undefined && state.const_var.post_data.building.connection_fee_end != 0) ? 
                        <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                            <div className='summary-list-content summary-list-name'>
                                End Connection Fees 
                            </div>
                        </div>
                    : '' }
                    {(state.const_var.post_data.building!=undefined && state.const_var.post_data.building.connection_fee_side !=undefined && state.const_var.post_data.building.connection_fee_side != 0) ?
                        <div className={detail ? "summary-list-section-detail d-none": "summary-list-section d-none"}>
                                <div className='summary-list-content summary-list-name'>
                                Side Connection Fees 
                                </div>
                        </div>
                    : '' }
                    {(state.const_var.post_data.building!=undefined && state.const_var.post_data.building.connection_fee_left_front !=undefined && state.const_var.post_data.building.connection_fee_left_front != 0) ? 
                        <div className={detail ? "summary-list-section-detail d-none": "summary-list-section d-none"}>
                            <div className="summary-list-content summary-list-name">
                            Left Front Connection Fees 
                            </div>
                            
                        </div>
                    : '' }
                    {(state.const_var.post_data.building!=undefined && state.const_var.post_data.building.connection_fee_right_front !=undefined && state.const_var.post_data.building.connection_fee_right_front != 0) ?
                        <div className={detail ? "summary-list-section-detail d-none": "summary-list-section d-none"}>
                            <div className="summary-list-content summary-list-name">
                                Right Front Connection Fees 
                            </div>
                            
                        </div>
                    : '' }
                    {(state.const_var.post_data.building!=undefined && state.const_var.post_data.building.connection_fee_left_back !=undefined && state.const_var.post_data.building.connection_fee_left_back != 0) ? 
                        <div className={detail ? "summary-list-section-detail d-none": "summary-list-section d-none"}>
                            <div className="summary-list-content summary-list-name">
                                Left Back Connection Fees 
                            </div>
                            
                        </div>
                    : '' }
                    {(state.const_var.post_data.building!=undefined && state.const_var.post_data.building.connection_fee_right_back !=undefined && state.const_var.post_data.building.connection_fee_right_back != 0) ?
                        <div className={detail ? "summary-list-section-detail d-none": "summary-list-section d-none"}>
                            <div className="summary-list-content summary-list-name">
                                Right Back Connection Fees 
                            </div> 
                        </div>
                    : '' }
                
                    {(state.const_var.post_data.building!=undefined && state.const_var.post_data.building.extra_price_cal!=undefined) ?
                        <div className="sumary-list-outer-column">
                        <h6>Other Information</h6>
                        </div>: null }
                        {(state.const_var.post_data.building!=undefined && state.const_var.post_data.building.extra_price_cal!=undefined)?
                            Object.entries(state.const_var.post_data.building.extra_price_cal).map(([key, value]) => {
                            if (key != "down_payment_rate" && key != "discount_rate" && key != "grvy_value" && key != "down_payment_discount_rate") {
                                return (
                                    <div className={detail ? "summary-list-section-detail": "summary-list-section"} key={key}>  
                                        <div className="summary-list-content summary-list-name">
                                        {(key.replace(/_/g, " ")).charAt(0).toUpperCase() + (key.replace(/_/g, " ")).slice(1)}
                                        </div>
                                    
                                </div>
                                ) 
                            }                 
                        })
                        :null}
                    {state.params.job_site_level == 'no' ? '' :
                        <div className={ detail ? "summary-list-section-detail": "summary-list-section"}>
                            <div className="summary-list-content summary-list-name">Jobsite Level </div>
                            <div className="summary-list-content summary-list-value">Yes</div>
                        </div>
                    }
                    {state.params.power_avail == 'no' ? '' :
                        <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                            <div className="summary-list-content summary-list-name">Power Available</div>
                            <div className="summary-list-content summary-list-value">Yes</div>
                        </div>
                    }

                    {(surface_level !=undefined && surface_level !== "" && surface_level !== null) && state.const_var.loginSession ? 
                        <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                            <div className="summary-list-content summary-list-name"> Surface Level</div>
                            <div className="summary-list-content summary-list-value">{properCase(surface_level)}</div>
                        </div>:''
                    }

                    {(inside_city !=undefined && inside_city !== "" && inside_city !== null) && state.const_var.loginSession ?                   
                        <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                            <div className="summary-list-content summary-list-name">Inside City Limit</div>
                            <div className="summary-list-content summary-list-value">{properCase(inside_city)}</div>
                        </div>:''
                    }
                    {(installation_ready !=undefined && installation_ready !== "" && installation_ready !== null) && state.const_var.loginSession ? 
                        <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                            <div className="summary-list-content summary-list-name">Installation Ready</div>
                            <div className="summary-list-content summary-list-value">{properCase(installation_ready)}</div>
                    </div>:''
                    }
                    {(electricity !=undefined && electricity !== "" && electricity !== null) && state.const_var.loginSession ?                   
                        <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                            <div className="summary-list-content summary-list-name"> Power Available </div>
                            <div className="summary-list-content summary-list-value">{properCase(electricity)}</div>
                        </div>:''
                    }
                    {(( (state.const_var.loginSession==false && permit != "" && permit !== null && state.params.p_s_n != undefined && state.const_var.stateManufacturerAcordingAPI && state.const_var.stateManufacturerAcordingAPI[state.params.p_s_n] && state.const_var.stateManufacturerAcordingAPI[state.params.p_s_n].is_permit_show_in_3d==true) || (state.const_var.loginSession==true && permit != ""  && permit !== null)) 
                        ) ? 
                        <div className={detail ? "summary-list-section-detail": "summary-list-section d-none"}>
                            <div className="summary-list-content summary-list-name">Permit Required</div>
                            <div className="summary-list-content summary-list-value">{permit == "cust_verify" ? "Customer To Verify" : state.const_var.post_data.building?.order_extra_items?.permit}</div>
                        </div>:''
                    }
                    
                    {(pdf_price_breakdown !== "" && pdf_price_breakdown !== null) && state.const_var.loginSession ? 
                        <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                            <div className="summary-list-content summary-list-name">Display Price Breakdown in PDF </div>
                            <div className="summary-list-content summary-list-value">{pdf_price_breakdown == "1" ? "Yes" : "No"}</div>
                        </div>:''
                    }
                    
                    {(dont_show_processing_fee_pdf !== undefined && dont_show_processing_fee_pdf !== "" && dont_show_processing_fee_pdf !== null)  && state.const_var.loginSession ? 
                        <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                            <div className="summary-list-content summary-list-name">Credit Card Fee</div>
                            <div className="summary-list-content summary-list-value">{dont_show_processing_fee_pdf == "1" ? "Included CC Fee in Order" : "Included CC Fee in Invoice only"}</div>
                        </div>:''
                    }

                    {state.params.additional_note == '' ? '' :
                    <>
                    {state.const_var.loginSession==true?
                        <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                                <div className="summary-list-content summary-list-name">Extra Notes</div>
                                <div className="summary-list-content summary-list-value">{state.params.additional_note}</div>
                        </div>:null}
                    </>
                    }

                    {/* <div className='hr-style'></div>                       */}
                {/* {(state.const_var.post_data.building!=undefined && (Object.keys(state.const_var.post_data.building.order_extra_items).length >0 ))? 
                    <div className="sumary-list-outer-column ">
                        <h6>Notes & Extra</h6>
                    </div>: null} */}
                        {(state.const_var.post_data.building!=undefined && state.const_var.post_data.building.order_extra_items!=undefined)?
                        Object.entries(state.const_var.post_data.building.order_extra_items).map(([key, value]) => {    
                            
                            if(value == 0 || value == "" || key == "has_grvy" || value == "no" || value == "yes" || key=="dont_show_processing_fee_pdf" || key=="pdf_price_breakdown" || key=="permit" || key=="additional_note" || key=="description" || value==null) return;                           
                            if(key.indexOf('_') > -1){
                                key = key.replace(/_/g, " ");
                            }   
                            key = (key=="surchargeFees")?"Surcharge Fees":properCase(key);
                            key = (key=="Processing Fee")?"CC Processing Fee":key;
                            key = (key=="Order Permit Fee")?"Permit Fee":key;
                            key = (key=="Extra Labour") ? "Extra Labor" :key;
                            
                            return (
                                <>
                                <div className={detail ? "summary-list-section-detail ": "summary-list-section "} key={key}>        
                                {/* <div className={"summary-row  repeat-loop " + (key == 'Engineer Drawings Name' ? 'd-none' : '')} key={key}>         */}
                                <div className="summary-list-content summary-list-name">
                                    { 
                                        key == "Grvy Value"? 
                                        "Gravy Value" :
                                        (key.includes('Drawings') || key.includes('drawings')) ? 
                                        ""
                                        // <>{state.const_var.post_data.building.order_extra_items['engineer_drawings_name'] != undefined ? state.const_var.post_data.building.order_extra_items['engineer_drawings_name'] : key}</>
                                        :
                                        key
                                    }
                                </div>                           
                                </div>
                                {key =='Engineer Drawings Name' && value != "None" ? 
                                    <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                                        <div className="summary-list-content summary-list-name">{value}</div>
                                        <div className="summary-list-content summary-list-value">{value}</div>
                                    </div>
                                :
                                ""}
                                </>
                            )                  
                        })
                        :null }
                        {(state.const_var.post_data.building!=undefined && state.const_var.post_data.building.lift_type != undefined && state.const_var.post_data.building.lift_type==true) ?
                            <div className={detail ? "summary-list-section-detail": "summary-list-section"}>
                                <div className="summary-list-content summary-list-name">{state.const_var.post_data.building.lifttype_name}</div>
                            </div>
                        : ''}
                        <div className='hr-style'></div> 
                        <div className="summary-list-section-detail"><p className='disclaimer-block'> <b>Disclaimer:</b></p></div>
                        <div className='summary-list-section '><div className="summary-list-content" >Colors on screen may differ slightly from actual colors.</div></div>

                        <div className='summary-list-section '><div className="summary-list-content" >Prices may change due to regional permits and certifications.</div></div>

                        <div className='summary-list-section '><div className="summary-list-content" >3D building designs are representational only, not engineered drawings.</div></div>

                        <div className='summary-list-section '><div className="summary-list-content" >Truss designs may differ by region.</div></div>

                        <div className='summary-list-section '><div className="summary-list-content" >Custom garage doors are special order items, incurring extra cost and lead time.</div></div>

                </div>
                                    
                
        </div>
    )
}

export default ProductSummary;
