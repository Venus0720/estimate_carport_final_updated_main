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

export default class LeftLeanToLegs extends Component {

    addLeftLeanToLegs = (const_var,params) => {

        //scale of lean to regular leg according to hight
        const scaleLegR = {"6":0.23, "7":0.28,"8":0.34,"9":0.40,"10":0.45,"11":0.5,"12":0.55,"13":0.6};
        const leanToLeg = params.p_w / -2 - params.lean_p_w;

        const loader = new THREE.CubeTextureLoader();
        loader.setPath(`${baseUrl}${reflection}`);
        
        const textureCube = new THREE.CubeTextureLoader().load([ 
          `${baseUrl}${refpx}`,`${baseUrl}${refnx}`,`${baseUrl}${refpy}`,
          `${baseUrl}${refny}`,`${baseUrl}${refpz}`,`${baseUrl}${refnz}`,
        ]);
        textureCube.mapping = THREE.CubeReflectionMapping
        // const leanToleftlegMaterial = new THREE.MeshPhongMaterial({ color: 0xfbfbfb, envMap: textureCube,
        //  reflectivity:0.2,
        //  refractionRatio:1 ,
        
        // });
        const leanToleftlegMaterial = new THREE.MeshBasicMaterial({ color: 0xfbfbfb, envMap: textureCube,
          reflectivity:0.2,
          refractionRatio:1 ,
         
         });
        const texture222 = new THREE.TextureLoader().load(`${baseUrl}${reflection}`)
        leanToleftlegMaterial.map = texture222

        //Left Lean To Left Front Leg
        const leanToleftlegGeo = new THREE.BoxGeometry(0.31+0.1, 1, 0.2+0.1);
        // const leanToleftlegMaterial = new THREE.MeshBasicMaterial({ color: 0xc9c6c6,side: THREE.DoubleSide,});
        const leanToleftFrontLeg = new THREE.Mesh(leanToleftlegGeo,leanToleftlegMaterial);
        leanToleftFrontLeg.name = "leftLeanToLeg";
        leanToleftFrontLeg.scale.set(0.5, params.lean_p_h, 1);
        leanToleftFrontLeg.position.set(leanToLeg + 0.08,params.lean_p_h / 2,params.lean_p_d / 2 - 0.12);
        leanToleftFrontLeg.visible = false;
        const_var.b_t_M_L_t_L.add(leanToleftFrontLeg);

        // Left Lean To Left Front regular leg anand
        const leanToleftFrontlegGeoR = new THREE.BoxGeometry(0.31+0.1, 1, 0.2+0.1);
        // const leanToleftFrontlegMaterialR = new THREE.MeshBasicMaterial({ color: 0xc9c6c6,side: THREE.DoubleSide});
        const leanToleftFrontLegR = new THREE.Mesh(leanToleftFrontlegGeoR,leanToleftlegMaterial);
        leanToleftFrontLegR.name = "leftLeanToRLeg";
        leanToleftFrontLegR.scale.set(0.5, params.lean_p_h + scaleLegR[params.lean_p_h], 1);
        leanToleftFrontLegR.position.set(leanToLeg + 0.08,(params.lean_p_h / 2)-0.1,params.lean_p_d / 2 - 0.12);
        leanToleftFrontLegR.visible = false;
        const_var.b_t_M_L_t_L.add(leanToleftFrontLegR);

        //Left Leanto Base Rail For Left Legs
        const leanToleftBaseGeo = new THREE.BoxGeometry(0.31+0.1, 1, 0.2+0.1);
        // const leanToleftBaseMaterial = new THREE.MeshBasicMaterial({ color: 0xc9c6c6,side: THREE.DoubleSide,});
        const leftLeantoBaseRail = new THREE.Mesh(leanToleftBaseGeo,leanToleftlegMaterial);
        leftLeantoBaseRail.name = "leftLeantoBaseRail";
        leftLeantoBaseRail.material = leftLeantoBaseRail.material.clone();
        leftLeantoBaseRail.scale.set(0.5,params.lean_p_d - 0.02,1);
        leftLeantoBaseRail.position.set(-(params.lean_p_w+ (params.p_w/2))+0.08,0,0);
        leftLeantoBaseRail.rotation.x=Math.PI/-2;
        leftLeantoBaseRail.visible =false;
        const_var.b_t_M_L_t_L.add(leftLeantoBaseRail);

        // left leanTo Front regular Leg Trim anand
        let leanToleftTrimGeo = new THREE.BoxGeometry(0.31+0.1, 1, 0.2+0.1);
        let leanToleftTrimMaterial = new THREE.MeshBasicMaterial({ color: 0x0E6655,side: THREE.DoubleSide});
        let leanToleftFrontWallTrim = new THREE.Mesh(leanToleftTrimGeo,leanToleftTrimMaterial);
        leanToleftFrontWallTrim.name = "leanToleftFrontWallTrim";
        leanToleftFrontWallTrim.visible =false;
        const_var.b_t_M_L_t_L.add(leanToleftFrontWallTrim);

        let leanToleftFLeftWallTrim = new THREE.Mesh(leanToleftTrimGeo,leanToleftTrimMaterial);
        leanToleftFLeftWallTrim.name = "leanToleftFLeftWallTrim";
        leanToleftFLeftWallTrim.visible =false;
        const_var.b_t_M_L_t_L.add(leanToleftFLeftWallTrim);


    }
  render() {
    return <div ref={ref => (this.mount = ref)} />;
 }    
}     