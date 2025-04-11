//if (!Detector.webgl) Detector.addGetWebGLMessage()
import * as THREE from "three";
import SKY_IMG from '../assets/images/imgTextures/sky.jpg';
import GROUND_IMG from '../assets/images/imgTextures/grass.jpg';
import TextureIMG from '../assets/images/imgTextures/concrete-5.jpg';
import ImgtextureUrl from '../assets/images/imgTextures/building-normal.jpg';

/* export default and static text */
export const kOpen = "Open";
export const kClose = "Close";
export const kFront = "front";
export const kBack = "back";
export const kLeft = "left";
export const kRight = "right";
export const kLeftCutPanel = "leftCutPanel";
export const kRightCutPanel = "rightCutPanel";
export const kYES = "YES";
export const kNO = "NO";

/* export default texture */
export const textureUrl = ImgtextureUrl;
export const textureLoader = new THREE.TextureLoader();
export const textureWidth = textureLoader.load(textureUrl, function () {
  // textureWidth.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 5);
  // textureWidth.wrapS = THREE.RepeatWrapping;
  // textureWidth.wrapT = THREE.RepeatWrapping;
});
export const textureWidthLeft = textureWidth;
export const textureWidthRight = textureWidth;
export const textureDepth = textureWidth;
export const textureHalfTruss1Width = textureWidth;
export const textureHalfTruss1Depth = textureWidth;
export const textureHalfTruss2Width = textureWidth;
export const textureHalfTruss2Depth = textureWidth;
export const textureHalfTruss3Width = textureWidth;
export const textureHalfTruss3Depth = textureWidth;
export const textureHalfTruss4Width = textureWidth;
export const textureHalfTruss4Depth = textureWidth;

/* export default Params used for building customization */
export var params = {
  p_w: 12,
  p_d: 21,
  p_h: 8,
  p_r_t: "Gabled",
  p_a_s: 0,
  p_r_p: 3,
  p_s_m: "Steel",
  p_r_c: "0xAE8F66",
  p_w_c: "0xAE8F66",
  p_t_c: "0xffffff",
  p_s_c: "Gray",
  p_w_c_c: "0x124B8A",
  p_w_c_n: false,
  p_w_s1: false,
  p_w_s2: false,
  p_w_s3: false,
  p_w_s4: false,
  p_g_f: 0,
  p_g_b: 0,
  p_e: 0,
  p_e_p_l: 2,
  p_e_s_l: false,
  p_e_p_r: 2,
  p_e_r: 0,
  p_e_s_r: false,
  p_c_2: false,
  p_c_3: false,
  b_h_t1: false,
  b_h_t1L: 8,
  b_h_t1D: 6,
  b_h_t1H: 8,
  b_h_t1P: 2,
  b_h_t2: false,
  b_h_t2L: 8,
  b_h_t2D: 12,
  b_h_t2H: 8,
  b_h_t2P: 2,
  b_h_t3: false,
  b_h_t3L: 8,
  b_h_t3D: 6,
  b_h_t3H: 8,
  b_h_t3P: 2,
  b_h_t4: false,
  b_h_t5: false,
  b_h_t5L: 8,
  b_h_t5D: 12,
  b_h_t5H: 8,
  b_h_t5P: 2,
  b_h_t6: false,
  b_h_t6L: 8,
  b_h_t6D: 12,
  b_h_t6H: 8,
  b_h_t6P: 2,
  b_h_t4L: 8,
  b_h_t4D: 12,
  b_h_t4H: 8,
  b_h_t4P: 2,
  p_b_t: 1,
  p_r_s: "1",
  p_b_c: "Open",
  p_b_c_b: "Open",
  p_v_w: false,
  p_e_i: "",
  gauge_val: "",
  fourth_center_cost: false,
  risk_cost: false,
  cert_pac_cost: false,
  p_b: "0",
  p_i_s: "1",
  p_e_l: false,
  p_t_u: 0,
  p_f_w: "Open",
  p_c_p_l: false,
  p_c_p_r: false,
  p_b_w: "Open",
  p_l_w: "Open",
  p_r_w: "Open",
  p_c_a_w: false,
  p_c_a_l_l_w: false,
  p_c_a_r_l_w: false,
  p_l_w_p: 0,
  p_r_w_p: 0,
  p_j_t: false,
  p_e_b: 0,
  p_e_t: 0,
  p_b_p: false,
  p_b_p_feet: "Select",
  p_b_p_feetVal: "0",
  p_i_o: "0",
  p_a_ch: 0,
  p_a_ch_w_B: 0,
  p_b_c_b_l_f: "Open",
  p_b_c_b_l_b: "Open",
  p_b_c_b_l: "Open",
  p_b_c_b_r_f: "Open",
  p_b_c_b_r_b: "Open",
  p_b_c_b_r: "Open",
  w_a_s_tTYP: 0,
  w_a_s_tTYP_OPT_S: 0,
  w_a_s_tTYP_OPT_E: 0,
  p_u_t: 10,
  p_u_c: false,
  p_r_b_l: false,
  p_l_b_l: false,
  p_m_h_a: 0,
  p_r_a: 0,
  p_f_i: false,
  p_r_o: false,
  p_s_i: "",
  p_s_n: "",
  p_g_i: "",
  truck: false,
  truckPOS: "0,0,0",
  truckROT: "0,0,0",
  driveway: false,
  drivewayPOS: "0,0,0",
  drivewayROT: "0,0,0",
  p_v: .21,
  wallPos: "Select",
  p_a_g_r_u_d: "Select",
  f_r_m_o_t: "Select",
  f_r_m_o_t1: "Select",
  p_d_c: "Select",
  doorSize: "Select",
  doorType: "Select",
  doorLabel: '',
  trimkit: false,
  chain_hoist: false,
  header_seal: false,
  p_w_cc: "Select",
  l_l_to: "Open",
  r_l_to: "Open",
  b_r_p: "1",
}
export const customLeantoPriceData = {
  "success": true,
  "data": {
    "building_structure": [{ "id": 910, "map_id": 298, "building_id": 1, "roof_id": 3, "start_length": 21, "end_length": 51, "min_height": 7, "max_height": 20, "min_width": 12, "max_width": 24, "building_max_length": 101, "conditions": { "condition": [{ "min_height": "12", "max_height": "14", "min_width": "0", "max_width": "0", "is_default": "N", "name": "Double Legs", "legs_type": "double" }, { "min_height": "15", "max_height": "20", "min_width": "0", "max_width": "0", "is_default": "Y", "name": "Ladder Legs", "legs_type": "ladder" }] }, "distance_on_center": 5, "default_gauge": 14 }],
    "base": [{
      "id": "5897114", "structure": "12x21", "map_id": 298, "regular_cost": 0, "box_style_cost": 0, "vertical_roof_cost": 0, "gauge": 12, "change_roof_style": false
    }, { "id": "5897113", "structure": "12x21", "map_id": 298, "regular_cost": 0, "box_style_cost": 0, "vertical_roof_cost": 0, "gauge": 14, "change_roof_style": false }],
    "truss_name": [
      {
        "id": 111,
        "map_id": 298,
        "name": "LST1",
        "min_width": 12,
        "max_width": 24
      }
    ],
    "anchors_cost": [

    ],
    "garage_door": [],
    "garage_door_frameout": [],
    "walkin_door_frameout": [],
    "window_frameout": [],
    "end": [
      {
        "id": "867602",
        "map_id": 298,
        "width": 12,
        "height": 7,
        "end_close_cost": 0,
        "certified_end_cost": 0,
        "vertical_ends_cost": 0,
        "half_end_close_cost": 0,
        "half_vertical_ends_cost": 0,
        "one_fourth_end_close_cost": 0,
        "one_fourth_vertical_ends_cost": 0,
        "three_fourth_end_close_cost": 0,
        "three_fourth_vertical_ends_cost": 0
      }
    ],
    "gable_end": [
      {
        "id": "70007",
        "map_id": 298,
        "width": 12,
        "uncertified": 0,
        "certified": 0,
        "vertical": 0,
        "extended": 0,
        "vertical_extended": 0,
        "vertical_certified": 0
      }
    ],
    "certificate": [],
    "full_length_panel": [
      {
        "id": "197926",
        "cost": 100,
        "cut_panel_cost": 0,
        "vertical_panel_cost": 0,
        "map_id": 298,
        "length": 21
      }
    ],
    "side_cross_bracing": [

    ],
    "delux_two_tone": [
      {
        "id": "260677",
        "cost": "0.00",
        "on_end_horizontal": "0",
        "on_end_vertical": "0",
        "on_side_horizontal": "0",
        "on_side_vertical": "0",
        "map_id": 298,
        "length": 21,
        "width": 48
      }
    ],
    "jtrim": [
      {
        "id": "113368",
        "cost": 0,
        "map_id": 298,
        "length": 21
      }
    ],
    "insulation": [
      {
        "id": "7982",
        "map_id": 298,
        "insulation_id": 2,
        "cost": 0,
        "name": "Double Bubble",
        "roof_insulation_cost": "0",
        "full_building_insulation_cost": "0"
      },
      {
        "id": "7981",
        "map_id": 298,
        "insulation_id": 1,
        "cost": 0,
        "name": "Single Bubble",
        "roof_insulation_cost": "0",
        "full_building_insulation_cost": "0"
      }
    ],
    "braces": [

    ],
    "bows": [

    ],
    "addons": [
      {
        "id": "35485",
        "fourth_center_cost": 0,
        "risk_cost": 0,
        "cert_pac_cost": 0,
        "ground_certificate": 0,
        "overhang": 0,
        "jtrim": 0,
        "map_id": 298,
        "length": 21
      }
    ],
    "addons_width": [

    ],
    "roof_pitch": [
      {
        "id": "64765",
        "cost": 0,
        "cost_type": "%",
        "is_default": "no",
        "percentage_of": "1,2,3",
        "roof_ids": "0",
        "roof_pitch": "2/12",
        "map_id": 298,
        "length": 21
      },
      {
        "id": "64766",
        "cost": 0,
        "cost_type": "%",
        "is_default": "yes",
        "percentage_of": "1,2,3",
        "roof_ids": "0",
        "roof_pitch": "3/12",
        "map_id": 298,
        "length": 21
      }
    ],
    "additional_features": [
      {
        "id": "209",
        "map_id": 298,
        "additional_feature": "Colored Screw",
        "cost_type": "%",
        "cost": 0,
        "percentage_of": null
      }
    ],
    "connection_fees": [
      {
        "id": "125577",
        "cost": 0,
        "map_id": 298,
        "length": 21,
        "width": 12,
        "end_cost": 0
      }
    ],
    "trusses": [
      {
        "id": "772051",
        "map_id": 298,
        "truss": 0,
        "width": 12,
        "length": 21,
        "cost": 0,
        "height": 7
      }
    ],
    "full_length_side": [
      {
        "id": "3536111",
        "leg_height_cost": 0,
        "leg_height_cost_12": 0,
        "side_close_cost": 0,
        "vertical_side_cost": 0,
        "double_leg_baserail_cost": 0,
        "double_leg_baserail_cost_12": 0,
        "map_id": 298,
        "height": 7,
        "length": 21,
        "half_side_close_cost": 0,
        "half_vertical_side_cost": 0,
        "one_fourth_side_close_cost": 0,
        "one_fourth_vertical_side_cost": 0,
        "three_fourth_side_close_cost": 0,
        "three_fourth_vertical_side_cost": 0
      }
    ],
    "side": [
      {
        "id": "3536111",
        "leg_height_cost": 0,
        "leg_height_cost_12": 0,
        "side_close_cost": 0,
        "vertical_side_cost": 0,
        "double_leg_baserail_cost": 0,
        "double_leg_baserail_cost_12": 0,
        "map_id": 298,
        "height": 7,
        "length": 21,
        "half_side_close_cost": 0,
        "half_vertical_side_cost": 0,
        "one_fourth_side_close_cost": 0,
        "one_fourth_vertical_side_cost": 0,
        "three_fourth_side_close_cost": 0,
        "three_fourth_vertical_side_cost": 0
      }
    ],
    "panel": [
      {
        "id": "197926",
        "cost": 100,
        "cut_panel_cost": 0,
        "vertical_panel_cost": 0,
        "map_id": 298,
        "length": 21
      }
    ],
    "utility_side": [

    ],
    "central_side_full_length": [
      {
        "id": "3536255",
        "leg_height_cost": 0,
        "leg_height_cost_12": 0,
        "side_close_cost": 0,
        "vertical_side_cost": 0,
        "double_leg_baserail_cost": 0,
        "double_leg_baserail_cost_12": 0,
        "map_id": 298,
        "height": 10,
        "length": 21,
        "half_side_close_cost": 0,
        "half_vertical_side_cost": 0,
        "one_fourth_side_close_cost": 0,
        "one_fourth_vertical_side_cost": 0,
        "three_fourth_side_close_cost": 0,
        "three_fourth_vertical_side_cost": 0
      }
    ],
    "central_side": [
      {
        "id": "3536255",
        "leg_height_cost": 0,
        "leg_height_cost_12": 0,
        "side_close_cost": 0,
        "vertical_side_cost": 0,
        "double_leg_baserail_cost": 0,
        "double_leg_baserail_cost_12": 0,
        "map_id": 298,
        "height": 10,
        "length": 21,
        "half_side_close_cost": 0,
        "half_vertical_side_cost": 0,
        "one_fourth_side_close_cost": 0,
        "one_fourth_vertical_side_cost": 0,
        "three_fourth_side_close_cost": 0,
        "three_fourth_vertical_side_cost": 0
      }
    ],
    "central_trusses": [
      {
        "id": "772054",
        "map_id": 298,
        "truss": 0,
        "width": 24,
        "length": 21,
        "cost": 0,
        "height": 10
      }
    ],
    "central_utility_side": [

    ],
    "extra_items": [
      {
        "checkbox": [
          {
            "name": "fourth_center_cost",
            "label": "4ft on Center",
            "cost": 0
          },
          {
            "name": "risk_cost",
            "label": "Risk Category II",
            "cost": 0
          },
          {
            "name": "cert_pac_cost",
            "label": "Certification Package",
            "cost": 0
          },
          {
            "name": "ground_certificate",
            "label": "Ground Certification",
            "cost": 0
          },
          {
            "name": "overhang",
            "label": "1' Overhang Prices",
            "cost": 0
          },
          {
            "name": "side_connection_fees",
            "label": "Side Connection Fees",
            "cost": 0
          },
          {
            "name": "end_connection_fees",
            "label": "End Connection Fees",
            "cost": 0
          }
        ],
        "checkbox_quantity": [
          {
            "name": "trusses",
            "label": "Extra Trusses",
            "cost": 0
          }
        ],
        "checkbox_quantity_dropdown": [

        ]
      }
    ],
    "manufacturer": [
      {
        "manufacturer_id": 27
      }
    ]
  }
}
/* export all variables used for building customization */
export const constVar = {
  LogIm: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAABuCAYAAAC3D4ggAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0YxRkE0NzlGQzU1MTFFOEI0OTlFMDI4RDJCMDhCRTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0YxRkE0N0FGQzU1MTFFOEI0OTlFMDI4RDJCMDhCRTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3RjFGQTQ3N0ZDNTUxMUU4QjQ5OUUwMjhEMkIwOEJFNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3RjFGQTQ3OEZDNTUxMUU4QjQ5OUUwMjhEMkIwOEJFNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhdBdNcAABYhSURBVHja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',
  calCulationVal: 0,
  calCulationValIndex: 0,
  totalWidth: 0,
  reg_d: "",
  s_v: "",
  bjD: "",
  dtr: {},
  p_l_r: {},
  b_p_r: {},
  r_s_a: {},
  g_d_a: {},
  w_o_a: {},
  w_d_a: {},
  callMesure: true,
  roofAction: true,
  g_d_a_p: [],
  g_d_s_p: [],
  w_o_p: [],
  w_o_p_s: [],
  w_d_p: [],
  w_d_p_s: [],
  ManageDoorArrar: { "front": [], "back": [], "left": [], "right": [] },
  ManageDoorValue: 0,
  walls: [],
  coords: null,
  c_m_a: [],
  c_m_a_Anchors: {},
  DistanceArr: [],
  ConditionArr: [],
  BarnConditionArr: [],
  t_c: 0,
  t_c_b: 0,
  g_v: "14",
  tax: "",
  map: { '2': 'box_style_cost', '1': 'regular_cost', '3': 'vertical_roof_cost', '8': 'regular_cost', '4': 'vertical_roof_cost', '5': 'box_style_cost', '6': 'vertical_roof_cost', '7': 'box_style_cost' },
  e_i_a: [],
  e_i_b_a: [0],
  g_v_a: [],
  c_f_a: [],
  c_f_a_per: [],
  c_f_a_sCer: [],
  c_f_aCer: [],
  c_f_i_a: [],
  c_f_a_b: [],
  c_f_i_a_b: [],
  c_f_b_a: [],
  f_r_o_d: "", f_r_o_d_p: 0,
  d_w_a_r: [],
  a_p_d_a: [],
  a_p_d_a_b: [],
  door_arry: { 'window': [], 'garage': [], 'door': [], 'frameout': [] },
  c_k_p_d: true,
  d_v_i: "front",
  d_b_u_g: false,
  i_c_l_g: true,
  i_c_l_g_n: true,
  checkIval: 0,
  SetFlag: false,
  b_r_p_a: [],
  b_r_p_l_to_a: [],
  container: '',
  scene: '',
  camera: '',
  renderer: '',
  controls: '',
  b_h_t1Bx: '',
  b_h_t2Bx: '',
  b_h_t3Bx: '',
  b_h_t4Bx: '',
  b_h_t5Bx: '',
  b_h_t6Bx: '',
  ground: '',
  foundation: '',
  c_b_g_p: '',
  c_b_g_f: '',
  c_b_g_b: '',
  c_b_g_r: '',
  b_i_g_B: '',
  b_B_g_B: '',
  b_r_f_R: '',
  b_r_f_L: '',
  b_r_f_l_t_L: '',
  b_r_f_l_t_R: '',
  b_r_f_E_R: '',
  b_r_f_E_L: '',
  b_m_a_n: '',
  b_a_p_l: '',
  b_t_u_k: '',
  b_d_a_y: '',
  b_c_p_2: '',
  b_c_p_3: '',
  halfTruss: '',
  b_l_g: '',
  b_T_t_L_u: '',
  b_T_t_L_u_S: '',
  driveway: '',
  truck: '',
  b_w_b_c_l: '',
  b_w_b_c_r: '',
  b_f_g_p: '',
  b_f_g_p_r_L: '',
  b_f_g_p_r_R: '', b_t_M_R: '', b_t_M_L: '', b_t_M_L_t_L: '', b_t_M_L_t_R: '', Webbing: '',
  b_r_c_r: '', b_w_c_r: '', b_t_c_r: '', b_w_s_c_r: '',
  b_a_d_I_O_t: '',
  b_s_t_s: '',
  b_p_i_g_u_l: '',
  b_i_d_e: false,
  b_s_c_s_X: 0,
  b_s_c_s_Y: 0,
  b_i_R_z_D: false,
  b_m_P_s_X: 0,
  b_m_P_s_Y: 0,
  checkBitly: false,
  b_s_c_n: null,
  offset: new THREE.Vector3(),

  b_d_g_b_O_c: [],
  b_d_g_b_O_c1: [],

  raycaster: new THREE.Raycaster(),

  b_m_i_w: '', b_m_x_w: '', b_m_i_h: '', b_m_x_h: '', b_m_i_l: '', b_m_x_l: '', b_m_x_lC: '',
  b_c_h_I_g: false,
  b_I_g_n_e: "building-normal.jpg",
  b_r_g_v: "",
  b_f_w_C: false,
  b_f_w_B: false,
  vVal: -0.030,
  sum: 1,
  b_r_d_V: "",
  b_o_J_1: {},
  b_f_o_J: {},
  post_data: {},
  entry_points: [],
  b_l_o_J: {},
  Map_Id: {},
  TypeEnum: {
    "1": "Regular",
    "2": "A-frame",
    "3": "Vertical",
    "8": "Regular",
    "4": "Vertical",
    "5": "A-frame",
    "6": "Vertical",
    "7": "A-frame",
  },
  TypeEnumID: {
    "1": "Regular",
    "2": "A-frame",
    "3": "Vertical",
    "8": "Regular Roof Barn",
    "4": "Raised Center Vertical",
    "5": "Raised Center",
    "6": "Continous Roof Vertical",
    "7": "Continous Roof",
  },
  WallClass: {
    "front": "fend",
    "back": "bend",
    "left": "lside",
    "right": "rside",
  },
  installationValue: {
    "1": "Concrete",
    "2": "Asphalt",
    "3": "Ground",
    "4": "Gravel",
  },
  d_p_j_ft_5: {
    "20": [0, -2, -3.7, 4.35], "21": [0, -2, -3.7, 4.35], "22": [0, -2, -3.7, 4.35], "23": [0, -2, -3.7, 4.35], "24": [0, -2, -3.7, 4.35],
    "25": [0, -2, -3.7, 4.35],
    "26": [params.p_d / 12, -2, -3.2, 3.7, -7.5], "27": [params.p_d / 12, -2, -3.2, 3.7, -7.5],
    "28": [params.p_d / 12, -2, -3.2, 3.7, -7.5], "29": [params.p_d / 12, -2, -3.2, 3.7, -7.5], "30": [params.p_d / 12, -2, -3.2, 3.7, -7.5],
    "31": [0, -2, -2.9, 3.25, -5.4, 7.15], "32": [0, -2, -2.9, 3.25, -5.4, 7.15], "33": [0, -2, -2.9, 3.25, -5.4, 7.15], "34": [0, -2, -2.9, 3.25, -5.4, 7.15],
    "35": [0, -2, -2.9, 3.25, -5.4, 7.15],
    "36": [params.p_d / 16, -2, -2.6, 2.9, -4.1, 5.15, -9.8], "37": [params.p_d / 16, -2, -2.6, 2.9, -4.1, 5.15, -9.8],
    "38": [params.p_d / 16, -2, -2.6, 2.9, -4.1, 5.15, -9.8], "39": [params.p_d / 16, -2, -2.6, 2.9, -4.1, 5.15, -9.8],
    "40": [params.p_d / 16, -2, -2.6, 2.9, -4.1, 5.15, -9.8],
    "41": [0, -2, -2.5, 2.7, -3.7, 3.9, -7.1, 7.75], "42": [0, -2, -2.5, 2.7, -3.7, 3.9, -7.1, 7.75],
    "43": [0, -2, -2.5, 2.7, -3.7, 3.9, -7.1, 7.75], "44": [0, -2, -2.5, 2.7, -3.7, 3.9, -7.1, 7.75], "45": [0, -2, -2.5, 2.7, -3.7, 3.9, -7.1, 7.75],
    "46": [params.p_d / 17, -2, -2.4, 2.6, -3.2, 3.5, -5.1, 5.8, -12], "47": [params.p_d / 17, -2, -2.4, 2.6, -3.2, 3.5, -5.1, 5.8, -12],
    "48": [params.p_d / 17, -2, -2.4, 2.6, -3.2, 3.5, -5.1, 5.8, -12], "49": [params.p_d / 17, -2, -2.4, 2.6, -3.2, 3.5, -5.1, 5.8, -12],
    "50": [params.p_d / 17, -2, -2.4, 2.6, -3.2, 3.5, -5.1, 5.8, -12],
    "51": [0, -2, -2.4, 2.6, -3.2, 3.5, -4.7, 5.4, -8.5, 10.8], "52": [0, -2, -2.4, 2.6, -3.2, 3.5, -4.7, 5.4, -8.5, 10.8],
    "53": [0, -2, -2.4, 2.6, -3.2, 3.5, -4.7, 5.4, -8.5, 10.8], "54": [0, -2, -2.4, 2.6, -3.2, 3.5, -4.7, 5.4, -8.5, 10.8],
    "55": [0, -2, -2.4, 2.6, -3.2, 3.5, -4.7, 5.4, -8.5, 10.8],
    "56": [-1.5, -2, -2.4, 2.4, -3.1, 3, -4.4, 4.2, -8, 6.9, 17.8], "57": [-1.5, -2, -2.4, 2.4, -3.1, 3, -4.4, 4.2, -8, 6.9, 17.8],
    "58": [-1.5, -2, -2.4, 2.4, -3.1, 3, -4.4, 4.2, -8, 6.9, 17.8], "59": [-1.5, -2, -2.4, 2.4, -3.1, 3, -4.4, 4.2, -8, 6.9, 17.8],
    "60": [-1.5, -2, -2.4, 2.4, -3.1, 3, -4.4, 4.2, -8, 6.9, 17.8],
    "61": [-1.5, -2, -2.4, 2.4, -3.1, 3, -4.4, 4.2, -8, 6.9, 17.8],
  },
  d_p_j_ft_4: {
    "20": [-2.2, -2, -3.2, 11.5, 3.65], "21": [-2.2, -2, -3.2, 11.5, 3.65], "22": [-2.2, -2, -3.2, 11.5, 3.65], "23": [-2.2, -2, -3.2, 11.5, 3.65],
    "24": [-2.2, -2, -3.2, 11.5, 3.65], "25": [-2.2, -2, -3.2, 11.5, 3.65], "26": [0, -2, -2.9, 3.2, 6.7, -5.5],
    "27": [0, -2, -2.9, 3.2, 6.7, -5.5], "28": [0, -2, -2.9, 3.2, 6.7, -5.5], "29": [0, -2, -2.9, 3.2, 6.7, -5.5],
    "30": [0, -2, -2.9, 3.2, 6.7, -5.5], "31": [-1.8, -2, -2.7, 2.9, 4.7, -4.4, 13.8], "32": [-1.8, -2, -2.7, 2.9, 4.7, -4.4, 13.8],
    "33": [-1.8, -2, -2.7, 2.9, 4.7, -4.4, 13.8], "34": [-1.8, -2, -2.7, 2.9, 4.7, -4.4, 13.8], "35": [-1.8, -2, -2.7, 2.9, 4.7, -4.4, 13.8],
    "36": [-2.2, -2, -2.5, 2.6, -3.4, 20.2, 3.6, -5.4, 6.2], "37": [-2.2, -2, -2.5, 2.6, -3.4, 20.2, 3.6, -5.4, 6.2],
    "38": [-2.2, -2, -2.5, 2.6, -3.4, 20.2, 3.6, -5.4, 6.2], "39": [-2.2, -2, -2.5, 2.6, -3.4, 20.2, 3.6, -5.4, 6.2],
    "40": [-2.2, -2, -2.5, 2.6, -3.4, 20.2, 3.6, -5.4, 6.2], "41": [0, -8.3, -2, -2.4, 2.5, -3.1, 3.3, -4.5, 5, 10.3],
    "42": [0, -8.3, -2, -2.4, 2.5, -3.1, 3.3, -4.5, 5, 10.3], "43": [0, -8.3, -2, -2.4, 2.5, -3.1, 3.3, -4.5, 5, 10.3], "44": [0, -8.3, -2, -2.4, 2.5, -3.1, 3.3, -4.5, 5, 10.3],
    "45": [0, -8.3, -2, -2.4, 2.5, -3.1, 3.3, -4.5, 5, 10.3], "46": [2, -6.8, -2, -2.4, 2.5, -3, 3.2, -4.1, 4.5, -18, 7.7],
    "47": [2, -6.8, -2, -2.4, 2.5, -3, 3.2, -4.1, 4.5, -18, 7.7], "48": [2, -6.8, -2, -2.4, 2.5, -3, 3.2, -4.1, 4.5, -18, 7.7],
    "49": [2, -6.8, -2, -2.4, 2.5, -3, 3.2, -4.1, 4.5, -18, 7.7], "50": [2, -6.8, -2, -2.4, 2.5, -3, 3.2, -4.1, 4.5, -18, 7.7],
    "51": [0, -5.8, -2, -2.4, 2.45, -3, 3, -4, 4, -10.5, 6.1, 13.5]
  },
  b_u_D_p_a5: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
  b_u_D_p_a4: [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88],
  d_p_j_n_f_U_y_n_5: {
    "5": { "20": [1, -2.57], "21": [1, -2.57], "22": [1.2, -2.57], "23": [1.4, -2.57], "24": [1.6, -2.57], "25": [1.8, -2.57], "26": [1, -2.45], "27": [1.2, -2.46], "28": [1.4, -2.46], "29": [1.6, -2.46], "30": [1.8, -2.46], "31": [0.8, -2.365], "32": [1.1, -2.36], "33": [1.3, -2.36], "34": [1.4, -2.36], "35": [1.6, -2.36], "36": [0.3, -2.25], "37": [0.4, -2.25], "38": [0.5, -2.25], "39": [0.6, -2.25], "40": [0.7, -2.25], "41": [0.2, -2.215], "42": [0.4, -2.22], "43": [0.5, -2.22], "44": [0.6, -2.22], "45": [0.7, -2.22], "46": [-0.25, -2.17], "47": [0, -2.17], "48": [0.2, -2.17], "49": [0.25, -2.17], "50": [0.3, -2.17], "51": [0.4, -2.17] },
    "10": { "20": [1.1, -3.8], "21": [1.1, -3.8], "22": [1.5, -3.8], "23": [2, -3.8], "24": [2.5, -3.8], "25": [3, -3.8], "26": [0.7, -3.16], "27": [0.9, -3.1], "28": [1.3, -3.1], "29": [1.6, -3.1], "30": [2, -3.1], "31": [0.8, -2.9], "32": [1.1, -2.9], "33": [1.5, -2.9], "34": [1.8, -2.9], "35": [2.1, -2.9], "36": [0.3, -2.68], "37": [0.5, -2.68], "38": [0.8, -2.68], "39": [1, -2.68], "40": [1.2, -2.68], "41": [0.5, -2.58], "42": [0.8, -2.58], "43": [1, -2.58], "44": [1.1, -2.58], "45": [1.4, -2.58], "46": [-0.25, -2.45], "47": [0, -2.45], "48": [0.2, -2.45], "49": [0.25, -2.45], "50": [0.5, -2.45], "51": [0.6, -2.45] },
    "15": { "20": [1.3, -4.8], "21": [1.3, -4.8], "22": [2.1, -4.8], "23": [2.8, -4.8], "24": [3.5, -4.8], "25": [4.3, -4.8], "26": [0.7, -4.56], "27": [1.4, -4.5], "28": [2, -4.5], "29": [2.5, -4.5], "30": [3.1, -4.5], "31": [1, -3.8], "32": [1.6, -3.85], "33": [2.1, -3.85], "34": [2.6, -3.85], "35": [3.1, -3.85], "36": [0.5, -3.31], "37": [0.7, -3.28], "38": [1.1, -3.28], "39": [1.5, -3.28], "40": [1.8, -3.28], "41": [0.7, -3.1], "42": [1.2, -3.1], "43": [1.4, -3.1], "44": [1.7, -3.08], "45": [2.1, -3.08], "46": [0.2, -2.87], "47": [0.2, -2.84], "48": [0.8, -2.87], "49": [1, -2.85], "50": [1.2, -2.85], "51": [0.7, -2.8] },
    "20": { "20": [0, -0], "21": [0, -0], "22": [0, -0], "23": [0, -0], "24": [0, -0], "25": [0, -0], "26": [0, -0], "27": [0, -0], "28": [0, -0], "29": [0, -0], "30": [0, -0], "31": [1, -5.47], "32": [1.6, -5.47], "33": [2.2, -5.47], "34": [2.8, -5.47], "35": [3.3, -5.43], "36": [0.8, -4.35], "37": [1.4, -4.39], "38": [2, -4.39], "39": [2.5, -4.39], "40": [3, -4.39], "41": [1.1, -3.87], "42": [1.6, -3.87], "43": [2.1, -3.87], "44": [2.6, -3.87], "45": [3.1, -3.87], "46": [0.2, -3.40], "47": [0.7, -3.40], "48": [1.1, -3.40], "49": [1.4, -3.40], "50": [1.9, -3.40], "51": [0.6, -3.25] },
    "25": { "20": [0, -0], "21": [0, -0], "22": [0, -0], "23": [0, -0], "24": [0, -0], "25": [0, -0], "26": [0, -0], "27": [0, -0], "28": [0, -0], "29": [0, -0], "30": [0, -0], "31": [0, -0], "32": [0, -0], "33": [0, -0], "34": [0, -0], "35": [0, -0], "36": [1.1, -6.40], "37": [1.8, -6.40], "38": [2.5, -6.40], "39": [3.2, -6.40], "40": [3.9, -6.40], "41": [1.8, -5.30], "42": [2.5, -5.30], "43": [3.2, -5.30], "44": [3.9, -5.30], "45": [4.5, -5.30], "46": [1.4, -4.40], "47": [2, -4.40], "48": [2.6, -4.40], "49": [3, -4.40], "50": [3.6, -4.40], "51": [1.2, -4] },
    "30": { "20": [0, -0], "21": [0, -0], "22": [0, -0], "23": [0, -0], "24": [0, -0], "25": [0, -0], "26": [0, -0], "27": [0, -0], "28": [0, -0], "29": [0, -0], "30": [0, -0], "31": [0, -0], "32": [0, -0], "33": [0, -0], "34": [0, -0], "35": [0, -0], "36": [0, -0], "37": [0, -0], "38": [0, -0], "39": [0, -0], "40": [0, -0], "41": [2.2, -7.97], "42": [2.8, -7.97], "43": [3.6, -7.97], "44": [4.3, -7.97], "45": [5.1, -7.97], "46": [2.1, -6.07], "47": [2.7, -6.07], "48": [3.3, -6.07], "49": [4, -6.07], "50": [4.7, -6.07], "51": [1.1, -4.8] },
    "35": { "20": [0, -0], "21": [0, -0], "22": [0, -0], "23": [0, -0], "24": [0, -0], "25": [0, -0], "26": [0, -0], "27": [0, -0], "28": [0, -0], "29": [0, -0], "30": [0, -0], "31": [0, -0], "32": [0, -0], "33": [0, -0], "34": [0, -0], "35": [0, -0], "36": [0, -0], "37": [0, -0], "38": [0, -0], "39": [0, -0], "40": [0, -0], "41": [0, -0], "42": [0, -0], "43": [0, -0], "44": [0, -0], "45": [0, -0], "46": [2.2, -9], "47": [2.9, -9.1], "48": [3.8, -9.2], "49": [4.6, -9.2], "50": [5.5, -9.2], "51": [0.9, -6.4] },
    "40": { "20": [0, -0], "21": [0, -0], "22": [0, -0], "23": [0, -0], "24": [0, -0], "25": [0, -0], "26": [0, -0], "27": [0, -0], "28": [0, -0], "29": [0, -0], "30": [0, -0], "31": [0, -0], "32": [0, -0], "33": [0, -0], "34": [0, -0], "35": [0, -0], "36": [0, -0], "37": [0, -0], "38": [0, -0], "39": [0, -0], "40": [0, -0], "41": [0, -0], "42": [1.6, -3.87], "43": [0, -0], "44": [0, -0], "45": [0, -0], "46": [0, -0], "47": [0, -0], "48": [0, -0], "49": [0, -0], "50": [1.9, -3.40], "51": [1.3, -9.40] }
  },
  d_p_j_n_f_U_y_n_4: {
    "4": { "20": [1.2, -2.47], "21": [1.2, -2.47], "22": [1.2, -2.47], "23": [1.4, -2.47], "24": [1.6, -2.47], "25": [1.8, -2.47], "26": [1, -2.35], "27": [1.2, -2.36], "28": [1.4, -2.36], "29": [1.6, -2.36], "30": [1.8, -2.36], "31": [1, -2.265], "32": [1.1, -2.265], "33": [1.3, -2.268], "34": [1.4, -2.268], "35": [1.6, -2.272], "36": [1.3, -2.25], "37": [1.4, -2.25], "38": [1.5, -2.25], "39": [1.6, -2.25], "40": [1.7, -2.25], "41": [1.2, -2.215], "42": [1.4, -2.22], "43": [1.5, -2.22], "44": [1.6, -2.22], "45": [1.7, -2.22], "46": [1, -2.17], "47": [1, -2.17], "48": [1.4, -2.182], "49": [1.45, -2.18], "50": [1.5, -2.18], "51": [1.6, -2.18] },
    "8": { "20": [1.1, -3.19], "21": [1.1, -3.19], "22": [1.3, -3.19], "23": [1.8, -3.19], "24": [2.3, -3.23], "25": [2.8, -3.23], "26": [1.2, -2.88], "27": [1.5, -2.88], "28": [1.8, -2.88], "29": [2.2, -2.88], "30": [2.5, -2.88], "31": [1.4, -2.77], "32": [1.65, -2.77], "33": [2, -2.77], "34": [2.3, -2.77], "35": [2.6, -2.77], "36": [0.4, -2.51], "37": [0.6, -2.51], "38": [0.8, -2.51], "39": [1, -2.51], "40": [1.2, -2.51], "41": [0.2, -2.42], "42": [0.4, -2.42], "43": [0.6, -2.42], "44": [0.8, -2.42], "45": [1, -2.42], "46": [0.6, -2.4], "47": [0.7, -2.4], "48": [0.9, -2.4], "49": [1.1, -2.4], "50": [1.3, -2.4], "51": [1.4, -2.4] },
    "12": { "20": [1.3, -4.8], "21": [1.3, -4.8], "22": [2.1, -4.8], "23": [2.7, -4.8], "24": [3.2, -4.8], "25": [3.8, -4.8], "26": [1.5, -3.8], "27": [2, -3.8], "28": [2.5, -3.8], "29": [3, -3.8], "30": [3.5, -3.8], "31": [2.2, -3.5], "32": [2.7, -3.5], "33": [3.2, -3.5], "34": [3.7, -3.5], "35": [4.2, -3.5], "36": [0.2, -2.9], "37": [0.6, -2.9], "38": [0.9, -2.9], "39": [1.2, -2.9], "40": [1.5, -2.9], "41": [0.3, -2.75], "42": [0.6, -2.75], "43": [0.9, -2.75], "44": [1.2, -2.75], "45": [1.4, -2.75], "46": [0.7, -2.67], "47": [1, -2.67], "48": [1.2, -2.67], "49": [1.5, -2.67], "50": [1.7, -2.67], "51": [1.7, -2.65] },
    "16": { "20": [0, -0], "21": [0, -0], "22": [0, -0], "23": [0, -0], "24": [0, -0], "25": [0, -0], "26": [0, -0], "27": [2.6, -5.52], "28": [3.1, -5.48], "29": [3.9, -5.52], "30": [4.4, -5.48], "31": [2.7, -4.53], "32": [3.2, -4.53], "33": [3.8, -4.53], "34": [4.5, -4.57], "35": [5, -4.55], "36": [0.3, -3.48], "37": [0.8, -3.48], "38": [1.3, -3.48], "39": [1.8, -3.48], "40": [2.3, -3.48], "41": [0.5, -3.21], "42": [0.9, -3.21], "43": [1.3, -3.21], "44": [1.6, -3.21], "45": [2, -3.21], "46": [1.2, -3.1], "47": [1.5, -3.1], "48": [1.9, -3.1], "49": [2.2, -3.1], "50": [2.6, -3.1], "51": [1.6, -2.98] },
    "20": { "20": [0, -0], "21": [0, -0], "22": [0, -0], "23": [0, -0], "24": [0, -0], "25": [0, -0], "26": [0, -0], "27": [0, -0], "28": [0, -0], "29": [0, -0], "30": [0, -0], "31": [3, -6.8], "32": [3.8, -6.8], "33": [4.6, -6.8], "34": [5.2, -6.8], "35": [5.9, -6.8], "36": [0.8, -4.4], "37": [1.2, -4.4], "38": [1.8, -4.4], "39": [2.4, -4.4], "40": [3.1, -4.4], "41": [1.2, -3.9], "42": [1.7, -3.9], "43": [2.2, -3.9], "44": [2.7, -3.9], "45": [3.2, -3.9], "46": [1.6, -3.60], "47": [2, -3.60], "48": [2.5, -3.60], "49": [2.9, -3.60], "50": [3.4, -3.60], "51": [1.7, -3.35] },
    "24": { "20": [0, -0], "21": [0, -0], "22": [0, -0], "23": [0, -0], "24": [0, -0], "25": [0, -0], "26": [0, -0], "27": [0, -0], "28": [0, -0], "29": [0, -0], "30": [0, -0], "31": [0, -0], "32": [0, -0], "33": [0, -0], "34": [0, -0], "35": [0.3, -5.92], "36": [1, -5.92], "37": [1.6, -5.92], "38": [2.3, -5.92], "39": [3, -5.92], "40": [3.7, -5.92], "41": [1.7, -4.97], "42": [2.3, -4.97], "43": [2.9, -4.97], "44": [3.5, -4.97], "45": [4.1, -4.97], "46": [1.5, -4.2], "47": [2, -4.2], "48": [2.5, -4.2], "49": [3, -4.2], "50": [3.5, -4.2], "51": [2, -3.9] },
    "28": { "20": [0, -0], "21": [0, -0], "22": [0, -0], "23": [0, -0], "24": [0, -0], "25": [0, -0], "26": [0, -0], "27": [0, -0], "28": [0, -0], "29": [0, -0], "30": [0, -0], "31": [0, -0], "32": [0, -0], "33": [0, -0], "34": [0, -0], "35": [0, -0], "36": [0, -0], "37": [0, -0], "38": [0, -0], "39": [3.2, -8.5], "40": [4, -8.5], "41": [1.8, -6.7], "42": [2.4, -6.5], "43": [3, -6.5], "44": [3.7, -6.5], "45": [4.4, -6.5], "46": [1.9, -5.4], "47": [2.5, -5.4], "48": [3.1, -5.4], "49": [3.8, -5.4], "50": [4.4, -5.4], "51": [2.3, -4.7] },
    "32": { "20": [0, -0], "21": [0, -0], "22": [0, -0], "23": [0, -0], "24": [0, -0], "25": [0, -0], "26": [0, -0], "27": [0, -0], "28": [0, -0], "29": [0, -0], "30": [0, -0], "31": [0, -0], "32": [0, -0], "33": [0, -0], "34": [0, -0], "35": [0, -0], "36": [0, -0], "37": [0, -0], "38": [0, -0], "39": [0, -0], "40": [0, -0], "41": [0, -0], "42": [0, -0], "43": [3.5, -9.9], "44": [4.2, -9.9], "45": [5, -9.9], "46": [2.2, -7.2], "47": [3, -7.2], "48": [3.8, -7.2], "49": [4.5, -7.2], "50": [5.2, -7.2], "51": [2.9, -6.0] },
    "36": { "20": [0, -0], "21": [0, -0], "22": [0, -0], "23": [0, -0], "24": [0, -0], "25": [0, -0], "26": [0, -0], "27": [0, -0], "28": [0, -0], "29": [0, -0], "30": [0, -0], "31": [0, -0], "32": [0, -0], "33": [0, -0], "34": [0, -0], "35": [0, -0], "36": [0, -0], "37": [0, -0], "38": [0, -0], "39": [0, -0], "40": [0, -0], "41": [0, -0], "42": [0, -0], "43": [0, -0], "44": [0, -0], "45": [0, -0], "46": [0, -0], "47": [3.2, -10.5], "48": [4, -10.5], "49": [4.7, -10.5], "50": [5.5, -10.5], "51": [3.2, -8] },
    "40": { "20": [0, -0], "21": [0, -0], "22": [0, -0], "23": [0, -0], "24": [0, -0], "25": [0, -0], "26": [0, -0], "27": [0, -0], "28": [0, -0], "29": [0, -0], "30": [0, -0], "31": [0, -0], "32": [0, -0], "33": [0, -0], "34": [0, -0], "35": [0, -0], "36": [0, -0], "37": [0, -0], "38": [0, -0], "39": [0, -0], "40": [0, -0], "41": [0, -0], "42": [0, -0], "43": [0, -0], "44": [0, -0], "45": [0, -0], "46": [0, -0], "47": [0, -0], "48": [0, -0], "49": [0, -0], "50": [0, -0], "51": [3.5, -12] }
  },
  d_p_j_n: {
    "20": [0, -2, -3.7, 4.35], "21": [0, -2, -3.7, 4.35], "22": [0, -2, -3.7, 4.35], "23": [0, -2, -3.7, 4.35], "24": [0, -2, -3.7, 4.35],
    "25": [0, -2, -3.7, 4.35],
    "26": [params.p_d / 12, -2, -3.2, 3.7, -7.5], "27": [params.p_d / 12, -2, -3.2, 3.7, -7.5],
    "28": [params.p_d / 12, -2, -3.2, 3.7, -7.5], "29": [params.p_d / 12, -2, -3.2, 3.7, -7.5], "30": [params.p_d / 12, -2, -3.2, 3.7, -7.5],
    "31": [0, -2, -2.9, 3.25, -5.4, 7.15], "32": [0, -2, -2.9, 3.25, -5.4, 7.15], "33": [0, -2, -2.9, 3.25, -5.4, 7.15], "34": [0, -2, -2.9, 3.25, -5.4, 7.15],
    "35": [0, -2, -2.9, 3.25, -5.4, 7.15],
    "36": [params.p_d / 16, -2, -2.6, 2.9, -4.1, 5.15, -9.8], "37": [params.p_d / 16, -2, -2.6, 2.9, -4.1, 5.15, -9.8],
    "38": [params.p_d / 16, -2, -2.6, 2.9, -4.1, 5.15, -9.8], "39": [params.p_d / 16, -2, -2.6, 2.9, -4.1, 5.15, -9.8],
    "40": [params.p_d / 16, -2, -2.6, 2.9, -4.1, 5.15, -9.8],
    "41": [0, -2, -2.5, 2.7, -3.7, 3.9, -7.1, 7.75], "42": [0, -2, -2.5, 2.7, -3.7, 3.9, -7.1, 7.75],
    "43": [0, -2, -2.5, 2.7, -3.7, 3.9, -7.1, 7.75], "44": [0, -2, -2.5, 2.7, -3.7, 3.9, -7.1, 7.75], "45": [0, -2, -2.5, 2.7, -3.7, 3.9, -7.1, 7.75],
    "46": [params.p_d / 17, -2, -2.4, 2.6, -3.2, 3.5, -5.1, 5.8, -12], "47": [params.p_d / 17, -2, -2.4, 2.6, -3.2, 3.5, -5.1, 5.8, -12],
    "48": [params.p_d / 17, -2, -2.4, 2.6, -3.2, 3.5, -5.1, 5.8, -12], "49": [params.p_d / 17, -2, -2.4, 2.6, -3.2, 3.5, -5.1, 5.8, -12],
    "50": [params.p_d / 17, -2, -2.4, 2.6, -3.2, 3.5, -5.1, 5.8, -12],
    "51": [0, -2, -2.4, 2.6, -3.2, 3.5, -4.7, 5.4, -8.5, 10.8], "52": [0, -2, -2.4, 2.6, -3.2, 3.5, -4.7, 5.4, -8.5, 10.8],
    "53": [0, -2, -2.4, 2.6, -3.2, 3.5, -4.7, 5.4, -8.5, 10.8], "54": [0, -2, -2.4, 2.6, -3.2, 3.5, -4.7, 5.4, -8.5, 10.8],
    "55": [0, -2, -2.4, 2.6, -3.2, 3.5, -4.7, 5.4, -8.5, 10.8],
    "56": [-1.5, -2, -2.4, 2.4, -3.1, 3, -4.4, 4.2, -8, 6.9, 17.8], "57": [-1.5, -2, -2.4, 2.4, -3.1, 3, -4.4, 4.2, -8, 6.9, 17.8],
    "58": [-1.5, -2, -2.4, 2.4, -3.1, 3, -4.4, 4.2, -8, 6.9, 17.8], "59": [-1.5, -2, -2.4, 2.4, -3.1, 3, -4.4, 4.2, -8, 6.9, 17.8],
    "60": [-1.5, -2, -2.4, 2.4, -3.1, 3, -4.4, 4.2, -8, 6.9, 17.8],
    "61": [-1.5, -2, -2.4, 2.4, -3.1, 3, -4.4, 4.2, -8, 6.9, 17.8],
  },
  b_u_D_p_a: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
  d_p_j_n_f_U_y_N: {
    "5": { "20": [1, -2.57], "21": [1, -2.57], "22": [1.2, -2.57], "23": [1.4, -2.57], "24": [1.6, -2.57], "25": [1.8, -2.57], "26": [1, -2.45], "27": [1.2, -2.46], "28": [1.4, -2.46], "29": [1.6, -2.46], "30": [1.8, -2.46], "31": [0.8, -2.365], "32": [1.1, -2.36], "33": [1.3, -2.36], "34": [1.4, -2.36], "35": [1.6, -2.36], "36": [0.3, -2.25], "37": [0.4, -2.25], "38": [0.5, -2.25], "39": [0.6, -2.25], "40": [0.7, -2.25], "41": [0.2, -2.215], "42": [0.4, -2.22], "43": [0.5, -2.22], "44": [0.6, -2.22], "45": [0.7, -2.22], "46": [-0.25, -2.17], "47": [0, -2.17], "48": [0.2, -2.17], "49": [0.25, -2.17], "50": [0.3, -2.17], "51": [0.4, -2.17] },
    "10": { "20": [1.1, -3.8], "21": [1.1, -3.8], "22": [1.5, -3.8], "23": [2, -3.8], "24": [2.5, -3.8], "25": [3, -3.8], "26": [0.7, -3.16], "27": [0.9, -3.1], "28": [1.3, -3.1], "29": [1.6, -3.1], "30": [2, -3.1], "31": [0.8, -2.9], "32": [1.1, -2.9], "33": [1.5, -2.9], "34": [1.8, -2.9], "35": [2.1, -2.9], "36": [0.3, -2.68], "37": [0.5, -2.68], "38": [0.8, -2.68], "39": [1, -2.68], "40": [1.2, -2.68], "41": [0.5, -2.58], "42": [0.8, -2.58], "43": [1, -2.58], "44": [1.1, -2.58], "45": [1.4, -2.58], "46": [-0.25, -2.45], "47": [0, -2.45], "48": [0.2, -2.45], "49": [0.25, -2.45], "50": [0.5, -2.45], "51": [0.6, -2.45] },
    "15": { "20": [1.3, -4.8], "21": [1.3, -4.8], "22": [2.1, -4.8], "23": [2.8, -4.8], "24": [3.5, -4.8], "25": [4.3, -4.8], "26": [0.7, -4.56], "27": [1.4, -4.5], "28": [2, -4.5], "29": [2.5, -4.5], "30": [3.1, -4.5], "31": [1, -3.8], "32": [1.6, -3.85], "33": [2.1, -3.85], "34": [2.6, -3.85], "35": [3.1, -3.85], "36": [0.5, -3.31], "37": [0.7, -3.28], "38": [1.1, -3.28], "39": [1.5, -3.28], "40": [1.8, -3.28], "41": [0.7, -3.1], "42": [1.2, -3.1], "43": [1.4, -3.1], "44": [1.7, -3.08], "45": [2.1, -3.08], "46": [0.2, -2.87], "47": [0.2, -2.84], "48": [0.8, -2.87], "49": [1, -2.85], "50": [1.2, -2.85], "51": [0.7, -2.8] },
    "20": { "20": [0, -0], "21": [0, -0], "22": [0, -0], "23": [0, -0], "24": [0, -0], "25": [0, -0], "26": [0, -0], "27": [0, -0], "28": [0, -0], "29": [0, -0], "30": [0, -0], "31": [1, -5.47], "32": [1.6, -5.47], "33": [2.2, -5.47], "34": [2.8, -5.47], "35": [3.3, -5.43], "36": [0.8, -4.35], "37": [1.4, -4.39], "38": [2, -4.39], "39": [2.5, -4.39], "40": [3, -4.39], "41": [1.1, -3.87], "42": [1.6, -3.87], "43": [2.1, -3.87], "44": [2.6, -3.87], "45": [3.1, -3.87], "46": [0.2, -3.40], "47": [0.7, -3.40], "48": [1.1, -3.40], "49": [1.4, -3.40], "50": [1.9, -3.40], "51": [0.6, -3.25] },
    "25": { "20": [0, -0], "21": [0, -0], "22": [0, -0], "23": [0, -0], "24": [0, -0], "25": [0, -0], "26": [0, -0], "27": [0, -0], "28": [0, -0], "29": [0, -0], "30": [0, -0], "31": [0, -0], "32": [0, -0], "33": [0, -0], "34": [0, -0], "35": [0, -0], "36": [1.1, -6.40], "37": [1.8, -6.40], "38": [2.5, -6.40], "39": [3.2, -6.40], "40": [3.9, -6.40], "41": [1.8, -5.30], "42": [2.5, -5.30], "43": [3.2, -5.30], "44": [3.9, -5.30], "45": [4.5, -5.30], "46": [1.4, -4.40], "47": [2, -4.40], "48": [2.6, -4.40], "49": [3, -4.40], "50": [3.6, -4.40], "51": [1.2, -4] },
    "30": { "20": [0, -0], "21": [0, -0], "22": [0, -0], "23": [0, -0], "24": [0, -0], "25": [0, -0], "26": [0, -0], "27": [0, -0], "28": [0, -0], "29": [0, -0], "30": [0, -0], "31": [0, -0], "32": [0, -0], "33": [0, -0], "34": [0, -0], "35": [0, -0], "36": [0, -0], "37": [0, -0], "38": [0, -0], "39": [0, -0], "40": [0, -0], "41": [2.2, -7.97], "42": [2.8, -7.97], "43": [3.6, -7.97], "44": [4.3, -7.97], "45": [5.1, -7.97], "46": [2.1, -6.07], "47": [2.7, -6.07], "48": [3.3, -6.07], "49": [4, -6.07], "50": [4.7, -6.07], "51": [1.1, -4.8] },
    "35": { "20": [0, -0], "21": [0, -0], "22": [0, -0], "23": [0, -0], "24": [0, -0], "25": [0, -0], "26": [0, -0], "27": [0, -0], "28": [0, -0], "29": [0, -0], "30": [0, -0], "31": [0, -0], "32": [0, -0], "33": [0, -0], "34": [0, -0], "35": [0, -0], "36": [0, -0], "37": [0, -0], "38": [0, -0], "39": [0, -0], "40": [0, -0], "41": [0, -0], "42": [0, -0], "43": [0, -0], "44": [0, -0], "45": [0, -0], "46": [2.2, -9], "47": [2.9, -9.1], "48": [3.8, -9.2], "49": [4.6, -9.2], "50": [5.5, -9.2], "51": [0.9, -6.4] },
    "40": { "20": [0, -0], "21": [0, -0], "22": [0, -0], "23": [0, -0], "24": [0, -0], "25": [0, -0], "26": [0, -0], "27": [0, -0], "28": [0, -0], "29": [0, -0], "30": [0, -0], "31": [0, -0], "32": [0, -0], "33": [0, -0], "34": [0, -0], "35": [0, -0], "36": [0, -0], "37": [0, -0], "38": [0, -0], "39": [0, -0], "40": [0, -0], "41": [0, -0], "42": [1.6, -3.87], "43": [0, -0], "44": [0, -0], "45": [0, -0], "46": [0, -0], "47": [0, -0], "48": [0, -0], "49": [0, -0], "50": [1.9, -3.40], "51": [1.3, -9.40] }
  },
  b_M_g_V: 0.02,
  b_n_B_d: "",
  b_t_x_P_g: [],
  c_h_L_I_g: "",
  c_h_L_I_g1: "",
  s_L_d_C_k: "",
  c_h_k_I_g_U_d: "",
  c_h_k_S_l_d: false,
  i_g_A_y: [],
  c_h_L_d_V: true,
  d_r_a_m_l: {},
  c_h_d_M_l: false,
  checkFVL: "",
  checkFVR: "",
  H_d_l_D_r_ar: { 'front': [], 'back': [] },
  c_k_Do_po_s: "",
  c_k_C_n_s: false,
  I_g_m_ar_R: {},
  main_posGet: "",
  chkPrmVl: "",
  chkTabbedVal: "",
  chkModValByTab: false,
  drop_arr: {},
  d_w_a_r_N_w: [],
  colorTable: {},
  g_d_a_pD: [],
  place_d: false,
  legstype: "single",
  insulationJson: {},
  colorTableNext: {},
  MainuId: "",
  makeArrayForComponent: [],
  makeArrayForComponent_Barn: [],
  Manidata: [{ "id": 1, "name": "Alabama", "manufacturer_id": 8 }, { "id": 2, "name": "Arizona", "manufacturer_id": 4 }, { "id": 3, "name": "Arkansas", "manufacturer_id": 11 }, { "id": 4, "name": "California", "manufacturer_id": 6 }, { "id": 5, "name": "Colorado", "manufacturer_id": 11 }, { "id": 6, "name": "Connecticut", "manufacturer_id": 8 }, { "id": 7, "name": "Delaware", "manufacturer_id": 8 }, { "id": 8, "name": "Florida", "manufacturer_id": 3 }, { "id": 9, "name": "Georgia", "manufacturer_id": 8 }, { "id": 10, "name": "Idaho", "manufacturer_id": 11 }, { "id": 11, "name": "Illinois", "manufacturer_id": 11 }, { "id": 12, "name": "Indiana", "manufacturer_id": 7 }, { "id": 13, "name": "Iowa", "manufacturer_id": 4 }, { "id": 14, "name": "Kansas", "manufacturer_id": 11 }, { "id": 15, "name": "Kentucky", "manufacturer_id": 8 }, { "id": 16, "name": "Louisiana", "manufacturer_id": 9 }, { "id": 17, "name": "Maryland", "manufacturer_id": 8 }, { "id": 18, "name": "Massachusetts", "manufacturer_id": 8 }, { "id": 19, "name": "Michigan", "manufacturer_id": 7 }, { "id": 20, "name": "Minnesota", "manufacturer_id": 4 }, { "id": 21, "name": "Mississippi", "manufacturer_id": 11 }, { "id": 22, "name": "Missouri", "manufacturer_id": 11 }, { "id": 23, "name": "Montana", "manufacturer_id": 11 }, { "id": 24, "name": "Nebraska", "manufacturer_id": 11 }, { "id": 25, "name": "Nevada", "manufacturer_id": 11 }, { "id": 26, "name": "New Jersey", "manufacturer_id": 8 }, { "id": 27, "name": "New Mexico", "manufacturer_id": 11 }, { "id": 28, "name": "New York", "manufacturer_id": 8 }, { "id": 29, "name": "North Carolina", "manufacturer_id": 8 }, { "id": 30, "name": "North Dakota", "manufacturer_id": 8 }, { "id": 31, "name": "Ohio", "manufacturer_id": 8 }, { "id": 32, "name": "Oklahoma", "manufacturer_id": 11 }, { "id": 33, "name": "Oregon", "manufacturer_id": 11 }, { "id": 34, "name": "Pennsylvania", "manufacturer_id": 8 }, { "id": 35, "name": "South Carolina", "manufacturer_id": 8 }, { "id": 36, "name": "South Dakota", "manufacturer_id": 8 }, { "id": 37, "name": "Tennessee", "manufacturer_id": 8 }, { "id": 38, "name": "Texas", "manufacturer_id": 9 }, { "id": 39, "name": "Utah", "manufacturer_id": 11 }, { "id": 40, "name": "Virginia", "manufacturer_id": 8 }, { "id": 41, "name": "West Virginia", "manufacturer_id": 8 }, { "id": 42, "name": "Wisconsin", "manufacturer_id": 4 }, { "id": 43, "name": "Wyoming", "manufacturer_id": 11 }, { "id": 44, "name": "Washington", "manufacturer_id": 8 }, { "id": 45, "name": "Maine", "manufacturer_id": 8 }, { "id": 46, "name": "New Hampshire", "manufacturer_id": 8 }, { "id": 47, "name": "Rhode Island", "manufacturer_id": 8 }, { "id": 48, "name": "Vermont", "manufacturer_id": 8 }],
  checkFunCalling: false,
  DiscountData: "",
  Heading: "",
  CustomDoorArr: {
    'Garage': { 'Size': {}, 'Object': {}, 'SidePrice': {}, 'EndPrice': {}, 'TrimKit': {}, 'Chain_Hoist': {}, 'Header_Seal': {} },
    'Walk': { 'Size': {}, 'Object': {}, 'SidePrice': {}, 'EndPrice': {} },
    'WalkFrameout': { 'Size': {}, 'Object': {}, 'SidePrice': {}, 'EndPrice': {} },
    'Windows': { 'Size': {}, 'Object': {}, 'SidePrice': {}, 'EndPrice': {} },
    'WindowsFrameout': { 'Size': {}, 'Object': {}, 'SidePrice': {}, 'EndPrice': {} },
    'GarageFrameout': { 'Size': {}, 'Object': {}, 'SidePrice': {}, 'EndPrice': {}, 'TrimKit': {} },
    'CustomFrameout': { 'Size': {}, 'Object': {}, 'SidePrice': {}, 'EndPrice': {}, 'TrimKit': {}, 'Width': {}, 'Height': {} }
  },
  persistWallVal: { "front": "Open", "back": "Open", "left": "Open", "right": "Open", "cutpanel_Left": false, "cutpanel_Right": false, "AllWall": false, "Utility": false },
  lightUpdate: "",
  PointLight11: '', PointLight111: '', PointLight: '', PointLight1: '',
  textureUrl: '',
  textureLoader: '',
  textureWidth: '',
  textureWidthLeft: '',
  textureWidthRight: '',
  textureDepth: '',
  textureHalfTruss1Width: '',
  textureHalfTruss1Depth: '',
  textureHalfTruss2Width: '',
  textureHalfTruss2Depth: '',
  textureHalfTruss3Width: '',
  textureHalfTruss3Depth: '',
  textureHalfTruss4Width: '',
  textureHalfTruss4Depth: '',
  b_h_t1Roof: '',
  b_h_t2Roof: '',
  b_h_t3Roof: '',
  b_h_t4Roof: '',
  b_h_t5Roof: '',
  b_h_t6Roof: '',
  colorTable: {
    CardinalRed: "0x9c132e",
    TrueBurgundy: "0x7a2527",
    PebbleBeige: "0xd9dabb",
    Clay: "0xccc7c0",
    EarthBrown: "0x4e3227",
    Evergreen: "0x274e37",
    Black: "0x212121",
    Gray: "0x8c8d8e",
    QuakerGray: "0x575a5d",
    Sandstone: "0xd2d0b5",
    SlateBlue: "0x44687d",
    Tan: "0xbe9272",
    White: "0xffffff",
    BarnRed: "0xa63f1e",
    VintageBurgundy: "0x5a2c34",
    KingBlue: "0x3380b8"
  },
  /* APi Manager Constant */
  BASE_URL: "https://pricing.senseicrm.com:3006/api/",
  GET_BUILDING_APi: "getBuildingData",
  GET_PRICEING_APi: "getBuildingPricing"
}

export let setParamsValues = (newParams) => {
  params = newParams;
}