if (const_var.leanLegstype == "zigzag" && params.lean_p_e_l) {
    // if( e < params.lean_p_d / -2 + 0.12 ) e = (params.lean_p_d /-2) + 0.12;
    // if(e >= (params.lean_p_d/2) - 2) e = (params.lean_p_d/2)-0.12;

    if (i>1){
        const leftTopZigZagConnector = const_var.b_t_M_L.getObjectByName("zigZagConnector").clone();
        leftTopZigZagConnector.name = "leftLeanTopZigZagConnector" + j + 'x' + i;
        leftTopZigZagConnector.material = leftTopZigZagConnector.material.clone();
        leftTopZigZagConnector.scale.set(1.35,0.2,0.3);
        leftTopZigZagConnector.position.set(((params.lean_p_w*2) + params.p_w)/-2+0.54,i-0.3,e);
        leftTopZigZagConnector.rotation.z = Math.PI/-3.4;
        LeftLeanLegs.add(leftTopZigZagConnector);
        const_var.legsForCut["leftLean"][leftTopZigZagConnector.name] = leftTopZigZagConnector;
    }
    
    const leftBottomZigZagConnector = const_var.b_t_M_L.getObjectByName("zigZagConnector").clone();
    leftBottomZigZagConnector.name = "leftLeanBottomZigZagConnector" + j + 'x' + i;
    leftBottomZigZagConnector.material = leftBottomZigZagConnector.material.clone();
    leftBottomZigZagConnector.scale.set(1.4,0.2,0.3);
    leftBottomZigZagConnector.position.set(((params.lean_p_w*2) + params.p_w)/-2+0.54,i+0.7,e);
    leftBottomZigZagConnector.rotation.z = Math.PI/3.4;
    if (i < params.lean_p_h - 2) {
        LeftLeanLegs.add(leftBottomZigZagConnector);	  
        const_var.legsForCut["leftLean"][leftBottomZigZagConnector.name] = leftBottomZigZagConnector;
    }
    
    if (i == 0){
        const leftBaseRailLegConnector = const_var.b_t_M_L.getObjectByName("legConnector").clone();
        leftBaseRailLegConnector.name = "leftLeanBaseRailLegConnector" + j + 'x' + i;
        leftBaseRailLegConnector.material = leftBaseRailLegConnector.material.clone();
        leftBaseRailLegConnector.scale.set(0.97,0.2,0.3);
        leftBaseRailLegConnector.position.set(((params.lean_p_w*2) + params.p_w)/-2+0.5,i+0.08,e);
        LeftLeanLegs.add(leftBaseRailLegConnector);
        const_var.legsForCut["leftLean"][leftBaseRailLegConnector.name] = leftBaseRailLegConnector;
    }
}

        // if (const_var.leanLegstype == "zigzag" && params.lean_p_e_l) {
        //     zigZagLegs((params.lean_p_w*2) + params.p_w, params.lean_p_d, params.lean_p_h, LeftLeanLegs, undefined, EqiDis, "leftLean", undefined,);
     // }   


     if (const_var.leanRLegstype == "zigzag" && params.leanR_p_e_l) {
        // zigZagLegs((params.leanR_p_w*2) + params.p_w, params.leanR_p_d, params.leanR_p_h, undefined, RightLeanLegs, EqiDis, undefined, "rightLean");
            // if( e < params.lean_p_d / -2 + 0.12 ) e = (params.lean_p_d /-2) + 0.12;
            // if(e >= (params.lean_p_d/2) - 2) e = (params.lean_p_d/2)-0.12;

            // if (i>1){
            //     const rlTopZigZagConnector = const_var.b_t_M_L.getObjectByName("zigZagConnector").clone();
            //     rlTopZigZagConnector.name = "rlTopZigZagConnector" + j + 'x' + i;
            //      rlTopZigZagConnector.material = rlTopZigZagConnector.material.clone();
            //     rlTopZigZagConnector.scale.set(1.35,0.2,0.3);
            //     rlTopZigZagConnector.position.set(((params.leanR_p_w*2) + params.p_w)/2-0.54,i-0.3,e);
            //     rlTopZigZagConnector.rotation.z = Math.PI/3.4;
            //     RightLeanLegs.add(rlTopZigZagConnector);
            //     const_var.legsForCut["rightLean"][rlTopZigZagConnector.name] = rlTopZigZagConnector;
            // }

            // const rlBottomZigZagConnector = const_var.b_t_M_L.getObjectByName("zigZagConnector").clone();
            // rlBottomZigZagConnector.name = "rlBottomZigZagConnector" + j + 'x' + i;
            //  rlBottomZigZagConnector.material = rlBottomZigZagConnector.material.clone();
            // rlBottomZigZagConnector.scale.set(1.4,0.2,0.3);
            // rlBottomZigZagConnector.position.set(((params.leanR_p_w*2) + params.p_w)/2-0.54,i+0.7,e);
            // rlBottomZigZagConnector.rotation.z = Math.PI/-3.4;
            // if (i < height - 2) {
            //     RightLeanLegs.add(rlBottomZigZagConnector);	  
            //     const_var.legsForCut["rightLean"][rlBottomZigZagConnector.name] = rlBottomZigZagConnector;
            // }	
            
            // if (i == 0){
            //     const rlBaseRailLegConnector = const_var.b_t_M_L.getObjectByName("legConnector").clone();
            //     rlBaseRailLegConnector.name = "rlBaseRailLegConnector"+ j + 'x' + i;
            //     rlBaseRailLegConnector.material = rlBaseRailLegConnector.material.clone();
            //     rlBaseRailLegConnector.scale.set(0.97,0.2,0.3);
            //     rlBaseRailLegConnector.position.set(((params.leanR_p_w*2) + params.p_w)/2-0.5,i+0.08,e);
            //     RightLeanLegs.add(rlBaseRailLegConnector);
            //     const_var.legsForCut["rightLean"][rlBaseRailLegConnector.name] = rlBaseRailLegConnector;
            // }
    }