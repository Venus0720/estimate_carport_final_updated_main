import { params, const_var } from '../redux/reducers/reducer';
import { heighLightCupola } from '../redux/reducers/componentReducer'
import * as THREE from "three";
export const colors  = (doorId) => {
    const roofColor = params.p_r_c.replace("#","0x");
    const trimColor = params.p_t_c.replace("#","0x");
    const wallColor = params.p_w_c.replace("#","0x");

    var data = const_var.scene.children;
    data.forEach(function(Geometry) {

        if(Geometry.name.includes("cupola")){
            let cupolaRoof = Geometry.getObjectByName("cupola_roof");
                cupolaRoof?.material.color.setHex( roofColor );
            let cupolaRoofTrim = Geometry.getObjectByName("cupola_roof_trim");
                cupolaRoofTrim?.material.color.setHex( roofColor );
            let cupolaBase = Geometry.getObjectByName("cupola_base");
                cupolaBase?.material.color.setHex( wallColor );
            let cupolaBaseConnector = Geometry.getObjectByName("base_connector");
                cupolaBaseConnector?.material.color.setHex( wallColor );
            let cupolaTrims = Geometry.getObjectByName("cupola_trims")
                cupolaTrims?.material.color.setHex( wallColor );
            let cupolaShutter = Geometry.getObjectByName("cupola_shutters");
                cupolaShutter?.material.color.setHex( trimColor );
            let cupolaWindowFrame = Geometry.getObjectByName("cupola_window_farme");
                 cupolaWindowFrame?.material.color.setHex( trimColor );
            // let cupolaWindowTrims = Geometry.getObjectByName("cupola_window_trims");
            //     cupolaWindowTrims?.material.color.setHex( trimColor );
         }

        if(Geometry.name.includes("door") == true){


            var trimCalor = params.p_t_c.replace("#","0x");
            let index = Geometry.children.findIndex(data=>data.name.includes("trim")==true || data.name.includes("windowFrame")==true);
            if(Geometry.children[index]!=undefined)
            {
                Geometry.children[index].material.emissive.setHex( trimCalor );
            }
        }
        if(Geometry.name.includes("walkin") == true){

            var trimCalor = params.p_t_c.replace("#","0x");
            let index = Geometry.children.findIndex(data=>data.name.includes("trim")==true || data.name.includes("windowFrame")==true);
            if(Geometry.children[index]!=undefined)
            {
                Geometry.children[index].material.emissive.setHex( trimCalor );
            }
        }
        if(Geometry.name.includes("window") == true){
            var trimCalor = params.p_t_c.replace("#","0x");
            let index = Geometry.children.findIndex(data=>data.name.includes("trim")==true || data.name.includes("windowFrame")==true || data.name.includes("Cube")==true );
            if(Geometry.children[index]!=undefined)
            {
                Geometry.children[index].material.emissive.setHex( trimCalor );
            }
        }
        if (Geometry.name.includes("window_with_shutters_window") == true){
            let Shutter = Geometry.children.find(mesh=> mesh.name == "Shutters");
            if (Shutter !== undefined){
              let  wallCalor = params.p_w_c.replace("#","0x");
                Shutter.material.color.setHex(wallCalor);
            }
        }
        // console.log(doorId,"doorId");
        if(doorId!=undefined)
        {
            if(Geometry.name.includes("door"+doorId) == true){
                if (Geometry.name.includes("sectional_with_window_door") == true){
                    Geometry.children[2].material.color.setHex(params.g_d_c);
                    Geometry.children[2].material.emissive.setHex("0x363636");
                    if(params.g_d_c != "0xFFFFFF" && params.g_d_c != "0xffffff") Geometry.children[2].material.emissive.setHex("black");
                }else{
                    Geometry.children[1].material.color.setHex(params.g_d_c);
                    Geometry.children[1].material.emissive.setHex("0x363636");
                    if(params.g_d_c != "0xFFFFFF" && params.g_d_c != "0xffffff") Geometry.children[1].material.emissive.setHex("black");
                }
                //console.log(Geometry.children[1].material,"colors file" ,params.g_d_c);
                // if (params.g_d_c == "0xffffff") {
                //     Geometry.children[1].material.color.b = 1.1;
                //     if(Geometry.children.length>0 && Geometry.children[1].material!=undefined && Geometry.children[1].material.name!=undefined && Geometry.children[1].material.name == "Material.004"){
                //         Geometry.children[1].material.color.b = 0.9;
                //         Geometry.children[1].material.color.g = 0.85;
                //         Geometry.children[1].material.color.r = 0.85;
                //     }
                    
                // }

                // let door = Geometry.getObjectByName("doors");
                // if(door !=undefined)
                // {
                //     door.material.color.setHex(params.g_d_c);
                //     if (params.g_d_c == "0xffffff") {
                //         door.material.color.b = 1.1
                //         door.material.metalness = -0.2
                //         if(Geometry.children.length>0 && door.material!=undefined && door.material.name!=undefined && door.material.name == "Material.004"){
                //             door.material.color.b = 0.9;
                //             door.material.color.g = 0.85;
                //             door.material.color.r = 0.85;
                //         }
                //     }
                // }

            }
            if(Geometry.name.includes("overhead_door_door") == true && Geometry.uniqueId == doorId){
                Geometry.children.forEach((child)=>{
                    if(child.name.includes('door') == true){
                        child.material.color.setHex(params.g_d_c);
                    }
                })
            }
        }
        if (const_var.entry_points.length > 0) {
            if(Geometry.userData.compType !== undefined && Geometry.userData.compType.includes("_frameout") == true){
                let checkWallValue = const_var.checkWallClose[Geometry.userData.wallName];
                var trimCalor = params.p_t_c.replace("#", "0x");
                if( checkWallValue == 'utility') {
                   trimCalor = params.p_t_c.replace("#", "0x");
                }else{ 
                    if (params[checkWallValue]=='Open') {
                        trimCalor = '0x94989B';
                    }
                }   
                let index = Geometry.children.findIndex(data=>data.name.includes("trim")==true || data.name.includes("windowFrame")==true);
                if (Geometry.children[index]!=undefined) {
                   Geometry.children[index].material.emissive.setHex( trimCalor );
                }
                if (Geometry.userData.isBreezewayFrameOut){
                    if (Geometry.children[index]!=undefined) {
                        Geometry.children[index].material.emissive.setHex(params.p_t_c.replace("#", "0x"));
                     }
                }
            } 
         } 
 
        
        Geometry.children.forEach(function(Geometry) {
            var roofCalor = params.p_r_c.replace("#","0x");
            var wallCalor = params.p_w_c.replace("#","0x");
            var trimCalor = params.p_t_c.replace("#","0x");
            var wnScoteCalor = (params.p_w_c_n == true)?params.p_w_c_c.replace("#","0x"):wallCalor;

            if(Geometry.name.includes("jtrim") == true){
                Geometry.material.color.setHex( trimCalor );
            }
            if(Geometry.name.includes("jTrim") == true){
                Geometry.material.color.setHex( trimCalor );
            }
            if(Geometry.name.includes("ws_jtrim") == true || Geometry.name.includes("WS_jtrim") == true){
                Geometry.material.color.setHex( wnScoteCalor );
            }
            
            if (params.p_r_s != 1) {
                 /* Roof */ 
                if ("cbRoof"== Geometry.name) {
                    Geometry.material.color.setHex( roofCalor );	
                }
                /* center Building Trims For A-Frame and Vertival */
                if ("leftFrontTrimA" == Geometry.name || "leftBackTrimA" == Geometry.name || "RightFrontTrimA" == Geometry.name || "centerBuildingLeftTrim" == Geometry.name || "centerBuildingRightTrim" == Geometry.name || "rightBackTrimA" == Geometry.name || "leftLegFrontTopTrim" == Geometry.name|| "leftLegFrontBottomTrim" == Geometry.name|| "rightLegFrontTopTrim" == Geometry.name|| "rightLegFrontBottomTrim" == Geometry.name|| "leftLegBackTopTrim" == Geometry.name|| "leftLegBackBottomTrim" == Geometry.name|| "rightLegBackTopTrim" == Geometry.name|| "rightLegBackBottomTrim" == Geometry.name || "backStorageLeftFrontTrim" == Geometry.name || "backStorageRightFrontTrim" == Geometry.name) {
                    Geometry.material.color.setHex( trimCalor );								
                }
            }
            if (params.p_r_s == 1) {
                if ( "cbRegularRoofLCurve"== Geometry.name|| "centerRegularRoofR" == Geometry.name || "leanToRegularRoofCurveL"== Geometry.name || "RFLPorchRightCurve"== Geometry.name || "RFLPorchFrontCurve"== Geometry.name || "LFLPorchFrontCurve"== Geometry.name || "LFLPorchLeftCurve"== Geometry.name || "leanToRegularRoofL" == Geometry.name || "leanToRegularRoofR" == Geometry.name || "leanToRegularRoofB" == Geometry.name || "leanToRegularRoofF" == Geometry.name ) {
                    Geometry.material.color.setHex( roofCalor );								
                }
                /* center Building Trims For Regular Roof */
                if ( "leftFrontTrim" == Geometry.name || "leftFrontTrim1" == Geometry.name || "leftFrontTrim2" == Geometry.name || "leftFrontTrim3" == Geometry.name || "leftFrontTrim4" == Geometry.name || 
                "leftBackTrim" == Geometry.name || "leftBackTrim1" == Geometry.name || "leftBackTrim2" == Geometry.name || "leftBackTrim3" == Geometry.name || "leftBackTrim4" == Geometry.name ||
                "rightFrontTrim" == Geometry.name || "rightFrontTrim1" == Geometry.name || "rightFrontTrim2" == Geometry.name ||"rightFrontTrim3" == Geometry.name || "rightFrontTrim4" == Geometry.name ||
                "rightBackTrim" == Geometry.name || "rightBackTrim1" == Geometry.name || "rightBackTrim2" == Geometry.name ||"rightBackTrim3" == Geometry.name || "rightBackTrim4" == Geometry.name  ||
                "leftLegFrontTopTrim" == Geometry.name|| "leftLegFrontBottomTrim" == Geometry.name|| "rightLegFrontTopTrim" == Geometry.name|| "rightLegFrontBottomTrim" == Geometry.name|| "leftLegBackTopTrim" == Geometry.name|| "leftLegBackBottomTrim" == Geometry.name|| "rightLegBackTopTrim" == Geometry.name|| "rightLegBackBottomTrim" == Geometry.name || "backStorageLeftFrontTrim" == Geometry.name || "backStorageRightFrontTrim" == Geometry.name
                ) {
                     Geometry.material.color.setHex( trimCalor );								
                 }
            }

            /* center Building Gables */
            if ("fGable" == Geometry.name  || "bGable" == Geometry.name) {
                Geometry.material.color.setHex( wallCalor );								
            }
            /* center Building wall */
            if ("c_b_f_w" == Geometry.name || "c_b_b_w" == Geometry.name || "c_b_l_w" == Geometry.name || "c_b_r_w" == Geometry.name) {
				Geometry.material.color.setHex( wallCalor );
			}
            if (params.p_u_c == true) {
                /* center Building Storage wall */
                if ("f_S_Gable" == Geometry.name || "c_b_f_s_w" == Geometry.name || "c_b_b_s_w" == Geometry.name || "c_b_l_s_w" == Geometry.name || "c_b_r_s_w" == Geometry.name) {
                    Geometry.material.color.setHex( wallCalor );
                }
                if (params.p_w_c_n == true){
                    if ("c_b_f_s_w_ws" == Geometry.name|| "c_b_r_s_w_ws" == Geometry.name|| "c_b_l_s_w_ws" == Geometry.name) {
                      Geometry.material.color.setHex( wnScoteCalor );								
                    }
                 }
            }
            if (params.cB_addStorage_check_front) {
                /* center Building Front Storage walls */
                if ("f_S_b_Gable" == Geometry.name || "c_b_f_s_l_w" == Geometry.name || "c_b_f_s_r_w" == Geometry.name || "c_b_f_s_b_w" == Geometry.name ) {
                    Geometry.material.color.setHex( wallCalor );
                }
                if (params.p_w_c_n) {
                    if ("c_b_f_s_l_w_ws" == Geometry.name|| "c_b_f_s_r_w_ws" == Geometry.name|| "c_b_f_s_b_w_ws" == Geometry.name) {
                      Geometry.material.color.setHex( wnScoteCalor );								
                    }
                 }
            }
            if (params.cB_addStorage_check_right == true) {
                 /* center Building Right Storage wall */
                 if ("R_S_F_W_VT" == Geometry.name || "R_S_B_W_VT" == Geometry.name || "R_S_F_2W_VT" == Geometry.name || "CB_R_S_F_G" == Geometry.name || "CB_R_S_B_G" == Geometry.name || "CB_R_S_4V_F_G" == Geometry.name || "CB_R_S_4V_B_G" == Geometry.name || "c_b_r_s_f_w" == Geometry.name|| "c_b_r_s_b_w" == Geometry.name|| "c_b_r_s_l_w" == Geometry.name ) {
			        	Geometry.material.color.setHex( wallCalor );
			        }
                /* center Building Right Storage wall Trims */
                if ("CB_R_S_F_T" == Geometry.name || "CB_R_S_B_T" == Geometry.name  ) {
                    Geometry.material.color.setHex( trimCalor );								
                }
                if (params.p_w_c_n == true){
                    if ("c_b_r_s_f_w_ws" == Geometry.name || "c_b_r_s_l_w_ws" == Geometry.name || "c_b_r_s_b_w_ws" == Geometry.name || "c_b_r_s_f_2w_ws" == Geometry.name || "c_b_r_s_b_2w_ws" == Geometry.name) {
                      Geometry.material.color.setHex( wnScoteCalor );								
                    }
                 }
            }
            if (params.cB_addStorage_check_left == true){
                 /* center Building Left Storage wall */
                 if ("L_S_F_W_VT" == Geometry.name || "L_S_B_W_VT" == Geometry.name ||"L_S_F_2W_VT" == Geometry.name ||"CB_L_S_F_G" == Geometry.name || "CB_L_S_B_G" == Geometry.name || "CB_L_S_4V_F_G" == Geometry.name || "CB_L_S_4V_B_G" == Geometry.name || "c_b_l_s_f_w" == Geometry.name|| "c_b_l_s_b_w" == Geometry.name || "c_b_l_s_r_w" == Geometry.name) {
                     Geometry.material.color.setHex( wallCalor );
                 }
                 /* center Building Left Storage wall Trims */
                 if ("CB_L_S_F_T" == Geometry.name || "CB_L_S_B_T" == Geometry.name ) {
                    Geometry.material.color.setHex( trimCalor );								
                }
                if (params.p_w_c_n == true){
                    if ("c_b_l_s_r_w_ws" == Geometry.name || "c_b_l_s_b_w_ws" == Geometry.name || "c_b_l_s_f_w_ws" == Geometry.name || "c_b_l_s_f_2w_ws" == Geometry.name || "c_b_l_s_b_2w_ws" == Geometry.name) {
                      Geometry.material.color.setHex( wnScoteCalor );								
                    }
                 }
            }

            /* center Building Wall Trims  */
            if ( "leftLegFrontTrim" == Geometry.name || "leftLegFrontTrimL" == Geometry.name || "leftLegBackTrim" == Geometry.name || "leftLegBackTrimL" == Geometry.name  || 
                 "rightLegFrontTrim" == Geometry.name || "rightLegFrontTrimR" == Geometry.name || "rightLegBackTrim" == Geometry.name || "rightLegBackTrimR" == Geometry.name  ) {
             Geometry.material.color.setHex( trimCalor );								
            }

            if (params.p_w_c_n == true){
               /* Center Building Wainscot */
               if ("c_b_f_w_ws" == Geometry.name || "c_b_b_w_ws" == Geometry.name || "c_b_l_w_ws" == Geometry.name || "c_b_r_w_ws" == Geometry.name  ) {
                 Geometry.material.color.setHex( wnScoteCalor );								
               }
            }
    
            if (params.add_front_lean == true) {
                /* Roof */ 
               if ("fRoof" == Geometry.name ) {
                   Geometry.material.color.setHex( roofCalor );	
               }
                /* Front LeanTo Gables */
                if ("F_L_L_G" == Geometry.name  || "F_L_R_G" == Geometry.name || "F_L_R_S_G" == Geometry.name  ) {
                   Geometry.material.color.setHex( wallCalor );								
               }
               /* Front LeanTo wall */
               if ("F_L_F_W" == Geometry.name || "F_L_L_W" == Geometry.name || "F_L_R_W" == Geometry.name ) {
                   Geometry.material.color.setHex( wallCalor );
               }
               /* Front LeanTo Storage wall  */
               if (params.add_storage_check_front == true) {
                   if ("F_L_B_S_W" == Geometry.name ||"F_L_F_S_W" == Geometry.name || "F_L_L_S_W" == Geometry.name || "F_L_R_S_W" == Geometry.name || "F_L_B_S_W" == Geometry.name) {
                       Geometry.material.color.setHex( wallCalor );
                   }
               }
               if (params.p_w_c_n == true){
                   /* Front LeanTo Wainscot wall */
                   if ("F_L_F_W_WS" == Geometry.name || "F_L_L_W_WS" == Geometry.name || "F_L_R_W_WS" == Geometry.name || "F_L_F_S_W_WS" == Geometry.name || "F_L_R_S_W_WS" == Geometry.name|| "F_L_L_S_W_WS"== Geometry.name) {
                       Geometry.material.color.setHex( wnScoteCalor );
                   }
               }
               if (params.p_r_s == 1){
                    if ("leanToRegularRoofF" == Geometry.name ) {
                        Geometry.material.color.setHex( roofCalor );								
                    }
                   /* Front LeanTo Trims For Regular Roof */
                   if ("frontLeanToFrontLegTrim" == Geometry.name || "frontLeanToBackTrim" == Geometry.name || "frontLeanToBackTrim1" == Geometry.name || "frontLeanToBackTrim2" == Geometry.name || "frontLeanToBackTrim3" == Geometry.name  ||
                   "frontLeanToFrontTrim" == Geometry.name || "frontLeanToFrontTrim2" == Geometry.name || "frontLeanToFrontTrim1" == Geometry.name || "frontLeanToFrontTrim3" == Geometry.name ||"frontLeanToFrontTrim4"== Geometry.name ||"frontLeanToLeftWallTrim"== Geometry.name ||"frontLeanToLWFSTrim"== Geometry.name ||"frontLeanToLFrontWallTrim" == Geometry.name || "frontLeanToRFrontWallTrim" == Geometry.name ) {
                     Geometry.material.color.setHex( trimCalor );								
                    }
               }
               if (params.p_r_s != 1){
                  /* Front LeanTo Trims For A-Frame and Vertival */
                  if ("frontLeanToRightTrimA" == Geometry.name || "frontLeanToLeftTrimA" == Geometry.name || "frontLeantoFrontTrimA" == Geometry.name || "frontLeanToRightWallTrim" == Geometry.name || "frontLeanToRFrontWallTrim" == Geometry.name || "frontLeanToBackLegTrim" == Geometry.name || "frontLeanToFrontLegTrim" == Geometry.name ) {
                   Geometry.material.color.setHex( trimCalor );								
                   }
                }
           }
           if (params.add_left_lean == true) {
                /* Roof */ 
               if ( "lRoof" == Geometry.name ) {
                   Geometry.material.color.setHex( roofCalor );	
               }
                /* Left Lean To Gables */
                if ("L_L_F_G" == Geometry.name  || "L_L_B_G" == Geometry.name || "L_L_F_S_G" == Geometry.name  ) {
                    Geometry.material.color.setHex( wallCalor );								
                }
                /* Left Lean To wall */
                if ("L_L_L_W" == Geometry.name || "L_L_F_W" == Geometry.name || "L_L_B_W" == Geometry.name ) {
                    Geometry.material.color.setHex( wallCalor );
                }
                if (params.p_w_c_n == true){
                /* Left Lean To wall  Wainscot */
                if ("L_L_L_W_WS" == Geometry.name || "L_L_F_W_WS" == Geometry.name || "L_L_B_W_WS" == Geometry.name|| "L_L_L_S_W_WS" == Geometry.name || "L_L_R_S_W_WS" == Geometry.name || "L_L_F_S_W_WS"== Geometry.name ) {
                Geometry.material.color.setHex( wnScoteCalor );
                }
                }
                if (params.add_storage_check)
                /* Left Lean To Storage wall */
                if ("L_L_F_S_W" == Geometry.name || "L_L_B_S_W" == Geometry.name || "L_L_L_S_W" == Geometry.name || "L_L_R_S_W" == Geometry.name) {
                    Geometry.material.color.setHex( wallCalor );
                }
                if (params.p_r_s == 1){
                    if ("leanToRegularRoofCurveL"== Geometry.name  || "leanToRegularRoofL" == Geometry.name) {
                        Geometry.material.color.setHex( roofCalor );								
                    }
                    /* Left LeanTo Trims For Regular Roof */
                    if ( "leftLeanToFrontTrim" == Geometry.name || "leanToleftFrontTrim1" == Geometry.name || "leanToleftFrontTrim2" == Geometry.name || "leanToleftFrontTrim3" == Geometry.name || "leanToleftFrontTrim4" == Geometry.name || "leanToleftFrontWallTrim" == Geometry.name || "leanToleftFLeftWallTrim" == Geometry.name ||
                        "leftLeanToBackTrim" == Geometry.name || "leanTolefBackTrim1" == Geometry.name || "leanToleftBackTrim2" == Geometry.name || "leanToleftBackTrim3" == Geometry.name  || "leanToleftBackTrim4" == Geometry.name  || "leanToleftBackWallTrim" == Geometry.name || "leanToleftBLeftWallTrim" == Geometry.name ) {
                        Geometry.material.color.setHex( trimCalor );								
                    }
                }   
                if (params.p_r_s != 1){
                    /* Left LeanTo Trims For  Roof */
                    if ("leftLeanToFrontTrimA" == Geometry.name || "leftLeanToBackTrimA" == Geometry.name || "leftLeantoLeftTrimA" == Geometry.name ) {
                        Geometry.material.color.setHex( trimCalor );								
                    }
                }  
                if ( "leftLeanToFrontTrim" == Geometry.name  || "leanToleftFrontWallTrim" == Geometry.name || "leanToleftFLeftWallTrim" == Geometry.name ||
                     "leftLeanToBackTrim" == Geometry.name || "leanToleftBackWallTrim" == Geometry.name || "leanToleftBLeftWallTrim" == Geometry.name ) {
                        Geometry.material.color.setHex( trimCalor );								
                    } 

           }
           if (params.add_right_lean == true) {
                /* Roof */ 
               if ("rRoof" == Geometry.name ) {
                   Geometry.material.color.setHex( roofCalor );	
               }
               /* Right LeanTo Gables */
                if ("R_L_F_G" == Geometry.name  || "R_L_B_G" == Geometry.name || "R_L_F_S_G" == Geometry.name  ) {
                    Geometry.material.color.setHex( wallCalor );								
                }
                /* Right LeanTo wall */
                if ("R_L_R_W" == Geometry.name || "R_L_F_W" == Geometry.name || "R_L_B_W" == Geometry.name ) {
                    Geometry.material.color.setHex( wallCalor );
                }
                if (params.p_w_c_n == true){
                    /* Right LeanTo wall  Wainscot */
                    if ("R_L_F_W_WS" == Geometry.name || "R_L_B_W_WS" == Geometry.name || "R_L_R_W_WS" == Geometry.name || "R_L_R_S_W_WS" == Geometry.name|| "R_L_L_S_W_WS" == Geometry.name||"R_L_F_S_W_WS" == Geometry.name) {
                        Geometry.material.color.setHex( wnScoteCalor );
                    }
                }
                if (params.add_storage_check_right == true){
                    /* Right LeanTo Storage wall */
                    if ("R_L_F_S_W" == Geometry.name || "R_L_B_S_W" == Geometry.name || "R_L_L_S_W" == Geometry.name || "R_L_R_S_W" == Geometry.name) {
                        Geometry.material.color.setHex( wallCalor );
                    }
                }
                if (params.p_r_s != 1 ) {
                    /* Right LeanTo Trims For Regular Roof */
                    if ( "rightLeanToFrontTrim" == Geometry.name || "rightLeanToFrontTrimA" == Geometry.name || "rightLeanToBackTrimA" == Geometry.name || "rightLeantoLeftTrimA" == Geometry.name  ) {
                        Geometry.material.color.setHex( trimCalor );								
                        }
                }
                if (params.p_r_s ==1 ){
                    if ("leanToRegularRoofR" == Geometry.name) {
                        Geometry.material.color.setHex( roofCalor );								
                    }
                    /* Right LeanTo Trims For Regular Roof */
                    if ( "rightLeanToFrontTrim" == Geometry.name || "leanToRightFrontTrim1" == Geometry.name || "leanToRightFrontTrim2" == Geometry.name || "leanToRightFrontTrim3" == Geometry.name || "leanToRightFrontTrim4" == Geometry.name ||  "leanToRightFrontWallTrim" == Geometry.name || "leanToRightFRightWallTrim" == Geometry.name ||
                    "rightLeanToBackTrim" == Geometry.name || "rightLeanToBackTrim1" == Geometry.name || "rightLeanToBackTrim2" == Geometry.name || "rightLeanToBackTrim3" == Geometry.name || "rightLeanToBackTrim4" == Geometry.name|| "leanToRightBackLegTrim" == Geometry.name  ) {
                        Geometry.material.color.setHex( trimCalor );								
                    }
                }
                if (  "leanToRightFrontWallTrim" == Geometry.name || "leanToRightFRightWallTrim" == Geometry.name || "leanToRightBackLegTrim" == Geometry.name  ) {
                    Geometry.material.color.setHex( trimCalor );								
                }

           }
           if (params.add_back_lean == true) {
                /* Roof */ 
               if ("bRoof" == Geometry.name) {
                   Geometry.material.color.setHex( roofCalor );	
               }
                /* Back LeanTo Gables */
                if ("B_L_L_G" == Geometry.name  || "B_L_R_G" == Geometry.name || "B_L_L_S_G" == Geometry.name  ) {
                    Geometry.material.color.setHex( wallCalor );								
                }
                /* Back LeanTo wall */
                if ("B_L_S_W" == Geometry.name || "B_L_F_W" == Geometry.name || "B_L_B_W" == Geometry.name ) {
			    	Geometry.material.color.setHex( wallCalor );
			    }
                if (params.add_storage_check_back == true){
                    /* Back LeanTo Storage wall */
                    if ("B_L_F_S_W" == Geometry.name || "B_L_B_S_W" == Geometry.name || "B_L_L_S_W" == Geometry.name || "B_L_R_S_W" == Geometry.name) {
                        Geometry.material.color.setHex( wallCalor );
                    }
                }
                if (params.p_r_s == 1) {
                    if ("leanToRegularRoofB" == Geometry.name) {
                        Geometry.material.color.setHex( roofCalor );								
                    }
                    /* Back LeanTo Trims For Regular Roof */
                    if ( "backLeanToFrontTrim" == Geometry.name || "backLeanToFrontTrim1" == Geometry.name || "backLeanToFrontTrim2" == Geometry.name || "backLeanToFrontTrim3" == Geometry.name || "backLeanToFrontTrim4" == Geometry.name ||
                         "backLeanToBackTrim" == Geometry.name || "backLeanToBackTrim1" == Geometry.name || "backLeanToBackTrim2" == Geometry.name || "backLeanToBackTrim3" == Geometry.name || "backLeanToBackTrim4" == Geometry.name || "backLeanToRWFSTrim" == Geometry.name || "backLeanToRFrontWallTrim" == Geometry.name || "backLeanToLFrontWallTrim" == Geometry.name ) {
                          Geometry.material.color.setHex( trimCalor );								
                    }
                }
                if (params.p_r_s != 1) { 
                    /* Back LeanTo Trims For A-Frame and Vertival */
                    if ("backLeanToRightTrimA" == Geometry.name || "backLeanToLeftTrimA" == Geometry.name || "backLeantoFrontTrimA" == Geometry.name || "backLeanToRightWallTrim" == Geometry.name || "backLeanToRFrontWallTrim" == Geometry.name ) {
                        Geometry.material.color.setHex( trimCalor );								
                     }  
                } 
                if (  "backLeanToFrontLegTrim" == Geometry.name || "backLeanToBackLegTrim" == Geometry.name||  "backLeanToFrontLegTrim" == Geometry.name || "backLeanToBackLegTrim" == Geometry.name  ) {
                     Geometry.material.color.setHex( trimCalor );								
                 }   
                if (params.p_w_c_n == true){
                     /* Back LeanTo wall Wainscot */
                     if ("B_L_S_W_WS" == Geometry.name || "B_L_F_W_WS" == Geometry.name || "B_L_B_W_WS" == Geometry.name || "B_L_B_W_WS"  == Geometry.name || "B_L_B_S_W_WS" == Geometry.name || "B_L_F_S_W_WS" == Geometry.name || "B_L_L_S_W_WS" == Geometry.name) {
                        Geometry.material.color.setHex( wnScoteCalor );
                     }
                }

           }
           if (params.singleSlope == true || params.canopy){
               if ("f_S_LeanRoof" == Geometry.name) {
                   Geometry.material.color.setHex( roofCalor );	
               } 
               if ("f_S_Gable" == Geometry.name || "F_S_L_F_G"  == Geometry.name || "F_S_L_B_G"  == Geometry.name || "F_S_L_F_S_G" == Geometry.name || "F_S_L_R_W" == Geometry.name) {
                    Geometry.material.color.setHex( wallCalor );								
                }
                     /* Free Standing LeanTo wall & Gables */
                     if ("F_S_L_R_W" == Geometry.name || "F_S_L_F_G" == Geometry.name || "F_S_L_B_G" == Geometry.name || "F_S_L_F_S_G" == Geometry.name) {
                        Geometry.material.color.setHex( wallCalor );
                    }
                    /*Free Standing LeanTo  Wall/Leg Trims  */
                    if ( "f_S_L_R_FrontTrimLeg" == Geometry.name || "f_S_L_R_FrontTrimRLeg" == Geometry.name || "f_S_L_R_BackTrimLeg" == Geometry.name || "f_S_L_R_BackTrimRLeg" == Geometry.name ) {
                        Geometry.material.color.setHex( trimCalor );								
                    }   
                    /* Free Standing LeanTo Trim */
                    if ("F_S_L_F_T" == Geometry.name || "F_S_L_B_T" == Geometry.name || "F_S_L_L_T" == Geometry.name || "F_S_L_R_T" == Geometry.name  ) {
                        Geometry.material.color.setHex( trimCalor );								
                    }
                
           }
 
           if("straightRoof" == Geometry.name ||  "canopyRoof" == Geometry.name || "cbRoof" == Geometry.name || "lrRoof" == Geometry.name || "lrRoofRidgeCap" == Geometry.name ||"f_S_LeanRoof" == Geometry.name|| "lRoof" == Geometry.name || "rRoof" == Geometry.name || "fRoof" == Geometry.name || "bRoof" == Geometry.name || "centerRegularRoof" == Geometry.name || "centerRegularRoofL" == Geometry.name 
               ||"centerRegularRoofR"== Geometry.name||"cbRegularRoofLCurve"== Geometry.name||"leanToRegularRoofB" == Geometry.name|| "leanToRegularRoofF" == Geometry.name||"leanToRegularRoofR" == Geometry.name || "leanToRegularRoofCurveL"== Geometry.name || "lrRoofDouble" == Geometry.name 
                || "LFLPorchRoof" == Geometry.name || "RFLPorchRoof" == Geometry.name||"LFPorch" == Geometry.name|| "LBPorch" == Geometry.name|| "RFPorch" == Geometry.name|| "RBPorch" == Geometry.name || "LFLPorchRidgeCap" == Geometry.name ||"RFLPorchRidgeCap" == Geometry.name) {

                Geometry.material.emissive.setHex( roofCalor );
                Geometry.material.specular.setHex( roofCalor );								
            }	

            /* LeanTo Porch Trims */
            if ( "lflPorchLeftTrim" == Geometry.name || "lflPorchFrontTrim" == Geometry.name || "rflPorchFrontTrim" == Geometry.name || "rflPorchRightTrim" == Geometry.name  ) {
                 Geometry.material.color.setHex( trimCalor );								
                }

			if (Geometry.visible == true){

                    if(Geometry.material != undefined && Geometry.material.emissive != undefined){
                        if((roofCalor == "0xFFFFFF" || roofCalor == "0xffffff") && Geometry.name.includes("Roof") == true ){
                            
                            if(Geometry.material.emissive.r == 1){ 
                                Geometry.material.emissive = new THREE.Color(1.4, 1.4, 1.4)
                                // Geometry.material.shininess = 2
                                Geometry.material.needsUpdate = true
                            }
                        }else{
                            if(Geometry.material.emissive.r == 1.4){
                                Geometry.material.emissive = new THREE.Color(1, 1, 1)
                                Geometry.material.needsUpdate = true
                            }

                        }

                        if(Geometry.name.includes("WS") == false && Geometry.name.includes("ws") == false){
                            if((wallCalor == "0xFFFFFF" || wallCalor == "0xffffff") && Geometry.name.includes("Roof") == false){
                                if(Geometry.material.emissive.r == 0){

                                    Geometry.material.emissive = new THREE.Color(0.15, 0.15, 0.15)
                                    Geometry.material.needsUpdate = true
                                }
                            }else{
                                if(Geometry.material.emissive.r == 0.15 && wallCalor != "0xFFFFFF" && wallCalor != "0xffffff"){
                                    Geometry.material.emissive = new THREE.Color(0, 0, 0)
                                    Geometry.material.needsUpdate = true
            
                                }

                            }
                        }

                        if(Geometry.name.includes("WS") == true || Geometry.name.includes("ws") == true){
                            if((wnScoteCalor == "0xFFFFFF" || wnScoteCalor == "0xffffff") && Geometry.name.includes("Roof") == false){
                                if(Geometry.material.emissive.r == 0){
    
                                    Geometry.material.emissive = new THREE.Color(0.15, 0.15, 0.15)
                                    Geometry.material.needsUpdate = true
                                }
                            }else{
                                if(Geometry.material.emissive.r == 0.15 && wnScoteCalor != "0xFFFFFF" || wnScoteCalor != "0xffffff"){
                                    Geometry.material.emissive = new THREE.Color(0, 0, 0)
                                    Geometry.material.needsUpdate = true
            
                                }
    
                            }
                            }
                    }

                }
	
        });

    })		

    if (params.cupola && const_var.cupolaEntries.length > 0) {
        heighLightCupola();
    }
}