import React from 'react';
import { useSelector } from "react-redux";


import carportLogo from '../../assets/images/order-pdf/carport.png';
import probuiltLogo from '../../assets/images/order-pdf/probuilt.png';
import AddressIcon from '../../assets/images/order-pdf/address-icon.png';
import EmailIcon from '../../assets/images/order-pdf/email-icon.png';
import CallIconNew from '../../assets/images/order-pdf/call-icon.png';
import CalenderIcon from '../../assets/images/order-pdf/calender-icon.png';
import FullView from '../../assets/images/pdf/building-view.png';


const baseUrl = process.env.REACT_APP_BASE_URL
const  OrderPdf = () => {
    const state = useSelector((state) => state.reducer)
    let imageData = process.env.REACT_APP_BASE_URL + FullView;
        if (state.const_var != undefined && state.const_var.i_g_A_y != undefined && state.const_var.i_g_A_y.length >= 1) {
            Object.entries(state.const_var.i_g_A_y).map(([key, value]) => {
                if (key == 0) {
                    imageData = value.image;
                }
            })
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


    const grand_total = (state.const_var.BuildingPriceArrar!=undefined && state.const_var.BuildingPriceArrar['order_total']!=undefined)?((state.const_var.BuildingPriceArrar['order_total'] + state.const_var.BuildingPriceArrar["custom_subTotal"] + state.const_var.BuildingPriceArrar['additional_charges'])).toFixed(2) :0 ;

    const down_payment = (state.const_var.BuildingPriceArrar['new_down_payment_total']!=undefined)?(state.const_var.BuildingPriceArrar['new_down_payment_total'] +state.const_var.BuildingPriceArrar['custom_down_payment_total'] + state.const_var.BuildingPriceArrar['grvy_value']).toFixed(2):0

    let newdate = new Date()
    let date = newdate.getDate();
    let month = newdate.getMonth() + 1;
    let year = newdate.getFullYear();


    // console.log('todayDate',todayDate);

    return (
        <div className="order-pdf-wrapper">
            <div className="header-repeart">
                <div className="header-repeart-border"></div>
            </div>

            <div className="order-pdf-middle-container">
                <div className="order-pdf-company-details">
                
                    <div className="company-logo">
                        <img className="img-responsive" src={state.const_var.crmSetting.main_domain_url == "carportdirect.com" ? carportLogo : probuiltLogo}/>                      
                    </div>
                    <div className="company-contect-details">
                        <div className="float-right">
                            <ul className="list-style-t1">
                                <li>
                                    <div className="list-item">
                                        <div className="icon"><img src={AddressIcon} /></div>
                                        
                                        <div className="text">{(state.const_var.crmSetting.menu_address != undefined) ? state.const_var.crmSetting.menu_address : 'null'}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list-item">
                                        <div className="icon"><img src={EmailIcon} /></div>
                                        <div className="text">{state.const_var.crmSetting.email != undefined ? state.const_var.crmSetting.email : 'null'}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list-item">
                                        <div className="icon"><img src={CallIconNew} /></div>
                                        <div className="text">{state.const_var.crmSetting.phone_number != undefined ? state.const_var.crmSetting.phone_number : 'null'}</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list-item">
                                        <div className="icon"><img src={CalenderIcon} /></div>
                                        <div className="text">{date}/{month}/{year}</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="oveflow-hidden">
                    <div className="separator-line"></div>
                </div>
                {
                    state.const_var.isShowSaveQuote===false &&
                    <>

                        <div className="amount-container">
                            <div className="amount-left">
                                <span><span className="due-text">Deposit Today :</span>
                                    {/* <br /><span className="downp-text">(DownPayment)</span> */}
                                </span>
                                <span className="amount-text">$ {down_payment}</span>
                            </div>
                            <div className="amount-right">
                                <span className="due-text">Building Total :</span>
                                <span className="amount-text">$ {parseFloat(grand_total).toFixed(2)}</span>
                            </div>
                        </div>

                        {/* <div className="oveflow-hidden">
                            <div className="separator-line"></div>
                        </div> */}
                    </>
                }

                <div className="main-heading">CUSTOMER DETAILS
                    <div className="heading-border"></div>
                </div>

                <table class='table-style-t1 with-2-td'>
                    <tbody>
                        <tr>
                            <td colspan="2">
                                <span className="field-label">Building Name</span>
                                <span className="field-text field-text">{(state.const_var.post_data.building != undefined) ? state.const_var.new_building_name : ''}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="field-label">Roof Color</span>
                                <span className="field-text "><span className="color-box" style={{background: state.params.p_r_c.replace('0x','#')}}></span> {state.params.p_r_c_name}</span>
                            </td>
                            <td className="text-center building-img-dimension" rowspan="5">
                                {(state.const_var.i_g_A_y != undefined && state.const_var.i_g_A_y.length > 0) ?
                                    <img className="img-responsive" src={imageData} />
                                    :
                                    <img className="img-responsive" src={(state.const_var.MainBuilingImage != undefined) ? state.const_var.MainBuilingImage : `${baseUrl}${FullView}`} />
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="field-label">Sides Color</span>
                                <span className="field-text "><span className="color-box" style={{background: state.params.p_w_c.replace('0x','#')}}></span> {state.params.p_w_c_name}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="field-label">Trim Color</span>
                                <span className="field-text "><span className="color-box" style={{background: state.params.p_t_c.replace('0x','#')}}></span> {state.params.p_t_c_name}</span>
                            </td>
                        </tr>
                        {
                            state.params.p_w_c_c_name != undefined && state.params.p_w_c_c_name != '' &&
                            <tr>
                                <td>
                                    <span className="field-label">Wainscot Color</span>
                                    <span className="field-text "><span className="color-box" style={{background: state.params.p_w_c_c.replace('0x','#')}}></span> {state.params.p_w_c_c_name}
                                    </span>
                                </td>
                            </tr>
                        }
                        <tr>
                            <td>
                                <span className="field-label">Color Screw</span>
                                <span className="field-text ">Yes</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="field-label">Roof Style</span>
                                <span className="field-text ">{(state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.roof_style_name : 0}</span>
                            </td>
                            <td>
                                <span className="field-label">Installation Surface</span>
                                <span className="field-text ">{state.const_var.installationValue[state.params.p_i_s]}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="field-label">Building Dimension</span>
                                <span className="field-text ">{state.params.p_w + ' ’W ' + state.params.p_d + ' ’L ' + state.params.p_h + ' ’H '}</span>
                            </td>
                            <td>
                                <span className="field-label">Gauge</span>
                                <span className="field-text ">{(state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.gauge : 0} Gauge</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="field-label">Roof Pitch</span>
                                <span className="field-text ">{(state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.roof_pitch : 0}</span>
                            </td>
                            <td>
                                <span className="field-label">Distance on Center</span>
                                <span className="field-text ">{(state.const_var.DistanceArr.length > 0 && state.const_var.DistanceArr[state.params.p_b_t] != undefined && state.const_var.DistanceArr[state.params.p_b_t][state.params.p_r_s] != undefined) ? state.const_var.DistanceArr[state.params.p_b_t][state.params.p_r_s] : 5} Feet</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="field-label">Wind/Snow Rating</span>
                                <span className="field-text ">{(state.const_var.post_data.building != undefined && state.const_var.post_data.building.certificate != undefined) ? state.const_var.post_data.building.certificate['name'] : 0}</span>
                            </td>
                            <td></td>
                        </tr>

                    </tbody>
                </table>

                <div className="main-heading">BUILDING View
                    <div className="heading-border"></div>
                </div>

                {/* {(state.const_var.i_g_A_y.length > 0) ?
                    Object.entries(state.const_var.i_g_A_y).map(([key, value]) => {
                        if (value.image_name != "2D Layout" && value.image_name != "2D Layout1") {
                            return (
                                <div className="building-view-box">
                                    <div className="view-type"><span>{value.image_name} View</span>
                                    </div>
                                    <div className="building-img">
                                        <img className="img-fluid" src={value.image} />
                                    </div>
                                </div>
                            )
                        }
                    })
                    :
                    <div className="building-view-box">
                        <div className="view-type"><span>Front View</span>
                        </div>
                        <div className="building-img">
                            <img className="img-fluid" src={(state.const_var.MainBuilingImage != undefined) ? state.const_var.MainBuilingImage : `${baseUrl}${FullView}`} />
                        </div>
                    </div>

                } */}

                {(state.const_var.i_g_A_y.length > 0) ?
                    <div className={"building-views" + (state.const_var.isShowSaveQuote===false ? ' top-view-lg' : '')}>
                        {Object.entries(state.const_var.i_g_A_y).map(([key, value]) => {
                            let imageName = value.image_name.split("_")
                            if (value.image_name != '' && value.image_name != "2D Layout" && value.image_name != "2D Layout1" ) {
                                return (
                                    <div className={"building-view" + (state.const_var.isShowSaveQuote===false ? ' top-space-lg' : '')}>
                                        {imageName!=undefined && imageName.length>0 ?<div className="view-text">{properCase(imageName[imageName.length-1])} View</div>:null}
                                        <div className="view-img">
                                            <img className="img-responsive" src={value.image} />
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    :
                    <div className={"building-view" + (state.const_var.isShowSaveQuote===false ? ' top-space-lg' : '')}>
                        <div className="view-text">Front View</div>
                        <div className="view-img">
                            <img className="img-responsive" src={(state.const_var.MainBuilingImage != undefined) ? state.const_var.MainBuilingImage : `${baseUrl}${FullView}`}  />
                        </div>
                    </div>
                    // <div className="building-view-box">
                    //     <div className="view-type"><span>Front View</span>
                    //     </div>
                    //     <div className="building-img">
                    //         <img className="img-fluid" src={(state.const_var.MainBuilingImage != undefined) ? state.const_var.MainBuilingImage : `${baseUrl}${FullView}`} />
                    //     </div>
                    // </div>

                }
                
                <div className="main-heading order-heading">Order Summary
                    <div className="heading-border"></div>
                </div>

                <table class='table-style-t1 table-w100'>
                    <tbody>
                        <tr>
                            <td >
                                <span className="field-label">Building Size</span>
                                <span className="field-text" >{state.params.p_w + ' ’W ' + state.params.p_d + ' ’L '} {(state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.roof_style_name : 0}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="field-label">Building Height</span>
                                <span className="field-text">{state.params.p_h + ' ’H '}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="field-label">Roof Pitch</span>
                                <span className="field-text">{(state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.roof_pitch : 0}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="field-label">Wind/Snow Rating</span>
                                <span className="field-text">{(state.const_var.post_data.building != undefined && state.const_var.post_data.building.certificate != undefined) ? state.const_var.post_data.building.certificate['name'] : 0}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="field-label">Front Wall</span>
                                <span className="field-text">{state.const_var.TypeWallName[(state.const_var.post_data.building!=undefined)?state.const_var.post_data.building.front_wall:0]}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="field-label">Back Wall</span>
                                <span className="field-text">{state.const_var.TypeWallName[(state.const_var.post_data.building!=undefined)?state.const_var.post_data.building.back_wall:0]}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="field-label">Left Wall</span>
                                <span className="field-text">{(state.params.p_l_w != 'Close' && state.params.p_l_w != 'Open' && state.params.p_l_w != 'One_Fourth_Close' && state.params.p_l_w != 'Three_Fourth_Close' && state.params.p_l_w != 'Half_Close') ? state.params.p_l_w + " Panel" :  state.const_var.TypeWallName[(state.const_var.post_data.building!=undefined)?state.const_var.post_data.building.left_wall:0]} {(state.const_var.post_data.building!=undefined && state.params.p_c_p_l == true)? "+ Cut Panel ": ""}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="field-label">Right</span>
                                <span className="field-text">{(state.params.p_r_w != 'Close' && state.params.p_r_w != 'Open' && state.params.p_r_w != 'One_Fourth_Close' && state.params.p_r_w != 'Three_Fourth_Close' && state.params.p_r_w != 'Half_Close') ? state.params.p_r_w + " Panel" :  state.const_var.TypeWallName[(state.const_var.post_data.building!=undefined)?state.const_var.post_data.building.right_wall:0]} {(state.const_var.post_data.building!=undefined && state.params.p_c_p_r == true)? "+ Cut Panel ": ""}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {
                    state.const_var.post_data.building!=undefined && state.const_var.post_data.building.leanto.length > 0 &&
                    <table class='table-style-t1 table-w100'>
                        <tbody>
                            {Object.entries(state.const_var.post_data.building.leanto).map(([key, value]) => {   
                            return ( 
                                <>
                                    <tr>
                                        <td>
                                            <span className="field-label">{state.const_var.mainLeantoValue[value.leanto_type]} Lean-to Size</span>
                                            <span className="field-text">{value.width} x {value.length} Feet</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="field-label">{state.const_var.mainLeantoValue[value.leanto_type]} Lean-to Height</span>
                                            <span className="field-text">{value.height} Feet</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="field-label">{state.const_var.mainLeantoValue[value.leanto_type]} Lean-to Roof Pitch</span>
                                            <span className="field-text">{value.roof_pitch}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="field-label">Alignment</span>
                                            <span className="field-text">{value.alignment}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="field-label">Front Wall</span>
                                            <span className="field-text">{state.const_var.TypeWallName[value.front_wall]}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="field-label">Side Wall</span>
                                            <span className="field-text">{(value.side_wall!="open" && value.side_wall!="close" && value.side_wall != 'one_fourth_close' && value.side_wall != 'three_fourth_close' && value.side_wall != 'half_close')?value.side_wall + ' Panel':state.const_var.TypeWallName[value.side_wall]}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="field-label">Back Wall</span>
                                            <span className="field-text">{state.const_var.TypeWallName[value.back_wall]}</span>
                                        </td>
                                    </tr>
                                    {/* <tr>
                                        <td></td>
                                    </tr> */}
                                    {/* {
                                        (value.utility_length != undefined || value.insulation_type != undefined) &&
                                        <tr>
                                            {
                                                value.utility_length != undefined && <td>{value.utility_length} Feet</td>
                                            }
                                            {
                                                value.insulation_type != undefined && <td>{value.insulation_type.name} {(value.insulation == "full")? " (Full Building)": " (Roof only)"}</td>
                                            }
                                            {
                                                value.utility_length == undefined || value.insulation_type == undefined &&
                                                <td></td>
                                            }
                                        </tr>
                                    } */}
                                    {
                                        value.utility_length != undefined &&
                                        <tr>
                                            <td>
                                                <span className="field-label">Utility</span>
                                                <span className="field-text">{value.utility_length} Feet</span>
                                            </td>
                                        </tr>
                                    }
                                    {
                                        value.insulation_type != undefined &&
                                        <tr>
                                            <td>
                                                <span className="field-label">Insulation</span>
                                                <span className="field-text">{value.insulation_type.name} {(value.insulation == "full")? " (Full Building)": " (Roof only)"}</span>
                                            </td>
                                        </tr>
                                    }
                                </>
                                )
                
                                })
                            }
                            {
                                (state.const_var.post_data.building!=undefined && state.const_var.post_data.building.connection_fee_end !=undefined && state.const_var.post_data.building.connection_fee_end != 0) &&
                                <tr>
                                    <td>
                                        <span className="field-label">End Connection Fees </span>
                                        <span className="field-text">Yes</span>
                                    </td>
                                </tr>
                            }
                            {
                                (state.const_var.post_data.building!=undefined && state.const_var.post_data.building.connection_fee_side !=undefined && state.const_var.post_data.building.connection_fee_side != 0) &&
                                <tr>
                                    <td>
                                        <span className="field-label">Side Connection Fees</span>
                                        <span className="field-text">Yes</span>
                                    </td>
                                </tr>
                            }
                            {
                                (state.const_var.post_data.building!=undefined && state.const_var.post_data.building.connection_fee_left_front !=undefined && state.const_var.post_data.building.connection_fee_left_front != 0) &&
                                <tr>
                                    <td> 
                                        <span className="field-label">Left Front Connection Fees </span>
                                        <span className="field-text">Yes</span>
                                    </td>
                                </tr>
                            }
                            {
                                (state.const_var.post_data.building!=undefined && state.const_var.post_data.building.connection_fee_right_front !=undefined && state.const_var.post_data.building.connection_fee_right_front != 0) &&
                                <tr>
                                    <td>
                                        <span className="field-label">Right Front Connection Fees </span>
                                        <span className="field-text">Yes</span>
                                    </td>
                                </tr>
                            }
                            {
                               (state.const_var.post_data.building!=undefined && state.const_var.post_data.building.connection_fee_left_back !=undefined && state.const_var.post_data.building.connection_fee_left_back != 0) &&
                                <tr>
                                    <td>
                                        <span className="field-label">Left Back Connection Fees </span>
                                        <span className="field-text">Yes</span>
                                    </td>
                                </tr>
                            }
                            {
                               (state.const_var.post_data.building!=undefined && state.const_var.post_data.building.connection_fee_right_back !=undefined && state.const_var.post_data.building.connection_fee_right_back != 0)  &&
                                <tr>
                                    <td>
                                        <span className="field-label">Right Back Connection Fees </span>
                                        <span className="field-text">Yes</span>
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                }
                {(state.const_var.post_data.building!=undefined && state.const_var.post_data.building.entry_points!=undefined) &&
                    <table class='table-style-t1 table-w100'>
                        <tbody>
                            {
                                Object.entries(state.const_var.post_data.building.entry_points).map(([key, value]) => {
                     
                                    const rename_garage_door = value.entry_doorNewType && value.entry_doorNewType == "Custom Size" ? "Custom Garage Door" :"Garage Door"
                                    const rename_garage_door_frameout = value.entry_doorNewType && value.entry_doorNewType == "Custom Size" ? "Custom Garage Frameout" :"Garage Frameout"
                                    const rename_walk_in_door = value.entry_doorNewType && value.entry_doorNewType == "Custom Size" ? "Custom Walk-in Door" :"Walk-in Door"
                                    const rename_walk_in_door_frameout = value.entry_doorNewType && value.entry_doorNewType == "Custom Size" ? "Custom Walk-in Frameout" :"Walk-in Frameout"
                                    const rename_window = value.entry_doorNewType && value.entry_doorNewType == "Custom Size" ? "Custom Window" :"Window"
                                    const rename_window_frameout = value.entry_doorNewType && value.entry_doorNewType == "Custom Size" ? "Custom Window Frameout" :"Window Frameout"
                                    
                                    let cName = {
                                       "garage_door":rename_garage_door,
                                       "garage_door_frameout":rename_garage_door_frameout,
                                       "walkin":rename_walk_in_door,
                                       "walk_in_door":rename_walk_in_door,
                                       "walkin_frameout":rename_walk_in_door_frameout,
                                       "window":rename_window,
                                       "window_frameout":rename_window_frameout
                                    }
                                    return (<>
                                        {
                                            (value.is_breezeway_frameout === false) &&
                                            <>
                                                <tr>
                                                    <td>
                                                        {/* { (value.entry_type.includes('_frameout') == true)?cName[value.entry_type] + ' ('+value.nested_array_key+')':cName[value.entry_type] + ' ('+value.nested_array_key+')' }
                                                            &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 
                                                        {state.params.isBreezeway && value.entry_location == "fend" ?  "Front Storage Front" : state.params.isBreezeway && value.entry_location == "bend" ? "Back Storage Back" : state.const_var.updated_entry_wall_location[value.entry_location]} Wall  */}
                                                        <span className="field-label">{ (value.entry_type.includes('_frameout') == true)?cName[value.entry_type] + ' ('+value.nested_array_key+')':cName[value.entry_type] + ' ('+value.nested_array_key+')' }</span>
                                                        <span className="field-text">
                                                            {state.params.isBreezeway && value.entry_location == "fend" ?  "Front Storage Front" : state.params.isBreezeway && value.entry_location == "bend" ? "Back Storage Back" : state.const_var.updated_entry_wall_location[value.entry_location]} Wall 
                                                        </span>                                                       
                                                    </td>
                                                </tr>
                                                {/* <tr>
                                                    <td>
                                                        {value.name.replace("_", " ")} {value.entry_type == 'walkin' || value.entry_type == 'window' ? 'Inch' : 'Feet'}
                                                    </td>
                                                </tr> */}
                                                {(value.entry_overhead_type_name!=undefined) &&
                                                    <tr>
                                                        <td> 
                                                            <span className="field-label">{value.entry_overhead_type_name}</span>
                                                            <span className="field-text">Yes</span>
                                                        </td>
                                                    </tr>
                                                }
                                                {(value.entry_trim_kit==true) && 
                                                    <tr>
                                                        <td>
                                                            <span className="field-label"> 45 Degree Trimkit</span>
                                                            <span className="field-text">Yes</span>
                                                        </td>
                                                    </tr>
                                                }
                                                {(value.entry_header_seal==true) && 
                                                    <tr>
                                                        <td>
                                                            <span className="field-label">Header Seal</span>
                                                            <span className="field-text">Yes</span>
                                                        </td>
                                                    </tr>
                                                }
                                                {(value.entry_chain_hoist==true) && 
                                                    <tr>
                                                        <td>
                                                            <span className="field-label">Chain hoist</span>
                                                            <span className="field-text">Yes</span>
                                                        </td>
                                                    </tr>
                                                }
                                                {(value.entry_certified==true) && 
                                                    <tr>
                                                        <td>
                                                            <span className="field-label">Certified</span>
                                                            <span className="field-text">Yes</span>
                                                        </td>
                                                    </tr>
                                                }
                                                {(value.entry_automatic_openers==true) && 
                                                    <tr>
                                                        <td>
                                                            <span className="field-label"> Automatic Openers</span>
                                                            <span className="field-text">Yes</span>
                                                        </td>
                                                    </tr>
                                                }
                                                {(value.installation_is_end_wall!=undefined && value.installation_is_end_wall!="no" && value.installation_is_end_wall!="") && 
                                                    <tr>
                                                        <td>
                                                            <span className="field-label">End Installation Fee</span>
                                                            <span className="field-text">Yes</span>
                                                        </td>
                                                    </tr>
                                                }
                                                {(value.installation_is_side_wall!=undefined && value.installation_is_side_wall!="no" && value.installation_is_side_wall!="") && 
                                                    <tr>
                                                        <td> 
                                                            <span className="field-label">Side Installation Fee</span>
                                                            <span className="field-text">Yes</span>
                                                        </td>
                                                    </tr>
                                                }
                                                {(value.entry_garageDoor_color_Obj!=undefined && value.entry_type == "garage_door") && 
                                                    <tr>
                                                        <td>
                                                            <span className="field-label"> {`Garage Door Color (${value.entry_garageDoor_color_Obj?.name})`} </span>
                                                            <span className="field-text">Yes</span>
                                                        </td>
                                                    </tr>
                                                }
                                                {(value.entry_insulated==true) && 
                                                    <tr>
                                                        <td>
                                                            <span className="field-label">Insulated</span>
                                                            <span className="field-text">Yes</span>
                                                        </td>
                                                    </tr>
                                                }
                                                {(value.entry_motor==true) && 
                                                    <tr>
                                                        <td>
                                                            <span className="field-label">Motors</span>
                                                            <span className="field-text">{value.entry_motor_name}</span>
                                                        </td>
                                                    </tr>
                                                }
                                                <>
                                                    {
                                                        Object.keys(value).map((e) => {
                                                        if (e.includes("add_on_options") && !e.includes("_is") && !e.includes("_price"))  {
                                                            let name = e.replace("entry_", "").replace("_add_on_options", "").split("_").join(" ");
                                                            name = name? name[0].toUpperCase() + name.slice(1): '';
                                                            return (value[e]==true?
                                                                <tr>
                                                                    <td>
                                                                        <span className="field-label">Add On:</span>
                                                                        <span className="field-text">{name}</span>
                                                                    </td>
                                                                </tr>
                                                            // <div className="summary-info">
                                                            //     <aside className="summary-info-left">
                                                            //     Add On: {name}
                                                            //     </aside>
                                                            //     <aside className="summary-info-right">
                                                            //     <CurrencyFormat fixedDecimalScale="2" decimalSeparator="." decimalScale="2" value={value[e + "_price"]} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                                            //     </aside>
                                                            // </div>
                                                            :null)
                                                        }
                                                        })
                                                    }
                                                </>
                                            </>
                                        }
                                    </>)
                                })
                            }
                        </tbody>
                    </table>
                } 
                {
                    (state.const_var.post_data.building!=undefined && state.const_var.post_data.building.extra_items!=undefined) &&
                    <table class='table-style-t1 table-w100'>
                        <tbody>
                            {
                               Object.entries(state.const_var.post_data.building.extra_items).map(([key, value]) => {
                                return (
                                    <tr>
                                        <td>
                                            <span className="field-label">
                                                {(value.item_name !== "Jtrim")? (value.item_name) : "Side Jtrim"}
                                                {
                                                    value.other_item_name == "overhang" && !value.item_name.toLowerCase().includes('end') && !value.item_name.toLowerCase().includes('side') &&
                                                    <> (End + Side)</>
                                                }
                                                {/* {
                                                    value.other_item_name != "overhang" &&
                                                    <>
                                                        :<span className="dark-span">{ extraItemLabel.indexOf(value.item_name) > -1 && value.item_quantity==1 ? (value.item_name == "4ft on Center" && value.item_price ==0 && certificate && certificate.distance_on_center && certificate.distance_on_center == 4 )? "Included" : ((state.params.isDefaultfourFeet==true))?"Included" : "Yes" : (value.is_disabled!=undefined)?"Included":value.item_quantity} </span>
                                                    </>
                                                } */}
                                            </span>
                                            {
                                                 value.other_item_name != "overhang" ?
                                                    <span className="field-text">{ extraItemLabel.indexOf(value.item_name) > -1 && value.item_quantity==1 ? (value.item_name == "4ft on Center" && value.item_price ==0 && certificate && certificate.distance_on_center && certificate.distance_on_center == 4 )? "Included" : ((state.params.isDefaultfourFeet==true))?"Included" : "Yes" : (value.is_disabled!=undefined)?"Included":value.item_quantity} </span>
                                                    :
                                                    <span className="field-text">Yes</span>
                                            }
                                        </td>
                                    </tr>
                                )                  
                                })
                            }
                        </tbody>
                    </table>
                }
                {((state.const_var.post_data.building!=undefined && state.const_var.post_data.building.extra_price_cal!=undefined) || (state.const_var.post_data.building!=undefined && (Object.keys(state.const_var.post_data.building.order_extra_items).length >0 ))) &&
                    <div className="main-heading">Other Information
                    <div className="heading-border"></div>
                </div>}

                <table class='table-style-t1 table-w100'>
                    <tbody>
                        {(state.const_var.post_data.building!=undefined && state.const_var.post_data.building.extra_price_cal!=undefined)?
                            Object.entries(state.const_var.post_data.building.extra_price_cal).map(([key, value]) => {
                                if (key != "down_payment_rate" && key != "discount_rate" && key != "grvy_value" && key != "down_payment_discount_rate") {
                                return (
                                    <tr>
                                        <td>
                                            <span className="field-label">
                                            {(key.replace(/_/g, " ")).charAt(0).toUpperCase() + (key.replace(/_/g, " ")).slice(1)}
                                            </span>
                                            <span className="field-text">Yes</span>
                                        </td>
                                    </tr>
                                    ) 
                                }                 
                            })
                            :null   
                            }

                            {state.params.job_site_level == 'no' ? '' :
                                <tr>
                                    <td>
                                    <span className="field-label"> Jobsite Level</span>
                                    <span className="field-text">Yes</span>
                                    </td>
                                </tr>
                            }
                            {state.params.power_avail == 'no' ? '' :
                                <tr className={state.const_var.loginSession==true?"d-none": ""}>
                                    <td>
                                    <span className="field-label"> Power Available</span>
                                    <span className="field-text">Yes</span>
                                    </td>
                                </tr>
                            }
                            {(surface_level !== "" && surface_level !== null) && state.const_var.loginSession ? 
                                <tr>
                                    <td>
                                        <span className="field-label">Surface Level</span>
                                        <span className="field-text">{properCase(surface_level)}</span>
                                    </td>
                                </tr>:''
                            }

                            {(inside_city !== "" && inside_city !== null) && state.const_var.loginSession ?                   
                                <tr>
                                    <td>
                                        <span className="field-label">Inside City Limit</span>
                                        <span className="field-text">{properCase(inside_city)}</span>
                                    </td>
                                </tr>:''
                            }
                            {(installation_ready !== "" && installation_ready !== null) && state.const_var.loginSession ? 
                                <tr>
                                    <td>
                                        <span className="field-label">Installation Ready</span>
                                        <span className="field-text"> {properCase(installation_ready)}</span>
                                    </td>
                                </tr>:''
                            }
                            {(electricity !== "" && electricity !== null) && state.const_var.loginSession ? 
                                <tr>
                                    <td>
                                        <span className="field-label">Power Available</span>
                                        <span className="field-text"> {properCase(electricity)}</span>
                                    </td>
                                </tr>:''
                            }
                            {(( (state.const_var.loginSession==false && permit != "" && permit !== null && state.params.p_s_n != undefined && state.const_var.stateManufacturerAcordingAPI && state.const_var.stateManufacturerAcordingAPI[state.params.p_s_n] && state.const_var.stateManufacturerAcordingAPI[state.params.p_s_n].is_permit_show_in_3d==true) || (state.const_var.loginSession==true && permit != ""  && permit !== null)) && state.const_var.crmSetting.is_module_name!="inventory"
                                ) ? 
                                <tr>
                                    <td>
                                        <span className="field-label"> Permit Required</span>
                                        <span className="field-text">{permit == "cust_verify" ? "Customer To Verify" : properCase(state.const_var.order_extra_items.permit)} </span>
                                    </td>
                                </tr>:''
                            }
                            {/* {(pdf_price_breakdown !== "" && pdf_price_breakdown !== null) && state.const_var.loginSession ? 
                                <tr>
                                    <td>
                                        <span className="field-label">Display Price Breakdown in PDF</span>
                                        <span className="field-text"> {pdf_price_breakdown == "1" ? "Yes" : "No"}</span>
                                    </td>
                                </tr>:''
                            } */}
                            {(dont_show_processing_fee_pdf !== undefined && dont_show_processing_fee_pdf !== "" && dont_show_processing_fee_pdf !== null)  && state.const_var.loginSession ? 
                                <tr>
                                    <td>
                                        <span className="field-label"> Credit Card Fee</span>
                                        <span className="field-text"> {dont_show_processing_fee_pdf == "1" ? "Included CC Fee in Order" : "Included CC Fee in Invoice only"}</span>
                                    </td>
                                </tr>:''
                            }
                            {state.params.additional_note == '' ? '' :
                                <>
                                    {state.const_var.loginSession==true ?
                                    <tr>
                                        <td>
                                            <span className="field-label"> Extra Notes</span>
                                            <span className="field-text"> {state.params.additional_note}</span>
                                        </td>
                                    </tr>:null}
                                </>
                            }


                            {(state.const_var.post_data.building!=undefined && state.const_var.post_data.building.order_extra_items!=undefined) &&
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
                                                <tr className={key == 'Engineer Drawings Name' ? 'd-none' : ''}>
                                                    <td>
                                                        <span className="field-label">
                                                            { 
                                                                key == "Grvy Value"? 
                                                                "Gravy Value" :
                                                                key =='Engineer Drawings' ? 
                                                                <>{state.const_var.post_data.building.order_extra_items['engineer_drawings_name'] != undefined ? state.const_var.post_data.building.order_extra_items['engineer_drawings_name'] : key}</>
                                                                :
                                                                key
                                                            }
                                                        </span>
                                                        <span className="field-text">Yes</span>
                                                    </td>
                                                </tr>
                                            )                  
                                })
                            }
                            {(state.const_var.post_data.building!=undefined && state.const_var.post_data.building.lift_type != undefined && state.const_var.post_data.building.lift_type==true) &&
                            <tr>
                                <td>
                                    <span className="field-label">Lift </span>
                                    <span className="field-text"> {state.const_var.post_data.building.lifttype_name}</span>
                                </td>
                            </tr>
                            }
                        {/* <tr>
                            <td>
                                <span className="field-label">Window</span>
                                <span className="field-text">24” X 36”</span>
                            </td>
                            <td>
                                <span className="field-label">Window</span>
                                <span className="field-text">24” X 36”</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="field-label">Door</span>
                                <span className="field-text">10’ X 8’</span>
                            </td>
                            <td>
                                <span className="field-label">Door Typ</span>
                                <span className="field-text">Roll-up</span>
                            </td>
                        </tr> */}
                    </tbody>
                </table>

                <div className="main-heading">TERMS & CONDITIONS
                    <div className="heading-border"></div>
                </div>

                <div className="terms-conditions-cnt">
                    <h1>No Agency</h1>
                    <p>The Dealer named on the face of this Order is NOT an agent of Seller for any purpose except receipt of the Deposit. No representation or agreement by the Dealer is binding on the seller.</p>

                    <h1>Rejection of Order & Cancellation of Contract</h1>
                    <p>Seller reserves the right, at any time before installation of the Unit, to reject this Order or cancel this contract by notice in writing to Buyer. Upon giving such notice, Seller will refund any deposit received from Buyer. Buyer agrees that such refund shall be Buyer’s exclusive remedy for such cancellation.</p>

                    <h1>Legal Authority for Installation</h1>
                    <p>Before installation of the Unit, Buyer shall locate and mark any underground utilities and obtain every permit or other authorization required for the lawful erection of the Unit on that certain site (the “site”, designated by Buyer upon the property specified on the face hereof if Buyer fails! To obtain any such required permit or authorization: (i) such failure voids any and all warranties otherwise applicable to the Unit, and (ii) Buyer shall indemnify and hold Seller harmless for all damages or costs, including attorney fees, which Seller may incur as a result thereof, Seller will install the Unit or the Site; but ,if Seller delivers the unassembled Unit and installation is not completed due to Buyer’s breach of contract by failure to obtain any required permit or by any other failure to adequately prepare the site, Seller may, in its sole discretion, terminate this contract and retain Buyer’s deposit as liquidated damage for Buyer’s breach.</p>

                    <h1>Site Preparation</h1>
                    <p>Before delivery, Buyer shall designate a site on the property identified as the Location on the face hereof and prepare such site for installation of the Unit, which preparation shall include making the site level, removing all electrical wire less than 15 feet above the intended height of the Unit, removing all underground utilities below the site, and any other improvement reasonably necessary. If Seller determines that the site is not prepared or suitable for installation, Seller may, at its option, terminate this contract or make such further improvements as may be reasonably necessary</p>

                    <h1>Scheduling Delivery and Installation</h1>
                    <p>After the order and proper permits are received which will be two to four days in advance of the installation date. The scheduling department must speak with you to confirm the installation date. Buyer may, by written notice received by Seller not more than 7 days after Seller’s acceptance hereon, the order is subject to any price increase that arises. In no event will Seller be liable for any damage or consequential damages resulting from any delay in delivery or installation of the unit. The average wait time is 6.8 weeks once all required permits are received; however, this is not a guarantee . (Orders placed late summer to early fall/ winter could experience a delay due to weather and/ or holidays).</p>
                </div>

                {/* <div class="customer-sign">Customer Signature</div> */}
            </div>
        </div>

    )
}

export default OrderPdf;