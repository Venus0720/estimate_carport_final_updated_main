import * as THREE from "three";
import verticalTexture from '../../assets/images/imgTextures/buildingImages/verticalTexture.jpeg';
import horizontalTexture from '../../assets/images/imgTextures/buildingImages/horizantalTexture.jpeg';
import { params, const_var, } from '../../redux/reducers/reducer';
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader"
import frontTitleUrl from "../../assets/walls-names/RLF.svg"
import backTitleUrl from "../../assets/walls-names/RLB.svg"
import sideTitleUrl from "../../assets/walls-names/RLR.svg"
import { wallNameInBackgroundImage } from "../../redux/reducers/pricingReducer";
import { showWallName } from "../../redux/reducers/utils";
// import { DoorCSG } from '../../redux/reducers/pricingReducer';

export const updateRightLeanToWalls = () => {
	let roofMiddleHeight = {
    "1":{"6":0.25,"7":0.29165,"8":0.33335,"9":0.375,"10":0.41665,"11":0.45835,"12":0.5,"13":0.5417,"14":0.5833,"15":0.6250,"16":0.6667,"17":0.7083,"18":0.7500,"19":0.7917,"20":0.8333,"21":0.8750,"22":0.9167,"23":0.9583,"24":1,"25":1.0417,"26":1.0833,"27":1.1250,"28":1.1667,"29":1.2083,"30":1.2500,"31":1.2917,"32":1.3333,"33":1.3750,"34":1.4167,"35":1.4583,"36":1.5000,"37":1.5417,"38":1.5833,"39":1.6250,"40":1.6667,"41":1.7083,"42":1.7500,"43":1.7917,"44":1.8333,"45":1.8750,"46":1.9167,"47":1.9583,"48":2.00,"49":2.0417,"50":2.0833,"51":2.1250,"52":2.1667,"53":2.2083,"54":2.2500,"55":2.2917,"56":2.3333,"57":2.3750,"58":2.4167,"59":2.4583,"60":2.5000,"61":2.5417,"62":2.5833,"63":2.6250,"64":2.6667,"65":2.7083,"66":2.7500,"67":2.7917,"68":2.8333,"69":2.8750,"70":2.9167,"71":2.9583,"72":3.00,"73":3.0417,"74":3.0833,"75":3.1250,"76":3.1667,"77":3.2083,"78":3.2500,"79":3.2917,"80":3.3330},
    "2":{"6":0.50,"7":0.58335,"8":0.66665,"9":0.750,"10":0.83335,"11":0.91665,"12":1.0,"13":1.0833,"14":1.1667,"15":1.2500,"16":1.3333,"17":1.4167,"18":1.5000,"19":1.5833,"20":1.6667,"21":1.7500,"22":1.8333,"23":1.9167,"24":2,"25":2.0833,"26":2.1667,"27":2.2500,"28":2.3333,"29":2.4167,"30":2.5000,"31":2.5833,"32":2.6667,"33":2.7500,"34":2.8333,"35":2.9167,"36":3.0000,"37":3.0833,"38":3.1667,"39":3.2500,"40":3.3330,"41":3.4170,"42":3.5000,"43":3.5830,"44":3.6670,"45":3.7500,"46":3.8330,"47":3.9170,"48":4.00,"49":4.0830,"50":4.1670,"51":4.2500,"52":4.3330,"53":4.4170,"54":4.5000,"55":4.5830,"56":4.6670,"57":4.7500,"58":4.8330,"59":4.9170,"60":5.0000,"61":5.0830,"62":5.1670,"63":5.2500,"64":5.3330,"65":5.4170,"66":5.5000,"67":5.5830,"68":5.6670,"69":5.7500,"70":5.8330,"71":5.9170,"72":6.00,"73":6.0830,"74":6.1670,"75":6.2500,"76":6.3330,"77":6.4170,"78":6.5000,"79":6.5830,"80":6.6670},
    "3":{"6":0.75,"7":0.87500,"8":1.00000,"9":1.125,"10":1.25000,"11":1.37500,"12":1.5,"13":1.6250,"14":1.7500,"15":1.8750,"16":2.0000,"17":2.1250,"18":2.2500,"19":2.3750,"20":2.5000,"21":2.6250,"22":2.7500,"23":2.8750,"24":3,"25":3.1250,"26":3.2500,"27":3.3750,"28":3.5000,"29":3.6250,"30":3.7500,"31":3.8750,"32":4.0000,"33":4.1250,"34":4.2500,"35":4.3750,"36":4.5000,"37":4.6250,"38":4.7500,"39":4.8750,"40":5.0000,"41":5.1250,"42":5.2500,"43":5.3750,"44":5.5000,"45":5.6250,"46":5.7500,"47":5.8750,"48":6.00,"49":6.1250,"50":6.2500,"51":6.3750,"52":6.5000,"53":6.6250,"54":6.7500,"55":6.8750,"56":7.0000,"57":7.1250,"58":7.2500,"59":7.3750,"60":7.5000,"61":7.6250,"62":7.7500,"63":7.8750,"64":8.0000,"65":8.1250,"66":8.2500,"67":8.3750,"68":8.5000,"69":8.6250,"70":8.7500,"71":8.8750,"72":9.00,"73":9.1250,"74":9.2500,"75":9.3750,"76":9.5000,"77":9.6250,"78":9.7500,"79":9.8750,"80":10.000},
    "4":{"6":1.00,"7":1.16665,"8":1.33335,"9":1.500,"10":1.66650,"11":1.83350,"12":2.0,"13":2.1667,"14":2.3333,"15":2.5000,"16":2.6667,"17":2.8333,"18":3.0000,"19":3.1667,"20":3.3330,"21":3.5000,"22":3.6670,"23":3.8330,"24":4,"25":4.1670,"26":4.3330,"27":4.5000,"28":4.6670,"29":4.8330,"30":5.0000,"31":5.1670,"32":5.3330,"33":5.5000,"34":5.6670,"35":5.8330,"36":6.0000,"37":6.1670,"38":6.3330,"39":6.5000,"40":6.6670,"41":6.8330,"42":7.0000,"43":7.1670,"44":7.3330,"45":7.5000,"46":7.6670,"47":7.8330,"48":8.00,"49":8.1670,"50":8.3330,"51":8.5000,"52":8.6670,"53":8.8330,"54":9.0000,"55":9.1670,"56":9.3330,"57":9.5000,"58":9.6670,"59":9.8330,"60":10.000,"61":10.167,"62":10.333,"63":10.500,"64":10.667,"65":10.833,"66":11.000,"67":11.167,"68":11.333,"69":11.500,"70":11.667,"71":11.833,"72":12.0,"73":12.167,"74":12.333,"75":12.500,"76":12.667,"77":12.833,"78":13.000,"79":13.167,"80":13.333},
    "5":{"6":1.25,"7":1.45835,"8":1.66650,"9":1.875,"10":2.08350,"11":2.29150,"12":2.5,"13":2.7083,"14":2.9167,"15":3.1250,"16":3.3330,"17":3.5420,"18":3.7500,"19":3.9580,"20":4.1670,"21":4.3750,"22":4.5830,"23":4.7920,"24":5,"25":5.2080,"26":5.4170,"27":5.6250,"28":5.8330,"29":6.0420,"30":6.2500,"31":6.4580,"32":6.6670,"33":6.8750,"34":7.0830,"35":7.2920,"36":7.5000,"37":7.7080,"38":7.9170,"39":8.1250,"40":8.3330,"41":8.5420,"42":8.7500,"43":8.9580,"44":9.1670,"45":9.3750,"46":9.5830,"47":9.7920,"48":10.0,"49":10.208,"50":10.417,"51":10.625,"52":10.833,"53":11.042,"54":11.250,"55":11.458,"56":11.667,"57":11.875,"58":12.083,"59":12.292,"60":12.500,"61":12.708,"62":12.917,"63":13.125,"64":13.333,"65":13.542,"66":13.750,"67":13.958,"68":14.167,"69":14.375,"70":14.583,"71":14.792,"72":15.0,"73":15.208,"74":15.417,"75":15.625,"76":15.833,"77":16.042,"78":16.250,"79":16.458,"80":16.667},
    "6":{"6":1.50,"7":1.75000,"8":2.00000,"9":2.250,"10":2.50000,"11":2.75000,"12":3.0,"13":3.2500,"14":3.5000,"15":3.7500,"16":4.0000,"17":4.2500,"18":4.5000,"19":4.7500,"20":5.0000,"21":5.2500,"22":5.5000,"23":5.7500,"24":6,"25":6.2500,"26":6.5000,"27":6.7500,"28":7.0000,"29":7.2500,"30":7.5000,"31":7.7500,"32":8.0000,"33":8.2500,"34":8.5000,"35":8.7500,"36":9.0000,"37":9.2500,"38":9.5000,"39":9.7500,"40":10.000,"41":10.250,"42":10.500,"43":10.750,"44":11.000,"45":11.250,"46":11.500,"47":11.750,"48":12.0,"49":12.250,"50":12.500,"51":12.750,"52":13.000,"53":13.250,"54":13.500,"55":13.750,"56":14.000,"57":14.250,"58":14.500,"59":14.750,"60":15.000,"61":15.250,"62":15.500,"63":15.750,"64":16.000,"65":16.250,"66":16.500,"67":16.750,"68":17.000,"69":17.250,"70":17.500,"71":17.750,"72":18.0,"73":18.250,"74":18.500,"75":18.750,"76":19.000,"77":19.250,"78":19.500,"79":19.750,"80":20.000}
};
       
let repeatRotation = {
  "7":{"6":8.25,"7":9.1,"8":10.4,"9":11.7},
  "8":{"6":8.25,"7":9.625,"8":10.4,"9":11.7},
  "9":{"6":8,"7":9.34,"8":10.4,"9":11.7},
  "10":{"6":7.8,"7":9.1,"8":10.4,"9":11.7},
  "11":{"6":8.18,"7":9.55,"8":10.91,"9":12.27,"10":13.64},
  "12":{"6":8,"7":9.34,"8":10.67,"9":12,"10":13.33,"11":14.665},
  "13":{"6":7.84,"7":9.15,"8":10.47,"9":11.77,"10":13.08,"11":14.38,"12":16.28},
  "14":{"6":8.15,"7":9.5,"8":10.85,"9":12.22,"10":13.57,"11":14.93,"12":16.28,"13":16.28},
  "15":{"6":8,"7":9.333,"8":10.67,"9":12,"10":13.33,"11":14.67,"12":16,"13":17.34,"14":18.67},
  "16":{"6":7.875,"7":9.19,"8":10.5,"9":11.81,"10":13.12,"11":14.44,"12":15.75,"13":17.06,"14":18.38,"15":19.68},
  "17":{"6":8.12,"7":9.47,"8":10.82,"9":12.18,"10":13.53,"11":14.9,"12":16.24,"13":17.59,"14":18.94,"15":20.3,"16":21.65},
  "18":{"6":8,"7":9.333,"8":10.67,"9":12,"10":13.33,"11":14.67,"12":16,"13":17.34,"14":18.67,"15":20,"16":21.33,"17":22.66},
  "19":{"6":7.895,"7":9.21,"8":10.525,"9":11.84,"10":13.16,"11":14.47,"12":15.79,"13":17.105,"14":18.42,"15":19.74,"16":21.05,"17":22.37,"18":23.68},
  "20":{"6":8.1,"7":9.45,"8":10.8,"9":12.15,"10":13.5,"11":14.85,"12":16.2,"13":17.55,"14":18.9,"15":20.25,"16":21.6,"17":22.95,"18":24.3,"19":25.65},
}

    const wallDistance = (params.p_d <= 100)?0.04:0.15;
    let jTrimCalor = params.p_t_c.replace("#","0x");
    let wainscotTrimCalor = params.p_w_c_c.replace("#","0x");

    let jTrimAlignment
    if(params.p_d <= 100){
      jTrimAlignment = 0
    }else{
      jTrimAlignment = 0.22
    }

    if ("undefined" != typeof const_var.scene.getObjectByName("RightLeanWalls")) const_var.scene.remove(const_var.scene.getObjectByName("RightLeanWalls"));

    // Right Lean To Walls Group
    const RightLeanWalls = new THREE.Group();
    RightLeanWalls.name = "RightLeanWalls";
    const_var.scene.add(RightLeanWalls);

    let closedSideWalls = 0; let closedEndWalls = 0;
    let fullyClosedSideWalls = 0; let fullyClosedEndWalls = 0;

    let addDoorIntersectWall = function(height, pHeight, wall) {
        const nWall =  wall.clone();
        nWall.position.y = height - height/2 - pHeight/2;
        if (nWall.visible === true) nWall.scale.y =  (height - pHeight);
        nWall.visible = false;
        RightLeanWalls.add(nWall);
        wall.name +=1;
        const_var.wallsForCut[wall.name] = wall.clone();
    }

    showWallName("right")

      if(params.add_right_lean == true){

                /* New Geo For Lean To RightWall*/
                  if (const_var.b_t_M_R_t_R.getObjectByName("R_L_R_W")!=undefined) {
                    let R_L_RightWall = const_var.b_t_M_R_t_R.getObjectByName("R_L_R_W").clone();

                    let r_p_w_scale = 0;
                    let r_p_w_position = 0;
             
                    if( params.add_right_front_lean_porch == true &&  params.add_right_back_lean_porch == false){
                         r_p_w_scale = params.leanR_p_w;
                         r_p_w_position = params.leanR_p_w/2;
                    }
                    if( params.add_right_front_lean_porch == false &&  params.add_right_back_lean_porch == true){
                     r_p_w_scale = params.leanR_p_w;
                     r_p_w_position = -params.leanR_p_w/2;
                    }
                    if( params.add_right_front_lean_porch == true &&  params.add_right_back_lean_porch == true){
                     r_p_w_scale = params.leanR_p_w*2;
                    }
             

                    R_L_RightWall.visible = (params.p_b_c_b_r != "Open")?true:false;
                    R_L_RightWall.position.x = (params.p_w / 2 + params.leanR_p_w)+ 0.03;
                    R_L_RightWall.position.z = r_p_w_position;
                    let wH = params.leanR_p_h;
                    let wP = params.leanR_p_h - wH/2;
                    R_L_RightWall.position.y = wP;        
                    R_L_RightWall.scale.set(params.leanR_p_d,wH,1);       
                    switch(params.p_b_c_b_r) {
                      case "One_Fourth_Close":
                         wH = wH/4;
                         wP = params.leanR_p_h - wH/2;
                      break;
                      case "Half_Close":
                         wH = wH/2;
                         wP = params.leanR_p_h - wH/2;
                      break;          
                      case "Three_Fourth_Close":
                         wH = wH * 3/4;
                         wP = params.leanR_p_h - wH/2;
                      break;
                      case "Extended Gable":
                        break;
                      case "Gable":
                        break;
                        case "Open":
                      case "Close":
                         wH = params.leanR_p_h;
                         wP = params.leanR_p_h - wH/2;
                      break;
                      default:
                         if(params.p_r_s == "1") {
                         wH = (Math.abs(params.p_b_c_b_r.replace(/\D/g, "")) * 3)+0.3;
                         wP = params.leanR_p_h - wH/2;
                         } else {
                         wH = (Math.abs(params.p_b_c_b_r.replace(/\D/g, "")) * 3);
                         wP = params.leanR_p_h - wH/2;
                         }
                      break;
                    }       
                    if(params.p_r_s == "1"){      
                      R_L_RightWall.position.y = wP-0.15;        
                      R_L_RightWall.scale.set(params.leanR_p_d+r_p_w_scale,wH-0.3,1);
                    } else {
                      R_L_RightWall.position.y = wP;        
                      R_L_RightWall.scale.set(params.leanR_p_d+r_p_w_scale,wH,1);
                    }
                    let wallTexture = horizontalTexture;
                    if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                    let R_L_RightWallTexture = new THREE.TextureLoader();
                    let  R_L_RightWallT = R_L_RightWallTexture.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                    R_L_RightWall.material.map = texture;
                    R_L_RightWall.material.bumpMap = texture;
                    R_L_RightWall.material.bumpScale = 0.02
                    R_L_RightWall.material.metalness = 1
                    R_L_RightWall.material.roughness = 0.5
                    R_L_RightWall.material.anisotropy = 10;
                    R_L_RightWall.material.map.wrapS = THREE.RepeatWrapping;
                    R_L_RightWall.material.map.wrapT = THREE.RepeatWrapping;
                    R_L_RightWall.material.map.offset.x = params.leanR_p_w;
                    R_L_RightWall.material.map.offset.y = params.leanR_p_w;
                    if(params.p_v_w==true){
                      R_L_RightWall.material.map.repeat.set(((params.leanR_p_d/2)+(params.leanR_p_d/2/3))*2,1);
                      if( params.add_right_front_lean_porch == true &&  params.add_right_back_lean_porch == false){
                        R_L_RightWall.material.map.repeat.set(((params.leanR_p_d/2)+(params.leanR_p_d/2/3)+(params.leanR_p_w/2))*2,1);
                      } else if( params.add_right_front_lean_porch == false &&  params.add_right_back_lean_porch == true){
                        R_L_RightWall.material.map.repeat.set(((params.leanR_p_d/2)+(params.leanR_p_d/2/3)+(params.leanR_p_w/2))*2,1);
                       } else if( params.add_right_front_lean_porch == true &&  params.add_right_back_lean_porch == true){
                        R_L_RightWall.material.map.repeat.set(((params.leanR_p_d/2)+(params.leanR_p_d/2/3)+(params.leanR_p_w/2))*2,1);
                       }
                    }else{
                      R_L_RightWall.material.map.repeat.set(1,Math.round((wH/1.5)*2));
                    }

                    R_L_RightWall.material.map.needsUpdate = true;
                    R_L_RightWall.material.needsUpdate = true;
                                                                                                                              
                    let innerWall = RightLeanWalls.getObjectByName("R_L_R_W_inner")
                    innerWall.material.map = texture.clone();
                    innerWall.material.map.wrapS = THREE.RepeatWrapping;
                    innerWall.material.map.wrapT = THREE.RepeatWrapping;
                    innerWall.material.map.offset.x = params.p_w;
                    innerWall.material.map.offset.y = params.p_w;
                    innerWall.material.map.repeat.set( R_L_RightWall.material.map.repeat.x, R_L_RightWall.material.map.repeat.y);
                    innerWall.material.color.set(0xFFFFFF)
                    innerWall.material.map.needsUpdate = true 
                    innerWall.material.needsUpdate = true 

                })

                if (params.p_b_c_b_r !== "Close") {
                  addDoorIntersectWall(params.leanR_p_h, wH, R_L_RightWall);
                }
                RightLeanWalls.add(R_L_RightWall);

                if (const_var.b_t_M_L.getObjectByName("jTrim")!=undefined && params.p_b_c_b_r !== "Close" && params.p_b_c_b_r !== "Open" && params.p_j_t == true) {
                  let jTrim = const_var.b_t_M_L.getObjectByName("jTrim").clone();
                  jTrim.name = "R_L_R_W_jtrim";
                  jTrim.material = jTrim.material.clone();
                  jTrim.material.color.setHex(jTrimCalor)
                  jTrim.visible = true
                  jTrim.rotation.y = Math.PI
                  jTrim.scale.set(0.14+(jTrimAlignment),0.12, R_L_RightWall.scale.x);
                  jTrim.position.set(params.p_w / 2 + params.leanR_p_w - 0.025-(jTrimAlignment/2),R_L_RightWall.position.y-(R_L_RightWall.scale.y/2)-0.01,R_L_RightWall.position.z);
                  if(params.add_storage_check_right){
                    jTrim.scale.z = params.leanR_p_d-params.add_storage_right;
                    jTrim.position.z= params.add_storage_right/2;
                    if(params.add_right_front_lean_porch == true){
                      jTrim.scale.z = params.leanR_p_d-params.add_storage_right+params.leanF_p_w;
                      jTrim.position.z= params.add_storage_right/2+(params.leanF_p_w/2);
                    }
                    if(params.add_right_back_lean_porch == true){
                      let jTrim2 = const_var.b_t_M_L.getObjectByName("jTrim").clone();
                      jTrim2.scale.set(jTrim.scale.x,jTrim.scale.y, params.leanB_p_w);
                      jTrim2.position.set(jTrim.position.x,jTrim.position.y,(params.leanR_p_d/-2)-(params.leanB_p_w/2));
                      jTrim2.rotation.y = jTrim.rotation.y
                      jTrim2.visible = true;
                      jTrim2.name = "R_L_R_W1_jtrim"
                      jTrim2.material = jTrim2.material.clone();
                      RightLeanWalls.add(jTrim2);
                    }
                  }

                  RightLeanWalls.add(jTrim);
                }
              }


                  //Right Lean to Right double Wall
              if (RightLeanWalls.getObjectByName("R_L_R_W_inner")==undefined) {
                    
                let rightLeanRightWallClone = params.p_b_c_b_r !== "Close" ? RightLeanWalls.getObjectByName("R_L_R_W1"): RightLeanWalls.getObjectByName("R_L_R_W");
              
                  if(RightLeanWalls.getObjectByName("R_L_R_W") != undefined){
                  let doubleRightLeanRightWall = rightLeanRightWallClone.clone();
                  
                  let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
                  doubleRightLeanRightWall = new THREE.Mesh(doubleRightLeanRightWall.geometry,leftDoubleMaterial);
                  doubleRightLeanRightWall.name = "R_L_R_W_inner"
                  doubleRightLeanRightWall.visible = (params.is_translusant==true)? false : rightLeanRightWallClone.visible
                  doubleRightLeanRightWall.scale.set(rightLeanRightWallClone.scale.x , rightLeanRightWallClone.scale.y , rightLeanRightWallClone.scale.z);
                  doubleRightLeanRightWall.position.set(rightLeanRightWallClone.position.x -wallDistance, rightLeanRightWallClone.position.y , rightLeanRightWallClone.position.z);
                  doubleRightLeanRightWall.rotation.set(rightLeanRightWallClone.rotation.x , rightLeanRightWallClone.rotation.y , rightLeanRightWallClone.rotation.z)
                  
                    RightLeanWalls.add(doubleRightLeanRightWall);

                    const_var.wallsForCut.R_L_R_W_inner = doubleRightLeanRightWall.clone();
                  }
                }
          
                /* New Geo For Right Lean To Right Storage Wall */
                  if (params.add_storage_check_right && const_var.b_t_M_R_t_R.getObjectByName("R_L_R_S_W")!=undefined) {
                    let R_L_R_S_Wall = const_var.b_t_M_R_t_R.getObjectByName("R_L_R_S_W").clone();
                  R_L_R_S_Wall.scale.set((parseInt(params.add_storage_right)),params.leanR_p_h,1);
                  R_L_R_S_Wall.position.x =( params.p_w / 2 + params.leanR_p_w)+0.055;
                  R_L_R_S_Wall.position.y = params.leanR_p_h/2;       
                  R_L_R_S_Wall.position.z = (params.leanR_p_d/-2)+(parseInt(params.add_storage_right))/2;
                  R_L_R_S_Wall.visible = (params.add_storage_check_right!=false && params.p_b_c_b_r != "Close")?true:false;
                  if(params.p_r_s == "1"){      
                    R_L_R_S_Wall.position.y =  (params.leanR_p_h - params.leanR_p_h/2)-0.3; 
                    R_L_R_S_Wall.scale.y = params.leanR_p_h-0.3;      
                   }else{
                    R_L_R_S_Wall.position.y = params.leanR_p_h/2;       
                   }  
                  let wallTexture = horizontalTexture;
                  if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                 let R_L_R_S_WallTexture = new THREE.TextureLoader();
                 let  R_L_R_S_WallT = R_L_R_S_WallTexture.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                  R_L_R_S_Wall.material.map = texture;
                  R_L_R_S_Wall.material.bumpMap = texture;
                  R_L_R_S_Wall.material.bumpScale = 0.02
                  R_L_R_S_Wall.material.metalness = 1
                  R_L_R_S_Wall.material.roughness = 0.5
                  R_L_R_S_Wall.material.anisotropy = 10;
                  R_L_R_S_Wall.material.map.wrapS = THREE.RepeatWrapping;
                  R_L_R_S_Wall.material.map.wrapT = THREE.RepeatWrapping;
                  R_L_R_S_Wall.material.map.offset.x = params.leanR_p_w;
                  R_L_R_S_Wall.material.map.offset.y = params.leanR_p_w;
                  R_L_R_S_Wall.material.map.needsUpdate = true;
                  R_L_R_S_Wall.material.needsUpdate = true;
                  
                  if(params.p_v_w==true){ 
                   R_L_R_S_Wall.material.map.repeat.set(Math.round(((((parseInt(params.add_storage_right))/2)+((parseInt(params.add_storage_right))/2/3))*2)),1);
                  } else {
                     R_L_R_S_Wall.material.map.repeat.set(1,Math.round((params.leanR_p_h/1.5)*2));
                  }
                                                                                                                                                
                  let innerWall = RightLeanWalls.getObjectByName("R_L_R_S_W_inner")
                  innerWall.material.map = texture.clone();
                  innerWall.material.map.wrapS = THREE.RepeatWrapping;
                  innerWall.material.map.wrapT = THREE.RepeatWrapping;
                  innerWall.material.map.offset.x = params.p_w;
                  innerWall.material.map.offset.y = params.p_w;
                  innerWall.material.map.repeat.set( R_L_R_S_Wall.material.map.repeat.x, R_L_R_S_Wall.material.map.repeat.y);
                  innerWall.material.color.set(0xFFFFFF)
                  innerWall.material.map.needsUpdate = true 
                  innerWall.material.needsUpdate = true 

                })
                RightLeanWalls.add(R_L_R_S_Wall);
              }          

              //Right Lean to Right storage double Wall
              if (RightLeanWalls.getObjectByName("R_L_R_S_W_inner")==undefined) {
                    
                let rightLeanRightStorageWallClone = RightLeanWalls.getObjectByName("R_L_R_S_W");
              
                  if(RightLeanWalls.getObjectByName("R_L_R_S_W") != undefined){
                  let doubleRightLeanRightStorageWall = rightLeanRightStorageWallClone.clone();
                  
                  let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
                  doubleRightLeanRightStorageWall = new THREE.Mesh(doubleRightLeanRightStorageWall.geometry,leftDoubleMaterial);
                  doubleRightLeanRightStorageWall.name = "R_L_R_S_W_inner"
                  doubleRightLeanRightStorageWall.visible = (params.is_translusant==true)? false : rightLeanRightStorageWallClone.visible
                  doubleRightLeanRightStorageWall.scale.set(rightLeanRightStorageWallClone.scale.x , rightLeanRightStorageWallClone.scale.y , rightLeanRightStorageWallClone.scale.z);
                  doubleRightLeanRightStorageWall.position.set(rightLeanRightStorageWallClone.position.x -wallDistance, rightLeanRightStorageWallClone.position.y , rightLeanRightStorageWallClone.position.z);
                  doubleRightLeanRightStorageWall.rotation.set(rightLeanRightStorageWallClone.rotation.x , rightLeanRightStorageWallClone.rotation.y , rightLeanRightStorageWallClone.rotation.z)
                  
                    RightLeanWalls.add(doubleRightLeanRightStorageWall);

                    const_var.wallsForCut.R_L_R_S_W_inner = doubleRightLeanRightStorageWall.clone();
                  }
                }
                /* New Wall Geometry For Right Lean To Front Wall*/
                if (const_var.b_t_M_R_t_R.getObjectByName("R_L_F_W")!=undefined) {
                  let R_L_FrontWall = const_var.b_t_M_R_t_R.getObjectByName("R_L_F_W").clone();

                  let f_p_w_position = 0;

                  // if( params.add_right_front_lean_porch == true){
                  //      f_p_w_position = params.lean_p_w;
                  // }

                  let rtFwallPos = params.p_w/2 + params.leanR_p_w/2; 
                  R_L_FrontWall.visible = (params.p_b_c_b_r_f != "Open")?true:false;
                  R_L_FrontWall.position.x = rtFwallPos;
                  // R_L_FrontWall.position.z = params.leanR_p_d / 2 + 0.06; 
                  R_L_FrontWall.position.z = params.leanR_p_d / 2 +0.045; 
                  let wH = params.leanR_p_h;
                  let wP = params.leanR_p_h - wH/2;
                  R_L_FrontWall.position.y = wP;        
                  R_L_FrontWall.scale.set(params.leanR_p_w,wH,1);
                  switch(params.p_b_c_b_r_f) {
                   case "One_Fourth_Close":
                       wH = wH/4;
                       wP = params.leanR_p_h - wH/2;
                   break;
                   case "Half_Close":
                       wH = wH/2;
                       wP = params.leanR_p_h - wH/2;
                   break;         
                   case "Three_Fourth_Close":
                       wH = wH * 3/4;
                       wP = params.leanR_p_h - wH/2;
                   break;
                   case "Extended Gable":
                      wH = wH/6;
                      wP = params.leanR_p_h - wH/2;
                      break;
                  case "Gable":
                      wH = 0.15;
                      wP = params.leanR_p_h - wH/2; 
                       break;
                       case "Open":
                   case "Close":
                       wH = params.leanR_p_h;
                       wP = params.leanR_p_h - wH/2;
                   break;
                   default:
                       wH = Math.abs(params.p_b_c_b_r_f.replace(/\D/g, "")) * 3;
                       wP = params.leanR_p_h - wH/2;        
                   break;
                  }
                  R_L_FrontWall.position.y = wP;        
                  R_L_FrontWall.scale.set(params.leanR_p_w,wH,1);
                  let wallTexture = horizontalTexture;
                  if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;

                  let repeatVal = (repeatRotation[params.p_h] != undefined && params.p_b_c_b_r_f == "Close" && params.p_r_s != "1") ? repeatRotation[params.p_h][params.leanR_p_h] : Math.round((wH/1.5)*2)

                  let R_L_FrontWallTexture = new THREE.TextureLoader();
                  let R_L_FrontWallT = R_L_FrontWallTexture.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {               
                  R_L_FrontWall.material.morphNormals = true;
                  R_L_FrontWall.material.morphTargets = true;             
                  R_L_FrontWall.material.map = texture;
                  R_L_FrontWall.material.bumpMap = texture;
                  R_L_FrontWall.material.bumpScale = 0.02
                  R_L_FrontWall.material.metalness = 1
                  R_L_FrontWall.material.roughness = 0.5
                  R_L_FrontWall.material.anisotropy = 10;
                  R_L_FrontWall.material.map.wrapS = THREE.RepeatWrapping;
                  R_L_FrontWall.material.map.wrapT = THREE.RepeatWrapping;
                  R_L_FrontWall.material.map.offset.x = params.leanR_p_w;
                  R_L_FrontWall.material.map.offset.y = params.leanR_p_w;
                  if(params.p_v_w==true){
                       R_L_FrontWall.material.map.repeat.set(Math.round(((params.leanR_p_w/2)+(params.leanR_p_w/2/3))*2),1);
                       } else {
                       R_L_FrontWall.material.map.repeat.set(1,repeatVal);
                  }

                  R_L_FrontWall.material.map.needsUpdate = true;
                  R_L_FrontWall.material.needsUpdate = true;
                                                                                                                                                                       
                  let innerWall = RightLeanWalls.getObjectByName("R_L_F_W_inner")
                  innerWall.material.map = texture.clone();
                  innerWall.material.map.wrapS = THREE.RepeatWrapping;
                  innerWall.material.map.wrapT = THREE.RepeatWrapping;
                  innerWall.material.map.offset.x = params.p_w;
                  innerWall.material.map.offset.y = params.p_w;
                  innerWall.material.map.rotation = Math.PI
                  innerWall.material.map.repeat.set( R_L_FrontWall.material.map.repeat.x, R_L_FrontWall.material.map.repeat.y);
                  innerWall.material.color.set(0xFFFFFF)
                  innerWall.material.map.needsUpdate = true 
                  innerWall.material.needsUpdate = true 

              })

              if (params.p_b_c_b_r_f !== "Close") {
                  addDoorIntersectWall(params.leanR_p_h, wH, R_L_FrontWall);
              }
              RightLeanWalls.add(R_L_FrontWall);

              if (const_var.b_t_M_L.getObjectByName("jTrim")!=undefined && params.p_b_c_b_r_f !== "Close" && params.p_b_c_b_r_f !== "Open" && params.p_j_t_end == true) {
                let jTrim = const_var.b_t_M_L.getObjectByName("jTrim").clone();
                jTrim.name = "R_L_F_W_jtrim";
                jTrim.material = jTrim.material.clone();
                jTrim.material.color.setHex(jTrimCalor)
                jTrim.visible = true
                jTrim.rotation.y = Math.PI/2
                jTrim.scale.set(0.14+(jTrimAlignment),0.12, R_L_FrontWall.scale.x+0.07);
                jTrim.position.set(R_L_FrontWall.position.x-0.1,R_L_FrontWall.position.y-(R_L_FrontWall.scale.y/2)-0.01,(params.leanR_p_d/2)+0.005-(jTrimAlignment/2));
                RightLeanWalls.add(jTrim);
              }
            }

            //Right Lean to Right double Wall
            if (RightLeanWalls.getObjectByName("R_L_F_W_inner")==undefined) {
                  
              let rightLeanFrontWallClone = (params.p_b_c_b_r_f !== "Close") ?  RightLeanWalls.getObjectByName("R_L_F_W1") : RightLeanWalls.getObjectByName("R_L_F_W");
            
                if(rightLeanFrontWallClone != undefined){
                let doubleRightLeanFrontWall = rightLeanFrontWallClone.clone();
                
                let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
                doubleRightLeanFrontWall = new THREE.Mesh(doubleRightLeanFrontWall.geometry,leftDoubleMaterial);
                doubleRightLeanFrontWall.name = "R_L_F_W_inner"
                doubleRightLeanFrontWall.visible = (params.is_translusant==true)? false : rightLeanFrontWallClone.visible
                doubleRightLeanFrontWall.scale.set(rightLeanFrontWallClone.scale.x , rightLeanFrontWallClone.scale.y , rightLeanFrontWallClone.scale.z);
                doubleRightLeanFrontWall.position.set(rightLeanFrontWallClone.position.x , rightLeanFrontWallClone.position.y , rightLeanFrontWallClone.position.z-wallDistance);
                doubleRightLeanFrontWall.rotation.set(rightLeanFrontWallClone.rotation.x , rightLeanFrontWallClone.rotation.y , rightLeanFrontWallClone.rotation.z)
                
                  RightLeanWalls.add(doubleRightLeanFrontWall);

                  const_var.wallsForCut.R_L_F_W_inner = doubleRightLeanFrontWall.clone();
                }
              }
                /* New Wall Geometry For Right Lean To Back Wall */
                if (const_var.b_t_M_R_t_R.getObjectByName("R_L_B_W")!=undefined) {
                  let R_L_BackWall = const_var.b_t_M_R_t_R.getObjectByName("R_L_B_W").clone();

                  let b_p_w_position = 0;

                  // if( params.add_right_back_lean_porch == true){
                  //      b_p_w_position = params.lean_p_w;
                  // }

                   let rtBwallPos = params.p_w/2 + params.leanR_p_w/2;  
                   R_L_BackWall.visible = (params.p_b_c_b_r_b != "Open")?true:false;

                   R_L_BackWall.position.x = rtBwallPos;
                   //R_L_BackWall.position.z = (params.leanR_p_d / -2)-0.06;
                   R_L_BackWall.position.z = (params.leanR_p_d / -2)-0.055;
                   let wH = params.leanR_p_h;
                   let wP = params.leanR_p_h - wH/2;
                   R_L_BackWall.position.y = wP;        
                   R_L_BackWall.scale.set(params.leanR_p_w,wH,1);               
                   switch(params.p_b_c_b_r_b) {
                      case "One_Fourth_Close":
                            wH = wH/4;
                            wP = params.leanR_p_h - wH/2;
                      break;
                      case "Half_Close":
                            wH = wH/2;
                            wP = params.leanR_p_h - wH/2;
                      break;          
                      case "Three_Fourth_Close":
                            wH = wH * 3/4;
                            wP = params.leanR_p_h - wH/2;
                      break;
                      case "Extended Gable":
                          wH = wH/6;
                          wP = params.leanR_p_h - wH/2;
                          break;
                      case "Gable":
                          wH = 0.15;
                          wP = params.leanR_p_h - wH/2; 
                           break;
                           case "Open":
                      case "Close":
                            wH = params.leanR_p_h;
                            wP = params.leanR_p_h - wH/2;
                      break;
                      default:
                            wH = Math.abs(params.p_b_c_b_r_b.replace(/\D/g, "")) * 3;
                            wP = params.leanR_p_h - wH/2;       
                      break;
                   }
                   if ( params.add_storage_check_right!=false) {
                    wH = params.leanR_p_h;
                    wP = params.leanR_p_h - wH/2;
                    R_L_BackWall.visible = true
                    }
                   R_L_BackWall.position.y = wP;        
                   R_L_BackWall.scale.set(params.leanR_p_w,wH,1);
                   let wallTexture = horizontalTexture;
                   if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;

                   let repeatVal = (repeatRotation[params.p_h] != undefined && params.p_b_c_b_r_b == "Close" && params.p_r_s != "1") ? repeatRotation[params.p_h][params.leanR_p_h] : Math.round((wH/1.5)*2)

                   let R_L_BackWallTexture = new THREE.TextureLoader();
                   let R_L_BackWallT = R_L_BackWallTexture.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {   
                   R_L_BackWall.material.map = texture;
                   R_L_BackWall.material.bumpMap = texture;
                   R_L_BackWall.material.bumpScale = 0.02
                   R_L_BackWall.material.metalness = 1
                   R_L_BackWall.material.roughness = 0.5
                   R_L_BackWall.material.anisotropy = 10;
                   R_L_BackWall.material.map.wrapS = THREE.RepeatWrapping;
                   R_L_BackWall.material.map.wrapT = THREE.RepeatWrapping;
                   R_L_BackWall.material.map.offset.x = params.leanR_p_w;
                   R_L_BackWall.material.map.offset.y = params.leanR_p_w;
                   if(params.p_v_w==true){
                      R_L_BackWall.material.map.repeat.set(Math.round(((params.leanR_p_w/2)+(params.leanR_p_w/2/3))*2),1);
                   } else {
                      R_L_BackWall.material.map.repeat.set(1,repeatVal);
                   }      

                   R_L_BackWall.material.map.needsUpdate = true;
                   R_L_BackWall.material.needsUpdate = true;
                                                                                                                                                                                          
                  let innerWall = RightLeanWalls.getObjectByName("R_L_B_W_inner")
                  innerWall.material.map = texture.clone();
                  innerWall.material.map.wrapS = THREE.RepeatWrapping;
                  innerWall.material.map.wrapT = THREE.RepeatWrapping;
                  innerWall.material.map.offset.x = params.p_w;
                  innerWall.material.map.offset.y = params.p_w;
                  innerWall.material.map.rotation = Math.PI
                  innerWall.material.map.repeat.set( R_L_BackWall.material.map.repeat.x, R_L_BackWall.material.map.repeat.y);
                  innerWall.material.color.set(0xFFFFFF)
                  innerWall.material.map.needsUpdate = true 
                  innerWall.material.needsUpdate = true 
  
              })

              if (params.p_b_c_b_r_b !== "Close") {
                addDoorIntersectWall(params.leanR_p_h, wH, R_L_BackWall);
              }

              RightLeanWalls.add(R_L_BackWall);

              if (const_var.b_t_M_L.getObjectByName("jTrim")!=undefined && params.p_b_c_b_r_b !== "Close" && params.p_b_c_b_r_b !== "Open" && params.p_j_t_end == true) {
                let jTrim = const_var.b_t_M_L.getObjectByName("jTrim").clone();
                jTrim.name = "R_L_B_W_jtrim";
                jTrim.material = jTrim.material.clone();
                jTrim.material.color.setHex(jTrimCalor)
                jTrim.visible = true
                jTrim.rotation.y = Math.PI/-2
                jTrim.scale.set(0.14+(jTrimAlignment),0.12, R_L_BackWall.scale.x+0.07);
                jTrim.position.set(R_L_BackWall.position.x-0.1,R_L_BackWall.position.y-(R_L_BackWall.scale.y/2)-0.01,(params.leanR_p_d/-2)-0.005+(jTrimAlignment/2));
                RightLeanWalls.add(jTrim);
              }
            }

            //Right Lean to Back double Wall
            if (RightLeanWalls.getObjectByName("R_L_B_W_inner")==undefined) {
                  
              let rightLeanBackWallClone = (params.p_b_c_b_r_b !== "Close") ? RightLeanWalls.getObjectByName("R_L_B_W1") :RightLeanWalls.getObjectByName("R_L_B_W");
            
                if(RightLeanWalls.getObjectByName("R_L_B_W") != undefined){
                let doubleRightLeanBackWall = rightLeanBackWallClone.clone();
                
                let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
                doubleRightLeanBackWall = new THREE.Mesh(doubleRightLeanBackWall.geometry,leftDoubleMaterial);
                doubleRightLeanBackWall.name = "R_L_B_W_inner"
                doubleRightLeanBackWall.visible = (params.is_translusant==true)? false : rightLeanBackWallClone.visible
                doubleRightLeanBackWall.scale.set(rightLeanBackWallClone.scale.x , rightLeanBackWallClone.scale.y , rightLeanBackWallClone.scale.z);
                doubleRightLeanBackWall.position.set(rightLeanBackWallClone.position.x , rightLeanBackWallClone.position.y , rightLeanBackWallClone.position.z+wallDistance);
                doubleRightLeanBackWall.rotation.set(rightLeanBackWallClone.rotation.x , rightLeanBackWallClone.rotation.y , rightLeanBackWallClone.rotation.z)
                
                  RightLeanWalls.add(doubleRightLeanBackWall);

                  const_var.wallsForCut.R_L_B_W_inner = doubleRightLeanBackWall.clone();
                }
              }

              /* New Wall Geometry For Right Lean To Back Storage Wall
                 Please check in back wall we are using back wall  as back Storage Wall
               */
              
              /* Right Lean To Front Gable*/
                if (const_var.b_t_M_R_t_R.getObjectByName("R_L_F_G")!=undefined) {
                  let R_L_F_Gable = const_var.b_t_M_R_t_R.getObjectByName("R_L_F_G").clone();
                  let rtFwallPos = params.p_w/2 + params.leanR_p_w/2;
                  if(params.p_v_w==true) {
                    var leanToRightfGableUVS = new Float32Array([
                      0, 1, 
                      0, 1, 
                      1, 0, 
                      0, 0, 
                      1, 0, 
                      0, 0
                    ]);
                  } else {
                    var leanToRightfGableUVS = new Float32Array([
                      0.0, 2.0,
                      0.0, 2.0,
                      1.0, 0.0,
                      -2.0, 0.0,
                      2.0, 0.0,
                      -2.0, 0.0,
                    ]);
                  }

                  var cBLeftStorageFGableVertices = new Float32Array([    
                    -0.5, 1, -0,         
                    -0.5, 1, -0.01,      
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
  
                  R_L_F_Gable.geometry.setIndex(new THREE.BufferAttribute( index, 1 ) )
                  R_L_F_Gable.geometry.setAttribute("position", new THREE.BufferAttribute(cBLeftStorageFGableVertices, 3));
                  R_L_F_Gable.geometry.setAttribute( 'uv', new THREE.BufferAttribute( leanToRightfGableUVS, 2 ) );
                  R_L_F_Gable.geometry.computeVertexNormals();
                    R_L_F_Gable.visible = (params.p_b_c_b_r_f !="Open")?true:false;  

                    // if(params.add_right_front_lean_porch == true){
                    //   R_L_F_Gable.visible = false;
                    // }

                    R_L_F_Gable.scale.set(params.leanR_p_w,roofMiddleHeight[params.b_l_t_r_pR][2*params.leanR_p_w],0.02);
                    //R_L_F_Gable.position.set(rtFwallPos,params.leanR_p_h,params.leanR_p_d/2+0.06);
                    R_L_F_Gable.position.set(rtFwallPos,params.leanR_p_h,params.leanR_p_d/2+0.045);
                    let wallTexture = horizontalTexture;
                    if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                  let R_L_F_GableTexture = new THREE.TextureLoader();
                  let R_L_F_GableT = R_L_F_GableTexture.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                  R_L_F_Gable.material.map = texture;
                  R_L_F_Gable.material.bumpMap = texture;
                  R_L_F_Gable.material.bumpScale = 0.02
                  R_L_F_Gable.material.metalness = 1
                  R_L_F_Gable.material.roughness = 0.5
                  R_L_F_Gable.material.anisotropy = 10;
                  R_L_F_Gable.material.map.wrapS = THREE.RepeatWrapping;
                  R_L_F_Gable.material.map.wrapT = THREE.RepeatWrapping;  
                  if(params.p_v_w==true){
                  R_L_F_Gable.material.map.repeat.set(Math.round(((params.leanR_p_w/2)+(params.leanR_p_w/2/3))*2),1);
                  } else {
                  R_L_F_Gable.material.map.repeat.set(1,(roofMiddleHeight[params.b_l_t_r_pR][2*params.leanR_p_w]/1.5));
                  }

                  R_L_F_Gable.material.map.needsUpdate = true;
                  R_L_F_Gable.material.needsUpdate = true;
                                                                                                                                                                                                            
                  let innerWall = RightLeanWalls.getObjectByName("R_L_F_G_inner")
                  innerWall.material.map = texture.clone();
                  innerWall.material.map.wrapS = THREE.RepeatWrapping;
                  innerWall.material.map.wrapT = THREE.RepeatWrapping;
                  innerWall.material.map.offset.x = params.p_w;
                  innerWall.material.map.offset.y = params.p_w;
                  innerWall.material.map.repeat.set( R_L_F_Gable.material.map.repeat.x, R_L_F_Gable.material.map.repeat.y);
                  innerWall.material.color.set(0xFFFFFF)
                  innerWall.material.map.needsUpdate = true 
                  innerWall.material.needsUpdate = true 
  
              })
              RightLeanWalls.add(R_L_F_Gable);
              const_var.wallsForCut.R_L_F_G = R_L_F_Gable.clone();
            }

            //Right Lean to Front double Gable
            if (RightLeanWalls.getObjectByName("R_L_F_G_inner")==undefined) {
                  
              let rightLeanFrontGableClone = RightLeanWalls.getObjectByName("R_L_F_G");
            
                if(RightLeanWalls.getObjectByName("R_L_F_G") != undefined){
                let doubleRightLeanFrontGable = rightLeanFrontGableClone.clone();
                
                let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
                doubleRightLeanFrontGable = new THREE.Mesh(doubleRightLeanFrontGable.geometry,leftDoubleMaterial);
                doubleRightLeanFrontGable.name = "R_L_F_G_inner"
                doubleRightLeanFrontGable.visible = (params.is_translusant==true)? false : rightLeanFrontGableClone.visible
                doubleRightLeanFrontGable.scale.set(rightLeanFrontGableClone.scale.x , rightLeanFrontGableClone.scale.y , rightLeanFrontGableClone.scale.z);
                doubleRightLeanFrontGable.position.set(rightLeanFrontGableClone.position.x , rightLeanFrontGableClone.position.y , rightLeanFrontGableClone.position.z-wallDistance);
                doubleRightLeanFrontGable.rotation.set(rightLeanFrontGableClone.rotation.x , rightLeanFrontGableClone.rotation.y , rightLeanFrontGableClone.rotation.z)
                
                  RightLeanWalls.add(doubleRightLeanFrontGable);
                  const_var.wallsForCut.R_L_F_G_inner = doubleRightLeanFrontGable.clone();
                }
              }

              /* Right Lean To Back Gable*/
                if (const_var.b_t_M_R_t_R.getObjectByName("R_L_B_G")!=undefined) {
                  let R_L_B_Gable = const_var.b_t_M_R_t_R.getObjectByName("R_L_B_G").clone();
                  let rtFwallPos = params.p_w/2 + params.leanR_p_w/2;
                  if(params.p_v_w==true){
                    var leanToRightbGableUVS = new Float32Array([
                      0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0
                    ]);
                  } else {
                    var leanToRightbGableUVS = new Float32Array([
                      0.0, 2.0,
                      0.0, 2.0,
                      1.0, 0.0,
                      -2.0, 0.0,
                      2.0, 0.0,
                      -2.0, 0.0,
                    ]);
                  }

                  
                  var cBLeftStorageFGableVertices = new Float32Array([    
                    -0.5, 1, -0,         
                    -0.5, 1, -0.01,      
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
  
                  R_L_B_Gable.geometry.setIndex(new THREE.BufferAttribute( index, 1 ) )
                  R_L_B_Gable.geometry.setAttribute("position", new THREE.BufferAttribute(cBLeftStorageFGableVertices, 3));                 
                  R_L_B_Gable.geometry.setAttribute( 'uv', new THREE.BufferAttribute( leanToRightbGableUVS, 2 ) );
                  R_L_B_Gable.geometry.computeVertexNormals();
                  R_L_B_Gable.visible = (params.p_b_c_b_r_b !="Open" || params.add_storage_check_right!=false)?true:false;  

                  // if(params.add_right_back_lean_porch == true){
                  //   R_L_B_Gable.visible = false;
                  // }

                  ////R_L_B_Gable.scale.set(params.p_w,params.p_r_p,0);
                  R_L_B_Gable.scale.set(params.leanR_p_w,roofMiddleHeight[params.b_l_t_r_pR][2*params.leanR_p_w],0.01);
                  //R_L_B_Gable.position.set(rtFwallPos,params.leanR_p_h,params.leanR_p_d/-2-0.06);
                  R_L_B_Gable.position.set(rtFwallPos,params.leanR_p_h,params.leanR_p_d/-2-0.055);
                  let wallTexture = horizontalTexture;
                  if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                  let R_L_B_GableTexture = new THREE.TextureLoader();
                  let R_L_B_GableT = R_L_B_GableTexture.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                  R_L_B_Gable.material.map = texture;
                  R_L_B_Gable.material.bumpMap = texture;
                  R_L_B_Gable.material.bumpScale = 0.02
                  R_L_B_Gable.material.metalness = 1
                  R_L_B_Gable.material.roughness = 0.5
                  R_L_B_Gable.material.anisotropy = 10;
                  R_L_B_Gable.material.map.wrapS = THREE.RepeatWrapping;
                  R_L_B_Gable.material.map.wrapT = THREE.RepeatWrapping;  
                  if(params.p_v_w==true){
                    R_L_B_Gable.material.map.rotation = Math.PI
                  R_L_B_Gable.material.map.repeat.set(Math.round(((params.leanR_p_w/2)+(params.leanR_p_w/2/3))*2),1);
                  } else {
                  R_L_B_Gable.material.map.repeat.set(1,(roofMiddleHeight[params.b_l_t_r_pR][2*params.leanR_p_w]/1.5));
                  }

                  R_L_B_Gable.material.map.needsUpdate = true;
                  R_L_B_Gable.material.needsUpdate = true;
                                                                                                                                                                                                                              
                  let innerWall = RightLeanWalls.getObjectByName("R_L_B_G_inner")
                  innerWall.material.map = texture.clone();
                  innerWall.material.map.wrapS = THREE.RepeatWrapping;
                  innerWall.material.map.wrapT = THREE.RepeatWrapping;
                  innerWall.material.map.offset.x = params.p_w;
                  innerWall.material.map.offset.y = params.p_w;
                  innerWall.material.map.repeat.set( R_L_B_Gable.material.map.repeat.x, R_L_B_Gable.material.map.repeat.y);
                  innerWall.material.color.set(0xFFFFFF)
                  innerWall.material.map.needsUpdate = true 
                  innerWall.material.needsUpdate = true 
  
              })
              RightLeanWalls.add(R_L_B_Gable);
              const_var.wallsForCut.R_L_B_G = R_L_B_Gable.clone();
            }

            //Right Lean to Front double Gable
            if (RightLeanWalls.getObjectByName("R_L_B_G_inner")==undefined) {
                  
              let rightLeanBackGableClone = RightLeanWalls.getObjectByName("R_L_B_G");
            
                if(RightLeanWalls.getObjectByName("R_L_B_G") != undefined){
                let doubleRightLeanBackGable = rightLeanBackGableClone.clone();
                
                let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
                doubleRightLeanBackGable = new THREE.Mesh(doubleRightLeanBackGable.geometry,leftDoubleMaterial);
                doubleRightLeanBackGable.name = "R_L_B_G_inner"
                doubleRightLeanBackGable.visible = (params.is_translusant==true)? false : rightLeanBackGableClone.visible
                doubleRightLeanBackGable.scale.set(rightLeanBackGableClone.scale.x , rightLeanBackGableClone.scale.y , rightLeanBackGableClone.scale.z);
                doubleRightLeanBackGable.position.set(rightLeanBackGableClone.position.x , rightLeanBackGableClone.position.y , rightLeanBackGableClone.position.z+wallDistance);
                doubleRightLeanBackGable.rotation.set(rightLeanBackGableClone.rotation.x , rightLeanBackGableClone.rotation.y , rightLeanBackGableClone.rotation.z)
                
                  RightLeanWalls.add(doubleRightLeanBackGable);
                  const_var.wallsForCut.R_L_B_G_inner = doubleRightLeanBackGable.clone();
                }
              }              

          if(params.add_storage_check_right == true){      
                /* New Geo For Lean To Left Storage Wall*/
                  if (const_var.b_t_M_R_t_R.getObjectByName("R_L_L_S_W")!=undefined) {
                    let R_L_L_S_Wall = const_var.b_t_M_R_t_R.getObjectByName("R_L_L_S_W").clone();
                    R_L_L_S_Wall.visible = (params.add_storage_check_right!=false)?true:false;  
                    R_L_L_S_Wall.scale.set((parseInt(params.add_storage_right)),params.leanR_p_h+roofMiddleHeight[params.b_l_t_r_pR][2*params.leanR_p_w],1)
                    R_L_L_S_Wall.position.x = params.p_w /2+wallDistance;
                    R_L_L_S_Wall.position.y = (params.leanR_p_h/2)+roofMiddleHeight[params.b_l_t_r_pR][params.leanR_p_w]; 
                    R_L_L_S_Wall.position.z = (params.leanR_p_d/-2)+(parseInt(params.add_storage_right))/2;
                    let wallTexture = horizontalTexture;
                    if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                   let R_L_L_S_WallTexture = new THREE.TextureLoader();
                   let R_L_L_S_WallT = R_L_L_S_WallTexture.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                    // R_L_L_S_Wall.material.envMap = texture;
                    // R_L_L_S_Wall.material.emissiveMap = texture;
                    // R_L_L_S_Wall.material.emissiveIntensity = 1;
                    R_L_L_S_Wall.material.map = texture;
                    R_L_L_S_Wall.material.bumpMap = texture;
                    R_L_L_S_Wall.material.bumpScale = 0.02
                    R_L_L_S_Wall.material.metalness = 1
                    R_L_L_S_Wall.material.roughness = 0.5
                    R_L_L_S_Wall.material.anisotropy = 10;
                    R_L_L_S_Wall.material.map.wrapS = THREE.RepeatWrapping;
                    R_L_L_S_Wall.material.map.wrapT = THREE.RepeatWrapping;
                    R_L_L_S_Wall.material.map.offset.x = params.p_w;
                    R_L_L_S_Wall.material.map.offset.y = params.p_w;
                    R_L_L_S_Wall.material.map.needsUpdate = true;
                    R_L_L_S_Wall.material.needsUpdate = true;
                    if(params.p_v_w==true){
                    R_L_L_S_Wall.material.map.repeat.set(Math.round(((((parseInt(params.add_storage_right))/2)+((parseInt(params.add_storage_right))/2/3))*2)),1);
                    } else {
                    R_L_L_S_Wall.material.map.repeat.set(1,Math.round((params.p_h/1.5)*2));
                    }

                    let innerWall = RightLeanWalls.getObjectByName("R_L_L_S_W_inner")
                    innerWall.material.map = texture.clone();
                    innerWall.material.map.wrapS = THREE.RepeatWrapping;
                    innerWall.material.map.wrapT = THREE.RepeatWrapping;
                    innerWall.material.map.offset.x = params.p_w;
                    innerWall.material.map.offset.y = params.p_w;
                    innerWall.material.map.repeat.set( R_L_L_S_Wall.material.map.repeat.x, R_L_L_S_Wall.material.map.repeat.y);
                    innerWall.material.color.set(0xFFFFFF)
                    innerWall.material.map.needsUpdate = true 
                    innerWall.material.needsUpdate = true 
    
                })
                RightLeanWalls.add(R_L_L_S_Wall);

              }

              //Right Lean to Left storage double Wall
              if (RightLeanWalls.getObjectByName("R_L_L_S_W_inner")==undefined) {
                    
                let rightLeanLeftStorageWallClone = RightLeanWalls.getObjectByName("R_L_L_S_W");
              
                  if(RightLeanWalls.getObjectByName("R_L_L_S_W") != undefined){
                  let doubleRightLeanLeftStorageWall = rightLeanLeftStorageWallClone.clone();
                  
                  let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
                  doubleRightLeanLeftStorageWall = new THREE.Mesh(doubleRightLeanLeftStorageWall.geometry,leftDoubleMaterial);
                  doubleRightLeanLeftStorageWall.name = "R_L_L_S_W_inner"
                  doubleRightLeanLeftStorageWall.visible = (params.is_translusant==true)? false : rightLeanLeftStorageWallClone.visible
                  doubleRightLeanLeftStorageWall.scale.set(rightLeanLeftStorageWallClone.scale.x , rightLeanLeftStorageWallClone.scale.y , rightLeanLeftStorageWallClone.scale.z);
                  doubleRightLeanLeftStorageWall.position.set(rightLeanLeftStorageWallClone.position.x +(wallDistance*2), rightLeanLeftStorageWallClone.position.y , rightLeanLeftStorageWallClone.position.z);
                  doubleRightLeanLeftStorageWall.rotation.set(rightLeanLeftStorageWallClone.rotation.x , rightLeanLeftStorageWallClone.rotation.y , rightLeanLeftStorageWallClone.rotation.z)
                  
                    RightLeanWalls.add(doubleRightLeanLeftStorageWall);

                    const_var.wallsForCut.R_L_L_S_W_inner = doubleRightLeanLeftStorageWall.clone();
                  }
                }

                /* New Wall Geometry For Right Lean To Front Storage Wall*/
                  if (const_var.b_t_M_R_t_R.getObjectByName("R_L_F_S_W")!=undefined) {
                    let R_L_F_StorageWall = const_var.b_t_M_R_t_R.getObjectByName("R_L_F_S_W").clone();
                   let rtFSwallPos = params.p_w/-2 - params.leanR_p_w/2;  
                  R_L_F_StorageWall.visible = (params.add_storage_check_right!=false)?true:false;
                  R_L_F_StorageWall.scale.set(params.leanR_p_w,params.leanR_p_h,1);
                  R_L_F_StorageWall.position.x = -rtFSwallPos;
                  R_L_F_StorageWall.position.y =  params.leanR_p_h/2
                  R_L_F_StorageWall.position.z = params.leanR_p_d / -2 + (parseInt(params.add_storage_right));  
                  
                  // if(params.p_r_s == "1"){
                  //   R_L_F_StorageWall.position.y =  params.leanR_p_h/2-0.05
                  //  }
                   let wallTexture = horizontalTexture;
                  if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                  let R_L_F_StorageWallTexture = new THREE.TextureLoader();
                  let R_L_F_StorageWallT = R_L_F_StorageWallTexture.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {   
                  R_L_F_StorageWall.material.morphNormals = true;
                  R_L_F_StorageWall.material.morphTargets = true;   
                  R_L_F_StorageWall.material.map = texture;
                  R_L_F_StorageWall.material.bumpMap = texture;
                  R_L_F_StorageWall.material.bumpScale = 0.02
                  R_L_F_StorageWall.material.metalness = 1
                  R_L_F_StorageWall.material.roughness = 0.5
                  R_L_F_StorageWall.material.anisotropy = 10;
                  R_L_F_StorageWall.material.map.wrapS = THREE.RepeatWrapping;
                  R_L_F_StorageWall.material.map.wrapT = THREE.RepeatWrapping;
                  R_L_F_StorageWall.material.map.offset.x = params.leanR_p_w;
                  R_L_F_StorageWall.material.map.offset.y = params.leanR_p_w;
                  R_L_F_StorageWall.material.map.needsUpdate = true;
                  R_L_F_StorageWall.material.needsUpdate = true;
                
                   if(params.p_v_w==true){
                    R_L_F_StorageWall.material.map.repeat.set(Math.round(((params.leanR_p_w/2)+(params.leanR_p_w/2/3))*2),1);
                   } else {
                    R_L_F_StorageWall.material.map.repeat.set(1,Math.round((params.leanR_p_h/1.5)*2));
                   }
                   
                   let innerWall = RightLeanWalls.getObjectByName("R_L_F_S_W_inner")
                   innerWall.material.map = texture.clone();
                   innerWall.material.map.wrapS = THREE.RepeatWrapping;
                   innerWall.material.map.wrapT = THREE.RepeatWrapping;
                   innerWall.material.map.offset.x = params.p_w;
                   innerWall.material.map.offset.y = params.p_w;
                   innerWall.material.map.rotation = Math.PI
                   innerWall.material.map.repeat.set( R_L_F_StorageWall.material.map.repeat.x, R_L_F_StorageWall.material.map.repeat.y);
                   innerWall.material.color.set(0xFFFFFF)
                   innerWall.material.map.needsUpdate = true 
                   innerWall.material.needsUpdate = true 
   
                })
                RightLeanWalls.add(R_L_F_StorageWall);
              } 

              //Right Lean to Left storage double Wall
              if (RightLeanWalls.getObjectByName("R_L_F_S_W_inner")==undefined) {
                    
                let rightLeanFrontStorageWallClone = RightLeanWalls.getObjectByName("R_L_F_S_W");
              
                  if(RightLeanWalls.getObjectByName("R_L_F_S_W") != undefined){
                  let doubleRightLeanFrontStorageWall = rightLeanFrontStorageWallClone.clone();
                  
                  let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
                  doubleRightLeanFrontStorageWall = new THREE.Mesh(doubleRightLeanFrontStorageWall.geometry,leftDoubleMaterial);
                  doubleRightLeanFrontStorageWall.name = "R_L_F_S_W_inner"
                  doubleRightLeanFrontStorageWall.visible = (params.is_translusant==true)? false : rightLeanFrontStorageWallClone.visible
                  doubleRightLeanFrontStorageWall.scale.set(rightLeanFrontStorageWallClone.scale.x , rightLeanFrontStorageWallClone.scale.y , rightLeanFrontStorageWallClone.scale.z);
                  doubleRightLeanFrontStorageWall.position.set(rightLeanFrontStorageWallClone.position.x , rightLeanFrontStorageWallClone.position.y , rightLeanFrontStorageWallClone.position.z-wallDistance);
                  doubleRightLeanFrontStorageWall.rotation.set(rightLeanFrontStorageWallClone.rotation.x , rightLeanFrontStorageWallClone.rotation.y , rightLeanFrontStorageWallClone.rotation.z)

                    RightLeanWalls.add(doubleRightLeanFrontStorageWall);

                    const_var.wallsForCut.R_L_F_S_W_inner = doubleRightLeanFrontStorageWall.clone();
                  }
                }


                /* Right Lean To Right Storage*/
                  if (const_var.b_t_M_R_t_R.getObjectByName("R_L_F_S_G")!=undefined) {
                    let R_L_F_StoreGable = const_var.b_t_M_R_t_R.getObjectByName("R_L_F_S_G").clone();
                    let rtFwallPos = params.p_w/2 + params.leanR_p_w/2;
                    if(params.p_v_w==true){
                      var leanToRightStorageGableUVS = new Float32Array([
                        -1.0, -1.0,
                        0.0, -1.0,
                        -1.0, 0.0,
                      ]);
                    }
                    else
                    {
                      var leanToRightStorageGableUVS = new Float32Array([
                        0.0, 0.0,
                        0.0, 0.0,
                        0.0, 1.0,
                      ]);
                    }
                    R_L_F_StoreGable.geometry.setAttribute( 'uv', new THREE.BufferAttribute( leanToRightStorageGableUVS, 2 ) );
                    R_L_F_StoreGable.visible = (params.add_storage_check_right!=false)?true:false;  
                    R_L_F_StoreGable.scale.set(params.leanR_p_w,roofMiddleHeight[params.b_l_t_r_pR][2*params.leanR_p_w],0.01);
                    R_L_F_StoreGable.position.set(rtFwallPos,params.leanR_p_h,params.leanR_p_d/-2+(parseInt(params.add_storage_right)));
                    // if(params.p_r_s == "1"){
                    //   R_L_F_StoreGable.position.set(rtFwallPos,params.leanR_p_h-wallDistance,params.leanR_p_d/-2+(parseInt(params.add_storage_right)));
                    //   //   R_L_F_StoreGable.scale.set(params.leanR_p_w,roofMiddleHeight[params.b_l_t_r_pR][2*params.leanR_p_w],0);
                    // }
                    let wallTexture = horizontalTexture;
                    if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                    let R_L_F_StoreGableTexture = new THREE.TextureLoader();
                    let R_L_F_StoreGableT = R_L_F_StoreGableTexture.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                    R_L_F_StoreGable.material.map = texture;
                    R_L_F_StoreGable.material.bumpMap = texture;
                    R_L_F_StoreGable.material.bumpScale = 0.02
                    R_L_F_StoreGable.material.metalness = 1
                    R_L_F_StoreGable.material.roughness = 0.5
                    R_L_F_StoreGable.material.anisotropy = 10;
                    R_L_F_StoreGable.material.map.wrapS = THREE.RepeatWrapping;
                    R_L_F_StoreGable.material.map.wrapT = THREE.RepeatWrapping; 
                    if(params.p_v_w==true){
                    R_L_F_StoreGable.material.map.repeat.set(Math.round(((params.leanR_p_w/2)+(params.leanR_p_w/2/3))*2),1);
                    } else {
                    R_L_F_StoreGable.material.map.repeat.set(1,(roofMiddleHeight[params.b_l_t_r_pR][2*params.leanR_p_w]/1.5)*2);
                    }
                                       
                   let innerWall = RightLeanWalls.getObjectByName("doubleRightLeanFrontStorageGable")
                   innerWall.material.map = texture.clone();
                   innerWall.material.map.wrapS = THREE.RepeatWrapping;
                   innerWall.material.map.wrapT = THREE.RepeatWrapping;
                   innerWall.material.map.offset.x = params.p_w;
                   innerWall.material.map.offset.y = params.p_w;
                   innerWall.material.map.repeat.set( R_L_F_StoreGable.material.map.repeat.x, R_L_F_StoreGable.material.map.repeat.y);
                   innerWall.material.color.set(0xFFFFFF)
                   innerWall.material.map.needsUpdate = true 
                   innerWall.material.needsUpdate = true 
   
                })
                RightLeanWalls.add(R_L_F_StoreGable);
              }

              //Right Lean to Front double Gable
              if (RightLeanWalls.getObjectByName("doubleRightLeanFrontStorageGable")==undefined) {
                    
                let rightLeanFrontStorageGableClone = RightLeanWalls.getObjectByName("R_L_F_S_G");
              
                  if(RightLeanWalls.getObjectByName("R_L_F_S_G") != undefined){
                  let doubleRightLeanFrontStorageGable = rightLeanFrontStorageGableClone.clone();
                  
                  let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
                  doubleRightLeanFrontStorageGable = new THREE.Mesh(doubleRightLeanFrontStorageGable.geometry,leftDoubleMaterial);
                  doubleRightLeanFrontStorageGable.name = "doubleRightLeanFrontStorageGable"
                  doubleRightLeanFrontStorageGable.visible = (params.is_translusant==true)? false : rightLeanFrontStorageGableClone.visible
                  doubleRightLeanFrontStorageGable.scale.set(rightLeanFrontStorageGableClone.scale.x , rightLeanFrontStorageGableClone.scale.y , rightLeanFrontStorageGableClone.scale.z);
                  doubleRightLeanFrontStorageGable.position.set(rightLeanFrontStorageGableClone.position.x , rightLeanFrontStorageGableClone.position.y , rightLeanFrontStorageGableClone.position.z-wallDistance);
                  doubleRightLeanFrontStorageGable.rotation.set(rightLeanFrontStorageGableClone.rotation.x , rightLeanFrontStorageGableClone.rotation.y , rightLeanFrontStorageGableClone.rotation.z)
                  
                    RightLeanWalls.add(doubleRightLeanFrontStorageGable);
                  }
                }
          }                


          if(params.p_w_c_n == true){
              /* Right Lean To Front Wall WainScote*/
              if (const_var.b_t_M_R_t_R.getObjectByName("R_L_F_W_WS")!=undefined) {
                    let R_L_F_WallWainScot = const_var.b_t_M_R_t_R.getObjectByName("R_L_F_W_WS").clone();
                    let rtFwallPos = params.p_w/2 + params.leanR_p_w/2;
                    R_L_F_WallWainScot.visible = (params.p_b_c_b_r_f== "Close" && params.p_w_c_n == true)?true:false;
                    R_L_F_WallWainScot.position.x = rtFwallPos;
                    R_L_F_WallWainScot.position.z = params.leanR_p_d / 2 + 0.085;
                    R_L_F_WallWainScot.position.y = 1.475;        
                    R_L_F_WallWainScot.scale.set(params.leanR_p_w,3,1);
                    let wallTexture = horizontalTexture;
                    if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                    let R_L_F_WallWainScotTexture = new THREE.TextureLoader();
                    let R_L_F_WallWainScotT = R_L_F_WallWainScotTexture.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                    R_L_F_WallWainScot.material.morphNormals = true;
                    R_L_F_WallWainScot.material.morphTargets = true;              
                    R_L_F_WallWainScot.material.map = texture;
                    R_L_F_WallWainScot.material.bumpMap = texture;
                    R_L_F_WallWainScot.material.bumpScale = 0.02
                    R_L_F_WallWainScot.material.metalness = 1
                    R_L_F_WallWainScot.material.roughness = 0.5
                    R_L_F_WallWainScot.material.anisotropy = 10;
                    R_L_F_WallWainScot.material.map.wrapS = THREE.RepeatWrapping;
                    R_L_F_WallWainScot.material.map.wrapT = THREE.RepeatWrapping;
                    if(params.p_v_w==true){
                    R_L_F_WallWainScot.material.map.repeat.set(Math.round(((params.leanR_p_w/2)+(params.leanR_p_w/2/3))*2),1);
                    }else{
                    R_L_F_WallWainScot.material.map.repeat.set(1,(3/1.5)*2);
                    }
                    R_L_F_WallWainScot.material.map.needsUpdate = true; 
                    R_L_F_WallWainScot.material.needsUpdate = true; 
                })
                RightLeanWalls.add(R_L_F_WallWainScot);
                            
                if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
                  let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
                  wainscotTrim.name = "R_L_F_W_WS_jtrim";
                  wainscotTrim.material = wainscotTrim.material.clone();
                  wainscotTrim.material.color.setHex(wainscotTrimCalor)
                  wainscotTrim.visible = R_L_F_WallWainScot.visible
                  wainscotTrim.rotation.y = Math.PI/-2
                  wainscotTrim.scale.set(0.2,0.17, R_L_F_WallWainScot.scale.x);
                  wainscotTrim.position.set(R_L_F_WallWainScot.position.x,R_L_F_WallWainScot.position.y*2,R_L_F_WallWainScot.position.z+0.008);
                  RightLeanWalls.add(wainscotTrim);
                }
              }
              /* Right Lean To Front Storage Wall WainScote*/
              if (const_var.b_t_M_R_t_R.getObjectByName("R_L_F_W_WS")!=undefined) {
                let R_L_F_S_WallWainScot = const_var.b_t_M_R_t_R.getObjectByName("R_L_F_W_WS").clone();
                R_L_F_S_WallWainScot.name = "R_L_F_S_W_WS";
                let rtFwallPos = params.p_w/2 + params.leanR_p_w/2;
                R_L_F_S_WallWainScot.visible = (params.add_storage_check_right == true && params.p_w_c_n == true)?true:false;
                R_L_F_S_WallWainScot.position.x = rtFwallPos;
                R_L_F_S_WallWainScot.position.z = (params.leanR_p_d / -2 + (parseInt(params.add_storage_right))+0.085);
                R_L_F_S_WallWainScot.position.y = 1.475;        
                R_L_F_S_WallWainScot.scale.set(params.leanR_p_w,3,1);
    
                let wallTexture = horizontalTexture;
                if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                let R_L_F_S_WallWainScotTexture = new THREE.TextureLoader();
                let R_L_F_S_WallWainScotT = R_L_F_S_WallWainScotTexture.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                R_L_F_S_WallWainScot.material.morphNormals = true;
                R_L_F_S_WallWainScot.material.morphTargets = true;              
                R_L_F_S_WallWainScot.material.map = texture;
                R_L_F_S_WallWainScot.material.map.wrapS = THREE.RepeatWrapping;
                R_L_F_S_WallWainScot.material.map.wrapT = THREE.RepeatWrapping;
                if(params.p_v_w==true){
                R_L_F_S_WallWainScot.material.map.repeat.set(Math.round(((params.leanR_p_w/2)+(params.leanR_p_w/2/3))*2),1);
                }else{
                R_L_F_S_WallWainScot.material.map.repeat.set(1,(3/1.5)*2);
                }
                R_L_F_S_WallWainScot.material.map.needsUpdate = true; 
                R_L_F_S_WallWainScot.material.needsUpdate = true; 
                })
                RightLeanWalls.add(R_L_F_S_WallWainScot);

                if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
                  let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
                  wainscotTrim.name = "R_L_F_S_W_WS_jtrim";
                  wainscotTrim.material = wainscotTrim.material.clone();
                  wainscotTrim.material.color.setHex(wainscotTrimCalor)
                  wainscotTrim.visible = R_L_F_S_WallWainScot.visible
                  wainscotTrim.rotation.y = Math.PI/-2
                  wainscotTrim.scale.set(0.2,0.17, R_L_F_S_WallWainScot.scale.x);
                  wainscotTrim.position.set(R_L_F_S_WallWainScot.position.x,R_L_F_S_WallWainScot.position.y*2,R_L_F_S_WallWainScot.position.z+0.008);
                  RightLeanWalls.add(wainscotTrim);
                }
              }
              /* Right Lean To Right  Wall WainScote*/
              if (const_var.b_t_M_R_t_R.getObjectByName("R_L_R_W_WS")!=undefined) {
                    let R_L_R_WallWainScot = const_var.b_t_M_R_t_R.getObjectByName("R_L_R_W_WS").clone();
                    let r_p_w_scale = 0;
                    let r_p_w_position = 0;
             
                    if( params.add_right_front_lean_porch == true &&  params.add_right_back_lean_porch == false){
                         r_p_w_scale = params.leanR_p_w;
                         r_p_w_position = params.leanR_p_w/2;
                    }
                    if( params.add_right_front_lean_porch == false &&  params.add_right_back_lean_porch == true){
                     r_p_w_scale = params.leanR_p_w;
                     r_p_w_position = -params.leanR_p_w/2;
                    }
                    if( params.add_right_front_lean_porch == true &&  params.add_right_back_lean_porch == true){
                     r_p_w_scale = params.leanR_p_w*2;
                    }
                    R_L_R_WallWainScot.visible = (params.p_b_c_b_r== "Close" && params.p_w_c_n == true)?true:false;
                    R_L_R_WallWainScot.position.x = params.p_w / 2 + params.leanR_p_w + 0.075;
                    R_L_R_WallWainScot.position.z = r_p_w_position;
                    R_L_R_WallWainScot.position.y = 1.475;        
                    R_L_R_WallWainScot.scale.set(params.leanR_p_d+r_p_w_scale,3,1);
                    let wallTexture = horizontalTexture;
                    if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                    let R_L_R_WallWainScotTexture = new THREE.TextureLoader();
                    let R_L_R_WallWainScotT = R_L_R_WallWainScotTexture.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                    R_L_R_WallWainScot.material.map = texture;
                    R_L_R_WallWainScot.material.bumpMap = texture;
                    R_L_R_WallWainScot.material.bumpScale = 0.02
                    R_L_R_WallWainScot.material.metalness = 1
                    R_L_R_WallWainScot.material.roughness = 0.5
                    R_L_R_WallWainScot.material.anisotropy = 10;
                    R_L_R_WallWainScot.material.map.wrapS = THREE.RepeatWrapping;
                    R_L_R_WallWainScot.material.map.wrapT = THREE.RepeatWrapping;
                    R_L_R_WallWainScot.material.map.offset.x = params.leanR_p_w;
                    R_L_R_WallWainScot.material.map.offset.y = params.leanR_p_w;
                    if(params.p_v_w==true)
                    {
                        R_L_R_WallWainScot.material.map.repeat.set(((params.leanR_p_d/2)+(params.leanR_p_d/2/3))*2,1);
                        if( params.add_right_front_lean_porch == true &&  params.add_right_back_lean_porch == false){
                          R_L_R_WallWainScot.material.map.repeat.set(((params.leanR_p_d/2)+(params.leanR_p_d/2/3)+(params.leanR_p_w/2))*2,1);
                        } else if( params.add_right_front_lean_porch == false &&  params.add_right_back_lean_porch == true){
                          R_L_R_WallWainScot.material.map.repeat.set(((params.leanR_p_d/2)+(params.leanR_p_d/2/3)+(params.leanR_p_w/2))*2,1);
                         } else if( params.add_right_front_lean_porch == true &&  params.add_right_back_lean_porch == true){
                          R_L_R_WallWainScot.material.map.repeat.set(((params.leanR_p_d/2)+(params.leanR_p_d/2/3)+(params.leanR_p_w/2))*2,1);
                         }
                    }else
                    {
                        R_L_R_WallWainScot.material.map.repeat.set(1,(3/1.5)*2);
                    }
                    R_L_R_WallWainScot.material.map.needsUpdate = true; 
                    R_L_R_WallWainScot.material.needsUpdate = true; 
                })
                RightLeanWalls.add(R_L_R_WallWainScot);
                
                if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
                  let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
                  wainscotTrim.name = "R_L_R_W_WS_jtrim";
                  wainscotTrim.material = wainscotTrim.material.clone();
                  wainscotTrim.material.color.setHex(wainscotTrimCalor)
                  wainscotTrim.visible = R_L_R_WallWainScot.visible
                  wainscotTrim.scale.set(0.2,0.17, R_L_R_WallWainScot.scale.x);
                  wainscotTrim.position.set(R_L_R_WallWainScot.position.x+0.008,R_L_R_WallWainScot.position.y*2,R_L_R_WallWainScot.position.z);
                  RightLeanWalls.add(wainscotTrim);
                }
              }
                
            /* Right Lean To Right Storage Wall WainScote*/
              if (const_var.b_t_M_R_t_R.getObjectByName("R_L_R_S_W_WS")!= undefined) {
                let R_L_R_S_WallWainScot = const_var.b_t_M_R_t_R.getObjectByName("R_L_R_S_W_WS").clone();
                R_L_R_S_WallWainScot.visible = ( params.add_storage_check_right == true && params.p_w_c_n == true)?true:false;
                R_L_R_S_WallWainScot.position.x = params.p_w / 2 + params.leanR_p_w +0.07;
                R_L_R_S_WallWainScot.position.z = (params.leanR_p_d/-2)+(parseInt(params.add_storage_right))/2
                R_L_R_S_WallWainScot.position.y = 1.475;        
                R_L_R_S_WallWainScot.scale.set((parseInt(params.add_storage_right)),3,1);
                let wallTexture = horizontalTexture;
                if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                let R_L_R_S_WallWainScotTexture = new THREE.TextureLoader();
                let R_L_R_S_WallWainScotT = R_L_R_S_WallWainScotTexture.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                R_L_R_S_WallWainScot.material.map = texture;
                R_L_R_S_WallWainScot.material.bumpMap = texture;
                R_L_R_S_WallWainScot.material.bumpScale = 0.02
                R_L_R_S_WallWainScot.material.metalness = 1
                R_L_R_S_WallWainScot.material.roughness = 0.5
                R_L_R_S_WallWainScot.material.anisotropy = 10;
                R_L_R_S_WallWainScot.material.map.wrapS = THREE.RepeatWrapping;
                R_L_R_S_WallWainScot.material.map.wrapT = THREE.RepeatWrapping;
                R_L_R_S_WallWainScot.material.map.offset.x = params.leanR_p_w;
                R_L_R_S_WallWainScot.material.map.offset.y = params.leanR_p_w;
                if(params.p_v_w==true)
                {
                    R_L_R_S_WallWainScot.material.map.repeat.set(Math.round(((((parseInt(params.add_storage_right))/2)+((parseInt(params.add_storage_right))/2/3))*2)),1);
                }else
                {
                    R_L_R_S_WallWainScot.material.map.repeat.set(1,(3/1.5)*2);
                }
                R_L_R_S_WallWainScot.material.map.needsUpdate = true; 
                R_L_R_S_WallWainScot.material.needsUpdate = true; 
              })
              RightLeanWalls.add(R_L_R_S_WallWainScot);
                              
              if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
                let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
                wainscotTrim.name = "R_L_R_S_W_WS_jtrim";
                wainscotTrim.material = wainscotTrim.material.clone();
                wainscotTrim.material.color.setHex(wainscotTrimCalor)
                wainscotTrim.visible = R_L_R_S_WallWainScot.visible
                wainscotTrim.scale.set(0.2,0.17, R_L_R_S_WallWainScot.scale.x);
                wainscotTrim.position.set(R_L_R_S_WallWainScot.position.x+0.008,R_L_R_S_WallWainScot.position.y*2,R_L_R_S_WallWainScot.position.z);
                RightLeanWalls.add(wainscotTrim);
              }
              }

              if (const_var.b_t_M_R_t_R.getObjectByName("R_L_L_S_W_WS")!= undefined) {
                let R_L_L_S_WallWainScot = const_var.b_t_M_R_t_R.getObjectByName("R_L_L_S_W_WS").clone();
                R_L_L_S_WallWainScot.visible = ( params.add_storage_check_right == true && params.p_w_c_n == true && params.p_l_w != "Close")?true:false;
                R_L_L_S_WallWainScot.position.x = params.p_w / 2-0.075;
                R_L_L_S_WallWainScot.position.z = (params.leanR_p_d/-2)+(parseInt(params.add_storage_right))/2
                R_L_L_S_WallWainScot.position.y = 1.475;        
                R_L_L_S_WallWainScot.scale.set((parseInt(params.add_storage_right)),3,1);
                let wallTexture = horizontalTexture;
                if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                let R_L_R_L_WallWainScotTexture = new THREE.TextureLoader();
                let R_L_R_L_WallWainScotT = R_L_R_L_WallWainScotTexture.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                R_L_L_S_WallWainScot.material.map = texture;
                R_L_L_S_WallWainScot.material.bumpMap = texture;
                R_L_L_S_WallWainScot.material.bumpScale = 0.02
                R_L_L_S_WallWainScot.material.metalness = 1
                R_L_L_S_WallWainScot.material.roughness = 0.5
                R_L_L_S_WallWainScot.material.anisotropy = 10;
                R_L_L_S_WallWainScot.material.map.wrapS = THREE.RepeatWrapping;
                R_L_L_S_WallWainScot.material.map.wrapT = THREE.RepeatWrapping;
                R_L_L_S_WallWainScot.material.map.offset.x = params.leanR_p_w;
                R_L_L_S_WallWainScot.material.map.offset.y = params.leanR_p_w;
                if(params.p_v_w==true)
                {
                    R_L_L_S_WallWainScot.material.map.repeat.set(Math.round(((((parseInt(params.add_storage_right))/2)+((parseInt(params.add_storage_right))/2/3))*2)),1);
                }else
                {
                    R_L_L_S_WallWainScot.material.map.repeat.set(1,(3/1.5)*2);
                }
                R_L_L_S_WallWainScot.material.map.needsUpdate = true; 
                R_L_L_S_WallWainScot.material.needsUpdate = true; 
              })
              RightLeanWalls.add(R_L_L_S_WallWainScot);

              if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
                let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
                wainscotTrim.name = "R_L_L_S_W_WS_jtrim";
                wainscotTrim.material = wainscotTrim.material.clone();
                wainscotTrim.material.color.setHex(wainscotTrimCalor)
                wainscotTrim.rotation.y = Math.PI
                wainscotTrim.visible = R_L_L_S_WallWainScot.visible
                wainscotTrim.scale.set(0.2,0.17, R_L_L_S_WallWainScot.scale.x);
                wainscotTrim.position.set(R_L_L_S_WallWainScot.position.x-0.008,R_L_L_S_WallWainScot.position.y*2,R_L_L_S_WallWainScot.position.z);
                RightLeanWalls.add(wainscotTrim);
              }
              }
                /* Right Lean To Back Wall WainScote*/
                  if (const_var.b_t_M_R_t_R.getObjectByName("R_L_B_W_WS")!=undefined) {
                    let R_L_B_WallWainScot = const_var.b_t_M_R_t_R.getObjectByName("R_L_B_W_WS").clone();
                    let rtBwallPos = params.p_w/2 + params.leanR_p_w/2;
                    R_L_B_WallWainScot.visible = ((params.p_b_c_b_r_b == "Close" && params.p_w_c_n == true) || (params.add_storage_check_right == true && params.p_w_c_n == true))?true:false;
                    R_L_B_WallWainScot.position.x = rtBwallPos;
                    R_L_B_WallWainScot.position.z = params.leanR_p_d / -2 - 0.085;
                    R_L_B_WallWainScot.position.y = 1.475;
                    R_L_B_WallWainScot.scale.set(params.leanR_p_w,3,1);
                    let wallTexture = horizontalTexture;
                    if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
                    let R_L_B_WallWainScotTexture = new THREE.TextureLoader();
                    let R_L_B_WallWainScotT = R_L_B_WallWainScotTexture.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                    R_L_B_WallWainScot.material.map = texture;
                    R_L_B_WallWainScot.material.bumpMap = texture;
                    R_L_B_WallWainScot.material.bumpScale = 0.02
                    R_L_B_WallWainScot.material.metalness = 1
                    R_L_B_WallWainScot.material.roughness = 0.5
                    R_L_B_WallWainScot.material.anisotropy = 10;
                    R_L_B_WallWainScot.material.map.wrapS = THREE.RepeatWrapping;
                    R_L_B_WallWainScot.material.map.wrapT = THREE.RepeatWrapping;
                    R_L_B_WallWainScot.material.map.offset.x = params.leanR_p_w;
                    R_L_B_WallWainScot.material.map.offset.y = params.leanR_p_w;
                    if(params.p_v_w==true)
                    {
                        R_L_B_WallWainScot.material.map.repeat.set(Math.round(((params.leanR_p_w/2)+(params.leanR_p_w/2/3))*2),1);
                    }else
                    {
                        R_L_B_WallWainScot.material.map.repeat.set(1,(3/1.5)*2);
                    } 
                    R_L_B_WallWainScot.material.map.needsUpdate = true;       
                    R_L_B_WallWainScot.material.needsUpdate = true;       
                })
                RightLeanWalls.add(R_L_B_WallWainScot);
                
                 if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
                  let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
                  wainscotTrim.name = "R_L_B_W_WS_jtrim";
                  wainscotTrim.material = wainscotTrim.material.clone();
                  wainscotTrim.material.color.setHex(wainscotTrimCalor)
                  wainscotTrim.visible = R_L_B_WallWainScot.visible
                  wainscotTrim.rotation.y = Math.PI/2
                  wainscotTrim.scale.set(0.2,0.17, R_L_B_WallWainScot.scale.x);
                  wainscotTrim.position.set(R_L_B_WallWainScot.position.x,R_L_B_WallWainScot.position.y*2,R_L_B_WallWainScot.position.z-0.008);
                  RightLeanWalls.add(wainscotTrim);
                }
              }
  
          }              


                   /*code for transperant whole Right Lean-To Walls and walls Count */
                   let wallVal; 

                   const_var.scene.children.forEach(function(Group) {
                    if ("RightLeanWalls" == Group.name) { 
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
                  
                  if ( params.add_storage_check_right ) {
                    if (params.p_b_c_b_r != "Open") closedSideWalls = (closedSideWalls - 1);
                    if (params.p_b_c_b_r == "Close") fullyClosedSideWalls = (fullyClosedSideWalls - 1);
                  }
                  

            //  //New Svg indecator for all dirction walls
            //  const loader = new SVGLoader();
            //  const url_front = process.env.REACT_APP_BASE_URL+frontTitleUrl;
            //  loader.load(
            //      // resource URL
            //      url_front,
            //      function (data) {
 
            //          const paths = data.paths;
            //          const group = new THREE.Group();
            //          group.name = "RLfrontWallName";
 
            //          for (let i = 0; i < paths.length; i++) {
 
            //              const path = paths[i];
 
            //              const material = new THREE.MeshBasicMaterial({
            //                  color: const_var.wallNameColor,
            //                  side: THREE.BackSide,
            //                  depthWrite: true
            //              });
 
            //              const shapes = SVGLoader.createShapes(path);
 
            //              for (let j = 0; j < shapes.length; j++) {
 
            //                  const shape = shapes[j];
            //                  const geometry = new THREE.ShapeGeometry(shape);
            //                  const mesh = new THREE.Mesh(geometry, material);
            //                  mesh.scale.setScalar(0.05)
            //                  mesh.rotateZ(-Math.PI)
            //                  mesh.rotateY(-Math.PI)
 
            //                  mesh.position.set((params.p_w/2),0.6,params.leanR_p_d/2 + 0.1)
            //                  group.add(mesh);
            //                  group.visible = params.add_right_lean;
 
            //              }
 
            //          }
 
            //          RightLeanWalls.add(group);
 
            //      },
            //     //  function (xhr) {
 
            //     //      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
 
            //     //  },
            //     //  function (error) {
 
            //     //      console.log('An error happened');
 
            //     //  }
            //  );
 
            //  const url_side = process.env.REACT_APP_BASE_URL+sideTitleUrl;
 
            //  loader.load(
            //      // resource URL
            //      url_side,
            //      function (data) {
 
            //          const paths = data.paths;
            //          const group = new THREE.Group();
            //          group.name = "RLsideWallName";
 
            //          for (let i = 0; i < paths.length; i++) {
 
            //              const path = paths[i];
 
            //              const material = new THREE.MeshBasicMaterial({
            //                  color: const_var.wallNameColor,
            //                  side: THREE.BackSide,
            //                  depthWrite: true
            //              });
 
            //              const shapes = SVGLoader.createShapes(path);
 
            //              for (let j = 0; j < shapes.length; j++) {
 
            //                  const shape = shapes[j];
            //                  const geometry = new THREE.ShapeGeometry(shape);
            //                  const mesh = new THREE.Mesh(geometry, material);
            //                  mesh.scale.setScalar(0.05)
            //                  mesh.rotateZ(-Math.PI)
            //                  mesh.rotateY(Math.PI / 2)
 
            //                  mesh.position.set((params.p_w/2)+(params.leanR_p_w)+0.1,0.6,params.leanR_p_d/2 + 0.1)
            //                  group.add(mesh);
            //                  group.visible = params.add_right_lean;
 
            //              }
 
            //          }
 
            //          RightLeanWalls.add(group);
 
            //      },
            //     //  function (xhr) {
 
            //     //      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
 
            //     //  },
            //     //  function (error) {
 
            //     //      console.log('An error happened');
 
            //     //  }
            //  );
            //  const url_back = process.env.REACT_APP_BASE_URL+backTitleUrl;
 
            //  loader.load(
            //      // resource URL
            //      url_back,
            //      function (data) {
 
            //          const paths = data.paths;
            //          const group = new THREE.Group();
            //          group.name = "RLbackWallName";
 
            //          for (let i = 0; i < paths.length; i++) {
 
            //              const path = paths[i];
 
            //              const material = new THREE.MeshBasicMaterial({
            //                  color: const_var.wallNameColor,
            //                  side: THREE.BackSide,
            //                  depthWrite: true
            //              });
 
            //              const shapes = SVGLoader.createShapes(path);
 
            //              for (let j = 0; j < shapes.length; j++) {
 
            //                  const shape = shapes[j];
            //                  const geometry = new THREE.ShapeGeometry(shape);
            //                  const mesh = new THREE.Mesh(geometry, material);
            //                  mesh.scale.setScalar(0.05)
            //                  mesh.rotateZ(Math.PI)
            //                  mesh.rotateY(-Math.PI * 2)
            //                  mesh.position.set((params.p_w/2)+(params.leanR_p_w),0.6,params.leanR_p_d/-2 + 0.1)
            //                  group.add(mesh);
            //                  group.visible = params.add_right_lean;
            //              }
 
            //          }
 
            //          RightLeanWalls.add(group);
 
            //      },
            //     //  function (xhr) {
 
            //     //      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
 
            //     //  },
            //     //  function (error) {
 
            //     //      console.log('An error happened');
 
            //     //  }
            //  );
            //  if (const_var.entry_points.length>0) {
            //    DoorCSG(); 
            //  }
      }                 
      // wallNameInBackgroundImage("rightLean")
      // console.log(const_var.crmSetting.is_show_background,"const_var.crmSetting.is_show_background right lean 00");

      const_var.rlClosedSideWalls = closedSideWalls;
      const_var.rlClosedEndWalls = closedEndWalls;
      const_var.rlFullyEnclosedWalls = fullyClosedEndWalls+fullyClosedSideWalls;
      const_var.wallsData.rightLean.closedSideWalls = closedSideWalls;
      const_var.wallsData.rightLean.closedEndWalls = closedEndWalls;
      const_var.wallsData.rightLean.p_b_c_b_r = params.p_b_c_b_r;
      const_var.wallsData.rightLean.p_b_c_b_r_f = params.p_b_c_b_r_f;
      const_var.wallsData.rightLean.p_b_c_b_r_b = params.p_b_c_b_r_b;
      
    /*Alignment For Right Leanto */
    if (params.leantoAlignmentRight=="1") {
       RightLeanWalls.position.z = 0;
    }
    if (params.leantoAlignmentRight=="2") {
        RightLeanWalls.position.z = params.p_d/2-params.leanR_p_d/2;
    }
    if (params.leantoAlignmentRight=="3") {
        RightLeanWalls.position.z = -params.p_d/2+params.leanR_p_d/2;
    }
    if ( params.isShowCenter == true ) {
      RightLeanWalls.visible = false
    }

}