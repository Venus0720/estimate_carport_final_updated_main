import * as cuBuilding from './pricingReducer';
import * as cuComponent from './componentReducer';
import * as THREE from "three";

import { params, const_var,calculateLegsCount } from "./reducer"



  // Create a function to load the texture asynchronously
  const loader = new THREE.TextureLoader();
  const loadTextureAsync = async (url) => {
    return new Promise((resolve, reject) => {
      loader.load(
        url,
        (texture) => {
          resolve(texture);
        },
        undefined,
        (error) => {
          reject(error);
        }
      );
    });
  };

  const setDimensions = (widthRatio, heightRatio,manufacturerLogoFront,manufacturerLogoBack ,manufacturerLogoCenter) => {
    
      // set dimention for front logo
      manufacturerLogoFront.name = "manufacturerLogoFront";
      if(const_var.crmSetting.main_domain_url == "eaglebuildings.com" || const_var.crmSetting.parent_api_token == "Bqxq40K4zojI9VBP630isdq7GqlmZOV4oWhnHC5eanGpV7iOacGP9Gba6D9slWTG"){
        manufacturerLogoFront.scale.set(2.5,0.9,4);
        manufacturerLogoFront.position.set(0, params.p_h + (params.p_w/2*(params.p_r_p/12))/2, params.p_d/2+0.08);
        manufacturerLogoFront.rotation.y = 0
        if(params.singleSlope){
            manufacturerLogoFront.position.set(params.p_w/2 + 0.08,params.p_h - 1.5, 0);
            manufacturerLogoFront.rotation.y = Math.PI/2
        }
      }else{
        manufacturerLogoFront.scale.set(widthRatio,heightRatio,4);
        manufacturerLogoFront.position.set(0, params.p_h + ((params.p_w/2*(params.p_r_p/12))/2) - ((heightRatio)/2) - ((widthRatio)/2*(params.p_r_p/12)) - 0.2, params.p_d/2+0.08);
        if(params.singleSlope) manufacturerLogoFront.position.y = params.p_h - (params.p_w*(params.p_r_p/12))/2 - ((heightRatio)/2) - ((widthRatio)/2*(params.p_r_p/12)) - 0.2  
      }
      if(params.p_f_w == "Open" && params.p_u_c == true && !params.singleSlope) manufacturerLogoFront.position.z = params.p_d/-2 + Number(params.p_u_t) + 0.08

      // set dimention for back logo
      manufacturerLogoBack.scale.set(manufacturerLogoFront.scale.x , manufacturerLogoFront.scale.y , manufacturerLogoFront.scale.z);
      manufacturerLogoBack.position.set(manufacturerLogoFront.position.x , manufacturerLogoFront.position.y , params.p_d/-2-0.08);
      manufacturerLogoBack.rotation.set(manufacturerLogoFront.rotation.x , Math.PI , manufacturerLogoFront.rotation.z)

      // set dimention for center logo
      manufacturerLogoCenter.scale.set(manufacturerLogoFront.scale.x + 5 , manufacturerLogoFront.scale.y + 5, manufacturerLogoFront.scale.z);
      manufacturerLogoCenter.position.set(0 , 0.1 , 0);
      manufacturerLogoCenter.rotation.set(Math.PI/-2 , 0 , 0)
  }

  export const logoTexture = async() =>{
    // const_var.crmSetting.main_domain_url = "allsteelstructure.com"
    if (const_var.scene.getObjectByName("manufacturerLogoFront")!=undefined && const_var.crmSetting.parent_api_token !== undefined && const_var.crmSetting.parent_api_token !== ""  && const_var.crmSetting.parent_api_token !==null ) {

      let widthRatio = params.logoWidth*params.p_w
      let heightRatio = params.logoHeight*params.p_w
      let waterMarkLogo = ""
      if(const_var.loginSession==false && (const_var.showNonLoginWaterMark.includes( const_var.crmSetting.main_domain_url))){
        waterMarkLogo = const_var.crmSetting.main_domain_url !== undefined && const_var.crmSetting.main_domain_url.split('.')[0];
      }else if(const_var.loginSession==true && const_var.selectWaterMarkByMNF[const_var.crmSetting.parent_api_token]!=undefined){
        waterMarkLogo = const_var.selectWaterMarkByMNF[const_var.crmSetting.parent_api_token];
      }
      waterMarkLogo = waterMarkLogo !== "cibirix" ? waterMarkLogo : "" ;  //Put the image name in blank ("") to see on local. Watermark will show live
      if(waterMarkLogo != "" && waterMarkLogo != undefined){
      try{
          let fileURL = require(`../../assets/images/newWatermark/${waterMarkLogo}.svg`).default;

          let manufacturerLogoFront = const_var.scene.getObjectByName("manufacturerLogoFront")
          let manufacturerLogoBack = const_var.scene.getObjectByName("manufacturerLogoBack")
          let manufacturerLogoCenter = const_var.scene.getObjectByName("manufacturerLogoCenter")

          setDimensions(widthRatio, heightRatio,manufacturerLogoFront,manufacturerLogoBack ,manufacturerLogoCenter);

          let manufacturerTexture
          if((const_var.crmSetting.main_domain_url == "eaglebuildings.com" || const_var.crmSetting.parent_api_token == "Bqxq40K4zojI9VBP630isdq7GqlmZOV4oWhnHC5eanGpV7iOacGP9Gba6D9slWTG")){
          let eagleInvertImg = require(`../../assets/images/newWatermark/eaglebuildings-invert.svg`).default;
            manufacturerTexture = await loadTextureAsync(eagleInvertImg)
            manufacturerTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
            manufacturerTexture.wrapS = THREE.RepeatWrapping;
            manufacturerTexture.wrapT = THREE.RepeatWrapping;
            
          }

          let texture = await loadTextureAsync(fileURL)
          texture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
          params.logoWidth = (texture.image.width/1000)/20;
          params.logoHeight = (texture.image.height/1000)/20;
          manufacturerLogoFront.material.map = texture;
          if(const_var.crmSetting.main_domain_url == "eaglebuildings.com" || const_var.crmSetting.parent_api_token == "Bqxq40K4zojI9VBP630isdq7GqlmZOV4oWhnHC5eanGpV7iOacGP9Gba6D9slWTG"){
            manufacturerLogoFront.material.displacementMap = manufacturerTexture;
            manufacturerLogoFront.material.displacementScale = 0.05;
          }
          manufacturerLogoFront.renderOrder = new Date().getTime() + (3600 * 24 * 5000);
          manufacturerLogoFront.material.map.wrapS = THREE.RepeatWrapping;
          manufacturerLogoFront.material.map.wrapT = THREE.RepeatWrapping;
          manufacturerLogoFront.material.transparent = true
          manufacturerLogoFront.material.opacity = 1
          manufacturerLogoFront.material.needsUpdate = true
          manufacturerLogoFront.visible = ((const_var.crmSetting.main_domain_url != "eaglebuildings.com" && const_var.crmSetting.parent_api_token != "Bqxq40K4zojI9VBP630isdq7GqlmZOV4oWhnHC5eanGpV7iOacGP9Gba6D9slWTG"))?(((params.p_f_w == "Close") || (params.p_f_w == "Open" && params.p_u_c == true)) && manufacturerLogoFront.material.map != null && manufacturerLogoFront.material.map != undefined) ? true : false:(((params.p_f_w != "Open") || (params.p_f_w == "Open" && params.p_u_c == true)) && params.singleSlope == false && manufacturerLogoFront.material.map != null && manufacturerLogoFront.material.map != undefined)?true: (params.p_r_w != "Open" && params.singleSlope == true) ? true : false;

          widthRatio = params.logoWidth*params.p_w
          heightRatio = params.logoHeight*params.p_w
          setDimensions(widthRatio, heightRatio,manufacturerLogoFront,manufacturerLogoBack ,manufacturerLogoCenter);

          if(const_var.crmSetting.main_domain_url != "eaglebuildings.com" && const_var.crmSetting.parent_api_token != "Bqxq40K4zojI9VBP630isdq7GqlmZOV4oWhnHC5eanGpV7iOacGP9Gba6D9slWTG"){

            manufacturerLogoBack.material =  manufacturerLogoFront.material
            manufacturerLogoBack.visible = ((params.p_b_w == "Close") && manufacturerLogoFront.material.map != null && manufacturerLogoFront.material.map != undefined)
            manufacturerLogoBack.name = "manufacturerLogoBack"
            manufacturerLogoBack.renderOrder = new Date().getTime() + (3600 * 24 * 5000);
        }
        if(const_var.crmSetting.main_domain_url == "eaglebuildings.com" || const_var.crmSetting.parent_api_token == "Bqxq40K4zojI9VBP630isdq7GqlmZOV4oWhnHC5eanGpV7iOacGP9Gba6D9slWTG"){
            let eagleFileURL = require(`../../assets/images/newWatermark/${waterMarkLogo}-ground.svg`).default;
            let eagleTexture = await loadTextureAsync(eagleFileURL)
            manufacturerLogoCenter.material.map = eagleTexture;
            manufacturerLogoCenter.renderOrder = new Date().getTime() + (3600 * 24 * 5000);
            manufacturerLogoCenter.material.map.wrapS = THREE.RepeatWrapping;
            manufacturerLogoCenter.material.map.wrapT = THREE.RepeatWrapping;
            manufacturerLogoCenter.material.transparent = true
            manufacturerLogoCenter.material.opacity = 1
            manufacturerLogoCenter.material.needsUpdate = true
        }else{
            manufacturerLogoCenter.material =  manufacturerLogoFront.material
        }
            manufacturerLogoCenter.name = "manufacturerLogoCenter"
            manufacturerLogoCenter.visible =  (manufacturerLogoFront.material.map != null && manufacturerLogoFront.material.map != undefined)
            manufacturerLogoCenter.renderOrder = new Date().getTime() + (3600 * 24 * 5000);



        } catch (error) {
          console.log("Error loading file:", error)
        }
      }else{
        if("undefined" != typeof const_var.scene.getObjectByName("manufacturerLogoFront") && const_var.scene.getObjectByName("manufacturerLogoFront").visible == true) const_var.scene.getObjectByName("manufacturerLogoFront").visible = false;
        if("undefined" != typeof const_var.scene.getObjectByName("manufacturerLogoBack") && const_var.scene.getObjectByName("manufacturerLogoBack").visible == true) const_var.scene.getObjectByName("manufacturerLogoBack").visible = false;
        if("undefined" != typeof const_var.scene.getObjectByName("manufacturerLogoCenter") && const_var.scene.getObjectByName("manufacturerLogoCenter").visible == true) const_var.scene.getObjectByName("manufacturerLogoCenter").visible = false;
      }
    }
  }



export const installationSurface = (installationSurfaceValue) =>{
        // Center Building ground
        if (const_var.scene.getObjectByName("ground")!=undefined) {
            try{
                const groundTextureUrl = require(`../../assets/images/installation-surface/${installationSurfaceValue}.jpg`).default;
                let cover = 2
                let borderWidth = 0.25
                let repeatX = params.p_w
                let repeatY = params.p_d
                let borderWidthLeft = params.p_w/-2
                let borderWidthRight = params.p_w/2
                let borderLengthFront = params.p_d/-2
                let borderLengthBack = params.p_d/2

                let ground = const_var.scene.getObjectByName("ground")
                ground.name = "ground";
                ground.scale.set((params.p_w) + cover, (params.p_d) + cover, 1)
                ground.position.set(0, 0.05, 0)

                if(params.add_left_lean == true && params.add_right_lean == false){
                ground.scale.x = (params.p_w + params.lean_p_w) + cover
                ground.position.x = -params.lean_p_w/2
                repeatX = params.p_w + params.lean_p_w
                borderWidthLeft = (params.p_w/-2) - params.lean_p_w
                }else if(params.add_left_lean == false && params.add_right_lean == true){
                ground.scale.x = (params.p_w + params.leanR_p_w) + cover
                ground.position.x = params.leanR_p_w/2
                repeatX = params.p_w + params.leanR_p_w
                borderWidthRight = (params.p_w/2) + params.leanR_p_w
                }else if(params.add_left_lean == true && params.add_right_lean == true){
                ground.scale.x = (params.p_w + params.leanR_p_w + params.lean_p_w) + cover
                ground.position.x = -params.lean_p_w/2 + params.leanR_p_w/2
                repeatX = params.p_w + params.leanR_p_w + params.lean_p_w
                borderWidthLeft = (params.p_w/-2) - params.lean_p_w
                borderWidthRight = (params.p_w/2) + params.leanR_p_w
                }else{
                ground.scale.x = (params.p_w) + cover
                ground.position.x = 0
                }

                if(params.add_front_lean == true && params.add_back_lean == false){
                ground.scale.y = (params.p_d + params.leanF_p_w) + cover
                ground.position.z = params.leanF_p_w/2
                repeatY = params.p_d + params.leanF_p_w
                borderLengthFront = (params.p_d/-2) - params.leanF_p_w
                }else if(params.add_front_lean == false && params.add_back_lean == true){
                ground.scale.y = (params.p_d + params.leanB_p_w) + cover
                ground.position.z = -params.leanB_p_w/2
                repeatY = params.p_d + params.leanB_p_w
                borderLengthBack = (params.p_d/2) + params.leanB_p_w
                }else if(params.add_front_lean == true && params.add_back_lean == true){
                ground.scale.y = (params.p_d + params.leanB_p_w + params.leanF_p_w) + cover
                ground.position.z = -params.leanB_p_w/2 + params.leanF_p_w/2
                repeatY = params.p_d + params.leanB_p_w + params.leanF_p_w
                borderLengthFront = (params.p_d/-2) - params.leanF_p_w
                borderLengthBack = (params.p_d/2) + params.leanB_p_w
              }else{
                ground.scale.y = (params.p_d) + cover
                ground.position.z = 0
              }

              if(params.isShowCenter){
                ground.scale.set((params.p_w) + cover, (params.p_d) + cover, 1)
                ground.position.set(0, 0.05, 0)
                borderWidthLeft = params.p_w/-2
                borderWidthRight = params.p_w/2
                borderLengthFront = params.p_d/-2
                borderLengthBack = params.p_d/2
              }

              ground.rotation.x = Math.PI/-2
              ground.visible = true
              let loader = new THREE.TextureLoader();
              let groundTexture = loader.load(`${process.env.REACT_APP_BASE_URL}${groundTextureUrl}`, function(textureImg) {
                groundTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
                ground.material.map = textureImg
                ground.material.bumpMap = textureImg
                ground.material.bumpScale = 1
                ground.material.map.wrapS = THREE.RepeatWrapping;
                ground.material.map.wrapT = THREE.RepeatWrapping;
                ground.material.map.repeat.set(repeatX/10,repeatY/10);
                ground.material.needsUpdate = true
              })


            if (const_var.scene.getObjectByName("groundBorder")!=undefined) {
                let groundBorder = const_var.scene.getObjectByName("groundBorder");

                let groundBorderGeo = new THREE.Shape();
                groundBorderGeo.moveTo((borderWidthRight)  + (cover/2),(borderLengthBack)  + (cover/2)); //bottom left
                groundBorderGeo.lineTo((borderWidthLeft) - (cover/2),(borderLengthBack)  + (cover/2));//top left
                groundBorderGeo.lineTo((borderWidthLeft) - (cover/2),(borderLengthFront) - (cover/2)); // top right
                groundBorderGeo.lineTo((borderWidthRight)  + (cover/2),(borderLengthFront) - (cover/2)); // bottom right
                groundBorderGeo.closePath()

                let groundBorderHoles = new THREE.Shape();
                groundBorderHoles.moveTo((borderWidthRight)  + (cover/2) - borderWidth,(borderLengthBack)  + (cover/2) - borderWidth); //bottom left
                groundBorderHoles.lineTo((borderWidthLeft) - (cover/2) + borderWidth,(borderLengthBack)  + (cover/2) - borderWidth);//top left
                groundBorderHoles.lineTo((borderWidthLeft) - (cover/2) + borderWidth,(borderLengthFront) - (cover/2) + borderWidth); // top right
                groundBorderHoles.lineTo((borderWidthRight)  + (cover/2) - borderWidth,(borderLengthFront) - (cover/2) + borderWidth); // bottom right
                groundBorderHoles.closePath()

                groundBorderGeo.holes.push(groundBorderHoles)
        
                let extrudeSettingsgroundBorder = {
                    depth: 0.2, // height of the raft
                    bevelEnabled: false, // no bevel on edges
                    };
                let groundBorderGeometry = new THREE.ExtrudeGeometry(
                    groundBorderGeo,
                    extrudeSettingsgroundBorder
                );

                groundBorder.geometry = groundBorderGeometry
                groundBorder.rotation.x = Math.PI/-2
                groundBorder.visible = true;
                let groundBorderTexture = loader.load(`${process.env.REACT_APP_BASE_URL}${groundTextureUrl}`, function(textureImg) {
                    groundBorderTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
                    groundBorder.material.map = textureImg
                    ground.material.bumpMap = textureImg
                    ground.material.bumpScale = 1
                    groundBorder.material.map.wrapS = THREE.RepeatWrapping;
                    groundBorder.material.map.wrapT = THREE.RepeatWrapping;
                    groundBorder.material.map.repeat.set(0.2,0.2);
                    groundBorder.material.needsUpdate = true
                  })

            }


            } catch(error) {
              console.log("Error loading file:", error)
            }
          }
}

export const updateCenterBuildingInsulation = (insulation) =>{
    if(insulation && insulation.length > 0) {
        const_var.a_p_d_a.insulation = insulation;
        params.insulation.center.showInsulation = true;
        const_var.insulationJson = [];
        const_var.insulationJson[0] = 'None';
        for(var i=0;i<insulation.length;i++) {
            const_var.insulationJson[insulation[i].insulation_id] = insulation[i].name;
            const_var.insulationPriceJson[insulation[i].insulation_id] = insulation[i];
        }
    }
}

export const insulationForCompare = (compareInsulation, fullBuilding, roofOnly, leanType, storage, sideWall) => {
    // console.log({compareInsulation, fullBuilding, roofOnly, leanType, storage, sideWall},const_var.wallsData[leanType]);
    let insulation, insulationPrice, roofCost = 0, endWallsCost = 0, sideWallsCost = 0, sideWallsCount = 0,closedSideWalls = 0;
     if (const_var.isInsulaltionForOldQuotes && !fullBuilding && !roofOnly) {
        fullBuilding = params.p_f_i;
        roofOnly = params.p_r_o;
     }

    if (fullBuilding) {
        closedSideWalls = const_var.wallsData[leanType].closedSideWalls;
        sideWallsCount = storage ? closedSideWalls - 2 : closedSideWalls;
        if (Object.keys(const_var.wallsData[leanType]).length>0) {
            roofCost = compareInsulation.roof_insulation_cost != undefined ? parseFloat(compareInsulation.roof_insulation_cost) : 0 ;
            endWallsCost = compareInsulation.end_cost != undefined ? (parseFloat(compareInsulation.end_cost) * parseFloat(const_var.wallsData[leanType].closedEndWalls)) : 0;
            sideWallsCost =  compareInsulation.side_cost != undefined ? (parseFloat(compareInsulation.side_cost) * parseFloat(sideWallsCount)) : 0;
            
            if(storage && compareInsulation.utility_side != undefined && compareInsulation.utility_side != 0 ) {
                sideWallsCost =  parseFloat(sideWallsCost) + (parseFloat(compareInsulation.utility_side)*2);
                if (sideWall != 'Open') sideWallsCost = parseFloat(sideWallsCost) + parseFloat(compareInsulation.side_cost) - parseFloat(compareInsulation.utility_side);
            }
            insulationPrice = parseFloat(roofCost) + parseFloat(endWallsCost) + parseFloat(sideWallsCost);
        } else {
            insulationPrice = parseFloat(compareInsulation.roof_insulation_cost);
        }
        insulation = "full";
    }
    if (roofOnly) {
      insulationPrice = parseFloat(compareInsulation.roof_insulation_cost);
      insulation = "roof_only";
    }

    return {insulation, insulationPrice};
}

export const calculateInsulation = (buildingInsulation, fullBuilding, roofOnly, leanType, storage, sideWall, frontWall, backWall) => {
    // console.log({buildingInsulation, fullBuilding, roofOnly, leanType, storage, sideWall},const_var.wallsData[leanType]);
    let insulation = "roof_only", insulationPrice = 0, roofCost = 0, endWallsCost = 0, sideWallsCost = 0, sideWallsCount = 0 , closedSideWalls = 0;
     if (const_var.isInsulaltionForOldQuotes && !fullBuilding && !roofOnly) {
        fullBuilding = params.p_f_i;
        roofOnly = params.p_r_o;
     }

    if (fullBuilding) {
        closedSideWalls = const_var.wallsData[leanType].closedSideWalls;
        sideWallsCount = storage ? closedSideWalls - 2 : closedSideWalls;
        if (buildingInsulation.end_cost != undefined && Object.keys(const_var.wallsData[leanType]).length>0) {
            roofCost = buildingInsulation.roof_insulation_cost != undefined ? parseFloat(buildingInsulation.roof_insulation_cost) : 0 ;
            endWallsCost = buildingInsulation.end_cost != undefined ? (parseFloat(buildingInsulation.end_cost) * parseFloat(const_var.wallsData[leanType].closedEndWalls)) : 0;
            sideWallsCost =  buildingInsulation.side_cost != undefined ? (parseFloat(buildingInsulation.side_cost) * parseFloat(sideWallsCount)) : 0;
            
            if(storage && buildingInsulation.utility_side != undefined && buildingInsulation.utility_side != 0 ) {
                sideWallsCost =  parseFloat(sideWallsCost) + (parseFloat(buildingInsulation.utility_side)*2);
                if (sideWall != 'Open') sideWallsCost = parseFloat(sideWallsCost) + parseFloat(buildingInsulation.side_cost) - parseFloat(buildingInsulation.utility_side);
            }
            insulationPrice = parseFloat(roofCost) + parseFloat(endWallsCost) + parseFloat(sideWallsCost);
        } else {
            
            if(storage || (frontWall!= "Open" || backWall != "Open" || sideWall != "Open")){
                insulationPrice = parseFloat(buildingInsulation.full_building_insulation_cost);
            } else {
                insulationPrice = parseFloat(buildingInsulation.roof_insulation_cost);
            }
        }
        insulation = "full";
    }
    if (roofOnly) {
      insulationPrice = parseFloat(buildingInsulation.roof_insulation_cost);
      insulation = "roof_only";
    }
    return {insulation, insulationPrice};
}
export const fourFeetOnCenterPriceWithExtraBowsPriceForCompare = (pricingData, doubleLegs, legstype, distanceOnCenter, name ) => {
    let extraBowsPrice =0, eqiDis = 0;
    if (pricingData.extra_items != undefined && pricingData.extra_items[0].checkbox_quantity != undefined && pricingData.extra_items[0].checkbox_quantity.length > 0 ){
        let extrabow = pricingData.extra_items[0].checkbox_quantity.find( cbq => cbq.name == "bows");
        const length =  parseFloat(const_var.lengthData[name].length) + parseFloat(const_var.lengthData[name].porchLength);
        if (extrabow) {
            eqiDis = (params.oncenter_val_with_action!='')?((length)/parseInt(params.oncenter_val_with_action)).toFixed(0):((length)/parseInt(distanceOnCenter)).toFixed(0);
            eqiDis = parseFloat(eqiDis) +1;

            const numberOfLegs = Math.abs(const_var.count_numberofLegs - eqiDis);
            if (doubleLegs &&  legstype.includes("double") && extrabow.double_leg != undefined && extrabow.double_leg !=0) {
                extraBowsPrice = parseFloat(extrabow.double_leg) * numberOfLegs;
            } else if (doubleLegs &&  legstype.includes("ladder") && extrabow.ladder_leg != undefined && extrabow.ladder_leg != 0) {
                extraBowsPrice = parseFloat(extrabow.ladder_leg) * numberOfLegs;
            } else {
                extraBowsPrice = parseFloat(extrabow.cost) * numberOfLegs;
            }
        }

    }

    return extraBowsPrice;
}

export const updateFourFeetOnCenterPriceWithExtraBowsOnLeanRemoval = () => {
    if (params.fourth_center_cost && const_var.ExtraItemsFeaturesArray.length > 0) {
        const_var.a_p_d_a.extra_items[0].checkbox.map((val, index) => {
          const_var.ExtraItemsFeaturesArray.map(item => {
                if (item != null && item.label == val.label && item.name == "fourth_center_cost") {
                    item.cost = params.isDefaultfourFeet ? item.cost : val.cost;
                }
            });
        })
        calculateLegsCount();
    }  
}

export function findNearestMultipleOfFour(number) {
    let remainder = number % 4;
    let nearestMultiple = number - remainder;
  
    if (remainder > 2) {
      nearestMultiple += 4;
    }
  
    return nearestMultiple;
  }

 export function findNearestMultipleOfFive(number) {
    const remainder = number % 5;
  
    if (remainder <= 2) {
      return number - remainder;
    }
  
    return number + (5 - remainder);
  }


  export const updateWalkinWindowlegCutPrice = (uniqueId) => {
    let doorAPIPrice, isPriceChanged = false, onVerticalSideCost, onSideCost;
    const_var.entry_points.map(_door => {
        if (_door.uniqueId == uniqueId && _door.entry_doorNewType == undefined) {
             doorAPIPrice = const_var.newComponentArray[_door.parent_array_key][_door.child_array_key][_door.nested_array_key]["Size"][_door.name];
            //  console.log(doorAPIPrice)   
             if (doorAPIPrice){
                    onSideCost = doorAPIPrice.on_side_cost != undefined ? (doorAPIPrice.on_side_cost + doorAPIPrice.cost) :  doorAPIPrice.cost;
                    onVerticalSideCost = doorAPIPrice.vertical_side_cost != undefined ? (doorAPIPrice.vertical_side_cost + doorAPIPrice.cost) :  doorAPIPrice.cost;
                    const checkPrice = params.p_v_w ? onVerticalSideCost : onSideCost;

                    // console.log(params.legCutFee , _door.entry_price,{onVerticalSideCost, onSideCost ,checkPrice})
                    if (params.legCutFee && _door.entry_price != checkPrice) {
                        _door.entry_price =  params.p_v_w ? onVerticalSideCost : onSideCost;
                        isPriceChanged = true;
                    } 
                    if (!params.legCutFee && _door.entry_price !== (doorAPIPrice.cost)){
                        _door.entry_price =  doorAPIPrice.cost != undefined ? doorAPIPrice.cost : _door.entry_price;
                        isPriceChanged = true;
                    }
                }
        }
    });

    // console.log({isPriceChanged})
    return isPriceChanged;
}

export const onForceLeantoRemoval = () => {
    if(params.p_w_c_n){
        if((params.p_f_w=="Close" || params.p_b_w=="Close" || params.p_l_w=="Close" || params.p_r_w=="Close" || params.p_u_c || params.cB_addStorage_check_left || params.cB_addStorage_check_right)
        || (params.p_b_c_b_l_f=="Close" || params.p_b_c_b_l=="Close" || params.p_b_c_b_l_b=="Close" || params.add_storage_check) 
        || (params.p_b_c_b_r_f=="Close" || params.p_b_c_b_r=="Close" || params.p_b_c_b_r_b=="Close" || params.add_storage_check_right)
        || (params.p_b_c_b_f_f=="Close" || params.p_b_c_b_f_b=="Close" || params.p_b_c_b_f_l=="Close" || params.add_storage_check_front)
        || (params.p_b_c_b_b_f=="Close" || params.p_b_c_b_b_b=="Close" || params.p_b_c_b_b_l=="Close" || params.add_storage_check_back)
        ){
            const_var.showWainscotJSX = true;
        } else {
            const_var.showWainscotJSX = false;
            params.p_w_c_n = false;
        }
    }
}

export const createTexture = (geometry,repeatX,repeatY,image) =>{
    let geometryLoader = new THREE.TextureLoader();
    let geometryTexture = geometryLoader.load(image, function(texture1) {
    geometryTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
    // geometry.material.color.set(0xFFFFFF)
    geometry.material.map = texture1;
    geometry.material.bumpMap = texture1;
    geometry.material.bumpScale = 0.02
    geometry.material.metalness = 1
    geometry.material.roughness = 0.5
    geometry.material.anisotropy = 10;
    geometry.material.emissiveMap = texture1;
    geometry.material.emissiveIntensity = 1;
    geometry.material.map.wrapS = THREE.RepeatWrapping;
    geometry.material.map.wrapT = THREE.RepeatWrapping; 
    geometry.material.map.rotation = Math.PI
    geometry.material.map.offset.x = 0.981
    // if (params.p_v_w==true) {
    //     // geometry.material.map.repeat.set((2*Math.round((((repeatX/2)+(repeatX/2/3))*2)/2))/repeatX,0.01);
    //     geometry.material.map.repeat.set(1.34,1.34);
    // } else {
    //     // geometry.material.map.repeat.set(0.01,(Math.round((repeatY/1.5)*2)/(repeatY)));
    //     geometry.material.map.repeat.set(1.34,1.34);
    // }
    geometry.material.map.repeat.set(1.2735,1.34);
    geometry.material.needsUpdate = true

    });
}


export const wallHeightCalculation = (wallValue,totalHeight,direction) =>{
    let wall_hight = 0
    let hdfp = totalHeight - (Math.abs(String(wallValue).replace(/\D/g, "")) * 3)
    switch(wallValue)
    {
        case "Extended Gable":
            wall_hight = totalHeight - 3;
            break;
        case "Gable":
            wall_hight = totalHeight - 0.15;
            break;
        case "One_Fourth_Close":
            wall_hight = totalHeight * 3/4;
            break;
        case "Three_Fourth_Close":
            wall_hight = totalHeight/4;
            break;
        case "Half_Close":
            wall_hight = totalHeight/2;
            break;   
        case "Open":
            wall_hight = totalHeight;
            break;               
        case "Close":
            wall_hight = 0;
            break;
        default:
            // panel Height
            wall_hight = totalHeight - (Math.abs(String(wallValue).replace(/\D/g, "")) * 3)
            switch(direction)
            {
                case "right":
                    hdfp = params.p_h - (params.leanR_p_h + (parseInt(params.b_l_t_r_pR)/12) * params.leanR_p_w);
                    let additionalHeightR = ((params.leanR_p_d == params.p_d) || (params.leantoAlignmentRight == "2")) ? 0.22 : 0;
                    if(params.add_right_lean && hdfp > 0  &&  (Math.abs(params.p_r_w) * 3) -hdfp < 3){
                        //wall_hight = totalHeight - hdfp - additionalHeightR;
                        wall_hight = totalHeight - hdfp - 0.22 /*- additionalHeightR */
                    }
                    break;
                case "left":
                    hdfp = params.p_h - (params.lean_p_h + (parseInt(params.b_l_t_r_p)/12) * params.lean_p_w);
                    let additionalHeightL = ((params.lean_p_d == params.p_d) || (params.leantoAlignmentLeft == "2")) ? 0.22 : 0;
                    if(params.add_left_lean && hdfp > 0 &&  (Math.abs(params.p_l_w) * 3) -hdfp < 3){
                        //wall_hight = totalHeight - hdfp - additionalHeightL
                        wall_hight = totalHeight - hdfp - 0.22/* - additionalHeightL */
                    }
                    break;
                default:
                    // panel Height
                    wall_hight = totalHeight - (Math.abs(String(wallValue).replace(/\D/g, "")) * 3)
                    break;
            }
            
        break;
    }
    // let showCenterBuildingTrimH = (params.isShowCenter) ? 0 : 0.22;
    if(direction == "front" && ((params.add_front_lean ==true && Object.values(const_var.wallArray["front"])[0] == params.p_f_w )|| (params.add_front_lean ==true && params.p_f_w == "Open")))
    {
        hdfp = params.p_h - (params.leanF_p_h + (parseInt(params.b_l_t_r_pF)/12) * params.leanF_p_w);
        wall_hight = totalHeight - hdfp - 0.22;
        // wall_hight = totalHeight - hdfp - showCenterBuildingTrimH
    }

    if(direction == "back" && ((params.add_back_lean && Object.values(const_var.wallArray["back"])[0] == params.p_b_w) || (params.add_back_lean ==true && params.p_b_w == "Open")))
    {
        hdfp = params.p_h - (params.leanB_p_h + (parseInt(params.b_l_t_r_pB)/12) * params.leanB_p_w);
        wall_hight = totalHeight - hdfp - 0.22;
        // wall_hight = totalHeight - hdfp - showCenterBuildingTrimH
    }

    if(params.p_c_p_l && direction == "left" && wall_hight - 1.5 >= 0){
        wall_hight = wall_hight - 1.5
    }
    if(params.p_c_p_r && direction == "right" && wall_hight - 1.5 >= 0){
        wall_hight = wall_hight - 1.5
    }
    

    return wall_hight
}

export const updateFunctionsOnLeantoRemoval = (leanType) => {
  if (leanType == "frontLean") {
    cuComponent.removeWallSpecificComponentForLeanto('F_L_F_W', 'F_L_R_W', 'F_L_L_W', 'F_L_F_S_W');
    if (params.add_storage_check_front) cuComponent.removeWallSpecificComponentForLeanto("F_L_R_S_W","F_L_L_S_W","F_L_F_S_W","F_L_B_S_W");
    params.add_front_lean = params.add_storage_check_front = false;
    const_var.leanFHasDoublelegshow = params.leanF_p_e_l = false;
    params.insulation.frontLean = {showInsulation :false, isCheked:false, insulationId:0, roofOnly:false, fullBuilding:false, showInsulationOptions:false, isDisableFullInsulation:false,}
    params.isShowCenter = false;
    params.leanF_p_d = 21;
    params.leanF_p_h = const_var.b_m_i_hlean;
    params.b_l_t_r_pF = "2";
    params.p_b_c_b_f_f = params.p_b_c_b_f_b = params.p_b_c_b_f_l = "Open";
    if (params.add_left_front_lean_porch || params.add_right_front_lean_porch ){
        if(params.add_left_front_lean_porch) {
            params.add_left_front_lean_porch = false;
            cuBuilding.UpdateLeftLean();
        }
        if(params.add_right_front_lean_porch) {
            params.add_right_front_lean_porch = false;
            cuBuilding.UpdateRightLean(); 
        }
        cuBuilding.UpdateLeanPorches();
    }
    cuBuilding.UpdateFrontLean();
    cuBuilding.removeDataFromArray(3);
  }
  if (leanType == "backLean") {
    cuComponent.removeWallSpecificComponentForLeanto('B_L_F_W', 'B_L_S_W', 'B_L_B_W', 'B_L_F_S_W');
    if (params.add_storage_check_back) cuComponent.removeWallSpecificComponent("B_L_R_S_W","B_L_L_S_W","B_L_F_S_W","B_L_B_S_W");
    params.add_back_lean = params.add_storage_check_back = false;
    const_var.leanBHasDoublelegshow = params.leanB_p_e_l = false;
    params.insulation.backLean = {showInsulation :false, isCheked:false, insulationId:0, roofOnly:false, fullBuilding:false, showInsulationOptions:false, isDisableFullInsulation:false,}
    params.isShowCenter = false;
    params.leanB_p_d = 21;
    params.leanB_p_h = const_var.b_m_i_hlean;
    params.b_l_t_r_pB = "2";
    params.p_b_c_b_b_f = params.p_b_c_b_b_b = params.p_b_c_b_b_l = "Open";
    if (params.add_left_back_lean_porch || params.add_right_back_lean_porch ){
        if(params.add_left_back_lean_porch){
            params.add_left_back_lean_porch = false;
            cuBuilding.UpdateLeftLean();
        } 
        if(params.add_right_back_lean_porch) {
            params.add_right_back_lean_porch = false;
            cuBuilding.UpdateRightLean();
        }
        cuBuilding.UpdateLeanPorches();
    }
    cuBuilding.UpdateBackLean();
    cuBuilding.removeDataFromArray(4);
 }

 onForceLeantoRemoval()
 cuBuilding.cP();
}

export const updateCenterBuildingPricesOnLeanAPICalls = (state, leanType) => {
    if ( (leanType == "leanGetDataLeft" || leanType == "leanGetDataRight") && const_var[leanType] != undefined && const_var[leanType].central_panel != undefined && const_var[leanType].central_panel.length > 0) {
        const_var.a_p_d_a.panel = const_var[leanType].central_panel;
        if (const_var.checkPanelForLean.left && leanType == "leanGetDataLeft") const_var.UpdatedPriceData.left_wall_price_changed = true;
        if (const_var.checkPanelForLean.right && leanType == "leanGetDataRight") const_var.UpdatedPriceData.right_wall_price_changed = true;
    }
    if (const_var[leanType] != undefined && const_var[leanType].central_building_structure != undefined && const_var[leanType].central_building_structure.length > 0) {
        const_var.a_p_d_a.building_structure = const_var[leanType].central_building_structure;
        cuBuilding.CheckLegsByResponse(state);
    }
}

export function zigZagLegs (width, length, height, leftGroup, rightGroup, eqiDis, leftLegsForCut, rightLegsForCut) {
    // console.log({width, length, height, leftGroup, rightGroup, eqiDis, leftLegsForCut, rightLegsForCut});
    for (let i = 0; i < height; i = i+2) {
        for (let e = length/2 -0.12, j = 0; e > (length/-2 )-1; e = e - (length / eqiDis ), j++) {
            if( e < length / -2 + 0.12 ) e = (length /-2) + 0.12;
            if(e >= (length/2) - 2) e = (length/2)-0.12;

            if (leftGroup != undefined){
                if (i>1){
                    const leftTopZigZagConnector = const_var.b_t_M_L.getObjectByName("zigZagConnector").clone();
                    leftTopZigZagConnector.name = `${leftLegsForCut}${"TopZigZagConnector"}${j}${'x'}${i}`;
                    leftTopZigZagConnector.material = leftTopZigZagConnector.material.clone();
                    leftTopZigZagConnector.scale.set(1.35,0.2,0.3);
                    leftTopZigZagConnector.position.set(width/-2+0.54,i-0.3,e);
                    leftTopZigZagConnector.rotation.z = Math.PI/-3.4;
                    leftGroup.add(leftTopZigZagConnector);
                    const_var.legsForCut[leftLegsForCut][leftTopZigZagConnector.name] = leftTopZigZagConnector;
                }
                
                const leftBottomZigZagConnector = const_var.b_t_M_L.getObjectByName("zigZagConnector").clone();
                leftBottomZigZagConnector.name = `${leftLegsForCut}${"BottomZigZagConnector"}${j}${'x'}${i}`;
                leftBottomZigZagConnector.material = leftBottomZigZagConnector.material.clone();
                leftBottomZigZagConnector.scale.set(1.4,0.2,0.3);
                leftBottomZigZagConnector.position.set(width/-2+0.54,i+0.7,e);
                leftBottomZigZagConnector.rotation.z = Math.PI/3.4;
                if (i < height - 2) {
                    leftGroup.add(leftBottomZigZagConnector);	  
                    const_var.legsForCut[leftLegsForCut][leftBottomZigZagConnector.name] = leftBottomZigZagConnector;
                }
                
                if (i == 0){
                    const leftBaseRailLegConnector = const_var.b_t_M_L.getObjectByName("legConnector").clone();
                    leftBaseRailLegConnector.name = `${leftLegsForCut}${"BaseRailLegConnector"}${j}${'x'}${i}`;
                    leftBaseRailLegConnector.material = leftBaseRailLegConnector.material.clone();
                    leftBaseRailLegConnector.scale.set(0.97,0.2,0.3);
                    leftBaseRailLegConnector.position.set(width/-2+0.5,i+0.08,e);
                    leftGroup.add(leftBaseRailLegConnector);
                    const_var.legsForCut[leftLegsForCut][leftBaseRailLegConnector.name] = leftBaseRailLegConnector;
                }
            }

            if (rightGroup != undefined){
                if (i>1){
                    const rightTopZigZagConnector = const_var.b_t_M_L.getObjectByName("zigZagConnector").clone();
                    rightTopZigZagConnector.name = `${rightLegsForCut}${"TopZigZagConnector"}${j}${'x'}${i}`;
                    rightTopZigZagConnector.material = rightTopZigZagConnector.material.clone();
                    rightTopZigZagConnector.scale.set(1.35,0.2,0.3);
                    rightTopZigZagConnector.position.set(width/2-0.54,i-0.3,e);
                    rightTopZigZagConnector.rotation.z = Math.PI/3.4;
                    rightGroup.add(rightTopZigZagConnector);
                    const_var.legsForCut[rightLegsForCut][rightTopZigZagConnector.name] = rightTopZigZagConnector;
                }

                const rightBottomZigZagConnector = const_var.b_t_M_L.getObjectByName("zigZagConnector").clone();
                rightBottomZigZagConnector.name = `${rightLegsForCut}${"BottomZigZagConnector"}${j}${'x'}${i}`;
                rightBottomZigZagConnector.material = rightBottomZigZagConnector.material.clone();
                rightBottomZigZagConnector.scale.set(1.4,0.2,0.3);
                rightBottomZigZagConnector.position.set(width/2-0.54,i+0.7,e);
                rightBottomZigZagConnector.rotation.z = Math.PI/-3.4;
                if (i < height - 2) {
                    rightGroup.add(rightBottomZigZagConnector);	  
                    const_var.legsForCut[rightLegsForCut][rightBottomZigZagConnector.name] = rightBottomZigZagConnector;
                }	
                
                if (i == 0){
                    const rightBaseRailLegConnector = const_var.b_t_M_L.getObjectByName("legConnector").clone();
                    rightBaseRailLegConnector.name = `${rightLegsForCut}${"BaseRailLegConnector"}${j}${'x'}${i}`;
                    rightBaseRailLegConnector.material = rightBaseRailLegConnector.material.clone();
                    rightBaseRailLegConnector.scale.set(0.97,0.2,0.3);
                    rightBaseRailLegConnector.position.set(width/2-0.5,i+0.08,e);
                    rightGroup.add(rightBaseRailLegConnector);
                    const_var.legsForCut[rightLegsForCut][rightBaseRailLegConnector.name] = rightBaseRailLegConnector;
                }
            }
        }
    }
	
}

export const commonFunctionForInsulationCalculations = (price)=>{
    if(const_var.stateManufacturerAcordingAPIDiscount['commissions'][params.m_s_n]!=undefined && const_var.stateManufacturerAcordingAPIDiscount['commissions'][params.m_s_n].length>0)
        {
            for(var i=0;i<const_var.stateManufacturerAcordingAPIDiscount['commissions'][params.m_s_n].length;i++)
            {
                if(const_var.stateManufacturerAcordingAPIDiscount['commissions'][params.m_s_n][i].category!=undefined || const_var.stateManufacturerAcordingAPIDiscount['commissions'][params.m_s_n][i].category!=null && const_var.stateManufacturerAcordingAPIDiscount['commissions'][params.m_s_n][i].category == params.selectedInsulationId)
                { 
                   
                    if(const_var.stateManufacturerAcordingAPIDiscount['commissions'][params.m_s_n][i].component=="insulation")
                    {
                        if(params.selectedInsulationId!=0)
                        {
                            if(const_var.stateManufacturerAcordingAPIDiscount['commissions'][params.m_s_n][i].category!=undefined || const_var.stateManufacturerAcordingAPIDiscount['commissions'][params.m_s_n][i].category!=null)
                            {
                                if(params.selectedInsulationId == const_var.stateManufacturerAcordingAPIDiscount['commissions'][params.m_s_n][i].category)
                                {
                                    if(price>= parseInt(const_var.stateManufacturerAcordingAPIDiscount['commissions'][params.m_s_n][i].from) && price <=parseInt(const_var.stateManufacturerAcordingAPIDiscount['commissions'][params.m_s_n][i].to) )
                                    {
                                        const_var.UpdatedPriceData.custom_insulation_down_payment_rate = undefined;
                                        return true;
                                    }
                                }
                            }
                            
                        }
                    }
                }
                
            }
        }
}
export const checkAdditionalFeaturesValue = (val)=>{
    let splitVal = "";
    if(val.percentage_of!=undefined && val.percentage_of!="")
    {
        splitVal =val.percentage_of.split(",");
    }else
    {
        splitVal =val.percentage_of.split(",");
    }
    let CHKCalculation = {width:false,length:false,height:false};
    
    if(splitVal.includes("5")!=false)
    {
        CHKCalculation.width = true;
    }
    if(splitVal.includes("7")!=false)
    {
        CHKCalculation.length = true;
    }
    if(splitVal.includes("6")!=false)
    {
        CHKCalculation.height = true;
    }
    return CHKCalculation;
}
export const updateWainscotOnWallCahnge = () => {
    if(params.p_w_c_n){
        if((params.p_f_w=="Close" || params.p_b_w=="Close" || params.p_l_w=="Close" || params.p_r_w=="Close" || params.p_u_c || params.cB_addStorage_check_left || params.cB_addStorage_check_right)
        || (params.p_b_c_b_l_f=="Close" || params.p_b_c_b_l=="Close" || params.p_b_c_b_l_b=="Close" || params.add_storage_check) 
        || (params.p_b_c_b_r_f=="Close" || params.p_b_c_b_r=="Close" || params.p_b_c_b_r_b=="Close" || params.add_storage_check_right)
        || (params.p_b_c_b_f_f=="Close" || params.p_b_c_b_f_b=="Close" || params.p_b_c_b_f_l=="Close" || params.add_storage_check_front)
        || (params.p_b_c_b_b_f=="Close" || params.p_b_c_b_b_b=="Close" || params.p_b_c_b_b_l=="Close" || params.add_storage_check_back)
        ){
            const_var.showWainscotJSX = true;
        } else {
            const_var.showWainscotJSX = false;
            params.p_w_c_n = false;
            const_var.UpdatedPriceData.wainscot_price_changed = true;
            const_var.UpdatedPriceData.color_price_changed = true;
        }
    }
}

export const manageOverheadDoorObject = (response)=>{
  if (response.data.data.pricing_data.garage_door_v3 != undefined && response.data.data.pricing_data.garage_door_v3.overhead_door_door != undefined) {
                let overhead = response.data.data.pricing_data.garage_door_v3.overhead_door_door.find(e => e.name == "Overhead");
                if (overhead) {
                    overhead.data.forEach((e) => {
                        if (e.door_add_ons) {
                            let windowOptions = e.door_add_ons.find(i => i.door == "window_option");
                            if (windowOptions) {
                                windowOptions.category = windowOptions.category.map((item) => {
                                    if (typeof(item) == 'string') {

                                        return {
                                            category: item,
                                            cost: windowOptions.cost,
                                            cost_type: windowOptions.cost_type,
                                            is_cost: windowOptions.is_cost,
                                        }
                                    } else {
                                        return item;
                                    }
                                })
 
                                delete windowOptions.cost
                                delete windowOptions.cost_type
                                delete windowOptions.is_cost
                            }
 
                            let motorOptions = e.door_add_ons.find(i => i.door == "motor");
                            if (motorOptions) {
                                motorOptions.category = motorOptions.category.map((item, index) => {
                                    if (typeof(item) == 'string') {

                                        return {
                                            category: item,
                                            cost: motorOptions.cost.split(',')[index],
                                            cost_type: motorOptions.cost_type,
                                            is_cost: motorOptions.is_cost,
                                        }
                                    } else {
                                        return item;
                                    }
                                })
 
                                delete motorOptions.cost
                                delete motorOptions.cost_type
                                delete motorOptions.is_cost
                            }
 
                            let insulatedOptions = e.door_add_ons.find(i => i.door == "insulated");
                            if (insulatedOptions) {
                                insulatedOptions.category = insulatedOptions.category.map((item) => {
                                    if (typeof(item) == 'string') {

                                        return {
                                            category: item,
                                            cost: insulatedOptions.cost,
                                            cost_type: insulatedOptions.cost_type,
                                            is_cost: insulatedOptions.is_cost,
                                        }
                                    } else {
                                        return item;
                                    }
                                })
 
                                delete insulatedOptions.cost
                                delete insulatedOptions.cost_type
                                delete insulatedOptions.is_cost
                            }
                            let isAddOnOptionsOld = false;
                            let addOnOptions = e.door_add_ons.filter(i => i.door == "add_on_options");
                            addOnOptions.map((addOnOption) => {
                                addOnOption.category = addOnOption.category.map((item) => {
                                    if (typeof(item) == 'string') {

                                        isAddOnOptionsOld = true;
                                        return {
                                            category: item,
                                            cost: addOnOption.cost,
                                            cost_type: addOnOption.cost_type,
                                            is_cost: addOnOption.is_cost,
                                        }
                                    } else {
                                        return item;
                                    }
                                })
 
                                delete addOnOption.cost
                                delete addOnOption.cost_type
                                delete addOnOption.is_cost
                            })
 
                            if (isAddOnOptionsOld) {
                                e.door_add_ons = e.door_add_ons.filter(i => i.door != "add_on_options");
                                e.door_add_ons.push({door: "add_on_options", category: addOnOptions.map((e) => e.category[0])})
                            }
                        }
                    })
                }
            }
 
            if (response.data.data.request_data.building != undefined && response.data.data.request_data.building.entry_points != undefined) {    
                response.data.data.request_data.building.entry_points.forEach((item) => {
                        let e = item.entry_size;
                        if (e.door_add_ons) {
                            let windowOptions = e.door_add_ons.find(i => i.door == "window_option");
                            if (windowOptions) {
                                windowOptions.category = windowOptions.category.map((item) => {
                                    if (typeof(item) == 'string') {
                                        const_var.isShowAlert = true;
                                        const_var.alertUsedFor = "showOverheadOldQuoteOrderMsg";
                                        return {
                                            category: item,
                                            cost: windowOptions.cost,
                                            cost_type: windowOptions.cost_type,
                                            is_cost: windowOptions.is_cost,
                                        }
                                    } else {
                                        return item;
                                    }
                                })
 
                                delete windowOptions.cost
                                delete windowOptions.cost_type
                                delete windowOptions.is_cost
                            }
 
                            let motorOptions = e.door_add_ons.find(i => i.door == "motor");
                            if (motorOptions) {
                                motorOptions.category = motorOptions.category.map((item, index) => {
                                    if (typeof(item) == 'string') {
                                        const_var.isShowAlert = true;
                                        const_var.alertUsedFor = "showOverheadOldQuoteOrderMsg";
                                        return {
                                            category: item,
                                            cost: motorOptions.cost.split(',')[index],
                                            cost_type: motorOptions.cost_type,
                                            is_cost: motorOptions.is_cost,
                                        }
                                    } else {
                                        return item;
                                    }
                                })
 
                                delete motorOptions.cost
                                delete motorOptions.cost_type
                                delete motorOptions.is_cost
                            }
 
                            let insulatedOptions = e.door_add_ons.find(i => i.door == "insulated");
                            if (insulatedOptions) {
                                insulatedOptions.category = insulatedOptions.category.map((item) => {
                                    if (typeof(item) == 'string') {
                                        const_var.isShowAlert = true;
                                        const_var.alertUsedFor = "showOverheadOldQuoteOrderMsg";
                                        return {
                                            category: item,
                                            cost: insulatedOptions.cost,
                                            cost_type: insulatedOptions.cost_type,
                                            is_cost: insulatedOptions.is_cost,
                                        }
                                    } else {
                                        return item;
                                    }
                                })
 
                                delete insulatedOptions.cost
                                delete insulatedOptions.cost_type
                                delete insulatedOptions.is_cost
                            }
                            let isAddOnOptionsOld = false;
                            let addOnOptions = e.door_add_ons.filter(i => i.door == "add_on_options");
                            addOnOptions.map((addOnOption) => {
                                addOnOption.category = addOnOption.category.map((item) => {
                                    if (typeof(item) == 'string') {
                                        const_var.isShowAlert = true;
                                                                                const_var.alertUsedFor = "showOverheadOldQuoteOrderMsg";
                                        isAddOnOptionsOld = true;
                                        return {
                                            category: item,
                                            cost: addOnOption.cost,
                                            cost_type: addOnOption.cost_type,
                                            is_cost: addOnOption.is_cost,
                                        }
                                    } else {
                                        return item;
                                    }
                                })
 
                                delete addOnOption.cost
                                delete addOnOption.cost_type
                                delete addOnOption.is_cost
                            })
 
                            if (isAddOnOptionsOld) {
                                e.door_add_ons = e.door_add_ons.filter(i => i.door != "add_on_options");
                                e.door_add_ons.push({door: "add_on_options", category: addOnOptions.map((e) => e.category[0])})
                            }
                        }
                    })
               
            }
}

export const convertToTwoDecimalNumber = (price) =>{
    
    price = parseFloat(price);
    let convertToTwoDecimal = Number.isInteger(price) ? price : price.toFixed(2);
    let convertToNumber = parseFloat(convertToTwoDecimal);

    return convertToNumber;
}

export const showWallName = (buildingtype) =>{
    
    /* Code for Center Building Walls Name */
    let frontWallName = const_var.scene.getObjectByName("frontWallName")
    let backWallName = const_var.scene.getObjectByName("backWallName")
    let rightWallName = const_var.scene.getObjectByName("rightWallName")
    let leftWallName = const_var.scene.getObjectByName("leftWallName")

    /* Code for Left Lean To Building Walls Name */
    let RLfrontWallName = const_var.scene.getObjectByName("RLfrontWallName")
    let RLbackWallName = const_var.scene.getObjectByName("RLbackWallName")
    let RLsideWallName = const_var.scene.getObjectByName("RLsideWallName")

    /* Code for Left Lean To Building Walls Name */
    let LLfrontWallName = const_var.scene.getObjectByName("LLfrontWallName")
    let LLbackWallName = const_var.scene.getObjectByName("LLbackWallName")
    let LLsideWallName = const_var.scene.getObjectByName("LLsideWallName")

    /* Code for Left Lean To Building Walls Name */
    let FLfrontWallName = const_var.scene.getObjectByName("FLfrontWallName")
    let FLbackWallName = const_var.scene.getObjectByName("FLbackWallName")
    let FLsideWallName = const_var.scene.getObjectByName("FLsideWallName")

    /* Code for Left Lean To Building Walls Name */
    let BLfrontWallName = const_var.scene.getObjectByName("BLfrontWallName")
    let BLbackWallName = const_var.scene.getObjectByName("BLbackWallName")
    let BLsideWallName = const_var.scene.getObjectByName("BLsideWallName")

    if(buildingtype == "center" || buildingtype == "all"){
        if(frontWallName != undefined){
        frontWallName.position.set((params.p_w/-2),0.7,params.p_d/2 + 0.2);
        frontWallName.visible = const_var.crmSetting.is_show_wall_lable == true && const_var.callMesure;
        }
        if(backWallName != undefined){
        backWallName.position.set((params.p_w/2),0.7,params.p_d/-2 - 0.2);
        backWallName.visible = const_var.crmSetting.is_show_wall_lable == true && const_var.callMesure;
        }
        if(rightWallName != undefined){
        rightWallName.position.set((params.p_w/2)+0.2,0.7,params.p_d/2);
        rightWallName.visible = const_var.crmSetting.is_show_wall_lable == true && const_var.callMesure;
        }
        if(leftWallName != undefined){
        leftWallName.position.set((params.p_w/-2)-0.2,0.7,params.p_d/-2);
        leftWallName.visible = const_var.crmSetting.is_show_wall_lable == true && const_var.callMesure;
        }
    }

    if(buildingtype == "right" || buildingtype == "all"){
        if(RLfrontWallName != undefined){
            RLfrontWallName.position.set((params.p_w/2) + 0.15,0.8,params.leanR_p_d/2 + 0.15);
            if (params.leantoAlignmentRight=="2") RLfrontWallName.position.z = params.p_d/2 + 0.15; 
            if (params.leantoAlignmentRight=="3") RLfrontWallName.position.z = -params.p_d/2+params.leanR_p_d + 0.15;
            RLfrontWallName.visible = params.add_right_lean && !params.isShowCenter && const_var.crmSetting.is_show_wall_lable == true && const_var.callMesure
        }
        if(RLbackWallName != undefined){
            RLbackWallName.position.set((params.p_w/2)+(params.leanR_p_w) - 0.15,0.8,params.leanR_p_d/-2 - 0.15);
            if (params.leantoAlignmentRight=="2") RLbackWallName.position.z = params.p_d/2 - params.leanR_p_d - 0.15;
            if (params.leantoAlignmentRight=="3") RLbackWallName.position.z = -params.p_d/2 - 0.15;
            RLbackWallName.visible = params.add_right_lean && !params.isShowCenter && const_var.crmSetting.is_show_wall_lable == true && const_var.callMesure
        }
        if(RLsideWallName != undefined){
            RLsideWallName.position.set((params.p_w/2)+(params.leanR_p_w) + 0.15,0.8,params.leanR_p_d/2 - 0.15);
            if (params.leantoAlignmentRight=="2") RLsideWallName.position.z = params.p_d/2 - 0.15; 
            if (params.leantoAlignmentRight=="3") RLsideWallName.position.z = -params.p_d/2+params.leanR_p_d - 0.15;
            RLsideWallName.visible = params.add_right_lean && !params.isShowCenter && const_var.crmSetting.is_show_wall_lable == true && const_var.callMesure
        }
    }

    if(buildingtype == "left" || buildingtype == "all"){
        if(LLfrontWallName != undefined){
            LLfrontWallName.position.set((params.p_w/-2)-(params.lean_p_w) + 0.2,0.8,params.lean_p_d/2 + 0.2);
            if (params.leantoAlignmentLeft=="2") LLfrontWallName.position.z = params.p_d/2 + 0.2;
            if (params.leantoAlignmentLeft=="3") LLfrontWallName.position.z = -params.p_d/2+params.lean_p_d + 0.2;
            LLfrontWallName.visible = params.add_left_lean && !params.isShowCenter && const_var.crmSetting.is_show_wall_lable == true && const_var.callMesure
        }
        if(LLbackWallName != undefined){
            LLbackWallName.position.set((params.p_w/-2) - 0.2,0.8,params.lean_p_d/-2 - 0.2);
            if (params.leantoAlignmentLeft=="2") LLbackWallName.position.z = params.p_d/2 - params.lean_p_d - 0.2;
            if (params.leantoAlignmentLeft=="3") LLbackWallName.position.z = -params.p_d/2 - 0.2;
            LLbackWallName.visible = params.add_left_lean && !params.isShowCenter && const_var.crmSetting.is_show_wall_lable == true && const_var.callMesure
        }
        if(LLsideWallName != undefined){
            LLsideWallName.position.set((params.p_w/-2)-(params.lean_p_w)-0.2,0.8,params.lean_p_d/-2 + 0.2);
            if (params.leantoAlignmentLeft=="2") LLsideWallName.position.z = params.p_d/2 - params.lean_p_d + 0.2;
            if (params.leantoAlignmentLeft=="3") LLsideWallName.position.z = -params.p_d/2 + 0.2;
            LLsideWallName.visible = params.add_left_lean && !params.isShowCenter && const_var.crmSetting.is_show_wall_lable == true && const_var.callMesure
        }
    }

    if(buildingtype == "front" || buildingtype == "all"){
        if(FLfrontWallName != undefined){
            FLfrontWallName.position.set(params.leanF_p_d/2 + 0.15,0.8,params.p_d/2 + params.leanF_p_w - 0.2);
            if (params.leantoAlignmentFront == "2") FLfrontWallName.position.x = -params.p_w/2 + params.leanF_p_d + 0.15;
            if (params.leantoAlignmentFront == "3") FLfrontWallName.position.x = params.p_w/2 + 0.15;
            FLfrontWallName.visible = params.add_front_lean && !params.isShowCenter && const_var.crmSetting.is_show_wall_lable == true && const_var.callMesure
        }
    
        if(FLbackWallName != undefined){
            FLbackWallName.position.set(params.leanF_p_d/-2 - 0.15,0.8,params.p_d/2 + 0.15);
            if (params.leantoAlignmentFront == "2") FLbackWallName.position.x = -params.p_w/2 - 0.15;
            if (params.leantoAlignmentFront == "3") FLbackWallName.position.x = params.p_w/2-params.leanF_p_d - 0.15;
            FLbackWallName.visible = params.add_front_lean && !params.isShowCenter && const_var.crmSetting.is_show_wall_lable == true && const_var.callMesure
        }
    
        if(FLsideWallName != undefined){
            FLsideWallName.position.set(params.leanF_p_d/-2 + 0.2 ,0.8,params.p_d/2 + params.leanF_p_w + 0.15);
            if (params.leantoAlignmentFront == "2") FLsideWallName.position.x = -params.p_w/2 + 0.2;
            if (params.leantoAlignmentFront == "3") FLsideWallName.position.x = params.p_w/2-params.leanF_p_d + 0.2;
            FLsideWallName.visible = params.add_front_lean && !params.isShowCenter && const_var.crmSetting.is_show_wall_lable == true && const_var.callMesure
        }
    }

    if(buildingtype == "back" || buildingtype == "all"){
        if(BLfrontWallName != undefined){
            BLfrontWallName.position.set(params.leanB_p_d/2 + 0.2,0.8,params.p_d/-2 - 0.2);
            if (params.leantoAlignmentBack == "2") BLfrontWallName.position.x = params.p_w/2 + 0.2;
            if (params.leantoAlignmentBack == "3") BLfrontWallName.position.x = -params.p_w/2 + params.leanB_p_d + 0.2;
            BLfrontWallName.visible = params.add_back_lean && !params.isShowCenter && const_var.crmSetting.is_show_wall_lable == true && const_var.callMesure
        }

        if(BLbackWallName != undefined){
        BLbackWallName.position.set(params.leanB_p_d/-2 - 0.2,0.8,params.p_d/-2 - params.leanB_p_w + 0.2);
        if (params.leantoAlignmentBack == "2") BLbackWallName.position.x = params.p_w/2 -params.leanB_p_d  - 0.15;
        if (params.leantoAlignmentBack == "3") BLbackWallName.position.x = -params.p_w/2;
        BLbackWallName.visible = params.add_back_lean && !params.isShowCenter && const_var.crmSetting.is_show_wall_lable == true && const_var.callMesure
        }

        if(BLsideWallName != undefined){
        BLsideWallName.position.set(params.leanB_p_d/2 - 0.2,0.8,params.p_d/-2 - params.leanB_p_w - 0.2);
        if (params.leantoAlignmentBack == "2") BLsideWallName.position.x = params.p_w/2 - 0.2;
        if (params.leantoAlignmentBack == "3") BLsideWallName.position.x = -params.p_w/2 + params.leanB_p_d - 0.2;
        BLsideWallName.visible = params.add_back_lean && !params.isShowCenter && const_var.crmSetting.is_show_wall_lable == true && const_var.callMesure
        }
    }

    const_var.controls.ZoomOut()
}


// "This function updates the alert pop-up message based on the alert use case."
export const updateAlertMessage = (alertUsedFor) =>{

    let alertMessage = "";

    if (alertUsedFor == "restrictedBuildingHeight") {    
       alertMessage = "Please increase the height to design the building with the selected width.";  
     }
     if (alertUsedFor == "restrictedBuildingHeight1") {    
       alertMessage = "Please decrease the width to design the building with the selected Height.";  
     }
    if (alertUsedFor == "noSpaceForComponent") {    
       alertMessage = "The item cannot be placed because it will not fit on the selected wall.";  
     }
     if (alertUsedFor == "noSpaceForComponentDuringLoading") {    
       alertMessage = "Overlapping doors and windows incorporated during building design will be subject to automatic removal.";  
     }
     if (alertUsedFor == "publicAccessURL") {    
       alertMessage = const_var.alertPubliMessage;  
     }
     if (alertUsedFor == "ManageKlinkExpire") {    
       alertMessage = const_var.alertExpireMessage;  
     }
     if (alertUsedFor == "ManageKlinkMessage") {    
       alertMessage = "Please be aware that updating the Quote will invalidate the current K-link. Generating a new one will be necessary for sharing.";  
     }
     if (alertUsedFor == "REMOVEPOSITIONCOMPONENT") {
        alertMessage = "Do you really want to delete lean-to's.";  
      } 
     if (alertUsedFor == "showOverheadOldQuoteOrderMsg") {    
        alertMessage = "This manufacturer's prices have been updated, we request you to please check this building's total before updating.";  
      }
    if (alertUsedFor == "noSpaceToAddCupola") {    
       alertMessage = "There is no space to add Cupola.";  
     }
    if (alertUsedFor == "noSpaceToUpdateCupola") {    
       alertMessage = "There is no space to update cupola with selected size.";  
     }
    if (alertUsedFor == "removeCupola") {    
       alertMessage = "Do you really want to remove this Cupola?";  
     }
    if (alertUsedFor == "FULLYENCLOSED") {    
      alertMessage = "If you add Fully Enclosed, all your selections in the Custom Walls will be set to default. Click Done if you still want to continue.";  
    }if (alertUsedFor == "ADDUTILITY") {
      alertMessage = "If you add Utility Storage, all your selections in the Custom Walls will be set to default. Click Done if you still want to continue.";  
    }
    if (alertUsedFor == "captuareIMG") {
      alertMessage = "Psst!! You can only click 5 photos. Please consider removing the OKish photo to click another best one.Thank You";  
    }
    if (alertUsedFor == "CancelOrderQuote") {
       if(const_var.crmSetting.is_module_name == "inventory"){
          alertMessage = "Resetting will clear all your current designs. Please confirm if you want to proceed.";  
       }
       else{
          alertMessage = "Resetting will clear all your current designs. Please confirm if you want to proceed.";  
       }
    }  
    if (alertUsedFor =="customBuildings") {
       alertMessage = "This action will reset your building modifications. Do you want to proceed?";       
    }
     if (alertUsedFor == "REMOVECOMPONENT") {
     alertMessage = "Do you really want to delete this component.";  
    }  if (alertUsedFor == "noSpaceAvailableOnWall") {
      alertMessage = "There is no space available on this wall for more components. Please change the wall or increase the size of this wall.";  
    } if (alertUsedFor == "overHeightLeanTo") {
        alertMessage = "Component height is grater than lean height. Please increase the height of this lean.";
    } if (alertUsedFor == "NoMoreGarageDoorsCanBeAdded") {
      alertMessage = "No more garage doors can be added with selected dimensions.";  
     }  if (alertUsedFor == "NoMoreWalkInDoorsCanBeAdded") {
      alertMessage = "No more walk-in doors can be added with selected dimensions. Please increase the width/length/height to add this Walk-in Door";  
     }  if (alertUsedFor == "YourCanNotAddLeanTo") {
      alertMessage = "You can not add lean-to with selected height";  
     }if (alertUsedFor == "YourCanNotAddPorch") {
       alertMessage = "Please ensure that lean-tos are affixed to the corners of the adjoining walls in order to add a wrap-around porch.";  
      } if (alertUsedFor == "YourCanNotChangePorch") {
       alertMessage = "Modifying the building size will result in the removal of the wrap-around and disconnection of lean-tos.";  
      }if (alertUsedFor == "YourCanNotAlignPorch") {
       alertMessage = "Changing the lean-to's alignment will remove the wrap-around and disconnect the lean-tos.";  
      }if (alertUsedFor == "YouCanNotAddPorch") {
       alertMessage = "Please ensure that lean-tos are affixed to the corners of the adjoining walls in order to add a wrap-around porch.";  
      }
     if (alertUsedFor == "addComponentOnWall") {
      alertMessage = "Oops!! Did you forget to add a door to your fully enclosed building? Please see the doors and windows tab given under options panel and proceed with ordering";  
     }if (alertUsedFor == "RoofPitchAction") {
      alertMessage = "You can't add this roof pitch with selected dimensions";  
     }if (alertUsedFor == "onSubmitLoginApiErrorhandling") {
      alertMessage = const_var.loginErrorHandlingMessage;  
     }if (alertUsedFor == "RoofStyleLength") {
       alertMessage = "You can't change this roof style with selected dimensions";
     }if (alertUsedFor == "RegularRoofStyle") {
       alertMessage = "Vertical Panels can't be added with Regular roof style. Please change your roof style to A-frame or Vertical  to add these panels vertically.";
     }if (alertUsedFor == "regularRoofStyleHeight") {
       alertMessage = "You cannot change to this roof style by the selected height. Please try changing the height.";
     }if (alertUsedFor == "nonVerticalRoofStyleForTubulerBuildingMnf") {
       alertMessage = "Changing the roof style will lead to the removal of End Lean To's.";
     } if (alertUsedFor == "endLeantosForTubulerBuildingMnf") {
       alertMessage = "Please select the Vertical Roof Style for your building to add End Lean Tos.";
     }if (alertUsedFor == "endLeantoPorchessForTubulerBuildingMnf") {
       alertMessage = "You cannot add Wrap-Around, As vertical roof style is not Selected";
    
     }if (alertUsedFor == "clearComponent") {
       alertMessage = "This action will clear all the building components. Do you want to proceed?";
     }
    //   if (alertUsedFor == "overHeightComponent") {
    //    alertMessage = "Component height is greater than building height. Please increase the height of the building or decrease the height of the component.";
    // }
    
     if(alertMessage =="" && const_var.stripeErrorHandlingMessage!="")
     {
        alertMessage = const_var.stripeErrorHandlingMessage;
     }


    return alertMessage
}