import React, { Component } from 'react';
import * as THREE from "three";
import verticalTexture from '../../assets/images/imgTextures/buildingImages/verticalTexture.jpeg';
import horizontalTexture from '../../assets/images/imgTextures/buildingImages/horizantalTexture.jpeg';  
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import frontTitleUrl from "../../assets/walls-names/left-lean-front.svg"
import backTitleUrl from "../../assets/walls-names/left-lean-back.svg"
import sideTitleUrl from "../../assets/walls-names/Left-Lean-Left.svg"


export default class LeftLeanToWalls extends Component {

    LeftLeanToaddWalls = (const_var,params)=>{
        
          //New Wall Geometry For Left Lean To Left Wall
          // var leanToleftGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          var leanToleftGeo = new THREE.BoxGeometry(1, 1, 0.01);
          var leanToleftMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide,color: 0xffffff,});
          var leftLeanToLeftWall = new THREE.Mesh(leanToleftGeo, leanToleftMaterial);
          leftLeanToLeftWall.name = "L_L_L_W";
          leftLeanToLeftWall.morphTargets = true;
          leftLeanToLeftWall.side = THREE.DoubleSide;
          leftLeanToLeftWall.scale.set(1, 1, 1);
          leftLeanToLeftWall.position.set(0,0,1);
          leftLeanToLeftWall.rotation.y = Math.PI / 2;
          leftLeanToLeftWall.visible = false;
          const_var.b_t_M_L_t_L.add(leftLeanToLeftWall);
          const_var.wallsForCut.L_L_L_W = leftLeanToLeftWall.clone();

          //New Wall Geometry For Left Lean To Front Wall
          // var leftLeanTofrontGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          var leftLeanTofrontGeo = new THREE.BoxGeometry(1, 1, 0.01);
          var leftLeanTofrontMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide,color: 0xffffff,});
          var leftLeanTofrontWall = new THREE.Mesh(leftLeanTofrontGeo,leftLeanTofrontMaterial);
          leftLeanTofrontWall.name = "L_L_F_W";
          leftLeanTofrontWall.morphTargets = true;
          leftLeanTofrontWall.side = THREE.DoubleSide;
          leftLeanTofrontWall.scale.set(1, 1, 1);
          leftLeanTofrontWall.position.set(0,0,1);
          leftLeanTofrontWall.visible = false;
          const_var.b_t_M_L_t_L.add(leftLeanTofrontWall);
          const_var.wallsForCut.L_L_F_W = leftLeanTofrontWall.clone();

          //New Wall Geometry For Left Lean To Back Wall
          // var leftLeanTobackGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          var leftLeanTobackGeo = new THREE.BoxGeometry(1, 1, 0.01);
          var leftLeanTobackMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide,color: 0xffffff,});
          var leftLeanTobackWall = new THREE.Mesh(leftLeanTobackGeo,leftLeanTobackMaterial);
          leftLeanTobackWall.name = "L_L_B_W";
          leftLeanTobackWall.morphTargets = true;
          leftLeanTobackWall.side = THREE.DoubleSide;
          leftLeanTobackWall.scale.set(1, 1, 1);
          leftLeanTobackWall.position.set(0,0,1);
          leftLeanTobackWall.visible = false;
          const_var.b_t_M_L_t_L.add(leftLeanTobackWall); 
          const_var.wallsForCut.L_L_B_W = leftLeanTobackWall.clone();

          //Front Wall for Left Lean to Storage 
          // var leftLeanTofrontStorageGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          var leftLeanTofrontStorageGeo = new THREE.BoxGeometry(1, 1, 0.01);
          var leftLeanTofrontStorageMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, color: 0xffffff,});
          var leftLeanToFrontStorageWall = new THREE.Mesh(leftLeanTofrontStorageGeo,leftLeanTofrontStorageMaterial);
          leftLeanToFrontStorageWall.name = "L_L_F_S_W";
          leftLeanToFrontStorageWall.morphTargets = true;
          leftLeanToFrontStorageWall.side = THREE.DoubleSide;
          leftLeanToFrontStorageWall.scale.set(1, 1, 1);
          leftLeanToFrontStorageWall.position.set(0,1,0);
          leftLeanToFrontStorageWall.visible = false;
          const_var.b_t_M_L_t_L.add(leftLeanToFrontStorageWall); 
          const_var.wallsForCut.L_L_F_S_W = leftLeanToFrontStorageWall.clone();

          //New Wall Geometry For Left Lean To Back Wall for Storage
          // var leftLeanTobackStorageGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          var leftLeanTobackStorageGeo = new THREE.BoxGeometry(1, 1, 0.01);
          var leftLeanTobackStorageMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide,color: 0xffffff,});
          var leftLeanTobackStorageWall = new THREE.Mesh(leftLeanTobackStorageGeo,leftLeanTobackStorageMaterial);
          leftLeanTobackStorageWall.name = "L_L_B_S_W";
          leftLeanTobackStorageWall.morphTargets = true;
          leftLeanTobackStorageWall.side = THREE.DoubleSide;
          leftLeanTobackStorageWall.scale.set(1, 1, 1);
          leftLeanTobackStorageWall.position.set(0,1,0);
          leftLeanTobackStorageWall.visible = false;
          const_var.b_t_M_L_t_L.add(leftLeanTobackStorageWall); 
          const_var.wallsForCut.L_L_B_S_W = leftLeanTobackStorageWall.clone();

          //Left Wall for Left Lean to Storage 
          // var leanToleftStorageGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          var leanToleftStorageGeo = new THREE.BoxGeometry(1, 1, 0.01);
          var leanToleftStorageMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide,color: 0xffffff,});
          var leftLeanToLeftStorageWall = new THREE.Mesh(leanToleftStorageGeo, leanToleftStorageMaterial);
          leftLeanToLeftStorageWall.name = "L_L_L_S_W";
          leftLeanToLeftStorageWall.morphTargets = true;
          leftLeanToLeftStorageWall.side = THREE.DoubleSide;
          leftLeanToLeftStorageWall.scale.set(1, 1, 1);
          leftLeanToLeftStorageWall.position.set(0,0,1);
          leftLeanToLeftStorageWall.rotation.y = Math.PI / 2;
          leftLeanToLeftStorageWall.visible = false;
          const_var.b_t_M_L_t_L.add(leftLeanToLeftStorageWall);
          const_var.wallsForCut.L_L_L_S_W = leftLeanToLeftStorageWall.clone();
           
          //Right Wall for Left Lean to Storage 
          // var leanToLefStoragetWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
          var leanToLefStoragetWallGeo = new THREE.BoxGeometry(1, 1, 0.01);
          var leanToLefStoragetWallMaterial = new THREE.MeshPhongMaterial({side: THREE.DoubleSide,color: 0xffffff,});
          var leanToLefStoragetWall = new THREE.Mesh(leanToLefStoragetWallGeo, leanToLefStoragetWallMaterial);
          leanToLefStoragetWall.name = "L_L_R_S_W";
          leanToLefStoragetWall.morphTargets = true;
          leanToLefStoragetWall.side = THREE.DoubleSide;
          leanToLefStoragetWall.scale.set(1, 1, 1);
          leanToLefStoragetWall.position.set(0, 1, 0)
          leanToLefStoragetWall.rotation.y = Math.PI / 2;
          leanToLefStoragetWall.visible = false;
          const_var.b_t_M_L_t_L.add(leanToLefStoragetWall);
          const_var.wallsForCut.L_L_R_S_W = leanToLefStoragetWall.clone();

          //New Gable Geometry For Left Lean To Front Wall

          var leanToLeftfGableGeometry = new THREE.BufferGeometry();
          var leanToLeftfGableVertices = new Float32Array([
            0.5, 1, -0,         
            0.5, 1, -0.01,      
            0.5, 0, -0,       
            -0.5, 0, -0,      
            0.5, 0, -0.01,     
            -0.5, 0, -0.01,
          ]);
          var leanToLeftfGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0]);

          if (params.p_v_w == true) {
            leanToLeftfGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
          } 
        
          leanToLeftfGableGeometry.setAttribute("position",new THREE.BufferAttribute(leanToLeftfGableVertices, 3));
          //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
          leanToLeftfGableGeometry.setAttribute("uv",new THREE.BufferAttribute(leanToLeftfGableUVS, 2));
          leanToLeftfGableGeometry.computeVertexNormals();
          var leanToLeftfGablematerial = new THREE.MeshPhongMaterial({
            // map: texture1,
            side: THREE.DoubleSide,
            // color: 0xffffff,
          });
    
         var leanToLeftfGable = new THREE.Mesh(leanToLeftfGableGeometry,leanToLeftfGablematerial);
          leanToLeftfGable.name = "L_L_F_G";
          leanToLeftfGable.visible = true;
          const_var.b_t_M_L_t_L.add(leanToLeftfGable);

          //New Gable Geometry For Left Lean To Back Wall
          var leanToLeftbGableGeometry = new THREE.BufferGeometry();
          var leanToLeftbGableVertices = new Float32Array([
            0.5, 1, -0,         
            0.5, 1, -0.01,      
            0.5, 0, -0,       
            -0.5, 0, -0,      
            0.5, 0, -0.01,     
            -0.5, 0, -0.01,
          ]);
          var leanToLeftbGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0]);
          if (params.p_v_w == true) {
             leanToLeftbGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
          } 
        
          leanToLeftbGableGeometry.setAttribute("position",new THREE.BufferAttribute(leanToLeftbGableVertices, 3));
          //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
          leanToLeftbGableGeometry.setAttribute("uv",new THREE.BufferAttribute(leanToLeftbGableUVS, 2));
          // var wallTexture = horizontalTexture;
          // if (params.p_v_w==true) {
          //   wallTexture = verticalTexture;
          // } else {
          //   wallTexture = horizontalTexture;
          // }
          
          leanToLeftbGableGeometry.computeVertexNormals();
          var leanToLeftbGableLoader = new THREE.TextureLoader();
          // var texture1 = leanToLeftbGableLoader.load(wallTexture,function () {
          //      texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
          // })
          var leanToLeftbGablematerial = new THREE.MeshPhongMaterial({
            // map: texture1,
            wireframe: false,
            side: THREE.DoubleSide,
            color: 0xffffff,
          });
        
          var  leanToLeftbGable = new THREE.Mesh(leanToLeftbGableGeometry,leanToLeftbGablematerial);
          leanToLeftbGable.name = "L_L_B_G";
          leanToLeftbGable.visible = false;
          leanToLeftbGable.scale.set(params.lean_p_w, params.b_l_t_r_p, 0);
          leanToLeftbGable.position.set(0, params.lean_p_h, 0);
          const_var.b_t_M_L_t_L.add(leanToLeftbGable);

          //New Gable Geometry For Left Lean To Front Storage Wall
          var leanToLeftStorageGableGeometry = new THREE.BufferGeometry();
          var leanToLeftStorageGableVertices = new Float32Array([ -0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 1, 0.5,]);
          var leanToLeftStorageGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0]);
          if (params.p_v_w == true) {
             leanToLeftStorageGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
          }
          leanToLeftStorageGableGeometry.setAttribute("position", new THREE.BufferAttribute(leanToLeftStorageGableVertices, 3));
          //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
          leanToLeftStorageGableGeometry.setAttribute("uv",new THREE.BufferAttribute(leanToLeftStorageGableUVS, 2));
          var wallTextur = horizontalTexture;
          if (params.p_v_w==true) {
            wallTextur = verticalTexture;
          } else {
            wallTextur = horizontalTexture;
          }
          leanToLeftStorageGableGeometry.computeVertexNormals();
          var leanToLeftStorageGableLoader = new THREE.TextureLoader();
          var textur = leanToLeftStorageGableLoader.load(process.env.REACT_APP_BASE_URL+wallTextur, function() {
            textur.wrapT =  textur.wrapS = THREE.RepeatWrapping;
          })
          var leanToLeftStorageGablematerial = new THREE.MeshPhongMaterial({
            map: textur,
            side: THREE.DoubleSide,
            color: 0xffffff,
          });
          var leanToLeftStorageGable = new THREE.Mesh(leanToLeftStorageGableGeometry,leanToLeftStorageGablematerial);
          leanToLeftStorageGable.name = "L_L_F_S_G";
          leanToLeftStorageGable.visible = false;
          leanToLeftStorageGable.scale.set(params.lean_p_w, params.b_l_t_r_p, 0);
          leanToLeftStorageGable.position.set(0, params.lean_p_h, 0);
          const_var.b_t_M_L_t_L.add(leanToLeftStorageGable);

          //New Wall Geometry For Left Lean To Left Wall WainScote
          var leanToleftGeoW = new THREE.BoxGeometry(1, 1, 0.01);
          var leanToleftMaterialW = new THREE.MeshPhongMaterial({
            side: THREE.DoubleSide,
            color: 0xffffff,
          });
          var leanToleftWallW = new THREE.Mesh(leanToleftGeoW, leanToleftMaterialW);
          leanToleftWallW.name = "L_L_L_W_WS";
          leanToleftWallW.morphTargets = true;
          leanToleftWallW.side = THREE.DoubleSide;
          leanToleftWallW.scale.set(1, 1, 1);
          leanToleftWallW.position.x = 0;
          leanToleftWallW.position.z = 0;
          leanToleftWallW.position.y = 1;
          leanToleftWallW.rotation.y = Math.PI / 2;
          leanToleftWallW.visible = false;
          const_var.b_t_M_L_t_L.add(leanToleftWallW);
          // const_var.wainscotsForCut = leanToleftWallW.clone(); 

          //New Wall Geometry For Left Lean To Front Wall WainScote
          var leftLeanTofrontGeoW = new THREE.BoxGeometry(1, 1, 0.01);
          var leftLeanTofrontMaterialW = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, color: 0xffffff, });
          var leftLeanTofrontWallW = new THREE.Mesh(leftLeanTofrontGeoW, leftLeanTofrontMaterialW);
          leftLeanTofrontWallW.name = "L_L_F_W_WS";
          leftLeanTofrontWallW.morphTargets = true;
          leftLeanTofrontWallW.side = THREE.DoubleSide;
          leftLeanTofrontWallW.scale.set(1, 1, 1);
          leftLeanTofrontWallW.position.x = 0;
          leftLeanTofrontWallW.position.z = 0;
          leftLeanTofrontWallW.position.y = 1;
          leftLeanTofrontWallW.visible = false;
          const_var.b_t_M_L_t_L.add(leftLeanTofrontWallW);
          // const_var.wainscotsForCut = leftLeanTofrontWallW.clone(); 

          //New Wall Geometry For Left Lean To Back Wall WainScote
          var leftLeanTobackGeoW = new THREE.BoxGeometry(1, 1, 0.01);
          var leftLeanTobackMaterialW = new THREE.MeshPhongMaterial({side: THREE.DoubleSide,color: 0xffffff,});
          var leftLeanTobackWallW = new THREE.Mesh(leftLeanTobackGeoW, leftLeanTobackMaterialW );
          leftLeanTobackWallW.name = "L_L_B_W_WS";
          leftLeanTobackWallW.morphTargets = true;
          leftLeanTobackWallW.side = THREE.DoubleSide;
          leftLeanTobackWallW.scale.set(1, 1, 1);
          leftLeanTobackWallW.position.x = 0;
          leftLeanTobackWallW.position.z = 0;
          leftLeanTobackWallW.position.y = 1;
          leftLeanTobackWallW.visible = false;
          const_var.b_t_M_L_t_L.add(leftLeanTobackWallW);
          // const_var.wainscotsForCut = leftLeanTobackWallW.clone(); 
          
          //New Svg indecator for all dirction walls
          const loader = new SVGLoader();
          const url_front = process.env.REACT_APP_BASE_URL+frontTitleUrl;
          loader.load(
              // resource URL
              url_front,
              function (data) {

                  const paths = data.paths;
                  const group = new THREE.Group();
                  group.name = "LLfrontWallName";

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
                          mesh.rotateY(Math.PI)
                          // mesh.position.set((params.p_w/-2)-(params.lean_p_w),0.6,params.lean_p_d/2 + 0.1)
                          group.add(mesh);
                          group.visible = false;

                      }

                  }

                  const_var.scene.add(group);

              },
          //    function (xhr) {

          //        console.log((xhr.loaded / xhr.total * 100) + '% loaded');

          //    },
          //    function (error) {

          //        console.log('An error happened');

          //    }
          );


          const url_side = process.env.REACT_APP_BASE_URL+sideTitleUrl;
               
          loader.load(
              // resource URL
              url_side,
              function (data) {

                  const paths = data.paths;
                  const group = new THREE.Group();
                  group.name = "LLsideWallName";

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
                          mesh.rotateY(-Math.PI / 2)
                          // mesh.position.set((params.p_w/-2)-(params.lean_p_w)-0.1,0.6,params.lean_p_d/-2 - 0.1)
                          group.add(mesh);
                          group.visible = false;

                      }

                  }

                  const_var.scene.add(group);

              },
           //    function (xhr) {

           //        console.log((xhr.loaded / xhr.total * 100) + '% loaded');

           //    },
           //    function (error) {

           //        console.log('An error happened');

           //    }
          );


          const url_back = process.env.REACT_APP_BASE_URL+backTitleUrl;
               
          loader.load(
              // resource URL
              url_back,
              function (data) {

                  const paths = data.paths;
                  const group = new THREE.Group();
                  group.name = "LLbackWallName";

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
                          // mesh.rotateY(Math.PI)
                          // mesh.position.set((params.p_w/-2),0.6,params.lean_p_d/-2 - 0.1)
                          group.add(mesh);
                          group.visible = false;

                      }

                  }

                  const_var.scene.add(group);

              },
           //    function (xhr) {

           //        console.log((xhr.loaded / xhr.total * 100) + '% loaded');

           //    },
           //    function (error) {

           //        console.log('An error happened');

           //    }
          );



    }

      render() {
         return <div ref={ref => (this.mount = ref)} />;
      }    
}     