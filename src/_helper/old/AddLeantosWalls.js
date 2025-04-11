import * as THREE from "three";
import verticalTexture from '../assets/images/imgTextures/buildingImages/verticalTexture.jpeg';
import horizontalTexture from '../assets/images/imgTextures/buildingImages/horizantalTexture.jpeg';
import { params, const_var, initialState} from '../redux/reducers/reducer';
import BuildingWalls from '../3D_Objects/BuildingWalls';

export const addLeanTosWalls = () => {
    let buildingWallsObject = new BuildingWalls();
    buildingWallsObject.addWallsIntoBuilding(const_var, params);
    var roofMiddleHeight = {
        "1":{"12":0.5,"13":0.5417,"14":0.5833,"15":0.6250,"16":0.6667,"17":0.7083,"18":0.7500,"19":0.7917,"20":0.8333,"21":0.8750,"22":0.9167,"23":0.9583,"24":1,"25":1.0417,"26":1.0833,"27":1.1250,"28":1.1667,"29":1.2083,"30":1.2500,"31":1.2917,"32":1.3333,"33":1.3750,"34":1.4167,"35":1.4583,"36":1.5000,"37":1.5417,"38":1.5833,"39":1.6250,"40":1.6667,"41":1.7083,"42":1.7500,"43":1.7917,"44":1.8333,"45":1.8750,"46":1.9167,"47":1.9583,"48":2.00,"49":2.0417,"50":2.0833,"51":2.1250,"52":2.1667,"53":2.2083,"54":2.2500,"55":2.2917,"56":2.3333,"57":2.3750,"58":2.4167,"59":2.4583,"60":2.5000,"61":2.5417,"62":2.5833,"63":2.6250,"64":2.6667,"65":2.7083,"66":2.7500,"67":2.7917,"68":2.8333,"69":2.8750,"70":2.9167,"71":2.9583,"72":3.00,"73":3.0417,"74":3.0833,"75":3.1250,"76":3.1667,"77":3.2083,"78":3.2500,"79":3.2917,"80":3.3330},
        "2":{"12":1.0,"13":1.0833,"14":1.1667,"15":1.2500,"16":1.3333,"17":1.4167,"18":1.5000,"19":1.5833,"20":1.6667,"21":1.7500,"22":1.8333,"23":1.9167,"24":2,"25":2.0833,"26":2.1667,"27":2.2500,"28":2.3333,"29":2.4167,"30":2.5000,"31":2.5833,"32":2.6667,"33":2.7500,"34":2.8333,"35":2.9167,"36":3.0000,"37":3.0833,"38":3.1667,"39":3.2500,"40":3.3330,"41":3.4170,"42":3.5000,"43":3.5830,"44":3.6670,"45":3.7500,"46":3.8330,"47":3.9170,"48":4.00,"49":4.0830,"50":4.1670,"51":4.2500,"52":4.3330,"53":4.4170,"54":4.5000,"55":4.5830,"56":4.6670,"57":4.7500,"58":4.8330,"59":4.9170,"60":5.0000,"61":5.0830,"62":5.1670,"63":5.2500,"64":5.3330,"65":5.4170,"66":5.5000,"67":5.5830,"68":5.6670,"69":5.7500,"70":5.8330,"71":5.9170,"72":6.00,"73":6.0830,"74":6.1670,"75":6.2500,"76":6.3330,"77":6.4170,"78":6.5000,"79":6.5830,"80":6.6670},
        "3":{"12":1.5,"13":1.6250,"14":1.7500,"15":1.8750,"16":2.0000,"17":2.1250,"18":2.2500,"19":2.3750,"20":2.5000,"21":2.6250,"22":2.7500,"23":2.8750,"24":3,"25":3.1250,"26":3.2500,"27":3.3750,"28":3.5000,"29":3.6250,"30":3.7500,"31":3.8750,"32":4.0000,"33":4.1250,"34":4.2500,"35":4.3750,"36":4.5000,"37":4.6250,"38":4.7500,"39":4.8750,"40":5.0000,"41":5.1250,"42":5.2500,"43":5.3750,"44":5.5000,"45":5.6250,"46":5.7500,"47":5.8750,"48":6.00,"49":6.1250,"50":6.2500,"51":6.3750,"52":6.5000,"53":6.6250,"54":6.7500,"55":6.8750,"56":7.0000,"57":7.1250,"58":7.2500,"59":7.3750,"60":7.5000,"61":7.6250,"62":7.7500,"63":7.8750,"64":8.0000,"65":8.1250,"66":8.2500,"67":8.3750,"68":8.5000,"69":8.6250,"70":8.7500,"71":8.8750,"72":9.00,"73":9.1250,"74":9.2500,"75":9.3750,"76":9.5000,"77":9.6250,"78":9.7500,"79":9.8750,"80":10.000},
        "4":{"12":2.0,"13":2.1667,"14":2.3333,"15":2.5000,"16":2.6667,"17":2.8333,"18":3.0000,"19":3.1667,"20":3.3330,"21":3.5000,"22":3.6670,"23":3.8330,"24":4,"25":4.1670,"26":4.3330,"27":4.5000,"28":4.6670,"29":4.8330,"30":5.0000,"31":5.1670,"32":5.3330,"33":5.5000,"34":5.6670,"35":5.8330,"36":6.0000,"37":6.1670,"38":6.3330,"39":6.5000,"40":6.6670,"41":6.8330,"42":7.0000,"43":7.1670,"44":7.3330,"45":7.5000,"46":7.6670,"47":7.8330,"48":8.00,"49":8.1670,"50":8.3330,"51":8.5000,"52":8.6670,"53":8.8330,"54":9.0000,"55":9.1670,"56":9.3330,"57":9.5000,"58":9.6670,"59":9.8330,"60":10.000,"61":10.167,"62":10.333,"63":10.500,"64":10.667,"65":10.833,"66":11.000,"67":11.167,"68":11.333,"69":11.500,"70":11.667,"71":11.833,"72":12.0,"73":12.167,"74":12.333,"75":12.500,"76":12.667,"77":12.833,"78":13.000,"79":13.167,"80":13.333},
        "5":{"12":2.5,"13":2.7083,"14":2.9167,"15":3.1250,"16":3.3330,"17":3.5420,"18":3.7500,"19":3.9580,"20":4.1670,"21":4.3750,"22":4.5830,"23":4.7920,"24":5,"25":5.2080,"26":5.4170,"27":5.6250,"28":5.8330,"29":6.0420,"30":6.2500,"31":6.4580,"32":6.6670,"33":6.8750,"34":7.0830,"35":7.2920,"36":7.5000,"37":7.7080,"38":7.9170,"39":8.1250,"40":8.3330,"41":8.5420,"42":8.7500,"43":8.9580,"44":9.1670,"45":9.3750,"46":9.5830,"47":9.7920,"48":10.0,"49":10.208,"50":10.417,"51":10.625,"52":10.833,"53":11.042,"54":11.250,"55":11.458,"56":11.667,"57":11.875,"58":12.083,"59":12.292,"60":12.500,"61":12.708,"62":12.917,"63":13.125,"64":13.333,"65":13.542,"66":13.750,"67":13.958,"68":14.167,"69":14.375,"70":14.583,"71":14.792,"72":15.0,"73":15.208,"74":15.417,"75":15.625,"76":15.833,"77":16.042,"78":16.250,"79":16.458,"80":16.667},
        "6":{"12":3.0,"13":3.2500,"14":3.5000,"15":3.7500,"16":4.0000,"17":4.2500,"18":4.5000,"19":4.7500,"20":5.0000,"21":5.2500,"22":5.5000,"23":5.7500,"24":6,"25":6.2500,"26":6.5000,"27":6.7500,"28":7.0000,"29":7.2500,"30":7.5000,"31":7.7500,"32":8.0000,"33":8.2500,"34":8.5000,"35":8.7500,"36":9.0000,"37":9.2500,"38":9.5000,"39":9.7500,"40":10.000,"41":10.250,"42":10.500,"43":10.750,"44":11.000,"45":11.250,"46":11.500,"47":11.750,"48":12.0,"49":12.250,"50":12.500,"51":12.750,"52":13.000,"53":13.250,"54":13.500,"55":13.750,"56":14.000,"57":14.250,"58":14.500,"59":14.750,"60":15.000,"61":15.250,"62":15.500,"63":15.750,"64":16.000,"65":16.250,"66":16.500,"67":16.750,"68":17.000,"69":17.250,"70":17.500,"71":17.750,"72":18.0,"73":18.250,"74":18.500,"75":18.750,"76":19.000,"77":19.250,"78":19.500,"79":19.750,"80":20.000}
       }; 
       
       var storagePos = {
        "5":5,"10":10,"15":15,"20":20,"25":25,"30":30,"35":35,"40":40,"45":45,"50":50,"55":55,"60":60,"65":65,"70":70,"75":75,"80":80,"85":85,"90":90,"95":95,"100":100
    }
    if(params.add_front_lean) {
        var data =const_var.b_t_M_F_t_F;
        data.children.forEach(function(Geo) {
         if(Geo instanceof THREE.Mesh ){
            var wallTexture = horizontalTexture;
            if(params.p_v_w==true){
              wallTexture = verticalTexture;//verticalTexture.jpeg"
            } else{
              wallTexture = horizontalTexture;//"horizantalTexture.jpeg";
             }
            var frontWallLoader = new THREE.TextureLoader();
            var  FWtexture = frontWallLoader.load(wallTexture, function() {
            FWtexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
            FWtexture.wrapS = THREE.RepeatWrapping;
            FWtexture.wrapT = THREE.RepeatWrapping;
    
            //New Geo For Lean To LefWall
            if("F_L_F_W" == Geo.name )
            {
                Geo.visible = (params.p_f_b_l==false)?true:false;
                Geo.position.x = params.p_d / -2 - params.leanF_p_w;
                Geo.position.z = 0;
                /*var fbGableLoader = new THREE.TextureLoader();
                var texture1 = fbGableLoader.load(wallTexture, function(texture1) {
                   texture1.wrapS = THREE.RepeatWrapping;
                   texture1.wrapT = THREE.RepeatWrapping;
               });*/
                Geo.material.map = FWtexture;
                Geo.material.map.wrapS = THREE.RepeatWrapping;
                Geo.material.map.wrapT = THREE.RepeatWrapping;
                Geo.material.map.offset.x = params.leanF_p_w;
                Geo.material.map.offset.y = params.leanF_p_w;
                
                var wH = params.leanF_p_h;
                var wP = params.leanF_p_h - wH/2;
                Geo.position.y = wP;				
                Geo.scale.set(params.leanF_p_d,wH,0);				
                switch(params.p_b_c_b_f_l)
                {
                    case "One_Fourth_Close":
                        wH = wH/4;
                        wP = params.leanF_p_h - wH/2;
                        break;
                    case "Half_Close":
                        wH = wH/2;
                        wP = params.leanF_p_h - wH/2;
                        break;					
                    case "Three_Fourth_Close":
                        wH = wH * 3/4;
                        wP = params.leanF_p_h - wH/2;
                        break;
                    case "Extended Gable":
                        break;
                    case "Gable":
                        break;
                    case "Close":
                        wH = params.leanF_p_h;
                        wP = params.leanF_p_h - wH/2;
                        break;
                    default:
                        if(params.p_r_s == "1"){
                            wH = (Math.abs(params.p_b_c_b_f_l.replace(/\D/g, "")) * 3)+0.3;
                            wP = params.leanF_p_h - wH/2;
                        }else{
                        wH = (Math.abs(params.p_b_c_b_f_l.replace(/\D/g, "")) * 3);
                        wP = params.leanF_p_h - wH/2;
                        }
                        break;
                }
    
                if(params.p_r_s == "1"){			
                    Geo.position.y = wP-0.3;				
                    Geo.scale.set(params.leanF_p_d,wH-0.3,0);
                }else{
                    Geo.position.y = wP;				
                    Geo.scale.set(params.leanF_p_d,wH,0);
                }
    
                if(params.p_v_w==true)
                {
                    Geo.material.map.repeat.set(params.leanF_p_d-2,1);
                }else
                {
                    Geo.material.map.repeat.set(1,wH/4);
                }
            }
            
            if("F_L_R_W" == Geo.name )
            {
                var ltFwallPos = params.p_d/-2 - params.leanF_p_w/2;
                var ltFwallPos = params.p_d/-2 - params.leanF_p_w/2;

                Geo.visible = (params.p_f_b_l==false)?true:false;
                // Geo.position.x = params.p_w/-2 - params.leanF_p_w/2;
                // Geo.position.z = params.leanF_p_d / 2;  
                Geo.position.set(ltFwallPos,params.leanF_p_h,params.leanF_p_d/2);
          
                Geo.material.morphNormals = true;
                Geo.material.morphTargets = true;							
                Geo.material.map = FWtexture;
                Geo.material.map.wrapS = THREE.RepeatWrapping;
                Geo.material.map.wrapT = THREE.RepeatWrapping;
                Geo.material.map.offset.x = params.leanF_p_w;
                Geo.material.map.offset.y = params.leanF_p_w;
                
                var wH = params.leanF_p_h;
                var wP = params.leanF_p_h - wH/2;
                Geo.position.y = wP;				
                Geo.scale.set(params.leanF_p_w,wH,0);
                
                switch(params.p_b_c_b_f_f)
                {
                    case "One_Fourth_Close":
                        wH = wH/4;
                        wP = params.leanF_p_h - wH/2;
                        break;
                    case "Half_Close":
                        wH = wH/2;
                        wP = params.leanF_p_h - wH/2;
                        break;					
                    case "Three_Fourth_Close":
                        wH = wH * 3/4;
                        wP = params.leanF_p_h - wH/2;
                        break;
                    case "Extended Gable":
                        wH = wH/6;
                        wP = params.leanF_p_h - wH/2;
                        break;
                    case "Gable":
                        wH = wH/18;
                        wP = params.leanF_p_h - wH/2;
                        break;
                    case "Close":
                        wH = params.leanF_p_h;
                        wP = params.leanF_p_h - wH/2;
                        break;
                    default:
                        wH = Math.abs(params.p_b_c_b_f_f.replace(/\D/g, "")) * 3;
                        wP = params.leanF_p_h - wH/2;				
                        break;
                }
                Geo.position.y = wP;				
                Geo.scale.set(params.leanF_p_w,wH,0);
                
                if(params.p_v_w==true){
                    Geo.material.map.repeat.set(params.leanF_p_w-2,1);
                }else {
                    Geo.material.map.repeat.set(1,wH/4);
                }
            }
    
            //New Geo For Back Wall
            if("F_L_L_W" == Geo.name )
            {
                var wallPos = params.p_d/-2 - params.leanF_p_w/2;
                Geo.visible = (params.p_b_c_b_f_b !="Open")?true:false;  
                // Geo.visible = (params.p_f_b_l==false)?true:false;

                Geo.scale.set(params.leanF_p_w,params.leanF_p_h,0);
                Geo.position.set(wallPos,params.leanF_p_h/2,params.leanF_p_d / -2);
                Geo.material.map = FWtexture;
                Geo.material.map.wrapS = THREE.RepeatWrapping;
                Geo.material.map.wrapT = THREE.RepeatWrapping;
                Geo.material.map.offset.x = params.leanF_p_w;
                Geo.material.map.offset.y = params.leanF_p_w;
          
                
                var wH = params.leanF_p_h;
                var wP = params.leanF_p_h - wH/2;
                Geo.position.y = wP;				
                Geo.scale.set(params.leanF_p_w,params.leanF_p_h,0);
                switch(params.p_b_c_b_f_b)
                {
                    case "One_Fourth_Close":
                        wH = wH/4;
                        wP = params.leanF_p_h - wH/2;
                        break;
                    case "Half_Close":
                        wH = wH/2;
                        wP = params.leanF_p_h - wH/2;
                        break;					
                    case "Three_Fourth_Close":
                        wH = wH * 3/4;
                        wP = params.leanF_p_h - wH/2;
                        break;
                    case "Extended Gable":
                        wH = wH/6;
                        wP = params.leanF_p_h - wH/2;
                        break;
                    case "Gable":
                        wH = wH/18;
                        wP = params.leanF_p_h - wH/2; 
                        break;
                    case "Close":
                        wH = params.leanF_p_h;
                        wP = params.leanF_p_h - wH/2;
                        break;
                    default:
                        wH = Math.abs(params.p_b_c_b_f_l.replace(/\D/g, "")) * 3;
                        wP = params.leanF_p_h - wH/2;				
                        break;
                }
                Geo.position.y = wP;				
                Geo.scale.set(params.leanF_p_w,wH,0);
         
                
                if(params.p_v_w==true){
                    Geo.material.map.repeat.set(params.leanF_p_w-2,1);
                } else {
                    Geo.material.map.repeat.set(1,wH/4);
                }				
            }
    
            //Front Wall for Left Lean to  Storage
            if("F_L_R_S_W" == Geo.name )
            {
                var ltFwallPos = params.p_d/-2 - params.leanF_p_w/2;	
                Geo.position.x = ltFwallPos;
                Geo.position.y =  params.leanF_p_h/2
                Geo.position.z = params.leanF_p_d /-2+ storagePos[params.add_storage_front];
                Geo.scale.set(params.leanF_p_w,params.leanF_p_h,0);
                Geo.visible = (params.add_storage_check_front!=false)?true:false;
                Geo.material.morphNormals = true;
                Geo.material.morphTargets = true;		
                Geo.material.map = FWtexture;
                Geo.material.map.wrapS = THREE.RepeatWrapping;
                Geo.material.map.wrapT = THREE.RepeatWrapping;
                Geo.material.map.offset.x = params.leanF_p_w;
                Geo.material.map.offset.y = params.leanF_p_w;
                if(params.p_r_s == "1"){
                    Geo.position.y =  params.leanF_p_h/2-0.05
                  }
                if(params.p_v_w==true){
                    Geo.material.map.repeat.set(params.leanF_p_w-2,1);
                }else{
                    Geo.material.map.repeat.set(1,params.leanF_p_h/4);
                }
            }
            if("F_L_L_S_W" == Geo.name )
            {
                var wallPos = params.p_d/-2 - params.leanF_p_w/2;
                Geo.visible = (params.add_storage_check_front!=false)?true:false;
                if(params.p_b_w == "Close"){ Geo.visible = false;}
                Geo.scale.set(params.leanF_p_w,params.leanF_p_h,0);
                Geo.position.set(wallPos,params.leanF_p_h/2,params.leanF_p_d / -2);
                Geo.material.map = FWtexture;
                Geo.material.map.wrapS = THREE.RepeatWrapping;
                Geo.material.map.wrapT = THREE.RepeatWrapping;
                Geo.material.map.offset.x = params.leanF_p_w;
                Geo.material.map.offset.y = params.leanF_p_w;
                if(params.p_v_w==true){
                    Geo.material.map.repeat.set(params.leanF_p_w-2,1);
                } else{
                    Geo.material.map.repeat.set(1,params.leanF_p_h/4);
                }				
            }
    
            if("F_L_F_S_W" == Geo.name )
            {

                Geo.visible = (params.add_storage_check_front!=false)?true:false;  
                Geo.position.x = params.p_d / -2 - params.leanF_p_w;
                Geo.position.y = params.leanF_p_h/2;				
                Geo.position.z = (params.leanF_p_d/-2)+storagePos[params.add_storage_front]/2;
                Geo.scale.set(storagePos[params.add_storage_front],params.leanF_p_h,0);
                Geo.material.map = FWtexture;
                Geo.material.map.wrapS = THREE.RepeatWrapping;
                Geo.material.map.wrapT = THREE.RepeatWrapping;
                Geo.material.map.offset.x = params.leanF_p_w;
                Geo.material.map.offset.y = params.leanF_p_w;
                if(params.p_r_s == "1"){			
                    Geo.position.y =  (params.leanF_p_h - params.leanF_p_h/2)-0.3;				
                   }else{
                    Geo.position.y = params.leanF_p_h/2;				
                   } 
                if(params.p_v_w==true) {
                    Geo.material.map.repeat.set(params.leanF_p_d-2,1);
                } else {
                    Geo.material.map.repeat.set(1,params.leanF_p_h/4);
                }
            }
            if("F_L_B_S_W" == Geo.name )
            {
                Geo.visible = (params.add_storage_check_front!=false)?true:false;  
                Geo.scale.set(storagePos[params.add_storage_front],params.p_h,0)
                Geo.position.x = params.p_w /-2;
                Geo.position.x = params.p_w /-2 -5-0.5;
                Geo.position.z = (params.leanF_p_d/-2)+storagePos[params.add_storage_front]/2;
                Geo.position.y = params.p_h/2; 
                Geo.material.envMap = FWtexture;
                Geo.material.emissiveMap = FWtexture;
                Geo.material.emissiveIntensity = 1;
                Geo.material.map = FWtexture;
                Geo.material.map.wrapS = THREE.RepeatWrapping;
                Geo.material.map.wrapT = THREE.RepeatWrapping;
                Geo.material.map.offset.x = params.p_w;
                Geo.material.map.offset.y = params.p_w;
                if(params.p_v_w==true)
                {
                    Geo.material.map.repeat.set(params.p_d-2,1);
                }else
                {
                   
                    Geo.material.map.repeat.set(1,params.p_h/4);
                }
            }
            if("F_L_R_G" == Geo.name )
            {
                var ltFwallPos = params.p_d/-2 - params.leanF_p_w/2;
                if(params.p_v_w==true){
                    var FrontleanToRightGableUVS = new Float32Array([
                      -1.0, -1.0,
                      0.0, -1.0,
                      0.0, -1.0,
                    ]);
                } else {
                    var FrontleanToRightGableUVS = new Float32Array([
                      2.0, 0.0,
                      0.0, 0.0,
                      2.0, 2.0,
                    ]);
                }
                Geo.geometry.setAttribute( 'uv', new THREE.BufferAttribute( FrontleanToRightGableUVS, 2 ) );
                Geo.visible = (params.p_b_c_b_f_f !="Open")?true:false;  
                Geo.scale.set(params.leanF_p_w,roofMiddleHeight[params.b_l_t_r_p][2*params.leanF_p_w],0);
                Geo.position.set(ltFwallPos,params.leanF_p_h,params.leanF_p_d/2);
                Geo.material.map = FWtexture;
                Geo.material.map.wrapS = THREE.RepeatWrapping;
                Geo.material.map.wrapT = THREE.RepeatWrapping;	
                if(params.p_v_w==true){
                    Geo.material.map.repeat.set(params.leanF_p_w-2,1);
                } else {
                    Geo.material.map.repeat.set(1,roofMiddleHeight[params.b_l_t_r_p][2*params.leanF_p_w]/8);
                }
            }
            if("F_L_L_G" == Geo.name )
            {
                var ltFwallPos = params.p_d/-2 - params.leanF_p_w/2;
                if(params.p_v_w==true) {
                    var FrontleanToLeftGableUVS = new Float32Array([
                      -1.0, -1.0,
                      0.0, -1.0,
                      0.0, -1.0,
                    ]);
                } else {
                    var FrontleanToLeftGableUVS = new Float32Array([
                      2.0, 0.0,
                      0.0, 0.0,
                      2.0, 2.0,
                    ]);
                }
                Geo.geometry.setAttribute( 'uv', new THREE.BufferAttribute( FrontleanToLeftGableUVS, 2 ) );
                Geo.visible = (params.p_b_c_b_f_b !="Open" || params.add_storage_check_front!=false)?true:false;  
                Geo.scale.set(params.leanF_p_w,roofMiddleHeight[params.b_l_t_r_pF][2*params.leanF_p_w],0);
                Geo.position.set(ltFwallPos,params.leanF_p_h,params.leanF_p_d / -2);
                Geo.material.map = FWtexture;
                Geo.material.map.wrapS = THREE.RepeatWrapping;
                Geo.material.map.wrapT = THREE.RepeatWrapping;	
                if(params.p_v_w==true) {
                    Geo.material.map.repeat.set(params.leanF_p_w-2,1);
                } else {
                    Geo.material.map.repeat.set(1,roofMiddleHeight[params.b_l_t_r_pF][2*params.leanF_p_w]/8);
                }
            }
            if("F_L_R_S_G" == Geo.name )
            {
                var ltFwallPos = params.p_d/-2 - params.leanF_p_w/2;
                if(params.p_v_w==true){
                    var FrontleanToRightStorageGableUVS = new Float32Array([
                      -1.0, -1.0,
                      0.0, -1.0,
                      0.0, -1.0,
                    ]);
                } else {
                    var FrontleanToRightStorageGableUVS = new Float32Array([
                      2.0, 0.0,
                      0.0, 0.0,
                      2.0, 2.0,
                    ]);
                }
                Geo.geometry.setAttribute( 'uv', new THREE.BufferAttribute( FrontleanToRightStorageGableUVS, 2 ) );
                Geo.visible = (params.add_storage_check_front!=false)?true:false;  
                Geo.scale.set(params.leanF_p_w,roofMiddleHeight[params.b_l_t_r_pF][2*params.leanF_p_w],0);
                Geo.position.set(ltFwallPos,params.leanF_p_h,params.leanF_p_d /-4 - storagePos[params.add_storage_front]+5);
                Geo.position.z = params.leanF_p_d /-2+ storagePos[params.add_storage_front];

                Geo.material.map = FWtexture;
                Geo.material.map.wrapS = THREE.RepeatWrapping;
                Geo.material.map.wrapT = THREE.RepeatWrapping;	
                if(params.p_r_s == "1"){
                   Geo.position.set(ltFwallPos,params.leanF_p_h-0.05,params.leanF_p_d/-2+storagePos[params.add_storage_front]);
    
                   Geo.scale.set(params.leanF_p_w,roofMiddleHeight[params.b_l_t_r_pF][2*params.leanF_p_w],0);
               }
                if(params.p_v_w==true){
                    Geo.material.map.repeat.set(params.leanF_p_w-2,1);
                } else {
                    Geo.material.map.repeat.set(1,roofMiddleHeight[params.b_l_t_r_pF][2*params.leanF_p_w]/8);
                }
            }
            if("F_L_R_W_WS" == Geo.name )
            {
                Geo.visible = (params.p_f_b_l==false && params.p_w_c_n == true)?true:false;
                Geo.position.x = params.p_w / -2 - params.leanF_p_w - 0.01;
                Geo.position.z = 0;
                Geo.position.y = 1.5;				
                Geo.scale.set(params.leanF_p_d,3,0);				
                Geo.material.map = FWtexture;
                Geo.material.map.wrapS = THREE.RepeatWrapping;
                Geo.material.map.wrapT = THREE.RepeatWrapping;
                Geo.material.map.offset.x = params.leanF_p_w;
                Geo.material.map.offset.y = params.leanF_p_w;
                if(params.p_v_w==true) {
                    Geo.material.map.repeat.set(params.leanF_p_d-2,1);
                } else {
                    Geo.material.map.repeat.set(1,3/4);
                }
            }
            if("F_L_L_W_WS" == Geo.name )
            {
                var ltBwallPos = params.p_w/-2 - params.leanF_p_w/2;
                Geo.visible = (params.p_f_b_l==false && params.p_w_c_n == true)?true:false;
                Geo.position.x = ltBwallPos;
                Geo.position.z = params.leanF_p_d / -2 - 0.01;
                Geo.position.y = 1.5;
                Geo.scale.set(params.leanF_p_w,3,0);
                Geo.material.map = FWtexture;
                Geo.material.map.wrapS = THREE.RepeatWrapping;
                Geo.material.map.wrapT = THREE.RepeatWrapping;
                Geo.material.map.offset.x = params.leanF_p_w;
                Geo.material.map.offset.y = params.leanF_p_w;
                if(params.p_v_w==true){
                    Geo.material.map.repeat.set(params.leanF_p_w-2,1);
                } else {
                    Geo.material.map.repeat.set(1,3/4);
                }				
            }
            if("F_L_F_W_WS" == Geo.name )
            {
                var ltFwallPos = params.p_w/-2 - params.leanF_p_w/2;
                Geo.visible = (params.p_f_b_l==false && params.p_w_c_n == true)?true:false;
                Geo.position.x = ltFwallPos;
                Geo.position.z = params.leanF_p_d / 2 + 0.01;
                Geo.position.y = 1.5;				
                Geo.scale.set(params.leanF_p_w,3,0);
                Geo.material.morphNormals = true;
                Geo.material.morphTargets = true;							
                Geo.material.map = FWtexture;
                Geo.material.map.wrapS = THREE.RepeatWrapping;
                Geo.material.map.wrapT = THREE.RepeatWrapping;
                Geo.material.map.fog = false;
                if(params.p_v_w==true){
                    Geo.material.map.repeat.set(params.leanF_p_w-2,1);
                } else {
                    Geo.material.map.repeat.set(1,3/4);
                }
            }
           }
          )
         }
         data.rotation.set(0,Math.PI/2,0);
        }
      )
    }
    
    if(params.add_back_lean) {
        var data =const_var.b_t_M_B_t_B;
        data.children.forEach(function(Geo) {
         if(Geo instanceof THREE.Mesh ){
            var wallTexture = horizontalTexture;
            if(params.p_v_w==true){
              wallTexture = verticalTexture;//verticalTexture.jpeg"
            } else{
              wallTexture = horizontalTexture;//"horizantalTexture.jpeg";
             }
            var frontWallLoader = new THREE.TextureLoader();
            var  FWtexture = frontWallLoader.load(wallTexture, function() {
            FWtexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
            FWtexture.wrapS = THREE.RepeatWrapping;
            FWtexture.wrapT = THREE.RepeatWrapping;
      
            //New Geo For Lean To LefWall
            if("B_L_F_W" == Geo.name )
            {
                Geo.visible = (params.p_b_b_l==false)?true:false;
                Geo.position.x = params.p_d / -2 - params.leanB_p_w;
                Geo.position.z = 0;
                /*var fbGableLoader = new THREE.TextureLoader();
                var texture1 = fbGableLoader.load(wallTexture, function(texture1) {
                   texture1.wrapS = THREE.RepeatWrapping;
                   texture1.wrapT = THREE.RepeatWrapping;
               });*/
                Geo.material.map = FWtexture;
                Geo.material.map.wrapS = THREE.RepeatWrapping;
                Geo.material.map.wrapT = THREE.RepeatWrapping;
                Geo.material.map.offset.x = params.leanB_p_w;
                Geo.material.map.offset.y = params.leanB_p_w;
                
                var wH = params.leanB_p_h;
                var wP = params.leanB_p_h - wH/2;
                Geo.position.y = wP;				
                Geo.scale.set(params.leanB_p_d,wH,0);				
                switch(params.p_b_c_b_b_l)
                {
                    case "One_Fourth_Close":
                        wH = wH/4;
                        wP = params.leanB_p_h - wH/2;
                        break;
                    case "Half_Close":
                        wH = wH/2;
                        wP = params.leanB_p_h - wH/2;
                        break;					
                    case "Three_Fourth_Close":
                        wH = wH * 3/4;
                        wP = params.leanB_p_h - wH/2;
                        break;
                    case "Extended Gable":
                        break;
                    case "Gable":
                        break;
                    case "Close":
                        wH = params.leanB_p_h;
                        wP = params.leanB_p_h - wH/2;
                        break;
                    default:
                        if(params.p_r_s == "1"){
                            wH = (Math.abs(params.p_b_c_b_b_l.replace(/\D/g, "")) * 3)+0.3;
                            wP = params.leanB_p_h - wH/2;
                        }else{
                        wH = (Math.abs(params.p_b_c_b_b_l.replace(/\D/g, "")) * 3);
                        wP = params.leanB_p_h - wH/2;
                        }
                        break;
                }
      
                if(params.p_r_s == "1"){			
                    Geo.position.y = wP-0.3;				
                    Geo.scale.set(params.leanB_p_d,wH-0.3,0);
                }else{
                    Geo.position.y = wP;				
                    Geo.scale.set(params.leanB_p_d,wH,0);
                }
      
                if(params.p_v_w==true)
                {
                    Geo.material.map.repeat.set(params.leanB_p_d-2,1);
                }else
                {
                    Geo.material.map.repeat.set(1,wH/4);
                }
            }
            
            if("B_L_R_W" == Geo.name )
            {
                var ltFwallPos = params.p_d/-2 - params.leanB_p_w/2;
                var ltFwallPos = params.p_d/-2 - params.leanB_p_w/2;
      
                Geo.visible = (params.p_b_b_l==false)?true:false;
                // Geo.position.x = params.p_w/-2 - params.leanB_p_w/2;
                // Geo.position.z = params.leanB_p_d / 2;  
                Geo.position.set(ltFwallPos,params.leanB_p_h,params.leanB_p_d/2);
          
                Geo.material.morphNormals = true;
                Geo.material.morphTargets = true;							
                Geo.material.map = FWtexture;
                Geo.material.map.wrapS = THREE.RepeatWrapping;
                Geo.material.map.wrapT = THREE.RepeatWrapping;
                Geo.material.map.offset.x = params.leanB_p_w;
                Geo.material.map.offset.y = params.leanB_p_w;
                
                var wH = params.leanB_p_h;
                var wP = params.leanB_p_h - wH/2;
                Geo.position.y = wP;				
                Geo.scale.set(params.leanB_p_w,wH,0);
                
                switch(params.p_b_c_b_b_b)
                {
                    case "One_Fourth_Close":
                        wH = wH/4;
                        wP = params.leanB_p_h - wH/2;
                        break;
                    case "Half_Close":
                        wH = wH/2;
                        wP = params.leanB_p_h - wH/2;
                        break;					
                    case "Three_Fourth_Close":
                        wH = wH * 3/4;
                        wP = params.leanB_p_h - wH/2;
                        break;
                    case "Extended Gable":
                        wH = wH/6;
                        wP = params.leanB_p_h - wH/2;
                        break;
                    case "Gable":
                        wH = wH/18;
                        wP = params.leanB_p_h - wH/2;
                        break;
                    case "Close":
                        wH = params.leanB_p_h;
                        wP = params.leanB_p_h - wH/2;
                        break;
                    default:
                        wH = Math.abs(params.p_b_c_b_b_b.replace(/\D/g, "")) * 3;
                        wP = params.leanB_p_h - wH/2;				
                        break;
                }
                Geo.position.y = wP;				
                Geo.scale.set(params.leanB_p_w,wH,0);
                
                if(params.p_v_w==true){
                    Geo.material.map.repeat.set(params.leanB_p_w-2,1);
                }else {
                    Geo.material.map.repeat.set(1,wH/4);
                }
            }
      
            //New Geo For Back Wall
            if("B_L_L_W" == Geo.name )
            {
                var wallPos = params.p_d/-2 - params.leanB_p_w/2;
                Geo.visible = (params.p_b_c_b_b_f !="Open")?true:false;  
                // Geo.visible = (params.p_b_b_l==false)?true:false;
      
                Geo.scale.set(params.leanB_p_w,params.leanB_p_h,0);
                Geo.position.set(wallPos,params.leanB_p_h/2,params.leanB_p_d / -2);
                Geo.material.map = FWtexture;
                Geo.material.map.wrapS = THREE.RepeatWrapping;
                Geo.material.map.wrapT = THREE.RepeatWrapping;
                Geo.material.map.offset.x = params.leanB_p_w;
                Geo.material.map.offset.y = params.leanB_p_w;
          
                
                var wH = params.leanB_p_h;
                var wP = params.leanB_p_h - wH/2;
                Geo.position.y = wP;				
                Geo.scale.set(params.leanB_p_w,params.leanB_p_h,0);
                switch(params.p_b_c_b_b_f)
                {
                    case "One_Fourth_Close":
                        wH = wH/4;
                        wP = params.leanB_p_h - wH/2;
                        break;
                    case "Half_Close":
                        wH = wH/2;
                        wP = params.leanB_p_h - wH/2;
                        break;					
                    case "Three_Fourth_Close":
                        wH = wH * 3/4;
                        wP = params.leanB_p_h - wH/2;
                        break;
                    case "Extended Gable":
                        wH = wH/6;
                        wP = params.leanB_p_h - wH/2;
                        break;
                    case "Gable":
                        wH = wH/18;
                        wP = params.leanB_p_h - wH/2; 
                        break;
                    case "Close":
                        wH = params.leanB_p_h;
                        wP = params.leanB_p_h - wH/2;
                        break;
                    default:
                        wH = Math.abs(params.p_b_c_b_b_l.replace(/\D/g, "")) * 3;
                        wP = params.leanB_p_h - wH/2;				
                        break;
                }
                Geo.position.y = wP;				
                Geo.scale.set(params.leanB_p_w,wH,0);
         
                
                if(params.p_v_w==true){
                    Geo.material.map.repeat.set(params.leanB_p_w-2,1);
                } else {
                    Geo.material.map.repeat.set(1,wH/4);
                }				
            }
      
            //Front Wall for Left Lean to  Storage
            if("B_L_L_S_W" == Geo.name )
            {
                var ltFwallPos = params.p_d/-2 - params.leanB_p_w/2;	
                Geo.position.x = ltFwallPos;
                Geo.position.y =  params.leanB_p_h/2
                Geo.position.z = params.leanB_p_d /2 - storagePos[params.add_storage_back];
                Geo.scale.set(params.leanB_p_w,params.leanB_p_h,0);
                Geo.visible = (params.add_storage_check_back!=false)?true:false;
                Geo.material.morphNormals = true;
                Geo.material.morphTargets = true;		
                Geo.material.map = FWtexture;
                Geo.material.map.wrapS = THREE.RepeatWrapping;
                Geo.material.map.wrapT = THREE.RepeatWrapping;
                Geo.material.map.offset.x = params.leanB_p_w;
                Geo.material.map.offset.y = params.leanB_p_w;
                if(params.p_r_s == "1"){
                    Geo.position.y =  params.leanB_p_h/2-0.05
                  }
                if(params.p_v_w==true){
                    Geo.material.map.repeat.set(params.leanB_p_w-2,1);
                }else{
                    Geo.material.map.repeat.set(1,params.leanB_p_h/4);
                }
            }
            if("B_L_R_S_W" == Geo.name )
            {
                var wallPos = params.p_d/-2 - params.leanB_p_w/2;
                Geo.visible = (params.add_storage_check_back!=false)?true:false;
                if(params.p_b_w == "Close"){ Geo.visible = false;}
                Geo.scale.set(params.leanB_p_w,params.leanB_p_h,0);
                Geo.position.set(wallPos,params.leanB_p_h/2,params.leanB_p_d / 2);
                Geo.material.map = FWtexture;
                Geo.material.map.wrapS = THREE.RepeatWrapping;
                Geo.material.map.wrapT = THREE.RepeatWrapping;
                Geo.material.map.offset.x = params.leanB_p_w;
                Geo.material.map.offset.y = params.leanB_p_w;
                if(params.p_v_w==true){
                    Geo.material.map.repeat.set(params.leanB_p_w-2,1);
                } else{
                    Geo.material.map.repeat.set(1,params.leanB_p_h/4);
                }				
            }
      
            if("B_L_F_S_W" == Geo.name )
            {
      
                Geo.visible = (params.add_storage_check_back!=false)?true:false;  
                Geo.position.x = params.p_d / -2 - params.leanB_p_w;
                Geo.position.y = params.leanB_p_h/2;				
                Geo.position.z = (params.leanB_p_d/2)-storagePos[params.add_storage_back]/2;
                Geo.scale.set(storagePos[params.add_storage_back],params.leanB_p_h,0);
                Geo.material.map = FWtexture;
                Geo.material.map.wrapS = THREE.RepeatWrapping;
                Geo.material.map.wrapT = THREE.RepeatWrapping;
                Geo.material.map.offset.x = params.leanB_p_w;
                Geo.material.map.offset.y = params.leanB_p_w;
                if(params.p_r_s == "1"){			
                    Geo.position.y =  (params.leanB_p_h - params.leanB_p_h/2)-0.3;				
                   }else{
                    Geo.position.y = params.leanB_p_h/2;				
                   } 
                if(params.p_v_w==true) {
                    Geo.material.map.repeat.set(params.leanB_p_w-2,1);
                } else {
                    Geo.material.map.repeat.set(1,params.leanB_p_h/4);
                }
            }
            if("B_L_B_S_W" == Geo.name )
            {
                Geo.visible = (params.add_storage_check_back!=false)?true:false;  
                Geo.scale.set(storagePos[params.add_storage_back],params.p_h,0)
                Geo.position.x = params.p_w /-2 -5-0.5;
                Geo.position.y = params.p_h/2; 
                Geo.position.z = (params.leanB_p_d/2)-storagePos[params.add_storage_back]/2;
                Geo.material.map = FWtexture;
                Geo.material.emissiveIntensity = 1;
                Geo.material.map.wrapS = THREE.RepeatWrapping;
                Geo.material.map.wrapT = THREE.RepeatWrapping;
                Geo.material.map.offset.x = params.p_w;
                Geo.material.map.offset.y = params.p_w;
                if(params.p_v_w==true)
                {
                    Geo.material.map.repeat.set(params.p_w-2,1);
                }else
                {
                   
                    Geo.material.map.repeat.set(1,params.p_h/4);
                }
            }
            if("B_L_R_G" == Geo.name )
            {
                var ltFwallPos = params.p_d/-2 - params.leanB_p_w/2;
                if(params.p_v_w==true){
                    var backLeanToRightGableUVS = new Float32Array([
                      -1.0, -1.0,
                      0.0, -1.0,
                      0.0, -1.0,
                    ]);
                } else {
                    var backLeanToRightGableUVS = new Float32Array([
                      2.0, 0.0,
                      0.0, 0.0,
                      2.0, 2.0,
                    ]);
                }
                Geo.geometry.setAttribute( 'uv', new THREE.BufferAttribute( backLeanToRightGableUVS, 2 ) );
                Geo.visible = (params.p_b_c_b_b_b !="Open" || params.add_storage_check_back!=false)?true:false;  
                Geo.scale.set(params.leanB_p_w,roofMiddleHeight[params.b_l_t_r_pB][2*params.leanB_p_w],0);
                Geo.position.set(ltFwallPos,params.leanB_p_h,params.leanB_p_d/2);
                Geo.material.map = FWtexture;
                Geo.material.map.wrapS = THREE.RepeatWrapping;
                Geo.material.map.wrapT = THREE.RepeatWrapping;	
                if(params.p_v_w==true){
                    Geo.material.map.repeat.set(params.leanB_p_w-2,1);
                } else {
                    Geo.material.map.repeat.set(1,roofMiddleHeight[params.b_l_t_r_pB][2*params.leanB_p_w]/8);
                }
            }
            if("B_L_L_G" == Geo.name )
            {
                var ltFwallPos = params.p_d/-2 - params.leanB_p_w/2;
                if(params.p_v_w==true) {
                    var backLeanToLeftGableUVS = new Float32Array([
                      -1.0, -1.0,
                      0.0, -1.0,
                      0.0, -1.0,
                    ]);
                } else {
                    var backLeanToLeftGableUVS = new Float32Array([
                      2.0, 0.0,
                      0.0, 0.0,
                      2.0, 2.0,
                    ]);
                }
                Geo.geometry.setAttribute( 'uv', new THREE.BufferAttribute( backLeanToLeftGableUVS, 2 ) );
                Geo.visible = (params.p_b_c_b_b_f !="Open" )?true:false;  
                Geo.scale.set(params.leanB_p_w,roofMiddleHeight[params.b_l_t_r_pB][2*params.leanB_p_w],0);
                Geo.position.set(ltFwallPos,params.leanB_p_h,params.leanB_p_d / -2);
                Geo.material.map = FWtexture;
                Geo.material.map.wrapS = THREE.RepeatWrapping;
                Geo.material.map.wrapT = THREE.RepeatWrapping;	
                if(params.p_v_w==true) {
                    Geo.material.map.repeat.set(params.leanB_p_w-2,1);
                } else {
                    Geo.material.map.repeat.set(1,roofMiddleHeight[params.b_l_t_r_pB][2*params.leanB_p_w]/8);
                }
            }
            if("B_L_L_S_G" == Geo.name )
            {
                var ltFwallPos = params.p_d/-2 - params.leanB_p_w/2;
                if(params.p_v_w==true){
                    var backLeanToLeftStorageGableUVS = new Float32Array([
                      -1.0, -1.0,
                      0.0, -1.0,
                      0.0, -1.0,
                    ]);
                } else {
                    var backLeanToLeftStorageGableUVS = new Float32Array([
                      2.0, 0.0,
                      0.0, 0.0,
                      2.0, 2.0,
                    ]);
                }
                Geo.geometry.setAttribute( 'uv', new THREE.BufferAttribute( backLeanToLeftStorageGableUVS, 2 ) );
                Geo.visible = (params.add_storage_check_back!=false)?true:false;  
                Geo.scale.set(params.leanB_p_w,roofMiddleHeight[params.b_l_t_r_pB][2*params.leanB_p_w],0);
                Geo.position.set(ltFwallPos,params.leanB_p_h,params.leanB_p_d /-4 - storagePos[params.add_storage_back]+5);
                Geo.position.z = params.leanB_p_d /2- storagePos[params.add_storage_back];
      
                Geo.material.map = FWtexture;
                Geo.material.map.wrapS = THREE.RepeatWrapping;
                Geo.material.map.wrapT = THREE.RepeatWrapping;	
                if(params.p_r_s == "1"){
                   Geo.position.set(ltFwallPos,params.leanB_p_h-0.05,params.leanB_p_d/-2+storagePos[params.add_storage_back]);
      
                   Geo.scale.set(params.leanB_p_w,roofMiddleHeight[params.b_l_t_r_pB][2*params.leanB_p_w],0);
               }
                if(params.p_v_w==true){
                    Geo.material.map.repeat.set(params.leanB_p_w-2,1);
                } else {
                    Geo.material.map.repeat.set(1,roofMiddleHeight[params.b_l_t_r_pB][2*params.leanB_p_w]/8);
                }
            }
            if("B_L_B_W_WS" == Geo.name )
            {
                Geo.visible = (params.p_b_b_l==false && params.p_w_c_n == true)?true:false;
                Geo.position.x = params.p_w / -2 - params.leanB_p_w - 0.01;
                Geo.position.z = 0;
                Geo.position.y = 1.5;				
                Geo.scale.set(params.leanB_p_d,3,0);				
                Geo.material.map = FWtexture;
                Geo.material.map.wrapS = THREE.RepeatWrapping;
                Geo.material.map.wrapT = THREE.RepeatWrapping;
                Geo.material.map.offset.x = params.leanB_p_w;
                Geo.material.map.offset.y = params.leanB_p_w;
                if(params.p_v_w==true) {
                    Geo.material.map.repeat.set(params.leanB_p_d-2,1);
                } else {
                    Geo.material.map.repeat.set(1,3/4);
                }
            }
            if("B_L_F_W_WS" == Geo.name )
            {
                var ltBwallPos = params.p_w/-2 - params.leanB_p_w/2;
                Geo.visible = (params.p_b_b_l==false && params.p_w_c_n == true)?true:false;
                Geo.position.x = ltBwallPos;
                Geo.position.z = params.leanB_p_d / -2 - 0.01;
                Geo.position.y = 1.5;
                Geo.scale.set(params.leanB_p_w,3,0);
                Geo.material.map = FWtexture;
                Geo.material.map.wrapS = THREE.RepeatWrapping;
                Geo.material.map.wrapT = THREE.RepeatWrapping;
                Geo.material.map.offset.x = params.leanB_p_w;
                Geo.material.map.offset.y = params.leanB_p_w;
                if(params.p_v_w==true){
                    Geo.material.map.repeat.set(params.leanB_p_w-2,1);
                } else {
                    Geo.material.map.repeat.set(1,3/4);
                }				
            }
            if("B_L_B_W_WS" == Geo.name )
            {
                var ltFwallPos = params.p_w/-2 - params.leanB_p_w/2;
                Geo.visible = (params.p_b_b_l==false && params.p_w_c_n == true)?true:false;
                Geo.position.x = ltFwallPos;
                Geo.position.z = params.leanB_p_d / 2 + 0.01;
                Geo.position.y = 1.5;				
                Geo.scale.set(params.leanB_p_w,3,0);
                Geo.material.morphNormals = true;
                Geo.material.morphTargets = true;							
                Geo.material.map = FWtexture;
                Geo.material.map.wrapS = THREE.RepeatWrapping;
                Geo.material.map.wrapT = THREE.RepeatWrapping;
                Geo.material.map.fog = false;
                if(params.p_v_w==true){
                    Geo.material.map.repeat.set(params.leanB_p_w-2,1);
                } else {
                    Geo.material.map.repeat.set(1,3/4);
                }
            }
           }
          )
         }
         data.rotation.set(0,Math.PI/-2,0);
        }
      )
    }
    
    if(params.add_left_lean) {
        var data =const_var.b_t_M_L_t_L;
        data.children.forEach(function(a) {
         if(a instanceof THREE.Mesh ){
            var wallTexture = horizontalTexture;
            if(params.p_v_w==true){
              wallTexture = verticalTexture;//verticalTexture.jpeg"
            } else{
              wallTexture = horizontalTexture;//"horizantalTexture.jpeg";
             }
            var frontWallLoader = new THREE.TextureLoader();
            var  FWtexture = frontWallLoader.load(wallTexture, function() {
            FWtexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
            FWtexture.wrapS = THREE.RepeatWrapping;
            FWtexture.wrapT = THREE.RepeatWrapping;

            //New Geo For Lean To LefWall
            if("b_h_t5_new" == a.name )
            {
                a.visible = (params.p_l_b_l==false)?true:false;
                a.position.x = params.p_w / -2 - params.lean_p_w;
                a.position.z = 0;
                                
                /*var frontWallLoader = new THREE.TextureLoader();
                var FWtexture = frontWallLoader.load(wallTexture, function() {
                    FWtexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
                    FWtexture.wrapS = THREE.RepeatWrapping;
                    FWtexture.wrapT = THREE.RepeatWrapping;
                });*/
                a.material.map = FWtexture;
                a.material.map.wrapS = THREE.RepeatWrapping;
                a.material.map.wrapT = THREE.RepeatWrapping;
                a.material.map.offset.x = params.lean_p_w;
                a.material.map.offset.y = params.lean_p_w;
                
                var wH = params.lean_p_h;
                var wP = params.lean_p_h - wH/2;
                a.position.y = wP;				
                a.scale.set(params.lean_p_d,wH,0);				
                switch(params.p_b_c_b_l)
                {
                    case "One_Fourth_Close":
                        wH = wH/4;
                        wP = params.lean_p_h - wH/2;
                        break;
                    case "Half_Close":
                        wH = wH/2;
                        wP = params.lean_p_h - wH/2;
                        break;					
                    case "Three_Fourth_Close":
                        wH = wH * 3/4;
                        wP = params.lean_p_h - wH/2;
                        break;
                    case "Extended Gable":
                        break;
                    case "Gable":
                        break;
                    case "Close":
                        wH = params.lean_p_h;
                        wP = params.lean_p_h - wH/2;
                        break;
                    default:
                        if(params.p_r_s == "1"){
                            wH = (Math.abs(params.p_b_c_b_l.replace(/\D/g, "")) * 3)+0.3;
                            wP = params.lean_p_h - wH/2;
                        }else{
                        wH = (Math.abs(params.p_b_c_b_l.replace(/\D/g, "")) * 3);
                        wP = params.lean_p_h - wH/2;
                        }
                        break;
                }

                if(params.p_r_s == "1"){			
                    a.position.y = wP-0.3;				
                    a.scale.set(params.lean_p_d,wH-0.3,0);
                }else{
                    a.position.y = wP;				
                    a.scale.set(params.lean_p_d,wH,0);
                }

                if(params.p_v_w==true)
                {
                    a.material.map.repeat.set(params.lean_p_d-2,1);
                }else
                {
                    a.material.map.repeat.set(1,wH/4);
                }
            }
            
            if("b_h_t2_new" == a.name )
            {
                var ltFwallPos = params.p_w/-2 - params.lean_p_w/2;	
                a.visible = (params.p_l_b_l==false)?true:false;
                a.position.x = ltFwallPos;
                a.position.z = params.lean_p_d / 2;                
                a.material.morphNormals = true;
                a.material.morphTargets = true;							
                /*var frontWallLoader = new THREE.TextureLoader();
                var FWtexture = frontWallLoader.load(wallTexture, function() {
                    FWtexture.anisotropy = 90;
                    FWtexture.wrapS = THREE.RepeatWrapping;
                    FWtexture.wrapT = THREE.RepeatWrapping;
                });*/	
                a.material.map = FWtexture;
                a.material.map.wrapS = THREE.RepeatWrapping;
                a.material.map.wrapT = THREE.RepeatWrapping;
                a.material.map.offset.x = params.lean_p_w;
                a.material.map.offset.y = params.lean_p_w;
                
                var wH = params.lean_p_h;
                var wP = params.lean_p_h - wH/2;
                a.position.y = wP;				
                a.scale.set(params.lean_p_w,wH,0);
                
                switch(params.p_b_c_b_l_f)
                {
                    case "One_Fourth_Close":
                        wH = wH/4;
                        wP = params.lean_p_h - wH/2;
                        break;
                    case "Half_Close":
                        wH = wH/2;
                        wP = params.lean_p_h - wH/2;
                        break;					
                    case "Three_Fourth_Close":
                        wH = wH * 3/4;
                        wP = params.lean_p_h - wH/2;
                        break;
                    case "Extended Gable":
                        wH = wH/6;
                        wP = params.lean_p_h - wH/2;
                        break;
                    case "Gable":
                        wH = wH/18;
                        wP = params.lean_p_h - wH/2; 
                        break;
                    case "Close":
                        wH = params.lean_p_h;
                        wP = params.lean_p_h - wH/2;
                        break;
                    default:
                        wH = Math.abs(params.p_b_c_b_l_f.replace(/\D/g, "")) * 3;
                        wP = params.lean_p_h - wH/2;				
                        break;
                }
                a.position.y = wP;				
                a.scale.set(params.lean_p_w,wH,0);
                
                if(params.p_v_w==true)
                {
                    a.material.map.repeat.set(params.lean_p_w-2,1);
                }else
                {
                    a.material.map.repeat.set(1,wH/4);
                }
            }

            //New Geo For Back Wall
            if("b_h_t2B_new" == a.name )
            {
                var ltBwallPos = params.p_w/-2 - params.lean_p_w/2;	
                a.visible = (params.p_l_b_l==false)?true:false;
                a.position.x = ltBwallPos;
                a.position.z = params.lean_p_d / -2;
                
                /*var frontWallLoader = new THREE.TextureLoader();
                var FWtexture = frontWallLoader.load(wallTexture, function() {
                    FWtexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
                    FWtexture.wrapS = THREE.RepeatWrapping;
                    FWtexture.wrapT = THREE.RepeatWrapping;
                });*/
                a.material.map = FWtexture;
                a.material.map.wrapS = THREE.RepeatWrapping;
                a.material.map.wrapT = THREE.RepeatWrapping;
                a.material.map.offset.x = params.lean_p_w;
                a.material.map.offset.y = params.lean_p_w;
                
                var wH = params.lean_p_h;
                var wP = params.lean_p_h - wH/2;
                a.position.y = wP;				
                a.scale.set(params.lean_p_w,wH,0);								
                switch(params.p_b_c_b_l_b)
                {
                    case "One_Fourth_Close":
                        wH = wH/4;
                        wP = params.lean_p_h - wH/2;
                        break;
                    case "Half_Close":
                        wH = wH/2;
                        wP = params.lean_p_h - wH/2;
                        break;					
                    case "Three_Fourth_Close":
                        wH = wH * 3/4;
                        wP = params.lean_p_h - wH/2;
                        break;
                    case "Extended Gable":
                        break;
                    case "Gable":
                        break;
                    case "Close":
                        wH = params.lean_p_h;
                        wP = params.lean_p_h - wH/2;
                        break;
                    default:
                        wH = Math.abs(params.p_b_c_b_l_b.replace(/\D/g, "")) * 3;
                        wP = params.lean_p_h - wH/2;				
                        break;
                }
                
                a.position.y = wP;				
                a.scale.set(params.lean_p_w,wH,0);
                
                if(params.p_v_w==true)
                {
                    a.material.map.repeat.set(params.lean_p_w-2,1);
                }else
                {
                    a.material.map.repeat.set(1,wH/4);
                }				
            }
            //Front Wall for Left Lean to  Storage
            if("b_h_t2_s" == a.name )
            {

                var ltFwallPos = params.p_w/-2 - params.lean_p_w/2;	
                a.position.x = ltFwallPos;
                a.position.y =  params.lean_p_h/2
                a.position.z = params.lean_p_d / -2 + storagePos[params.add_storage];  
                a.scale.set(params.lean_p_w,params.lean_p_h,0);
                a.visible = (params.add_storage_check!=false)?true:false;
                a.material.morphNormals = true;
                a.material.morphTargets = true;		
                /*var frontWallLoader = new THREE.TextureLoader();
                var FWtexture = frontWallLoader.load(wallTexture, function() {
                    FWtexture.anisotropy = 90;
                    FWtexture.wrapS = THREE.RepeatWrapping;
                    FWtexture.wrapT = THREE.RepeatWrapping;
                });*/	
                a.material.map = FWtexture;
                a.material.map.wrapS = THREE.RepeatWrapping;
                a.material.map.wrapT = THREE.RepeatWrapping;
                a.material.map.offset.x = params.lean_p_w;
                a.material.map.offset.y = params.lean_p_w;
                if(params.p_r_s == "1"){
                    a.position.y =  params.lean_p_h/2-0.05
                  }
                if(params.p_v_w==true)
                {
                    a.material.map.repeat.set(params.lean_p_w-2,1);
                }else
                {
                    a.material.map.repeat.set(1,params.lean_p_h/4);
                }
            }
            if("b_h_t2B_s" == a.name )
            {
                var ltBwallPos = params.p_w/-2 - params.lean_p_w/2;	
                a.visible = (params.add_storage_check!=false)?true:false;
                if(params.p_b_w == "Close"){ a.visible = false;}
                a.position.x = ltBwallPos;
                a.position.z = params.lean_p_d / -2;
                a.position.y = params.lean_p_h/2;				
                a.scale.set(params.lean_p_w,params.lean_p_h,0);
                /*var frontWallLoader = new THREE.TextureLoader();
                var FWtexture = frontWallLoader.load(wallTexture, function() {
                    FWtexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
                    FWtexture.wrapS = THREE.RepeatWrapping;
                    FWtexture.wrapT = THREE.RepeatWrapping;
                });*/
                a.material.map = FWtexture;
                a.material.map.wrapS = THREE.RepeatWrapping;
                a.material.map.wrapT = THREE.RepeatWrapping;
                a.material.map.offset.x = params.lean_p_w;
                a.material.map.offset.y = params.lean_p_w;
                if(params.p_v_w==true)
                {
                    a.material.map.repeat.set(params.lean_p_w-2,1);
                }else
                {
                    a.material.map.repeat.set(1,params.lean_p_h/4);
                }				
            }

            if("b_h_t5_s" == a.name )
            {
                a.visible = (params.add_storage_check!=false)?true:false;  
                a.position.x = params.p_w / -2 - params.lean_p_w;
                a.position.z = (params.lean_p_d/-2)+storagePos[params.add_storage]/2;
                a.position.y = params.lean_p_h/2;				
                a.scale.set(storagePos[params.add_storage],params.lean_p_h,0);
             
                /*var frontWallLoader = new THREE.TextureLoader();
                var FWtexture = frontWallLoader.load(wallTexture, function() {
                    FWtexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
                    FWtexture.wrapS = THREE.RepeatWrapping;
                    FWtexture.wrapT = THREE.RepeatWrapping;
                });*/
                a.material.map = FWtexture;
                a.material.map.wrapS = THREE.RepeatWrapping;
                a.material.map.wrapT = THREE.RepeatWrapping;
                a.material.map.offset.x = params.lean_p_w;
                a.material.map.offset.y = params.lean_p_w;
                if(params.p_r_s == "1"){			
                    a.position.y =  (params.lean_p_h - params.lean_p_h/2)-0.3;				
                   }else{
                    a.position.y = params.lean_p_h/2;				
                   } 
                if(params.p_v_w==true)
                {
                    a.material.map.repeat.set(params.lean_p_d-2,1);
                }else
                {
                    a.material.map.repeat.set(1,params.lean_p_h/4);
                }
            }

            if("b_h_t5R_s" == a.name )
            {
                a.visible = (params.add_storage_check!=false)?true:false;  
                a.scale.set(storagePos[params.add_storage],params.p_h,0)
                a.position.x = params.p_w /-2;
                a.position.z = (params.lean_p_d/-2)+storagePos[params.add_storage]/2;
                a.position.y = params.p_h/2; 
                a.material.envMap = FWtexture;
                a.material.emissiveMap = FWtexture;
                a.material.emissiveIntensity = 1;
                a.material.map = FWtexture;
                a.material.map.wrapS = THREE.RepeatWrapping;
                a.material.map.wrapT = THREE.RepeatWrapping;
                a.material.map.offset.x = params.p_w;
                a.material.map.offset.y = params.p_w;
                if(params.p_v_w==true)
                {
                    a.material.map.repeat.set(params.p_d-2,1);
                }else
                {
                   
                    a.material.map.repeat.set(1,params.p_h/4);
                }
            }
            if("leanToLeftfGable" == a.name )
            {
                var ltFwallPos = params.p_w/-2 - params.lean_p_w/2;
                if(params.p_v_w==true)
                {
                    var leanToLeftfGableUVS = new Float32Array([
                      -1.0, -1.0,
                      0.0, -1.0,
                      0.0, -1.0,
                    ]);
                }
                else
                {
                    var leanToLeftfGableUVS = new Float32Array([
                      2.0, 0.0,
                      0.0, 0.0,
                      2.0, 2.0,
                    ]);
                }
                a.geometry.setAttribute( 'uv', new THREE.BufferAttribute( leanToLeftfGableUVS, 2 ) );
                /*var fbGableLoader = new THREE.TextureLoader();
                var texture1 = fbGableLoader.load(wallTexture, function(texture1) {
                   texture1.wrapS = THREE.RepeatWrapping;
                   texture1.wrapT = THREE.RepeatWrapping;
               });*/
                a.visible = (params.p_b_c_b_l_f !="Open")?true:false;  
                a.scale.set(params.lean_p_w,roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w],0);
                a.position.set(ltFwallPos,params.lean_p_h,params.lean_p_d/2);
                a.material.map = FWtexture;
                a.material.map.wrapS = THREE.RepeatWrapping;
                a.material.map.wrapT = THREE.RepeatWrapping;	
                if(params.p_v_w==true)
                {
                    a.material.map.repeat.set(params.lean_p_w-2,1);
                }
                else
                {
                    a.material.map.repeat.set(1,roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w]/8);
                }
            }
            if("leanToLeftbGable" == a.name )
            {
                var ltFwallPos = params.p_w/-2 - params.lean_p_w/2;
                if(params.p_v_w==true)
                {
                    var leanToLeftbGableUVS = new Float32Array([
                      -1.0, -1.0,
                      0.0, -1.0,
                      0.0, -1.0,
                    ]);
                }
                else
                {
                    var leanToLeftbGableUVS = new Float32Array([
                      2.0, 0.0,
                      0.0, 0.0,
                      2.0, 2.0,
                    ]);
                }
                a.geometry.setAttribute( 'uv', new THREE.BufferAttribute( leanToLeftbGableUVS, 2 ) );
                /*var fbGableLoader = new THREE.TextureLoader();
                var texture1 = fbGableLoader.load(wallTexture, function(texture1) {
                   texture1.wrapS = THREE.RepeatWrapping;
                   texture1.wrapT = THREE.RepeatWrapping;
               });*/
                a.visible = (params.p_b_c_b_l_b !="Open" || params.add_storage_check!=false)?true:false;  
                a.scale.set(params.lean_p_w,roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w],0);
                a.position.set(ltFwallPos,params.lean_p_h,params.lean_p_d/-2);
                a.material.map = FWtexture;
                a.material.map.wrapS = THREE.RepeatWrapping;
                a.material.map.wrapT = THREE.RepeatWrapping;	
                if(params.p_v_w==true)
                {
                    a.material.map.repeat.set(params.lean_p_w-2,1);
                }
                else
                {
                    a.material.map.repeat.set(1,roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w]/8);
                }
            }
            if("leanToLeftStorageGable" == a.name )
            {
                var ltFwallPos = params.p_w/-2 - params.lean_p_w/2;
                if(params.p_v_w==true)
                {
                    var leanToLeftStorageGableUVS = new Float32Array([
                      -1.0, -1.0,
                      0.0, -1.0,
                      0.0, -1.0,
                    ]);
                }
                else
                {
                    var leanToLeftStorageGableUVS = new Float32Array([
                      2.0, 0.0,
                      0.0, 0.0,
                      2.0, 2.0,
                    ]);
                }
                a.geometry.setAttribute( 'uv', new THREE.BufferAttribute( leanToLeftStorageGableUVS, 2 ) );
                /*var fbGableLoader = new THREE.TextureLoader();
                var texture1 = fbGableLoader.load(wallTexture, function(texture1) {
                   texture1.wrapS = THREE.RepeatWrapping;
                   texture1.wrapT = THREE.RepeatWrapping;
               });*/
                a.visible = (params.add_storage_check!=false)?true:false;  
                a.scale.set(params.lean_p_w,roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w],0);
                a.position.set(ltFwallPos,params.lean_p_h,params.lean_p_d/-2+storagePos[params.add_storage]);
                a.material.map = FWtexture;
                a.material.map.wrapS = THREE.RepeatWrapping;
                a.material.map.wrapT = THREE.RepeatWrapping;	
                if(params.p_r_s == "1")
               {
                   a.position.set(ltFwallPos,params.lean_p_h-0.05,params.lean_p_d/-2+storagePos[params.add_storage]);

                   a.scale.set(params.lean_p_w,roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w],0);
               }
                if(params.p_v_w==true)
                {
                    a.material.map.repeat.set(params.lean_p_w-2,1);
                }
                else
                {
                    a.material.map.repeat.set(1,roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w]/8);
                }
            }
            if("b_h_t5_new_w" == a.name )
            {
                a.visible = (params.p_l_b_l==false && params.p_w_c_n == true)?true:false;
                a.position.x = params.p_w / -2 - params.lean_p_w - 0.01;
                a.position.z = 0;
                a.position.y = 1.5;				
                a.scale.set(params.lean_p_d,3,0);				
                a.material.map = FWtexture;
                a.material.map.wrapS = THREE.RepeatWrapping;
                a.material.map.wrapT = THREE.RepeatWrapping;
                a.material.map.offset.x = params.lean_p_w;
                a.material.map.offset.y = params.lean_p_w;
                if(params.p_v_w==true)
                {
                    a.material.map.repeat.set(params.lean_p_d-2,1);
                }else
                {
                    a.material.map.repeat.set(1,3/4);
                }
            }
            if("b_h_t2B_new_w" == a.name )
            {
                var ltBwallPos = params.p_w/-2 - params.lean_p_w/2;
                a.visible = (params.p_l_b_l==false && params.p_w_c_n == true)?true:false;
                a.position.x = ltBwallPos;
                a.position.z = params.lean_p_d / -2 - 0.01;
                a.position.y = 1.5;
                a.scale.set(params.lean_p_w,3,0);
                a.material.map = FWtexture;
                a.material.map.wrapS = THREE.RepeatWrapping;
                a.material.map.wrapT = THREE.RepeatWrapping;
                a.material.map.offset.x = params.lean_p_w;
                a.material.map.offset.y = params.lean_p_w;
                if(params.p_v_w==true)
                {
                    a.material.map.repeat.set(params.lean_p_w-2,1);
                }else
                {
                    a.material.map.repeat.set(1,3/4);
                }				
            }
            if("b_h_t2_new_w" == a.name )
            {
                var ltFwallPos = params.p_w/-2 - params.lean_p_w/2;
                a.visible = (params.p_l_b_l==false && params.p_w_c_n == true)?true:false;
                a.position.x = ltFwallPos;
                a.position.z = params.lean_p_d / 2 + 0.01;
                a.position.y = 1.5;				
                a.scale.set(params.lean_p_w,3,0);
                a.material.morphNormals = true;
                a.material.morphTargets = true;							
                a.material.map = FWtexture;
                a.material.map.wrapS = THREE.RepeatWrapping;
                a.material.map.wrapT = THREE.RepeatWrapping;
                a.material.map.fog = false;
                if(params.p_v_w==true)
                {
                    a.material.map.repeat.set(params.lean_p_w-2,1);
                }else
                {
                    a.material.map.repeat.set(1,3/4);
                }
            }
           }
          )
         }
        }
      )
    }
    
    if(params.add_right_lean) {
    var data =const_var.b_t_M_R_t_R;
    data.children.forEach(function(a) {
     if(a instanceof THREE.Mesh ){
            var wallTexture = horizontalTexture;
            if(params.p_v_w==true){
              wallTexture = verticalTexture;//verticalTexture.jpeg"
            } else{
              wallTexture = horizontalTexture;//"horizantalTexture.jpeg";
             }
            var frontWallLoader = new THREE.TextureLoader();
            var  FWtexture = frontWallLoader.load(wallTexture, function() {
            FWtexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
            FWtexture.wrapS = THREE.RepeatWrapping;
            FWtexture.wrapT = THREE.RepeatWrapping;
            
             //New Geo For Lean To RightWall
          if("b_h_t6_new" == a.name){
              a.visible = (params.p_r_b_l==false)?true:false;
              a.position.x = params.p_w / 2 + params.leanR_p_w;
              a.position.z = 0;
              //a.scale.set(params.p_d,params.p_h,0);
              /*var frontWallLoader = new THREE.TextureLoader();
              var FWtexture = frontWallLoader.load(wallTexture, function() {
                  FWtexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
                  FWtexture.wrapS = THREE.RepeatWrapping;
                  FWtexture.wrapT = THREE.RepeatWrapping;
              });*/
              a.material.map = FWtexture;
              a.material.map.wrapS = THREE.RepeatWrapping;
              a.material.map.wrapT = THREE.RepeatWrapping;
              a.material.map.offset.x = params.leanR_p_w;
              a.material.map.offset.y = params.leanR_p_w;
              
              var wH = params.leanR_p_h;
              var wP = params.leanR_p_h - wH/2;
              a.position.y = wP;				
              a.scale.set(params.leanR_p_d,wH,0);				
              switch(params.p_b_c_b_r) {
                case "One_Fourth_Close":
                   wH = wH/4;
                   wP = params.leanR_p_h - wH/2;
                break;
                case "Half_Close":
                   wH = wH/2;
                   wP = params.leanR_p_h - wH/2;
                break;					
                case "Three_Fourth_Close":
                   wH = wH * 3/4;
                   wP = params.leanR_p_h - wH/2;
                break;
                case "Extended Gable":
                  break;
                case "Gable":
                  break;
                case "Close":
                   wH = params.leanR_p_h;
                   wP = params.leanR_p_h - wH/2;
                break;
                default:
                   if(params.p_r_s == "1") {
                   wH = (Math.abs(params.p_b_c_b_r.replace(/\D/g, "")) * 3)+0.3;
                   wP = params.leanR_p_h - wH/2;
                   } else {
                   wH = (Math.abs(params.p_b_c_b_r.replace(/\D/g, "")) * 3);
                   wP = params.leanR_p_h - wH/2;
                   }
                break;
              }       
               if(params.p_r_s == "1"){			
                 a.position.y = wP-0.3;				
                 a.scale.set(params.leanR_p_d,wH-0.3,0);
               } else {
                 a.position.y = wP;				
                 a.scale.set(params.leanR_p_d,wH,0);
               }
               if(params.p_v_w==true){
                 a.material.map.repeat.set(params.leanR_p_d-2,1);
               }else{
                 a.material.map.repeat.set(1,wH/4);
               }
          }
      
          //New Geo For Right Lean To Right Storage Wall
          if("b_h_t6_s" == a.name) {
              a.scale.set(storagePos[params.add_storage_right],params.leanR_p_h,0);
              a.position.x = params.p_w / 2 + params.leanR_p_w;
              a.position.y = params.leanR_p_h/2;				
              a.position.z = (params.leanR_p_d/-2)+storagePos[params.add_storage_right]/2;
              /*var frontWallLoader = new THREE.TextureLoader();
              var FWtexture = frontWallLoader.load(wallTexture, function() {
                  FWtexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
                  FWtexture.wrapS = THREE.RepeatWrapping;
                  FWtexture.wrapT = THREE.RepeatWrapping;
               });*/
               a.material.map = FWtexture;
               a.material.map.wrapS = THREE.RepeatWrapping;
              a.material.map.wrapT = THREE.RepeatWrapping;
              a.material.map.offset.x = params.leanR_p_w;
              a.material.map.offset.y = params.leanR_p_w;
              a.visible = (params.add_storage_check_right!=false)?true:false;
              if(params.p_r_s == "1"){			
               a.position.y =  (params.leanR_p_h - params.leanR_p_h/2)-0.3;				
              }else{
               a.position.y = params.leanR_p_h/2;				
              }  
              if(params.p_v_w==true){ 
               a.material.map.repeat.set(params.leanR_p_d-2,1);
              } else {
                 a.material.map.repeat.set(1,params.leanR_p_h/4);
              }
            }
          //New Geo For Lean To Lef Storage Wall
          if("b_h_t6R_s" == a.name){
             a.visible = (params.add_storage_check_right!=false)?true:false;  
             a.scale.set(storagePos[params.add_storage_right],params.p_h,0)
             a.position.x = params.p_w /2;
             a.position.y = params.p_h/2;	
             a.position.z = (params.leanR_p_d/-2)+storagePos[params.add_storage_right]/2;
             a.material.envMap = FWtexture;
             a.material.emissiveMap = FWtexture;
             a.material.emissiveIntensity = 1;
             a.material.map = FWtexture;
             a.material.map.wrapS = THREE.RepeatWrapping;
             a.material.map.wrapT = THREE.RepeatWrapping;
             a.material.map.offset.x = params.p_w;
             a.material.map.offset.y = params.p_w;
             if(params.p_v_w==true){
             a.material.map.repeat.set(params.p_d-2,1);
             } else {
             a.material.map.repeat.set(1,params.p_h/4);
             }
          }
      
          if("b_h_t4_new" == a.name){
             var rtFwallPos = params.p_w/2 + params.leanR_p_w/2;	
             a.visible = (params.p_r_b_l==false)?true:false;
             a.position.x = rtFwallPos;
             a.position.z = params.leanR_p_d / 2;                
             a.material.morphNormals = true;
             a.material.morphTargets = true;							
             /*var frontWallLoader = new THREE.TextureLoader();
             var FWtexture = frontWallLoader.load(wallTexture, function() {
                 FWtexture.anisotropy = 90;
                 FWtexture.wrapS = THREE.RepeatWrapping;
                 FWtexture.wrapT = THREE.RepeatWrapping;
             });*/	
             a.material.map = FWtexture;
             a.material.map.wrapS = THREE.RepeatWrapping;
             a.material.map.wrapT = THREE.RepeatWrapping;
             a.material.map.offset.x = params.leanR_p_w;
             a.material.map.offset.y = params.leanR_p_w;
             var wH = params.leanR_p_h;
             var wP = params.leanR_p_h - wH/2;
             a.position.y = wP;				
             a.scale.set(params.leanR_p_w,wH,0);
             switch(params.p_b_c_b_r_f) {
              case "One_Fourth_Close":
                  wH = wH/4;
                  wP = params.leanR_p_h - wH/2;
              break;
              case "Half_Close":
                  wH = wH/2;
                  wP = params.leanR_p_h - wH/2;
              break;					
              case "Three_Fourth_Close":
                  wH = wH * 3/4;
                  wP = params.leanR_p_h - wH/2;
              break;
              case "Extended Gable":
                  break;
              case "Gable":
                  break;
              case "Close":
                  wH = params.leanR_p_h;
                  wP = params.leanR_p_h - wH/2;
              break;
              default:
                  wH = Math.abs(params.p_b_c_b_r_f.replace(/\D/g, "")) * 3;
                  wP = params.leanR_p_h - wH/2;				
              break;
             }
             a.position.y = wP;				
             a.scale.set(params.leanR_p_w,wH,0);
             if(params.p_v_w==true){
                  a.material.map.repeat.set(params.leanR_p_w-2,1);
                  } else {
                  a.material.map.repeat.set(1,wH/4);
                  }
            }
        
          if("b_h_t4_s" == a.name){
             var rtFSwallPos = params.p_w/-2 - params.leanR_p_w/2;	
             a.visible = (params.add_storage_check_right!=false)?true:false;
             a.scale.set(params.leanR_p_w,params.leanR_p_h,0);
             a.position.x = -rtFSwallPos;
             a.position.y =  params.leanR_p_h/2
             a.position.z = params.leanR_p_d / -2 + storagePos[params.add_storage_right];  
             a.material.morphNormals = true;
             a.material.morphTargets = true;		
             a.material.map = FWtexture;
             a.material.map.wrapS = THREE.RepeatWrapping;
             a.material.map.wrapT = THREE.RepeatWrapping;
             a.material.map.offset.x = params.leanR_p_w;
             a.material.map.offset.y = params.leanR_p_w;
             if(params.p_r_s == "1"){
                  a.position.y =  params.leanR_p_h/2-0.05
                }
             if(params.p_v_w==true){
               a.material.map.repeat.set(params.leanR_p_w-2,1);
             } else {
               a.material.map.repeat.set(1,params.leanR_p_h/4);
             }
          }
              
          if("b_h_t4B_new" == a.name){
             var rtBwallPos = params.p_w/2 + params.leanR_p_w/2;	
             a.visible = (params.p_r_b_l==false)?true:false;
             a.position.x = rtBwallPos;
             a.position.z = params.leanR_p_d / -2;
                
             /*var frontWallLoader = new THREE.TextureLoader();
             var FWtexture = frontWallLoader.load(wallTexture, function() {
                 FWtexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
                 FWtexture.wrapS = THREE.RepeatWrapping;
                 FWtexture.wrapT = THREE.RepeatWrapping;
             });*/
             a.material.map = FWtexture;
             a.material.map.wrapS = THREE.RepeatWrapping;
             a.material.map.wrapT = THREE.RepeatWrapping;
             a.material.map.offset.x = params.leanR_p_w;
             a.material.map.offset.y = params.leanR_p_w;
             var wH = params.leanR_p_h;
             var wP = params.leanR_p_h - wH/2;
             a.position.y = wP;				
             a.scale.set(params.leanR_p_w,wH,0);								
             switch(params.p_b_c_b_r_b) {
                case "One_Fourth_Close":
                      wH = wH/4;
                      wP = params.leanR_p_h - wH/2;
                break;
                case "Half_Close":
                      wH = wH/2;
                      wP = params.leanR_p_h - wH/2;
                break;					
                case "Three_Fourth_Close":
                      wH = wH * 3/4;
                      wP = params.leanR_p_h - wH/2;
                break;
                case "Extended Gable":
                break;
                case "Gable":
                break;
                case "Close":
                      wH = params.leanR_p_h;
                      wP = params.leanR_p_h - wH/2;
                break;
                default:
                      wH = Math.abs(params.p_b_c_b_r_b.replace(/\D/g, "")) * 3;
                      wP = params.leanR_p_h - wH/2;				
                break;
             }
             a.position.y = wP;				
             a.scale.set(params.leanR_p_w,wH,0);
             if(params.p_v_w==true){
                a.material.map.repeat.set(params.leanR_p_w-2,1);
             } else {
                a.material.map.repeat.set(1,wH/4);
             }				
          }
      
          if("b_h_t4B_s" == a.name){
             var ltBwallPos = params.p_w/-2 - params.leanR_p_w/2;	
             a.visible = (params.add_storage_check_right!=false)?true:false;
             if(params.p_b_w == "Close"){
              a.visible = false;
             }
             a.position.x = -ltBwallPos;
             a.position.z = params.leanR_p_d / -2;
             a.position.y = params.leanR_p_h/2;				
             a.scale.set(params.leanR_p_w,params.leanR_p_h,0);
             /*var frontWallLoader = new THREE.TextureLoader();
             var FWtexture = frontWallLoader.load(wallTexture, function() {
                 FWtexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
                 FWtexture.wrapS = THREE.RepeatWrapping;
                 FWtexture.wrapT = THREE.RepeatWrapping;
             });*/
             a.material.map = FWtexture;
             a.material.map.wrapS = THREE.RepeatWrapping;
             a.material.map.wrapT = THREE.RepeatWrapping;
             a.material.map.offset.x = params.leanR_p_w;
             a.material.map.offset.y = params.leanR_p_w;
             if(params.p_v_w==true){
              a.material.map.repeat.set(params.leanR_p_w-2,1);
             } else {
              a.material.map.repeat.set(1,params.leanR_p_h/4);
             }				
          }
      
          if("leanToRightfGable" == a.name) {
              var rtFwallPos = params.p_w/2 + params.leanR_p_w/2;
              if(params.p_v_w==true) {
               var leanToRightfGableUVS = new Float32Array([
               -1.0, -1.0,
               0.0, -1.0,
               -1.0, 0.0,
               ]);
               } else {
               var leanToRightfGableUVS = new Float32Array([
               2.0, 0.0,
               0.0, 0.0,
               2.0, 2.0,
               ]);
              }
              a.geometry.setAttribute( 'uv', new THREE.BufferAttribute( leanToRightfGableUVS, 2 ) );
              /*var fbGableLoader = new THREE.TextureLoader();
              var texture1 = fbGableLoader.load(wallTexture, function(texture1) {
                 texture1.wrapS = THREE.RepeatWrapping;
                 texture1.wrapT = THREE.RepeatWrapping;
             });*/
              a.visible = (params.p_b_c_b_r_f !="Open")?true:false;  
              a.scale.set(params.leanR_p_w,roofMiddleHeight[params.b_l_t_r_pR][2*params.leanR_p_w],0);
              a.position.set(rtFwallPos,params.leanR_p_h,params.leanR_p_d/2);
              a.material.map = FWtexture;
              a.material.map.wrapS = THREE.RepeatWrapping;
              a.material.map.wrapT = THREE.RepeatWrapping;	
              if(params.p_v_w==true){
              a.material.map.repeat.set(params.leanR_p_w-2,1);
              } else {
              a.material.map.repeat.set(1,roofMiddleHeight[params.b_l_t_r_pR][2*params.leanR_p_w]/8);
            }
          }
          if("leanToRightbGable" == a.name){
             var rtFwallPos = params.p_w/2 + params.leanR_p_w/2;
             if(params.p_v_w==true){
             var leanToRightbGableUVS = new Float32Array([
             -1.0, -1.0,
             0.0, -1.0,
             -1.0, 0.0,
             ]);
             } else {
             var leanToRightbGableUVS = new Float32Array([
               2.0, 0.0,
               0.0, 0.0,
               2.0, 2.0,
             ]);
             }
             a.geometry.setAttribute( 'uv', new THREE.BufferAttribute( leanToRightbGableUVS, 2 ) );
             /*var fbGableLoader = new THREE.TextureLoader();
             var texture1 = fbGableLoader.load(wallTexture, function(texture1) {
                texture1.wrapS = THREE.RepeatWrapping;
                texture1.wrapT = THREE.RepeatWrapping;
             });*/
             a.visible = (params.p_b_c_b_r_b !="Open" || params.add_storage_check_right!=false)?true:false;  
             ////a.scale.set(params.p_w,params.p_r_p,0);
             a.scale.set(params.leanR_p_w,roofMiddleHeight[params.b_l_t_r_pR][2*params.leanR_p_w],0);
             a.position.set(rtFwallPos,params.leanR_p_h,params.leanR_p_d/-2);
             a.material.map = FWtexture;
             a.material.map.wrapS = THREE.RepeatWrapping;
             a.material.map.wrapT = THREE.RepeatWrapping;	
             if(params.p_v_w==true){
             a.material.map.repeat.set(params.leanR_p_w-2,1);
             } else {
             a.material.map.repeat.set(1,roofMiddleHeight[params.b_l_t_r_pR][2*params.leanR_p_w]/8);
             }
          }
      
         if("leanToRightStorageGable" == a.name){
             var rtFwallPos = params.p_w/2 + params.leanR_p_w/2;
             if(params.p_v_w==true){
             var leanToRightStorageGableUVS = new Float32Array([
             -1.0, -1.0,
             0.0, -1.0,
             -1.0, 0.0,
             ]);
             }
             else
             {
             var leanToRightStorageGableUVS = new Float32Array([
               2.0, 0.0,
               0.0, 0.0,
               2.0, 2.0,
             ]);
             }
             a.geometry.setAttribute( 'uv', new THREE.BufferAttribute( leanToRightStorageGableUVS, 2 ) );
             /*var fbGableLoader = new THREE.TextureLoader();
             var texture1 = fbGableLoader.load(wallTexture, function(texture1) {
                texture1.wrapS = THREE.RepeatWrapping;
                texture1.wrapT = THREE.RepeatWrapping;
             });*/
             a.visible = (params.add_storage_check_right!=false)?true:false;  
             a.scale.set(params.leanR_p_w,roofMiddleHeight[params.b_l_t_r_pR][2*params.leanR_p_w],0);
             a.position.set(rtFwallPos,params.leanR_p_h,params.leanR_p_d/-2+storagePos[params.add_storage_right]);
             if(params.p_r_s == "1"){
              a.position.set(rtFwallPos,params.leanR_p_h-0.05,params.leanR_p_d/-2+storagePos[params.add_storage_right]);
            //   a.scale.set(params.leanR_p_w,roofMiddleHeight[params.b_l_t_r_pR][2*params.leanR_p_w],0);
             }
             a.material.map = FWtexture;
             a.material.map.wrapS = THREE.RepeatWrapping;
             a.material.map.wrapT = THREE.RepeatWrapping;	
             if(params.p_v_w==true){
             a.material.map.repeat.set(params.leanR_p_w-2,1);
             } else {
             a.material.map.repeat.set(1,roofMiddleHeight[params.b_l_t_r_pR][2*params.leanR_p_w]/8);
             }
          }
      
          if("b_h_t4_new_w" == a.name){
             var rtFwallPos = params.p_w/2 + params.leanR_p_w/2;
             a.visible = (params.p_r_b_l==false && params.p_w_c_n == true)?true:false;
             a.position.x = rtFwallPos;
             a.position.z = params.leanR_p_d / 2 + 0.01;
             a.position.y = 1.5;				
             a.scale.set(params.leanR_p_w,3,0);
             a.material.morphNormals = true;
             a.material.morphTargets = true;							
             a.material.map = FWtexture;
             a.material.map.wrapS = THREE.RepeatWrapping;
             a.material.map.wrapT = THREE.RepeatWrapping;
             a.material.map.fog = false;
             if(params.p_v_w==true){
             a.material.map.repeat.set(params.leanR_p_w-2,1);
             }else{
             a.material.map.repeat.set(1,3/4);
             }
          }
      
          if("b_h_t6_new_w" == a.name){
             a.visible = (params.p_r_b_l==false && params.p_w_c_n == true)?true:false;
             a.position.x = params.p_w / 2 + params.leanR_p_w + 0.01;
             a.position.z = 0;
             a.position.y = 1.5;				
             a.scale.set(params.leanR_p_d,3,0);
             a.material.map = FWtexture;
             a.material.map.wrapS = THREE.RepeatWrapping;
             a.material.map.wrapT = THREE.RepeatWrapping;
             a.material.map.offset.x = params.leanR_p_w;
             a.material.map.offset.y = params.leanR_p_w;
             if(params.p_v_w==true)
             {
                 a.material.map.repeat.set(params.leanR_p_d-2,1);
             }else
             {
                 a.material.map.repeat.set(1,3/4);
             }
                // console.log(a);
          }
      
          if("b_h_t4B_new_w" == a.name){
                var rtBwallPos = params.p_w/2 + params.leanR_p_w/2;
                a.visible = (params.p_r_b_l==false && params.p_w_c_n == true)?true:false;
                a.position.x = rtBwallPos;
                a.position.z = params.leanR_p_d / -2 - 0.01;
                a.position.y = 1.5;
                a.scale.set(params.leanR_p_w,3,0);
                a.material.map = FWtexture;
                a.material.map.wrapS = THREE.RepeatWrapping;
                a.material.map.wrapT = THREE.RepeatWrapping;
                a.material.map.offset.x = params.leanR_p_w;
                a.material.map.offset.y = params.leanR_p_w;
                if(params.p_v_w==true)
                {
                    a.material.map.repeat.set(params.leanR_p_w-2,1);
                }else
                {
                    a.material.map.repeat.set(1,3/4);
                }				
                    // console.log(a);
          }
        });
        }
        })
        }
}
