import * as THREE from "three";
import verticalTexture from '../../assets/images/imgTextures/buildingImages/verticalTexture.jpeg';
import horizontalTexture from '../../assets/images/imgTextures/buildingImages/horizantalTexture.jpeg';
import { params, const_var, } from '../../redux/reducers/reducer';
import frontTitleUrl from "../../assets/walls-names/BLF.svg"
import backTitleUrl from "../../assets/walls-names/BLB.svg"
import sideTitleUrl from "../../assets/walls-names/BLL.svg"

import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader"
import { showWallName } from "../../redux/reducers/utils";
// import { DoorCSG } from '../../redux/reducers/pricingReducer';

export const updateBackLeanToWalls = () => {

	let roofMiddleHeight = {
	    "1":{"6":0.25,"7":0.29165,"8":0.33335,"9":0.375,"10":0.41665,"11":0.45835,"12":0.5,"13":0.5417,"14":0.5833,"15":0.6250,"16":0.6667,"17":0.7083,"18":0.7500,"19":0.7917,"20":0.8333,"21":0.8750,"22":0.9167,"23":0.9583,"24":1,"25":1.0417,"26":1.0833,"27":1.1250,"28":1.1667,"29":1.2083,"30":1.2500,"31":1.2917,"32":1.3333,"33":1.3750,"34":1.4167,"35":1.4583,"36":1.5000,"37":1.5417,"38":1.5833,"39":1.6250,"40":1.6667,"41":1.7083,"42":1.7500,"43":1.7917,"44":1.8333,"45":1.8750,"46":1.9167,"47":1.9583,"48":2.00,"49":2.0417,"50":2.0833,"51":2.1250,"52":2.1667,"53":2.2083,"54":2.2500,"55":2.2917,"56":2.3333,"57":2.3750,"58":2.4167,"59":2.4583,"60":2.5000,"61":2.5417,"62":2.5833,"63":2.6250,"64":2.6667,"65":2.7083,"66":2.7500,"67":2.7917,"68":2.8333,"69":2.8750,"70":2.9167,"71":2.9583,"72":3.00,"73":3.0417,"74":3.0833,"75":3.1250,"76":3.1667,"77":3.2083,"78":3.2500,"79":3.2917,"80":3.3330},
	    "2":{"6":0.50,"7":0.58335,"8":0.66665,"9":0.750,"10":0.83335,"11":0.91665,"12":1.0,"13":1.0833,"14":1.1667,"15":1.2500,"16":1.3333,"17":1.4167,"18":1.5000,"19":1.5833,"20":1.6667,"21":1.7500,"22":1.8333,"23":1.9167,"24":2,"25":2.0833,"26":2.1667,"27":2.2500,"28":2.3333,"29":2.4167,"30":2.5000,"31":2.5833,"32":2.6667,"33":2.7500,"34":2.8333,"35":2.9167,"36":3.0000,"37":3.0833,"38":3.1667,"39":3.2500,"40":3.3330,"41":3.4170,"42":3.5000,"43":3.5830,"44":3.6670,"45":3.7500,"46":3.8330,"47":3.9170,"48":4.00,"49":4.0830,"50":4.1670,"51":4.2500,"52":4.3330,"53":4.4170,"54":4.5000,"55":4.5830,"56":4.6670,"57":4.7500,"58":4.8330,"59":4.9170,"60":5.0000,"61":5.0830,"62":5.1670,"63":5.2500,"64":5.3330,"65":5.4170,"66":5.5000,"67":5.5830,"68":5.6670,"69":5.7500,"70":5.8330,"71":5.9170,"72":6.00,"73":6.0830,"74":6.1670,"75":6.2500,"76":6.3330,"77":6.4170,"78":6.5000,"79":6.5830,"80":6.6670},
	    "3":{"6":0.75,"7":0.87500,"8":1.00000,"9":1.125,"10":1.25000,"11":1.37500,"12":1.5,"13":1.6250,"14":1.7500,"15":1.8750,"16":2.0000,"17":2.1250,"18":2.2500,"19":2.3750,"20":2.5000,"21":2.6250,"22":2.7500,"23":2.8750,"24":3,"25":3.1250,"26":3.2500,"27":3.3750,"28":3.5000,"29":3.6250,"30":3.7500,"31":3.8750,"32":4.0000,"33":4.1250,"34":4.2500,"35":4.3750,"36":4.5000,"37":4.6250,"38":4.7500,"39":4.8750,"40":5.0000,"41":5.1250,"42":5.2500,"43":5.3750,"44":5.5000,"45":5.6250,"46":5.7500,"47":5.8750,"48":6.00,"49":6.1250,"50":6.2500,"51":6.3750,"52":6.5000,"53":6.6250,"54":6.7500,"55":6.8750,"56":7.0000,"57":7.1250,"58":7.2500,"59":7.3750,"60":7.5000,"61":7.6250,"62":7.7500,"63":7.8750,"64":8.0000,"65":8.1250,"66":8.2500,"67":8.3750,"68":8.5000,"69":8.6250,"70":8.7500,"71":8.8750,"72":9.00,"73":9.1250,"74":9.2500,"75":9.3750,"76":9.5000,"77":9.6250,"78":9.7500,"79":9.8750,"80":10.000},
	    "4":{"6":1.00,"7":1.16665,"8":1.33335,"9":1.500,"10":1.66650,"11":1.83350,"12":2.0,"13":2.1667,"14":2.3333,"15":2.5000,"16":2.6667,"17":2.8333,"18":3.0000,"19":3.1667,"20":3.3330,"21":3.5000,"22":3.6670,"23":3.8330,"24":4,"25":4.1670,"26":4.3330,"27":4.5000,"28":4.6670,"29":4.8330,"30":5.0000,"31":5.1670,"32":5.3330,"33":5.5000,"34":5.6670,"35":5.8330,"36":6.0000,"37":6.1670,"38":6.3330,"39":6.5000,"40":6.6670,"41":6.8330,"42":7.0000,"43":7.1670,"44":7.3330,"45":7.5000,"46":7.6670,"47":7.8330,"48":8.00,"49":8.1670,"50":8.3330,"51":8.5000,"52":8.6670,"53":8.8330,"54":9.0000,"55":9.1670,"56":9.3330,"57":9.5000,"58":9.6670,"59":9.8330,"60":10.000,"61":10.167,"62":10.333,"63":10.500,"64":10.667,"65":10.833,"66":11.000,"67":11.167,"68":11.333,"69":11.500,"70":11.667,"71":11.833,"72":12.0,"73":12.167,"74":12.333,"75":12.500,"76":12.667,"77":12.833,"78":13.000,"79":13.167,"80":13.333},
	    "5":{"6":1.25,"7":1.45835,"8":1.66650,"9":1.875,"10":2.08350,"11":2.29150,"12":2.5,"13":2.7083,"14":2.9167,"15":3.1250,"16":3.3330,"17":3.5420,"18":3.7500,"19":3.9580,"20":4.1670,"21":4.3750,"22":4.5830,"23":4.7920,"24":5,"25":5.2080,"26":5.4170,"27":5.6250,"28":5.8330,"29":6.0420,"30":6.2500,"31":6.4580,"32":6.6670,"33":6.8750,"34":7.0830,"35":7.2920,"36":7.5000,"37":7.7080,"38":7.9170,"39":8.1250,"40":8.3330,"41":8.5420,"42":8.7500,"43":8.9580,"44":9.1670,"45":9.3750,"46":9.5830,"47":9.7920,"48":10.0,"49":10.208,"50":10.417,"51":10.625,"52":10.833,"53":11.042,"54":11.250,"55":11.458,"56":11.667,"57":11.875,"58":12.083,"59":12.292,"60":12.500,"61":12.708,"62":12.917,"63":13.125,"64":13.333,"65":13.542,"66":13.750,"67":13.958,"68":14.167,"69":14.375,"70":14.583,"71":14.792,"72":15.0,"73":15.208,"74":15.417,"75":15.625,"76":15.833,"77":16.042,"78":16.250,"79":16.458,"80":16.667},
	    "6":{"6":1.50,"7":1.75000,"8":2.00000,"9":2.250,"10":2.50000,"11":2.75000,"12":3.0,"13":3.2500,"14":3.5000,"15":3.7500,"16":4.0000,"17":4.2500,"18":4.5000,"19":4.7500,"20":5.0000,"21":5.2500,"22":5.5000,"23":5.7500,"24":6,"25":6.2500,"26":6.5000,"27":6.7500,"28":7.0000,"29":7.2500,"30":7.5000,"31":7.7500,"32":8.0000,"33":8.2500,"34":8.5000,"35":8.7500,"36":9.0000,"37":9.2500,"38":9.5000,"39":9.7500,"40":10.000,"41":10.250,"42":10.500,"43":10.750,"44":11.000,"45":11.250,"46":11.500,"47":11.750,"48":12.0,"49":12.250,"50":12.500,"51":12.750,"52":13.000,"53":13.250,"54":13.500,"55":13.750,"56":14.000,"57":14.250,"58":14.500,"59":14.750,"60":15.000,"61":15.250,"62":15.500,"63":15.750,"64":16.000,"65":16.250,"66":16.500,"67":16.750,"68":17.000,"69":17.250,"70":17.500,"71":17.750,"72":18.0,"73":18.250,"74":18.500,"75":18.750,"76":19.000,"77":19.250,"78":19.500,"79":19.750,"80":20.000}
	};
       


    const wallDistance = (params.p_d <= 100)?0.04:0.15;
    let jTrimCalor = params.p_t_c.replace("#","0x");
    let wainscotTrimCalor = params.p_w_c_c.replace("#","0x");
    
    let jTrimAlignment
    if(params.p_d <= 100){
      jTrimAlignment = 0
    }else{
      jTrimAlignment = 0.22
    }

    if ("undefined" != typeof const_var.scene.getObjectByName("BackLeanWalls")) const_var.scene.remove(const_var.scene.getObjectByName("BackLeanWalls"));

    // Back Lean To Walls Group
    const BackLeanWalls = new THREE.Group();
    BackLeanWalls.name = "BackLeanWalls";
    BackLeanWalls.rotation.set(0,Math.PI/-2,0);;
    const_var.scene.add(BackLeanWalls);

    let closedSideWalls = 0; let closedEndWalls = 0;
    let fullyClosedSideWalls = 0; let fullyClosedEndWalls = 0;

    let addDoorIntersectWall = function(height, pHeight, wall) {
        const nWall =  wall.clone();
        nWall.position.y = height - height/2 - pHeight/2;
        if (nWall.visible === true) nWall.scale.y =  (height - pHeight);
        nWall.visible = false;
        BackLeanWalls.add(nWall);
        wall.name +=1;
        const_var.wallsForCut[wall.name] = wall.clone();
    }

    showWallName("back")

    if(params.add_back_lean == true){
            /*Back Lean To Side */
            if (const_var.b_t_M_B_t_B.getObjectByName("B_L_S_W")!=undefined) {
                 let B_L_SideWall = const_var.b_t_M_B_t_B.getObjectByName("B_L_S_W").clone();

                 let b_p_w_scale = 0;
                 let b_p_w_position = 0;
          
                 if( params.add_left_back_lean_porch == true &&  params.add_right_back_lean_porch == false){
                      b_p_w_scale = params.leanB_p_w;
                      b_p_w_position = params.leanB_p_w/2;
                 }
                 if( params.add_left_back_lean_porch == false &&  params.add_right_back_lean_porch == true){
                  b_p_w_scale = params.leanB_p_w;
                  b_p_w_position = -params.leanB_p_w/2;
                 }
                 if( params.add_left_back_lean_porch == true &&  params.add_right_back_lean_porch == true){
                  b_p_w_scale = params.leanB_p_w+params.leanB_p_w;
                 }
                B_L_SideWall.name = "B_L_S_W"
                B_L_SideWall.visible = (params.p_b_c_b_b_l != "Open")?true:false;
                B_L_SideWall.position.x =( params.p_d / -2 - params.leanB_p_w)- 0.025;
                B_L_SideWall.position.z = b_p_w_position;
                let wH = params.leanB_p_h;
                let wP = params.leanB_p_h - wH/2;
                B_L_SideWall.position.y = wP;				
                B_L_SideWall.scale.set(params.leanB_p_d,wH,1);				
                switch(params.p_b_c_b_b_l)
                {
                    case "One_Fourth_Close":
                        wH = wH/4;
                        wP = params.leanB_p_h - wH/2;
                        break;
                    case "Half_Close":
                        wH = wH/2;
                        wP = params.leanB_p_h - wH/2;
                        break;					
                    case "Three_Fourth_Close":
                        wH = wH * 3/4;
                        wP = params.leanB_p_h - wH/2;
                        break;
                    case "Extended Gable":
                        break;
                    case "Gable":
                        break;
                     case "Open":    
                    case "Close":
                        wH = params.leanB_p_h;
                        wP = params.leanB_p_h - wH/2;
                        break;
                    default:
                        if(params.p_r_s == "1"){
                            wH = (Math.abs(params.p_b_c_b_b_l.replace(/\D/g, "")) * 3)+0.3;
                            wP = params.leanB_p_h - wH/2;
                        }else{
                        wH = (Math.abs(params.p_b_c_b_b_l.replace(/\D/g, "")) * 3);
                        wP = params.leanB_p_h - wH/2;
                        }
                        break;
                }
      
                if(params.p_r_s == "1"){			
                    B_L_SideWall.position.y = wP-0.15;				
                    B_L_SideWall.scale.set(params.leanB_p_d+b_p_w_scale,wH-0.3,1);
                }else{
                    B_L_SideWall.position.y = wP;				
                    B_L_SideWall.scale.set(params.leanB_p_d+b_p_w_scale,wH,1);
                }
                let wallTexture = horizontalTexture;
                if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                let B_L_WallTexture = new THREE.TextureLoader();
                let  B_L_WallT = B_L_WallTexture.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                B_L_SideWall.material.map = texture;
                B_L_SideWall.material.bumpMap = texture;
                B_L_SideWall.material.bumpScale = 0.02
                B_L_SideWall.material.metalness = 1
                B_L_SideWall.material.roughness = 0.5
                B_L_SideWall.material.anisotropy = 10;
                B_L_SideWall.material.map.wrapS = THREE.RepeatWrapping;
                B_L_SideWall.material.map.wrapT = THREE.RepeatWrapping;
                B_L_SideWall.material.map.offset.x = params.leanB_p_w;
                B_L_SideWall.material.map.offset.y = params.leanB_p_w;
                if(params.p_v_w==true) {
                    B_L_SideWall.material.map.repeat.set(((params.leanB_p_d/2)+(params.leanB_p_d/2/3))*2,1);
                    if (params.add_left_back_lean_porch == true &&  params.add_right_back_lean_porch == false){
                        B_L_SideWall.material.map.repeat.set(((params.leanB_p_d/2)+(params.leanB_p_d/2/3)+(params.lean_p_w/2))*2,1);
                      }
                      else if ( params.add_left_back_lean_porch == false &&  params.add_right_back_lean_porch == true){
                        B_L_SideWall.material.map.repeat.set(((params.leanB_p_d/2)+(params.leanB_p_d/2/3)+(params.leanR_p_w/2))*2,1);
        
                      } 
                      else if( params.add_left_back_lean_porch == true &&  params.add_right_back_lean_porch == true){
                        B_L_SideWall.material.map.repeat.set(((params.leanB_p_d/2)+(params.leanB_p_d/2/3)+(params.lean_p_w/2)+(params.leanR_p_w/2))*2,1);
                      }
                } else  {
                    B_L_SideWall.material.map.repeat.set(1,Math.round((wH/1.5)*2));
                }

                B_L_SideWall.material.map.needsUpdate = true;
                B_L_SideWall.material.needsUpdate = true;

                let innerWall = BackLeanWalls.getObjectByName("B_L_S_W_inner")
                innerWall.material.map = texture.clone();
                innerWall.material.map.wrapS = THREE.RepeatWrapping;
                innerWall.material.map.wrapT = THREE.RepeatWrapping;
                innerWall.material.map.offset.x = params.p_w;
                innerWall.material.map.offset.y = params.p_w;
                innerWall.material.map.repeat.set( B_L_SideWall.material.map.repeat.x, B_L_SideWall.material.map.repeat.y);
                innerWall.material.color.set(0xFFFFFF)
                innerWall.material.map.needsUpdate = true 
                innerWall.material.needsUpdate = true 

                })

                if (params.p_b_c_b_b_l !== "Close") {
                    addDoorIntersectWall(params.leanB_p_h, wH, B_L_SideWall);
                }
                BackLeanWalls.add(B_L_SideWall)

                
                if (const_var.b_t_M_L.getObjectByName("jTrim")!=undefined && params.p_b_c_b_b_l !== "Close" && params.p_b_c_b_b_l !== "Open" && params.p_j_t == true) {
                    let jTrim = const_var.b_t_M_L.getObjectByName("jTrim").clone();
                    jTrim.name = "B_L_S_W_jtrim";
                    jTrim.material = jTrim.material.clone();
                    jTrim.material.color.setHex(jTrimCalor)
                    jTrim.visible = true
                    // jTrim.rotation.y = Math.PI/-2
                    jTrim.scale.set(0.14+(jTrimAlignment),0.12, B_L_SideWall.scale.x);
                    jTrim.position.set(params.p_d / -2 - params.leanB_p_w + 0.025 +(jTrimAlignment/2),B_L_SideWall.position.y-(B_L_SideWall.scale.y/2)-0.005,B_L_SideWall.position.z);
                    if(params.add_storage_check_back){
                        jTrim.scale.z = params.leanB_p_d-params.add_storage_back;
                        jTrim.position.z= params.add_storage_back/-2;
                        if(params.add_right_back_lean_porch == true){
                            jTrim.scale.z = params.leanB_p_d-params.add_storage_back+params.leanF_p_w;
                            jTrim.position.z= (params.add_storage_back/-2)-(params.leanR_p_w/2);
                          }
                          if(params.add_left_back_lean_porch == true){
                            let jTrim2 = const_var.b_t_M_L.getObjectByName("jTrim").clone();
                            jTrim2.scale.set(jTrim.scale.x,jTrim.scale.y, params.lean_p_w);
                            jTrim2.position.set(jTrim.position.x,jTrim.position.y,(params.leanB_p_d/2)+(params.lean_p_w/2));
                            jTrim2.rotation.y = jTrim.rotation.y
                            jTrim2.visible = true
                            jTrim2.name = "B_L_S_W1_jtrim";
                            jTrim2.material = jTrim2.material.clone();
                            BackLeanWalls.add(jTrim2);
                          }
                    }
                    BackLeanWalls.add(jTrim);
                  }
            }
            //Front Lean to Front double Wall
            if (BackLeanWalls.getObjectByName("B_L_S_W_inner")==undefined) {
            
                let backLeanBackWallClone = params.p_b_c_b_b_l !== "Close" ? BackLeanWalls.getObjectByName("B_L_S_W1"): BackLeanWalls.getObjectByName("B_L_S_W");
            
                  if(BackLeanWalls.getObjectByName("B_L_S_W") != undefined){
                  let doubleBackLeanSideWall = backLeanBackWallClone.clone();
                
                  let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });

                  doubleBackLeanSideWall = new THREE.Mesh(doubleBackLeanSideWall.geometry,leftDoubleMaterial);
                  doubleBackLeanSideWall.name = "B_L_S_W_inner"
                  doubleBackLeanSideWall.visible = (params.is_translusant==true)? false : backLeanBackWallClone.visible
                  doubleBackLeanSideWall.scale.set(backLeanBackWallClone.scale.x , backLeanBackWallClone.scale.y , backLeanBackWallClone.scale.z);
                  doubleBackLeanSideWall.position.set(backLeanBackWallClone.position.x +wallDistance, backLeanBackWallClone.position.y , backLeanBackWallClone.position.z);
                  doubleBackLeanSideWall.rotation.set(backLeanBackWallClone.rotation.x , backLeanBackWallClone.rotation.y , backLeanBackWallClone.rotation.z)
                
                    BackLeanWalls.add(doubleBackLeanSideWall);

                    const_var.wallsForCut.B_L_S_W_inner = doubleBackLeanSideWall.clone();
                  }
            }
            /*Back Lean To Back Wall */
            if (const_var.b_t_M_B_t_B.getObjectByName("B_L_B_W")!=undefined) {
                 let B_L_BackWall = const_var.b_t_M_B_t_B.getObjectByName("B_L_B_W").clone();
                 
                 let ltFwallPos = params.p_d/-2 - params.leanB_p_w/2;
                 B_L_BackWall.visible = (params.p_b_c_b_b_b != "Open")?true:false;
                //  if ( params.add_storage_check_back ) params.p_b_c_b_b_b = "Close" 
                 // B_L_BackWall.position.x = params.p_w/-2 - params.leanB_p_w/2;
                 // B_L_BackWall.position.z = params.leanB_p_d / 2;  
                 B_L_BackWall.position.set(ltFwallPos,params.leanB_p_h,params.leanB_p_d/2+0.055);
                let wH = params.leanB_p_h;
                let wP = params.leanB_p_h - wH/2;
                B_L_BackWall.position.y = wP;				
                B_L_BackWall.scale.set(params.leanB_p_w,wH,1);
                
                switch(params.p_b_c_b_b_b)
                {
                    case "One_Fourth_Close":
                        wH = wH/4;
                        wP = params.leanB_p_h - wH/2;
                        break;
                    case "Half_Close":
                        wH = wH/2;
                        wP = params.leanB_p_h - wH/2;
                        break;					
                    case "Three_Fourth_Close":
                        wH = wH * 3/4;
                        wP = params.leanB_p_h - wH/2;
                        break;
                    case "Extended Gable":
                        wH = wH/6;
                        wP = params.leanB_p_h - wH/2;
                        break;
                    case "Gable":
                        wH = 0.15;
                        wP = params.leanB_p_h - wH/2;
                        break;
                     case "Open":    
                    case "Close":
                        wH = params.leanB_p_h;
                        wP = params.leanB_p_h - wH/2;
                        break;
                    default:
                        wH = Math.abs(params.p_b_c_b_b_b.replace(/\D/g, "")) * 3;
                        wP = params.leanB_p_h - wH/2;				
                        break;
                }
                B_L_BackWall.position.y = wP;				
                B_L_BackWall.scale.set(params.leanB_p_w,wH,1);
                                    
                let wallTexture = horizontalTexture;
                if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                let B_L_WallTexture = new THREE.TextureLoader();
                let  B_L_WallT = B_L_WallTexture.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                // B_L_BackWall.material.morphNormals = true;
                // B_L_BackWall.material.morphTargets = true;							
                B_L_BackWall.material.map = texture;
                B_L_BackWall.material.bumpMap = texture;
                B_L_BackWall.material.bumpScale = 0.02
                B_L_BackWall.material.metalness = 1
                B_L_BackWall.material.roughness = 0.5
                B_L_BackWall.material.anisotropy = 10;
                B_L_BackWall.material.map.wrapS = THREE.RepeatWrapping;
                B_L_BackWall.material.map.wrapT = THREE.RepeatWrapping;
                B_L_BackWall.material.map.offset.x = params.leanB_p_w;
                B_L_BackWall.material.map.offset.y = params.leanB_p_w;
                
                if(params.p_v_w==true){
                    B_L_BackWall.material.map.repeat.set(Math.round(((params.leanB_p_w/2)+(params.leanB_p_w/2/3))*2),1);
                }else {
                    B_L_BackWall.material.map.repeat.set(1,Math.round((wH/1.5)*2));
                }
                
                B_L_BackWall.material.map.needsUpdate = true;
                B_L_BackWall.material.needsUpdate = true;

                let innerWall = BackLeanWalls.getObjectByName("B_L_B_W_inner")
                innerWall.material.map = texture.clone();
                innerWall.material.map.wrapS = THREE.RepeatWrapping;
                innerWall.material.map.wrapT = THREE.RepeatWrapping;
                innerWall.material.map.offset.x = params.p_w;
                innerWall.material.map.offset.y = params.p_w;
                innerWall.material.map.rotation = Math.PI
                innerWall.material.map.repeat.set( B_L_BackWall.material.map.repeat.x, B_L_BackWall.material.map.repeat.y);
                innerWall.material.color.set(0xFFFFFF)
                innerWall.material.map.needsUpdate = true 
                innerWall.material.needsUpdate = true 

                })

                if (params.p_b_c_b_b_b !== "Close") {
                    addDoorIntersectWall(params.leanB_p_h, wH, B_L_BackWall);
                }
                BackLeanWalls.add(B_L_BackWall)

                
                if (const_var.b_t_M_L.getObjectByName("jTrim")!=undefined && params.p_b_c_b_b_b !== "Close" && params.p_b_c_b_b_b !== "Open" && params.p_j_t_end == true) {
                    let jTrim = const_var.b_t_M_L.getObjectByName("jTrim").clone();
                    jTrim.name = "B_L_B_W_jtrim";
                    jTrim.material = jTrim.material.clone();
                    jTrim.material.color.setHex(jTrimCalor)
                    jTrim.visible = true
                    jTrim.rotation.y = Math.PI/2
                    jTrim.scale.set(0.14+(jTrimAlignment),0.12, B_L_BackWall.scale.x-0.25);
                    jTrim.position.set(B_L_BackWall.position.x+0.1,B_L_BackWall.position.y-(B_L_BackWall.scale.y/2)-0.01,(params.leanB_p_d/2)-0.005-(jTrimAlignment/2));
                    BackLeanWalls.add(jTrim);
                  }
            }
            /*Back Lean To Right Double Wall */
            if (BackLeanWalls.getObjectByName("B_L_B_W_inner")==undefined) {
            
                let backDWallClone = (params.p_b_c_b_b_b !== "Close") ? BackLeanWalls.getObjectByName("B_L_B_W1") :BackLeanWalls.getObjectByName("B_L_B_W");
            
                  if(backDWallClone != undefined){
                  let backDWall = backDWallClone.clone();
                
                  let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
                  backDWall = new THREE.Mesh(backDWall.geometry,leftDoubleMaterial);
                  backDWall.name = "B_L_B_W_inner"
                  backDWall.visible = (params.is_translusant==true)? false : backDWallClone.visible
                  backDWall.scale.set(backDWallClone.scale.x , backDWallClone.scale.y , backDWallClone.scale.z);
                  backDWall.position.set(backDWallClone.position.x, backDWallClone.position.y , backDWallClone.position.z - wallDistance);
                  backDWall.rotation.set(backDWallClone.rotation.x , backDWallClone.rotation.y , backDWallClone.rotation.z)

                    BackLeanWalls.add(backDWall);

                    const_var.wallsForCut.B_L_B_W_inner = backDWall.clone();
                  }
            }
            /*Back Lean To Left Wall */
            if (const_var.b_t_M_B_t_B.getObjectByName("B_L_F_W")!=undefined) {
                let B_L_FrontWall = const_var.b_t_M_B_t_B.getObjectByName("B_L_F_W").clone();
                
                let wallPos = params.p_d/-2 - params.leanB_p_w/2;
                // B_L_FrontWall.visible = (params.p_b_c_b_b_f !="Open")?true:false;  
                B_L_FrontWall.visible = (params.p_b_c_b_b_f != "Open")?true:false;
                B_L_FrontWall.scale.set(params.leanB_p_w,params.leanB_p_h,1);
                B_L_FrontWall.position.set(wallPos,params.leanB_p_h/2,params.leanB_p_d / -2-0.055);
                let wH = params.leanB_p_h;
                let wP = params.leanB_p_h - wH/2;
                B_L_FrontWall.position.y = wP;				
                B_L_FrontWall.scale.set(params.leanB_p_w,params.leanB_p_h,1);
                switch(params.p_b_c_b_b_f)
                {
                    case "One_Fourth_Close":
                        wH = wH/4;
                        wP = params.leanB_p_h - wH/2;
                        break;
                    case "Half_Close":
                        wH = wH/2;
                        wP = params.leanB_p_h - wH/2;
                        break;					
                    case "Three_Fourth_Close":
                        wH = wH * 3/4;
                        wP = params.leanB_p_h - wH/2;
                        break;
                    case "Extended Gable":
                        wH = wH/6;
                        wP = params.leanB_p_h - wH/2;
                        break;
                    case "Gable":
                        wH = 0.15;
                        wP = params.leanB_p_h - wH/2; 
                        break;
                        case "Open":
                    case "Close":
                        wH = params.leanB_p_h;
                        wP = params.leanB_p_h - wH/2;
                        break;
                    default:
                        wH = Math.abs(params.p_b_c_b_b_l.replace(/\D/g, "")) * 3;
                        wP = params.leanB_p_h - wH/2;				
                        break;
                }
                B_L_FrontWall.position.y = wP;				
                B_L_FrontWall.scale.set(params.leanB_p_w,wH,1);
                let wallTexture = horizontalTexture;
                if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                let B_L_WallTexture = new THREE.TextureLoader();
                let  B_L_WallT = B_L_WallTexture.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                B_L_FrontWall.material.map = texture;
                B_L_FrontWall.material.bumpMap = texture;
                B_L_FrontWall.material.bumpScale = 0.02
                B_L_FrontWall.material.metalness = 1
                B_L_FrontWall.material.roughness = 0.5
                B_L_FrontWall.material.anisotropy = 10;
                B_L_FrontWall.material.map.wrapS = THREE.RepeatWrapping;
                B_L_FrontWall.material.map.wrapT = THREE.RepeatWrapping;
                B_L_FrontWall.material.map.offset.x = params.leanB_p_w;
                B_L_FrontWall.material.map.offset.y = params.leanB_p_w;
                
                if(params.p_v_w==true){
                    B_L_FrontWall.material.map.repeat.set(Math.round(((params.leanB_p_w/2)+(params.leanB_p_w/2/3))*2),1);
                } else {
                    B_L_FrontWall.material.map.repeat.set(1,Math.round((wH/1.5)*2));
                }	
                
                B_L_FrontWall.material.map.needsUpdate = true;
                B_L_FrontWall.material.needsUpdate = true;
                                
                let innerWall = BackLeanWalls.getObjectByName("B_L_F_W_inner")
                innerWall.material.map = texture.clone();
                innerWall.material.map.wrapS = THREE.RepeatWrapping;
                innerWall.material.map.wrapT = THREE.RepeatWrapping;
                innerWall.material.map.offset.x = params.p_w;
                innerWall.material.map.offset.y = params.p_w;
                innerWall.material.map.rotation = Math.PI
                innerWall.material.map.repeat.set( B_L_FrontWall.material.map.repeat.x, B_L_FrontWall.material.map.repeat.y);
                innerWall.material.color.set(0xFFFFFF)
                innerWall.material.map.needsUpdate = true 
                innerWall.material.needsUpdate = true 

            })
            if (params.p_b_c_b_b_f !== "Close") {
                addDoorIntersectWall(params.leanB_p_h, wH, B_L_FrontWall);
            }
            BackLeanWalls.add(B_L_FrontWall)
           
                if (const_var.b_t_M_L.getObjectByName("jTrim")!=undefined && params.p_b_c_b_b_f !== "Close" && params.p_b_c_b_b_f !== "Open" && params.p_j_t_end == true) {
                    let jTrim = const_var.b_t_M_L.getObjectByName("jTrim").clone();
                    jTrim.name = "B_L_F_W_jtrim";
                    jTrim.material = jTrim.material.clone();
                    jTrim.material.color.setHex(jTrimCalor)
                    jTrim.visible = true
                    jTrim.rotation.y = Math.PI/-2
                    jTrim.scale.set(0.14+(jTrimAlignment),0.12, B_L_FrontWall.scale.x-0.25);
                    jTrim.position.set(B_L_FrontWall.position.x+0.1,B_L_FrontWall.position.y-(B_L_FrontWall.scale.y/2)-0.01,(params.leanB_p_d/-2)+0.005+(jTrimAlignment/2));
                    BackLeanWalls.add(jTrim);
                  }
            }
             /*Back Lean To Left Double Wall */
            if (BackLeanWalls.getObjectByName("B_L_F_W_inner")==undefined) {
            
                let frontDWallClone = (params.p_b_c_b_b_f !== "Close") ? BackLeanWalls.getObjectByName("B_L_F_W1") : BackLeanWalls.getObjectByName("B_L_F_W");
            
                  if(frontDWallClone != undefined){
                  let frontDWall = frontDWallClone.clone();
                
                  let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
                  frontDWall = new THREE.Mesh(frontDWall.geometry,leftDoubleMaterial);
                  frontDWall.name = "B_L_F_W_inner"
                  frontDWall.visible = (params.is_translusant==true)? false : frontDWallClone.visible
                  frontDWall.scale.set(frontDWallClone.scale.x , frontDWallClone.scale.y , frontDWallClone.scale.z);
                  frontDWall.position.set(frontDWallClone.position.x, frontDWallClone.position.y , frontDWallClone.position.z + wallDistance);
                  frontDWall.rotation.set(frontDWallClone.rotation.x , frontDWallClone.rotation.y , frontDWallClone.rotation.z)

                    BackLeanWalls.add(frontDWall);

                    const_var.wallsForCut.B_L_F_W_inner = frontDWall.clone();
                  }
            }


        if(params.add_storage_check_back ==true){
            /*Back Lean To Left Storage Wall */  
                if (const_var.b_t_M_B_t_B.getObjectByName("B_L_L_S_W")!=undefined) {
                    let B_L_L_StoreWall = const_var.b_t_M_B_t_B.getObjectByName("B_L_L_S_W").clone();
                     B_L_L_StoreWall.visible = (params.add_storage_check_back!=false)?true:false;
                    let ltFwallPos = params.p_d/-2 - params.leanB_p_w/2;	
                    B_L_L_StoreWall.position.x = ltFwallPos;
                    B_L_L_StoreWall.position.y =  params.leanB_p_h/2
                    B_L_L_StoreWall.position.z = params.leanB_p_d /2 - (parseInt(params.add_storage_back));
                    B_L_L_StoreWall.scale.set(params.leanB_p_w,params.leanB_p_h,1);
                    let wallTexture = horizontalTexture;
                    if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                    let B_L_WallTexture = new THREE.TextureLoader();
                    let  B_L_WallT = B_L_WallTexture.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                       
                        B_L_L_StoreWall.material.morphNormals = true;
                        B_L_L_StoreWall.material.morphTargets = true;		
                        B_L_L_StoreWall.material.map = texture;
                        B_L_L_StoreWall.material.bumpMap = texture;
                        B_L_L_StoreWall.material.bumpScale = 0.02
                        B_L_L_StoreWall.material.metalness = 1
                        B_L_L_StoreWall.material.roughness = 0.5
                        B_L_L_StoreWall.material.anisotropy = 10;
                        B_L_L_StoreWall.material.map.wrapS = THREE.RepeatWrapping;
                        B_L_L_StoreWall.material.map.wrapT = THREE.RepeatWrapping;
                        B_L_L_StoreWall.material.map.offset.x = params.leanB_p_w;
                        B_L_L_StoreWall.material.map.offset.y = params.leanB_p_w;
                        B_L_L_StoreWall.material.map.needsUpdate = true;
                        B_L_L_StoreWall.material.needsUpdate = true;
                        B_L_L_StoreWall.name = "B_L_L_S_W";
                        if(params.p_r_s == "1"){
                            B_L_L_StoreWall.position.y =  params.leanB_p_h/2-0.05
                        }
                        if(params.p_v_w==true){
                            B_L_L_StoreWall.material.map.repeat.set(Math.round(((params.leanB_p_w/2)+(params.leanB_p_w/2/3))*2),1);
                        }else{
                            B_L_L_StoreWall.material.map.repeat.set(1,Math.round((params.leanB_p_h/1.5)*2));
                        }
                                                        
                        let innerWall = BackLeanWalls.getObjectByName("B_L_L_S_W_inner")
                        innerWall.material.map = texture.clone();
                        innerWall.material.map.wrapS = THREE.RepeatWrapping;
                        innerWall.material.map.wrapT = THREE.RepeatWrapping;
                        innerWall.material.map.offset.x = params.p_w;
                        innerWall.material.map.offset.y = params.p_w;
                        innerWall.material.map.rotation = Math.PI
                        innerWall.material.map.repeat.set( B_L_L_StoreWall.material.map.repeat.x, B_L_L_StoreWall.material.map.repeat.y);
                        innerWall.material.color.set(0xFFFFFF)
                        innerWall.material.map.needsUpdate = true 
                        innerWall.material.needsUpdate = true 

                    })
                    BackLeanWalls.add(B_L_L_StoreWall)
                }

             /*Back Lean To Left Double Wall */
             if (BackLeanWalls.getObjectByName("B_L_L_S_W_inner")==undefined) {
            
                let leftDStorageWallClone = BackLeanWalls.getObjectByName("B_L_L_S_W");
    
                  let leftDStorageWall = leftDStorageWallClone.clone();
                
                  let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
                  leftDStorageWall = new THREE.Mesh(leftDStorageWall.geometry,leftDoubleMaterial);
                  leftDStorageWall.name = "B_L_L_S_W_inner"
                  leftDStorageWall.visible = (params.is_translusant==true)? false : leftDStorageWallClone.visible;
                  leftDStorageWall.scale.set(leftDStorageWallClone.scale.x , leftDStorageWallClone.scale.y , leftDStorageWallClone.scale.z);
                  leftDStorageWall.position.set(leftDStorageWallClone.position.x, leftDStorageWallClone.position.y , leftDStorageWallClone.position.z + wallDistance);
                  leftDStorageWall.rotation.set(leftDStorageWallClone.rotation.x , leftDStorageWallClone.rotation.y , leftDStorageWallClone.rotation.z)

                    BackLeanWalls.add(leftDStorageWall);

                    const_var.wallsForCut.B_L_L_S_W_inner = leftDStorageWall.clone();
               
            }


               /*Back Lean To Right Storage Wall */
                if (const_var.b_t_M_B_t_B.getObjectByName("B_L_R_S_W")!=undefined) {
                    let B_L_R_StoreWall = const_var.b_t_M_B_t_B.getObjectByName("B_L_R_S_W").clone();
                    let wallPos = params.p_d/-2 - params.leanB_p_w/2;
                    B_L_R_StoreWall.visible = (params.add_storage_check_back!=false)?true:false;
                    // if(params.p_b_c_b_b_b == "Close"){ B_L_R_StoreWall.visible = false;}
                    B_L_R_StoreWall.scale.set(params.leanB_p_w,params.leanB_p_h,1);
                    B_L_R_StoreWall.position.set(wallPos,params.leanB_p_h/2,params.leanB_p_d / 2+0.06);
                    let wallTexture = horizontalTexture;
                    if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                    let B_L_WallTexture = new THREE.TextureLoader();
                    let  B_L_WallT = B_L_WallTexture.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                        B_L_R_StoreWall.material.map = texture;
                        B_L_R_StoreWall.material.bumpMap = texture;
                        B_L_R_StoreWall.material.bumpScale = 0.02
                        B_L_R_StoreWall.material.metalness = 1
                        B_L_R_StoreWall.material.roughness = 0.5
                        B_L_R_StoreWall.material.anisotropy = 10;
                        B_L_R_StoreWall.material.map.wrapS = THREE.RepeatWrapping;
                        B_L_R_StoreWall.material.map.wrapT = THREE.RepeatWrapping;
                        B_L_R_StoreWall.material.map.offset.x = params.leanB_p_w;
                        B_L_R_StoreWall.material.map.offset.y = params.leanB_p_w;
                        if(params.p_v_w==true){
                            B_L_R_StoreWall.material.map.repeat.set(Math.round(((params.leanB_p_w/2)+(params.leanB_p_w/2/3))*2),1);
                        } else{
                            B_L_R_StoreWall.material.map.repeat.set(1,Math.round((params.leanB_p_h/1.5)*2));
                        }                                                                  
                    })
                    // BackLeanWalls.add(B_L_R_StoreWall)
                }
                /*Back Lean To Right Storage Double Wall */
                if (BackLeanWalls.getObjectByName("B_L_R_S_W_inner")==undefined) {
            
                    let rigthStoreDWallClone = BackLeanWalls.getObjectByName("B_L_R_S_W");
                
                      if(BackLeanWalls.getObjectByName("B_L_R_S_W") != undefined){
                      let rigthStoreDWall = rigthStoreDWallClone.clone();
                    
                      let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
                      rigthStoreDWall = new THREE.Mesh(rigthStoreDWall.geometry,leftDoubleMaterial);
                      rigthStoreDWall.name = "B_L_R_S_W_inner"
                      rigthStoreDWall.visible = (params.is_translusant==true)? false : rigthStoreDWallClone.visible
                      rigthStoreDWall.scale.set(rigthStoreDWallClone.scale.x , rigthStoreDWallClone.scale.y , rigthStoreDWallClone.scale.z);
                      rigthStoreDWall.position.set(rigthStoreDWallClone.position.x, rigthStoreDWallClone.position.y , rigthStoreDWallClone.position.z - wallDistance);
                      rigthStoreDWall.rotation.set(rigthStoreDWallClone.rotation.x , rigthStoreDWallClone.rotation.y , rigthStoreDWallClone.rotation.z)
                    
                      let doubleTextureImg = (params.p_v_w==true) ? verticalTexture: horizontalTexture;
                      let doubleWallLoader = new THREE.TextureLoader();
                    
                        let  dWallTexture = doubleWallLoader.load(process.env.REACT_APP_BASE_URL+doubleTextureImg , function(wallTexture) {
                          if(rigthStoreDWallClone.material.map != null){
                        let mapRepeatgable = rigthStoreDWallClone.material.map.repeat;
                          dWallTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5) 
                          rigthStoreDWall.material.map = wallTexture;
                          rigthStoreDWall.material.color.set(0xFFFFFF)
                          rigthStoreDWall.material.map.wrapS = THREE.RepeatWrapping;
                          rigthStoreDWall.material.map.wrapT = THREE.RepeatWrapping;
                          rigthStoreDWall.material.map.offset.x = params.p_w;
                          rigthStoreDWall.material.map.offset.y = params.p_w;
                          rigthStoreDWall.material.map.repeat.set(mapRepeatgable.x,mapRepeatgable.y);
                          rigthStoreDWall.material.needsUpdate = true;
                          }
                        });
                    BackLeanWalls.add(rigthStoreDWall);
                    const_var.wallsForCut.B_L_R_S_W_inner = rigthStoreDWall.clone();
                      }
                }
               /*Back Lean To Front Storage Wall */
                if (const_var.b_t_M_B_t_B.getObjectByName("B_L_F_S_W")!=undefined) {
                    let B_L_F_StoreWall = const_var.b_t_M_B_t_B.getObjectByName("B_L_F_S_W").clone();
                    B_L_F_StoreWall.visible = (params.add_storage_check_back!=false && params.p_b_c_b_b_l != "Close")?true:false;  
                    B_L_F_StoreWall.position.x = params.p_d / -2 - params.leanB_p_w-0.03;
                    B_L_F_StoreWall.position.y = params.leanB_p_h/2;				
                    B_L_F_StoreWall.position.z = (params.leanB_p_d/2)-(parseInt(params.add_storage_back))/2;
                    B_L_F_StoreWall.scale.set((parseInt(params.add_storage_back)),params.leanB_p_h,1);
                    let wallTexture = horizontalTexture;
                    if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                    let B_L_WallTexture = new THREE.TextureLoader();
                    let  B_L_WallT = B_L_WallTexture.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                        B_L_F_StoreWall.material.map = texture;
                        B_L_F_StoreWall.material.bumpMap = texture;
                        B_L_F_StoreWall.material.bumpScale = 0.02
                        B_L_F_StoreWall.material.metalness = 1
                        B_L_F_StoreWall.material.roughness = 0.5
                        B_L_F_StoreWall.material.anisotropy = 10;
                        B_L_F_StoreWall.material.map.wrapS = THREE.RepeatWrapping;
                        B_L_F_StoreWall.material.map.wrapT = THREE.RepeatWrapping;
                        B_L_F_StoreWall.material.map.offset.x = params.leanB_p_w;
                        B_L_F_StoreWall.material.map.offset.y = params.leanB_p_w;
                        B_L_F_StoreWall.material.map.needsUpdate = true;
                        B_L_F_StoreWall.material.needsUpdate = true;
                        if(params.p_r_s == "1"){			
                            B_L_F_StoreWall.position.y =  (params.leanB_p_h - params.leanB_p_h/2)-0.3;
                            B_L_F_StoreWall.scale.y = params.leanB_p_h - 0.3				
                        }else{
                            B_L_F_StoreWall.position.y = params.leanB_p_h/2;				
                        } 
                        if(params.p_v_w==true) {
                            B_L_F_StoreWall.material.map.repeat.set(((params.add_storage_back/2)+(params.add_storage_back/2/3))*2,1);

                            // B_L_F_StoreWall.material.map.repeat.set(params.leanB_p_w-2,1);
                        } else {
                            B_L_F_StoreWall.material.map.repeat.set(1,Math.round((params.leanB_p_h/1.5)*2));
                        }
                                                                                                        
                        let innerWall = BackLeanWalls.getObjectByName("B_L_F_S_W_inner")
                        innerWall.material.map = texture.clone();
                        innerWall.material.map.wrapS = THREE.RepeatWrapping;
                        innerWall.material.map.wrapT = THREE.RepeatWrapping;
                        innerWall.material.map.offset.x = params.p_w;
                        innerWall.material.map.offset.y = params.p_w;
                        innerWall.material.map.repeat.set( B_L_F_StoreWall.material.map.repeat.x, B_L_F_StoreWall.material.map.repeat.y);
                        innerWall.material.color.set(0xFFFFFF)
                        innerWall.material.map.needsUpdate = true 
                        innerWall.material.needsUpdate = true 
	
                    })
                    BackLeanWalls.add(B_L_F_StoreWall)
                }
                /*Back Lean To Front Storage Double Wall */
                if (BackLeanWalls.getObjectByName("B_L_F_S_W_inner")==undefined) {
            
                    let storeFrontDWallClone = BackLeanWalls.getObjectByName("B_L_F_S_W");
                
                      if(BackLeanWalls.getObjectByName("B_L_F_S_W") != undefined){
                      let storeFrontDWall = storeFrontDWallClone.clone();
                    
                      let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
                      storeFrontDWall = new THREE.Mesh(storeFrontDWall.geometry,leftDoubleMaterial);
                      storeFrontDWall.name = "B_L_F_S_W_inner"
                      storeFrontDWall.visible = (params.is_translusant==true)? false : storeFrontDWallClone.visible
                      storeFrontDWall.scale.set(storeFrontDWallClone.scale.x , storeFrontDWallClone.scale.y , storeFrontDWallClone.scale.z);
                      storeFrontDWall.position.set(storeFrontDWallClone.position.x+ wallDistance, storeFrontDWallClone.position.y , storeFrontDWallClone.position.z );
                      storeFrontDWall.rotation.set(storeFrontDWallClone.rotation.x , storeFrontDWallClone.rotation.y , storeFrontDWallClone.rotation.z)
                    
                        BackLeanWalls.add(storeFrontDWall);

                        const_var.wallsForCut.B_L_F_S_W_inner = storeFrontDWall.clone();
                      }
                }
                /*Back Lean To Back Storage Wall */
                if (const_var.b_t_M_B_t_B.getObjectByName("B_L_B_S_W")!=undefined) {
                    let B_L_B_StoreWall = const_var.b_t_M_B_t_B.getObjectByName("B_L_B_S_W").clone();
                    B_L_B_StoreWall.visible = (params.add_storage_check_back!=false && params.p_b_w != "Close")?true:false;  
                    B_L_B_StoreWall.scale.set((parseInt(params.add_storage_back)),(params.leanB_p_h+roofMiddleHeight[params.b_l_t_r_pB][params.leanB_p_w]*2),1)
                    B_L_B_StoreWall.position.x = params.cB_addStorage_right || params.cB_addStorage_left ? params.p_d /-2-0.08 : params.p_d /-2-0.03;
                    B_L_B_StoreWall.position.y = (params.leanB_p_h+roofMiddleHeight[params.b_l_t_r_pB][params.leanB_p_w]*2)/2; 
                    B_L_B_StoreWall.position.z = (params.leanB_p_d/2)-(parseInt(params.add_storage_back))/2;
                    let wallTexture = horizontalTexture;
                    if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                    let B_L_WallTexture = new THREE.TextureLoader();
                    let  B_L_WallT = B_L_WallTexture.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                        B_L_B_StoreWall.material.map = texture;
                        B_L_B_StoreWall.material.bumpMap = texture;
                        B_L_B_StoreWall.material.bumpScale = 0.02
                        B_L_B_StoreWall.material.metalness = 1
                        B_L_B_StoreWall.material.roughness = 0.5
                        B_L_B_StoreWall.material.anisotropy = 10;
                        B_L_B_StoreWall.material.emissiveIntensity = 1;
                        B_L_B_StoreWall.material.map.wrapS = THREE.RepeatWrapping;
                        B_L_B_StoreWall.material.map.wrapT = THREE.RepeatWrapping;
                        B_L_B_StoreWall.material.map.offset.x = params.p_w;
                        B_L_B_StoreWall.material.map.offset.y = params.p_w;
                        B_L_B_StoreWall.material.map.needsUpdate = true;
                        B_L_B_StoreWall.material.needsUpdate = true;
                        if(params.p_v_w==true) {
                            B_L_B_StoreWall.material.map.repeat.set(((params.add_storage_back/2)+(params.add_storage_back/2/3))*2,1);
                        }else {
                            B_L_B_StoreWall.material.map.repeat.set(1,Math.round((params.p_h/1.5)*2));
                        }
                                                                                                                                
                        let innerWall = BackLeanWalls.getObjectByName("B_L_B_S_W_inner")
                        innerWall.material.map = texture.clone();
                        innerWall.material.map.wrapS = THREE.RepeatWrapping;
                        innerWall.material.map.wrapT = THREE.RepeatWrapping;
                        innerWall.material.map.offset.x = params.p_w;
                        innerWall.material.map.offset.y = params.p_w;
                        innerWall.material.map.repeat.set( B_L_B_StoreWall.material.map.repeat.x, B_L_B_StoreWall.material.map.repeat.y);
                        innerWall.material.color.set(0xFFFFFF)
                        innerWall.material.map.needsUpdate = true 
                        innerWall.material.needsUpdate = true 
	
                    })
                    BackLeanWalls.add(B_L_B_StoreWall)
                }
                /*Back Lean To Back Storage Double Wall */
                if (BackLeanWalls.getObjectByName("B_L_B_S_W_inner")==undefined) {
            
                    let storeBackDWallClone = BackLeanWalls.getObjectByName("B_L_B_S_W");
                
                      if(BackLeanWalls.getObjectByName("B_L_B_S_W") != undefined){
                      let storeBackDWall = storeBackDWallClone.clone();
                    
                      let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
                      storeBackDWall = new THREE.Mesh(storeBackDWall.geometry,leftDoubleMaterial);
                      storeBackDWall.name = "B_L_B_S_W_inner"
                      storeBackDWall.visible = (params.is_translusant==true)? false : storeBackDWallClone.visible
                      storeBackDWall.scale.set(storeBackDWallClone.scale.x , storeBackDWallClone.scale.y , storeBackDWallClone.scale.z);
                      storeBackDWall.position.set(storeBackDWallClone.position.x- wallDistance, storeBackDWallClone.position.y , storeBackDWallClone.position.z );
                      storeBackDWall.rotation.set(storeBackDWallClone.rotation.x , storeBackDWallClone.rotation.y , storeBackDWallClone.rotation.z)

                        BackLeanWalls.add(storeBackDWall);

                        const_var.wallsForCut.B_L_B_S_W_inner = storeBackDWall.clone();
                      }
                }
                /*Back Lean To Left Storage Gable */
                if (const_var.b_t_M_B_t_B.getObjectByName("B_L_L_S_G")!=undefined) {
                    let B_L_L_StoreGable = const_var.b_t_M_B_t_B.getObjectByName("B_L_L_S_G").clone();
                    let ltFwallPos = params.p_d/-2 - params.leanB_p_w/2;
                    if(params.p_v_w==true){
                        var backLeanToLeftStorageGableUVS = new Float32Array([
                            -1.0, -1.0,
                            0.0, -1.0,
                            0.0, -1.0,
                        ]);
                        } else {
                            var backLeanToLeftStorageGableUVS = new Float32Array([
                                0.0, 0.0,
                                0.0, 0.0,
                                0.0, 1.0,
                            ]);
                        }
                        B_L_L_StoreGable.geometry.setAttribute( 'uv', new THREE.BufferAttribute( backLeanToLeftStorageGableUVS, 2 ) );
                        B_L_L_StoreGable.visible = (params.add_storage_check_back!=false)?true:false;  
                        B_L_L_StoreGable.scale.set(params.leanB_p_w,roofMiddleHeight[params.b_l_t_r_pB][2*params.leanB_p_w],0.01);
                        B_L_L_StoreGable.position.set(ltFwallPos,params.leanB_p_h,params.leanB_p_d /-4 - (parseInt(params.add_storage_back))+5);
                        B_L_L_StoreGable.position.z = params.leanB_p_d /2- (parseInt(params.add_storage_back));
                        if(params.p_r_s == "1"){
                            B_L_L_StoreGable.position.set(ltFwallPos,params.leanB_p_h-0.05,params.leanB_p_d/+2-(parseInt(params.add_storage_back)));
                            
                            B_L_L_StoreGable.scale.set(params.leanB_p_w,roofMiddleHeight[params.b_l_t_r_pB][2*params.leanB_p_w],0.01);
                        }
                        let wallTexture = horizontalTexture;
                        if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                        let B_L_WallTexture = new THREE.TextureLoader();
                        let  B_L_WallT = B_L_WallTexture.load(process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                        B_L_L_StoreGable.material.map = texture;
                        B_L_L_StoreGable.material.bumpMap = texture;
                        B_L_L_StoreGable.material.bumpScale = 0.02
                        B_L_L_StoreGable.material.metalness = 1
                        B_L_L_StoreGable.material.roughness = 0.5
                        B_L_L_StoreGable.material.anisotropy = 10;
                        B_L_L_StoreGable.material.map.wrapS = THREE.RepeatWrapping;
                        B_L_L_StoreGable.material.map.wrapT = THREE.RepeatWrapping;	
                        if(params.p_v_w==true){
                            B_L_L_StoreGable.material.map.rotation = Math.PI
                            B_L_L_StoreGable.material.map.repeat.set(Math.round(((params.leanB_p_w/2)+(params.leanB_p_w/2/3))*2),1);
                        } else {
                            B_L_L_StoreGable.material.map.repeat.set(1,(roofMiddleHeight[params.b_l_t_r_pB][2*params.leanB_p_w]/1.5)*2);
                        }
                                                                                                                                                        
                        let innerWall = BackLeanWalls.getObjectByName("storeLeftDGable")
                        innerWall.material.map = texture.clone();
                        innerWall.material.map.wrapS = THREE.RepeatWrapping;
                        innerWall.material.map.wrapT = THREE.RepeatWrapping;
                        innerWall.material.map.offset.x = params.p_w;
                        innerWall.material.map.offset.y = params.p_w;
                        innerWall.material.map.repeat.set( B_L_L_StoreGable.material.map.repeat.x, B_L_L_StoreGable.material.map.repeat.y);
                        innerWall.material.color.set(0xFFFFFF)
                        innerWall.material.map.needsUpdate = true 
                        innerWall.material.needsUpdate = true 
	
                    })
                        BackLeanWalls.add(B_L_L_StoreGable)
                }
                /*Back Lean To Left Storage Gable */
                if (BackLeanWalls.getObjectByName("storeLeftDGable")==undefined) {
            
                    let storeLeftDGableClone = BackLeanWalls.getObjectByName("B_L_L_S_G");
                
                      if(BackLeanWalls.getObjectByName("B_L_L_S_G") != undefined){
                      let storeLeftDGable = storeLeftDGableClone.clone();
                    
                      let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
                      storeLeftDGable = new THREE.Mesh(storeLeftDGable.geometry,leftDoubleMaterial);
                      storeLeftDGable.name = "storeLeftDGable"
                      storeLeftDGable.visible = (params.is_translusant==true)? false : storeLeftDGableClone.visible
                      storeLeftDGable.scale.set(storeLeftDGableClone.scale.x , storeLeftDGableClone.scale.y , storeLeftDGableClone.scale.z);
                      storeLeftDGable.position.set(storeLeftDGableClone.position.x, storeLeftDGableClone.position.y , storeLeftDGableClone.position.z + wallDistance, );
                      storeLeftDGable.rotation.set(storeLeftDGableClone.rotation.x , storeLeftDGableClone.rotation.y , storeLeftDGableClone.rotation.z)

                        BackLeanWalls.add(storeLeftDGable);
                      }
                   }
        }

               /*Back Lean To Right Gable */
                if (const_var.b_t_M_B_t_B.getObjectByName("B_L_R_G")!=undefined) {
                    let B_L_R_Gable = const_var.b_t_M_B_t_B.getObjectByName("B_L_R_G").clone();
                    let ltFwallPos = params.p_d/-2 - params.leanB_p_w/2;
                    if (params.p_v_w==true) {
                        var leanToLeftbGableUVS = new Float32Array([
                            1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0
                        ]);
                    } else {
                        var leanToLeftbGableUVS = new Float32Array([
                            0.0, 2.0,
                            0.0, 2.0,
                            1.0, 0.0,
                            -2.0, 0.0,
                            2.0, 0.0,
                            -2.0, 0.0,
                        ]);
                    }
                    var cBLeftStorageFGableVertices = new Float32Array([    
                        0.5, 1, -0,         
                        0.5, 1, -0.01,      
                        0.5, 0, -0,       
                        -0.5, 0, -0,      
                        0.5, 0, -0.01,     
                        -0.5, 0, -0.01,
                     ]);
                
                      var index = new Uint32Array([
                        0,2,4,
                        0,4,1,
                        1,4,5,
                        5,4,2,
                        5,2,3,
                        3,0,1,
                        3,1,5,
                        3,2,0
                      ]);
                
                    B_L_R_Gable.geometry.setIndex(new THREE.BufferAttribute( index, 1 ) )
                    B_L_R_Gable.geometry.setAttribute("position", new THREE.BufferAttribute(cBLeftStorageFGableVertices, 3));                 
                    B_L_R_Gable.geometry.setAttribute( 'uv', new THREE.BufferAttribute( leanToLeftbGableUVS, 2 ) );
                    B_L_R_Gable.geometry.computeVertexNormals();    
                    B_L_R_Gable.visible = (params.p_b_c_b_b_b !="Open" || params.add_storage_check_back!=false)?true:false;  
                      
                    B_L_R_Gable.scale.set(params.leanB_p_w,roofMiddleHeight[params.b_l_t_r_pB][2*params.leanB_p_w],0.01);
                    B_L_R_Gable.position.set(ltFwallPos,params.leanB_p_h,params.leanB_p_d/2+0.06);
                    let wallTexture = horizontalTexture;
                    if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                    let B_L_WallTexture = new THREE.TextureLoader();
                    let  B_L_WallT = B_L_WallTexture.load(process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                        B_L_R_Gable.material.map = texture;
                        B_L_R_Gable.material.bumpMap = texture;
                        B_L_R_Gable.material.bumpScale = 0.02
                        B_L_R_Gable.material.metalness = 1
                        B_L_R_Gable.material.roughness = 0.5
                        B_L_R_Gable.material.anisotropy = 10;
                        B_L_R_Gable.material.map.wrapS = THREE.RepeatWrapping;
                        B_L_R_Gable.material.map.wrapT = THREE.RepeatWrapping;	
                        if(params.p_v_w==true){
                            B_L_R_Gable.material.map.repeat.set(Math.round(((params.leanB_p_w/2)+(params.leanB_p_w/2/3))*2),1);
                        } else {
                            B_L_R_Gable.material.map.repeat.set(1,(roofMiddleHeight[params.b_l_t_r_pB][2*params.leanB_p_w]/1.5));
                        }

                        B_L_R_Gable.material.map.needsUpdate = true;
                        B_L_R_Gable.material.needsUpdate = true;
                                                                                                                                                                                
                        let innerWall = BackLeanWalls.getObjectByName("B_L_R_G_inner")
                        innerWall.material.map = texture.clone();
                        innerWall.material.map.wrapS = THREE.RepeatWrapping;
                        innerWall.material.map.wrapT = THREE.RepeatWrapping;
                        innerWall.material.map.offset.x = params.p_w;
                        innerWall.material.map.offset.y = params.p_w;
                        innerWall.material.map.repeat.set( B_L_R_Gable.material.map.repeat.x, B_L_R_Gable.material.map.repeat.y);
                        innerWall.material.color.set(0xFFFFFF)
                        innerWall.material.map.needsUpdate = true 
                        innerWall.material.needsUpdate = true 
	
                    })
                    BackLeanWalls.add(B_L_R_Gable)
                    const_var.wallsForCut.B_L_R_G = B_L_R_Gable.clone();
                }
               /*Back Lean To Right Double Gable */
               if (BackLeanWalls.getObjectByName("B_L_R_G_inner")==undefined) {
            
                let rightDGableClone = BackLeanWalls.getObjectByName("B_L_R_G");
            
                  if(BackLeanWalls.getObjectByName("B_L_R_G") != undefined){
                  let rightDGable = rightDGableClone.clone();
                
                  let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
                  rightDGable = new THREE.Mesh(rightDGable.geometry,leftDoubleMaterial);
                  rightDGable.name = "B_L_R_G_inner"
                  rightDGable.visible = (params.is_translusant==true)? false : rightDGableClone.visible
                  rightDGable.scale.set(rightDGableClone.scale.x , rightDGableClone.scale.y , rightDGableClone.scale.z);
                  rightDGable.position.set(rightDGableClone.position.x, rightDGableClone.position.y , rightDGableClone.position.z - wallDistance );
                  rightDGable.rotation.set(rightDGableClone.rotation.x , rightDGableClone.rotation.y , rightDGableClone.rotation.z)
                
                    BackLeanWalls.add(rightDGable);
                    const_var.wallsForCut.B_L_R_G_inner = rightDGable.clone();
                  }
               }
                /*Back Lean To Left Gable */
                if (const_var.b_t_M_B_t_B.getObjectByName("B_L_L_G")!=undefined) {
                    let B_L_B_Gable = const_var.b_t_M_B_t_B.getObjectByName("B_L_L_G").clone();
                    let ltFwallPos = params.p_d/-2 - params.leanB_p_w/2;
                    if (params.p_v_w==true) {
                        var leanToLeftbGableUVS = new Float32Array([
                            1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0
                        ]);
                    } else {
                        var leanToLeftbGableUVS = new Float32Array([
                            0.0, 2.0,
                            0.0, 2.0,
                            1.0, 0.0,
                            -2.0, 0.0,
                            2.0, 0.0,
                            -2.0, 0.0,
                        ]);
                    }
                    var cBLeftStorageFGableVertices = new Float32Array([    
                        0.5, 1, -0,         
                        0.5, 1, -0.01,      
                        0.5, 0, -0,       
                        -0.5, 0, -0,      
                        0.5, 0, -0.01,     
                        -0.5, 0, -0.01,
                     ]);
                
                      var index = new Uint32Array([
                        0,2,4,
                        0,4,1,
                        1,4,5,
                        5,4,2,
                        5,2,3,
                        3,0,1,
                        3,1,5,
                        3,2,0
                      ]);
                
                    B_L_B_Gable.geometry.setIndex(new THREE.BufferAttribute( index, 1 ) )
                    B_L_B_Gable.geometry.setAttribute("position", new THREE.BufferAttribute(cBLeftStorageFGableVertices, 3));                 
                    B_L_B_Gable.geometry.setAttribute( 'uv', new THREE.BufferAttribute( leanToLeftbGableUVS, 2 ) );
                    B_L_B_Gable.geometry.computeVertexNormals();    
                    B_L_B_Gable.visible = ( params.p_b_c_b_b_f!="Open" )?true:false; 
                    B_L_B_Gable.scale.set(params.leanB_p_w,roofMiddleHeight[params.b_l_t_r_pB][2*params.leanB_p_w],0.01);
                    B_L_B_Gable.position.set(ltFwallPos,params.leanB_p_h,params.leanB_p_d / -2-0.06);
                    let wallTexture = horizontalTexture;
                    if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                    let B_L_WallTexture = new THREE.TextureLoader();
                    let  B_L_WallT = B_L_WallTexture.load(process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                B_L_B_Gable.material.map = texture;
                B_L_B_Gable.material.bumpMap = texture;
                B_L_B_Gable.material.bumpScale = 0.02
                B_L_B_Gable.material.metalness = 1
                B_L_B_Gable.material.roughness = 0.5
                B_L_B_Gable.material.anisotropy = 10;
                B_L_B_Gable.material.map.wrapS = THREE.RepeatWrapping;
                B_L_B_Gable.material.map.wrapT = THREE.RepeatWrapping;	
                if(params.p_v_w==true) {
                    B_L_B_Gable.material.map.rotation = Math.PI
                    B_L_B_Gable.material.map.repeat.set(Math.round(((params.leanB_p_w/2)+(params.leanB_p_w/2/3))*2),1);
                } else {
                    B_L_B_Gable.material.map.repeat.set(1,(roofMiddleHeight[params.b_l_t_r_pB][2*params.leanB_p_w]/1.5));
                }

                B_L_B_Gable.material.map.needsUpdate = true;
                B_L_B_Gable.material.needsUpdate = true;
                                                                                                                                                                                                
                let innerWall = BackLeanWalls.getObjectByName("B_L_L_G_inner")
                innerWall.material.map = texture.clone();
                innerWall.material.map.wrapS = THREE.RepeatWrapping;
                innerWall.material.map.wrapT = THREE.RepeatWrapping;
                innerWall.material.map.offset.x = params.p_w;
                innerWall.material.map.offset.y = params.p_w;
                innerWall.material.map.repeat.set( B_L_B_Gable.material.map.repeat.x, B_L_B_Gable.material.map.repeat.y);
                innerWall.material.map.needsUpdate = true;
                innerWall.material.color.set(0xFFFFFF)
                innerWall.material.needsUpdate = true 

                })
                BackLeanWalls.add(B_L_B_Gable)
                const_var.wallsForCut.B_L_L_G = B_L_B_Gable.clone();
                }
                /*Back Lean To Left Double Gable */
                if (BackLeanWalls.getObjectByName("B_L_L_G_inner")==undefined) {
            
                    let leftDGableClone = BackLeanWalls.getObjectByName("B_L_L_G");
                
                      if(BackLeanWalls.getObjectByName("B_L_L_G") != undefined){
                      let leftDGable = leftDGableClone.clone();
                    
                      let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
                      leftDGable = new THREE.Mesh(leftDGable.geometry,leftDoubleMaterial);
                      leftDGable.name = "B_L_L_G_inner"
                      leftDGable.visible = (params.is_translusant==true)? false : leftDGableClone.visible
                      leftDGable.scale.set(leftDGableClone.scale.x , leftDGableClone.scale.y , leftDGableClone.scale.z);
                      leftDGable.position.set(leftDGableClone.position.x, leftDGableClone.position.y , leftDGableClone.position.z + wallDistance, );
                      leftDGable.rotation.set(leftDGableClone.rotation.x , leftDGableClone.rotation.y , leftDGableClone.rotation.z)
                    
                        BackLeanWalls.add(leftDGable);
                        const_var.wallsForCut.B_L_L_G_inner = leftDGable.clone();
                      }
                   }

            if(params.p_w_c_n == true){       
                 /*Back Lean To Right Wall Wainscot */
                if (const_var.b_t_M_B_t_B.getObjectByName("B_L_S_W_WS")!=undefined) {
                    let B_L_F_WallWainScot = const_var.b_t_M_B_t_B.getObjectByName("B_L_S_W_WS").clone();
                    let b_p_w_scale = 0;
                    let b_p_w_position = 0;
             
                    if( params.add_left_back_lean_porch == true &&  params.add_right_back_lean_porch == false){
                         b_p_w_scale = params.leanB_p_w;
                         b_p_w_position = params.leanB_p_w/2;
                    }
                    if( params.add_left_back_lean_porch == false &&  params.add_right_back_lean_porch == true){
                     b_p_w_scale = params.leanB_p_w;
                     b_p_w_position = -params.leanB_p_w/2;
                    }
                    if( params.add_left_back_lean_porch == true &&  params.add_right_back_lean_porch == true){
                     b_p_w_scale = params.leanB_p_w+params.leanB_p_w;
                    }
                    B_L_F_WallWainScot.visible = (params.p_b_c_b_b_l=="Close" && params.p_w_c_n == true)?true:false;
                    B_L_F_WallWainScot.position.x = params.p_d / -2 - params.leanB_p_w - 0.075;
                    B_L_F_WallWainScot.position.z = b_p_w_position;
                    B_L_F_WallWainScot.position.y = 1.475;	
                    B_L_F_WallWainScot.rotation.y = Math.PI/2;			
                    B_L_F_WallWainScot.scale.set(params.leanB_p_d+b_p_w_scale,3,1);				
                    let wallTexture = horizontalTexture;
                    if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                    let B_L_WallTexture = new THREE.TextureLoader();
                    let  B_L_WallT = B_L_WallTexture.load(process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                        B_L_F_WallWainScot.material.map = texture;
                        B_L_F_WallWainScot.material.bumpMap = texture;
                        B_L_F_WallWainScot.material.bumpScale = 0.02
                        B_L_F_WallWainScot.material.metalness = 1
                        B_L_F_WallWainScot.material.roughness = 0.5
                        B_L_F_WallWainScot.material.anisotropy = 10;
                        B_L_F_WallWainScot.material.map.wrapS = THREE.RepeatWrapping;
                        B_L_F_WallWainScot.material.map.wrapT = THREE.RepeatWrapping;
                        B_L_F_WallWainScot.material.map.offset.x = params.leanB_p_w;
                        B_L_F_WallWainScot.material.map.offset.y = params.leanB_p_w;
                        if(params.p_v_w==true) {
                            B_L_F_WallWainScot.material.map.repeat.set(((params.leanB_p_d/2)+(params.leanB_p_d/2/3))*2,1);
                            // if( params.add_left_back_lean_porch == true &&  params.add_right_back_lean_porch == false){
                            //     B_L_F_WallWainScot.material.map.repeat.set(((params.leanB_p_d/2)+(params.leanB_p_d/2/3)+(params.lean_p_w/2)+(params.lean_p_w/2/3)),1);
                            //   } else if( params.add_left_back_lean_porch == false &&  params.add_right_back_lean_porch == true){
                            //     B_L_F_WallWainScot.material.map.repeat.set(((params.leanB_p_d/2)+(params.leanB_p_d/2/3)+(params.leanR_p_w/2)+(params.leanR_p_w/2/3)),1);
                            //    } else if( params.add_left_back_lean_porch == true &&  params.add_right_back_lean_porch == true){
                            //     B_L_F_WallWainScot.material.map.repeat.set(((params.leanB_p_d/2)+(params.leanB_p_d/2/3)+(params.lean_p_w/2)+(params.leanR_p_w/2)+(params.leanR_p_w/2/3)),1);
                            //    }

                            // if( params.add_left_back_lean_porch == true &&  params.add_right_back_lean_porch == false){
                            //     B_L_F_WallWainScot.material.map.repeat.set(((params.leanB_p_d/2)+(params.leanB_p_d/2/3)+(params.leanB_p_w/2)),1);
                            //   } else if( params.add_left_back_lean_porch == false &&  params.add_right_back_lean_porch == true){
                            //     B_L_F_WallWainScot.material.map.repeat.set(((params.leanB_p_d/2)+(params.leanB_p_d/2/3)+(params.leanB_p_w/2)),1);
                            //    } else if( params.add_left_back_lean_porch == true &&  params.add_right_back_lean_porch == true){
                            //     B_L_F_WallWainScot.material.map.repeat.set(((params.leanB_p_d/2)+(params.leanB_p_d/2/3)+(params.leanB_p_w/2)),1);
                            //    }

                            if (params.add_left_back_lean_porch == true &&  params.add_right_back_lean_porch == false){
                                B_L_F_WallWainScot.material.map.repeat.set(((params.leanB_p_d/2)+(params.leanB_p_d/2/3)+(params.lean_p_w/2))*2,1);
                              }
                              else if ( params.add_left_back_lean_porch == false &&  params.add_right_back_lean_porch == true){
                                B_L_F_WallWainScot.material.map.repeat.set(((params.leanB_p_d/2)+(params.leanB_p_d/2/3)+(params.leanR_p_w/2))*2,1);
                
                              } 
                              else if( params.add_left_back_lean_porch == true &&  params.add_right_back_lean_porch == true){
                                B_L_F_WallWainScot.material.map.repeat.set(((params.leanB_p_d/2)+(params.leanB_p_d/2/3)+(params.lean_p_w/2)+(params.leanR_p_w/2))*2,1);
                              }
                        } else {
                            B_L_F_WallWainScot.material.map.repeat.set(1,(3/1.5)*2);
                        }
                        B_L_F_WallWainScot.material.map.needsUpdate = true; 
                        B_L_F_WallWainScot.material.needsUpdate = true  
                    })
                     BackLeanWalls.add(B_L_F_WallWainScot)

                     
                    if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
                        let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
                        wainscotTrim.name = "B_L_S_W_WS_jtrim";
                        wainscotTrim.material = wainscotTrim.material.clone();
                        wainscotTrim.material.color.setHex(wainscotTrimCalor)
                        wainscotTrim.visible = B_L_F_WallWainScot.visible
                        wainscotTrim.rotation.y = Math.PI
                        wainscotTrim.scale.set(0.2,0.17, B_L_F_WallWainScot.scale.x);
                        wainscotTrim.position.set(B_L_F_WallWainScot.position.x-0.008,B_L_F_WallWainScot.position.y*2,B_L_F_WallWainScot.position.z);
                        BackLeanWalls.add(wainscotTrim);
                      }
                }
                 /*Back Lean To Front Storage Wall Wainscot */
                if (const_var.b_t_M_B_t_B.getObjectByName("B_L_F_S_W_WS")!=undefined) {
                    let B_L_F_S_WallWainScot = const_var.b_t_M_B_t_B.getObjectByName("B_L_F_S_W_WS").clone();
                    B_L_F_S_WallWainScot.visible = (params.add_storage_check_back == true && params.p_w_c_n == true)?true:false;
                    B_L_F_S_WallWainScot.position.x = params.p_d / -2 - params.leanB_p_w - 0.055;
                    B_L_F_S_WallWainScot.position.z = (params.leanB_p_d/2)-(parseInt(params.add_storage_back))/2;
                    B_L_F_S_WallWainScot.position.y = 1.475;	
                    B_L_F_S_WallWainScot.rotation.y = Math.PI/2;			
                    B_L_F_S_WallWainScot.scale.set((parseInt(params.add_storage_back)),3,1);	
          
                    let wallTexture = horizontalTexture;
                    if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                    let B_L_WallTexture = new THREE.TextureLoader();
                    let  B_L_WallT = B_L_WallTexture.load(process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                        B_L_F_S_WallWainScot.material.map = texture;
                        B_L_F_S_WallWainScot.material.bumpMap = texture;
                        B_L_F_S_WallWainScot.material.bumpScale = 0.02
                        B_L_F_S_WallWainScot.material.metalness = 1
                        B_L_F_S_WallWainScot.material.roughness = 0.5
                        B_L_F_S_WallWainScot.material.anisotropy = 10;
                        B_L_F_S_WallWainScot.material.map.wrapS = THREE.RepeatWrapping;
                        B_L_F_S_WallWainScot.material.map.wrapT = THREE.RepeatWrapping;
                        B_L_F_S_WallWainScot.material.map.offset.x = params.leanB_p_w;
                        B_L_F_S_WallWainScot.material.map.offset.y = params.leanB_p_w;
                        if(params.p_v_w==true) {
                            B_L_F_S_WallWainScot.material.map.repeat.set(((params.add_storage_back/2)+(params.add_storage_back/2/3))*2,1);
                        } else {
                            B_L_F_S_WallWainScot.material.map.repeat.set(1,(3/1.5)*2);
                        }
                        B_L_F_S_WallWainScot.material.map.needsUpdate = true; 
                        B_L_F_S_WallWainScot.material.needsUpdate = true;  
                    })
                     BackLeanWalls.add(B_L_F_S_WallWainScot)

                     if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
                        let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
                        wainscotTrim.name = "B_L_F_S_W_WS_jtrim";
                        wainscotTrim.material = wainscotTrim.material.clone();
                        wainscotTrim.material.color.setHex(wainscotTrimCalor)
                        wainscotTrim.visible = B_L_F_S_WallWainScot.visible
                        wainscotTrim.rotation.y = Math.PI
                        wainscotTrim.scale.set(0.2,0.17, B_L_F_S_WallWainScot.scale.x);
                        wainscotTrim.position.set(B_L_F_S_WallWainScot.position.x-0.008,B_L_F_S_WallWainScot.position.y*2,B_L_F_S_WallWainScot.position.z);
                        BackLeanWalls.add(wainscotTrim);
                      }
                }
                 /*Back Lean To Left Wall Wainscot */
                if (const_var.b_t_M_B_t_B.getObjectByName("B_L_F_W_WS")!=undefined) {
                    let B_L_L_WallWainScot = const_var.b_t_M_B_t_B.getObjectByName("B_L_F_W_WS").clone();
                    let ltBwallPos = params.p_d/-2 - params.leanB_p_w/2;
                    B_L_L_WallWainScot.visible = (params.p_b_c_b_b_f=="Close" && params.p_w_c_n == true)?true:false;
                    B_L_L_WallWainScot.position.x = ltBwallPos;
                    B_L_L_WallWainScot.position.z = params.leanB_p_d / -2 - 0.08;
                    B_L_L_WallWainScot.position.y = 1.475;
                    B_L_L_WallWainScot.scale.set(params.leanB_p_w,3,1);
                    let wallTexture = horizontalTexture;
                    if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                    let B_L_WallTexture = new THREE.TextureLoader();
                    let  B_L_WallT = B_L_WallTexture.load(process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                        B_L_L_WallWainScot.material.map = texture;
                        B_L_L_WallWainScot.material.bumpMap = texture;
                        B_L_L_WallWainScot.material.bumpScale = 0.02
                        B_L_L_WallWainScot.material.metalness = 1
                        B_L_L_WallWainScot.material.roughness = 0.5
                        B_L_L_WallWainScot.material.anisotropy = 10;
                        B_L_L_WallWainScot.material.map.wrapS = THREE.RepeatWrapping;
                        B_L_L_WallWainScot.material.map.wrapT = THREE.RepeatWrapping;
                        B_L_L_WallWainScot.material.map.offset.x = params.leanB_p_w;
                        B_L_L_WallWainScot.material.map.offset.y = params.leanB_p_w;
                        if(params.p_v_w==true){
                            B_L_L_WallWainScot.material.map.repeat.set(Math.round(((params.leanB_p_w/2)+(params.leanB_p_w/2/3))*2),1);
                        } else {
                            B_L_L_WallWainScot.material.map.repeat.set(1,(3/1.5)*2);
                        }	
                        B_L_L_WallWainScot.material.map.needsUpdate = true;  			
                        B_L_L_WallWainScot.material.needsUpdate = true;  			
                    })
                        BackLeanWalls.add(B_L_L_WallWainScot)
                        
                        if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
                            let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
                            wainscotTrim.name = "B_L_F_W_WS_jtrim";
                            wainscotTrim.material = wainscotTrim.material.clone();
                            wainscotTrim.material.color.setHex(wainscotTrimCalor)
                            wainscotTrim.visible = B_L_L_WallWainScot.visible
                            wainscotTrim.rotation.y = Math.PI/2
                            wainscotTrim.scale.set(0.2,0.17, B_L_L_WallWainScot.scale.x);
                            wainscotTrim.position.set(B_L_L_WallWainScot.position.x,B_L_L_WallWainScot.position.y*2,B_L_L_WallWainScot.position.z-0.008);
                            BackLeanWalls.add(wainscotTrim);
                          }
                }
                 /*Back Lean To Left Wall Wainscot */
                if (const_var.b_t_M_B_t_B.getObjectByName("B_L_F_W_WS")!=undefined) {
                    let B_L_L_S_WallWainScot = const_var.b_t_M_B_t_B.getObjectByName("B_L_F_W_WS").clone();
                    B_L_L_S_WallWainScot.name = "B_L_L_S_W_WS";
                    let ltBwallPos = params.p_d/-2 - params.leanB_p_w/2;
                    B_L_L_S_WallWainScot.visible = (params.add_storage_check_back == true && params.p_w_c_n == true)?true:false;
                    B_L_L_S_WallWainScot.position.x = ltBwallPos;
                    B_L_L_S_WallWainScot.position.z = (params.leanB_p_d /2 - (parseInt(params.add_storage_back)))-0.077;
                    B_L_L_S_WallWainScot.position.y = 1.475;
                    B_L_L_S_WallWainScot.scale.set(params.leanB_p_w,3,1);
                    let wallTexture = horizontalTexture;
                    if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                    let B_L_WallTexture = new THREE.TextureLoader();
                    let  B_L_WallT = B_L_WallTexture.load(process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                        B_L_L_S_WallWainScot.material.map = texture;
                        B_L_L_S_WallWainScot.material.bumpMap = texture;
                        B_L_L_S_WallWainScot.material.bumpScale = 0.02
                        B_L_L_S_WallWainScot.material.metalness = 1
                        B_L_L_S_WallWainScot.material.roughness = 0.5
                        B_L_L_S_WallWainScot.material.anisotropy = 10;
                        B_L_L_S_WallWainScot.material.map.wrapS = THREE.RepeatWrapping;
                        B_L_L_S_WallWainScot.material.map.wrapT = THREE.RepeatWrapping;
                        B_L_L_S_WallWainScot.material.map.offset.x = params.leanB_p_w;
                        B_L_L_S_WallWainScot.material.map.offset.y = params.leanB_p_w;
                        if(params.p_v_w==true){
                            B_L_L_S_WallWainScot.material.map.repeat.set(Math.round(((params.leanB_p_w/2)+(params.leanB_p_w/2/3))*2),1);
                        } else {
                            B_L_L_S_WallWainScot.material.map.repeat.set(1,(3/1.5)*2);
                        }		
                        B_L_L_S_WallWainScot.material.map.needsUpdate = true;		
                        B_L_L_S_WallWainScot.material.needsUpdate = true;		
                    })
                        BackLeanWalls.add(B_L_L_S_WallWainScot)
                                                
                        if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
                            let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
                            wainscotTrim.name = "B_L_L_S_W_WS_jtrim";
                            wainscotTrim.material = wainscotTrim.material.clone();
                            wainscotTrim.material.color.setHex(wainscotTrimCalor)
                            wainscotTrim.visible = B_L_L_S_WallWainScot.visible
                            wainscotTrim.rotation.y = Math.PI/2
                            wainscotTrim.scale.set(0.2,0.17, B_L_L_S_WallWainScot.scale.x);
                            wainscotTrim.position.set(B_L_L_S_WallWainScot.position.x,B_L_L_S_WallWainScot.position.y*2,B_L_L_S_WallWainScot.position.z-0.008);
                            BackLeanWalls.add(wainscotTrim);
                          }
                }
                 /*Back Lean To Right Wall Wainscot */
                if (const_var.b_t_M_B_t_B.getObjectByName("B_L_B_W_WS")!=undefined) {
                    let B_L_R_WallWainScot = const_var.b_t_M_B_t_B.getObjectByName("B_L_B_W_WS").clone();
                    let ltFwallPos = params.p_d/-2 - params.leanB_p_w/2;
                    B_L_R_WallWainScot.visible = ((params.p_b_c_b_b_b== "Close" && params.p_w_c_n == true) || (params.add_storage_check_back == true && params.p_w_c_n == true))?true:false;
                    B_L_R_WallWainScot.position.x = ltFwallPos;
                    B_L_R_WallWainScot.position.z = params.leanB_p_d / 2 + 0.08;
                    B_L_R_WallWainScot.position.y = 1.475;			
                    B_L_R_WallWainScot.scale.set(params.leanB_p_w,3,1);
                    let wallTexture = horizontalTexture;
                    if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                    let B_L_WallTexture = new THREE.TextureLoader();
                    let  B_L_WallT = B_L_WallTexture.load(process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                        B_L_R_WallWainScot.material.morphNormals = true;
                        B_L_R_WallWainScot.material.morphTargets = true;							
                        B_L_R_WallWainScot.material.map = texture;
                        B_L_R_WallWainScot.material.bumpMap = texture;
                        B_L_R_WallWainScot.material.bumpScale = 0.02
                        B_L_R_WallWainScot.material.metalness = 1
                        B_L_R_WallWainScot.material.roughness = 0.5
                        B_L_R_WallWainScot.material.anisotropy = 10;
                        B_L_R_WallWainScot.material.map.wrapS = THREE.RepeatWrapping;
                        B_L_R_WallWainScot.material.map.wrapT = THREE.RepeatWrapping;
                        B_L_R_WallWainScot.material.map.fog = false;
                        if(params.p_v_w==true){
                            B_L_R_WallWainScot.material.map.repeat.set(Math.round(((params.leanB_p_w/2)+(params.leanB_p_w/2/3))*2),1);
                        } else {
                            B_L_R_WallWainScot.material.map.repeat.set(1,(3/1.5)*2);
                        }
                        B_L_R_WallWainScot.material.map.needsUpdate = true;
                        B_L_R_WallWainScot.material.needsUpdate = true;
                    })
                 BackLeanWalls.add(B_L_R_WallWainScot)
                                 
                if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
                    let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
                    wainscotTrim.name = "B_L_B_W_WS_jtrim";
                    wainscotTrim.material = wainscotTrim.material.clone();
                    wainscotTrim.material.color.setHex(wainscotTrimCalor)
                    wainscotTrim.visible = B_L_R_WallWainScot.visible
                    wainscotTrim.rotation.y = Math.PI/-2
                    wainscotTrim.scale.set(0.2,0.17, B_L_R_WallWainScot.scale.x);
                    wainscotTrim.position.set(B_L_R_WallWainScot.position.x,B_L_R_WallWainScot.position.y*2,B_L_R_WallWainScot.position.z+0.008);
                    BackLeanWalls.add(wainscotTrim);
                  }
                }
                  /*Back Lean To Back Storage Wall Wainscot*/
                  if (const_var.b_t_M_B_t_B.getObjectByName("B_L_B_S_W_WS")!=undefined) {
                    let B_L_B_S_WallWainScot = const_var.b_t_M_B_t_B.getObjectByName("B_L_B_S_W_WS").clone();
                    B_L_B_S_WallWainScot.visible = (params.add_storage_check_back==true && params.p_w_c_n == true && params.p_b_w!= "Close")?true:false;  
                    B_L_B_S_WallWainScot.name ="B_L_B_S_W_WS"; 
                    B_L_B_S_WallWainScot.scale.set((parseInt(params.add_storage_back)),3,1)
                    B_L_B_S_WallWainScot.position.x = params.p_d /-2+0.077;
                    B_L_B_S_WallWainScot.position.y = 1.475; 
                    B_L_B_S_WallWainScot.position.z = (params.leanB_p_d/2)-(parseInt(params.add_storage_back))/2;
                    B_L_B_S_WallWainScot.rotation.y = Math.PI/2;	
                    let wallTexture = horizontalTexture;
                    if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                    let B_L_WallTexture = new THREE.TextureLoader();
                    let  B_L_WallT = B_L_WallTexture.load(process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                        B_L_B_S_WallWainScot.material.map = texture;
                        B_L_B_S_WallWainScot.material.bumpMap = texture;
                        B_L_B_S_WallWainScot.material.bumpScale = 0.02
                        B_L_B_S_WallWainScot.material.metalness = 1
                        B_L_B_S_WallWainScot.material.roughness = 0.5
                        B_L_B_S_WallWainScot.material.anisotropy = 10;
                        B_L_B_S_WallWainScot.material.emissiveIntensity = 1;
                        B_L_B_S_WallWainScot.material.map.wrapS = THREE.RepeatWrapping;
                        B_L_B_S_WallWainScot.material.map.wrapT = THREE.RepeatWrapping;
                        B_L_B_S_WallWainScot.material.map.offset.x = params.p_w;
                        B_L_B_S_WallWainScot.material.map.offset.y = params.p_w;
                        if(params.p_v_w==true) {
                            B_L_B_S_WallWainScot.material.map.repeat.set(((params.add_storage_back/2)+(params.add_storage_back/2/3))*2,1);
                        }else {
                            B_L_B_S_WallWainScot.material.map.repeat.set(1,(3/1.5)*2);
                        }
                        B_L_B_S_WallWainScot.material.map.needsUpdate = true;
                        B_L_B_S_WallWainScot.material.needsUpdate = true;
                    })
                    BackLeanWalls.add(B_L_B_S_WallWainScot)
                                                     
                if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
                    let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
                    wainscotTrim.name = "B_L_B_S_W_WS_jtrim";
                    wainscotTrim.material = wainscotTrim.material.clone();
                    wainscotTrim.material.color.setHex(wainscotTrimCalor)
                    wainscotTrim.visible = B_L_B_S_WallWainScot.visible
                    wainscotTrim.scale.set(0.2,0.17, B_L_B_S_WallWainScot.scale.x);
                    wainscotTrim.position.set(B_L_B_S_WallWainScot.position.x+0.008,B_L_B_S_WallWainScot.position.y*2,B_L_B_S_WallWainScot.position.z);
                    BackLeanWalls.add(wainscotTrim);
                  }
                }
            }
                
               /*code for transperant whole Back Lean-To Walls and walls Count */
               let wallVal; 
               const_var.scene.children.forEach(function(Group) {
                  if ("BackLeanWalls" == Group.name) { 
                    Group.children.map(geometry => {
                      if(params.is_translusant==true){
                        geometry.material.transparent = true;
                        geometry.material.opacity = 0.1;
                        // geometry.material.opacity =0.3;
                        geometry.material.alphaTest =false;
                        geometry.material.clearAlpha =1;
                      } else {
                          geometry.material.transparent = false;
                          geometry.material.opacity = 1;
                          geometry.material.alphaTest =0;
                          geometry.material.clearAlpha =null;
                      }
                      if(const_var.checkWallClose[geometry.name] != undefined ){
                        wallVal = const_var.checkWallClose[geometry.name]
                        if (wallVal == "utility") params[wallVal] = "Close"; 
                        if(geometry.rotation.y ==  1.5707963267948966 && params[wallVal] != "Open"){
                          closedSideWalls += 1
                        }
                        if (geometry.rotation._y == 0 && params[wallVal] != "Open" && !geometry.name.includes("Gable") && !geometry.name.includes("inner")) {
                          closedEndWalls += 1
                        }
                        if(geometry.rotation.y ==  1.5707963267948966 && params[wallVal] == "Close"){
                            fullyClosedSideWalls += 1
                        }
                        if (geometry.rotation._y == 0 && params[wallVal] == "Close" && !geometry.name.includes("Gable") && !geometry.name.includes("inner")) {
                            fullyClosedEndWalls += 1
                        }
                      }
                    })
                  }
                })     

                if ( params.add_storage_check_back ) {
                    if (params.p_b_c_b_b_l != "Open") closedSideWalls = (closedSideWalls - 1);
                    if (params.p_b_c_b_b_l == "Close") fullyClosedSideWalls = (fullyClosedSideWalls - 1);
                  }
            
                //   console.log(closedSideWalls,const_var.blClosedSideWalls,"closedSideWalls", closedEndWalls, const_var.blClosedEndWalls,"closedEndWalls");
            
            // //New Svg indecator for all dirction walls
            // const loader = new SVGLoader();
            // const url_front = process.env.REACT_APP_BASE_URL+frontTitleUrl;
            // loader.load(
            //     // resource URL
            //     url_front,
            //     function (data) {

            //         const paths = data.paths;
            //         const group = new THREE.Group();
            //         group.name = "BLfrontWallName";

            //         for (let i = 0; i < paths.length; i++) {

            //             const path = paths[i];

            //             const material = new THREE.MeshBasicMaterial({
            //                 color: const_var.wallNameColor,
            //                 side: THREE.BackSide,
            //                 depthWrite: true
            //             });

            //             const shapes = SVGLoader.createShapes(path);

            //             for (let j = 0; j < shapes.length; j++) {

            //                 const shape = shapes[j];
            //                 const geometry = new THREE.ShapeGeometry(shape);
            //                 const mesh = new THREE.Mesh(geometry, material);
            //                 mesh.scale.setScalar(0.05)
            //                 mesh.rotateZ(Math.PI)
            //                 mesh.position.set((params.p_d/-2),0.6,params.leanB_p_d/-2 - 0.1)
            //                 group.add(mesh);
            //                 group.visible = params.add_back_lean;

            //             }

            //         }

            //         BackLeanWalls.add(group);

            //     },
            //     // function (xhr) {

            //     //     console.log((xhr.loaded / xhr.total * 100) + '% loaded');

            //     // },
            //     // function (error) {

            //     //     console.log('An error happened');

            //     // }
            // );

            // const url_side = process.env.REACT_APP_BASE_URL+sideTitleUrl;

            // loader.load(
            //     // resource URL
            //     url_side,
            //     function (data) {

            //         const paths = data.paths;
            //         const group = new THREE.Group();
            //         group.name = "BLsideWallName";

            //         for (let i = 0; i < paths.length; i++) {

            //             const path = paths[i];

            //             const material = new THREE.MeshBasicMaterial({
            //                 color: const_var.wallNameColor,
            //                 side: THREE.BackSide,
            //                 depthWrite: true
            //             });

            //             const shapes = SVGLoader.createShapes(path);

            //             for (let j = 0; j < shapes.length; j++) {

            //                 const shape = shapes[j];
            //                 const geometry = new THREE.ShapeGeometry(shape);
            //                 const mesh = new THREE.Mesh(geometry, material);
            //                 mesh.scale.setScalar(0.05)
            //                 mesh.rotateZ(-Math.PI)
            //                 mesh.rotateY(-Math.PI / 2)
            //                 mesh.position.set((params.p_d/-2)-(params.leanB_p_w)-0.1,0.6,params.leanB_p_d/-2 - 0.1)
            //                 group.add(mesh);
            //                 group.visible = params.add_back_lean;

            //             }

            //         }

            //         BackLeanWalls.add(group);

            //     },
            //     // function (xhr) {

            //     //     console.log((xhr.loaded / xhr.total * 100) + '% loaded');

            //     // },
            //     // function (error) {

            //     //     console.log('An error happened');

            //     // }
            // );
            // const url_back = process.env.REACT_APP_BASE_URL+backTitleUrl;

            // loader.load(
            //     // resource URL
            //     url_back,
            //     function (data) {

            //         const paths = data.paths;
            //         const group = new THREE.Group();
            //         group.name = "BLbackWallName";

            //         for (let i = 0; i < paths.length; i++) {

            //             const path = paths[i];

            //             const material = new THREE.MeshBasicMaterial({
            //                 color: const_var.wallNameColor,
            //                 side: THREE.BackSide,
            //                 depthWrite: true
            //             });

            //             const shapes = SVGLoader.createShapes(path);

            //             for (let j = 0; j < shapes.length; j++) {

            //                 const shape = shapes[j];
            //                 const geometry = new THREE.ShapeGeometry(shape);
            //                 const mesh = new THREE.Mesh(geometry, material);
            //                 mesh.scale.setScalar(0.05)
            //                 mesh.rotateZ(-Math.PI)
            //                 mesh.rotateY(Math.PI)
            //                 mesh.position.set((params.p_d/-2)-(params.leanB_p_w),0.6,params.leanB_p_d/2 + 0.1)
            //                 group.add(mesh);
            //                 group.visible = params.add_back_lean;

            //             }

            //         }

            //         BackLeanWalls.add(group);

            //     },
            //     // function (xhr) {

            //     //     console.log((xhr.loaded / xhr.total * 100) + '% loaded');

            //     // },
            //     // function (error) {

            //     //     console.log('An error happened');

            //     // }
            // );
            // if (const_var.entry_points.length>0) {
            //     DoorCSG(); 
            //   }                
          
    }

    const_var.blClosedSideWalls = closedSideWalls;
    const_var.blClosedEndWalls =  closedEndWalls;
    const_var.blFullyEnclosedWalls = fullyClosedEndWalls+fullyClosedSideWalls;
    const_var.wallsData.backLean.closedSideWalls = closedSideWalls;
    const_var.wallsData.backLean.closedEndWalls = closedEndWalls;
    const_var.wallsData.backLean.p_b_c_b_b_l = params.p_b_c_b_b_l;
    const_var.wallsData.backLean.p_b_c_b_b_f = params.p_b_c_b_b_f;
    const_var.wallsData.backLean.p_b_c_b_b_b = params.p_b_c_b_b_b;
    
        /* Back Leanto Alignment */
        if (params.leantoAlignmentBack == "1") {
	    	BackLeanWalls.position.x = 0;
	    }
	    if (params.leantoAlignmentBack == "2") {
	    	BackLeanWalls.position.x = params.p_w/2-params.leanB_p_d/2 ;
        }
	    if (params.leantoAlignmentBack == "3") {
	        BackLeanWalls.position.x = -params.p_w/2+params.leanB_p_d/2;
        } 
        if ( params.isShowCenter == true ) {
            BackLeanWalls.visible = false
          }
   
}