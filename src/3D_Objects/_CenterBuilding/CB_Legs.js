import React, { Component } from 'react'
import * as THREE from "three";
import reflection from '../../assets/images/imgTextures/buildingImages/LIGHT-GREY.jpg';
import refpx from '../../assets/images/imgTextures/buildingImages/refpx.png';
import refnx from '../../assets/images/imgTextures/buildingImages/refnx.png';
import refpy from '../../assets/images/imgTextures/buildingImages/refpy.png';
import refny from '../../assets/images/imgTextures/buildingImages/refny.png';
import refpz from '../../assets/images/imgTextures/buildingImages/refpz.png';
import refnz from '../../assets/images/imgTextures/buildingImages/refnz.png';
const baseUrl = process.env.REACT_APP_BASE_URL;


export default class BuildingLegs extends Component {

	addLegsIntoBuilding = (const_var, params) => {

		let f_S_LeanLegScale = {
			"1": { "6": 0.000, "7": 0.050, "8": 0.10, "9": 0.100, "10": 0.100, "11": 0.100, "12": 0.00, "13": 0.00, "14": 0.10, "15": 0.15, "16": 0.20, "17": 0.20, "18": 0.20, "19": 0.20, "20": 0.20, "21": 0.20, "22": 0.20, "23": 0.20, "24": 0.20, "25": 0.20, "26": 0.20, "27": 0.20, "28": 0.20, "29": 0.20, "30": 0.20, },
			"2": { "6": 0.83, "7": 0.95, "8": 1.1, "9": 1.3, "10": 1.3, "11": 1.6, "12": 1.9, "13": 2.0, "14": 2.2, "15": 2.4, "16": 2.6, "17": 2.9, "18": 2.9, "19": 3.1, "20": 3.2, "21": 3.33, "22": 3.65, "23": 3.9, "24": 4.05, "25": 2.9, "26": 2.9, "27": 2.9, "28": 2.9, "29": 2.9, "30": 2.9, },
			"3": { "6": 1.40, "7": 1.70, "8": 2.06, "9": 2.24, "10": 2.60, "11": 2.78, "12": 3.10, "13": 3.20, "14": 3.50, "15": 3.70, "16": 4.02, "17": 4.25, "18": 4.30, "19": 4.60, "20": 4.90, "21": 5.20, "22": 5.55, "23": 5.65, "24": 5.95, "25": 0.55, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, },
			"4": { "6": 0.175, "7": 0.200, "8": 0.25, "9": 0.300, "10": 0.350, "11": 0.375, "12": 0.35, "13": 0.35, "14": 0.40, "15": 0.45, "16": 0.50, "17": 0.55, "18": 0.60, "19": 0.65, "20": 0.70, "21": 0.70, "22": 0.75, "23": 0.75, "24": 0.80, "25": 0.85, "26": 0.85, "27": 0.90, "28": 0.95, "29": 1.00, "30": 1.05, },
			"5": { "6": 0.250, "7": 0.300, "8": 0.35, "9": 0.425, "10": 0.475, "11": 0.525, "12": 0.50, "13": 0.55, "14": 0.60, "15": 0.65, "16": 0.70, "17": 0.75, "18": 0.85, "19": 0.90, "20": 0.95, "21": 1.00, "22": 1.05, "23": 1.10, "24": 1.15, "25": 1.20, "26": 1.25, "27": 1.30, "28": 1.35, "29": 1.40, "30": 1.45, },
			"6": { "6": 0.350, "7": 0.450, "8": 0.50, "9": 0.575, "10": 0.650, "11": 0.700, "12": 0.70, "13": 0.80, "14": 0.90, "15": 0.95, "16": 1.00, "17": 1.05, "18": 1.15, "19": 1.20, "20": 1.30, "21": 1.35, "22": 1.40, "23": 1.50, "24": 1.60, "25": 1.65, "26": 1.70, "27": 1.75, "28": 1.85, "29": 1.90, "30": 2.00, },
		};
		let f_S_LeanLegHeight = {
			"1": { "6": 0.000, "7": 0.050, "8": 0.10, "9": 0.100, "10": 0.100, "11": 0.100, "12": 0.00, "13": 0.00, "14": 0.10, "15": 0.15, "16": 0.20, "17": 0.20, "18": 0.20, "19": 0.20, "20": 0.20, "21": 0.20, "22": 0.20, "23": 0.20, "24": 0.20, "25": 0.20, "26": 0.20, "27": 0.20, "28": 0.20, "29": 0.20, "30": 0.20, },
			"2": { "6": 0.47, "7": 0.50, "8": 0.60, "9": 0.70, "10": 0.88, "11": 0.90, "12": 0.98, "13": 1.10, "14": 1.15, "15": 1.20, "16": 1.25, "17": 1.32, "18": 1.40, "19": 1.55, "20": 1.63, "21": 1.72, "22": 1.75, "23": 1.80, "24": 1.90, "25": 1.4, "26": 0.30, "27": 0.30, "28": 0.35, "29": 0.35, "30": 0.40, },
			"3": { "6": 0.70, "7": 0.80, "8": 0.85, "9": 1.00, "10": 1.10, "11": 1.25, "12": 1.35, "13": 1.45, "14": 1.65, "15": 1.80, "16": 1.90, "17": 2.00, "18": 2.20, "19": 2.30, "20": 2.40, "21": 2.52, "22": 2.64, "23": 2.80, "24": 2.90, "25": 0.55, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, },
			"4": { "6": 0.175, "7": 0.200, "8": 0.25, "9": 0.300, "10": 0.350, "11": 0.375, "12": 0.35, "13": 0.35, "14": 0.40, "15": 0.45, "16": 0.50, "17": 0.55, "18": 0.60, "19": 0.65, "20": 0.70, "21": 0.70, "22": 0.75, "23": 0.75, "24": 0.80, "25": 0.85, "26": 0.85, "27": 0.90, "28": 0.95, "29": 1.00, "30": 1.05, },
			"5": { "6": 0.250, "7": 0.300, "8": 0.35, "9": 0.425, "10": 0.475, "11": 0.525, "12": 0.50, "13": 0.55, "14": 0.60, "15": 0.65, "16": 0.70, "17": 0.75, "18": 0.85, "19": 0.90, "20": 0.95, "21": 1.00, "22": 1.05, "23": 1.10, "24": 1.15, "25": 1.20, "26": 1.25, "27": 1.30, "28": 1.35, "29": 1.40, "30": 1.45, },
			"6": { "6": 0.350, "7": 0.45, "8": 0.50, "9": 0.575, "10": 0.650, "11": 0.700, "12": 0.70, "13": 0.80, "14": 0.90, "15": 0.95, "16": 1.00, "17": 1.05, "18": 1.15, "19": 1.20, "20": 1.30, "21": 1.35, "22": 1.40, "23": 1.50, "24": 1.60, "25": 1.65, "26": 1.70, "27": 1.75, "28": 1.85, "29": 1.90, "30": 2.00, },
		};

		const_var.b_t_M_R.visible = (params.singleSlope == true) ? false : true;

		//Center Building Left Front Leg 
		let legGeo = new THREE.BoxGeometry(0.31 + 0.1, 1, 0.15 + 0.15);
		// let legMaterial = new THREE.MeshBasicMaterial({color:0xB3B3B3,side:THREE.DoubleSide});

		const loader = new THREE.CubeTextureLoader();
		// loader.setPath(reflection);
		loader.setPath(`${baseUrl}${reflection}`);

		const textureCube = new THREE.CubeTextureLoader().load([
			`${baseUrl}${refpx}`,`${baseUrl}${refnx}`,`${baseUrl}${refpy}`,
			`${baseUrl}${refny}`,`${baseUrl}${refpz}`,`${baseUrl}${refnz}`,
		]);
		// refpx, refnx, refpy,
		// refny, refpz, refnz
		textureCube.mapping = THREE.CubeReflectionMapping;
		// const legMaterial = new THREE.MeshPhongMaterial({ color: 0xfbfbfb, envMap: textureCube,
		//  reflectivity:0.2,
		//  refractionRatio:1 ,
		// });
		const legMaterial = new THREE.MeshBasicMaterial({
			color: 0xfbfbfb, envMap: textureCube,
			reflectivity: 0.2, refractionRatio: 1,
		});
		const texture222 = new THREE.TextureLoader().load(`${baseUrl}${reflection}`);
		legMaterial.map = texture222;


		let leftFrontLeg = new THREE.Mesh(legGeo, legMaterial);
		const_var.originalLeg = leftFrontLeg.clone();
		const_var.originalLeg.material = const_var.originalLeg.material.clone();
		leftFrontLeg.name = "leftFrontLeg";

		leftFrontLeg.scale.set(0.5, params.p_h, 1);
		leftFrontLeg.position.set(params.p_w / -2 + 0.08, params.p_h / 2, params.p_d / 2 - 0.12);
		const_var.b_t_M_L.add(leftFrontLeg);

		//connectors for ledder leg
		let legConnectorGeo = new THREE.BoxGeometry(1, 1, 1);
		let legConnector = new THREE.Mesh(legConnectorGeo, legMaterial);
		const_var.originalConnector = legConnector.clone();
		legConnector.name = "legConnector";
		const_var.b_t_M_L.add(legConnector);

		//end cross bracing for leg
		let endCrossBracingGeo = new THREE.BoxGeometry(1, 1, 1);
		let endCrossBracing = new THREE.Mesh(endCrossBracingGeo, legMaterial);
		endCrossBracing.name = "endCrossBracing";
		const_var.b_t_M_L.add(endCrossBracing);

		//Center Building Left Right Leg 
		let rightFrontLeg = new THREE.Mesh(legGeo, legMaterial);
		rightFrontLeg.name = "rightFrontLeg";
		rightFrontLeg.scale.set(0.5, params.p_h, 1);
		rightFrontLeg.position.set(params.p_w / 2 - 0.08, params.p_h / 2, params.p_d / 2 - 0.12);
		const_var.b_t_M_R.add(rightFrontLeg);

		//Center Building Base Rail For Legs
		let leftBaseRail = new THREE.Mesh(legGeo, legMaterial);
		leftBaseRail.name = "leftBaseRail";
		leftBaseRail.scale.set(0.5, params.p_d - 0.02, 1);
		leftBaseRail.position.set(params.p_w / -2 + 0.08, 0.08, 0);
		leftBaseRail.rotation.x = Math.PI / -2;
		const_var.b_t_M_L.add(leftBaseRail);

		//Center Building Right Base Rail For Legs
		let rightBaseRail = new THREE.Mesh(legGeo, legMaterial);
		rightBaseRail.name = "rightBaseRail";
		rightBaseRail.scale.set(0.5, params.p_d - 0.02, 1);
		rightBaseRail.position.set(params.p_w / 2 - 0.08, 0.08, 0);
		rightBaseRail.rotation.x = Math.PI / -2;
		const_var.b_t_M_R.add(rightBaseRail);

		// Free Standing LeanTo Right Leg
		let f_S_LeanRightFrontLeg = new THREE.Mesh(legGeo, legMaterial);
		f_S_LeanRightFrontLeg.name = "f_S_L_R_FrontLeg";
		f_S_LeanRightFrontLeg.scale.set(0.5, params.p_h + f_S_LeanLegScale[params.p_r_p][params.p_w], 1);
		// f_S_LeanRightFrontLeg.position.set(params.p_w/2-f_S_LeanLegPosX[params.p_r_p],params.p_h/2+f_S_LeanLegHeight[params.p_r_p][params.p_w],params.p_d/2-0.12);
		f_S_LeanRightFrontLeg.position.set(params.p_w / 2 - 0.18, params.p_h / 2 + f_S_LeanLegHeight[params.p_r_p][params.p_w], params.p_d / 2 - 0.12);
		f_S_LeanRightFrontLeg.visible = params.singleSlope
		const_var.F_S_L_R.add(f_S_LeanRightFrontLeg);

		// Free Standing LeanTo Right Base Rail For Legs
		let f_S_LeanRightBaseRail = new THREE.Mesh(legGeo, legMaterial);
		f_S_LeanRightBaseRail.name = "f_S_LeanRightBaseRail";
		f_S_LeanRightBaseRail.scale.set(0.5, params.p_d - 0.02, 1);
		f_S_LeanRightBaseRail.position.set(params.p_w / 2 - 0.18, 0, 0);
		f_S_LeanRightBaseRail.visible = (params.singleSlope == true) ? true : false;
		f_S_LeanRightBaseRail.rotation.x = Math.PI / -2;
		const_var.F_S_L_R.add(f_S_LeanRightBaseRail);

		const_var.b_t_M_R.visible = (params.singleSlope == true) ? false : true;

		let trimGeo = new THREE.BoxGeometry(0.25 + 0.1, 1, 0.2 + 0.1);
		let trimMaterial = new THREE.MeshBasicMaterial({ color: 0x0E6655, side: THREE.DoubleSide });
		let leftLegFrontTrim = new THREE.Mesh(trimGeo, trimMaterial);
		leftLegFrontTrim.name = "leftLegFrontTrim";
		leftLegFrontTrim.visible = false;
		const_var.b_t_M_L.add(leftLegFrontTrim);

		// let leftLegFrontTrimL = new THREE.Mesh(trimGeo,trimMaterial);
		// leftLegFrontTrimL.name = "leftLegFrontTrimL";
		// const_var.b_t_M_L.add(leftLegFrontTrimL);

		// let leftLegBackTrim = new THREE.Mesh(trimGeo,trimMaterial);
		// leftLegBackTrim.name = "leftLegBackTrim";
		// const_var.b_t_M_L.add(leftLegBackTrim);

		// let leftLegBackTrimL = new THREE.Mesh(trimGeo,trimMaterial);
		// leftLegBackTrimL.name = "leftLegBackTrimL";
		// const_var.b_t_M_L.add(leftLegBackTrimL);

		// let rightLegFrontTrim = new THREE.Mesh(trimGeo,trimMaterial);
		// rightLegFrontTrim.name = "rightLegFrontTrim";
		// const_var.b_t_M_L.add(rightLegFrontTrim);

		// //Center Building Right Front Trim for right wall
		// let rightLegFrontTrimR = new THREE.Mesh(trimGeo,trimMaterial);
		// rightLegFrontTrimR.name = "rightLegFrontTrimR";
		// const_var.b_t_M_L.add(rightLegFrontTrimR);

		// //Center Building Right Back Trim
		// let rightLegBackTrim = new THREE.Mesh(trimGeo,trimMaterial);
		// rightLegBackTrim.name = "rightLegBackTrim";
		// const_var.b_t_M_L.add(rightLegBackTrim);

		// //Center Building Right Back Trim for right wall
		// let rightLegBackTrimR = new THREE.Mesh(trimGeo,trimMaterial);
		// rightLegBackTrimR.name = "rightLegBackTrimR";
		// const_var.b_t_M_L.add(rightLegBackTrimR);



		// /* Free Standing Lean To Right Front Leg Trim */
		// var f_S_L_R_LegFrontTrim = new THREE.Mesh(trimGeo,trimMaterial);
		// f_S_L_R_LegFrontTrim.name = "f_S_L_R_FrontTrimLeg";
		// const_var.b_t_M_L.add(f_S_L_R_LegFrontTrim);

		// /* Free Standing Lean To Right Front Leg Trim for right wall */
		// var f_S_L_R_LegFrontTrimR = new THREE.Mesh(trimGeo,trimMaterial);
		// f_S_L_R_LegFrontTrimR.name = "f_S_L_R_FrontTrimRLeg";
		// const_var.b_t_M_L.add(f_S_L_R_LegFrontTrimR);

		// /* Free Standing Lean To Right Back Leg Trim*/
		// var f_S_L_R_LegBackTrim = new THREE.Mesh(trimGeo,trimMaterial);
		// f_S_L_R_LegBackTrim.name = "f_S_L_R_BackTrimLeg";
		// const_var.b_t_M_L.add(f_S_L_R_LegBackTrim);

		// /* Free Standing Lean To Right Back Leg Trim for right wall */
		// var f_S_L_R_LegBackTrimR = new THREE.Mesh(trimGeo,trimMaterial);
		// f_S_L_R_LegBackTrimR.name = "f_S_L_R_BackTrimRLeg";
		// const_var.b_t_M_L.add(f_S_L_R_LegBackTrimR);

		let channelGeometry = new THREE.BoxGeometry(1, 1, 1);
		let leftChannel = new THREE.Mesh(channelGeometry, legMaterial);
		const_var.originalChannel = leftChannel.clone();
		leftChannel.name = "leftChannel";
		leftChannel.visible = false;
		const_var.b_t_M_L.add(leftChannel);

		let zigZagConnectorGeo = new THREE.BoxGeometry(1, 1, 1);
		let zigZagConnector = new THREE.Mesh(zigZagConnectorGeo, legMaterial);
		zigZagConnector.name = "zigZagConnector";
		const_var.b_t_M_L.add(zigZagConnector);
		
	}
	render() {
		return <div ref={ref => (this.mount = ref)} />;
	}
}     