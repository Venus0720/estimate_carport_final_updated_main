import * as THREE from "three";
import verticalTexture from '../../assets/images/imgTextures/buildingImages/verticalTexture.jpeg';
import horizontalTexture from '../../assets/images/imgTextures/buildingImages/horizantalTexture.jpeg';
import { params, const_var, } from '../../redux/reducers/reducer';

export const updateLeanToPorchLegs = () => {

    if ("undefined" != typeof const_var.scene.getObjectByName("L_F_L_P")) const_var.scene.remove(const_var.scene.getObjectByName("L_F_L_P"));
    if ("undefined" != typeof const_var.scene.getObjectByName("R_F_L_P")) const_var.scene.remove(const_var.scene.getObjectByName("R_F_L_P"));
    
    if ("undefined" != typeof const_var.scene.getObjectByName("L_L_F_P_Legs")) const_var.scene.remove(const_var.scene.getObjectByName("L_L_F_P_Legs"));
    if ("undefined" != typeof const_var.scene.getObjectByName("R_L_F_P_Legs")) const_var.scene.remove(const_var.scene.getObjectByName("R_L_F_P_Legs"));
    if ("undefined" != typeof const_var.scene.getObjectByName("L_B_L_P_Legs")) const_var.scene.remove(const_var.scene.getObjectByName("L_B_L_P_Legs"));
    if ("undefined" != typeof const_var.scene.getObjectByName("R_B_L_P_Legs")) const_var.scene.remove(const_var.scene.getObjectByName("R_B_L_P_Legs"));
  
    const L_L_F_P_Legs = new THREE.Group();
    L_L_F_P_Legs.name = "L_L_F_P_Legs";
    const_var.scene.add(L_L_F_P_Legs);

    const R_L_F_P_Legs = new THREE.Group();
    R_L_F_P_Legs.name = "R_L_F_P_Legs";
    const_var.scene.add(R_L_F_P_Legs);

    var disFor2Legs = 0.20;
    var disForVShapLegs = 0.5;
    var hightFor2Legs = params.lean_p_h;
    var hightForVShapLegs = params.lean_p_h + (params.b_l_t_r_p*0.08);
    let frontlegsCount = 0,leftlegsCount = 0,rightlegsCount = 0,backlegsCount = 0;

    if (const_var.leanLegstype == "zigzag") {
        disFor2Legs = 0.9875;
        hightFor2Legs =(params.p_r_s == 1) ? (params.lean_p_h + params.b_l_t_r_p/35 + - 0.08) : (params.lean_p_h + params.b_l_t_r_p/20 - 0.08);
    }
    if (const_var.leanLegstype == "ladder") {
        disFor2Legs = 0.60;
        hightFor2Legs =(params.p_r_s == 1) ? (params.lean_p_h + params.b_l_t_r_p/35 + - 0.08) : (params.lean_p_h + params.b_l_t_r_p/20 - 0.08);
    }
    if (const_var.leanLegstype == "double") {
        disFor2Legs = 0.25+0.09;
        hightFor2Legs = (params.p_r_s == 1) ? (params.lean_p_h + params.b_l_t_r_p/35 + - 0.08) : (params.lean_p_h + params.b_l_t_r_p/20 - 0.08);
    }

    
    //Left FrontLean-to porches Legs

    if (const_var.L_F_L_P.getObjectByName("lflPorchCornerLeg")!=undefined) {
        const lflPorchCornerLeg = const_var.L_F_L_P.getObjectByName("lflPorchCornerLeg").clone();
        lflPorchCornerLeg.name = "lflPorchCornerLeg";
        lflPorchCornerLeg.material = lflPorchCornerLeg.material.clone();
        lflPorchCornerLeg.scale.set(0.5,(params.p_r_s=="1")? params.lean_p_h-0.13 :params.lean_p_h, 1);
        lflPorchCornerLeg.position.set(-((params.p_w/2)+params.lean_p_w) + 0.16,(params.p_r_s=="1") ? params.lean_p_h / 2-0.13 : params.lean_p_h / 2, params.p_d / 2 - 0.16+ params.lean_p_w);
        lflPorchCornerLeg.visible = params.add_left_front_lean_porch;
        lflPorchCornerLeg.visible = true;
        lflPorchCornerLeg.rotation.y=Math.PI/4;
        L_L_F_P_Legs.add(lflPorchCornerLeg);
        if (params.add_left_front_lean_porch) leftlegsCount++;
        // const_var.legsForCut[lflPorchCornerLeg.name] = lflPorchCornerLeg;
    }

    if(params.lean_p_e_l == true){
    if (const_var.L_F_L_P.getObjectByName("lflPorchCornerLegDouble")==undefined) {
        const lflPorchCornerLegDouble = const_var.L_F_L_P.getObjectByName("lflPorchCornerLeg").clone();
        lflPorchCornerLegDouble.name = "lflPorchCornerLegDouble";
        lflPorchCornerLegDouble.material = lflPorchCornerLegDouble.material.clone();
        lflPorchCornerLegDouble.scale.set(0.5,(params.p_r_s=="1")? params.lean_p_h-0.13 :params.lean_p_h, 1);
        lflPorchCornerLegDouble.position.set(-((params.p_w/2)+params.lean_p_w) + disFor2Legs+0.045,(params.p_r_s=="1") ? hightFor2Legs / 2-0.1 : hightFor2Legs / 2,params.p_d / 2 - disFor2Legs+params.lean_p_w);
        if (const_var.leanLegstype == "zigzag") {
            lflPorchCornerLegDouble.position.set(-((params.p_w/2)+params.lean_p_w) + disFor2Legs-0.07,(params.p_r_s=="1") ? hightFor2Legs / 2-0.1 : hightFor2Legs / 2,params.p_d / 2 - disFor2Legs+params.lean_p_w + 0.07);
        }
        // lflPorchCornerLegDouble.visible = params.lean_p_e_l  && params.trussType != "CTCT";
        lflPorchCornerLegDouble.visible = params.lean_p_e_l;
        lflPorchCornerLegDouble.rotation.y=Math.PI/4;
        L_L_F_P_Legs.add(lflPorchCornerLegDouble);
        // const_var.legsForCut[lflPorchCornerLegDouble.name] = lflPorchCornerLegDouble;
    }
    }

    if (const_var.L_F_L_P.getObjectByName("lflPorchCornerVshapeLeg")==undefined) {
        const lflPorchCornerVshapeLeg = const_var.L_F_L_P.getObjectByName("lflPorchCornerLeg").clone();
        lflPorchCornerVshapeLeg.name = "lflPorchCornerVshapeLeg";
        lflPorchCornerVshapeLeg.scale.set(0.5,(params.p_r_s=="1")? hightForVShapLegs-0.1 :hightForVShapLegs, 1);
        lflPorchCornerVshapeLeg.position.set(-((params.p_w/2)+params.lean_p_w) + disForVShapLegs+0.045,(params.p_r_s=="1") ? hightForVShapLegs / 2-0.1 : hightForVShapLegs / 2,params.p_d / 2 - disForVShapLegs+params.lean_p_w);
        lflPorchCornerVshapeLeg.visible = params.lean_p_e_l  && params.trussType == "CTCT";
        lflPorchCornerVshapeLeg.visible = false;
        lflPorchCornerVshapeLeg.rotation.y=Math.PI/4;
        lflPorchCornerVshapeLeg.rotation.z = -0.1325 + (params.lean_p_h * 0.005);
        L_L_F_P_Legs.add(lflPorchCornerVshapeLeg);
    }

    if (const_var.L_F_L_P.getObjectByName("lflPorchleftBaseRail")!=undefined) {
        const lflPorchleftBaseRail = const_var.L_F_L_P.getObjectByName("lflPorchleftBaseRail").clone();
        lflPorchleftBaseRail.name = "lflPorchleftBaseRail";
        lflPorchleftBaseRail.material = lflPorchleftBaseRail.material.clone();
	    lflPorchleftBaseRail.scale.set(0.5,params.lean_p_w - 0.02,0.7);
	    lflPorchleftBaseRail.position.set(params.p_w/-2+0.08-params.lean_p_w,0.08,params.p_d/2+(params.lean_p_w/2));
	    lflPorchleftBaseRail.rotation.x=Math.PI/-2;
	    lflPorchleftBaseRail.visible = params.add_left_front_lean_porch;
	    lflPorchleftBaseRail.visible = true;
        L_L_F_P_Legs.add(lflPorchleftBaseRail);
        const_var.legsForCut["leftLean"][lflPorchleftBaseRail.name] = lflPorchleftBaseRail;
    }

    if (const_var.L_F_L_P.getObjectByName("lflPorchleftDoubleBaseRail")==undefined) {
        const lflPorchleftBaseRailDouble = const_var.L_F_L_P.getObjectByName("lflPorchleftBaseRail").clone();
        lflPorchleftBaseRailDouble.name = "lflPorchleftDoubleBaseRail";
        lflPorchleftBaseRailDouble.material = lflPorchleftBaseRailDouble.material.clone();
	    lflPorchleftBaseRailDouble.scale.set(0.5,params.lean_p_w - 0.02,0.7);
	    lflPorchleftBaseRailDouble.position.set(params.p_w/-2+disFor2Legs-params.lean_p_w,0.08,params.p_d/2+(params.lean_p_w/2));
	    lflPorchleftBaseRailDouble.rotation.x=Math.PI/-2;
	    // lflPorchleftBaseRailDouble.visible = params.lean_p_e_l  && params.trussType != "CTCT";
	    lflPorchleftBaseRailDouble.visible = params.lean_p_e_l ;
        L_L_F_P_Legs.add(lflPorchleftBaseRailDouble);
        const_var.legsForCut["leftLean"][lflPorchleftBaseRailDouble.name] = lflPorchleftBaseRailDouble;
    }

    if (const_var.L_F_L_P.getObjectByName("lflPorchFrontBaseRail")!=undefined) {
        const lflPorchFrontBaseRail = const_var.L_F_L_P.getObjectByName("lflPorchFrontBaseRail").clone();
	    lflPorchFrontBaseRail.name = "lflPorchFrontBaseRail";
	    lflPorchFrontBaseRail.scale.set(0.5,params.lean_p_w - 0.02,0.7);
	    lflPorchFrontBaseRail.position.set(params.p_w/-2+0.08-(params.lean_p_w/2),0.08,params.p_d/2+params.lean_p_w- 0.08);
	    lflPorchFrontBaseRail.rotation.x=Math.PI/-2;
	    lflPorchFrontBaseRail.rotation.z=Math.PI/2;
	    lflPorchFrontBaseRail.visible = params.add_left_front_lean_porch;
	    lflPorchFrontBaseRail.visible = true;
        L_L_F_P_Legs.add(lflPorchFrontBaseRail);
        const_var.legsForCut["frontLean"][lflPorchFrontBaseRail.name] = lflPorchFrontBaseRail;
    }

    if (const_var.L_F_L_P.getObjectByName("lflPorchFrontDoubleBaseRail")==undefined) {
        const lflPorchFrontBaseRailDouble = const_var.L_F_L_P.getObjectByName("lflPorchFrontBaseRail").clone();
	    lflPorchFrontBaseRailDouble.name = "lflPorchFrontDoubleBaseRail";
	    lflPorchFrontBaseRailDouble.scale.set(0.5,params.lean_p_w - 0.02,0.7);
	    lflPorchFrontBaseRailDouble.position.set(params.p_w/-2+0.08-(params.lean_p_w/2),0.08,params.p_d/2+params.lean_p_w- disFor2Legs);
	    lflPorchFrontBaseRailDouble.rotation.x=Math.PI/-2;
	    lflPorchFrontBaseRailDouble.rotation.z=Math.PI/2;
	    // lflPorchFrontBaseRailDouble.visible = params.leanF_p_e_l  && params.trussType != "CTCT";
	    lflPorchFrontBaseRailDouble.visible = params.lean_p_e_l;
        L_L_F_P_Legs.add(lflPorchFrontBaseRailDouble);
        const_var.legsForCut["frontLean"][lflPorchFrontBaseRailDouble.name] = lflPorchFrontBaseRailDouble;
    }

    var EqiDis;
    if(params.fourth_center_cost == true){
        if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
        {
            EqiDis = (params.oncenter_val_with_action!='')?((params.lean_p_w)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.lean_p_w)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0)
        }
    } else {
        if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
        {
            EqiDis = (params.oncenter_val_with_action!='')?((params.lean_p_w)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.lean_p_w)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0)    
        }
    }
    const legDistance  = 5;
    for(let i = (params.lean_p_w/EqiDis), j = (Math.round(params.p_w / 4) + 6), k = Math.round(params.p_d / 4 + 1);i<(params.lean_p_w - 2);i = i+(params.lean_p_w/EqiDis), j++, k++){
        
        const lflPorchLeftMiddleLeg = const_var.L_F_L_P.getObjectByName("lflPorchLeftLeg").clone();
        lflPorchLeftMiddleLeg.name = "PorchLeftMiddleLeg"+ k + "x";
        lflPorchLeftMiddleLeg.material = lflPorchLeftMiddleLeg.material.clone();
		lflPorchLeftMiddleLeg.scale.set(0.5,(params.p_r_s=="1")? params.lean_p_h-0.1 :params.lean_p_h, 1);
		// lflPorchLeftMiddleLeg.position.set(-((params.p_w/2)+params.lean_p_w) + 0.08,(params.p_r_s=="1") ? params.lean_p_h / 2-0.1 : params.lean_p_h / 2,params.p_d / 2 - 0.12+(params.lean_p_w/2));
		lflPorchLeftMiddleLeg.position.set(-((params.p_w/2)+params.lean_p_w) + 0.08,(params.p_r_s=="1") ? params.lean_p_h / 2- 0.05 : params.lean_p_h / 2,params.p_d / 2 - 0.12+i);
		lflPorchLeftMiddleLeg.visible = params.add_left_front_lean_porch;
		lflPorchLeftMiddleLeg.visible = true;
        if (params.add_left_front_lean_porch) leftlegsCount++;
        L_L_F_P_Legs.add(lflPorchLeftMiddleLeg);
        const_var.legsForCut["leftLean"][lflPorchLeftMiddleLeg.name] = lflPorchLeftMiddleLeg;
        const_var.legsForCutFee["leftLean"][lflPorchLeftMiddleLeg.name] = lflPorchLeftMiddleLeg;

        if(params.lean_p_e_l == true){
        const lflPorchLeftMiddleLegDouble = const_var.L_F_L_P.getObjectByName("lflPorchLeftLeg").clone();
        lflPorchLeftMiddleLegDouble.name = "PorchLeftMiddleDoubleLeg"+ k + "x";
        lflPorchLeftMiddleLegDouble.material = lflPorchLeftMiddleLegDouble.material.clone();
		lflPorchLeftMiddleLegDouble.scale.set(0.5,(params.p_r_s=="1")? params.lean_p_h-0.1 :params.lean_p_h, 1);
		lflPorchLeftMiddleLegDouble.position.set(-((params.p_w/2)+params.lean_p_w) + disFor2Legs,(params.p_r_s=="1") ? hightFor2Legs / 2-0.05 : hightFor2Legs / 2,params.p_d / 2 - 0.12+i);
		lflPorchLeftMiddleLegDouble.visible = params.lean_p_e_l  && params.trussType != "CTCT";
		lflPorchLeftMiddleLegDouble.visible = params.lean_p_e_l;
        L_L_F_P_Legs.add(lflPorchLeftMiddleLegDouble);
        const_var.legsForCut["leftLean"][lflPorchLeftMiddleLegDouble.name] = lflPorchLeftMiddleLegDouble;
        }

        const lflPorchLeftMiddleVshapeLeg = const_var.L_F_L_P.getObjectByName("lflPorchLeftLeg").clone();
        lflPorchLeftMiddleVshapeLeg.name = "lflPorchLeftMiddleVshapeLeg"+i;
		lflPorchLeftMiddleVshapeLeg.scale.set(0.5,(params.p_r_s=="1")? hightForVShapLegs-0.1 :hightForVShapLegs, 1);
		lflPorchLeftMiddleVshapeLeg.position.set(-((params.p_w/2)+params.lean_p_w) + disForVShapLegs,(params.p_r_s=="1") ? hightForVShapLegs / 2-0.1 : hightForVShapLegs / 2,params.p_d / 2 - 0.12+i);
		lflPorchLeftMiddleVshapeLeg.visible = params.lean_p_e_l  && params.trussType == "CTCT";
		lflPorchLeftMiddleVshapeLeg.visible = false;
        lflPorchLeftMiddleVshapeLeg.rotation.z = -0.1325 + (params.lean_p_h * 0.005);
        L_L_F_P_Legs.add(lflPorchLeftMiddleVshapeLeg);

        const lflPorchFrontMiddleLeg = const_var.L_F_L_P.getObjectByName("lflPorchFrontLeg").clone();
        lflPorchFrontMiddleLeg.name = "PorchFrontMiddleLeg"+ j + "x";
        lflPorchFrontMiddleLeg.material = lflPorchFrontMiddleLeg.material.clone();
		lflPorchFrontMiddleLeg.scale.set(0.5, (params.p_r_s=="1")? params.lean_p_h-0.1 :params.lean_p_h, 1);
		lflPorchFrontMiddleLeg.position.set(params.p_w/-2-i,(params.p_r_s=="1") ? params.lean_p_h / 2-0.05 : params.lean_p_h / 2,params.p_d / 2 - 0.08+params.lean_p_w);
		lflPorchFrontMiddleLeg.rotation.y = Math.PI/2
		lflPorchFrontMiddleLeg.visible = params.add_left_front_lean_porch;
		lflPorchFrontMiddleLeg.visible = true;
        L_L_F_P_Legs.add(lflPorchFrontMiddleLeg);
        if (params.add_left_front_lean_porch) frontlegsCount++;
        const_var.legsForCut["frontLean"][lflPorchFrontMiddleLeg.name] = lflPorchFrontMiddleLeg;
        const_var.legsForCutFee["frontLean"][lflPorchFrontMiddleLeg.name] = lflPorchFrontMiddleLeg;

        if(params.lean_p_e_l == true){
        const lflPorchFrontMiddleLegDouble = const_var.L_F_L_P.getObjectByName("lflPorchFrontLeg").clone();
        lflPorchFrontMiddleLegDouble.name = "PorchFrontMiddleDoubleLeg"+ j + "x";
        lflPorchFrontMiddleLegDouble.material = lflPorchFrontMiddleLegDouble.material.clone();
		lflPorchFrontMiddleLegDouble.scale.set(0.5, (params.p_r_s=="1")? params.lean_p_h-0.1 :params.lean_p_h, 1);
		lflPorchFrontMiddleLegDouble.position.set(params.p_w/-2-i,(params.p_r_s=="1") ? hightFor2Legs / 2-0.05 : hightFor2Legs / 2,params.p_d / 2 - disFor2Legs+params.lean_p_w);
		lflPorchFrontMiddleLegDouble.rotation.y = Math.PI/2
		// lflPorchFrontMiddleLegDouble.visible = params.p_e_l  && params.trussType != "CTCT";
		lflPorchFrontMiddleLegDouble.visible = params.lean_p_e_l;
        L_L_F_P_Legs.add(lflPorchFrontMiddleLegDouble);
        const_var.legsForCut["frontLean"][lflPorchFrontMiddleLegDouble.name] = lflPorchFrontMiddleLegDouble;
        }

        const lflPorchFrontMiddleVshapeLeg = const_var.L_F_L_P.getObjectByName("lflPorchFrontLeg").clone();
        lflPorchFrontMiddleVshapeLeg.name = "lflPorchFrontMiddleVshapeLeg"+i;
		lflPorchFrontMiddleVshapeLeg.scale.set(0.5, (params.p_r_s=="1")? hightForVShapLegs-0.027 :hightForVShapLegs, 1);
		lflPorchFrontMiddleVshapeLeg.position.set(params.p_w/-2-i,(params.p_r_s=="1") ? hightForVShapLegs / 2-0.027 : hightForVShapLegs / 2,params.p_d / 2 - disForVShapLegs+params.lean_p_w);
		lflPorchFrontMiddleVshapeLeg.rotation.y = Math.PI/2
		lflPorchFrontMiddleVshapeLeg.visible = params.p_e_l  && params.trussType == "CTCT";
		lflPorchFrontMiddleVshapeLeg.visible = false;
        lflPorchFrontMiddleVshapeLeg.rotation.z = -0.1325 + (params.lean_p_h * 0.005);
        L_L_F_P_Legs.add(lflPorchFrontMiddleVshapeLeg);

    }

    let connectorDis = 2
    if((const_var.leanLegstype == "ladder" || const_var.leanLegstype == "zigzag")&& params.lean_p_h >= 6){
    for (let i = 0;i<((params.lean_p_h) - 1); i = i+connectorDis) {

        for (let e = (params.p_w/-2)- (params.lean_p_w / EqiDis ), j = (Math.round(params.p_w / 5) + 6); e > (params.p_w/-2)-params.lean_p_w-1; e = e - (params.lean_p_w / EqiDis ), j+=1) {
                
          if (const_var.leanLegstype == "ladder"){
            const legConnector = const_var.b_t_M_L.getObjectByName("legConnector").clone();
            legConnector.name = "legConnectorF"+ j + 'x' + i;
            legConnector.material = legConnector.material.clone();
            legConnector.scale.set(0.5,0.2,0.3);
            legConnector.rotation.y = Math.PI/2

            if(e < (params.p_w/-2)-params.lean_p_w+1.5){
             e = (params.p_w/-2)-params.lean_p_w+0.4;
             legConnector.rotation.y = Math.PI/4
            }

            legConnector.position.set(e,i+0.075,(params.lean_p_w)+(params.p_d/2)- 0.35);
            legConnector.visible =  const_var.leanLegstype == "ladder"
            L_L_F_P_Legs.add(legConnector);
             const_var.legsForCut["frontLean"][legConnector.name] = legConnector;
          }

          if (const_var.leanLegstype == "zigzag") {
                const topZigZagLegConnectorF = const_var.b_t_M_L.getObjectByName("zigZagConnector").clone();
                topZigZagLegConnectorF.name = "topZigZagLegConnectorF"+ j + 'x' + i;
                topZigZagLegConnectorF.material = topZigZagLegConnectorF.material.clone();
                topZigZagLegConnectorF.scale.set(1.35,0.2,0.3);
                topZigZagLegConnectorF.position.set(e,i+0.6,(params.lean_p_w)+(params.p_d/2)- 0.55);
                topZigZagLegConnectorF.rotation.set(Math.PI/3.4,Math.PI/2,0)
                if(e < (params.p_w/-2)-params.lean_p_w+1.5){
                    topZigZagLegConnectorF.rotation.set(0,Math.PI/4,Math.PI/3.4)
                    topZigZagLegConnectorF.position.set(e+0.5,i+0.6,(params.lean_p_w)+(params.p_d/2)- 0.55);
                }
                L_L_F_P_Legs.add(topZigZagLegConnectorF);
                const_var.legsForCut["frontLean"][topZigZagLegConnectorF.name] = topZigZagLegConnectorF;

                const bottomZigZagLegConnectorF = const_var.b_t_M_L.getObjectByName("zigZagConnector").clone();
                bottomZigZagLegConnectorF.name = "bottomZigZagLegConnectorF"+ j + 'x' + i;
                bottomZigZagLegConnectorF.material = bottomZigZagLegConnectorF.material.clone();
                bottomZigZagLegConnectorF.scale.set(1.4,0.2,0.3);
                bottomZigZagLegConnectorF.position.set(e,i+1.6,(params.lean_p_w)+(params.p_d/2)- 0.55);
                bottomZigZagLegConnectorF.rotation.set(Math.PI/-3.4,Math.PI/2,0)
                if(e < (params.p_w/-2)-params.lean_p_w+1.5){
                    bottomZigZagLegConnectorF.rotation.set(0,Math.PI/4,Math.PI/-3.4)
                    bottomZigZagLegConnectorF.position.set(e+0.5,i+1.6,(params.lean_p_w)+(params.p_d/2)- 0.55);
                }
                if (i < (params.lean_p_h) - 2) {
                    L_L_F_P_Legs.add(bottomZigZagLegConnectorF);	  
                    const_var.legsForCut["frontLean"][bottomZigZagLegConnectorF.name] = bottomZigZagLegConnectorF;
                }
                if (i == 0){
                    const leftBaseRailLegConnector = const_var.b_t_M_L.getObjectByName("legConnector").clone();
                    leftBaseRailLegConnector.name = `${"frontLean"}${"BaseRaillegConnectorF"}${j}${'x'}${i}`;
                    leftBaseRailLegConnector.material = leftBaseRailLegConnector.material.clone();
                    leftBaseRailLegConnector.rotation.y = Math.PI/2;
                    leftBaseRailLegConnector.scale.set(0.97,0.2,0.3);
                    if(e < (params.p_w/-2)-params.lean_p_w+1.5) {
                        e = (params.p_w/-2)-params.lean_p_w+0.4;
                        leftBaseRailLegConnector.rotation.y = Math.PI/4
                    }
                    leftBaseRailLegConnector.position.set(e,i+0.075,(params.lean_p_w)+(params.p_d/2)- 0.55);;
                    L_L_F_P_Legs.add(leftBaseRailLegConnector);
                    const_var.legsForCut["frontLean"][leftBaseRailLegConnector.name] = leftBaseRailLegConnector;
                }
          }

        }

        for (let e = (params.p_d / 2 - 0.12)+ (params.lean_p_w / EqiDis ), j = Math.round(params.p_d / 4 + 1); e < (params.p_d / 2 - 0.12)+params.lean_p_w-1; e = e + (params.lean_p_w / EqiDis ), j++) {
                
          if (const_var.leanLegstype == "ladder"){
            const legConnector = const_var.b_t_M_L.getObjectByName("legConnector").clone();
            legConnector.name = "legConnectorL"+ j + 'x' + i;
            legConnector.material = legConnector.material.clone();
            legConnector.scale.set(0.5,0.2,0.3);
            legConnector.position.set((params.p_w /-2)-(params.lean_p_w)+0.35,i+0.075,e); 
            legConnector.visible =  const_var.leanLegstype == "ladder"
            L_L_F_P_Legs.add(legConnector);
            const_var.legsForCut["leftLean"][legConnector.name] = legConnector;
          } 

          if (const_var.leanLegstype == "zigzag" && params.lean_p_e_l) {
                  const leftTopZigZagConnectorL = const_var.b_t_M_L.getObjectByName("zigZagConnector").clone();
                  leftTopZigZagConnectorL.name = "topZigZagLegConnectorL"+ j + 'x' + i;
                  leftTopZigZagConnectorL.material = leftTopZigZagConnectorL.material.clone();
                  leftTopZigZagConnectorL.scale.set(1.35,0.2,0.3);
                  leftTopZigZagConnectorL.position.set((params.p_w /-2)-(params.lean_p_w)+0.55,i+0.6,e);
                  leftTopZigZagConnectorL.rotation.z = Math.PI/3.4
                  L_L_F_P_Legs.add(leftTopZigZagConnectorL);
                  const_var.legsForCut["leftLean"][leftTopZigZagConnectorL.name] = leftTopZigZagConnectorL;
  
                  const leftBottomZigZagConnectorL = const_var.b_t_M_L.getObjectByName("zigZagConnector").clone();
                  leftBottomZigZagConnectorL.name = "bottomZigZagLegConnectorL"+ j + 'x' + i;
                  leftBottomZigZagConnectorL.material = leftBottomZigZagConnectorL.material.clone();
                  leftBottomZigZagConnectorL.scale.set(1.4,0.2,0.3);
                  leftBottomZigZagConnectorL.position.set((params.p_w /-2)-(params.lean_p_w)+0.55,i+1.6,e);
                  leftBottomZigZagConnectorL.rotation.z = Math.PI/-3.4
                  if (i < (params.lean_p_h) - 2) {
                      L_L_F_P_Legs.add(leftBottomZigZagConnectorL);	  
                      const_var.legsForCut["leftLean"][leftBottomZigZagConnectorL.name] = leftBottomZigZagConnectorL;
                   }

                  if (i == 0) {
                    const leftBaseRailLegConnector = const_var.b_t_M_L.getObjectByName("legConnector").clone();
                    leftBaseRailLegConnector.name = `${"leftLeanBaseRaillegConnectorL"}${j}${'x'}${i}`;
                    leftBaseRailLegConnector.material = leftBaseRailLegConnector.material.clone();
                    leftBaseRailLegConnector.scale.set(0.97,0.2,0.3);
                    leftBaseRailLegConnector.position.set((params.p_w /-2)-(params.lean_p_w)+0.55,i+0.075,e);
                    L_L_F_P_Legs.add(leftBaseRailLegConnector);
                    const_var.legsForCut["leftLean"][leftBaseRailLegConnector.name] = leftBaseRailLegConnector;
                 }
          }


        }
        
    }
    }
/*
    if( params.p_e_l && params.trussType == "CTCT"){
        for (let i = (params.lean_p_h/2);i<params.lean_p_h; i = i+connectorDis) {
    
            for (let e = (params.p_w/-2)- (params.lean_p_w / EqiDis ); e > (params.p_w/-2)-params.lean_p_w-1; e = e - (params.lean_p_w / EqiDis )) {
    
                const vShapeLegConnectorL = const_var.b_t_M_L.getObjectByName("legConnector").clone();
                vShapeLegConnectorL.name = "vShapeLegConnectorL"+e;
                vShapeLegConnectorL.scale.set(0.5,0.2,0.3);
                vShapeLegConnectorL.rotation.y = Math.PI/2
                if(e < (params.p_w/-2)-params.lean_p_w+1.5){
                 e = (params.p_w/-2)-params.lean_p_w+0.35;
                 vShapeLegConnectorL.rotation.y = Math.PI/4
                }
                vShapeLegConnectorL.position.set(e,i,(params.lean_p_w)+(params.p_d/2)-0.35);
                vShapeLegConnectorL.visible =  const_var.legstype == "ladder"
                vShapeLegConnectorL.position.z = (params.lean_p_w)+(params.p_d/2)-(((i*0.15)-(params.lean_p_h*0.005*i))/2)
                vShapeLegConnectorL.scale.x = (i*0.15) -(params.lean_p_h*0.006*i)
                vShapeLegConnectorL.visible = params.p_e_l
                L_L_F_P_Legs.add(vShapeLegConnectorL);
            }
    
            for (let e = (params.p_d / 2 - 0.12)+ (params.lean_p_w / EqiDis ); e < (params.p_d / 2 - 0.12)+params.lean_p_w-1; e = e + (params.lean_p_w / EqiDis )) {
    
                const vShapeLegConnectorL = const_var.b_t_M_L.getObjectByName("legConnector").clone();
                vShapeLegConnectorL.name = "vShapeLegConnectorL"+e;
                vShapeLegConnectorL.scale.set(0.5,0.2,0.3);
                vShapeLegConnectorL.position.set((params.p_w /-2)-(params.lean_p_w),i,e);
                vShapeLegConnectorL.visible =  const_var.legstype == "ladder"
                vShapeLegConnectorL.position.x = (params.p_w /-2)-(params.lean_p_w)+(((i*0.15)-(params.lean_p_h*0.005*i))/2)
                vShapeLegConnectorL.scale.x = (i*0.15) -(params.lean_p_h*0.006*i)
                vShapeLegConnectorL.visible = params.p_e_l
                L_L_F_P_Legs.add(vShapeLegConnectorL);
            }
        }
    }

*/

    //Right FrontLean-to porches Legs

    var disFor2Legs = 0.20;
    var disForVShapLegs = 0.5;
    var hightFor2Legs = params.leanR_p_h;
    var hightForVShapLegs = params.leanR_p_h + (params.b_l_t_r_pR*0.08);

    if (const_var.leanRLegstype == "zigzag") {
        disFor2Legs = 0.9875;
        hightFor2Legs =(params.p_r_s == 1) ? (params.leanR_p_h + params.b_l_t_r_pR/35 + - 0.08) : (params.leanR_p_h + params.b_l_t_r_pR/20 - 0.08);
    }
    if (const_var.leanRLegstype == "ladder") {
        disFor2Legs = 0.60;
        hightFor2Legs =(params.p_r_s == 1) ? (params.leanR_p_h + params.b_l_t_r_pR/35 + - 0.08) : (params.leanR_p_h + params.b_l_t_r_pR/20 - 0.08);
    }
    if (const_var.leanRLegstype == "double") {
        disFor2Legs = 0.25+0.09;
        hightFor2Legs = (params.p_r_s == 1) ? (params.leanR_p_h + params.b_l_t_r_pR/35 + - 0.08) : (params.leanR_p_h + params.b_l_t_r_pR/20 - 0.08);
    }

    var EqiDis;
    if(params.fourth_center_cost == true){
        if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
        {
            EqiDis = (params.oncenter_val_with_action!='')?((params.leanR_p_w)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.leanR_p_w)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0)
        }
    } else {
        if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
        {
            EqiDis = (params.oncenter_val_with_action!='')?((params.leanR_p_w)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.leanR_p_w)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0)    
        }
    }

    if (const_var.R_F_L_P.getObjectByName("rflPorchCornerLeg")!=undefined) {
        const rflPorchCornerLeg = const_var.R_F_L_P.getObjectByName("rflPorchCornerLeg").clone();
        rflPorchCornerLeg.name = "rflPorchCornerLeg";
        rflPorchCornerLeg.material = rflPorchCornerLeg.material.clone();
        rflPorchCornerLeg.scale.set(0.5,(params.p_r_s=="1")? params.leanR_p_h-0.13 :params.leanR_p_h, 1);
        rflPorchCornerLeg.position.set(((params.p_w/2)+params.leanR_p_w) - 0.16,(params.p_r_s=="1") ? params.leanR_p_h / 2-0.1 : params.leanR_p_h / 2,params.p_d / 2 - 0.16+params.leanR_p_w);
        rflPorchCornerLeg.visible = params.add_right_front_lean_porch;
        rflPorchCornerLeg.visible = true;
        rflPorchCornerLeg.rotation.y=-Math.PI/4;
        R_L_F_P_Legs.add(rflPorchCornerLeg);
        if (params.add_right_front_lean_porch) rightlegsCount++;
        // const_var.legsForCut[rflPorchCornerLeg.name] = rflPorchCornerLeg;
    }

    if(params.leanR_p_e_l == true){
    if (const_var.R_F_L_P.getObjectByName("rflPorchCornerLegDouble")==undefined) {
        const rflPorchCornerLegDouble = const_var.R_F_L_P.getObjectByName("rflPorchCornerLeg").clone();
        rflPorchCornerLegDouble.name = "rflPorchCornerLegDouble";
        rflPorchCornerLegDouble.material = rflPorchCornerLegDouble.material.clone();
        rflPorchCornerLegDouble.scale.set(0.5,(params.p_r_s=="1")? params.leanR_p_h-0.13 :params.leanR_p_h, 1);
        rflPorchCornerLegDouble.position.set(((params.p_w/2)+params.leanR_p_w) - disFor2Legs,(params.p_r_s=="1") ? hightFor2Legs / 2-0.1 : hightFor2Legs / 2,params.p_d / 2 - disFor2Legs+params.leanR_p_w);
        if (const_var.leanLegstype == "zigzag") {
            rflPorchCornerLegDouble.position.set(((params.p_w/2)+params.leanR_p_w) - disFor2Legs+0.07,(params.p_r_s=="1") ? hightFor2Legs / 2-0.1 : hightFor2Legs / 2,params.p_d / 2 - disFor2Legs+params.leanR_p_w + 0.07);
        }
        rflPorchCornerLegDouble.visible = params.add_right_front_lean_porch;
        // rflPorchCornerLegDouble.visible = params.leanR_p_e_l  && params.trussType != "CTCT";
        rflPorchCornerLegDouble.visible = params.leanR_p_e_l;
        rflPorchCornerLegDouble.rotation.y=-Math.PI/4;
        R_L_F_P_Legs.add(rflPorchCornerLegDouble);
        // const_var.legsForCut[rflPorchCornerLegDouble.name] = rflPorchCornerLegDouble;
    }
    }

    if (const_var.R_F_L_P.getObjectByName("rflPorchCornerVshapeLeg")==undefined) {
        const rflPorchCornerVshapeLeg = const_var.R_F_L_P.getObjectByName("rflPorchCornerLeg").clone();
        rflPorchCornerVshapeLeg.name = "rflPorchCornerVshapeLeg";
        rflPorchCornerVshapeLeg.scale.set(0.5,(params.p_r_s=="1")? hightForVShapLegs-0.1 :hightForVShapLegs, 1);
        rflPorchCornerVshapeLeg.position.set(((params.p_w/2)+params.leanR_p_w) - disForVShapLegs,(params.p_r_s=="1") ? hightForVShapLegs / 2-0.1 : hightForVShapLegs / 2,params.p_d / 2 - disForVShapLegs+params.leanR_p_w);
        // rflPorchCornerVshapeLeg.visible = params.add_left_front_lean_porch;
        // rflPorchCornerVshapeLeg.visible = params.p_e_l  && params.trussType == "CTCT";
        rflPorchCornerVshapeLeg.visible = false;
        rflPorchCornerVshapeLeg.rotation.y=-Math.PI/4;
        rflPorchCornerVshapeLeg.rotation.z = 0.1325 - (params.leanR_p_h * 0.005);					
        R_L_F_P_Legs.add(rflPorchCornerVshapeLeg);
    }

    if (const_var.R_F_L_P.getObjectByName("rflPorchRightBaseRail")!=undefined) {
        const rflPorchRightBaseRail = const_var.R_F_L_P.getObjectByName("rflPorchRightBaseRail").clone();
        rflPorchRightBaseRail.name = "rflPorchRightBaseRail";
        rflPorchRightBaseRail.material = rflPorchRightBaseRail.material.clone();
	    rflPorchRightBaseRail.scale.set(0.5,params.leanR_p_w - 0.02,0.7);
	    rflPorchRightBaseRail.position.set(params.p_w/2-0.08+params.leanR_p_w,0.08,params.p_d/2+(params.leanR_p_w/2));
	    rflPorchRightBaseRail.rotation.x=Math.PI/-2;
	    rflPorchRightBaseRail.visible = params.add_right_front_lean_porch;
	    rflPorchRightBaseRail.visible = true;
        R_L_F_P_Legs.add(rflPorchRightBaseRail);
        const_var.legsForCut["rightLean"][rflPorchRightBaseRail.name] = rflPorchRightBaseRail;
    }

    if (const_var.R_F_L_P.getObjectByName("rflPorchRightDoubleBaseRail")==undefined) {
        const rflPorchRightBaseRailDouble = const_var.R_F_L_P.getObjectByName("rflPorchRightBaseRail").clone();
        rflPorchRightBaseRailDouble.name = "rflPorchRightDoubleBaseRail";
        rflPorchRightBaseRailDouble.material = rflPorchRightBaseRailDouble.material.clone();
	    rflPorchRightBaseRailDouble.scale.set(0.5,params.leanR_p_w - 0.02,0.7);
	    rflPorchRightBaseRailDouble.position.set(params.p_w/2-disFor2Legs+params.leanR_p_w,0.08,params.p_d/2+(params.leanR_p_w/2));
	    rflPorchRightBaseRailDouble.rotation.x=Math.PI/-2;
	    // rflPorchRightBaseRailDouble.visible = params.p_e_l  && params.trussType != "CTCT";
	    rflPorchRightBaseRailDouble.visible = params.leanR_p_e_l;
        R_L_F_P_Legs.add(rflPorchRightBaseRailDouble);
        const_var.legsForCut["rightLean"][rflPorchRightBaseRailDouble.name] = rflPorchRightBaseRailDouble;
    }

    if (const_var.R_F_L_P.getObjectByName("rflPorchFrontBaseRail")!=undefined) {
        const rflPorchFrontBaseRail = const_var.R_F_L_P.getObjectByName("rflPorchFrontBaseRail").clone();
	    rflPorchFrontBaseRail.name = "rflPorchFrontBaseRail";
        rflPorchFrontBaseRail.material = rflPorchFrontBaseRail.material.clone();
	    rflPorchFrontBaseRail.scale.set(0.5,params.leanR_p_w - 0.02,0.7);
	    rflPorchFrontBaseRail.position.set(params.p_w/2-0.08+(params.leanR_p_w/2),0.08,params.p_d/2+params.leanR_p_w- 0.12);
	    rflPorchFrontBaseRail.rotation.x=Math.PI/-2;
	    rflPorchFrontBaseRail.rotation.z=Math.PI/2;
	    rflPorchFrontBaseRail.visible = params.add_right_front_lean_porch;
	    rflPorchFrontBaseRail.visible = true;
        R_L_F_P_Legs.add(rflPorchFrontBaseRail);
        const_var.legsForCut["frontLean"][rflPorchFrontBaseRail.name] = rflPorchFrontBaseRail;
    }

    if (const_var.R_F_L_P.getObjectByName("rflPorchFrontDoubleBaseRail")==undefined) {
        const rflPorchFrontBaseRailDouble = const_var.R_F_L_P.getObjectByName("rflPorchFrontBaseRail").clone();
	    rflPorchFrontBaseRailDouble.name = "rflPorchFrontDoubleBaseRail";
        rflPorchFrontBaseRailDouble.material = rflPorchFrontBaseRailDouble.material.clone();
	    rflPorchFrontBaseRailDouble.scale.set(0.5,params.leanR_p_w - 0.02,0.7);
	    rflPorchFrontBaseRailDouble.position.set(params.p_w/2-0.08+(params.leanR_p_w/2),0.08,params.p_d/2+params.leanR_p_w- disFor2Legs);
	    rflPorchFrontBaseRailDouble.rotation.x=Math.PI/-2;
	    rflPorchFrontBaseRailDouble.rotation.z=Math.PI/2;
	    // rflPorchFrontBaseRailDouble.visible = params.leanF_p_e_l  && params.trussType != "CTCT";
	    rflPorchFrontBaseRailDouble.visible = params.leanR_p_e_l;
        R_L_F_P_Legs.add(rflPorchFrontBaseRailDouble);
        const_var.legsForCut["frontLean"][rflPorchFrontBaseRailDouble.name] = rflPorchFrontBaseRailDouble;
    }


    for(let i = (params.leanR_p_w/EqiDis), j = (Math.round(params.p_w / 4) + 1), k = Math.round(params.p_d / 4 + 1);i<(params.leanR_p_w - 2);i = i+(params.leanR_p_w/EqiDis),j++, k++){
        
        const rflPorchRightMiddleLeg = const_var.R_F_L_P.getObjectByName("rflPorchRightLeg").clone();
        rflPorchRightMiddleLeg.name = "PorchRightMiddleLeg"+ k + "x";
        rflPorchRightMiddleLeg.material = rflPorchRightMiddleLeg.material.clone();
		rflPorchRightMiddleLeg.scale.set(0.5,(params.p_r_s=="1")? params.leanR_p_h-0.1 :params.leanR_p_h, 1);
		// rflPorchRightMiddleLeg.position.set(-((params.p_w/2)+params.leanR_p_w) + 0.08,(params.p_r_s=="1") ? params.leanR_p_h / 2-0.1 : params.leanR_p_h / 2,params.p_d / 2 - 0.12+(params.leanR_p_w/2));
		rflPorchRightMiddleLeg.position.set(((params.p_w/2)+params.leanR_p_w) - 0.08,(params.p_r_s=="1") ? params.leanR_p_h / 2-0.05 : params.leanR_p_h / 2,params.p_d / 2 - 0.12+i);
		// rflPorchRightMiddleLeg.visible = params.add_left_front_lean_porch;
		rflPorchRightMiddleLeg.visible = true;
        R_L_F_P_Legs.add(rflPorchRightMiddleLeg);
        if (params.add_right_front_lean_porch) rightlegsCount++;
        const_var.legsForCut["rightLean"][rflPorchRightMiddleLeg.name] = rflPorchRightMiddleLeg;
        const_var.legsForCutFee["rightLean"][rflPorchRightMiddleLeg.name] = rflPorchRightMiddleLeg;

        if(params.leanR_p_e_l == true){
        const rflPorchRightMiddleLegDouble = const_var.R_F_L_P.getObjectByName("rflPorchRightLeg").clone();
        rflPorchRightMiddleLegDouble.name = "PorchRightMiddleDoubleLeg"+ k + "x";
        rflPorchRightMiddleLegDouble.material = rflPorchRightMiddleLegDouble.material.clone();
		rflPorchRightMiddleLegDouble.scale.set(0.5,(params.p_r_s=="1")? params.leanR_p_h-0.1 :params.leanR_p_h, 1);
		// rflPorchRightMiddleLegDouble.position.set(-((params.p_w/2)+params.leanR_p_w) + 0.08,(params.p_r_s=="1") ? params.leanR_p_h / 2-0.1 : params.leanR_p_h / 2,params.p_d / 2 - 0.12+(params.leanR_p_w/2));
		rflPorchRightMiddleLegDouble.position.set(((params.p_w/2)+params.leanR_p_w) - disFor2Legs,(params.p_r_s=="1") ? hightFor2Legs / 2-0.05 : hightFor2Legs / 2,params.p_d / 2 - 0.12+i);
		// rflPorchRightMiddleLegDouble.visible =  params.leanR_p_e_l  && params.trussType != "CTCT";
		rflPorchRightMiddleLegDouble.visible =  params.leanR_p_e_l;
        R_L_F_P_Legs.add(rflPorchRightMiddleLegDouble);
        const_var.legsForCut["rightLean"][rflPorchRightMiddleLegDouble.name] = rflPorchRightMiddleLegDouble;
        }

        const rflPorchRightMiddleVshapeLeg = const_var.R_F_L_P.getObjectByName("rflPorchRightLeg").clone();
        rflPorchRightMiddleVshapeLeg.name = "rflPorchRightMiddleVshapeLeg"+i;
		rflPorchRightMiddleVshapeLeg.scale.set(0.5,(params.p_r_s=="1")? hightForVShapLegs-0.1 :hightForVShapLegs, 1);
		// rflPorchRightMiddleVshapeLeg.position.set(-((params.p_w/2)+params.leanR_p_w) + 0.08,(params.p_r_s=="1") ? params.leanR_p_h / 2-0.1 : params.leanR_p_h / 2,params.p_d / 2 - 0.12+(params.leanR_p_w/2));
		rflPorchRightMiddleVshapeLeg.position.set(((params.p_w/2)+params.leanR_p_w) - disForVShapLegs,(params.p_r_s=="1") ? hightForVShapLegs / 2-0.1 : hightForVShapLegs / 2,params.p_d / 2 - 0.12+i);
		rflPorchRightMiddleVshapeLeg.visible =  params.leanR_p_e_l  && params.trussType == "CTCT";
		rflPorchRightMiddleVshapeLeg.visible = false;
        rflPorchRightMiddleVshapeLeg.rotation.z = 0.1325 - (params.leanR_p_h * 0.005);					
        R_L_F_P_Legs.add(rflPorchRightMiddleVshapeLeg);

        const rflPorchFrontMiddleLeg = const_var.R_F_L_P.getObjectByName("rflPorchFrontLeg").clone();
        rflPorchFrontMiddleLeg.name = "PorchFrontMiddleLeg"+ j + "x";
        rflPorchFrontMiddleLeg.material = rflPorchFrontMiddleLeg.material.clone();
		rflPorchFrontMiddleLeg.scale.set(0.5, (params.p_r_s=="1")? params.leanR_p_h-0.1 :params.leanR_p_h, 1);
		rflPorchFrontMiddleLeg.position.set(params.p_w/2+i,(params.p_r_s=="1") ? params.leanR_p_h / 2-0.05 : params.leanR_p_h / 2,params.p_d / 2 - 0.12+params.leanR_p_w);
		rflPorchFrontMiddleLeg.rotation.y = Math.PI/2
		// rflPorchFrontMiddleLeg.visible = params.add_left_front_lean_porch;
		rflPorchFrontMiddleLeg.visible = true;
        R_L_F_P_Legs.add(rflPorchFrontMiddleLeg);
        if (params.add_right_front_lean_porch)frontlegsCount++;
        const_var.legsForCut["frontLean"][rflPorchFrontMiddleLeg.name] = rflPorchFrontMiddleLeg;
        const_var.legsForCutFee["frontLean"][rflPorchFrontMiddleLeg.name] = rflPorchFrontMiddleLeg;

        if(params.leanR_p_e_l == true){
        const rflPorchFrontMiddleLegDouble = const_var.R_F_L_P.getObjectByName("rflPorchFrontLeg").clone();
        rflPorchFrontMiddleLegDouble.name = "PorchFrontMiddleDoubleLeg"+ j + "x";
        rflPorchFrontMiddleLegDouble.material = rflPorchFrontMiddleLegDouble.material.clone();
		rflPorchFrontMiddleLegDouble.scale.set(0.5, (params.p_r_s=="1")? params.leanR_p_h-0.1 :params.leanR_p_h, 1);
		rflPorchFrontMiddleLegDouble.position.set(params.p_w/2+i,(params.p_r_s=="1") ? hightFor2Legs / 2-0.05 : hightFor2Legs / 2,params.p_d / 2 - disFor2Legs+params.leanR_p_w);
		rflPorchFrontMiddleLegDouble.rotation.y = Math.PI/2
		// rflPorchFrontMiddleLegDouble.visible = params.leanF_p_e_l  && params.trussType != "CTCT";
		rflPorchFrontMiddleLegDouble.visible = params.leanR_p_e_l;
        R_L_F_P_Legs.add(rflPorchFrontMiddleLegDouble);
        const_var.legsForCut["frontLean"][rflPorchFrontMiddleLegDouble.name] = rflPorchFrontMiddleLegDouble;
        }

        const rflPorchFrontMiddleVshapeLeg = const_var.R_F_L_P.getObjectByName("rflPorchFrontLeg").clone();
        rflPorchFrontMiddleVshapeLeg.name = "rflPorchFrontMiddleVshapeLeg"+i;
		rflPorchFrontMiddleVshapeLeg.scale.set(0.5, (params.p_r_s=="1")? hightForVShapLegs-0.027 :hightForVShapLegs, 1);
		rflPorchFrontMiddleVshapeLeg.position.set(params.p_w/2+i,(params.p_r_s=="1") ? hightForVShapLegs / 2-0.027 : hightForVShapLegs / 2,params.p_d / 2 - disForVShapLegs+params.leanR_p_w);
		rflPorchFrontMiddleVshapeLeg.rotation.y = Math.PI/2
		// rflPorchFrontMiddleVshapeLeg.visible = params.leanF_p_e_l  && params.trussType == "CTCT";
		// rflPorchFrontMiddleVshapeLeg.visible = params.leanF_p_e_l;
		rflPorchFrontMiddleVshapeLeg.visible = false;
        rflPorchFrontMiddleVshapeLeg.rotation.z = -0.1325 + (params.leanR_p_h * 0.005);				
        R_L_F_P_Legs.add(rflPorchFrontMiddleVshapeLeg);

    }

    if((const_var.leanRLegstype == "ladder" || const_var.leanRLegstype == "zigzag") && params.leanR_p_h >= 6 && params.add_right_lean ==true){
    for (let i = 0;i<((params.leanR_p_h) - 1); i = i+connectorDis) {

        for (let e = (params.p_w/2)+ (params.leanR_p_w / EqiDis ), j = (Math.round(params.p_w / 5) + 1); e < ((params.p_w/2)+params.leanR_p_w)+1; e = e + (params.leanR_p_w / EqiDis ), j+=1) {
          if (const_var.leanRLegstype == "ladder"){      
            const legConnectorR = const_var.b_t_M_L.getObjectByName("legConnector").clone();
            legConnectorR.name = "legConnectorF"+ j + 'x' + i;
            legConnectorR.material = legConnectorR.material.clone();
            legConnectorR.scale.set(0.5,0.2,0.3);
            legConnectorR.rotation.y = Math.PI/2

            if(e > ((params.p_w/2)+params.leanR_p_w)-1.5){
             e = ((params.p_w/2)+params.leanR_p_w)-0.35;
             legConnectorR.rotation.y = -Math.PI/4
            }

            legConnectorR.position.set(e,i+0.075,(params.leanR_p_w)+(params.p_d/2)- 0.35);
            legConnectorR.visible =  const_var.leanRLegstype == "ladder"
            R_L_F_P_Legs.add(legConnectorR);
            const_var.legsForCut["frontLean"][legConnectorR.name] = legConnectorR;
          }

          if (const_var.leanRLegstype == "zigzag" && params.leanR_p_e_l) {
            const topZigZagLegConnectorF = const_var.b_t_M_L.getObjectByName("zigZagConnector").clone();
            topZigZagLegConnectorF.name = "topZigZagLegConnectorF"+ j + 'x' + i;
            topZigZagLegConnectorF.material = topZigZagLegConnectorF.material.clone();
            topZigZagLegConnectorF.scale.set(1.35,0.2,0.3);
            topZigZagLegConnectorF.position.set(e,i+0.6,(params.leanR_p_w)+(params.p_d/2)- 0.55);
            topZigZagLegConnectorF.rotation.set(Math.PI/3.4,Math.PI/2,0)
            if(e > ((params.p_w/2)+params.leanR_p_w)-1.5){
                topZigZagLegConnectorF.rotation.set(0,Math.PI/-4,Math.PI/3.4)
                topZigZagLegConnectorF.position.set(e-0.5,i+0.6,(params.leanR_p_w)+(params.p_d/2)- 0.55);
            }
            R_L_F_P_Legs.add(topZigZagLegConnectorF);
            const_var.legsForCut["frontLean"][topZigZagLegConnectorF.name] = topZigZagLegConnectorF;

            const bottomZigZagLegConnectorF = const_var.b_t_M_L.getObjectByName("zigZagConnector").clone();
            bottomZigZagLegConnectorF.name = "bottomZigZagLegConnectorF"+ j + 'x' + i;
            bottomZigZagLegConnectorF.material = bottomZigZagLegConnectorF.material.clone();
            bottomZigZagLegConnectorF.scale.set(1.4,0.2,0.3);
            bottomZigZagLegConnectorF.position.set(e,i+1.6,(params.leanR_p_w)+(params.p_d/2)- 0.55);
            bottomZigZagLegConnectorF.rotation.set(Math.PI/-3.4,Math.PI/2,0)
            if(e > ((params.p_w/2)+params.leanR_p_w)-1.5){
                bottomZigZagLegConnectorF.rotation.set(0,Math.PI/-4,Math.PI/-3.4)
                bottomZigZagLegConnectorF.position.set(e-0.5,i+1.6,(params.leanR_p_w)+(params.p_d/2)- 0.55);
            }
            if (i < (params.leanR_p_h) - 2) {
                R_L_F_P_Legs.add(bottomZigZagLegConnectorF);	  
                const_var.legsForCut["frontLean"][bottomZigZagLegConnectorF.name] = bottomZigZagLegConnectorF;
            }
            if (i == 0) {
                const leftBaseRailLegConnector = const_var.b_t_M_L.getObjectByName("legConnector").clone();
                leftBaseRailLegConnector.name = `${"frontLeanBaseRaillegConnectorF"}${j}${'x'}${i}`;
                leftBaseRailLegConnector.material = leftBaseRailLegConnector.material.clone();
                leftBaseRailLegConnector.scale.set(0.97,0.2,0.3);
                leftBaseRailLegConnector.rotation.y = Math.PI/2
                let cornerBaseReailPosition = e;
                if(e > ((params.p_w/2)+params.leanR_p_w)-1.5) {
                    // e = (params.p_w/-2)-params.leanR_p_w+0.4;
                    cornerBaseReailPosition = (params.p_w/2)+params.leanR_p_w-0.4;
                    leftBaseRailLegConnector.rotation.y = Math.PI/-4
                }
                leftBaseRailLegConnector.position.set(cornerBaseReailPosition,i+0.075,(params.leanR_p_w)+(params.p_d/2)- 0.55);
                R_L_F_P_Legs.add(leftBaseRailLegConnector);
                const_var.legsForCut["frontLean"][leftBaseRailLegConnector.name] = leftBaseRailLegConnector;
             }
          }

        }

        for (let e = (params.p_d / 2 - 0.12)+ (params.leanR_p_w / EqiDis ), j = Math.round(params.p_d / 4 + 1); e < (params.p_d / 2 - 0.12)+params.leanR_p_w-1; e = e + (params.leanR_p_w / EqiDis ), j++) {
                

          if (const_var.leanRLegstype == "ladder"){
            const legConnectorR = const_var.b_t_M_L.getObjectByName("legConnector").clone();
            legConnectorR.name = "legConnectorR"+ j + 'x' + i;
            legConnectorR.material = legConnectorR.material.clone();
            legConnectorR.scale.set(0.5,0.2,0.3);
            legConnectorR.position.set((params.p_w /2)+(params.leanR_p_w)-0.35,i+0.075,e); 
            legConnectorR.visible =  const_var.leanRLegstype == "ladder"
            R_L_F_P_Legs.add(legConnectorR);
            const_var.legsForCut["rightLean"][legConnectorR.name] = legConnectorR;
          }

          if (const_var.leanRLegstype == "zigzag") {
            const pTopZigZagLegConnectorR = const_var.b_t_M_L.getObjectByName("zigZagConnector").clone();
            pTopZigZagLegConnectorR.name = "topZigZagLegConnectorR"+ j + 'x' + i;
            pTopZigZagLegConnectorR.material = pTopZigZagLegConnectorR.material.clone();
            pTopZigZagLegConnectorR.scale.set(1.35,0.2,0.3);
            pTopZigZagLegConnectorR.position.set((params.p_w /2)+(params.leanR_p_w)- 0.55,i+0.6,e);
            pTopZigZagLegConnectorR.rotation.z = Math.PI/-3.4
            R_L_F_P_Legs.add(pTopZigZagLegConnectorR);
            const_var.legsForCut["rightLean"][pTopZigZagLegConnectorR.name] = pTopZigZagLegConnectorR;

            const pBottomZigZagLegConnectorR = const_var.b_t_M_L.getObjectByName("zigZagConnector").clone();
            pBottomZigZagLegConnectorR.name = "bottomZigZagLegConnectorR"+ j + 'x' + i;
            pBottomZigZagLegConnectorR.material = pBottomZigZagLegConnectorR.material.clone();
            pBottomZigZagLegConnectorR.scale.set(1.4,0.2,0.3);
            pBottomZigZagLegConnectorR.position.set((params.p_w /2)+(params.leanR_p_w)- 0.55,i+1.6,e);
            pBottomZigZagLegConnectorR.rotation.z = Math.PI/3.4
            if (i < (params.leanR_p_h) - 2) {
                R_L_F_P_Legs.add(pBottomZigZagLegConnectorR);	  
                const_var.legsForCut["rightLean"][pBottomZigZagLegConnectorR.name] = pBottomZigZagLegConnectorR;
            }
            if (i == 0) {
                const leftBaseRailLegConnector = const_var.b_t_M_L.getObjectByName("legConnector").clone();
                leftBaseRailLegConnector.name = `${"rightLeanBaseRaillegConnectorR"}${j}${'x'}${i}`;
                leftBaseRailLegConnector.material = leftBaseRailLegConnector.material.clone();
                leftBaseRailLegConnector.scale.set(0.97,0.2,0.3);
                leftBaseRailLegConnector.position.set((params.p_w /2)+(params.leanR_p_w)-0.55,i+0.075,e);
                R_L_F_P_Legs.add(leftBaseRailLegConnector);
                const_var.legsForCut["rightLean"][leftBaseRailLegConnector.name] = leftBaseRailLegConnector;
             }
          }

        }
        
    }

    }
   /* 
    if( params.p_e_l && params.trussType == "CTCT"){
        for (let i = (params.leanR_p_h/2);i<params.leanR_p_h; i = i+connectorDis) {
    
            for (let e = (params.p_w/2)+ (params.leanR_p_w / EqiDis ); e < ((params.p_w/2)+params.leanR_p_w)+1; e = e + (params.leanR_p_w / EqiDis )) {
    
                const vShapeLegConnectorR = const_var.b_t_M_L.getObjectByName("legConnector").clone();
                vShapeLegConnectorR.name = "vShapeLegConnectorR"+e;
                vShapeLegConnectorR.scale.set(0.5,0.2,0.3);
                vShapeLegConnectorR.rotation.y = Math.PI/2
                if(e > ((params.p_w/2)+params.leanR_p_w)-1.5){
                 e = ((params.p_w/2)+params.leanR_p_w)-0.35;
                 vShapeLegConnectorR.rotation.y = -Math.PI/4
                }
                vShapeLegConnectorR.position.set(e,i,-(params.leanR_p_w)-(params.p_w/2)+0.35);
                vShapeLegConnectorR.visible =  const_var.legstype == "ladder"
                vShapeLegConnectorR.position.z = (params.leanR_p_w)+(params.p_d/2)-(((i*0.15)-(params.leanF_p_h*0.005*i))/2)
                vShapeLegConnectorR.scale.x = (i*0.15) -(params.leanF_p_h*0.006*i)
                vShapeLegConnectorR.visible = params.p_e_l
                R_L_F_P_Legs.add(vShapeLegConnectorR);
            }
    
            for (let e = (params.p_d / 2 - 0.12)+ (params.leanR_p_w / EqiDis ); e < (params.p_d / 2 - 0.12)+params.leanR_p_w-1; e = e + (params.leanR_p_w / EqiDis )) {
    
                const vShapeLegConnectorR = const_var.b_t_M_L.getObjectByName("legConnector").clone();
                vShapeLegConnectorR.name = "vShapeLegConnectorR"+e;
                vShapeLegConnectorR.scale.set(0.5,0.2,0.3);
                vShapeLegConnectorR.position.set((params.p_w /2)+(params.leanR_p_w),i,e);
                vShapeLegConnectorR.visible =  const_var.legstype == "ladder"
                vShapeLegConnectorR.position.x = (params.p_w /2)+(params.leanR_p_w)-(((i*0.15)-(params.leanF_p_h*0.005*i))/2)
                vShapeLegConnectorR.scale.x = (i*0.15) -(params.leanF_p_h*0.006*i)
                vShapeLegConnectorR.visible = params.p_e_l
                R_L_F_P_Legs.add(vShapeLegConnectorR);
            }
        }
    }
*/
    L_L_F_P_Legs.visible =false;
    if(params.add_left_front_lean_porch==true){
        L_L_F_P_Legs.visible = params.add_left_front_lean_porch;
    }

    R_L_F_P_Legs.visible =false;
    if(params.add_right_front_lean_porch==true){
        R_L_F_P_Legs.visible = params.add_right_front_lean_porch;
    }


    let lblPorchGroup = L_L_F_P_Legs.clone();
	lblPorchGroup.name = "L_B_L_P_Legs";
	lblPorchGroup.position.set((4+((params.p_d-19)*0.5))-((params.p_w-11)*0.5),0,(-4-((params.p_d-19)*0.5))+((params.p_w-11)*0.5));
	lblPorchGroup.rotation.y = Math.PI+(Math.PI/2)
	lblPorchGroup.visible = (params.add_left_back_lean_porch==true)?true:false;
	const_var.scene.add(lblPorchGroup);
    if (params.add_left_back_lean_porch) leftlegsCount++; // backcornerLegcount
    let PorchLeftMiddleDoubleLegCount = Math.round(params.p_d / 4 + 6)
    let PorchLeftMiddleLegCount = Math.round(params.p_d / 4 + 6);
    let PorchBackMiddleDoubleLegCount = Math.round(params.p_w / 4 + 1)
    let PorchBackMiddleLegCount = Math.round(params.p_w / 4 + 1);
    
    lblPorchGroup.children.forEach((l) => {
        if (l.name.includes("PorchLeftMiddleLeg")) {
            l.material = l.material.clone();
            l.name = "PorchBackMiddleLeg"+ PorchBackMiddleLegCount++ + "x";
            const_var.legsForCut["backLean"][l.name] = l;
            const_var.legsForCutFee["backLean"][l.name] = l;
            if (params.add_left_back_lean_porch) backlegsCount++;
        }
        else if (l.name.includes("PorchLeftMiddleDoubleLeg")) {
            l.material = l.material.clone();
            l.name = "PorchBackMiddleDoubleLeg"+ PorchBackMiddleDoubleLegCount++ + "x";
            const_var.legsForCut["backLean"][l.name] = l;
        }
        else if (l.name.includes("PorchFrontMiddleLeg")) {
            l.material = l.material.clone();
            l.name = "PorchLeftMiddleLeg"+ PorchLeftMiddleLegCount++ + "x";
            const_var.legsForCut["leftLean"][l.name] = l;
            const_var.legsForCutFee["leftLean"][l.name] = l;
            if (params.add_left_back_lean_porch) leftlegsCount++;
        }
        else if (l.name.includes("PorchFrontMiddleDoubleLeg")) {
            l.material = l.material.clone();
            l.name = "PorchLeftMiddleDoubleLeg"+ PorchLeftMiddleDoubleLegCount++ + "x";
            const_var.legsForCut["leftLean"][l.name] = l;
        }
        else if (l.name.includes("legConnectorF")) {
            l.material = l.material.clone();
            const str = l.name.match(/^\D+/g);
            let nbr = l.name.match(/\d+/g);
            if (nbr && nbr[0]) {                
                l.name = l.name.replace(str[0] + nbr[0], "legConnectorL"+ Math.round((Number(nbr[0]) - (params.p_w / 5) + (params.p_d / 5))));
            }
            const_var.legsForCut["leftLean"][l.name] = l;
        }
        else if (l.name.includes("legConnectorL")) {
            l.material = l.material.clone();
            const str = l.name.match(/^\D+/g);
            let nbr = l.name.match(/\d+/g);
            if (nbr && nbr[0]) {
                l.name = l.name.replace(str[0] + nbr[0], "legConnectorB" +  Math.round((Number(nbr[0]) - (params.p_d / 5) + (params.p_w / 5))));
            }
            const_var.legsForCut["backLean"][l.name] = l;
        }
        else if (l.name.includes("ZigZagLegConnectorF")) {
            l.material = l.material.clone();
            const str = l.name.match(/^\D+/g);
            let nbr = l.name.match(/\d+/g);
            if (nbr && nbr[0]) { 
                let name =  l.name.includes("topZigZagLegConnectorF")?  "topZigZagLegConnectorL" : "bottomZigZagLegConnectorL";     
                l.name = l.name.replace(str[0] + nbr[0], name+ Math.round((Number(nbr[0]) - (params.p_w / 5) + (params.p_d / 5))));
            }
            const_var.legsForCut["leftLean"][l.name] = l;
        }
        else if (l.name.includes("ZigZagLegConnectorL")) {
            l.material = l.material.clone();
            const str = l.name.match(/^\D+/g);
            let nbr = l.name.match(/\d+/g);
            if (nbr && nbr[0]) {
                let name =  l.name.includes("topZigZagLegConnectorL")?  "topZigZagLegConnectorB" : "bottomZigZagLegConnectorB";     
                l.name = l.name.replace(str[0] + nbr[0], name +  Math.round((Number(nbr[0]) - (params.p_d / 5) + (params.p_w / 5))));
            }
            const_var.legsForCut["backLean"][l.name] = l;
        }
        else if (l.name.includes("lflPorchleftBaseRail")) {
            l.material = l.material.clone();
            l.name = "lflPorchBackBaseRail";
            const_var.legsForCut["backLean"][l.name] = l;
        }
        else if (l.name.includes("lflPorchleftDoubleBaseRail")) {
            l.material = l.material.clone();
            l.name = "lflPorchBackDoubleBaseRail";
            const_var.legsForCut["backLean"][l.name] = l;
        }
        else if (l.name.includes("lflPorchFrontBaseRail")) {
            l.material = l.material.clone();
            l.name = "rflPorchleftBaseRail";
            const_var.legsForCut["leftLean"][l.name] = l;
        }
        else if (l.name.includes("lflPorchFrontDoubleBaseRail")) {
            l.material = l.material.clone();
            l.name = "rflPorchleftDoubleBaseRail";
            const_var.legsForCut["leftLean"][l.name] = l;
        }
    })

    let rblPorchGroup = R_L_F_P_Legs.clone();
	rblPorchGroup.name = "R_B_L_P_Legs";
	rblPorchGroup.position.set((-4-((params.p_d-19)*0.5))+((params.p_w-11)*0.5),0,(-4-((params.p_d-19)*0.5))+((params.p_w-11)*0.5));
	rblPorchGroup.rotation.y = Math.PI-(Math.PI/2)
	rblPorchGroup.visible = (params.add_right_back_lean_porch==true)?true:false;
    // rblPorchGroup.visible = true;
	const_var.scene.add(rblPorchGroup);
    if (params.add_right_back_lean_porch) rightlegsCount++; //backcornerLegcount
    // legConnectorLcount = (params.p_d / 4 + 2);
    let PorchRightMiddleDoubleLegCount = Math.round(params.p_d / 4 + 6);
    let PorchRightMiddleLegCount = Math.round(params.p_d / 4 + 6);
    PorchBackMiddleDoubleLegCount = Math.round(params.p_w / 4 + 6);
    PorchBackMiddleLegCount = Math.round(params.p_w / 4 + 6);

    rblPorchGroup.children.forEach((l) => {
        if (l.name.includes("PorchRightMiddleLeg")) {
            l.material = l.material.clone();
            l.name = "PorchBackMiddleLeg"+ PorchBackMiddleLegCount++ + "x";
            const_var.legsForCut["backLean"][l.name] = l;
            const_var.legsForCutFee["backLean"][l.name] = l;
            if (params.add_right_back_lean_porch) backlegsCount++;
        }
        else if (l.name.includes("PorchRightMiddleDoubleLeg")) {
            l.material = l.material.clone();
            l.name = "PorchBackMiddleDoubleLeg"+ PorchBackMiddleDoubleLegCount++ + "x";
            const_var.legsForCut["backLean"][l.name] = l;
        }
        else if (l.name.includes("PorchFrontMiddleLeg")) {
            l.material = l.material.clone();
            l.name = "PorchRightMiddleLeg"+ PorchRightMiddleLegCount++ + "x";
            const_var.legsForCut["rightLean"][l.name] = l;
            const_var.legsForCutFee["rightLean"][l.name] = l;
            if (params.add_right_back_lean_porch) rightlegsCount++;
        }
        else if (l.name.includes("PorchFrontMiddleDoubleLeg")) {
            l.material = l.material.clone();
            l.name = "PorchRightMiddleDoubleLeg"+ PorchRightMiddleDoubleLegCount++ + "x";
            const_var.legsForCut["rightLean"][l.name] = l;
        }
        else if (l.name.includes("legConnectorF")) {
            l.material = l.material.clone();
            const str = l.name.match(/^\D+/g);
            let nbr = l.name.match(/\d+/g);
            if (nbr && nbr[0]) {
                l.name = l.name.replace(str[0] + nbr[0], "legConnectorR"+ Math.round((Number(nbr[0]) - (params.p_w / 5) + (params.p_d / 5) + 5)));
            }
            const_var.legsForCut["rightLean"][l.name] = l;
        }
        else if (l.name.includes("legConnectorR")) {
            l.material = l.material.clone();
            const str = l.name.match(/^\D+/g);
            let nbr = l.name.match(/\d+/g);
            if (nbr && nbr[0]) l.name = l.name.replace(str[0] + nbr[0], "legConnectorB"+ Math.round((Number(nbr[0]) - (params.p_d / 5) + (params.p_w / 5) + 5)));
            const_var.legsForCut["backLean"][l.name] = l;
        }
        else if (l.name.includes("ZigZagLegConnectorF")) {
            l.material = l.material.clone();
            const str = l.name.match(/^\D+/g);
            let nbr = l.name.match(/\d+/g);
            let zigZagName= l.name.includes("topZigZagLegConnectorF") ? "topZigZagLegConnectorR" : "bottomZigZagLegConnectorR";
            if (nbr && nbr[0]) {
                l.name = l.name.replace(str[0] + nbr[0], zigZagName+ Math.round((Number(nbr[0]) - (params.p_w / 5) + (params.p_d / 5) + 5)));
            }
            const_var.legsForCut["rightLean"][l.name] = l;
        }
        else if (l.name.includes("ZigZagLegConnectorR")) {
            l.material = l.material.clone();
            const str = l.name.match(/^\D+/g);
            let nbr = l.name.match(/\d+/g);
            let zigZagName= l.name.includes("topZigZagLegConnectorR") ? "topZigZagLegConnectorB" : "bottomZigZagLegConnectorB";
            if (nbr && nbr[0]) l.name = l.name.replace(str[0] + nbr[0], zigZagName+ Math.round((Number(nbr[0]) - (params.p_d / 5) + (params.p_w / 5) + 5)));
            const_var.legsForCut["backLean"][l.name] = l;
        }
        else if (l.name.includes("rflPorchRightBaseRail")) {
            l.material = l.material.clone();
            l.name = "rflPorchBackBaseRail";
            const_var.legsForCut["backLean"][l.name] = l;
        }
        else if (l.name.includes("rflPorchRightDoubleBaseRail")) {
            l.material = l.material.clone();
            l.name = "rflPorchBackDoubleBaseRail";
            const_var.legsForCut["backLean"][l.name] = l;
        }
        else if (l.name.includes("rflPorchFrontBaseRail")) {
            l.material = l.material.clone();
            l.name = "lflPorchRightBaseRail";
            const_var.legsForCut["rightLean"][l.name] = l;
        }
        else if (l.name.includes("rflPorchFrontDoubleBaseRail")) {
            l.material = l.material.clone();
            l.name = "lflPorchRightBaseRailDouble";
            const_var.legsForCut["rightLean"][l.name] = l;
        }
    })

    const_var.lengthData.leftLean.porchLegsCount = leftlegsCount;
    const_var.lengthData.frontLean.porchLegsCount = frontlegsCount;
    const_var.lengthData.rightLean.porchLegsCount = rightlegsCount;
    const_var.lengthData.backLean.porchLegsCount = backlegsCount;

    if ( params.isShowCenter == true ) {
        L_L_F_P_Legs.visible = false;
        R_L_F_P_Legs.visible = false;
        lblPorchGroup.visible = false;
        rblPorchGroup.visible = false;
      }
}