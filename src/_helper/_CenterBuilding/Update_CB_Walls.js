import * as THREE from "three";
import verticalTexture from '../../assets/images/imgTextures/buildingImages/verticalTexture.jpeg';
import horizontalTexture from '../../assets/images/imgTextures/buildingImages/horizantalTexture.jpeg';
import { params, const_var, } from '../../redux/reducers/reducer';
import { installationSurface, logoTexture, showWallName } from "../../redux/reducers/utils";
const baseUrl = process.env.REACT_APP_BASE_URL;
const loader = new THREE.TextureLoader();
// import { DoorCSG } from '../../redux/reducers/pricingReducer';

export const updateCenterBuildingWalls = () => {
    let roofMiddleHeight = {
    "1":{"6":0.25,"7":0.29165,"8":0.33335,"9":0.375,"10":0.41665,"11":0.45835,"12":0.5,"13":0.5417,"14":0.5833,"15":0.6250,"16":0.6667,"17":0.7083,"18":0.7500,"19":0.7917,"20":0.8333,"21":0.8750,"22":0.9167,"23":0.9583,"24":1,"25":1.0417,"26":1.0833,"27":1.1250,"28":1.1667,"29":1.2083,"30":1.2500,"31":1.2917,"32":1.3333,"33":1.3750,"34":1.4167,"35":1.4583,"36":1.5000,"37":1.5417,"38":1.5833,"39":1.6250,"40":1.6667,"41":1.7083,"42":1.7500,"43":1.7917,"44":1.8333,"45":1.8750,"46":1.9167,"47":1.9583,"48":2.00,"49":2.0417,"50":2.0833,"51":2.1250,"52":2.1667,"53":2.2083,"54":2.2500,"55":2.2917,"56":2.3333,"57":2.3750,"58":2.4167,"59":2.4583,"60":2.5000,"61":2.5417,"62":2.5833,"63":2.6250,"64":2.6667,"65":2.7083,"66":2.7500,"67":2.7917,"68":2.8333,"69":2.8750,"70":2.9167,"71":2.9583,"72":3.00,"73":3.0417,"74":3.0833,"75":3.1250,"76":3.1667,"77":3.2083,"78":3.2500,"79":3.2917,"80":3.3330},
    "2":{"6":0.50,"7":0.58335,"8":0.66665,"9":0.750,"10":0.83335,"11":0.91665,"12":1.0,"13":1.0833,"14":1.1667,"15":1.2500,"16":1.3333,"17":1.4167,"18":1.5000,"19":1.5833,"20":1.6667,"21":1.7500,"22":1.8333,"23":1.9167,"24":2,"25":2.0833,"26":2.1667,"27":2.2500,"28":2.3333,"29":2.4167,"30":2.5000,"31":2.5833,"32":2.6667,"33":2.7500,"34":2.8333,"35":2.9167,"36":3.0000,"37":3.0833,"38":3.1667,"39":3.2500,"40":3.3330,"41":3.4170,"42":3.5000,"43":3.5830,"44":3.6670,"45":3.7500,"46":3.8330,"47":3.9170,"48":4.00,"49":4.0830,"50":4.1670,"51":4.2500,"52":4.3330,"53":4.4170,"54":4.5000,"55":4.5830,"56":4.6670,"57":4.7500,"58":4.8330,"59":4.9170,"60":5.0000,"61":5.0830,"62":5.1670,"63":5.2500,"64":5.3330,"65":5.4170,"66":5.5000,"67":5.5830,"68":5.6670,"69":5.7500,"70":5.8330,"71":5.9170,"72":6.00,"73":6.0830,"74":6.1670,"75":6.2500,"76":6.3330,"77":6.4170,"78":6.5000,"79":6.5830,"80":6.6670},
    "3":{"6":0.75,"7":0.87500,"8":1.00000,"9":1.125,"10":1.25000,"11":1.37500,"12":1.5,"13":1.6250,"14":1.7500,"15":1.8750,"16":2.0000,"17":2.1250,"18":2.2500,"19":2.3750,"20":2.5000,"21":2.6250,"22":2.7500,"23":2.8750,"24":3,"25":3.1250,"26":3.2500,"27":3.3750,"28":3.5000,"29":3.6250,"30":3.7500,"31":3.8750,"32":4.0000,"33":4.1250,"34":4.2500,"35":4.3750,"36":4.5000,"37":4.6250,"38":4.7500,"39":4.8750,"40":5.0000,"41":5.1250,"42":5.2500,"43":5.3750,"44":5.5000,"45":5.6250,"46":5.7500,"47":5.8750,"48":6.00,"49":6.1250,"50":6.2500,"51":6.3750,"52":6.5000,"53":6.6250,"54":6.7500,"55":6.8750,"56":7.0000,"57":7.1250,"58":7.2500,"59":7.3750,"60":7.5000,"61":7.6250,"62":7.7500,"63":7.8750,"64":8.0000,"65":8.1250,"66":8.2500,"67":8.3750,"68":8.5000,"69":8.6250,"70":8.7500,"71":8.8750,"72":9.00,"73":9.1250,"74":9.2500,"75":9.3750,"76":9.5000,"77":9.6250,"78":9.7500,"79":9.8750,"80":10.000},
    "4":{"6":1.00,"7":1.16665,"8":1.33335,"9":1.500,"10":1.66650,"11":1.83350,"12":2.0,"13":2.1667,"14":2.3333,"15":2.5000,"16":2.6667,"17":2.8333,"18":3.0000,"19":3.1667,"20":3.3330,"21":3.5000,"22":3.6670,"23":3.8330,"24":4,"25":4.1670,"26":4.3330,"27":4.5000,"28":4.6670,"29":4.8330,"30":5.0000,"31":5.1670,"32":5.3330,"33":5.5000,"34":5.6670,"35":5.8330,"36":6.0000,"37":6.1670,"38":6.3330,"39":6.5000,"40":6.6670,"41":6.8330,"42":7.0000,"43":7.1670,"44":7.3330,"45":7.5000,"46":7.6670,"47":7.8330,"48":8.00,"49":8.1670,"50":8.3330,"51":8.5000,"52":8.6670,"53":8.8330,"54":9.0000,"55":9.1670,"56":9.3330,"57":9.5000,"58":9.6670,"59":9.8330,"60":10.000,"61":10.167,"62":10.333,"63":10.500,"64":10.667,"65":10.833,"66":11.000,"67":11.167,"68":11.333,"69":11.500,"70":11.667,"71":11.833,"72":12.0,"73":12.167,"74":12.333,"75":12.500,"76":12.667,"77":12.833,"78":13.000,"79":13.167,"80":13.333},
    "5":{"6":1.25,"7":1.45835,"8":1.66650,"9":1.875,"10":2.08350,"11":2.29150,"12":2.5,"13":2.7083,"14":2.9167,"15":3.1250,"16":3.3330,"17":3.5420,"18":3.7500,"19":3.9580,"20":4.1670,"21":4.3750,"22":4.5830,"23":4.7920,"24":5,"25":5.2080,"26":5.4170,"27":5.6250,"28":5.8330,"29":6.0420,"30":6.2500,"31":6.4580,"32":6.6670,"33":6.8750,"34":7.0830,"35":7.2920,"36":7.5000,"37":7.7080,"38":7.9170,"39":8.1250,"40":8.3330,"41":8.5420,"42":8.7500,"43":8.9580,"44":9.1670,"45":9.3750,"46":9.5830,"47":9.7920,"48":10.0,"49":10.208,"50":10.417,"51":10.625,"52":10.833,"53":11.042,"54":11.250,"55":11.458,"56":11.667,"57":11.875,"58":12.083,"59":12.292,"60":12.500,"61":12.708,"62":12.917,"63":13.125,"64":13.333,"65":13.542,"66":13.750,"67":13.958,"68":14.167,"69":14.375,"70":14.583,"71":14.792,"72":15.0,"73":15.208,"74":15.417,"75":15.625,"76":15.833,"77":16.042,"78":16.250,"79":16.458,"80":16.667},
    "6":{"6":1.50,"7":1.75000,"8":2.00000,"9":2.250,"10":2.50000,"11":2.75000,"12":3.0,"13":3.2500,"14":3.5000,"15":3.7500,"16":4.0000,"17":4.2500,"18":4.5000,"19":4.7500,"20":5.0000,"21":5.2500,"22":5.5000,"23":5.7500,"24":6,"25":6.2500,"26":6.5000,"27":6.7500,"28":7.0000,"29":7.2500,"30":7.5000,"31":7.7500,"32":8.0000,"33":8.2500,"34":8.5000,"35":8.7500,"36":9.0000,"37":9.2500,"38":9.5000,"39":9.7500,"40":10.000,"41":10.250,"42":10.500,"43":10.750,"44":11.000,"45":11.250,"46":11.500,"47":11.750,"48":12.0,"49":12.250,"50":12.500,"51":12.750,"52":13.000,"53":13.250,"54":13.500,"55":13.750,"56":14.000,"57":14.250,"58":14.500,"59":14.750,"60":15.000,"61":15.250,"62":15.500,"63":15.750,"64":16.000,"65":16.250,"66":16.500,"67":16.750,"68":17.000,"69":17.250,"70":17.500,"71":17.750,"72":18.0,"73":18.250,"74":18.500,"75":18.750,"76":19.000,"77":19.250,"78":19.500,"79":19.750,"80":20.000}
};
 
    var f_S_LeanLegScale = {
        "1":{"6":0.000,"7":0.050,"8":0.10,"9":0.100,"10":0.100,"11":0.100,"12":0.00,"13":0.00,"14":0.10,"15":0.15,"16":0.20,"17":0.20,"18":0.20,"19":0.20,"20":0.20,"21":0.20,"22":0.20,"23":0.20,"24":0.20,"25":0.20,"26":0.20,"27":0.20,"28":0.20,"29":0.20,"30":0.20,},
        "2":{"6":0.90,"7":0.95,"8":1.2,"9":1.35,"10":1.57,"11":1.65,"12":1.95,"13":2.05,"14":2.2,"15":2.4,"16":2.6,"17":2.8,"18":2.9,"19":3.1,"20":3.2,"21":3.33,"22":3.61,"23":3.8,"24":3.96,"25":2.9,"26":2.9,"27":2.9,"28":2.9,"29":2.9,"30":2.9,},
        "3":{"6":1.40,"7":1.70,"8":1.95,"9":2.10,"10":2.45,"11":2.70,"12":2.94,"13":3.20,"14":3.40,"15":3.70,"16":3.97,"17":4.16,"18":4.30,"19":4.60,"20":4.90,"21":5.20,"22":5.30,"23":5.65,"24":5.95,"25":0.55,"26":0.55,"27":0.60,"28":0.65,"29":0.70,"30":0.75,},
        "4":{"6":0.175,"7":0.200,"8":0.25,"9":0.300,"10":0.350,"11":0.375,"12":0.35,"13":0.35,"14":0.40,"15":0.45,"16":0.50,"17":0.55,"18":0.60,"19":0.65,"20":0.70,"21":0.70,"22":0.75,"23":0.75,"24":0.80,"25":0.85,"26":0.85,"27":0.90,"28":0.95,"29":1.00,"30":1.05,},
        "5":{"6":0.250,"7":0.300,"8":0.35,"9":0.425,"10":0.475,"11":0.525,"12":0.50,"13":0.55,"14":0.60,"15":0.65,"16":0.70,"17":0.75,"18":0.85,"19":0.90,"20":0.95,"21":1.00,"22":1.05,"23":1.10,"24":1.15,"25":1.20,"26":1.25,"27":1.30,"28":1.35,"29":1.40,"30":1.45,},
        "6":{"6":0.350,"7":0.450,"8":0.50,"9":0.575,"10":0.650,"11":0.700,"12":0.70,"13":0.80,"14":0.90,"15":0.95,"16":1.00,"17":1.05,"18":1.15,"19":1.20,"20":1.30,"21":1.35,"22":1.40,"23":1.50,"24":1.60,"25":1.65,"26":1.70,"27":1.75,"28":1.85,"29":1.90,"30":2.00,},

    };
    var f_S_LeanLegHeight = {
        "1":{"6":0.000,"7":0.050,"8":0.10,"9":0.100,"10":0.100,"11":0.100,"12":0.00,"13":0.00,"14":0.10,"15":0.15,"16":0.20,"17":0.20,"18":0.20,"19":0.20,"20":0.20,"21":0.20,"22":0.20,"23":0.20,"24":0.20,"25":0.20,"26":0.20,"27":0.20,"28":0.20,"29":0.20,"30":0.20,},
        "2":{"6":0.45,"7":0.50,"8":0.60,"9":0.70,"10":0.80,"11":0.90,"12":0.98,"13":1.05,"14":1.10,"15":1.20,"16":1.25,"17":1.32,"18":1.40,"19":1.55,"20":1.62,"21":1.72,"22":1.75,"23":1.80,"24":1.90,"25":1.4,"26":0.30,"27":0.30,"28":0.35,"29":0.35,"30":0.40,},
        "3":{"6":0.72,"7":0.80,"8":0.90,"9":1.00,"10":1.15,"11":1.25,"12":1.40,"13":1.50,"14":1.65,"15":1.80,"16":1.90,"17":2.00,"18":2.10 ,"19":2.30,"20":2.40,"21":2.50,"22":2.64,"23":2.80,"24":2.90,"25":0.55,"26":0.55,"27":0.60,"28":0.65,"29":0.70,"30":0.75,},
        "4":{"6":0.175,"7":0.200,"8":0.25,"9":0.300,"10":0.350,"11":0.375,"12":0.35,"13":0.35,"14":0.40,"15":0.45,"16":0.50,"17":0.55,"18":0.60,"19":0.65,"20":0.70,"21":0.70,"22":0.75,"23":0.75,"24":0.80,"25":0.85,"26":0.85,"27":0.90,"28":0.95,"29":1.00,"30":1.05,},
        "5":{"6":0.250,"7":0.300,"8":0.35,"9":0.425,"10":0.475,"11":0.525,"12":0.50,"13":0.55,"14":0.60,"15":0.65,"16":0.70,"17":0.75,"18":0.85,"19":0.90,"20":0.95,"21":1.00,"22":1.05,"23":1.10,"24":1.15,"25":1.20,"26":1.25,"27":1.30,"28":1.35,"29":1.40,"30":1.45,},
        "6":{"6":0.350,"7":0.45,"8":0.50,"9":0.575,"10":0.650,"11":0.700,"12":0.70,"13":0.80,"14":0.90,"15":0.95,"16":1.00,"17":1.05,"18":1.15,"19":1.20,"20":1.30,"21":1.35,"22":1.40,"23":1.50,"24":1.60,"25":1.65,"26":1.70,"27":1.75,"28":1.85,"29":1.90,"30":2.00,},
    };

    let f_S_LeanRoofHeight = {
      "2":{"6":0.545,"7":0.63,"8":0.71,"9":0.80,"10":0.90,"11":0.96,"12":1.04,"13":1.136,"14":1.20,"15":1.28,"16":1.365,"17":1.45,"18":1.53,"19":1.62,"20":1.70,"21":1.79,"22":1.87,"23":1.955,"24":2.04,"25":1.4,"26":0.30,"27":0.30,"28":0.35,"29":0.35,"30":0.40,},
      "3":{"6":0.83,"7":0.94,"8":1.047,"9":1.16,"10":1.30,"11":1.426,"12":1.545,"13":1.68,"14":1.80,"15":1.92,"16":2.065,"17":2.135,"18":2.28,"19":2.39,"20":2.52,"21":2.65,"22":2.77,"23":2.89,"24":3.015,"25":0.55,"26":0.55,"27":0.60,"28":0.65,"29":0.70,"30":0.75,},
      "4":{"6":0.83,"7":0.94,"8":1.047,"9":1.16,"10":1.30,"11":1.426,"12":1.545,"13":1.68,"14":1.80,"15":1.92,"16":2.065,"17":2.135,"18":2.28,"19":2.39,"20":2.52,"21":2.65,"22":2.77,"23":2.89,"24":3.015,"25":0.55,"26":0.55,"27":0.60,"28":0.65,"29":0.70,"30":0.75,},
      "5":{"6":0.83,"7":0.94,"8":1.047,"9":1.16,"10":1.30,"11":1.426,"12":1.545,"13":1.68,"14":1.80,"15":1.92,"16":2.065,"17":2.135,"18":2.28,"19":2.39,"20":2.52,"21":2.65,"22":2.77,"23":2.89,"24":3.015,"25":0.55,"26":0.55,"27":0.60,"28":0.65,"29":0.70,"30":0.75,},
      "6":{"6":0.350,"7":0.450,"8":0.50,"9":0.575,"10":0.650,"11":0.700,"12":0.70,"13":0.80,"14":0.90,"15":0.95,"16":1.00,"17":1.05,"18":1.15,"19":1.20,"20":1.30,"21":1.35,"22":1.40,"23":1.50,"24":1.60,"25":1.65,"26":1.70,"27":1.75,"28":1.85,"29":1.90,"30":2.00,},
    };
    
    let oddEven = 1;
    for(var i=6;i<450;i++){
      if(i%3 == 0){
        if(params.p_w == i){
          oddEven =  2
        }
      }
    }

    let leng = params.p_d / -2;
    let frontEndlength = params.p_d / 2;
    let jTrimCalor = params.p_t_c.replace("#","0x");
    let wainscotTrimCalor = params.p_w_c_c.replace("#","0x");
    let jTrimAlignment
    if(params.p_d <= 100){
      jTrimAlignment = 0
    }else{
      jTrimAlignment = 0.22
    }
    const wallDistance = (params.p_d <= 100)?0.04:0.15;
    if ("undefined" != typeof const_var.scene.getObjectByName("C_B_Walls")) const_var.scene.remove(const_var.scene.getObjectByName("C_B_Walls"));
    if ("undefined" != typeof const_var.scene.getObjectByName("F_S_L_Walls")) const_var.scene.remove(const_var.scene.getObjectByName("F_S_L_Walls"));
    if ("undefined" != typeof const_var.scene.getObjectByName("frontStorageWalls")) const_var.scene.remove(const_var.scene.getObjectByName("frontStorageWalls"));


      const C_B_Walls = new THREE.Group();
      C_B_Walls.name = "C_B_Walls";
    // C_B_Walls.visible = false;
      const_var.scene.add(C_B_Walls);

    const F_S_L_Walls = new THREE.Group();
    F_S_L_Walls.name = "F_S_L_Walls";
    const_var.scene.add(F_S_L_Walls);
    params.p_r_pH = roofMiddleHeight[params.p_r_p][params.p_w]

    const frontStorageWalls = new THREE.Group();
    frontStorageWalls.name = "frontStorageWalls";
    const_var.scene.add(frontStorageWalls);


    installationSurface(params.p_i_s)
    logoTexture();

    showWallName("center")


        /* Front Gable */
        if (const_var.b_t_M_L.getObjectByName("fGable")!=undefined) {
            let fGable = const_var.b_t_M_L.getObjectByName("fGable").clone();

            let wallTexture = horizontalTexture;
            if (params.p_v_w==true){
                wallTexture = verticalTexture;
            } else {
                wallTexture = horizontalTexture;
            }
        
            if (params.p_v_w==true) {
                var fbGableUVS = new Float32Array([
                  0.0, 0.5,
                   0.0, 0.5,
                   0.5, 0.0,
                  -0.5, 0.0,
                   0.5, 0.0,
                  -0.5, 0.0,
                ]);
            } else {
                var fbGableUVS = new Float32Array([
                   0.0, 1.0,
                   0.0, 1.0,
                   1.0, 0.0,
                  -1.0, 0.0,
                   1.0, 0.0,
                  -1.0, 0.0,
                ]);
            }
                fGable.geometry.setAttribute( 'uv', new THREE.BufferAttribute( fbGableUVS, 2 ) );
                let fbGableLoader = new THREE.TextureLoader();
                fGable.visible = ((params.p_f_w!="Open" || params.cB_addStorage_check_front || params.add_front_lean) && (params.singleSlope!=true && params.canopy != true))?true:false;
                fGable.scale.set(params.p_w,roofMiddleHeight[params.p_r_p][params.p_w],1);
                fGable.position.set(0,params.p_h,params.p_d/2+0.05);
                if (params.p_r_s == "1")  {
                    fGable.position.set(0,params.p_h+0.46,params.p_d/2+0.05);
                    fGable.scale.set(params.p_w-0.25,roofMiddleHeight[params.p_r_p][params.p_w],1);
                }

                let fbGableTexture = fbGableLoader.load(process.env.REACT_APP_BASE_URL+ wallTexture, function(texture1) {
                    fGable.material.map = texture1;
                    fGable.material.bumpMap = texture1;
                    fGable.material.bumpScale = 0.02
                    fGable.material.metalness = 1
                    fGable.material.roughness = 0.5
                    fGable.material.anisotropy = 10;
                // fGable.material.envMap = texture1;
                // fGable.material.emissiveMap = texture1;
                // fGable.material.emissiveIntensity = 1;
                fGable.material.map.wrapS = THREE.RepeatWrapping;
                fGable.material.map.wrapT = THREE.RepeatWrapping; 
                
                if (params.p_v_w==true) {
                  if(params.cB_addStorage_check_left == true){
                    fGable.material.map.rotation = Math.PI
                  }
                    fGable.material.map.repeat.set(2*Math.round((((params.p_w/2)+(params.p_w/2/3))*2)/2),1);
                } else {
                    fGable.material.map.repeat.set(1,(roofMiddleHeight[params.p_r_p][params.p_w]/1.5)*2);
                    // console.log(fGable.material.map.repeat,"fGable.material.map.repeat")
                }
                fGable.material.map.needsUpdate = true;
                fGable.material.needsUpdate = true;

                let innerWall = C_B_Walls.getObjectByName("fGable_inner")
                innerWall.material.map = texture1.clone();
                innerWall.material.map.rotation = 0
                innerWall.material.color.set(0xFFFFFF)
                innerWall.material.map.wrapS = THREE.RepeatWrapping;
                innerWall.material.map.wrapT = THREE.RepeatWrapping;
                innerWall.material.map.offset.x = params.p_w;
                innerWall.material.map.offset.y = params.p_w;
                innerWall.material.map.repeat.set(fGable.material.map.repeat.x,fGable.material.map.repeat.y);
                innerWall.material.map.rotation = (params.p_v_w==true) ? Math.PI: fGable.material.map.rotation;
                innerWall.material.map.needsUpdate = true 
                innerWall.material.needsUpdate = true 
            });
            C_B_Walls.add(fGable);
        }

        //front double gable
        if (C_B_Walls.getObjectByName("fGable_inner")==undefined) {
          let frontGableClone = C_B_Walls.getObjectByName("fGable");
          
          let doubleFrontGableJSON = frontGableClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleFrontGableJSON = new THREE.Mesh(doubleFrontGableJSON.geometry,leftDoubleMaterial);
          doubleFrontGableJSON.name = "fGable_inner";
          doubleFrontGableJSON.visible = (params.is_translusant==true)? false : frontGableClone.visible
          doubleFrontGableJSON.scale.set(frontGableClone.scale.x , frontGableClone.scale.y , frontGableClone.scale.z);
          doubleFrontGableJSON.position.set(frontGableClone.position.x , frontGableClone.position.y , frontGableClone.position.z-wallDistance);
          doubleFrontGableJSON.rotation.set(frontGableClone.rotation.x , frontGableClone.rotation.y , frontGableClone.rotation.z)
          
          const_var.wallsForCut.fGable_inner = doubleFrontGableJSON.clone();
          C_B_Walls.add(doubleFrontGableJSON);
           }

        /* Back Gable */
    //     if (const_var.b_t_M_L.getObjectByName("bGable")!=undefined) {
    //         let bGable = const_var.b_t_M_L.getObjectByName("bGable").clone();
          
    //         let wallTexture = horizontalTexture;
    //         if (params.p_v_w==true){
    //             wallTexture = verticalTexture;
    //         } else {
    //             wallTexture = horizontalTexture;
    //         }

    //         if  (params.p_v_w==true) {
    //             var fbGableUVS = new Float32Array([
    //               0.0, -0.5,
    //               0.5, -0.5,
    //               -0.5, -0.5,
    //             ]);
    //         } else {
    //             var fbGableUVS = new Float32Array([
    //               -0, 1.0,
    //               0.0, -0.0,
    //               -0.5, -0.0,
    //             ]);
    //         }

    //         bGable.geometry.setAttribute( 'uv', new THREE.BufferAttribute( fbGableUVS, 2 ) );
    //         let fbGableLoader = new THREE.TextureLoader();
    //         // BGableTexture.wrapS = THREE.RepeatWrapping;
    //         // BGableTexture.wrapT = THREE.RepeatWrapping;
            
    //         bGable.visible = ((params.p_b_w !="Open" || params.add_back_lean || params.p_u_c!=false) && (params.singleSlope!=true) )?true:false;  
    //         //bGable.scale.set(params.p_w,params.p_r_p,0);
    //         bGable.scale.set(params.p_w,roofMiddleHeight[params.p_r_p][params.p_w],0);
    //         bGable.position.set(0,params.p_h,params.p_d/-2-0.06);
    //         bGable.name = "bGable"
            
    //         if (params.p_r_s == "1") {
    //             bGable.position.set(0,params.p_h+0.32+0.1,params.p_d/-2-0.06);
    //             bGable.scale.set(params.p_w,roofMiddleHeight[params.p_r_p][params.p_w],0);
    //         }
    //         let BGableTexture = fbGableLoader.load( wallTexture,  function(texture1) {

    //         bGable.material.map = texture1;
    //         // bGable.material.envMap = texture1;
    //         // bGable.material.emissiveMap = texture1;
    //         // bGable.material.emissiveIntensity = 1;
    //         bGable.material.map.wrapS = THREE.RepeatWrapping;
    //         bGable.material.map.wrapT = THREE.RepeatWrapping;     
    //         if (params.p_v_w==true) {
    //           if(params.cB_addStorage_check_right == true){
    //             bGable.material.map.rotation = Math.PI
    //           }
    //             bGable.material.map.repeat.set(Math.round(((params.p_w/2)+(params.p_w/2/3))*2),1);
    //         } else {
    //             bGable.material.map.repeat.set(1,(roofMiddleHeight[params.p_r_p][params.p_w]/1.5)*2);
    //         }
    //     });
    //     C_B_Walls.add(bGable);
    // }

    if (const_var.b_t_M_L.getObjectByName("bGable")!=undefined) {
      let bGable = const_var.b_t_M_L.getObjectByName("bGable").clone();
  
      let wallTexture = horizontalTexture;
      if (params.p_v_w==true){
          wallTexture = verticalTexture;
      } else {
          wallTexture = horizontalTexture;
      }
  
      if (params.p_v_w==true) {
          var fbGableUVS = new Float32Array([
            0.0, 0.5,
            0.0, 0.5,
            0.5, 0.0,
          -0.5, 0.0,
            0.5, 0.0,
          -0.5, 0.0,
          ]);
      } else {
          var fbGableUVS = new Float32Array([
              0.0, 1.0,
              0.0, 1.0,
              1.0, 0.0,
            -1.0, 0.0,
              1.0, 0.0,
            -1.0, 0.0,
          ]);
      }
          bGable.geometry.setAttribute( 'uv', new THREE.BufferAttribute( fbGableUVS, 2 ) );
          let fbGableLoader = new THREE.TextureLoader();
          bGable.visible = ((params.p_b_w !="Open" || params.add_back_lean || params.p_u_c!=false) && (params.singleSlope!=true && params.canopy != true) )?true:false;  
          bGable.scale.set(params.p_w,roofMiddleHeight[params.p_r_p][params.p_w],1);
          bGable.position.set(0,params.p_h,params.p_d/-2-0.05);
          bGable.name = "bGable"
          if (params.p_r_s == "1")  {
              bGable.position.set(0,params.p_h+0.46,params.p_d/-2-0.05);
              bGable.scale.set(params.p_w-0.25,roofMiddleHeight[params.p_r_p][params.p_w],1);
          }
          let fbGableTexture = fbGableLoader.load(process.env.REACT_APP_BASE_URL+ wallTexture, function(texture1) {
              bGable.material.map = texture1;
              bGable.material.bumpMap = texture1;
              bGable.material.bumpScale = 0.02
              bGable.material.metalness = 1
              bGable.material.roughness = 0.5
              bGable.material.anisotropy = 10;
          // bGable.material.envMap = texture1;
          // bGable.material.emissiveMap = texture1;
          // bGable.material.emissiveIntensity = 1;
          bGable.material.map.wrapS = THREE.RepeatWrapping;
          bGable.material.map.wrapT = THREE.RepeatWrapping; 
              if (params.p_v_w==true) {
                  if(params.cB_addStorage_check_left == true){
                    bGable.material.map.rotation = Math.PI
                  }
                  bGable.material.map.repeat.set(2*Math.round((((params.p_w/2)+(params.p_w/2/3))*2)/2),1);
              } else {
                  bGable.material.map.repeat.set(1,(roofMiddleHeight[params.p_r_p][params.p_w]/1.5)*2);
              }
              bGable.material.map.needsUpdate = true;
              bGable.material.needsUpdate = true;

              let innerWall = C_B_Walls.getObjectByName("bGable_inner")
              innerWall.material.map = texture1.clone();
              innerWall.material.map.rotation = 0
              innerWall.material.color.set(0xFFFFFF)
              innerWall.material.map.wrapS = THREE.RepeatWrapping;
              innerWall.material.map.wrapT = THREE.RepeatWrapping;
              innerWall.material.map.offset.x = params.p_w;
              innerWall.material.map.offset.y = params.p_w;
              innerWall.material.map.repeat.set(bGable.material.map.repeat.x,bGable.material.map.repeat.y);
              innerWall.material.map.needsUpdate = true 
              innerWall.material.needsUpdate = true 

      });
      C_B_Walls.add(bGable);
  }
  

        //back double gable
        if (C_B_Walls.getObjectByName("bGable_inner")==undefined) {
          
          let backGableClone = C_B_Walls.getObjectByName("bGable");

          if(C_B_Walls.getObjectByName("bGable") != undefined){
          let doubleBackGableJSON = backGableClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleBackGableJSON = new THREE.Mesh(doubleBackGableJSON.geometry,leftDoubleMaterial);
          doubleBackGableJSON.name = "bGable_inner";
          doubleBackGableJSON.visible = (params.is_translusant==true)? false : backGableClone.visible
          doubleBackGableJSON.scale.set(backGableClone.scale.x , backGableClone.scale.y , backGableClone.scale.z);
          doubleBackGableJSON.position.set(backGableClone.position.x , backGableClone.position.y , backGableClone.position.z+wallDistance);
          doubleBackGableJSON.rotation.set(backGableClone.rotation.x , backGableClone.rotation.y , backGableClone.rotation.z)
          
          C_B_Walls.add(doubleBackGableJSON);
          const_var.wallsForCut.bGable_inner = doubleBackGableJSON.clone();
          }
        }

        let addDoorIntersectWall = function(height, pHeight, wall) {
            const nWall =  wall.clone();
            nWall.position.y = height - height/2 - pHeight/2;
            if (nWall.visible === true) nWall.scale.y =  (height - pHeight);
            nWall.visible = false;
            C_B_Walls.add(nWall);
            wall.name +=1;
            const_var.wallsForCut[wall.name] = wall.clone();
        }

       /*Front Wall */
        if (const_var.b_t_M_L.getObjectByName("c_b_f_w")!=undefined) {
            let frontWall = const_var.b_t_M_L.getObjectByName("c_b_f_w").clone();
            
            let textureImg = horizontalTexture;
            if (params.p_v_w==true){
                textureImg = verticalTexture;
            } else {
                textureImg = horizontalTexture;
            }
            let WallLoader = new THREE.TextureLoader();
    
            frontWall.name = "c_b_f_w"
            frontWall.position.x = 0;
            frontWall.position.z = params.p_d / 2+0.045;                     
            frontWall.visible = (params.p_f_w !="Open" || params.cB_addStorage_check_front )?true:false;
            
            let wH = params.p_h;
            let wP = params.p_h - wH/2;

            if (params.singleSlope) {
              wH = params.p_h  - (Number(params.p_r_p)/12) * params.p_w;
              wP = wH/2;
            }
            
            frontWall.position.y = wP;                      
            frontWall.scale.set(params.p_w,wH,1);
            switch(params.p_f_w)
            {
                case "One_Fourth_Close":
                    wH = wH/4;
                    wP = params.p_h - wH/2;
                    if (params.singleSlope) wP = params.p_h  - (Number(params.p_r_p)/12) * params.p_w - wH/2;
                    break;
                case "Half_Close":
                    wH = wH/2;
                    wP = params.p_h - wH/2;
                    if (params.singleSlope) wP = params.p_h  - (Number(params.p_r_p)/12) * params.p_w - wH/2;
                    break;                            
                case "Three_Fourth_Close":
                    wH = wH * 3/4;
                    wP = params.p_h - wH/2;
                    if (params.singleSlope) wP = params.p_h  - (Number(params.p_r_p)/12) * params.p_w - wH/2;
                    break;
                case "Extended Gable":
                    wH = 3
                    wP = params.p_h - wH/2;
                    if (params.singleSlope) wP = params.p_h  - (Number(params.p_r_p)/12) * params.p_w - wH/2;
                  //   wH = Math.abs(params.p_f_w.replace(/\D/g, "")) * 3;
                  // wP = params.p_h - wH/2;
                    break;
                case "Gable":
                    wH = 0.15;
                    wP = params.p_h - wH/2; 
                    if (params.singleSlope) wP = params.p_h  - (Number(params.p_r_p)/12) * params.p_w - wH/2;
                    break;
                case "Open":
                case "Close":
                  // console.log(wH ,wP,"CLOSEDDDDD");
                    wH = params.p_h;
                    wP = (params.p_h - wH/2);
                    if (params.singleSlope) {
                      wH = params.p_h - (Number(params.p_r_p)/12) * params.p_w ;
                      wP = params.p_h  - (Number(params.p_r_p)/12) * params.p_w - wH/2;
                    }
                    break;
                default:

                break;
            }


            let hdfp = params.p_h - (params.leanF_p_h + (parseInt(params.b_l_t_r_pF)/12) * params.leanF_p_w);
            if(params.add_front_lean ==true && Object.values(const_var.wallArray["front"])[0] == params.p_f_w || params.add_front_lean ==true && params.p_f_w == "Open")
            {    
              // wH = (params.p_w == params.p_f_w )?hdfp+0.2:hdfp;
              // wP = params.p_h - wH/2;
              params.p_f_w = params.p_f_wF
              wH = hdfp+0.2;
              wP = params.p_h - wH/2;
              frontWall.visible = true; 
            }
            // else{
            //      const IsNumeric = (newVal) => /^-{0,1}\d*\.{0,1}\d+$/.test(newVal);
     
            //      wH = Math.abs(params.p_f_w.replace(/\D/g, "")) * 3;
            //      wP = params.p_h - wH/2; 
            
            // }
            
            // if(wH <= 0.9){
            //   params.p_f_w = "Open";
            // }else if(wH >= params.p_h/4){
            //   params.p_f_w = "One_Fourth_Close";
            // }else if(wH >= params.p_h* 3/4){
            //   params.p_f_w = "Three_Fourth_Close";
            // }else if(wH >= params.p_h/2){
            //   params.p_f_w = "Half_Close";
            // }else if(wH >= 3){
            //   params.p_f_w = "Extended Gable";
            // }else if(wH >= params.p_h/18){
            //   params.p_f_w = "Gable";
            // }else if(wH >= params.p_h){
            //   params.p_f_w = "Close";
            // }
            
            // if ( wH <= params.p_h/18 && params.add_front_lean==true) {
            //   params.p_f_w = "Gable"
            // } else if (wH > params.p_h/18 && wH <= 3 && params.add_front_lean==true) {
            //   params.p_f_w = "Extended Gable"
            // }

            frontWall.position.y = wP;              
            frontWall.scale.set(params.p_w,wH,1);
            frontWall.scale.x = (params.singleSlope ? params.p_w -0.20: params.p_w)
            if(params.p_r_s == "1")
            {
               let wH = params.p_h;
               let wP = params.p_h - wH/2;
               frontWall.position.y = wP;                
            
               switch(params.p_f_w)
               {
                   case "One_Fourth_Close":
                       wH = (wH/4)+0.5;
                       wP = (params.p_h - wH/2)+0.37;
                       break;
                   case "Half_Close":
                       wH = (wH/2)+0.5;
                       wP = (params.p_h - wH/2)+0.37;
                       break;                    
                   case "Three_Fourth_Close":
                       wH = (wH * 3/4)+0.5;
                       wP = (params.p_h - wH/2)+0.37;
                       break;
                   case "Extended Gable":
                       wH = 3+0.5;
                       wP = (params.p_h - wH/2)+0.37;
                       break;
                   case "Gable":
                       wH = 0.4;
                       wP = (params.p_h - wH/2)+0.37;
                       break;
                   case "Close":
                       wH = (params.p_h)+0.5;
                       wP = (params.p_h - wH/2)+0.37;
                       break;
                   default:
                    // let hdfp = params.p_h - (params.leanF_p_h + (parseInt(params.b_l_t_r_pF)/12) * params.leanF_p_w);                    

                    // if(params.add_front_lean  && params.a_c_p_f == false )
                    // {    
                    //     wH = hdfp+0.5;
                    //     wP = (params.p_h - wH/2)+0.37;
                    //     frontWall.visible = true; 
                    // }
                    // else
                    // {
                    //    wH = Math.abs(params.p_f_w.replace(/\D/g, "")) * 3;
                    //    wP = params.p_h - wH/2;                
                       
                    // }   
                    break;
                }

                let hdfp = params.p_h - (params.leanF_p_h + (parseInt(params.b_l_t_r_pF)/12) * params.leanF_p_w);                    

                if(params.add_front_lean && Object.values(const_var.wallArray["front"])[0] == params.p_f_w || params.add_front_lean ==true && params.p_f_w == "Open")
                {    
                    params.p_f_w = params.p_f_wF
                    wH = hdfp+0.5;
                    wP = (params.p_h - wH/2)+0.37;
                    frontWall.visible = true; 
                }

                frontWall.position.y = wP+0.09;                   
                frontWall.scale.set(params.p_w-0.25,wH,1);
                }


                let  FWwallTexture = WallLoader.load(process.env.REACT_APP_BASE_URL+textureImg , function(wallTexture) {
                    FWwallTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
                    frontWall.material.map = wallTexture;
                    frontWall.material.bumpMap = wallTexture;
                    frontWall.material.bumpScale = 0.02
                    frontWall.material.metalness = 1
                    frontWall.material.roughness = 0.5
                    frontWall.material.anisotropy = 10;
                    // frontWall.material.envMap = wallTexture;
                    // frontWall.material.emissiveMap = wallTexture;
                    // frontWall.material.emissiveIntensity = 1;
                    frontWall.material.map.wrapS = THREE.RepeatWrapping;
                    frontWall.material.map.wrapT = THREE.RepeatWrapping;
                    // frontWall.material.emissive.setHex(0xE8E8E8);
                    frontWall.material.map.offset.x = params.p_w;
                    frontWall.material.map.offset.y = params.p_w;
                    
                if (params.p_v_w==true) {
                  if(params.cB_addStorage_check_left == true){
                    frontWall.material.map.rotation = Math.PI
                  }
                    frontWall.material.map.repeat.set(2*Math.round((((params.p_w/2)+(params.p_w/2/3))*2)/2),1);
                } else {
                    frontWall.material.map.repeat.set(1,Math.round((wH/1.5)*2));
                    // console.log(frontWall.material.map.repeat,"frontWall.material.map.repeat")
                }
                frontWall.material.needsUpdate = true

                let innerWall = C_B_Walls.getObjectByName("c_b_f_w_inner")
                innerWall.material.map = wallTexture.clone();
                innerWall.material.map.rotation = 0
                innerWall.material.color.set(0xFFFFFF)
                innerWall.material.map.wrapS = THREE.RepeatWrapping;
                innerWall.material.map.wrapT = THREE.RepeatWrapping;
                innerWall.material.map.offset.x = params.p_w;
                innerWall.material.map.offset.y = params.p_w;
                innerWall.material.map.repeat.set(frontWall.material.map.repeat.x,frontWall.material.map.repeat.y);
                innerWall.material.map.needsUpdate = true 
                innerWall.material.needsUpdate = true 
            })

            if (params.cB_addStorage_check_front) params.p_f_w = "Close";
            if (params.p_f_w !== 'Open' && params.p_f_w !== "Close") {
              addDoorIntersectWall(params.p_h, wH, frontWall);
            }

            C_B_Walls.add(frontWall);

            if (const_var.b_t_M_L.getObjectByName("jTrim")!=undefined && params.p_f_w !== "Close" && params.p_f_w !== "Open" && params.p_j_t_end == true) {
              let jTrim = const_var.b_t_M_L.getObjectByName("jTrim").clone();
              jTrim.name = "c_b_f_w_jtrim";
              jTrim.material = jTrim.material.clone();
              jTrim.material.color.setHex(jTrimCalor)
              jTrim.visible = frontWall.visible
              // if(params.add_front_lean ==true && Object.values(const_var.wallArray["front"])[0] == params.p_f_w || params.add_front_lean ==true && params.p_f_w == "Open"){
              //   jTrim.visible = false
              // }
              jTrim.rotation.y = Math.PI/2
              jTrim.scale.set(0.14+jTrimAlignment+0.02,0.12, params.p_w-0.25);
              jTrim.position.set(0,frontWall.position.y-(frontWall.scale.y/2)-0.01,(params.p_d/2)-0.01-(jTrimAlignment/2));
              if (params.p_h-0.22 < jTrim.position.y && params.add_front_lean) jTrim.scale.z = jTrim.scale.z - 1.53;
              if(params.cB_addStorage_check_left){
                jTrim.scale.z = params.p_w - params.cB_addStorage_left+0.2
                jTrim.position.x = params.cB_addStorage_left/2
              }
              if(params.cB_addStorage_check_right){
                jTrim.scale.z = params.p_w - params.cB_addStorage_right+0.2
                jTrim.position.x = -params.cB_addStorage_right/2
              }
              if(params.singleSlope && params.p_f_w == 'Gable' && !params.cB_addStorage_check_left) {
                jTrim.scale.z = jTrim.scale.z-0.55;
                jTrim.position.x = jTrim.position.x + 0.3
              }
              C_B_Walls.add(jTrim);
            }

        }


        /*Double front wall */
        if (const_var.b_t_M_L.getObjectByName("c_b_f_w_inner")==undefined) {
          let frontWallClone = (params.p_f_w !== 'Open' && params.p_f_w !== "Close") ? C_B_Walls.getObjectByName("c_b_f_w1"): C_B_Walls.getObjectByName("c_b_f_w");
          
          let doubleFrontWallJSON = frontWallClone.clone();
          
          let frontMaterial= new THREE.MeshBasicMaterial({   side: THREE.DoubleSide,
            color: 0xADADAD,
           combine:3,dithering:true,
            shadowSide:THREE.DoubleSide,aoMapIntensity:0,
             });
          let frontWallDouble = new THREE.Mesh(doubleFrontWallJSON.geometry,frontMaterial);
          frontWallDouble.name = "c_b_f_w_inner"
          frontWallDouble.scale.set(frontWallClone.scale.x , frontWallClone.scale.y , frontWallClone.scale.z)
          frontWallDouble.visible = (params.is_translusant==true)? false : frontWallClone.visible
          frontWallDouble.position.set(frontWallClone.position.x , frontWallClone.position.y , frontWallClone.position.z)
          frontWallDouble.position.z = params.p_d/2-wallDistance+0.045;

          frontWallDouble.visible = (params.p_f_w !="Open" || params.cB_addStorage_check_front)?true:false;

        const_var.wallsForCut.c_b_f_w_inner = frontWallDouble.clone();
        C_B_Walls.add(frontWallDouble);
           
        }


        /* Left Wall */
        if (const_var.b_t_M_L.getObjectByName("c_b_l_w")!=undefined) {
           let leftWall = const_var.b_t_M_L.getObjectByName("c_b_l_w").clone();
                       let wallTextureImg = horizontalTexture;
                // let lenghtScale = params.p_d
               if (params.p_v_w==true){
                   wallTextureImg = verticalTexture;
               } else {
                   wallTextureImg = horizontalTexture;
               }
           
               let WallLoader = new THREE.TextureLoader();
               
              //  params.p_l_w = ( params.cB_addStorage_check_left==true && params.p_l_w=="Open")?"Close":params.p_l_w;
               leftWall.visible = (params.p_l_w !="Open" || params.cB_addStorage_check_left==true)?true:false;
                if (params.cB_addStorage_check_left) params.p_l_w = "Close"
               //leftWall.visible = (params.p_l_w !="Open")?true:false;
               leftWall.position.x = params.p_w / -2 - 0.01-0.04;
               leftWall.position.z = 0;

                 
                 let wH = params.p_h;
                 let wP = params.p_h - wH/2;

                if (params.singleSlope) {
                  wH = params.p_h  - (Number(params.p_r_p)/12) * params.p_w;
                  wP = wH/2;
                }

                // if(params.p_u_c && params.p_v_w){
                //   lenghtScale = params.p_d - Number(params.p_u_t)
                //   leftWall.position.z = - params.p_d/2 + Number(params.p_u_t) + lenghtScale/2;
                // }
                
                leftWall.position.y = wP;                   
                leftWall.scale.set(params.p_d,wH,1);                    
                 switch(params.p_l_w)
                 {
                     case "One_Fourth_Close":
                         wH = wH/4;
                         wP = params.p_h - wH/2;
                         if (params.singleSlope) wP = params.p_h  - (Number(params.p_r_p)/12) * params.p_w- wH/2;
                         break;
                     case "Half_Close":
                         wH = wH/2;
                         wP = params.p_h - wH/2;
                         if (params.singleSlope) wP = params.p_h  - (Number(params.p_r_p)/12) * params.p_w- wH/2;
                         break;                             
                     case "Three_Fourth_Close":
                         wH = wH * 3/4;
                         wP = params.p_h - wH/2;
                         if (params.singleSlope) wP = params.p_h  - (Number(params.p_r_p)/12) * params.p_w- wH/2;
                         break;
                     case "Extended Gable":
                         break;
                     case "Gable":
                         break;

                    case "Open":
                     wH = params.p_h;
                     wP = params.p_h - wH/2; 
                     if (params.singleSlope) {
                      wH = params.p_h - (Number(params.p_r_p)/12) * params.p_w;
                      wP = params.p_h  - (Number(params.p_r_p)/12) * params.p_w- wH/2;
                     }
                     break;

                     case "Close":
                         wH = params.p_h;
                         wP = params.p_h - wH/2;
                         if (params.singleSlope) {
                          wH = params.p_h - (Number(params.p_r_p)/12) * params.p_w;
                          wP = params.p_h  - (Number(params.p_r_p)/12) * params.p_w- wH/2;
                         }
                         break;
                      // case "1":
                      //    wH = 3;
                      //    wP = params.p_h - wH/2;
                      //      break;
                      // case "2":
                      //    wH = 6;
                      //    wP = params.p_h - wH/2;
                      //     break;
                      // case "3":
                      //    wH = 9;
                      //    wP = params.p_h - wH/2;
                      //     break;                        
                      // case "4":
                      //    wH = 12;
                      //    wP = params.p_h - wH/2;
                      //     break;                        
                      // case "5":
                      //    wH = 15;
                      //    wP = params.p_h - wH/2;
                      //     break;         
                      // case "6":
                      //   wH = 18;
                      //   wP = params.p_h - wH/2;
                      //    break;                  
                     default:

                         let hdfp = params.p_h - (params.lean_p_h + (parseInt(params.b_l_t_r_p)/12) * params.lean_p_w);
                         if(params.add_left_lean && hdfp > 0 &&  (Math.abs(params.p_l_w) * 3) -hdfp < 3)
                         {    
                           //wH = (params.p_d == params.lean_p_d)?hdfp+0.2:hdfp;
                           wH = hdfp+0.2;
                           wP = params.p_h - wH/2;
                           if (params.singleSlope) wP = params.p_h  - (Number(params.p_r_p)/12) * params.p_w- wH/2;
                           leftWall.visible = true; 
                         }
                         else
                         {
                        //  wH = Math.abs(params.p_l_w.replace(/\D/g, "")) * 3;
                        if(isNaN(params.p_l_w) == false){
                          wH = Math.abs(params.p_l_w) * 3;
                          wP = params.p_h - wH/2; 
                          if (params.singleSlope) wP = params.p_h  - (Number(params.p_r_p)/12) * params.p_w- wH/2;
                          leftWall.visible = ((params.p_l_w !="Open" || params.cB_addStorage_check_left==true )|| (params.singleSlope==true))?true:false;
                          }   
                         }
                         break;
                 }
                 //door clearance issue
                //  if (params.p_l_w == "Open"){
                //       wH =params.p_h-1
                //  }
                 var cal = Math.ceil(params.p_h-wH);
                 if (params.singleSlope) cal = params.p_h - ((Number(params.p_r_p)/12) * params.p_w) -wH;
                 if (cal >= 1.5) {
                   const_var.cutPanleLeftCheckL = true;
                  } 
                  else {
                   if (params.singleSlope && params.p_l_w!=="Open" ) {
                     const_var.cutPanleLeftCheckL = false;
                     params.p_c_p_l=false;
                   }
                  }                            
             
                 if(params.p_l_w=="Open" && params.p_c_p_l==true)
                 {
                     wH = 1.5;
                     wP = params.p_h - wH/2;
                     if (params.singleSlope) wP = params.p_h  - (Number(params.p_r_p)/12) * params.p_w- wH/2;
                     leftWall.visible = true;
                 }
                 if(params.p_l_w!=="Open" && params.p_c_p_l==true)
                 {
                  wH = wH + 1.5;
                  wP = params.p_h - wH/2;
                  if (params.singleSlope) wP = params.p_h  - (Number(params.p_r_p)/12) * params.p_w- wH/2;
                  leftWall.visible = true;
                 }

                 if(params.p_c_p_l==true && wH >= params.p_h){
                  // params.p_l_w = "Close"
                  wH = wH - 1.5;
                  wP = params.p_h - wH/2;
                  params.p_c_p_l=false
                   const_var.cutPanleLeftCheckL = false;
                 }

                 if (params.singleSlope) {
                  if(params.p_c_p_l==true && wH >= params.p_h - ((Number(params.p_r_p)/12) * params.p_w) ){
                    // params.p_l_w = "Close"
                    wH = wH - 1.5;
                    wP = params.p_h - ((Number(params.p_r_p)/12) * params.p_w)- wH/2;
                    params.p_c_p_l=false
                     const_var.cutPanleLeftCheckL = false;
                   }
                 }

                 if(params.p_c_p_l==false && wH > params.p_h - 1.5){
                   const_var.cutPanleLeftCheckL = false;
                 }
                 if(params.p_l_w == "Open"){
                  const_var.cutPanleLeftCheckL = true;
                }

                 if (params.cB_addStorage_check_left == true) {
                    params.p_l_w = "Close"
                    wH = params.p_h;
                    wP = params.p_h - wH/2;
                    if (params.singleSlope) {
                      wH = params.p_h - (Number(params.p_r_p)/12) * params.p_w;
                      wP = params.p_h - (Number(params.p_r_p)/12) * params.p_w - wH/2;
                    }
                 } else {
                  params.p_l_w = params.p_l_w
                 }
                leftWall.position.y = wP;                                 
                leftWall.scale.set(params.p_d,wH+0.05,1);
                if (params.singleSlope) leftWall.scale.set(params.p_d,wH-0.1,1);  
                let  LWwallTexture = WallLoader.load(process.env.REACT_APP_BASE_URL+wallTextureImg, function(wallTexture) {
                    LWwallTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);

                    // leftWall.material.envMap = wallTexture;
                    // leftWall.material.emissiveMap = wallTexture;
                    // leftWall.material.emissiveIntensity = 1;
                    leftWall.material.map = wallTexture;
                    leftWall.material.bumpMap = wallTexture;
                    leftWall.material.bumpScale = 0.02
                    leftWall.material.metalness = 1
                    leftWall.material.roughness = 0.5
                    leftWall.material.anisotropy = 10;
                    leftWall.material.map.wrapS = THREE.RepeatWrapping;
                    leftWall.material.map.wrapT = THREE.RepeatWrapping;
                    leftWall.material.map.offset.x = params.p_w;
                    leftWall.material.map.offset.y = params.p_w;
                 if(params.p_v_w==true)
                 {
                    leftWall.material.map.rotation = Math.PI
                    leftWall.material.map.repeat.set(((params.p_d/2)+(params.p_d/2/3))*2,1);
                 }else
                 {
                
                    leftWall.material.map.repeat.set(1,Math.round((wH/1.5)*2));
                 }
                 leftWall.material.map.needsUpdate = true

                 let innerWall = C_B_Walls.getObjectByName("c_b_l_w_inner")
                 innerWall.material.map = wallTexture.clone();
                 innerWall.material.map.rotation = 0
                 innerWall.material.color.set(0xFFFFFF)
                 innerWall.material.map.wrapS = THREE.RepeatWrapping;
                 innerWall.material.map.wrapT = THREE.RepeatWrapping;
                 innerWall.material.map.offset.x = params.p_w;
                 innerWall.material.map.offset.y = params.p_w;
                 innerWall.material.map.repeat.set(leftWall.material.map.repeat.x,leftWall.material.map.repeat.y);
                 innerWall.material.map.needsUpdate = true 
                 innerWall.material.needsUpdate = true 
                });

                if (params.p_l_w !== "Close") {
                  if (params.singleSlope == true) addDoorIntersectWall(params.p_h- (Number(params.p_r_p)/12) * params.p_w, wH, leftWall);
                  else addDoorIntersectWall(params.p_h, wH, leftWall);
                }
                C_B_Walls.add(leftWall);

                if ((const_var.b_t_M_L.getObjectByName("jTrim")!=undefined && params.p_l_w !== "Close" && params.p_l_w !== "Open" && params.p_j_t == true) || (params.p_l_w=="Open" && params.p_c_p_l==true && const_var.b_t_M_L.getObjectByName("jTrim")!=undefined && params.p_j_t == true)) {
                  let hdfp = params.p_h - (params.lean_p_h + (parseInt(params.b_l_t_r_p)/12) * params.lean_p_w);
                  let jTrim = const_var.b_t_M_L.getObjectByName("jTrim").clone();
                  jTrim.name = "c_b_l_w_jtrim";
                  jTrim.material = jTrim.material.clone();
                  jTrim.material.color.setHex(jTrimCalor)
                  jTrim.visible = leftWall.visible
                  // if(params.add_left_lean && hdfp > 0 &&  (Math.abs(params.p_l_w) * 3) -hdfp < 3){
                  //   jTrim.visible = false
                  // }
                  jTrim.scale.set(0.14+jTrimAlignment,0.12, params.p_d);
                  jTrim.position.set((params.p_w/-2)+(jTrimAlignment/2),leftWall.position.y-(leftWall.scale.y/2)-0.01,0);
                  if(params.p_u_c){
                    jTrim.scale.z = params.p_d-Number(params.p_u_t);
                    jTrim.position.z= Number(params.p_u_t)/2;
                  }
                  C_B_Walls.add(jTrim);
                }
        }


         //Left double wall
         if (C_B_Walls.getObjectByName("c_b_l_w_inner")==undefined) {
           let leftWallClone = params.p_l_w !== "Close" ? C_B_Walls.getObjectByName("c_b_l_w1"): C_B_Walls.getObjectByName("c_b_l_w");
           
           let doubleLeftWallJSON = leftWallClone.clone();
           
           let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
           doubleLeftWallJSON = new THREE.Mesh(doubleLeftWallJSON.geometry,leftDoubleMaterial);
           doubleLeftWallJSON.name = "c_b_l_w_inner"
           doubleLeftWallJSON.visible = (params.is_translusant==true)? false : leftWallClone.visible
           doubleLeftWallJSON.scale.set(leftWallClone.scale.x , leftWallClone.scale.y , leftWallClone.scale.z);
           doubleLeftWallJSON.position.set(leftWallClone.position.x+wallDistance , leftWallClone.position.y , leftWallClone.position.z);
           if (params.singleSlope) doubleLeftWallJSON.position.set(leftWallClone.position.x + 0.04, leftWallClone.position.y , leftWallClone.position.z);
           doubleLeftWallJSON.rotation.set(leftWallClone.rotation.x , leftWallClone.rotation.y , leftWallClone.rotation.z);

           doubleLeftWallJSON.visible = (params.p_l_w !="Open" || params.cB_addStorage_check_left==true || params.p_c_p_l == true)?true:false;

           const_var.wallsForCut.c_b_l_w_inner = doubleLeftWallJSON.clone();
           C_B_Walls.add(doubleLeftWallJSON);
            }

      if (const_var.b_t_M_L.getObjectByName("c_b_r_w")!=undefined && params.singleSlope != true) {
        let rightWall = const_var.b_t_M_L.getObjectByName("c_b_r_w").clone();
    
        let wallTextureImg = horizontalTexture;
        if (params.p_v_w==true){
            wallTextureImg = verticalTexture;
        } else {
            wallTextureImg = horizontalTexture;
        }
        let WallLoader = new THREE.TextureLoader();
        
        // params.p_r_w = ( params.cB_addStorage_check_right==true && params.p_r_w=="Open")?"Close":params.p_r_w;
        rightWall.visible = ((params.p_r_w !="Open" || params.cB_addStorage_check_right==true )&& (params.singleSlope!=true))?true:false;
        if (params.cB_addStorage_check_right) params.p_r_w = "Close"
        rightWall.position.x = params.p_w / 2+0.01+0.04;
        rightWall.position.z = 0;
        //rightWall.position.y = params.p_h / 2;                    
        //rightWall.scale.set(params.p_d,params.p_h,0);

          // let lenghtScale = params.p_d
          let RH = params.p_h;
          let RP = params.p_h - RH/2;
          // if(params.p_u_c && params.p_v_w){
          //   lenghtScale = params.p_d - Number(params.p_u_t)
          //   rightWall.position.z = - params.p_d/2 + Number(params.p_u_t) + lenghtScale/2;
          // }
          rightWall.position.y = RP;                    
          rightWall.scale.set(params.p_d,RH,1);                     
          switch(params.p_r_w)
          {
              case "One_Fourth_Close":
                  RH = (params.canopy)?(RH+((roofMiddleHeight[params.p_r_p][params.p_w])*2))/4 : RH/4;
                  RP = (params.canopy)?params.p_h+((roofMiddleHeight[params.p_r_p][params.p_w])*2) -( RH/2) : params.p_h - RH/2;
                  break;
              case "Half_Close":
                  RH = (params.canopy)?(RH+((roofMiddleHeight[params.p_r_p][params.p_w])*2))/2 : RH/2;
                  RP = (params.canopy)?params.p_h+((roofMiddleHeight[params.p_r_p][params.p_w])*2) -( RH/2) : params.p_h - RH/2;
                  break;                          
              case "Three_Fourth_Close":
                  RH = (params.canopy)?(RH+((roofMiddleHeight[params.p_r_p][params.p_w])*2))* 3/4 : RH * 3/4;
                  RP = (params.canopy)?params.p_h+((roofMiddleHeight[params.p_r_p][params.p_w])*2) -( RH/2) : params.p_h - RH/2;
                  break;
              case "Extended Gable":
                  break;
              case "Gable":
                  break;
              case "Open":
                RH = params.p_h;
                RP = params.p_h - RH/2; 
                break;
              case "Close":
                  RH = (params.canopy)? (params.p_h+((roofMiddleHeight[params.p_r_p][params.p_w])*2)) : params.p_h;
                  RP = (params.canopy)?params.p_h+((roofMiddleHeight[params.p_r_p][params.p_w])*2) -( RH/2) : params.p_h - RH/2;
                  break;
            //   case "1":
            //        RH = 3;
            //        RP = params.p_h - RH/2;
            //        break;
            //   case "2":
            //         RH = 6;
            //         RP = params.p_h - RH/2;
            //         break;
            //   case "3":
            //         RH = 9;
            //         RP = params.p_h - RH/2;
            //         break;       
            //  case "4":
            //    RH = 12;
            //    RP = params.p_h - RH/2;
            //     break;                        
            // case "5":
            //    RH = 15;
            //    RP = params.p_h - RH/2;
            //     break;                          
            // case "6":
            //    RH = 18;
            //    RP = params.p_h - RH/2;
            //     break;                          
              default:
                let hdfp = params.p_h - (params.leanR_p_h + (parseInt(params.b_l_t_r_pR)/12) * params.leanR_p_w);
                if(params.add_right_lean && hdfp > 0  &&  (Math.abs(params.p_r_w) * 3) -hdfp < 3)
                {    
                  RH = hdfp+0.2;
                  RP = params.p_h - RH/2;
                  rightWall.visible = true; 
                }
                else
                {
                  // RH = Math.abs(params.p_r_w.replace(/\D/g, "")) * 3;
                  if(isNaN(params.p_r_w) == false){
                  RH = Math.abs(params.p_r_w) * 3;
                  (params.canopy==true)?RP = params.p_h - RH/2 + roofMiddleHeight[params.p_r_p][params.p_w]: RP = params.p_h - RH/2; 
                  rightWall.visible = ((params.p_r_w !="Open" || params.cB_addStorage_check_right==true )&& (params.singleSlope!=true))?true:false;
                  }
                }   
                  break;
          }
          
          // var cal = Math.ceil(params.p_h-RH);
          // if (cal >= 1) {
          //   const_var.cutPanleLeftCheckR = true;
          // }                          
         
          // if(params.p_c_p_r==true)
          // {
          //     RH = RH + 1.5;
          //     RP = params.p_h - RH/2;
          //     rightWall.visible = true;
          // }
          if (params.p_r_w == "Open"){
            wH =params.p_h-1
          }
          var cal = Math.ceil(params.p_h-RH);
          if (cal >= 1) {
            const_var.cutPanleLeftCheckR = true;
          }  
          if(params.p_r_w=="Open" && params.p_c_p_r==true && params.singleSlope ==false)
          {
              RH = 1.5;
              RP = params.p_h - RH/2;
              rightWall.visible = true;
          }
          if(params.p_r_w!=="Open" && params.p_c_p_r==true)
          {
              RH = RH + 1.5;
              RP = params.p_h - RH/2;
              rightWall.visible = true;
          }
          if(params.p_c_p_r==true && RH >= params.p_h){
          //  params.p_r_w = "Close"
          RH = RH - 1.5;
          RP = params.p_h - RH/2;
           params.p_c_p_r=false
            const_var.cutPanleLeftCheckR = false;
          }

          if(params.p_c_p_r==false && RH > params.p_h - 1.5){
            const_var.cutPanleLeftCheckR = false;
          }
          if(params.p_r_w =="Open"){
            const_var.cutPanleLeftCheckR = true;
          }

          if(params.cB_addStorage_check_right == true){
            params.p_r_w = "Close"
            // RH = params.p_h;
            // RP = params.p_h - RH/2;
            RH = (params.canopy)? (params.p_h+((roofMiddleHeight[params.p_r_p][params.p_w])*2)) : params.p_h;
            RP = (params.canopy)?params.p_h+((roofMiddleHeight[params.p_r_p][params.p_w])*2) -( RH/2) : params.p_h - RH/2;
            // console.log(params.cB_addStorage_check_right,"params.cB_addStorage_check_right",params.p_r_w)
          } else{
            params.p_r_w = params.p_r_w
          }


          rightWall.position.y = RP;                
          rightWall.scale.set(params.p_d,RH+0.05,1);

          let  RwWallTexture = WallLoader.load(process.env.REACT_APP_BASE_URL+wallTextureImg, function(wallTexture) {
            RwWallTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
        // rightWall.material.envMap = wallTexture;
        // rightWall.material.emissiveMap = wallTexture;
        // rightWall.material.emissiveIntensity = 1;
        rightWall.material.map = wallTexture;
        rightWall.material.bumpMap = wallTexture;
        rightWall.material.bumpScale = 0.02
        rightWall.material.metalness = 1
        rightWall.material.roughness = 0.5
        rightWall.material.anisotropy = 10;
        rightWall.material.map.wrapS = THREE.RepeatWrapping;
        rightWall.material.map.wrapT = THREE.RepeatWrapping;
        rightWall.material.map.offset.x = params.p_w;
        rightWall.material.map.offset.y = params.p_w;  
          if(params.p_v_w==true)
          {
              rightWall.material.map.repeat.set(((params.p_d/2)+(params.p_d/2/3))*2,1);
          } else {
              rightWall.material.map.repeat.set(1,Math.round((RH/1.5)*2));
              // console.log(rightWall.material.map.repeat,"repeatcenter");
          }
          rightWall.material.map.needsUpdate = true

          let innerWall = C_B_Walls.getObjectByName("c_b_r_w_inner")
          innerWall.material.map = wallTexture.clone();
          innerWall.material.map.rotation = 0
          innerWall.material.color.set(0xFFFFFF)
          innerWall.material.map.wrapS = THREE.RepeatWrapping;
          innerWall.material.map.wrapT = THREE.RepeatWrapping;
          innerWall.material.map.offset.x = params.p_w;
          innerWall.material.map.offset.y = params.p_w;
          innerWall.material.map.repeat.set(rightWall.material.map.repeat.x,rightWall.material.map.repeat.y);
          innerWall.material.map.needsUpdate = true 
          innerWall.material.needsUpdate = true 
        });
        params.cB_addStorage_check_right ? params.p_r_w = "Close" : params.p_r_w =  params.p_r_w
        // console.log(typeof params.p_r_w,"params.p_r_w");
        if(params.canopy == true){
          if(isNaN(params.p_r_w) == false){
            rightWall.position.y = RP + ((roofMiddleHeight[params.p_r_p][params.p_w]));                
            rightWall.scale.set(params.p_d,RH+0.05,1);  
          }       
        }
        if (params.p_r_w !== "Close") {
          addDoorIntersectWall(params.p_h, RH, rightWall);
        }
        C_B_Walls.add(rightWall);

        if ((const_var.b_t_M_L.getObjectByName("jTrim")!=undefined && params.p_r_w !== "Close" && params.p_r_w !== "Open" && params.p_j_t == true) || (const_var.b_t_M_L.getObjectByName("jTrim")!=undefined && params.p_r_w=="Open" && params.p_c_p_r==true && params.singleSlope ==false && params.p_j_t == true)) {
          let hdfp = params.p_h - (params.leanR_p_h + (parseInt(params.b_l_t_r_pR)/12) * params.leanR_p_w);
          let jTrim = const_var.b_t_M_L.getObjectByName("jTrim").clone();
          jTrim.name = "c_b_r_w_jtrim";
          jTrim.material = jTrim.material.clone();
          jTrim.material.color.setHex(jTrimCalor)
          jTrim.visible = rightWall.visible
          // if(params.add_right_lean && hdfp > 0  &&  (Math.abs(params.p_r_w) * 3) -hdfp < 3){
          //   jTrim.visible = false
          // }
          jTrim.rotation.y = Math.PI
          jTrim.scale.set(0.14+(jTrimAlignment),0.12, params.p_d);
          jTrim.position.set((params.p_w/2)-(jTrimAlignment/2),rightWall.position.y-(rightWall.scale.y/2)-0.01,0);
          if(params.p_u_c){
            jTrim.scale.z = params.p_d-Number(params.p_u_t);
            jTrim.position.z= Number(params.p_u_t)/2;
          }
          C_B_Walls.add(jTrim);
        }
    }

        //right double wall
        if (C_B_Walls.getObjectByName("c_b_r_w_inner")==undefined && params.singleSlope != true) {
          let rightWallClone = params.p_r_w !== "Close" ? C_B_Walls.getObjectByName("c_b_r_w1"): C_B_Walls.getObjectByName("c_b_r_w");
          
          let doubleRightWallJSON = rightWallClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleRightWallJSON = new THREE.Mesh(doubleRightWallJSON.geometry,leftDoubleMaterial);
          doubleRightWallJSON.name = "c_b_r_w_inner";
          doubleRightWallJSON.visible = (params.is_translusant==true)? false : rightWallClone.visible
          doubleRightWallJSON.scale.set(rightWallClone.scale.x , rightWallClone.scale.y , rightWallClone.scale.z);
          doubleRightWallJSON.position.set(rightWallClone.position.x-wallDistance , rightWallClone.position.y , rightWallClone.position.z);
          doubleRightWallJSON.rotation.set(rightWallClone.rotation.x , rightWallClone.rotation.y , rightWallClone.rotation.z);

          doubleRightWallJSON.visible = ((params.p_r_w !="Open" || params.cB_addStorage_check_right==true || params.p_c_p_r == true)&& (params.singleSlope!=true))?true:false;
          
          const_var.wallsForCut.c_b_r_w_inner = doubleRightWallJSON.clone();
          C_B_Walls.add(doubleRightWallJSON);
           }

        /* Back Wall */
        if (const_var.b_t_M_L.getObjectByName("c_b_b_w")!=undefined) {
            let backWall = const_var.b_t_M_L.getObjectByName("c_b_b_w").clone();
        
            let wallTextureImg = horizontalTexture;
            if (params.p_v_w==true){
                wallTextureImg = verticalTexture;
            } else {
                wallTextureImg = horizontalTexture;
            }
  
            if (params.p_u_c) params.p_b_w = "Close"
              backWall.visible = (params.p_b_w !="Open")?true:false;

                backWall.position.x = 0;
                backWall.position.z = params.p_d / -2-0.055;
        
                
                let wH = params.p_h;
                let wP = params.p_h - wH/2;

                if (params.singleSlope) {
                  wH = params.p_h  - (Number(params.p_r_p)/12) * params.p_w;
                  wP = wH/2;
                }

                backWall.position.y = wP;                   
                backWall.scale.set(params.p_w,wH,1);                                            
                switch(params.p_b_w)
                {
                    case "One_Fourth_Close":
                        wH = wH/4;
                        wP = params.p_h - wH/2;
                        if (params.singleSlope) wP = params.p_h  - (Number(params.p_r_p)/12) * params.p_w- wH/2;
                        break;
                    case "Half_Close":
                        wH = wH/2;
                        wP = params.p_h - wH/2;
                        if (params.singleSlope) wP = params.p_h  - (Number(params.p_r_p)/12) * params.p_w- wH/2;
                        break;                              
                    case "Three_Fourth_Close":
                        wH = wH * 3/4;
                        wP = params.p_h - wH/2;
                        if (params.singleSlope) wP = params.p_h  - (Number(params.p_r_p)/12) * params.p_w- wH/2;
                        break;
                    case "Extended Gable":
                        wH = 3;
                        wP = params.p_h - wH/2;
                        if (params.singleSlope) wP = params.p_h  - (Number(params.p_r_p)/12) * params.p_w- wH/2;
                        break;
                    case "Gable":
                        wH = 0.15;
                        wP = params.p_h - wH/2;
                        if (params.singleSlope) wP = params.p_h  - (Number(params.p_r_p)/12) * params.p_w- wH/2;
                        break;

                    case "Open":
                    case "Close":
                        wH = params.p_h;
                        wP = params.p_h - wH/2;
                        if (params.singleSlope) {
                          wH = params.p_h - (Number(params.p_r_p)/12) * params.p_w;
                          wP = params.p_h  - (Number(params.p_r_p)/12) * params.p_w- wH/2;
                        }
                        break;
                    default:
          
                      break;
                }

                  // let hdfp = params.p_h - (params.lean_p_h + Number(params.b_l_t_r_pB));
                  let hdfp = params.p_h - (params.leanB_p_h + (parseInt(params.b_l_t_r_pB)/12) * params.leanB_p_w);
                  if(params.add_back_lean && Object.values(const_var.wallArray["back"])[0] == params.p_b_w || params.add_back_lean ==true && params.p_b_w == "Open")
                  {    
                      params.p_b_w = params.p_b_wB
                      wH = hdfp+0.2;
                      wP = params.p_h - wH/2;
                      backWall.visible = true; 
                  } 
                  // console.log(params.p_b_w,params.dropdown_flagB,"params.dropdown_flagB");
                //    else
                //   {
                //   wH = Math.abs(params.p_b_w.replace(/\D/g, "")) * 3;
                //   wP = params.p_h - wH/2;                   
                // }

                backWall.position.y = wP;                   
                backWall.scale.set(params.p_w,wH,1);
                backWall.scale.x = (params.singleSlope ? params.p_w -0.20: params.p_w)
                if(params.p_r_s == "1")
                {
                   let wH = params.p_h;
                   let wP = params.p_h - wH/2;
                   backWall.position.y = wP;                
                   switch(params.p_b_w)
                   {
                       case "One_Fourth_Close":
                           wH = (wH/4)+0.5;
                           wP = (params.p_h - wH/2)+0.37;
                           break;
                       case "Half_Close":
                           wH = (wH/2)+0.5;
                           wP = (params.p_h - wH/2)+0.37;
                           break;                    
                       case "Three_Fourth_Close":
                           wH = (wH * 3/4)+0.5;
                           wP = (params.p_h - wH/2)+0.37;
                           break;
                       case "Extended Gable":
                           wH = 3+0.5;
                           wP = (params.p_h - wH/2)+0.37;
                           break;
                       case "Gable":
                           wH = 0.4;
                           wP = (params.p_h - wH/2)+0.37;
                           break;
                       case "Close":
                           wH = (params.p_h)+0.5;
                           wP = (params.p_h - wH/2)+0.37;
                           break;
                       default:
                        // let hdfp = params.p_h - (params.lean_p_h + Number(params.b_l_t_r_pB));
                        // let hdfp = params.p_h - (params.leanB_p_h + (parseInt(params.b_l_t_r_pB)/15) * params.leanB_p_w);

                        // if(params.add_back_lean && hdfp >= 0 && params.a_c_p_b == false )
                        // {    
                        //     wH = hdfp;
                        //     wP = params.p_h - wH/2+0.37;
                        //     backWall.visible = true; 
                        // }  else
                        // {
                        //    wH = Math.abs(params.p_f_w.replace(/\D/g, "")) * 3;
                        //    wP = params.p_h - wH/2;                
                        //    break;
                        // }
                    }

                    let hdfp = params.p_h - (params.leanB_p_h + (parseInt(params.b_l_t_r_pB)/15) * params.leanB_p_w);

                    if(params.add_back_lean && hdfp >= 0 && Object.values(const_var.wallArray["back"])[0] == params.p_b_w || params.add_back_lean ==true && params.p_b_w == "Open")
                    {    
                        params.p_b_w = params.p_b_wB
                        wH = hdfp+0.5;
                        wP = params.p_h - wH/2+0.37;
                        backWall.visible = true; 
                    }

                    backWall.position.y = wP+0.1;                       
                    backWall.scale.set(params.p_w-0.25,wH,1);
                }
                    if (params.p_u_c == true) {
                         params.p_b_w = "Close"
                         wH = params.p_h;
                         wP = params.p_h - wH/2;
                    } else {
                      params.p_b_w = params.p_b_w
                    }      
                    let WallLoader = new THREE.TextureLoader();
                    let  BWwallTexture = WallLoader.load(process.env.REACT_APP_BASE_URL+wallTextureImg, function(wallTexture) {
                          BWwallTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
                        //   backWall.material.envMap = wallTexture;
                        //   backWall.material.emissiveMap = wallTexture;
                        //   backWall.material.emissiveIntensity = 1;
                          backWall.material.map = wallTexture;
                          backWall.material.bumpMap = wallTexture;
                          backWall.material.bumpScale = 0.02
                          backWall.material.metalness = 1
                          backWall.material.roughness = 0.5
                          backWall.material.anisotropy = 10;
                          backWall.material.map.wrapS = THREE.RepeatWrapping;
                          backWall.material.map.wrapT = THREE.RepeatWrapping;
                          backWall.material.map.offset.x = params.p_w;
                          backWall.material.map.offset.y = params.p_w;
                    if(params.p_v_w==true) {
                      backWall.material.map.rotation = Math.PI
                      if(params.cB_addStorage_check_left == true){
                        backWall.material.map.rotation = 0
                      }
                        backWall.material.map.repeat.set(2*Math.round(((((params.p_w/2)+(params.p_w/2/3))*2))/2),1);
                    } else {
                        backWall.material.map.repeat.set(1,Math.round((wH/1.5)*2));
                    }            
                    backWall.material.needsUpdate = true                

                    let innerWall = C_B_Walls.getObjectByName("c_b_b_w_inner")
                    innerWall.material.map = wallTexture.clone();
                    innerWall.material.map.rotation = 0
                    innerWall.material.color.set(0xFFFFFF)
                    innerWall.material.map.wrapS = THREE.RepeatWrapping;
                    innerWall.material.map.wrapT = THREE.RepeatWrapping;
                    innerWall.material.map.offset.x = params.p_w;
                    innerWall.material.map.offset.y = params.p_w;
                    innerWall.material.map.repeat.set(backWall.material.map.repeat.x,backWall.material.map.repeat.y);
                    innerWall.material.map.needsUpdate = true 
                    innerWall.material.needsUpdate = true 

                    });      
                    
                    if (params.p_b_w !== 'Open' && params.p_b_w !== "Close") {
                      addDoorIntersectWall(params.p_h, wH, backWall);
                    }
                    C_B_Walls.add(backWall);

                    if (const_var.b_t_M_L.getObjectByName("jTrim")!=undefined && params.p_b_w !== "Close" && params.p_b_w !== "Open" && params.p_j_t_end == true) {
                      let jTrim = const_var.b_t_M_L.getObjectByName("jTrim").clone();
                      jTrim.name = "c_b_b_w_jtrim";
                      jTrim.material = jTrim.material.clone();
                      jTrim.material.color.setHex(jTrimCalor)
                      jTrim.visible = backWall.visible
                      // if(params.add_back_lean && Object.values(const_var.wallArray["back"])[0] == params.p_b_w || params.add_back_lean ==true && params.p_b_w == "Open"){
                      //   jTrim.visible = false
                      // }
                      jTrim.rotation.y = Math.PI/-2
                      jTrim.scale.set(0.14+(jTrimAlignment),0.12, params.p_w-0.25);
                      jTrim.position.set(0,backWall.position.y-(backWall.scale.y/2)-0.01,(params.p_d/-2)+(jTrimAlignment/2));
                      if (params.p_h-0.22 < jTrim.position.y&& params.add_back_lean) jTrim.scale.z = jTrim.scale.z - 1.53;
                      if(params.cB_addStorage_check_left){
                        jTrim.scale.z = params.p_w - params.cB_addStorage_left+0.2
                        jTrim.position.x = params.cB_addStorage_left/2
                      }
                      if(params.cB_addStorage_check_right){
                        jTrim.scale.z = params.p_w - params.cB_addStorage_right+0.2
                        jTrim.position.x = -params.cB_addStorage_right/2
                      }
                      if(params.singleSlope && params.p_b_w == 'Gable' && !params.cB_addStorage_check_left) {
                        jTrim.scale.z = jTrim.scale.z-0.55
                        jTrim.position.x = jTrim.position.x + 0.3
                      }
                      C_B_Walls.add(jTrim);
                    }
        }

        //back double wall
        if (C_B_Walls.getObjectByName("c_b_b_w_inner")==undefined) {
          let backWallClone = params.p_b_w !== 'Open' && params.p_b_w !== "Close" ? C_B_Walls.getObjectByName("c_b_b_w1"): C_B_Walls.getObjectByName("c_b_b_w");
          
          let doubleBackWallJSON = backWallClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleBackWallJSON = new THREE.Mesh(doubleBackWallJSON.geometry,leftDoubleMaterial);
          doubleBackWallJSON.name = "c_b_b_w_inner";
          doubleBackWallJSON.visible = (params.is_translusant==true)? false : backWallClone.visible
          doubleBackWallJSON.scale.set(backWallClone.scale.x , backWallClone.scale.y , backWallClone.scale.z);
          doubleBackWallJSON.position.set(backWallClone.position.x , backWallClone.position.y , backWallClone.position.z+wallDistance);
          doubleBackWallJSON.rotation.set(backWallClone.rotation.x , backWallClone.rotation.y , backWallClone.rotation.z);

          doubleBackWallJSON.visible = (params.p_b_w !="Open")?true:false;
          
          const_var.wallsForCut.c_b_b_w_inner = doubleBackWallJSON.clone();
          
          C_B_Walls.add(doubleBackWallJSON);
           }


      if(params.p_u_c == true){
                 
        /* Front storage Gable */
        if (const_var.b_t_M_L.getObjectByName("f_S_Gable")!=undefined) {
         let frontStorageGable = const_var.b_t_M_L.getObjectByName("f_S_Gable").clone();

         let wallTexture = horizontalTexture;
         if (params.p_v_w==true){
           wallTexture = verticalTexture;
         } else {
           wallTexture = horizontalTexture;
         }
           if(params.p_v_w==true)
           {
               var f_S_GableUVS = new Float32Array([
                  0.0, 0.5,
                   0.0, 0.5,
                   0.5, 0.0,
                  -0.5, 0.0,
                   0.5, 0.0,
                  -0.5, 0.0,
               ]);
           }
           else
           {
               var f_S_GableUVS = new Float32Array([
                //  0, 1.0,
                //  0.0, 0.0,
                //  -0.5, 0.0,
                  0.0, 1.0,
                   0.0, 1.0,
                   1.0, 0.0,
                  -1.0, 0.0,
                   1.0, 0.0,
                  -1.0, 0.0,
               ]);
           }
           frontStorageGable.geometry.setAttribute( 'uv', new THREE.BufferAttribute( f_S_GableUVS, 2 ) );
              frontStorageGable.scale.set(params.p_w,roofMiddleHeight[params.p_r_p][params.p_w],1);
              frontStorageGable.position.set(0,params.p_h,leng+(parseInt(params.p_u_t)+0.06));
              frontStorageGable.visible = (params.p_u_c!=false && (params.singleSlope!=true && params.canopy!=true))?true:false;
  
              if(params.p_r_s == "1") {
                  frontStorageGable.position.set(0,params.p_h,leng+(parseInt(params.p_u_t)));
                  frontStorageGable.scale.set(params.p_w,roofMiddleHeight[params.p_r_p][params.p_w]+0.5,1);
              }   
              let f_S_GableLoader = new THREE.TextureLoader();
              let texture1 = f_S_GableLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture1) {
                frontStorageGable.material.map = texture1;
                frontStorageGable.material.bumpMap = texture1;
                frontStorageGable.material.bumpScale = 0.02
                frontStorageGable.material.metalness = 1
                frontStorageGable.material.roughness = 0.5
                frontStorageGable.material.anisotropy = 10;
                frontStorageGable.material.map.wrapS = THREE.RepeatWrapping;
                frontStorageGable.material.map.wrapT = THREE.RepeatWrapping;
              if(params.p_v_w==true) {
                  frontStorageGable.material.map.repeat.set(2*Math.round((((params.p_w/2)+(params.p_w/2/3))*2)/2),1);
              } else    {
                  frontStorageGable.material.map.repeat.set(1,(roofMiddleHeight[params.p_r_p][params.p_w]/1.5)*2);
              }

              let innerWall = C_B_Walls.getObjectByName("f_S_Gable_inner")
              innerWall.material.map = texture1.clone();
              innerWall.material.map.rotation = 0
              innerWall.material.color.set(0xFFFFFF)
              innerWall.material.map.wrapS = THREE.RepeatWrapping;
              innerWall.material.map.wrapT = THREE.RepeatWrapping;
              innerWall.material.map.offset.x = params.p_w;
              innerWall.material.map.offset.y = params.p_w;
              innerWall.material.map.repeat.set(frontStorageGable.material.map.repeat.x,frontStorageGable.material.map.repeat.y);
              innerWall.material.map.needsUpdate = true 
              innerWall.material.needsUpdate = true 

            });
            C_B_Walls.add(frontStorageGable);
        }

        //Double front storage gable
        if (C_B_Walls.getObjectByName("f_S_Gable_inner")==undefined) {
          
          let frontStorageGableClone = C_B_Walls.getObjectByName("f_S_Gable");

          if(C_B_Walls.getObjectByName("f_S_Gable") != undefined){
          let doubleFrontStorageGableJSON = frontStorageGableClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleFrontStorageGableJSON = new THREE.Mesh(doubleFrontStorageGableJSON.geometry,leftDoubleMaterial);
          doubleFrontStorageGableJSON.name = "f_S_Gable_inner";
          doubleFrontStorageGableJSON.visible = (params.is_translusant==true)? false : frontStorageGableClone.visible
          doubleFrontStorageGableJSON.scale.set(frontStorageGableClone.scale.x , frontStorageGableClone.scale.y , frontStorageGableClone.scale.z);
          doubleFrontStorageGableJSON.position.set(frontStorageGableClone.position.x , frontStorageGableClone.position.y , frontStorageGableClone.position.z-wallDistance);
          doubleFrontStorageGableJSON.rotation.set(frontStorageGableClone.rotation.x , frontStorageGableClone.rotation.y , frontStorageGableClone.rotation.z)
          
          C_B_Walls.add(doubleFrontStorageGableJSON);
          const_var.wallsForCut.f_S_Gable_inner = doubleFrontStorageGableJSON.clone();
          }
        }

        /* Front storage Wall */
        if (const_var.b_t_M_L.getObjectByName("c_b_f_s_w")!=undefined) {
            let frontStorageWall = const_var.b_t_M_L.getObjectByName("c_b_f_s_w").clone();
        
            let Texture = horizontalTexture;
            if (params.p_v_w==true){
                Texture = verticalTexture;
            } else {
                Texture = horizontalTexture;
            }
              frontStorageWall.scale.set(params.p_w,params.p_h,1);
              frontStorageWall.scale.x = (params.singleSlope ? params.p_w -0.20: params.p_w)
              frontStorageWall.position.x = /*(params.singleSlope)? -wallDistance :*/ 0;
              frontStorageWall.position.y =  params.p_h/2
              if (params.singleSlope) {
                frontStorageWall.scale.y = params.p_h  - (Number(params.p_r_p)/12) * params.p_w -0.1;
                frontStorageWall.position.y = (params.p_h  - (Number(params.p_r_p)/12) * params.p_w)/2;
              }
              // frontStorageWall.position.z = leng+params.p_u_t;
              frontStorageWall.position.z = (params.p_d/-2)+(parseInt(params.p_u_t)+0.06);
              frontStorageWall.visible = (params.p_u_c!=false)?true:false;

              let  fSWallLoader = new THREE.TextureLoader();
              const fSwallTexture = fSWallLoader.load(process.env.REACT_APP_BASE_URL+Texture , function(storageTextue) {
                fSwallTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
                // frontStorageWall.material.envMap = storageTextue;
                // frontStorageWall.material.emissiveMap = storageTextue;
                // frontStorageWall.material.emissiveIntensity = 1;
                frontStorageWall.material.map = storageTextue;
                frontStorageWall.material.bumpMap = storageTextue;
                frontStorageWall.material.bumpScale = 0.02
                frontStorageWall.material.metalness = 1
                frontStorageWall.material.roughness = 0.5
                frontStorageWall.material.anisotropy = 10;
                frontStorageWall.material.map.wrapS = THREE.RepeatWrapping;
                frontStorageWall.material.map.wrapT = THREE.RepeatWrapping;
                frontStorageWall.material.map.offset.x = params.p_w;
                frontStorageWall.material.map.offset.y = params.p_w;
          
              if (params.p_v_w==true) {
                  frontStorageWall.material.map.repeat.set(2*Math.round((((params.p_w/2)+(params.p_w/2/3))*2)/2),1);
              } else {
                  frontStorageWall.material.map.repeat.set(1,Math.round((params.p_h/1.5)*2)); 
              }
              frontStorageWall.material.needsUpdate = true;

              let innerWall = C_B_Walls.getObjectByName("c_b_f_s_w_inner")
              innerWall.material.map = storageTextue.clone();
              innerWall.material.map.rotation = Math.PI
              innerWall.material.color.set(0xFFFFFF)
              innerWall.material.map.wrapS = THREE.RepeatWrapping;
              innerWall.material.map.wrapT = THREE.RepeatWrapping;
              innerWall.material.map.offset.x = params.p_w;
              innerWall.material.map.offset.y = params.p_w;
              innerWall.material.map.repeat.set(frontStorageWall.material.map.repeat.x,frontStorageWall.material.map.repeat.y);
              innerWall.material.map.needsUpdate = true 
              innerWall.material.needsUpdate = true 

            });
            C_B_Walls.add(frontStorageWall);
        }

        //Double front storage wall
        if (C_B_Walls.getObjectByName("c_b_f_s_w_inner")==undefined) {
          
          let frontStorageWallClone = C_B_Walls.getObjectByName("c_b_f_s_w");

          if(C_B_Walls.getObjectByName("c_b_f_s_w") != undefined){
          let doubleFrontStorageWallJSON = frontStorageWallClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleFrontStorageWallJSON = new THREE.Mesh(doubleFrontStorageWallJSON.geometry,leftDoubleMaterial);
          doubleFrontStorageWallJSON.name = "c_b_f_s_w_inner"
          doubleFrontStorageWallJSON.visible = (params.is_translusant==true)? false : frontStorageWallClone.visible
          doubleFrontStorageWallJSON.scale.set(frontStorageWallClone.scale.x , frontStorageWallClone.scale.y , frontStorageWallClone.scale.z);
          doubleFrontStorageWallJSON.position.set(frontStorageWallClone.position.x , frontStorageWallClone.position.y , frontStorageWallClone.position.z-wallDistance);
          doubleFrontStorageWallJSON.rotation.set(frontStorageWallClone.rotation.x , frontStorageWallClone.rotation.y , frontStorageWallClone.rotation.z)
          
          C_B_Walls.add(doubleFrontStorageWallJSON);

          const_var.wallsForCut.c_b_f_s_w_inner = doubleFrontStorageWallJSON.clone();
          }
        }

        /* Left storage Walll */
        if (const_var.b_t_M_L.getObjectByName("c_b_l_s_w")!=undefined) {
            let leftStorageWall = const_var.b_t_M_L.getObjectByName("c_b_l_s_w").clone();
            
            let wallTexture = horizontalTexture;
            if (params.p_v_w==true){
                wallTexture = verticalTexture;
            } else {
                wallTexture = horizontalTexture;
            }
            let WallLoader = new THREE.TextureLoader();

            leftStorageWall.visible = (params.p_u_c==true)?true:false;
            leftStorageWall.scale.set(params.p_u_t,params.p_h,1)
            leftStorageWall.position.x = params.p_w /-2-0.04;
            leftStorageWall.position.z = (params.p_d/-2)+params.p_u_t/2;
            leftStorageWall.position.y = params.p_h/2; 
            // leftStorageWall.rotation.z = Math.PI

            if (params.singleSlope) {
              leftStorageWall.scale.y = params.p_h  - (Number(params.p_r_p)/12) * params.p_w -0.1;
              leftStorageWall.position.y = (params.p_h  - (Number(params.p_r_p)/12) * params.p_w)/2;
            }
    
            let  LSwallTexture = WallLoader.load(process.env.REACT_APP_BASE_URL+wallTexture, function(lStorageTexture) {
                LSwallTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
                leftStorageWall.material.map = lStorageTexture;
                leftStorageWall.material.bumpMap = lStorageTexture;
                leftStorageWall.material.bumpScale = 0.02
                leftStorageWall.material.metalness = 1
                leftStorageWall.material.roughness = 0.5
                leftStorageWall.material.anisotropy = 10;
                // leftStorageWall.material.envMap = lStorageTexture;
                // leftStorageWall.material.emissiveMap = lStorageTexture;
                // leftStorageWall.material.emissiveIntensity = 1;
                leftStorageWall.material.map.wrapS = THREE.RepeatWrapping;
                leftStorageWall.material.map.wrapT = THREE.RepeatWrapping;
                leftStorageWall.material.map.offset.x = params.p_w;
                leftStorageWall.material.map.offset.y = params.p_w;
                leftStorageWall.material.needsUpdate = true;

            if (params.p_v_w==true) {
                leftStorageWall.material.map.rotation = Math.PI
                leftStorageWall.material.map.repeat.set(((params.p_u_t/2)+(params.p_u_t/2/3))*2,1);
            } else {
                leftStorageWall.material.map.repeat.set(1,Math.round((params.p_h/1.5)*2));
            }
            
            let innerWall = C_B_Walls.getObjectByName("c_b_l_s_w_inner")
            innerWall.material.map = lStorageTexture.clone();
            innerWall.material.map.rotation = 0
            innerWall.material.color.set(0xFFFFFF)
            innerWall.material.map.wrapS = THREE.RepeatWrapping;
            innerWall.material.map.wrapT = THREE.RepeatWrapping;
            innerWall.material.map.offset.x = params.p_w;
            innerWall.material.map.offset.y = params.p_w;
            innerWall.material.map.repeat.set(leftStorageWall.material.map.repeat.x,leftStorageWall.material.map.repeat.y);
            innerWall.material.map.needsUpdate = true 
            innerWall.material.needsUpdate = true 

        }
        )
        C_B_Walls.add(leftStorageWall);
        }

        //Double left storage wall
        if (C_B_Walls.getObjectByName("c_b_l_s_w_inner")==undefined) {
          
          let leftStorageWallClone = C_B_Walls.getObjectByName("c_b_l_s_w");

          if(C_B_Walls.getObjectByName("c_b_l_s_w") != undefined){
          let doubleLeftStorageWallJSON = leftStorageWallClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleLeftStorageWallJSON = new THREE.Mesh(doubleLeftStorageWallJSON.geometry,leftDoubleMaterial);
          doubleLeftStorageWallJSON.name = "c_b_l_s_w_inner"
          doubleLeftStorageWallJSON.visible = (params.is_translusant==true)? false : leftStorageWallClone.visible
          doubleLeftStorageWallJSON.scale.set(leftStorageWallClone.scale.x , leftStorageWallClone.scale.y , leftStorageWallClone.scale.z);
          doubleLeftStorageWallJSON.position.set(leftStorageWallClone.position.x+wallDistance , leftStorageWallClone.position.y , leftStorageWallClone.position.z);
          doubleLeftStorageWallJSON.rotation.set(leftStorageWallClone.rotation.x , leftStorageWallClone.rotation.y , leftStorageWallClone.rotation.z)
          
          C_B_Walls.add(doubleLeftStorageWallJSON);
          const_var.wallsForCut.c_b_l_s_w_inner = doubleLeftStorageWallJSON.clone();
          }
        }

        /* right storage Walll */
        if (const_var.b_t_M_L.getObjectByName("c_b_r_s_w")!=undefined) {
            let rightStorageWall = const_var.b_t_M_L.getObjectByName("c_b_r_s_w").clone();
            
            let wallTexture = horizontalTexture;
            if (params.p_v_w==true){
                wallTexture = verticalTexture;
            } else {
                wallTexture = horizontalTexture;
            }
             let wH = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w];
             let wP =  params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
             rightStorageWall.visible = (params.p_u_c!=false)?true:false;
             rightStorageWall.scale.set(params.p_u_t,params.p_h,1)
             rightStorageWall.scale.y = params.p_h - 0.15;
             rightStorageWall.position.x =(params.singleSlope)? params.p_w /2-0.1+0.04:params.p_w /2+0.04;
             rightStorageWall.position.z = (params.p_d/-2)+params.p_u_t/2;
             rightStorageWall.position.y = params.p_h/2; 
             rightStorageWall.rotation.z = Math.PI;
             if(params.canopy){
              rightStorageWall.scale.y = params.p_h+((roofMiddleHeight[params.p_r_p][params.p_w])*2)
              rightStorageWall.position.y = (params.p_h+((roofMiddleHeight[params.p_r_p][params.p_w])*2))/2;
              
            }
             let WallLoader = new THREE.TextureLoader();
             let RSwallTexture = WallLoader.load(process.env.REACT_APP_BASE_URL+wallTexture, function(rStorageTexture) {
              RSwallTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
             rightStorageWall.material.map = rStorageTexture;
             rightStorageWall.material.bumpMap = rStorageTexture;
             rightStorageWall.material.bumpScale = 0.02
             rightStorageWall.material.metalness = 1
             rightStorageWall.material.roughness = 0.5
             rightStorageWall.material.anisotropy = 10;
            //  rightStorageWall.material.envMap = rStorageTexture;
            //  rightStorageWall.material.emissiveMap = rStorageTexture;
            //  rightStorageWall.material.emissiveIntensity = 1;
             rightStorageWall.material.map.wrapS = THREE.RepeatWrapping;
             rightStorageWall.material.map.wrapT = THREE.RepeatWrapping;
             rightStorageWall.material.map.offset.x = params.p_w;
             rightStorageWall.material.map.offset.y = params.p_w;
             rightStorageWall.material.needsUpdate = true;
            
              if (params.p_v_w==true) {
                rightStorageWall.material.map.rotation = Math.PI
                 rightStorageWall.material.map.repeat.set(((params.p_u_t/2)+(params.p_u_t/2/3))*2,1);
              } else { 
                 rightStorageWall.material.map.rotation = Math.PI
                 rightStorageWall.material.map.repeat.set(1,Math.round((params.p_h/1.5)*2));
              }
                          
            let innerWall = C_B_Walls.getObjectByName("c_b_r_s_w_inner")
            innerWall.material.map = rStorageTexture.clone();
            innerWall.material.map.rotation = 0
            innerWall.material.color.set(0xFFFFFF)
            innerWall.material.map.wrapS = THREE.RepeatWrapping;
            innerWall.material.map.wrapT = THREE.RepeatWrapping;
            innerWall.material.map.offset.x = params.p_w;
            innerWall.material.map.offset.y = params.p_w;
            innerWall.material.map.repeat.set(rightStorageWall.material.map.repeat.x,rightStorageWall.material.map.repeat.y);
            innerWall.material.map.needsUpdate = true 
            innerWall.material.needsUpdate = true;

            }
            )
            C_B_Walls.add(rightStorageWall);
        }

        //Double right storage wall
        if (C_B_Walls.getObjectByName("c_b_r_s_w_inner")==undefined) {
          
          let rightStorageWallClone = C_B_Walls.getObjectByName("c_b_r_s_w");

          if(C_B_Walls.getObjectByName("c_b_r_s_w") != undefined){
          let doubleRightStorageWallJSON = rightStorageWallClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleRightStorageWallJSON = new THREE.Mesh(doubleRightStorageWallJSON.geometry,leftDoubleMaterial);
          doubleRightStorageWallJSON.name = "c_b_r_s_w_inner"
          doubleRightStorageWallJSON.visible = (params.is_translusant==true)? false : rightStorageWallClone.visible
          doubleRightStorageWallJSON.scale.set(rightStorageWallClone.scale.x , rightStorageWallClone.scale.y , rightStorageWallClone.scale.z);
          doubleRightStorageWallJSON.position.set(rightStorageWallClone.position.x-wallDistance , rightStorageWallClone.position.y , rightStorageWallClone.position.z);
          doubleRightStorageWallJSON.rotation.set(rightStorageWallClone.rotation.x , rightStorageWallClone.rotation.y , rightStorageWallClone.rotation.z)
          
          C_B_Walls.add(doubleRightStorageWallJSON);

          const_var.wallsForCut.c_b_r_s_w_inner = doubleRightStorageWallJSON.clone();
          }
        }

      }

        if(params.cB_addStorage_check_left == true){        
        /*Center Building Left Storage Front Gable*/
        if (const_var.b_t_M_L.getObjectByName("CB_L_S_F_G")!=undefined) {
          if (params.p_v_w!=true){
            let CB_L_S_FrontGable = const_var.b_t_M_L.getObjectByName("CB_L_S_F_G").clone();
        
            let wallTexture = horizontalTexture;
            if (params.p_v_w==true){
              wallTexture = verticalTexture;
            } else {
              wallTexture = horizontalTexture;
            }

            
            if(params.p_v_w==true) {
              var cBLeftStorageFGableUVS = new Float32Array([
              -1.0, -1.0,
              0.0, -1.0,
              0, 0.0,
              ]);
              } else {
              var cBLeftStorageFGableUVS = new Float32Array([
                  0.0, 1.0,
                   0.0, 1.0,
                   1.0, 0.0,
                  -1.0, 0.0,
                   1.0, 0.0,
                  -1.0, 0.0,
              ]);
             }
            //  if(params.cB_addStorage_left <= params.p_w/2){
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

            CB_L_S_FrontGable.geometry.setIndex(new THREE.BufferAttribute( index, 1 ) )
            //  }else{
            //      var cBLeftStorageFGableVertices = new Float32Array([
            //       //left
            //       0, params.p_h, params.p_d/2+0.06,
            //       //right
            //       params.p_w/-2, params.p_h, params.p_d/2+0.06,
            //        //top
            //        0,params.p_h+roofMiddleHeight[params.p_r_p][params.p_w], params.p_d/2+0.06,
            //      ]);
            //  }
             CB_L_S_FrontGable.geometry.setAttribute("position", new THREE.BufferAttribute(cBLeftStorageFGableVertices, 3));
             CB_L_S_FrontGable.geometry.setAttribute( 'uv', new THREE.BufferAttribute( cBLeftStorageFGableUVS, 2 ) );
             CB_L_S_FrontGable.geometry.computeVertexNormals();

             CB_L_S_FrontGable.visible = (params.cB_addStorage_check_left!=false && params.p_f_w=="Open")?true:false;

             if(params.cB_addStorage_left <= params.p_w/2 || params.singleSlope == true || params.canopy == true){
             CB_L_S_FrontGable.position.set(-(params.p_w/2)+(params.cB_addStorage_left/2),params.p_h,params.p_d/2+0.06);
             CB_L_S_FrontGable.scale.set(params.cB_addStorage_left,(params.cB_addStorage_left*(params.p_r_p/12)) -0.1,1);
              if (params.singleSlope) {
                CB_L_S_FrontGable.position.set(-(params.p_w/2)+(params.cB_addStorage_left/2),params.p_h- (Number(params.p_r_p)/12) * params.p_w,params.p_d/2+0.06);
              }
             }else{
              CB_L_S_FrontGable.position.set(-(params.p_w/4),params.p_h,params.p_d/2+0.06);
              CB_L_S_FrontGable.scale.set(params.p_w/2,roofMiddleHeight[params.p_r_p][params.p_w],1);
              if (params.singleSlope) {
                CB_L_S_FrontGable.position.set(-(params.p_w/4),params.p_h- (Number(params.p_r_p)/12) * params.p_w,params.p_d/2+0.06);
              }
             }
             if(params.p_r_s=="1"){
             CB_L_S_FrontGable.position.y = params.p_h + 0.45;
             CB_L_S_FrontGable.scale.x = CB_L_S_FrontGable.scale.x -0.1
             CB_L_S_FrontGable.position.x = CB_L_S_FrontGable.position.x +0.05
             }
             let CB_L_S_FrontGableLoader = new THREE.TextureLoader();
             let CB_L_S_FrontGabletexture = CB_L_S_FrontGableLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture1) {
             CB_L_S_FrontGabletexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
             CB_L_S_FrontGable.material.map = texture1;
             CB_L_S_FrontGable.material.bumpMap = texture1;
             CB_L_S_FrontGable.material.bumpScale = 0.02
            //  CB_L_S_FrontGable.material.metalness = 1
            //  CB_L_S_FrontGable.material.roughness = 0.5
             CB_L_S_FrontGable.material.anisotropy = 10;
             CB_L_S_FrontGable.material.map.wrapS = THREE.RepeatWrapping;
             CB_L_S_FrontGable.material.map.wrapT = THREE.RepeatWrapping;     
             if (params.p_v_w==true) {
                if(params.cB_addStorage_left < params.p_w/2 || params.singleSlope == true || params.canopy == true){
                    // CB_L_S_FrontGable.material.map.rotation = Math.PI
                    // CB_L_S_FrontGable.material.map.repeat.set(Math.round((params.cB_addStorage_left/2)+(params.cB_addStorage_left/2/3)),1);
                    // CB_L_S_FrontGable.material.map.repeat.set((((params.cB_addStorage_left)/2)+((params.cB_addStorage_left)/2/3)).toFixed(0),1);
                    CB_L_S_FrontGable.material.map.repeat.set(Math.round(((params.cB_addStorage_left)/1.5)*2))
                        }else{
                            // CB_L_S_FrontGable.material.map.rotation = Math.PI
                            // CB_L_S_FrontGable.material.map.repeat.set((((params.cB_addStorage_left)/2)+((params.cB_addStorage_left)/2/3)).toFixed(0),1);
                            CB_L_S_FrontGable.material.map.repeat.set(Math.round(((params.p_w/2)/1.5)*2))
                        }
             } else {
             if (params.cB_addStorage_left < params.p_w/2 || params.singleSlope == true){
                // CB_L_S_FrontGable.material.map.repeat.set(1,((roofMiddleHeight[params.p_r_p][params.p_w]*2.5)/(10.75-(params.cB_addStorage_left*0.75)))*2);
                // if(params.singleSlope == true){
                CB_L_S_FrontGable.material.map.repeat.set(1,((params.cB_addStorage_left*(params.p_r_p/12))/1.5)*2);
                // }
             } else {
                CB_L_S_FrontGable.material.map.repeat.set(1,(roofMiddleHeight[params.p_r_p][params.p_w]/1.5)*2)
             }
            }

            CB_L_S_FrontGable.material.needsUpdate = true;
                                      
            let innerWall = C_B_Walls.getObjectByName("CB_L_S_F_G_inner")
            innerWall.material.map = texture1.clone();
            innerWall.material.map.rotation = 0
            innerWall.material.color.set(0xFFFFFF)
            innerWall.material.map.wrapS = THREE.RepeatWrapping;
            innerWall.material.map.wrapT = THREE.RepeatWrapping;
            innerWall.material.map.offset.x = params.p_w;
            innerWall.material.map.offset.y = params.p_w;
            innerWall.material.map.repeat.set(CB_L_S_FrontGable.material.map.repeat.x,CB_L_S_FrontGable.material.map.repeat.y);
            innerWall.material.map.needsUpdate = true 
            innerWall.material.needsUpdate = true;

            })
        C_B_Walls.add(CB_L_S_FrontGable);
          }
        }

        //Double left storage front gable
        if (C_B_Walls.getObjectByName("CB_L_S_F_G_inner")==undefined) {
          
          let CB_L_S_FrontGableClone = C_B_Walls.getObjectByName("CB_L_S_F_G");

          if(C_B_Walls.getObjectByName("CB_L_S_F_G") != undefined){
          let doubleCB_L_S_FrontGable = CB_L_S_FrontGableClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleCB_L_S_FrontGable = new THREE.Mesh(doubleCB_L_S_FrontGable.geometry,leftDoubleMaterial);
          doubleCB_L_S_FrontGable.name = "CB_L_S_F_G_inner"
          doubleCB_L_S_FrontGable.visible = (params.is_translusant==true)? false : CB_L_S_FrontGableClone.visible
          doubleCB_L_S_FrontGable.scale.set(CB_L_S_FrontGableClone.scale.x , CB_L_S_FrontGableClone.scale.y , CB_L_S_FrontGableClone.scale.z);
          doubleCB_L_S_FrontGable.position.set(CB_L_S_FrontGableClone.position.x , CB_L_S_FrontGableClone.position.y , CB_L_S_FrontGableClone.position.z-wallDistance);
          doubleCB_L_S_FrontGable.rotation.set(CB_L_S_FrontGableClone.rotation.x , CB_L_S_FrontGableClone.rotation.y , CB_L_S_FrontGableClone.rotation.z)
          
          C_B_Walls.add(doubleCB_L_S_FrontGable);
          const_var.wallsForCut.CB_L_S_F_G_inner = doubleCB_L_S_FrontGable.clone();
          }
        }

        /*Center Building Left Storage  4 Vertices Front Gable*/
        if (const_var.b_t_M_L.getObjectByName("CB_L_S_4V_F_G")!=undefined) {
          if (params.p_v_w!=true){
            let cBLeftStorage4VFG = const_var.b_t_M_L.getObjectByName("CB_L_S_4V_F_G").clone();
        
            let wallTexture = horizontalTexture;
            if (params.p_v_w==true){
              wallTexture = verticalTexture;
            } else {
              wallTexture = horizontalTexture;
            }

            
              let x_verticesPos = 0;
              if(params.cB_addStorage_left > params.p_w/2)
              {
                  x_verticesPos = -(params.p_w/2 - params.cB_addStorage_left);
              }
              // let check = params.cB_addStorage_left.toString().split('')
              let quad_vertices =
              [
                  //top-right
                  x_verticesPos, roofMiddleHeight[params.p_r_p][params.p_w]-(params.cB_addStorage_left-(params.p_w/2))*(params.p_r_p/12), 0.005,       //4
                  x_verticesPos,  roofMiddleHeight[params.p_r_p][params.p_w]-(params.cB_addStorage_left-(params.p_w/2))*(params.p_r_p/12), -0.005,        //5

                  //bottom-right
                  x_verticesPos, -0, 0.005,        
                  x_verticesPos, -0, -0.005,  

                  //top-left
                  0,  roofMiddleHeight[params.p_r_p][params.p_w], -0.005,        
                  0,  roofMiddleHeight[params.p_r_p][params.p_w], 0.005,  

                  //bottom-left
                  0, -0,-0.005,        
                  0, -0, 0.005,        
              ];
              let vertices = new Float32Array( quad_vertices );
              if(params.p_v_w==true) {
                  var cBRightStorageFGableUVS = new Float32Array([
                     0,0.5,
                      0,0.5,
                      0.5,0.5,
                      0.5,0.5,
                      0,0,
                      0,0,
                      0.5,0,
                      0.5,0,
                  ]);
                  } else {
                  var cBRightStorageFGableUVS = new Float32Array([
                
                      0.5, 0.5-(params.cB_addStorage_left-(params.p_w/2))/params.p_w,
                      0.5, 0.5-(params.cB_addStorage_left-(params.p_w/2))/params.p_w,

                      0.5, 0,
                      0.5, 0,

                      0, 0.5, 
                      0, 0.5, 

                      0, 0,
                      0, 0,
        
                  ]);
                 }
              cBLeftStorage4VFG.geometry.setAttribute( 'uv', new THREE.BufferAttribute( cBRightStorageFGableUVS, 2 ) );
             
              cBLeftStorage4VFG.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
              cBLeftStorage4VFG.geometry.computeVertexNormals();
              cBLeftStorage4VFG.scale.set(1,1,1);
              cBLeftStorage4VFG.position.set(0,params.p_h,params.p_d/2+0.06);
              if(params.p_r_s=="1"){
                cBLeftStorage4VFG.position.y =params.p_h+0.45
                }
               cBLeftStorage4VFG.visible =(params.cB_addStorage_check_left!=false && params.singleSlope == false && params.canopy == false && params.p_f_w != "Close")?true:false;
               if (x_verticesPos === 0) cBLeftStorage4VFG.visible = false;
               let cBLeftStorage4VFGLoader = new THREE.TextureLoader();
               let cBLeftStorage4VFGTexture = cBLeftStorage4VFGLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture1) {
                cBLeftStorage4VFG.material.map = texture1;
                cBLeftStorage4VFG.material.bumpMap = texture1;
                cBLeftStorage4VFG.material.bumpScale = 0.02
                cBLeftStorage4VFG.material.metalness = 1
                cBLeftStorage4VFG.material.roughness = 0.5
                cBLeftStorage4VFG.material.anisotropy = 10;
                cBLeftStorage4VFG.material.map.wrapS = THREE.RepeatWrapping;
                cBLeftStorage4VFG.material.map.wrapT = THREE.RepeatWrapping;  
               if(params.p_v_w==true){
                cBLeftStorage4VFG.material.map.rotation = Math.PI/2
                cBLeftStorage4VFG.material.map.repeat.set(((params.cB_addStorage_left-10)+((params.cB_addStorage_left-10)*0.3))*2,1);
                // console.log(cBLeftStorage4VFG.material.map,"4gable")
                  } else {
                      if(params.cB_addStorage_left < params.p_w/2){
                          cBLeftStorage4VFG.material.map.repeat.set(1,(roofMiddleHeight[params.p_r_p][2*params.p_w]/(10.75-(params.cB_addStorage_left*0.75)))*2);
                      }else{
                          cBLeftStorage4VFG.material.map.repeat.set(1,((roofMiddleHeight[params.p_r_p][params.p_w]*2)/1.5)*2)
                      }
                }

                cBLeftStorage4VFG.material.needsUpdate = true;
                                                      
            let innerWall = C_B_Walls.getObjectByName("CB_L_S_4V_F_G_inner")
            innerWall.material.map = texture1.clone();
            innerWall.material.map.rotation = 0
            innerWall.material.color.set(0xFFFFFF)
            innerWall.material.map.wrapS = THREE.RepeatWrapping;
            innerWall.material.map.wrapT = THREE.RepeatWrapping;
            innerWall.material.map.offset.x = params.p_w;
            innerWall.material.map.offset.y = params.p_w;
            innerWall.material.map.repeat.set(cBLeftStorage4VFG.material.map.repeat.x,cBLeftStorage4VFG.material.map.repeat.y);
            innerWall.material.map.needsUpdate = true 
            innerWall.material.needsUpdate = true;

            }
            )
            C_B_Walls.add(cBLeftStorage4VFG);
          }
        }

        //Double left storage front gable
        if (C_B_Walls.getObjectByName("CB_L_S_4V_F_G_inner")==undefined) {
          if (params.p_v_w!=true){
          
          let CB_L_S_4V_FrontGableClone = C_B_Walls.getObjectByName("CB_L_S_4V_F_G");

          if(C_B_Walls.getObjectByName("CB_L_S_4V_F_G") != undefined){
          let doubleCB_L_S_4V_FrontGable = CB_L_S_4V_FrontGableClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleCB_L_S_4V_FrontGable = new THREE.Mesh(doubleCB_L_S_4V_FrontGable.geometry,leftDoubleMaterial);
          doubleCB_L_S_4V_FrontGable.name = "CB_L_S_4V_F_G_inner";
          doubleCB_L_S_4V_FrontGable.visible = (params.is_translusant==true)? false : CB_L_S_4V_FrontGableClone.visible
          doubleCB_L_S_4V_FrontGable.scale.set(CB_L_S_4V_FrontGableClone.scale.x , CB_L_S_4V_FrontGableClone.scale.y , CB_L_S_4V_FrontGableClone.scale.z);
          doubleCB_L_S_4V_FrontGable.position.set(CB_L_S_4V_FrontGableClone.position.x , CB_L_S_4V_FrontGableClone.position.y , CB_L_S_4V_FrontGableClone.position.z-wallDistance);
          doubleCB_L_S_4V_FrontGable.rotation.set(CB_L_S_4V_FrontGableClone.rotation.x , CB_L_S_4V_FrontGableClone.rotation.y , CB_L_S_4V_FrontGableClone.rotation.z)
          
          C_B_Walls.add(doubleCB_L_S_4V_FrontGable);
          const_var.wallsForCut.CB_L_S_4V_F_G_inner = doubleCB_L_S_4V_FrontGable.clone();
          }
        }
        }

        /*Center Building Left Storage Back Gable*/
        if (const_var.b_t_M_L.getObjectByName("CB_L_S_B_G")!=undefined) {
          if (params.p_v_w!=true){
            let CB_L_S_BackGable = const_var.b_t_M_L.getObjectByName("CB_L_S_B_G").clone();
        
            let wallTexture = horizontalTexture;
            if (params.p_v_w==true){
              wallTexture = verticalTexture;
            } else {
              wallTexture = horizontalTexture;
            }
     
              if(params.p_v_w==true) {
                var cBLeftStorageBGableUVS = new Float32Array([
                -1.0, -1.0,
                0.0, -1.0,
                0, 0.0,
                ]);
                } else {
                var cBLeftStorageBGableUVS = new Float32Array([
                    0.0, 1.0,
                   0.0, 1.0,
                   1.0, 0.0,
                  -1.0, 0.0,
                   1.0, 0.0,
                  -1.0, 0.0,
                ]);
               }
              //  if(params.cB_addStorage_left <= params.p_w/2){
               var cBLeftStorageBGableVertices = new Float32Array([
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

                CB_L_S_BackGable.geometry.setIndex(new THREE.BufferAttribute( index, 1 ) )
              //  }else{
              //      var cBLeftStorageBGableVertices = new Float32Array([
              //       //left
              //       0, params.p_h, params.p_d/-2-0.06,
              //       //right
              //       params.p_w/-2, params.p_h, params.p_d/-2-0.06,
              //        //top
              //        0,params.p_h+roofMiddleHeight[params.p_r_p][params.p_w], params.p_d/-2-0.06,
              //      ]);
              //  }
               CB_L_S_BackGable.geometry.setAttribute("position", new THREE.BufferAttribute(cBLeftStorageBGableVertices, 3));
               CB_L_S_BackGable.geometry.setAttribute( 'uv', new THREE.BufferAttribute( cBLeftStorageBGableUVS, 2 ) );
               CB_L_S_BackGable.geometry.computeVertexNormals();

               CB_L_S_BackGable.visible = (params.cB_addStorage_check_left!=false)?true:false;

               if(params.cB_addStorage_left <= params.p_w/2 || params.singleSlope == true || params.canopy == true){
                CB_L_S_BackGable.position.set(-(params.p_w/2)+(params.cB_addStorage_left/2),params.p_h,params.p_d/-2-0.06)
                CB_L_S_BackGable.scale.set(params.cB_addStorage_left,(params.cB_addStorage_left*(params.p_r_p/12)) -0.1,1);
                if (params.singleSlope) {
                  CB_L_S_BackGable.position.set(-(params.p_w/2)+(params.cB_addStorage_left/2),params.p_h - (Number(params.p_r_p)/12) * params.p_w,params.p_d/-2-0.06)
                }
                }else{
                 CB_L_S_BackGable.position.set(-(params.p_w/4),params.p_h,params.p_d/-2-0.06)
                 CB_L_S_BackGable.scale.set(params.p_w/2,roofMiddleHeight[params.p_r_p][params.p_w],1);
                 if (params.singleSlope) {
                  CB_L_S_BackGable.position.set(-(params.p_w/4),params.p_h - (Number(params.p_r_p)/12) * params.p_w/2,params.p_d/-2-0.06)
                 }
                }
               if(params.p_r_s=="1"){
               CB_L_S_BackGable.position.y = params.p_h + 0.45
               CB_L_S_BackGable.scale.x = CB_L_S_BackGable.scale.x - 0.1
               CB_L_S_BackGable.position.x = CB_L_S_BackGable.position.x + 0.05
               }
               let CB_L_S_BackGableLoader = new THREE.TextureLoader();
               let CB_L_S_BackGableTexture = CB_L_S_BackGableLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
               CB_L_S_BackGable.material.map = texture;
               CB_L_S_BackGable.material.bumpMap = texture;
               CB_L_S_BackGable.material.bumpScale = 0.02
               CB_L_S_BackGable.material.metalness = 1
               CB_L_S_BackGable.material.roughness = 0.5
               CB_L_S_BackGable.material.anisotropy = 10;
               CB_L_S_BackGable.material.map.wrapS = THREE.RepeatWrapping;
               CB_L_S_BackGable.material.map.wrapT = THREE.RepeatWrapping;    
               if(params.p_v_w==true){
                if(params.cB_addStorage_left < params.p_w/2){
                    CB_L_S_BackGable.material.map.repeat.set(params.cB_addStorage_left*2,1);
                    // CB_L_S_BackGable.material.map.repeat.set(Math.round((params.cB_addStorage_left/2)+(params.cB_addStorage_left/2/3)),1);
                    
                        }else{
                            CB_L_S_BackGable.material.map.repeat.set((params.p_w/2)*2,1);
                            // CB_L_S_BackGable.material.map.repeat.set(Math.round((((params.p_w/2)+(params.p_w/2/3))*2)/2),1);
                        }
               } else {
                   if(params.cB_addStorage_left < params.p_w/2 || params.singleSlope == true){
              //  CB_L_S_BackGable.material.map.repeat.set(1,((roofMiddleHeight[params.p_r_p][params.p_w]*2.5)/(10.75-(params.cB_addStorage_left*0.75)))*2);
              //  if(params.singleSlope == true){
                CB_L_S_BackGable.material.map.repeat.set(1,((params.cB_addStorage_left*(params.p_r_p/12))/1.5)*2);
                // }
                   }else{
                       CB_L_S_BackGable.material.map.repeat.set(1,(roofMiddleHeight[params.p_r_p][params.p_w]/1.5)*2)
                   }
             }

             let innerWall = C_B_Walls.getObjectByName("CB_L_S_B_G_inner")
             innerWall.material.map = texture.clone();
             innerWall.material.map.rotation = 0
             innerWall.material.color.set(0xFFFFFF)
             innerWall.material.map.wrapS = THREE.RepeatWrapping;
             innerWall.material.map.wrapT = THREE.RepeatWrapping;
             innerWall.material.map.offset.x = params.p_w;
             innerWall.material.map.offset.y = params.p_w;
             innerWall.material.map.repeat.set(CB_L_S_BackGable.material.map.repeat.x,CB_L_S_BackGable.material.map.repeat.y);
             innerWall.material.map.needsUpdate = true 
             innerWall.material.needsUpdate = true 
 
            })
            C_B_Walls.add(CB_L_S_BackGable);
          }
        }

        //Double left storage back gable
        if (C_B_Walls.getObjectByName("CB_L_S_B_G_inner")==undefined) {
          if (params.p_v_w!=true){
          let CB_L_S_FrontGableClone = C_B_Walls.getObjectByName("CB_L_S_B_G");

          if(C_B_Walls.getObjectByName("CB_L_S_B_G") != undefined){
          let doubleCB_L_S_BackGable = CB_L_S_FrontGableClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleCB_L_S_BackGable = new THREE.Mesh(doubleCB_L_S_BackGable.geometry,leftDoubleMaterial);
          doubleCB_L_S_BackGable.name = "CB_L_S_B_G_inner";
          doubleCB_L_S_BackGable.visible = (params.is_translusant==true)? false : CB_L_S_FrontGableClone.visible
          doubleCB_L_S_BackGable.scale.set(CB_L_S_FrontGableClone.scale.x , CB_L_S_FrontGableClone.scale.y , CB_L_S_FrontGableClone.scale.z);
          doubleCB_L_S_BackGable.position.set(CB_L_S_FrontGableClone.position.x , CB_L_S_FrontGableClone.position.y , CB_L_S_FrontGableClone.position.z+wallDistance);
          doubleCB_L_S_BackGable.rotation.set(CB_L_S_FrontGableClone.rotation.x , CB_L_S_FrontGableClone.rotation.y , CB_L_S_FrontGableClone.rotation.z)
          
          C_B_Walls.add(doubleCB_L_S_BackGable);
          const_var.wallsForCut.CB_L_S_B_G_inner = doubleCB_L_S_BackGable.clone();
          }
        }
        }

        /*Center Building Left Storage Front Wall*/
        if (const_var.b_t_M_L.getObjectByName("c_b_l_s_f_w")!=undefined) {
          if (params.p_v_w!=true){
            let CBLSFrontWall = const_var.b_t_M_L.getObjectByName("c_b_l_s_f_w").clone();
        
            let wallTexture = horizontalTexture;
            if (params.p_v_w==true){
              wallTexture = verticalTexture;
            } else {
              wallTexture = horizontalTexture;
            }


              
            let wH = params.p_h;
            let wP = params.p_h - wH/2;

            if (params.singleSlope) {
              wH = params.p_h  - (Number(params.p_r_p)/12) * params.p_w;
              wP = wH/2;
            }
            
            

            switch(params.p_f_w )
            {
                case "One_Fourth_Close":

                    if (params.singleSlope) {
                      wH = params.p_h-wH/4 - (Number(params.p_r_p)/12) * params.p_w;
                      wP = params.p_h - wH/2-((params.p_h - (Number(params.p_r_p)/12) * params.p_w)/4) - (Number(params.p_r_p)/12) * params.p_w;
                    } else {
                      wH = params.p_h-wH/4;
                      wP = params.p_h - wH/2-(params.p_h/4);
                    }
                    break;
                case "Half_Close":
                    if (params.singleSlope) {
                      wH = params.p_h-wH/2- (Number(params.p_r_p)/12) * params.p_w;
                      wP = params.p_h - wH/2-((params.p_h- (Number(params.p_r_p)/12) * params.p_w)/2) - (Number(params.p_r_p)/12) * params.p_w;
                    } else {
                      wH = params.p_h-wH/2;
                      wP = params.p_h - wH/2-(params.p_h/2);
                    }
                    break;                            
                case "Three_Fourth_Close":
                    if (params.singleSlope) {
                      wH = params.p_h-wH * 3/4 - (Number(params.p_r_p)/12) * params.p_w;
                      wP = params.p_h - wH/2-((params.p_h - (Number(params.p_r_p)/12) * params.p_w)*3/4) - (Number(params.p_r_p)/12) * params.p_w;
                    } else {
                      wH = params.p_h-wH * 3/4;
                      wP = params.p_h - wH/2-(params.p_h*3/4);
                    }
                    break;
                case "Extended Gable":
                    if (params.singleSlope) {
                      wH = params.p_h- 3 - (Number(params.p_r_p)/12) * params.p_w;
                      wP = params.p_h - wH/2-(3) - (Number(params.p_r_p)/12) * params.p_w;
                    } else {
                      wH = params.p_h- 3;
                      wP = params.p_h - wH/2-(3);
                    }
                    break;
                case "Gable":
                    if (params.singleSlope) {
                      wH = params.p_h - (Number(params.p_r_p)/12) * params.p_w;
                      wP = params.p_h - (wH/2) - (Number(params.p_r_p)/12) * params.p_w;
                    } else {
                      wH = params.p_h;
                      wP = params.p_h - (wH/2); 
                    }
                    break;
                case "Close":
                    wH =params.p_h- params.p_h;
                    wP = (params.p_h - wH/2);
                    if (params.singleSlope) wP = (params.p_h - wH/2)- (Number(params.p_r_p)/12) * params.p_w;
                    break;
                default:
                    // // let hdfp = params.p_h - (params.lean_p_h + Number(params.b_l_t_r_pF));
                    // let hdfp = params.p_h - (params.leanF_p_h + (parseInt(params.b_l_t_r_pF)/12) * params.leanF_p_w);
                    
                    // if(params.add_front_lean && hdfp > 0 && params.a_c_p_f == false )
                    // {    
                    //     wH = hdfp;
                    //     wP = params.p_h - wH/2;
                    //     CBLSFrontWall.visible = true; 
                    // }
                    // else
                    // {
                    // wH = Math.abs(params.p_f_w.replace(/\D/g, "")) * 3;
                    // wP = params.p_h - wH/2;                    
                    // }
                    break;
            }

            let hdfp = params.p_h - (params.leanF_p_h + (parseInt(params.b_l_t_r_pF)/12) * params.leanF_p_w);
            if(params.add_front_lean ==true && Object.values(const_var.wallArray["front"])[0] == params.p_f_w || params.add_front_lean ==true && params.p_f_w == "Open")
            {    
              // wH = (params.p_w == params.p_f_w )?hdfp+0.2:hdfp;
              // wP = params.p_h - wH/2;
              wH = params.p_h - hdfp;
              wP = wH/2;
              CBLSFrontWall.visible = true; 
            }

            CBLSFrontWall.visible = (params.cB_addStorage_check_left!=false && params.p_f_w != "Close")?true:false;
            CBLSFrontWall.position.x = -(params.p_w/2-params.cB_addStorage_left/2);
            CBLSFrontWall.position.z = params.p_d / 2+0.06;
            if(params.p_r_s=="1"){  
            CBLSFrontWall.position.y = wP+0.225;
            CBLSFrontWall.scale.set(params.cB_addStorage_left-0.2,wH+0.45,1);
        
            }else{
                CBLSFrontWall.position.y = wP;
                if (wH === 0) CBLSFrontWall.visible = false;
                else CBLSFrontWall.scale.set(params.cB_addStorage_left,wH,1);
            }                             
            let CBLSFrontWallLoader = new THREE.TextureLoader();
            let CBLSFrontWallTexture = CBLSFrontWallLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
              CBLSFrontWallTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
            //   CBLSFrontWall.material.envMap = texture;
            //   CBLSFrontWall.material.emissiveMap = texture;
            //   CBLSFrontWall.material.emissiveIntensity = 1;
              CBLSFrontWall.material.map = texture;
              CBLSFrontWall.material.bumpMap = texture;
              CBLSFrontWall.material.bumpScale = 0.02
              CBLSFrontWall.material.metalness = 1
              CBLSFrontWall.material.roughness = 0.5
              CBLSFrontWall.material.anisotropy = 10;
              CBLSFrontWall.material.map.wrapS = THREE.RepeatWrapping;
              CBLSFrontWall.material.map.wrapT = THREE.RepeatWrapping;
              CBLSFrontWall.material.map.offset.x = params.p_w;
              CBLSFrontWall.material.map.offset.y = params.p_w;
              CBLSFrontWall.material.needsUpdate = true;

              if(params.p_v_w==true)
              {
                //   CBLSFrontWall.material.map.repeat.set(Math.round((params.cB_addStorage_left/2)+(params.cB_addStorage_left/2/3)),1);
                // CBLSFrontWall.material.map.repeat.set(Math.round(params.cB_addStorage_left-(params.cB_addStorage_left*0.3)),1);
                // CBLSFrontWall.material.map.repeat.set((((params.cB_addStorage_left)/2)+((params.cB_addStorage_left)/2/3)).toFixed(0),1);
                CBLSFrontWall.material.map.repeat.set(Math.round(((params.cB_addStorage_left)/1.5)*2),1);
              }else
              {
                  CBLSFrontWall.material.map.repeat.set(1,Math.round((wH/1.5)*2)); 
              }

              let innerWall = C_B_Walls.getObjectByName("c_b_l_s_f_w_inner")
              innerWall.material.map = texture.clone();
              innerWall.material.map.rotation = 0
              innerWall.material.color.set(0xFFFFFF)
              innerWall.material.map.wrapS = THREE.RepeatWrapping;
              innerWall.material.map.wrapT = THREE.RepeatWrapping;
              innerWall.material.map.offset.x = params.p_w;
              innerWall.material.map.offset.y = params.p_w;
              innerWall.material.map.repeat.set(CBLSFrontWall.material.map.repeat.x,CBLSFrontWall.material.map.repeat.y);
              innerWall.material.map.needsUpdate = true 
              innerWall.material.needsUpdate = true 
  
            }
            )
            C_B_Walls.add(CBLSFrontWall);
          }
        }

        //Double left storage front wall
        if (C_B_Walls.getObjectByName("c_b_l_s_f_w_inner")==undefined) {
          if (params.p_v_w!=true){
          
          let CB_L_S_FrontWallClone = C_B_Walls.getObjectByName("c_b_l_s_f_w");

          if(C_B_Walls.getObjectByName("c_b_l_s_f_w") != undefined){
          let doubleCB_L_S_FrontWall = CB_L_S_FrontWallClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleCB_L_S_FrontWall = new THREE.Mesh(doubleCB_L_S_FrontWall.geometry,leftDoubleMaterial);
          doubleCB_L_S_FrontWall.name = "c_b_l_s_f_w_inner"
          doubleCB_L_S_FrontWall.visible = (params.is_translusant==true)? false : CB_L_S_FrontWallClone.visible
          doubleCB_L_S_FrontWall.scale.set(CB_L_S_FrontWallClone.scale.x , CB_L_S_FrontWallClone.scale.y , CB_L_S_FrontWallClone.scale.z);
          doubleCB_L_S_FrontWall.position.set(CB_L_S_FrontWallClone.position.x , CB_L_S_FrontWallClone.position.y , CB_L_S_FrontWallClone.position.z-wallDistance);
          doubleCB_L_S_FrontWall.rotation.set(CB_L_S_FrontWallClone.rotation.x , CB_L_S_FrontWallClone.rotation.y , CB_L_S_FrontWallClone.rotation.z)
          
          C_B_Walls.add(doubleCB_L_S_FrontWall);
          const_var.wallsForCut.c_b_l_s_f_w_inner = doubleCB_L_S_FrontWall.clone();
          }
        }
        }

        /*Center Building Left Storage Back Wall*/
        if (const_var.b_t_M_L.getObjectByName("c_b_l_s_b_w")!=undefined) {
          if (params.p_v_w!=true){
            let CBLSBackWall = const_var.b_t_M_L.getObjectByName("c_b_l_s_b_w").clone();
        
            let wallTexture = horizontalTexture;
            if (params.p_v_w==true){
              wallTexture = verticalTexture;
            } else {
              wallTexture = horizontalTexture;
            }

            let wH = params.p_h;
            let wP = params.p_h - wH/2;
            
            if (params.singleSlope) {
              wH = params.p_h  - (Number(params.p_r_p)/12) * params.p_w;
              wP = wH/2;
            }
            

            switch(params.p_b_w )
            {
                case "One_Fourth_Close":
                    if (params.singleSlope) {
                      wH = params.p_h-wH/4 - (Number(params.p_r_p)/12) * params.p_w;
                      wP = params.p_h - wH/2-((params.p_h - (Number(params.p_r_p)/12) * params.p_w)/4) - (Number(params.p_r_p)/12) * params.p_w;
                    } else {
                      wH = params.p_h-wH/4;
                      wP = params.p_h - wH/2-(params.p_h/4);
                    }
                    break;
                case "Half_Close":
                    if (params.singleSlope) {
                      wH = params.p_h-wH/2- (Number(params.p_r_p)/12) * params.p_w;
                      wP = params.p_h - wH/2-((params.p_h- (Number(params.p_r_p)/12) * params.p_w)/2) - (Number(params.p_r_p)/12) * params.p_w;
                    } else {
                      wH = params.p_h-wH/2;
                      wP = params.p_h - wH/2-(params.p_h/2);
                    }
                    break;                            
                case "Three_Fourth_Close":
                    if (params.singleSlope) {
                      wH = params.p_h-wH * 3/4 - (Number(params.p_r_p)/12) * params.p_w;
                      wP = params.p_h - wH/2-((params.p_h - (Number(params.p_r_p)/12) * params.p_w)*3/4) - (Number(params.p_r_p)/12) * params.p_w;
                    } else {
                      wH = params.p_h-wH * 3/4;
                      wP = params.p_h - wH/2-(params.p_h*3/4);
                    }
                    break;
                case "Extended Gable":
                    if (params.singleSlope) {
                      wH = params.p_h- 3 - (Number(params.p_r_p)/12) * params.p_w;
                      wP = params.p_h - wH/2-(3) - (Number(params.p_r_p)/12) * params.p_w;
                    } else {
                      wH =params.p_h- 3;
                      wP = params.p_h - wH/2-(3);
                    }
                    break;
                case "Gable":
                    if (params.singleSlope) {
                      wH = params.p_h - (Number(params.p_r_p)/12) * params.p_w;
                      wP = params.p_h - (wH/2) - (Number(params.p_r_p)/12) * params.p_w;
                    } else {
                      wH = (params.p_h);
                      wP = params.p_h - (wH/2); 
                    }
                    break;
                case "Close":
                    wH =params.p_h- params.p_h;
                    wP = (params.p_h - wH/2);
                    if (params.singleSlope) wP = (params.p_h - wH/2)- (Number(params.p_r_p)/12) * params.p_w;
                    break;
                default:
                    // // let hdfp = params.p_h - (params.lean_p_h + Number(params.b_l_t_r_pF));
                    // let hdfp = params.p_h - (params.leanF_p_h + (parseInt(params.b_l_t_r_pF)/12) * params.leanF_p_w);
                    
                    // if(params.add_front_lean && hdfp > 0 && params.a_c_p_f == false )
                    // {    
                    //     wH = hdfp;
                    //     wP = params.p_h - wH/2;
                    //     CBLSFrontWall.visible = true; 
                    // }
                    // else
                    // {
                    // wH = Math.abs(params.p_f_w.replace(/\D/g, "")) * 3;
                    // wP = params.p_h - wH/2;                    
                    // }
                    break;
            }

            let hdfp = params.p_h - (params.leanB_p_h + (parseInt(params.b_l_t_r_pB)/12) * params.leanB_p_w);
            if(params.add_back_lean && Object.values(const_var.wallArray["back"])[0] == params.p_b_w || params.add_back_lean ==true && params.p_b_w == "Open")
            {    
                wH = params.p_h - hdfp;
                wP = wH/2;
                CBLSBackWall.visible = true; 
            } 

            let CBLSBackWallLoader = new THREE.TextureLoader();
            CBLSBackWall.position.x = -(params.p_w/2-params.cB_addStorage_left/2);
            CBLSBackWall.position.z = params.p_d / -2-0.06; 
            if(params.p_r_s=="1"){  
            CBLSBackWall.position.y = wP+0.225;    
            CBLSBackWall.scale.set(params.cB_addStorage_left - 0.2,wH+0.45,1);    
            if (params.singleSlope) {
              CBLSBackWall.position.y = wP+0.225 - (Number(params.p_r_p)/12) * params.p_w/2;    
              CBLSBackWall.scale.set(params.cB_addStorage_left - 0.2,wH+0.45- (Number(params.p_r_p)/12) * params.p_w,1);                
            }
            }else{
                CBLSBackWall.position.y = wP;    
                if (wH === 0) CBLSBackWall.visible = false;
                else CBLSBackWall.scale.set(params.cB_addStorage_left,wH,1); 
                // if (params.singleSlope) {
                //   CBLSBackWall.position.y = wP - f_S_LeanLegScale[params.p_r_p][params.p_w]/2;    
                //   CBLSBackWall.scale.set(params.cB_addStorage_left,wH - f_S_LeanLegScale[params.p_r_p][params.p_w],1); 
                // }
            }
            CBLSBackWall.visible = (params.cB_addStorage_check_left!=false && params.p_b_w != "Close")?true:false;                     
            let CBLSBackWallTexture = CBLSBackWallLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
             
            // CBLSBackWall.material.envMap = texture;
            //   CBLSBackWall.material.emissiveMap = texture;
            //   CBLSBackWall.material.emissiveIntensity = 1;
              CBLSBackWall.material.map = texture;
              CBLSBackWall.material.bumpMap = texture;
              CBLSBackWall.material.bumpScale = 0.02
              CBLSBackWall.material.metalness = 1
              CBLSBackWall.material.roughness = 0.5
              CBLSBackWall.material.anisotropy = 10;
              CBLSBackWall.material.map.wrapS = THREE.RepeatWrapping;
              CBLSBackWall.material.map.wrapT = THREE.RepeatWrapping;
              CBLSBackWall.material.map.offset.x = params.p_w;
              CBLSBackWall.material.map.offset.y = params.p_w;
              CBLSBackWall.material.needsUpdate = true;

              if(params.p_v_w==true)
                  {
                      CBLSBackWall.material.map.repeat.set(params.cB_addStorage_left*2,1);
                      // CBLSBackWall.material.map.repeat.set(Math.round((params.cB_addStorage_left/2)+(params.cB_addStorage_left/2/3)),1);
                  }else
                  {
                      CBLSBackWall.material.map.repeat.set(1,Math.round((wH/1.5)*2)); 
                  }
                  
              let innerWall = C_B_Walls.getObjectByName("c_b_l_s_b_w_inner")
              innerWall.material.map = texture.clone();
              innerWall.material.map.rotation = 0
              innerWall.material.color.set(0xFFFFFF)
              innerWall.material.map.wrapS = THREE.RepeatWrapping;
              innerWall.material.map.wrapT = THREE.RepeatWrapping;
              innerWall.material.map.offset.x = params.p_w;
              innerWall.material.map.offset.y = params.p_w;
              innerWall.material.map.repeat.set(CBLSBackWall.material.map.repeat.x,CBLSBackWall.material.map.repeat.y);
              innerWall.material.map.needsUpdate = true 
              innerWall.material.needsUpdate = true 
  
                }
                )
                C_B_Walls.add(CBLSBackWall);
              }
          } 
          
        //Double left storage back wall
        if (C_B_Walls.getObjectByName("c_b_l_s_b_w_inner")==undefined) {
          if (params.p_v_w!=true){
          
          let CB_L_S_BackWallClone = C_B_Walls.getObjectByName("c_b_l_s_b_w");

          if(C_B_Walls.getObjectByName("c_b_l_s_b_w") != undefined){
          let doubleCB_L_S_BackWall = CB_L_S_BackWallClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleCB_L_S_BackWall = new THREE.Mesh(doubleCB_L_S_BackWall.geometry,leftDoubleMaterial);
          doubleCB_L_S_BackWall.name = "c_b_l_s_b_w_inner"
          doubleCB_L_S_BackWall.visible = (params.is_translusant==true)? false : CB_L_S_BackWallClone.visible
          doubleCB_L_S_BackWall.scale.set(CB_L_S_BackWallClone.scale.x , CB_L_S_BackWallClone.scale.y , CB_L_S_BackWallClone.scale.z);
          doubleCB_L_S_BackWall.position.set(CB_L_S_BackWallClone.position.x , CB_L_S_BackWallClone.position.y , CB_L_S_BackWallClone.position.z+wallDistance);
          doubleCB_L_S_BackWall.rotation.set(CB_L_S_BackWallClone.rotation.x , CB_L_S_BackWallClone.rotation.y , CB_L_S_BackWallClone.rotation.z)
          
          C_B_Walls.add(doubleCB_L_S_BackWall);
          const_var.wallsForCut.c_b_l_s_b_w_inner = doubleCB_L_S_BackWall.clone();
          }
        }
        }          

      /*Center Building Left Storage Right Wall*/
      if (const_var.b_t_M_L.getObjectByName("c_b_l_s_r_w")!=undefined) {
        let CBLSRightWall = const_var.b_t_M_L.getObjectByName("c_b_l_s_r_w").clone();
      
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }

          CBLSRightWall.visible = (params.cB_addStorage_check_left!=false)?true:false;
          CBLSRightWall.position.x = -(params.p_w/2-params.cB_addStorage_left);
          // console.log(CBLSRightWall.position.x,"anand1234")
          CBLSRightWall.position.z = 0;
          CBLSRightWall.position.z = (params.cB_addStorage_check_both_with_back==true)?(params.p_d/-2)+parseInt(params.p_u_t)+((params.p_d - parseInt(params.p_u_t))/2): 0;
          
          if(params.cB_addStorage_left <= params.p_w /2 || params.singleSlope == true || params.canopy == true){
             
              CBLSRightWall.scale.set(params.p_d,0,1);
              if(params.cB_addStorage_check_both_with_back==true)
              {
                CBLSRightWall.scale.set(params.p_d - parseInt(params.p_u_t),0,1);
              }
              if (params.p_r_s=="1"){
              CBLSRightWall.scale.y = params.p_h+(params.cB_addStorage_left*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2)))+0.4;
              CBLSRightWall.position.y = ((params.p_h+(params.cB_addStorage_left*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2))))/2)+0.2;

                if (params.singleSlope){
                  CBLSRightWall.scale.y = params.p_h+(params.cB_addStorage_left*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2)))+0.4 - ((Number(params.p_r_p)/12) * params.p_w);
                  CBLSRightWall.position.y = ((params.p_h+(params.cB_addStorage_left*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2))))/2)+0.2 - ((Number(params.p_r_p)/12) * params.p_w)/2;
                }
              }else{
                CBLSRightWall.scale.y = params.p_h+(params.cB_addStorage_left*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2)));
                CBLSRightWall.position.y = ((params.p_h+(params.cB_addStorage_left*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2))))/2);

                if (params.singleSlope) {
                  CBLSRightWall.scale.y = params.p_h+(params.cB_addStorage_left*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2))) - ((Number(params.p_r_p)/12) * params.p_w);
                  CBLSRightWall.position.y = ((params.p_h+(params.cB_addStorage_left*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2))))/2) - ((Number(params.p_r_p)/12) * params.p_w)/2;
                }
              } 
          } else {
              CBLSRightWall.scale.set(params.p_d,0,1);
              if (params.p_r_s=="1"){
              CBLSRightWall.scale.y = (params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_left-(params.p_w/2))*(params.p_r_p/12))+0.4;
              CBLSRightWall.position.y = (((params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_left-(params.p_w/2))*(params.p_r_p/12)))/2)+0.2; 
              }else{
                CBLSRightWall.scale.y = (params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_left-(params.p_w/2))*(params.p_r_p/12));
                CBLSRightWall.position.y = (((params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_left-(params.p_w/2))*(params.p_r_p/12)))/2); 
              }
          }

          if (params.singleSlope) {
            CBLSRightWall.scale.y = params.p_h - (Number(params.p_r_p)/12) * (params.p_w - params.cB_addStorage_left) - 0.1;
            CBLSRightWall.position.y = (params.p_h - (Number(params.p_r_p)/12) * (params.p_w - params.cB_addStorage_left))/2;          
          }

          let CBLSRightWallLoader = new THREE.TextureLoader();
          let CBLSRightWallTexture = CBLSRightWallLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
        //   CBLSRightWall.material.envMap = texture;
        //   CBLSRightWall.material.emissiveMap = texture;
        //   CBLSRightWall.material.emissiveIntensity = 1;
          CBLSRightWall.material.map = texture;
          CBLSRightWall.material.bumpMap = texture;
          CBLSRightWall.material.bumpScale = 0.02
          CBLSRightWall.material.metalness = 1
          CBLSRightWall.material.roughness = 0.5
          CBLSRightWall.material.anisotropy = 10;
          CBLSRightWall.material.map.wrapS = THREE.RepeatWrapping;
          CBLSRightWall.material.map.wrapT = THREE.RepeatWrapping;
          CBLSRightWall.material.map.offset.x = params.p_w;
          CBLSRightWall.material.map.offset.y = params.p_w;
          CBLSRightWall.material.needsUpdate = true;

          if(params.p_v_w==true) {
              CBLSRightWall.material.map.repeat.set(((params.p_d/2)+(params.p_d/2/3))*2,1);
          } else  {
              CBLSRightWall.material.map.repeat.set(1,Math.round((CBLSRightWall.scale.y/1.5)*2));
          }
                            
          let innerWall = C_B_Walls.getObjectByName("c_b_l_s_r_w_inner")
          innerWall.material.map = texture.clone();
          innerWall.material.map.rotation = 0
          innerWall.material.color.set(0xFFFFFF)
          innerWall.material.map.wrapS = THREE.RepeatWrapping;
          innerWall.material.map.wrapT = THREE.RepeatWrapping;
          innerWall.material.map.offset.x = params.p_w;
          innerWall.material.map.offset.y = params.p_w;
          innerWall.material.map.repeat.set(CBLSRightWall.material.map.repeat.x,CBLSRightWall.material.map.repeat.y);
          innerWall.material.map.needsUpdate = true 
          innerWall.material.needsUpdate = true 

        })
        C_B_Walls.add(CBLSRightWall);
      }   

        //Double left storage right wall
        if (C_B_Walls.getObjectByName("c_b_l_s_r_w_inner")==undefined) {
          
          let CB_L_S_RightWallClone = C_B_Walls.getObjectByName("c_b_l_s_r_w");

          if(C_B_Walls.getObjectByName("c_b_l_s_r_w") != undefined){
          let doubleCB_L_S_RightWall = CB_L_S_RightWallClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleCB_L_S_RightWall = new THREE.Mesh(doubleCB_L_S_RightWall.geometry,leftDoubleMaterial);
          doubleCB_L_S_RightWall.name = "c_b_l_s_r_w_inner"
          doubleCB_L_S_RightWall.visible = (params.is_translusant==true)? false : CB_L_S_RightWallClone.visible
          doubleCB_L_S_RightWall.scale.set(CB_L_S_RightWallClone.scale.x , CB_L_S_RightWallClone.scale.y , CB_L_S_RightWallClone.scale.z);
          doubleCB_L_S_RightWall.position.set(CB_L_S_RightWallClone.position.x-wallDistance , CB_L_S_RightWallClone.position.y , CB_L_S_RightWallClone.position.z);
          doubleCB_L_S_RightWall.rotation.set(CB_L_S_RightWallClone.rotation.x , CB_L_S_RightWallClone.rotation.y , CB_L_S_RightWallClone.rotation.z)
          
          C_B_Walls.add(doubleCB_L_S_RightWall);
          const_var.wallsForCut.c_b_l_s_r_w_inner = doubleCB_L_S_RightWall.clone();
          }
        } 

      /*Center Building Left Storage  4 Vertices Back Gable*/
      if (const_var.b_t_M_L.getObjectByName("CB_L_S_4V_B_G")!=undefined) {
        if (params.p_v_w!=true){
        let cBLeftStorage4VBG = const_var.b_t_M_L.getObjectByName("CB_L_S_4V_B_G").clone();
      
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
   
          let x_verticesPos = 0;
          if(params.cB_addStorage_left > params.p_w/2)
          {
              x_verticesPos = -(params.p_w/2 - params.cB_addStorage_left);
          }
          // let anand = params.cB_addStorage_left.toString().split('')
          let quad_vertices =
          [
           //top-right
            x_verticesPos,  roofMiddleHeight[params.p_r_p][params.p_w]-(params.cB_addStorage_left-(params.p_w/2))*(params.p_r_p/12), 0.005,       //4
            x_verticesPos,  roofMiddleHeight[params.p_r_p][params.p_w]-(params.cB_addStorage_left-(params.p_w/2))*(params.p_r_p/12), -0.005,        //5

            //bottom-right
            x_verticesPos, -0, 0.005,        
            x_verticesPos, -0, -0.005,  

            //top-left
            0,  roofMiddleHeight[params.p_r_p][params.p_w], -0.005,        
            0,  roofMiddleHeight[params.p_r_p][params.p_w], 0.005,  

            //bottom-left
            0, -0,-0.005,        
            0, -0, 0.005,    
          ];
          let vertices = new Float32Array( quad_vertices );
          if(params.p_v_w==true) {
              var cBRightStorageBGableUVS = new Float32Array([
              // -1.0, -1.0,
              // 0.0, -1.0,
              // -1.0, 0.0,
              // 0.0, -1.0,
              -0., 0.0,
              -0.5, -0.5,
              -0.5, -0.5,
              -0, 0.0,
              ]);
              } else {
              var cBRightStorageBGableUVS = new Float32Array([
                  // 0.5-(params.cB_addStorage_left-(params.p_w/2))/params.p_w, 0.0,
                  // 0.3, 0.0,
                  // 0.0, 0.5,
                  // 0.0, 0.5-(params.cB_addStorage_left-(params.p_w/2))/params.p_w,

                    0.5, 0.5-(params.cB_addStorage_left-(params.p_w/2))/params.p_w,
                    0.5, 0.5-(params.cB_addStorage_left-(params.p_w/2))/params.p_w,

                    0.5, 0,
                    0.5, 0,

                    0, 0.5, 
                    0, 0.5, 

                    0, 0,
                    0, 0,
              ]);
             }
          cBLeftStorage4VBG.geometry.setAttribute( 'uv', new THREE.BufferAttribute( cBRightStorageBGableUVS, 2 ) );
          cBLeftStorage4VBG.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
          cBLeftStorage4VBG.geometry.computeVertexNormals();
          cBLeftStorage4VBG.scale.set(1,1,1);
          cBLeftStorage4VBG.position.set(0,params.p_h,params.p_d/-2-0.06);
          if(params.p_r_s=="1"){
            cBLeftStorage4VBG.position.y =params.p_h+0.45
            }
           cBLeftStorage4VBG.visible =(params.cB_addStorage_check_left!=false && params.singleSlope == false && params.canopy == false && params.p_b_w != "Close")?true:false;
           if (x_verticesPos === 0) cBLeftStorage4VBG.visible = false;
           let cBLeftStorage4VBGLoader = new THREE.TextureLoader();
           let cBLeftStorage4VBGTexture = cBLeftStorage4VBGLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture1) {
            cBLeftStorage4VBG.material.map = texture1;
            cBLeftStorage4VBG.material.bumpMap = texture1;
            cBLeftStorage4VBG.material.bumpScale = 0.02
            cBLeftStorage4VBG.material.metalness = 1
            cBLeftStorage4VBG.material.roughness = 0.5
            cBLeftStorage4VBG.material.anisotropy = 10;
            cBLeftStorage4VBG.material.map.wrapS = THREE.RepeatWrapping;
            cBLeftStorage4VBG.material.map.wrapT = THREE.RepeatWrapping;
           if(params.p_v_w==true){
              // cBLeftStorage4VBG.material.map.repeat.set(((params.cB_addStorage_left-10)+((params.cB_addStorage_left-10)*0.3))*2,1);
              cBLeftStorage4VBG.material.map.repeat.set((params.cB_addStorage_left-(params.p_w/2))*2,1);
              // cBLeftStorage4VBG.material.map.repeat.set(Math.round((((params.cB_addStorage_left-(params.p_w/2))/2)+((params.cB_addStorage_left-(params.p_w/2))/2/3))*2),1);

              } else {
                  if(params.cB_addStorage_left < params.p_w/2){
                      cBLeftStorage4VBG.material.map.repeat.set(1,(roofMiddleHeight[params.p_r_p][2*params.p_w]/(10.75-(params.cB_addStorage_left*0.75)))*2);
                  }else{
                      cBLeftStorage4VBG.material.map.repeat.set(1,((roofMiddleHeight[params.p_r_p][params.p_w]*2)/1.5)*2)
                  }
            }

            cBLeftStorage4VBG.material.needsUpdate = true;
                                        
          let innerWall = C_B_Walls.getObjectByName("CB_L_S_4V_B_G_inner")
          innerWall.material.map = texture1.clone();
          innerWall.material.map.rotation = 0
          innerWall.material.color.set(0xFFFFFF)
          innerWall.material.map.wrapS = THREE.RepeatWrapping;
          innerWall.material.map.wrapT = THREE.RepeatWrapping;
          innerWall.material.map.offset.x = params.p_w;
          innerWall.material.map.offset.y = params.p_w;
          innerWall.material.map.repeat.set(cBLeftStorage4VBG.material.map.repeat.x,cBLeftStorage4VBG.material.map.repeat.y);
          innerWall.material.map.needsUpdate = true 
          innerWall.material.needsUpdate = true;

        } )
        C_B_Walls.add(cBLeftStorage4VBG);
      }
      }

        //Double center building left storage 4 vertices back gable
        if (C_B_Walls.getObjectByName("CB_L_S_4V_B_G_inner")==undefined) {
          if (params.p_v_w!=true){
          
          let CB_L_S_4V_BackGableClone = C_B_Walls.getObjectByName("CB_L_S_4V_B_G");

          if(C_B_Walls.getObjectByName("CB_L_S_4V_B_G") != undefined){
          let doubleCB_L_S_4V_BackGable = CB_L_S_4V_BackGableClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleCB_L_S_4V_BackGable = new THREE.Mesh(doubleCB_L_S_4V_BackGable.geometry,leftDoubleMaterial);
          doubleCB_L_S_4V_BackGable.name = "CB_L_S_4V_B_G_inner";
          doubleCB_L_S_4V_BackGable.visible = (params.is_translusant==true)? false : CB_L_S_4V_BackGableClone.visible
          doubleCB_L_S_4V_BackGable.scale.set(CB_L_S_4V_BackGableClone.scale.x , CB_L_S_4V_BackGableClone.scale.y , CB_L_S_4V_BackGableClone.scale.z);
          doubleCB_L_S_4V_BackGable.position.set(CB_L_S_4V_BackGableClone.position.x , CB_L_S_4V_BackGableClone.position.y , CB_L_S_4V_BackGableClone.position.z+wallDistance);
          doubleCB_L_S_4V_BackGable.rotation.set(CB_L_S_4V_BackGableClone.rotation.x , CB_L_S_4V_BackGableClone.rotation.y , CB_L_S_4V_BackGableClone.rotation.z)
          
          C_B_Walls.add(doubleCB_L_S_4V_BackGable);
          const_var.wallsForCut.CB_L_S_4V_B_G_inner = doubleCB_L_S_4V_BackGable.clone();
          }
        }
        }


      // Left Storage Front Wall According Vertical Texture
      if (const_var.b_t_M_L.getObjectByName("L_S_F_W_VT")==undefined) {
        if (params.p_v_w==true){
        let L_S_F_W_VT = const_var.b_t_M_L.getObjectByName("CB_L_S_4V_F_G").clone();
    
        let lowerLength = 0
        if (params.p_v_w==true && params.p_r_s == "1"){
          lowerLength = 0.3
        }

        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }

        
          let x_verticesPos = 0;
          if(params.cB_addStorage_left > params.p_w/2)
          {
              x_verticesPos = -(params.p_w/2 - params.cB_addStorage_left);
          }
          // let check = params.cB_addStorage_left.toString().split('')
          let quad_vertices =
          [
            0,  roofMiddleHeight[params.p_r_p][params.p_w], 0.005,  
            0,  roofMiddleHeight[params.p_r_p][params.p_w], -0.005, 
            0, -params.p_h-lowerLength, 0.005,      
            0, -params.p_h-lowerLength, -0.005,  
            -x_verticesPos,  roofMiddleHeight[params.p_r_p][params.p_w]-(params.cB_addStorage_left-(params.p_w/2))*(params.p_r_p/12), -0.005,       
            -x_verticesPos,  roofMiddleHeight[params.p_r_p][params.p_w]-(params.cB_addStorage_left-(params.p_w/2))*(params.p_r_p/12), 0.005,     
            -x_verticesPos, -params.p_h-lowerLength,-0.005,        
            -x_verticesPos, -params.p_h-lowerLength, 0.005,  
          ];

          let index = new Uint32Array([
            0,2,1,
            2,3,1,
            4,6,5,
            6,7,5,
            4,5,1,      
            5,0,1,      
            7,6,2,        
            6,3,2,      
            5,7,0,      
            7,2,0,      
            1,3,4,      
            3,6,4       
          ]);

          let vertices = new Float32Array( quad_vertices );
          if(params.p_v_w==true) {
              var cBRightStorageFGableUVS = new Float32Array([
              0,0.5,
              0,0.5,
              0.5,0.5,
              0.5,0.5,
              0,0,
              0,0,
              0.5,0,
              0.5,0,
              ]);
              } else {
              var cBRightStorageFGableUVS = new Float32Array([
            
                  0.5-(params.cB_addStorage_left-(params.p_w/2))/params.p_w, 0.0,
                  0.3, 0.0,
                  0.0, 0.5,
                  0.0, 0.5-(params.cB_addStorage_left-(params.p_w/2))/params.p_w,
              ]);
             }

          L_S_F_W_VT.geometry.setIndex( new THREE.BufferAttribute( index, 1 ) );
          L_S_F_W_VT.geometry.setAttribute( 'uv', new THREE.BufferAttribute( cBRightStorageFGableUVS, 2 ) );
         
          L_S_F_W_VT.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
          delete L_S_F_W_VT.geometry.attributes.normal;
          L_S_F_W_VT.geometry.computeVertexNormals();
          L_S_F_W_VT.name = "L_S_F_W_VT"
          L_S_F_W_VT.scale.set(1,1,1);
          L_S_F_W_VT.rotation.y = Math.PI
          L_S_F_W_VT.position.set(0,params.p_h,params.p_d/2+0.065);
          if(params.p_r_s=="1"){
            L_S_F_W_VT.position.y =params.p_h+0.3
            }
           L_S_F_W_VT.visible =(params.cB_addStorage_check_left!=false && x_verticesPos !== 0 && params.singleSlope == false && params.canopy == false && params.p_f_w != "Close")?true:false;
           let cBLeftStorage4VFGVLoader = new THREE.TextureLoader();
           let cBLeftStorage4VFGVTexture = cBLeftStorage4VFGVLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture1) {
            cBLeftStorage4VFGVTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
            L_S_F_W_VT.material.map = texture1;
            L_S_F_W_VT.material.bumpMap = texture1;
            L_S_F_W_VT.material.bumpScale = 0.02
            L_S_F_W_VT.material.metalness = 1
            L_S_F_W_VT.material.roughness = 0.5
            L_S_F_W_VT.material.anisotropy = 10;
            L_S_F_W_VT.material.map.wrapS = THREE.RepeatWrapping;
            L_S_F_W_VT.material.map.wrapT = THREE.RepeatWrapping;     
           if(params.p_v_w==true){
            L_S_F_W_VT.material.map.rotation = Math.PI/2
            let n = Math.round(((params.cB_addStorage_left-(params.p_w/2))+((params.cB_addStorage_left-(params.p_w/2))*0.3))*2)
            L_S_F_W_VT.material.map.repeat.set(2* Math.floor(n/2) + oddEven,1);
              } else {
                  if(params.cB_addStorage_left < params.p_w/2){
                      L_S_F_W_VT.material.map.repeat.set(1,(roofMiddleHeight[params.p_r_p][2*params.p_w]/(10.75-(params.cB_addStorage_left*0.75)))*2);
                  }else{
                      L_S_F_W_VT.material.map.repeat.set(1,(roofMiddleHeight[params.p_r_p][2*params.p_w]/1.5)*2)
                  }
            }

            L_S_F_W_VT.material.needsUpdate = true;
                                                    
          let innerWall = C_B_Walls.getObjectByName("L_S_F_W_VT_inner")
          innerWall.material.map = texture1.clone();
          innerWall.material.map.rotation = 0
          innerWall.material.color.set(0xFFFFFF)
          innerWall.material.map.wrapS = THREE.RepeatWrapping;
          innerWall.material.map.wrapT = THREE.RepeatWrapping;
          innerWall.material.map.offset.x = params.p_w;
          innerWall.material.map.offset.y = params.p_w;
          innerWall.material.map.rotation = Math.PI/2;
          innerWall.material.map.repeat.set(L_S_F_W_VT.material.map.repeat.x,L_S_F_W_VT.material.map.repeat.y);
          innerWall.material.map.needsUpdate = true 
          innerWall.material.needsUpdate = true;

        }
        )

        C_B_Walls.add(L_S_F_W_VT);
        const_var.wallsForCut.L_S_F_W_VT = L_S_F_W_VT.clone();
      }
  }

  //Double Left Storage Front Wall According Vertical Texture
  if (C_B_Walls.getObjectByName("L_S_F_W_VT_inner")==undefined) {
        
        let L_S_F_W_VT_Clone = C_B_Walls.getObjectByName("L_S_F_W_VT");
        if(C_B_Walls.getObjectByName("L_S_F_W_VT") != undefined){
        let double_L_S_F_W_VT = L_S_F_W_VT_Clone.clone();
        
        let L_S_F_W_VT_Material= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
        double_L_S_F_W_VT = new THREE.Mesh(double_L_S_F_W_VT.geometry,L_S_F_W_VT_Material);
        double_L_S_F_W_VT.name = "L_S_F_W_VT_inner";
        double_L_S_F_W_VT.visible = (params.is_translusant==true)? false : L_S_F_W_VT_Clone.visible
        double_L_S_F_W_VT.scale.set(L_S_F_W_VT_Clone.scale.x , L_S_F_W_VT_Clone.scale.y , L_S_F_W_VT_Clone.scale.z);
        double_L_S_F_W_VT.position.set(L_S_F_W_VT_Clone.position.x , L_S_F_W_VT_Clone.position.y , L_S_F_W_VT_Clone.position.z-0.2);
        double_L_S_F_W_VT.rotation.set(L_S_F_W_VT_Clone.rotation.x , L_S_F_W_VT_Clone.rotation.y , L_S_F_W_VT_Clone.rotation.z)
        
        C_B_Walls.add(double_L_S_F_W_VT);
        const_var.wallsForCut.L_S_F_W_VT_inner = double_L_S_F_W_VT.clone();
        }
  }

    // Left Storage Back Wall According Vertical Texture
    if (const_var.b_t_M_L.getObjectByName("L_S_B_W_VT")==undefined) {
        if (params.p_v_w==true){
        let L_S_B_W_VT = const_var.b_t_M_L.getObjectByName("CB_L_S_4V_F_G").clone();
    
        let lowerLength = 0
        if (params.p_v_w==true && params.p_r_s == "1"){
          lowerLength = 0.3
        }

        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }

        
          let x_verticesPos = 0;
          if(params.cB_addStorage_left > params.p_w/2)
          {
              x_verticesPos = -(params.p_w/2 - params.cB_addStorage_left);
          }
          // let check = params.cB_addStorage_left.toString().split('')
          let quad_vertices =
          [

            0,  roofMiddleHeight[params.p_r_p][params.p_w], 0.005,  
            0,  roofMiddleHeight[params.p_r_p][params.p_w], -0.005, 
            0, -params.p_h-lowerLength, 0.005,      
            0, -params.p_h-lowerLength, -0.005,  
            -x_verticesPos,  roofMiddleHeight[params.p_r_p][params.p_w]-(params.cB_addStorage_left-(params.p_w/2))*(params.p_r_p/12), -0.005,       
            -x_verticesPos,  roofMiddleHeight[params.p_r_p][params.p_w]-(params.cB_addStorage_left-(params.p_w/2))*(params.p_r_p/12), 0.005,     
            -x_verticesPos, -params.p_h-lowerLength,-0.005,        
            -x_verticesPos, -params.p_h-lowerLength, 0.005, 
          ];

          let vertices = new Float32Array( quad_vertices );

          let index = new Uint32Array([
            0,2,1,
            2,3,1,
            4,6,5,
            6,7,5,
            4,5,1,      
            5,0,1,      
            7,6,2,        
            6,3,2,      
            5,7,0,      
            7,2,0,      
            1,3,4,      
            3,6,4       
          ]);

          if(params.p_v_w==true) {
              var cBRightStorageFGableUVS = new Float32Array([
                0,0.5,
                0,0.5,
                0.5,0.5,
                0.5,0.5,
                0,0,
                0,0,
                0.5,0,
                0.5,0,
              ]);
              } else {
              var cBRightStorageFGableUVS = new Float32Array([
            
                  0.5-(params.cB_addStorage_left-(params.p_w/2))/params.p_w, 0.0,
                  0.3, 0.0,
                  0.0, 0.5,
                  0.0, 0.5-(params.cB_addStorage_left-(params.p_w/2))/params.p_w,
              ]);
             }

          L_S_B_W_VT.geometry.setIndex( new THREE.BufferAttribute( index, 1 ) );
          L_S_B_W_VT.geometry.setAttribute( 'uv', new THREE.BufferAttribute( cBRightStorageFGableUVS, 2 ) );
         
          L_S_B_W_VT.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
          delete L_S_B_W_VT.geometry.attributes.normal;
          L_S_B_W_VT.geometry.computeVertexNormals();
          
          L_S_B_W_VT.name = "L_S_B_W_VT"
          L_S_B_W_VT.scale.set(1,1,1);
          L_S_B_W_VT.rotation.y = Math.PI
          L_S_B_W_VT.position.set(0,params.p_h,params.p_d/-2-0.065);
          if(params.p_r_s=="1"){
            L_S_B_W_VT.position.y =params.p_h+0.3
            }
           L_S_B_W_VT.visible =(params.cB_addStorage_check_left!=false && x_verticesPos !== 0 && params.singleSlope == false && params.canopy == false && params.p_b_w != "Close")?true:false;
           let cBLeftStorage4VFGVLoader = new THREE.TextureLoader();
           let cBLeftStorage4VFGVTexture = cBLeftStorage4VFGVLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture1) {
            L_S_B_W_VT.material.map = texture1;
            L_S_B_W_VT.material.bumpMap = texture1;
            L_S_B_W_VT.material.bumpScale = 0.02
            L_S_B_W_VT.material.metalness = 1
            L_S_B_W_VT.material.roughness = 0.5
            L_S_B_W_VT.material.anisotropy = 10;
            L_S_B_W_VT.material.map.wrapS = THREE.RepeatWrapping;
            L_S_B_W_VT.material.map.wrapT = THREE.RepeatWrapping;     
           if(params.p_v_w==true){
            L_S_B_W_VT.material.map.rotation = Math.PI/2
            // L_S_B_W_VT.material.map.repeat.set(Math.round(((params.cB_addStorage_left-(params.p_w/2))+((params.cB_addStorage_left-(params.p_w/2))*0.3))*2),1);
            let n = Math.round(((params.cB_addStorage_left-(params.p_w/2))+((params.cB_addStorage_left-(params.p_w/2))*0.3))*2)
            L_S_B_W_VT.material.map.repeat.set(2* Math.floor(n/2) + oddEven,1);
            // console.log(L_S_B_W_VT.material.map,"4gable")
              } else {
                  if(params.cB_addStorage_left < params.p_w/2){
                      L_S_B_W_VT.material.map.repeat.set(1,(roofMiddleHeight[params.p_r_p][2*params.p_w]/(10.75-(params.cB_addStorage_left*0.75)))*2);
                  }else{
                      L_S_B_W_VT.material.map.repeat.set(1,(roofMiddleHeight[params.p_r_p][2*params.p_w]/1.5)*2)
                  }
            }
                                                    
            let innerWall = C_B_Walls.getObjectByName("L_S_B_W_VT_inner")
            innerWall.material.map = texture1.clone();
            innerWall.material.map.rotation = 0
            innerWall.material.color.set(0xFFFFFF)
            innerWall.material.map.wrapS = THREE.RepeatWrapping;
            innerWall.material.map.wrapT = THREE.RepeatWrapping;
            innerWall.material.map.offset.x = params.p_w;
            innerWall.material.map.offset.y = params.p_w;
            innerWall.material.map.rotation = Math.PI/2;
            innerWall.material.map.repeat.set(L_S_B_W_VT.material.map.repeat.x,L_S_B_W_VT.material.map.repeat.y);
            innerWall.material.map.needsUpdate = true 
            innerWall.material.needsUpdate = true 
  
        }
        )
        C_B_Walls.add(L_S_B_W_VT);
        const_var.wallsForCut.L_S_B_W_VT = L_S_B_W_VT.clone();
      }
  }

   //Double Left Storage Back Wall According Vertical Texture
   if (C_B_Walls.getObjectByName("L_S_B_W_VT_inner")==undefined) {
        
        let L_S_B_W_VT_Clone = C_B_Walls.getObjectByName("L_S_B_W_VT");
        if(C_B_Walls.getObjectByName("L_S_B_W_VT") != undefined){
        let double_L_S_B_W_VT = L_S_B_W_VT_Clone.clone();
        
        let L_S_B_W_VT_Material= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
        double_L_S_B_W_VT = new THREE.Mesh(double_L_S_B_W_VT.geometry,L_S_B_W_VT_Material);
        double_L_S_B_W_VT.name = "L_S_B_W_VT_inner";
        double_L_S_B_W_VT.visible = (params.is_translusant==true)? false : L_S_B_W_VT_Clone.visible
        double_L_S_B_W_VT.scale.set(L_S_B_W_VT_Clone.scale.x , L_S_B_W_VT_Clone.scale.y , L_S_B_W_VT_Clone.scale.z);
        double_L_S_B_W_VT.position.set(L_S_B_W_VT_Clone.position.x , L_S_B_W_VT_Clone.position.y , L_S_B_W_VT_Clone.position.z+0.2);
        double_L_S_B_W_VT.rotation.set(L_S_B_W_VT_Clone.rotation.x , L_S_B_W_VT_Clone.rotation.y , L_S_B_W_VT_Clone.rotation.z)

        C_B_Walls.add(double_L_S_B_W_VT);
        const_var.wallsForCut.L_S_B_W_VT_inner = double_L_S_B_W_VT.clone();
        }
  }     

    // Left Storage Front 2nd Wall According Vertical Texture
    if (const_var.b_t_M_L.getObjectByName("L_S_F_2W_VT")!=undefined) {
      if (params.p_v_w==true){
      let L_S_F_2W_VT = const_var.b_t_M_L.getObjectByName("L_S_F_2W_VT").clone();
  
      let lowerLength = 0
      if (params.p_v_w==true && params.p_r_s == "1"){
        lowerLength = 0.3
      }

      let wallTextureL = horizontalTexture;
      if (params.p_v_w==true){
        wallTextureL = verticalTexture;
      } else {
        wallTextureL = horizontalTexture;
      }

      
        let x_verticesPosL = 0;
        let y_verticesPosL = roofMiddleHeight[params.p_r_p][params.p_w];
        if(params.cB_addStorage_left < params.p_w/2 || params.singleSlope == true || params.canopy == true)
        {
            x_verticesPosL = -(params.p_w/2 - params.cB_addStorage_left);
            // y_verticesPosL = ((params.cB_addStorage_left*((params.p_r_p/10)-(params.p_r_p/100+0.02))));
            y_verticesPosL = params.cB_addStorage_left*(params.p_r_p/12);
            
        }

        let f_s_hight = 0;
        if (params.singleSlope == true) {
          f_s_hight = - (Number(params.p_r_p)/12) * params.p_w -0.1; 
          y_verticesPosL =  - (Number(params.p_r_p)/12) * (params.p_w - params.cB_addStorage_left) -0.1;
        }
        // let check = params.cB_addStorage_left.toString().split('')
        let quad_verticesL =
        [

            x_verticesPosL,  y_verticesPosL, 0.005,  
            x_verticesPosL,  y_verticesPosL, -0.005, 
            x_verticesPosL, -params.p_h-lowerLength, 0.005,      
            x_verticesPosL, -params.p_h-lowerLength, -0.005,     
            params.p_w/-2,  f_s_hight, -0.005,       
            params.p_w/-2,  f_s_hight, 0.005,        
            params.p_w/-2, -params.p_h-lowerLength,-0.005,        
            params.p_w/-2, -params.p_h-lowerLength, 0.005,  
      
        ];

          let index = new Uint32Array([
            0,2,1,
            2,3,1,
            4,6,5,
            6,7,5,
            4,5,1,      
            5,0,1,      
            7,6,2,        
            6,3,2,      
            5,7,0,      
            7,2,0,      
            1,3,4,      
            3,6,4       
          ]);

        let vertices = new Float32Array( quad_verticesL );
        if(params.p_v_w==true) {
            var cBRightStorageFGableUVSL = new Float32Array([
              0,0.5,
              0,0.5,
              0.5,0.5,
              0.5,0.5,
              0,0,
              0,0,
              0.5,0,
              0.5,0,
            ]);
            } else {
            var cBRightStorageFGableUVSL = new Float32Array([
          
                0.5, -0.0,
                0.5, 0.0,
                0.0, 0.5+( params.cB_addStorage_left*0.0005),
                0.0, 0.5+( params.cB_addStorage_left*0.013),
            ]);
           }
        
        L_S_F_2W_VT.geometry.setIndex( new THREE.BufferAttribute( index, 1 ) );
        L_S_F_2W_VT.geometry.setAttribute( 'uv', new THREE.BufferAttribute( cBRightStorageFGableUVSL, 2 ) );
       
        L_S_F_2W_VT.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
        delete L_S_F_2W_VT.geometry.attributes.normal;
        L_S_F_2W_VT.geometry.computeVertexNormals();
        L_S_F_2W_VT.name = "L_S_F_2W_VT"
        L_S_F_2W_VT.scale.set(1,1,1);
        // L_S_F_2W_VT.rotation.y = Math.PI
        L_S_F_2W_VT.position.set(0,params.p_h,params.p_d/2+0.065);
        if(params.p_r_s=="1"){
          L_S_F_2W_VT.position.y =params.p_h+0.3
          }
          if(params.p_v_w!=true){
            L_S_F_2W_VT.position.z = params.p_d/2+0.055
          }
         L_S_F_2W_VT.visible =(params.cB_addStorage_check_left!=false && params.p_f_w != "Close")?true:false;
         let cBLeftStorage4VFGVLLoader = new THREE.TextureLoader();
         let cBLeftStorage4VFGVLTexture = cBLeftStorage4VFGVLLoader.load( process.env.REACT_APP_BASE_URL+wallTextureL, function(texture1) {
          cBLeftStorage4VFGVLTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
          L_S_F_2W_VT.material.map = texture1;
          L_S_F_2W_VT.material.bumpMap = texture1;
          L_S_F_2W_VT.material.bumpScale = 0.02
          L_S_F_2W_VT.material.metalness = 1
          L_S_F_2W_VT.material.roughness = 0.5
          L_S_F_2W_VT.material.anisotropy = 10;
          L_S_F_2W_VT.material.map.wrapS = THREE.RepeatWrapping;
          L_S_F_2W_VT.material.map.wrapT = THREE.RepeatWrapping;      
         if(params.p_v_w==true){
          L_S_F_2W_VT.material.map.rotation = Math.PI/2
          if(params.cB_addStorage_left < params.p_w/2 || params.singleSlope == true || params.canopy == true)
          {
          L_S_F_2W_VT.material.map.repeat.set(Math.round(((params.cB_addStorage_left/2)+(params.cB_addStorage_left/2/3))*4),1);
          }else{
            L_S_F_2W_VT.material.map.repeat.set(Math.round((((params.p_w/2)+(params.p_w/2/3))*2)),1);
          }
          // console.log(L_S_F_2W_VT.material.map,"4gable")
            } else {
                if(params.cB_addStorage_left < params.p_w/2){
                    L_S_F_2W_VT.material.map.repeat.set(1,Math.round((params.p_h+roofMiddleHeight[params.p_r_p][params.p_w]+3)*2));
                }else{
                    L_S_F_2W_VT.material.map.repeat.set(1,Math.round((params.p_h+roofMiddleHeight[params.p_r_p][params.p_w]+3)*2))
                }
          }

          L_S_F_2W_VT.material.needsUpdate = true;
                                                              
          let innerWall = C_B_Walls.getObjectByName("L_S_F_2W_VT_inner")
          innerWall.material.map = texture1.clone();
          innerWall.material.map.rotation = 0
          innerWall.material.color.set(0xFFFFFF)
          innerWall.material.map.wrapS = THREE.RepeatWrapping;
          innerWall.material.map.wrapT = THREE.RepeatWrapping;
          innerWall.material.map.offset.x = params.p_w;
          innerWall.material.map.offset.y = params.p_w;
          innerWall.material.map.rotation = Math.PI/-2;
          innerWall.material.map.repeat.set(L_S_F_2W_VT.material.map.repeat.x,L_S_F_2W_VT.material.map.repeat.y);
          innerWall.material.map.needsUpdate = true 
          innerWall.material.needsUpdate = true;

      }
      )
      C_B_Walls.add(L_S_F_2W_VT);
      const_var.wallsForCut.L_S_F_2W_VT = L_S_F_2W_VT.clone();

    }
  }

    //Double Left Storage 2nd Front Wall According Vertical Texture
   if (C_B_Walls.getObjectByName("L_S_F_2W_VT_inner")==undefined) {
        
      let L_S_F_2W_VT_Clone = C_B_Walls.getObjectByName("L_S_F_2W_VT");
      if(C_B_Walls.getObjectByName("L_S_F_2W_VT") != undefined){
      let double_L_S_F_2W_VT = L_S_F_2W_VT_Clone.clone();
      
      let L_S_B_W_VT_Material= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
      double_L_S_F_2W_VT = new THREE.Mesh(double_L_S_F_2W_VT.geometry,L_S_B_W_VT_Material);
      double_L_S_F_2W_VT.name = "L_S_F_2W_VT_inner";
      double_L_S_F_2W_VT.visible = (params.is_translusant==true)? false : L_S_F_2W_VT_Clone.visible
      double_L_S_F_2W_VT.scale.set(L_S_F_2W_VT_Clone.scale.x , L_S_F_2W_VT_Clone.scale.y , L_S_F_2W_VT_Clone.scale.z);
      double_L_S_F_2W_VT.position.set(L_S_F_2W_VT_Clone.position.x , L_S_F_2W_VT_Clone.position.y , L_S_F_2W_VT_Clone.position.z-0.2);
      double_L_S_F_2W_VT.rotation.set(L_S_F_2W_VT_Clone.rotation.x , L_S_F_2W_VT_Clone.rotation.y , L_S_F_2W_VT_Clone.rotation.z)

      C_B_Walls.add(double_L_S_F_2W_VT);
      const_var.wallsForCut.L_S_F_2W_VT_inner = double_L_S_F_2W_VT.clone();
      }
  }  

    // Left Storage Back 2nd Wall According Vertical Texture
    if (const_var.b_t_M_L.getObjectByName("L_S_B_2W_VT")==undefined) {
      if (params.p_v_w==true){
      let L_S_B_2W_VT = const_var.b_t_M_L.getObjectByName("L_S_F_2W_VT").clone();
  
      let lowerLength = 0
      if (params.p_v_w==true && params.p_r_s == "1"){
        lowerLength = 0.3
      }
      let wallTextureL = horizontalTexture;
      if (params.p_v_w==true){
        wallTextureL = verticalTexture;
      } else {
        wallTextureL = horizontalTexture;
      }

      
        let x_verticesPosL = 0;
        let y_verticesPosL = roofMiddleHeight[params.p_r_p][params.p_w];
        if(params.cB_addStorage_left < params.p_w/2 || params.singleSlope == true || params.canopy == true)
        {
            x_verticesPosL = -(params.p_w/2 - params.cB_addStorage_left);
            // y_verticesPosL = ((params.cB_addStorage_left*((params.p_r_p/10)-(params.p_r_p/100+0.02))));
            y_verticesPosL = params.cB_addStorage_left*(params.p_r_p/12)
            
        }

        let f_s_hight = 0;
        if (params.singleSlope == true) {
          f_s_hight = - (Number(params.p_r_p)/12) * params.p_w - 0.1;
          y_verticesPosL = - (Number(params.p_r_p)/12) * (params.p_w - params.cB_addStorage_left) - 0.1;
        }


        // let check = params.cB_addStorage_left.toString().split('')
        let quad_verticesL =
        [

            x_verticesPosL,  y_verticesPosL, 0.005,  
            x_verticesPosL,  y_verticesPosL, -0.005, 
            x_verticesPosL, -params.p_h-lowerLength, 0.005,      
            x_verticesPosL, -params.p_h-lowerLength, -0.005,     
            params.p_w/-2,  f_s_hight , -0.005,       
            params.p_w/-2,  f_s_hight, 0.005,        
            params.p_w/-2, -params.p_h-lowerLength,-0.005,        
            params.p_w/-2, -params.p_h-lowerLength, 0.005,   
      
        ];


        let index = new Uint32Array([
          0,2,1,
          2,3,1,
          4,6,5,
          6,7,5,
          4,5,1,      
          5,0,1,      
          7,6,2,        
          6,3,2,      
          5,7,0,      
          7,2,0,      
          1,3,4,      
          3,6,4       
        ]);

        let vertices = new Float32Array( quad_verticesL );
        if(params.p_v_w==true) {
            var cBRightStorageFGableUVSL = new Float32Array([
              0,0.5,
              0,0.5,
              0.5,0.5,
              0.5,0.5,
              0,0,
              0,0,
              0.5,0,
              0.5,0,
            ]);
            } else {
            var cBRightStorageFGableUVSL = new Float32Array([
          
                0.5, -0.0,
                0.5, 0.0,
                0.0, 0.5+( params.cB_addStorage_left*0.0005),
                0.0, 0.5+( params.cB_addStorage_left*0.013),
            ]);
           }

        L_S_B_2W_VT.geometry.setIndex( new THREE.BufferAttribute( index, 1 ) );
        L_S_B_2W_VT.geometry.setAttribute( 'uv', new THREE.BufferAttribute( cBRightStorageFGableUVSL, 2 ) );
       
        L_S_B_2W_VT.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
        delete L_S_B_2W_VT.geometry.attributes.normal;
        L_S_B_2W_VT.geometry.computeVertexNormals();
        L_S_B_2W_VT.name = "L_S_B_2W_VT";
        L_S_B_2W_VT.scale.set(1,1,1);
        // L_S_B_2W_VT.rotation.y = Math.PI
        L_S_B_2W_VT.position.set(0,params.p_h,params.p_d/-2-0.065);
        if(params.p_r_s=="1"){
          L_S_B_2W_VT.position.y =params.p_h+0.3
          }
          if(params.p_v_w!=true){
            L_S_B_2W_VT.position.z = params.p_d/2+0.055
          }
         L_S_B_2W_VT.visible =(params.cB_addStorage_check_left!=false && params.p_b_w != "Close")?true:false;
         let cBLeftStorage4VFGVLLoader = new THREE.TextureLoader();
         let cBLeftStorage4VFGVLTexture = cBLeftStorage4VFGVLLoader.load( process.env.REACT_APP_BASE_URL+wallTextureL, function(texture1) {
          L_S_B_2W_VT.material.map = texture1;
          L_S_B_2W_VT.material.bumpMap = texture1;
          L_S_B_2W_VT.material.bumpScale = 0.02
          L_S_B_2W_VT.material.metalness = 1
          L_S_B_2W_VT.material.roughness = 0.5
          L_S_B_2W_VT.material.anisotropy = 10;
          L_S_B_2W_VT.material.map.wrapS = THREE.RepeatWrapping;
          L_S_B_2W_VT.material.map.wrapT = THREE.RepeatWrapping;      
         if(params.p_v_w==true){
          L_S_B_2W_VT.material.map.rotation = Math.PI/-2
          if(params.cB_addStorage_left < params.p_w/2 || params.singleSlope == true || params.canopy == true)
          {
          L_S_B_2W_VT.material.map.repeat.set(Math.round(((params.cB_addStorage_left/2)+(params.cB_addStorage_left/2/3))*4),1);
          }else{
            L_S_B_2W_VT.material.map.repeat.set(Math.round((((params.p_w/2)+(params.p_w/2/3))*2)),1);
          }
          // console.log(L_S_B_2W_VT.material.map,"4gable")
            } else {
                if(params.cB_addStorage_left < params.p_w/2){
                    L_S_B_2W_VT.material.map.repeat.set(1,Math.round((params.p_h+roofMiddleHeight[params.p_r_p][params.p_w]+3)*2));
                }else{
                    L_S_B_2W_VT.material.map.repeat.set(1,Math.round((params.p_h+roofMiddleHeight[params.p_r_p][params.p_w]+3)*2))
                }
          }

          L_S_B_2W_VT.material.needsUpdate = true;
                                                                        
          let innerWall = C_B_Walls.getObjectByName("L_S_B_2W_VT_inner")
          innerWall.material.map = texture1.clone();
          innerWall.material.map.rotation = 0
          innerWall.material.color.set(0xFFFFFF)
          innerWall.material.map.wrapS = THREE.RepeatWrapping;
          innerWall.material.map.wrapT = THREE.RepeatWrapping;
          innerWall.material.map.offset.x = params.p_w;
          innerWall.material.map.offset.y = params.p_w;
          innerWall.material.map.rotation = Math.PI/-2;
          innerWall.material.map.repeat.set(L_S_B_2W_VT.material.map.repeat.x,L_S_B_2W_VT.material.map.repeat.y);
          innerWall.material.map.needsUpdate = true 
          innerWall.material.needsUpdate = true;

      }
      )
      C_B_Walls.add(L_S_B_2W_VT);
      const_var.wallsForCut.L_S_B_2W_VT = L_S_B_2W_VT.clone();
    }
  }

    //Double Left Storage 2nd Back Wall According Vertical Texture
    if (C_B_Walls.getObjectByName("L_S_B_2W_VT_inner")==undefined) {
        
      let L_S_B_2W_VT_Clone = C_B_Walls.getObjectByName("L_S_B_2W_VT");
      if(C_B_Walls.getObjectByName("L_S_B_2W_VT") != undefined){
      let double_L_S_B_2W_VT = L_S_B_2W_VT_Clone.clone();
      
      let L_S_B_W_VT_Material= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
      double_L_S_B_2W_VT = new THREE.Mesh(double_L_S_B_2W_VT.geometry,L_S_B_W_VT_Material);
      double_L_S_B_2W_VT.name = "L_S_B_2W_VT_inner";
      double_L_S_B_2W_VT.visible = (params.is_translusant==true)? false : L_S_B_2W_VT_Clone.visible
      double_L_S_B_2W_VT.scale.set(L_S_B_2W_VT_Clone.scale.x , L_S_B_2W_VT_Clone.scale.y , L_S_B_2W_VT_Clone.scale.z);
      double_L_S_B_2W_VT.position.set(L_S_B_2W_VT_Clone.position.x , L_S_B_2W_VT_Clone.position.y , L_S_B_2W_VT_Clone.position.z+0.2);
      double_L_S_B_2W_VT.rotation.set(L_S_B_2W_VT_Clone.rotation.x , L_S_B_2W_VT_Clone.rotation.y , L_S_B_2W_VT_Clone.rotation.z)

      C_B_Walls.add(double_L_S_B_2W_VT);
      const_var.wallsForCut.L_S_B_2W_VT_inner = double_L_S_B_2W_VT.clone();
      }
  }        

  }


    if(params.cB_addStorage_check_right == true){ 
      /*Center Building Right Storage Front Gable*/
      if (const_var.b_t_M_L.getObjectByName("CB_R_S_F_G")!=undefined) {
        if (params.p_v_w!=true){
        let CB_R_S_FrontGable = const_var.b_t_M_L.getObjectByName("CB_R_S_F_G").clone();
      
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }

          if(params.p_v_w==true) {
            var cBRightStorageFGableUVS = new Float32Array([
            -1.0, -1.0,
            0.0, -1.0,
            0, 0.0,
            ]);
            } else {
            var cBRightStorageFGableUVS = new Float32Array([
                  0.0, 1.0,
                   0.0, 1.0,
                   1.0, 0.0,
                  -1.0, 0.0,
                   1.0, 0.0,
                  -1.0, 0.0,
            ]);
           }
          //  if(params.cB_addStorage_right <= params.p_w/2){
           var cBRightStorageFGableVertices = new Float32Array([
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

            CB_R_S_FrontGable.geometry.setIndex(new THREE.BufferAttribute( index, 1 ) )
            
          //  }else{
          //      var cBRightStorageFGableVertices = new Float32Array([
          //       //left
          //       0, params.p_h, params.p_d/2+0.06,
          //       //right
          //       params.p_w/2, params.p_h, params.p_d/2+0.06,
          //        //top
          //        0,params.p_h+roofMiddleHeight[params.p_r_p][params.p_w], params.p_d/2+0.06,
          //      ]);
          //  }
           CB_R_S_FrontGable.geometry.setAttribute("position", new THREE.BufferAttribute(cBRightStorageFGableVertices, 3));
           CB_R_S_FrontGable.geometry.setAttribute( 'uv', new THREE.BufferAttribute( cBRightStorageFGableUVS, 2 ) );
           CB_R_S_FrontGable.geometry.computeVertexNormals();
           CB_R_S_FrontGable.visible = (params.cB_addStorage_check_right!=false && params.singleSlope == false && params.canopy == false && params.p_f_w != "Close")?true:false;
           CB_R_S_FrontGable.rotation.y = Math.PI
           if(params.cB_addStorage_right <= params.p_w/2){
            CB_R_S_FrontGable.position.set((params.p_w/2)-(params.cB_addStorage_right/2),params.p_h,params.p_d/2+0.06)
            CB_R_S_FrontGable.scale.set(params.cB_addStorage_right,(params.cB_addStorage_right*(params.p_r_p/12)),1);
            }else{
             CB_R_S_FrontGable.position.set((params.p_w/4),params.p_h,params.p_d/2+0.06)
             CB_R_S_FrontGable.scale.set(params.p_w/2,roofMiddleHeight[params.p_r_p][params.p_w],1);
            }
           if(params.p_r_s=="1"){
            CB_R_S_FrontGable.position.y = params.p_h + 0.45;
            CB_R_S_FrontGable.scale.x = CB_R_S_FrontGable.scale.x - 0.1
            CB_R_S_FrontGable.position.x = CB_R_S_FrontGable.position.x - 0.05
           
            }
           let CB_R_S_FrontGableLoader = new THREE.TextureLoader();
           let CB_R_S_FrontGableTexture = CB_R_S_FrontGableLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
           CB_R_S_FrontGable.material.map = texture;
           CB_R_S_FrontGable.material.bumpMap = texture;
           CB_R_S_FrontGable.material.bumpScale = 0.02
           CB_R_S_FrontGable.material.metalness = 1
           CB_R_S_FrontGable.material.roughness = 0.5
           CB_R_S_FrontGable.material.anisotropy = 10;
           CB_R_S_FrontGable.material.map.wrapS = THREE.RepeatWrapping;
           CB_R_S_FrontGable.material.map.wrapT = THREE.RepeatWrapping; 
           if(params.p_v_w==true){
          
           if(params.cB_addStorage_right < params.p_w/2){
            CB_R_S_FrontGable.material.map.repeat.set(params.cB_addStorage_right*2,1);
                }else{
                    CB_R_S_FrontGable.material.map.repeat.set((params.p_w/2)*2,1);
                }
           } else {
               if(params.cB_addStorage_right < params.p_w/2){
           CB_R_S_FrontGable.material.map.repeat.set(1,((params.cB_addStorage_right*(params.p_r_p/12))/1.5)*2);
               }else{
                   CB_R_S_FrontGable.material.map.repeat.set(1,(roofMiddleHeight[params.p_r_p][params.p_w]/1.5)*2)
               }
         }

         CB_R_S_FrontGable.material.needsUpdate = true;
                                                                                 
         let innerWall = C_B_Walls.getObjectByName("CB_R_S_F_G_inner")
         innerWall.material.map = texture.clone();
         innerWall.material.map.rotation = 0
         innerWall.material.color.set(0xFFFFFF)
         innerWall.material.map.wrapS = THREE.RepeatWrapping;
         innerWall.material.map.wrapT = THREE.RepeatWrapping;
         innerWall.material.map.offset.x = params.p_w;
         innerWall.material.map.offset.y = params.p_w;
         innerWall.material.map.repeat.set(CB_R_S_FrontGable.material.map.repeat.x,CB_R_S_FrontGable.material.map.repeat.y);
         innerWall.material.map.needsUpdate = true 
         innerWall.material.needsUpdate = true;

        }
        )
        C_B_Walls.add(CB_R_S_FrontGable);
      }
      }        
      
        //Double center building right storage front gable
        if (C_B_Walls.getObjectByName("CB_R_S_F_G_inner")==undefined) {
          if (params.p_v_w!=true){
          
          let CB_R_S_FrontGableClone = C_B_Walls.getObjectByName("CB_R_S_F_G");

          if(C_B_Walls.getObjectByName("CB_R_S_F_G") != undefined){
          let doubleCB_R_S_FrontGable = CB_R_S_FrontGableClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleCB_R_S_FrontGable = new THREE.Mesh(doubleCB_R_S_FrontGable.geometry,leftDoubleMaterial);
          doubleCB_R_S_FrontGable.name = "CB_R_S_F_G_inner";
          doubleCB_R_S_FrontGable.visible = (params.is_translusant==true)? false : CB_R_S_FrontGableClone.visible
          doubleCB_R_S_FrontGable.scale.set(CB_R_S_FrontGableClone.scale.x , CB_R_S_FrontGableClone.scale.y , CB_R_S_FrontGableClone.scale.z);
          doubleCB_R_S_FrontGable.position.set(CB_R_S_FrontGableClone.position.x , CB_R_S_FrontGableClone.position.y , CB_R_S_FrontGableClone.position.z-wallDistance);
          doubleCB_R_S_FrontGable.rotation.set(CB_R_S_FrontGableClone.rotation.x , CB_R_S_FrontGableClone.rotation.y , CB_R_S_FrontGableClone.rotation.z)

          C_B_Walls.add(doubleCB_R_S_FrontGable);
          const_var.wallsForCut.CB_R_S_F_G_inner = doubleCB_R_S_FrontGable.clone();
          }
        }
        }


      /*Center Building Right Storage  4 Vertices Front Gable*/
      if (const_var.b_t_M_L.getObjectByName("CB_R_S_4V_F_G")!=undefined) {
        if (params.p_v_w!=true){
        let CB_R_Storage4VFG = const_var.b_t_M_L.getObjectByName("CB_R_S_4V_F_G").clone();
      
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
 
          let x_verticesPos = 0;
          if(params.cB_addStorage_right > params.p_w/2)
          {
              x_verticesPos = params.p_w/2 - params.cB_addStorage_right;
          }
          let quad_vertices =
          [
                //top-right
              x_verticesPos,  roofMiddleHeight[params.p_r_p][params.p_w]-(params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12), -0.005,       //4
              x_verticesPos,  roofMiddleHeight[params.p_r_p][params.p_w]-(params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12), 0.005,        //5

              //bottom-right
              x_verticesPos, -0, -0.005,        
              x_verticesPos, -0, 0.005,  

              //top-left
              0,  roofMiddleHeight[params.p_r_p][params.p_w], 0.005,        
              0,  roofMiddleHeight[params.p_r_p][params.p_w], -0.005,  

              //bottom-left
              0, -0,  0.005,        
              0, -0, -0.005,  
          ];
          if (params.singleSlope == true || params.canopy == true) {
            x_verticesPos = params.p_w/2 - params.cB_addStorage_right;
             quad_vertices =
            [

              //top left
              x_verticesPos,roofMiddleHeight[params.p_r_p][params.p_w]-(params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12),-0.005,
              x_verticesPos,roofMiddleHeight[params.p_r_p][params.p_w]-(params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12),0.005,
              
              //botom left
              x_verticesPos,-0,-0.005,
              x_verticesPos,-0,0.005,     

              //top right
              params.p_w/2,roofMiddleHeight[params.p_r_p][params.p_w*2], 0.005,
              params.p_w/2,roofMiddleHeight[params.p_r_p][params.p_w*2], -0.005,

              //botom right
              params.p_w/2,-0,0.005,
              params.p_w/2,-0,-0.005,

       
            ];
          }

          let vertices = new Float32Array( quad_vertices );
          if(params.p_v_w==true) {
              var cBRightStorageFGableUVS = new Float32Array([
              -0, 0.0,
              -0.5, -0.5,
              -0.5, -0.5,
              -0, 0.0,
              ]);
              } else {
              var cBRightStorageFGableUVS = new Float32Array([
                  0.5, 0.5-(params.cB_addStorage_right-(params.p_w/2))/params.p_w,
                  0.5, 0.5-(params.cB_addStorage_right-(params.p_w/2))/params.p_w,

                  0.5, 0,
                  0.5, 0,

                  0, 0.5, 
                  0, 0.5, 

                  0, 0,
                  0, 0,
              ]);
              if(params.singleSlope==true || params.canopy == true){
                var cBRightStorageFGableUVS = new Float32Array([
                  0.0, 0.25-((params.cB_addStorage_right-(params.p_w/2))/params.p_w)/2,
                  0.0, 0.25-((params.cB_addStorage_right-(params.p_w/2))/params.p_w)/2,
                  
                  0.25-((params.cB_addStorage_right-(params.p_w/2))/params.p_w)/2, 0.0,
                  0.25-((params.cB_addStorage_right-(params.p_w/2))/params.p_w)/2, 0.0,

                  0.0, 0.5,
                  0.0, 0.5,

                  0.3, 0.0,
                  0.3, 0.0,



              ]);
              }
             }
         CB_R_Storage4VFG.geometry.setAttribute( 'uv', new THREE.BufferAttribute( cBRightStorageFGableUVS, 2 ) );
         CB_R_Storage4VFG.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
         CB_R_Storage4VFG.geometry.computeVertexNormals();
         CB_R_Storage4VFG.scale.set(1,1,1);
         CB_R_Storage4VFG.position.set(0,params.p_h,params.p_d/2+0.06);
         if(params.singleSlope) CB_R_Storage4VFG.position.set(0,params.p_h- ((Number(params.p_r_p)/12) * params.p_w) -0.1,params.p_d/2+0.06);
         if(params.p_r_s=="1"){
            CB_R_Storage4VFG.position.y =params.p_h+0.45
            }
          CB_R_Storage4VFG.visible =(params.cB_addStorage_check_right!=false && params.p_f_w != "Close")?true:false;
          if (x_verticesPos === 0 && params.singleSlope !== true && params.canopy != true) CB_R_Storage4VFG.visible = false;
          let CB_R_Storage4VFGLoader = new THREE.TextureLoader();
          let CB_R_Storage4VFGTexture = CB_R_Storage4VFGLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture1) {
            CB_R_Storage4VFGTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5) 
            CB_R_Storage4VFG.material.map = texture1;
            CB_R_Storage4VFG.material.bumpMap = texture1;
            CB_R_Storage4VFG.material.bumpScale = 0.02
            CB_R_Storage4VFG.material.metalness = 1
            CB_R_Storage4VFG.material.roughness = 0.5
            CB_R_Storage4VFG.material.anisotropy = 10;
            CB_R_Storage4VFG.material.map.wrapS = THREE.RepeatWrapping;
            CB_R_Storage4VFG.material.map.wrapT = THREE.RepeatWrapping; 
          if(params.p_v_w==true){
            // if(params.cB_addStorage_right > params.p_w/2){
                CB_R_Storage4VFG.material.map.repeat.set(1,((params.cB_addStorage_right-10)*0.5)*2);
                    // }else{
                        // CB_R_Storage4VFG.material.map.repeat.set(params.cB_addStorage_right*2,1);
                    // }
              } else {
                  if(params.cB_addStorage_right < params.p_w/2){
                     CB_R_Storage4VFG.material.map.repeat.set(1,(roofMiddleHeight[params.p_r_p][2*params.p_w]/(10.75-(params.cB_addStorage_right*0.75)))*2);
                  }else{
                     CB_R_Storage4VFG.material.map.repeat.set(1,((roofMiddleHeight[params.p_r_p][params.p_w]*2)/1.5)*2)
                  }
                  if(params.singleSlope==true || params.canopy == true){
                    CB_R_Storage4VFG.material.map.repeat.set(1,((((Number(params.p_r_p)/12) * params.p_w))/1.5)*4)
                  }
            }

            CB_R_Storage4VFG.material.needsUpdate = true;
                                                                                             
         let innerWall = C_B_Walls.getObjectByName("CB_R_S_4V_F_G_inner")
         innerWall.material.map = texture1.clone();
         innerWall.material.map.rotation = 0
         innerWall.material.color.set(0xFFFFFF)
         innerWall.material.map.wrapS = THREE.RepeatWrapping;
         innerWall.material.map.wrapT = THREE.RepeatWrapping;
         innerWall.material.map.offset.x = params.p_w;
         innerWall.material.map.offset.y = params.p_w;
         innerWall.material.map.repeat.set(CB_R_Storage4VFG.material.map.repeat.x,CB_R_Storage4VFG.material.map.repeat.y);
         innerWall.material.map.needsUpdate = true 
         innerWall.material.needsUpdate = true;

        }
        )
        C_B_Walls.add(CB_R_Storage4VFG);
      }
      }

        //Double center building right storage 4 vertices front gable
        if (C_B_Walls.getObjectByName("CB_R_S_4V_F_G_inner")==undefined) {
          if (params.p_v_w!=true){
          let CB_R_S_4V_FrontGableClone = C_B_Walls.getObjectByName("CB_R_S_4V_F_G");

          if(C_B_Walls.getObjectByName("CB_R_S_4V_F_G") != undefined){
          let doubleCB_R_S_4V_FrontGable = CB_R_S_4V_FrontGableClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleCB_R_S_4V_FrontGable = new THREE.Mesh(doubleCB_R_S_4V_FrontGable.geometry,leftDoubleMaterial);
          doubleCB_R_S_4V_FrontGable.name = "CB_R_S_4V_F_G_inner"
          doubleCB_R_S_4V_FrontGable.visible = (params.is_translusant==true)? false : CB_R_S_4V_FrontGableClone.visible
          doubleCB_R_S_4V_FrontGable.scale.set(CB_R_S_4V_FrontGableClone.scale.x , CB_R_S_4V_FrontGableClone.scale.y , CB_R_S_4V_FrontGableClone.scale.z);
          doubleCB_R_S_4V_FrontGable.position.set(CB_R_S_4V_FrontGableClone.position.x , CB_R_S_4V_FrontGableClone.position.y , CB_R_S_4V_FrontGableClone.position.z-wallDistance);
          doubleCB_R_S_4V_FrontGable.rotation.set(CB_R_S_4V_FrontGableClone.rotation.x , CB_R_S_4V_FrontGableClone.rotation.y , CB_R_S_4V_FrontGableClone.rotation.z)
          
          C_B_Walls.add(doubleCB_R_S_4V_FrontGable);
          const_var.wallsForCut.CB_R_S_4V_F_G_inner = doubleCB_R_S_4V_FrontGable.clone();
          }
        }
        }

      /*Center Buildig Right Storage Back Gable*/
      if (const_var.b_t_M_L.getObjectByName("CB_R_S_B_G")!=undefined) {
        if (params.p_v_w!=true){
        let CB_R_S_BGable = const_var.b_t_M_L.getObjectByName("CB_R_S_B_G").clone();
      
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }

          let rtFwallPos = params.p_w/2 + params.p_w/2;
          if(params.p_v_w==true) {
           var cBRightStorageBGableUVS = new Float32Array([
           -1.0, -1.0,
           0.0, -1.0,
           0, 0.0,
           ]);
           } else {
           var cBRightStorageBGableUVS = new Float32Array([
            0.0, 1.0,
            0.0, 1.0,
            1.0, 0.0,
          -1.0, 0.0,
            1.0, 0.0,
          -1.0, 0.0,
           ]);
          }
          // if(params.cB_addStorage_right <= params.p_w/2){
          var cBRightStorageBGableVertices = new Float32Array([
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

            CB_R_S_BGable.geometry.setIndex(new THREE.BufferAttribute( index, 1 ) )
            
          // }else{
          //     var cBRightStorageBGableVertices = new Float32Array([
          //      //left
          //      0, params.p_h, params.p_d/-2-0.06,
          //      //right
          //      params.p_w/2, params.p_h, params.p_d/-2-0.06,
          //       //top
          //       0,params.p_h+roofMiddleHeight[params.p_r_p][params.p_w], params.p_d/-2-0.06,
          //     ]);
          // }
          CB_R_S_BGable.geometry.setAttribute("position", new THREE.BufferAttribute(cBRightStorageBGableVertices, 3));
          CB_R_S_BGable.geometry.setAttribute( 'uv', new THREE.BufferAttribute( cBRightStorageBGableUVS, 2 ) );
          CB_R_S_BGable.geometry.computeVertexNormals();
          CB_R_S_BGable.visible = (params.cB_addStorage_check_right!=false && params.singleSlope == false && params.canopy == false && params.p_b_w != "Close")?true:false;
          CB_R_S_BGable.rotation.y = Math.PI
          if(params.cB_addStorage_right <= params.p_w/2){
           CB_R_S_BGable.position.set((params.p_w/2)-(params.cB_addStorage_right/2),params.p_h,params.p_d/-2-0.06)
           CB_R_S_BGable.scale.set(params.cB_addStorage_right,(params.cB_addStorage_right*(params.p_r_p/12)),1);
           }else{
            CB_R_S_BGable.position.set((params.p_w/4),params.p_h,params.p_d/-2-0.06)
            CB_R_S_BGable.scale.set(params.p_w/2,roofMiddleHeight[params.p_r_p][params.p_w],1);
           }
          if(params.p_r_s=="1"){
            CB_R_S_BGable.position.y = params.p_h + 0.45;
            CB_R_S_BGable.scale.x = CB_R_S_BGable.scale.x - 0.1
            CB_R_S_BGable.position.x = CB_R_S_BGable.position.x - 0.05
            }
          let CB_R_S_BGableLoader = new THREE.TextureLoader();
          let CB_R_S_BGableTexture = CB_R_S_BGableLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
          CB_R_S_BGable.material.map = texture;
          CB_R_S_BGable.material.bumpMap = texture;
          CB_R_S_BGable.material.bumpScale = 0.02
          CB_R_S_BGable.material.metalness = 1
          CB_R_S_BGable.material.roughness = 0.5
          CB_R_S_BGable.material.anisotropy = 10;
          CB_R_S_BGable.material.map.wrapS = THREE.RepeatWrapping;
          CB_R_S_BGable.material.map.wrapT = THREE.RepeatWrapping;      
          if(params.p_v_w==true){
            if(params.cB_addStorage_right < params.p_w/2){
                CB_R_S_BGable.material.map.repeat.set(params.cB_addStorage_right*2,1);
                    }else{
                        CB_R_S_BGable.material.map.repeat.set((params.p_w/2)*2,1);
                    }
          } else {
              if(params.cB_addStorage_right < params.p_w/2){
          CB_R_S_BGable.material.map.repeat.set(1,((params.cB_addStorage_right*(params.p_r_p/12))/1.5)*2);
              }else{
                  CB_R_S_BGable.material.map.repeat.set(1,(roofMiddleHeight[params.p_r_p][params.p_w]/1.5)*2)
              }
        }
        CB_R_S_BGable.material.needsUpdate = true;
                                                                                                     
        let innerWall = C_B_Walls.getObjectByName("CB_R_S_B_G_inner")
        innerWall.material.map = texture.clone();
        innerWall.material.map.rotation = 0
        innerWall.material.color.set(0xFFFFFF)
        innerWall.material.map.wrapS = THREE.RepeatWrapping;
        innerWall.material.map.wrapT = THREE.RepeatWrapping;
        innerWall.material.map.offset.x = params.p_w;
        innerWall.material.map.offset.y = params.p_w;
        innerWall.material.map.repeat.set(CB_R_S_BGable.material.map.repeat.x,CB_R_S_BGable.material.map.repeat.y);
        innerWall.material.map.needsUpdate = true 
        innerWall.material.needsUpdate = true 

       }
      )
        C_B_Walls.add(CB_R_S_BGable);
      }
      }      

        //Double center building right storage back gable
        if (C_B_Walls.getObjectByName("CB_R_S_B_G_inner")==undefined) {
          if (params.p_v_w!=true){
          let CB_R_S_BackGableClone = C_B_Walls.getObjectByName("CB_R_S_B_G");

          if(C_B_Walls.getObjectByName("CB_R_S_B_G") != undefined){
          let doubleCB_R_S_BackGable = CB_R_S_BackGableClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleCB_R_S_BackGable = new THREE.Mesh(doubleCB_R_S_BackGable.geometry,leftDoubleMaterial);
          doubleCB_R_S_BackGable.name = "CB_R_S_B_G_inner";
          doubleCB_R_S_BackGable.visible = (params.is_translusant==true)? false : CB_R_S_BackGableClone.visible
          doubleCB_R_S_BackGable.scale.set(CB_R_S_BackGableClone.scale.x , CB_R_S_BackGableClone.scale.y , CB_R_S_BackGableClone.scale.z);
          doubleCB_R_S_BackGable.position.set(CB_R_S_BackGableClone.position.x , CB_R_S_BackGableClone.position.y , CB_R_S_BackGableClone.position.z+wallDistance);
          doubleCB_R_S_BackGable.rotation.set(CB_R_S_BackGableClone.rotation.x , CB_R_S_BackGableClone.rotation.y , CB_R_S_BackGableClone.rotation.z)

          C_B_Walls.add(doubleCB_R_S_BackGable);
          const_var.wallsForCut.CB_R_S_B_G_inner = doubleCB_R_S_BackGable.clone();
          }
        }
        }

     /*Center Building Right Storage  4 Vertices Back Gable*/
     if (const_var.b_t_M_L.getObjectByName("CB_R_S_4V_B_G")!=undefined) {
      if (params.p_v_w!=true){
        let CB_R_Storage4VBG = const_var.b_t_M_L.getObjectByName("CB_R_S_4V_B_G").clone();
      
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
 
          let x_verticesPos = 0;
                if(params.cB_addStorage_right > params.p_w/2)
                {
                    x_verticesPos = params.p_w/2 - params.cB_addStorage_right;
                }
                let anand = params.cB_addStorage_right.toString().split('')
                let quadB_vertices =
                [
                 //top-right
                  x_verticesPos,  roofMiddleHeight[params.p_r_p][params.p_w]-(params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12), -0.005,       //4
                  x_verticesPos,  roofMiddleHeight[params.p_r_p][params.p_w]-(params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12), 0.005,        //5

                  //bottom-right
                  x_verticesPos, -0, -0.005,        
                  x_verticesPos, -0, 0.005,  

                  //top-left
                  0,  roofMiddleHeight[params.p_r_p][params.p_w], 0.005,        
                  0,  roofMiddleHeight[params.p_r_p][params.p_w], -0.005,  

                  //bottom-left
                  0, -0,  0.005,        
                  0, -0, -0.005,  
                ];

                if (params.singleSlope == true || params.canopy == true) {
                  x_verticesPos = params.p_w/2 - params.cB_addStorage_right;
                   quadB_vertices =
                [
                  //top left
                  x_verticesPos,roofMiddleHeight[params.p_r_p][params.p_w]-(params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12), -0.005,
                  x_verticesPos,roofMiddleHeight[params.p_r_p][params.p_w]-(params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12), 0.005,
                  
                  //botom left
                  x_verticesPos,-0, -0.005,
                  x_verticesPos,-0, 0.005,

                  //top right
                  params.p_w/2,roofMiddleHeight[params.p_r_p][params.p_w*2], 0.005,
                  params.p_w/2,roofMiddleHeight[params.p_r_p][params.p_w*2], -0.005,
                  
                  //botom right
                  params.p_w/2,-0, 0.005,
                  params.p_w/2,-0, -0.005,
                                    

                ]
                }
                


                let verticesB = new Float32Array( quadB_vertices );
                if(params.p_v_w==true) {
                    var cBRightStorageBGableUVS = new Float32Array([
                        -0, 0.0,
                        -0.5, -0.5,
                        -0.5, -0.5,
                        -0, 0.0,
                    ]);
                    } else {
                    var cBRightStorageBGableUVS = new Float32Array([
                    0.5, 0.5-(params.cB_addStorage_right-(params.p_w/2))/params.p_w,
                    0.5, 0.5-(params.cB_addStorage_right-(params.p_w/2))/params.p_w,

                    0.5, 0,
                    0.5, 0,

                    0, 0.5, 
                    0, 0.5, 

                    0, 0,
                    0, 0,
                ]);

                    if(params.singleSlope==true || params.canopy == true){
                      var cBRightStorageBGableUVS = new Float32Array([
                        //top left
                        0.0, 0.25-((params.cB_addStorage_right-(params.p_w/2))/params.p_w)/2,
                        0.0, 0.25-((params.cB_addStorage_right-(params.p_w/2))/params.p_w)/2,

                        //botom left
                        0.25-((params.cB_addStorage_right-(params.p_w/2))/params.p_w)/2, 0.0,
                        0.25-((params.cB_addStorage_right-(params.p_w/2))/params.p_w)/2, 0.0,

                        //top right
                        0.0, 0.5,
                        0.0, 0.5,

                        //botom right
                        0.3, 0.0,
                        0.3, 0.0,


      
                    ]);
                    }
                   }
                CB_R_Storage4VBG.geometry.setAttribute( 'uv', new THREE.BufferAttribute( cBRightStorageBGableUVS, 2 ) );

                CB_R_Storage4VBG.geometry.setAttribute( 'position', new THREE.BufferAttribute( verticesB, 3 ) );
                CB_R_Storage4VBG.geometry.computeVertexNormals();
                CB_R_Storage4VBG.scale.set(1,1,1);
                CB_R_Storage4VBG.position.set(0,params.p_h,params.p_d/-2-0.06);
                if(params.singleSlope) CB_R_Storage4VBG.position.set(0,params.p_h - ((Number(params.p_r_p)/12) * params.p_w) -0.1,params.p_d/-2-0.06);

                if(params.p_r_s=="1"){
                    CB_R_Storage4VBG.position.y =params.p_h+0.45
                    }
                CB_R_Storage4VBG.visible =(params.cB_addStorage_check_right!=false && params.p_b_w != "Close")?true:false;
                if ((x_verticesPos === 0 && params.singleSlope !== true) && params.canopy != true) CB_R_Storage4VBG.visible = false;
                let CB_R_Storage4VBGLoader = new THREE.TextureLoader();
                let CB_R_Storage4VBGTexture = CB_R_Storage4VBGLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                  CB_R_Storage4VBG.material.map = texture;
                  CB_R_Storage4VBG.material.bumpMap = texture;
                  CB_R_Storage4VBG.material.bumpScale = 0.02
                  CB_R_Storage4VBG.material.metalness = 1
                  CB_R_Storage4VBG.material.roughness = 0.5
                  CB_R_Storage4VBG.material.anisotropy = 10;
                  CB_R_Storage4VBG.material.map.wrapS = THREE.RepeatWrapping;
                  CB_R_Storage4VBG.material.map.wrapT = THREE.RepeatWrapping; 
                  
                if(params.p_v_w==true){
                    CB_R_Storage4VBG.material.map.repeat.set(1,((params.cB_addStorage_right-10)*0.5)*2);
                } else {
                  if(params.cB_addStorage_right < params.p_w/2) {
                      CB_R_Storage4VBG.material.map.repeat.set(1,(roofMiddleHeight[params.p_r_p][2*params.p_w]/(10.75-(params.cB_addStorage_right*0.75)))*2);
                  } else {
                      CB_R_Storage4VBG.material.map.repeat.set(1,((roofMiddleHeight[params.p_r_p][params.p_w]*2)/1.5)*2)
                  }
                  if(params.singleSlope==true || params.canopy == true){
                    CB_R_Storage4VBG.material.map.repeat.set(1,((((Number(params.p_r_p)/12) * params.p_w))/1.5)*4)
                  }
                }
                CB_R_Storage4VBG.material.needsUpdate = true;
                                                                                                                     
              let innerWall = C_B_Walls.getObjectByName("CB_R_S_4V_B_G_inner")
              innerWall.material.map = texture.clone();
              innerWall.material.map.rotation = 0
              innerWall.material.color.set(0xFFFFFF)
              innerWall.material.map.wrapS = THREE.RepeatWrapping;
              innerWall.material.map.wrapT = THREE.RepeatWrapping;
              innerWall.material.map.offset.x = params.p_w;
              innerWall.material.map.offset.y = params.p_w;
              innerWall.material.map.repeat.set(CB_R_Storage4VBG.material.map.repeat.x,CB_R_Storage4VBG.material.map.repeat.y);
              innerWall.material.map.needsUpdate = true 
              innerWall.material.needsUpdate = true 

            }
            )
            C_B_Walls.add(CB_R_Storage4VBG);
          }
     }

        //Double center building right storage 4 vertices back gable
        if (C_B_Walls.getObjectByName("CB_R_S_4V_B_G_inner")==undefined) {
          if (params.p_v_w!=true){
          let CB_R_S_4V_BackGableClone = C_B_Walls.getObjectByName("CB_R_S_4V_B_G");

          if(C_B_Walls.getObjectByName("CB_R_S_4V_B_G") != undefined){
          let doubleCB_R_S_4V_BackGable = CB_R_S_4V_BackGableClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleCB_R_S_4V_BackGable = new THREE.Mesh(doubleCB_R_S_4V_BackGable.geometry,leftDoubleMaterial);
          doubleCB_R_S_4V_BackGable.name = "CB_R_S_4V_B_G_inner";
          doubleCB_R_S_4V_BackGable.visible = (params.is_translusant==true)? false : CB_R_S_4V_BackGableClone.visible
          doubleCB_R_S_4V_BackGable.scale.set(CB_R_S_4V_BackGableClone.scale.x , CB_R_S_4V_BackGableClone.scale.y , CB_R_S_4V_BackGableClone.scale.z);
          doubleCB_R_S_4V_BackGable.position.set(CB_R_S_4V_BackGableClone.position.x , CB_R_S_4V_BackGableClone.position.y , CB_R_S_4V_BackGableClone.position.z+wallDistance);
          doubleCB_R_S_4V_BackGable.rotation.set(CB_R_S_4V_BackGableClone.rotation.x , CB_R_S_4V_BackGableClone.rotation.y , CB_R_S_4V_BackGableClone.rotation.z)

          C_B_Walls.add(doubleCB_R_S_4V_BackGable);
          const_var.wallsForCut.CB_R_S_4V_B_G_inner = doubleCB_R_S_4V_BackGable.clone();
          }
        }
        }

     /* Center Building Right Storage Front Wall*/
     if (const_var.b_t_M_L.getObjectByName("c_b_r_s_f_w")!=undefined) {
      if (params.p_v_w!=true){
        let CBRSFrontWall = const_var.b_t_M_L.getObjectByName("c_b_r_s_f_w").clone();
      
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }

        let wH = params.p_h;
        let wP = params.p_h - wH/2;

        if (params.singleSlope) {
          wH = params.p_h  - ((Number(params.p_r_p)/12) * params.p_w);
          wP = wH/2;
        }
        
      

        switch(params.p_f_w )
        {
            case "One_Fourth_Close":
              
              if (params.singleSlope) {
                wH = params.p_h-wH/4 - ((Number(params.p_r_p)/12) * params.p_w);
                wP = params.p_h - wH/2-((params.p_h - ((Number(params.p_r_p)/12) * params.p_w))/4) - ((Number(params.p_r_p)/12) * params.p_w);
              } else {
                wH = params.p_h-wH/4;
                wP = params.p_h - wH/2-(params.p_h/4);
              }
                break;
            case "Half_Close":
              if (params.singleSlope) {
                wH = params.p_h-wH/2- ((Number(params.p_r_p)/12) * params.p_w);
                wP = params.p_h - wH/2-((params.p_h- ((Number(params.p_r_p)/12) * params.p_w))/2) - ((Number(params.p_r_p)/12) * params.p_w);
              } else {
                wH = params.p_h-wH/2;
                wP = params.p_h - wH/2-(params.p_h/2);
              }
                break;                          
            case "Three_Fourth_Close":
              if (params.singleSlope) {
                wH = params.p_h-wH * 3/4 - ((Number(params.p_r_p)/12) * params.p_w);
                wP = params.p_h - wH/2-((params.p_h - ((Number(params.p_r_p)/12) * params.p_w))*3/4) - ((Number(params.p_r_p)/12) * params.p_w);
              } else {
                wH = params.p_h-wH * 3/4;
                wP = params.p_h - wH/2-(params.p_h*3/4);
              }
                break;
            case "Extended Gable":
              if (params.singleSlope) {
                wH = params.p_h- 3 - ((Number(params.p_r_p)/12) * params.p_w);
                wP = params.p_h - wH/2-(3) - ((Number(params.p_r_p)/12) * params.p_w);
              } else {
                wH =params.p_h- 3;
                wP = params.p_h - wH/2-(3);
              }
                break;
            case "Gable":
              if (params.singleSlope) {
                wH = params.p_h - ((Number(params.p_r_p)/12) * params.p_w);
                wP = params.p_h - (wH/2) - ((Number(params.p_r_p)/12) * params.p_w);
              } else {
                wH = (params.p_h);
                wP = params.p_h - (wH/2); 
              }
                break;
            case "Close":
                wH =params.p_h- params.p_h;
                wP = (params.p_h - wH/2);
                if (params.singleSlope) wP = (params.p_h - wH/2)- ((Number(params.p_r_p)/12) * params.p_w);
                break;
            default:
                // // let hdfp = params.p_h - (params.lean_p_h + Number(params.b_l_t_r_pF));
                // let hdfp = params.p_h - (params.leanF_p_h + (parseInt(params.b_l_t_r_pF)/12) * params.leanF_p_w);
                
                // if(params.add_front_lean && hdfp > 0 && params.a_c_p_f == false )
                // {    
                //     wH = hdfp;
                //     wP = params.p_h - wH/2;
                //     CBLSFrontWall.visible = true; 
                // }
                // else
                // {
                // wH = Math.abs(params.p_f_w.replace(/\D/g, "")) * 3;
                // wP = params.p_h - wH/2;                        
                // }
                break;
        }
        let hdfp = params.p_h - (params.leanF_p_h + (parseInt(params.b_l_t_r_pF)/12) * params.leanF_p_w);
        if(params.add_front_lean ==true && Object.values(const_var.wallArray["front"])[0] == params.p_f_w || params.add_front_lean ==true && params.p_f_w == "Open")
        {    
          wH = params.p_h - hdfp;
          wP = wH/2;
        }

          CBRSFrontWall.visible = (params.cB_addStorage_check_right!=false && params.p_f_w != "Close")?true:false;
          CBRSFrontWall.position.x = params.p_w/2-params.cB_addStorage_right/2;
          CBRSFrontWall.position.z = params.p_d / 2+0.06;
          if(params.p_r_s=="1"){    
            CBRSFrontWall.position.y = wP+0.225;
            CBRSFrontWall.scale.set(params.cB_addStorage_right - 0.2,wH+0.45,1);
            }else{
                CBRSFrontWall.position.y = wP;
                CBRSFrontWall.scale.set(params.cB_addStorage_right,wH,1);
            }           
        //   CBRSFrontWall.scale.set(params.cB_addStorage_right,params.p_h,0);            
          let CBRSFrontWallLoader = new THREE.TextureLoader();
          let CBRSFrontWallTexture = CBRSFrontWallLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {             
        //   CBRSFrontWall.material.envMap = texture;
        //   CBRSFrontWall.material.emissiveMap = texture;
        //   CBRSFrontWall.material.emissiveIntensity = 1;
          CBRSFrontWall.material.map = texture;
          CBRSFrontWall.material.bumpMap = texture;
          CBRSFrontWall.material.bumpScale = 0.02
          CBRSFrontWall.material.metalness = 1
          CBRSFrontWall.material.roughness = 0.5
          CBRSFrontWall.material.anisotropy = 10;
          CBRSFrontWall.material.map.wrapS = THREE.RepeatWrapping;
          CBRSFrontWall.material.map.wrapT = THREE.RepeatWrapping;
          CBRSFrontWall.material.map.offset.x = params.p_w;
          CBRSFrontWall.material.map.offset.y = params.p_w;
          CBRSFrontWall.material.needsUpdate = true;

          if (params.p_v_w==true) {
              CBRSFrontWall.material.map.repeat.set(params.cB_addStorage_right*2,1);
          } else {
              CBRSFrontWall.material.map.repeat.set(1,Math.round((wH/1.5)*2)); 
          }
                                                                                                                               
          let innerWall = C_B_Walls.getObjectByName("c_b_r_s_f_w_inner")
          innerWall.material.map = texture.clone();
          innerWall.material.map.rotation = 0
          innerWall.material.color.set(0xFFFFFF)
          innerWall.material.map.wrapS = THREE.RepeatWrapping;
          innerWall.material.map.wrapT = THREE.RepeatWrapping;
          innerWall.material.map.offset.x = params.p_w;
          innerWall.material.map.offset.y = params.p_w;
          innerWall.material.map.repeat.set(CBRSFrontWall.material.map.repeat.x,CBRSFrontWall.material.map.repeat.y);
          innerWall.material.map.needsUpdate = true 
          innerWall.material.needsUpdate = true 

        }
        )
        C_B_Walls.add(CBRSFrontWall);
      }
     }

        //Double center building right storage front wall
        if (C_B_Walls.getObjectByName("c_b_r_s_f_w_inner")==undefined) {
          if (params.p_v_w!=true){
          let CB_R_S_FrontWallClone = C_B_Walls.getObjectByName("c_b_r_s_f_w");

          if(C_B_Walls.getObjectByName("c_b_r_s_f_w") != undefined){
          let doubleCB_R_S_FrontWall = CB_R_S_FrontWallClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleCB_R_S_FrontWall = new THREE.Mesh(doubleCB_R_S_FrontWall.geometry,leftDoubleMaterial);
          doubleCB_R_S_FrontWall.name = "c_b_r_s_f_w_inner"
          doubleCB_R_S_FrontWall.visible = (params.is_translusant==true)? false : CB_R_S_FrontWallClone.visible
          doubleCB_R_S_FrontWall.scale.set(CB_R_S_FrontWallClone.scale.x , CB_R_S_FrontWallClone.scale.y , CB_R_S_FrontWallClone.scale.z);
          doubleCB_R_S_FrontWall.position.set(CB_R_S_FrontWallClone.position.x , CB_R_S_FrontWallClone.position.y , CB_R_S_FrontWallClone.position.z-wallDistance);
          doubleCB_R_S_FrontWall.rotation.set(CB_R_S_FrontWallClone.rotation.x , CB_R_S_FrontWallClone.rotation.y , CB_R_S_FrontWallClone.rotation.z)

          C_B_Walls.add(doubleCB_R_S_FrontWall);
          const_var.wallsForCut.c_b_r_s_f_w_inner = doubleCB_R_S_FrontWall.clone();
          }
        }
        }

     /*Center Buildig Right Storage Back Wall*/
     if (const_var.b_t_M_L.getObjectByName("c_b_r_s_b_w")!=undefined) {
         let CBRSBackWall = const_var.b_t_M_L.getObjectByName("c_b_r_s_b_w").clone();
         if (params.p_v_w!=true){
         let wallTexture = horizontalTexture;
         if (params.p_v_w==true){
           wallTexture = verticalTexture;
         } else {
           wallTexture = horizontalTexture;
         }

         let wH = params.p_h;
         let wP = params.p_h - wH/2;

         if (params.singleSlope) {
          wH = params.p_h  - ((Number(params.p_r_p)/12) * params.p_w);
          wP = wH/2;
        }
         
         

         switch(params.p_b_w )
         {
             case "One_Fourth_Close":
              if (params.singleSlope) {
                wH = params.p_h-wH/4 - ((Number(params.p_r_p)/12) * params.p_w);
                wP = params.p_h - wH/2-((params.p_h - ((Number(params.p_r_p)/12) * params.p_w))/4) - ((Number(params.p_r_p)/12) * params.p_w);
              } else {
                 wH = params.p_h-wH/4;
                 wP = params.p_h - wH/2-(params.p_h/4);
              }
                 break;
             case "Half_Close":
              if (params.singleSlope) {
                wH = params.p_h-wH/2- ((Number(params.p_r_p)/12) * params.p_w);
                wP = params.p_h - wH/2-((params.p_h- ((Number(params.p_r_p)/12) * params.p_w))/2) - ((Number(params.p_r_p)/12) * params.p_w);
              } else {
                 wH = params.p_h-wH/2;
                 wP = params.p_h - wH/2-(params.p_h/2);
              }
                 break;                         
             case "Three_Fourth_Close":
              if (params.singleSlope) {
                wH = params.p_h-wH * 3/4 - ((Number(params.p_r_p)/12) * params.p_w);
                wP = params.p_h - wH/2-((params.p_h - ((Number(params.p_r_p)/12) * params.p_w))*3/4) - ((Number(params.p_r_p)/12) * params.p_w);
              } else {
                 wH = params.p_h-wH * 3/4;
                 wP = params.p_h - wH/2-(params.p_h*3/4);
              }
                 break;
             case "Extended Gable":
              if (params.singleSlope) {
                wH = params.p_h- 3 - ((Number(params.p_r_p)/12) * params.p_w);
                wP = params.p_h - wH/2-(3) - ((Number(params.p_r_p)/12) * params.p_w);
              } else {
                 wH =params.p_h- 3;
                 wP = params.p_h - wH/2-(3);
              }
                 break;
             case "Gable":
              if (params.singleSlope) {
                wH = params.p_h - ((Number(params.p_r_p)/12) * params.p_w);
                wP = params.p_h - (wH/2) - ((Number(params.p_r_p)/12) * params.p_w);
              } else {
                 wH = (params.p_h);
                 wP = params.p_h - (wH/2);  
              }
                 break;
             case "Close":
                 wH =params.p_h- params.p_h;
                 wP = (params.p_h - wH/2);
                 if (params.singleSlope) wP = (params.p_h - wH/2)- ((Number(params.p_r_p)/12) * params.p_w);
                 break;
             default:
                 // // let hdfp = params.p_h - (params.lean_p_h + Number(params.b_l_t_r_pF));
                 // let hdfp = params.p_h - (params.leanF_p_h + (parseInt(params.b_l_t_r_pF)/12) * params.leanF_p_w);
                 
                 // if(params.add_front_lean && hdfp > 0 && params.a_c_p_f == false )
                 // {    
                 //     wH = hdfp;
                 //     wP = params.p_h - wH/2;
                 //     CBLSFrontWall.visible = true; 
                 // }
                 // else
                 // {
                 // wH = Math.abs(params.p_f_w.replace(/\D/g, "")) * 3;
                 // wP = params.p_h - wH/2;                       
                 // }
                 break;
         }

         let hdfp = params.p_h - (params.leanB_p_h + (parseInt(params.b_l_t_r_pB)/12) * params.leanB_p_w);
         if(params.add_back_lean && Object.values(const_var.wallArray["back"])[0] == params.p_b_w || params.add_back_lean ==true && params.p_b_w == "Open")
         {    
             wH = params.p_h - hdfp;
             wP = wH/2;
         } 
           CBRSBackWall.visible = (params.cB_addStorage_check_right!=false && params.p_b_w != "Close")?true:false;
         
           CBRSBackWall.position.x = params.p_w/2-params.cB_addStorage_right/2;
           CBRSBackWall.position.y = params.p_h/2;
           CBRSBackWall.position.z = params.p_d / -2-0.06;  
        //    CBRSBackWall.scale.set(params.cB_addStorage_right,params.p_h,0);
           if(params.p_r_s=="1"){   
            CBRSBackWall.position.y = wP+0.225;
            CBRSBackWall.scale.set(params.cB_addStorage_right - 0.2,wH+0.45,1);
            }else{
                CBRSBackWall.position.y = wP;
                if (wH === 0) CBRSBackWall.visible = false;
                else CBRSBackWall.scale.set(params.cB_addStorage_right,wH,1);
            }                                   
           let CBRSBackWallLoader = new THREE.TextureLoader();
           let CBRSBackWallTexture = CBRSBackWallLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
           CBRSBackWall.material.map = texture;
           CBRSBackWall.material.bumpMap = texture;
           CBRSBackWall.material.bumpScale = 0.02
           CBRSBackWall.material.metalness = 1
           CBRSBackWall.material.roughness = 0.5
           CBRSBackWall.material.anisotropy = 10;
        //    CBRSBackWall.material.envMap = texture;
        //    CBRSBackWall.material.emissiveMap = texture;
        //    CBRSBackWall.material.emissiveIntensity = 1;
           CBRSBackWall.material.map.wrapS = THREE.RepeatWrapping;
           CBRSBackWall.material.map.wrapT = THREE.RepeatWrapping;
           CBRSBackWall.material.map.offset.x = params.p_w;
           CBRSBackWall.material.map.offset.y = params.p_w;
           CBRSBackWall.material.needsUpdate = true;
           
           if(params.p_v_w==true)
               {
                   CBRSBackWall.material.map.repeat.set(params.cB_addStorage_right*2,1);
               }else
               {
                   CBRSBackWall.material.map.repeat.set(1,Math.round((wH/1.5)*2)); 
               }
                                                                                                                                              
          let innerWall = C_B_Walls.getObjectByName("c_b_r_s_b_w_inner")
          innerWall.material.map = texture.clone();
          innerWall.material.map.rotation = 0
          innerWall.material.color.set(0xFFFFFF)
          innerWall.material.map.wrapS = THREE.RepeatWrapping;
          innerWall.material.map.wrapT = THREE.RepeatWrapping;
          innerWall.material.map.offset.x = params.p_w;
          innerWall.material.map.offset.y = params.p_w;
          innerWall.material.map.repeat.set(CBRSBackWall.material.map.repeat.x,CBRSBackWall.material.map.repeat.y);
          innerWall.material.map.needsUpdate = true 
          innerWall.material.needsUpdate = true 

            }
            )
            C_B_Walls.add(CBRSBackWall);
          }
     }

        //Double center building right storage back wall
        if (C_B_Walls.getObjectByName("c_b_r_s_b_w_inner")==undefined) {
          if (params.p_v_w!=true){
          let CB_R_S_BackWallClone = C_B_Walls.getObjectByName("c_b_r_s_b_w");

          if(C_B_Walls.getObjectByName("c_b_r_s_b_w") != undefined){
          let doubleCB_R_S_BackWall = CB_R_S_BackWallClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleCB_R_S_BackWall = new THREE.Mesh(doubleCB_R_S_BackWall.geometry,leftDoubleMaterial);
          doubleCB_R_S_BackWall.name = "c_b_r_s_b_w_inner"
          doubleCB_R_S_BackWall.visible = (params.is_translusant==true)? false : CB_R_S_BackWallClone.visible
          doubleCB_R_S_BackWall.scale.set(CB_R_S_BackWallClone.scale.x , CB_R_S_BackWallClone.scale.y , CB_R_S_BackWallClone.scale.z);
          doubleCB_R_S_BackWall.position.set(CB_R_S_BackWallClone.position.x , CB_R_S_BackWallClone.position.y , CB_R_S_BackWallClone.position.z+wallDistance);
          doubleCB_R_S_BackWall.rotation.set(CB_R_S_BackWallClone.rotation.x , CB_R_S_BackWallClone.rotation.y , CB_R_S_BackWallClone.rotation.z)

          C_B_Walls.add(doubleCB_R_S_BackWall);
          const_var.wallsForCut.c_b_r_s_b_w_inner = doubleCB_R_S_BackWall.clone();
          }
        }
        }

     /* Center Building Right Storage Left Wall*/
     if (const_var.b_t_M_L.getObjectByName("c_b_r_s_l_w")!=undefined) {
        let CBRSLeftWall = const_var.b_t_M_L.getObjectByName("c_b_r_s_l_w").clone();
      
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
          CBRSLeftWall.visible = (params.cB_addStorage_check_right!=false)?true:false;
          CBRSLeftWall.position.x = params.p_w /2-params.cB_addStorage_right;
          CBRSLeftWall.position.z = (params.cB_addStorage_check_both_with_back==true)?(params.p_d/-2)+parseInt(params.p_u_t)+((params.p_d - parseInt(params.p_u_t))/2): 0;
          CBRSLeftWall.scale.set(params.p_d,0,1);
          if(params.cB_addStorage_check_both_with_back==true)
          {
            CBRSLeftWall.scale.set(params.p_d - parseInt(params.p_u_t),0,1);
          }
          if(params.cB_addStorage_right <= params.p_w /2 || params.singleSlope == true || params.canopy == true){
            if (params.p_r_s=="1"){
              CBRSLeftWall.scale.y = params.p_h+(params.cB_addStorage_right*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2)))+0.4
              CBRSLeftWall.position.y = ((params.p_h+(params.cB_addStorage_right*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2))))/2)+0.2;            
            }else{
                CBRSLeftWall.scale.y = params.p_h+(params.cB_addStorage_right*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2)));
                CBRSLeftWall.position.y = (params.p_h+(params.cB_addStorage_right*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2))))/2;               
            } 
          } else {
            if (params.p_r_s=="1"){
              CBRSLeftWall.scale.y = (params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12))+0.4;
              CBRSLeftWall.position.y = (((params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12)))/2)+0.2; 
            }else{
                CBRSLeftWall.scale.y = (params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12));
                CBRSLeftWall.position.y = (((params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12)))/2); 
            }
          }
          // if (params.singleSlope == true || params.canopy == true) {

          //       CBRSLeftWall.scale.y = (params.p_h+((roofMiddleHeight[params.p_r_p][params.p_w])*1.04)-((params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12)));
          //       CBRSLeftWall.position.y = (((params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12)))/2); 
          
          // }

          if (params.singleSlope) {
            CBRSLeftWall.scale.y = params.p_h - (Number(params.p_r_p)/12) * params.cB_addStorage_right - 0.1;
            CBRSLeftWall.position.y = (params.p_h - (Number(params.p_r_p)/12) * params.cB_addStorage_right)/2;          
          }

          let CBRSLeftWallLoader = new THREE.TextureLoader();
          let CBRSLeftWallTexture = CBRSLeftWallLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
        //   CBRSLeftWall.material.envMap = texture;
        //   CBRSLeftWall.material.emissiveMap = texture;
        //   CBRSLeftWall.material.emissiveIntensity = 1;
          CBRSLeftWall.material.map = texture;
          CBRSLeftWall.material.bumpMap = texture;
          CBRSLeftWall.material.bumpScale = 0.02
          CBRSLeftWall.material.metalness = 1
          CBRSLeftWall.material.roughness = 0.5
          CBRSLeftWall.material.anisotropy = 10;
          CBRSLeftWall.material.map.wrapS = THREE.RepeatWrapping;
          CBRSLeftWall.material.map.wrapT = THREE.RepeatWrapping;
          CBRSLeftWall.material.map.offset.x = params.p_w;
          CBRSLeftWall.material.map.offset.y = params.p_w;
          CBRSLeftWall.material.needsUpdate = true;
        
          if(params.p_v_w==true){
            CBRSLeftWall.material.map.rotation = Math.PI
              CBRSLeftWall.material.map.repeat.set(((params.p_d/2)+(params.p_d/2/3))*2,1);
          } else {
              CBRSLeftWall.material.map.repeat.set(1,Math.round((CBRSLeftWall.scale.y/1.5)*2));
          }
                                                                                                                                                        
          let innerWall = C_B_Walls.getObjectByName("c_b_r_s_l_w_inner")
          innerWall.material.map = texture.clone();
          innerWall.material.map.rotation = 0
          innerWall.material.color.set(0xFFFFFF)
          innerWall.material.map.wrapS = THREE.RepeatWrapping;
          innerWall.material.map.wrapT = THREE.RepeatWrapping;
          innerWall.material.map.offset.x = params.p_w;
          innerWall.material.map.offset.y = params.p_w;
          innerWall.material.map.repeat.set(CBRSLeftWall.material.map.repeat.x,CBRSLeftWall.material.map.repeat.y);
          innerWall.material.map.needsUpdate = true 
          innerWall.material.needsUpdate = true 

        }
        )
        C_B_Walls.add(CBRSLeftWall);
     }

        //Double center building right storage back wall
        if (C_B_Walls.getObjectByName("c_b_r_s_l_w_inner")==undefined) {
          
          let CB_R_S_LeftWallClone = C_B_Walls.getObjectByName("c_b_r_s_l_w");

          if(C_B_Walls.getObjectByName("c_b_r_s_l_w") != undefined){
          let doubleCB_R_S_LeftWall = CB_R_S_LeftWallClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          doubleCB_R_S_LeftWall = new THREE.Mesh(doubleCB_R_S_LeftWall.geometry,leftDoubleMaterial);
          doubleCB_R_S_LeftWall.name = "c_b_r_s_l_w_inner"
          doubleCB_R_S_LeftWall.visible = (params.is_translusant==true)? false : CB_R_S_LeftWallClone.visible
          doubleCB_R_S_LeftWall.scale.set(CB_R_S_LeftWallClone.scale.x , CB_R_S_LeftWallClone.scale.y , CB_R_S_LeftWallClone.scale.z);
          doubleCB_R_S_LeftWall.position.set(CB_R_S_LeftWallClone.position.x+wallDistance , CB_R_S_LeftWallClone.position.y , CB_R_S_LeftWallClone.position.z);
          doubleCB_R_S_LeftWall.rotation.set(CB_R_S_LeftWallClone.rotation.x , CB_R_S_LeftWallClone.rotation.y , CB_R_S_LeftWallClone.rotation.z)
          
          C_B_Walls.add(doubleCB_R_S_LeftWall);
          const_var.wallsForCut.c_b_r_s_l_w_inner = doubleCB_R_S_LeftWall.clone();
          }
        }


        // Right Storage Front Wall According Vertical Texture
        if (const_var.b_t_M_L.getObjectByName("R_S_F_W_VT")==undefined) {
          if (params.p_v_w==true){
          let R_S_F_W_VT = const_var.b_t_M_L.getObjectByName("CB_R_S_4V_B_G").clone();
      
          let lowerLength = 0
          if (params.p_v_w==true && params.p_r_s == "1"){
            lowerLength = 0.3
          }

          let wallTexture = horizontalTexture;
          if (params.p_v_w==true){
            wallTexture = verticalTexture;
          } else {
            wallTexture = horizontalTexture;
          }

          
            let x_verticesPos = 0;
            if(params.cB_addStorage_right > params.p_w/2)
            {
                x_verticesPos = -(params.p_w/2 - params.cB_addStorage_right);
            }
            // let check = params.cB_addStorage_right.toString().split('')
            let quad_vertices =
            [
                  0,  roofMiddleHeight[params.p_r_p][params.p_w], -0.005,  
                  0,  roofMiddleHeight[params.p_r_p][params.p_w], 0.005, 
                  0, -params.p_h-lowerLength, -0.005,      
                  0, -params.p_h-lowerLength, 0.005,  
                  x_verticesPos,  roofMiddleHeight[params.p_r_p][params.p_w]-(params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12), 0.005,       
                  x_verticesPos,  roofMiddleHeight[params.p_r_p][params.p_w]-(params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12), -0.005,     
                  x_verticesPos, -params.p_h-lowerLength, 0.005,        
                  x_verticesPos, -params.p_h-lowerLength, -0.005, 
            ];
            let vertices = new Float32Array( quad_vertices );

            let index = new Uint32Array([
              0,2,1,
              2,3,1,
              4,6,5,
              6,7,5,
              4,5,1,      
              5,0,1,      
              7,6,2,        
              6,3,2,      
              5,7,0,      
              7,2,0,      
              1,3,4,      
              3,6,4       
            ]);

            if(params.p_v_w==true) {
                var cBRightStorageFGableUVS = new Float32Array([
                  0,0.5,
                  0,0.5,
                  0.5,0.5,
                  0.5,0.5,
                  0,0,
                  0,0,
                  0.5,0,
                  0.5,0,
                ]);
                } else {
                var cBRightStorageFGableUVS = new Float32Array([
              
                    0.5-(params.cB_addStorage_right-(params.p_w/2))/params.p_w, 0.0,
                    0.3, 0.0,
                    0.0, 0.5,
                    0.0, 0.5-(params.cB_addStorage_right-(params.p_w/2))/params.p_w,
                ]);
               }

            R_S_F_W_VT.geometry.setIndex( new THREE.BufferAttribute( index, 1 ) );
            R_S_F_W_VT.geometry.setAttribute( 'uv', new THREE.BufferAttribute( cBRightStorageFGableUVS, 2 ) );
           
            R_S_F_W_VT.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
            delete R_S_F_W_VT.geometry.attributes.normal;
            R_S_F_W_VT.geometry.computeVertexNormals();
            R_S_F_W_VT.name = "R_S_F_W_VT"
            R_S_F_W_VT.scale.set(1,1,1);
            R_S_F_W_VT.rotation.y = Math.PI
            R_S_F_W_VT.position.set(0,params.p_h,params.p_d/2+0.065);
            if(params.p_r_s=="1"){
              R_S_F_W_VT.position.y =params.p_h+0.3
              }
             R_S_F_W_VT.visible =(params.cB_addStorage_check_right!=false && x_verticesPos !== 0 && params.singleSlope == false && params.canopy == false && params.p_f_w != "Close")?true:false;
             let cBLeftStorage4VFGVLoader = new THREE.TextureLoader();
             let cBLeftStorage4VFGVTexture = cBLeftStorage4VFGVLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture1) {
              R_S_F_W_VT.material.map = texture1;
              R_S_F_W_VT.material.bumpMap = texture1;
              R_S_F_W_VT.material.bumpScale = 0.02
              R_S_F_W_VT.material.metalness = 1
              R_S_F_W_VT.material.roughness = 0.5
              R_S_F_W_VT.material.anisotropy = 10;
              R_S_F_W_VT.material.map.wrapS = THREE.RepeatWrapping;
              R_S_F_W_VT.material.map.wrapT = THREE.RepeatWrapping;     
             if(params.p_v_w==true){
              R_S_F_W_VT.material.map.rotation = Math.PI/2
              // R_S_F_W_VT.material.map.repeat.set(Math.round(((params.cB_addStorage_right-(params.p_w/2))+((params.cB_addStorage_right-(params.p_w/2))*0.3))*2),1);
              let n = Math.round(((params.cB_addStorage_right-(params.p_w/2))+((params.cB_addStorage_right-(params.p_w/2))*0.3))*2)
              R_S_F_W_VT.material.map.repeat.set(2* Math.floor(n/2) + oddEven,1);
              // console.log(R_S_F_W_VT.material.map,"4gable")
                } else {
                    if(params.cB_addStorage_right < params.p_w/2){
                        R_S_F_W_VT.material.map.repeat.set(1,(roofMiddleHeight[params.p_r_p][2*params.p_w]/(10.75-(params.cB_addStorage_right*0.75)))*2);
                    }else{
                        R_S_F_W_VT.material.map.repeat.set(1,(roofMiddleHeight[params.p_r_p][2*params.p_w]/1.5)*2)
                    }
              }

              R_S_F_W_VT.material.needsUpdate = true;
                                                                                                                                                                      
          let innerWall = C_B_Walls.getObjectByName("R_S_F_W_VT_inner")
          innerWall.material.map = texture1.clone();
          innerWall.material.map.rotation = 0
          innerWall.material.color.set(0xFFFFFF)
          innerWall.material.map.wrapS = THREE.RepeatWrapping;
          innerWall.material.map.wrapT = THREE.RepeatWrapping;
          innerWall.material.map.offset.x = params.p_w;
          innerWall.material.map.offset.y = params.p_w;
          innerWall.material.map.rotation = Math.PI/2;
          innerWall.material.map.repeat.set(R_S_F_W_VT.material.map.repeat.x,R_S_F_W_VT.material.map.repeat.y);
          innerWall.material.map.needsUpdate = true 
          innerWall.material.needsUpdate = true 

          }
          )
          C_B_Walls.add(R_S_F_W_VT);
          const_var.wallsForCut.R_S_F_W_VT = R_S_F_W_VT.clone();
        }
      }

       //Double Right Storage Front Wall According Vertical Texture
       if (C_B_Walls.getObjectByName("R_S_F_W_VT_inner")==undefined) {
          
        let R_S_F_W_VT_Clone = C_B_Walls.getObjectByName("R_S_F_W_VT");
        if(C_B_Walls.getObjectByName("R_S_F_W_VT") != undefined){
        let double_R_S_F_W_VT = R_S_F_W_VT_Clone.clone();
        
        let R_S_F_W_VT_Material= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
        double_R_S_F_W_VT = new THREE.Mesh(double_R_S_F_W_VT.geometry,R_S_F_W_VT_Material);
        double_R_S_F_W_VT.name = "R_S_F_W_VT_inner";
        double_R_S_F_W_VT.visible = (params.is_translusant==true)? false : R_S_F_W_VT_Clone.visible
        double_R_S_F_W_VT.scale.set(R_S_F_W_VT_Clone.scale.x , R_S_F_W_VT_Clone.scale.y , R_S_F_W_VT_Clone.scale.z);
        double_R_S_F_W_VT.position.set(R_S_F_W_VT_Clone.position.x , R_S_F_W_VT_Clone.position.y , R_S_F_W_VT_Clone.position.z-0.2);
        double_R_S_F_W_VT.rotation.set(R_S_F_W_VT_Clone.rotation.x , R_S_F_W_VT_Clone.rotation.y , R_S_F_W_VT_Clone.rotation.z)

        C_B_Walls.add(double_R_S_F_W_VT);
        const_var.wallsForCut.R_S_F_W_VT_inner = double_R_S_F_W_VT.clone();
        }
    }     

         // Right Storage Back Wall According Vertical Texture
         if (const_var.b_t_M_L.getObjectByName("R_S_B_W_VT")!=undefined) {
          if (params.p_v_w==true){
          let R_S_B_W_VT = const_var.b_t_M_L.getObjectByName("R_S_B_W_VT").clone();
          // let CB_R_S_4V_F_G_CloneMaterial= new THREE.MeshPhongMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          // let R_S_B_W_VT = new THREE.Mesh(CB_R_S_4V_F_G_Clone.geometry,CB_R_S_4V_F_G_CloneMaterial);
      
          let lowerLength = 0
          if (params.p_v_w==true && params.p_r_s == "1"){
            lowerLength = 0.3
          }

          let wallTexture = horizontalTexture;
          if (params.p_v_w==true){
            wallTexture = verticalTexture;
          } else {
            wallTexture = horizontalTexture;
          }

          
            let x_verticesPos = 0;
            if(params.cB_addStorage_right > params.p_w/2)
            {
                x_verticesPos = -(params.p_w/2 - params.cB_addStorage_right);
            }
            // let check = params.cB_addStorage_right.toString().split('')
            let quad_vertices =
            [
                  0,  roofMiddleHeight[params.p_r_p][params.p_w], -0.005,  
                  0,  roofMiddleHeight[params.p_r_p][params.p_w], 0.005, 
                  0, -params.p_h-lowerLength, -0.005,      
                  0, -params.p_h-lowerLength, 0.005,  
                  x_verticesPos,  roofMiddleHeight[params.p_r_p][params.p_w]-(params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12), 0.005,       
                  x_verticesPos,  roofMiddleHeight[params.p_r_p][params.p_w]-(params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12), -0.005,     
                  x_verticesPos, -params.p_h-lowerLength, 0.005,        
                  x_verticesPos, -params.p_h-lowerLength, -0.005, 
            ];
            let vertices = new Float32Array( quad_vertices );

            let index = new Uint32Array([
            0,2,1,
            2,3,1,
            4,6,5,
            6,7,5,
            4,5,1,      
            5,0,1,      
            7,6,2,        
            6,3,2,      
            5,7,0,      
            7,2,0,      
            1,3,4,      
            3,6,4       
          ]);

            if(params.p_v_w==true) {
                var cBRightStorageFGableUVS = new Float32Array([
                  0,0.5,
                  0,0.5,
                  0.5,0.5,
                  0.5,0.5,
                  0,0,
                  0,0,
                  0.5,0,
                  0.5,0,
                ]);
                } else {
                var cBRightStorageFGableUVS = new Float32Array([
              
                    0.5-(params.cB_addStorage_right-(params.p_w/2))/params.p_w, 0.0,
                    0.3, 0.0,
                    0.0, 0.5,
                    0.0, 0.5-(params.cB_addStorage_right-(params.p_w/2))/params.p_w,
                ]);
               }

            R_S_B_W_VT.geometry.setIndex( new THREE.BufferAttribute( index, 1 ) );
            R_S_B_W_VT.geometry.setAttribute( 'uv', new THREE.BufferAttribute( cBRightStorageFGableUVS, 2 ) );
           
            R_S_B_W_VT.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
            delete R_S_B_W_VT.geometry.attributes.normal;
            R_S_B_W_VT.geometry.computeVertexNormals();
            R_S_B_W_VT.name = "R_S_B_W_VT"
            R_S_B_W_VT.scale.set(1,1,1);
            R_S_B_W_VT.rotation.y = Math.PI
            R_S_B_W_VT.position.set(0,params.p_h,params.p_d/-2-0.065);
            if(params.p_r_s=="1"){
              R_S_B_W_VT.position.y =params.p_h+0.3
              }
             R_S_B_W_VT.visible =(params.cB_addStorage_check_right!=false && x_verticesPos !== 0 && params.singleSlope == false && params.canopy == false && params.p_b_w != "Close")?true:false;
             let cBLeftStorage4VFGVLoader = new THREE.TextureLoader();
             let cBLeftStorage4VFGVTexture = cBLeftStorage4VFGVLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture1) {
              R_S_B_W_VT.material.map = texture1;
              R_S_B_W_VT.material.bumpMap = texture1;
              R_S_B_W_VT.material.bumpScale = 0.02
              R_S_B_W_VT.material.metalness = 1
              R_S_B_W_VT.material.roughness = 0.5
              R_S_B_W_VT.material.anisotropy = 10;
              R_S_B_W_VT.material.map.wrapS = THREE.RepeatWrapping;
              R_S_B_W_VT.material.map.wrapT = THREE.RepeatWrapping;     
             if(params.p_v_w==true){
              R_S_B_W_VT.material.map.rotation = Math.PI/2
              // R_S_B_W_VT.material.map.repeat.set(Math.round(((params.cB_addStorage_right-(params.p_w/2))+((params.cB_addStorage_right-(params.p_w/2))*0.3))*2),1);
              let n = Math.round(((params.cB_addStorage_right-(params.p_w/2))+((params.cB_addStorage_right-(params.p_w/2))*0.3))*2)
              R_S_B_W_VT.material.map.repeat.set(2* Math.floor(n/2) + oddEven,1);
              // console.log(R_S_B_W_VT.material,"4gable")
                } else {
                    if(params.cB_addStorage_right < params.p_w/2){
                        R_S_B_W_VT.material.map.repeat.set(1,(roofMiddleHeight[params.p_r_p][2*params.p_w]/(10.75-(params.cB_addStorage_right*0.75)))*2);
                    }else{
                        R_S_B_W_VT.material.map.repeat.set(1,(roofMiddleHeight[params.p_r_p][2*params.p_w]/1.5)*2)
                    }
              }
              R_S_B_W_VT.material.needsUpdate = true;  
                                                                                                                                                                                    
          let innerWall = C_B_Walls.getObjectByName("R_S_B_W_VT_inner")
          innerWall.material.map = texture1.clone();
          innerWall.material.map.rotation = 0
          innerWall.material.color.set(0xFFFFFF)
          innerWall.material.map.wrapS = THREE.RepeatWrapping;
          innerWall.material.map.wrapT = THREE.RepeatWrapping;
          innerWall.material.map.offset.x = params.p_w;
          innerWall.material.map.offset.y = params.p_w;
          innerWall.material.map.rotation = Math.PI/2;
          innerWall.material.map.repeat.set(R_S_B_W_VT.material.map.repeat.x,R_S_B_W_VT.material.map.repeat.y);
          innerWall.material.map.needsUpdate = true 
          innerWall.material.needsUpdate = true 

          }
          )
          C_B_Walls.add(R_S_B_W_VT);
          const_var.wallsForCut.R_S_B_W_VT = R_S_B_W_VT.clone();
        }
      }     


       //Double Right Storage Back Wall According Vertical Texture
       if (C_B_Walls.getObjectByName("R_S_B_W_VT_inner")==undefined) {
          
        let R_S_B_W_VT_Clone = C_B_Walls.getObjectByName("R_S_B_W_VT");
        if(C_B_Walls.getObjectByName("R_S_B_W_VT") != undefined){
        let double_R_S_B_W_VT = R_S_B_W_VT_Clone.clone();
        
        let R_S_F_W_VT_Material= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
        double_R_S_B_W_VT = new THREE.Mesh(double_R_S_B_W_VT.geometry,R_S_F_W_VT_Material);
        double_R_S_B_W_VT.name = "R_S_B_W_VT_inner"
        double_R_S_B_W_VT.visible = (params.is_translusant==true)? false : R_S_B_W_VT_Clone.visible
        double_R_S_B_W_VT.scale.set(R_S_B_W_VT_Clone.scale.x , R_S_B_W_VT_Clone.scale.y , R_S_B_W_VT_Clone.scale.z);
        double_R_S_B_W_VT.position.set(R_S_B_W_VT_Clone.position.x , R_S_B_W_VT_Clone.position.y , R_S_B_W_VT_Clone.position.z+0.2);
        double_R_S_B_W_VT.rotation.set(R_S_B_W_VT_Clone.rotation.x , R_S_B_W_VT_Clone.rotation.y , R_S_B_W_VT_Clone.rotation.z)

        C_B_Walls.add(double_R_S_B_W_VT);
        const_var.wallsForCut.R_S_B_W_VT_inner = double_R_S_B_W_VT.clone();
        }
    }           

      // Right Storage Front 2nd Wall According Vertical Texture
      if (const_var.b_t_M_L.getObjectByName("R_S_F_2W_VT")!=undefined) {
        if (params.p_v_w==true){
        let R_S_F_2W_VT = const_var.b_t_M_L.getObjectByName("R_S_F_2W_VT").clone();
    
        let lowerLength = 0
        if (params.p_v_w==true && params.p_r_s == "1"){
          lowerLength = 0.3
        }

        let wallTextureL = horizontalTexture;
        if (params.p_v_w==true){
          wallTextureL = verticalTexture;
        } else {
          wallTextureL = horizontalTexture;
        }

        
          let x_verticesPosL = 0;
          let y_verticesPosL = roofMiddleHeight[params.p_r_p][params.p_w];
          if(params.cB_addStorage_right < params.p_w/2 || params.singleSlope == true || params.canopy == true)
          {
              x_verticesPosL = -(params.p_w/2 - params.cB_addStorage_right);
              // y_verticesPosL = ((params.cB_addStorage_right*((params.p_r_p/10)-(params.p_r_p/100+0.02))));
              y_verticesPosL = params.cB_addStorage_right*(params.p_r_p/12)
              
          }
          let f_s_hight = 0
          if(params.singleSlope == true || params.canopy == true){
            f_s_hight = 0;
            y_verticesPosL = - (Number(params.p_r_p)/12) * params.cB_addStorage_right;
          }
          let quad_verticesL =
          [

            -x_verticesPosL,  y_verticesPosL, -0.005,  
            -x_verticesPosL,  y_verticesPosL, 0.005, 
            -x_verticesPosL, -params.p_h-lowerLength, -0.005,      
            -x_verticesPosL, -params.p_h-lowerLength, 0.005,     
            params.p_w/2,  f_s_hight, 0.005,       
            params.p_w/2,  f_s_hight, -0.005,        
            params.p_w/2, -params.p_h-lowerLength, 0.005,        
            params.p_w/2, -params.p_h-lowerLength, -0.005, 
        
          ];

          let index = new Uint32Array([
            0,2,1,
            2,3,1,
            4,6,5,
            6,7,5,
            4,5,1,      
            5,0,1,      
            7,6,2,        
            6,3,2,      
            5,7,0,      
            7,2,0,      
            1,3,4,      
            3,6,4       
          ])

          let vertices = new Float32Array( quad_verticesL );
          if(params.p_v_w==true) {
              var cBRightStorageFGableUVSL = new Float32Array([

                0,0.5,
                0,0.5,
                0.5,0.5,
                0.5,0.5,
                0,0,
                0,0,
                0.5,0,
                0.5,0,
              ]);
              } else {
              var cBRightStorageFGableUVSL = new Float32Array([
            
                  0.5, -0.0,
                  0.5, 0.0,
                  0.0, 0.5+( params.cB_addStorage_right*0.0005),
                  0.0, 0.5+( params.cB_addStorage_right*0.013),
              ]);
             }

          R_S_F_2W_VT.geometry.setIndex( new THREE.BufferAttribute( index, 1 ) );
          R_S_F_2W_VT.geometry.setAttribute( 'uv', new THREE.BufferAttribute( cBRightStorageFGableUVSL, 2 ) );
         
          R_S_F_2W_VT.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
          delete R_S_F_2W_VT.geometry.attributes.normal;
          R_S_F_2W_VT.geometry.computeVertexNormals();
          
          R_S_F_2W_VT.name = "R_S_F_2W_VT";
          R_S_F_2W_VT.scale.set(1,1,1);
          // R_S_F_2W_VT.rotation.y = Math.PI
          R_S_F_2W_VT.position.set(0,params.p_h,params.p_d/2+0.065);
          if(params.p_r_s=="1"){
            R_S_F_2W_VT.position.y =params.p_h+0.3
            }
            if(params.p_v_w!=true){
              R_S_F_2W_VT.position.z = params.p_d/2+0.055
            }
           R_S_F_2W_VT.visible =(params.cB_addStorage_check_right!=false && params.p_f_w != "Close")?true:false;
           let cBLeftStorage4VFGVLLoader = new THREE.TextureLoader();
           let cBLeftStorage4VFGVLTexture = cBLeftStorage4VFGVLLoader.load( process.env.REACT_APP_BASE_URL+wallTextureL, function(texture1) {
            R_S_F_2W_VT.material.map = texture1;
            R_S_F_2W_VT.material.bumpMap = texture1;
            R_S_F_2W_VT.material.bumpScale = 0.02
            R_S_F_2W_VT.material.metalness = 1
            R_S_F_2W_VT.material.roughness = 0.5
            R_S_F_2W_VT.material.anisotropy = 10;
            R_S_F_2W_VT.material.map.wrapS = THREE.RepeatWrapping;
            R_S_F_2W_VT.material.map.wrapT = THREE.RepeatWrapping;      
           if(params.p_v_w==true){
            R_S_F_2W_VT.material.map.rotation = Math.PI/-2
            if(params.cB_addStorage_right < params.p_w/2 || params.singleSlope == true || params.canopy == true)
            {
            R_S_F_2W_VT.material.map.repeat.set(Math.round(((params.cB_addStorage_right/2)+(params.cB_addStorage_right/2/3))*4),1);
            }else{
              R_S_F_2W_VT.material.map.repeat.set(Math.round((((params.p_w/2)+(params.p_w/2/3))*2)),1);
            }
            // console.log(R_S_F_2W_VT.material.map,"4gable")
              } else {
                  if(params.cB_addStorage_right < params.p_w/2){
                      R_S_F_2W_VT.material.map.repeat.set(1,Math.round((params.p_h+roofMiddleHeight[params.p_r_p][params.p_w]+3)*2));
                  }else{
                      R_S_F_2W_VT.material.map.repeat.set(1,Math.round((params.p_h+roofMiddleHeight[params.p_r_p][params.p_w]+3)*2))
                  }
            }
            R_S_F_2W_VT.material.needsUpdate = true;
                                                                                                                                                                                                
          let innerWall = C_B_Walls.getObjectByName("R_S_F_2W_VT_inner")
          innerWall.material.map = texture1.clone();
          innerWall.material.map.rotation = 0
          innerWall.material.color.set(0xFFFFFF)
          innerWall.material.map.wrapS = THREE.RepeatWrapping;
          innerWall.material.map.wrapT = THREE.RepeatWrapping;
          innerWall.material.map.offset.x = params.p_w;
          innerWall.material.map.offset.y = params.p_w;
          innerWall.material.map.rotation = Math.PI/-2;
          innerWall.material.map.repeat.set(R_S_F_2W_VT.material.map.repeat.x,R_S_F_2W_VT.material.map.repeat.y);
          innerWall.material.map.needsUpdate = true 
          innerWall.material.needsUpdate = true 

        }
        )
        C_B_Walls.add(R_S_F_2W_VT);
        const_var.wallsForCut.R_S_F_2W_VT = R_S_F_2W_VT.clone();
      }
    }      

       //Double Right Storage Front 2nd Wall According Vertical Texture
       if (C_B_Walls.getObjectByName("R_S_F_2W_VT_inner")==undefined) {
          
        let R_S_F_2W_VT_Clone = C_B_Walls.getObjectByName("R_S_F_2W_VT");
        if(C_B_Walls.getObjectByName("R_S_F_2W_VT") != undefined){
        let double_R_S_F_2W_VT = R_S_F_2W_VT_Clone.clone();
        
        let R_S_F_W_VT_Material= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
        double_R_S_F_2W_VT = new THREE.Mesh(double_R_S_F_2W_VT.geometry,R_S_F_W_VT_Material);
        double_R_S_F_2W_VT.name = "R_S_F_2W_VT_inner";
        double_R_S_F_2W_VT.visible = (params.is_translusant==true)? false : R_S_F_2W_VT_Clone.visible
        double_R_S_F_2W_VT.scale.set(R_S_F_2W_VT_Clone.scale.x , R_S_F_2W_VT_Clone.scale.y , R_S_F_2W_VT_Clone.scale.z);
        double_R_S_F_2W_VT.position.set(R_S_F_2W_VT_Clone.position.x , R_S_F_2W_VT_Clone.position.y , R_S_F_2W_VT_Clone.position.z-0.2);
        double_R_S_F_2W_VT.rotation.set(R_S_F_2W_VT_Clone.rotation.x , R_S_F_2W_VT_Clone.rotation.y , R_S_F_2W_VT_Clone.rotation.z)

        C_B_Walls.add(double_R_S_F_2W_VT);
        const_var.wallsForCut.R_S_F_2W_VT_inner = double_R_S_F_2W_VT.clone();
        }
    }

      // Right Storage Back 2nd Wall According Vertical Texture
      if (const_var.b_t_M_L.getObjectByName("R_S_B_2W_VT")==undefined) {
        if (params.p_v_w==true){
        let R_S_B_2W_VT = const_var.b_t_M_L.getObjectByName("R_S_F_2W_VT").clone();
    
        let lowerLength = 0
        if (params.p_v_w==true && params.p_r_s == "1"){
          lowerLength = 0.3
        }

        let wallTextureL = horizontalTexture;
        if (params.p_v_w==true){
          wallTextureL = verticalTexture;
        } else {
          wallTextureL = horizontalTexture;
        }

        
          let x_verticesPosL = 0;
          let y_verticesPosL = roofMiddleHeight[params.p_r_p][params.p_w];
          if(params.cB_addStorage_right < params.p_w/2 || params.singleSlope == true || params.canopy == true)
          {
              x_verticesPosL = -(params.p_w/2 - params.cB_addStorage_right);
              // y_verticesPosL = ((params.cB_addStorage_right*((params.p_r_p/10)-(params.p_r_p/100+0.02))));
              y_verticesPosL = params.cB_addStorage_right*(params.p_r_p/12)
              
          }

          let f_s_hight = 0
          if(params.singleSlope == true || params.canopy == true){
            f_s_hight = -0.1
            y_verticesPosL = - (Number(params.p_r_p)/12) * params.cB_addStorage_right - 0.1;
          }

          let quad_verticesL =
          [

            -x_verticesPosL,  y_verticesPosL, -0.005,  
            -x_verticesPosL,  y_verticesPosL, 0.005, 
            -x_verticesPosL, -params.p_h-lowerLength, -0.005,      
            -x_verticesPosL, -params.p_h-lowerLength, 0.005,     
            params.p_w/2,  f_s_hight, 0.005,       
            params.p_w/2,  f_s_hight, -0.005,        
            params.p_w/2, -params.p_h-lowerLength, 0.005,        
            params.p_w/2, -params.p_h-lowerLength, -0.005,   
        
          ];

          let index = new Uint32Array([
            0,2,1,
            2,3,1,
            4,6,5,
            6,7,5,
            4,5,1,      
            5,0,1,      
            7,6,2,        
            6,3,2,      
            5,7,0,      
            7,2,0,      
            1,3,4,      
            3,6,4       
          ]);

          let vertices = new Float32Array( quad_verticesL );
          if(params.p_v_w==true) {
              var cBRightStorageFGableUVSL = new Float32Array([

                0,0.5,
                0,0.5,
                0.5,0.5,
                0.5,0.5,
                0,0,
                0,0,
                0.5,0,
                0.5,0,
              ]);
              } else {
              var cBRightStorageFGableUVSL = new Float32Array([
            
                  0.5, -0.0,
                  0.5, 0.0,
                  0.0, 0.5+( params.cB_addStorage_right*0.0005),
                  0.0, 0.5+( params.cB_addStorage_right*0.013),
              ]);
             }

          R_S_B_2W_VT.geometry.setIndex( new THREE.BufferAttribute( index, 1 ) );
          R_S_B_2W_VT.geometry.setAttribute( 'uv', new THREE.BufferAttribute( cBRightStorageFGableUVSL, 2 ) );
         
          R_S_B_2W_VT.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
          delete R_S_B_2W_VT.geometry.attributes.normal;
          R_S_B_2W_VT.geometry.computeVertexNormals();
          R_S_B_2W_VT.name = "R_S_B_2W_VT"
          R_S_B_2W_VT.scale.set(1,1,1);
          // R_S_B_2W_VT.rotation.y = Math.PI
          R_S_B_2W_VT.position.set(0,params.p_h,params.p_d/-2-0.065);
          if(params.p_r_s=="1"){
            R_S_B_2W_VT.position.y =params.p_h+0.3
            }
            if(params.p_v_w!=true){
              R_S_B_2W_VT.position.z = params.p_d/2+0.055
            }
           R_S_B_2W_VT.visible =(params.cB_addStorage_check_right!=false && params.p_b_w != "Close")?true:false;
           let cBLeftStorage4VFGVLLoader = new THREE.TextureLoader();
           let cBLeftStorage4VFGVLTexture = cBLeftStorage4VFGVLLoader.load( process.env.REACT_APP_BASE_URL+wallTextureL, function(texture1) {
            R_S_B_2W_VT.material.map = texture1;
            R_S_B_2W_VT.material.bumpMap = texture1;
            R_S_B_2W_VT.material.bumpScale = 0.02
            R_S_B_2W_VT.material.metalness = 1
            R_S_B_2W_VT.material.roughness = 0.5
            R_S_B_2W_VT.material.anisotropy = 10;
            R_S_B_2W_VT.material.map.wrapS = THREE.RepeatWrapping;
            R_S_B_2W_VT.material.map.wrapT = THREE.RepeatWrapping;      
           if(params.p_v_w==true){
            R_S_B_2W_VT.material.map.rotation = Math.PI/-2
            if(params.cB_addStorage_right < params.p_w/2 || params.singleSlope == true || params.canopy == true)
            {
            R_S_B_2W_VT.material.map.repeat.set(Math.round(((params.cB_addStorage_right/2)+(params.cB_addStorage_right/2/3))*4),1);
            }else{
              R_S_B_2W_VT.material.map.repeat.set(Math.round((((params.p_w/2)+(params.p_w/2/3))*2)),1);
            }
            // console.log(R_S_B_2W_VT.material.map,"4gable")
              } else {
                  if(params.cB_addStorage_right < params.p_w/2){
                      R_S_B_2W_VT.material.map.repeat.set(1,Math.round((params.p_h+roofMiddleHeight[params.p_r_p][params.p_w]+3)*2));
                  }else{
                      R_S_B_2W_VT.material.map.repeat.set(1,Math.round((params.p_h+roofMiddleHeight[params.p_r_p][params.p_w]+3)*2))
                  }
            }
            R_S_B_2W_VT.material.needsUpdate = true;
                                                                                                                                                                                                            
          let innerWall = C_B_Walls.getObjectByName("R_S_B_2W_VT_inner")
          innerWall.material.map = texture1.clone();
          innerWall.material.map.rotation = 0
          innerWall.material.color.set(0xFFFFFF)
          innerWall.material.map.wrapS = THREE.RepeatWrapping;
          innerWall.material.map.wrapT = THREE.RepeatWrapping;
          innerWall.material.map.offset.x = params.p_w;
          innerWall.material.map.offset.y = params.p_w;
          innerWall.material.map.rotation = Math.PI/-2;
          innerWall.material.map.repeat.set(R_S_B_2W_VT.material.map.repeat.x,R_S_B_2W_VT.material.map.repeat.y);
          innerWall.material.map.needsUpdate = true 
          innerWall.material.needsUpdate = true 

        }
        )
        C_B_Walls.add(R_S_B_2W_VT);
        const_var.wallsForCut.R_S_B_2W_VT = R_S_B_2W_VT.clone();
      }
    }    
    
       //Double Right Storage Back 2nd Wall According Vertical Texture
       if (C_B_Walls.getObjectByName("R_S_B_2W_VT_inner")==undefined) {
          
        let R_S_B_2W_VT_Clone = C_B_Walls.getObjectByName("R_S_B_2W_VT");
        if(C_B_Walls.getObjectByName("R_S_B_2W_VT") != undefined){
        let double_R_S_B_2W_VT = R_S_B_2W_VT_Clone.clone();
        
        let R_S_F_W_VT_Material= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
        double_R_S_B_2W_VT = new THREE.Mesh(double_R_S_B_2W_VT.geometry,R_S_F_W_VT_Material);
        double_R_S_B_2W_VT.name = "R_S_B_2W_VT_inner";
        double_R_S_B_2W_VT.visible = (params.is_translusant==true)? false : R_S_B_2W_VT_Clone.visible
        double_R_S_B_2W_VT.scale.set(R_S_B_2W_VT_Clone.scale.x , R_S_B_2W_VT_Clone.scale.y , R_S_B_2W_VT_Clone.scale.z);
        double_R_S_B_2W_VT.position.set(R_S_B_2W_VT_Clone.position.x , R_S_B_2W_VT_Clone.position.y , R_S_B_2W_VT_Clone.position.z+0.2);
        double_R_S_B_2W_VT.rotation.set(R_S_B_2W_VT_Clone.rotation.x , R_S_B_2W_VT_Clone.rotation.y , R_S_B_2W_VT_Clone.rotation.z)

        C_B_Walls.add(double_R_S_B_2W_VT);
        const_var.wallsForCut.R_S_B_2W_VT_inner = double_R_S_B_2W_VT.clone();
        }
    } 

  }

  function applyWallTexture (mesh,repeatX,repeatY,color) {
    // console.log(mesh,repeatX,repeatY,color);
    if (!mesh) return;
    const textureImg = (params.p_v_w) ? verticalTexture : horizontalTexture;
    const wallColor = color == "wallColor"? params.p_w_c.replace("#","0x"): color == "wallColor" ? wainscotTrimCalor : 0xFFFFFF;
    let material = mesh.material;
        loader.load(`${baseUrl}${textureImg}` , (wallTexture) => {
          wallTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
          material.map = wallTexture;
          material.bumpMap = wallTexture;
          material.bumpScale = 0.02
          material.metalness = 1
          material.roughness = 0.5
          material.anisotropy = 10;
          material.map.wrapS = THREE.RepeatWrapping;
          material.map.wrapT = THREE.RepeatWrapping;
          material.map.repeat.set(repeatX,repeatY);
          material.color.setHex( wallColor );
          material.needsUpdate = true;
        })
  }

  if(params.isBreezeway || params.cB_addStorage_check_front){
    /* Front storage Back Wall Gable */
    if (const_var.b_t_M_L.getObjectByName("f_S_b_Gable")!=undefined) {
     let frontStorageBackGable = const_var.b_t_M_L.getObjectByName("f_S_b_Gable").clone();
       if (params.p_v_w==true) {
           var f_S_GableUVS = new Float32Array([
              0.0, 0.5,
               0.0, 0.5,
               0.5, 0.0,
              -0.5, 0.0,
               0.5, 0.0,
              -0.5, 0.0,
           ]);
       } else {
           var f_S_GableUVS = new Float32Array([
              0.0, 1.0,
               0.0, 1.0,
               1.0, 0.0,
              -1.0, 0.0,
               1.0, 0.0,
              -1.0, 0.0,
           ]);
       }
       frontStorageBackGable.geometry.setAttribute( 'uv', new THREE.BufferAttribute( f_S_GableUVS, 2 ) );
       frontStorageBackGable.name = "f_S_b_Gable";
       frontStorageBackGable.scale.set(params.p_w,roofMiddleHeight[params.p_r_p][params.p_w],1);
       frontStorageBackGable.position.set(0,params.p_h,frontEndlength-(Number(params.cB_addStorage_front)));
       frontStorageBackGable.rotation.y = Math.PI
       frontStorageBackGable.visible = (params.cB_addStorage_check_front && (params.singleSlope!=true && params.canopy!=true))?true:false;
        if(params.p_r_s == "1") {
          frontStorageBackGable.position.set(0,params.p_h,frontEndlength-(Number(params.cB_addStorage_front)));
          frontStorageBackGable.scale.set(params.p_w,roofMiddleHeight[params.p_r_p][params.p_w]+0.5,1);
        }
       applyWallTexture(frontStorageBackGable, params.p_v_w ? 2*Math.round((((params.p_w/2)+(params.p_w/2/3))*2)/2):1, params.p_v_w ? 1 : (roofMiddleHeight[params.p_r_p][params.p_w]/1.5)*2,"wallColor" )   
      //  C_B_Walls.add(frontStorageBackGable);
      frontStorageWalls.add(frontStorageBackGable);
       const_var.wallsForCut.f_S_b_Gable = frontStorageBackGable.clone();
    }

    /* Front storage Back Wall Double Gable */
    if (frontStorageWalls.getObjectByName("f_S_b_Gable_inner")==undefined) {
      let frontStorageGableClone = frontStorageWalls.getObjectByName("f_S_b_Gable");
      if(frontStorageWalls.getObjectByName("f_S_b_Gable") != undefined){
        let doubleFrontStorageGable = frontStorageGableClone.clone();
        let doubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
        doubleFrontStorageGable = new THREE.Mesh(doubleFrontStorageGable.geometry,doubleMaterial);
        doubleFrontStorageGable.name = "f_S_b_Gable_inner";
        doubleFrontStorageGable.visible = (params.is_translusant==true)? false : frontStorageGableClone.visible
        doubleFrontStorageGable.scale.set(frontStorageGableClone.scale.x , frontStorageGableClone.scale.y , frontStorageGableClone.scale.z);
        doubleFrontStorageGable.position.set(frontStorageGableClone.position.x , frontStorageGableClone.position.y , (frontStorageGableClone.position.z+wallDistance));
        doubleFrontStorageGable.rotation.set(frontStorageGableClone.rotation.x , frontStorageGableClone.rotation.y , frontStorageGableClone.rotation.z)
        applyWallTexture(doubleFrontStorageGable, params.p_v_w ? 2*Math.round((((params.p_w/2)+(params.p_w/2/3))*2)/2):1, params.p_v_w ? 1 : (roofMiddleHeight[params.p_r_p][params.p_w]/1.5)*2,"greyColor" )   
        // C_B_Walls.add(doubleFrontStorageGable);
        frontStorageWalls.add(doubleFrontStorageGable);
        const_var.wallsForCut.f_S_b_Gable_inner = doubleFrontStorageGable.clone();
      }
    }

    /* Front storage Back Wall */
    if (const_var.b_t_M_L.getObjectByName("c_b_f_s_b_w")!=undefined) {
        let frontStorageBackWall = const_var.b_t_M_L.getObjectByName("c_b_f_s_b_w").clone();
          frontStorageBackWall.scale.set(params.p_w,params.p_h,1);
          frontStorageBackWall.scale.x = (params.singleSlope ? params.p_w -0.20: params.p_w)
          frontStorageBackWall.position.set(0,params.p_h/2,frontEndlength-(Number(params.cB_addStorage_front)));
          frontStorageBackWall.visible = (params.cB_addStorage_check_front)?true:false;
          frontStorageBackWall.name = "c_b_f_s_b_w";
          applyWallTexture(frontStorageBackWall, params.p_v_w ? 2*Math.round((((params.p_w/2)+(params.p_w/2/3))*2)/2):1, params.p_v_w ? 1 : Math.round((params.p_h/1.5)*2),"wallColor" )   
        // C_B_Walls.add(frontStorageBackWall);
        frontStorageWalls.add(frontStorageBackWall);
        // const_var.wallsForCut.c_b_f_s_b_w = frontStorageBackWall.clone();
    }

    // Front storage Back Double Wall
    if (frontStorageWalls.getObjectByName("c_b_f_s_b_w_inner")==undefined) {
      let frontStorageWallClone = frontStorageWalls.getObjectByName("c_b_f_s_b_w");
      if(frontStorageWalls.getObjectByName("c_b_f_s_b_w") != undefined){
        let frontStorageBackDWall = frontStorageWallClone.clone();
        let dMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
        frontStorageBackDWall = new THREE.Mesh(frontStorageBackDWall.geometry,dMaterial);
        frontStorageBackDWall.name = "c_b_f_s_b_w_inner";
        frontStorageBackDWall.visible = (params.is_translusant==true)? false : frontStorageWallClone.visible
        frontStorageBackDWall.scale.set(frontStorageWallClone.scale.x , frontStorageWallClone.scale.y , frontStorageWallClone.scale.z);
        frontStorageBackDWall.position.set(frontStorageWallClone.position.x , frontStorageWallClone.position.y , frontStorageWallClone.position.z+wallDistance);
        frontStorageBackDWall.rotation.set(frontStorageWallClone.rotation.x , frontStorageWallClone.rotation.y , frontStorageWallClone.rotation.z)
        applyWallTexture(frontStorageBackDWall, params.p_v_w ? 2*Math.round((((params.p_w/2)+(params.p_w/2/3))*2)/2):1, params.p_v_w ? 1 : Math.round((params.p_h/1.5)*2),"greyColor")   
        // C_B_Walls.add(frontStorageBackDWall);
        frontStorageWalls.add(frontStorageBackDWall);
        const_var.wallsForCut.c_b_f_s_b_w_inner = frontStorageBackDWall.clone();
      }
    }

    /* Front Storage Left Wall */
    if (const_var.b_t_M_L.getObjectByName("c_b_f_s_l_w")!=undefined) {
        let frontStorageLeftWall = const_var.b_t_M_L.getObjectByName("c_b_f_s_l_w").clone();
        frontStorageLeftWall.visible = (params.cB_addStorage_check_front)?true:false;
        frontStorageLeftWall.scale.set(params.cB_addStorage_front,params.p_h,1)
        frontStorageLeftWall.position.set( params.p_w /-2-0.04, params.p_h/2,(params.p_d/2)-params.cB_addStorage_front/2); 
        frontStorageLeftWall.name = "c_b_f_s_l_w"; 
        applyWallTexture(frontStorageLeftWall, params.p_v_w ? ((params.cB_addStorage_front/2)+(params.cB_addStorage_front/2/3))*2 : 1, params.p_v_w ? 1 : Math.round((params.p_h/1.5)*2),"wallColor" );
          // C_B_Walls.add(frontStorageLeftWall);
          frontStorageWalls.add(frontStorageLeftWall);
          // const_var.wallsForCut.c_b_f_s_l_w = frontStorageLeftWall.clone();
    }

    /* Front Storage Left Wall Double*/

    if (frontStorageWalls.getObjectByName("c_b_f_s_l_w_inner")==undefined) {
      let frontStorageLeftWallClone = frontStorageWalls.getObjectByName("c_b_f_s_l_w");
      if(frontStorageWalls.getObjectByName("c_b_f_s_l_w") != undefined){
        let frontStorageLeftDWall = frontStorageLeftWallClone.clone();
        let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
        frontStorageLeftDWall = new THREE.Mesh(frontStorageLeftDWall.geometry,leftDoubleMaterial);
        frontStorageLeftDWall.name = "c_b_f_s_l_w_inner"
        frontStorageLeftDWall.visible = (params.is_translusant==true)? false : frontStorageLeftWallClone.visible
        frontStorageLeftDWall.scale.set(frontStorageLeftWallClone.scale.x , frontStorageLeftWallClone.scale.y , frontStorageLeftWallClone.scale.z);
        frontStorageLeftDWall.position.set(frontStorageLeftWallClone.position.x+wallDistance , frontStorageLeftWallClone.position.y , frontStorageLeftWallClone.position.z);
        frontStorageLeftDWall.rotation.set(frontStorageLeftWallClone.rotation.x , frontStorageLeftWallClone.rotation.y , frontStorageLeftWallClone.rotation.z)
        applyWallTexture(frontStorageLeftDWall, params.p_v_w ? ((params.cB_addStorage_front/2)+(params.cB_addStorage_front/2/3))*2 : 1, params.p_v_w ? 1 : Math.round((params.p_h/1.5)*2),"greyColor" );
        // C_B_Walls.add(frontStorageLeftDWall);
        frontStorageWalls.add(frontStorageLeftDWall);
        const_var.wallsForCut.c_b_f_s_l_w_inner = frontStorageLeftDWall.clone();
      }
    }

    /*  Front Storage Right Wall*/
    if (const_var.b_t_M_L.getObjectByName("c_b_f_s_r_w")!=undefined) {
        let frontStorageRightWall = const_var.b_t_M_L.getObjectByName("c_b_f_s_r_w").clone();
         let wH = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w];
         let wP =  params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
         frontStorageRightWall.visible = (params.cB_addStorage_check_front)?true:false;
         frontStorageRightWall.scale.set(params.cB_addStorage_front,params.p_h,1)
         frontStorageRightWall.scale.y = (params.singleSlope)? wH : params.p_h
         frontStorageRightWall.position.x =(params.singleSlope)? params.p_w /2-0.1+0.04:params.p_w /2+0.04;
         frontStorageRightWall.position.z = (params.p_d/2)-params.cB_addStorage_front/2;
         frontStorageRightWall.position.y = (params.singleSlope)? wP:params.p_h/2; 
         frontStorageRightWall.rotation.z = Math.PI;
         frontStorageRightWall.name = "c_b_f_s_r_w";
        //  if(params.canopy){
        //   frontStorageRightWall.scale.y = params.p_h+((roofMiddleHeight[params.p_r_p][params.p_w])*2)
        //   frontStorageRightWall.position.y = (params.p_h+((roofMiddleHeight[params.p_r_p][params.p_w])*2))/2;
          
        // }
        applyWallTexture(frontStorageRightWall, params.p_v_w ? ((params.cB_addStorage_front/2)+(params.cB_addStorage_front/2/3))*2 : 1, params.p_v_w ? 1 : Math.round((params.p_h/1.5)*2),"wallColor" );
        // C_B_Walls.add(frontStorageRightWall);
        frontStorageWalls.add(frontStorageRightWall);
        // const_var.wallsForCut.c_b_f_s_r_w = frontStorageRightWall.clone();
    }

    /*  Front Storage Right Wall Double*/
    if (frontStorageWalls.getObjectByName("c_b_f_s_r_w_inner")==undefined) {
      let frontStorageRightWallClone = frontStorageWalls.getObjectByName("c_b_f_s_r_w");
      if (frontStorageWalls.getObjectByName("c_b_f_s_r_w") != undefined) {
        let frontStorageRightDWall = frontStorageRightWallClone.clone();
        let dMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
        frontStorageRightDWall = new THREE.Mesh(frontStorageRightDWall.geometry,dMaterial);
        frontStorageRightDWall.name = "c_b_f_s_r_w_inner"
        frontStorageRightDWall.visible = (params.is_translusant==true)? false : frontStorageRightWallClone.visible
        frontStorageRightDWall.scale.set(frontStorageRightWallClone.scale.x , frontStorageRightWallClone.scale.y , frontStorageRightWallClone.scale.z);
        frontStorageRightDWall.position.set(frontStorageRightWallClone.position.x-wallDistance , frontStorageRightWallClone.position.y , frontStorageRightWallClone.position.z);
        frontStorageRightDWall.rotation.set(frontStorageRightWallClone.rotation.x , frontStorageRightWallClone.rotation.y , frontStorageRightWallClone.rotation.z)
        applyWallTexture(frontStorageRightDWall, params.p_v_w ? ((params.cB_addStorage_front/2)+(params.cB_addStorage_front/2/3))*2 : 1, params.p_v_w ? 1 : Math.round((params.p_h/1.5)*2),"greyColor" );
        // C_B_Walls.add(frontStorageRightDWall);
        frontStorageWalls.add(frontStorageRightDWall);
        const_var.wallsForCut.c_b_f_s_r_w_inner = frontStorageRightDWall.clone();
      }
    }

  }
       
  if(params.p_w_c_n == true){
    /* Center Building Front Wall Wainscot*/
     if (const_var.b_t_M_L.getObjectByName("c_b_f_w_ws")!=undefined) {
        let frontWallWainscot = const_var.b_t_M_L.getObjectByName("c_b_f_w_ws").clone();
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }

            frontWallWainscot.visible = (params.p_f_w =="Close" && params.p_w_c_n == true)?true:false;
            frontWallWainscot.name = "c_b_f_w_ws";
            frontWallWainscot.position.x = 0;
            frontWallWainscot.position.z = params.p_d / 2 + 0.01+0.07;
            frontWallWainscot.position.y = 1.475;                   
            frontWallWainscot.scale.set(params.p_w,3,1);
            frontWallWainscot.scale.x = (params.singleSlope ? params.p_w -0.20: params.p_w)
            let wainscotWallLoader = new THREE.TextureLoader();
            let wainscotWallTexture = wainscotWallLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
            frontWallWainscot.material.morphNormals = true;
            frontWallWainscot.material.morphTargets = true;                                                       
            frontWallWainscot.material.map = texture;
            frontWallWainscot.material.bumpMap = texture;
            frontWallWainscot.material.bumpScale = 0.02
            frontWallWainscot.material.metalness = 1
            frontWallWainscot.material.roughness = 0.5
            frontWallWainscot.material.anisotropy = 10;
            frontWallWainscot.material.map.wrapS = THREE.RepeatWrapping;
            frontWallWainscot.material.map.wrapT = THREE.RepeatWrapping;
            if(params.p_v_w==true) {
              if(params.cB_addStorage_check_left == true){
                frontWallWainscot.material.map.rotation = -Math.PI
              }else{
                // frontWallWainscot.material.map.rotation = Math.PI
              }
                frontWallWainscot.material.map.repeat.set(2*Math.round((((params.p_w/2)+(params.p_w/2/3))*2)/2),1);
            } else  {
                frontWallWainscot.material.map.repeat.set(1,(3/1.5)*2);
            }
            frontWallWainscot.material.map.needsUpdate = true
            frontWallWainscot.material.needsUpdate = true
        }
        )
        C_B_Walls.add(frontWallWainscot);

        if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
          let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
          wainscotTrim.name = "c_b_f_w_ws_jtrim";
          wainscotTrim.material = wainscotTrim.material.clone();
          wainscotTrim.material.color.setHex(wainscotTrimCalor)
          wainscotTrim.visible = frontWallWainscot.visible
          wainscotTrim.rotation.y = Math.PI/-2
          wainscotTrim.scale.set(0.2,0.17, frontWallWainscot.scale.x);
          wainscotTrim.position.set(frontWallWainscot.position.x,frontWallWainscot.position.y*2,frontWallWainscot.position.z+0.008);
          C_B_Walls.add(wainscotTrim);
        }
    }
    /* Center Building Back Wall WainScote */
    if (const_var.b_t_M_L.getObjectByName("c_b_b_w_ws")!=undefined) {
        let backWallWainscot = const_var.b_t_M_L.getObjectByName("c_b_b_w_ws").clone();
    
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
        backWallWainscot.visible = ((params.p_b_w == "Close" && params.p_w_c_n == true)|| (params.p_u_c == true && params.p_w_c_n == true))?true:false;
        backWallWainscot.position.x = 0;
        backWallWainscot.position.z = params.p_d / -2 - 0.01-0.07;
        backWallWainscot.position.y = 1.475;
        backWallWainscot.scale.set(params.p_w,3,1);
        let wainscotWallLoader = new THREE.TextureLoader();
        let wainscotWallTexture = wainscotWallLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
            backWallWainscot.material.map = texture;
            backWallWainscot.material.bumpMap = texture;
            backWallWainscot.material.bumpScale = 0.02
            backWallWainscot.material.metalness = 1
            backWallWainscot.material.roughness = 0.5
            backWallWainscot.material.anisotropy = 10;
            backWallWainscot.material.map.wrapS = THREE.RepeatWrapping;
            backWallWainscot.material.map.wrapT = THREE.RepeatWrapping;
            backWallWainscot.material.map.offset.x = params.p_w;
            backWallWainscot.material.map.offset.y = params.p_w;
            if (params.p_v_w==true)  {
              backWallWainscot.material.map.rotation = Math.PI
              if(params.cB_addStorage_check_left == true){
                backWallWainscot.material.map.rotation = 0
              }
                backWallWainscot.material.map.repeat.set(2*Math.round((((params.p_w/2)+(params.p_w/2/3))*2)/2),1);
            } else {
                backWallWainscot.material.map.repeat.set(1,(3/1.5)*2);
            }       
            backWallWainscot.material.map.needsUpdate = true                
            backWallWainscot.material.needsUpdate = true                
        }
        )
        C_B_Walls.add(backWallWainscot);

        if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
          let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
          wainscotTrim.name = "c_b_b_w_ws_jtrim";
          wainscotTrim.material = wainscotTrim.material.clone();
          wainscotTrim.material.color.setHex(wainscotTrimCalor)
          wainscotTrim.visible = backWallWainscot.visible
          wainscotTrim.rotation.y = Math.PI/2
          wainscotTrim.scale.set(0.2,0.17, backWallWainscot.scale.x);
          wainscotTrim.position.set(backWallWainscot.position.x,backWallWainscot.position.y*2,backWallWainscot.position.z-0.008);
          C_B_Walls.add(wainscotTrim);
        }
    }
    /* Center Building Right Wall WainScote */
    if (const_var.b_t_M_L.getObjectByName("c_b_r_w_ws")!=undefined) {
        let rightWallWainscot = const_var.b_t_M_L.getObjectByName("c_b_r_w_ws").clone();
    
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
        rightWallWainscot.visible = ((params.p_r_w =="Close" && params.p_w_c_n == true)|| (params.cB_addStorage_check_right == true && params.p_w_c_n == true))?true:false;
        rightWallWainscot.position.x = (params.singleSlope)? params.p_w / 2 + 0.03 : params.p_w / 2 + 0.01+0.065;
        rightWallWainscot.position.z = 0;
        rightWallWainscot.position.y = 1.475;                       
        rightWallWainscot.scale.set(params.p_d,3,1);                    
        let wainscotWallLoader = new THREE.TextureLoader();
        let wainscotWallTexture = wainscotWallLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
            rightWallWainscot.material.map = texture;
            rightWallWainscot.material.bumpMap = texture;
            rightWallWainscot.material.bumpScale = 0.02
            rightWallWainscot.material.metalness = 1
            rightWallWainscot.material.roughness = 0.5
            rightWallWainscot.material.anisotropy = 10;
            rightWallWainscot.material.map.wrapS = THREE.RepeatWrapping;
            rightWallWainscot.material.map.wrapT = THREE.RepeatWrapping;
            rightWallWainscot.material.map.offset.x = params.p_w;
            rightWallWainscot.material.map.offset.y = params.p_w;
            if(params.p_v_w==true)
            {
                rightWallWainscot.material.map.repeat.set(((params.p_d/2)+(params.p_d/2/3))*2,1);
            }else {
                rightWallWainscot.material.map.repeat.set(1,(3/1.5)*2);
            }
            rightWallWainscot.material.map.needsUpdate = true     
            rightWallWainscot.material.needsUpdate = true     
        }
        )
        C_B_Walls.add(rightWallWainscot);

        if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
          let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
          wainscotTrim.name = "c_b_r_w_ws_jtrim";
          wainscotTrim.material = wainscotTrim.material.clone();
          wainscotTrim.material.color.setHex(wainscotTrimCalor)
          wainscotTrim.visible = rightWallWainscot.visible
          // wainscotTrim.rotation.y = Math.PI/2
          wainscotTrim.scale.set(0.2,0.17, rightWallWainscot.scale.x);
          wainscotTrim.position.set(rightWallWainscot.position.x+0.008,rightWallWainscot.position.y*2,rightWallWainscot.position.z);
          C_B_Walls.add(wainscotTrim);
        }
    }
    /* Center Building Left Wall WainScote */
    if (const_var.b_t_M_L.getObjectByName("c_b_l_w_ws")!=undefined) {
        let leftWallWainscot = const_var.b_t_M_L.getObjectByName("c_b_l_w_ws").clone();
    
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
        leftWallWainscot.visible = ((params.p_l_w =="Close" && params.p_w_c_n == true) ||(params.cB_addStorage_check_left == true && params.p_w_c_n == true) )?true:false;
        leftWallWainscot.position.x = params.p_w / -2 - 0.01-0.07;
        leftWallWainscot.position.z = 0;
        leftWallWainscot.position.y = 1.475;                        
        leftWallWainscot.scale.set(params.p_d,3,1);                     
        let wainscotWallLoader = new THREE.TextureLoader();
        let wainscotWallTexture = wainscotWallLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
            leftWallWainscot.material.map = texture;
            leftWallWainscot.material.bumpMap = texture;
            leftWallWainscot.material.bumpScale = 0.02
            leftWallWainscot.material.metalness = 1
            leftWallWainscot.material.roughness = 0.5
            leftWallWainscot.material.anisotropy = 10;
            leftWallWainscot.material.map.wrapS = THREE.RepeatWrapping;
            leftWallWainscot.material.map.wrapT = THREE.RepeatWrapping;
            leftWallWainscot.material.map.offset.x = params.p_w;
            leftWallWainscot.material.map.offset.y = params.p_w;
            if(params.p_v_w==true) {
              leftWallWainscot.material.map.rotation = Math.PI
                leftWallWainscot.material.map.repeat.set(((params.p_d/2)+(params.p_d/2/3))*2,1);
            } else {
                leftWallWainscot.material.map.repeat.set(1,(3/1.5)*2);
            }
            leftWallWainscot.material.map.needsUpdate = true 
            leftWallWainscot.material.needsUpdate = true 
        }
        )
        C_B_Walls.add(leftWallWainscot);

        if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
          let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
          wainscotTrim.name = "c_b_l_w_ws_jtrim";
          wainscotTrim.material = wainscotTrim.material.clone();
          wainscotTrim.material.color.setHex(wainscotTrimCalor)
          wainscotTrim.visible = leftWallWainscot.visible
          wainscotTrim.rotation.y = Math.PI
          wainscotTrim.scale.set(0.2,0.17, leftWallWainscot.scale.x);
          wainscotTrim.position.set(leftWallWainscot.position.x-0.008,leftWallWainscot.position.y*2,leftWallWainscot.position.z);
          C_B_Walls.add(wainscotTrim);
        }
    }
    /* Center Building Side combos Front Wall Wainscot*/
     if (const_var.b_t_M_L.getObjectByName("l_s_f_w_ws")!=undefined) {
        let sc_FrontWallWainscot = const_var.b_t_M_L.getObjectByName("l_s_f_w_ws").clone();
        sc_FrontWallWainscot.name = "c_b_l_s_f_w_ws";
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
        sc_FrontWallWainscot.visible = (params.cB_addStorage_check_left == true && params.p_w_c_n == true && params.p_f_w != "Close")?true:false;
        sc_FrontWallWainscot.position.z = params.p_d / 2 + 0.01+0.075;
        sc_FrontWallWainscot.position.y = 1.475;   
            if((params.p_w/2)>= params.cB_addStorage_left){
              sc_FrontWallWainscot.position.x = -(params.p_w/2-params.cB_addStorage_left/2);
              sc_FrontWallWainscot.scale.set(params.cB_addStorage_left,3,1);
            }else{
              sc_FrontWallWainscot.position.x = -params.p_w/4
              sc_FrontWallWainscot.scale.set(params.p_w/2,3,1);
            }

            if (params.cB_addStorage_check_right == true) {
              if((params.p_w/2)>= params.cB_addStorage_right){
              sc_FrontWallWainscot.position.x = params.p_w/2-params.cB_addStorage_right/2; 
              sc_FrontWallWainscot.scale.set((params.cB_addStorage_right),3,1);
              }else{
                sc_FrontWallWainscot.position.x = params.p_w/4
                sc_FrontWallWainscot.scale.set(params.p_w/2,3,1);
              }
              sc_FrontWallWainscot.rotation.y = Math.PI;   
              sc_FrontWallWainscot. visible = (params.cB_addStorage_check_right == true && params.p_w_c_n == true && params.p_f_w != "Close")?true:false;
              sc_FrontWallWainscot.name = "c_b_r_s_f_w_ws";
            }           
            let wainscotWallLoader = new THREE.TextureLoader();
            let wainscotWallTexture = wainscotWallLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
            sc_FrontWallWainscot.material.morphNormals = true;
            sc_FrontWallWainscot.material.morphTargets = true;                                                          
            sc_FrontWallWainscot.material.map = texture;
            sc_FrontWallWainscot.material.bumpMap = texture;
            sc_FrontWallWainscot.material.bumpScale = 0.02
            sc_FrontWallWainscot.material.metalness = 1
            sc_FrontWallWainscot.material.roughness = 0.5
            sc_FrontWallWainscot.material.anisotropy = 10;
            sc_FrontWallWainscot.material.map.wrapS = THREE.RepeatWrapping;
            sc_FrontWallWainscot.material.map.wrapT = THREE.RepeatWrapping;
            if(params.p_v_w==true) {
                sc_FrontWallWainscot.material.map.repeat.set(Math.round(((params.cB_addStorage_left)/1.5)*2),1);
                if (params.cB_addStorage_check_right == true) {
                  sc_FrontWallWainscot.material.map.repeat.set(Math.round(((params.cB_addStorage_right)/1.5)*2),1);
                }
            } else  {
                sc_FrontWallWainscot.material.map.repeat.set(1,(3/1.5)*2);
            }
            sc_FrontWallWainscot.material.map.needsUpdate = true 
            sc_FrontWallWainscot.material.needsUpdate = true 
        }
        )
        C_B_Walls.add(sc_FrontWallWainscot);

        if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
          let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
          wainscotTrim.name = sc_FrontWallWainscot.name + "_jtrim";
          wainscotTrim.material = wainscotTrim.material.clone();
          wainscotTrim.material.color.setHex(wainscotTrimCalor)
          wainscotTrim.visible = sc_FrontWallWainscot.visible
          wainscotTrim.rotation.y = Math.PI/-2
          wainscotTrim.scale.set(0.2,0.17, sc_FrontWallWainscot.scale.x);
          wainscotTrim.position.set(sc_FrontWallWainscot.position.x,sc_FrontWallWainscot.position.y*2,sc_FrontWallWainscot.position.z+0.008);
          C_B_Walls.add(wainscotTrim);
        }
    }
      /* Center Building Side combos side Wall Wainscot*/
      if (const_var.b_t_M_L.getObjectByName("l_s_s_w_ws") !=undefined) {
        let sc_SideWallWainscot = const_var.b_t_M_L.getObjectByName("l_s_s_w_ws").clone();
        // let sc_SideWallWainscotMaterial= new THREE.MeshPhongMaterial({  side: THREE.DoubleSide,color: 0xCFCFCF });
        // let sc_SideWallWainscot = new THREE.Mesh(c_b_l_w_ws_clone.geometry,sc_SideWallWainscotMaterial);

        sc_SideWallWainscot.name = "c_b_l_s_r_w_ws";
      
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
            sc_SideWallWainscot.visible = (params.cB_addStorage_check_left ==true && params.p_w_c_n == true)?true:false;
            sc_SideWallWainscot.position.x =  -(params.p_w/2-params.cB_addStorage_left) +0.075;
            sc_SideWallWainscot.position.z = 0;
            sc_SideWallWainscot.position.y = 1.475;     
            sc_SideWallWainscot.scale.set(params.p_d,3,1);
            sc_SideWallWainscot.rotation.y = Math.PI/2 ;
            if (params.cB_addStorage_check_right == true) {
              sc_SideWallWainscot.position.x = params.p_w /2-params.cB_addStorage_right -0.075;
              sc_SideWallWainscot.position.z =0;
              sc_SideWallWainscot.position.y = 1.475;   
              sc_SideWallWainscot.rotation.y = Math.PI/-2 ;
              sc_SideWallWainscot.scale.set((params.p_d),3,1);
              sc_SideWallWainscot. visible = (params.cB_addStorage_check_right ==true && params.p_w_c_n == true)?true:false;
              sc_SideWallWainscot.name = "c_b_r_s_l_w_ws";
            }           
            let wainscotWallLoader = new THREE.TextureLoader();
            let wainscotWallTexture = wainscotWallLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
            // sc_SideWallWainscot.material.morphNormals = true;
            // sc_SideWallWainscot.material.morphTargets = true;                                                        
            sc_SideWallWainscot.material.map = texture;
            sc_SideWallWainscot.material.bumpMap = texture;
            sc_SideWallWainscot.material.bumpScale = 0.02
            sc_SideWallWainscot.material.metalness = 1
            sc_SideWallWainscot.material.roughness = 0.5
            sc_SideWallWainscot.material.anisotropy = 10;
            sc_SideWallWainscot.material.map.wrapS = THREE.RepeatWrapping;
            sc_SideWallWainscot.material.map.wrapT = THREE.RepeatWrapping;
            if(params.p_v_w==true) {
              if(sc_SideWallWainscot.name == "c_b_r_s_l_w_ws"){
                sc_SideWallWainscot.material.map.rotation = Math.PI;
              }
                sc_SideWallWainscot.material.map.repeat.set(((params.p_d/2)+(params.p_d/2/3))*2,1);
            } else  {
                sc_SideWallWainscot.material.map.repeat.set(1,(3/1.5)*2);
            }
            sc_SideWallWainscot.material.map.needsUpdate = true
            sc_SideWallWainscot.material.needsUpdate = true
        }
        )
        C_B_Walls.add(sc_SideWallWainscot);

        if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
          let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
          wainscotTrim.name = "c_b_l_s_r_w_ws_jtrim";
          wainscotTrim.material = wainscotTrim.material.clone();
          wainscotTrim.material.color.setHex(wainscotTrimCalor)
          wainscotTrim.visible = sc_SideWallWainscot.visible
          wainscotTrim.scale.set(0.2,0.17, sc_SideWallWainscot.scale.x);
          wainscotTrim.position.set(sc_SideWallWainscot.position.x+0.008,sc_SideWallWainscot.position.y*2,sc_SideWallWainscot.position.z);
          if (params.cB_addStorage_check_right == true) {
            wainscotTrim.name = "c_b_r_s_l_w_ws_jtrim";
            wainscotTrim.material = wainscotTrim.material.clone();
            wainscotTrim.rotation.y = Math.PI
            wainscotTrim.position.x = sc_SideWallWainscot.position.x-0.008
          }
          C_B_Walls.add(wainscotTrim);
        }
    }
      /* Center Building Side combos back Wall Wainscot*/
      if (const_var.b_t_M_L.getObjectByName("l_s_b_w_ws")==undefined) {
        let L_S_B_2W_VTobj;
        let sc_BackWallWainscot = const_var.b_t_M_L.getObjectByName("l_s_f_w_ws").clone();
        sc_BackWallWainscot.name = "c_b_l_s_b_w_ws";
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
        sc_BackWallWainscot.visible = (params.cB_addStorage_check_left == true && params.p_w_c_n == true && params.p_b_w != "Close")?true:false;
        sc_BackWallWainscot.position.z = -(params.p_d / 2 + 0.01+0.075);
        sc_BackWallWainscot.position.y = 1.475;   
            if((params.p_w/2)>= params.cB_addStorage_left){
              sc_BackWallWainscot.position.x = -(params.p_w/2-params.cB_addStorage_left/2);
              sc_BackWallWainscot.scale.set(params.cB_addStorage_left,3,1);
            }else{
              sc_BackWallWainscot.position.x = -params.p_w/4
              sc_BackWallWainscot.scale.set(params.p_w/2,3,1);
            }

            if (params.cB_addStorage_check_right == true) {
              if((params.p_w/2)>= params.cB_addStorage_right){
              sc_BackWallWainscot.position.x = params.p_w/2-params.cB_addStorage_right/2; 
              sc_BackWallWainscot.scale.set((params.cB_addStorage_right),3,1);
              }else{
                sc_BackWallWainscot.position.x = params.p_w/4
                sc_BackWallWainscot.scale.set(params.p_w/2,3,1);
              }
              sc_BackWallWainscot.rotation.y = Math.PI;   
              sc_BackWallWainscot. visible = (params.cB_addStorage_check_right == true && params.p_w_c_n == true && params.p_b_w != "Close")?true:false;
              sc_BackWallWainscot.name = "c_b_r_s_b_w_ws";
            }          
            let wainscotWallLoader = new THREE.TextureLoader();
            let wainscotWallTexture = wainscotWallLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
            sc_BackWallWainscot.material.morphNormals = true;
            sc_BackWallWainscot.material.morphTargets = true;                                                           
            sc_BackWallWainscot.material.map = texture;
            sc_BackWallWainscot.material.bumpMap = texture;
            sc_BackWallWainscot.material.bumpScale = 0.02
            sc_BackWallWainscot.material.metalness = 1
            sc_BackWallWainscot.material.roughness = 0.5
            sc_BackWallWainscot.material.anisotropy = 10;
            sc_BackWallWainscot.material.map.wrapS = THREE.RepeatWrapping;
            sc_BackWallWainscot.material.map.wrapT = THREE.RepeatWrapping;
            if(params.p_v_w==true) {
              if(C_B_Walls.getObjectByName("L_S_B_2W_VT") != undefined && params.cB_addStorage_check_left == true){
                L_S_B_2W_VTobj = C_B_Walls.getObjectByName("L_S_B_2W_VT").material.map.repeat.x
              }
              if(C_B_Walls.getObjectByName("R_S_B_2W_VT") != undefined && params.cB_addStorage_check_right == true){
                L_S_B_2W_VTobj = C_B_Walls.getObjectByName("R_S_B_2W_VT").material.map.repeat.x
              }
                sc_BackWallWainscot.material.map.rotation = Math.PI
                sc_BackWallWainscot.material.map.repeat.set(L_S_B_2W_VTobj/2,1);
            } else  {
                sc_BackWallWainscot.material.map.repeat.set(1,(3/1.5)*2);
            }
            sc_BackWallWainscot.material.map.needsUpdate = true
            sc_BackWallWainscot.material.needsUpdate = true
        }
        )
        C_B_Walls.add(sc_BackWallWainscot);

        if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
          let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
          wainscotTrim.name = sc_BackWallWainscot.name + "_jtrim";
          wainscotTrim.material = wainscotTrim.material.clone();
          wainscotTrim.material.color.setHex(wainscotTrimCalor)
          wainscotTrim.visible = sc_BackWallWainscot.visible
          wainscotTrim.rotation.y = Math.PI/2
          wainscotTrim.scale.set(0.2,0.17, sc_BackWallWainscot.scale.x);
          wainscotTrim.position.set(sc_BackWallWainscot.position.x,sc_BackWallWainscot.position.y*2,sc_BackWallWainscot.position.z-0.008);
          C_B_Walls.add(wainscotTrim);
        }
    }

          /* Center Building Side combos front 2nd Wall Wainscot*/
          if (const_var.b_t_M_L.getObjectByName("l_s_f_2w_ws")!=undefined) {
            let L_S_B_2W_VTobj;
            let l_s_f_2w_ws = const_var.b_t_M_L.getObjectByName("l_s_f_2w_ws").clone();
            l_s_f_2w_ws.name = "c_b_l_s_f_2w_ws";
            let wallTexture = horizontalTexture;
            if (params.p_v_w==true){
              wallTexture = verticalTexture;
            } else {
              wallTexture = horizontalTexture;
            }
                l_s_f_2w_ws.visible = ((params.p_w/2)<= params.cB_addStorage_left && params.cB_addStorage_check_left && params.p_w_c_n == true && params.p_f_w != "Close")?true:false;
                l_s_f_2w_ws.position.x = ((params.cB_addStorage_left)-(params.p_w/2))/2;
                l_s_f_2w_ws.position.z = params.p_d / 2 + 0.01+0.075;
                l_s_f_2w_ws.position.y = 1.475;     
                l_s_f_2w_ws.scale.set(((params.cB_addStorage_left)-(params.p_w/2)),3,1);
                l_s_f_2w_ws.rotation.y = Math.PI

                if (params.cB_addStorage_check_right == true) {
                  l_s_f_2w_ws.position.x = -(((params.cB_addStorage_right)-(params.p_w/2))/2);
                  l_s_f_2w_ws.scale.set(Math.abs(-((params.cB_addStorage_right)-(params.p_w/2))),3,1);
                  l_s_f_2w_ws. visible = ((params.p_w/2)<= params.cB_addStorage_right && params.cB_addStorage_check_right && params.p_w_c_n == true && params.p_f_w != "Close")?true:false;
                  l_s_f_2w_ws.name = "c_b_r_s_f_2w_ws";
                }     
                
                if (l_s_f_2w_ws.scale.x === 0) {
                  l_s_f_2w_ws.scale.x = 1;
                  l_s_f_2w_ws.visible = false;
                }
                let wainscotWallLoader = new THREE.TextureLoader();
                let wainscotWallTexture = wainscotWallLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                l_s_f_2w_ws.material.morphNormals = true;
                l_s_f_2w_ws.material.morphTargets = true;                                                           
                l_s_f_2w_ws.material.map = texture;
                l_s_f_2w_ws.material.bumpMap = texture;
                l_s_f_2w_ws.material.bumpScale = 0.02
                l_s_f_2w_ws.material.metalness = 1
                l_s_f_2w_ws.material.roughness = 0.5
                l_s_f_2w_ws.material.anisotropy = 10;
                l_s_f_2w_ws.material.map.wrapS = THREE.RepeatWrapping;
                l_s_f_2w_ws.material.map.wrapT = THREE.RepeatWrapping;
                if(params.p_v_w==true) {
                  if(C_B_Walls.getObjectByName("L_S_B_W_VT") != undefined && params.cB_addStorage_check_left == true){
                    L_S_B_2W_VTobj = C_B_Walls.getObjectByName("L_S_B_W_VT").material.map.repeat.x
                  }
                  if (C_B_Walls.getObjectByName("R_S_F_W_VT") != undefined  && params.cB_addStorage_check_right == true) {
                    L_S_B_2W_VTobj = C_B_Walls.getObjectByName("R_S_F_W_VT").material.map.repeat.x
                  }
                    l_s_f_2w_ws.material.map.repeat.set(L_S_B_2W_VTobj/2,1);
                } else  {
                    l_s_f_2w_ws.material.map.repeat.set(1,(3/1.5)*2);
                }
                l_s_f_2w_ws.material.map.needsUpdate = true
                l_s_f_2w_ws.material.needsUpdate = true
            }
            )
            C_B_Walls.add(l_s_f_2w_ws);

            if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
              let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
              wainscotTrim.name = "c_b_l_s_f_2w_ws_jtrim";
              if (params.cB_addStorage_check_right == true) {
                wainscotTrim.name = "c_b_r_s_f_2w_ws_jtrim";
              }
              wainscotTrim.material = wainscotTrim.material.clone();
              wainscotTrim.material.color.setHex(wainscotTrimCalor)
              wainscotTrim.visible = l_s_f_2w_ws.visible
              wainscotTrim.rotation.y = Math.PI/-2
              wainscotTrim.scale.set(0.2,0.17, l_s_f_2w_ws.scale.x);
              wainscotTrim.position.set(l_s_f_2w_ws.position.x,l_s_f_2w_ws.position.y*2,l_s_f_2w_ws.position.z+0.008);
              C_B_Walls.add(wainscotTrim);
            }
        }

          /* Center Building Side combos back 2nd Wall Wainscot*/
          if (const_var.b_t_M_L.getObjectByName("l_s_b_2w_ws")==undefined) {
            let L_S_B_2W_VTobj;
            let l_s_b_2w_ws = const_var.b_t_M_L.getObjectByName("l_s_f_2w_ws").clone();
            l_s_b_2w_ws.name = "c_b_l_s_b_2w_ws";
            let wallTexture = horizontalTexture;
            if (params.p_v_w==true){
              wallTexture = verticalTexture;
            } else {
              wallTexture = horizontalTexture;
            }
                l_s_b_2w_ws.visible = ((params.p_w/2)<= params.cB_addStorage_left && params.cB_addStorage_check_left && params.p_w_c_n == true && params.p_b_w != "Close")?true:false;
                l_s_b_2w_ws.position.x = ((params.cB_addStorage_left)-(params.p_w/2))/2;
                l_s_b_2w_ws.position.z = -(params.p_d / 2 + 0.01+0.075);
                l_s_b_2w_ws.position.y = 1.475;     
                l_s_b_2w_ws.scale.set(((params.cB_addStorage_left)-(params.p_w/2)),3,1);
                l_s_b_2w_ws.rotation.y = Math.PI

                if (params.cB_addStorage_check_right == true) {
                  l_s_b_2w_ws.position.x = -(((params.cB_addStorage_right)-(params.p_w/2))/2);
                  l_s_b_2w_ws.scale.set(Math.abs(-((params.cB_addStorage_right)-(params.p_w/2))),3,1);
                  l_s_b_2w_ws. visible = ((params.p_w/2)<= params.cB_addStorage_right && params.cB_addStorage_check_right && params.p_w_c_n == true && params.p_b_w != "Close")?true:false;
                  l_s_b_2w_ws.name = "c_b_r_s_b_2w_ws";
                }     
                
                if (l_s_b_2w_ws.scale.x === 0) {
                  l_s_b_2w_ws.visible = false;
                  l_s_b_2w_ws.scale.x = 1;
                }
                let wainscotWallLoader = new THREE.TextureLoader();
                let wainscotWallTexture = wainscotWallLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
                l_s_b_2w_ws.material.morphNormals = true;
                l_s_b_2w_ws.material.morphTargets = true;                                                           
                l_s_b_2w_ws.material.map = texture;
                l_s_b_2w_ws.material.bumpMap = texture;
                l_s_b_2w_ws.material.bumpScale = 0.02
                l_s_b_2w_ws.material.metalness = 1
                l_s_b_2w_ws.material.roughness = 0.5
                l_s_b_2w_ws.material.anisotropy = 10;
                l_s_b_2w_ws.material.map.wrapS = THREE.RepeatWrapping;
                l_s_b_2w_ws.material.map.wrapT = THREE.RepeatWrapping;
                if(params.p_v_w==true) {
                  if(C_B_Walls.getObjectByName("L_S_B_W_VT") != undefined && params.cB_addStorage_check_left == true){
                    L_S_B_2W_VTobj = C_B_Walls.getObjectByName("L_S_B_W_VT").material.map.repeat.x
                  }
                  if (C_B_Walls.getObjectByName("R_S_B_W_VT") != undefined  && params.cB_addStorage_check_right == true) {
                    L_S_B_2W_VTobj = C_B_Walls.getObjectByName("R_S_B_W_VT").material.map.repeat.x
                  }
                    l_s_b_2w_ws.material.map.repeat.set(L_S_B_2W_VTobj/2,1);
                } else  {
                    l_s_b_2w_ws.material.map.repeat.set(1,(3/1.5)*2);
                }
                l_s_b_2w_ws.material.map.needsUpdate = true
                l_s_b_2w_ws.material.needsUpdate = true
            }
            )
            C_B_Walls.add(l_s_b_2w_ws);

            if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
              let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
              wainscotTrim.name = "c_b_l_s_b_2w_ws_jtrim";
              if (params.cB_addStorage_check_right == true) {
                wainscotTrim.name = "c_b_r_s_b_2w_ws_jtrim";
              }
              wainscotTrim.material = wainscotTrim.material.clone();
              wainscotTrim.material.color.setHex(wainscotTrimCalor)
              wainscotTrim.visible = l_s_b_2w_ws.visible
              wainscotTrim.rotation.y = Math.PI/2
              wainscotTrim.scale.set(0.2,0.17, l_s_b_2w_ws.scale.x);
              wainscotTrim.position.set(l_s_b_2w_ws.position.x,l_s_b_2w_ws.position.y*2,l_s_b_2w_ws.position.z-0.008);
              C_B_Walls.add(wainscotTrim);
            }
        }

    /* Center Building Back Storage Front Wall Wainscot*/
     if (const_var.b_t_M_L.getObjectByName("c_b_f_s_w_ws")!=undefined) {
        let frontStoreWallWainscot = const_var.b_t_M_L.getObjectByName("c_b_f_s_w_ws").clone();
        // let frontStoreWallWainscotMaterial= new THREE.MeshPhongMaterial({  side: THREE.DoubleSide,color: 0xCFCFCF });
        // let frontStoreWallWainscot = new THREE.Mesh(c_b_f_w_ws.geometry,frontStoreWallWainscotMaterial);
        frontStoreWallWainscot.name = "c_b_f_s_w_ws";
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }

            frontStoreWallWainscot.visible = (params.p_u_c==true && params.p_w_c_n == true)?true:false;
            frontStoreWallWainscot.position.x = 0;
            // frontStoreWallWainscot.position.z = (leng+params.p_u_t)+0.06;
            frontStoreWallWainscot.position.z = (leng+(parseInt(params.p_u_t))+0.075);
            frontStoreWallWainscot.position.y = 1.475;                
            frontStoreWallWainscot.scale.set(params.p_w,3,1);
            let wainscotWallLoader = new THREE.TextureLoader();
            let wainscotWallTexture = wainscotWallLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
            frontStoreWallWainscot.material.morphNormals = true;
            frontStoreWallWainscot.material.morphTargets = true;                                                        
            frontStoreWallWainscot.material.map = texture;
            frontStoreWallWainscot.material.bumpMap = texture;
            frontStoreWallWainscot.material.bumpScale = 0.02
            frontStoreWallWainscot.material.metalness = 1
            frontStoreWallWainscot.material.roughness = 0.5
            frontStoreWallWainscot.material.anisotropy = 10;
            frontStoreWallWainscot.material.map.wrapS = THREE.RepeatWrapping;
            frontStoreWallWainscot.material.map.wrapT = THREE.RepeatWrapping;
            if(params.p_v_w==true) {
                frontStoreWallWainscot.material.map.repeat.set(2*Math.round((((params.p_w/2)+(params.p_w/2/3))*2)/2),1);
            } else  {
                frontStoreWallWainscot.material.map.repeat.set(1,(3/1.5)*2);
            }
            frontStoreWallWainscot.material.map.needsUpdate = true
            frontStoreWallWainscot.material.needsUpdate = true
        }
        )
        C_B_Walls.add(frontStoreWallWainscot);

        if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
          let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
          wainscotTrim.name = "c_b_f_s_w_ws_jtrim";
          wainscotTrim.material = wainscotTrim.material.clone();
          wainscotTrim.material.color.setHex(wainscotTrimCalor)
          wainscotTrim.visible = frontStoreWallWainscot.visible
          wainscotTrim.rotation.y = Math.PI/-2
          wainscotTrim.scale.set(0.2,0.17, frontStoreWallWainscot.scale.x);
          wainscotTrim.position.set(frontStoreWallWainscot.position.x,frontStoreWallWainscot.position.y*2,frontStoreWallWainscot.position.z+0.008);
          C_B_Walls.add(wainscotTrim);
        }
    }
    /* Center Building Back Storage Right Wall WainScote */
    if (const_var.b_t_M_L.getObjectByName("c_b_r_s_w_ws")!=undefined) {
        let rightStoreWallWainscot = const_var.b_t_M_L.getObjectByName("c_b_r_s_w_ws").clone();
        // let rightStoreWallWainscotMaterial= new THREE.MeshPhongMaterial({  side: THREE.DoubleSide,color: 0xCFCFCF });
        // let rightStoreWallWainscot = new THREE.Mesh(c_b_r_w_ws.geometry,rightStoreWallWainscotMaterial);
        rightStoreWallWainscot.name = "c_b_r_s_w_ws";
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
        rightStoreWallWainscot.visible = ((params.p_u_c==true && params.p_w_c_n == true))?true:false;
        rightStoreWallWainscot.position.x = params.p_w / 2 + 0.01+0.06;
        rightStoreWallWainscot.position.z = (params.p_d/-2)+params.p_u_t/2;;
        rightStoreWallWainscot.position.y = 1.475;    
        rightStoreWallWainscot.rotation.y = Math.PI/2;            
        rightStoreWallWainscot.scale.set(params.p_u_t,3,1);     

        let wainscotWallLoader = new THREE.TextureLoader();
        let wainscotWallTexture = wainscotWallLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
            rightStoreWallWainscot.material.map = texture;
            rightStoreWallWainscot.material.bumpMap = texture;
            rightStoreWallWainscot.material.bumpScale = 0.02
            rightStoreWallWainscot.material.metalness = 1
            rightStoreWallWainscot.material.roughness = 0.5
            rightStoreWallWainscot.material.anisotropy = 10;
            rightStoreWallWainscot.material.map.wrapS = THREE.RepeatWrapping;
            rightStoreWallWainscot.material.map.wrapT = THREE.RepeatWrapping;
            rightStoreWallWainscot.material.map.offset.x = params.p_w;
            rightStoreWallWainscot.material.map.offset.y = params.p_w;
            if(params.p_v_w==true)
            {
                rightStoreWallWainscot.material.map.repeat.set(((params.p_u_t/2)+(params.p_u_t/2/3))*2,1);
            }else {
                rightStoreWallWainscot.material.map.repeat.set(1,(3/1.5)*2);
            }
            rightStoreWallWainscot.material.map.needsUpdate = true
            rightStoreWallWainscot.material.needsUpdate = true
        }
        )
        C_B_Walls.add(rightStoreWallWainscot);

        if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
          let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
          wainscotTrim.name = "c_b_r_s_w_ws_jtrim";
          wainscotTrim.material = wainscotTrim.material.clone();
          wainscotTrim.material.color.setHex(wainscotTrimCalor)
          wainscotTrim.visible = rightStoreWallWainscot.visible
          // wainscotTrim.rotation.y = Math.PI/2
          wainscotTrim.scale.set(0.2,0.17, rightStoreWallWainscot.scale.x);
          wainscotTrim.position.set(rightStoreWallWainscot.position.x+0.008,rightStoreWallWainscot.position.y*2,rightStoreWallWainscot.position.z);
          C_B_Walls.add(wainscotTrim);
        }
    }
   /* Center Building Back Storage Left Wall WainScote */
    if (const_var.b_t_M_L.getObjectByName("b_s_l_w_ws")==undefined) {
        let leftStoreWallWainscot = const_var.b_t_M_L.getObjectByName("c_b_r_s_w_ws").clone();
        leftStoreWallWainscot.name = "c_b_l_s_w_ws";
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
        leftStoreWallWainscot.visible = (params.p_u_c==true && params.p_w_c_n == true)?true:false;
        leftStoreWallWainscot.position.x = params.p_w / -2 - 0.01-0.06;
        leftStoreWallWainscot.position.z = (params.p_d/-2)+params.p_u_t/2;
        leftStoreWallWainscot.position.y = 1.475;     
        leftStoreWallWainscot.rotation.y = Math.PI/2;        
        leftStoreWallWainscot.scale.set(params.p_u_t,3,1);      
        let wainscotWallLoader = new THREE.TextureLoader();
        let wainscotWallTexture = wainscotWallLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(texture) {
            leftStoreWallWainscot.material.map = texture;
            leftStoreWallWainscot.material.bumpMap = texture;
            leftStoreWallWainscot.material.bumpScale = 0.02
            leftStoreWallWainscot.material.metalness = 1
            leftStoreWallWainscot.material.roughness = 0.5
            leftStoreWallWainscot.material.anisotropy = 10;
            leftStoreWallWainscot.material.map.wrapS = THREE.RepeatWrapping;
            leftStoreWallWainscot.material.map.wrapT = THREE.RepeatWrapping;
            leftStoreWallWainscot.material.map.offset.x = params.p_w;
            leftStoreWallWainscot.material.map.offset.y = params.p_w;
            if(params.p_v_w==true) {
                leftStoreWallWainscot.material.map.repeat.set(((params.p_u_t/2)+(params.p_u_t/2/3))*2,1);
            } else {
                leftStoreWallWainscot.material.map.repeat.set(1,(3/1.5)*2);
            }
            leftStoreWallWainscot.material.map.needsUpdate = true
            leftStoreWallWainscot.material.needsUpdate = true
        })
        C_B_Walls.add(leftStoreWallWainscot);

        if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
          let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
          wainscotTrim.name = "c_b_l_s_w_ws_jtrim";
          wainscotTrim.material = wainscotTrim.material.clone();
          wainscotTrim.material.color.setHex(wainscotTrimCalor)
          wainscotTrim.visible = leftStoreWallWainscot.visible
          wainscotTrim.rotation.y = Math.PI
          wainscotTrim.scale.set(0.2,0.17, leftStoreWallWainscot.scale.x);
          wainscotTrim.position.set(leftStoreWallWainscot.position.x-0.008,leftStoreWallWainscot.position.y*2,leftStoreWallWainscot.position.z);
          C_B_Walls.add(wainscotTrim);
        }
    }

    if (params.cB_addStorage_check_front) {
     /* Center Building Front Storage Back Wall Wainscot*/
     if (const_var.b_t_M_L.getObjectByName("c_b_f_s_b_w_ws")!=undefined) {
      let frontStoreBackWallWainscot = const_var.b_t_M_L.getObjectByName("c_b_f_s_b_w_ws").clone();
          frontStoreBackWallWainscot.name = "c_b_f_s_b_w_ws";
          frontStoreBackWallWainscot.visible = (params.cB_addStorage_check_front && params.p_w_c_n)?true:false;
          frontStoreBackWallWainscot.position.set(0,1.475,frontEndlength-(Number(params.cB_addStorage_front))-0.075);
          frontStoreBackWallWainscot.scale.set(params.p_w,3,1);
        applyWallTexture(frontStoreBackWallWainscot, params.p_v_w ? 2*Math.round((((params.p_w/2)+(params.p_w/2/3))*2)/2) : 1, params.p_v_w ? 1 :(3/1.5)*2,"wainscotColor" );
        frontStorageWalls.add(frontStoreBackWallWainscot);

      if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
        let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
            wainscotTrim.name = "c_b_f_s_b_w_ws_jtrim";
            wainscotTrim.material.color.setHex(wainscotTrimCalor)
            wainscotTrim.visible = frontStoreBackWallWainscot.visible
            wainscotTrim.rotation.y = Math.PI/-2
            wainscotTrim.scale.set(0.2,0.17, frontStoreBackWallWainscot.scale.x);
            wainscotTrim.position.set(frontStoreBackWallWainscot.position.x,frontStoreBackWallWainscot.position.y*2,frontStoreBackWallWainscot.position.z+0.008);
            frontStorageWalls.add(wainscotTrim);
      }
  }
  /* Center Building Front Storage Right Wall WainScote */
  if (const_var.b_t_M_L.getObjectByName("c_b_f_s_s_w_ws")!=undefined) {
      let frontStoreRightWallWainscot = const_var.b_t_M_L.getObjectByName("c_b_f_s_s_w_ws").clone();
          frontStoreRightWallWainscot.name = "c_b_f_s_r_w_ws";
          frontStoreRightWallWainscot.visible = ((params.cB_addStorage_check_front&& params.p_w_c_n))?true:false; 
          frontStoreRightWallWainscot.rotation.y = Math.PI/2;            
          frontStoreRightWallWainscot.position.set(params.p_w /2 + 0.01 +0.06 , 1.475 ,(params.p_d/2)-params.cB_addStorage_front/2); 
          frontStoreRightWallWainscot.scale.set(params.cB_addStorage_front,3,1);     
      applyWallTexture(frontStoreRightWallWainscot, params.p_v_w ? ((params.cB_addStorage_front/2)+(params.cB_addStorage_front/2/3))*2 : 1, params.p_v_w ? 1 :(3/1.5)*2,"wainscotColor" );
      // C_B_Walls.add(frontStoreRightWallWainscot);
      frontStorageWalls.add(frontStoreRightWallWainscot);

      if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
        let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
            wainscotTrim.name = "c_b_f_s_r_w_ws_jtrim";
            wainscotTrim.material.color.setHex(wainscotTrimCalor)
            wainscotTrim.visible = frontStoreRightWallWainscot.visible
            // wainscotTrim.rotation.y = Math.PI/2
            wainscotTrim.scale.set(0.2,0.17, frontStoreRightWallWainscot.scale.x);
            wainscotTrim.position.set(frontStoreRightWallWainscot.position.x+0.008,frontStoreRightWallWainscot.position.y*2,frontStoreRightWallWainscot.position.z);
        // C_B_Walls.add(wainscotTrim);
        frontStorageWalls.add(wainscotTrim);
      }
  }
 /* Center Building Front Storage Left Wall WainScote */
  if (const_var.b_t_M_L.getObjectByName("c_b_f_s_s_w_ws")!=undefined) {
      let frontStoreLeftWallWainscot = const_var.b_t_M_L.getObjectByName("c_b_f_s_s_w_ws").clone();
          frontStoreLeftWallWainscot.name = "c_b_f_s_l_w_ws";
          frontStoreLeftWallWainscot.visible = (params.cB_addStorage_check_front && params.p_w_c_n)?true:false; 
          frontStoreLeftWallWainscot.position.set(  params.p_w /-2 - 0.01 - 0.06 , 1.475 ,(params.p_d/2)-params.cB_addStorage_front/2); 
          frontStoreLeftWallWainscot.rotation.y = Math.PI/2;        
          frontStoreLeftWallWainscot.scale.set(params.cB_addStorage_front,3,1);      
          applyWallTexture(frontStoreLeftWallWainscot, params.p_v_w ? ((params.cB_addStorage_front/2)+(params.cB_addStorage_front/2/3))*2 : 1, params.p_v_w ? 1 :(3/1.5)*2,"wainscotColor" );
      // C_B_Walls.add(frontStoreLeftWallWainscot);
      frontStorageWalls.add(frontStoreLeftWallWainscot);

      if (const_var.b_t_M_L.getObjectByName("wainscotTrim")!=undefined && params.p_w_c_n_j_trim == true) {
        let wainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
            wainscotTrim.name = "c_b_f_s_l_w_ws_jtrim";
            wainscotTrim.material.color.setHex(wainscotTrimCalor)
            wainscotTrim.visible = frontStoreLeftWallWainscot.visible
            wainscotTrim.rotation.y = Math.PI
            wainscotTrim.scale.set(0.2,0.17, frontStoreLeftWallWainscot.scale.x);
            wainscotTrim.position.set(frontStoreLeftWallWainscot.position.x-0.008,frontStoreLeftWallWainscot.position.y*2,frontStoreLeftWallWainscot.position.z);
        // C_B_Walls.add(wainscotTrim);
        frontStorageWalls.add(wainscotTrim);
      }
  }
    }
  }

  if (params.singleSlope || params.canopy == true){
     /* Free Standing Lean TO Front Gable*/
      if (const_var.b_t_M_L.getObjectByName("F_S_L_F_G")!=undefined) {
        let F_S_L_F_Gable = const_var.b_t_M_L.getObjectByName("F_S_L_F_G").clone();
      
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
   
                  if(params.p_v_w==true)
                  {
                        var f_S_LeanFrontGableUVS = new Float32Array([
                          1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0
                        ]);
                  }
                  else
                  {
                        var f_S_LeanFrontGableUVS = new Float32Array([
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
  
                  F_S_L_F_Gable.geometry.setIndex(new THREE.BufferAttribute( index, 1 ) )
                  F_S_L_F_Gable.geometry.setAttribute("position", new THREE.BufferAttribute(cBLeftStorageFGableVertices, 3));
                  F_S_L_F_Gable.geometry.setAttribute( 'uv', new THREE.BufferAttribute( f_S_LeanFrontGableUVS, 2 ) );
                  F_S_L_F_Gable.geometry.computeVertexNormals();
                  F_S_L_F_Gable.visible = (params.p_f_w !="Open" && (params.singleSlope|| params.canopy))?true:false;;  
                  F_S_L_F_Gable.scale.set(params.p_w - 0.20, (Number(params.p_r_p)/12) * (params.p_w - 0.3),1);
                  if(params.canopy == true){
                    F_S_L_F_Gable.scale.set(params.p_w,(roofMiddleHeight[params.p_r_p][params.p_w])*2, 0.001);
                  }
                  // F_S_L_F_Gable.position.set(0,params.p_h-0.09,params.p_d/2);
                  F_S_L_F_Gable.position.set(0,params.p_h  - (Number(params.p_r_p)/12) * params.p_w,params.p_d/2+0.04);
            let F_S_L_F_GableLoader = new THREE.TextureLoader();
            let F_S_L_F_GableTexture = F_S_L_F_GableLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(f_S_L_Texture) {
            F_S_L_F_Gable.material.map = f_S_L_Texture;
            F_S_L_F_Gable.material.bumpMap = f_S_L_Texture;
            F_S_L_F_Gable.material.bumpScale = 0.02
            F_S_L_F_Gable.material.metalness = 1
            F_S_L_F_Gable.material.roughness = 0.5
            F_S_L_F_Gable.material.anisotropy = 10;
      F_S_L_F_GableTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5) 
            F_S_L_F_Gable.material.map.wrapS = THREE.RepeatWrapping;
            F_S_L_F_Gable.material.map.wrapT = THREE.RepeatWrapping;   
             
            if(params.p_v_w==true) {
                if(params.cB_addStorage_check_left == true){
                  F_S_L_F_Gable.material.map.rotation = Math.PI
                }
                F_S_L_F_Gable.material.map.repeat.set(2*Math.round((((params.p_w/2)+(params.p_w/2/3))*2)/2),1);
            } else {
                F_S_L_F_Gable.material.map.repeat.set(1,(((Number(params.p_r_p)/12) * params.p_w)/1.5));
            }
                                                                                                                                                                                                                        
          let innerWall = F_S_L_Walls.getObjectByName("F_S_L_F_G_inner")
          innerWall.material.map = f_S_L_Texture.clone();
          innerWall.material.map.rotation = Math.PI
          innerWall.material.color.set(0xFFFFFF)
          innerWall.material.map.wrapS = THREE.RepeatWrapping;
          innerWall.material.map.wrapT = THREE.RepeatWrapping;
          innerWall.material.map.offset.x = params.p_w;
          innerWall.material.map.offset.y = params.p_w;
          innerWall.material.map.repeat.set(F_S_L_F_Gable.material.map.repeat.x,F_S_L_F_Gable.material.map.repeat.y);
          innerWall.material.map.needsUpdate = true 
          innerWall.material.needsUpdate = true 


        }
        )
        F_S_L_Walls.add(F_S_L_F_Gable);
        const_var.wallsForCut.F_S_L_F_G = F_S_L_F_Gable.clone();
    }

        //Double Free Standing Lean TO Front Gable
        if (F_S_L_Walls.getObjectByName("F_S_L_F_G_inner")==undefined) {
          
          let F_S_L_F_GableClone = F_S_L_Walls.getObjectByName("F_S_L_F_G");

          if(F_S_L_Walls.getObjectByName("F_S_L_F_G") != undefined){
          let double_F_S_L_F_Gable = F_S_L_F_GableClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          double_F_S_L_F_Gable = new THREE.Mesh(double_F_S_L_F_Gable.geometry,leftDoubleMaterial);
          double_F_S_L_F_Gable.name = "F_S_L_F_G_inner"
          double_F_S_L_F_Gable.visible = (params.is_translusant==true)? false : F_S_L_F_GableClone.visible
          double_F_S_L_F_Gable.scale.set(F_S_L_F_GableClone.scale.x , F_S_L_F_GableClone.scale.y , F_S_L_F_GableClone.scale.z);
          double_F_S_L_F_Gable.position.set(F_S_L_F_GableClone.position.x , F_S_L_F_GableClone.position.y , F_S_L_F_GableClone.position.z-wallDistance);
          double_F_S_L_F_Gable.rotation.set(F_S_L_F_GableClone.rotation.x , F_S_L_F_GableClone.rotation.y , F_S_L_F_GableClone.rotation.z)
          
            F_S_L_Walls.add(double_F_S_L_F_Gable);
            const_var.wallsForCut.F_S_L_F_G_inner = double_F_S_L_F_Gable.clone();
          }
        }

     /* Free Standing Lean TO Back Gable*/
      if (const_var.b_t_M_L.getObjectByName("F_S_L_B_G")!=undefined) {
        let F_S_L_B_Gable = const_var.b_t_M_L.getObjectByName("F_S_L_B_G").clone();
      
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }

                  if (params.p_v_w==true) {
                var f_S_LeanBackGableUVS = new Float32Array([
                  1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0
                ]);
            } else  {
                var f_S_LeanBackGableUVS = new Float32Array([
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

          F_S_L_B_Gable.geometry.setIndex(new THREE.BufferAttribute( index, 1 ) )
            F_S_L_B_Gable.geometry.setAttribute("position", new THREE.BufferAttribute(cBLeftStorageFGableVertices, 3));            
            F_S_L_B_Gable.geometry.setAttribute( 'uv', new THREE.BufferAttribute( f_S_LeanBackGableUVS, 2 ) );
            F_S_L_B_Gable.geometry.computeVertexNormals();
            F_S_L_B_Gable.visible = ((params.p_b_w !="Open" || params.p_u_c!=false) && (params.singleSlope|| params.canopy))?true:false; 
            F_S_L_B_Gable.scale.set(params.p_w-0.20,(Number(params.p_r_p)/12) * (params.p_w - 0.3), 1);
            if(params.canopy == true){
              F_S_L_B_Gable.scale.set(params.p_w,(roofMiddleHeight[params.p_r_p][params.p_w])*2, 0.001);
            }
             //F_S_L_B_Gable.position.set(0,params.p_h-0.09,params.p_d/-2);
            F_S_L_B_Gable.position.set(0,params.p_h - (Number(params.p_r_p)/12) * params.p_w,params.p_d/-2-0.06);
            let F_S_L_B_GableLoader = new THREE.TextureLoader();
            let F_S_L_B_GableTexture = F_S_L_B_GableLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(f_S_L_Texture) {
              F_S_L_B_GableTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5)
            F_S_L_B_Gable.material.map = f_S_L_Texture;
            F_S_L_B_Gable.material.bumpMap = f_S_L_Texture;
            F_S_L_B_Gable.material.bumpScale = 0.02
            F_S_L_B_Gable.material.metalness = 1
            F_S_L_B_Gable.material.roughness = 0.5
            F_S_L_B_Gable.material.anisotropy = 10;
            F_S_L_B_Gable.material.map.wrapS = THREE.RepeatWrapping;
            F_S_L_B_Gable.material.map.wrapT = THREE.RepeatWrapping;    
             if(params.p_v_w==true) {
                if(params.cB_addStorage_check_left == true){
                  F_S_L_B_Gable.material.map.rotation = Math.PI
                }
                F_S_L_B_Gable.material.map.repeat.set(2*Math.round((((params.p_w/2)+(params.p_w/2/3))*2)/2),1);
             }  else {
                F_S_L_B_Gable.material.map.repeat.set(1,(((Number(params.p_r_p)/12) * params.p_w)/1.5));
             }
                                                                                                                                                                                                                                     
          let innerWall = F_S_L_Walls.getObjectByName("F_S_L_B_G_inner")
          innerWall.material.map = f_S_L_Texture.clone();
          innerWall.material.map.rotation = 0
          innerWall.material.color.set(0xFFFFFF)
          innerWall.material.map.wrapS = THREE.RepeatWrapping;
          innerWall.material.map.wrapT = THREE.RepeatWrapping;
          innerWall.material.map.offset.x = params.p_w;
          innerWall.material.map.offset.y = params.p_w;
          innerWall.material.map.repeat.set(F_S_L_B_Gable.material.map.repeat.x,F_S_L_B_Gable.material.map.repeat.y);
          innerWall.material.map.needsUpdate = true 
          innerWall.material.needsUpdate = true 

            }
            )
                  F_S_L_Walls.add(F_S_L_B_Gable);
    }

        //Double Free Standing Lean TO Front Gable
        if (F_S_L_Walls.getObjectByName("F_S_L_B_G_inner")==undefined) {
          
          let F_S_L_B_GableClone = F_S_L_Walls.getObjectByName("F_S_L_B_G");

          if(F_S_L_Walls.getObjectByName("F_S_L_B_G") != undefined){
          let double_F_S_L_B_Gable = F_S_L_B_GableClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          double_F_S_L_B_Gable = new THREE.Mesh(double_F_S_L_B_Gable.geometry,leftDoubleMaterial);
          double_F_S_L_B_Gable.name = "F_S_L_B_G_inner"
          double_F_S_L_B_Gable.visible = (params.is_translusant==true)? false : F_S_L_B_GableClone.visible
          double_F_S_L_B_Gable.scale.set(F_S_L_B_GableClone.scale.x , F_S_L_B_GableClone.scale.y , F_S_L_B_GableClone.scale.z);
          double_F_S_L_B_Gable.position.set(F_S_L_B_GableClone.position.x , F_S_L_B_GableClone.position.y , F_S_L_B_GableClone.position.z+wallDistance);
          double_F_S_L_B_Gable.rotation.set(F_S_L_B_GableClone.rotation.x , F_S_L_B_GableClone.rotation.y , F_S_L_B_GableClone.rotation.z)

            F_S_L_Walls.add(double_F_S_L_B_Gable);
            const_var.wallsForCut.F_S_L_B_G_inner = double_F_S_L_B_Gable.clone();
          }
        }

    /* Free Standing Lean TO Front Storage Gable*/
      if (const_var.b_t_M_L.getObjectByName("F_S_L_F_S_G")!=undefined) {
        let F_S_L_F_S_Gable = const_var.b_t_M_L.getObjectByName("F_S_L_F_S_G").clone();
      
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }

                  if (params.p_v_w==true)  {
                 var f_S_LeanToFrontStorageGableUVS = new Float32Array([
                  1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0
                 ]);
               } else {
                   var f_S_LeanToFrontStorageGableUVS = new Float32Array([
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

              F_S_L_F_S_Gable.geometry.setIndex(new THREE.BufferAttribute( index, 1 ) )
              F_S_L_F_S_Gable.geometry.setAttribute("position", new THREE.BufferAttribute(cBLeftStorageFGableVertices, 3));             
               F_S_L_F_S_Gable.geometry.setAttribute( 'uv', new THREE.BufferAttribute( f_S_LeanToFrontStorageGableUVS, 2 ) );
               F_S_L_F_S_Gable.geometry.computeVertexNormals();
               F_S_L_F_S_Gable.visible = ((params.p_b_w !="Open" || params.p_u_c!=false) && params.singleSlope)?true:false;  
               F_S_L_F_S_Gable.visible = ( params.p_u_c!=false && (params.singleSlope || params.canopy))?true:false;  
               F_S_L_F_S_Gable.scale.set(params.p_w -0.20,(Number(params.p_r_p)/12) * (params.p_w) -0.1,1);
               if(params.canopy == true){
                F_S_L_F_S_Gable.scale.set(params.p_w,(roofMiddleHeight[params.p_r_p][params.p_w])*2, 0.001);
              }
               F_S_L_F_S_Gable.position.set(0,params.p_h-0.05,leng+(parseInt(params.p_u_t) +0.06));
               if (params.singleSlope) {
                F_S_L_F_S_Gable.position.set(0,params.p_h - (Number(params.p_r_p)/12) * params.p_w -0.1,leng+(parseInt(params.p_u_t) +0.06));
               }
               let F_S_L_F_S_GableLoader = new THREE.TextureLoader();
               let F_S_L_F_S_GableTexture = F_S_L_F_S_GableLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(f_S_L_Texture) {
                F_S_L_F_S_GableTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5)
               F_S_L_F_S_Gable.material.map = f_S_L_Texture;
               F_S_L_F_S_Gable.material.bumpMap = f_S_L_Texture;
               F_S_L_F_S_Gable.material.bumpScale = 0.02
               F_S_L_F_S_Gable.material.metalness = 1
               F_S_L_F_S_Gable.material.roughness = 0.5
               F_S_L_F_S_Gable.material.anisotropy = 10;
               F_S_L_F_S_Gable.material.map.wrapS = THREE.RepeatWrapping;
               F_S_L_F_S_Gable.material.map.wrapT = THREE.RepeatWrapping;     
               if(params.p_v_w==true) {
                   F_S_L_F_S_Gable.material.map.repeat.set(2*Math.round((((params.p_w/2)+(params.p_w/2/3))*2)/2),1);
               } else  {
                   F_S_L_F_S_Gable.material.map.repeat.set(1,(((Number(params.p_r_p)/12) * params.p_w)/1.5));
               }
                                                                                                                                                                                                                                                    
              let innerWall = F_S_L_Walls.getObjectByName("F_S_L_F_S_G_inner")
              innerWall.material.map = f_S_L_Texture.clone();
              innerWall.material.color.set(0xFFFFFF)
              innerWall.material.map.wrapS = THREE.RepeatWrapping;
              innerWall.material.map.wrapT = THREE.RepeatWrapping;
              innerWall.material.map.offset.x = params.p_w;
              innerWall.material.map.offset.y = params.p_w;
              innerWall.material.map.repeat.set(F_S_L_F_S_Gable.material.map.repeat.x,F_S_L_F_S_Gable.material.map.repeat.y);
              innerWall.material.map.needsUpdate = true 
              innerWall.material.needsUpdate = true 

            }
            )
                  F_S_L_Walls.add(F_S_L_F_S_Gable);
      }

        //Double Free Standing Lean TO Front Gable
        if (F_S_L_Walls.getObjectByName("F_S_L_F_S_G_inner")==undefined) {
          
          let F_S_L_F_S_GableClone = F_S_L_Walls.getObjectByName("F_S_L_F_S_G");

          if(F_S_L_Walls.getObjectByName("F_S_L_F_S_G") != undefined){
          let double_F_S_L_F_S_Gable = F_S_L_F_S_GableClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          double_F_S_L_F_S_Gable = new THREE.Mesh(double_F_S_L_F_S_Gable.geometry,leftDoubleMaterial);
          double_F_S_L_F_S_Gable.name = "F_S_L_F_S_G_inner"
          double_F_S_L_F_S_Gable.visible = (params.is_translusant==true)? false : F_S_L_F_S_GableClone.visible
          double_F_S_L_F_S_Gable.scale.set(F_S_L_F_S_GableClone.scale.x , F_S_L_F_S_GableClone.scale.y , F_S_L_F_S_GableClone.scale.z);
          double_F_S_L_F_S_Gable.position.set(F_S_L_F_S_GableClone.position.x , F_S_L_F_S_GableClone.position.y , F_S_L_F_S_GableClone.position.z-wallDistance);
          double_F_S_L_F_S_Gable.rotation.set(F_S_L_F_S_GableClone.rotation.x , F_S_L_F_S_GableClone.rotation.y , F_S_L_F_S_GableClone.rotation.z)

            F_S_L_Walls.add(double_F_S_L_F_S_Gable);
            const_var.wallsForCut.F_S_L_F_S_G_inner = double_F_S_L_F_S_Gable.clone();
          }
        }

    /* Free Standing Lean TO Right Wall*/
    
    if (const_var.b_t_M_L.getObjectByName("F_S_L_R_W")!=undefined) {
        let F_S_L_RightWall = const_var.b_t_M_L.getObjectByName("F_S_L_R_W").clone();
      
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
        F_S_L_RightWall.visible = (params.p_r_w != "Open"&& params.singleSlope || params.cB_addStorage_check_right)?true:false;
        if (params.cB_addStorage_check_right) params.p_r_w = "Close";

            
            var wH =(params.p_h);
            var wP =  params.p_h - wH/2;
            F_S_L_RightWall.position.set(params.p_w / 2 , wP,0);           
            F_S_L_RightWall.scale.set(params.p_d, wH , 1);
        
            switch(params.p_r_w)
            {
                case "One_Fourth_Close":
                    wH = wH/4;
                    wP = params.p_h - wH/2;
                    break;
                case "Half_Close":
                    wH = wH/2;
                    wP = params.p_h - wH/2;
                    break;                  
                case "Three_Fourth_Close":
                    wH = wH * 3/4;
                    wP = params.p_h - wH/2;
                    break;
                case "Extended Gable":
                    break;
                case "Gable":
                    break;
                case "Open":
                case "Close":
                    wH = params.p_h ;
                    wP = params.p_h - wH/2;
                    break;
                default:
          // if(params.add_right_lean!=true)
          // {
                    wH = Math.abs(params.p_r_w.replace(/\D/g, "")) * 3;
            // wH = Math.abs(isNaN(params.p_r_w)) * 3;
                    wP = params.p_h - wH/2;
            // F_S_L_RightWall.visible = (params.p_r_w != "Open"&& params.singleSlope )?true:false;
          // }
                    break;
            }

            var cal = Math.ceil(params.p_h-wH);            
            if (cal >= 1.5) {
              const_var.cutPanleLeftCheckR = true;
            } 

      if(params.p_r_w=="Open" && params.p_c_p_r==true && params.singleSlope == true)
      {
          wH = 2;
          wP = params.p_h - wH/2;
          F_S_L_RightWall.visible = true;
      }
      if(params.p_r_w!=="Open" && params.p_c_p_r==true)
      {
          wH = wH + 1.5;
          wP = params.p_h - wH/2;
          F_S_L_RightWall.visible = true;
      }
      if(params.p_c_p_r==true && wH >= params.p_h){
      //  params.p_r_w = "Close"
       wH = wH - 1.5;
       wP = params.p_h - wH/2;
       params.p_c_p_r=false
        const_var.cutPanleLeftCheckR = false;
      }

      if(params.p_c_p_r==false && wH > params.p_h - 1.5){
        const_var.cutPanleLeftCheckR = false;
      }
      if(params.p_r_w =="Open"){
        const_var.cutPanleLeftCheckR = true;
      }

                  F_S_L_RightWall.position.y = wP                 
                  F_S_L_RightWall.scale.set(params.p_d,wH,1);
            let F_S_L_RightWallLoader = new THREE.TextureLoader();
            let F_S_L_RightWallTexture = F_S_L_RightWallLoader.load( process.env.REACT_APP_BASE_URL+wallTexture, function(f_S_L_Texture) {
                // F_S_L_RightWall.material.envMap = f_S_L_Texture;
                // F_S_L_RightWall.material.emissiveMap = f_S_L_Texture;
                // F_S_L_RightWall.material.emissiveIntensity = 1;
                F_S_L_RightWall.material.map = f_S_L_Texture;
                F_S_L_RightWall.material.bumpMap = f_S_L_Texture;
                F_S_L_RightWall.material.bumpScale = 0.02
                F_S_L_RightWall.material.metalness = 1
                F_S_L_RightWall.material.roughness = 0.5
                F_S_L_RightWall.material.anisotropy = 10;
                F_S_L_RightWall.material.map.wrapS = THREE.RepeatWrapping;
                F_S_L_RightWall.material.map.wrapT = THREE.RepeatWrapping;
                F_S_L_RightWall.material.map.offset.x = params.p_w;
                F_S_L_RightWall.material.map.offset.y = params.p_w;
                F_S_L_RightWall.material.map.needsUpdate = true;
                F_S_L_RightWall.material.needsUpdate = true;

            if(params.p_v_w==true) {
                F_S_L_RightWall.material.map.repeat.set(((params.p_d/2)+(params.p_d/2/3))*2,1);
            }else {
                F_S_L_RightWall.material.map.repeat.set(1,Math.round((wH/1.5)*2));
            }
                                                                                                                                                                                                                                                                
            let innerWall = F_S_L_Walls.getObjectByName("F_S_L_R_W_inner")
            innerWall.material.map = f_S_L_Texture.clone();
            // innerWall.material.map.rotation = 0
            innerWall.material.color.set(0xFFFFFF)
            innerWall.material.map.wrapS = THREE.RepeatWrapping;
            innerWall.material.map.wrapT = THREE.RepeatWrapping;
            innerWall.material.map.offset.x = params.p_w;
            innerWall.material.map.offset.y = params.p_w;
            innerWall.material.map.repeat.set(F_S_L_RightWall.material.map.repeat.x,F_S_L_RightWall.material.map.repeat.y);
            innerWall.material.map.needsUpdate = true 
            innerWall.material.needsUpdate = true 

        });

        if (params.p_r_w !== "Close") {
          addDoorIntersectWall(params.p_h, wH, F_S_L_RightWall);
        }
        F_S_L_Walls.add(F_S_L_RightWall);

        if ((const_var.b_t_M_L.getObjectByName("jTrim")!=undefined && params.p_r_w !== "Close" && params.p_r_w !== "Open" && params.p_j_t == true) || (const_var.b_t_M_L.getObjectByName("jTrim")!=undefined && params.p_r_w=="Open" && params.p_c_p_r==true && params.singleSlope ==true && params.p_j_t == true)) {
          let hdfp = params.p_h - (params.leanR_p_h + (parseInt(params.b_l_t_r_pR)/12) * params.leanR_p_w);
          let jTrim = const_var.b_t_M_L.getObjectByName("jTrim").clone();
          jTrim.name = "F_S_L_R_W_jtrim";
          jTrim.material = jTrim.material.clone();
          jTrim.material.color.setHex(jTrimCalor)
          jTrim.visible = F_S_L_RightWall.visible
          // if(params.add_right_lean && hdfp > 0  &&  (Math.abs(params.p_r_w) * 3) -hdfp < 3){
          //   jTrim.visible = false
          // }
          jTrim.rotation.y = Math.PI
          jTrim.scale.set(0.14+(jTrimAlignment),0.12, params.p_d);
          jTrim.position.set((params.p_w/2)-(jTrimAlignment/2)-0.05,F_S_L_RightWall.position.y-(F_S_L_RightWall.scale.y/2)-0.01,0);
          if(params.p_u_c){
            jTrim.scale.z = params.p_d-params.p_u_t;
            jTrim.position.z= params.p_u_t/2;
          }
          F_S_L_Walls.add(jTrim);
        }
      }
      
        //Double Free Standing Lean TO Front Gable
        if (F_S_L_Walls.getObjectByName("F_S_L_R_W_inner")==undefined) {
          
          let F_S_L_R_WallClone = params.p_r_w !== "Close" ? F_S_L_Walls.getObjectByName("F_S_L_R_W1"): F_S_L_Walls.getObjectByName("F_S_L_R_W");

          let double_F_S_L_R_Wall = F_S_L_R_WallClone.clone();
          
          let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
          double_F_S_L_R_Wall = new THREE.Mesh(double_F_S_L_R_Wall.geometry,leftDoubleMaterial);
          double_F_S_L_R_Wall.name = "F_S_L_R_W_inner"
          double_F_S_L_R_Wall.visible = (params.is_translusant==true)? false : F_S_L_R_WallClone.visible
          double_F_S_L_R_Wall.scale.set(F_S_L_R_WallClone.scale.x , F_S_L_R_WallClone.scale.y , F_S_L_R_WallClone.scale.z);
          double_F_S_L_R_Wall.position.set(F_S_L_R_WallClone.position.x -wallDistance, F_S_L_R_WallClone.position.y , F_S_L_R_WallClone.position.z);
          double_F_S_L_R_Wall.rotation.set(F_S_L_R_WallClone.rotation.x , F_S_L_R_WallClone.rotation.y , F_S_L_R_WallClone.rotation.z)
          const_var.wallsForCut.F_S_L_R_W_inner = double_F_S_L_R_Wall.clone();

            F_S_L_Walls.add(double_F_S_L_R_Wall);
        }
  }


               /*code for transperant whole center buildingand walls Count*/
               let wallVal; 
               let centerBuildingWalls={}
               let closedSideWalls = 0; let closedEndWalls = 0;
               let fullyClosedSideWalls = 0; let fullyClosedEndWalls = 0;
               const_var.scene.children.forEach(function(Group) {
                // console.log(Group,"Group");
                if ("C_B_Walls" == Group.name || "F_S_L_Walls" == Group.name || "frontStorageWalls" == Group.name ) { 
                  Group.children.map(geometry => {
                    if(params.is_translusant==true){
                      geometry.material.transparent = true;
                      geometry.material.opacity = 0.1;
                      // geometry.material.opacity =0.3;
                      // geometry.material.alphaTest =false;
                      // geometry.material.clearAlpha =1;
                    } else {
                        geometry.material.transparent = false;
                        geometry.material.opacity = 1;
                        // geometry.material.alphaTest =0;
                        // geometry.material.clearAlpha =null;
                    }
                    if(const_var.checkWallClose[geometry.name] != undefined ){
                      wallVal = const_var.checkWallClose[geometry.name]
                      if (wallVal == "utility") params[wallVal] = "Close"; 
                      if(geometry.rotation.y ==  1.5707963267948966 && params[wallVal] != "Open"){
                        closedSideWalls += 1
                      }
                      if (geometry.rotation._y == 0 && params[wallVal] != "Open" && !geometry.name.includes("Gable") && !geometry.name.includes("inner")&& !geometry.name.includes("_G")  ) {
                        closedEndWalls += 1
                      }
                      if(geometry.rotation.y ==  1.5707963267948966 && params[wallVal] == "Close" ){
                        fullyClosedSideWalls += 1
                      }
                      if (geometry.rotation._y == 0 && params[wallVal] == "Close" && !geometry.name.includes("Gable") && !geometry.name.includes("inner")&& !geometry.name.includes("_G") ) {
                        fullyClosedEndWalls += 1
                      }
                    }
                  })
                
                }
                })

              if (params.p_c_p_l) {
                closedSideWalls = (closedSideWalls + 1);
                if (params.p_l_w != "Open") closedSideWalls = (closedSideWalls - 1);
                if (params.p_u_c && params.p_l_w == "Open") closedSideWalls = (closedSideWalls - 1);
              }
              if (params.p_c_p_r) {
                closedSideWalls = (closedSideWalls + 1);
                if (params.p_r_w != "Open") closedSideWalls = (closedSideWalls - 1);
                if (params.p_u_c && params.p_r_w=="Open") closedSideWalls = (closedSideWalls - 1);
              }

              if ( params.p_u_c ) {
                if (params.p_l_w != "Open") closedSideWalls = (closedSideWalls - 1);
                if (params.p_r_w != "Open") closedSideWalls = (closedSideWalls - 1);
                if (params.p_l_w == "Close") fullyClosedSideWalls = (fullyClosedSideWalls - 1);
                if (params.p_r_w == "Close") fullyClosedSideWalls = (fullyClosedSideWalls - 1);
              }
              
              if (params.cB_addStorage_check_left || params.cB_addStorage_check_right){
                if (params.p_f_w != "Open") closedEndWalls = (closedEndWalls - 1);
                if (params.p_b_w != "Open") closedEndWalls = (closedEndWalls - 1);
                if (params.p_f_w == "Close") fullyClosedEndWalls = (fullyClosedEndWalls - 1);
                if (params.p_b_w == "Close") fullyClosedEndWalls = (fullyClosedEndWalls - 1);
              }
              // console.log(fullyClosedSideWalls,"fullyClosedSideWalls",fullyClosedEndWalls,"fullyClosedEndWalls");
              const_var.cbClosedSideWalls = closedSideWalls;
              const_var.cbClosedEndWalls = closedEndWalls;
              const_var.cbFullyEnclosedWalls = fullyClosedEndWalls+fullyClosedSideWalls;


               const_var.wallsData.center.closedEndWalls = closedEndWalls;
               const_var.wallsData.center.closedSideWalls = closedSideWalls;
               const_var.wallsData.center.p_f_w = params.p_f_w;
               const_var.wallsData.center.p_b_w =  params.p_b_w;
               const_var.wallsData.center.p_l_w =  params.p_l_w;
               const_var.wallsData.center.p_r_w =  params.p_r_w;

}
    
    