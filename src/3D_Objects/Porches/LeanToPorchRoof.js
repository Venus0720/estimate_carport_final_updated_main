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
const baseUrl = process.env.REACT_APP_BASE_URL;
export default class LeanTOPorchRoof extends Component {

    createLeanToPorchRoof = (const_var,params)=>{

        /*Left Front Lean-to Porch Roof */

        //Left Front Lean-to Porch Roof  
        let quad_vertices =
        [
        -0.5,  0.0, 0.5,
        0.5,  0.0, 0.5,
        0.0, 0.2, -0.0,
        -0.5, 0.2, -0.0,
        ];
        
        let quad_uvs =
        [
        0.0, 0.0,
        1.0, 0.0,
        0.5, 1.0,
        0.0, 0.5
        ];
        
        let quad_indices =
        [
        0, 2, 1, 0, 3, 2,
        ];
        
        let LFLPorchRoofGeometry = new THREE.BufferGeometry();
        
        let vertices = new Float32Array( quad_vertices );
        // Each vertex has one uv coordinate for texture mapping
        let uvs = new Float32Array( quad_uvs);
        // Use the four vertices to draw the two triangles that make up the square.
        let indices = new Uint32Array( quad_indices )
        
        // itemSize = 3 because there are 3 values (components) per vertex
        LFLPorchRoofGeometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
        LFLPorchRoofGeometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
        LFLPorchRoofGeometry.setIndex( new THREE.BufferAttribute( indices, 1 ) );
        var roofImg2 = verticalTexture;
        if( params.p_r_s=="3"){
            roofImg2 = verticalTexture;//"verticalTexture.jpeg";
        }
        else {
            roofImg2 = horizontalTexture;//"horizantalTexture.jpeg";
        }
        LFLPorchRoofGeometry.computeVertexNormals();
        let LFLPorchRoofloader = new THREE.TextureLoader();
        
        var texture1 = LFLPorchRoofloader.load(
            process.env.REACT_APP_BASE_URL+roofImg2, 
            function() {
           texture1.wrapS = THREE.RepeatWrapping;
           texture1.wrapT = THREE.RepeatWrapping;
        });
           var rCalor = params.p_r_c.replace("#","0x");
           let LFLPorchRoofmaterial= new THREE.MeshPhongMaterial({ 	 
                side: THREE.FrontSide,shadowSide:THREE.DoubleSide,
            color: 0xffffff,emissive:0xffffff,specular:0xFDF4DC,
            flatShading:true,vertexColors:true,dithering:true,
            combine:2,shininess:30,});
        
        let LFLPorchRoof = new THREE.Mesh( LFLPorchRoofGeometry,LFLPorchRoofmaterial);
        LFLPorchRoof.name = "LFLPorchRoof";
        LFLPorchRoof.scale.set(1,1,1);
        // LFLPorchRoof.position.set(0,params.p_h,params.p_d);
        LFLPorchRoof.visible = false;
        // if(params.p_r_s=="3")
        // {
        //     LFLPorchRoof.material.map.rotation = Math.PI/2;
        //     LFLPorchRoof.material.map.repeat.set(params.p_d/2,1.8);
        // }
        // else
        // {
        //     LFLPorchRoof.material.map.rotation = -Math.PI/2;
        //     LFLPorchRoof.material.map.repeat.set(1,params.p_w/2 - 4);
        // }
        LFLPorchRoof.material.color.setHex( rCalor );
        const_var.L_F_L_P.add( LFLPorchRoof );


        //Double Left Front Lean-to Porch Roof  
        let quad_verticesDouble =
        [
        -0.5,  0.0, 0.5,
        0.5,  0.0, 0.5,
        0.0, 0.2, -0.0,
        -0.5, 0.2, -0.0,
        ];
        
        let quad_uvsDouble =
        [
        0.0, 0.0,
        1.0, 0.0,
        0.5, 1.0,
        0.0, 0.5
        ];
        
        let quad_indicesDouble =
        [
        0, 2, 1, 0, 3, 2,
        ];
        
        let LFLPorchRoofGeometryDouble = new THREE.BufferGeometry();
        
        let verticesDouble = new Float32Array( quad_verticesDouble );
        // Each vertex has one uv coordinate for texture mapping
        let uvsDouble = new Float32Array( quad_uvsDouble);
        // Use the four verticesDouble to draw the two triangles that make up the square.
        let indicesDouble = new Uint32Array( quad_indicesDouble )
        
        // itemSize = 3 because there are 3 values (components) per vertex
        LFLPorchRoofGeometryDouble.setAttribute( 'position', new THREE.BufferAttribute( verticesDouble, 3 ) );
        LFLPorchRoofGeometryDouble.setAttribute( 'uv', new THREE.BufferAttribute( uvsDouble, 2 ) );
        LFLPorchRoofGeometryDouble.setIndex( new THREE.BufferAttribute( indicesDouble, 1 ) );
        var roofImage = verticalTexture;
        if( params.p_r_s=="3"){
            roofImage = verticalTexture;//"verticalTexture.jpeg";
        }
        else {
            roofImage = horizontalTexture;//"horizantalTexture.jpeg";
        }
        LFLPorchRoofGeometryDouble.computeVertexNormals();
        let LFLPorchRoofloaderDouble = new THREE.TextureLoader();
        
        var textur = LFLPorchRoofloaderDouble.load(
            process.env.REACT_APP_BASE_URL+roofImage, 
            function() {
           textur.wrapS = THREE.RepeatWrapping;
           textur.wrapT = THREE.RepeatWrapping;
        });
           var rCalor1 = params.p_r_c.replace("#","0x");
           let LFLPorchRoofmaterialDouble= new THREE.MeshBasicMaterial({
               side: THREE.BackSide,shadowSide:THREE.DoubleSide,
            // color: 0xffffff,emissive:0xffffff,specular:0xFDF4DC,
            // flatShading:true,vertexColors:true,dithering:true,
            // combine:2,shininess:30,
        });
        
        let LFLDoublePorchRoof = new THREE.Mesh( LFLPorchRoofGeometryDouble,LFLPorchRoofmaterialDouble);
        LFLDoublePorchRoof.name = "LFLDoublePorchRoof";
        LFLDoublePorchRoof.scale.set(1,1,1);
        // LFLDoublePorchRoof.position.set(0,params.p_h,params.p_d);
        LFLDoublePorchRoof.visible = false;
        // if(params.p_r_s=="3")
        // {
        //     LFLDoublePorchRoof.material.map.rotation = Math.PI/2;
        //     LFLDoublePorchRoof.material.map.repeat.set(params.p_d/2,1.8);
        // }
        // else
        // {
        //     LFLDoublePorchRoof.material.map.rotation = -Math.PI/2;
        //     LFLDoublePorchRoof.material.map.repeat.set(1,params.p_w/2 - 4);
        // }
        LFLDoublePorchRoof.material.color.setHex( rCalor1 );
        const_var.L_F_L_P.add( LFLDoublePorchRoof );
        
	//Left Front Lean Porch ridge cave
	let rcquad_vertices =
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
	let LFLPorchRidgeCapGeometry = new THREE.BufferGeometry();
	let rcvertices = new Float32Array( rcquad_vertices );
	let rcuvs = new Float32Array( rcquad_uvs);
	let rcindices = new Uint32Array( rcquad_indices )
	LFLPorchRidgeCapGeometry.setAttribute( 'position', new THREE.BufferAttribute( rcvertices, 3 ) );
	LFLPorchRidgeCapGeometry.setAttribute( 'uv', new THREE.BufferAttribute( rcuvs, 2 ) );
	LFLPorchRidgeCapGeometry.setIndex( new THREE.BufferAttribute( rcindices, 1 ) );
	LFLPorchRidgeCapGeometry.computeVertexNormals();
 	let rcPhongMaterial= new THREE.MeshPhongMaterial({ 
 	  side: THREE.DoubleSide,shadowSide:THREE.DoubleSide,
 	  color: 0xffffff,emissive:0xffffff,specular:0xFDF4DC,
 	  
 	  flatShading:true,vertexColors:true,dithering:true,
 	  combine:2,shininess:30,
 	});

	let LFLPorchRidgeCap = new THREE.Mesh( LFLPorchRidgeCapGeometry,rcPhongMaterial);
	LFLPorchRidgeCap.name = "LFLPorchRidgeCap";
	LFLPorchRidgeCap.visible = false;
	const_var.b_t_M_L.add( LFLPorchRidgeCap );




        /*Left Front Lean-to Porch Bows*/
        let bowGeometry = new THREE.BoxGeometry(0.98,0.6+0.2,0.2+0.1);
	    // let bowMaterial = new THREE.MeshBasicMaterial({color:0xC9C6C6,side:THREE.DoubleSide});
        const loader = new THREE.CubeTextureLoader();
		loader.setPath(`${baseUrl}${reflection}`);
		
		const textureCube = new THREE.CubeTextureLoader().load([ 
            `${baseUrl}${refpx}`,`${baseUrl}${refnx}`,`${baseUrl}${refpy}`,
            `${baseUrl}${refny}`,`${baseUrl}${refpz}`,`${baseUrl}${refnz}`,
		]);
		textureCube.mapping = THREE.CubeReflectionMapping
		// const bowMaterial = new THREE.MeshPhongMaterial({ color: 0xfbfbfb, envMap: textureCube,
		//  reflectivity:0.2,
		//  refractionRatio:1 ,
		
		// });
        const bowMaterial = new THREE.MeshBasicMaterial({ color: 0xfbfbfb, envMap: textureCube,
			reflectivity:0.2,
			refractionRatio:1 ,
		   
		   });
		const texture222 = new THREE.TextureLoader().load(`${baseUrl}${reflection}`)
		bowMaterial.map = texture222

        //Left Front Porch Corner Bow
        let lfpCornerBow = new THREE.Mesh(bowGeometry,bowMaterial);
        lfpCornerBow.name = "lfpCornerBow";
        lfpCornerBow.visible = false;
        const_var.L_F_L_P.add(lfpCornerBow);

	    //Left Front Porch Left Bow
        let lfpLeftBow = new THREE.Mesh(bowGeometry,bowMaterial);
        lfpLeftBow.name = "lfpLeftBow";
        lfpLeftBow.visible = false;
        const_var.L_F_L_P.add(lfpLeftBow);

        //Left Front Porch Front Bow
        let lfpFrontBow = new THREE.Mesh(bowGeometry,bowMaterial);
        lfpFrontBow.name = "lfpFrontBow";
        lfpFrontBow.visible = false;
        const_var.L_F_L_P.add(lfpFrontBow);


        /*Left Front Lean-to Porch Corners*/

        //Left Front Porch Back Corner
	    let lfpBackCornerGeo = new THREE.BoxGeometry(0.98,0.6,0.2);
	    // let lfpBackCornerMaterial = new THREE.MeshBasicMaterial({color:0xC9C6C6,side:THREE.DoubleSide});
	    let lfpBackCorner = new THREE.Mesh(lfpBackCornerGeo,bowMaterial);
	    lfpBackCorner.name = "lfpBackCorner";
        lfpBackCorner.visible = false;
	    const_var.L_F_L_P.add(lfpBackCorner);

         //Left Front Porch Back Corner
	    let lfpCornerGeo = new THREE.BoxGeometry(0.98,0.6,0.2);
	    // let lfpCornerMaterial = new THREE.MeshBasicMaterial({color:0xC9C6C6,side:THREE.DoubleSide});
	    let lfpCorner = new THREE.Mesh(lfpCornerGeo,bowMaterial);
	    lfpCorner.name = "lfpCorner";
        lfpCorner.visible = false;
	    const_var.L_F_L_P.add(lfpCorner);

         //Left Front Porch Front Corner
	    let lfpFrontCornerGeo = new THREE.BoxGeometry(0.98,0.6,0.2);
	    // let lfpFrontCornerMaterial = new THREE.MeshBasicMaterial({color:0xC9C6C6,side:THREE.DoubleSide});
	    let lfpFrontCorner = new THREE.Mesh(lfpFrontCornerGeo,bowMaterial);
	    lfpFrontCorner.name = "lfpFrontCorner";
        lfpFrontCorner.visible = false;
	    const_var.L_F_L_P.add(lfpFrontCorner);

         /*Left Front Lean-to Porch Trims*/

        //Left Front Lean To Porch Left Front Trim
	    let lflPorchTrimGeo = new THREE.BoxGeometry(0.31+0.1, 1+0.0015, 0.2+0.07);
	    let lflPorchTrimMaterial = new THREE.MeshBasicMaterial({ color: 0x0E6655,side: THREE.DoubleSide,});
	    let lflPorchFrontTrim = new THREE.Mesh(lflPorchTrimGeo,lflPorchTrimMaterial);
	    lflPorchFrontTrim.name = "lflPorchFrontTrim";
        lflPorchFrontTrim.visible = false;
	    const_var.L_F_L_P.add(lflPorchFrontTrim);
        
        //Left Front Lean To Porch Left Front Trim
	    let lflPorchLeftTrim = new THREE.Mesh(lflPorchTrimGeo,lflPorchTrimMaterial);
	    lflPorchLeftTrim.name = "lflPorchLeftTrim";
        lflPorchLeftTrim.visible = false;
	    const_var.L_F_L_P.add(lflPorchLeftTrim);	




        //Right Front Lean-to Porch Roof  
        let quad_verticesR =
        [
        -0.5,  0.0, 0.5,
        0.5,  0.0, 0.5,
        0.0, 0.2, -0.0,
        -0.5, 0.2, -0.0,
        ];
        
        let quad_uvsR =
        [
        0.0, 0.0,
        1.0, 0.0,
        0.5, 1.0,
        0.0, 0.5
        ];
        
        let quad_indicesR =
        [
        0, 2, 1, 0, 3, 2,
        ];
        
        let RFLPorchRoofGeometry = new THREE.BufferGeometry();
        
        let verticesR = new Float32Array( quad_verticesR );
        // Each vertex has one uv coordinate for texture mapping
        let uvsR = new Float32Array( quad_uvsR);
        // Use the four vertices to draw the two triangles that make up the square.
        let indicesR = new Uint32Array( quad_indicesR )
        
        // itemSize = 3 because there are 3 values (components) per vertex
        RFLPorchRoofGeometry.setAttribute( 'position', new THREE.BufferAttribute( verticesR, 3 ) );
        RFLPorchRoofGeometry.setAttribute( 'uv', new THREE.BufferAttribute( uvsR, 2 ) );
        RFLPorchRoofGeometry.setIndex( new THREE.BufferAttribute( indicesR, 1 ) );
        var roofImge = verticalTexture;
        if( params.p_r_s=="3"){
            roofImge = verticalTexture;//"verticalTexture.jpeg";
        }
        else {
            roofImge = horizontalTexture;//"horizantalTexture.jpeg";
        }
        RFLPorchRoofGeometry.computeVertexNormals();
        let RFLPorchRoofloader = new THREE.TextureLoader();
        
        var texture11 = RFLPorchRoofloader.load(
            process.env.REACT_APP_BASE_URL+roofImge, 
            function() {
           texture11.wrapS = THREE.RepeatWrapping;
           texture11.wrapT = THREE.RepeatWrapping;
        });
           var rCalor2 = params.p_r_c.replace("#","0x");
           let RFLPorchRoofmaterial= new THREE.MeshPhongMaterial({ 	  
               side: THREE.FrontSide,shadowSide:THREE.DoubleSide,
            color: 0xffffff,emissive:0xffffff,specular:0xFDF4DC,
            flatShading:true,vertexColors:true,dithering:true,
            combine:2,shininess:30,});
        
        let RFLPorchRoof = new THREE.Mesh( RFLPorchRoofGeometry,RFLPorchRoofmaterial);
        RFLPorchRoof.name = "RFLPorchRoof";
        RFLPorchRoof.scale.set(1,1,1);
        // RFLPorchRoof.position.set(0,params.p_h,params.p_d);
        RFLPorchRoof.visible = false;
        // if(params.p_r_s=="3")
        // {
        //     RFLPorchRoof.material.map.rotation = Math.PI/2;
        //     RFLPorchRoof.material.map.repeat.set(params.p_d,1);
        // }
        // else
        // {
        //     RFLPorchRoof.material.map.rotation = -Math.PI/2;
        //     RFLPorchRoof.material.map.repeat.set(1,params.p_w/2 - 4);
        // }
        RFLPorchRoof.material.color.setHex( rCalor2 );
        const_var.R_F_L_P.add( RFLPorchRoof );



        //Right Front Lean-to Double Porch Roof  
        let quad_verticesD =
        [
        -0.5,  0.0, 0.5,
        0.5,  0.0, 0.5,
        0.0, 0.2, -0.0,
        -0.5, 0.2, -0.0,
        ];
        
        let quad_uvsD =
        [
        0.0, 0.0,
        1.0, 0.0,
        0.5, 1.0,
        0.0, 0.5
        ];
        
        let quad_indicesD =
        [
        0, 2, 1, 0, 3, 2,
        ];
        
        let RFLDoublePorchRoofGeometry = new THREE.BufferGeometry();
        
        let verticesD = new Float32Array( quad_verticesD );
        // Each vertex has one uv coordinate for texture mapping
        let uvsD = new Float32Array( quad_uvsD);
        // Use the four vertices to draw the two triangles that make up the square.
        let indicesD = new Uint32Array( quad_indicesD )
        
        // itemSize = 3 because there are 3 values (components) per vertex
        RFLDoublePorchRoofGeometry.setAttribute( 'position', new THREE.BufferAttribute( verticesD, 3 ) );
        RFLDoublePorchRoofGeometry.setAttribute( 'uv', new THREE.BufferAttribute( uvsD, 2 ) );
        RFLDoublePorchRoofGeometry.setIndex( new THREE.BufferAttribute( indicesD, 1 ) );
        var roofImg1 = verticalTexture;
        if( params.p_r_s=="3"){
            roofImg1 = verticalTexture;//"verticalTexture.jpeg";
        }
        else {
            roofImg1 = horizontalTexture;//"horizantalTexture.jpeg";
        }
        RFLDoublePorchRoofGeometry.computeVertexNormals();
        let RFLDoublePorchRoofloader = new THREE.TextureLoader();
        
        var textre = RFLDoublePorchRoofloader.load(
            process.env.REACT_APP_BASE_URL+roofImg1, 
            function() {
           textre.wrapS = THREE.RepeatWrapping;
           textre.wrapT = THREE.RepeatWrapping;
        });
           var rCalor3 = params.p_r_c.replace("#","0x");
           let RFLDoublePorchRoofmaterial= new THREE.MeshBasicMaterial({ 	 
            side: THREE.BackSide,shadowSide:THREE.DoubleSide,
            color: 0xffffff,
            // emissive:0xffffff,specular:0xFDF4DC,
            // flatShading:true,vertexColors:true,dithering:true,
            // combine:2,shininess:30,
        });
        
        let RFLDoublePorchRoof = new THREE.Mesh( RFLDoublePorchRoofGeometry,RFLDoublePorchRoofmaterial);
        RFLDoublePorchRoof.name = "RFLDoublePorchRoof";
        RFLDoublePorchRoof.scale.set(1,1,1);
        // RFLDoublePorchRoof.position.set(0,params.p_h,params.p_d);
        RFLDoublePorchRoof.visible = false;
        // if(params.p_r_s=="3")
        // {
        //     RFLDoublePorchRoof.material.map.rotation = Math.PI/2;
        //     RFLDoublePorchRoof.material.map.repeat.set(params.p_d,1);
        // }
        // else
        // {
        //     RFLDoublePorchRoof.material.map.rotation = -Math.PI/2;
        //     RFLDoublePorchRoof.material.map.repeat.set(1,params.p_w/2 - 4);
        // }
        RFLDoublePorchRoof.material.color.setHex( rCalor3 );
        const_var.R_F_L_P.add( RFLDoublePorchRoof );

	    //Right Front Lean Porch ridge cap
	    let RFLrcquad_vertices =
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
    
	    let RFLPorchRidgeCapGeometry = new THREE.BufferGeometry();
	    let RFLrcvertices = new Float32Array( RFLrcquad_vertices );
	    let RFLrcuvs = new Float32Array( RFLrcquad_uvs);
	    let RFLrcindices = new Uint32Array( RFLrcquad_indices )
	    RFLPorchRidgeCapGeometry.setAttribute( 'position', new THREE.BufferAttribute( RFLrcvertices, 3 ) );
	    RFLPorchRidgeCapGeometry.setAttribute( 'uv', new THREE.BufferAttribute( RFLrcuvs, 2 ) );
	    RFLPorchRidgeCapGeometry.setIndex( new THREE.BufferAttribute( RFLrcindices, 1 ) );
	    RFLPorchRidgeCapGeometry.computeVertexNormals();
    
 	    let RFLrcPhongMaterial= new THREE.MeshPhongMaterial({ 
 	      side: THREE.DoubleSide,shadowSide:THREE.DoubleSide,
 	      color: 0xffffff,emissive:0xffffff,specular:0xFDF4DC,
 	      flatShading:true,vertexColors:true,dithering:true,
 	      combine:2,shininess:30,
 	    });
    
	    let RFLPorchRidgeCap = new THREE.Mesh( RFLPorchRidgeCapGeometry,RFLrcPhongMaterial);
	    RFLPorchRidgeCap.name = "RFLPorchRidgeCap";
	    RFLPorchRidgeCap.visible = false;
	    const_var.b_t_M_L.add( RFLPorchRidgeCap );


        /*Left Front Lean-to Porch Left curved Roof*/
    var verticesT = [
    { pos: [ 0.25,  0.0,    0.4835], norm: [ -1,  0,  0], uv: [0, 0], }, // 4 uv: [0, 0],
    { pos: [ 0.25,  0.0,   -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, // 5 uv: [1, 0],
    { pos: [ 0.13, -0.005,  0.4935], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    { pos: [ 0.13, -0.005, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
    
    { pos: [ 0.13, -0.005,  0.4935], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
    { pos: [ 0.13, -0.005, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
    { pos: [ 0.07, -0.015,  0.498], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    { pos: [ 0.07, -0.015, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
    
    { pos: [ 0.07, -0.015,  0.498], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
    { pos: [ 0.07, -0.015, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
    { pos: [ 0.05, -0.025,  0.4995], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    { pos: [ 0.05, -0.025, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
    
    { pos: [ 0.05, -0.025,  0.4995], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
    { pos: [ 0.05, -0.025, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
    { pos: [ 0.02, -0.045,  0.5015], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    { pos: [ 0.02, -0.045, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7

    { pos: [ 0.00, -0.075,  0.5022], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 0], 4
    { pos: [ 0.00, -0.075, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 0], 5
    { pos: [ 0.02, -0.045,  0.5015], norm: [ -1,  0,  0], uv: [0, 0.008], }, // 6 uv: [0, 1],
    { pos: [ 0.02, -0.045, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, // 7 uv: [1, 1],
    
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
	geometryT.setIndex([
	//0, 1, 2, 2, 1, 3, 3, 2, 4, 4, 3, 5, 5, 4, 6, 6, 5, 7
     0,  1,  2,   2,  1,  3,
     4,  5,  6,   6,  5,  7,
     8,  9, 10,  10,  9, 11,
    12, 13, 14,  14, 13, 15,
    16, 17, 18,  18, 17, 19,
    ]);
     
     var materialT = new THREE.MeshBasicMaterial({
       side:THREE.DoubleSide,
       color:0xFFFF00
       });

	var LFLPorchLeftCurve = new THREE.Mesh(geometryT, materialT);
	LFLPorchLeftCurve.name = "LFLPorchLeftCurve";
	var rCalor4 = params.p_r_c.replace("#","0x");
	LFLPorchLeftCurve.material.color.setHex( rCalor4 );
	LFLPorchLeftCurve.visible = false;
    const_var.L_F_L_P.add(LFLPorchLeftCurve);
    

     /*Left Front Lean-to Porch Front curved Roof*/
     var verticesT2 = [
     { pos: [ 0.25,  0.0,    0.5], norm: [ -1,  0,  0], uv: [0, 0], }, // 4 uv: [0, 0],
     { pos: [ 0.25,  0.0,   -0.4835], norm: [ -1,  0,  0], uv: [0.008, 0], }, // 5 uv: [1, 0],
     { pos: [ 0.13, -0.005,  0.5], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
     { pos: [ 0.13, -0.005, -0.4935], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
     
     { pos: [ 0.13, -0.005,  0.5], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
     { pos: [ 0.13, -0.005, -0.4935], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
     { pos: [ 0.07, -0.015,  0.5], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
     { pos: [ 0.07, -0.015, -0.498], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
     
     { pos: [ 0.07, -0.015,  0.5], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
     { pos: [ 0.07, -0.015, -0.498], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
     { pos: [ 0.05, -0.025,  0.5], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
     { pos: [ 0.05, -0.025, -0.4995], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
     
     { pos: [ 0.05, -0.025,  0.5], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
     { pos: [ 0.05, -0.025, -0.4995], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
     { pos: [ 0.02, -0.045,  0.5], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
     { pos: [ 0.02, -0.045, -0.5015], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
 
     { pos: [ 0.00, -0.075,  0.5], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 0], 4
     { pos: [ 0.00, -0.075, -0.5022], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 0], 5
     { pos: [ 0.02, -0.045,  0.5], norm: [ -1,  0,  0], uv: [0, 0.008], }, // 6 uv: [0, 1],
     { pos: [ 0.02, -0.045, -0.5015], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, // 7 uv: [1, 1],
     
     ];
     var positionsT2 = [];
     var normalsT2 = [];
     var uvsT2 = [];
     for (var vertex2 of verticesT2) {
       positionsT2.push(...vertex2.pos);
       normalsT2.push(...vertex2.norm);
       uvsT2.push(...vertex2.uv);
     }
   
     var geometryT2 = new THREE.BufferGeometry();
     var positionNumComponents2 = 3;
     var normalNumComponents2 = 3;
     var uvNumComponents2 = 2;
       geometryT2.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positionsT2), positionNumComponents2));
       geometryT2.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normalsT2), normalNumComponents2));
       geometryT2.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvsT2), uvNumComponents2));
       geometryT2.setIndex([
       //0, 1, 2, 2, 1, 3, 3, 2, 4, 4, 3, 5, 5, 4, 6, 6, 5, 7
        0,  1,  2,   2,  1,  3,
        4,  5,  6,   6,  5,  7,
        8,  9, 10,  10,  9, 11,
       12, 13, 14,  14, 13, 15,
       16, 17, 18,  18, 17, 19,
     ]);

        var materialT2 = new THREE.MeshBasicMaterial({
          side:THREE.DoubleSide,
          color:0xFFFF00
          });
   
      var LFLPorchFrontCurve = new THREE.Mesh(geometryT2, materialT2);
      LFLPorchFrontCurve.name = "LFLPorchFrontCurve";
        var rCalor6 = params.p_r_c.replace("#","0x");
      LFLPorchFrontCurve.material.color.setHex( rCalor6 );
      LFLPorchFrontCurve.visible = false;
      const_var.L_F_L_P.add(LFLPorchFrontCurve);    

       /*Right Front Lean-to Porch Right curved Roof*/

	var selectedObject = const_var.scene.getObjectByName("LFLPorchRightCurve");
	if(selectedObject != undefined)
	{
		const_var.scene.remove(const_var.scene.getObjectByName("LFLPorchRightCurve"));
	}

    var verticesT3 = [
    { pos: [  - 0.25,  0.0,    0.4835], norm: [ -1,  0,  0], uv: [0, 0], }, // 4 uv: [0, 0],
    { pos: [  - 0.25,  0.0,   -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, // 5 uv: [1, 0],
    { pos: [  - 0.13, -0.005,0.4935], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    { pos: [  - 0.13, -0.005, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
    
    { pos: [  - 0.13, -0.005, 0.4935], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
    { pos: [  - 0.13, -0.005, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
    { pos: [  - 0.07, -0.015,   0.498], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    { pos: [  - 0.07, -0.015, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
    
    { pos: [  - 0.07, -0.015,   0.498], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
    { pos: [  - 0.07, -0.015, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
    { pos: [  - 0.05, -0.025,  0.4995], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    { pos: [  - 0.05, -0.025, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
    
    { pos: [  - 0.05, -0.025,  0.4995], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
    { pos: [  - 0.05, -0.025, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
    { pos: [  - 0.02, -0.045,   0.5015], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    { pos: [  - 0.02, -0.045, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7

    { pos: [  - 0.00, -0.075,  0.5022], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 0], 4
    { pos: [  - 0.00, -0.075, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 0], 5
    { pos: [  - 0.02, -0.045,   0.5015], norm: [ -1,  0,  0], uv: [0, 0.008], }, // 6 uv: [0, 1],
    { pos: [  - 0.02, -0.045, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, // 7 uv: [1, 1],
    
    ];
    var positionsT3 = [];
    var normalsT3 = [];
    var uvsT3 = [];
    for (var vertex3 of verticesT3) {
      positionsT3.push(...vertex3.pos);
      normalsT3.push(...vertex3.norm);
      uvsT3.push(...vertex3.uv);
    }
  
    var geometryT3 = new THREE.BufferGeometry();
    var positionNumComponents3 = 3;
    var normalNumComponents3 = 3;
    var uvNumComponents3 = 2;
    geometryT3.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positionsT3), positionNumComponents3));
    geometryT3.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normalsT3), normalNumComponents3));
    geometryT3.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvsT3), uvNumComponents3));
	geometryT3.setIndex([
	//0, 1, 2, 2, 1, 3, 3, 2, 4, 4, 3, 5, 5, 4, 6, 6, 5, 7
     0,  1,  2,   2,  1,  3,
     4,  5,  6,   6,  5,  7,
     8,  9, 10,  10,  9, 11,
    12, 13, 14,  14, 13, 15,
    16, 17, 18,  18, 17, 19,
    ]);

     var materialT3 = new THREE.MeshBasicMaterial({
       side:THREE.DoubleSide,
       color:0xFFFF00
       });

	var RFLPorchRightCurve = new THREE.Mesh(geometryT3, materialT3);
	RFLPorchRightCurve.name = "RFLPorchRightCurve";
	var rCalor7 = params.p_r_c.replace("#","0x");
	RFLPorchRightCurve.material.color.setHex( rCalor7 );
	RFLPorchRightCurve.visible = false;
    const_var.R_F_L_P.add(RFLPorchRightCurve);



    /*Right Front Lean-to Porch Front curved Roof*/
    var verticesT4 = [
    { pos: [  0.25,  0.0,    0.4835], norm: [ -1,  0,  0], uv: [0, 0], }, // 4 uv: [0, 0],
    { pos: [  0.25,  0.0,   -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, // 5 uv: [1, 0],
    { pos: [  0.13, -0.005,  0.4935], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    { pos: [  0.13, -0.005, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
    
    { pos: [  0.13, -0.005,  0.4935], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
    { pos: [  0.13, -0.005, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
    { pos: [  0.07, -0.015,  0.498], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    { pos: [  0.07, -0.015, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
    
    { pos: [  0.07, -0.015,  0.498], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
    { pos: [  0.07, -0.015, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
    { pos: [  0.05, -0.025,  0.4995], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    { pos: [  0.05, -0.025, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
    
    { pos: [  0.05, -0.025,  0.4995], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
    { pos: [  0.05, -0.025, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
    { pos: [  0.02, -0.045,  0.5015], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    { pos: [  0.02, -0.045, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7

    { pos: [  0.00, -0.075,  0.5022], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 0], 4
    { pos: [  0.00, -0.075, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 0], 5
    { pos: [  0.02, -0.045, 0.5015], norm: [ -1,  0,  0], uv: [0, 0.008], }, // 6 uv: [0, 1],
    { pos: [  0.02, -0.045, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, // 7 uv: [1, 1],
    
    ];
    var positionsT4 = [];
    var normalsT4 = [];
    var uvsT4 = [];
    for (var vertex4 of verticesT4) {
      positionsT4.push(...vertex4.pos);
      normalsT4.push(...vertex4.norm);
      uvsT4.push(...vertex4.uv);
    }
  
    var geometryT4 = new THREE.BufferGeometry();
    var positionNumComponents4 = 3;
    var normalNumComponents4 = 3;
    var uvNumComponents4 = 2;
      geometryT4.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positionsT4), positionNumComponents4));
      geometryT4.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normalsT4), normalNumComponents4));
      geometryT4.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvsT4), uvNumComponents4));
      geometryT4.setIndex([
      //0, 1, 2, 2, 1, 3, 3, 2, 4, 4, 3, 5, 5, 4, 6, 6, 5, 7
       0,  1,  2,   2,  1,  3,
       4,  5,  6,   6,  5,  7,
       8,  9, 10,  10,  9, 11,
      12, 13, 14,  14, 13, 15,
      16, 17, 18,  18, 17, 19,
    ]);
       var materialT4 = new THREE.MeshBasicMaterial({
         side:THREE.DoubleSide,
         color:0xFFFF00
         });
  
     var RFLPorchFrontCurve = new THREE.Mesh(geometryT4, materialT4);
     RFLPorchFrontCurve.name = "RFLPorchFrontCurve";
     var rCalor9 = params.p_r_c.replace("#","0x");
     RFLPorchFrontCurve.material.color.setHex( rCalor9 );
     RFLPorchFrontCurve.visible = false;
     const_var.R_F_L_P.add(RFLPorchFrontCurve); 
 



        /*Right Front Lean-to Porch Bows*/

        //Right Front Porch Corner Bow
        let rfpCornerBow = new THREE.Mesh(bowGeometry,bowMaterial);
        rfpCornerBow.name = "rfpCornerBow";
        rfpCornerBow.visible = false;
        const_var.R_F_L_P.add(rfpCornerBow);

	    //Right Front Porch Right Bow
        let rfpRightBow = new THREE.Mesh(bowGeometry,bowMaterial);
        rfpRightBow.name = "rfpRightBow";
        rfpRightBow.visible = false;
        const_var.R_F_L_P.add(rfpRightBow);

        //Right Front Porch Front Bow
        let rfpFrontBow = new THREE.Mesh(bowGeometry,bowMaterial);
        rfpFrontBow.name = "rfpFrontBow";
        rfpFrontBow.visible = false;
        const_var.R_F_L_P.add(rfpFrontBow);


        /*Right Front Lean-to Porch Corners*/

        //Right Front Porch Back Corner
	    let rfpBackCornerGeo = new THREE.BoxGeometry(0.98,0.6,0.2);
	    // let rfpBackCornerMaterial = new THREE.MeshBasicMaterial({color:0xC9C6C6,side:THREE.DoubleSide});
	    let rfpBackCorner = new THREE.Mesh(rfpBackCornerGeo,bowMaterial);
	    rfpBackCorner.name = "rfpBackCorner";
        rfpBackCorner.visible = false;
	    const_var.R_F_L_P.add(rfpBackCorner);

         //Right Front Porch Back Corner
	    let rfpCornerGeo = new THREE.BoxGeometry(0.98,0.6,0.2);
	    // let rfpCornerMaterial = new THREE.MeshBasicMaterial({color:0xC9C6C6,side:THREE.DoubleSide});
	    let rfpCorner = new THREE.Mesh(rfpCornerGeo,bowMaterial);
	    rfpCorner.name = "rfpCorner";
        rfpCorner.visible = false;
	    const_var.R_F_L_P.add(rfpCorner);

         //Right Front Porch Front Corner
	    let rfpFrontCornerGeo = new THREE.BoxGeometry(0.98,0.6,0.2);
	    // let rfpFrontCornerMaterial = new THREE.MeshBasicMaterial({color:0xC9C6C6,side:THREE.DoubleSide});
	    let rfpFrontCorner = new THREE.Mesh(rfpFrontCornerGeo,bowMaterial);
	    rfpFrontCorner.name = "rfpFrontCorner";
        rfpFrontCorner.visible = false;
	    const_var.R_F_L_P.add(rfpFrontCorner);


        /*Right Front Lean-to Porch Trims*/

        //Right Front Lean To Porch  Front Trim
	    let rflPorchTrimGeo = new THREE.BoxGeometry(0.31+0.1, 1+0.0015, 0.2+0.07);
	    let rflPorchTrimMaterial = new THREE.MeshBasicMaterial({ color: 0x0E6655,side: THREE.DoubleSide,});
	    let rflPorchFrontTrim = new THREE.Mesh(rflPorchTrimGeo,rflPorchTrimMaterial);
	    rflPorchFrontTrim.name = "rflPorchFrontTrim";
        rflPorchFrontTrim.visible = false;
	    const_var.R_F_L_P.add(rflPorchFrontTrim);
        
        //Right Front Lean To Porch  Front Trim
        let rflPorchTrimMaterial1 = new THREE.MeshBasicMaterial({ color: 0x0E6655,side: THREE.DoubleSide,});
	    let rflPorchRightTrim = new THREE.Mesh(rflPorchTrimGeo,rflPorchTrimMaterial1);
	    rflPorchRightTrim.name = "rflPorchRightTrim";
        rflPorchRightTrim.visible = false;
	    const_var.R_F_L_P.add(rflPorchRightTrim);	


    }
    
    render() {
        return <div ref={ref => (this.mount = ref)} />;
    }    
}  