import React, { Component } from 'react';
import * as THREE from "three";
// import verticalTexture from '../assets/Roof/verticalTexture2.jpg';
import verticalTexture from '../assets/images/imgTextures/buildingImages/verticalTexture.jpeg';
import horizontalTexture from '../assets/images/imgTextures/buildingImages/horizantalTexture.jpeg';  
import * as cuBuilding from '../redux/reducers/pricingReducer';

export default class BuildingWalls extends Component {

    addWallsIntoBuilding = (const_var,params)=>{
         //New Wall Geometry For Center Building Left Wall
          var leftWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          var leftWallLoader = new THREE.TextureLoader();
          // var LWtexture = leftWallLoader.load(
          //   verticalTexture,
          //   function () {
          //     LWtexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
          //     LWtexture.wrapS = THREE.RepeatWrapping;
          //     LWtexture.wrapT = THREE.RepeatWrapping;
          //   }
          // );
          var leftWallMaterial= new THREE.MeshPhongMaterial({ 	
            side: THREE.DoubleSide,shadowSide:THREE.DoubleSide,
            color: 0xffffff,emissive:0xffffff,specular:0xFDF4DC,
            flatShading:true,vertexColors:true,dithering:true,
            combine:2,shininess:75,
            // map:LWtexture
          });
          var leftWall = new THREE.Mesh(leftWallGeo, leftWallMaterial);
          leftWall.name = "c_b_g_l_new";
          leftWall.morphTargets = true;
          leftWall.side = THREE.DoubleSide;
          leftWall.scale.set(1, 1, 0);
          // leftWall.position.x = 0;
          // leftWall.position.z = 0;
          // leftWall.position.y = 1;
          leftWall.position.set(0, 1, 0)
          leftWall.rotation.y = Math.PI / 2;
          leftWall.visible = false;
          const_var.scene.add(leftWall);

          //New Wall Geometry For Center Building storage Left Wall
          var storageLeftWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          var storageLeftWallMaterial= new THREE.MeshPhongMaterial({ 	
            side: THREE.DoubleSide,shadowSide:THREE.DoubleSide,
            color: 0xffffff,emissive:0xffffff,specular:0xFDF4DC,
            flatShading:true,vertexColors:true,dithering:true,
            combine:2,shininess:75,
            // map:LWtexture
          });
          var storageLeftWall = new THREE.Mesh(storageLeftWallGeo, storageLeftWallMaterial);
          storageLeftWall.name = "c_b_g_l_s";
          storageLeftWall.morphTargets = true;
          storageLeftWall.side = THREE.DoubleSide;
          storageLeftWall.scale.set(1, 1, 0);
          // storageLeftWall.position.x = 0;
          // storageLeftWall.position.z = 0;
          // storageLeftWall.position.y = 1;
          storageLeftWall.position.set(0, 1, 0)
          storageLeftWall.rotation.y = Math.PI / 2;
          storageLeftWall.visible = false;
          const_var.scene.add(storageLeftWall);

          var CBRSLeftWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          var CBRSLeftWallMaterial= new THREE.MeshPhongMaterial({ 	
            side: THREE.DoubleSide,shadowSide:THREE.DoubleSide,
            color: 0xffffff,emissive:0xffffff,specular:0xFDF4DC,
            flatShading:true,vertexColors:true,dithering:true,
            combine:2,shininess:75,
            // map:LWtexture
          });
          
          var CBRSLeftWall = new THREE.Mesh(CBRSLeftWallGeo, CBRSLeftWallMaterial);
          CBRSLeftWall.name = "c_b_r_s_l_w";
          CBRSLeftWall.morphTargets = true;
          CBRSLeftWall.side = THREE.DoubleSide;
          CBRSLeftWall.scale.set(1, 1, 0);
          CBRSLeftWall.position.set(0, 1, 0)
          CBRSLeftWall.rotation.y = Math.PI / 2;
          CBRSLeftWall.visible = false;
          const_var.scene.add(CBRSLeftWall);

          // Center Building Left Storage Right Wall
          var CBLSRightWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          var CBLSRightWallMaterial= new THREE.MeshPhongMaterial({ 	
            side: THREE.DoubleSide,shadowSide:THREE.DoubleSide,
            color: 0xffffff,emissive:0xffffff,specular:0xFDF4DC,
            flatShading:true,vertexColors:true,dithering:true,
            combine:2,shininess:75,
            // map:LWtexture
          });
          var CBLSRightWall = new THREE.Mesh(CBLSRightWallGeo, CBLSRightWallMaterial);
          CBLSRightWall.name = "c_b_l_s_r_w";
          CBLSRightWall.morphTargets = true;
          CBLSRightWall.side = THREE.DoubleSide;
          CBLSRightWall.scale.set(10, 10, 0);
          CBLSRightWall.position.set(0, 1, 0)
          CBLSRightWall.rotation.y = Math.PI / 2;
          CBLSRightWall.visible = false;
          const_var.scene.add(CBLSRightWall);

          // Testing Purpose
          var leftMaterialP = new THREE.MeshPhongMaterial({
            fog: false,
            flatShading: false,
            specular: 0xe7b100,
            color: 0x0,
            shininess: 80,
            emissiveIntensity: 0.4,
            side: THREE.DoubleSide,
            clearcoat: 0,
            clearcoatRoughness: 0,
            reflectivity: 0,
            envMaps: "reflaction",
            needsUpdate: true,
          });
          var leftGeoP = new THREE.PlaneGeometry(1, 1, 30, 30); //new THREE.BoxGeometry(1,1,0.1);//new THREE.PlaneGeometry(1,1,30,30);
          var leftWall = new THREE.Mesh(leftGeoP, leftMaterialP);
          leftWall.name = "c_b_g_l_new_shine";
          leftWall.morphTargets = true;
          leftWall.side = THREE.DoubleSide;
          leftWall.scale.set(1, 1, 0);
          leftWall.position.x = 0;
          leftWall.position.z = 0;
          leftWall.position.y = 1;
          leftWall.rotation.y = Math.PI / 2;
          leftWall.visible = false;
        
          //const_var.scene.add(leftWall);
        
          //New Wall Geometry For Center Building Left Wall WainScote
          var leftWainScoteGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          var leftWainScoteMaterial = new THREE.MeshBasicMaterial({
            /*map:LWtexture,*/ side: THREE.DoubleSide,
            color: 0xffffff,
          });
          var leftWallWainScote = new THREE.Mesh(leftWainScoteGeo, leftWainScoteMaterial);
          leftWallWainScote.name = "c_b_g_l_new_w";
          leftWallWainScote.morphTargets = true;
          leftWallWainScote.side = THREE.DoubleSide;
          leftWallWainScote.scale.set(1, 1, 0);
          leftWallWainScote.position.set(0, 0, 1);
          // leftWallW.position.x = 0;
          // leftWallW.position.z = 0;
          // leftWallW.position.y = 1;

          leftWallWainScote.rotation.y = Math.PI / 2;
          leftWallWainScote.visible = false;
          //leftWallW.material.map.wrapS = THREE.RepeatWrapping;
          //leftWallW.material.map.wrapT = THREE.RepeatWrapping;
          //leftWallW.material.map.repeat.set(1,1);
        
          const_var.scene.add(leftWallWainScote);
        
          //End New Wall Geometry
        
          //New Wall Geometry For Center Building Right Wall
          var rightWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          // var rightWallLoader = new THREE.TextureLoader();
          // var RWtexture = rightWallLoader.load(
          //   horizontalTexture,
          //   function () {
          //     RWtexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
          //     RWtexture.wrapS = THREE.RepeatWrapping;
          //     RWtexture.wrapT = THREE.RepeatWrapping;
          //   }
          // );
          var rightWallMaterial= new THREE.MeshPhongMaterial({ 	
            side: THREE.DoubleSide,shadowSide:THREE.DoubleSide,
            color: 0xffffff,emissive:0xffffff,specular:0xFDF4DC,
            flatShading:true,vertexColors:true,dithering:true,
            combine:2,shininess:75,
            // map:RWtexture,
          });
          var rightWall = new THREE.Mesh(rightWallGeo, rightWallMaterial /*rightMaterial*/);
          rightWall.name = "c_b_g_r_new";
          rightWall.morphTargets = true;
          rightWall.side = THREE.DoubleSide;
          rightWall.scale.set(1, 1, 0);
          rightWall.position.set(0, 1, 1);
          // rightWall.position.x = 0;
          // rightWall.position.z = 0;
          // rightWall.position.y = 1;
          rightWall.rotation.y = Math.PI / 2;
          rightWall.visible = false;
          const_var.scene.add(rightWall);

          //New Wall Geometry For Center Building storage Right Wall
          var storageRightWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          var storageRightWallMaterial= new THREE.MeshPhongMaterial({ 	
            side: THREE.DoubleSide,shadowSide:THREE.DoubleSide,
            color: 0xffffff,emissive:0xffffff,specular:0xFDF4DC,
            flatShading:true,vertexColors:true,dithering:true,
            combine:2,shininess:75,
            // map:RWtexture,
          });
          var storageRightWall = new THREE.Mesh(storageRightWallGeo, storageRightWallMaterial /*rightMaterial*/);
          storageRightWall.name = "c_b_g_r_s_w";
          storageRightWall.morphTargets = true;
          storageRightWall.side = THREE.DoubleSide;
          storageRightWall.scale.set(1, 1, 0);
          storageRightWall.position.set(0, 1, 1);
          // rightWall.position.x = 0;
          // rightWall.position.z = 0;
          // rightWall.position.y = 1;
          storageRightWall.rotation.y = Math.PI / 2;
          storageRightWall.visible = false;
          const_var.scene.add(storageRightWall);
        
          //New Wall Geometry For Center Building Right Wall WainScote
          var rightGeoW = new THREE.PlaneGeometry(1, 1, 30, 30);
          var rightMaterialW = new THREE.MeshBasicMaterial({
            /*map:RWtexture,*/ side: THREE.DoubleSide,
            color: 0xffffff,
          });
          var rightWallW = new THREE.Mesh(rightGeoW, rightMaterialW);
          rightWallW.name = "c_b_g_r_new_w";
          rightWallW.morphTargets = true;
          rightWallW.side = THREE.DoubleSide;
          rightWallW.scale.set(1, 1, 0);
          rightWallW.position.x = 0;
          rightWallW.position.z = 0;
          rightWallW.position.y = 1;
          rightWallW.rotation.y = Math.PI / 2;
          rightWallW.visible = false;
        
          const_var.scene.add(rightWallW);
          //End New Wall Geometry
        
          //New Wall Geometry For Center Building Back Wall
          var backGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          var backWallLoader = new THREE.TextureLoader();
          // var BWtexture = backWallLoader.load(
          //   horizontalTexture,
          //   function () {
          //     BWtexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
          //     BWtexture.wrapS = THREE.RepeatWrapping;
          //     BWtexture.wrapT = THREE.RepeatWrapping;
          //   }
          // );
          var backphongMaterial= new THREE.MeshPhongMaterial({ 	
            side: THREE.DoubleSide,shadowSide:THREE.DoubleSide,
            color: 0xffffff,emissive:0xffffff,specular:0xFDF4DC,
            flatShading:true,vertexColors:true,dithering:true,
            combine:2,shininess:75,
            // map:BWtexture,
          });
          var backWall = new THREE.Mesh(backGeo, backphongMaterial /*backMaterial*/);
          backWall.name = "c_b_g_b_new";
          backWall.morphTargets = true;
          backWall.side = THREE.DoubleSide;
          backWall.scale.set(1, 1, 0);
          backWall.position.x = 0;
          backWall.position.z = 0;
          backWall.position.y = 1;
          //backWall.rotation.y= Math.PI / 2;
          backWall.visible = false;
          //backWall.material.map.wrapS = THREE.RepeatWrapping;
          //backWall.material.map.wrapT = THREE.RepeatWrapping;
          //backWall.material.map.repeat.set(1,1);
          const_var.scene.add(backWall);


         //New Wall Geometry For Center Building storage Back Wall
          var storageBackWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          var storageBackWallphongMaterial= new THREE.MeshPhongMaterial({ 	
            side: THREE.DoubleSide,shadowSide:THREE.DoubleSide,
            color: 0xffffff,emissive:0xffffff,specular:0xFDF4DC,
            flatShading:true,vertexColors:true,dithering:true,
            combine:2,shininess:75,
            // map:BWtexture,
          });
          var storageBackWall = new THREE.Mesh(storageBackWallGeo, storageBackWallphongMaterial /*backMaterial*/);
          storageBackWall.name = "c_b_g_b_s";
          storageBackWall.morphTargets = true;
          storageBackWall.side = THREE.DoubleSide;
          storageBackWall.scale.set(1, 1, 0);
          storageBackWall.position.x = 0;
          storageBackWall.position.z = 0;
          storageBackWall.position.y = 1;
          storageBackWall.visible = false;
          const_var.scene.add(storageBackWall);
        
          var CBRSBackWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          var CBRSBackWallMaterial= new THREE.MeshPhongMaterial({ 	
            side: THREE.DoubleSide,shadowSide:THREE.DoubleSide,
            color: 0xffffff,emissive:0xffffff,specular:0xFDF4DC,
            flatShading:true,vertexColors:true,dithering:true,
            combine:2,shininess:75,
            // map:BWtexture,
          });
          var CBRSBackWall = new THREE.Mesh(CBRSBackWallGeo, CBRSBackWallMaterial /*backMaterial*/);
          CBRSBackWall.name = "c_b_r_s_b_w";
          CBRSBackWall.morphTargets = true;
          CBRSBackWall.side = THREE.DoubleSide;
          CBRSBackWall.scale.set(1, 1, 0);
          CBRSBackWall.position.x = 0;
          CBRSBackWall.position.z = 0;
          CBRSBackWall.position.y = 1;
          //CBRSBackWall.rotation.y= Math.PI / 2;
          CBRSBackWall.visible = false;
          const_var.scene.add(CBRSBackWall);


          var CBLSBackWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          var CBLSBackWallMaterial= new THREE.MeshPhongMaterial({ 	
            side: THREE.DoubleSide,shadowSide:THREE.DoubleSide,
            color: 0xffffff,emissive:0xffffff,specular:0xFDF4DC,
            flatShading:true,vertexColors:true,dithering:true,
            combine:2,shininess:75,
            // map:BWtexture,
          });
          var CBLSBackWall = new THREE.Mesh(CBLSBackWallGeo, CBLSBackWallMaterial /*backMaterial*/);
          CBLSBackWall.name = "c_b_l_s_b_w";
          CBLSBackWall.morphTargets = true;
          CBLSBackWall.side = THREE.DoubleSide;
          CBLSBackWall.scale.set(1, 1, 0);
          CBLSBackWall.position.x = 0;
          CBLSBackWall.position.z = 0;
          CBLSBackWall.position.y = 1;
          //CBLSBackWall.rotation.y= Math.PI / 2;
          CBLSBackWall.visible = false;
          const_var.scene.add(CBLSBackWall);

          //New Wall Geometry For Center Building Back Wall WainScote
          var backGeoW = new THREE.PlaneGeometry(1, 1, 30, 30);
          var backMaterialW = new THREE.MeshBasicMaterial({
            /*map:BWtexture,*/ side: THREE.DoubleSide,
            color: 0xffffff,
          });
          var backWallW = new THREE.Mesh(backGeoW, backMaterialW);
          backWallW.name = "c_b_g_b_new_w";
          backWallW.morphTargets = true;
          backWallW.side = THREE.DoubleSide;
          backWallW.scale.set(1, 1, 0);
          backWallW.position.x = 0;
          backWallW.position.z = 0;
          backWallW.position.y = 1;
          //backWall.rotation.y= Math.PI / 2;
          backWallW.visible = false;
        
          const_var.scene.add(backWallW);
          //End New Wall Geometry
        
          //New Wall Geometry For Center Building Front Wall
          var frontGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          var frontWallLoader = new THREE.TextureLoader();
          // var FWtexture = frontWallLoader.load(
          //   horizontalTexture,
          //   function () {
          //     FWtexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
          //     FWtexture.wrapS = THREE.RepeatWrapping;
          //     FWtexture.wrapT = THREE.RepeatWrapping;
          //   }
          // );
          // var frontMaterial = new THREE.MeshPhongMaterial({
          //   side: THREE.DoubleSide,
          //   color: 0xffffff,
          //   emissive: 0xffffff,
          //   specular: 0xfdf4dc,
          //   roughness: 0,
          //   metalness: 1,
          //   flatShading: true,
          //   vertexColors: true,
          //   combine: 3,
          //   shininess: 75,
          //   dithering: true,
          //   shadowSide: THREE.DoubleSide,
          //   aoMapIntensity: 0,
          //   normalMapType: THREE.ObjectSpaceNormalMap,
          // });
          var frontMaterial= new THREE.MeshPhongMaterial({  side: THREE.DoubleSide,color: 0xffffff,emissive:0xffffff,
            specular:0xFDF4DC,flatShading:true,
            vertexColors:true,combine:3,shininess:75,dithering:true,
            shadowSide:THREE.DoubleSide,aoMapIntensity:0,
            normalMapType:THREE.ObjectSpaceNormalMap,
            // map:FWtexture,
          });
          //var frontMaterial= new THREE.MeshBasicMaterial({ /*map:FWtexture,*/side: THREE.DoubleSide,color: 0xffffff} );
          var frontWall = new THREE.Mesh(frontGeo, frontMaterial);
          frontWall.name = "c_b_g_p_new";
          frontWall.morphTargets = true;
          frontWall.side = THREE.DoubleSide;
          frontWall.scale.set(1, 1, 0);
          frontWall.position.x = 0;
          frontWall.position.z = 0;
          frontWall.position.y = 1;
          //backWall.rotation.y= Math.PI / 2;
          frontWall.visible = false;
          //frontWall.material.map.wrapS = THREE.RepeatWrapping;
          //frontWall.material.map.wrapT = THREE.RepeatWrapping;
          //frontWall.material.map.repeat.set(1,1);
        
          const_var.scene.add(frontWall);

          //New Wall Geometry For Center Building storage Front Wall
          var storageFrontWall = new THREE.Mesh(frontGeo, frontMaterial);
          storageFrontWall.name = "c_b_g_f_s";
          storageFrontWall.morphTargets = true;
          storageFrontWall.side = THREE.DoubleSide;
          storageFrontWall.scale.set(1, 1, 0);
          storageFrontWall.position.x = 0;
          storageFrontWall.position.z = 0;
          storageFrontWall.position.y = 1;
          //backWall.rotation.y= Math.PI / 2;
          storageFrontWall.visible = false;
          //frontWall.material.map.wrapS = THREE.RepeatWrapping;
          //frontWall.material.map.wrapT = THREE.RepeatWrapping;
          //frontWall.material.map.repeat.set(1,1);
        
          const_var.scene.add(storageFrontWall);

           // Center Building Right Storage Front Wall
          var  CBRSFrontWallGeo= new THREE.PlaneGeometry(1, 1, 30, 30);
          var CBRSFrontWallMaterial= new THREE.MeshPhongMaterial({  side: THREE.DoubleSide,color: 0xffffff,emissive:0xffffff,
            specular:0xFDF4DC,flatShading:true,
            vertexColors:true,combine:3,shininess:75,dithering:true,
            shadowSide:THREE.DoubleSide,aoMapIntensity:0,
            normalMapType:THREE.ObjectSpaceNormalMap,
            // map:FWtexture,
          });
          //var frontMaterial= new THREE.MeshBasicMaterial({ /*map:FWtexture,*/side: THREE.DoubleSide,color: 0xffffff} );
          var CBRSFrontWall = new THREE.Mesh(CBRSFrontWallGeo, CBRSFrontWallMaterial);
          CBRSFrontWall.name = "c_b_r_s_f_w";
          CBRSFrontWall.morphTargets = true;
          CBRSFrontWall.side = THREE.DoubleSide;
          CBRSFrontWall.scale.set(1, 1, 0);
          CBRSFrontWall.position.x = 0;
          CBRSFrontWall.position.z = 0;
          CBRSFrontWall.position.y = 1;
          //backWall.rotation.y= Math.PI / 2;
          CBRSFrontWall.visible = false;
          const_var.scene.add(CBRSFrontWall);


          // Center Building Left Storage Front Wall
          var  CBLSFrontWallGeo= new THREE.PlaneGeometry(1, 1, 30, 30);
          var CBLSFrontWallMaterial= new THREE.MeshPhongMaterial({  side: THREE.DoubleSide,color: 0xffffff,emissive:0xffffff,
            specular:0xFDF4DC,flatShading:true,
            vertexColors:true,combine:3,shininess:75,dithering:true,
            shadowSide:THREE.DoubleSide,aoMapIntensity:0,
            normalMapType:THREE.ObjectSpaceNormalMap,
            // map:FWtexture,
          });
          //var frontMaterial= new THREE.MeshBasicMaterial({ /*map:FWtexture,*/side: THREE.DoubleSide,color: 0xffffff} );
          var CBLSFrontWall = new THREE.Mesh(CBLSFrontWallGeo, CBLSFrontWallMaterial);
          CBLSFrontWall.name = "c_b_l_s_f_w";
          CBLSFrontWall.morphTargets = true;
          CBLSFrontWall.side = THREE.DoubleSide;
          CBLSFrontWall.scale.set(1, 1, 0);
          CBLSFrontWall.position.x = 0;
          CBLSFrontWall.position.z = 0;
          CBLSFrontWall.position.y = 1;
          //backWall.rotation.y= Math.PI / 2;
          CBLSFrontWall.visible = false;
          const_var.scene.add(CBLSFrontWall);         
        
          //New Wall Geometry For Center Building Front Wall WainScote
          var frontGeoW = new THREE.PlaneGeometry(1, 1, 30, 30);
          var frontMaterialW = new THREE.MeshBasicMaterial({
            /*map:FWtexture,*/ side: THREE.DoubleSide,
            color: 0xffffff,
          });
          var frontWallW = new THREE.Mesh(frontGeoW, frontMaterialW);
          frontWallW.name = "c_b_g_p_new_w";
          frontWallW.morphTargets = true;
          frontWallW.side = THREE.DoubleSide;
          frontWallW.scale.set(1, 1, 0);
          frontWallW.position.x = 0;
          frontWallW.position.z = 0;
          frontWallW.position.y = 1;
          //backWall.rotation.y= Math.PI / 2;
          frontWallW.visible = false;
        
          const_var.scene.add(frontWallW);
          //End New Wall Geometry
        
          //Testing Purpose Wall
          var frontGeo111 = new THREE.PlaneGeometry(1, 1, 30, 30);
          var frontWallLoader = new THREE.TextureLoader();
          var FWtexture = frontWallLoader.load(
            horizontalTexture,
            function () {
              FWtexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
              FWtexture.wrapS = THREE.RepeatWrapping;
              FWtexture.wrapT = THREE.RepeatWrapping;
            }
          );
          var frontMaterial11 = new THREE.MeshPhysicalMaterial({
            /*map:FWtexture,*/ side: THREE.DoubleSide,
            color: 0xcc9e2,
            emissive: 0x000000,
            //specular: 0x111111,
            //shininess : 90,
            //combine:1,
            reflectivity: 0.1,
            clearcoat: 0.9,
            clearcoatRoughness: 0.9,
            transmission: 0.5,
            ior: 1,
            envMapintensity: 0.5,
          });
          var frontWall = new THREE.Mesh(frontGeo111, frontMaterial11);
          frontWall.name = "c_b_g_p_new1";
          frontWall.morphTargets = true;
          frontWall.side = THREE.DoubleSide;
          frontWall.scale.set(1, 1, 0);
          frontWall.position.x = 0;
          frontWall.position.z = 0;
          frontWall.position.y = 1;
          frontWall.visible = false;
          //const_var.scene.add(frontWall);
          //End New Wall Geometry
        
          // const gltfLoader = new THREE.GLTFLoader();
          // const url = "./images/building/buildingImages/tranglewall1.gltf";
          /*gltfLoader.load(url, (gltf) =>{
                const backWall = gltf.const_var.scene;
                backWall.name = "c_b_g_b_new1";
                backWall.position.x=0;
                backWall.position.z=0;
                backWall.position.y=0;
                backWall.rotation.y=0;
                backWall.rotation.y= Math.PI / 2;
                backWall.children[0].material.map.wrapS = THREE.RepeatWrapping;
                backWall.children[0].material.map.wrapT = THREE.RepeatWrapping;
                backWall.children[0].material.map.repeat.set(1,1);
                //const_var.scene.add(backWall);
            });*/
          //addLegs();
        
          //New Gable Geometry For Center Building Front Gable
          var selectedObject = const_var.scene.getObjectByName("fGable");
          const_var.scene.remove(selectedObject);
          var fbGableGeometry = new THREE.BufferGeometry();
          var fbGableVertices = new Float32Array([
            0, 1, -0.5,
            0.5, 0, -0.5,
           -0.5, 0, -0.5,

           
          ]);
          if (params.p_v_w == true) {
            var fbGableUVS = new Float32Array([
              0.0, 1.0,
              0.0, 0.0,
             -0.5, 0.0,

        
            ]);
          } else {
            var fbGableUVS = new Float32Array([
              // -0.5, 0.0, 0.0, 0.0, 0.0, 1.0,
              // r_change
              0.0, 1.0,
              0.0, 0.0,
             -0.5, 0.0,

            ]);
          }
        
          fbGableGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(fbGableVertices, 3)
          );
          //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
          fbGableGeometry.setAttribute("uv", new THREE.BufferAttribute(fbGableUVS, 2));
          var wallTexture = horizontalTexture; 
          if(params.p_v_w==true)
          {
            wallTexture = verticalTexture;//"Vertical-panel-white.jpg";//"verticalTexture.png";
          }
          else
          {
            wallTexture = horizontalTexture;//"Horizontal-panel-white.jpg";//"profile2.png";
          }
          
          fbGableGeometry.computeVertexNormals();
          var fbGableLoader = new THREE.TextureLoader();
          var texture1 = fbGableLoader.load(
            horizontalTexture,
            function (texture1) {
              texture1.wrapS = THREE.RepeatWrapping;
              texture1.wrapT = THREE.RepeatWrapping;
      
              var fbGablematerial = new THREE.MeshBasicMaterial({
                map: texture1,
                wireframe: false,
                side: THREE.DoubleSide,
                color: 0xffffff,
              });
              //comment due to not renderding in scene

             var  fbGable = new THREE.Mesh(fbGableGeometry, fbGablematerial);
              fbGable.name = "fGable";
              fbGable.visible = false;
              fbGable.scale.set(params.p_w, params.p_r_p, 0);
              // console.log(fbGable.scale, "scale");
              fbGable.position.set(0, params.p_h/2, 0);
              if (params.p_v_w == true) {
                fbGable.material.map.rotation = -0.25;
                //fbGable.material.map.repeat.set(params.p_w-2,1);
                fbGable.material.map.repeat.set(2 * params.p_w, 1);
              } else {
                //fbGable.material.map.repeat.set(1,params.p_w/2-4);
                fbGable.material.map.repeat.set(1, params.p_r_p / 3);
              }
              const_var.scene.add(fbGable);
            }
          );


          //  code rewritten due to not showing of gable if 
          // we didint rewrite the above code ravi
        //   var fbGablematerial = new THREE.MeshBasicMaterial({
        //     map: texture1,
        //     wireframe: false,
        //     side: THREE.DoubleSide,
        //     color: 0xffffff,
        //   });
    
        //  var  fbGable = new THREE.Mesh(fbGableGeometry, fbGablematerial);
        //   fbGable.name = "fGable";
        //   fbGable.visible = false;
        //   fbGable.scale.set(params.p_w, params.p_r_p, 0);
        //   // console.log(fbGable.scale, "scale");
        //   fbGable.position.set(0, params.p_h/2, 0);
        //   if (params.p_v_w == true) {
        //     fbGable.material.map.rotation = -0.25;
        //     //fbGable.material.map.repeat.set(params.p_w-2,1);
        //     fbGable.material.map.repeat.set(2 * params.p_w, 1);
        //   } else {
        //     //fbGable.material.map.repeat.set(1,params.p_w/2-4);
        //     fbGable.material.map.repeat.set(1, params.p_r_p / 3);
        //   }
        //   const_var.scene.add(fbGable);
        /*end*/


        //New Gable Geometry For Center Building Storage Front Gable
          var selectedObject = const_var.scene.getObjectByName("f_S_Gable");
          const_var.scene.remove(selectedObject);
          var f_S_GableGeometry = new THREE.BufferGeometry();
          var f_S_GableVertices = new Float32Array([
            0, 1, -0.5, 0.5, 0, -0.5, -0.5, 0, -0.5,

           
          ]);
          if (params.p_v_w == true) {
            var f_S_GableUVS = new Float32Array([
              0.0, 1.0, 0.0, 0.0, -0.5, 0.0,

        
            ]);
          } else {
            var f_S_GableUVS = new Float32Array([
              // -0.5, 0.0, 0.0, 0.0, 0.0, 1.0,
              // r_change
              0.0, 1.0, 0.0, 0.0, -0.5, 0.0,

            ]);
          }
        
          f_S_GableGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(f_S_GableVertices, 3)
          );
          //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
          f_S_GableGeometry.setAttribute("uv", new THREE.BufferAttribute(f_S_GableUVS, 2));
          var wallTexture = horizontalTexture; 
          if(params.p_v_w==true)
          {
            wallTexture = verticalTexture;//"Vertical-panel-white.jpg";//"verticalTexture.png";
          }
          else
          {
            wallTexture = horizontalTexture;//"Horizontal-panel-white.jpg";//"profile2.png";
          }
          
          f_S_GableGeometry.computeVertexNormals();
          var f_S_GableLoader = new THREE.TextureLoader();
          var texture1 = f_S_GableLoader.load(horizontalTexture)
              texture1.wrapS = THREE.RepeatWrapping;
              texture1.wrapT = THREE.RepeatWrapping;
      
              var f_S_Gablematerial = new THREE.MeshBasicMaterial({
                map: texture1,
                wireframe: false,
                side: THREE.DoubleSide,
                color: 0xffffff,
              });
              //comment due to not renderding in scene

             var  f_S_Gable = new THREE.Mesh(f_S_GableGeometry, f_S_Gablematerial);
              f_S_Gable.name = "f_S_Gable";
              f_S_Gable.visible = false;
              f_S_Gable.scale.set(params.p_w, params.p_r_p, 0);
              // console.log(fbGable.scale, "scale");
              f_S_Gable.position.set(0, params.p_h/2, 0);
              if (params.p_v_w == true) {
                f_S_Gable.material.map.rotation = -0.25;
                //fbGable.material.map.repeat.set(params.p_w-2,1);
                f_S_Gable.material.map.repeat.set(2 * params.p_w, 1);
              } else {
                //fbGable.material.map.repeat.set(1,params.p_w/2-4);
                f_S_Gable.material.map.repeat.set(1, params.p_r_p / 3);
              }
              const_var.scene.add(f_S_Gable);
            
          




          //New Gable Geometry For Center Building Back Wall
          var selectedObject = const_var.scene.getObjectByName("bGable");
          const_var.scene.remove(selectedObject);
          var fbGableGeometry = new THREE.BufferGeometry();
          var fbGableVertices = new Float32Array([
            0, 1, -0.5, 0.5, 0, -0.5, -0.5, 0, -0.5,
          ]);
          if (params.p_v_w == true) {
            var fbGableUVS = new Float32Array([
              0.0, 1.0, 0.0, 0.0, -0.5, 0.0,
            ]);
          } else {
            var fbGableUVS = new Float32Array([
              0.0, 1.0, 0.0, 0.0, -0.5, 0.0,
            ]);
          }
        
          fbGableGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(fbGableVertices, 3)
          );
          //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
          fbGableGeometry.setAttribute("uv", new THREE.BufferAttribute(fbGableUVS, 2));
     var wallTexture = horizontalTexture;
		if(params.p_v_w==true)
		{
			wallTexture = verticalTexture;//"Vertical-panel-white.jpg";//"verticalTexture.png";
		}
		else
		{
			wallTexture = horizontalTexture;//"Horizontal-panel-white.jpg";//"profile2.png";
		}
		
          fbGableGeometry.computeVertexNormals();
          var fbGableLoader = new THREE.TextureLoader();
          var texture1 = fbGableLoader.load(
            horizontalTexture,
            function (texture1) {
              texture1.wrapS = THREE.RepeatWrapping;
              texture1.wrapT = THREE.RepeatWrapping;
        
              var fbGablematerial = new THREE.MeshBasicMaterial({
                map: texture1,
                wireframe: false,
                side: THREE.DoubleSide,
                color: 0xffffff,
              });
                //comment due to not renderding in scene
             var fbGable = new THREE.Mesh(fbGableGeometry, fbGablematerial);
              fbGable.name = "bGable";
              fbGable.visible = false;
              fbGable.scale.set(params.p_w, params.p_r_p, 0);
              fbGable.position.set(0, params.p_h, 0);
              if (params.p_v_w == true) {
                fbGable.material.map.rotation = -0.25;
                //fbGable.material.map.repeat.set(params.p_w-2,1);
                fbGable.material.map.repeat.set(2 * params.p_w, 1);
              } else {
                //fbGable.material.map.repeat.set(1,params.p_w/2-4);
                fbGable.material.map.repeat.set(1, params.p_r_p / 3);
              }
              const_var.scene.add(fbGable);
            }
          );

          // var fbGable = new THREE.Mesh(fbGableGeometry, fbGablematerial);
          // fbGable.name = "bGable";
          // fbGable.visible = false;
          // fbGable.scale.set(params.p_w, params.p_r_p, 0);
          // fbGable.position.set(0, params.p_h, 0);
          // if (params.p_v_w == true) {
          //   fbGable.material.map.rotation = -0.25;
          //   //fbGable.material.map.repeat.set(params.p_w-2,1);
          //   fbGable.material.map.repeat.set(2 * params.p_w, 1);
          // } else {
          //   //fbGable.material.map.repeat.set(1,params.p_w/2-4);
          //   fbGable.material.map.repeat.set(1, params.p_r_p / 3);
          // }
          // const_var.scene.add(fbGable);

           //New Wall Geometry For Left Lean To Left Wall
           var frontleanToWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
           var frontLeanToMaterial = new THREE.MeshBasicMaterial({
             /*map:LWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           var frontLeanToFrontWall = new THREE.Mesh(frontleanToWallGeo, frontLeanToMaterial);
           frontLeanToFrontWall.name = "F_L_F_W";
           frontLeanToFrontWall.morphTargets = true;
           frontLeanToFrontWall.side = THREE.DoubleSide;
           frontLeanToFrontWall.scale.set(1, 1, 0);
           frontLeanToFrontWall.position.set(0,0,1);
           frontLeanToFrontWall.rotation.y = Math.PI / 2;
           frontLeanToFrontWall.visible = false;
           const_var.b_t_M_F_t_F.add(frontLeanToFrontWall);
         
           //New Wall Geometry For Left Lean To Back Wall
           var frontLeanToLeftGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
           var frontLeanToLeftMaterial = new THREE.MeshBasicMaterial({
             /*map:LWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           var frontLeanToLeftWall = new THREE.Mesh(frontLeanToLeftGeo,frontLeanToLeftMaterial);
           frontLeanToLeftWall.name = "F_L_L_W";
           frontLeanToLeftWall.morphTargets = true;
           frontLeanToLeftWall.side = THREE.DoubleSide;
           frontLeanToLeftWall.scale.set(1, 1, 0);
           frontLeanToLeftWall.position.set(0,0,1);
           frontLeanToLeftWall.visible = false;
           const_var.b_t_M_F_t_F.add(frontLeanToLeftWall);   
         
           //New Wall Geometry For Left Lean To Front Wall
           var frontLeanToRightWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
           var frontLeanToRightWallMaterial = new THREE.MeshBasicMaterial({
             /*map:LWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           var frontLeanToRightWall = new THREE.Mesh(frontLeanToRightWallGeo,frontLeanToRightWallMaterial);
           frontLeanToRightWall.name = "F_L_R_W";
           frontLeanToRightWall.morphTargets = true;
           frontLeanToRightWall.side = THREE.DoubleSide;
           frontLeanToRightWall.scale.set(1, 1, 0);
           frontLeanToRightWall.position.set(0,0,1);
           frontLeanToRightWall.visible = false;
           const_var.b_t_M_F_t_F.add(frontLeanToRightWall);
         
         
         
            //Front Wall for Left Lean to Storage 
           var frontLeanToRightStorageGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
           var frontLeanToRightStorageMaterial = new THREE.MeshBasicMaterial({
             /*map:LWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           var frontLeanToRightStorageWall = new THREE.Mesh(frontLeanToRightStorageGeo,frontLeanToRightStorageMaterial);
           frontLeanToRightStorageWall.name = "F_L_R_S_W";
           frontLeanToRightStorageWall.morphTargets = true;
           frontLeanToRightStorageWall.side = THREE.DoubleSide;
           frontLeanToRightStorageWall.scale.set(1, 1, 0);
           frontLeanToRightStorageWall.position.set(0,1,0);
           frontLeanToRightStorageWall.visible = false;
           const_var.b_t_M_F_t_F.add(frontLeanToRightStorageWall); 
         
           //New Wall Geometry For Left Lean To Back Wall for Storage
           var frontLeanToLeftStorageGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
           var frontLeanToLeftStorageMaterial = new THREE.MeshBasicMaterial({
             /*map:LWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           var frontLeanToLeftStorageWall = new THREE.Mesh(frontLeanToLeftStorageGeo,frontLeanToLeftStorageMaterial);
           frontLeanToLeftStorageWall.name = "F_L_L_S_W";
           frontLeanToLeftStorageWall.morphTargets = true;
           frontLeanToLeftStorageWall.side = THREE.DoubleSide;
           frontLeanToLeftStorageWall.scale.set(1, 1, 0);
           frontLeanToLeftStorageWall.position.set(0,1,0);
           frontLeanToLeftStorageWall.visible = false;
           const_var.b_t_M_F_t_F.add(frontLeanToLeftStorageWall); 
         
            //Left Wall for Left Lean to Storage 
            var frontLeanToFrontStorageGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
            var frontLeanToFrontStorageMaterial = new THREE.MeshBasicMaterial({
              /*map:LWtexture,*/ side: THREE.DoubleSide,
              color: 0xffffff,
            });
            var frontLeanToFrontStorageWall = new THREE.Mesh(frontLeanToFrontStorageGeo, frontLeanToFrontStorageMaterial);
            frontLeanToFrontStorageWall.name = "F_L_F_S_W";
            frontLeanToFrontStorageWall.morphTargets = true;
            frontLeanToFrontStorageWall.side = THREE.DoubleSide;
            frontLeanToFrontStorageWall.scale.set(1, 1, 0);
            frontLeanToFrontStorageWall.position.set(0,0,1);
            frontLeanToFrontStorageWall.rotation.y = Math.PI / 2;
            frontLeanToFrontStorageWall.visible = false;
            const_var.b_t_M_F_t_F.add(frontLeanToFrontStorageWall);
          
            //Right Wall for Left Lean to Storage 
            var frontLeanToBackStorageWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
            var frontLeanToBackStorageWallMaterial= new THREE.MeshPhongMaterial({ 	
              side: THREE.DoubleSide,shadowSide:THREE.DoubleSide,
              color: 0xffffff,emissive:0xffffff,specular:0xFDF4DC,
              
              flatShading:true,vertexColors:true,dithering:true,
              combine:2,shininess:75,
              // map:LWtexture
            });
            var frontLeanToBackStorageWall = new THREE.Mesh(frontLeanToBackStorageWallGeo, frontLeanToBackStorageWallMaterial);
            frontLeanToBackStorageWall.name = "F_L_B_S_W";
            frontLeanToBackStorageWall.morphTargets = true;
            frontLeanToBackStorageWall.side = THREE.DoubleSide;
            frontLeanToBackStorageWall.scale.set(1, 1, 0);
            frontLeanToBackStorageWall.position.set(0, 1, 0)
            frontLeanToBackStorageWall.rotation.y = Math.PI / 2;
            frontLeanToBackStorageWall.visible = false;
            const_var.b_t_M_F_t_F.add(frontLeanToBackStorageWall);
          
           //New Gable Geometry For Left Lean To Front Wall
           var selectedObject = const_var.b_t_M_F_t_F.getObjectByName("frontLeanToRightGable");
           const_var.b_t_M_F_t_F.remove(selectedObject);
           var frontLeanToRightGableGeometry = new THREE.BufferGeometry();
           var frontLeanToRightGableVertices = new Float32Array([
             -0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 1, 0.5,
           ]);
           if (params.p_v_w == true) {
             var frontLeanToRightGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
           } else {
             var frontLeanToRightGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0]);
           }
         
           frontLeanToRightGableGeometry.setAttribute("position",new THREE.BufferAttribute(frontLeanToRightGableVertices, 3));
           //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
           frontLeanToRightGableGeometry.setAttribute("uv",new THREE.BufferAttribute(frontLeanToRightGableUVS, 2));
           var wallTexture = horizontalTexture;
           if(params.p_v_w==true)
           {
             wallTexture = verticalTexture;//"Vertical-panel-white.jpg";//"verticalTexture.png";
           }
           else
           {
             wallTexture = horizontalTexture;//"Horizontal-panel-white.jpg";//"profile2.png";
           }

           frontLeanToRightGableGeometry.computeVertexNormals();
           var frontLeanToRightGableLoader = new THREE.TextureLoader();
           var texture1 = frontLeanToRightGableLoader.load(horizontalTexture,function (texture1) {
             texture1.wrapT =  texture1.wrapS = THREE.RepeatWrapping;
           })
           var frontLeanToRightGablematerial = new THREE.MeshBasicMaterial({
             map: texture1,
             wireframe: false,
             side: THREE.DoubleSide,
             color: 0xffffff,
           });
         
          var frontLeanToRightGable = new THREE.Mesh(frontLeanToRightGableGeometry,frontLeanToRightGablematerial);
           frontLeanToRightGable.name = "F_L_R_G";
           frontLeanToRightGable.visible = false;
           frontLeanToRightGable.scale.set(params.leanF_p_w, params.b_l_t_r_pF, 0);
           frontLeanToRightGable.position.set(0, params.leanF_p_h, 0);
           /*if(params.p_v_w==true)
          {
             frontLeanToRightGable.material.map.rotation = -0.25;
             frontLeanToRightGable.material.map.repeat.set(2*params.lean_p_w,1);
          }
          else
          {	
             frontLeanToRightGable.material.map.repeat.set(1,params.b_l_t_r_p/3);
          }*/
           const_var.b_t_M_F_t_F.add(frontLeanToRightGable);
             // }
           // );

           //New Gable Geometry For Left Lean To Back Wall
           var selectedObject = const_var.b_t_M_F_t_F.getObjectByName("frontLeanToLeftGable");
           const_var.b_t_M_F_t_F.remove(selectedObject);
           var frontLeanToLeftGableGeometry = new THREE.BufferGeometry();
           var frontLeanToLeftGableVertices = new Float32Array([
             -0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 1, 0.5,
           ]);
           if (params.p_v_w == true) {
             var frontLeanToLeftGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
           } else {
             var frontLeanToLeftGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0]);
           }
         
           frontLeanToLeftGableGeometry.setAttribute("position",new THREE.BufferAttribute(frontLeanToLeftGableVertices, 3));
           //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
           frontLeanToLeftGableGeometry.setAttribute("uv",new THREE.BufferAttribute(frontLeanToLeftGableUVS, 2));
           var wallTexture = horizontalTexture;
           if(params.p_v_w==true)
           {
             wallTexture = verticalTexture;
           }
           else
           {
             wallTexture = horizontalTexture;
           }

           frontLeanToLeftGableGeometry.computeVertexNormals();
           var frontLeanToLeftGableLoader = new THREE.TextureLoader();
           var texture1 = frontLeanToLeftGableLoader.load(horizontalTexture,function (texture1) {
             texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
           })
           var frontLeanToLeftGablematerial = new THREE.MeshBasicMaterial({
             //map: texture1,
             wireframe: false,
             side: THREE.DoubleSide,
             color: 0xffffff,
           });
         
           var  frontLeanToLeftGable = new THREE.Mesh(frontLeanToLeftGableGeometry,frontLeanToLeftGablematerial);
           frontLeanToLeftGable.name = "F_L_L_G";
           frontLeanToLeftGable.visible = false;
           frontLeanToLeftGable.scale.set(params.leanF_p_w, params.b_l_t_r_pF, 0);
           frontLeanToLeftGable.position.set(0, params.leanF_p_h, 0);
           /*if(params.p_v_w==true)
           {
                 frontLeanToLeftGable.material.map.rotation = -0.25;
                 frontLeanToLeftGable.material.map.repeat.set(2*params.lean_p_w,1);
             }
             else
             {
                 frontLeanToLeftGable.material.map.repeat.set(1,params.b_l_t_r_p/3);
             }*/
           const_var.b_t_M_F_t_F.add(frontLeanToLeftGable);
           //   }
           // );  
           
           
           //New Gable Geometry For Left Lean To Front Storage Wall
           var selectedObject = const_var.b_t_M_F_t_F.getObjectByName("frontLeanToStorageGable");
           const_var.b_t_M_F_t_F.remove(selectedObject);
           var frontLeanToStorageGableGeometry = new THREE.BufferGeometry();
           var frontLeanToStorageGableVertices = new Float32Array([ -0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 1, 0.5,]);
           if (params.p_v_w == true) {
             var frontLeanToStorageGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
           } else {
             var frontLeanToStorageGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0]);
           }
           frontLeanToStorageGableGeometry.setAttribute("position", new THREE.BufferAttribute(frontLeanToStorageGableVertices, 3));
           //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
           frontLeanToStorageGableGeometry.setAttribute("uv",new THREE.BufferAttribute(frontLeanToStorageGableUVS, 2));
           var wallTexture = horizontalTexture;
           if(params.p_v_w==true)
           {
             wallTexture = verticalTexture;
           }
           else
           {
             wallTexture = horizontalTexture;
           }

           frontLeanToStorageGableGeometry.computeVertexNormals();
           var frontLeanToStorageGableLoader = new THREE.TextureLoader();
           var texture1 = frontLeanToStorageGableLoader.load(horizontalTexture, function (texture1) {
             texture1.wrapT =  texture1.wrapS = THREE.RepeatWrapping;
           })
           var frontLeanToStorageGablematerial = new THREE.MeshBasicMaterial({
             map: texture1,
             wireframe: false,
             side: THREE.DoubleSide,
             color: 0xffffff,
           });
           var frontLeanToStorageGable = new THREE.Mesh(frontLeanToStorageGableGeometry,frontLeanToStorageGablematerial);
           frontLeanToStorageGable.name = "F_L_R_S_G";
           frontLeanToStorageGable.visible = false;
           frontLeanToStorageGable.scale.set(params.leanF_p_w, params.b_l_t_r_pF, 0);
           frontLeanToStorageGable.position.set(0, params.leanF_p_h, 0);
               /*if(params.p_v_w==true)
             {
                 frontLeanToRightGable.material.map.rotation = -0.25;
                 frontLeanToRightGable.material.map.repeat.set(2*params.lean_p_w,1);
             }
             else
             {	
                 frontLeanToRightGable.material.map.repeat.set(1,params.b_l_t_r_p/3);
             }*/
           const_var.b_t_M_F_t_F.add(frontLeanToStorageGable);
           //   }
           // );
           //New Wall Geometry For Left Lean To Left Wall WainScote
           var frontleanToWallGeoW = new THREE.PlaneGeometry(1, 1, 30, 30);
           var frontLeanToMaterialW = new THREE.MeshBasicMaterial({
             /*map:LWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           var frontLeanToFrontWallW = new THREE.Mesh(frontleanToWallGeoW, frontLeanToMaterialW);
           frontLeanToFrontWallW.name = "F_L_F_W_WS";
           frontLeanToFrontWallW.morphTargets = true;
           frontLeanToFrontWallW.side = THREE.DoubleSide;
           frontLeanToFrontWallW.scale.set(1, 1, 0);
           frontLeanToFrontWallW.position.x = 0;
           frontLeanToFrontWallW.position.z = 0;
           frontLeanToFrontWallW.position.y = 1;
           frontLeanToFrontWallW.rotation.y = Math.PI / 2;
           frontLeanToFrontWallW.visible = false;
           const_var.b_t_M_F_t_F.add(frontLeanToFrontWallW);
         
           //New Wall Geometry For Left Lean To Front Wall WainScote
           var frontLeanToRightGeoW = new THREE.PlaneGeometry(1, 1, 30, 30);
           var frontLeanToRightMaterialW = new THREE.MeshBasicMaterial({
             /*map:FWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           var frontLeanToRightWallW = new THREE.Mesh(
             frontLeanToRightGeoW,
             frontLeanToRightMaterialW
           );
           frontLeanToRightWallW.name = "F_L_R_W_WS";
           frontLeanToRightWallW.morphTargets = true;
           frontLeanToRightWallW.side = THREE.DoubleSide;
           frontLeanToRightWallW.scale.set(1, 1, 0);
           frontLeanToRightWallW.position.x = 0;
           frontLeanToRightWallW.position.z = 0;
           frontLeanToRightWallW.position.y = 1;
           frontLeanToRightWallW.visible = false;
           const_var.b_t_M_F_t_F.add(frontLeanToRightWallW);
          
           //New Wall Geometry For Left Lean To Back Wall WainScote
           var frontLeanToLeftGeoW = new THREE.PlaneGeometry(1, 1, 30, 30);
           var frontLeanToLeftMaterialW = new THREE.MeshBasicMaterial({
             /*map:BWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           var frontLeanToLeftWallW = new THREE.Mesh(
             frontLeanToLeftGeoW,
             frontLeanToLeftMaterialW
           );
           frontLeanToLeftWallW.name = "F_L_L_W_WS";
           frontLeanToLeftWallW.morphTargets = true;
           frontLeanToLeftWallW.side = THREE.DoubleSide;
           frontLeanToLeftWallW.scale.set(1, 1, 0);
           frontLeanToLeftWallW.position.x = 0;
           frontLeanToLeftWallW.position.z = 0;
           frontLeanToLeftWallW.position.y = 1;
           frontLeanToLeftWallW.visible = false;
           const_var.b_t_M_F_t_F.add(frontLeanToLeftWallW);     
           
           
           	
           //New Wall Geometry For Left Lean To Left Wall
           var backLeanToWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
           var backLeanToMaterial = new THREE.MeshBasicMaterial({
             /*map:LWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           var backLeanToFrontWall = new THREE.Mesh(backLeanToWallGeo, backLeanToMaterial);
           backLeanToFrontWall.name = "B_L_F_W";
           backLeanToFrontWall.morphTargets = true;
           backLeanToFrontWall.side = THREE.DoubleSide;
           backLeanToFrontWall.scale.set(1, 1, 0);
           backLeanToFrontWall.position.set(0,0,1);
           backLeanToFrontWall.rotation.y = Math.PI / 2;
           backLeanToFrontWall.visible = false;
           const_var.b_t_M_B_t_B.add(backLeanToFrontWall);
          
           //New Wall Geometry For Left Lean To Back Wall
           var backLeanToLeftGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
           var backLeanToLeftMaterial = new THREE.MeshBasicMaterial({
             /*map:LWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           var backLeanToLeftWall = new THREE.Mesh(backLeanToLeftGeo,backLeanToLeftMaterial);
           backLeanToLeftWall.name = "B_L_L_W";
           backLeanToLeftWall.morphTargets = true;
           backLeanToLeftWall.side = THREE.DoubleSide;
           backLeanToLeftWall.scale.set(1, 1, 0);
           backLeanToLeftWall.position.set(0,0,1);
           backLeanToLeftWall.visible = false;
           const_var.b_t_M_B_t_B.add(backLeanToLeftWall);   
          
           //New Wall Geometry For Left Lean To Front Wall
           var backLeanToRightWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
           var backLeanToRightWallMaterial = new THREE.MeshBasicMaterial({
             /*map:LWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           var backLeanToRightWall = new THREE.Mesh(backLeanToRightWallGeo,backLeanToRightWallMaterial);
           backLeanToRightWall.name = "B_L_R_W";
           backLeanToRightWall.morphTargets = true;
           backLeanToRightWall.side = THREE.DoubleSide;
           backLeanToRightWall.scale.set(1, 1, 0);
           backLeanToRightWall.position.set(0,0,1);
           backLeanToRightWall.visible = false;
           const_var.b_t_M_B_t_B.add(backLeanToRightWall);
          
          
          
            //Front Wall for Left Lean to Storage 
           var backLeanToLeftStorageGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
           var backLeanToLeftStorageMaterial = new THREE.MeshBasicMaterial({
             /*map:LWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           var backLeanToLeftStorageWall = new THREE.Mesh(backLeanToLeftStorageGeo,backLeanToLeftStorageMaterial);
           backLeanToLeftStorageWall.name = "B_L_L_S_W";
           backLeanToLeftStorageWall.morphTargets = true;
           backLeanToLeftStorageWall.side = THREE.DoubleSide;
           backLeanToLeftStorageWall.scale.set(1, 1, 0);
           backLeanToLeftStorageWall.position.set(0,1,0);
           backLeanToLeftStorageWall.visible = false;
           const_var.b_t_M_B_t_B.add(backLeanToLeftStorageWall); 
          
           //New Wall Geometry For Left Lean To Back Wall for Storage
           var backLeanToRightStorageGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
           var backLeanToRightStorageMaterial = new THREE.MeshBasicMaterial({
             /*map:LWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           var backLeanToRightStorageWall = new THREE.Mesh(backLeanToRightStorageGeo,backLeanToRightStorageMaterial);
           backLeanToRightStorageWall.name = "B_L_R_S_W";
           backLeanToRightStorageWall.morphTargets = true;
           backLeanToRightStorageWall.side = THREE.DoubleSide;
           backLeanToRightStorageWall.scale.set(1, 1, 0);
           backLeanToRightStorageWall.position.set(0,1,0);
           backLeanToRightStorageWall.visible = false;
           const_var.b_t_M_B_t_B.add(backLeanToRightStorageWall); 
          
            //Left Wall for Left Lean to Storage 
            var backLeanToBackStorageWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
            var backLeanToBackStorageMaterial = new THREE.MeshBasicMaterial({
              /*map:LWtexture,*/ side: THREE.DoubleSide,
              color: 0xffffff,
            });
            var b;
            var backLeanToBackStorageWall = new THREE.Mesh(backLeanToBackStorageWallGeo, backLeanToBackStorageMaterial);
            backLeanToBackStorageWall.name = "B_L_B_S_W";
            backLeanToBackStorageWall.morphTargets = true;
            backLeanToBackStorageWall.side = THREE.DoubleSide;
            backLeanToBackStorageWall.scale.set(1, 1, 0);
            backLeanToBackStorageWall.position.set(0, 1, 0)
            backLeanToBackStorageWall.rotation.y = Math.PI / 2;
            backLeanToBackStorageWall.visible = false;
            const_var.b_t_M_B_t_B.add(backLeanToBackStorageWall);
       
          
            //Right Wall for Left Lean to Storage 
            var backLeanToFrontStorageWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
            var backLeanToFrontStorageMaterial = new THREE.MeshBasicMaterial({
              /*map:LWtexture,*/ side: THREE.DoubleSide,
              color: 0xffffff,
            });
            var b;
            var backLeanToFrontStorageWall = new THREE.Mesh(backLeanToFrontStorageWallGeo, backLeanToFrontStorageMaterial);
            backLeanToFrontStorageWall.name = "B_L_F_S_W";
            backLeanToFrontStorageWall.morphTargets = true;
            backLeanToFrontStorageWall.side = THREE.DoubleSide;
            backLeanToFrontStorageWall.scale.set(1, 1, 0);
            backLeanToFrontStorageWall.position.set(0, 1, 0)
            backLeanToFrontStorageWall.rotation.y = Math.PI / 2;
            backLeanToFrontStorageWall.visible = false;
            const_var.b_t_M_B_t_B.add(backLeanToFrontStorageWall);
          
           //New Gable Geometry For Left Lean To Front Wall
           var selectedObject = const_var.b_t_M_B_t_B.getObjectByName("backLeanToRightGable");
           const_var.b_t_M_B_t_B.remove(selectedObject);
           var backLeanToRightGableGeometry = new THREE.BufferGeometry();
           var backLeanToRightGableVertices = new Float32Array([
             -0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 1, 0.5,
           ]);
           if (params.p_v_w == true) {
             var backLeanToRightGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
           } else {
             var backLeanToRightGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0]);
           }
          
           backLeanToRightGableGeometry.setAttribute("position",new THREE.BufferAttribute(backLeanToRightGableVertices, 3));
           //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
           backLeanToRightGableGeometry.setAttribute("uv",new THREE.BufferAttribute(backLeanToRightGableUVS, 2));
           var wallTexture = horizontalTexture;
           if(params.p_v_w==true)
           {
             wallTexture = verticalTexture;//"Vertical-panel-white.jpg";//"verticalTexture.png";
           }
           else
           {
             wallTexture = horizontalTexture;//"Horizontal-panel-white.jpg";//"profile2.png";
           }
           
           backLeanToRightGableGeometry.computeVertexNormals();
           var backLeanToRightGableLoader = new THREE.TextureLoader();
           var texture1 = backLeanToRightGableLoader.load(horizontalTexture,function (texture1) {
             texture1.wrapT =  texture1.wrapS = THREE.RepeatWrapping;
           })
           var backLeanToRightGablematerial = new THREE.MeshBasicMaterial({
             map: texture1,
             wireframe: false,
             side: THREE.DoubleSide,
             color: 0xffffff,
           });
          
          var backLeanToRightGable = new THREE.Mesh(backLeanToRightGableGeometry,backLeanToRightGablematerial);
           backLeanToRightGable.name = "B_L_R_G";
           backLeanToRightGable.visible = false;
           backLeanToRightGable.scale.set(params.leanB_p_w, params.b_l_t_r_pBB, 0);
           backLeanToRightGable.position.set(0, params.leanB_p_h, 0);
           /*if(params.p_v_w==true)
          {
             backLeanToRightGable.material.map.rotation = -0.25;
             backLeanToRightGable.material.map.repeat.set(2*params.lean_p_w,1);
          }
          else
          {	
             backLeanToRightGable.material.map.repeat.set(1,params.b_l_t_r_pBB/3);
          }*/
           const_var.b_t_M_B_t_B.add(backLeanToRightGable);
             // }
           // );
          
           //New Gable Geometry For Left Lean To Back Wall
           var selectedObject = const_var.b_t_M_B_t_B.getObjectByName("backLeanToLeftGable");
           const_var.b_t_M_B_t_B.remove(selectedObject);
           var backLeanToLeftGableGeometry = new THREE.BufferGeometry();
           var backLeanToLeftGableVertices = new Float32Array([
             -0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 1, 0.5,
           ]);
           if (params.p_v_w == true) {
             var backLeanToLeftGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
           } else {
             var backLeanToLeftGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0]);
           }
          
           backLeanToLeftGableGeometry.setAttribute("position",new THREE.BufferAttribute(backLeanToLeftGableVertices, 3));
           //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
           backLeanToLeftGableGeometry.setAttribute("uv",new THREE.BufferAttribute(backLeanToLeftGableUVS, 2));
           var wallTexture = horizontalTexture;
           if(params.p_v_w==true)
           {
             wallTexture = verticalTexture;
           }
           else
           {
             wallTexture = horizontalTexture;
           }
           
           backLeanToLeftGableGeometry.computeVertexNormals();
           var backLeanToLeftGableLoader = new THREE.TextureLoader();
           var texture1 = backLeanToLeftGableLoader.load(horizontalTexture,function (texture1) {
             texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
           })
           var backLeanToLeftGablematerial = new THREE.MeshBasicMaterial({
             //map: texture1,
             wireframe: false,
             side: THREE.DoubleSide,
             color: 0xffffff,
           });
          
           var  backLeanToLeftGable = new THREE.Mesh(backLeanToLeftGableGeometry,backLeanToLeftGablematerial);
           backLeanToLeftGable.name = "B_L_L_G";
           backLeanToLeftGable.visible = false;
           backLeanToLeftGable.scale.set(params.leanB_p_w, params.b_l_t_r_pBB, 0);
           backLeanToLeftGable.position.set(0, params.leanB_p_h, 0);
           /*if(params.p_v_w==true)
           {
                 backLeanToLeftGable.material.map.rotation = -0.25;
                 backLeanToLeftGable.material.map.repeat.set(2*params.lean_p_w,1);
             }
             else
             {
                 backLeanToLeftGable.material.map.repeat.set(1,params.b_l_t_r_pBB/3);
             }*/
           const_var.b_t_M_B_t_B.add(backLeanToLeftGable);
           //   }
           // );  
            
            
           //New Gable Geometry For Left Lean To Front Storage Wall
           var selectedObject = const_var.b_t_M_B_t_B.getObjectByName("backLeanToStorageGable");
           const_var.b_t_M_B_t_B.remove(selectedObject);
           var backLeanToStorageGableGeometry = new THREE.BufferGeometry();
           var backLeanToStorageGableVertices = new Float32Array([ -0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 1, 0.5,]);
           if (params.p_v_w == true) {
             var backLeanToStorageGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
           } else {
             var backLeanToStorageGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0]);
           }
           backLeanToStorageGableGeometry.setAttribute("position", new THREE.BufferAttribute(backLeanToStorageGableVertices, 3));
           //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
           backLeanToStorageGableGeometry.setAttribute("uv",new THREE.BufferAttribute(backLeanToStorageGableUVS, 2));
           var wallTexture = horizontalTexture;
           if(params.p_v_w==true)
           {
             wallTexture = verticalTexture;
           }
           else
           {
             wallTexture = horizontalTexture;
           }
           
           backLeanToStorageGableGeometry.computeVertexNormals();
           var backLeanToStorageGableLoader = new THREE.TextureLoader();
           var texture1 = backLeanToStorageGableLoader.load(horizontalTexture, function (texture1) {
             texture1.wrapT =  texture1.wrapS = THREE.RepeatWrapping;
           })
           var backLeanToStorageGablematerial = new THREE.MeshBasicMaterial({
             map: texture1,
             wireframe: false,
             side: THREE.DoubleSide,
             color: 0xffffff,
           });
           var backLeanToStorageGable = new THREE.Mesh(backLeanToStorageGableGeometry,backLeanToStorageGablematerial);
           backLeanToStorageGable.name = "B_L_L_S_G";
           backLeanToStorageGable.visible = false;
           backLeanToStorageGable.scale.set(params.leanB_p_w, params.b_l_t_r_pBB, 0);
           backLeanToStorageGable.position.set(0, params.leanB_p_h, 0);
               /*if(params.p_v_w==true)
             {
                 backLeanToRightGable.material.map.rotation = -0.25;
                 backLeanToRightGable.material.map.repeat.set(2*params.lean_p_w,1);
             }
             else
             {	
                 backLeanToRightGable.material.map.repeat.set(1,params.b_l_t_r_pBB/3);
             }*/
           const_var.b_t_M_B_t_B.add(backLeanToStorageGable);
           //   }
           // );
           //New Wall Geometry For Left Lean To Left Wall WainScote
           var backLeanToWallGeoW = new THREE.PlaneGeometry(1, 1, 30, 30);
           var backLeanToMaterialW = new THREE.MeshBasicMaterial({
             /*map:LWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           var backLeanToFrontWallW = new THREE.Mesh(backLeanToWallGeoW, backLeanToMaterialW);
           backLeanToFrontWallW.name = "B_L_B_W_WS";
           backLeanToFrontWallW.morphTargets = true;
           backLeanToFrontWallW.side = THREE.DoubleSide;
           backLeanToFrontWallW.scale.set(1, 1, 0);
           backLeanToFrontWallW.position.x = 0;
           backLeanToFrontWallW.position.z = 0;
           backLeanToFrontWallW.position.y = 1;
           backLeanToFrontWallW.rotation.y = Math.PI / 2;
           backLeanToFrontWallW.visible = false;
           const_var.b_t_M_B_t_B.add(backLeanToFrontWallW);
          
           //New Wall Geometry For Left Lean To Front Wall WainScote
           var backLeanToRightGeoW = new THREE.PlaneGeometry(1, 1, 30, 30);
           var backLeanToRightMaterialW = new THREE.MeshBasicMaterial({
             /*map:FWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           var backLeanToRightWallW = new THREE.Mesh(
             backLeanToRightGeoW,
             backLeanToRightMaterialW
           );
           backLeanToRightWallW.name = "B_L_B_W_WS";
           backLeanToRightWallW.morphTargets = true;
           backLeanToRightWallW.side = THREE.DoubleSide;
           backLeanToRightWallW.scale.set(1, 1, 0);
           backLeanToRightWallW.position.x = 0;
           backLeanToRightWallW.position.z = 0;
           backLeanToRightWallW.position.y = 1;
           backLeanToRightWallW.visible = false;
           const_var.b_t_M_B_t_B.add(backLeanToRightWallW);
          
           //New Wall Geometry For Left Lean To Back Wall WainScote
           var backLeanToLeftGeoW = new THREE.PlaneGeometry(1, 1, 30, 30);
           var backLeanToLeftMaterialW = new THREE.MeshBasicMaterial({
             /*map:BWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           var backLeanToLeftWallW = new THREE.Mesh(
             backLeanToLeftGeoW,
             backLeanToLeftMaterialW
           );
           backLeanToLeftWallW.name = "B_L_F_W_WS";
           backLeanToLeftWallW.morphTargets = true;
           backLeanToLeftWallW.side = THREE.DoubleSide;
           backLeanToLeftWallW.scale.set(1, 1, 0);
           backLeanToLeftWallW.position.x = 0;
           backLeanToLeftWallW.position.z = 0;
           backLeanToLeftWallW.position.y = 1;
           backLeanToLeftWallW.visible = false;
           const_var.b_t_M_B_t_B.add(backLeanToLeftWallW);
 

          //New Wall Geometry For Left Lean To Left Wall
          var leanToleftGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          var leanToleftMaterial = new THREE.MeshBasicMaterial({
            /*map:LWtexture,*/ side: THREE.DoubleSide,
            color: 0xffffff,
          });
          var leftLeanToLeftWall = new THREE.Mesh(leanToleftGeo, leanToleftMaterial);
          leftLeanToLeftWall.name = "b_h_t5_new";
          leftLeanToLeftWall.morphTargets = true;
          leftLeanToLeftWall.side = THREE.DoubleSide;
          leftLeanToLeftWall.scale.set(1, 1, 0);
          leftLeanToLeftWall.position.set(0,0,1);
          leftLeanToLeftWall.rotation.y = Math.PI / 2;
          leftLeanToLeftWall.visible = false;
          const_var.b_t_M_L_t_L.add(leftLeanToLeftWall);

          //New Wall Geometry For Left Lean To Front Wall
          var leftLeanTofrontGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          var leftLeanTofrontMaterial = new THREE.MeshBasicMaterial({
            /*map:LWtexture,*/ side: THREE.DoubleSide,
            color: 0xffffff,
          });
          var leftLeanTofrontWall = new THREE.Mesh(leftLeanTofrontGeo,leftLeanTofrontMaterial);
          leftLeanTofrontWall.name = "b_h_t2_new";
          leftLeanTofrontWall.morphTargets = true;
          leftLeanTofrontWall.side = THREE.DoubleSide;
          leftLeanTofrontWall.scale.set(1, 1, 0);
          leftLeanTofrontWall.position.set(0,0,1);
          leftLeanTofrontWall.visible = false;
          const_var.b_t_M_L_t_L.add(leftLeanTofrontWall);

           //New Wall Geometry For Left Lean To Back Wall
           var leftLeanTobackGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
           var leftLeanTobackMaterial = new THREE.MeshBasicMaterial({
             /*map:LWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           var leftLeanTobackWall = new THREE.Mesh(leftLeanTobackGeo,leftLeanTobackMaterial);
           leftLeanTobackWall.name = "b_h_t2B_new";
           leftLeanTobackWall.morphTargets = true;
           leftLeanTobackWall.side = THREE.DoubleSide;
           leftLeanTobackWall.scale.set(1, 1, 0);
           leftLeanTobackWall.position.set(0,0,1);
           leftLeanTobackWall.visible = false;
           const_var.b_t_M_L_t_L.add(leftLeanTobackWall);  

           //Front Wall for Left Lean to Storage 
          var leftLeanTofrontStorageGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          var leftLeanTofrontStorageMaterial = new THREE.MeshBasicMaterial({
            /*map:LWtexture,*/ side: THREE.DoubleSide,
            color: 0xffffff,
          });
          var leftLeanToFrontStorageWall = new THREE.Mesh(leftLeanTofrontStorageGeo,leftLeanTofrontStorageMaterial);
          leftLeanToFrontStorageWall.name = "b_h_t2_s";
          leftLeanToFrontStorageWall.morphTargets = true;
          leftLeanToFrontStorageWall.side = THREE.DoubleSide;
          leftLeanToFrontStorageWall.scale.set(1, 1, 0);
          leftLeanToFrontStorageWall.position.set(0,1,0);
          leftLeanToFrontStorageWall.visible = false;
          const_var.b_t_M_L_t_L.add(leftLeanToFrontStorageWall); 

          //New Wall Geometry For Left Lean To Back Wall for Storage
          var leftLeanTobackStorageGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          var leftLeanTobackStorageMaterial = new THREE.MeshBasicMaterial({
            /*map:LWtexture,*/ side: THREE.DoubleSide,
            color: 0xffffff,
          });
          var leftLeanTobackStorageWall = new THREE.Mesh(leftLeanTobackStorageGeo,leftLeanTobackStorageMaterial);
          leftLeanTobackStorageWall.name = "b_h_t2B_s";
          leftLeanTobackStorageWall.morphTargets = true;
          leftLeanTobackStorageWall.side = THREE.DoubleSide;
          leftLeanTobackStorageWall.scale.set(1, 1, 0);
          leftLeanTobackStorageWall.position.set(0,1,0);
          leftLeanTobackStorageWall.visible = false;
          const_var.b_t_M_L_t_L.add(leftLeanTobackStorageWall); 

           //Left Wall for Left Lean to Storage 
           var leanToleftStorageGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
           var leanToleftStorageMaterial = new THREE.MeshBasicMaterial({
             /*map:LWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           var leftLeanToLeftStorageWall = new THREE.Mesh(leanToleftStorageGeo, leanToleftStorageMaterial);
           leftLeanToLeftStorageWall.name = "b_h_t5_s";
           leftLeanToLeftStorageWall.morphTargets = true;
           leftLeanToLeftStorageWall.side = THREE.DoubleSide;
           leftLeanToLeftStorageWall.scale.set(1, 1, 0);
           leftLeanToLeftStorageWall.position.set(0,0,1);
           leftLeanToLeftStorageWall.rotation.y = Math.PI / 2;
           leftLeanToLeftStorageWall.visible = false;
           const_var.b_t_M_L_t_L.add(leftLeanToLeftStorageWall);

           //Right Wall for Left Lean to Storage 
           var leanToLefStoragetWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
           var leanToLefStoragetWallMaterial= new THREE.MeshPhongMaterial({ 	
             side: THREE.DoubleSide,shadowSide:THREE.DoubleSide,
             color: 0xffffff,emissive:0xffffff,specular:0xFDF4DC,
             
             flatShading:true,vertexColors:true,dithering:true,
             combine:2,shininess:75,
             // map:LWtexture
           });
           var leanToLefStoragetWall = new THREE.Mesh(leanToLefStoragetWallGeo, leanToLefStoragetWallMaterial);
           leanToLefStoragetWall.name = "b_h_t5R_s";
           leanToLefStoragetWall.morphTargets = true;
           leanToLefStoragetWall.side = THREE.DoubleSide;
           leanToLefStoragetWall.scale.set(1, 1, 0);
           leanToLefStoragetWall.position.set(0, 1, 0)
           leanToLefStoragetWall.rotation.y = Math.PI / 2;
           leanToLefStoragetWall.visible = false;
           const_var.b_t_M_L_t_L.add(leanToLefStoragetWall);

          //New Gable Geometry For Left Lean To Front Wall
          var selectedObject = const_var.b_t_M_L_t_L.getObjectByName("leanToLeftfGable");
          const_var.b_t_M_L_t_L.remove(selectedObject);
          var leanToLeftfGableGeometry = new THREE.BufferGeometry();
          var leanToLeftfGableVertices = new Float32Array([
            -0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 1, 0.5,
          ]);
          if (params.p_v_w == true) {
            var leanToLeftfGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
          } else {
            var leanToLeftfGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0]);
          }
        
          leanToLeftfGableGeometry.setAttribute("position",new THREE.BufferAttribute(leanToLeftfGableVertices, 3));
          //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
          leanToLeftfGableGeometry.setAttribute("uv",new THREE.BufferAttribute(leanToLeftfGableUVS, 2));
          var wallTexture = horizontalTexture;
          if(params.p_v_w==true)
          {
            wallTexture = verticalTexture;//"Vertical-panel-white.jpg";//"verticalTexture.png";
          }
          else
          {
            wallTexture = horizontalTexture;//"Horizontal-panel-white.jpg";//"profile2.png";
          }
          
          leanToLeftfGableGeometry.computeVertexNormals();
          var leanToLeftfGableLoader = new THREE.TextureLoader();
          var texture1 = leanToLeftfGableLoader.load(horizontalTexture,function (texture1) {
            texture1.wrapT =  texture1.wrapS = THREE.RepeatWrapping;
          })
          var leanToLeftfGablematerial = new THREE.MeshBasicMaterial({
            map: texture1,
            wireframe: false,
            side: THREE.DoubleSide,
            color: 0xffffff,
          });
    
         var leanToLeftfGable = new THREE.Mesh(leanToLeftfGableGeometry,leanToLeftfGablematerial);
          leanToLeftfGable.name = "leanToLeftfGable";
          leanToLeftfGable.visible = false;
          leanToLeftfGable.scale.set(params.lean_p_w, params.b_l_t_r_p, 0);
          leanToLeftfGable.position.set(0, params.lean_p_h, 0);
          /*if(params.p_v_w==true)
        {
            leanToLeftfGable.material.map.rotation = -0.25;
            leanToLeftfGable.material.map.repeat.set(2*params.lean_p_w,1);
        }
        else
        {	
            leanToLeftfGable.material.map.repeat.set(1,params.b_l_t_r_p/3);
        }*/
          const_var.b_t_M_L_t_L.add(leanToLeftfGable);
            // }
          // );

          //New Gable Geometry For Left Lean To Back Wall
          var selectedObject = const_var.b_t_M_L_t_L.getObjectByName("leanToLeftbGable");
          const_var.b_t_M_L_t_L.remove(selectedObject);
          var leanToLeftbGableGeometry = new THREE.BufferGeometry();
          var leanToLeftbGableVertices = new Float32Array([
            -0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 1, 0.5,
          ]);
          if (params.p_v_w == true) {
            var leanToLeftbGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
          } else {
            var leanToLeftbGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0]);
          }
        
          leanToLeftbGableGeometry.setAttribute("position",new THREE.BufferAttribute(leanToLeftbGableVertices, 3));
          //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
          leanToLeftbGableGeometry.setAttribute("uv",new THREE.BufferAttribute(leanToLeftbGableUVS, 2));
          var wallTexture = horizontalTexture;
          if(params.p_v_w==true)
          {
            wallTexture = verticalTexture;
          }
          else
          {
            wallTexture = horizontalTexture;
          }
          
          leanToLeftbGableGeometry.computeVertexNormals();
          var leanToLeftbGableLoader = new THREE.TextureLoader();
          var texture1 = leanToLeftbGableLoader.load(horizontalTexture,function (texture1) {
            texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
          })
          var leanToLeftbGablematerial = new THREE.MeshBasicMaterial({
            //map: texture1,
            wireframe: false,
            side: THREE.DoubleSide,
            color: 0xffffff,
          });
        
          var  leanToLeftbGable = new THREE.Mesh(leanToLeftbGableGeometry,leanToLeftbGablematerial);
          leanToLeftbGable.name = "leanToLeftbGable";
          leanToLeftbGable.visible = false;
          leanToLeftbGable.scale.set(params.lean_p_w, params.b_l_t_r_p, 0);
          leanToLeftbGable.position.set(0, params.lean_p_h, 0);
          /*if(params.p_v_w==true)
          {
                leanToLeftbGable.material.map.rotation = -0.25;
                leanToLeftbGable.material.map.repeat.set(2*params.lean_p_w,1);
            }
            else
            {
                leanToLeftbGable.material.map.repeat.set(1,params.b_l_t_r_p/3);
            }*/
          const_var.b_t_M_L_t_L.add(leanToLeftbGable);
          //   }
          // );  


          //New Gable Geometry For Left Lean To Front Storage Wall
          var selectedObject = const_var.b_t_M_L_t_L.getObjectByName("leanToLeftStoageGable");
          const_var.b_t_M_L_t_L.remove(selectedObject);
          var leanToLeftStorageGableGeometry = new THREE.BufferGeometry();
          var leanToLeftStorageGableVertices = new Float32Array([ -0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 1, 0.5,]);
          if (params.p_v_w == true) {
            var leanToLeftStorageGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
          } else {
            var leanToLeftStorageGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0]);
          }
          leanToLeftStorageGableGeometry.setAttribute("position", new THREE.BufferAttribute(leanToLeftStorageGableVertices, 3));
          //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
          leanToLeftStorageGableGeometry.setAttribute("uv",new THREE.BufferAttribute(leanToLeftStorageGableUVS, 2));
          var wallTexture = horizontalTexture;
          if(params.p_v_w==true)
          {
            wallTexture = verticalTexture;
          }
          else
          {
            wallTexture = horizontalTexture;
          }
          
          leanToLeftStorageGableGeometry.computeVertexNormals();
          var leanToLeftStorageGableLoader = new THREE.TextureLoader();
          var texture1 = leanToLeftStorageGableLoader.load(horizontalTexture, function (texture1) {
            texture1.wrapT =  texture1.wrapS = THREE.RepeatWrapping;
          })
          var leanToLeftStorageGablematerial = new THREE.MeshBasicMaterial({
            map: texture1,
            wireframe: false,
            side: THREE.DoubleSide,
            color: 0xffffff,
          });
          var leanToLeftStorageGable = new THREE.Mesh(leanToLeftStorageGableGeometry,leanToLeftStorageGablematerial);
          leanToLeftStorageGable.name = "leanToLeftStorageGable";
          leanToLeftStorageGable.visible = false;
          leanToLeftStorageGable.scale.set(params.lean_p_w, params.b_l_t_r_p, 0);
          leanToLeftStorageGable.position.set(0, params.lean_p_h, 0);
              /*if(params.p_v_w==true)
            {
                leanToLeftfGable.material.map.rotation = -0.25;
                leanToLeftfGable.material.map.repeat.set(2*params.lean_p_w,1);
            }
            else
            {	
                leanToLeftfGable.material.map.repeat.set(1,params.b_l_t_r_p/3);
            }*/
          const_var.b_t_M_L_t_L.add(leanToLeftStorageGable);
          //   }
          // );
          //New Wall Geometry For Left Lean To Left Wall WainScote
          var leanToleftGeoW = new THREE.PlaneGeometry(1, 1, 30, 30);
          var leanToleftMaterialW = new THREE.MeshBasicMaterial({
            /*map:LWtexture,*/ side: THREE.DoubleSide,
            color: 0xffffff,
          });
          var leanToleftWallW = new THREE.Mesh(leanToleftGeoW, leanToleftMaterialW);
          leanToleftWallW.name = "b_h_t5_new_w";
          leanToleftWallW.morphTargets = true;
          leanToleftWallW.side = THREE.DoubleSide;
          leanToleftWallW.scale.set(1, 1, 0);
          leanToleftWallW.position.x = 0;
          leanToleftWallW.position.z = 0;
          leanToleftWallW.position.y = 1;
          leanToleftWallW.rotation.y = Math.PI / 2;
          leanToleftWallW.visible = false;
          const_var.b_t_M_L_t_L.add(leanToleftWallW);
 
          //New Wall Geometry For Left Lean To Front Wall WainScote
          var leftLeanTofrontGeoW = new THREE.PlaneGeometry(1, 1, 30, 30);
          var leftLeanTofrontMaterialW = new THREE.MeshBasicMaterial({
            /*map:FWtexture,*/ side: THREE.DoubleSide,
            color: 0xffffff,
          });
          var leftLeanTofrontWallW = new THREE.Mesh(
            leftLeanTofrontGeoW,
            leftLeanTofrontMaterialW
          );
          leftLeanTofrontWallW.name = "b_h_t2_new_w";
          leftLeanTofrontWallW.morphTargets = true;
          leftLeanTofrontWallW.side = THREE.DoubleSide;
          leftLeanTofrontWallW.scale.set(1, 1, 0);
          leftLeanTofrontWallW.position.x = 0;
          leftLeanTofrontWallW.position.z = 0;
          leftLeanTofrontWallW.position.y = 1;
          leftLeanTofrontWallW.visible = false;
          const_var.b_t_M_L_t_L.add(leftLeanTofrontWallW);

          //New Wall Geometry For Left Lean To Back Wall WainScote
          var leftLeanTobackGeoW = new THREE.PlaneGeometry(1, 1, 30, 30);
          var leftLeanTobackMaterialW = new THREE.MeshBasicMaterial({
            /*map:BWtexture,*/ side: THREE.DoubleSide,
            color: 0xffffff,
          });
          var leftLeanTobackWallW = new THREE.Mesh(
            leftLeanTobackGeoW,
            leftLeanTobackMaterialW
          );
          leftLeanTobackWallW.name = "b_h_t2B_new_w";
          leftLeanTobackWallW.morphTargets = true;
          leftLeanTobackWallW.side = THREE.DoubleSide;
          leftLeanTobackWallW.scale.set(1, 1, 0);
          leftLeanTobackWallW.position.x = 0;
          leftLeanTobackWallW.position.z = 0;
          leftLeanTobackWallW.position.y = 1;
          leftLeanTobackWallW.visible = false;
          const_var.b_t_M_L_t_L.add(leftLeanTobackWallW);

           //New Wall Geometry For Right Lean To Front Wall
           var rightLeanTofrontGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
           var rightLeanTofrontMaterial = new THREE.MeshBasicMaterial({
             /*map:LWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           var rightLeanTofrontWall = new THREE.Mesh(rightLeanTofrontGeo, rightLeanTofrontMaterial);
           rightLeanTofrontWall.name = "b_h_t4_new";
           rightLeanTofrontWall.morphTargets = true;
           rightLeanTofrontWall.side = THREE.DoubleSide;
           rightLeanTofrontWall.scale.set(1, 1, 0);
           rightLeanTofrontWall.position.set = (0,1,0);
           rightLeanTofrontWall.visible = false;
           const_var.b_t_M_R_t_R.add(rightLeanTofrontWall);

           //New Wall Geometry For Right Lean To Back Wall
           var rightLeanTobackGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
           var rightLeanTobackMaterial = new THREE.MeshBasicMaterial({
             /*map:LWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           var rightLeanTobackWall = new THREE.Mesh(rightLeanTobackGeo,rightLeanTobackMaterial);
           rightLeanTobackWall.name = "b_h_t4B_new";
           rightLeanTobackWall.morphTargets = true;
           rightLeanTobackWall.side = THREE.DoubleSide;
           rightLeanTobackWall.scale.set(1, 1, 0);
           rightLeanTobackWall.position.set = (0,1,0);
           rightLeanTobackWall.visible = false;
           const_var.b_t_M_R_t_R.add(rightLeanTobackWall);

           //New Wall Geometry For Right Lean To Right Wall
           var leanTorightGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
           var leanTorightMaterial = new THREE.MeshBasicMaterial({
             /*map:LWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           var rightLeanTorightWall = new THREE.Mesh(leanTorightGeo, leanTorightMaterial);
           rightLeanTorightWall.name = "b_h_t6_new";
           rightLeanTorightWall.morphTargets = true;
           rightLeanTorightWall.side = THREE.DoubleSide;
           rightLeanTorightWall.scale.set(1, 1, 0);
           rightLeanTorightWall.position.set = (0,1,0);
           rightLeanTorightWall.rotation.y = Math.PI / 2;
           rightLeanTorightWall.visible = false;
           const_var.b_t_M_R_t_R.add(rightLeanTorightWall); 


          //New Gable Geometry For Right Lean To Front Wall Gable

          // var selectedObject = const_var.scene.getObjectByName("leanToRightfGable");
          // const_var.scene.remove(selectedObject);

          var leanToRightfGableGeometry = new THREE.BufferGeometry();
          var leanToRightfGableVertices = new Float32Array([
            -0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, 1, 0.5,
          ]);
          if (params.p_v_w == true) {
            var leanToRightfGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0,]);
          } else {
            var leanToRightfGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0,]);
          }
        
          leanToRightfGableGeometry.setAttribute("position", new THREE.BufferAttribute(leanToRightfGableVertices, 3));
          //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
          leanToRightfGableGeometry.setAttribute("uv",new THREE.BufferAttribute(leanToRightfGableUVS, 2));
          var wallTexture = horizontalTexture;
          if(params.p_v_w==true) {
            wallTexture = verticalTexture;
          }
          else {
            wallTexture = horizontalTexture;
          }
          leanToRightfGableGeometry.computeVertexNormals();
          var leanToRightfGableLoader = new THREE.TextureLoader();
          var texture1 = leanToRightfGableLoader.load(horizontalTexture,function(texture1) {
            texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
            }
          )
          var leanToRightfGablematerial = new THREE.MeshBasicMaterial({
            map: texture1,
            side: THREE.DoubleSide,
            color: 0xffffff,
          });
          var leanToRightfGable = new THREE.Mesh(leanToRightfGableGeometry,leanToRightfGablematerial);
          leanToRightfGable.name = "leanToRightfGable";
          leanToRightfGable.visible = false;
          leanToRightfGable.scale.set(params.leanR_p_w, params.b_l_t_r_p, 0);
          leanToRightfGable.position.set(0, params.leanR_p_h, 0);
          /*if(params.p_v_w==true){
            leanToRightfGable.material.map.rotation = -0.25;
            leanToRightfGable.material.map.repeat.set(2*params.leanR_p_w,1);
           }
            else {
            leanToRightfGable.material.map.repeat.set(1,params.b_l_t_r_p/3);
            }*/
          const_var.b_t_M_R_t_R.add(leanToRightfGable);


          /*Center Buildig Right Storage Front Gable*/
          var cBRightStorageFGableGeometry = new THREE.BufferGeometry();
          var cBRightStorageFGableVertices = new Float32Array([
            //left
             0, params.p_h, params.p_d/2,
            //right
            params.p_w/2, params.p_h, params.p_d/2,
             //top
            -0.0,params.p_h, params.p_d/2,
          ]);
          if (params.p_v_w == true) {
            var cBRightStorageFGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0,]);
          } else {
            var cBRightStorageFGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0,]);
          }
        
          cBRightStorageFGableGeometry.setAttribute("position", new THREE.BufferAttribute(cBRightStorageFGableVertices, 3));
          cBRightStorageFGableGeometry.setAttribute("uv",new THREE.BufferAttribute(cBRightStorageFGableUVS, 2));
          var wallTexture = horizontalTexture;
          if(params.p_v_w==true) {
            wallTexture = verticalTexture;
          }
          else {
            wallTexture = horizontalTexture;
          }
          cBRightStorageFGableGeometry.computeVertexNormals();
          var cBRightStorageFGableLoader = new THREE.TextureLoader();
          var texture1 = cBRightStorageFGableLoader.load(horizontalTexture,function(texture1) {
            texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
            }
          )
          var cBRightStorageFGablematerial = new THREE.MeshBasicMaterial({
            map: texture1,
            side: THREE.DoubleSide,
            color: 0xffffff,
          });
          var cBRightStorageFGable = new THREE.Mesh(cBRightStorageFGableGeometry,cBRightStorageFGablematerial);
          cBRightStorageFGable.name = "CB_R_S_F_G";
          cBRightStorageFGable.visible = false;
          const_var.scene.add(cBRightStorageFGable);


          // center Building Left Storage Front Gable
          var cBLeftStorageFGableGeometry = new THREE.BufferGeometry();
          var cBLeftStorageFGableVertices = new Float32Array([
            //left
             0, params.p_h, params.p_d/2,
            //right
            params.p_w/2, params.p_h, params.p_d/2,
             //top
            -0.0,params.p_h, params.p_d/2,
          ]);
          if (params.p_v_w == true) {
            var cBLeftStorageFGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0,]);
          } else {
            var cBLeftStorageFGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0,]);
          }
          
          cBLeftStorageFGableGeometry.setAttribute("position", new THREE.BufferAttribute(cBLeftStorageFGableVertices, 3));
          cBLeftStorageFGableGeometry.setAttribute("uv",new THREE.BufferAttribute(cBLeftStorageFGableUVS, 2));
          var wallTexture = horizontalTexture;
          if(params.p_v_w==true) {
            wallTexture = verticalTexture;
          }
          else {
            wallTexture = horizontalTexture;
          }
          cBLeftStorageFGableGeometry.computeVertexNormals();
          var cBLeftStorageFGableLoader = new THREE.TextureLoader();
          var texture1 = cBLeftStorageFGableLoader.load(horizontalTexture,function(texture1) {
            texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
            }
          )
          var cBLeftStorageFGablematerial = new THREE.MeshBasicMaterial({
            map: texture1,
            side: THREE.DoubleSide,
            color: 0xffffff,
          });
          var cBLeftStorageFGable = new THREE.Mesh(cBLeftStorageFGableGeometry,cBLeftStorageFGablematerial);
          cBLeftStorageFGable.name = "CB_L_S_F_G";
          cBLeftStorageFGable.visible = false;
          const_var.scene.add(cBLeftStorageFGable);



         // center Building Left Storage Back Gable
          var cBLeftStorageBGableGeometry = new THREE.BufferGeometry();
          var cBLeftStorageBGableVertices = new Float32Array([
            //left
             0, params.p_h, params.p_d/2,
            //right
            params.p_w/2, params.p_h, params.p_d/2,
             //top
            -0.0,params.p_h, params.p_d/2,
          ]);
          if (params.p_v_w == true) {
            var cBLeftStorageBGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0,]);
          } else {
            var cBLeftStorageBGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0,]);
          }
          
          cBLeftStorageBGableGeometry.setAttribute("position", new THREE.BufferAttribute(cBLeftStorageBGableVertices, 3));
          cBLeftStorageBGableGeometry.setAttribute("uv",new THREE.BufferAttribute(cBLeftStorageBGableUVS, 2));
          var wallTexture = horizontalTexture;
          if(params.p_v_w==true) {
            wallTexture = verticalTexture;
          }
          else {
            wallTexture = horizontalTexture;
          }
          cBLeftStorageBGableGeometry.computeVertexNormals();
          var cBLeftStorageBGableLoader = new THREE.TextureLoader();
          var texture1 = cBLeftStorageBGableLoader.load(horizontalTexture,function(texture1) {
            texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
            }
          )
          var cBLeftStorageBGablematerial = new THREE.MeshBasicMaterial({
            map: texture1,
            side: THREE.DoubleSide,
            color: 0xffffff,
          });
          var cBLeftStorageBGable = new THREE.Mesh(cBLeftStorageBGableGeometry,cBLeftStorageBGablematerial);
          cBLeftStorageBGable.name = "CB_L_S_B_G";
          cBLeftStorageBGable.visible = false;
          const_var.scene.add(cBLeftStorageBGable);


          /*Center Buildig Right Storage Back Gable*/

          var cBRightStorageBGableGeometry = new THREE.BufferGeometry();
          var cBRightStorageBGableVertices = new Float32Array([
            //left
             0, params.p_h, params.p_d/2,
            //right
            params.p_w/2, params.p_h, params.p_d/2,
             //top
            -0.0,params.p_h, params.p_d/2,
          ]);
          if (params.p_v_w == true) {
            var cBRightStorageBGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0,]);
          } else {
            var cBRightStorageBGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0,]);
          }
        
          cBRightStorageBGableGeometry.setAttribute("position", new THREE.BufferAttribute(cBRightStorageBGableVertices, 3));
          cBRightStorageBGableGeometry.setAttribute("uv",new THREE.BufferAttribute(cBRightStorageBGableUVS, 2));
          var wallTexture = horizontalTexture;
          if(params.p_v_w==true) {
            wallTexture = verticalTexture;
          }
          else {
            wallTexture = horizontalTexture;
          }
          cBRightStorageBGableGeometry.computeVertexNormals();
          var cBRightStorageBGableLoader = new THREE.TextureLoader();
          var texture1 = cBRightStorageBGableLoader.load(horizontalTexture,function(texture1) {
            texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
            }
          )
          var cBRightStorageBGablematerial = new THREE.MeshBasicMaterial({
            map: texture1,
            side: THREE.DoubleSide,
            color: 0xffffff,
          });
          var cBRightStorageBGable = new THREE.Mesh(cBRightStorageBGableGeometry,cBRightStorageBGablematerial);
          cBRightStorageBGable.name = "CB_R_S_B_G";
          cBRightStorageBGable.visible = false;
          const_var.scene.add(cBRightStorageBGable);


         /*Center Buildig Right Storage 4 vertices Front Gable*/
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
           
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
          ];
        
          var quad_indices =
          [
            0, 2, 1, 0, 3, 2,
          ];
        
          var cBRightStorage4VFGeometry = new THREE.BufferGeometry();
          var vertices = new Float32Array( quad_vertices );
          // Each vertex has one uv coordinate for texture mapping
          var uvs = new Float32Array( quad_uvs);
          // Use the four vertices to draw the two triangles that make up the square.
          var indices = new Uint32Array( quad_indices )
          // itemSize = 3 because there are 3 values (components) per vertex
          cBRightStorage4VFGeometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
          cBRightStorage4VFGeometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
          cBRightStorage4VFGeometry.setIndex( new THREE.BufferAttribute( indices, 1 ) );
          var wallTexture = horizontalTexture;
          if(params.p_v_w==true) {
            wallTexture = verticalTexture;
          }
          else {
            wallTexture = horizontalTexture;
          }
          cBRightStorage4VFGeometry.computeVertexNormals();
          var cBRightStorage4VFGeometryLoader = new THREE.TextureLoader();
          var texture1 = cBRightStorage4VFGeometryLoader.load(horizontalTexture,function(texture1) {
            texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
            }
          )
           var cBRightStorage4VFmaterial= new THREE.MeshPhongMaterial({side: THREE.DoubleSide,color:0xFFFF00,/*emissive:0xffffff,vertexColors:true,*/specular:0xFDF4DC,flatShading:true,dithering:true,combine:2,shininess:30});
           var cBRightStorage4VFmaterial = new THREE.MeshBasicMaterial({
            map: texture1,
            side: THREE.DoubleSide,
            color: 0xffffff,
          });
           var cBRightStorage4VF = new THREE.Mesh( cBRightStorage4VFGeometry,cBRightStorage4VFmaterial);
          cBRightStorage4VF.name = "CB_R_S_4V_F_G";
          cBRightStorage4VF.visible = false;
          const_var.scene.add( cBRightStorage4VF );
     


         /*Center Buildig Left Storage 4 vertices Front Gable*/
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
          
           0.0, 0.0,
           1.0, 0.0,
           1.0, 1.0,
           0.0, 1.0,
         ];
       
         var quad_indices =
         [
           0, 2, 1, 0, 3, 2,
         ];
       
         var cBLeftStorage4VFGeometry = new THREE.BufferGeometry();
         var vertices = new Float32Array( quad_vertices );
         // Each vertex has one uv coordinate for texture mapping
         var uvs = new Float32Array( quad_uvs);
         // Use the four vertices to draw the two triangles that make up the square.
         var indices = new Uint32Array( quad_indices )
         // itemSize = 3 because there are 3 values (components) per vertex
         cBLeftStorage4VFGeometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
         cBLeftStorage4VFGeometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
         cBLeftStorage4VFGeometry.setIndex( new THREE.BufferAttribute( indices, 1 ) );
         var wallTexture = horizontalTexture;
         if(params.p_v_w==true) {
           wallTexture = verticalTexture;
         }
         else {
           wallTexture = horizontalTexture;
         }
         cBLeftStorage4VFGeometry.computeVertexNormals();
         var cBLeftStorage4VFGeometryLoader = new THREE.TextureLoader();
         var texture1 = cBLeftStorage4VFGeometryLoader.load(horizontalTexture,function(texture1) {
           texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
           }
         )
          var cBLeftStorage4VFmaterial= new THREE.MeshPhongMaterial({side: THREE.DoubleSide,color:0xFFFF00,/*emissive:0xffffff,vertexColors:true,*/specular:0xFDF4DC,flatShading:true,dithering:true,combine:2,shininess:30});
          var cBLeftStorage4VFmaterial = new THREE.MeshBasicMaterial({
           map: texture1,
           side: THREE.DoubleSide,
           color: 0xffffff,
         });
          var cBLeftStorage4VF = new THREE.Mesh( cBLeftStorage4VFGeometry,cBLeftStorage4VFmaterial);
         cBLeftStorage4VF.name = "CB_L_S_4V_F_G";
         cBLeftStorage4VF.visible = false;
         const_var.scene.add( cBLeftStorage4VF );


         /*Center Buildig Left Storage 4 vertices Back Gable*/
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
          
           0.0, 0.0,
           1.0, 0.0,
           1.0, 1.0,
           0.0, 1.0,
         ];
       
         var quad_indices =
         [
           0, 2, 1, 0, 3, 2,
         ];
       
         var cBLeftStorage4VBGeometry = new THREE.BufferGeometry();
         var vertices = new Float32Array( quad_vertices );
         // Each vertex has one uv coordinate for texture mapping
         var uvs = new Float32Array( quad_uvs);
         // Use the four vertices to draw the two triangles that make up the square.
         var indices = new Uint32Array( quad_indices )
         // itemSize = 3 because there are 3 values (components) per vertex
         cBLeftStorage4VBGeometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
         cBLeftStorage4VBGeometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
         cBLeftStorage4VBGeometry.setIndex( new THREE.BufferAttribute( indices, 1 ) );
         var wallTexture = horizontalTexture;
         if(params.p_v_w==true) {
           wallTexture = verticalTexture;
         }
         else {
           wallTexture = horizontalTexture;
         }
         cBLeftStorage4VBGeometry.computeVertexNormals();
         var cBLeftStorage4VBGeometryLoader = new THREE.TextureLoader();
         var texture1 = cBLeftStorage4VBGeometryLoader.load(horizontalTexture,function(texture1) {
           texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
           }
         )
          var cBLeftStorage4VBmaterial= new THREE.MeshPhongMaterial({side: THREE.DoubleSide,color:0xFFFF00,/*emissive:0xffffff,vertexColors:true,*/specular:0xFDF4DC,flatShading:true,dithering:true,combine:2,shininess:30});
          var cBLeftStorage4VBmaterial = new THREE.MeshBasicMaterial({
           map: texture1,
           side: THREE.DoubleSide,
           color: 0xffffff,
         });
          var cBLeftStorage4VB = new THREE.Mesh( cBLeftStorage4VBGeometry,cBLeftStorage4VBmaterial);
         cBLeftStorage4VB.name = "CB_L_S_4V_B_G";
         cBLeftStorage4VB.visible = false;
         const_var.scene.add( cBLeftStorage4VB );



         /*Center Buildig Right Storage 4 vertices Back Gable*/
         var quadB_vertices =
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
       
         var quadB_uvs =
         [

           0.0, 0.0,
           1.0, 0.0,
           1.0, 1.0,
           0.0, 1.0,
         ];
       
         var quadB_indices =
         [
           0, 2, 1, 0, 3, 2,
         ];
       
         var cBRightStorage4VBGeometry = new THREE.BufferGeometry();
         var verticesB = new Float32Array( quadB_vertices );
         // Each vertex has one uv coordinate for texture mapping
         var uvsB = new Float32Array( quadB_uvs);
         // Use the four vertices to draw the two triangles that make up the square.
         var indicesB = new Uint32Array( quadB_indices )
         // itemSize = 3 because there are 3 values (components) per vertex
         cBRightStorage4VBGeometry.setAttribute( 'position', new THREE.BufferAttribute( verticesB, 3 ) );
         cBRightStorage4VBGeometry.setAttribute( 'uv', new THREE.BufferAttribute( uvsB, 2 ) );
         cBRightStorage4VBGeometry.setIndex( new THREE.BufferAttribute( indicesB, 1 ) );
         var wallTexture = horizontalTexture;
         if(params.p_v_w==true) {
           wallTexture = verticalTexture;
         }
         else {
           wallTexture = horizontalTexture;
         }
         cBRightStorage4VBGeometry.computeVertexNormals();
         var cBRightStorage4VBGeometryLoader = new THREE.TextureLoader();
         var texture1 = cBRightStorage4VBGeometryLoader.load(horizontalTexture,function(texture1) {
           texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
           }
         )
          var cBRightStorage4VBmaterial= new THREE.MeshPhongMaterial({side: THREE.DoubleSide,color:0xFFFF00,/*emissive:0xffffff,vertexColors:true,*/specular:0xFDF4DC,flatShading:true,dithering:true,combine:2,shininess:30});
          var cBRightStorage4VBmaterial = new THREE.MeshBasicMaterial({
           map: texture1,
           side: THREE.DoubleSide,
           color: 0xffffff,
         });
          var cBRightStorage4VB = new THREE.Mesh( cBRightStorage4VBGeometry,cBRightStorage4VBmaterial);
         cBRightStorage4VB.name = "CB_R_S_4V_B_G";
         cBRightStorage4VB.visible = false;
         const_var.scene.add( cBRightStorage4VB );

          
          //New Gable Geometry For Right Lean To Back Wall Gable

          // var selectedObject = const_var.scene.getObjectByName("leanToRightbGable");
          // const_var.scene.remove(selectedObject);

         var selectedObject = const_var.b_t_M_R_t_R.getObjectByName("leanToRightbGable");
         const_var.b_t_M_R_t_R.remove(selectedObject);
         var leanToRightbGableGeometry = new THREE.BufferGeometry();
         var leanToRightbGableVertices = new Float32Array([-0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, 1, 0.5,]);
         if (params.p_v_w == true) {
           var leanToRightbGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0,]);
         } else {
           var leanToRightbGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0,]);
         }
         leanToRightbGableGeometry.setAttribute("position",new THREE.BufferAttribute(leanToRightbGableVertices, 3));
         //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
         leanToRightbGableGeometry.setAttribute("uv",new THREE.BufferAttribute(leanToRightbGableUVS, 2));
         var wallTexture = horizontalTexture;
         if(params.p_v_w==true){
           wallTexture = verticalTexture;
         } else {
           wallTexture = horizontalTexture;
         }
         leanToRightbGableGeometry.computeVertexNormals();
         var leanToRightbGableLoader = new THREE.TextureLoader();
         var texture1 = leanToRightbGableLoader.load(horizontalTexture, function(texture1) {
          texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
          }
         )
           var leanToRightbGablematerial = new THREE.MeshBasicMaterial({
             map: texture1,
             side: THREE.DoubleSide,
             color: 0xffffff,
           });
           var leanToRightbGable = new THREE.Mesh(leanToRightbGableGeometry,leanToRightbGablematerial);
           leanToRightbGable.name = "leanToRightbGable";
           leanToRightbGable.visible = false;
           leanToRightbGable.scale.set(params.leanR_p_w, params.b_l_t_r_p, 0);
           leanToRightbGable.position.set(0, params.leanR_p_h, 0);
           if(params.p_v_w==true) {
             leanToRightbGable.material.map.rotation = -0.25;
             leanToRightbGable.material.map.repeat.set(2*params.leanR_p_w,1);
            } else {
             leanToRightbGable.material.map.repeat.set(1,params.b_l_t_r_p/3);
             }
           const_var.b_t_M_R_t_R.add(leanToRightbGable);
      
      
           //New Gable Geometry For Right Lean To Right Storage

          //  var selectedObject = const_var.scene.getObjectByName("leanToRightStorageGable");
          //  const_var.scene.remove(selectedObject);
           var selectedObject = const_var.b_t_M_R_t_R.getObjectByName("leanToRightStorageGable");
           const_var.b_t_M_R_t_R.remove(selectedObject);
           var leanToRightStorageGableGeometry = new THREE.BufferGeometry();
           var leanToRightStorageGableVertices = new Float32Array([
             -0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, 1, 0.5,
           ]);
           if (params.p_v_w == true) {
             var leanToRightStorageGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
           } else {
             var leanToRightStorageGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0]);
           }
           leanToRightStorageGableGeometry.setAttribute("position", new THREE.BufferAttribute(leanToRightStorageGableVertices, 3) );
           //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
           leanToRightStorageGableGeometry.setAttribute("uv",new THREE.BufferAttribute(leanToRightStorageGableUVS, 2));
           var wallTexture = horizontalTexture;
           if(params.p_v_w==true){
             wallTexture = verticalTexture;
           } else {
             wallTexture = horizontalTexture;
           }
           leanToRightStorageGableGeometry.computeVertexNormals();
           var leanToRightStorageGableLoader = new THREE.TextureLoader();
           var texture1 = leanToRightStorageGableLoader.load(horizontalTexture, function(texture1) {
            texture1.wrapT= texture1.wrapS = THREE.RepeatWrapping;
             }
           )
             var leanToRightStorageGablematerial = new THREE.MeshBasicMaterial({
               map: texture1,
               side: THREE.DoubleSide,
               color: 0xffffff,
             });
        
             var leanToRightStorageGable = new THREE.Mesh(leanToRightStorageGableGeometry,leanToRightStorageGablematerial);
             leanToRightStorageGable.name = "leanToRightStorageGable";
             leanToRightStorageGable.visible = false;
             leanToRightStorageGable.scale.set(params.leanR_p_w, params.b_l_t_r_p, 0);
             leanToRightStorageGable.position.set(0, params.leanR_p_h, 0);
             /*if(params.p_v_w==true)
             {
                 leanToRightfGable.material.map.rotation = -0.25;
                 leanToRightfGable.material.map.repeat.set(2*params.leanR_p_w,1);
             }
             else
             {
                 leanToRightfGable.material.map.repeat.set(1,params.b_l_t_r_p/3);
             }*/
             const_var.b_t_M_R_t_R.add(leanToRightStorageGable);
          //    }
          //  );

          //New Wall Geometry For Right Lean To Front Storage Wall
          var rightLeanToFrontStorageGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          var rightLeanToFrontStorageMaterial = new THREE.MeshBasicMaterial({
            /*map:LWtexture,*/ side: THREE.DoubleSide,
            color: 0xffffff,
          });
          var rightLeanToFrontStorageWall = new THREE.Mesh(rightLeanToFrontStorageGeo,rightLeanToFrontStorageMaterial);
          rightLeanToFrontStorageWall.name = "b_h_t4_s";
          rightLeanToFrontStorageWall.morphTargets = true;
          rightLeanToFrontStorageWall.side = THREE.DoubleSide;
          rightLeanToFrontStorageWall.scale.set(1, 1, 0);
          rightLeanToFrontStorageWall.position.x = 0;
          rightLeanToFrontStorageWall.position.z = 0;
          rightLeanToFrontStorageWall.position.y = 1;
          rightLeanToFrontStorageWall.position.set = (0,1,0);
          rightLeanToFrontStorageWall.visible = false;
          const_var.b_t_M_R_t_R.add(rightLeanToFrontStorageWall);

           //New Wall Geometry For Right Lean To Back Storage Wall
           var rightLeanTobackStorageGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
           var rightLeanTobackStorageMaterial = new THREE.MeshBasicMaterial({
             /*map:LWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           var rightLeanTobackStorageWall = new THREE.Mesh(rightLeanTobackStorageGeo,rightLeanTobackStorageMaterial);
           rightLeanTobackStorageWall.name = "b_h_t4B_s";
           rightLeanTobackStorageWall.morphTargets = true;
           rightLeanTobackStorageWall.side = THREE.DoubleSide;
           rightLeanTobackStorageWall.scale.set(1, 1, 0);
           rightLeanTobackStorageWall.position.x = 0;
           rightLeanTobackStorageWall.position.z = 0;
           rightLeanTobackStorageWall.position.y = 1;
           rightLeanTobackStorageWall.visible = false;
           const_var.b_t_M_R_t_R.add(rightLeanTobackStorageWall);
          
          //Left Wall for Right Lean to Storage 
          var rightLeanToLefStoragetWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          var rightLeanToLefStoragetWallMaterial= new THREE.MeshPhongMaterial({ 	
            side: THREE.DoubleSide,shadowSide:THREE.DoubleSide,
            color: 0xffffff,emissive:0xffffff,specular:0xFDF4DC,
            
            flatShading:true,vertexColors:true,dithering:true,
            combine:2,shininess:75,
            // map:LWtexture
          });
          var rightLeanToLefStoragetWall = new THREE.Mesh(rightLeanToLefStoragetWallGeo, rightLeanToLefStoragetWallMaterial);
          rightLeanToLefStoragetWall.name = "b_h_t6R_s";
          rightLeanToLefStoragetWall.morphTargets = true;
          rightLeanToLefStoragetWall.side = THREE.DoubleSide;
          rightLeanToLefStoragetWall.scale.set(1, 1, 0);
          rightLeanToLefStoragetWall.position.set(0, 1, 0)
          rightLeanToLefStoragetWall.rotation.y = Math.PI / 2;
          rightLeanToLefStoragetWall.visible = false;
          const_var.b_t_M_R_t_R.add(rightLeanToLefStoragetWall);   
        
          //New Wall Geometry For Right Lean To Right Storage Wall
          var rightLeanToRightGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          var rightLeanToRightMaterial = new THREE.MeshBasicMaterial({
            /*map:LWtexture,*/ side: THREE.DoubleSide,
            color: 0xffffff,
          });
          var rightLeanToRightStorageWall = new THREE.Mesh(rightLeanToRightGeo, rightLeanToRightMaterial);
          rightLeanToRightStorageWall.name = "b_h_t6_s";
          rightLeanToRightStorageWall.morphTargets = true;
          rightLeanToRightStorageWall.side = THREE.DoubleSide;
          rightLeanToRightStorageWall.scale.set(1, 1, 0);
          // rightLeanToRightStorageWall.position.x = 0;
          // rightLeanToRightStorageWall.position.z = 0;
          // rightLeanToRightStorageWall.position.y = 1;
          rightLeanToRightStorageWall.position.set = (0,1,0);
          rightLeanToRightStorageWall.rotation.y = Math.PI / 2;
          rightLeanToRightStorageWall.visible = false;
          const_var.b_t_M_R_t_R.add(rightLeanToRightStorageWall);
 
          var rightLeanTofrontWallW = new THREE.Mesh(rightLeanTofrontGeoW,rightLeanTofrontMaterialW);
          rightLeanTofrontWallW.name = "b_h_t4_new_w";
          rightLeanTofrontWallW.morphTargets = true;
          rightLeanTofrontWallW.side = THREE.DoubleSide;
          rightLeanTofrontWallW.scale.set(1, 1, 0);
          rightLeanTofrontWallW.position.x = 0;
          rightLeanTofrontWallW.position.z = 0;
          rightLeanTofrontWallW.position.y = 1;
          rightLeanTofrontWallW.visible = false;
          const_var.b_t_M_R_t_R.add(rightLeanTofrontWallW);
        
          //New Wall Geometry For Right Lean To Back Wall WainScote
          var rightLeanTobackGeoW = new THREE.PlaneGeometry(1, 1, 30, 30);
          var rightLeanTobackMaterialW = new THREE.MeshBasicMaterial({
            /*map:BWtexture,*/ side: THREE.DoubleSide,
            color: 0xffffff,
          });
          var rightLeanTobackWallW = new THREE.Mesh(rightLeanTobackGeoW,rightLeanTobackMaterialW);
          rightLeanTobackWallW.name = "b_h_t4B_new_w";
          rightLeanTobackWallW.morphTargets = true;
          rightLeanTobackWallW.side = THREE.DoubleSide;
          rightLeanTobackWallW.scale.set(1, 1, 0);
          rightLeanTobackWallW.position.x = 0;
          rightLeanTobackWallW.position.z = 0;
          rightLeanTobackWallW.position.y = 1;
          rightLeanTobackWallW.visible = false;
          const_var.b_t_M_R_t_R.add(rightLeanTobackWallW);

          //New Wall Geometry For Right Lean To Right Wall WainScote
          var leanTorightGeoW = new THREE.PlaneGeometry(1, 1, 30, 30);
          var leanTorightMaterialW = new THREE.MeshBasicMaterial({
            /*map:RWtexture,*/ side: THREE.DoubleSide,
            color: 0xffffff,
          });
          var leanTorightWallW = new THREE.Mesh(leanTorightGeoW, leanTorightMaterialW);
          leanTorightWallW.name = "b_h_t6_new_w";
          leanTorightWallW.morphTargets = true;
          leanTorightWallW.side = THREE.DoubleSide;
          leanTorightWallW.scale.set(1, 1, 0);
          leanTorightWallW.position.x = 0;
          leanTorightWallW.position.z = 0;
          leanTorightWallW.position.y = 1;
          leanTorightWallW.rotation.y = Math.PI / 2;
          leanTorightWallW.visible = false;
          const_var.b_t_M_R_t_R.add(leanTorightWallW);
                   //New Wall Geometry For Right Lean To Front Wall WainScote
          var rightLeanTofrontGeoW = new THREE.PlaneGeometry(1, 1, 30, 30);
          var rightLeanTofrontMaterialW = new THREE.MeshBasicMaterial({
            /*map:FWtexture,*/ side: THREE.DoubleSide,
            color: 0xffffff,
          });

         //New Gable Geometry For Free Standing Lean To Front Gable
         var selectedObject = const_var.scene.getObjectByName("F_S_L_F_G");
         const_var.scene.remove(selectedObject);
         var f_S_LeanFrontGableGeometry = new THREE.BufferGeometry();
         var f_S_LeanFrontGableVertices = new Float32Array([
           -0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 1, 0.5,
         ]);
         if (params.p_v_w == true) {
           var f_S_LeanFrontGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
         } else {
           var f_S_LeanFrontGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0]);
         }
       
         f_S_LeanFrontGableGeometry.setAttribute("position",new THREE.BufferAttribute(f_S_LeanFrontGableVertices, 3));
         //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
         f_S_LeanFrontGableGeometry.setAttribute("uv",new THREE.BufferAttribute(f_S_LeanFrontGableUVS, 2));
         var wallTexture = horizontalTexture;
         if(params.p_v_w==true)
         {
           wallTexture = verticalTexture;//"Vertical-panel-white.jpg";//"verticalTexture.png";
         }
         else
         {
           wallTexture = horizontalTexture;//"Horizontal-panel-white.jpg";//"profile2.png";
         }

         f_S_LeanFrontGableGeometry.computeVertexNormals();
         var f_S_LeanFrontGableLoader = new THREE.TextureLoader();
         var texture1 = f_S_LeanFrontGableLoader.load(horizontalTexture,function (texture1) {
           texture1.wrapT =  texture1.wrapS = THREE.RepeatWrapping;
         })
         var f_S_LeanFrontGablematerial = new THREE.MeshBasicMaterial({
           map: texture1,
           wireframe: false,
           side: THREE.DoubleSide,
           color: 0xffffff,
         });
       
        var f_S_LeanFrontGable = new THREE.Mesh(f_S_LeanFrontGableGeometry,f_S_LeanFrontGablematerial);
         f_S_LeanFrontGable.name = "F_S_L_F_G";
         f_S_LeanFrontGable.visible = false;
         f_S_LeanFrontGable.scale.set(params.p_w, params.p_h, 0);
         f_S_LeanFrontGable.position.set(0, params.p_h, 0);
         const_var.scene.add(f_S_LeanFrontGable);
           // }
         // );

         //New Gable Geometry For Free Standing Lean To Back Gable
         var selectedObject = const_var.scene.getObjectByName("F_S_L_B_G");
         const_var.scene.remove(selectedObject);
         var f_S_LeanBackGableGeometry = new THREE.BufferGeometry();
         var f_S_LeanBackGableVertices = new Float32Array([
           -0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 1, 0.5,
         ]);
         if (params.p_v_w == true) {
           var f_S_LeanBackGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
         } else {
           var f_S_LeanBackGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0]);
         }
       
         f_S_LeanBackGableGeometry.setAttribute("position",new THREE.BufferAttribute(f_S_LeanBackGableVertices, 3));
         //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
         f_S_LeanBackGableGeometry.setAttribute("uv",new THREE.BufferAttribute(f_S_LeanBackGableUVS, 2));
         var wallTexture = horizontalTexture;
         if(params.p_v_w==true)
         {
           wallTexture = verticalTexture;//"Vertical-panel-white.jpg";//"verticalTexture.png";
         }
         else
         {
           wallTexture = horizontalTexture;//"Horizontal-panel-white.jpg";//"profile2.png";
         }
       
         f_S_LeanBackGableGeometry.computeVertexNormals();
         var f_S_LeanBackGableLoader = new THREE.TextureLoader();
         var texture1 = f_S_LeanBackGableLoader.load(horizontalTexture,function (texture1) {
           texture1.wrapT =  texture1.wrapS = THREE.RepeatWrapping;
         })
         var f_S_LeanBackGablematerial = new THREE.MeshBasicMaterial({
           map: texture1,
           wireframe: false,
           side: THREE.DoubleSide,
           color: 0xffffff,
         });
       
        var f_S_LeanBackGable = new THREE.Mesh(f_S_LeanBackGableGeometry,f_S_LeanBackGablematerial);
         f_S_LeanBackGable.name = "F_S_L_B_G";
         f_S_LeanBackGable.visible = false;
         f_S_LeanBackGable.scale.set(params.p_w, params.p_h, 0);
         f_S_LeanBackGable.position.set(0, params.p_h, 0);
         const_var.scene.add(f_S_LeanBackGable);

         //New Gable Geometry For Free Standing Lean To Front Storage Gable
         var selectedObject = const_var.scene.getObjectByName("F_S_L_F_S_G");
         const_var.scene.remove(selectedObject);
         var f_S_LeanFrontStorageGableGeometry = new THREE.BufferGeometry();
         var f_S_LeanFrontStorageGableVertices = new Float32Array([
           -0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 1, 0.5,
         ]);
         if (params.p_v_w == true) {
           var f_S_LeanFrontStorageGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
         } else {
           var f_S_LeanFrontStorageGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0]);
         }
       
         f_S_LeanFrontStorageGableGeometry.setAttribute("position",new THREE.BufferAttribute(f_S_LeanFrontStorageGableVertices, 3));
         //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
         f_S_LeanFrontStorageGableGeometry.setAttribute("uv",new THREE.BufferAttribute(f_S_LeanFrontStorageGableUVS, 2));
         var wallTexture = horizontalTexture;
         if(params.p_v_w==true)
         {
           wallTexture = verticalTexture;//"Vertical-panel-white.jpg";//"verticalTexture.png";
         }
         else
         {
           wallTexture = horizontalTexture;//"Horizontal-panel-white.jpg";//"profile2.png";
         }
 
         f_S_LeanFrontStorageGableGeometry.computeVertexNormals();
         var f_S_LeanFrontStorageGableLoader = new THREE.TextureLoader();
         var texture1 = f_S_LeanFrontStorageGableLoader.load(horizontalTexture,function (texture1) {
           texture1.wrapT =  texture1.wrapS = THREE.RepeatWrapping;
         })
         var f_S_LeanFrontStorageGablematerial = new THREE.MeshBasicMaterial({
           map: texture1,
           wireframe: false,
           side: THREE.DoubleSide,
           color: 0xffffff,
         });
       
           var f_S_LeanFrontStorageGable = new THREE.Mesh(f_S_LeanFrontStorageGableGeometry,f_S_LeanFrontStorageGablematerial);
         f_S_LeanFrontStorageGable.name = "F_S_L_F_S_G";
         f_S_LeanFrontStorageGable.visible = false;
         f_S_LeanFrontStorageGable.scale.set(params.p_w, params.p_h, 0);
         f_S_LeanFrontStorageGable.position.set(0, params.p_h, 0);
         const_var.scene.add(f_S_LeanFrontStorageGable);
           // }
                  // );

        // New Wall Geometry For Free Standing Lean To Right Wall
         var f_S_L_RightWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          var f_S_L_RightWallMaterial= new THREE.MeshPhongMaterial({ 	
            side: THREE.DoubleSide,shadowSide:THREE.DoubleSide,
            color: 0xffffff,emissive:0xffffff,specular:0xFDF4DC,
            
            flatShading:true,vertexColors:true,dithering:true,
            combine:2,shininess:75,
            // map:LWtexture
          });
          var f_S_L_RightWall = new THREE.Mesh(f_S_L_RightWallGeo, f_S_L_RightWallMaterial);
          f_S_L_RightWall.name = "F_S_L_R_W";
          f_S_L_RightWall.morphTargets = true;
          f_S_L_RightWall.side = THREE.DoubleSide;
          f_S_L_RightWall.scale.set(1, 1, 0);
          f_S_L_RightWall.position.set(0, 1, 0)
          f_S_L_RightWall.rotation.y = Math.PI / 2;
          f_S_L_RightWall.visible = false;
          const_var.scene.add(f_S_L_RightWall);
       
          // cuBuilding.BuildingUpdate1(true);
          // }
          // );
          
  
    }
        render() {
            return <div ref={ref => (this.mount = ref)} />;
        }    
        }     