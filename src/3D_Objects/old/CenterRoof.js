import React, { Component } from 'react';
import * as THREE from "three";
// import verticalTexture from '../assets/Roof/verticalTexture2.jpg';
import verticalTexture from '../assets/images/imgTextures/buildingImages/verticalTexture.jpeg';
import horizontalTexture from '../assets/images/imgTextures/buildingImages/horizantalTexture.jpeg';

export default class CenterRoof extends Component {

createCenterRoof = (const_var,params)=>{
//Center Building Roof
   var quad_vertices =
	[
	-0.5,  0.0, 0.5,
	0.0,  1.0, 0.5,
	0.0, 1.0, -0.5,
	-0.5, 0.0, -0.5,
	
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
	0.0, 1.0,
	
	0.0, 0.0,
	1.0, 0.0,
	1.0, 1.0,
	0.0, 1.0
	];

	var quad_indices =
	[
	0, 2, 1, 0, 3, 2, 4, 6, 5, 4, 7, 6
	];

	var lrRoofGeometry = new THREE.BufferGeometry();

	var vertices = new Float32Array( quad_vertices );
	// Each vertex has one uv coordinate for texture mapping
	var uvs = new Float32Array( quad_uvs);
	// Use the four vertices to draw the two triangles that make up the square.
	var indices = new Uint32Array( quad_indices )

	// itemSize = 3 because there are 3 values (components) per vertex
	lrRoofGeometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
	lrRoofGeometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
	lrRoofGeometry.setIndex( new THREE.BufferAttribute( indices, 1 ) );
	var roofImg = verticalTexture;
	if( params.p_r_s=="3"){
		roofImg = verticalTexture;//"verticalTexture.jpeg";
	}
	else {
		roofImg = horizontalTexture;//"horizantalTexture.jpeg";
	}
	lrRoofGeometry.computeVertexNormals();
	var lrRoofloader = new THREE.TextureLoader();

	var texture1 = lrRoofloader.load(
		roofImg, 
		function() {
	   texture1.wrapS = THREE.RepeatWrapping;
	   texture1.wrapT = THREE.RepeatWrapping;

	   var rCalor = params.p_r_c.replace("#","0x");
	   var lrRoofmaterial= new THREE.MeshPhongMaterial({side: THREE.DoubleSide,color:0xFFFF00,/*emissive:0xffffff,vertexColors:true,*/specular:0xFDF4DC,flatShading:true,dithering:true,combine:2,shininess:30,map: texture1});

	var lrRoof = new THREE.Mesh( lrRoofGeometry,lrRoofmaterial);
	lrRoof.name = "lrRoof";
	lrRoof.scale.set(params.p_w,params.p_r_p,params.p_d);
	lrRoof.position.set(0,params.p_h,0);
	if(params.p_r_s=="3")
	{
		lrRoof.material.map.rotation = Math.PI/2;
		lrRoof.material.map.repeat.set(params.p_d,1);
	}
	else
	{
		lrRoof.material.map.rotation = -Math.PI/2;
		lrRoof.material.map.repeat.set(1,params.p_w/2 - 4);
	}
	lrRoof.material.color.setHex( rCalor );
	const_var.scene.add( lrRoof );
	
	/*Start Code for center Building Regular Roof*/
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
	
	  var cbRegularRoofGeo = new THREE.BufferGeometry();
	  var positionNumComponents = 3;
	  var normalNumComponents = 3;
	  var uvNumComponents = 2;
		cbRegularRoofGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positionsT), positionNumComponents));
		cbRegularRoofGeo.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normalsT), normalNumComponents));
		cbRegularRoofGeo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvsT), uvNumComponents));
		//cbRegularRoofGeo.setIndex( new THREE.BufferAttribute( indices, 1 ) );
	  cbRegularRoofGeo.setIndex([
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
		var regularRoofloader = new THREE.TextureLoader();
	 	var textureT = regularRoofloader.load(roofImg, function(texture1) {
				textureT.wrapS = THREE.RepeatWrapping;
				textureT.wrapT = THREE.RepeatWrapping;
		  });
	  var cbRegularRoofMaterial = new THREE.MeshBasicMaterial({
		   map: textureT,
		   wireframe:false,
		   side:THREE.DoubleSide,
		   color:0xFFFF00
		   });
		var RegularRoofGeo = new THREE.Mesh(cbRegularRoofGeo, cbRegularRoofMaterial);
		RegularRoofGeo.name = "centerRegularRoof";
		RegularRoofGeo.visible = false;
		RegularRoofGeo.position.x = 0;
		RegularRoofGeo.position.y = 4;
		RegularRoofGeo.scale.set(12,8,21)
		const_var.scene.add(RegularRoofGeo);
});
}
render() {
    return <div ref={ref => (this.mount = ref)} />;
}    
} 	