import React, { Component } from 'react';
import * as THREE from "three";
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import frontTitleUrl from "../../assets/walls-names/FLF.svg"
import backTitleUrl from "../../assets/walls-names/FLB.svg"
import sideTitleUrl from "../../assets/walls-names/FLL.svg"
export default class FrontLeanToWalls extends Component {

    addFrontLeanToWalls = (const_var,params)=>{
        //New Wall Geometry For Front Lean To Front Wall
        // let frontleanToWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
        let frontleanToWallGeo = new THREE.BoxGeometry(1, 1, 0.01);
        let frontLeanToMaterial = new THREE.MeshPhongMaterial({
          /*map:LWtexture,*/ side: THREE.DoubleSide,
          color: 0xffffff,
        });
        let frontLeanToFrontWall = new THREE.Mesh(frontleanToWallGeo, frontLeanToMaterial);
        frontLeanToFrontWall.name = "F_L_F_W";
        frontLeanToFrontWall.morphTargets = true;
        frontLeanToFrontWall.side = THREE.DoubleSide;
        frontLeanToFrontWall.scale.set(1, 1, 1);
        frontLeanToFrontWall.position.set(0,0,1);
        frontLeanToFrontWall.rotation.y = Math.PI / 2;
        frontLeanToFrontWall.visible = false;
        const_var.b_t_M_F_t_F.add(frontLeanToFrontWall);
        const_var.wallsForCut.F_L_F_W = frontLeanToFrontWall.clone();

      
        //New Wall Geometry For Front Lean To Left Wall
        // let frontLeanToLeftGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
        let frontLeanToLeftGeo = new THREE.BoxGeometry(1, 1, 0.01);
        let frontLeanToLeftMaterial = new THREE.MeshPhongMaterial({
          /*map:LWtexture,*/ side: THREE.DoubleSide,
          color: 0xffffff,
        });
        let frontLeanToLeftWall = new THREE.Mesh(frontLeanToLeftGeo,frontLeanToLeftMaterial);
        frontLeanToLeftWall.name = "F_L_L_W";
        frontLeanToLeftWall.morphTargets = true;
        frontLeanToLeftWall.side = THREE.DoubleSide;
        frontLeanToLeftWall.scale.set(1, 1, 1);
        frontLeanToLeftWall.position.set(0,0,1);
        frontLeanToLeftWall.visible = false;
        const_var.b_t_M_F_t_F.add(frontLeanToLeftWall);  
        const_var.wallsForCut.F_L_L_W = frontLeanToLeftWall.clone();
      
        //New Wall Geometry For Front Lean To Right Wall
        // let frontLeanToRightWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
        let frontLeanToRightWallGeo = new THREE.BoxGeometry(1, 1, 0.01);
        let frontLeanToRightWallMaterial = new THREE.MeshPhongMaterial({
          /*map:LWtexture,*/ side: THREE.DoubleSide,
          color: 0xffffff,
        });
        let frontLeanToRightWall = new THREE.Mesh(frontLeanToRightWallGeo,frontLeanToRightWallMaterial);
        frontLeanToRightWall.name = "F_L_R_W";
        frontLeanToRightWall.morphTargets = true;
        frontLeanToRightWall.side = THREE.DoubleSide;
        frontLeanToRightWall.scale.set(1, 1, 1);
        frontLeanToRightWall.position.set(0,0,1);
        frontLeanToRightWall.visible = false;
        const_var.b_t_M_F_t_F.add(frontLeanToRightWall);
        const_var.wallsForCut.F_L_R_W = frontLeanToRightWall.clone();
      
      
      
         //Front Lean to Right Storage Wall
        // let frontLeanToRightStorageGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
        let frontLeanToRightStorageGeo = new THREE.BoxGeometry(1, 1, 0.01);
        let frontLeanToRightStorageMaterial = new THREE.MeshPhongMaterial({
          /*map:LWtexture,*/ side: THREE.DoubleSide,
          color: 0xffffff,
        });
        let frontLeanToRightStorageWall = new THREE.Mesh(frontLeanToRightStorageGeo,frontLeanToRightStorageMaterial);
        frontLeanToRightStorageWall.name = "F_L_R_S_W";
        frontLeanToRightStorageWall.morphTargets = true;
        frontLeanToRightStorageWall.side = THREE.DoubleSide;
        frontLeanToRightStorageWall.scale.set(1, 1, 1);
        frontLeanToRightStorageWall.position.set(0,1,0);
        frontLeanToRightStorageWall.visible = false;
        const_var.b_t_M_F_t_F.add(frontLeanToRightStorageWall);
        const_var.wallsForCut.F_L_R_S_W = frontLeanToRightStorageWall.clone();
      
        //New Wall Geometry For Front Lean to Left Storage Wall
        // let frontLeanToLeftStorageGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
        let frontLeanToLeftStorageGeo = new THREE.BoxGeometry(1, 1, 0.01);
        let frontLeanToLeftStorageMaterial = new THREE.MeshPhongMaterial({
          /*map:LWtexture,*/ side: THREE.DoubleSide,
          color: 0xffffff,
        });
        let frontLeanToLeftStorageWall = new THREE.Mesh(frontLeanToLeftStorageGeo,frontLeanToLeftStorageMaterial);
        frontLeanToLeftStorageWall.name = "F_L_L_S_W";
        frontLeanToLeftStorageWall.morphTargets = true;
        frontLeanToLeftStorageWall.side = THREE.DoubleSide;
        frontLeanToLeftStorageWall.scale.set(1, 1, 1);
        frontLeanToLeftStorageWall.position.set(0,1,0);
        frontLeanToLeftStorageWall.visible = false;
        const_var.b_t_M_F_t_F.add(frontLeanToLeftStorageWall); 
        const_var.wallsForCut.F_L_L_S_W = frontLeanToLeftStorageWall.clone();
      
         //Front Lean to Front Storage Wall
        //  let frontLeanToFrontStorageGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
         let frontLeanToFrontStorageGeo = new THREE.BoxGeometry(1, 1, 0.01);
         let frontLeanToFrontStorageMaterial = new THREE.MeshPhongMaterial({
           /*map:LWtexture,*/ side: THREE.DoubleSide,
           color: 0xffffff,
         });
         let frontLeanToFrontStorageWall = new THREE.Mesh(frontLeanToFrontStorageGeo, frontLeanToFrontStorageMaterial);
         frontLeanToFrontStorageWall.name = "F_L_F_S_W";
         frontLeanToFrontStorageWall.morphTargets = true;
         frontLeanToFrontStorageWall.side = THREE.DoubleSide;
         frontLeanToFrontStorageWall.scale.set(1, 1, 1);
         frontLeanToFrontStorageWall.position.set(0,0,1);
         frontLeanToFrontStorageWall.rotation.y = Math.PI / 2;
         frontLeanToFrontStorageWall.visible = false;
         const_var.b_t_M_F_t_F.add(frontLeanToFrontStorageWall);
         const_var.wallsForCut.F_L_F_S_W = frontLeanToFrontStorageWall.clone();

       
         //Right Wall for Left Lean to Storage 
        //  let frontLeanToBackStorageWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
         let frontLeanToBackStorageWallGeo = new THREE.BoxGeometry(1, 1, 0.01);
         let frontLeanToBackStorageWallMaterial = new THREE.MeshPhongMaterial({
          /*map:LWtexture,*/ side: THREE.DoubleSide,
          color: 0xffffff,
        });
         let frontLeanToBackStorageWall = new THREE.Mesh(frontLeanToBackStorageWallGeo, frontLeanToBackStorageWallMaterial);
         frontLeanToBackStorageWall.name = "F_L_B_S_W";
         frontLeanToBackStorageWall.morphTargets = true;
         frontLeanToBackStorageWall.side = THREE.DoubleSide;
         frontLeanToBackStorageWall.scale.set(1, 1, 1);
         frontLeanToBackStorageWall.position.set(0, 1, 0)
         frontLeanToBackStorageWall.rotation.y = Math.PI / 2;
         frontLeanToBackStorageWall.visible = false;
         const_var.b_t_M_F_t_F.add(frontLeanToBackStorageWall);
         const_var.wallsForCut.F_L_B_S_W = frontLeanToBackStorageWall.clone();
       
        //New Gable Geometry For Front Lean to Right Gable
        let frontLeanToRightGableGeometry = new THREE.BufferGeometry();
        let frontLeanToRightGableVertices = new Float32Array([
          0.5, 1, -0,         
          0.5, 1, -0.01,      
          0.5, 0, -0,       
          -0.5, 0, -0,      
          0.5, 0, -0.01,     
          -0.5, 0, -0.01,
        ]);
        var frontLeanToRightGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0]);
        if (params.p_v_w == true) {
           frontLeanToRightGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
        }
      
        frontLeanToRightGableGeometry.setAttribute("position",new THREE.BufferAttribute(frontLeanToRightGableVertices, 3));
        //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
        frontLeanToRightGableGeometry.setAttribute("uv",new THREE.BufferAttribute(frontLeanToRightGableUVS, 2));
        frontLeanToRightGableGeometry.computeVertexNormals();
        let frontLeanToRightGablematerial = new THREE.MeshPhongMaterial({
          wireframe: false,
          side: THREE.DoubleSide,
          color: 0xffffff,
        });
      
       let frontLeanToRightGable = new THREE.Mesh(frontLeanToRightGableGeometry,frontLeanToRightGablematerial);
        frontLeanToRightGable.name = "F_L_R_G";
        frontLeanToRightGable.visible = false;
        frontLeanToRightGable.scale.set(params.leanF_p_w, params.b_l_t_r_pF, 0);
        frontLeanToRightGable.position.set(0, params.leanF_p_h, 0);
        const_var.b_t_M_F_t_F.add(frontLeanToRightGable);

        //New Gable Geometry For Front Lean to Left Gable
       var selectedObject2 = const_var.b_t_M_F_t_F.getObjectByName("frontLeanToLeftGable");
        const_var.b_t_M_F_t_F.remove(selectedObject2);
        let frontLeanToLeftGableGeometry = new THREE.BufferGeometry();
        let frontLeanToLeftGableVertices = new Float32Array([
          0.5, 1, -0,         
          0.5, 1, -0.01,      
          0.5, 0, -0,       
          -0.5, 0, -0,      
          0.5, 0, -0.01,     
          -0.5, 0, -0.01,
        ]);
        var frontLeanToLeftGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0]);
        if (params.p_v_w == true) {
          frontLeanToLeftGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
        } 
        frontLeanToLeftGableGeometry.setAttribute("position",new THREE.BufferAttribute(frontLeanToLeftGableVertices, 3));
        //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
        frontLeanToLeftGableGeometry.setAttribute("uv",new THREE.BufferAttribute(frontLeanToLeftGableUVS, 2));
        frontLeanToLeftGableGeometry.computeVertexNormals();
        let frontLeanToLeftGablematerial = new THREE.MeshPhongMaterial({
          //map: texture1,
          wireframe: false,
          side: THREE.DoubleSide,
          color: 0xffffff,
        });
        let  frontLeanToLeftGable = new THREE.Mesh(frontLeanToLeftGableGeometry,frontLeanToLeftGablematerial);
        frontLeanToLeftGable.name = "F_L_L_G";
        frontLeanToLeftGable.visible = false;
        frontLeanToLeftGable.scale.set(params.leanF_p_w, params.b_l_t_r_pF, 0);
        frontLeanToLeftGable.position.set(0, params.leanF_p_h, 0);
        const_var.b_t_M_F_t_F.add(frontLeanToLeftGable);

        //New Gable Geometry For Front Lean to Right Storage Gable
        let frontLeanToStorageGableGeometry = new THREE.BufferGeometry();
        let frontLeanToStorageGableVertices = new Float32Array([ -0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 1, 0.5,]);
        var frontLeanToStorageGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0]);
        if (params.p_v_w == true) {
         frontLeanToStorageGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
        }
        frontLeanToStorageGableGeometry.setAttribute("position", new THREE.BufferAttribute(frontLeanToStorageGableVertices, 3));
        //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
        frontLeanToStorageGableGeometry.setAttribute("uv",new THREE.BufferAttribute(frontLeanToStorageGableUVS, 2));
        frontLeanToStorageGableGeometry.computeVertexNormals();
        let frontLeanToStorageGablematerial = new THREE.MeshPhongMaterial({
          wireframe: false,
          side: THREE.DoubleSide,
          color: 0xffffff,
        });
        let frontLeanToStorageGable = new THREE.Mesh(frontLeanToStorageGableGeometry,frontLeanToStorageGablematerial);
        frontLeanToStorageGable.name = "F_L_R_S_G";
        frontLeanToStorageGable.visible = false;
        frontLeanToStorageGable.scale.set(params.leanF_p_w, params.b_l_t_r_pF, 0);
        frontLeanToStorageGable.position.set(0, params.leanF_p_h, 0);
        const_var.b_t_M_F_t_F.add(frontLeanToStorageGable);
  
        //New Wall Geometry For Front Lean to Front wall WainScot 
        let frontleanToWallGeoW = new THREE.BoxGeometry(1, 1, 0.01);
        let frontLeanToMaterialW = new THREE.MeshPhongMaterial({
          /*map:LWtexture,*/ side: THREE.DoubleSide,
          color: 0xffffff,
        });
        let frontLeanToFrontWallW = new THREE.Mesh(frontleanToWallGeoW, frontLeanToMaterialW);
        frontLeanToFrontWallW.name = "F_L_F_W_WS";
        frontLeanToFrontWallW.morphTargets = true;
        frontLeanToFrontWallW.side = THREE.DoubleSide;
        frontLeanToFrontWallW.visible = false;
        const_var.b_t_M_F_t_F.add(frontLeanToFrontWallW);
        // const_var.wainscotsForCut = frontLeanToFrontWallW.clone();
        // const_var.wainscotsForCut.F_L_F_W_WS = frontLeanToFrontWallW.clone();
      
        //New Wall Geometry For Front Lean to Right wall WainScot
        let frontLeanToRightGeoW = new THREE.BoxGeometry(1, 1, 0.01);
        let frontLeanToRightMaterialW = new THREE.MeshPhongMaterial({
          /*map:FWtexture,*/ side: THREE.DoubleSide,
          color: 0xffffff,
        });
        let frontLeanToRightWallW = new THREE.Mesh(
          frontLeanToRightGeoW,
          frontLeanToRightMaterialW
        );
        frontLeanToRightWallW.name = "F_L_R_W_WS";
        frontLeanToRightWallW.morphTargets = true;
        frontLeanToRightWallW.side = THREE.DoubleSide;
        frontLeanToRightWallW.visible = false;
        const_var.b_t_M_F_t_F.add(frontLeanToRightWallW);
        // const_var.wainscotsForCut = frontLeanToRightWallW.clone();
       
        //New Wall Geometry For Front Lean to Left wall WainScot
        let frontLeanToLeftGeoW = new THREE.BoxGeometry(1, 1, 0.01);
        let frontLeanToLeftMaterialW = new THREE.MeshPhongMaterial({
          /*map:BWtexture,*/ side: THREE.DoubleSide,
          color: 0xffffff,
        });
        let frontLeanToLeftWallW = new THREE.Mesh(
          frontLeanToLeftGeoW,
          frontLeanToLeftMaterialW
        );
        frontLeanToLeftWallW.name = "F_L_L_W_WS";
        frontLeanToLeftWallW.morphTargets = true;
        frontLeanToLeftWallW.side = THREE.DoubleSide;
        frontLeanToLeftWallW.visible = false;
        const_var.b_t_M_F_t_F.add(frontLeanToLeftWallW); 
        // const_var.wainscotsForCut = frontLeanToLeftWallW.clone();    
        
        //New Wall Geometry For Front Lean to Front Storage wall WainScot
        let frontLeanToFrontStorageGeoW = new THREE.BoxGeometry(1, 1, 0.01);
        let frontLeanToFrontStorageMaterialW = new THREE.MeshPhongMaterial({
          /*map:BWtexture,*/ side: THREE.DoubleSide,
          color: 0xffffff,
        });
        let frontLeanToFrontStorageWallW = new THREE.Mesh(
          frontLeanToFrontStorageGeoW,
          frontLeanToFrontStorageMaterialW
        );
        frontLeanToFrontStorageWallW.name = "F_L_F_S_W_WS";
        frontLeanToFrontStorageWallW.morphTargets = true;
        frontLeanToFrontStorageWallW.side = THREE.DoubleSide;
        frontLeanToFrontStorageWallW.visible = false;
        const_var.b_t_M_F_t_F.add(frontLeanToFrontStorageWallW);
        // const_var.wainscotsForCut = frontLeanToFrontStorageWallW.clone();     
        

        //New Svg indecator for all dirction walls
        const loader = new SVGLoader();
        const url_front = process.env.REACT_APP_BASE_URL+sideTitleUrl;
        loader.load(
            // resource URL
            url_front,
            function (data) {

                const paths = data.paths;
                const group = new THREE.Group();
                group.name = "FLfrontWallName";

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
                        // mesh.rotateY(-Math.PI/2)
                        mesh.rotateZ(Math.PI)
                        mesh.rotateY(Math.PI/2)
                        // mesh.position.set((params.p_d/-2)-(params.leanF_p_w),0.6,params.leanF_p_d/2 + 0.1)
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

        const url_side = process.env.REACT_APP_BASE_URL+frontTitleUrl;

        loader.load(
            // resource URL
            url_side,
            function (data) {

                const paths = data.paths;
                const group = new THREE.Group();
                group.name = "FLsideWallName";

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
                        // mesh.position.set((params.p_d/-2)-(params.leanF_p_w)-0.1,0.6,params.leanF_p_d/-2 - 0.1)
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
                group.name = "FLbackWallName";

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
                        // mesh.rotateY(Math.PI/2)
                        mesh.rotateZ(-Math.PI)
                        mesh.rotateY(-Math.PI/2)
                        // mesh.position.set((params.p_d/-2),0.6,params.leanF_p_d/-2 - 0.1)
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