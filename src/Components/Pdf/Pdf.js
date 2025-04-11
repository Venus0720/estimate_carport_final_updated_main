import React from 'react';
import { useSelector } from "react-redux";

import OrderPdf from "./OrderPdf";

import FullView from '../../assets/images/pdf/building-view.png';
import CallIcon from '../../assets/images/pdf/call.svg';
import LocationIcon from '../../assets/images/pdf/location.svg';
import MessageIcon from '../../assets/images/pdf/message.svg';


const baseUrl = process.env.REACT_APP_BASE_URL

const  Pdf = () => {
    const state = useSelector((state) => state.reducer)
    let imageData = process.env.REACT_APP_BASE_URL + FullView;
        if (state.const_var != undefined && state.const_var.i_g_A_y != undefined && state.const_var.i_g_A_y.length >= 1) {
            Object.entries(state.const_var.i_g_A_y).map(([key, value]) => {
                if (key == 0) {
                    imageData = value.image;
                }
            })
        }
    return (

        <>

        <OrderPdf />


        {/* <div className="pdf-container-wrapper">
            <div className="pdf-container">
                <div className="container">
                    <div className="row header">
                        <div className="col-12">
                            <table className="table table-bordered left-sec">
                                <tr>
                                    <td className="logo-sec">
                                        <div className="logo-box">
                                            <div className="">
                                                <img className="img-fluid" src={window.location.origin + '/logo.svg'} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="header-list">
                                            <h1>{state.const_var.crmSetting.BuisnessName}</h1>
                                            <ul className="list">
                                                <li>
                                                    <div className="list-box">
                                                        <div className="icon">
                                                            <img src={process.env.REACT_APP_BASE_URL + LocationIcon} />
                                                        </div>
                                                        <div className="text pt-0">{(state.const_var.crmSetting.menu_address != undefined) ? state.const_var.crmSetting.menu_address : 'null'}</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="list-box">
                                                        <div className="icon">
                                                            <img src={process.env.REACT_APP_BASE_URL + MessageIcon} />
                                                        </div>
                                                        <div className="text">{state.const_var.crmSetting.email}</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="list-box">
                                                        <div className="icon">
                                                            <img src={process.env.REACT_APP_BASE_URL + CallIcon} />
                                                        </div>
                                                        <div className="text">{state.const_var.crmSetting.phone_number}</div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>

                    </div>
                    <div className="row customer-details">
                        <div className="col-12">
                            <div className="sec-title">Building Details
                                <div className="title-border"></div>
                            </div>
                            <table className="table table-bordered">
                                <tr>

                                    <td>
                                        <h1>{(state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.other_building_type_name : ''}</h1>
                                        <div className="row top-right-sec">
                                            <div className="col-5">
                                                <ul className="list">
                                                    <li>
                                                        <div className="check-box">
                                                            <div className="box checked"></div>
                                                            <div className="text">Roof Color: {state.params.p_r_c_name}</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="check-box">
                                                            <div className="box checked"></div>
                                                            <div className="text">Trim Color: {state.params.p_t_c_name}</div>
                                                        </div>
                                                    </li>
                                                    <li className="d-none">
                                                        <div className="check-box">
                                                            <div className="box checked"></div>
                                                            <div className="text">Sides/Ends Color: {state.params.p_w_c_name}</div>
                                                        </div>
                                                    </li>
                                                    <li className="d-none">
                                                        <div className="check-box">
                                                            <div className="box checked"></div>
                                                            <div className="text">Wainscot Color: {state.params.p_w_c_c_name}</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="check-box">
                                                            <div className="box checked"></div>
                                                            <div className="text">Installation State: {(state.const_var.stateNameAcordingAPI[state.params.p_s_n] != undefined) ? state.const_var.stateNameAcordingAPI[state.params.p_s_n] : ''}</div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-7 text-right">
                                                {(state.const_var.i_g_A_y != undefined && state.const_var.i_g_A_y.length > 0) ?
                                                    <img className="img-fluid" src={imageData} />
                                                    :
                                                    <img className="img-fluid" src={(state.const_var.MainBuilingImage != undefined) ? state.const_var.MainBuilingImage : `${baseUrl}${FullView}`} />
                                                }
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                            </table>
                            <table className="table table-striped">
                                <tr>
                                    <td>
                                        <ul className="inline-check-list">
                                            <li>
                                                <div className="check-box">
                                                    <div className="text">Jobsite Level?
                                                        <span className="text-space">{state.params.job_site_level}</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="check-box">
                                                    <div className="text">Electricity Available?
                                                        <span className="text-space">{state.params.power_avail}</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="check-box">
                                                    <div className="text">Installation Surface? <span className="text-space">{state.const_var.installationValue[state.params.p_i_s]}</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>
                            <table className="table table-striped">
                                <tr>

                                    <td>
                                        <label className="label-title">Installation State</label>
                                        <div className="label-text">{(state.const_var.stateNameAcordingAPI[state.params.p_s_n] != undefined) ? state.const_var.stateNameAcordingAPI[state.params.p_s_n].name : ''}</div>
                                    </td>
                                    <td>
                                        <label className="label-title">Building Name</label>
                                        <div className="label-text">{(state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.other_building_type_name : ''}</div>
                                    </td>
                                    <td>
                                        <label className="label-title">Roof Style</label>
                                        <div className="label-text">{(state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.roof_style_name : 0}</div>
                                    </td>
                                    <td>
                                        <label className="label-title">Installation Surface</label>
                                        <div className="label-text">{state.const_var.installationValue[state.params.p_i_s]}</div>
                                    </td>

                                    <td>
                                        <label className="label-title">Building Dimension</label>
                                        <div className="label-text">{state.params.p_w + ' ’W ' + state.params.p_d + ' ’L ' + state.params.p_h + ' ’H '}</div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label className="label-title">Guage</label>
                                        <div className="label-text">{(state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.gauge : 0} Guage</div>
                                    </td>
                                    <td>
                                        <label className="label-title">Roof Pitch</label>
                                        <div className="label-text">{(state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.roof_pitch : 0}</div>
                                    </td>
                                    <td>
                                        <label className="label-title">Wind/Snow Rating</label>
                                        <div className="label-text">{(state.const_var.post_data.building != undefined && state.const_var.post_data.building.certificate != undefined) ? state.const_var.post_data.building.certificate['name'] : 0}</div>
                                    </td>
                                    <td>
                                        <label className="label-title">Distance on Center</label>
                                        <div className="label-text">{(state.const_var.DistanceArr.length > 0 && state.const_var.DistanceArr[state.params.p_b_t] != undefined && state.const_var.DistanceArr[state.params.p_b_t][state.params.p_r_s] != undefined) ? state.const_var.DistanceArr[state.params.p_b_t][state.params.p_r_s] : 5} Feet</div>
                                    </td>
                                    <td></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <table className="table table-striped items-summay-table">
                                <tr>
                                    <td className="w-640">{state.params.p_w + ' ’W ' + state.params.p_d + ' ’L '} {(state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.roof_style_name : 0}</td>
                                    <td>1</td>
                                    {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                        <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true && state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.roof_style_price : 0}</td>
                                        : <td></td>
                                    }
                                </tr>
                                <tr>
                                    <td className="w-640">{state.params.p_h + ' ’H '}</td>
                                    <td>1</td>
                                    {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                        <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true && state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.height_price : 0}</td>
                                        : <td></td>
                                    }
                                </tr>
                                <tr>
                                    <td className="w-640">{(state.const_var.post_data.building != undefined && state.const_var.post_data.building.certificate != undefined) ? state.const_var.post_data.building.certificate['name'] : "Uncertified"}</td>
                                    <td>1</td>
                                    {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                        <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true && state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.certificate_price : 0}</td>
                                        : <td></td>
                                    }
                                </tr>
                                <tr>
                                    <td className="w-640">{(state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.roof_pitch : 0}</td>
                                    <td>1</td>
                                    {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                        <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true && state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.roof_pitch_price : 0}</td>
                                        : <td></td>
                                    }
                                </tr>
                                {(state.const_var.post_data.building != undefined && state.const_var.post_data.building.has_utility == true) ?
                                    <tr>
                                        <td className="w-640">Utility Building ({(state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.utility_length : 0} Feet)</td>
                                        <td>1</td>
                                        {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                            <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true && state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.utility_price : 0}</td>
                                            : <td></td>
                                        }
                                    </tr>
                                    : null
                                }
                                <tr>
                                    <td>Front Wall ({state.params.p_f_w})</td>
                                    <td>1</td>
                                    {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                        <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true && state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.front_wall_price : 0}</td>
                                        : <td></td>
                                    }
                                </tr>
                                <tr>
                                    <td>Back Wall ({state.params.p_b_w})</td>
                                    <td>1</td>
                                    {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                        <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true && state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.back_wall_price : 0}</td>
                                        : <td></td>
                                    }
                                </tr>
                                <tr>
                                    <td>Left Wall ({state.params.p_l_w})</td>
                                    <td>1</td>
                                    {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                        <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true && state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.left_wall_price : 0}</td>
                                        : <td></td>
                                    }
                                </tr>
                                <tr>
                                    <td>Right Wall ({state.params.p_r_w})</td>
                                    <td>1</td>
                                    {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                        <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true && state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.right_wall_price : 0}</td>
                                        : <td></td>
                                    }
                                </tr>
                                <>
                                    {(state.const_var.post_data.building != undefined) && state.params.add_left_lean == true ?
                                        Object.entries(state.const_var.post_data.building.leanto).map(([key, value]) => {
                                            if (value.leanto_type == 1) {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>Left Lean-to Size {value.width} x {value.length} Feet</td>
                                                            <td>1</td>
                                                            {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                                                <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ? value.basic_price : 0}</td>
                                                                : <td></td>
                                                            }
                                                        </tr>
                                                        <tr>
                                                            <td>Left Lean-to Height {value.height} Feet</td>
                                                            <td>1</td>
                                                            {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                                                <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ? value.height_price : 0}</td>
                                                                : <td></td>
                                                            }
                                                        </tr>
                                                        <tr>
                                                            <td>Left Lean-to Roof Pitch {value.roof_pitch}</td>
                                                            <td>1</td>
                                                            {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                                                <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ? value.roof_pitch_price : 0}</td>
                                                                : <td></td>
                                                            }
                                                        </tr>
                                                        <tr>
                                                            <td>Alignment {(state.const_var.TypeAlingnment[state.params.leantoAlignmentLeft])}</td>
                                                            <td>1</td>
                                                            {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                                                <td>$0</td>
                                                                : <td></td>
                                                            }
                                                        </tr>
                                                        {(value.certificate != undefined) ?
                                                            <tr>
                                                                <td>{(value.certificate.name == "Other") ? value.certificate_other_name : value.certificate.name}</td>
                                                                <td>1</td>
                                                                {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                                                    <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ? value.certificate_price : 0}</td>
                                                                    : <td></td>
                                                                }
                                                            </tr>
                                                            : null
                                                        }
                                                        <tr>
                                                            <td>Front Wall ({value.front_wall})</td>
                                                            <td>1</td>
                                                            {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                                                <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ? value.front_wall_price : 0}</td>
                                                                : <td></td>
                                                            }
                                                        </tr>
                                                        <tr>
                                                            <td>Left Wall ({value.side_wall})</td>
                                                            <td>1</td>
                                                            {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                                                <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ? value.side_wall_price : 0}</td>
                                                                : <td></td>
                                                            }
                                                        </tr>
                                                        <tr>
                                                            <td>Back Wall ({value.back_wall})</td>
                                                            <td>1</td>
                                                            {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                                                <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ? value.back_wall_price : 0}</td>
                                                                : <td></td>
                                                            }
                                                        </tr>
                                                        {value.utility_length != undefined ?
                                                            <tr>
                                                                <td>Utility Storage ({value.utility_length} Feet)</td>
                                                                <td>1</td>
                                                                {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                                                    <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ? value.utility_price : 0}</td>
                                                                    : <td></td>
                                                                }
                                                            </tr>
                                                            : null
                                                        }
                                                    </>
                                                )
                                            }
                                        })
                                        : null}
                                </>
                                <>
                                    {(state.const_var.post_data.building != undefined) && state.params.add_right_lean == true ?
                                        Object.entries(state.const_var.post_data.building.leanto).map(([key, value]) => {
                                            if (value.leanto_type == 2) {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>Right Lean-to Size {value.width} x {value.length} Feet</td>
                                                            <td>1</td>
                                                            {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                                                <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ? value.basic_price : 0}</td>
                                                                : <td></td>
                                                            }
                                                        </tr>
                                                        <tr>
                                                            <td>Right Lean-to Height {value.height} Feet</td>
                                                            <td>1</td>
                                                            {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                                                <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ? value.height_price : 0}</td>
                                                                : <td></td>
                                                            }
                                                        </tr>
                                                        <tr>
                                                            <td>Right Lean-to Roof Pitch {value.roof_pitch}</td>
                                                            <td>1</td>
                                                            {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                                                <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ? value.roof_pitch_price : 0}</td>
                                                                : <td></td>
                                                            }
                                                        </tr>
                                                        <tr>
                                                            <td>Alignment {(state.const_var.TypeAlingnment[state.params.leantoAlignmentLeft])}</td>
                                                            <td>1</td>
                                                            {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                                                <td>$0</td>
                                                                : <td></td>
                                                            }
                                                        </tr>
                                                        {(value.certificate != undefined) ?
                                                            <tr>
                                                                <td>{(value.certificate.name == "Other") ? value.certificate_other_name : value.certificate.name}</td>
                                                                <td>1</td>
                                                                {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                                                    <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ? value.certificate_price : 0}</td>
                                                                    : <td></td>
                                                                }
                                                            </tr>
                                                            : null
                                                        }
                                                        <tr>
                                                            <td>Front Wall ({value.front_wall})</td>
                                                            <td>1</td>
                                                            {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                                                <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ? value.front_wall_price : 0}</td>
                                                                : <td></td>
                                                            }
                                                        </tr>
                                                        <tr>
                                                            <td>Left Wall ({value.side_wall})</td>
                                                            <td>1</td>
                                                            {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                                                <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ? value.side_wall_price : 0}</td>
                                                                : <td></td>
                                                            }
                                                        </tr>
                                                        <tr>
                                                            <td>Back Wall ({value.back_wall})</td>
                                                            <td>1</td>
                                                            {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                                                <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ? value.back_wall_price : 0}</td>
                                                                : <td></td>
                                                            }
                                                        </tr>
                                                        {value.utility_length != undefined ?
                                                            <tr>
                                                                <td>Utility Storage ({value.utility_length} Feet) </td>
                                                                <td>1</td>
                                                                {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                                                    <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ? value.utility_price : 0}</td>
                                                                    : <td></td>
                                                                }
                                                            </tr>
                                                            : null
                                                        }
                                                    </>
                                                )
                                            }
                                        })
                                        : null}
                                </>
                                <>
                                    {(state.const_var.post_data.building != undefined && state.const_var.post_data.building.entry_points != undefined) ?
                                        Object.entries(state.const_var.post_data.building.entry_points).map(([key, value]) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>{value.name.replace("_", " ")} {value.entry_type == 'walkin' || value.entry_type == 'window' ? 'Inch' : 'Feet'}</td>
                                                        <td>1</td>
                                                        {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                                            <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ? value.entry_price : 0}</td>
                                                            : <td></td>
                                                        }
                                                    </tr>
                                                    {(value.entry_trim_kit != undefined && value.entry_trim_kit == true) ?
                                                        <tr>
                                                            <td>TrimKit</td>
                                                            <td>1</td>
                                                            {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                                                <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ? value.entry_trim_kit_price : 0}</td>
                                                                : <td></td>
                                                            }
                                                        </tr> : null
                                                    }
                                                    {(value.entry_header_seal != undefined && value.entry_header_seal == true) ?
                                                        <tr>
                                                            <td>Header Seal</td>
                                                            <td>1</td>
                                                            {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                                                <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ? value.entry_header_seal_price : 0}</td>
                                                                : <td></td>
                                                            }
                                                        </tr> : null
                                                    }
                                                    {(value.entry_chain_hoist != undefined && value.entry_chain_hoist == true) ?
                                                        <tr>
                                                            <td>Chain hoist</td>
                                                            <td>1</td>
                                                            {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                                                <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ? value.entry_chain_hoist_price : 0}</td>
                                                                : <td></td>
                                                            }
                                                        </tr> : null
                                                    }
                                                    {(value.entry_certified != undefined && value.entry_certified == true) ?
                                                        <tr>
                                                            <td>Certified</td>
                                                            <td>1</td>
                                                            {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                                                <td>$0</td>
                                                                : <td></td>
                                                            }
                                                        </tr> : null
                                                    }
                                                </>
                                            )

                                        })
                                        : null
                                    }
                                </>
                                {(state.params.p_w_c_n == true) ?
                                    <tr>
                                        <td>WAINSCOT</td>
                                        <td>1</td>
                                        {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                            <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true && state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.wainscot_price : 0}</td>
                                            : <td></td>
                                        }
                                    </tr>
                                    : null
                                }
                                <>
                                    {(state.const_var.post_data.building != undefined && state.const_var.post_data.building.extra_items != undefined) ?
                                        Object.entries(state.const_var.post_data.building.extra_items).map(([key, value]) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>{value.item_name}</td>
                                                        <td>{value.item_quantity}</td>
                                                        {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                                            <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ? value.item_price : 0}</td>
                                                            : <td></td>
                                                        }
                                                    </tr>
                                                </>
                                            )

                                        })
                                        : null}
                                </>
                                {state.params.p_i_o == '0' ? '' :
                                    <>
                                        <tr>
                                            <td>Insulation  {(state.params.p_r_o == true) ? state.const_var.insulationJson[state.params.p_i_o] + "(Roof Only)" : state.const_var.insulationJson[state.params.p_i_o] + "(Full Building)"}</td>
                                            <td>1</td>
                                            {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                                                <td>${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true && state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.insulation_price : 0}</td>
                                                : <td></td>
                                            }
                                        </tr>
                                        :null
                                    </>
                                }

                            </table>
                        </div>
                    </div>
                    <>
                        {(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true) ?
                            <div className="row">
                                <div className="col-12">
                                    <table className="table table-striped totla-summay-table">
                                        <tr>
                                            <td>
                                                <table className="table summay">
                                                    <tr>
                                                        <td className="pt-5">Sub Total:</td>
                                                        <td className="text-bold summay-value pt-5">${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true && state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.order_total : 0}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Down Payment:</td>
                                                        <td className="text-bold summay-value">${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true && state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.down_payment_total : 0}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="f-16 pt-5">Due Upon Installation:</td>
                                                        <td className="text-bold pt-5 f-16 summay-value">${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true && state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.due_upon_installation : 0}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="f-16 pb-0">Grand Total:</td>
                                                        <td className="text-bold f-16 summay-value pb-0">${(state.const_var.hide_price_calculation != 1 && state.const_var.loginSession != true && state.const_var.post_data.building != undefined) ? state.const_var.post_data.building.grand_total : 0}</td>
                                                    </tr>


                                                </table>

                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            : null
                        }
                    </>
                    <div className="row building-view">
                        <div className="col-12">
                            <div className="sec-title">Building View
                                <div className="title-border"></div>
                            </div>
                            {(state.const_var.i_g_A_y.length > 0) ?
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

                            }



                        </div>
                    </div>

                    <div className="row content-sec">
                        <div className="col-12">
                            <div className="sec-title">Terms & Conditions
                                <div className="title-border"></div>
                            </div>
                            <h4>No Agency</h4>
                            <p>The Dealer named on the face of this Order is NOT an agent of Seller for any purpose except receipt of the Deposit. No representation or agreement by the Dealer is binding on the seller.</p>
                            <h4>Rejection of Order & Cancellation of Contract</h4>
                            <p>Seller reserves the right, at any time before installation of the Unit, to reject this Order or cancel this contract by notice in writing to Buyer. Upon giving such notice, Seller will refund any deposit received from Buyer. Buyer agrees that such refund shall be Buyer’s exclusive remedy for such cancellation.</p>
                            <h4>Legal Authority for Installation</h4>
                            <p>Before installation of the Unit, Buyer shall locate and mark any underground utilities and obtain every permit or other authorization required for the lawful erection of the Unit on that certain site (the “site”, designated by Buyer upon the property specified on the face hereof if Buyer fails! To obtain any such required permit or authorization: (i) such failure voids any and all warranties otherwise applicable to the Unit, and (ii) Buyer shall indemnify and hold Seller harmless for all damages or costs, including attorney fees, which Seller may incur as a result thereof, Seller will install the Unit or the Site; BUT, if Seller delivers the unassembled Unit and installation is not completed due to Buyer’s breach of contract by failure to obtain any required permit or by any other failure to adequately prepare the site, Seller may, in its sole discretion, terminate this contract and retain Buyer’s deposit as liquidated damage for Buyer’s breach.</p>
                            <h4>Site Preparation</h4>
                            <p>Before delivery, Buyer shall designate a site on the property identified as the Location on the face hereof and prepare such site for installation of the Unit, which preparation shall include making the site level, removing all electrical wire less than 15 feet above the intended height of the Unit, removing all underground utilities below the site, and any other improvement reasonably necessary. If Seller determines that the site is not prepared or suitable for installation, Seller may, at its option, terminate this contract or make such further improvements as may be reasonably necessary</p>
                            <h4>Scheduling Delivery and Installation</h4>
                            <p>After the order and proper permits are received which will be two to four days in advance of the installation date. The scheduling department must speak with you to confirm the installation date. Buyer may, by written notice received by Seller not more than 7 days after Seller’s acceptance hereon, the order is subject to any price increase that arises. In no event will Seller be liable for any damage or consequential damages resulting from any delay in delivery or installation of the unit. The average wait time is 6.8 weeks once all required permits are received; <span className="text-underline">however, this is not a guarantee</span>. (Orders placed late summer to early fall/winter could experience a delay due to weather and/or holidays).</p>
                            <div className="customer-signature">
                                <p>Customer Signature</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        </>
    )
}

export default Pdf