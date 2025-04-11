import React, { Component } from 'react';
import * as THREE  from "three";
import { params, const_var} from '../redux/reducers/reducer';


export const addLegsLeanToFront = (leanToCheck)=>{

	//var leanToleftPart = (const_var.scene.getObjectByName("b_t_M_F_t_F").children = []);
  
	//scale of lean to regular leg according to hight
	var scaleLegR = {"6":0.23, "7":0.28,"8":0.34,"9":0.40,"10":0.45,"11":0.5,"12":0.55,"13":0.6};
  
	if (leanToCheck) {
	  var leanToLeg = params.p_d /-2 - params.leanF_p_w;
  
	  //Needs Create Globle Varible
	  var legDistance = 5;
	  var disFor2Legs = 0.2;
	  var disForVShapLegs = 0.55;
	  var hightFor2Legs = params.lean_p_h;
	  var hightForVShapLegs = params.lean_p_h - 0.5;
	  if (const_var.legstype == "ladder") {
		disFor2Legs = 0.6; //0.48;
		////hightFor2Legs = params.p_h + params.p_r_p/params.p_w - 0.08;
		hightFor2Legs = params.p_h + params.p_r_p / 20 - 0.08;
	  }
  
	  //Left Lean To Left Front Leg
	  var frontLeanTolegGeo = new THREE.BoxGeometry(0.31, 1, 0.2);
	  var frontLeanTolegMaterial = new THREE.MeshBasicMaterial({ color: 0xc9c6c6,side: THREE.DoubleSide,});
	  var frontLeanToFrontLeg = new THREE.Mesh(frontLeanTolegGeo,frontLeanTolegMaterial);
	  frontLeanToFrontLeg.name = "frontLeanToFrontLeg";
	  frontLeanToFrontLeg.scale.set(0.5, params.leanF_p_h, 1);
	  frontLeanToFrontLeg.position.set(leanToLeg + 0.08,params.leanF_p_h / 2,params.leanF_p_d / 2 - 0.12);
	  frontLeanToFrontLeg.visible = (params.p_r_s != "1")?true:false;
	  const_var.b_t_M_F_t_F.add(frontLeanToFrontLeg);
  
	  //regular leg anand
	  var leanToleftFrontlegGeoR = new THREE.BoxGeometry(0.31, 0.95, 0.2);
	  var leanToleftFrontlegMaterialR = new THREE.MeshBasicMaterial({ color: 0xc9c6c6,side: THREE.DoubleSide});
	  var frontLeanToFrontLegR = new THREE.Mesh(leanToleftFrontlegGeoR,leanToleftFrontlegMaterialR);
	  frontLeanToFrontLegR.name = "frontLeanToFrontLegR";
	  frontLeanToFrontLegR.scale.set(0.5, params.leanF_p_h + scaleLegR[params.leanF_p_h], 1);
	  frontLeanToFrontLegR.position.set(leanToLeg + 0.08,(params.leanF_p_h / 2)-0.1,params.leanF_p_d / 2 - 0.12);
	  frontLeanToFrontLegR.visible = (params.p_r_s == "1")?true:false;
	  const_var.b_t_M_F_t_F.add(frontLeanToFrontLegR);
	  //regular leg anand
  
	   //regular leg anand
	   var frontLeanToFrontlegTrimGeo = new THREE.BoxGeometry(0.31, 0.95, 0.2);
	   var frontLeanToFrontlegTrimMaterial = new THREE.MeshBasicMaterial({ color: 0x0E6655,side: THREE.DoubleSide});
	   var frontLeanToFrontLegTrim = new THREE.Mesh(frontLeanToFrontlegTrimGeo,frontLeanToFrontlegTrimMaterial);
	   frontLeanToFrontLegTrim.name = "frontLeanToFrontLegTrim";
	   frontLeanToFrontLegTrim.scale.set(0.6, params.leanF_p_h + scaleLegR[params.leanF_p_h], 0.5);
	   frontLeanToFrontLegTrim.position.set(leanToLeg + 0.06,(params.leanF_p_h / 2)-0.1,params.leanF_p_d / 2);
	   frontLeanToFrontLegTrim.visible = (params.p_r_s == "1")?true:false;
	   const_var.b_t_M_F_t_F.add(frontLeanToFrontLegTrim);
	   //regular leg anand
  
	   //regular leg anand
	   var frontLeanToBacklegTrimGeo = new THREE.BoxGeometry(0.31, 0.95, 0.2);
	   var frontLeanToBacklegTrimMaterial = new THREE.MeshBasicMaterial({ color: 0x0E6655,side: THREE.DoubleSide});
	   var frontLeanToBackLegTrim = new THREE.Mesh(frontLeanToBacklegTrimGeo,frontLeanToBacklegTrimMaterial);
	   frontLeanToBackLegTrim.name = "frontLeanToBackLegTrim";
	   frontLeanToBackLegTrim.scale.set(0.6, params.leanF_p_h + scaleLegR[params.leanF_p_h], 0.5);
	   frontLeanToBackLegTrim.position.set(leanToLeg + 0.06,(params.leanF_p_h / 2)-0.1,params.leanF_p_d / -2);
	   frontLeanToBackLegTrim.visible = (params.p_r_s == "1")?true:false;
	   const_var.b_t_M_F_t_F.add(frontLeanToBackLegTrim);
	   //regular leg anand
	  
	  //Left Leant To Left Back Leg
	  var frontLeanToBackLeg = new THREE.Mesh(frontLeanTolegGeo,frontLeanTolegMaterial);
	  frontLeanToBackLeg.scale.set(0.5, params.leanF_p_h, 1);
    frontLeanToBackLeg.material = frontLeanToBackLeg.material.clone();
	  frontLeanToBackLeg.position.set(leanToLeg + 0.08, params.leanF_p_h / 2,params.leanF_p_d / -2 + 0.12);
	  frontLeanToBackLeg.name = "frontLeanToBackLeg";
	  frontLeanToBackLeg.visible = (params.p_r_s != "1")?true:false;
	  const_var.b_t_M_F_t_F.add(frontLeanToBackLeg);
  
	  //regular leg anand
	  var frontLeanToBacklegGeoR = new THREE.BoxGeometry(0.31, 0.95, 0.2);
	  var frontLeanToBacklegMaterialR = new THREE.MeshBasicMaterial({ color: 0xc9c6c6,side: THREE.DoubleSide,});
	  var frontLeanToBackLegR = new THREE.Mesh(frontLeanToBacklegGeoR,frontLeanToBacklegMaterialR);
	  frontLeanToBackLegR.name = "frontLeanToBackLegR";
	  frontLeanToBackLegR.scale.set(0.5, params.leanF_p_h+ scaleLegR[params.leanF_p_h], 1);
	  frontLeanToBackLegR.position.set(leanToLeg + 0.08,(params.leanF_p_h / 2)-0.1,params.leanF_p_d /-2 + 0.12);
	  frontLeanToBackLegR.visible = (params.p_r_s == "1")?true:false;
	  const_var.b_t_M_F_t_F.add(frontLeanToBackLegR);
	  //regular leg anand
	  
	
	  //Left Leanto Base Rail For Left Legs
	  var frontLeantoBaseRail = new THREE.Mesh(frontLeanTolegGeo,frontLeanTolegMaterial);
	  frontLeantoBaseRail.name = "frontLeantoBaseRail";
    frontLeantoBaseRail.material = frontLeantoBaseRail.material.clone();
	  frontLeantoBaseRail.scale.set(0.5,params.leanF_p_d - 0.02,1);
	  frontLeantoBaseRail.position.set(-(params.leanF_p_w+ (params.p_d/2))+0.08,0,0);
	  frontLeantoBaseRail.rotation.x=Math.PI/-2;
	  const_var.b_t_M_F_t_F.add(frontLeantoBaseRail);
  
	  //Left Leanto 2nd Base Rail For Double Leg Base Rail
	  var frontLeantoBaseRailS = frontLeantoBaseRail.clone();
	  frontLeantoBaseRailS.name = "frontLeantoBaseRailS";
    frontLeantoBaseRailS.material = frontLeantoBaseRailS.material.clone();
	  frontLeantoBaseRailS.visible = params.p_e_l;
	  frontLeantoBaseRailS.scale.set(0.5,params.p_d - 0.02,1);
	  frontLeantoBaseRailS.position.set(params.p_w/-2+disFor2Legs,0,0);
	  frontLeantoBaseRailS.rotation.x=Math.PI/-2;
  
  
	  //Loop For Add Legs Dynamically For Left Lean To
	  for (var i = 0; i < params.leanF_p_d / 2 - 2; i = i + legDistance) {
		var frontLeanToFrontLeg = new THREE.Mesh(frontLeanTolegGeo,frontLeanTolegMaterial);
		frontLeanToFrontLeg.name = "frontLeanToFrontLeg" + i;
    frontLeanToFrontLeg.material = frontLeanToFrontLeg.material.clone();
		frontLeanToFrontLeg.scale.set(0.5, params.leanF_p_h, 1);
		frontLeanToFrontLeg.position.set(leanToLeg + 0.08,params.leanF_p_h / 2,i.toFixed(2));
		frontLeanToFrontLeg.visible = (params.p_r_s != "1")?true:false;
  
		var frontLeanToFrontLegR = new THREE.Mesh(leanToleftFrontlegGeoR,leanToleftFrontlegMaterialR);
	  frontLeanToFrontLegR.name = "frontLeanToFrontLegR"+i;
    frontLeanToFrontLegR.material = frontLeanToFrontLegR.material.clone();
	  frontLeanToFrontLegR.scale.set(0.5, params.leanF_p_h + scaleLegR[params.leanF_p_h], 1);
	  frontLeanToFrontLegR.position.set(leanToLeg + 0.08,(params.leanF_p_h / 2)-0.1,i.toFixed(2));
	  frontLeanToFrontLegR.visible = (params.p_r_s == "1")?true:false;
  
		var frontLeanToBackLeg = new THREE.Mesh(frontLeanTolegGeo,frontLeanTolegMaterial);
		frontLeanToBackLeg.name = "frontLeanToBackLeg" - i;
    frontLeanToBackLeg.material = frontLeanToBackLeg.material.clone();
		frontLeanToBackLeg.scale.set(0.5, params.leanF_p_h, 1);
		frontLeanToBackLeg.position.set(leanToLeg + 0.08,params.leanF_p_h / 2,-i.toFixed(2) );
		frontLeanToBackLeg.visible = (params.p_r_s != "1")?true:false;
  
		var frontLeanToBackLegR = new THREE.Mesh(frontLeanToBacklegGeoR,frontLeanToBacklegMaterialR);
		frontLeanToBackLegR.name = "frontLeanToBackLegR";
    frontLeanToBackLegR.material = frontLeanToBackLegR.material.clone();
		frontLeanToBackLegR.scale.set(0.5, params.leanF_p_h+ scaleLegR[params.leanF_p_h], 1);
		frontLeanToBackLegR.position.set(leanToLeg + 0.08,(params.leanF_p_h / 2)-0.1,-i.toFixed(2));
		frontLeanToBackLegR.visible = (params.p_r_s == "1")?true:false;
	  
		////if(i.toFixed(2)*2 > 2)
		if (i != 0) {
		 
		  const_var.b_t_M_F_t_F.add(frontLeanToFrontLeg);
		  const_var.b_t_M_F_t_F.add(frontLeanToFrontLegR);
		  const_var.b_t_M_F_t_F.add(frontLeanToBackLeg);
		  const_var.b_t_M_F_t_F.add(frontLeanToBackLegR);
		} else {
		  frontLeanToFrontLeg.position.set(leanToLeg + 0.08,params.leanF_p_h / 2, 0);
		  const_var.b_t_M_F_t_F.add(frontLeanToFrontLeg);
		  const_var.b_t_M_F_t_F.add(frontLeanToFrontLegR);
		  const_var.b_t_M_F_t_F.add(frontLeanToBackLegR);
  
		}
	  }
	}
  
}


export const addLegsLeanToLeft = (leanToCheck)=>{
  var leanToleftPart = (const_var.scene.getObjectByName("b_t_M_L_t_L").children = []);

  //scale of lean to regular leg according to hight
  var scaleLegR = {"6":0.23, "7":0.28,"8":0.34,"9":0.40,"10":0.45,"11":0.5,"12":0.55,"13":0.6};

  if (leanToCheck) {
    var leanToLeg = params.p_w / -2 - params.lean_p_w;
    //Needs Create Globle Varible
    var legDistance = 5;
    var disFor2Legs = 0.2;
    var disForVShapLegs = 0.55;
    var hightFor2Legs = params.lean_p_h;
    var hightForVShapLegs = params.lean_p_h - 0.5;
    if (const_var.legstype == "ladder") {
      disFor2Legs = 0.6; //0.48;
      ////hightFor2Legs = params.p_h + params.p_r_p/params.p_w - 0.08;
      hightFor2Legs = params.p_h + params.p_r_p / 20 - 0.08;
    }

    //Left Lean To Left Front Leg
    var leanToleftlegGeo = new THREE.BoxGeometry(0.31, 1, 0.2);
    var leanToleftlegMaterial = new THREE.MeshBasicMaterial({ color: 0xc9c6c6,side: THREE.DoubleSide,});
    var leanToleftFrontLeg = new THREE.Mesh(leanToleftlegGeo,leanToleftlegMaterial);
    leanToleftFrontLeg.name = "leanToleftFrontLeg";
    leanToleftFrontLeg.scale.set(0.5, params.lean_p_h, 1);
    leanToleftFrontLeg.position.set(leanToLeg + 0.08,params.lean_p_h / 2,params.lean_p_d / 2 - 0.12);
    leanToleftFrontLeg.visible = (params.p_r_s != "1")?true:false;
    const_var.b_t_M_L_t_L.add(leanToleftFrontLeg);

    //regular leg anand
    var leanToleftFrontlegGeoR = new THREE.BoxGeometry(0.31, 0.95, 0.2);
    var leanToleftFrontlegMaterialR = new THREE.MeshBasicMaterial({ color: 0xc9c6c6,side: THREE.DoubleSide});
    var leanToleftFrontLegR = new THREE.Mesh(leanToleftFrontlegGeoR,leanToleftFrontlegMaterialR);
    leanToleftFrontLegR.name = "leanToleftFrontLegR";
    leanToleftFrontLegR.scale.set(0.5, params.lean_p_h + scaleLegR[params.lean_p_h], 1);
    leanToleftFrontLegR.position.set(leanToLeg + 0.08,(params.lean_p_h / 2)-0.1,params.lean_p_d / 2 - 0.12);
    leanToleftFrontLegR.visible = (params.p_r_s == "1")?true:false;
    const_var.b_t_M_L_t_L.add(leanToleftFrontLegR);
    //regular leg anand

     //regular leg anand
     var leanToleftFrontlegTrimGeo = new THREE.BoxGeometry(0.31, 0.95, 0.2);
     var leanToleftFrontlegTrimMaterial = new THREE.MeshBasicMaterial({ color: 0x0E6655,side: THREE.DoubleSide});
     var leanToleftFrontLegTrim = new THREE.Mesh(leanToleftFrontlegTrimGeo,leanToleftFrontlegTrimMaterial);
     leanToleftFrontLegTrim.name = "leanToleftFrontLegTrim";
     leanToleftFrontLegTrim.scale.set(0.6, params.lean_p_h + scaleLegR[params.lean_p_h], 0.5);
     leanToleftFrontLegTrim.position.set(leanToLeg + 0.06,(params.lean_p_h / 2)-0.1,params.lean_p_d / 2);
     leanToleftFrontLegTrim.visible = (params.p_r_s == "1")?true:false;
     const_var.b_t_M_L_t_L.add(leanToleftFrontLegTrim);
     //regular leg anand

     //regular leg anand
     var leanToleftBacklegTrimGeo = new THREE.BoxGeometry(0.31, 0.95, 0.2);
     var leanToleftBacklegTrimMaterial = new THREE.MeshBasicMaterial({ color: 0x0E6655,side: THREE.DoubleSide});
     var leanToleftBackLegTrim = new THREE.Mesh(leanToleftBacklegTrimGeo,leanToleftBacklegTrimMaterial);
     leanToleftBackLegTrim.name = "leanToleftBackLegTrim";
     leanToleftBackLegTrim.scale.set(0.6, params.lean_p_h + scaleLegR[params.lean_p_h], 0.5);
     leanToleftBackLegTrim.position.set(leanToLeg + 0.06,(params.lean_p_h / 2)-0.1,params.lean_p_d / -2);
     leanToleftBackLegTrim.visible = (params.p_r_s == "1")?true:false;
     const_var.b_t_M_L_t_L.add(leanToleftBackLegTrim);
     //regular leg anand
    
    //Left Leant To Left Back Leg
    var leanToleftBackLeg = new THREE.Mesh(leanToleftlegGeo,leanToleftlegMaterial);
    leanToleftBackLeg.scale.set(0.5, params.lean_p_h, 1);
    leanToleftBackLeg.position.set(leanToLeg + 0.08, params.lean_p_h / 2,params.lean_p_d / -2 + 0.12);
    leanToleftBackLeg.name = "leanToleftBackLeg";
    leanToleftBackLeg.visible = (params.p_r_s != "1")?true:false;
    const_var.b_t_M_L_t_L.add(leanToleftBackLeg);

    //regular leg anand
    var leanToleftBacklegGeoR = new THREE.BoxGeometry(0.31, 0.95, 0.2);
    var leanToleftBacklegMaterialR = new THREE.MeshBasicMaterial({ color: 0xc9c6c6,side: THREE.DoubleSide,});
    var leanToleftBackLegR = new THREE.Mesh(leanToleftBacklegGeoR,leanToleftBacklegMaterialR);
    leanToleftBackLegR.name = "leanToleftBackLegR";
    leanToleftBackLegR.scale.set(0.5, params.lean_p_h+ scaleLegR[params.lean_p_h], 1);
    leanToleftBackLegR.position.set(leanToLeg + 0.08,(params.lean_p_h / 2)-0.1,params.lean_p_d /-2 + 0.12);
    leanToleftBackLegR.visible = (params.p_r_s == "1")?true:false;
    const_var.b_t_M_L_t_L.add(leanToleftBackLegR);
    //regular leg anand
    
  
    //Left Leanto Base Rail For Left Legs
    var leftLeantoBaseRail = new THREE.Mesh(leanToleftlegGeo,leanToleftlegMaterial);
    leftLeantoBaseRail.name = "leftLeantoBaseRail";
    leftLeantoBaseRail.scale.set(0.5,params.lean_p_d - 0.02,1);
    leftLeantoBaseRail.position.set(-(params.lean_p_w+ (params.p_w/2))+0.08,0,0);
    leftLeantoBaseRail.rotation.x=Math.PI/-2;
    const_var.b_t_M_L_t_L.add(leftLeantoBaseRail);

    //Left Leanto 2nd Base Rail For Double Leg Base Rail
    var leftLeantoBaseRailS = leftLeantoBaseRail.clone();
    leftLeantoBaseRailS.name = "leftLeantoBaseRailS";
    leftLeantoBaseRailS.visible = params.p_e_l;
    leftLeantoBaseRailS.scale.set(0.5,params.p_d - 0.02,1);
    leftLeantoBaseRailS.position.set(params.p_w/-2+disFor2Legs,0,0);
    leftLeantoBaseRailS.rotation.x=Math.PI/-2;


    //Loop For Add Legs Dynamically For Left Lean To
    for (var i = 0; i < params.lean_p_d / 2 - 2; i = i + legDistance) {
      var leanToleftFrontLeg = new THREE.Mesh(leanToleftlegGeo,leanToleftlegMaterial);
      leanToleftFrontLeg.name = "leanToleftFrontLeg" + i;
      leanToleftFrontLeg.material = leanToleftFrontLeg.material.clone();
      leanToleftFrontLeg.scale.set(0.5, params.lean_p_h, 1);
      leanToleftFrontLeg.position.set(leanToLeg + 0.08,params.lean_p_h / 2,i.toFixed(2));
      leanToleftFrontLeg.visible = (params.p_r_s != "1")?true:false;

      var leanToleftFrontLegR = new THREE.Mesh(leanToleftFrontlegGeoR,leanToleftFrontlegMaterialR);
    leanToleftFrontLegR.name = "leanToleftFrontLegR"+i;
    leanToleftFrontLegR.material = leanToleftFrontLegR.material.clone();
    leanToleftFrontLegR.scale.set(0.5, params.lean_p_h + scaleLegR[params.lean_p_h], 1);
    leanToleftFrontLegR.position.set(leanToLeg + 0.08,(params.lean_p_h / 2)-0.1,i.toFixed(2));
    leanToleftFrontLegR.visible = (params.p_r_s == "1")?true:false;

      var leanToleftBackLeg = new THREE.Mesh(leanToleftlegGeo,leanToleftlegMaterial);
      leanToleftBackLeg.name = "leanToleftBackLeg" - i;
      leanToleftBackLeg.material = leanToleftBackLeg.material.clone();
      leanToleftBackLeg.scale.set(0.5, params.lean_p_h, 1);
      leanToleftBackLeg.position.set(leanToLeg + 0.08,params.lean_p_h / 2,-i.toFixed(2) );
      leanToleftBackLeg.visible = (params.p_r_s != "1")?true:false;

      var leanToleftBackLegR = new THREE.Mesh(leanToleftBacklegGeoR,leanToleftBacklegMaterialR);
      leanToleftBackLegR.name = "leanToleftBackLegR";
      leanToleftBackLegR.material = leanToleftBackLegR.material.clone();
      leanToleftBackLegR.scale.set(0.5, params.lean_p_h+ scaleLegR[params.lean_p_h], 1);
      leanToleftBackLegR.position.set(leanToLeg + 0.08,(params.lean_p_h / 2)-0.1,-i.toFixed(2));
      leanToleftBackLegR.visible = (params.p_r_s == "1")?true:false;
    
      ////if(i.toFixed(2)*2 > 2)
      if (i != 0) {
       
        const_var.b_t_M_L_t_L.add(leanToleftFrontLeg);
        const_var.b_t_M_L_t_L.add(leanToleftFrontLegR);
        const_var.b_t_M_L_t_L.add(leanToleftBackLeg);
        const_var.b_t_M_L_t_L.add(leanToleftBackLegR);
      } else {
        leanToleftFrontLeg.position.set(leanToLeg + 0.08,params.lean_p_h / 2, 0);
        const_var.b_t_M_L_t_L.add(leanToleftFrontLeg);
        const_var.b_t_M_L_t_L.add(leanToleftFrontLegR);
        const_var.b_t_M_L_t_L.add(leanToleftBackLegR);

      }
    }
  }

}

    export const addLegsLeanToRight = (leanToCheck)=>{
            var leanTorightPart = (const_var.scene.getObjectByName("b_t_M_R_t_R").children = []);

            //scale of lean to regular leg according to hight
            var scaleLegR = {"6":0.23, "7":0.28,"8":0.34,"9":0.40,"10":0.45,"11":0.5,"12":0.55,"13":0.6};

            if (leanToCheck) {
              var leanToLeg = params.p_w / 2 + params.leanR_p_w;
              //Needs To Create Globle Variable
              var legDistance = 5;
              var disFor2Legs = 0.2;
              var disForVShapLegs = 0.55;
              var hightFor2Legs = params.lean_p_h;
              var hightForVShapLegs = params.lean_p_h - 0.5;
              if (const_var.legstype == "ladder") {
                disFor2Legs = 0.6; //0.48;
                ////hightFor2Legs = params.p_h + params.p_r_p/params.p_w - 0.08;
                hightFor2Legs = params.p_h + params.p_r_p / 20 - 0.08;
              }

              //Right Lean To Right Front Leg
              var leanToRightlegGeo = new THREE.BoxGeometry(0.31, 1, 0.2);
              var leanToRightlegMaterial = new THREE.MeshBasicMaterial({color: 0xc9c6c6,side: THREE.DoubleSide});
          
              var leanTorightFrontLeg = new THREE.Mesh(leanToRightlegGeo,leanToRightlegMaterial);
              leanTorightFrontLeg.name = "leanTorightFrontLeg";
              leanTorightFrontLeg.scale.set(0.5, params.leanR_p_h, 1);
              leanTorightFrontLeg.position.set(leanToLeg - 0.08,params.leanR_p_h / 2,params.leanR_p_d / 2 - 0.12);
              leanTorightFrontLeg.visible = (params.p_r_s != "1")?true:false;
              const_var.b_t_M_R_t_R.add(leanTorightFrontLeg);

               //regular leg anand
               var leanToRightFrontlegGeoR = new THREE.BoxGeometry(0.31, 0.95, 0.2);
               var leanToRightFrontlegMaterialR = new THREE.MeshBasicMaterial({ color: 0xc9c6c6,side: THREE.DoubleSide});
               var leanToRightFrontLegR = new THREE.Mesh(leanToRightFrontlegGeoR,leanToRightFrontlegMaterialR);
               leanToRightFrontLegR.name = "leanToRightFrontLegR";
               leanToRightFrontLegR.scale.set(0.5, params.leanR_p_h + scaleLegR[params.leanR_p_h], 1);
               leanToRightFrontLegR.position.set(leanToLeg - 0.08,(params.leanR_p_h / 2)-0.1,params.leanR_p_d / 2 - 0.12);
               leanToRightFrontLegR.visible = (params.p_r_s == "1")?true:false;
               const_var.b_t_M_R_t_R.add(leanToRightFrontLegR);
               //regular leg anand

               //regular leg anand
               var leanToRightFrontlegTrimGeoR = new THREE.BoxGeometry(0.31, 0.95, 0.2);
               var leanToRightFrontlegTrimMaterialR = new THREE.MeshBasicMaterial({ color: 0x0E6655,side: THREE.DoubleSide});
               var leanToRightFrontLegTrim = new THREE.Mesh(leanToRightFrontlegTrimGeoR,leanToRightFrontlegTrimMaterialR);
               leanToRightFrontLegTrim.name = "leanToRightFrontLegTrim";
               leanToRightFrontLegTrim.scale.set(0.6, params.leanR_p_h + scaleLegR[params.leanR_p_h], 0.5);
               leanToRightFrontLegTrim.position.set(leanToLeg - 0.06,(params.leanR_p_h / 2)-0.1,params.leanR_p_d / 2);
               leanToRightFrontLegTrim.visible = (params.p_r_s == "1")?true:false;
               const_var.b_t_M_R_t_R.add(leanToRightFrontLegTrim);

                //regular leg anand
                var leanToRightBacklegTrimGeoR = new THREE.BoxGeometry(0.31, 0.95, 0.2);
                var leanToRightBacklegTrimMaterialR = new THREE.MeshBasicMaterial({ color: 0x0E6655,side: THREE.DoubleSide});
                var leanToRightBackLegTrim = new THREE.Mesh(leanToRightBacklegTrimGeoR,leanToRightBacklegTrimMaterialR);
                leanToRightBackLegTrim.name = "leanToRightBackLegTrim";
                leanToRightBackLegTrim.scale.set(0.6, params.leanR_p_h + scaleLegR[params.leanR_p_h], 0.5);
                leanToRightBackLegTrim.position.set(leanToLeg - 0.06,(params.leanR_p_h / 2)-0.1,params.leanR_p_d / -2);
                leanToRightBackLegTrim.visible = (params.p_r_s == "1")?true:false;
                const_var.b_t_M_R_t_R.add(leanToRightBackLegTrim);
          
              //Right Lean To Right Back Leg
              var leanTorightBackLeg = new THREE.Mesh(leanToRightlegGeo,leanToRightlegMaterial);
              leanTorightBackLeg.material = leanTorightBackLeg.material.clone();
              leanTorightBackLeg.scale.set(0.5, params.leanR_p_h, 1);
              leanTorightBackLeg.position.set(leanToLeg - 0.08,params.leanR_p_h / 2,params.leanR_p_d / -2 + 0.12);
              leanTorightBackLeg.name = "leanTorightBackLeg";
              leanTorightBackLeg.visible = (params.p_r_s != "1")?true:false;
              const_var.b_t_M_R_t_R.add(leanTorightBackLeg);

               //regular leg anand
               var leanToRightBacklegGeoR = new THREE.BoxGeometry(0.31, 0.95, 0.2);
               var leanToRightBacklegMaterialR = new THREE.MeshBasicMaterial({ color: 0xc9c6c6,side: THREE.DoubleSide});
               var leanToRightBackLegR = new THREE.Mesh(leanToRightBacklegGeoR,leanToRightBacklegMaterialR);
               leanToRightBackLegR.name = "leanToRightBackLegR";
               leanToRightBackLegR.scale.set(0.5, params.leanR_p_h + scaleLegR[params.leanR_p_h], 1);
               leanToRightBackLegR.position.set(leanToLeg - 0.08,(params.leanR_p_h / 2)-0.1,params.leanR_p_d / -2 + 0.12);
               leanToRightBackLegR.visible = (params.p_r_s == "1")?true:false;
               const_var.b_t_M_R_t_R.add(leanToRightBackLegR);
          
              

              //Right Leanto TO Right Base Rail For Legs
	            var rightLeantoBaseRail = new THREE.Mesh(leanToRightlegGeo,leanToRightlegMaterial);
	            rightLeantoBaseRail.name = "rightLeantoBaseRail";
              rightLeantoBaseRail.material = rightLeantoBaseRail.material.clone();
	            //rightLeantoBaseRail.scale.set(0.5,params.p_d,1);
              rightLeantoBaseRail.scale.set(0.5,params.leanR_p_d - 0.02,1);
	            rightLeantoBaseRail.position.set((params.leanR_p_w+ (params.p_w/2))-0.08,0,0);
	            rightLeantoBaseRail.rotation.x=Math.PI/-2;
	            const_var.b_t_M_R_t_R.add(rightLeantoBaseRail);

	            //Center Building Right Base Rail for Double legs
	            var rightLeantoBaseRailS = rightLeantoBaseRail.clone();
	            rightLeantoBaseRailS.name = "rightLeantoBaseRailS";
              rightLeantoBaseRailS.material = rightLeantoBaseRailS.material.clone();
	            rightLeantoBaseRailS.visible = params.p_e_l;
	            rightLeantoBaseRailS.scale.set(0.5,params.p_d - 0.02,1);
	            rightLeantoBaseRailS.position.set(params.p_w/2-disFor2Legs,0,0);
	            rightLeantoBaseRailS.rotation.x=Math.PI/-2;
	            const_var.b_t_M_R_t_R.add(rightLeantoBaseRailS);
              
              
              var lefRimndr = params.leanR_p_d % legDistance;
              var lefDiff = legDistance + lefRimndr / legDistance;

              //Loop For Add Legs For Right Lean To Dynamically
              for (var i = 0; i < params.leanR_p_d / 2 - 2; i = i + legDistance) {
                var leanTorightFrontLeg = new THREE.Mesh(leanToRightlegGeo,leanToRightlegMaterial);
                leanTorightFrontLeg.name = "leanTorightFrontLeg" + i;
                leanTorightFrontLeg.material = leanTorightFrontLeg.material.clone();
                leanTorightFrontLeg.scale.set(0.5, params.leanR_p_h, 1);
                leanTorightFrontLeg.position.set(leanToLeg - 0.08,params.leanR_p_h / 2,i.toFixed(2));
                leanTorightFrontLeg.visible = (params.p_r_s != "1")?true:false;

                var leanToRightFrontLegR = new THREE.Mesh(leanToRightFrontlegGeoR,leanToRightFrontlegMaterialR);
               leanToRightFrontLegR.name = "leanToRightFrontLegR"+i;
               leanToRightFrontLegR.material = leanToRightFrontLegR.material.clone();
               leanToRightFrontLegR.scale.set(0.5, params.leanR_p_h + scaleLegR[params.leanR_p_h], 1);
               leanToRightFrontLegR.position.set(leanToLeg - 0.08,(params.leanR_p_h / 2)-0.1,i.toFixed(2));
               leanToRightFrontLegR.visible = (params.p_r_s == "1")?true:false;
          
                var leanTorightBackLeg = new THREE.Mesh(leanToRightlegGeo,leanToRightlegMaterial);
                leanTorightBackLeg.name = "leanTorightBackLeg" - i;
                leanTorightBackLeg.material = leanTorightBackLeg.material.clone();
                leanTorightBackLeg.scale.set(0.5, params.leanR_p_h, 1);
                leanTorightBackLeg.position.set(leanToLeg - 0.08,params.leanR_p_h / 2,-i.toFixed(2) );
                leanTorightBackLeg.visible = (params.p_r_s != "1")?true:false;

                var leanToRightBackLegR = new THREE.Mesh(leanToRightBacklegGeoR,leanToRightBacklegMaterialR);
                leanToRightBackLegR.name = "leanToRightBackLegR"+i;
                leanToRightBackLegR.material = leanToRightBackLegR.material.clone();
                leanToRightBackLegR.scale.set(0.5, params.leanR_p_h + scaleLegR[params.leanR_p_h], 1);
                leanToRightBackLegR.position.set(leanToLeg - 0.08,(params.leanR_p_h / 2)-0.1,-i.toFixed(2));
                leanToRightBackLegR.visible = (params.p_r_s == "1")?true:false;
          
                if (i != 0) {
                  const_var.b_t_M_R_t_R.add(leanTorightFrontLeg);
                  const_var.b_t_M_R_t_R.add(leanToRightFrontLegR);
                  const_var.b_t_M_R_t_R.add(leanTorightBackLeg);
                  const_var.b_t_M_R_t_R.add(leanToRightBackLegR);
  
                } else {
                  leanTorightFrontLeg.position.set(leanToLeg - 0.08, params.leanR_p_h / 2, 0);
                  const_var.b_t_M_R_t_R.add(leanTorightFrontLeg);
                  const_var.b_t_M_R_t_R.add(leanToRightFrontLegR);

                  const_var.b_t_M_R_t_R.add(leanTorightFrontLeg);
                  const_var.b_t_M_R_t_R.add(leanToRightBackLegR);
                }
              }
            }
    }

export const addLegsLeanToBack = (leanToCheck)=>{
  var leanToBackPart = (const_var.scene.getObjectByName("b_t_M_B_t_B").children = []);
  
  //scale of lean to regular leg according to hight
  var scaleLegR = {"6":0.23, "7":0.28,"8":0.34,"9":0.40,"10":0.45,"11":0.5,"12":0.55,"13":0.6};
  
  if (leanToCheck) {
    var leanToLeg = params.p_d /-2 - params.leanB_p_w;
  
    //Needs Create Globle Varible
    var legDistance = 5;
    var disFor2Legs = 0.2;
    var disForVShapLegs = 0.55;
    var hightFor2Legs = params.lean_p_h;
    var hightForVShapLegs = params.lean_p_h - 0.5;
    if (const_var.legstype == "ladder") {
    disFor2Legs = 0.6; //0.48;
    ////hightFor2Legs = params.p_h + params.p_r_p/params.p_w - 0.08;
    hightFor2Legs = params.p_h + params.p_r_p / 20 - 0.08;
    }
  
    //Left Lean To Left Front Leg
    var backLeanTolegGeo = new THREE.BoxGeometry(0.31, 1, 0.2);
    var backLeanTolegMaterial = new THREE.MeshBasicMaterial({ color: 0xc9c6c6,side: THREE.DoubleSide,});
    var backLeanToFrontLeg = new THREE.Mesh(backLeanTolegGeo,backLeanTolegMaterial);
    backLeanToFrontLeg.name = "backLeanToFrontLeg";
    backLeanToFrontLeg.scale.set(0.5, params.leanB_p_h, 1);
    backLeanToFrontLeg.position.set(leanToLeg + 0.08,params.leanB_p_h / 2,params.leanB_p_d / 2 - 0.12);
    backLeanToFrontLeg.visible = (params.p_r_s != "1")?true:false;
    const_var.b_t_M_B_t_B.add(backLeanToFrontLeg);
  
    //regular leg anand
    var leanToleftFrontlegGeoR = new THREE.BoxGeometry(0.31, 0.95, 0.2);
    var leanToleftFrontlegMaterialR = new THREE.MeshBasicMaterial({ color: 0xc9c6c6,side: THREE.DoubleSide});
    var backLeanToFrontLegR = new THREE.Mesh(leanToleftFrontlegGeoR,leanToleftFrontlegMaterialR);
    backLeanToFrontLegR.name = "backLeanToFrontLegR";
    backLeanToFrontLegR.scale.set(0.5, params.leanB_p_h + scaleLegR[params.leanB_p_h], 1);
    backLeanToFrontLegR.position.set(leanToLeg + 0.08,(params.leanB_p_h / 2)-0.1,params.leanB_p_d / 2 - 0.12);
    backLeanToFrontLegR.visible = (params.p_r_s == "1")?true:false;
    const_var.b_t_M_B_t_B.add(backLeanToFrontLegR);
    //regular leg anand
  
     //regular leg anand
     var backLeanToFrontlegTrimGeo = new THREE.BoxGeometry(0.31, 0.95, 0.2);
     var backLeanToFrontlegTrimMaterial = new THREE.MeshBasicMaterial({ color: 0x0E6655,side: THREE.DoubleSide});
     var backLeanToFrontLegTrim = new THREE.Mesh(backLeanToFrontlegTrimGeo,backLeanToFrontlegTrimMaterial);
     backLeanToFrontLegTrim.name = "backLeanToFrontLegTrim";
     backLeanToFrontLegTrim.scale.set(0.6, params.leanB_p_h + scaleLegR[params.leanB_p_h], 0.5);
     backLeanToFrontLegTrim.position.set(leanToLeg + 0.06,(params.leanB_p_h / 2)-0.1,params.leanB_p_d / 2);
     backLeanToFrontLegTrim.visible = (params.p_r_s == "1")?true:false;
     const_var.b_t_M_B_t_B.add(backLeanToFrontLegTrim);
     //regular leg anand
  
     //regular leg anand
     var backLeanToBacklegTrimGeo = new THREE.BoxGeometry(0.31, 0.95, 0.2);
     var backLeanToBacklegTrimMaterial = new THREE.MeshBasicMaterial({ color: 0x0E6655,side: THREE.DoubleSide});
     var backLeanToBackLegTrim = new THREE.Mesh(backLeanToBacklegTrimGeo,backLeanToBacklegTrimMaterial);
     backLeanToBackLegTrim.name = "backLeanToBackLegTrim";
     backLeanToBackLegTrim.scale.set(0.6, params.leanB_p_h + scaleLegR[params.leanB_p_h], 0.5);
     backLeanToBackLegTrim.position.set(leanToLeg + 0.06,(params.leanB_p_h / 2)-0.1,params.leanB_p_d / -2);
     backLeanToBackLegTrim.visible = (params.p_r_s == "1")?true:false;
     const_var.b_t_M_B_t_B.add(backLeanToBackLegTrim);
     //regular leg anand
    
    //Left Leant To Left Back Leg
    var backLeanToBackLeg = new THREE.Mesh(backLeanTolegGeo,backLeanTolegMaterial);
    backLeanToBackLeg.material = backLeanToBackLeg.material.clone();
    backLeanToBackLeg.scale.set(0.5, params.leanB_p_h, 1);
    backLeanToBackLeg.position.set(leanToLeg + 0.08, params.leanB_p_h / 2,params.leanB_p_d / -2 + 0.12);
    backLeanToBackLeg.name = "backLeanToBackLeg";
    backLeanToBackLeg.visible = (params.p_r_s != "1")?true:false;
    const_var.b_t_M_B_t_B.add(backLeanToBackLeg);
  
    //regular leg anand
    var backLeanToBacklegGeoR = new THREE.BoxGeometry(0.31, 0.95, 0.2);
    var backLeanToBacklegMaterialR = new THREE.MeshBasicMaterial({ color: 0xc9c6c6,side: THREE.DoubleSide,});
    var backLeanToBackLegR = new THREE.Mesh(backLeanToBacklegGeoR,backLeanToBacklegMaterialR);
    backLeanToBackLegR.name = "backLeanToBackLegR";
    backLeanToBackLegR.scale.set(0.5, params.leanB_p_h+ scaleLegR[params.leanB_p_h], 1);
    backLeanToBackLegR.position.set(leanToLeg + 0.08,(params.leanB_p_h / 2)-0.1,params.leanB_p_d /-2 + 0.12);
    backLeanToBackLegR.visible = (params.p_r_s == "1")?true:false;
    const_var.b_t_M_B_t_B.add(backLeanToBackLegR);
    //regular leg anand
    
  
    //Left Leanto Base Rail For Left Legs
    var backLeantoBaseRail = new THREE.Mesh(backLeanTolegGeo,backLeanTolegMaterial);
    backLeantoBaseRail.name = "backLeantoBaseRail";
    backLeantoBaseRail.material = backLeantoBaseRail.material.clone();
    backLeantoBaseRail.scale.set(0.5,params.leanB_p_d - 0.02,1);
    backLeantoBaseRail.position.set(-(params.leanB_p_w+ (params.p_d/2))+0.08,0,0);
    backLeantoBaseRail.rotation.x=Math.PI/-2;
    const_var.b_t_M_B_t_B.add(backLeantoBaseRail);
  
    //Left Leanto 2nd Base Rail For Double Leg Base Rail
    var backLeantoBaseRailS = backLeantoBaseRail.clone();
    backLeantoBaseRailS.name = "backLeantoBaseRailS";
    backLeantoBaseRailS.material = backLeantoBaseRailS.material.clone();
    backLeantoBaseRailS.visible = params.p_e_l;
    backLeantoBaseRailS.scale.set(0.5,params.p_d - 0.02,1);
    backLeantoBaseRailS.position.set(params.p_w/-2+disFor2Legs,0,0);
    backLeantoBaseRailS.rotation.x=Math.PI/-2;
  
  
    //Loop For Add Legs Dynamically For Left Lean To
    for (var i = 0; i < params.leanB_p_d / 2 - 2; i = i + legDistance) {
    var backLeanToFrontLeg = new THREE.Mesh(backLeanTolegGeo,backLeanTolegMaterial);
    backLeanToFrontLeg.name = "backLeanToFrontLeg" + i;
    backLeanToFrontLeg.material = backLeanToFrontLeg.material.clone();
    backLeanToFrontLeg.scale.set(0.5, params.leanB_p_h, 1);
    backLeanToFrontLeg.position.set(leanToLeg + 0.08,params.leanB_p_h / 2,i.toFixed(2));
    backLeanToFrontLeg.visible = (params.p_r_s != "1")?true:false;
  
    var backLeanToFrontLegR = new THREE.Mesh(leanToleftFrontlegGeoR,leanToleftFrontlegMaterialR);
    backLeanToFrontLegR.name = "backLeanToFrontLegR"+i;
    backLeanToFrontLegR.material = backLeanToFrontLegR.material.clone();
    backLeanToFrontLegR.scale.set(0.5, params.leanB_p_h + scaleLegR[params.leanB_p_h], 1);
    backLeanToFrontLegR.position.set(leanToLeg + 0.08,(params.leanB_p_h / 2)-0.1,i.toFixed(2));
    backLeanToFrontLegR.visible = (params.p_r_s == "1")?true:false;
  
    var backLeanToBackLeg = new THREE.Mesh(backLeanTolegGeo,backLeanTolegMaterial);
    backLeanToBackLeg.name = "backLeanToBackLeg" - i;
    backLeanToBackLeg.material = backLeanToBackLeg.material.clone();
    backLeanToBackLeg.scale.set(0.5, params.leanB_p_h, 1);
    backLeanToBackLeg.position.set(leanToLeg + 0.08,params.leanB_p_h / 2,-i.toFixed(2) );
    backLeanToBackLeg.visible = (params.p_r_s != "1")?true:false;
  
    var backLeanToBackLegR = new THREE.Mesh(backLeanToBacklegGeoR,backLeanToBacklegMaterialR);
    backLeanToBackLegR.name = "backLeanToBackLegR";
    backLeanToBackLegR.material = backLeanToBackLegR.material.clone();
    backLeanToBackLegR.scale.set(0.5, params.leanB_p_h+ scaleLegR[params.leanB_p_h], 1);
    backLeanToBackLegR.position.set(leanToLeg + 0.08,(params.leanB_p_h / 2)-0.1,-i.toFixed(2));
    backLeanToBackLegR.visible = (params.p_r_s == "1")?true:false;
    
    ////if(i.toFixed(2)*2 > 2)
    if (i != 0) {
     
      const_var.b_t_M_B_t_B.add(backLeanToFrontLeg);
      const_var.b_t_M_B_t_B.add(backLeanToFrontLegR);
      const_var.b_t_M_B_t_B.add(backLeanToBackLeg);
      const_var.b_t_M_B_t_B.add(backLeanToBackLegR);
    } else {
      backLeanToFrontLeg.position.set(leanToLeg + 0.08,params.leanB_p_h / 2, 0);
      const_var.b_t_M_B_t_B.add(backLeanToFrontLeg);
      const_var.b_t_M_B_t_B.add(backLeanToFrontLegR);
      const_var.b_t_M_B_t_B.add(backLeanToBackLegR);
  
    }
    }
  }
  
}
    