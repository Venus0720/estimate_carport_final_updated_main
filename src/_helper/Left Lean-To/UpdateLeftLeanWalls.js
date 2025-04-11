import * as THREE from "three";
import verticalTexture from '../../assets/images/imgTextures/buildingImages/verticalTexture.jpeg';
import horizontalTexture from '../../assets/images/imgTextures/buildingImages/horizantalTexture.jpeg';
import { params, const_var, } from '../../redux/reducers/reducer';
import frontTitleUrl from "../../assets/walls-names/left-lean-front.svg"
import backTitleUrl from "../../assets/walls-names/left-lean-back.svg"
import sideTitleUrl from "../../assets/walls-names/Left-Lean-Left.svg"

import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader"
import { showWallName } from "../../redux/reducers/utils";
// import { DoorCSG } from '../../redux/reducers/pricingReducer';

export const updateLeftLeanToWalls = () => {

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

    if ("undefined" != typeof const_var.scene.getObjectByName("LeftLeanWalls")) const_var.scene.remove(const_var.scene.getObjectByName("LeftLeanWalls"));

    const LeftLeanWalls = new THREE.Group();
    LeftLeanWalls.name = "LeftLeanWalls";
    const_var.scene.add( LeftLeanWalls);

    let closedSideWalls = 0; let closedEndWalls = 0;
    let fullyClosedSideWalls = 0; let fullyClosedEndWalls = 0;

    let addDoorIntersectWall = function(height, pHeight, wall) {
        const nWall =  wall.clone();
        nWall.position.y = height - height/2 - pHeight/2;
        if (nWall.visible === true) nWall.scale.y =  (height - pHeight);
        nWall.visible = false;
        LeftLeanWalls.add(nWall);
        wall.name +=1;
        const_var.wallsForCut[wall.name] = wall.clone();
    }

    showWallName("left")

if(params.add_left_lean == true){   
    
    /*Left Lean To LefT Wall */
    if (const_var.b_t_M_L_t_L.getObjectByName("L_L_L_W")!=undefined) {
       var   LeftLeanLeftWall = const_var.b_t_M_L_t_L.getObjectByName("L_L_L_W").clone();

       var textureImg = horizontalTexture;
       if (params.p_v_w==true){
           textureImg = verticalTexture;
       } else {
           textureImg = horizontalTexture;
       }
       LeftLeanLeftWall.visible = (params.p_b_c_b_l != "Open")?true:false;
       LeftLeanLeftWall.position.x = (params.p_w / -2 - params.lean_p_w)- 0.03;
       
       let l_p_w_scale = 0;
       let l_p_w_position = 0;

       if( params.add_left_front_lean_porch == true &&  params.add_left_back_lean_porch == false){
            l_p_w_scale = params.lean_p_w;
            l_p_w_position = params.lean_p_w/2;
       }
       if( params.add_left_front_lean_porch == false &&  params.add_left_back_lean_porch == true){
        l_p_w_scale = params.lean_p_w;
        l_p_w_position = -params.lean_p_w/2;
       }
       if( params.add_left_front_lean_porch == true &&  params.add_left_back_lean_porch == true){
        l_p_w_scale = params.lean_p_w*2;
       }


        var LwH = params.lean_p_h;
        var wP = params.lean_p_h - LwH/2;
         LeftLeanLeftWall.position.y = wP;              
         LeftLeanLeftWall.scale.set(params.lean_p_d,LwH,1);             
        switch(params.p_b_c_b_l)
        {
            case "One_Fourth_Close":
                LwH = LwH/4;
                wP = params.lean_p_h - LwH/2;
                break;
            case "Half_Close":
                LwH = LwH/2;
                wP = params.lean_p_h - LwH/2;
                break;                  
            case "Three_Fourth_Close":
                LwH = LwH * 3/4;
                wP = params.lean_p_h - LwH/2;
                break;
            case "Extended Gable":
                break;
            case "Gable":
                break;
                case "Open":
            case "Close":
                LwH = params.lean_p_h;
                wP = params.lean_p_h - LwH/2;
                break;
            default:
                if(params.p_r_s == "1"){
                    LwH = (Math.abs(params.p_b_c_b_l.replace(/\D/g, "")) * 3)+0.3;
                    wP = params.lean_p_h - LwH/2;
                }else{
                LwH = (Math.abs(params.p_b_c_b_l.replace(/\D/g, "")) * 3);
                wP = params.lean_p_h - LwH/2;
                }
                break;
        }
          if(params.p_r_s == "1"){          
              LeftLeanLeftWall.position.y = wP-0.15;
              LeftLeanLeftWall.position.z =  l_p_w_position;                
              LeftLeanLeftWall.scale.set(params.lean_p_d+l_p_w_scale,LwH-0.3,1);
         }else{
              LeftLeanLeftWall.position.y = wP; 
              LeftLeanLeftWall.position.z = l_p_w_position;         
              LeftLeanLeftWall.scale.set(params.lean_p_d+l_p_w_scale,LwH,1);
         }       var WallLoader = new THREE.TextureLoader();
         var  LWwallTexture = WallLoader.load(process.env.REACT_APP_BASE_URL+textureImg , function(wallTexture) {
         LWwallTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
           LeftLeanLeftWall.material.map = wallTexture;
           LeftLeanLeftWall.material.bumpMap = wallTexture;
           LeftLeanLeftWall.material.bumpScale = 0.02
           LeftLeanLeftWall.material.metalness = 1
           LeftLeanLeftWall.material.roughness = 0.5
           LeftLeanLeftWall.material.anisotropy = 10;
           LeftLeanLeftWall.material.map.wrapS = THREE.RepeatWrapping;
           LeftLeanLeftWall.material.map.wrapT = THREE.RepeatWrapping;
           LeftLeanLeftWall.material.map.offset.x = params.lean_p_w;
           LeftLeanLeftWall.material.map.offset.y = params.lean_p_w;
          if(params.p_v_w==true)
         {
              LeftLeanLeftWall.material.map.repeat.set(((params.lean_p_d/2)+(params.lean_p_d/2/3)-0.1)*2,1);
              if( params.add_left_front_lean_porch == true &&  params.add_left_back_lean_porch == false){
                LeftLeanLeftWall.material.map.repeat.set(((params.lean_p_d/2)+(params.lean_p_d/2/3)+(params.lean_p_w/2)+(params.lean_p_w/2/3))*2,1);
              } else if( params.add_left_front_lean_porch == false &&  params.add_left_back_lean_porch == true){
                LeftLeanLeftWall.material.map.repeat.set(((params.lean_p_d/2)+(params.lean_p_d/2/3)+(params.lean_p_w/2)+(params.lean_p_w/2/3))*2,1);
               } else if( params.add_left_front_lean_porch == true &&  params.add_left_back_lean_porch == true){
                LeftLeanLeftWall.material.map.repeat.set(((params.lean_p_d/2)+(params.lean_p_d/2/3)+(params.lean_p_w/2)+(params.lean_p_w/2/3))*2,1);
               }
         }else
         {
              LeftLeanLeftWall.material.map.repeat.set(1,Math.round((LwH/1.5)*2));
         }

         LeftLeanLeftWall.material.map.needsUpdate = true;
         LeftLeanLeftWall.material.needsUpdate = true;
                                                                                      
        let innerWall = LeftLeanWalls.getObjectByName("L_L_L_W_inner")
        innerWall.material.map = wallTexture.clone();
        innerWall.material.map.wrapS = THREE.RepeatWrapping;
        innerWall.material.map.wrapT = THREE.RepeatWrapping;
        innerWall.material.map.offset.x = params.p_w;
        innerWall.material.map.offset.y = params.p_w;
        innerWall.material.map.repeat.set( LeftLeanLeftWall.material.map.repeat.x, LeftLeanLeftWall.material.map.repeat.y);
        innerWall.material.color.set(0xFFFFFF)
        innerWall.material.map.needsUpdate = true;
        innerWall.material.needsUpdate = true;
	
        }
        )

        if (params.p_b_c_b_l !== "Close") {
            addDoorIntersectWall(params.lean_p_h, LwH, LeftLeanLeftWall);
        }
        LeftLeanWalls.add(  LeftLeanLeftWall);

        if (const_var.b_t_M_L.getObjectByName("jTrim")!=undefined && params.p_b_c_b_l !== "Close" && params.p_b_c_b_l !== "Open" && params.p_j_t == true) {
            let jTrim = const_var.b_t_M_L.getObjectByName("jTrim").clone();
            jTrim.name = "L_L_L_W_jtrim";
            jTrim.material = jTrim.material.clone();
            jTrim.material.color.setHex(jTrimCalor)
            jTrim.visible = true
            // jTrim.rotation.y = Math.PI/-2
            jTrim.scale.set(0.14+(jTrimAlignment),0.12, LeftLeanLeftWall.scale.x);
            jTrim.position.set(params.p_w / -2 - params.lean_p_w + 0.025+(jTrimAlignment/2),LeftLeanLeftWall.position.y-(LeftLeanLeftWall.scale.y/2)-0.01,LeftLeanLeftWall.position.z);
            if(params.add_storage_check){
                jTrim.scale.z = params.lean_p_d-params.add_storage;
                jTrim.position.z= params.add_storage/2;
                if(params.add_left_front_lean_porch == true){
                    jTrim.scale.z = params.lean_p_d-params.add_storage+params.leanF_p_w;
                    jTrim.position.z= params.add_storage/2+(params.leanF_p_w/2);
                }
                if(params.add_left_back_lean_porch == true){
                    let jTrim2 = const_var.b_t_M_L.getObjectByName("jTrim").clone();
                    jTrim2.scale.set(jTrim.scale.x,jTrim.scale.y, params.leanB_p_w);
                    jTrim2.position.set(jTrim.position.x,jTrim.position.y,(params.lean_p_d/-2)-(params.leanB_p_w/2));
                    jTrim2.visible = true;
                    jTrim2.name = "L_L_L_W1_jtrim";
                    jTrim2.material = jTrim2.material.clone();
                    LeftLeanWalls.add(jTrim2);
                }
            }
            LeftLeanWalls.add(jTrim);
          }
    }

        //Left Lean To Double Left Wall
        if (LeftLeanWalls.getObjectByName("L_L_L_W_inner")==undefined) {
          
            let LeftLeanLeftWallClone = params.p_b_c_b_l !== "Close" ? LeftLeanWalls.getObjectByName("L_L_L_W1"): LeftLeanWalls.getObjectByName("L_L_L_W");
  
            if(LeftLeanWalls.getObjectByName("L_L_L_W") != undefined){
            let doubleLeftLeanLeftWall = LeftLeanLeftWallClone.clone();
            
            let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
            doubleLeftLeanLeftWall = new THREE.Mesh(doubleLeftLeanLeftWall.geometry,leftDoubleMaterial);
            doubleLeftLeanLeftWall.name = "L_L_L_W_inner"
            doubleLeftLeanLeftWall.visible = (params.is_translusant==true)? false : LeftLeanLeftWallClone.visible
            doubleLeftLeanLeftWall.scale.set(LeftLeanLeftWallClone.scale.x , LeftLeanLeftWallClone.scale.y , LeftLeanLeftWallClone.scale.z);
            doubleLeftLeanLeftWall.position.set(LeftLeanLeftWallClone.position.x+wallDistance , LeftLeanLeftWallClone.position.y , LeftLeanLeftWallClone.position.z);
            doubleLeftLeanLeftWall.rotation.set(LeftLeanLeftWallClone.rotation.x , LeftLeanLeftWallClone.rotation.y , LeftLeanLeftWallClone.rotation.z)

            LeftLeanWalls.add(doubleLeftLeanLeftWall);

            const_var.wallsForCut.L_L_L_W_inner = doubleLeftLeanLeftWall.clone();
            }
          }
  
     

   /*Left Lean To Front Wall */
   if (const_var.b_t_M_L_t_L.getObjectByName("L_L_F_W")!=undefined) {
    var  LeftLeanFrontWall = const_var.b_t_M_L_t_L.getObjectByName("L_L_F_W").clone();

    var textureImg = horizontalTexture;
    if (params.p_v_w==true){
        textureImg = verticalTexture;
    } else {
        textureImg = horizontalTexture;
    }
    var ltFwallPos = params.p_w/-2 - params.lean_p_w/2; 
    LeftLeanFrontWall.visible = (params.p_b_c_b_l_f!="Open")?true:false;
    LeftLeanFrontWall.position.x = ltFwallPos;
                  


       let f_p_w_position = 0;

    //    if( params.add_left_front_lean_porch == true){
    //         f_p_w_position = params.lean_p_w;
    //    }
    
   
    var FwH = params.lean_p_h;
    var wP = params.lean_p_h - FwH/2;
    LeftLeanFrontWall.position.y = wP;  
    //LeftLeanFrontWall.position.z = params.lean_p_d / 2 + 0.06 ;  
    LeftLeanFrontWall.position.z = params.lean_p_d / 2 +0.045 ;            
    LeftLeanFrontWall.scale.set(params.lean_p_w,FwH,1);
    
    switch(params.p_b_c_b_l_f)
    {
        case "One_Fourth_Close":
            FwH = FwH/4;
            wP = params.lean_p_h - FwH/2;
            break;
        case "Half_Close":
            FwH = FwH/2;
            wP = params.lean_p_h - FwH/2;
            break;                  
        case "Three_Fourth_Close":
            FwH = FwH * 3/4;
            wP = params.lean_p_h - FwH/2;
            break;
        case "Extended Gable":
            FwH = FwH/6;
            wP = params.lean_p_h - FwH/2;
            break;
        case "Gable":
            FwH = 0.15;
            wP = params.lean_p_h - FwH/2; 
            break;
            case "Open":
        case "Close":
            FwH = params.lean_p_h;
            wP = params.lean_p_h - FwH/2;
            break;
        default:
            FwH = Math.abs(params.p_b_c_b_l_f.replace(/\D/g, "")) * 3;
            wP = params.lean_p_h - FwH/2;               
            break;
    }
    LeftLeanFrontWall.position.y = wP;              
    LeftLeanFrontWall.scale.set(params.lean_p_w,FwH,1);

    let repeatVal = (repeatRotation[params.p_h] != undefined && params.p_b_c_b_l_f == "Close" && params.p_r_s != "1") ? repeatRotation[params.p_h][params.lean_p_h] : Math.round((FwH/1.5)*2)

    var FWallLoader = new THREE.TextureLoader();
    var  aLWwallTexture = FWallLoader.load(process.env.REACT_APP_BASE_URL+textureImg , function(wallTexture1) {
    aLWwallTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
    LeftLeanFrontWall.material.morphNormals = true;
    LeftLeanFrontWall.material.morphTargets = true;                         
    LeftLeanFrontWall.material.map = wallTexture1;
    LeftLeanFrontWall.material.bumpMap = wallTexture1;
    LeftLeanFrontWall.material.bumpScale = 0.02
    LeftLeanFrontWall.material.metalness = 1
    LeftLeanFrontWall.material.roughness = 0.5
    LeftLeanFrontWall.material.anisotropy = 10;
    LeftLeanFrontWall.material.map.wrapS = THREE.RepeatWrapping;
    LeftLeanFrontWall.material.map.wrapT = THREE.RepeatWrapping;
    LeftLeanFrontWall.material.map.offset.x = params.lean_p_w;
    LeftLeanFrontWall.material.map.offset.y = params.lean_p_w;
    if (params.p_v_w==true) {
        LeftLeanFrontWall.material.map.repeat.set(Math.round(((params.lean_p_w/2)+(params.lean_p_w/2/3))*2),1);
    } else {
        LeftLeanFrontWall.material.map.repeat.set(1,repeatVal);
    }

    LeftLeanFrontWall.material.map.needsUpdate = true;
    LeftLeanFrontWall.material.needsUpdate = true;
                                                                                          
    let innerWall = LeftLeanWalls.getObjectByName("L_L_F_W_inner")
    innerWall.material.map = wallTexture1.clone();
    innerWall.material.map.wrapS = THREE.RepeatWrapping;
    innerWall.material.map.wrapT = THREE.RepeatWrapping;
    innerWall.material.map.offset.x = params.p_w;
    innerWall.material.map.offset.y = params.p_w;
    innerWall.material.map.rotation = Math.PI
    innerWall.material.map.repeat.set( LeftLeanFrontWall.material.map.repeat.x, LeftLeanFrontWall.material.map.repeat.y);
    innerWall.material.color.set(0xFFFFFF)
    innerWall.material.map.needsUpdate = true 
    innerWall.material.needsUpdate = true 

   })

    if (params.p_b_c_b_l_f !== "Close") {
        addDoorIntersectWall(params.lean_p_h, FwH, LeftLeanFrontWall);
    }
    LeftLeanWalls.add( LeftLeanFrontWall);

    if (const_var.b_t_M_L.getObjectByName("jTrim")!=undefined && params.p_b_c_b_l_f !== "Close" && params.p_b_c_b_l_f !== "Open" && params.p_j_t_end == true) {
        let jTrim = const_var.b_t_M_L.getObjectByName("jTrim").clone();
        jTrim.name = "L_L_F_W_jtrim";
        jTrim.material = jTrim.material.clone();
        jTrim.material.color.setHex(jTrimCalor)
        jTrim.visible = true
        jTrim.rotation.y = Math.PI/2
        jTrim.scale.set(0.14+(jTrimAlignment),0.12, LeftLeanFrontWall.scale.x+0.07);
        jTrim.position.set(LeftLeanFrontWall.position.x+0.1,LeftLeanFrontWall.position.y-(LeftLeanFrontWall.scale.y/2)-0.01,(params.lean_p_d/2)+0.005-(jTrimAlignment/2));
        LeftLeanWalls.add(jTrim);
      }

   }

    //Left Lean To Double front Wall
    if (LeftLeanWalls.getObjectByName("L_L_F_W_inner")==undefined) {
          
      let LeftLeanFrontWallClone = (params.p_b_c_b_l_f !== "Close") ? LeftLeanWalls.getObjectByName("L_L_F_W1") : LeftLeanWalls.getObjectByName("L_L_F_W");
  
      if(LeftLeanFrontWallClone != undefined){
      let doubleLeftLeanFrontWall = LeftLeanFrontWallClone.clone();
      
      let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
      doubleLeftLeanFrontWall = new THREE.Mesh(doubleLeftLeanFrontWall.geometry,leftDoubleMaterial);
      doubleLeftLeanFrontWall.name = "L_L_F_W_inner"
      doubleLeftLeanFrontWall.visible = (params.is_translusant==true)? false : LeftLeanFrontWallClone.visible
      doubleLeftLeanFrontWall.scale.set(LeftLeanFrontWallClone.scale.x , LeftLeanFrontWallClone.scale.y , LeftLeanFrontWallClone.scale.z);
      doubleLeftLeanFrontWall.position.set(LeftLeanFrontWallClone.position.x , LeftLeanFrontWallClone.position.y , LeftLeanFrontWallClone.position.z-wallDistance);
      doubleLeftLeanFrontWall.rotation.set(LeftLeanFrontWallClone.rotation.x , LeftLeanFrontWallClone.rotation.y , LeftLeanFrontWallClone.rotation.z)
      
        LeftLeanWalls.add(doubleLeftLeanFrontWall);

        const_var.wallsForCut.L_L_F_W_inner = doubleLeftLeanFrontWall.clone();
      }
    }
   
    /*Left Lean To Back Wall */
   if (const_var.b_t_M_L_t_L.getObjectByName("L_L_B_W")!=undefined) {
    var  LeftLeanBackWall = const_var.b_t_M_L_t_L.getObjectByName("L_L_B_W").clone();

    var textureImg = horizontalTexture;
    if (params.p_v_w==true){
        textureImg = verticalTexture;
    } else {
        textureImg = horizontalTexture;
    }
    var ltBwallPos = params.p_w/-2 - params.lean_p_w/2; 
    LeftLeanBackWall.visible = (params.p_b_c_b_l_b!="Open")?true:false;
    LeftLeanBackWall.position.x = ltBwallPos;

    var wH = params.lean_p_h;
    var wP = params.lean_p_h - wH/2;
    LeftLeanBackWall.position.y = wP;   
    // LeftLeanBackWall.position.z = (params.lean_p_d / -2)-0.06;          
    LeftLeanBackWall.position.z = (params.lean_p_d / -2)-0.055;  
    LeftLeanBackWall.scale.set(params.lean_p_w,wH,1);  
    
    if ( params.add_storage_check == true) {
        wH = params.lean_p_h;
        wP = params.lean_p_h - wH/2;
        LeftLeanBackWall.visible = true
    }                    
    switch(params.p_b_c_b_l_b)
    {
        case "One_Fourth_Close":
            wH = wH/4;
            wP = params.lean_p_h - wH/2;
            break;
        case "Half_Close":
            wH = wH/2;
            wP = params.lean_p_h - wH/2;
            break;                  
        case "Three_Fourth_Close":
            wH = wH * 3/4;
            wP = params.lean_p_h - wH/2;
            break;
        case "Extended Gable":
            wH = wH/6;
            wP = params.lean_p_h - wH/2;
            break;
        case "Gable":
            wH = 0.15;
            wP = params.lean_p_h - wH/2;
            break;
            case "Open":
        case "Close":
            wH = params.lean_p_h;
            wP = params.lean_p_h - wH/2;
            break;
        default:
            wH = Math.abs(params.p_b_c_b_l_b.replace(/\D/g, "")) * 3;
            wP = params.lean_p_h - wH/2;                
            break;
    }  
    LeftLeanBackWall.position.y = wP;               
    LeftLeanBackWall.scale.set(params.lean_p_w,wH,1);

    let repeatVal = (repeatRotation[params.p_h] != undefined && params.p_b_c_b_l_b == "Close" && params.p_r_s != "1") ? repeatRotation[params.p_h][params.lean_p_h] : Math.round((wH/1.5)*2)

    var WallLoader = new THREE.TextureLoader();
    var  LWwallTexture = WallLoader.load(process.env.REACT_APP_BASE_URL+textureImg , function(wallTexture) {
    LWwallTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
    LeftLeanBackWall.material.map = wallTexture;
    LeftLeanBackWall.material.bumpMap = wallTexture;
    LeftLeanBackWall.material.bumpScale = 0.02
    LeftLeanBackWall.material.metalness = 1
    LeftLeanBackWall.material.roughness = 0.5
    LeftLeanBackWall.material.anisotropy = 10;
    LeftLeanBackWall.material.map.wrapS = THREE.RepeatWrapping;
    LeftLeanBackWall.material.map.wrapT = THREE.RepeatWrapping;
    LeftLeanBackWall.material.map.offset.x = params.lean_p_w;
    LeftLeanBackWall.material.map.offset.y = params.lean_p_w;
    
    if (params.p_v_w==true){
        LeftLeanBackWall.material.map.repeat.set(Math.round(((params.lean_p_w/2)+(params.lean_p_w/2/3))*2),1);
    } else {
        LeftLeanBackWall.material.map.repeat.set(1,repeatVal);
    }   

    LeftLeanBackWall.material.map.needsUpdate = true;
    LeftLeanBackWall.material.needsUpdate = true;
                                                                                              
    let innerWall = LeftLeanWalls.getObjectByName("L_L_B_W_inner")
    innerWall.material.map = wallTexture.clone();
    innerWall.material.map.wrapS = THREE.RepeatWrapping;
    innerWall.material.map.wrapT = THREE.RepeatWrapping;
    innerWall.material.map.offset.x = params.p_w;
    innerWall.material.map.offset.y = params.p_w;
    innerWall.material.map.rotation = Math.PI
    innerWall.material.map.repeat.set( LeftLeanBackWall.material.map.repeat.x, LeftLeanBackWall.material.map.repeat.y);
    innerWall.material.color.set(0xFFFFFF)
    innerWall.material.map.needsUpdate = true 
    innerWall.material.needsUpdate = true 
            
    })

    if (params.p_b_c_b_l_b !== "Close") {
        addDoorIntersectWall(params.lean_p_h, wH, LeftLeanBackWall);
    }
    LeftLeanWalls.add( LeftLeanBackWall);

    if (const_var.b_t_M_L.getObjectByName("jTrim")!=undefined && params.p_b_c_b_l_b !== "Close" && params.p_b_c_b_l_b !== "Open" && params.p_j_t_end == true) {
        let jTrim = const_var.b_t_M_L.getObjectByName("jTrim").clone();
        jTrim.name = "L_L_B_W_jtrim";
        jTrim.material = jTrim.material.clone();
        jTrim.material.color.setHex(jTrimCalor)
        jTrim.visible = true
        jTrim.rotation.y = Math.PI/-2
        jTrim.scale.set(0.14+(jTrimAlignment),0.12, LeftLeanBackWall.scale.x+0.07);
        jTrim.position.set(LeftLeanBackWall.position.x+0.1,LeftLeanBackWall.position.y-(LeftLeanBackWall.scale.y/2)-0.01,(params.lean_p_d/-2)-0.005+(jTrimAlignment/2));
        LeftLeanWalls.add(jTrim);
      }
   }

    //Left Lean To Double front Wall
    if (LeftLeanWalls.getObjectByName("L_L_B_W_inner")==undefined) {
          
        let LeftLeanBackWallClone = (params.p_b_c_b_l_b !== "Close") ? LeftLeanWalls.getObjectByName("L_L_B_W1") : LeftLeanWalls.getObjectByName("L_L_B_W");
      
          if(LeftLeanBackWallClone != undefined){
          let doubleLeftLeanBackWall = LeftLeanBackWallClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleLeftLeanBackWall = new THREE.Mesh(doubleLeftLeanBackWall.geometry,leftDoubleMaterial);
          doubleLeftLeanBackWall.name = "L_L_B_W_inner"
          doubleLeftLeanBackWall.visible = (params.is_translusant==true)? false : LeftLeanBackWallClone.visible
          doubleLeftLeanBackWall.scale.set(LeftLeanBackWallClone.scale.x , LeftLeanBackWallClone.scale.y , LeftLeanBackWallClone.scale.z);
          doubleLeftLeanBackWall.position.set(LeftLeanBackWallClone.position.x , LeftLeanBackWallClone.position.y , LeftLeanBackWallClone.position.z+wallDistance);
          doubleLeftLeanBackWall.rotation.set(LeftLeanBackWallClone.rotation.x , LeftLeanBackWallClone.rotation.y , LeftLeanBackWallClone.rotation.z)
          
            LeftLeanWalls.add(doubleLeftLeanBackWall);

            const_var.wallsForCut.L_L_B_W_inner = doubleLeftLeanBackWall.clone();
          }
        }


if(params.add_storage_check == true){
    /*Front  Storage Wall for Front Lean-to  */
   if (const_var.b_t_M_L_t_L.getObjectByName("L_L_F_S_W")!=undefined) {
    var  L_L_F_StorageWall = const_var.b_t_M_L_t_L.getObjectByName("L_L_F_S_W").clone();

    var textureImg = horizontalTexture;
    if (params.p_v_w==true){
        textureImg = verticalTexture;
    } else {
        textureImg = horizontalTexture;
    }
    var ltFwallPos = params.p_w/-2 - params.lean_p_w/2; 
    L_L_F_StorageWall.position.x = ltFwallPos;
    L_L_F_StorageWall.position.y =  params.lean_p_h/2
    L_L_F_StorageWall.position.z = params.lean_p_d / -2 + (parseInt(params.add_storage));  
    L_L_F_StorageWall.scale.set(params.lean_p_w,params.lean_p_h,1);
    L_L_F_StorageWall.visible = (params.add_storage_check!=false)?true:false;

    if(params.p_r_s == "1"){
        L_L_F_StorageWall.position.y =  params.lean_p_h/2-wallDistance
      }
      var WallLoader = new THREE.TextureLoader();
      var  LWwallTexture = WallLoader.load(process.env.REACT_APP_BASE_URL+textureImg , function(wallTexture) {
      LWwallTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
      L_L_F_StorageWall.material.morphNormals = true;
      L_L_F_StorageWall.material.morphTargets = true;       
      L_L_F_StorageWall.material.map = wallTexture;
      L_L_F_StorageWall.material.bumpMap = wallTexture;
      L_L_F_StorageWall.material.bumpScale = 0.02
      L_L_F_StorageWall.material.metalness = 1
      L_L_F_StorageWall.material.roughness = 0.5
      L_L_F_StorageWall.material.anisotropy = 10;
      L_L_F_StorageWall.material.map.wrapS = THREE.RepeatWrapping;
      L_L_F_StorageWall.material.map.wrapT = THREE.RepeatWrapping;
      L_L_F_StorageWall.material.map.offset.x = params.lean_p_w;
      L_L_F_StorageWall.material.map.offset.y = params.lean_p_w;
      L_L_F_StorageWall.material.map.needsUpdate = true;
      L_L_F_StorageWall.material.needsUpdate = true;

    if (params.p_v_w==true) {
        L_L_F_StorageWall.material.map.repeat.set(Math.round(((params.lean_p_w/2)+(params.lean_p_w/2/3))*2),1);
    } else {
        L_L_F_StorageWall.material.map.repeat.set(1,Math.round((params.lean_p_h/1.5)*2));
    }
                                                                                              
    let innerWall = LeftLeanWalls.getObjectByName("L_L_F_S_W_inner")
    innerWall.material.map = wallTexture.clone();
    innerWall.material.map.wrapS = THREE.RepeatWrapping;
    innerWall.material.map.wrapT = THREE.RepeatWrapping;
    innerWall.material.map.offset.x = params.p_w;
    innerWall.material.map.offset.y = params.p_w;
    innerWall.material.map.rotation = Math.PI
    innerWall.material.map.repeat.set( L_L_F_StorageWall.material.map.repeat.x, L_L_F_StorageWall.material.map.repeat.y);
    innerWall.material.color.set(0xFFFFFF)
    innerWall.material.map.needsUpdate = true 
    innerWall.material.needsUpdate = true 

    })
    LeftLeanWalls.add( L_L_F_StorageWall);
   }

    //Left Lean To Double front Wall
    if (LeftLeanWalls.getObjectByName("L_L_F_S_W_inner")==undefined) {
          
        let LeftLeanFrontStorageWallClone = LeftLeanWalls.getObjectByName("L_L_F_S_W");
      
          if(LeftLeanWalls.getObjectByName("L_L_F_S_W") != undefined){
          let doubleLeftLeanFrontStorageWall = LeftLeanFrontStorageWallClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleLeftLeanFrontStorageWall = new THREE.Mesh(doubleLeftLeanFrontStorageWall.geometry,leftDoubleMaterial);
          doubleLeftLeanFrontStorageWall.name = "L_L_F_S_W_inner"
          doubleLeftLeanFrontStorageWall.visible = (params.is_translusant==true)? false : LeftLeanFrontStorageWallClone.visible
          doubleLeftLeanFrontStorageWall.scale.set(LeftLeanFrontStorageWallClone.scale.x , LeftLeanFrontStorageWallClone.scale.y , LeftLeanFrontStorageWallClone.scale.z);
          doubleLeftLeanFrontStorageWall.position.set(LeftLeanFrontStorageWallClone.position.x , LeftLeanFrontStorageWallClone.position.y , LeftLeanFrontStorageWallClone.position.z-wallDistance);
          doubleLeftLeanFrontStorageWall.rotation.set(LeftLeanFrontStorageWallClone.rotation.x , LeftLeanFrontStorageWallClone.rotation.y , LeftLeanFrontStorageWallClone.rotation.z)
          
            LeftLeanWalls.add(doubleLeftLeanFrontStorageWall);

            const_var.wallsForCut.L_L_F_S_W_inner = doubleLeftLeanFrontStorageWall.clone();
          }
        }

   /*Back  Storage Wall for Back Lean-to  
   
    we are using back wall Please check in left lean to back wall

    */
   /*Left  Storage Wall for Left Lean-to  */
   if (const_var.b_t_M_L_t_L.getObjectByName("L_L_L_S_W")!=undefined) {
    var  L_L_L_StorageWall = const_var.b_t_M_L_t_L.getObjectByName("L_L_L_S_W").clone();

    var textureImg = horizontalTexture;
    if (params.p_v_w==true){
        textureImg = verticalTexture;
    } else {
        textureImg = horizontalTexture;
    }

    L_L_L_StorageWall.visible = (params.add_storage_check!=false && params.p_b_c_b_l != "Close")?true:false;  
    L_L_L_StorageWall.position.x = params.p_w / -2 - params.lean_p_w-0.055;
    L_L_L_StorageWall.position.z = (params.lean_p_d/-2)+(parseInt(params.add_storage))/2;
    L_L_L_StorageWall.position.y = params.lean_p_h/2;               
    L_L_L_StorageWall.scale.set((parseInt(params.add_storage)),params.lean_p_h,1);
    if(params.p_r_s == "1"){            
        L_L_L_StorageWall.position.y =  (params.lean_p_h - params.lean_p_h/2)-0.3;
        L_L_L_StorageWall.scale.y =   params.lean_p_h-0.3            
    }else{
        L_L_L_StorageWall.position.y = params.lean_p_h/2;               
    } 
    var WallLoader = new THREE.TextureLoader();
    var  LSwallTexture = WallLoader.load(process.env.REACT_APP_BASE_URL+textureImg , function(wallTexture) {
    LSwallTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
    L_L_L_StorageWall.material.map = wallTexture;
    L_L_L_StorageWall.material.bumpMap = wallTexture;
    L_L_L_StorageWall.material.bumpScale = 0.02
    L_L_L_StorageWall.material.metalness = 1
    L_L_L_StorageWall.material.roughness = 0.5
    L_L_L_StorageWall.material.anisotropy = 10;
    L_L_L_StorageWall.material.map.wrapS = THREE.RepeatWrapping;
    L_L_L_StorageWall.material.map.wrapT = THREE.RepeatWrapping;
    L_L_L_StorageWall.material.map.offset.x = params.lean_p_w;
    L_L_L_StorageWall.material.map.offset.y = params.lean_p_w;
    L_L_L_StorageWall.material.map.needsUpdate = true;
    L_L_L_StorageWall.material.needsUpdate = true;
    if(params.p_v_w==true)
    {
        L_L_L_StorageWall.material.map.repeat.set(((params.add_storage/2)+(params.add_storage/2/3))*2,1);
    }else
    {
        L_L_L_StorageWall.material.map.repeat.set(1,Math.round((params.lean_p_h/1.5)*2));
    }
                                                                                                  
    let innerWall = LeftLeanWalls.getObjectByName("L_L_L_S_W_inner")
    innerWall.material.map = wallTexture.clone();
    innerWall.material.map.wrapS = THREE.RepeatWrapping;
    innerWall.material.map.wrapT = THREE.RepeatWrapping;
    innerWall.material.map.offset.x = params.p_w;
    innerWall.material.map.offset.y = params.p_w;
    innerWall.material.map.repeat.set( L_L_L_StorageWall.material.map.repeat.x, L_L_L_StorageWall.material.map.repeat.y);
    innerWall.material.color.set(0xFFFFFF)
    innerWall.material.map.needsUpdate = true 
    innerWall.material.needsUpdate = true 

    })
    LeftLeanWalls.add( L_L_L_StorageWall);
   }

    //Left Lean To double Left Storage Wall
    if (LeftLeanWalls.getObjectByName("L_L_L_S_W_inner")==undefined) {
          
        let LeftLeanLeftStorageWallClone = LeftLeanWalls.getObjectByName("L_L_L_S_W");
      
          if(LeftLeanWalls.getObjectByName("L_L_L_S_W") != undefined){
          let doubleLeftLeanLeftStorageWall = LeftLeanLeftStorageWallClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleLeftLeanLeftStorageWall = new THREE.Mesh(doubleLeftLeanLeftStorageWall.geometry,leftDoubleMaterial);
          doubleLeftLeanLeftStorageWall.name = "L_L_L_S_W_inner"
          doubleLeftLeanLeftStorageWall.visible = (params.is_translusant==true)? false : LeftLeanLeftStorageWallClone.visible
          doubleLeftLeanLeftStorageWall.scale.set(LeftLeanLeftStorageWallClone.scale.x , LeftLeanLeftStorageWallClone.scale.y , LeftLeanLeftStorageWallClone.scale.z);
          doubleLeftLeanLeftStorageWall.position.set(LeftLeanLeftStorageWallClone.position.x +wallDistance, LeftLeanLeftStorageWallClone.position.y , LeftLeanLeftStorageWallClone.position.z);
          doubleLeftLeanLeftStorageWall.rotation.set(LeftLeanLeftStorageWallClone.rotation.x , LeftLeanLeftStorageWallClone.rotation.y , LeftLeanLeftStorageWallClone.rotation.z)
          
            LeftLeanWalls.add(doubleLeftLeanLeftStorageWall);

            const_var.wallsForCut.L_L_L_S_W_inner = doubleLeftLeanLeftStorageWall.clone();
          }
        }

   /*Right  Storage Wall for Right Lean-to  */
   if (const_var.b_t_M_L_t_L.getObjectByName("L_L_R_S_W")!=undefined) {
    var  L_L_R_StorageWall = const_var.b_t_M_L_t_L.getObjectByName("L_L_R_S_W").clone();

    var textureImg = horizontalTexture;
    if (params.p_v_w==true){
        textureImg = verticalTexture;
    } else {
        textureImg = horizontalTexture;
    }
    var WallLoader = new THREE.TextureLoader();
    L_L_R_StorageWall.visible = (params.add_storage_check!=false)?true:false;  
    L_L_R_StorageWall.scale.set((parseInt(params.add_storage)),params.lean_p_h+roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w],1)
    L_L_R_StorageWall.position.x = params.p_w /-2-wallDistance;
    L_L_R_StorageWall.position.z = (params.lean_p_d/-2)+(parseInt(params.add_storage))/2;
    L_L_R_StorageWall.position.y = (params.lean_p_h/2)+roofMiddleHeight[params.b_l_t_r_p][params.lean_p_w]; 
    var  RSwallTexture = WallLoader.load(process.env.REACT_APP_BASE_URL+textureImg , function(wallTexture) {
    RSwallTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
    // L_L_R_StorageWall.material.envMap = wallTexture;
    // L_L_R_StorageWall.material.emissiveMap = wallTexture;
    // L_L_R_StorageWall.material.emissiveIntensity = 1;
    L_L_R_StorageWall.material.map = wallTexture;
    L_L_R_StorageWall.material.bumpMap = wallTexture;
    L_L_R_StorageWall.material.bumpScale = 0.02
    L_L_R_StorageWall.material.metalness = 1
    L_L_R_StorageWall.material.roughness = 0.5
    L_L_R_StorageWall.material.anisotropy = 10;
    L_L_R_StorageWall.material.map.wrapS = THREE.RepeatWrapping;
    L_L_R_StorageWall.material.map.wrapT = THREE.RepeatWrapping;
    L_L_R_StorageWall.material.map.offset.x = params.p_w;
    L_L_R_StorageWall.material.map.offset.y = params.p_w;
    L_L_R_StorageWall.material.map.needsUpdate = true;
    L_L_R_StorageWall.material.needsUpdate = true;
    if(params.p_v_w==true)
    {
        L_L_R_StorageWall.material.map.repeat.set(((params.add_storage/2)+(params.add_storage/2/3))*2,1);
    }else
    {
        L_L_R_StorageWall.material.map.repeat.set(1,Math.round((params.p_h/1.5)*2));
    }
                                                                                                      
    let innerWall = LeftLeanWalls.getObjectByName("L_L_R_S_W_inner")
    innerWall.material.map = wallTexture.clone();
    innerWall.material.map.wrapS = THREE.RepeatWrapping;
    innerWall.material.map.wrapT = THREE.RepeatWrapping;
    innerWall.material.map.offset.x = params.p_w;
    innerWall.material.map.offset.y = params.p_w;
    innerWall.material.map.repeat.set( L_L_R_StorageWall.material.map.repeat.x, L_L_R_StorageWall.material.map.repeat.y);
    innerWall.material.color.set(0xFFFFFF)
    innerWall.material.map.needsUpdate = true 
    innerWall.material.needsUpdate = true 

}
)
LeftLeanWalls.add( L_L_R_StorageWall);
   }

//Left Lean To double Left Storage Wall
if (LeftLeanWalls.getObjectByName("L_L_R_S_W_inner")==undefined) {
      
    let LeftLeanRightStorageWallClone = LeftLeanWalls.getObjectByName("L_L_R_S_W");
  
      if(LeftLeanWalls.getObjectByName("L_L_R_S_W") != undefined){
      let doubleLeftLeanRightStorageWall = LeftLeanRightStorageWallClone.clone();
      
      let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
      doubleLeftLeanRightStorageWall = new THREE.Mesh(doubleLeftLeanRightStorageWall.geometry,leftDoubleMaterial);
      doubleLeftLeanRightStorageWall.name = "L_L_R_S_W_inner"
      doubleLeftLeanRightStorageWall.visible = (params.is_translusant==true)? false : LeftLeanRightStorageWallClone.visible
      doubleLeftLeanRightStorageWall.scale.set(LeftLeanRightStorageWallClone.scale.x , LeftLeanRightStorageWallClone.scale.y , LeftLeanRightStorageWallClone.scale.z);
      doubleLeftLeanRightStorageWall.position.set(LeftLeanRightStorageWallClone.position.x -(wallDistance*2), LeftLeanRightStorageWallClone.position.y , LeftLeanRightStorageWallClone.position.z);
      doubleLeftLeanRightStorageWall.rotation.set(LeftLeanRightStorageWallClone.rotation.x , LeftLeanRightStorageWallClone.rotation.y , LeftLeanRightStorageWallClone.rotation.z)
      
        LeftLeanWalls.add(doubleLeftLeanRightStorageWall);

        const_var.wallsForCut.L_L_R_S_W_inner = doubleLeftLeanRightStorageWall.clone();
      }
    }
   /*Left LeanTo Front Storage Gable Geometry */
   if (const_var.b_t_M_L_t_L.getObjectByName("L_L_F_S_G")!=undefined) {
    var  L_L_F_S_Gable = const_var.b_t_M_L_t_L.getObjectByName("L_L_F_S_G").clone();

    var textureImg = horizontalTexture;
    if (params.p_v_w==true){
        textureImg = verticalTexture;
    } else {
        textureImg = horizontalTexture;
    }
    var ltFwallPos = params.p_w/-2 - params.lean_p_w/2;
    if(params.p_v_w==true){
        var leanToLeftStorageGableUVS = new Float32Array([
            -1.0, -1.0,
            0.0, -1.0,
            0.0, -1.0,
        ]);
    } else {
        var leanToLeftStorageGableUVS = new Float32Array([
            2.0, 0.0,
            0.0, 0.0,
            2.0, 2.0,
        ]);
    }
    L_L_F_S_Gable.geometry.setAttribute( 'uv', new THREE.BufferAttribute( leanToLeftStorageGableUVS, 2 ) );
    L_L_F_S_Gable.visible = (params.add_storage_check!=false)?true:false;  
    L_L_F_S_Gable.scale.set(params.lean_p_w,roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w],0.01);
    L_L_F_S_Gable.position.set(ltFwallPos,params.lean_p_h,params.lean_p_d/-2+(parseInt(params.add_storage)));
    if (params.p_r_s == "1") {
        L_L_F_S_Gable.position.set(ltFwallPos,params.lean_p_h-wallDistance,params.lean_p_d/-2+(parseInt(params.add_storage)));
        
        L_L_F_S_Gable.scale.set(params.lean_p_w,roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w],0.01);
    }
    var WallLoader = new THREE.TextureLoader();
    var  GableTexture = WallLoader.load(process.env.REACT_APP_BASE_URL+textureImg , function(wallTexture) {
    GableTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
    L_L_F_S_Gable.material.map = wallTexture;
    L_L_F_S_Gable.material.bumpMap = wallTexture;
    L_L_F_S_Gable.material.bumpScale = 0.02
    L_L_F_S_Gable.material.metalness = 1
    L_L_F_S_Gable.material.roughness = 0.5
    L_L_F_S_Gable.material.anisotropy = 10;
    L_L_F_S_Gable.material.map.wrapS = THREE.RepeatWrapping;
    L_L_F_S_Gable.material.map.wrapT = THREE.RepeatWrapping;    
    if(params.p_v_w==true) {
        L_L_F_S_Gable.material.map.repeat.set(Math.round(((params.lean_p_w/2)+(params.lean_p_w/2/3))*2),1);
    } else  {
        L_L_F_S_Gable.material.map.repeat.set(1,roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w]/1.5);
    }
                                                                                                          
    let innerWall = LeftLeanWalls.getObjectByName("doubleLeftLeanFrontStorageGable")
    innerWall.material.map = wallTexture.clone();
    innerWall.material.map.wrapS = THREE.RepeatWrapping;
    innerWall.material.map.wrapT = THREE.RepeatWrapping;
    innerWall.material.map.offset.x = params.p_w;
    innerWall.material.map.offset.y = params.p_w;
    innerWall.material.map.repeat.set( L_L_F_S_Gable.material.map.repeat.x, L_L_F_S_Gable.material.map.repeat.y);
    innerWall.material.color.set(0xFFFFFF)
    innerWall.material.map.needsUpdate = true 
    innerWall.material.needsUpdate = true 

    })
    LeftLeanWalls.add( L_L_F_S_Gable);
   }

   //Left Lean To double Left Storage Wall
   if (LeftLeanWalls.getObjectByName("doubleLeftLeanFrontStorageGable")==undefined) {
      
    let LeftLeanFrontStorageGableClone = LeftLeanWalls.getObjectByName("L_L_F_S_G");
  
      if(LeftLeanWalls.getObjectByName("L_L_F_S_G") != undefined){
      let doubleLeftLeanFrontStorageGable = LeftLeanFrontStorageGableClone.clone();
      
      let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
      doubleLeftLeanFrontStorageGable = new THREE.Mesh(doubleLeftLeanFrontStorageGable.geometry,leftDoubleMaterial);
      doubleLeftLeanFrontStorageGable.name = "doubleLeftLeanFrontStorageGable"
      doubleLeftLeanFrontStorageGable.visible = (params.is_translusant==true)? false : LeftLeanFrontStorageGableClone.visible
      doubleLeftLeanFrontStorageGable.scale.set(LeftLeanFrontStorageGableClone.scale.x , LeftLeanFrontStorageGableClone.scale.y , LeftLeanFrontStorageGableClone.scale.z);
      doubleLeftLeanFrontStorageGable.position.set(LeftLeanFrontStorageGableClone.position.x , LeftLeanFrontStorageGableClone.position.y , LeftLeanFrontStorageGableClone.position.z-wallDistance);
      doubleLeftLeanFrontStorageGable.rotation.set(LeftLeanFrontStorageGableClone.rotation.x , LeftLeanFrontStorageGableClone.rotation.y , LeftLeanFrontStorageGableClone.rotation.z)

        LeftLeanWalls.add(doubleLeftLeanFrontStorageGable);
      }
    }
}    

   /*Left LeanTo Front Gable Geometry */
   if (const_var.b_t_M_L_t_L.getObjectByName("L_L_F_G")!=undefined) {
    var  L_L_F_Gable = const_var.b_t_M_L_t_L.getObjectByName("L_L_F_G").clone();

    var textureImg = horizontalTexture;
    if (params.p_v_w==true){
        textureImg = verticalTexture;
    } else {
        textureImg = horizontalTexture;
    }
    var ltFwallPos = params.p_w/-2 - params.lean_p_w/2;

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

    L_L_F_Gable.geometry.setIndex(new THREE.BufferAttribute( index, 1 ) )
    L_L_F_Gable.geometry.setAttribute("position", new THREE.BufferAttribute(cBLeftStorageFGableVertices, 3));                 
    L_L_F_Gable.geometry.setAttribute( 'uv', new THREE.BufferAttribute( leanToLeftbGableUVS, 2 ) );
    L_L_F_Gable.geometry.computeVertexNormals();    
    L_L_F_Gable.visible = (params.p_b_c_b_l_f !="Open" )?true:false;  
    // if(params.add_left_front_lean_porch == true){
    //     L_L_F_Gable.visible = false;
    // }
    L_L_F_Gable.scale.set(params.lean_p_w,roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w],0.01);
    // L_L_F_Gable.position.set(ltFwallPos,params.lean_p_h,params.lean_p_d/2+0.06);
    L_L_F_Gable.position.set(ltFwallPos,params.lean_p_h,params.lean_p_d/2+0.045);
    var WallLoader = new THREE.TextureLoader();
    var GableTextureT = WallLoader.load(process.env.REACT_APP_BASE_URL+textureImg , function(wallTexture) {
    // GableTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
    L_L_F_Gable.material.map = wallTexture;
    L_L_F_Gable.material.bumpMap = wallTexture;
    L_L_F_Gable.material.bumpScale = 0.02
    L_L_F_Gable.material.metalness = 1
    L_L_F_Gable.material.roughness = 0.5
    L_L_F_Gable.material.anisotropy = 10;
    L_L_F_Gable.material.map.offset.x = params.lean_p_w;
    L_L_F_Gable.material.map.offset.y = params.lean_p_w;
    L_L_F_Gable.material.morphNormals = true;
    L_L_F_Gable.material.morphTargets = true;   
    L_L_F_Gable.material.map.wrapS = THREE.RepeatWrapping;
    L_L_F_Gable.material.map.wrapT = THREE.RepeatWrapping;  
    L_L_F_Gable.material.needsUpdate = true;

    if(params.p_v_w==true){
        L_L_F_Gable.material.map.repeat.set(Math.round((((params.lean_p_w/2)+(params.lean_p_w/2/3))*2)),1);
    } else {
        L_L_F_Gable.material.map.repeat.set(1,(roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w]/1.5));
    }
                                                                                                              
    let innerWall = LeftLeanWalls.getObjectByName("L_L_F_G_inner")
    innerWall.material.map = wallTexture.clone();
    innerWall.material.map.wrapS = THREE.RepeatWrapping;
    innerWall.material.map.wrapT = THREE.RepeatWrapping;
    innerWall.material.map.offset.x = params.p_w;
    innerWall.material.map.offset.y = params.p_w;
    innerWall.material.map.repeat.set( L_L_F_Gable.material.map.repeat.x, L_L_F_Gable.material.map.repeat.y);
    innerWall.material.color.set(0xFFFFFF)
    innerWall.material.map.needsUpdate = true 
    innerWall.material.needsUpdate = true 

    })
    LeftLeanWalls.add( L_L_F_Gable);
    const_var.wallsForCut.L_L_F_G = L_L_F_Gable.clone();
   }

   //Left Lean To double Left Storage Wall
if (LeftLeanWalls.getObjectByName("L_L_F_G_inner")==undefined) {
      
    let LeftLeanFrontGableClone = LeftLeanWalls.getObjectByName("L_L_F_G");
  
      if(LeftLeanWalls.getObjectByName("L_L_F_G") != undefined){
      let doubleLeftLeanFrontGable = LeftLeanFrontGableClone.clone();
      
      let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
      doubleLeftLeanFrontGable = new THREE.Mesh(doubleLeftLeanFrontGable.geometry,leftDoubleMaterial);
      doubleLeftLeanFrontGable.name = "L_L_F_G_inner"
      doubleLeftLeanFrontGable.visible = (params.is_translusant==true)? false : LeftLeanFrontGableClone.visible
      doubleLeftLeanFrontGable.scale.set(LeftLeanFrontGableClone.scale.x , LeftLeanFrontGableClone.scale.y , LeftLeanFrontGableClone.scale.z);
      doubleLeftLeanFrontGable.position.set(LeftLeanFrontGableClone.position.x , LeftLeanFrontGableClone.position.y , LeftLeanFrontGableClone.position.z-wallDistance);
      doubleLeftLeanFrontGable.rotation.set(LeftLeanFrontGableClone.rotation.x , LeftLeanFrontGableClone.rotation.y , LeftLeanFrontGableClone.rotation.z)
      
        LeftLeanWalls.add(doubleLeftLeanFrontGable);

        const_var.wallsForCut.L_L_F_G_inner = doubleLeftLeanFrontGable.clone();
      }
    }

   /*Left LeanTo Back Gable Geometry */
   if (const_var.b_t_M_L_t_L.getObjectByName("L_L_B_G")!=undefined) {
    var  L_L_B_Gable = const_var.b_t_M_L_t_L.getObjectByName("L_L_B_G").clone();

    var textureImg = horizontalTexture;
    if (params.p_v_w==true){
        textureImg = verticalTexture;
    } else {
        textureImg = horizontalTexture;
    }
    var ltFwallPos = params.p_w/-2 - params.lean_p_w/2;
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

    L_L_B_Gable.geometry.setIndex(new THREE.BufferAttribute( index, 1 ) )
    L_L_B_Gable.geometry.setAttribute("position", new THREE.BufferAttribute(cBLeftStorageFGableVertices, 3));                 
    L_L_B_Gable.geometry.setAttribute( 'uv', new THREE.BufferAttribute( leanToLeftbGableUVS, 2 ) );
    L_L_B_Gable.geometry.computeVertexNormals();
    L_L_B_Gable.visible = (params.p_b_c_b_l_b !="Open" || params.add_storage_check!=false)?true:false;  
    // if(params.add_left_back_lean_porch == true){
    //     L_L_B_Gable.visible = false;
    // }
    L_L_B_Gable.scale.set(params.lean_p_w,roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w],0.01);
    //L_L_B_Gable.position.set(ltFwallPos,params.lean_p_h,params.lean_p_d/-2-0.06);
    L_L_B_Gable.position.set(ltFwallPos,params.lean_p_h,params.lean_p_d/-2-0.055);
    var WallLoader = new THREE.TextureLoader();
    var  GableTexture = WallLoader.load(process.env.REACT_APP_BASE_URL+textureImg , function(wallTexture) {
    GableTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
      L_L_B_Gable.material.map = wallTexture;
      L_L_B_Gable.material.bumpMap = wallTexture;
      L_L_B_Gable.material.bumpScale = 0.02
      L_L_B_Gable.material.metalness = 1
      L_L_B_Gable.material.roughness = 0.5
      L_L_B_Gable.material.anisotropy = 10;
      L_L_B_Gable.material.map.offset.x = params.lean_p_w;
      L_L_B_Gable.material.map.offset.y = params.lean_p_w;
      L_L_B_Gable.material.morphNormals = true;
      L_L_B_Gable.material.morphTargets = true;  
      L_L_B_Gable.material.map.wrapS = THREE.RepeatWrapping;
      L_L_B_Gable.material.map.wrapT = THREE.RepeatWrapping;    
      if (params.p_v_w==true){
        L_L_B_Gable.material.map.rotation = Math.PI

          //L_L_B_Gable.material.map.repeat.set(Math.round((((params.lean_p_w/2)+(params.lean_p_w/2/3))*2)*2),1);
           L_L_B_Gable.material.map.repeat.set(Math.round((((params.lean_p_w/2)+(params.lean_p_w/2/3))*2)),1);

      } else {
          L_L_B_Gable.material.map.repeat.set(1,(roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w]/1.5));
      }

      L_L_B_Gable.material.map.needsUpdate = true;
      L_L_B_Gable.material.needsUpdate = true;
                                                                                                                    
    let innerWall = LeftLeanWalls.getObjectByName("L_L_B_G_inner")
    innerWall.material.map = wallTexture.clone();
    innerWall.material.map.wrapS = THREE.RepeatWrapping;
    innerWall.material.map.wrapT = THREE.RepeatWrapping;
    innerWall.material.map.offset.x = params.p_w;
    innerWall.material.map.offset.y = params.p_w;
    innerWall.material.map.repeat.set( L_L_B_Gable.material.map.repeat.x, L_L_B_Gable.material.map.repeat.y);
    innerWall.material.color.set(0xFFFFFF)
    innerWall.material.map.needsUpdate = true 
    innerWall.material.needsUpdate = true 

    })
    LeftLeanWalls.add( L_L_B_Gable);
    const_var.wallsForCut.L_L_B_G = L_L_B_Gable.clone();
   }

   //Left Lean To double Left Storage Wall
   if (LeftLeanWalls.getObjectByName("L_L_B_G_inner")==undefined) {
      
    let LeftLeanBackGableClone = LeftLeanWalls.getObjectByName("L_L_B_G");
  
      if(LeftLeanWalls.getObjectByName("L_L_B_G") != undefined){
      let doubleLeftLeanBackGable = LeftLeanBackGableClone.clone();
      
      let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
      doubleLeftLeanBackGable = new THREE.Mesh(doubleLeftLeanBackGable.geometry,leftDoubleMaterial);
      doubleLeftLeanBackGable.name = "L_L_B_G_inner"
      doubleLeftLeanBackGable.visible = (params.is_translusant==true)? false : LeftLeanBackGableClone.visible
      doubleLeftLeanBackGable.scale.set(LeftLeanBackGableClone.scale.x , LeftLeanBackGableClone.scale.y , LeftLeanBackGableClone.scale.z);
      doubleLeftLeanBackGable.position.set(LeftLeanBackGableClone.position.x , LeftLeanBackGableClone.position.y , LeftLeanBackGableClone.position.z+wallDistance);
      doubleLeftLeanBackGable.rotation.set(LeftLeanBackGableClone.rotation.x , LeftLeanBackGableClone.rotation.y , LeftLeanBackGableClone.rotation.z)

        LeftLeanWalls.add(doubleLeftLeanBackGable);
        const_var.wallsForCut.L_L_B_G_inner = doubleLeftLeanBackGable.clone();
      }
    }

if(params.p_w_c_n == true){
   /*Left Lean To Front Wall WainScot */
   if (const_var.b_t_M_L_t_L.getObjectByName("L_L_F_W_WS")!=undefined) {
    var  L_L_F_WallWainscot = const_var.b_t_M_L_t_L.getObjectByName("L_L_F_W_WS").clone();

    var textureImg = horizontalTexture;
    if (params.p_v_w==true){
        textureImg = verticalTexture;
    } else {
        textureImg = horizontalTexture;
    }
    var ltFwallPos = params.p_w/-2 - params.lean_p_w/2;
    L_L_F_WallWainscot.visible = (params.p_b_c_b_l_f == "Close" && params.p_w_c_n == true)?true:false;
    L_L_F_WallWainscot.position.x = ltFwallPos;
    L_L_F_WallWainscot.position.z = params.lean_p_d / 2 + 0.085;
    L_L_F_WallWainscot.position.y = 1.475;                
    L_L_F_WallWainscot.scale.set(params.lean_p_w ==0? 1: params.lean_p_w,3,1);
    var WallLoader = new THREE.TextureLoader();
    var  wainscotTexture = WallLoader.load(process.env.REACT_APP_BASE_URL+textureImg , function(wallTexture) {
    wainscotTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);                   
      L_L_F_WallWainscot.material.map = wallTexture;
      L_L_F_WallWainscot.material.bumpMap = wallTexture;
      L_L_F_WallWainscot.material.bumpScale = 0.02
      L_L_F_WallWainscot.material.metalness = 1
      L_L_F_WallWainscot.material.roughness = 0.5
      L_L_F_WallWainscot.material.anisotropy = 10;
      L_L_F_WallWainscot.material.map.wrapS = THREE.RepeatWrapping;
      L_L_F_WallWainscot.material.map.wrapT = THREE.RepeatWrapping;
      L_L_F_WallWainscot.material.map.fog = false;
    if (params.p_v_w==true) {
          L_L_F_WallWainscot.material.map.repeat.set(Math.round(((params.lean_p_w/2)+(params.lean_p_w/2/3))*2),1);
    } else {
          L_L_F_WallWainscot.material.map.repeat.set(1,(3/1.5)*2);
      }
      L_L_F_WallWainscot.material.map.needsUpdate = true; 
      L_L_F_WallWainscot.material.needsUpdate = true; 
    })
    LeftLeanWalls.add( L_L_F_WallWainscot);

            
    if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
        let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
        wainscotTrim.name = "L_L_F_W_WS_jtrim";
        wainscotTrim.material = wainscotTrim.material.clone();
        wainscotTrim.material.color.setHex(wainscotTrimCalor)
        wainscotTrim.visible = L_L_F_WallWainscot.visible
        wainscotTrim.rotation.y = Math.PI/-2
        wainscotTrim.scale.set(0.2,0.17, L_L_F_WallWainscot.scale.x);
        wainscotTrim.position.set(L_L_F_WallWainscot.position.x,L_L_F_WallWainscot.position.y*2,L_L_F_WallWainscot.position.z+0.008);
        LeftLeanWalls.add(wainscotTrim);
      }

   }

   var  L_L_F_s_WallWainscotGeo = const_var.b_t_M_L_t_L.getObjectByName("L_L_F_W_WS").clone();
   let L_L_F_s_WallWainscotMaterial= new THREE.MeshPhongMaterial({  side: THREE.DoubleSide,color: 0xffffff });
   let L_L_F_s_WallWainscot = new THREE.Mesh(L_L_F_s_WallWainscotGeo.geometry,L_L_F_s_WallWainscotMaterial);
   L_L_F_s_WallWainscot.name = "L_L_F_S_W_WS";
    var textureImg = horizontalTexture;
    if (params.p_v_w==true){
        textureImg = verticalTexture;
    } else {
        textureImg = horizontalTexture;
    }
    var ltFwallPos = params.p_w/-2 - params.lean_p_w/2;
    L_L_F_s_WallWainscot.visible = (params.add_storage_check == true && params.p_w_c_n == true )?true:false;
    L_L_F_s_WallWainscot.scale.set(params.lean_p_w == 0? 1: params.lean_p_w,3,1);
    L_L_F_s_WallWainscot.position.x = ltFwallPos;
    L_L_F_s_WallWainscot.position.y = 1.475;
    L_L_F_s_WallWainscot.position.z = params.lean_p_d / -2 + (parseInt(params.add_storage))+0.075;  
    var WallLoader = new THREE.TextureLoader();
    var  wainscotTexture = WallLoader.load(process.env.REACT_APP_BASE_URL+textureImg , function(wallTexture) {
    wainscotTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);                   
      L_L_F_s_WallWainscot.material.map = wallTexture;
      L_L_F_s_WallWainscot.material.bumpMap = wallTexture;
      L_L_F_s_WallWainscot.material.bumpScale = 0.02
      L_L_F_s_WallWainscot.material.metalness = 1
      L_L_F_s_WallWainscot.material.roughness = 0.5
      L_L_F_s_WallWainscot.material.anisotropy = 10;
      L_L_F_s_WallWainscot.material.map.wrapS = THREE.RepeatWrapping;
      L_L_F_s_WallWainscot.material.map.wrapT = THREE.RepeatWrapping;
      L_L_F_s_WallWainscot.material.map.fog = false;
    if (params.p_v_w==true) {
          L_L_F_s_WallWainscot.material.map.repeat.set(Math.round(((params.lean_p_w/2)+(params.lean_p_w/2/3))*2),1);
    } else {
          L_L_F_s_WallWainscot.material.map.repeat.set(1,(3/1.5)*2);
      }
      L_L_F_s_WallWainscot.material.map.needsUpdate = true; 
      L_L_F_s_WallWainscot.material.needsUpdate = true; 
    })
    LeftLeanWalls.add( L_L_F_s_WallWainscot);

    if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
        let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
        wainscotTrim.name = "L_L_F_S_W_WS_jtrim";
        wainscotTrim.material = wainscotTrim.material.clone();
        wainscotTrim.material.color.setHex(wainscotTrimCalor)
        wainscotTrim.visible = L_L_F_s_WallWainscot.visible
        wainscotTrim.rotation.y = Math.PI/-2
        wainscotTrim.scale.set(0.2,0.17, L_L_F_s_WallWainscot.scale.x);
        wainscotTrim.position.set(L_L_F_s_WallWainscot.position.x,L_L_F_s_WallWainscot.position.y*2,L_L_F_s_WallWainscot.position.z+0.008);
        LeftLeanWalls.add(wainscotTrim);
      }

   /*Left Lean To Back Wall WainScot */
   if (const_var.b_t_M_L_t_L.getObjectByName("L_L_B_W_WS")!=undefined) {
    var  L_L_B_WallWainscotGeo = const_var.b_t_M_L_t_L.getObjectByName("L_L_F_W_WS").clone();
    let L_L_B_WallWainscotMaterial= new THREE.MeshPhongMaterial({  side: THREE.DoubleSide,color: 0xffffff });
    let L_L_B_WallWainscot = new THREE.Mesh(L_L_B_WallWainscotGeo.geometry,L_L_B_WallWainscotMaterial);
    L_L_B_WallWainscot.name = "L_L_B_W_WS";
    var textureImg = horizontalTexture;
    if (params.p_v_w==true){
        textureImg = verticalTexture;
    } else {
        textureImg = horizontalTexture;
    }
    var ltFwallPos = params.p_w/-2 - params.lean_p_w/2;
    L_L_B_WallWainscot.visible = ((params.p_b_c_b_l_b == "Close" && params.p_w_c_n == true)||( params.add_storage_check == true && params.p_w_c_n == true)) ? true : false;
    L_L_B_WallWainscot.position.x = ltFwallPos;
    L_L_B_WallWainscot.position.z = params.lean_p_d / -2 - 0.085;
    L_L_B_WallWainscot.position.y = 1.475;                
    L_L_B_WallWainscot.scale.set(params.lean_p_w == 0? 1: params.lean_p_w, 3, 1);
    var WallLoader = new THREE.TextureLoader();
    var  wainscotTexture = WallLoader.load(process.env.REACT_APP_BASE_URL+textureImg , function(wallTexture) {
    wainscotTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
    //   L_L_B_WallWainscot.material.morphNormals = true;
    //   L_L_B_WallWainscot.material.morphTargets = true;                           
      L_L_B_WallWainscot.material.map = wallTexture;
      L_L_B_WallWainscot.material.bumpMap = wallTexture;
      L_L_B_WallWainscot.material.bumpScale = 0.02
      L_L_B_WallWainscot.material.metalness = 1
      L_L_B_WallWainscot.material.roughness = 0.5
      L_L_B_WallWainscot.material.anisotropy = 10;
      L_L_B_WallWainscot.material.map.wrapS = THREE.RepeatWrapping;
      L_L_B_WallWainscot.material.map.wrapT = THREE.RepeatWrapping;
      L_L_B_WallWainscot.material.map.fog = false;
      if(params.p_v_w==true)
      {
          L_L_B_WallWainscot.material.map.repeat.set(Math.round(((params.lean_p_w/2)+(params.lean_p_w/2/3))*2),1);
      }else
      {
          L_L_B_WallWainscot.material.map.repeat.set(1,(3/1.5)*2);
      }  
      L_L_B_WallWainscot.material.map.needsUpdate = true; 
      L_L_B_WallWainscot.material.needsUpdate = true; 
    })
     LeftLeanWalls.add( L_L_B_WallWainscot);

     if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
        let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
        wainscotTrim.name = "L_L_B_W_WS_jtrim";
        wainscotTrim.material = wainscotTrim.material.clone();
        wainscotTrim.material.color.setHex(wainscotTrimCalor)
        wainscotTrim.visible = L_L_B_WallWainscot.visible
        wainscotTrim.rotation.y = Math.PI/2
        wainscotTrim.scale.set(0.2,0.17, L_L_B_WallWainscot.scale.x);
        wainscotTrim.position.set(L_L_B_WallWainscot.position.x,L_L_B_WallWainscot.position.y*2,L_L_B_WallWainscot.position.z-0.008);
        LeftLeanWalls.add(wainscotTrim);
      }
   }

   var  L_L_L_S_WallWainscotGeo = const_var.b_t_M_L_t_L.getObjectByName("L_L_L_W_WS").clone();
   let L_L_L_S_WallWainscotMaterial= new THREE.MeshPhongMaterial({  side: THREE.DoubleSide,color: 0xffffff });
   let L_L_L_S_WallWainscot = new THREE.Mesh(L_L_L_S_WallWainscotGeo.geometry,L_L_L_S_WallWainscotMaterial);
   L_L_L_S_WallWainscot.name = "L_L_L_S_W_WS";
    var textureImg = horizontalTexture;
    if (params.p_v_w==true){
        textureImg = verticalTexture;
    } else {
        textureImg = horizontalTexture;
    }
    L_L_L_S_WallWainscot.visible = (params.add_storage_check == true && params.p_w_c_n == true)?true:false;
    L_L_L_S_WallWainscot.position.x = params.p_w / -2 - params.lean_p_w - 0.075;
    L_L_L_S_WallWainscot.position.z = (params.lean_p_d/-2)+(parseInt(params.add_storage))/2;
    L_L_L_S_WallWainscot.position.y = 1.475;  
    L_L_L_S_WallWainscot.rotation.y = Math.PI/2;    
    var scaleX = (parseInt(params.add_storage)) == 0 ? 1: (parseInt(params.add_storage));
    L_L_L_S_WallWainscot.scale.set(scaleX,3,1);             
    var WallLoader = new THREE.TextureLoader();
    var  wainscotTexture = WallLoader.load(process.env.REACT_APP_BASE_URL+textureImg , function(wallTexture) {
    wainscotTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
      L_L_L_S_WallWainscot.material.map = wallTexture;
      L_L_L_S_WallWainscot.material.bumpMap = wallTexture;
      L_L_L_S_WallWainscot.material.bumpScale = 0.02
      L_L_L_S_WallWainscot.material.metalness = 1
      L_L_L_S_WallWainscot.material.roughness = 0.5
      L_L_L_S_WallWainscot.material.anisotropy = 10;
      L_L_L_S_WallWainscot.material.map.wrapS = THREE.RepeatWrapping;
      L_L_L_S_WallWainscot.material.map.wrapT = THREE.RepeatWrapping;
      L_L_L_S_WallWainscot.material.map.offset.x = params.lean_p_w;
      L_L_L_S_WallWainscot.material.map.offset.y = params.lean_p_w;
      if (params.p_v_w==true) {
          L_L_L_S_WallWainscot.material.map.repeat.set(((params.add_storage/2)+(params.add_storage/2/3))*2,1);
      } else {
          L_L_L_S_WallWainscot.material.map.repeat.set(1,(3/1.5)*2);
      }
      L_L_L_S_WallWainscot.material.map.needsUpdate = true; 
      L_L_L_S_WallWainscot.material.needsUpdate = true; 
    })
    LeftLeanWalls.add( L_L_L_S_WallWainscot);

    if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
        let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
        wainscotTrim.name = "L_L_L_S_W_WS_jtrim";
        wainscotTrim.material = wainscotTrim.material.clone();
        wainscotTrim.material.color.setHex(wainscotTrimCalor)
        wainscotTrim.visible = L_L_L_S_WallWainscot.visible
        wainscotTrim.rotation.y = Math.PI
        wainscotTrim.scale.set(0.2,0.17, L_L_L_S_WallWainscot.scale.x);
        wainscotTrim.position.set(L_L_L_S_WallWainscot.position.x-0.008,L_L_L_S_WallWainscot.position.y*2,L_L_L_S_WallWainscot.position.z);
        LeftLeanWalls.add(wainscotTrim);
      }

    
   var  L_L_R_S_WallWainscotGeo = const_var.b_t_M_L_t_L.getObjectByName("L_L_L_W_WS").clone();
   let L_L_R_S_WallWainscotMaterial= new THREE.MeshPhongMaterial({  side: THREE.DoubleSide,color: 0xffffff });
   let L_L_R_S_WallWainscot = new THREE.Mesh(L_L_R_S_WallWainscotGeo.geometry,L_L_R_S_WallWainscotMaterial);
   L_L_R_S_WallWainscot.name = "L_L_R_S_W_WS";
   var textureImg = horizontalTexture;
   if (params.p_v_w==true){
       textureImg = verticalTexture;
   } else {
       textureImg = horizontalTexture;
   }
   L_L_R_S_WallWainscot.visible = (params.add_storage_check == true && params.p_w_c_n == true && params.p_l_w != "Close")?true:false;
   L_L_R_S_WallWainscot.position.x = params.p_w / -2 + 0.075;
   L_L_R_S_WallWainscot.position.z = (params.lean_p_d/-2)+(parseInt(params.add_storage))/2;
   L_L_R_S_WallWainscot.position.y = 1.475;   
   L_L_R_S_WallWainscot.rotation.y = Math.PI/2; 
   var scaleX = (parseInt(params.add_storage)) == 0 ? 1: (parseInt(params.add_storage));
   L_L_R_S_WallWainscot.scale.set(scaleX,3,1);              
   var WallLoader = new THREE.TextureLoader();
   var  wainscotTexture = WallLoader.load(process.env.REACT_APP_BASE_URL+textureImg , function(wallTexture) {
   wainscotTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
     L_L_R_S_WallWainscot.material.map = wallTexture;
     L_L_R_S_WallWainscot.material.bumpMap = wallTexture;
     L_L_R_S_WallWainscot.material.bumpScale = 0.02
     L_L_R_S_WallWainscot.material.metalness = 1
     L_L_R_S_WallWainscot.material.roughness = 0.5
     L_L_R_S_WallWainscot.material.anisotropy = 10;
     L_L_R_S_WallWainscot.material.map.wrapS = THREE.RepeatWrapping;
     L_L_R_S_WallWainscot.material.map.wrapT = THREE.RepeatWrapping;
     L_L_R_S_WallWainscot.material.map.offset.x = params.lean_p_w;
     L_L_R_S_WallWainscot.material.map.offset.y = params.lean_p_w;
     if (params.p_v_w==true) {
         L_L_R_S_WallWainscot.material.map.repeat.set(((params.add_storage)+(params.add_storage/3)),1);
     } else {
         L_L_R_S_WallWainscot.material.map.repeat.set(1,(3/1.5)*2);
     }
     L_L_R_S_WallWainscot.material.map.needsUpdate = true; 
     L_L_R_S_WallWainscot.material.needsUpdate = true; 
   })
   LeftLeanWalls.add( L_L_R_S_WallWainscot);

   if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
    let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
    wainscotTrim.name = "L_L_R_S_W_WS_jtrim";
    wainscotTrim.material = wainscotTrim.material.clone();
    wainscotTrim.material.color.setHex(wainscotTrimCalor)
    wainscotTrim.visible = L_L_R_S_WallWainscot.visible
    // wainscotTrim.rotation.y = Math.PI
    wainscotTrim.scale.set(0.2,0.17, L_L_R_S_WallWainscot.scale.x);
    wainscotTrim.position.set(L_L_R_S_WallWainscot.position.x+0.008,L_L_R_S_WallWainscot.position.y*2,L_L_R_S_WallWainscot.position.z);
    LeftLeanWalls.add(wainscotTrim);
  }


   /*Left Lean To Left Wall WainScot */
   if (const_var.b_t_M_L_t_L.getObjectByName("L_L_L_W_WS")!=undefined && params.p_b_c_b_l=="Close" && params.p_w_c_n == true) {
    var  L_L_L_WallWainscot = const_var.b_t_M_L_t_L.getObjectByName("L_L_L_W_WS").clone();

    var textureImg = horizontalTexture;
    if (params.p_v_w==true){
        textureImg = verticalTexture;
    } else {
        textureImg = horizontalTexture;
    }
    let l_p_w_scale = 0;
    let l_p_w_position = 0;

    if( params.add_left_front_lean_porch == true &&  params.add_left_back_lean_porch == false){
         l_p_w_scale = params.lean_p_w;
         l_p_w_position = params.lean_p_w/2;
    }
    if( params.add_left_front_lean_porch == false &&  params.add_left_back_lean_porch == true){
     l_p_w_scale = params.lean_p_w;
     l_p_w_position = -params.lean_p_w/2;
    }
    if( params.add_left_front_lean_porch == true &&  params.add_left_back_lean_porch == true){
     l_p_w_scale = params.lean_p_w*2;
    }

    L_L_L_WallWainscot.visible = (params.p_b_c_b_l=="Close" && params.p_w_c_n == true)?true:false;
    L_L_L_WallWainscot.position.x = params.p_w / -2 - params.lean_p_w - 0.075;
    L_L_L_WallWainscot.position.z = l_p_w_position;
    L_L_L_WallWainscot.position.y = 1.475;    
    L_L_L_WallWainscot.rotation.y = Math.PI/2;       
    var scaleX = (params.lean_p_d+l_p_w_scale) == 0 ? 1: (params.lean_p_d+l_p_w_scale);
    L_L_L_WallWainscot.scale.set(scaleX,3,1);              
    var WallLoader = new THREE.TextureLoader();
    var  wainscotTexture = WallLoader.load(process.env.REACT_APP_BASE_URL+textureImg , function(wallTexture) {
    wainscotTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
      L_L_L_WallWainscot.material.map = wallTexture;
      L_L_L_WallWainscot.material.bumpMap = wallTexture;
      L_L_L_WallWainscot.material.bumpScale = 0.02
      L_L_L_WallWainscot.material.metalness = 1
      L_L_L_WallWainscot.material.roughness = 0.5
      L_L_L_WallWainscot.material.anisotropy = 10;
      L_L_L_WallWainscot.material.map.wrapS = THREE.RepeatWrapping;
      L_L_L_WallWainscot.material.map.wrapT = THREE.RepeatWrapping;
      L_L_L_WallWainscot.material.map.offset.x = params.lean_p_w;
      L_L_L_WallWainscot.material.map.offset.y = params.lean_p_w;
      if (params.p_v_w==true) {
          L_L_L_WallWainscot.material.map.repeat.set(((params.lean_p_d/2)+(params.lean_p_d/2/3)-0.1)*2,1);
          if( params.add_left_front_lean_porch == true &&  params.add_left_back_lean_porch == false){
            L_L_L_WallWainscot.material.map.repeat.set(((params.lean_p_d/2)+(params.lean_p_d/2/3)+(params.lean_p_w/2)+(params.lean_p_w/2/3))*2,1);
          } else if( params.add_left_front_lean_porch == false &&  params.add_left_back_lean_porch == true){
            L_L_L_WallWainscot.material.map.repeat.set(((params.lean_p_d/2)+(params.lean_p_d/2/3)+(params.lean_p_w/2)+(params.lean_p_w/2/3))*2,1);
           } else if( params.add_left_front_lean_porch == true &&  params.add_left_back_lean_porch == true){
            L_L_L_WallWainscot.material.map.repeat.set(((params.lean_p_d/2)+(params.lean_p_d/2/3)+(params.lean_p_w/2)+(params.lean_p_w/2/3))*2,1);
           }
      } else {
          L_L_L_WallWainscot.material.map.repeat.set(1,(3/1.5)*2);
      }
      L_L_L_WallWainscot.material.map.needsUpdate = true; 
      L_L_L_WallWainscot.material.needsUpdate = true; 
    })
    LeftLeanWalls.add( L_L_L_WallWainscot);

    if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
        let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
        wainscotTrim.name = "L_L_L_W_WS_jtrim";
        wainscotTrim.material = wainscotTrim.material.clone();
        wainscotTrim.material.color.setHex(wainscotTrimCalor)
        wainscotTrim.visible = L_L_L_WallWainscot.visible
        wainscotTrim.rotation.y = Math.PI
        wainscotTrim.scale.set(0.2,0.17, L_L_L_WallWainscot.scale.x);
        wainscotTrim.position.set(L_L_L_WallWainscot.position.x-0.008,L_L_L_WallWainscot.position.y*2,L_L_L_WallWainscot.position.z);
        LeftLeanWalls.add(wainscotTrim);
      }
   }

}   

   /*code for transperant whole Right Lean-To Walls and walls Count */
   let wallVal; 
   let leftLeanwalls = {};
   const_var.scene.children.forEach(function(Group) {
       if ("LeftLeanWalls" == Group.name) { 
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

     if ( params.add_storage_check ) {
        if (params.p_b_c_b_l != "Open") closedSideWalls = (closedSideWalls - 1);
        if (params.p_b_c_b_l == "Close") fullyClosedSideWalls = (fullyClosedSideWalls - 1);

      }
     
    //   console.log(closedSideWalls,const_var.llClosedSideWalls,"closedSideWalls", closedEndWalls, const_var.llClosedEndWalls,"closedEndWalls");

                        //    //New Svg indecator for all dirction walls
                        //    const loader = new SVGLoader();
                        //    const url_front = process.env.REACT_APP_BASE_URL+frontTitleUrl;
                        //    loader.load(
                        //        // resource URL
                        //        url_front,
                        //        function (data) {
               
                        //            const paths = data.paths;
                        //            const group = new THREE.Group();
                        //            group.name = "LLfrontWallName";
               
                        //            for (let i = 0; i < paths.length; i++) {
               
                        //                const path = paths[i];
               
                        //                const material = new THREE.MeshBasicMaterial({
                        //                    color: const_var.wallNameColor,
                        //                    side: THREE.BackSide,
                        //                    depthWrite: true
                        //                });
               
                        //                const shapes = SVGLoader.createShapes(path);
               
                        //                for (let j = 0; j < shapes.length; j++) {
               
                        //                    const shape = shapes[j];
                        //                    const geometry = new THREE.ShapeGeometry(shape);
                        //                    const mesh = new THREE.Mesh(geometry, material);
                        //                    mesh.scale.setScalar(0.05)
                        //                    mesh.rotateZ(-Math.PI)
                        //                    mesh.rotateY(Math.PI)
                        //                    mesh.position.set((params.p_w/-2)-(params.lean_p_w),0.6,params.lean_p_d/2 + 0.1)
                        //                    group.add(mesh);
                        //                    group.visible = params.add_left_lean;
               
                        //                }
               
                        //            }
               
                        //            LeftLeanWalls.add(group);
               
                        //        },
                        //     //    function (xhr) {
               
                        //     //        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
               
                        //     //    },
                        //     //    function (error) {
               
                        //     //        console.log('An error happened');
               
                        //     //    }
                        //    );
               
                        //    const url_side = process.env.REACT_APP_BASE_URL+sideTitleUrl;
               
                        //    loader.load(
                        //        // resource URL
                        //        url_side,
                        //        function (data) {
               
                        //            const paths = data.paths;
                        //            const group = new THREE.Group();
                        //            group.name = "LLsideWallName";
               
                        //            for (let i = 0; i < paths.length; i++) {
               
                        //                const path = paths[i];
               
                        //                const material = new THREE.MeshBasicMaterial({
                        //                    color: const_var.wallNameColor,
                        //                    side: THREE.BackSide,
                        //                    depthWrite: true
                        //                });
               
                        //                const shapes = SVGLoader.createShapes(path);
               
                        //                for (let j = 0; j < shapes.length; j++) {
               
                        //                    const shape = shapes[j];
                        //                    const geometry = new THREE.ShapeGeometry(shape);
                        //                    const mesh = new THREE.Mesh(geometry, material);
                        //                    mesh.scale.setScalar(0.05)
                        //                    mesh.rotateZ(-Math.PI)
                        //                    mesh.rotateY(-Math.PI / 2)
                        //                    mesh.position.set((params.p_w/-2)-(params.lean_p_w)-0.1,0.6,params.lean_p_d/-2 - 0.1)
                        //                    group.add(mesh);
                        //                    group.visible = params.add_left_lean;
               
                        //                }
               
                        //            }
               
                        //            LeftLeanWalls.add(group);
               
                        //        },
                        //     //    function (xhr) {
               
                        //     //        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
               
                        //     //    },
                        //     //    function (error) {
               
                        //     //        console.log('An error happened');
               
                        //     //    }
                        //    );
                        //    const url_back = process.env.REACT_APP_BASE_URL+backTitleUrl;
               
                        //    loader.load(
                        //        // resource URL
                        //        url_back,
                        //        function (data) {
               
                        //            const paths = data.paths;
                        //            const group = new THREE.Group();
                        //            group.name = "LLbackWallName";
               
                        //            for (let i = 0; i < paths.length; i++) {
               
                        //                const path = paths[i];
               
                        //                const material = new THREE.MeshBasicMaterial({
                        //                    color: const_var.wallNameColor,
                        //                    side: THREE.BackSide,
                        //                    depthWrite: true
                        //                });
               
                        //                const shapes = SVGLoader.createShapes(path);
               
                        //                for (let j = 0; j < shapes.length; j++) {
               
                        //                    const shape = shapes[j];
                        //                    const geometry = new THREE.ShapeGeometry(shape);
                        //                    const mesh = new THREE.Mesh(geometry, material);
                        //                    mesh.scale.setScalar(0.05)
                        //                    mesh.rotateZ(Math.PI)
                        //                    // mesh.rotateY(Math.PI)
                        //                    mesh.position.set((params.p_w/-2),0.6,params.lean_p_d/-2 - 0.1)
                        //                    group.add(mesh);
                        //                    group.visible = params.add_left_lean;
               
                        //                }
               
                        //            }
               
                        //            LeftLeanWalls.add(group);
               
                        //        },
                        //     //    function (xhr) {
               
                        //     //        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
               
                        //     //    },
                        //     //    function (error) {
               
                        //     //        console.log('An error happened');
               
                        //     //    }
                        //    );
                        //    if (const_var.entry_points.length>0) {
                        //     DoorCSG(); 
                        //   }
}

const_var.llClosedSideWalls = closedSideWalls;
const_var.llClosedEndWalls =  closedEndWalls;
const_var.llFullyEnclosedWalls = fullyClosedEndWalls+fullyClosedSideWalls;

 const_var.wallsData.leftLean.closedSideWalls =closedSideWalls;
 const_var.wallsData.leftLean.closedEndWalls =closedEndWalls;
 const_var.wallsData.leftLean.p_b_c_b_l = params.p_b_c_b_l;
 const_var.wallsData.leftLean.p_b_c_b_l_f = params.p_b_c_b_l_f;
 const_var.wallsData.leftLean.p_b_c_b_l_b = params.p_b_c_b_l_b;

   /* Left LeanTo Alignment */
   if (params.leantoAlignmentLeft=="1"){
    LeftLeanWalls.position.z = 0;
   }
   if (params.leantoAlignmentLeft=="2"){
    LeftLeanWalls.position.z = params.p_d/2-params.lean_p_d/2;
   }
   if (params.leantoAlignmentLeft=="3"){
    LeftLeanWalls.position.z = -params.p_d/2+params.lean_p_d/2;
   }
   if ( params.isShowCenter == true ) {
    LeftLeanWalls.visible = false
  }
// console.log(LeftLeanWalls,"LeftLeanWalls123");
}