import React,{Component} from 'react'
import * as THREE from "three";
import reflection from '../../assets/images/imgTextures/buildingImages/LIGHT-GREY.jpg';
import refpx from '../../assets/images/imgTextures/buildingImages/refpx.png';
import refnx from '../../assets/images/imgTextures/buildingImages/refnx.png';
import refpy from '../../assets/images/imgTextures/buildingImages/refpy.png';
import refny from '../../assets/images/imgTextures/buildingImages/refny.png';
import refpz from '../../assets/images/imgTextures/buildingImages/refpz.png';
import refnz from '../../assets/images/imgTextures/buildingImages/refnz.png';
const baseUrl = process.env.REACT_APP_BASE_URL;
export default class RightLeanToLegs extends Component {

    addRightLeanToLegs = (const_var,params) => {
    //scale of lean to regular leg according to hight
    let scaleLegR = {"6":0.23, "7":0.28,"8":0.34,"9":0.40,"10":0.45,"11":0.5,"12":0.55,"13":0.6};
    let leanToLeg = params.p_w / 2 + params.leanR_p_w;

    const loader = new THREE.CubeTextureLoader();
    loader.setPath(`${baseUrl}${reflection}`);
    
    const textureCube = new THREE.CubeTextureLoader().load([ 
        `${baseUrl}${refpx}`,`${baseUrl}${refnx}`,`${baseUrl}${refpy}`,
        `${baseUrl}${refny}`,`${baseUrl}${refpz}`,`${baseUrl}${refnz}`,
    ]);
    textureCube.mapping = THREE.CubeReflectionMapping
    // const leanToRightlegMaterial = new THREE.MeshPhongMaterial({ color: 0xfbfbfb, envMap: textureCube,
    //  reflectivity:0.2,
    //  refractionRatio:1 ,
    
    // });
    const leanToRightlegMaterial = new THREE.MeshBasicMaterial({ color: 0xfbfbfb, envMap: textureCube,
        reflectivity:0.2,
        refractionRatio:1 ,
       
       });
    const texture222 = new THREE.TextureLoader().load(`${baseUrl}${reflection}`)
    leanToRightlegMaterial.map = texture222

    //Right Lean To Right Front Leg
    let leanToRightlegGeo = new THREE.BoxGeometry(0.31+0.1, 1, 0.2+0.1);
    // let leanToRightlegMaterial = new THREE.MeshBasicMaterial({color: 0xc9c6c6,side: THREE.DoubleSide});
    let leanTorightFrontLeg = new THREE.Mesh(leanToRightlegGeo,leanToRightlegMaterial);
    leanTorightFrontLeg.name = "leanTorightFrontLeg";
    leanTorightFrontLeg.scale.set(0.5, params.leanR_p_h, 1);
    leanTorightFrontLeg.position.set(leanToLeg - 0.08,params.leanR_p_h / 2,params.leanR_p_d / 2 - 0.12);
    leanTorightFrontLeg.visible = (params.p_r_s != "1")?true:false;
    leanTorightFrontLeg.visible = false;
    const_var.b_t_M_R_t_R.add(leanTorightFrontLeg);

    //regular leg anand
    let leanToRightFrontlegGeoR = new THREE.BoxGeometry(0.31+0.1, 1, 0.2+0.1);
    // let leanToRightFrontlegMaterialR = new THREE.MeshBasicMaterial({ color: 0xc9c6c6,side: THREE.DoubleSide});
    let leanToRightFrontLegR = new THREE.Mesh(leanToRightFrontlegGeoR,leanToRightlegMaterial);
    leanToRightFrontLegR.name = "leanToRightFrontLegR";
    leanToRightFrontLegR.material = leanToRightFrontLegR.material.clone();
    leanToRightFrontLegR.scale.set(0.5, params.leanR_p_h + scaleLegR[params.leanR_p_h], 1);
    leanToRightFrontLegR.position.set(leanToLeg - 0.08,(params.leanR_p_h / 2)-0.1,params.leanR_p_d / 2 - 0.12);
    leanToRightFrontLegR.visible = (params.p_r_s == "1")?true:false;
    leanToRightFrontLegR.visible = false;
    const_var.b_t_M_R_t_R.add(leanToRightFrontLegR);

    //Right Leanto TO Right Base Rail For Legs
	let rightLeantoBaseRail = new THREE.Mesh(leanToRightlegGeo,leanToRightlegMaterial);
	rightLeantoBaseRail.name = "rightLeantoBaseRail";
    rightLeantoBaseRail.scale.set(0.5,params.leanR_p_d - 0.02,1);
	rightLeantoBaseRail.position.set((params.leanR_p_w+ (params.p_w/2))-0.08,0,0);
	rightLeantoBaseRail.rotation.x=Math.PI/-2;
    rightLeantoBaseRail.visible = params.add_right_lean;
	const_var.b_t_M_R_t_R.add(rightLeantoBaseRail);

      //regular leg anand
      let leanToRightFrontWallTrimGeo = new THREE.BoxGeometry(0.31+0.1, 1, 0.2+0.1);
      let leanToRightFrontWallTrimMaterial = new THREE.MeshBasicMaterial({ color: 0x0E6655,side: THREE.DoubleSide});
      let leanToRightFrontWallTrim = new THREE.Mesh(leanToRightFrontWallTrimGeo,leanToRightFrontWallTrimMaterial);
      leanToRightFrontWallTrim.name = "leanToRightFrontWallTrim";
      leanToRightFrontWallTrim.visible = false; ;
      const_var.b_t_M_R_t_R.add(leanToRightFrontWallTrim)
       //regular leg anand

       let leanToRightFRightWallTrim = new THREE.Mesh(leanToRightFrontWallTrimGeo,leanToRightFrontWallTrimMaterial);
      leanToRightFRightWallTrim.name = "leanToRightFRightWallTrim";
      leanToRightFRightWallTrim.visible = false; ;
      const_var.b_t_M_R_t_R.add(leanToRightFRightWallTrim)
   
    }
    render() {
        return <div ref={ref => (this.mount = ref)} />;
     }    
}     