import React, { Component } from 'react';
import * as THREE from "three";
// import verticalTexture from '../assets/Roof/verticalTexture2.jpg';
import verticalTexture from '../assets/images/imgTextures/buildingImages/verticalTexture.jpeg';
import horizontalTexture from '../assets/images/imgTextures/buildingImages/horizantalTexture.jpeg';

export default class LeantoRoof extends Component {



	LeantoRoof = (const_var,params)=>{

		// Front Lento Roof
		var quad_vertices = [-0.5,0.0,0.5,   0.0,1.0,0.5,  0.0,1.0,-0.5, -0.5,0.0,-0.5,];
	
		var quad_uvs =
		[
		0.0, 0.0,
		1.0, 0.0,
		1.0, 1.0,
		0.0, 1.0,
		];
	
		var quad_indices =
		[
		0, 2, 1, 0, 3, 2
		];
	
		var fRoofGeometry1 = new THREE.BufferGeometry();
	
		var vertices = new Float32Array( quad_vertices );
		// Each vertex has one uv coordinate for texture mapping
		var uvs = new Float32Array( quad_uvs);
		// Use the four vertices to draw the two triangles that make up the square.
		var indices = new Uint32Array( quad_indices )
	
		// itemSize = 3 because there are 3 values (components) per vertex
		fRoofGeometry1.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
		fRoofGeometry1.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
		fRoofGeometry1.setIndex( new THREE.BufferAttribute( indices, 1 ) );
		var roofImg = verticalTexture;
		
		if(params.p_r_s=="3"){
			roofImg = verticalTexture;//"verticalTexture.jpeg";
		}
		else{
			roofImg = horizontalTexture;//"horizantalTexture.jpeg";
		}
		fRoofGeometry1.computeVertexNormals();
		var fRoofloader = new THREE.TextureLoader();
		var texture1 = fRoofloader.load(roofImg, function(texture1) {
		   texture1.wrapS = THREE.RepeatWrapping;
		   texture1.wrapT = THREE.RepeatWrapping;
		})
		   var rCalor = params.p_r_c.replace("#","0x");
		   var fRoofmaterial = new THREE.MeshBasicMaterial({
		   map: texture1,
		   wireframe:false,
		   side:THREE.DoubleSide,
		   color:0xFFFFFF
		   });
	
		var fRoof = new THREE.Mesh( fRoofGeometry1, fRoofmaterial );
		fRoof.name = "fRoof";
		fRoof.visible = false;
		fRoof.scale.set(params.leanF_p_w,params.b_l_t_r_pF,params.leanF_p_d);
		fRoof.position.set(0,params.leanF_p_h,0);	
		if(params.p_r_s=="3"){
			fRoof.material.map.rotation = Math.PI/2;
			fRoof.material.map.repeat.set(params.leanF_p_d,1);
		}
		else{
			fRoof.material.map.rotation = -Math.PI/2;
			fRoof.material.map.repeat.set(1,params.leanF_p_w/2 - 4);
		}
		fRoof.material.color.setHex( rCalor );
		const_var.b_t_M_F_t_F.add( fRoof );
	// });



	//Left Lean To Roof
	var quad_vertices =
	[
	-0.5,  0.0, 0.5,
	0.0,  1.0, 0.5,
	0.0, 1.0, -0.5,
	-0.5, 0.0, -0.5,
	];

	var quad_uvs =
	[
	0.0, 0.0,
	1.0, 0.0,
	1.0, 1.0,
	0.0, 1.0,
	];

	var quad_indices =
	[
	0, 2, 1, 0, 3, 2
	];

	var lRoofGeometry1 = new THREE.BufferGeometry();

	var vertices = new Float32Array( quad_vertices );
	// Each vertex has one uv coordinate for texture mapping
	var uvs = new Float32Array( quad_uvs);
	// Use the four vertices to draw the two triangles that make up the square.
	var indices = new Uint32Array( quad_indices )

	// itemSize = 3 because there are 3 values (components) per vertex
	lRoofGeometry1.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	lRoofGeometry1.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
	lRoofGeometry1.setIndex( new THREE.BufferAttribute( indices, 1 ) );
	var roofImg = verticalTexture;
	
	if(params.p_r_s=="3"){
		roofImg = verticalTexture;//"verticalTexture.jpeg";
	}
	else{
		roofImg = horizontalTexture;//"horizantalTexture.jpeg";
	}
	lRoofGeometry1.computeVertexNormals();
	var lRoofloader = new THREE.TextureLoader();
	var texture1 = lRoofloader.load(roofImg, function(texture1) {
	   texture1.wrapS = THREE.RepeatWrapping;
	   texture1.wrapT = THREE.RepeatWrapping;
	})
	   var rCalor = params.p_r_c.replace("#","0x");
	   var lRoofmaterial = new THREE.MeshBasicMaterial({
       map: texture1,
       wireframe:false,
       side:THREE.DoubleSide,
       color:0xFFFFFF
       });

	var lRoof = new THREE.Mesh( lRoofGeometry1, lRoofmaterial );
	lRoof.name = "lRoof";
	lRoof.visible = false;
	lRoof.scale.set(params.lean_p_w,params.b_l_t_r_p,params.lean_p_d);
	lRoof.position.set(0,params.lean_p_h,0);	
	if(params.p_r_s=="3"){
		lRoof.material.map.rotation = Math.PI/2;
		lRoof.material.map.repeat.set(params.lean_p_d,1);
	}
	else{
		lRoof.material.map.rotation = -Math.PI/2;
		lRoof.material.map.repeat.set(1,params.lean_p_w/2 - 4);
	}
	lRoof.material.color.setHex( rCalor );
	const_var.b_t_M_L_t_L.add( lRoof );
// });



// SingleSlope Building Roof
	var quad_vertices =
	[
	-0.5,  0.0, 0.5,
	0.0,  1.0, 0.5,
	0.0, 1.0, -0.5,
	-0.5, 0.0, -0.5,
	];

	var quad_uvs =
	[
	0.0, 0.0,
	1.0, 0.0,
	1.0, 1.0,
	0.0, 1.0,
	];

	var quad_indices =
	[
	0, 2, 1, 0, 3, 2
	];

	var f_S_LeanGeo = new THREE.BufferGeometry();

	var vertices = new Float32Array( quad_vertices );
	// Each vertex has one uv coordinate for texture mapping
	var uvs = new Float32Array( quad_uvs);
	// Use the four vertices to draw the two triangles that make up the square.
	var indices = new Uint32Array( quad_indices )

	// itemSize = 3 because there are 3 values (components) per vertex
	f_S_LeanGeo.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	f_S_LeanGeo.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
	f_S_LeanGeo.setIndex( new THREE.BufferAttribute( indices, 1 ) );
	var roofImg = verticalTexture;
	
	if(params.p_r_s=="3"){
		roofImg = verticalTexture;//"verticalTexture.jpeg";
	}
	else{
		roofImg = horizontalTexture;//"horizantalTexture.jpeg";
	}
	f_S_LeanGeo.computeVertexNormals();
	var f_S_LeanRoofloader = new THREE.TextureLoader();
	var texture1 = f_S_LeanRoofloader.load(roofImg, function(texture1) {
	   texture1.wrapS = THREE.RepeatWrapping;
	   texture1.wrapT = THREE.RepeatWrapping;
	})
	   var rCalor = params.p_r_c.replace("#","0x");
	   var f_S_LeanMaterial = new THREE.MeshBasicMaterial({
       map: texture1,
       wireframe:false,
       side:THREE.DoubleSide,
       color:0xFFFFFF
       });

	var f_S_LeanRoof = new THREE.Mesh( f_S_LeanGeo, f_S_LeanMaterial );
	f_S_LeanRoof.name = "f_S_LeanRoof";
	f_S_LeanRoof.visible = false;
	f_S_LeanRoof.scale.set(params.p_w,params.p_r_p,params.p_d);
	f_S_LeanRoof.position.set(0,params.p_h,0);	
	if(params.p_r_s=="3"){
		f_S_LeanRoof.material.map.rotation = Math.PI/2;
		f_S_LeanRoof.material.map.repeat.set(params.p_d,1);
	}
	else{
		f_S_LeanRoof.material.map.rotation = -Math.PI/2;
		f_S_LeanRoof.material.map.repeat.set(1,params.p_w/2 - 4);
	}
	f_S_LeanRoof.material.color.setHex( rCalor );
	const_var.scene.add( f_S_LeanRoof );

//Right Lean To Roof
var quad_vertices =
	[
		0.5,  0.0, 0.5,
		0.0,  1.0, 0.5,
		0.0, 1.0, -0.5,
		0.5, 0.0, -0.5
	];

	var quad_uvs =
	[
		0.0, 0.0,
		1.0, 0.0,
		1.0, 1.0,
		0.0, 1.0
	];

	var quad_indices =
	[
	0, 2, 1, 0, 3, 2
	];

	var rRoofGeometry1 = new THREE.BufferGeometry();

	var vertices = new Float32Array( quad_vertices );
	// Each vertex has one uv coordinate for texture mapping
	var uvs = new Float32Array( quad_uvs);
	// Use the four vertices to draw the two triangles that make up the square.
	var indices = new Uint32Array( quad_indices )

	// itemSize = 3 because there are 3 values (components) per vertex
	rRoofGeometry1.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	rRoofGeometry1.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
	rRoofGeometry1.setIndex( new THREE.BufferAttribute( indices, 1 ) );
	var roofImg = verticalTexture;
	if(params.p_r_s=="3")	{
		roofImg = verticalTexture;//"verticalTexture.jpeg";
	}
	else
	{
		roofImg = horizontalTexture;//"horizantalTexture.jpeg";
	}
	rRoofGeometry1.computeVertexNormals();
	var rRoofloader = new THREE.TextureLoader();
	var rtexture = rRoofloader.load(roofImg)
	   rtexture.wrapS = THREE.RepeatWrapping;
	   rtexture.wrapT = THREE.RepeatWrapping;
	   if(params.p_r_s=="3")
	   {
		rtexture.rotation = Math.PI/2;
		rtexture.repeat.set(params.leanR_p_d,1);
	   }
	   else
	   {
		rtexture.rotation = -Math.PI/2;
		rtexture.repeat.set(1,params.lean_p_w/2 - 4);
	   }

	var rCalor = params.p_r_c.replace("#","0x");
	var rRoofmaterial = new THREE.MeshBasicMaterial({
	map: rtexture,
	side:THREE.DoubleSide,
	color:0xB61202
	});

	var rRoof = new THREE.Mesh( rRoofGeometry1, rRoofmaterial );
	rRoof.name = "rRoof";
	rRoof.visible = false;
	rRoof.scale.set(params.leanR_p_w,params.b_l_t_r_p,params.leanR_p_d);
	rRoof.position.set(0,params.leanR_p_h,0);		
	// if(params.p_r_s=="3")
	// {
	// 	rRoof.material.map.rotation = Math.PI/2;
	// 	rRoof.material.map.repeat.set(params.leanR_p_d,1);
	// }
	// else
	// {
	// 	rRoof.material.map.rotation = -Math.PI/2;
	// 	rRoof.material.map.repeat.set(1,params.lean_p_w/2 - 4);
	// }
	rRoof.material.color.setHex( rCalor );
	const_var.b_t_M_R_t_R.add( rRoof );
// });

//Back Lean To Roof
var quad_vertices =
	[
		0.5,  0.0, 0.5,
		0.0,  1.0, 0.5,
		0.0, 1.0, -0.5,
		0.5, 0.0, -0.5
	];

	var quad_uvs =
	[
		0.0, 0.0,
		1.0, 0.0,
		1.0, 1.0,
		0.0, 1.0
	];

	var quad_indices =
	[
	0, 2, 1, 0, 3, 2
	];

	var bRoofGeometry1 = new THREE.BufferGeometry();

	var vertices = new Float32Array( quad_vertices );
	// Each vertex has one uv coordinate for texture mapping
	var uvs = new Float32Array( quad_uvs);
	// Use the four vertices to draw the two triangles that make up the square.
	var indices = new Uint32Array( quad_indices )

	// itemSize = 3 because there are 3 values (components) per vertex
	bRoofGeometry1.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	bRoofGeometry1.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
	bRoofGeometry1.setIndex( new THREE.BufferAttribute( indices, 1 ) );
	var roofImg = verticalTexture;
	if(params.p_r_s=="3")	{
		roofImg = verticalTexture;//"verticalTexture.jpeg";
	}
	else
	{
		roofImg = horizontalTexture;//"horizantalTexture.jpeg";
	}
	bRoofGeometry1.computeVertexNormals();
	var bRoofloader = new THREE.TextureLoader();
	var texture1 = bRoofloader.load(roofImg, function(texture1) {
	   texture1.wrapS = THREE.RepeatWrapping;
	   texture1.wrapT = THREE.RepeatWrapping;
	});
	   var rCalor = params.p_r_c.replace("#","0x");
	   var bRoofmaterial = new THREE.MeshBasicMaterial({
       map: texture1,
       wireframe:false,
       side:THREE.DoubleSide,
       color:0xFFFFFF
       });

	var bRoof = new THREE.Mesh( bRoofGeometry1, bRoofmaterial );
	bRoof.name = "bRoof";
	bRoof.visible = false;
	bRoof.scale.set(params.leanB_p_w,params.b_l_t_r_pB,params.leanF_p_d);
	bRoof.position.set(0,params.leanB_p_h,0);	
	// if(params.p_v_w==true)
	// r_change	
	if(params.p_r_s=="3")
	{
		bRoof.material.map.rotation = Math.PI/2;
		bRoof.material.map.repeat.set(params.leanB_p_d,1);
	}
	else
	{
		bRoof.material.map.rotation = -Math.PI/2;
		bRoof.material.map.repeat.set(1,params.leanB_p_w/2 - 4);
	}
	bRoof.material.color.setHex( rCalor );
	const_var.b_t_M_B_t_B.add( bRoof );
// });

	/*Start Code for Leanto Regular Roof*/
		var verticesT = [
    // right
    { pos: [ 0,    1.0,  0.5], norm: [ 1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 0
    { pos: [ 0,    1.0, -0.5], norm: [ 1,  0,  0], uv: [1, 0], }, //uv: [1, 1], 1
    { pos: [ 0.5, 0.0,  0.5], norm: [ 1,  0,  0], uv: [0, 1], }, //uv: [0, 0], 2
    { pos: [ 0.5, 0.0, -0.5], norm: [ 1,  0,  0], uv: [1, 1], }, //uv: [1, 0], 3
    
    
    { pos: [ 0,    1.0,  0.5], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 0
    { pos: [ 0,    1.0, -0.5], norm: [ -1,  0,  0], uv: [1, 0], }, //uv: [1, 1], 1
    { pos: [ -0.5, 0.0,  0.5], norm: [ -1,  0,  0], uv: [0, 1], }, //uv: [0, 0], 2
    { pos: [ -0.5, 0.0, -0.5], norm: [ -1,  0,  0], uv: [1, 1], }, //uv: [1, 0], 3
    
    
  ];
  var positionsT = [];
  var normalsT = [];
  var uvsT = [];
  for (var vertex of verticesT) {
    positionsT.push(...vertex.pos);
    normalsT.push(...vertex.norm);
    uvsT.push(...vertex.uv);
  }

  var geometryT = new THREE.BufferGeometry();
  var positionNumComponents = 3;
  var normalNumComponents = 3;
  var uvNumComponents = 2;
    geometryT.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positionsT), positionNumComponents));
    geometryT.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normalsT), normalNumComponents));
    geometryT.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvsT), uvNumComponents));
	//geometryT.setIndex( new THREE.BufferAttribute( indices, 1 ) );
  geometryT.setIndex([
	//0, 1, 2, 2, 1, 3, 3, 2, 4, 4, 3, 5, 5, 4, 6, 6, 5, 7
     0,  1,  2,   2,  1,  3,
     4,  5,  6,   6,  5,  7,
     8,  9, 10,  10,  9, 11,
    12, 13, 14,  14, 13, 15,
    16, 17, 18,  18, 17, 19,
    20, 21, 22,  22, 21, 23,
    24, 25, 26,  26, 25, 27,
    28, 29, 30,  30, 29, 31,
    
    32, 33, 34,  34, 33, 35,
    36, 37, 38,  38, 37, 39,
    40, 41, 42,  42, 41, 43,
    44, 45, 46,  46, 45, 47,
    48, 49, 50,  50, 49, 51,
    52, 53, 54,  54, 53, 55,
    56, 57, 58,  58, 57, 59,
    60, 61, 62,  62, 61, 63,
  ]);
	var roofImg = verticalTexture;
	if(params.p_v_w==true){
		roofImg = verticalTexture;//"verticalTexture.jpeg";
	}
	else{
		roofImg = horizontalTexture;//"horizantalTexture.jpeg";
	}
  var textureT = rRoofloader.load(roofImg, function(texture1) {
			textureT.wrapS = THREE.RepeatWrapping;
			textureT.wrapT = THREE.RepeatWrapping;
	  });
  var materialT = new THREE.MeshBasicMaterial({
	   map: textureT,
       wireframe:false,
       side:THREE.DoubleSide,
       color:0xFFFF00
       });
	var cubeT = new THREE.Mesh(geometryT, materialT);
	cubeT.name = "cubeT";
	cubeT.visible = false;
	cubeT.position.x = 0;
	cubeT.position.y = 4;
	cubeT.scale.x = 12;
	cubeT.scale.y = 8;
	cubeT.scale.z = 21;
	// const_var.scene.add(cubeT);
	
	
	var verticesT = [
    { pos: [ -0.48,  0.0,  0.5], norm: [ -1,  0,  0], uv: [0, 0], }, // 4 uv: [0, 0],
    { pos: [ -0.48,  0.0, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, // 5 uv: [1, 0],
    { pos: [ -0.485, -0.015,  0.5], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    { pos: [ -0.485, -0.015, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
    
    { pos: [ -0.485, -0.015,  0.5], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
    { pos: [ -0.485, -0.015, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
    { pos: [ -0.490, -0.030,  0.5], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    { pos: [ -0.490, -0.030, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
    
    { pos: [ -0.490, -0.030,  0.5], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
    { pos: [ -0.490, -0.030, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
    { pos: [ -0.495, -0.045,  0.5], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    { pos: [ -0.495, -0.045, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
    
    { pos: [ -0.495, -0.045,  0.5], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
    { pos: [ -0.495, -0.045, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
    { pos: [ -0.498, -0.060,  0.5], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    { pos: [ -0.498, -0.060, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7

    { pos: [ -0.50, -0.075,  0.5], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 0], 4
    { pos: [ -0.50, -0.075, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 0], 5
    { pos: [ -0.498, -0.060,  0.5], norm: [ -1,  0,  0], uv: [0, 0.008], }, // 6 uv: [0, 1],
    { pos: [ -0.498, -0.060, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, // 7 uv: [1, 1],
    
  ];
  var positionsT = [];
  var normalsT = [];
  var uvsT = [];
  for (var vertex of verticesT) {
    positionsT.push(...vertex.pos);
    normalsT.push(...vertex.norm);
    uvsT.push(...vertex.uv);
  }

  var geometryT = new THREE.BufferGeometry();
  var positionNumComponents = 3;
  var normalNumComponents = 3;
  var uvNumComponents = 2;
    geometryT.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positionsT), positionNumComponents));
    geometryT.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normalsT), normalNumComponents));
    geometryT.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvsT), uvNumComponents));
	//geometryT.setIndex( new THREE.BufferAttribute( indices, 1 ) );
  geometryT.setIndex([
	//0, 1, 2, 2, 1, 3, 3, 2, 4, 4, 3, 5, 5, 4, 6, 6, 5, 7
     0,  1,  2,   2,  1,  3,
     4,  5,  6,   6,  5,  7,
     8,  9, 10,  10,  9, 11,
    12, 13, 14,  14, 13, 15,
    16, 17, 18,  18, 17, 19,
    20, 21, 22,  22, 21, 23,
    24, 25, 26,  26, 25, 27,
    28, 29, 30,  30, 29, 31,
    
    32, 33, 34,  34, 33, 35,
    36, 37, 38,  38, 37, 39,
    40, 41, 42,  42, 41, 43,
    44, 45, 46,  46, 45, 47,
    48, 49, 50,  50, 49, 51,
    52, 53, 54,  54, 53, 55,
    56, 57, 58,  58, 57, 59,
    60, 61, 62,  62, 61, 63,
  ]);
	var roofImg = verticalTexture;
		//params.p_r_s
	if(params.p_v_w==true){
		roofImg = verticalTexture;//"verticalTexture.jpeg";
	}
	else {
		roofImg = horizontalTexture;//"horizantalTexture.jpeg";
	}
  var textureT = rRoofloader.load(roofImg, function(texture1) {
			textureT.wrapS = THREE.RepeatWrapping;
			textureT.wrapT = THREE.RepeatWrapping;
	  });
  var materialT = new THREE.MeshBasicMaterial({
	   map: textureT,
       wireframe:false,
       side:THREE.DoubleSide,
       color:0xFFFF00
       });
	var cubeT = new THREE.Mesh(geometryT, materialT);
	cubeT.name = "cubeTL";
	cubeT.visible = true;
	cubeT.position.x = 0;
	cubeT.position.y = 4;
	cubeT.scale.x = 1;
	cubeT.scale.y = 8;
	cubeT.scale.z = 21;
	//const_var.scene.add(cubeT);
	/*End Code for Leanto Regular Roof*/


}
render() {
    return <div ref={ref => (this.mount = ref)} />;
}    
} 	