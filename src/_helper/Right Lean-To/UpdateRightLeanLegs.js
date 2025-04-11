import { params, const_var, } from '../../redux/reducers/reducer';
import * as THREE from "three"
import { zigZagLegs } from '../../redux/reducers/utils';

export const updateRightLeanToLegs = (leanToCheck) => {
    if ("undefined" != typeof const_var.scene.getObjectByName("RightLeanLegs")) const_var.scene.remove(const_var.scene.getObjectByName("RightLeanLegs"));
    if ("undefined" != typeof const_var.scene.getObjectByName("b_t_M_R_t_R")) const_var.scene.remove(const_var.scene.getObjectByName("b_t_M_R_t_R"));

    const RightLeanLegs = new THREE.Group();
    RightLeanLegs.name = "RightLeanLegs";
    const_var.scene.add(RightLeanLegs);

    if (leanToCheck) {

        //scale of lean to regular leg according to hight
        let scaleLegR = { "6": 0.23, "7": 0.28, "8": 0.34, "9": 0.40, "10": 0.45, "11": 0.5, "12": 0.55, "13": 0.6, "14": 0.65, "15": 0.7, "16": 0.75, "17": 0.8, "18": 0.85, "19": 0.9 };

        let storagePos = {
            "5": 5, "10": 10, "15": 15, "20": 20, "25": 25, "30": 30, "35": 35, "40": 40, "45": 45, "50": 50, "55": 55, "60": 60, "65": 65, "70": 70, "75": 75, "80": 80, "85": 85, "90": 90, "95": 95, "100": 100
        }
        const legDistance = 5;
        let leanToLeg = params.p_w / 2 + params.leanR_p_w;

        var disFor2Legs = 0.20;
        var disForVShapLegs = 0.5;
        var hightFor2Legs = params.leanR_p_h;
        var hightForVShapLegs = params.leanR_p_h + (params.b_l_t_r_pR * 0.08);

        if (const_var.leanRLegstype == "zigzag") {
            disFor2Legs = 0.9875;
            hightFor2Legs = (params.p_r_s == 1) ? (params.leanR_p_h + params.b_l_t_r_pR / 35 + - 0.08) : (params.leanR_p_h + params.b_l_t_r_pR / 20 - 0.08);
        }
        if (const_var.leanRLegstype == "ladder") {
            disFor2Legs = 0.60;
            hightFor2Legs = (params.p_r_s == 1) ? (params.leanR_p_h + params.b_l_t_r_pR / 35 + - 0.08) : (params.leanR_p_h + params.b_l_t_r_pR / 20 - 0.08);
        }
        if (const_var.leanRLegstype == "double") {
            disFor2Legs = 0.25 + 0.09;
            hightFor2Legs = (params.p_r_s == 1) ? (params.leanR_p_h + params.b_l_t_r_pR / 35 + - 0.08) : (params.leanR_p_h + params.b_l_t_r_pR / 20 - 0.08);
        }


        // left leanTo Trim acording to Front wall anand
        if (const_var.b_t_M_R_t_R.getObjectByName("leanToRightFrontWallTrim") != undefined) {
            const leanToRightFrontWallTrim = const_var.b_t_M_R_t_R.getObjectByName("leanToRightFrontWallTrim").clone();
            leanToRightFrontWallTrim.name = "leanToRightFrontWallTrim";
            leanToRightFrontWallTrim.position.set(leanToLeg - 0.03, params.leanR_p_h / 2, params.leanR_p_d / 2+0.02);
            leanToRightFrontWallTrim.visible = (params.add_right_front_lean_porch != true) ? true : false;

            var wH = params.leanR_p_h;
            var wP = params.leanR_p_h - wH / 2;

            leanToRightFrontWallTrim.position.y = wP;
            leanToRightFrontWallTrim.scale.set(params.p_w, wH, 0);

            switch (params.p_b_c_b_r_f) {
                case "One_Fourth_Close":
                    wH = wH / 4;
                    wP = params.leanR_p_h - wH / 2;
                    break;
                case "Half_Close":
                    wH = wH / 2;
                    wP = params.leanR_p_h - wH / 2;
                    break;
                case "Three_Fourth_Close":
                    wH = wH * 3 / 4;
                    wP = params.leanR_p_h - wH / 2;
                    break;
                case "Extended Gable":
                    wH = wH / 6;
                    wP = params.leanR_p_h - wH / 2;
                    break;
                case "Gable":
                    wH = 0;
                    wP = params.leanR_p_h - wH / 2;
                    leanToRightFrontWallTrim.visible = false
                    break;
                case "Close":
                    wH = params.leanR_p_h;
                    wP = params.leanR_p_h - wH / 2;
                    break;
                default:
                    leanToRightFrontWallTrim.visible = false;
                    break;

            }
            if(params.p_r_s=="1"){
                wH = wH-0.3;
                wP = wP-0.15;
            }
            leanToRightFrontWallTrim.position.y = wP - 0.07;
            leanToRightFrontWallTrim.scale.set(0.6, wH - 0.14, 0.5);
            if (params.is_translusant == true) {
                leanToRightFrontWallTrim.material.transparent = true;
                leanToRightFrontWallTrim.material.opacity = 0.1;
                // leanToRightFrontWallTrim.material.opacity =0.3;
                leanToRightFrontWallTrim.material.alphaTest = false;
                leanToRightFrontWallTrim.material.clearAlpha = 1;
            } else {
                leanToRightFrontWallTrim.material.transparent = true;
                leanToRightFrontWallTrim.material.opacity = 1;
                leanToRightFrontWallTrim.material.alphaTest = 0;
                leanToRightFrontWallTrim.material.clearAlpha = null;
            }
            RightLeanLegs.add(leanToRightFrontWallTrim);
        }

        // left leanTo Trim acording to back wall anand
        if (const_var.b_t_M_R_t_R.getObjectByName("leanToRightBackWallTrim") == undefined) {
            const leanToRightBackWallTrim = const_var.b_t_M_R_t_R.getObjectByName("leanToRightFrontWallTrim").clone();
            leanToRightBackWallTrim.name = "leanToRightBackWallTrim";
            leanToRightBackWallTrim.position.set(leanToLeg - 0.03, (params.leanR_p_h / 2) - 0.1, params.leanR_p_d / -2-0.02);
            leanToRightBackWallTrim.visible = (params.add_right_back_lean_porch != true) ? true : false;

            var wH = params.leanR_p_h;
            var wP = params.leanR_p_h - wH / 2;

            leanToRightBackWallTrim.position.y = wP;
            leanToRightBackWallTrim.scale.set(params.p_w, wH, 0);

            switch (params.p_b_c_b_r_b) {
                case "One_Fourth_Close":
                    wH = wH / 4;
                    wP = params.leanR_p_h - wH / 2;
                    break;
                case "Half_Close":
                    wH = wH / 2;
                    wP = params.leanR_p_h - wH / 2;
                    break;
                case "Three_Fourth_Close":
                    wH = wH * 3 / 4;
                    wP = params.leanR_p_h - wH / 2;
                    break;
                case "Extended Gable":
                    wH = wH / 6;
                    wP = params.leanR_p_h - wH / 2;
                    break;
                case "Gable":
                    wH = 0;
                    wP = params.leanR_p_h - wH / 2;
                    leanToRightBackWallTrim.visible = false
                    break;
                case "Close":
                    wH = params.leanR_p_h;
                    wP = params.leanR_p_h - wH / 2;
                    break;
                default:
                    leanToRightBackWallTrim.visible = false;
                    break;

            }
            if (params.add_storage_check_right != false) {
                wH = params.leanR_p_h;
                wP = params.leanR_p_h - wH / 2;
                leanToRightBackWallTrim.visible = true
            }
            if (params.p_b_c_b_r == "Close") {
                leanToRightBackWallTrim.visible = false
            }
            if(params.p_r_s=="1"){
                wH = wH-0.3;
                wP = wP-0.15;
            }
            leanToRightBackWallTrim.position.y = wP - 0.07;
            leanToRightBackWallTrim.scale.set(0.6, wH - 0.14, 0.5);

            RightLeanLegs.add(leanToRightBackWallTrim);
        }
        if (const_var.b_t_M_R_t_R.getObjectByName("rightLeanToFSWallTrim") == undefined) {
            const rightLeanToFSWallTrim = RightLeanLegs.getObjectByName("leanToRightBackWallTrim").clone();
            rightLeanToFSWallTrim.name = "rightLeanToFSWallTrim";
            var wH = params.leanR_p_h;
            var wP = params.leanR_p_h - wH / 2;
            rightLeanToFSWallTrim.position.z = params.leanR_p_d / -2 + (parseInt(params.add_storage_right))+0.02;
            rightLeanToFSWallTrim.visible = (params.add_storage_check_right == true && params.p_b_c_b_r != "Close") ? true : false
            RightLeanLegs.add(rightLeanToFSWallTrim);
        }
        // left leanTo Trim acording to left wall in front position anand
        if (const_var.b_t_M_R_t_R.getObjectByName("leanToRightFRightWallTrim") != undefined) {
            const leanToRightFRightWallTrim = const_var.b_t_M_R_t_R.getObjectByName("leanToRightFRightWallTrim").clone();
            leanToRightFRightWallTrim.name = "leanToRightFRightWallTrim";
            leanToRightFRightWallTrim.position.set(leanToLeg - 0.03, params.leanR_p_h / 2, params.leanR_p_d / 2+0.02);
            leanToRightFRightWallTrim.position.set(leanToLeg - 0.03, params.leanR_p_h / 2, params.leanR_p_d / 2+0.02);
            if (params.add_right_front_lean_porch == true) {
                leanToRightFRightWallTrim.position.set(leanToLeg - 0.03, params.leanR_p_h / 2, params.leanR_p_d / 2 + params.leanF_p_w+0.02);
            }
            leanToRightFRightWallTrim.visible = (params.p_b_c_b_r!="Open")?true:false;

            var wH = params.leanR_p_h;
            var wP = params.leanR_p_h - wH / 2;

            leanToRightFRightWallTrim.position.y = wP;
            leanToRightFRightWallTrim.scale.set(params.p_w, wH, 0);

            switch (params.p_b_c_b_r) {
                case "One_Fourth_Close":
                    wH = wH / 4;
                    wP = params.leanR_p_h - wH / 2;
                    break;
                case "Half_Close":
                    wH = wH / 2;
                    wP = params.leanR_p_h - wH / 2;
                    break;
                case "Three_Fourth_Close":
                    wH = wH * 3 / 4;
                    wP = params.leanR_p_h - wH / 2;
                    break;
                // case "1":
                //     if (params.p_r_s == "1") {
                //         wH = (Math.abs(params.p_b_c_b_r.replace(/\D/g, "")) * 3) + 0.28;
                //     } else {
                //         wH = (Math.abs(params.p_b_c_b_r.replace(/\D/g, "")) * 3);
                //     }
                //     wP = params.leanR_p_h - wH / 2;
                //     break;
                case "Gable":
                    break;
                case "Close":
                    wH = params.leanR_p_h;
                    wP = params.leanR_p_h - wH / 2;
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
            if(params.p_r_s=="1"){
                wH = wH-0.3;
                wP = wP-0.15;
            }
            // if (params.p_r_s == "1") {
                // leanToRightFRightWallTrim.position.y = wP - 0.14;
                // leanToRightFRightWallTrim.scale.set(0.6, wH, 0.5);
            // } else {
                leanToRightFRightWallTrim.position.y = wP - 0.07;
                leanToRightFRightWallTrim.scale.set(0.6, wH - 0.14, 0.5);
            // }

            RightLeanLegs.add(leanToRightFRightWallTrim);
        }

        // left leanTo Trim acording to left wall in Back position anand
        if (const_var.b_t_M_R_t_R.getObjectByName("leanToRightBRightWallTrim") == undefined) {
            const leanToRightBRightWallTrim = const_var.b_t_M_R_t_R.getObjectByName("leanToRightFRightWallTrim").clone();
            leanToRightBRightWallTrim.name = "leanToRightBRightWallTrim";
            leanToRightBRightWallTrim.position.set(leanToLeg - 0.03, params.leanR_p_h / 2, params.leanR_p_d / -2-0.02);
            if (params.add_right_back_lean_porch == true) {
                leanToRightBRightWallTrim.position.set(leanToLeg - 0.03, params.leanR_p_h / 2, params.leanR_p_d / -2 - params.leanB_p_w-0.02);
            }
            leanToRightBRightWallTrim.visible = ( params.p_b_c_b_r!="Open")?true:false;

            var wH = params.leanR_p_h;
            var wP = params.leanR_p_h - wH / 2;

            leanToRightBRightWallTrim.position.y = wP;
            leanToRightBRightWallTrim.scale.set(params.p_w, wH, 0);

            switch (params.p_b_c_b_r) {
                case "One_Fourth_Close":
                    wH = wH / 4;
                    wP = params.leanR_p_h - wH / 2;
                    break;
                case "Half_Close":
                    wH = wH / 2;
                    wP = params.leanR_p_h - wH / 2;
                    break;
                case "Three_Fourth_Close":
                    wH = wH * 3 / 4;
                    wP = params.leanR_p_h - wH / 2;
                    break;
                // case "1":
                //     if (params.p_r_s == "1") {
                //         wH = (Math.abs(params.p_b_c_b_r.replace(/\D/g, "")) * 3) + 0.28;
                //     } else {
                //         wH = (Math.abs(params.p_b_c_b_r.replace(/\D/g, "")) * 3);
                //     }
                //     wP = params.leanR_p_h - wH / 2;
                //     break;
                case "Gable":
                    break;
                case "Close":
                    wH = params.leanR_p_h;
                    wP = params.leanR_p_h - wH / 2;
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
            if(params.p_r_s=="1"){
                wH = wH-0.3;
                wP = wP-0.15;
            }
            // if (params.p_r_s == "1") {
            //     leanToRightBRightWallTrim.position.y = wP - 0.14;
            //     leanToRightBRightWallTrim.scale.set(0.6, wH, 0.5);
            // } else {
                leanToRightBRightWallTrim.position.y = wP - 0.07;
                leanToRightBRightWallTrim.scale.set(0.6, wH - 0.14, 0.5);
            // }

            RightLeanLegs.add(leanToRightBRightWallTrim);
        }


        //Right Lean To Base Rail For Legs    
        const rightLeantoBaseRail = const_var.b_t_M_R_t_R.getObjectByName("rightLeantoBaseRail").clone();
        rightLeantoBaseRail.name = "rightLeantoBaseRail";
        rightLeantoBaseRail.material = rightLeantoBaseRail.material.clone();
        rightLeantoBaseRail.scale.set(0.5, params.leanR_p_d - 0.02, 0.7);
        rightLeantoBaseRail.position.set((params.leanR_p_w + (params.p_w / 2)) - 0.08, 0.08, 0);
        rightLeantoBaseRail.rotation.x = Math.PI / -2;
        rightLeantoBaseRail.visible = params.add_right_lean;
        RightLeanLegs.add(rightLeantoBaseRail);
        const_var.legsForCut["rightLean"][rightLeantoBaseRail.name] = rightLeantoBaseRail;

        const rightLeantoBaseRailDouble = const_var.b_t_M_R_t_R.getObjectByName("rightLeantoBaseRail").clone();
        rightLeantoBaseRailDouble.name = "rightLeantoBaseRailDouble";
        rightLeantoBaseRailDouble.material = rightLeantoBaseRailDouble.material.clone();
        rightLeantoBaseRailDouble.scale.set(0.5, params.leanR_p_d - 0.02, 0.7);
        rightLeantoBaseRailDouble.position.set((params.leanR_p_w + (params.p_w / 2)) - disFor2Legs, 0.08, 0);
        rightLeantoBaseRailDouble.rotation.x = Math.PI / -2;
        // rightLeantoBaseRailDouble.visible = params.leanR_p_e_l  && params.trussType != "CTCT";
        rightLeantoBaseRailDouble.visible = params.leanR_p_e_l;
        RightLeanLegs.add(rightLeantoBaseRailDouble);
        const_var.legsForCut["rightLean"][rightLeantoBaseRailDouble.name] = rightLeantoBaseRailDouble;

        let EqiDis;
        if (params.fourth_center_cost == true) {
            if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
            {
                EqiDis = (params.oncenter_val_with_action!='')?((params.leanR_p_d)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.leanR_p_d)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0)
            }
        } else {
            if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
            {
                EqiDis = (params.oncenter_val_with_action!='')?((params.leanR_p_d)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.leanR_p_d)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0)    
            }
        }

        //Loop For Add Legs Dynamically For Right Lean To
        let legsCount = 0;
        for (let i = params.leanR_p_d / 2 - 0.12, j = 0; i > (params.leanR_p_d / -2) - 1; i = i - (params.leanR_p_d / EqiDis), j++) {

            if (i < params.leanR_p_d / -2 + 0.12) i = (params.leanR_p_d / -2) + 0.12

            //Right Lean To Right Front Leg
            if (const_var.b_t_M_R_t_R.getObjectByName("rightLeanToLegs") == undefined) {
                const rightLeanToLegs = const_var.b_t_M_R_t_R.getObjectByName("leanTorightFrontLeg").clone();
                rightLeanToLegs.name = "rightLeanToLegs" + j + "x";
                rightLeanToLegs.material = rightLeanToLegs.material.clone();
                rightLeanToLegs.scale.set(0.5, params.leanR_p_h, 1);
                rightLeanToLegs.position.set(leanToLeg - 0.08, params.leanR_p_h / 2, i);
                rightLeanToLegs.visible = (params.p_r_s != "1") ? true : false;
                RightLeanLegs.add(rightLeanToLegs);
                legsCount++; 
                if (params.p_r_s != "1") {
                    const_var.legsForCut["rightLean"][rightLeanToLegs.name] = rightLeanToLegs;
                    const_var.legsForCutFee["rightLean"][rightLeanToLegs.name] = rightLeanToLegs;
                }
            }

            if (const_var.b_t_M_R_t_R.getObjectByName("rightLeanToDoubleLegs") == undefined) {
                const rightLeanToLegsDouble = const_var.b_t_M_R_t_R.getObjectByName("leanTorightFrontLeg").clone();
                rightLeanToLegsDouble.name = "rightLeanToDoubleLegs" + j + "x";
                rightLeanToLegsDouble.material = rightLeanToLegsDouble.material.clone();
                rightLeanToLegsDouble.scale.set(0.5, hightFor2Legs, 1);
                rightLeanToLegsDouble.position.set(leanToLeg - disFor2Legs, hightFor2Legs / 2, i);
                // rightLeanToLegsDouble.visible = params.leanR_p_e_l  && params.trussType != "CTCT";
                rightLeanToLegsDouble.visible = params.leanR_p_e_l;
                RightLeanLegs.add(rightLeanToLegsDouble);
                const_var.legsForCut["rightLean"][rightLeanToLegsDouble.name] = rightLeanToLegsDouble;
            }

            const rightLeanToVShapLeg = const_var.b_t_M_R_t_R.getObjectByName("leanTorightFrontLeg").clone();
            rightLeanToVShapLeg.name = "rightLeanToVShapLeg" + i;
            rightLeanToVShapLeg.material = rightLeanToVShapLeg.material.clone();
            //   rightLeanToVShapLeg.visible = params.leanR_p_e_l && params.trussType == "CTCT";
            rightLeanToVShapLeg.visible = false;
            rightLeanToVShapLeg.scale.set(0.5, hightForVShapLegs, 1);
            rightLeanToVShapLeg.position.set(leanToLeg - disForVShapLegs, hightForVShapLegs / 2, i.toFixed(2));
            rightLeanToVShapLeg.rotation.z = 0.1325 - (params.leanR_p_h * 0.005);
            RightLeanLegs.add(rightLeanToVShapLeg);

            //Right Lean To Right Front Regular Leg
            if (const_var.b_t_M_R_t_R.getObjectByName("rightLeanToRegularLegs") == undefined) {
                const rightLeanToRegularLegs = const_var.b_t_M_R_t_R.getObjectByName("leanToRightFrontLegR").clone();
                rightLeanToRegularLegs.name = "rightLeanToLegs" + j + "xR";
                rightLeanToRegularLegs.material = rightLeanToRegularLegs.material.clone();
                rightLeanToRegularLegs.scale.set(0.5, params.leanR_p_h - 0.1, 1);
                rightLeanToRegularLegs.position.set(leanToLeg - 0.08, (params.leanR_p_h / 2) - 0.05, i);
                rightLeanToRegularLegs.visible = (params.p_r_s == "1") ? true : false;
                RightLeanLegs.add(rightLeanToRegularLegs);
                if (params.p_r_s == "1") {
                    const_var.legsForCut["rightLean"][rightLeanToRegularLegs.name] = rightLeanToRegularLegs;
                    const_var.legsForCutFee["rightLean"][rightLeanToRegularLegs.name] = rightLeanToRegularLegs;
                }
            }
        }

        let connectorDis = 2
        for (let i = 0; i < ((params.leanR_p_h) - 1); i = i + connectorDis) {

            for (let e = params.leanR_p_d / 2 - 0.12, j = 0; e > (params.leanR_p_d / -2) - 1; e = e - (params.leanR_p_d / EqiDis), j++) {

                if (e < params.leanR_p_d / -2 + 0.12) e = (params.leanR_p_d / -2) + 0.12

                if (e >= (params.leanR_p_d / 2) - 2) {
                    e = (params.leanR_p_d / 2) - 0.12;
                }

                const legConnector = const_var.b_t_M_L.getObjectByName("legConnector").clone();
                legConnector.name = "rllegConnector" + j + 'x' + i;
                legConnector.material = legConnector.material.clone();
                legConnector.scale.set(0.5, 0.2, 0.3);
                legConnector.position.set((params.leanR_p_w) + (params.p_w / 2) - 0.35, i+0.075, e);
                legConnector.visible = const_var.leanRLegstype == "ladder" && params.leanR_p_e_l
                RightLeanLegs.add(legConnector);
                const_var.legsForCut["rightLean"][legConnector.name] = legConnector;
              
            }
        }

        if(params.p_b_c_b_r_f == "Close" || params.p_b_c_b_r_b == "Close"){    

            if(params.p_b_c_b_r_f == "Close"){
            const rightLeantoFrontBaseRail = const_var.b_t_M_R_t_R.getObjectByName("rightLeantoBaseRail").clone();
            rightLeantoFrontBaseRail.name = "rightLeantoFrontBaseRail";
            rightLeantoFrontBaseRail.material = rightLeantoFrontBaseRail.material.clone();
            rightLeantoFrontBaseRail.scale.set(0.5, params.leanR_p_w - 0.02, 0.7);
            rightLeantoFrontBaseRail.position.set((params.leanR_p_w/2) + params.p_w / 2 + 0.08, 0.08, (params.leanR_p_d/2)- 0.12);
            rightLeantoFrontBaseRail.rotation.x = Math.PI / -2;
            rightLeantoFrontBaseRail.rotation.z = Math.PI / 2;
            rightLeantoFrontBaseRail.visible = params.add_right_lean;
            RightLeanLegs.add(rightLeantoFrontBaseRail);
            const_var.legsForCut["rightFrontLean"][rightLeantoFrontBaseRail.name] = rightLeantoFrontBaseRail;
            }
    
            if(params.p_b_c_b_r_b == "Close"){
            const rightLeantoBackBaseRail = const_var.b_t_M_R_t_R.getObjectByName("rightLeantoBaseRail").clone();
            rightLeantoBackBaseRail.name = "rightLeantoBackBaseRail";
            rightLeantoBackBaseRail.material = rightLeantoBackBaseRail.material.clone();
            rightLeantoBackBaseRail.scale.set(0.5, params.leanR_p_w - 0.02, 0.7);
            rightLeantoBackBaseRail.position.set((params.leanR_p_w/2) + params.p_w / 2 + 0.08, 0.08, (params.leanR_p_d/-2)+ 0.12);
            rightLeantoBackBaseRail.rotation.x = Math.PI / -2;
            rightLeantoBackBaseRail.rotation.z = Math.PI / 2;
            rightLeantoBackBaseRail.visible = params.add_right_lean;
            RightLeanLegs.add(rightLeantoBackBaseRail);
            const_var.legsForCut["rightBackLean"][rightLeantoBackBaseRail.name] = rightLeantoBackBaseRail;
            }

            let slope = 0
            let endsEqiDis;
            if (params.fourth_center_cost == true) {
                    if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
                {
                    endsEqiDis = (params.oncenter_val_with_action!='')?((params.leanR_p_w)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.leanR_p_w)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0)
                }
            } else {
                if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
                {
                    endsEqiDis = (params.oncenter_val_with_action!='')?((params.leanR_p_w)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.leanR_p_w)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0)    
                }
            }
    
            
    
            for (let i = (params.p_w /2 + params.leanR_p_w)  ; i > params.p_w / 2; i = i - (params.leanR_p_w / endsEqiDis)) { 
    
                if(params.p_b_c_b_r_f == "Close" && i != (params.p_w /2 + params.leanR_p_w)){
                    const rightLeantoFrontLegs = const_var.b_t_M_R_t_R.getObjectByName("leanTorightFrontLeg").clone();
                    rightLeantoFrontLegs.name = "rightLeantoFrontLegs" + i;
                    rightLeantoFrontLegs.material = rightLeantoFrontLegs.material.clone();
                    rightLeantoFrontLegs.scale.set(0.5, params.leanR_p_h == 0 ? 1: params.leanR_p_h + ((params.b_l_t_r_pR/12)*(slope*(params.leanR_p_w / endsEqiDis))), 1);
                    rightLeantoFrontLegs.position.set((-0.08 +i).toFixed(2), (params.leanR_p_h+((params.b_l_t_r_pR/12)*(slope*(params.leanR_p_w / endsEqiDis)))) / 2, params.leanR_p_d / 2 - 0.12);
                    rightLeantoFrontLegs.rotation.y = Math.PI/2
                    rightLeantoFrontLegs.visible =true;
                    RightLeanLegs.add(rightLeantoFrontLegs);
                    legsCount++; 
                    const_var.legsForCut["rightFrontLean"][rightLeantoFrontLegs.name] = rightLeantoFrontLegs;
                }
    
                if(params.p_b_c_b_r_b == "Close" && i != (params.p_w /2 + params.leanR_p_w)){
                    const rightLeantoBackLegs = const_var.b_t_M_R_t_R.getObjectByName("leanTorightFrontLeg").clone();
                    rightLeantoBackLegs.name = "rightLeantoBackLegs" + i;
                    rightLeantoBackLegs.material = rightLeantoBackLegs.material.clone();
                    rightLeantoBackLegs.scale.set(0.5, params.leanR_p_h == 0 ? 1: params.leanR_p_h + ((params.b_l_t_r_pR/12)*(slope*(params.leanR_p_w / endsEqiDis))), 1);
                    rightLeantoBackLegs.position.set((-0.08 +i).toFixed(2), (params.leanR_p_h+((params.b_l_t_r_pR/12)*(slope*(params.leanR_p_w / endsEqiDis)))) / 2, params.leanR_p_d / -2 + 0.12);
                    rightLeantoBackLegs.rotation.y = Math.PI/2
                    rightLeantoBackLegs.visible =true;
                    RightLeanLegs.add(rightLeantoBackLegs);
                    legsCount++; 
                    const_var.legsForCut["rightBackLean"][rightLeantoBackLegs.name] = rightLeantoBackLegs;
                }
    
                slope += 1
    
            }
        }
        const_var.rightLeanLegs = legsCount;
        const_var.lengthData.rightLean.legsCount = legsCount;
        /*
        if( params.leanR_p_e_l && params.trussType == "CTCT"){
            for (let i = (params.leanR_p_h/2);i<params.leanR_p_h; i = i+connectorDis) {
    
                for (let e = params.leanR_p_d/2 -0.12; e > (params.leanR_p_d/-2 )-1; e = e - (params.leanR_p_d / EqiDis )) {
                        
                    if( e < params.leanR_p_d / -2 + 0.12 ) e = (params.leanR_p_d /-2) + 0.12
    
                    if(e >= (params.leanR_p_d/2)-2){
                        e = (params.leanR_p_d/2)-0.12;
                    }
    
                    const vShapeLegConnector = const_var.b_t_M_L.getObjectByName("legConnector").clone();
                            vShapeLegConnector.name = "vShapeLegConnector"+e;
                            vShapeLegConnector.scale.set(0.5,0.2,0.3);
                            vShapeLegConnector.position.set(-(params.leanR_p_w)-(params.p_w/2)+0.35,i,e);
                    vShapeLegConnector.visible =  const_var.leanRLegstype == "ladder"
                    vShapeLegConnector.position.x = (params.leanR_p_w)+(params.p_w/2)-(((i*0.15)-(params.leanR_p_h*0.005*i))/2)
                    vShapeLegConnector.scale.x = (i*0.15) -(params.leanR_p_h*0.006*i)
                    vShapeLegConnector.visible = params.leanR_p_e_l
                    RightLeanLegs.add(vShapeLegConnector);
                }
            }
        }
        */

        if (const_var.leanRLegstype == "zigzag" && params.leanR_p_e_l) {
            zigZagLegs((params.leanR_p_w*2) + params.p_w, params.leanR_p_d, params.leanR_p_h, undefined, RightLeanLegs, EqiDis, undefined, "rightLean");
        }

    }

    if (params.leantoAlignmentRight == "1") {
        RightLeanLegs.position.z = 0;
    }
    if (params.leantoAlignmentRight == "2") {
        RightLeanLegs.position.z = params.p_d / 2 - params.leanR_p_d / 2;
    }
    if (params.leantoAlignmentRight == "3") {
        RightLeanLegs.position.z = -params.p_d / 2 + params.leanR_p_d / 2;
    }
    if (params.isShowCenter == true) {
        RightLeanLegs.visible = false
    }
}