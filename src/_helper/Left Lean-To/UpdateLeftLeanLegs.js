import { params, const_var, } from '../../redux/reducers/reducer';
import * as THREE from "three"
import { zigZagLegs } from '../../redux/reducers/utils';

export const updateLeftLeanToLegs = (leanToCheck) => {

    if ("undefined" != typeof const_var.scene.getObjectByName("LeftLeanLegs")) const_var.scene.remove(const_var.scene.getObjectByName("LeftLeanLegs"));
    if ("undefined" != typeof const_var.scene.getObjectByName("b_t_M_L_t_L")) const_var.scene.remove(const_var.scene.getObjectByName("b_t_M_L_t_L"));

    const LeftLeanLegs = new THREE.Group();
    LeftLeanLegs.name = "LeftLeanLegs";
    const_var.scene.add(LeftLeanLegs);
    if (leanToCheck) {
        //scale of lean to regular leg according to hight
        var scaleLegR = { "6": 0.23, "7": 0.28, "8": 0.34, "9": 0.40, "10": 0.45, "11": 0.5, "12": 0.55, "13": 0.6, "14": 0.65, "15": 0.7, "16": 0.75, "17": 0.8, "18": 0.85, "19": 0.9 };

        let storagePos = {
            "5": 5, "10": 10, "15": 15, "20": 20, "25": 25, "30": 30, "35": 35, "40": 40, "45": 45, "50": 50, "55": 55, "60": 60, "65": 65, "70": 70, "75": 75, "80": 80, "85": 85, "90": 90, "95": 95, "100": 100
        }

        var leanToLeg = params.p_w / -2 - params.lean_p_w;

        let EqiDis;
        if (params.fourth_center_cost == true) {
            if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
        {
            EqiDis = (params.oncenter_val_with_action!='')?((params.lean_p_d)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.lean_p_d)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0)
        }
    } else {
        if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
        {
            EqiDis = (params.oncenter_val_with_action!='')?((params.lean_p_d)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.lean_p_d)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0)    
        }
        }

        var disFor2Legs = 0.20;
        var disForVShapLegs = 0.5;
        var hightFor2Legs = params.lean_p_h;
        var hightForVShapLegs = params.lean_p_h + (params.b_l_t_r_p * 0.08);
        if (const_var.leanLegstype == "zigzag") {
            disFor2Legs =  0.9875;
            hightFor2Legs = (params.p_r_s == 1) ? (params.lean_p_h + params.b_l_t_r_p / 35 + - 0.08) : (params.lean_p_h + params.b_l_t_r_p / 20 - 0.08);
        }
        if (const_var.leanLegstype == "ladder") {
            disFor2Legs = 0.60;
            hightFor2Legs = (params.p_r_s == 1) ? (params.lean_p_h + params.b_l_t_r_p / 35 + - 0.08) : (params.lean_p_h + params.b_l_t_r_p / 20 - 0.08);
        }
        if (const_var.leanLegstype == "double") {
            disFor2Legs = 0.25 + 0.09;
            hightFor2Legs = (params.p_r_s == 1) ? (params.lean_p_h + params.b_l_t_r_p / 35 + - 0.08) : (params.lean_p_h + params.b_l_t_r_p / 20 - 0.08);
        }

        //Loop For Add Legs Dynamically For Left Lean To

        let legsCount = 0; 
        for (let i = params.lean_p_d / 2 - 0.12, j = 0; i > (params.lean_p_d / -2) - 1; i = i - (params.lean_p_d / EqiDis), j++) {

            if (i < params.lean_p_d / -2 + 0.12) i = (params.lean_p_d / -2) + 0.12

            const leftLeantoLegs = const_var.b_t_M_L_t_L.getObjectByName("leftLeanToLeg").clone();
            leftLeantoLegs.name = "leftLeantoLeg" + j + "x";
            leftLeantoLegs.material = leftLeantoLegs.material.clone();
            leftLeantoLegs.scale.set(0.5, params.lean_p_h == 0 ? 1: params.lean_p_h, 1);
            leftLeantoLegs.position.set(leanToLeg + 0.08, params.lean_p_h / 2, i.toFixed(2));
            leftLeantoLegs.visible = (params.p_r_s != "1") ? true : false;
            LeftLeanLegs.add(leftLeantoLegs);
            legsCount++;
            if (params.p_r_s != "1") {
                const_var.legsForCut["leftLean"][leftLeantoLegs.name] = leftLeantoLegs;
                const_var.legsForCutFee["leftLean"][leftLeantoLegs.name] = leftLeantoLegs;
            }

            if (params.lean_p_e_l) {
                const leftLeantoLegsDouble = const_var.b_t_M_L_t_L.getObjectByName("leftLeanToLeg").clone();
                leftLeantoLegsDouble.name = "leftLeantoDoubleLeg" + j + "x";
                leftLeantoLegsDouble.material = leftLeantoLegsDouble.material.clone();
                leftLeantoLegsDouble.scale.set(0.5, hightFor2Legs, 1);
                leftLeantoLegsDouble.position.set(leanToLeg + disFor2Legs, hightFor2Legs / 2, i.toFixed(2));
                // leftLeantoLegsDouble.visible = params.lean_p_e_l  && params.trussType != "CTCT";
                leftLeantoLegsDouble.visible = params.lean_p_e_l;
                LeftLeanLegs.add(leftLeantoLegsDouble);
                const_var.legsForCut["leftLean"][leftLeantoLegsDouble.name] = leftLeantoLegsDouble;
            }
            const leftLeantoVShapLeg = const_var.b_t_M_L_t_L.getObjectByName("leftLeanToLeg").clone();
            leftLeantoVShapLeg.name = "leftLeantoVShapLeg" + i;
            leftLeantoVShapLeg.material = leftLeantoVShapLeg.material.clone();
            // leftLeantoVShapLeg.visible = params.lean_p_e_l;
            leftLeantoVShapLeg.visible = params.lean_p_e_l && params.trussType == "CTCT";
            leftLeantoVShapLeg.visible = false;
            leftLeantoVShapLeg.scale.set(0.5, hightForVShapLegs, 1);
            leftLeantoVShapLeg.position.set(leanToLeg + disForVShapLegs, hightForVShapLegs / 2, i.toFixed(2));
            leftLeantoVShapLeg.rotation.z = -0.1325 + (params.lean_p_h * 0.005);//-0.0325;//-0.0925;                        
            LeftLeanLegs.add(leftLeantoVShapLeg);

            // left Leanto Regular Legs      
            const leftLeantoRLegs = const_var.b_t_M_L_t_L.getObjectByName("leftLeanToRLeg").clone();
            leftLeantoRLegs.name = "leftLeantoLeg" + j + "xR";
            leftLeantoRLegs.material = leftLeantoRLegs.material.clone();
            leftLeantoRLegs.scale.set(0.5, params.lean_p_h -0.1 , 1);
            leftLeantoRLegs.position.set(leanToLeg + 0.08, (params.lean_p_h / 2) - 0.05, i.toFixed(2));
            leftLeantoRLegs.visible = (params.p_r_s == "1") ? true : false;
            LeftLeanLegs.add(leftLeantoRLegs);
            if (params.p_r_s == "1") {
                const_var.legsForCut["leftLean"][leftLeantoRLegs.name] = leftLeantoRLegs;
                const_var.legsForCutFee["leftLean"][leftLeantoRLegs.name] = leftLeantoRLegs;
            }
        }

        
    if(params.p_b_c_b_l_f == "Close" || params.p_b_c_b_l_b == "Close"){    

        if(params.p_b_c_b_l_f == "Close"){
        const leftLeantoFrontBaseRail = const_var.b_t_M_L_t_L.getObjectByName("leftLeantoBaseRail").clone();
        leftLeantoFrontBaseRail.name = "leftLeantoFrontBaseRail";
        leftLeantoFrontBaseRail.material = leftLeantoFrontBaseRail.material.clone();
        leftLeantoFrontBaseRail.scale.set(0.5, params.lean_p_w - 0.02, 0.7);
        leftLeantoFrontBaseRail.position.set(-((params.lean_p_w/2) + params.p_w / 2) + 0.08, 0.08, (params.lean_p_d/2)- 0.12);
        leftLeantoFrontBaseRail.rotation.x = Math.PI / -2;
        leftLeantoFrontBaseRail.rotation.z = Math.PI / 2;
        leftLeantoFrontBaseRail.visible = params.add_left_lean;
        LeftLeanLegs.add(leftLeantoFrontBaseRail);
        const_var.legsForCut["leftFrontLean"][leftLeantoFrontBaseRail.name] = leftLeantoFrontBaseRail;
        }

        if(params.p_b_c_b_l_b == "Close"){
        const leftLeantoBackBaseRail = const_var.b_t_M_L_t_L.getObjectByName("leftLeantoBaseRail").clone();
        leftLeantoBackBaseRail.name = "leftLeantoBackBaseRail";
        leftLeantoBackBaseRail.material = leftLeantoBackBaseRail.material.clone();
        leftLeantoBackBaseRail.scale.set(0.5, params.lean_p_w - 0.02, 0.7);
        leftLeantoBackBaseRail.position.set(-((params.lean_p_w/2) + params.p_w / 2) + 0.08, 0.08, (params.lean_p_d/-2)+ 0.12);
        leftLeantoBackBaseRail.rotation.x = Math.PI / -2;
        leftLeantoBackBaseRail.rotation.z = Math.PI / 2;
        leftLeantoBackBaseRail.visible = params.add_left_lean;
        LeftLeanLegs.add(leftLeantoBackBaseRail);
        const_var.legsForCut["leftBackLean"][leftLeantoBackBaseRail.name] = leftLeantoBackBaseRail;
        }

        let slope = 0
        let endsEqiDis;
        if (params.fourth_center_cost == true) {
                if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
            {
                endsEqiDis = (params.oncenter_val_with_action!='')?((params.lean_p_w)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.lean_p_w)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0)
            }
        } else {
            if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
            {
                endsEqiDis = (params.oncenter_val_with_action!='')?((params.lean_p_w)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.lean_p_w)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0)    
            }
        }

        

        for (let i = (params.p_w / -2 - params.lean_p_w); i < -(params.p_w /2); i = i + (params.lean_p_w / endsEqiDis)) { 

            if(params.p_b_c_b_l_f == "Close" &&  i != params.p_w / -2 - params.lean_p_w){
                const leftLeantoFrontLegs = const_var.b_t_M_L_t_L.getObjectByName("leftLeanToLeg").clone();
                leftLeantoFrontLegs.name = "leftLeantoFrontLegs" + i;
                leftLeantoFrontLegs.material = leftLeantoFrontLegs.material.clone();
                leftLeantoFrontLegs.scale.set(0.5, params.lean_p_h == 0 ? 1: params.lean_p_h + ((params.b_l_t_r_p/12)*(slope*(params.lean_p_w / endsEqiDis))), 1);
                leftLeantoFrontLegs.position.set((0.08 +i).toFixed(2), (params.lean_p_h+((params.b_l_t_r_p/12)*(slope*(params.lean_p_w / endsEqiDis)))) / 2, params.lean_p_d / 2 - 0.12);
                leftLeantoFrontLegs.rotation.y = Math.PI/2
                leftLeantoFrontLegs.visible =true;
                LeftLeanLegs.add(leftLeantoFrontLegs);
                legsCount++
                const_var.legsForCut["leftFrontLean"][leftLeantoFrontLegs.name] = leftLeantoFrontLegs;
            }

            if(params.p_b_c_b_l_b == "Close" &&  i != params.p_w / -2 - params.lean_p_w){
                const leftLeantoBackLegs = const_var.b_t_M_L_t_L.getObjectByName("leftLeanToLeg").clone();
                leftLeantoBackLegs.name = "leftLeantoBackLegs" + i;
                leftLeantoBackLegs.material = leftLeantoBackLegs.material.clone();
                leftLeantoBackLegs.scale.set(0.5, params.lean_p_h == 0 ? 1: params.lean_p_h + ((params.b_l_t_r_p/12)*(slope*(params.lean_p_w / endsEqiDis))), 1);
                leftLeantoBackLegs.position.set((0.08 +i).toFixed(2), (params.lean_p_h+((params.b_l_t_r_p/12)*(slope*(params.lean_p_w / endsEqiDis)))) / 2, params.lean_p_d / -2 + 0.12);
                leftLeantoBackLegs.rotation.y = Math.PI/2
                leftLeantoBackLegs.visible =true;
                LeftLeanLegs.add(leftLeantoBackLegs);
                legsCount++
                const_var.legsForCut["leftBackLean"][leftLeantoBackLegs.name] = leftLeantoBackLegs;
            }

            slope += 1

        }
    }

    const_var.leftLeanLegs = legsCount;
    const_var.lengthData.leftLean.legsCount = legsCount;

        // left leanTo Trim acording to Front wall anand
        if (const_var.b_t_M_L_t_L.getObjectByName("leanToleftFrontWallTrim") != undefined) {
            const leanToleftFrontWallTrim = const_var.b_t_M_L_t_L.getObjectByName("leanToleftFrontWallTrim").clone();
            leanToleftFrontWallTrim.name = "leanToleftFrontWallTrim";
            leanToleftFrontWallTrim.position.set(leanToLeg + 0.03, params.lean_p_h / 2, params.lean_p_d / 2+0.02);
            leanToleftFrontWallTrim.visible = (params.add_left_front_lean_porch != true) ? true : false;

            var wH = params.lean_p_h;
            var wP = params.lean_p_h - wH / 2;

            leanToleftFrontWallTrim.position.y = wP;
            leanToleftFrontWallTrim.scale.set(params.p_w, wH, 0);

            switch (params.p_b_c_b_l_f) {
                case "One_Fourth_Close":
                    wH = wH / 4;
                    wP = params.lean_p_h - wH / 2;
                    break;
                case "Half_Close":
                    wH = wH / 2;
                    wP = params.lean_p_h - wH / 2;
                    break;
                case "Three_Fourth_Close":
                    wH = wH * 3 / 4;
                    wP = params.lean_p_h - wH / 2;
                    break;
                case "Extended Gable":
                    wH = wH / 6;
                    wP = params.lean_p_h - wH / 2;
                    break;
                case "Gable":
                    wH = 0;
                    wP = params.lean_p_h - wH / 2;
                    leanToleftFrontWallTrim.visible = false
                    break;
                case "Close":
                    wH = params.lean_p_h;
                    wP = params.lean_p_h - wH / 2;
                    break;
                default:
                    leanToleftFrontWallTrim.visible = false;
                    break;

            }
            if(params.p_r_s=="1"){
                wH = wH-0.3;
                wP = wP-0.15;
            }
            leanToleftFrontWallTrim.position.y = wP - 0.07;
            leanToleftFrontWallTrim.scale.set(0.6, wH - 0.14, 0.5);
            if (params.is_translusant == true) {
                leanToleftFrontWallTrim.material.transparent = true;
                leanToleftFrontWallTrim.material.opacity = 0.1;
                // leanToleftFrontWallTrim.material.opacity =0.3;
                leanToleftFrontWallTrim.material.alphaTest = false;
                leanToleftFrontWallTrim.material.clearAlpha = 1;
            } else {
                leanToleftFrontWallTrim.material.transparent = true;
                leanToleftFrontWallTrim.material.opacity = 1;
                leanToleftFrontWallTrim.material.alphaTest = 0;
                leanToleftFrontWallTrim.material.clearAlpha = null;
            }
            LeftLeanLegs.add(leanToleftFrontWallTrim);
        }

        // left leanTo Trim acording to back wall anand
        if (const_var.b_t_M_L_t_L.getObjectByName("leanToleftBackWallTrim") == undefined) {
            const leanToleftBackWallTrim = const_var.b_t_M_L_t_L.getObjectByName("leanToleftFrontWallTrim").clone();
            leanToleftBackWallTrim.name = "leanToleftBackWallTrim";
            leanToleftBackWallTrim.scale.set(0.6, params.lean_p_h + scaleLegR[params.lean_p_h], 0.5);
            leanToleftBackWallTrim.position.set(leanToLeg + 0.03, (params.lean_p_h / 2) - 0.1, params.lean_p_d / -2-0.02);
            leanToleftBackWallTrim.visible = (params.add_left_back_lean_porch != true || params.add_storage_check != false) ? true : false;

            var wH = params.lean_p_h;
            var wP = params.lean_p_h - wH / 2;

            leanToleftBackWallTrim.position.y = wP;
            leanToleftBackWallTrim.scale.set(params.p_w, wH, 0);

            switch (params.p_b_c_b_l_b) {
                case "One_Fourth_Close":
                    wH = wH / 4;
                    wP = params.lean_p_h - wH / 2;
                    break;
                case "Half_Close":
                    wH = wH / 2;
                    wP = params.lean_p_h - wH / 2;
                    break;
                case "Three_Fourth_Close":
                    wH = wH * 3 / 4;
                    wP = params.lean_p_h - wH / 2;
                    break;
                case "Extended Gable":
                    wH = wH / 6;
                    wP = params.lean_p_h - wH / 2;
                    break;
                case "Gable":
                    wH = 0;
                    wP = params.lean_p_h - wH / 2;
                    leanToleftBackWallTrim.visible = false
                    break;
                case "Close":
                    wH = params.lean_p_h;
                    wP = params.lean_p_h - wH / 2;
                    break;
                default:
                    leanToleftBackWallTrim.visible = false;
                    break;

            }
            if (params.add_storage_check != false) {
                wH = params.lean_p_h;
                wP = params.lean_p_h - wH / 2;
                leanToleftBackWallTrim.visible = true
            }
            if (params.p_b_c_b_l == "Close") {
                leanToleftBackWallTrim.visible = false
            }
            if(params.p_r_s=="1"){
                wH = wH-0.3;
                wP = wP-0.15;
            }
            leanToleftBackWallTrim.position.y = wP - 0.07;
            leanToleftBackWallTrim.scale.set(0.6, wH - 0.14, 0.5);

            LeftLeanLegs.add(leanToleftBackWallTrim);
        }

        if (const_var.b_t_M_L_t_L.getObjectByName("leftLeanToFSTrim") == undefined) {
            const leftLeanToFSTrim = LeftLeanLegs.getObjectByName("leanToleftBackWallTrim").clone();
            leftLeanToFSTrim.name = "leftLeanToFSTrim";
            var wH = params.lean_p_h;
            var wP = params.lean_p_h - wH / 2;
            if(params.p_r_s=="1"){
                wH = wH-0.3;
                wP = wP-0.15;
            }
            leftLeanToFSTrim.position.z = params.lean_p_d / -2 + (parseInt(params.add_storage)+0.02);
            leftLeanToFSTrim.visible = (params.add_storage_check == true && params.p_b_c_b_l != "Close") ? true : false
            LeftLeanLegs.add(leftLeanToFSTrim);
        }
        // left leanTo Trim acording to left wall in front position anand
        if (const_var.b_t_M_L_t_L.getObjectByName("leanToleftFLeftWallTrim") != undefined) {
            const leanToleftFLeftWallTrim = const_var.b_t_M_L_t_L.getObjectByName("leanToleftFLeftWallTrim").clone();
            leanToleftFLeftWallTrim.name = "leanToleftFLeftWallTrim";
            leanToleftFLeftWallTrim.position.set(leanToLeg + 0.03, params.lean_p_h / 2, params.lean_p_d / 2+0.02);
            if (params.add_left_front_lean_porch == true) {
                leanToleftFLeftWallTrim.position.set(leanToLeg + 0.03, params.lean_p_h / 2, params.lean_p_d / 2 + params.leanF_p_w+0.02);
            }
            leanToleftFLeftWallTrim.visible = ( params.p_b_c_b_l!="Open")?true:false;

            var wH = params.lean_p_h;
            var wP = params.lean_p_h - wH / 2;

            leanToleftFLeftWallTrim.position.y = wP;
            leanToleftFLeftWallTrim.scale.set(params.p_w, wH, 0);
            switch (params.p_b_c_b_l) {
                case "One_Fourth_Close":
                    wH = wH / 4;
                    wP = params.lean_p_h - wH / 2;
                    break;
                case "Half_Close":
                    wH = wH / 2;
                    wP = params.lean_p_h - wH / 2;
                    break;
                case "Three_Fourth_Close":
                    wH = wH * 3 / 4;
                    wP = params.lean_p_h - wH / 2;
                    break;
                // case "1":
                //     if (params.p_r_s == "1") {
                //         wH = (Math.abs(params.p_b_c_b_l.replace(/\D/g, "")) * 3) + 0.28;
                //     } else {
                //         wH = (Math.abs(params.p_b_c_b_l.replace(/\D/g, "")) * 3);
                //     }
                //     wP = params.lean_p_h - wH / 2;
                //     break;
                case "Gable":
                    break;
                case "Close":
                    wH = params.lean_p_h;
                    wP = params.lean_p_h - wH / 2;
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

            if(params.p_r_s=="1"){
                wH = wH-0.3;
                wP = wP-0.15;
            }

            // if (params.p_r_s == "1") {
            //     leanToleftFLeftWallTrim.position.y = wP - 0.14;
            //     leanToleftFLeftWallTrim.scale.set(0.6, wH, 0.5);
            // } else {
                leanToleftFLeftWallTrim.position.y = wP - 0.07;
                leanToleftFLeftWallTrim.scale.set(0.6, wH - 0.14, 0.5);
            // }

            LeftLeanLegs.add(leanToleftFLeftWallTrim);
        }

        // left leanTo Trim acording to left wall in Back position anand
        if (const_var.b_t_M_L_t_L.getObjectByName("leanToleftBLeftWallTrim") == undefined) {
            const leanToleftBLeftWallTrim = const_var.b_t_M_L_t_L.getObjectByName("leanToleftFLeftWallTrim").clone();
            leanToleftBLeftWallTrim.name = "leanToleftBLeftWallTrim";
            leanToleftBLeftWallTrim.position.set(leanToLeg + 0.03, params.lean_p_h / 2, params.lean_p_d / -2-0.02);
            leanToleftBLeftWallTrim.visible = ( params.p_b_c_b_l!="Open" )?true:false;
            if (params.add_left_back_lean_porch == true) {
                leanToleftBLeftWallTrim.position.set(leanToLeg + 0.03, params.lean_p_h / 2, params.lean_p_d / -2 - params.leanB_p_w-0.02);
            }

            var wH = params.lean_p_h;
            var wP = params.lean_p_h - wH / 2;

            leanToleftBLeftWallTrim.position.y = wP;
            leanToleftBLeftWallTrim.scale.set(params.p_w, wH, 0);

            switch (params.p_b_c_b_l) {
                case "One_Fourth_Close":
                    wH = wH / 4;
                    wP = params.lean_p_h - wH / 2;
                    break;
                case "Half_Close":
                    wH = wH / 2;
                    wP = params.lean_p_h - wH / 2;
                    break;
                case "Three_Fourth_Close":
                    wH = wH * 3 / 4;
                    wP = params.lean_p_h - wH / 2;
                    break;
                // case "1":
                //     if (params.p_r_s == "1") {
                //         wH = (Math.abs(params.p_b_c_b_l.replace(/\D/g, "")) * 3) + 0.28;
                //     } else {
                //         wH = (Math.abs(params.p_b_c_b_l.replace(/\D/g, "")) * 3);
                //     }
                //     wP = params.lean_p_h - wH / 2;
                //     break;
                case "Gable":
                    break;
                case "Close":
                    wH = params.lean_p_h;
                    wP = params.lean_p_h - wH / 2;
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

            if(params.p_r_s=="1"){
                wH = wH-0.3;
                wP = wP-0.15;
            }

            // if (params.p_r_s == "1") {
            //     leanToleftBLeftWallTrim.position.y = wP - 0.14;
            //     leanToleftBLeftWallTrim.scale.set(0.6, wH, 0.5);
            // } else {
                leanToleftBLeftWallTrim.position.y = wP - 0.07;
                leanToleftBLeftWallTrim.scale.set(0.6, wH - 0.14, 0.5);
            // }

            LeftLeanLegs.add(leanToleftBLeftWallTrim);
        }

        const leftLeantoBaseRail = const_var.b_t_M_L_t_L.getObjectByName("leftLeantoBaseRail").clone();
        leftLeantoBaseRail.name = "leftLeantoBaseRail";
        leftLeantoBaseRail.material = leftLeantoBaseRail.material.clone();
        leftLeantoBaseRail.scale.set(0.5, params.lean_p_d - 0.02, 0.7);
        leftLeantoBaseRail.position.set(-(params.lean_p_w + params.p_w / 2) + 0.08, 0.08, 0);
        leftLeantoBaseRail.rotation.x = Math.PI / -2;
        leftLeantoBaseRail.visible = params.add_left_lean;
        LeftLeanLegs.add(leftLeantoBaseRail);
        const_var.legsForCut["leftLean"][leftLeantoBaseRail.name] = leftLeantoBaseRail;

        const leftLeantoBaseRailDouble = const_var.b_t_M_L_t_L.getObjectByName("leftLeantoBaseRail").clone();
        leftLeantoBaseRailDouble.name = "leftLeantoBaseRailDouble";
        leftLeantoBaseRailDouble.material = leftLeantoBaseRailDouble.material.clone();
        leftLeantoBaseRailDouble.scale.set(0.5, params.lean_p_d - 0.02, 0.7);
        leftLeantoBaseRailDouble.position.set(-(params.lean_p_w + params.p_w / 2) + disFor2Legs, 0.08, 0);
        leftLeantoBaseRailDouble.rotation.x = Math.PI / -2;
        // leftLeantoBaseRailDouble.visible = params.lean_p_e_l  && params.trussType != "CTCT";
        leftLeantoBaseRailDouble.visible = params.lean_p_e_l;
        LeftLeanLegs.add(leftLeantoBaseRailDouble);
        const_var.legsForCut["leftLean"][leftLeantoBaseRailDouble.name] = leftLeantoBaseRailDouble;


        let connectorDis = 2
        for (let i = 0; i < ((params.lean_p_h) - 1); i = i + connectorDis) {

            for (let e = params.lean_p_d / 2 - 0.12, j = 0; e > (params.lean_p_d / -2) - 1; e = e - (params.lean_p_d / EqiDis), j++) {

                if (e < params.lean_p_d / -2 + 0.12) e = (params.lean_p_d / -2) + 0.12

                if (e >= (params.lean_p_d / 2) - 2) {
                    e = (params.lean_p_d / 2) - 0.12;
                }

                const legConnector = const_var.b_t_M_L.getObjectByName("legConnector").clone();
                legConnector.name = "lllegConnector" + j + "x" + i;
                legConnector.material = legConnector.material.clone();
                legConnector.scale.set(0.5, 0.2, 0.3);
                legConnector.position.set(-(params.lean_p_w) - (params.p_w / 2) + 0.35, i+0.075, e);
                legConnector.visible = const_var.leanLegstype == "ladder" && params.lean_p_e_l
                LeftLeanLegs.add(legConnector);
                const_var.legsForCut["leftLean"][legConnector.name] = legConnector;
            }
        }
        /*
        if( params.lean_p_e_l && params.trussType == "CTCT"){
           for (let i = (params.lean_p_h/2);i<params.lean_p_h; i = i+connectorDis) {
    
                for (let e = params.lean_p_d/2 -0.12; e > (params.lean_p_d/-2 )-1; e = e - (params.lean_p_d / EqiDis )) {
                       
                   if( e < params.lean_p_d / -2 + 0.12 ) e = (params.lean_p_d /-2) + 0.12
    
                    if(e >= (params.lean_p_d/2)-2){
                        e = (params.lean_p_d/2)-0.12;
                    }
    
                    const vShapeLegConnector = const_var.b_t_M_L.getObjectByName("legConnector").clone();
                        vShapeLegConnector.name = "vShapeLegConnector"+e;
                        vShapeLegConnector.scale.set(0.5,0.2,0.3);
                        vShapeLegConnector.position.set(-(params.lean_p_w)-(params.p_w/2)+0.35,i,e);
                    vShapeLegConnector.visible =  const_var.leanLegstype == "ladder"
                    vShapeLegConnector.position.x = -(params.lean_p_w)-(params.p_w/2)+(((i*0.15)-(params.lean_p_h*0.005*i))/2)//+0.35
                    vShapeLegConnector.scale.x = (i*0.15) -(params.lean_p_h*0.006*i)
                    vShapeLegConnector.visible = params.lean_p_e_l
                        LeftLeanLegs.add(vShapeLegConnector);
                }
            }
        }
        */
        if (const_var.leanLegstype == "zigzag" && params.lean_p_e_l) {
            zigZagLegs((params.lean_p_w*2) + params.p_w, params.lean_p_d, params.lean_p_h, LeftLeanLegs, undefined, EqiDis, "leftLean", undefined,);
        }  

    }

    /* Left Leanto Alignment */
    if (params.leantoAlignmentLeft == "1") {
        LeftLeanLegs.position.z = 0;
    }
    if (params.leantoAlignmentLeft == "2") {
        LeftLeanLegs.position.z = params.p_d / 2 - params.lean_p_d / 2;
    }
    if (params.leantoAlignmentLeft == "3") {
        LeftLeanLegs.position.z = -params.p_d / 2 + params.lean_p_d / 2;
    }
    if (params.isShowCenter == true) {
        LeftLeanLegs.visible = false
    }
}
