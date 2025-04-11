import * as THREE from "three";
import verticalTexture from '../../assets/images/imgTextures/buildingImages/verticalTexture.jpeg';
import horizontalTexture from '../../assets/images/imgTextures/buildingImages/horizantalTexture.jpeg';
import { params, const_var, } from '../../redux/reducers/reducer';

export const updateCenterBuildingPorches = () => {
    if ("undefined" != typeof const_var.scene.getObjectByName("CB_R_F_P_Roof")) const_var.scene.remove(const_var.scene.getObjectByName("CB_R_F_P_Roof"));
	if ("undefined" != typeof const_var.scene.getObjectByName("CB_L_F_P_Roof")) const_var.scene.remove(const_var.scene.getObjectByName("CB_L_F_P_Roof"));
	if ("undefined" != typeof const_var.scene.getObjectByName("CB_R_B_P_Roof")) const_var.scene.remove(const_var.scene.getObjectByName("CB_R_B_P_Roof"));
	if ("undefined" != typeof const_var.scene.getObjectByName("CB_L_B_P_Roof")) const_var.scene.remove(const_var.scene.getObjectByName("CB_L_B_P_Roof"));
	
    const CB_R_F_P_Roof = new THREE.Group();
	CB_R_F_P_Roof.name = "CB_R_F_P_Roof";
	const_var.scene.add(CB_R_F_P_Roof);

	const CB_L_F_P_Roof = new THREE.Group();
	CB_L_F_P_Roof.name = "CB_L_F_P_Roof";
	const_var.scene.add(CB_L_F_P_Roof);

	const CB_R_B_P_Roof = new THREE.Group();
	CB_R_B_P_Roof.name = "CB_R_B_P_Roof";
	const_var.scene.add(CB_R_B_P_Roof);

	const CB_L_B_P_Roof = new THREE.Group();
	CB_L_B_P_Roof.name = "CB_L_B_P_Roof";
	const_var.scene.add(CB_L_B_P_Roof);

    /*Right Front Porch Roof*/
    if (const_var.R_F_P.getObjectByName("RFPorch")!=undefined) {
        let RFPorch = const_var.R_F_P.getObjectByName("RFPorch").clone();
            let quad_vertices =
            [
            -params.r_f_p_w,  0.0, 5,
            0,  0.0, 5,
            0, 2, -0.0,
            -params.r_f_p_w, 2, -0.0,
        
            5,  0.0, 5,
            0,  0.0, 5,
            0.0, 2, 0.0,
            5, 0, 0.0,
            
            5,  0.0, -params.r_f_p_d,
            5,  0.0, 0,
            0.0, 2, 0,
            0.0, 2, -params.r_f_p_d
            ];
            if(params.p_r_s=="3"){
            var quad_uvs =
            [
                0.0, 0.0,
                1.0+(0.2*(params.r_f_p_w-5)), 0.0,
                1+(0.2*(params.r_f_p_w-5)), 1.0+(0.2*(params.r_f_p_w-5)),
                0.0, 1+(0.2*(params.r_f_p_w-5)),
        
                0.0, 0.0,
                -1.0, 0.0,
                -1.0, -1.0,
                -1.0, -1.0,
            
                0.0, 0.0,
                1.0+(0.2*(params.r_f_p_d-5)), 0.0,
                1.0+(0.2*(params.r_f_p_d-5)), 1.0+(0.2*(params.r_f_p_d-5)),
                0.0, 1.0+(0.2*(params.r_f_p_d-5))
            ];
        } else { 
            var quad_uvs =
            [
                0.0, 0.0,
                1.0, 0.0,
                1.0, 1.0,
                0.0, 1.0,
        
                0.0, -1.0,
                -1.0, -1.0,
                -1.0, 0.0,
                0.0, -1.0,
            
                0.0, 0.0,
                1.0, 0.0,
                1.0, 1.0,
                0.0, 1.0
            ];
        }
            let vertices = new Float32Array( quad_vertices );
            let uvs = new Float32Array( quad_uvs);
           RFPorch.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
           RFPorch.geometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
                let roofImg = verticalTexture;
                if(params.p_r_s=="3") {
                    roofImg = verticalTexture;
                } else {
                    roofImg = horizontalTexture;
                }
                let rCalor = params.p_r_c.replace("#","0x");   
                RFPorch.position.set(params.p_w/2,params.p_h-2,params.p_d/2);
                RFPorch.material.color.setHex( rCalor );
                RFPorch.visible = (params.add_right_front_porch==true)?true:false;
                let RFPorchloader = new THREE.TextureLoader();
                let texture = RFPorchloader.load(roofImg, function(texture1) {
                   texture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 16);
                   texture.wrapS = THREE.RepeatWrapping; 
                   texture.wrapT = THREE.RepeatWrapping;
                RFPorch.material.map = texture1;
                //RFPorch.material.envMap = texture1;
                RFPorch.material.emissiveMap = texture1;
                RFPorch.material.emissiveIntensity = 1;
                if(params.p_r_s=="3"){
                    RFPorch.material.map.repeat.set(-5,1);
                } else {
                    RFPorch.material.map.repeat.set(1,1.5);
                }
            });
            CB_R_F_P_Roof.add(RFPorch);
    }
    /*Center Building RFPorch Left trim*/
    if (const_var.R_F_P.getObjectByName("RFPLeftTrim") == undefined) {
        let RFPLeftTrim = const_var.R_F_P.getObjectByName("RFPTrim").clone();
        RFPLeftTrim.name = "RFPLeftTrim";
        RFPLeftTrim.scale.set(0.2,0.2,5.4);
        RFPLeftTrim.position.set(params.p_w/2-params.r_f_p_w,params.p_h-1,params.p_d/2+2.5);
        RFPLeftTrim.rotation.x = 0.4;
        RFPLeftTrim.visible = (params.add_right_front_porch != true || params.l_f_p_w >= params.p_w-params.r_f_p_w || params.r_f_p_w >= params.p_w-params.l_f_p_w)?false:true;
        CB_R_F_P_Roof.add(RFPLeftTrim);
    }

    /*Center Building RFPorch Back trim*/
    if (const_var.R_F_P.getObjectByName("RFPBackTrim")== undefined) {
        let RFPBackTrim = const_var.R_F_P.getObjectByName("RFPTrim").clone();
        RFPBackTrim.name = "RFPBackTrim";
        RFPBackTrim.scale.set(5.4,0.2,0.2);
        RFPBackTrim.position.set(params.p_w/2+2.5,params.p_h-1,params.p_d/2-params.r_f_p_d);
        RFPBackTrim.rotation.z = -0.4;
        RFPBackTrim.visible = (params.add_right_front_porch == true)?true:false;
        CB_R_F_P_Roof.add(RFPBackTrim);
    }
    
    /*Center Building RFPorch Front trim*/
    if (const_var.R_F_P.getObjectByName("RFPFrontTrim")== undefined) {
        let RFPFrontTrim = const_var.R_F_P.getObjectByName("RFPTrim").clone();
        RFPFrontTrim.name = "RFPFrontTrim";
        RFPFrontTrim.scale.set(5.2+params.r_f_p_w,0.2,0.2);
        RFPFrontTrim.visible = (params.add_right_front_porch == true)?true:false;
        RFPFrontTrim.position.set(params.p_w/2-((params.r_f_p_w-5)/2),params.p_h-2.04,params.p_d/2+5.05);
        CB_R_F_P_Roof.add(RFPFrontTrim);
    }
    /*Center Building RFPorch Right trim*/
    if (const_var.R_F_P.getObjectByName("RFPRightTrim")== undefined) {
        let RFPRightTrim = const_var.R_F_P.getObjectByName("RFPTrim").clone();
        RFPRightTrim.name = "RFPRightTrim";
        RFPRightTrim.scale.set(0.2,0.2,5.2+params.r_f_p_d);
        RFPRightTrim.position.set(params.p_w/2+5.05,params.p_h-2.04,params.p_d/2-((params.r_f_p_d-5)/2));
        RFPRightTrim.visible = (params.add_right_front_porch == true)?true:false;
        CB_R_F_P_Roof.add(RFPRightTrim);
    }
    /*Center Building RFPorch Front Small trim*/
    if (const_var.R_F_P.getObjectByName("RFPLeftSmallTrim")== undefined) {
        let RFPLeftSmallTrim = const_var.R_F_P.getObjectByName("RFPTrim").clone();
        RFPLeftSmallTrim.name = "RFPLeftSmallTrim";
        RFPLeftSmallTrim.scale.set(0.2,0.5,0.2);
        RFPLeftSmallTrim.position.set(params.p_w/2-params.r_f_p_w,params.p_h-2.25,params.p_d/2+5);
        RFPLeftSmallTrim.visible = (params.add_right_front_porch == true)?true:false;
        CB_R_F_P_Roof.add(RFPLeftSmallTrim);
    }
    /*Center Building RFPorch Right Small trim*/
    if (const_var.R_F_P.getObjectByName("RFPRightSmallTrim")== undefined) {
        let RFPRightSmallTrim = const_var.R_F_P.getObjectByName("RFPTrim").clone();
        RFPRightSmallTrim.name = "RFPRightSmallTrim";
        RFPRightSmallTrim.scale.set(0.2,0.5,0.2);
        RFPRightSmallTrim.position.set(params.p_w/2+5,params.p_h-2.25,params.p_d/2+5);
        RFPRightSmallTrim.visible = (params.add_right_front_porch == true)?true:false;
        CB_R_F_P_Roof.add(RFPRightSmallTrim);
    }

      /*Center Building RFPorch Back Small trim*/
     if (const_var.R_F_P.getObjectByName("RFPBackSmallTrim")== undefined) {
         let RFPBackSmallTrim = const_var.R_F_P.getObjectByName("RFPTrim").clone();
        RFPBackSmallTrim.name = "RFPBackSmallTrim";
        RFPBackSmallTrim.scale.set(0.2,0.5,0.2);
        RFPBackSmallTrim.position.set(params.p_w/2+5,params.p_h-2.25,params.p_d/2-params.r_f_p_d);
        RFPBackSmallTrim.visible = (params.add_right_front_porch == true)?true:false;
        CB_R_F_P_Roof.add(RFPBackSmallTrim);
    }

    /*Center Building Right Front Porch Front Wall*/
    if (const_var.R_F_P.getObjectByName("R_F_P_F_W")!=undefined) {
        let RFPorchFrontWall = const_var.R_F_P.getObjectByName("R_F_P_F_W").clone();
    
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
        RFPorchFrontWall.scale.set(5+params.r_f_p_w, 0.5, 0);
        RFPorchFrontWall.position.x = params.p_w/2-((params.r_f_p_w-5)/2);
        RFPorchFrontWall.position.z = params.p_d/2+5;
        RFPorchFrontWall.position.y = params.p_h-2.25;
        //backWall.rotation.y= Math.PI / 2;
        RFPorchFrontWall.visible = (params.add_right_front_porch==true)?true:false;
        let RFPorchFrontWallLoader = new THREE.TextureLoader();
        let RFPorchFrontWallTexture = RFPorchFrontWallLoader.load( wallTexture, function(texture) {
            //RFPorchFrontWall.material.envMap = texture;
            RFPorchFrontWall.material.emissiveMap = texture;
            RFPorchFrontWall.material.emissiveIntensity = 1;
            RFPorchFrontWall.material.map = texture;
            RFPorchFrontWall.material.map.wrapS = THREE.RepeatWrapping;
            RFPorchFrontWall.material.map.wrapT = THREE.RepeatWrapping;
            RFPorchFrontWall.material.map.offset.x = params.p_w;
            RFPorchFrontWall.material.map.offset.y = params.p_w;
            if(params.p_v_w==true) {
              RFPorchFrontWall.material.map.repeat.set(0.15,0.15);
            } else {
              RFPorchFrontWall.material.map.repeat.set(0.15,0.15);
            }
          }
          )
          CB_R_F_P_Roof.add(RFPorchFrontWall);
    }
    /*Center Building Right Front Porch Right Wall*/
    if (const_var.R_F_P.getObjectByName("R_F_P_R_W")!=undefined) {
        let RFPorchRighttWall = const_var.R_F_P.getObjectByName("R_F_P_R_W").clone();
    
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
        RFPorchRighttWall.scale.set(5+params.r_f_p_d, 0.5, 0);
        RFPorchRighttWall.position.set(params.p_w/2+5,params.p_h-2.25,params.p_d/2-((params.r_f_p_d-5)/2));
        RFPorchRighttWall.rotation.y = Math.PI/2;
        RFPorchRighttWall.visible = (params.add_right_front_porch==true)?true:false;
        let RFPorchRighttWallLoader = new THREE.TextureLoader();
        let RFPorchRighttWallTexture = RFPorchRighttWallLoader.load( wallTexture, function(texture) {
            //RFPorchRighttWall.material.envMap = texture;
            RFPorchRighttWall.material.emissiveMap = texture;
            RFPorchRighttWall.material.emissiveIntensity = 1;
            RFPorchRighttWall.material.map = texture;
            RFPorchRighttWall.material.map.wrapS = THREE.RepeatWrapping;
            RFPorchRighttWall.material.map.wrapT = THREE.RepeatWrapping;
            RFPorchRighttWall.material.map.offset.x = params.p_w;
            RFPorchRighttWall.material.map.offset.y = params.p_w;
            if(params.p_v_w==true)
            {
              RFPorchRighttWall.material.map.repeat.set(0.15,0.15);
            }else
            {
              RFPorchRighttWall.material.map.repeat.set(0.15,0.15);
            }
          }
          )
          CB_R_F_P_Roof.add(RFPorchRighttWall);
    }
     /*Center Building 4 vertices Back Gable For Right Front Porch*/
     if (const_var.R_F_P.getObjectByName("R_F_P_L_G")!=undefined) {
        let RFPorchLeftGable = const_var.R_F_P.getObjectByName("R_F_P_L_G").clone();
    
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
        let RFPorchLeftGableLoader = new THREE.TextureLoader();
        // let RFPorchLeftGableTexture = RFPorchLeftGableLoader.load( wallTexture, function(texture) {
            let quad_vertices =
            [
              //botom left
              params.p_w/2-params.r_f_p_w,params.p_h-2.5,params.p_d/2,
              //botom right
              params.p_w/2-params.r_f_p_w,params.p_h-2.5,params.p_d/2+5,
              //top right
              params.p_w/2-params.r_f_p_w,params.p_h-2,params.p_d/2+5,
              //top left
              params.p_w/2-params.r_f_p_w,params.p_h,params.p_d/2,
            
            ];
            let vertices = new Float32Array( quad_vertices );
            RFPorchLeftGable.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
            RFPorchLeftGable.visible = (params.add_right_front_porch==true)?true:false;;
          // }
          // )
          CB_R_F_P_Roof.add(RFPorchLeftGable);
    }
     /*Center Building 4 vertices Back Gable For Right Front Porch*/
     if (const_var.R_F_P.getObjectByName("R_F_P_B_G")!=undefined) {
        let RFPorchBackGable = const_var.R_F_P.getObjectByName("R_F_P_B_G").clone();
    
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
        let RFPorchBackGableLoader = new THREE.TextureLoader();
        // let RFPorchBackGableTexture = RFPorchBackGableLoader.load( wallTexture, function(texture) {
            let quad_vertices =
            [
               //botom left
               params.p_w/2,params.p_h-2.5,params.p_d/2-params.r_f_p_d,
               //botom right
               params.p_w/2+5,params.p_h-2.5,params.p_d/2-params.r_f_p_d,
               //top right
               params.p_w/2+5,params.p_h-2,params.p_d/2-params.r_f_p_d,
               //top left
               params.p_w/2,params.p_h,params.p_d/2-params.r_f_p_d,
            
            ];
            let vertices = new Float32Array( quad_vertices );
            RFPorchBackGable.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
            RFPorchBackGable.visible = (params.add_right_front_porch==true)?true:false;;
            CB_R_F_P_Roof.add(RFPorchBackGable);
      //   }
      //  )
    }

    /*Left Front Porch Roof*/
    if (const_var.L_F_P.getObjectByName("LFPorch")!=undefined) {
        let LFPorch = const_var.L_F_P.getObjectByName("LFPorch").clone();
        let quad_vertices =
        [
        -params.l_f_p_d,  0.0, 5,
        0,  0.0, 5,
        0, 2, -0.0,
        -params.l_f_p_d, 2, -0.0,
    
        5,  0.0, 5,
        0,  0.0, 5,
        0.0, 2, 0.0,
        5, 0, 0.0,
        
        5,  0.0, -params.l_f_p_w,
        5,  0.0, 0,
        0.0, 2, 0,
        0.0, 2, -params.l_f_p_w
        ];
        if(params.p_r_s=="3"){
        var quad_uvs =
        [
            0.0, 0.0,
            1.0+(0.2*(params.l_f_p_d-5)), 0.0,
            1+(0.2*(params.l_f_p_d-5)), 1.0+(0.2*(params.l_f_p_d-5)),
            0.0, 1+(0.2*(params.l_f_p_d-5)),
    
            0.0, 0.0,
            -1.0, 0.0,
            -1.0, -1.0,
            -1.0, -1.0,
        
            0.0, 0.0,
            1.0+(0.2*(params.l_f_p_w-5)), 0.0,
            1.0+(0.2*(params.l_f_p_w-5)), 1.0+(0.2*(params.l_f_p_w-5)),
            0.0, 1.0+(0.2*(params.l_f_p_w-5))
        ];
    }else{ 
        var quad_uvs =
        [
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
    
            0.0, -1.0,
            -1.0, -1.0,
            -1.0, 0.0,
            0.0, -1.0,
        
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0
        ];
    }
        let vertices = new Float32Array( quad_vertices );
        let uvs = new Float32Array( quad_uvs);
        LFPorch.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
        LFPorch.geometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
            let roofImg = verticalTexture;
            if(params.p_r_s=="3") {
                roofImg = verticalTexture;
            } else {
                roofImg = horizontalTexture;
            }
            let LFPorchloader = new THREE.TextureLoader();
            let texture1 = LFPorchloader.load(roofImg, function(texture1) {
               texture1.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 16);
               texture1.wrapS = THREE.RepeatWrapping; 
               texture1.wrapT = THREE.RepeatWrapping;
               LFPorch.material.map = texture1;
            //LFPorch.material.envMap = texture1;
            LFPorch.material.emissiveMap = texture1;
            LFPorch.material.emissiveIntensity = 1;
            if(params.p_r_s=="3"){
              LFPorch.material.map.repeat.set(-5,1);
            } else {
                LFPorch.material.map.repeat.set(1,1.5);
            }
            });
           let rCalor = params.p_r_c.replace("#","0x");   

            LFPorch.position.set(params.p_w/-2,params.p_h-2,params.p_d/2);
            LFPorch.rotation.y = Math.PI/-2
            
            LFPorch.visible = (params.add_left_front_porch==true)?true:false;
          
            LFPorch.material.color.setHex( rCalor );
            CB_L_F_P_Roof.add(LFPorch);
    }
    /*Center Building LFPorch  Right trim*/
    if (const_var.L_F_P.getObjectByName("LFPRightTrim")== undefined) {
        let LFPRightTrim = const_var.L_F_P.getObjectByName("LFPTrim").clone();
        LFPRightTrim.name = "LFPRightTrim";
        LFPRightTrim.scale.set(0.2,0.2,5.4);
        LFPRightTrim.position.set(params.p_w/-2+params.l_f_p_w,params.p_h-1,params.p_d/2+2.5);
        LFPRightTrim.rotation.x = 0.4;
        LFPRightTrim.visible = (params.add_left_front_porch != true|| params.l_f_p_w >= params.p_w-params.r_f_p_w || params.r_f_p_w >= params.p_w-params.l_f_p_w)?false:true;
        CB_L_F_P_Roof.add(LFPRightTrim);
    }

    /*Center Building LFPorch Back trim*/
    if (const_var.L_F_P.getObjectByName("LFPBackTrim")== undefined) {
        let LFPBackTrim = const_var.L_F_P.getObjectByName("LFPTrim").clone();
        LFPBackTrim.name = "LFPBackTrim";
        LFPBackTrim.scale.set(5.4,0.2,0.2);
        LFPBackTrim.position.set(params.p_w/-2-2.5,params.p_h-1,params.p_d/2-params.l_f_p_d);
        LFPBackTrim.rotation.z = 0.4;
        LFPBackTrim.visible = (params.add_left_front_porch == true)?true:false;
        CB_L_F_P_Roof.add(LFPBackTrim);
    }

     /*Center Building LFPorch Front trim*/
     if (const_var.L_F_P.getObjectByName("LFPFrontTrim")== undefined) {
         let LFPFrontTrim = const_var.L_F_P.getObjectByName("LFPTrim").clone();
         LFPFrontTrim.name = "LFPFrontTrim";
         LFPFrontTrim.scale.set(5.2+params.l_f_p_w,0.2,0.2);
         LFPFrontTrim.visible = (params.add_left_front_porch == true)?true:false;
         LFPFrontTrim.position.set(params.p_w/-2+((params.l_f_p_w-5)/2),params.p_h-2.04,params.p_d/2+5.05);
         CB_L_F_P_Roof.add(LFPFrontTrim);
     }
     /*Center Building LFPorch Left trim*/
     if (const_var.L_F_P.getObjectByName("LFPLeftTrim")== undefined) {
         let LFPLeftTrim = const_var.L_F_P.getObjectByName("LFPTrim").clone();
         LFPLeftTrim.name = "LFPLeftTrim";
         LFPLeftTrim.scale.set(0.2,0.2,5.2+params.l_f_p_d);
         LFPLeftTrim.position.set(params.p_w/-2-5.05,params.p_h-2.04,params.p_d/2-((params.l_f_p_d-5)/2));
         LFPLeftTrim.visible = (params.add_left_front_porch == true)?true:false;
         CB_L_F_P_Roof.add(LFPLeftTrim);
     }
     /*Center Building LFPorch Right Small trim*/
     if (const_var.L_F_P.getObjectByName("LFPRightSmallTrim")== undefined) {
         let LFPRightSmallTrim = const_var.L_F_P.getObjectByName("LFPTrim").clone();
         LFPRightSmallTrim.name = "LFPRightSmallTrim";
         LFPRightSmallTrim.scale.set(0.2,0.5,0.2);
         LFPRightSmallTrim.position.set(params.p_w/-2+params.l_f_p_w,params.p_h-2.25,params.p_d/2+5);
         LFPRightSmallTrim.visible = (params.add_left_front_porch == true)?true:false
         CB_L_F_P_Roof.add(LFPRightSmallTrim);
     }
     /*Center Building LFPorch Left Small trim*/
     if (const_var.L_F_P.getObjectByName("LFPLeftSmallTrim")== undefined) {
         let LFPLeftSmallTrim = const_var.L_F_P.getObjectByName("LFPTrim").clone();
         LFPLeftSmallTrim.name = "LFPLeftSmallTrim";
         LFPLeftSmallTrim.scale.set(0.2,0.5,0.2);
         LFPLeftSmallTrim.position.set(params.p_w/-2-5,params.p_h-2.25,params.p_d/2+5);
         LFPLeftSmallTrim.visible = (params.add_left_front_porch == true)?true:false;
         CB_L_F_P_Roof.add(LFPLeftSmallTrim);
     }     
    /*Center Building LFPorch Back Small trim*/
     if (const_var.L_F_P.getObjectByName("LFPBackSmallTrim")== undefined) {
         let LFPBackSmallTrim = const_var.L_F_P.getObjectByName("LFPTrim").clone();
        LFPBackSmallTrim.name = "LFPBackSmallTrim";
        LFPBackSmallTrim.scale.set(0.2,0.5,0.2);
        LFPBackSmallTrim.position.set(params.p_w/-2-5,params.p_h-2.25,params.p_d/2-params.l_f_p_d);
        LFPBackSmallTrim.visible = (params.add_left_front_porch == true)?true:false;
         CB_L_F_P_Roof.add(LFPBackSmallTrim);
    }
    /*Center Building 4 vertices Back Gable For Left Front Porch*/
     if (const_var.L_F_P.getObjectByName("L_F_P_B_G")!=undefined) {
        let LFPorchBackGable = const_var.L_F_P.getObjectByName("L_F_P_B_G").clone();
    
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
        let LFPorchBackGableLoader = new THREE.TextureLoader();
        let LFPorchBackGableTexture = LFPorchBackGableLoader.load( wallTexture, function(texture) {})
            let quad_vertices =
            [
              //botom left
              params.p_w/-2,params.p_h-2.5,params.p_d/2-params.l_f_p_d,
              //botom right
              params.p_w/-2-5,params.p_h-2.5,params.p_d/2-params.l_f_p_d,
              //top right
              params.p_w/-2-5,params.p_h-2,params.p_d/2-params.l_f_p_d,
              //top left
              params.p_w/-2,params.p_h,params.p_d/2-params.l_f_p_d,
            
            ];
            let vertices = new Float32Array( quad_vertices );
           LFPorchBackGable.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
           LFPorchBackGable.visible = (params.add_left_front_porch==true)?true:false;;
       
        CB_L_F_P_Roof.add(LFPorchBackGable);
    }
     /*Center Building 4 vertices Left Gable For Left Front Porch*/
     if (const_var.L_F_P.getObjectByName("L_F_P_R_G")!=undefined) {
        let LFPorchLeftGable = const_var.L_F_P.getObjectByName("L_F_P_R_G").clone();
    
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
        let LFPorchLeftGableLoader = new THREE.TextureLoader();
        let LFPorchLeftGableTexture = LFPorchLeftGableLoader.load( wallTexture, function(texture) {})
            let quad_vertices =
             [
               //botom left
               params.p_w/-2+params.l_f_p_w,params.p_h-2.5,params.p_d/2,
               //botom right
               params.p_w/-2+params.l_f_p_w,params.p_h-2.5,params.p_d/2+5,
               //top right
               params.p_w/-2+params.l_f_p_w,params.p_h-2,params.p_d/2+5,
               //top left
               params.p_w/-2+params.l_f_p_w,params.p_h,params.p_d/2,
             
             ];
             let vertices = new Float32Array( quad_vertices );
             LFPorchLeftGable.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
             LFPorchLeftGable.visible = (params.add_left_front_porch==true)?true:false;;

        CB_L_F_P_Roof.add(LFPorchLeftGable);
    }
     /*Center Building 4 vertices Left Gable For Left Front Porch*/
     if (const_var.L_F_P.getObjectByName("L_F_P_R_W")!=undefined) {
        let LFPorchRightWall = const_var.L_F_P.getObjectByName("L_F_P_R_W").clone();
    
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
       LFPorchRightWall.scale.set(5+params.l_f_p_d, 0.5, 0);
       LFPorchRightWall.position.set(params.p_w/-2-5,params.p_h-2.25,params.p_d/2-((params.l_f_p_d-5)/2));
       LFPorchRightWall.rotation.y = Math.PI/2;
       LFPorchRightWall.visible = (params.add_left_front_porch==true)?true:false;
        let LFPorchRightWallLoader = new THREE.TextureLoader();
        let LFPorchRightWallTexture = LFPorchRightWallLoader.load( wallTexture, function(texture) {
           //LFPorchRightWall.material.envMap = texture;
           LFPorchRightWall.material.emissiveMap = texture;
           LFPorchRightWall.material.emissiveIntensity = 1;
           LFPorchRightWall.material.map = texture;
           LFPorchRightWall.material.map.wrapS = THREE.RepeatWrapping;
           LFPorchRightWall.material.map.wrapT = THREE.RepeatWrapping;
           LFPorchRightWall.material.map.offset.x = params.p_w;
           LFPorchRightWall.material.map.offset.y = params.p_w;
            if(params.p_v_w==true)
            {
             LFPorchRightWall.material.map.repeat.set(0.15,0.15);
            }else
            {
             LFPorchRightWall.material.map.repeat.set(0.15,0.15);
            }
      } )
        CB_L_F_P_Roof.add(LFPorchRightWall);
    }
     /*Center Building Left Front Porch Front Wall*/
     if (const_var.L_F_P.getObjectByName("L_F_P_F_W")!=undefined) {
        let LFPorchFrontWall = const_var.L_F_P.getObjectByName("L_F_P_F_W").clone();
    
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
       
        LFPorchFrontWall.scale.set(5+params.l_f_p_w, 0.5, 0);
        LFPorchFrontWall.position.x = params.p_w/-2+((params.l_f_p_w-5)/2);
        LFPorchFrontWall.position.z = params.p_d/2+5;
        LFPorchFrontWall.position.y = params.p_h-2.25;
        //backWall.rotation.y= Math.PI / 2;
        LFPorchFrontWall.visible = (params.add_left_front_porch==true)?true:false;
        let LFPorchFrontWallLoader = new THREE.TextureLoader();
        let LFPorchFrontWallTexture = LFPorchFrontWallLoader.load( wallTexture, function(texture) {
            //LFPorchFrontWall.material.envMap = texture;
            LFPorchFrontWall.material.emissiveMap = texture;
            LFPorchFrontWall.material.emissiveIntensity = 1;
            LFPorchFrontWall.material.map = texture;
            LFPorchFrontWall.material.map.wrapS = THREE.RepeatWrapping;
            LFPorchFrontWall.material.map.wrapT = THREE.RepeatWrapping;
            LFPorchFrontWall.material.map.offset.x = params.p_w;
            LFPorchFrontWall.material.map.offset.y = params.p_w;
            if(params.p_v_w==true)
            {
              LFPorchFrontWall.material.map.repeat.set(0.15,0.15);
            }else
            {
              LFPorchFrontWall.material.map.repeat.set(0.15,0.15);
            }
      } )
        CB_L_F_P_Roof.add(LFPorchFrontWall);
    }
    /*Left Back Porch Roof*/
    if (const_var.L_B_P.getObjectByName("LBPorch")!=undefined) {
        let LBPorch = const_var.L_B_P.getObjectByName("LBPorch").clone();
        let quad_vertices =
        [
        -params.l_b_p_w,  0.0, 5,
        0,  0.0, 5,
        0, 2, -0.0,
        -params.l_b_p_w, 2, -0.0,
    
        5,  0.0, 5,
        0,  0.0, 5,
        0.0, 2, 0.0,
        5, 0, 0.0,
        
        5,  0.0, -params.l_b_p_d,
        5,  0.0, 0,
        0.0, 2, 0,
        0.0, 2, -params.l_b_p_d
        ];
        if(params.p_r_s=="3"){
        let quad_uvs =
        [
            0.0, 0.0,
            1.0+(0.2*(params.l_b_p_w-5)), 0.0,
            1+(0.2*(params.l_b_p_w-5)), 1.0+(0.2*(params.l_b_p_w-5)),
            0.0, 1+(0.2*(params.l_b_p_w-5)),
    
            0.0, 0.0,
            -1.0, 0.0,
            -1.0, -1.0,
            -1.0, -1.0,
        
            0.0, 0.0,
            1.0+(0.2*(params.l_b_p_d-5)), 0.0,
            1.0+(0.2*(params.l_b_p_d-5)), 1.0+(0.2*(params.l_b_p_d-5)),
            0.0, 1.0+(0.2*(params.l_b_p_d-5))
        ];
    }else{ 
        let quad_uvs =
        [
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
    
            0.0, -1.0,
            -1.0, -1.0,
            -1.0, 0.0,
            0.0, -1.0,
        
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0
        ];
    }
        let vertices = new Float32Array( quad_vertices );
        let uvs = new Float32Array( quad_uvs);
        LBPorch.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
        LBPorch.geometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
            let roofImg = verticalTexture;
            if(params.p_r_s=="3") {
                roofImg = verticalTexture;
            } else {
                roofImg = horizontalTexture;
            }
            let rCalor = params.p_r_c.replace("#","0x");   
            LBPorch.position.set(params.p_w/-2,params.p_h-2,params.p_d/-2);
            LBPorch.rotation.y = Math.PI
            LBPorch.visible = (params.add_left_back_porch==true)?true:false;
            let LBPorchloader = new THREE.TextureLoader();
            let texture1 = LBPorchloader.load(roofImg, function(texture1) {
               texture1.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 16);
               texture1.wrapS = THREE.RepeatWrapping; 
               texture1.wrapT = THREE.RepeatWrapping;
               LBPorch.material.map = texture1;
               //LBPorch.material.envMap = texture1;
               LBPorch.material.emissiveMap = texture1;
               LBPorch.material.emissiveIntensity = 1;
               if(params.p_r_s=="3"){
                 LBPorch.material.map.repeat.set(-5,1);
                } else {
                  LBPorch.material.map.repeat.set(1,1.5);
                }
              });
            LBPorch.material.color.setHex( rCalor );
            CB_L_B_P_Roof.add(LBPorch);
    }
    /*Center Building LBPorch  Right trim*/
    if (const_var.L_B_P.getObjectByName("LBPRightTrim")== undefined) {
        let LBPRightTrim = const_var.L_B_P.getObjectByName("LBPorchTrim").clone();
        LBPRightTrim.name = "LBPRightTrim";
        LBPRightTrim.scale.set(0.2,0.2,5.4);
        LBPRightTrim.position.set(params.p_w/-2+params.l_b_p_w,params.p_h-1,params.p_d/-2-2.5);
        LBPRightTrim.rotation.x = -0.4;
        LBPRightTrim.visible = (params.add_left_back_porch == true)?true:false;
        CB_L_B_P_Roof.add(LBPRightTrim);
    }
    /*Center Building LBPorch Front  trim*/
    if (const_var.L_B_P.getObjectByName("LBPFrontTrim")== undefined) {
        let LBPFrontTrim = const_var.L_B_P.getObjectByName("LBPorchTrim").clone();
        LBPFrontTrim.name = "LBPFrontTrim";
        LBPFrontTrim.scale.set(5.4,0.2,0.2);
        LBPFrontTrim.position.set(params.p_w/-2-2.5,params.p_h-1,params.p_d/-2+params.l_b_p_d);
        LBPFrontTrim.rotation.z = 0.4;
        LBPFrontTrim.visible = (params.add_left_back_porch == true)?true:false;
        CB_L_B_P_Roof.add(LBPFrontTrim);
    }
     /*Center Building LBPorch Back trim*/
     if (const_var.L_B_P.getObjectByName("LBPBackTrim")== undefined) {
         let LBPBackTrim = const_var.L_B_P.getObjectByName("LBPorchTrim").clone();
         LBPBackTrim.name = "LBPBackTrim";
         LBPBackTrim.scale.set(5.2+params.l_b_p_w,0.2,0.2);
         LBPBackTrim.visible = (params.add_left_back_porch == true)?true:false;
         LBPBackTrim.position.set(params.p_w/-2+((params.l_b_p_w-5)/2),params.p_h-2.04,params.p_d/-2-5.05);
         CB_L_B_P_Roof.add(LBPBackTrim);
     }
     /*Center Building LBPorch Left trim*/
     if (const_var.L_B_P.getObjectByName("LBPLeftTrim")== undefined) {
         let LBPLeftTrim = const_var.L_B_P.getObjectByName("LBPorchTrim").clone();
         LBPLeftTrim.name = "LBPLeftTrim";
         LBPLeftTrim.scale.set(0.2,0.2,5.2+params.l_b_p_d);
         LBPLeftTrim.position.set(params.p_w/-2-5.05,params.p_h-2.04,params.p_d/-2+((params.l_b_p_d-5)/2));
         LBPLeftTrim.visible = (params.add_left_back_porch == true)?true:false;
         CB_L_B_P_Roof.add(LBPLeftTrim);
     }
     /*Center Building LBPorch Right Small trim*/
     if (const_var.L_B_P.getObjectByName("LBPRightSmallTrim")== undefined) {
         let LBPRightSmallTrim = const_var.L_B_P.getObjectByName("LBPorchTrim").clone();
         LBPRightSmallTrim.name = "LBPRightSmallTrim";
         LBPRightSmallTrim.scale.set(0.2,0.5,0.2);
         LBPRightSmallTrim.position.set(params.p_w/-2+params.l_b_p_w,params.p_h-2.25,params.p_d/-2-5);
         LBPRightSmallTrim.visible = (params.add_left_back_porch == true)?true:false;
         CB_L_B_P_Roof.add(LBPRightSmallTrim);
     }
     /*Center Building LBPorch Left Small trim*/
     if (const_var.L_B_P.getObjectByName("LBPLeftSmallTrim")== undefined) {
         let LBPLeftSmallTrim = const_var.L_B_P.getObjectByName("LBPorchTrim").clone();
         LBPLeftSmallTrim.name = "LBPLeftSmallTrim";
         LBPLeftSmallTrim.scale.set(0.2,0.5,0.2);
         LBPLeftSmallTrim.position.set(params.p_w/-2-5,params.p_h-2.25,params.p_d/-2-5);
         LBPLeftSmallTrim.visible = (params.add_left_back_porch == true)?true:false;
         CB_L_B_P_Roof.add(LBPLeftSmallTrim);
    
     /*Center Building LBPorch Back Small trim*/
     if (const_var.L_B_P.getObjectByName("LBPFrontSmallTrim")== undefined) {
         let LBPFrontSmallTrim = const_var.L_B_P.getObjectByName("LBPorchTrim").clone();
         LBPFrontSmallTrim.name = "LBPFrontSmallTrim";
         LBPFrontSmallTrim.scale.set(0.2,0.5,0.2);
         LBPFrontSmallTrim.position.set(params.p_w/-2-5,params.p_h-2.25,params.p_d/-2+params.l_b_p_d);
         LBPFrontSmallTrim.visible = (params.add_left_back_porch == true)?true:false;
         CB_L_B_P_Roof.add(LBPFrontSmallTrim);
     }



    }
     /*Center Building 4 vertices Front Gable For Left Back Porch*/
     if (const_var.L_B_P.getObjectByName("L_B_P_F_G")!=undefined) {
        let LBPorchFrontGable = const_var.L_B_P.getObjectByName("L_B_P_F_G").clone();
    
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
       
        let LBPorchFrontGableLoader = new THREE.TextureLoader();
        let LBPorchFrontGableTexture = LBPorchFrontGableLoader.load( wallTexture, function(texture) {})
            let quad_vertices =
            [
              //botom left
              params.p_w/-2,params.p_h-2.5,params.p_d/-2+params.l_b_p_d,
              //botom right
              params.p_w/-2-5,params.p_h-2.5,params.p_d/-2+params.l_b_p_d,
              //top right
              params.p_w/-2-5,params.p_h-2,params.p_d/-2+params.l_b_p_d,
              //top left
              params.p_w/-2,params.p_h,params.p_d/-2+params.l_b_p_d,
            
            ];
            let vertices = new Float32Array( quad_vertices );
            LBPorchFrontGable.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
            LBPorchFrontGable.visible = (params.add_left_back_porch==true)?true:false;;
 
        CB_L_B_P_Roof.add(LBPorchFrontGable);
    }
     /*Center Building 4 vertices Front Gable For Left Back Porch*/
     if (const_var.L_B_P.getObjectByName("L_B_P_L_G")!=undefined) {
        let LBPorchRightGable = const_var.L_B_P.getObjectByName("L_B_P_L_G").clone();
    
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
       
        let LBPorchRightGableLoader = new THREE.TextureLoader();
        let LBPorchRightGableTexture = LBPorchRightGableLoader.load( wallTexture, function(texture) {})
            let quad_vertices =
            [
              //botom left
              params.p_w/-2+params.l_b_p_w,params.p_h-2.5,params.p_d/-2,
              //botom right
              params.p_w/-2+params.l_b_p_w,params.p_h-2.5,params.p_d/-2-5,
              //top right
              params.p_w/-2+params.l_b_p_w,params.p_h-2,params.p_d/-2-5,
              //top left
              params.p_w/-2+params.l_b_p_w,params.p_h,params.p_d/-2,
            
            ];
            let vertices = new Float32Array( quad_vertices );
            LBPorchRightGable.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
            LBPorchRightGable.visible = (params.add_left_back_porch==true)?true:false;;
     
        CB_L_B_P_Roof.add(LBPorchRightGable);
    }
     /*Center Building Right Front Porch Right Wall*/
     if (const_var.L_B_P.getObjectByName("L_B_P_L_W")!=undefined) {
        let LBPorchLeftWall = const_var.L_B_P.getObjectByName("L_B_P_L_W").clone();
    
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
       
        LBPorchLeftWall.scale.set(5+params.l_b_p_d, 0.5, 0);
        LBPorchLeftWall.position.set(params.p_w/-2-5,params.p_h-2.25,params.p_d/-2+((params.l_b_p_d-5)/2));
        LBPorchLeftWall.rotation.y = Math.PI/2;
        LBPorchLeftWall.visible = (params.add_left_back_porch==true)?true:false;
        let LBPorchRightGableLoader = new THREE.TextureLoader();
        let LBPorchRightGableTexture = LBPorchRightGableLoader.load( wallTexture, function(texture) {
            //LBPorchLeftWall.material.envMap = texture;
            LBPorchLeftWall.material.emissiveMap = texture;
            LBPorchLeftWall.material.emissiveIntensity = 1;
            LBPorchLeftWall.material.map = texture;
            LBPorchLeftWall.material.map.wrapS = THREE.RepeatWrapping;
            LBPorchLeftWall.material.map.wrapT = THREE.RepeatWrapping;
            LBPorchLeftWall.material.map.offset.x = params.p_w;
            LBPorchLeftWall.material.map.offset.y = params.p_w;
             if(params.p_v_w==true)
             {
              LBPorchLeftWall.material.map.repeat.set(0.15,0.15);
             }else
             {
              LBPorchLeftWall.material.map.repeat.set(0.15,0.15);
             }
        } )
        CB_L_B_P_Roof.add(LBPorchLeftWall);
    }
    /*Center Building Left Back Porch Back Wall*/
     if (const_var.L_B_P.getObjectByName("L_B_P_B_W")!=undefined) {
        let LBPorchBackWall = const_var.L_B_P.getObjectByName("L_B_P_B_W").clone();
    
        let wallTexture = horizontalTexture;
        if (params.p_v_w==true){
          wallTexture = verticalTexture;
        } else {
          wallTexture = horizontalTexture;
        }
       
        LBPorchBackWall.scale.set(5+params.l_b_p_w, 0.5, 0);
        LBPorchBackWall.position.x = params.p_w/-2+((params.l_b_p_w-5)/2);
        LBPorchBackWall.position.z = params.p_d/-2-5;
        LBPorchBackWall.position.y = params.p_h-2.25;
        //backWall.rotation.y= Math.PI / 2;
        LBPorchBackWall.visible = (params.add_left_back_porch==true)?true:false;
        let LBPorchRightGableLoader = new THREE.TextureLoader();
        let LBPorchRightGableTexture = LBPorchRightGableLoader.load( wallTexture, function(texture) {
            //LBPorchBackWall.material.envMap = texture;
            LBPorchBackWall.material.emissiveMap = texture;
            LBPorchBackWall.material.emissiveIntensity = 1;
            LBPorchBackWall.material.map = texture;
            LBPorchBackWall.material.map.wrapS = THREE.RepeatWrapping;
            LBPorchBackWall.material.map.wrapT = THREE.RepeatWrapping;
            LBPorchBackWall.material.map.offset.x = params.p_w;
            LBPorchBackWall.material.map.offset.y = params.p_w;
            if(params.p_v_w==true) {
              LBPorchBackWall.material.map.repeat.set(0.15,0.15);
            } else  {
              LBPorchBackWall.material.map.repeat.set(0.15,0.15);
            }
        } )
        CB_L_B_P_Roof.add(LBPorchBackWall);
    }
    /*Right Back Porch Roof*/
    if (const_var.R_B_P.getObjectByName("RBPorch")!=undefined) {
        let RBPorch = const_var.R_B_P.getObjectByName("RBPorch").clone();
        let quad_vertices =
    [
    -params.r_b_p_d,  0.0, 5,
    0,  0.0, 5,
    0, 2, -0.0,
    -params.r_b_p_d, 2, -0.0,

    5,  0.0, 5,
    0,  0.0, 5,
    0.0, 2, 0.0,
    5, 0, 0.0,
    
    5,  0.0, -params.r_b_p_w,
    5,  0.0, 0,
    0.0, 2, 0,
    0.0, 2, -params.r_b_p_w
    ];
    if(params.p_r_s=="3"){
    var quad_uvs =
    [
        0.0, 0.0,
        1.0+(0.2*(params.r_b_p_d-5)), 0.0,
        1+(0.2*(params.r_b_p_d-5)), 1.0+(0.2*(params.r_b_p_d-5)),
        0.0, 1+(0.2*(params.r_b_p_d-5)),

        0.0, 0.0,
        -1.0, 0.0,
        -1.0, -1.0,
        -1.0, -1.0,
    
        0.0, 0.0,
        1.0+(0.2*(params.r_b_p_w-5)), 0.0,
        1.0+(0.2*(params.r_b_p_w-5)), 1.0+(0.2*(params.r_b_p_w-5)),
        0.0, 1.0+(0.2*(params.r_b_p_w-5))
    ];
    }else{ 
        var quad_uvs =
        [
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,

            0.0, -1.0,
            -1.0, -1.0,
            -1.0, 0.0,
            0.0, -1.0,
        
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0
        ];
    }
    let vertices = new Float32Array( quad_vertices );
    let uvs = new Float32Array( quad_uvs);
    RBPorch.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    RBPorch.geometry.setAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );
        let roofImg = verticalTexture;
        if(params.p_r_s=="3") {
            roofImg = verticalTexture;
        } else {
            roofImg = horizontalTexture;
        }
        let rCalor = params.p_r_c.replace("#","0x");   
        RBPorch.position.set(params.p_w/2,params.p_h-2,params.p_d/-2);
        RBPorch.rotation.y = Math.PI/2
        RBPorch.visible = (params.add_right_back_porch==true)?true:false;
        let RBPorchloader = new THREE.TextureLoader();
        let texture1 = RBPorchloader.load(roofImg, function(texture1) {
           texture1.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 16);
           texture1.wrapS = THREE.RepeatWrapping; 
           texture1.wrapT = THREE.RepeatWrapping;
           RBPorch.material.map = texture1;
           //RBPorch.material.envMap = texture1;
           RBPorch.material.emissiveMap = texture1;
           RBPorch.material.emissiveIntensity = 1;
           if(params.p_r_s=="3"){
             RBPorch.material.map.repeat.set(-5,1);
            } else {
              RBPorch.material.map.repeat.set(1,1.5);
            }
          });
            RBPorch.material.color.setHex( rCalor );
        CB_R_B_P_Roof.add(RBPorch);
    }
    /*Center Building RBPorch  Left trim*/
    if (const_var.R_B_P.getObjectByName("RBPLeftTrim")== undefined) {
        let RBPLeftTrim = const_var.R_B_P.getObjectByName("RBPorchTrim").clone();
        RBPLeftTrim.name = "RBPLeftTrim";
        RBPLeftTrim.scale.set(0.2,0.2,5.4);
        RBPLeftTrim.position.set(params.p_w/2-params.r_b_p_w,params.p_h-1,params.p_d/-2-2.5);
        RBPLeftTrim.rotation.x = -0.4;
        RBPLeftTrim.visible = (params.add_right_back_porch == true)?true:false;
        CB_R_B_P_Roof.add(RBPLeftTrim);
    }
    /*Center Building RBPorch Front trim*/
    if (const_var.R_B_P.getObjectByName("RBPFrontTrim")== undefined) {
        let RBPFrontTrim = const_var.R_B_P.getObjectByName("RBPorchTrim").clone();
        RBPFrontTrim.name = "RBPFrontTrim";
        RBPFrontTrim.scale.set(5.4,0.2,0.2);
        RBPFrontTrim.position.set(params.p_w/2+2.5,params.p_h-1,params.p_d/-2+params.r_b_p_d);
        RBPFrontTrim.rotation.z = -0.4;
        RBPFrontTrim.visible = (params.add_right_back_porch == true)?true:false;
        CB_R_B_P_Roof.add(RBPFrontTrim);
    }
    /*Center Building RBPorch Back trim*/
    if (const_var.R_B_P.getObjectByName("RBPBackTrim")== undefined) {
         let RBPBackTrim = const_var.R_B_P.getObjectByName("RBPorchTrim").clone();
         RBPBackTrim.name = "RBPBackTrim";
         RBPBackTrim.scale.set(5.2+params.r_b_p_w,0.2,0.2);
         RBPBackTrim.visible = (params.add_right_back_porch == true)?true:false;
         RBPBackTrim.position.set(params.p_w/2-((params.r_b_p_w-5)/2),params.p_h-2.04,params.p_d/-2-5.05);
         CB_R_B_P_Roof.add(RBPBackTrim);
    }
    /*Center Building RBPorch Right trim*/
    if (const_var.R_B_P.getObjectByName("RBPRightTrim")== undefined) {
         let RBPRightTrim = const_var.R_B_P.getObjectByName("RBPorchTrim").clone();
         RBPRightTrim.name = "RBPRightTrim";
         RBPRightTrim.scale.set(0.2,0.2,5.2+params.r_b_p_d);
         RBPRightTrim.position.set(params.p_w/2+5.05,params.p_h-2.04,params.p_d/-2+((params.r_b_p_d-5)/2));
         RBPRightTrim.visible = (params.add_right_back_porch == true)?true:false;
         CB_R_B_P_Roof.add(RBPRightTrim);
    }
     /*Center Building RBPorch Left Small trim*/
     if (const_var.R_B_P.getObjectByName("RBPLeftSmallTrim")== undefined) {
         let RBPLeftSmallTrim = const_var.R_B_P.getObjectByName("RBPorchTrim").clone();
         RBPLeftSmallTrim.name = "RBPLeftSmallTrim";
         RBPLeftSmallTrim.scale.set(0.2,0.5,0.2);
         RBPLeftSmallTrim.position.set(params.p_w/2-params.r_b_p_w,params.p_h-2.25,params.p_d/-2-5);
         RBPLeftSmallTrim.visible = (params.add_right_back_porch == true)?true:false;
         CB_R_B_P_Roof.add(RBPLeftSmallTrim);
     }
     /*Center Building RBPorch Right Small trim*/
     if (const_var.R_B_P.getObjectByName("RBPRightSmallTrim")== undefined) {
         let RBPRightSmallTrim = const_var.R_B_P.getObjectByName("RBPorchTrim").clone();
         RBPRightSmallTrim.name = "RBPRightSmallTrim";
         RBPRightSmallTrim.scale.set(0.2,0.5,0.2);
         RBPRightSmallTrim.position.set(params.p_w/2+5,params.p_h-2.25,params.p_d/-2-5);
         RBPRightSmallTrim.visible = (params.add_right_back_porch == true)?true:false;
         CB_R_B_P_Roof.add(RBPRightSmallTrim);
     }
     /*Center Building RBPorch Front Small trim*/
     if (const_var.R_B_P.getObjectByName("RFPFrontSmallTrim")== undefined) {
         let RFPFrontSmallTrim = const_var.R_B_P.getObjectByName("RBPorchTrim").clone();
         RFPFrontSmallTrim.name = "RFPFrontSmallTrim";
         RFPFrontSmallTrim.scale.set(0.2,0.5,0.2);
         RFPFrontSmallTrim.position.set(params.p_w/2+5,params.p_h-2.25,params.p_d/-2+params.r_b_p_d);
         RFPFrontSmallTrim.visible = (params.add_right_back_porch == true)?true:false;
         CB_R_B_P_Roof.add(RFPFrontSmallTrim);
     }
     /*Center Building4 vertices Left Gable For Right Back Porch*/
     if (const_var.R_B_P.getObjectByName("R_B_P_F_G")!=undefined) {
       let RBPorchFrontGable = const_var.R_B_P.getObjectByName("R_B_P_F_G").clone();
       let wallTexture = horizontalTexture;
       if (params.p_v_w==true){
         wallTexture = verticalTexture;
       } else {
         wallTexture = horizontalTexture;
       }
   
       let LBPorchRightGableLoader = new THREE.TextureLoader();
       let LBPorchRightGableTexture = LBPorchRightGableLoader.load( wallTexture, function(texture) {})
           let quad_vertices =
           [
             //botom left
             params.p_w/2,params.p_h-2.5,params.p_d/-2+params.r_b_p_d,
             //botom right
             params.p_w/2+5,params.p_h-2.5,params.p_d/-2+params.r_b_p_d,
             //top right
             params.p_w/2+5,params.p_h-2,params.p_d/-2+params.r_b_p_d,
             //top left
             params.p_w/2,params.p_h,params.p_d/-2+params.r_b_p_d,
        
           ];
           let vertices = new Float32Array( quad_vertices );
           RBPorchFrontGable.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
           RBPorchFrontGable.visible = (params.add_right_back_porch==true)?true:false;;
  
       CB_R_B_P_Roof.add(RBPorchFrontGable);
     }
    /*Center Building4 vertices Left Gable For Right Back Porch*/
    if (const_var.R_B_P.getObjectByName("R_B_P_L_G")!=undefined) {
      let RBPorchLeftGable = const_var.R_B_P.getObjectByName("R_B_P_L_G").clone();

      let wallTexture = horizontalTexture;
      if (params.p_v_w==true){
        wallTexture = verticalTexture;
      } else {
        wallTexture = horizontalTexture;
      }
     
      let LBPorchRightGableLoader = new THREE.TextureLoader();
      let LBPorchRightGableTexture = LBPorchRightGableLoader.load( wallTexture, function(texture) {})
          let quad_vertices =
            [
              //botom left
              params.p_w/2-params.r_b_p_w,params.p_h-2.5,params.p_d/-2,
              //botom right
              params.p_w/2-params.r_b_p_w,params.p_h-2.5,params.p_d/-2-5,
              //top right
              params.p_w/2-params.r_b_p_w,params.p_h-2,params.p_d/-2-5,
              //top left
              params.p_w/2-params.r_b_p_w,params.p_h,params.p_d/-2,
            
            ];
            let vertices = new Float32Array( quad_vertices );
           RBPorchLeftGable.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
           RBPorchLeftGable.visible = (params.add_right_back_porch==true)?true:false;;

      CB_R_B_P_Roof.add(RBPorchLeftGable);
    }
   /*Center Building Right Back Porch Right Wall*/
   if (const_var.R_B_P.getObjectByName("R_B_P_R_W")!=undefined) {
     let RBPorchRightWall = const_var.R_B_P.getObjectByName("R_B_P_R_W").clone();
 
     let wallTexture = horizontalTexture;
     if (params.p_v_w==true){
       wallTexture = verticalTexture;
     } else {
       wallTexture = horizontalTexture;
     }
    
     RBPorchRightWall.scale.set(5+params.r_b_p_d, 0.5, 0);
     RBPorchRightWall.position.set(params.p_w/2+5,params.p_h-2.25,params.p_d/-2+((params.r_b_p_d-5)/2));
     RBPorchRightWall.rotation.y = Math.PI/2;
     RBPorchRightWall.visible = (params.add_right_back_porch==true)?true:false;
     let LBPorchRightGableLoader = new THREE.TextureLoader();
     let LBPorchRightGableTexture = LBPorchRightGableLoader.load( wallTexture, function(texture) {
        //RBPorchRightWall.material.envMap = texture;
        RBPorchRightWall.material.emissiveMap = texture;
        RBPorchRightWall.material.emissiveIntensity = 1;
        RBPorchRightWall.material.map = texture;
        RBPorchRightWall.material.map.wrapS = THREE.RepeatWrapping;
        RBPorchRightWall.material.map.wrapT = THREE.RepeatWrapping;
        RBPorchRightWall.material.map.offset.x = params.p_w;
        RBPorchRightWall.material.map.offset.y = params.p_w;
         if(params.p_v_w==true)
         {
          RBPorchRightWall.material.map.repeat.set(0.15,0.15);
         }else
         {
          RBPorchRightWall.material.map.repeat.set(0.15,0.15);
         }
     } )
     CB_R_B_P_Roof.add(RBPorchRightWall);
   }
   /*Center Building Right Back Porch Back Wall*/
   if (const_var.R_B_P.getObjectByName("R_B_P_B_W")!=undefined) {
     let RBPorchBackWall = const_var.R_B_P.getObjectByName("R_B_P_B_W").clone();
 
     let wallTexture = horizontalTexture;
     if (params.p_v_w==true){
       wallTexture = verticalTexture;
     } else {
       wallTexture = horizontalTexture;
     }
    
     RBPorchBackWall.scale.set(5+params.r_b_p_w, 0.5, 0);
     RBPorchBackWall.position.x = params.p_w/2-((params.r_b_p_w-5)/2);
     RBPorchBackWall.position.z = params.p_d/-2-5;
     RBPorchBackWall.position.y = params.p_h-2.25;
     //backWall.rotation.y= Math.PI / 2;
     RBPorchBackWall.visible = (params.add_right_back_porch==true)?true:false;
     let LBPorchRightGableLoader = new THREE.TextureLoader();
     let LBPorchRightGableTexture = LBPorchRightGableLoader.load( wallTexture, function(texture) {
        //RBPorchBackWall.material.envMap = texture;
        RBPorchBackWall.material.emissiveMap = texture;
        RBPorchBackWall.material.emissiveIntensity = 1;
        RBPorchBackWall.material.map = texture;
        RBPorchBackWall.material.map.wrapS = THREE.RepeatWrapping;
        RBPorchBackWall.material.map.wrapT = THREE.RepeatWrapping;
        RBPorchBackWall.material.map.offset.x = params.p_w;
        RBPorchBackWall.material.map.offset.y = params.p_w;
         if(params.p_v_w==true)
         {
          RBPorchBackWall.material.map.repeat.set(0.15,0.15);
         }else
         {
          RBPorchBackWall.material.map.repeat.set(0.15,0.15);
         }
     } )
     CB_R_B_P_Roof.add(RBPorchBackWall);
   }

}