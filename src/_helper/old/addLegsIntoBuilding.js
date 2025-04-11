import * as THREE from "three";
// import * as LeantoLegs from "../3D_Objects/LeantoLegs"
import { params, const_var, initialState} from '../redux/reducers/reducer';

export const addLegsIntoBuilding = () => { 
  	//Left Part Of Center Building
	// var leftPart = const_var.scene.getObjectByName("b_t_M_L").children = [];
	// //Right Part Of Center Building
    // var rightPart = const_var.scene.getObjectByName("b_t_M_R").children = [];  
	/*Free Standing LeanTo Right Part*/
    var singleSlopeLean = const_var.scene.getObjectByName("F_S_L_R").children = []; 


	var roofMiddleHeight = {
		"1":{"12":0.5,"13":0.5417,"14":0.5833,"15":0.6250,"16":0.6667,"17":0.7083,"18":0.7500,"19":0.7917,"20":0.8333,"21":0.8750,"22":0.9167,"23":0.9583,"24":1,"25":1.0417,"26":1.0833,"27":1.1250,"28":1.1667,"29":1.2083,"30":1.2500,"31":1.2917,"32":1.3333,"33":1.3750,"34":1.4167,"35":1.4583,"36":1.5000,"37":1.5417,"38":1.5833,"39":1.6250,"40":1.6667,"41":1.7083,"42":1.7500,"43":1.7917,"44":1.8333,"45":1.8750,"46":1.9167,"47":1.9583,"48":2.00,"49":2.0417,"50":2.0833,"51":2.1250,"52":2.1667,"53":2.2083,"54":2.2500,"55":2.2917,"56":2.3333,"57":2.3750,"58":2.4167,"59":2.4583,"60":2.5000,"61":2.5417,"62":2.5833,"63":2.6250,"64":2.6667,"65":2.7083,"66":2.7500,"67":2.7917,"68":2.8333,"69":2.8750,"70":2.9167,"71":2.9583,"72":3.00,"73":3.0417,"74":3.0833,"75":3.1250,"76":3.1667,"77":3.2083,"78":3.2500,"79":3.2917,"80":3.3330},
		"2":{"12":1.0,"13":1.0833,"14":1.1667,"15":1.2500,"16":1.3333,"17":1.4167,"18":1.5000,"19":1.5833,"20":1.6667,"21":1.7500,"22":1.8333,"23":1.9167,"24":2,"25":2.0833,"26":2.1667,"27":2.2500,"28":2.3333,"29":2.4167,"30":2.5000,"31":2.5833,"32":2.6667,"33":2.7500,"34":2.8333,"35":2.9167,"36":3.0000,"37":3.0833,"38":3.1667,"39":3.2500,"40":3.3330,"41":3.4170,"42":3.5000,"43":3.5830,"44":3.6670,"45":3.7500,"46":3.8330,"47":3.9170,"48":4.00,"49":4.0830,"50":4.1670,"51":4.2500,"52":4.3330,"53":4.4170,"54":4.5000,"55":4.5830,"56":4.6670,"57":4.7500,"58":4.8330,"59":4.9170,"60":5.0000,"61":5.0830,"62":5.1670,"63":5.2500,"64":5.3330,"65":5.4170,"66":5.5000,"67":5.5830,"68":5.6670,"69":5.7500,"70":5.8330,"71":5.9170,"72":6.00,"73":6.0830,"74":6.1670,"75":6.2500,"76":6.3330,"77":6.4170,"78":6.5000,"79":6.5830,"80":6.6670},
		"3":{"12":1.5,"13":1.6250,"14":1.7500,"15":1.8750,"16":2.0000,"17":2.1250,"18":2.2500,"19":2.3750,"20":2.5000,"21":2.6250,"22":2.7500,"23":2.8750,"24":3,"25":3.1250,"26":3.2500,"27":3.3750,"28":3.5000,"29":3.6250,"30":3.7500,"31":3.8750,"32":4.0000,"33":4.1250,"34":4.2500,"35":4.3750,"36":4.5000,"37":4.6250,"38":4.7500,"39":4.8750,"40":5.0000,"41":5.1250,"42":5.2500,"43":5.3750,"44":5.5000,"45":5.6250,"46":5.7500,"47":5.8750,"48":6.00,"49":6.1250,"50":6.2500,"51":6.3750,"52":6.5000,"53":6.6250,"54":6.7500,"55":6.8750,"56":7.0000,"57":7.1250,"58":7.2500,"59":7.3750,"60":7.5000,"61":7.6250,"62":7.7500,"63":7.8750,"64":8.0000,"65":8.1250,"66":8.2500,"67":8.3750,"68":8.5000,"69":8.6250,"70":8.7500,"71":8.8750,"72":9.00,"73":9.1250,"74":9.2500,"75":9.3750,"76":9.5000,"77":9.6250,"78":9.7500,"79":9.8750,"80":10.000},
		"4":{"12":2.0,"13":2.1667,"14":2.3333,"15":2.5000,"16":2.6667,"17":2.8333,"18":3.0000,"19":3.1667,"20":3.3330,"21":3.5000,"22":3.6670,"23":3.8330,"24":4,"25":4.1670,"26":4.3330,"27":4.5000,"28":4.6670,"29":4.8330,"30":5.0000,"31":5.1670,"32":5.3330,"33":5.5000,"34":5.6670,"35":5.8330,"36":6.0000,"37":6.1670,"38":6.3330,"39":6.5000,"40":6.6670,"41":6.8330,"42":7.0000,"43":7.1670,"44":7.3330,"45":7.5000,"46":7.6670,"47":7.8330,"48":8.00,"49":8.1670,"50":8.3330,"51":8.5000,"52":8.6670,"53":8.8330,"54":9.0000,"55":9.1670,"56":9.3330,"57":9.5000,"58":9.6670,"59":9.8330,"60":10.000,"61":10.167,"62":10.333,"63":10.500,"64":10.667,"65":10.833,"66":11.000,"67":11.167,"68":11.333,"69":11.500,"70":11.667,"71":11.833,"72":12.0,"73":12.167,"74":12.333,"75":12.500,"76":12.667,"77":12.833,"78":13.000,"79":13.167,"80":13.333},
		"5":{"12":2.5,"13":2.7083,"14":2.9167,"15":3.1250,"16":3.3330,"17":3.5420,"18":3.7500,"19":3.9580,"20":4.1670,"21":4.3750,"22":4.5830,"23":4.7920,"24":5,"25":5.2080,"26":5.4170,"27":5.6250,"28":5.8330,"29":6.0420,"30":6.2500,"31":6.4580,"32":6.6670,"33":6.8750,"34":7.0830,"35":7.2920,"36":7.5000,"37":7.7080,"38":7.9170,"39":8.1250,"40":8.3330,"41":8.5420,"42":8.7500,"43":8.9580,"44":9.1670,"45":9.3750,"46":9.5830,"47":9.7920,"48":10.0,"49":10.208,"50":10.417,"51":10.625,"52":10.833,"53":11.042,"54":11.250,"55":11.458,"56":11.667,"57":11.875,"58":12.083,"59":12.292,"60":12.500,"61":12.708,"62":12.917,"63":13.125,"64":13.333,"65":13.542,"66":13.750,"67":13.958,"68":14.167,"69":14.375,"70":14.583,"71":14.792,"72":15.0,"73":15.208,"74":15.417,"75":15.625,"76":15.833,"77":16.042,"78":16.250,"79":16.458,"80":16.667},
		"6":{"12":3.0,"13":3.2500,"14":3.5000,"15":3.7500,"16":4.0000,"17":4.2500,"18":4.5000,"19":4.7500,"20":5.0000,"21":5.2500,"22":5.5000,"23":5.7500,"24":6,"25":6.2500,"26":6.5000,"27":6.7500,"28":7.0000,"29":7.2500,"30":7.5000,"31":7.7500,"32":8.0000,"33":8.2500,"34":8.5000,"35":8.7500,"36":9.0000,"37":9.2500,"38":9.5000,"39":9.7500,"40":10.000,"41":10.250,"42":10.500,"43":10.750,"44":11.000,"45":11.250,"46":11.500,"47":11.750,"48":12.0,"49":12.250,"50":12.500,"51":12.750,"52":13.000,"53":13.250,"54":13.500,"55":13.750,"56":14.000,"57":14.250,"58":14.500,"59":14.750,"60":15.000,"61":15.250,"62":15.500,"63":15.750,"64":16.000,"65":16.250,"66":16.500,"67":16.750,"68":17.000,"69":17.250,"70":17.500,"71":17.750,"72":18.0,"73":18.250,"74":18.500,"75":18.750,"76":19.000,"77":19.250,"78":19.500,"79":19.750,"80":20.000}
	   }; 

	var f_S_LeanLegScale = {
		"1":{"6":0.000,"7":0.050,"8":0.10,"9":0.100,"10":0.100,"11":0.100,"12":0.00,"13":0.00,"14":0.10,"15":0.15,"16":0.20,"17":0.20,"18":0.20,"19":0.20,"20":0.20,"21":0.20,"22":0.20,"23":0.20,"24":0.20,"25":0.20,"26":0.20,"27":0.20,"28":0.20,"29":0.20,"30":0.20,},
		"2":{"6":0.83,"7":0.95,"8":1.1,"9":1.3,"10":1.3,"11":1.6,"12":1.9,"13":2.0,"14":2.2,"15":2.4,"16":2.6,"17":2.9,"18":2.9,"19":3.1,"20":3.2,"21":3.33,"22":3.65,"23":3.9,"24":4.05,"25":2.9,"26":2.9,"27":2.9,"28":2.9,"29":2.9,"30":2.9,},
		"3":{"6":1.40,"7":1.70,"8":2.06,"9":2.24,"10":2.60,"11":2.78,"12":3.10,"13":3.20,"14":3.50,"15":3.70,"16":4.02,"17":4.25,"18":4.30,"19":4.60,"20":4.90,"21":5.20,"22":5.55,"23":5.65,"24":5.95,"25":0.55,"26":0.55,"27":0.60,"28":0.65,"29":0.70,"30":0.75,},
		"4":{"6":0.175,"7":0.200,"8":0.25,"9":0.300,"10":0.350,"11":0.375,"12":0.35,"13":0.35,"14":0.40,"15":0.45,"16":0.50,"17":0.55,"18":0.60,"19":0.65,"20":0.70,"21":0.70,"22":0.75,"23":0.75,"24":0.80,"25":0.85,"26":0.85,"27":0.90,"28":0.95,"29":1.00,"30":1.05,},
		"5":{"6":0.250,"7":0.300,"8":0.35,"9":0.425,"10":0.475,"11":0.525,"12":0.50,"13":0.55,"14":0.60,"15":0.65,"16":0.70,"17":0.75,"18":0.85,"19":0.90,"20":0.95,"21":1.00,"22":1.05,"23":1.10,"24":1.15,"25":1.20,"26":1.25,"27":1.30,"28":1.35,"29":1.40,"30":1.45,},
		"6":{"6":0.350,"7":0.450,"8":0.50,"9":0.575,"10":0.650,"11":0.700,"12":0.70,"13":0.80,"14":0.90,"15":0.95,"16":1.00,"17":1.05,"18":1.15,"19":1.20,"20":1.30,"21":1.35,"22":1.40,"23":1.50,"24":1.60,"25":1.65,"26":1.70,"27":1.75,"28":1.85,"29":1.90,"30":2.00,},
		
	};
	var f_S_LeanLegHeight = {
		"1":{"6":0.000,"7":0.050,"8":0.10,"9":0.100,"10":0.100,"11":0.100,"12":0.00,"13":0.00,"14":0.10,"15":0.15,"16":0.20,"17":0.20,"18":0.20,"19":0.20,"20":0.20,"21":0.20,"22":0.20,"23":0.20,"24":0.20,"25":0.20,"26":0.20,"27":0.20,"28":0.20,"29":0.20,"30":0.20,},
		"2":{"6":0.47,"7":0.50,"8":0.60,"9":0.70,"10":0.88,"11":0.90,"12":0.98,"13":1.10,"14":1.15,"15":1.20,"16":1.25,"17":1.32,"18":1.40,"19":1.55,"20":1.63,"21":1.72,"22":1.75,"23":1.80,"24":1.90,"25":1.4,"26":0.30,"27":0.30,"28":0.35,"29":0.35,"30":0.40,},
		"3":{"6":0.70,"7":0.80,"8":0.85,"9":1.00,"10":1.10,"11":1.25,"12":1.35,"13":1.45,"14":1.65,"15":1.80,"16":1.90,"17":2.00,"18":2.20,"19":2.30,"20":2.40,"21":2.52,"22":2.64,"23":2.80,"24":2.90,"25":0.55,"26":0.55,"27":0.60,"28":0.65,"29":0.70,"30":0.75,},
		"4":{"6":0.175,"7":0.200,"8":0.25,"9":0.300,"10":0.350,"11":0.375,"12":0.35,"13":0.35,"14":0.40,"15":0.45,"16":0.50,"17":0.55,"18":0.60,"19":0.65,"20":0.70,"21":0.70,"22":0.75,"23":0.75,"24":0.80,"25":0.85,"26":0.85,"27":0.90,"28":0.95,"29":1.00,"30":1.05,},
		"5":{"6":0.250,"7":0.300,"8":0.35,"9":0.425,"10":0.475,"11":0.525,"12":0.50,"13":0.55,"14":0.60,"15":0.65,"16":0.70,"17":0.75,"18":0.85,"19":0.90,"20":0.95,"21":1.00,"22":1.05,"23":1.10,"24":1.15,"25":1.20,"26":1.25,"27":1.30,"28":1.35,"29":1.40,"30":1.45,},
		"6":{"6":0.350,"7":0.45,"8":0.50,"9":0.575,"10":0.650,"11":0.700,"12":0.70,"13":0.80,"14":0.90,"15":0.95,"16":1.00,"17":1.05,"18":1.15,"19":1.20,"20":1.30,"21":1.35,"22":1.40,"23":1.50,"24":1.60,"25":1.65,"26":1.70,"27":1.75,"28":1.85,"29":1.90,"30":2.00,},
	};
    //This Variable Used For Building 4 Feet Or 5 Feet Need To Create Globle   
	var legDistance = 5;
	var disFor2Legs = 0.20;
	var disForVShapLegs = 0.55;
	var hightFor2Legs = params.p_h;
	var hightForVShapLegs = params.p_h - 0.5;
	if(const_var.legstype == "ladder")
	{
		disFor2Legs = 0.60;//0.48;
		////hightFor2Legs = params.p_h + params.p_r_p/params.p_w - 0.08;
		hightFor2Legs = params.p_h + params.p_r_p/20 - 0.08;
	}
	

	//Left Front Trim For Center Building Right Storage 
	var trimGeo = new THREE.BoxGeometry(0.25,1,0.2);
	var trimMaterial = new THREE.MeshBasicMaterial({color:0x0E6655,side:THREE.DoubleSide});
	var cb_R_S_FrontTrim = new THREE.Mesh(trimGeo,trimMaterial);
	cb_R_S_FrontTrim.name = "CB_R_S_F_T";
	if(params.cB_addStorage_right <= params.p_w /2){
	cb_R_S_FrontTrim.scale.set(0.5+0.17, params.p_h+(params.cB_addStorage_right*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2))), 0.5);
	cb_R_S_FrontTrim.position.set(params.p_w/2 - params.cB_addStorage_right,(params.p_h+(params.cB_addStorage_right*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2))))/2,params.p_d/2);
	}else{
	cb_R_S_FrontTrim.scale.set(0.5+0.17, 0, 0.5);
	cb_R_S_FrontTrim.position.set(params.p_w/2 - params.cB_addStorage_right,0,params.p_d/2);
	cb_R_S_FrontTrim.scale.y =(params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12))
	cb_R_S_FrontTrim.position.y = (((params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12)))/2)
	}
	cb_R_S_FrontTrim.visible = (params.cB_addStorage_check_right!=false)?true:false;
	const_var.b_t_M_L.add(cb_R_S_FrontTrim);


	//Left Back Trim For Center Building Right Storage 
	var trimGeo = new THREE.BoxGeometry(0.25,1,0.2);
	var trimMaterial = new THREE.MeshBasicMaterial({color:0x0E6655,side:THREE.DoubleSide});
	var cb_R_S_BackTrim = new THREE.Mesh(trimGeo,trimMaterial);
	cb_R_S_BackTrim.name = "CB_R_S_B_T";
	if(params.cB_addStorage_right <= params.p_w /2){
	cb_R_S_BackTrim.scale.set(0.5+0.17, params.p_h+(params.cB_addStorage_right*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2))), 0.5);
	cb_R_S_BackTrim.position.set(params.p_w/2 - params.cB_addStorage_right,(params.p_h+(params.cB_addStorage_right*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2))))/2,params.p_d/-2);
	}else{
	cb_R_S_BackTrim.scale.set(0.5+0.17, 0, 0.5);
	cb_R_S_BackTrim.position.set(params.p_w/2 - params.cB_addStorage_right,0,params.p_d/-2);
	cb_R_S_BackTrim.scale.y =(params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12))
	cb_R_S_BackTrim.position.y = (((params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12)))/2)
	}
	cb_R_S_BackTrim.visible = (params.cB_addStorage_check_right!=false)?true:false;
	const_var.b_t_M_L.add(cb_R_S_BackTrim);



	//Right Front Trim For Center Building Left Storage 
	var trimGeo = new THREE.BoxGeometry(0.25,1,0.2);
	var trimMaterial = new THREE.MeshBasicMaterial({color:0x0E6655,side:THREE.DoubleSide});
	var cb_L_S_FrontTrim = new THREE.Mesh(trimGeo,trimMaterial);
	cb_L_S_FrontTrim.name = "CB_L_S_F_T";
	if(params.cB_addStorage_left <= params.p_w /2){
	cb_L_S_FrontTrim.scale.set(0.5+0.17, params.p_h+(params.cB_addStorage_left*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2))), 0.5);
	cb_L_S_FrontTrim.position.set(-(params.p_w/2 - params.cB_addStorage_left),(params.p_h+(params.cB_addStorage_left*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2))))/2,params.p_d/2);
	}else{
	cb_L_S_FrontTrim.scale.set(0.5+0.17, 0, 0.5);
	cb_L_S_FrontTrim.position.set(-(params.p_w/2 - params.cB_addStorage_left),0,params.p_d/2);
	cb_L_S_FrontTrim.scale.y =(params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_left-(params.p_w/2))*(params.p_r_p/12))
	cb_L_S_FrontTrim.position.y = (((params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_left-(params.p_w/2))*(params.p_r_p/12)))/2)
	}
	cb_L_S_FrontTrim.visible = (params.cB_addStorage_check_left!=false)?true:false;
	const_var.b_t_M_L.add(cb_L_S_FrontTrim);


	// Back Trim For Center Building Left Storage 
	var trimGeo = new THREE.BoxGeometry(0.25,1,0.2);
	var trimMaterial = new THREE.MeshBasicMaterial({color:0x0E6655,side:THREE.DoubleSide});
	var cb_L_S_BackTrim = new THREE.Mesh(trimGeo,trimMaterial);
	cb_L_S_BackTrim.name = "CB_L_S_B_T";
	if(params.cB_addStorage_left <= params.p_w /2){
	cb_L_S_BackTrim.scale.set(0.5+0.17, params.p_h+(params.cB_addStorage_left*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2))), 0.5);
	cb_L_S_BackTrim.position.set(-(params.p_w/2 - params.cB_addStorage_left),(params.p_h+(params.cB_addStorage_left*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2))))/2,params.p_d/-2);
	}else{
	cb_L_S_BackTrim.scale.set(0.5+0.17, 0, 0.5);
	cb_L_S_BackTrim.position.set(-(params.p_w/2 - params.cB_addStorage_left),0,params.p_d/-2);
	cb_L_S_BackTrim.scale.y =(params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_left-(params.p_w/2))*(params.p_r_p/12))
	cb_L_S_BackTrim.position.y = (((params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_left-(params.p_w/2))*(params.p_r_p/12)))/2)
	}
	cb_L_S_BackTrim.visible = (params.cB_addStorage_check_left!=false)?true:false;
	const_var.b_t_M_L.add(cb_L_S_BackTrim);

	//Center Building Left Front Trim
	var trimGeo = new THREE.BoxGeometry(0.25,1,0.2);
	var trimMaterial = new THREE.MeshBasicMaterial({color:0x0E6655,side:THREE.DoubleSide});

	var leftLegFrontTrim = new THREE.Mesh(trimGeo,trimMaterial);
	leftLegFrontTrim.name = "leftLegFrontTrim";
	leftLegFrontTrim.scale.set(0.5+0.17, params.p_h+0.07, 0.5);
	leftLegFrontTrim.position.set(params.p_w/-2+0.058,params.p_h/2-0.06,params.p_d/2);

	           
		            var wH = params.p_h+0.07;
                    var wP = params.p_h - wH/2;

                    leftLegFrontTrim.position.y = wP;				
                    leftLegFrontTrim.scale.set(params.p_w,wH,0);
        
                    switch(params.p_f_w)
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
                            wH = wH/6;
                            wP = params.p_h - wH/2;
                            break;
                        case "Gable":
                            wH = wH/18;
                            wP = params.p_h - wH/2; 
                            break;
                        case "Close":
                            wH = params.p_h;
                            wP = params.p_h - wH/2;
                            break;
                        default:
							leftLegFrontTrim.visible = false; 
                            break;
                            
                    }
                    leftLegFrontTrim.position.y = wP;				
                    leftLegFrontTrim.scale.set(0.5+0.17, wH, 0.5);
			
	const_var.b_t_M_L.add(leftLegFrontTrim);


	//Center Building Left Front Trim for left wall
	var trimGeo = new THREE.BoxGeometry(0.25,1,0.2);
	var trimMaterial = new THREE.MeshBasicMaterial({color:0x0E6655,side:THREE.DoubleSide});

	var leftLegFrontTrimL = new THREE.Mesh(trimGeo,trimMaterial);
	leftLegFrontTrimL.name = "leftLegFrontTrimL";
	leftLegFrontTrimL.scale.set(0.5+0.17, params.p_h+0.07, 0.5);
	leftLegFrontTrimL.position.set(params.p_w/-2+0.058,params.p_h/2-0.06,params.p_d/2);

					var wH = params.p_h+0.07;
                    var wP = params.p_h - wH/2;

					switch(params.p_l_w)
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
                        case "Close":
                            wH = params.p_h;
                            wP = params.p_h - wH/2;
                            break;
                        default:
                                if(params.p_l_w=="Open")
                                {    
                                   
                                    leftLegFrontTrimL.visible = false; 
                                }
                                else
                                {
                                    wH = Math.abs(params.p_l_w.replace(/\D/g, "")) * 3;
                                    wP = params.p_h - wH/2;
                                }
                                // console.log("BB",hdfp,params.p_h,params.lean_p_h,Number(params.b_l_t_r_p),params.a_c_p_l);
                            break;
                    }			
					leftLegFrontTrimL.position.y = wP;				
                    leftLegFrontTrimL.scale.set(0.5+0.17, wH, 0.5);	
                    if(params.p_l_w=="Open" && params.p_c_p_l==true)
                    {
                        wH = 1.5;
                        wP = params.p_h - wH/2;
                    }
                    if(params.p_l_w!=="Open" && params.p_c_p_l==true)
                    {
                        wH = wH + 1.5;
                        wP = params.p_h - wH/2;
                    }
					if(params.cB_addStorage_check_left == true)
					{
						leftLegFrontTrimL.visible = true;
					}
					leftLegFrontTrimL.position.y = wP;				
                    leftLegFrontTrimL.scale.set(0.5+0.17, wH, 0.5);
	
	const_var.b_t_M_L.add(leftLegFrontTrimL);

	
	//Center Building Left Back Trim
	var leftLegBackTrim = new THREE.Mesh(trimGeo,trimMaterial);
	leftLegBackTrim.name = "leftLegBackTrim";
	leftLegBackTrim.scale.set(0.5+0.17, params.p_h+0.07,0.5);
	leftLegBackTrim.position.set(params.p_w/-2+0.058,params.p_h/2-0.06,params.p_d/-2);

	var wH = params.p_h+0.07;
	var wP = params.p_h - wH/2;

	leftLegBackTrim.position.y = wP;				
	leftLegBackTrim.scale.set(params.p_w,wH,0);
	
	switch(params.p_b_w)
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
			wH = wH/6;
			wP = params.p_h - wH/2;
			break;
		case "Gable":
			wH = wH/18;
			wP = params.p_h - wH/2; 
			break;
		case "Close":
			wH = params.p_h;
			wP = params.p_h - wH/2;
			break;
		default:
			leftLegBackTrim.visible = false; 		
			break;
			
	}
	leftLegBackTrim.position.y = wP;				
	leftLegBackTrim.scale.set(0.5+0.17, wH, 0.5);

	// leftLegBackTrim.visible = (params.p_r_s == "1")?true:false;
	const_var.b_t_M_L.add(leftLegBackTrim);

	//Center Building Left Back Trim for left wall
	var leftLegBackTrimL = new THREE.Mesh(trimGeo,trimMaterial);
	leftLegBackTrimL.name = "leftLegBackTrimL";
	leftLegBackTrimL.scale.set(0.5+0.17, params.p_h+0.07,0.5);
	leftLegBackTrimL.position.set(params.p_w/-2+0.058,params.p_h/2-0.06,params.p_d/-2);

	var wH = params.p_h+0.07;
                    var wP = params.p_h - wH/2;

					switch(params.p_l_w)
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
                        case "Close":
                            wH = params.p_h;
                            wP = params.p_h - wH/2;
                            break;
                        default:
                                if(params.p_l_w=="Open")
                                {    
                                   
                                    leftLegBackTrimL.visible = false; 
                                }
                                else
                                {
                                    wH = Math.abs(params.p_l_w.replace(/\D/g, "")) * 3;
                                    wP = params.p_h - wH/2;
                                }
                                // console.log("BB",hdfp,params.p_h,params.lean_p_h,Number(params.b_l_t_r_p),params.a_c_p_l);
                            break;
                    }			
					leftLegBackTrimL.position.y = wP;				
                    leftLegBackTrimL.scale.set(0.5+0.17, wH, 0.5);	
                    if(params.p_l_w=="Open" && params.p_c_p_l==true)
                    {
                        wH = 1.5;
                        wP = params.p_h - wH/2;
                    }
                    if(params.p_l_w!=="Open" && params.p_c_p_l==true)
                    {
                        wH = wH + 1.5;
                        wP = params.p_h - wH/2;
                    }
					if(params.cB_addStorage_check_left == true)
					{
						leftLegBackTrimL.visible = true;
					}
					leftLegBackTrimL.position.y = wP;				
                    leftLegBackTrimL.scale.set(0.5+0.17, wH, 0.5);

	// leftLegBackTrimL.visible = (params.p_r_s == "1")?true:false;
	const_var.b_t_M_L.add(leftLegBackTrimL);

	//Center Building Right Front Trim
	var rightLegFrontTrim = new THREE.Mesh(trimGeo,trimMaterial);
	rightLegFrontTrim.name = "rightLegFrontTrim";
	rightLegFrontTrim.scale.set(0.5+0.17, params.p_h+0.07,0.5);
	rightLegFrontTrim.position.set(params.p_w/2-0.058,params.p_h/2-0.06,params.p_d/2);

	var wH = params.p_h+0.07;
	var wP = params.p_h - wH/2;

	rightLegFrontTrim.position.y = wP;				
	rightLegFrontTrim.scale.set(params.p_w,wH,0);

	switch(params.p_f_w)
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
			wH = wH/6;
			wP = params.p_h - wH/2;
			break;
		case "Gable":
			wH = wH/18;
			wP = params.p_h - wH/2; 
			break;
		case "Close":
			wH = params.p_h;
			wP = params.p_h - wH/2;
			break;
		default:
			rightLegFrontTrim.visible = false; 			
			break;
			
	}
	rightLegFrontTrim.position.y = wP;				
	rightLegFrontTrim.scale.set(0.5+0.17, wH, 0.5);


	// rightLegFrontTrim.visible = (params.p_r_s == "1")?true:false;
	const_var.b_t_M_R.add(rightLegFrontTrim);

	//Center Building Right Front Trim for right wall
	var rightLegFrontTrimR = new THREE.Mesh(trimGeo,trimMaterial);
	rightLegFrontTrimR.name = "rightLegFrontTrimR";
	rightLegFrontTrimR.scale.set(0.5+0.17, params.p_h+0.07,0.5);
	rightLegFrontTrimR.position.set(params.p_w/2-0.058,params.p_h/2-0.06,params.p_d/2);
	
		var wH = params.p_h+0.07;
		var wP = params.p_h - wH/2;
	
		rightLegFrontTrimR.position.y = wP;				
		rightLegFrontTrimR.scale.set(params.p_w,wH,0);
				
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
			case "Close":
				wH = params.p_h;
				wP = params.p_h - wH/2;
				break;
			default:
					
					if(params.p_r_w=="Open" )
					{    
						rightLegFrontTrimR.visible = false;
					}
					else
					{
						wH = Math.abs(params.p_r_w.replace(/\D/g, "")) * 3;
						wP = params.p_h - wH/2;
					}
				break;
		}
		if(params.p_r_w=="Open" && params.p_c_p_r==true)
		{
			wH = 1.5;
			wP = params.p_h - wH/2;
		}
		if(params.p_r_w!=="Open" && params.p_c_p_r==true)
		{
			wH = wH + 1.5;
			wP = params.p_h - wH/2;
		}
		if(params.cB_addStorage_check_right == true)
		{
			rightLegFrontTrimR.visible = true;
		}	
	rightLegFrontTrimR.position.y = wP;				
	rightLegFrontTrimR.scale.set(0.5+0.17, wH, 0.5);
	// rightLegFrontTrimR.visible = (params.p_r_s == "1")?true:false;
	const_var.b_t_M_R.add(rightLegFrontTrimR);
	
	//Center Building Right Back Trim
	var rightLegBackTrim = new THREE.Mesh(trimGeo,trimMaterial);
	rightLegBackTrim.name = "rightLegBackTrim";
	rightLegBackTrim.scale.set(0.5+0.17, params.p_h+0.07,0.5);
	rightLegBackTrim.position.set(params.p_w/2-0.058,params.p_h/2-0.06,params.p_d/-2);

	var wH = params.p_h+0.07;
	var wP = params.p_h - wH/2;

	rightLegBackTrim.position.y = wP;				
	rightLegBackTrim.scale.set(params.p_w,wH,0);
	
	switch(params.p_b_w)
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
			wH = wH/6;
			wP = params.p_h - wH/2;
			break;
		case "Gable":
			wH = wH/18;
			wP = params.p_h - wH/2; 
			break;
		case "Close":
			wH = params.p_h;
			wP = params.p_h - wH/2;
			break;
		default:
			rightLegBackTrim.visible = false;				
			break;
			
	}
	rightLegBackTrim.position.y = wP;				
	rightLegBackTrim.scale.set(0.5+0.17, wH, 0.5);

	// rightLegBackTrim.visible = (params.p_r_s == "1")?true:false;
	const_var.b_t_M_R.add(rightLegBackTrim);

	//Center Building Right Back Trim for right wall
	var rightLegBackTrimR = new THREE.Mesh(trimGeo,trimMaterial);
	rightLegBackTrimR.name = "rightLegBackTrimR";
	rightLegBackTrimR.scale.set(0.5+0.17, params.p_h+0.07,0.5);
	rightLegBackTrimR.position.set(params.p_w/2-0.058,params.p_h/2-0.06,params.p_d/-2);
	
		var wH = params.p_h+0.07;
		var wP = params.p_h - wH/2;
	
		rightLegBackTrimR.position.y = wP;				
		rightLegBackTrimR.scale.set(params.p_w,wH,0);
		
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
			case "Close":
				wH = params.p_h;
				wP = params.p_h - wH/2;
				break;
			default:
					
					if(params.p_r_w=="Open" )
					{    
						rightLegBackTrimR.visible = false;
					}
					else
					{
						wH = Math.abs(params.p_r_w.replace(/\D/g, "")) * 3;
						wP = params.p_h - wH/2;
					}
				break;
		}
		if(params.p_r_w=="Open" && params.p_c_p_r==true)
		{
			wH = 1.5;
			wP = params.p_h - wH/2;
		}
		if(params.p_r_w!=="Open" && params.p_c_p_r==true)
		{
			wH = wH + 1.5;
			wP = params.p_h - wH/2;
		}
		if(params.cB_addStorage_check_right == true)
		{
			rightLegBackTrimR.visible = true;
		}
	rightLegBackTrimR.position.y = wP;				
	rightLegBackTrimR.scale.set(0.5+0.17, wH, 0.5);
	const_var.b_t_M_R.add(rightLegBackTrimR);

	/* Free Standing Lean To Right Front Leg Trim */
	var f_S_L_R_LegFrontTrim = new THREE.Mesh(trimGeo,trimMaterial);
	f_S_L_R_LegFrontTrim.name = "f_S_L_R_FrontTrimLeg";
	f_S_L_R_LegFrontTrim.visible = params.singleSlope
	f_S_L_R_LegFrontTrim.scale.set(0.5+0.17, params.p_h+0.07,0.5);

    f_S_L_R_LegFrontTrim.position.set(params.p_w/2-0.15,params.p_h/2-0.06,params.p_d/2);

  	var wH =( params.p_h+2*f_S_LeanLegScale[params.p_r_p][params.p_w]);
 	var wP =  params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;

	f_S_L_R_LegFrontTrim.position.y = wP;				
	f_S_L_R_LegFrontTrim.scale.set(params.p_w ,wH ,0);

	switch(params.p_f_w)
	{
		case "One_Fourth_Close":
			wH = wH/4+ (f_S_LeanLegScale[params.p_r_p][params.p_w]/2.1);
      		wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
			break;
		case "Half_Close":
			wH = wH/2;
      		wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;	
	  		break;					
		case "Three_Fourth_Close":
			wH = wH * 2.65/4 ;
			wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
			break;
		case "Extended Gable":
			wH = wH/6 +(f_S_LeanLegScale[params.p_r_p][params.p_w]/1.57);
			wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
			break;
		case "Gable":
			wH = wH/18 +(f_S_LeanLegScale[params.p_r_p][params.p_w]/1.17);
			wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2; 
			break;
		case "Close":
			wH = params.p_h +f_S_LeanLegScale[params.p_r_p][params.p_w];
			wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
			break;
		default:
			f_S_L_R_LegFrontTrim.visible = false; 			
			break;		
	}
	if(params.p_r_p == "3"){
		var wH =( params.p_h+2*f_S_LeanLegScale[params.p_r_p][params.p_w]);
 		var wP =  params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;

		f_S_L_R_LegFrontTrim.position.y = wP;				
		f_S_L_R_LegFrontTrim.scale.set(params.p_w ,wH ,0);
		switch(params.p_f_w)
		{
			case "One_Fourth_Close":
				wH = wH/4+ (f_S_LeanLegScale[params.p_r_p][params.p_w]/1.9);
				wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
				break;
			case "Half_Close":
				wH = wH/2+0.1;
				wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;	
				break;						
			case "Three_Fourth_Close":
				wH = wH * 2.6/4 ;
				wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
				break;
			case "Extended Gable":
				wH = wH/6 +(f_S_LeanLegScale[params.p_r_p][params.p_w]/1.45);
				wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
				break;
			case "Gable":
				wH = wH/18 +(f_S_LeanLegScale[params.p_r_p][params.p_w]/1.1);
			    wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2; 
				break;
			case "Close":
				wH = params.p_h +f_S_LeanLegScale[params.p_r_p][params.p_w] +0.25;
				wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
				break;
			default:
				f_S_L_R_LegFrontTrim.visible = false; 			
				break;		
		}
	}
	f_S_L_R_LegFrontTrim.position.y = wP;				
	f_S_L_R_LegFrontTrim.scale.set(0.5+0.17, wH, 0.5);
	const_var.F_S_L_R.add(f_S_L_R_LegFrontTrim);

	/* Free Standing Lean To Right Front Leg Trim for right wall */
	var f_S_L_R_LegFrontTrimR = new THREE.Mesh(trimGeo,trimMaterial);
	f_S_L_R_LegFrontTrimR.name = "f_S_L_R_FrontTrimRLeg";
	f_S_L_R_LegFrontTrimR.visible = params.singleSlope
	f_S_L_R_LegFrontTrimR.scale.set(0.5+0.17, params.p_h+0.07,0.5);
	f_S_L_R_LegFrontTrimR.position.set(params.p_w/2-0.058,params.p_h/2-0.06,params.p_d/2);

	var wH =( params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w]);
    var wP =  params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;

		f_S_L_R_LegFrontTrimR.position.y = wP;				
		f_S_L_R_LegFrontTrimR.scale.set(params.p_w,wH,0);
				
		switch(params.p_r_w)
		{
			case "One_Fourth_Close":
				wH = wH/4;
				 wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
				break;
			case "Half_Close":
				wH = wH/2;
				 wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
				break;					
			case "Three_Fourth_Close":
				wH = wH * 3/4;
				 wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
				break;
			case "Extended Gable":
				break;
			case "Gable":
				break;
			case "Close":
				wH = params.p_h+f_S_LeanLegScale[params.p_r_p][params.p_w];
				wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
				break;
			default:	
				if(params.p_r_w=="Open" ){    
					f_S_L_R_LegFrontTrimR.visible = false;
				} else {
					wH = Math.abs(params.p_r_w.replace(/\D/g, "")) * 3;
				    wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
				}
				break;
		}
		if(params.p_r_w=="Open" && params.p_c_p_r==true) {
		 wH = 1.5;
		 wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
		}
		if(params.p_r_w!=="Open" && params.p_c_p_r==true) {
		 wH = wH + 1.5;
		 wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
		}
		if(params.cB_addStorage_check_right == true) {
			f_S_L_R_LegFrontTrimR.visible = true;
		}	
	f_S_L_R_LegFrontTrimR.position.y = wP;				
	f_S_L_R_LegFrontTrimR.scale.set(0.5+0.17, wH, 0.5);
	const_var.F_S_L_R.add(f_S_L_R_LegFrontTrimR);
	
	/* Free Standing Lean To Right Back Leg Trim*/
	var f_S_L_R_LegBackTrim = new THREE.Mesh(trimGeo,trimMaterial);
	f_S_L_R_LegBackTrim.name = "f_S_L_R_BackTrimLeg";
	f_S_L_R_LegBackTrim.visible = params.singleSlope
	f_S_L_R_LegBackTrim.scale.set(0.5+0.17, params.p_h+0.07,0.5);
	f_S_L_R_LegBackTrim.position.set(params.p_w/2-0.15,params.p_h/2-0.06,params.p_d/-2);

    var wH =( params.p_h+2*f_S_LeanLegScale[params.p_r_p][params.p_w]);
    var wP =  params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;

	f_S_L_R_LegBackTrim.position.y = wP;				
	f_S_L_R_LegBackTrim.scale.set(params.p_w,wH,0);
	
	switch(params.p_b_w)
	{
		case "One_Fourth_Close":
			wH = wH/4+ (f_S_LeanLegScale[params.p_r_p][params.p_w]/2.1);
      		wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
			break;
		case "Half_Close":
			wH = wH/2;
      		wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;	
	  		break;					
		case "Three_Fourth_Close":
			wH = wH * 2.65/4 ;
			wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
			break;
		case "Extended Gable":
			wH = wH/6 +(f_S_LeanLegScale[params.p_r_p][params.p_w]/1.57);
			wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
			break;
		case "Gable":
			wH = wH/18 +(f_S_LeanLegScale[params.p_r_p][params.p_w]/1.17);
			wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2; 
			break;
		case "Close":
			wH = params.p_h +f_S_LeanLegScale[params.p_r_p][params.p_w];
			wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
			break;
		default:
			f_S_L_R_LegBackTrim.visible = false;				
			break;	
	}
	if(params.p_r_p == "3"){
		var wH =( params.p_h+2*f_S_LeanLegScale[params.p_r_p][params.p_w]);
 		var wP =  params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;

		f_S_L_R_LegBackTrim.position.y = wP;				
		f_S_L_R_LegBackTrim.scale.set(params.p_w ,wH ,0);
		switch(params.p_b_w)
		{
			case "One_Fourth_Close":
				wH = wH/4+ (f_S_LeanLegScale[params.p_r_p][params.p_w]/1.9);
				wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
				break;
			case "Half_Close":
				wH = wH/2+0.1;
				wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;	
				break;						
			case "Three_Fourth_Close":
				wH = wH * 2.6/4 ;
				wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
				break;
			case "Extended Gable":
				wH = wH/6 +(f_S_LeanLegScale[params.p_r_p][params.p_w]/1.45);
				wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
				break;
			case "Gable":
				wH = wH/18 +(f_S_LeanLegScale[params.p_r_p][params.p_w]/1.1);
				wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2; 
				break;
			case "Close":
				wH = params.p_h +f_S_LeanLegScale[params.p_r_p][params.p_w] +0.25;
				wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
				break;
			default:
				f_S_L_R_LegBackTrim.visible = false; 			
				break;		
		}
	}

	f_S_L_R_LegBackTrim.position.y = wP;				
	f_S_L_R_LegBackTrim.scale.set(0.5+0.17, wH, 0.5);
	const_var.F_S_L_R.add(f_S_L_R_LegBackTrim);

	/* Free Standing Lean To Right Back Leg Trim for right wall */
	var f_S_L_R_LegBackTrimR = new THREE.Mesh(trimGeo,trimMaterial);
	f_S_L_R_LegBackTrimR.name = "f_S_L_R_BackTrimRLeg";
	f_S_L_R_LegBackTrimR.visible = params.singleSlope
	f_S_L_R_LegBackTrimR.scale.set(0.5+0.17, params.p_h+ f_S_LeanLegScale[params.p_r_p][params.p_w] +0.07,0.5);
	f_S_L_R_LegBackTrimR.position.set(params.p_w/2-0.058,params.p_h/2 +f_S_LeanLegHeight[params.p_r_p][params.p_w]-0.06,params.p_d/-2);

    var wH =( params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w]);
    var wP =  params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
	
		f_S_L_R_LegBackTrimR.position.y = wP;				
		f_S_L_R_LegBackTrimR.scale.set(params.p_w,wH,0);
		
		switch(params.p_r_w)
		{
			case "One_Fourth_Close":
				wH = wH/4;
				 wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
				break;
			case "Half_Close":
				wH = wH/2;
				 wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
				break;					
			case "Three_Fourth_Close":
				wH = wH * 3/4;
				 wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
				break;
			case "Extended Gable":
				break;
			case "Gable":
				break;
			case "Close":
				wH = params.p_h+f_S_LeanLegScale[params.p_r_p][params.p_w];
				 wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
				break;
			default:
				if(params.p_r_w=="Open" ) {    
					f_S_L_R_LegBackTrimR.visible = false;
				} else {
					wH = Math.abs(params.p_r_w.replace(/\D/g, "")) * 3;
					wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
				}
				break;
		}
		if(params.p_r_w=="Open" && params.p_c_p_r==true){
			wH = 1.5;
			wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
		}
		if(params.p_r_w!=="Open" && params.p_c_p_r==true) {
			wH = wH + 1.5;
			wP = params.p_h+2*f_S_LeanLegHeight[params.p_r_p][params.p_w] - wH/2;
		}
		if(params.cB_addStorage_check_right == true){
			f_S_L_R_LegBackTrimR.visible = true;
		}
	f_S_L_R_LegBackTrimR.position.y = wP;				
	f_S_L_R_LegBackTrimR.scale.set(0.5+0.17, wH, 0.5);
	const_var.F_S_L_R.add(f_S_L_R_LegBackTrimR);
	
	//Center Building Left Front Leg 
	var legGeo = new THREE.BoxGeometry(0.31,1,0.2);
	var legMaterial = new THREE.MeshBasicMaterial({color:0xC9C6C6,side:THREE.DoubleSide});
	var leftFrontLeg = new THREE.Mesh(legGeo,legMaterial);
	leftFrontLeg.name = "leftFrontLeg";
	leftFrontLeg.scale.set(0.5,params.p_h,1);
	leftFrontLeg.position.set(params.p_w/-2+0.08,params.p_h/2,params.p_d/2-0.12);
	const_var.b_t_M_L.add(leftFrontLeg);

	//Center Building Left Front Leg 2 //Double Lag
	var leftFrontLegS = leftFrontLeg.clone();
	leftFrontLegS.name = "leftFrontLegS";
	leftFrontLegS.visible = params.p_e_l;
	leftFrontLegS.scale.set(0.5,hightFor2Legs,1);
	leftFrontLegS.position.set(params.p_w/-2+disFor2Legs,hightFor2Legs/2,params.p_d/2-0.12);
	//leftFrontLegS.position.set(params.p_w/-2+disFor2Legs,hightFor2Legs/2,params.p_d/2-0.12);
	//leftFrontLegS.rotation.z = -0.0125;
	const_var.b_t_M_L.add(leftFrontLegS);
	
	//Center Building Left Front Leg 2 //Lag Shape V
	var leftFrontVShapLeg = leftFrontLeg.clone();
	leftFrontVShapLeg.name = "leftFrontVShapLeg";
	leftFrontVShapLeg.visible = true;
	leftFrontVShapLeg.scale.set(0.5,hightForVShapLegs,1);
	leftFrontVShapLeg.position.set(params.p_w/-2+disForVShapLegs,hightForVShapLegs/2,params.p_d/2-0.12);
	leftFrontVShapLeg.rotation.z = -0.1325 + (params.p_h * 0.005);//-0.0325;//-0.0925;
	////b_t_M_L.add(leftFrontVShapLeg);
	
	//Center Building Left Back Leg	
	var leftBackLeg = new THREE.Mesh(legGeo,legMaterial);
	//leftBackLeg.scale.set(1,params.p_h,1);
	//leftBackLeg.position.set(params.p_w/-2,params.p_h/2,params.p_d/-2);
	leftBackLeg.scale.set(0.5,params.p_h,1);
	leftBackLeg.position.set(params.p_w/-2+0.08,(params.p_h)/2,params.p_d/-2+0.12);
	leftBackLeg.name = "leftBackLeg";
	const_var.b_t_M_L.add(leftBackLeg);
	
	//Center Building Left Back Leg 2 //Double Lag
	var leftBackLegS = leftBackLeg.clone();
	leftBackLegS.name = "leftBackLegS";
	leftBackLegS.visible = params.p_e_l;
	leftBackLegS.scale.set(0.5,hightFor2Legs,1);
	leftBackLegS.position.set(params.p_w/-2+disFor2Legs,hightFor2Legs/2,params.p_d/-2+0.12);
	const_var.b_t_M_L.add(leftBackLegS);
	
	//Center Building Left Back Leg 2 //Lag Shape V
	var leftBackVShapLeg = leftFrontLeg.clone();
	leftBackVShapLeg.name = "leftBackVShapLeg";
	leftBackVShapLeg.visible = true;
	leftBackVShapLeg.scale.set(0.5,hightForVShapLegs,1);
	leftBackVShapLeg.position.set(params.p_w/-2+disForVShapLegs,hightForVShapLegs/2,params.p_d/-2+0.12);
	leftBackVShapLeg.rotation.z = -0.1325 + (params.p_h * 0.005);//-0.0325;//-0.0925;
	////b_t_M_L.add(leftBackVShapLeg);	

	const f_S_LeanLegPosX = {"2":0.18,"3":0.25}
	var f_S_LeanRightFrontLeg = new THREE.Mesh(legGeo,legMaterial);
	f_S_LeanRightFrontLeg.name = "f_S_LeanRightFrontLeg";
	f_S_LeanRightFrontLeg.scale.set(0.5,params.p_h+f_S_LeanLegScale[params.p_r_p][params.p_w],1);
	// f_S_LeanRightFrontLeg.position.set(params.p_w/2-f_S_LeanLegPosX[params.p_r_p],params.p_h/2+f_S_LeanLegHeight[params.p_r_p][params.p_w],params.p_d/2-0.12);
	f_S_LeanRightFrontLeg.position.set(params.p_w/2-0.18,params.p_h/2+f_S_LeanLegHeight[params.p_r_p][params.p_w],params.p_d/2-0.12);
	f_S_LeanRightFrontLeg.visible = params.singleSlope
	const_var.F_S_L_R.add(f_S_LeanRightFrontLeg);

	var f_S_LeanRightBackLeg = new THREE.Mesh(legGeo,legMaterial);
	f_S_LeanRightBackLeg.scale.set(0.5,params.p_h+f_S_LeanLegScale[params.p_r_p][params.p_w],1);
	f_S_LeanRightBackLeg.position.set(params.p_w/2-0.18,params.p_h/2+f_S_LeanLegHeight[params.p_r_p][params.p_w],params.p_d/-2+0.12);
	f_S_LeanRightBackLeg.name = "f_S_LeanRightBackLeg";
	f_S_LeanRightBackLeg.visible = params.singleSlope 
	const_var.F_S_L_R.add(f_S_LeanRightBackLeg);

	for(var i = 0;i<(params.p_d/2 - 2);i = i+legDistance){
		var f_S_LeanRightFrontLeg = new THREE.Mesh(legGeo,legMaterial);
		f_S_LeanRightFrontLeg.name = "f_S_LeanRightFrontLeg"+i;
		f_S_LeanRightFrontLeg.scale.set(0.5,params.p_h+f_S_LeanLegScale[params.p_r_p][params.p_w],1);
		f_S_LeanRightFrontLeg.position.set(params.p_w/2-0.18,params.p_h/2+f_S_LeanLegHeight[params.p_r_p][params.p_w],i.toFixed(2));
		f_S_LeanRightFrontLeg.visible = params.singleSlope;

		var f_S_LeanRightBacktLeg = new THREE.Mesh(legGeo,legMaterial);
		f_S_LeanRightBacktLeg.name = "f_S_LeanRightBacktLeg"+i;
		f_S_LeanRightBacktLeg.scale.set(0.5,params.p_h+f_S_LeanLegScale[params.p_r_p][params.p_w],1);
		f_S_LeanRightBacktLeg.position.set(params.p_w/2-0.18,params.p_h/2+f_S_LeanLegHeight[params.p_r_p][params.p_w],-i.toFixed(2));
		f_S_LeanRightBacktLeg.visible = params.singleSlope;
		// (params.singleSlope == true)?true:false;
		if(i!=0) {
			const_var.F_S_L_R.add(f_S_LeanRightFrontLeg);
			const_var.F_S_L_R.add(f_S_LeanRightBacktLeg);
		} else {
			// f_S_LeanRightFrontLeg.position.set(params.p_w/2 -0.18,params.p_h/2+f_S_LeanLegHeight[params.p_r_p][params.p_w],0);
			const_var.F_S_L_R.add(f_S_LeanRightFrontLeg);
		}
	}
	var f_S_LeanRightBaseRail = new THREE.Mesh(legGeo,legMaterial);
	f_S_LeanRightBaseRail.name = "f_S_LeanRightBaseRail";
	f_S_LeanRightBaseRail.scale.set(0.5,params.p_d - 0.02,1);
	f_S_LeanRightBaseRail.position.set(params.p_w/2-0.18,0,0);
	f_S_LeanRightBaseRail.visible = (params.singleSlope == true)?true:false;
	f_S_LeanRightBaseRail.rotation.x=Math.PI/-2;
	const_var.F_S_L_R.add(f_S_LeanRightBaseRail);

	
	//Center Building Right Front Leg
	var rightFrontLeg = new THREE.Mesh(legGeo,legMaterial);
	rightFrontLeg.name = "rightFrontLeg";
	//rightFrontLeg.scale.set(1,params.p_h,1);
	//rightFrontLeg.position.set(params.p_w/2,params.p_h/2,params.p_d/2);
	rightFrontLeg.scale.set(0.5,params.p_h,1);
	rightFrontLeg.position.set(params.p_w/2-0.08,params.p_h/2,params.p_d/2-0.12);
	const_var.b_t_M_R.add(rightFrontLeg);
	
	//Center Building Right Front Leg 2 //Double Lag
	var rightFrontLegS = rightFrontLeg.clone();
	rightFrontLegS.name = "rightFrontLegS";
	rightFrontLegS.visible = params.p_e_l;
	rightFrontLegS.scale.set(0.5,hightFor2Legs,1);
	rightFrontLegS.position.set(params.p_w/2-disFor2Legs,hightFor2Legs/2,params.p_d/2-0.12);
	const_var.b_t_M_R.add(rightFrontLegS);
	
	//Center Building Right Front Leg 2 //Lag Shape V
	var rightFrontVShapLeg = rightFrontLeg.clone();
	rightFrontVShapLeg.name = "rightFrontVShapLeg";
	rightFrontVShapLeg.visible = true;
	rightFrontVShapLeg.scale.set(0.5,hightForVShapLegs,1);
	rightFrontVShapLeg.position.set(params.p_w/2-disForVShapLegs,hightForVShapLegs/2,params.p_d/2-0.12);
	rightFrontVShapLeg.rotation.z = 0.1325 - (params.p_h * 0.005);
	////b_t_M_R.add(rightFrontVShapLeg);
	
	
	//Center Building Right Back Leg
	var rightBackLeg = new THREE.Mesh(legGeo,legMaterial);
	//rightBackLeg.scale.set(1,params.p_h,1);
	//rightBackLeg.position.set(params.p_w/2,params.p_h/2,params.p_d/-2);
	rightBackLeg.scale.set(0.5,params.p_h,1);
	rightBackLeg.position.set(params.p_w/2-0.08,params.p_h/2,params.p_d/-2+0.12);
	rightBackLeg.name = "rightBackLeg";
	const_var.b_t_M_R.add(rightBackLeg);
	
	//Center Building Right Back Leg 2 //Double Lag
	var rightBackLegS = rightBackLeg.clone();
	rightBackLegS.name = "rightBackLegS";
	rightBackLegS.visible = params.p_e_l;
	rightBackLegS.scale.set(0.5,hightFor2Legs,1);
	rightBackLegS.position.set(params.p_w/2-disFor2Legs,hightFor2Legs/2,params.p_d/-2+0.12);
	const_var.b_t_M_R.add(rightBackLegS);
	
	//Center Building Right Back Leg 2 //Lag Shape V
	var rightBackVShapLeg = rightFrontLeg.clone();
	rightBackVShapLeg.name = "rightBackVShapLeg";
	rightBackVShapLeg.visible = true;
	rightBackVShapLeg.scale.set(0.5,hightForVShapLegs,1);
	rightBackVShapLeg.position.set(params.p_w/2-disForVShapLegs,hightForVShapLegs/2,params.p_d/-2+0.12);
	rightBackVShapLeg.rotation.z = 0.1325 - (params.p_h * 0.005);
	////b_t_M_R.add(rightBackVShapLeg);
	
	var lefRimndr = params.p_d%legDistance;
	var lefDiff = legDistance + lefRimndr/legDistance;
	//for(var i = (params.p_d/2);i >= (params.p_d/-2); i = i-lefDiff)
	//for(var i = (params.p_d/2);i >= 0; i = i-legDistance)
	////for(var i = (params.p_d/2);Math.abs(2*i) >= i; i = i-legDistance)
	
	//Loop For Dynamically Add Legs According to Building Length Left And Right Both Side
	for(var i = 0;i<(params.p_d/2 - 2);i = i+legDistance)
	{
		var leftFrontLeg = new THREE.Mesh(legGeo,legMaterial);
		leftFrontLeg.name = "leftFrontLeg"+i;
		leftFrontLeg.scale.set(0.5,params.p_h,1);
		leftFrontLeg.position.set(params.p_w/-2+0.08,params.p_h/2,i.toFixed(2));		
		
		var leftFrontLegS = leftFrontLeg.clone();
		leftFrontLegS.name = "leftFrontLegS"+i;
		leftFrontLegS.visible = params.p_e_l;
		leftFrontLegS.scale.set(0.5,hightFor2Legs,1);
		leftFrontLegS.position.set(params.p_w/-2+disFor2Legs,hightFor2Legs/2,i.toFixed(2));
		
		var leftFrontVShapLeg = leftFrontLeg.clone();
		leftFrontVShapLeg.name = "leftFrontVShapLeg"+i;
		leftFrontVShapLeg.visible = true;
		leftFrontVShapLeg.scale.set(0.5,hightForVShapLegs,1);
		leftFrontVShapLeg.position.set(params.p_w/-2+disForVShapLegs,hightForVShapLegs/2,i.toFixed(2));
		leftFrontVShapLeg.rotation.z = -0.1325 + (params.p_h * 0.005);//-0.0325;//-0.0925;			
		
		var leftBacktLeg = new THREE.Mesh(legGeo,legMaterial);
		leftBacktLeg.name = "leftBacktLeg"+i;
		leftBacktLeg.scale.set(0.5,params.p_h,1);
		leftBacktLeg.position.set(params.p_w/-2+0.08,params.p_h/2,-i.toFixed(2));
		
		var leftBacktLegS = leftBacktLeg.clone();
		leftBacktLegS.name = "leftBacktLegS"+i;
		leftBacktLegS.visible = params.p_e_l;
		leftBacktLegS.scale.set(0.5,hightFor2Legs,1);
		leftBacktLegS.position.set(params.p_w/-2+disFor2Legs,hightFor2Legs/2,-i.toFixed(2));
		
		var leftBackVShapLeg = leftFrontLeg.clone();
		leftBackVShapLeg.name = "leftBackVShapLeg"+i;
		leftBackVShapLeg.visible = true;
		leftBackVShapLeg.scale.set(0.5,hightForVShapLegs,1);
		leftBackVShapLeg.position.set(params.p_w/-2+disForVShapLegs,hightForVShapLegs/2,-i.toFixed(2));
		leftBackVShapLeg.rotation.z = -0.1325 + (params.p_h * 0.005);//-0.0325;//-0.0925;
			
		
		////if(i.toFixed(2)*2 > 2)
		if(i!=0)
		{
			const_var.b_t_M_L.add(leftFrontLeg);
			const_var.b_t_M_L.add(leftFrontLegS);
			////b_t_M_L.add(leftFrontVShapLeg);	
			const_var.b_t_M_L.add(leftBacktLeg);
			const_var.b_t_M_L.add(leftBacktLegS);
			////b_t_M_L.add(leftBackVShapLeg);
			
		}
		else
		{
			leftFrontLeg.position.set(params.p_w/-2+0.08,params.p_h/2,0);
			leftFrontLegS.position.set(params.p_w/-2+disFor2Legs,hightFor2Legs/2,0);
			leftFrontVShapLeg.position.set(params.p_w/-2+disForVShapLegs,hightForVShapLegs/2,0);
			////(i.toFixed(2) > 0)?b_t_M_L.add(leftFrontLeg):'';
			////break;
			const_var.b_t_M_L.add(leftFrontLeg);
			const_var.b_t_M_L.add(leftFrontLegS);
			////b_t_M_L.add(leftFrontVShapLeg);
		}
		
		var rightFrontLeg = new THREE.Mesh(legGeo,legMaterial);
		rightFrontLeg.name = "rightFrontLeg"+i;
		rightFrontLeg.scale.set(0.5,params.p_h,1);
		rightFrontLeg.position.set(params.p_w/2-0.08,params.p_h/2,i.toFixed(2));
		
		var rightFrontLegS = rightFrontLeg.clone();
		rightFrontLegS.name = "rightFrontLegS"+i;
		rightFrontLegS.visible = params.p_e_l;
		rightFrontLegS.scale.set(0.5,hightFor2Legs,1);
		rightFrontLegS.position.set(params.p_w/2-disFor2Legs,hightFor2Legs/2,i.toFixed(2));
		
		var rightFrontVShapLeg = rightFrontLeg.clone();
		rightFrontVShapLeg.name = "rightFrontVShapLeg"+i;
		rightFrontVShapLeg.visible = true;
		rightFrontVShapLeg.scale.set(0.5,hightForVShapLegs,1);
		rightFrontVShapLeg.position.set(params.p_w/2-disForVShapLegs,hightForVShapLegs/2,i.toFixed(2));
		rightFrontVShapLeg.rotation.z = 0.1325 - (params.p_h * 0.005);				
		
		var rightBacktLeg = new THREE.Mesh(legGeo,legMaterial);
		rightBacktLeg.name = "rightBacktLeg"+i;
		rightBacktLeg.scale.set(0.5,params.p_h,1);
		rightBacktLeg.position.set(params.p_w/2-0.08,params.p_h/2,-i.toFixed(2));
		
		var rightBacktLegS = rightBacktLeg.clone();
		rightBacktLegS.name = "rightBacktLegS"+i;
		rightBacktLegS.visible = params.p_e_l;
		rightBacktLegS.scale.set(0.5,hightFor2Legs,1);
		rightBacktLegS.position.set(params.p_w/2-disFor2Legs,hightFor2Legs/2,-i.toFixed(2));
		
		var rightBackVShapLeg = rightFrontLeg.clone();
		rightBackVShapLeg.name = "rightBackVShapLeg"+i;
		rightBackVShapLeg.visible = true;
		rightBackVShapLeg.scale.set(0.5,hightForVShapLegs,1);
		rightBackVShapLeg.position.set(params.p_w/2-disForVShapLegs,hightForVShapLegs/2,-i.toFixed(2));
		rightBackVShapLeg.rotation.z = 0.1325 - (params.p_h * 0.005);
		
		////if(i.toFixed(2)*2 > 2)
		if(i!=0)
		{
			const_var.b_t_M_R.add(rightFrontLeg);
			const_var.b_t_M_R.add(rightFrontLegS);
			////b_t_M_R.add(rightFrontVShapLeg);
			const_var.b_t_M_R.add(rightBacktLeg);
			const_var.b_t_M_R.add(rightBacktLegS);
			////b_t_M_R.add(rightBackVShapLeg);
		}
		else
		{
			rightFrontLeg.position.set(params.p_w/2-0.08,params.p_h/2,0);
			rightFrontLegS.position.set(params.p_w/2-disFor2Legs,hightFor2Legs/2,0);
			rightFrontVShapLeg.position.set(params.p_w/2-disForVShapLegs,hightForVShapLegs/2,0);
			////(i.toFixed(2) > 0)?b_t_M_L.add(leftFrontLeg):'';
			////break;
			const_var.b_t_M_R.add(rightFrontLeg);
			const_var.b_t_M_R.add(rightFrontLegS);
			////b_t_M_R.add(rightFrontVShapLeg);
		}
		
		
		//This Is For Center Building Ladder Lags
		if(const_var.legstype == "ladder")
		{
			var maxH = params.p_h%2;
			var cnctrDis = 2;
			for(var h = 0.5;h<=(params.p_h);h = h+cnctrDis)
			{
				var leftFrnt2LegCnctr = new THREE.Mesh(legGeo,legMaterial);
				leftFrnt2LegCnctr.name = "leftFrnt2LegCnctr"+i+h;
				leftFrnt2LegCnctr.scale.set(1.5,0.15,1);
				leftFrnt2LegCnctr.position.set(params.p_w/-2+0.34,h,i.toFixed(2));
				
				
				var leftBack2LegCnctr = new THREE.Mesh(legGeo,legMaterial);
				leftBack2LegCnctr.name = "leftBack2LegCnctr"+h;
				leftBack2LegCnctr.scale.set(1.5,0.15,1);
				leftBack2LegCnctr.position.set(params.p_w/-2+0.34,h,-i.toFixed(2));
				
				
				var rightFrnt2LegCnctr = new THREE.Mesh(legGeo,legMaterial);
				rightFrnt2LegCnctr.name = "rightFrnt2LegCnctr"+h;
				rightFrnt2LegCnctr.scale.set(1.5,0.15,1);
				rightFrnt2LegCnctr.position.set(params.p_w/2-0.34,h,i.toFixed(2));
				
				
				var rightBack2LegCnctr = new THREE.Mesh(legGeo,legMaterial);
				rightBack2LegCnctr.name = "rightBack2LegCnctr"+h;
				rightBack2LegCnctr.scale.set(1.5,0.15,1);
				rightBack2LegCnctr.position.set(params.p_w/2-0.34,h,-i.toFixed(2));
				
				if(i!=0)
				{
					const_var.b_t_M_L.add(leftFrnt2LegCnctr);
					const_var.b_t_M_L.add(leftBack2LegCnctr);
					const_var.b_t_M_R.add(rightFrnt2LegCnctr);
					const_var.b_t_M_R.add(rightBack2LegCnctr);
				}
				else
				{
					leftFrnt2LegCnctr.position.set(params.p_w/-2+0.34,h,0);
					const_var.b_t_M_L.add(leftFrnt2LegCnctr);
					rightFrnt2LegCnctr.position.set(params.p_w/2-0.34,h,0);
					const_var.b_t_M_R.add(rightFrnt2LegCnctr);
				}
			}		
		}
	}
	
	//Center Building Base Rail For Legs
	var leftBaseRail = new THREE.Mesh(legGeo,legMaterial);
	leftBaseRail.name = "leftBaseRail";
	//leftBaseRail.scale.set(0.5,params.p_d,1);
	leftBaseRail.scale.set(0.5,params.p_d - 0.02,1);
	leftBaseRail.position.set(params.p_w/-2+0.08,0,0);
	leftBaseRail.rotation.x=Math.PI/-2;
	const_var.b_t_M_L.add(leftBaseRail);
	
	//Center Building 2nd Base Rail For Double Leg Base Rail
	var leftBaseRailS = leftBaseRail.clone();
	leftBaseRailS.name = "leftBaseRailS";
	leftBaseRailS.visible = params.p_e_l;
	leftBaseRailS.scale.set(0.5,params.p_d - 0.02,1);
	leftBaseRailS.position.set(params.p_w/-2+disFor2Legs,0,0);
	leftBaseRailS.rotation.x=Math.PI/-2;
	const_var.b_t_M_L.add(leftBaseRailS);
	
	//Trim For Left Side Of Roof Center Building 
	var leftRoofTrim = new THREE.Mesh(legGeo,legMaterial);
	leftRoofTrim.name = "leftRoofTrim";
	leftRoofTrim.scale.set(0.5,params.p_d,1);
	leftRoofTrim.position.set(params.p_w/-2+0.04,params.p_h,0);
	leftRoofTrim.rotation.x=Math.PI/-2;
	////b_t_M_L.add(leftRoofTrim);
	
	//Center Building Right Base Rail For Legs
	var rightBaseRail = new THREE.Mesh(legGeo,legMaterial);
	rightBaseRail.name = "rightBaseRail";
	//rightBaseRail.scale.set(0.5,params.p_d,1);
	rightBaseRail.scale.set(0.5,params.p_d - 0.02,1);
	rightBaseRail.position.set(params.p_w/2-0.08,0,0);
	rightBaseRail.rotation.x=Math.PI/-2;
	const_var.b_t_M_R.add(rightBaseRail);
	
	//Center Building Right Base Rail for Double legs
	var rightBaseRailS = rightBaseRail.clone();
	rightBaseRailS.name = "rightBaseRailS";
	rightBaseRailS.visible = params.p_e_l;
	rightBaseRailS.scale.set(0.5,params.p_d - 0.02,1);
	rightBaseRailS.position.set(params.p_w/2-disFor2Legs,0,0);
	rightBaseRailS.rotation.x=Math.PI/-2;
	const_var.b_t_M_R.add(rightBaseRailS);
	
	//Trim For Center Building Roof Right Side
	var rightRoofTrim = new THREE.Mesh(legGeo,legMaterial);
	rightRoofTrim.name = "rightRoofTrim";
	rightRoofTrim.scale.set(0.5,params.p_d,1);
	rightRoofTrim.position.set(params.p_w/2-0.04,params.p_h,0);
	rightRoofTrim.rotation.x=Math.PI/-2;
	////b_t_M_R.add(rightRoofTrim);
	
	//Building Connectors For Diffrent Legs
	if(const_var.legstype == "ladder")
	{
		var maxH = params.p_h%2;
		var cnctrDis = 2;
		for(var h = 0.5;h<=(params.p_h);h = h+cnctrDis)
		{
			var leftFrnt2LegCnctr = new THREE.Mesh(legGeo,legMaterial);
			leftFrnt2LegCnctr.name = "leftFrnt2LegCnctr"+h;
			leftFrnt2LegCnctr.scale.set(1.5,0.15,1);
			leftFrnt2LegCnctr.position.set(params.p_w/-2+0.34,h,params.p_d/2-0.12);
			const_var.b_t_M_L.add(leftFrnt2LegCnctr);
			
			var leftBack2LegCnctr = new THREE.Mesh(legGeo,legMaterial);
			leftBack2LegCnctr.name = "leftBack2LegCnctr"+h;
			leftBack2LegCnctr.scale.set(1.5,0.15,1);
			leftBack2LegCnctr.position.set(params.p_w/-2+0.34,h,params.p_d/-2+0.12);
			const_var.b_t_M_L.add(leftBack2LegCnctr);
			
			var rightFrnt2LegCnctr = new THREE.Mesh(legGeo,legMaterial);
			rightFrnt2LegCnctr.name = "rightFrnt2LegCnctr"+h;
			rightFrnt2LegCnctr.scale.set(1.5,0.15,1);
			rightFrnt2LegCnctr.position.set(params.p_w/2-0.34,h,params.p_d/2-0.12);
			const_var.b_t_M_R.add(rightFrnt2LegCnctr);
			
			var rightBack2LegCnctr = new THREE.Mesh(legGeo,legMaterial);
			rightBack2LegCnctr.name = "rightBack2LegCnctr"+h;
			rightBack2LegCnctr.scale.set(1.5,0.15,1);
			rightBack2LegCnctr.position.set(params.p_w/2-0.34,h,params.p_d/-2+0.12);
			const_var.b_t_M_R.add(rightBack2LegCnctr);
		}		
	}
		
	// console.log(params.p_e_l,const_var.legstype,params);
	
	//Condition For Front Lean To Legs Dynamically
	// if(params.add_front_lean)
	// {
	// 	LeantoLegs.addLegsLeanToFront(params.add_front_lean);
	// } else {
	// 	LeantoLegs.addLegsLeanToFront(params.add_front_lean == true);
	// }
	
	// //Condition For Left Lean To Legs Dynamically
	// if(params.add_left_lean)
	// {
	// 	LeantoLegs.addLegsLeanToLeft(params.add_left_lean);
	// } else {
	// 	LeantoLegs.addLegsLeanToLeft(params.add_left_lean == true);
	// }
	// //Condition For Right Lean To Legs Dynamically
	// if(params.add_right_lean)
	// {
	// 	LeantoLegs.addLegsLeanToRight(params.add_right_lean);
	// } else{
	// 	LeantoLegs.addLegsLeanToRight(params.add_right_lean == true);
	// }
	// //Condition For Back Lean To Legs Dynamically
	// if(params.add_back_lean)
	// {
	// 	LeantoLegs.addLegsLeanToBack(params.add_back_lean);
	// } else {
	// 	LeantoLegs.addLegsLeanToBack(params.add_back_lean == true);
	// }
}