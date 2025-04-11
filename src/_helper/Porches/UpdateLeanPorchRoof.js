import * as THREE from "three";
import verticalTexture from '../../assets/images/imgTextures/buildingImages/verticalTexture.jpeg';
import horizontalTexture from '../../assets/images/imgTextures/buildingImages/horizantalTexture.jpeg';
import { params, const_var, } from '../../redux/reducers/reducer';

export const updateLeanToPorchRoofPitch = () => {

    if ("undefined" != typeof const_var.scene.getObjectByName("L_F_L_P")) const_var.scene.remove(const_var.scene.getObjectByName("L_F_L_P"));
    if ("undefined" != typeof const_var.scene.getObjectByName("R_F_L_P")) const_var.scene.remove(const_var.scene.getObjectByName("R_F_L_P"));
  
    if ("undefined" != typeof const_var.scene.getObjectByName("L_L_F_P_Roof")) const_var.scene.remove(const_var.scene.getObjectByName("L_L_F_P_Roof"));
    if ("undefined" != typeof const_var.scene.getObjectByName("R_L_F_P_Roof")) const_var.scene.remove(const_var.scene.getObjectByName("R_L_F_P_Roof"));
    if ("undefined" != typeof const_var.scene.getObjectByName("L_B_L_P_Roof")) const_var.scene.remove(const_var.scene.getObjectByName("L_B_L_P_Roof"));
    if ("undefined" != typeof const_var.scene.getObjectByName("R_B_L_P_Roof")) const_var.scene.remove(const_var.scene.getObjectByName("R_B_L_P_Roof"));

    const wallDistance = (params.p_d <= 150)?0.0:0.08;

    const L_L_F_P_Roof = new THREE.Group();
    L_L_F_P_Roof.name = "L_L_F_P_Roof";
    const_var.scene.add(L_L_F_P_Roof);

    const R_L_F_P_Roof = new THREE.Group();
    R_L_F_P_Roof.name = "R_L_F_P_Roof";
    const_var.scene.add(R_L_F_P_Roof);

    let roofMiddleHeight = {
		"1":{"6":0.25,"7":0.29165,"8":0.33335,"9":0.375,"10":0.41665,"11":0.45835,"12":0.5,"13":0.5417,"14":0.5833,"15":0.6250,"16":0.6667,"17":0.7083,"18":0.7500,"19":0.7917,"20":0.8333,"21":0.8750,"22":0.9167,"23":0.9583,"24":1,"25":1.0417,"26":1.0833,"27":1.1250,"28":1.1667,"29":1.2083,"30":1.2500,"31":1.2917,"32":1.3333,"33":1.3750,"34":1.4167,"35":1.4583,"36":1.5000,"37":1.5417,"38":1.5833,"39":1.6250,"40":1.6667,"41":1.7083,"42":1.7500,"43":1.7917,"44":1.8333,"45":1.8750,"46":1.9167,"47":1.9583,"48":2.00,"49":2.0417,"50":2.0833,"51":2.1250,"52":2.1667,"53":2.2083,"54":2.2500,"55":2.2917,"56":2.3333,"57":2.3750,"58":2.4167,"59":2.4583,"60":2.5000,"61":2.5417,"62":2.5833,"63":2.6250,"64":2.6667,"65":2.7083,"66":2.7500,"67":2.7917,"68":2.8333,"69":2.8750,"70":2.9167,"71":2.9583,"72":3.00,"73":3.0417,"74":3.0833,"75":3.1250,"76":3.1667,"77":3.2083,"78":3.2500,"79":3.2917,"80":3.3330},
		"2":{"6":0.50,"7":0.58335,"8":0.66665,"9":0.750,"10":0.83335,"11":0.91665,"12":1.0,"13":1.0833,"14":1.1667,"15":1.2500,"16":1.3333,"17":1.4167,"18":1.5000,"19":1.5833,"20":1.6667,"21":1.7500,"22":1.8333,"23":1.9167,"24":2,"25":2.0833,"26":2.1667,"27":2.2500,"28":2.3333,"29":2.4167,"30":2.5000,"31":2.5833,"32":2.6667,"33":2.7500,"34":2.8333,"35":2.9167,"36":3.0000,"37":3.0833,"38":3.1667,"39":3.2500,"40":3.3330,"41":3.4170,"42":3.5000,"43":3.5830,"44":3.6670,"45":3.7500,"46":3.8330,"47":3.9170,"48":4.00,"49":4.0830,"50":4.1670,"51":4.2500,"52":4.3330,"53":4.4170,"54":4.5000,"55":4.5830,"56":4.6670,"57":4.7500,"58":4.8330,"59":4.9170,"60":5.0000,"61":5.0830,"62":5.1670,"63":5.2500,"64":5.3330,"65":5.4170,"66":5.5000,"67":5.5830,"68":5.6670,"69":5.7500,"70":5.8330,"71":5.9170,"72":6.00,"73":6.0830,"74":6.1670,"75":6.2500,"76":6.3330,"77":6.4170,"78":6.5000,"79":6.5830,"80":6.6670},
		"3":{"6":0.75,"7":0.87500,"8":1.00000,"9":1.125,"10":1.25000,"11":1.37500,"12":1.5,"13":1.6250,"14":1.7500,"15":1.8750,"16":2.0000,"17":2.1250,"18":2.2500,"19":2.3750,"20":2.5000,"21":2.6250,"22":2.7500,"23":2.8750,"24":3,"25":3.1250,"26":3.2500,"27":3.3750,"28":3.5000,"29":3.6250,"30":3.7500,"31":3.8750,"32":4.0000,"33":4.1250,"34":4.2500,"35":4.3750,"36":4.5000,"37":4.6250,"38":4.7500,"39":4.8750,"40":5.0000,"41":5.1250,"42":5.2500,"43":5.3750,"44":5.5000,"45":5.6250,"46":5.7500,"47":5.8750,"48":6.00,"49":6.1250,"50":6.2500,"51":6.3750,"52":6.5000,"53":6.6250,"54":6.7500,"55":6.8750,"56":7.0000,"57":7.1250,"58":7.2500,"59":7.3750,"60":7.5000,"61":7.6250,"62":7.7500,"63":7.8750,"64":8.0000,"65":8.1250,"66":8.2500,"67":8.3750,"68":8.5000,"69":8.6250,"70":8.7500,"71":8.8750,"72":9.00,"73":9.1250,"74":9.2500,"75":9.3750,"76":9.5000,"77":9.6250,"78":9.7500,"79":9.8750,"80":10.000},
		"4":{"6":1.00,"7":1.16665,"8":1.33335,"9":1.500,"10":1.66650,"11":1.83350,"12":2.0,"13":2.1667,"14":2.3333,"15":2.5000,"16":2.6667,"17":2.8333,"18":3.0000,"19":3.1667,"20":3.3330,"21":3.5000,"22":3.6670,"23":3.8330,"24":4,"25":4.1670,"26":4.3330,"27":4.5000,"28":4.6670,"29":4.8330,"30":5.0000,"31":5.1670,"32":5.3330,"33":5.5000,"34":5.6670,"35":5.8330,"36":6.0000,"37":6.1670,"38":6.3330,"39":6.5000,"40":6.6670,"41":6.8330,"42":7.0000,"43":7.1670,"44":7.3330,"45":7.5000,"46":7.6670,"47":7.8330,"48":8.00,"49":8.1670,"50":8.3330,"51":8.5000,"52":8.6670,"53":8.8330,"54":9.0000,"55":9.1670,"56":9.3330,"57":9.5000,"58":9.6670,"59":9.8330,"60":10.000,"61":10.167,"62":10.333,"63":10.500,"64":10.667,"65":10.833,"66":11.000,"67":11.167,"68":11.333,"69":11.500,"70":11.667,"71":11.833,"72":12.0,"73":12.167,"74":12.333,"75":12.500,"76":12.667,"77":12.833,"78":13.000,"79":13.167,"80":13.333},
		"5":{"6":1.25,"7":1.45835,"8":1.66650,"9":1.875,"10":2.08350,"11":2.29150,"12":2.5,"13":2.7083,"14":2.9167,"15":3.1250,"16":3.3330,"17":3.5420,"18":3.7500,"19":3.9580,"20":4.1670,"21":4.3750,"22":4.5830,"23":4.7920,"24":5,"25":5.2080,"26":5.4170,"27":5.6250,"28":5.8330,"29":6.0420,"30":6.2500,"31":6.4580,"32":6.6670,"33":6.8750,"34":7.0830,"35":7.2920,"36":7.5000,"37":7.7080,"38":7.9170,"39":8.1250,"40":8.3330,"41":8.5420,"42":8.7500,"43":8.9580,"44":9.1670,"45":9.3750,"46":9.5830,"47":9.7920,"48":10.0,"49":10.208,"50":10.417,"51":10.625,"52":10.833,"53":11.042,"54":11.250,"55":11.458,"56":11.667,"57":11.875,"58":12.083,"59":12.292,"60":12.500,"61":12.708,"62":12.917,"63":13.125,"64":13.333,"65":13.542,"66":13.750,"67":13.958,"68":14.167,"69":14.375,"70":14.583,"71":14.792,"72":15.0,"73":15.208,"74":15.417,"75":15.625,"76":15.833,"77":16.042,"78":16.250,"79":16.458,"80":16.667},
		"6":{"6":1.50,"7":1.75000,"8":2.00000,"9":2.250,"10":2.50000,"11":2.75000,"12":3.0,"13":3.2500,"14":3.5000,"15":3.7500,"16":4.0000,"17":4.2500,"18":4.5000,"19":4.7500,"20":5.0000,"21":5.2500,"22":5.5000,"23":5.7500,"24":6,"25":6.2500,"26":6.5000,"27":6.7500,"28":7.0000,"29":7.2500,"30":7.5000,"31":7.7500,"32":8.0000,"33":8.2500,"34":8.5000,"35":8.7500,"36":9.0000,"37":9.2500,"38":9.5000,"39":9.7500,"40":10.000,"41":10.250,"42":10.500,"43":10.750,"44":11.000,"45":11.250,"46":11.500,"47":11.750,"48":12.0,"49":12.250,"50":12.500,"51":12.750,"52":13.000,"53":13.250,"54":13.500,"55":13.750,"56":14.000,"57":14.250,"58":14.500,"59":14.750,"60":15.000,"61":15.250,"62":15.500,"63":15.750,"64":16.000,"65":16.250,"66":16.500,"67":16.750,"68":17.000,"69":17.250,"70":17.500,"71":17.750,"72":18.0,"73":18.250,"74":18.500,"75":18.750,"76":19.000,"77":19.250,"78":19.500,"79":19.750,"80":20.000}
	};

    let bowsScale = {
		"1":{"6":0.000,"7":0.050,"8":0.10,"9":0.100,"10":0.100,"11":0.100,"12":0.00,"13":0.00,"14":0.10,"15":0.15,"16":0.20,"17":0.20,"18":0.20,"19":0.20,"20":0.20,"21":0.20,"22":0.20,"23":0.20,"24":0.20,"25":0.20,"26":0.20,"27":0.20,"28":0.20,"29":0.20,"30":0.20,"31":0.20,"32":0.25,"33":0.25,"34":0.25,"35":0.25,"36":0.30,"37":0.30,"38":0.30,"39":0.30,"40":0.35,"41":0.35,"42":0.35,"43":0.35,"44":0.40,"45":0.45,"46":0.50,"47":0.55,"48":0.60,"49":0.60,"50":0.60,"51":0.60,"52":0.60,"53":0.60,"54":0.60,"55":0.60,"56":0.60,"57":0.60,"58":0.60,"59":0.60,"60":0.60,"61":0.60,"62":0.60,"63":0.60,"64":0.60,"65":0.60,"66":0.65,"67":0.65,"68":0.65,"69":0.65,"70":0.70,"71":0.75,"72":0.80,"73":0.80,"74":0.80,"75":0.80,"76":0.80,"77":0.80,"78":0.80,"79":0.80,"80":0.80},
		"2":{"6":0.050,"7":0.050,"8":0.10,"9":0.100,"10":0.100,"11":0.125,"12":0.10,"13":0.10,"14":0.10,"15":0.10,"16":0.20,"17":0.20,"18":0.20,"19":0.20,"20":0.20,"21":0.25,"22":0.25,"23":0.25,"24":0.30,"25":0.30,"26":0.30,"27":0.30,"28":0.35,"29":0.35,"30":0.40,"31":0.40,"32":0.40,"33":0.45,"34":0.45,"35":0.45,"36":0.45,"37":0.50,"38":0.50,"39":0.55,"40":0.55,"41":0.55,"42":0.60,"43":0.65,"44":0.70,"45":0.75,"46":0.75,"47":0.80,"48":0.80,"49":0.80,"50":0.80,"51":0.80,"52":0.85,"53":0.85,"54":0.85,"55":0.85,"56":0.85,"57":0.85,"58":0.85,"59":0.85,"60":0.85,"61":0.90,"62":0.95,"63":0.95,"64":0.95,"65":0.95,"66":1.00,"67":1.05,"68":1.10,"69":1.15,"70":1.20,"71":1.20,"72":1.20,"73":1.20,"74":1.20,"75":1.20,"76":1.20,"77":1.20,"78":1.20,"79":1.20,"80":1.25},
		"3":{"6":0.100,"7":0.125,"8":0.15,"9":0.200,"10":0.225,"11":0.250,"12":0.20,"13":0.20,"14":0.25,"15":0.25,"16":0.30,"17":0.35,"18":0.40,"19":0.45,"20":0.45,"21":0.45,"22":0.50,"23":0.50,"24":0.50,"25":0.55,"26":0.55,"27":0.60,"28":0.65,"29":0.70,"30":0.75,"31":0.80,"32":0.80,"33":0.80,"34":0.85,"35":0.85,"36":0.90,"37":0.90,"38":0.90,"39":0.90,"40":0.90,"41":0.90,"42":0.95,"43":1.00,"44":1.05,"45":1.10,"46":1.15,"47":1.15,"48":1.20,"49":1.25,"50":1.25,"51":1.30,"52":1.30,"53":1.30,"54":1.30,"55":1.30,"56":1.30,"57":1.35,"58":1.40,"59":1.40,"60":1.40,"61":1.45,"62":1.45,"63":1.50,"64":1.50,"65":1.55,"66":1.55,"67":1.60,"68":1.65,"69":1.70,"70":1.75,"71":1.80,"72":1.85,"73":1.90,"74":1.90,"75":1.90,"76":1.90,"77":1.90,"78":1.90,"79":1.90,"80":1.95},
		"4":{"6":0.175,"7":0.200,"8":0.25,"9":0.300,"10":0.350,"11":0.375,"12":0.35,"13":0.35,"14":0.40,"15":0.45,"16":0.50,"17":0.55,"18":0.60,"19":0.65,"20":0.70,"21":0.70,"22":0.75,"23":0.75,"24":0.80,"25":0.85,"26":0.85,"27":0.90,"28":0.95,"29":1.00,"30":1.05,"31":1.10,"32":1.15,"33":1.20,"34":1.25,"35":1.25,"36":1.35,"37":1.35,"38":1.35,"39":1.35,"40":1.35,"41":1.40,"42":1.45,"43":1.50,"44":1.55,"45":1.60,"46":1.65,"47":1.70,"48":1.75,"49":1.80,"50":1.85,"51":1.90,"52":1.90,"53":1.90,"54":1.90,"55":1.95,"56":2.00,"57":2.05,"58":2.10,"59":2.15,"60":2.20,"61":2.25,"62":2.30,"63":2.35,"64":2.40,"65":2.40,"66":2.40,"67":2.40,"68":2.40,"69":2.45,"70":2.50,"71":2.55,"72":2.60,"73":2.65,"74":2.70,"75":2.75,"76":2.85,"77":2.85,"78":2.85,"79":2.85,"80":2.85},
		"5":{"6":0.250,"7":0.300,"8":0.35,"9":0.425,"10":0.475,"11":0.525,"12":0.50,"13":0.55,"14":0.60,"15":0.65,"16":0.70,"17":0.75,"18":0.85,"19":0.90,"20":0.95,"21":1.00,"22":1.05,"23":1.10,"24":1.15,"25":1.20,"26":1.25,"27":1.30,"28":1.35,"29":1.40,"30":1.45,"31":1.50,"32":1.55,"33":1.60,"34":1.65,"35":1.70,"36":1.75,"37":1.80,"38":1.85,"39":1.90,"40":1.95,"41":2.00,"42":2.05,"43":2.10,"44":2.15,"45":2.25,"46":2.30,"47":2.35,"48":2.40,"49":2.45,"50":2.50,"51":2.55,"52":2.60,"53":2.65,"54":2.70,"55":2.75,"56":2.85,"57":2.90,"58":2.95,"59":3.30,"60":3.05,"61":3.10,"62":3.15,"63":3.20,"64":3.25,"65":3.30,"66":3.35,"67":3.40,"68":3.45,"69":3.50,"70":3.55,"71":3.60,"72":3.65,"73":3.70,"74":3.75,"75":3.80,"76":3.85,"77":3.90,"78":3.95,"79":4.00,"80":4.05},
		"6":{"6":0.350,"7":0.450,"8":0.50,"9":0.575,"10":0.650,"11":0.700,"12":0.70,"13":0.80,"14":0.90,"15":0.95,"16":1.00,"17":1.05,"18":1.15,"19":1.20,"20":1.30,"21":1.35,"22":1.40,"23":1.50,"24":1.60,"25":1.65,"26":1.70,"27":1.75,"28":1.85,"29":1.90,"30":2.00,"31":2.05,"32":2.10,"33":2.20,"34":2.30,"35":2.40,"36":2.50,"37":2.55,"38":2.60,"39":2.65,"40":2.70,"41":2.75,"42":2.80,"43":2.90,"44":2.95,"45":3.00,"46":3.10,"47":3.20,"48":3.30,"49":3.40,"50":3.50,"51":3.50,"52":3.50,"53":3.60,"54":3.70,"55":3.80,"56":3.80,"57":3.90,"58":4.00,"59":4.10,"60":4.20,"61":4.20,"62":4.30,"63":4.35,"64":4.40,"65":4.45,"66":4.50,"67":4.55,"68":4.60,"69":4.70,"70":4.80,"71":4.90,"72":5.00,"73":5.10,"74":5.15,"75":5.20,"76":5.25,"77":5.30,"78":5.35,"79":5.40,"80":5.45}
	};

    let bowsRotation = { "1":0.08314,"2":0.16515,"3":0.24500,"4":0.32175,"5":0.39480,"6":0.46365, };

    let posCorner = {"1":0.76,"2":0.68, "3":0.605, "4":0.51, "5":0.43, "6":0.35};

    let leanToPos = params.p_w/-2 - params.lean_p_w/2;
    let leanTohInc = roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w]/2 - 0.15;
    
    let leanToPosR = params.p_w/2 + params.leanR_p_w/2;
    let leanTohIncR = roofMiddleHeight[params.b_l_t_r_pR][2*params.leanR_p_w]/2 - 0.15;

    // let rHeight = (params.b_l_t_r_p == "2")? 0 : (params.o_v_h_n_g==true)? 0.06 : 0.02
    let overHangSide = (params.o_v_h_n_g==true) ? Number(const_var.isOverhang.side.size) : 0.5
    let overHangEnd = (params.o_v_h_n_g_e==true)?Number(const_var.isOverhang.end.size):0.25
    // let overHangSideRC = (params.o_v_h_n_g==true)?0.7:0.2
    let gap = 0.07
    let rHeight = params.lean_p_h + gap - ((params.b_l_t_r_p/12)*overHangSide);
    /*Left Front Lean-to Porch Roof*/

    if (const_var.L_F_L_P.getObjectByName("LFLPorchRoof")!=undefined) {
        const LFLPorchRoof = const_var.L_F_L_P.getObjectByName("LFLPorchRoof").clone();
    let hdfp = params.p_h - (params.lean_p_h + Number(params.b_l_t_r_p));

    if(params.p_r_s=="1"){
        var quad_vertices =
        [
    
        params.lean_p_w-0.168, params.lean_p_h+0.071, params.lean_p_w-0.168,
        0,  params.lean_p_h+0.071, params.lean_p_w-0.168,
        0.0,params.lean_p_h+(roofMiddleHeight[params.b_l_t_r_p][params.lean_p_w]*2)+0.03, 0.0,
        params.lean_p_w-0.168, params.lean_p_h+0.071, 0.0,
    
        ];
      }else{
        var quad_vertices =
        [
    
        params.lean_p_w+overHangSide, rHeight, params.lean_p_w+overHangSide,
        0,  rHeight, params.lean_p_w+overHangSide,
        -0.02,params.lean_p_h+roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w]+0.065, -0.02,
        params.lean_p_w+overHangSide, rHeight, 0.0,
        
    
        ];
      }
    if(params.p_r_s=="3"){
        var quad_uvs =
           [
    
            0.0, 0.0,
            -1.0, 0.0,
            -1.0, -1.0,
            -1.0, -1.0,
        
           ];
    }else{ 
    var quad_uvs =
            [
            0.0, -1.0,
            -1.0, -1.0,
            -1.0, 0.0,
            0.0, -1.0,
        
            ];
        }
        
    let vertices = new Float32Array( quad_vertices );
    let uvs = new Float32Array( quad_uvs);
    LFLPorchRoof.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    LFLPorchRoof.geometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
    let roofImg = verticalTexture;
    if(params.p_r_s=="3") {
        roofImg = verticalTexture;
    } else {
        roofImg = horizontalTexture;
    }
    let rCalor = params.p_r_c.replace("#","0x");   
    LFLPorchRoof.position.set(params.p_w/-2,0.03+wallDistance,params.p_d/2);
    LFLPorchRoof.rotation.y = Math.PI/-2
    LFLPorchRoof.visible = params.add_left_front_lean_porch;
    LFLPorchRoof.visible = true;
    LFLPorchRoof.name = "LFLPorchRoof";
    let LFLPorchRoofloader = new THREE.TextureLoader();
    let LFLPorchTexture = LFLPorchRoofloader.load(process.env.REACT_APP_BASE_URL+roofImg, function(texture1) {
       LFLPorchTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
       LFLPorchTexture.wrapS = THREE.RepeatWrapping; 
       LFLPorchTexture.wrapT = THREE.RepeatWrapping;
       LFLPorchRoof.material.map = texture1;
       LFLPorchRoof.material.bumpMap = texture1;
       LFLPorchRoof.material.bumpScale = 0.01
       LFLPorchRoof.material.metalness = 1
       LFLPorchRoof.material.roughness = 0.8
       LFLPorchRoof.material.anisotropy = 10;
       LFLPorchRoof.material.shininess = 10
       //LFLPorchRoof.material.envMap = texture1;
       LFLPorchRoof.material.needsUpdate = true;
       LFLPorchRoof.material.emissiveMap = texture1;
       LFLPorchRoof.material.emissiveIntensity = 1;
       if(params.p_r_s=="3"){
           LFLPorchRoof.material.map.repeat.set(-Math.round(((params.lean_p_w/2)+(params.lean_p_w/2/3))*2),1.8);
        } else {
            // LFLPorchRoof.material.map.rotation = Math.PI
            LFLPorchRoof.material.map.repeat.set(1,Math.round((2*params.lean_p_w/3)*2));
        }
    });
    LFLPorchRoof.material.color.setHex( rCalor );

    if(params.is_translusant==true){
        LFLPorchRoof.material.transparent = true;
        LFLPorchRoof.material.opacity = 0.1;
        // LFLPorchRoof.material.opacity =0.3;
        LFLPorchRoof.material.alphaTest =false;
        LFLPorchRoof.material.clearAlpha =1;
      } else {
          LFLPorchRoof.material.transparent = true;
          LFLPorchRoof.material.opacity = 1;
          LFLPorchRoof.material.alphaTest =0;
          LFLPorchRoof.material.clearAlpha =null;
      }

    L_L_F_P_Roof.add(LFLPorchRoof);

    }	

	//Double Left Front Lean-to Porch Roof
	if (L_L_F_P_Roof.getObjectByName("double_LFLPorchRoof")==undefined) {
    
		let double_LFLPorchRoof = const_var.L_F_L_P.getObjectByName("LFLDoublePorchRoof").clone();

        let hdfp = params.p_h - (params.lean_p_h + Number(params.b_l_t_r_p));
        let rHeight = params.lean_p_h + gap - ((params.b_l_t_r_p/12)*overHangSide);
        if(params.p_r_s=="1"){
            var quad_verticesD =
            [
        
            params.lean_p_w-0.168, params.lean_p_h+0.071, params.lean_p_w-0.168,
            0,  params.lean_p_h+0.071, params.lean_p_w-0.168,
            0.0,params.lean_p_h+(roofMiddleHeight[params.b_l_t_r_p][params.lean_p_w]*2)+0.03, 0.0,
            params.lean_p_w-0.168, params.lean_p_h+0.071, 0.0,
        
            ];
          }else{
            var quad_verticesD =
            [
        
            params.lean_p_w+overHangSide, rHeight, params.lean_p_w+overHangSide,
            0,  rHeight, params.lean_p_w+overHangSide,
            -0.02,params.lean_p_h+roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w]+0.065, -0.02,
            params.lean_p_w+overHangSide, rHeight, 0.0,
            
        
            ];
          }
        if(params.p_r_s=="3"){
            var quad_uvsD =
               [
        
                0.0, 0.0,
                -1.0, 0.0,
                -1.0, -1.0,
                -1.0, -1.0,
            
               ];
        }else{ 
        var quad_uvsD =
                [
                0.0, -1.0,
                -1.0, -1.0,
                -1.0, 0.0,
                0.0, -1.0,
            
                ];
            }
            
        let vertices = new Float32Array( quad_verticesD );
        let uvs = new Float32Array( quad_uvsD);
        double_LFLPorchRoof.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
        double_LFLPorchRoof.geometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
        let roofImg = verticalTexture;
        if(params.p_r_s=="3") {
            roofImg = verticalTexture;
        } else {
            roofImg = horizontalTexture;
        }
        let rCalor = params.p_r_c.replace("#","0x");   
        double_LFLPorchRoof.position.set(params.p_w/-2,0.02+wallDistance,params.p_d/2);
        double_LFLPorchRoof.rotation.y = Math.PI/-2
        double_LFLPorchRoof.visible = params.add_left_front_lean_porch;
        double_LFLPorchRoof.visible = (params.is_translusant==true)? false :true;
        double_LFLPorchRoof.name = "double_LFLPorchRoof";
        let LFLPorchRoofloader = new THREE.TextureLoader();
        let LFLPorchTexture = LFLPorchRoofloader.load(process.env.REACT_APP_BASE_URL+roofImg, function(texture1) {
           LFLPorchTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 16);
           LFLPorchTexture.wrapS = THREE.RepeatWrapping; 
           LFLPorchTexture.wrapT = THREE.RepeatWrapping;
           double_LFLPorchRoof.material.map = texture1;
        //    //double_LFLPorchRoof.material.envMap = texture1;
           double_LFLPorchRoof.material.needsUpdate = true;
        //    double_LFLPorchRoof.material.emissiveMap = texture1;
        //    double_LFLPorchRoof.material.emissiveIntensity = 1;
           if(params.p_r_s=="3"){
               double_LFLPorchRoof.material.map.repeat.set(-Math.round(((params.lean_p_w/2)+(params.lean_p_w/2/3))*2),1.8);
            } else {
                double_LFLPorchRoof.material.map.repeat.set(1,Math.round((2*params.lean_p_w/3)*2));
            }
            double_LFLPorchRoof.material.needsUpdate = true;
        });
        double_LFLPorchRoof.material.color.setHex( "0xffffff" );
		L_L_F_P_Roof.add(double_LFLPorchRoof);
	  }

    //Left Front Lean Porch ridge cap
    if (const_var.b_t_M_L.getObjectByName("LFLPorchRidgeCap")!=undefined) {
        let LFLPorchRidgeCap = const_var.b_t_M_L.getObjectByName("LFLPorchRidgeCap").clone();
        let rcquad_vertices = [
	    	(params.p_w/-2)-params.lean_p_w-overHangSide,  params.lean_p_h + gap - ((params.b_l_t_r_p/12)*overHangSide), (params.p_d/2)+params.lean_p_w+overHangSide - 0.3,
	    	(params.p_w/-2)-params.lean_p_w-overHangSide,  params.lean_p_h + gap - ((params.b_l_t_r_p/12)*overHangSide), (params.p_d/2)+params.lean_p_w+overHangSide,
	    	params.p_w/-2, params.lean_p_h+((params.b_l_t_r_p/12)*params.lean_p_w) + 0.05, params.p_d/2,
	    	(params.p_w/-2), params.lean_p_h+((params.b_l_t_r_p/12)*params.lean_p_w) + 0.05, (params.p_d/2)-0.3,
        
	    	(params.p_w/-2)+0.3-params.lean_p_w-overHangSide,  params.lean_p_h + gap - ((params.b_l_t_r_p/12)*overHangSide), (params.p_d/2)+params.lean_p_w+overHangSide,
	    	(params.p_w/-2)-params.lean_p_w-overHangSide,  params.lean_p_h + gap - ((params.b_l_t_r_p/12)*overHangSide), (params.p_d/2)+params.lean_p_w+overHangSide,
	    	params.p_w/-2, params.lean_p_h+((params.b_l_t_r_p/12)*params.lean_p_w) + 0.05, params.p_d/2,
	    	(params.p_w/-2)+0.3, params.lean_p_h+((params.b_l_t_r_p/12)*params.lean_p_w) + 0.05, (params.p_d/2),
	    ];
        let rcvertices = new Float32Array( rcquad_vertices );
        LFLPorchRidgeCap.geometry.setAttribute( 'position', new THREE.BufferAttribute( rcvertices, 3 ) );
        LFLPorchRidgeCap.position.y = 0.08+wallDistance;
        LFLPorchRidgeCap.visible = (params.p_r_s!="3" || params.singleSlope)?false:true;;

        let LFLPorchRidgeCaploader = new THREE.TextureLoader();
		let roofTexture = LFLPorchRidgeCaploader.load(process.env.REACT_APP_BASE_URL+horizontalTexture, function(texture1) {
			roofTexture.wrapS = THREE.RepeatWrapping; 
			roofTexture.wrapT = THREE.RepeatWrapping;
		    LFLPorchRidgeCap.material.map = texture1;
		    LFLPorchRidgeCap.material.emissiveMap = texture1;
		    LFLPorchRidgeCap.material.emissiveIntensity = 1;
		    LFLPorchRidgeCap.material.map.rotation = -Math.PI/2;
		    LFLPorchRidgeCap.material.map.repeat.set(1,-0.1);
		    LFLPorchRidgeCap.material.needsUpdate = true
	 	})


        if(params.is_translusant==true){
            LFLPorchRidgeCap.material.transparent = true;
            LFLPorchRidgeCap.material.opacity = 0.1;
            // LFLPorchRidgeCap.material.opacity =0.3;
            LFLPorchRidgeCap.material.alphaTest =false;
            LFLPorchRidgeCap.material.clearAlpha =1;
          } else {
              LFLPorchRidgeCap.material.transparent = true;
              LFLPorchRidgeCap.material.opacity = 1;
              LFLPorchRidgeCap.material.alphaTest =0;
              LFLPorchRidgeCap.material.clearAlpha =null;
          }
        L_L_F_P_Roof.add(LFLPorchRidgeCap);
    }
    


    /*Left Front Lean-to Porch Left curved Roof*/

    if (const_var.L_F_L_P.getObjectByName("LFLPorchLeftCurve")!= undefined) {
        let LFLPorchLeftCurve = const_var.L_F_L_P.getObjectByName("LFLPorchLeftCurve").clone();

    var verticesT = [
    { pos: [ 0.25,  0.0,  params.lean_p_w-0.165], norm: [ -1,  0,  0], uv: [0, 0], }, // 4 uv: [0, 0],
    { pos: [ 0.25,  0.0,   0]                     , norm: [ -1,  0,  0], uv: [0.008, 0], }, // 5 uv: [1, 0],
    { pos: [ 0.13, -0.005,  params.lean_p_w-0.05], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    { pos: [ 0.13, -0.005, 0]                     , norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
    
    { pos: [ 0.13, -0.005,  params.lean_p_w-0.05], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
    { pos: [ 0.13, -0.005, 0]                     , norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
    { pos: [ 0.07, -0.015,  params.lean_p_w+0.01], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    { pos: [ 0.07, -0.015, 0]                     , norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
    
    { pos: [ 0.07, -0.015,  params.lean_p_w+0.01], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
    { pos: [ 0.07, -0.015, 0]                     , norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
    { pos: [ 0.05, -0.025,  params.lean_p_w+0.03], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    { pos: [ 0.05, -0.025, 0]                     , norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
    
    { pos: [ 0.05, -0.025,  params.lean_p_w+0.03], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
    { pos: [ 0.05, -0.025, 0]                     , norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
    { pos: [ 0.02, -0.045,  params.lean_p_w+0.047], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    { pos: [ 0.02, -0.045, 0]                      , norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7

    { pos: [ 0.00, -0.075,  params.lean_p_w+0.057], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 0], 4
    { pos: [ 0.00, -0.075, 0]                      , norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 0], 5
    { pos: [ 0.02, -0.045,  params.lean_p_w+0.047], norm: [ -1,  0,  0], uv: [0, 0.008], }, // 6 uv: [0, 1],
    { pos: [ 0.02, -0.045, 0]                      , norm: [ -1,  0,  0], uv: [0.008, 0.008], }, // 7 uv: [1, 1],
    
    ];
    var positionsT = [];
    var normalsT = [];
    var uvsT = [];
    for (var vertex of verticesT) {
      positionsT.push(...vertex.pos);
      normalsT.push(...vertex.norm);
      uvsT.push(...vertex.uv);
    }
  
    var geometryT = new THREE.BufferGeometry();
    var positionNumComponents = 3;
    var normalNumComponents = 3;
    var uvNumComponents = 2;
    LFLPorchLeftCurve.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positionsT), positionNumComponents));
    geometryT.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normalsT), normalNumComponents));
    geometryT.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvsT), uvNumComponents));
	geometryT.setIndex([
	//0, 1, 2, 2, 1, 3, 3, 2, 4, 4, 3, 5, 5, 4, 6, 6, 5, 7
     0,  1,  2,   2,  1,  3,
     4,  5,  6,   6,  5,  7,
     8,  9, 10,  10,  9, 11,
    12, 13, 14,  14, 13, 15,
    16, 17, 18,  18, 17, 19,
    ]); 
    // var materialT = new THREE.MeshBasicMaterial({
    //     side:THREE.DoubleSide,
    //     color:0xFFFF00
    //     });
 
    //  var LFLPorchLeftCurve = new THREE.Mesh(geometryT, materialT);
     var roofImg = horizontalTexture;
		if(params.p_r_s=="1"){
			roofImg = verticalTexture;
		} else {
			roofImg = horizontalTexture;
		}
		
	 var lrRoofloader = new THREE.TextureLoader();
	 var textureT = lrRoofloader.load(process.env.REACT_APP_BASE_URL+roofImg, function(texture1) {
		   texture1.wrapS = THREE.RepeatWrapping;
		   texture1.wrapT = THREE.RepeatWrapping;
           LFLPorchLeftCurve.material.map = texture1 
           if(params.p_r_s=="1") {
               LFLPorchLeftCurve.material.map.rotation = -Math.PI/2;
               LFLPorchLeftCurve.material.map.repeat.set(24,1);
           } else {
               LFLPorchLeftCurve.material.map.rotation = Math.PI/2;
               LFLPorchLeftCurve.material.map.repeat.set(1,params.p_w/8);
           }
	   });	
	LFLPorchLeftCurve.name = "LFLPorchLeftCurve";
    LFLPorchLeftCurve.visible = true;
	// LFLPorchLeftCurve.scale.set(0.99855,roofMiddleHeight[params.b_l_t_r_p][params.lean_p_w],params.lean_p_w+0.06);
    LFLPorchLeftCurve.scale.x = 0.99855;
    LFLPorchLeftCurve.scale.y = roofMiddleHeight[params.b_l_t_r_p][params.lean_p_w];
	LFLPorchLeftCurve.position.set(-params.lean_p_w-(params.p_w/2)-0.08,params.lean_p_h+0.09 + wallDistance,params.p_d/2+params.lean_p_w/2);
    LFLPorchLeftCurve.position.z = params.p_d/2
    // LFLPorchLeftCurve.position.x = -params.lean_p_w-(params.p_w/2)-0.08;
    // LFLPorchLeftCurve.position.y = params.lean_p_h+0.09;
	LFLPorchLeftCurve.rotation.z = 0.045;
	LFLPorchLeftCurve.scale.y = 7;
	var rCalor = params.p_r_c.replace("#","0x");
	LFLPorchLeftCurve.material.color.setHex( rCalor );
	LFLPorchLeftCurve.visible = (params.p_r_s=="1")?true:false;
    if(params.is_translusant==true){
        LFLPorchLeftCurve.material.transparent = true;
        LFLPorchLeftCurve.material.opacity = 0.1;
        // LFLPorchLeftCurve.material.opacity =0.3;
        LFLPorchLeftCurve.material.alphaTest =false;
        LFLPorchLeftCurve.material.clearAlpha =1;
      } else {
          LFLPorchLeftCurve.material.transparent = true;
          LFLPorchLeftCurve.material.opacity = 1;
          LFLPorchLeftCurve.material.alphaTest =0;
          LFLPorchLeftCurve.material.clearAlpha =null;
      }
    L_L_F_P_Roof.add(LFLPorchLeftCurve);
    }

    //Double Left Front Lean-to Porch Left curved Roof
	if (L_L_F_P_Roof.getObjectByName("double_LFLPorchLeftCurve")==undefined) {
    
		let LFLPorchLeftCurveClone = L_L_F_P_Roof.getObjectByName("LFLPorchLeftCurve");

		if(L_L_F_P_Roof.getObjectByName("LFLPorchLeftCurve") != undefined){
		let double_LFLPorchLeftCurve = LFLPorchLeftCurveClone.clone();
		let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xCFCFCF });
		double_LFLPorchLeftCurve = new THREE.Mesh(double_LFLPorchLeftCurve.geometry,leftDoubleMaterial);
		double_LFLPorchLeftCurve.name = "double_LFLPorchLeftCurve"
		double_LFLPorchLeftCurve.visible = (params.is_translusant==true)? false : LFLPorchLeftCurveClone.visible
		double_LFLPorchLeftCurve.scale.set(LFLPorchLeftCurveClone.scale.x , LFLPorchLeftCurveClone.scale.y , LFLPorchLeftCurveClone.scale.z-0.001);
		double_LFLPorchLeftCurve.position.set(LFLPorchLeftCurveClone.position.x+0.03, LFLPorchLeftCurveClone.position.y -0.03 , LFLPorchLeftCurveClone.position.z);
		double_LFLPorchLeftCurve.rotation.set(LFLPorchLeftCurveClone.rotation.x , LFLPorchLeftCurveClone.rotation.y , LFLPorchLeftCurveClone.rotation.z)
		
		let doubleTextureImg = (params.p_r_s == "3") ? verticalTexture: horizontalTexture;
		let doubleWallLoader = new THREE.TextureLoader();
	  
		  let  dWallTexture = doubleWallLoader.load(process.env.REACT_APP_BASE_URL+doubleTextureImg , function(wallTexture) {
			if(LFLPorchLeftCurveClone.material.map != null){
		  let mapRepeat = LFLPorchLeftCurveClone.material.map.repeat;
		  let mapRepeatRot = LFLPorchLeftCurveClone.material.map.rotation;
			dWallTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5) 
			double_LFLPorchLeftCurve.material.map = wallTexture;
			double_LFLPorchLeftCurve.material.map.wrapS = THREE.RepeatWrapping;
			double_LFLPorchLeftCurve.material.map.wrapT = THREE.RepeatWrapping;
			double_LFLPorchLeftCurve.material.map.offset.x = params.p_w;
			double_LFLPorchLeftCurve.material.map.offset.y = params.p_w;
			double_LFLPorchLeftCurve.material.map.rotation = mapRepeatRot;
			double_LFLPorchLeftCurve.material.map.repeat.set(mapRepeat.x,mapRepeat.y);
            double_LFLPorchLeftCurve.material.color.set(0xFFFFFF)
            double_LFLPorchLeftCurve.material.needsUpdate = true;
			}
        });
        L_L_F_P_Roof.add(double_LFLPorchLeftCurve);
		}
	  }

    /*Left Front Lean-to Porch Front curved Roof*/
    if (const_var.L_F_L_P.getObjectByName("LFLPorchFrontCurve")!= undefined) {
        let LFLPorchFrontCurve = const_var.L_F_L_P.getObjectByName("LFLPorchFrontCurve").clone();

    var verticesT = [
    // { pos: [ 0.25,  0.0,    0.5], norm: [ -1,  0,  0], uv: [0, 0], }, // 4 uv: [0, 0],
    // { pos: [ 0.25,  0.0,   -0.4835], norm: [ -1,  0,  0], uv: [0.008, 0], }, // 5 uv: [1, 0],
    // { pos: [ 0.13, -0.005,  0.5], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    // { pos: [ 0.13, -0.005, -0.4935], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
    
    // { pos: [ 0.13, -0.005,  0.5], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
    // { pos: [ 0.13, -0.005, -0.4935], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
    // { pos: [ 0.07, -0.015,  0.5], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    // { pos: [ 0.07, -0.015, -0.498], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
    
    // { pos: [ 0.07, -0.015,  0.5], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
    // { pos: [ 0.07, -0.015, -0.498], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
    // { pos: [ 0.05, -0.025,  0.5], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    // { pos: [ 0.05, -0.025, -0.4995], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
    
    // { pos: [ 0.05, -0.025,  0.5], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
    // { pos: [ 0.05, -0.025, -0.4995], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
    // { pos: [ 0.02, -0.045,  0.5], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    // { pos: [ 0.02, -0.045, -0.5015], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7

    // { pos: [ 0.00, -0.075,  0.5], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 0], 4
    // { pos: [ 0.00, -0.075, -0.5022], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 0], 5
    // { pos: [ 0.02, -0.045,  0.5], norm: [ -1,  0,  0], uv: [0, 0.008], }, // 6 uv: [0, 1],
    // { pos: [ 0.02, -0.045, -0.5015], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, // 7 uv: [1, 1],




    { pos: [ 0.25, - 0.0 , 0]                      , norm: [ -1,  0,  0], uv: [0.008, 0.008], }, // 7 uv: [1, 1],
    { pos: [ 0.25,   0.0,  -params.lean_p_w+0.165], norm: [ -1,  0,  0], uv: [0, 0], }, // 4 uv: [0, 0],
    { pos: [ 0.13,  -0.005,  0]                     , norm: [ -1,  0,  0], uv: [0.008, 0], }, // 5 uv: [1, 0],
    { pos: [ 0.13, -0.005,  -params.lean_p_w+0.05], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6

    { pos: [ 0.13, -0.005, 0]                     , norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7  
    { pos: [ 0.13, -0.005,  -params.lean_p_w+0.05], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
    { pos: [ 0.07, -0.015, 0]                     , norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
    { pos: [ 0.07, -0.015,  -params.lean_p_w-0.01], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6

    { pos: [ 0.07, -0.015, 0]                     , norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7 
    { pos: [ 0.07, -0.015,  -params.lean_p_w-0.01], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
    { pos: [ 0.05, -0.025, 0]                     , norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
    { pos: [ 0.05, -0.025,  -params.lean_p_w-0.03], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6

    { pos: [ 0.05, -0.025, 0]                     , norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
    { pos: [ 0.05, -0.025,  -params.lean_p_w-0.03], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
    { pos: [ 0.02, -0.045, 0]                     , norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
    { pos: [ 0.02, -0.045,  -params.lean_p_w-0.047], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6

    { pos: [ 0.00, -0.075, 0]                      , norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
    { pos: [ 0.00, -0.075,  -params.lean_p_w-0.057], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 0], 4
    { pos: [ 0.02, -0.045, 0]                      , norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 0], 5
    { pos: [ 0.02, -0.045,  -params.lean_p_w-0.047], norm: [ -1,  0,  0], uv: [0, 0.008], }, // 6 uv: [0, 1],
    
    
    ];
    var positionsT = [];
    var normalsT = [];
    var uvsT = [];
    for (var vertex of verticesT) {
      positionsT.push(...vertex.pos);
      normalsT.push(...vertex.norm);
      uvsT.push(...vertex.uv);
    }
  
    var geometryT = new THREE.BufferGeometry();
    var positionNumComponents = 3;
    var normalNumComponents = 3;
    var uvNumComponents = 2;
      LFLPorchFrontCurve.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positionsT), positionNumComponents));
      geometryT.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normalsT), normalNumComponents));
      geometryT.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvsT), uvNumComponents));
      geometryT.setIndex([
      //0, 1, 2, 2, 1, 3, 3, 2, 4, 4, 3, 5, 5, 4, 6, 6, 5, 7
       0,  1,  2,   2,  1,  3,
       4,  5,  6,   6,  5,  7,
       8,  9, 10,  10,  9, 11,
      12, 13, 14,  14, 13, 15,
      16, 17, 18,  18, 17, 19,
    ]);
    var roofImg = horizontalTexture;
    if(params.p_r_s=="1"){
        roofImg = verticalTexture;
    } else {
        roofImg = horizontalTexture;
    }
       var lrRoofloader = new THREE.TextureLoader();
       var textureT = lrRoofloader.load(process.env.REACT_APP_BASE_URL+roofImg, function(texture1) {
             texture1.wrapS = THREE.RepeatWrapping;
             texture1.wrapT = THREE.RepeatWrapping;
             LFLPorchFrontCurve.material.map = texture1
             if(params.p_r_s=="1") {
                LFLPorchFrontCurve.material.map.rotation = -Math.PI/2;
                LFLPorchFrontCurve.material.map.repeat.set(24,1);
            } else  {
                LFLPorchFrontCurve.material.map.rotation = Math.PI/2;
                LFLPorchFrontCurve.material.map.repeat.set(1,params.p_w/8);
            }
         });	

     LFLPorchFrontCurve.name = "LFLPorchFrontCurve";
     LFLPorchFrontCurve.visible = true;
    //  LFLPorchFrontCurve.scale.set(0.99855,roofMiddleHeight[params.b_l_t_r_p][params.lean_p_w],params.lean_p_w+0.06);
     LFLPorchFrontCurve.scale.x = 0.99855;
     LFLPorchFrontCurve.scale.y = roofMiddleHeight[params.b_l_t_r_p][params.lean_p_w];
    //  LFLPorchFrontCurve.position.set(-(params.p_w/2+params.lean_p_w/2),params.lean_p_h+0.09,params.lean_p_w+0.08+params.p_d/2);
     LFLPorchFrontCurve.position.x = -(params.p_w/2);
     LFLPorchFrontCurve.position.y = params.lean_p_h+0.09 + wallDistance;
     LFLPorchFrontCurve.position.z = params.lean_p_w+0.08+params.p_d/2;
     LFLPorchFrontCurve.rotation.z = 0.045;
     LFLPorchFrontCurve.rotation.y = Math.PI/2;
     LFLPorchFrontCurve.scale.y = 7;
     var rCalor = params.p_r_c.replace("#","0x");
     LFLPorchFrontCurve.material.color.setHex( rCalor );
     LFLPorchFrontCurve.visible = (params.p_r_s=="1")?true:false;

     if(params.is_translusant==true){
        LFLPorchFrontCurve.material.transparent = true;
        LFLPorchFrontCurve.material.opacity = 0.1;
        // LFLPorchFrontCurve.material.opacity =0.3;
        LFLPorchFrontCurve.material.alphaTest =false;
        LFLPorchFrontCurve.material.clearAlpha =1;
      } else {
          LFLPorchFrontCurve.material.transparent = true;
          LFLPorchFrontCurve.material.opacity = 1;
          LFLPorchFrontCurve.material.alphaTest =0;
          LFLPorchFrontCurve.material.clearAlpha =null;
      }
     L_L_F_P_Roof.add(LFLPorchFrontCurve);    
    }

    //Double Left Front Lean-to Porch Front curved Roof
	if (L_L_F_P_Roof.getObjectByName("double_LFLPorchFrontCurve")==undefined) {
    
		let LFLPorchFrontCurveClone = L_L_F_P_Roof.getObjectByName("LFLPorchFrontCurve");

		if(L_L_F_P_Roof.getObjectByName("LFLPorchFrontCurve") != undefined){
		let double_LFLPorchFrontCurve = LFLPorchFrontCurveClone.clone();
		let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xCFCFCF });
		double_LFLPorchFrontCurve = new THREE.Mesh(double_LFLPorchFrontCurve.geometry,leftDoubleMaterial);
		double_LFLPorchFrontCurve.name = "double_LFLPorchFrontCurve"
		double_LFLPorchFrontCurve.visible = (params.is_translusant==true)? false : LFLPorchFrontCurveClone.visible
		double_LFLPorchFrontCurve.scale.set(LFLPorchFrontCurveClone.scale.x , LFLPorchFrontCurveClone.scale.y , LFLPorchFrontCurveClone.scale.z-0.001);
		double_LFLPorchFrontCurve.position.set(LFLPorchFrontCurveClone.position.x, LFLPorchFrontCurveClone.position.y -0.03 , LFLPorchFrontCurveClone.position.z-0.02);
		double_LFLPorchFrontCurve.rotation.set(LFLPorchFrontCurveClone.rotation.x , LFLPorchFrontCurveClone.rotation.y , LFLPorchFrontCurveClone.rotation.z)
		
		let doubleTextureImg = (params.p_r_s == "3") ? verticalTexture: horizontalTexture;
		let doubleWallLoader = new THREE.TextureLoader();
	  
		  let  dWallTexture = doubleWallLoader.load(process.env.REACT_APP_BASE_URL+doubleTextureImg , function(wallTexture) {
			if(LFLPorchFrontCurveClone.material.map != null){
		  let mapRepeat = LFLPorchFrontCurveClone.material.map.repeat;
		  let mapRepeatRot = LFLPorchFrontCurveClone.material.map.rotation;
			dWallTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5) 
			double_LFLPorchFrontCurve.material.map = wallTexture;
			double_LFLPorchFrontCurve.material.map.wrapS = THREE.RepeatWrapping;
			double_LFLPorchFrontCurve.material.map.wrapT = THREE.RepeatWrapping;
			double_LFLPorchFrontCurve.material.map.offset.x = params.p_w;
			double_LFLPorchFrontCurve.material.map.offset.y = params.p_w;
			double_LFLPorchFrontCurve.material.map.rotation = mapRepeatRot;
			double_LFLPorchFrontCurve.material.map.repeat.set(mapRepeat.x,mapRepeat.y);
            double_LFLPorchFrontCurve.material.color.set(0xFFFFFF)
            double_LFLPorchFrontCurve.material.needsUpdate = true;
			}
        });
        L_L_F_P_Roof.add(double_LFLPorchFrontCurve);
		}
	  }
        

    /*Left Front Lean-to Porch Bows and Corners*/

    if (const_var.L_F_L_P.getObjectByName("lfpCornerBow")!=undefined) {
        const lfpCornerBow = const_var.L_F_L_P.getObjectByName("lfpCornerBow").clone();
        lfpCornerBow.name = "lfpCornerBow";
        lfpCornerBow.scale.set(params.p_w/2,0.2,1);	
        lfpCornerBow.position.set(leanToPos+0.08,params.lean_p_h + leanTohInc,params.p_d/2 - 0.12+ params.lean_p_w/2);	
        lfpCornerBow.rotation.z = bowsRotation[params.b_l_t_r_p]-((params.b_l_t_r_p/100)*2.24);
        lfpCornerBow.rotation.y = Math.PI/4;
        lfpCornerBow.scale.x = params.lean_p_w +(params.lean_p_w/2.2)-0.1;
        lfpCornerBow.visible = params.add_left_front_lean_porch;
        lfpCornerBow.visible = true;
        L_L_F_P_Roof.add(lfpCornerBow);
    }

    if (const_var.L_F_L_P.getObjectByName("lfpLeftBow")!=undefined) {
        const lfpLeftBow = const_var.L_F_L_P.getObjectByName("lfpLeftBow").clone();
        lfpLeftBow.name = "lfpLeftBow";
	    lfpLeftBow.scale.set(params.p_w/2,0.2,1);	
	    lfpLeftBow.position.set(leanToPos+0.08,params.lean_p_h + leanTohInc + 0.03,params.p_d/2 - 0.12);	
	    lfpLeftBow.rotation.z = bowsRotation[params.b_l_t_r_p];
	    lfpLeftBow.scale.x = params.lean_p_w + bowsScale[params.b_l_t_r_p][2*params.lean_p_w];
        lfpLeftBow.visible = params.add_left_front_lean_porch;
        lfpLeftBow.visible = true;
        L_L_F_P_Roof.add(lfpLeftBow);
    }

    if (const_var.L_F_L_P.getObjectByName("lfpFrontBow")!=undefined) {
        const lfpFrontBow = const_var.L_F_L_P.getObjectByName("lfpFrontBow").clone();
        lfpFrontBow.name = "lfpFrontBow";
        lfpFrontBow.scale.set(params.p_w/2,0.2,1);	
        lfpFrontBow.position.set(params.p_w/-2+ 0.12,params.lean_p_h + leanTohInc + 0.03,params.p_d/2 - 0.12 + params.lean_p_w/2);	
        lfpFrontBow.rotation.z = bowsRotation[params.b_l_t_r_p];
        lfpFrontBow.rotation.y = Math.PI/2
        lfpFrontBow.scale.x = params.lean_p_w + bowsScale[params.b_l_t_r_p][2*params.lean_p_w];
        lfpFrontBow.visible = params.add_left_front_lean_porch;
        lfpFrontBow.visible = true;
        L_L_F_P_Roof.add(lfpFrontBow);
    }

    if (const_var.L_F_L_P.getObjectByName("lfpBackCorner")!=undefined) {
        const lfpBackCorner = const_var.L_F_L_P.getObjectByName("lfpBackCorner").clone();
        lfpBackCorner.name = "lfpBackCorner";
        lfpBackCorner.position.set((params.p_w/-2 - params.lean_p_w)+0.58,params.lean_p_h -posCorner[params.b_l_t_r_p],params.p_d/2 - 0.12);	
        lfpBackCorner.rotation.z = 1;
        lfpBackCorner.scale.set(1.9,0.25,1);
        lfpBackCorner.visible = params.add_left_Back_lean_porch; 
        lfpBackCorner.visible = true; 
        L_L_F_P_Roof.add(lfpBackCorner);
        const_var.legsForCut["leftLean"][lfpBackCorner.name] = lfpBackCorner;
      }

      if (const_var.L_F_L_P.getObjectByName("lfpCorner")!=undefined) {
        const lfpCorner = const_var.L_F_L_P.getObjectByName("lfpCorner").clone();
        lfpCorner.name = "lfpCorner";
        lfpCorner.position.set((params.p_w/-2 - params.lean_p_w)+0.58-0.12,params.lean_p_h -posCorner[params.b_l_t_r_p]-0.15,(params.p_d/2)+params.lean_p_w - 0.12-0.32);	
        lfpCorner.rotation.z = 1;
        lfpCorner.rotation.y = Math.PI/4
        lfpCorner.scale.set(1.8,0.25,1);
        lfpCorner.visible = params.add_left_Back_lean_porch; 
        lfpCorner.visible = true; 
        L_L_F_P_Roof.add(lfpCorner);    
      }

      if (const_var.L_F_L_P.getObjectByName("lfpFrontCorner")!=undefined) {
        const lfpFrontCorner = const_var.L_F_L_P.getObjectByName("lfpFrontCorner").clone();
        lfpFrontCorner.name = "lfpFrontCorner";
        lfpFrontCorner.position.set((params.p_w)/-2+ 0.12,params.lean_p_h -posCorner[params.b_l_t_r_p],(params.p_d/2)+ (params.lean_p_w)-0.58);	
        lfpFrontCorner.rotation.z = 1;
        lfpFrontCorner.rotation.y = Math.PI/2
        lfpFrontCorner.scale.set(1.8,0.25,1);
        lfpFrontCorner.visible = params.add_left_front_lean_porch; 
        lfpFrontCorner.visible = true; 
        L_L_F_P_Roof.add(lfpFrontCorner);
        const_var.legsForCut["frontLean"][lfpFrontCorner.name] = lfpFrontCorner;
      }


      var EqiDis;
      if(params.fourth_center_cost == true){
          if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
        {
            EqiDis = (params.oncenter_val_with_action!='')?((params.lean_p_w)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.lean_p_w)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0)
        }
    } else {
        if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
        {
            EqiDis = (params.oncenter_val_with_action!='')?((params.lean_p_w)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.lean_p_w)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0)    
        }
      }

    let lfpFrontBowH = { "1":17,"2":11.5,"3":8,"4":6,"5":4.8,"6":2.5, };

	for(let i = (params.lean_p_w/EqiDis), j = (Math.round(params.p_w / 4) + 6), k = Math.round(params.p_d / 4 + 1);i<(params.lean_p_w - 2);i = i+(params.lean_p_w/EqiDis), j++, k++){
        const lfpLeftMiddleBow = const_var.L_F_L_P.getObjectByName("lfpLeftBow").clone();
		lfpLeftMiddleBow.name = "LeftMiddleBow"+ k + "x";
        lfpLeftMiddleBow.material = lfpLeftMiddleBow.material.clone();
		lfpLeftMiddleBow.scale.set(params.p_w/2,0.2,1);	
		lfpLeftMiddleBow.position.set(leanToPos+0.08-(i/2),params.lean_p_h + leanTohInc + 0.03-(i/lfpFrontBowH[params.b_l_t_r_p]),params.p_d/2 - 0.12+i);	
		lfpLeftMiddleBow.rotation.z = bowsRotation[params.b_l_t_r_p];
		lfpLeftMiddleBow.scale.x = params.lean_p_w + bowsScale[params.b_l_t_r_p][params.lean_p_w]-i;
		lfpLeftMiddleBow.visible = params.add_left_front_lean_porch;
		lfpLeftMiddleBow.visible = true;
		L_L_F_P_Roof.add(lfpLeftMiddleBow);

        const lfpBackMiddleCorner = const_var.L_F_L_P.getObjectByName("lfpFrontCorner").clone();
        lfpBackMiddleCorner.name = "LeftMiddleCorner"+ Math.round(params.p_d / 4 + 1) + "x";
        lfpBackMiddleCorner.material = lfpBackMiddleCorner.material.clone();
        lfpBackMiddleCorner.position.set((params.p_w/-2 - params.lean_p_w)+0.58,params.lean_p_h -posCorner[params.b_l_t_r_p],params.p_d/2 - 0.12+i);	
        lfpBackMiddleCorner.rotation.z = 1;
        lfpBackMiddleCorner.scale.set(1.8,0.25,1);
        lfpBackMiddleCorner.visible = params.add_left_front_lean_porch; 
        lfpBackMiddleCorner.visible = true; 
        L_L_F_P_Roof.add(lfpBackMiddleCorner);
        const_var.legsForCut["leftLean"][lfpBackMiddleCorner.name] = lfpBackMiddleCorner;

        const lfpFrontMiddleBow = const_var.L_F_L_P.getObjectByName("lfpFrontBow").clone();
		lfpFrontMiddleBow.name = "FrontMiddleBow" + j + "x";
        lfpFrontMiddleBow.material = lfpFrontMiddleBow.material.clone();
		lfpFrontMiddleBow.scale.set(params.p_w/2,0.2,1);	
		lfpFrontMiddleBow.position.set(params.p_w/-2-i,params.lean_p_h + leanTohInc + 0.03-(i/lfpFrontBowH[params.b_l_t_r_p]),params.p_d/2 - 0.12 + params.lean_p_w/2+(i/2));	
		lfpFrontMiddleBow.rotation.z = bowsRotation[params.b_l_t_r_p];
		lfpFrontMiddleBow.rotation.y = Math.PI/2
		// lfpFrontMiddleBow.rotation.x = Math.PI/2
		// lfpFrontMiddleBow.scale.x = params.lean_p_w + bowsScale[params.b_l_t_r_p][params.lean_p_w]+0.2-i;
		// lfpFrontMiddleBow.scale.x = params.lean_p_w + bowsScale[params.b_l_t_r_p][params.lean_p_w]-((i==15)?i:i-0.2);
		if ( i>= 14) {
			lfpFrontMiddleBow.scale.x = params.lean_p_w + bowsScale[params.b_l_t_r_p][params.lean_p_w]-0.3-i;
		} else {
			lfpFrontMiddleBow.scale.x = params.lean_p_w + bowsScale[params.b_l_t_r_p][params.lean_p_w]-i;
		}

		lfpFrontMiddleBow.visible = params.add_left_front_lean_porch;
		lfpFrontMiddleBow.visible = true;
		L_L_F_P_Roof.add(lfpFrontMiddleBow);

       

        const lfpMiddleFrontCorner = const_var.L_F_L_P.getObjectByName("lfpFrontCorner").clone();
        lfpMiddleFrontCorner.name = "FrontMiddleCorner"+ (Math.round(params.p_w / 5) + 6) + "x";
        lfpMiddleFrontCorner.material = lfpMiddleFrontCorner.material.clone();
        lfpMiddleFrontCorner.position.set((params.p_w)/-2-i,params.lean_p_h -posCorner[params.b_l_t_r_p],(params.p_d/2)+ (params.lean_p_w)-0.58);	
        lfpMiddleFrontCorner.rotation.z = 1;
        lfpMiddleFrontCorner.rotation.y = Math.PI/2
        lfpMiddleFrontCorner.scale.set(1.8,0.25,1);
        lfpMiddleFrontCorner.visible = params.add_left_front_lean_porch; 
        lfpMiddleFrontCorner.visible = true; 
        L_L_F_P_Roof.add(lfpMiddleFrontCorner);
        const_var.legsForCut["frontLean"][lfpMiddleFrontCorner.name] = lfpMiddleFrontCorner;

	}

    /*Left Front Lean-to Porch Trims*/
    if (const_var.L_F_L_P.getObjectByName("lflPorchFrontTrim")!=undefined) {
        const lflPorchFrontTrim = const_var.L_F_L_P.getObjectByName("lflPorchFrontTrim").clone();
	    lflPorchFrontTrim.name = "lflPorchFrontTrim";
	    lflPorchFrontTrim.scale.set(0.3,params.lean_p_w+0.2,0.9);
	    lflPorchFrontTrim.position.set(params.p_w/-2+0.08-(params.lean_p_w/2),params.lean_p_h-0.10,params.p_d/2+params.lean_p_w+0.02);
	    lflPorchFrontTrim.rotation.x=Math.PI/-2+0.25;
	    lflPorchFrontTrim.rotation.z=Math.PI/2;
	    lflPorchFrontTrim.visible = (params.p_r_s=="1")?false:true;
        if(params.is_translusant==true){
            lflPorchFrontTrim.material.transparent = true;
            lflPorchFrontTrim.material.opacity = 0.1;
            // lflPorchFrontTrim.material.opacity =0.3;
            lflPorchFrontTrim.material.alphaTest =false;
            lflPorchFrontTrim.material.clearAlpha =1;
          } else {
              lflPorchFrontTrim.material.transparent = true;
              lflPorchFrontTrim.material.opacity = 1;
              lflPorchFrontTrim.material.alphaTest =0;
              lflPorchFrontTrim.material.clearAlpha =null;
          }
        L_L_F_P_Roof.add(lflPorchFrontTrim);
    }
    if (const_var.L_F_L_P.getObjectByName("lflPorchLeftTrim")!=undefined) {
        const lflPorchLeftTrim = const_var.L_F_L_P.getObjectByName("lflPorchLeftTrim").clone();
	    lflPorchLeftTrim.name = "lflPorchLeftTrim";
	    lflPorchLeftTrim.scale.set(0.3,params.lean_p_w +0.1,0.9);
	    lflPorchLeftTrim.position.set(params.p_w/-2-0.03-params.lean_p_w,params.lean_p_h-0.103,params.p_d/2+(params.lean_p_w/2)+0.02);
	    lflPorchLeftTrim.rotation.x=Math.PI/-2;
	    lflPorchLeftTrim.rotation.y=-0.25;
	    lflPorchLeftTrim.visible = (params.p_r_s=="1")?false:true;
        if(params.is_translusant==true){
            lflPorchLeftTrim.material.transparent = true;
            lflPorchLeftTrim.material.opacity = 0.1;
            // lflPorchLeftTrim.material.opacity =0.3;
            lflPorchLeftTrim.material.alphaTest =false;
            lflPorchLeftTrim.material.clearAlpha =1;
          } else {
              lflPorchLeftTrim.material.transparent = true;
              lflPorchLeftTrim.material.opacity = 1;
              lflPorchLeftTrim.material.alphaTest =0;
              lflPorchLeftTrim.material.clearAlpha =null;
          }
        L_L_F_P_Roof.add(lflPorchLeftTrim);
    }



    /*Right Front Lean-to Porch Roof*/

    if (const_var.R_F_L_P.getObjectByName("RFLPorchRoof")!=undefined) {
        const RFLPorchRoof = const_var.R_F_L_P.getObjectByName("RFLPorchRoof").clone();
    let hdfp = params.p_h - (params.leanR_p_h + Number(params.b_l_t_r_p));
    let rHeight = params.leanR_p_h + gap - ((params.b_l_t_r_pR/12)*overHangSide);
    if(params.p_r_s=="1"){
        var quad_verticesR =
        [
    
        params.leanR_p_w-0.168, params.leanR_p_h+0.071, params.leanR_p_w-0.168,
        0,  params.leanR_p_h+0.071, params.leanR_p_w-0.168,
        0.0,params.leanR_p_h+(roofMiddleHeight[params.b_l_t_r_pR][params.leanR_p_w]*2)+0.03, 0.0,
        params.leanR_p_w-0.168, params.leanR_p_h+0.071, 0.0,
    
        ];
      }else{
        var quad_verticesR =
        [
    
        params.leanR_p_w+overHangSide, rHeight, params.leanR_p_w+overHangSide,
        0,  rHeight, params.leanR_p_w+overHangSide,
        -0.02,params.leanR_p_h+(roofMiddleHeight[params.b_l_t_r_pR][params.leanR_p_w]*2)+0.065, -0.02,
        params.leanR_p_w+overHangSide, rHeight, 0.0,
        
    
        ];
      }
    if(params.p_r_s=="3"){
        var quad_uvsR =
           [
    
            0.0, 0.0,
            -1.0, 0.0,
            -1.0, -1.0,
            -1.0, -1.0,
        
           ];
    }else{ 
    var quad_uvsR =
            [
            0.0, -1.0,
            -1.0, -1.0,
            -1.0, 0.0,
            0.0, -1.0,
        
            ];
        }
        
    let vertices = new Float32Array( quad_verticesR );
    let uvsR = new Float32Array( quad_uvsR);
    RFLPorchRoof.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    RFLPorchRoof.geometry.setAttribute( 'uv', new THREE.BufferAttribute( uvsR, 2 ) );
    let roofImg = verticalTexture;
    if(params.p_r_s=="3") {
        roofImg = verticalTexture;
    } else {
        roofImg = horizontalTexture;
    }
    let RFLPorchRoofloader = new THREE.TextureLoader();
    let rCalor = params.p_r_c.replace("#","0x");   
    RFLPorchRoof.position.set(params.p_w/2,0.03+wallDistance,params.p_d/2);
    RFLPorchRoof.visible = params.add_left_front_lean_porch;
    RFLPorchRoof.visible = true;
    let RFLPorchtexture = RFLPorchRoofloader.load(process.env.REACT_APP_BASE_URL+roofImg, function(texture1) {
       RFLPorchtexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
       RFLPorchtexture.wrapS = THREE.RepeatWrapping; 
       RFLPorchtexture.wrapT = THREE.RepeatWrapping;
       RFLPorchRoof.material.map = texture1;
       RFLPorchRoof.material.bumpMap = texture1;
       RFLPorchRoof.material.bumpScale = 0.01
       RFLPorchRoof.material.metalness = 1
       RFLPorchRoof.material.roughness = 0.8
       RFLPorchRoof.material.anisotropy = 10;
       RFLPorchRoof.material.shininess = 10
       //RFLPorchRoof.material.envMap = texture1;
       RFLPorchRoof.material.needsUpdate = true;
       RFLPorchRoof.material.emissiveMap = texture1;
       RFLPorchRoof.material.emissiveIntensity = 1;
       if(params.p_r_s=="3"){
           RFLPorchRoof.material.map.repeat.set(((params.leanR_p_w/2)+(params.leanR_p_w/2/3))*2,1);
        } else {
            RFLPorchRoof.material.map.repeat.set(1,(params.leanR_p_w/1.5)*2);
        }
    });
    RFLPorchRoof.material.color.setHex( rCalor );
    if(params.is_translusant==true){
        RFLPorchRoof.material.transparent = true;
        RFLPorchRoof.material.opacity = 0.1;
        // RFLPorchRoof.material.opacity =0.3;
        RFLPorchRoof.material.alphaTest =false;
        RFLPorchRoof.material.clearAlpha =1;
      } else {
          RFLPorchRoof.material.transparent = true;
          RFLPorchRoof.material.opacity = 1;
          RFLPorchRoof.material.alphaTest =0;
          RFLPorchRoof.material.clearAlpha =null;
      }
    R_L_F_P_Roof.add(RFLPorchRoof);

    }	

    //Double Right Front Lean-to Porch Roof
    if (const_var.R_F_L_P.getObjectByName("RFLDoublePorchRoof")!=undefined) {
        const RFLDoublePorchRoof = const_var.R_F_L_P.getObjectByName("RFLDoublePorchRoof").clone();
    let hdfp = params.p_h - (params.leanR_p_h + Number(params.b_l_t_r_p));
    let rHeight = params.leanR_p_h + gap - ((params.b_l_t_r_pR/12)*overHangSide);
    if(params.p_r_s=="1"){
        var quad_verticesD =
        [
    
        params.leanR_p_w-0.168, params.leanR_p_h+0.071, params.leanR_p_w-0.168,
        0,  params.leanR_p_h+0.071, params.leanR_p_w-0.168,
        0.0,params.leanR_p_h+(roofMiddleHeight[params.b_l_t_r_pR][params.leanR_p_w]*2)+0.03, 0.0,
        params.leanR_p_w-0.168, params.leanR_p_h+0.071, 0.0,
    
        ];
      }else{
        var quad_verticesD =
        [
    
            params.leanR_p_w+overHangSide, rHeight, params.leanR_p_w+overHangSide,
            0,  rHeight, params.leanR_p_w+overHangSide,
            0,params.leanR_p_h+(roofMiddleHeight[params.b_l_t_r_pR][params.leanR_p_w]*2)+0.04+(params.b_l_t_r_pR*0.01), 0,
            params.leanR_p_w+overHangSide, rHeight, 0.0,
        
    
        ];
      }
    if(params.p_r_s=="3"){
        var quad_uvsD =
           [
    
            0.0, 0.0,
            -1.0, 0.0,
            -1.0, -1.0,
            -1.0, -1.0,
        
           ];
    }else{ 
    var quad_uvsD =
            [
            0.0, -1.0,
            -1.0, -1.0,
            -1.0, 0.0,
            0.0, -1.0,
        
            ];
        }
        
    let verticesD = new Float32Array( quad_verticesD );
    let uvsD = new Float32Array( quad_uvsD);
    RFLDoublePorchRoof.geometry.setAttribute( 'position', new THREE.BufferAttribute( verticesD, 3 ) );
    RFLDoublePorchRoof.geometry.setAttribute( 'uv', new THREE.BufferAttribute( uvsD, 2 ) );
    let roofImg = verticalTexture;
    if(params.p_r_s=="3") {
        roofImg = verticalTexture;
    } else {
        roofImg = horizontalTexture;
    }
    let RFLDoublePorchRoofloaderD = new THREE.TextureLoader();
    let rCalorD = params.p_r_c.replace("#","0x");   
    RFLDoublePorchRoof.position.set(params.p_w/2,0.02+wallDistance,params.p_d/2);
    RFLDoublePorchRoof.visible = params.add_left_front_lean_porch;
    RFLDoublePorchRoof.visible = (params.is_translusant==true)? false : true;
    let RFLPorchtexture = RFLDoublePorchRoofloaderD.load(process.env.REACT_APP_BASE_URL+roofImg, function(texture1) {
       RFLPorchtexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 16);
       RFLPorchtexture.wrapS = THREE.RepeatWrapping; 
       RFLPorchtexture.wrapT = THREE.RepeatWrapping;
       RFLDoublePorchRoof.material.map = texture1;
    //    RFLDoublePorchRoof.material.bumpMap = texture1;
    //    RFLDoublePorchRoof.material.bumpScale = 0.01
    //    RFLDoublePorchRoof.material.metalness = 1
    //    RFLDoublePorchRoof.material.roughness = 0.8
    //    RFLDoublePorchRoof.material.anisotropy = 10;
    //    RFLDoublePorchRoof.material.shininess = 10
    //    //RFLDoublePorchRoof.material.envMap = texture1;
       RFLDoublePorchRoof.material.needsUpdate = true;
    //    RFLDoublePorchRoof.material.emissiveMap = texture1;
    //    RFLDoublePorchRoof.material.emissiveIntensity = 1;
       if(params.p_r_s=="3"){
           RFLDoublePorchRoof.material.map.repeat.set(((params.leanR_p_w/2)+(params.leanR_p_w/2/3))*2,1);
        } else {
            RFLDoublePorchRoof.material.map.repeat.set(1,(params.leanR_p_w/1.5)*2);
        }
    });
    RFLDoublePorchRoof.material.color.setHex( "0xffffff" );
    R_L_F_P_Roof.add(RFLDoublePorchRoof);

    }	


    //Right Front Lean Porch ridge cap
    if (const_var.b_t_M_L.getObjectByName("RFLPorchRidgeCap")!=undefined) {
        let RFLPorchRidgeCap = const_var.b_t_M_L.getObjectByName("RFLPorchRidgeCap").clone();
        let RFLrcquad_vertices = [
	    	(params.p_w/2)+params.leanR_p_w+overHangSide,  params.leanR_p_h + gap - ((params.b_l_t_r_pR/12)*overHangSide), (params.p_d/2)+params.leanR_p_w+ overHangSide - 0.3,
	    	(params.p_w/2)+params.leanR_p_w+overHangSide,  params.leanR_p_h + gap - ((params.b_l_t_r_pR/12)*overHangSide), (params.p_d/2)+params.leanR_p_w+overHangSide,
	    	params.p_w/2, params.leanR_p_h+((params.b_l_t_r_pR/12)*params.leanR_p_w)+0.05, params.p_d/2,
	    	(params.p_w/2), params.leanR_p_h+((params.b_l_t_r_pR/12)*params.leanR_p_w)+0.05, (params.p_d/2)-0.3,
	    	
	    	(params.p_w/2)-0.3+params.leanR_p_w+overHangSide,  params.leanR_p_h + gap - ((params.b_l_t_r_pR/12)*overHangSide), (params.p_d/2)+params.leanR_p_w+overHangSide,
	    	(params.p_w/2)+params.leanR_p_w+overHangSide,  params.leanR_p_h + gap - ((params.b_l_t_r_pR/12)*overHangSide), (params.p_d/2)+params.leanR_p_w+overHangSide,
	    	params.p_w/2, params.leanR_p_h+((params.b_l_t_r_pR/12)*params.leanR_p_w)+0.05, params.p_d/2,
	    	(params.p_w/2)-0.3, params.leanR_p_h+((params.b_l_t_r_pR/12)*params.leanR_p_w)+0.05, (params.p_d/2),
	    ];
        let RFLrcvertices = new Float32Array( RFLrcquad_vertices );
        RFLPorchRidgeCap.geometry.setAttribute( 'position', new THREE.BufferAttribute( RFLrcvertices, 3 ) );
        RFLPorchRidgeCap.position.y = 0.08+wallDistance;
        RFLPorchRidgeCap.visible = (params.p_r_s!="3" || params.singleSlope)?false:true;;

        let RFLPorchRidgeCaploader = new THREE.TextureLoader();
		let roofTexture = RFLPorchRidgeCaploader.load(process.env.REACT_APP_BASE_URL+horizontalTexture, function(texture1) {
			roofTexture.wrapS = THREE.RepeatWrapping; 
			roofTexture.wrapT = THREE.RepeatWrapping;
		    RFLPorchRidgeCap.material.map = texture1;
		    RFLPorchRidgeCap.material.emissiveMap = texture1;
		    RFLPorchRidgeCap.material.emissiveIntensity = 1;
		    RFLPorchRidgeCap.material.map.rotation = -Math.PI/2;
		    RFLPorchRidgeCap.material.map.repeat.set(1,-0.1);
		    RFLPorchRidgeCap.material.needsUpdate = true
	 	})

        if(params.is_translusant==true){
            RFLPorchRidgeCap.material.transparent = true;
            RFLPorchRidgeCap.material.opacity = 0.1;
            // RFLPorchRidgeCap.material.opacity =0.3;
            RFLPorchRidgeCap.material.alphaTest =false;
            RFLPorchRidgeCap.material.clearAlpha =1;
          } else {
              RFLPorchRidgeCap.material.transparent = true;
              RFLPorchRidgeCap.material.opacity = 1;
              RFLPorchRidgeCap.material.alphaTest =0;
              RFLPorchRidgeCap.material.clearAlpha =null;
          }
        R_L_F_P_Roof.add(RFLPorchRidgeCap);
    }


    /*Right Front Lean-to Porch Right curved Roof*/
    if (const_var.R_F_L_P.getObjectByName("RFLPorchRightCurve")!=undefined) {
        let RFLPorchRightCurve = const_var.R_F_L_P.getObjectByName("RFLPorchRightCurve").clone();
        
    var verticesT = [
        { pos: [ -0.25,  0.0,  params.leanR_p_w-0.165], norm: [ -1,  0,  0], uv: [0, 0], }, // 4 uv: [0, 0],
        { pos: [ -0.25,  0.0,   0]                     , norm: [ -1,  0,  0], uv: [0.008, 0], }, // 5 uv: [1, 0],
        { pos: [ -0.13, -0.005,  params.leanR_p_w-0.05], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
        { pos: [ -0.13, -0.005, 0]                     , norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
        
        { pos: [ -0.13, -0.005,  params.leanR_p_w-0.05], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
        { pos: [ -0.13, -0.005, 0]                     , norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
        { pos: [ -0.07, -0.015,  params.leanR_p_w+0.01], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
        { pos: [ -0.07, -0.015, 0]                     , norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
        
        { pos: [ -0.07, -0.015,  params.leanR_p_w+0.01], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
        { pos: [ -0.07, -0.015, 0]                     , norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
        { pos: [ -0.05, -0.025,  params.leanR_p_w+0.03], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
        { pos: [ -0.05, -0.025, 0]                     , norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
        
        { pos: [ -0.05, -0.025,  params.leanR_p_w+0.03], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
        { pos: [ -0.05, -0.025, 0]                     , norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
        { pos: [ -0.02, -0.045,  params.leanR_p_w+0.047], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
        { pos: [ -0.02, -0.045, 0]                      , norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
    
        { pos: [ -0.00, -0.075,  params.leanR_p_w+0.057], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 0], 4
        { pos: [ -0.00, -0.075, 0]                      , norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 0], 5
        { pos: [ -0.02, -0.045,  params.leanR_p_w+0.047], norm: [ -1,  0,  0], uv: [0, 0.008], }, // 6 uv: [0, 1],
        { pos: [ -0.02, -0.045, 0]                      , norm: [ -1,  0,  0], uv: [0.008, 0.008], }, // 7 uv: [1, 1],
    
    ];
    var positionsT = [];
    var normalsT = [];
    var uvsT = [];
    for (var vertex of verticesT) {
      positionsT.push(...vertex.pos);
      normalsT.push(...vertex.norm);
      uvsT.push(...vertex.uv);
    }
  
    var geometryT = new THREE.BufferGeometry();
    var positionNumComponents = 3;
    var normalNumComponents = 3;
    var uvNumComponents = 2;
    RFLPorchRightCurve.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positionsT), positionNumComponents));
    geometryT.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normalsT), normalNumComponents));
    geometryT.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvsT), uvNumComponents));
	geometryT.setIndex([
	//0, 1, 2, 2, 1, 3, 3, 2, 4, 4, 3, 5, 5, 4, 6, 6, 5, 7
     0,  1,  2,   2,  1,  3,
     4,  5,  6,   6,  5,  7,
     8,  9, 10,  10,  9, 11,
    12, 13, 14,  14, 13, 15,
    16, 17, 18,  18, 17, 19,
    ]);
    
     var roofImg = horizontalTexture;
		if(params.p_r_s=="1"){
			roofImg = verticalTexture;
		} else {
			roofImg = horizontalTexture;
		}
		
	 var lrRoofloader = new THREE.TextureLoader();
	 var textureT = lrRoofloader.load(process.env.REACT_APP_BASE_URL+roofImg, function(texture1) {
		   texture1.wrapS = THREE.RepeatWrapping;
		   texture1.wrapT = THREE.RepeatWrapping;
           RFLPorchRightCurve.material.map = texture1
           if(params.p_r_s=="1")
           {
               RFLPorchRightCurve.material.map.rotation = -Math.PI/2;
               RFLPorchRightCurve.material.map.repeat.set(24,1);
           }
           else
           {
               RFLPorchRightCurve.material.map.rotation = Math.PI/2;
               RFLPorchRightCurve.material.map.repeat.set(1,params.p_w/8);
           }
	   });	

	RFLPorchRightCurve.name = "RFLPorchRightCurve";
	RFLPorchRightCurve.visible = true;
	// RFLPorchRightCurve.scale.set(0.99855,roofMiddleHeight[params.b_l_t_r_pR][params.leanR_p_w],params.leanR_p_w+0.06);
    RFLPorchRightCurve.scale.x = 0.99855;
    RFLPorchRightCurve.scale.y = roofMiddleHeight[params.b_l_t_r_pR][params.leanR_p_w];
	// RFLPorchRightCurve.position.set(params.leanR_p_w+0.08+(params.p_w/2),params.leanR_p_h+0.09,params.p_d/2+params.leanR_p_w/2);
    RFLPorchRightCurve.position.x = (params.leanR_p_w+0.08+(params.p_w/2));
    RFLPorchRightCurve.position.y = params.leanR_p_h+0.09+ wallDistance;
    RFLPorchRightCurve.position.z = params.p_d/2;
	RFLPorchRightCurve.rotation.z = -0.045;
	RFLPorchRightCurve.scale.y = 7;
	var rCalor = params.p_r_c.replace("#","0x");
	RFLPorchRightCurve.material.color.setHex( rCalor );
	RFLPorchRightCurve.visible = (params.p_r_s=="1")?true:false;

    if(params.is_translusant==true){
        RFLPorchRightCurve.material.transparent = true;
        RFLPorchRightCurve.material.opacity = 0.1;
        // RFLPorchRightCurve.material.opacity =0.3;
        RFLPorchRightCurve.material.alphaTest =false;
        RFLPorchRightCurve.material.clearAlpha =1;
      } else {
          RFLPorchRightCurve.material.transparent = true;
          RFLPorchRightCurve.material.opacity = 1;
          RFLPorchRightCurve.material.alphaTest =0;
          RFLPorchRightCurve.material.clearAlpha =null;
      }
    R_L_F_P_Roof.add(RFLPorchRightCurve);
    }

        //Double Right Front Lean-to Porch Left curved Roof
	if (R_L_F_P_Roof.getObjectByName("double_RFLPorchRightCurve")==undefined) {
    
		let RFLPorchRightCurveClone = R_L_F_P_Roof.getObjectByName("RFLPorchRightCurve");

		if(R_L_F_P_Roof.getObjectByName("RFLPorchRightCurve") != undefined){
		let double_RFLPorchRightCurve = RFLPorchRightCurveClone.clone();
		let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xCFCFCF });
		double_RFLPorchRightCurve = new THREE.Mesh(double_RFLPorchRightCurve.geometry,leftDoubleMaterial);
		double_RFLPorchRightCurve.name = "double_RFLPorchRightCurve"
		double_RFLPorchRightCurve.visible = (params.is_translusant==true)? false : RFLPorchRightCurveClone.visible
		double_RFLPorchRightCurve.scale.set(RFLPorchRightCurveClone.scale.x , RFLPorchRightCurveClone.scale.y , RFLPorchRightCurveClone.scale.z-0.001);
		double_RFLPorchRightCurve.position.set(RFLPorchRightCurveClone.position.x-0.02, RFLPorchRightCurveClone.position.y -0.03 , RFLPorchRightCurveClone.position.z);
		double_RFLPorchRightCurve.rotation.set(RFLPorchRightCurveClone.rotation.x , RFLPorchRightCurveClone.rotation.y , RFLPorchRightCurveClone.rotation.z)
		
		let doubleTextureImg = (params.p_r_s == "3") ? verticalTexture: horizontalTexture;
		let doubleWallLoader = new THREE.TextureLoader();
	  
		  let  dWallTexture = doubleWallLoader.load(process.env.REACT_APP_BASE_URL+doubleTextureImg , function(wallTexture) {
			if(RFLPorchRightCurveClone.material.map != null){
		  let mapRepeat = RFLPorchRightCurveClone.material.map.repeat;
		  let mapRepeatRot = RFLPorchRightCurveClone.material.map.rotation;
			dWallTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5) 
			double_RFLPorchRightCurve.material.map = wallTexture;
			double_RFLPorchRightCurve.material.map.wrapS = THREE.RepeatWrapping;
			double_RFLPorchRightCurve.material.map.wrapT = THREE.RepeatWrapping;
			double_RFLPorchRightCurve.material.map.offset.x = params.p_w;
			double_RFLPorchRightCurve.material.map.offset.y = params.p_w;
			double_RFLPorchRightCurve.material.map.rotation = mapRepeatRot;
			double_RFLPorchRightCurve.material.map.repeat.set(mapRepeat.x,mapRepeat.y);
            double_RFLPorchRightCurve.material.color.set(0xFFFFFF)
            double_RFLPorchRightCurve.material.needsUpdate = true;
			}
        });
        R_L_F_P_Roof.add(double_RFLPorchRightCurve);
		}
	  }


    /*Right Front Lean-to Porch Front curved Roof*/
    if (const_var.R_F_L_P.getObjectByName("RFLPorchFrontCurve")!=undefined) {
        let RFLPorchFrontCurve = const_var.R_F_L_P.getObjectByName("RFLPorchFrontCurve").clone();

    var verticesT = [
        { pos: [ 0.25,  0.0,  params.leanR_p_w-0.165], norm: [ -1,  0,  0], uv: [0, 0], }, // 4 uv: [0, 0],
        { pos: [ 0.25,  0.0,   0]                     , norm: [ -1,  0,  0], uv: [0.008, 0], }, // 5 uv: [1, 0],
        { pos: [ 0.13, -0.005,  params.leanR_p_w-0.05], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
        { pos: [ 0.13, -0.005, 0]                     , norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
        
        { pos: [ 0.13, -0.005,  params.leanR_p_w-0.05], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
        { pos: [ 0.13, -0.005, 0]                     , norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
        { pos: [ 0.07, -0.015,  params.leanR_p_w+0.01], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
        { pos: [ 0.07, -0.015, 0]                     , norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
        
        { pos: [ 0.07, -0.015,  params.leanR_p_w+0.01], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
        { pos: [ 0.07, -0.015, 0]                     , norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
        { pos: [ 0.05, -0.025,  params.leanR_p_w+0.03], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
        { pos: [ 0.05, -0.025, 0]                     , norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
        
        { pos: [ 0.05, -0.025,  params.leanR_p_w+0.03], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
        { pos: [ 0.05, -0.025, 0]                     , norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
        { pos: [ 0.02, -0.045,  params.leanR_p_w+0.047], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
        { pos: [ 0.02, -0.045, 0]                      , norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
    
        { pos: [ 0.00, -0.075,  params.leanR_p_w+0.057], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 0], 4
        { pos: [ 0.00, -0.075, 0]                      , norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 0], 5
        { pos: [ 0.02, -0.045,  params.leanR_p_w+0.047], norm: [ -1,  0,  0], uv: [0, 0.008], }, // 6 uv: [0, 1],
        { pos: [ 0.02, -0.045, 0]                      , norm: [ -1,  0,  0], uv: [0.008, 0.008], }, // 7 uv: [1, 1],
    
    ];
    var positionsT = [];
    var normalsT = [];
    var uvsT = [];
    for (var vertex of verticesT) {
      positionsT.push(...vertex.pos);
      normalsT.push(...vertex.norm);
      uvsT.push(...vertex.uv);
    }
  
    var geometryT = new THREE.BufferGeometry();
    var positionNumComponents = 3;
    var normalNumComponents = 3;
    var uvNumComponents = 2;
      RFLPorchFrontCurve.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positionsT), positionNumComponents));
      geometryT.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normalsT), normalNumComponents));
      geometryT.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvsT), uvNumComponents));
      geometryT.setIndex([
      //0, 1, 2, 2, 1, 3, 3, 2, 4, 4, 3, 5, 5, 4, 6, 6, 5, 7
       0,  1,  2,   2,  1,  3,
       4,  5,  6,   6,  5,  7,
       8,  9, 10,  10,  9, 11,
      12, 13, 14,  14, 13, 15,
      16, 17, 18,  18, 17, 19,
    ]);
    
       var roofImg = horizontalTexture;
          if(params.p_r_s=="1") {
              roofImg = verticalTexture;
          } else {
              roofImg = horizontalTexture;
          }
          
       var lrRoofloader = new THREE.TextureLoader();
       var textureT = lrRoofloader.load(process.env.REACT_APP_BASE_URL+roofImg, function(texture1) {
             texture1.wrapS = THREE.RepeatWrapping;
             texture1.wrapT = THREE.RepeatWrapping;
             RFLPorchFrontCurve.material.map = texture1
             
     if(params.p_r_s=="1")
     {
         RFLPorchFrontCurve.material.map.rotation = -Math.PI/2;
         RFLPorchFrontCurve.material.map.repeat.set(24,1);
     }
     else
     {
         RFLPorchFrontCurve.material.map.rotation = Math.PI/2;
         RFLPorchFrontCurve.material.map.repeat.set(1,params.p_w/8);
     }
         });	

     RFLPorchFrontCurve.name = "RFLPorchFrontCurve";
     RFLPorchFrontCurve.visible = true;
    //  RFLPorchFrontCurve.scale.set(0.99855,roofMiddleHeight[params.b_l_t_r_pR][params.leanR_p_w],params.leanR_p_w+0.06);
     RFLPorchFrontCurve.scale.x = 0.99855;
     RFLPorchFrontCurve.scale.y = roofMiddleHeight[params.b_l_t_r_pR][params.leanR_p_w];
    //  RFLPorchFrontCurve.position.set((params.p_w/2+params.leanR_p_w/2),params.leanR_p_h+0.09,params.leanR_p_w+0.08+params.p_d/2);
    RFLPorchFrontCurve.position.x = (params.p_w/2);
    RFLPorchFrontCurve.position.y = params.leanR_p_h+0.09+ wallDistance;
    RFLPorchFrontCurve.position.z = params.leanR_p_w+0.08+params.p_d/2;
     RFLPorchFrontCurve.rotation.z = 0.045;
     RFLPorchFrontCurve.rotation.y = Math.PI/2;
     RFLPorchFrontCurve.scale.y = 7;
  
     var rCalor = params.p_r_c.replace("#","0x");
     RFLPorchFrontCurve.material.color.setHex( rCalor );
     RFLPorchFrontCurve.visible = (params.p_r_s=="1")?true:false;

     if(params.is_translusant==true){
        RFLPorchFrontCurve.material.transparent = true;
        RFLPorchFrontCurve.material.opacity = 0.1;
        // RFLPorchFrontCurve.material.opacity =0.3;
        RFLPorchFrontCurve.material.alphaTest =false;
        RFLPorchFrontCurve.material.clearAlpha =1;
      } else {
          RFLPorchFrontCurve.material.transparent = true;
          RFLPorchFrontCurve.material.opacity = 1;
          RFLPorchFrontCurve.material.alphaTest =0;
          RFLPorchFrontCurve.material.clearAlpha =null;
      }
     R_L_F_P_Roof.add(RFLPorchFrontCurve);    
    }

    //Double Right Front Lean-to Porch Front curved Roof
	if (R_L_F_P_Roof.getObjectByName("double_RFLPorchFrontCurve")==undefined) {
    
		let RFLPorchFrontCurveClone = R_L_F_P_Roof.getObjectByName("RFLPorchFrontCurve");

		if(R_L_F_P_Roof.getObjectByName("RFLPorchFrontCurve") != undefined){
		let double_RFLPorchFrontCurve = RFLPorchFrontCurveClone.clone();
		let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xCFCFCF });
		double_RFLPorchFrontCurve = new THREE.Mesh(double_RFLPorchFrontCurve.geometry,leftDoubleMaterial);
		double_RFLPorchFrontCurve.name = "double_RFLPorchFrontCurve"
		double_RFLPorchFrontCurve.visible = (params.is_translusant==true)? false : RFLPorchFrontCurveClone.visible
		double_RFLPorchFrontCurve.scale.set(RFLPorchFrontCurveClone.scale.x , RFLPorchFrontCurveClone.scale.y , RFLPorchFrontCurveClone.scale.z-0.001);
		double_RFLPorchFrontCurve.position.set(RFLPorchFrontCurveClone.position.x, RFLPorchFrontCurveClone.position.y -0.03 , RFLPorchFrontCurveClone.position.z-0.02);
		double_RFLPorchFrontCurve.rotation.set(RFLPorchFrontCurveClone.rotation.x , RFLPorchFrontCurveClone.rotation.y , RFLPorchFrontCurveClone.rotation.z)
		
		let doubleTextureImg = (params.p_r_s == "3") ? verticalTexture: horizontalTexture;
		let doubleWallLoader = new THREE.TextureLoader();
	  
		  let  dWallTexture = doubleWallLoader.load(process.env.REACT_APP_BASE_URL+doubleTextureImg , function(wallTexture) {
			if(RFLPorchFrontCurveClone.material.map != null){
		  let mapRepeat = RFLPorchFrontCurveClone.material.map.repeat;
		  let mapRepeatRot = RFLPorchFrontCurveClone.material.map.rotation;
			dWallTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5) 
			double_RFLPorchFrontCurve.material.map = wallTexture;
			double_RFLPorchFrontCurve.material.map.wrapS = THREE.RepeatWrapping;
			double_RFLPorchFrontCurve.material.map.wrapT = THREE.RepeatWrapping;
			double_RFLPorchFrontCurve.material.map.offset.x = params.p_w;
			double_RFLPorchFrontCurve.material.map.offset.y = params.p_w;
			double_RFLPorchFrontCurve.material.map.rotation = mapRepeatRot;
			double_RFLPorchFrontCurve.material.map.repeat.set(mapRepeat.x,mapRepeat.y);
            double_RFLPorchFrontCurve.material.color.set(0xFFFFFF)
            double_RFLPorchFrontCurve.material.needsUpdate = true;
			}
        });
        R_L_F_P_Roof.add(double_RFLPorchFrontCurve);
		}
	  }


    /*Right Front Lean-to Porch Bows*/

    if (const_var.R_F_L_P.getObjectByName("rfpCornerBow")!=undefined) {
        const rfpCornerBow = const_var.R_F_L_P.getObjectByName("rfpCornerBow").clone();
        rfpCornerBow.name = "rfpCornerBow";
        rfpCornerBow.scale.set(params.p_w/2,0.2,1);	
        rfpCornerBow.position.set(leanToPosR-0.08,params.leanR_p_h + leanTohIncR,params.p_d/2 - 0.12+ params.leanR_p_w/2);	
        rfpCornerBow.rotation.z =- bowsRotation[params.b_l_t_r_pR]+((params.b_l_t_r_pR/100)*2.24);
        rfpCornerBow.rotation.y = -Math.PI/4;
        rfpCornerBow.scale.x = params.leanR_p_w +(params.leanR_p_w/2.2)-0.1;
        rfpCornerBow.visible = true;
        R_L_F_P_Roof.add(rfpCornerBow);
    }

    if (const_var.R_F_L_P.getObjectByName("rfpRightBow")!=undefined) {
        const rfpRightBow = const_var.R_F_L_P.getObjectByName("rfpRightBow").clone();
        rfpRightBow.name = "rfpRightBow";
	    rfpRightBow.scale.set(params.p_w/2,0.2,1);	
	    rfpRightBow.position.set(leanToPosR+0.08,params.leanR_p_h + leanTohIncR + 0.03,params.p_d/2 - 0.12);	
	    rfpRightBow.rotation.z = -bowsRotation[params.b_l_t_r_pR];
	    rfpRightBow.scale.x = params.leanR_p_w + bowsScale[params.b_l_t_r_pR][2*params.leanR_p_w];
        rfpRightBow.visible = true;
        // R_L_F_P_Roof.add(rfpRightBow);
    }

    if (const_var.R_F_L_P.getObjectByName("rfpFrontBow")!=undefined) {
        const rfpFrontBow = const_var.R_F_L_P.getObjectByName("rfpFrontBow").clone();
        rfpFrontBow.name = "rfpFrontBow";
        rfpFrontBow.scale.set(params.p_w/2,0.2,1);	
        rfpFrontBow.position.set(params.p_w/2- 0.12,params.leanR_p_h + leanTohIncR + 0.03,params.p_d/2 - 0.12 + params.leanR_p_w/2);	
        rfpFrontBow.rotation.z = bowsRotation[params.b_l_t_r_pR];
        rfpFrontBow.rotation.y = Math.PI/2
        rfpFrontBow.scale.x = params.leanR_p_w + bowsScale[params.b_l_t_r_pR][2*params.leanR_p_w];
        rfpFrontBow.visible = true;
        R_L_F_P_Roof.add(rfpFrontBow);
    }

    if (const_var.R_F_L_P.getObjectByName("rfpBackCorner")!=undefined) {
        const rfpBackCorner = const_var.R_F_L_P.getObjectByName("rfpBackCorner").clone();
        rfpBackCorner.name = "rfpBackCorner";
        rfpBackCorner.position.set(-((params.p_w/-2 - params.leanR_p_w)+0.58),params.leanR_p_h -posCorner[params.b_l_t_r_pR],params.p_d/2 - 0.12);	
        rfpBackCorner.rotation.z = 1;
        rfpBackCorner.rotation.y = Math.PI;
        rfpBackCorner.scale.set(1.9,0.25,1);
        rfpBackCorner.visible = true; 
        R_L_F_P_Roof.add(rfpBackCorner);
        const_var.legsForCut["rightLean"][rfpBackCorner.name] = rfpBackCorner;
      }

      if (const_var.R_F_L_P.getObjectByName("rfpCorner")!=undefined) {
        const rfpCorner = const_var.R_F_L_P.getObjectByName("rfpCorner").clone();
        rfpCorner.name = "rfpCorner";
        rfpCorner.position.set((-(params.p_w/-2 - params.leanR_p_w)-0.58+0.12),params.leanR_p_h -posCorner[params.b_l_t_r_pR]-0.15,(params.p_d/2)+params.leanR_p_w - 0.12-0.32);	
        rfpCorner.rotation.z = -1;
        rfpCorner.rotation.y = -Math.PI/4
        rfpCorner.scale.set(1.8,0.25,1);
        rfpCorner.visible = true; 
        R_L_F_P_Roof.add(rfpCorner);
      }

      if (const_var.R_F_L_P.getObjectByName("rfpFrontCorner")!=undefined) {
        const rfpFrontCorner = const_var.R_F_L_P.getObjectByName("rfpFrontCorner").clone();
        rfpFrontCorner.name = "rfpFrontCorner";
        rfpFrontCorner.position.set((params.p_w)/2- 0.12,params.leanR_p_h -posCorner[params.b_l_t_r_pR],(params.p_d/2)+ (params.leanR_p_w)-0.58);	
        rfpFrontCorner.rotation.z = 1;
        rfpFrontCorner.rotation.y = Math.PI/2
        rfpFrontCorner.scale.set(1.8,0.25,1);
        rfpFrontCorner.visible = true; 
        R_L_F_P_Roof.add(rfpFrontCorner);
        const_var.legsForCut["frontLean"][rfpFrontCorner.name] = rfpFrontCorner;
      }

      var EqiDis;
      if(params.fourth_center_cost == true){
         if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
        {
            EqiDis = (params.oncenter_val_with_action!='')?((params.leanR_p_w)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.leanR_p_w)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0)
        }
    } else {
        if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
        {
            EqiDis = (params.oncenter_val_with_action!='')?((params.leanR_p_w)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.leanR_p_w)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0)    
        }
      }

    
	for(let i = (params.leanR_p_w/EqiDis), j = (Math.round(params.p_w / 4) + 1), k = Math.round(params.p_d / 4 + 1);i<(params.leanR_p_w - 2);i = i+(params.leanR_p_w/EqiDis), j++, k++){
        const rfpRightMiddleBow = const_var.R_F_L_P.getObjectByName("rfpRightBow").clone();
		rfpRightMiddleBow.name = "RightMiddleBow"+ k + "x";
        rfpRightMiddleBow.material = rfpRightMiddleBow.material.clone();
		rfpRightMiddleBow.scale.set(params.p_w/2,0.2,1);	
		rfpRightMiddleBow.position.set(leanToPosR-0.08+(i/2),params.leanR_p_h + leanTohIncR + 0.03-(i/lfpFrontBowH[params.b_l_t_r_pR]),params.p_d/2 - 0.12+i);	
		rfpRightMiddleBow.rotation.z = -bowsRotation[params.b_l_t_r_pR];
		rfpRightMiddleBow.scale.x = params.leanR_p_w + bowsScale[params.b_l_t_r_pR][params.leanR_p_w]-i;
		rfpRightMiddleBow.visible = true;
		R_L_F_P_Roof.add(rfpRightMiddleBow);

        const rfpFrontMiddleBow = const_var.R_F_L_P.getObjectByName("rfpFrontBow").clone();
		rfpFrontMiddleBow.name = "FrontMiddleBow"+ j + "x";
        rfpFrontMiddleBow.material = rfpFrontMiddleBow.material.clone();
		rfpFrontMiddleBow.scale.set(params.p_w/2,0.2,1);	
		rfpFrontMiddleBow.position.set(params.p_w/2+i,params.leanR_p_h + leanTohIncR + 0.03-(i/lfpFrontBowH[params.b_l_t_r_pR]),params.p_d/2 - 0.12 + params.leanR_p_w/2+(i/2));	
		rfpFrontMiddleBow.rotation.z = bowsRotation[params.b_l_t_r_pR];
		rfpFrontMiddleBow.rotation.y = Math.PI/2
		// rfpFrontMiddleBow.rotation.x = Math.PI/2
		// rfpFrontMiddleBow.scale.x = params.leanR_p_w + bowsScale[params.b_l_t_r_pR][params.leanR_p_w]+0.2-i;
		// rfpFrontMiddleBow.scale.x = params.leanR_p_w + bowsScale[params.b_l_t_r_pR][params.leanR_p_w]-((i==15)?i:i-0.2);
		if ( i>= 14) {
			rfpFrontMiddleBow.scale.x = params.leanR_p_w + bowsScale[params.b_l_t_r_pR][params.leanR_p_w]-0.3-i;
		} else {
			rfpFrontMiddleBow.scale.x = params.leanR_p_w + bowsScale[params.b_l_t_r_pR][params.leanR_p_w]-i;
		}

		rfpFrontMiddleBow.visible = true;
		R_L_F_P_Roof.add(rfpFrontMiddleBow);

        const rfpMiddleBackCorner = const_var.R_F_L_P.getObjectByName("rfpBackCorner").clone();
        rfpMiddleBackCorner.name = "RightMiddleCorner"+ Math.round(params.p_d / 4 + 1) + "x";
        rfpMiddleBackCorner.material = rfpMiddleBackCorner.material.clone();
        rfpMiddleBackCorner.position.set(-((params.p_w/-2 - params.leanR_p_w)+0.58),params.leanR_p_h -posCorner[params.b_l_t_r_pR],params.p_d/2 - 0.12+i);	
        rfpMiddleBackCorner.rotation.z = 1;
        rfpMiddleBackCorner.rotation.y = Math.PI;
        rfpMiddleBackCorner.scale.set(1.9,0.25,1);
        rfpMiddleBackCorner.visible = true; 
        R_L_F_P_Roof.add(rfpMiddleBackCorner);
        const_var.legsForCut["rightLean"][rfpMiddleBackCorner.name] = rfpMiddleBackCorner;

        const rfpMiddleFrontCorner = const_var.R_F_L_P.getObjectByName("rfpFrontCorner").clone();
        rfpMiddleFrontCorner.name = "FrontMiddleCorner"+ (Math.round(params.p_w / 5) + 1) + "x";
        rfpMiddleFrontCorner.material = rfpMiddleFrontCorner.material.clone();
        rfpMiddleFrontCorner.position.set((params.p_w)/2+i,params.leanR_p_h -posCorner[params.b_l_t_r_pR],(params.p_d/2)+ (params.leanR_p_w)-0.58);	
        rfpMiddleFrontCorner.rotation.z = 1;
        rfpMiddleFrontCorner.rotation.y = Math.PI/2
        rfpMiddleFrontCorner.scale.set(1.8,0.25,1);
        rfpMiddleFrontCorner.visible = true; 
        R_L_F_P_Roof.add(rfpMiddleFrontCorner);
        const_var.legsForCut["frontLean"][rfpMiddleFrontCorner.name] = rfpMiddleFrontCorner;

	}



     /*Left Front Lean-to Porch Trims*/

     if (const_var.R_F_L_P.getObjectByName("rflPorchFrontTrim")!=undefined) {
        const rflPorchFrontTrim = const_var.R_F_L_P.getObjectByName("rflPorchFrontTrim").clone();
	    rflPorchFrontTrim.name = "rflPorchFrontTrim";
	    rflPorchFrontTrim.scale.set(0.3,params.leanR_p_w+0.05,0.9);
	    rflPorchFrontTrim.position.set(params.p_w/2+0.08+(params.leanR_p_w/2),params.leanR_p_h-0.10,params.p_d/2+params.leanR_p_w+0.02);
	    rflPorchFrontTrim.rotation.x=Math.PI/-2+0.25;
	    rflPorchFrontTrim.rotation.z=Math.PI/2;
	    rflPorchFrontTrim.visible = (params.p_r_s=="1")?false:true;
        if(params.is_translusant==true){
            rflPorchFrontTrim.material.transparent = true;
            rflPorchFrontTrim.material.opacity = 0.1;
            // rflPorchFrontTrim.material.opacity =0.3;
            rflPorchFrontTrim.material.alphaTest =false;
            rflPorchFrontTrim.material.clearAlpha =1;
          } else {
              rflPorchFrontTrim.material.transparent = true;
              rflPorchFrontTrim.material.opacity = 1;
              rflPorchFrontTrim.material.alphaTest =0;
              rflPorchFrontTrim.material.clearAlpha =null;
          }
        R_L_F_P_Roof.add(rflPorchFrontTrim);
    }
    if (const_var.R_F_L_P.getObjectByName("rflPorchRightTrim")!=undefined) {
        const rflPorchRightTrim = const_var.R_F_L_P.getObjectByName("rflPorchRightTrim").clone();
	    rflPorchRightTrim.name = "rflPorchRightTrim";
	    rflPorchRightTrim.scale.set(0.3,params.leanR_p_w +0.15,0.9);
	    rflPorchRightTrim.position.set(params.p_w/2+0.03+params.leanR_p_w,params.leanR_p_h-0.103,params.p_d/2+(params.leanR_p_w/2)+0.02);
	    rflPorchRightTrim.rotation.x=Math.PI/-2;
	    rflPorchRightTrim.rotation.y=0.25;
	    rflPorchRightTrim.visible = (params.p_r_s=="1")?false:true;
        if(params.is_translusant==true){
            rflPorchRightTrim.material.transparent = true;
            rflPorchRightTrim.material.opacity = 0.1;
            // rflPorchRightTrim.material.opacity =0.3;
            rflPorchRightTrim.material.alphaTest =false;
            rflPorchRightTrim.material.clearAlpha =1;
          } else {
              rflPorchRightTrim.material.transparent = true;
              rflPorchRightTrim.material.opacity = 1;
              rflPorchRightTrim.material.alphaTest =0;
              rflPorchRightTrim.material.clearAlpha =null;
          }
        R_L_F_P_Roof.add(rflPorchRightTrim);
    }




    L_L_F_P_Roof.visible =false;
    if(params.add_left_front_lean_porch==true){
        L_L_F_P_Roof.visible = params.add_left_front_lean_porch;
    }

    R_L_F_P_Roof.visible =false;
    if(params.add_right_front_lean_porch==true){
        R_L_F_P_Roof.visible = params.add_right_front_lean_porch;
    }



    let lblPorchGroup = L_L_F_P_Roof.clone();
	lblPorchGroup.name = "L_B_L_P_Roof";
	lblPorchGroup.position.set((4+((params.p_d-19)*0.5))-((params.p_w-11)*0.5),0,(-4-((params.p_d-19)*0.5))+((params.p_w-11)*0.5));
	lblPorchGroup.rotation.y = Math.PI+(Math.PI/2)
	lblPorchGroup.visible = (params.add_left_back_lean_porch==true)?true:false;
	const_var.scene.add(lblPorchGroup);

    let PorchBackMiddleLegCount = Math.round(params.p_w / 4 + 1);
    let PorchLeftMiddleLegCount = Math.round(params.p_d / 4 + 6);

    lblPorchGroup.children.forEach((l) => {
        if (l.name.includes("lfpBackCorner")) {
            l.material = l.material.clone();
            const_var.legsForCut["backLean"][l.name] = l;
        }
        else if (l.name.includes("lfpFrontCorner")) {
            l.material = l.material.clone();
            const_var.legsForCut["leftLean"][l.name] = l;
        }
        else if (l.name.includes("LeftMiddleCorner")) {
            l.material = l.material.clone();
            l.name = "BackMiddleCorner"+ (Math.round(params.p_w / 5) + 1) + "x";
            const_var.legsForCut["backLean"][l.name] = l;
        }
        else if (l.name.includes("FrontMiddleCorner")) {
            l.material = l.material.clone();
            l.name = "LeftMiddleCorner"+ Math.round(params.p_d / 4 + 2) + "x";
            const_var.legsForCut["leftLean"][l.name] = l;
        }   else if (l.name.includes("LeftMiddleBow")) {
            l.material = l.material.clone();
            l.name = "BackMiddleBow"+ PorchBackMiddleLegCount++ + "x";
        }   else if (l.name.includes("FrontMiddleBow")) {
            l.material = l.material.clone();
            l.name = "LeftMiddleBow"+ PorchLeftMiddleLegCount++ + "x";
        }
    })

    let rblPorchGroup = R_L_F_P_Roof.clone();
	rblPorchGroup.name = "R_B_L_P_Roof";
	rblPorchGroup.position.set((-4-((params.p_d-19)*0.5))+((params.p_w-11)*0.5),0,(-4-((params.p_d-19)*0.5))+((params.p_w-11)*0.5));
	rblPorchGroup.rotation.y = Math.PI-(Math.PI/2)
	rblPorchGroup.visible = (params.add_right_back_lean_porch==true)?true:false;
	const_var.scene.add(rblPorchGroup);

    let PorchRightMiddleLegCount = Math.round(params.p_d / 4 + 6);
    PorchBackMiddleLegCount = Math.round(params.p_w / 4 + 6);

    rblPorchGroup.children.forEach((l) => {
        if (l.name.includes("rfpBackCorner")) {
            l.material = l.material.clone();
            const_var.legsForCut["backLean"][l.name] = l;
        } 
        else if (l.name.includes("rfpFrontCorner")) {
            l.material = l.material.clone();
            const_var.legsForCut["rightLean"][l.name] = l;
        } 
        else if (l.name.includes("RightMiddleCorner")) {
            l.material = l.material.clone();
            l.name = "BackMiddleCorner"+ (Math.round(params.p_w / 5) + 6) + "x";
            const_var.legsForCut["backLean"][l.name] = l;
        } 
        else if (l.name.includes("FrontMiddleCorner")) {
            l.material = l.material.clone();
            l.name = "RightMiddleCorner"+ Math.round(params.p_d / 4 + 2) + "x";
            const_var.legsForCut["rightLean"][l.name] = l;
        }  
        else if (l.name.includes("FrontMiddleBow")) {
            l.material = l.material.clone();
            l.name = "RightMiddleBow"+ PorchRightMiddleLegCount++ + "x";
        }   
        else if (l.name.includes("RightMiddleBow")) {
            l.material = l.material.clone();
            l.name = "BackMiddleBow"+ PorchBackMiddleLegCount++ + "x";
        }
     })

if ( params.isShowCenter == true ) {
    L_L_F_P_Roof.visible = false;
    R_L_F_P_Roof.visible = false;
    lblPorchGroup.visible = false;
    rblPorchGroup.visible = false;
  }
}