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


export default class BackLeanToLegs extends Component {

    addBackLeanToLegs = (const_var,params) => {
        //scale of lean to regular leg according to hight
	    let scaleLegR = {"6":0.23, "7":0.28,"8":0.34,"9":0.40,"10":0.45,"11":0.5,"12":0.55,"13":0.6};
        var leanToLeg = params.p_d /-2 - params.leanB_p_w;

        const loader = new THREE.CubeTextureLoader();
		loader.setPath(`${baseUrl}${reflection}`);
		
		const textureCube = new THREE.CubeTextureLoader().load([ 
         `${baseUrl}${refpx}`,`${baseUrl}${refnx}`,`${baseUrl}${refpy}`,
		 `${baseUrl}${refny}`,`${baseUrl}${refpz}`,`${baseUrl}${refnz}`,
		]);
		textureCube.mapping = THREE.CubeReflectionMapping
		// const backLeanTolegMaterial = new THREE.MeshPhongMaterial({ color: 0xfbfbfb, envMap: textureCube,
		//  reflectivity:0.2,
		//  refractionRatio:1 ,
		
		// });
        const backLeanTolegMaterial = new THREE.MeshBasicMaterial({ color: 0xfbfbfb, envMap: textureCube,
			reflectivity:0.2,
			refractionRatio:1 ,
		   
		   });
		const texture222 = new THREE.TextureLoader().load(`${baseUrl}${reflection}`)
		backLeanTolegMaterial.map = texture222

        //Back Lean To Right Leg
        var backLeanTolegGeo = new THREE.BoxGeometry(0.31+0.1, 1, 0.2+0.1);
        // var backLeanTolegMaterial = new THREE.MeshBasicMaterial({ color: 0xc9c6c6,side: THREE.DoubleSide,});
        var backLeanToFrontLeg = new THREE.Mesh(backLeanTolegGeo,backLeanTolegMaterial);
        backLeanToFrontLeg.name = "backLeanToFrontLeg";
        backLeanToFrontLeg.scale.set(0.5, params.leanB_p_h, 1);
        backLeanToFrontLeg.position.set(leanToLeg + 0.08,params.leanB_p_h / 2,params.leanB_p_d / 2 - 0.12);
        // backLeanToFrontLeg.visible = (params.p_r_s != "1")?true:false;
        backLeanToFrontLeg.visible = false;
        const_var.b_t_M_B_t_B.add(backLeanToFrontLeg);
        
        //Back Lean To Right regular leg anand
        var leanToleftFrontlegGeoR = new THREE.BoxGeometry(0.31+0.1, 1, 0.2+0.1);
        // var leanToleftFrontlegMaterialR = new THREE.MeshBasicMaterial({ color: 0xc9c6c6,side: THREE.DoubleSide});
        var backLeanToFrontLegR = new THREE.Mesh(leanToleftFrontlegGeoR,backLeanTolegMaterial);
        backLeanToFrontLegR.name = "backLeanToFrontLegR";
        backLeanToFrontLegR.material = backLeanToFrontLegR.material.clone();
        backLeanToFrontLegR.scale.set(0.5, params.leanB_p_h + scaleLegR[params.leanB_p_h], 1);
        backLeanToFrontLegR.position.set(leanToLeg + 0.08,(params.leanB_p_h / 2)-0.1,params.leanB_p_d / 2 - 0.12);
        // backLeanToFrontLegR.visible = (params.p_r_s == "1")?true:false;
        backLeanToFrontLegR.visible =false;
        const_var.b_t_M_B_t_B.add(backLeanToFrontLegR);
        
         //Back Lean To Right Trim acording to right wall
         var backLeanToRightWallTrimGeo = new THREE.BoxGeometry(0.31+0.1, 1, 0.2+0.1);
         var backLeanToRightWallTrimMaterial = new THREE.MeshBasicMaterial({ color: 0x0E6655,side: THREE.DoubleSide});
         var backLeanToRightWallTrim = new THREE.Mesh(backLeanToRightWallTrimGeo,backLeanToRightWallTrimMaterial);
         backLeanToRightWallTrim.name = "backLeanToRightWallTrim";
         backLeanToRightWallTrim.visible =false;
         const_var.b_t_M_B_t_B.add(backLeanToRightWallTrim);

         //Back Lean To Right Trim acording to Front wall
         var backLeanToRFrontWallTrim = new THREE.Mesh(backLeanToRightWallTrimGeo,backLeanToRightWallTrimMaterial);
         backLeanToRFrontWallTrim.name = "backLeanToRFrontWallTrim";
         backLeanToRFrontWallTrim.visible =false;
         const_var.b_t_M_B_t_B.add(backLeanToRFrontWallTrim);
       

        //Back Leanto Base Rail For Legs
        var backLeantoBaseRail = new THREE.Mesh(backLeanTolegGeo,backLeanTolegMaterial);
        backLeantoBaseRail.name = "backLeantoBaseRail";
        backLeantoBaseRail.material = backLeantoBaseRail.material.clone();
        backLeantoBaseRail.visible =false;
        backLeantoBaseRail.scale.set(0.5,params.leanB_p_d - 0.02,1);
        backLeantoBaseRail.position.set(-(params.leanB_p_w+ (params.p_d/2))+0.08,0,0);
        backLeantoBaseRail.rotation.x=Math.PI/-2;
        const_var.b_t_M_B_t_B.add(backLeantoBaseRail);

        const_var.b_t_M_B_t_B.rotation.set(0,Math.PI/-2,0);
        }

    render() {
        return <div ref={ref => (this.mount = ref)} />;
     }    
}    