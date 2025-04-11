import React, { Component } from 'react';
import * as THREE from "three";
import horizontalTexture from '../../assets/images/imgTextures/buildingImages/horizantalTexture.jpeg';  
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import frontTitleUrl from "../../assets/walls-names/BLF.svg"
import backTitleUrl from "../../assets/walls-names/BLB.svg"
import sideTitleUrl from "../../assets/walls-names/BLL.svg"
export default class BackLeanToWalls extends Component {
    

    addBackLeanToWalls = (const_var,params)=>{   
        //New Wall Geometry For Back Lean To Front Wall
        // let backLeanToWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
        let backLeanToWallGeo = new THREE.BoxGeometry(1, 1, 0.01);
        let backLeanToMaterial = new THREE.MeshPhongMaterial({
          /*map:LWtexture,*/ side: THREE.DoubleSide,
          color: 0xffffff,
        });
        let backLeanToFrontWall = new THREE.Mesh(backLeanToWallGeo, backLeanToMaterial);
        backLeanToFrontWall.name = "B_L_S_W";
        backLeanToFrontWall.morphTargets = true;
        backLeanToFrontWall.side = THREE.DoubleSide;
        backLeanToFrontWall.scale.set(1, 1, 1);
        backLeanToFrontWall.position.set(0,0,1);
        backLeanToFrontWall.rotation.y = Math.PI / 2;
        backLeanToFrontWall.visible = false;
       const_var.b_t_M_B_t_B.add(backLeanToFrontWall);
       const_var.wallsForCut.B_L_S_W = backLeanToFrontWall.clone();
       
        //New Wall Geometry For Back Lean To Left Wall
        // let backLeanToLeftGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
        let backLeanToLeftGeo = new THREE.BoxGeometry(1, 1, 0.01);
        let backLeanToLeftMaterial = new THREE.MeshPhongMaterial({
          /*map:LWtexture,*/ side: THREE.DoubleSide,
          color: 0xffffff,
        });
        let backLeanToLeftWall = new THREE.Mesh(backLeanToLeftGeo,backLeanToLeftMaterial);
        backLeanToLeftWall.name = "B_L_F_W";
        backLeanToLeftWall.morphTargets = true;
        backLeanToLeftWall.side = THREE.DoubleSide;
        backLeanToLeftWall.scale.set(1, 1, 1);
        backLeanToLeftWall.position.set(0,0,1);
        backLeanToLeftWall.visible = false;
       const_var.b_t_M_B_t_B.add(backLeanToLeftWall);
       const_var.wallsForCut.B_L_F_W = backLeanToLeftWall.clone();
       
        //New Wall Geometry For Back Lean To Right Wall
        // let backLeanToRightWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
        let backLeanToRightWallGeo = new THREE.BoxGeometry(1, 1, 0.01);
        let backLeanToRightWallMaterial = new THREE.MeshPhongMaterial({
          /*map:LWtexture,*/ side: THREE.DoubleSide,
          color: 0xffffff,
        });
        let backLeanToRightWall = new THREE.Mesh(backLeanToRightWallGeo,backLeanToRightWallMaterial);
        backLeanToRightWall.name = "B_L_B_W";
        backLeanToRightWall.morphTargets = true;
        backLeanToRightWall.side = THREE.DoubleSide;
        backLeanToRightWall.scale.set(1, 1, 1);
        backLeanToRightWall.position.set(0,0,1);
        backLeanToRightWall.visible = false;
       const_var.b_t_M_B_t_B.add(backLeanToRightWall);
       const_var.wallsForCut.B_L_B_W = backLeanToRightWall.clone();
       
       
       
         //Front Wall for Back Lean to Storage 
        // let backLeanToLeftStorageGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
        let backLeanToLeftStorageGeo = new THREE.BoxGeometry(1, 1, 0.01);
        let backLeanToLeftStorageMaterial = new THREE.MeshPhongMaterial({
          /*map:LWtexture,*/ side: THREE.DoubleSide,
          color: 0xffffff,
        });
        let backLeanToLeftStorageWall = new THREE.Mesh(backLeanToLeftStorageGeo,backLeanToLeftStorageMaterial);
        backLeanToLeftStorageWall.name = "B_L_L_S_W";
        backLeanToLeftStorageWall.morphTargets = true;
        backLeanToLeftStorageWall.side = THREE.DoubleSide;
        backLeanToLeftStorageWall.scale.set(1, 1, 1);
        backLeanToLeftStorageWall.position.set(0,1,0);
        backLeanToLeftStorageWall.visible = false;
       const_var.b_t_M_B_t_B.add(backLeanToLeftStorageWall); 
       const_var.wallsForCut.B_L_L_S_W = backLeanToLeftStorageWall.clone();
       
        //New Wall Geometry For Back Lean To Back Wall for Storage
        // let backLeanToRightStorageGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
        let backLeanToRightStorageGeo = new THREE.BoxGeometry(1, 1, 0.01);
        let backLeanToRightStorageMaterial = new THREE.MeshPhongMaterial({
          /*map:LWtexture,*/ side: THREE.DoubleSide,
          color: 0xffffff,
        });
        let backLeanToRightStorageWall = new THREE.Mesh(backLeanToRightStorageGeo,backLeanToRightStorageMaterial);
        backLeanToRightStorageWall.name = "B_L_R_S_W";
        backLeanToRightStorageWall.morphTargets = true;
        backLeanToRightStorageWall.side = THREE.DoubleSide;
        backLeanToRightStorageWall.scale.set(1, 1, 1);
        backLeanToRightStorageWall.position.set(0,1,0);
        backLeanToRightStorageWall.visible = false;
       const_var.b_t_M_B_t_B.add(backLeanToRightStorageWall); 
       const_var.wallsForCut.B_L_R_S_W = backLeanToRightStorageWall.clone();
       
         //Left Wall for Back Lean to Storage 
        //  let backLeanToBackStorageWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
         let backLeanToBackStorageWallGeo = new THREE.BoxGeometry(1, 1, 0.01);
         let backLeanToBackStorageMaterial = new THREE.MeshPhongMaterial({
           /*map:LWtexture,*/ side: THREE.DoubleSide,
           color: 0xffffff,
         });
    
         let backLeanToBackStorageWall = new THREE.Mesh(backLeanToBackStorageWallGeo, backLeanToBackStorageMaterial);
         backLeanToBackStorageWall.name = "B_L_B_S_W";
         backLeanToBackStorageWall.morphTargets = true;
         backLeanToBackStorageWall.side = THREE.DoubleSide;
         backLeanToBackStorageWall.scale.set(1, 1, 1);
         backLeanToBackStorageWall.position.set(0, 1, 0)
         backLeanToBackStorageWall.rotation.y = Math.PI / 2;
         backLeanToBackStorageWall.visible = false;
        const_var.b_t_M_B_t_B.add(backLeanToBackStorageWall);
        const_var.wallsForCut.B_L_B_S_W = backLeanToBackStorageWall.clone();
    
       
         //Right Wall for Back Lean to Storage 
        //  let backLeanToFrontStorageWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
         let backLeanToFrontStorageWallGeo = new THREE.BoxGeometry(1, 1, 0.01);
         let backLeanToFrontStorageMaterial = new THREE.MeshPhongMaterial({
           /*map:LWtexture,*/ side: THREE.DoubleSide,
           color: 0xffffff,
         });
         let backLeanToFrontStorageWall = new THREE.Mesh(backLeanToFrontStorageWallGeo, backLeanToFrontStorageMaterial);
         backLeanToFrontStorageWall.name = "B_L_F_S_W";
         backLeanToFrontStorageWall.morphTargets = true;
         backLeanToFrontStorageWall.side = THREE.DoubleSide;
         backLeanToFrontStorageWall.scale.set(1, 1, 1);
         backLeanToFrontStorageWall.position.set(0, 1, 0)
         backLeanToFrontStorageWall.rotation.y = Math.PI / 2;
         backLeanToFrontStorageWall.visible = false;
        const_var.b_t_M_B_t_B.add(backLeanToFrontStorageWall);
        const_var.wallsForCut.B_L_F_S_W = backLeanToFrontStorageWall.clone();
       
        //New Gable Geometry For Back Lean To Front Wall
        var selectedObject = const_var.b_t_M_B_t_B.getObjectByName("backLeanToRightGable");
        const_var.b_t_M_B_t_B.remove(selectedObject);
        let backLeanToRightGableGeometry = new THREE.BufferGeometry();
        let backLeanToRightGableVertices = new Float32Array([
          0.5, 1, -0,         
          0.5, 1, -0.01,      
          0.5, 0, -0,       
          -0.5, 0, -0,      
          0.5, 0, -0.01,     
          -0.5, 0, -0.01,
        ]);
        var backLeanToRightGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0]);

        if (params.p_v_w == true) {
           backLeanToRightGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
        } 
        backLeanToRightGableGeometry.setAttribute("position",new THREE.BufferAttribute(backLeanToRightGableVertices, 3));
        //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
        backLeanToRightGableGeometry.setAttribute("uv",new THREE.BufferAttribute(backLeanToRightGableUVS, 2));

        backLeanToRightGableGeometry.computeVertexNormals();
        let backLeanToRightGableLoader = new THREE.TextureLoader();
        var texture1 = backLeanToRightGableLoader.load(process.env.REACT_APP_BASE_URL+horizontalTexture,function (texture1) {
          texture1.wrapT =  texture1.wrapS = THREE.RepeatWrapping;
        })
        let backLeanToRightGablematerial = new THREE.MeshPhongMaterial({
          map: texture1,
          wireframe: false,
          side: THREE.DoubleSide,
          color: 0xffffff,
        });
       
       let backLeanToRightGable = new THREE.Mesh(backLeanToRightGableGeometry,backLeanToRightGablematerial);
        backLeanToRightGable.name = "B_L_R_G";
        backLeanToRightGable.visible = false;
        backLeanToRightGable.scale.set(params.leanB_p_w, params.b_l_t_r_pBB, 0);
        backLeanToRightGable.position.set(0, params.leanB_p_h, 0);
       const_var.b_t_M_B_t_B.add(backLeanToRightGable);
          // }
        // );
       
        //New Gable Geometry For Back Lean To Back Wall
        var selectedObject2 = const_var.b_t_M_B_t_B.getObjectByName("backLeanToLeftGable");
        const_var.b_t_M_B_t_B.remove(selectedObject2);
        let backLeanToLeftGableGeometry = new THREE.BufferGeometry();
        let backLeanToLeftGableVertices = new Float32Array([
          0.5, 1, -0,         
          0.5, 1, -0.01,      
          0.5, 0, -0,       
          -0.5, 0, -0,      
          0.5, 0, -0.01,     
          -0.5, 0, -0.01,
        ]);
        var backLeanToLeftGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0]);

        if (params.p_v_w == true) {
           backLeanToLeftGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
        } 
        backLeanToLeftGableGeometry.setAttribute("position",new THREE.BufferAttribute(backLeanToLeftGableVertices, 3));
        //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
        backLeanToLeftGableGeometry.setAttribute("uv",new THREE.BufferAttribute(backLeanToLeftGableUVS, 2));

        
        backLeanToLeftGableGeometry.computeVertexNormals();
        let backLeanToLeftGablematerial = new THREE.MeshPhongMaterial({
          //map: texture1,
          wireframe: false,
          side: THREE.DoubleSide,
          color: 0xffffff,
        });
       
        let  backLeanToLeftGable = new THREE.Mesh(backLeanToLeftGableGeometry,backLeanToLeftGablematerial);
        backLeanToLeftGable.name = "B_L_L_G";
        backLeanToLeftGable.visible = false;
        backLeanToLeftGable.scale.set(params.leanB_p_w, params.b_l_t_r_pBB, 0);
        backLeanToLeftGable.position.set(0, params.leanB_p_h, 0);
       const_var.b_t_M_B_t_B.add(backLeanToLeftGable);
         
        //New Gable Geometry For Back Lean To Front Storage Wall
        var selectedObject3 = const_var.b_t_M_B_t_B.getObjectByName("backLeanToStorageGable");
        const_var.b_t_M_B_t_B.remove(selectedObject3);
        let backLeanToStorageGableGeometry = new THREE.BufferGeometry();
        let backLeanToStorageGableVertices = new Float32Array([ -0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 1, 0.5,]);
        var backLeanToStorageGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0]);

        if (params.p_v_w == true) {
           backLeanToStorageGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
        } 
        backLeanToStorageGableGeometry.setAttribute("position", new THREE.BufferAttribute(backLeanToStorageGableVertices, 3));
        //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
        backLeanToStorageGableGeometry.setAttribute("uv",new THREE.BufferAttribute(backLeanToStorageGableUVS, 2));
        backLeanToStorageGableGeometry.computeVertexNormals();
        let backLeanToStorageGableLoader = new THREE.TextureLoader();
        var texture12 = backLeanToStorageGableLoader.load(process.env.REACT_APP_BASE_URL+horizontalTexture, function (texture12) {
          texture12.wrapT =  texture12.wrapS = THREE.RepeatWrapping;
        })
        let backLeanToStorageGablematerial = new THREE.MeshPhongMaterial({
          map: texture12,
          wireframe: false,
          side: THREE.DoubleSide,
          color: 0xffffff,
        });
        let backLeanToStorageGable = new THREE.Mesh(backLeanToStorageGableGeometry,backLeanToStorageGablematerial);
        backLeanToStorageGable.name = "B_L_L_S_G";
        backLeanToStorageGable.visible = false;
        backLeanToStorageGable.scale.set(params.leanB_p_w, params.b_l_t_r_pBB, 0);
        backLeanToStorageGable.position.set(0, params.leanB_p_h, 0);
        const_var.b_t_M_B_t_B.add(backLeanToStorageGable);
        //   }
        // );

        //New Wall Geometry For Back Lean To Left Wall WainScote
        let backLeanToWallGeoW = new THREE.BoxGeometry(1, 1, 0.01);
        let backLeanToMaterialW = new THREE.MeshPhongMaterial({
          /*map:LWtexture,*/ side: THREE.DoubleSide,
          color: 0xffffff,
        });
        let backLeanToRightWallW = new THREE.Mesh(backLeanToWallGeoW, backLeanToMaterialW);
        backLeanToRightWallW.name = "B_L_B_W_WS";
        backLeanToRightWallW.morphTargets = true;
        backLeanToRightWallW.side = THREE.DoubleSide;
        // backLeanToRightWallW.scale.set(1, 1, 1);
        // backLeanToRightWallW.position.x = 0;
        // backLeanToRightWallW.position.z = 0;
        // backLeanToRightWallW.position.y = 1;
        // backLeanToRightWallW.rotation.y = Math.PI / 2;
        backLeanToRightWallW.visible = false;
       const_var.b_t_M_B_t_B.add(backLeanToRightWallW);
      //  const_var.wainscotsForCut = backLeanToRightWallW.clone(); 
       
        //New Wall Geometry For Back Lean To Front Wall WainScote
        let backLeanToFrontGeoW = new THREE.BoxGeometry(1, 1, 0.01);
        let backLeanToFrontMaterialW = new THREE.MeshPhongMaterial({
          /*map:FWtexture,*/ side: THREE.DoubleSide,
          color: 0xffffff,
        });
        let backLeanToFrontWallW = new THREE.Mesh(
          backLeanToFrontGeoW,
          backLeanToFrontMaterialW
        );
        backLeanToFrontWallW.name = "B_L_S_W_WS";
        backLeanToFrontWallW.morphTargets = true;
        backLeanToFrontWallW.side = THREE.DoubleSide;
        backLeanToFrontWallW.visible = false;
       const_var.b_t_M_B_t_B.add(backLeanToFrontWallW);
      //  const_var.wainscotsForCut = backLeanToFrontWallW.clone(); 
       
        //New Wall Geometry For Back Lean To Back Wall WainScote
        let backLeanToLeftGeoW = new THREE.BoxGeometry(1, 1, 0.01);
        let backLeanToLeftMaterialW = new THREE.MeshPhongMaterial({
          /*map:BWtexture,*/ side: THREE.DoubleSide,
          color: 0xffffff,
        });
        let backLeanToLeftWallW = new THREE.Mesh(
          backLeanToLeftGeoW,
          backLeanToLeftMaterialW
        );
        backLeanToLeftWallW.name = "B_L_F_W_WS";
        backLeanToLeftWallW.morphTargets = true;
        backLeanToLeftWallW.side = THREE.DoubleSide;
        backLeanToLeftWallW.visible = false;
       const_var.b_t_M_B_t_B.add(backLeanToLeftWallW);
      //  const_var.wainscotsForCut = backLeanToLeftWallW.clone(); 

        //New Wall Geometry For Back Lean To Back Wall WainScote
        let backLeanToStorageGeoW = new THREE.BoxGeometry(1, 1, 0.01);
        let backLeanToStorageMaterialW = new THREE.MeshPhongMaterial({
          /*map:BWtexture,*/ side: THREE.DoubleSide,
          color: 0xffffff,
        });
        let backLeanToStorageWallW = new THREE.Mesh(
          backLeanToStorageGeoW,
          backLeanToStorageMaterialW
        );
        backLeanToStorageWallW.name = "B_L_B_S_W_WS";
        backLeanToStorageWallW.morphTargets = true;
        backLeanToStorageWallW.side = THREE.DoubleSide;
        backLeanToStorageWallW.visible = false;
       const_var.b_t_M_B_t_B.add(backLeanToStorageWallW);
      //  const_var.wainscotsForCut = backLeanToStorageWallW.clone(); 

        //New Wall Geometry For Front Lean To Front Wall WainScote
        let backLeanToFrontStorageGeoW = new THREE.BoxGeometry(1, 1, 0.01);
        let backLeanToFrontStorageMaterialW = new THREE.MeshPhongMaterial({
          /*map:BWtexture,*/ side: THREE.DoubleSide,
          color: 0xffffff,
        });
        let backLeanToFrontStorageWallW = new THREE.Mesh(
          backLeanToFrontStorageGeoW,
          backLeanToFrontStorageMaterialW
        );
        backLeanToFrontStorageWallW.name = "B_L_F_S_W_WS";
        backLeanToFrontStorageWallW.morphTargets = true;
        backLeanToFrontStorageWallW.side = THREE.DoubleSide;
        backLeanToFrontStorageWallW.visible = false;
       const_var.b_t_M_B_t_B.add(backLeanToFrontStorageWallW);       

      //  const_var.wainscotsForCut = backLeanToFrontStorageWallW.clone(); 


      //New Svg indecator for all dirction walls
      const loader = new SVGLoader();
      const url_front = process.env.REACT_APP_BASE_URL+frontTitleUrl;
      loader.load(
          // resource URL
          url_front,
          function (data) {

              const paths = data.paths;
              const group = new THREE.Group();
              group.name = "BLfrontWallName";

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
                      // mesh.rotateZ(Math.PI)
                      // mesh.rotateY(-Math.PI / 2)
                      mesh.rotateZ(-Math.PI)
                      mesh.rotateY(Math.PI/2)
                      // mesh.position.set((params.p_d/-2),0.6,params.leanB_p_d/-2 - 0.1)
                      group.add(mesh);
                      group.visible = false;

                  }

              }

              const_var.scene.add(group);

          },
          // function (xhr) {

          //     console.log((xhr.loaded / xhr.total * 100) + '% loaded');

          // },
          // function (error) {

          //     console.log('An error happened');

          // }
      );

      const url_side = process.env.REACT_APP_BASE_URL+sideTitleUrl;

      loader.load(
          // resource URL
          url_side,
          function (data) {

              const paths = data.paths;
              const group = new THREE.Group();
              group.name = "BLsideWallName";

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
                      // mesh.rotateY(-Math.PI / 2)
                      // mesh.position.set((params.p_d/-2)-(params.leanB_p_w)-0.1,0.6,params.leanB_p_d/-2 - 0.1)
                      group.add(mesh);
                      group.visible = false;

                  }

              }

              const_var.scene.add(group);

          },
          // function (xhr) {

          //     console.log((xhr.loaded / xhr.total * 100) + '% loaded');

          // },
          // function (error) {

          //     console.log('An error happened');

          // }
      );
      const url_back = process.env.REACT_APP_BASE_URL+backTitleUrl;

      loader.load(
          // resource URL
          url_back,
          function (data) {

              const paths = data.paths;
              const group = new THREE.Group();
              group.name = "BLbackWallName";

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
                      // mesh.rotateZ(-Math.PI)
                      // mesh.rotateY(Math.PI/2)
                      mesh.rotateZ(Math.PI)
                      mesh.rotateY(-Math.PI / 2)
                      // mesh.position.set((params.p_d/-2)-(params.leanB_p_w),0.6,params.leanB_p_d/2 + 0.1)
                      group.add(mesh);
                      group.visible = false;

                  }

              }

              const_var.scene.add(group);

          },
          // function (xhr) {

          //     console.log((xhr.loaded / xhr.total * 100) + '% loaded');

          // },
          // function (error) {

          //     console.log('An error happened');

          // }
      );
      
     }

     
    render() {
        return <div ref={ref => (this.mount = ref)} />;
    }    
}  