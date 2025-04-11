import React, { Component } from 'react';
import * as THREE from "three";
import reflection from '../../assets/images/imgTextures/buildingImages/LIGHT-GREY.jpg';
import refpx from '../../assets/images/imgTextures/buildingImages/refpx.png';
import refnx from '../../assets/images/imgTextures/buildingImages/refnx.png';
import refpy from '../../assets/images/imgTextures/buildingImages/refpy.png';
import refny from '../../assets/images/imgTextures/buildingImages/refny.png';
import refpz from '../../assets/images/imgTextures/buildingImages/refpz.png';
import refnz from '../../assets/images/imgTextures/buildingImages/refnz.png'; 

const baseUrl = process.env.REACT_APP_BASE_URL;
export default class LeanToPorchLegs extends Component {

    addLeanToPorchLegs = (const_var,params)=>{

        /*Left Front Lean To Porch Leg*/

        //Left Front Lean To Porch Left Leg
	    let lflPorchLegGeo = new THREE.BoxGeometry(0.31+0.1, 1, 0.2+0.1);
	    // let lflPorchLegMaterial = new THREE.MeshBasicMaterial({ color: 0xc9c6c6,side: THREE.DoubleSide,});

        const loader = new THREE.CubeTextureLoader();
		loader.setPath(`${baseUrl}${reflection}`);
		
		const textureCube = new THREE.CubeTextureLoader().load([ 
			`${baseUrl}${refpx}`,`${baseUrl}${refnx}`,`${baseUrl}${refpy}`,
			`${baseUrl}${refny}`,`${baseUrl}${refpz}`,`${baseUrl}${refnz}`,
		]);
		textureCube.mapping = THREE.CubeReflectionMapping
		// const lflPorchLegMaterial = new THREE.MeshPhongMaterial({ color: 0xfbfbfb, envMap: textureCube,
		//  reflectivity:0.2,
		//  refractionRatio:1 ,
		
		// });
		const lflPorchLegMaterial = new THREE.MeshBasicMaterial({ color: 0xfbfbfb, envMap: textureCube,
			reflectivity:0.2,
			refractionRatio:1 ,
		   
		   });
		const texture222 = new THREE.TextureLoader().load(`${baseUrl}${reflection}`)
		lflPorchLegMaterial.map = texture222
        
	    let lflPorchLeftLeg = new THREE.Mesh(lflPorchLegGeo,lflPorchLegMaterial);
	    lflPorchLeftLeg.name = "lflPorchLeftLeg";
	    lflPorchLeftLeg.visible = false;
	    const_var.L_F_L_P.add(lflPorchLeftLeg);

        //Left Front Lean To Porch Left Corner Leg
        let lflPorchCornerLeg = new THREE.Mesh(lflPorchLegGeo,lflPorchLegMaterial);
        lflPorchCornerLeg.name = "lflPorchCornerLeg";
		lflPorchCornerLeg.visible = false;
        const_var.L_F_L_P.add(lflPorchCornerLeg);
        
        //Left Front Lean To Porch Left Front Leg
        let lflPorchFrontLeg = new THREE.Mesh(lflPorchLegGeo,lflPorchLegMaterial);
        lflPorchFrontLeg.name = "lflPorchFrontLeg";
		lflPorchFrontLeg.visible = false;
        const_var.L_F_L_P.add(lflPorchFrontLeg);	
        
        //Left Front Lean To Porch Left Left BaseRai
	    let lflPorchleftBaseRail = new THREE.Mesh(lflPorchLegGeo,lflPorchLegMaterial);
	    lflPorchleftBaseRail.name = "lflPorchleftBaseRail";
		lflPorchleftBaseRail.visible = false;
	    const_var.L_F_L_P.add(lflPorchleftBaseRail);

        //Left Front Lean To Porch Front BaseRai
	    let lflPorchFrontBaseRail = new THREE.Mesh(lflPorchLegGeo,lflPorchLegMaterial);
	    lflPorchFrontBaseRail.name = "lflPorchFrontBaseRail";
		lflPorchFrontBaseRail.visible = false;
	    const_var.L_F_L_P.add(lflPorchFrontBaseRail);	


        /*Right Front Lean To Porch Leg*/ 

        //Left Front Lean To Porch Right Leg
        let rflPorchRightLeg = new THREE.Mesh(lflPorchLegGeo,lflPorchLegMaterial);
	    rflPorchRightLeg.name = "rflPorchRightLeg";
		rflPorchRightLeg.visible = false;
	    const_var.R_F_L_P.add(rflPorchRightLeg);

        //Left Front Lean To Porch Corner Leg
        let rflPorchCornerLeg = new THREE.Mesh(lflPorchLegGeo,lflPorchLegMaterial);
        rflPorchCornerLeg.name = "rflPorchCornerLeg";
		rflPorchCornerLeg.visible = false;
        const_var.R_F_L_P.add(rflPorchCornerLeg);
        
        //Left Front Lean To Porch Left Front Leg
        let rflPorchFrontLeg = new THREE.Mesh(lflPorchLegGeo,lflPorchLegMaterial);
        rflPorchFrontLeg.name = "rflPorchFrontLeg";
		rflPorchFrontLeg.visible = false;
        const_var.R_F_L_P.add(rflPorchFrontLeg);	
        
        //Left Front Lean To Porch Left Right BaseRai
	    let rflPorchRightBaseRail = new THREE.Mesh(lflPorchLegGeo,lflPorchLegMaterial);
	    rflPorchRightBaseRail.name = "rflPorchRightBaseRail";
		rflPorchRightBaseRail.visible = false;
	    const_var.R_F_L_P.add(rflPorchRightBaseRail);

        //Left Front Lean To Porch Front BaseRai
	    let rflPorchFrontBaseRail = new THREE.Mesh(lflPorchLegGeo,lflPorchLegMaterial);
	    rflPorchFrontBaseRail.name = "rflPorchFrontBaseRail";
		rflPorchFrontBaseRail.visible = false;
	    const_var.R_F_L_P.add(rflPorchFrontBaseRail);	
    }
    
    render() {
        return <div ref={ref => (this.mount = ref)} />;
    }    
}  
