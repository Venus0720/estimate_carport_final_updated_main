import React, { Component } from 'react';
import * as THREE from "three";
import verticalTexture from '../../assets/images/imgTextures/buildingImages/verticalTexture.jpeg';
import horizontalTexture from '../../assets/images/imgTextures/buildingImages/horizantalTexture.jpeg';
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader"
import frontTitleUrl from "../../assets/images/walls-dir/front.svg"
import rightTitleUrl from "../../assets/images/walls-dir/right.svg"
import backTitleUrl from "../../assets/images/walls-dir/back.svg"
import leftTitleUrl from "../../assets/images/walls-dir/left.svg"

import eagleImg from '../../assets/images/imgTextures/buildingImages/eagle.png';
import eagleImg2 from '../../assets/images/imgTextures/buildingImages/eagle-2.png';
import eagleInvertImg from '../../assets/images/imgTextures/buildingImages/eagleInvert.png';

const baseUrl = process.env.REACT_APP_BASE_URL;

export default class BuildingWalls extends Component {

  addWallsIntoBuilding = (const_var, params) => {


    let groundGeo = new THREE.PlaneGeometry(1, 1);
    let groundMaterial = new THREE.MeshPhongMaterial({
      side: THREE.FrontSide,
      color: 0xffffff,
      combine: 3, dithering: true,
      shadowSide: THREE.DoubleSide, aoMapIntensity: 0,
    });
    let ground = new THREE.Mesh(groundGeo, groundMaterial);
    ground.name = "ground";
    ground.visible = false;
    const_var.scene.add(ground);

    let groundBorderGeo = new THREE.Shape();
		groundBorderGeo.moveTo(1,1); //bottom left
		groundBorderGeo.lineTo(1,1);//top left
		groundBorderGeo.lineTo(1,1); // top right
		groundBorderGeo.lineTo(1,1); // bottom right
		groundBorderGeo.closePath()

		let extrudeSettingsgroundBorder = {
			depth: 0.5, // height of the raft
			bevelEnabled: false, // no bevel on edges
			};
			let groundBorderGeometry = new THREE.ExtrudeGeometry(
				groundBorderGeo,
				extrudeSettingsgroundBorder
			);

      let groundBorderMaterial = new THREE.MeshPhongMaterial({
        side: THREE.FrontSide,
        color: 0xffffff,
        combine: 3, dithering: true,
        shadowSide: THREE.DoubleSide, aoMapIntensity: 0,
      });

		let groundBorder = new THREE.Mesh(groundBorderGeometry, groundBorderMaterial);
		groundBorder.name = "groundBorder";
		const_var.scene.add(groundBorder);


    //New Wall Geometry For Center Building Front Wall
    // let frontGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
    let frontGeo = new THREE.BoxGeometry(1, 1, 0.01);
    let frontWallLoader = new THREE.TextureLoader();
    let FWtexture = frontWallLoader.load(
      process.env.REACT_APP_BASE_URL+horizontalTexture,
      function () {
        FWtexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
        FWtexture.wrapS = THREE.RepeatWrapping;
        FWtexture.wrapT = THREE.RepeatWrapping;
      }
    );
    let frontMaterial = new THREE.MeshPhongMaterial({
      side: THREE.FrontSide,
      color: 0xffffff,

      combine: 3, dithering: true,
      shadowSide: THREE.DoubleSide, aoMapIntensity: 0,
      map: FWtexture,
    });
    let frontWall = new THREE.Mesh(frontGeo, frontMaterial);
    frontWall.name = "c_b_f_w";
    // frontWall.morphTargets = true;
    frontWall.scale.set(1, 1, 1);
    frontWall.position.set(0, 1, 0);
    frontWall.visible = false;
    const_var.b_t_M_L.add(frontWall);
    const_var.wallsForCut.c_b_f_w = frontWall.clone();

    // let frontStorageGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
    let frontStorageGeo = new THREE.BoxGeometry(1, 1, 0.01);;
    let frontStorageMaterial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide, color: 0xffffff,

      combine: 3, dithering: true,
      shadowSide: THREE.DoubleSide, aoMapIntensity: 0,
      // map:FWtexture,
    });
    //New Wall Geometry For Center Building storage Front Wall
    let storageFrontWall = new THREE.Mesh(frontStorageGeo, frontStorageMaterial);
    storageFrontWall.name = "c_b_f_s_w";
    storageFrontWall.morphTargets = true;
    storageFrontWall.side = THREE.DoubleSide;
    storageFrontWall.scale.set(1, 1, 1);
    storageFrontWall.position.x = 0;
    storageFrontWall.position.z = 0;
    storageFrontWall.position.y = 1;
    //backWall.rotation.y= Math.PI / 2;
    storageFrontWall.visible = false;
    const_var.b_t_M_L.add(storageFrontWall);
    const_var.wallsForCut.c_b_f_s_w = storageFrontWall.clone();

    //New Wall Geometry For Center Building Left Wall
    // let leftWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
    let leftWallGeo = new THREE.BoxGeometry(1, 1, 0.01);;
    let leftWallLoader = new THREE.TextureLoader();
    let LWtexture = leftWallLoader.load(
      process.env.REACT_APP_BASE_URL+horizontalTexture,
      function () {
        LWtexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
        LWtexture.wrapS = THREE.RepeatWrapping;
        LWtexture.wrapT = THREE.RepeatWrapping;
      }
    );
    let leftWallMaterial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide, shadowSide: THREE.DoubleSide,
      color: 0xffffff,
      dithering: true,
      combine: 2,
      map: LWtexture
    });
    let leftWall = new THREE.Mesh(leftWallGeo, leftWallMaterial);
    leftWall.name = "c_b_l_w";
    leftWall.morphTargets = true;
    leftWall.side = THREE.DoubleSide;
    leftWall.scale.set(1, 1, 1);
    leftWall.position.set(0, 1, 0)
    leftWall.rotation.y = Math.PI / 2;
    leftWall.visible = false;
    const_var.b_t_M_L.add(leftWall);
    const_var.wallsForCut.c_b_l_w = leftWall.clone();


    //New Wall Geometry For Center Building Left double Wall
    let doubleWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
    let doubleWallMaterial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide, shadowSide: THREE.DoubleSide,
      color: 0xffffff,
      dithering: true,
      combine: 2,
      map: LWtexture
    });
    let doubleWall = new THREE.Mesh(doubleWallGeo, doubleWallMaterial);
    doubleWall.name = "double_wall";
    doubleWall.morphTargets = true;
    doubleWall.side = THREE.DoubleSide;
    doubleWall.scale.set(1, 1, 1);
    doubleWall.position.set(0, 1, 0)
    doubleWall.rotation.y = Math.PI / 2;
    doubleWall.visible = false;
    const_var.b_t_M_L.add(doubleWall);








    //New Svg indecator for all dirction walls
    const loader = new SVGLoader();
    // const url_front = process.env.REACT_APP_BASE_URL+frontTitleUrl;
    // loader.load(
    //   // resource URL
    //   url_front,
    //   function (data) {

    //     const paths = data.paths;
    //     const group = new THREE.Group();
    //     group.name = "frontWallName";

    //     for (let i = 0; i < paths.length; i++) {

    //       const path = paths[i];

    //       const material = new THREE.MeshPhongMaterial({
    //         color: const_var.wallNameColor,
    //         side: THREE.BackSide,
    //         depthWrite: true
    //       });

    //       const shapes = SVGLoader.createShapes(path);

    //       for (let j = 0; j < shapes.length; j++) {

    //         const shape = shapes[j];
    //         const geometry = new THREE.ShapeGeometry(shape);
    //         const mesh = new THREE.Mesh(geometry, material);
    //         mesh.scale.setScalar(0.05)
    //         mesh.rotateZ(-Math.PI)
    //         mesh.rotateY(-Math.PI)
    //         mesh.position.set(0, 0, 0)
    //         group.add(mesh);

    //       }

    //     }

    //     const_var.scene.add(group);

    //   },
    //   // function (xhr) {

    //   //   console.log((xhr.loaded / xhr.total * 100) + '% loaded');

    //   // },
    //   // function (error) {

    //   //   console.log('An error happened');

    //   // }
    // );



    // const url_back = process.env.REACT_APP_BASE_URL+backTitleUrl;
    // loader.load(
    //   // resource URL
    //   url_back,
    //   function (data) {

    //     const paths = data.paths;
    //     const group = new THREE.Group();
    //     group.name = "backWallName";

    //     for (let i = 0; i < paths.length; i++) {

    //       const path = paths[i];

    //       const material = new THREE.MeshPhongMaterial({
    //         color: const_var.wallNameColor,
    //         side: THREE.BackSide,
    //         depthWrite: true
    //       });

    //       const shapes = SVGLoader.createShapes(path);

    //       for (let j = 0; j < shapes.length; j++) {

    //         const shape = shapes[j];
    //         const geometry = new THREE.ShapeGeometry(shape);
    //         const mesh = new THREE.Mesh(geometry, material);
    //         mesh.scale.setScalar(0.05)
    //         mesh.rotateZ(Math.PI)

    //         mesh.position.set(0, 0,0)
    //         group.add(mesh);

    //       }

    //     }

    //     const_var.scene.add(group);

    //   },
    //   // called when loading is in progresses
    //   // function (xhr) {

    //   //   console.log((xhr.loaded / xhr.total * 100) + '% loaded');

    //   // },
    //   // // called when loading has errors
    //   // function (error) {

    //   //   console.log('An error happened');

    //   // }
    // );


    // const url_right = process.env.REACT_APP_BASE_URL+rightTitleUrl;
    // loader.load(
    //   // resource URL
    //   url_right,
    //   function (data) {

    //     const paths = data.paths;
    //     const group = new THREE.Group();
    //     group.name = "rightWallName";

    //     for (let i = 0; i < paths.length; i++) {

    //       const path = paths[i];
    //       const material = new THREE.MeshPhongMaterial({
    //         color: const_var.wallNameColor,
    //         side: THREE.BackSide,
    //         depthWrite: true
    //       });

    //       const shapes = SVGLoader.createShapes(path);

    //       for (let j = 0; j < shapes.length; j++) {

    //         const shape = shapes[j];
    //         const geometry = new THREE.ShapeGeometry(shape);
    //         const mesh = new THREE.Mesh(geometry, material);
    //         mesh.scale.setScalar(0.05)
    //         mesh.rotateZ(-Math.PI)
    //         mesh.rotateY(Math.PI / 2)
    //         mesh.position.set(0, 0, 0)
    //         group.add(mesh);

    //       }

    //     }

    //     const_var.scene.add(group);

    //   },
    //   // called when loading is in progresses
    //   // function (xhr) {

    //   //   console.log((xhr.loaded / xhr.total * 100) + '% loaded');

    //   // },
    //   // // called when loading has errors
    //   // function (error) {

    //   //   console.log('An error happened');

    //   // }
    // );




    // const url_left = process.env.REACT_APP_BASE_URL+leftTitleUrl;
    // loader.load(
    //   // resource URL
    //   url_left,
    //   function (data) {

    //     const paths = data.paths;
    //     const group = new THREE.Group();
    //     group.name = "leftWallName";
        
    //     for (let i = 0; i < paths.length; i++) {

    //       const path = paths[i];

    //       const material = new THREE.MeshPhongMaterial({
    //         color: const_var.wallNameColor,
    //         side: THREE.BackSide,
    //         depthWrite: true
    //       });

    //       const shapes = SVGLoader.createShapes(path);

    //       for (let j = 0; j < shapes.length; j++) {

    //         const shape = shapes[j];
    //         const geometry = new THREE.ShapeGeometry(shape);
    //         const mesh = new THREE.Mesh(geometry, material);
    //         mesh.scale.setScalar(0.05)
    //         mesh.rotateZ(-Math.PI)
    //         mesh.rotateY(-Math.PI / 2)
    //         mesh.position.set(0, 0, 0)
    //         group.add(mesh);
    //       }
    //     }

    //     const_var.scene.add(group);

    //   },
    //   // function (xhr) {

    //   //   console.log((xhr.loaded / xhr.total * 100) + '% loaded');

    //   // },
    //   // function (error) {

    //   //   console.log('An error happened');

    //   // }
    // );



    //New Wall Geometry For Center Building storage Left Wall
    // let storageLeftWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
    let storageLeftWallGeo = new THREE.BoxGeometry(1, 1, 0.01);;
    let storageLeftWallMaterial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide, shadowSide: THREE.DoubleSide,
      color: 0xffffff,

      dithering: true,
      combine: 2,
      // map:LWtexture
    });
    let storageLeftWall = new THREE.Mesh(storageLeftWallGeo, storageLeftWallMaterial);
    storageLeftWall.name = "c_b_l_s_w";
    storageLeftWall.morphTargets = true;
    storageLeftWall.side = THREE.DoubleSide;
    storageLeftWall.scale.set(1, 1, 1);
    storageLeftWall.position.set(0, 1, 0)
    storageLeftWall.rotation.y = Math.PI / 2;
    storageLeftWall.visible = false;
    const_var.b_t_M_L.add(storageLeftWall);
    const_var.wallsForCut.c_b_l_s_w = storageLeftWall.clone();

    //New Wall Geometry For Center Building Right Wall
    // let rightWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
    let rightWallGeo = new THREE.BoxGeometry(1, 1, 0.01);;
    let rightWallLoader = new THREE.TextureLoader();
    let RWtexture = rightWallLoader.load(
      process.env.REACT_APP_BASE_URL+horizontalTexture,
      function () {
        RWtexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
        RWtexture.wrapS = THREE.RepeatWrapping;
        RWtexture.wrapT = THREE.RepeatWrapping;
      }
    );
    let rightWallMaterial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide, shadowSide: THREE.DoubleSide,
      color: 0xffffff,

      dithering: true,
      combine: 2,
      map: RWtexture,
    });
    let rightWall = new THREE.Mesh(rightWallGeo, rightWallMaterial /*rightMaterial*/);
    rightWall.name = "c_b_r_w";
    rightWall.morphTargets = true;
    rightWall.side = THREE.DoubleSide;
    rightWall.scale.set(1, 1, 1);
    rightWall.position.set(0, 1, 1);
    rightWall.rotation.y = Math.PI / 2;
    rightWall.visible = false;
    const_var.b_t_M_L.add(rightWall);
    const_var.wallsForCut.c_b_r_w = rightWall.clone();

    //New Wall Geometry For Center Building storage Right Wall
    // let storageRightWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
    let storageRightWallGeo = new THREE.BoxGeometry(1, 1, 0.01);
    let storageRightWallMaterial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide, shadowSide: THREE.DoubleSide,
      color: 0xffffff,

      dithering: true,
      combine: 2,
      // map:RWtexture,
    });
    let storageRightWall = new THREE.Mesh(storageRightWallGeo, storageRightWallMaterial /*rightMaterial*/);
    storageRightWall.name = "c_b_r_s_w";
    storageRightWall.morphTargets = true;
    storageRightWall.side = THREE.DoubleSide;
    storageRightWall.scale.set(1, 1, 1);
    storageRightWall.position.set(0, 1, 1);
    storageRightWall.rotation.y = Math.PI / 2;
    storageRightWall.visible = false;
    const_var.b_t_M_L.add(storageRightWall);
    const_var.wallsForCut.c_b_r_s_w = storageRightWall.clone();

    //New Wall Geometry For Center Building Back Wall
    // let backGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
    let backGeo = new THREE.BoxGeometry(1, 1, 0.01);
    let backWallLoader = new THREE.TextureLoader();
    let BWtexture = backWallLoader.load(
      process.env.REACT_APP_BASE_URL+horizontalTexture,
      function () {
        BWtexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
        BWtexture.wrapS = THREE.RepeatWrapping;
        BWtexture.wrapT = THREE.RepeatWrapping;
      }
    );
    let backphongMaterial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide, shadowSide: THREE.DoubleSide,
      color: 0xffffff,

      dithering: true,
      combine: 2,
      map: BWtexture,
    });
    let backWall = new THREE.Mesh(backGeo, backphongMaterial /*backMaterial*/);
    backWall.name = "c_b_b_w";
    backWall.morphTargets = true;
    backWall.side = THREE.DoubleSide;
    backWall.scale.set(1, 1, 1);
    backWall.position.set(0, 1, 0);
    //backWall.rotation.y= Math.PI / 2;
    backWall.visible = false;
    const_var.b_t_M_L.add(backWall);
    const_var.wallsForCut.c_b_b_w = backWall.clone();


    //New Wall Geometry For Center Building storage Back Wall
    // let storageBackWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
    let storageBackWallGeo = new THREE.BoxGeometry(1, 1, 0.01);;
    let storageBackWallphongMaterial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide, shadowSide: THREE.DoubleSide,
      color: 0xffffff,

      dithering: true,
      combine: 2,
      // map:BWtexture,
    });
    let storageBackWall = new THREE.Mesh(storageBackWallGeo, storageBackWallphongMaterial /*backMaterial*/);
    storageBackWall.name = "c_b_b_s_w";
    storageBackWall.morphTargets = true;
    storageBackWall.side = THREE.DoubleSide;
    storageBackWall.scale.set(1, 1, 1);
    storageBackWall.position.set(0, 1, 0);
    storageBackWall.visible = false;
    const_var.b_t_M_L.add(storageBackWall);
    const_var.wallsForCut.c_b_b_s_w = storageBackWall.clone();


    //New Gable Geometry For Center Building Front Gable
    var selectedObject = const_var.b_t_M_L.getObjectByName("fGable");
    const_var.b_t_M_L.remove(selectedObject);
    var fbGableGeometry = new THREE.BufferGeometry();
    var fbGableVertices = new Float32Array([
      //   0, 1, -0.5,
      // 0.5, 0, -0.5,
      // -0.5, 0, -0.5,

      0, 1, -0,         //0
      0, 1, -0.01,      //0
      0.5, 0, -0,       //1
      -0.5, 0, -0,      //2
      0.5, 0, -0.01,    //1 
      -0.5, 0, -0.01,   //2
    ]);

    var index = new Uint32Array([
            0,2,4,
            0,4,1,
            1,4,5,
            5,4,2,
            5,2,3,
            3,0,1,
            3,1,5,
            3,2,0
    ]);

    if (params.p_v_w == true) {
      var fbGableUVS = new Float32Array([
        0.0, 1.0,
        0.0, 0.0,
        -0.5, 0.0,
      ]);
    } else {
      var fbGableUVS = new Float32Array([
        0.0, 1.0,
        0.0, 0.0,
        -0.5, 0.0,
      ]);
    }

    fbGableGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(fbGableVertices, 3)
    );

    fbGableGeometry.setIndex(new THREE.BufferAttribute( index, 1 ) )

    
    //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
    fbGableGeometry.setAttribute("uv", new THREE.BufferAttribute(fbGableUVS, 2));
    var wallTexture = horizontalTexture;
    if (params.p_v_w == true) {
      wallTexture = verticalTexture;//"Vertical-panel-white.jpg";//"verticalTexture.png";
    } else {
      wallTexture = horizontalTexture;//"Horizontal-panel-white.jpg";//"profile2.png";
    }

    fbGableGeometry.computeVertexNormals();
    var fbGableLoader = new THREE.TextureLoader();
    // var texture1 = fbGableLoader.load(
    //   horizontalTexture,
    //   function (texture1) {
    // texture1.wrapS = THREE.RepeatWrapping;
    // texture1.wrapT = THREE.RepeatWrapping;
    let fbGablematerial = new THREE.MeshPhongMaterial({
      map: texture1,
      wireframe: false,
      side: THREE.DoubleSide,
      color: 0xffffff,
    });
    let nfbGablematerial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
      color: 0xffffff,

      combine: 3, dithering: true,
      shadowSide: THREE.DoubleSide, aoMapIntensity: 0,

      map: FWtexture,
    });

    let fbGable = new THREE.Mesh(fbGableGeometry, fbGablematerial);
    fbGable.name = "fGable";
    fbGable.visible = false;
    fbGable.scale.set(params.p_w, params.p_r_p, 1);
    fbGable.position.set(0, params.p_h / 2, 0);
    // if (params.p_v_w == true) {
    //   fbGable.material.map.rotation = -0.25;
    //   //fbGable.material.map.repeat.set(params.p_w-2,1);
    //   fbGable.material.map.repeat.set(2 * params.p_w, 1);
    // } else {
    //   //fbGable.material.map.repeat.set(1,params.p_w/2-4);
    //   fbGable.material.map.repeat.set(1, params.p_r_p / 3);
    // }
    const_var.b_t_M_L.add(fbGable);
    const_var.wallsForCut.fGable = fbGable.clone();

    //   }
    // );


    //New Gable Geometry For Center Building double Gable
    var doubleGableGeometry = new THREE.BufferGeometry();
    var doublebGableVertices = new Float32Array([
      0, 1, -0.5,
      0.5, 0, -0.5,
      -0.5, 0, -0.5,


    ]);
    // if (params.p_v_w == true) {
    let doublebGableUVS = new Float32Array([
      0.0, 1.0,
      0.0, 0.0,
      -0.5, 0.0,


    ]);
    // } else {
    // let doublebGableUVS = new Float32Array([
    //   0.0, 1.0,
    //   0.0, 0.0,
    //  -0.5, 0.0,
    // ]);
    // }

    doubleGableGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(doublebGableVertices, 3)
    );
    //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
    doubleGableGeometry.setAttribute("uv", new THREE.BufferAttribute(doublebGableUVS, 2));
    var wallTexture = horizontalTexture;
    if (params.p_v_w == true) {
      wallTexture = verticalTexture;//"Vertical-panel-white.jpg";//"verticalTexture.png";
    } else {
      wallTexture = horizontalTexture;//"Horizontal-panel-white.jpg";//"profile2.png";
    }

    doubleGableGeometry.computeVertexNormals();
    var doublebGableLoader = new THREE.TextureLoader();
    // var texture1 = doublebGableLoader.load(
    //   horizontalTexture,
    //   function (texture1) {
    // texture1.wrapS = THREE.RepeatWrapping;
    // texture1.wrapT = THREE.RepeatWrapping;
    let doublebGablematerial = new THREE.MeshPhongMaterial({
      map: texture1,
      wireframe: false,
      side: THREE.DoubleSide,
      color: 0xffffff,
    });
    let ndoublebGablematerial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
      color: 0xffffff,

      combine: 3, dithering: true,
      shadowSide: THREE.DoubleSide, aoMapIntensity: 0,

      map: FWtexture,
    });

    let doublebGable = new THREE.Mesh(doubleGableGeometry, doublebGablematerial);
    doublebGable.name = "doubleGable";
    doublebGable.visible = false;
    doublebGable.scale.set(params.p_w, params.p_r_p, 1);
    doublebGable.position.set(0, params.p_h / 2, 0);
    const_var.b_t_M_L.add(doublebGable);


    //New Gable Geometry For Center Building Storage Front Gable
    var selectedObject = const_var.b_t_M_L.getObjectByName("f_S_Gable");
    const_var.b_t_M_L.remove(selectedObject);
    let f_S_GableGeometry = new THREE.BufferGeometry();
    let f_S_GableVertices = new Float32Array([
      //0, 1, -0.5, 0.5, 0, -0.5, -0.5, 0, -0.5,

      0, 1, -0,         //0
      0, 1, -0.01,      //0
      0.5, 0, -0,       //1
      -0.5, 0, -0,      //2
      0.5, 0, -0.01,    //1 
      -0.5, 0, -0.01,   //2
    ]);

      var index = new Uint32Array([
            0,2,4,
            0,4,1,
            1,4,5,
            5,4,2,
            5,2,3,
            3,0,1,
            3,1,5,
            3,2,0
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

    f_S_GableGeometry.setIndex(new THREE.BufferAttribute( index, 1 ) )

    //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
    f_S_GableGeometry.setAttribute("uv", new THREE.BufferAttribute(f_S_GableUVS, 2));
    var wallTexture = horizontalTexture;
    if (params.p_v_w == true) {
      wallTexture = verticalTexture;//"Vertical-panel-white.jpg";//"verticalTexture.png";
    }
    else {
      wallTexture = horizontalTexture;//"Horizontal-panel-white.jpg";//"profile2.png";
    }

    f_S_GableGeometry.computeVertexNormals();
    let f_S_GableLoader = new THREE.TextureLoader();
    var texture1 = f_S_GableLoader.load(process.env.REACT_APP_BASE_URL+horizontalTexture)
    texture1.wrapS = THREE.RepeatWrapping;
    texture1.wrapT = THREE.RepeatWrapping;

    let f_S_Gablematerial = new THREE.MeshPhongMaterial({
      map: texture1,
      wireframe: false,
      side: THREE.DoubleSide,
      color: 0xffffff,
    });
    let nf_S_Gablematerial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
      color: 0xffffff,

      combine: 3, dithering: true,
      shadowSide: THREE.DoubleSide, aoMapIntensity: 0,

      map: FWtexture,
    });

    let f_S_Gable = new THREE.Mesh(f_S_GableGeometry, nf_S_Gablematerial);
    f_S_Gable.name = "f_S_Gable";
    f_S_Gable.visible = false;
    f_S_Gable.scale.set(params.p_w, params.p_r_p, 1);
    f_S_Gable.position.set(0, params.p_h / 2, 0);
    if (params.p_v_w == true) {
      f_S_Gable.material.map.rotation = -0.25;
      //fbGable.material.map.repeat.set(params.p_w-2,1);
      f_S_Gable.material.map.repeat.set(2 * params.p_w, 1);
    } else {
      //fbGable.material.map.repeat.set(1,params.p_w/2-4);
      f_S_Gable.material.map.repeat.set(1, params.p_r_p / 3);
    }
    const_var.b_t_M_L.add(f_S_Gable);
    const_var.wallsForCut.f_S_Gable = f_S_Gable.clone();

    //New Gable Geometry For Center Building Back Wall
    let bselectedObject = const_var.b_t_M_L.getObjectByName("bGable");
    const_var.b_t_M_L.remove(bselectedObject);
    let bGableGeometry = new THREE.BufferGeometry();
    let bGableVertices = new Float32Array([
      0, 1, -0,         //0
      0, 1, -0.01,      //0
      0.5, 0, -0,       //1
      -0.5, 0, -0,      //2
      0.5, 0, -0.01,    //1 
      -0.5, 0, -0.01,   //2
    ]);

    var index = new Uint32Array([
            0,2,4,0,4,1,1,4,5,5,4,2,5,2,3,3,0,1,3,1,5,3,2,0
    ]);

    if (params.p_v_w == true) {
      var bGableUVS = new Float32Array([
        0.0, 1.0, 0.0, 0.0, -0.5, 0.0,
      ]);
    } else {
      var bGableUVS = new Float32Array([
        0.0, 1.0, 0.0, 0.0, -0.5, 0.0,
      ]);
    }

    bGableGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(bGableVertices, 3)
    );

    bGableGeometry.setIndex(new THREE.BufferAttribute( index, 1 ) )

    //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
    bGableGeometry.setAttribute("uv", new THREE.BufferAttribute(bGableUVS, 2));
    var wallTexture = horizontalTexture;
    if (params.p_v_w == true) {
      wallTexture = verticalTexture;//"Vertical-panel-white.jpg";//"verticalTexture.png";
    }
    else {
      wallTexture = horizontalTexture;//"Horizontal-panel-white.jpg";//"profile2.png";
    }

    bGableGeometry.computeVertexNormals();
    // var fbGableLoader = new THREE.TextureLoader();
    // var texture1 = fbGableLoader.load(process.env.REACT_APP_BASE_URL+horizontalTexture,
    //   function (texture1) {
    //     texture1.wrapS = THREE.RepeatWrapping;
    //     texture1.wrapT = THREE.RepeatWrapping;


        let bGablematerial = new THREE.MeshPhongMaterial({
          side: THREE.DoubleSide,
          color: 0xffffff,

          combine: 3, dithering: true,
          shadowSide: THREE.DoubleSide, aoMapIntensity: 0,

          // map: FWtexture,
        });

        let bGable = new THREE.Mesh(bGableGeometry, bGablematerial);
        bGable.name = "bGable";
        bGable.visible = false;
        bGable.scale.set(params.p_w, params.p_r_p, 1);
        bGable.position.set(0, params.p_h, 0);
        // if (params.p_v_w == true) {
        //   bGable.material.map.rotation = -0.25;
        //   //bGable.material.map.repeat.set(params.p_w-2,1);
        //   bGable.material.map.repeat.set(2 * params.p_w, 1);
        // } else {
        //   //bGable.material.map.repeat.set(1,params.p_w/2-4);
        //   bGable.material.map.repeat.set(1, params.p_r_p / 3);
        // }
        const_var.b_t_M_L.add(bGable);
        const_var.wallsForCut.bGable = bGable.clone();
    //   }
    // );

    // center Building Left Storage Front Gable
    let cBLeftStorageFGableGeometry = new THREE.BufferGeometry();
    let cBLeftStorageFGableVertices = new Float32Array([
      // //left
      // 0, params.p_h, params.p_d / 2,
      // //right
      // params.p_w / 2, params.p_h, params.p_d / 2,
      // //top
      // -0.0, params.p_h, params.p_d / 2,

      0.5, 1, -0,         
      0.5, 1, -0.01,      
      0.5, 0, -0,       
      -0.5, 0, -0,      
      0.5, 0, -0.01,     
      -0.5, 0, -0.01,
    ]);
    if (params.p_v_w == true) {
      var cBLeftStorageFGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0,]);
    } else {
      var cBLeftStorageFGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0,]);
    }

    cBLeftStorageFGableGeometry.setAttribute("position", new THREE.BufferAttribute(cBLeftStorageFGableVertices, 3));
    cBLeftStorageFGableGeometry.setAttribute("uv", new THREE.BufferAttribute(cBLeftStorageFGableUVS, 2));
    var wallTexture = horizontalTexture;
    if (params.p_v_w == true) {
      wallTexture = verticalTexture;
    }
    else {
      wallTexture = horizontalTexture;
    }
    cBLeftStorageFGableGeometry.computeVertexNormals();
    let cBLeftStorageFGableLoader = new THREE.TextureLoader();
    var texture1 = cBLeftStorageFGableLoader.load(process.env.REACT_APP_BASE_URL+horizontalTexture, function (texture1) {
      texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
    }
    )
    let cBLeftStorageFGablematerial = new THREE.MeshPhongMaterial({
      map: texture1,
      side: THREE.DoubleSide,
      color: 0xffffff,
    });
    let cBLeftStorageFGable = new THREE.Mesh(cBLeftStorageFGableGeometry, cBLeftStorageFGablematerial);
    cBLeftStorageFGable.name = "CB_L_S_F_G";
    cBLeftStorageFGable.visible = false;
    const_var.b_t_M_L.add(cBLeftStorageFGable);
    const_var.wallsForCut.CB_L_S_F_G = cBLeftStorageFGable.clone();

    /*Center Buildig Left Storage 4 vertices Front Gable*/
        var quad_vertices =
      [

      //top-right
        0,  1, 0.005,        //0     
        0,  1, -0.005,       //1
      //bottom-right
        0, -0, 0.005,        //2 
        0, -0, -0.005,       //3
      //top-left
        -1,  1, -0.005,       //4
        -1,  1, 0.005,        //5
      //bottom-left
        -1, -0,-0.005,        //6
        -1, -0, 0.005,        //7
      ];

    var quad_uvs =
      [
          0,1,
          1,1,
          0,0,
          1,0,
          0,1,
          1,1,
          0,0,
          1,0,
      ];

    var quad_indices =
      [
            0,2,1,
            2,3,1,
            4,6,5,
            6,7,5,
            4,5,1,
            5,0,1,
            7,6,2, 
            6,3,2,
            5,7,0,
            7,2,0,
            1,3,4,
            3,6,4 
      ];


    let cBLeftStorage4VFGeometry = new THREE.BufferGeometry();
    var vertices = new Float32Array(quad_vertices);
    // Each vertex has one uv coordinate for texture mapping
    var uvs = new Float32Array(quad_uvs);
    // Use the four vertices to draw the two triangles that make up the square.
    var indices = new Uint32Array(quad_indices)
    // itemSize = 3 because there are 3 values (components) per vertex
    cBLeftStorage4VFGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    cBLeftStorage4VFGeometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    cBLeftStorage4VFGeometry.setIndex(new THREE.BufferAttribute(indices, 1));
    var wallTexture = horizontalTexture;
    if (params.p_v_w == true) {
      wallTexture = verticalTexture;
    }
    else {
      wallTexture = horizontalTexture;
    }
    cBLeftStorage4VFGeometry.computeVertexNormals();
    let cBLeftStorage4VFGeometryLoader = new THREE.TextureLoader();
    var texture1 = cBLeftStorage4VFGeometryLoader.load(process.env.REACT_APP_BASE_URL+horizontalTexture, function (texture1) {
      texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
    }
    )
    let cBLeftStorage4VFmat = new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, color: 0xFFFF00,/**/dithering: true, combine: 2, });
    let cBLeftStorage4VFmaterial = new THREE.MeshPhongMaterial({
      map: texture1,
      side: THREE.DoubleSide,
      color: 0xffffff,
    });
    let cBLeftStorage4VF = new THREE.Mesh(cBLeftStorage4VFGeometry, cBLeftStorage4VFmaterial);
    cBLeftStorage4VF.name = "CB_L_S_4V_F_G";
    cBLeftStorage4VF.visible = false;
    const_var.b_t_M_L.add(cBLeftStorage4VF);
    const_var.wallsForCut.CB_L_S_4V_F_G = cBLeftStorage4VF.clone();



    /*Left Storage Front 2nd Wall According Vertical Texture*/
    var quad_verticesL =
      [
        //botom left
        -1, -0, 0,
        //botom right
        0, -0, 0,
        //top right
        0, 1, 0,
        //top left
        -1, 1, 0,

      ];

    var quad_uvsL =
      [

        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
      ];

    var quad_indicesL =
      [
        0, 2, 1, 0, 3, 2,
      ];

    let cBLeftStorage4VFGeometryL = new THREE.BufferGeometry();
    var verticesL = new Float32Array(quad_verticesL);
    // Each vertex has one uv coordinate for texture mapping
    var uvsL = new Float32Array(quad_uvsL);
    // Use the four verticesL to draw the two triangles that make up the square.
    var indicesL = new Uint32Array(quad_indicesL)
    // itemSize = 3 because there are 3 values (components) per vertex
    cBLeftStorage4VFGeometryL.setAttribute('position', new THREE.BufferAttribute(verticesL, 3));
    cBLeftStorage4VFGeometryL.setAttribute('uv', new THREE.BufferAttribute(uvsL, 2));
    cBLeftStorage4VFGeometryL.setIndex(new THREE.BufferAttribute(indicesL, 1));
    var wallTextureL = horizontalTexture;
    if (params.p_v_w == true) {
      wallTextureL = verticalTexture;
    }
    else {
      wallTextureL = horizontalTexture;
    }
    cBLeftStorage4VFGeometryL.computeVertexNormals();
    let cBLeftStorage4VFGeometryLLoaderL = new THREE.TextureLoader();
    var texture1 = cBLeftStorage4VFGeometryLLoaderL.load(process.env.REACT_APP_BASE_URL+horizontalTexture, function (texture1) {
      texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
    }
    )
    let cBLeftStorage4VFma = new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, color: 0xFFFF00,/**/dithering: true, combine: 2, });
    let cBLeftStorage4VFmaterialL = new THREE.MeshPhongMaterial({
      map: texture1,
      side: THREE.DoubleSide,
      color: 0xffffff,
    });
    let L_S_F_2W_VT = new THREE.Mesh(cBLeftStorage4VFGeometryL, cBLeftStorage4VFmaterialL);
    L_S_F_2W_VT.name = "L_S_F_2W_VT";
    L_S_F_2W_VT.visible = false;
    const_var.b_t_M_L.add(L_S_F_2W_VT);


    /*Right Storage Front 2nd Wall According Vertical Texture*/
    var quad_verticesR =
      [
        //botom left
        -1, -0, 0,
        //botom right
        0, -0, 0,
        //top right
        0, 1, 0,
        //top left
        -1, 1, 0,

      ];

    var quad_uvsR =
      [

        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
      ];

    var quad_indicesR =
      [
        0, 2, 1, 0, 3, 2,
      ];

    let cBLeftStorage4VFGeometryR = new THREE.BufferGeometry();
    var verticesR = new Float32Array(quad_verticesR);
    // Each vertex has one uv coordinate for texture mapping
    var uvsR = new Float32Array(quad_uvsR);
    // Use the four verticesR to draw the two triangles that make up the square.
    var indicesR = new Uint32Array(quad_indicesR)
    // itemSize = 3 because there are 3 values (components) per vertex
    cBLeftStorage4VFGeometryR.setAttribute('position', new THREE.BufferAttribute(verticesR, 3));
    cBLeftStorage4VFGeometryR.setAttribute('uv', new THREE.BufferAttribute(uvsR, 2));
    cBLeftStorage4VFGeometryR.setIndex(new THREE.BufferAttribute(indicesR, 1));
    var wallTextureL = horizontalTexture;
    if (params.p_v_w == true) {
      wallTextureL = verticalTexture;
    }
    else {
      wallTextureL = horizontalTexture;
    }
    cBLeftStorage4VFGeometryR.computeVertexNormals();
    let cBLeftStorage4VFGeometryLLoaderR = new THREE.TextureLoader();
    var texture1 = cBLeftStorage4VFGeometryLLoaderR.load(process.env.REACT_APP_BASE_URL+horizontalTexture, function (texture1) {
      texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
    }
    )
    let cBLeftStorage4VFmaR = new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, color: 0xFFFF00,/**/dithering: true, combine: 2, });
    let cBLeftStorage4VFmaterialR = new THREE.MeshPhongMaterial({
      map: texture1,
      side: THREE.DoubleSide,
      color: 0xffffff,
    });
    let R_S_F_2W_VT = new THREE.Mesh(cBLeftStorage4VFGeometryR, cBLeftStorage4VFmaterialR);
    R_S_F_2W_VT.name = "R_S_F_2W_VT";
    R_S_F_2W_VT.visible = false;
    const_var.b_t_M_L.add(R_S_F_2W_VT);



    // center Building Left Storage Back Gable
    let cBLeftStorageBGableGeometry = new THREE.BufferGeometry();
    let cBLeftStorageBGableVertices = new Float32Array([
      // //left
      // 0, params.p_h, params.p_d / 2,
      // //right
      // params.p_w / 2, params.p_h, params.p_d / 2,
      // //top
      // -0.0, params.p_h, params.p_d / 2,

      0.5, 1, -0,         
      0.5, 1, -0.01,      
      0.5, 0, -0,       
      -0.5, 0, -0,      
      0.5, 0, -0.01,     
      -0.5, 0, -0.01,
    ]);
    if (params.p_v_w == true) {
      var cBLeftStorageBGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0,]);
    } else {
      var cBLeftStorageBGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0,]);
    }

    cBLeftStorageBGableGeometry.setAttribute("position", new THREE.BufferAttribute(cBLeftStorageBGableVertices, 3));
    cBLeftStorageBGableGeometry.setAttribute("uv", new THREE.BufferAttribute(cBLeftStorageBGableUVS, 2));
    var wallTexture = horizontalTexture;
    if (params.p_v_w == true) {
      wallTexture = verticalTexture;
    }
    else {
      wallTexture = horizontalTexture;
    }
    cBLeftStorageBGableGeometry.computeVertexNormals();
    let cBLeftStorageBGableLoader = new THREE.TextureLoader();
    var texture1 = cBLeftStorageBGableLoader.load(process.env.REACT_APP_BASE_URL+horizontalTexture, function (texture1) {
      texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
    }
    )
    let cBLeftStorageBGablematerial = new THREE.MeshPhongMaterial({
      map: texture1,
      side: THREE.DoubleSide,
      color: 0xffffff,
    });
    let cBLeftStorageBGable = new THREE.Mesh(cBLeftStorageBGableGeometry, cBLeftStorageBGablematerial);
    cBLeftStorageBGable.name = "CB_L_S_B_G";
    cBLeftStorageBGable.visible = false;
    const_var.b_t_M_L.add(cBLeftStorageBGable);
    const_var.wallsForCut.CB_L_S_B_G = cBLeftStorageBGable.clone();


    /*Center Buildig Left Storage 4 vertices Back Gable*/
    var quad_vertices =
      [
        // //botom left
        // -1, -0, 0,
        // //botom right
        // 0, -0, 0,
        // //top right
        // 0, 1, 0,
        // //top left
        // -1, 1, 0,

      //top-right
        0,  1, 0.005,        //0     
        0,  1, -0.005,       //1
      //bottom-right
        0, -0, 0.005,        //2 
        0, -0, -0.005,       //3
      //top-left
        -1,  1, -0.005,       //4
        -1,  1, 0.005,        //5
      //bottom-left
        -1, -0,-0.005,        //6
        -1, -0, 0.005,        //7

      ];

    var quad_uvs =
      [

          0,1,
          1,1,
          0,0,
          1,0,
          0,1,
          1,1,
          0,0,
          1,0,
      ];

    var quad_indices =
      [
          0,2,1,
          2,3,1,
          4,6,5,
          6,7,5,
          4,5,1,
          5,0,1,
          7,6,2, 
          6,3,2,
          5,7,0,
          7,2,0,
          1,3,4,
          3,6,4 
      ];

    let cBLeftStorage4VBGeometry = new THREE.BufferGeometry();
    var vertices = new Float32Array(quad_vertices);
    // Each vertex has one uv coordinate for texture mapping
    var uvs = new Float32Array(quad_uvs);
    // Use the four vertices to draw the two triangles that make up the square.
    var indices = new Uint32Array(quad_indices)
    // itemSize = 3 because there are 3 values (components) per vertex
    cBLeftStorage4VBGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    cBLeftStorage4VBGeometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    cBLeftStorage4VBGeometry.setIndex(new THREE.BufferAttribute(indices, 1));
    var wallTexture = horizontalTexture;
    if (params.p_v_w == true) {
      wallTexture = verticalTexture;
    }
    else {
      wallTexture = horizontalTexture;
    }
    cBLeftStorage4VBGeometry.computeVertexNormals();
    let cBLeftStorage4VBGeometryLoader = new THREE.TextureLoader();
    var texture1 = cBLeftStorage4VBGeometryLoader.load(process.env.REACT_APP_BASE_URL+horizontalTexture, function (texture1) {
      texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
    }
    )
    let cBLeftStorage4VBmat = new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, color: 0xFFFF00,/**/dithering: true, combine: 2, });
    let cBLeftStorage4VBmaterial = new THREE.MeshPhongMaterial({
      map: texture1,
      side: THREE.DoubleSide,
      color: 0xffffff,
    });
    let cBLeftStorage4VB = new THREE.Mesh(cBLeftStorage4VBGeometry, cBLeftStorage4VBmaterial);
    cBLeftStorage4VB.name = "CB_L_S_4V_B_G";
    cBLeftStorage4VB.visible = false;
    const_var.b_t_M_L.add(cBLeftStorage4VB);
    const_var.wallsForCut.CB_L_S_4V_B_G = cBLeftStorage4VB.clone();

    // Center Building Left Storage Front Wall
    //  let  CBLSFrontWallGeo= new THREE.PlaneGeometry(1, 1, 30, 30);
    let CBLSFrontWallGeo = new THREE.BoxGeometry(1, 1, 0.01);
    let CBLSFrontWallMaterial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide, color: 0xffffff,

      combine: 3, dithering: true,
      shadowSide: THREE.DoubleSide, aoMapIntensity: 0,

      // map:FWtexture,
    });
    let CBLSFrontWall = new THREE.Mesh(CBLSFrontWallGeo, CBLSFrontWallMaterial);
    CBLSFrontWall.name = "c_b_l_s_f_w";
    CBLSFrontWall.morphTargets = true;
    CBLSFrontWall.side = THREE.DoubleSide;
    CBLSFrontWall.scale.set(1, 1, 1);
    CBLSFrontWall.position.x = 0;
    CBLSFrontWall.position.z = 0;
    CBLSFrontWall.position.y = 1;
    //backWall.rotation.y= Math.PI / 2;
    CBLSFrontWall.visible = false;
    const_var.b_t_M_L.add(CBLSFrontWall);
    const_var.wallsForCut.c_b_l_s_f_w = CBLSFrontWall.clone();

    // Center Building Left Storage Back Wall
    //  let CBLSBackWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
    let CBLSBackWallGeo = new THREE.BoxGeometry(1, 1, 0.01);
    let CBLSBackWallMaterial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide, color: 0xffffff,

      combine: 3, dithering: true,
      shadowSide: THREE.DoubleSide, aoMapIntensity: 0,

      // map:FWtexture,
    });
    let CBLSBackWall = new THREE.Mesh(CBLSBackWallGeo, CBLSBackWallMaterial /*backMaterial*/);
    CBLSBackWall.name = "c_b_l_s_b_w";
    CBLSBackWall.morphTargets = true;
    CBLSBackWall.side = THREE.DoubleSide;
    CBLSBackWall.scale.set(1, 1, 1);
    CBLSBackWall.position.x = 0;
    CBLSBackWall.position.z = 0;
    CBLSBackWall.position.y = 1;
    //CBLSBackWall.rotation.y= Math.PI / 2;
    CBLSBackWall.visible = false;
    const_var.b_t_M_L.add(CBLSBackWall);
    const_var.wallsForCut.c_b_l_s_b_w = CBLSBackWall.clone();


    // Center Building Left Storage Right Wall
    //  let CBLSRightWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
    let CBLSRightWallGeo = new THREE.BoxGeometry(1, 1, 0.01);
    let CBLSRightWallMaterial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide, shadowSide: THREE.DoubleSide,
      color: 0xffffff,

      dithering: true,
      combine: 2,
      // map:LWtexture
    });
    let CBLSRightWall = new THREE.Mesh(CBLSRightWallGeo, CBLSRightWallMaterial);
    CBLSRightWall.name = "c_b_l_s_r_w";
    CBLSRightWall.morphTargets = true;
    CBLSRightWall.side = THREE.DoubleSide;
    CBLSRightWall.scale.set(10, 10, 1);
    CBLSRightWall.position.set(0, 1, 0)
    CBLSRightWall.rotation.y = Math.PI / 2;
    CBLSRightWall.visible = false;
    const_var.b_t_M_L.add(CBLSRightWall);
    const_var.wallsForCut.c_b_l_s_r_w = CBLSRightWall.clone();


    // Center Building Left Storage Utility Wall
    //  let CBLSUtilityWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
    let CBLSUtilityWallGeo = new THREE.BoxGeometry(1, 1, 0.01);
    let CBLSUtilityWallMaterial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide, color: 0xffffff,

      combine: 3, dithering: true,
      shadowSide: THREE.DoubleSide, aoMapIntensity: 0,

      // map:FWtexture,
    });
    let CBLSUtilityWall = new THREE.Mesh(CBLSUtilityWallGeo, CBLSUtilityWallMaterial /*backMaterial*/);
    CBLSUtilityWall.name = "CB_L_S_U_W";
    CBLSUtilityWall.morphTargets = true;
    CBLSUtilityWall.side = THREE.DoubleSide;
    CBLSUtilityWall.scale.set(1, 1, 1);
    CBLSUtilityWall.position.x = 0;
    CBLSUtilityWall.position.z = 0;
    CBLSUtilityWall.position.y = 1;
    //CBLSUtilityWall.rotation.y= Math.PI / 2;
    CBLSUtilityWall.visible = false;
    const_var.b_t_M_L.add(CBLSUtilityWall);
    const_var.wallsForCut.CB_L_S_U_W = CBLSUtilityWall.clone();


    // center Building Left Storage Back Gable
    let cBLeftStorageUGableGeometry = new THREE.BufferGeometry();
    let cBLeftStorageUGableVertices = new Float32Array([
      //left
      0, params.p_h, params.p_d / 2,
      //right
      params.p_w / 2, params.p_h, params.p_d / 2,
      //top
      -0.0, params.p_h, params.p_d / 2,
    ]);
    if (params.p_v_w == true) {
      var cBLeftStorageUGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0,]);
    } else {
      var cBLeftStorageUGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0,]);
    }

    cBLeftStorageUGableGeometry.setAttribute("position", new THREE.BufferAttribute(cBLeftStorageUGableVertices, 3));
    cBLeftStorageUGableGeometry.setAttribute("uv", new THREE.BufferAttribute(cBLeftStorageUGableUVS, 2));
    var wallTexture = horizontalTexture;
    if (params.p_v_w == true) {
      wallTexture = verticalTexture;
    }
    else {
      wallTexture = horizontalTexture;
    }
    cBLeftStorageUGableGeometry.computeVertexNormals();
    let cBLeftStorageUGableLoader = new THREE.TextureLoader();
    var texture1 = cBLeftStorageUGableLoader.load(process.env.REACT_APP_BASE_URL+horizontalTexture, function (texture1) {
      texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
    }
    )
    let cBLeftStorageUGablematerial = new THREE.MeshPhongMaterial({
      map: texture1,
      side: THREE.DoubleSide,
      color: 0xffffff,
    });
    let cBLeftStorageUGable = new THREE.Mesh(cBLeftStorageUGableGeometry, cBLeftStorageUGablematerial);
    cBLeftStorageUGable.name = "CB_L_S_U_G";
    cBLeftStorageUGable.visible = false;
    const_var.b_t_M_L.add(cBLeftStorageUGable);


    /*Center Buildig Left Storage 4 vertices Utility Gable*/
    let cBLeftStorage4VUquad_vertices =
      [
        //botom left
        -1, -0, 0,
        //botom right
        0, -0, 0,
        //top right
        0, 1, 0,
        //top left
        -1, 1, 0,

      ];

    let cBLeftStorage4VUquad_uvs =
      [

        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
      ];

    let cBLeftStorage4VUquad_indices =
      [
        0, 2, 1, 0, 3, 2,
      ];

    let cBLeftStorage4VUGeometry = new THREE.BufferGeometry();
    let cBLeftStorage4VUvertices = new Float32Array(cBLeftStorage4VUquad_vertices);
    // Each vertex has one uv coordinate for texture mapping
    let cBLeftStorage4VUuvs = new Float32Array(cBLeftStorage4VUquad_uvs);
    // Use the four vertices to draw the two triangles that make up the square.
    let cBLeftStorage4VUindices = new Uint32Array(cBLeftStorage4VUquad_indices)
    // itemSize = 3 because there are 3 values (components) per vertex
    cBLeftStorage4VUGeometry.setAttribute('position', new THREE.BufferAttribute(cBLeftStorage4VUvertices, 3));
    cBLeftStorage4VUGeometry.setAttribute('uv', new THREE.BufferAttribute(cBLeftStorage4VUuvs, 2));
    cBLeftStorage4VUGeometry.setIndex(new THREE.BufferAttribute(cBLeftStorage4VUindices, 1));
    var wallTexture = horizontalTexture;
    if (params.p_v_w == true) {
      wallTexture = verticalTexture;
    }
    else {
      wallTexture = horizontalTexture;
    }
    cBLeftStorage4VUGeometry.computeVertexNormals();
    let cBLeftStorage4VUGeometryLoader = new THREE.TextureLoader();
    var texture1 = cBLeftStorage4VUGeometryLoader.load(process.env.REACT_APP_BASE_URL+horizontalTexture, function (texture1) {
      texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
    }
    )
    let cBLeftStorage4VUmaterial = new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, color: 0xFFFF00,/*emissive:0xffffff,vertexColors:true,*/dithering: true, combine: 2, });
    let ncBLeftStorage4VUmaterial = new THREE.MeshPhongMaterial({
      map: texture1,
      side: THREE.DoubleSide,
      color: 0xffffff,
    });
    let cBLeftStorage4VU = new THREE.Mesh(cBLeftStorage4VUGeometry, ncBLeftStorage4VUmaterial);
    cBLeftStorage4VU.name = "CB_L_S_4V_U_G";
    cBLeftStorage4VU.visible = false;
    const_var.b_t_M_L.add(cBLeftStorage4VU);


    /*Center Buildig Right Storage Front Gable*/
    let cBRightStorageFGableGeometry = new THREE.BufferGeometry();
    let cBRightStorageFGableVertices = new Float32Array([
      // //left
      // 0, params.p_h, params.p_d / 2,
      // //right
      // params.p_w / 2, params.p_h, params.p_d / 2,
      // //top
      // -0.0, params.p_h, params.p_d / 2,

      0.5, 1, -0,         
      0.5, 1, -0.01,      
      0.5, 0, -0,       
      -0.5, 0, -0,      
      0.5, 0, -0.01,     
      -0.5, 0, -0.01,
    ]);
    if (params.p_v_w == true) {
      var cBRightStorageFGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0,]);
    } else {
      var cBRightStorageFGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0,]);
    }

    cBRightStorageFGableGeometry.setAttribute("position", new THREE.BufferAttribute(cBRightStorageFGableVertices, 3));
    cBRightStorageFGableGeometry.setAttribute("uv", new THREE.BufferAttribute(cBRightStorageFGableUVS, 2));
    var wallTexture = horizontalTexture;
    if (params.p_v_w == true) {
      wallTexture = verticalTexture;
    }
    else {
      wallTexture = horizontalTexture;
    }
    cBRightStorageFGableGeometry.computeVertexNormals();
    let cBRightStorageFGableLoader = new THREE.TextureLoader();
    var texture1 = cBRightStorageFGableLoader.load(process.env.REACT_APP_BASE_URL+horizontalTexture, function (texture1) {
      texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
    }
    )
    let cBRightStorageFGablematerial1 = new THREE.MeshPhongMaterial({
      map: texture1,
      side: THREE.DoubleSide,
      color: 0xffffff,
    });
    let cBRightStorageFGablematerial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
      color: 0xffffff,

      combine: 3, dithering: true,
      shadowSide: THREE.DoubleSide, aoMapIntensity: 0,

      map: FWtexture,
    });
    let cBRightStorageFGable = new THREE.Mesh(cBRightStorageFGableGeometry, cBRightStorageFGablematerial);
    cBRightStorageFGable.name = "CB_R_S_F_G";
    cBRightStorageFGable.visible = false;
    const_var.b_t_M_L.add(cBRightStorageFGable);
    const_var.wallsForCut.CB_R_S_F_G = cBRightStorageFGable.clone();


    /*Center Buildig Right Storage Back Gable*/
    let cBRightStorageBGableGeometry = new THREE.BufferGeometry();
    let cBRightStorageBGableVertices = new Float32Array([
      // //left
      // 0, params.p_h, params.p_d / 2,
      // //right
      // params.p_w / 2, params.p_h, params.p_d / 2,
      // //top
      // -0.0, params.p_h, params.p_d / 2,

      0.5, 1, -0,         
      0.5, 1, -0.01,      
      0.5, 0, -0,       
      -0.5, 0, -0,      
      0.5, 0, -0.01,     
      -0.5, 0, -0.01,
    ]);
    if (params.p_v_w == true) {
      var cBRightStorageBGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0,]);
    } else {
      var cBRightStorageBGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0,]);
    }

    cBRightStorageBGableGeometry.setAttribute("position", new THREE.BufferAttribute(cBRightStorageBGableVertices, 3));
    cBRightStorageBGableGeometry.setAttribute("uv", new THREE.BufferAttribute(cBRightStorageBGableUVS, 2));
    var wallTexture = horizontalTexture;
    if (params.p_v_w == true) {
      wallTexture = verticalTexture;
    }
    else {
      wallTexture = horizontalTexture;
    }
    cBRightStorageBGableGeometry.computeVertexNormals();
    let cBRightStorageBGableLoader = new THREE.TextureLoader();
    var texture1 = cBRightStorageBGableLoader.load(process.env.REACT_APP_BASE_URL+horizontalTexture, function (texture1) {
      texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
    }
    )
    let cBRightStorageBGablematerial1 = new THREE.MeshPhongMaterial({
      map: texture1,
      side: THREE.DoubleSide,
      color: 0xffffff,
    });
    let cBRightStorageBGablematerial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
      color: 0xffffff,

      combine: 3, dithering: true,
      shadowSide: THREE.DoubleSide, aoMapIntensity: 0,

      map: FWtexture,
    });
    let cBRightStorageBGable = new THREE.Mesh(cBRightStorageBGableGeometry, cBRightStorageBGablematerial);
    cBRightStorageBGable.name = "CB_R_S_B_G";
    cBRightStorageBGable.visible = false;
    const_var.b_t_M_L.add(cBRightStorageBGable);
    const_var.wallsForCut.CB_R_S_B_G = cBRightStorageBGable.clone();


    /*Center Buildig Right Storage 4 vertices Front Gable*/
    var quad_vertices =
      [
      //top-right
        0,  1, 0.005,        //0     
        0,  1, -0.005,       //1
      //bottom-right
        0, -0, 0.005,        //2 
        0, -0, -0.005,       //3
      //top-left
        -1,  1, -0.005,       //4
        -1,  1, 0.005,        //5
      //bottom-left
        -1, -0,-0.005,        //6
        -1, -0, 0.005,        //7
      ];

    var quad_uvs =
      [
         0,1,
          1,1,
          0,0,
          1,0,
          0,1,
          1,1,
          0,0,
          1,0,
      ];

    var quad_indices =
      [
            0,2,1,
            2,3,1,
            4,6,5,
            6,7,5,
            4,5,1,
            5,0,1,
            7,6,2, 
            6,3,2,
            5,7,0,
            7,2,0,
            1,3,4,
            3,6,4 
      ];

    let cBRightStorage4VFGeometry = new THREE.BufferGeometry();
    var vertices = new Float32Array(quad_vertices);
    // Each vertex has one uv coordinate for texture mapping
    var uvs = new Float32Array(quad_uvs);
    // Use the four vertices to draw the two triangles that make up the square.
    var indices = new Uint32Array(quad_indices)
    // itemSize = 3 because there are 3 values (components) per vertex
    cBRightStorage4VFGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    cBRightStorage4VFGeometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    cBRightStorage4VFGeometry.setIndex(new THREE.BufferAttribute(indices, 1));
    var wallTexture = horizontalTexture;
    if (params.p_v_w == true) {
      wallTexture = verticalTexture;
    }
    else {
      wallTexture = horizontalTexture;
    }
    cBRightStorage4VFGeometry.computeVertexNormals();
    let cBRightStorage4VFGeometryLoader = new THREE.TextureLoader();
    var texture1 = cBRightStorage4VFGeometryLoader.load(process.env.REACT_APP_BASE_URL+horizontalTexture, function (texture1) {
      texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
    }
    )
    let cBRightStorage4VFmaterial1 = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
      color: 0xffffff,

      combine: 3, dithering: true,
      shadowSide: THREE.DoubleSide, aoMapIntensity: 0,

      map: texture1,
    });
    let cBRightStorage4VFmaterial = new THREE.MeshPhongMaterial({
      map: texture1,
      side: THREE.DoubleSide,
      color: 0xffffff,
    });
    let cBRightStorage4VF = new THREE.Mesh(cBRightStorage4VFGeometry, cBRightStorage4VFmaterial1);
    cBRightStorage4VF.name = "CB_R_S_4V_F_G";
    cBRightStorage4VF.visible = false;
    const_var.b_t_M_L.add(cBRightStorage4VF);
    const_var.wallsForCut.CB_R_S_4V_F_G = cBRightStorage4VF.clone();


    /*Center Buildig Right Storage 4 vertices Front Gable*/
    var quad_vertices =
      [
      //top-right
        0,  1, 0.005,        //0     
        0,  1, -0.005,       //1
      //bottom-right
        0, -0, 0.005,        //2 
        0, -0, -0.005,       //3
      //top-left
        -1,  1, -0.005,       //4
        -1,  1, 0.005,        //5
      //bottom-left
        -1, -0,-0.005,        //6
        -1, -0, 0.005,        //7
      ];

    var quad_uvs =
      [
         0,1,
          1,1,
          0,0,
          1,0,
          0,1,
          1,1,
          0,0,
          1,0,
      ];

    var quad_indices =
      [
            0,2,1,
            2,3,1,
            4,6,5,
            6,7,5,
            4,5,1,
            5,0,1,
            7,6,2, 
            6,3,2,
            5,7,0,
            7,2,0,
            1,3,4,
            3,6,4 
      ];

    let R_S_B_W_VT_Geometry = new THREE.BufferGeometry();
    var vertices = new Float32Array(quad_vertices);
    // Each vertex has one uv coordinate for texture mapping
    var uvs = new Float32Array(quad_uvs);
    // Use the four vertices to draw the two triangles that make up the square.
    var indices = new Uint32Array(quad_indices)
    // itemSize = 3 because there are 3 values (components) per vertex
    R_S_B_W_VT_Geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    R_S_B_W_VT_Geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    R_S_B_W_VT_Geometry.setIndex(new THREE.BufferAttribute(indices, 1));
    var wallTexture = horizontalTexture;
    if (params.p_v_w == true) {
      wallTexture = verticalTexture;
    }
    else {
      wallTexture = horizontalTexture;
    }
    R_S_B_W_VT_Geometry.computeVertexNormals();
    let R_S_B_W_VT_GeometryLoader = new THREE.TextureLoader();
    var texture1 = R_S_B_W_VT_GeometryLoader.load(process.env.REACT_APP_BASE_URL+horizontalTexture, function (texture1) {
      texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
    }
    )
    let R_S_B_W_VT_material1 = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
      color: 0xffffff,

      combine: 3, dithering: true,
      shadowSide: THREE.DoubleSide, aoMapIntensity: 0,

      map: texture1,
    });

    let R_S_B_W_VT = new THREE.Mesh(R_S_B_W_VT_Geometry, R_S_B_W_VT_material1);
    R_S_B_W_VT.name = "R_S_B_W_VT";
    R_S_B_W_VT.visible = false;
    const_var.b_t_M_L.add(R_S_B_W_VT);
    const_var.wallsForCut.R_S_B_W_VT = R_S_B_W_VT.clone();



    /*Center Buildig Right Storage 4 vertices Back Gable*/
    let quadB_vertices =
      [
      //top-right
        0,  1, 0.005,        //0     
        0,  1, -0.005,       //1
      //bottom-right
        0, -0, 0.005,        //2 
        0, -0, -0.005,       //3
      //top-left
        -1,  1, -0.005,       //4
        -1,  1, 0.005,        //5
      //bottom-left
        -1, -0,-0.005,        //6
        -1, -0, 0.005,        //7

      ];

    let quadB_uvs =
      [
        0,1,
        1,1,
        0,0,
        1,0,
        0,1,
        1,1,
        0,0,
        1,0,
      ];

    let quadB_indices =
      [
        0,2,1,
        2,3,1,
        4,6,5,
        6,7,5,
        4,5,1,
        5,0,1,
        7,6,2, 
        6,3,2,
        5,7,0,
        7,2,0,
        1,3,4,
        3,6,4 
      ];

    let cBRightStorage4VBGeometry = new THREE.BufferGeometry();
    let verticesB = new Float32Array(quadB_vertices);
    // Each vertex has one uv coordinate for texture mapping
    let uvsB = new Float32Array(quadB_uvs);
    // Use the four vertices to draw the two triangles that make up the square.
    let indicesB = new Uint32Array(quadB_indices)
    // itemSize = 3 because there are 3 values (components) per vertex
    cBRightStorage4VBGeometry.setAttribute('position', new THREE.BufferAttribute(verticesB, 3));
    cBRightStorage4VBGeometry.setAttribute('uv', new THREE.BufferAttribute(uvsB, 2));
    cBRightStorage4VBGeometry.setIndex(new THREE.BufferAttribute(indicesB, 1));
    var wallTexture = horizontalTexture;
    if (params.p_v_w == true) {
      wallTexture = verticalTexture;
    }
    else {
      wallTexture = horizontalTexture;
    }
    cBRightStorage4VBGeometry.computeVertexNormals();
    let cBRightStorage4VBGeometryLoader = new THREE.TextureLoader();
    var texture1 = cBRightStorage4VBGeometryLoader.load(process.env.REACT_APP_BASE_URL+horizontalTexture, function (texture1) {
      texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
    }
    )
    let cBRightStorage4VBmat = new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, color: 0xFFFF00,/**/dithering: true, combine: 2, });
    let cBRightStorage4VBmaterial = new THREE.MeshPhongMaterial({
      map: texture1,
      side: THREE.DoubleSide,
      color: 0xffffff,
    });
    let cBRightStorage4VB = new THREE.Mesh(cBRightStorage4VBGeometry, cBRightStorage4VBmaterial);
    cBRightStorage4VB.name = "CB_R_S_4V_B_G";
    cBRightStorage4VB.visible = false;
    const_var.b_t_M_L.add(cBRightStorage4VB);
    const_var.wallsForCut.CB_R_S_4V_B_G = cBRightStorage4VB.clone();

    // Center Building Right Storage Front Wall
    //  let  CBRSFrontWallGeo= new THREE.PlaneGeometry(1, 1, 30, 30);
    let CBRSFrontWallGeo = new THREE.BoxGeometry(1, 1, 0.01);
    let CBRSFrontWallMaterial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide, color: 0xffffff,

      combine: 3, dithering: true,
      shadowSide: THREE.DoubleSide, aoMapIntensity: 0,

      // map:FWtexture,
    });
    //let frontMaterial= new THREE.MeshPhongMaterial({ /*map:FWtexture,*/side: THREE.DoubleSide,color: 0xffffff} );
    let CBRSFrontWall = new THREE.Mesh(CBRSFrontWallGeo, CBRSFrontWallMaterial);
    CBRSFrontWall.name = "c_b_r_s_f_w";
    CBRSFrontWall.morphTargets = true;
    CBRSFrontWall.side = THREE.DoubleSide;
    CBRSFrontWall.scale.set(1, 1, 1);
    CBRSFrontWall.position.x = 0;
    CBRSFrontWall.position.z = 0;
    CBRSFrontWall.position.y = 1;
    //backWall.rotation.y= Math.PI / 2;
    CBRSFrontWall.visible = false;
    const_var.b_t_M_L.add(CBRSFrontWall);
    const_var.wallsForCut.c_b_r_s_f_w = CBRSFrontWall.clone();

    //New Wall Geometry For Center Building Right storage Utility Wall
    // let storageUtilityWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
    let storageUtilityWallGeo = new THREE.BoxGeometry(1, 1, 0.01);
    let storageUtilityWallphongMaterial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide, color: 0xffffff,

      combine: 3, dithering: true,
      shadowSide: THREE.DoubleSide, aoMapIntensity: 0,

      // map:FWtexture,
    })
    let storageUtilityWall = new THREE.Mesh(storageUtilityWallGeo, storageUtilityWallphongMaterial /*backMaterial*/);
    storageUtilityWall.name = "CB_R_S_U_W";
    storageUtilityWall.morphTargets = true;
    storageUtilityWall.side = THREE.DoubleSide;
    storageUtilityWall.scale.set(1, 1, 1);
    storageUtilityWall.position.x = 0;
    storageUtilityWall.position.z = 0;
    storageUtilityWall.position.y = 1;
    storageUtilityWall.visible = false;
    const_var.b_t_M_R.add(storageUtilityWall);
    const_var.wallsForCut.CB_R_S_U_W = storageUtilityWall.clone();

    /*Center Buildig Right Storage Utility Gable*/
    let cBRightStorageUGableGeometry = new THREE.BufferGeometry();
    let cBRightStorageUGableVertices = new Float32Array([
      //left
      0, params.p_h, params.p_d / 2,
      //right
      params.p_w / 2, params.p_h, params.p_d / 2,
      //top
      -0.0, params.p_h, params.p_d / 2,
    ]);
    if (params.p_v_w == true) {
      var cBRightStorageUGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0,]);
    } else {
      var cBRightStorageUGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0,]);
    }

    cBRightStorageUGableGeometry.setAttribute("position", new THREE.BufferAttribute(cBRightStorageUGableVertices, 3));
    cBRightStorageUGableGeometry.setAttribute("uv", new THREE.BufferAttribute(cBRightStorageUGableUVS, 2));
    var wallTexture = horizontalTexture;
    if (params.p_v_w == true) {
      wallTexture = verticalTexture;
    }
    else {
      wallTexture = horizontalTexture;
    }
    cBRightStorageUGableGeometry.computeVertexNormals();
    let cBRightStorageUGableLoader = new THREE.TextureLoader();
    var texture1 = cBRightStorageUGableLoader.load(process.env.REACT_APP_BASE_URL+horizontalTexture, function (texture1) {
      texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
    }
    )
    let cBRightStorageUGablematerial = new THREE.MeshPhongMaterial({
      map: texture1,
      side: THREE.DoubleSide,
      color: 0xffffff,
    });
    let cBRightStorageUGable = new THREE.Mesh(cBRightStorageUGableGeometry, cBRightStorageUGablematerial);
    cBRightStorageUGable.name = "CB_R_S_U_G";
    cBRightStorageUGable.visible = false;
    const_var.b_t_M_R.add(cBRightStorageUGable);


    //  Center Buildig Right Storage Back Wall
    //  let CBRSBackWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
    let CBRSBackWallGeo = new THREE.BoxGeometry(1, 1, 0.01);
    let CBRSBackWallMaterial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide, shadowSide: THREE.DoubleSide,
      color: 0xffffff,
      dithering: true,
      combine: 2,
      // map:BWtexture,
    });
    let CBRSBackWall = new THREE.Mesh(CBRSBackWallGeo, CBRSBackWallMaterial /*backMaterial*/);
    CBRSBackWall.name = "c_b_r_s_b_w";
    CBRSBackWall.morphTargets = true;
    CBRSBackWall.side = THREE.DoubleSide;
    CBRSBackWall.scale.set(1, 1, 1);
    CBRSBackWall.position.x = 0;
    CBRSBackWall.position.z = 0;
    CBRSBackWall.position.y = 1;
    //CBRSBackWall.rotation.y= Math.PI / 2;
    CBRSBackWall.visible = false;
    const_var.b_t_M_L.add(CBRSBackWall);
    const_var.wallsForCut.c_b_r_s_b_w = CBRSBackWall.clone();

    /*Center Buildig Right Storage 4 vertices Utility Gable*/
    let CB_R_S_4V_U_G_quadB_vertices =
      [
        //botom left
        -1, -0, 0,
        //botom right
        0, -0, 0,
        //top right
        0, 1, 0,
        //top left
        -1, 1, 0,

      ];

    let CB_R_S_4V_U_G_quadB_uvs =
      [

        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
      ];

    let CB_R_S_4V_U_G_quadB_indices =
      [
        0, 2, 1, 0, 3, 2,
      ];

    let cBRightStorage4VUGeometry = new THREE.BufferGeometry();
    let CB_R_S_4V_U_G_verticesB = new Float32Array(CB_R_S_4V_U_G_quadB_vertices);
    // Each vertex has one uv coordinate for texture mapping
    let CB_R_S_4V_U_G_uvsB = new Float32Array(CB_R_S_4V_U_G_quadB_uvs);
    // Use the four vertices to draw the two triangles that make up the square.
    let CB_R_S_4V_U_G_indicesB = new Uint32Array(CB_R_S_4V_U_G_quadB_indices)
    // itemSize = 3 because there are 3 values (components) per vertex
    cBRightStorage4VUGeometry.setAttribute('position', new THREE.BufferAttribute(CB_R_S_4V_U_G_verticesB, 3));
    cBRightStorage4VUGeometry.setAttribute('uv', new THREE.BufferAttribute(CB_R_S_4V_U_G_uvsB, 2));
    cBRightStorage4VUGeometry.setIndex(new THREE.BufferAttribute(CB_R_S_4V_U_G_indicesB, 1));
    var wallTexture = horizontalTexture;
    if (params.p_v_w == true) {
      wallTexture = verticalTexture;
    }
    else {
      wallTexture = horizontalTexture;
    }
    cBRightStorage4VUGeometry.computeVertexNormals();
    let cBRightStorage4VUGeometryLoader = new THREE.TextureLoader();
    var texture1 = cBRightStorage4VUGeometryLoader.load(process.env.REACT_APP_BASE_URL+horizontalTexture, function (texture1) {
      texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
    }
    )
    let cBRightStorage4VUmaterial = new THREE.MeshPhongMaterial({ side: THREE.DoubleSide, color: 0xFFFF00,/*emissive:0xffffff,vertexColors:true,*/dithering: true, combine: 2, });
    let ncBRightStorage4VUmaterial = new THREE.MeshPhongMaterial({
      map: texture1,
      side: THREE.DoubleSide,
      color: 0xffffff,
    });
    let cBRightStorage4VU = new THREE.Mesh(cBRightStorage4VUGeometry, ncBRightStorage4VUmaterial);
    cBRightStorage4VU.name = "CB_R_S_4V_U_G";
    cBRightStorage4VU.visible = false;
    const_var.b_t_M_R.add(cBRightStorage4VU);


    //  Center Buildig Right Storage Left Wall
    //  let CBRSLeftWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
    let CBRSLeftWallGeo = new THREE.BoxGeometry(1, 1, 0.01);
    let CBRSLeftWallMaterial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide, shadowSide: THREE.DoubleSide,
      color: 0xffffff,

      dithering: true,
      combine: 2,
      // map:LWtexture
    });
    let CBRSLeftWall = new THREE.Mesh(CBRSLeftWallGeo, CBRSLeftWallMaterial);
    CBRSLeftWall.name = "c_b_r_s_l_w";
    CBRSLeftWall.morphTargets = true;
    CBRSLeftWall.side = THREE.DoubleSide;
    CBRSLeftWall.scale.set(1, 1, 1);
    CBRSLeftWall.position.set(0, 1, 0)
    CBRSLeftWall.rotation.y = Math.PI / 2;
    CBRSLeftWall.visible = false;
    const_var.b_t_M_L.add(CBRSLeftWall);
    const_var.wallsForCut.c_b_r_s_l_w = CBRSLeftWall.clone();



    //New Wall Geometry For Center Building Left Wall WainScote
    var leftWainScoteGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
    var leftWainScoteMaterial = new THREE.MeshPhongMaterial({
            /*map:LWtexture,*/ side: THREE.DoubleSide,
      color: 0xffffff,
    });
    var leftWallWainScote = new THREE.Mesh(leftWainScoteGeo, leftWainScoteMaterial);
    leftWallWainScote.name = "c_b_l_w_ws";
    leftWallWainScote.morphTargets = true;
    leftWallWainScote.side = THREE.DoubleSide;
    leftWallWainScote.scale.set(1, 1, 1);
    leftWallWainScote.position.set(0, 0, 1);
    leftWallWainScote.rotation.y = Math.PI / -2;
    leftWallWainScote.visible = false;
    const_var.b_t_M_L.add(leftWallWainScote);


    //New Wall Geometry For Center Building Left Wall WainScote
    var l_s_s_w_wsGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
    var l_s_s_w_wsMaterial = new THREE.MeshPhongMaterial({
            /*map:LWtexture,*/ side: THREE.DoubleSide,
      color: 0xffffff,
    });
    var l_s_s_w_ws = new THREE.Mesh(l_s_s_w_wsGeo, l_s_s_w_wsMaterial);
    l_s_s_w_ws.name = "l_s_s_w_ws";
    l_s_s_w_ws.morphTargets = true;
    l_s_s_w_ws.side = THREE.DoubleSide;
    l_s_s_w_ws.scale.set(1, 1, 1);
    l_s_s_w_ws.position.set(0, 0, 1);
    l_s_s_w_ws.rotation.y = Math.PI / -2;
    l_s_s_w_ws.visible = false;
    const_var.b_t_M_L.add(l_s_s_w_ws);

    // const_var.wainscotsForCut.c_b_l_w_ws = leftWallWainScote.clone();
    // const_var.wainscotsForCut = leftWallWainScote.clone();

    //New Wall Geometry For Center Building Right Wall WainScote
    var rightGeoW = new THREE.PlaneGeometry(1, 1, 30, 30);
    var rightMaterialW = new THREE.MeshPhongMaterial({
            /*map:RWtexture,*/ side: THREE.DoubleSide,
      color: 0xffffff,
    });
    var rightWallW = new THREE.Mesh(rightGeoW, rightMaterialW);
    rightWallW.name = "c_b_r_w_ws";
    rightWallW.morphTargets = true;
    rightWallW.side = THREE.DoubleSide;
    rightWallW.scale.set(1, 1, 1);
    rightWallW.position.set(0, 0, 1);
    rightWallW.rotation.y = Math.PI / 2;
    rightWallW.visible = false;
    const_var.b_t_M_L.add(rightWallW);

        //New Wall Geometry For Center Building Right Wall WainScote
        var c_b_r_s_GeoW = new THREE.PlaneGeometry(1, 1, 30, 30);
        var c_b_r_s_MaterialW = new THREE.MeshPhongMaterial({
                /*map:RWtexture,*/ side: THREE.DoubleSide,
          color: 0xffffff,
        });
        var c_b_r_s_WallW = new THREE.Mesh(c_b_r_s_GeoW, c_b_r_s_MaterialW);
        c_b_r_s_WallW.name = "c_b_r_s_w_ws";
        c_b_r_s_WallW.morphTargets = true;
        c_b_r_s_WallW.side = THREE.DoubleSide;
        c_b_r_s_WallW.scale.set(1, 1, 1);
        c_b_r_s_WallW.position.set(0, 0, 1);
        c_b_r_s_WallW.rotation.y = Math.PI / 2;
        c_b_r_s_WallW.visible = false;
        const_var.b_t_M_L.add(c_b_r_s_WallW);
        
        //New Wall Geometry For Center Building Right Wall WainScote
        var c_b_f_s_r_w_GeoW = new THREE.PlaneGeometry(1, 1, 30, 30);
        var c_b_f_s_r_w_MaterialW = new THREE.MeshPhongMaterial({
                /*map:RWtexture,*/ side: THREE.DoubleSide,
          color: 0xffffff,
        });
        var c_b_f_s_r_WallW = new THREE.Mesh(c_b_f_s_r_w_GeoW, c_b_f_s_r_w_MaterialW);
        c_b_f_s_r_WallW.name = "c_b_f_s_s_w_ws";
        c_b_f_s_r_WallW.morphTargets = true;
        c_b_f_s_r_WallW.side = THREE.DoubleSide;
        c_b_f_s_r_WallW.scale.set(1, 1, 1);
        c_b_f_s_r_WallW.position.set(0, 0, 1);
        c_b_f_s_r_WallW.rotation.y = Math.PI / 2;
        c_b_f_s_r_WallW.visible = false;
        const_var.b_t_M_L.add(c_b_f_s_r_WallW);

        //New Wall Geometry For Center Building Front Wall WainScote
        var c_b_f_s_b_GeoW = new THREE.PlaneGeometry(1, 1, 30, 30);
        var c_b_f_s_b_MaterialW = new THREE.MeshPhongMaterial({
                /*map:FWtexture,*/ side: THREE.DoubleSide,
          color: 0xffffff,
        });
        var c_b_f_s_b_WallW = new THREE.Mesh(c_b_f_s_b_GeoW, c_b_f_s_b_MaterialW);
        c_b_f_s_b_WallW.name = "c_b_f_s_b_w_ws";
        c_b_f_s_b_WallW.morphTargets = true;
        c_b_f_s_b_WallW.side = THREE.DoubleSide;
        c_b_f_s_b_WallW.scale.set(1, 1, 1);
        c_b_f_s_b_WallW.position.set(0, 1, 1);
        //backWall.rotation.y= Math.PI / 2;
        c_b_f_s_b_WallW.visible = false;
        const_var.b_t_M_L.add(c_b_f_s_b_WallW);

    // const_var.wainscotsForCut = rightWallW.clone();
    // const_var.wainscotsForCut.c_b_r_w_ws = rightWallW.clone();

    //New Wall Geometry For Center Building Back Wall WainScote
    var backGeoW = new THREE.BoxGeometry(1, 1, 0.01);
    var backMaterialW = new THREE.MeshPhongMaterial({
            /*map:BWtexture,*/ side: THREE.DoubleSide,
      color: 0xffffff,
    });
    var backWallW = new THREE.Mesh(backGeoW, backMaterialW);
    backWallW.name = "c_b_b_w_ws";
    backWallW.morphTargets = true;
    backWallW.side = THREE.DoubleSide;
    backWallW.scale.set(1, 1, 1);
    backWallW.position.set(0, 0, 1);
    //backWall.rotation.y= Math.PI / 2;
    backWallW.visible = false;
    const_var.b_t_M_L.add(backWallW);
    // const_var.wainscotsForCut = backWallW.clone();
    // const_var.wainscotsForCut.c_b_b_w_ws = backWallW.clone();

    //New Wall Geometry For Center Building Front Wall WainScote
    var frontGeoW = new THREE.PlaneGeometry(1, 1, 30, 30);
    var frontMaterialW = new THREE.MeshPhongMaterial({
            /*map:FWtexture,*/ side: THREE.DoubleSide,
      color: 0xffffff,
    });
    var frontWallW = new THREE.Mesh(frontGeoW, frontMaterialW);
    frontWallW.name = "c_b_f_w_ws";
    frontWallW.morphTargets = true;
    frontWallW.side = THREE.DoubleSide;
    frontWallW.scale.set(1, 1, 1);
    frontWallW.position.set(0, 1, 1);
    //backWall.rotation.y= Math.PI / 2;
    frontWallW.visible = false;
    const_var.b_t_M_L.add(frontWallW);

        //New Wall Geometry For Center Building Front Wall WainScote
        var c_b_f_s_GeoW = new THREE.PlaneGeometry(1, 1, 30, 30);
        var c_b_f_s_MaterialW = new THREE.MeshPhongMaterial({
                /*map:FWtexture,*/ side: THREE.DoubleSide,
          color: 0xffffff,
        });
        var c_b_f_s_WallW = new THREE.Mesh(c_b_f_s_GeoW, c_b_f_s_MaterialW);
        c_b_f_s_WallW.name = "c_b_f_s_w_ws";
        c_b_f_s_WallW.morphTargets = true;
        c_b_f_s_WallW.side = THREE.DoubleSide;
        c_b_f_s_WallW.scale.set(1, 1, 1);
        c_b_f_s_WallW.position.set(0, 1, 1);
        //backWall.rotation.y= Math.PI / 2;
        c_b_f_s_WallW.visible = false;
        const_var.b_t_M_L.add(c_b_f_s_WallW);

    var l_s_f_w_wsGeoW = new THREE.PlaneGeometry(1, 1, 30, 30);
    var l_s_f_w_wsMaterialW = new THREE.MeshPhongMaterial({
            /*map:FWtexture,*/ side: THREE.DoubleSide,
      color: 0xffffff,
    });
    var l_s_f_w_ws = new THREE.Mesh(l_s_f_w_wsGeoW, l_s_f_w_wsMaterialW);
    l_s_f_w_ws.name = "l_s_f_w_ws";
    l_s_f_w_ws.morphTargets = true;
    l_s_f_w_ws.side = THREE.DoubleSide;
    l_s_f_w_ws.scale.set(1, 1, 1);
    l_s_f_w_ws.position.set(0, 1, 1);
    //backWall.rotation.y= Math.PI / 2;
    l_s_f_w_ws.visible = false;
    const_var.b_t_M_L.add(l_s_f_w_ws);

    var l_s_f_2w_wsGeoW = new THREE.PlaneGeometry(1, 1, 30, 30);
    var l_s_f_2w_wsMaterialW = new THREE.MeshPhongMaterial({
            /*map:FWtexture,*/ side: THREE.DoubleSide,
      color: 0xffffff,
    });
    var l_s_f_2w_ws = new THREE.Mesh(l_s_f_2w_wsGeoW, l_s_f_2w_wsMaterialW);
    l_s_f_2w_ws.name = "l_s_f_2w_ws";
    l_s_f_2w_ws.morphTargets = true;
    l_s_f_2w_ws.side = THREE.DoubleSide;
    l_s_f_2w_ws.scale.set(1, 1, 1);
    l_s_f_2w_ws.position.set(0, 1, 1);
    //backWall.rotation.y= Math.PI / 2;
    l_s_f_2w_ws.visible = false;
    const_var.b_t_M_L.add(l_s_f_2w_ws);


    var c_b_r_s_w_wsGeoW = new THREE.PlaneGeometry(1, 1, 30, 30);
    var c_b_r_s_w_wsMaterialW = new THREE.MeshPhongMaterial({
            /*map:FWtexture,*/ side: THREE.DoubleSide,
      color: 0xffffff,
    });
    var c_b_r_s_w_ws = new THREE.Mesh(c_b_r_s_w_wsGeoW, c_b_r_s_w_wsMaterialW);
    c_b_r_s_w_ws.name = "c_b_r_s_w_ws";
    c_b_r_s_w_ws.morphTargets = true;
    c_b_r_s_w_ws.side = THREE.DoubleSide;
    c_b_r_s_w_ws.scale.set(1, 1, 1);
    c_b_r_s_w_ws.position.set(0, 1, 1);
    //backWall.rotation.y= Math.PI / 2;
    c_b_r_s_w_ws.visible = false;
    const_var.b_t_M_L.add(c_b_r_s_w_ws);
    // const_var.wainscotsForCut.c_b_f_w_ws = frontWallW.clone();
    //  const_var.wainscotsForCut = frontWallW.clone();

    // New Wall Geometry For Free Standing Lean To Right Wall
    //  var f_S_L_RightWallGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
    let f_S_L_RightWallGeo = new THREE.BoxGeometry(1, 1, 0.01);
    var f_S_L_RightWallMaterial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide, shadowSide: THREE.DoubleSide,
      color: 0xffffff,

      dithering: true,
      combine: 2,
      // map:LWtexture
    });
    var f_S_L_RightWall = new THREE.Mesh(f_S_L_RightWallGeo, f_S_L_RightWallMaterial);
    f_S_L_RightWall.name = "F_S_L_R_W";
    f_S_L_RightWall.morphTargets = true;
    f_S_L_RightWall.side = THREE.DoubleSide;
    f_S_L_RightWall.scale.set(1, 1, 1);
    f_S_L_RightWall.position.set(0, 1, 0)
    f_S_L_RightWall.rotation.y = Math.PI / 2;
    f_S_L_RightWall.visible = false;
    const_var.b_t_M_L.add(f_S_L_RightWall);
    const_var.wallsForCut.F_S_L_R_W = f_S_L_RightWall.clone();


    //New Gable Geometry For Free Standing Lean To Front Gable
    var selectedObject = const_var.scene.getObjectByName("F_S_L_F_G");
    const_var.scene.remove(selectedObject);
    var f_S_LeanFrontGableGeometry = new THREE.BufferGeometry();
    var f_S_LeanFrontGableVertices = new Float32Array([
      0.5, 1, -0,         
      0.5, 1, -0.01,      
      0.5, 0, -0,       
      -0.5, 0, -0,      
      0.5, 0, -0.01,     
      -0.5, 0, -0.01,
    ]);
    if (params.p_v_w == true) {
      var f_S_LeanFrontGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
    } else {
      var f_S_LeanFrontGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0]);
    }

    f_S_LeanFrontGableGeometry.setAttribute("position", new THREE.BufferAttribute(f_S_LeanFrontGableVertices, 3));
    //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
    f_S_LeanFrontGableGeometry.setAttribute("uv", new THREE.BufferAttribute(f_S_LeanFrontGableUVS, 2));
    var wallTexture = horizontalTexture;
    if (params.p_v_w == true) {
      wallTexture = verticalTexture;//"Vertical-panel-white.jpg";//"verticalTexture.png";
    }
    else {
      wallTexture = horizontalTexture;//"Horizontal-panel-white.jpg";//"profile2.png";
    }

    f_S_LeanFrontGableGeometry.computeVertexNormals();
    var f_S_LeanFrontGableLoader = new THREE.TextureLoader();
    var texture1 = f_S_LeanFrontGableLoader.load(process.env.REACT_APP_BASE_URL+horizontalTexture, function (texture1) {
      texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
    })
    let f_S_LeanFrontGablematerial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
      color: 0xffffff,

      combine: 3, dithering: true,
      shadowSide: THREE.DoubleSide, aoMapIntensity: 0,

      map: FWtexture,
    });
    var f_S_LeanFrontGable = new THREE.Mesh(f_S_LeanFrontGableGeometry, f_S_LeanFrontGablematerial);
    f_S_LeanFrontGable.name = "F_S_L_F_G";
    f_S_LeanFrontGable.visible = false;
    // f_S_LeanFrontGable.scale.set(params.p_w, params.p_h, 1);
    // f_S_LeanFrontGable.position.set(0, params.p_h, 0);
    const_var.b_t_M_L.add(f_S_LeanFrontGable);
    const_var.wallsForCut.F_S_L_F_G = f_S_LeanFrontGable.clone();
    // }
    // );

    //New Gable Geometry For Free Standing Lean To Back Gable
    var selectedObject = const_var.scene.getObjectByName("F_S_L_B_G");
    const_var.scene.remove(selectedObject);
    var f_S_LeanBackGableGeometry = new THREE.BufferGeometry();
    var f_S_LeanBackGableVertices = new Float32Array([
      0.5, 1, -0,         
      0.5, 1, -0.01,      
      0.5, 0, -0,       
      -0.5, 0, -0,      
      0.5, 0, -0.01,     
      -0.5, 0, -0.01,
    ]);
    if (params.p_v_w == true) {
      var f_S_LeanBackGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
    } else {
      var f_S_LeanBackGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0]);
    }

    f_S_LeanBackGableGeometry.setAttribute("position", new THREE.BufferAttribute(f_S_LeanBackGableVertices, 3));
    //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
    f_S_LeanBackGableGeometry.setAttribute("uv", new THREE.BufferAttribute(f_S_LeanBackGableUVS, 2));
    var wallTexture = horizontalTexture;
    if (params.p_v_w == true) {
      wallTexture = verticalTexture;//"Vertical-panel-white.jpg";//"verticalTexture.png";
    }
    else {
      wallTexture = horizontalTexture;//"Horizontal-panel-white.jpg";//"profile2.png";
    }

    f_S_LeanBackGableGeometry.computeVertexNormals();
    var f_S_LeanBackGableLoader = new THREE.TextureLoader();
    var texture1 = f_S_LeanBackGableLoader.load(process.env.REACT_APP_BASE_URL+horizontalTexture, function (texture1) {
      texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
    })
    let f_S_LeanBackGablematerial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
      color: 0xffffff,

      combine: 3, dithering: true,
      shadowSide: THREE.DoubleSide, aoMapIntensity: 0,

      map: FWtexture,
    });

    var f_S_LeanBackGable = new THREE.Mesh(f_S_LeanBackGableGeometry, f_S_LeanBackGablematerial);
    f_S_LeanBackGable.name = "F_S_L_B_G";
    f_S_LeanBackGable.visible = false;
    // f_S_LeanBackGable.scale.set(params.p_w, params.p_h, 1);
    // f_S_LeanBackGable.position.set(0, params.p_h, 0);
    const_var.b_t_M_L.add(f_S_LeanBackGable);
    const_var.wallsForCut.F_S_L_B_G = f_S_LeanFrontGable.clone();

    //New Gable Geometry For Free Standing Lean To Front Storage Gable
    var selectedObject = const_var.scene.getObjectByName("F_S_L_F_S_G");
    const_var.scene.remove(selectedObject);
    var f_S_LeanFrontStorageGableGeometry = new THREE.BufferGeometry();
    var f_S_LeanFrontStorageGableVertices = new Float32Array([
      0.5, 1, -0,         
      0.5, 1, -0.01,      
      0.5, 0, -0,       
      -0.5, 0, -0,      
      0.5, 0, -0.01,     
      -0.5, 0, -0.01,
    ]);
    if (params.p_v_w == true) {
      var f_S_LeanFrontStorageGableUVS = new Float32Array([0.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
    } else {
      var f_S_LeanFrontStorageGableUVS = new Float32Array([-0.5, 0.0, 0.0, 0.0, 0.0, 1.0]);
    }

    f_S_LeanFrontStorageGableGeometry.setAttribute("position", new THREE.BufferAttribute(f_S_LeanFrontStorageGableVertices, 3));
    //geometry.setAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
    f_S_LeanFrontStorageGableGeometry.setAttribute("uv", new THREE.BufferAttribute(f_S_LeanFrontStorageGableUVS, 2));
    var wallTexture = horizontalTexture;
    if (params.p_v_w == true) {
      wallTexture = verticalTexture;//"Vertical-panel-white.jpg";//"verticalTexture.png";
    }
    else {
      wallTexture = horizontalTexture;//"Horizontal-panel-white.jpg";//"profile2.png";
    }

    f_S_LeanFrontStorageGableGeometry.computeVertexNormals();
    var f_S_LeanFrontStorageGableLoader = new THREE.TextureLoader();
    var texture1 = f_S_LeanFrontStorageGableLoader.load(process.env.REACT_APP_BASE_URL+horizontalTexture, function (texture1) {
      texture1.wrapT = texture1.wrapS = THREE.RepeatWrapping;
    })
    let f_S_LeanFrontStorageGablematerial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
      color: 0xffffff,

      combine: 3, dithering: true,
      shadowSide: THREE.DoubleSide, aoMapIntensity: 0,

      map: FWtexture,
    });

    let f_S_LeanFrontStorageGable = new THREE.Mesh(f_S_LeanFrontStorageGableGeometry, f_S_LeanFrontStorageGablematerial);
    f_S_LeanFrontStorageGable.name = "F_S_L_F_S_G";
    f_S_LeanFrontStorageGable.visible = false;
    // f_S_LeanFrontStorageGable.scale.set(params.p_w, params.p_h, 1);
    // f_S_LeanFrontStorageGable.position.set(0, params.p_h, 0);
    const_var.b_t_M_L.add(f_S_LeanFrontStorageGable);
    const_var.wallsForCut.F_S_L_F_S_G = f_S_LeanFrontStorageGable.clone();
    // }

      // let frontStorageGeo = new THREE.PlaneGeometry(1, 1, 30, 30);
      let frontStorageBackGeo = new THREE.BoxGeometry(1, 1, 0.01);;
      let frontStorageBackMaterial = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide, color: 0xffffff,
  
        combine: 3, dithering: true,
        shadowSide: THREE.DoubleSide, aoMapIntensity: 0,
        // map:FWtexture,
      });
      //New Wall Geometry For Center Building storage Front Wall
      let frontStorageBcakWall = new THREE.Mesh(frontStorageBackGeo, frontStorageBackMaterial);
      frontStorageBcakWall.name = "c_b_f_s_b_w";
      frontStorageBcakWall.morphTargets = true;
      frontStorageBcakWall.side = THREE.DoubleSide;
      frontStorageBcakWall.scale.set(1, 1, 1);
      frontStorageBcakWall.position.x = 0;
      frontStorageBcakWall.position.z = 0;
      frontStorageBcakWall.position.y = 1;
      //backWall.rotation.y= Math.PI / 2;
      frontStorageBcakWall.visible = false;
      const_var.b_t_M_L.add(frontStorageBcakWall);
      const_var.wallsForCut.c_b_f_s_b_w = frontStorageBcakWall.clone();

      let frontStorageLeftWallGeo = new THREE.BoxGeometry(1, 1, 0.01);;
      let frontStorageLeftWallMaterial = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide, shadowSide: THREE.DoubleSide,
        color: 0xffffff,
  
        dithering: true,
        combine: 2,
        // map:LWtexture
      });
      let frontStorageLeftWall = new THREE.Mesh(frontStorageLeftWallGeo, frontStorageLeftWallMaterial);
      frontStorageLeftWall.name = "c_b_f_s_l_w";
      frontStorageLeftWall.morphTargets = true;
      frontStorageLeftWall.side = THREE.DoubleSide;
      frontStorageLeftWall.scale.set(1, 1, 1);
      frontStorageLeftWall.position.set(0, 1, 0)
      frontStorageLeftWall.rotation.y = Math.PI / 2;
      frontStorageLeftWall.visible = false;
      const_var.b_t_M_L.add(frontStorageLeftWall);
      const_var.wallsForCut.c_b_f_s_l_w = frontStorageLeftWall.clone();

      let frontStorageRightWallGeo = new THREE.BoxGeometry(1, 1, 0.01);
      let frontStorageRightWallMaterial = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide, shadowSide: THREE.DoubleSide,
        color: 0xffffff,
  
        dithering: true,
        combine: 2,
        // map:RWtexture,
      });
      let frontStorageRightWall = new THREE.Mesh(frontStorageRightWallGeo, frontStorageRightWallMaterial /*rightMaterial*/);
      frontStorageRightWall.name = "c_b_f_s_r_w";
      frontStorageRightWall.morphTargets = true;
      frontStorageRightWall.side = THREE.DoubleSide;
      frontStorageRightWall.scale.set(1, 1, 1);
      frontStorageRightWall.position.set(0, 1, 1);
      frontStorageRightWall.rotation.y = Math.PI / 2;
      frontStorageRightWall.visible = false;
      const_var.b_t_M_L.add(frontStorageRightWall);
      const_var.wallsForCut.c_b_f_s_r_w = frontStorageRightWall.clone();


  let f_S_b_GableGeometry = new THREE.BufferGeometry();
  let f_S_b_GableVertices = new Float32Array([
    0, 1, -0,         //0
    0, 1, -0.01,      //0
    0.5, 0, -0,       //1
    -0.5, 0, -0,      //2
    0.5, 0, -0.01,    //1 
    -0.5, 0, -0.01,   //2
  ]);
  var index = new Uint32Array([
          0,2,4,
          0,4,1,
          1,4,5,
          5,4,2,
          5,2,3,
          3,0,1,
          3,1,5,
          3,2,0
  ]);
  if (params.p_v_w == true) {
    var f_S_b_GableUVS = new Float32Array([
      0.0, 1.0, 0.0, 0.0, -0.5, 0.0,
    ]);
  } else {
    var f_S_b_GableUVS = new Float32Array([
      0.0, 1.0, 0.0, 0.0, -0.5, 0.0,
    ]);
  }

  f_S_b_GableGeometry.setAttribute("position", new THREE.BufferAttribute(f_S_b_GableVertices, 3));
  f_S_b_GableGeometry.setIndex(new THREE.BufferAttribute( index, 1 ) )

  f_S_b_GableGeometry.setAttribute("uv", new THREE.BufferAttribute(f_S_b_GableUVS, 2));
  f_S_b_GableGeometry.computeVertexNormals();

  let nf_S_b_Gablematerial = new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide,
    color: 0xffffff,
    combine: 3, dithering: true,
    shadowSide: THREE.DoubleSide, aoMapIntensity: 0,
  });

  let f_S_b_Gable = new THREE.Mesh(f_S_b_GableGeometry, nf_S_b_Gablematerial);
  f_S_b_Gable.name = "f_S_b_Gable";
  f_S_b_Gable.visible = false;
  const_var.b_t_M_L.add(f_S_b_Gable);
  const_var.wallsForCut.f_S_b_Gable = f_S_b_Gable.clone();




		// j-trim
		let hcquad_vertices =
			[
        0, 0, -0.5,
        0, 2, -0.5,
        0, 2, 0.5,
        0, 0, 0.5,

        0, 2, -0.5,
        -0.02, 2, -0.5,
        -0.02, 2, 0.5,
        0, 2, 0.5,


        -0.02, 2, -0.5,
        -0.02, 0.02, -0.5,
        -0.02, 0.02, 0.5,
        -0.02, 2, 0.5,


        -0.02, 0.02, -0.5,
        -0.48, 0.02, -0.5,
        -0.48, 0.02, 0.5,
        -0.02, 0.02, 0.5,
        
        -0.48, 0.02, -0.5,
        -0.48, 1, -0.5,
        -0.48, 1, 0.5,
        -0.48, 0.02, 0.5,


        -0.48, 1, -0.5,
        -0.5, 1, -0.5,
        -0.5, 1, 0.5,
        -0.48, 1, 0.5,

        -0.5, 1, -0.5,
        -0.5, 0, -0.5,
        -0.5, 0, 0.5,
        -0.5, 1, 0.5,

        -0.5, 0, -0.5,
        0, 0, -0.5,
        0, 0, 0.5,
        -0.5, 0, 0.5,

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
      ];

  let hcquad_indices =
      [
        0, 1, 2,
        0, 2, 3,
        4, 5, 6,
        4, 6, 7,
        8, 9, 10,
        8, 10, 11,
        12, 13, 14,
        12, 14, 15,
        16, 17, 18,
        16, 18, 19,
        20, 21, 22,
        20, 22, 23,
        24, 25, 26,
        24, 26, 27,
        28, 29, 30,
        28, 30, 31,
      ];
      
		let jTrimGeometry = new THREE.BufferGeometry();

		let hcvertices = new Float32Array(hcquad_vertices);
		// Each vertex has one uv coordinate for texture mapping
		let hcuvs = new Float32Array(hcquad_uvs);
		// Use the four vertices to draw the two triangles that make up the square.
		let hcindices = new Uint32Array(hcquad_indices)

		// itemSize = 3 because there are 3 values (components) per vertex
		jTrimGeometry.setAttribute('position', new THREE.BufferAttribute(hcvertices, 3));
		jTrimGeometry.setAttribute('uv', new THREE.BufferAttribute(hcuvs, 2));
		jTrimGeometry.setIndex(new THREE.BufferAttribute(hcindices, 1));

		jTrimGeometry.computeVertexNormals();
		var rCalor = params.p_r_c.replace("#", "0x");


		const jTrimMaterial = new THREE.MeshBasicMaterial({
			color: 0xFF0000,
			reflectivity: 0.2, refractionRatio: 1, side: THREE.DoubleSide
		});

		let jTrim = new THREE.Mesh(jTrimGeometry, jTrimMaterial);
		jTrim.name = "jTrim";

		// jTrim.position.set(-0.2, 0, 0);
		// jTrim.scale.set(0.17,0.12, params.p_d);
		jTrim.visible = false;
		const_var.b_t_M_L.add(jTrim);


    		// j-trim
		let wtquad_vertices =
    [
      -0.15, -0.15, 0.5,
      0.0, 0.0, 0.5,
      0.0, 0.0, -0.5,
      -0.15, -0.15, -0.5,

      0, 0, 0.5,
      0, 0.5, 0.5,
      0, 0.5, -0.5,
      0, 0, -0.5,

      0, 0.5, 0.5,
      -0.075, 0.6, 0.5,
      -0.075, 0.6, -0.5,
      0, 0.5, -0.5,

      -0.075, 0.6, 0.5,
      -0.15, 0.6, 0.5,
      -0.15, 0.6, -0.5,
      -0.075, 0.6, -0.5,

      -0.15, 0.6, 0.5,
      -0.15, -0.15, 0.5,
      -0.15, -0.15, -0.5,
      -0.15, 0.6, -0.5,

    ];

  let wtquad_uvs =
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
      

    ];

  let wtquad_indices =
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

  let wainscotTrimGeometry = new THREE.BufferGeometry();

  let wtvertices = new Float32Array(wtquad_vertices);
  // Each vertex has one uv coordinate for texture mapping
  let wtuvs = new Float32Array(wtquad_uvs);
  // Use the four vertices to draw the two triangles that make up the square.
  let wtindices = new Uint32Array(wtquad_indices)

  // itemSize = 3 because there are 3 values (components) per vertex
  wainscotTrimGeometry.setAttribute('position', new THREE.BufferAttribute(wtvertices, 3));
  wainscotTrimGeometry.setAttribute('uv', new THREE.BufferAttribute(wtuvs, 2));
  wainscotTrimGeometry.setIndex(new THREE.BufferAttribute(wtindices, 1));

  wainscotTrimGeometry.computeVertexNormals();
  var rCalor = params.p_r_c.replace("#", "0x");


  const wainscotTrimMaterial = new THREE.MeshPhongMaterial({
    color: 0xFF0000,
    reflectivity: 0.8, refractionRatio: 1, side: THREE.DoubleSide
  });

  let wainscotTrim = new THREE.Mesh(wainscotTrimGeometry, wainscotTrimMaterial);
  wainscotTrim.name = "wainscotTrim";

  // wainscotTrim.position.set(-0.2, 0, 0);
  // wainscotTrim.scale.set(0.17,0.12, params.p_d);
  wainscotTrim.visible = false;
  const_var.b_t_M_L.add(wainscotTrim);


    // const_var.crmSetting.main_domain_url = "allsteelstructure.com"
    let waterMarkLogo = ""
    if(const_var.loginSession==false && (const_var.showNonLoginWaterMark.includes( const_var.crmSetting.main_domain_url))){
      waterMarkLogo = const_var.crmSetting.main_domain_url !== undefined && const_var.crmSetting.main_domain_url.split('.')[0];
    }else if(const_var.loginSession==true && const_var.selectWaterMarkByMNF[const_var.crmSetting.api_token]!=undefined){
      waterMarkLogo = const_var.selectWaterMarkByMNF[const_var.crmSetting.api_token];
    }
    waterMarkLogo = waterMarkLogo !== "cibirix" ? waterMarkLogo : "" ;
  
    if(waterMarkLogo != "" && waterMarkLogo != undefined){
  
      try{
        let fileURL = require(`../../assets/images/newWatermark/${waterMarkLogo}.svg`).default;
  
        var img = new Image();
        img.src = fileURL;
  
        // Set the onload event handler
        img.onload = function() {
          // Get the width and height of the image
          params.logoWidth = (this.width/1000)/20;
          params.logoHeight = (this.height/1000)/20;
  
          if(const_var.crmSetting.main_domain_url == "eaglebuildings.com"){
            params.logoWidth = this.width;
            params.logoHeight = this.height;
          }
  
        };
      } catch (error) {
        console.log("Error loading file:", error)
      }
  
    }
    

  let manufacturerLogoFrontGeo = new THREE.PlaneGeometry(1, 1,400,400);
  let manufacturerLogoFrontMaterial = new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide,
    shininess: 1,
    transparent: true,                        
    opacity:1.0   
  });
  let manufacturerLogoFront = new THREE.Mesh(manufacturerLogoFrontGeo, manufacturerLogoFrontMaterial);
  manufacturerLogoFront.visible = false;
  manufacturerLogoFront.name = "manufacturerLogoFront";
  const_var.scene.add(manufacturerLogoFront);

  let manufacturerLogoBackGeo = new THREE.PlaneGeometry(1, 1,400,400);
  let manufacturerLogoBackaterial = new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide,
    shininess: 1,
    transparent: true,                        
    opacity:1.0   
  });
  let manufacturerLogoBack = new THREE.Mesh(manufacturerLogoBackGeo, manufacturerLogoBackaterial);
  manufacturerLogoBack.visible = false;
  manufacturerLogoBack.name = "manufacturerLogoBack";
  const_var.scene.add(manufacturerLogoBack);

  let manufacturerLogoCenterGeo = new THREE.PlaneGeometry(1, 1,400,400);
  let manufacturerLogoCenteraterial = new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide,
    shininess: 1,
    transparent: true,                        
    opacity:1.0   
  });
  let manufacturerLogoCenter = new THREE.Mesh(manufacturerLogoCenterGeo, manufacturerLogoCenteraterial);
  manufacturerLogoCenter.visible = false;
  manufacturerLogoCenter.name = "manufacturerLogoCenter";
  const_var.scene.add(manufacturerLogoCenter);


  }

  render() {
    return <div ref={ref => (this.mount = ref)} />;
  }
}     