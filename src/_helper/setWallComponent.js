import * as THREE from "three";
//import RayysLinearDimension from '../Detector/RayysLinearDimension';
//import { SVGLoader } from "../Detector/SVGLoader";
import { params, const_var, initialState} from '../redux/reducers/reducer';
import * as cuBuilding from '../redux/reducers/pricingReducer';
import * as cmpReducer from '../redux/reducers/componentReducer';

export const setWallComponent = () => {
    var data = const_var.scene.children;//.splice(140, const_var.scene.children.length);
    for(var si = 140; si<const_var.scene.children.length; si++)
    {
    if ("wind" == const_var.scene.children[si].name.substring(0, 4) || "walk" == const_var.scene.children[si].name.substring(0, 4) || "gara" == const_var.scene.children[si].name.substring(0, 4) || "Trim" == const_var.scene.children[si].name.substring(0, 4)) {
        var data = [];
        data[0] = const_var.scene.children[si];
        data.forEach(function(a) {
            if (a instanceof THREE.Mesh)
            {
                if ("wind" == a.name.substring(0, 4) || "walk" == a.name.substring(0, 4) || "gara" == a.name.substring(0, 4) || "Trim" == a.name.substring(0, 4)) {
                    if(a.BarnPos != "BarnLeft" && a.BarnPos != "BarnRight")
                    {
                        if(const_var.TypeEnum[params.p_r_s]=="Regular")
                        {
                            if (0 == a.rotation.y) a.position.z = params.p_d / 2;
                            if (a.rotation.y == Math.PI / -2) a.position.x = params.p_w / -2;
                            if (a.rotation.y == Math.PI) a.position.z = params.p_d / -2;
                            if (a.rotation.y == Math.PI / 2) a.position.x = params.p_w / 2 ;
                        }else
                        {
                            if (0 == a.rotation.y) a.position.z = params.p_d / 2;
                            if (a.rotation.y == Math.PI / -2) a.position.x = params.p_w / -2 +.15;
                            if (a.rotation.y == Math.PI) a.position.z = params.p_d / -2;
                            if (a.rotation.y == Math.PI / 2) a.position.x = params.p_w / 2 -.15;
                        }
                        
            
                        /*if(params.p_u_c == true)
                        {
                            var dpos ='';
                            if(params.p_u_t > parseFloat(params.p_d/2))
                            {
                                dpos = (parseFloat(parseInt(params.p_u_t) - parseFloat(b_M_g_V)) - parseFloat(params.p_d/2)) + disValTexture1; 
                            }else{
                                dpos = -(parseFloat(params.p_d/2) - parseFloat(parseInt(params.p_u_t) + (1 - parseFloat(b_M_g_V))));  
                            }
                            if (0 == a.rotation.y) a.position.z = dpos;
                        }*/                    
                    }
                    if(a.BarnPos == "FrontL" || a.BarnPos == "BackL")
                    {
                        if (0 == a.rotation.y) a.position.z = params.lean_p_d / 2;
                        //if (a.rotation.y == Math.PI / -2) a.position.x = params.p_w / -2;
                        let zPosLine = 0;
                        if(params.leantoAlignmentLeft==1)
                        {
                            zPosLine = params.lean_p_d / -2;
                            if (a.rotation.y == Math.PI) a.position.z = zPosLine;
                        } 
                        if(params.leantoAlignmentLeft==2)
                        {
                            if(a.BarnPos == "BackL")
                            {
                                zPosLine = (params.p_d/2)-params.lean_p_d;//(params.p_d - params.lean_p_d)/-2-0.2;
                                if (a.rotation.y == Math.PI) a.position.z = zPosLine;
                            }else
                            {
                                zPosLine = params.p_d/2;
                                a.position.z = zPosLine;
                            }
                        }if(params.leantoAlignmentLeft==3)
                        {
                            if(a.BarnPos == "BackL")
                            {
                                zPosLine = params.p_d/-2;//params.p_d/-2-0.2;
                                if (a.rotation.y == Math.PI) a.position.z = zPosLine;
                            }if(a.BarnPos == "FrontL")
                            {
                                zPosLine =(params.p_d/-2 + params.lean_p_d);
                                a.position.z = zPosLine;
                            }
                        }
                        
                        //if (a.rotation.y == Math.PI / 2) a.position.x = params.p_w / 2;
                    }
                    if(a.BarnPos == "LeftS" || a.BarnPos == "RightS")
                    {
                        var spos = "";
                        var disValTexture1 = 0.8;
                        if(parseFloat(params.add_storage) > parseFloat(params.lean_p_d/2))
                        {
                            disValTexture1 = 0.6;
                            //spos = parseFloat(params.add_storage - parseFloat(params.lean_p_d/2)) + disValTexture1; 
                        }else{
                            disValTexture1 = 0.6;
                            //spos = -parseFloat(parseFloat(params.lean_p_d/2) - params.add_storage) + 0.6; 
                        }
                        if(params.leantoAlignmentLeft==1)
                         {
                            if(parseFloat(params.add_storage) > parseFloat(params.lean_p_d/2))
                            {
                                spos = parseFloat(parseFloat(params.add_storage) - parseFloat(params.lean_p_d/2)) + disValTexture1; 
                            }else{
                                spos = -parseFloat(parseFloat(params.lean_p_d/2) - parseFloat(params.add_storage)) + disValTexture1; 
                            }
                         } 
                         if(params.leantoAlignmentLeft==2)
                         {  
                            spos = parseFloat(parseFloat(params.p_d/2) - parseFloat(params.lean_p_d)) + parseFloat(params.add_storage) + disValTexture1;// + disValTexture1; 
                         }
                         if(params.leantoAlignmentLeft==3)
                         {  
                            //spos = -parseFloat(params.p_d/2) + (parseFloat(params.add_storage) + 1);//params.leanR_p_d/2;//params.p_d/2;
                            spos = -parseFloat(parseFloat(params.p_d/2) - parseFloat(params.add_storage)) + disValTexture1; 
                         }
                        if (0 == a.rotation.y && a.BarnPos == "LeftS") a.position.z = spos;//console.log(a,"doorpos",params.lean_p_d,params.add_storage,params.p_d/2);
                        var spos = "";
                         if(parseFloat(params.add_storage_right) > parseFloat(params.leanR_p_d/2))
                         {
                            disValTexture1 = 0.6;
                        //     spos = parseFloat(params.add_storage_right - parseFloat(params.leanR_p_d/2)) + disValTexture1; 
                         }else{
                            disValTexture1 = 0.6;
                        //     spos = -parseFloat(parseFloat(params.leanR_p_d/2) - params.add_storage_right) + 0.6; 
                         }
                        if(params.leantoAlignmentRight==1)
                         {
                            if(parseFloat(params.add_storage_right) > parseFloat(params.leanR_p_d/2))
                            {
                                spos = parseFloat(parseFloat(params.add_storage_right) - parseFloat(params.leanR_p_d/2)) + disValTexture1; 
                            }else{
                                spos = -parseFloat(parseFloat(params.leanR_p_d/2) - parseFloat(params.add_storage_right)) + disValTexture1; 
                            }
                         } 
                         if(params.leantoAlignmentRight==2)
                         {  
                            spos = parseFloat(parseFloat(params.p_d/2) - parseFloat(params.leanR_p_d)) + parseFloat(params.add_storage_right) + disValTexture1;// + disValTexture1; 
                         }
                         if(params.leantoAlignmentRight==3)
                         {  
                            spos = -parseFloat(parseFloat(params.p_d/2) - parseFloat(params.add_storage_right)) + disValTexture1; 
                         }
                        if (0 == a.rotation.y && a.BarnPos == "RightS") a.position.z = spos;
                    }
                    if(a.BarnPos == "FrontR" || a.BarnPos == "BackR")
                    {  
                        if (0 == a.rotation.y) a.position.z = params.leanR_p_d / 2;
                        //if (a.rotation.y == Math.PI / -2) a.position.x = params.p_w / -2;
            
                        let zPosLine = 0;
                        if(params.leantoAlignmentRight==1)
                        {
                            zPosLine = params.leanR_p_d / -2;
                            if (a.rotation.y == Math.PI) a.position.z = zPosLine;
                        } 
                        if(params.leantoAlignmentRight==2)
                        {
                            if(a.BarnPos == "BackR")
                            {
                                zPosLine = (params.p_d/2)-params.leanR_p_d;//(params.p_d - params.lean_p_d)/-2-0.2;
                                if (a.rotation.y == Math.PI) a.position.z = zPosLine;
                            }else
                            {
                                zPosLine = params.p_d/2;
                                a.position.z = zPosLine;
                            }
                        }if(params.leantoAlignmentRight==3)
                        {
                            if(a.BarnPos == "BackR")
                            {
                                zPosLine = params.p_d/-2;//params.p_d/-2-0.2;
                                if (a.rotation.y == Math.PI) a.position.z = zPosLine;
                            }if(a.BarnPos == "FrontR")
                            {
                                zPosLine =(params.p_d/-2 + params.leanR_p_d);
                                a.position.z = zPosLine;
                            }
                        }
            
                        //if (a.rotation.y == Math.PI) a.position.z = params.leanR_p_d / -2;
                        //if (a.rotation.y == Math.PI / 2) a.position.x = params.p_w / 2;
                    }
                    if(a.BarnPos == "BarnLeft" || a.BarnPos == "BarnRight")
                    {
                        var c = 0;
                        var d = 0;
                        // if (params.b_h_t2) c = params.b_h_t2D;
                        // if (params.b_h_t4) d = params.b_h_t4D;
                        if (params.b_h_t2) c = params.lean_p_w;
                        if (params.b_h_t4) d = params.leanR_p_w;
                        if (a.rotation.y == Math.PI / -2) a.position.x = (params.p_w / -2) - c - 0.2;
                        if (a.rotation.y == Math.PI / 2) a.position.x = (params.p_w / 2) + d + 0.2;  
                    }
                    cuBuilding.updateEntryData();    
                    if(params.p_u_c == true && a.BarnPos == "FrontS")
                    {
                        cuBuilding.dawplace();
                    }                    
                    setLeftRightPos(a);                    
                }
            }
        });
    }
    }
}
export const setLeftRightPos = (cmp) => {
    var GetDistance12 = (params.p_d / 2);
    var b_Bn_v1 = (params.p_b_c_b_l_f=="Close" || params.p_b_c_b_l=="Close" || params.add_storage_check == true)?params.lean_p_w:0;
    var b_Bn_v2 = (params.p_b_c_b_r_f=="Close" || params.p_b_c_b_r=="Close" || params.add_storage_check_right == true)?params.leanR_p_w:0;
    var GetDistance11 = (params.p_w / 2);
    var next_val1 =cmp.name.replace("-clone", "");
    if(next_val1.indexOf('Frameout') > -1)
    {  
        next_val1 = next_val1.split("_");
        var next_val = next_val1[1];
    }else{
        next_val1 = next_val1.split("_");
        var next_val = next_val1[1];
    }
    var newDwVal = next_val1[0].match(/\d+/g);
    cmp.actual_val = (next_val==undefined || next_val =="Frameout")?newDwVal[0]/12+"X"+newDwVal[1]/12:next_val;
    var sp_Val = cmp.actual_val.split("X")[0] / 2;
    
    if(cmp.pos=="front")
    {
        if(Math.sign(Math.round(cmp.position.x)) ==1 || Math.sign(Math.round(cmp.position.x)) ==0)
        {
            var new1 = cmp.position.x + sp_Val;
            var new2 = cmp.position.x - sp_Val;
            var new3 = new1 - GetDistance11;
            var new4 = new2 + GetDistance11;

            if(params.p_b_c_b_r_f=="Close" || params.add_storage_check_right == true)
                var new3 = new1 - GetDistance11 - b_Bn_v2;

            if(params.p_b_c_b_l_f=="Close" || params.add_storage_check == true)
            var new4 = new2 + GetDistance11 + b_Bn_v1;
        }
        if(Math.sign(Math.round(cmp.position.x)) ==-1 || Math.sign(Math.round(cmp.position.x)) ==-0)
        {
            var new1 = cmp.position.x + sp_Val;
            var new2 = cmp.position.x - sp_Val;
            var new3 = new1 - GetDistance11;
            var new4 = new2 + GetDistance11;
            
            if(params.p_b_c_b_r_f=="Close" || params.add_storage_check_right == true)
                var new3 = new1 - GetDistance11 - b_Bn_v2;

            if(params.p_b_c_b_l_f=="Close" || params.add_storage_check == true)
            var new4 = new2 + GetDistance11 + b_Bn_v1;
        }
    }else if(cmp.pos=="back")
    {
        if(Math.sign(Math.round(cmp.position.x)) ==1 || Math.sign(Math.round(cmp.position.x)) ==0)
        {
            var new1 = cmp.position.x + sp_Val;
            var new2 = cmp.position.x - sp_Val;
            var new3 = new1 - GetDistance11;
            var new4 = new2 + GetDistance11;
            
            if(params.p_b_c_b_r_f=="Close" || params.add_storage_check_right == true)
                var new3 = new1 - GetDistance11 - b_Bn_v2;

            if(params.p_b_c_b_l_f=="Close" || params.add_storage_check == true)
            var new4 = new2 + GetDistance11 + b_Bn_v1;
        }
        if(Math.sign(Math.round(cmp.position.x)) ==-1 || Math.sign(Math.round(cmp.position.x)) ==-0)
        {
            var new1 = cmp.position.x + sp_Val;
            var new2 = cmp.position.x - sp_Val;
            var new3 = new1 - GetDistance11;
            var new4 = new2 + GetDistance11;
            
            if(params.p_b_c_b_r_f=="Close" || params.add_storage_check_right == true)
                var new3 = new1 - GetDistance11 - b_Bn_v2;

            if(params.p_b_c_b_l_f=="Close" || params.add_storage_check == true)
            var new4 = new2 + GetDistance11 + b_Bn_v1;
        }
    }else if(cmp.pos=="left")
    {
        if(Math.sign(Math.round(cmp.position.z)) ==1 || Math.sign(Math.round(cmp.position.z)) ==0)
        {
            var new1 = cmp.position.z + sp_Val;
            var new2 = cmp.position.z - sp_Val;
            var new3 = new1 - GetDistance12;
            var new4 = new2 + GetDistance12;
        }
        if(Math.sign(Math.round(cmp.position.z)) ==-1 || Math.sign(Math.round(cmp.position.z)) ==-0)
        {
            var new1 = cmp.position.z + sp_Val;
            var new2 = cmp.position.z - sp_Val;
            var new3 = new1 - GetDistance12;
            var new4 = new2 + GetDistance12;
        }
    }else if(cmp.pos=="right")
    {
        if(Math.sign(Math.round(cmp.position.z)) ==1 || Math.sign(Math.round(cmp.position.z)) ==0)
        {
            var new1 = cmp.position.z + sp_Val;
            var new2 = cmp.position.z - sp_Val;
            var new4 = new1 - GetDistance12;
            var new3 = new2 + GetDistance12;
        }
        if(Math.sign(Math.round(cmp.position.z)) ==-1 || Math.sign(Math.round(cmp.position.z)) ==-0)
        {
            var new1 = cmp.position.z + sp_Val;
            var new2 = cmp.position.z - sp_Val;
            var new4 = new1 - GetDistance12;
            var new3 = new2 + GetDistance12;
        }
    }
    if(cmp.pos=="front" || cmp.pos=="back")
    {
        if(cmp.position.x > 0)
        {
            var negVal = cmp.position.x - sp_Val;
            var posVal = cmp.position.x + sp_Val;
            cmp.NegPoint = negVal;
            cmp.PosPoint = posVal;
            
        }else
        {
            var negVal = cmp.position.x - sp_Val;
            var posVal = cmp.position.x + sp_Val;
            cmp.NegPoint = negVal;
            cmp.PosPoint = posVal;
        }
    }else if(cmp.pos=="left" || cmp.pos=="right")
    {
        if(cmp.position.z > 0)
        {
            var negVal = cmp.position.z - sp_Val;
            var posVal = cmp.position.z + sp_Val;
            cmp.NegPoint = negVal;
            cmp.PosPoint = posVal;
            
        }else
        {
            var negVal = cmp.position.z - sp_Val;
            var posVal = cmp.position.z + sp_Val;
            cmp.NegPoint = negVal;
            cmp.PosPoint = posVal;
        }
    }
    cmp.leftpos = Math.abs(new4) ;
    cmp.rightpos = Math.abs(new3) ;
    cmp.leftdisfmb = Math.abs(new4) ;
    cmp.rightdisfmb = Math.abs(new3) ;
    if(cmp.pos == "back")
    {
        cmp.leftpos = Math.abs(new3) ;
        cmp.rightpos = Math.abs(new4) ;
        cmp.leftdisfmb = Math.abs(new3) ;
        cmp.rightdisfmb = Math.abs(new4) ;
    }    
    ArrowNDistance.caldoordistance();
}