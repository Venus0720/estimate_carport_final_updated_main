import * as THREE from "three";
import { params, const_var, } from '../redux/reducers/reducer';



export const updateLeantosArrowAndDimensions = () => {


      if ("undefined" != typeof const_var.scene.getObjectByName("LeftLeanArrows")) const_var.scene.remove(const_var.scene.getObjectByName("LeftLeanArrows"));
      if ("undefined" != typeof const_var.scene.getObjectByName("LeftLeanArrowBody")) const_var.scene.remove(const_var.scene.getObjectByName("LeftLeanArrowBody"));
      if ("undefined" != typeof const_var.scene.getObjectByName("LeftLeanArrowDim")) const_var.scene.remove(const_var.scene.getObjectByName("LeftLeanArrowDim"));
      if ("undefined" != typeof const_var.scene.getObjectByName("RightLeanArrows")) const_var.scene.remove(const_var.scene.getObjectByName("RightLeanArrows"));
      if ("undefined" != typeof const_var.scene.getObjectByName("RightLeanArrowBody")) const_var.scene.remove(const_var.scene.getObjectByName("RightLeanArrowBody"));
      if ("undefined" != typeof const_var.scene.getObjectByName("RightLeanArrowDim")) const_var.scene.remove(const_var.scene.getObjectByName("RightLeanArrowDim"));
      if ("undefined" != typeof const_var.scene.getObjectByName("FrontLeanArrow")) const_var.scene.remove(const_var.scene.getObjectByName("FrontLeanArrow"));
      if ("undefined" != typeof const_var.scene.getObjectByName("FrontLeanArrowBody")) const_var.scene.remove(const_var.scene.getObjectByName("FrontLeanArrowBody"));
      if ("undefined" != typeof const_var.scene.getObjectByName("FrontLeanArrowDim")) const_var.scene.remove(const_var.scene.getObjectByName("FrontLeanArrowDim"));
      if ("undefined" != typeof const_var.scene.getObjectByName("BackLeanArrows")) const_var.scene.remove(const_var.scene.getObjectByName("BackLeanArrows"));
      if ("undefined" != typeof const_var.scene.getObjectByName("BackLeanArrowBody")) const_var.scene.remove(const_var.scene.getObjectByName("BackLeanArrowBody"));
      if ("undefined" != typeof const_var.scene.getObjectByName("BackLeanArrowDim")) const_var.scene.remove(const_var.scene.getObjectByName("BackLeanArrowDim"));
    
      const LeftLeanArrows = new THREE.Group();
        LeftLeanArrows.name = "LeftLeanArrows";
        const_var.scene.add(LeftLeanArrows);

      const LeftLeanArrowBody = new THREE.Group();
        LeftLeanArrowBody.name = "LeftLeanArrowBody";
        const_var.scene.add(LeftLeanArrowBody);

      const LeftLeanArrowDim = new THREE.Group();
        LeftLeanArrowDim.name = "LeftLeanArrowDim";
        const_var.scene.add(LeftLeanArrowDim);

      const RightLeanArrows = new THREE.Group();
      RightLeanArrows.name = "RightLeanArrows";
      const_var.scene.add(RightLeanArrows);

      const RightLeanArrowBody = new THREE.Group();
      RightLeanArrowBody.name = "RightLeanArrowBody";
      const_var.scene.add(RightLeanArrowBody);

      const RightLeanArrowDim = new THREE.Group();
      RightLeanArrowDim.name = "RightLeanArrowDim";
      const_var.scene.add(RightLeanArrowDim);
      
      const FrontLeanArrow = new THREE.Group();
      FrontLeanArrow.name = "FrontLeanArrow";
      const_var.scene.add(FrontLeanArrow);

      const FrontLeanArrowBody = new THREE.Group();
      FrontLeanArrowBody.name = "FrontLeanArrowBody";
      const_var.scene.add(FrontLeanArrowBody);


      const FrontLeanArrowDim = new THREE.Group();
      FrontLeanArrowDim.name = "FrontLeanArrowDim";
      const_var.scene.add(FrontLeanArrowDim);
      
      const BackLeanArrows = new THREE.Group();
      BackLeanArrows.name = "BackLeanArrows";
      const_var.scene.add(BackLeanArrows);

      const BackLeanArrowBody = new THREE.Group();
      BackLeanArrowBody.name = "BackLeanArrowBody";
      const_var.scene.add(BackLeanArrowBody);

      const BackLeanArrowDim = new THREE.Group();
      BackLeanArrowDim.name = "BackLeanArrowDim";
      const_var.scene.add(BackLeanArrowDim);
        

    //Left Lean to
    if (params.add_left_lean ){
    let leftLeanX = params.p_w / -2 - params.lean_p_w;
    let leftLeanC = params.p_w / -2 - params.lean_p_w/2;

    let  leftLeanWidthGeo = new THREE.TextGeometry( params.lean_p_w+"' W", {
        font:const_var.font, size: 0.3, height: 0.02, /*weight: 'bolder',*/
        curveSegments: 3, bevelEnabled: true,bevelThickness: 0.01,
        bevelSize: 0, bevelSegments: 3,
    } );
    let  leftLeanWidthMaterial = new THREE.MeshPhongMaterial({color:0x282828});
    let  Width4LeftLean = new THREE.Mesh(leftLeanWidthGeo, leftLeanWidthMaterial);
    Width4LeftLean.name = "Width4LeftLean"
    Width4LeftLean.visible = (const_var.callMesure && params.add_left_lean)? true :false;
    Width4LeftLean.position.set(leftLeanC, 0.17, params.lean_p_d/2+0.4);
    LeftLeanArrowDim.add(Width4LeftLean);

    
  if (LeftLeanArrowDim.getObjectByName("dimensionWidth4Back") == undefined) {
    let dimensionWidth4Back = LeftLeanArrowDim.getObjectByName("Width4LeftLean").clone();
    dimensionWidth4Back.name = "dimensionWidth4Back"
    dimensionWidth4Back.visible = (const_var.callMesure && params.add_left_lean) ? true :false;
    dimensionWidth4Back.position.set(leftLeanC, 0.17, params.lean_p_d/-2-0.4);
    dimensionWidth4Back.rotation.y = Math.PI;
    LeftLeanArrowDim.add(dimensionWidth4Back)
    }
    

    let LeftLengthValue = params.lean_p_d;
    if (params.add_left_front_lean_porch){
      LeftLengthValue =  params.lean_p_d+params.leanF_p_w;
    }if (params.add_left_back_lean_porch){
     LeftLengthValue =  params.lean_p_d+params.leanB_p_w;
    } if(params.add_left_front_lean_porch && params.add_left_back_lean_porch){
     LeftLengthValue = params.lean_p_d+params.leanF_p_w+params.leanB_p_w
    }
    let  leftLeanLengthGeo = new THREE.TextGeometry( LeftLengthValue+"' L", {
        font:const_var.font, size: 0.3, height: 0.02, /*weight: 'bolder',*/
        curveSegments: 3, bevelEnabled: true,bevelThickness: 0.001,
        bevelSize: 0, bevelSegments: 3,
    } );
    let  leftLeanLengthMaterial = new THREE.MeshPhongMaterial({color:0x282828});
    let  Length4LeftLean = new THREE.Mesh(leftLeanLengthGeo, leftLeanLengthMaterial);
    Length4LeftLean.name = "Length4LeftLean"
    Length4LeftLean.visible = (const_var.callMesure && params.add_left_lean)? true :false;
    Length4LeftLean.position.set(leftLeanX -0.32, 0.17, 0);
    if (params.add_left_front_lean_porch){
      Length4LeftLean.position.z =  params.leanF_p_w/2;
    }if (params.add_left_back_lean_porch){
     Length4LeftLean.position.z =  -params.leanB_p_w/2;
    } if(params.add_left_front_lean_porch && params.add_left_back_lean_porch){
     Length4LeftLean.position.z = 0
    }
    Length4LeftLean.rotation.y = Math.PI/-2;
    LeftLeanArrowDim.add(Length4LeftLean);
    
    let  leftLeanHeightGeo = new THREE.TextGeometry( params.lean_p_h+"' H" , {
        font:const_var.font, size: 0.3, height: 0.02, /*weight: 'bolder',*/
        curveSegments: 3, bevelEnabled: true,bevelThickness: 0.01,
        bevelSize: 0, bevelSegments: 3,
      } );
    let  lefteanHeightMaterial = new THREE.MeshPhongMaterial({color:0x282828});
    let  Height4LeftLean = new THREE.Mesh(leftLeanHeightGeo, lefteanHeightMaterial);
    Height4LeftLean.name = "Height4LeftLean"
    Height4LeftLean.visible = (const_var.callMesure && params.add_left_lean && params.add_left_front_lean_porch == false)? true :false;
    Height4LeftLean.position.set(leftLeanX+0.35, params.lean_p_h-0.8, params.lean_p_d/2+0.2);
    LeftLeanArrowDim.add(Height4LeftLean);

    if (LeftLeanArrowDim.getObjectByName("leftLeanHeight4Back") == undefined) {
        let leftLeanHeight4Back = LeftLeanArrowDim.getObjectByName("Height4LeftLean").clone();
        leftLeanHeight4Back.name = "Height4LeftLeanBack"
        leftLeanHeight4Back.visible = (const_var.callMesure && params.add_left_lean && params.add_left_back_lean_porch == false) ? true :false;
        leftLeanHeight4Back.position.set(leftLeanX-0.35, params.lean_p_h-0.5, params.lean_p_d/-2-0.4);
        leftLeanHeight4Back.rotation.y = Math.PI;
        LeftLeanArrowDim.add(leftLeanHeight4Back)
        }

    /* Fornt Horizantal Arrow */
    if (const_var.b_t_M_L_t_L.getObjectByName("LLFLArrowHead") == undefined) {
        let LLFLArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        LLFLArrowHead.visible = (const_var.callMesure && params.add_left_lean)? true :false;
        LLFLArrowHead.name = "LLFLArrowHead";
        LLFLArrowHead.material = LLFLArrowHead.material.clone();
        LLFLArrowHead.position.set(leftLeanX +0.11, 0.1, params.lean_p_d/2+0.4);
        LLFLArrowHead.rotation.z = Math.PI/2;
        LeftLeanArrows.add(LLFLArrowHead)
    }
    if (const_var.b_t_M_L_t_L.getObjectByName("LLFRArrowHead") == undefined) {
        let LLFRArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        LLFRArrowHead.name = "LLFRArrowHead"
        LLFRArrowHead.material = LLFRArrowHead.material.clone();
        LLFRArrowHead.radiusTop = 12
        LLFRArrowHead.visible = (const_var.callMesure && params.add_left_lean)? true :false;
        LLFRArrowHead.position.set(params.p_w/-2-0.11, 0.1, params.lean_p_d/2+0.4);
        LLFRArrowHead.rotation.z = Math.PI/-2;
        LeftLeanArrows.add(LLFRArrowHead)
    }
    const frontArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.lean_p_w-0.2,80,100 );
    const frontArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
    const frontArrowBody = new THREE.Mesh( frontArrowBodyGeo, frontArrowBodymaterial );
    frontArrowBody.name = "frontArrowBody"
    frontArrowBody.visible = (const_var.callMesure && params.add_left_lean)? true :false;
    frontArrowBody.position.set( leftLeanC, 0.1, params.lean_p_d/2+0.4);
    frontArrowBody.rotation.z = Math.PI/2;
    LeftLeanArrowBody.add( frontArrowBody );
    /* ---------------End------------------*/



    /* Left Lean-to Back Horizantal Arrow */
    if (const_var.b_t_M_L_t_L.getObjectByName("LLBLArrowHead") == undefined) {
        let LLBLArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        LLBLArrowHead.visible = (const_var.callMesure && params.add_left_lean)? true :false;
        LLBLArrowHead.name = "LLBLArrowHead";
        LLBLArrowHead.material = LLBLArrowHead.material.clone();
        LLBLArrowHead.position.set(leftLeanX +0.11, 0.1, params.lean_p_d/-2-0.4);
        LLBLArrowHead.rotation.z = Math.PI/2;
        LeftLeanArrows.add(LLBLArrowHead)
    }
    if (const_var.b_t_M_L_t_L.getObjectByName("LLBRArrowHead") == undefined) {
        let LLBRArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        LLBRArrowHead.name = "LLBRArrowHead"
        LLBRArrowHead.material = LLBRArrowHead.material.clone();
        LLBRArrowHead.radiusTop = 12
        LLBRArrowHead.visible = (const_var.callMesure && params.add_left_lean)? true :false;
        LLBRArrowHead.position.set(params.p_w/-2-0.11, 0.1, params.lean_p_d/-2-0.4);
        LLBRArrowHead.rotation.z = Math.PI/-2;
        LeftLeanArrows.add(LLBRArrowHead)
    }
    const backArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.lean_p_w-0.2,80,100 );
    const backArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
    const backArrowBody = new THREE.Mesh( backArrowBodyGeo, backArrowBodymaterial );
    backArrowBody.name = "backArrowBody"
    backArrowBody.visible = (const_var.callMesure && params.add_left_lean)? true :false;
    backArrowBody.position.set( leftLeanC, 0.1, params.lean_p_d/-2-0.4);
    backArrowBody.rotation.z = Math.PI/2;
    LeftLeanArrowBody.add( backArrowBody );
    /* ---------------End------------------*/

    /* Left Lean to Fornt Vertical (Height) Arrow  */
     if (const_var.b_t_M_L_t_L.getObjectByName("LLFUArrowHead") == undefined) {
        let LLFUArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        LLFUArrowHead.name = "LLFUArrowHead"
        LLFUArrowHead.material = LLFUArrowHead.material.clone();
        LLFUArrowHead.visible = (const_var.callMesure && params.add_left_lean && params.add_left_front_lean_porch == false)? true :false;
        LLFUArrowHead.position.set(leftLeanX-0.1, params.lean_p_h-0.08, params.lean_p_d/2+0.15);
        LLFUArrowHead.rotation.y = Math.PI/2;
        LeftLeanArrows.add(LLFUArrowHead)
      }
      if (const_var.b_t_M_L_t_L.getObjectByName("LLFDArrowHead") == undefined) {
      let LLFDArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
      LLFDArrowHead.name = "LLFDArrowHead"
      LLFDArrowHead.material = LLFDArrowHead.material.clone();
      LLFDArrowHead.visible = (const_var.callMesure && params.add_left_lean && params.add_left_front_lean_porch == false)? true :false;
      LLFDArrowHead.position.set(leftLeanX-0.1, 0+0.08, params.lean_p_d/2+0.15);
      LLFDArrowHead.rotation.z = Math.PI;
      LeftLeanArrows.add(LLFDArrowHead)
      }
      const LLFHArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.lean_p_h-0.2,80,100 );
      // const LLFHArrowBodymaterial = new THREE.MeshBasicMaterial( {color: 0x17202A, } );
      const LLFHArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
      const LLFHArrowBody = new THREE.Mesh( LLFHArrowBodyGeo, LLFHArrowBodymaterial );
      LLFHArrowBody.name = "LLFHArrowBody"
      LLFHArrowBody.visible = (const_var.callMesure && params.add_left_lean && params.add_left_front_lean_porch == false) ? true :false;
      LLFHArrowBody.position.set(leftLeanX-0.1, params.lean_p_h/2, params.lean_p_d/2+0.15);
      LLFHArrowBody.rotation.y = Math.PI/2;
      LeftLeanArrowBody.add( LLFHArrowBody );
    /* ---------------End------------------*/

    /* Left Lean to Back Vertical (Height) Arrow  */
    if (const_var.b_t_M_L_t_L.getObjectByName("LLBUArrowHead") == undefined) {
        let LLBUArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        LLBUArrowHead.name = "LLBUArrowHead"
        LLBUArrowHead.material = LLBUArrowHead.material.clone();
        LLBUArrowHead.visible = (const_var.callMesure && params.add_left_lean && params.add_left_back_lean_porch == false)? true :false;
        LLBUArrowHead.position.set(leftLeanX-0.1, params.lean_p_h-0.08, params.lean_p_d/-2-0.15);
        LLBUArrowHead.rotation.y = Math.PI/2;
        LeftLeanArrows.add(LLBUArrowHead)
      }
      if (const_var.b_t_M_L_t_L.getObjectByName("LLBDArrowHead") == undefined) {
      let LLBDArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
      LLBDArrowHead.name = "LLBDArrowHead"
      LLBDArrowHead.material = LLBDArrowHead.material.clone();
      LLBDArrowHead.visible = (const_var.callMesure && params.add_left_lean && params.add_left_back_lean_porch == false)? true :false;
      LLBDArrowHead.position.set(leftLeanX-0.1, 0+0.08, params.lean_p_d/-2-0.15);
      LLBDArrowHead.rotation.z = Math.PI;
      LeftLeanArrows.add(LLBDArrowHead)
      }
      const LLBHArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.lean_p_h-0.2,80,100 );
      // const LLBHArrowBodymaterial = new THREE.MeshBasicMaterial( {color: 0x17202A, } );
      const LLBHArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
      const LLBHArrowBody = new THREE.Mesh( LLBHArrowBodyGeo, LLBHArrowBodymaterial );
      LLBHArrowBody.name = "LLBHArrowBody"
      LLBHArrowBody.visible = (const_var.callMesure && params.add_left_lean && params.add_left_back_lean_porch == false)? true :false;
      LLBHArrowBody.position.set(leftLeanX-0.1, params.lean_p_h/2, params.lean_p_d/-2-0.15);
      LLBHArrowBody.rotation.y = Math.PI/2;
      LeftLeanArrowBody.add( LLBHArrowBody );
    /* ---------------End------------------*/

     /* Left Side Horizantal Arrow */
 if (const_var.b_t_M_L_t_L.getObjectByName("LLSFArrow") == undefined) {
    let LLSFArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
    LLSFArrow.name = "LLSFArrow"
    LLSFArrow.material = LLSFArrow.material.clone();
    LLSFArrow.visible = (const_var.callMesure && params.add_left_lean)? true :false;
    LLSFArrow.position.set(leftLeanX-0.2, 0.1, params.lean_p_d/2);
    LLSFArrow.position.z = (params.add_left_front_lean_porch ? params.lean_p_d/2+params.leanF_p_w :params.lean_p_d/2);
    LLSFArrow.rotation.x = Math.PI/2;
    LeftLeanArrows.add(LLSFArrow)
  }
  if (const_var.b_t_M_L_t_L.getObjectByName("LLSBArrow") == undefined) {
    let LLSBArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
    LLSBArrow.name = "LLSBArrow"
    LLSBArrow.material = LLSBArrow.material.clone();
    LLSBArrow.visible = (const_var.callMesure && params.add_left_lean)? true :false;
    LLSBArrow.position.set(leftLeanX-0.2, 0.1, params.lean_p_d/-2);
    LLSBArrow.position.z = (params.add_left_back_lean_porch ? params.lean_p_d/-2-params.leanB_p_w :params.lean_p_d/-2);
    LLSBArrow.rotation.x = Math.PI/-2;
    LeftLeanArrows.add(LLSBArrow)
  }
  let  LLSArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.lean_p_d-0.2,80,100 );
  if (params.add_left_front_lean_porch){
    LLSArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.lean_p_d+params.leanF_p_w-0.2,80,100 );
  }if (params.add_left_back_lean_porch){
    LLSArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.lean_p_d +params.leanB_p_w-0.2,80,100 );
  } if(params.add_left_front_lean_porch && params.add_left_back_lean_porch){
    LLSArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.lean_p_d + params.leanF_p_w + params.leanB_p_w-0.2,80,100 );
  }
  const LLSArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
  const LLSArrowBody = new THREE.Mesh( LLSArrowBodyGeo, LLSArrowBodymaterial );
  LLSArrowBody.name = "LLSArrowBody"
  LLSArrowBody.visible = (const_var.callMesure && params.add_left_lean)? true :false;
  LLSArrowBody.position.set(leftLeanX-0.2, 0.1, 0);
  if (params.add_left_front_lean_porch){
    LLSArrowBody.position.z =  params.leanF_p_w/2;
  }if (params.add_left_back_lean_porch){
   LLSArrowBody.position.z =  -params.leanB_p_w/2;
  } if(params.add_left_front_lean_porch && params.add_left_back_lean_porch){
   LLSArrowBody.position.z = 0
  }
  LLSArrowBody.rotation.x = Math.PI/2;
  LeftLeanArrowBody.add( LLSArrowBody );
/* ---------------End------------------*/

if (params.leantoAlignmentLeft=="1") {
  LeftLeanArrows.position.z = 0;
  LeftLeanArrowDim.position.z = 0;
  LeftLeanArrowBody.position.z = 0;
}
if (params.leantoAlignmentLeft=="2") {
  LeftLeanArrows.position.z = params.p_d/2-params.lean_p_d/2;
  LeftLeanArrowDim.position.z = params.p_d/2-params.lean_p_d/2;
  LeftLeanArrowBody.position.z = params.p_d/2-params.lean_p_d/2;
}
if (params.leantoAlignmentLeft=="3"){
    LeftLeanArrows.position.z = -params.p_d/2+params.lean_p_d/2;
    LeftLeanArrowDim.position.z = -params.p_d/2+params.lean_p_d/2;
    LeftLeanArrowBody.position.z = -params.p_d/2+params.lean_p_d/2;
}
if (params.isShowCenter == true ) {
  LeftLeanArrows.visible = false
  LeftLeanArrowDim.visible = false
  LeftLeanArrowBody.visible = false
}
}

    // Right Lean-To
    if (params.add_right_lean ){
    let RightleanToLegX = params.p_w / 2 + params.leanR_p_w;
    let rightLeanC = params.p_w / 2 + params.leanR_p_w/2;

    let  Width4RightLeanGeo = new THREE.TextGeometry( params.leanR_p_w+"' W", {
        font:const_var.font, size: 0.3, height: 0.02, /*weight: 'bolder',*/
        curveSegments: 3, bevelEnabled: true,bevelThickness: 0.01,
        bevelSize: 0, bevelSegments: 3,
    } );
    let  Width4RightLeanMaterial = new THREE.MeshPhongMaterial({color:0x282828});
    let  Width4RightLean = new THREE.Mesh(Width4RightLeanGeo, Width4RightLeanMaterial);
    Width4RightLean.name = "Width4RightLean"
    Width4RightLean.visible = (const_var.callMesure && params.add_right_lean)? true :false;
    Width4RightLean.position.set(rightLeanC, 0.17, params.leanR_p_d/2+0.4);
    RightLeanArrowDim.add(Width4RightLean);

    if (RightLeanArrowDim.getObjectByName("RLWidth4Back") == undefined) {
        let RLWidth4Back = RightLeanArrowDim.getObjectByName("Width4RightLean").clone();
        RLWidth4Back.name = "RLWidth4Back"
        RLWidth4Back.visible = (const_var.callMesure && params.add_right_lean)? true :false;
        RLWidth4Back.position.set(rightLeanC, 0.17, params.leanR_p_d/-2-0.4);
        RLWidth4Back.rotation.y = Math.PI;
        RightLeanArrowDim.add(RLWidth4Back)
        }
    
    let RightLengthValue = params.leanR_p_d;
    if (params.add_right_front_lean_porch){
      RightLengthValue =  params.leanR_p_d+params.leanF_p_w;
    }if (params.add_right_back_lean_porch){
     RightLengthValue =  params.leanR_p_d+params.leanB_p_w;
    } if(params.add_right_front_lean_porch && params.add_right_back_lean_porch){
     RightLengthValue = params.leanR_p_d+params.leanF_p_w+params.leanB_p_w
    }    
    let  Length4RightLeanGeo = new THREE.TextGeometry( RightLengthValue+"' L", {
        font:const_var.font, size: 0.3, height: 0.02, /*weight: 'bolder',*/
        curveSegments: 3, bevelEnabled: true,bevelThickness: 0.001,
        bevelSize: 0, bevelSegments: 3,
    } );
    let  Length4RightLeanMaterial = new THREE.MeshPhongMaterial({color:0x282828});
    let  Length4RightLean = new THREE.Mesh(Length4RightLeanGeo, Length4RightLeanMaterial);
    Length4RightLean.name = "Length4RightLean"
    Length4RightLean.visible = (const_var.callMesure && params.add_right_lean)? true :false;
    Length4RightLean.position.set(RightleanToLegX+0.2, 0.17, 0);
    if (params.add_right_front_lean_porch){
      Length4RightLean.position.z =  params.leanF_p_w/2;
    }if (params.add_right_back_lean_porch){
     Length4RightLean.position.z =  -params.leanB_p_w/2;
    } if(params.add_right_front_lean_porch && params.add_right_back_lean_porch){
     Length4RightLean.position.z = 0
    }
    Length4RightLean.rotation.y = Math.PI/2;
    RightLeanArrowDim.add(Length4RightLean);
    
    let   Height4RightLeanGeo = new THREE.TextGeometry( params.leanR_p_h+"' H" , {
        font:const_var.font, size: 0.3, height: 0.02, /*weight: 'bolder',*/
        curveSegments: 3, bevelEnabled: true,bevelThickness: 0.01,
        bevelSize: 0, bevelSegments: 3,
      } );
    let   Height4RightLeanMaterial = new THREE.MeshPhongMaterial({color:0x282828});
    let  Height4RightLean = new THREE.Mesh( Height4RightLeanGeo,  Height4RightLeanMaterial);
    Height4RightLean.name = "Height4RightLean"
    Height4RightLean.visible = (const_var.callMesure && params.add_right_lean && params.add_right_front_lean_porch == false)? true :false;
    Height4RightLean.position.set(RightleanToLegX-1, params.leanR_p_h-0.8, params.leanR_p_d/2+0.2);
    RightLeanArrowDim.add(Height4RightLean);

    if (RightLeanArrowDim.getObjectByName("RLHeight4Back") == undefined) {
        let RLHeight4Back = RightLeanArrowDim.getObjectByName("Height4RightLean").clone();
        RLHeight4Back.name = "RLHeight4Back"
        RLHeight4Back.visible = (const_var.callMesure && params.add_right_lean && params.add_right_back_lean_porch == false)? true :false;
        RLHeight4Back.position.set(RightleanToLegX-0.35,  params.leanR_p_h-0.5, params.leanR_p_d/-2-0.4);
        RLHeight4Back.rotation.y = Math.PI;
        RightLeanArrowDim.add(RLHeight4Back)
        }

        /*Right Lean_to Fornt Horizantal Arrow */
        if (const_var.b_t_M_R_t_R.getObjectByName("RLFLArrowHead") == undefined) {
            let RLFLArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
            RLFLArrowHead.visible = (const_var.callMesure && params.add_right_lean)? true :false;
            RLFLArrowHead.name = "RLFLArrowHead";
            RLFLArrowHead.material = RLFLArrowHead.material.clone();
            RLFLArrowHead.position.set( params.p_w/2, 0.1, params.leanR_p_d/2+0.4);
            RLFLArrowHead.rotation.z = Math.PI/2;
            RightLeanArrows.add(RLFLArrowHead)
        }
        if (const_var.b_t_M_R_t_R.getObjectByName("RLFRArrowHead") == undefined) {
            let RLFRArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
            RLFRArrowHead.name = "RLFRArrowHead"
            RLFRArrowHead.material = RLFRArrowHead.material.clone();
            RLFRArrowHead.radiusTop = 12
            RLFRArrowHead.visible = (const_var.callMesure && params.add_right_lean)? true :false;
            RLFRArrowHead.position.set(RightleanToLegX, 0.1, params.leanR_p_d/2+0.4);
            RLFRArrowHead.rotation.z = Math.PI/-2;
            RightLeanArrows.add(RLFRArrowHead)
        }
        const RLFrontArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanR_p_w-0.2,80,100 );
        const RLFrontArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
        const RLFrontArrowBody = new THREE.Mesh( RLFrontArrowBodyGeo, RLFrontArrowBodymaterial );
        RLFrontArrowBody.name = "RLfrontArrowBody"
        RLFrontArrowBody.visible = (const_var.callMesure && params.add_right_lean)? true :false;
        RLFrontArrowBody.position.set( rightLeanC, 0.1, params.leanR_p_d/2+0.4);
        RLFrontArrowBody.rotation.z = Math.PI/2;
        RightLeanArrowBody.add( RLFrontArrowBody );


        /*Right Leanto Back Horizantal Arrow */
        if (const_var.b_t_M_R_t_R.getObjectByName("RLBLArrowHead") == undefined) {
            let RLBLArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
            RLBLArrowHead.visible = (const_var.callMesure && params.add_right_lean)? true :false;
            RLBLArrowHead.name = "RLBLArrowHead";
            RLBLArrowHead.material = RLBLArrowHead.material.clone();
            RLBLArrowHead.position.set( params.p_w/2, 0.1, params.leanR_p_d/-2-0.4);
            RLBLArrowHead.rotation.z = Math.PI/2;
            RightLeanArrows.add(RLBLArrowHead)
        }
        if (const_var.b_t_M_R_t_R.getObjectByName("RLBRArrowHead") == undefined) {
            let RLBRArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
            RLBRArrowHead.name = "RLBRArrowHead"
            RLBRArrowHead.radiusTop = 12
            RLBRArrowHead.visible = (const_var.callMesure && params.add_right_lean)? true :false;
            RLBRArrowHead.position.set(RightleanToLegX, 0.1, params.leanR_p_d/-2-0.4);
            RLBRArrowHead.rotation.z = Math.PI/-2;
            RightLeanArrows.add(RLBRArrowHead)
        }
        const RLBrontArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanR_p_w-0.2,80,100 );
        const RLBrontArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
        const RLBrontArrowBody = new THREE.Mesh( RLBrontArrowBodyGeo, RLBrontArrowBodymaterial );
        RLBrontArrowBody.name = "RLBrontArrowBody"
        RLBrontArrowBody.visible = (const_var.callMesure && params.add_right_lean)? true :false;
        RLBrontArrowBody.position.set( rightLeanC, 0.1, params.leanR_p_d/-2-0.4);
        RLBrontArrowBody.rotation.z = Math.PI/2;
        RightLeanArrowBody.add( RLBrontArrowBody );
        /* ---------------End------------------*/

         /* Right Lean to Fornt Vertical (Height) Arrow  */
        if (const_var.b_t_M_R_t_R.getObjectByName("RLFUArrowHead") == undefined) {
           let RLFUArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
           RLFUArrowHead.name = "RLFUArrowHead"
           RLFUArrowHead.material = RLFUArrowHead.material.clone();
           RLFUArrowHead.visible = (const_var.callMesure && params.add_right_lean && params.add_right_front_lean_porch == false)? true :false;
           RLFUArrowHead.position.set(RightleanToLegX-0.1, params.leanR_p_h-0.08, params.leanR_p_d/2+0.15);
           RLFUArrowHead.rotation.y = Math.PI/2;
           RightLeanArrows.add(RLFUArrowHead)
         }
         if (const_var.b_t_M_R_t_R.getObjectByName("RLFDArrowHead") == undefined) {
         let RLFDArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
         RLFDArrowHead.name = "RLFDArrowHead"
         RLFDArrowHead.material = RLFDArrowHead.material.clone();
         RLFDArrowHead.visible = (const_var.callMesure && params.add_right_lean && params.add_right_front_lean_porch == false)? true :false;
         RLFDArrowHead.position.set(RightleanToLegX-0.1, 0+0.08, params.leanR_p_d/2+0.15);
         RLFDArrowHead.rotation.z = Math.PI;
         RightLeanArrows.add(RLFDArrowHead)
         }
         const RLFHArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanR_p_h-0.2,80,100 );
         // const RLFHArrowBodymaterial = new THREE.MeshBasicMaterial( {color: 0x17202A, } );
         const RLFHArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
         const RLFHArrowBody = new THREE.Mesh( RLFHArrowBodyGeo, RLFHArrowBodymaterial );
         RLFHArrowBody.name = "RLFHArrowBody"
         RLFHArrowBody.visible = (const_var.callMesure && params.add_right_lean && params.add_right_front_lean_porch == false)? true :false;
         RLFHArrowBody.position.set(RightleanToLegX-0.1, params.leanR_p_h/2, params.leanR_p_d/2+0.15);
         RLFHArrowBody.rotation.y = Math.PI/2;
         RightLeanArrowBody.add( RLFHArrowBody );
        /* ---------------End------------------*/

         /* Right Lean to Back Vertical (Height) Arrow  */
         if (const_var.b_t_M_R_t_R.getObjectByName("RLBUArrowHead") == undefined) {
            let RLBUArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
            RLBUArrowHead.name = "RLBUArrowHead"
            RLBUArrowHead.material = RLBUArrowHead.material.clone();
            RLBUArrowHead.visible = (const_var.callMesure && params.add_right_lean && params.add_right_back_lean_porch == false)? true :false;
            RLBUArrowHead.position.set(RightleanToLegX-0.1, params.leanR_p_h-0.08, params.leanR_p_d/-2-0.15);
            RLBUArrowHead.rotation.y = Math.PI/2;
            RightLeanArrows.add(RLBUArrowHead)
          }
          if (const_var.b_t_M_R_t_R.getObjectByName("RLBDArrowHead") == undefined) {
          let RLBDArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
          RLBDArrowHead.name = "RLBDArrowHead"
          RLBDArrowHead.material = RLBDArrowHead.material.clone();
          RLBDArrowHead.visible = (const_var.callMesure && params.add_right_lean && params.add_right_back_lean_porch == false)? true :false;
          RLBDArrowHead.position.set(RightleanToLegX-0.1, 0+0.08, params.leanR_p_d/-2-0.15);
          RLBDArrowHead.rotation.z = Math.PI;
          RightLeanArrows.add(RLBDArrowHead)
          }
          const RLBHArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanR_p_h-0.2,80,100 );
          const RLBHArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
          const RLBHArrowBody = new THREE.Mesh( RLBHArrowBodyGeo, RLBHArrowBodymaterial );
          RLBHArrowBody.name = "RLBHArrowBody"
          RLBHArrowBody.visible = (const_var.callMesure && params.add_right_lean && params.add_right_back_lean_porch == false)? true :false;
          RLBHArrowBody.position.set(RightleanToLegX-0.1, params.leanR_p_h/2, params.leanR_p_d/-2-0.15);
          RLBHArrowBody.rotation.y = Math.PI/2;
          RightLeanArrowBody.add( RLBHArrowBody );
        /* ---------------End------------------*/

             /* RIght Lean to Side Horizantal Arrow */
     if (const_var.b_t_M_R_t_R.getObjectByName("LLSFArrow") == undefined) {
        let RLSFArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        RLSFArrow.name = "RLSFArrow"
        RLSFArrow.material = RLSFArrow.material.clone();
        RLSFArrow.visible = (const_var.callMesure && params.add_right_lean)? true :false;
        RLSFArrow.position.set(RightleanToLegX+0.2, 0.1, params.leanR_p_d/2);
        RLSFArrow.position.z = (params.add_right_front_lean_porch ? params.leanR_p_d/2+params.leanF_p_w :params.leanR_p_d/2);
        RLSFArrow.rotation.x = Math.PI/2;
        RightLeanArrows.add(RLSFArrow)
      }
      if (const_var.b_t_M_R_t_R.getObjectByName("RLSBArrow") == undefined) {
        let RLSBArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        RLSBArrow.name = "RLSBArrow"
        RLSBArrow.material = RLSBArrow.material.clone();
        RLSBArrow.visible = (const_var.callMesure && params.add_right_lean)? true :false;
        RLSBArrow.position.set(RightleanToLegX+0.2, 0.1, params.leanR_p_d/-2);
        RLSBArrow.position.z = (params.add_right_back_lean_porch ? params.leanR_p_d/-2-params.leanB_p_w :params.leanR_p_d/-2);
        RLSBArrow.rotation.x = Math.PI/-2;
        RightLeanArrows.add(RLSBArrow)
      }
    
      let RLSArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanR_p_d-0.2,80,100 );
      if (params.add_right_front_lean_porch){
        RLSArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanR_p_d+params.leanF_p_w-0.2,80,100 );
      }if (params.add_right_back_lean_porch){
        RLSArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanR_p_d +params.leanB_p_w-0.2,80,100 );
      } if(params.add_right_front_lean_porch && params.add_right_back_lean_porch){
        RLSArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanR_p_d + params.leanF_p_w + params.leanB_p_w-0.2,80,100 );
      }
      // const RLSArrowBodymaterial = new THREE.MeshBasicMaterial( {color: 0x17202A, } );
      const RLSArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
      const RLSArrowBody = new THREE.Mesh( RLSArrowBodyGeo, RLSArrowBodymaterial );
      RLSArrowBody.name = "RLSArrowBody"
      RLSArrowBody.visible = (const_var.callMesure && params.add_right_lean)? true :false;
      RLSArrowBody.position.set(RightleanToLegX+0.2, 0.1, 0);
      if (params.add_right_front_lean_porch){
        RLSArrowBody.position.z =  params.leanF_p_w/2;
      }if (params.add_right_back_lean_porch){
       RLSArrowBody.position.z =  -params.leanB_p_w/2;
      } if(params.add_right_front_lean_porch && params.add_right_back_lean_porch){
       RLSArrowBody.position.z = 0
      }
      RLSArrowBody.rotation.x = Math.PI/2;
      RightLeanArrowBody.add( RLSArrowBody );
    /* ---------------End------------------*/

      /*Alignment For Right Leanto */
      if (params.leantoAlignmentRight=="1") {
        RightLeanArrows.position.z = 0;
        RightLeanArrowDim.position.z = 0;
        RightLeanArrowBody.position.z = 0;
      }
      if (params.leantoAlignmentRight=="2") {
         RightLeanArrows.position.z = params.p_d/2-params.leanR_p_d/2;
         RightLeanArrowDim.position.z = params.p_d/2-params.leanR_p_d/2;
         RightLeanArrowBody.position.z = params.p_d/2-params.leanR_p_d/2;
      }
      if (params.leantoAlignmentRight=="3") {
         RightLeanArrows.position.z = -params.p_d/2+params.leanR_p_d/2;
         RightLeanArrowDim.position.z = -params.p_d/2+params.leanR_p_d/2;
         RightLeanArrowBody.position.z = -params.p_d/2+params.leanR_p_d/2;
      }
      if (params.isShowCenter == true ) {
        RightLeanArrows.visible = false
        RightLeanArrowDim.visible = false
        RightLeanArrowBody.visible = false
      }
    }
    // Front lean-To
    if (params.add_front_lean ){
    let  Width4FrontLeanGeo = new THREE.TextGeometry( params.leanF_p_w+"' W", {
        font:const_var.font, size: 0.3, height: 0.02, /*weight: 'bolder',*/
        curveSegments: 3, bevelEnabled: true,bevelThickness: 0.01,
        bevelSize: 0, bevelSegments: 3,
    } );
    let  Width4FrontLeanMaterial = new THREE.MeshPhongMaterial({color:0x282828});
    let  Width4FrontLean = new THREE.Mesh(Width4FrontLeanGeo, Width4FrontLeanMaterial);
    Width4FrontLean.name = "Width4FrontLean"
    Width4FrontLean.visible = (const_var.callMesure && params.add_front_lean)? true :false;
    Width4FrontLean.position.set(params.leanF_p_d/2+0.2, 0.2, params.p_d/2+params.leanF_p_w/2+0.2);
    // Width4FrontLean.position.x = (params.add_right_front_lean_porch ? params.leanF_p_d/2 +0.2 + params.leanR_p_w :params.leanF_p_d/2+0.2);
    Width4FrontLean.rotation.y = Math.PI/2;
    FrontLeanArrowDim.add(Width4FrontLean);

    if (FrontLeanArrowDim.getObjectByName("FLWidth4Back") == undefined) {
      let FLWidth4Back = FrontLeanArrowDim.getObjectByName("Width4FrontLean").clone();
      FLWidth4Back.name = "FLWidth4Back"
      FLWidth4Back.visible = (const_var.callMesure && params.add_front_lean) ? true :false;
      FLWidth4Back.position.set(params.leanF_p_d/-2-0.2, 0.2, params.p_d/2+params.leanF_p_w/2+0.2);
      // FLWidth4Back.position.x = (params.add_left_front_lean_porch ? params.leanF_p_d/-2 - params.lean_p_w -0.2: params.leanF_p_d/-2-0.2);
      FLWidth4Back.rotation.y = Math.PI/-2;
      FrontLeanArrowDim.add(FLWidth4Back)
      }
    
    let  Length4FrontLeanGeo = new THREE.TextGeometry( params.leanF_p_d+"' L", {
        font:const_var.font, size: 0.3, height: 0.02, /*weight: 'bolder',*/
        curveSegments: 3, bevelEnabled: true,bevelThickness: 0.001,
        bevelSize: 0, bevelSegments: 3,
    } );
    if(params.add_right_front_lean_porch == true){
      Length4FrontLeanGeo = new THREE.TextGeometry( (params.leanF_p_d+params.leanR_p_w) +"' L", {
        font:const_var.font, size: 0.3, height: 0.02, /*weight: 'bolder',*/
        curveSegments: 3, bevelEnabled: true,bevelThickness: 0.001,
        bevelSize: 0, bevelSegments: 3,
    } );
     }
     if(params.add_left_front_lean_porch == true){
      Length4FrontLeanGeo = new THREE.TextGeometry( (params.leanF_p_d+params.lean_p_w) +"' L", {
        font:const_var.font, size: 0.3, height: 0.02, /*weight: 'bolder',*/
        curveSegments: 3, bevelEnabled: true,bevelThickness: 0.001,
        bevelSize: 0, bevelSegments: 3,
    } );     }
     if(params.add_left_front_lean_porch == true && params.add_right_front_lean_porch == true){
      Length4FrontLeanGeo = new THREE.TextGeometry( (params.leanF_p_d+params.leanR_p_w+params.lean_p_w) +"' L", {
        font:const_var.font, size: 0.3, height: 0.02, /*weight: 'bolder',*/
        curveSegments: 3, bevelEnabled: true,bevelThickness: 0.001,
        bevelSize: 0, bevelSegments: 3,
    } );     }
    let  Length4FrontLeanMaterial = new THREE.MeshPhongMaterial({color:0x282828});
    let  Length4FrontLean = new THREE.Mesh(Length4FrontLeanGeo, Length4FrontLeanMaterial);
    Length4FrontLean.name = "Length4FrontLean"
    Length4FrontLean.visible = (const_var.callMesure && params.add_front_lean)? true :false;
    Length4FrontLean.position.set(0,0.2,params.p_d/2+params.leanF_p_w+0.2);
    if(params.add_right_front_lean_porch == true){
      Length4FrontLean.position.x =  ( 0+ params.leanR_p_w/2)
    }
    if(params.add_left_front_lean_porch == true){
      Length4FrontLean.position.x =  (-params.lean_p_w/2)
    }
    if(params.add_left_front_lean_porch == true && params.add_right_front_lean_porch == true){
      Length4FrontLean.position.x =  0
    }  
    FrontLeanArrowDim.add(Length4FrontLean);
    
    let   Height4FrontLeanGeo = new THREE.TextGeometry( params.leanF_p_h+"' H" , {
        font:const_var.font, size: 0.3, height: 0.02, /*weight: 'bolder',*/
        curveSegments: 3, bevelEnabled: true,bevelThickness: 0.01,
        bevelSize: 0, bevelSegments: 3,
      } );
    let   Height4FrontLeanMaterial = new THREE.MeshPhongMaterial({color:0x282828});
    let  Height4FrontLean = new THREE.Mesh( Height4FrontLeanGeo,  Height4FrontLeanMaterial);
    Height4FrontLean.name = "Height4FrontLean"
    Height4FrontLean.visible = (const_var.callMesure && params.add_front_lean)? true :false;
    Height4FrontLean.position.set(params.leanF_p_d/2+0.1 +5, params.leanF_p_h-0.8, params.p_d/2+params.leanF_p_w+0.2);
    Height4FrontLean.position.x = (params.add_right_front_lean_porch ? params.leanF_p_d/2 +0.2 + params.leanR_p_w :params.leanF_p_d/2+0.2);
    FrontLeanArrowDim.add(Height4FrontLean);

    if (FrontLeanArrowDim.getObjectByName("frontLeanHeight4Back") == undefined) {
      let frontLeanHeight4Back = FrontLeanArrowDim.getObjectByName("Height4FrontLean").clone();
      frontLeanHeight4Back.name = "frontLeanHeight4Back"
      frontLeanHeight4Back.visible = (const_var.callMesure && params.add_front_lean) ? true :false;
      frontLeanHeight4Back.position.set(params.leanF_p_d/-2, params.leanF_p_h-0.8, params.p_d/2+params.leanF_p_w+0.2);
      frontLeanHeight4Back.position.x = (params.add_left_front_lean_porch ? params.leanF_p_d/-2 +0.2- params.lean_p_w : params.leanF_p_d/-2+0.2);
      FrontLeanArrowDim.add(frontLeanHeight4Back)
      }

    /* Fornt lean to side Horizantal Arrow */
    // let frontLeanToLegx = params.p_d /-2 - params.leanF_p_w;
    if (const_var.b_t_M_F_t_F.getObjectByName("FLLArrowHead") == undefined) {
        let FLLArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        FLLArrowHead.visible = (const_var.callMesure && params.add_front_lean)? true :false;
        FLLArrowHead.name = "FLLArrowHead";
        FLLArrowHead.material = FLLArrowHead.material.clone();
        FLLArrowHead.position.set(params.leanF_p_d/-2, 0.1, params.p_d/2+params.leanF_p_w+0.2);
        FLLArrowHead.position.x = (params.add_left_front_lean_porch ? params.leanF_p_d/-2 - params.lean_p_w : params.leanF_p_d/-2);
        FLLArrowHead.rotation.z = Math.PI/2;
        FrontLeanArrow.add(FLLArrowHead)
    }
    if (const_var.b_t_M_F_t_F.getObjectByName("FLRArrowHead") == undefined) {
        let FLRArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        FLRArrowHead.name = "FLRArrowHead"
        FLRArrowHead.material = FLRArrowHead.material.clone();
        FLRArrowHead.radiusTop = 12
        FLRArrowHead.visible = (const_var.callMesure && params.add_front_lean)? true :false;
        FLRArrowHead.position.set(params.leanF_p_d/2, 0.1, params.p_d/2+params.leanF_p_w+0.2);
        FLRArrowHead.position.x = params.add_right_front_lean_porch ?params.leanF_p_d/2+params.leanR_p_w :params.leanF_p_d/2
        FLRArrowHead.rotation.z = Math.PI/-2;
        FrontLeanArrow.add(FLRArrowHead)
    }
  
    
    let FLSArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025,params.leanF_p_d-0.2,80,100 );
    if(params.add_right_front_lean_porch == true){
     FLSArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanF_p_d-0.2 + params.leanR_p_w,80,100 );
    }
    if(params.add_left_front_lean_porch == true){
     FLSArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanF_p_d-0.2 + params.lean_p_w,80,100 );
    }
    if(params.add_left_front_lean_porch == true && params.add_right_front_lean_porch == true){
     FLSArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanF_p_d-0.2 + params.lean_p_w + params.leanR_p_w,80,100 );
    }
    const FLSArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
    const FLSArrowBody = new THREE.Mesh( FLSArrowBodyGeo, FLSArrowBodymaterial );
    FLSArrowBody.name = "FLSArrowBody"
    FLSArrowBody.visible = (const_var.callMesure && params.add_front_lean)? true :false;
    FLSArrowBody.position.set(0,0.1,params.p_d/2+params.leanF_p_w+0.2);
    if(params.add_right_front_lean_porch == true){
      FLSArrowBody.position.x =  ( 0+ params.leanR_p_w/2)
    }
    if(params.add_left_front_lean_porch == true){
      FLSArrowBody.position.x =  (-params.lean_p_w/2)
    }
    if(params.add_left_front_lean_porch == true && params.add_right_front_lean_porch == true){
      FLSArrowBody.position.x =  0
    }   
    FLSArrowBody.rotation.z = Math.PI/2;
    FrontLeanArrowBody.add( FLSArrowBody );
    /* ---------------End------------------*/

     /*Front Lean To front Horizantal Arrow */
       if (const_var.b_t_M_F_t_F.getObjectByName("FLFrontArrow") == undefined) {
        let FLFrontArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        FLFrontArrow.name = "FLFrontArrow"
        FLFrontArrow.material = FLFrontArrow.material.clone();
        FLFrontArrow.visible = (const_var.callMesure && params.add_front_lean)? true :false;
        FLFrontArrow.position.set(params.leanF_p_d/2+0.2, 0.1, params.p_d/2+params.leanF_p_w+0.2);
        // FLFrontArrow.position.x = (params.add_right_front_lean_porch ? params.leanF_p_d/2 + params.leanR_p_w+0.2 :params.leanF_p_d/2+0.2);
        FLFrontArrow.rotation.x = Math.PI/2;
        FrontLeanArrow.add(FLFrontArrow)
      }
      if (const_var.b_t_M_F_t_F.getObjectByName("FLBackArrow") == undefined) {
        let FLBackArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        FLBackArrow.name = "FLBackArrow"
        FLBackArrow.material = FLBackArrow.material.clone();
        FLBackArrow.visible = (const_var.callMesure && params.add_front_lean)? true :false;
        FLBackArrow.position.set(params.leanF_p_d/2+0.2, 0.1, params.p_d/2+0.2);
        // FLBackArrow.position.x = (params.add_right_front_lean_porch ? params.leanF_p_d/2 + params.leanR_p_w+0.2 :params.leanF_p_d/2+0.2);
        FLBackArrow.rotation.x = Math.PI/-2;
        FrontLeanArrow.add(FLBackArrow)
      }

      const FLFArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanF_p_w-0.2,80,100 );
      const FLFArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
      const FLFArrowBody = new THREE.Mesh( FLFArrowBodyGeo, FLFArrowBodymaterial );
      FLFArrowBody.name = "FLFArrowBody"
      FLFArrowBody.visible = (const_var.callMesure && params.add_front_lean)? true :false;
      FLFArrowBody.position.set(params.leanF_p_d/2+0.2, 0.1, params.p_d/2+params.leanF_p_w/2+0.2);
      // FLFArrowBody.position.x = (params.add_right_front_lean_porch ? params.leanF_p_d/2 + params.leanR_p_w+0.2 :params.leanF_p_d/2+0.2);
      FLFArrowBody.rotation.x = Math.PI/2;
      FrontLeanArrowBody.add( FLFArrowBody );
      /* ---------------End------------------*/

      /*Front Lean To back Horizantal Arrow */
      if (const_var.b_t_M_F_t_F.getObjectByName("FLBFrontArrow") == undefined) {
        let FLBFrontArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        FLBFrontArrow.name = "FLBFrontArrow"
        FLBFrontArrow.material = FLBFrontArrow.material.clone();
        FLBFrontArrow.visible = (const_var.callMesure && params.add_front_lean)? true :false;
        FLBFrontArrow.position.set(params.leanF_p_d/-2-0.2, 0.1, params.p_d/2+params.leanF_p_w+0.2);
        // FLBFrontArrow.position.x = (params.add_left_front_lean_porch ? params.leanF_p_d/-2 - params.lean_p_w -0.2: params.leanF_p_d/-2-0.2);
        FLBFrontArrow.rotation.x = Math.PI/2;
        FrontLeanArrow.add(FLBFrontArrow)
      }
      if (const_var.b_t_M_F_t_F.getObjectByName("FLBBackArrow") == undefined) {
        let FLBBackArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        FLBBackArrow.name = "FLBBackArrow"
        FLBBackArrow.material = FLBBackArrow.material.clone();
        FLBBackArrow.visible = (const_var.callMesure && params.add_front_lean)? true :false;
        FLBBackArrow.position.set(params.leanF_p_d/-2-0.2, 0.1, params.p_d/2+0.2);
        // FLBBackArrow.position.x = (params.add_left_front_lean_porch ? params.leanF_p_d/-2 - params.lean_p_w -0.2: params.leanF_p_d/-2-0.2);
        FLBBackArrow.rotation.x = Math.PI/-2;
        FrontLeanArrow.add(FLBBackArrow)
      }

      const FLBArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanF_p_w-0.2,80,100 );
      const FLBArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );

      const FLBArrowBody = new THREE.Mesh( FLBArrowBodyGeo, FLBArrowBodymaterial );
      FLBArrowBody.name = "FLBArrowBody"
      FLBArrowBody.visible = (const_var.callMesure && params.add_front_lean)? true :false;
      FLBArrowBody.position.set(params.leanF_p_d/-2-0.2, 0.1, params.p_d/2+params.leanF_p_w/2+0.2);
      // FLBArrowBody.position.x = (params.add_left_front_lean_porch ? params.leanF_p_d/-2 - params.lean_p_w -0.2: params.leanF_p_d/-2-0.2);
      FLBArrowBody.rotation.x = Math.PI/2;
      FrontLeanArrowBody.add( FLBArrowBody );
      /* ---------------End------------------*/



   /* Fornt Lean To Vertical (Height) Arrow */
   if (const_var.b_t_M_F_t_F.getObjectByName("FLFUArrowHead") == undefined) {
    let FLFUArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
    FLFUArrowHead.name = "FLFUArrowHead"
    FLFUArrowHead.material = FLFUArrowHead.material.clone();
    FLFUArrowHead.visible = (const_var.callMesure && params.add_front_lean)? true :false;
    FLFUArrowHead.position.set(params.leanF_p_d/2, params.leanF_p_h-0.1, params.p_d/2+params.leanF_p_w+0.4);
    FLFUArrowHead.position.x = (params.add_right_front_lean_porch ? params.leanF_p_d/2 + params.leanR_p_w :params.leanF_p_d/2);
    FLFUArrowHead.rotation.y = Math.PI/2;
    FrontLeanArrow.add(FLFUArrowHead)
  }
  if (const_var.b_t_M_F_t_F.getObjectByName("FLFDArrowHead") == undefined) {
  let FLFDArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
  FLFDArrowHead.name = "FLFDArrowHead"
  FLFDArrowHead.material = FLFDArrowHead.material.clone();
  FLFDArrowHead.visible = (const_var.callMesure && params.add_front_lean)? true :false;
  FLFDArrowHead.position.set(params.leanF_p_d/2, 0, params.p_d/2+params.leanF_p_w+0.4);
  FLFDArrowHead.position.x = (params.add_right_front_lean_porch ? params.leanF_p_d/2 + params.leanR_p_w :params.leanF_p_d/2);
  FLFDArrowHead.rotation.z = Math.PI;
  FrontLeanArrow.add(FLFDArrowHead)
  }
  const FLFHArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanF_p_h-0.2,80,100 );
  const FLFHArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
  const FLFHArrowBody = new THREE.Mesh( FLFHArrowBodyGeo, FLFHArrowBodymaterial );
  FLFHArrowBody.name = "FLFHArrowBody"
  FLFHArrowBody.visible = (const_var.callMesure && params.add_front_lean)? true :false;
  FLFHArrowBody.position.set(params.leanF_p_d/2, params.leanF_p_h/2, params.p_d/2+params.leanF_p_w+0.4);
  FLFHArrowBody.position.x = (params.add_right_front_lean_porch ? params.leanF_p_d/2 + params.leanR_p_w :params.leanF_p_d/2);
  FLFHArrowBody.rotation.y = Math.PI/2;
  FrontLeanArrowBody.add( FLFHArrowBody );
/* ---------------End------------------*/

  /* Fornt Lean To  Back Vertical (Height) Arrow */
    if (const_var.b_t_M_F_t_F.getObjectByName("FLBUArrowHead") == undefined) {
      let FLBUArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
      FLBUArrowHead.name = "FLBUArrowHead"
      FLBUArrowHead.material = FLBUArrowHead.material.clone();
      FLBUArrowHead.visible = (const_var.callMesure && params.add_front_lean)? true :false;
      FLBUArrowHead.position.set(params.leanF_p_d/-2, params.leanF_p_h-0.1, params.p_d/2+params.leanF_p_w+0.4);
      FLBUArrowHead.position.x = (params.add_left_front_lean_porch ? params.leanF_p_d/-2 - params.lean_p_w : params.leanF_p_d/-2);
      FLBUArrowHead.rotation.y = Math.PI/2;
      FrontLeanArrow.add(FLBUArrowHead)
    }
    if (const_var.b_t_M_F_t_F.getObjectByName("FLBDArrowHead") == undefined) {
    let FLBDArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
    FLBDArrowHead.name = "FLBDArrowHead"
    FLBDArrowHead.material = FLBDArrowHead.material.clone();
    FLBDArrowHead.visible = (const_var.callMesure && params.add_front_lean)? true :false;
    FLBDArrowHead.position.set(params.leanF_p_d/-2, 0, params.p_d/2+params.leanF_p_w+0.4);
    FLBDArrowHead.position.x = (params.add_left_front_lean_porch ? params.leanF_p_d/-2 - params.lean_p_w : params.leanF_p_d/-2);
    FLBDArrowHead.rotation.z = Math.PI;
    FrontLeanArrow.add(FLBDArrowHead)
    }
    const FLBHArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanF_p_h-0.2,80,100 );
    const FLBHArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
    const FLBHArrowBody = new THREE.Mesh( FLBHArrowBodyGeo, FLBHArrowBodymaterial );
    FLBHArrowBody.name = "FLBHArrowBody"
    FLBHArrowBody.visible = (const_var.callMesure && params.add_front_lean)? true :false;
    FLBHArrowBody.position.set(params.leanF_p_d/-2, params.leanF_p_h/2, params.p_d/2+params.leanF_p_w+0.4);
    FLBHArrowBody.position.x = (params.add_left_front_lean_porch ? params.leanF_p_d/-2 - params.lean_p_w : params.leanF_p_d/-2);
    FLBHArrowBody.rotation.y = Math.PI/2;
    FrontLeanArrowBody.add( FLBHArrowBody );
  /* ---------------End------------------*/

      /*Front Leanto Alignment*/ 
      if (params.leantoAlignmentFront == "1") {
        FrontLeanArrow.position.x = 0;
        FrontLeanArrowBody.position.x = 0;
        FrontLeanArrowDim.position.x = 0;
        }
      if (params.leantoAlignmentFront == "2") {
        FrontLeanArrow.position.x = -params.p_w/2+params.leanF_p_d/2 ;
        FrontLeanArrowBody.position.x = -params.p_w/2+params.leanF_p_d/2 ;
        FrontLeanArrowDim.position.x = -params.p_w/2+params.leanF_p_d/2 ;
      }
      if (params.leantoAlignmentFront == "3") {
          FrontLeanArrow.position.x = params.p_w/2-params.leanF_p_d/2;
          FrontLeanArrowBody.position.x = params.p_w/2-params.leanF_p_d/2;
          FrontLeanArrowDim.position.x = params.p_w/2-params.leanF_p_d/2;
      }
      if ( params.isShowCenter == true ) {
        FrontLeanArrow.visible = false
        FrontLeanArrowBody.visible = false
        FrontLeanArrowDim.visible = false
      }
    }

    // Back lean-To
    if (params.add_back_lean ){
    let  Width4BackLeanGeo = new THREE.TextGeometry( params.leanB_p_w+"' W", {
      font:const_var.font, size: 0.3, height: 0.02, /*weight: 'bolder',*/
      curveSegments: 3, bevelEnabled: true,bevelThickness: 0.01,
      bevelSize: 0, bevelSegments: 3,
    } );
    let  Width4BackLeanMaterial = new THREE.MeshPhongMaterial({color:0x282828});
    let  Width4BackLean = new THREE.Mesh(Width4BackLeanGeo, Width4BackLeanMaterial);
    Width4BackLean.name = "Width4BackLean"
    Width4BackLean.visible = (const_var.callMesure && params.add_back_lean)? true :false;
    Width4BackLean.position.set(params.leanB_p_d/2+0.2, 0.2, params.p_d/-2-params.leanB_p_w/2+0.2);
    // Width4BackLean.position.x = (params.add_right_back_lean_porch ? params.leanB_p_d/2 +0.2 + params.leanR_p_w :params.leanB_p_d/2+0.2);
    Width4BackLean.rotation.y = Math.PI/2;
    BackLeanArrowDim.add(Width4BackLean);
    
    if (BackLeanArrowDim.getObjectByName("BLWidth4Back") == undefined) {
      let BLWidth4Back = BackLeanArrowDim.getObjectByName("Width4BackLean").clone();
      BLWidth4Back.name = "BLWidth4Back"
      BLWidth4Back.visible = (const_var.callMesure && params.add_back_lean) ? true :false;
      BLWidth4Back.position.set(params.leanB_p_d/-2-0.2, 0.2, params.p_d/-2-params.leanB_p_w/2-0.2);
      // BLWidth4Back.position.x = (params.add_left_back_lean_porch ? params.leanB_p_d/-2 - params.lean_p_w -0.2: params.leanB_p_d/-2-0.2);
      BLWidth4Back.rotation.y = Math.PI/-2;
      BackLeanArrowDim.add(BLWidth4Back)
      }
    
    let  Length4BackLeanGeo = new THREE.TextGeometry( params.leanB_p_d+"' L", {
      font:const_var.font, size: 0.3, height: 0.02, /*weight: 'bolder',*/
      curveSegments: 3, bevelEnabled: true,bevelThickness: 0.001,
      bevelSize: 0, bevelSegments: 3,
    } );
    if(params.add_right_back_lean_porch == true){
      Length4BackLeanGeo = new THREE.TextGeometry( (params.leanB_p_d+params.leanR_p_w) +"' L", {
        font:const_var.font, size: 0.3, height: 0.02, /*weight: 'bolder',*/
        curveSegments: 3, bevelEnabled: true,bevelThickness: 0.001,
        bevelSize: 0, bevelSegments: 3,
    } );
     }
     if(params.add_left_back_lean_porch == true){
      Length4BackLeanGeo = new THREE.TextGeometry( (params.leanB_p_d+params.lean_p_w) +"' L", {
        font:const_var.font, size: 0.3, height: 0.02, /*weight: 'bolder',*/
        curveSegments: 3, bevelEnabled: true,bevelThickness: 0.001,
        bevelSize: 0, bevelSegments: 3,
    } );     }
     if(params.add_left_back_lean_porch == true && params.add_right_back_lean_porch == true){
      Length4BackLeanGeo = new THREE.TextGeometry( (params.leanB_p_d+params.leanR_p_w+params.lean_p_w) +"' L", {
        font:const_var.font, size: 0.3, height: 0.02, /*weight: 'bolder',*/
        curveSegments: 3, bevelEnabled: true,bevelThickness: 0.001,
        bevelSize: 0, bevelSegments: 3,
    } );     }
    let  Length4BackLeanMaterial = new THREE.MeshPhongMaterial({color:0x282828});
    let  Length4BackLean = new THREE.Mesh(Length4BackLeanGeo, Length4BackLeanMaterial);
    Length4BackLean.name = "Length4BackLean"
    Length4BackLean.rotation.y = Math.PI;
    Length4BackLean.visible = (const_var.callMesure && params.add_back_lean)? true :false;
    Length4BackLean.position.set(0,0.1,params.p_d/-2-params.leanB_p_w-0.2);
    if(params.add_right_back_lean_porch == true){
      Length4BackLean.position.x =  ( 0+ params.leanR_p_w/2)
    }
    if(params.add_left_back_lean_porch == true){
      Length4BackLean.position.x =  (-params.lean_p_w/2)
    }
    if(params.add_left_back_lean_porch == true && params.add_right_back_lean_porch == true){
      Length4BackLean.position.x =  0
    }  
    BackLeanArrowDim.add(Length4BackLean);
    
    let   Height4BackLeanGeo = new THREE.TextGeometry( params.leanB_p_h+"' H" , {
      font:const_var.font, size: 0.3, height: 0.02, /*weight: 'bolder',*/
      curveSegments: 3, bevelEnabled: true,bevelThickness: 0.01,
      bevelSize: 0, bevelSegments: 3,
    } );
    let   Height4BackLeanMaterial = new THREE.MeshPhongMaterial({color:0x282828});
    let  Height4BackLean = new THREE.Mesh( Height4BackLeanGeo,  Height4BackLeanMaterial);
    Height4BackLean.name = "Height4BackLean"
    Height4BackLean.rotation.y = Math.PI;
    Height4BackLean.visible = (const_var.callMesure && params.add_back_lean)? true :false;
    Height4BackLean.position.set(params.leanB_p_d/2+0.1, params.leanB_p_h-0.8, params.p_d/-2-params.leanB_p_w-0.2);
    Height4BackLean.position.x = (params.add_right_back_lean_porch ? params.leanB_p_d/2 +0.4 + params.leanR_p_w :params.leanB_p_d/2-0.5);
    BackLeanArrowDim.add(Height4BackLean);
    
    if (BackLeanArrowDim.getObjectByName("BackLeanHeight4Back") == undefined) {
    let BackLeanHeight4Back = BackLeanArrowDim.getObjectByName("Height4BackLean").clone();
    BackLeanHeight4Back.name = "BackLeanHeight4Back"
    // BackLeanHeight4Back.rotation.y = Math.PI;
    BackLeanHeight4Back.visible = (const_var.callMesure && params.add_back_lean) ? true :false;
    BackLeanHeight4Back.position.set(params.leanB_p_d/-2, params.leanB_p_h-0.8, params.p_d/-2-params.leanB_p_w-0.2);
    BackLeanHeight4Back.position.x = (params.add_left_back_lean_porch ? params.leanB_p_d/-2 +0.2- params.lean_p_w : params.leanB_p_d/-2+0.4);
    BackLeanArrowDim.add(BackLeanHeight4Back)
    }
    
    /* Fornt Horizantal Arrow */
    if (const_var.b_t_M_B_t_B.getObjectByName("BLLArrowHead") == undefined) {
      let BLLArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
      BLLArrowHead.visible = (const_var.callMesure && params.add_back_lean)? true :false;
      BLLArrowHead.name = "BLLArrowHead";
      BLLArrowHead.material = BLLArrowHead.material.clone();
      BLLArrowHead.position.set(params.leanB_p_d/-2, 0.1, params.p_d/-2-params.leanB_p_w-0.2);
      BLLArrowHead.position.x = (params.add_left_back_lean_porch ? params.leanB_p_d/-2 - params.lean_p_w : params.leanB_p_d/-2);
      BLLArrowHead.rotation.z = Math.PI/2;
      BackLeanArrows.add(BLLArrowHead)
    }
    if (const_var.b_t_M_B_t_B.getObjectByName("BLRArrowHead") == undefined) {
      let BLRArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
      BLRArrowHead.name = "BLRArrowHead"
      BLRArrowHead.material = BLRArrowHead.material.clone();
      BLRArrowHead.radiusTop = 12
      BLRArrowHead.visible = (const_var.callMesure && params.add_back_lean)? true :false;
      BLRArrowHead.position.set(params.leanB_p_d/2, 0.1, params.p_d/-2-params.leanB_p_w-0.2);
      BLRArrowHead.position.x = params.add_right_back_lean_porch ?params.leanB_p_d/2+params.leanR_p_w :params.leanB_p_d/2
      BLRArrowHead.rotation.z = Math.PI/-2;
      BackLeanArrows.add(BLRArrowHead)
    }
    let BLSArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanB_p_d-0.2,80,100 );
    if(params.add_right_back_lean_porch == true){
      BLSArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanB_p_d-0.2 + params.leanR_p_w,80,100 );
     }
     if(params.add_left_back_lean_porch == true){
      BLSArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanB_p_d-0.2 + params.lean_p_w,80,100 );
     }
     if(params.add_left_back_lean_porch == true && params.add_right_back_lean_porch == true){
      BLSArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanB_p_d-0.2 + params.lean_p_w + params.leanR_p_w,80,100 );
     }
   
    const BLSArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
    const BLSArrowBody = new THREE.Mesh( BLSArrowBodyGeo, BLSArrowBodymaterial );
    BLSArrowBody.name = "BLSArrowBody"
    BLSArrowBody.visible = (const_var.callMesure && params.add_back_lean)? true :false;
    BLSArrowBody.position.set(0,0.1,params.p_d/-2-params.leanB_p_w-0.2);
    if(params.add_right_back_lean_porch == true){
      BLSArrowBody.position.x =  ( 0+ params.leanR_p_w/2)
    }
    if(params.add_left_back_lean_porch == true){
      BLSArrowBody.position.x =  (-params.lean_p_w/2)
    }
    if(params.add_left_back_lean_porch == true && params.add_right_back_lean_porch == true){
      BLSArrowBody.position.x =  0
    } 
    BLSArrowBody.rotation.z = Math.PI/2;
    BackLeanArrowBody.add( BLSArrowBody );
    /* ---------------End------------------*/
    
    /*Back Lean To front Horizantal Arrow */
     if (const_var.b_t_M_B_t_B.getObjectByName("BLFrontArrow") == undefined) {
      let BLFrontArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
      BLFrontArrow.name = "BLFrontArrow"
      BLFrontArrow.material = BLFrontArrow.material.clone();
      BLFrontArrow.visible = (const_var.callMesure && params.add_back_lean)? true :false;
      BLFrontArrow.position.set(params.leanB_p_d/2+0.2, 0.1, params.p_d/-2-params.leanB_p_w-0.2);
      // BLFrontArrow.position.x = (params.add_right_back_lean_porch ? params.leanB_p_d/2 + params.leanR_p_w+0.2 :params.leanB_p_d/2+0.2);
      BLFrontArrow.rotation.x = Math.PI/-2;
      BackLeanArrows.add(BLFrontArrow)
    }
    if (const_var.b_t_M_B_t_B.getObjectByName("BLBackArrow") == undefined) {
      let BLBackArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
      BLBackArrow.name = "BLBackArrow"
      BLBackArrow.material = BLBackArrow.material.clone();
      BLBackArrow.visible = (const_var.callMesure && params.add_back_lean)? true :false;
      BLBackArrow.position.set(params.leanB_p_d/2+0.2, 0.1, params.p_d/-2-0.2);
      // BLBackArrow.position.x = (params.add_right_back_lean_porch ? params.leanB_p_d/2 + params.leanR_p_w+0.2 :params.leanB_p_d/2+0.2);
      BLBackArrow.rotation.x = Math.PI/2;
      BackLeanArrows.add(BLBackArrow)
    }
    
    const BLFArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanB_p_w-0.2,80,100 );
    // const BLFArrowBodymaterial = new THREE.MeshBasicMaterial( {color: 0x17202A, } );
    const BLFArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
    const BLFArrowBody = new THREE.Mesh( BLFArrowBodyGeo, BLFArrowBodymaterial );
    BLFArrowBody.name = "BLFArrowBody"
    BLFArrowBody.visible = (const_var.callMesure && params.add_back_lean)? true :false;
    BLFArrowBody.position.set(params.leanB_p_d/2+0.2, 0.1, params.p_d/-2-params.leanB_p_w/2-0.2);
    // BLFArrowBody.position.x = (params.add_right_back_lean_porch ? params.leanB_p_d/2 + params.leanR_p_w+0.2 :params.leanB_p_d/2+0.2);
    BLFArrowBody.rotation.x = Math.PI/2;
    BackLeanArrowBody.add( BLFArrowBody );
    /* ---------------End------------------*/
    
    /*Front Lean To back Horizantal Arrow */
    if (const_var.b_t_M_B_t_B.getObjectByName("BLBFrontArrow") == undefined) {
      let BLBFrontArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
      BLBFrontArrow.name = "BLBFrontArrow"
      BLBFrontArrow.material = BLBFrontArrow.material.clone();
      BLBFrontArrow.visible = (const_var.callMesure && params.add_back_lean)? true :false;
      BLBFrontArrow.position.set(params.leanB_p_d/-2-0.2, 0.1, params.p_d/-2-params.leanB_p_w-0.2);
      // BLBFrontArrow.position.x = (params.add_left_back_lean_porch ? params.leanB_p_d/-2 - params.lean_p_w -0.2: params.leanB_p_d/-2-0.2);
      BLBFrontArrow.rotation.x = Math.PI/-2;
      BackLeanArrows.add(BLBFrontArrow)
    }
    if (const_var.b_t_M_B_t_B.getObjectByName("BLBBackArrow") == undefined) {
      let BLBBackArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
      BLBBackArrow.name = "BLBBackArrow"
      BLBBackArrow.material = BLBBackArrow.material.clone();
      BLBBackArrow.visible = (const_var.callMesure && params.add_back_lean)? true :false;
      BLBBackArrow.position.set(params.leanB_p_d/-2-0.2, 0.1, params.p_d/-2-0.2);
      // BLBBackArrow.position.x = (params.add_left_back_lean_porch ? params.leanB_p_d/-2 - params.lean_p_w -0.2: params.leanB_p_d/-2-0.2);
      BLBBackArrow.rotation.x = Math.PI/2;
      BackLeanArrows.add(BLBBackArrow)
    }
    
    const BLBArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanB_p_w-0.2,80,100 );
    const BLBArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
    const BLBArrowBody = new THREE.Mesh( BLBArrowBodyGeo, BLBArrowBodymaterial );
    BLBArrowBody.name = "BLBArrowBody"
    BLBArrowBody.visible = (const_var.callMesure && params.add_back_lean)? true :false;
    BLBArrowBody.position.set(params.leanB_p_d/-2-0.2, 0.1, params.p_d/-2-params.leanB_p_w/2-0.2);
    // BLBArrowBody.position.x = (params.add_left_back_lean_porch ? params.leanB_p_d/-2 - params.lean_p_w -0.2: params.leanB_p_d/-2-0.2);
    BLBArrowBody.rotation.x = Math.PI/2;
    BackLeanArrowBody.add( BLBArrowBody );
    /* ---------------End------------------*/
    
    
    
    /* Fornt Lean To Vertical (Height) Arrow */
    if (const_var.b_t_M_B_t_B.getObjectByName("BLFUArrowHead") == undefined) {
    let BLFUArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
    BLFUArrowHead.name = "BLFUArrowHead"
    BLFUArrowHead.material = BLFUArrowHead.material.clone();
    BLFUArrowHead.visible = (const_var.callMesure && params.add_back_lean)? true :false;
    BLFUArrowHead.position.set(params.leanB_p_d/2, params.leanB_p_h, params.p_d/-2-params.leanB_p_w-0.4);
    BLFUArrowHead.position.x = (params.add_right_back_lean_porch ? params.leanB_p_d/2 + params.leanR_p_w :params.leanB_p_d/2);
    BLFUArrowHead.rotation.y = Math.PI/2;
    BackLeanArrows.add(BLFUArrowHead)
    }
    if (const_var.b_t_M_B_t_B.getObjectByName("BLFDArrowHead") == undefined) {
    let BLFDArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
    BLFDArrowHead.name = "BLFDArrowHead"
    BLFDArrowHead.material = BLFDArrowHead.material.clone();
    BLFDArrowHead.visible = (const_var.callMesure && params.add_back_lean)? true :false;
    BLFDArrowHead.position.set(params.leanB_p_d/2, 0.1, params.p_d/-2-params.leanB_p_w-0.4);
    BLFDArrowHead.position.x = (params.add_right_back_lean_porch ? params.leanB_p_d/2 + params.leanR_p_w :params.leanB_p_d/2);
    BLFDArrowHead.rotation.z = Math.PI;
    BackLeanArrows.add(BLFDArrowHead)
    }
    const BLFHArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanB_p_h-0.2,80,100 );
    const BLFHArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
    const BLFHArrowBody = new THREE.Mesh( BLFHArrowBodyGeo, BLFHArrowBodymaterial );
    BLFHArrowBody.name = "BLFHArrowBody"
    BLFHArrowBody.visible = (const_var.callMesure && params.add_back_lean)? true :false;
    BLFHArrowBody.position.set(params.leanB_p_d/2, params.leanB_p_h/2, params.p_d/-2-params.leanB_p_w-0.4);
    BLFHArrowBody.position.x = (params.add_right_back_lean_porch ? params.leanB_p_d/2 + params.leanR_p_w :params.leanB_p_d/2);
    BLFHArrowBody.rotation.y = Math.PI/2;
    BackLeanArrowBody.add( BLFHArrowBody );
    /* ---------------End------------------*/
    
    /* Fornt Lean To  Back Vertical (Height) Arrow */
    if (const_var.b_t_M_B_t_B.getObjectByName("BLBUArrowHead") == undefined) {
    let BLBUArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
    BLBUArrowHead.name = "BLBUArrowHead"
    BLBUArrowHead.material = BLBUArrowHead.material.clone();
    BLBUArrowHead.visible = (const_var.callMesure && params.add_back_lean)? true :false;
    BLBUArrowHead.position.set(params.leanB_p_d/-2, params.leanB_p_h, params.p_d/-2-params.leanB_p_w-0.4);
    BLBUArrowHead.position.x = (params.add_left_back_lean_porch ? params.leanB_p_d/-2 - params.lean_p_w : params.leanB_p_d/-2);
    BLBUArrowHead.rotation.y = Math.PI/2;
    BackLeanArrows.add(BLBUArrowHead)
    }
    if (const_var.b_t_M_B_t_B.getObjectByName("BLBDArrowHead") == undefined) {
    let BLBDArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
    BLBDArrowHead.name = "BLBDArrowHead"
    BLBDArrowHead.material = BLBDArrowHead.material.clone();
    BLBDArrowHead.visible = (const_var.callMesure && params.add_back_lean)? true :false;
    BLBDArrowHead.position.set(params.leanB_p_d/-2, 0.1, params.p_d/-2-params.leanB_p_w-0.4);
    BLBDArrowHead.position.x = (params.add_left_back_lean_porch ? params.leanB_p_d/-2 - params.lean_p_w : params.leanB_p_d/-2);
    BLBDArrowHead.rotation.z = Math.PI;
    BackLeanArrows.add(BLBDArrowHead)
    }
    const BLBHArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanB_p_h-0.2,80,100 );
    const BLBHArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
    const BLBHArrowBody = new THREE.Mesh( BLBHArrowBodyGeo, BLBHArrowBodymaterial );
    BLBHArrowBody.name = "BLBHArrowBody"
    BLBHArrowBody.visible = (const_var.callMesure && params.add_back_lean)? true :false;
    BLBHArrowBody.position.set(params.leanB_p_d/-2, params.leanB_p_h/2, params.p_d/-2-params.leanB_p_w-0.4);
    BLBHArrowBody.position.x = (params.add_left_back_lean_porch ? params.leanB_p_d/-2 - params.lean_p_w : params.leanB_p_d/-2);
    BLBHArrowBody.rotation.y = Math.PI/2;
    BackLeanArrowBody.add( BLBHArrowBody );
    /* ---------------End------------------*/

    /* Fornt Horizantal Arrow */
  
    /* Back Leanto Alignment */
    if (params.leantoAlignmentBack == "1") {
      BackLeanArrowDim.position.x = 0;
      BackLeanArrowBody.position.x = 0;
      BackLeanArrows.position.x = 0;
    }
    if (params.leantoAlignmentBack == "2") {
      BackLeanArrowDim.position.x = params.p_w/2-params.leanB_p_d/2 ;
      BackLeanArrowBody.position.x = params.p_w/2-params.leanB_p_d/2 ;
      BackLeanArrows.position.x = params.p_w/2-params.leanB_p_d/2 ;
    }
    if (params.leantoAlignmentBack == "3") {
      BackLeanArrowDim.position.x = -params.p_w/2+params.leanB_p_d/2;
      BackLeanArrowBody.position.x = -params.p_w/2+params.leanB_p_d/2;
      BackLeanArrows.position.x = -params.p_w/2+params.leanB_p_d/2;
    } 
    if ( params.isShowCenter == true ) {
      BackLeanArrowDim.visible = false
      BackLeanArrowBody.visible = false
      BackLeanArrows.visible = false
    }
  }
}

export const updateHorizantalLeanArrowsforDoors = () => {
  if ("undefined" != typeof const_var.scene.getObjectByName("LeftLeanDoorArrows")) const_var.scene.remove(const_var.scene.getObjectByName("LeftLeanDoorArrows"));
  if ("undefined" != typeof const_var.scene.getObjectByName("LeftLeanDoorArrowBody")) const_var.scene.remove(const_var.scene.getObjectByName("LeftLeanDoorArrowBody"));
  if ("undefined" != typeof const_var.scene.getObjectByName("RightLeanDoorArrows")) const_var.scene.remove(const_var.scene.getObjectByName("RightLeanDoorArrows"));
  if ("undefined" != typeof const_var.scene.getObjectByName("RightLeanDoorArrowBody")) const_var.scene.remove(const_var.scene.getObjectByName("RightLeanDoorArrowBody"));
  if ("undefined" != typeof const_var.scene.getObjectByName("FrontLeanDoorArrow")) const_var.scene.remove(const_var.scene.getObjectByName("FrontLeanDoorArrow"));
  if ("undefined" != typeof const_var.scene.getObjectByName("FrontLeanDoorArrowBody")) const_var.scene.remove(const_var.scene.getObjectByName("FrontLeanDoorArrowBody"));
  if ("undefined" != typeof const_var.scene.getObjectByName("BackLeanDoorArrows")) const_var.scene.remove(const_var.scene.getObjectByName("BackLeanDoorArrows"));
  if ("undefined" != typeof const_var.scene.getObjectByName("BackLeanDoorArrowBody")) const_var.scene.remove(const_var.scene.getObjectByName("BackLeanDoorArrowBody"));

  const LeftLeanDoorArrows = new THREE.Group();
    LeftLeanDoorArrows.name = "LeftLeanDoorArrows";
    const_var.scene.add(LeftLeanDoorArrows);

  const LeftLeanDoorArrowBody = new THREE.Group();
    LeftLeanDoorArrowBody.name = "LeftLeanDoorArrowBody";
    const_var.scene.add(LeftLeanDoorArrowBody);

  const RightLeanDoorArrows = new THREE.Group();
  RightLeanDoorArrows.name = "RightLeanDoorArrows";
  const_var.scene.add(RightLeanDoorArrows);

  const RightLeanDoorArrowBody = new THREE.Group();
  RightLeanDoorArrowBody.name = "RightLeanDoorArrowBody";
  const_var.scene.add(RightLeanDoorArrowBody);
  
  const FrontLeanDoorArrow = new THREE.Group();
  FrontLeanDoorArrow.name = "FrontLeanDoorArrow";
  const_var.scene.add(FrontLeanDoorArrow);

  const FrontLeanDoorArrowBody = new THREE.Group();
  FrontLeanDoorArrowBody.name = "FrontLeanDoorArrowBody";
  const_var.scene.add(FrontLeanDoorArrowBody);

  const BackLeanDoorArrows = new THREE.Group();
  BackLeanDoorArrows.name = "BackLeanDoorArrows";
  const_var.scene.add(BackLeanDoorArrows);

  const BackLeanDoorArrowBody = new THREE.Group();
  BackLeanDoorArrowBody.name = "BackLeanDoorArrowBody";
  const_var.scene.add(BackLeanDoorArrowBody);


  const_var.entry_points.length > 0 && const_var.entry_points.map((door, i) => {
    if (params.add_left_lean){
      /* Fornt Horizantal Arrow for Door */
      let leftLeanX = params.p_w / -2 - params.lean_p_w;
      let leftLeanC = params.p_w / -2 - params.lean_p_w/2;

      var line = LeftLeanDoorArrowBody.getObjectByName("LLFrontDoorArrowBody");
      if ( (line  == undefined || line.visible == false) && door.entry_component_location == "llfend") {
       if (const_var.b_t_M_L_t_L.getObjectByName("LLFLDArrowHead") == undefined) {
        let LLFLDArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        LLFLDArrowHead.visible = (const_var.callMesure && params.add_left_lean && !door.entry_type?.includes("window"))? true :false;
        LLFLDArrowHead.name = "LLFLDArrowHead";
        LLFLDArrowHead.material = LLFLDArrowHead.material.clone();
        LLFLDArrowHead.position.set(leftLeanX +0.11, 4.0, params.lean_p_d/2+0.06);
        LLFLDArrowHead.rotation.z = Math.PI/2;
        LeftLeanDoorArrows.add(LLFLDArrowHead)
      }
      if (const_var.b_t_M_L_t_L.getObjectByName("LLFRDArrowHead") == undefined) {
        let LLFRDArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        LLFRDArrowHead.name = "LLFRDArrowHead"
        LLFRDArrowHead.material = LLFRDArrowHead.material.clone();
        LLFRDArrowHead.radiusTop = 12
        LLFRDArrowHead.visible = (const_var.callMesure && params.add_left_lean && !door.entry_type?.includes("window"))? true :false;
        LLFRDArrowHead.position.set(params.p_w/-2-0.11, 4.0, params.lean_p_d/2+0.06);
        LLFRDArrowHead.rotation.z = Math.PI/-2;
        LeftLeanDoorArrows.add(LLFRDArrowHead)
      }
      const LLFrontDoorArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.lean_p_w-0.2,80,100 );
      const LLFrontDoorArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
      const LLFrontDoorArrowBody = new THREE.Mesh( LLFrontDoorArrowBodyGeo, LLFrontDoorArrowBodymaterial );
      LLFrontDoorArrowBody.name = "LLFrontDoorArrowBody"
      LLFrontDoorArrowBody.visible = (const_var.callMesure && params.add_left_lean && !door.entry_type?.includes("window"))? true :false;
      LLFrontDoorArrowBody.position.set( leftLeanC, 4.0, params.lean_p_d/2+0.06);
      LLFrontDoorArrowBody.rotation.z = Math.PI/2;
      LeftLeanDoorArrowBody.add( LLFrontDoorArrowBody );
      }
      /* ---------------End------------------*/
      /* left lean back side Horizantal Arrow for Door */
      var line = LeftLeanDoorArrowBody.getObjectByName("backDoorArrowBody");
      if ( (line == undefined || line.visible == false) && door.entry_component_location == "llbend") {
      if (const_var.b_t_M_L_t_L.getObjectByName("LLBLDArrowHead") == undefined) {
        let LLBLDArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        LLBLDArrowHead.visible = (const_var.callMesure && params.add_left_lean && !door.entry_type?.includes("window"))? true :false;
        LLBLDArrowHead.name = "LLBLDArrowHead";
        LLBLDArrowHead.material = LLBLDArrowHead.material.clone();
        LLBLDArrowHead.position.set(leftLeanX +0.11, 4.0, params.lean_p_d/-2-0.1);
        LLBLDArrowHead.rotation.z = Math.PI/2;
        LeftLeanDoorArrows.add(LLBLDArrowHead)
      }
      if (const_var.b_t_M_L_t_L.getObjectByName("LLBRDArrowHead") == undefined) {
        let LLBRDArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        LLBRDArrowHead.name = "LLBRDArrowHead"
        LLBRDArrowHead.material = LLBRDArrowHead.material.clone();
        LLBRDArrowHead.radiusTop = 12
        LLBRDArrowHead.visible = (const_var.callMesure && params.add_left_lean && !door.entry_type?.includes("window"))? true :false;
        LLBRDArrowHead.position.set(params.p_w/-2-0.11, 4.0, params.lean_p_d/-2-0.1);
        LLBRDArrowHead.rotation.z = Math.PI/-2;
        LeftLeanDoorArrows.add(LLBRDArrowHead)
      }
      const backDoorArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.lean_p_w-0.2,80,100 );
      const backDoorArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
      const backDoorArrowBody = new THREE.Mesh( backDoorArrowBodyGeo, backDoorArrowBodymaterial );
      backDoorArrowBody.name = "backDoorArrowBody"
      backDoorArrowBody.visible = (const_var.callMesure && params.add_left_lean && !door.entry_type?.includes("window"))? true :false;
      backDoorArrowBody.position.set( leftLeanC, 4.0, params.lean_p_d/-2-0.1);
      backDoorArrowBody.rotation.z = Math.PI/2;
      LeftLeanDoorArrowBody.add( backDoorArrowBody );
      /* ---------------End------------------*/
      }
      /* left lean Left Side Horizantal Arrow */
      var line = LeftLeanDoorArrowBody.getObjectByName("LLSDArrowBody");
      if ( (line == undefined || line.visible == false) && door.entry_component_location == "lllside"){
       if (const_var.b_t_M_L_t_L.getObjectByName("LLSFDArrow") == undefined) {
        let LLSFDArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        LLSFDArrow.name = "LLSFDArrow"
        LLSFDArrow.material = LLSFDArrow.material.clone();
        LLSFDArrow.visible = (const_var.callMesure && params.add_left_lean && !door.entry_type?.includes("window"))? true :false;
        LLSFDArrow.position.set(leftLeanX-0.1, 4.0, params.lean_p_d/2);
        LLSFDArrow.position.z = (params.add_left_front_lean_porch ? params.lean_p_d/2+params.leanF_p_w :params.lean_p_d/2);
        LLSFDArrow.rotation.x = Math.PI/2;
        LeftLeanDoorArrows.add(LLSFDArrow)
      }
      if (const_var.b_t_M_L_t_L.getObjectByName("LLSBDArrow") == undefined) {
        let LLSBDArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
        LLSBDArrow.name = "LLSBDArrow"
        LLSBDArrow.material = LLSBDArrow.material.clone();
        LLSBDArrow.visible = (const_var.callMesure && params.add_left_lean && !door.entry_type?.includes("window"))? true :false;
        LLSBDArrow.position.set(leftLeanX-0.1, 4.0, params.lean_p_d/-2);
        LLSBDArrow.position.z = (params.add_left_back_lean_porch ? params.lean_p_d/-2-params.leanB_p_w :params.lean_p_d/-2);
        LLSBDArrow.rotation.x = Math.PI/-2;
        LeftLeanDoorArrows.add(LLSBDArrow)
      }
      let  LLSDArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.lean_p_d-0.2,80,100 );
      if (params.add_left_front_lean_porch){
        LLSDArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.lean_p_d+params.leanF_p_w-0.2,80,100 );
      }if (params.add_left_back_lean_porch){
        LLSDArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.lean_p_d +params.leanB_p_w-0.2,80,100 );
      } if(params.add_left_front_lean_porch && params.add_left_back_lean_porch){
        LLSDArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.lean_p_d + params.leanF_p_w + params.leanB_p_w-0.2,80,100 );
      }
      const LLSDArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
      const LLSDArrowBody = new THREE.Mesh( LLSDArrowBodyGeo, LLSDArrowBodymaterial );
      LLSDArrowBody.name = "LLSDArrowBody"
      LLSDArrowBody.visible = (const_var.callMesure && params.add_left_lean && !door.entry_type?.includes("window"))? true :false;
      LLSDArrowBody.position.set(leftLeanX-0.1, 4.0, 0);
      if (params.add_left_front_lean_porch){
        LLSDArrowBody.position.z =  params.leanF_p_w/2;
      }if (params.add_left_back_lean_porch){
       LLSDArrowBody.position.z =  -params.leanB_p_w/2;
      } if(params.add_left_front_lean_porch && params.add_left_back_lean_porch){
       LLSDArrowBody.position.z = 0
      }
      LLSDArrowBody.rotation.x = Math.PI/2;
      LeftLeanDoorArrowBody.add( LLSDArrowBody );
      /* ---------------End------------------*/
      }
      
          /* Left lean Storage left Side Horizantal Arrow for Door  */
          var line = LeftLeanDoorArrowBody.getObjectByName("llStoreLSideArrowBodyUH");
          if ( (line == undefined || line.visible == false) && door.entry_component_location == "llulside") {
      
            if (const_var.b_t_M_R.getObjectByName("LLStoreSideFrontArrowUH") == undefined) {
              let LLStoreSideFrontArrowUH = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
              LLStoreSideFrontArrowUH.name = "LLStoreSideFrontArrowUH"
              LLStoreSideFrontArrowUH.material = LLStoreSideFrontArrowUH.material.clone();
              LLStoreSideFrontArrowUH.visible = (const_var.callMesure && params.add_storage_check && !door.entry_type?.includes("window")) == true;
              LLStoreSideFrontArrowUH.position.set(leftLeanX-0.1, 4.0, (params.lean_p_d/-2)+(parseInt(params.add_storage)));
              LLStoreSideFrontArrowUH.position.z =  params.p_b_c_b_l != "Close" ? (params.lean_p_d/-2)+(parseInt(params.add_storage)):params.lean_p_d/2;
              if (params.add_left_front_lean_porch){
                LLStoreSideFrontArrowUH.position.z =  params.p_b_c_b_l != "Close" ? (params.lean_p_d/-2)+(parseInt(params.add_storage)): params.lean_p_d/2+params.leanF_p_w;
              }
              LLStoreSideFrontArrowUH.rotation.x = Math.PI/2;
              LeftLeanDoorArrows.add(LLStoreSideFrontArrowUH)
            }
            if (const_var.b_t_M_R.getObjectByName("LLStoreSideBackArrowUH") == undefined) {
              let LLStoreSideBackArrowUH = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
              LLStoreSideBackArrowUH.name = "LLStoreSideBackArrowUH"
              LLStoreSideBackArrowUH.material = LLStoreSideBackArrowUH.material.clone();
              LLStoreSideBackArrowUH.visible = (const_var.callMesure && params.add_storage_check && !door.entry_type?.includes("window")) == true;
              LLStoreSideBackArrowUH.position.set(leftLeanX-0.1, 4.0, params.lean_p_d/-2-0.2);
              if (params.add_left_back_lean_porch){
                LLStoreSideBackArrowUH.position.z =  params.p_b_c_b_l != "Close" ? (params.lean_p_d/-2)+(parseInt(params.add_storage)):params.lean_p_d/-2-params.leanB_p_w;
              }
              LLStoreSideBackArrowUH.rotation.x = Math.PI/-2;
              LeftLeanDoorArrows.add(LLStoreSideBackArrowUH)
            }
            
            let value = params.p_b_c_b_l != "Close" ? (parseInt(params.add_storage))-0.2 : params.lean_p_d-0.2; 
            if (params.add_left_front_lean_porch){
              value = params.p_b_c_b_l != "Close" ? (parseInt(params.add_storage))-0.2 : params.lean_p_d+params.leanF_p_w-0.2; 
            }if (params.add_left_back_lean_porch){
              value = params.p_b_c_b_l != "Close" ? (parseInt(params.add_storage))-0.2 :params.lean_p_d +params.leanB_p_w-0.2; 
            } if(params.add_left_front_lean_porch && params.add_left_back_lean_porch){
              value = params.p_b_c_b_l != "Close" ? (parseInt(params.add_storage))-0.2 : params.lean_p_d + params.leanF_p_w + params.leanB_p_w-0.2; 
            }
            const llStoreLSideArrowBodyUHGeo = new THREE.CylinderGeometry( 0.025, 0.025, value,80,100 );
            const llStoreLSideArrowBodyUHmaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
            const llStoreLSideArrowBodyUH = new THREE.Mesh( llStoreLSideArrowBodyUHGeo, llStoreLSideArrowBodyUHmaterial );
            llStoreLSideArrowBodyUH.name = "llStoreLSideArrowBodyUH"
            llStoreLSideArrowBodyUH.visible = (const_var.callMesure && params.add_storage_check && !door.entry_type?.includes("window")) == true;
            llStoreLSideArrowBodyUH.position.set(leftLeanX-0.1, 4.0, (params.lean_p_d/-2)+(parseInt(params.add_storage))/2);
            llStoreLSideArrowBodyUH.position.z = params.p_b_c_b_l != "Close" ? (params.lean_p_d/-2)+(parseInt(params.add_storage))/2: 0;
            if (params.add_left_front_lean_porch){
              llStoreLSideArrowBodyUH.position.z = params.p_b_c_b_l != "Close" ? (params.lean_p_d/-2)+(parseInt(params.add_storage))/2: params.leanF_p_w/2;
            }if (params.add_left_back_lean_porch){
              llStoreLSideArrowBodyUH.position.z = params.p_b_c_b_l != "Close" ? (params.lean_p_d/-2)+(parseInt(params.add_storage))/2: -params.leanB_p_w/2;
            } if(params.add_left_front_lean_porch && params.add_left_back_lean_porch){
              llStoreLSideArrowBodyUH.position.z = params.p_b_c_b_l != "Close" ? (params.lean_p_d/-2)+(parseInt(params.add_storage))/2: 0;
            }
            llStoreLSideArrowBodyUH.rotation.x = Math.PI/2;
            LeftLeanDoorArrowBody.add( llStoreLSideArrowBodyUH );
      /* ---------------End------------------*/
      }
      
      /* Left lean Storage right Side Horizantal Arrow for Door  */
      var line = LeftLeanDoorArrowBody.getObjectByName("llStoreRSideArrowBodyUH");
      if ( (line == undefined || line.visible == false) && door.entry_component_location == "llurside") {
      
        if (const_var.b_t_M_R.getObjectByName("LLStoreRightSideFrontArrowUH") == undefined) {
          let LLStoreRightSideFrontArrowUH = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
          LLStoreRightSideFrontArrowUH.name = "LLStoreRightSideFrontArrowUH"
          LLStoreRightSideFrontArrowUH.material = LLStoreRightSideFrontArrowUH.material.clone();
          LLStoreRightSideFrontArrowUH.visible = (const_var.callMesure && params.add_storage_check && !door.entry_type?.includes("window")) == true;
          LLStoreRightSideFrontArrowUH.position.set(params.p_w / -2+0.1, 4.0, (params.lean_p_d/-2)+(parseInt(params.add_storage)-0.2));
          LLStoreRightSideFrontArrowUH.rotation.x = Math.PI/2;
          LeftLeanDoorArrows.add(LLStoreRightSideFrontArrowUH)
        }
        if (const_var.b_t_M_R.getObjectByName("LLStoreRightSideBackArrowUH") == undefined) {
          let LLStoreRightSideBackArrowUH = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
          LLStoreRightSideBackArrowUH.name = "LLStoreRightSideBackArrowUH"
          LLStoreRightSideBackArrowUH.material = LLStoreRightSideBackArrowUH.material.clone();
          LLStoreRightSideBackArrowUH.visible = (const_var.callMesure && params.add_storage_check && !door.entry_type?.includes("window")) == true;
          LLStoreRightSideBackArrowUH.position.set(params.p_w / -2+0.1, 4.0, params.p_d/-2+0.2);
          LLStoreRightSideBackArrowUH.rotation.x = Math.PI/-2;
          LeftLeanDoorArrows.add(LLStoreRightSideBackArrowUH)
        }
  
        const llStoreRSideArrowBodyUHGeo = new THREE.CylinderGeometry( 0.025, 0.025, (parseInt(params.add_storage))-0.2,80,100 );
        const llStoreRSideArrowBodyUHmaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
        const llStoreRSideArrowBodyUH = new THREE.Mesh( llStoreRSideArrowBodyUHGeo, llStoreRSideArrowBodyUHmaterial );
        llStoreRSideArrowBodyUH.name = "llStoreRSideArrowBodyUH"
        llStoreRSideArrowBodyUH.visible = (const_var.callMesure && params.add_storage_check && !door.entry_type?.includes("window")) == true;
        llStoreRSideArrowBodyUH.position.set(params.p_w / -2+0.1, 4.0, (params.lean_p_d/-2)+(parseInt(params.add_storage))/2);
        llStoreRSideArrowBodyUH.rotation.x = Math.PI/2;
        LeftLeanDoorArrowBody.add( llStoreRSideArrowBodyUH );
  /* ---------------End------------------*/
  }

      /* left lean utility front side Horizantal Arrow for Door */
      var line = LeftLeanDoorArrowBody.getObjectByName("LLFStoreDoorArrowBody");
      if ( (line == undefined || line.visible == false) && door.entry_component_location == "llufend") {
        if (const_var.b_t_M_L_t_L.getObjectByName("LLFLDArrowHead") == undefined) {
          let LLFLDArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
          LLFLDArrowHead.visible = (const_var.callMesure && params.add_left_lean && !door.entry_type?.includes("window"))? true :false;
          LLFLDArrowHead.name = "LLFLDArrowHead";
          LLFLDArrowHead.material = LLFLDArrowHead.material.clone();
          LLFLDArrowHead.position.set(leftLeanX +0.11, 4.0, params.lean_p_d / -2 + (parseInt(params.add_storage))+0.1);
          LLFLDArrowHead.rotation.z = Math.PI/2;
          LeftLeanDoorArrows.add(LLFLDArrowHead)
        }
        if (const_var.b_t_M_L_t_L.getObjectByName("LLFRDArrowHead") == undefined) {
          let LLFRDArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
          LLFRDArrowHead.name = "LLFRDArrowHead"
          LLFRDArrowHead.material = LLFRDArrowHead.material.clone();
          LLFRDArrowHead.radiusTop = 12
          LLFRDArrowHead.visible = (const_var.callMesure && params.add_left_lean && !door.entry_type?.includes("window"))? true :false;
          LLFRDArrowHead.position.set(params.p_w/-2-0.11, 4.0, params.lean_p_d / -2 + (parseInt(params.add_storage))+0.1);
          LLFRDArrowHead.rotation.z = Math.PI/-2;
          LeftLeanDoorArrows.add(LLFRDArrowHead)
        }
        const LLFStoreDoorArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.lean_p_w-0.2,80,100 );
        const LLFStoreDoorArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
        const LLFStoreDoorArrowBody = new THREE.Mesh( LLFStoreDoorArrowBodyGeo, LLFStoreDoorArrowBodymaterial );
        LLFStoreDoorArrowBody.name = "LLFStoreDoorArrowBody"
        LLFStoreDoorArrowBody.visible = (const_var.callMesure && params.add_left_lean && !door.entry_type?.includes("window"))? true :false;
        LLFStoreDoorArrowBody.position.set( leftLeanC, 4.0, params.lean_p_d / -2 + (parseInt(params.add_storage))+0.1);
        LLFStoreDoorArrowBody.rotation.z = Math.PI/2;
        LeftLeanDoorArrowBody.add( LLFStoreDoorArrowBody );
        /* ---------------End------------------*/
        }
     
      if (params.leantoAlignmentLeft=="1") {
        LeftLeanDoorArrows.position.z = 0;
        LeftLeanDoorArrowBody.position.z = 0;
      }
      if (params.leantoAlignmentLeft=="2") {
        LeftLeanDoorArrows.position.z = params.p_d/2-params.lean_p_d/2;
        LeftLeanDoorArrowBody.position.z = params.p_d/2-params.lean_p_d/2;
      }
      if (params.leantoAlignmentLeft=="3"){
          LeftLeanDoorArrows.position.z = -params.p_d/2+params.lean_p_d/2;
          LeftLeanDoorArrowBody.position.z = -params.p_d/2+params.lean_p_d/2;
      }
      if (params.isShowCenter == true ) {
        LeftLeanDoorArrows.visible = false
        LeftLeanDoorArrowBody.visible = false
      }
    }
     if (params.add_right_lean) {
      let RightleanToLegX = params.p_w / 2 + params.leanR_p_w;
      let rightLeanC = params.p_w / 2 + params.leanR_p_w/2;
      var line = RightLeanDoorArrowBody.getObjectByName("RLDfrontArrowBody");    
      if ( (line == undefined || line.visible == false) && door.entry_component_location == "rlfend"){
          if (const_var.b_t_M_R_t_R.getObjectByName("RLFLDArrowHead") == undefined) {
            let RLFLDArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
            RLFLDArrowHead.visible = (const_var.callMesure && params.add_right_lean && !door.entry_type?.includes("window"))? true :false;
            RLFLDArrowHead.name = "RLFLDArrowHead";
            RLFLDArrowHead.material = RLFLDArrowHead.material.clone();
            RLFLDArrowHead.position.set( params.p_w/2, 4.0, params.leanR_p_d/2+0.1);
            RLFLDArrowHead.rotation.z = Math.PI/2;
            RightLeanDoorArrows.add(RLFLDArrowHead)
        }
        if (const_var.b_t_M_R_t_R.getObjectByName("RLFRDArrowHead") == undefined) {
            let RLFRDArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
            RLFRDArrowHead.name = "RLFRDArrowHead"
            RLFRDArrowHead.material = RLFRDArrowHead.material.clone();
            RLFRDArrowHead.radiusTop = 12
            RLFRDArrowHead.visible = (const_var.callMesure && params.add_right_lean && !door.entry_type?.includes("window"))? true :false;
            RLFRDArrowHead.position.set(RightleanToLegX, 4.0, params.leanR_p_d/2+0.1);
            RLFRDArrowHead.rotation.z = Math.PI/-2;
            RightLeanDoorArrows.add(RLFRDArrowHead)
        }
        const RLDFrontArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanR_p_w-0.2,80,100 );
        const RLDFrontArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
        const RLDFrontArrowBody = new THREE.Mesh( RLDFrontArrowBodyGeo, RLDFrontArrowBodymaterial );
        RLDFrontArrowBody.name = "RLDfrontArrowBody"
        RLDFrontArrowBody.visible = (const_var.callMesure && params.add_right_lean && !door.entry_type?.includes("window"))? true :false;
        RLDFrontArrowBody.position.set( rightLeanC, 4.0, params.leanR_p_d/2+0.1);
        RLDFrontArrowBody.rotation.z = Math.PI/2;
        RightLeanDoorArrowBody.add( RLDFrontArrowBody );
          /* ---------------End------------------*/
          }
        /*Right Leanto Back Horizantal Arrow */
        var line = RightLeanDoorArrowBody.getObjectByName("RLDBrontArrowBody");
        if ( (line  == undefined || line.visible == false) && door.entry_component_location == "rlbend"){
      
            if (const_var.b_t_M_R_t_R.getObjectByName("RLBLDArrowHead") == undefined) {
              let RLBLDArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
              RLBLDArrowHead.visible = (const_var.callMesure && params.add_right_lean && !door.entry_type?.includes("window"))? true :false;
              RLBLDArrowHead.name = "RLBLDArrowHead";
              RLBLDArrowHead.material = RLBLDArrowHead.material.clone();
              RLBLDArrowHead.position.set( params.p_w/2, 4.0, params.leanR_p_d/-2-0.1);
              RLBLDArrowHead.rotation.z = Math.PI/2;
              RightLeanDoorArrows.add(RLBLDArrowHead)
          }
          if (const_var.b_t_M_R_t_R.getObjectByName("RLBRDArrowHead") == undefined) {
              let RLBRDArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
              RLBRDArrowHead.name = "RLBRDArrowHead"
              RLBRDArrowHead.material = RLBRDArrowHead.material.clone();
              RLBRDArrowHead.radiusTop = 12
              RLBRDArrowHead.visible = (const_var.callMesure && params.add_right_lean && !door.entry_type?.includes("window"))? true :false;
              RLBRDArrowHead.position.set(RightleanToLegX, 4.0, params.leanR_p_d/-2-0.1);
              RLBRDArrowHead.rotation.z = Math.PI/-2;
              RightLeanDoorArrows.add(RLBRDArrowHead)
          }
          const RLDBrontArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanR_p_w-0.2,80,100 );
          const RLDBrontArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
          const RLDBrontArrowBody = new THREE.Mesh( RLDBrontArrowBodyGeo, RLDBrontArrowBodymaterial );
          RLDBrontArrowBody.name = "RLDBrontArrowBody"
          RLDBrontArrowBody.visible = (const_var.callMesure && params.add_right_lean && !door.entry_type?.includes("window"))? true :false;
          RLDBrontArrowBody.position.set( rightLeanC, 4.0, params.leanR_p_d/-2-0.1);
          RLDBrontArrowBody.rotation.z = Math.PI/2;
          RightLeanDoorArrowBody.add( RLDBrontArrowBody );
          /* ---------------End------------------*/
        }
         /* RIght Lean to Side Horizantal Arrow */
         var line = RightLeanDoorArrowBody.getObjectByName("RLSArrowBody");
         if ( (line  == undefined || line.visible == false) && door.entry_component_location == "rlrside"){
         if (const_var.b_t_M_R_t_R.getObjectByName("RLSFDArrow") == undefined) {
          let RLSFDArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
          RLSFDArrow.name = "RLSFDArrow"
          RLSFDArrow.material = RLSFDArrow.material.clone();
          RLSFDArrow.visible = (const_var.callMesure && params.add_right_lean && !door.entry_type?.includes("window"))? true :false;
          RLSFDArrow.position.set(RightleanToLegX+0.2, 4.0, params.leanR_p_d/2);
          RLSFDArrow.position.z = (params.add_right_front_lean_porch ? params.leanR_p_d/2+params.leanF_p_w :params.leanR_p_d/2);
          RLSFDArrow.rotation.x = Math.PI/2;
          RightLeanDoorArrows.add(RLSFDArrow)
        }
        if (const_var.b_t_M_R_t_R.getObjectByName("RLSBDArrow") == undefined) {
          let RLSBDArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
          RLSBDArrow.name = "RLSBDArrow"
          RLSBDArrow.material = RLSBDArrow.material.clone();
          RLSBDArrow.visible = (const_var.callMesure && params.add_right_lean && !door.entry_type?.includes("window"))? true :false;
          RLSBDArrow.position.set(RightleanToLegX+0.2, 4.0, params.leanR_p_d/-2);
          RLSBDArrow.position.z = (params.add_right_back_lean_porch ? params.leanR_p_d/-2-params.leanB_p_w :params.leanR_p_d/-2);
          RLSBDArrow.rotation.x = Math.PI/-2;
          RightLeanDoorArrows.add(RLSBDArrow)
        }
      
        let RLSDArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanR_p_d-0.2,80,100 );
        if (params.add_right_front_lean_porch){
          RLSDArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanR_p_d+params.leanF_p_w-0.2,80,100 );
        }if (params.add_right_back_lean_porch){
          RLSDArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanR_p_d +params.leanB_p_w-0.2,80,100 );
        } if(params.add_right_front_lean_porch && params.add_right_back_lean_porch){
          RLSDArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanR_p_d + params.leanF_p_w + params.leanB_p_w-0.2,80,100 );
        }
        // const RLSDArrowBodymaterial = new THREE.MeshBasicMaterial( {color: 0x17202A, } );
        const RLSDArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
        const RLSDArrowBody = new THREE.Mesh( RLSDArrowBodyGeo, RLSDArrowBodymaterial );
        RLSDArrowBody.name = "RLSArrowBody"
        RLSDArrowBody.visible = (const_var.callMesure && params.add_right_lean && !door.entry_type?.includes("window"))? true :false;
        RLSDArrowBody.position.set(RightleanToLegX+0.1, 4.0, 0);
        if (params.add_right_front_lean_porch){
          RLSDArrowBody.position.z =  params.leanF_p_w/2;
        }if (params.add_right_back_lean_porch){
         RLSDArrowBody.position.z =  -params.leanB_p_w/2;
        } if(params.add_right_front_lean_porch && params.add_right_back_lean_porch){
         RLSDArrowBody.position.z = 0
        }
        RLSDArrowBody.rotation.x = Math.PI/2;
        RightLeanDoorArrowBody.add( RLSDArrowBody );
      }
      /* ---------------End------------------*/
       /* Right lean Storage Side Horizantal Arrow for Door  */
       var line = RightLeanDoorArrowBody.getObjectByName("RLStoreRSideArrowBodyUH");
       if ( (line == undefined || line.visible == false) && door.entry_component_location == "rrurside") {
        if (const_var.b_t_M_R.getObjectByName("RLStoreSideFrontArrowUH") == undefined) {
          let RLStoreSideFrontArrowUH = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
          RLStoreSideFrontArrowUH.name = "RLStoreSideFrontArrowUH"
          RLStoreSideFrontArrowUH.material = RLStoreSideFrontArrowUH.material.clone();
          RLStoreSideFrontArrowUH.visible = (const_var.callMesure && params.add_storage_check_right && !door.entry_type?.includes("window")) == true;
          RLStoreSideFrontArrowUH.position.set(RightleanToLegX + 0.1, 4.0, (params.leanR_p_d/-2)+(parseInt(params.add_storage_right)));
          RLStoreSideFrontArrowUH.position.z = params.p_b_c_b_r != "Close" ? (params.leanR_p_d/-2)+(parseInt(params.add_storage_right)):params.leanR_p_d/2;
          if (params.add_right_front_lean_porch){
            RLStoreSideFrontArrowUH.position.z = params.p_b_c_b_r != "Close" ? (params.leanR_p_d/-2)+(parseInt(params.add_storage_right)) : params.leanR_p_d/2+params.leanF_p_w;
          }
          RLStoreSideFrontArrowUH.rotation.x = Math.PI/2;
          RightLeanDoorArrows.add(RLStoreSideFrontArrowUH)
        }
        if (const_var.b_t_M_R.getObjectByName("RLStoreSideBackArrowUH") == undefined) {
          let RLStoreSideBackArrowUH = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
          RLStoreSideBackArrowUH.name = "RLStoreSideBackArrowUH"
          RLStoreSideBackArrowUH.material = RLStoreSideBackArrowUH.material.clone();
          RLStoreSideBackArrowUH.visible = (const_var.callMesure && params.add_storage_check_right && !door.entry_type?.includes("window")) == true;
          RLStoreSideBackArrowUH.position.set(RightleanToLegX + 0.1, 4.0, params.leanR_p_d/-2);
          RLStoreSideBackArrowUH.position.z = (params.add_right_back_lean_porch ? params.leanR_p_d/-2-params.leanB_p_w :params.leanR_p_d/-2);
          RLStoreSideBackArrowUH.rotation.x = Math.PI/-2;
          RightLeanDoorArrows.add(RLStoreSideBackArrowUH)
        }
      
        let value = params.p_b_c_b_r != "Close" ?  (parseInt(params.add_storage_right))-0.2:params.leanR_p_d-0.2;
        if (params.add_right_front_lean_porch){
          value = params.p_b_c_b_r != "Close" ?  (parseInt(params.add_storage_right))-0.2:params.leanR_p_d+params.leanF_p_w-0.2
        }if (params.add_right_back_lean_porch){
          value = params.p_b_c_b_r != "Close" ?  (parseInt(params.add_storage_right))-0.2:params.leanR_p_d +params.leanB_p_w-0.2
        } if(params.add_right_front_lean_porch && params.add_right_back_lean_porch){
          value = params.p_b_c_b_r != "Close" ?  (parseInt(params.add_storage_right))-0.2: params.leanR_p_d + params.leanF_p_w + params.leanB_p_w-0.2;
        }
        const RLStoreRSideArrowBodyUHGeo = new THREE.CylinderGeometry( 0.025, 0.025, value,80,100 );
        const RLStoreRSideArrowBodyUHmaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
        const RLStoreRSideArrowBodyUH = new THREE.Mesh( RLStoreRSideArrowBodyUHGeo, RLStoreRSideArrowBodyUHmaterial );
        RLStoreRSideArrowBodyUH.name = "RLStoreRSideArrowBodyUH"
        RLStoreRSideArrowBodyUH.visible = (const_var.callMesure && params.add_storage_check_right && !door.entry_type?.includes("window")) == true;
        RLStoreRSideArrowBodyUH.position.set(RightleanToLegX+0.1, 4.0,((params.leanR_p_d/-2)+(parseInt(params.add_storage_right))/2));
        RLStoreRSideArrowBodyUH.position.z = params.p_b_c_b_r != "Close" ? ((params.leanR_p_d/-2)+(parseInt(params.add_storage_right))/2):0;
        if (params.add_right_front_lean_porch){
          RLStoreRSideArrowBodyUH.position.z = params.p_b_c_b_r != "Close" ? ((params.leanR_p_d/-2)+(parseInt(params.add_storage_right))/2):params.leanF_p_w/2;
        }if (params.add_right_back_lean_porch){
          RLStoreRSideArrowBodyUH.position.z = params.p_b_c_b_r != "Close" ? ((params.leanR_p_d/-2)+(parseInt(params.add_storage_right))/2):-params.leanB_p_w/2;
        } if(params.add_right_front_lean_porch && params.add_right_back_lean_porch){
          RLStoreRSideArrowBodyUH.position.z = params.p_b_c_b_r != "Close" ? ((params.leanR_p_d/-2)+(parseInt(params.add_storage_right))/2):0;
        }
        RLStoreRSideArrowBodyUH.rotation.x = Math.PI/2;
        RightLeanDoorArrowBody.add( RLStoreRSideArrowBodyUH );
      /* ---------------End------------------*/
      }

      /* Right lean Storage Left Side Horizantal Arrow for Door  */
      var line = RightLeanDoorArrowBody.getObjectByName("RLStoreLSideArrowBodyUH"); 
      if ( (line == undefined || line.visible == false) && door.entry_component_location == "rlulside") {
        if (const_var.b_t_M_R.getObjectByName("RLStoreLeftSideFrontArrowUH") == undefined) {
          let RLStoreLeftSideFrontArrowUH = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
          RLStoreLeftSideFrontArrowUH.name = "RLStoreLeftSideFrontArrowUH"
          RLStoreLeftSideFrontArrowUH.material = RLStoreLeftSideFrontArrowUH.material.clone();
          RLStoreLeftSideFrontArrowUH.visible = (const_var.callMesure && params.add_storage_check_right && !door.entry_type?.includes("window")) == true;
          RLStoreLeftSideFrontArrowUH.position.set(params.p_w /2-0.1 + 0.1, 4.0, (params.leanR_p_d/-2)+(parseInt(params.add_storage_right)));
          RLStoreLeftSideFrontArrowUH.rotation.x = Math.PI/2;
          RightLeanDoorArrows.add(RLStoreLeftSideFrontArrowUH)
        }
        if (const_var.b_t_M_R.getObjectByName("RLStoreLeftSideBackArrowUH") == undefined) {
          let RLStoreLeftSideBackArrowUH = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
          RLStoreLeftSideBackArrowUH.name = "RLStoreLeftSideBackArrowUH"
          RLStoreLeftSideBackArrowUH.material = RLStoreLeftSideBackArrowUH.material.clone();
          RLStoreLeftSideBackArrowUH.visible = (const_var.callMesure && params.add_storage_check_right && !door.entry_type?.includes("window")) == true;
          RLStoreLeftSideBackArrowUH.position.set(params.p_w /2-0.1 + 0.1, 4.0, params.leanR_p_d/-2);
          RLStoreLeftSideBackArrowUH.rotation.x = Math.PI/-2;
          RightLeanDoorArrows.add(RLStoreLeftSideBackArrowUH)
        }
      
        const RLStoreLSideArrowBodyUHGeo = new THREE.CylinderGeometry( 0.025, 0.025, (parseInt(params.add_storage_right))-0.2,80,100 );
        const RLStoreLSideArrowBodyUHmaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
        const RLStoreLSideArrowBodyUH = new THREE.Mesh( RLStoreLSideArrowBodyUHGeo, RLStoreLSideArrowBodyUHmaterial );
        RLStoreLSideArrowBodyUH.name = "RLStoreLSideArrowBodyUH"
        RLStoreLSideArrowBodyUH.visible = (const_var.callMesure && params.add_storage_check_right && !door.entry_type?.includes("window")) == true;
        RLStoreLSideArrowBodyUH.position.set(params.p_w /2-0.1+0.1, 4.0,((params.leanR_p_d/-2)+(parseInt(params.add_storage_right))/2));
        RLStoreLSideArrowBodyUH.rotation.x = Math.PI/2;
        RightLeanDoorArrowBody.add( RLStoreLSideArrowBodyUH );
      /* ---------------End------------------*/
      }

      /* Right lean utility front side Horizantal Arrow for Door */
      var line = RightLeanDoorArrowBody.getObjectByName("RLFStoreDoorArrowBody");
      if ( (line  == undefined || line.visible == false) && door.entry_component_location == "rlufend") {
      if (const_var.b_t_M_L_t_L.getObjectByName("RLFLDArrowHead") == undefined) {
      let RLFLDArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
      RLFLDArrowHead.visible = (const_var.callMesure && params.add_storage_check_right && !door.entry_type?.includes("window"))? true :false;
      RLFLDArrowHead.name = "RLFLDArrowHead";
      RLFLDArrowHead.material = RLFLDArrowHead.material.clone();
      RLFLDArrowHead.position.set(RightleanToLegX + 0.11, 4.0, params.leanR_p_d / -2 + (parseInt(params.add_storage_right))+0.02);
      RLFLDArrowHead.rotation.z = Math.PI/-2;
      RightLeanDoorArrows.add(RLFLDArrowHead)
      }
      if (const_var.b_t_M_L_t_L.getObjectByName("RLFRDArrowHead") == undefined) {
      let RLFRDArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
      RLFRDArrowHead.name = "RLFRDArrowHead"
      RLFRDArrowHead.material = RLFRDArrowHead.material.clone();
      RLFRDArrowHead.radiusTop = 12
      RLFRDArrowHead.visible = (const_var.callMesure && params.add_storage_check_right && !door.entry_type?.includes("window"))? true :false;
      RLFRDArrowHead.position.set(params.p_w/+2+0.11, 4.0, params.leanR_p_d / -2 + (parseInt(params.add_storage_right))+0.02);
      RLFRDArrowHead.rotation.z = Math.PI/2;
      RightLeanDoorArrows.add(RLFRDArrowHead)
      }
      const RLFStoreDoorArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanR_p_w-0.2,80,100 );
      const RLFStoreDoorArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
      const RLFStoreDoorArrowBody = new THREE.Mesh( RLFStoreDoorArrowBodyGeo, RLFStoreDoorArrowBodymaterial );
      RLFStoreDoorArrowBody.name = "RLFStoreDoorArrowBody"
      RLFStoreDoorArrowBody.visible = (const_var.callMesure && params.add_storage_check_right && !door.entry_type?.includes("window"))? true :false;
      RLFStoreDoorArrowBody.position.set( rightLeanC, 4.0, params.leanR_p_d / -2 + (parseInt(params.add_storage_right))+0.02);
      RLFStoreDoorArrowBody.rotation.z = Math.PI/2;
      RightLeanDoorArrowBody.add( RLFStoreDoorArrowBody );
      /* ---------------End------------------*/
      }
      
      
       
            /*Alignment For Right Leanto */
            if (params.leantoAlignmentRight=="1") {
              RightLeanDoorArrows.position.z = 0;
              RightLeanDoorArrowBody.position.z = 0;
            }
            if (params.leantoAlignmentRight=="2") {
               RightLeanDoorArrows.position.z = params.p_d/2-params.leanR_p_d/2;
               RightLeanDoorArrowBody.position.z = params.p_d/2-params.leanR_p_d/2;
            }
            if (params.leantoAlignmentRight=="3") {
               RightLeanDoorArrows.position.z = -params.p_d/2+params.leanR_p_d/2;
               RightLeanDoorArrowBody.position.z = -params.p_d/2+params.leanR_p_d/2;
            }
            if (params.isShowCenter == true ) {
              RightLeanDoorArrows.visible = false;
              RightLeanDoorArrowBody.visible = false;
            }
      }

          if (params.add_front_lean){
              /*Front Lean To front Horizantal Arrow */
              var line = FrontLeanDoorArrowBody.getObjectByName("FLDFArrowBody");
              if ( (line == undefined || line.visible == false) && door.entry_component_location == "flfend"){
            if (const_var.b_t_M_F_t_F.getObjectByName("FLDFrontArrow") == undefined) {
              let FLDFrontArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
              FLDFrontArrow.name = "FLDFrontArrow"
              FLDFrontArrow.material = FLDFrontArrow.material.clone();
              FLDFrontArrow.visible = (const_var.callMesure && params.add_front_lean && !door.entry_type?.includes("window"))? true :false;
              FLDFrontArrow.position.set(params.leanF_p_d/2+0.2, 4.0, params.p_d/2+params.leanF_p_w+0.1);
              FLDFrontArrow.rotation.x = Math.PI/2;
              FrontLeanDoorArrow.add(FLDFrontArrow)
            }
            if (const_var.b_t_M_F_t_F.getObjectByName("FLDBackArrow") == undefined) {
              let FLDBackArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
              FLDBackArrow.name = "FLDBackArrow"
              FLDBackArrow.material = FLDBackArrow.material.clone();
              FLDBackArrow.visible = (const_var.callMesure && params.add_front_lean && !door.entry_type?.includes("window"))? true :false;
              FLDBackArrow.position.set(params.leanF_p_d/2+0.2, 4.0, params.p_d/2+0.1);
              FLDBackArrow.rotation.x = Math.PI/-2;
              FrontLeanDoorArrow.add(FLDBackArrow)
            }
          
            const FLDFArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanF_p_w-0.2,80,100 );
            const FLDFArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
            const FLDFArrowBody = new THREE.Mesh( FLDFArrowBodyGeo, FLDFArrowBodymaterial );
            FLDFArrowBody.name = "FLDFArrowBody"
            FLDFArrowBody.visible = (const_var.callMesure && params.add_front_lean && !door.entry_type?.includes("window"))? true :false;
            FLDFArrowBody.position.set(params.leanF_p_d/2+0.2, 4.0, params.p_d/2+params.leanF_p_w/2+0.1);
            FLDFArrowBody.rotation.x = Math.PI/2;
            FrontLeanDoorArrowBody.add( FLDFArrowBody );
            /* ---------------End------------------*/
              }
            /*Front Lean To back Horizantal Arrow */
            var line = FrontLeanDoorArrowBody.getObjectByName("FLDBArrowBody");
            if ( (line  == undefined || line.visible == false) && door.entry_component_location == "flbend"){
            if (const_var.b_t_M_F_t_F.getObjectByName("FLDBFrontArrow") == undefined) {
              let FLDBFrontArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
              FLDBFrontArrow.name = "FLDBFrontArrow"
              FLDBFrontArrow.material = FLDBFrontArrow.material.clone();
              FLDBFrontArrow.visible = (const_var.callMesure && params.add_front_lean && !door.entry_type?.includes("window"))? true :false;
              FLDBFrontArrow.position.set(params.leanF_p_d/-2-0.1, 4.0, params.p_d/2+params.leanF_p_w+0.2);
              FLDBFrontArrow.rotation.x = Math.PI/2;
              FrontLeanDoorArrow.add(FLDBFrontArrow)
            }
            if (const_var.b_t_M_F_t_F.getObjectByName("FLDBBackArrow") == undefined) {
              let FLDBBackArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
              FLDBBackArrow.name = "FLDBBackArrow"
              FLDBBackArrow.material = FLDBBackArrow.material.clone();
              FLDBBackArrow.visible = (const_var.callMesure && params.add_front_lean && !door.entry_type?.includes("window"))? true :false;
              FLDBBackArrow.position.set(params.leanF_p_d/-2-0.1, 4.0, params.p_d/2+0.2);
              FLDBBackArrow.rotation.x = Math.PI/-2;
              FrontLeanDoorArrow.add(FLDBBackArrow)
            }
          
            const FLDBArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanF_p_w-0.2,80,100 );
            const FLDBArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
          
            const FLDBArrowBody = new THREE.Mesh( FLDBArrowBodyGeo, FLDBArrowBodymaterial );
            FLDBArrowBody.name = "FLDBArrowBody"
            FLDBArrowBody.visible = (const_var.callMesure && params.add_front_lean && !door.entry_type?.includes("window"))? true :false;
            FLDBArrowBody.position.set(params.leanF_p_d/-2-0.1, 4.0, params.p_d/2+params.leanF_p_w/2+0.2);
            FLDBArrowBody.rotation.x = Math.PI/2;
            FrontLeanDoorArrowBody.add( FLDBArrowBody );
            /* ---------------End------------------*/
            }
            var line = FrontLeanDoorArrowBody.getObjectByName("FLSArrowForDBody");
            if ( (line == undefined || line.visible == false) && door.entry_component_location == "flfside"){
             /* Fornt lean to side Horizantal Arrow */
              // let frontLeanToLegx = params.p_d /-2 - params.leanF_p_w;
              if (const_var.b_t_M_F_t_F.getObjectByName("FLLArrowHead") == undefined) {
                let FLLArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
                FLLArrowHead.visible = (const_var.callMesure && params.add_front_lean && !door.entry_type?.includes("window"))? true :false;
                FLLArrowHead.name = "FLLArrowHead";
                FLLArrowHead.material = FLLArrowHead.material.clone();
                FLLArrowHead.position.set(params.leanF_p_d/-2,  4.0, params.p_d/2+params.leanF_p_w+0.1);
                FLLArrowHead.position.x = (params.add_left_front_lean_porch ? params.leanF_p_d/-2 - params.lean_p_w : params.leanF_p_d/-2);
                FLLArrowHead.rotation.z = Math.PI/2;
                FrontLeanDoorArrow.add(FLLArrowHead)
            }
            if (const_var.b_t_M_F_t_F.getObjectByName("FLRArrowHead") == undefined) {
                let FLRArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
                FLRArrowHead.name = "FLRArrowHead"
                FLRArrowHead.material = FLRArrowHead.material.clone();
                FLRArrowHead.radiusTop = 12
                FLRArrowHead.visible = (const_var.callMesure && params.add_front_lean && !door.entry_type?.includes("window"))? true :false;
                FLRArrowHead.position.set(params.leanF_p_d/2,  4.0, params.p_d/2+params.leanF_p_w+0.1);
                FLRArrowHead.position.x = params.add_right_front_lean_porch ?params.leanF_p_d/2+params.leanR_p_w :params.leanF_p_d/2
                FLRArrowHead.rotation.z = Math.PI/-2;
                FrontLeanDoorArrow.add(FLRArrowHead)
              }
          
           
            let FLSArrowForDBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025,params.leanF_p_d-0.2,80,100 );
            if(params.add_right_front_lean_porch == true){
             FLSArrowForDBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanF_p_d-0.2 + params.leanR_p_w,80,100 );
            }
            if(params.add_left_front_lean_porch == true){
             FLSArrowForDBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanF_p_d-0.2 + params.lean_p_w,80,100 );
            }
            if(params.add_left_front_lean_porch == true && params.add_right_front_lean_porch == true){
             FLSArrowForDBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanF_p_d-0.2 + params.lean_p_w + params.leanR_p_w,80,100 );
            }
            const FLSArrowForDBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
            const FLSArrowForDBody = new THREE.Mesh( FLSArrowForDBodyGeo, FLSArrowForDBodymaterial );
            FLSArrowForDBody.name = "FLSArrowForDBody"
            FLSArrowForDBody.visible = (const_var.callMesure && params.add_front_lean && !door.entry_type?.includes("window"))? true :false;
            FLSArrowForDBody.position.set(0, 4.0, params.p_d/2+params.leanF_p_w+0.1);
            if(params.add_right_front_lean_porch == true){
              FLSArrowForDBody.position.x =  ( 0+ params.leanR_p_w/2)
            }
            if(params.add_left_front_lean_porch == true){
              FLSArrowForDBody.position.x =  (-params.lean_p_w/2)
            }
            if(params.add_left_front_lean_porch == true && params.add_right_front_lean_porch == true){
              FLSArrowForDBody.position.x =  0
            }   
            FLSArrowForDBody.rotation.z = Math.PI/2;
            FrontLeanDoorArrowBody.add( FLSArrowForDBody );
            /* ---------------End------------------*/
          
            }
            
            var line = FrontLeanDoorArrowBody.getObjectByName("FLStoreSArrowForDBody");
            if ( (line == undefined || line.visible == false) && door.entry_component_location == "flulside"){
              /* Fornt lean to side Horizantal Arrow */
               if (const_var.b_t_M_F_t_F.getObjectByName("FLSLSArrowHead4D") == undefined) {
                 let FLSLSArrowHead4D = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
                 FLSLSArrowHead4D.visible = (const_var.callMesure && params.add_storage_check_front && !door.entry_type?.includes("window"))? true :false;
                 FLSLSArrowHead4D.name = "FLSLSArrowHead4D";
                 FLSLSArrowHead4D.material = FLSLSArrowHead4D.material.clone();
                 FLSLSArrowHead4D.position.set(params.leanF_p_d/-2,  4.0, params.p_d/2+params.leanF_p_w+0.1);
                 FLSLSArrowHead4D.position.x = (params.leanF_p_d/-2);
                 if (params.add_left_front_lean_porch){
                  FLSLSArrowHead4D.position.x = params.p_b_c_b_f_l != "Close" ?(params.leanF_p_d/-2) :  params.leanF_p_d/-2 - params.lean_p_w;
                 }
                 FLSLSArrowHead4D.rotation.z = Math.PI/2;
                 FrontLeanDoorArrow.add(FLSLSArrowHead4D)
             }
             if (const_var.b_t_M_F_t_F.getObjectByName("FLSRStoreArrowHead4D") == undefined) {
                 let FLSRStoreArrowHead4D = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
                 FLSRStoreArrowHead4D.name = "FLSRStoreArrowHead4D"
                 FLSRStoreArrowHead4D.material = FLSRStoreArrowHead4D.material.clone();
                 FLSRStoreArrowHead4D.radiusTop = 12
                 FLSRStoreArrowHead4D.visible = (const_var.callMesure && params.add_storage_check_front && !door.entry_type?.includes("window"))? true :false;
                 FLSRStoreArrowHead4D.position.set(params.leanF_p_d/-2+ parseInt(params.add_storage_front),  4.0, params.p_d/2+params.leanF_p_w+0.1);
                 FLSRStoreArrowHead4D.position.x = params.p_b_c_b_f_l != "Close" ? params.leanF_p_d/-2+ parseInt(params.add_storage_front) : params.leanF_p_d/2; 
                 if ( params.add_right_front_lean_porch){
                   FLSRStoreArrowHead4D.position.x = params.p_b_c_b_f_l != "Close" ? params.leanF_p_d/-2+ parseInt(params.add_storage_front) : params.leanF_p_d/2+params.leanR_p_w ; 
                 }
                 FLSRStoreArrowHead4D.rotation.z = Math.PI/-2;
                 FrontLeanDoorArrow.add(FLSRStoreArrowHead4D)
               }
          
               let value = params.p_b_c_b_f_l != "Close" ? parseInt(params.add_storage_front)-0.2 : params.leanF_p_d;
               if(params.add_right_front_lean_porch == true){
                value = params.p_b_c_b_f_l != "Close" ? parseInt(params.add_storage_front)-0.2 :  params.leanF_p_d-0.2 + params.leanR_p_w;
               }
               if(params.add_left_front_lean_porch == true){
                value = params.p_b_c_b_f_l != "Close" ? parseInt(params.add_storage_front)-0.2 : params.leanF_p_d-0.2 + params.lean_p_w;
               }
               if(params.add_left_front_lean_porch == true && params.add_right_front_lean_porch == true){
                value = params.p_b_c_b_f_l != "Close" ? parseInt(params.add_storage_front)-0.2 : params.leanF_p_d-0.2 + params.lean_p_w + params.leanR_p_w; 
               }

             let FLStoreSArrowForDBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, value, 80, 100);
             const FLStoreSArrowForDBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
             const FLStoreSArrowForDBody = new THREE.Mesh( FLStoreSArrowForDBodyGeo, FLStoreSArrowForDBodymaterial );
             FLStoreSArrowForDBody.name = "FLStoreSArrowForDBody"
             FLStoreSArrowForDBody.visible = (const_var.callMesure && params.add_storage_check_front && !door.entry_type?.includes("window"))? true :false;
             FLStoreSArrowForDBody.position.set(params.leanF_p_d/-2+parseInt(params.add_storage_front)/2, 4.0,params.p_d/2+params.leanF_p_w+0.1);
             FLStoreSArrowForDBody.position.x =  params.p_b_c_b_f_l != "Close" ? params.leanF_p_d/-2+parseInt(params.add_storage_front)/2 :0;
            if(params.add_right_front_lean_porch){
              FLStoreSArrowForDBody.position.x =  params.p_b_c_b_f_l != "Close" ? params.leanF_p_d/-2+parseInt(params.add_storage_front)/2 :params.leanR_p_w/2;
             }
            if(params.add_left_front_lean_porch == true){
              FLStoreSArrowForDBody.position.x =  params.p_b_c_b_f_l != "Close" ? params.leanF_p_d/-2+parseInt(params.add_storage_front)/2 :(-params.lean_p_w/2);
            }
            if(params.add_left_front_lean_porch == true && params.add_right_front_lean_porch == true){
              FLStoreSArrowForDBody.position.x =  params.p_b_c_b_f_l != "Close" ? params.leanF_p_d/-2+parseInt(params.add_storage_front)/2 :0;
            }   
             FLStoreSArrowForDBody.rotation.z = Math.PI/2;
             FrontLeanDoorArrowBody.add( FLStoreSArrowForDBody );
             /* ---------------End------------------*/
             }
             var line = FrontLeanDoorArrowBody.getObjectByName("FLDRSArrowBody");
             if ( (line  == undefined || line.visible == false) && door.entry_component_location == "flufend"){
              if (const_var.b_t_M_F_t_F.getObjectByName("FLRSWLArrow4D") == undefined) {
                let FLRSWLArrow4D = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
                FLRSWLArrow4D.name = "FLRSWLArrow4D"
                FLRSWLArrow4D.material = FLRSWLArrow4D.material.clone();
                FLRSWLArrow4D.visible = (const_var.callMesure && params.add_storage_check_front && !door.entry_type?.includes("window"))? true :false;
                FLRSWLArrow4D.position.set(params.leanF_p_d /-2+ (parseInt(params.add_storage_front))+0.1, 4.0, params.p_d/2+params.leanF_p_w+0.1);
                FLRSWLArrow4D.rotation.x = Math.PI/2;
                FrontLeanDoorArrow.add(FLRSWLArrow4D)
              }
              if (const_var.b_t_M_F_t_F.getObjectByName("FLRSWRArrow4D") == undefined) {
                let FLRSWRArrow4D = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
                FLRSWRArrow4D.name = "FLRSWRArrow4D"
                FLRSWRArrow4D.material = FLRSWRArrow4D.material.clone();
                FLRSWRArrow4D.visible = (const_var.callMesure && params.add_storage_check_front && !door.entry_type?.includes("window"))? true :false;
                FLRSWRArrow4D.position.set(params.leanF_p_d /-2+ (parseInt(params.add_storage_front))+0.1, 4.0, params.p_d/2+0.1);
                FLRSWRArrow4D.rotation.x = Math.PI/-2;
                FrontLeanDoorArrow.add(FLRSWRArrow4D)
              }
            
              const FLDRSArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanF_p_w-0.2,80,100 );
              const FLDRSArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
              const FLDRSArrowBody = new THREE.Mesh( FLDRSArrowBodyGeo, FLDRSArrowBodymaterial );
              FLDRSArrowBody.name = "FLDRSArrowBody"
              FLDRSArrowBody.visible = (const_var.callMesure && params.add_storage_check_front && !door.entry_type?.includes("window"))? true :false;
              // FLDRSArrowBody.position.set(params.p_d / 2+params.leanF_p_w/2, 4.0, params.leanF_p_d /-2+ (parseInt(params.add_storage_front))+0.1);
              FLDRSArrowBody.position.set(params.leanF_p_d /-2+ (parseInt(params.add_storage_front))+0.1, 4.0, params.p_d/2+params.leanF_p_w/2+0.1);
              FLDRSArrowBody.rotation.x = Math.PI/2;
              FrontLeanDoorArrowBody.add( FLDRSArrowBody );
              /* ---------------End------------------*/
                }
        
            
                  
                /*Front Leanto Alignment*/ 
                if (params.leantoAlignmentFront == "1") {
                  FrontLeanDoorArrow.position.x = 0;
                  FrontLeanDoorArrowBody.position.x = 0;
                  }
                if (params.leantoAlignmentFront == "2") {
                  FrontLeanDoorArrow.position.x = -params.p_w/2+params.leanF_p_d/2 ;
                  FrontLeanDoorArrowBody.position.x = -params.p_w/2+params.leanF_p_d/2 ;
                }
                if (params.leantoAlignmentFront == "3") {
                    FrontLeanDoorArrow.position.x = params.p_w/2-params.leanF_p_d/2;
                    FrontLeanDoorArrowBody.position.x = params.p_w/2-params.leanF_p_d/2;
                }
                if ( params.isShowCenter == true ) {
                  FrontLeanDoorArrow.visible = false;
                  FrontLeanDoorArrowBody.visible = false;
                }
          }

              if (params.add_back_lean){
                var line = BackLeanDoorArrowBody.getObjectByName("BLDSArrowBody");  
                if ((line== undefined || line.visible == false) && door.entry_component_location == "blbside"){
                if (const_var.b_t_M_B_t_B.getObjectByName("BLDLArrowHead") == undefined) {
                  let BLDLArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
                  BLDLArrowHead.visible = (const_var.callMesure && params.add_back_lean && !door.entry_type?.includes("window"))? true :false;
                  BLDLArrowHead.name = "BLDLArrowHead";
                  BLDLArrowHead.material = BLDLArrowHead.material.clone();
                  BLDLArrowHead.position.set(params.leanB_p_d/-2,4.0 , params.p_d/-2-params.leanB_p_w-0.1);
                  BLDLArrowHead.position.x = (params.add_left_back_lean_porch ? params.leanB_p_d/-2 - params.lean_p_w : params.leanB_p_d/-2);
                  BLDLArrowHead.rotation.z = Math.PI/2;
                  BackLeanDoorArrows.add(BLDLArrowHead)
                }
                if (const_var.b_t_M_B_t_B.getObjectByName("BLDRArrowHead") == undefined) {
                  let BLDRArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
                  BLDRArrowHead.name = "BLDRArrowHead"
                  BLDRArrowHead.material = BLDRArrowHead.material.clone();
                  BLDRArrowHead.radiusTop = 12
                  BLDRArrowHead.visible = (const_var.callMesure && params.add_back_lean && !door.entry_type?.includes("window"))? true :false;
                  BLDRArrowHead.position.set(params.leanB_p_d/2,4.0 , params.p_d/-2-params.leanB_p_w-0.1);
                  BLDRArrowHead.position.x = params.add_right_back_lean_porch ?params.leanB_p_d/2+params.leanR_p_w :params.leanB_p_d/2
                  BLDRArrowHead.rotation.z = Math.PI/-2;
                  BackLeanDoorArrows.add(BLDRArrowHead)
                }
                let BLDSArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanB_p_d-0.2,80,100 );
                if(params.add_right_back_lean_porch == true){
                  BLDSArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanB_p_d-0.2 + params.leanR_p_w,80,100 );
                 }
                 if(params.add_left_back_lean_porch == true){
                  BLDSArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanB_p_d-0.2 + params.lean_p_w,80,100 );
                 }
                 if(params.add_left_back_lean_porch == true && params.add_right_back_lean_porch == true){
                  BLDSArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanB_p_d-0.2 + params.lean_p_w + params.leanR_p_w,80,100 );
                 }
               
                const BLDSArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
                const BLDSArrowBody = new THREE.Mesh( BLDSArrowBodyGeo, BLDSArrowBodymaterial );
                BLDSArrowBody.name = "BLDSArrowBody"
                BLDSArrowBody.visible = (const_var.callMesure && params.add_back_lean && !door.entry_type?.includes("window"))? true :false;
                BLDSArrowBody.position.set(0,4,params.p_d/-2-params.leanB_p_w-0.1);
                if(params.add_right_back_lean_porch == true){
                  BLDSArrowBody.position.x =  ( 0+ params.leanR_p_w/2)
                }
                if(params.add_left_back_lean_porch == true){
                  BLDSArrowBody.position.x =  (-params.lean_p_w/2)
                }
                if(params.add_left_back_lean_porch == true && params.add_right_back_lean_porch == true){
                  BLDSArrowBody.position.x =  0
                } 
                BLDSArrowBody.rotation.z = Math.PI/2;
                BackLeanDoorArrowBody.add( BLDSArrowBody );
                /* ---------------End------------------*/
              }
            
              var line = BackLeanDoorArrowBody.getObjectByName("BLDFArrowBody");
              if ((line == undefined || line.visible == false) && door.entry_component_location == "blfend"){
                /*Back Lean To front Horizantal Arrow */
                 if (const_var.b_t_M_B_t_B.getObjectByName("BLDFrontArrow") == undefined) {
                  let BLDFrontArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
                  BLDFrontArrow.name = "BLDFrontArrow"
                  BLDFrontArrow.material = BLDFrontArrow.material.clone();
                  BLDFrontArrow.visible = (const_var.callMesure && params.add_back_lean && !door.entry_type?.includes("window"))? true :false;
                  BLDFrontArrow.position.set(params.leanB_p_d/2+0.1,4.0 , params.p_d/-2-params.leanB_p_w-0.2);
                  BLDFrontArrow.rotation.x = Math.PI/-2;
                  BackLeanDoorArrows.add(BLDFrontArrow)
                }
                if (const_var.b_t_M_B_t_B.getObjectByName("BLDBackArrow") == undefined) {
                  let BLDBackArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
                  BLDBackArrow.name = "BLDBackArrow"
                  BLDBackArrow.material = BLDBackArrow.material.clone();
                  BLDBackArrow.visible = (const_var.callMesure && params.add_back_lean && !door.entry_type?.includes("window"))? true :false;
                  BLDBackArrow.position.set(params.leanB_p_d/2+0.1,4.0 , params.p_d/-2-0.2);
                  BLDBackArrow.rotation.x = Math.PI/2;
                  BackLeanDoorArrows.add(BLDBackArrow)
                }
                
                const BLDFArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanB_p_w-0.2,80,100 );
                const BLDFArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
                const BLDFArrowBody = new THREE.Mesh( BLDFArrowBodyGeo, BLDFArrowBodymaterial );
                BLDFArrowBody.name = "BLDFArrowBody"
                BLDFArrowBody.visible = (const_var.callMesure && params.add_back_lean && !door.entry_type?.includes("window"))? true :false;
                BLDFArrowBody.position.set(params.leanB_p_d/2+0.1,4.0 , params.p_d/-2-params.leanB_p_w/2-0.2);
                BLDFArrowBody.rotation.x = Math.PI/2;
                BackLeanDoorArrowBody.add( BLDFArrowBody );
                /* ---------------End------------------*/
              }
                /*Front Lean To back Horizantal Arrow */
                var line = BackLeanDoorArrowBody.getObjectByName( "BLDBArrowBody");
                if ((line == undefined || line.visible == false) && door.entry_component_location == "blbend"){
                if (const_var.b_t_M_B_t_B.getObjectByName("BLDBFrontArrow") == undefined) {
                  let BLDBFrontArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
                  BLDBFrontArrow.name = "BLDBFrontArrow"
                  BLDBFrontArrow.material = BLDBFrontArrow.material.clone();
                  BLDBFrontArrow.visible = (const_var.callMesure && params.add_back_lean && !door.entry_type?.includes("window"))? true :false;
                  BLDBFrontArrow.position.set(params.leanB_p_d/-2-0.1,4.0 , params.p_d/-2-params.leanB_p_w-0.2);
                  BLDBFrontArrow.rotation.x = Math.PI/-2;
                  BackLeanDoorArrows.add(BLDBFrontArrow)
                }
                if (const_var.b_t_M_B_t_B.getObjectByName("BLDBBackArrow") == undefined) {
                  let BLDBBackArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
                  BLDBBackArrow.name = "BLDBBackArrow"
                  BLDBBackArrow.material = BLDBBackArrow.material.clone();
                  BLDBBackArrow.visible = (const_var.callMesure && params.add_back_lean && !door.entry_type?.includes("window"))? true :false;
                  BLDBBackArrow.position.set(params.leanB_p_d/-2-0.1,4.0 , params.p_d/-2-0.2);
                  BLDBBackArrow.rotation.x = Math.PI/2;
                  BackLeanDoorArrows.add(BLDBBackArrow)
                }
                
                const BLDBArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanB_p_w-0.2,80,100 );
                const BLDBArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
                const BLDBArrowBody = new THREE.Mesh( BLDBArrowBodyGeo, BLDBArrowBodymaterial );
                BLDBArrowBody.name = "BLDBArrowBody"
                BLDBArrowBody.visible = (const_var.callMesure && params.add_back_lean && !door.entry_type?.includes("window"))? true :false;
                BLDBArrowBody.position.set(params.leanB_p_d/-2-0.1,4.0 , params.p_d/-2-params.leanB_p_w/2-0.2);
                BLDBArrowBody.rotation.x = Math.PI/2;
                BackLeanDoorArrowBody.add( BLDBArrowBody );
              }
                /* ---------------End------------------*/
            
                var line = BackLeanDoorArrowBody.getObjectByName("BLStoreDSArrowBody");
                if ((line == undefined || line.visible == false) && door.entry_component_location == "bluside"){
                  if (const_var.b_t_M_B_t_B.getObjectByName("BLStoreDLArrowHead") == undefined) {
                    let BLStoreDLArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
                    BLStoreDLArrowHead.visible = (const_var.callMesure && params.add_back_lean && !door.entry_type?.includes("window"))? true :false;
                    BLStoreDLArrowHead.name = "BLStoreDLArrowHead";
                    BLStoreDLArrowHead.material = BLStoreDLArrowHead.material.clone();
                    BLStoreDLArrowHead.position.set(params.leanB_p_d/-2,4.0 , params.p_d/-2-params.leanB_p_w-0.1);
                    if (params.add_left_back_lean_porch){
                      BLStoreDLArrowHead.position.x = params.p_b_c_b_b_l != "Close"? params.leanB_p_d/-2:params.leanB_p_d/-2 - params.lean_p_w;
                    }
                    BLStoreDLArrowHead.rotation.z = Math.PI/2;
                    BackLeanDoorArrows.add(BLStoreDLArrowHead)
                  }
                  if (const_var.b_t_M_B_t_B.getObjectByName("BLStoreDRArrowHead") == undefined) {
                    let BLStoreDRArrowHead = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
                    BLStoreDRArrowHead.name = "BLStoreDRArrowHead"
                    BLStoreDRArrowHead.material = BLStoreDRArrowHead.material.clone();
                    BLStoreDRArrowHead.radiusTop = 12
                    BLStoreDRArrowHead.visible = (const_var.callMesure && params.add_back_lean && !door.entry_type?.includes("window"))? true :false;
                    BLStoreDRArrowHead.position.set((params.leanB_p_d/-2)+(parseInt(params.add_storage_back)),4.0 , params.p_d/-2-params.leanB_p_w-0.1);
                    BLStoreDRArrowHead.position.x = params.p_b_c_b_b_l != "Close"? (params.leanB_p_d/-2)+(parseInt(params.add_storage_back)):params.leanB_p_d/2;
                    if (params.add_right_back_lean_porch){
                      BLStoreDRArrowHead.position.x = params.p_b_c_b_b_l != "Close"? (params.leanB_p_d/-2)+(parseInt(params.add_storage_back)):params.leanB_p_d/2+params.leanR_p_w;
                    }
                    BLStoreDRArrowHead.rotation.z = Math.PI/-2;
                    BackLeanDoorArrows.add(BLStoreDRArrowHead)
                  }
                  let value = params.p_b_c_b_b_l != "Close"?parseInt(params.add_storage_back)-0.2 : params.leanB_p_d-0.2;
                  if(params.add_right_back_lean_porch){
                    value = params.p_b_c_b_b_l != "Close"?parseInt(params.add_storage_back)-0.2 : params.leanB_p_d-0.2 + params.leanR_p_w;
                   }
                   if(params.add_left_back_lean_porch){
                    value = params.p_b_c_b_b_l != "Close"?parseInt(params.add_storage_back)-0.2 : params.leanB_p_d-0.2 + params.lean_p_w;
                   }
                   if(params.add_left_back_lean_porch && params.add_right_back_lean_porch){
                    value = params.p_b_c_b_b_l != "Close"?parseInt(params.add_storage_back)-0.2 :  params.leanB_p_d-0.2 + params.lean_p_w + params.leanR_p_w;
                   }
                  let BLStoreDSArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, value,80,100 );
                  const BLStoreDSArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
                  const BLStoreDSArrowBody = new THREE.Mesh( BLStoreDSArrowBodyGeo, BLStoreDSArrowBodymaterial );
                  BLStoreDSArrowBody.name = "BLStoreDSArrowBody"
                  BLStoreDSArrowBody.visible = (const_var.callMesure && params.add_back_lean && !door.entry_type?.includes("window"))? true :false;
                  BLStoreDSArrowBody.position.set((params.leanB_p_d/-2)+(parseInt(params.add_storage_back))/2,4,params.p_d/-2-params.leanB_p_w-0.1);  
                  BLStoreDSArrowBody.position.x = params.p_b_c_b_b_l != "Close"? (params.leanB_p_d/-2)+(parseInt(params.add_storage_back))/2 : 0;
                  if(params.add_right_back_lean_porch){
                    BLStoreDSArrowBody.position.x = params.p_b_c_b_b_l != "Close"? (params.leanB_p_d/-2)+(parseInt(params.add_storage_back))/2 :  params.leanR_p_w/2;
                  }
                  if(params.add_left_back_lean_porch){
                    BLStoreDSArrowBody.position.x = params.p_b_c_b_b_l != "Close"? (params.leanB_p_d/-2)+(parseInt(params.add_storage_back))/2 : (-params.lean_p_w/2);
                  }
                  if(params.add_left_back_lean_porch && params.add_right_back_lean_porch){
                    BLStoreDSArrowBody.position.x = params.p_b_c_b_b_l != "Close"? (params.leanB_p_d/-2)+(parseInt(params.add_storage_back))/2 : 0;
                  } 
                  BLStoreDSArrowBody.rotation.z = Math.PI/2;
                  BackLeanDoorArrowBody.add( BLStoreDSArrowBody );
                  /* ---------------End------------------*/
                }
                var line = BackLeanDoorArrowBody.getObjectByName("BLDFArrowBody");
                if ((line  == undefined || line.visible == false) && door.entry_component_location == "blufend"){
                  /*Back Lean To Storage left Horizantal Arrow For Door*/
                   if (const_var.b_t_M_B_t_B.getObjectByName("BLLeftStoreWRArrow") == undefined) {
                    let BLLeftStoreWRArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
                    BLLeftStoreWRArrow.name = "BLLeftStoreWRArrow"
                    BLLeftStoreWRArrow.material = BLLeftStoreWRArrow.material.clone();
                    BLLeftStoreWRArrow.visible = (const_var.callMesure && params.add_storage_check_back && !door.entry_type?.includes("window"))? true :false;
                    BLLeftStoreWRArrow.position.set(params.leanB_p_d / -2 + (parseInt(params.add_storage_back))+0.1, 4.0, params.p_d/-2-params.leanB_p_w-0.2);
                    BLLeftStoreWRArrow.rotation.x = Math.PI/-2;
                    BackLeanDoorArrows.add(BLLeftStoreWRArrow)
                  }
                  if (const_var.b_t_M_B_t_B.getObjectByName("BLLeftStoreWLArrow") == undefined) {
                    let BLLeftStoreWLArrow = const_var.b_t_M_R.getObjectByName("ArrowHead").clone();
                    BLLeftStoreWLArrow.name = "BLLeftStoreWLArrow"
                    BLLeftStoreWLArrow.material = BLLeftStoreWLArrow.material.clone();
                    BLLeftStoreWLArrow.visible = (const_var.callMesure && params.add_storage_check_back && !door.entry_type?.includes("window"))? true :false;
                    BLLeftStoreWLArrow.position.set(params.leanB_p_d /-2 + (parseInt(params.add_storage_back))+0.1, 4.0, params.p_d/-2-0.2);
                    BLLeftStoreWLArrow.rotation.x = Math.PI/2;
                    BackLeanDoorArrows.add(BLLeftStoreWLArrow)
                  }
    
                  const BLDFArrowBodyGeo = new THREE.CylinderGeometry( 0.025, 0.025, params.leanB_p_w-0.2,80,100 );
                  const BLDFArrowBodymaterial = new THREE.LineBasicMaterial( { color: 0x17202A, linewidth: 5 ,} );
                  const BLDFArrowBody = new THREE.Mesh( BLDFArrowBodyGeo, BLDFArrowBodymaterial );
                  BLDFArrowBody.name = "BLDFArrowBody"
                  BLDFArrowBody.visible = (const_var.callMesure && params.add_storage_check_back && !door.entry_type?.includes("window"))? true :false;
                  BLDFArrowBody.position.set(params.leanB_p_d /-2 + (parseInt(params.add_storage_back))+0.05, 4.0,params.p_d/-2 - params.leanB_p_w/2-0.2);
                  BLDFArrowBody.rotation.x = Math.PI/2;
                  BackLeanDoorArrowBody.add( BLDFArrowBody );
                  /* ---------------End------------------*/
                } 
           
                /* Back Leanto Alignment */
                if (params.leantoAlignmentBack == "1") {
                  BackLeanDoorArrowBody.position.x = 0;
                  BackLeanDoorArrows.position.x = 0;
                }
                if (params.leantoAlignmentBack == "2") {
                  BackLeanDoorArrowBody.position.x = params.p_w/2-params.leanB_p_d/2;
                  BackLeanDoorArrows.position.x = params.p_w/2-params.leanB_p_d/2 ;
                }
                if (params.leantoAlignmentBack == "3") {
                  BackLeanDoorArrowBody.position.x = -params.p_w/2+params.leanB_p_d/2;
                  BackLeanDoorArrows.position.x = -params.p_w/2+params.leanB_p_d/2;
                } 
                if ( params.isShowCenter == true ) {
                  BackLeanDoorArrowBody.visible = false;
                  BackLeanDoorArrows.visible = false;
                }
              }
            })
          }