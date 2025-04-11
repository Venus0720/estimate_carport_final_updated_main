import React, { Component } from 'react';
import * as THREE from "three";
import verticalTexture from '../../assets/images/imgTextures/buildingImages/verticalTexture.jpeg';
import horizontalTexture from '../../assets/images/imgTextures/buildingImages/horizantalTexture.jpeg';
import reflection from '../../assets/images/imgTextures/buildingImages/LIGHT-GREY.jpg';
import refpx from '../../assets/images/imgTextures/buildingImages/refpx.png';
import refnx from '../../assets/images/imgTextures/buildingImages/refnx.png';
import refpy from '../../assets/images/imgTextures/buildingImages/refpy.png';
import refny from '../../assets/images/imgTextures/buildingImages/refny.png';
import refpz from '../../assets/images/imgTextures/buildingImages/refpz.png';
import refnz from '../../assets/images/imgTextures/buildingImages/refnz.png';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
const baseUrl = process.env.REACT_APP_BASE_URL;
export default class CenterRoof extends Component {

	createCenterRoof = async(const_var, params) => {


		let roofMiddleHeight = {
			"1": { "6": 0.25, "7": 0.29165, "8": 0.33335, "9": 0.375, "10": 0.41665, "11": 0.45835, "12": 0.5, "13": 0.5417, "14": 0.5833, "15": 0.6250, "16": 0.6667, "17": 0.7083, "18": 0.7500, "19": 0.7917, "20": 0.8333, "21": 0.8750, "22": 0.9167, "23": 0.9583, "24": 1, "25": 1.0417, "26": 1.0833, "27": 1.1250, "28": 1.1667, "29": 1.2083, "30": 1.2500, "31": 1.2917, "32": 1.3333, "33": 1.3750, "34": 1.4167, "35": 1.4583, "36": 1.5000, "37": 1.5417, "38": 1.5833, "39": 1.6250, "40": 1.6667, "41": 1.7083, "42": 1.7500, "43": 1.7917, "44": 1.8333, "45": 1.8750, "46": 1.9167, "47": 1.9583, "48": 2.00, "49": 2.0417, "50": 2.0833, "51": 2.1250, "52": 2.1667, "53": 2.2083, "54": 2.2500, "55": 2.2917, "56": 2.3333, "57": 2.3750, "58": 2.4167, "59": 2.4583, "60": 2.5000, "61": 2.5417, "62": 2.5833, "63": 2.6250, "64": 2.6667, "65": 2.7083, "66": 2.7500, "67": 2.7917, "68": 2.8333, "69": 2.8750, "70": 2.9167, "71": 2.9583, "72": 3.00, "73": 3.0417, "74": 3.0833, "75": 3.1250, "76": 3.1667, "77": 3.2083, "78": 3.2500, "79": 3.2917, "80": 3.3330 },
			"2": { "6": 0.50, "7": 0.58335, "8": 0.66665, "9": 0.750, "10": 0.83335, "11": 0.91665, "12": 1.0, "13": 1.0833, "14": 1.1667, "15": 1.2500, "16": 1.3333, "17": 1.4167, "18": 1.5000, "19": 1.5833, "20": 1.6667, "21": 1.7500, "22": 1.8333, "23": 1.9167, "24": 2, "25": 2.0833, "26": 2.1667, "27": 2.2500, "28": 2.3333, "29": 2.4167, "30": 2.5000, "31": 2.5833, "32": 2.6667, "33": 2.7500, "34": 2.8333, "35": 2.9167, "36": 3.0000, "37": 3.0833, "38": 3.1667, "39": 3.2500, "40": 3.3330, "41": 3.4170, "42": 3.5000, "43": 3.5830, "44": 3.6670, "45": 3.7500, "46": 3.8330, "47": 3.9170, "48": 4.00, "49": 4.0830, "50": 4.1670, "51": 4.2500, "52": 4.3330, "53": 4.4170, "54": 4.5000, "55": 4.5830, "56": 4.6670, "57": 4.7500, "58": 4.8330, "59": 4.9170, "60": 5.0000, "61": 5.0830, "62": 5.1670, "63": 5.2500, "64": 5.3330, "65": 5.4170, "66": 5.5000, "67": 5.5830, "68": 5.6670, "69": 5.7500, "70": 5.8330, "71": 5.9170, "72": 6.00, "73": 6.0830, "74": 6.1670, "75": 6.2500, "76": 6.3330, "77": 6.4170, "78": 6.5000, "79": 6.5830, "80": 6.6670 },
			"3": { "6": 0.75, "7": 0.87500, "8": 1.00000, "9": 1.125, "10": 1.25000, "11": 1.37500, "12": 1.5, "13": 1.6250, "14": 1.7500, "15": 1.8750, "16": 2.0000, "17": 2.1250, "18": 2.2500, "19": 2.3750, "20": 2.5000, "21": 2.6250, "22": 2.7500, "23": 2.8750, "24": 3, "25": 3.1250, "26": 3.2500, "27": 3.3750, "28": 3.5000, "29": 3.6250, "30": 3.7500, "31": 3.8750, "32": 4.0000, "33": 4.1250, "34": 4.2500, "35": 4.3750, "36": 4.5000, "37": 4.6250, "38": 4.7500, "39": 4.8750, "40": 5.0000, "41": 5.1250, "42": 5.2500, "43": 5.3750, "44": 5.5000, "45": 5.6250, "46": 5.7500, "47": 5.8750, "48": 6.00, "49": 6.1250, "50": 6.2500, "51": 6.3750, "52": 6.5000, "53": 6.6250, "54": 6.7500, "55": 6.8750, "56": 7.0000, "57": 7.1250, "58": 7.2500, "59": 7.3750, "60": 7.5000, "61": 7.6250, "62": 7.7500, "63": 7.8750, "64": 8.0000, "65": 8.1250, "66": 8.2500, "67": 8.3750, "68": 8.5000, "69": 8.6250, "70": 8.7500, "71": 8.8750, "72": 9.00, "73": 9.1250, "74": 9.2500, "75": 9.3750, "76": 9.5000, "77": 9.6250, "78": 9.7500, "79": 9.8750, "80": 10.000 },
			"4": { "6": 1.00, "7": 1.16665, "8": 1.33335, "9": 1.500, "10": 1.66650, "11": 1.83350, "12": 2.0, "13": 2.1667, "14": 2.3333, "15": 2.5000, "16": 2.6667, "17": 2.8333, "18": 3.0000, "19": 3.1667, "20": 3.3330, "21": 3.5000, "22": 3.6670, "23": 3.8330, "24": 4, "25": 4.1670, "26": 4.3330, "27": 4.5000, "28": 4.6670, "29": 4.8330, "30": 5.0000, "31": 5.1670, "32": 5.3330, "33": 5.5000, "34": 5.6670, "35": 5.8330, "36": 6.0000, "37": 6.1670, "38": 6.3330, "39": 6.5000, "40": 6.6670, "41": 6.8330, "42": 7.0000, "43": 7.1670, "44": 7.3330, "45": 7.5000, "46": 7.6670, "47": 7.8330, "48": 8.00, "49": 8.1670, "50": 8.3330, "51": 8.5000, "52": 8.6670, "53": 8.8330, "54": 9.0000, "55": 9.1670, "56": 9.3330, "57": 9.5000, "58": 9.6670, "59": 9.8330, "60": 10.000, "61": 10.167, "62": 10.333, "63": 10.500, "64": 10.667, "65": 10.833, "66": 11.000, "67": 11.167, "68": 11.333, "69": 11.500, "70": 11.667, "71": 11.833, "72": 12.0, "73": 12.167, "74": 12.333, "75": 12.500, "76": 12.667, "77": 12.833, "78": 13.000, "79": 13.167, "80": 13.333 },
			"5": { "6": 1.25, "7": 1.45835, "8": 1.66650, "9": 1.875, "10": 2.08350, "11": 2.29150, "12": 2.5, "13": 2.7083, "14": 2.9167, "15": 3.1250, "16": 3.3330, "17": 3.5420, "18": 3.7500, "19": 3.9580, "20": 4.1670, "21": 4.3750, "22": 4.5830, "23": 4.7920, "24": 5, "25": 5.2080, "26": 5.4170, "27": 5.6250, "28": 5.8330, "29": 6.0420, "30": 6.2500, "31": 6.4580, "32": 6.6670, "33": 6.8750, "34": 7.0830, "35": 7.2920, "36": 7.5000, "37": 7.7080, "38": 7.9170, "39": 8.1250, "40": 8.3330, "41": 8.5420, "42": 8.7500, "43": 8.9580, "44": 9.1670, "45": 9.3750, "46": 9.5830, "47": 9.7920, "48": 10.0, "49": 10.208, "50": 10.417, "51": 10.625, "52": 10.833, "53": 11.042, "54": 11.250, "55": 11.458, "56": 11.667, "57": 11.875, "58": 12.083, "59": 12.292, "60": 12.500, "61": 12.708, "62": 12.917, "63": 13.125, "64": 13.333, "65": 13.542, "66": 13.750, "67": 13.958, "68": 14.167, "69": 14.375, "70": 14.583, "71": 14.792, "72": 15.0, "73": 15.208, "74": 15.417, "75": 15.625, "76": 15.833, "77": 16.042, "78": 16.250, "79": 16.458, "80": 16.667 },
			"6": { "6": 1.50, "7": 1.75000, "8": 2.00000, "9": 2.250, "10": 2.50000, "11": 2.75000, "12": 3.0, "13": 3.2500, "14": 3.5000, "15": 3.7500, "16": 4.0000, "17": 4.2500, "18": 4.5000, "19": 4.7500, "20": 5.0000, "21": 5.2500, "22": 5.5000, "23": 5.7500, "24": 6, "25": 6.2500, "26": 6.5000, "27": 6.7500, "28": 7.0000, "29": 7.2500, "30": 7.5000, "31": 7.7500, "32": 8.0000, "33": 8.2500, "34": 8.5000, "35": 8.7500, "36": 9.0000, "37": 9.2500, "38": 9.5000, "39": 9.7500, "40": 10.000, "41": 10.250, "42": 10.500, "43": 10.750, "44": 11.000, "45": 11.250, "46": 11.500, "47": 11.750, "48": 12.0, "49": 12.250, "50": 12.500, "51": 12.750, "52": 13.000, "53": 13.250, "54": 13.500, "55": 13.750, "56": 14.000, "57": 14.250, "58": 14.500, "59": 14.750, "60": 15.000, "61": 15.250, "62": 15.500, "63": 15.750, "64": 16.000, "65": 16.250, "66": 16.500, "67": 16.750, "68": 17.000, "69": 17.250, "70": 17.500, "71": 17.750, "72": 18.0, "73": 18.250, "74": 18.500, "75": 18.750, "76": 19.000, "77": 19.250, "78": 19.500, "79": 19.750, "80": 20.000 }
		};

		//Center Building Roof
		let quad_vertices =
			[
				-0.5, 0.0, 0.5,
				0.0, 1.0, 0.5,
				0.0, 1.0, -0.5,
				-0.5, 0.0, -0.5,

				0.5, 0.0, 0.5,
				0.0, 1.0, 0.5,
				0.0, 1.0, -0.5,
				0.5, 0.0, -0.5
			];

		let quad_uvs =
			[
				0.0, 0.0,
				1.0, 0.0,
				1.0, 1.0,
				0.0, 1.0,

				0.0, 0.0,
				1.0, 0.0,
				1.0, 1.0,
				0.0, 1.0
			];

		let quad_indices =
			[
				0, 2, 1, 0, 3, 2, 4, 6, 5, 4, 7, 6
			];

		let lrRoofGeometry = new THREE.BufferGeometry();

		let vertices = new Float32Array(quad_vertices);
		// Each vertex has one uv coordinate for texture mapping
		let uvs = new Float32Array(quad_uvs);
		// Use the four vertices to draw the two triangles that make up the square.
		let indices = new Uint32Array(quad_indices)

		// itemSize = 3 because there are 3 values (components) per vertex
		lrRoofGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
		lrRoofGeometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
		lrRoofGeometry.setIndex(new THREE.BufferAttribute(indices, 1));
		lrRoofGeometry.computeVertexNormals();
		let phongMaterial = new THREE.MeshPhongMaterial({
			side: THREE.BackSide, shadowSide: THREE.DoubleSide,
			color: 0xffffff, emissive: 0xffffff, specular: 0xFDF4DC,
			flatShading: true, vertexColors: true, dithering: true,
			combine: 2, shininess: 30,
		});

		let lrRoof = new THREE.Mesh(lrRoofGeometry, phongMaterial);
		lrRoof.name = "lrRoof";
		lrRoof.visible = false;
		const_var.b_t_M_L.add(lrRoof);

		let straightRoofShape = new THREE.Shape();
		straightRoofShape.moveTo(-params.p_w/2 - 0.2, 0);
		straightRoofShape.lineTo(0, (params.p_r_p/12)*params.p_w/2 + 0.05);
		straightRoofShape.lineTo(0,0); 
		straightRoofShape.closePath()
		
		let extrudeSettingsstraightRoof = {
		  steps: 1,
		  depth: params.p_d, // height of the raft
		  bevelEnabled: false, // no bevel on edges
		  };
		
		let straightRoofGeo = new THREE.ExtrudeGeometry( straightRoofShape, extrudeSettingsstraightRoof );
		let roofmaterial = new THREE.MeshPhongMaterial({
		 side: THREE.FrontSide, shadowSide: THREE.DoubleSide,
		 color: 0xffffff, emissive: 0xffffff, specular: 0xFDF4DC,
		 flatShading: true, vertexColors: true, dithering: true,
		 combine: 2, shininess: 10,
		});
		let straightRoof = new THREE.Mesh( straightRoofGeo, roofmaterial ) ;
		straightRoof.name = "straightRoof"
		straightRoof.visible = false; 
		const_var.b_t_M_L.add(straightRoof);

		let double_straightRoofMaterial = new THREE.MeshBasicMaterial({side: THREE.FrontSide, shadowSide: THREE.DoubleSide, });
		let double_straightRoof = new THREE.Mesh( straightRoofGeo, double_straightRoofMaterial ) ;
		double_straightRoof.name = "double_straightRoof"
		double_straightRoof.visible = false; 
		const_var.b_t_M_L.add(double_straightRoof);


		//Canopy roof
		let canopy_vertices =
			[
				0.5, 0.0, 0.5,
				0.0, 1.0, 0.5,
				0.0, 1.0, -0.5,
				0.5, 0.0, -0.5
			];

		let canopy_uvs =
			[
				0.0, 0.0,
				1.0, 0.0,
				1.0, 1.0,
				0.0, 1.0,

			];

		let canopy_indices =
			[
				0, 2, 1, 0, 3, 2
			];

		let canopyGeometry = new THREE.BufferGeometry();

		let cvertices = new Float32Array(canopy_vertices);
		// Each vertex has one uv coordinate for texture mapping
		let cuvs = new Float32Array(canopy_uvs);
		// Use the four vertices to draw the two triangles that make up the square.
		let cindices = new Uint32Array(canopy_indices)

		// itemSize = 3 because there are 3 values (components) per vertex
		canopyGeometry.setAttribute('position', new THREE.BufferAttribute(cvertices, 3));
		canopyGeometry.setAttribute('uv', new THREE.BufferAttribute(cuvs, 2));
		canopyGeometry.setIndex(new THREE.BufferAttribute(cindices, 1));
		canopyGeometry.computeVertexNormals();
		let canopyMaterial = new THREE.MeshPhongMaterial({
			side: THREE.FrontSide, shadowSide: THREE.DoubleSide,
			color: 0xffffff, emissive: 0xffffff, specular: 0xFDF4DC,
			flatShading: true, vertexColors: true, dithering: true,
			combine: 2, shininess: 30,
		});

		let canopyRoof = new THREE.Mesh(canopyGeometry, canopyMaterial);
		canopyRoof.name = "canopyRoof";
		canopyRoof.visible = true;
		const_var.b_t_M_L.add(canopyRoof);

		// //Center Building lrDoubleRoof
		// let Nquad_vertices =
		// [
		// -0.49,  0.0, 0.5,
		// 0.0,  1.0, 0.5,
		// 0.0, 1.0, -0.5,
		// -0.49, 0.0, -0.5,

		// 0.49,  0.0, 0.5,
		// 0.0,  1.0, 0.5,
		// 0.0, 1.0, -0.5,
		// 0.49, 0.0, -0.5
		// ];

		// let quad_uvsN =
		// [
		// 0.0, 0.0,
		// 1.0, 0.0,
		// 1.0, 1.0,
		// 0.0, 1.0,

		// 0.0, 0.0,
		// 1.0, 0.0,
		// 1.0, 1.0,
		// 0.0, 1.0
		// ];

		// let quad_indicesN =
		// [
		// 0, 2, 1, 0, 3, 2, 4, 6, 5, 4, 7, 6
		// ];

		// let lrDoubleRoofGeometry = new THREE.BufferGeometry();

		// let verticesN = new Float32Array( Nquad_vertices );
		// // Each vertex has one uv coordinate for texture mapping
		// let uvsN = new Float32Array( quad_uvsN);
		// // Use the four vertices to draw the two triangles that make up the square.
		// let indicesN = new Uint32Array( quad_indicesN )

		// // itemSize = 3 because there are 3 values (components) per vertex
		// lrDoubleRoofGeometry.setAttribute( 'position', new THREE.BufferAttribute( verticesN, 3 ) );
		// lrDoubleRoofGeometry.setAttribute( 'uv', new THREE.BufferAttribute( uvsN, 2 ) );
		// lrDoubleRoofGeometry.setIndex( new THREE.BufferAttribute( indicesN, 1 ) );
		// var roofImg = verticalTexture;
		// if( params.p_r_s=="3"){
		// 	roofImg = verticalTexture;//"verticalTexture.jpeg";
		// }
		// else {
		// 	roofImg = horizontalTexture;//"horizantalTexture.jpeg";
		// }
		// lrDoubleRoofGeometry.computeVertexNormals();


		//  let phongMaterialN= new THREE.MeshPhongMaterial({ 
		//    side: THREE.DoubleSide,shadowSide:THREE.DoubleSide,
		//    color: 0xD3DEDC,emissive:0xD3DEDC,specular:0xD3DEDC,
		//    
		//    flatShading:true,vertexColors:true,dithering:true,
		//    combine:2,shininess:30,
		//  });

		// let lrDoubleRoof = new THREE.Mesh( lrDoubleRoofGeometry,phongMaterialN);
		// lrDoubleRoof.name = "lrDoubleRoof";
		// lrDoubleRoof.scale.set(params.p_w,params.p_r_p,params.p_d);
		// lrDoubleRoof.position.set(0,params.p_h,0);
		// // lrDoubleRoof.material.color.setHex( rCalor );
		// const_var.b_t_M_L.add( lrDoubleRoof );





		//Center Building Roof ridge cave
		let rcquad_vertices =
			[
				0.0, 1.0, 0.5,
				-0.5, 0.0, 0.5,
				-0.5, 0.0, -0.5,
				0.0, 1.0, -0.5,

				0.5, 0.0, 0.5,
				0.0, 1.0, 0.5,
				0.0, 1.0, -0.5,
				0.5, 0.0, -0.5
			];

		let rcquad_uvs =
			[
				0.0, 0.0,
				1.0, 0.0,
				1.0, 1.0,
				0.0, 1.0,

				0.0, 0.0,
				1.0, 0.0,
				1.0, 1.0,
				0.0, 1.0
			];

		let rcquad_indices =
			[
				0, 2, 1, 0, 3, 2, 4, 6, 5, 4, 7, 6
			];

		let lrRoofRidgeCapGeometry = new THREE.BufferGeometry();

		let rcvertices = new Float32Array(rcquad_vertices);
		// Each vertex has one uv coordinate for texture mapping
		let rcuvs = new Float32Array(rcquad_uvs);
		// Use the four vertices to draw the two triangles that make up the square.
		let rcindices = new Uint32Array(rcquad_indices)

		// itemSize = 3 because there are 3 values (components) per vertex
		lrRoofRidgeCapGeometry.setAttribute('position', new THREE.BufferAttribute(rcvertices, 3));
		lrRoofRidgeCapGeometry.setAttribute('uv', new THREE.BufferAttribute(rcuvs, 2));
		lrRoofRidgeCapGeometry.setIndex(new THREE.BufferAttribute(rcindices, 1));
		var roofImg = verticalTexture;
		if (params.p_r_s == "3") {
			roofImg = verticalTexture;//"verticalTexture.jpeg";
		}
		else {
			roofImg = horizontalTexture;//"horizantalTexture.jpeg";
		}
		lrRoofRidgeCapGeometry.computeVertexNormals();
		var rCalor = params.p_r_c.replace("#", "0x");
		let lrRoofRidgeCapmaterial = new THREE.MeshPhongMaterial(
			{
				side: THREE.DoubleSide, color: 0xCB1202,
				specular: 0xFDF4DC,
				flatShading: true,
				dithering: true,
				combine: 2,
			});

		let rcPhongMaterial = new THREE.MeshPhongMaterial({
			side: THREE.DoubleSide, shadowSide: THREE.DoubleSide,
			color: 0xffffff, emissive: 0xffffff, specular: 0xFDF4DC,

			flatShading: true, vertexColors: true, dithering: true,
			combine: 2, shininess: 30,
		});

		let lrRoofRidgeCap = new THREE.Mesh(lrRoofRidgeCapGeometry, rcPhongMaterial);
		lrRoofRidgeCap.name = "lrRoofRidgeCap";
		lrRoofRidgeCap.scale.set(1, params.p_r_p, params.p_d);
		lrRoofRidgeCap.position.set(0, params.p_h, 0);
		lrRoofRidgeCap.material.color.setHex(rCalor);
		const_var.b_t_M_L.add(lrRoofRidgeCap);

		/*Start Code for center Building Regular Roof*/
		let quad_verticesR =
			[
				-0.5, 0.0, 0.5,
				0.0, 1.0, 0.5,
				0.0, 1.0, -0.5,
				-0.5, 0.0, -0.5,

				0.5, 0.0, 0.5,
				0.0, 1.0, 0.5,
				0.0, 1.0, -0.5,
				0.5, 0.0, -0.5
			];

		let quad_uvsR =
			[
				0.0, 0.0,
				1.0, 0.0,
				1.0, 1.0,
				0.0, 1.0,

				0.0, 0.0,
				1.0, 0.0,
				1.0, 1.0,
				0.0, 1.0
			];

		let quad_indicesR =
			[
				0, 2, 1, 0, 3, 2, 4, 6, 5, 4, 7, 6
			];

		let cbRegularRoofGeo = new THREE.BufferGeometry();

		let verticesR = new Float32Array(quad_verticesR);
		// Each vertex has one uv coordinate for texture mapping
		let uvsR = new Float32Array(quad_uvsR);
		// Use the four vertices to draw the two triangles that make up the square.
		let indicesR = new Uint32Array(quad_indicesR)

		// itemSize = 3 because there are 3 values (components) per vertex
		cbRegularRoofGeo.setAttribute('position', new THREE.BufferAttribute(verticesR, 3));
		cbRegularRoofGeo.setAttribute('uv', new THREE.BufferAttribute(uvsR, 2));
		cbRegularRoofGeo.setIndex(new THREE.BufferAttribute(indicesR, 1));
		cbRegularRoofGeo.computeVertexNormals();
		let phongMaterialR = new THREE.MeshPhongMaterial({
			side: THREE.DoubleSide, shadowSide: THREE.DoubleSide,
			color: 0xffffff, emissive: 0xffffff, specular: 0xFDF4DC,

			flatShading: true, vertexColors: true, dithering: true,
			combine: 2, shininess: 30,
		});

		let RegularRoofGeo = new THREE.Mesh(cbRegularRoofGeo, phongMaterialR);
		RegularRoofGeo.name = "centerRegularRoof";
		RegularRoofGeo.visible = false;
		const_var.b_t_M_L.add(RegularRoofGeo);

		/* Center Building Regular Roof Left Curve */
		var vertices1 = [
			{ pos: [+ 0.25, 0.0, 0.5], norm: [-1, 0, 0], uv: [0, 0], }, // 4 uv: [0, 0],
			{ pos: [+ 0.25, 0.0, -0.5], norm: [-1, 0, 0], uv: [0.008, 0], }, // 5 uv: [1, 0],
			{ pos: [+ 0.13, -0.005, 0.5], norm: [-1, 0, 0], uv: [0, 0.008], }, //uv: [0, 1], 6
			{ pos: [+ 0.13, -0.005, -0.5], norm: [-1, 0, 0], uv: [0.008, 0.008], }, //uv: [1, 1], 7

			{ pos: [+ 0.13, -0.005, 0.5], norm: [-1, 0, 0], uv: [0, 0], }, //uv: [0, 1], 6
			{ pos: [+ 0.13, -0.005, -0.5], norm: [-1, 0, 0], uv: [0.008, 0], }, //uv: [1, 1], 7
			{ pos: [+ 0.07, -0.015, 0.5], norm: [-1, 0, 0], uv: [0, 0.008], }, //uv: [0, 1], 6
			{ pos: [+ 0.07, -0.015, -0.5], norm: [-1, 0, 0], uv: [0.008, 0.008], }, //uv: [1, 1], 7

			{ pos: [+ 0.07, -0.015, 0.5], norm: [-1, 0, 0], uv: [0, 0], }, //uv: [0, 1], 6
			{ pos: [+ 0.07, -0.015, -0.5], norm: [-1, 0, 0], uv: [0.008, 0], }, //uv: [1, 1], 7
			{ pos: [+ 0.05, -0.025, 0.5], norm: [-1, 0, 0], uv: [0, 0.008], }, //uv: [0, 1], 6
			{ pos: [+ 0.05, -0.025, -0.5], norm: [-1, 0, 0], uv: [0.008, 0.008], }, //uv: [1, 1], 7

			{ pos: [+ 0.05, -0.025, 0.5], norm: [-1, 0, 0], uv: [0, 0], }, //uv: [0, 1], 6
			{ pos: [+ 0.05, -0.025, -0.5], norm: [-1, 0, 0], uv: [0.008, 0], }, //uv: [1, 1], 7
			{ pos: [+ 0.02, -0.045, 0.5], norm: [-1, 0, 0], uv: [0, 0.008], }, //uv: [0, 1], 6
			{ pos: [+ 0.02, -0.045, -0.5], norm: [-1, 0, 0], uv: [0.008, 0.008], }, //uv: [1, 1], 7  
			{ pos: [+ 0.00, -0.075, 0.5], norm: [-1, 0, 0], uv: [0, 0], }, //uv: [0, 0], 4
			{ pos: [+ 0.00, -0.075, -0.5], norm: [-1, 0, 0], uv: [0.008, 0], }, //uv: [1, 0], 5
			{ pos: [+ 0.02, -0.045, 0.5], norm: [-1, 0, 0], uv: [0, 0.008], }, // 6 uv: [0, 1],
			{ pos: [+ 0.02, -0.045, -0.5], norm: [-1, 0, 0], uv: [0.008, 0.008], }, // 7 uv: [1, 1],

		];

		var positions1 = [];
		var normals1 = [];
		var uvs1 = [];
		for (let vertex of vertices1) {
			positions1.push(...vertex.pos);
			normals1.push(...vertex.norm);
			uvs1.push(...vertex.uv);
		}
		var geometry1 = new THREE.BufferGeometry();
		var positionNumComponents1 = 3;
		var normalNumComponents1 = 3;
		var uvNumComponents1 = 2;
		geometry1.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions1), positionNumComponents1));
		geometry1.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normals1), normalNumComponents1));
		geometry1.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvs1), uvNumComponents1));
		geometry1.setIndex([
			//0, 1, 2, 2, 1, 3, 3, 2, 4, 4, 3, 5, 5, 4, 6, 6, 5, 7
			0, 1, 2, 2, 1, 3,
			4, 5, 6, 6, 5, 7,
			8, 9, 10, 10, 9, 11,
			12, 13, 14, 14, 13, 15,
			16, 17, 18, 18, 17, 19,
		]);
		var material1 = new THREE.MeshPhongMaterial({
			side: THREE.DoubleSide, shadowSide: THREE.DoubleSide,
			color: 0xffffff, emissive: 0xffffff, specular: 0xFDF4DC,

			flatShading: true, vertexColors: true, dithering: true,
			combine: 2, shininess: 30,
		});
		let cbRegularRoofLCurve = new THREE.Mesh(geometry1, material1);
		cbRegularRoofLCurve.name = "cbRegularRoofLCurve"
		cbRegularRoofLCurve.visible = false;
		var rCalor1 = params.p_r_c.replace("#", "0x");
		cbRegularRoofLCurve.material.color.setHex(rCalor1);
		const_var.b_t_M_L.add(cbRegularRoofLCurve);

		/* Center Building Regular Roof Right Curve */
		var vertices2 = [
			{ pos: [- 0.25, 0.0, 0.5], norm: [-1, 0, 0], uv: [0, 0], }, // 4 uv: [0, 0],
			{ pos: [- 0.25, 0.0, -0.5], norm: [-1, 0, 0], uv: [0.008, 0], }, // 5 uv: [1, 0],
			{ pos: [- 0.13, -0.005, 0.5], norm: [-1, 0, 0], uv: [0, 0.008], }, //uv: [0, 1], 6
			{ pos: [- 0.13, -0.005, -0.5], norm: [-1, 0, 0], uv: [0.008, 0.008], }, //uv: [1, 1], 7

			{ pos: [- 0.13, -0.005, 0.5], norm: [-1, 0, 0], uv: [0, 0], }, //uv: [0, 1], 6
			{ pos: [- 0.13, -0.005, -0.5], norm: [-1, 0, 0], uv: [0.008, 0], }, //uv: [1, 1], 7
			{ pos: [- 0.07, -0.015, 0.5], norm: [-1, 0, 0], uv: [0, 0.008], }, //uv: [0, 1], 6
			{ pos: [- 0.07, -0.015, -0.5], norm: [-1, 0, 0], uv: [0.008, 0.008], }, //uv: [1, 1], 7

			{ pos: [- 0.07, -0.015, 0.5], norm: [-1, 0, 0], uv: [0, 0], }, //uv: [0, 1], 6
			{ pos: [- 0.07, -0.015, -0.5], norm: [-1, 0, 0], uv: [0.008, 0], }, //uv: [1, 1], 7
			{ pos: [- 0.05, -0.025, 0.5], norm: [-1, 0, 0], uv: [0, 0.008], }, //uv: [0, 1], 6
			{ pos: [- 0.05, -0.025, -0.5], norm: [-1, 0, 0], uv: [0.008, 0.008], }, //uv: [1, 1], 7

			{ pos: [- 0.05, -0.025, 0.5], norm: [-1, 0, 0], uv: [0, 0], }, //uv: [0, 1], 6
			{ pos: [- 0.05, -0.025, -0.5], norm: [-1, 0, 0], uv: [0.008, 0], }, //uv: [1, 1], 7
			{ pos: [- 0.02, -0.045, 0.5], norm: [-1, 0, 0], uv: [0, 0.008], }, //uv: [0, 1], 6
			{ pos: [- 0.02, -0.045, -0.5], norm: [-1, 0, 0], uv: [0.008, 0.008], }, //uv: [1, 1], 7  
			{ pos: [- 0.00, -0.075, 0.5], norm: [-1, 0, 0], uv: [0, 0], }, //uv: [0, 0], 4
			{ pos: [- 0.00, -0.075, -0.5], norm: [-1, 0, 0], uv: [0.008, 0], }, //uv: [1, 0], 5
			{ pos: [- 0.02, -0.045, 0.5], norm: [-1, 0, 0], uv: [0, 0.008], }, // 6 uv: [0, 1],
			{ pos: [- 0.02, -0.045, -0.5], norm: [-1, 0, 0], uv: [0.008, 0.008], }, // 7 uv: [1, 1],
		];

		var positions2 = [];
		var normals2 = [];
		var uvs2 = [];
		for (let vertex of vertices2) {
			positions2.push(...vertex.pos);
			normals2.push(...vertex.norm);
			uvs2.push(...vertex.uv);
		}
		var geometry2 = new THREE.BufferGeometry();
		var positionNumComponents2 = 3;
		var normalNumComponents2 = 3;
		var uvNumComponents2 = 2;
		geometry2.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions2), positionNumComponents2));
		geometry2.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normals2), normalNumComponents2));
		geometry2.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvs2), uvNumComponents2));
		geometry2.setIndex([
			//0, 1, 2, 2, 1, 3, 3, 2, 4, 4, 3, 5, 5, 4, 6, 6, 5, 7
			0, 1, 2, 2, 1, 3,
			4, 5, 6, 6, 5, 7,
			8, 9, 10, 10, 9, 11,
			12, 13, 14, 14, 13, 15,
			16, 17, 18, 18, 17, 19,
		]);
		var material2 = new THREE.MeshPhongMaterial({
			side: THREE.DoubleSide, shadowSide: THREE.DoubleSide,
			color: 0xffffff, emissive: 0xffffff, specular: 0xFDF4DC,

			flatShading: true, vertexColors: true, dithering: true,
			combine: 2, shininess: 30,
		});
		let cubeTR = new THREE.Mesh(geometry2, material2);
		cubeTR.name = "centerRegularRoofR";
		var rCalor2 = params.p_r_c.replace("#", "0x");
		cubeTR.material.color.setHex(rCalor2);
		cubeTR.visible = (params.p_r_s == "1") ? true : false;
		const_var.b_t_M_R.add(cubeTR);

		// Head Channel
		let hcquad_vertices =
			[
				-0.5, 0.0, 1,
				0.0, 0.0, 1,
				0.0, 0.0, -1,
				-0.5, 0.0, -1,

				0.0, 0.0, 1,
				0.25, 0.5, 1,
				0.25, 0.5, -1,
				0.0, 0.0, -1,

				0.25, 0.5, 1,
				1.0, 0.5, 1,
				1.0, 0.5, -1,
				0.25, 0.5, -1,

				1.25, 0.0, 1,
				1.0, 0.5, 1,
				1.0, 0.5, -1,
				1.25, 0.0, -1,

				1.25, 0.0, 1,
				1.75, 0.0, 1,
				1.75, 0.0, -1,
				1.25, 0.0, -1,

			];

		let hcquad_uvs =
			[
				0.0, 0.0,
				1.0, 0.0,
				1.0, 1.0,
				0.0, 1.0,

				0.0, 0.0,
				1.0, 0.0,
				1.0, 1.0,
				0.0, 1.0,

				0.0, 0.0,
				1.0, 0.0,
				1.0, 1.0,
				0.0, 1.0,

				0.0, 0.0,
				1.0, 0.0,
				1.0, 1.0,
				0.0, 1.0,

				0.0, 0.0,
				1.0, 0.0,
				1.0, 1.0,
				0.0, 1.0
			];

		let hcquad_indices =
			[
				0, 2, 1,
				0, 3, 2,
				4, 6, 5,
				4, 7, 6,
				8, 10, 9,
				8, 11, 10,
				12, 14, 13,
				12, 15, 14,
				16, 18, 17,
				16, 19, 18
			];

		let lrRoofHeadChannelGeometry = new THREE.BufferGeometry();

		let hcvertices = new Float32Array(hcquad_vertices);
		// Each vertex has one uv coordinate for texture mapping
		let hcuvs = new Float32Array(hcquad_uvs);
		// Use the four vertices to draw the two triangles that make up the square.
		let hcindices = new Uint32Array(hcquad_indices)

		// itemSize = 3 because there are 3 values (components) per vertex
		lrRoofHeadChannelGeometry.setAttribute('position', new THREE.BufferAttribute(hcvertices, 3));
		lrRoofHeadChannelGeometry.setAttribute('uv', new THREE.BufferAttribute(hcuvs, 2));
		lrRoofHeadChannelGeometry.setIndex(new THREE.BufferAttribute(hcindices, 1));

		lrRoofHeadChannelGeometry.computeVertexNormals();
		var rCalor = params.p_r_c.replace("#", "0x");


		const channelLoader = new THREE.CubeTextureLoader();
		channelLoader.setPath(`${baseUrl}${reflection}`);

		const textureChannel = new THREE.CubeTextureLoader().load([
		`${baseUrl}${refpx}`,`${baseUrl}${refnx}`,`${baseUrl}${refpy}`,
		`${baseUrl}${refny}`,`${baseUrl}${refpz}`,`${baseUrl}${refnz}`,
		]);
		textureChannel.mapping = THREE.CubeReflectionMapping;

		const channelMaterial = new THREE.MeshBasicMaterial({
			color: 0xfbfbfb, envMap: textureChannel,
			reflectivity: 0.2, refractionRatio: 1, side: THREE.DoubleSide
		});
		const texture2 = new THREE.TextureLoader().load(`${baseUrl}${reflection}`);
		channelMaterial.map = texture2;

		let lrRoofHeadChannel = new THREE.Mesh(lrRoofHeadChannelGeometry, channelMaterial);
		lrRoofHeadChannel.name = "lrRoofHeadChannel";

		lrRoofHeadChannel.position.set(-0.2, params.p_h + roofMiddleHeight[params.p_r_p][params.p_w] - 0.16, 0);
		lrRoofHeadChannel.scale.set(0.17,0.12, 0.15);
		lrRoofHeadChannel.visible = false;
		const_var.b_t_M_R.add(lrRoofHeadChannel);



		// Free Standind LeanTO
		let f_S_L_quad_vertices =
			[
				-0.5, 0.0, 0.5,
				0.0, 1.0, 0.5,
				0.0, 1.0, -0.5,
				-0.5, 0.0, -0.5,
			];

		let f_S_L_quad_uvs =
			[
				0.0, 0.0,
				1.0, 0.0,
				1.0, 1.0,
				0.0, 1.0,
			];

		let f_S_L_quad_indices =
			[
				0, 2, 1, 0, 3, 2
			];

		let f_S_LeanGeo = new THREE.BufferGeometry();

		let f_S_L_vertices = new Float32Array(f_S_L_quad_vertices);
		// Each vertex has one uv coordinate for texture mapping
		let f_S_L_uvs = new Float32Array(f_S_L_quad_uvs);
		// Use the four vertices to draw the two triangles that make up the square.
		let f_S_L_indices = new Uint32Array(f_S_L_quad_indices)

		// itemSize = 3 because there are 3 values (components) per vertex
		f_S_LeanGeo.setAttribute('position', new THREE.BufferAttribute(f_S_L_vertices, 3));
		f_S_LeanGeo.setAttribute('uv', new THREE.BufferAttribute(f_S_L_uvs, 2));
		f_S_LeanGeo.setIndex(new THREE.BufferAttribute(f_S_L_indices, 1));
		// let f_S_L_roofImg = verticalTexture;

		// if(params.p_r_s=="3"){
		// 	f_S_L_roofImg = verticalTexture;//"verticalTexture.jpeg";
		// }
		// else{
		// 	f_S_L_roofImg = horizontalTexture;//"horizantalTexture.jpeg";
		// }
		f_S_LeanGeo.computeVertexNormals();

		let f_S_L_rCalor = params.p_r_c.replace("#", "0x");
		let f_S_LeanMaterial = new THREE.MeshPhongMaterial({
			side: THREE.DoubleSide, shadowSide: THREE.DoubleSide,
			color: 0xffffff, emissive: 0xffffff, specular: 0xFDF4DC,

			flatShading: true, vertexColors: true, dithering: true,
			combine: 2, shininess: 30,
		});
		let f_S_LeanRoof = new THREE.Mesh(f_S_LeanGeo, f_S_LeanMaterial);
		f_S_LeanRoof.name = "f_S_LeanRoof";
		f_S_LeanRoof.visible = false;
		// f_S_LeanRoof.scale.set(params.p_w,params.p_r_p,params.p_d);
		// f_S_LeanRoof.position.set(0,params.p_h,0);	
		f_S_LeanRoof.material.color.setHex(f_S_L_rCalor);
		const_var.b_t_M_L.add(f_S_LeanRoof);

		// Bows Geometry And Material
		let bowGeometry = new THREE.BoxGeometry(0.98 + 0.001, 0.6 + 0.2, 0.2 + 0.1);
		const loader = new THREE.CubeTextureLoader();
		loader.setPath(`${baseUrl}${reflection}`);

		const textureCube = new THREE.CubeTextureLoader().load([
			`${baseUrl}${refpx}`,`${baseUrl}${refnx}`,`${baseUrl}${refpy}`,
			`${baseUrl}${refny}`,`${baseUrl}${refpz}`,`${baseUrl}${refnz}`,
		]);
		// textureCube.mapping = THREE.CubeReflectionMapping
		// const bowMaterial = new THREE.MeshPhongMaterial({ color: 0xfbfbfb, envMap: textureCube,
		// 	reflectivity:0.2,
		// 	refractionRatio:1 ,

		//    });
		const bowMaterial = new THREE.MeshBasicMaterial({
			color: 0xfbfbfb, envMap: textureCube,
			reflectivity: 0.2,
			refractionRatio: 1,
			side: THREE.DoubleSide
		});
		const_var.bwmatrl = bowMaterial;
		const texture222 = new THREE.TextureLoader().load(`${baseUrl}${reflection}`)
		bowMaterial.map = texture222
		// let bowMaterial = new THREE.MeshBasicMaterial({color:0xB3B3B3,side:THREE.DoubleSide});
		let bowMaterialt = new THREE.MeshBasicMaterial({ color: 0x0E6655, side: THREE.DoubleSide });


		let cornerGeometry = new THREE.BoxGeometry(0.98 + 0.001, 0.6 + 0.4, 0.2 + 0.4);

		// Curved Bows Geometry And Material
		let curvedBowGeometry = new THREE.BoxGeometry(0.98 + 0.055, 0.6 + 0.2, 0.2 + 0.1);
		let curvedBowMaterial = new THREE.MeshBasicMaterial({ color: 0xB3B3B3, side: THREE.DoubleSide });

		//Building Roof curved  Trims Geometry And Material
		let trimGeometry = new THREE.BoxGeometry(0.98, 0.6 + 0.1, 0.2 + 0.1 + 0.1);
		let trimMaterial = new THREE.MeshBasicMaterial({ color: 0x0E6655, side: THREE.DoubleSide });

		//Variable For Adjust Roof Middle Height With Roof Pitch


		let regularBowGeo = new THREE.Shape();
		regularBowGeo.moveTo(params.p_w/4, params.p_h+((params.p_r_p/12)*params.p_w/4)); //bottom left
		regularBowGeo.lineTo(params.p_w/4, params.p_h+((params.p_r_p/12)*params.p_w/4)+5);//top left
		regularBowGeo.lineTo(params.p_w/4+0.01, params.p_h+((params.p_r_p/12)*params.p_w/4)+5); // top right
		regularBowGeo.lineTo(params.p_w/4+0.01, params.p_h+((params.p_r_p/12)*params.p_w/4)); // bottom right
		regularBowGeo.lineTo(params.p_w/4, params.p_h+((params.p_r_p/12)*params.p_w/4));

		let extrudeSettingsRegularBow = {
			depth: -params.p_d, // height of the raft
			bevelEnabled: false, // no bevel on edges
			};
			let raftGeometryregularBow = new THREE.ExtrudeGeometry(
				regularBowGeo,
				extrudeSettingsRegularBow
			);

		let regularBow = new THREE.Mesh(raftGeometryregularBow, bowMaterial);
		regularBow.position.z = params.p_d/2;
		regularBow.name = "regularBow"
		const_var.b_t_M_L.add(regularBow);

		//Variable For Adjust Scale With Roof Pitch
		let bowsScale = {
			"1": { "6": 0.000, "7": 0.050, "8": 0.10, "9": 0.100, "10": 0.100, "11": 0.100, "12": 0.00, "13": 0.00, "14": 0.10, "15": 0.15, "16": 0.20, "17": 0.20, "18": 0.20, "19": 0.20, "20": 0.20, "21": 0.20, "22": 0.20, "23": 0.20, "24": 0.20, "25": 0.20, "26": 0.20, "27": 0.20, "28": 0.20, "29": 0.20, "30": 0.20, "31": 0.20, "32": 0.25, "33": 0.25, "34": 0.25, "35": 0.25, "36": 0.30, "37": 0.30, "38": 0.30, "39": 0.30, "40": 0.35, "41": 0.35, "42": 0.35, "43": 0.35, "44": 0.40, "45": 0.45, "46": 0.50, "47": 0.55, "48": 0.60, "49": 0.60, "50": 0.60, "51": 0.60, "52": 0.60, "53": 0.60, "54": 0.60, "55": 0.60, "56": 0.60, "57": 0.60, "58": 0.60, "59": 0.60, "60": 0.60, "61": 0.60, "62": 0.60, "63": 0.60, "64": 0.60, "65": 0.60, "66": 0.65, "67": 0.65, "68": 0.65, "69": 0.65, "70": 0.70, "71": 0.75, "72": 0.80, "73": 0.80, "74": 0.80, "75": 0.80, "76": 0.80, "77": 0.80, "78": 0.80, "79": 0.80, "80": 0.80 },
			"2": { "6": 0.050, "7": 0.050, "8": 0.10, "9": 0.100, "10": 0.100, "11": 0.125, "12": 0.10, "13": 0.10, "14": 0.10, "15": 0.10, "16": 0.20, "17": 0.20, "18": 0.20, "19": 0.20, "20": 0.20, "21": 0.25, "22": 0.25, "23": 0.25, "24": 0.30, "25": 0.30, "26": 0.30, "27": 0.30, "28": 0.35, "29": 0.35, "30": 0.40, "31": 0.40, "32": 0.40, "33": 0.45, "34": 0.45, "35": 0.45, "36": 0.45, "37": 0.50, "38": 0.50, "39": 0.55, "40": 0.55, "41": 0.55, "42": 0.60, "43": 0.65, "44": 0.70, "45": 0.75, "46": 0.75, "47": 0.80, "48": 0.80, "49": 0.80, "50": 0.80, "51": 0.80, "52": 0.85, "53": 0.85, "54": 0.85, "55": 0.85, "56": 0.85, "57": 0.85, "58": 0.85, "59": 0.85, "60": 0.85, "61": 0.90, "62": 0.95, "63": 0.95, "64": 0.95, "65": 0.95, "66": 1.00, "67": 1.05, "68": 1.10, "69": 1.15, "70": 1.20, "71": 1.20, "72": 1.20, "73": 1.20, "74": 1.20, "75": 1.20, "76": 1.20, "77": 1.20, "78": 1.20, "79": 1.20, "80": 1.25 },
			"3": { "6": 0.100, "7": 0.125, "8": 0.15, "9": 0.200, "10": 0.225, "11": 0.250, "12": 0.20, "13": 0.20, "14": 0.25, "15": 0.25, "16": 0.30, "17": 0.35, "18": 0.40, "19": 0.45, "20": 0.45, "21": 0.45, "22": 0.50, "23": 0.50, "24": 0.50, "25": 0.55, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, "31": 0.80, "32": 0.80, "33": 0.80, "34": 0.85, "35": 0.85, "36": 0.90, "37": 0.90, "38": 0.90, "39": 0.90, "40": 0.90, "41": 0.90, "42": 0.95, "43": 1.00, "44": 1.05, "45": 1.10, "46": 1.15, "47": 1.15, "48": 1.20, "49": 1.25, "50": 1.25, "51": 1.30, "52": 1.30, "53": 1.30, "54": 1.30, "55": 1.30, "56": 1.30, "57": 1.35, "58": 1.40, "59": 1.40, "60": 1.40, "61": 1.45, "62": 1.45, "63": 1.50, "64": 1.50, "65": 1.55, "66": 1.55, "67": 1.60, "68": 1.65, "69": 1.70, "70": 1.75, "71": 1.80, "72": 1.85, "73": 1.90, "74": 1.90, "75": 1.90, "76": 1.90, "77": 1.90, "78": 1.90, "79": 1.90, "80": 1.95 },
			"4": { "6": 0.175, "7": 0.200, "8": 0.25, "9": 0.300, "10": 0.350, "11": 0.375, "12": 0.35, "13": 0.35, "14": 0.40, "15": 0.45, "16": 0.50, "17": 0.55, "18": 0.60, "19": 0.65, "20": 0.70, "21": 0.70, "22": 0.75, "23": 0.75, "24": 0.80, "25": 0.85, "26": 0.85, "27": 0.90, "28": 0.95, "29": 1.00, "30": 1.05, "31": 1.10, "32": 1.15, "33": 1.20, "34": 1.25, "35": 1.25, "36": 1.35, "37": 1.35, "38": 1.35, "39": 1.35, "40": 1.35, "41": 1.40, "42": 1.45, "43": 1.50, "44": 1.55, "45": 1.60, "46": 1.65, "47": 1.70, "48": 1.75, "49": 1.80, "50": 1.85, "51": 1.90, "52": 1.90, "53": 1.90, "54": 1.90, "55": 1.95, "56": 2.00, "57": 2.05, "58": 2.10, "59": 2.15, "60": 2.20, "61": 2.25, "62": 2.30, "63": 2.35, "64": 2.40, "65": 2.40, "66": 2.40, "67": 2.40, "68": 2.40, "69": 2.45, "70": 2.50, "71": 2.55, "72": 2.60, "73": 2.65, "74": 2.70, "75": 2.75, "76": 2.85, "77": 2.85, "78": 2.85, "79": 2.85, "80": 2.85 },
			"5": { "6": 0.250, "7": 0.300, "8": 0.35, "9": 0.425, "10": 0.475, "11": 0.525, "12": 0.50, "13": 0.55, "14": 0.60, "15": 0.65, "16": 0.70, "17": 0.75, "18": 0.85, "19": 0.90, "20": 0.95, "21": 1.00, "22": 1.05, "23": 1.10, "24": 1.15, "25": 1.20, "26": 1.25, "27": 1.30, "28": 1.35, "29": 1.40, "30": 1.45, "31": 1.50, "32": 1.55, "33": 1.60, "34": 1.65, "35": 1.70, "36": 1.75, "37": 1.80, "38": 1.85, "39": 1.90, "40": 1.95, "41": 2.00, "42": 2.05, "43": 2.10, "44": 2.15, "45": 2.25, "46": 2.30, "47": 2.35, "48": 2.40, "49": 2.45, "50": 2.50, "51": 2.55, "52": 2.60, "53": 2.65, "54": 2.70, "55": 2.75, "56": 2.85, "57": 2.90, "58": 2.95, "59": 3.30, "60": 3.05, "61": 3.10, "62": 3.15, "63": 3.20, "64": 3.25, "65": 3.30, "66": 3.35, "67": 3.40, "68": 3.45, "69": 3.50, "70": 3.55, "71": 3.60, "72": 3.65, "73": 3.70, "74": 3.75, "75": 3.80, "76": 3.85, "77": 3.90, "78": 3.95, "79": 4.00, "80": 4.05 },
			"6": { "6": 0.350, "7": 0.450, "8": 0.50, "9": 0.575, "10": 0.650, "11": 0.700, "12": 0.70, "13": 0.80, "14": 0.90, "15": 0.95, "16": 1.00, "17": 1.05, "18": 1.15, "19": 1.20, "20": 1.30, "21": 1.35, "22": 1.40, "23": 1.50, "24": 1.60, "25": 1.65, "26": 1.70, "27": 1.75, "28": 1.85, "29": 1.90, "30": 2.00, "31": 2.05, "32": 2.10, "33": 2.20, "34": 2.30, "35": 2.40, "36": 2.50, "37": 2.55, "38": 2.60, "39": 2.65, "40": 2.70, "41": 2.75, "42": 2.80, "43": 2.90, "44": 2.95, "45": 3.00, "46": 3.10, "47": 3.20, "48": 3.30, "49": 3.40, "50": 3.50, "51": 3.50, "52": 3.50, "53": 3.60, "54": 3.70, "55": 3.80, "56": 3.80, "57": 3.90, "58": 4.00, "59": 4.10, "60": 4.20, "61": 4.20, "62": 4.30, "63": 4.35, "64": 4.40, "65": 4.45, "66": 4.50, "67": 4.55, "68": 4.60, "69": 4.70, "70": 4.80, "71": 4.90, "72": 5.00, "73": 5.10, "74": 5.15, "75": 5.20, "76": 5.25, "77": 5.30, "78": 5.35, "79": 5.40, "80": 5.45 }
		};

		let f_S_LeanBowsScale = {
			"1": { "6": 0.000, "7": 0.050, "8": 0.10, "9": 0.100, "10": 0.100, "11": 0.100, "12": 0.00, "13": 0.00, "14": 0.10, "15": 0.15, "16": 0.20, "17": 0.20, "18": 0.20, "19": 0.20, "20": 0.20, "21": 0.20, "22": 0.20, "23": 0.20, "24": 0.20, "25": 0.20, "26": 0.20, "27": 0.20, "28": 0.20, "29": 0.20, "30": 0.20, },
			"2": { "6": 0.00, "7": 0.10, "8": 0.12, "9": 0.10, "10": 0.16, "11": 0.18, "12": 0.25, "13": 0.27, "14": 0.29, "15": 0.31, "16": 0.31, "17": 0.30, "18": 0.40, "19": 0.40, "20": 0.40, "21": 0.45, "22": 0.45, "23": 0.50, "24": 0.53, "25": 0.30, "26": 0.30, "27": 0.30, "28": 0.35, "29": 0.35, "30": 0.40, },
			"3": { "6": 0.18, "7": 0.22, "8": 0.24, "9": 0.26, "10": 0.28, "11": 0.31, "12": 0.33, "13": 0.37, "14": 0.45, "15": 0.50, "16": 0.70, "17": 0.70, "18": 0.70, "19": 0.70, "20": 0.75, "21": 0.80, "22": 0.85, "23": 0.90, "24": 0.95, "25": 0.55, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, },
			"4": { "6": 0.175, "7": 0.200, "8": 0.25, "9": 0.300, "10": 0.350, "11": 0.375, "12": 0.35, "13": 0.35, "14": 0.40, "15": 0.45, "16": 0.50, "17": 0.55, "18": 0.60, "19": 0.65, "20": 0.70, "21": 0.70, "22": 0.75, "23": 0.75, "24": 0.80, "25": 0.85, "26": 0.85, "27": 0.90, "28": 0.95, "29": 1.00, "30": 1.05, },
			"5": { "6": 0.250, "7": 0.300, "8": 0.35, "9": 0.425, "10": 0.475, "11": 0.525, "12": 0.50, "13": 0.55, "14": 0.60, "15": 0.65, "16": 0.70, "17": 0.75, "18": 0.85, "19": 0.90, "20": 0.95, "21": 1.00, "22": 1.05, "23": 1.10, "24": 1.15, "25": 1.20, "26": 1.25, "27": 1.30, "28": 1.35, "29": 1.40, "30": 1.45, },
			"6": { "6": 0.350, "7": 0.450, "8": 0.50, "9": 0.575, "10": 0.650, "11": 0.700, "12": 0.70, "13": 0.80, "14": 0.90, "15": 0.95, "16": 1.00, "17": 1.05, "18": 1.15, "19": 1.20, "20": 1.30, "21": 1.35, "22": 1.40, "23": 1.50, "24": 1.60, "25": 1.65, "26": 1.70, "27": 1.75, "28": 1.85, "29": 1.90, "30": 2.00, },
		};


		let bowsScaleA = {
			"1": { "6": 0.000, "7": 0.050, "8": 0.10, "9": 0.100, "10": 0.100, "11": 0.100, "12": 0.00, "13": 0.00, "14": 0.10, "15": 0.15, "16": 0.20, "17": 0.20, "18": 0.20, "19": 0.20, "20": 0.20, "21": 0.20, "22": 0.20, "23": 0.20, "24": 0.20, "25": 0.20, "26": 0.20, "27": 0.20, "28": 0.20, "29": 0.20, "30": 0.20, "31": 0.20, "32": 0.25, "33": 0.25, "34": 0.25, "35": 0.25, "36": 0.30, "37": 0.30, "38": 0.30, "39": 0.30, "40": 0.35, "41": 0.35, "42": 0.35, "43": 0.35, "44": 0.40, "45": 0.45, "46": 0.50, "47": 0.55, "48": 0.60, "49": 0.60, "50": 0.60, "51": 0.60, "52": 0.60, "53": 0.60, "54": 0.60, "55": 0.60, "56": 0.60, "57": 0.60, "58": 0.60, "59": 0.60, "60": 0.60, "61": 0.60, "62": 0.60, "63": 0.60, "64": 0.60, "65": 0.60, "66": 0.65, "67": 0.65, "68": 0.65, "69": 0.65, "70": 0.70, "71": 0.75, "72": 0.80, "73": 0.80, "74": 0.80, "75": 0.80, "76": 0.80, "77": 0.80, "78": 0.80, "79": 0.80, "80": 0.80 },
			"2": { "6": 0.046, "7": 0.062, "8": 0.078, "9": 0.094, "10": 0.11, "11": 0.125, "12": 0.126, "13": 0.143, "14": 0.16, "15": 0.177, "16": 0.194, "17": 0.211, "18": 0.23, "19": 0.249, "20": 0.268, "21": 0.287, "22": 0.303, "23": 0.325, "24": 0.34, "25": 0.338, "26": 0.366, "27": 0.386, "28": 0.402, "29": 0.418, "30": 0.434, "31": 0.418, "32": 0.40, "33": 0.45, "34": 0.45, "35": 0.45, "36": 0.45, "37": 0.50, "38": 0.50, "39": 0.55, "40": 0.55, "41": 0.55, "42": 0.60, "43": 0.65, "44": 0.70, "45": 0.75, "46": 0.75, "47": 0.80, "48": 0.80, "49": 0.80, "50": 0.80, "51": 0.80, "52": 0.85, "53": 0.85, "54": 0.85, "55": 0.85, "56": 0.85, "57": 0.85, "58": 0.85, "59": 0.85, "60": 0.85, "61": 0.90, "62": 0.95, "63": 0.95, "64": 0.95, "65": 0.95, "66": 1.00, "67": 1.05, "68": 1.10, "69": 1.15, "70": 1.20, "71": 1.20, "72": 1.20, "73": 1.20, "74": 1.20, "75": 1.20, "76": 1.20, "77": 1.20, "78": 1.20, "79": 1.20, "80": 1.25 },
			"3": { "6": 0.100, "7": 0.125, "8": 0.15, "9": 0.175, "10": 0.20, "11": 0.225, "12": 0.25, "13": 0.275, "14": 0.30, "15": 0.325, "16": 0.35, "17": 0.375, "18": 0.40, "19": 0.425, "20": 0.45, "21": 0.475, "22": 0.50, "23": 0.525, "24": 0.555, "25": 0.58, "26": 0.605, "27": 0.63, "28": 0.655, "29": 0.685, "30": 0.71, "31": 0.725, "32": 0.75, "33": 0.775, "34": 0.80, "35": 0.825, "36": 0.85, "37": 0.875, "38": 0.90, "39": 0.925, "40": 0.95, "41": 0.975, "42": 1.00, "43": 1.00, "44": 1.05, "45": 1.10, "46": 1.15, "47": 1.15, "48": 1.20, "49": 1.25, "50": 1.25, "51": 1.30, "52": 1.30, "53": 1.30, "54": 1.30, "55": 1.30, "56": 1.30, "57": 1.35, "58": 1.40, "59": 1.40, "60": 1.40, "61": 1.45, "62": 1.45, "63": 1.50, "64": 1.50, "65": 1.55, "66": 1.55, "67": 1.60, "68": 1.65, "69": 1.70, "70": 1.75, "71": 1.80, "72": 1.85, "73": 1.90, "74": 1.90, "75": 1.90, "76": 1.90, "77": 1.90, "78": 1.90, "79": 1.90, "80": 1.95 },
			"4": { "6": 0.185, "7": 0.222, "8": 0.259, "9": 0.296, "10": 0.333, "11": 0.37, "12": 0.407, "13": 0.443, "14": 0.48, "15": 0.518, "16": 0.555, "17": 0.592, "18": 0.631, "19": 0.668, "20": 0.705, "21": 0.742, "22": 0.779, "23": 0.816, "24": 0.853, "25": 0.89, "26": 0.927, "27": 0.97, "28": 1.01, "29": 1.042, "30": 1.08, "31": 1.10, "32": 1.15, "33": 1.20, "34": 1.25, "35": 1.25, "36": 1.35, "37": 1.35, "38": 1.35, "39": 1.35, "40": 1.35, "41": 1.40, "42": 1.45, "43": 1.50, "44": 1.55, "45": 1.60, "46": 1.65, "47": 1.70, "48": 1.75, "49": 1.80, "50": 1.85, "51": 1.90, "52": 1.90, "53": 1.90, "54": 1.90, "55": 1.95, "56": 2.00, "57": 2.05, "58": 2.10, "59": 2.15, "60": 2.20, "61": 2.25, "62": 2.30, "63": 2.35, "64": 2.40, "65": 2.40, "66": 2.40, "67": 2.40, "68": 2.40, "69": 2.45, "70": 2.50, "71": 2.55, "72": 2.60, "73": 2.65, "74": 2.70, "75": 2.75, "76": 2.85, "77": 2.85, "78": 2.85, "79": 2.85, "80": 2.85 },
			"5": { "6": 0.225, "7": 0.325, "8": 0.38, "9": 0.43, "10": 0.485, "11": 0.54, "12": 0.595, "13": 0.6455, "14": 0.70, "15": 0.755, "16": 0.805, "17": 0.86, "18": 0.91, "19": 0.965, "20": 1.02, "21": 1.07, "22": 1.125, "23": 1.175, "24": 1.225, "25": 1.275, "26": 1.335, "27": 1.385, "28": 1.44, "29": 1.50, "30": 1.56, "31": 1.62, "32": 1.68, "33": 1.74, "34": 1.65, "35": 1.70, "36": 1.75, "37": 1.80, "38": 1.85, "39": 1.90, "40": 1.95, "41": 2.00, "42": 2.05, "43": 2.10, "44": 2.15, "45": 2.25, "46": 2.30, "47": 2.35, "48": 2.40, "49": 2.45, "50": 2.50, "51": 2.55, "52": 2.60, "53": 2.65, "54": 2.70, "55": 2.75, "56": 2.85, "57": 2.90, "58": 2.95, "59": 3.30, "60": 3.05, "61": 3.10, "62": 3.15, "63": 3.20, "64": 3.25, "65": 3.30, "66": 3.35, "67": 3.40, "68": 3.45, "69": 3.50, "70": 3.55, "71": 3.60, "72": 3.65, "73": 3.70, "74": 3.75, "75": 3.80, "76": 3.85, "77": 3.90, "78": 3.95, "79": 4.00, "80": 4.05 },
			"6": { "6": 0.350, "7": 0.450, "8": 0.50, "9": 0.575, "10": 0.650, "11": 0.700, "12": 0.70, "13": 0.80, "14": 0.90, "15": 0.95, "16": 1.00, "17": 1.05, "18": 1.15, "19": 1.20, "20": 1.30, "21": 1.35, "22": 1.40, "23": 1.50, "24": 1.60, "25": 1.65, "26": 1.70, "27": 1.75, "28": 1.85, "29": 1.90, "30": 2.00, "31": 2.05, "32": 2.10, "33": 2.20, "34": 2.30, "35": 2.40, "36": 2.50, "37": 2.55, "38": 2.60, "39": 2.65, "40": 2.70, "41": 2.75, "42": 2.80, "43": 2.90, "44": 2.95, "45": 3.00, "46": 3.10, "47": 3.20, "48": 3.30, "49": 3.40, "50": 3.50, "51": 3.50, "52": 3.50, "53": 3.60, "54": 3.70, "55": 3.80, "56": 3.80, "57": 3.90, "58": 4.00, "59": 4.10, "60": 4.20, "61": 4.20, "62": 4.30, "63": 4.35, "64": 4.40, "65": 4.45, "66": 4.50, "67": 4.55, "68": 4.60, "69": 4.70, "70": 4.80, "71": 4.90, "72": 5.00, "73": 5.10, "74": 5.15, "75": 5.20, "76": 5.25, "77": 5.30, "78": 5.35, "79": 5.40, "80": 5.45 }
		};

		//Variable For add Height in Roof Bow Of Building +0.2
		let hInc = roofMiddleHeight[params.p_r_p][params.p_w] / 2 - 0.1;
		// let hFrR = (params.p_r_s == "1")?0.41:0;
		let hFrR = (params.p_r_s == "1") ? 0.490 : 0;
		let hFrRCorner = (params.p_r_s == "1") ? 0.4 : 0;

		//Variable For Adjust Rotation With Roof Pitch	

		let bowsRotation = { "1": 0.08314, "2": 0.16515, "3": 0.24500, "4": 0.32175, "5": 0.39480, "6": 0.46365, };
		// let f_S_LeanRoofRotaion = { "1":0.08314,"2":0.087,"3":0.12,"4":0.32175,"5":0.39480,"6":0.46365, };


		// Scale for Regular Bow In X direction in case of Regular Roof
		let BowScaleR = {
			"1": { "12": 0.77, "13": 0.77, "14": 0.77, "15": 0.77, "16": 0.77, "17": 0.77, "18": 0.77, "19": 0.77, "20": 0.77, "21": 0.77, "22": 0.77, "23": 0.77, "24": 0.77, "25": 0.77, "26": 0.77, "27": 0.77, "28": 0.77, "29": 0.77, "30": 0.77, "31": 0.77, "32": 0.77, "33": 0.77, "34": 0.77, "35": 0.77, },
			"2": { "12": 0.21, "13": 0.21, "14": 0.21, "15": 0.21, "16": 0.21, "17": 0.21, "18": 0.21, "19": 0.21, "20": 0.21, "21": 0.21, "22": 0.21, "23": 0.21, "24": 0.21, "25": 0.21, "26": 0.21, "27": 0.19, "28": 0.22, "29": 0.20, "30": 0.24, "31": 0.60, "32": 0.60, "33": 0.60, "34": 0.60, "35": 0.60, },
			"3": { "12": 0.22, "13": 0.22, "14": 0.242, "15": 0.20, "16": 0.23, "17": 0.25, "18": 0.265, "19": 0.29, "20": 0.26, "21": 0.25, "22": 0.25, "23": 0.25, "24": 0.22, "25": 0.25, "26": 0.23, "27": 0.25, "28": 0.25, "29": 0.25, "30": 0.32, "31": 0.60, "32": 0.60, "33": 0.60, "34": 0.60, "35": 0.60, },
			"4": { "12": 0.24, "13": 0.20, "14": 0.21, "15": 0.22, "16": 0.24, "17": 0.245, "18": 0.25, "19": 0.25, "20": 0.27, "21": 0.23, "22": 0.25, "23": 0.21, "24": 0.22, "25": 0.25, "26": 0.20, "27": 0.218, "28": 0.228, "29": 0.24, "30": 0.25, "31": 0.60, "32": 0.60, "33": 0.60, "34": 0.60, "35": 0.60, },
			"5": { "12": 0.20, "13": 0.195, "14": 0.195, "15": 0.19, "16": 0.18, "17": 0.17, "18": 0.21, "19": 0.21, "20": 0.205, "21": 0.21, "22": 0.205, "23": 0.202, "24": 0.195, "25": 0.21, "26": 0.205, "27": 0.20, "28": 0.193, "29": 0.19, "30": 0.19, "31": 0.60, "32": 0.60, "33": 0.60, "34": 0.60, "35": 0.60, },
			"6": { "12": 0.50, "13": 0.50, "14": 0.50, "15": 0.50, "16": 0.50, "17": 0.50, "18": 0.50, "19": 0.50, "20": 0.45, "21": 0.45, "22": 0.45, "23": 0.45, "24": 0.45, "25": 0.45, "26": 0.45, "27": 0.45, "28": 0.45, "29": 0.45, "30": 0.45, "31": 0.40, "32": 0.40, "33": 0.40, "34": 0.40, "35": 0.40, },
		};

		let bowsRotationR = {
			"1": { "12": 0.77, "13": 0.77, "14": 0.77, "15": 0.77, "16": 0.77, "17": 0.77, "18": 0.77, "19": 0.77, "20": 0.77, "21": 0.77, "22": 0.77, "23": 0.77, "24": 0.77, "25": 0.77, "26": 0.77, "27": 0.77, "28": 0.77, "29": 0.77, "30": 0.77, "31": 0.77, "32": 0.77, "33": 0.77, "34": 0.77, "35": 0.77, },
			"2": { "12": 0.16965, "13": 0.16965, "14": 0.16965, "15": 0.16965, "16": 0.16965, "17": 0.16965, "18": 0.16965, "19": 0.16965, "20": 0.16965, "21": 0.16965, "22": 0.16965, "23": 0.16965, "24": 0.16965, "25": 0.16965, "26": 0.16865, "27": 0.16865, "28": 0.16865, "29": 0.16865, "30": 0.16865, "31": 0.16965, "32": 0.70, "33": 0.70, "34": 0.70, "35": 0.70, },
			"3": { "12": 0.25000, "13": 0.25000, "14": 0.25000, "15": 0.25000, "16": 0.25000, "17": 0.25000, "18": 0.25000, "19": 0.25000, "20": 0.25000, "21": 0.25000, "22": 0.25000, "23": 0.25000, "24": 0.25000, "25": 0.25000, "26": 0.24800, "27": 0.24800, "28": 0.24800, "29": 0.24800, "30": 0.24800, "31": 0.25000, "32": 0.60, "33": 0.60, "34": 0.60, },
			"4": { "12": 0.32875, "13": 0.32875, "14": 0.32875, "15": 0.32875, "16": 0.32875, "17": 0.32875, "18": 0.32875, "19": 0.32885, "20": 0.32775, "21": 0.32775, "22": 0.32775, "23": 0.32775, "24": 0.32695, "25": 0.32575, "26": 0.32595, "27": 0.32595, "28": 0.32595, "29": 0.32595, "30": 0.32595, "31": 0.32695, },
			"5": { "12": 0.40330, "13": 0.40330, "14": 0.40330, "15": 0.40330, "16": 0.40330, "17": 0.40330, "18": 0.40330, "19": 0.40330, "20": 0.40330, "21": 0.40330, "22": 0.40330, "23": 0.40330, "24": 0.40330, "25": 0.40, "26": 0.40, "27": 0.40, "28": 0.40, "29": 0.40, "30": 0.40, "31": 0.40, "32": 0.42, "33": 0.42, "34": 0.42, "35": 0.42, },
			"6": { "12": 0.50, "13": 0.50, "14": 0.50, "15": 0.50, "16": 0.50, "17": 0.50, "18": 0.50, "19": 0.50, "20": 0.45, "21": 0.45, "22": 0.45, "23": 0.45, "24": 0.45, "25": 0.45, "26": 0.45, "27": 0.45, "28": 0.45, "29": 0.45, "30": 0.45, "31": 0.40, "32": 0.40, "33": 0.40, "34": 0.40, "35": 0.40, }
		};

		//first Small curve Bow in case of Regular Roof
		let cBowScale1 = {
			"1": { "12": 0.77, "13": 0.77, "14": 0.77, "15": 0.77, "16": 0.77, "17": 0.77, "18": 0.77, "19": 0.77, "20": 0.77, "21": 0.77, "22": 0.77, "23": 0.77, "24": 0.77, "25": 0.77, "26": 0.77, "27": 0.77, "28": 0.77, "29": 0.77, "30": 0.77, "31": 0.77, "32": 0.77, "33": 0.77, "34": 0.77, "35": 0.77, "36": 0.77, "37": 0.77, "38": 0.77, "39": 0.77, "40": 0.77, "41": 0.77, "42": 0.77, "43": 0.77, "44": 0.77, "45": 0.77, "46": 0.77, "47": 0.77, "48": 0.77, "49": 0.77, "50": 0.77, "51": 0.77, "52": 0.77, "53": 0.77, "54": 0.77, "55": 0.77, "56": 0.77, "57": 0.77, "58": 0.77, "59": 0.77, "60": 0.77, "61": 0.77, "62": 0.77, "63": 0.77, "64": 0.77, "65": 0.77, "66": 0.77, "67": 0.77, "68": 0.77, "69": 0.65, "70": 0.77, "71": 0.77, "72": 0.77, "73": 0.77, "74": 0.77, "75": 0.77, "76": 0.77, "77": 0.77, "78": 0.77, "79": 0.77, "80": 0.77 },
			"2": { "12": 0.20, "13": 0.21, "14": 0.22, "15": 0.23, "16": 0.21, "17": 0.22, "18": 0.21, "19": 0.22, "20": 0.22, "21": 0.22, "22": 0.22, "23": 0.22, "24": 0.202, "25": 0.238, "26": 0.218, "27": 0.218, "28": 0.218, "29": 0.218, "30": 0.218, "31": 0.70, "32": 0.70, "33": 0.70, "34": 0.70, "35": 0.70, "36": 0.70, "37": 0.80, "38": 0.80, "39": 0.80, "40": 0.80, "41": 0.80, "42": 0.80, "43": 0.80, "44": 0.80, "45": 0.80, "46": 0.80, "47": 0.80, "48": 0.80, "49": 0.80, "50": 0.80, "51": 0.80, "52": 0.80, "53": 0.80, "54": 0.80, "55": 0.80, "56": 0.80, "57": 0.80, "58": 0.80, "59": 0.80, "60": 0.80, "61": 0.80, "62": 0.80, "63": 0.80, "64": 0.80, "65": 0.80, "66": 0.80, "67": 0.80, "68": 0.80, "69": 0.80, "70": 0.80, "71": 0.80, "72": 0.80, "73": 0.80, "74": 0.80, "75": 0.80, "76": 0.80, "77": 0.80, "78": 0.80, "79": 0.80, "80": 0.80 },
			"3": { "12": 0.23, "13": 0.23, "14": 0.23, "15": 0.23, "16": 0.22, "17": 0.21, "18": 0.20, "19": 0.20, "20": 0.20, "21": 0.215, "22": 0.20, "23": 0.21, "24": 0.225, "25": 0.22, "26": 0.215, "27": 0.212, "28": 0.202, "29": 0.19, "30": 0.211, "31": 0.60, "32": 0.60, "33": 0.60, "34": 0.60, "35": 0.60, "36": 0.60, "37": 0.75, "38": 0.75, "39": 0.75, "40": 0.75, "41": 0.75, "42": 0.75, "43": 0.75, "44": 0.75, "45": 0.75, "46": 0.75, "47": 0.75, "48": 0.75, "49": 0.75, "50": 0.75, "51": 0.75, "52": 0.75, "53": 0.75, "54": 0.75, "55": 0.75, "56": 1.30, "57": 0.75, "58": 0.75, "59": 0.75, "60": 0.75, "61": 0.75, "62": 0.75, "63": 0.75, "64": 0.75, "65": 0.75, "66": 0.75, "67": 0.75, "68": 0.75, "69": 0.75, "70": 0.75, "71": 0.75, "72": 0.75, "73": 0.75, "74": 0.75, "75": 0.75, "76": 0.75, "77": 0.75, "78": 0.75, "79": 0.75, "80": 0.75 },
			"4": { "12": 0.22, "13": 0.22, "14": 0.22, "15": 0.22, "16": 0.21, "17": 0.20, "18": 0.20, "19": 0.20, "20": 0.20, "21": 0.20, "22": 0.20, "23": 0.23, "24": 0.20, "25": 0.20, "26": 0.202, "27": 0.204, "28": 0.203, "29": 0.202, "30": 0.202, "31": 0.60, "32": 0.60, "33": 0.60, "34": 0.60, "35": 0.60, "36": 0.60, "37": 0.70, "38": 0.70, "39": 0.70, "40": 0.70, "41": 0.70, "42": 0.70, "43": 0.70, "44": 0.70, "45": 0.70, "46": 0.70, "47": 0.70, "48": 0.70, "49": 0.70, "50": 0.70, "51": 0.70, "52": 0.70, "53": 0.70, "54": 0.70, "55": 0.70, "56": 0.70, "57": 0.70, "58": 0.70, "59": 0.70, "60": 0.70, "61": 0.70, "62": 0.70, "63": 0.70, "64": 0.70, "65": 0.70, "66": 0.70, "67": 0.70, "68": 0.70, "69": 0.70, "70": 0.70, "71": 0.70, "72": 0.70, "73": 0.70, "74": 0.70, "75": 0.70, "76": 0.70, "77": 0.70, "78": 0.70, "79": 0.70, "80": 0.70 },
			"5": { "12": 0.23, "13": 0.23, "14": 0.23, "15": 0.23, "16": 0.23, "17": 0.23, "18": 0.21, "19": 0.21, "20": 0.21, "21": 0.21, "22": 0.21, "23": 0.215, "24": 0.215, "25": 0.21, "26": 0.195, "27": 0.1935, "28": 0.193, "29": 0.195, "30": 0.196, "31": 0.42, "32": 0.42, "33": 0.42, "34": 0.42, "35": 0.42, "36": 0.42, "37": 0.60, "38": 0.60, "39": 0.60, "40": 0.60, "41": 0.60, "42": 0.60, "43": 0.60, "44": 0.60, "45": 0.60, "46": 0.60, "47": 0.60, "48": 0.60, "49": 0.60, "50": 0.60, "51": 0.60, "52": 0.60, "53": 0.60, "54": 0.60, "55": 0.60, "56": 0.60, "57": 0.60, "58": 0.60, "59": 0.60, "60": 0.60, "61": 0.60, "62": 0.60, "63": 0.60, "64": 0.60, "65": 0.60, "66": 0.60, "67": 0.60, "68": 0.60, "69": 0.60, "70": 0.60, "71": 0.60, "72": 0.60, "73": 0.60, "74": 0.60, "75": 0.60, "76": 0.60, "77": 0.60, "78": 0.60, "79": 0.60, "80": 0.60 },
			"6": { "12": 0.50, "13": 0.50, "14": 0.50, "15": 0.50, "16": 0.50, "17": 0.50, "18": 0.50, "19": 0.50, "20": 0.45, "21": 0.45, "22": 0.45, "23": 0.45, "24": 0.45, "25": 0.45, "26": 0.45, "27": 0.45, "28": 0.45, "29": 0.45, "30": 0.45, "31": 0.40, "32": 0.40, "33": 0.40, "34": 0.40, "35": 0.40, "36": 0.40, "37": 0.50, "38": 0.50, "39": 0.50, "40": 0.50, "41": 0.50, "42": 0.50, "43": 0.50, "44": 0.50, "45": 0.50, "46": 0.50, "47": 0.50, "48": 0.50, "49": 0.50, "50": 0.50, "51": 0.50, "52": 0.50, "53": 0.50, "54": 0.50, "55": 0.50, "56": 0.50, "57": 0.50, "58": 0.50, "59": 0.50, "60": 0.50, "61": 0.50, "62": 0.50, "63": 0.50, "64": 0.50, "65": 0.50, "66": 0.50, "67": 0.50, "68": 0.50, "69": 0.50, "70": 0.50, "71": 0.50, "72": 0.50, "73": 0.50, "74": 0.50, "75": 0.50, "76": 0.50, "77": 0.50, "78": 0.50, "79": 0.50, "80": 0.50 },
		};

		let cBowPos1 = {
			"1": { "12": { "x": 0.13, "y": 0.443 }, "13": { "x": 0.13, "y": 0.443 }, "14": { "x": 0.13, "y": 0.443 }, "15": { "x": 0.13, "y": 0.443 }, "16": { "x": 0.13, "y": 0.443 }, "17": { "x": 0.13, "y": 0.443 }, "18": { "x": 0.13, "y": 0.443 }, "19": { "x": 0.13, "y": 0.443 }, "20": { "x": 0.13, "y": 0.443 }, "21": { "x": 0.13, "y": 0.443 }, "22": { "x": 0.13, "y": 0.443 }, "23": { "x": 0.13, "y": 0.443 }, "24": { "x": 0.13, "y": 0.443 }, "25": { "x": 0.13, "y": 0.443 }, "26": { "x": 0.13, "y": 0.443 }, "27": { "x": 0.13, "y": 0.443 }, "28": { "x": 0.13, "y": 0.443 }, "29": { "x": 0.13, "y": 0.443 }, "30": { "x": 0.13, "y": 0.443 }, "31": 0.77, "32": 0.77, "33": 0.77, "34": 0.77, "35": 0.77, "36": 0.77, "37": 0.77, "38": 0.77, "39": 0.77, "40": 0.77, "41": 0.77, "42": 0.77, "43": 0.77, "44": 0.77, "45": 0.77, "46": 0.77, "47": 0.77, "48": 0.77, "49": 0.77, "50": 0.77, "51": 0.77, "52": 0.77, "53": 0.77, "54": 0.77, "55": 0.77, "56": 0.77, "57": 0.77, "58": 0.77, "59": 0.77, "60": 0.77, "61": 0.77, "62": 0.77, "63": 0.77, "64": 0.77, "65": 0.77, "66": 0.77, "67": 0.77, "68": 0.77, "69": 0.65, "70": 0.77, "71": 0.77, "72": 0.77, "73": 0.77, "74": 0.77, "75": 0.77, "76": 0.77, "77": 0.77, "78": 0.77, "79": 0.77, "80": 0.77 },
			"2": { "6": { "x": 0.2715, "y": 0.402 }, "7": { "x": 0.2715, "y": 0.402 }, "8": { "x": 0.2715, "y": 0.402 }, "9": { "x": 0.2715, "y": 0.402 }, "10": { "x": 0.2715, "y": 0.402 }, "11": { "x": 0.2715, "y": 0.402 }, "12": { "x": 0.2715, "y": 0.402 }, "13": { "x": 0.275, "y": 0.400 }, "14": { "x": 0.275, "y": 0.400 }, "15": { "x": 0.28, "y": 0.400 }, "16": { "x": 0.272, "y": 0.398 }, "17": { "x": 0.275, "y": 0.400 }, "18": { "x": 0.271, "y": 0.397 }, "19": { "x": 0.274, "y": 0.397 }, "20": { "x": 0.274, "y": 0.395 }, "21": { "x": 0.274, "y": 0.395 }, "22": { "x": 0.274, "y": 0.395 }, "23": { "x": 0.274, "y": 0.395 }, "24": { "x": 0.268, "y": 0.3918 }, "25": { "x": 0.285, "y": 0.400 }, "26": { "x": 0.276, "y": 0.395 }, "27": { "x": 0.275, "y": 0.395 }, "28": { "x": 0.275, "y": 0.395 }, "29": { "x": 0.275, "y": 0.395 }, "30": { "x": 0.275, "y": 0.394 }, "31": 0.70, "32": 0.70, "33": 0.70, "34": 0.70, "35": 0.70, "36": 0.70, "37": 0.80, "38": 0.80, "39": 0.80, "40": 0.80, "41": 0.80, "42": 0.80, "43": 0.80, "44": 0.80, "45": 0.80, "46": 0.80, "47": 0.80, "48": 0.80, "49": 0.80, "50": 0.80, "51": 0.80, "52": 0.80, "53": 0.80, "54": 0.80, "55": 0.80, "56": 0.80, "57": 0.80, "58": 0.80, "59": 0.80, "60": 0.80, "61": 0.80, "62": 0.80, "63": 0.80, "64": 0.80, "65": 0.80, "66": 0.80, "67": 0.80, "68": 0.80, "69": 0.80, "70": 0.80, "71": 0.80, "72": 0.80, "73": 0.80, "74": 0.80, "75": 0.80, "76": 0.80, "77": 0.80, "78": 0.80, "79": 0.80, "80": 0.80 },
			"3": { "6": { "x": 0.285, "y": 0.412 }, "7": { "x": 0.285, "y": 0.412 }, "8": { "x": 0.285, "y": 0.412 }, "9": { "x": 0.285, "y": 0.412 }, "10": { "x": 0.285, "y": 0.412 }, "11": { "x": 0.285, "y": 0.412 }, "12": { "x": 0.285, "y": 0.412 }, "13": { "x": 0.285, "y": 0.412 }, "14": { "x": 0.278, "y": 0.405 }, "15": { "x": 0.278, "y": 0.405 }, "16": { "x": 0.278, "y": 0.405 }, "17": { "x": 0.275, "y": 0.405 }, "18": { "x": 0.27, "y": 0.405 }, "19": { "x": 0.27, "y": 0.405 }, "20": { "x": 0.27, "y": 0.4015 }, "21": { "x": 0.27, "y": 0.400 }, "22": { "x": 0.27, "y": 0.400 }, "23": { "x": 0.275, "y": 0.402 }, "24": { "x": 0.28, "y": 0.402 }, "25": { "x": 0.27, "y": 0.405 }, "26": { "x": 0.276, "y": 0.405 }, "27": { "x": 0.276, "y": 0.405 }, "28": { "x": 0.270, "y": 0.403 }, "29": { "x": 0.266, "y": 0.402 }, "30": { "x": 0.274, "y": 0.404 }, "31": 0.60, "32": 0.60, "33": 0.60, "34": 0.60, "35": 0.60, "36": 0.60, "37": 0.75, "38": 0.75, "39": 0.75, "40": 0.75, "41": 0.75, "42": 0.75, "43": 0.75, "44": 0.75, "45": 0.75, "46": 0.75, "47": 0.75, "48": 0.75, "49": 0.75, "50": 0.75, "51": 0.75, "52": 0.75, "53": 0.75, "54": 0.75, "55": 0.75, "56": 1.30, "57": 0.75, "58": 0.75, "59": 0.75, "60": 0.75, "61": 0.75, "62": 0.75, "63": 0.75, "64": 0.75, "65": 0.75, "66": 0.75, "67": 0.75, "68": 0.75, "69": 0.75, "70": 0.75, "71": 0.75, "72": 0.75, "73": 0.75, "74": 0.75, "75": 0.75, "76": 0.75, "77": 0.75, "78": 0.75, "79": 0.75, "80": 0.75 },
			"4": { "12": { "x": 0.285, "y": 0.414 }, "13": { "x": 0.285, "y": 0.414 }, "14": { "x": 0.285, "y": 0.414 }, "15": { "x": 0.28, "y": 0.409 }, "16": { "x": 0.28, "y": 0.409 }, "17": { "x": 0.27, "y": 0.405 }, "18": { "x": 0.27, "y": 0.405 }, "19": { "x": 0.27, "y": 0.405 }, "20": { "x": 0.27, "y": 0.405 }, "21": { "x": 0.27, "y": 0.405 }, "22": { "x": 0.27, "y": 0.405 }, "23": { "x": 0.27, "y": 0.401 }, "24": { "x": 0.27, "y": 0.405 }, "25": { "x": 0.27, "y": 0.405 }, "26": { "x": 0.272, "y": 0.406 }, "27": { "x": 0.272, "y": 0.406 }, "28": { "x": 0.272, "y": 0.406 }, "29": { "x": 0.272, "y": 0.405 }, "30": { "x": 0.271, "y": 0.405 }, "31": 0.60, "32": 0.60, "33": 0.60, "34": 0.60, "35": 0.60, "36": 0.60, "37": 0.70, "38": 0.70, "39": 0.70, "40": 0.70, "41": 0.70, "42": 0.70, "43": 0.70, "44": 0.70, "45": 0.70, "46": 0.70, "47": 0.70, "48": 0.70, "49": 0.70, "50": 0.70, "51": 0.70, "52": 0.70, "53": 0.70, "54": 0.70, "55": 0.70, "56": 0.70, "57": 0.70, "58": 0.70, "59": 0.70, "60": 0.70, "61": 0.70, "62": 0.70, "63": 0.70, "64": 0.70, "65": 0.70, "66": 0.70, "67": 0.70, "68": 0.70, "69": 0.70, "70": 0.70, "71": 0.70, "72": 0.70, "73": 0.70, "74": 0.70, "75": 0.70, "76": 0.70, "77": 0.70, "78": 0.70, "79": 0.70, "80": 0.70 },
			"5": { "12": { "x": 0.28, "y": 0.4177 }, "13": { "x": 0.28, "y": 0.4165 }, "14": { "x": 0.28, "y": 0.4155 }, "15": { "x": 0.28, "y": 0.414 }, "16": { "x": 0.28, "y": 0.413 }, "17": { "x": 0.28, "y": 0.413 }, "18": { "x": 0.275, "y": 0.409 }, "19": { "x": 0.275, "y": 0.408 }, "20": { "x": 0.275, "y": 0.405 }, "21": { "x": 0.275, "y": 0.4025 }, "22": { "x": 0.275, "y": 0.4025 }, "23": { "x": 0.279, "y": 0.4025 }, "24": { "x": 0.279, "y": 0.4025 }, "25": { "x": 0.275, "y": 0.405 }, "26": { "x": 0.27, "y": 0.4085 }, "27": { "x": 0.268, "y": 0.407 }, "28": { "x": 0.268, "y": 0.4068 }, "29": { "x": 0.268, "y": 0.4065 }, "30": { "x": 0.268, "y": 0.405 }, "31": 0.42, "32": 0.42, "33": 0.42, "34": 0.42, "35": 0.42, "36": 0.42, "37": 0.60, "38": 0.60, "39": 0.60, "40": 0.60, "41": 0.60, "42": 0.60, "43": 0.60, "44": 0.60, "45": 0.60, "46": 0.60, "47": 0.60, "48": 0.60, "49": 0.60, "50": 0.60, "51": 0.60, "52": 0.60, "53": 0.60, "54": 0.60, "55": 0.60, "56": 0.60, "57": 0.60, "58": 0.60, "59": 0.60, "60": 0.60, "61": 0.60, "62": 0.60, "63": 0.60, "64": 0.60, "65": 0.60, "66": 0.60, "67": 0.60, "68": 0.60, "69": 0.60, "70": 0.60, "71": 0.60, "72": 0.60, "73": 0.60, "74": 0.60, "75": 0.60, "76": 0.60, "77": 0.60, "78": 0.60, "79": 0.60, "80": 0.60 },
			"6": { "12": { "x": 0.13, "y": 0.443 }, "13": { "x": 0.13, "y": 0.443 }, "14": { "x": 0.13, "y": 0.443 }, "15": { "x": 0.13, "y": 0.443 }, "16": { "x": 0.13, "y": 0.443 }, "17": { "x": 0.13, "y": 0.443 }, "18": { "x": 0.13, "y": 0.443 }, "19": { "x": 0.13, "y": 0.443 }, "20": { "x": 0.13, "y": 0.443 }, "21": { "x": 0.13, "y": 0.443 }, "22": { "x": 0.13, "y": 0.443 }, "23": { "x": 0.13, "y": 0.443 }, "24": { "x": 0.13, "y": 0.443 }, "25": { "x": 0.13, "y": 0.443 }, "26": { "x": 0.13, "y": 0.443 }, "27": { "x": 0.13, "y": 0.443 }, "28": { "x": 0.13, "y": 0.443 }, "29": { "x": 0.13, "y": 0.443 }, "30": { "x": 0.13, "y": 0.443 }, "31": 0.40, "32": 0.40, "33": 0.40, "34": 0.40, "35": 0.40, "36": 0.40, "37": 0.50, "38": 0.50, "39": 0.50, "40": 0.50, "41": 0.50, "42": 0.50, "43": 0.50, "44": 0.50, "45": 0.50, "46": 0.50, "47": 0.50, "48": 0.50, "49": 0.50, "50": 0.50, "51": 0.50, "52": 0.50, "53": 0.50, "54": 0.50, "55": 0.50, "56": 0.50, "57": 0.50, "58": 0.50, "59": 0.50, "60": 0.50, "61": 0.50, "62": 0.50, "63": 0.50, "64": 0.50, "65": 0.50, "66": 0.50, "67": 0.50, "68": 0.50, "69": 0.50, "70": 0.50, "71": 0.50, "72": 0.50, "73": 0.50, "74": 0.50, "75": 0.50, "76": 0.50, "77": 0.50, "78": 0.50, "79": 0.50, "80": 0.50 }
		};

		let cBowRotation1 = {
			"1": { "12": 0.77, "13": 0.77, "14": 0.77, "15": 0.77, "16": 0.77, "17": 0.77, "18": 0.77, "19": 0.77, "20": 0.77, "21": 0.77, "22": 0.77, "23": 0.77, "24": 0.77, "25": 0.77, "26": 0.77, "27": 0.77, "28": 0.77, "29": 0.77, "30": 0.77, "31": 0.77, "32": 0.77, "33": 0.77, "34": 0.77, "35": 0.77, "36": 0.77, "37": 0.77, "38": 0.77, "39": 0.77, "40": 0.77, "41": 0.77, "42": 0.77, "43": 0.77, "44": 0.77, "45": 0.77, "46": 0.77, "47": 0.77, "48": 0.77, "49": 0.77, "50": 0.77, "51": 0.77, "52": 0.77, "53": 0.77, "54": 0.77, "55": 0.77, "56": 0.77, "57": 0.77, "58": 0.77, "59": 0.77, "60": 0.77, "61": 0.77, "62": 0.77, "63": 0.77, "64": 0.77, "65": 0.77, "66": 0.77, "67": 0.77, "68": 0.77, "69": 0.65, "70": 0.77, "71": 0.77, "72": 0.77, "73": 0.77, "74": 0.77, "75": 0.77, "76": 0.77, "77": 0.77, "78": 0.77, "79": 0.77, "80": 0.77 },
			"2": { "12": 0.37, "13": 0.36, "14": 0.345, "15": 0.34, "16": 0.34, "17": 0.33, "18": 0.325, "19": 0.31, "20": 0.31, "21": 0.31, "22": 0.31, "23": 0.31, "24": 0.31, "25": 0.30, "26": 0.307, "27": 0.306, "28": 0.304, "29": 0.303, "30": 0.30, "31": 0.70, "32": 0.70, "33": 0.70, "34": 0.70, "35": 0.70, "36": 0.70, "37": 0.80, "38": 0.80, "39": 0.80, "40": 0.80, "41": 0.80, "42": 0.80, "43": 0.80, "44": 0.80, "45": 0.80, "46": 0.80, "47": 0.80, "48": 0.80, "49": 0.80, "50": 0.80, "51": 0.80, "52": 0.80, "53": 0.80, "54": 0.80, "55": 0.80, "56": 0.80, "57": 0.80, "58": 0.80, "59": 0.80, "60": 0.80, "61": 0.80, "62": 0.80, "63": 0.80, "64": 0.80, "65": 0.80, "66": 0.80, "67": 0.80, "68": 0.80, "69": 0.80, "70": 0.80, "71": 0.80, "72": 0.80, "73": 0.80, "74": 0.80, "75": 0.80, "76": 0.80, "77": 0.80, "78": 0.80, "79": 0.80, "80": 0.80 },
			"4": { "12": 0.47, "13": 0.43, "14": 0.43, "15": 0.44, "16": 0.43, "17": 0.40, "18": 0.40, "19": 0.40, "20": 0.40, "21": 0.38, "22": 0.38, "23": 0.40, "24": 0.40, "25": 0.40, "26": 0.42, "27": 0.42, "28": 0.41, "29": 0.41, "30": 0.40, "31": 0.60, "32": 0.60, "33": 0.60, "34": 0.60, "35": 0.60, "36": 0.60, "37": 0.70, "38": 0.70, "39": 0.70, "40": 0.70, "41": 0.70, "42": 0.70, "43": 0.70, "44": 0.70, "45": 0.70, "46": 0.70, "47": 0.70, "48": 0.70, "49": 0.70, "50": 0.70, "51": 0.70, "52": 0.70, "53": 0.70, "54": 0.70, "55": 0.70, "56": 0.70, "57": 0.70, "58": 0.70, "59": 0.70, "60": 0.70, "61": 0.70, "62": 0.70, "63": 0.70, "64": 0.70, "65": 0.70, "66": 0.70, "67": 0.70, "68": 0.70, "69": 0.70, "70": 0.70, "71": 0.70, "72": 0.70, "73": 0.70, "74": 0.70, "75": 0.70, "76": 0.70, "77": 0.70, "78": 0.70, "79": 0.70, "80": 0.70 },
			"3": { "12": 0.4000, "13": 0.3909, "14": 0.4000, "15": 0.3800, "16": 0.3840, "17": 0.3800, "18": 0.3900, "19": 0.3800, "20": 0.3800, "21": 0.3750, "22": 0.3800, "23": 0.3680, "24": 0.3500, "25": 0.4100, "26": 0.3950, "27": 0.3950, "28": 0.4000, "29": 0.4000, "30": 0.3800, "31": 0.60, "32": 0.60, "33": 0.60, "34": 0.60, "35": 0.60, "36": 0.60, "37": 0.75, "38": 0.75, "39": 0.75, "40": 0.75, "41": 0.75, "42": 0.75, "43": 0.75, "44": 0.75, "45": 0.75, "46": 0.75, "47": 0.75, "48": 0.75, "49": 0.75, "50": 0.75, "51": 0.75, "52": 0.75, "53": 0.75, "54": 0.75, "55": 0.75, "56": 1.30, "57": 0.75, "58": 0.75, "59": 0.75, "60": 0.75, "61": 0.75, "62": 0.75, "63": 0.75, "64": 0.75, "65": 0.75, "66": 0.75, "67": 0.75, "68": 0.75, "69": 0.75, "70": 0.75, "71": 0.75, "72": 0.75, "73": 0.75, "74": 0.75, "75": 0.75, "76": 0.75, "77": 0.75, "78": 0.75, "79": 0.75, "80": 0.75 },
			"5": { "12": 0.490, "13": 0.482, "14": 0.475, "15": 0.46, "16": 0.44, "17": 0.44, "18": 0.43, "19": 0.41, "20": 0.41, "21": 0.41, "22": 0.38, "23": 0.37, "24": 0.37, "25": 0.40, "26": 0.45, "27": 0.44, "28": 0.43, "29": 0.43, "30": 0.42, "31": 0.40, "32": 0.42, "33": 0.42, "34": 0.42, "35": 0.42, "36": 0.42, "37": 0.60, "38": 0.60, "39": 0.60, "40": 0.60, "41": 0.60, "42": 0.60, "43": 0.60, "44": 0.60, "45": 0.60, "46": 0.60, "47": 0.60, "48": 0.60, "49": 0.60, "50": 0.60, "51": 0.60, "52": 0.60, "53": 0.60, "54": 0.60, "55": 0.60, "56": 0.60, "57": 0.60, "58": 0.60, "59": 0.60, "60": 0.60, "61": 0.60, "62": 0.60, "63": 0.60, "64": 0.60, "65": 0.60, "66": 0.60, "67": 0.60, "68": 0.60, "69": 0.60, "70": 0.60, "71": 0.60, "72": 0.60, "73": 0.60, "74": 0.60, "75": 0.60, "76": 0.60, "77": 0.60, "78": 0.60, "79": 0.60, "80": 0.60 },
			"6": { "12": 0.50, "13": 0.50, "14": 0.50, "15": 0.50, "16": 0.50, "17": 0.50, "18": 0.50, "19": 0.50, "20": 0.45, "21": 0.45, "22": 0.45, "23": 0.45, "24": 0.45, "25": 0.45, "26": 0.45, "27": 0.45, "28": 0.45, "29": 0.45, "30": 0.45, "31": 0.40, "32": 0.40, "33": 0.40, "34": 0.40, "35": 0.40, "36": 0.40, "37": 0.50, "38": 0.50, "39": 0.50, "40": 0.50, "41": 0.50, "42": 0.50, "43": 0.50, "44": 0.50, "45": 0.50, "46": 0.50, "47": 0.50, "48": 0.50, "49": 0.50, "50": 0.50, "51": 0.50, "52": 0.50, "53": 0.50, "54": 0.50, "55": 0.50, "56": 0.50, "57": 0.50, "58": 0.50, "59": 0.50, "60": 0.50, "61": 0.50, "62": 0.50, "63": 0.50, "64": 0.50, "65": 0.50, "66": 0.50, "67": 0.50, "68": 0.50, "69": 0.50, "70": 0.50, "71": 0.50, "72": 0.50, "73": 0.50, "74": 0.50, "75": 0.50, "76": 0.50, "77": 0.50, "78": 0.50, "79": 0.50, "80": 0.50 }
		};

		//Front Trim scale in case of Regular Roof
		let trimScale = { "1": 0.01, "2": 0.012, "3": (params.p_w < 23) ? 0.004 : 0.028, "4": (params.p_w == 23) ? 0.02 : 0.01, "5": (params.p_w < 19 || params.p_w > 20) ? 0.0265 : 0.01, "6": 0.01 };

		let trimScaleR = {
			"1": { "6": -0.070, "7": -0.090, "8": -0.120, "9": -0.120, "10": -0.120, "11": -0.120, "12": 0.00, "13": 0.00, "14": -0.08, "15": -0.15, "16": -0.15, "17": -0.15, "18": -0.12, "19": -0.12, "20": -0.10, "21": -0.10, "22": -0.08, "23": -0.08, "24": -0.06, "25": -0.06, "26": -0.04, "27": -0.03, "28": -0.02, "29": -0.01, "30": 0.00, "31": 0.02, "32": 0.00, "33": 0.01, "34": 0.01, "35": 0.01, "36": 0.01, "37": 0.03, "38": 0.03, "39": 0.03, "40": 0.03, "41": 0.03, "42": 0.03, "43": 0.03, "44": 0.00, "45": -0.02, "46": -0.02, "47": -0.02, "48": -0.06, "49": -0.08, "50": -0.08, "51": -0.08, "52": -0.08, "53": -0.08, "54": -0.08, "55": -0.08, "56": -0.08, "57": -0.06, "58": -0.06, "59": -0.05, "60": -0.03, "61": -0.01, "62": -0.01, "63": 0.00, "64": 0.02, "65": 0.03, "66": 0.03, "67": 0.03, "68": 0.03, "69": 0.03, "70": 0.03, "71": -0.02, "72": -0.02, "73": -0.03, "74": -0.03, "75": -0.03, "76": -0.03, "77": -0.03, "78": 0.00, "79": 0.00, "80": 0.00 },
			"2": { "6": -0.070, "7": -0.050, "8": -0.080, "9": -0.079, "10": -0.055, "11": -0.055, "12": -0.02, "13": 0.00, "14": 0.01, "15": 0.02, "16": -0.05, "17": -0.03, "18": -0.03, "19": -0.01, "20": 0.00, "21": -0.03, "22": -0.02, "23": 0.00, "24": 0.00, "25": 0.00, "26": 0.01, "27": 0.03, "28": -0.01, "29": 0.01, "30": -0.025, "31": -0.01, "32": 0.01, "33": 0.01, "34": 0.01, "35": 0.01, "36": 0.02, "37": 0.02, "38": 0.02, "39": 0.02, "40": 0.02, "41": 0.02, "42": 0.01, "43": -0.01, "44": -0.04, "45": -0.08, "46": -0.08, "47": -0.08, "48": -0.08, "49": -0.08, "50": -0.06, "51": -0.06, "52": -0.06, "53": -0.06, "54": -0.06, "55": -0.04, "56": -0.02, "57": -0.01, "58": 0.00, "59": 0.03, "60": 0.05, "61": 0.02, "62": 0.01, "63": 0.01, "64": 0.02, "65": 0.04, "66": 0.03, "67": 0.02, "68": 0.00, "69": -0.02, "70": -0.08, "71": -0.10, "72": -0.08, "73": -0.06, "74": -0.06, "75": -0.03, "76": -0.02, "77": -0.00, "78": 0.02, "79": 0.03, "80": 0.03 },
			"3": { "6": -0.070, "7": -0.070, "8": -0.070, "9": -0.080, "10": -0.080, "11": -0.080, "12": -0.01, "13": 0.01, "14": -0.01, "15": 0.02, "16": -0.02, "17": -0.03, "18": -0.04, "19": -0.06, "20": -0.05, "21": -0.03, "22": -0.04, "23": -0.04, "24": -0.02, "25": -0.02, "26": -0.02, "27": -0.04, "28": -0.065, "29": -0.09, "30": -0.11, "31": -0.10, "32": -0.08, "33": -0.08, "34": -0.08, "35": -0.07, "36": -0.07, "37": -0.07, "38": -0.05, "39": -0.2, "40": 0.01, "41": 0.04, "42": 0.03, "43": 0.01, "44": -0.02, "45": -0.04, "46": -0.04, "47": -0.04, "48": -0.05, "49": -0.06, "50": -0.06, "51": -0.06, "52": -0.06, "53": -0.05, "54": -0.02, "55": 0.02, "56": 0.03, "57": 0.03, "58": 0.03, "59": 0.03, "60": 0.04, "61": 0.02, "62": 0.04, "63": 0.03, "64": 0.05, "65": 0.03, "66": 0.05, "67": 0.04, "68": 0.03, "69": 0.02, "70": -0.01, "71": -0.05, "72": -0.08, "73": -0.10, "74": -0.08, "75": -0.06, "76": -0.03, "77": -0.00, "78": 0.02, "79": 0.04, "80": 0.04 },
			"4": { "6": -0.070, "7": -0.060, "8": -0.070, "9": -0.075, "10": -0.075, "11": -0.075, "12": -0.01, "13": 0.02, "14": 0.02, "15": 0.00, "16": -0.01, "17": -0.02, "18": -0.03, "19": -0.03, "20": -0.04, "21": -0.02, "22": -0.02, "23": -0.00, "24": 0.00, "25": 0.00, "26": 0.03, "27": 0.016, "28": 0.005, "29": -0.005, "30": -0.02, "31": -0.02, "32": -0.04, "33": -0.04, "34": -0.05, "35": -0.04, "36": -0.05, "37": -0.05, "38": -0.03, "39": 0.01, "40": 0.06, "41": 0.06, "42": 0.05, "43": 0.03, "44": 0.02, "45": 0.00, "46": 0.00, "47": 0.00, "48": -0.01, "49": -0.01, "50": -0.04, "51": -0.05, "52": -0.04, "53": 0.00, "54": 0.05, "55": 0.05, "56": 0.05, "57": 0.04, "58": 0.04, "59": 0.03, "60": 0.00, "61": -0.02, "62": -0.03, "63": -0.05, "64": -0.06, "65": -0.03, "66": 0.01, "67": 0.04, "68": 0.08, "69": 0.08, "70": 0.08, "71": 0.05, "72": 0.05, "73": 0.04, "74": 0.02, "75": 0.02, "76": -0.04, "77": -0.00, "78": 0.02, "79": 0.06, "80": 0.10 },
			"5": { "6": -0.060, "7": -0.055, "8": -0.055, "9": -0.060, "10": -0.060, "11": -0.060, "12": 0.02, "13": 0.02, "14": 0.02, "15": 0.03, "16": 0.03, "17": 0.03, "18": -0.01, "19": 0.01, "20": 0.01, "21": 0.01, "22": 0.01, "23": 0.01, "24": 0.01, "25": 0.01, "26": 0.02, "27": 0.026, "28": 0.03, "29": 0.03, "30": 0.037, "31": 0.04, "32": 0.05, "33": 0.05, "34": 0.05, "35": 0.05, "36": 0.05, "37": 0.05, "38": 0.07, "39": 0.07, "40": 0.08, "41": 0.08, "42": 0.09, "43": 0.09, "44": 0.09, "45": 0.05, "46": 0.05, "47": 0.05, "48": 0.06, "49": 0.06, "50": 0.06, "51": 0.07, "52": 0.07, "53": 0.07, "54": 0.07, "55": 0.08, "56": 0.08, "57": 0.07, "58": 0.07, "59": -0.25, "60": 0.05, "61": 0.06, "62": 0.07, "63": 0.07, "64": 0.07, "65": 0.07, "66": 0.07, "67": 0.08, "68": 0.08, "69": 0.08, "70": 0.09, "71": 0.10, "72": 0.10, "73": 0.12, "74": 0.12, "75": 0.12, "76": 0.12, "77": 0.12, "78": 0.14, "79": 0.14, "80": 0.14 },
			"6": { "6": -0.045, "7": -0.050, "8": -0.050, "9": -0.050, "10": -0.050, "11": -0.035, "12": 0.04, "13": 0.02, "14": -0.01, "15": 0.01, "16": 0.03, "17": 0.04, "18": 0.03, "19": 0.04, "20": 0.02, "21": 0.04, "22": 0.06, "23": 0.05, "24": 0.03, "25": 0.03, "26": 0.05, "27": 0.06, "28": 0.06, "29": 0.06, "30": 0.05, "31": 0.06, "32": 0.08, "33": 0.07, "34": 0.07, "35": 0.02, "36": 0.00, "37": 0.00, "38": 0.01, "39": 0.03, "40": 0.05, "41": 0.08, "42": 0.10, "43": 0.08, "44": 0.10, "45": 0.12, "46": 0.12, "47": 0.10, "48": 0.04, "49": 0.02, "50": 0.00, "51": 0.05, "52": 0.12, "53": 0.12, "54": 0.10, "55": 0.08, "56": 0.12, "57": 0.10, "58": 0.06, "59": 0.06, "60": 0.02, "61": 0.08, "62": 0.06, "63": 0.06, "64": 0.08, "65": 0.12, "66": 0.14, "67": 0.16, "68": 0.18, "69": 0.16, "70": 0.14, "71": 0.10, "72": 0.08, "73": 0.04, "74": 0.06, "75": 0.08, "76": 0.12, "77": 0.14, "78": 0.16, "79": 0.18, "80": 0.18 },
		};

		//first small trim curve in case of Regular Roof
		let curvedTrimScale = {
			"1": { "12": 0.77, "13": 0.77, "14": 0.77, "15": 0.77, "16": 0.77, "17": 0.77, "18": 0.77, "19": 0.77, "20": 0.77, "21": 0.77, "22": 0.77, "23": 0.77, "24": 0.77, "25": 0.77, "26": 0.77, "27": 0.77, "28": 0.77, "29": 0.77, "30": 0.77, "31": 0.77, "32": 0.77, "33": 0.77, "34": 0.77, "35": 0.77, "36": 0.77, "37": 0.77, "38": 0.77, "39": 0.77, "40": 0.77, "41": 0.77, "42": 0.77, "43": 0.77, "44": 0.77, "45": 0.77, "46": 0.77, "47": 0.77, "48": 0.77, "49": 0.77, "50": 0.77, "51": 0.77, "52": 0.77, "53": 0.77, "54": 0.77, "55": 0.77, "56": 0.77, "57": 0.77, "58": 0.77, "59": 0.77, "60": 0.77, "61": 0.77, "62": 0.77, "63": 0.77, "64": 0.77, "65": 0.77, "66": 0.77, "67": 0.77, "68": 0.77, "69": 0.65, "70": 0.77, "71": 0.77, "72": 0.77, "73": 0.77, "74": 0.77, "75": 0.77, "76": 0.77, "77": 0.77, "78": 0.77, "79": 0.77, "80": 0.77 },
			"2": { "12": 0.077, "13": 0.075, "14": 0.078, "15": 0.081, "16": 0.075, "17": 0.075, "18": 0.082, "19": 0.08, "20": 0.085, "21": 0.083, "22": 0.085, "23": 0.085, "24": 0.068, "25": 0.068, "26": 0.074, "27": 0.072, "28": 0.074, "29": 0.074, "30": 0.076, "31": 0.60, "32": 0.60, "33": 0.60, "34": 0.60, "35": 0.60, "36": 0.60, "37": 0.75, "38": 0.75, "39": 0.75, "40": 0.75, "41": 0.75, "42": 0.75, "43": 0.75, "44": 0.75, "45": 0.75, "46": 0.75, "47": 0.75, "48": 0.75, "49": 0.75, "50": 0.75, "51": 0.75, "52": 0.75, "53": 0.75, "54": 0.75, "55": 0.75, "56": 1.30, "57": 0.75, "58": 0.75, "59": 0.75, "60": 0.75, "61": 0.75, "62": 0.75, "63": 0.75, "64": 0.75, "65": 0.75, "66": 0.75, "67": 0.75, "68": 0.75, "69": 0.75, "70": 0.75, "71": 0.75, "72": 0.75, "73": 0.75, "74": 0.75, "75": 0.75, "76": 0.75, "77": 0.75, "78": 0.75, "79": 0.75, "80": 0.75 },
			"3": { "12": 0.069, "13": 0.072, "14": 0.07, "15": 0.068, "16": 0.074, "17": 0.067, "18": 0.06, "19": 0.058, "20": 0.065, "21": 0.068, "22": 0.06, "23": 0.073, "24": 0.075, "25": 0.075, "26": 0.065, "27": 0.06, "28": 0.0608, "29": 0.0608, "30": 0.058, "31": 0.60, "32": 0.60, "33": 0.60, "34": 0.60, "35": 0.60, "36": 0.60, "37": 0.75, "38": 0.75, "39": 0.75, "40": 0.75, "41": 0.75, "42": 0.75, "43": 0.75, "44": 0.75, "45": 0.75, "46": 0.75, "47": 0.75, "48": 0.75, "49": 0.75, "50": 0.75, "51": 0.75, "52": 0.75, "53": 0.75, "54": 0.75, "55": 0.75, "56": 1.30, "57": 0.75, "58": 0.75, "59": 0.75, "60": 0.75, "61": 0.75, "62": 0.75, "63": 0.75, "64": 0.75, "65": 0.75, "66": 0.75, "67": 0.75, "68": 0.75, "69": 0.75, "70": 0.75, "71": 0.75, "72": 0.75, "73": 0.75, "74": 0.75, "75": 0.75, "76": 0.75, "77": 0.75, "78": 0.75, "79": 0.75, "80": 0.75 },
			"4": { "12": 0.061, "13": 0.064, "14": 0.061, "15": 0.061, "16": 0.060, "17": 0.058, "18": 0.055, "19": 0.05, "20": 0.05, "21": 0.057, "22": 0.05, "23": 0.059, "24": 0.054, "25": 0.25, "26": 0.047, "27": 0.047, "28": 0.045, "29": 0.045, "30": 0.045, "31": 0.60, "32": 0.60, "33": 0.60, "34": 0.60, "35": 0.60, "36": 0.60, "37": 0.75, "38": 0.75, "39": 0.75, "40": 0.75, "41": 0.75, "42": 0.75, "43": 0.75, "44": 0.75, "45": 0.75, "46": 0.75, "47": 0.75, "48": 0.75, "49": 0.75, "50": 0.75, "51": 0.75, "52": 0.75, "53": 0.75, "54": 0.75, "55": 0.75, "56": 1.30, "57": 0.75, "58": 0.75, "59": 0.75, "60": 0.75, "61": 0.75, "62": 0.75, "63": 0.75, "64": 0.75, "65": 0.75, "66": 0.75, "67": 0.75, "68": 0.75, "69": 0.75, "70": 0.75, "71": 0.75, "72": 0.75, "73": 0.75, "74": 0.75, "75": 0.75, "76": 0.75, "77": 0.75, "78": 0.75, "79": 0.75, "80": 0.75 },
			"5": { "12": 0.057, "13": 0.057, "14": 0.057, "15": 0.055, "16": 0.055, "17": 0.055, "18": 0.053, "19": 0.044, "20": 0.044, "21": 0.045, "22": 0.045, "23": 0.046, "24": 0.0478, "25": 0.21, "26": 0.035, "27": 0.04, "28": 0.06, "29": 0.06, "30": 0.03, "31": 0.60, "32": 0.60, "33": 0.60, "34": 0.60, "35": 0.60, "36": 0.60, "37": 0.75, "38": 0.75, "39": 0.75, "40": 0.75, "41": 0.75, "42": 0.75, "43": 0.75, "44": 0.75, "45": 0.75, "46": 0.75, "47": 0.75, "48": 0.75, "49": 0.75, "50": 0.75, "51": 0.75, "52": 0.75, "53": 0.75, "54": 0.75, "55": 0.75, "56": 1.30, "57": 0.75, "58": 0.75, "59": 0.75, "60": 0.75, "61": 0.75, "62": 0.75, "63": 0.75, "64": 0.75, "65": 0.75, "66": 0.75, "67": 0.75, "68": 0.75, "69": 0.75, "70": 0.75, "71": 0.75, "72": 0.75, "73": 0.75, "74": 0.75, "75": 0.75, "76": 0.75, "77": 0.75, "78": 0.75, "79": 0.75, "80": 0.75 },
			"6": { "12": 0.50, "13": 0.50, "14": 0.50, "15": 0.50, "16": 0.50, "17": 0.50, "18": 0.50, "19": 0.50, "20": 0.45, "21": 0.45, "22": 0.45, "23": 0.45, "24": 0.45, "25": 0.45, "26": 0.45, "27": 0.45, "28": 0.45, "29": 0.45, "30": 0.45, "31": 0.40, "32": 0.40, "33": 0.40, "34": 0.40, "35": 0.40, "36": 0.40, "37": 0.50, "38": 0.50, "39": 0.50, "40": 0.50, "41": 0.50, "42": 0.50, "43": 0.50, "44": 0.50, "45": 0.50, "46": 0.50, "47": 0.50, "48": 0.50, "49": 0.50, "50": 0.50, "51": 0.50, "52": 0.50, "53": 0.50, "54": 0.50, "55": 0.50, "56": 0.50, "57": 0.50, "58": 0.50, "59": 0.50, "60": 0.50, "61": 0.50, "62": 0.50, "63": 0.50, "64": 0.50, "65": 0.50, "66": 0.50, "67": 0.50, "68": 0.50, "69": 0.50, "70": 0.50, "71": 0.50, "72": 0.50, "73": 0.50, "74": 0.50, "75": 0.50, "76": 0.50, "77": 0.50, "78": 0.50, "79": 0.50, "80": 0.50 },
		};

		let TrimPos1 = {
			"1": { "12": { "x": 0.13, "y": 0.443 }, "13": { "x": 0.13, "y": 0.443 }, "14": { "x": 0.13, "y": 0.443 }, "15": { "x": 0.13, "y": 0.443 }, "16": { "x": 0.13, "y": 0.443 }, "17": { "x": 0.13, "y": 0.443 }, "18": { "x": 0.13, "y": 0.443 }, "19": { "x": 0.13, "y": 0.443 }, "20": { "x": 0.13, "y": 0.443 }, "21": { "x": 0.13, "y": 0.443 }, "22": { "x": 0.13, "y": 0.443 }, "23": { "x": 0.13, "y": 0.443 }, "24": { "x": 0.13, "y": 0.443 }, "25": { "x": 0.13, "y": 0.443 }, "26": { "x": 0.13, "y": 0.443 }, "27": { "x": 0.13, "y": 0.443 }, "28": { "x": 0.13, "y": 0.443 }, "29": { "x": 0.13, "y": 0.443 }, "30": { "x": 0.10, "y": 0.443 }, "31": 0.77, "32": 0.77, "33": 0.77, "34": 0.77, "35": 0.77, "36": 0.77, "37": 0.77, "38": 0.77, "39": 0.77, "40": 0.77, "41": 0.77, "42": 0.77, "43": 0.77, "44": 0.77, "45": 0.77, "46": 0.77, "47": 0.77, "48": 0.77, "49": 0.77, "50": 0.77, "51": 0.77, "52": 0.77, "53": 0.77, "54": 0.77, "55": 0.77, "56": 0.77, "57": 0.77, "58": 0.77, "59": 0.77, "60": 0.77, "61": 0.77, "62": 0.77, "63": 0.77, "64": 0.77, "65": 0.77, "66": 0.77, "67": 0.77, "68": 0.77, "69": 0.65, "70": 0.77, "71": 0.77, "72": 0.77, "73": 0.77, "74": 0.77, "75": 0.77, "76": 0.77, "77": 0.77, "78": 0.77, "79": 0.77, "80": 0.77 },
			"2": { "6": { "x": 0.1315, "y": 0.476 }, "7": { "x": 0.1315, "y": 0.476 }, "8": { "x": 0.1315, "y": 0.476 }, "9": { "x": 0.1315, "y": 0.476 }, "10": { "x": 0.1315, "y": 0.476 }, "11": { "x": 0.1315, "y": 0.476 }, "12": { "x": 0.1315, "y": 0.476 }, "13": { "x": 0.1315, "y": 0.476 }, "14": { "x": 0.132, "y": 0.476 }, "15": { "x": 0.133, "y": 0.475 }, "16": { "x": 0.131, "y": 0.475 }, "17": { "x": 0.131, "y": 0.475 }, "18": { "x": 0.132, "y": 0.473 }, "19": { "x": 0.131, "y": 0.473 }, "20": { "x": 0.132, "y": 0.472 }, "21": { "x": 0.132, "y": 0.472 }, "22": { "x": 0.132, "y": 0.472 }, "23": { "x": 0.132, "y": 0.471 }, "24": { "x": 0.128, "y": 0.472 }, "25": { "x": 0.128, "y": 0.472 }, "26": { "x": 0.128, "y": 0.47 }, "27": { "x": 0.127, "y": 0.47 }, "28": { "x": 0.128, "y": 0.469 }, "29": { "x": 0.128, "y": 0.469 }, "30": { "x": 0.128, "y": 0.4685 }, "31": 0.70, "32": 0.70, "33": 0.70, "34": 0.70, "35": 0.70, "36": 0.70, "37": 0.80, "38": 0.80, "39": 0.80, "40": 0.80, "41": 0.80, "42": 0.80, "43": 0.80, "44": 0.80, "45": 0.80, "46": 0.80, "47": 0.80, "48": 0.80, "49": 0.80, "50": 0.80, "51": 0.80, "52": 0.80, "53": 0.80, "54": 0.80, "55": 0.80, "56": 0.80, "57": 0.80, "58": 0.80, "59": 0.80, "60": 0.80, "61": 0.80, "62": 0.80, "63": 0.80, "64": 0.80, "65": 0.80, "66": 0.80, "67": 0.80, "68": 0.80, "69": 0.80, "70": 0.80, "71": 0.80, "72": 0.80, "73": 0.80, "74": 0.80, "75": 0.80, "76": 0.80, "77": 0.80, "78": 0.80, "79": 0.80, "80": 0.80 },
			"3": { "6": { "x": 0.1315, "y": 0.479 }, "7": { "x": 0.1315, "y": 0.479 }, "8": { "x": 0.1315, "y": 0.479 }, "9": { "x": 0.1315, "y": 0.479 }, "10": { "x": 0.1315, "y": 0.479 }, "11": { "x": 0.1315, "y": 0.479 }, "12": { "x": 0.1315, "y": 0.479 }, "13": { "x": 0.1315, "y": 0.478 }, "14": { "x": 0.13, "y": 0.477 }, "15": { "x": 0.128, "y": 0.476 }, "16": { "x": 0.131, "y": 0.476 }, "17": { "x": 0.129, "y": 0.475 }, "18": { "x": 0.127, "y": 0.475 }, "19": { "x": 0.127, "y": 0.475 }, "20": { "x": 0.128, "y": 0.473 }, "21": { "x": 0.128, "y": 0.473 }, "22": { "x": 0.126, "y": 0.472 }, "23": { "x": 0.129, "y": 0.471 }, "24": { "x": 0.129, "y": 0.471 }, "25": { "x": 0.129, "y": 0.471 }, "26": { "x": 0.124, "y": 0.468 }, "27": { "x": 0.123, "y": 0.468 }, "28": { "x": 0.1219, "y": 0.4665 }, "29": { "x": 0.1219, "y": 0.4659 }, "30": { "x": 0.1205, "y": 0.4655 }, "31": 0.60, "32": 0.60, "33": 0.60, "34": 0.60, "35": 0.60, "36": 0.60, "37": 0.75, "38": 0.75, "39": 0.75, "40": 0.75, "41": 0.75, "42": 0.75, "43": 0.75, "44": 0.75, "45": 0.75, "46": 0.75, "47": 0.75, "48": 0.75, "49": 0.75, "50": 0.75, "51": 0.75, "52": 0.75, "53": 0.75, "54": 0.75, "55": 0.75, "56": 1.30, "57": 0.75, "58": 0.75, "59": 0.75, "60": 0.75, "61": 0.75, "62": 0.75, "63": 0.75, "64": 0.75, "65": 0.75, "66": 0.75, "67": 0.75, "68": 0.75, "69": 0.75, "70": 0.75, "71": 0.75, "72": 0.75, "73": 0.75, "74": 0.75, "75": 0.75, "76": 0.75, "77": 0.75, "78": 0.75, "79": 0.75, "80": 0.75 },
			"4": { "12": { "x": 0.1295, "y": 0.481 }, "13": { "x": 0.1299, "y": 0.479 }, "14": { "x": 0.128, "y": 0.479 }, "15": { "x": 0.1271, "y": 0.478 }, "16": { "x": 0.1275, "y": 0.476 }, "17": { "x": 0.127, "y": 0.476 }, "18": { "x": 0.128, "y": 0.476 }, "19": { "x": 0.124, "y": 0.473 }, "20": { "x": 0.124, "y": 0.473 }, "21": { "x": 0.124, "y": 0.473 }, "22": { "x": 0.124, "y": 0.471 }, "23": { "x": 0.124, "y": 0.470 }, "24": { "x": 0.124, "y": 0.470 }, "25": { "x": 0.13, "y": 0.443 }, "26": { "x": 0.117, "y": 0.464 }, "27": { "x": 0.117, "y": 0.464 }, "28": { "x": 0.117, "y": 0.463 }, "29": { "x": 0.114, "y": 0.4616 }, "30": { "x": 0.115, "y": 0.461 }, "31": 0.60, "32": 0.60, "33": 0.60, "34": 0.60, "35": 0.60, "36": 0.60, "37": 0.70, "38": 0.70, "39": 0.70, "40": 0.70, "41": 0.70, "42": 0.70, "43": 0.70, "44": 0.70, "45": 0.70, "46": 0.70, "47": 0.70, "48": 0.70, "49": 0.70, "50": 0.70, "51": 0.70, "52": 0.70, "53": 0.70, "54": 0.70, "55": 0.70, "56": 0.70, "57": 0.70, "58": 0.70, "59": 0.70, "60": 0.70, "61": 0.70, "62": 0.70, "63": 0.70, "64": 0.70, "65": 0.70, "66": 0.70, "67": 0.70, "68": 0.70, "69": 0.70, "70": 0.70, "71": 0.70, "72": 0.70, "73": 0.70, "74": 0.70, "75": 0.70, "76": 0.70, "77": 0.70, "78": 0.70, "79": 0.70, "80": 0.70 },
			"5": { "12": { "x": 0.128, "y": 0.482 }, "13": { "x": 0.1275, "y": 0.48 }, "14": { "x": 0.1275, "y": 0.48 }, "15": { "x": 0.126, "y": 0.4766 }, "16": { "x": 0.126, "y": 0.476 }, "17": { "x": 0.1255, "y": 0.4745 }, "18": { "x": 0.124, "y": 0.474 }, "19": { "x": 0.121, "y": 0.4715 }, "20": { "x": 0.12, "y": 0.47 }, "21": { "x": 0.12, "y": 0.469 }, "22": { "x": 0.12, "y": 0.467 }, "23": { "x": 0.118, "y": 0.465 }, "24": { "x": 0.118, "y": 0.465 }, "25": { "x": 0.13, "y": 0.443 }, "26": { "x": 0.11, "y": 0.459 }, "27": { "x": 0.109, "y": 0.457 }, "28": { "x": 0.116, "y": 0.459 }, "29": { "x": 0.116, "y": 0.459 }, "30": { "x": 0.098, "y": 0.451 }, "31": 0.42, "32": 0.42, "33": 0.42, "34": 0.42, "35": 0.42, "36": 0.42, "37": 0.60, "38": 0.60, "39": 0.60, "40": 0.60, "41": 0.60, "42": 0.60, "43": 0.60, "44": 0.60, "45": 0.60, "46": 0.60, "47": 0.60, "48": 0.60, "49": 0.60, "50": 0.60, "51": 0.60, "52": 0.60, "53": 0.60, "54": 0.60, "55": 0.60, "56": 0.60, "57": 0.60, "58": 0.60, "59": 0.60, "60": 0.60, "61": 0.60, "62": 0.60, "63": 0.60, "64": 0.60, "65": 0.60, "66": 0.60, "67": 0.60, "68": 0.60, "69": 0.60, "70": 0.60, "71": 0.60, "72": 0.60, "73": 0.60, "74": 0.60, "75": 0.60, "76": 0.60, "77": 0.60, "78": 0.60, "79": 0.60, "80": 0.60 },
			"6": { "12": { "x": 0.13, "y": 0.443 }, "13": { "x": 0.13, "y": 0.443 }, "14": { "x": 0.13, "y": 0.443 }, "15": { "x": 0.13, "y": 0.443 }, "16": { "x": 0.13, "y": 0.443 }, "17": { "x": 0.13, "y": 0.443 }, "18": { "x": 0.13, "y": 0.443 }, "19": { "x": 0.13, "y": 0.443 }, "20": { "x": 0.13, "y": 0.443 }, "21": { "x": 0.13, "y": 0.42 }, "22": { "x": 0.13, "y": 0.443 }, "23": { "x": 0.13, "y": 0.443 }, "24": { "x": 0.13, "y": 0.443 }, "25": { "x": 0.13, "y": 0.443 }, "26": { "x": 0.13, "y": 0.443 }, "27": { "x": 0.13, "y": 0.443 }, "28": { "x": 0.13, "y": 0.443 }, "29": { "x": 0.13, "y": 0.443 }, "30": { "x": 0.13, "y": 0.443 }, "31": 0.40, "32": 0.40, "33": 0.40, "34": 0.40, "35": 0.40, "36": 0.40, "37": 0.50, "38": 0.50, "39": 0.50, "40": 0.50, "41": 0.50, "42": 0.50, "43": 0.50, "44": 0.50, "45": 0.50, "46": 0.50, "47": 0.50, "48": 0.50, "49": 0.50, "50": 0.50, "51": 0.50, "52": 0.50, "53": 0.50, "54": 0.50, "55": 0.50, "56": 0.50, "57": 0.50, "58": 0.50, "59": 0.50, "60": 0.50, "61": 0.50, "62": 0.50, "63": 0.50, "64": 0.50, "65": 0.50, "66": 0.50, "67": 0.50, "68": 0.50, "69": 0.50, "70": 0.50, "71": 0.50, "72": 0.50, "73": 0.50, "74": 0.50, "75": 0.50, "76": 0.50, "77": 0.50, "78": 0.50, "79": 0.50, "80": 0.50 },
		};

		let trimRotation1 = {
			"1": { "12": 0.77, "13": 0.77, "14": 0.77, "15": 0.77, "16": 0.77, "17": 0.77, "18": 0.77, "19": 0.77, "20": 0.77, "21": 0.77, "22": 0.77, "23": 0.77, "24": 0.77, "25": 0.77, "26": 0.77, "27": 0.77, "28": 0.77, "29": 0.77, "30": 0.77, "31": 0.77, "32": 0.77, "33": 0.77, "34": 0.77, "35": 0.77, "36": 0.77, "37": 0.77, "38": 0.77, "39": 0.77, "40": 0.77, "41": 0.77, "42": 0.77, "43": 0.77, "44": 0.77, "45": 0.77, "46": 0.77, "47": 0.77, "48": 0.77, "49": 0.77, "50": 0.77, "51": 0.77, "52": 0.77, "53": 0.77, "54": 0.77, "55": 0.77, "56": 0.77, "57": 0.77, "58": 0.77, "59": 0.77, "60": 0.77, "61": 0.77, "62": 0.77, "63": 0.77, "64": 0.77, "65": 0.77, "66": 0.77, "67": 0.77, "68": 0.77, "69": 0.65, "70": 0.77, "71": 0.77, "72": 0.77, "73": 0.77, "74": 0.77, "75": 0.77, "76": 0.77, "77": 0.77, "78": 0.77, "79": 0.77, "80": 0.77 },
			"2": { "12": 0.43, "13": 0.45, "14": 0.42, "15": 0.4, "16": 0.43, "17": 0.43, "18": 0.375, "19": 0.375, "20": 0.355, "21": 0.355, "22": 0.335, "23": 0.335, "24": 0.41, "25": 0.41, "26": 0.35, "27": 0.35, "28": 0.33, "29": 0.33, "30": 0.32, "31": 0.70, "32": 0.70, "33": 0.70, "34": 0.70, "35": 0.70, "36": 0.70, "37": 0.80, "38": 0.80, "39": 0.80, "40": 0.80, "41": 0.80, "42": 0.80, "43": 0.80, "44": 0.80, "45": 0.80, "46": 0.80, "47": 0.80, "48": 0.80, "49": 0.80, "50": 0.80, "51": 0.80, "52": 0.80, "53": 0.80, "54": 0.80, "55": 0.80, "56": 0.80, "57": 0.80, "58": 0.80, "59": 0.80, "60": 0.80, "61": 0.80, "62": 0.80, "63": 0.80, "64": 0.80, "65": 0.80, "66": 0.80, "67": 0.80, "68": 0.80, "69": 0.80, "70": 0.80, "71": 0.80, "72": 0.80, "73": 0.80, "74": 0.80, "75": 0.80, "76": 0.80, "77": 0.80, "78": 0.80, "79": 0.80, "80": 0.80 },
			"3": { "12": 0.44, "13": 0.41, "14": 0.41, "15": 0.4, "16": 0.36, "17": 0.392, "18": 0.415, "19": 0.43, "20": 0.365, "21": 0.35, "22": 0.365, "23": 0.3, "24": 0.28, "25": 0.28, "26": 0.3, "27": 0.3, "28": 0.26, "29": 0.26, "30": 0.26, "31": 0.60, "32": 0.60, "33": 0.60, "34": 0.60, "35": 0.60, "36": 0.60, "37": 0.75, "38": 0.75, "39": 0.75, "40": 0.75, "41": 0.75, "42": 0.75, "43": 0.75, "44": 0.75, "45": 0.75, "46": 0.75, "47": 0.75, "48": 0.75, "49": 0.75, "50": 0.75, "51": 0.75, "52": 0.75, "53": 0.75, "54": 0.75, "55": 0.75, "56": 1.30, "57": 0.75, "58": 0.75, "59": 0.75, "60": 0.75, "61": 0.75, "62": 0.75, "63": 0.75, "64": 0.75, "65": 0.75, "66": 0.75, "67": 0.75, "68": 0.75, "69": 0.75, "70": 0.75, "71": 0.75, "72": 0.75, "73": 0.75, "74": 0.75, "75": 0.75, "76": 0.75, "77": 0.75, "78": 0.75, "79": 0.75, "80": 0.75 },
			"4": { "12": 0.435, "13": 0.395, "14": 0.38, "15": 0.356, "16": 0.355, "17": 0.355, "18": 0.355, "19": 0.355, "20": 0.365, "21": 0.3, "22": 0.33, "23": 0.25, "24": 0.279, "25": 0.30, "26": 0.23, "27": 0.20, "28": 0.21, "29": 0.16, "30": 0.16, "31": 0.60, "32": 0.60, "33": 0.60, "34": 0.60, "35": 0.60, "36": 0.60, "37": 0.70, "38": 0.70, "39": 0.70, "40": 0.70, "41": 0.70, "42": 0.70, "43": 0.70, "44": 0.70, "45": 0.70, "46": 0.70, "47": 0.70, "48": 0.70, "49": 0.70, "50": 0.70, "51": 0.70, "52": 0.70, "53": 0.70, "54": 0.70, "55": 0.70, "56": 0.70, "57": 0.70, "58": 0.70, "59": 0.70, "60": 0.70, "61": 0.70, "62": 0.70, "63": 0.70, "64": 0.70, "65": 0.70, "66": 0.70, "67": 0.70, "68": 0.70, "69": 0.70, "70": 0.70, "71": 0.70, "72": 0.70, "73": 0.70, "74": 0.70, "75": 0.70, "76": 0.70, "77": 0.70, "78": 0.70, "79": 0.70, "80": 0.70 },
			"5": { "12": 0.41, "13": 0.37, "14": 0.34, "15": 0.338, "16": 0.313, "17": 0.28, "18": 0.285, "19": 0.295, "20": 0.26, "21": 0.22, "22": 0.205, "23": 0.16, "24": 0.15, "25": 0.35, "26": 0.08, "27": 0.01, "28": -0.02, "29": -0.02, "30": -0.1, "31": 0.42, "32": 0.42, "33": 0.42, "34": 0.42, "35": 0.42, "36": 0.42, "37": 0.60, "38": 0.60, "39": 0.60, "40": 0.60, "41": 0.60, "42": 0.60, "43": 0.60, "44": 0.60, "45": 0.60, "46": 0.60, "47": 0.60, "48": 0.60, "49": 0.60, "50": 0.60, "51": 0.60, "52": 0.60, "53": 0.60, "54": 0.60, "55": 0.60, "56": 0.60, "57": 0.60, "58": 0.60, "59": 0.60, "60": 0.60, "61": 0.60, "62": 0.60, "63": 0.60, "64": 0.60, "65": 0.60, "66": 0.60, "67": 0.60, "68": 0.60, "69": 0.60, "70": 0.60, "71": 0.60, "72": 0.60, "73": 0.60, "74": 0.60, "75": 0.60, "76": 0.60, "77": 0.60, "78": 0.60, "79": 0.60, "80": 0.60 },
			"6": { "12": 0.50, "13": 0.50, "14": 0.50, "15": 0.50, "16": 0.50, "17": 0.50, "18": 0.50, "19": 0.50, "20": 0.45, "21": 0.45, "22": 0.45, "23": 0.45, "24": 0.45, "25": 0.45, "26": 0.45, "27": 0.45, "28": 0.45, "29": 0.45, "30": 0.45, "31": 0.40, "32": 0.40, "33": 0.40, "34": 0.40, "35": 0.40, "36": 0.40, "37": 0.50, "38": 0.50, "39": 0.50, "40": 0.50, "41": 0.50, "42": 0.50, "43": 0.50, "44": 0.50, "45": 0.50, "46": 0.50, "47": 0.50, "48": 0.50, "49": 0.50, "50": 0.50, "51": 0.50, "52": 0.50, "53": 0.50, "54": 0.50, "55": 0.50, "56": 0.50, "57": 0.50, "58": 0.50, "59": 0.50, "60": 0.50, "61": 0.50, "62": 0.50, "63": 0.50, "64": 0.50, "65": 0.50, "66": 0.50, "67": 0.50, "68": 0.50, "69": 0.50, "70": 0.50, "71": 0.50, "72": 0.50, "73": 0.50, "74": 0.50, "75": 0.50, "76": 0.50, "77": 0.50, "78": 0.50, "79": 0.50, "80": 0.50 },
		};

		let f_S_LeanEndTrimsRotation = {
			"2": { "6": 0.161, "7": 0.162, "8": 0.1625, "9": 0.1645, "10": 0.1663, "11": 0.1642, "12": 0.1642, "13": 0.165, "14": 0.1642, "15": 0.1642, "16": 0.1642, "17": 0.1645, "18": 0.1642, "19": 0.16475, "20": 0.1645, "21": 0.1644, "22": 0.1648, "23": 0.1649, "24": 0.1648, "25": 0.30, "26": 0.30, "27": 0.30, "28": 0.35, "29": 0.35, "30": 0.40, },
			"3": { "6": 0.2443, "7": 0.24199, "8": 0.2412, "9": 0.2412, "10": 0.2419, "11": 0.2422, "12": 0.2431, "13": 0.2435, "14": 0.2437, "15": 0.2436, "16": 0.245, "17": 0.2429, "18": 0.2431, "19": 0.2434, "20": 0.2437, "21": 0.2437, "22": 0.244, "23": 0.2437, "24": 0.2446, "25": 0.2437, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, },
			"4": { "6": 0.2437, "7": 0.2437, "8": 0.2437, "9": 0.2437, "10": 0.2437, "11": 0.2437, "12": 0.2437, "13": 0.2437, "14": 0.2437, "15": 0.2437, "16": 0.2437, "17": 0.2437, "18": 0.2437, "19": 0.2437, "20": 0.2437, "21": 0.2437, "22": 0.2437, "23": 0.2437, "24": 0.2437, "25": 0.2437, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, },
			"5": { "6": 0.2437, "7": 0.2437, "8": 0.2437, "9": 0.2437, "10": 0.2437, "11": 0.2437, "12": 0.2437, "13": 0.2437, "14": 0.2437, "15": 0.2437, "16": 0.2437, "17": 0.2437, "18": 0.2437, "19": 0.2437, "20": 0.2437, "21": 0.2437, "22": 0.2437, "23": 0.2437, "24": 0.2437, "25": 0.2437, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, },
		};
		let f_S_LeanEndTrimsScale = {
			"2": { "6": 0.26, "7": 0.28, "8": 0.30, "9": 0.35, "10": 0.38, "11": 0.42, "12": 0.45, "13": 0.47, "14": 0.52, "15": 0.55, "16": 0.58, "17": 0.64, "18": 0.70, "19": 0.70, "20": 0.72, "21": 0.75, "22": 0.78, "23": 0.82, "24": 0.88, "25": 0.30, "26": 0.30, "27": 0.30, "28": 0.35, "29": 0.35, "30": 0.40, },
			"3": { "6": 0.28, "7": 0.31, "8": 0.35, "9": 0.38, "10": 0.45, "11": 0.51, "12": 0.56, "13": 0.60, "14": 0.65, "15": 0.73, "16": 0.80, "17": 0.90, "18": 0.98, "19": 0.98, "20": 1.00, "21": 1.10, "22": 1.20, "23": 1.30, "24": 1.30, "25": 0.55, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, },
			"4": { "6": 0.18, "7": 0.22, "8": 0.24, "9": 0.26, "10": 0.28, "11": 0.31, "12": 0.33, "13": 0.37, "14": 0.45, "15": 0.50, "16": 0.70, "17": 0.70, "18": 0.98, "19": 0.70, "20": 0.75, "21": 0.80, "22": 0.85, "23": 0.90, "24": 0.95, "25": 0.55, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, },
			"5": { "6": 0.18, "7": 0.22, "8": 0.24, "9": 0.26, "10": 0.28, "11": 0.31, "12": 0.33, "13": 0.37, "14": 0.45, "15": 0.50, "16": 0.70, "17": 0.70, "18": 0.98, "19": 0.70, "20": 0.75, "21": 0.80, "22": 0.85, "23": 0.90, "24": 0.95, "25": 0.55, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, },
		};

		let f_S_LeanEndTrimsHeight = {
			"2": { "6": 0.395, "7": 0.477, "8": 0.56, "9": 0.638, "10": 0.73, "11": 0.805, "12": 0.885, "13": 0.975, "14": 1.05, "15": 1.13, "16": 1.218, "17": 1.301, "18": 1.383, "19": 1.47, "20": 1.553, "21": 1.645, "22": 1.724, "23": 1.807, "24": 1.892, "25": 1.4, "26": 0.30, "27": 0.30, "28": 0.35, "29": 0.35, "30": 0.40, },
			"3": { "6": 0.632, "7": 0.755, "8": 0.868, "9": 0.99, "10": 1.125, "11": 1.252, "12": 1.375, "13": 1.515, "14": 1.628, "15": 1.755, "16": 1.889, "17": 1.986, "18": 2.13, "19": 2.2455, "20": 2.375, "21": 2.508, "22": 2.626, "23": 2.75, "24": 2.873, "25": 0.55, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, },
			"4": { "6": 0.66, "7": 0.78, "8": 0.88, "9": 1.00, "10": 1.15, "11": 1.27, "12": 1.39, "13": 1.52, "14": 1.65, "15": 1.78, "16": 1.90, "17": 2.00, "18": 2.14, "19": 2.26, "20": 2.39, "21": 2.52, "22": 2.63, "23": 2.76, "24": 2.89, "25": 0.55, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, },
			"5": { "6": 0.66, "7": 0.78, "8": 0.88, "9": 1.00, "10": 1.15, "11": 1.27, "12": 1.39, "13": 1.52, "14": 1.65, "15": 1.78, "16": 1.90, "17": 2.00, "18": 2.14, "19": 2.26, "20": 2.39, "21": 2.52, "22": 2.63, "23": 2.76, "24": 2.89, "25": 0.55, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, },

		};
		const f_S_L_L_Trim_Rot_Y = {
			"2": { "6": 3.00, "7": 3.00, "8": 3.00, "9": 3.01, "10": 3.01, "11": 3.02, "12": 3.00, "13": 3.02, "14": 3.02, "15": 3.01, "16": 3.00, "17": 3.02, "18": 3.02, "19": 3.02, "20": 3.01, "21": 2.98, "22": 3.00, "23": 3.00, "24": 3.00, "25": 3.02, "26": 0.30, "27": 0.30, "28": 0.35, "29": 0.35, "30": 0.40, },
			"3": { "6": 2.895, "7": 2.90, "8": 2.90, "9": 2.90, "10": 2.90, "11": 2.90, "12": 2.90, "13": 2.90, "14": 2.89, "15": 2.89, "16": 2.89, "17": 2.92, "18": 2.92, "19": 2.89, "20": 2.90, "21": 2.90, "22": 2.90, "23": 2.90, "24": 2.92, "25": 0, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, },
			"4": { "6": 2.95, "7": 2.95, "8": 2.95, "9": 2.95, "10": 2.95, "11": 2.95, "12": 2.95, "13": 2.95, "14": 2.95, "15": 2.95, "16": 2.95, "17": 2.95, "18": 2.95, "19": 2.95, "20": 2.95, "21": 2.95, "22": 2.95, "23": 2.95, "24": 2.95, "25": 0, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, },
			"5": { "6": 2.95, "7": 2.95, "8": 2.95, "9": 2.95, "10": 2.95, "11": 2.95, "12": 2.95, "13": 2.95, "14": 2.95, "15": 2.95, "16": 2.95, "17": 2.95, "18": 2.95, "19": 2.95, "20": 2.95, "21": 2.95, "22": 2.95, "23": 2.95, "24": 2.95, "25": 0, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, },
		};
		let f_S_L_L_TrimHeight = {
			"2": { "6": 0.12, "7": 0.12, "8": 0.12, "9": 0.132, "10": 0.13, "11": 0.13, "12": 0.13, "13": 0.13, "14": 0.13, "15": 0.13, "16": 0.13, "17": 0.13, "18": 0.13, "19": 0.13, "20": 0.13, "21": 0.12, "22": 0.13, "23": 0.13, "24": 0.13, "25": 1.4, "26": 0.30, "27": 0.30, "28": 0.35, "29": 0.35, "30": 0.40, },
			"3": { "6": 0.144, "7": 0.137, "8": 0.144, "9": 0.143, "10": 0.133, "11": 0.133, "12": 0.138, "13": 0.13, "14": 0.140, "15": 0.135, "16": 0.14, "17": 0.146, "18": 0.127, "19": 0.14, "20": 0.138, "21": 0.13, "22": 0.14, "23": 0.148, "24": 0.148, "25": 0, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, },
			"4": { "6": 1.5, "7": 1.6, "8": 1.7, "9": 2.00, "10": 2.20, "11": 2.5, "12": 2.75, "13": 2.9, "14": 3.3, "15": 3.60, "16": 3.80, "17": 4.00, "18": 0.13, "19": 0.13, "20": 0.13, "21": 0.13, "22": 0.13, "23": 0.13, "24": 0.13, "25": 0, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, },
			"5": { "6": 1.5, "7": 1.6, "8": 1.7, "9": 2.00, "10": 2.20, "11": 2.5, "12": 2.75, "13": 2.9, "14": 3.3, "15": 3.60, "16": 3.80, "17": 4.00, "18": 0.13, "19": 0.13, "20": 0.13, "21": 0.13, "22": 0.13, "23": 0.13, "24": 0.13, "25": 0, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, },
		};
		let f_S_L_R_TrimHeight = {
			"2": { "6": 0.89, "7": 1.055, "8": 1.22, "9": 1.393, "10": 1.575, "11": 1.722, "12": 1.885, "13": 2.065, "14": 2.215, "15": 2.38, "16": 2.55, "17": 2.72, "18": 2.88, "19": 3.055, "20": 3.22, "21": 3.395, "22": 3.56, "23": 3.726, "24": 3.895, "25": 1.4, "26": 0.30, "27": 0.30, "28": 0.35, "29": 0.35, "30": 0.40, },
			"3": { "6": 1.38, "7": 1.619, "8": 1.853, "9": 2.095, "10": 2.358, "11": 2.611, "12": 2.865, "13": 3.125, "14": 3.37, "15": 3.62, "16": 3.89, "17": 4.09, "18": 4.365, "19": 4.605, "20": 4.861, "21": 5.12, "22": 5.366, "23": 5.61, "24": 5.868, "25": 0.55, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, },
			"4": { "6": 1.5, "7": 1.6, "8": 1.7, "9": 2.00, "10": 2.20, "11": 2.5, "12": 2.75, "13": 2.9, "14": 3.3, "15": 3.60, "16": 3.80, "17": 4.00, "18": 4.365, "19": 4.60, "20": 4.80, "21": 4.9, "22": 5.0, "23": 5.5, "24": 5.75, "25": 0.55, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, },
			"5": { "6": 1.5, "7": 1.6, "8": 1.7, "9": 2.00, "10": 2.20, "11": 2.5, "12": 2.75, "13": 2.9, "14": 3.3, "15": 3.60, "16": 3.80, "17": 4.00, "18": 4.365, "19": 4.60, "20": 4.80, "21": 4.9, "22": 5.0, "23": 5.5, "24": 5.75, "25": 0.55, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, },
		};

		let f_S_LeanBowsHeight = {
			"2": { "6": 0.40, "7": 0.48, "8": 0.57, "9": 0.66, "10": 0.75, "11": 0.82, "12": 0.90, "13": 1.00, "14": 1.07, "15": 1.15, "16": 1.23, "17": 1.32, "18": 1.40, "19": 1.48, "20": 1.57, "21": 1.65, "22": 1.73, "23": 1.82, "24": 1.90, "25": 1.4, "26": 0.30, "27": 0.30, "28": 0.35, "29": 0.35, "30": 0.40, },
			"3": { "6": 0.66, "7": 0.78, "8": 0.88, "9": 1.00, "10": 1.15, "11": 1.27, "12": 1.39, "13": 1.52, "14": 1.65, "15": 1.78, "16": 1.90, "17": 2.00, "18": 2.15, "19": 2.26, "20": 2.39, "21": 2.52, "22": 2.63, "23": 2.76, "24": 2.89, "25": 0.55, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, },
			"4": { "6": 0.66, "7": 0.78, "8": 0.88, "9": 1.00, "10": 1.15, "11": 1.27, "12": 1.39, "13": 1.52, "14": 1.65, "15": 1.78, "16": 1.90, "17": 2.00, "18": 2.15, "19": 2.26, "20": 2.39, "21": 2.52, "22": 2.63, "23": 2.76, "24": 2.89, "25": 0.55, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, },
			"5": { "6": 0.66, "7": 0.78, "8": 0.88, "9": 1.00, "10": 1.15, "11": 1.27, "12": 1.39, "13": 1.52, "14": 1.65, "15": 1.78, "16": 1.90, "17": 2.00, "18": 2.15, "19": 2.26, "20": 2.39, "21": 2.52, "22": 2.63, "23": 2.76, "24": 2.89, "25": 0.55, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, },
		};

		let f_S_LeanRightCorner = {
			"2": { "6": -0.10, "7": 0.05, "8": 0.20, "9": 0.40, "10": 0.50, "11": 0.70, "12": 0.80, "13": 1.00, "14": 1.20, "15": 1.30, "16": 1.50, "17": 1.70, "18": 1.80, "19": 2.00, "20": 2.20, "21": 2.40, "22": 2.55, "23": 2.70, "24": 2.80, "25": 1.4, "26": 0.30, "27": 0.30, "28": 0.35, "29": 0.35, "30": 0.40, },
			"3": { "6": 0.14, "7": 0.45, "8": 0.72, "9": 0.97, "10": 1.23, "11": 1.49, "12": 1.74, "13": 1.99, "14": 2.20, "15": 2.45, "16": 2.70, "17": 2.96, "18": 3.24, "19": 3.47, "20": 3.65, "21": 3.87, "22": 4.15, "23": 4.36, "24": 4.61, "25": 1.4, "26": 0.30, "27": 0.30, "28": 0.35, "29": 0.35, "30": 0.40, },
			"4": { "6": 0.14, "7": 0.45, "8": 0.72, "9": 0.97, "10": 1.23, "11": 1.49, "12": 1.74, "13": 1.99, "14": 2.20, "15": 2.45, "16": 2.70, "17": 2.96, "18": 3.24, "19": 3.47, "20": 3.65, "21": 3.87, "22": 4.15, "23": 4.36, "24": 4.61, "25": 1.4, "26": 0.30, "27": 0.30, "28": 0.35, "29": 0.35, "30": 0.40, },
			"5": { "6": 0.14, "7": 0.45, "8": 0.72, "9": 0.97, "10": 1.23, "11": 1.49, "12": 1.74, "13": 1.99, "14": 2.20, "15": 2.45, "16": 2.70, "17": 2.96, "18": 3.24, "19": 3.47, "20": 3.65, "21": 3.87, "22": 4.15, "23": 4.36, "24": 4.61, "25": 1.4, "26": 0.30, "27": 0.30, "28": 0.35, "29": 0.35, "30": 0.40, },
		};

		//Building Roof Left Front Trim
		let leftFrontTrim = new THREE.Mesh(trimGeometry, trimMaterial);
		leftFrontTrim.name = "leftFrontTrim";
		leftFrontTrim.scale.set(params.p_w / 2, 0.2 + 0.08, 0.5);
		leftFrontTrim.position.set(params.p_w / -4 + 0.08, params.p_h + hInc + 0.03 + 0.53, params.p_d / 2 + 0.2);
		leftFrontTrim.rotation.z = bowsRotation[params.p_r_p] + Number(params.p_r_p) / 1000;
		leftFrontTrim.visible = (params.p_r_s == "1") ? true : false;
		leftFrontTrim.scale.x = params.p_w / 2 + bowsScale[params.p_r_p][params.p_w] + trimScaleR[params.p_r_p][params.p_w] + trimScale[params.p_r_p];
		const_var.b_t_M_L.add(leftFrontTrim);

		// left Front Trim first small curve	
		let leftFrontTrim1 = new THREE.Mesh(trimGeometry, trimMaterial);
		leftFrontTrim1.name = "leftFrontTrim1";
		leftFrontTrim1.scale.set(curvedTrimScale[params.p_r_p][params.p_w], 0.2, 0.5);
		leftFrontTrim1.position.set((params.p_w / -2 + TrimPos1[params.p_r_p][params.p_w]["x"]), (params.p_h + TrimPos1[params.p_r_p][params.p_w]["y"]), params.p_d / 2 + 0.2);
		leftFrontTrim1.rotation.z = bowsRotation[params.p_r_p] + trimRotation1[params.p_r_p][params.p_w];
		leftFrontTrim1.visible = (params.p_r_s == "1") ? true : false;
		const_var.b_t_M_L.add(leftFrontTrim1);

		// left Front Trim second small curve
		let leftFrontTrim2 = new THREE.Mesh(trimGeometry, trimMaterial);
		leftFrontTrim2.name = "leftFrontTrim2";
		leftFrontTrim2.scale.set(0.12, 0.19 + 0.1, 0.5);
		leftFrontTrim2.position.set((params.p_w / -2 + 0.101), (params.p_h + 0.405), params.p_d / 2 + 0.2);
		leftFrontTrim2.rotation.z = Math.PI / 3.4;
		leftFrontTrim2.visible = (params.p_r_s == "1") ? true : false;
		const_var.b_t_M_L.add(leftFrontTrim2);

		//left Front Trim third curve
		let leftFrontTrim3 = new THREE.Mesh(trimGeometry, trimMaterial);
		leftFrontTrim3.name = "leftFrontTrim3";
		leftFrontTrim3.scale.set(0.095, 0.21 + 0.073, 0.5);
		leftFrontTrim3.position.set((params.p_w / -2 + 0.068), (params.p_h + 0.345), params.p_d / 2 + 0.2);
		leftFrontTrim3.rotation.z = Math.PI / 2.35;
		leftFrontTrim3.visible = (params.p_r_s == "1") ? true : false;
		const_var.b_t_M_L.add(leftFrontTrim3);

		//left Front Trim forth curve
		let TrimGeo = new THREE.BoxGeometry(0.25 + 0.045, 1, 0.2 + 0.2);
		let TrimMaterial = new THREE.MeshBasicMaterial({ color: 0x0E6655, side: THREE.DoubleSide });

		let leftFrontTrim4 = new THREE.Mesh(TrimGeo, TrimMaterial);
		leftFrontTrim4.name = "leftFrontTrim4";
		leftFrontTrim4.scale.set(0.5 + 0.17, 0.35, 0.5);
		leftFrontTrim4.position.set(params.p_w / -2 + 0.058, params.p_h + 0.145, params.p_d / 2 + 0.2);
		leftFrontTrim4.visible = (params.p_r_s == "1") ? true : false;
		const_var.b_t_M_L.add(leftFrontTrim4);

		//Building Roof Left Back Trim
		let leftBackTrim = new THREE.Mesh(trimGeometry, trimMaterial);
		leftBackTrim.name = "leftBackTrim";
		leftBackTrim.scale.set(params.p_w / 2, 0.2 + 0.08, 0.5);
		leftBackTrim.position.set(params.p_w / -4 + 0.08, params.p_h + hInc + 0.03 + 0.53, params.p_d / -2 - 0.2);
		leftBackTrim.rotation.z = bowsRotation[params.p_r_p] + Number(params.p_r_p) / 1000;
		leftBackTrim.visible = (params.p_r_s == "1") ? true : false;
		leftBackTrim.scale.x = params.p_w / 2 + bowsScale[params.p_r_p][params.p_w] + trimScaleR[params.p_r_p][params.p_w] + trimScale[params.p_r_p];
		const_var.b_t_M_L.add(leftBackTrim);

		// left Back Trim first small curve	
		let leftBackTrim1 = new THREE.Mesh(trimGeometry, trimMaterial);
		leftBackTrim1.name = "leftBackTrim1";
		leftBackTrim1.scale.set(curvedTrimScale[params.p_r_p][params.p_w], 0.2, 0.5);
		leftBackTrim1.position.set((params.p_w / -2 + TrimPos1[params.p_r_p][params.p_w]["x"]), (params.p_h + TrimPos1[params.p_r_p][params.p_w]["y"]), params.p_d / -2 - 0.2);
		leftBackTrim1.rotation.z = bowsRotation[params.p_r_p] + trimRotation1[params.p_r_p][params.p_w];
		leftBackTrim1.visible = (params.p_r_s == "1") ? true : false;
		const_var.b_t_M_L.add(leftBackTrim1);

		// left Back Trim second small curve
		let leftBackTrim2 = new THREE.Mesh(trimGeometry, trimMaterial);
		leftBackTrim2.name = "leftBackTrim2";
		leftBackTrim2.scale.set(0.12, 0.19 + 0.1, 0.5);
		leftBackTrim2.position.set((params.p_w / -2 + 0.101), (params.p_h + 0.405), params.p_d / -2 - 0.2);
		leftBackTrim2.rotation.z = Math.PI / 3.4;
		leftBackTrim2.visible = (params.p_r_s == "1") ? true : false;
		const_var.b_t_M_L.add(leftBackTrim2);

		//left Back Trim third curve
		let leftBackTrim3 = new THREE.Mesh(trimGeometry, trimMaterial);
		leftBackTrim3.name = "leftBackTrim3";
		leftBackTrim3.scale.set(0.095, 0.21 + 0.073, 0.5);
		leftBackTrim3.position.set((params.p_w / -2 + 0.068), (params.p_h + 0.345), params.p_d / -2 - 0.2);
		leftBackTrim3.rotation.z = Math.PI / 2.35;
		leftBackTrim3.visible = (params.p_r_s == "1") ? true : false;
		const_var.b_t_M_L.add(leftBackTrim3);

		//left Back Trim forth curve
		let leftBackTrim4 = new THREE.Mesh(TrimGeo, TrimMaterial);
		leftBackTrim4.name = "leftBackTrim4";
		leftBackTrim4.scale.set(0.5 + 0.17, 0.35, 0.5);
		leftBackTrim4.position.set(params.p_w / -2 + 0.058, params.p_h + 0.145, params.p_d / -2 - 0.2);
		leftBackTrim4.visible = (params.p_r_s == "1") ? true : false;
		const_var.b_t_M_L.add(leftBackTrim4);

		//Building Roof Right Front Trim
		let rightFrontTrim = new THREE.Mesh(trimGeometry, trimMaterial);
		rightFrontTrim.name = "rightFrontTrim";
		rightFrontTrim.scale.set(params.p_w / 2, 0.2 + 0.08, 0.5);
		rightFrontTrim.position.set(params.p_w / 4 - 0.08, params.p_h + hInc + 0.03 + 0.53, params.p_d / 2 + 0.2);
		rightFrontTrim.rotation.z = -bowsRotation[params.p_r_p] - Number(params.p_r_p) / 1000;
		rightFrontTrim.visible = (params.p_r_s == "1") ? true : false;
		rightFrontTrim.scale.x = params.p_w / 2 + bowsScale[params.p_r_p][params.p_w] + trimScaleR[params.p_r_p][params.p_w] + trimScale[params.p_r_p];
		const_var.b_t_M_R.add(rightFrontTrim);

		// right Front Trim first small curve	
		let rightFrontTrim1 = new THREE.Mesh(trimGeometry, trimMaterial);
		rightFrontTrim1.name = "rightFrontTrim1";
		rightFrontTrim1.scale.set(curvedTrimScale[params.p_r_p][params.p_w], 0.2, 0.5);
		rightFrontTrim1.position.set((params.p_w / 2 - TrimPos1[params.p_r_p][params.p_w]["x"]), (params.p_h + TrimPos1[params.p_r_p][params.p_w]["y"]), params.p_d / 2 + 0.2);
		rightFrontTrim1.rotation.z = -bowsRotation[params.p_r_p] - trimRotation1[params.p_r_p][params.p_w];
		rightFrontTrim1.visible = (params.p_r_s == "1") ? true : false;
		const_var.b_t_M_R.add(rightFrontTrim1);

		// right Front Trim second small curve
		let rightFrontTrim2 = new THREE.Mesh(trimGeometry, trimMaterial);
		rightFrontTrim2.name = "rightFrontTrim2";
		rightFrontTrim2.scale.set(0.12, 0.19 + 0.1, 0.5);
		rightFrontTrim2.position.set((params.p_w / 2 - 0.101), (params.p_h + 0.405), params.p_d / 2 + 0.2);
		rightFrontTrim2.rotation.z = -Math.PI / 3.4;
		rightFrontTrim2.visible = (params.p_r_s == "1") ? true : false;
		const_var.b_t_M_R.add(rightFrontTrim2);

		//right Front Trim third curve
		let rightFrontTrim3 = new THREE.Mesh(trimGeometry, trimMaterial);
		rightFrontTrim3.name = "rightFrontTrim3";
		rightFrontTrim3.scale.set(0.095, 0.21 + 0.073, 0.5);
		rightFrontTrim3.position.set((params.p_w / 2 - 0.068), (params.p_h + 0.345), params.p_d / 2 + 0.2);
		rightFrontTrim3.rotation.z = -Math.PI / 2.35;
		rightFrontTrim3.visible = (params.p_r_s == "1") ? true : false;
		const_var.b_t_M_R.add(rightFrontTrim3);

		//right Front Trim forth curve
		let rightFrontTrim4 = new THREE.Mesh(TrimGeo, TrimMaterial);
		rightFrontTrim4.name = "rightFrontTrim4";
		rightFrontTrim4.scale.set(0.5 + 0.17, 0.35, 0.5);
		rightFrontTrim4.position.set(params.p_w / +2 - 0.058, params.p_h + 0.145, params.p_d / 2 + 0.2);
		rightFrontTrim4.visible = (params.p_r_s == "1") ? true : false;
		const_var.b_t_M_R.add(rightFrontTrim4);

		//Building Roof Right Back Trim
		let rightBackTrim = new THREE.Mesh(trimGeometry, trimMaterial);
		rightBackTrim.name = "rightBackTrim";
		rightBackTrim.scale.set(params.p_w / 2, 0.2 + 0.08, 0.5);
		rightBackTrim.position.set(params.p_w / 4 - 0.08, params.p_h + hInc + 0.03 + 0.53, params.p_d / -2 - 0.2);
		rightBackTrim.rotation.z = -bowsRotation[params.p_r_p] - Number(params.p_r_p) / 1000;
		rightBackTrim.visible = (params.p_r_s == "1") ? true : false;
		rightBackTrim.scale.x = params.p_w / 2 + bowsScale[params.p_r_p][params.p_w] + trimScaleR[params.p_r_p][params.p_w] + trimScale[params.p_r_p];
		const_var.b_t_M_R.add(rightBackTrim);

		// right Back Trim first small curve	
		let rightBackTrim1 = new THREE.Mesh(trimGeometry, trimMaterial);
		rightBackTrim1.name = "rightBackTrim1";
		rightBackTrim1.scale.set(curvedTrimScale[params.p_r_p][params.p_w], 0.2, 0.5);
		rightBackTrim1.position.set((params.p_w / 2 - TrimPos1[params.p_r_p][params.p_w]["x"]), (params.p_h + TrimPos1[params.p_r_p][params.p_w]["y"]), params.p_d / -2 - 0.2);
		rightBackTrim1.rotation.z = -bowsRotation[params.p_r_p] - trimRotation1[params.p_r_p][params.p_w];
		rightBackTrim1.visible = (params.p_r_s == "1") ? true : false;
		const_var.b_t_M_R.add(rightBackTrim1);

		// right Back Trim second small curve
		let rightBackTrim2 = new THREE.Mesh(trimGeometry, trimMaterial);
		rightBackTrim2.name = "rightBackTrim2";
		rightBackTrim2.scale.set(0.12, 0.19 + 0.1, 0.5);
		rightBackTrim2.position.set((params.p_w / 2 - 0.101), (params.p_h + 0.405), params.p_d / -2 - 0.2);
		rightBackTrim2.rotation.z = -Math.PI / 3.4;
		rightBackTrim2.visible = (params.p_r_s == "1") ? true : false;
		const_var.b_t_M_R.add(rightBackTrim2);

		//right Back Trim third curve
		let rightBackTrim3 = new THREE.Mesh(trimGeometry, trimMaterial);
		rightBackTrim3.name = "rightBackTrim3";
		rightBackTrim3.scale.set(0.095, 0.21 + 0.073, 0.5);
		rightBackTrim3.position.set((params.p_w / 2 - 0.068), (params.p_h + 0.345), params.p_d / -2 - 0.2);
		rightBackTrim3.rotation.z = -Math.PI / 2.35;
		rightBackTrim3.visible = (params.p_r_s == "1") ? true : false;
		const_var.b_t_M_R.add(rightBackTrim3);

		//right Back Trim forth curve
		let rightBackTrim4 = new THREE.Mesh(TrimGeo, TrimMaterial);
		rightBackTrim4.name = "rightBackTrim4";
		rightBackTrim4.scale.set(0.5 + 0.17, 0.35, 0.5);
		rightBackTrim4.position.set(params.p_w / 2 - 0.058, params.p_h + 0.145, params.p_d / -2 - 0.2);
		rightBackTrim4.visible = (params.p_r_s == "1") ? true : false;
		const_var.b_t_M_R.add(rightBackTrim4);


		//Building Roof Left Front Bow	
		let leftFrontBow = new THREE.Mesh(bowGeometry, bowMaterial);
		leftFrontBow.name = "leftFrontBow";
		leftFrontBow.scale.set(params.p_w / 2, 0.25, 1);
		leftFrontBow.scale.x = (params.singleSlope == true) ? params.p_w + f_S_LeanBowsScale[params.p_r_p][params.p_w] : params.p_w / 2 + bowsScale[params.p_r_p][params.p_w];
		leftFrontBow.position.set(params.p_w / -4 + 0.08, params.p_h + hInc + 0.03 + hFrR, params.p_d / 2 - 0.12);
		leftFrontBow.position.x = (params.singleSlope == true) ? 0 : params.p_w / -4 + 0.08;
		leftFrontBow.position.y = (params.singleSlope == true) ? params.p_h + f_S_LeanBowsHeight[params.p_r_p][params.p_w] : params.p_h + hInc + 0.03 + hFrR;
		leftFrontBow.rotation.z = bowsRotation[params.p_r_p];
		leftFrontBow.visible = (params.p_r_s != "1") ? true : false;
		const_var.b_t_M_L.add(leftFrontBow);


		//Left Front Trim for A-frame and Vertical
		let leftFrontTrimABowGeometry = new THREE.BoxGeometry(1, 0.6 + 0.2, 0.2 + 0.1);
		let leftFrontTrimA = new THREE.Mesh(leftFrontTrimABowGeometry, bowMaterialt);
		leftFrontTrimA.name = "leftFrontTrimA";
		leftFrontTrimA.scale.set(params.p_w / 2, 0.2 + 0.08, 0.5);
		leftFrontTrimA.scale.x = params.p_w / 2 + bowsScaleA[params.p_r_p][params.p_w] + 0.11;
		leftFrontTrimA.position.set(params.p_w / -4, params.p_h + hInc + 0.03 + hFrR, params.p_d / 2 - 0.47);
		if (params.p_r_s == "2") {
			leftFrontTrimA.scale.set(params.p_w / 2, 0.2 + 0.08, 1.5);
			leftFrontTrimA.scale.x = params.p_w / 2 + bowsScaleA[params.p_r_p][params.p_w] + 0.11;
			leftFrontTrimA.position.set(params.p_w / -4, params.p_h + hInc + 0.03 + hFrR, (params.p_d / 2 + 0.1) - 0.47);
		}
		leftFrontTrimA.rotation.z = bowsRotation[params.p_r_p];

		leftFrontTrimA.visible = (params.p_r_s == "1" || params.singleSlope == true) ? false : true;
		const_var.b_t_M_L.add(leftFrontTrimA);


		//Left Back Trim for A-frame and Vertical
		let leftBackTrimA = new THREE.Mesh(leftFrontTrimABowGeometry, bowMaterialt);
		leftBackTrimA.name = "leftBackTrimA";
		leftBackTrimA.scale.set(params.p_w / 2, 0.2 + 0.08, 0.5);
		leftBackTrimA.scale.x = params.p_w / 2 + bowsScaleA[params.p_r_p][params.p_w] + 0.11;
		leftBackTrimA.position.set(params.p_w / -4, params.p_h + hInc + 0.03 + hFrR, params.p_d / -2 + 0.47);
		if (params.p_r_s == "2") {
			leftBackTrimA.scale.set(params.p_w / 2, 0.2 + 0.08, 1.5);
			leftBackTrimA.scale.x = params.p_w / 2 + bowsScaleA[params.p_r_p][params.p_w] + 0.11;
			leftBackTrimA.position.set(params.p_w / -4, params.p_h + hInc + 0.03 + hFrR, (params.p_d / -2 - 0.1) + 0.47);
		}
		leftBackTrimA.rotation.z = bowsRotation[params.p_r_p];
		leftBackTrimA.visible = (params.p_r_s == "1" || params.singleSlope == true) ? false : true;
		const_var.b_t_M_L.add(leftBackTrimA);


		//Right Front Trim for A-frame and Vertical
		let rightFrontTrimA = new THREE.Mesh(leftFrontTrimABowGeometry, bowMaterialt);
		rightFrontTrimA.name = "RightFrontTrimA";
		rightFrontTrimA.scale.set(params.p_w / 2, 0.2 + 0.08, 0.5);
		rightFrontTrimA.scale.x = params.p_w / 2 + bowsScaleA[params.p_r_p][params.p_w] + 0.11;
		rightFrontTrimA.position.set(params.p_w / 4, params.p_h + hInc + 0.03 + hFrR, params.p_d / 2 - 0.47);
		if (params.p_r_s == "2") {
			rightFrontTrimA.scale.set(params.p_w / 2, 0.2 + 0.08, 1.5);
			rightFrontTrimA.scale.x = params.p_w / 2 + bowsScaleA[params.p_r_p][params.p_w] + 0.11;
			rightFrontTrimA.position.set(params.p_w / 4, params.p_h + hInc + 0.03 + hFrR, (params.p_d / 2 + 0.1) - 0.47);
		}
		rightFrontTrimA.rotation.z = -bowsRotation[params.p_r_p];
		rightFrontTrimA.visible = (params.p_r_s != "1") ? true : false;
		const_var.b_t_M_R.add(rightFrontTrimA);

		//Right Back Trim for A-frame and Vertical
		let rightBackTrimA = new THREE.Mesh(leftFrontTrimABowGeometry, bowMaterialt);
		rightBackTrimA.name = "rightBackTrimA";
		rightBackTrimA.scale.set(params.p_w / 2, 0.2 + 0.08, 0.5);
		rightBackTrimA.scale.x = params.p_w / 2 + bowsScaleA[params.p_r_p][params.p_w] + 0.11;
		rightBackTrimA.position.set(params.p_w / 4, params.p_h + hInc + 0.03 + hFrR, params.p_d / -2 + 0.47);
		if (params.p_r_s == "2") {
			rightBackTrimA.scale.set(params.p_w / 2, 0.2 + 0.08, 1.5);
			rightBackTrimA.scale.x = params.p_w / 2 + bowsScaleA[params.p_r_p][params.p_w] + 0.11;
			rightBackTrimA.position.set(params.p_w / 4, params.p_h + hInc + 0.03 + hFrR, (params.p_d / -2 - 0.1) - 0.47);
		}
		rightBackTrimA.rotation.z = -bowsRotation[params.p_r_p];
		rightBackTrimA.visible = (params.p_r_s != "1") ? true : false;
		const_var.b_t_M_R.add(rightBackTrimA);

		//Center Building Left Back Trim for A-frame and Vertical
		let sideTrimGeo = new THREE.BoxGeometry(0.31 + 0.2, 1, 0.2 + 0.07);
		let sideTrimMaterial = new THREE.MeshBasicMaterial({ color: 0x0E6655, side: THREE.DoubleSide });
		let centerBuildingLeftTrim = new THREE.Mesh(sideTrimGeo, sideTrimMaterial);
		centerBuildingLeftTrim.name = "centerBuildingLeftTrim";
		centerBuildingLeftTrim.scale.set(0.28, (params.p_d + 0.1) - 0.94, 0.84);
		centerBuildingLeftTrim.position.set(params.p_w / -2 - 0.061, params.p_h - 0.0855, 0);
		if (params.p_r_s == "2") {
			centerBuildingLeftTrim.scale.set(0.68, (params.p_d + 0.5) - 0.94, 0.84);
			centerBuildingLeftTrim.position.set(params.p_w / -2 - 0.121, params.p_h - 0.101, 0);
		}
		centerBuildingLeftTrim.rotation.x = Math.PI / -2;
		centerBuildingLeftTrim.rotation.y = Math.PI / -12.6;
		centerBuildingLeftTrim.visible = (params.p_r_s == "1" || params.singleSlope) ? false : true;
		const_var.b_t_M_L.add(centerBuildingLeftTrim);


		//Center Building Right Back Trim for A-frame and Vertical
		let centerBuildingRightTrim = new THREE.Mesh(sideTrimGeo, sideTrimMaterial);
		centerBuildingRightTrim.name = "centerBuildingRightTrim";
		centerBuildingRightTrim.scale.set(0.28, (params.p_d + 0.1) - 0.94, 0.84);
		centerBuildingRightTrim.position.set(params.p_w / 2 + 0.061, params.p_h - 0.0855, 0);
		if (params.p_r_s == "2") {
			centerBuildingRightTrim.scale.set(0.68, (params.p_d + 0.5) - 0.94, 0.84);
			centerBuildingRightTrim.position.set(params.p_w / 2 + 0.121, params.p_h - 0.101, 0);
		}
		centerBuildingRightTrim.rotation.x = Math.PI / -2;
		centerBuildingRightTrim.rotation.y = Math.PI / 12.6;
		centerBuildingRightTrim.visible = (params.p_r_s != "1") ? true : false;
		const_var.b_t_M_R.add(centerBuildingRightTrim);

		/* Free Standing LeanTo Front Trim */
		let f_S_LeanToFrontTrim = new THREE.Mesh(new THREE.BoxGeometry(1, 0.6 + 0.2, 0.2 + 0.1), bowMaterialt);
		f_S_LeanToFrontTrim.name = "F_S_L_F_T";
		f_S_LeanToFrontTrim.visible = params.singleSlope;
		f_S_LeanToFrontTrim.scale.set(params.p_w / 2, 0.335, 1);
		f_S_LeanToFrontTrim.scale.x = params.p_w + f_S_LeanEndTrimsScale[params.p_r_p][params.p_w];
		f_S_LeanToFrontTrim.position.set(0, params.p_h + f_S_LeanEndTrimsHeight[params.p_r_p][params.p_w], params.p_d / 2 + 0.085);
		f_S_LeanToFrontTrim.position.x = (params.p_r_p == 3) ? -0.05 : 0
		if (params.p_r_s == "2") {
			f_S_LeanToFrontTrim.scale.set(params.p_w / 2, 0.335, 2.6);
			f_S_LeanToFrontTrim.scale.x = params.p_w + f_S_LeanEndTrimsScale[params.p_r_p][params.p_w];
			f_S_LeanToFrontTrim.position.set(0, params.p_h + f_S_LeanEndTrimsHeight[params.p_r_p][params.p_w], params.p_d / 2 + 0.24);
		}
		f_S_LeanToFrontTrim.rotation.z = f_S_LeanEndTrimsRotation[params.p_r_p][params.p_w];
		const_var.F_S_L_R.add(f_S_LeanToFrontTrim);

		/* Free Standing LeanTo Left Trim */
		let f_S_LeansideTrimGeo = new THREE.BoxGeometry(0.31, 1, 0.2);
		let f_S_LeansideTrimMaterial = new THREE.MeshBasicMaterial({ color: 0x0E6655, side: THREE.DoubleSide });
		let f_S_LeanLeftTrim = new THREE.Mesh(f_S_LeansideTrimGeo, f_S_LeansideTrimMaterial);
		f_S_LeanLeftTrim.name = "F_S_L_L_T";
		f_S_LeanLeftTrim.rotation.x = Math.PI / -2;
		f_S_LeanLeftTrim.visible = params.singleSlope;
		f_S_LeanLeftTrim.scale.set(1, params.p_d + 0.37, 1);
		f_S_LeanLeftTrim.position.set(params.p_w / -2 - 0.16, params.p_h - f_S_L_L_TrimHeight[params.p_r_p][params.p_w], 0);
		f_S_LeanLeftTrim.rotation.y = f_S_L_L_Trim_Rot_Y[params.p_r_p][params.p_w];
		if (params.p_r_s == "2") {
			f_S_LeanLeftTrim.scale.set(1 + 0.6, params.p_d + 0.37 + 0.65, 1);
			f_S_LeanLeftTrim.position.set(params.p_w / -2 - 0.26, params.p_h - f_S_L_L_TrimHeight[params.p_r_p][params.p_w] - 0.022, 0);
			f_S_LeanLeftTrim.position.set(params.p_w / -2 - 0.26, params.p_h - f_S_L_L_TrimHeight[params.p_r_p][params.p_w] - 0.016, 0);
			f_S_LeanLeftTrim.rotation.y = f_S_L_L_Trim_Rot_Y[params.p_r_p][params.p_w] - 0.03;
		}
		if (params.p_r_s == "2" && params.p_r_p == "3") {
			f_S_LeanLeftTrim.scale.set(1 + 0.3, params.p_d + 0.37 + 0.65, 1);
			f_S_LeanLeftTrim.position.set(params.p_w / -2 - 0.22, params.p_h - f_S_L_L_TrimHeight[params.p_r_p][params.p_w] - 0.018, 0);
			f_S_LeanLeftTrim.rotation.y = f_S_L_L_Trim_Rot_Y[params.p_r_p][params.p_w];
		}
		const_var.F_S_L_R.add(f_S_LeanLeftTrim);

		/* Free Standing LeanTo Right Trim */
		const f_S_L_R_Trim_Rot_Y = { "2": 2.98, "3": 2.9 }
		let f_S_LeanRightTrim = new THREE.Mesh(sideTrimGeo, sideTrimMaterial);
		f_S_LeanRightTrim.name = "F_S_L_R_T";
		f_S_LeanRightTrim.rotation.x = Math.PI / -2;
		f_S_LeanRightTrim.visible = params.singleSlope;

		f_S_LeanRightTrim.scale.set(1, params.p_d + 0.37, 1);
		f_S_LeanRightTrim.position.set(params.p_w / 2 + 0.04, params.p_h + f_S_L_R_TrimHeight[params.p_r_p][params.p_w], 0);
		f_S_LeanRightTrim.rotation.y = f_S_L_R_Trim_Rot_Y[params.p_r_p];
		if (params.p_r_p == "3") {
			f_S_LeanRightTrim.scale.set(0.5, params.p_d + 0.37, 1);
			f_S_LeanRightTrim.position.set(params.p_w / 2 - 0.05, params.p_h + f_S_L_R_TrimHeight[params.p_r_p][params.p_w], 0);
		}
		if (params.p_r_s == "2") {
			f_S_LeanRightTrim.scale.set(1 + 0.3, params.p_d + 0.37 + 0.65, 1);
			f_S_LeanRightTrim.position.set(params.p_w / 2 + 0.08, (params.p_h + f_S_L_R_TrimHeight[params.p_r_p][params.p_w]) + 0.009, 0);
			f_S_LeanRightTrim.position.set(params.p_w / 2 + 0.08, (params.p_h + f_S_L_R_TrimHeight[params.p_r_p][params.p_w]) + 0.006, 0);
		}
		if (params.p_r_p == "3" && params.p_r_s == "2") {
			const f_S_L_R_Trim_Rot_Y = { "2": 2.98, "3": 2.9 }
			var f_S_L_R_TrimScale = { "3": { "6": 0.9, "7": 0.83, "8": 0.79, "9": 0.75, "10": 0.72, "11": 0.69, "12": 0.6, "13": 0.52, "14": 0.5, "15": 0.5, "16": 0.4, "17": 0.35, "18": 0.30, "19": 0.20, "20": 0.13, "21": 0.10, "22": 0.20, "23": 0.20, "24": 0.10, "25": 0.55, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, }, }
			var f_S_L_R_TrimPosX = { "3": { "6": 0.1, "7": 0.12, "8": 0.1, "9": 0.1, "10": 0.09, "11": 0.08, "12": 0.075, "13": 0.06, "14": 0.05, "15": 0.03, "16": 0.03, "17": 0.03, "18": 0.03, "19": 0.03, "20": 0.02, "21": 0.02, "22": -0.02, "23": -0.03, "24": -0.03, "25": 0.55, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, }, }
			var f_S_L_R_TrimPosY = { "3": { "6": 1.417, "7": 1.66, "8": 1.89, "9": 2.135, "10": 2.398, "11": 2.645, "12": 2.895, "13": 3.155, "14": 3.39, "15": 3.635, "16": 3.91, "17": 4.114, "18": 4.382, "19": 4.625, "20": 4.88, "21": 5.137, "22": 5.375, "23": 5.615, "24": 5.873, "25": 0.55, "26": 0.55, "27": 0.60, "28": 0.65, "29": 0.70, "30": 0.75, }, }
			f_S_LeanRightTrim.scale.set(0.5 + f_S_L_R_TrimScale[params.p_r_p][params.p_w], params.p_d + 0.37 + 0.65, 0.98);
			f_S_LeanRightTrim.position.set(params.p_w / 2 + f_S_L_R_TrimPosX[params.p_r_p][params.p_w], params.p_h + f_S_L_R_TrimPosY[params.p_r_p][params.p_w], 0);
			f_S_LeanRightTrim.rotation.y = f_S_L_R_Trim_Rot_Y[params.p_r_p];
		}
		const_var.F_S_L_R.add(f_S_LeanRightTrim);

		//Building Roof Left Front Regular Bow
		let leftFrontRegularBow = new THREE.Mesh(bowGeometry, bowMaterial);
		leftFrontRegularBow.name = "leftFrontRegularBow";
		leftFrontRegularBow.scale.set(params.p_w / 2, 0.25, 1);
		leftFrontRegularBow.scale.x = (params.p_w / 2 + bowsScale[params.p_r_p][params.p_w]) - BowScaleR[params.p_r_p][params.p_w];
		leftFrontRegularBow.position.set(params.p_w / -4 + 0.19, params.p_h + hInc + 0.03 + hFrR, params.p_d / 2 - 0.12);
		leftFrontRegularBow.rotation.z = bowsRotationR[params.p_r_p][params.p_w];
		leftFrontRegularBow.visible = (params.p_r_s == "1") ? true : false;
		const_var.b_t_M_L.add(leftFrontRegularBow);

		// Left Front Bow first small curve
		let leftFrontBow1 = new THREE.Mesh(curvedBowGeometry, bowMaterial);
		leftFrontBow1.name = "leftFrontBow1";
		leftFrontBow1.scale.set(cBowScale1[params.p_r_p][params.p_w], 0.25, 1);
		leftFrontBow1.position.set((params.p_w / -2 + cBowPos1[params.p_r_p][params.p_w]["x"]), (params.p_h + cBowPos1[params.p_r_p][params.p_w]["y"]), params.p_d / 2 - 0.12);
		leftFrontBow1.rotation.z = cBowRotation1[params.p_r_p][params.p_w];;
		leftFrontBow1.visible = (params.p_r_s == "1") ? true : false;
		const_var.b_t_M_L.add(leftFrontBow1);

		//Left Front Bow second curve
		let leftFrontBow2 = new THREE.Mesh(curvedBowGeometry, bowMaterial);
		leftFrontBow2.name = "leftFrontBow2";
		leftFrontBow2.scale.set(0.12, 0.25, 1);
		leftFrontBow2.position.set(params.p_w / -2 + 0.16, params.p_h + 0.34, params.p_d / 2 - 0.12);
		leftFrontBow2.rotation.z = 0.7600;
		leftFrontBow2.visible = (params.p_r_s == "1") ? true : false;
		const_var.b_t_M_L.add(leftFrontBow2);

		//Left Front Bow third curve
		let leftFrontBow3 = new THREE.Mesh(curvedBowGeometry, bowMaterial);
		leftFrontBow3.name = "leftFrontBow3";
		leftFrontBow3.scale.set(0.40, 0.25, 1);
		leftFrontBow3.position.set(params.p_w / -2 + 0.11, params.p_h + 0.15, params.p_d / 2 - 0.12);
		leftFrontBow3.rotation.z = 1.41000;
		leftFrontBow3.visible = (params.p_r_s == "1") ? true : false;
		const_var.b_t_M_L.add(leftFrontBow3)


		//Center Building Right Front Bow
		let rightFrontBow = new THREE.Mesh(bowGeometry, bowMaterial);
		rightFrontBow.name = "rightFrontBow";
		rightFrontBow.scale.set(params.p_w / 2, 0.25, 1);
		rightFrontBow.rotation.z = -bowsRotation[params.p_r_p];
		rightFrontBow.scale.x = params.p_w / 2 + bowsScale[params.p_r_p][params.p_w];
		rightFrontBow.position.set(params.p_w / 4 - 0.08, params.p_h + hInc + 0.03 + hFrR, params.p_d / 2 - 0.12);
		rightFrontBow.visible = (params.p_r_s != "1") ? true : false;
		const_var.b_t_M_R.add(rightFrontBow);

		//Building Roof Right Front Regular Bow
		let rightFrontRegularBow = new THREE.Mesh(bowGeometry, bowMaterial);
		rightFrontRegularBow.name = "rightFrontRegularBow";
		rightFrontRegularBow.scale.set(params.p_w / 2, 0.25, 1);
		rightFrontRegularBow.scale.x = (params.p_w / 2 + bowsScale[params.p_r_p][params.p_w]) - BowScaleR[params.p_r_p][params.p_w];
		rightFrontRegularBow.position.set(params.p_w / 4 - 0.19, params.p_h + hInc + 0.03 + hFrR, params.p_d / 2 - 0.12);
		rightFrontRegularBow.rotation.z = -bowsRotationR[params.p_r_p][params.p_w];
		rightFrontRegularBow.visible = (params.p_r_s == "1") ? true : false;
		const_var.b_t_M_R.add(rightFrontRegularBow);

		// Right Front Bow first small curve
		let rightFrontBow1 = new THREE.Mesh(curvedBowGeometry, bowMaterial);
		rightFrontBow1.name = "rightFrontBow1";
		rightFrontBow1.scale.set(cBowScale1[params.p_r_p][params.p_w], 0.25, 1);
		rightFrontBow1.position.set((params.p_w / 2 - cBowPos1[params.p_r_p][params.p_w]["x"]), (params.p_h + cBowPos1[params.p_r_p][params.p_w]["y"]), params.p_d / 2 - 0.12);
		rightFrontBow1.rotation.z = -cBowRotation1[params.p_r_p][params.p_w];;
		rightFrontBow1.visible = (params.p_r_s == "1") ? true : false;
		const_var.b_t_M_R.add(rightFrontBow1);

		//Right Front Bow second curve
		let rightFrontBow2 = new THREE.Mesh(curvedBowGeometry, bowMaterial);
		rightFrontBow2.name = "rightFrontBow2";
		rightFrontBow2.scale.set(0.12, 0.25, 1);
		rightFrontBow2.position.set(params.p_w / 2 - 0.16, params.p_h + 0.34, params.p_d / 2 - 0.12);
		rightFrontBow2.rotation.z = -0.7600;
		rightFrontBow2.visible = (params.p_r_s == "1") ? true : false;
		const_var.b_t_M_R.add(rightFrontBow2);

		//Right Front Bow third curve
		let rightFrontBow3 = new THREE.Mesh(curvedBowGeometry, bowMaterial);
		rightFrontBow3.name = "rightFrontBow3";
		rightFrontBow3.scale.set(0.40, 0.25, 1);
		rightFrontBow3.position.set(params.p_w / 2 - 0.11, params.p_h + 0.15, params.p_d / 2 - 0.12);
		rightFrontBow3.rotation.z = -1.41000;
		rightFrontBow3.visible = (params.p_r_s == "1") ? true : false;
		const_var.b_t_M_R.add(rightFrontBow3)

		//Adjuct Horizontal Bow Y axis Position With Roof Pitch

		let hrzBowYpos = {
			"1": { "12": 0.05, "13": 0.05, "14": 0.05, "15": 0.05, "16": 0.05, "17": 0.05, "18": 0.05, "19": 0.05, "20": 0.05, "21": 0.05, "22": 0.05, "23": 0.05, "24": 0.05, "25": 0.05, "26": 0.2, "27": 0.2, "28": 0.2, "29": 0.2, "30": 0.2, "31": 0.2 },
			"2": { "12": 0.15, "13": 0.15, "14": 0.15, "15": 0.15, "16": 0.15, "17": 0.15, "18": 0.15, "19": 0.15, "20": 0.15, "21": 0.15, "22": 0.15, "23": 0.15, "24": 0.15, "25": 0.15, "26": 0.4, "27": 0.4, "28": 0.4, "29": 0.4, "30": 0.4, "31": 0.4 },
			"3": { "12": 0.26, "13": 0.26, "14": 0.26, "15": 0.26, "16": 0.26, "17": 0.26, "18": 0.26, "19": 0.25, "20": 0.25, "21": 0.25, "22": 0.25, "23": 0.25, "24": 0.25, "25": 0.25, "26": 0.4, "27": 0.4, "28": 0.4, "29": 0.4, "30": 0.4, "31": 0.6 },
			"4": { "12": 0.40, "13": 0.40, "14": 0.40, "15": 0.40, "16": 0.40, "17": 0.40, "18": 0.40, "19": 0.40, "20": 0.40, "21": 0.40, "22": 0.40, "23": 0.40, "24": 0.40, "25": 0.40, "26": 0.2, "27": 0.2, "28": 0.2, "29": 0.2, "30": 0.2, "31": 0.2 },
			"5": { "12": 0.52, "13": 0.52, "14": 0.52, "15": 0.52, "16": 0.52, "17": 0.51, "18": 0.51, "19": 0.51, "20": 0.51, "21": 0.50, "22": 0.50, "23": 0.50, "24": 0.50, "25": 0.50, "26": 0.18, "27": 0.18, "28": 0.18, "29": 0.2, "30": 0.2, "31": 0.4 },
			"6": { "12": 0.60, "13": 0.60, "14": 0.60, "15": 0.60, "16": 0.60, "17": 0.60, "18": 0.60, "19": 0.60, "20": 0.60, "21": 0.60, "22": 0.60, "23": 0.60, "24": 0.60, "25": 0.60, "26": 0.4, "27": 0.4, "28": 0.4, "29": 0.4, "30": 0.4, "31": 0.4 },
		};


		//Adjuct Height For Bow 
		let hIncForBow = (params.p_w < 25) ? (2 * hInc - hrzBowYpos[params.p_r_p][params.p_w]) : hInc;

		//Adjust Scale For Bow
		let hBowsScale = (params.p_w < 25) ? 3 : params.p_w / 2 + hrzBowYpos[params.p_r_p][params.p_w];

		//Front Middle Small Bow Snow 	
		let hrzFMBow = new THREE.Mesh(bowGeometry, bowMaterial);
		hrzFMBow.name = "hrzFMBow";
		hrzFMBow.scale.set(params.p_w / 2, 0.2, 1);
		hrzFMBow.scale.x = hBowsScale;
		hrzFMBow.position.set(0, params.p_h + hIncForBow + hFrR, params.p_d / 2 - 0.12);
		// hrzFMBow.visible = (params.singleSlope == true )?false:true

		const_var.b_t_M_R.add(hrzFMBow);

		//Adjust Vetical Front Middle Bow Yaxis Position With Roof Pitch
		let vrtBowYpos = { "1": 0.15, "2": 0.23, "3": 0.33, "4": 0.43, "5": 0.53, "6": 0.63 };
		//Adjust Vetical Front Middle Bow Scale 
		let vrtBowScale = { "1": 0.23, "2": 0.23, "3": 0.3, "4": 0.2, "5": 0.0, "6": 0.0 };
		//Adjust Vetical Front Middle Bow Yaxis Position With Roof Pitch and Building Width
		/*let vrtBowYposN =  {
						   "1":{"26":0.15,"27":0.15,"28":0.15,"29":0.15,"30":0.16,"31":0.17},
						   "2":{"26":0.26,"27":0.26,"28":0.26,"29":0.27,"30":0.28,"31":0.29},
						   "3":{"26":0.37,"27":0.37,"28":0.37,"29":0.39,"30":0.41,"31":0.41},
						   "4":{"26":0.45,"27":0.49,"28":0.50,"29":0.51,"30":0.52,"31":0.53},
						   "5":{"26":0.55,"27":0.57,"28":0.59,"29":0.61,"30":0.63,"31":0.65},
						   "6":{"26":0.65,"27":0.67,"28":0.69,"29":0.71,"30":0.75,"31":0.75}
						  };*/
		let vrtBowYposN = {
			"1": { "26": 0.15, "27": 0.15, "28": 0.15, "29": 0.15, "30": 0.16, "31": 0.17, "32": 0.2, "33": 0.2, "34": 0.2, "35": 0.2, "36": 0.2, "37": 0.2, "38": 0.2, "39": 0.2, "40": 0.2 },
			"2": { "26": 0.26, "27": 0.26, "28": 0.26, "29": 0.27, "30": 0.28, "31": 0.29, "32": 0.2, "33": 0.2, "34": 0.2, "35": 0.2, "36": 0.2, "37": 0.2, "38": 0.2, "39": 0.2, "40": 0.2 },
			"3": { "26": 0.37, "27": 0.37, "28": 0.37, "29": 0.39, "30": 0.41, "31": 0.41, "32": 0.2, "33": 0.2, "34": 0.2, "35": 0.2, "36": 0.2, "37": 0.2, "38": 0.2, "39": 0.2, "40": 0.2 },
			"4": { "26": 0.45, "27": 0.49, "28": 0.50, "29": 0.51, "30": 0.52, "31": 0.53, "32": 0.2, "33": 0.2, "34": 0.2, "35": 0.2, "36": 0.2, "37": 0.2, "38": 0.2, "39": 0.2, "40": 0.2 },
			"5": { "26": 0.55, "27": 0.57, "28": 0.59, "29": 0.61, "30": 0.63, "31": 0.65, "32": 0.2, "33": 0.2, "34": 0.2, "35": 0.2, "36": 0.2, "37": 0.2, "38": 0.2, "39": 0.2, "40": 0.2 },
			"6": { "26": 0.65, "27": 0.67, "28": 0.69, "29": 0.71, "30": 0.75, "31": 0.75, "32": 0.2, "33": 0.2, "34": 0.2, "35": 0.2, "36": 0.2, "37": 0.2, "38": 0.2, "39": 0.2, "40": 0.2 }
		};
		//Center Building Front Middle Verticall Bow				  
		let vrtFMBow = new THREE.Mesh(bowGeometry, bowMaterial);
		vrtFMBow.name = "vrtFMBow";
		vrtFMBow.scale.set(0.2, hInc + vrtBowScale[params.p_r_p], 1);
		vrtFMBow.position.set(params.p_w / -8, params.p_h + hIncForBow + vrtBowYposN[params.p_r_p][params.p_w], params.p_d / 2 - 0.12);
		vrtFMBow.rotation.z = Math.PI / 4;
		vrtFMBow.position.y = params.p_h + hIncForBow + vrtBowYposN[params.p_r_p][params.p_w] + hFrR + 0.02;
		vrtFMBow.visible = (params.p_w >= 26 && params.p_w <= 30) ? true : false
		const_var.b_t_M_R.add(vrtFMBow);

		//Front Vertically Bow For Right Side Of Building
		let vrtRFMBow = new THREE.Mesh(bowGeometry, bowMaterial);
		vrtRFMBow.name = "vrtRFMBow";
		vrtRFMBow.scale.set(0.2, hInc, 1);
		vrtRFMBow.position.set(params.p_w / 8, params.p_h + hIncForBow + vrtBowYposN[params.p_r_p][params.p_w], params.p_d / 2 - 0.12);
		vrtRFMBow.rotation.z = -Math.PI / 4;
		vrtRFMBow.position.y = params.p_h + hIncForBow + vrtBowYposN[params.p_r_p][params.p_w] + hFrR;
		vrtRFMBow.visible = (params.p_w >= 26 && params.p_w <= 30) ? true : false
		const_var.b_t_M_R.add(vrtRFMBow);


		//Set Corner Connector Of Building
		let lftCXPosN = { "1": 0.00, "2": 0.10, "3": 0.12, "4": 0.20, "5": 0.25, "6": 0.30, };
		let lftCYPos = { "1": 0.10, "2": 0.15, "3": 0.15, "4": 0.15, "5": 0.20, "6": 0.20, };

		//Center Building Left Front Corrner
		let leftFrontCorner = new THREE.Mesh(cornerGeometry, bowMaterial);
		leftFrontCorner.name = "leftFrontCorner";
		leftFrontCorner.scale.set(2.12, 0.2, 0.5);
		leftFrontCorner.scale.set(2.11, 0.2, 0.5);
		leftFrontCorner.position.x = params.p_w / -2 + 0.83 - lftCXPosN[params.p_r_p];
		leftFrontCorner.position.y = params.p_h - 0.75 + lftCYPos[params.p_r_p] + hFrRCorner;
		leftFrontCorner.position.z = params.p_d / 2 - 0.12;
		leftFrontCorner.rotation.z = 0.7 + bowsRotation[params.p_r_p];
		leftFrontCorner.visible = (params.p_r_p <= 6) ? true : false;
		const_var.b_t_M_L.add(leftFrontCorner);


		//Center Building Right Front Corrner
		let rightFrontCorner = new THREE.Mesh(cornerGeometry, bowMaterial);
		rightFrontCorner.name = "rightFrontCorner";
		rightFrontCorner.visible = (params.p_r_p <= 6) ? true : false;
		rightFrontCorner.scale.set(2.12, 0.2, 0.5);
		rightFrontCorner.position.x = params.p_w / 2 - 0.83 + lftCXPosN[params.p_r_p];
		rightFrontCorner.position.z = params.p_d / 2 - 0.12;
		rightFrontCorner.rotation.z = -(0.7 + bowsRotation[params.p_r_p]);
		rightFrontCorner.position.y = params.p_h - 0.75 + lftCYPos[params.p_r_p] + hFrRCorner;
		const_var.b_t_M_R.add(rightFrontCorner);

		//f_S_Lean Right Front Corrner
		var f_S_LeanRightFrontCorner = new THREE.Mesh(cornerGeometry, bowMaterial);
		f_S_LeanRightFrontCorner.name = "f_S_L_R_FrontCorner";
		f_S_LeanRightFrontCorner.scale.set(2.16, 0.2, 0.5);
		f_S_LeanRightFrontCorner.position.x = params.p_w / 2 - 0.95 + lftCXPosN[params.p_r_p];
		f_S_LeanRightFrontCorner.position.y = params.p_h + f_S_LeanRightCorner[params.p_r_p][params.p_w];
		f_S_LeanRightFrontCorner.position.z = params.p_d / 2 - 0.12;
		f_S_LeanRightFrontCorner.rotation.z = -(0.7 + bowsRotation[params.p_r_p]);
		f_S_LeanRightFrontCorner.visible = (params.singleSlope == true) ? true : false;
		const_var.F_S_L_R.add(f_S_LeanRightFrontCorner);


		//Right Front Lean Porch ridge cap
		let RFLrcquad_vertices =
			[
				-0.5, 0.0, 0.5,
				0.0, 1.0, 0.5,
				0.0, 1.0, -0.5,
				-0.5, 0.0, -0.5,

				0.5, 0.0, 0.5,
				0.0, 1.0, 0.5,
				0.0, 1.0, -0.5,
				0.5, 0.0, -0.5
			];

		let RFLrcquad_uvs =
			[
				0.0, 0.0,
				1.0, 0.0,
				1.0, 1.0,
				0.0, 1.0,

				0.0, 0.0,
				1.0, 0.0,
				1.0, 1.0,
				0.0, 1.0
			];

		let RFLrcquad_indices =
			[
				0, 2, 1, 0, 3, 2, 4, 6, 5, 4, 7, 6
			];

		let headChannelGeometry = new THREE.BufferGeometry();
		let RFLrcvertices = new Float32Array(RFLrcquad_vertices);
		let RFLrcuvs = new Float32Array(RFLrcquad_uvs);
		let RFLrcindices = new Uint32Array(RFLrcquad_indices)
		headChannelGeometry.setAttribute('position', new THREE.BufferAttribute(RFLrcvertices, 3));
		headChannelGeometry.setAttribute('uv', new THREE.BufferAttribute(RFLrcuvs, 2));
		headChannelGeometry.setIndex(new THREE.BufferAttribute(RFLrcindices, 1));
		var roofImg = verticalTexture;
		if (params.p_r_s == "3") {
			roofImg = verticalTexture;//"verticalTexture.jpeg";
		}
		else {
			roofImg = horizontalTexture;//"horizantalTexture.jpeg";
		}
		headChannelGeometry.computeVertexNormals();
		var rCalor = params.p_r_c.replace("#", "0x");
		let headChannelmaterial = new THREE.MeshPhongMaterial(
			{
				side: THREE.DoubleSide, color: 0xCB1202,
				specular: 0xFDF4DC,
				flatShading: true,
				dithering: true,
				combine: 2,
			});

		let RFLrcPhongMaterial = new THREE.MeshPhongMaterial({
			side: THREE.DoubleSide, shadowSide: THREE.DoubleSide,
			color: 0xffffff, emissive: 0xffffff, specular: 0xFDF4DC,

			flatShading: true, vertexColors: true, dithering: true,
			combine: 2, shininess: 30,
		});

		let headChannel = new THREE.Mesh(headChannelGeometry, RFLrcPhongMaterial);
		headChannel.name = "headChannel";
		const_var.b_t_M_L.add(headChannel);



		const_var.b_t_M_R.visible = (params.singleSlope == true) ? false : true;

	}
	render() {
		return <div ref={ref => (this.mount = ref)} />;
	}
}
