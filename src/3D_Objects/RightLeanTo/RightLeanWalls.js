import React, { Component } from 'react';
import * as THREE from "three";
import verticalTexture from '../../assets/images/imgTextures/buildingImages/verticalTexture.jpeg';
import horizontalTexture from '../../assets/images/imgTextures/buildingImages/horizantalTexture.jpeg';  
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import frontTitleUrl from "../../assets/walls-names/RLF.svg"
import backTitleUrl from "../../assets/walls-names/RLB.svg"
import sideTitleUrl from "../../assets/walls-names/RLR.svg"

export default class RightLeanToWalls extends Component {

    RightLeanToaddWalls = (const_var,params)=>{

          //New Gable Geometry For Right Lean To Front Wall Gable

          //var selectedObject = const_var.scene.getObjectByName("R_L_B_G");
          // const_var.scene.remove(selectedObject);

          let leanToRightfGableGeometry = new THREE.BufferGeometry();
          let leanToRightfGableVertices = new Float32Array([
            0.5, 1, -0,         
            0.5, 1, -0.01,      
            0.5, 0, -0,       
            -0.5, 0, -0,      
            0.5, 0, -0.01,     
            -0.5, 0, -0.01,
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
          // if(params.p_v_w==true) {
          //   wallTexture = verticalTexture;
          // }
          // else {
          //   wallTexture = horizontalTexture;
          // }
          // leanToRightfGableGeometry.computeVertexNormals();
          // let leanToRightfGableLoader = new THREE.TextureLoader();
          // var texture1 = leanToRightfGableLoader.load(horizontalTexture,function(texture1) {
          //   texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
          //   }
          // )
          leanToRightfGableGeometry.computeVertexNormals();
          let leanToRightfGablematerial = new THREE.MeshPhongMaterial({
            map: texture1,
            side: THREE.DoubleSide,
            color: 0xffffff,
          });
          let leanToRightfGable = new THREE.Mesh(leanToRightfGableGeometry,leanToRightfGablematerial);
          leanToRightfGable.name = "R_L_F_G";
          leanToRightfGable.visible = false;
          leanToRightfGable.scale.set(params.leanR_p_w, params.b_l_t_r_p, 0);
          leanToRightfGable.position.set(0, params.leanR_p_h, 0);
      
          const_var.b_t_M_R_t_R.add(leanToRightfGable);   
        //New Gable Geometry For Right Lean To Back Wall Gable

          //var selectedObject = const_var.scene.getObjectByName("leanToRightbGable");
          // const_var.scene.remove(selectedObject);
         var selectedObject = const_var.b_t_M_R_t_R.getObjectByName("R_L_B_G");
          const_var.b_t_M_R_t_R.remove(selectedObject);
          let leanToRightbGableGeometry = new THREE.BufferGeometry();
          let leanToRightbGableVertices = new Float32Array([
            0.5, 1, -0,         
            0.5, 1, -0.01,      
            0.5, 0, -0,       
            -0.5, 0, -0,      
            0.5, 0, -0.01,     
            -0.5, 0, -0.01,
          ]);
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
          let leanToRightbGableLoader = new THREE.TextureLoader();
          var texture1 = leanToRightbGableLoader.load(process.env.REACT_APP_BASE_URL+horizontalTexture, function(texture1) {
           texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
           }
          )
            let leanToRightbGablematerial = new THREE.MeshPhongMaterial({
              map: texture1,
              side: THREE.DoubleSide,
              color: 0xffffff,
            });
            let leanToRightbGable = new THREE.Mesh(leanToRightbGableGeometry,leanToRightbGablematerial);
            leanToRightbGable.name = "R_L_B_G";
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
 
           // var selectedObject = const_var.scene.getObjectByName("R_L_F_S_G");
           //  const_var.scene.remove(selectedObject);
           var selectedObject = const_var.b_t_M_R_t_R.getObjectByName("R_L_F_S_G");
            const_var.b_t_M_R_t_R.remove(selectedObject);
            let leanToRightStorageGableGeometry = new THREE.BufferGeometry();
            let leanToRightStorageGableVertices = new Float32Array([
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
            let leanToRightStorageGableLoader = new THREE.TextureLoader();
            var texture1 = leanToRightStorageGableLoader.load(process.env.REACT_APP_BASE_URL+horizontalTexture, function(texture1) {
             texture1.wrapT= texture1.wrapS = THREE.RepeatWrapping;
              }
            )
              let leanToRightStorageGablematerial = new THREE.MeshPhongMaterial({
                map: texture1,
                side: THREE.DoubleSide,
                color: 0xffffff,
              });
         
              let leanToRightStorageGable = new THREE.Mesh(leanToRightStorageGableGeometry,leanToRightStorageGablematerial);
              leanToRightStorageGable.name = "R_L_F_S_G";
              leanToRightStorageGable.visible = false;
              leanToRightStorageGable.scale.set(params.leanR_p_w, params.b_l_t_r_p, 0);
              leanToRightStorageGable.position.set(0, params.leanR_p_h, 0);
              const_var.b_t_M_R_t_R.add(leanToRightStorageGable);

          //New Wall Geometry For Right Lean To Front Wall
          // let rightLeanTofrontGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          let rightLeanTofrontGeo = new THREE.BoxGeometry(1, 1, 0.01);
          let rightLeanTofrontMaterial = new THREE.MeshPhongMaterial({
            /*map:LWtexture,*/ side: THREE.DoubleSide,
            color: 0xffffff,
          });
          let rightLeanTofrontWall = new THREE.Mesh(rightLeanTofrontGeo, rightLeanTofrontMaterial);
          rightLeanTofrontWall.name = "R_L_F_W";
          rightLeanTofrontWall.morphTargets = true;
          rightLeanTofrontWall.side = THREE.DoubleSide;
          rightLeanTofrontWall.scale.set(1, 1, 1);
          rightLeanTofrontWall.position.set = (0,1,0);
          rightLeanTofrontWall.visible = false;
          const_var.b_t_M_R_t_R.add(rightLeanTofrontWall);
          const_var.wallsForCut.R_L_F_W = rightLeanTofrontWall.clone();
           
          //New Wall Geometry For Right Lean To Back Wall
          // let rightLeanTobackGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          let rightLeanTobackGeo = new THREE.BoxGeometry(1, 1, 0.01);
          let rightLeanTobackMaterial = new THREE.MeshPhongMaterial({
            /*map:LWtexture,*/ side: THREE.DoubleSide,
            color: 0xffffff,
          });
          let rightLeanTobackWall = new THREE.Mesh(rightLeanTobackGeo,rightLeanTobackMaterial);
          rightLeanTobackWall.name = "R_L_B_W";
          rightLeanTobackWall.morphTargets = true;
          rightLeanTobackWall.side = THREE.DoubleSide;
          rightLeanTobackWall.scale.set(1, 1, 1);
          rightLeanTobackWall.position.set = (0,1,0);
          rightLeanTobackWall.visible = false;
          const_var.b_t_M_R_t_R.add(rightLeanTobackWall);
          const_var.wallsForCut.R_L_B_W = rightLeanTobackWall.clone();
           
          //New Wall Geometry For Right Lean To Right Wall
          // let leanTorightGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          let leanTorightGeo = new THREE.BoxGeometry(1, 1, 0.01);
          let leanTorightMaterial = new THREE.MeshPhongMaterial({
            /*map:LWtexture,*/ side: THREE.DoubleSide,
            color: 0xffffff,
          });
          let rightLeanTorightWall = new THREE.Mesh(leanTorightGeo, leanTorightMaterial);
          rightLeanTorightWall.name = "R_L_R_W";
          rightLeanTorightWall.morphTargets = true;
          rightLeanTorightWall.side = THREE.DoubleSide;
          rightLeanTorightWall.scale.set(1, 1, 1);
          rightLeanTorightWall.position.set = (0,1,0);
          rightLeanTorightWall.rotation.y = Math.PI / 2;
          rightLeanTorightWall.visible = false;
          const_var.b_t_M_R_t_R.add(rightLeanTorightWall); 
          const_var.wallsForCut.R_L_R_W = rightLeanTorightWall.clone();
 
           //New Wall Geometry For Right Lean To Front Storage Wall
          //  let rightLeanToFrontStorageGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
           let rightLeanToFrontStorageGeo = new THREE.BoxGeometry(1, 1, 0.01);
           let rightLeanToFrontStorageMaterial = new THREE.MeshPhongMaterial({
             /*map:LWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           let rightLeanToFrontStorageWall = new THREE.Mesh(rightLeanToFrontStorageGeo,rightLeanToFrontStorageMaterial);
           rightLeanToFrontStorageWall.name = "R_L_F_S_W";
           rightLeanToFrontStorageWall.morphTargets = true;
           rightLeanToFrontStorageWall.side = THREE.DoubleSide;
           rightLeanToFrontStorageWall.scale.set(1, 1, 1);
           rightLeanToFrontStorageWall.position.x = 0;
           rightLeanToFrontStorageWall.position.z = 0;
           rightLeanToFrontStorageWall.position.y = 1;
           rightLeanToFrontStorageWall.position.set = (0,1,0);
           rightLeanToFrontStorageWall.visible = false;
           const_var.b_t_M_R_t_R.add(rightLeanToFrontStorageWall);
           const_var.wallsForCut.R_L_F_S_W = rightLeanToFrontStorageWall.clone();
 
            //New Wall Geometry For Right Lean To Back Storage Wall
            // let rightLeanTobackStorageGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
            let rightLeanTobackStorageGeo = new THREE.BoxGeometry(1, 1, 0.01);
            let rightLeanTobackStorageMaterial = new THREE.MeshPhongMaterial({
              /*map:LWtexture,*/ side: THREE.DoubleSide,
              color: 0xffffff,
            });

            let rightLeanTobackStorageWall = new THREE.Mesh(rightLeanTobackStorageGeo,rightLeanTobackStorageMaterial);
            rightLeanTobackStorageWall.name = "R_L_B_S_W";
            rightLeanTobackStorageWall.morphTargets = true;
            rightLeanTobackStorageWall.side = THREE.DoubleSide;
            rightLeanTobackStorageWall.scale.set(1, 1, 1);
            rightLeanTobackStorageWall.position.x = 0;
            rightLeanTobackStorageWall.position.z = 0;
            rightLeanTobackStorageWall.position.y = 1;
            rightLeanTobackStorageWall.visible = false;
            const_var.b_t_M_R_t_R.add(rightLeanTobackStorageWall);
            const_var.wallsForCut.R_L_B_S_W = rightLeanTobackStorageWall.clone();
           
           //Left Wall for Right Lean to Storage 
          //  let rightLeanToLefStoragetWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
           let rightLeanToLefStoragetWallGeo = new THREE.BoxGeometry(1, 1, 0.01);
           let rightLeanToLefStoragetWallMaterial= new THREE.MeshPhongMaterial({ 	
             side: THREE.DoubleSide,shadowSide:THREE.DoubleSide,
             color: 0xffffff,emissive:0xffffff,specular:0xFDF4DC,
             
             flatShading:true,vertexColors:true,dithering:true,
             combine:2,shininess:75,
             // map:LWtexture
           });
           let rightLeanToLefStoragetWallMaterialN = new THREE.MeshPhongMaterial({
            /*map:LWtexture,*/ side: THREE.DoubleSide,
            color: 0xffffff,
          });
           let rightLeanToLefStoragetWall = new THREE.Mesh(rightLeanToLefStoragetWallGeo, rightLeanToLefStoragetWallMaterialN);
           rightLeanToLefStoragetWall.name = "R_L_L_S_W";
           rightLeanToLefStoragetWall.morphTargets = true;
           rightLeanToLefStoragetWall.side = THREE.DoubleSide;
           rightLeanToLefStoragetWall.scale.set(1, 1, 1);
           rightLeanToLefStoragetWall.position.set(0, 1, 0)
           rightLeanToLefStoragetWall.rotation.y = Math.PI / 2;
           rightLeanToLefStoragetWall.visible = false;
           const_var.b_t_M_R_t_R.add(rightLeanToLefStoragetWall); 
           const_var.wallsForCut.R_L_L_S_W = rightLeanToLefStoragetWall.clone();
         
           //New Wall Geometry For Right Lean To Right Storage Wall
          //  let rightLeanToRightGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
           let rightLeanToRightGeo = new THREE.BoxGeometry(1, 1, 0.01);
           let rightLeanToRightMaterial = new THREE.MeshPhongMaterial({
             /*map:LWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           let rightLeanToRightStorageWall = new THREE.Mesh(rightLeanToRightGeo, rightLeanToRightMaterial);
           rightLeanToRightStorageWall.name = "R_L_R_S_W";
           rightLeanToRightStorageWall.morphTargets = true;
           rightLeanToRightStorageWall.side = THREE.DoubleSide;
           rightLeanToRightStorageWall.scale.set(1, 1, 1);
           rightLeanToRightStorageWall.position.set = (0,1,0);
           rightLeanToRightStorageWall.rotation.y = Math.PI / 2;
           rightLeanToRightStorageWall.visible = false;
           const_var.b_t_M_R_t_R.add(rightLeanToRightStorageWall);
           const_var.wallsForCut.R_L_R_S_W = rightLeanToRightStorageWall.clone();
           
          //New Wall Geometry For Right Lean To Front Wall WainScote
          let rightLeanTofrontGeoW = new THREE.BoxGeometry(1, 1, 0.01);
          let rightLeanTofrontMaterialW = new THREE.MeshPhongMaterial({
            /*map:FWtexture,*/ side: THREE.DoubleSide,
            color: 0xffffff,
          });
           let rightLeanTofrontWallW = new THREE.Mesh(rightLeanTofrontGeoW,rightLeanTofrontMaterialW);
           rightLeanTofrontWallW.name = "R_L_F_W_WS";
           rightLeanTofrontWallW.morphTargets = true;
           rightLeanTofrontWallW.side = THREE.DoubleSide;
           rightLeanTofrontWallW.scale.set(1, 1, 1);
           rightLeanTofrontWallW.position.x = 0;
           rightLeanTofrontWallW.position.z = 0;
           rightLeanTofrontWallW.position.y = 1;
           rightLeanTofrontWallW.visible = false;
           const_var.b_t_M_R_t_R.add(rightLeanTofrontWallW);

           const_var.originalWainscot = rightLeanTofrontWallW.clone();
         
           //New Wall Geometry For Right Lean To Back Wall WainScote
           let rightLeanTobackGeoW = new THREE.BoxGeometry(1, 1, 0.01);
           let rightLeanTobackMaterialW = new THREE.MeshPhongMaterial({
             /*map:BWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           let rightLeanTobackWallW = new THREE.Mesh(rightLeanTobackGeoW,rightLeanTobackMaterialW);
           rightLeanTobackWallW.name = "R_L_B_W_WS";
           rightLeanTobackWallW.morphTargets = true;
           rightLeanTobackWallW.side = THREE.DoubleSide;
           rightLeanTobackWallW.scale.set(1, 1, 1);
           rightLeanTobackWallW.position.x = 0;
           rightLeanTobackWallW.position.z = 0;
           rightLeanTobackWallW.position.y = 1;
           rightLeanTobackWallW.visible = false;
           const_var.b_t_M_R_t_R.add(rightLeanTobackWallW);
 
           //New Wall Geometry For Right Lean To Right Wall WainScote
           let leanTorightGeoW = new THREE.BoxGeometry(1, 1, 0.01);
           let leanTorightMaterialW = new THREE.MeshPhongMaterial({
             /*map:RWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           let leanTorightWallW = new THREE.Mesh(leanTorightGeoW, leanTorightMaterialW);
           leanTorightWallW.name = "R_L_R_W_WS";
           leanTorightWallW.morphTargets = true;
           leanTorightWallW.side = THREE.DoubleSide;
           leanTorightWallW.scale.set(1, 1, 1);
           leanTorightWallW.position.x = 0;
           leanTorightWallW.position.z = 0;
           leanTorightWallW.position.y = 1;
           leanTorightWallW.rotation.y = Math.PI / 2;
           leanTorightWallW.visible = false;
           const_var.b_t_M_R_t_R.add(leanTorightWallW);
          //  const_var.wainscotsForCut = leanTorightWallW.clone();
          //  const_var.wainscotsForCut.R_L_R_W_WS = leanTorightWallW.clone();

            //New Wall Geometry For Right Lean To Right Wall WainScote
           let leanTorightSGeoW = new THREE.BoxGeometry(1, 1, 0.01);
           let leanTorightSMaterialW = new THREE.MeshPhongMaterial({
             /*map:RWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           let leanTorightSWallW = new THREE.Mesh(leanTorightSGeoW, leanTorightSMaterialW);
           leanTorightSWallW.name = "R_L_R_S_W_WS";
           leanTorightSWallW.morphTargets = true;
           leanTorightSWallW.side = THREE.DoubleSide;
           leanTorightSWallW.scale.set(1, 1, 1);
           leanTorightSWallW.position.x = 0;
           leanTorightSWallW.position.z = 0;
           leanTorightSWallW.position.y = 1;
           leanTorightSWallW.rotation.y = Math.PI / 2;
           leanTorightSWallW.visible = false;
           const_var.b_t_M_R_t_R.add(leanTorightSWallW);
          //  const_var.wainscotsForCut = leanTorightSWallW.clone();
          //  const_var.wainscotsForCut.R_L_R_S_W_WS = leanTorightSWallW.clone();

            //New Wall Geometry For Right Lean To Right Wall WainScote
           let leanTorightLeftSGeoW = new THREE.BoxGeometry(1, 1, 0.01);
           let leanTorightLeftSMaterialW = new THREE.MeshPhongMaterial({
             /*map:RWtexture,*/ side: THREE.DoubleSide,
             color: 0xffffff,
           });
           let leanTorightLeftSWallW = new THREE.Mesh(leanTorightLeftSGeoW, leanTorightLeftSMaterialW);
           leanTorightLeftSWallW.name = "R_L_L_S_W_WS";
           leanTorightLeftSWallW.morphTargets = true;
           leanTorightLeftSWallW.side = THREE.DoubleSide;
           leanTorightLeftSWallW.scale.set(1, 1, 1);
           leanTorightLeftSWallW.position.x = 0;
           leanTorightLeftSWallW.position.z = 0;
           leanTorightLeftSWallW.position.y = 1;
           leanTorightLeftSWallW.rotation.y = Math.PI / 2;
           leanTorightLeftSWallW.visible = false;
           const_var.b_t_M_R_t_R.add(leanTorightLeftSWallW);
          //  const_var.wainscotsForCut = leanTorightLeftSWallW.clone();
          //  const_var.wainscotsForCut.R_L_L_S_W_WS = leanTorightLeftSWallW.clone();

          //New Svg indecator for all dirction walls
          const loader = new SVGLoader();
          const url_front = process.env.REACT_APP_BASE_URL+frontTitleUrl;
          loader.load(
              // resource URL
              url_front,
              function (data) {

                  const paths = data.paths;
                  const group = new THREE.Group();
                  group.name = "RLfrontWallName";

                  for (let i = 0; i < paths.length; i++) {

                      const path = paths[i];

                      const material = new THREE.MeshPhongMaterial({
                          color: const_var.wallNameColor,
                          side: THREE.BackSide,
                          depthWrite: true
                      });

                      const shapes = SVGLoader.createShapes(path);

                      for (let j = 0; j < shapes.length; j++) {

                          const shape = shapes[j];
                          const geometry = new THREE.ShapeGeometry(shape);
                          const mesh = new THREE.Mesh(geometry, material);
                          mesh.scale.setScalar(0.05)
                          mesh.rotateZ(-Math.PI)
                          mesh.rotateY(-Math.PI)

                          // mesh.position.set((params.p_w/2),0.6,params.leanR_p_d/2 + 0.1)
                          group.add(mesh);
                          group.visible = false;

                      }

                  }

                  const_var.scene.add(group);

              },
            //  function (xhr) {

            //      console.log((xhr.loaded / xhr.total * 100) + '% loaded');

            //  },
            //  function (error) {

            //      console.log('An error happened');

            //  }
          );

          const url_side = process.env.REACT_APP_BASE_URL+sideTitleUrl;

             loader.load(
                 // resource URL
                 url_side,
                 function (data) {
 
                     const paths = data.paths;
                     const group = new THREE.Group();
                     group.name = "RLsideWallName";
 
                     for (let i = 0; i < paths.length; i++) {
 
                         const path = paths[i];
 
                         const material = new THREE.MeshPhongMaterial({
                             color: const_var.wallNameColor,
                             side: THREE.BackSide,
                             depthWrite: true
                         });
 
                         const shapes = SVGLoader.createShapes(path);
 
                         for (let j = 0; j < shapes.length; j++) {
 
                             const shape = shapes[j];
                             const geometry = new THREE.ShapeGeometry(shape);
                             const mesh = new THREE.Mesh(geometry, material);
                             mesh.scale.setScalar(0.05)
                             mesh.rotateZ(-Math.PI)
                             mesh.rotateY(Math.PI / 2)
 
                            //  mesh.position.set((params.p_w/2)+(params.leanR_p_w)+0.1,0.6,params.leanR_p_d/2 + 0.1)
                             group.add(mesh);
                             group.visible = false;
 
                         }
 
                     }
 
                     const_var.scene.add(group);
 
                 },
                //  function (xhr) {
 
                //      console.log((xhr.loaded / xhr.total * 100) + '% loaded',xhr,url_side);
 
                //  },
                //  function (error) {
 
                //      console.log(error,url_side,'An error happened');
 
                //  }
             );
          const url_back = process.env.REACT_APP_BASE_URL+backTitleUrl;

          loader.load(
              // resource URL
              url_back,
              function (data) {

                  const paths = data.paths;
                  const group = new THREE.Group();
                  group.name = "RLbackWallName";

                  for (let i = 0; i < paths.length; i++) {

                      const path = paths[i];

                      const material = new THREE.MeshPhongMaterial({
                          color: const_var.wallNameColor,
                          side: THREE.BackSide,
                          depthWrite: true
                      });

                      const shapes = SVGLoader.createShapes(path);

                      for (let j = 0; j < shapes.length; j++) {

                          const shape = shapes[j];
                          const geometry = new THREE.ShapeGeometry(shape);
                          const mesh = new THREE.Mesh(geometry, material);
                          mesh.scale.setScalar(0.05)
                          mesh.rotateZ(Math.PI)
                          mesh.rotateY(-Math.PI * 2)
                          // mesh.position.set((params.p_w/2)+(params.leanR_p_w),0.6,params.leanR_p_d/-2 + 0.1)
                          group.add(mesh);
                          group.visible = false;
                      }

                  }

                  const_var.scene.add(group);

              },
            //  function (xhr) {

            //      console.log((xhr.loaded / xhr.total * 100) + '% loaded');

            //  },
            //  function (error) {

            //      console.log('An error happened');

            //  }
          );

 
    }
    render() {
        return <div ref={ref => (this.mount = ref)} />;
     }    
}   