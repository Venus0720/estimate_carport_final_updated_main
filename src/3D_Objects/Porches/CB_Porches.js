import React, { Component } from 'react';
import * as THREE from "three";
import verticalTexture from '../../assets/images/imgTextures/buildingImages/verticalTexture.jpeg';
import horizontalTexture from '../../assets/images/imgTextures/buildingImages/horizantalTexture.jpeg';  

export default class Porches extends Component {

    addPorchesIntoBuilding = (const_var,params)=>{

    //Right Front Porch Roof  
    var quad_vertices =
    [
    -0.5,  0.0, 0.5,
    0.5,  0.0, 0.5,
    0.0, 0.2, -0.0,
    -0.5, 0.2, -0.0,

    0.5,  0.0, -0.5,
    0.5,  0.0, 0.5,
    0.0, 0.2, -0.0,
    0.0, 0.2, -0.5
    ];

    var quad_uvs =
    [
    0.0, 0.0,
    1.08-(0.08*(params.r_f_p_w-5)), 0.0,
    0.5, 1.0,
    0.0, 0.5,

    0.0, 0.0,
    1.0, 0.0,
    0.5, 1.0,
    0.0, 0.5
    ];

    var quad_indices =
    [
    0, 2, 1, 0, 3, 2,
     4, 6, 5, 4, 7, 6,
     8,10,9,8,11,10
    ];

    let rfPorchGeometry = new THREE.BufferGeometry();

    var vertices = new Float32Array( quad_vertices );
    // Each vertex has one uv coordinate for texture mapping
    var uvs = new Float32Array( quad_uvs);
    // Use the four vertices to draw the two triangles that make up the square.
    var indices = new Uint32Array( quad_indices )

    // itemSize = 3 because there are 3 values (components) per vertex
    rfPorchGeometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    rfPorchGeometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
    rfPorchGeometry.setIndex( new THREE.BufferAttribute( indices, 1 ) );
    var roofImg = verticalTexture;
    if( params.p_r_s=="3"){
        roofImg = verticalTexture;//"verticalTexture.jpeg";
    }
    else {
        roofImg = horizontalTexture;//"horizantalTexture.jpeg";
    }
    rfPorchGeometry.computeVertexNormals();
    let rfPorchloader = new THREE.TextureLoader();

    var texture1 = rfPorchloader.load(
        roofImg, 
        function() {
       texture1.wrapS = THREE.RepeatWrapping;
       texture1.wrapT = THREE.RepeatWrapping;
    });
       var rCalor = params.p_r_c.replace("#","0x");

       let rfPorchmaterial= new THREE.MeshPhongMaterial({ 
        side: THREE.DoubleSide,shadowSide:THREE.DoubleSide,
        color: 0xffffff,emissive:0xffffff,specular:0xFDF4DC,
        
        flatShading:true,vertexColors:true,dithering:true,
        combine:2,shininess:30,map: texture1
      });

    let rfPorch = new THREE.Mesh( rfPorchGeometry,rfPorchmaterial);
    rfPorch.name = "RFPorch";
    rfPorch.scale.set(1,1,1);
    // rfPorch.position.set(0,params.p_h,params.p_d);
    rfPorch.visible = false;
    if(params.p_r_s=="3")
    {
        rfPorch.material.map.rotation = Math.PI/2;
        rfPorch.material.map.repeat.set(params.p_d,1);
    }
    else
    {
        rfPorch.material.map.rotation = -Math.PI/2;
        rfPorch.material.map.repeat.set(1,params.p_w/2 - 4);
    }
    rfPorch.material.color.setHex( rCalor );
    const_var.R_F_P.add( rfPorch );


    /*4 vertices Back Gable For Right Front Porch*/
    var quad_vertices1 =
    [
    //botom left
    -1,-0,0,
    //botom right
    0,-0,0,
    //top right
    0,1,0,
    //top left
    -1,1,0,

    ];

    var quad_uvs1 =
    [

    1.0, 0.0,
    1.0, 0.0,
    1.0, 1.0,
    0.0, 5.0,
    ];

    var quad_indices1 =
    [
    0, 2, 1, 0, 3, 2,
    ];

    let RFPorchBackGableGeometry = new THREE.BufferGeometry();
    var vertices1 = new Float32Array( quad_vertices1 );
    // Each vertex has one uv coordinate for texture mapping
    var uvs1 = new Float32Array( quad_uvs1);
    // Use the four vertices to draw the two triangles that make up the square.
    var indices1 = new Uint32Array( quad_indices1 )
    // itemSize = 3 because there are 3 values (components) per vertex
    RFPorchBackGableGeometry.setAttribute( 'position', new THREE.BufferAttribute( vertices1, 3 ) );
    RFPorchBackGableGeometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs1, 2 ) );
    RFPorchBackGableGeometry.setIndex( new THREE.BufferAttribute( indices1, 1 ) );
    var wallTexture = horizontalTexture;
    if(params.p_v_w==true) {
    wallTexture = verticalTexture;
    }
    else {
    wallTexture = horizontalTexture;
    }
    RFPorchBackGableGeometry.computeVertexNormals();
    let RFPorchBackGableGeometryLoader = new THREE.TextureLoader();
    var textur = RFPorchBackGableGeometryLoader.load(horizontalTexture,function(textur) {
    textur.wrapT = textur.wrapS = THREE.RepeatWrapping;
    }
    )
    // let RFPorchBackGablematerial= new THREE.MeshPhongMaterial({side: THREE.DoubleSide,color:0xFFFF00,/*emissive:0xffffff,vertexColors:true,*/specular:0xFDF4DC,flatShading:true,dithering:true,combine:2,shininess:30});
    let nRFPorchBackGablematerial = new THREE.MeshBasicMaterial({
    map: textur,
    side: THREE.DoubleSide,
    color: 0xffffff,
    });
    let RFPorchBackGable = new THREE.Mesh( RFPorchBackGableGeometry,nRFPorchBackGablematerial);
    RFPorchBackGable.name = "R_F_P_B_G";
    RFPorchBackGable.visible = false;
    RFPorchBackGable.material.map.repeat.set(0.1,0.110)
    const_var.R_F_P.add( RFPorchBackGable );

    /* Left Gable For Porch*/
    var quad_vertices2 =
    [
    //botom left
    -1,-0,0,
    //botom right
    0,-0,0,
    //top right
    0,1,0,
    //top left
    -1,1,0,

    ];

    var quad_uvs2 =
    [

    1.0, 0.0,
    1.0, 0.0,
    1.0, 1.0,
    0.0, 5.0,
    ];

    var quad_indices3 =
    [
    0, 2, 1, 0, 3, 2,
    ];

    let RFPorchLeftGableGeometry = new THREE.BufferGeometry();
    var vertices2 = new Float32Array( quad_vertices2 );
    // Each vertex has one uv coordinate for texture mapping
    var uvs2 = new Float32Array( quad_uvs2);
    // Use the four vertices to draw the two triangles that make up the square.
    var indices2 = new Uint32Array( quad_indices3 )
    // itemSize = 3 because there are 3 values (components) per vertex
    RFPorchLeftGableGeometry.setAttribute( 'position', new THREE.BufferAttribute( vertices2, 3 ) );
    RFPorchLeftGableGeometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs2, 2 ) );
    RFPorchLeftGableGeometry.setIndex( new THREE.BufferAttribute( indices2, 1 ) );

    RFPorchLeftGableGeometry.computeVertexNormals();
    let RFPorchLeftGableGeometryLoader = new THREE.TextureLoader();
    var texture1 = RFPorchLeftGableGeometryLoader.load(horizontalTexture,function(texture1) {
    texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
    }
    )
    // let RFPorchLeftGablematerial= new THREE.MeshPhongMaterial({side: THREE.DoubleSide,color:0xFFFF00,/*emissive:0xffffff,vertexColors:true,*/specular:0xFDF4DC,flatShading:true,dithering:true,combine:2,shininess:30});
    let nRFPorchLeftGablematerial = new THREE.MeshBasicMaterial({
    map: texture1,
    side: THREE.DoubleSide,
    color: 0xffffff,
    });
    let RFPorchLeftGable = new THREE.Mesh( RFPorchLeftGableGeometry,nRFPorchLeftGablematerial);
    RFPorchLeftGable.name = "R_F_P_L_G";
    RFPorchLeftGable.visible = false;
    RFPorchLeftGable.material.map.repeat.set(0.1,0.110)
    const_var.R_F_P.add( RFPorchLeftGable );

    // Right Front Porch Front Wall
    let frontGeo = new THREE.PlaneGeometry(1,1,1);

    let R_F_P_F_W_FrontMaterial= new THREE.MeshPhongMaterial({  side: THREE.DoubleSide,color: 0xffffff,
        specular:0xFDF4DC,flatShading:true,
        combine:3,shininess:75,dithering:true,
        shadowSide:THREE.DoubleSide,aoMapIntensity:0,
        normalMapType:THREE.ObjectSpaceNormalMap,
        // map:FWtexture,
      });
    //let R_F_P_F_W_FrontMaterial= new THREE.MeshBasicMaterial({ /*map:FWtexture,*/side: THREE.DoubleSide,color: 0xffffff} );
    let RFPorchFrontWall = new THREE.Mesh(frontGeo, R_F_P_F_W_FrontMaterial);
    RFPorchFrontWall.name = "R_F_P_F_W";
    RFPorchFrontWall.morphTargets = true;
    RFPorchFrontWall.side = THREE.DoubleSide;
    RFPorchFrontWall.visible = false;
    const_var.R_F_P.add(RFPorchFrontWall);


    // Right Front Porch Right Wall
    let RFPorchRightWallMaterial= new THREE.MeshPhongMaterial({  side: THREE.DoubleSide,color: 0xffffff,
        specular:0xFDF4DC,flatShading:true,
        combine:3,shininess:75,dithering:true,
        shadowSide:THREE.DoubleSide,aoMapIntensity:0,
        normalMapType:THREE.ObjectSpaceNormalMap,
        // map:FWtexture,
      });
    //let RFPorchRightWallMaterial= new THREE.MeshBasicMaterial({ /*map:FWtexture,*/side: THREE.DoubleSide,color: 0xffffff} );
    let RFPorchRightWall = new THREE.Mesh(frontGeo, RFPorchRightWallMaterial);
    RFPorchRightWall.name = "R_F_P_R_W";
    RFPorchRightWall.morphTargets = true;
    RFPorchRightWall.side = THREE.DoubleSide;
    RFPorchRightWall.visible = false;
    const_var.R_F_P.add(RFPorchRightWall);

    //Center Building RFPorch Left trim
    let nRFPLeftGeo = new THREE.BoxGeometry(1,1,1);
    let trimMateriall = new THREE.MeshBasicMaterial({color:0x0E6655,side:THREE.DoubleSide});
    let RFPTrim = new THREE.Mesh(nRFPLeftGeo,trimMateriall);
    RFPTrim.name = "RFPTrim";
    // RFPTrim.scale.set(0.2,0.2,5.4);
    // RFPTrim.position.set(params.p_w/2-params.r_f_p_w,params.p_h-1,params.p_d/2+2.5);
    RFPTrim.visible = (params.add_right_front_porch == true)?true:false;
    const_var.R_F_P.add(RFPTrim);

    let trimMaterial = new THREE.MeshBasicMaterial({color:0x0E6655,side:THREE.DoubleSide});
    
      //Left Front Porch Roof  
      var quad_vertices =
      [
      -0.5,  0.0, 0.5,
      0.5,  0.0, 0.5,
      0.0, 0.2, -0.0,
      -0.5, 0.2, -0.0,

      0.5,  0.0, -0.5,
      0.5,  0.0, 0.5,
      0.0, 0.2, -0.0,
      0.0, 0.2, -0.5
      ];

      var quad_uvs =
      [
      0.0, 0.0,
      1.0, 0.0,
      0.5, 1.0,
      0.0, 0.5,
 
      0.0, 0.0,
      1.0, 0.0,
      0.5, 1.0,
      0.0, 0.5
      ];
  
      var quad_indices =
      [
      0, 2, 1, 0, 3, 2,
       4, 6, 5, 4, 7, 6,
       8,10,9,8,11,10
      ];
  
      let lfPorchGeometry = new THREE.BufferGeometry();
  
      var vertices = new Float32Array( quad_vertices );
      // Each vertex has one uv coordinate for texture mapping
      var uvs = new Float32Array( quad_uvs);
      // Use the four vertices to draw the two triangles that make up the square.
      var indices = new Uint32Array( quad_indices )
  
      // itemSize = 3 because there are 3 values (components) per vertex
      lfPorchGeometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
      lfPorchGeometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
      lfPorchGeometry.setIndex( new THREE.BufferAttribute( indices, 1 ) );
      var roofImg = verticalTexture;
      if( params.p_r_s=="3"){
          roofImg = verticalTexture;//"verticalTexture.jpeg";
      }
      else {
          roofImg = horizontalTexture;//"horizantalTexture.jpeg";
      }
      lfPorchGeometry.computeVertexNormals();
      let lfPorchloader = new THREE.TextureLoader();
  
      var texture1 = lfPorchloader.load(
          roofImg, 
          function() {
         texture1.wrapS = THREE.RepeatWrapping;
         texture1.wrapT = THREE.RepeatWrapping;
      });
         var rCalor = params.p_r_c.replace("#","0x");

         let lfPorchmaterialN= new THREE.MeshPhongMaterial({ 
            side: THREE.DoubleSide,shadowSide:THREE.DoubleSide,
            color: 0xffffff,emissive:0xffffff,specular:0xFDF4DC,
            
            flatShading:true,vertexColors:true,dithering:true,
            combine:2,shininess:30,map: texture1
          });

      let lfPorch = new THREE.Mesh( lfPorchGeometry,lfPorchmaterialN);
      lfPorch.name = "LFPorch";
      lfPorch.scale.set(1,1,1);
      // lfPorch.position.set(0,params.p_h,params.p_d);
      lfPorch.visible = false;
      if(params.p_r_s=="3")
      {
          lfPorch.material.map.rotation = Math.PI/2;
          lfPorch.material.map.repeat.set(params.p_d,1);
      }
      else
      {
          lfPorch.material.map.rotation = -Math.PI/2;
          lfPorch.material.map.repeat.set(1,params.p_w/2 - 4);
      }
      lfPorch.material.color.setHex( rCalor );
      const_var.L_F_P.add( lfPorch );
  


    /*4 vertices Back Gable For Left Front Porch*/
    var quad_vertices =
    [
    //botom left
    -1,-0,0,
    //botom right
    0,-0,0,
    //top right
    0,1,0,
    //top left
    -1,1,0,
    
    ];
    
    var quad_uvs =
    [
    
    1.0, 0.0,
    1.0, 0.0,
    1.0, 1.0,
    0.0, 5.0,
    ];
    
    var quad_indices =
    [
    0, 2, 1, 0, 3, 2,
    ];
    
    let LFPorchBackGableGeometry = new THREE.BufferGeometry();
    var vertices = new Float32Array( quad_vertices );
    // Each vertex has one uv coordinate for texture mapping
    var uvs = new Float32Array( quad_uvs);
    // Use the four vertices to draw the two triangles that make up the square.
    var indices = new Uint32Array( quad_indices )
    // itemSize = 3 because there are 3 values (components) per vertex
    LFPorchBackGableGeometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    LFPorchBackGableGeometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
    LFPorchBackGableGeometry.setIndex( new THREE.BufferAttribute( indices, 1 ) );
    var wallTexture = horizontalTexture;
    if(params.p_v_w==true) {
    wallTexture = verticalTexture;
    }
    else {
    wallTexture = horizontalTexture;
    }
    LFPorchBackGableGeometry.computeVertexNormals();
    let LFPorchBackGableGeometryLoader = new THREE.TextureLoader();
    var texture1 = LFPorchBackGableGeometryLoader.load(horizontalTexture,function(texture1) {
    texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
    }
    )
    // let LFPorchBackGablematerial= new THREE.MeshPhongMaterial({side: THREE.DoubleSide,color:0xFFFF00,/*emissive:0xffffff,vertexColors:true,*/specular:0xFDF4DC,flatShading:true,dithering:true,combine:2,shininess:30});
    let nLFPorchBackGablematerial = new THREE.MeshBasicMaterial({
    map: texture1,
    side: THREE.DoubleSide,
    color: 0xffffff,
    });
    let LFPorchBackGable = new THREE.Mesh( LFPorchBackGableGeometry,nLFPorchBackGablematerial);
    LFPorchBackGable.name = "L_F_P_B_G";
    LFPorchBackGable.visible = false;
    LFPorchBackGable.material.map.repeat.set(0.1,0.110)
    const_var.L_F_P.add( LFPorchBackGable );
    
    /* Left Gable For Porch*/
    var quad_vertices =
    [
    //botom left
    -1,-0,0,
    //botom right
    0,-0,0,
    //top right
    0,1,0,
    //top left
    -1,1,0,
    
    ];
    
    var quad_uvs =
    [
    
    1.0, 0.0,
    1.0, 0.0,
    1.0, 1.0,
    0.0, 5.0,
    ];
    
    var quad_indices =
    [
    0, 2, 1, 0, 3, 2,
    ];
    
    let LFPorchLeftGableGeometry = new THREE.BufferGeometry();
    var vertices = new Float32Array( quad_vertices );
    // Each vertex has one uv coordinate for texture mapping
    var uvs = new Float32Array( quad_uvs);
    // Use the four vertices to draw the two triangles that make up the square.
    var indices = new Uint32Array( quad_indices )
    // itemSize = 3 because there are 3 values (components) per vertex
    LFPorchLeftGableGeometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    LFPorchLeftGableGeometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
    LFPorchLeftGableGeometry.setIndex( new THREE.BufferAttribute( indices, 1 ) );
    var wallTexture = horizontalTexture;
    if(params.p_v_w==true) {
    wallTexture = verticalTexture;
    }
    else {
    wallTexture = horizontalTexture;
    }
    LFPorchLeftGableGeometry.computeVertexNormals();
    let LFPorchLeftGableGeometryLoader = new THREE.TextureLoader();
    var texture1 = LFPorchLeftGableGeometryLoader.load(horizontalTexture,function(texture1) {
    texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
    }
    )
    // let LFPorchLeftGablematerial= new THREE.MeshPhongMaterial({side: THREE.DoubleSide,color:0xFFFF00,/*emissive:0xffffff,vertexColors:true,*/specular:0xFDF4DC,flatShading:true,dithering:true,combine:2,shininess:30});
    let nLFPorchLeftGablematerial = new THREE.MeshBasicMaterial({
    map: texture1,
    side: THREE.DoubleSide,
    color: 0xffffff,
    });
    let LFPorchLeftGable = new THREE.Mesh( LFPorchLeftGableGeometry,nLFPorchLeftGablematerial);
    LFPorchLeftGable.name = "L_F_P_R_G";
    LFPorchLeftGable.visible = false;
    LFPorchLeftGable.material.map.repeat.set(0.1,0.110)
    const_var.L_F_P.add( LFPorchLeftGable );

    // Left Front Porch Front Wall
    let L_F_P_F_W_frontMaterial= new THREE.MeshPhongMaterial({  side: THREE.DoubleSide,color: 0xffffff,
        specular:0xFDF4DC,flatShading:true,
        combine:3,shininess:75,dithering:true,
        shadowSide:THREE.DoubleSide,aoMapIntensity:0,
        normalMapType:THREE.ObjectSpaceNormalMap,
        // map:FWtexture,
      });
    //let L_F_P_F_W_frontMaterial= new THREE.MeshBasicMaterial({ /*map:FWtexture,*/side: THREE.DoubleSide,color: 0xffffff} );
    let LFPorchFrontWall = new THREE.Mesh(frontGeo, L_F_P_F_W_frontMaterial);
    LFPorchFrontWall.name = "L_F_P_F_W";
    LFPorchFrontWall.morphTargets = true;
    LFPorchFrontWall.side = THREE.DoubleSide;
    LFPorchFrontWall.visible = false;
    const_var.L_F_P.add(LFPorchFrontWall);


    // Left Front Porch Right Wall
    let L_F_P_R_W_frontMaterial= new THREE.MeshPhongMaterial({  side: THREE.DoubleSide,color: 0xffffff,
        specular:0xFDF4DC,flatShading:true,
        combine:3,shininess:75,dithering:true,
        shadowSide:THREE.DoubleSide,aoMapIntensity:0,
        normalMapType:THREE.ObjectSpaceNormalMap,
        // map:FWtexture,
      });
    //let L_F_P_R_W_frontMaterial= new THREE.MeshBasicMaterial({ /*map:FWtexture,*/side: THREE.DoubleSide,color: 0xffffff} );
    let LFPorchRightWall = new THREE.Mesh(frontGeo, L_F_P_R_W_frontMaterial);
    LFPorchRightWall.name = "L_F_P_R_W";
    LFPorchRightWall.morphTargets = true;
    LFPorchRightWall.side = THREE.DoubleSide;
    LFPorchRightWall.visible = false;
    const_var.L_F_P.add(LFPorchRightWall);

    //Center Building RFPorch Right trim
    let LFPTrimGeo = new THREE.BoxGeometry(1,1,1);
    let LFPTrimMaterial = new THREE.MeshBasicMaterial({color:0x0E6655,side:THREE.DoubleSide});
    let LFPTrim = new THREE.Mesh(LFPTrimGeo,LFPTrimMaterial);
    LFPTrim.name = "LFPTrim";
    LFPTrim.visible = (params.add_left_front_porch == true)?true:false;
    const_var.L_F_P.add(LFPTrim);

    
	//Left Back Porch Roof  
    var quad_vertices =
    [
    -0.5,  0.0, 0.5,
    0.5,  0.0, 0.5,
    0.0, 0.2, -0.0,
    -0.5, 0.2, -0.0,

    0.5,  0.0, -0.5,
    0.5,  0.0, 0.5,
    0.0, 0.2, -0.0,
    0.0, 0.2, -0.5
    ];

    var quad_uvs =
    [
    0.0, 0.0,
    1.0, 0.0,
    0.5, 1.0,
    0.0, 0.5,

    0.0, 0.0,
    1.0, 0.0,
    0.5, 1.0,
    0.0, 0.5
    ];

    var quad_indices =
    [
    0, 2, 1, 0, 3, 2,
     4, 6, 5, 4, 7, 6,
     8,10,9,8,11,10
    ];

    let lbPorchGeometry = new THREE.BufferGeometry();

    var vertices = new Float32Array( quad_vertices );
    // Each vertex has one uv coordinate for texture mapping
    var uvs = new Float32Array( quad_uvs);
    // Use the four vertices to draw the two triangles that make up the square.
    var indices = new Uint32Array( quad_indices )

    // itemSize = 3 because there are 3 values (components) per vertex
    lbPorchGeometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    lbPorchGeometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
    lbPorchGeometry.setIndex( new THREE.BufferAttribute( indices, 1 ) );
    var roofImg = verticalTexture;
    if( params.p_r_s=="3"){
        roofImg = verticalTexture;//"verticalTexture.jpeg";
    }
    else {
        roofImg = horizontalTexture;//"horizantalTexture.jpeg";
    }
    lbPorchGeometry.computeVertexNormals();
    let lbPorchloader = new THREE.TextureLoader();

    var texture1 = lbPorchloader.load(
        roofImg, 
        function() {
       texture1.wrapS = THREE.RepeatWrapping;
       texture1.wrapT = THREE.RepeatWrapping;
    });
       var rCalor = params.p_r_c.replace("#","0x");

       let lbPorchmaterial= new THREE.MeshPhongMaterial({ 
        side: THREE.DoubleSide,shadowSide:THREE.DoubleSide,
        color: 0xffffff,emissive:0xffffff,specular:0xFDF4DC,
        
        flatShading:true,vertexColors:true,dithering:true,
        combine:2,shininess:30,map: texture1
      });

    let lbPorch = new THREE.Mesh( lbPorchGeometry,lbPorchmaterial);
    lbPorch.name = "LBPorch";
    lbPorch.scale.set(1,1,1);
    // lbPorch.position.set(0,params.p_h,params.p_d);
    lbPorch.visible = false;
    if(params.p_r_s=="3")
    {
        lbPorch.material.map.rotation = Math.PI/2;
        lbPorch.material.map.repeat.set(params.p_d,1);
    }
    else
    {
        lbPorch.material.map.rotation = -Math.PI/2;
        lbPorch.material.map.repeat.set(1,params.p_w/2 - 4);
    }
    lbPorch.material.color.setHex( rCalor );
    const_var.L_B_P.add( lbPorch );
    /*4 vertices Front Gable For Left Back Porch*/
    var quad_vertices =
    [
    //botom left
    -1,-0,0,
    //botom right
    0,-0,0,
    //top right
    0,1,0,
    //top left
    -1,1,0,

    ];

    var quad_uvs =
    [

    1.0, 0.0,
    1.0, 0.0,
    1.0, 1.0,
    0.0, 5.0,
    ];

    var quad_indices =
    [
    0, 2, 1, 0, 3, 2,
    ];

    let LBPorchFrontGableGeometry = new THREE.BufferGeometry();
    var vertices = new Float32Array( quad_vertices );
    // Each vertex has one uv coordinate for texture mapping
    var uvs = new Float32Array( quad_uvs);
    // Use the four vertices to draw the two triangles that make up the square.
    var indices = new Uint32Array( quad_indices )
    // itemSize = 3 because there are 3 values (components) per vertex
    LBPorchFrontGableGeometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    LBPorchFrontGableGeometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
    LBPorchFrontGableGeometry.setIndex( new THREE.BufferAttribute( indices, 1 ) );
    var wallTexture = horizontalTexture;
    if(params.p_v_w==true) {
    wallTexture = verticalTexture;
    }
    else {
    wallTexture = horizontalTexture;
    }
    LBPorchFrontGableGeometry.computeVertexNormals();
    let LBPorchFrontGableGeometryLoader = new THREE.TextureLoader();
    var texture1 = LBPorchFrontGableGeometryLoader.load(horizontalTexture,function(texture1) {
    texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
    }
    )
    // let LBPorchFrontGablematerial= new THREE.MeshPhongMaterial({side: THREE.DoubleSide,color:0xFFFF00,/*emissive:0xffffff,vertexColors:true,*/specular:0xFDF4DC,flatShading:true,dithering:true,combine:2,shininess:30});
    let nLBPorchFrontGablematerial = new THREE.MeshBasicMaterial({
    map: texture1,
    side: THREE.DoubleSide,
    color: 0xffffff,
    });
    let LBPorchFrontGable = new THREE.Mesh( LBPorchFrontGableGeometry,nLBPorchFrontGablematerial);
    LBPorchFrontGable.name = "L_B_P_F_G";
    LBPorchFrontGable.visible = false;
    LBPorchFrontGable.material.map.repeat.set(0.1,0.110)
    const_var.L_B_P.add( LBPorchFrontGable );

    /* Right Gable For Porch*/
    var quad_vertices =
    [
    //botom left
    -1,-0,0,
    //botom right
    0,-0,0,
    //top right
    0,1,0,
    //top left
    -1,1,0,

    ];

    var quad_uvs =
    [

    1.0, 0.0,
    1.0, 0.0,
    1.0, 1.0,
    0.0, 5.0,
    ];

    var quad_indices =
    [
    0, 2, 1, 0, 3, 2,
    ];

    let LBPorchRightGableGeometry = new THREE.BufferGeometry();
    var vertices = new Float32Array( quad_vertices );
    // Each vertex has one uv coordinate for texture mapping
    var uvs = new Float32Array( quad_uvs);
    // Use the four vertices to draw the two triangles that make up the square.
    var indices = new Uint32Array( quad_indices )
    // itemSize = 3 because there are 3 values (components) per vertex
    LBPorchRightGableGeometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    LBPorchRightGableGeometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
    LBPorchRightGableGeometry.setIndex( new THREE.BufferAttribute( indices, 1 ) );
    var wallTexture = horizontalTexture;
    if(params.p_v_w==true) {
    wallTexture = verticalTexture;
    }
    else {
    wallTexture = horizontalTexture;
    }
    LBPorchRightGableGeometry.computeVertexNormals();
    let LBPorchRightGableGeometryLoader = new THREE.TextureLoader();
    var texture1 = LBPorchRightGableGeometryLoader.load(horizontalTexture,function(texture1) {
    texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
    }
    )
    // let LBPorchRightGablematerial= new THREE.MeshPhongMaterial({side: THREE.DoubleSide,color:0xFFFF00,/*emissive:0xffffff,vertexColors:true,*/specular:0xFDF4DC,flatShading:true,dithering:true,combine:2,shininess:30});
    let nLBPorchRightGablematerial = new THREE.MeshBasicMaterial({
    map: texture1,
    side: THREE.DoubleSide,
    color: 0xffffff,
    });
    let LBPorchRightGable = new THREE.Mesh( LBPorchRightGableGeometry,nLBPorchRightGablematerial);
    LBPorchRightGable.name = "L_B_P_L_G";
    LBPorchRightGable.visible = false;
    LBPorchRightGable.material.map.repeat.set(0.1,0.110)
    const_var.L_B_P.add( LBPorchRightGable );

    // Left Back Porch Back Wall
    let L_B_P_B_W_frontMaterial= new THREE.MeshPhongMaterial({  side: THREE.DoubleSide,color: 0xffffff,
        specular:0xFDF4DC,flatShading:true,
        combine:3,shininess:75,dithering:true,
        shadowSide:THREE.DoubleSide,aoMapIntensity:0,
        normalMapType:THREE.ObjectSpaceNormalMap,
        // map:FWtexture,
      });
    //let L_B_P_B_W_frontMaterial= new THREE.MeshBasicMaterial({ /*map:FWtexture,*/side: THREE.DoubleSide,color: 0xffffff} );
    let LBPorchBackWall = new THREE.Mesh(frontGeo, L_B_P_B_W_frontMaterial);
    LBPorchBackWall.name = "L_B_P_B_W";
    LBPorchBackWall.morphTargets = true;
    LBPorchBackWall.side = THREE.DoubleSide;
    LBPorchBackWall.visible = false;
    const_var.L_B_P.add(LBPorchBackWall);
    
    
    // Left Back Porch Left Wall
    let L_B_P_L_W_frontMaterial= new THREE.MeshPhongMaterial({  side: THREE.DoubleSide,color: 0xffffff,
        specular:0xFDF4DC,flatShading:true,
        combine:3,shininess:75,dithering:true,
        shadowSide:THREE.DoubleSide,aoMapIntensity:0,
        normalMapType:THREE.ObjectSpaceNormalMap,
        // map:FWtexture,
      });
    //let L_B_P_L_W_frontMaterial= new THREE.MeshBasicMaterial({ /*map:FWtexture,*/side: THREE.DoubleSide,color: 0xffffff} );
    let LBPorchLeftWall = new THREE.Mesh(frontGeo, L_B_P_L_W_frontMaterial);
    LBPorchLeftWall.name = "L_B_P_L_W";
    LBPorchLeftWall.morphTargets = true;
    LBPorchLeftWall.side = THREE.DoubleSide;
    LBPorchLeftWall.visible = false;
    const_var.L_B_P.add(LBPorchLeftWall);


    //Center Building LBPorch  trim
	let LBPorchGeo = new THREE.BoxGeometry(1,1,1);
	// let trimMaterial = new THREE.MeshBasicMaterial({color:0x0E6655,side:THREE.DoubleSide});
	let LBPorchTrim = new THREE.Mesh(LBPorchGeo,trimMaterial);
	LBPorchTrim.name = "LBPorchTrim";
	LBPorchTrim.visible = (params.add_left_back_porch == true)?true:false;
	const_var.L_B_P.add(LBPorchTrim);


    /*4 vertices Front Gable For Right BAck Porch*/
    var quad_vertices =
    [
    //botom left
    -1,-0,0,
    //botom right
    0,-0,0,
    //top right
    0,1,0,
    //top left
    -1,1,0,

    ];

    var quad_uvs =
    [

    1.0, 0.0,
    1.0, 0.0,
    1.0, 1.0,
    0.0, 5.0,
    ];

    var quad_indices =
    [
    0, 2, 1, 0, 3, 2,
    ];

    let RBPorchFrontGableGeometry = new THREE.BufferGeometry();
    var vertices = new Float32Array( quad_vertices );
    // Each vertex has one uv coordinate for texture mapping
    var uvs = new Float32Array( quad_uvs);
    // Use the four vertices to draw the two triangles that make up the square.
    var indices = new Uint32Array( quad_indices )
    // itemSize = 3 because there are 3 values (components) per vertex
    RBPorchFrontGableGeometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    RBPorchFrontGableGeometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
    RBPorchFrontGableGeometry.setIndex( new THREE.BufferAttribute( indices, 1 ) );
    var wallTexture = horizontalTexture;
    if(params.p_v_w==true) {
    wallTexture = verticalTexture;
    }
    else {
    wallTexture = horizontalTexture;
    }
    RBPorchFrontGableGeometry.computeVertexNormals();
    let RBPorchFrontGableGeometryLoader = new THREE.TextureLoader();
    var texture1 = RBPorchFrontGableGeometryLoader.load(horizontalTexture,function(texture1) {
    texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
    }
    )
    // let RBPorchFrontGablematerial= new THREE.MeshPhongMaterial({side: THREE.DoubleSide,color:0xFFFF00,/*emissive:0xffffff,vertexColors:true,*/specular:0xFDF4DC,flatShading:true,dithering:true,combine:2,shininess:30});
    let nRBPorchFrontGablematerial = new THREE.MeshBasicMaterial({
    map: texture1,
    side: THREE.DoubleSide,
    color: 0xffffff,
    });
    let RBPorchFrontGable = new THREE.Mesh( RBPorchFrontGableGeometry,nRBPorchFrontGablematerial);
    RBPorchFrontGable.name = "R_B_P_F_G";
    RBPorchFrontGable.visible = false;
    RBPorchFrontGable.material.map.repeat.set(0.1,0.110)
    const_var.R_B_P.add( RBPorchFrontGable );


    /* Left Gable For Porch*/
    var quad_vertices =
    [
    //botom left
    -1,-0,0,
    //botom right
    0,-0,0,
    //top right
    0,1,0,
    //top left
    -1,1,0,

    ];

    var quad_uvs =
    [

    1.0, 0.0,
    1.0, 0.0,
    1.0, 1.0,
    0.0, 5.0,
    ];

    var quad_indices =
    [
    0, 2, 1, 0, 3, 2,
    ];

    let RBPorchLeftGableGeometry = new THREE.BufferGeometry();
    var vertices = new Float32Array( quad_vertices );
    // Each vertex has one uv coordinate for texture mapping
    var uvs = new Float32Array( quad_uvs);
    // Use the four vertices to draw the two triangles that make up the square.
    var indices = new Uint32Array( quad_indices )
    // itemSize = 3 because there are 3 values (components) per vertex
    RBPorchLeftGableGeometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    RBPorchLeftGableGeometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
    RBPorchLeftGableGeometry.setIndex( new THREE.BufferAttribute( indices, 1 ) );
    var wallTexture = horizontalTexture;
    if(params.p_v_w==true) {
    wallTexture = verticalTexture;
    }
    else {
    wallTexture = horizontalTexture;
    }
    RBPorchLeftGableGeometry.computeVertexNormals();
    let RBPorchLeftGableGeometryLoader = new THREE.TextureLoader();
    var texture1 = RBPorchLeftGableGeometryLoader.load(horizontalTexture,function(texture1) {
    texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
    }
    )
    // let RBPorchLeftGablematerial= new THREE.MeshPhongMaterial({side: THREE.DoubleSide,color:0xFFFF00,/*emissive:0xffffff,vertexColors:true,*/specular:0xFDF4DC,flatShading:true,dithering:true,combine:2,shininess:30});
    let nRBPorchLeftGablematerial = new THREE.MeshBasicMaterial({
    map: texture1,
    side: THREE.DoubleSide,
    color: 0xffffff,
    });
    let RBPorchLeftGable = new THREE.Mesh( RBPorchLeftGableGeometry,nRBPorchLeftGablematerial);
    RBPorchLeftGable.name = "R_B_P_L_G";
    RBPorchLeftGable.visible = false;
    RBPorchLeftGable.material.map.repeat.set(0.1,0.110)
    const_var.R_B_P.add( RBPorchLeftGable );



    // Right Back Porch Back Wall
    let R_B_P_B_W_frontMaterial= new THREE.MeshPhongMaterial({  side: THREE.DoubleSide,color: 0xffffff,
        specular:0xFDF4DC,flatShading:true,
        combine:3,shininess:75,dithering:true,
        shadowSide:THREE.DoubleSide,aoMapIntensity:0,
        normalMapType:THREE.ObjectSpaceNormalMap,
        // map:FWtexture,
      });
    //let R_B_P_B_W_frontMaterial= new THREE.MeshBasicMaterial({ /*map:FWtexture,*/side: THREE.DoubleSide,color: 0xffffff} );
    let RBPorchBackWall = new THREE.Mesh(frontGeo, R_B_P_B_W_frontMaterial);
    RBPorchBackWall.name = "R_B_P_B_W";
    RBPorchBackWall.morphTargets = true;
    RBPorchBackWall.side = THREE.DoubleSide;
    RBPorchBackWall.visible = false;
    const_var.R_B_P.add(RBPorchBackWall);


    // Right Back Porch Right Wall
    let R_B_P_R_W_frontMaterial= new THREE.MeshPhongMaterial({  side: THREE.DoubleSide,color: 0xffffff,
        specular:0xFDF4DC,flatShading:true,
        combine:3,shininess:75,dithering:true,
        shadowSide:THREE.DoubleSide,aoMapIntensity:0,
        normalMapType:THREE.ObjectSpaceNormalMap,
        // map:FWtexture,
      });
    //let R_B_P_R_W_frontMaterial= new THREE.MeshBasicMaterial({ /*map:FWtexture,*/side: THREE.DoubleSide,color: 0xffffff} );
    let RBPorchRightWall = new THREE.Mesh(frontGeo, R_B_P_R_W_frontMaterial);
    RBPorchRightWall.name = "R_B_P_R_W";
    RBPorchRightWall.morphTargets = true;
    RBPorchRightWall.side = THREE.DoubleSide;
    RBPorchRightWall.visible = false;
    const_var.R_B_P.add(RBPorchRightWall);

    //Center Building RBPorch trim
	let RBPorchGeo = new THREE.BoxGeometry(1,1,1);
	// let trimMaterial = new THREE.MeshBasicMaterial({color:0x0E6655,side:THREE.DoubleSide});
	let RBPorchTrim = new THREE.Mesh(RBPorchGeo,trimMaterial);
	RBPorchTrim.name = "RBPorchTrim";
	RBPorchTrim.visible = (params.add_right_back_porch == true)?true:false;
	const_var.R_B_P.add(RBPorchTrim);

   

    //Right Back Porch Roof  
    var quad_vertices =
    [
    -0.5,  0.0, 0.5,
    0.5,  0.0, 0.5,
    0.0, 0.2, -0.0,
    -0.5, 0.2, -0.0,

    0.5,  0.0, -0.5,
    0.5,  0.0, 0.5,
    0.0, 0.2, -0.0,
    0.0, 0.2, -0.5
    ];

    var quad_uvs =
    [
    0.0, 0.0,
    1.0, 0.0,
    0.5, 1.0,
    0.0, 0.5,

    0.0, 0.0,
    1.0, 0.0,
    0.5, 1.0,
    0.0, 0.5
    ];

    var quad_indices =
    [
    0, 2, 1, 0, 3, 2,
     4, 6, 5, 4, 7, 6,
     8,10,9,8,11,10
    ];

    let rbPorchGeometry = new THREE.BufferGeometry();

    var vertices = new Float32Array( quad_vertices );
    // Each vertex has one uv coordinate for texture mapping
    var uvs = new Float32Array( quad_uvs);
    // Use the four vertices to draw the two triangles that make up the square.
    var indices = new Uint32Array( quad_indices )

    // itemSize = 3 because there are 3 values (components) per vertex
    rbPorchGeometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    rbPorchGeometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
    rbPorchGeometry.setIndex( new THREE.BufferAttribute( indices, 1 ) );
    var roofImg = verticalTexture;
    if( params.p_r_s=="3"){
        roofImg = verticalTexture;//"verticalTexture.jpeg";
    }
    else {
        roofImg = horizontalTexture;//"horizantalTexture.jpeg";
    }
    rbPorchGeometry.computeVertexNormals();
    let rbPorchloader = new THREE.TextureLoader();

    var texture1 = rbPorchloader.load(
        roofImg, 
        function() {
       texture1.wrapS = THREE.RepeatWrapping;
       texture1.wrapT = THREE.RepeatWrapping;
    });
       var rCalor = params.p_r_c.replace("#","0x");
       
       let rbPorchmaterial= new THREE.MeshPhongMaterial({ 
        side: THREE.DoubleSide,shadowSide:THREE.DoubleSide,
        color: 0xffffff,emissive:0xffffff,specular:0xFDF4DC,
        
        flatShading:true,vertexColors:true,dithering:true,
        combine:2,shininess:30,map: texture1
      });

    let rbPorch = new THREE.Mesh( rbPorchGeometry,rbPorchmaterial);
    rbPorch.name = "RBPorch";
    rbPorch.scale.set(1,1,1);
    // rbPorch.position.set(0,params.p_h,params.p_d);
    rbPorch.visible = false;
    if(params.p_r_s=="3")
    {
        rbPorch.material.map.rotation = Math.PI/2;
        rbPorch.material.map.repeat.set(params.p_d,1);
    }
    else
    {
        rbPorch.material.map.rotation = -Math.PI/2;
        rbPorch.material.map.repeat.set(1,params.p_w/2 - 4);
    }
    rbPorch.material.color.setHex( rCalor );
    const_var.R_B_P.add( rbPorch );

    }

    render() {
        return <div ref={ref => (this.mount = ref)} />;
    }    
}  