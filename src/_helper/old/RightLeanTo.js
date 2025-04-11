import * as THREE from "three";
// import verticalTexture from '../assets/Roof/verticalTexture2.jpg';
import verticalTexture from '../assets/images/imgTextures/buildingImages/verticalTexture.jpeg';
import horizontalTexture from '../assets/images/imgTextures/buildingImages/horizantalTexture.jpeg';
import {params,const_var,} from '../redux/reducers/reducer';
import LeantoRoof from '../3D_Objects/LeantoRoof.js';


export const rightLeanTo = () => {

    var roofMiddleHeight = {
        "1":{"12":0.5,"13":0.5417,"14":0.5833,"15":0.6250,"16":0.6667,"17":0.7083,"18":0.7500,"19":0.7917,"20":0.8333,"21":0.8750,"22":0.9167,"23":0.9583,"24":1,"25":1.0417,"26":1.0833,"27":1.1250,"28":1.1667,"29":1.2083,"30":1.2500,"31":1.2917,"32":1.3333,"33":1.3750,"34":1.4167,"35":1.4583,"36":1.5000,"37":1.5417,"38":1.5833,"39":1.6250,"40":1.6667,"41":1.7083,"42":1.7500,"43":1.7917,"44":1.8333,"45":1.8750,"46":1.9167,"47":1.9583,"48":2.00,"49":2.0417,"50":2.0833,"51":2.1250,"52":2.1667,"53":2.2083,"54":2.2500,"55":2.2917,"56":2.3333,"57":2.3750,"58":2.4167,"59":2.4583,"60":2.5000,"61":2.5417,"62":2.5833,"63":2.6250,"64":2.6667,"65":2.7083,"66":2.7500,"67":2.7917,"68":2.8333,"69":2.8750,"70":2.9167,"71":2.9583,"72":3.00,"73":3.0417,"74":3.0833,"75":3.1250,"76":3.1667,"77":3.2083,"78":3.2500,"79":3.2917,"80":3.3330},
        "2":{"12":1.0,"13":1.0833,"14":1.1667,"15":1.2500,"16":1.3333,"17":1.4167,"18":1.5000,"19":1.5833,"20":1.6667,"21":1.7500,"22":1.8333,"23":1.9167,"24":2,"25":2.0833,"26":2.1667,"27":2.2500,"28":2.3333,"29":2.4167,"30":2.5000,"31":2.5833,"32":2.6667,"33":2.7500,"34":2.8333,"35":2.9167,"36":3.0000,"37":3.0833,"38":3.1667,"39":3.2500,"40":3.3330,"41":3.4170,"42":3.5000,"43":3.5830,"44":3.6670,"45":3.7500,"46":3.8330,"47":3.9170,"48":4.00,"49":4.0830,"50":4.1670,"51":4.2500,"52":4.3330,"53":4.4170,"54":4.5000,"55":4.5830,"56":4.6670,"57":4.7500,"58":4.8330,"59":4.9170,"60":5.0000,"61":5.0830,"62":5.1670,"63":5.2500,"64":5.3330,"65":5.4170,"66":5.5000,"67":5.5830,"68":5.6670,"69":5.7500,"70":5.8330,"71":5.9170,"72":6.00,"73":6.0830,"74":6.1670,"75":6.2500,"76":6.3330,"77":6.4170,"78":6.5000,"79":6.5830,"80":6.6670},
        "3":{"12":1.5,"13":1.6250,"14":1.7500,"15":1.8750,"16":2.0000,"17":2.1250,"18":2.2500,"19":2.3750,"20":2.5000,"21":2.6250,"22":2.7500,"23":2.8750,"24":3,"25":3.1250,"26":3.2500,"27":3.3750,"28":3.5000,"29":3.6250,"30":3.7500,"31":3.8750,"32":4.0000,"33":4.1250,"34":4.2500,"35":4.3750,"36":4.5000,"37":4.6250,"38":4.7500,"39":4.8750,"40":5.0000,"41":5.1250,"42":5.2500,"43":5.3750,"44":5.5000,"45":5.6250,"46":5.7500,"47":5.8750,"48":6.00,"49":6.1250,"50":6.2500,"51":6.3750,"52":6.5000,"53":6.6250,"54":6.7500,"55":6.8750,"56":7.0000,"57":7.1250,"58":7.2500,"59":7.3750,"60":7.5000,"61":7.6250,"62":7.7500,"63":7.8750,"64":8.0000,"65":8.1250,"66":8.2500,"67":8.3750,"68":8.5000,"69":8.6250,"70":8.7500,"71":8.8750,"72":9.00,"73":9.1250,"74":9.2500,"75":9.3750,"76":9.5000,"77":9.6250,"78":9.7500,"79":9.8750,"80":10.000},
        "4":{"12":2.0,"13":2.1667,"14":2.3333,"15":2.5000,"16":2.6667,"17":2.8333,"18":3.0000,"19":3.1667,"20":3.3330,"21":3.5000,"22":3.6670,"23":3.8330,"24":4,"25":4.1670,"26":4.3330,"27":4.5000,"28":4.6670,"29":4.8330,"30":5.0000,"31":5.1670,"32":5.3330,"33":5.5000,"34":5.6670,"35":5.8330,"36":6.0000,"37":6.1670,"38":6.3330,"39":6.5000,"40":6.6670,"41":6.8330,"42":7.0000,"43":7.1670,"44":7.3330,"45":7.5000,"46":7.6670,"47":7.8330,"48":8.00,"49":8.1670,"50":8.3330,"51":8.5000,"52":8.6670,"53":8.8330,"54":9.0000,"55":9.1670,"56":9.3330,"57":9.5000,"58":9.6670,"59":9.8330,"60":10.000,"61":10.167,"62":10.333,"63":10.500,"64":10.667,"65":10.833,"66":11.000,"67":11.167,"68":11.333,"69":11.500,"70":11.667,"71":11.833,"72":12.0,"73":12.167,"74":12.333,"75":12.500,"76":12.667,"77":12.833,"78":13.000,"79":13.167,"80":13.333},
        "5":{"12":2.5,"13":2.7083,"14":2.9167,"15":3.1250,"16":3.3330,"17":3.5420,"18":3.7500,"19":3.9580,"20":4.1670,"21":4.3750,"22":4.5830,"23":4.7920,"24":5,"25":5.2080,"26":5.4170,"27":5.6250,"28":5.8330,"29":6.0420,"30":6.2500,"31":6.4580,"32":6.6670,"33":6.8750,"34":7.0830,"35":7.2920,"36":7.5000,"37":7.7080,"38":7.9170,"39":8.1250,"40":8.3330,"41":8.5420,"42":8.7500,"43":8.9580,"44":9.1670,"45":9.3750,"46":9.5830,"47":9.7920,"48":10.0,"49":10.208,"50":10.417,"51":10.625,"52":10.833,"53":11.042,"54":11.250,"55":11.458,"56":11.667,"57":11.875,"58":12.083,"59":12.292,"60":12.500,"61":12.708,"62":12.917,"63":13.125,"64":13.333,"65":13.542,"66":13.750,"67":13.958,"68":14.167,"69":14.375,"70":14.583,"71":14.792,"72":15.0,"73":15.208,"74":15.417,"75":15.625,"76":15.833,"77":16.042,"78":16.250,"79":16.458,"80":16.667},
        "6":{"12":3.0,"13":3.2500,"14":3.5000,"15":3.7500,"16":4.0000,"17":4.2500,"18":4.5000,"19":4.7500,"20":5.0000,"21":5.2500,"22":5.5000,"23":5.7500,"24":6,"25":6.2500,"26":6.5000,"27":6.7500,"28":7.0000,"29":7.2500,"30":7.5000,"31":7.7500,"32":8.0000,"33":8.2500,"34":8.5000,"35":8.7500,"36":9.0000,"37":9.2500,"38":9.5000,"39":9.7500,"40":10.000,"41":10.250,"42":10.500,"43":10.750,"44":11.000,"45":11.250,"46":11.500,"47":11.750,"48":12.0,"49":12.250,"50":12.500,"51":12.750,"52":13.000,"53":13.250,"54":13.500,"55":13.750,"56":14.000,"57":14.250,"58":14.500,"59":14.750,"60":15.000,"61":15.250,"62":15.500,"63":15.750,"64":16.000,"65":16.250,"66":16.500,"67":16.750,"68":17.000,"69":17.250,"70":17.500,"71":17.750,"72":18.0,"73":18.250,"74":18.500,"75":18.750,"76":19.000,"77":19.250,"78":19.500,"79":19.750,"80":20.000}
       }; 

     //Variable For Adjust Rotation With Roof Pitch	
     var bowsRotation = { "1":0.08314,"2":0.16515,"3":0.24500,"4":0.32175,"5":0.39480,"6":0.46365, };

      var bowsScale = {
          "1":{"6":0.000,"7":0.050,"8":0.10,"9":0.100,"10":0.100,"11":0.100,"12":0.00,"13":0.00,"14":0.10,"15":0.15,"16":0.20,"17":0.20,"18":0.20,"19":0.20,"20":0.20,"21":0.20,"22":0.20,"23":0.20,"24":0.20,"25":0.20,"26":0.20,"27":0.20,"28":0.20,"29":0.20,"30":0.20,"31":0.20,"32":0.25,"33":0.25,"34":0.25,"35":0.25,"36":0.30,"37":0.30,"38":0.30,"39":0.30,"40":0.35,"41":0.35,"42":0.35,"43":0.35,"44":0.40,"45":0.45,"46":0.50,"47":0.55,"48":0.60,"49":0.60,"50":0.60,"51":0.60,"52":0.60,"53":0.60,"54":0.60,"55":0.60,"56":0.60,"57":0.60,"58":0.60,"59":0.60,"60":0.60,"61":0.60,"62":0.60,"63":0.60,"64":0.60,"65":0.60,"66":0.65,"67":0.65,"68":0.65,"69":0.65,"70":0.70,"71":0.75,"72":0.80,"73":0.80,"74":0.80,"75":0.80,"76":0.80,"77":0.80,"78":0.80,"79":0.80,"80":0.80},
          "2":{"6":0.050,"7":0.050,"8":0.10,"9":0.100,"10":0.100,"11":0.125,"12":0.10,"13":0.10,"14":0.10,"15":0.10,"16":0.20,"17":0.20,"18":0.20,"19":0.20,"20":0.20,"21":0.25,"22":0.25,"23":0.25,"24":0.30,"25":0.30,"26":0.30,"27":0.30,"28":0.35,"29":0.35,"30":0.40,"31":0.40,"32":0.40,"33":0.45,"34":0.45,"35":0.45,"36":0.45,"37":0.50,"38":0.50,"39":0.55,"40":0.55,"41":0.55,"42":0.60,"43":0.65,"44":0.70,"45":0.75,"46":0.75,"47":0.80,"48":0.80,"49":0.80,"50":0.80,"51":0.80,"52":0.85,"53":0.85,"54":0.85,"55":0.85,"56":0.85,"57":0.85,"58":0.85,"59":0.85,"60":0.85,"61":0.90,"62":0.95,"63":0.95,"64":0.95,"65":0.95,"66":1.00,"67":1.05,"68":1.10,"69":1.15,"70":1.20,"71":1.20,"72":1.20,"73":1.20,"74":1.20,"75":1.20,"76":1.20,"77":1.20,"78":1.20,"79":1.20,"80":1.25},
          "3":{"6":0.100,"7":0.125,"8":0.15,"9":0.200,"10":0.225,"11":0.250,"12":0.20,"13":0.20,"14":0.25,"15":0.25,"16":0.30,"17":0.35,"18":0.40,"19":0.45,"20":0.45,"21":0.45,"22":0.50,"23":0.50,"24":0.50,"25":0.55,"26":0.55,"27":0.60,"28":0.65,"29":0.70,"30":0.75,"31":0.80,"32":0.80,"33":0.80,"34":0.85,"35":0.85,"36":0.90,"37":0.90,"38":0.90,"39":0.90,"40":0.90,"41":0.90,"42":0.95,"43":1.00,"44":1.05,"45":1.10,"46":1.15,"47":1.15,"48":1.20,"49":1.25,"50":1.25,"51":1.30,"52":1.30,"53":1.30,"54":1.30,"55":1.30,"56":1.30,"57":1.35,"58":1.40,"59":1.40,"60":1.40,"61":1.45,"62":1.45,"63":1.50,"64":1.50,"65":1.55,"66":1.55,"67":1.60,"68":1.65,"69":1.70,"70":1.75,"71":1.80,"72":1.85,"73":1.90,"74":1.90,"75":1.90,"76":1.90,"77":1.90,"78":1.90,"79":1.90,"80":1.95},
          "4":{"6":0.175,"7":0.200,"8":0.25,"9":0.300,"10":0.350,"11":0.375,"12":0.35,"13":0.35,"14":0.40,"15":0.45,"16":0.50,"17":0.55,"18":0.60,"19":0.65,"20":0.70,"21":0.70,"22":0.75,"23":0.75,"24":0.80,"25":0.85,"26":0.85,"27":0.90,"28":0.95,"29":1.00,"30":1.05,"31":1.10,"32":1.15,"33":1.20,"34":1.25,"35":1.25,"36":1.35,"37":1.35,"38":1.35,"39":1.35,"40":1.35,"41":1.40,"42":1.45,"43":1.50,"44":1.55,"45":1.60,"46":1.65,"47":1.70,"48":1.75,"49":1.80,"50":1.85,"51":1.90,"52":1.90,"53":1.90,"54":1.90,"55":1.95,"56":2.00,"57":2.05,"58":2.10,"59":2.15,"60":2.20,"61":2.25,"62":2.30,"63":2.35,"64":2.40,"65":2.40,"66":2.40,"67":2.40,"68":2.40,"69":2.45,"70":2.50,"71":2.55,"72":2.60,"73":2.65,"74":2.70,"75":2.75,"76":2.85,"77":2.85,"78":2.85,"79":2.85,"80":2.85},
          "5":{"6":0.250,"7":0.300,"8":0.35,"9":0.425,"10":0.475,"11":0.525,"12":0.50,"13":0.55,"14":0.60,"15":0.65,"16":0.70,"17":0.75,"18":0.85,"19":0.90,"20":0.95,"21":1.00,"22":1.05,"23":1.10,"24":1.15,"25":1.20,"26":1.25,"27":1.30,"28":1.35,"29":1.40,"30":1.45,"31":1.50,"32":1.55,"33":1.60,"34":1.65,"35":1.70,"36":1.75,"37":1.80,"38":1.85,"39":1.90,"40":1.95,"41":2.00,"42":2.05,"43":2.10,"44":2.15,"45":2.25,"46":2.30,"47":2.35,"48":2.40,"49":2.45,"50":2.50,"51":2.55,"52":2.60,"53":2.65,"54":2.70,"55":2.75,"56":2.85,"57":2.90,"58":2.95,"59":3.30,"60":3.05,"61":3.10,"62":3.15,"63":3.20,"64":3.25,"65":3.30,"66":3.35,"67":3.40,"68":3.45,"69":3.50,"70":3.55,"71":3.60,"72":3.65,"73":3.70,"74":3.75,"75":3.80,"76":3.85,"77":3.90,"78":3.95,"79":4.00,"80":4.05},
          "6":{"6":0.350,"7":0.450,"8":0.50,"9":0.575,"10":0.650,"11":0.700,"12":0.70,"13":0.80,"14":0.90,"15":0.95,"16":1.00,"17":1.05,"18":1.15,"19":1.20,"20":1.30,"21":1.35,"22":1.40,"23":1.50,"24":1.60,"25":1.65,"26":1.70,"27":1.75,"28":1.85,"29":1.90,"30":2.00,"31":2.05,"32":2.10,"33":2.20,"34":2.30,"35":2.40,"36":2.50,"37":2.55,"38":2.60,"39":2.65,"40":2.70,"41":2.75,"42":2.80,"43":2.90,"44":2.95,"45":3.00,"46":3.10,"47":3.20,"48":3.30,"49":3.40,"50":3.50,"51":3.50,"52":3.50,"53":3.60,"54":3.70,"55":3.80,"56":3.80,"57":3.90,"58":4.00,"59":4.10,"60":4.20,"61":4.20,"62":4.30,"63":4.35,"64":4.40,"65":4.45,"66":4.50,"67":4.55,"68":4.60,"69":4.70,"70":4.80,"71":4.90,"72":5.00,"73":5.10,"74":5.15,"75":5.20,"76":5.25,"77":5.30,"78":5.35,"79":5.40,"80":5.45}
       };

	  //rotation and position of Bow1 acording to roof pitch
	  var rotBow1 = {"3":0.5 , "2":0.415, "4":0.6, "5":0.65};
	  var posBow1 = {"3":0.05, "2":0.055,"4":0.044,"5":0.04};

	  //scale and position of Bow2 acording to roof pitch
	  var scaleBow2 = {"2":0.23, "3":0.23, "4":0.22, "5":0.22};
	  var posBow2 = {
		"2":{"12": 11.896,"13": 12.896, "14":13.896, "15":14.896, "16":15.896, "17":16.896, "18":17.896, "19":18.896, "20":19.896, "21":20.896, "22":21.896, "23":22.896, "24":23.896},
		"3":{"12": 11.896,"13": 12.896, "14":13.896, "15":14.896, "16":15.896, "17":16.896, "18":17.896, "19":18.896, "20":19.896, "21":20.896, "22":21.896, "23":22.896, "24":23.896},
		"4":{"12": 11.899,"13": 12.899, "14":13.899, "15":14.899, "16":15.899, "17":16.899, "18":17.899, "19":18.899, "20":19.899, "21":20.899, "22":21.899, "23":22.899, "24":23.899},
		"5":{"12": 11.899,"13": 12.899, "14":13.899, "15":14.899, "16":15.899, "17":16.899, "18":17.899, "19":18.899, "20":19.899, "21":20.899, "22":21.899, "23":22.899, "24":23.899}
	  }

     var widthBowR = {
	 	"2": {"12": 0.18,"13": 0.21, "14":0.25, "15":0.29, "16":0.33, "17":0.36, "18":0.39, "19":0.42, "20":0.45, "21":0.49, "22":0.52, "23":0.57, "24":0.6},
	 	"3": {"12": 0.4,"13": 0.45, "14":0.5, "15":0.56, "16":0.61, "17":0.66, "18":0.72, "19":0.77, "20":0.82, "21":0.87, "22":0.92, "23":0.97, "24":1.02},
	 	"4": {"12": 0.68,"13": 0.75, "14":0.82, "15":0.9, "16":0.98, "17":1.05, "18":1.13, "19":1.2, "20":1.29, "21":1.37, "22":1.45, "23":1.5, "24":1.6},
	 	"5": {"12": 1.03,"13": 1.15, "14":1.26, "15":1.37, "16":1.49, "17":1.6, "18":1.7, "19":1.8, "20":1.9, "21":2.01, "22":2.12, "23":2.24, "24":1.36}
	 }

     var posCorner = {"1":0.76,"2":0.68, "3":0.605, "4":0.51, "5":0.43, "6":0.35}

	 var scaleTrim2 ={"1":2.2,"2":2.05, "3":1.9, "4":1.9, "5":1.9, "6":1.9}
	 var rotTrim2 = {
		 "2":{"12":0.415,"13": 0.415, "14":0.415, "15":0.415, "16":0.415, "17":0.415, "18":0.415, "19":0.415, "20":0.415, "21":0.415, "22":0.415, "23":0.415, "24":0.415},
		 "3":{"12":0.5,"13": 0.5, "14":0.5, "15":0.5, "16":0.5, "17":0.5, "18":0.5, "19":0.5, "20":0.5, "21":0.5, "22":0.5, "23":0.5, "24":0.5},
	     "4":{"12":0.58,"13": 0.58, "14":0.58, "15":0.58, "16":0.58, "17":0.58, "18":0.58, "19":0.58, "20":0.58, "21":0.58, "22":0.58, "23":0.58, "24":0.58},
		 "5":{"12":0.65,"13": 0.65, "14":0.65, "15":0.65, "16":0.65, "17":0.65, "18":0.65, "19":0.65, "20":0.65, "21":0.65, "22":0.65, "23":0.7, "24":0.65},
		}
	 var posTrim2 = {"2":0.17,"3":0.17 ,  "4":0.174, "5":0.174}

     var storagePos = {
        "5":5,"10":10,"15":15,"20":20,"25":25,"30":30,"35":35,"40":40,"45":45,"50":50,"55":55,"60":60,"65":65,"70":70,"75":75,"80":80,"85":85,"90":90,"95":95,"100":100
    }
    //Globle Variables
    var legDistance = 5;

    let leantoRoofObject = new LeantoRoof();
    leantoRoofObject.LeantoRoof(const_var, params);

    // Bows Geometry And Material
	var bowGeometry = new THREE.BoxGeometry(0.98,0.6,0.2);
	var bowMaterial = new THREE.MeshBasicMaterial({color:0xC9C6C6,side:THREE.DoubleSide});

   /* Right Lean To Roof */
	var selectedObject = const_var.b_t_M_R_t_R.getObjectByName("rRoof");
	if(selectedObject != undefined)
	{
		var leanToRoofPosR = params.p_w/2;// - params.lean_p_w/2;
		var roofImg = verticalTexture;
		if(params.p_r_s=="3")
		{
			roofImg = verticalTexture;
		}
		else
		{
			roofImg = horizontalTexture;
		}
		var rRoofloader = new THREE.TextureLoader();
		var rtexture = rRoofloader.load(roofImg)
		// , function(rtexture) {
			rtexture.wrapS = THREE.RepeatWrapping;
			rtexture.wrapT = THREE.RepeatWrapping;
			if(params.p_r_s=="3")
			{
			 rtexture.rotation = Math.PI/2;
			 rtexture.repeat.set(params.leanR_p_d,1);
			}
			else
			{
			 rtexture.rotation = -Math.PI/2;
			 rtexture.repeat.set(1,params.lean_p_w/2 - 4);
			}
		// })
	
		var rCalor = params.p_r_c.replace("#","0x");   
		const_var.b_t_M_R_t_R.getObjectByName("rRoof").scale.set((params.p_r_s == "1")?(2*params.leanR_p_w) - 0.17:2*params.leanR_p_w,roofMiddleHeight[params.b_l_t_r_pR][2*params.leanR_p_w],params.leanR_p_d);
		const_var.b_t_M_R_t_R.getObjectByName("rRoof").position.set(leanToRoofPosR,params.leanR_p_h,0);
		const_var.b_t_M_R_t_R.getObjectByName("rRoof").material.map = rtexture;	
		const_var.b_t_M_R_t_R.getObjectByName("rRoof").visible = params.add_right_lean;//(params.p_r_s == "1")?false:params.add_right_lean;
		
	

		if(params.p_r_s == "1"){
			const_var.b_t_M_R_t_R.getObjectByName("rRoof").rotation.z = 0.0015;//anand
			}
		var rRoof = const_var.b_t_M_R_t_R.getObjectByName("rRoof");
	
		if(params.p_r_s=="3")
		{
			rRoof.material.map.rotation = Math.PI/2;
			rRoof.material.map.repeat.set(params.leanR_p_d-2,1);
		}
		else
		{
			rRoof.material.map.rotation = -Math.PI/2;
			rRoof.material.map.repeat.set(1,2*params.leanR_p_w/8);
		}
		const_var.b_t_M_R_t_R.getObjectByName("rRoof").material.color.setHex( rCalor );
	//    });
    }
    // /* Right Lean To Right curved Roof Geometry For Regular Roof Style */

    var verticesT = [
        { pos: [ params.p_w/2 - 0.25,  0.0,    0.5], norm: [ -1,  0,  0], uv: [0, 0], }, // 4 uv: [0, 0],
        { pos: [ params.p_w/2 - 0.25,  0.0,   -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, // 5 uv: [1, 0],
        { pos: [ params.p_w/2 - 0.13, -0.005,  0.5], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
        { pos: [ params.p_w/2 - 0.13, -0.005, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
        
        { pos: [ params.p_w/2 - 0.13, -0.005,  0.5], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
        { pos: [ params.p_w/2 - 0.13, -0.005, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
        { pos: [ params.p_w/2 - 0.07, -0.015,  0.5], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
        { pos: [ params.p_w/2 - 0.07, -0.015, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
        
        { pos: [ params.p_w/2 - 0.07, -0.015,  0.5], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
        { pos: [ params.p_w/2 - 0.07, -0.015, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
        { pos: [ params.p_w/2 - 0.05, -0.025,  0.5], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
        { pos: [ params.p_w/2 - 0.05, -0.025, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
        
        { pos: [ params.p_w/2 - 0.05, -0.025,  0.5], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
        { pos: [ params.p_w/2 - 0.05, -0.025, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
        { pos: [ params.p_w/2 - 0.02, -0.045,  0.5], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
        { pos: [ params.p_w/2 - 0.02, -0.045, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
    
        { pos: [ params.p_w/2 - 0.00, -0.075,  0.5], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 0], 4
        { pos: [ params.p_w/2 - 0.00, -0.075, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 0], 5
        { pos: [ params.p_w/2 - 0.02, -0.045,  0.5], norm: [ -1,  0,  0], uv: [0, 0.008], }, // 6 uv: [0, 1],
        { pos: [ params.p_w/2 - 0.02, -0.045, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, // 7 uv: [1, 1],
        
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
        geometryT.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positionsT), positionNumComponents));
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
        var roofImg = verticalTexture;
        if(params.p_r_s=="1")
        {
            roofImg = verticalTexture;
        }
        else
        {
            roofImg = horizontalTexture;
        }
        
        var lrRoofloader = new THREE.TextureLoader();
        var textureT = lrRoofloader.load(roofImg, function(texture1) {
               texture1.wrapS = THREE.RepeatWrapping;
               texture1.wrapT = THREE.RepeatWrapping;
           });	
            var materialT = new THREE.MeshBasicMaterial({
               map: textureT,
               wireframe:false,
               side:THREE.DoubleSide,
               color:0xFFFF00
            });
	var cubeTRR = new THREE.Mesh(geometryT, materialT);
	cubeTRR.name = "leanToRegularRoofR";
	cubeTRR.scale.set(1,roofMiddleHeight[params.b_l_t_r_pR][params.leanR_p_w],params.leanR_p_d);
    //cubeTRR.position.set(params.leanR_p_w + 0.040,params.leanR_p_h + 0.31,0);

	if(const_var.defaultBuildingImgName=="Triple_Wide_Garages" || const_var.defaultBuildingImgName=="Triple_Wide_Carports"){
		cubeTRR.position.set(params.leanR_p_w + 0.071,params.leanR_p_h + 0.71,0);
	}else{
    cubeTRR.position.set(params.leanR_p_w + 0.066,params.leanR_p_h + 0.482,0);
	}
	
	cubeTRR.scale.y = 7;
	cubeTRR.rotation.z = -0.045;
	
	if(params.p_r_s=="1")
	{
		cubeTRR.material.map.rotation = -Math.PI/2;
		cubeTRR.material.map.repeat.set(24,1);
	}
	else
	{
		cubeTRR.material.map.rotation = Math.PI/2;
		cubeTRR.material.map.repeat.set(1,params.p_w/8);
	}
	var rCalor = params.p_r_c.replace("#","0x");
	cubeTRR.material.color.setHex( rCalor );
	cubeTRR.visible = (params.add_right_lean && params.p_r_s=="1")?true:false;
	const_var.b_t_M_R_t_R.add(cubeTRR);
 
        if(params.add_right_lean)
        {
            var leanToPosR = params.p_w/2 + params.leanR_p_w/2;
            var leanTohIncR = roofMiddleHeight[params.b_l_t_r_pR][2*params.leanR_p_w]/2 - 0.1;
            var trimMaterial = new THREE.MeshBasicMaterial({color:0x0E6655,side:THREE.DoubleSide});
    
            var rightLeanToFrontBow = new THREE.Mesh(bowGeometry,bowMaterial);
            rightLeanToFrontBow.name = "rightLeanToFrontBow";
            rightLeanToFrontBow.scale.set(params.p_w/2,0.2,1);	
            rightLeanToFrontBow.position.set(leanToPosR-0.08,params.leanR_p_h + leanTohIncR + 0.03,params.leanR_p_d/2 - 0.12);	
            rightLeanToFrontBow.rotation.z = -bowsRotation[params.b_l_t_r_pR];
            rightLeanToFrontBow.scale.x = params.leanR_p_w + bowsScale[params.b_l_t_r_pR][2*params.leanR_p_w];
            rightLeanToFrontBow.visible = (params.p_r_s != "1")?true:false;
            const_var.b_t_M_R_t_R.add(rightLeanToFrontBow);
    
            var rightLeanToFrontBowR = new THREE.Mesh(bowGeometry,bowMaterial);
            rightLeanToFrontBowR.name = "rightLeanToFrontBowR";
            rightLeanToFrontBowR.scale.set(params.p_w/2,0.2,1);	
            rightLeanToFrontBowR.position.set(leanToPosR-0.1,params.leanR_p_h + leanTohIncR + 0.05,params.leanR_p_d/2 - 0.12);	
            rightLeanToFrontBowR.rotation.z = -bowsRotation[params.b_l_t_r_pR];
            rightLeanToFrontBowR.scale.x = (params.leanR_p_w +  widthBowR[params.b_l_t_r_pR][params.leanR_p_w]);
            rightLeanToFrontBowR.visible = (params.p_r_s == "1")?true:false;
            const_var.b_t_M_R_t_R.add(rightLeanToFrontBowR);
    
            var rightLeanToBackBowR = new THREE.Mesh(bowGeometry,bowMaterial);
            rightLeanToBackBowR.name = "rightLeanToBackBowR";
            rightLeanToBackBowR.scale.set(params.p_w/2,0.2,1);	
            rightLeanToBackBowR.position.set(leanToPosR-0.1,params.leanR_p_h + leanTohIncR + 0.05,params.leanR_p_d/-2 + 0.12);	
            rightLeanToBackBowR.rotation.z = -bowsRotation[params.b_l_t_r_pR];
            rightLeanToBackBowR.scale.x = (params.leanR_p_w +  widthBowR[params.b_l_t_r_pR][params.leanR_p_w]);
            rightLeanToBackBowR.visible = (params.p_r_s == "1")?true:false;
            const_var.b_t_M_R_t_R.add(rightLeanToBackBowR);
    
            var rightBowGeo1 = new THREE.BoxGeometry(0.07,0.6,0.2);
            var rightBowBowMaterial1 = new THREE.MeshBasicMaterial({color:0xC9C6C6,side:THREE.DoubleSide});
            var leanToRightFrontBow1 = new THREE.Mesh(rightBowGeo1,rightBowBowMaterial1);
            leanToRightFrontBow1.name = "leanToRightFrontBow1";
            leanToRightFrontBow1.position.set(-(params.p_w/-2 - params.leanR_p_w)-0.17,params.leanR_p_h -posBow1[params.b_l_t_r_pR],params.leanR_p_d/2 - 0.12);	
            leanToRightFrontBow1.rotation.z = -rotBow1[params.b_l_t_r_pR];
            leanToRightFrontBow1.scale.set(1.9,0.21,1);
            leanToRightFrontBow1.visible = (params.p_r_s == "1")?true:false; 
            const_var.b_t_M_R_t_R.add(leanToRightFrontBow1);
    
            var leanToRightBackBow1 = new THREE.Mesh(rightBowGeo1,rightBowBowMaterial1);
            leanToRightBackBow1.name = "leanToRightBackBow1";
            leanToRightBackBow1.position.set(-(params.p_w/-2 - params.leanR_p_w)-0.17,params.leanR_p_h -posBow1[params.b_l_t_r_pR],params.leanR_p_d/-2 + 0.12);	
            leanToRightBackBow1.rotation.z = -rotBow1[params.b_l_t_r_pR];
            leanToRightBackBow1.scale.set(1.9,0.21,1);
            leanToRightBackBow1.visible = (params.p_r_s == "1")?true:false; 
            const_var.b_t_M_R_t_R.add(leanToRightBackBow1);
    
            var rightBowGeo2 = new THREE.BoxGeometry(0.07,0.6,0.2);
            var rightBowBowMaterial2 = new THREE.MeshBasicMaterial({color:0xC9C6C6,side:THREE.DoubleSide});
            var leanToRightFrontBow2 = new THREE.Mesh(rightBowGeo2,rightBowBowMaterial2);
            leanToRightFrontBow2.name = "leanToRightFrontBow2";
            leanToRightFrontBow2.position.set(-(params.p_w/-2 - posBow2[params.b_l_t_r_pR][params.leanR_p_w]),params.leanR_p_h -0.11,params.leanR_p_d/2 - 0.12);	
            leanToRightFrontBow2.rotation.z = -0.91;
            leanToRightFrontBow2.scale.set(1.5,scaleBow2[params.b_l_t_r_pR],1);
            leanToRightFrontBow2.visible = (params.p_r_s == "1")?true:false; 
            const_var.b_t_M_R_t_R.add(leanToRightFrontBow2);
    
            var leanToRightBackBow2 = new THREE.Mesh(rightBowGeo2,rightBowBowMaterial2);
            leanToRightBackBow2.name = "leanToRightBackBow2";
            leanToRightBackBow2.position.set(-(params.p_w/-2 - posBow2[params.b_l_t_r_pR][params.leanR_p_w]),params.leanR_p_h -0.11,params.leanR_p_d/-2 + 0.12);	
            leanToRightBackBow2.rotation.z = -0.91;
            leanToRightBackBow2.scale.set(1.5,scaleBow2[params.b_l_t_r_pR],1);
            leanToRightBackBow2.visible = (params.p_r_s == "1")?true:false; 
            const_var.b_t_M_R_t_R.add(leanToRightBackBow2);
    
            var rightBowGeo3 = new THREE.BoxGeometry(0.2,0.6,0.2);
            var rightBowBowMaterial3 = new THREE.MeshBasicMaterial({color:0xC9C6C6,side:THREE.DoubleSide,});
            var leanToRightFrontBow3 = new THREE.Mesh(rightBowGeo3,rightBowBowMaterial3);
            leanToRightFrontBow3.name = "leanToRightFrontBow2";
            leanToRightFrontBow3.position.set(-(params.p_w/-2 - params.leanR_p_w)-0.065,params.leanR_p_h-0.15,params.leanR_p_d/2 - 0.12);	
            leanToRightFrontBow3.rotation.z = -1.13;
            leanToRightFrontBow3.scale.set(0.18,0.2,1);
            leanToRightFrontBow3.visible = (params.p_r_s == "1")?true:false; 
            const_var.b_t_M_R_t_R.add(leanToRightFrontBow3);
    
            var leanToRightBackBow3 = new THREE.Mesh(rightBowGeo3,rightBowBowMaterial3);
            leanToRightBackBow3.name = "leanToRightBackBow2";
            leanToRightBackBow3.position.set(-(params.p_w/-2 - params.leanR_p_w)-0.065,params.leanR_p_h-0.15,params.leanR_p_d/-2 + 0.12);	
            leanToRightBackBow3.rotation.z = -1.13;
            leanToRightBackBow3.scale.set(0.18,0.2,1);
            leanToRightBackBow3.visible = (params.p_r_s == "1")?true:false; 
            const_var.b_t_M_R_t_R.add(leanToRightBackBow3);
    
            var rightLeanToFrontTrim = new THREE.Mesh(bowGeometry,trimMaterial);
            rightLeanToFrontTrim.name = "rightLeanToFrontTrim";
            rightLeanToFrontTrim.scale.set(params.p_w/2,0.3,0.5);	
            rightLeanToFrontTrim.position.set(leanToPosR-0.1,params.leanR_p_h + leanTohIncR + 0.07,params.leanR_p_d/2);	
            rightLeanToFrontTrim.rotation.z = -bowsRotation[params.b_l_t_r_pR];
            rightLeanToFrontTrim.scale.x = (params.leanR_p_w +  widthBowR[params.b_l_t_r_pR][params.leanR_p_w]);
            rightLeanToFrontTrim.visible = (params.p_r_s == "1")?true:false;
            const_var.b_t_M_R_t_R.add(rightLeanToFrontTrim);
    
            var rightLeanToBackTrim = new THREE.Mesh(bowGeometry,trimMaterial);
            rightLeanToBackTrim.name = "rightLeanToBackTrim";
            rightLeanToBackTrim.scale.set(params.p_w/2,0.3,0.5);	
            rightLeanToBackTrim.position.set(leanToPosR-0.1,params.leanR_p_h + leanTohIncR + 0.07,params.leanR_p_d/-2);	
            rightLeanToBackTrim.rotation.z = -bowsRotation[params.b_l_t_r_pR];
            rightLeanToBackTrim.scale.x = (params.leanR_p_w +  widthBowR[params.b_l_t_r_pR][params.leanR_p_w]);
            rightLeanToBackTrim.visible = (params.p_r_s == "1")?true:false;
            const_var.b_t_M_R_t_R.add(rightLeanToBackTrim);
    
            var leanToRightFrontTrim1Geo = new THREE.BoxGeometry(0.07,0.6,0.2);
            var leanToRightFrontTrim1Material = new THREE.MeshBasicMaterial({color:0x0E6655,side:THREE.DoubleSide});
            var leanToRightFrontTrim1 = new THREE.Mesh(leanToRightFrontTrim1Geo,leanToRightFrontTrim1Material);
            leanToRightFrontTrim1.name = "leanToRightFrontTrim1";
            leanToRightFrontTrim1.position.set(-(params.p_w/-2 - params.leanR_p_w)-posTrim2[params.b_l_t_r_pR],params.leanR_p_h -posBow1[params.b_l_t_r_pR]+0.02,params.leanR_p_d/2);	
            leanToRightFrontTrim1.rotation.z = -rotTrim2[params.b_l_t_r_pR][params.leanR_p_w];
            leanToRightFrontTrim1.scale.set(scaleTrim2[params.b_l_t_r_pR],0.31,0.5);
            leanToRightFrontTrim1.visible = (params.p_r_s == "1")?true:false; 
            const_var.b_t_M_R_t_R.add(leanToRightFrontTrim1);
    
    
            var leanToRightBackTrim1Geo = new THREE.BoxGeometry(0.07,0.6,0.2);
            var leanToRightBackTrim1Material = new THREE.MeshBasicMaterial({color:0x0E6655,side:THREE.DoubleSide});
            var leanToRightBackTrim1 = new THREE.Mesh(leanToRightBackTrim1Geo,leanToRightBackTrim1Material);
            leanToRightBackTrim1.name = "leanToRightBackTrim1";
            leanToRightBackTrim1.position.set(-(params.p_w/-2 - params.leanR_p_w)-posTrim2[params.b_l_t_r_pR],params.leanR_p_h -posBow1[params.b_l_t_r_pR]+0.02,params.leanR_p_d/-2);	
            leanToRightBackTrim1.rotation.z = -rotTrim2[params.b_l_t_r_pR][params.leanR_p_w];
            leanToRightBackTrim1.scale.set(scaleTrim2[params.b_l_t_r_pR],0.31,0.5);
            leanToRightBackTrim1.visible = (params.p_r_s == "1")?true:false; 
            const_var.b_t_M_R_t_R.add(leanToRightBackTrim1);
    
             var leanToRightFrontTrim2Geo = new THREE.BoxGeometry(0.07,0.6,0.2);
             var leanToRightFrontTrim2Material = new THREE.MeshBasicMaterial({color:0x0E6655,side:THREE.DoubleSide});
             var leanToRightFrontTrim2 = new THREE.Mesh(leanToRightFrontTrim2Geo,leanToRightFrontTrim2Material);
             leanToRightFrontTrim2.name = "leanToRightFrontTrim2";
             leanToRightFrontTrim2.position.set(-(params.p_w/-2 - posBow2[params.b_l_t_r_pR][params.leanR_p_w])-0.004,params.leanR_p_h -0.09,params.leanR_p_d/2);	
             leanToRightFrontTrim2.rotation.z = -0.91;
             leanToRightFrontTrim2.scale.set(1.75,scaleBow2[params.b_l_t_r_pR]+0.1,0.5);
             leanToRightFrontTrim2.visible = (params.p_r_s == "1")?true:false; 
             const_var.b_t_M_R_t_R.add(leanToRightFrontTrim2);
    
              var leanToRightBackTrim2Geo = new THREE.BoxGeometry(0.07,0.6,0.2);
              var leanToRightBackTrim2Material = new THREE.MeshBasicMaterial({color:0x0E6655,side:THREE.DoubleSide});
              var leanToRightBackTrim2 = new THREE.Mesh(leanToRightBackTrim2Geo,leanToRightBackTrim2Material);
              leanToRightBackTrim2.name = "leanToRightBackTrim2";
              leanToRightBackTrim2.position.set(-(params.p_w/-2 - posBow2[params.b_l_t_r_pR][params.leanR_p_w])-0.004,params.leanR_p_h -0.09,params.leanR_p_d/-2);	
              leanToRightBackTrim2.rotation.z = -0.91;
              leanToRightBackTrim2.scale.set(1.75,scaleBow2[params.b_l_t_r_pR]+0.1,0.5);
              leanToRightBackTrim2.visible = (params.p_r_s == "1")?true:false; 
              const_var.b_t_M_R_t_R.add(leanToRightBackTrim2);
    
             var leanToRightFrontTrim3Geo = new THREE.BoxGeometry(0.2,0.6,0.2);
             var leanToRightFrontTrim3Material = new THREE.MeshBasicMaterial({color:0x0E6655,side:THREE.DoubleSide,});
             var leanToRightFrontTrim3 = new THREE.Mesh(leanToRightFrontTrim3Geo,leanToRightFrontTrim3Material);
             leanToRightFrontTrim3.name = "leanToRightFrontTrim3";
             leanToRightFrontTrim3.position.set(-(params.p_w/-2 - params.leanR_p_w)-0.064,params.leanR_p_h-0.142,params.leanR_p_d/2);	
             leanToRightFrontTrim3.rotation.z = -1.2;
             leanToRightFrontTrim3.scale.set(0.34,0.3,0.5);
             leanToRightFrontTrim3.visible = (params.p_r_s == "1")?true:false; 
             const_var.b_t_M_R_t_R.add(leanToRightFrontTrim3);
    
             var leanToRightBackTrim3Geo = new THREE.BoxGeometry(0.2,0.6,0.2);
             var leanToRightBackTrim3Material = new THREE.MeshBasicMaterial({color:0x0E6655,side:THREE.DoubleSide,});
             var leanToRightBackTrim3 = new THREE.Mesh(leanToRightBackTrim3Geo,leanToRightBackTrim3Material);
             leanToRightBackTrim3.name = "leanToRightBackTrim3";
             leanToRightBackTrim3.position.set(-(params.p_w/-2 - params.leanR_p_w)-0.064,params.leanR_p_h-0.142,params.leanR_p_d/-2);	
             leanToRightBackTrim3.rotation.z = -1.2;
             leanToRightBackTrim3.scale.set(0.34,0.3,0.5);
             leanToRightBackTrim3.visible = (params.p_r_s == "1")?true:false; 
             const_var.b_t_M_R_t_R.add(leanToRightBackTrim3);
    
             var rightCornerGeo = new THREE.BoxGeometry(0.98,0.6,0.2);
             var rightCornerBowMaterial = new THREE.MeshBasicMaterial({color:0xC9C6C6,side:THREE.DoubleSide});
             var leanToRightFrontCorner = new THREE.Mesh(rightCornerGeo,rightCornerBowMaterial);
            leanToRightFrontCorner.name = "leanToRightFrontCorner";
            leanToRightFrontCorner.position.set((params.p_w/2 + params.leanR_p_w)-0.60,params.leanR_p_h -posCorner[params.b_l_t_r_pR],params.leanR_p_d/2 - 0.12);	
            leanToRightFrontCorner.rotation.z = -1;
            leanToRightFrontCorner.scale.set(1.9,0.25,1);
            leanToRightFrontCorner.visible = (params.p_r_s != "1")?true:false;
            const_var.b_t_M_R_t_R.add(leanToRightFrontCorner);
    
             var rightCornerGeoR = new THREE.BoxGeometry(0.98,0.6,0.2);
             var rightCornerBowMaterialR = new THREE.MeshBasicMaterial({color:0xC9C6C6,side:THREE.DoubleSide});
             var leanToRightFrontCornerR = new THREE.Mesh(rightCornerGeoR,rightCornerBowMaterialR);
             leanToRightFrontCornerR.name = "leanToRightFrontCornerR";
             leanToRightFrontCornerR.position.set(-(params.p_w/-2 - params.leanR_p_w)-0.58,params.leanR_p_h -posCorner[params.b_l_t_r_pR],params.leanR_p_d/2 - 0.12);	
             leanToRightFrontCornerR.rotation.z = -1;
             leanToRightFrontCornerR.scale.set(1.9,0.25,1);
             leanToRightFrontCornerR.visible = (params.p_r_s == "1")?true:false;
             const_var.b_t_M_R_t_R.add(leanToRightFrontCornerR);
    
             var leanToRightBackCorner = new THREE.Mesh(rightCornerGeo,rightCornerBowMaterial);
             leanToRightBackCorner.name = "leanToRightBackCorner";
             leanToRightBackCorner.position.set((params.p_w/2 + params.leanR_p_w)-0.60,params.leanR_p_h -posCorner[params.b_l_t_r_pR],params.leanR_p_d/-2 + 0.12);	
             leanToRightBackCorner.rotation.z = -1;
             leanToRightBackCorner.scale.set(1.9,0.25,1);
             leanToRightBackCorner.visible = (params.p_r_s != "1")?true:false;
             const_var.b_t_M_R_t_R.add(leanToRightBackCorner);
    
             var leanToRightBackCornerR = new THREE.Mesh(rightCornerGeo,rightCornerBowMaterial);
             leanToRightBackCornerR.name = "leanToRightBackCornerR";
             leanToRightBackCornerR.position.set(-(params.p_w/-2 - params.leanR_p_w)-0.58,params.leanR_p_h -posCorner[params.b_l_t_r_pR],params.leanR_p_d/-2 + 0.12);	
             leanToRightBackCornerR.rotation.z = -1.;
             leanToRightBackCornerR.scale.set(1.9,0.25,1);
             leanToRightBackCornerR.visible = (params.p_r_s == "1")?true:false;
             const_var.b_t_M_R_t_R.add(leanToRightBackCornerR);
            
            var rightLeanToBackBow = new THREE.Mesh(bowGeometry,bowMaterial);
            rightLeanToBackBow.name = "rightLeanToBackBow";	
            rightLeanToBackBow.scale.set(params.p_w/2,0.2,1);	
            rightLeanToBackBow.position.set(leanToPosR-0.08,params.leanR_p_h + leanTohIncR + 0.03,params.leanR_p_d/-2 + 0.12);	
            rightLeanToBackBow.rotation.z = -bowsRotation[params.b_l_t_r_pR];
            rightLeanToBackBow.scale.x = params.leanR_p_w + bowsScale[params.b_l_t_r_pR][2*params.leanR_p_w];
            rightLeanToBackBow.visible = (params.p_r_s != "1")?true:false;
            const_var.b_t_M_R_t_R.add(rightLeanToBackBow);
            
            for(var i = 0;i<(params.leanR_p_d/2 - 2);i = i+legDistance)
            {
                var rightLeanToFrontBow = new THREE.Mesh(bowGeometry,bowMaterial);
                rightLeanToFrontBow.name = "rightLeanToFrontBow"+i;
                rightLeanToFrontBow.scale.set(params.p_w/2,0.2,1);	
                rightLeanToFrontBow.position.set(leanToPosR-0.08,params.leanR_p_h + leanTohIncR + 0.03,i.toFixed(2));	
                rightLeanToFrontBow.rotation.z = -bowsRotation[params.b_l_t_r_pR];
                rightLeanToFrontBow.scale.x = params.leanR_p_w + bowsScale[params.b_l_t_r_pR][2*params.leanR_p_w];
                rightLeanToFrontBow.visible = (params.p_r_s != "1")?true:false;
    
                var rightLeanToFrontBowR = new THREE.Mesh(bowGeometry,bowMaterial);
                rightLeanToFrontBowR.name = "rightLeanToFrontBowR"+i;
                rightLeanToFrontBowR.scale.set(params.p_w/2,0.2,1);	
                rightLeanToFrontBowR.position.set(leanToPosR-0.1,params.leanR_p_h + leanTohIncR + 0.05,i.toFixed(2));	
                rightLeanToFrontBowR.rotation.z = -bowsRotation[params.b_l_t_r_pR];
                rightLeanToFrontBowR.scale.x = (params.leanR_p_w +  widthBowR[params.b_l_t_r_pR][params.leanR_p_w]);
                rightLeanToFrontBowR.visible = (params.p_r_s == "1")?true:false;
    
                var leanToRightFrontBow1 = new THREE.Mesh(rightBowGeo1,rightBowBowMaterial1);
                leanToRightFrontBow1.name = "leanToRightFrontBow1"+i;
                leanToRightFrontBow1.position.set(-(params.p_w/-2 - params.leanR_p_w)-0.17,params.leanR_p_h -posBow1[params.b_l_t_r_pR],i.toFixed(2));	
                leanToRightFrontBow1.rotation.z = -rotBow1[params.b_l_t_r_pR];
                leanToRightFrontBow1.scale.set(1.9,0.21,1);
                leanToRightFrontBow1.visible = (params.p_r_s == "1")?true:false;
    
                var leanToRightFrontBow2 = new THREE.Mesh(rightBowGeo2,rightBowBowMaterial2);
                leanToRightFrontBow2.name = "leanToRightFrontBow2"+i;
                leanToRightFrontBow2.position.set(-(params.p_w/-2 - posBow2[params.b_l_t_r_pR][params.leanR_p_w]),params.leanR_p_h -0.11,i.toFixed(2));	
                leanToRightFrontBow2.rotation.z = -0.91;
                leanToRightFrontBow2.scale.set(1.5,scaleBow2[params.b_l_t_r_pR],1);
                leanToRightFrontBow2.visible = (params.p_r_s == "1")?true:false; 
    
                var leanToRightFrontBow3 = new THREE.Mesh(rightBowGeo3,rightBowBowMaterial3);
                leanToRightFrontBow3.name = "leanToRightFrontBow2"+i;
                leanToRightFrontBow3.position.set(-(params.p_w/-2 - params.leanR_p_w)-0.065,params.leanR_p_h-0.15,i.toFixed(2));	
                leanToRightFrontBow3.rotation.z = -1.13;
                leanToRightFrontBow3.scale.set(0.18,0.2,1);
                leanToRightFrontBow3.visible = (params.p_r_s == "1")?true:false; 
    
                var leanToRightFrontCorner = new THREE.Mesh(rightCornerGeo,rightCornerBowMaterial);
                leanToRightFrontCorner.name = "leanToRightFrontCorner"+i;
                leanToRightFrontCorner.position.set((params.p_w/2 + params.leanR_p_w)-0.60,params.leanR_p_h - posCorner[params.b_l_t_r_pR],i.toFixed(2));	
                leanToRightFrontCorner.rotation.z = -1;
                leanToRightFrontCorner.scale.set(1.9,0.25,1);
                leanToRightFrontCorner.visible = (params.p_r_s != "1")?true:false;
    
                var leanToRightFrontCornerR = new THREE.Mesh(rightCornerGeoR,rightCornerBowMaterialR);
                leanToRightFrontCornerR.name = "leanToRightFrontCornerR"+i;
                leanToRightFrontCornerR.position.set(-(params.p_w/-2 - params.leanR_p_w)-0.58,params.leanR_p_h -posCorner[params.b_l_t_r_pR],i.toFixed(2));	
                leanToRightFrontCornerR.rotation.z = -1;
                leanToRightFrontCornerR.scale.set(1.9,0.25,1);
                leanToRightFrontCornerR.visible = (params.p_r_s == "1")?true:false;
      
                var leanToRightBackCorner = new THREE.Mesh(rightCornerGeo,rightCornerBowMaterial);
                leanToRightBackCorner.name = "leanToRightBackCorner";
                leanToRightBackCorner.position.set((params.p_w/2 + params.leanR_p_w)-0.60,params.leanR_p_h - posCorner[params.b_l_t_r_pR],-i.toFixed(2));	
                leanToRightBackCorner.rotation.z = -1;
                leanToRightBackCorner.scale.set(1.9,0.25,1);
                leanToRightBackCorner.visible = (params.p_r_s != "1")?true:false;
    
                var leanToRightBackCornerR = new THREE.Mesh(rightCornerGeo,rightCornerBowMaterial);
                leanToRightBackCornerR.name = "leanToRightBackCornerR"+i;
                leanToRightBackCornerR.position.set(-(params.p_w/-2 - params.leanR_p_w)-0.58,params.leanR_p_h -posCorner[params.b_l_t_r_pR],-i.toFixed(2));	
                leanToRightBackCornerR.rotation.z = -1.;
                leanToRightBackCornerR.scale.set(1.9,0.25,1);
                leanToRightBackCornerR.visible = (params.p_r_s == "1")?true:false;
    
                
                var rightLeanToBackBow = new THREE.Mesh(bowGeometry,bowMaterial);
                rightLeanToBackBow.name = "rightLeanToBackBow"+i;
                rightLeanToBackBow.scale.set(params.p_w/2,0.2,1);	
                rightLeanToBackBow.position.set(leanToPosR-0.08,params.leanR_p_h + leanTohIncR + 0.03,-i.toFixed(2));	
                rightLeanToBackBow.rotation.z = -bowsRotation[params.b_l_t_r_pR];
                rightLeanToBackBow.scale.x = params.leanR_p_w + bowsScale[params.b_l_t_r_pR][2*params.leanR_p_w];
                rightLeanToBackBow.visible = (params.p_r_s != "1")?true:false;
    
                var rightLeanToBackBowR = new THREE.Mesh(bowGeometry,bowMaterial);
                rightLeanToBackBowR.name = "rightLeanToBackBowR"+i;
                rightLeanToBackBowR.scale.set(params.p_w/2,0.2,1);	
                rightLeanToBackBowR.position.set(leanToPosR-0.1,params.leanR_p_h + leanTohIncR + 0.05,-i.toFixed(2));	
                rightLeanToBackBowR.rotation.z = -bowsRotation[params.b_l_t_r_pR];
                rightLeanToBackBowR.scale.x = (params.leanR_p_w +  widthBowR[params.b_l_t_r_pR][params.leanR_p_w]);
                rightLeanToBackBowR.visible = (params.p_r_s == "1")?true:false;
    
                var leanToRightBackBow1 = new THREE.Mesh(rightBowGeo1,rightBowBowMaterial1);
                leanToRightBackBow1.name = "leanToRightBackBow1"+i;
                leanToRightBackBow1.position.set(-(params.p_w/-2 - params.leanR_p_w)-0.17,params.leanR_p_h -posBow1[params.b_l_t_r_pR],-i.toFixed(2));	
                leanToRightBackBow1.rotation.z = -rotBow1[params.b_l_t_r_pR];
                leanToRightBackBow1.scale.set(1.9,0.21,1);
                leanToRightBackBow1.visible = (params.p_r_s == "1")?true:false;
    
                var leanToRightBackBow2 = new THREE.Mesh(rightBowGeo2,rightBowBowMaterial2);
                leanToRightBackBow2.name = "leanToRightBackBow2"+i;
                leanToRightBackBow2.position.set(-(params.p_w/-2 - posBow2[params.b_l_t_r_pR][params.leanR_p_w]),params.leanR_p_h -0.11,-i.toFixed(2));	
                leanToRightBackBow2.rotation.z = -0.91;
                leanToRightBackBow2.scale.set(1.5,scaleBow2[params.b_l_t_r_pR],1);
                leanToRightBackBow2.visible = (params.p_r_s == "1")?true:false; 
    
                var leanToRightBackBow3 = new THREE.Mesh(rightBowGeo3,rightBowBowMaterial3);
                leanToRightBackBow3.name = "leanToRightBackBow2"+i;
                leanToRightBackBow3.position.set(-(params.p_w/-2 - params.leanR_p_w)-0.065,params.leanR_p_h-0.15,-i.toFixed(2));	
                leanToRightBackBow3.rotation.z = -1.13;
                leanToRightBackBow3.scale.set(0.18,0.2,1);
                leanToRightBackBow3.visible = (params.p_r_s == "1")?true:false; 
                
                if(i!=0)
                {
                    const_var.b_t_M_R_t_R.add(rightLeanToFrontBow);
                    const_var.b_t_M_R_t_R.add(rightLeanToFrontBowR);
                    const_var.b_t_M_R_t_R.add(leanToRightFrontBow1);
                    const_var.b_t_M_R_t_R.add(leanToRightFrontBow2);
                    const_var.b_t_M_R_t_R.add(leanToRightFrontBow3);
    
                    const_var.b_t_M_R_t_R.add(rightLeanToBackBow);
                    const_var.b_t_M_R_t_R.add(rightLeanToBackBowR);
                    const_var.b_t_M_R_t_R.add(leanToRightBackBow1);
                    const_var.b_t_M_R_t_R.add(leanToRightBackBow2);
                    const_var.b_t_M_R_t_R.add(leanToRightBackBow3);
    
                    const_var.b_t_M_R_t_R.add(leanToRightFrontCorner);
                    const_var.b_t_M_R_t_R.add(leanToRightFrontCornerR);
                    const_var.b_t_M_R_t_R.add(leanToRightBackCorner);
                    const_var.b_t_M_R_t_R.add(leanToRightBackCornerR);
                }
                else
                {
                    rightLeanToFrontBow.position.set(leanToPosR-0.08,params.leanR_p_h + leanTohIncR + 0.03,0);
                    const_var.b_t_M_R_t_R.add(rightLeanToFrontBow);
                    const_var.b_t_M_R_t_R.add(rightLeanToFrontBowR);
                    const_var.b_t_M_R_t_R.add(leanToRightFrontBow1);
                    const_var.b_t_M_R_t_R.add(leanToRightFrontBow2);
                    const_var.b_t_M_R_t_R.add(leanToRightFrontBow3);
                    
                    // const_var.b_t_M_R_t_R.add(rightLeanToBackBowR);
                    // const_var.b_t_M_R_t_R.add(leanToRightBackBow1);
                    // const_var.b_t_M_R_t_R.add(leanToRightBackBow2);
                    // const_var.b_t_M_R_t_R.add(leanToRightBackBow3);
    
                    const_var. b_t_M_R_t_R.add(leanToRightFrontCorner);
                    const_var.b_t_M_R_t_R.add(leanToRightFrontCornerR);
                    // const_var.b_t_M_R_t_R.add(leanToRightBackCornerR);
                }
            
            }
        
        } 
        if(params.leantoAlignmentRight=="1"){
            const_var.b_t_M_R_t_R.position.z = 0;
            }
        if(params.leantoAlignmentRight=="2"){
            const_var.b_t_M_R_t_R.position.z = params.p_d/2-params.leanR_p_d/2;
            }
        if(params.leantoAlignmentRight=="3"){
            const_var.b_t_M_R_t_R.position.z = -params.p_d/2+params.leanR_p_d/2;
            }
}