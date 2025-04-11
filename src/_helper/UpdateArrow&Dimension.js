import * as THREE from "three";
import { params, const_var, } from '../redux/reducers/reducer';

export const updateCenterBuildingArrows = (doorObj) => {

	let roofMiddleHeight = {
    "1":{"6":0.25,"7":0.29165,"8":0.33335,"9":0.375,"10":0.41665,"11":0.45835,"12":0.5,"13":0.5417,"14":0.5833,"15":0.6250,"16":0.6667,"17":0.7083,"18":0.7500,"19":0.7917,"20":0.8333,"21":0.8750,"22":0.9167,"23":0.9583,"24":1,"25":1.0417,"26":1.0833,"27":1.1250,"28":1.1667,"29":1.2083,"30":1.2500,"31":1.2917,"32":1.3333,"33":1.3750,"34":1.4167,"35":1.4583,"36":1.5000,"37":1.5417,"38":1.5833,"39":1.6250,"40":1.6667,"41":1.7083,"42":1.7500,"43":1.7917,"44":1.8333,"45":1.8750,"46":1.9167,"47":1.9583,"48":2.00,"49":2.0417,"50":2.0833,"51":2.1250,"52":2.1667,"53":2.2083,"54":2.2500,"55":2.2917,"56":2.3333,"57":2.3750,"58":2.4167,"59":2.4583,"60":2.5000,"61":2.5417,"62":2.5833,"63":2.6250,"64":2.6667,"65":2.7083,"66":2.7500,"67":2.7917,"68":2.8333,"69":2.8750,"70":2.9167,"71":2.9583,"72":3.00,"73":3.0417,"74":3.0833,"75":3.1250,"76":3.1667,"77":3.2083,"78":3.2500,"79":3.2917,"80":3.3330},
    "2":{"6":0.50,"7":0.58335,"8":0.66665,"9":0.750,"10":0.83335,"11":0.91665,"12":1.0,"13":1.0833,"14":1.1667,"15":1.2500,"16":1.3333,"17":1.4167,"18":1.5000,"19":1.5833,"20":1.6667,"21":1.7500,"22":1.8333,"23":1.9167,"24":2,"25":2.0833,"26":2.1667,"27":2.2500,"28":2.3333,"29":2.4167,"30":2.5000,"31":2.5833,"32":2.6667,"33":2.7500,"34":2.8333,"35":2.9167,"36":3.0000,"37":3.0833,"38":3.1667,"39":3.2500,"40":3.3330,"41":3.4170,"42":3.5000,"43":3.5830,"44":3.6670,"45":3.7500,"46":3.8330,"47":3.9170,"48":4.00,"49":4.0830,"50":4.1670,"51":4.2500,"52":4.3330,"53":4.4170,"54":4.5000,"55":4.5830,"56":4.6670,"57":4.7500,"58":4.8330,"59":4.9170,"60":5.0000,"61":5.0830,"62":5.1670,"63":5.2500,"64":5.3330,"65":5.4170,"66":5.5000,"67":5.5830,"68":5.6670,"69":5.7500,"70":5.8330,"71":5.9170,"72":6.00,"73":6.0830,"74":6.1670,"75":6.2500,"76":6.3330,"77":6.4170,"78":6.5000,"79":6.5830,"80":6.6670},
    "3":{"6":0.75,"7":0.87500,"8":1.00000,"9":1.125,"10":1.25000,"11":1.37500,"12":1.5,"13":1.6250,"14":1.7500,"15":1.8750,"16":2.0000,"17":2.1250,"18":2.2500,"19":2.3750,"20":2.5000,"21":2.6250,"22":2.7500,"23":2.8750,"24":3,"25":3.1250,"26":3.2500,"27":3.3750,"28":3.5000,"29":3.6250,"30":3.7500,"31":3.8750,"32":4.0000,"33":4.1250,"34":4.2500,"35":4.3750,"36":4.5000,"37":4.6250,"38":4.7500,"39":4.8750,"40":5.0000,"41":5.1250,"42":5.2500,"43":5.3750,"44":5.5000,"45":5.6250,"46":5.7500,"47":5.8750,"48":6.00,"49":6.1250,"50":6.2500,"51":6.3750,"52":6.5000,"53":6.6250,"54":6.7500,"55":6.8750,"56":7.0000,"57":7.1250,"58":7.2500,"59":7.3750,"60":7.5000,"61":7.6250,"62":7.7500,"63":7.8750,"64":8.0000,"65":8.1250,"66":8.2500,"67":8.3750,"68":8.5000,"69":8.6250,"70":8.7500,"71":8.8750,"72":9.00,"73":9.1250,"74":9.2500,"75":9.3750,"76":9.5000,"77":9.6250,"78":9.7500,"79":9.8750,"80":10.000},
    "4":{"6":1.00,"7":1.16665,"8":1.33335,"9":1.500,"10":1.66650,"11":1.83350,"12":2.0,"13":2.1667,"14":2.3333,"15":2.5000,"16":2.6667,"17":2.8333,"18":3.0000,"19":3.1667,"20":3.3330,"21":3.5000,"22":3.6670,"23":3.8330,"24":4,"25":4.1670,"26":4.3330,"27":4.5000,"28":4.6670,"29":4.8330,"30":5.0000,"31":5.1670,"32":5.3330,"33":5.5000,"34":5.6670,"35":5.8330,"36":6.0000,"37":6.1670,"38":6.3330,"39":6.5000,"40":6.6670,"41":6.8330,"42":7.0000,"43":7.1670,"44":7.3330,"45":7.5000,"46":7.6670,"47":7.8330,"48":8.00,"49":8.1670,"50":8.3330,"51":8.5000,"52":8.6670,"53":8.8330,"54":9.0000,"55":9.1670,"56":9.3330,"57":9.5000,"58":9.6670,"59":9.8330,"60":10.000,"61":10.167,"62":10.333,"63":10.500,"64":10.667,"65":10.833,"66":11.000,"67":11.167,"68":11.333,"69":11.500,"70":11.667,"71":11.833,"72":12.0,"73":12.167,"74":12.333,"75":12.500,"76":12.667,"77":12.833,"78":13.000,"79":13.167,"80":13.333},
    "5":{"6":1.25,"7":1.45835,"8":1.66650,"9":1.875,"10":2.08350,"11":2.29150,"12":2.5,"13":2.7083,"14":2.9167,"15":3.1250,"16":3.3330,"17":3.5420,"18":3.7500,"19":3.9580,"20":4.1670,"21":4.3750,"22":4.5830,"23":4.7920,"24":5,"25":5.2080,"26":5.4170,"27":5.6250,"28":5.8330,"29":6.0420,"30":6.2500,"31":6.4580,"32":6.6670,"33":6.8750,"34":7.0830,"35":7.2920,"36":7.5000,"37":7.7080,"38":7.9170,"39":8.1250,"40":8.3330,"41":8.5420,"42":8.7500,"43":8.9580,"44":9.1670,"45":9.3750,"46":9.5830,"47":9.7920,"48":10.0,"49":10.208,"50":10.417,"51":10.625,"52":10.833,"53":11.042,"54":11.250,"55":11.458,"56":11.667,"57":11.875,"58":12.083,"59":12.292,"60":12.500,"61":12.708,"62":12.917,"63":13.125,"64":13.333,"65":13.542,"66":13.750,"67":13.958,"68":14.167,"69":14.375,"70":14.583,"71":14.792,"72":15.0,"73":15.208,"74":15.417,"75":15.625,"76":15.833,"77":16.042,"78":16.250,"79":16.458,"80":16.667},
    "6":{"6":1.50,"7":1.75000,"8":2.00000,"9":2.250,"10":2.50000,"11":2.75000,"12":3.0,"13":3.2500,"14":3.5000,"15":3.7500,"16":4.0000,"17":4.2500,"18":4.5000,"19":4.7500,"20":5.0000,"21":5.2500,"22":5.5000,"23":5.7500,"24":6,"25":6.2500,"26":6.5000,"27":6.7500,"28":7.0000,"29":7.2500,"30":7.5000,"31":7.7500,"32":8.0000,"33":8.2500,"34":8.5000,"35":8.7500,"36":9.0000,"37":9.2500,"38":9.5000,"39":9.7500,"40":10.000,"41":10.250,"42":10.500,"43":10.750,"44":11.000,"45":11.250,"46":11.500,"47":11.750,"48":12.0,"49":12.250,"50":12.500,"51":12.750,"52":13.000,"53":13.250,"54":13.500,"55":13.750,"56":14.000,"57":14.250,"58":14.500,"59":14.750,"60":15.000,"61":15.250,"62":15.500,"63":15.750,"64":16.000,"65":16.250,"66":16.500,"67":16.750,"68":17.000,"69":17.250,"70":17.500,"71":17.750,"72":18.0,"73":18.250,"74":18.500,"75":18.750,"76":19.000,"77":19.250,"78":19.500,"79":19.750,"80":20.000}
};
  var f_S_LeanLegHeight = {
		"1":{"6":0.000,"7":0.050,"8":0.10,"9":0.100,"10":0.100,"11":0.100,"12":0.00,"13":0.00,"14":0.10,"15":0.15,"16":0.20,"17":0.20,"18":0.20,"19":0.20,"20":0.20,"21":0.20,"22":0.20,"23":0.20,"24":0.20,"25":0.20,"26":0.20,"27":0.20,"28":0.20,"29":0.20,"30":0.20,},
		"2":{"6":0.47,"7":0.50,"8":0.60,"9":0.70,"10":0.80,"11":0.90,"12":0.98,"13":1.10,"14":1.15,"15":1.20,"16":1.25,"17":1.32,"18":1.40,"19":1.55,"20":1.63,"21":1.72,"22":1.75,"23":1.80,"24":1.90,"25":1.4,"26":0.30,"27":0.30,"28":0.35,"29":0.35,"30":0.40,},
		"3":{"6":0.70,"7":0.80,"8":0.85,"9":1.00,"10":1.10,"11":1.25,"12":1.35,"13":1.45,"14":1.65,"15":1.80,"16":1.90,"17":2.00,"18":2.20,"19":2.30,"20":2.40,"21":2.52,"22":2.64,"23":2.80,"24":2.90,"25":0.55,"26":0.55,"27":0.60,"28":0.65,"29":0.70,"30":0.75,},
		"4":{"6":0.175,"7":0.200,"8":0.25,"9":0.300,"10":0.350,"11":0.375,"12":0.35,"13":0.35,"14":0.40,"15":0.45,"16":0.50,"17":0.55,"18":0.60,"19":0.65,"20":0.70,"21":0.70,"22":0.75,"23":0.75,"24":0.80,"25":0.85,"26":0.85,"27":0.90,"28":0.95,"29":1.00,"30":1.05,},
		"5":{"6":0.250,"7":0.300,"8":0.35,"9":0.425,"10":0.475,"11":0.525,"12":0.50,"13":0.55,"14":0.60,"15":0.65,"16":0.70,"17":0.75,"18":0.85,"19":0.90,"20":0.95,"21":1.00,"22":1.05,"23":1.10,"24":1.15,"25":1.20,"26":1.25,"27":1.30,"28":1.35,"29":1.40,"30":1.45,},
		"6":{"6":0.350,"7":0.45,"8":0.50,"9":0.575,"10":0.650,"11":0.700,"12":0.70,"13":0.80,"14":0.90,"15":0.95,"16":1.00,"17":1.05,"18":1.15,"19":1.20,"20":1.30,"21":1.35,"22":1.40,"23":1.50,"24":1.60,"25":1.65,"26":1.70,"27":1.75,"28":1.85,"29":1.90,"30":2.00,},
	};
  var f_S_LeanLegScale = {
		"1":{"6":0.000,"7":0.050,"8":0.10,"9":0.100,"10":0.100,"11":0.100,"12":0.00,"13":0.00,"14":0.10,"15":0.15,"16":0.20,"17":0.20,"18":0.20,"19":0.20,"20":0.20,"21":0.20,"22":0.20,"23":0.20,"24":0.20,"25":0.20,"26":0.20,"27":0.20,"28":0.20,"29":0.20,"30":0.20,},
		"2":{"6":0.83,"7":0.95,"8":1.1,"9":1.3,"10":1.3,"11":1.6,"12":1.9,"13":2.0,"14":2.2,"15":2.4,"16":2.6,"17":2.9,"18":2.9,"19":3.1,"20":3.2,"21":3.33,"22":3.65,"23":3.9,"24":4.05,"25":2.9,"26":2.9,"27":2.9,"28":2.9,"29":2.9,"30":2.9,},
		"3":{"6":1.40,"7":1.70,"8":2.06,"9":2.24,"10":2.60,"11":2.78,"12":3.10,"13":3.20,"14":3.50,"15":3.70,"16":4.02,"17":4.25,"18":4.30,"19":4.60,"20":4.90,"21":5.20,"22":5.55,"23":5.65,"24":5.95,"25":0.55,"26":0.55,"27":0.60,"28":0.65,"29":0.70,"30":0.75,},
		"4":{"6":0.175,"7":0.200,"8":0.25,"9":0.300,"10":0.350,"11":0.375,"12":0.35,"13":0.35,"14":0.40,"15":0.45,"16":0.50,"17":0.55,"18":0.60,"19":0.65,"20":0.70,"21":0.70,"22":0.75,"23":0.75,"24":0.80,"25":0.85,"26":0.85,"27":0.90,"28":0.95,"29":1.00,"30":1.05,},
		"5":{"6":0.250,"7":0.300,"8":0.35,"9":0.425,"10":0.475,"11":0.525,"12":0.50,"13":0.55,"14":0.60,"15":0.65,"16":0.70,"17":0.75,"18":0.85,"19":0.90,"20":0.95,"21":1.00,"22":1.05,"23":1.10,"24":1.15,"25":1.20,"26":1.25,"27":1.30,"28":1.35,"29":1.40,"30":1.45,},
		"6":{"6":0.350,"7":0.450,"8":0.50,"9":0.575,"10":0.650,"11":0.700,"12":0.70,"13":0.80,"14":0.90,"15":0.95,"16":1.00,"17":1.05,"18":1.15,"19":1.20,"20":1.30,"21":1.35,"22":1.40,"23":1.50,"24":1.60,"25":1.65,"26":1.70,"27":1.75,"28":1.85,"29":1.90,"30":2.00,},
		
	};

  if ("undefined" != typeof const_var.scene.getObjectByName("C_B_Arrows")) const_var.scene.remove(const_var.scene.getObjectByName("C_B_Arrows"));
  if ("undefined" != typeof const_var.scene.getObjectByName("C_B_ArrowsBody")) const_var.scene.remove(const_var.scene.getObjectByName("C_B_ArrowsBody"));
  if ("undefined" != typeof const_var.scene.getObjectByName("C_B_ArrowsDim")) const_var.scene.remove(const_var.scene.getObjectByName("C_B_ArrowsDim"));
  
  const C_B_Arrows = new THREE.Group();
	C_B_Arrows.name = "C_B_Arrows";
	const_var.scene.add(C_B_Arrows);

  const C_B_ArrowsBody = new THREE.Group();
	C_B_ArrowsBody.name = "C_B_ArrowsBody";
	const_var.scene.add(C_B_ArrowsBody);

  const C_B_ArrowsDim = new THREE.Group();
	C_B_ArrowsDim.name = "C_B_ArrowsDim";
	const_var.scene.add(C_B_ArrowsDim);

  if(const_var.callMesure == true){

  let  widthGeo = new THREE.TextGeometry( params.p_w+"' W", {
      font:const_var.font, size: 0.4, height: 0.02, /*weight: 'bolder',*/
      curveSegments: 3, bevelEnabled: true,bevelThickness: 0.01,
      bevelSize: 0, bevelSegments: 3,
  } );
  let  widthMaterial = new THREE.MeshPhongMaterial({color: 0x17202A});
  let  dimensionWidth = new THREE.Mesh(widthGeo, widthMaterial);
  dimensionWidth.name = "dimensionWidth"
  dimensionWidth.visible = const_var.callMesure == true;
  dimensionWidth.position.set(0, 0.17, params.p_d/2+0.4);
  C_B_ArrowsDim.add(dimensionWidth);

  if (C_B_ArrowsDim.getObjectByName("dimensionWidth4Back") == undefined) {
      let dimensionWidth4Back = C_B_ArrowsDim.getObjectByName("dimensionWidth").clone();
      dimensionWidth4Back.name = "dimensionWidth4Back"
      dimensionWidth4Back.visible = const_var.callMesure == true;
      dimensionWidth4Back.position.set(0, 0.17, params.p_d/-2-0.4);
      dimensionWidth4Back.rotation.y = Math.PI;
      C_B_ArrowsDim.add(dimensionWidth4Back)
  }

  let  lengthGeo = new THREE.TextGeometry( params.p_d+"' L", {
      font:const_var.font, size: 0.4, height: 0.02, /*weight: 'bolder',*/
      curveSegments: 3, bevelEnabled: true,bevelThickness: 0.001,
      bevelSize: 0, bevelSegments: 3,
  } );
  let  lengthMaterial = new THREE.MeshPhongMaterial({color: 0x17202A});
  let  dimensionLength4Left = new THREE.Mesh(lengthGeo, lengthMaterial);
  dimensionLength4Left.name = "dimensionLength4Left"
  dimensionLength4Left.visible = const_var.callMesure == true;
  dimensionLength4Left.position.set(params.p_w/-2-0.32, 0.17, 0);
  dimensionLength4Left.rotation.y = Math.PI/-2;
  C_B_ArrowsDim.add(dimensionLength4Left);

  if (C_B_ArrowsDim.getObjectByName("dimensionLength4Right") == undefined) {
      let dimensionLength4Right = C_B_ArrowsDim.getObjectByName("dimensionLength4Left").clone();
      dimensionLength4Right.name = "dimensionLength4Right"
      dimensionLength4Right.visible = const_var.callMesure == true;
      dimensionLength4Right.position.set(params.p_w/2+0.32, 0.17, 0);
      dimensionLength4Right.rotation.y = Math.PI/2;
      C_B_ArrowsDim.add(dimensionLength4Right)
  }
  let leftHeightValue = (params.singleSlope == true ) ? (const_var.c_m_a[params.p_b_t]!=undefined && const_var.c_m_a[params.p_b_t].fixed_new_leg_width!=undefined && const_var.c_m_a[params.p_b_t].fixed_new_leg_width.length>0 ? Math.floor((params.p_h  - (Number(params.p_r_p)/12) * (params.p_w)).toFixed(2)) : (params.p_h  - (Number(params.p_r_p)/12) * (params.p_w)).toFixed(2) ) : params.p_h ;
  let  heightGeo = new THREE.TextGeometry( leftHeightValue +"' H" , {
      font:const_var.font, size: 0.4, height: 0.02, /*weight: 'bolder',*/
      curveSegments: 3, bevelEnabled: true,bevelThickness: 0.01,
      bevelSize: 0, bevelSegments: 3,
    } );
  let  heightMaterial = new THREE.MeshPhongMaterial({color: 0x17202A});
  let  dimensionHeight = new THREE.Mesh(heightGeo, heightMaterial);
  dimensionHeight.name = "dimensionHeight"
  dimensionHeight.visible = const_var.callMesure == true;
  dimensionHeight.position.set(params.p_w/-2+0.35, params.p_h-0.5, params.p_d/2+0.2);;
  dimensionHeight.position.y =(params.singleSlope == true) ? (params.p_h  - (Number(params.p_r_p)/12) * (params.p_w)) - 0.7: params.p_h-0.5
  C_B_ArrowsDim.add(dimensionHeight); 

  if (C_B_ArrowsDim.getObjectByName("dimensionHeightBack") == undefined) {
    let dimensionHeightBack = C_B_ArrowsDim.getObjectByName("dimensionHeight").clone();
    dimensionHeightBack.name = "dimensionHeightBack"
    dimensionHeightBack.visible = const_var.callMesure == true;
    dimensionHeightBack.position.set(params.p_w/-2-0.35, params.p_h-0.5, params.p_d/-2-0.2);
    dimensionHeightBack.position.y =(params.singleSlope == true) ? (params.p_h  - (Number(params.p_r_p)/12) * (params.p_w)) -0.7: params.p_h-0.5
    dimensionHeightBack.rotation.y = Math.PI;
    C_B_ArrowsDim.add(dimensionHeightBack)
  }
  var centerHeight = (params.p_h + roofMiddleHeight[params.p_r_p][params.p_w]).toFixed(2)
  var inches1 = 0;
  var feet = Math.floor(centerHeight);
  var inches = Math.round((centerHeight - feet) * 12);
  if (inches > 0 && inches < 12) {
      var inches1 = inches;//"0" + inches;
  }
  if (inches == 12) {
      feet = feet + 1;
      inches = 0;
  }
  var RoofMiddleHeight = (feet > 0 && inches < 12 && inches != 0) ? Math.abs(feet) + "'" + inches1 + '"' : Math.abs(feet) + "'"; 
  
  let  roofMiddleHeightGeo = new THREE.TextGeometry( RoofMiddleHeight+"H" , {
  //let  roofMiddleHeightGeo = new THREE.TextGeometry( (params.p_h +parseInt(params.p_r_p)) + "' H" , {
    font:const_var.font, size: 0.4, height: 0.02, /*weight: 'bolder',*/
    curveSegments: 3, bevelEnabled: true,bevelThickness: 0.01,
    bevelSize: 0, bevelSegments: 3,
  } );
  let  roofMiddeleHeightMaterial = new THREE.MeshPhongMaterial({color: 0x17202A});
  let  dimensionRFHeight = new THREE.Mesh(roofMiddleHeightGeo, roofMiddeleHeightMaterial);
  dimensionRFHeight.name = "dimensionRoofMiddleHeightF"
  dimensionRFHeight.visible = (const_var.callMesure == true  && params.singleSlope == false) ? true: false;
  dimensionRFHeight.position.set(params.p_w/2-0.3, (params.p_h +roofMiddleHeight[params.p_r_p][params.p_w])+0.3, params.p_d/2+0.2);
  C_B_ArrowsDim.add(dimensionRFHeight);
    
  if (C_B_ArrowsDim.getObjectByName("dimensionRBHeight") == undefined) {
    let dimensionRBHeight = C_B_ArrowsDim.getObjectByName("dimensionRoofMiddleHeightF").clone();
    dimensionRBHeight.name = "dimensionRoofMiddleHeightB"
    dimensionRBHeight.visible =( const_var.callMesure == true && params.singleSlope == false) ? true: false;
    dimensionRBHeight.position.set(params.p_w/2+0.5, (params.p_h +roofMiddleHeight[params.p_r_p][params.p_w])+0.3, params.p_d/-2-0.2);
    dimensionRBHeight.rotation.y = Math.PI;
    C_B_ArrowsDim.add(dimensionRBHeight)
  }
 
  let  f_s_LeanRHeightGeo = new THREE.TextGeometry( params.p_h + "' H" , {
    font:const_var.font, size: 0.4, height: 0.02, /*weight: 'bolder',*/
    curveSegments: 3, bevelEnabled: true,bevelThickness: 0.01,
    bevelSize: 0, bevelSegments: 3,
  } );
let  f_s_LeanRHeightMaterial = new THREE.MeshPhongMaterial({color: 0x17202A});
let  f_s_LeanRdimensionHeight = new THREE.Mesh(f_s_LeanRHeightGeo, f_s_LeanRHeightMaterial);
f_s_LeanRdimensionHeight.name = "f_s_LeanRdimensionHeight"
f_s_LeanRdimensionHeight.visible = (const_var.callMesure && params.singleSlope ==true)?true:false;
f_s_LeanRdimensionHeight.position.set(params.p_w/2-1.5, params.p_h - 0.8, params.p_d/2+0.2);
C_B_ArrowsDim.add(f_s_LeanRdimensionHeight); 

if (C_B_ArrowsDim.getObjectByName("f_s_LeanRdimensionHeightBack") == undefined) {
  let f_s_LeanRdimensionHeightBack = C_B_ArrowsDim.getObjectByName("f_s_LeanRdimensionHeight").clone();
  f_s_LeanRdimensionHeightBack.name = "f_s_LeanRdimensionHeightBack"
  f_s_LeanRdimensionHeightBack.visible = (const_var.callMesure && params.singleSlope ==true)?true:false;
  f_s_LeanRdimensionHeightBack.position.set(params.p_w/2-0.2, params.p_h - 0.8, params.p_d/-2-0.2);
  f_s_LeanRdimensionHeightBack.rotation.y = Math.PI;
  C_B_ArrowsDim.add(f_s_LeanRdimensionHeightBack)
}

    /* Fornt Horizantal Arrow */
      if (const_var.b_t_M_R.getObjectByName("FLArrowHead") == undefined) {
          let FLArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
          FLArrowHead.visible = const_var.callMesure == true;
          FLArrowHead.name = "FLArrowHead";
          FLArrowHead.material = FLArrowHead.material.clone();
          FLArrowHead.position.set(params.p_w/-2+0.11, 0.1, params.p_d/2+0.4);
          FLArrowHead.rotation.z = Math.PI/2;
          C_B_Arrows.add(FLArrowHead)
      }
      if (const_var.b_t_M_R.getObjectByName("FRArrowHead") == undefined) {
          let FRArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
          FRArrowHead.name = "FRArrowHead"
          FRArrowHead.material = FRArrowHead.material.clone();
          FRArrowHead.radiusTop = 12
          FRArrowHead.visible = const_var.callMesure == true;
          FRArrowHead.position.set(params.p_w/2-0.11, 0.1, params.p_d/2+0.4);
          FRArrowHead.rotation.z = Math.PI/-2;
          C_B_Arrows.add(FRArrowHead)
      }
      const frontArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.p_w-0.2,80,100 );
      // const frontArrowBodymaterial = new THREE.MeshBasicMaterial( {color: 0x17202A, } );
      const frontArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
      const frontArrowBody = new THREE.Mesh( frontArrowBodyGeo, frontArrowBodymaterial );
      frontArrowBody.name = "frontArrowBody"
      frontArrowBody.visible = const_var.callMesure == true;
      frontArrowBody.position.set(0, 0.1, params.p_d/2+0.4);
      frontArrowBody.rotation.z = Math.PI/2;
      C_B_ArrowsBody.add( frontArrowBody );
    /* ---------------End------------------*/

    /* Fornt Vertical (Height) Arrow  */
      if (const_var.b_t_M_R.getObjectByName("FUArrowHead") == undefined) {
        let FUArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        FUArrowHead.name = "FUArrowHead"
        FUArrowHead.material = FUArrowHead.material.clone();
        FUArrowHead.visible = const_var.callMesure == true;
        FUArrowHead.position.set(params.p_w/-2-0.1, params.singleSlope ? (params.p_h  - (Number(params.p_r_p)/12) * (params.p_w)) :params.p_h-0.08, params.p_d/2+0.15);
        FUArrowHead.rotation.y = Math.PI/2;
        C_B_Arrows.add(FUArrowHead)
      }
      if (const_var.b_t_M_R.getObjectByName("FDArrowHead") == undefined) {
      let FDArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
      FDArrowHead.name = "FDArrowHead"
      FDArrowHead.material = FDArrowHead.material.clone();
      FDArrowHead.visible = const_var.callMesure == true;
      FDArrowHead.position.set(params.p_w/-2-0.1, 0+0.08, params.p_d/2+0.15);
      FDArrowHead.rotation.z = Math.PI;
      C_B_Arrows.add(FDArrowHead)
      }
      const FHArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.singleSlope ? (params.p_h  - (Number(params.p_r_p)/12) * (params.p_w)): params.p_h-0.2,80,100 );
      // const FHArrowBodymaterial = new THREE.MeshBasicMaterial( {color: 0x17202A, } );
      const FHArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
      const FHArrowBody = new THREE.Mesh( FHArrowBodyGeo, FHArrowBodymaterial );
      FHArrowBody.name = "FHArrowBody"
      FHArrowBody.visible = const_var.callMesure == true;
      FHArrowBody.position.set(params.p_w/-2-0.1, params.singleSlope ? (params.p_h  - (Number(params.p_r_p)/12) * (params.p_w))/2:params.p_h/2, params.p_d/2+0.15);
      FHArrowBody.rotation.y = Math.PI/2;
      C_B_ArrowsBody.add( FHArrowBody );
    /* ---------------End------------------*/

    /* Fornt Vertical (Roof Middle Height) Arrow  */
    if (const_var.b_t_M_R.getObjectByName("F_RMH_UArrowHead") == undefined) {
      let F_RMH_UArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
      F_RMH_UArrowHead.name = "F_RMH_UArrowHead"
      F_RMH_UArrowHead.material = F_RMH_UArrowHead.material.clone();
      F_RMH_UArrowHead.visible = const_var.callMesure == true;
      F_RMH_UArrowHead.position.set(params.p_w/+2+0.1, (params.p_h+roofMiddleHeight[params.p_r_p][params.p_w])-0.08, params.p_d/2+0.4);
      F_RMH_UArrowHead.position.y = params.singleSlope ? params.p_h:(params.p_h+roofMiddleHeight[params.p_r_p][params.p_w])
      F_RMH_UArrowHead.rotation.y = Math.PI/2;
      C_B_Arrows.add(F_RMH_UArrowHead)
    }
    if (const_var.b_t_M_R.getObjectByName("F_RMH_DArrowHead") == undefined) {
    let F_RMH_DArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
    F_RMH_DArrowHead.name = "F_RMH_DArrowHead"
    F_RMH_DArrowHead.material = F_RMH_DArrowHead.material.clone();
    F_RMH_DArrowHead.visible = const_var.callMesure == true;
    F_RMH_DArrowHead.position.set(params.p_w/+2+0.1, 0+0.08, params.p_d/2+0.4);
    F_RMH_DArrowHead.rotation.z = Math.PI;
    C_B_Arrows.add(F_RMH_DArrowHead)
    }
    const F_RMH_ArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025,  params.singleSlope ? params.p_h :(params.p_h+roofMiddleHeight[params.p_r_p][params.p_w] -0.2),80,100 );
    // const F_RMH_ArrowBodymaterial = new THREE.MeshBasicMaterial( {color: 0x17202A, } );
    const F_RMH_ArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
    const F_RMH_ArrowBody = new THREE.Mesh( F_RMH_ArrowBodyGeo, F_RMH_ArrowBodymaterial );
    F_RMH_ArrowBody.name = "F_RMH_ArrowBody"
    F_RMH_ArrowBody.visible = const_var.callMesure == true;
    F_RMH_ArrowBody.position.set(params.p_w/+2+0.1, ((params.p_h/2)+ ((roofMiddleHeight[params.p_r_p][params.p_w])/2)), params.p_d/2+0.4);
    F_RMH_ArrowBody.position.y = params.singleSlope ? params.p_h/2 : ((params.p_h/2)+ ((roofMiddleHeight[params.p_r_p][params.p_w])/2))
    F_RMH_ArrowBody.rotation.y = Math.PI/2;
    C_B_ArrowsBody.add( F_RMH_ArrowBody );

    /* Fornt Horizantal (Roof Middle Height) Arrow  */
    if (const_var.b_t_M_R.getObjectByName("FRMHLArrowHead") == undefined) {
      let FRMHLArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
      FRMHLArrowHead.visible = const_var.callMesure && params.singleSlope== false? true: false;
      FRMHLArrowHead.name = "FRMHLArrowHead";
      FRMHLArrowHead.material = FRMHLArrowHead.material.clone();
      FRMHLArrowHead.position.set(0, (params.p_h+roofMiddleHeight[params.p_r_p][params.p_w]), params.p_d/2+0.4);
      FRMHLArrowHead.rotation.z = Math.PI/2;
      C_B_Arrows.add(FRMHLArrowHead)
    }
    if (const_var.b_t_M_R.getObjectByName("FRMHRArrowHead") == undefined) {
      let FRMHRArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
      FRMHRArrowHead.name = "FRMHRArrowHead"
      FRMHRArrowHead.material = FRMHRArrowHead.material.clone();
      FRMHRArrowHead.radiusTop = 12
      FRMHRArrowHead.visible =  const_var.callMesure && params.singleSlope== false? true: false;
      FRMHRArrowHead.position.set(params.p_w/2-0.11, (params.p_h+roofMiddleHeight[params.p_r_p][params.p_w]), params.p_d/2+0.4);
      FRMHRArrowHead.rotation.z = Math.PI/-2;
      C_B_Arrows.add(FRMHRArrowHead)
    }
    const frontRMHArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.p_w/2-0.2,80,100 );
    // const frontRMHArrowBodymaterial = new THREE.MeshBasicMaterial( {color: 0x17202A, } );
    const frontRMHArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
    const frontRMHArrowBody = new THREE.Mesh( frontRMHArrowBodyGeo, frontRMHArrowBodymaterial );
    frontRMHArrowBody.name = "frontRMHArrowBody"
    frontRMHArrowBody.visible =  const_var.callMesure && params.singleSlope== false? true: false;
    frontRMHArrowBody.position.set(params.p_w/4, (params.p_h+roofMiddleHeight[params.p_r_p][params.p_w]), params.p_d/2+0.4);
    frontRMHArrowBody.rotation.z = Math.PI/2;
    C_B_ArrowsBody.add( frontRMHArrowBody );

    /* ---------------End------------------*/

    /* Back Horizantal Arrow */
      if (const_var.b_t_M_R.getObjectByName("BLArrowHead") == undefined) {
        let BLArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        BLArrowHead.visible = const_var.callMesure == true;
        BLArrowHead.name = "BLArrowHead";
        BLArrowHead.material = BLArrowHead.material.clone();
        BLArrowHead.position.set(params.p_w/-2+0.11, 0.1, params.p_d/-2-0.3);
        BLArrowHead.rotation.z = Math.PI/2;
        C_B_Arrows.add(BLArrowHead)
      }
      if (const_var.b_t_M_R.getObjectByName("BRArrowHead") == undefined) {
        let BRArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        BRArrowHead.name = "BRArrowHead"
        BRArrowHead.material = BRArrowHead.material.clone();
        BRArrowHead.radiusTop = 12
        BRArrowHead.visible = const_var.callMesure == true;
        BRArrowHead.position.set(params.p_w/2-0.11, 0.1, params.p_d/-2-0.3);
        BRArrowHead.rotation.z = Math.PI/-2;
        C_B_Arrows.add(BRArrowHead)
      }
      const backArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.p_w-0.2,80,100 );
      // const backArrowBodymaterial = new THREE.MeshBasicMaterial( {color: 0x17202A, } );
      const backArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
      const backArrowBody = new THREE.Mesh( backArrowBodyGeo, backArrowBodymaterial );
      backArrowBody.name = "backArrowBody"
      backArrowBody.visible = const_var.callMesure == true;
      backArrowBody.position.set(0, 0.1, params.p_d/-2-0.3);
      backArrowBody.rotation.z = Math.PI/2;
      C_B_ArrowsBody.add( backArrowBody );
    /* ---------------End------------------*/

    /* Back Vertical Arrow */
    if (const_var.b_t_M_R.getObjectByName("BUArrowHead") == undefined) {
      let BUArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
      BUArrowHead.name = "BUArrowHead"
      BUArrowHead.material = BUArrowHead.material.clone();
      BUArrowHead.visible = const_var.callMesure == true;
      BUArrowHead.position.set(params.p_w/-2-0.1, params.singleSlope ? (params.p_h  - (Number(params.p_r_p)/12) * (params.p_w)): params.p_h-0.08, params.p_d/-2-0.15);
      BUArrowHead.rotation.y = Math.PI/2;
      C_B_Arrows.add(BUArrowHead) 
    }
    if (const_var.b_t_M_R.getObjectByName("BDArrowHead") == undefined) {
      let BDArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
      BDArrowHead.name = "BDArrowHead"
      BDArrowHead.material = BDArrowHead.material.clone();
      BDArrowHead.visible = const_var.callMesure == true;
      BDArrowHead.position.set(params.p_w/-2-0.1 , 0+0.08, params.p_d/-2-0.15);
      BDArrowHead.rotation.z = Math.PI;
      C_B_Arrows.add(BDArrowHead)
    }

    const BHArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.singleSlope ? (params.p_h  - (Number(params.p_r_p)/12) * (params.p_w)): params.p_h-0.2,80,100 );
    // const BHArrowBodymaterial = new THREE.MeshBasicMaterial( {color: 0x17202A, } );
    const BHArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
    const BHArrowBody = new THREE.Mesh( BHArrowBodyGeo, BHArrowBodymaterial );
    BHArrowBody.name = "BHArrowBody"
    BHArrowBody.visible = const_var.callMesure == true;
    BHArrowBody.position.set(params.p_w/-2-0.1, params.singleSlope ? (params.p_h  - (Number(params.p_r_p)/12) * (params.p_w))/2:params.p_h/2, params.p_d/-2-0.15);
    BHArrowBody.rotation.y = Math.PI/2;
    C_B_ArrowsBody.add( BHArrowBody );


     /* Back Vertical Arrow (Roof Middle Height)*/
    if (const_var.b_t_M_R.getObjectByName("B_RMH_UArrowHead") == undefined) {
      let B_RMH_UArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
      B_RMH_UArrowHead.name = "B_RMH_UArrowHead"
      B_RMH_UArrowHead.material = B_RMH_UArrowHead.material.clone();
      B_RMH_UArrowHead.visible = const_var.callMesure == true;
      B_RMH_UArrowHead.position.set(params.p_w/+2+0.1, (params.p_h+roofMiddleHeight[params.p_r_p][params.p_w])-0.08, params.p_d/-2-0.15);
      B_RMH_UArrowHead.position.y = params.singleSlope ? params.p_h:(params.p_h+roofMiddleHeight[params.p_r_p][params.p_w])
      B_RMH_UArrowHead.position.z = params.singleSlope ? params.p_d/-2-0.2 : params.p_d/-2-0.15;
      B_RMH_UArrowHead.rotation.y = Math.PI/2;
      C_B_Arrows.add(B_RMH_UArrowHead)
    }
    if (const_var.b_t_M_R.getObjectByName("B_RMH_DArrowHead") == undefined) {
    let B_RMH_DArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
    B_RMH_DArrowHead.name = "B_RMH_DArrowHead"
    B_RMH_DArrowHead.material = B_RMH_DArrowHead.material.clone();
    B_RMH_DArrowHead.visible = const_var.callMesure == true;
    B_RMH_DArrowHead.position.set(params.p_w/+2+0.1, 0+0.08, params.p_d/-2-0.15);
    B_RMH_DArrowHead.position.z = params.singleSlope ? params.p_d/-2-0.2 : params.p_d/-2-0.15;
    B_RMH_DArrowHead.rotation.z = Math.PI;
    C_B_Arrows.add(B_RMH_DArrowHead)
    }
    const B_RMH_ArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025,params.singleSlope ? params.p_h :(params.p_h+roofMiddleHeight[params.p_r_p][params.p_w] -0.2),80,100 );
    // const B_RMH_ArrowBodymaterial = new THREE.MeshBasicMaterial( {color: 0x17202A, } );
    const B_RMH_ArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
    const B_RMH_ArrowBody = new THREE.Mesh( B_RMH_ArrowBodyGeo, B_RMH_ArrowBodymaterial );
    B_RMH_ArrowBody.name = "B_RMH_ArrowBody"
    B_RMH_ArrowBody.visible = const_var.callMesure == true;
    B_RMH_ArrowBody.position.set(params.p_w/+2+0.1, ((params.p_h/2)+ ((roofMiddleHeight[params.p_r_p][params.p_w])/2)), params.p_d/-2-0.15);
    B_RMH_ArrowBody.position.y = params.singleSlope ? params.p_h/2 : ((params.p_h/2)+ ((roofMiddleHeight[params.p_r_p][params.p_w])/2))
    B_RMH_ArrowBody.position.z = params.singleSlope ? params.p_d/-2-0.2 : params.p_d/-2-0.15;
    B_RMH_ArrowBody.rotation.y = Math.PI/2;
    C_B_ArrowsBody.add( B_RMH_ArrowBody );
    
    // for Horizantal roofMiddleHeight
    if (const_var.b_t_M_R.getObjectByName("BRMHLArrowHead") == undefined) {
      let BRMHLArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
      BRMHLArrowHead.visible =  const_var.callMesure && params.singleSlope== false? true: false;
      BRMHLArrowHead.name = "BRMHLArrowHead";
      BRMHLArrowHead.material = BRMHLArrowHead.material.clone();
      BRMHLArrowHead.position.set(0, (params.p_h+roofMiddleHeight[params.p_r_p][params.p_w]), params.p_d/-2-0.4);
      BRMHLArrowHead.rotation.z = Math.PI/2;
      C_B_Arrows.add(BRMHLArrowHead)
    }
    if (const_var.b_t_M_R.getObjectByName("BRMHRArrowHead") == undefined) {
      let BRMHRArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
      BRMHRArrowHead.name = "BRMHRArrowHead"
      BRMHRArrowHead.material = BRMHRArrowHead.material.clone();
      BRMHRArrowHead.radiusTop = 12
      BRMHRArrowHead.visible =  const_var.callMesure && params.singleSlope== false? true: false;
      BRMHRArrowHead.position.set(params.p_w/2-0.11, (params.p_h+roofMiddleHeight[params.p_r_p][params.p_w]), params.p_d/-2-0.4);
      BRMHRArrowHead.rotation.z = Math.PI/-2;
      C_B_Arrows.add(BRMHRArrowHead)
    }
    const backRMHArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.p_w/2-0.2,80,100 );
    // const backRMHArrowBodymaterial = new THREE.MeshBasicMaterial( {color: 0x17202A, } );
    const backRMHArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
    const backRMHArrowBody = new THREE.Mesh( backRMHArrowBodyGeo, backRMHArrowBodymaterial );
    backRMHArrowBody.name = "backRMHArrowBody"
    backRMHArrowBody.visible =  const_var.callMesure && params.singleSlope== false? true: false;
    backRMHArrowBody.position.set(params.p_w/4, (params.p_h+roofMiddleHeight[params.p_r_p][params.p_w]), params.p_d/-2-0.4);
    backRMHArrowBody.rotation.z = Math.PI/2;
    C_B_ArrowsBody.add( backRMHArrowBody );

    /* ---------------End------------------*/

    /* Left Side Horizantal Arrow */
    if (const_var.b_t_M_R.getObjectByName("LeftSideFrontArrow") == undefined) {
        let LeftSideFrontArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        LeftSideFrontArrow.name = "LeftSideFrontArrow"
        LeftSideFrontArrow.material = LeftSideFrontArrow.material.clone();
        LeftSideFrontArrow.visible = const_var.callMesure == true;
        LeftSideFrontArrow.position.set(params.p_w/-2-0.2, 0.1, params.p_d/2);
        LeftSideFrontArrow.rotation.x = Math.PI/2;
        C_B_Arrows.add(LeftSideFrontArrow)
      }
      if (const_var.b_t_M_R.getObjectByName("LeftSideBackArrow") == undefined) {
        let LeftSideBackArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        LeftSideBackArrow.name = "LeftSideBackArrow"
        LeftSideBackArrow.material = LeftSideBackArrow.material.clone();
        LeftSideBackArrow.visible = const_var.callMesure == true;
        LeftSideBackArrow.position.set(params.p_w/-2-0.2, 0.1, params.p_d/-2);
        LeftSideBackArrow.rotation.x = Math.PI/-2;
        C_B_Arrows.add(LeftSideBackArrow)
      }

      const leftArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.p_d-0.2,80,100 );
      // const leftArrowBodymaterial = new THREE.MeshBasicMaterial( {color: 0x17202A, } );
      const leftArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
      const leftArrowBody = new THREE.Mesh( leftArrowBodyGeo, leftArrowBodymaterial );
      leftArrowBody.name = "leftArrowBody"
      leftArrowBody.visible = const_var.callMesure == true;
      leftArrowBody.position.set(params.p_w/-2-0.2, 0.1, 0);
      leftArrowBody.rotation.x = Math.PI/2;
      C_B_ArrowsBody.add( leftArrowBody );
    /* ---------------End------------------*/

     /* Right Side Horizantal Arrow */
    if (const_var.b_t_M_R.getObjectByName("rightSideFrontArrow") == undefined) {
        let rightSideFrontArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        rightSideFrontArrow.name = "rightSideFrontArrow"
        rightSideFrontArrow.material = rightSideFrontArrow.material.clone();
        rightSideFrontArrow.visible = const_var.callMesure == true;
        rightSideFrontArrow.position.set(params.p_w/+2+0.2, 0.1, params.p_d/2);
        rightSideFrontArrow.rotation.x = Math.PI/2;
        C_B_Arrows.add(rightSideFrontArrow)
      }
      if (const_var.b_t_M_R.getObjectByName("rightSideBackArrow") == undefined) {
        let rightSideBackArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        rightSideBackArrow.name = "rightSideBackArrow"
        rightSideBackArrow.material = rightSideBackArrow.material.clone();
        rightSideBackArrow.visible = const_var.callMesure == true;
        rightSideBackArrow.position.set(params.p_w/+2+0.2, 0.1, params.p_d/-2);
        rightSideBackArrow.rotation.x = Math.PI/-2;
        C_B_Arrows.add(rightSideBackArrow)
      }
      
      const rightArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.p_d-0.2,80,100 );
      // const rightArrowBodymaterial = new THREE.MeshBasicMaterial( {color: 0x17202A, } );
      const rightArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
      const rightArrowBody = new THREE.Mesh( rightArrowBodyGeo, rightArrowBodymaterial );
      rightArrowBody.name = "rightArrowBody"
      rightArrowBody.visible = const_var.callMesure == true;
      rightArrowBody.position.set(params.p_w/+2+0.2, 0.1, 0);
      rightArrowBody.rotation.x = Math.PI/2;
      C_B_ArrowsBody.add( rightArrowBody );


    if (const_var.b_t_M_R.getObjectByName("rightSideFrontArrow") == undefined) {
        let rightSideFrontArrow = const_var.b_t_M_R.getObjectByName("Arrow").clone();
        rightSideFrontArrow.name = "rightSideFrontArrow"
        rightSideFrontArrow.visible = const_var.callMesure == true;
        rightSideFrontArrow.position.set(params.p_w/2+0.2, params.p_h/2+0.2, 0);
        rightSideFrontArrow.setLength(params.p_d/2-0.2, 0.18,0.1)
        rightSideFrontArrow.rotation.x = Math.PI/2;
        // C_B_Arrows.add(rightSideFrontArrow)
    }
    if (const_var.b_t_M_R.getObjectByName("rightSideBackArrow") == undefined) {
        let rightSideBackArrow = const_var.b_t_M_R.getObjectByName("Arrow").clone();
        rightSideBackArrow.name = "rightSideBackArrow"
        rightSideBackArrow.visible = const_var.callMesure == true;
        rightSideBackArrow.position.set(params.p_w/2+0.2, params.p_h/2+0.2, 0);
        rightSideBackArrow.setLength(params.p_d/2-0.2, 0.18,0.1)
        rightSideBackArrow.rotation.x = Math.PI/-2;
        // C_B_Arrows.add(rightSideBackArrow)
    }
    /* ---------------End------------------*/


    createText("frontStorageDimensionLength4Left", (params.p_w/-2-0.9), 0.19, ((params.p_d/2)-params.cB_addStorage_front/2), '', Math.PI/-2, '', (const_var.callMesure && params.cB_addStorage_check_front), C_B_ArrowsDim, params.cB_addStorage_front)
    createText("frontStorageDimensionLength4Right", (params.p_w/2+0.9), 0.19, ((params.p_d/2)-params.cB_addStorage_front/2), '', Math.PI/2, '', (const_var.callMesure && params.cB_addStorage_check_front), C_B_ArrowsDim, params.cB_addStorage_front)
    
    /* Front utility Left Side Horizantal Arrow for Length */
      createArrowHead("frontStorageLeftSideFrontArrowFL", (params.p_w/-2-0.9), 0.17, (params.p_d/2), Math.PI/2, 0, 0, (const_var.callMesure && params.cB_addStorage_check_front), C_B_Arrows)
      createArrowHead("frontStorageLeftSideBackArrowFL", (params.p_w/-2-0.9), 0.17, ((params.p_d/2)-(parseInt(params.cB_addStorage_front))), Math.PI/-2, 0, 0, (const_var.callMesure && params.cB_addStorage_check_front), C_B_Arrows)
      createArrowBody("frontStorageLeftArrowBodyFL", (params.p_w/-2-0.9), 0.17, (params.p_d/2)-(parseInt(params.cB_addStorage_front)/2), Math.PI/2, 0, 0, (const_var.callMesure && params.cB_addStorage_check_front), C_B_ArrowsBody, params.cB_addStorage_front)
    /* ---------------End------------------*/

    /* Front utility Right Side Horizantal Arrow for Length */
      createArrowHead("frontStorageRightSideFrontArrowFL", (params.p_w/+2+0.9), 0.17, (params.p_d/2), Math.PI/2, 0, 0, (const_var.callMesure && params.cB_addStorage_check_front), C_B_Arrows)
      createArrowHead("frontStorageRightSideBackArrowFL", (params.p_w/+2+0.9), 0.17, ((params.p_d/2)-(parseInt(params.cB_addStorage_front))), Math.PI/-2, 0, 0, (const_var.callMesure && params.cB_addStorage_check_front), C_B_Arrows)
      createArrowBody("frontStorageRightArrowBodyFL", (params.p_w/+2+0.9), 0.17, (params.p_d/2)-(parseInt(params.cB_addStorage_front)/2), Math.PI/2, 0, 0, (const_var.callMesure && params.cB_addStorage_check_front), C_B_ArrowsBody, params.cB_addStorage_front)
    /* ---------------End------------------*/

    createText("backStorageDimensionLength4Left", (params.p_w/-2-0.9), 0.19, ((params.p_d/-2)+ parseInt(params.p_u_t)/2), '', Math.PI/-2, '', (const_var.callMesure && params.cB_addStorage_check_front), C_B_ArrowsDim, params.p_u_t)
    createText("backStorageDimensionLength4Right", (params.p_w/2+0.9), 0.19, ((params.p_d/-2)+ parseInt(params.p_u_t)/2), '', Math.PI/2, '', (const_var.callMesure && params.cB_addStorage_check_front), C_B_ArrowsDim, params.p_u_t)
    
    /* Back utility Left Side Horizantal Arrow to show utility Length */
      createArrowHead("backStorageLeftSideFrontArrowFL", (params.p_w/-2-0.9), 0.17, ((params.p_d/-2)+(parseInt(params.p_u_t))),Math.PI/2, 0, 0, (const_var.callMesure && params.p_u_c), C_B_Arrows)
      createArrowHead("backStorageLeftSideBackArrowFL", (params.p_w/-2-0.9), 0.17, (params.p_d/-2), Math.PI/-2, 0, 0, (const_var.callMesure && params.p_u_c), C_B_Arrows)
      createArrowBody("backStorageLeftArrowBodyFL", params.p_w/-2-0.9, 0.17, (params.p_d/-2)+(parseInt(params.p_u_t)/2), Math.PI/2, 0, 0, (const_var.callMesure && params.p_u_c), C_B_ArrowsBody, params.p_u_t)
    /* ---------------End------------------*/

    /* Back utility Right Side Horizantal Arrow to show utility Length */
      createArrowHead("backStorageRightSideFrontArrowFL", (params.p_w/+2+0.9), 0.17, ((params.p_d/-2)+(parseInt(params.p_u_t))),Math.PI/2, 0, 0, (const_var.callMesure && params.p_u_c), C_B_Arrows)
      createArrowHead("backStorageRightSideBackArrowFL", (params.p_w/+2+0.9), 0.17, (params.p_d/-2),Math.PI/-2, 0, 0, (const_var.callMesure && params.p_u_c), C_B_Arrows)
      createArrowBody("backStorageRightArrowBodyFL", params.p_w/+2+0.9, 0.17, (params.p_d/-2)+(parseInt(params.p_u_t)/2), Math.PI/2, 0, 0, (const_var.callMesure && params.p_u_c), C_B_ArrowsBody, params.p_u_t)
    /* ---------------End------------------*/

    let  LSFwidthGeo = new THREE.TextGeometry( params.cB_addStorage_left+"' W", {
      font:const_var.font, size: 0.4, height: 0.02, /*weight: 'bolder',*/
      curveSegments: 3, bevelEnabled: true,bevelThickness: 0.01,
      bevelSize: 0, bevelSegments: 3,
  } );
  let  LSFwidthMaterial = new THREE.MeshPhongMaterial({color: 0x17202A});
  let  LSFdimensionWidth = new THREE.Mesh(LSFwidthGeo, LSFwidthMaterial);
  LSFdimensionWidth.name = "LSFdimensionWidth"
  LSFdimensionWidth.visible = (const_var.callMesure && params.cB_addStorage_check_left)?true:false;
  LSFdimensionWidth.position.set(-(params.p_w/2-1.5),0.17, params.p_d/2+0.9);
  C_B_ArrowsDim.add(LSFdimensionWidth);

  if (C_B_ArrowsDim.getObjectByName("LSBdimensionWidth") == undefined) {
    let LSBdimensionWidth = C_B_ArrowsDim.getObjectByName("LSFdimensionWidth").clone();
    LSBdimensionWidth.name = "LSBdimensionWidth"
    LSBdimensionWidth.visible = (const_var.callMesure && params.cB_addStorage_check_left)?true:false;
    LSBdimensionWidth.position.set(-(params.p_w/2-3),0.17, params.p_d/-2-0.9);
    LSBdimensionWidth.rotation.y = Math.PI;
    C_B_ArrowsDim.add(LSBdimensionWidth)
  }



       /* Fornt Horizantal Arrow for Left stoarage */
   if (const_var.b_t_M_L.getObjectByName("LSFLArrowHead") == undefined) {
    let LSFLArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
    LSFLArrowHead.visible = (params.cB_addStorage_check_left && const_var.callMesure)?true:false;
    LSFLArrowHead.name = "LSFLArrowHead";
    LSFLArrowHead.material = LSFLArrowHead.material.clone();
    LSFLArrowHead.position.set(params.p_w/-2+0.11,0.1, params.p_d/2+0.9);
    LSFLArrowHead.rotation.z = Math.PI/2;
    C_B_Arrows.add(LSFLArrowHead)
  }
  if (const_var.b_t_M_L.getObjectByName("LSFRArrowHead") == undefined) {
    let LSFRArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
    LSFRArrowHead.name = "LSFRArrowHead"
    LSFRArrowHead.material = LSFRArrowHead.material.clone();
    LSFRArrowHead.visible = (params.cB_addStorage_check_left && const_var.callMesure)?true:false;
    LSFRArrowHead.position.set(-(params.p_w/2 - params.cB_addStorage_left), 0.1, params.p_d/2+0.9);
    LSFRArrowHead.rotation.z = Math.PI/-2;
    C_B_Arrows.add(LSFRArrowHead)
  }
  const LSFArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.cB_addStorage_left-0.2,80,100 );
  const LSFArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
  const LSFArrowBody = new THREE.Mesh( LSFArrowBodyGeo, LSFArrowBodymaterial );
  LSFArrowBody.name = "LSFArrowBody"
  LSFArrowBody.visible = (params.cB_addStorage_check_left && const_var.callMesure)?true:false;
  LSFArrowBody.position.set(-(params.p_w/2-params.cB_addStorage_left/2),0.1, params.p_d/2+0.9);
  LSFArrowBody.rotation.z = Math.PI/2;
  C_B_ArrowsBody.add( LSFArrowBody );
  /* ---------------End------------------*/



     /* Back Horizantal Arrow for Left stoarage */
     if (const_var.b_t_M_L.getObjectByName("LSBLArrowHead") == undefined) {
      let LSBLArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
      LSBLArrowHead.visible = (const_var.callMesure && params.cB_addStorage_check_left)?true:false;
      LSBLArrowHead.name = "LSBLArrowHead";
      LSBLArrowHead.material = LSBLArrowHead.material.clone();
      LSBLArrowHead.position.set(params.p_w/-2+0.11, 0.1, params.p_d/-2-0.9);
      LSBLArrowHead.rotation.z = Math.PI/2;
      C_B_Arrows.add(LSBLArrowHead)
    }
    if (const_var.b_t_M_L.getObjectByName("LSBRArrowHead") == undefined) {
      let LSBRArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
      LSBRArrowHead.name = "LSBRArrowHead"
      LSBRArrowHead.material = LSBRArrowHead.material.clone();
      LSBRArrowHead.visible = (const_var.callMesure && params.cB_addStorage_check_left)?true:false;
      LSBRArrowHead.position.set(-(params.p_w/2 - params.cB_addStorage_left), 0.1, params.p_d/-2-0.9);
      LSBRArrowHead.rotation.z = Math.PI/-2;
      C_B_Arrows.add(LSBRArrowHead)
    }
    const LSBArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.cB_addStorage_left-0.2,80,100 );
    const LSBArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
    const LSBArrowBody = new THREE.Mesh( LSBArrowBodyGeo, LSBArrowBodymaterial );
    LSBArrowBody.name = "LSBArrowBody"
    LSBArrowBody.visible = (const_var.callMesure && params.cB_addStorage_check_left)?true:false;
    LSBArrowBody.position.set(-(params.p_w/2-params.cB_addStorage_left/2), 0.1, params.p_d/-2-0.9);
    LSBArrowBody.rotation.z = Math.PI/2;
    C_B_ArrowsBody.add( LSBArrowBody );
    /* ---------------End------------------*/


    let  RSFwidthGeo = new THREE.TextGeometry( params.cB_addStorage_right+"' W", {
      font:const_var.font, size: 0.4, height: 0.02, /*weight: 'bolder',*/
      curveSegments: 3, bevelEnabled: true,bevelThickness: 0.01,
      bevelSize: 0, bevelSegments: 3,
  } );
  let  RSFwidthMaterial = new THREE.MeshPhongMaterial({color: 0x17202A});
  let  RSFdimensionWidth = new THREE.Mesh(RSFwidthGeo, RSFwidthMaterial);
  RSFdimensionWidth.name = "RSFdimensionWidth"
  RSFdimensionWidth.visible = (const_var.callMesure && params.cB_addStorage_check_right)?true:false;
  RSFdimensionWidth.position.set( (params.p_w/2 - 3),0.17, params.p_d/2+0.9);
  C_B_ArrowsDim.add(RSFdimensionWidth);
  
  if (C_B_Arrows.getObjectByName("RSBdimensionWidth") == undefined) {
    let RSBdimensionWidth = C_B_ArrowsDim.getObjectByName("RSFdimensionWidth").clone();
    RSBdimensionWidth.name = "RSBdimensionWidth"
    RSBdimensionWidth.visible = (const_var.callMesure && params.cB_addStorage_check_right)?true:false;
    RSBdimensionWidth.position.set( (params.p_w/2-1.5),0.17, params.p_d/-2-0.9);
    RSBdimensionWidth.rotation.y = Math.PI;
    C_B_ArrowsDim.add(RSBdimensionWidth)
  }
  
  
  
       /* Fornt Horizantal Arrow for Right stoarage */
   if (const_var.b_t_M_L.getObjectByName("RSFLArrowHead") == undefined) {
    let RSFLArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
    RSFLArrowHead.visible = (const_var.callMesure && params.cB_addStorage_check_right)?true:false;
    RSFLArrowHead.name = "RSFLArrowHead";
    RSFLArrowHead.material = RSFLArrowHead.material.clone();
    RSFLArrowHead.position.set(params.p_w/2 - params.cB_addStorage_right, 0.1, params.p_d/2+0.9);
    RSFLArrowHead.rotation.z = Math.PI/2;
    C_B_Arrows.add(RSFLArrowHead)
  }
  if (const_var.b_t_M_L.getObjectByName("RSFRArrowHead") == undefined) {
    let RSFRArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
    RSFRArrowHead.name = "RSFRArrowHead"
    RSFRArrowHead.material = RSFRArrowHead.material.clone();
    RSFRArrowHead.visible = (const_var.callMesure && params.cB_addStorage_check_right)?true:false;
    RSFRArrowHead.position.set(params.p_w/2-0.11,0.1, params.p_d/2+0.9);
    RSFRArrowHead.rotation.z = Math.PI/-2;
    C_B_Arrows.add(RSFRArrowHead)
  }
  const RSFArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.cB_addStorage_right-0.2,80,100 );
  const RSFArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
  const RSFArrowBody = new THREE.Mesh( RSFArrowBodyGeo, RSFArrowBodymaterial );
  RSFArrowBody.name = "RSFArrowBody"
  RSFArrowBody.visible = (const_var.callMesure && params.cB_addStorage_check_right)?true:false;
  RSFArrowBody.position.set( params.p_w/2-params.cB_addStorage_right/2,0.1, params.p_d/2+0.9);
  RSFArrowBody.rotation.z = Math.PI/2;
  C_B_ArrowsBody.add( RSFArrowBody );
  /* ---------------End------------------*/

         /* Back Horizantal Arrow for Right stoarage */
         if (const_var.b_t_M_L.getObjectByName("RSBLArrowHead") == undefined) {
          let RSBLArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
          RSBLArrowHead.visible = (const_var.callMesure && params.cB_addStorage_check_right)?true:false;
          RSBLArrowHead.name = "RSBLArrowHead";
          RSBLArrowHead.material = RSBLArrowHead.material.clone();
          RSBLArrowHead.position.set(params.p_w/2 - params.cB_addStorage_right, 0.1, params.p_d/-2-0.9);
          RSBLArrowHead.rotation.z = Math.PI/2;
          C_B_Arrows.add(RSBLArrowHead)
        }
        if (const_var.b_t_M_L.getObjectByName("RSBRArrowHead") == undefined) {
          let RSBRArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
          RSBRArrowHead.name = "RSBRArrowHead"
          RSBRArrowHead.material = RSBRArrowHead.material.clone();
          RSBRArrowHead.visible = (const_var.callMesure && params.cB_addStorage_check_right)?true:false;
          RSBRArrowHead.position.set(params.p_w/2-0.11,0.1, params.p_d/-2-0.9);
          RSBRArrowHead.rotation.z = Math.PI/-2;
          C_B_Arrows.add(RSBRArrowHead)
        }
        const RSBArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.cB_addStorage_right-0.2,80,100 );
        const RSBArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
        const RSBArrowBody = new THREE.Mesh( RSBArrowBodyGeo, RSBArrowBodymaterial );
        RSBArrowBody.name = "RSBArrowBody"
        RSBArrowBody.visible = (const_var.callMesure && params.cB_addStorage_check_right)?true:false;
        RSBArrowBody.position.set( params.p_w/2-params.cB_addStorage_right/2,0.1, params.p_d/-2-0.9);
        RSBArrowBody.rotation.z = Math.PI/2;
        C_B_ArrowsBody.add( RSBArrowBody );
        /* ---------------End------------------*/
  }

}

export const updateHorizantalArrowsforDoors = () => {
  if ("undefined" != typeof const_var.scene.getObjectByName("cbDoorArrows")) const_var.scene.remove(const_var.scene.getObjectByName("cbDoorArrows"));
  if ("undefined" != typeof const_var.scene.getObjectByName("cbDoorArrowsBody")) const_var.scene.remove(const_var.scene.getObjectByName("cbDoorArrowsBody"));
    
    const cbDoorArrows = new THREE.Group();
    cbDoorArrows.name = "cbDoorArrows";
    const_var.scene.add(cbDoorArrows);

    const cbDoorArrowsBody = new THREE.Group();
    cbDoorArrowsBody.name = "cbDoorArrowsBody";
    const_var.scene.add(cbDoorArrowsBody);

    const_var.entry_points.length > 0 && const_var.entry_points.map((door, i) => {

  // if(const_var.callMesure == true){

  var line = cbDoorArrowsBody.getObjectByName("frontDArrowBody");
    if ( (line == undefined || line.visible == false) &&  door.entry_component_location == "fend"){
      /* ----- Front Wall horizantal arrow for Door-----*/
        let FLDArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        FLDArrowHead.visible  = (const_var.callMesure && !door.entry_type?.includes("window")) ? true : false;
        FLDArrowHead.name = "FLDArrowHead";
        FLDArrowHead.material = FLDArrowHead.material.clone();
        FLDArrowHead.position.set(params.p_w/-2+0.11, 4.8, params.p_d/2+0.1);
        FLDArrowHead.rotation.z = Math.PI/2;
        cbDoorArrows.add(FLDArrowHead)
    
        let FRDArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        FRDArrowHead.name = "FRDArrowHead"
        FRDArrowHead.material = FRDArrowHead.material.clone();
        FRDArrowHead.radiusTop = 12
        FRDArrowHead.visible  = (const_var.callMesure && !door.entry_type?.includes("window")) ? true : false;
        FRDArrowHead.position.set(params.p_w/2-0.11, 4.8, params.p_d/2+0.1);
        FRDArrowHead.rotation.z = Math.PI/-2;
        cbDoorArrows.add(FRDArrowHead)
  
  
      const frontDArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.p_w-0.2,80,100 );
      const frontDArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
      const frontDArrowBody = new THREE.Mesh( frontDArrowBodyGeo, frontDArrowBodymaterial );
      frontDArrowBody.name = "frontDArrowBody"
      frontDArrowBody.visible = (const_var.callMesure && !door.entry_type?.includes("window")) ? true : false;
      frontDArrowBody.position.set(0, 4.8, params.p_d/2+0.08);
      frontDArrowBody.rotation.z = Math.PI/2;
      cbDoorArrowsBody.add( frontDArrowBody );
    /* ---------------End------------------*/
    }
    var line = cbDoorArrowsBody.getObjectByName("backDArrowBody");
    if ( (line == undefined || line.visible == false) &&  door.entry_component_location == "bend"){
          /* ----- Back Wall horizantal arrow for Door-----*/
          if (const_var.b_t_M_R.getObjectByName("BLDArrowHead") == undefined) {
            let BLDArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
            BLDArrowHead.visible = (const_var.callMesure && !door.entry_type?.includes("window")) ? true : false;   
            BLDArrowHead.name = "BLDArrowHead";
            BLDArrowHead.material = BLDArrowHead.material.clone();
            BLDArrowHead.position.set(params.p_w/-2+0.11,  4.8, params.p_d/-2-0.1);
            BLDArrowHead.rotation.z = Math.PI/2;
            cbDoorArrows.add(BLDArrowHead)
          }
          if (const_var.b_t_M_R.getObjectByName("BRDArrowHead") == undefined) {
            let BRDArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
            BRDArrowHead.name = "BRDArrowHead"
            BRDArrowHead.material = BRDArrowHead.material.clone();
            BRDArrowHead.radiusTop = 12
            BRDArrowHead.visible = (const_var.callMesure && !door.entry_type?.includes("window")) ? true : false;
            BRDArrowHead.position.set(params.p_w/2-0.11,  4.8, params.p_d/-2-0.1);
            BRDArrowHead.rotation.z = Math.PI/-2;
            cbDoorArrows.add(BRDArrowHead)
          }
          const backDArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.p_w-0.2,80,100 );
          const backDArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
          const backDArrowBody = new THREE.Mesh( backDArrowBodyGeo, backDArrowBodymaterial );
          backDArrowBody.name = "backDArrowBody"
          backDArrowBody.visible = (const_var.callMesure && !door.entry_type?.includes("window")) ? true : false;
          backDArrowBody.position.set(0,  4.8, params.p_d/-2-0.08);
          backDArrowBody.rotation.z = Math.PI/2;
          cbDoorArrowsBody.add( backDArrowBody );
        /* ---------------End------------------*/
    }
    var line = cbDoorArrowsBody.getObjectByName("leftDoorArrowBody");
   if (  !params.isBreezeway && (line == undefined || line.visible == false) &&  door.entry_component_location == "lside"){
          /* -----Left Wall horizantal arrow for Door-----*/
        if (const_var.b_t_M_R.getObjectByName("LeftSideDoorFrontArrow") == undefined) {
          let LeftSideDoorFrontArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
          LeftSideDoorFrontArrow.name = "LeftSideDoorFrontArrow"
          LeftSideDoorFrontArrow.material = LeftSideDoorFrontArrow.material.clone();
          LeftSideDoorFrontArrow.visible = (const_var.callMesure && !door.entry_type?.includes("window")) ? true : false;
          LeftSideDoorFrontArrow.position.set(params.p_w/-2-0.1, 4.8, params.p_d/2);
          LeftSideDoorFrontArrow.rotation.x = Math.PI/2;
          cbDoorArrows.add(LeftSideDoorFrontArrow)
        }
        if (const_var.b_t_M_R.getObjectByName("LeftSideDoorBackArrow") == undefined) {
          let LeftSideDoorBackArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
          LeftSideDoorBackArrow.name = "LeftSideDoorBackArrow"
          LeftSideDoorBackArrow.material = LeftSideDoorBackArrow.material.clone();
          LeftSideDoorBackArrow.visible = (const_var.callMesure && !door.entry_type?.includes("window")) ? true : false;
          LeftSideDoorBackArrow.position.set(params.p_w/-2-0.1, 4.8, params.p_d/-2);
          LeftSideDoorBackArrow.rotation.x = Math.PI/-2;
          cbDoorArrows.add(LeftSideDoorBackArrow)
        }
            
        const leftDoorArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.p_d-0.2,80,100 );
        const leftDoorArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
        const leftDoorArrowBody = new THREE.Mesh( leftDoorArrowBodyGeo, leftDoorArrowBodymaterial );
        leftDoorArrowBody.name = "leftDoorArrowBody"
        leftDoorArrowBody.visible = (const_var.callMesure && !door.entry_type?.includes("window")) ? true : false;
        leftDoorArrowBody.position.set(params.p_w/-2-0.06, 4.8, 0);
        leftDoorArrowBody.rotation.x = Math.PI/2;
        cbDoorArrowsBody.add( leftDoorArrowBody );
      /* ---------------End------------------*/
      }
      var line = cbDoorArrowsBody.getObjectByName("rightDoorArrowBody");
     if (  !params.isBreezeway && (line == undefined || line.visible == false) && (door.entry_component_location == "rside" || door.entry_component_location == "fsrside")){
          /* Right Side Horizantal Arrow */
          if (const_var.b_t_M_R.getObjectByName("rightSideDFrontArrow") == undefined) {
            let rightSideDFrontArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
            rightSideDFrontArrow.name = "rightSideDFrontArrow"
            rightSideDFrontArrow.material = rightSideDFrontArrow.material.clone();
            rightSideDFrontArrow.visible = (const_var.callMesure && !door.entry_type?.includes("window")) ? true : false;
            rightSideDFrontArrow.position.set(params.p_w/+2+0.1,  4.8, params.p_d/2);
            rightSideDFrontArrow.rotation.x = Math.PI/2;
            cbDoorArrows.add(rightSideDFrontArrow)
          }
          if (const_var.b_t_M_R.getObjectByName("rightSideDBackArrow") == undefined) {
            let rightSideDBackArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
            rightSideDBackArrow.name = "rightSideDBackArrow"
            rightSideDBackArrow.material = rightSideDBackArrow.material.clone();
            rightSideDBackArrow.visible = (const_var.callMesure && !door.entry_type?.includes("window")) ? true : false;
            rightSideDBackArrow.position.set(params.p_w/+2+0.1,  4.8, params.p_d/-2);
            rightSideDBackArrow.rotation.x = Math.PI/-2;
            cbDoorArrows.add(rightSideDBackArrow)
          }
          
          const rightDoorArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.p_d-0.2,80,100 );
          const rightDoorArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
          const rightDoorArrowBody = new THREE.Mesh( rightDoorArrowBodyGeo, rightDoorArrowBodymaterial );
          rightDoorArrowBody.name = "rightDoorArrowBody"
          rightDoorArrowBody.visible = (const_var.callMesure && !door.entry_type?.includes("window")) ? true : false;
          rightDoorArrowBody.position.set(params.p_w/+2+0.08,  4.8, 0);
          rightDoorArrowBody.rotation.x = Math.PI/2;
          cbDoorArrowsBody.add( rightDoorArrowBody );
          /*---------------------End-------------*/
      }
      if (params.cB_addStorage_check_front) {
        /*Front utility Back Horizantal Arrow  For Door*/
          var line = cbDoorArrowsBody.getObjectByName("FSBWArrowBodyHU");
          if ( (line == undefined || line.visible == false) &&  door.entry_component_location == "fubend") {
              createArrowHead("FSBWLArrowHeadHU", (params.p_w/-2+0.11), 4.8, ((params.p_d/2)-(Number(params.cB_addStorage_front))-0.15), 0, 0, Math.PI/2, (const_var.callMesure && !door.entry_type?.includes("window")), cbDoorArrows)
              createArrowHead("FSBWRArrowHeadHU", (params.p_w/2-0.11), 4.8, ((params.p_d/2)-(Number(params.cB_addStorage_front))-0.15), 0, 0,  Math.PI/-2, (const_var.callMesure && !door.entry_type?.includes("window")), cbDoorArrows)
              createArrowBody("FSBWArrowBodyHU", 0, 4.8, ((params.p_d/2)-(Number(params.cB_addStorage_front))-0.15), 0, 0, Math.PI/2, (const_var.callMesure && !door.entry_type?.includes("window")), cbDoorArrowsBody, parseInt(params.p_w))
          }
        /* ---------------End------------------*/
     
        /*Front utility Left Side Horizantal Arrow for Door  */
          var line = cbDoorArrowsBody.getObjectByName("frontStorageLeftArrowBodyUH");
          if ( (line == undefined || line.visible == false) &&  door.entry_component_location == "fulside") {
            createArrowHead("frontStorageLeftSideFrontArrowUH", (params.p_w/-2-0.1), 4.8, ((params.p_d/2)), Math.PI/2, 0, 0, (const_var.callMesure && params.cB_addStorage_check_front&& !door.entry_type?.includes("window")), cbDoorArrows)
            createArrowHead("frontStorageLeftSideBackArrowUH", (params.p_w/-2-0.1), 4.8, ((params.p_d/2)-(parseInt(params.cB_addStorage_front))), Math.PI/-2, 0, 0, (const_var.callMesure && params.cB_addStorage_check_front&& !door.entry_type?.includes("window")), cbDoorArrows)
            createArrowBody("frontStorageLeftArrowBodyUH", (params.p_w/-2-0.1), 4.8, (params.p_d/2)-(parseInt(params.cB_addStorage_front)/2), Math.PI/2, 0, 0, (const_var.callMesure && params.cB_addStorage_check_front&& !door.entry_type?.includes("window")), cbDoorArrowsBody, parseInt(params.cB_addStorage_front))
          }
        /* ---------------End------------------*/
        
        /*bacFront utility Right Side Horizantal Arrow for Door */
          var line = cbDoorArrowsBody.getObjectByName("frontStorageRightSideArrowBodyUH");
          if ( (line == undefined || line.visible == false) &&  door.entry_component_location == "furside") {
            createArrowHead("frontStorageRightSideFrontArrowUH", (params.p_w/2+0.1), 4.8, ((params.p_d/2)), Math.PI/2, 0, 0, (const_var.callMesure && params.cB_addStorage_check_front&& !door.entry_type?.includes("window")), cbDoorArrows)
            createArrowHead("frontStorageRightSideBackArrowUH", (params.p_w/2+0.1), 4.8, ((params.p_d/2)-(parseInt(params.cB_addStorage_front))), Math.PI/-2, 0, 0, (const_var.callMesure && params.cB_addStorage_check_front&& !door.entry_type?.includes("window")), cbDoorArrows)
            createArrowBody("frontStorageRightSideArrowBodyUH", (params.p_w/2+0.1), 4.8, (params.p_d/2)-(parseInt(params.cB_addStorage_front)/2), Math.PI/2, 0, 0, (const_var.callMesure && params.cB_addStorage_check_front&& !door.entry_type?.includes("window")), cbDoorArrowsBody, parseInt(params.cB_addStorage_front))
          }
        /* ---------------End------------------*/
    }

    /*back utility Fornt Horizantal Arrow  For Door*/
    var line = cbDoorArrowsBody.getObjectByName("frontArrowBodyUH");
   if ( (line == undefined || line.visible == false) &&  door.entry_component_location == "ufend") {
      if (const_var.b_t_M_R.getObjectByName("FLArrowHeadHU") == undefined) {
      let FLArrowHeadHU = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
      FLArrowHeadHU.visible = (const_var.callMesure && !door.entry_type?.includes("window")) ? true : false;
      FLArrowHeadHU.name = "FLArrowHeadHU";
      FLArrowHeadHU.material = FLArrowHeadHU.material.clone();
      FLArrowHeadHU.position.set(params.p_w/-2+0.11,4.8, (params.p_d/-2)+(parseInt(params.p_u_t))+0.1);
      FLArrowHeadHU.rotation.z = Math.PI/2;
      cbDoorArrows.add(FLArrowHeadHU)
    }
    if (const_var.b_t_M_R.getObjectByName("FRArrowHeadUH") == undefined) {
        let FRArrowHeadUH = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        FRArrowHeadUH.name = "FRArrowHeadUH"
        FRArrowHeadUH.material = FRArrowHeadUH.material.clone();
        FRArrowHeadUH.radiusTop = 12
        FRArrowHeadUH.visible = (const_var.callMesure && !door.entry_type?.includes("window")) ? true : false;
        FRArrowHeadUH.position.set(params.p_w/2-0.11,4.8, (params.p_d/-2)+(parseInt(params.p_u_t))+0.1);
        FRArrowHeadUH.rotation.z = Math.PI/-2;
        cbDoorArrows.add(FRArrowHeadUH)
    }
    const frontArrowBodyUHGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.p_w-0.2,80,100 );
    // const frontArrowBodyUHmaterial = new THREE.MeshBasicMaterial( {color: 0x17202A, } );
    const frontArrowBodyUHmaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
    const frontArrowBodyUH = new THREE.Mesh( frontArrowBodyUHGeo, frontArrowBodyUHmaterial );
    frontArrowBodyUH.name = "frontArrowBodyUH"
    frontArrowBodyUH.visible = (const_var.callMesure && !door.entry_type?.includes("window")) ? true : false;
    frontArrowBodyUH.position.set(0,4.8, (params.p_d/-2)+(parseInt(params.p_u_t))+0.1);
    frontArrowBodyUH.rotation.z = Math.PI/2;
    cbDoorArrowsBody.add( frontArrowBodyUH );
  /* ---------------End------------------*/
      }
      
      /*back utility Left Side Horizantal Arrow for Door  */
      var line = cbDoorArrowsBody.getObjectByName("leftArrowBodyUH");
    if ( (line == undefined || line.visible == false) &&  door.entry_component_location == "sideul") {

      if (const_var.b_t_M_R.getObjectByName("LeftSideFrontArrowUH") == undefined) {
        let LeftSideFrontArrowUH = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        LeftSideFrontArrowUH.name = "LeftSideFrontArrowUH"
        LeftSideFrontArrowUH.material = LeftSideFrontArrowUH.material.clone();
        LeftSideFrontArrowUH.visible = (const_var.callMesure && params.p_u_c && !door.entry_type?.includes("window")) == true;
        LeftSideFrontArrowUH.position.set(params.p_w/-2-0.1, 4.8, ((params.p_d/-2)+(parseInt(params.p_u_t))));
        LeftSideFrontArrowUH.position.z =(params.p_l_w != "Close") ? ((params.p_d/-2)+(parseInt(params.p_u_t))): params.p_d/2;
        LeftSideFrontArrowUH.rotation.x = Math.PI/2;
        cbDoorArrows.add(LeftSideFrontArrowUH)
      }
      if (const_var.b_t_M_R.getObjectByName("LeftSideBackArrowUH") == undefined) {
        let LeftSideBackArrowUH = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        LeftSideBackArrowUH.name = "LeftSideBackArrowUH"
        LeftSideBackArrowUH.material = LeftSideBackArrowUH.material.clone();
        LeftSideBackArrowUH.visible = (const_var.callMesure && params.p_u_c && !door.entry_type?.includes("window")) == true;
        LeftSideBackArrowUH.position.set(params.p_w/-2-0.1, 4.8, params.p_d/-2);
        LeftSideBackArrowUH.rotation.x = Math.PI/-2;
        cbDoorArrows.add(LeftSideBackArrowUH)
      }

      let value = (params.p_l_w != "Close") ? (parseInt(params.p_u_t))-0.2 : params.p_d-0.2;
      const leftArrowBodyUHGeo = new THREE.CylinderGeometry( 0.025, 0.025, value, 80,100 );
      const leftArrowBodyUHmaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
      const leftArrowBodyUH = new THREE.Mesh( leftArrowBodyUHGeo, leftArrowBodyUHmaterial );
      leftArrowBodyUH.name = "leftArrowBodyUH"
      leftArrowBodyUH.visible = (const_var.callMesure && params.p_u_c && !door.entry_type?.includes("window")) == true;
      leftArrowBodyUH.position.set(params.p_w/-2-0.1, 4.8, (params.p_d/-2)+(parseInt(params.p_u_t)/2));
      leftArrowBodyUH.position.z = (params.p_l_w != "Close") ? (params.p_d/-2)+(parseInt(params.p_u_t)/2) : 0;
      leftArrowBodyUH.rotation.x = Math.PI/2;
      cbDoorArrowsBody.add( leftArrowBodyUH );
/* ---------------End------------------*/
}
    /*back utility Right Side Horizantal Arrow for Door */
    var line = cbDoorArrowsBody.getObjectByName("rightArrowBodyUH");
    if ( (line == undefined || line.visible == false) &&  door.entry_component_location == "ulside") {
      if (const_var.b_t_M_R.getObjectByName("RightSideFrontArrowUH") == undefined) {
      let RightSideFrontArrowUH = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
      RightSideFrontArrowUH.name = "RightSideFrontArrowUH"
      RightSideFrontArrowUH.material = RightSideFrontArrowUH.material.clone();
      RightSideFrontArrowUH.visible = (const_var.callMesure && params.p_u_c && !door.entry_type?.includes("window")) == true;
      RightSideFrontArrowUH.position.set(params.p_w/+2+0.1, 4.8, ((params.p_d/-2)+(parseInt(params.p_u_t))));
      RightSideFrontArrowUH.position.z = (params.p_r_w != "Close") ? ((params.p_d/-2)+(parseInt(params.p_u_t))) : params.p_d/2;
      RightSideFrontArrowUH.rotation.x = Math.PI/2;
      cbDoorArrows.add(RightSideFrontArrowUH)
      }
      if (const_var.b_t_M_R.getObjectByName("RightSideBackArrowUH") == undefined) {
      let RightSideBackArrowUH = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
      RightSideBackArrowUH.name = "RightSideBackArrowUH"
      RightSideBackArrowUH.material = RightSideBackArrowUH.material.clone();
      RightSideBackArrowUH.visible = (const_var.callMesure && params.p_u_c && !door.entry_type?.includes("window")) == true;
      RightSideBackArrowUH.position.set(params.p_w/+2+0.1, 4.8, params.p_d/-2);
      RightSideBackArrowUH.rotation.x = Math.PI/-2;
      cbDoorArrows.add(RightSideBackArrowUH)
      }

      let value = (params.p_r_w != "Close") ? (parseInt(params.p_u_t))-0.2 : params.p_d-0.2;
      const rightArrowBodyUHGeo = new THREE.CylinderGeometry( 0.025, 0.025, value, 80,100 );
      const rightArrowBodyUHmaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
      const rightArrowBodyUH = new THREE.Mesh( rightArrowBodyUHGeo, rightArrowBodyUHmaterial );
      rightArrowBodyUH.name = "rightArrowBodyUH"
      rightArrowBodyUH.visible = (const_var.callMesure && params.p_u_c && !door.entry_type?.includes("window")) == true;
      rightArrowBodyUH.position.set(params.p_w/+2+0.1, 4.8, (params.p_d/-2)+(parseInt(params.p_u_t)/2));
      rightArrowBodyUH.position.z = (params.p_r_w != "Close")? (params.p_d/-2)+(parseInt(params.p_u_t)/2):0;
      rightArrowBodyUH.rotation.x = Math.PI/2;
      cbDoorArrowsBody.add( rightArrowBodyUH );
    /* ---------------End------------------*/
    }
    /*Left Storage Right Side Horizantal Arrow for Door */
    var line = cbDoorArrowsBody.getObjectByName("LSFArrowBodyUH");
    if ( (line == undefined || line.visible == false) &&  door.entry_component_location == "lufend") {
     /* Fornt Horizantal Arrow for Left stoarage For Door */
     if (const_var.b_t_M_L.getObjectByName("LSFLArrowHeadUH") == undefined) {
      let LSFLArrowHeadUH = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
      LSFLArrowHeadUH.visible = (const_var.callMesure && params.cB_addStorage_check_left && !door.entry_type?.includes("window"))?true:false;
      LSFLArrowHeadUH.name = "LSFLArrowHeadUH";
      LSFLArrowHeadUH.material = LSFLArrowHeadUH.material.clone();
      LSFLArrowHeadUH.position.set(params.p_w/-2+0.11,  4.8, params.p_d/2+0.1);
      LSFLArrowHeadUH.rotation.z = Math.PI/2;
      cbDoorArrows.add(LSFLArrowHeadUH)
    }
    if (const_var.b_t_M_L.getObjectByName("LSFRArrowHeadUH") == undefined) {
      let LSFRArrowHeadUH = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
      LSFRArrowHeadUH.name = "LSFRArrowHeadUH"
      LSFRArrowHeadUH.material = LSFRArrowHeadUH.material.clone();
      LSFRArrowHeadUH.visible = (const_var.callMesure && params.cB_addStorage_check_left && !door.entry_type?.includes("window"))?true:false;
      LSFRArrowHeadUH.position.set(-(params.p_w/2 - params.cB_addStorage_left), 4.8, params.p_d/2+0.1);
      LSFRArrowHeadUH.position.x = params.p_f_w!= "Close" ?-(params.p_w/2 - params.cB_addStorage_left) : params.p_w/2-0.11;
      LSFRArrowHeadUH.rotation.z = Math.PI/-2;
      cbDoorArrows.add(LSFRArrowHeadUH)
    }
    let value = params.p_f_w!= "Close" ? params.cB_addStorage_left-0.2 : params.p_w-0.2;
    const LSFArrowBodyUHGeo = new THREE.CylinderGeometry( 0.025, 0.025, value, 80,100 );
    const LSFArrowBodyUHmaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
    const LSFArrowBodyUH = new THREE.Mesh( LSFArrowBodyUHGeo, LSFArrowBodyUHmaterial );
    LSFArrowBodyUH.name = "LSFArrowBodyUH"
    LSFArrowBodyUH.visible = (const_var.callMesure && params.cB_addStorage_check_left && !door.entry_type?.includes("window"))?true:false;
    LSFArrowBodyUH.position.set(-(params.p_w/2-params.cB_addStorage_left/2),4.8, params.p_d/2+0.1);
    LSFArrowBodyUH.position.x = params.p_f_w!= "Close" ? -(params.p_w/2-params.cB_addStorage_left/2) : 0; 
    LSFArrowBodyUH.rotation.z = Math.PI/2;
    cbDoorArrowsBody.add( LSFArrowBodyUH );
    /* ---------------End------------------*/
  }
  var line = cbDoorArrowsBody.getObjectByName("LSBArrowBodyUH");
  if ( (line == undefined || line.visible == false) &&  door.entry_component_location == "lubend") {
      /* Back Horizantal Arrow for Left stoarage for Door */
      if (const_var.b_t_M_L.getObjectByName("LSBLArrowHeadUH") == undefined) {
        let LSBLArrowHeadUH = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        LSBLArrowHeadUH.visible = (const_var.callMesure && params.cB_addStorage_check_left && !door.entry_type?.includes("window"))?true:false;
        LSBLArrowHeadUH.name = "LSBLArrowHeadUH";
        LSBLArrowHeadUH.material = LSBLArrowHeadUH.material.clone();
        LSBLArrowHeadUH.position.set(params.p_w/-2+0.11,  4.8, params.p_d/-2-0.1);
        LSBLArrowHeadUH.rotation.z = Math.PI/2;
        cbDoorArrows.add(LSBLArrowHeadUH)
      }
      if (const_var.b_t_M_L.getObjectByName("LSBRArrowHeadUH") == undefined) {
        let LSBRArrowHeadUH = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        LSBRArrowHeadUH.name = "LSBRArrowHeadUH"
        LSBRArrowHeadUH.material = LSBRArrowHeadUH.material.clone();
        LSBRArrowHeadUH.visible = (const_var.callMesure && params.cB_addStorage_check_left && !door.entry_type?.includes("window"))?true:false;
        LSBRArrowHeadUH.position.set(-(params.p_w/2 - params.cB_addStorage_left),  4.8, params.p_d/-2-0.1);
        LSBRArrowHeadUH.position.x =params.p_b_w != "Close" ? -(params.p_w/2 - params.cB_addStorage_left) : params.p_w/2-0.11;
        LSBRArrowHeadUH.rotation.z = Math.PI/-2;
        cbDoorArrows.add(LSBRArrowHeadUH)
      }
      let value = params.p_b_w!= "Close" ? params.cB_addStorage_left-0.2 : params.p_w-0.2;
      const LSBArrowBodyUHGeo = new THREE.CylinderGeometry( 0.025, 0.025, value,80,100 );
      const LSBArrowBodyUHmaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
      const LSBArrowBodyUH = new THREE.Mesh( LSBArrowBodyUHGeo, LSBArrowBodyUHmaterial );
      LSBArrowBodyUH.name = "LSBArrowBodyUH"
      LSBArrowBodyUH.visible = (const_var.callMesure && params.cB_addStorage_check_left && !door.entry_type?.includes("window"))?true:false;
      LSBArrowBodyUH.position.set(-(params.p_w/2-params.cB_addStorage_left/2), 4.8, params.p_d/-2-0.1);
      LSBArrowBodyUH.position.x = params.p_b_w != "Close" ? -(params.p_w/2-params.cB_addStorage_left/2) : 0;
      LSBArrowBodyUH.rotation.z = Math.PI/2;
      cbDoorArrowsBody.add( LSBArrowBodyUH );
      /* ---------------End------------------*/
    }
     /* Left Storage right Side Horizantal Arrow for Door*/
     var line = cbDoorArrowsBody.getObjectByName("LeftSideStorageBackArrow");
     if ( (line == undefined || line.visible == false) &&  door.entry_component_location == "rfend") {
      if (const_var.b_t_M_R.getObjectByName("LeftStorageSideFrontArrow") == undefined) {
        let LeftStorageSideFrontArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        LeftStorageSideFrontArrow.name = "LeftStorageSideFrontArrow"
        LeftStorageSideFrontArrow.material = LeftStorageSideFrontArrow.material.clone();
        LeftStorageSideFrontArrow.visible = (const_var.callMesure && !door.entry_type?.includes("window")) ? true : false;
        LeftStorageSideFrontArrow.position.set(-(params.p_w/2-params.cB_addStorage_left)+0.1, 4.8, params.p_d/-2);
        LeftStorageSideFrontArrow.rotation.x = Math.PI/-2;
        cbDoorArrows.add(LeftStorageSideFrontArrow)
      }
      if (const_var.b_t_M_R.getObjectByName("LeftSideStorageBackArrow") == undefined) {
        let LeftSideStorageBackArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        LeftSideStorageBackArrow.name = "LeftSideStorageBackArrow"
        LeftSideStorageBackArrow.material = LeftSideStorageBackArrow.material.clone();
        LeftSideStorageBackArrow.visible = (const_var.callMesure && !door.entry_type?.includes("window")) ? true : false;
        LeftSideStorageBackArrow.position.set(-(params.p_w/2-params.cB_addStorage_left)+0.1, 4.8, params.p_d/2);
        LeftSideStorageBackArrow.rotation.x = Math.PI/2;
        cbDoorArrows.add(LeftSideStorageBackArrow)
      }
  
      const leftStorageRSideArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.p_d-0.2,80,100 );
      // const leftStorageRSideArrowBodymaterial = new THREE.MeshBasicMaterial( {color: 0x17202A, } );
      const leftStorageRSideArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
      const leftStorageRSideArrowBody = new THREE.Mesh( leftStorageRSideArrowBodyGeo, leftStorageRSideArrowBodymaterial );
      leftStorageRSideArrowBody.name = "leftStorageRSideArrowBody"
      leftStorageRSideArrowBody.visible = (const_var.callMesure && !door.entry_type?.includes("window")) ? true : false;
      leftStorageRSideArrowBody.position.set(-(params.p_w/2-params.cB_addStorage_left), 4.8, 0.1);
      leftStorageRSideArrowBody.rotation.x = Math.PI/2;
      cbDoorArrowsBody.add( leftStorageRSideArrowBody );
    /* ---------------End------------------*/
    }
    var line = cbDoorArrowsBody.getObjectByName("RSFArrowBody");
    if ( (line == undefined || line.visible == false) &&  door.entry_component_location == "rufend") {
        /* Fornt Horizantal Arrow for Right stoarage For Door*/
   if (const_var.b_t_M_L.getObjectByName("RSFLArrowHead") == undefined) {
    let RSFLArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
    RSFLArrowHead.visible = (const_var.callMesure && params.cB_addStorage_check_right && !door.entry_type?.includes("window"))?true:false;
    RSFLArrowHead.name = "RSFLArrowHead";
    RSFLArrowHead.material = RSFLArrowHead.material.clone();
    RSFLArrowHead.position.set(params.p_w/2 - params.cB_addStorage_right, 4.8, params.p_d/2+0.1);
    RSFLArrowHead.position.x = params.p_f_w!= "Close" ? params.p_w/2 - params.cB_addStorage_right : params.p_w/-2+0.11;
    RSFLArrowHead.rotation.z = Math.PI/2;
    cbDoorArrows.add(RSFLArrowHead)
  }
  if (const_var.b_t_M_L.getObjectByName("RSFRArrowHead") == undefined) {
    let RSFRArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
    RSFRArrowHead.name = "RSFRArrowHead"
    RSFRArrowHead.material = RSFRArrowHead.material.clone();
    RSFRArrowHead.visible = (const_var.callMesure && params.cB_addStorage_check_right && !door.entry_type?.includes("window"))?true:false;
    RSFRArrowHead.position.set(params.p_w/2-0.11,4.8, params.p_d/2+0.1);
    RSFRArrowHead.rotation.z = Math.PI/-2;
    cbDoorArrows.add(RSFRArrowHead)
  }
  let value = params.p_f_w!= "Close" ? params.cB_addStorage_right-0.2 : params.p_w-0.2;
  const RSFArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, value,80,100 );
  const RSFArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
  const RSFArrowBody = new THREE.Mesh( RSFArrowBodyGeo, RSFArrowBodymaterial );
  RSFArrowBody.name = "RSFArrowBody"
  RSFArrowBody.visible = (const_var.callMesure && params.cB_addStorage_check_right && !door.entry_type?.includes("window"))?true:false;
  RSFArrowBody.position.set( params.p_w/2-params.cB_addStorage_right/2, 4.8, params.p_d/2+0.1);
  RSFArrowBody.position.x =  params.p_f_w!= "Close" ? params.p_w/2-params.cB_addStorage_right/2 : 0;
  RSFArrowBody.rotation.z = Math.PI/2;
  cbDoorArrowsBody.add( RSFArrowBody );
  /* ---------------End------------------*/
}
      var line = cbDoorArrowsBody.getObjectByName("RSBArrowBodyRHU");
      if ( (line == undefined || line.visible == false) &&  door.entry_component_location == "rubend") {
         /* Back Horizantal Arrow for Right stoarage For Door*/
         if (const_var.b_t_M_L.getObjectByName("RSBLArrowHeadRUH") == undefined) {
          let RSBLArrowHeadRUH = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
          RSBLArrowHeadRUH.visible = (const_var.callMesure && params.cB_addStorage_check_right && !door.entry_type?.includes("window"))?true:false;
          RSBLArrowHeadRUH.name = "RSBLArrowHeadRUH";
          RSBLArrowHeadRUH.material = RSBLArrowHeadRUH.material.clone();
          RSBLArrowHeadRUH.position.set(params.p_w/2 - params.cB_addStorage_right, 4.8, params.p_d/-2-0.1);
          RSBLArrowHeadRUH.position.x = params.p_b_w!= "Close" ? params.p_w/2 - params.cB_addStorage_right : params.p_w/-2+0.11;
          RSBLArrowHeadRUH.rotation.z = Math.PI/2;
          cbDoorArrows.add(RSBLArrowHeadRUH)
        }
        if (const_var.b_t_M_L.getObjectByName("RSBRArrowHeadRUH") == undefined) {
          let RSBRArrowHeadRUH = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
          RSBRArrowHeadRUH.name = "RSBRArrowHeadRUH"
          RSBRArrowHeadRUH.material = RSBRArrowHeadRUH.material.clone();
          RSBRArrowHeadRUH.visible = (const_var.callMesure && params.cB_addStorage_check_right && !door.entry_type?.includes("window"))?true:false;
          RSBRArrowHeadRUH.position.set(params.p_w/2-0.11, 4.8, params.p_d/-2-0.1);
          RSBRArrowHeadRUH.rotation.z = Math.PI/-2;
          cbDoorArrows.add(RSBRArrowHeadRUH)
        }
        let value = params.p_b_w!= "Close" ? params.cB_addStorage_right-0.2 : params.p_w-0.2;
        const RSBArrowBodyRHUGeo = new THREE.CylinderGeometry( 0.025, 0.025, value,80,100 );
        const RSBArrowBodyRHUmaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
        const RSBArrowBodyRHU = new THREE.Mesh( RSBArrowBodyRHUGeo, RSBArrowBodyRHUmaterial );
        RSBArrowBodyRHU.name = "RSBArrowBodyRHU"
        RSBArrowBodyRHU.visible = (const_var.callMesure && params.cB_addStorage_check_right && !door.entry_type?.includes("window"))?true:false;
        RSBArrowBodyRHU.position.set( params.p_w/2-params.cB_addStorage_right/2, 4.8, params.p_d/-2-0.1);
        RSBArrowBodyRHU.position.x =  params.p_b_w!= "Close" ? params.p_w/2-params.cB_addStorage_right/2 : 0;
        RSBArrowBodyRHU.rotation.z = Math.PI/2;
        cbDoorArrowsBody.add( RSBArrowBodyRHU );
        /* ---------------End------------------*/
      }
      /* Right Storage right Side Horizantal Arrow for Door*/
      var line = cbDoorArrowsBody.getObjectByName("rightStorageLSideArrowBody");
      if ( (line == undefined || line.visible == false) &&  door.entry_component_location == "lfend") {
        if (const_var.b_t_M_R.getObjectByName("rightStorageLideFrontArrow") == undefined) {
          let rightStorageLideFrontArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
          rightStorageLideFrontArrow.name = "rightStorageLideFrontArrow"
          rightStorageLideFrontArrow.material = rightStorageLideFrontArrow.material.clone();
          rightStorageLideFrontArrow.visible = (const_var.callMesure && !door.entry_type?.includes("window")) ? true : false;
          rightStorageLideFrontArrow.position.set(params.p_w /2-params.cB_addStorage_right, 4.8, params.p_d/-2);
          rightStorageLideFrontArrow.rotation.x = Math.PI/-2;
          cbDoorArrows.add(rightStorageLideFrontArrow)
        }
        if (const_var.b_t_M_R.getObjectByName("LeftSideStorageBackArrow") == undefined) {
          let LeftSideStorageBackArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
          LeftSideStorageBackArrow.name = "LeftSideStorageBackArrow"
          LeftSideStorageBackArrow.material = LeftSideStorageBackArrow.material.clone();
          LeftSideStorageBackArrow.visible = (const_var.callMesure && !door.entry_type?.includes("window")) ? true : false;
          LeftSideStorageBackArrow.position.set(params.p_w /2-params.cB_addStorage_right, 4.8, params.p_d/2);
          LeftSideStorageBackArrow.rotation.x = Math.PI/+2;
          cbDoorArrows.add(LeftSideStorageBackArrow)
        }
    
        const rightStorageLSideArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.p_d-0.2,80,100 );
        // const rightStorageLSideArrowBodymaterial = new THREE.MeshBasicMaterial( {color: 0x17202A, } );
        const rightStorageLSideArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
        const rightStorageLSideArrowBody = new THREE.Mesh( rightStorageLSideArrowBodyGeo, rightStorageLSideArrowBodymaterial );
        rightStorageLSideArrowBody.name = "rightStorageLSideArrowBody"
        rightStorageLSideArrowBody.visible = (const_var.callMesure && !door.entry_type?.includes("window")) ? true : false;
        rightStorageLSideArrowBody.position.set(params.p_w /2-params.cB_addStorage_right, 4.8, 0);
        rightStorageLSideArrowBody.rotation.x = Math.PI/2;
        cbDoorArrowsBody.add( rightStorageLSideArrowBody );
      /* ---------------End------------------*/
      }
  // }
})
}
export const centerVerticalDoorArrow = (doorPosition,doorHeight,wallName,uniqueId) => {

      // if ("undefined" != typeof const_var.scene.getObjectByName("doorArrows"+uniqueId))const_var.scene.remove(const_var.scene.getObjectByName("doorArrows"+uniqueId));
      if ("undefined" != typeof const_var.scene.getObjectByName("fDoorArrows"))const_var.scene.remove(const_var.scene.getObjectByName("fDoorArrows"));
      
      const fDoorArrows = new THREE.Group();
        fDoorArrows.name = "fDoorArrows"
        const_var.scene.add(fDoorArrows);
      if( doorPosition.x < 3 && doorPosition.x > -3){  
        let roofMiddleHeight = {
          "1":{"6":0.25,"7":0.29165,"8":0.33335,"9":0.375,"10":0.41665,"11":0.45835,"12":0.5,"13":0.5417,"14":0.5833,"15":0.6250,"16":0.6667,"17":0.7083,"18":0.7500,"19":0.7917,"20":0.8333,"21":0.8750,"22":0.9167,"23":0.9583,"24":1,"25":1.0417,"26":1.0833,"27":1.1250,"28":1.1667,"29":1.2083,"30":1.2500,"31":1.2917,"32":1.3333,"33":1.3750,"34":1.4167,"35":1.4583,"36":1.5000,"37":1.5417,"38":1.5833,"39":1.6250,"40":1.6667,"41":1.7083,"42":1.7500,"43":1.7917,"44":1.8333,"45":1.8750,"46":1.9167,"47":1.9583,"48":2.00,"49":2.0417,"50":2.0833,"51":2.1250,"52":2.1667,"53":2.2083,"54":2.2500,"55":2.2917,"56":2.3333,"57":2.3750,"58":2.4167,"59":2.4583,"60":2.5000,"61":2.5417,"62":2.5833,"63":2.6250,"64":2.6667,"65":2.7083,"66":2.7500,"67":2.7917,"68":2.8333,"69":2.8750,"70":2.9167,"71":2.9583,"72":3.00,"73":3.0417,"74":3.0833,"75":3.1250,"76":3.1667,"77":3.2083,"78":3.2500,"79":3.2917,"80":3.3330},
          "2":{"6":0.50,"7":0.58335,"8":0.66665,"9":0.750,"10":0.83335,"11":0.91665,"12":1.0,"13":1.0833,"14":1.1667,"15":1.2500,"16":1.3333,"17":1.4167,"18":1.5000,"19":1.5833,"20":1.6667,"21":1.7500,"22":1.8333,"23":1.9167,"24":2,"25":2.0833,"26":2.1667,"27":2.2500,"28":2.3333,"29":2.4167,"30":2.5000,"31":2.5833,"32":2.6667,"33":2.7500,"34":2.8333,"35":2.9167,"36":3.0000,"37":3.0833,"38":3.1667,"39":3.2500,"40":3.3330,"41":3.4170,"42":3.5000,"43":3.5830,"44":3.6670,"45":3.7500,"46":3.8330,"47":3.9170,"48":4.00,"49":4.0830,"50":4.1670,"51":4.2500,"52":4.3330,"53":4.4170,"54":4.5000,"55":4.5830,"56":4.6670,"57":4.7500,"58":4.8330,"59":4.9170,"60":5.0000,"61":5.0830,"62":5.1670,"63":5.2500,"64":5.3330,"65":5.4170,"66":5.5000,"67":5.5830,"68":5.6670,"69":5.7500,"70":5.8330,"71":5.9170,"72":6.00,"73":6.0830,"74":6.1670,"75":6.2500,"76":6.3330,"77":6.4170,"78":6.5000,"79":6.5830,"80":6.6670},
          "3":{"6":0.75,"7":0.87500,"8":1.00000,"9":1.125,"10":1.25000,"11":1.37500,"12":1.5,"13":1.6250,"14":1.7500,"15":1.8750,"16":2.0000,"17":2.1250,"18":2.2500,"19":2.3750,"20":2.5000,"21":2.6250,"22":2.7500,"23":2.8750,"24":3,"25":3.1250,"26":3.2500,"27":3.3750,"28":3.5000,"29":3.6250,"30":3.7500,"31":3.8750,"32":4.0000,"33":4.1250,"34":4.2500,"35":4.3750,"36":4.5000,"37":4.6250,"38":4.7500,"39":4.8750,"40":5.0000,"41":5.1250,"42":5.2500,"43":5.3750,"44":5.5000,"45":5.6250,"46":5.7500,"47":5.8750,"48":6.00,"49":6.1250,"50":6.2500,"51":6.3750,"52":6.5000,"53":6.6250,"54":6.7500,"55":6.8750,"56":7.0000,"57":7.1250,"58":7.2500,"59":7.3750,"60":7.5000,"61":7.6250,"62":7.7500,"63":7.8750,"64":8.0000,"65":8.1250,"66":8.2500,"67":8.3750,"68":8.5000,"69":8.6250,"70":8.7500,"71":8.8750,"72":9.00,"73":9.1250,"74":9.2500,"75":9.3750,"76":9.5000,"77":9.6250,"78":9.7500,"79":9.8750,"80":10.000},
          "4":{"6":1.00,"7":1.16665,"8":1.33335,"9":1.500,"10":1.66650,"11":1.83350,"12":2.0,"13":2.1667,"14":2.3333,"15":2.5000,"16":2.6667,"17":2.8333,"18":3.0000,"19":3.1667,"20":3.3330,"21":3.5000,"22":3.6670,"23":3.8330,"24":4,"25":4.1670,"26":4.3330,"27":4.5000,"28":4.6670,"29":4.8330,"30":5.0000,"31":5.1670,"32":5.3330,"33":5.5000,"34":5.6670,"35":5.8330,"36":6.0000,"37":6.1670,"38":6.3330,"39":6.5000,"40":6.6670,"41":6.8330,"42":7.0000,"43":7.1670,"44":7.3330,"45":7.5000,"46":7.6670,"47":7.8330,"48":8.00,"49":8.1670,"50":8.3330,"51":8.5000,"52":8.6670,"53":8.8330,"54":9.0000,"55":9.1670,"56":9.3330,"57":9.5000,"58":9.6670,"59":9.8330,"60":10.000,"61":10.167,"62":10.333,"63":10.500,"64":10.667,"65":10.833,"66":11.000,"67":11.167,"68":11.333,"69":11.500,"70":11.667,"71":11.833,"72":12.0,"73":12.167,"74":12.333,"75":12.500,"76":12.667,"77":12.833,"78":13.000,"79":13.167,"80":13.333},
          "5":{"6":1.25,"7":1.45835,"8":1.66650,"9":1.875,"10":2.08350,"11":2.29150,"12":2.5,"13":2.7083,"14":2.9167,"15":3.1250,"16":3.3330,"17":3.5420,"18":3.7500,"19":3.9580,"20":4.1670,"21":4.3750,"22":4.5830,"23":4.7920,"24":5,"25":5.2080,"26":5.4170,"27":5.6250,"28":5.8330,"29":6.0420,"30":6.2500,"31":6.4580,"32":6.6670,"33":6.8750,"34":7.0830,"35":7.2920,"36":7.5000,"37":7.7080,"38":7.9170,"39":8.1250,"40":8.3330,"41":8.5420,"42":8.7500,"43":8.9580,"44":9.1670,"45":9.3750,"46":9.5830,"47":9.7920,"48":10.0,"49":10.208,"50":10.417,"51":10.625,"52":10.833,"53":11.042,"54":11.250,"55":11.458,"56":11.667,"57":11.875,"58":12.083,"59":12.292,"60":12.500,"61":12.708,"62":12.917,"63":13.125,"64":13.333,"65":13.542,"66":13.750,"67":13.958,"68":14.167,"69":14.375,"70":14.583,"71":14.792,"72":15.0,"73":15.208,"74":15.417,"75":15.625,"76":15.833,"77":16.042,"78":16.250,"79":16.458,"80":16.667},
          "6":{"6":1.50,"7":1.75000,"8":2.00000,"9":2.250,"10":2.50000,"11":2.75000,"12":3.0,"13":3.2500,"14":3.5000,"15":3.7500,"16":4.0000,"17":4.2500,"18":4.5000,"19":4.7500,"20":5.0000,"21":5.2500,"22":5.5000,"23":5.7500,"24":6,"25":6.2500,"26":6.5000,"27":6.7500,"28":7.0000,"29":7.2500,"30":7.5000,"31":7.7500,"32":8.0000,"33":8.2500,"34":8.5000,"35":8.7500,"36":9.0000,"37":9.2500,"38":9.5000,"39":9.7500,"40":10.000,"41":10.250,"42":10.500,"43":10.750,"44":11.000,"45":11.250,"46":11.500,"47":11.750,"48":12.0,"49":12.250,"50":12.500,"51":12.750,"52":13.000,"53":13.250,"54":13.500,"55":13.750,"56":14.000,"57":14.250,"58":14.500,"59":14.750,"60":15.000,"61":15.250,"62":15.500,"63":15.750,"64":16.000,"65":16.250,"66":16.500,"67":16.750,"68":17.000,"69":17.250,"70":17.500,"71":17.750,"72":18.0,"73":18.250,"74":18.500,"75":18.750,"76":19.000,"77":19.250,"78":19.500,"79":19.750,"80":20.000}
        };
        // let  doorHeight = parseInt(doorObj.actual_val.split("X")[1]);
        const_var.entry_points.map((wall , i) => {

          //if(const_var.callMesure == true){

          if (wall.entry_component_location == "fend"){
            if (const_var.b_t_M_R.getObjectByName("CFUArrowHead4RD") == undefined) {
              let CFUArrowHead4RD = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
              CFUArrowHead4RD.name = "CFUArrowHead4RD"+uniqueId
              CFUArrowHead4RD.material = CFUArrowHead4RD.material.clone();
              CFUArrowHead4RD.visible = ((doorPosition.x < 0.08 && doorPosition.x > -0.08) && wallName == "c_b_f_w"  )?true:false;
              CFUArrowHead4RD.position.set(0, params.singleSlope? params.p_h-0.2: (params.p_h+roofMiddleHeight[params.p_r_p][params.p_w])-0.2, params.p_d/2+0.15);
              if (params.p_r_s == 1) CFUArrowHead4RD.position.y = params.p_h+roofMiddleHeight[params.p_r_p][params.p_w]+0.28
              CFUArrowHead4RD.rotation.y = Math.PI/2;
              fDoorArrows.add(CFUArrowHead4RD)
              }
              if (const_var.b_t_M_R.getObjectByName("CFDArrowHead4D") == undefined) {
              let CFDArrowHead4D = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
              CFDArrowHead4D.name = "CFDArrowHead4D"+uniqueId
              CFDArrowHead4D.material = CFDArrowHead4D.material.clone();
              CFDArrowHead4D.visible = ( (doorPosition.x < 0.08 && doorPosition.x > -0.08) && wallName == "c_b_f_w"  )?true:false;
              CFDArrowHead4D.position.set(0, doorHeight+0.12, params.p_d/2+0.15);
              CFDArrowHead4D.rotation.z = Math.PI;
              fDoorArrows.add(CFDArrowHead4D)
              }
  
              let CFHArrowBody4RDScale = params.p_r_s !=1 ? params.singleSlope? params.p_h-doorHeight-0.4 : ((params.p_h+roofMiddleHeight[params.p_r_p][params.p_w])-doorHeight)-0.4 :((params.p_h+roofMiddleHeight[params.p_r_p][params.p_w])-doorHeight)
              let CFHArrowBody4RDPosY = params.p_r_s !=1 ? params.singleSlope? (doorHeight +(params.p_h-doorHeight)/2)-0.1 :((doorHeight) +((params.p_h+roofMiddleHeight[params.p_r_p][params.p_w])-doorHeight)/2)-0.1 : ((doorHeight) +((params.p_h+roofMiddleHeight[params.p_r_p][params.p_w])-doorHeight)/2)+0.2
              const CFHArrowBody4RDGeo = new THREE.CylinderGeometry( 0.025, 0.025,CFHArrowBody4RDScale,80,100 );
              const CFHArrowBody4RDmaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
              const CFHArrowBody4RD = new THREE.Mesh( CFHArrowBody4RDGeo, CFHArrowBody4RDmaterial );
              CFHArrowBody4RD.name = "CFHArrowBody4RD"+uniqueId
              CFHArrowBody4RD.visible = ( (doorPosition.x < 0.08 && doorPosition.x > -0.08) && wallName == "c_b_f_w" )?true:false;
              CFHArrowBody4RD.position.set(0, CFHArrowBody4RDPosY, params.p_d/2+0.15);
              CFHArrowBody4RD.rotation.y = Math.PI/2;
              fDoorArrows.add( CFHArrowBody4RD );
          }
        //}
        })
    }
}
export const centerVerticalDoorArrowB = (doorPosition,doorHeight,wallName,uniqueId) => {
  
      if ("undefined" != typeof const_var.scene.getObjectByName("bDoorArrows"))const_var.scene.remove(const_var.scene.getObjectByName("bDoorArrows"));
      
      const bDoorArrows = new THREE.Group();
        bDoorArrows.name = "bDoorArrows"
        const_var.scene.add(bDoorArrows);
      if( doorPosition.x < 3 && doorPosition.x > -3){
        let roofMiddleHeight = {
          "1":{"6":0.25,"7":0.29165,"8":0.33335,"9":0.375,"10":0.41665,"11":0.45835,"12":0.5,"13":0.5417,"14":0.5833,"15":0.6250,"16":0.6667,"17":0.7083,"18":0.7500,"19":0.7917,"20":0.8333,"21":0.8750,"22":0.9167,"23":0.9583,"24":1,"25":1.0417,"26":1.0833,"27":1.1250,"28":1.1667,"29":1.2083,"30":1.2500,"31":1.2917,"32":1.3333,"33":1.3750,"34":1.4167,"35":1.4583,"36":1.5000,"37":1.5417,"38":1.5833,"39":1.6250,"40":1.6667,"41":1.7083,"42":1.7500,"43":1.7917,"44":1.8333,"45":1.8750,"46":1.9167,"47":1.9583,"48":2.00,"49":2.0417,"50":2.0833,"51":2.1250,"52":2.1667,"53":2.2083,"54":2.2500,"55":2.2917,"56":2.3333,"57":2.3750,"58":2.4167,"59":2.4583,"60":2.5000,"61":2.5417,"62":2.5833,"63":2.6250,"64":2.6667,"65":2.7083,"66":2.7500,"67":2.7917,"68":2.8333,"69":2.8750,"70":2.9167,"71":2.9583,"72":3.00,"73":3.0417,"74":3.0833,"75":3.1250,"76":3.1667,"77":3.2083,"78":3.2500,"79":3.2917,"80":3.3330},
          "2":{"6":0.50,"7":0.58335,"8":0.66665,"9":0.750,"10":0.83335,"11":0.91665,"12":1.0,"13":1.0833,"14":1.1667,"15":1.2500,"16":1.3333,"17":1.4167,"18":1.5000,"19":1.5833,"20":1.6667,"21":1.7500,"22":1.8333,"23":1.9167,"24":2,"25":2.0833,"26":2.1667,"27":2.2500,"28":2.3333,"29":2.4167,"30":2.5000,"31":2.5833,"32":2.6667,"33":2.7500,"34":2.8333,"35":2.9167,"36":3.0000,"37":3.0833,"38":3.1667,"39":3.2500,"40":3.3330,"41":3.4170,"42":3.5000,"43":3.5830,"44":3.6670,"45":3.7500,"46":3.8330,"47":3.9170,"48":4.00,"49":4.0830,"50":4.1670,"51":4.2500,"52":4.3330,"53":4.4170,"54":4.5000,"55":4.5830,"56":4.6670,"57":4.7500,"58":4.8330,"59":4.9170,"60":5.0000,"61":5.0830,"62":5.1670,"63":5.2500,"64":5.3330,"65":5.4170,"66":5.5000,"67":5.5830,"68":5.6670,"69":5.7500,"70":5.8330,"71":5.9170,"72":6.00,"73":6.0830,"74":6.1670,"75":6.2500,"76":6.3330,"77":6.4170,"78":6.5000,"79":6.5830,"80":6.6670},
          "3":{"6":0.75,"7":0.87500,"8":1.00000,"9":1.125,"10":1.25000,"11":1.37500,"12":1.5,"13":1.6250,"14":1.7500,"15":1.8750,"16":2.0000,"17":2.1250,"18":2.2500,"19":2.3750,"20":2.5000,"21":2.6250,"22":2.7500,"23":2.8750,"24":3,"25":3.1250,"26":3.2500,"27":3.3750,"28":3.5000,"29":3.6250,"30":3.7500,"31":3.8750,"32":4.0000,"33":4.1250,"34":4.2500,"35":4.3750,"36":4.5000,"37":4.6250,"38":4.7500,"39":4.8750,"40":5.0000,"41":5.1250,"42":5.2500,"43":5.3750,"44":5.5000,"45":5.6250,"46":5.7500,"47":5.8750,"48":6.00,"49":6.1250,"50":6.2500,"51":6.3750,"52":6.5000,"53":6.6250,"54":6.7500,"55":6.8750,"56":7.0000,"57":7.1250,"58":7.2500,"59":7.3750,"60":7.5000,"61":7.6250,"62":7.7500,"63":7.8750,"64":8.0000,"65":8.1250,"66":8.2500,"67":8.3750,"68":8.5000,"69":8.6250,"70":8.7500,"71":8.8750,"72":9.00,"73":9.1250,"74":9.2500,"75":9.3750,"76":9.5000,"77":9.6250,"78":9.7500,"79":9.8750,"80":10.000},
          "4":{"6":1.00,"7":1.16665,"8":1.33335,"9":1.500,"10":1.66650,"11":1.83350,"12":2.0,"13":2.1667,"14":2.3333,"15":2.5000,"16":2.6667,"17":2.8333,"18":3.0000,"19":3.1667,"20":3.3330,"21":3.5000,"22":3.6670,"23":3.8330,"24":4,"25":4.1670,"26":4.3330,"27":4.5000,"28":4.6670,"29":4.8330,"30":5.0000,"31":5.1670,"32":5.3330,"33":5.5000,"34":5.6670,"35":5.8330,"36":6.0000,"37":6.1670,"38":6.3330,"39":6.5000,"40":6.6670,"41":6.8330,"42":7.0000,"43":7.1670,"44":7.3330,"45":7.5000,"46":7.6670,"47":7.8330,"48":8.00,"49":8.1670,"50":8.3330,"51":8.5000,"52":8.6670,"53":8.8330,"54":9.0000,"55":9.1670,"56":9.3330,"57":9.5000,"58":9.6670,"59":9.8330,"60":10.000,"61":10.167,"62":10.333,"63":10.500,"64":10.667,"65":10.833,"66":11.000,"67":11.167,"68":11.333,"69":11.500,"70":11.667,"71":11.833,"72":12.0,"73":12.167,"74":12.333,"75":12.500,"76":12.667,"77":12.833,"78":13.000,"79":13.167,"80":13.333},
          "5":{"6":1.25,"7":1.45835,"8":1.66650,"9":1.875,"10":2.08350,"11":2.29150,"12":2.5,"13":2.7083,"14":2.9167,"15":3.1250,"16":3.3330,"17":3.5420,"18":3.7500,"19":3.9580,"20":4.1670,"21":4.3750,"22":4.5830,"23":4.7920,"24":5,"25":5.2080,"26":5.4170,"27":5.6250,"28":5.8330,"29":6.0420,"30":6.2500,"31":6.4580,"32":6.6670,"33":6.8750,"34":7.0830,"35":7.2920,"36":7.5000,"37":7.7080,"38":7.9170,"39":8.1250,"40":8.3330,"41":8.5420,"42":8.7500,"43":8.9580,"44":9.1670,"45":9.3750,"46":9.5830,"47":9.7920,"48":10.0,"49":10.208,"50":10.417,"51":10.625,"52":10.833,"53":11.042,"54":11.250,"55":11.458,"56":11.667,"57":11.875,"58":12.083,"59":12.292,"60":12.500,"61":12.708,"62":12.917,"63":13.125,"64":13.333,"65":13.542,"66":13.750,"67":13.958,"68":14.167,"69":14.375,"70":14.583,"71":14.792,"72":15.0,"73":15.208,"74":15.417,"75":15.625,"76":15.833,"77":16.042,"78":16.250,"79":16.458,"80":16.667},
          "6":{"6":1.50,"7":1.75000,"8":2.00000,"9":2.250,"10":2.50000,"11":2.75000,"12":3.0,"13":3.2500,"14":3.5000,"15":3.7500,"16":4.0000,"17":4.2500,"18":4.5000,"19":4.7500,"20":5.0000,"21":5.2500,"22":5.5000,"23":5.7500,"24":6,"25":6.2500,"26":6.5000,"27":6.7500,"28":7.0000,"29":7.2500,"30":7.5000,"31":7.7500,"32":8.0000,"33":8.2500,"34":8.5000,"35":8.7500,"36":9.0000,"37":9.2500,"38":9.5000,"39":9.7500,"40":10.000,"41":10.250,"42":10.500,"43":10.750,"44":11.000,"45":11.250,"46":11.500,"47":11.750,"48":12.0,"49":12.250,"50":12.500,"51":12.750,"52":13.000,"53":13.250,"54":13.500,"55":13.750,"56":14.000,"57":14.250,"58":14.500,"59":14.750,"60":15.000,"61":15.250,"62":15.500,"63":15.750,"64":16.000,"65":16.250,"66":16.500,"67":16.750,"68":17.000,"69":17.250,"70":17.500,"71":17.750,"72":18.0,"73":18.250,"74":18.500,"75":18.750,"76":19.000,"77":19.250,"78":19.500,"79":19.750,"80":20.000}
        };
        const_var.entry_points.map((wall , i) => {
          //if(const_var.callMesure == true){
          // if (wallName == "c_b_b_w"){
            if (wall.entry_component_location == "bend"){
            if (const_var.b_t_M_R.getObjectByName("CBUArrowHead4RD") == undefined) {
              let CBUArrowHead4RD = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
              CBUArrowHead4RD.name = "CBUArrowHead4RD"+uniqueId;
              CBUArrowHead4RD.material = CBUArrowHead4RD.material.clone();
              CBUArrowHead4RD.visible = ( (doorPosition.x < 0.08 && doorPosition.x > -0.08) && wallName == "c_b_b_w" )?true:false;
              CBUArrowHead4RD.position.set(0, params.singleSlope? params.p_h-0.2:(params.p_h+roofMiddleHeight[params.p_r_p][params.p_w])-0.2, params.p_d/-2-0.15);
              if (params.p_r_s == 1) CBUArrowHead4RD.position.y = params.p_h+roofMiddleHeight[params.p_r_p][params.p_w]+0.28
              CBUArrowHead4RD.rotation.y = Math.PI/2;
              bDoorArrows.add(CBUArrowHead4RD)
              }
              if (const_var.b_t_M_R.getObjectByName("CBDArrowHead4D") == undefined) {
              let CBDArrowHead4D = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
              CBDArrowHead4D.name = "CBDArrowHead4D"+uniqueId;
              CBDArrowHead4D.material = CBDArrowHead4D.material.clone();
              CBDArrowHead4D.visible = ( (doorPosition.x < 0.08 && doorPosition.x > -0.08) && wallName == "c_b_b_w" )?true:false;
              CBDArrowHead4D.position.set(0, doorHeight+0.12, params.p_d/-2-0.15);
              CBDArrowHead4D.rotation.z = Math.PI;
                bDoorArrows.add(CBDArrowHead4D)
              }
          
              let CBHArrowBody4RDScale = params.p_r_s !=1 ? params.singleSlope? params.p_h-doorHeight-0.4 :((params.p_h+roofMiddleHeight[params.p_r_p][params.p_w])-doorHeight)-0.4 :((params.p_h+roofMiddleHeight[params.p_r_p][params.p_w])-doorHeight)
              let CBHArrowBody4RDPosY = params.p_r_s !=1 ? params.singleSlope? (doorHeight +(params.p_h-doorHeight)/2)-0.1 :((doorHeight) +((params.p_h+roofMiddleHeight[params.p_r_p][params.p_w])-doorHeight)/2)-0.1 : ((doorHeight) +((params.p_h+roofMiddleHeight[params.p_r_p][params.p_w])-doorHeight)/2)+0.2
              const CBHArrowBody4RDGeo = new THREE.CylinderGeometry( 0.025, 0.025,CBHArrowBody4RDScale,80,100 );
              const CBHArrowBody4RDmaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
              const CBHArrowBody4RD = new THREE.Mesh( CBHArrowBody4RDGeo, CBHArrowBody4RDmaterial );
              CBHArrowBody4RD.name = "CBHArrowBody4RD"+uniqueId;
              CBHArrowBody4RD.visible = ( (doorPosition.x < 0.08 && doorPosition.x > -0.08) && wallName == "c_b_b_w"  )?true:false;
              CBHArrowBody4RD.position.set(0,CBHArrowBody4RDPosY, params.p_d/-2-0.15);
              CBHArrowBody4RD.rotation.y = Math.PI/2;
                bDoorArrows.add( CBHArrowBody4RD );
          }
        //}
        })
    }
}

function createArrowHead (geoName, positionX, positionY, positionZ, rotationX, rotationY, rotationZ, visiblity, group ) {
  if (const_var.b_t_M_R.getObjectByName(geoName) == undefined) {
    const geometry = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        geometry.name = geoName
        geometry.visible =visiblity ? true : false;
        geometry.position.set(positionX, positionY, positionZ);
        geometry.rotation.set(rotationX, rotationY, rotationZ,);
    group.add(geometry)
  }
} 

function createArrowBody (geoName, positionX, positionY, positionZ, rotationX, rotationY, rotationZ, visiblity, group, bodyLength ) {
  const geometry = new THREE.CylinderGeometry( 0.025, 0.025, bodyLength-0.2 , 80,100 );
  const material = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
  const mesh = new THREE.Mesh( geometry, material );
        mesh.name = geoName
        mesh.visible =visiblity ? true : false;
        mesh.position.set(positionX, positionY, positionZ);
        mesh.rotation.set(rotationX, rotationY, rotationZ,);
  group.add(mesh)
} 

function createText (geoName, positionX, positionY, positionZ, rotationX,rotationY,rotationZ, visiblity,group,dimension ) {
  const geometry = new THREE.TextGeometry(dimension+"' L", {
    font:const_var.font, size: 0.4, height: 0.02,
    curveSegments: 3, bevelEnabled: true,bevelThickness: 0.001,
    bevelSize: 0, bevelSegments: 3,
  } );
  const material = new THREE.MeshPhongMaterial({color: 0x17202A});

  const mesh = new THREE.Mesh(geometry, material);
        mesh.name = geoName
        mesh.visible = visiblity ? true : false;
        mesh.position.set(positionX, positionY, positionZ,);
        mesh.rotation.set(rotationX, rotationY, rotationZ,);
  group.add(mesh)
} 
