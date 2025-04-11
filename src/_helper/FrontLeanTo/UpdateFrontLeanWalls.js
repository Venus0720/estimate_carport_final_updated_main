import * as THREE from "three";
import verticalTexture from '../../assets/images/imgTextures/buildingImages/verticalTexture.jpeg';
import horizontalTexture from '../../assets/images/imgTextures/buildingImages/horizantalTexture.jpeg';
import { params, const_var, } from '../../redux/reducers/reducer';
import frontTitleUrl from "../../assets/walls-names/FLF.svg"
import backTitleUrl from "../../assets/walls-names/FLB.svg"
import sideTitleUrl from "../../assets/walls-names/FLL.svg"

import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader"
import { wallNameInBackgroundImage } from "../../redux/reducers/pricingReducer";
import { showWallName } from "../../redux/reducers/utils";
// import { DoorCSG } from '../../redux/reducers/pricingReducer';

export const updateFrontLeanToWalls = () => {
  
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

        // /* Code for Center Building Walls Name */
        // let frontWallName = const_var.scene.getObjectByName("FLfrontWallName")
        // let backWallName = const_var.scene.getObjectByName("FLbackWallName")
        // let sideWallName = const_var.scene.getObjectByName("FLsideWallName")

        // if(frontWallName != undefined){
        //   frontWallName.position.set(params.leanF_p_d/2,0,(params.p_d/2)+(params.leanF_p_w));
        //   frontWallName.visible = params.add_front_lean;
        // }
        // if(backWallName != undefined){
        //   backWallName.position.set(params.leanF_p_d/-2,0,(params.p_d/2));
        //   backWallName.visible = params.add_front_lean;
        // }
        // if(sideWallName != undefined){
        //   sideWallName.position.set(params.leanF_p_d/-2,0,(params.p_d/2)+(params.leanF_p_w)+0.1);
        //   sideWallName.visible = params.add_front_lean;
        // }

    if ("undefined" != typeof const_var.scene.getObjectByName("FrontLeanWalls")) const_var.scene.remove(const_var.scene.getObjectByName("FrontLeanWalls"));

     // Front Lean To Walls Group
     const FrontLeanWalls = new THREE.Group();
     FrontLeanWalls.name = "FrontLeanWalls";
     FrontLeanWalls.rotation.set(0,Math.PI/2,0);;
     const_var.scene.add(FrontLeanWalls);

     let closedSideWalls = 0; let closedEndWalls = 0;
     let fullyClosedSideWalls = 0; let fullyClosedEndWalls = 0;

    let addDoorIntersectWall = function(height, pHeight, wall) {
        const nWall =  wall.clone();
        nWall.position.y = height - height/2 - pHeight/2;
        if (nWall.visible === true) nWall.scale.y =  (height - pHeight);
        nWall.visible = false;
        FrontLeanWalls.add(nWall);
        wall.name +=1;
        const_var.wallsForCut[wall.name] = wall.clone();
    }

    showWallName("front")

  if(params.add_front_lean == true){
    /*Front Lean To Front Wall*/
    if (const_var.b_t_M_F_t_F.getObjectByName("F_L_F_W")!=undefined) {
        let F_L_FrontWall = const_var.b_t_M_F_t_F.getObjectByName("F_L_F_W").clone();

        let f_p_w_scale = 0;
        let f_p_w_position = 0;
 
        if( params.add_left_front_lean_porch == true &&  params.add_right_front_lean_porch == false){
             f_p_w_scale = params.leanF_p_w;
             f_p_w_position = params.leanF_p_w/2;
        }
        if( params.add_left_front_lean_porch == false &&  params.add_right_front_lean_porch == true){
         f_p_w_scale = params.leanF_p_w;
         f_p_w_position = -params.leanF_p_w/2;
        }
        if( params.add_left_front_lean_porch == true &&  params.add_right_front_lean_porch == true){
         f_p_w_scale = params.leanF_p_w + params.leanF_p_w;
        }
    
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
            F_L_FrontWall.visible = (params.p_b_c_b_f_l != "Open")?true:false;

            F_L_FrontWall.position.x = (params.p_d / -2 - params.leanF_p_w)- 0.03;
            F_L_FrontWall.position.z = -f_p_w_position;

            let wH = params.leanF_p_h;
            let wP = params.leanF_p_h - wH/2;
            F_L_FrontWall.position.y = wP;				
            F_L_FrontWall.scale.set(params.leanF_p_d,wH,1);				
            switch(params.p_b_c_b_f_l)
            {
                case "One_Fourth_Close":
                    wH = wH/4;
                    wP = params.leanF_p_h - wH/2;
                    break;
                case "Half_Close":
                    wH = wH/2;
                    wP = params.leanF_p_h - wH/2;
                    break;					
                case "Three_Fourth_Close":
                    wH = wH * 3/4;
                    wP = params.leanF_p_h - wH/2;
                    break;
                case "Extended Gable":
                    break;
                case "Gable":
                    break;
                    case "Open":
                case "Close":
                    wH = params.leanF_p_h;
                    wP = params.leanF_p_h - wH/2;
                    break;
                default:
                    if(params.p_r_s == "1"){
                        wH = (Math.abs(params.p_b_c_b_f_l.replace(/\D/g, "")) * 3)+0.3;
                        wP = params.leanF_p_h - wH/2;
                    }else{
                    wH = (Math.abs(params.p_b_c_b_f_l.replace(/\D/g, "")) * 3);
                    wP = params.leanF_p_h - wH/2;
                    }
                    break;
            }

            if(params.p_r_s == "1"){			
                F_L_FrontWall.position.y = wP-0.15;				
                F_L_FrontWall.scale.set(params.leanF_p_d+f_p_w_scale,wH-0.3,1);
            }else{
                F_L_FrontWall.position.y = wP;				
                F_L_FrontWall.scale.set(params.leanF_p_d+f_p_w_scale,wH,1);
            }
            let F_L_FrontWallLoader = new THREE.TextureLoader();
            let F_L_FrontWallTexture = F_L_FrontWallLoader.load(process.env.REACT_APP_BASE_URL+ wallTexture, function(texture) {
             F_L_FrontWall.material.map = texture;
             F_L_FrontWall.material.bumpMap = texture;
             F_L_FrontWall.material.bumpScale = 0.02
             F_L_FrontWall.material.metalness = 1
             F_L_FrontWall.material.roughness = 0.5
             F_L_FrontWall.material.anisotropy = 10;
             F_L_FrontWall.material.map.wrapS = THREE.RepeatWrapping;
             F_L_FrontWall.material.map.wrapT = THREE.RepeatWrapping;
             F_L_FrontWall.material.map.offset.x = params.leanF_p_w;
             F_L_FrontWall.material.map.offset.y = params.leanF_p_w;

            if(params.p_v_w==true)
            {
                F_L_FrontWall.material.map.repeat.set(((params.leanF_p_d/2)+(params.leanF_p_d/2/3))*2,1);
                if (params.add_left_front_lean_porch == true &&  params.add_right_front_lean_porch == false){
                  F_L_FrontWall.material.map.repeat.set(((params.leanF_p_d/2)+(params.leanF_p_d/2/3)+(params.leanF_p_w/2))*2,1);
                }
                else if ( params.add_left_front_lean_porch == false &&  params.add_right_front_lean_porch == true){
                  F_L_FrontWall.material.map.repeat.set(((params.leanF_p_d/2)+(params.leanF_p_d/2/3)+(params.leanF_p_w/2))*2,1);
  
                } 
                else if( params.add_left_front_lean_porch == true &&  params.add_right_front_lean_porch == true){
                  F_L_FrontWall.material.map.repeat.set(((params.leanF_p_d/2)+(params.leanF_p_d/2/3)+(params.leanF_p_w/2)+(params.leanF_p_w/2))*2,1);
                }
            }else
            {
                F_L_FrontWall.material.map.repeat.set(1,Math.round((wH/1.5)*2));
            }

            F_L_FrontWall.material.map.needsUpdate = true;
            F_L_FrontWall.material.needsUpdate = true;
            
            let innerWall = FrontLeanWalls.getObjectByName("F_L_F_W_inner")
            innerWall.material.map = texture.clone();
            innerWall.material.map.wrapS = THREE.RepeatWrapping;
            innerWall.material.map.wrapT = THREE.RepeatWrapping;
            innerWall.material.map.offset.x = params.p_w;
            innerWall.material.map.offset.y = params.p_w;
            innerWall.material.map.repeat.set( F_L_FrontWall.material.map.repeat.x, F_L_FrontWall.material.map.repeat.y);
            innerWall.material.color.set(0xFFFFFF)
            innerWall.material.map.needsUpdate = true 
            innerWall.material.needsUpdate = true 

            })

        if (params.p_b_c_b_f_l !== "Close") {
            addDoorIntersectWall(params.leanF_p_h, wH, F_L_FrontWall);
        }
        FrontLeanWalls.add(F_L_FrontWall);

        if (const_var.b_t_M_L.getObjectByName("jTrim")!=undefined && params.p_b_c_b_f_l !== "Close" && params.p_b_c_b_f_l !== "Open" && params.p_j_t == true) {
          let jTrim = const_var.b_t_M_L.getObjectByName("jTrim").clone();
          jTrim.name = "F_L_F_W_jtrim";
          jTrim.material = jTrim.material.clone();
          jTrim.material.color.setHex(jTrimCalor)
          jTrim.visible = true
          // jTrim.rotation.y = Math.PI/-2
          jTrim.scale.set(0.14+(jTrimAlignment),0.12, F_L_FrontWall.scale.x);
          jTrim.position.set(params.p_d / -2 - params.leanF_p_w + 0.025+(jTrimAlignment/2),F_L_FrontWall.position.y-(F_L_FrontWall.scale.y/2)-0.01,F_L_FrontWall.position.z);
          if(params.add_storage_check_front){
            jTrim.scale.z = params.leanF_p_d-params.add_storage_front;
            jTrim.position.z= params.add_storage_front/2;
            if(params.add_right_front_lean_porch == true){
              jTrim.scale.z = params.leanF_p_d-params.add_storage_front+params.leanF_p_w;
              jTrim.position.z= params.add_storage_front/2+(params.leanF_p_w/2);
            }
            if(params.add_left_front_lean_porch == true){
              let jTrim2 = const_var.b_t_M_L.getObjectByName("jTrim").clone();
              jTrim2.scale.set(jTrim.scale.x,jTrim.scale.y, params.leanF_p_w);
              jTrim2.position.set(jTrim.position.x,jTrim.position.y,(params.leanF_p_d/-2)-(params.leanF_p_w/2));
              jTrim2.rotation.y = jTrim.rotation.y
              jTrim2.visible = true;
              jTrim2.name = "F_L_F_W1_jtrim";
              jTrim2.material = jTrim2.material.clone();
              FrontLeanWalls.add(jTrim2);
            }
          }
          FrontLeanWalls.add(jTrim);
        }
    }

    //Front Lean to Front double Wall
    if (FrontLeanWalls.getObjectByName("F_L_F_W_inner")==undefined) {
      
      let frontLeanFrontWallClone = params.p_b_c_b_f_l !== "Close" ? FrontLeanWalls.getObjectByName("F_L_F_W1"): FrontLeanWalls.getObjectByName("F_L_F_W");
    
        if(FrontLeanWalls.getObjectByName("F_L_F_W") != undefined){
        let doubleFrontLeanFrontWall = frontLeanFrontWallClone.clone();
        
        let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
        doubleFrontLeanFrontWall = new THREE.Mesh(doubleFrontLeanFrontWall.geometry,leftDoubleMaterial);
        doubleFrontLeanFrontWall.name = "F_L_F_W_inner"
        doubleFrontLeanFrontWall.visible = (params.is_translusant==true)? false : frontLeanFrontWallClone.visible
        doubleFrontLeanFrontWall.scale.set(frontLeanFrontWallClone.scale.x , frontLeanFrontWallClone.scale.y , frontLeanFrontWallClone.scale.z);
        doubleFrontLeanFrontWall.position.set(frontLeanFrontWallClone.position.x +wallDistance, frontLeanFrontWallClone.position.y , frontLeanFrontWallClone.position.z);
        doubleFrontLeanFrontWall.rotation.set(frontLeanFrontWallClone.rotation.x , frontLeanFrontWallClone.rotation.y , frontLeanFrontWallClone.rotation.z)
        
          FrontLeanWalls.add(doubleFrontLeanFrontWall);

           const_var.wallsForCut.F_L_F_W_inner = doubleFrontLeanFrontWall.clone();
        }
      }
    
    /*Front Lean To Right Wall*/
    if (const_var.b_t_M_F_t_F.getObjectByName("F_L_R_W")!=undefined) {
        let F_L_RightWall = const_var.b_t_M_F_t_F.getObjectByName("F_L_R_W").clone();
    
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
        let ltFwallPos = params.p_d/-2 - params.leanF_p_w/2;
        
        F_L_RightWall.visible = (params.p_b_c_b_f_f != "Open")?true:false;
        // F_L_RightWall.visible = (params.p_b_c_b_f_f !="Open")?true:false;  

        // F_L_RightWall.position.x = params.p_w/-2 - params.leanF_p_w/2;
        // F_L_RightWall.position.z = params.leanF_p_d / 2;  
        F_L_RightWall.position.set(ltFwallPos,params.leanF_p_h,params.leanF_p_d/2+0.05);
        
       
                let wH = params.leanF_p_h;
                let wP = params.leanF_p_h - wH/2;
                F_L_RightWall.position.y = wP;				
                F_L_RightWall.scale.set(params.leanF_p_w,wH,1);
                
                switch(params.p_b_c_b_f_f)
                {
                    case "One_Fourth_Close":
                        wH = wH/4;
                        wP = params.leanF_p_h - wH/2;
                        break;
                    case "Half_Close":
                        wH = wH/2;
                        wP = params.leanF_p_h - wH/2;
                        break;					
                    case "Three_Fourth_Close":
                        wH = wH * 3/4;
                        wP = params.leanF_p_h - wH/2;
                        break;
                    case "Extended Gable":
                        wH = wH/6;
                        wP = params.leanF_p_h - wH/2;
                        break;
                    case "Gable":
                        wH = 0.15;
                        wP = params.leanF_p_h - wH/2;
                        break;
                        case "Open":
                    case "Close":
                        wH = params.leanF_p_h;
                        wP = params.leanF_p_h - wH/2;
                        break;
                    default:
                        wH = Math.abs(params.p_b_c_b_f_f.replace(/\D/g, "")) * 3;
                        wP = params.leanF_p_h - wH/2;				
                        break;
                }
                F_L_RightWall.position.y = wP;				
                F_L_RightWall.scale.set(params.leanF_p_w,wH,1);
                let F_L_RightWallLoader = new THREE.TextureLoader();
                let F_L_RightWallTexture = F_L_RightWallLoader.load(process.env.REACT_APP_BASE_URL+ wallTexture, function(texture) {
                    F_L_RightWall.material.morphNormals = true;
                    F_L_RightWall.material.morphTargets = true;							
                    F_L_RightWall.material.map = texture;
                    F_L_RightWall.material.bumpMap = texture;
                    F_L_RightWall.material.bumpScale = 0.02
                    F_L_RightWall.material.metalness = 1
                    F_L_RightWall.material.roughness = 0.5
                    F_L_RightWall.material.anisotropy = 10;
                    F_L_RightWall.material.map.wrapS = THREE.RepeatWrapping;
                    F_L_RightWall.material.map.wrapT = THREE.RepeatWrapping;
                    F_L_RightWall.material.map.offset.x = params.leanF_p_w;
                    F_L_RightWall.material.map.offset.y = params.leanF_p_w;
                        
                if(params.p_v_w==true){
                    F_L_RightWall.material.map.repeat.set(Math.round(((params.leanF_p_w/2)+(params.leanF_p_w/2/3))*2),1);
                }else {
                    F_L_RightWall.material.map.repeat.set(1,Math.round((wH/1.5)*2));
                }

                F_L_RightWall.material.map.needsUpdate = true;
                F_L_RightWall.material.needsUpdate = true;
                            
                let innerWall = FrontLeanWalls.getObjectByName("F_L_R_W_inner")
                innerWall.material.map = texture.clone();
                innerWall.material.map.wrapS = THREE.RepeatWrapping;
                innerWall.material.map.wrapT = THREE.RepeatWrapping;
                innerWall.material.map.offset.x = params.p_w;
                innerWall.material.map.offset.y = params.p_w;
                innerWall.material.map.rotation = Math.PI
                innerWall.material.map.repeat.set( F_L_RightWall.material.map.repeat.x, F_L_RightWall.material.map.repeat.y);
                innerWall.material.color.set(0xFFFFFF)
                innerWall.material.map.needsUpdate = true 
                innerWall.material.needsUpdate = true 

                } )

        if (params.p_b_c_b_f_f !== "Close") {
          addDoorIntersectWall(params.leanF_p_h, wH, F_L_RightWall);
        }
        FrontLeanWalls.add(F_L_RightWall);

        if (const_var.b_t_M_L.getObjectByName("jTrim")!=undefined && params.p_b_c_b_f_f !== "Close" && params.p_b_c_b_f_f !== "Open" && params.p_j_t_end == true) {
          let jTrim = const_var.b_t_M_L.getObjectByName("jTrim").clone();
          jTrim.name = "F_L_R_W_jtrim";
          jTrim.material = jTrim.material.clone();
          jTrim.material.color.setHex(jTrimCalor)
          jTrim.visible = true
          jTrim.rotation.y = Math.PI/2
          jTrim.scale.set(0.14+(jTrimAlignment),0.12, F_L_RightWall.scale.x-0.25);
          jTrim.position.set(F_L_RightWall.position.x+0.1,F_L_RightWall.position.y-(F_L_RightWall.scale.y/2)-0.01,(params.leanF_p_d/2)-0.005-(jTrimAlignment/2));
          FrontLeanWalls.add(jTrim);
        }
    }

    //Front Lean to Right double Wall
    if (FrontLeanWalls.getObjectByName("F_L_R_W_inner")==undefined) {
      
        let frontLeanRightWallClone = (params.p_b_c_b_f_f !== "Close") ?  FrontLeanWalls.getObjectByName("F_L_R_W1") : FrontLeanWalls.getObjectByName("F_L_R_W");
      
          if(frontLeanRightWallClone != undefined){
          let doubleFrontLeanRightWall = frontLeanRightWallClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleFrontLeanRightWall = new THREE.Mesh(doubleFrontLeanRightWall.geometry,leftDoubleMaterial);
          doubleFrontLeanRightWall.name = "F_L_R_W_inner"
          doubleFrontLeanRightWall.visible = (params.is_translusant==true)? false : frontLeanRightWallClone.visible
          doubleFrontLeanRightWall.scale.set(frontLeanRightWallClone.scale.x , frontLeanRightWallClone.scale.y , frontLeanRightWallClone.scale.z);
          doubleFrontLeanRightWall.position.set(frontLeanRightWallClone.position.x , frontLeanRightWallClone.position.y , frontLeanRightWallClone.position.z-wallDistance);
          doubleFrontLeanRightWall.rotation.set(frontLeanRightWallClone.rotation.x , frontLeanRightWallClone.rotation.y , frontLeanRightWallClone.rotation.z)
          
            FrontLeanWalls.add(doubleFrontLeanRightWall);

             const_var.wallsForCut.F_L_R_W_inner = doubleFrontLeanRightWall.clone();
          }
        }

    /*Front Lean To Left Wall*/
    if (const_var.b_t_M_F_t_F.getObjectByName("F_L_L_W")!=undefined) {
        let F_L_LeftWall = const_var.b_t_M_F_t_F.getObjectByName("F_L_L_W").clone();
    
        // if (params.p_v_w==true){
            //   wallTexture = verticalTexture;
            // } else {
                //   wallTexture = horizontalTexture;
                // }
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;

        let wallPos = params.p_d/-2 - params.leanF_p_w/2;
        // F_L_LeftWall.visible = (params.p_b_c_b_f_b !="Open")?true:false;  
        F_L_LeftWall.visible = (params.p_b_c_b_f_b != "Open")?true:false;
        // if (params.add_storage_check_front) params.p_b_c_b_f_b = "Close"

        F_L_LeftWall.scale.set(params.leanF_p_w,params.leanF_p_h,1);
        F_L_LeftWall.position.set(wallPos,params.leanF_p_h/2,params.leanF_p_d / -2-0.05);

            let wH = params.leanF_p_h;
            let wP = params.leanF_p_h - wH/2;
           F_L_LeftWall.position.y = wP;				
           F_L_LeftWall.scale.set(params.leanF_p_w,params.leanF_p_h,1);
            switch(params.p_b_c_b_f_b)
            {
                case "One_Fourth_Close":
                    wH = wH/4;
                    wP = params.leanF_p_h - wH/2;
                    break;
                case "Half_Close":
                    wH = wH/2;
                    wP = params.leanF_p_h - wH/2;
                    break;					
                case "Three_Fourth_Close":
                    wH = wH * 3/4;
                    wP = params.leanF_p_h - wH/2;
                    break;
                case "Extended Gable":
                    wH = wH/6;
                    wP = params.leanF_p_h - wH/2;
                    break;
                case "Gable":
                    wH = 0.15;
                    wP = params.leanF_p_h - wH/2; 
                    break;
                    case "Open":
                case "Close":
                    wH = params.leanF_p_h;
                    wP = params.leanF_p_h - wH/2;
                    break;
                default:
                    wH = Math.abs(params.p_b_c_b_f_l.replace(/\D/g, "")) * 3;
                    wP = params.leanF_p_h - wH/2;				
                    break;
            }
           F_L_LeftWall.position.y = wP;				
           F_L_LeftWall.scale.set(params.leanF_p_w,wH,1);
           let F_L_LeftWallLoader = new THREE.TextureLoader();
           let F_L_LeftWallTexture = F_L_LeftWallLoader.load(process.env.REACT_APP_BASE_URL+ wallTexture, function(texture) {
              F_L_LeftWall.material.map = texture;
              F_L_LeftWall.material.bumpMap = texture;
              F_L_LeftWall.material.bumpScale = 0.02
              F_L_LeftWall.material.metalness = 1
              F_L_LeftWall.material.roughness = 0.5
              F_L_LeftWall.material.anisotropy = 10;
              F_L_LeftWall.material.map.wrapS = THREE.RepeatWrapping;
              F_L_LeftWall.material.map.wrapT = THREE.RepeatWrapping;
              F_L_LeftWall.material.map.offset.x = params.leanF_p_w;
              F_L_LeftWall.material.map.offset.y = params.leanF_p_w;
            
            if(params.p_v_w==true){
               F_L_LeftWall.material.map.repeat.set(Math.round(((params.leanF_p_w/2)+(params.leanF_p_w/2/3))*2),1);
            } else {
               F_L_LeftWall.material.map.repeat.set(1,Math.round((wH/1.5)*2));
             }		
             
             F_L_LeftWall.material.map.needsUpdate = true;
             F_L_LeftWall.material.needsUpdate = true;
                                         
             let innerWall = FrontLeanWalls.getObjectByName("F_L_L_W_inner")
             innerWall.material.map = texture.clone();
             innerWall.material.map.wrapS = THREE.RepeatWrapping;
             innerWall.material.map.wrapT = THREE.RepeatWrapping;
             innerWall.material.map.offset.x = params.p_w;
             innerWall.material.map.offset.y = params.p_w;
             innerWall.material.map.rotation = Math.PI
             innerWall.material.map.repeat.set( F_L_LeftWall.material.map.repeat.x, F_L_LeftWall.material.map.repeat.y);
             innerWall.material.color.set(0xFFFFFF)
             innerWall.material.map.needsUpdate = true 
             innerWall.material.needsUpdate = true 

              })
              // params.add_storage_check_front ? params.p_b_c_b_f_b = "Close" : params.p_b_c_b_f_b = "Open" 

              if (params.p_b_c_b_f_b !== "Close") {
                addDoorIntersectWall(params.leanF_p_h, wH, F_L_LeftWall);
              }
              FrontLeanWalls.add(F_L_LeftWall);

              if (const_var.b_t_M_L.getObjectByName("jTrim")!=undefined && params.p_b_c_b_f_b !== "Close" && params.p_b_c_b_f_b !== "Open" && params.p_j_t_end == true) {
                let jTrim = const_var.b_t_M_L.getObjectByName("jTrim").clone();
                jTrim.name = "F_L_L_W_jtrim";
                jTrim.material = jTrim.material.clone();
                jTrim.material.color.setHex(jTrimCalor)
                jTrim.visible = true
                jTrim.rotation.y = Math.PI/-2
                jTrim.scale.set(0.14+(jTrimAlignment),0.12, F_L_LeftWall.scale.x-0.25);
                jTrim.position.set(F_L_LeftWall.position.x+0.1,F_L_LeftWall.position.y-(F_L_LeftWall.scale.y/2)-0.01,(params.leanF_p_d/-2)+0.005+(jTrimAlignment/2));
                FrontLeanWalls.add(jTrim);
              }
    }

    //Front Lean to Left double Wall
    if (FrontLeanWalls.getObjectByName("F_L_L_W_inner")==undefined) {
      
        let frontLeanLeftWallClone = (params.p_b_c_b_f_b !== "Close") ? FrontLeanWalls.getObjectByName("F_L_L_W1") : FrontLeanWalls.getObjectByName("F_L_L_W");
      
          if(frontLeanLeftWallClone != undefined){
          let doubleFrontLeanLeftWall = frontLeanLeftWallClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleFrontLeanLeftWall = new THREE.Mesh(doubleFrontLeanLeftWall.geometry,leftDoubleMaterial);
          doubleFrontLeanLeftWall.name = "F_L_L_W_inner"
          doubleFrontLeanLeftWall.visible = (params.is_translusant==true)? false : frontLeanLeftWallClone.visible
          doubleFrontLeanLeftWall.scale.set(frontLeanLeftWallClone.scale.x , frontLeanLeftWallClone.scale.y , frontLeanLeftWallClone.scale.z);
          doubleFrontLeanLeftWall.position.set(frontLeanLeftWallClone.position.x , frontLeanLeftWallClone.position.y , frontLeanLeftWallClone.position.z+wallDistance);
          doubleFrontLeanLeftWall.rotation.set(frontLeanLeftWallClone.rotation.x , frontLeanLeftWallClone.rotation.y , frontLeanLeftWallClone.rotation.z)

            FrontLeanWalls.add(doubleFrontLeanLeftWall);

            const_var.wallsForCut.F_L_L_W_inner = doubleFrontLeanLeftWall.clone();
          }
        }


  if(params.add_storage_check_front == true){      
    /*Front Lean To Right Storage Wall*/
    if (const_var.b_t_M_F_t_F.getObjectByName("F_L_R_S_W")!=undefined) {
        let F_L_R_S_Wall = const_var.b_t_M_F_t_F.getObjectByName("F_L_R_S_W").clone();
    
        // let wallTexture = horizontalTexture;
        // if (params.p_v_w==true){
        //   wallTexture = verticalTexture;
        // } else {
        //   wallTexture = horizontalTexture;
        // }
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;

        let ltFwallPos = params.p_d/-2 - params.leanF_p_w/2;	
        F_L_R_S_Wall.position.x = ltFwallPos;
        F_L_R_S_Wall.position.y =  params.leanF_p_h/2
        F_L_R_S_Wall.position.z = params.leanF_p_d /-2+ (parseInt(params.add_storage_front));
        F_L_R_S_Wall.scale.set(params.leanF_p_w,params.leanF_p_h,1);
        F_L_R_S_Wall.visible = (params.add_storage_check_front!=false)?true:false;

        if(params.p_r_s == "1"){
            F_L_R_S_Wall.position.y =  params.leanF_p_h/2-wallDistance
          }
          let F_L_R_S_WallLoader = new THREE.TextureLoader();
          let F_L_R_S_WallTexture = F_L_R_S_WallLoader.load(process.env.REACT_APP_BASE_URL+ wallTexture, function(texture) {
              F_L_R_S_Wall.material.morphNormals = true;
              F_L_R_S_Wall.material.morphTargets = true;		
              F_L_R_S_Wall.material.map = texture;
              F_L_R_S_Wall.material.bumpMap = texture;
              F_L_R_S_Wall.material.bumpScale = 0.02
              F_L_R_S_Wall.material.metalness = 1
              F_L_R_S_Wall.material.roughness = 0.5
              F_L_R_S_Wall.material.anisotropy = 10;
              F_L_R_S_Wall.material.map.wrapS = THREE.RepeatWrapping;
              F_L_R_S_Wall.material.map.wrapT = THREE.RepeatWrapping;
              F_L_R_S_Wall.material.map.offset.x = params.leanF_p_w;
              F_L_R_S_Wall.material.map.offset.y = params.leanF_p_w;
              F_L_R_S_Wall.material.map.needsUpdate = true;
              F_L_R_S_Wall.material.needsUpdate = true;
        if(params.p_v_w==true){
            F_L_R_S_Wall.material.map.repeat.set(Math.round(((params.leanF_p_w/2)+(params.leanF_p_w/2/3))*2),1);
        }else{
            F_L_R_S_Wall.material.map.repeat.set(1,Math.round((params.leanF_p_h/1.5)*2));
        }
                                                 
        let innerWall = FrontLeanWalls.getObjectByName("F_L_R_S_W_inner")
        innerWall.material.map = texture.clone();
        innerWall.material.map.wrapS = THREE.RepeatWrapping;
        innerWall.material.map.wrapT = THREE.RepeatWrapping;
        innerWall.material.map.offset.x = params.p_w;
        innerWall.material.map.offset.y = params.p_w;
        innerWall.material.map.rotation = Math.PI
        innerWall.material.map.repeat.set( F_L_R_S_Wall.material.map.repeat.x, F_L_R_S_Wall.material.map.repeat.y);
        innerWall.material.color.set(0xFFFFFF)
        innerWall.material.map.needsUpdate = true 
        innerWall.material.needsUpdate = true 

         } )
        FrontLeanWalls.add(F_L_R_S_Wall);
    }

    //Front Lean to Right Storage double Wall
    if (FrontLeanWalls.getObjectByName("F_L_R_S_W_inner")==undefined) {
      
        let frontLeanRightStorageWallClone = FrontLeanWalls.getObjectByName("F_L_R_S_W");
      
          if(FrontLeanWalls.getObjectByName("F_L_R_S_W") != undefined){
          let doubleFrontLeanRightStorageWall = frontLeanRightStorageWallClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleFrontLeanRightStorageWall = new THREE.Mesh(doubleFrontLeanRightStorageWall.geometry,leftDoubleMaterial);
          doubleFrontLeanRightStorageWall.name = "F_L_R_S_W_inner"
          doubleFrontLeanRightStorageWall.visible = (params.is_translusant==true)? false : frontLeanRightStorageWallClone.visible
          doubleFrontLeanRightStorageWall.scale.set(frontLeanRightStorageWallClone.scale.x , frontLeanRightStorageWallClone.scale.y , frontLeanRightStorageWallClone.scale.z);
          doubleFrontLeanRightStorageWall.position.set(frontLeanRightStorageWallClone.position.x , frontLeanRightStorageWallClone.position.y , frontLeanRightStorageWallClone.position.z-wallDistance);
          doubleFrontLeanRightStorageWall.rotation.set(frontLeanRightStorageWallClone.rotation.x , frontLeanRightStorageWallClone.rotation.y , frontLeanRightStorageWallClone.rotation.z)
          
            FrontLeanWalls.add(doubleFrontLeanRightStorageWall);

             const_var.wallsForCut.F_L_R_S_W_inner = doubleFrontLeanRightStorageWall.clone();
          }
        }

    /*Front Lean To Left Storage Wall*/
    if (const_var.b_t_M_F_t_F.getObjectByName("F_L_L_S_W")!=undefined) {
        let F_L_L_S_Wall = const_var.b_t_M_F_t_F.getObjectByName("F_L_L_S_W").clone();
    
        // let wallTexture = horizontalTexture;
        // if (params.p_v_w==true){
        //   wallTexture = verticalTexture;
        // } else {
        //   wallTexture = horizontalTexture;
        // }
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
       
        F_L_L_S_Wall.visible = (params.add_storage_check_front!=false)?true:false;
        let wallPos = params.p_d/-2 - params.leanF_p_w/2;
        // if(params.p_b_c_b_f_b == "Close"){ F_L_L_S_Wall.visible = false;}
        F_L_L_S_Wall.scale.set(params.leanF_p_w,params.leanF_p_h,1);
        F_L_L_S_Wall.position.set(wallPos,params.leanF_p_h/2,params.leanF_p_d / -2-0.06);
        let F_L_L_S_WallLoader = new THREE.TextureLoader();
        let F_L_L_S_WallTexture = F_L_L_S_WallLoader.load(process.env.REACT_APP_BASE_URL+ wallTexture, function(texture) {
                F_L_L_S_Wall.material.map = texture;
                F_L_L_S_Wall.material.bumpMap = texture;
                F_L_L_S_Wall.material.bumpScale = 0.02
                F_L_L_S_Wall.material.metalness = 1
                F_L_L_S_Wall.material.roughness = 0.5
                F_L_L_S_Wall.material.anisotropy = 10;
                F_L_L_S_Wall.material.map.wrapS = THREE.RepeatWrapping;
                F_L_L_S_Wall.material.map.wrapT = THREE.RepeatWrapping;
                F_L_L_S_Wall.material.map.offset.x = params.leanF_p_w;
                F_L_L_S_Wall.material.map.offset.y = params.leanF_p_w;
                if(params.p_v_w==true){
                    F_L_L_S_Wall.material.map.repeat.set(Math.round(((params.leanF_p_w/2)+(params.leanF_p_w/2/3))*2),1);
                } else{
                    F_L_L_S_Wall.material.map.repeat.set(1,Math.round((params.leanF_p_h/1.5)*2));
                }   
        })
        // FrontLeanWalls.add(F_L_L_S_Wall);
    }

    //Front Lean to Right Storage double Wall
    if (FrontLeanWalls.getObjectByName("F_L_L_S_W_inner")==undefined) {
      
        let frontLeanLeftStorageWallClone = FrontLeanWalls.getObjectByName("F_L_L_S_W");
      
          if(FrontLeanWalls.getObjectByName("F_L_L_S_W") != undefined){
          let doubleFrontLeanLeftStorageWall = frontLeanLeftStorageWallClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleFrontLeanLeftStorageWall = new THREE.Mesh(doubleFrontLeanLeftStorageWall.geometry,leftDoubleMaterial);
          doubleFrontLeanLeftStorageWall.name = "F_L_L_S_W_inner"
          doubleFrontLeanLeftStorageWall.visible = (params.is_translusant==true)? false : frontLeanLeftStorageWallClone.visible
          doubleFrontLeanLeftStorageWall.scale.set(frontLeanLeftStorageWallClone.scale.x , frontLeanLeftStorageWallClone.scale.y , frontLeanLeftStorageWallClone.scale.z);
          doubleFrontLeanLeftStorageWall.position.set(frontLeanLeftStorageWallClone.position.x , frontLeanLeftStorageWallClone.position.y , frontLeanLeftStorageWallClone.position.z+wallDistance);
          doubleFrontLeanLeftStorageWall.rotation.set(frontLeanLeftStorageWallClone.rotation.x , frontLeanLeftStorageWallClone.rotation.y , frontLeanLeftStorageWallClone.rotation.z)
          
            // FrontLeanWalls.add(doubleFrontLeanLeftStorageWall);

            // const_var.wallsForCut.F_L_L_S_W_inner = doubleFrontLeanLeftStorageWall.clone();
          }
        }

    /*Front Lean To Front Storage Wall*/
    if (const_var.b_t_M_F_t_F.getObjectByName("F_L_F_S_W")!=undefined) {
        let F_L_F_S_Wall = const_var.b_t_M_F_t_F.getObjectByName("F_L_F_S_W").clone();
    
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
        F_L_F_S_Wall.visible = (params.add_storage_check_front!=false && params.p_b_c_b_f_l != "Close")?true:false;  
        F_L_F_S_Wall.position.x = params.p_d / -2 - params.leanF_p_w-wallDistance;
        F_L_F_S_Wall.position.y = params.leanF_p_h/2;				
        F_L_F_S_Wall.position.z = (params.leanF_p_d/-2)+(parseInt(params.add_storage_front))/2;
        F_L_F_S_Wall.scale.set((parseInt(params.add_storage_front)),params.leanF_p_h,1);
        if(params.p_r_s == "1"){			
            F_L_F_S_Wall.position.y =  (params.leanF_p_h - params.leanF_p_h/2)-0.3;
            F_L_F_S_Wall.scale.y = params.leanF_p_h - 0.3;				
            }else{
            F_L_F_S_Wall.position.y = params.leanF_p_h/2;				
            } 
        let F_L_F_S_WallLoader = new THREE.TextureLoader();
        let F_L_F_S_WallTexture = F_L_F_S_WallLoader.load(process.env.REACT_APP_BASE_URL+ wallTexture, function(texture) {
           F_L_F_S_Wall.material.map = texture;
           F_L_F_S_Wall.material.bumpMap = texture;
           F_L_F_S_Wall.material.bumpScale = 0.02
           F_L_F_S_Wall.material.metalness = 1
           F_L_F_S_Wall.material.roughness = 0.5
           F_L_F_S_Wall.material.anisotropy = 10;
           F_L_F_S_Wall.material.map.wrapS = THREE.RepeatWrapping;
           F_L_F_S_Wall.material.map.wrapT = THREE.RepeatWrapping;
           F_L_F_S_Wall.material.map.offset.x = params.leanF_p_w;
           F_L_F_S_Wall.material.map.offset.y = params.leanF_p_w;
           F_L_F_S_Wall.material.map.needsUpdate = true;
           F_L_F_S_Wall.material.needsUpdate = true;
         
            if(params.p_v_w==true) {
               F_L_F_S_Wall.material.map.repeat.set(((params.add_storage_front/2)+(params.add_storage_front/2/3))*2,1);
            } else {
               F_L_F_S_Wall.material.map.repeat.set(1,Math.round((params.leanF_p_h/1.5)*2));
            }
                                                                             
        let innerWall = FrontLeanWalls.getObjectByName("F_L_F_S_W_inner")
        innerWall.material.map = texture.clone();
        innerWall.material.map.wrapS = THREE.RepeatWrapping;
        innerWall.material.map.wrapT = THREE.RepeatWrapping;
        innerWall.material.map.offset.x = params.p_w;
        innerWall.material.map.offset.y = params.p_w;
        innerWall.material.map.repeat.set( F_L_F_S_Wall.material.map.repeat.x, F_L_F_S_Wall.material.map.repeat.y);
        innerWall.material.color.set(0xFFFFFF)
        innerWall.material.map.needsUpdate = true 
        innerWall.material.needsUpdate = true 
	
        })
        FrontLeanWalls.add(F_L_F_S_Wall);
    }

    //Front Lean to Right Storage double Wall
    if (FrontLeanWalls.getObjectByName("F_L_F_S_W_inner")==undefined) {
      
        let frontLeanFrontStorageWallClone = FrontLeanWalls.getObjectByName("F_L_F_S_W");
      
          if(FrontLeanWalls.getObjectByName("F_L_F_S_W") != undefined){
          let doubleFrontLeanFrontStorageWall = frontLeanFrontStorageWallClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleFrontLeanFrontStorageWall = new THREE.Mesh(doubleFrontLeanFrontStorageWall.geometry,leftDoubleMaterial);
          doubleFrontLeanFrontStorageWall.name = "F_L_F_S_W_inner"
          doubleFrontLeanFrontStorageWall.visible = (params.is_translusant==true)? false : frontLeanFrontStorageWallClone.visible
          doubleFrontLeanFrontStorageWall.scale.set(frontLeanFrontStorageWallClone.scale.x , frontLeanFrontStorageWallClone.scale.y , frontLeanFrontStorageWallClone.scale.z);
          doubleFrontLeanFrontStorageWall.position.set(frontLeanFrontStorageWallClone.position.x +wallDistance, frontLeanFrontStorageWallClone.position.y , frontLeanFrontStorageWallClone.position.z);
          doubleFrontLeanFrontStorageWall.rotation.set(frontLeanFrontStorageWallClone.rotation.x , frontLeanFrontStorageWallClone.rotation.y , frontLeanFrontStorageWallClone.rotation.z)
          
            FrontLeanWalls.add(doubleFrontLeanFrontStorageWall);

             const_var.wallsForCut.F_L_F_S_W_inner = doubleFrontLeanFrontStorageWall.clone();
          }
        }

    /*Front Lean To Back Storage Wall*/
    if (const_var.b_t_M_F_t_F.getObjectByName("F_L_B_S_W")!=undefined) {
        let F_L_B_S_Wall = const_var.b_t_M_F_t_F.getObjectByName("F_L_B_S_W").clone();
    
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
        F_L_B_S_Wall.visible = (params.add_storage_check_front!=false && params.p_f_w != "Close")?true:false;  
        F_L_B_S_Wall.scale.set((parseInt(params.add_storage_front)),params.leanF_p_h+roofMiddleHeight[params.b_l_t_r_pF][params.leanF_p_w]*2,1)
        F_L_B_S_Wall.position.x = params.cB_addStorage_right || params.cB_addStorage_left ? params.p_d /-2-0.08 : params.p_d /-2-0.03;
        F_L_B_S_Wall.position.z = (params.leanF_p_d/-2)+(parseInt(params.add_storage_front))/2;
        F_L_B_S_Wall.position.y = (params.leanF_p_h+roofMiddleHeight[params.b_l_t_r_pF][params.leanF_p_w]*2)/2; 
        let F_L_B_S_WallLoader = new THREE.TextureLoader();
        let F_L_B_S_WallTexture = F_L_B_S_WallLoader.load(process.env.REACT_APP_BASE_URL+ wallTexture, function(texture) {
            // F_L_B_S_Wall.material.envMap = texture;
            // F_L_B_S_Wall.material.emissiveMap = texture;
            // F_L_B_S_Wall.material.emissiveIntensity = 1;
            F_L_B_S_Wall.material.map = texture;
            F_L_B_S_Wall.material.bumpMap = texture;
            F_L_B_S_Wall.material.bumpScale = 0.02
            F_L_B_S_Wall.material.metalness = 1
            F_L_B_S_Wall.material.roughness = 0.5
            F_L_B_S_Wall.material.anisotropy = 10;
            F_L_B_S_Wall.material.map.wrapS = THREE.RepeatWrapping;
            F_L_B_S_Wall.material.map.wrapT = THREE.RepeatWrapping;
            F_L_B_S_Wall.material.map.offset.x = params.p_w;
            F_L_B_S_Wall.material.map.offset.y = params.p_w;
            F_L_B_S_Wall.material.map.needsUpdate = true;
            F_L_B_S_Wall.material.needsUpdate = true;
            if(params.p_v_w==true) {
                F_L_B_S_Wall.material.map.repeat.set(((params.add_storage_front/2)+(params.add_storage_front/2/3))*2,1);
            }else  { 
                F_L_B_S_Wall.material.map.repeat.set(1,Math.round((params.p_h/1.5)*2));
            }
                                                                                         
        let innerWall = FrontLeanWalls.getObjectByName("F_L_B_S_W_inner")
        innerWall.material.map = texture.clone();
        innerWall.material.map.wrapS = THREE.RepeatWrapping;
        innerWall.material.map.wrapT = THREE.RepeatWrapping;
        innerWall.material.map.offset.x = params.p_w;
        innerWall.material.map.offset.y = params.p_w;
        innerWall.material.map.repeat.set( F_L_B_S_Wall.material.map.repeat.x, F_L_B_S_Wall.material.map.repeat.y);
        innerWall.material.color.set(0xFFFFFF)
        innerWall.material.map.needsUpdate = true 
        innerWall.material.needsUpdate = true 
	
        })
        FrontLeanWalls.add(F_L_B_S_Wall);
    }

    //Front Lean to Right Storage double Wall
    if (FrontLeanWalls.getObjectByName("F_L_B_S_W_inner")==undefined) {
      
        let frontLeanBackStorageWallClone = FrontLeanWalls.getObjectByName("F_L_B_S_W");
      
          if(FrontLeanWalls.getObjectByName("F_L_B_S_W") != undefined){
          let doubleFrontLeanBackStorageWall = frontLeanBackStorageWallClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleFrontLeanBackStorageWall = new THREE.Mesh(doubleFrontLeanBackStorageWall.geometry,leftDoubleMaterial);
          doubleFrontLeanBackStorageWall.name = "F_L_B_S_W_inner"
          doubleFrontLeanBackStorageWall.visible = (params.is_translusant==true)? false : frontLeanBackStorageWallClone.visible
          doubleFrontLeanBackStorageWall.scale.set(frontLeanBackStorageWallClone.scale.x , frontLeanBackStorageWallClone.scale.y , frontLeanBackStorageWallClone.scale.z);
          doubleFrontLeanBackStorageWall.position.set(frontLeanBackStorageWallClone.position.x -wallDistance, frontLeanBackStorageWallClone.position.y , frontLeanBackStorageWallClone.position.z);
          doubleFrontLeanBackStorageWall.rotation.set(frontLeanBackStorageWallClone.rotation.x , frontLeanBackStorageWallClone.rotation.y , frontLeanBackStorageWallClone.rotation.z)

            FrontLeanWalls.add(doubleFrontLeanBackStorageWall);

             const_var.wallsForCut.F_L_B_S_W_inner = doubleFrontLeanBackStorageWall.clone();
          }
        }
    /*Front Lean To Right Storage Gable*/
    if (const_var.b_t_M_F_t_F.getObjectByName("F_L_R_S_G")!=undefined) {
      let F_L_R_S_Gable = const_var.b_t_M_F_t_F.getObjectByName("F_L_R_S_G").clone();

      let wallTexture = horizontalTexture;
      if (params.p_v_w==true){
        wallTexture = verticalTexture;
      } else {
        wallTexture = horizontalTexture;
      }
      let ltFwallPos = params.p_d/-2 - params.leanF_p_w/2;
      if(params.p_v_w==true){
          var FrontleanToRightStorageGableUVS = new Float32Array([
              -1.0, -1.0,
              0.0, -1.0,
              0.0, -1.0,
          ]);
      } else {
          var FrontleanToRightStorageGableUVS = new Float32Array([
              0.0, 0.0,
              0.0, 0.0,
              0.0, 1.0,
          ]);
      }
      F_L_R_S_Gable.geometry.setAttribute( 'uv', new THREE.BufferAttribute( FrontleanToRightStorageGableUVS, 2 ) );
      F_L_R_S_Gable.visible = (params.add_storage_check_front!=false)?true:false;  
      F_L_R_S_Gable.scale.set(params.leanF_p_w,roofMiddleHeight[params.b_l_t_r_pF][2*params.leanF_p_w],0.01);
      F_L_R_S_Gable.position.set(ltFwallPos,params.leanF_p_h,params.leanF_p_d /-4 - (parseInt(params.add_storage_front))+5);
      F_L_R_S_Gable.position.z = params.leanF_p_d /-2+ (parseInt(params.add_storage_front));
      if(params.p_r_s == "1"){
          F_L_R_S_Gable.position.set(ltFwallPos,params.leanF_p_h-wallDistance,params.leanF_p_d/-2+(parseInt(params.add_storage_front)));
          F_L_R_S_Gable.scale.set(params.leanF_p_w,roofMiddleHeight[params.b_l_t_r_pF][2*params.leanF_p_w],0.01);
       }
      
      let F_L_R_S_GableLoader = new THREE.TextureLoader();
      let F_L_R_S_GableTexture = F_L_R_S_GableLoader.load(process.env.REACT_APP_BASE_URL+ wallTexture, function(texture) {
         F_L_R_S_Gable.material.map = texture;
         F_L_R_S_Gable.material.bumpMap = texture;
         F_L_R_S_Gable.material.bumpScale = 0.02
         F_L_R_S_Gable.material.metalness = 1
         F_L_R_S_Gable.material.roughness = 0.5
         F_L_R_S_Gable.material.anisotropy = 10;
         F_L_R_S_Gable.material.map.wrapS = THREE.RepeatWrapping;
         F_L_R_S_Gable.material.map.wrapT = THREE.RepeatWrapping;	
         F_L_R_S_Gable.material.map.needsUpdate = true;	
         F_L_R_S_Gable.material.needsUpdate = true;	
     
          if(params.p_v_w==true){
             F_L_R_S_Gable.material.map.repeat.set(Math.round(((params.leanF_p_w/2)+(params.leanF_p_w/2/3))*2),1);
          } else {
             F_L_R_S_Gable.material.map.repeat.set(1,(roofMiddleHeight[params.b_l_t_r_pF][2*params.leanF_p_w]/1.5)*2);
          }
                                                                                                   
        let innerWall = FrontLeanWalls.getObjectByName("doubleFrontLeanRightStorageGable")
        innerWall.material.map = texture.clone();
        innerWall.material.map.wrapS = THREE.RepeatWrapping;
        innerWall.material.map.wrapT = THREE.RepeatWrapping;
        innerWall.material.map.offset.x = params.p_w;
        innerWall.material.map.offset.y = params.p_w;
        innerWall.material.map.repeat.set( F_L_R_S_Gable.material.map.repeat.x, F_L_R_S_Gable.material.map.repeat.y);
        innerWall.material.color.set(0xFFFFFF)
        innerWall.material.map.needsUpdate = true 
        innerWall.material.needsUpdate = true 
	
      })
      FrontLeanWalls.add(F_L_R_S_Gable);
    }

    //Front Lean to Left Double Gable
    if (FrontLeanWalls.getObjectByName("doubleFrontLeanRightStorageGable")==undefined) {
      
        let frontLeanRightStorageGableClone = FrontLeanWalls.getObjectByName("F_L_R_S_G");
      
          if(FrontLeanWalls.getObjectByName("F_L_R_S_G") != undefined){
          let doubleFrontLeanRightStorageGable = frontLeanRightStorageGableClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleFrontLeanRightStorageGable = new THREE.Mesh(doubleFrontLeanRightStorageGable.geometry,leftDoubleMaterial);
          doubleFrontLeanRightStorageGable.name = "doubleFrontLeanRightStorageGable"
          doubleFrontLeanRightStorageGable.visible = (params.is_translusant==true)? false : frontLeanRightStorageGableClone.visible
          doubleFrontLeanRightStorageGable.scale.set(frontLeanRightStorageGableClone.scale.x , frontLeanRightStorageGableClone.scale.y , frontLeanRightStorageGableClone.scale.z);
          doubleFrontLeanRightStorageGable.position.set(frontLeanRightStorageGableClone.position.x , frontLeanRightStorageGableClone.position.y , frontLeanRightStorageGableClone.position.z-wallDistance);
          doubleFrontLeanRightStorageGable.rotation.set(frontLeanRightStorageGableClone.rotation.x , frontLeanRightStorageGableClone.rotation.y , frontLeanRightStorageGableClone.rotation.z)
          
            FrontLeanWalls.add(doubleFrontLeanRightStorageGable);
          }
        }
  }        

    /*Front Lean To Right Gable*/
    if (const_var.b_t_M_F_t_F.getObjectByName("F_L_R_G")!=undefined) {
        let F_L_R_Gable = const_var.b_t_M_F_t_F.getObjectByName("F_L_R_G").clone();
    
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
        let ltFwallPos = params.p_d/-2 - params.leanF_p_w/2;
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
  
        F_L_R_Gable.geometry.setIndex(new THREE.BufferAttribute( index, 1 ) )
        F_L_R_Gable.geometry.setAttribute("position", new THREE.BufferAttribute(cBLeftStorageFGableVertices, 3));                 
        F_L_R_Gable.geometry.setAttribute( 'uv', new THREE.BufferAttribute( leanToLeftbGableUVS, 2 ) );
        F_L_R_Gable.geometry.computeVertexNormals();    
        F_L_R_Gable.visible = (params.p_b_c_b_f_f !="Open")?true:false;  
        F_L_R_Gable.scale.set(params.leanF_p_w,roofMiddleHeight[params.b_l_t_r_pF][2*params.leanF_p_w],0.01);
        F_L_R_Gable.position.set(ltFwallPos,params.leanF_p_h,params.leanF_p_d/2+0.05);
        let F_L_R_GableLoader = new THREE.TextureLoader();
        let F_L_R_GableTexture = F_L_R_GableLoader.load(process.env.REACT_APP_BASE_URL+ wallTexture, function(texture) {
                F_L_R_Gable.material.map = texture;
                F_L_R_Gable.material.bumpMap = texture;
                F_L_R_Gable.material.bumpScale = 0.02
                F_L_R_Gable.material.metalness = 1
                F_L_R_Gable.material.roughness = 0.5
                F_L_R_Gable.material.anisotropy = 10;
                F_L_R_Gable.material.map.wrapS = THREE.RepeatWrapping;
                F_L_R_Gable.material.map.wrapT = THREE.RepeatWrapping;	
                if(params.p_v_w==true){
                    F_L_R_Gable.material.map.repeat.set(Math.round(((params.leanF_p_w/2)+(params.leanF_p_w/2/3))*2),1);
                } else {
                    F_L_R_Gable.material.map.repeat.set(1,(roofMiddleHeight[params.b_l_t_r_pF][2*params.leanF_p_w]/1.5));
                }

                F_L_R_Gable.material.map.needsUpdate = true;
                F_L_R_Gable.material.needsUpdate = true;
                                                                                                                   
        let innerWall = FrontLeanWalls.getObjectByName("F_L_R_G_inner")
        innerWall.material.map = texture.clone();
        innerWall.material.map.wrapS = THREE.RepeatWrapping;
        innerWall.material.map.wrapT = THREE.RepeatWrapping;
        innerWall.material.map.offset.x = params.p_w;
        innerWall.material.map.offset.y = params.p_w;
        innerWall.material.map.repeat.set( F_L_R_Gable.material.map.repeat.x, F_L_R_Gable.material.map.repeat.y);
        innerWall.material.color.set(0xFFFFFF)
        innerWall.material.map.needsUpdate = true 
        innerWall.material.needsUpdate = true 
	
        })
        FrontLeanWalls.add(F_L_R_Gable);
        const_var.wallsForCut.F_L_R_G = F_L_R_Gable.clone();
    }

    //Front Lean to Right Double Gable
    if (FrontLeanWalls.getObjectByName("F_L_R_G_inner")==undefined) {
      
        let frontLeanRightGableClone = FrontLeanWalls.getObjectByName("F_L_R_G");
      
          if(FrontLeanWalls.getObjectByName("F_L_R_G") != undefined){
          let doubleFrontLeanRightGable = frontLeanRightGableClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleFrontLeanRightGable = new THREE.Mesh(doubleFrontLeanRightGable.geometry,leftDoubleMaterial);
          doubleFrontLeanRightGable.name = "F_L_R_G_inner"
          doubleFrontLeanRightGable.visible = (params.is_translusant==true)? false : frontLeanRightGableClone.visible
          doubleFrontLeanRightGable.scale.set(frontLeanRightGableClone.scale.x , frontLeanRightGableClone.scale.y , frontLeanRightGableClone.scale.z);
          doubleFrontLeanRightGable.position.set(frontLeanRightGableClone.position.x , frontLeanRightGableClone.position.y , frontLeanRightGableClone.position.z-wallDistance);
          doubleFrontLeanRightGable.rotation.set(frontLeanRightGableClone.rotation.x , frontLeanRightGableClone.rotation.y , frontLeanRightGableClone.rotation.z)
          
            FrontLeanWalls.add(doubleFrontLeanRightGable);
            const_var.wallsForCut.F_L_R_G_inner = doubleFrontLeanRightGable.clone();
          }
        }

     /*Front Lean To Left Gable*/
     if (const_var.b_t_M_F_t_F.getObjectByName("F_L_L_G")!=undefined) {
        let F_L_L_Gable = const_var.b_t_M_F_t_F.getObjectByName("F_L_L_G").clone();
    
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
        let ltFwallPos = params.p_d/-2 - params.leanF_p_w/2;
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
  
        F_L_L_Gable.geometry.setIndex(new THREE.BufferAttribute( index, 1 ) )
        F_L_L_Gable.geometry.setAttribute("position", new THREE.BufferAttribute(cBLeftStorageFGableVertices, 3));                 
        F_L_L_Gable.geometry.setAttribute( 'uv', new THREE.BufferAttribute( leanToLeftbGableUVS, 2 ) );
        F_L_L_Gable.geometry.computeVertexNormals();            
        F_L_L_Gable.visible = (params.p_b_c_b_f_b !="Open" || params.add_storage_check_front!=false)?true:false;  
        F_L_L_Gable.scale.set(params.leanF_p_w,roofMiddleHeight[params.b_l_t_r_pF][2*params.leanF_p_w],0.01);
        F_L_L_Gable.position.set(ltFwallPos,params.leanF_p_h,params.leanF_p_d / -2-0.05);
        let F_L_L_GableLoader = new THREE.TextureLoader();
        let F_L_L_GableTexture = F_L_L_GableLoader.load(process.env.REACT_APP_BASE_URL+ wallTexture, function(texture) {
            F_L_L_Gable.material.map = texture;
            F_L_L_Gable.material.bumpMap = texture;
            F_L_L_Gable.material.bumpScale = 0.02
            F_L_L_Gable.material.metalness = 1
            F_L_L_Gable.material.roughness = 0.5
            F_L_L_Gable.material.anisotropy = 10;
            F_L_L_Gable.material.map.wrapS = THREE.RepeatWrapping;
            F_L_L_Gable.material.map.wrapT = THREE.RepeatWrapping;	
            if(params.p_v_w==true) {
              F_L_L_Gable.material.map.rotation = Math.PI
                F_L_L_Gable.material.map.repeat.set(Math.round(((params.leanF_p_w/2)+(params.leanF_p_w/2/3))*2),1);
            } else {
                F_L_L_Gable.material.map.repeat.set(1,(roofMiddleHeight[params.b_l_t_r_pF][2*params.leanF_p_w]/1.5));
            }

            F_L_L_Gable.material.map.needsUpdate = true;
            F_L_L_Gable.material.needsUpdate = true;
                                                                                                                              
        let innerWall = FrontLeanWalls.getObjectByName("F_L_L_G_inner")
        innerWall.material.map = texture.clone();
        innerWall.material.map.wrapS = THREE.RepeatWrapping;
        innerWall.material.map.wrapT = THREE.RepeatWrapping;
        innerWall.material.map.offset.x = params.p_w;
        innerWall.material.map.offset.y = params.p_w;
        innerWall.material.map.repeat.set( F_L_L_Gable.material.map.repeat.x, F_L_L_Gable.material.map.repeat.y);
        innerWall.material.color.set(0xFFFFFF)
        innerWall.material.map.needsUpdate = true 
        innerWall.material.needsUpdate = true 
	
        })
        FrontLeanWalls.add(F_L_L_Gable);
        const_var.wallsForCut.F_L_L_G = F_L_L_Gable.clone();
    }

    //Front Lean to Left Double Gable
    if (FrontLeanWalls.getObjectByName("F_L_L_G_inner")==undefined) {
      
        let frontLeanLeftGableClone = FrontLeanWalls.getObjectByName("F_L_L_G");
      
          if(FrontLeanWalls.getObjectByName("F_L_L_G") != undefined){
          let doubleFrontLeanLeftGable = frontLeanLeftGableClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleFrontLeanLeftGable = new THREE.Mesh(doubleFrontLeanLeftGable.geometry,leftDoubleMaterial);
          doubleFrontLeanLeftGable.name = "F_L_L_G_inner"
          doubleFrontLeanLeftGable.visible = (params.is_translusant==true)? false : frontLeanLeftGableClone.visible
          doubleFrontLeanLeftGable.scale.set(frontLeanLeftGableClone.scale.x , frontLeanLeftGableClone.scale.y , frontLeanLeftGableClone.scale.z);
          doubleFrontLeanLeftGable.position.set(frontLeanLeftGableClone.position.x , frontLeanLeftGableClone.position.y , frontLeanLeftGableClone.position.z+wallDistance);
          doubleFrontLeanLeftGable.rotation.set(frontLeanLeftGableClone.rotation.x , frontLeanLeftGableClone.rotation.y , frontLeanLeftGableClone.rotation.z)
          
            FrontLeanWalls.add(doubleFrontLeanLeftGable);
            const_var.wallsForCut.F_L_L_G_inner = doubleFrontLeanLeftGable.clone();
          }
        }

  if(params.p_w_c_n == true){
    /*Front Lean To Front wall WainScot*/
    if (const_var.b_t_M_F_t_F.getObjectByName("F_L_F_W_WS")!=undefined) {
        let F_L_F_W_Wainscot = const_var.b_t_M_F_t_F.getObjectByName("F_L_F_W_WS").clone();
    
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }

        let f_p_w_scale = 0;
        let f_p_w_position = 0;

        if( params.add_left_front_lean_porch == true &&  params.add_right_front_lean_porch == false){
          f_p_w_scale = params.leanF_p_w;
          f_p_w_position = params.leanF_p_w/2;
         }
         if( params.add_left_front_lean_porch == false &&  params.add_right_front_lean_porch == true){
          f_p_w_scale = params.leanF_p_w;
          f_p_w_position = -params.leanF_p_w/2;
         }
         if( params.add_left_front_lean_porch == true &&  params.add_right_front_lean_porch == true){
          f_p_w_scale = params.leanF_p_w*2;
         }

        F_L_F_W_Wainscot.visible = (params.p_b_c_b_f_l=="Close" && params.p_w_c_n == true)?true:false;
        F_L_F_W_Wainscot.position.x = params.p_d / -2 - params.leanF_p_w - 0.077;
        F_L_F_W_Wainscot.position.z = -(f_p_w_position);
        F_L_F_W_Wainscot.position.y = 1.475;	
        F_L_F_W_Wainscot.rotation.y = Math.PI/2;			
        F_L_F_W_Wainscot.scale.set(params.leanF_p_d + f_p_w_scale,3,1);				
        let F_L_F_W_WainscotLoader = new THREE.TextureLoader();
        let F_L_F_W_WainscotTexture = F_L_F_W_WainscotLoader.load(process.env.REACT_APP_BASE_URL+ wallTexture, function(texture) {
           F_L_F_W_Wainscot.material.map = texture;
           F_L_F_W_Wainscot.material.bumpMap = texture;
           F_L_F_W_Wainscot.material.bumpScale = 0.02
           F_L_F_W_Wainscot.material.metalness = 1
           F_L_F_W_Wainscot.material.roughness = 0.5
           F_L_F_W_Wainscot.material.anisotropy = 10;
           F_L_F_W_Wainscot.material.map.wrapS = THREE.RepeatWrapping;
           F_L_F_W_Wainscot.material.map.wrapT = THREE.RepeatWrapping;
           F_L_F_W_Wainscot.material.map.offset.x = params.leanF_p_w;
           F_L_F_W_Wainscot.material.map.offset.y = params.leanF_p_w;
            if(params.p_v_w==true) {
               F_L_F_W_Wainscot.material.map.repeat.set(((params.leanF_p_d/2)+(params.leanF_p_d/2/3))*2,1);
               if (params.add_left_front_lean_porch == true &&  params.add_right_front_lean_porch == false){
                F_L_F_W_Wainscot.material.map.repeat.set(((params.leanF_p_d/2)+(params.leanF_p_d/2/3)+(params.leanF_p_w/2))*2,1);
              }
              else if ( params.add_left_front_lean_porch == false &&  params.add_right_front_lean_porch == true){
                F_L_F_W_Wainscot.material.map.repeat.set(((params.leanF_p_d/2)+(params.leanF_p_d/2/3)+(params.leanF_p_w/2))*2,1);

              } 
              else if( params.add_left_front_lean_porch == true &&  params.add_right_front_lean_porch == true){
                F_L_F_W_Wainscot.material.map.repeat.set(((params.leanF_p_d/2)+(params.leanF_p_d/2/3)+(params.leanF_p_w/2)+(params.leanF_p_w/2))*2,1);
              }
            } else {
               F_L_F_W_Wainscot.material.map.repeat.set(1,(3/1.5)*2);
            }
            F_L_F_W_Wainscot.material.map.needsUpdate = true;       
            F_L_F_W_Wainscot.material.needsUpdate = true;       
        })
        FrontLeanWalls.add(F_L_F_W_Wainscot);

        if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
          let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
          wainscotTrim.name = "F_L_F_W_WS_jtrim";
          wainscotTrim.material = wainscotTrim.material.clone();
          wainscotTrim.material.color.setHex(wainscotTrimCalor)
          wainscotTrim.visible = F_L_F_W_Wainscot.visible
          wainscotTrim.rotation.y = Math.PI
          wainscotTrim.scale.set(0.2,0.17, F_L_F_W_Wainscot.scale.x);
          wainscotTrim.position.set(F_L_F_W_Wainscot.position.x-0.008,F_L_F_W_Wainscot.position.y*2,F_L_F_W_Wainscot.position.z);
          FrontLeanWalls.add(wainscotTrim);
        }
    }

      /*Front Lean To Front storage wall WainScot*/
      if (const_var.b_t_M_F_t_F.getObjectByName("F_L_F_S_W_WS")!=undefined) {
        let F_L_F_S_W_Wainscot = const_var.b_t_M_F_t_F.getObjectByName("F_L_F_S_W_WS").clone();
    
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
        F_L_F_S_W_Wainscot.visible = (params.add_storage_check_front == true && params.p_w_c_n == true)?true:false;
        F_L_F_S_W_Wainscot.position.x = params.p_d / -2 - params.leanF_p_w - 0.08;
        F_L_F_S_W_Wainscot.position.z = ((params.leanF_p_d/-2)+(parseInt(params.add_storage_front))/2)
        F_L_F_S_W_Wainscot.position.y = 1.475;	
        F_L_F_S_W_Wainscot.rotation.y = Math.PI/2;	
        F_L_F_S_W_Wainscot.scale.set((parseInt(params.add_storage_front)),3,1);				
        let F_L_F_S_W_WainscotLoader = new THREE.TextureLoader();
        let F_L_F_S_W_WainscotTexture = F_L_F_S_W_WainscotLoader.load(process.env.REACT_APP_BASE_URL+ wallTexture, function(texture) {
           F_L_F_S_W_Wainscot.material.map = texture;
           F_L_F_S_W_Wainscot.material.bumpMap = texture;
           F_L_F_S_W_Wainscot.material.bumpScale = 0.02
           F_L_F_S_W_Wainscot.material.metalness = 1
           F_L_F_S_W_Wainscot.material.roughness = 0.5
           F_L_F_S_W_Wainscot.material.anisotropy = 10;
           F_L_F_S_W_Wainscot.material.map.wrapS = THREE.RepeatWrapping;
           F_L_F_S_W_Wainscot.material.map.wrapT = THREE.RepeatWrapping;
           F_L_F_S_W_Wainscot.material.map.offset.x = params.leanF_p_w;
           F_L_F_S_W_Wainscot.material.map.offset.y = params.leanF_p_w;
            if(params.p_v_w==true) {
               F_L_F_S_W_Wainscot.material.map.repeat.set(((params.add_storage_front/2)+(params.add_storage_front/2/3))*2,1);
            } else {
               F_L_F_S_W_Wainscot.material.map.repeat.set(1,(3/1.5)*2);
            }
            F_L_F_S_W_Wainscot.material.map.needsUpdate = true;      
            F_L_F_S_W_Wainscot.material.needsUpdate = true;       
        })
        FrontLeanWalls.add(F_L_F_S_W_Wainscot);

        if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
          let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
          wainscotTrim.name = "F_L_F_S_W_WS_jtrim";
          wainscotTrim.material = wainscotTrim.material.clone();
          wainscotTrim.material.color.setHex(wainscotTrimCalor)
          wainscotTrim.visible = F_L_F_S_W_Wainscot.visible
          wainscotTrim.rotation.y = Math.PI
          wainscotTrim.scale.set(0.2,0.17, F_L_F_S_W_Wainscot.scale.x);
          wainscotTrim.position.set(F_L_F_S_W_Wainscot.position.x-0.008,F_L_F_S_W_Wainscot.position.y*2,F_L_F_S_W_Wainscot.position.z);
          FrontLeanWalls.add(wainscotTrim);
        }
    }
      /*Front Lean To  storage Back wall WainScot*/
      if (const_var.b_t_M_F_t_F.getObjectByName("F_L_B_S_W_WS")==undefined) {
        let F_L_S_B_W_Wainscot = const_var.b_t_M_F_t_F.getObjectByName("F_L_F_S_W_WS").clone();
        F_L_S_B_W_Wainscot.name = "F_L_B_S_W_WS";
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
        F_L_S_B_W_Wainscot.visible = (params.add_storage_check_front == true && params.p_w_c_n == true && params.p_f_w != "Close")?true:false;
        F_L_S_B_W_Wainscot.position.x = params.p_d / -2  + 0.075;
        F_L_S_B_W_Wainscot.position.z = ((params.leanF_p_d/-2)+(parseInt(params.add_storage_front))/2)
        F_L_S_B_W_Wainscot.position.y = 1.475;	
        F_L_S_B_W_Wainscot.rotation.y = Math.PI/2;	
        F_L_S_B_W_Wainscot.scale.set((parseInt(params.add_storage_front)),3,1);				
        let F_L_S_B_W_WainscotLoader = new THREE.TextureLoader();
        let F_L_S_B_W_WainscotTexture = F_L_S_B_W_WainscotLoader.load(process.env.REACT_APP_BASE_URL+ wallTexture, function(texture) {
           F_L_S_B_W_Wainscot.material.map = texture;
           F_L_S_B_W_Wainscot.material.bumpMap = texture;
           F_L_S_B_W_Wainscot.material.bumpScale = 0.02
           F_L_S_B_W_Wainscot.material.metalness = 1
           F_L_S_B_W_Wainscot.material.roughness = 0.5
           F_L_S_B_W_Wainscot.material.anisotropy = 10;
           F_L_S_B_W_Wainscot.material.map.wrapS = THREE.RepeatWrapping;
           F_L_S_B_W_Wainscot.material.map.wrapT = THREE.RepeatWrapping;
           F_L_S_B_W_Wainscot.material.map.offset.x = params.leanF_p_w;
           F_L_S_B_W_Wainscot.material.map.offset.y = params.leanF_p_w;
            if(params.p_v_w==true) {
               F_L_S_B_W_Wainscot.material.map.repeat.set(((params.add_storage_front/2)+(params.add_storage_front/2/3))*2,1);
            } else {
               F_L_S_B_W_Wainscot.material.map.repeat.set(1,(3/1.5)*2);
            }
            F_L_S_B_W_Wainscot.material.map.needsUpdate = true;      
            F_L_S_B_W_Wainscot.material.needsUpdate = true;       
        })
        FrontLeanWalls.add(F_L_S_B_W_Wainscot);

        if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
          let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
          wainscotTrim.name = "F_L_B_S_W_WS_jtrim";
          wainscotTrim.material = wainscotTrim.material.clone();
          wainscotTrim.material.color.setHex(wainscotTrimCalor)
          wainscotTrim.visible = F_L_S_B_W_Wainscot.visible
          // wainscotTrim.rotation.y = Math.PI
          wainscotTrim.scale.set(0.2,0.17, F_L_S_B_W_Wainscot.scale.x);
          wainscotTrim.position.set(F_L_S_B_W_Wainscot.position.x+0.008,F_L_S_B_W_Wainscot.position.y*2,F_L_S_B_W_Wainscot.position.z);
          FrontLeanWalls.add(wainscotTrim);
        }
    }
    /*Front Lean To Left wall WainScot*/
    if (const_var.b_t_M_F_t_F.getObjectByName("F_L_L_W_WS")!=undefined) {
        let F_L_L_W_Wainscot = const_var.b_t_M_F_t_F.getObjectByName("F_L_L_W_WS").clone();
    
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
        let ltBwallPos = params.p_d/-2 - params.leanF_p_w/2;
        F_L_L_W_Wainscot.visible = (params.p_b_c_b_f_b =="Close" && params.p_w_c_n == true || (params.add_storage_check_front == true && params.p_w_c_n == true))?true:false;
        F_L_L_W_Wainscot.position.x = ltBwallPos;
        F_L_L_W_Wainscot.position.z = params.leanF_p_d / -2 - 0.077;
        F_L_L_W_Wainscot.position.y = 1.475;
        F_L_L_W_Wainscot.scale.set(params.leanF_p_w == 0 ? 1: params.leanF_p_w,3,1);
        let F_L_L_W_WainscotLoader = new THREE.TextureLoader();
        let F_L_L_W_WainscotTexture = F_L_L_W_WainscotLoader.load(process.env.REACT_APP_BASE_URL+ wallTexture, function(texture) {
           F_L_L_W_Wainscot.material.map = texture;
           F_L_L_W_Wainscot.material.bumpMap = texture;
           F_L_L_W_Wainscot.material.bumpScale = 0.02
           F_L_L_W_Wainscot.material.metalness = 1
           F_L_L_W_Wainscot.material.roughness = 0.5
           F_L_L_W_Wainscot.material.anisotropy = 10;
           F_L_L_W_Wainscot.material.map.wrapS = THREE.RepeatWrapping;
           F_L_L_W_Wainscot.material.map.wrapT = THREE.RepeatWrapping;
           F_L_L_W_Wainscot.material.map.offset.x = params.leanF_p_w;
           F_L_L_W_Wainscot.material.map.offset.y = params.leanF_p_w;
            if(params.p_v_w==true){
               F_L_L_W_Wainscot.material.map.repeat.set(Math.round(((params.leanF_p_w/2)+(params.leanF_p_w/2/3))*2),1);
            } else {
               F_L_L_W_Wainscot.material.map.repeat.set(1,(3/1.5)*2);
            }				
            F_L_L_W_Wainscot.material.map.needsUpdate = true;       
            F_L_L_W_Wainscot.material.needsUpdate = true;       
        })
        FrontLeanWalls.add(F_L_L_W_Wainscot);

        if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
          let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
          wainscotTrim.name = "F_L_L_W_WS_jtrim";
          wainscotTrim.material = wainscotTrim.material.clone();
          wainscotTrim.material.color.setHex(wainscotTrimCalor)
          wainscotTrim.visible = F_L_L_W_Wainscot.visible
          wainscotTrim.rotation.y = Math.PI/2
          wainscotTrim.scale.set(0.2,0.17, F_L_L_W_Wainscot.scale.x);
          wainscotTrim.position.set(F_L_L_W_Wainscot.position.x,F_L_L_W_Wainscot.position.y*2,F_L_L_W_Wainscot.position.z-0.008);
          FrontLeanWalls.add(wainscotTrim);
        }
    }
  
    /*Front Lean To Right wall WainScot*/
    if (const_var.b_t_M_F_t_F.getObjectByName("F_L_R_W_WS")!=undefined) {
        let F_L_R_W_Wainscot = const_var.b_t_M_F_t_F.getObjectByName("F_L_R_W_WS").clone();
    
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
        let ltFwallPos = params.p_d/-2 - params.leanF_p_w/2;
        F_L_R_W_Wainscot.visible = ((params.p_b_c_b_f_f =="Close" && params.p_w_c_n == true) )?true:false;
        F_L_R_W_Wainscot.position.x = ltFwallPos;
        F_L_R_W_Wainscot.position.z = params.leanF_p_d / 2 + 0.077;
        F_L_R_W_Wainscot.position.y = 1.475;			
        F_L_R_W_Wainscot.scale.set(params.leanF_p_w == 0 ? 1: params.leanF_p_w,3,1);
        let F_L_R_W_WainscotLoader = new THREE.TextureLoader();
        let F_L_R_W_WainscotTexture = F_L_R_W_WainscotLoader.load(process.env.REACT_APP_BASE_URL+ wallTexture, function(texture) {
                F_L_R_W_Wainscot.material.morphNormals = true;
                F_L_R_W_Wainscot.material.morphTargets = true;							
                F_L_R_W_Wainscot.material.map = texture;
                F_L_R_W_Wainscot.material.bumpMap = texture;
                F_L_R_W_Wainscot.material.bumpScale = 0.02
                F_L_R_W_Wainscot.material.metalness = 1
                F_L_R_W_Wainscot.material.roughness = 0.5
                F_L_R_W_Wainscot.material.anisotropy = 10;
                F_L_R_W_Wainscot.material.map.wrapS = THREE.RepeatWrapping;
                F_L_R_W_Wainscot.material.map.wrapT = THREE.RepeatWrapping;
                F_L_R_W_Wainscot.material.map.fog = false;
                if(params.p_v_w==true){
                    F_L_R_W_Wainscot.material.map.repeat.set(Math.round(((params.leanF_p_w/2)+(params.leanF_p_w/2/3))*2),1);
                } else {
                    F_L_R_W_Wainscot.material.map.repeat.set(1,(3/1.5)*2);
                }
                F_L_R_W_Wainscot.material.map.needsUpdate = true;       
                F_L_R_W_Wainscot.material.needsUpdate = true;       
        })
        FrontLeanWalls.add(F_L_R_W_Wainscot);
        
        if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
          let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
          wainscotTrim.name = "F_L_R_W_WS_jtrim";
          wainscotTrim.material = wainscotTrim.material.clone();
          wainscotTrim.material.color.setHex(wainscotTrimCalor)
          wainscotTrim.visible = F_L_R_W_Wainscot.visible
          wainscotTrim.rotation.y = Math.PI/-2
          wainscotTrim.scale.set(0.2,0.17, F_L_R_W_Wainscot.scale.x);
          wainscotTrim.position.set(F_L_R_W_Wainscot.position.x,F_L_R_W_Wainscot.position.y*2,F_L_R_W_Wainscot.position.z+0.008);
          FrontLeanWalls.add(wainscotTrim);
        }
    }
    /*Front Lean To Right wall WainScot*/
    if (const_var.b_t_M_F_t_F.getObjectByName("F_L_R_W_WS")!=undefined) {
        let F_L_R_S_W_Wainscot = const_var.b_t_M_F_t_F.getObjectByName("F_L_R_W_WS").clone();
        F_L_R_S_W_Wainscot.name = "F_L_R_S_W_WS";
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
        let ltFwallPos = params.p_d/-2 - params.leanF_p_w/2;
        F_L_R_S_W_Wainscot.visible = (( params.add_storage_check_front == true && params.p_w_c_n == true) )?true:false;
        F_L_R_S_W_Wainscot.position.x = ltFwallPos;
        F_L_R_S_W_Wainscot.position.z = (params.leanF_p_d /-2+ (parseInt(params.add_storage_front)))+ 0.075;
        F_L_R_S_W_Wainscot.position.y = 1.475;
        F_L_R_S_W_Wainscot.scale.set(params.leanF_p_w == 0 ? 1: params.leanF_p_w,3,1);
        let F_L_R_S_W_WainscotLoader = new THREE.TextureLoader();
        let F_L_R_S_W_WainscotTexture = F_L_R_S_W_WainscotLoader.load(process.env.REACT_APP_BASE_URL+ wallTexture, function(texture) {
                F_L_R_S_W_Wainscot.material.morphNormals = true;
                F_L_R_S_W_Wainscot.material.morphTargets = true;							
                F_L_R_S_W_Wainscot.material.map = texture;
                F_L_R_S_W_Wainscot.material.bumpMap = texture;
                F_L_R_S_W_Wainscot.material.bumpScale = 0.02
                F_L_R_S_W_Wainscot.material.metalness = 1
                F_L_R_S_W_Wainscot.material.roughness = 0.5
                F_L_R_S_W_Wainscot.material.anisotropy = 10;
                F_L_R_S_W_Wainscot.material.map.wrapS = THREE.RepeatWrapping;
                F_L_R_S_W_Wainscot.material.map.wrapT = THREE.RepeatWrapping;
                F_L_R_S_W_Wainscot.material.map.fog = false;
                if(params.p_v_w==true){
                    F_L_R_S_W_Wainscot.material.map.repeat.set(Math.round(((params.leanF_p_w/2)+(params.leanF_p_w/2/3))*2),1);
                } else {
                    F_L_R_S_W_Wainscot.material.map.repeat.set(1,(3/1.5)*2);
                }
                F_L_R_S_W_Wainscot.material.map.needsUpdate = true;       
                F_L_R_S_W_Wainscot.material.needsUpdate = true;       
        })
        FrontLeanWalls.add(F_L_R_S_W_Wainscot);

                
        if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
          let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
          wainscotTrim.name = "F_L_R_S_W_WS_jtrim";
          wainscotTrim.material = wainscotTrim.material.clone();
          wainscotTrim.material.color.setHex(wainscotTrimCalor)
          wainscotTrim.visible = F_L_R_S_W_Wainscot.visible
          wainscotTrim.rotation.y = Math.PI/-2
          wainscotTrim.scale.set(0.2,0.17, F_L_R_S_W_Wainscot.scale.x);
          wainscotTrim.position.set(F_L_R_S_W_Wainscot.position.x,F_L_R_S_W_Wainscot.position.y*2,F_L_R_S_W_Wainscot.position.z+0.008);
          FrontLeanWalls.add(wainscotTrim);
        }
    }
    /*Front Lean To Left Storage Wall WainScot*/
    if (const_var.b_t_M_F_t_F.getObjectByName("F_L_L_S_W_WS") !=undefined) {
       let F_L_L_S_WallWainscot = const_var.b_t_M_F_t_F.getObjectByName("F_L_L_S_W_WS").clone();
       let wallTexture = horizontalTexture;
       if (params.p_v_w==true) wallTexture = horizontalTexture ? verticalTexture: horizontalTexture;
       F_L_L_S_WallWainscot.visible = (params.add_storage_check_front== true && params.p_w_c_n == true)?true:false;
       F_L_L_S_WallWainscot.scale.set((parseInt(params.add_storage_front)),3,1);
       F_L_L_S_WallWainscot.position.x = params.p_d /-2+0.075;
       F_L_L_S_WallWainscot.position.z = (params.leanF_p_d/-2)+(parseInt(params.add_storage_front))/2;
       F_L_L_S_WallWainscot.position.y =1.5; 
       F_L_L_S_WallWainscot.rotation.y = Math.PI/2; 
       let F_L_L_S_WallWainscotLoader = new THREE.TextureLoader();
       let F_L_L_S_WallWainscotTexture = F_L_L_S_WallWainscotLoader.load(process.env.REACT_APP_BASE_URL+ wallTexture, function(texture) {
               F_L_L_S_WallWainscot.material.map = texture;
               F_L_L_S_WallWainscot.material.bumpMap = texture;
               F_L_L_S_WallWainscot.material.bumpScale = 0.02
               F_L_L_S_WallWainscot.material.metalness = 1
               F_L_L_S_WallWainscot.material.roughness = 0.5
               F_L_L_S_WallWainscot.material.anisotropy = 10;
               F_L_L_S_WallWainscot.material.map.wrapS = THREE.RepeatWrapping;
               F_L_L_S_WallWainscot.material.map.wrapT = THREE.RepeatWrapping;
               F_L_L_S_WallWainscot.material.map.offset.x = params.leanF_p_w;
               F_L_L_S_WallWainscot.material.map.offset.y = params.leanF_p_w;
               if(params.p_v_w==true){
                   F_L_L_S_WallWainscot.material.map.repeat.set(Math.round(((params.leanF_p_w/2)+(params.leanF_p_w/2/3))*2),1);
               } else{
                   F_L_L_S_WallWainscot.material.map.repeat.set(1,Math.round((params.leanF_p_h/1.5)*2));
               }			
               F_L_L_S_WallWainscot.material.map.needsUpdate = true;       
               F_L_L_S_WallWainscot.material.needsUpdate = true;       
       })
       FrontLeanWalls.add(F_L_L_S_WallWainscot);
       
       if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
        let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
        wainscotTrim.name = "F_L_L_S_W_WainscotTrim"
        wainscotTrim.material.color.setHex(wainscotTrimCalor)
        wainscotTrim.visible = F_L_L_S_WallWainscot.visible
        wainscotTrim.rotation.y = Math.PI/2
        wainscotTrim.scale.set(0.2,0.17, F_L_L_S_WallWainscot.scale.x);
        wainscotTrim.position.set(F_L_L_S_WallWainscot.position.x,F_L_L_S_WallWainscot.position.y*2,F_L_L_S_WallWainscot.position.z-0.008);
        // FrontLeanWalls.add(wainscotTrim);
      }
    }

  }    

     /*code for transperant whole Front Lean-To Walls and walls Count */
     let wallVal; 
     const_var.scene.children.forEach(function(Group) {
      if ("FrontLeanWalls" == Group.name) { 
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

    if ( params.add_storage_check_front ) {
      if (params.p_b_c_b_f_l != "Open") closedSideWalls = (closedSideWalls - 1);
      if (params.p_b_c_b_f_l == "Close") fullyClosedSideWalls = (fullyClosedSideWalls - 1);
    } 

            // //New Svg indecator for all dirction walls
            // const loader = new SVGLoader();
            // const url_front = process.env.REACT_APP_BASE_URL+sideTitleUrl;
            // loader.load(
            //     // resource URL
            //     url_front,
            //     function (data) {

            //         const paths = data.paths;
            //         const group = new THREE.Group();
            //         group.name = "FLfrontWallName";

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
            //                 mesh.position.set((params.p_d/-2)-(params.leanF_p_w),0.6,params.leanF_p_d/2 + 0.1)
            //                 group.add(mesh);
            //                 group.visible = params.add_front_lean;

            //             }

            //         }

            //         FrontLeanWalls.add(group);

            //     },
            //     // function (xhr) {

            //     //     console.log((xhr.loaded / xhr.total * 100) + '% loaded');

            //     // },
            //     // function (error) {

            //     //     console.log('An error happened');

            //     // }
            // );

            // const url_side = process.env.REACT_APP_BASE_URL+frontTitleUrl;

            // loader.load(
            //     // resource URL
            //     url_side,
            //     function (data) {

            //         const paths = data.paths;
            //         const group = new THREE.Group();
            //         group.name = "FLsideWallName";

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
            //                 mesh.position.set((params.p_d/-2)-(params.leanF_p_w)-0.1,0.6,params.leanF_p_d/-2 - 0.1)
            //                 group.add(mesh);
            //                 group.visible = params.add_front_lean;

            //             }

            //         }

            //         FrontLeanWalls.add(group);

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
            //         group.name = "FLbackWallName";

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
            //                 mesh.position.set((params.p_d/-2),0.6,params.leanF_p_d/-2 - 0.1)
            //                 group.add(mesh);
            //                 group.visible = params.add_front_lean;

            //             }

            //         }

            //         FrontLeanWalls.add(group);

            //     },
            //     // function (xhr) {

            //     //     console.log((xhr.loaded / xhr.total * 100) + '% loaded');

            //     // },
            //     // function (error) {

            //     //     console.log('An error happened');

            //     // }
            // );
            // if (const_var.entry_points.length>0) {
            //   DoorCSG(); 
            // }    

  }

  const_var.flClosedSideWalls = closedSideWalls;
  const_var.flClosedEndWalls =  closedEndWalls;
  const_var.flFullyEnclosedWalls = fullyClosedEndWalls+fullyClosedSideWalls;
  const_var.wallsData.frontLean.closedSideWalls = closedSideWalls;
  const_var.wallsData.frontLean.closedEndWalls = closedEndWalls;
  const_var.wallsData.frontLean.p_b_c_b_f_l = params.p_b_c_b_f_l;
  const_var.wallsData.frontLean.p_b_c_b_f_f = params.p_b_c_b_f_f;
  const_var.wallsData.frontLean.p_b_c_b_f_b = params.p_b_c_b_f_b;
  
  // wallNameInBackgroundImage("frontLean")

    if (params.leantoAlignmentFront == "1") {
		FrontLeanWalls.position.x = 0;
	}
	if (params.leantoAlignmentFront == "2") {
		FrontLeanWalls.position.x = -params.p_w/2+params.leanF_p_d/2 ;
	}
	if (params.leantoAlignmentFront == "3") {
	    FrontLeanWalls.position.x = params.p_w/2-params.leanF_p_d/2;
	}
  if ( params.isShowCenter == true ) {
    FrontLeanWalls.visible = false
  }
    
}