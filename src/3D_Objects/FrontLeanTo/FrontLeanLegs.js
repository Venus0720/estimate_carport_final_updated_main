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


export default class FrontLeanToLegs extends Component {

    addFrontLeanToLegs = (const_var,params) => {
        //scale of lean to regular leg according to hight
	    let scaleLegR = {"6":0.23, "7":0.28,"8":0.34,"9":0.40,"10":0.45,"11":0.5,"12":0.55,"13":0.6};
	   
		const loader = new THREE.CubeTextureLoader();
		loader.setPath(`${baseUrl}${reflection}`);
		
		const textureCube = new THREE.CubeTextureLoader().load([ 
		 `${baseUrl}${refpx}`,`${baseUrl}${refnx}`,`${baseUrl}${refpy}`,
		 `${baseUrl}${refny}`,`${baseUrl}${refpz}`,`${baseUrl}${refnz}`,
		]);
		textureCube.mapping = THREE.CubeReflectionMapping
		// const frontLeanTolegMaterial = new THREE.MeshPhongMaterial({ color: 0xfbfbfb, envMap: textureCube,
		//  reflectivity:0.2,
		//  refractionRatio:1 ,
		
		// });
		const frontLeanTolegMaterial = new THREE.MeshBasicMaterial({ color: 0xfbfbfb, envMap: textureCube,
			reflectivity:0.2,
			refractionRatio:1 ,
		   
		   });
		const texture222 = new THREE.TextureLoader().load(`${baseUrl}${reflection}`)
		frontLeanTolegMaterial.map = texture222
            
        let leanToLeg = params.p_d /-2 - params.leanF_p_w;          
        //Left Lean To Left Front Leg
	    let frontLeanTolegGeo = new THREE.BoxGeometry(0.31+0.1, 1, 0.2+0.1);
	    // let frontLeanTolegMaterial = new THREE.MeshBasicMaterial({ color: 0xc9c6c6,side: THREE.DoubleSide,});
	    let frontLeanToFrontLeg = new THREE.Mesh(frontLeanTolegGeo,frontLeanTolegMaterial);
	    frontLeanToFrontLeg.name = "frontLeanToFrontLeg";
	    frontLeanToFrontLeg.scale.set(0.5, params.leanF_p_h, 1);
	    frontLeanToFrontLeg.position.set(leanToLeg + 0.08,params.leanF_p_h / 2,params.leanF_p_d / 2 - 0.12);
	    frontLeanToFrontLeg.visible = (params.p_r_s != "1")?true:false;
	    frontLeanToFrontLeg.visible = false;
	    const_var.b_t_M_F_t_F.add(frontLeanToFrontLeg);

	    //regular leg anand
	    let leanToleftFrontlegGeoR = new THREE.BoxGeometry(0.31+0.1, 1, 0.2+0.1);
	    // let leanToleftFrontlegMaterialR = new THREE.MeshBasicMaterial({ color: 0xc9c6c6,side: THREE.DoubleSide});
	    let frontLeanToFrontLegR = new THREE.Mesh(leanToleftFrontlegGeoR,frontLeanTolegMaterial);
	    frontLeanToFrontLegR.name = "frontLeanToFrontLegR";
		frontLeanToFrontLegR.material = frontLeanToFrontLegR.material.clone();
	    frontLeanToFrontLegR.scale.set(0.5, params.leanF_p_h + scaleLegR[params.leanF_p_h], 1);
	    frontLeanToFrontLegR.position.set(leanToLeg + 0.08,(params.leanF_p_h / 2)-0.1,params.leanF_p_d / 2 - 0.12);
	    frontLeanToFrontLegR.visible = (params.p_r_s == "1")?true:false;
	    frontLeanToFrontLegR.visible = false;
	    const_var.b_t_M_F_t_F.add(frontLeanToFrontLegR);


	    //regular leg anand
	    let frontLeanToRightWallTrimGeo = new THREE.BoxGeometry(0.31+0.1, 1, 0.2+0.1);
	    let frontLeanToRightWallTrimMaterial = new THREE.MeshBasicMaterial({ color: 0x0E6655,side: THREE.DoubleSide});
	    let frontLeanToRightWallTrim = new THREE.Mesh(frontLeanToRightWallTrimGeo,frontLeanToRightWallTrimMaterial);
	    frontLeanToRightWallTrim.name = "frontLeanToRightWallTrim";
	    frontLeanToRightWallTrim.visible = false;
	    const_var.b_t_M_F_t_F.add(frontLeanToRightWallTrim);
	    //regular leg anand

		let frontLeanToRFrontWallTrim = new THREE.Mesh(frontLeanToRightWallTrimGeo,frontLeanToRightWallTrimMaterial);
	    frontLeanToRFrontWallTrim.name = "frontLeanToRFrontWallTrim";
		frontLeanToRFrontWallTrim.visible = false;
	    const_var.b_t_M_F_t_F.add(frontLeanToRFrontWallTrim);

        //Left Leanto Base Rail For Left Legs
	    let frontLeantoBaseRail = new THREE.Mesh(frontLeanTolegGeo,frontLeanTolegMaterial);
	    frontLeantoBaseRail.name = "frontLeantoBaseRail";
		frontLeantoBaseRail.material = frontLeantoBaseRail.material.clone();
	    frontLeantoBaseRail.scale.set(0.5,params.leanF_p_d - 0.02,1);
	    frontLeantoBaseRail.position.set(-(params.leanF_p_w+ (params.p_d/2))+0.08,0,0);
	    frontLeantoBaseRail.rotation.x=Math.PI/-2;
        frontLeantoBaseRail.visible = false;
	    const_var.b_t_M_F_t_F.add(frontLeantoBaseRail);

            const_var.b_t_M_F_t_F.rotation.set(0,Math.PI/2,0);

    
    }

    render() {
        return <div ref={ref => (this.mount = ref)} />;
     }    
}    