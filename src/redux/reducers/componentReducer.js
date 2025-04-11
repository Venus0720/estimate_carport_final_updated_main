import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useState, useCallback } from "react";
import EDITLogo from "../../assets/images/edit.png";
import editLogoSVG from "../../assets/images/edit_icon.svg";
import DELETELogo from "../../assets/images/delete.png";
import svgFILE from "../../assets/images/building-installation.svg";
import { params, const_var, initialState } from "./reducer";
import { removeComponent, genratePrintImages, setPricingForComponent,setPriceForCupola, showSaveLater, showDownloadProgressBar, ShowHideCheckout } from "../../action/index.js";
import { SendBuildingDatatoServer } from "../../action/leadcustomer.action.js";
import { SendBuildingDatatoPublicServer, handleSaveLatter, onQuoteSubmitApi } from "../../action/quote.action.js";
import * as cuBuilding from "./pricingReducer";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import axios from "axios";
import store from "../store/index.js";
import TWEEN from "@tweenjs/tween.js";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import * as Arrows from "../../_helper/UpdateArrow&Dimension"
import * as LeanHArrows from "../../_helper/UpdateLeanArrow&Dim"
import CSG from "../../assets/libs/three-csg";
import shutterWindowTexture from '../../assets/images/imgTextures/buildingImages/shutterWindowTexture.jpeg';
import verticalTexture from '../../assets/images/imgTextures/buildingImages/verticalTexture.jpeg';
import horizontalTexture from '../../assets/images/imgTextures/buildingImages/horizantalTexture.jpeg';
import { updateWalkinWindowlegCutPrice } from  './utils'


import Asectionaldoor from "../../assets/images/doorObj/Asectionaldoor.gltf";
import Avent1 from "../../assets/images/doorObj/Avent1.gltf";
import AdimaondWindowsDoor from "../../assets/images/doorObj/AdimaondWindowsDoor.gltf";
import AdimaondWindowsDoor1 from "../../assets/images/doorObj/AdimaondWindowsDoor1.gltf";
import ADimaondWindowsDoorLeftKnob from "../../assets/images/doorObj/ADimaondWindowsDoorLeftKnob.gltf";
import ADoubleGlassDoorWalkDoor from "../../assets/images/doorObj/ADoubleGlassDoorWalkDoor.gltf";
import AhaifSectionalDoorDesign from "../../assets/images/doorObj/AhaifSectionalDoorDesign.gltf";
import ALiteDoor7 from "../../assets/images/doorObj/ALiteDoor7.gltf";
import ALiteDoor71 from "../../assets/images/doorObj/ALiteDoor71.gltf";
import ASectionalDoor8 from "../../assets/images/doorObj/ASectionalDoor8.gltf";
import Asoliddoor1 from "../../assets/images/doorObj/Asoliddoor1.gltf";
import Avent from "../../assets/images/doorObj/Avent.gltf";
import Avent2 from "../../assets/images/doorObj/Avent2.gltf";
import Avent3 from "../../assets/images/doorObj/Avent3.gltf";
import standard_door from "../../assets/images/doorObj/standard_door.gltf";
import standard_trim_door from "../../assets/images/doorObj/standard_trim_door.gltf";
import lite5 from "../../assets/images/doorObj/5_lite_walkin.gltf";
import lite4 from "../../assets/images/doorObj/4_lite_walkin.gltf";
import lite9 from "../../assets/images/doorObj/9_lite_walkin.gltf";
import lite11 from "../../assets/images/doorObj/11_lite_walkin.gltf";
// import LiteWalkDoor from "../../assets/images/doorObj/LiteWalkDoor.gltf";
// import LiteWalkInDoor from "../../assets/images/doorObj/LiteWalkInDoor.gltf";
import sectional_with_window_door from "../../assets/images/doorObj/sectional_with_window_door.gltf";
import sectional_door from "../../../src/assets/images/doorObj/sectional_door.gltf";
import standard_window from "../../assets/images/doorObj/standard_window.gltf";
import standard_walkin from "../../assets/images/doorObj/standard_walkin.gltf";
import double_delux_door from "../../assets/images/doorObj/double_delux_walkin.gltf";
import diamond_window from "../../assets/images/doorObj/diamond_window_walkin.gltf";
import half_sectional_door_design from "../../assets/images/doorObj/half_sectional_door_design.gltf";
import solid_walk_door from "../../assets/images/doorObj/solid_walkin.gltf";
import * as htmlToImage from 'html-to-image';
import * as CenterBuildingArrows from '../../_helper/UpdateArrow&Dimension';
import * as LeanToArrows from '../../_helper/UpdateLeanArrow&Dim';
import { func } from "prop-types";





let controls = "";
let classData = document.getElementsByClassName("buildingcanvas");
let ComponentUniqueID = 0;
let intersectedWall = null;
const baseUrl = process.env.REACT_APP_BASE_URL;
const loader = new THREE.TextureLoader();

const doorPath = "../../assets/images/doorObj/";

export const componentState = {
    updateStateAccordingtoCondition: "",
    updateNewAction: "",
    layout2DMapId: 0,
    generated2DMapId: null
};
const componentReducer = (state = componentState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case "genrateBlobImage":
            action.event.preventDefault();
            const_var.checkIval = 0;
            const_var.i_g_A_y = [];
            TsCeSot("quote", "", "test");
            return {
                ...state,
                updateStateAccordingtoCondition: action + state.updateNewAction,
            };
        case "prepareTwoDMapData":
            const_var.layout2DMapId = (state.layout2DMapId + 1) % 65536;
            const_var.generated2DMapId = null;
            return {
                ...state,
                layout2DMapId: (state.layout2DMapId + 1) % 65536,
            };
        case "generatedTwoDMapData":
            const_var.generated2DMapId = action.payload;
            return {
                ...state,
                generated2DMapId: action.payload,
            };
    }
    return newState;
};

// document.addEventListener("mousedown", onDocumentMouseDown, false);

// document.addEventListener("mousemove", onDocumentMouseMove, false);
//document.addEventListener("mousewheel", onDocumentMouseWheel, false);
// document.addEventListener("touchstart", ontouchstart1, false);
// document.addEventListener("touchsend", onDocumentMouseUp, false);

//Prince
export function registerRendererEventListener() {
    const_var.renderer.domElement.addEventListener("mousedown", onRendererMouseDownForDoor, false);
    const_var.renderer.domElement.addEventListener("mousemove", onRendererMouseMoveForDoor, false);
    const_var.renderer.domElement.addEventListener("mouseup", onRendererMouseUpForDoor, false);

    const_var.renderer.domElement.addEventListener("touchstart", onRendererTouchstartForDoor, false);
    const_var.renderer.domElement.addEventListener("touchmove", onRendererTouchmoveForDoor, false);
    const_var.renderer.domElement.addEventListener("touchend", onRendererMouseUpForDoor, false);
}

function onRendererTouchstartForDoor(event) {
    event.preventDefault();
    event = event.changedTouches[ 0 ];
    onRendererMouseDownForDoor(event);
}

function onRendererMouseDownForDoor(event) {

    if (event.button == 2)return;
    
    if(const_var.scene.getObjectByName("cupolaCylinder") === undefined &&  params.cupola ) cupolaCylinder();
    if (params.cupola){
        let cupolaIntersectedObject = getIntersectedObjects(event, const_var.cupolaForMove);
        let cupolaEditBox = document.getElementsByClassName('cupola-drag-inner');
        if(cupolaEditBox!=undefined && cupolaEditBox[0]!=undefined){
            cupolaEditBox[0].style.transform = "translate(0, 0)";
            cupolaEditBox[0].style.left = (event.clientX - 350) + 'px';
            cupolaEditBox[0].style.top = (event.clientY - 50) + 'px';
        }
        if (cupolaIntersectedObject.length >0) {
            const_var.dragCupola = true;
            event.target.style.cursor = "move";
            const_var.controls.enableRotate = false;
            const_var.cupola = cupolaIntersectedObject[0].object.parent
            const_var.previousCupolaZpositionOnMove = const_var.cupola.position.z;
        }
    }
    const vObjs = [];
    const_var.scene.traverse((c) => {
        if (c.type === "Mesh" && ((c.visible && !c.parent?.DoorObj && c.material?.opacity === 1)
        || (c.parent?.DoorObj  && (((!params.isBreezeway ? wallnameBySec[c.parent.userData.wallName] : breezewayWallnameByStorage[c.parent.userData.wallName]) === const_var.focusedSection)
            || const_var.selectedTabKeyForWheel !== 'doorwindow'
            || params.is_translusant )))){
            vObjs.push(c);
        }
    });
    const intersectedDoor = getIntersectedObjects(event, vObjs);
    if(intersectedDoor.length==0)
    {
        return;
    }
    let leantoWalls = [
                "L_L_L_W", "L_L_F_W", "L_L_B_W", "L_L_F_S_W", "L_L_L_S_W", "L_L_R_S_W",
                "R_L_F_W", "R_L_B_W", "R_L_R_W", "R_L_F_S_W", "R_L_L_S_W", "R_L_R_S_W",
                "F_L_F_W", "F_L_R_W", "F_L_L_W", "F_L_F_S_W", "F_L_L_S_W","F_L_R_S_W", "F_L_B_S_W",
                "B_L_F_W", "B_L_B_W", "B_L_S_W", "B_L_L_S_W","B_L_R_S_W", "B_L_F_S_W", "B_L_B_S_W",
              ];
    if(intersectedDoor.length>0 && leantoWalls.includes(intersectedDoor[0].object.parent.userData.wallName)==true && params.isShowCenter==true)
    {
        return;
    }
    
    if (params.isBreezeway && intersectedDoor.length>0 && (intersectedDoor[0].object.parent.userData.wallName == "c_b_l_w" || intersectedDoor[0].object.parent.userData.wallName == "c_b_r_w")){
        event.target.style.cursor = "";
        return;
    }

    // let componenteEditBox = document.getElementsByClassName('door-window-drag-inner');
    // componenteEditBox[0].style.transform = "translate(0, 0)";
    // var x = window.matchMedia("(min-width: 992px)")
    // componenteEditBox[0].style.left = (event.clientX - 350) + 'px';
    // componenteEditBox[0].style.top = (event.clientY - 200) + 'px';
    if (intersectedDoor.length > 0 
        && intersectedDoor[0].object.parent.DoorObj 
        && intersectedDoor[0].object.name !== "hline" 
        && intersectedDoor[0].object.name !== "vline"
        && ((intersectedDoor[0].face.normal.x && intersectedDoor[0].face.normal.x < 0)
            || (intersectedDoor[0].face.normal.y && intersectedDoor[0].face.normal.y < 0)
            || (intersectedDoor[0].face.normal.z && intersectedDoor[0].face.normal.z < 0))
        ) {
        const_var.dragging = true;
        const_var.controls.enableRotate = false;
        const_var.b_s_c_n = intersectedDoor[0].object.parent;
        const_var.b_s_c_n.userData.lastPos = const_var.b_s_c_n.position.clone();
        // if (undefined !=  const_var.scene.getObjectByName("doorWidth4L"+const_var.b_s_c_n.userData.uniqueId)) 
        // const_var.scene.remove(const_var.scene.getObjectByName("doorWidth4L"+const_var.b_s_c_n.userData.uniqueId));
        event.target.style.cursor = "move";

        let wall = const_var.scene.getObjectByName(const_var.b_s_c_n && const_var.b_s_c_n.userData.wallName);
        let newWall = wall && const_var.wallsForCut[wall.name].clone();
        if (newWall) {
            newWall.position.set(0, 0, 0);
            newWall.scale.set(1, 1, 1);
            newWall.rotation.set(0, 0, 0);

            newWall.applyMatrix4(wall.matrixWorld);
            // newWall.name += "_forintersect";
            intersectedWall = newWall;
            const_var.scene.add(intersectedWall);
        }
    }
    if (params.isBreezeway && intersectedDoor.length>0 && (intersectedDoor[0].object.parent.userData.wallName == "c_b_l_w" || intersectedDoor[0].object.parent.userData.wallName == "c_b_r_w")){
        event.target.style.cursor = "";
    }
}

function setRaycaster(event) {
    const rect = const_var.renderer.domElement.getBoundingClientRect();
    const mouse = new THREE.Vector3();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = 2 * -((event.clientY - rect.top) / rect.height) + 1;

    const_var.raycaster.setFromCamera(mouse, const_var.camera);
}

function onRendererTouchmoveForDoor(event) {
    event.preventDefault();
    event = event.changedTouches[ 0 ];
    onRendererMouseMoveForDoor(event);
}

function handleCenterStorageWallsCut(wall) {
    let walls = [wall];
    switch(wall.name) {
        case "F_L_R_W": 
            var nwall = const_var.scene.getObjectByName("F_L_R_G");
            if (nwall) walls.push(nwall);
            break;
        case "F_L_L_W": 
            var nwall = const_var.scene.getObjectByName("F_L_L_G");
            if (nwall) walls.push(nwall);
            break;
        case "L_L_F_W": 
            var nwall = const_var.scene.getObjectByName("L_L_F_G");
            if (nwall) walls.push(nwall);
            break;
        case "L_L_B_W": 
            var nwall = const_var.scene.getObjectByName("L_L_B_G");
            if (nwall) walls.push(nwall);
            break;
        case "R_L_F_W": 
            var nwall = const_var.scene.getObjectByName("R_L_F_G");
            if (nwall) walls.push(nwall);
            break;
        case "R_L_B_W": 
            var nwall = const_var.scene.getObjectByName("R_L_B_G");
            if (nwall) walls.push(nwall);
            break;
        case "B_L_F_W": 
            var nwall = const_var.scene.getObjectByName("B_L_L_G");
            if (nwall) walls.push(nwall);
            break;
        case "B_L_B_W": 
            var nwall = const_var.scene.getObjectByName("B_L_R_G");
            if (nwall) walls.push(nwall);
            break;
        case "c_b_f_w":             
            var nwall = const_var.scene.getObjectByName("fGable");
            if (nwall) walls.push(nwall);
            break;
        case "c_b_b_w":             
            var nwall = const_var.scene.getObjectByName("bGable");
            if (nwall) walls.push(nwall);
            break;
        case "L_S_F_2W_VT":             
            var nwall = const_var.scene.getObjectByName("L_S_F_W_VT");
            if (nwall) walls.push(nwall);
            break;
        case "L_S_B_2W_VT": 
            var nwall = const_var.scene.getObjectByName("L_S_B_W_VT");
            if (nwall) walls.push(nwall);
            break;
        case "R_S_F_2W_VT": 
            var nwall = const_var.scene.getObjectByName("R_S_F_W_VT");
            if (nwall) walls.push(nwall);
            break;
        case "R_S_B_2W_VT": 
            var nwall = const_var.scene.getObjectByName("R_S_B_W_VT");
            if (nwall) walls.push(nwall);
            break;
    }
    return walls;
}

function onRendererMouseMoveForDoor(event) {

    if (const_var.dragging === true && intersectedWall) {
            let walls = handleCenterStorageWallsCut(intersectedWall);            
            let otherWall = const_var.scene.getObjectByName(intersectedWall.name + 1);
            otherWall && walls.push(otherWall);
            let intersectedObject = getIntersectedObjects(event, walls);
            intersectedObject.length > 0 && moveDoor(intersectedObject[0].point);
    }
    if (const_var.scene.getObjectByName("cupolaCylinder") != undefined && const_var.dragCupola === true){
        let cupolaCylinder  = const_var.scene.getObjectByName("cupolaCylinder");
        let cupolaIntersectedPoint = getIntersectedObject(event, cupolaCylinder);
        cupolaIntersectedPoint.length > 0 && moveCupola(cupolaIntersectedPoint[0].point);
    }
}

export function getIntersectedObject(event, objects) {
    setRaycaster(event);
    return const_var.raycaster.intersectObject(objects);
}

export function getIntersectedObjects(event, arr) {
    setRaycaster(event);
    return const_var.raycaster.intersectObjects(arr, true);
}


function moveDoor(m) {
    // let windowHeight = const_var.b_s_c_n.height / 2;

    let x = const_var.b_s_c_n.width / 2;
    let y = const_var.b_s_c_n.height / 2;
    let doorEndPoint = 2;
    let leanEndPoint = 1;
    let leanDoorEndPoint = 2;

    if (const_var.b_s_c_n.userData.compType == "window" || const_var.b_s_c_n.userData.compType == "window_frameout") {
        const_var.b_s_c_n.position.y = m["y"];        
    }

    switch (const_var.b_s_c_n.userData.wallName) {
        case "c_b_f_w":
            const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (params.p_w - doorEndPoint) / -2 + x), (params.p_w - doorEndPoint) / 2 - x);
            Arrows.centerVerticalDoorArrow(const_var.b_s_c_n.position, const_var.b_s_c_n.height, const_var.b_s_c_n.userData.wallName,const_var.b_s_c_n.uniqueId,const_var.b_s_c_n.uniqueId);
            if (const_var.b_s_c_n.userData.compType == "window" || const_var.b_s_c_n.userData.compType == "window_frameout") {
                const_var.b_s_c_n.position.y = Math.min(Math.max(m["y"], y), (params.p_h + ((params.p_r_p/12)*(params.p_w/2)) - y));            
            }  
            break;

        case "c_b_b_w":
            const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (params.p_w - doorEndPoint) / -2 + x), (params.p_w - doorEndPoint) / 2 - x);
            Arrows.centerVerticalDoorArrowB(const_var.b_s_c_n.position, const_var.b_s_c_n.height, const_var.b_s_c_n.userData.wallName,const_var.b_s_c_n.uniqueId,const_var.b_s_c_n.uniqueId);
            if (const_var.b_s_c_n.userData.compType == "window" || const_var.b_s_c_n.userData.compType == "window_frameout") {
                const_var.b_s_c_n.position.y = Math.min(Math.max(m["y"], y), (params.p_h + ((params.p_r_p/12)*(params.p_w/2)) - y));            
            }  
            break;

        case "c_b_l_w":
           if (!params.isBreezeway) const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], (params.p_d - doorEndPoint) / -2 + x), (params.p_d - doorEndPoint) / 2 - x);
            if (const_var.b_s_c_n.userData.compType == "window" || const_var.b_s_c_n.userData.compType == "window_frameout") {
                const_var.b_s_c_n.position.y = Math.min(Math.max(m["y"], y), (params.p_h - y));            
            }        
            break;

        case "c_b_r_w":
            if (!params.isBreezeway) const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], (params.p_d - doorEndPoint) / -2 + x), (params.p_d - doorEndPoint) / 2 - x);        
            if (const_var.b_s_c_n.userData.compType == "window" || const_var.b_s_c_n.userData.compType == "window_frameout") {
                const_var.b_s_c_n.position.y = Math.min(Math.max(m["y"], y), (params.p_h - y));            
            }    
            break;

        case "F_S_L_R_W":
            const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], (params.p_d - doorEndPoint) / -2 + x), (params.p_d - doorEndPoint) / 2 - x);
            if (const_var.b_s_c_n.userData.compType == "window" || const_var.b_s_c_n.userData.compType == "window_frameout") {
                const_var.b_s_c_n.position.y = Math.min(Math.max(m["y"], y), (params.p_h + (Number(params.p_r_p) *1.5) - y));            
            } 
            break;

        case "c_b_l_s_f_w":
            const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"],(params.p_w - doorEndPoint) / -2 + x), (params.p_f_w != "Close") ? (-params.p_w - doorEndPoint) / 2 + Number(params.cB_addStorage_left) - x :(params.p_w - doorEndPoint) / 2 - x);
            break;

        case "c_b_l_s_b_w":
            const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"],(params.p_w - doorEndPoint) / -2 + x), (params.p_b_w != "Close") ? (-params.p_w - doorEndPoint) / 2 + Number(params.cB_addStorage_left) - x :(params.p_w - doorEndPoint) / 2 - x);
            break;

        case "c_b_l_s_r_w":
            const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"],(params.p_d - doorEndPoint) / -2 + x),(params.p_d - doorEndPoint) / 2 - x);
            if (const_var.b_s_c_n.userData.compType == "window" || const_var.b_s_c_n.userData.compType == "window_frameout") {
                const_var.b_s_c_n.position.y = Math.min(Math.max(m["y"], y), (params.p_h + (Number(params.p_r_p) *0.9) - y));            
            } 
            break;

        //
        case "L_S_F_W_VT":
            const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (params.p_w - doorEndPoint) / -2 + x), (params.p_f_w != "Close") ? (-params.p_w - doorEndPoint) / 2 + Number(params.cB_addStorage_left) - x : (params.p_w - doorEndPoint) / 2 - x);
            break;
        case "L_S_F_2W_VT":
            const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (params.p_w - doorEndPoint) / -2 + x), (params.p_f_w != "Close") ? (-params.p_w - doorEndPoint) / 2 + Number(params.cB_addStorage_left) - x : (params.p_w - doorEndPoint) / 2 - x);
            break;

        case "L_S_B_W_VT":
            const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (params.p_w - doorEndPoint) / -2 + x), (params.p_b_w != "Close") ? (-params.p_w - doorEndPoint) / 2 + Number(params.cB_addStorage_left) - x : (params.p_w - doorEndPoint) / 2 - x);
            break;
        case "L_S_B_2W_VT":
            const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (params.p_w - doorEndPoint) / -2 + x), (params.p_b_w != "Close") ? (-params.p_w - doorEndPoint) / 2 + Number(params.cB_addStorage_left) - x : (params.p_w - doorEndPoint) / 2 - x);
            break;

        case "R_S_F_W_VT":
            const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], params.p_w / 2 - Number(params.cB_addStorage_right) + x), params.p_w / 2 - x);
            break;
        case "R_S_F_2W_VT":
            const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], params.p_w / 2 - Number(params.cB_addStorage_right) + x), params.p_w / 2 - x);
            break;

        case "R_S_B_W_VT":
            const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], params.p_w / 2 - Number(params.cB_addStorage_right) + x), params.p_w / 2 - x);
            break;
        case "R_S_B_2W_VT":
            const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], params.p_w / 2 - Number(params.cB_addStorage_right) + x), params.p_w / 2 - x);
            break;
        ///

        case "c_b_r_s_f_w":
            const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (params.p_w) / 2 - (Number(params.cB_addStorage_right) - 1)+ x), (params.p_w - doorEndPoint) / 2 - x);
            break;

        case "c_b_r_s_b_w":
            const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], params.p_w / 2 -( Number(params.cB_addStorage_right) -1) + x), (params.p_w - doorEndPoint) / 2 - x);
            break;

        case "c_b_r_s_l_w":
            const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], -(params.p_d - doorEndPoint) / 2 + x), (params.p_d - doorEndPoint) / 2 - x);
            if (const_var.b_s_c_n.userData.compType == "window" || const_var.b_s_c_n.userData.compType == "window_frameout") {
                const_var.b_s_c_n.position.y = Math.min(Math.max(m["y"], y), (params.p_h + (Number(params.p_r_p) *0.9) - y));            
            } 
            break;

        case "c_b_f_s_w":
            const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (params.p_w - doorEndPoint) / -2 + x), (params.p_w - doorEndPoint) / 2 - x);
            break;

        case "c_b_l_s_w":
            const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], (params.p_d - doorEndPoint) / -2 + x), -(params.p_d + doorEndPoint) / 2 + Number(params.p_u_t) - x);
            break;

        case "c_b_r_s_w":
            const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], (params.p_d - doorEndPoint) / -2 + x), -(params.p_d + doorEndPoint) / 2 + Number(params.p_u_t) - x);
            break;

        case "c_b_f_s_b_w":
            const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (params.p_w - doorEndPoint) / -2 + x), (params.p_w - doorEndPoint) / 2 - x);
            break;

        case "c_b_f_s_l_w":
            const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], ((params.p_d + doorEndPoint)/ 2 - Number(params.cB_addStorage_front)) + x), (params.p_d - doorEndPoint) / 2 - x); 
            break;

        case "c_b_f_s_r_w":
            const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"],((params.p_d + doorEndPoint)/ 2 - Number(params.cB_addStorage_front)) + x), (params.p_d - doorEndPoint) / 2 - x); 
            break;

        case "L_L_L_W":
            if(params.add_left_front_lean_porch === true && params.add_left_back_lean_porch == false){
                const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], (params.p_d + leanDoorEndPoint) / 2  - params.lean_p_d + x), (params.p_d -leanDoorEndPoint) / 2 - x + params.lean_p_w);
            } else if (params.add_left_front_lean_porch === false && params.add_left_back_lean_porch === true) {
                const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], (params.p_d -leanDoorEndPoint) / -2 + x - params.lean_p_w), (params.p_d + leanDoorEndPoint) / -2 + params.lean_p_d  - x);
            } else if(params.add_left_front_lean_porch === true && params.add_left_back_lean_porch==true){
                const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], (params.p_d -doorEndPoint) / -2 + x - params.lean_p_w), (params.p_d -doorEndPoint) / 2 - x + params.lean_p_w);
            } else if (params.leantoAlignmentLeft === 1 || params.leantoAlignmentLeft === '1'){
                const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], (params.lean_p_d-doorEndPoint) / -2 + x), (params.lean_p_d-doorEndPoint) / 2 - x);
            } else if (params.leantoAlignmentLeft === 2 || params.leantoAlignmentLeft === '2'){
                const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], (params.p_d + leanDoorEndPoint) / 2  - params.lean_p_d + x), (params.p_d-leanDoorEndPoint) / 2 - x);
            } else if (params.leantoAlignmentLeft === 3 || params.leantoAlignmentLeft === '3') {
                const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], (params.p_d - leanDoorEndPoint) / -2 + x), (params.p_d + leanDoorEndPoint) / -2 + params.lean_p_d  - x);
            }

            if (const_var.b_s_c_n.userData.compType == "window" || const_var.b_s_c_n.userData.compType == "window_frameout") {
                const_var.b_s_c_n.position.y = Math.min(Math.max(m["y"], y), (params.lean_p_h - y));            
            } 
            break;

        case "L_L_F_W":
            const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (params.p_w / -2 - params.lean_p_w) + leanEndPoint  + x), (-params.p_w / 2) - leanEndPoint - x);
            break;

        case "L_L_B_W":
            const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (params.p_w / -2 - params.lean_p_w) + leanEndPoint + x), (-params.p_w / 2 ) - leanEndPoint - x);
            break;

        case "B_L_S_W":
            if(params.add_right_back_lean_porch === true && params.add_left_back_lean_porch == false){
                const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (params.p_w + leanDoorEndPoint) / 2  - params.leanB_p_d + x), (params.p_w -leanDoorEndPoint) / 2 - x + params.leanB_p_w);
            } else if (params.add_right_back_lean_porch === false && params.add_left_back_lean_porch === true) {
                const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (params.p_w -leanDoorEndPoint) / -2 + x - params.leanB_p_w), (params.p_w + leanDoorEndPoint) / -2 + params.leanB_p_d  - x);
            } else if(params.add_right_back_lean_porch === true && params.add_left_back_lean_porch == true){
                const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (params.p_w -doorEndPoint) / -2 + x - params.leanB_p_w), (params.p_w -doorEndPoint) / 2 - x + params.leanB_p_w);
            } else if (params.leantoAlignmentBack === 1 || params.leantoAlignmentBack === '1'){
                const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (params.leanB_p_d - doorEndPoint) / -2 + x), (params.leanB_p_d - doorEndPoint) / 2 - x);
            } else if (params.leantoAlignmentBack === 2 || params.leantoAlignmentBack === '2'){
                const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (params.p_w + leanDoorEndPoint) / 2  - params.leanB_p_d + x), (params.p_w - leanDoorEndPoint) / 2 - x);
            } else if (params.leantoAlignmentBack === 3 || params.leantoAlignmentBack === '3') {
                const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (params.p_w - leanDoorEndPoint) / -2 + x), (params.p_w + leanDoorEndPoint) / -2 + params.leanB_p_d  - x);
            }

            if (const_var.b_s_c_n.userData.compType == "window" || const_var.b_s_c_n.userData.compType == "window_frameout") {
                const_var.b_s_c_n.position.y = Math.min(Math.max(m["y"], y), (params.leanB_p_h - y));            
            } 
            break;

        case "B_L_B_W":
            const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], params.p_d / -2 - params.leanB_p_w + leanEndPoint + x), -params.p_d / 2 - leanEndPoint - x);
            break;

        case "B_L_F_W":
            const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], params.p_d / -2 - params.leanB_p_w + leanEndPoint + x), -params.p_d / 2 - leanEndPoint - x);
            break;

        case "F_L_F_W":

            if(params.add_right_front_lean_porch === true && params.add_left_front_lean_porch == false){
                const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (params.p_w + leanDoorEndPoint) / 2  - params.leanF_p_d + x), (params.p_w -leanDoorEndPoint) / 2 - x + params.leanF_p_w);
            } else if (params.add_right_front_lean_porch === false && params.add_left_front_lean_porch === true) {
                const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (params.p_w -leanDoorEndPoint) / -2 + x - params.leanF_p_w), (params.p_w + leanDoorEndPoint) / -2 + params.leanF_p_d  - x);
            } else if(params.add_right_front_lean_porch === true && params.add_left_front_lean_porch == true){
                const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (params.p_w -doorEndPoint) / -2 + x - params.leanF_p_w), (params.p_w -doorEndPoint) / 2 - x + params.leanF_p_w);
            } else if (params.leantoAlignmentFront === 1 || params.leantoAlignmentFront === '1'){
                const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (params.leanF_p_d - doorEndPoint) / -2 + x), (params.leanF_p_d - doorEndPoint) / 2 - x);
            } else if (params.leantoAlignmentFront === 3 || params.leantoAlignmentFront === '3'){
                const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (params.p_w + leanDoorEndPoint) / 2  - params.leanF_p_d + x), (params.p_w-leanDoorEndPoint) / 2 - x);
            } else if (params.leantoAlignmentFront === 2 || params.leantoAlignmentFront === '2') {
                const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (params.p_w-leanDoorEndPoint) / -2 + x), (params.p_w + leanDoorEndPoint) / -2 + params.leanF_p_d  - x);
            }

            if (const_var.b_s_c_n.userData.compType == "window" || const_var.b_s_c_n.userData.compType == "window_frameout") {
                const_var.b_s_c_n.position.y = Math.min(Math.max(m["y"], y), (params.leanF_p_h - y));            
            } 
            break;

        case "F_L_L_W":
            const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], params.p_d / 2 + leanEndPoint + x), params.p_d / 2 + params.leanF_p_w - x - leanEndPoint);
            break;

        case "F_L_R_W":
            const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], params.p_d / 2 + leanEndPoint + x), params.p_d / 2 + params.leanF_p_w - x - leanEndPoint);
            break;

        case "R_L_R_W":

            if(params.add_right_front_lean_porch === true && params.add_right_back_lean_porch == false){
                const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], (params.p_d + leanDoorEndPoint) / 2  - params.leanR_p_d + x), (params.p_d -leanDoorEndPoint) / 2 - x + params.leanR_p_w);
            } else if (params.add_right_front_lean_porch === false && params.add_right_back_lean_porch === true) {
                const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], (params.p_d -leanDoorEndPoint) / -2 + x - params.leanR_p_w), (params.p_d + leanDoorEndPoint) / -2 + params.leanR_p_d  - x);
            } else if(params.add_right_front_lean_porch === true && params.add_right_back_lean_porch==true){
                const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], (params.p_d -doorEndPoint) / -2 + x - params.leanR_p_w), (params.p_d -doorEndPoint) / 2 - x + params.leanR_p_w);
            } else if (params.leantoAlignmentRight === 1 || params.leantoAlignmentRight === '1'){
                const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], (params.leanR_p_d - doorEndPoint) / -2 + x), (params.leanR_p_d - doorEndPoint) / 2 - x);
            } else if (params.leantoAlignmentRight === 2 || params.leantoAlignmentRight === '2'){
                const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], (params.p_d + leanDoorEndPoint) / 2  - params.leanR_p_d + x), (params.p_d-leanDoorEndPoint) / 2 - x);
            } else if (params.leantoAlignmentRight === 3 || params.leantoAlignmentRight === '3') {
                const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], (params.p_d-leanDoorEndPoint) / -2 + x), (params.p_d+leanDoorEndPoint) / -2 + params.leanR_p_d  - x);
            }

            if (const_var.b_s_c_n.userData.compType == "window" || const_var.b_s_c_n.userData.compType == "window_frameout") {
                const_var.b_s_c_n.position.y = Math.min(Math.max(m["y"], y), (params.leanR_p_h - y));            
            } 
            break;

        case "R_L_B_W":
            const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (params.p_w / 2)+ leanEndPoint + x), (params.p_w / 2 + params.leanR_p_w)- leanEndPoint - x);
            break;

        case "R_L_F_W":
            const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], params.p_w / 2 + leanEndPoint + x), (params.p_w / 2 + params.leanR_p_w) - leanEndPoint - x);
            break;

        case "L_L_F_S_W":
            const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (- params.p_w / 2 - params.lean_p_w) + leanEndPoint  + x), (- params.p_w / 2) - leanEndPoint  - x);
            break;

        case "L_L_L_S_W":
            if ( params.leantoAlignmentLeft == "2" ) {
                const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], (params.p_d / 2)-(params.lean_p_d - leanEndPoint) + x), (params.p_d / 2)-(params.lean_p_d + leanEndPoint) + Number(params.add_storage) - x);
            } else if (params.leantoAlignmentLeft == "3"){
                const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], - (params.p_d - doorEndPoint)/ 2 + x), - (params.p_d + doorEndPoint) / 2 + Number(params.add_storage) - x);
            } else {
                const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], - (params.lean_p_d - doorEndPoint)/ 2 + x), - (params.lean_p_d + doorEndPoint) / 2 + Number(params.add_storage) - x);
            }  

            if (const_var.b_s_c_n.userData.compType == "window" || const_var.b_s_c_n.userData.compType == "window_frameout") {
                const_var.b_s_c_n.position.y = Math.min(Math.max(m["y"], y), (params.lean_p_h - y));            
            } 
            break;

        case "L_L_R_S_W":
            if ( params.leantoAlignmentLeft == "2" ) {
                const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], (params.p_d / 2)- params.lean_p_d + leanEndPoint + x), (params.p_d / 2)- params.lean_p_d + Number(params.add_storage) - leanEndPoint - x);
            } else if (params.leantoAlignmentLeft == "3"){
                const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], - params.p_d / 2 + leanEndPoint + x), - params.p_d / 2 + Number(params.add_storage) - leanEndPoint - x);
            } else {
                const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], - params.lean_p_d / 2 + leanEndPoint + x), - params.lean_p_d / 2 + Number(params.add_storage) - leanEndPoint - x);
            } 
            break;

        case "R_L_F_S_W":
            const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"],( params.p_w / 2)+ leanEndPoint + x), (params.p_w / 2 + params.leanR_p_w) - leanEndPoint - x);
            break;

        case "R_L_L_S_W":
            if ( params.leantoAlignmentRight == "2" ) {
                const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], (params.p_d / 2)- params.leanR_p_d + leanEndPoint + x), (params.p_d / 2)- params.leanR_p_d + Number(params.add_storage_right) - leanEndPoint - x);
            } else if (params.leantoAlignmentRight == "3"){
                const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], - params.p_d / 2 + leanEndPoint +  x), - params.p_d / 2 + Number(params.add_storage_right) - leanEndPoint - x);
            } else {
                const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], - params.leanR_p_d / 2 + leanEndPoint + x), - params.leanR_p_d / 2 + Number(params.add_storage_right) - leanEndPoint - x);
            }

            break;

        case "R_L_R_S_W":
            if ( params.leantoAlignmentRight == "2" ) {
                const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], (params.p_d / 2)- params.leanR_p_d + leanEndPoint + x), (params.p_d / 2)- params.leanR_p_d + Number(params.add_storage_right) - leanEndPoint - x);
            } else if (params.leantoAlignmentRight == "3"){
                const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], - params.p_d / 2 + leanEndPoint + x), - params.p_d / 2 + Number(params.add_storage_right) - leanEndPoint - x);
            } else {
                const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], - params.leanR_p_d / 2 + leanEndPoint + x), - params.leanR_p_d / 2 + Number(params.add_storage_right) - leanEndPoint - x);
            } 

            if (const_var.b_s_c_n.userData.compType == "window" || const_var.b_s_c_n.userData.compType == "window_frameout") {
                const_var.b_s_c_n.position.y = Math.min(Math.max(m["y"], y), (params.leanR_p_h - y));            
            } 
            break;

        case "B_L_F_S_W":
            if ( params.leantoAlignmentBack== "2" ) {
                const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"],(params.p_w / 2) - params.leanB_p_d + leanEndPoint + x), (params.p_w / 2) - params.leanB_p_d + Number(params.add_storage_back) - leanEndPoint - x);
            } else if (params.leantoAlignmentBack== "3"){
                const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], - params.p_w / 2 + leanEndPoint + x), - params.p_w / 2 + Number(params.add_storage_back) - leanEndPoint - x);
            } else {
                const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], - params.leanB_p_d / 2 + leanEndPoint + x), - params.leanB_p_d / 2 + Number(params.add_storage_back) - leanEndPoint - x);
            }  

            if (const_var.b_s_c_n.userData.compType == "window" || const_var.b_s_c_n.userData.compType == "window_frameout") {
                const_var.b_s_c_n.position.y = Math.min(Math.max(m["y"], y), (params.leanB_p_h - y));            
            } 
            
            break;

        case "B_L_B_S_W":
            const_var.b_s_c_n.position.x = m["x"];
            //const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], - params.leanB_p_d / 2  + x), - params.leanB_p_d / 2 + Number(params.add_storage_back) - x);
            break;

        case "B_L_L_S_W":
            const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], - params.p_d / 2 - params.leanB_p_w + leanEndPoint + x), - params.p_d / 2 - leanEndPoint - x);
            break;

        case "F_L_F_S_W":
            if ( params.leantoAlignmentFront== "3" ) {
                const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"],(params.p_w / 2) - params.leanF_p_d + leanEndPoint + x), (params.p_w / 2) - params.leanF_p_d + Number(params.add_storage_front) - leanEndPoint - x);
            } else if (params.leantoAlignmentFront== "2"){
                const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], - params.p_w / 2 + leanEndPoint + x), - params.p_w / 2 + Number(params.add_storage_front) - leanEndPoint - x);
            } else {
                const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], - params.leanF_p_d / 2 + leanEndPoint + x), - params.leanF_p_d / 2 + Number(params.add_storage_front) - leanEndPoint - x);
            }

            if (const_var.b_s_c_n.userData.compType == "window" || const_var.b_s_c_n.userData.compType == "window_frameout") {
                const_var.b_s_c_n.position.y = Math.min(Math.max(m["y"], y), (params.leanF_p_h - y));            
            } 
            break;

        case "F_L_B_S_W":
            if ( params.leantoAlignmentFront== "3" ) {
                const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"],(params.p_w / 2) - params.leanF_p_d + leanEndPoint + x), (params.p_w / 2) - params.leanF_p_d + Number(params.add_storage_front) - leanEndPoint - x);
            } else if (params.leantoAlignmentFront== "2"){
                const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], - params.p_w / 2 + leanEndPoint + x), - params.p_w / 2 + Number(params.add_storage_front) - leanEndPoint - x);
            } else {
                const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], - params.leanF_p_d / 2 + leanEndPoint + x), - params.leanF_p_d / 2 + Number(params.add_storage_front) - leanEndPoint - x);
            }
            break;

        case "F_L_R_S_W":
            const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], params.p_d / 2 + leanEndPoint + x), params.p_d / 2 + params.leanF_p_w - leanEndPoint - x);
            break;
        default:
            console.log("Wall not defined: " + const_var.b_s_c_n.userData.wallName);
    }

    if (const_var.b_s_c_n.userData.compType == "window_frameout" || const_var.b_s_c_n.userData.compType == "window") const_var.b_s_c_n.position.y = Math.max(const_var.b_s_c_n.position.y, y);

    calculateDoorDistance(const_var.b_s_c_n);
    // if (const_var.callMesure == true) Arrows.centerVerticalDoorArrow(const_var.b_s_c_n.position, const_var.b_s_c_n.height, const_var.b_s_c_n.userData.wallName,const_var.b_s_c_n.uniqueId,const_var.b_s_c_n.uniqueId);

    if (const_var.callMesure) addWindowDimensions(const_var.b_s_c_n);
    doDoorDimensionsCSG([const_var.b_s_c_n]);
    if (!params.isBreezeway || (params.isBreezeway && (const_var.b_s_c_n.userData.wallName !== "c_b_l_w" && const_var.b_s_c_n.userData.wallName !== "c_b_r_w"))) {
        highlightLeg(const_var.b_s_c_n);
    }
    if ((const_var.legCutFeeMnfs.includes(Number(params.m_s_n))) && (const_var.b_s_c_n.userData.compType == "walkin" || const_var.b_s_c_n.userData.compType == "window")){
        walkinWindowlegCutPrice(const_var.b_s_c_n, false);
    }
}

function getBuildingSectionHeight(window) {
    let height = params.p_h;
    switch(window.userData.wallName) {
        case "c_b_l_s_r_w":
            height = const_var.scene.getObjectByName("c_b_l_s_r_w")? const_var.scene.getObjectByName("c_b_l_s_r_w").scale.y : params.p_h;
            break;
        
        case "c_b_r_s_l_w":
            height = const_var.scene.getObjectByName("c_b_r_s_l_w")? const_var.scene.getObjectByName("c_b_r_s_l_w").scale.y : params.p_h;
            break;

        case "F_S_L_R_W":
            height =  params.p_h;
            break;

        case "c_b_l_w":
        case "c_b_l_s_w":
        case "c_b_f_s_l_w":
        case "L_L_R_S_W":
            height = params.singleSlope ==true?params.p_h - 2*Number(params.p_r_pH): params.p_h;
            break;

        case "c_b_r_w":
        case "c_b_r_s_w":
        case "c_b_f_s_r_w":
        case "R_L_L_S_W":
        case "F_S_L_R_W":
            height = params.p_h;
            break;           

        case "F_L_F_W":
        case "F_L_F_S_W":
            height = params.leanF_p_h;            
            break;  

        case "F_L_L_W":
        case "F_L_R_W":
        case "F_L_B_S_W":
        case "F_L_R_S_W":
            height = params.leanF_p_h + Number(params.b_l_t_r_pFH);            
            break;  

        case "L_L_L_W":
        case "L_L_L_S_W":
            height = params.lean_p_h;
            break;  

        case "L_L_F_W":
        case "L_L_B_W":
        case "L_L_F_S_W":
        // case "L_L_R_S_W":
            height = params.lean_p_h + Number(params.b_l_t_r_pH);
            break;

        case "R_L_R_W":
        case "R_L_R_S_W":
            height = params.leanR_p_h;
            break; 

        case "R_L_F_W":
        case "R_L_B_W":
        case "R_L_F_S_W":
            height = params.leanR_p_h + Number(params.b_l_t_r_pRH);
            break; 

        case "B_L_S_W":
        case "B_L_F_S_W":
            height = params.leanB_p_h;
            break; 

        case "B_L_B_W":
        case "B_L_F_W":
        case "B_L_L_S_W":
            height = params.leanB_p_h + Number(params.b_l_t_r_pBH);
            break; 

        case "c_b_f_s_w":
        case "c_b_f_s_b_w":
        case "f_S_Gable":
            height = params.p_h + Number(params.p_r_pH);
            break; 


        case "c_b_f_w":
        case "c_b_l_s_f_w":
        case "CB_L_S_F_G":
        case "CB_L_S_4V_F_G":
        case "CB_R_S_F_G":
        case "CB_R_S_4V_F_G":
        case "c_b_r_s_f_w":
        case "L_S_F_2W_VT":
        case "L_S_F_W_VT":
        case "R_S_F_2W_VT":
        case "R_S_F_W_VT":
            height = params.singleSlope == true? params.p_h: params.p_h + Number(params.p_r_pH);
            break;

        case "c_b_b_w":
        case "c_b_l_s_b_w":
        case "CB_L_S_B_G":
        case "CB_L_S_4V_B_G":
        case "CB_R_S_B_G":
        case "CB_R_S_4V_B_G":
        case "c_b_r_s_b_w":
        case "L_S_B_W_VT":
        case "L_S_B_2W_VT":
        case "R_S_B_W_VT":
        case "R_S_B_2W_VT":
            height = params.singleSlope == true? params.p_h: params.p_h + Number(params.p_r_pH);
            break;

        default:
            console.log(window.userData.wallName);
    }

    return height;
}

export function addWindowDimensions(window) {
    if(window.userData && window.userData.compType.includes("window")){
        let height = getBuildingSectionHeight(window);
   

        window.updateMatrix();
        window.updateMatrixWorld();
        // let winInvMat = new THREE.Matrix4().copy(window.matrix).invert();

        window.traverse((child) => {
            if (!child.mainType && (child.name.includes("Width4L") || child.name.includes("Width4R"))) {
                child.visible = true;
            }
        })

        let winInvMat = new THREE.Matrix4().copy(window.matrixWorld).invert().transpose();

        let uValue = (height - window.position.y - (window.height/2)).toFixed(2);
        let uFeet = Math.floor(uValue);
        let uInch = Math.round((uValue - uFeet) * 12);
        if (uInch == 12) {
            uFeet = uFeet + 1;
            uInch = 0;
        }
        let uString = (uFeet > 0 && uInch > 0) ? (Math.abs(uFeet) + "'" + uInch + '"') : uInch === 0? (Math.abs(uFeet) + "'") : (Math.abs(uInch) + '"'); 
        let uGeometry = new THREE.TextGeometry( uString , {
            font:const_var.font, size: 0.4, height: 0.02,
            curveSegments: 3, bevelEnabled: true,bevelThickness: 0.01,
            bevelSize: 0, bevelSegments: 3,
        });
        let  material = new THREE.MeshPhongMaterial({color: 0x17202A});
        let uText = window.getObjectByName("uText");
        if (!uText){
            uText = new THREE.Mesh(uGeometry, material);    
            uText.name = "uText";
            uText.rotation.y = -Math.PI/2;
            uText.position.set( -0.2, window.height/2 + 1.5, 0.2);
            uText.scale.setFromMatrixScale(winInvMat).applyQuaternion(uText.quaternion.clone().invert());
            uText.visible = true;
            window.add(uText);
        } else {
            uText.geometry = uGeometry;
            uText.visible = true;
        }

        let dValue = (window.position.y - (window.height/2)).toFixed(2);
        let dFeet = Math.floor(dValue);
        let dInch = Math.round((dValue - dFeet) * 12);
        if (dInch == 12) {
            dFeet = dFeet + 1;
            dInch = 0;
        }
        let dString = (dFeet > 0 && dInch > 0) ? (Math.abs(dFeet) + "'" + dInch + '"') : dInch === 0? (Math.abs(dFeet) + "'") : (Math.abs(dInch) + '"'); 
        let dGeometry = new THREE.TextGeometry( dString , {
            font:const_var.font, size: 0.4, height: 0.02,
            curveSegments: 3, bevelEnabled: true,bevelThickness: 0.01,
            bevelSize: 0, bevelSegments: 3,
        });
        let dText = window.getObjectByName("dText");
        if (!dText){
            dText = new THREE.Mesh(dGeometry, material);    
            dText.name = "dText";
            dText.rotation.y = -Math.PI/2;
            dText.position.set( -0.2, -window.height/2 -2, 0.2);
            dText.scale.setFromMatrixScale(winInvMat).applyQuaternion(dText.quaternion.clone().invert());
            dText.visible = true;
            window.add(dText);
        } else {
            dText.geometry = dGeometry;
            dText.visible = true;
        }

        
        let vgeoemtry = new THREE.CylinderGeometry( 0.025, 0.025, height - 0.5, 5, 5 );
        let vline = window.getObjectByName("vline");
        if (!vline) {
            let cmaterial = new THREE.LineBasicMaterial( { color: 0x17202A} );
            let vline = new THREE.Mesh( vgeoemtry, cmaterial );
            vline.name = "vline"
            vline.scale.setFromMatrixScale(winInvMat);
            let vec3 = new THREE.Vector3(0, height/2, 0);
            window.worldToLocal(vec3);
            vline.position.set(-0.2, vec3.y, 0);
            vline.visible = true;
            vline.userData.height = vgeoemtry.parameters.height;
            window.add( vline );

            const hGeometry = new THREE.ConeGeometry( 0.06, 0.25, 64 );
            const hMaterial = new THREE.MeshBasicMaterial( {color: 0x17202A} );
            const uHead = new THREE.Mesh( hGeometry, hMaterial );
            uHead.name = "ArrowHead";
            uHead.position.y = height/2 - 0.125;
            vline.add( uHead );

            const dHead = new THREE.Mesh( hGeometry, hMaterial );
            dHead.name = "ArrowHead";
            dHead.position.y = -height/2 + 0.125;
            dHead.rotation.x = Math.PI;
            vline.add( dHead );

        } else {
            let vec3 = new THREE.Vector3(0, height/2, 0);
            window.worldToLocal(vec3);
            vline.position.y = vec3.y;
            vline.geometry = vgeoemtry;
            vline.userData.height = vgeoemtry.parameters.height;
            vline.children[0].position.y =  height/2 - 0.125;
            vline.children[1].position.y =  -height/2 + 0.125;
            vline.children[0].material.opacity = 1;
            vline.children[1].material.opacity = 1;
            vline.visible = true;
        }

        CenterBuildingArrows.updateHorizantalArrowsforDoors();
        LeanToArrows.updateHorizantalLeanArrowsforDoors();
        let arrowObjName = getArrowObjNameByWallname(window.userData.wallName);
        let oldArrowObj = const_var.scene.getObjectByName(arrowObjName);
        if (oldArrowObj) {
            let width = oldArrowObj.geometry.parameters.height;
            let hgeoemtry = new THREE.CylinderGeometry( 0.025, 0.025, width, 5, 5 );/*  oldArrowObj.geometry.clone(); */
            let hline = window.getObjectByName("hline");
            if (!hline) {
                let cmaterial = new THREE.LineBasicMaterial( { color: 0x17202A} );
                let hline = new THREE.Mesh( hgeoemtry, cmaterial );
                hline.name = "hline";
                hline.rotation.set(Math.PI/2 , 0, 0);
                hline.scale.setFromMatrixScale(winInvMat).applyQuaternion(hline.quaternion.clone().invert());
                hline.scale.set(Math.abs(hline.scale.x), Math.abs(hline.scale.y), Math.abs(hline.scale.z));
                oldArrowObj.updateWorldMatrix(true);
                let vec3 = new THREE.Vector3().setFromMatrixPosition(oldArrowObj.matrixWorld);
                window.worldToLocal(vec3);
                hline.position.set(-0.2, 0, vec3.z);
                hline.visible = true;
                hline.userData.height = hgeoemtry.parameters.height;
                window.add( hline );

                const hGeometry = new THREE.ConeGeometry( 0.06, 0.25, 64 );
                const hMaterial = new THREE.MeshBasicMaterial( {color: 0x17202A} );
                const uHead = new THREE.Mesh( hGeometry, hMaterial );
                uHead.name = "ArrowHead";
                uHead.position.y = width/2 - 0.125 + 0.2;
                hline.add( uHead );

                const dHead = new THREE.Mesh( hGeometry, hMaterial );
                dHead.name = "ArrowHead";
                dHead.position.y = -width/2 + 0.125 - 0.2;
                dHead.rotation.x = Math.PI;
                hline.add( dHead );

            } else {
                // oldArrowObj.updateMatrixWorld();
                oldArrowObj.updateWorldMatrix(true);
                let vec3 = new THREE.Vector3().setFromMatrixPosition(oldArrowObj.matrixWorld);
                window.worldToLocal(vec3);
                hline.position.set(-0.2, 0, vec3.z);
                hline.geometry = hgeoemtry;
                hline.userData.height = hgeoemtry.parameters.height;
                hline.children[0].position.y =  width/2 - 0.125 + 0.2;
                hline.children[1].position.y =  -width/2 + 0.125 - 0.2;
                hline.children[0].material.opacity = 1;
                hline.children[1].material.opacity = 1;
                hline.visible = true;
            }
        }
    }
}

function highlightLegComp(leg, door, arr) {
    let box1 = new THREE.Box3().setFromObject(leg);
    let box2 = new THREE.Box3().setFromObject(door.getObjectByName("trims"));
    if (!(box1.max.x < box2.min.x) && !(box2.max.x < box1.min.x) && 
        !(box1.max.y < box2.min.y) && !(box2.max.y < box1.min.y) &&
        !(box1.max.z < box2.min.z) && !(box2.max.z < box1.min.z)){

        leg.material.color.setRGB(1,0,0);
        leg.material.depthTest = false;
        leg.material.transparent = true;
        leg.material.opacity = 0.6;
    } else {
        leg.material.color.setRGB(0.984313725490196, 0.984313725490196, 0.984313725490196);
        leg.material.transparent = false;
        leg.material.depthTest = true;
        leg.material.opacity = 1;
        
    }

    let nmbr = leg.name.match(/(\d+)/g).join("");

    
    const_var.scene.traverse((child) => {
        arr.forEach((item) => {
            // let name = item.includes("legConnector") ? (item + nmbr + "x"): (item + nmbr);
            if (child.name.includes(item + nmbr + "x")) {
                child.material.color.copy(leg.material.color);
                child.material.depthTest = leg.material.depthTest;
                child.material.transparent = leg.material.transparent;
                child.material.opacity = leg.material.opacity;
                child.material.needsUpdate = true;
            }
        })                
    })
    
    leg.material.needsUpdate = true;
}

const cbSideHighlightLegNames =  [
    "leftLegs", 
    "rightLegs", 
    // "leftDoubleLeg", 
    // "rightDoubleLeg", 
    // "rightFrontLegConnector",
    // "leftFrontLegConnector",
    "f_S_L_R_Leg", 
    // "f_S_L_R_LegforDouble",
    "leftBow", 
    "rightBow",
    "regularBow",
    // "leftCorner",
    // "rightCorner",
    // "vrtFMBowCon",
    // "vrtFMBowCon-",
    // "middleVertFBow",
    // "leftFrontBowS",
    // "rightFrontBowS",
    // "leftFrontBowS-ECT",
    // "rightFrontBowS-ECT",
    // "hrzFMBow",
    // "mdlLftVrtFBw-",
    // "mdlLftVrtFBwS-sbst-",
    // "mdlRgtVrtFBw",
    // "mdlRgtVrtFBwS-sbst"
]

const leftLeanHighlightLegNames = [
    "leftLeantoLeg",
    // "leftLeantoDoubleLeg",
    // "lllegConnector",
    "PorchLeftMiddleLeg",
    // "PorchLeftMiddleDoubleLeg",
    // "legConnectorL",
    "leftLeanToBow",
    "LeftMiddleBow",
    // "leftLeanToregularBow",
    // "leftLeanToBowR",
    // "leanToleftCorner", 
    // "LeftMiddleCorner",
]
const frontLeanHighlightLegNames = [
    "frontLeanToLeg",
    // "frontLeanToDoubleLeg",
    // "fllegConnector",
    "PorchFrontMiddleLeg",
    // "PorchFrontMiddleDoubleLeg",
    // "legConnectorF",
    "frontLeanToBow",
    "FrontMiddleBow",
    // "leftLeanToRegularBow",
    // "frontLeanToBowR",
    // "frontLeanToCorner", 
    // "FrontMiddleCorner",
]

const rightLeanHighlightLegNames = [
    "rightLeanToLegs",
    // "rightLeanToDoubleLegs",
    // "rllegConnector",
    "PorchRightMiddleLeg",
    // "PorchRightMiddleDoubleLeg",
    // "legConnectorR",
    "rightLeanToFrontBow",
    "RightMiddleBow",
    // "rightLeanToRegularBow",
    // "rightLeanToFrontBowR",
    // "leanToRightFrontCorner", 
    // "RightMiddleCorner",
]

const backLeanHighlightLegNames = [
    "backLeanToLeg",
    // "backLeanToDoubleLeg",
    // "bllegConnector",
    "PorchBackMiddleLeg",
    // "PorchBackMiddleDoubleLeg",
    // "legConnectorB",
    "backLeanToBow",
    "BackMiddleBow",
    // "backLeanToRegularBow",
    // "backLeanToBowR",
    // "backLeanToCorner", 
    // "BackMiddleCorner",
]

function highlightLeg(door) {
    if (door) {  
        let doorsOnSides = getDoorsOnSides([door])

        for (let side in doorsOnSides) {
            if(doorsOnSides[side].length > 0) {
                for(let name in const_var.legsForCut[side]) {
                    let leg = const_var.legsForCut[side][name];
                    if (leg.visible === true && leg.parent.parent) {
                        // if (leg.visible === true && leg.parent.parent === const_var.scene) {
                        if (leg.name.includes("leftLegs") || leg.name.includes("rightLegs")){
                            if (!(const_var.selectedTabKeyForWheel == 'doorwindow' && (door.userData.wallName == "L_L_R_S_W" || door.userData.wallName == "R_L_L_S_W"))) {
                                highlightLegComp(leg, door, cbSideHighlightLegNames);
                            }
                        } else if (leg.name.includes("leftLeantoLeg") || leg.name.includes("PorchLeftMiddleLeg")) {
                            highlightLegComp(leg, door, leftLeanHighlightLegNames);
                        } else if (leg.name.includes("frontLeanToLeg") || leg.name.includes("PorchFrontMiddleLeg")) {
                            highlightLegComp(leg, door, frontLeanHighlightLegNames);
                        } else if (leg.name.includes("rightLeanToLegs") || leg.name.includes("PorchRightMiddleLeg")) {
                            highlightLegComp(leg, door, rightLeanHighlightLegNames);
                        } else if (leg.name.includes("backLeanToLeg") || leg.name.includes("PorchBackMiddleLeg")) {
                            highlightLegComp(leg, door, backLeanHighlightLegNames);
                        } 
                    }
                }
            }
        }
    }
}

function getArrowObjNameByWallname(wallname) {
    let arrowObjName;
    switch(wallname) {
        case "c_b_f_w":         arrowObjName =  "frontDArrowBody"; break;
        case "c_b_l_w":         arrowObjName =  "leftDoorArrowBody"; break;
        case "c_b_r_w":         arrowObjName =  "rightDoorArrowBody";    break;
        case "F_S_L_R_W":       arrowObjName =  "rightDoorArrowBody";    break;
        case "c_b_b_w":         arrowObjName =  "backDArrowBody";    break;
        case "c_b_f_s_w":       arrowObjName =  "frontArrowBodyUH";  break;
        case "c_b_l_s_w":       arrowObjName =  "leftArrowBodyUH";   break;
        case "c_b_r_s_w":       arrowObjName =  "rightArrowBodyUH";  break;
        case "c_b_f_s_l_w":     arrowObjName =  "frontStorageLeftArrowBodyUH";   break;
        case "c_b_f_s_r_w":     arrowObjName =  "frontStorageRightSideArrowBodyUH";   break;
        case "c_b_f_s_b_w":     arrowObjName =  "FSBWArrowBodyHU";   break;
        case "c_b_l_s_f_w":     arrowObjName =  "LSFArrowBodyUH";    break;
        case "c_b_l_s_b_w":     arrowObjName =  "LSBArrowBodyUH";    break;
        case "c_b_l_s_r_w":     arrowObjName =  "leftStorageRSideArrowBody"; break;
        case "c_b_r_s_f_w":     arrowObjName =  "RSFArrowBody";  break;
        case "c_b_r_s_b_w":     arrowObjName =  "RSBArrowBodyRHU";   break;
        case "c_b_r_s_l_w":     arrowObjName =  "rightStorageLSideArrowBody";    break;
        case "L_L_L_W":         arrowObjName =  "LLSDArrowBody";     break;
        case "L_L_F_W":     arrowObjName = "LLFrontDoorArrowBody"; break;
        case "L_L_B_W":     arrowObjName = "backDoorArrowBody"; break;
        case "R_L_F_W":     arrowObjName = "RLDfrontArrowBody"; break;
        case "R_L_B_W":     arrowObjName = "RLDBrontArrowBody"; break;
        case "R_L_R_W":     arrowObjName = "RLSArrowBody"; break;
        case "F_L_L_W":     arrowObjName = "FLDBArrowBody"; break;
        case "F_L_R_W":     arrowObjName = "FLDFArrowBody"; break;
        case "F_L_F_W":     arrowObjName = "FLSArrowForDBody"; break;
        case "B_L_B_W":     arrowObjName = "BLDBArrowBody"; break;
        case "B_L_F_W":     arrowObjName = "BLDFArrowBody"; break;
        case "B_L_S_W":     arrowObjName = "BLDSArrowBody"; break;
        case "L_L_L_S_W":   arrowObjName = "llStoreLSideArrowBodyUH"    ; break;
        case "L_L_F_S_W":   arrowObjName = "LLFStoreDoorArrowBody"; break;
        case "R_L_R_S_W":   arrowObjName = "RLStoreRSideArrowBodyUH"; break;
        case "R_L_F_S_W":   arrowObjName = "RLFStoreDoorArrowBody"; break;
        case "F_L_F_S_W":   arrowObjName = "FLStoreSArrowForDBody"; break;
        case "F_L_R_S_W":   arrowObjName = "FLDRSArrowBody" ; break;
        case "B_L_F_S_W":   arrowObjName = "BLStoreDSArrowBody"; break;
        case "B_L_L_S_W":   arrowObjName = "BLDFArrowBody"; break;
        case "L_L_R_S_W":   arrowObjName = "llStoreRSideArrowBodyUH"; break;
        case "R_L_L_S_W":   arrowObjName = "RLStoreLSideArrowBodyUH"; break;
        case "L_S_F_W_VT":   arrowObjName = "LSFArrowBodyUH"; break;
        case "L_S_F_2W_VT":   arrowObjName = "LSFArrowBodyUH"; break;
        case "R_S_F_W_VT":   arrowObjName = "RSFArrowBodyRHU"; break;
        case "R_S_F_2W_VT":   arrowObjName = "RSFArrowBodyRHU"; break;
        case "L_S_B_W_VT":   arrowObjName = "LSBArrowBodyUH"; break;
        case "L_S_B_2W_VT":   arrowObjName = "LSBArrowBodyUH"; break;
        case "R_S_B_W_VT":   arrowObjName = "RSBArrowBodyRHU"; break;
        case "R_S_B_2W_VT":   arrowObjName = "RSBArrowBodyRHU"; break;        
        default:
            console.log("wallname not defined (getArrowObjNameByWallname): " + wallname);
    }

    return arrowObjName;
}

export function dehighlightLegs() {

    let hArray = cbSideHighlightLegNames
    .concat(leftLeanHighlightLegNames)
    .concat(frontLeanHighlightLegNames)
    .concat(rightLeanHighlightLegNames)
    .concat(backLeanHighlightLegNames);
   
    const_var.scene.traverse((child) => {
        hArray.forEach((item) => {
            if (child.name.includes(item)) {
                child.material.color.setRGB(0.984313725490196, 0.984313725490196, 0.984313725490196);
                child.material.depthTest = true;
                child.material.transparent = false;
                child.material.opacity = 1;
                child.material.needsUpdate = true;
            }
        })                
    })

}


function walkinWindowlegCutPrice(door,isLoadDoor) {
    // console.log({door,isLoadDoor} ,"walkinWindowlegCutPrice",);
    const walls = { c_b_l_w: "left", c_b_r_w: "right", F_S_L_R_W: "right", c_b_l_s_w: "left",c_b_r_s_w:"right",
        L_L_L_W: "leftLean", L_L_L_S_W: "leftLean", R_L_R_W: "rightLean", R_L_R_S_W: "rightLean",
        F_L_F_W: "frontLean", F_L_F_S_W: "frontLean", B_L_S_W: "backLean", B_L_F_S_W: "backLean",
    } 
    
    if (door) {  
        const side = walls[door.userData.wallName];
        params.legCutFee = false;
        // console.log(const_var.legsForCutFee, "side", side ,door.userData.wallName ,const_var.legsForCutFee[side]);
        for(let name in const_var.legsForCutFee[side]) {
            let leg = const_var.legsForCutFee[side][name];
            const isLeg = ( leg.name.includes("leftLegs") || leg.name.includes("rightLegs") ||
                                leg.name.includes("leftLeantoLeg") || leg.name.includes("PorchLeftMiddleLeg") ||
                                leg.name.includes("frontLeanToLeg") || leg.name.includes("PorchFrontMiddleLeg") ||
                                leg.name.includes("rightLeanToLegs") || leg.name.includes("PorchRightMiddleLeg") ||
                                leg.name.includes("backLeanToLeg") || leg.name.includes("PorchBackMiddleLeg") 
                            );

            if ((leg.visible === true && leg?.parent?.parent)) {
                if (isLeg) {
                    let box1 = new THREE.Box3().setFromObject(leg);
                    let box2 = new THREE.Box3().setFromObject(door.getObjectByName("trims"));
                    if (!(box1.max.x < box2.min.x) && !(box2.max.x < box1.min.x) && 
                        !(box1.max.y < box2.min.y) && !(box2.max.y < box1.min.y) &&
                        !(box1.max.z < box2.min.z) && !(box2.max.z < box1.min.z)){
                        params.legCutFee = true;
                        // console.log(params.legCutFee ,"-for move Door is on the leg-");
                        if (isLoadDoor) updateWalkinWindowlegCutPrice(door.uniqueId);
                        break;
                    }
                }
            }
        }
    }


}



function onRendererMouseUpForDoor(event) {
    //console.log(event,"eventeventevent")
    if (const_var.cupola){
        // if (const_var.isheilightCupola){
        //     const_var.cupola.position.z = const_var.previousCupolaZpositionOnMove; 
        //     moveCupola();
        //     const_var.isheilightCupola = false;
        // }
        const_var.dragCupola = false;
        const_var.controls.enableRotate = true;
        event.target.style.cursor = "";
        const_var.scene.remove( const_var.scene.getObjectByName("cupolaCylinder"));
    }
    if(const_var.b_s_c_n)
    {
        //console.log(event,"eventeventevent1111111")
        const_var.dragging = false;
        const_var.controls.enableRotate = true;
        event.target.style.cursor = "";
        if (const_var.b_s_c_n != undefined && const_var.b_s_c_n != null && const_var.b_s_c_n.userData.compType != undefined/*  && const_var.b_s_c_n.userData.compType.includes('frameout') == true */) {
            
            if ((const_var.legCutFeeMnfs.includes(Number(params.m_s_n))) && (const_var.b_s_c_n.userData.compType == "walkin" || const_var.b_s_c_n.userData.compType == "window")) {
               let isPriceChanged = updateWalkinWindowlegCutPrice(const_var.b_s_c_n.uniqueId);
               if (isPriceChanged) store.dispatch(setPricingForComponent(true, const_var.sum,const_var.entry_points.length-1));
            }
            if (params.isDoorOverlap) {
                let checkWallValue = const_var.checkWallClose[const_var.b_s_c_n.userData.wallName];
                var trimCalor = params.p_t_c.replace("#", "0x");
                if(checkWallValue == 'utility') {
                  trimCalor = params.p_t_c.replace("#", "0x");
                } else {
                  if (params[checkWallValue]=='Open') {
                    trimCalor = '0x94989B';
                  }
               }
                const_var.b_s_c_n.position.copy(const_var.b_s_c_n.userData.lastPos);
                const_var.newDoorsArray.forEach((d) => {
                    if (d.userData.wallName == const_var.b_s_c_n.userData.wallName) {
                        d.traverse(t => {
                            if (t.name == "trims") {
                                t.material.emissive.setHex(trimCalor);
                            }
                        })       
                    }
                })
                params.isDoorOverlap = false;
            } else {
                checkDoorWallCSG(const_var.b_s_c_n);
                if(params.p_w_c_n==true)
                {
                    checkDoorWainscotCSG(const_var.b_s_c_n);
                }
            }
           
            dehighlightLegs();

            highlightSection((!params.isBreezeway) ? wallnameBySec[const_var.b_s_c_n.userData.wallName] : breezewayWallnameByStorage[const_var.b_s_c_n.userData.wallName]);
        }

        hideMeasurements(const_var.b_s_c_n);
        if(const_var.scene.getObjectByName("fDoorArrows")!=undefined)
        {
            const_var.scene.getObjectByName("fDoorArrows").visible = false;
        }
        if(const_var.scene.getObjectByName("bDoorArrows")!=undefined)
        {
            const_var.scene.getObjectByName("bDoorArrows").visible = false;
        }

        const_var.scene.remove(intersectedWall);
        intersectedWall = null;

        const_var.b_s_c_n = null;
    }
}

function hideMeasurements(obj) {
    if (obj.userData?.compType.includes("window")) {
        obj.traverseVisible((child) => {
            if (child.name.includes("hline") || child.name.includes("vline") || child.name.includes("dText") || child.name.includes("uText") || child.name.includes("Width4L") || child.name.includes("Width4R")) child.visible = false;
        })
    }
}

function getDoorsByWall(rWallname) {
    let sFunc = (wallname, obj, door, forced) => {
        if ((door && door.userData.cuttingFeatureAvailable === true) || forced === true) {
            switch(wallname) {
                case "c_b_l_w":
                case "c_b_l_s_w":
                case "c_b_f_s_l_w":
                case "L_L_R_S_W":
                    if(!obj["c_b_l_w"]) obj["c_b_l_w"] = [];
                    if(!obj["c_b_l_s_w"]) obj["c_b_l_s_w"] = [];
                    if(!obj["c_b_f_s_l_w"]) obj["c_b_f_s_l_w"] = [];
                    if(!obj["L_L_R_S_W"]) obj["L_L_R_S_W"] = [];
                    if(!obj["c_b_l_w1"]) obj["c_b_l_w1"] = [];
        
                    if (door) {
                        obj["c_b_l_w"].push(door);
                        obj["c_b_l_s_w"].push(door);
                        obj["c_b_f_s_l_w"].push(door);
                        obj["L_L_R_S_W"].push(door);
                        obj["c_b_l_w1"].push(door);
                    }
                    break;
        
                case "c_b_r_w":
                case "c_b_r_s_w":
                case "c_b_f_s_r_w":
                case "R_L_L_S_W":
                case "F_S_L_R_W":
                    if(!obj["c_b_r_w"]) obj["c_b_r_w"] = [];
                    if(!obj["c_b_r_s_w"]) obj["c_b_r_s_w"] = [];
                    if(!obj["c_b_f_s_r_w"]) obj["c_b_f_s_r_w"] = [];
                    if(!obj["R_L_L_S_W"]) obj["R_L_L_S_W"] = [];
                    if(!obj["F_S_L_R_W"]) obj["F_S_L_R_W"] = [];
                    if(!obj["F_S_L_R_W1"]) obj["F_S_L_R_W1"] = [];
                    if(!obj["c_b_r_w1"]) obj["c_b_r_w1"] = [];
        
                    if (door) {
                        obj["c_b_r_w"].push(door);
                        obj["c_b_r_s_w"].push(door);
                        obj["c_b_f_s_r_w"].push(door);
                        obj["R_L_L_S_W"].push(door);
                        obj["F_S_L_R_W"].push(door);
                        obj["F_S_L_R_W1"].push(door);
                        obj["c_b_r_w1"].push(door);
                    }
                    break;           
        
                case "F_L_F_W":
                case "F_L_F_S_W":
                    if(!obj["F_L_F_W"]) obj["F_L_F_W"] = [];
                    if(!obj["F_L_F_S_W"]) obj["F_L_F_S_W"] = [];
                    if(!obj["F_L_F_W1"]) obj["F_L_F_W1"] = [];
        
                    if (door) {
                        obj["F_L_F_W"].push(door);
                        obj["F_L_F_S_W"].push(door);
                        obj["F_L_F_W1"].push(door);
                    }
                    break;  
        
                case "L_L_L_W":
                case "L_L_L_S_W":
                    if(!obj["L_L_L_W"]) obj["L_L_L_W"] = [];
                    if(!obj["L_L_L_S_W"]) obj["L_L_L_S_W"] = [];
                    if(!obj["L_L_L_W1"]) obj["L_L_L_W1"] = [];

        
                    if (door) {
                        obj["L_L_L_W"].push(door);
                        obj["L_L_L_S_W"].push(door);
                        obj["L_L_L_W1"].push(door);
                    }
                    break;  
        
                case "R_L_R_W":
                case "R_L_R_S_W":
                    if(!obj["R_L_R_W"]) obj["R_L_R_W"] = [];
                    if(!obj["R_L_R_S_W"]) obj["R_L_R_S_W"] = [];
                    if(!obj["R_L_R_W1"]) obj["R_L_R_W1"] = [];
        
                    if (door) {
                        obj["R_L_R_W"].push(door);
                        obj["R_L_R_S_W"].push(door);
                        obj["R_L_R_W1"].push(door);
                    }
                    break; 
        
                case "B_L_S_W":
                case "B_L_F_S_W":
                    if(!obj["B_L_S_W"]) obj["B_L_S_W"] = [];
                    if(!obj["B_L_F_S_W"]) obj["B_L_F_S_W"] = [];
                    if(!obj["B_L_S_W1"]) obj["B_L_S_W1"] = [];
        
                    if (door) {
                        obj["B_L_S_W"].push(door);
                        obj["B_L_F_S_W"].push(door);
                        obj["B_L_S_W1"].push(door);
                    }
                    break; 

                case "c_b_f_s_w":
                case "f_S_Gable":
                case "F_S_L_F_S_G":
                    if(!obj["c_b_f_s_w"]) obj["c_b_f_s_w"] = [];
                    if(!obj["f_S_Gable"]) obj["f_S_Gable"] = [];
                    if(!obj["F_S_L_F_S_G"]) obj["F_S_L_F_S_G"] = [];
        
                    if (door) {
                        obj["c_b_f_s_w"].push(door);
                        obj["f_S_Gable"].push(door);
                        obj["F_S_L_F_S_G"].push(door);
                    }
                    break; 
        
                case "c_b_f_w":
                case "c_b_l_s_f_w":
                case "CB_L_S_F_G":
                case "CB_L_S_4V_F_G":
                case "CB_R_S_F_G":
                case "CB_R_S_4V_F_G":
                case "c_b_r_s_f_w":
                case "L_S_F_2W_VT":
                case "L_S_F_W_VT":
                case "R_S_F_2W_VT":
                case "R_S_F_W_VT":

                    if(!obj["c_b_f_w"]) obj["c_b_f_w"] = [];
                    if(!obj["c_b_l_s_f_w"]) obj["c_b_l_s_f_w"] = [];
                    if(!obj["c_b_r_s_f_w"]) obj["c_b_r_s_f_w"] = [];
                    if(!obj["fGable"]) obj["fGable"] = [];
                    if(!obj["CB_L_S_F_G"]) obj["CB_L_S_F_G"] = [];
                    if(!obj["CB_L_S_4V_F_G"]) obj["CB_L_S_4V_F_G"] = [];
                    if(!obj["CB_R_S_F_G"]) obj["CB_R_S_F_G"] = [];
                    if(!obj["CB_R_S_4V_F_G"]) obj["CB_R_S_4V_F_G"] = [];
                    if(!obj["L_S_F_2W_VT"]) obj["L_S_F_2W_VT"] = [];
                    if(!obj["L_S_F_W_VT"]) obj["L_S_F_W_VT"] = [];
                    if(!obj["R_S_F_2W_VT"]) obj["R_S_F_2W_VT"] = [];
                    if(!obj["R_S_F_W_VT"]) obj["R_S_F_W_VT"] = [];
                    if(!obj["c_b_f_w1"]) obj["c_b_f_w1"] = [];
                    if(!obj["F_S_L_F_G"]) obj["F_S_L_F_G"] = [];
        
        
                    if (door) {
                        obj["c_b_f_w"].push(door);
                        obj["c_b_l_s_f_w"].push(door);
                        obj["c_b_r_s_f_w"].push(door);
                        obj["fGable"].push(door);
                        obj["CB_L_S_F_G"].push(door);
                        obj["CB_L_S_4V_F_G"].push(door);
                        obj["CB_R_S_F_G"].push(door);
                        obj["CB_R_S_4V_F_G"].push(door);
                        obj["L_S_F_2W_VT"].push(door);
                        obj["L_S_F_W_VT"].push(door);
                        obj["R_S_F_2W_VT"].push(door);
                        obj["R_S_F_W_VT"].push(door);
                        obj["c_b_f_w1"].push(door);
                        obj["F_S_L_F_G"].push(door);
                    }
                    break;
        
                case "c_b_b_w":
                case "c_b_l_s_b_w":
                case "CB_L_S_B_G":
                case "CB_L_S_4V_B_G":
                case "CB_R_S_B_G":
                case "CB_R_S_4V_B_G":
                case "c_b_r_s_b_w":
                case "L_S_B_W_VT":
                case "L_S_B_2W_VT":
                case "R_S_B_W_VT":
                case "R_S_B_2W_VT":
                case "F_S_L_B_G":
        
                    if(!obj["c_b_b_w"]) obj["c_b_b_w"] = [];
                    if(!obj["c_b_l_s_b_w"]) obj["c_b_l_s_b_w"] = [];
                    if(!obj["c_b_r_s_b_w"]) obj["c_b_r_s_b_w"] = [];
                    if(!obj["bGable"]) obj["bGable"] = [];
                    if(!obj["CB_L_S_B_G"]) obj["CB_L_S_B_G"] = [];
                    if(!obj["CB_L_S_4V_B_G"]) obj["CB_L_S_4V_B_G"] = [];
                    if(!obj["CB_R_S_B_G"]) obj["CB_R_S_B_G"] = [];
                    if(!obj["CB_R_S_4V_B_G"]) obj["CB_R_S_4V_B_G"] = [];
                    if(!obj["L_S_B_W_VT"]) obj["L_S_B_W_VT"] = [];
                    if(!obj["L_S_B_2W_VT"]) obj["L_S_B_2W_VT"] = [];
                    if(!obj["R_S_B_W_VT"]) obj["R_S_B_W_VT"] = [];
                    if(!obj["R_S_B_2W_VT"]) obj["R_S_B_2W_VT"] = [];
                    if(!obj["c_b_b_w1"]) obj["c_b_b_w1"] = [];
                    if(!obj["F_S_L_B_G"]) obj["F_S_L_B_G"] = [];
        
                    if (door) {
                        obj["c_b_b_w"].push(door);
                        obj["c_b_l_s_b_w"].push(door);
                        obj["c_b_r_s_b_w"].push(door);
                        obj["bGable"].push(door);
                        obj["CB_L_S_B_G"].push(door);
                        obj["CB_L_S_4V_B_G"].push(door);
                        obj["CB_R_S_B_G"].push(door);
                        obj["CB_R_S_4V_B_G"].push(door);
                        obj["L_S_B_W_VT"].push(door);
                        obj["L_S_B_2W_VT"].push(door);
                        obj["R_S_B_W_VT"].push(door);
                        obj["R_S_B_2W_VT"].push(door);
                        obj["c_b_b_w1"].push(door);
                        obj["F_S_L_B_G"].push(door);
                    }
                    break;

                case "L_L_F_W":
                    if(!obj["L_L_F_W"]) obj["L_L_F_W"] = [];
                    if(!obj["L_L_F_W1"]) obj["L_L_F_W1"] = [];
                    if(!obj["L_L_F_G"]) obj["L_L_F_G"] = [];
                    if (door) {
                        obj["L_L_F_W"].push(door);
                        obj["L_L_F_W1"].push(door);
                        obj["L_L_F_G"].push(door);
                    }
                    break;

                case "L_L_B_W":
                    if(!obj["L_L_B_W"]) obj["L_L_B_W"] = [];
                    if(!obj["L_L_B_W1"]) obj["L_L_B_W1"] = [];
                    if(!obj["L_L_B_G"]) obj["L_L_B_G"] = [];
                    if (door) {
                        obj["L_L_B_W"].push(door);
                        obj["L_L_B_W1"].push(door);
                        obj["L_L_B_G"].push(door);
                    }
                    break;
                    
                case "R_L_B_W":
                    if(!obj["R_L_B_W"]) obj["R_L_B_W"] = [];
                    if(!obj["R_L_B_W1"]) obj["R_L_B_W1"] = [];
                    if(!obj["R_L_B_G"]) obj["R_L_B_G"] = [];
                    if (door) {
                        obj["R_L_B_W"].push(door);
                        obj["R_L_B_W1"].push(door);
                        obj["R_L_B_G"].push(door);
                    }
                    break
                case "R_L_F_W":
                    if(!obj["R_L_F_W"]) obj["R_L_F_W"] = [];
                    if(!obj["R_L_F_W1"]) obj["R_L_F_W1"] = [];
                    if(!obj["R_L_F_G"]) obj["R_L_F_G"] = [];
                    if (door) {
                        obj["R_L_F_W"].push(door);
                        obj["R_L_F_W1"].push(door);
                        obj["R_L_F_G"].push(door);
                    }
                    break;
                case "F_L_R_W":
                    if(!obj["F_L_R_W"]) obj["F_L_R_W"] = [];
                    if(!obj["F_L_R_W1"]) obj["F_L_R_W1"] = [];
                    if(!obj["F_L_R_G"]) obj["F_L_R_G"] = [];
                    if (door) {
                        obj["F_L_R_W"].push(door);
                        obj["F_L_R_W1"].push(door);
                        obj["F_L_R_G"].push(door);
                    }
                break;

                case "F_L_L_W":
                    if(!obj["F_L_L_W"]) obj["F_L_L_W"] = [];
                    if(!obj["F_L_L_W1"]) obj["F_L_L_W1"] = [];
                    if(!obj["F_L_L_G"]) obj["F_L_L_G"] = [];
                    if (door) {
                        obj["F_L_L_W"].push(door);
                        obj["F_L_L_W1"].push(door);
                        obj["F_L_L_G"].push(door);
                    }
                break;
            
                case "B_L_B_W":
                    if(!obj["B_L_B_W"]) obj["B_L_B_W"] = [];
                    if(!obj["B_L_B_W1"]) obj["B_L_B_W1"] = [];
                    if(!obj["B_L_R_G"]) obj["B_L_R_G"] = [];
                    if (door) {
                        obj["B_L_B_W"].push(door);
                        obj["B_L_B_W1"].push(door);
                        obj["B_L_R_G"].push(door);
                    }
                break;

                case "B_L_F_W":
                    if(!obj["B_L_F_W"]) obj["B_L_F_W"] = [];
                    if(!obj["B_L_F_W1"]) obj["B_L_F_W1"] = [];
                    if(!obj["B_L_L_G"]) obj["B_L_L_G"] = [];
                    if (door) {
                        obj["B_L_F_W"].push(door);
                        obj["B_L_F_W1"].push(door);
                        obj["B_L_L_G"].push(door);
                    }
                break;
                
                default:
                    if(!obj[wallname]) obj[wallname] = [];
                    if (door) obj[wallname].push(door);
            }
        }

    }

    let obj = {};
    if (rWallname) sFunc(rWallname, obj, undefined, true);
    const_var.newDoorsArray.forEach((door) => {
        sFunc(door.userData.wallName, obj, door);
    });

    return obj;
}

export function updateDoorWalls() {
    
    updateDoorWallNameForSideCombo();

    let obj = getDoorsByWall(const_var.removed_door_wallname);

    for(let wallName in obj) {
        let mesh = const_var.scene.getObjectByName(wallName);
        if (mesh) doDoorWallCSG(mesh, obj[wallName]);

        mesh = const_var.scene.getObjectByName(wallName + "_inner");
        if (mesh) doDoorWallCSG(mesh, obj[wallName]);

        mesh = const_var.scene.getObjectByName(wallName + "_jtrim");
        if (mesh) doDoorWallTrimCSG(mesh);
    }
}

function updateDoorWallNameForSideCombo() {
        if (params.p_v_w === true) {
        const_var.newDoorsArray.forEach((door) => {
            switch(door.userData.wallName) {
                case "c_b_l_s_f_w":
                    door.userData.wallName = "L_S_F_2W_VT";
                    break;
                case "c_b_l_s_b_w":
                    door.userData.wallName = "L_S_B_2W_VT";
                    break;
                case "c_b_r_s_f_w":
                    door.userData.wallName = "R_S_F_2W_VT";
                    break;
                case "c_b_r_s_b_w":
                    door.userData.wallName = "R_S_B_2W_VT";
                    break;
            }
        })
    } else {
        const_var.newDoorsArray.forEach((door) => {
            switch(door.userData.wallName) {
                case "L_S_F_2W_VT":
                    door.userData.wallName = "c_b_l_s_f_w";
                    break;
                case "L_S_B_2W_VT":
                    door.userData.wallName = "c_b_l_s_b_w";
                    break;
                case "R_S_F_2W_VT":
                    door.userData.wallName = "c_b_r_s_f_w";
                    break;
                case "R_S_B_2W_VT":
                    door.userData.wallName = "c_b_r_s_b_w";
                    break;
            }
        })
    }
}



function checkDoorWallCSG(door) {
    // if (door && door.userData.compType.includes('frameout') == true) {
        let wallname = door.userData.wallName;
        updateDoorWalls();
        doDoorlegsCSG();
        doDoorHatChannelsCSG();
        // console.log(door,"door.userData");
        if (door.userData.compType == "walkin_frameout") {
            door.children[0].visible = false;
            door.children[1].visible = false;
            door.children[3].visible = false;
        } if (door.userData.compType == "window_frameout") {
            // door.children[0].visible = false;
            door.children[1].visible = false;
            door.children[2].visible = false;
            door.children[3].visible = false;
        } if (door.userData.compType == "garage_door_frameout") {
            door.children[1].visible = false;
        }
        //door.children[1].visible = false;
    // }
}

function getDoorsOnSides(doors = []) {
    let frameouts = {
        front: [],
        back: [],
        left: [],
        right: [],
        frontLean: [],
        backLean: [],
        leftLean: [],
        rightLean: [],
        leftFrontLean: [],
        leftBackLean: [],
        rightFrontLean: [],
        rightBackLean: [],
        frontFrontLean: [],
        frontBackLean: [],
        backFrontLean: [],
        backBackLean: []
    }
    
    doors.forEach((child) => {
        // if (child.userData.compType.includes('frameout')){
        if (child.userData.cuttingFeatureAvailable === true) {
            switch(child.userData.wallName){
                case "c_b_l_w": 
                case "c_b_l_s_w":
                case "c_b_f_s_l_w":
                case "L_L_R_S_W":
                    frameouts["left"].push(child);
                    break;
                case "c_b_r_w": 
                case "c_b_r_s_w":
                case "c_b_f_s_r_w":
                case "R_L_L_S_W":
                case "F_S_L_R_W":
                    frameouts["right"].push(child);
                    break;
                case "c_b_f_w": 
                case "c_b_l_s_f_w":
                case "CB_L_S_F_G":
                case "CB_L_S_4V_F_G":
                case "CB_R_S_F_G":
                case "CB_R_S_4V_F_G":
                case "c_b_r_s_f_w":
                case "L_S_F_2W_VT":
                case "L_S_F_W_VT":
                case "R_S_F_2W_VT":
                case "R_S_F_W_VT":
                    frameouts["front"].push(child);
                    break;
                case "c_b_b_w": 
                case "c_b_l_s_b_w":
                case "CB_L_S_B_G":
                case "CB_L_S_4V_B_G":
                case "CB_R_S_B_G":
                case "CB_R_S_4V_B_G":
                case "c_b_r_s_b_w":
                case "L_S_B_W_VT":
                case "L_S_B_2W_VT":
                case "R_S_B_W_VT":
                case "R_S_B_2W_VT":
                    frameouts["back"].push(child);
                    break;
                case "F_L_F_W": 
                case "F_L_F_S_W":
                    frameouts["frontLean"].push(child);
                    break;
                case "L_L_L_W": 
                case "L_L_L_S_W":
                    frameouts["leftLean"].push(child);
                    break;
                case "B_L_S_W": 
                case "B_L_F_S_W":
                    frameouts["backLean"].push(child);
                    break;
                case "R_L_R_W": 
                case "R_L_R_S_W":
                    frameouts["rightLean"].push(child);
                    break;
                // case "L_L_F_S_W":
                case "L_L_F_W":
                    frameouts["leftFrontLean"].push(child);
                    break;
                case "L_L_B_W":
                    frameouts["leftBackLean"].push(child);
                    break;
                case "R_L_F_W":
                // case "R_L_F_S_W":
                    frameouts["rightFrontLean"].push(child);
                    break;
                case "R_L_B_W":
                    frameouts["rightBackLean"].push(child);
                    break;
                case "F_L_L_W":
                    frameouts["frontBackLean"].push(child);
                    break;
                case "F_L_R_W":
                // case "F_L_R_S_W":
                    frameouts["frontFrontLean"].push(child);
                    break;
                case "B_L_B_W":
                    frameouts["backBackLean"].push(child);
                    break;
                // case "B_L_L_S_W":
                case "B_L_F_W":
                    frameouts["backFrontLean"].push(child);
            }
        }
        // }
    })

    return frameouts;
}

export function doDoorlegsCSG(forced) {
    let frameouts = getDoorsOnSides(const_var.newDoorsArray);
    for (let wall in frameouts) {
        if(frameouts[wall].length > 0 || forced === true) {
        //legs
            for(let name in const_var.legsForCut[wall]) {

                let leg = const_var.legsForCut[wall][name];
                leg.updateMatrix();
                leg.updateMatrixWorld();
                let parent = leg.parent;
                parent.updateMatrix();
                parent.updateMatrixWorld();
                let newLeg;
                if(!name.includes("Corner")) {
                    if (leg.name.includes("Connector")) {
                        newLeg = const_var.originalConnector.clone();
                    } else if (leg.name.includes("e_c_b") || leg.name.includes("s_c_b")) {
                        newLeg = const_var.originalConnector.clone();
                    } else {
                        newLeg = const_var.originalLeg.clone();
                    }
                    newLeg.material = newLeg.material.clone();
                    newLeg.position.set(0, 0, 0);
                    newLeg.scale.set(1, 1, 1);
                    newLeg.rotation.set(0, 0, 0);
                    newLeg.applyMatrix4(leg.matrixWorld);
                    frameouts[wall].forEach((door) => {
                        let newDoor = door.getObjectByName("Doors") || door.getObjectByName("doors") || door.getObjectByName("door1");
                        if (newDoor) {
                            newDoor = newDoor.clone();
                            newDoor.applyMatrix4(door.matrix);
                            if(newDoor.name === "Doors" || newDoor.name === "doors") newDoor.scale.y +=20;
                            newDoor.updateMatrix();    
                            let box1 = new THREE.Box3().setFromObject(newLeg);
                            let box2 = new THREE.Box3().setFromObject(newDoor);

                            if (!(box1.max.x < box2.min.x) && !(box2.max.x < box1.min.x) && 
                                !(box1.max.y < box2.min.y) && !(box2.max.y < box1.min.y) &&
                                !(box1.max.z < box2.min.z) && !(box2.max.z < box1.min.z)){

                                if (leg.geometry.attributes.position.array.length === 0) {
                                    newLeg = leg.clone();
                                    return;
                                }
                                
                                let mesh3BSP = CSG.fromMesh(newLeg);
                                let mesh4BSP = CSG.fromMesh(newDoor);
                                let subtractBSP1 = mesh3BSP.subtract(mesh4BSP);
                                newLeg = CSG.toMesh(subtractBSP1, leg.matrixWorld, leg.material);
                                newLeg.userData.cut = true;
                            }
                        }
                 
                    });
                    newLeg.name = leg.name;
                    newLeg.visible = leg.visible;
                    parent.add(newLeg);
                    // newLeg.applyMatrix4(leg.matrixWorld.invert());
                    newLeg.position.set(0, 0, 0);
                    newLeg.scale.set(1, 1, 1);
                    newLeg.rotation.set(0, 0, 0);

                    newLeg.applyMatrix4(leg.matrix);
                    parent.remove(leg);
                    const_var.legsForCut[wall][name] = newLeg;

                    if((const_var.legCutFeeMnfs.includes(Number(params.m_s_n))) && (const_var.legsForCutFee[wall] != undefined) &&
                        (const_var.legsForCutFee[wall][name] != undefined) && 
                        (!leg.name.includes("Connector") &&
                         !leg.name.includes("e_c_b") &&
                         !leg.name.includes("s_c_b") &&
                         !leg.name.includes("double") &&
                         !leg.name.includes("DoubleBaseRail") &&
                         !leg.name.includes("BaseRail"))
                        ){
                       const_var.legsForCutFee[wall][name] = newLeg;
                    }

                } else {
                    if(!name.includes("Leg")) {
                        leg.visible = true;
                        frameouts[wall].forEach((door) => {
                            let box1 = new THREE.Box3().setFromObject(leg);
                            let box2 = new THREE.Box3().setFromObject(door);
                            
                            if (!(box1.max.x < box2.min.x) && !(box2.max.x < box1.min.x) && 
                                !(box1.max.y < box2.min.y) && !(box2.max.y < box1.min.y) &&
                                !(box1.max.z < box2.min.z) && !(box2.max.z < box1.min.z)){
                                    leg.visible = false;

                            }
                        });
                    }
                }
            };
        }
    }
}

function doDoorWallCSG(oldWall, doors) {
    // console.log(oldWall,"oldWall");
    oldWall.updateMatrix();
    oldWall.updateMatrixWorld();
    let parent = oldWall.parent;
    parent.updateMatrix();
    parent.updateMatrixWorld();
    let newWall = const_var.wallsForCut[oldWall.name].clone();
    // console.log(newWall,"newWall");
    newWall.position.set(0, 0, 0);
    newWall.scale.set(1, 1, 1);
    newWall.rotation.set(0, 0, 0);

    newWall.applyMatrix4(oldWall.matrixWorld);

    doors.forEach((door) => {
        let newDoor = door.getObjectByName("Doors") || door.getObjectByName("doors") || door.getObjectByName("door1");
        if (newDoor) {
            newDoor = newDoor.clone();
            door.updateMatrix();
            newDoor.applyMatrix4(door.matrix);

            if (newDoor.name === "Doors" || newDoor.name === "doors") newDoor.scale.y += 10;
            newDoor.updateMatrix();

            let mesh1BSP = CSG.fromMesh(newWall);
            let mesh2BSP = CSG.fromMesh(newDoor);
            let subtractBSP = mesh1BSP.subtract(mesh2BSP);
            newWall = CSG.toMesh(subtractBSP, oldWall.matrixWorld, oldWall.material);
        }
    })
    newWall.name = oldWall.name;
    newWall.visible = oldWall.visible;
    parent.add(newWall);
    newWall.applyMatrix4(newWall.matrix.clone().invert());
    newWall.applyMatrix4(oldWall.matrix);
    parent.remove(oldWall);

}
export function doDoorHatChannelsCSG() {
    const_var.c_b_h_c.forEach((channel, index) => {
        channel.updateMatrix();
        channel.updateMatrixWorld();
        let newchannel = const_var.originalChannel.clone();
        newchannel.applyMatrix4(channel.matrixWorld);
        let parent = channel.parent;
        const_var.newDoorsArray.forEach((door) => {
            let newDoor = door.getObjectByName("Doors") || door.getObjectByName("doors") || door.getObjectByName("door1");
            if (newDoor) {
                newDoor = newDoor.clone();
                newDoor.applyMatrix4(door.matrix);
                if (newDoor.name === "Doors" || newDoor.name === "doors") newDoor.scale.y += 10;
                newDoor.updateMatrix();
                let mesh5BSP = CSG.fromMesh(newchannel);
                let mesh6BSP = CSG.fromMesh(newDoor);
                let subtractBSP2 = mesh5BSP.subtract(mesh6BSP);
                newchannel = CSG.toMesh(subtractBSP2, channel.matrixWorld, channel.material);
                newchannel.userData.cut = true;
            }
        });
        newchannel.name = channel.name;
        newchannel.visible = true;
        parent.add(newchannel);
        newchannel.scale.set(1, 1, 1);
        newchannel.position.set(0, 0, 0);
        newchannel.rotation.set(0, 0, 0);
        newchannel.applyMatrix4(channel.matrix);
        parent.remove(channel);
        const_var.c_b_h_c.splice(index, 1, newchannel);
    })

}

export function doDoorDimensionsCSG(doors) {

    // let doorsByWallName = {};

    // const_var.newDoorsArray.forEach((child) => {
    //     if (!doorsByWallName[child.userData.wallName]) doorsByWallName[child.userData.wallName] = [];        
    //     doorsByWallName[child.userData.wallName].push(child);        
    // })

    // for(let wallname in doorsByWallName) {
    //     let doors = doorsByWallName[wallname];
        doors.forEach((door) => {
            let lines = [];
            let hline = door.getObjectByName("hline");
            let vline = door.getObjectByName("vline");
            if(hline) lines.push(hline);
            if(vline) lines.push(vline);
            
            lines.forEach((line, index) => {
                let newLine = new THREE.Mesh( new THREE.CylinderGeometry( 0.025, 0.025, line.userData.height, 5, 5), new THREE.LineBasicMaterial({ color: 0x17202A}));
                line.updateMatrix();
                line.updateMatrixWorld();
                newLine.applyMatrix4(line.matrixWorld);
                
                doors.forEach((ndoor) => {
                    let newDoor = ndoor.getObjectByName("Doors") || ndoor.getObjectByName("doors") || ndoor.getObjectByName("door1");
                    if (newDoor) {
                        newDoor = newDoor.clone();
                        ndoor.updateMatrix();
                        newDoor.applyMatrix4(ndoor.matrix);
        
                        if (newDoor.name === "Doors" || newDoor.name === "doors") newDoor.scale.y += 10;
                        newDoor.updateMatrix();
        
                        let mesh1BSP = CSG.fromMesh(newLine);
                        let mesh2BSP = CSG.fromMesh(newDoor);
                        let subtractBSP = mesh1BSP.subtract(mesh2BSP);
                        newLine = CSG.toMesh(subtractBSP, line.matrixWorld, line.material);
                    }
                })
                newLine.name = line.name;
                newLine.visible = line.visible;
                door.add(newLine);
                newLine.applyMatrix4(newLine.matrixWorld.invert());
                newLine.applyMatrix4(line.matrix);
                newLine.userData.height = line.userData.height;
                door.remove(line);
                newLine.add(line.children[0]);
                newLine.add(line.children[0]);
            })
        });
    // }
}

export function updateDoorWainscot() {
    //center building
    let arr = [
        "c_b_f_w_ws", "c_b_l_w_ws", "c_b_r_w_ws", "c_b_b_w_ws", "F_S_L_R_W_WS", "c_b_f_s_w_ws", "c_b_l_s_w_ws", "c_b_r_s_w_ws",
        "c_b_f_s_l_w_ws", "c_b_f_s_r_w_ws", "c_b_f_s_b_w_ws",
        "c_b_l_s_f_w_ws", "c_b_l_s_f_2w_ws","c_b_l_s_b_w_ws", "c_b_l_s_b_2w_ws", "c_b_l_s_r_w_ws", 
        "c_b_r_s_f_w_ws", "c_b_r_s_f_2w_ws", "c_b_r_s_b_w_ws", "c_b_r_s_b_2w_ws", "c_b_r_s_l_w_ws", 
        "L_L_L_W_WS", "L_L_F_W_WS", "L_L_B_W_WS", "L_L_F_S_W_WS", "L_L_L_S_W_WS", "L_L_R_S_W_WS",
        "R_L_F_W_WS", "R_L_B_W_WS", "R_L_R_W_WS", "R_L_F_S_W_WS", "R_L_L_S_W_WS", "R_L_R_S_W_WS",
        "F_L_F_W_WS", "F_L_R_W_WS", "F_L_L_W_WS", "F_L_F_S_W_WS", "F_L_R_S_W_WS", "F_L_B_S_W_WS",
        "B_L_F_W_WS", "B_L_B_W_WS", "B_L_S_W_WS", "B_L_L_S_W_WS", "B_L_F_S_W_WS", "B_L_B_S_W_WS",
    ];

    arr.forEach((wallname) => {
        let mesh = const_var.scene.getObjectByName(wallname);
        if (mesh) doDoorWainscotCSG(mesh);
    })

    updateDoorWainscotTrim();
}

function checkDoorWainscotCSG(door) {
        let wallname = door.userData.wallName;
        let nArr = [wallname];
        switch(wallname) {
            case "c_b_f_w":
            case "c_b_l_s_f_w":
            case "CB_L_S_F_G":
            case "CB_L_S_4V_F_G":
            case "CB_R_S_F_G":
            case "CB_R_S_4V_F_G":
            case "c_b_r_s_f_w":
            case "L_S_F_2W_VT":
            case "L_S_F_W_VT":
            case "R_S_F_2W_VT":
            case "R_S_F_W_VT":
            case "F_L_B_S_W":
                wallname !== "c_b_f_w" && nArr.push("c_b_f_w");
                wallname !== "c_b_l_s_f_w" && nArr.push("c_b_l_s_f_w");
                wallname !== "c_b_l_s_f_2w" && nArr.push("c_b_l_s_f_2w");
                wallname !== "c_b_r_s_f_w" && nArr.push("c_b_r_s_f_w");
                wallname !== "c_b_r_s_f_2w" && nArr.push("c_b_r_s_f_2w");
                wallname !== "F_L_B_S_W" && nArr.push("F_L_B_S_W");
                break;
            case "c_b_b_w":
            case "c_b_l_s_b_w":
            case "CB_L_S_B_G":
            case "CB_L_S_4V_B_G":
            case "CB_R_S_B_G":
            case "CB_R_S_4V_B_G":
            case "c_b_r_s_b_w":
            case "L_S_B_W_VT":
            case "L_S_B_2W_VT":
            case "R_S_B_W_VT":
            case "R_S_B_2W_VT":
            case "B_L_B_S_W":
                wallname !== "c_b_b_w" && nArr.push("c_b_b_w");
                wallname !== "c_b_l_s_b_w" && nArr.push("c_b_l_s_b_w");
                wallname !== "c_b_l_s_b_2w" && nArr.push("c_b_l_s_b_2w");
                wallname !== "c_b_r_s_b_w" && nArr.push("c_b_r_s_b_w");
                wallname !== "c_b_r_s_b_2w" && nArr.push("c_b_r_s_b_2w");
                wallname !== "B_L_B_S_W" && nArr.push("B_L_B_S_W");
                break;
            case "c_b_l_w":
            case "c_b_l_s_w":
            case "c_b_f_s_l_w":
            case "L_L_R_S_W":
                wallname !== "c_b_f_s_l_w" && nArr.push("c_b_f_s_l_w");                
                wallname !== "c_b_l_s_w" && nArr.push("c_b_l_s_w");                
                wallname !== "c_b_l_w" && nArr.push("c_b_l_w");                
                wallname !== "L_L_R_S_W" && nArr.push("L_L_R_S_W");                
                break;
            case "c_b_r_w":
            case "c_b_r_s_w":
            case "c_b_f_s_r_w":
            case "R_L_L_S_W":
            case "F_S_L_R_W":
                wallname !== "c_b_r_s_w" && nArr.push("c_b_r_s_w");
                wallname !== "c_b_r_w" && nArr.push("c_b_r_w");
                wallname !== "R_L_L_S_W" && nArr.push("R_L_L_S_W");
                break;
            case "L_L_L_W":
            case "L_L_L_S_W":
                wallname !== "L_L_L_W" && nArr.push("L_L_L_W");
                wallname !== "L_L_L_S_W" && nArr.push("L_L_L_S_W");
                break;
            case "R_L_R_W":
            case "R_L_R_S_W":
                wallname !== "R_L_R_W" && nArr.push("R_L_R_W");
                wallname !== "R_L_R_S_W" && nArr.push("R_L_R_S_W");
                break;
            case "F_L_F_W":
            case "F_L_F_S_W":
                wallname !== "F_L_F_W" && nArr.push("F_L_F_W");
                wallname !== "F_L_F_S_W" && nArr.push("F_L_F_S_W");
                break;
            case "B_L_S_W":
            case "B_L_F_S_W":
                wallname !== "B_L_S_W" && nArr.push("B_L_S_W");
                wallname !== "B_L_F_S_W" && nArr.push("B_L_F_S_W");
                break;

        }

        nArr.forEach((wname) => {
            let mesh = const_var.scene.getObjectByName(wname + "_WS") || const_var.scene.getObjectByName(wname + "_ws");
            if (mesh) doDoorWainscotCSG(mesh);
            let mesh1 = const_var.scene.getObjectByName(wname + "_WS_jtrim") || const_var.scene.getObjectByName(wname + "_ws_jtrim");
            if (mesh1) doDoorWainscotTrimCSG(mesh1);
        })
}

function doDoorWainscotCSG(oldWainscot) {
    setTimeout( () => {
    if (params.p_w_c_n === true) {
        oldWainscot.updateMatrix();
        oldWainscot.updateMatrixWorld();
        let parent = oldWainscot.parent;
        if(parent!=null)
        {
            parent.updateMatrix();
            parent.updateMatrixWorld();

            let newWainscotGeo = new THREE.BoxGeometry(1, 1, 0.01);
            let newWainscotMaterial = oldWainscot.material.clone();
             let newWainscot = new THREE.Mesh(newWainscotGeo,newWainscotMaterial);

            // let newWainscot = const_var.wainscotsForCut.clone();
            newWainscot.position.set(0 ,0, 0);
            newWainscot.scale.set(1, 1, 1);
            newWainscot.rotation.set(0, 0, 0);

            newWainscot.applyMatrix4(oldWainscot.matrixWorld);

            const_var.newDoorsArray.forEach((door) => {
                if (door.userData.cuttingFeatureAvailable === true) {
                    let newDoor = door.getObjectByName("Doors") || door.getObjectByName("doors") || door.getObjectByName("door1");
                    if (newDoor) {

                        if (newWainscot.geometry.attributes.position.array.length === 0) return;                    
                        newDoor = newDoor.clone();
                        newDoor.applyMatrix4(door.matrix);

                        if (newDoor.name === "Doors" || newDoor.name === "doors") newDoor.scale.y += 10;
                        newDoor.updateMatrix();

                        let mesh1BSP = CSG.fromMesh(newWainscot);
                        let mesh2BSP = CSG.fromMesh(newDoor);
                        let subtractBSP = mesh1BSP.subtract(mesh2BSP);
                        newWainscot = CSG.toMesh(subtractBSP, oldWainscot.matrixWorld, oldWainscot.material);
                    }
                }
            })
            newWainscot.name = oldWainscot.name;      
            newWainscot.visible = oldWainscot.visible;   
            var wallCalor = params.p_w_c.replace("#","0x");
            var wnScoteCalor = (params.p_w_c_n == true)?params.p_w_c_c.replace("#","0x"):wallCalor;
            newWainscot.material.color.setHex( wnScoteCalor );
            newWainscot.material.map = oldWainscot.material.map
            newWainscot.material.map && newWainscot.material.map.repeat.set(oldWainscot.material.map.repeat.x,oldWainscot.material.map.repeat.y);
            // console.log(oldWainscot.scale.x,oldWainscot.material.map.repeat.x,"oldWainscot");
            parent.add(newWainscot);
            newWainscot.applyMatrix4(oldWainscot.matrixWorld.invert());
            newWainscot.applyMatrix4(oldWainscot.matrix);
            parent.remove(oldWainscot);
        }
    }
    },100)
}

export function updateDoorWainscotTrim() {
    //center building
    let arr = [
        "c_b_l_w_ws_jtrim", "c_b_f_w_ws_jtrim", "c_b_r_w_ws_jtrim", "c_b_b_w_ws_jtrim", /* "F_S_L_R_W_WS", */ "c_b_f_s_w_ws_jtrim", "c_b_l_s_w_ws_jtrim", "c_b_r_s_w_ws_jtrim",
        "c_b_f_s_l_w_ws_jtrim","c_b_f_s_r_w_ws_jtrim","c_b_f_s_b_w_ws_jtrim",
        "c_b_l_s_f_w_ws_jtrim", "c_b_l_s_f_2w_ws_jtrim","c_b_l_s_b_w_ws_jtrim", "c_b_l_s_b_2w_ws_jtrim", "c_b_l_s_r_w_ws_jtrim", 
        "c_b_r_s_f_w_ws_jtrim", "c_b_r_s_f_2w_ws_jtrim", "c_b_r_s_b_w_ws_jtrim", "c_b_r_s_b_2w_ws_jtrim", "c_b_r_s_l_w_ws_jtrim", 
        "L_L_L_W_WS_jtrim", "L_L_F_W_WS_jtrim", "L_L_B_W_WS_jtrim", "L_L_F_S_W_WS_jtrim", "L_L_L_S_W_WS_jtrim", "L_L_R_S_W_WS_jtrim",
        "R_L_F_W_WS_jtrim", "R_L_B_W_WS_jtrim", "R_L_R_W_WS_jtrim", "R_L_F_S_W_WS_jtrim", "R_L_L_S_W_WS_jtrim", "R_L_R_S_W_WS_jtrim",
        "F_L_F_W_WS_jtrim", "F_L_R_W_WS_jtrim", "F_L_L_W_WS_jtrim", "F_L_F_S_W_WS_jtrim", "F_L_R_S_W_WS_jtrim", "F_L_B_S_W_WS_jtrim",
        "B_L_F_W_WS_jtrim", "B_L_B_W_WS_jtrim", "B_L_S_W_WS_jtrim", "B_L_L_S_W_WS_jtrim", "B_L_F_S_W_WS_jtrim", "B_L_B_S_W_WS_jtrim",
    ];

    arr.forEach((wallname) => {
        let mesh = const_var.scene.getObjectByName(wallname);
        if (mesh) doDoorWainscotTrimCSG(mesh);
    })
}

function doDoorWainscotTrimCSG(oldWainscotTrim) {

    oldWainscotTrim.updateMatrix();
    oldWainscotTrim.updateMatrixWorld();
    let parent = oldWainscotTrim.parent;
    if(parent!=null) {
        parent.updateMatrix();
        parent.updateMatrixWorld();

        let newWainscotTrim = const_var.b_t_M_L.getObjectByName("wainscotTrim").clone();
        newWainscotTrim.applyMatrix4(oldWainscotTrim.matrixWorld);
        newWainscotTrim.material = newWainscotTrim.material.clone();

        const_var.newDoorsArray.forEach((door) => {
            let newDoor = door.getObjectByName("Doors") || door.getObjectByName("doors") || door.getObjectByName("door1");
            if (newDoor) {
                newDoor = newDoor.clone();
                newDoor.applyMatrix4(door.matrix);

                if (newDoor.name === "Doors" || newDoor.name === "doors") newDoor.scale.y += 10;
                newDoor.updateMatrix();

                let box1 = new THREE.Box3().setFromObject(newWainscotTrim);
                let box2 = new THREE.Box3().setFromObject(newDoor);

                if (!(box1.max.x < box2.min.x) && !(box2.max.x < box1.min.x) && 
                    !(box1.max.y < box2.min.y) && !(box2.max.y < box1.min.y) &&
                    !(box1.max.z < box2.min.z) && !(box2.max.z < box1.min.z)){

                    if (oldWainscotTrim.geometry.attributes.position.array.length === 0) {
                        newWainscotTrim = oldWainscotTrim.clone();
                        return;
                    }

                    let mesh1BSP = CSG.fromMesh(newWainscotTrim);
                    let mesh2BSP = CSG.fromMesh(newDoor);
                    let subtractBSP = mesh1BSP.subtract(mesh2BSP);
                    newWainscotTrim = CSG.toMesh(subtractBSP, oldWainscotTrim.matrixWorld, oldWainscotTrim.material);
                }                
            }            
        });

        newWainscotTrim.name = oldWainscotTrim.name;      
        newWainscotTrim.visible = oldWainscotTrim.visible;   
        const wainscotColor = params.p_w_c_c.replace("#","0x");
        newWainscotTrim.material.color.setHex( wainscotColor );
        parent.add(newWainscotTrim);
        newWainscotTrim.applyMatrix4(newWainscotTrim.matrix.clone().invert());
        newWainscotTrim.applyMatrix4(oldWainscotTrim.matrix);
        parent.remove(oldWainscotTrim);
    }
}

export function updateDoorWallTrim() {
    //center building
    let arr = [
        "c_b_l_w_jtrim", "c_b_f_w_jtrim", "c_b_r_w_jtrim", "c_b_b_w_jtrim", "F_S_L_R_W_jtrim", 
        "L_L_L_W_jtrim", "L_L_F_W_jtrim", "L_L_B_W_jtrim", 
        "R_L_R_W_jtrim", "R_L_F_W_jtrim", "R_L_B_W_jtrim",
        "B_L_S_W_jtrim", "B_L_B_W_jtrim", "B_L_F_W_jtrim",
        "F_L_F_W_jtrim", "F_L_R_W_jtrim", "F_L_L_W_jtrim"
        
    ];

    arr.forEach((wallname) => {
        let mesh = const_var.scene.getObjectByName(wallname);
        if (mesh) doDoorWallTrimCSG(mesh);
    })  
}

function doDoorWallTrimCSG(oldWainscotTrim) {
    oldWainscotTrim.updateMatrix();
    oldWainscotTrim.updateMatrixWorld();
    let parent = oldWainscotTrim.parent;
    if(parent!=null)
    {
        parent.updateMatrix();
        parent.updateMatrixWorld();


        let newWainscotTrim = const_var.b_t_M_L.getObjectByName("jTrim").clone();

        newWainscotTrim.applyMatrix4(oldWainscotTrim.matrixWorld);

        const_var.newDoorsArray.forEach((door) => {
            let newDoor = door.getObjectByName("Doors") || door.getObjectByName("doors") || door.getObjectByName("door1");
            if (newDoor) {
                newDoor = newDoor.clone();
                newDoor.applyMatrix4(door.matrix);

                if (newDoor.name === "Doors" || newDoor.name === "doors") newDoor.scale.y += 10;
                newDoor.updateMatrix();

                let mesh1BSP = CSG.fromMesh(newWainscotTrim);
                let mesh2BSP = CSG.fromMesh(newDoor);
                let subtractBSP = mesh1BSP.subtract(mesh2BSP);
                newWainscotTrim = CSG.toMesh(subtractBSP, oldWainscotTrim.matrixWorld, oldWainscotTrim.material);
            }            
        })
        let jTrimCalor = params.p_t_c.replace("#","0x");
        newWainscotTrim.material.color.setHex( jTrimCalor );
        newWainscotTrim.name = oldWainscotTrim.name;      
        newWainscotTrim.visible = oldWainscotTrim.visible;   
        parent.add(newWainscotTrim);
        newWainscotTrim.applyMatrix4(oldWainscotTrim.matrixWorld.invert());
        newWainscotTrim.applyMatrix4(oldWainscotTrim.matrix);
        parent.remove(oldWainscotTrim);
    }
}

export function updateDoorIconsPos(state, doorWallName, currentId) {
    const rect = const_var.renderer.domElement.getBoundingClientRect();
    const doorWindowIconsPos = [];
    // console.log(const_var.b_s_c_n,"doorUniqueId")
    state.const_var.newDoorsArray.forEach((door) => {
        if (door.userData.editIconPos && door.userData.wallName === doorWallName) {
            let vector = door.localToWorld(door.userData.editIconPos.clone());
            vector.project(state.const_var.camera);
            vector.x = (1 + vector.x) / 2 * rect.width;
            vector.y = (1 - vector.y) / 2 * rect.height;          
            doorWindowIconsPos.push({ uniqueId: door.uniqueId, display: currentId == door.uniqueId ? 'flex' : 'none', top: `${Math.round(vector.y)}px`, left: `${Math.round(vector.x)}px` });
        }
    })


    return doorWindowIconsPos;
}
export function updateCupolaEditIconsPos(state, cupolaName, currentId) {
    const rect = const_var.renderer.domElement.getBoundingClientRect();
    const cupolaEditIconsPos = [];
    state.const_var.cupolas.forEach((cupola) => {
        if (cupola.userData.editIconPos && cupola.name === cupolaName) {
           let vector = cupola.localToWorld(cupola.userData.editIconPos.clone());
           vector.project(state.const_var.camera);
           vector.x = (1 + vector.x) / 2 * rect.width;
           vector.y = (1 - vector.y) / 2 * rect.height;
           cupolaEditIconsPos.push({ uniqueId: cupola.userData.uniqueId, display: currentId == cupola.userData.uniqueId ? 'flex' : 'none', top: `${Math.round(vector.y)}px`, left: `${Math.round(vector.x)}px` });
        }
    })
    return cupolaEditIconsPos;
}

//document.getElementById("buildingcanvas").addEventListener('mousewheel DOMMouseScroll', function(event){ alert("hi")});
//export function onDocumentMouseWheel() { }

//document.addEventListener("mouseup", onDocumentMouseUp, false);

//document.addEventListener("keydown", onescFunction, false);

// export function onescFunction(e) {
//     // if(e.keyCode === 27) {
//     //   return true;
//     // }
// }

export const TrimLoad = (c, b) => { };

export const bBmFd = (Val) => {
    if (const_var.c_h_d_M_l == false) {
        const_var.isShowDoorwindowmobile = true;
        const_var.c_h_d_M_l = true;
        return false;
    }
};

export const wallnameBySec = {
    c_b_f_w: "centerbuilding",
    c_b_l_w: "centerbuilding",
    c_b_r_w: "centerbuilding",
    c_b_b_w: "centerbuilding",
    F_S_L_R_W: "centerbuilding",
    c_b_f_s_w: "centerbuilding",
    c_b_l_s_w: "centerbuilding",
    c_b_r_s_w: "centerbuilding",
    c_b_f_s_l_w: "centerbuilding",
    c_b_f_s_r_w: "centerbuilding",
    c_b_f_s_b_w: "centerbuilding",
    c_b_l_s_f_w: "centerbuilding",
    c_b_l_s_b_w: "centerbuilding",
    c_b_l_s_r_w: "centerbuilding",
    c_b_r_s_f_w: "centerbuilding",
    c_b_r_s_b_w: "centerbuilding",
    c_b_r_s_l_w: "centerbuilding",
    L_S_F_W_VT: "centerbuilding",
    L_S_F_2W_VT: "centerbuilding",
    L_S_B_W_VT: "centerbuilding",
    L_S_B_2W_VT: "centerbuilding",
    R_S_F_W_VT: "centerbuilding",
    R_S_F_2W_VT: "centerbuilding",
    R_S_B_W_VT: "centerbuilding",
    R_S_B_2W_VT: "centerbuilding",

    L_L_F_W: "leftlean",
    L_L_B_W: "leftlean",
    L_L_L_W: "leftlean",
    L_L_L_S_W: "leftlean",
    L_L_R_S_W: "leftlean",
    L_L_F_S_W: "leftlean",

    R_L_R_S_W: "rightlean",
    R_L_L_S_W: "rightlean",
    R_L_F_S_W: "rightlean",
    R_L_F_W: "rightlean",
    R_L_B_W: "rightlean",
    R_L_R_W: "rightlean",

    F_L_L_W: "frontlean",
    F_L_R_W: "frontlean",
    F_L_F_W: "frontlean",
    F_L_F_S_W: "frontlean",
    F_L_B_S_W: "frontlean",
    F_L_R_S_W: "frontlean",

    B_L_S_W: "backlean",
    B_L_B_W: "backlean",
    B_L_F_W: "backlean",
    B_L_F_S_W: "backlean",
    B_L_B_S_W: "backlean",
    B_L_L_S_W: "backlean",

}

export const breezewayWallnameByStorage = {
    c_b_f_w: "frontStorage",
    c_b_f_s_l_w: "frontStorage",
    c_b_f_s_r_w: "frontStorage",
    c_b_f_s_b_w: "frontStorage",
    c_b_f_s_w: "backStorage",
    c_b_l_s_w: "backStorage",
    c_b_r_s_w: "backStorage",
    c_b_b_w: "backStorage",
}

export const cameraFocusOnWall = (store, wall) => {
    // let y = params.p_h * 0.75;
    let obj = const_var.scene.getObjectByName(wall);
    // console.log(obj,"Quadraticwall");
    if (obj) {
        const_var.controls.target.copy(obj.position);
        let x = obj.position.x;
        let y = obj.position.y;
        let z = obj.position.z;
        let d = 40;
        let h = 5;
        switch (wall) {
            case "c_b_f_w":
                if (true) { 

                    z = (Math.tan((Math.PI - ((Math.PI/180) * 45))/2) * (params.p_w * 1.2/2)) / 0.866 + z;
                    d = 0
                    new TWEEN.Tween(const_var.camera.position)
                        .to({ x, y, z: z + d }, 1000)
                        .easing(TWEEN.Easing.Quadratic.InOut).yoyo(true).start()
                } else {
                    new TWEEN.Tween(const_var.camera.position)
                        .to({ x, y, z: z + params.leanF_p_w - 1 }, 1000)
                        .easing(TWEEN.Easing.Quadratic.InOut).yoyo(true).start()
                }
                break;

            case "c_b_b_w":
                if (true) {
                    z = z - (Math.tan((Math.PI - ((Math.PI/180) * 45))/2) * (params.p_w * 1.2/2)) / 0.866;
                    d = 0
                    new TWEEN.Tween(const_var.camera.position).to({ x, y, z: z - d }, 1000).easing(TWEEN.Easing.Quadratic.InOut).yoyo(true).start();
                } else {
                    new TWEEN.Tween(const_var.camera.position).to({ x, y, z: z - params.leanB_p_w + 1 }, 1000).easing(TWEEN.Easing.Quadratic.InOut).yoyo(true).start();
                }
                break;

            case "c_b_l_w":
                if (true) {

                    x = x -(Math.tan((Math.PI - ((Math.PI/180) * 45))/2) * (params.p_d * 1.5/2)) / 0.866 ;
                    d = 0

                    new TWEEN.Tween(const_var.camera.position)
                        .to({ x: x - d, y, z }, 1000)
                        .easing(TWEEN.Easing.Quadratic.InOut).yoyo(true).start();
                } else {
                    new TWEEN.Tween(const_var.camera.position)
                        .to({ x: x - params.lean_p_w + 1, y, z }, 1000)
                        .easing(TWEEN.Easing.Quadratic.InOut).yoyo(true).start();
                }
                break;
            case "c_b_r_w":
               if (true) {
                    x = x + (Math.tan((Math.PI - ((Math.PI/180) * 45))/2) * (params.p_d * 1.5/2)) / 0.866 ;
                    d = 0
                    new TWEEN.Tween(const_var.camera.position).to({ x: x + d, y, z }, 1000).start();
                } else {
                    new TWEEN.Tween(const_var.camera.position).to({ x: x + params.leanR_p_w - 1, y, z }, 1000).start();
                }
               /* if (params.add_right_lean === false) {
                    new TWEEN.Tween(const_var.camera.position).to({ x: x + d, y, z }, 1000).start();
                } else {
                    new TWEEN.Tween(const_var.camera.position).to({ x: x + params.leanR_p_w - 1, y, z }, 1000).start();
                }*/
                break;
            // Free standing Lean-to Right Wall
            case "F_S_L_R_W":
                if (store.isFullyEnclosedCheckedForRightLeanTo === false) {
                    new TWEEN.Tween(const_var.camera.position).to({ x: x + d, y, z }, 1000).start();
                } else {
                    new TWEEN.Tween(const_var.camera.position).to({ x: x + params.leanR_p_w - 1, y, z }, 1000).start();
                }
                break;

            //center building left storage front wall
            case "c_b_l_s_f_w":
                if (store.isFullyEnclosedCheckedForFrontLeanTo === false) {
                    new TWEEN.Tween(const_var.camera.position).to({ x, y, z: z + d }, 1000).start()
                } else {
                    new TWEEN.Tween(const_var.camera.position)
                        .to({ x, y, z: z + params.leanF_p_w - 1 }, 1000)
                        .easing(TWEEN.Easing.Quadratic.InOut).yoyo(true).start()
                }
                break;

            //center building left storage back wall
            case "c_b_l_s_b_w":
                if (store.isFullyEnclosedCheckedForBackLeanTo === false) {
                    new TWEEN.Tween(const_var.camera.position).to({ x, y, z: z - d }, 1000).easing(TWEEN.Easing.Quadratic.InOut).yoyo(true).start();
                } else {
                    new TWEEN.Tween(const_var.camera.position).to({ x, y, z: z - params.leanB_p_w + 1 }, 1000).easing(TWEEN.Easing.Quadratic.InOut).yoyo(true).start();
                }
                break;

            //center building left storage right wall
            case "c_b_l_s_r_w":
                // new TWEEN.Tween(const_var.camera.position).to({x: params.p_w/2 - 1, y, z}, 1000).start();
                new TWEEN.Tween(const_var.camera.position).to({ x: (x) + 2, y, z }, 1000).start();
                break;

            //center building right storage front wall
            case "c_b_r_s_f_w":
                if (store.isFullyEnclosedCheckedForFrontLeanTo === false) {
                    new TWEEN.Tween(const_var.camera.position).to({ x, y, z: z + d }, 1000).start()
                } else {
                    new TWEEN.Tween(const_var.camera.position)
                        .to({ x, y, z: z + params.leanF_p_w - 1 }, 1000)
                        .easing(TWEEN.Easing.Quadratic.InOut).yoyo(true).start()
                }
                break;

            //center building right storage back wall
            case "c_b_r_s_b_w":
                if (store.isFullyEnclosedCheckedForBackLeanTo === false) {
                    new TWEEN.Tween(const_var.camera.position).to({ x, y, z: z - d }, 1000).easing(TWEEN.Easing.Quadratic.InOut).yoyo(true).start();
                } else {
                    new TWEEN.Tween(const_var.camera.position).to({ x, y, z: z - params.leanB_p_w + 1 }, 1000).easing(TWEEN.Easing.Quadratic.InOut).yoyo(true).start();
                }
                break;

            //center building right storage left wall
            case "c_b_r_s_l_w":
                // new TWEEN.Tween(const_var.camera.position).to({x: -params.p_w/2 + 1, y, z}, 1000).start()
                new TWEEN.Tween(const_var.camera.position).to({ x: (x) - 2, y, z }, 1000).start()
                break;

            //center building back storage front wall
            case "c_b_f_s_w":
                if (params.cB_addStorage_check_front) new TWEEN.Tween(const_var.camera.position).to({ x, y, z: params.p_d / 2 - Number(params.cB_addStorage_front)/2}, 1000).start()
                else new TWEEN.Tween(const_var.camera.position).to({ x, y, z: params.p_d / 2 - 1 }, 1000).start();
                break;

            //center building back storage left wall
            case "c_b_l_s_w":
                if (store.isFullyEnclosedCheckedForLeftLeanTo === false) {
                    new TWEEN.Tween(const_var.camera.position).to({ x: x - d, y, z }, 1000).start();
                } else {
                    new TWEEN.Tween(const_var.camera.position).to({ x: x - params.lean_p_w + 1, y, z }, 1000).start();
                }
                break;

            //center building back storage right wall
            case "c_b_r_s_w":
                if (store.isFullyEnclosedCheckedForRightLeanTo === false) {
                    new TWEEN.Tween(const_var.camera.position).to({ x: x + d, y, z }, 1000).start();
                } else {
                    new TWEEN.Tween(const_var.camera.position).to({ x: x + params.leanR_p_w - 1, y, z }, 1000).start();
                }
                break;

            //center building front storage left wall
            case "c_b_f_s_l_w":
                new TWEEN.Tween(const_var.camera.position).to({ x: x - d, y, z }, 1000).start();
                break;

            //center building front storage right wall
            case "c_b_f_s_r_w":
                new TWEEN.Tween(const_var.camera.position).to({ x: x + d, y, z }, 1000).start();
                break;

            //center building front storage back wall
            case "c_b_f_s_b_w":
                new TWEEN.Tween(const_var.camera.position).to({ x, y, z: -params.p_d / 2 + Number(params.p_u_t) / 2}, 1000).start()
                break;
            //Left lean side wall
            case "L_L_L_W":
                const_var.controls.target.z = new THREE.Vector3().setFromMatrixPosition(obj.matrixWorld).z;
                x = x -(Math.tan((Math.PI - ((Math.PI/180) * 45))/2) * (params.lean_p_d * 1.5/2)) / 0.866 ;
                d = 0
                new TWEEN.Tween(const_var.camera.position).to({ x: x - d, y, z: new THREE.Vector3().setFromMatrixPosition(obj.matrixWorld).z }, 1000).start();
                break;

            //Left lean front wall
            case "L_L_F_W":
                const_var.controls.target.z = new THREE.Vector3().setFromMatrixPosition(obj.matrixWorld).z;
                new TWEEN.Tween(const_var.camera.position).to({ x, y, z: new THREE.Vector3().setFromMatrixPosition(obj.matrixWorld).z + d }, 1000).start();
                break;

            //Left lean back wall
            case "L_L_B_W":
                const_var.controls.target.z = new THREE.Vector3().setFromMatrixPosition(obj.matrixWorld).z;
                new TWEEN.Tween(const_var.camera.position).to({ x, y, z: new THREE.Vector3().setFromMatrixPosition(obj.matrixWorld).z - d }, 1000).start();
                break;

            //Back lean side wall
            case "B_L_S_W":
                const_var.controls.target.set(new THREE.Vector3().setFromMatrixPosition(obj.matrixWorld).x, y, x);
                x = x - (Math.tan((Math.PI - ((Math.PI/180) * 45))/2) * (params.leanB_p_d * 1.2/2)) / 0.866;
                d = 0
                new TWEEN.Tween(const_var.camera.position).to({ x: new THREE.Vector3().setFromMatrixPosition(obj.matrixWorld).x, y, z: x - d }, 1000).start();
                break;

            //Back lean left wall
            case "B_L_B_W":
                new TWEEN.Tween(const_var.camera.position).to({ x: - z - d, y, z: x }, 1000).start();
                const_var.controls.target.set(-z, y, x);
                break;

            //Back lean right wall
            case "B_L_F_W":
                new TWEEN.Tween(const_var.camera.position).to({ x: -z + d, y, z: x }, 1000).start();
                const_var.controls.target.set(-z, y, x);
                break;


            //Front lean side wall
            case "F_L_F_W":
                const_var.controls.target.set(new THREE.Vector3().setFromMatrixPosition(obj.matrixWorld).x, y, -x);
                x = -(Math.tan((Math.PI - ((Math.PI/180) * 45))/2) * (params.leanF_p_d * 1.2/2)) / 0.866 + x;
                d = 0
                new TWEEN.Tween(const_var.camera.position).to({ x: new THREE.Vector3().setFromMatrixPosition(obj.matrixWorld).x, y, z: -x + d }, 1000).start();

                break;

            //Front lean left wall
            case "F_L_L_W":
                new TWEEN.Tween(const_var.camera.position).to({ x: z - d, y, z: -x }, 1000).start(); //x: z - d, y, z: x
                const_var.controls.target.set(z, y, -x);
                break;

            //Front lean right wall
            case "F_L_R_W":
                new TWEEN.Tween(const_var.camera.position).to({ x: z + d, y, z: -x }, 1000).start();
                const_var.controls.target.set(z, y, -x);
                break;

            //Right lean side wall
            case "R_L_R_W":
                const_var.controls.target.z = new THREE.Vector3().setFromMatrixPosition(obj.matrixWorld).z;    
                x = x + (Math.tan((Math.PI - ((Math.PI/180) * 45))/2) * (params.leanR_p_d * 1.5/2)) / 0.866 ;
                d = 0
                new TWEEN.Tween(const_var.camera.position).to({ x: x + d, y, z: new THREE.Vector3().setFromMatrixPosition(obj.matrixWorld).z }, 1000).start();
                break;

            //Right lean back wall
            case "R_L_B_W":
                const_var.controls.target.z = new THREE.Vector3().setFromMatrixPosition(obj.matrixWorld).z;
                new TWEEN.Tween(const_var.camera.position).to({ x, y, z: new THREE.Vector3().setFromMatrixPosition(obj.matrixWorld).z - d }, 1000).start();
                break;

            //Right Lean front wall
            case "R_L_F_W":
                const_var.controls.target.z = new THREE.Vector3().setFromMatrixPosition(obj.matrixWorld).z;
                new TWEEN.Tween(const_var.camera.position).to({ x, y, z: new THREE.Vector3().setFromMatrixPosition(obj.matrixWorld).z + d }, 1000).start();
                break;

            //Left lean Storage Front wall
            case "L_L_F_S_W":
                new TWEEN.Tween(const_var.camera.position).to({ x, y, z: z + d }, 1000).start();
                break;

            //Left lean Storage Left wall
            case "L_L_L_S_W":
                new TWEEN.Tween(const_var.camera.position).to({ x: x - d, y, z }, 1000).start();
                break;

            //Left Lean Storage Right wall
            case "L_L_R_S_W":
                new TWEEN.Tween(const_var.camera.position).to({ x: x + d, y, z }, 1000).start();
                break;

            //Right lean Storage Front wall
            case "R_L_F_S_W":
                new TWEEN.Tween(const_var.camera.position).to({ x, y, z: z + d }, 1000).start();
                break;

            //Right lean Storage Left wall
            case "R_L_L_S_W":
                new TWEEN.Tween(const_var.camera.position).to({ x: x - d, y, z }, 1000).start();
                break;

            //Right Lean Storage Right wall
            case "R_L_R_S_W":
                new TWEEN.Tween(const_var.camera.position).to({ x: x + d, y, z }, 1000).start();
                break;

            //Back lean Storage Front wall
            case "B_L_F_S_W":
                new TWEEN.Tween(const_var.camera.position).to({ x: -z, y, z: x - d }, 1000).start();
                const_var.controls.target.set(-z, y, x);
                break;

            //Back lean Storage Back wall
            case "B_L_B_S_W":
                new TWEEN.Tween(const_var.camera.position).to({ x: -z, y, z: x + d }, 1000).start();
                const_var.controls.target.set(-z, y, x);
                break;

            //Back Lean Storage Left wall
            case "B_L_L_S_W":
                new TWEEN.Tween(const_var.camera.position).to({ x: -z + d, y, z: x }, 1000).start();
                const_var.controls.target.set(-z, y, x);
                break;

            //Front lean Storage Front wall
            case "F_L_F_S_W":
                new TWEEN.Tween(const_var.camera.position).to({ x: z, y, z: -x + d }, 1000).start();
                const_var.controls.target.set(z, y, -x);
                break;

            //Front lean Storage Back wall
            case "F_L_B_S_W":
                new TWEEN.Tween(const_var.camera.position).to({ x: z, y, z: -x - d }, 1000).start();
                const_var.controls.target.set(z, y, -x);
                break;

            //Front Lean Storage Right wall
            case "F_L_R_S_W":
                new TWEEN.Tween(const_var.camera.position).to({ x: z + d, y, z: -x }, 1000).start();
                const_var.controls.target.set(z, y, -x);

                break;

            default:
                console.log("Camera focus not defined for: ", wall);
        }
    }
    const_var.controls.update();
    highlightSection((!params.isBreezeway) ? wallnameBySec[wall] : breezewayWallnameByStorage[wall]);

};

export const highlightSection = (section) => {

    const_var.focusedSection = section
    if (const_var.activemaintabkey !== "doorWindows" || !section || params.is_translusant || (params.add_left_lean && (params.p_h == params.lean_p_h + ((params.b_l_t_r_p/12)*(params.lean_p_w)))) || (params.add_right_lean && (params.p_h == params.leanR_p_h + ((params.b_l_t_r_pR/12)*(params.leanR_p_w))))) return;

    var itemsVisible  = [];
    let porchLegName = "";
    let porchBowName = "";
    let porchBaserailName = "";
    let porchItemsVisible = [];

    if (params.isBreezeway) {
        if (const_var.scene.getObjectByName("C_B_L_P_Legs")) itemsVisible.push(const_var.scene.getObjectByName("C_B_L_P_Legs"))
        if (const_var.scene.getObjectByName("C_B_R_P_Legs")) itemsVisible.push(const_var.scene.getObjectByName("C_B_R_P_Legs"))
        if (const_var.scene.getObjectByName("C_B_L_P_Roof")) itemsVisible.push(const_var.scene.getObjectByName("C_B_L_P_Roof"))
        if (const_var.scene.getObjectByName("C_B_R_P_Roof")) itemsVisible.push(const_var.scene.getObjectByName("C_B_R_P_Roof"))
        if (const_var.scene.getObjectByName("frontWallName")) itemsVisible.push(const_var.scene.getObjectByName("frontWallName"))            
        if (const_var.scene.getObjectByName("backWallName")) itemsVisible.push(const_var.scene.getObjectByName("backWallName"))            
        if (const_var.scene.getObjectByName("leftWallName")) itemsVisible.push(const_var.scene.getObjectByName("leftWallName"))            
        if (const_var.scene.getObjectByName("rightWallName")) itemsVisible.push(const_var.scene.getObjectByName("rightWallName"))  
    }

    switch(section) {
        case "centerbuilding":
            
            if (const_var.scene.getObjectByName("C_B_Walls")) itemsVisible.push(const_var.scene.getObjectByName("C_B_Walls"));
            if (const_var.scene.getObjectByName("c_b_b_s_f_w_h_c")) itemsVisible.push(const_var.scene.getObjectByName("c_b_b_s_f_w_h_c"));
            if (const_var.scene.getObjectByName("F_S_L_Walls")) itemsVisible.push(const_var.scene.getObjectByName("F_S_L_Walls"))
            if (const_var.scene.getObjectByName("F_S_L_RightLegs")) itemsVisible.push(const_var.scene.getObjectByName("F_S_L_RightLegs"))
            if (const_var.scene.getObjectByName("C_B_L_P_Legs")) itemsVisible.push(const_var.scene.getObjectByName("C_B_L_P_Legs"))
            if (const_var.scene.getObjectByName("C_B_R_P_Legs")) itemsVisible.push(const_var.scene.getObjectByName("C_B_R_P_Legs"))
            if (const_var.scene.getObjectByName("C_B_L_P_Roof")) itemsVisible.push(const_var.scene.getObjectByName("C_B_L_P_Roof"))
            if (const_var.scene.getObjectByName("C_B_R_P_Roof")) itemsVisible.push(const_var.scene.getObjectByName("C_B_R_P_Roof"))
            if (const_var.scene.getObjectByName("F_S_L_Roof")) itemsVisible.push(const_var.scene.getObjectByName("F_S_L_Roof"))            
            if (const_var.scene.getObjectByName("frontWallName")) itemsVisible.push(const_var.scene.getObjectByName("frontWallName"))            
            if (const_var.scene.getObjectByName("backWallName")) itemsVisible.push(const_var.scene.getObjectByName("backWallName"))            
            if (const_var.scene.getObjectByName("leftWallName")) itemsVisible.push(const_var.scene.getObjectByName("leftWallName"))            
            if (const_var.scene.getObjectByName("rightWallName")) itemsVisible.push(const_var.scene.getObjectByName("rightWallName"))            
            if (const_var.scene.getObjectByName("fDoorArrows")) itemsVisible.push(const_var.scene.getObjectByName("fDoorArrows"))            
            if (const_var.scene.getObjectByName("bDoorArrows")) itemsVisible.push(const_var.scene.getObjectByName("bDoorArrows"))            

            if (const_var.callMesure) {                
                if (const_var.scene.getObjectByName("C_B_Arrows")) itemsVisible.push(const_var.scene.getObjectByName("C_B_Arrows"))
                if (const_var.scene.getObjectByName("C_B_ArrowsBody")) itemsVisible.push(const_var.scene.getObjectByName("C_B_ArrowsBody"))
                if (const_var.scene.getObjectByName("C_B_ArrowsDim")) itemsVisible.push(const_var.scene.getObjectByName("C_B_ArrowsDim"))
                if (const_var.scene.getObjectByName("cbDoorArrows")) itemsVisible.push(const_var.scene.getObjectByName("cbDoorArrows"))
                if (const_var.scene.getObjectByName("cbDoorArrowsBody")) itemsVisible.push(const_var.scene.getObjectByName("cbDoorArrowsBody"))                
            }
            break;

        // Breezeway Building Front Storage
        case "frontStorage":
            if (const_var.scene.getObjectByName("fGable")) itemsVisible.push(const_var.scene.getObjectByName("fGable"));
            if (const_var.scene.getObjectByName("fGable_inner")) itemsVisible.push(const_var.scene.getObjectByName("fGable_inner"));
            if (const_var.scene.getObjectByName("c_b_f_w")) itemsVisible.push(const_var.scene.getObjectByName("c_b_f_w"));
            if (const_var.scene.getObjectByName("c_b_f_w_inner")) itemsVisible.push(const_var.scene.getObjectByName("c_b_f_w_inner"));
            if (const_var.scene.getObjectByName("c_b_f_w_ws")) itemsVisible.push(const_var.scene.getObjectByName("c_b_f_w_ws"));
            if (const_var.scene.getObjectByName("c_b_f_w_ws_jtrim")) itemsVisible.push(const_var.scene.getObjectByName("c_b_f_w_ws_jtrim"));
            if (const_var.scene.getObjectByName("frontStorageWalls")) itemsVisible.push(const_var.scene.getObjectByName("frontStorageWalls"));
            if (const_var.scene.getObjectByName("c_b_f_s_b_w_h_c"))  itemsVisible.push(const_var.scene.getObjectByName("c_b_f_s_b_w_h_c"));
            
            if (const_var.callMesure) {                
                if (const_var.scene.getObjectByName("C_B_Arrows")) itemsVisible.push(const_var.scene.getObjectByName("C_B_Arrows"))
                if (const_var.scene.getObjectByName("C_B_ArrowsBody")) itemsVisible.push(const_var.scene.getObjectByName("C_B_ArrowsBody"))
                if (const_var.scene.getObjectByName("C_B_ArrowsDim")) itemsVisible.push(const_var.scene.getObjectByName("C_B_ArrowsDim"))
                if (const_var.scene.getObjectByName("cbDoorArrows")) itemsVisible.push(const_var.scene.getObjectByName("cbDoorArrows"))
                if (const_var.scene.getObjectByName("cbDoorArrowsBody")) itemsVisible.push(const_var.scene.getObjectByName("cbDoorArrowsBody"))                
            }
            break;
    
        // Breezeway Building Back Storage
        case "backStorage":
            if (const_var.scene.getObjectByName("f_S_Gable")) itemsVisible.push(const_var.scene.getObjectByName("f_S_Gable"));
            if (const_var.scene.getObjectByName("f_S_Gable_inner")) itemsVisible.push(const_var.scene.getObjectByName("f_S_Gable_inner"));
            if (const_var.scene.getObjectByName("c_b_f_s_w")) itemsVisible.push(const_var.scene.getObjectByName("c_b_f_s_w"));
            if (const_var.scene.getObjectByName("c_b_f_s_w_inner")) itemsVisible.push(const_var.scene.getObjectByName("c_b_f_s_w_inner"));
            if (const_var.scene.getObjectByName("c_b_l_s_w")) itemsVisible.push(const_var.scene.getObjectByName("c_b_l_s_w"));
            if (const_var.scene.getObjectByName("c_b_l_s_w_inner")) itemsVisible.push(const_var.scene.getObjectByName("c_b_l_s_w_inner"));
            if (const_var.scene.getObjectByName("c_b_r_s_w")) itemsVisible.push(const_var.scene.getObjectByName("c_b_r_s_w"));            
            if (const_var.scene.getObjectByName("c_b_r_s_w_inner")) itemsVisible.push(const_var.scene.getObjectByName("c_b_r_s_w_inner"));            
            if (const_var.scene.getObjectByName("c_b_b_w")) itemsVisible.push(const_var.scene.getObjectByName("c_b_b_w"));            
            if (const_var.scene.getObjectByName("c_b_b_w_inner")) itemsVisible.push(const_var.scene.getObjectByName("c_b_b_w_inner"));            
            if (const_var.scene.getObjectByName("bGable")) itemsVisible.push(const_var.scene.getObjectByName("bGable")) ;           
            if (const_var.scene.getObjectByName("bGable_inner")) itemsVisible.push(const_var.scene.getObjectByName("bGable_inner")) ;           
            if (const_var.scene.getObjectByName("c_b_b_w_ws")) itemsVisible.push(const_var.scene.getObjectByName("c_b_b_w_ws"));            
            if (const_var.scene.getObjectByName("c_b_f_s_w_ws")) itemsVisible.push(const_var.scene.getObjectByName("c_b_f_s_w_ws"));
            if (const_var.scene.getObjectByName("c_b_l_s_w_ws")) itemsVisible.push(const_var.scene.getObjectByName("c_b_l_s_w_ws"));
            if (const_var.scene.getObjectByName("c_b_r_s_w_ws")) itemsVisible.push(const_var.scene.getObjectByName("c_b_r_s_w_ws"));
            if (const_var.scene.getObjectByName("c_b_b_w_ws_jtrim")) itemsVisible.push(const_var.scene.getObjectByName("c_b_b_w_ws_jtrim"));            
            if (const_var.scene.getObjectByName("c_b_f_s_w_ws_jtrim")) itemsVisible.push(const_var.scene.getObjectByName("c_b_f_s_w_ws_jtrim"));
            if (const_var.scene.getObjectByName("c_b_l_s_w_ws_jtrim")) itemsVisible.push(const_var.scene.getObjectByName("c_b_l_s_w_ws_jtrim"));
            if (const_var.scene.getObjectByName("c_b_r_s_w_ws_jtrim")) itemsVisible.push(const_var.scene.getObjectByName("c_b_r_s_w_ws_jtrim"));
            if (const_var.scene.getObjectByName("c_b_b_s_f_w_h_c")) itemsVisible.push(const_var.scene.getObjectByName("c_b_b_s_f_w_h_c"));
            break;
        case "leftlean":
            
            if (const_var.scene.getObjectByName("LeftLeanRoof")) itemsVisible.push(const_var.scene.getObjectByName("LeftLeanRoof"))
            if (const_var.scene.getObjectByName("LeftLeanWalls")) itemsVisible.push(const_var.scene.getObjectByName("LeftLeanWalls"))
            if (const_var.scene.getObjectByName("LeftLeanLegs")) itemsVisible.push(const_var.scene.getObjectByName("LeftLeanLegs"))            

            if (const_var.callMesure) {                
                if (const_var.scene.getObjectByName("LeftLeanArrows")) itemsVisible.push(const_var.scene.getObjectByName("LeftLeanArrows"))
                if (const_var.scene.getObjectByName("LeftLeanArrowBody")) itemsVisible.push(const_var.scene.getObjectByName("LeftLeanArrowBody"))
                if (const_var.scene.getObjectByName("LeftLeanArrowDim")) itemsVisible.push(const_var.scene.getObjectByName("LeftLeanArrowDim"))
                if (const_var.scene.getObjectByName("LeftLeanDoorArrows")) itemsVisible.push(const_var.scene.getObjectByName("LeftLeanDoorArrows"))
                if (const_var.scene.getObjectByName("LeftLeanDoorArrowBody")) itemsVisible.push(const_var.scene.getObjectByName("LeftLeanDoorArrowBody"))                
            }

            porchLegName = "PorchLeftMiddleLeg";
            porchBowName = "LeftMiddleBow";
            porchBaserailName = "PorchleftBaseRail";     //lflPorchleftBaseRailDouble
            if (const_var.scene.getObjectByName("L_L_F_P_Roof")) porchItemsVisible.push(const_var.scene.getObjectByName("L_L_F_P_Roof")) 
            if (const_var.scene.getObjectByName("L_B_L_P_Roof")) porchItemsVisible.push(const_var.scene.getObjectByName("L_B_L_P_Roof")) 
            if (const_var.scene.getObjectByName("L_L_F_P_Legs")) porchItemsVisible.push(const_var.scene.getObjectByName("L_L_F_P_Legs")) 
            if (const_var.scene.getObjectByName("L_B_L_P_Legs")) porchItemsVisible.push(const_var.scene.getObjectByName("L_B_L_P_Legs")) 
            break;

        case "rightlean":
              
            if (const_var.scene.getObjectByName("RightLeanRoof")) itemsVisible.push(const_var.scene.getObjectByName("RightLeanRoof"))
            if (const_var.scene.getObjectByName("RightLeanWalls")) itemsVisible.push(const_var.scene.getObjectByName("RightLeanWalls"))
            if (const_var.scene.getObjectByName("RightLeanLegs")) itemsVisible.push(const_var.scene.getObjectByName("RightLeanLegs"))            

            if (const_var.callMesure) {                
                if (const_var.scene.getObjectByName("RightLeanArrows")) itemsVisible.push(const_var.scene.getObjectByName("RightLeanArrows"))
                if (const_var.scene.getObjectByName("RightLeanArrowBody")) itemsVisible.push(const_var.scene.getObjectByName("RightLeanArrowBody"))
                if (const_var.scene.getObjectByName("RightLeanArrowDim")) itemsVisible.push(const_var.scene.getObjectByName("RightLeanArrowDim"))
                if (const_var.scene.getObjectByName("RightLeanDoorArrows")) itemsVisible.push(const_var.scene.getObjectByName("RightLeanDoorArrows"))
                if (const_var.scene.getObjectByName("RightLeanDoorArrowBody")) itemsVisible.push(const_var.scene.getObjectByName("RightLeanDoorArrowBody"))                
            }

            porchLegName = "PorchRightMiddleLeg";
            porchBowName = "RightMiddleBow";
            porchBaserailName = "PorchRightBaseRail";     //rflPorchRightBaseRailDouble
            if (const_var.scene.getObjectByName("R_L_F_P_Roof")) porchItemsVisible.push(const_var.scene.getObjectByName("R_L_F_P_Roof")) 
            if (const_var.scene.getObjectByName("R_B_L_P_Roof")) porchItemsVisible.push(const_var.scene.getObjectByName("R_B_L_P_Roof")) 
            if (const_var.scene.getObjectByName("R_L_F_P_Legs")) porchItemsVisible.push(const_var.scene.getObjectByName("R_L_F_P_Legs")) 
            if (const_var.scene.getObjectByName("R_B_L_P_Legs")) porchItemsVisible.push(const_var.scene.getObjectByName("R_B_L_P_Legs")) 
            break;

        case "frontlean":
              
            if (const_var.scene.getObjectByName("FrontLeanRoof")) itemsVisible.push(const_var.scene.getObjectByName("FrontLeanRoof"))
            if (const_var.scene.getObjectByName("FrontLeanWalls")) itemsVisible.push(const_var.scene.getObjectByName("FrontLeanWalls"))
            if (const_var.scene.getObjectByName("FrontLeanLegs")) itemsVisible.push(const_var.scene.getObjectByName("FrontLeanLegs"))            

            if (const_var.callMesure) {
                
                if (const_var.scene.getObjectByName("FrontLeanArrow")) itemsVisible.push(const_var.scene.getObjectByName("FrontLeanArrow"))
                if (const_var.scene.getObjectByName("FrontLeanArrowBody")) itemsVisible.push(const_var.scene.getObjectByName("FrontLeanArrowBody"))
                if (const_var.scene.getObjectByName("FrontLeanArrowDim")) itemsVisible.push(const_var.scene.getObjectByName("FrontLeanArrowDim"))
                if (const_var.scene.getObjectByName("FrontLeanDoorArrow")) itemsVisible.push(const_var.scene.getObjectByName("FrontLeanDoorArrow"))
                if (const_var.scene.getObjectByName("FrontLeanDoorArrowBody")) itemsVisible.push(const_var.scene.getObjectByName("FrontLeanDoorArrowBody"))                
            }

            porchLegName = "PorchFrontMiddleLeg";
            porchBowName = "FrontMiddleBow";
            porchBaserailName = "PorchFrontBaseRail";    //rflPorchFrontBaseRailDouble
            if (const_var.scene.getObjectByName("L_L_F_P_Roof")) porchItemsVisible.push(const_var.scene.getObjectByName("L_L_F_P_Roof")) 
            if (const_var.scene.getObjectByName("R_L_F_P_Roof")) porchItemsVisible.push(const_var.scene.getObjectByName("R_L_F_P_Roof")) 
            if (const_var.scene.getObjectByName("L_L_F_P_Legs")) porchItemsVisible.push(const_var.scene.getObjectByName("L_L_F_P_Legs")) 
            if (const_var.scene.getObjectByName("R_L_F_P_Legs")) porchItemsVisible.push(const_var.scene.getObjectByName("R_L_F_P_Legs")) 
            break;

        case "backlean":
              
            if (const_var.scene.getObjectByName("BackLeanRoof")) itemsVisible.push(const_var.scene.getObjectByName("BackLeanRoof"))
            if (const_var.scene.getObjectByName("BackLeanWalls")) itemsVisible.push(const_var.scene.getObjectByName("BackLeanWalls"))
            if (const_var.scene.getObjectByName("BackLeanLegs")) itemsVisible.push(const_var.scene.getObjectByName("BackLeanLegs"))

            if (const_var.callMesure) {                
                if (const_var.scene.getObjectByName("BackLeanArrows")) itemsVisible.push(const_var.scene.getObjectByName("BackLeanArrows"))
                if (const_var.scene.getObjectByName("BackLeanArrowBody")) itemsVisible.push(const_var.scene.getObjectByName("BackLeanArrowBody"))
                if (const_var.scene.getObjectByName("BackLeanArrowDim")) itemsVisible.push(const_var.scene.getObjectByName("BackLeanArrowDim"))
                if (const_var.scene.getObjectByName("BackLeanDoorArrows")) itemsVisible.push(const_var.scene.getObjectByName("BackLeanDoorArrows"))
                if (const_var.scene.getObjectByName("BackLeanDoorArrowBody")) itemsVisible.push(const_var.scene.getObjectByName("BackLeanDoorArrowBody"))
            }

            porchLegName = "PorchBackMiddleLeg";
            porchBowName = "BackMiddleBow";
            porchBaserailName = "PorchBackBaseRail";      //rflPorchFrontBaseRailDouble
            if (const_var.scene.getObjectByName("L_B_L_P_Roof")) porchItemsVisible.push(const_var.scene.getObjectByName("L_B_L_P_Roof")) 
            if (const_var.scene.getObjectByName("R_B_L_P_Roof")) porchItemsVisible.push(const_var.scene.getObjectByName("R_B_L_P_Roof")) 
            if (const_var.scene.getObjectByName("L_B_L_P_Legs")) porchItemsVisible.push(const_var.scene.getObjectByName("L_B_L_P_Legs")) 
            if (const_var.scene.getObjectByName("R_B_L_P_Legs")) porchItemsVisible.push(const_var.scene.getObjectByName("R_B_L_P_Legs")) 
            break;
    }

    const_var.scene.traverse((child) => {
        if (child.type === "Mesh" && child.name != "building-sky" && child.name != "Ground" 
        &&  child.name != "frontWallWaterMark" &&  child.name != "backWallWaterMark" 
        &&  child.name != "usSteelbuildingCenterGround" && child.name != "manufacturerLogoFront" && child.name != "manufacturerLogoBack" && child.name != "manufacturerLogoCenter") {
            child.material.transparent = true;
            if(child.name == "eagleLogo" && section == 'center') child.material.opacity = 1;
            else child.material.opacity = 0.2;
            child.material.depthWrite = false;

            if (child.parent?.DoorObj) {
                const wallNameBySection = (!params.isBreezeway) ? wallnameBySec[child.parent.userData.wallName] : breezewayWallnameByStorage[child.parent.userData.wallName]
                if ( wallNameBySection === section) {
                    child.material.transparent = false;
                    child.material.opacity = 1;
                    child.material.depthWrite = true;
                }
            } 
        }
    })

    porchItemsVisible.forEach((item) =>{
        item.traverse((child) => {
            if (child.name.includes(porchLegName) 
            || child.name.includes(porchBowName) 
            || child.name.includes(porchBaserailName) ) {
                child.material.transparent = false;
                child.material.opacity = 1;
                child.material.depthWrite = true;
            }
        })
    })

    itemsVisible.forEach((item) =>{
        item.traverse((child) => {
            if (child.type === "Mesh") {
                let t = true;
                switch(section) {
                    case "center":
                        break;
                    case "frontStorage":
                        if ( child.name.includes("storageChannel")
                            || child.name.includes("backChannel") 
                            || child.name.includes("backBaseRail") 
                            || child.name.includes("BackLegs") 
                            || child.name.includes("stoarageLeftFrontTrim") 
                            || child.name.includes("stoarageRightFrontTrim") 
                            || child.name.includes("leftLegBackTrim") 
                            || child.name.includes("BackLegs") 
                        ){
                            // console.log(child.name, "child.name");
                            t = false;
                        } 

                        break;
                    case "backStorage":
                        if (child.name.includes("frontChannel")
                            || child.name.includes("frontStorageBackWallHorizantalChannel")
                            || child.name.includes("FrontBaseRail") 
                            || child.name.includes("FrontLegs")  
                        ) t = false;

                        break;    
                    case "frontlean":
                        if (child.name.includes("frontLeanToRightFMiddleLegL")
                        || child.name.includes("frontLeantoRightBaseRail") 
                        ) t = false;
                        break;
                    case "backlean":
                        if (child.name.includes("backLeanToLeftFMiddleLeg")
                        || child.name.includes("backLeantoRightBaseRail") 
                        ) t = false;
                        break;
                }

                if (t){
                    child.material.transparent = false;
                    child.material.opacity = 1;
                    child.material.depthWrite = true;
                }
            }

        })
    })
}

export const handleComponentPositionOnDimensionChange = (str, centerAlign, doorOnly) => {
    if (const_var.entry_points.length > 0) {

        let sortByPos = (arr) => {
            return arr.sort((a, b) => {
                switch(a.entry_rotation.y) {
                    case 1.5707963267948966: return a.entry_position.x - b.entry_position.x;
                    case -1.5707963267948966: return  -b.entry_position.x + a.entry_position.x;
                    case 0: return a.entry_position.z - b.entry_position.z;
                    case 3.141592653589793:return  a.entry_position.z - b.entry_position.z;
                }
            })
         }

         let filterRecord = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "c_b_f_w"))
        let filterRecordL = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "c_b_l_w"))
        let filterRecordR = sortByPos(const_var.entry_points.filter(data => (data.component_wall_name == "c_b_r_w" || data.component_wall_name == "F_S_L_R_W")))
        let filterRecordB = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "c_b_b_w"))
        let filterRecordFS = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "c_b_f_s_w"))
        let filterRecordLS = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "c_b_l_s_w"))
        let filterRecordRS = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "c_b_r_s_w"))
        let filterRecordFSL = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "c_b_f_s_l_w"))
        let filterRecordFSR = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "c_b_f_s_r_w"))
        let filterRecordFSB = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "c_b_f_s_b_w"))
        let filterRecordLSF = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "c_b_l_s_f_w"))
        let filterRecordLSB = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "c_b_l_s_b_w"))
        let filterRecordLSR = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "c_b_l_s_r_w"))
        let filterRecordRSF = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "c_b_r_s_f_w"))
        let filterRecordRSB = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "c_b_r_s_b_w"))
        let filterRecordRSL = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "c_b_r_s_l_w"))
        let filterRecordLLL = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "L_L_L_W"))
        let filterRecordRLR = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "R_L_R_W"))
        let filterRecordFLF = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "F_L_F_W"))
        let filterRecordBLS = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "B_L_S_W"))
        let filterRecordLLF = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "L_L_F_W"))
        let filterRecordLLB = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "L_L_B_W"))
        let filterRecordRLF = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "R_L_F_W"))
        let filterRecordRLB = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "R_L_B_W"))
        let filterRecordFLL = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "F_L_L_W"))
        let filterRecordFLR = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "F_L_R_W"))
        let filterRecordBLB = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "B_L_B_W"))
        let filterRecordBLF = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "B_L_F_W"))
        let filterRecordLLLS = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "L_L_L_S_W"))
        let filterRecordLLRS = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "L_L_R_S_W"))
        let filterRecordLLFS = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "L_L_F_S_W"))
        let filterRecordRLRS = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "R_L_R_S_W"))
        let filterRecordRLLS = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "R_L_L_S_W"))
        let filterRecordRLFS = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "R_L_F_S_W"))
        let filterRecordFLFS = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "F_L_F_S_W"))
        let filterRecordFLBS = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "F_L_B_S_W"))
        let filterRecordFLRS = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "F_L_R_S_W"))
        let filterRecordBLFS = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "B_L_F_S_W"))
        let filterRecordBLBS = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "B_L_B_S_W"))
        let filterRecordBLLS = sortByPos(const_var.entry_points.filter(data => data.component_wall_name == "B_L_L_S_W"))
        
        let posOffset = -0.1;


        if(str == "h" || str == "lean_h" || str == "leanR_h" || str == "leanF_h" || str == "leanB_h"){
            [...const_var.entry_points].map( (val) => {       
                // if(val.component_name == "standard_window"){
                    let window = const_var.scene.getObjectByName(val.component_name + val.uniqueId);
                    let wallHeight = getBuildingSectionHeight(window);
                    if (window && wallHeight) {
                        // wallHeight = wallHeight.scale.y;
                        // let wallHeight1 = const_var.scene.getObjectByName(val.component_wall_name + 1);
                        // if (wallHeight1 && wallHeight !== wallHeight1.scale.y) wallHeight += wallHeight1.scale.y;
                        let windowPosition = window.position.y
                        let windowHeight = window.scale.y
        
                        if(((val.component_name != "standard_window") && (val.entry_size?.height) > wallHeight) || ((val.component_name == "standard_window") && (windowPosition + (val.entry_size?.height/12/2)) > wallHeight)){
                            RemoveDoorComponent(val.uniqueId, val.component_name);
                        }          
                    }                                             
                // }                                 
            })
        }

        if (filterRecord.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "c_b_f_w"))) {
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth; 
            let disBtw = 2;
                        
            if (centerAlign === true) disBtw = (params.p_w - filterRecord.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecord.length + 1);
            for (var i = 0; i <= filterRecord.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecord[i].component_name + filterRecord[i].uniqueId);
                let newData = "";
                // let startWidth = (params.p_w) / 2;
                if (str == "w" || centerAlign) {
                    let componentdimension = filterRecord[i].name.split("x");
                    let doorWidth = (filterRecord[i].entry_type == "garage_door" || filterRecord[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecord[i].entry_type == "garage_door" || filterRecord[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;
                        
                    if(centerAlign == true && disBtw >= 1) {
                        if (mainPos == 0) {
                            newData = (-params.p_w / 2) + ((doorWidth / 2) + 1);
                            if (centerAlign === true)  newData = (-params.p_w / 2) + ((doorWidth / 2) + disBtw);
                        } else {
                            newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw );
                        }
                        if (newData + (doorWidth / 2 ) +1 > params.p_w / 2) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecord[i].uniqueId, filterRecord[i].component_name);
                            continue;
                        }
                        if (comName != undefined) {
                            comName.position.set(newData, comName.position.y, comName.position.z);
                            mainPosArray[mainPos] = newData;
                            mainPos++;
                            preDoorWidth = doorWidth;
                        }

                        Arrows.centerVerticalDoorArrow(comName.position, comName.height, comName.userData.wallName,comName.uniqueId);
                    } else {
                        if (((comName.position.x + (doorWidth / 2 ) +1) > params.p_w / 2 )|| ((comName.position.x - (doorWidth / 2 ) -1) < -params.p_w/2)) {
                            RemoveDoorComponent(filterRecord[i].uniqueId, filterRecord[i].component_name);
                            continue;
                        }
                    }

                } else {
                    if (comName != undefined) {
                        comName.position.set(comName.position.x, comName.position.y, params.p_d / 2 + posOffset);
                    }
                }
            }
        } if (filterRecordB.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "c_b_b_w"))) {
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (params.p_w - filterRecordB.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordB.length + 1);
            for (var i = 0; i <= filterRecordB.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordB[i].component_name + filterRecordB[i].uniqueId);
                let newData = "";

                if (str == "w" || centerAlign) {
                    let componentdimension = filterRecordB[i].name.split("x");
                    let doorWidth = (filterRecordB[i].entry_type == "garage_door" || filterRecordB[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordB[i].entry_type == "garage_door" || filterRecordB[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                    if (centerAlign == true && disBtw >=1) {
                        if (mainPos == 0) {
                            newData = (params.p_w / 2) - ((doorWidth / 2) + 1);
                            if (centerAlign === true)  newData = (-params.p_w / 2) + ((doorWidth / 2) + disBtw);
                        } else {
                            newData = Number(mainPosArray[mainPos - 1]) - ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                            if (centerAlign === true) newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                        }
                        if (comName != undefined) {
                            comName.position.set(newData, comName.position.y, comName.position.z);
                            mainPosArray[mainPos] = newData;
                            mainPos++;
                            preDoorWidth = doorWidth;
                        }
                        Arrows.centerVerticalDoorArrowB(comName.position, comName.height, comName.userData.wallName,comName.uniqueId);
    
                    } else {
                        if (((comName.position.x + (doorWidth / 2 ) +1) > params.p_w / 2 )|| ((comName.position.x - (doorWidth / 2 ) -1) < -params.p_w/2)) {
                            RemoveDoorComponent(filterRecordB[i].uniqueId, filterRecordB[i].component_name);
                            continue;
                        }
                    }
                    
                } else {
                    if (comName != undefined) {
                        comName.position.set(comName.position.x, comName.position.y, -params.p_d / 2 - posOffset);
                    }
                }

            }
        }
        if (filterRecordL.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "c_b_l_w")) && !params.isBreezeway  ) {
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (params.p_d - filterRecordL.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordL.length + 1);
            for (var i = 0; i <= filterRecordL.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordL[i].component_name + filterRecordL[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "l" || centerAlign) {
                    let componentdimension = filterRecordL[i].name.split("x");
                    let doorWidth = (filterRecordL[i].entry_type == "garage_door" || filterRecordL[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordL[i].entry_type == "garage_door" || filterRecordL[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                    if (centerAlign == true && disBtw >=1) {
                        if (mainPos == 0) {
                            newData = (-params.p_d / 2) + ((doorWidth / 2) + 1);
                            if (centerAlign === true)  newData = (-params.p_d / 2) + ((doorWidth / 2) + disBtw);;
                        } else {
                            newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                        }

                        if (comName != undefined) {
                            comName.position.set(comName.position.x, comName.position.y, newData);
                            mainPosArray[mainPos] = newData;
                            mainPos++;
                            preDoorWidth = doorWidth;
                        }
                    }else {
                        if (((comName.position.z + (doorWidth / 2 ) +1) > params.p_d / 2) || ((comName.position.z - (doorWidth / 2 ) -1) < -params.p_d / 2) ) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordL[i].uniqueId, filterRecordL[i].component_name);
                            continue;
                        }                        
                    }

                } else {
                    if (comName != undefined) {
                        comName.position.set(-params.p_w / 2 - posOffset, comName.position.y, comName.position.z);
                    }
                }

            }
        }
        if (filterRecordR.length > 0 && (!centerAlign || (centerAlign === true && (params.activeWall === "c_b_r_w" || params.activeWall === "F_S_L_R_W")))&& !params.isBreezeway){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (params.p_d - filterRecordR.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordR.length + 1);
            for (var i = 0; i <= filterRecordR.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordR[i].component_name + filterRecordR[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "l" || centerAlign) {
                    let componentdimension = filterRecordR[i].name.split("x");
                    let doorWidth = (filterRecordR[i].entry_type == "garage_door" || filterRecordR[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordR[i].entry_type == "garage_door" || filterRecordR[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                        if (centerAlign == true && disBtw >=1) {
                            if (mainPos == 0) {
                                newData = (params.p_d / 2) - ((doorWidth / 2) + 1);
                                if (centerAlign === true)  newData = (-params.p_d / 2) + ((doorWidth / 2) + disBtw);
                            } else {
                                newData = Number(mainPosArray[mainPos - 1]) - ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                                if (centerAlign === true) newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                            }
                            if (comName != undefined) {
                                comName.position.set(comName.position.x, comName.position.y, newData);
                                mainPosArray[mainPos] = newData;
                                mainPos++;
                                preDoorWidth = doorWidth;
                            }
                        }else {
                            if (((comName.position.z + (doorWidth / 2 ) +1) > params.p_d / 2) || ((comName.position.z - (doorWidth / 2 ) -1) < -params.p_d / 2) ) {
                                if (centerAlign !== true) RemoveDoorComponent(filterRecordR[i].uniqueId, filterRecordR[i].component_name);
                                continue;
                            }
                        }


                } else {
                    if (comName != undefined) {
                        comName.position.set(params.p_w / 2 + posOffset, comName.position.y, comName.position.z);
                    }
                }

            }
        }

        if (filterRecordLSF.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "c_b_l_s_f_w"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (params.cB_addStorage_left - filterRecordLSF.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordLSF.length + 1);
            for (var i = 0; i <= filterRecordLSF.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordLSF[i].component_name + filterRecordLSF[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "centerLeft" || str == "w" || centerAlign) {
                    let componentdimension = filterRecordLSF[i].name.split("x");
                    let doorWidth = (filterRecordLSF[i].entry_type == "garage_door" || filterRecordLSF[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordLSF[i].entry_type == "garage_door" || filterRecordLSF[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                        if (centerAlign == true && disBtw >=1) {
                            if (mainPos == 0) {
                                newData = (-params.p_w / 2) + ((doorWidth / 2) + 1);
                                if (centerAlign === true)  newData = (-params.p_w / 2) + ((doorWidth / 2) + disBtw);
                            } else {
                                newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                            }
                            if (comName != undefined) {
                                comName.position.set(newData, comName.position.y, comName.position.z);
                                mainPosArray[mainPos] = newData;
                                mainPos++;
                                preDoorWidth = doorWidth;
                            }
                        }else {
                            if (((comName.position.x + (doorWidth / 2 ) +1) > (-params.p_w /2)+(Number(params.cB_addStorage_left))) || ((comName.position.x - (doorWidth / 2 ) -1) < -params.p_w /2)) {
                                if (centerAlign !== true) RemoveDoorComponent(filterRecordLSF[i].uniqueId, filterRecordLSF[i].component_name);
                                continue;
                            }
                        }


                } else {
                    if (comName != undefined) {
                        comName.position.set(comName.position.x, comName.position.y, params.p_d / 2 + posOffset);
                    }
                }

            }
        }

        if (filterRecordLSB.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "c_b_l_s_b_w"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (params.cB_addStorage_left - filterRecordLSB.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordLSB.length + 1);            
            for (var i = 0; i <= filterRecordLSB.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordLSB[i].component_name + filterRecordLSB[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "centerLeft" || str == "w" || centerAlign) {
                    let componentdimension = filterRecordLSB[i].name.split("x");
                    let doorWidth = (filterRecordLSB[i].entry_type == "garage_door" || filterRecordLSB[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordLSB[i].entry_type == "garage_door" || filterRecordLSB[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                        if (centerAlign == true && disBtw >=1) {
                            if (mainPos == 0) {
                                newData = (-params.p_w / 2) + ((doorWidth / 2) + 1);
                                if (centerAlign === true)  newData = (-params.p_w / 2) + ((doorWidth / 2) + disBtw);
                            } else {
                                newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw );
                            }
                            if (comName != undefined) {
                                comName.position.set(newData, comName.position.y, comName.position.z);
                                mainPosArray[mainPos] = newData;
                                mainPos++;
                                preDoorWidth = doorWidth;
                            }
                        }else {
                            if (((comName.position.x + (doorWidth / 2 ) +1) > (-params.p_w /2)+(Number(params.cB_addStorage_left))) || ((comName.position.x - (doorWidth / 2 ) -1) < -params.p_w /2)) {
                                if (centerAlign !== true) RemoveDoorComponent(filterRecordLSB[i].uniqueId, filterRecordLSB[i].component_name);
                                continue;
                            }
                        }


                } else {
                    if (comName != undefined) {
                        comName.position.set(comName.position.x, comName.position.y, -params.p_d / 2 - posOffset);
                    }
                }

            }
        }

        if (filterRecordLSR.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "c_b_l_s_r_w"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (params.p_d - filterRecordLSR.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordLSR.length + 1);            
            for (var i = 0; i <= filterRecordLSR.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordLSR[i].component_name + filterRecordLSR[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "centerLeft" ||str == "l" || centerAlign) {
                    let componentdimension = filterRecordLSR[i].name.split("x");
                    let doorWidth = (filterRecordLSR[i].entry_type == "garage_door" || filterRecordLSR[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordLSR[i].entry_type == "garage_door" || filterRecordLSR[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                        if (centerAlign == true && disBtw >=1) {
                            if (mainPos == 0) {
                                newData = (params.p_d / 2) - ((doorWidth / 2) + 1);
                                if (centerAlign === true)  newData = -(params.p_d / 2) + ((doorWidth / 2) + disBtw);
                            } else {
                                newData = Number(mainPosArray[mainPos - 1]) - ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                                if (centerAlign === true) newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                            }
                            if (comName != undefined) {
                                comName.position.set((-params.p_w / 2)+ (Number(params.cB_addStorage_left)) + posOffset, comName.position.y, newData);
                                mainPosArray[mainPos] = newData;
                                mainPos++;
                                preDoorWidth = doorWidth;
                            }
                        } else {
                            if ((comName.position.z - (doorWidth /2) - 1 < -params.p_d / 2) || (comName.position.z + (doorWidth /2) + 1 > params.p_d / 2)) {
                                if (centerAlign !== true) RemoveDoorComponent(filterRecordLSR[i].uniqueId, filterRecordLSR[i].component_name);
                                continue;
                            }
                        }


                } else {
                    if (comName != undefined) {
                        comName.position.set((-params.p_w / 2)+ (Number(params.cB_addStorage_left)) + posOffset, comName.position.y, comName.position.z);
                    }
                }

            }
        }

        if (filterRecordRSF.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "c_b_r_s_f_w"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (params.cB_addStorage_right - filterRecordRSF.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordRSF.length + 1);                        
            for (var i = 0; i <= filterRecordRSF.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordRSF[i].component_name + filterRecordRSF[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "centerRight" || str == "w" || centerAlign) {
                    let componentdimension = filterRecordRSF[i].name.split("x");
                    let doorWidth = (filterRecordRSF[i].entry_type == "garage_door" || filterRecordRSF[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordRSF[i].entry_type == "garage_door" || filterRecordRSF[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                        if (centerAlign == true && disBtw >=1) {
                            if (mainPos == 0) {
                                newData = (params.p_w / 2) - ((doorWidth / 2) + 1);
                                if (centerAlign === true)  newData = (params.p_w / 2)-Number(params.cB_addStorage_right) +   ((doorWidth / 2) + disBtw);
                            } else {
                                newData = Number(mainPosArray[mainPos - 1]) - ((doorWidth/2)+(preDoorWidth/2) + disBtw );
                                if (centerAlign === true) newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw );
                            }
                            if (comName != undefined) {
                                comName.position.set(newData, comName.position.y, comName.position.z);
                                mainPosArray[mainPos] = newData;
                                mainPos++;
                                preDoorWidth = doorWidth;
                            }
                        } else {
                            if (((comName.position.x - (doorWidth / 2 ) -1) < (params.p_w /2)-(Number(params.cB_addStorage_right))) || ((comName.position.x + (doorWidth / 2 ) +1) > params.p_w /2)) {
                                if (centerAlign !== true) RemoveDoorComponent(filterRecordRSF[i].uniqueId, filterRecordRSF[i].component_name);
                                continue;
                            }
                        }



                } else {
                    if (comName != undefined) {
                        comName.position.set(comName.position.x, comName.position.y, params.p_d / 2 + posOffset);
                    }
                }

            }
        }

        if (filterRecordRSB.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "c_b_r_s_b_w"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (params.cB_addStorage_right - filterRecordRSB.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordRSB.length + 1);                        
            for (var i = 0; i <= filterRecordRSB.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordRSB[i].component_name + filterRecordRSB[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "centerRight" || str == "w" || centerAlign) {
                    let componentdimension = filterRecordRSB[i].name.split("x");
                    let doorWidth = (filterRecordRSB[i].entry_type == "garage_door" || filterRecordRSB[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordRSB[i].entry_type == "garage_door" || filterRecordRSB[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                        if (centerAlign == true && disBtw >=1) {
                            if (mainPos == 0) {
                                newData = (params.p_w / 2) - ((doorWidth / 2) + 1);
                                if (centerAlign === true)  newData = (params.p_w / 2) -Number(params.cB_addStorage_right) + ((doorWidth / 2) + disBtw);
                            } else {
                                newData = Number(mainPosArray[mainPos - 1]) - ((doorWidth/2)+(preDoorWidth/2) + disBtw );
                                if (centerAlign === true) newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw );
                            }
                            if (comName != undefined) {
                                comName.position.set(newData, comName.position.y, comName.position.z);
                                mainPosArray[mainPos] = newData;
                                mainPos++;
                                preDoorWidth = doorWidth;
                            }
                        } else {
                            if (((comName.position.x - (doorWidth / 2 ) -1) < (params.p_w /2)-(Number(params.cB_addStorage_right))) || ((comName.position.x + (doorWidth / 2 ) +1) > params.p_w /2)) {
                                if (centerAlign !== true) RemoveDoorComponent(filterRecordRSB[i].uniqueId, filterRecordRSB[i].component_name);
                                continue;
                            }
                        }

                } else {
                    if (comName != undefined) {
                        comName.position.set(comName.position.x, comName.position.y, -params.p_d / 2 - posOffset);
                    }
                }

            }
        }

        if (filterRecordRSL.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "c_b_r_s_l_w"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (params.p_d - filterRecordRSL.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordRSL.length + 1);                        
            for (var i = 0; i <= filterRecordRSL.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordRSL[i].component_name + filterRecordRSL[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "centerRight" ||str == "l" || centerAlign) {
                    let componentdimension = filterRecordRSL[i].name.split("x");
                    let doorWidth = (filterRecordRSL[i].entry_type == "garage_door" || filterRecordRSL[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordRSL[i].entry_type == "garage_door" || filterRecordRSL[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                        if (centerAlign == true && disBtw >=1) {
                            if (mainPos == 0) {
                                newData = (params.p_d / 2) - ((doorWidth / 2) + 1);
                                if (centerAlign === true)  newData = (-params.p_d / 2) + ((doorWidth / 2) + disBtw);
                            } else {
                                newData = Number(mainPosArray[mainPos - 1]) - ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                                if (centerAlign === true) newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                            }
                            if (comName != undefined) {
                                comName.position.set((params.p_w / 2)- (Number(params.cB_addStorage_right)) - posOffset, comName.position.y, newData);
                                mainPosArray[mainPos] = newData;
                                mainPos++;
                                preDoorWidth = doorWidth;
                            }
                        }else {
                            if ((comName.position.z - (doorWidth /2) - 1 < -params.p_d / 2) || (comName.position.z + (doorWidth /2) + 1 > params.p_d / 2)) {
                                if (centerAlign !== true) RemoveDoorComponent(filterRecordRSL[i].uniqueId, filterRecordRSL[i].component_name);
                                continue;
                            }
                        }


                } else {
                    if (comName != undefined) {
                        comName.position.set((params.p_w / 2)- (Number(params.cB_addStorage_right)) - posOffset, comName.position.y, comName.position.z);
                    }
                }

            }
        }

        if (filterRecordFS.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "c_b_f_s_w"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (params.p_w - filterRecordFS.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordFS.length + 1);                        
            for (var i = 0; i <= filterRecordFS.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordFS[i].component_name + filterRecordFS[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "w" || str == "center" || centerAlign) {
                    let componentdimension = filterRecordFS[i].name.split("x");
                    let doorWidth = (filterRecordFS[i].entry_type == "garage_door" || filterRecordFS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordFS[i].entry_type == "garage_door" || filterRecordFS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                        if (centerAlign == true && disBtw >=1) {
                            if (mainPos == 0) {
                                newData = (-params.p_w / 2) + ((doorWidth / 2) + 1);
                                if (centerAlign === true)  newData = (-params.p_w / 2) + ((doorWidth / 2) + disBtw);
                            } else {
                                newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                            }
                            if (comName != undefined) {
                                comName.position.set(newData, comName.position.y, -(params.p_d / 2 )+ Number(params.p_u_t)+ posOffset);
                                mainPosArray[mainPos] = newData;
                                mainPos++;
                                preDoorWidth = doorWidth;
                            }
                        }else {
                            comName.position.z = -(params.p_d / 2 )+ Number(params.p_u_t)+ posOffset;
                            if ((comName.position.x + (doorWidth / 2) + 1 > params.p_w / 2) || (comName.position.x - (doorWidth / 2) - 1 < -params.p_w / 2)) {
                                if (centerAlign !== true) RemoveDoorComponent(filterRecordFS[i].uniqueId, filterRecordFS[i].component_name);
                                continue;
                            }
                        }

                } else {
                    if (comName != undefined) {
                        comName.position.set(comName.position.x, comName.position.y, -(params.p_d / 2 )+ Number(params.p_u_t) + posOffset);
                    }
                }

            }
        }

        if (filterRecordLS.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "c_b_l_s_w"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (Number(params.p_u_t) - filterRecordLS.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordLS.length + 1);                        
            for (var i = 0; i <= filterRecordLS.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordLS[i].component_name + filterRecordLS[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "l" || str == "center" || centerAlign) {
                    let componentdimension = filterRecordLS[i].name.split("x");
                    let doorWidth = (filterRecordLS[i].entry_type == "garage_door" || filterRecordLS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordLS[i].entry_type == "garage_door" || filterRecordLS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                        if (centerAlign == true && disBtw >=1) {
                            if (mainPos == 0) {
                                newData = (-params.p_d / 2) + ((doorWidth / 2) + 1);
                                if (centerAlign === true)  newData = (-params.p_d / 2) + ((doorWidth / 2) + disBtw);
                            } else {
                                newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                            }
                            if (comName != undefined) {
                                comName.position.set(comName.position.x, comName.position.y, newData);
                                mainPosArray[mainPos] = newData;
                                mainPos++;
                                preDoorWidth = doorWidth;
                            }
                        } else {
                            if (((comName.position.z + (doorWidth / 2) + 1) > -(params.p_d / 2) + Number(params.p_u_t)) || (comName.position.z - (doorWidth/2) - 1 < -params.p_d/2) ) {
                                if (centerAlign !== true) RemoveDoorComponent(filterRecordLS[i].uniqueId, filterRecordLS[i].component_name);
                                continue;
                            }
                        }

                } else {
                    if (comName != undefined) {
                        comName.position.set(-params.p_w / 2 - posOffset, comName.position.y, comName.position.z);
                    }
                }

            }
        }

        if (filterRecordRS.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "c_b_r_s_w"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (Number(params.p_u_t) - filterRecordRS.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordRS.length + 1);                        
            for (var i = 0; i <= filterRecordRS.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordRS[i].component_name + filterRecordRS[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "l" || str == "center" || centerAlign) {
                    let componentdimension = filterRecordRS[i].name.split("x");
                    let doorWidth = (filterRecordRS[i].entry_type == "garage_door" || filterRecordRS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordRS[i].entry_type == "garage_door" || filterRecordRS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                        if (centerAlign == true && disBtw >=1) {
                            if (mainPos == 0) {
                                newData = (-params.p_d / 2) + ((doorWidth / 2) + 1);
                                if (centerAlign === true)  newData = (-params.p_d / 2) + ((doorWidth / 2) + disBtw);
                            } else {
                                newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                            }

                            if (comName != undefined) {
                                comName.position.set(comName.position.x, comName.position.y, newData);
                                mainPosArray[mainPos] = newData;
                                mainPos++;
                                preDoorWidth = doorWidth;
                            }
                        } else {
                            if (((comName.position.z + (doorWidth / 2) + 1) > -(params.p_d / 2) + Number(params.p_u_t)) || (comName.position.z - (doorWidth/2) - 1 < -params.p_d/2) ) {
                                if (centerAlign !== true) RemoveDoorComponent(filterRecordRS[i].uniqueId, filterRecordRS[i].component_name);
                                continue;
                            }
                        }


                } else {
                    if (comName != undefined) {
                        comName.position.set(params.p_w / 2 + posOffset, comName.position.y, comName.position.z);
                    }
                }

            }
        }

        if (filterRecordFSL.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "c_b_f_s_l_w"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
                    
            if (centerAlign === true) disBtw = (Number(params.cB_addStorage_front) - filterRecordFSL.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordFSL.length + 1);                        
            for (var i = 0; i <= filterRecordFSL.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordFSL[i].component_name + filterRecordFSL[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "l" || str == "center" || centerAlign) {
                    let componentdimension = filterRecordFSL[i].name.split("x");
                    let doorWidth = (filterRecordFSL[i].entry_type == "garage_door" || filterRecordFSL[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordFSL[i].entry_type == "garage_door" || filterRecordFSL[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;
                    if (mainPos == 0) {
                        newData = (params.p_d / 2) - ((doorWidth / 2) + 1);
                        if (centerAlign === true)  newData = (params.p_d / 2) - ((doorWidth / 2) + disBtw);
                    } else {
                        newData = Number(mainPosArray[mainPos - 1]) - ((doorWidth/2)+(preDoorWidth/2) + disBtw);
        
                    }
                    if (newData  - (doorWidth / 2) - 1 < (params.p_d / 2) - Number(params.cB_addStorage_front)) {
                        if (centerAlign !== true) RemoveDoorComponent(filterRecordFSL[i].uniqueId, filterRecordFSL[i].component_name);
                        continue;
                    }
                    if (comName != undefined) {
                        comName.position.set(comName.position.x, comName.position.y, newData);
                        mainPosArray[mainPos] = newData;
                        mainPos++;
                        preDoorWidth = doorWidth;
                    }
        
        
                } else {
                    if (comName != undefined) {
                        comName.position.set(-params.p_w / 2 - posOffset, comName.position.y, comName.position.z);
                    }
                }
        
            }
        }
        
        if (filterRecordFSR.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "c_b_f_s_r_w"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
                    
            if (centerAlign === true) disBtw = (Number(params.cB_addStorage_front) - filterRecordFSR.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordFSR.length + 1);                        
            for (var i = 0; i <= filterRecordFSR.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordFSR[i].component_name + filterRecordFSR[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "l" || str == "center" || centerAlign) {
                    let componentdimension = filterRecordFSR[i].name.split("x");
                    let doorWidth = (filterRecordFSR[i].entry_type == "garage_door" || filterRecordFSR[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordFSR[i].entry_type == "garage_door" || filterRecordFSR[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;
                    if (mainPos == 0) {
                        newData = (params.p_d / 2) - ((doorWidth / 2) + 1);
                        if (centerAlign === true)  newData = (params.p_d / 2) - ((doorWidth / 2) + disBtw);
                    } else {
                        newData = Number(mainPosArray[mainPos - 1]) - ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                    }
                    if (newData  - (doorWidth / 2) - 1 < (params.p_d / 2) - Number(params.cB_addStorage_front)) {
                        if (centerAlign !== true) RemoveDoorComponent(filterRecordFSR[i].uniqueId, filterRecordFSR[i].component_name);
                        continue;
                    }
                    if (comName != undefined) {
                        comName.position.set(comName.position.x, comName.position.y, newData);
                        mainPosArray[mainPos] = newData;
                        mainPos++;
                        preDoorWidth = doorWidth;
                    }
        
        
                } else {
                    if (comName != undefined) {
                        comName.position.set(params.p_w / 2 + posOffset, comName.position.y, comName.position.z);
                    }
                }
        
            }
        }
        
        if (filterRecordFSB.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "c_b_f_s_b_w"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
                    
            if (centerAlign === true) disBtw = (params.p_w - filterRecordFSB.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordFSB.length + 1);                        
            for (var i = 0; i <= filterRecordFSB.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordFSB[i].component_name + filterRecordFSB[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "w" || str == "center" || centerAlign) {
                    let componentdimension = filterRecordFSB[i].name.split("x");
                    let doorWidth = (filterRecordFSB[i].entry_type == "garage_door" || filterRecordFSB[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordFSB[i].entry_type == "garage_door" || filterRecordFSB[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;
        
                    if (mainPos == 0) {
                        newData = (-params.p_w / 2) + ((doorWidth / 2) + 1);
                        if (centerAlign === true)  newData = (-params.p_w / 2) + ((doorWidth / 2) + disBtw);
                    } else {
                        newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                    }
                    if (newData + (doorWidth / 2) + 1 > params.p_w / 2) {
                        if (centerAlign !== true) RemoveDoorComponent(filterRecordFSB[i].uniqueId, filterRecordFSB[i].component_name);
                        continue;
                    }
                    if (comName != undefined) {
                        comName.position.set(newData, comName.position.y, (params.p_d / 2 )- Number(params.cB_addStorage_front) - posOffset);
                        mainPosArray[mainPos] = newData;
                        mainPos++;
                        preDoorWidth = doorWidth;
                    }
        
                } else {
                    if (comName != undefined) {
                        comName.position.set(comName.position.x, comName.position.y, (params.p_d / 2 )- Number(params.cB_addStorage_front) - posOffset);
                    }
                }
        
            }
        }
        if (filterRecordLLL.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "L_L_L_W"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;

            if (centerAlign === true) {                
                disBtw = Number(params.lean_p_d) - filterRecordLLL.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"] ;                        
                disBtw += params.add_left_back_lean_porch ? params.leanB_p_w: 0;
                disBtw += params.add_left_front_lean_porch ? params.leanF_p_w: 0;
                disBtw /= (filterRecordLLL.length + 1);
            }
            for (var i = 0; i <= filterRecordLLL.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordLLL[i].component_name + filterRecordLLL[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "lean_l" || str == "l" || centerAlign) {
                    let componentdimension = filterRecordLLL[i].name.split("x");
                    let doorWidth = (filterRecordLLL[i].entry_type == "garage_door" || filterRecordLLL[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordLLL[i].entry_type == "garage_door" || filterRecordLLL[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                        if (centerAlign == true && disBtw >=1) {
                            if (mainPos == 0) {
                                if(params.leantoAlignmentLeft=="1"){
                                newData = (-params.lean_p_d / 2) + ((doorWidth / 2) +1);
                                if (centerAlign === true) newData = (-params.lean_p_d / 2) + ((doorWidth / 2) + disBtw);
        
                                if(params.add_left_back_lean_porch == false){
                                    newData = (-params.lean_p_d / 2) + ((doorWidth / 2) +1);
                                    if (centerAlign === true) newData = (-params.lean_p_d / 2) + ((doorWidth / 2) +disBtw);
                                }
                                
                                if (params.add_left_back_lean_porch === true) {
                                    newData = (-params.lean_p_d / 2) - (params.leanB_p_w) + ((doorWidth / 2) +1);
                                    if (centerAlign === true) newData = (-params.lean_p_d / 2) - (params.leanB_p_w) + ((doorWidth / 2) +disBtw);
                                }
        
                                }
                                if(params.leantoAlignmentLeft=="2"){
                                    newData = ((params.p_d/2)-params.lean_p_d) + ((doorWidth / 2) +1);
                                    if (centerAlign === true) newData = ((params.p_d/2)-params.lean_p_d) + ((doorWidth / 2) +disBtw);
                                    }
                                    if(params.leantoAlignmentLeft=="3"){
                                        newData = -(params.p_d/2) + ((doorWidth / 2) +1);
                                        if (centerAlign === true) newData = -(params.p_d/2) + ((doorWidth / 2) +disBtw);
                                        if(params.add_left_back_lean_porch == true){
                                            newData = -(params.p_d/2) -(params.leanB_p_w) + ((doorWidth / 2) +1);
                                            if (centerAlign === true)  newData = -(params.p_d/2) -(params.leanB_p_w) + ((doorWidth / 2) +disBtw);
                                        }
                                        }
                            } else {
                                newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                            }

                            if (comName != undefined) {
                                comName.position.set(comName.position.x, comName.position.y, newData);
                                mainPosArray[mainPos] = newData;
                                mainPos++;
                                preDoorWidth = doorWidth;
                            }
                        } else {
                            if ( params.leantoAlignmentLeft=="1") {
                                if(params.add_left_front_lean_porch === true && params.add_left_back_lean_porch == false && ((comName.position.z + (doorWidth/2) + 1 > params.lean_p_d / 2 + (params.leanF_p_w)) || (comName.position.z -(doorWidth/2) -1 < -params.lean_p_d / 2))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordLLL[i].uniqueId, filterRecordLLL[i].component_name);
                                    continue;
                                }
                                if(params.add_left_front_lean_porch === false && params.add_left_back_lean_porch == false && ((comName.position.z + (doorWidth/2) + 1 > params.lean_p_d / 2) || (comName.position.z - (doorWidth/2) - 1 < -params.lean_p_d / 2))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordLLL[i].uniqueId, filterRecordLLL[i].component_name);
                                    continue;
                                }
        
                                if(params.add_left_front_lean_porch === false && params.add_left_back_lean_porch == true && ((comName.position.z + (doorWidth/2) + 1 > params.lean_p_d / 2) || (comName.position.z -(doorWidth/2) -1 < -params.lean_p_d / 2 - params.leanB_p_w))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordLLL[i].uniqueId, filterRecordLLL[i].component_name);
                                    continue;
                                }
                                if(params.add_left_front_lean_porch === true && params.add_left_back_lean_porch == true && ((comName.position.z + (doorWidth/2) + 1 > params.lean_p_d / 2 + params.leanF_p_w) || (comName.position.z - (doorWidth/2) - 1 < -params.lean_p_d / 2- params.leanB_p_w))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordLLL[i].uniqueId, filterRecordLLL[i].component_name);
                                    continue;
                                }
                            }
                            if ( params.leantoAlignmentLeft=="2") {
                                if(params.add_left_front_lean_porch === true && ((comName.position.z + (doorWidth/2) + 1 > (params.p_d/2) + (params.leanF_p_w)) || (comName.position.z - (doorWidth/2) - 1 < (params.p_d/2) -params.lean_p_d))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordLLL[i].uniqueId, filterRecordLLL[i].component_name);
                                    continue;
                                }
                                if(params.add_left_front_lean_porch === false && ((comName.position.z + (doorWidth/2) + 1 > (params.p_d/2)) || (comName.position.z - (doorWidth/2) - 1 < (params.p_d/2)-params.lean_p_d))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordLLL[i].uniqueId, filterRecordLLL[i].component_name);
                                    continue;
                                }
                            }
                            if (params.leantoAlignmentLeft=="3") {
                                if(params.add_left_back_lean_porch === true && ((comName.position.z - (doorWidth/2) - 1 < -(params.p_d/2)-params.leanB_p_w) || (comName.position.z + (doorWidth/2) + 1 > -(params.p_d/2)+ params.lean_p_d)) ){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordLLL[i].uniqueId, filterRecordLLL[i].component_name);
                                    continue;
                                }
                                if(params.add_left_back_lean_porch === false && ((comName.position.z - (doorWidth/2) - 1 < -(params.p_d/2)) || (comName.position.z + (doorWidth/2) + 1 > -(params.p_d/2)+ params.lean_p_d))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordLLL[i].uniqueId, filterRecordLLL[i].component_name);
                                    continue;
                                }
                            }
                        }

                } else {
                    if (comName != undefined) {
                        comName.position.set(-params.p_w / 2 - params.lean_p_w - posOffset, comName.position.y, comName.position.z);
                    }
                }

            }
        }

        if (filterRecordRLR.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "R_L_R_W"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;

            if (centerAlign === true) {                
                disBtw = Number(params.leanR_p_d) - filterRecordRLR.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"];                        
                disBtw += params.add_right_back_lean_porch? params.leanB_p_w: 0;
                disBtw += params.add_right_front_lean_porch? params.leanF_p_w: 0;
                disBtw /= (filterRecordRLR.length + 1);
            }

            for (var i = 0; i <= filterRecordRLR.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordRLR[i].component_name + filterRecordRLR[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "leanR_l"|| str == "l" || centerAlign) {
                    let componentdimension = filterRecordRLR[i].name.split("x");
                    let doorWidth = (filterRecordRLR[i].entry_type == "garage_door" || filterRecordRLR[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordRLR[i].entry_type == "garage_door" || filterRecordRLR[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                        if (centerAlign == true && disBtw >=1) {
                            if (mainPos == 0) {
                                if(params.leantoAlignmentRight=="1"){
                                newData = (-params.leanR_p_d / 2) + ((doorWidth / 2) +1);
                                if (centerAlign === true) newData = (-params.leanR_p_d / 2) + ((doorWidth / 2) + disBtw);
        
                                if(params.add_right_back_lean_porch == false){
                                    newData = (-params.leanR_p_d / 2) + ((doorWidth / 2) +1);
                                    if (centerAlign === true) newData = (-params.leanR_p_d / 2) + ((doorWidth / 2) +disBtw);
                                }
                                
                                if (params.add_right_back_lean_porch === true) {
                                    newData = (-params.leanR_p_d / 2) - (params.leanB_p_w) + ((doorWidth / 2) +1);
                                    if (centerAlign === true) newData = (-params.leanR_p_d / 2) - (params.leanB_p_w) + ((doorWidth / 2) +disBtw);
                                }
                                }
                                if(params.leantoAlignmentRight=="2"){
                                    newData = ((params.p_d/2)-params.leanR_p_d) + ((doorWidth / 2) +1);
                                    if (centerAlign === true) newData = ((params.p_d/2)-params.leanR_p_d) + ((doorWidth / 2) +disBtw);
                                    }
                                    if(params.leantoAlignmentRight=="3"){
                                        newData = -(params.p_d/2) + ((doorWidth / 2) +1);
                                        if (centerAlign === true) newData = -(params.p_d/2) + ((doorWidth / 2) +disBtw);
                                        if(params.add_right_back_lean_porch == true){
                                            newData = -(params.p_d/2) -(params.leanB_p_w) + ((doorWidth / 2) +1);
                                            if (centerAlign === true) newData = -(params.p_d/2) -(params.leanB_p_w) + ((doorWidth / 2) +disBtw);
                                        }
                                        }
                            } else {
                                newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                            }

                            if (comName != undefined) {
                                comName.position.set(comName.position.x, comName.position.y, newData);
                                mainPosArray[mainPos] = newData;
                                mainPos++;
                                preDoorWidth = doorWidth;
                            }
                        } else {
                            if ( params.leantoAlignmentRight=="1") {
                                if(params.add_right_front_lean_porch === true && params.add_right_back_lean_porch == false && ((comName.position.z + (doorWidth/2) + 1 > params.leanR_p_d / 2 + (params.leanF_p_w)) || (comName.position.z -(doorWidth/2) -1 < -params.leanR_p_d / 2))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordRLR[i].uniqueId, filterRecordRLR[i].component_name);
                                    continue;
                                }
                                if(params.add_right_front_lean_porch === false && params.add_right_back_lean_porch == false && ((comName.position.z + (doorWidth/2) + 1 > params.leanR_p_d / 2) || (comName.position.z - (doorWidth/2) - 1 < -params.leanR_p_d / 2))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordRLR[i].uniqueId, filterRecordRLR[i].component_name);
                                    continue;
                                }
    
                                if(params.add_right_front_lean_porch === true && params.add_right_back_lean_porch == true && ((comName.position.z + (doorWidth/2) + 1 > params.leanR_p_d / 2 + (params.leanF_p_w)) || (comName.position.z -(doorWidth/2) -1 < -params.leanR_p_d / 2 -params.leanB_p_w))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordRLR[i].uniqueId, filterRecordRLR[i].component_name);
                                    continue;
                                }
                                if(params.add_right_front_lean_porch === false && params.add_right_back_lean_porch == true && ((comName.position.z + (doorWidth/2) + 1 > params.leanR_p_d / 2) || (comName.position.z -(doorWidth/2) -1 < -params.leanR_p_d / 2 -params.leanB_p_w))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordRLR[i].uniqueId, filterRecordRLR[i].component_name);
                                    continue;
                                }
                            }
                            if ( params.leantoAlignmentRight=="2") {
                                if(params.add_right_front_lean_porch === true && ((comName.position.z + (doorWidth/2) + 1 > (params.p_d/2) + (params.leanF_p_w)) || (comName.position.z - (doorWidth/2) - 1 < (params.p_d/2) -params.leanR_p_d))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordRLR[i].uniqueId, filterRecordRLR[i].component_name);
                                    continue;
                                }
                                if(params.add_right_front_lean_porch === false && ((comName.position.z + (doorWidth/2) + 1 > (params.p_d/2)) || (comName.position.z - (doorWidth/2) - 1 < (params.p_d/2)-params.leanR_p_d))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordRLR[i].uniqueId, filterRecordRLR[i].component_name);
                                    continue;
                                }
                            }
                            if (params.leantoAlignmentRight=="3") {
                                if(params.add_right_back_lean_porch === true && ((comName.position.z - (doorWidth/2) - 1 < -(params.p_d/2)-params.leanB_p_w) || (comName.position.z + (doorWidth/2) + 1 > -(params.p_d/2)+ params.leanR_p_d)) ){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordRLR[i].uniqueId, filterRecordRLR[i].component_name);
                                    continue;
                                }
                                if(params.add_right_back_lean_porch === false && ((comName.position.z - (doorWidth/2) - 1 < -(params.p_d/2)) || (comName.position.z + (doorWidth/2) + 1 > -(params.p_d/2)+ params.leanR_p_d))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordRLR[i].uniqueId, filterRecordRLR[i].component_name);
                                    continue;
                                }
                            }
                        }


                } else {
                    if (comName != undefined) {
                        comName.position.set(params.p_w / 2 + params.leanR_p_w + posOffset, comName.position.y, comName.position.z);
                    }
                }

            }
        }

        if (filterRecordFLF.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "F_L_F_W"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;

            if (centerAlign === true) {                
                disBtw = Number(params.leanF_p_d) - filterRecordFLF.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"];                        
                disBtw += params.add_left_front_lean_porch ? params.lean_p_w: 0;
                disBtw += params.add_right_front_lean_porch ? params.leanR_p_w: 0;
                disBtw /= (filterRecordFLF.length + 1);
            }
            for (var i = 0; i <= filterRecordFLF.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordFLF[i].component_name + filterRecordFLF[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "leanF_l" || str == "w" || centerAlign) {
                    let componentdimension = filterRecordFLF[i].name.split("x");
                    let doorWidth = (filterRecordFLF[i].entry_type == "garage_door" || filterRecordFLF[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordFLF[i].entry_type == "garage_door" || filterRecordFLF[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                        if (centerAlign == true && disBtw >=1) {
                            
                            if (mainPos == 0) {
                                if(params.leantoAlignmentFront=="1"){
                                newData = (-params.leanF_p_d / 2) + ((doorWidth / 2) +1);
                                if (centerAlign === true) newData = (-params.leanF_p_d / 2) + ((doorWidth / 2) +disBtw);

                                if(params.add_left_front_lean_porch == false){
                                    newData = (-params.leanF_p_d / 2) + ((doorWidth / 2) +1);
                                    if (centerAlign === true) newData = (-params.leanF_p_d / 2) + ((doorWidth / 2) + disBtw);
                                }
                                
                                if (params.add_left_front_lean_porch === true) {
                                    newData = (-params.leanF_p_d / 2) - params.lean_p_w + ((doorWidth / 2) +1);
                                    if (centerAlign === true) newData = (-params.leanF_p_d / 2) - params.lean_p_w + ((doorWidth / 2) +disBtw);
                                }

                                }
                                if(params.leantoAlignmentFront=="3"){
                                    newData = ((params.p_w/2)-params.leanF_p_d) + ((doorWidth / 2) +1);
                                    if (centerAlign === true) newData = ((params.p_w/2)-params.leanF_p_d) + ((doorWidth / 2) +disBtw);
                                    }
                                    if(params.leantoAlignmentFront=="2"){
                                        newData = -(params.p_w/2) + ((doorWidth / 2) +1);
                                        if (centerAlign === true) newData = -(params.p_w/2) + ((doorWidth / 2) +disBtw);
                                        if(params.add_left_front_lean_porch == true){
                                            newData = -(params.p_w/2) -(params.lean_p_w) + ((doorWidth / 2) +1);
                                            if (centerAlign === true) newData = -(params.p_w/2) -(params.lean_p_w) + ((doorWidth / 2) +disBtw);
                                        }
                                        }
                            } else {;
                                newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                            }

                            if (comName != undefined) {
                                comName.position.set(newData , comName.position.y, comName.position.z );
                                mainPosArray[mainPos] = newData;
                                mainPos++;
                                preDoorWidth = doorWidth;
                            }
                        } else {
                            if (params.leantoAlignmentFront=="1") {
        
                                if(params.add_right_front_lean_porch === true && params.add_left_front_lean_porch == false && ((comName.position.x + (doorWidth/2) + 1 > params.leanF_p_d / 2 + (params.leanR_p_w)) || (comName.position.x - (doorWidth/2) - 1 < -params.leanF_p_d / 2))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordFLF[i].uniqueId, filterRecordFLF[i].component_name);
                                    continue;
                                }
                                if(params.add_right_front_lean_porch === false && params.add_left_front_lean_porch == true  && ((comName.position.x + (doorWidth/2) + 1 > params.leanF_p_d / 2) || (comName.position.x - (doorWidth/2) - 1 < -params.leanF_p_d / 2 -params.lean_p_w))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordFLF[i].uniqueId, filterRecordFLF[i].component_name);
                                    continue;
                                }
                                if(params.add_right_front_lean_porch === true && params.add_left_front_lean_porch == true  && ((comName.position.x + (doorWidth/2) + 1 > params.leanF_p_d / 2 + (params.leanR_p_w)) || (comName.position.x - (doorWidth/2) - 1 < -params.leanF_p_d / 2-params.lean_p_w))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordFLF[i].uniqueId, filterRecordFLF[i].component_name);
                                    continue;
                                }
        
                                if(params.add_right_front_lean_porch === false && params.add_left_front_lean_porch == false  && ((comName.position.x + (doorWidth/2) + 1 > params.leanF_p_d / 2) || (comName.position.x - (doorWidth/2) - 1 < -params.leanF_p_d / 2))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordFLF[i].uniqueId, filterRecordFLF[i].component_name);
                                    continue;
                                }
                            }
                            if (params.leantoAlignmentFront=="3") {
                                if(params.add_right_front_lean_porch === true && ((comName.position.x + (doorWidth/2) + 1 > params.p_w / 2 + (params.leanR_p_w)) || (comName.position.x - (doorWidth/2) - 1 < params.p_w / 2 -params.leanF_p_d))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordFLF[i].uniqueId, filterRecordFLF[i].component_name);
                                    continue;
                                }
                                if(params.add_right_front_lean_porch === false && ((comName.position.x + (doorWidth/2) + 1 > params.p_w / 2) || (comName.position.x - (doorWidth/2) - 1 < params.p_w / 2 -params.leanF_p_d))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordFLF[i].uniqueId, filterRecordFLF[i].component_name);
                                    continue;
                                }
        
                            }
                            if (params.leantoAlignmentFront=="2") {
                                if(params.add_left_front_lean_porch === true && ((comName.position.x + (doorWidth/2) + 1 > -params.p_w / 2 + (params.leanF_p_d)) || (comName.position.x - (doorWidth/2) - 1 < -params.p_w / 2 -params.lean_p_w))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordFLF[i].uniqueId, filterRecordFLF[i].component_name);
                                    continue;
                                }
                                if(params.add_left_front_lean_porch === false && ((comName.position.x + (doorWidth/2) + 1 > -params.p_w / 2 + (params.leanF_p_d)) || (comName.position.x - (doorWidth/2) - 1 < -params.p_w / 2))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordFLF[i].uniqueId, filterRecordFLF[i].component_name);
                                    continue;
                                }
                            }
                        }

                } else {
                    if (comName != undefined) {
                        comName.position.set(comName.position.x, comName.position.y,params.p_d / 2 + params.leanF_p_w + posOffset);
                    }
                }

            }
        }

        if (filterRecordBLS.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "B_L_S_W"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;

            if (centerAlign === true) {                
                disBtw = Number(params.leanB_p_d) - filterRecordBLS.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"];                        
                disBtw += params.add_left_back_lean_porch ? params.lean_p_w: 0;
                disBtw += params.add_right_back_lean_porch ? params.leanR_p_w: 0;
                disBtw /= (filterRecordBLS.length + 1)
            }
            for (var i = 0; i <= filterRecordBLS.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordBLS[i].component_name + filterRecordBLS[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "leanB_l" || str == "w" || centerAlign) {
                    let componentdimension = filterRecordBLS[i].name.split("x");
                    let doorWidth = (filterRecordBLS[i].entry_type == "garage_door" || filterRecordBLS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordBLS[i].entry_type == "garage_door" || filterRecordBLS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                        if (centerAlign == true && disBtw >=1) {
                            if (mainPos == 0) {
                                if(params.leantoAlignmentBack=="1"){
                                    newData = (-params.leanB_p_d / 2) + ((doorWidth / 2) +1);
                                    if (centerAlign === true) newData = (-params.leanB_p_d / 2) + ((doorWidth / 2) +disBtw);
                
                                    if(params.add_left_back_lean_porch == false){
                                        newData = (-params.leanB_p_d / 2) + ((doorWidth / 2) +1);
                                        if (centerAlign === true) newData = (-params.leanB_p_d / 2) + ((doorWidth / 2) +disBtw);
                                    }
                                    
                                    if (params.add_left_back_lean_porch === true) {
                                        newData = (-params.leanB_p_d / 2) - params.lean_p_w + ((doorWidth / 2) +1);
                                        if (centerAlign === true) newData = (-params.leanB_p_d / 2) - params.lean_p_w + ((doorWidth / 2) +disBtw);
                                    }
        
                                }
                                if(params.leantoAlignmentBack=="2"){
                                    newData = ((params.p_w/2)-params.leanB_p_d) + ((doorWidth / 2) +1);
                                    if (centerAlign === true) newData = ((params.p_w/2)-params.leanB_p_d) + ((doorWidth / 2) +disBtw);
                                    }
                                    if(params.leantoAlignmentBack=="3"){
                                        newData = -(params.p_w/2) + ((doorWidth / 2) +1);
                                        if (centerAlign === true) newData = -(params.p_w/2) + ((doorWidth / 2) +disBtw);
                                        if(params.add_left_back_lean_porch == true){
                                            newData = -(params.p_w/2) -(params.lean_p_w) + ((doorWidth / 2) +1);
                                            if (centerAlign === true) newData = -(params.p_w/2) -(params.lean_p_w) + ((doorWidth / 2) +disBtw);
                                        }
                                }
                            } else {;
                                newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                            }

                            if (comName != undefined) {
                                comName.position.set(newData , comName.position.y, comName.position.z );
                                mainPosArray[mainPos] = newData;
                                mainPos++;
                                preDoorWidth = doorWidth;
                            }
                        } else {
                            if (params.leantoAlignmentBack=="1") {
                                if(params.add_right_back_lean_porch === true && params.add_left_back_lean_porch == false && ((comName.position.x + (doorWidth/2) + 1 > params.leanB_p_d / 2 + (params.leanR_p_w)) || (comName.position.x - (doorWidth/2) - 1 < -params.leanB_p_d / 2))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordBLS[i].uniqueId, filterRecordBLS[i].component_name);
                                    continue;
                                }
                                if(params.add_right_back_lean_porch === false && params.add_left_back_lean_porch == true  && ((comName.position.x + (doorWidth/2) + 1 > params.leanB_p_d / 2) || (comName.position.x - (doorWidth/2) - 1 < -params.leanB_p_d / 2 -params.lean_p_w))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordBLS[i].uniqueId, filterRecordBLS[i].component_name);
                                    continue;
                                }
                                if(params.add_right_back_lean_porch === true && params.add_left_back_lean_porch == true  && ((comName.position.x + (doorWidth/2) + 1 > params.leanB_p_d / 2 + (params.leanR_p_w)) || (comName.position.x - (doorWidth/2) - 1 < -params.leanB_p_d / 2-params.lean_p_w))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordBLS[i].uniqueId, filterRecordBLS[i].component_name);
                                    continue;
                                }
        
                                if(params.add_right_back_lean_porch === false && params.add_left_back_lean_porch == false  && ((comName.position.x + (doorWidth/2) + 1 > params.leanB_p_d / 2) || (comName.position.x - (doorWidth/2) - 1 < -params.leanB_p_d / 2))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordBLS[i].uniqueId, filterRecordBLS[i].component_name);
                                    continue;
                                }
                            }
                            if (params.leantoAlignmentBack=="3") {
                                if(params.add_left_back_lean_porch === true && ((comName.position.x + (doorWidth/2) + 1 > -params.p_w / 2 + (params.leanB_p_d)) || (comName.position.x - (doorWidth/2) - 1 < -params.p_w / 2 -params.lean_p_w))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordBLS[i].uniqueId, filterRecordBLS[i].component_name);
                                    continue;
                                }
                                if(params.add_left_back_lean_porch === false && ((comName.position.x + (doorWidth/2) + 1 > -params.p_w / 2 + (params.leanB_p_d)) || (comName.position.x - (doorWidth/2) - 1 < -params.p_w / 2))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordBLS[i].uniqueId, filterRecordBLS[i].component_name);
                                    continue;
                                }
        
                            }
                            if (params.leantoAlignmentBack=="2") {
                                if(params.add_right_back_lean_porch === true && ((comName.position.x + (doorWidth/2) + 1 > params.p_w / 2 + (params.leanR_p_w)) || (comName.position.x - (doorWidth/2) - 1 < params.p_w / 2 -params.leanB_p_d))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordBLS[i].uniqueId, filterRecordBLS[i].component_name);
                                    continue;
                                }
                                if(params.add_right_back_lean_porch === false && ((comName.position.x + (doorWidth/2) + 1 > params.p_w / 2) || (comName.position.x - (doorWidth/2) - 1 < params.p_w / 2 -params.leanB_p_d))){
                                    if (centerAlign !== true) RemoveDoorComponent(filterRecordBLS[i].uniqueId, filterRecordBLS[i].component_name);
                                    continue;
                                }
                            }
                        }

                } else {
                    if (comName != undefined) {
                        comName.position.set(comName.position.x, comName.position.y,-params.p_d / 2 - params.leanB_p_w - posOffset);
                    }
                }

            }
        }

        if (filterRecordLLF.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "L_L_F_W"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (Number(params.lean_p_w) - filterRecordLLF.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordLLF.length + 1);                        
            for (var i = 0; i <= filterRecordLLF.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordLLF[i].component_name + filterRecordLLF[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "lean_w" || str == "w" || centerAlign) {
                    let componentdimension = filterRecordLLF[i].name.split("x");
                    let doorWidth = (filterRecordLLF[i].entry_type == "garage_door" || filterRecordLLF[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordLLF[i].entry_type == "garage_door" || filterRecordLLF[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                        if (centerAlign == true && disBtw >=1) {
                            if (mainPos == 0) {
                                newData = (-params.lean_p_w) -params.p_w / 2 +((doorWidth / 2) +1);
                                if (centerAlign === true) newData = (-params.lean_p_w) -params.p_w / 2 +((doorWidth / 2) +disBtw);
                            } else {;
                                newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                            }

                            if (comName != undefined) {
                                comName.position.set(newData , comName.position.y, comName.position.z );
                                mainPosArray[mainPos] = newData;
                                mainPos++;
                                preDoorWidth = doorWidth;
                            }
                        } else {
                            if (comName.position.x + (doorWidth/2) + 1 > params.p_w / -2 || comName.position.x - (doorWidth/2) - 1 < (params.p_w / -2) - params.lean_p_w) {
                                if (centerAlign !== true) RemoveDoorComponent(filterRecordLLF[i].uniqueId, filterRecordLLF[i].component_name);
                                continue;
                            }
                        }


                } else {
                    if (comName != undefined) {
                        if(params.leantoAlignmentLeft=="1"){
                            comName.position.set(comName.position.x, comName.position.y,params.lean_p_d/2 + posOffset);
                        }
                        if(params.leantoAlignmentLeft=="2"){
                            comName.position.set(comName.position.x, comName.position.y,params.p_d/2 + posOffset);
                        }
                        if(params.leantoAlignmentLeft=="3"){
                            comName.position.set(comName.position.x, comName.position.y,-params.p_d/2 + params.lean_p_d + posOffset);
                        }
                    }
                }

            }
        }

        if (filterRecordLLB.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "L_L_B_W"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (Number(params.lean_p_w) - filterRecordLLB.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordLLB.length + 1);                        
            for (var i = 0; i <= filterRecordLLB.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordLLB[i].component_name + filterRecordLLB[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "lean_w" || str == "w" || centerAlign) {
                    let componentdimension = filterRecordLLB[i].name.split("x");
                    let doorWidth = (filterRecordLLB[i].entry_type == "garage_door" || filterRecordLLB[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordLLB[i].entry_type == "garage_door" || filterRecordLLB[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;
                    
                    if (centerAlign == true && disBtw >=1) {                        
                        if (mainPos == 0) {
                            newData = (-params.lean_p_w) -params.p_w / 2 +((doorWidth / 2) +1);
                            if (centerAlign === true) newData = (-params.lean_p_w) -params.p_w / 2 +((doorWidth / 2) + disBtw);
                        } else {;
                            newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                        }

                        if (newData + (doorWidth/2) + 1 > params.p_w / -2 ) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordLLB[i].uniqueId, filterRecordLLB[i].component_name);
                            continue;
                        }
                        if (comName != undefined) {
                            comName.position.set(newData , comName.position.y, comName.position.z );
                            mainPosArray[mainPos] = newData;
                            mainPos++;
                            preDoorWidth = doorWidth;
                        }
                    } else {
                        if (comName.position.x + (doorWidth/2) + 1 > params.p_w / -2 || comName.position.x - (doorWidth/2) - 1 < (params.p_w / -2) - params.lean_p_w) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordLLB[i].uniqueId, filterRecordLLB[i].component_name);
                            continue;
                        }                        
                    }


                } else {
                    if (comName != undefined) {
                        if(params.leantoAlignmentLeft=="1"){
                            comName.position.set(comName.position.x, comName.position.y,-params.lean_p_d/2 - posOffset);
                        }
                        if(params.leantoAlignmentLeft=="2"){
                            comName.position.set(comName.position.x, comName.position.y,params.p_d/2 - params.lean_p_d - posOffset);
                        }
                        if(params.leantoAlignmentLeft=="3"){
                            comName.position.set(comName.position.x, comName.position.y,-params.p_d/2 - posOffset);
                        }
                    }
                }

            }
        }

        if (filterRecordRLF.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "R_L_F_W"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (Number(params.leanR_p_w) - filterRecordRLF.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordRLF.length + 1);                        
            for (var i = 0; i <= filterRecordRLF.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordRLF[i].component_name + filterRecordRLF[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "leanR_w" || str == "w" || centerAlign) {
                    let componentdimension = filterRecordRLF[i].name.split("x");
                    let doorWidth = (filterRecordRLF[i].entry_type == "garage_door" || filterRecordRLF[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordRLF[i].entry_type == "garage_door" || filterRecordRLF[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                    if (centerAlign == true && disBtw >=1) {
                        if (mainPos == 0) {
                            newData = (params.leanR_p_w) +(params.p_w / 2) -((doorWidth / 2) +1);
                            if (centerAlign === true) newData = (params.p_w / 2) + ((doorWidth / 2) +disBtw);
                        } else {;
                            newData = Number(mainPosArray[mainPos - 1]) - ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                            if (centerAlign === true) newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                        }
    
                        if (comName != undefined) {
                            comName.position.set(newData , comName.position.y, comName.position.z );
                            mainPosArray[mainPos] = newData;
                            mainPos++;
                            preDoorWidth = doorWidth;
                        }
                    } else{
                        if ((comName.position.x - (doorWidth/2) - 1 < params.p_w / 2) || (comName.position.x + (doorWidth/2) + 1 > params.p_w / 2 + params.leanR_p_w) ) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordRLF[i].uniqueId, filterRecordRLF[i].component_name);
                            continue;
                        }                        
                    }

                } else {
                    if (comName != undefined) {
                        if(params.leantoAlignmentRight=="1"){
                            comName.position.set(comName.position.x, comName.position.y,params.leanR_p_d/2 + posOffset);
                        }
                        if(params.leantoAlignmentRight=="2"){
                            comName.position.set(comName.position.x, comName.position.y,params.p_d/2 + posOffset);
                        }
                        if(params.leantoAlignmentRight=="3"){
                            comName.position.set(comName.position.x, comName.position.y,-params.p_d/2 + params.leanR_p_d + posOffset);
                        }
                    }
                }

            }
        }

        if (filterRecordRLB.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "R_L_B_W"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (Number(params.leanR_p_w) - filterRecordRLB.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordRLB.length + 1);                        
            for (var i = 0; i <= filterRecordRLB.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordRLB[i].component_name + filterRecordRLB[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "leanR_w" || str == "w" || centerAlign) {
                    let componentdimension = filterRecordRLB[i].name.split("x");
                    let doorWidth = (filterRecordRLB[i].entry_type == "garage_door" || filterRecordRLB[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordRLB[i].entry_type == "garage_door" || filterRecordRLB[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                        if (centerAlign == true && disBtw >=1) {
                            if (mainPos == 0) {
                                newData = (params.leanR_p_w) +(params.p_w / 2) -((doorWidth / 2) +1);
                                if (centerAlign === true) newData = (params.p_w / 2) +((doorWidth / 2) +disBtw);
                            } else {;
                                newData = Number(mainPosArray[mainPos - 1]) - ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                                if (centerAlign === true) newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                            }
        
                            if (comName != undefined) {
                                comName.position.set(newData , comName.position.y, comName.position.z );
                                mainPosArray[mainPos] = newData;
                                mainPos++;
                                preDoorWidth = doorWidth;
                            }
                        } else {
                            if ((comName.position.x - (doorWidth/2) - 1 < params.p_w / 2) || (comName.position.x + (doorWidth/2) + 1 > params.p_w / 2 + params.leanR_p_w) ) {
                                if (centerAlign !== true) RemoveDoorComponent(filterRecordRLB[i].uniqueId, filterRecordRLB[i].component_name);
                                continue;
                            }                            
                        }


                } else {
                    if (comName != undefined) {
                        if(params.leantoAlignmentRight=="1"){
                            comName.position.set(comName.position.x, comName.position.y,params.leanR_p_d/-2 - posOffset);
                        }
                        if(params.leantoAlignmentRight=="2"){
                            comName.position.set(comName.position.x, comName.position.y,params.p_d/2 - params.leanR_p_d - posOffset);
                        }
                        if(params.leantoAlignmentRight=="3"){
                            comName.position.set(comName.position.x, comName.position.y,-params.p_d/2  - posOffset);
                        }
                    }
                }

            }
        }

        if (filterRecordFLL.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "F_L_L_W"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (Number(params.leanF_p_w) - filterRecordFLL.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordFLL.length + 1);                        
            for (var i = 0; i <= filterRecordFLL.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordFLL[i].component_name + filterRecordFLL[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "leanF_w" || str == "l" || centerAlign) {
                    let componentdimension = filterRecordFLL[i].name.split("x");
                    let doorWidth = (filterRecordFLL[i].entry_type == "garage_door" || filterRecordFLL[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordFLL[i].entry_type == "garage_door" || filterRecordFLL[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                    if (centerAlign == true && disBtw >=1) {
                        if (mainPos == 0) {
                            newData = (params.leanF_p_w) +params.p_d / 2 -((doorWidth / 2) +1);
                            if (centerAlign === true) newData = params.p_d / 2 + ((doorWidth / 2) +disBtw);
                        } else {;
                            newData = Number(mainPosArray[mainPos - 1]) - ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                            if (centerAlign === true)   newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                        }
    
                        if (comName != undefined) {
                            comName.position.set(comName.position.x, comName.position.y,newData );
                            mainPosArray[mainPos] = newData;
                            mainPos++;
                            preDoorWidth = doorWidth;
                        }
                    } else {
                        if (((comName.position.z - (doorWidth/2) - 1) < (params.p_d / 2)) || ((comName.position.z + (doorWidth/2) + 1) > (params.p_d / 2 + params.leanF_p_w))) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordFLL[i].uniqueId, filterRecordFLL[i].component_name);
                            continue;
                        }                        
                    }

                } else {
                    if (comName != undefined) {
                        if(params.leantoAlignmentFront=="1"){
                            comName.position.set(params.leanF_p_d/-2 - posOffset,comName.position.y, comName.position.z);
                        }
                        if(params.leantoAlignmentFront=="2"){
                            comName.position.set(params.p_w/-2 - posOffset,comName.position.y, comName.position.z);
                        }
                        if(params.leantoAlignmentFront=="3"){
                            comName.position.set(params.p_w/2 - params.leanF_p_d - posOffset,comName.position.y, comName.position.z);
                        }
                    }
                }

            }
        }

        if (filterRecordFLR.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "F_L_R_W"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (Number(params.leanF_p_w) - filterRecordFLR.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordFLR.length + 1);                        
            for (var i = 0; i <= filterRecordFLR.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordFLR[i].component_name + filterRecordFLR[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "leanF_w" || str == "l" || centerAlign) {
                    let componentdimension = filterRecordFLR[i].name.split("x");
                    let doorWidth = (filterRecordFLR[i].entry_type == "garage_door" || filterRecordFLR[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordFLR[i].entry_type == "garage_door" || filterRecordFLR[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                        if (centerAlign == true && disBtw >=1) {
                            if (mainPos == 0) {
                                newData = (params.leanF_p_w) +params.p_d / 2 -((doorWidth / 2) +1);
                                if (centerAlign === true) newData = params.p_d / 2 + ((doorWidth / 2) +disBtw);
                            } else {;
                                newData = Number(mainPosArray[mainPos - 1]) - ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                                if (centerAlign === true) newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                            }
        
                            if (comName != undefined) {
                                comName.position.set(comName.position.x, comName.position.y,newData );
                                mainPosArray[mainPos] = newData;
                                mainPos++;
                                preDoorWidth = doorWidth;
                            }
                        } else {
                            if (((comName.position.z - (doorWidth/2) - 1) < (params.p_d / 2)) || ((comName.position.z + (doorWidth/2) + 1) > (params.p_d / 2 + params.leanF_p_w))) {
                                if (centerAlign !== true) RemoveDoorComponent(filterRecordFLR[i].uniqueId, filterRecordFLR[i].component_name);
                                continue;
                            }                            
                        }


                } else {
                    if (comName != undefined) {
                        if(params.leantoAlignmentFront=="1"){
                            comName.position.set(params.leanF_p_d/2 + posOffset,comName.position.y, comName.position.z);
                        }
                        if(params.leantoAlignmentFront=="2"){
                            comName.position.set(-params.p_w/2 + params.leanF_p_d + posOffset,comName.position.y, comName.position.z);
                        }
                        if(params.leantoAlignmentFront=="3"){
                            comName.position.set(params.p_w/2 + posOffset,comName.position.y, comName.position.z);
                        }
                    }
                }

            }
        }

        if (filterRecordBLB.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "B_L_B_W"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (Number(params.leanB_p_w) - filterRecordBLB.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordBLB.length + 1);                        
            for (var i = 0; i <= filterRecordBLB.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordBLB[i].component_name + filterRecordBLB[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "leanB_w" || str == "l" || centerAlign) {
                    let componentdimension = filterRecordBLB[i].name.split("x");
                    let doorWidth = (filterRecordBLB[i].entry_type == "garage_door" || filterRecordBLB[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordBLB[i].entry_type == "garage_door" || filterRecordBLB[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                        if (centerAlign == true && disBtw >=1) {
                            if (mainPos == 0) {
                                newData = (-params.leanB_p_w) -params.p_d / 2 +((doorWidth / 2) +1);
                                if (centerAlign === true) newData = (-params.leanB_p_w) -params.p_d / 2 +((doorWidth / 2) +disBtw);
                            } else {;
                                newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                            }
        
                            if (comName != undefined) {
                                comName.position.set(comName.position.x, comName.position.y,newData );
                                mainPosArray[mainPos] = newData;
                                mainPos++;
                                preDoorWidth = doorWidth;
                            }
                        } else {
                            if (((comName.position.z - (doorWidth/2) - 1) < (-params.p_d / 2 - params.leanB_p_w)) || ((comName.position.z + (doorWidth/2) + 1) > (-params.p_d / 2))) {
                                if (centerAlign !== true) RemoveDoorComponent(filterRecordBLB[i].uniqueId, filterRecordBLB[i].component_name);
                                continue;
                            }                            
                        }

                } else {
                    if (comName != undefined) {
                        if(params.leantoAlignmentBack =="1"){
                            comName.position.set(params.leanB_p_d/-2 - posOffset,comName.position.y, comName.position.z);
                        }
                        if(params.leantoAlignmentBack =="3"){
                            comName.position.set(params.p_w/-2 - posOffset,comName.position.y, comName.position.z);
                        }
                        if(params.leantoAlignmentBack =="2"){
                            comName.position.set(params.p_w/2 - params.leanB_p_d - posOffset,comName.position.y, comName.position.z);
                        }
                    }
                }

            }
        }

        if (filterRecordBLF.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "B_L_F_W"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (Number(params.leanB_p_w) - filterRecordBLF.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordBLF.length + 1);                        
            for (var i = 0; i <= filterRecordBLF.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordBLF[i].component_name + filterRecordBLF[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "leanB_w" || str == "l" || centerAlign) {
                    let componentdimension = filterRecordBLF[i].name.split("x");
                    let doorWidth = (filterRecordBLF[i].entry_type == "garage_door" || filterRecordBLF[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordBLF[i].entry_type == "garage_door" || filterRecordBLF[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                    if (centerAlign == true && disBtw >=1) {
                        if (mainPos == 0) {
                            newData = (-params.leanB_p_w) -params.p_d / 2 +((doorWidth / 2) +1);
                            if (centerAlign === true) newData = (-params.leanB_p_w) -params.p_d / 2 +((doorWidth / 2) +disBtw);
                        } else {;
                            newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                        }
    
                        if (comName != undefined) {
                            comName.position.set(comName.position.x, comName.position.y,newData );
                            mainPosArray[mainPos] = newData;
                            mainPos++;
                            preDoorWidth = doorWidth;
                        }
                    } else {
                        if (((comName.position.z - (doorWidth/2) - 1) < (-params.p_d / 2 - params.leanB_p_w)) || ((comName.position.z + (doorWidth/2) + 1) > (-params.p_d / 2))) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordBLF[i].uniqueId, filterRecordBLF[i].component_name);
                            continue;
                        }                        
                    }



                } else {
                    if (comName != undefined) {
                        if(params.leantoAlignmentBack =="1"){
                            comName.position.set(params.leanB_p_d/+2 + posOffset,comName.position.y, comName.position.z);
                        }
                        if(params.leantoAlignmentBack =="3"){
                            comName.position.set(-params.p_w/2 + params.leanB_p_d + posOffset,comName.position.y, comName.position.z);
                        }
                        if(params.leantoAlignmentBack =="2"){
                            comName.position.set(params.p_w/2  + posOffset,comName.position.y, comName.position.z);
                        }
                    }
                }

            }
        }

        if (filterRecordLLLS.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "L_L_L_S_W"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (Number(params.add_storage) - filterRecordLLLS.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordLLLS.length + 1);                        
            for (var i = 0; i <= filterRecordLLLS.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordLLLS[i].component_name + filterRecordLLLS[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "lean_l" && params.add_storage_check == true|| str == "left" || str == "l" || centerAlign) {
                    let componentdimension = filterRecordLLLS[i].name.split("x");
                    let doorWidth = (filterRecordLLLS[i].entry_type == "garage_door" || filterRecordLLLS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordLLLS[i].entry_type == "garage_door" || filterRecordLLLS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;
            
                    if (centerAlign == true && disBtw >=1) {
                        if (mainPos == 0) {
                            if(params.leantoAlignmentLeft=="1"){
                            newData = (-params.lean_p_d / 2) + ((doorWidth / 2) +1);
                            if (centerAlign === true) newData = (-params.lean_p_d / 2) + ((doorWidth / 2) +disBtw);
                            }
                            if(params.leantoAlignmentLeft=="2"){
                                newData = ((params.p_d/2)-params.lean_p_d) + ((doorWidth / 2) +1);
                                if (centerAlign === true) newData = ((params.p_d/2)-params.lean_p_d) + ((doorWidth / 2) +disBtw);
                                }
                                if(params.leantoAlignmentLeft=="3"){
                                    newData = -(params.p_d/2) + ((doorWidth / 2) +1);
                                    if (centerAlign === true) newData = -(params.p_d/2) + ((doorWidth / 2) +disBtw);
                                    }
                        } else {
                            newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                        }

                        if (comName != undefined) {
                            comName.position.set(-params.p_w / 2 - params.lean_p_w - posOffset, comName.position.y, newData);
                            mainPosArray[mainPos] = newData;
                            mainPos++;
                            preDoorWidth = doorWidth;
                        }
                    } else {
                        if (params.leantoAlignmentLeft=="1" && ((comName.position.z + (doorWidth/2) + 1 > -(params.lean_p_d/2)+Number(params.add_storage)) || (comName.position.z - (doorWidth/2) - 1 < -(params.lean_p_d/2)))) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordLLLS[i].uniqueId, filterRecordLLLS[i].component_name);
                            continue;
                        }
                        if (params.leantoAlignmentLeft=="2" && ((comName.position.z + (doorWidth/2) +1 > (params.p_d / 2)-(params.lean_p_d) + Number(params.add_storage)) || (comName.position.z - (doorWidth/2) -1 < (params.p_d / 2)-(params.lean_p_d)))) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordLLLS[i].uniqueId, filterRecordLLLS[i].component_name);
                            continue;
                        }
                        if (params.leantoAlignmentLeft=="3" && ((comName.position.z + (doorWidth/2) +1 > -(params.p_d/2)+Number(params.add_storage)) || (comName.position.z - (doorWidth/2) -1 < -(params.p_d/2)) )) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordLLLS[i].uniqueId, filterRecordLLLS[i].component_name);
                            continue;
                        }                        
                    }

                } else {
                    if (comName != undefined) {
                        comName.position.set(-params.p_w / 2 - params.lean_p_w - posOffset, comName.position.y, comName.position.z);
                    }
                }

            }
        }

        if (filterRecordLLRS.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "L_L_R_S_W"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (Number(params.add_storage) - filterRecordLLRS.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordLLRS.length + 1);                        
            for (var i = 0; i <= filterRecordLLRS.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordLLRS[i].component_name + filterRecordLLRS[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "lean_l" && params.add_storage_check == true|| str == "left" || str == "l" || centerAlign) {
                    let componentdimension = filterRecordLLRS[i].name.split("x");
                    let doorWidth = (filterRecordLLRS[i].entry_type == "garage_door" || filterRecordLLRS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordLLRS[i].entry_type == "garage_door" || filterRecordLLRS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;
              
                        if (centerAlign == true && disBtw >=1) {
                            if (mainPos == 0) {
                                if(params.leantoAlignmentLeft=="1"){
                                newData = (-params.lean_p_d / 2) + ((doorWidth / 2) +1);
                                if (centerAlign === true) newData = (-params.lean_p_d / 2) + ((doorWidth / 2) +disBtw);
                                }
                                if(params.leantoAlignmentLeft=="2"){
                                    newData = ((params.p_d/2)-params.lean_p_d) + ((doorWidth / 2) +1);
                                    if (centerAlign === true) newData = ((params.p_d/2)-params.lean_p_d) + ((doorWidth / 2) +disBtw);
                                    }
                                    if(params.leantoAlignmentLeft=="3"){
                                        newData = -(params.p_d/2) + ((doorWidth / 2) +1);
                                        if (centerAlign === true) newData = -(params.p_d/2) + ((doorWidth / 2) +disBtw);
                                        }
                            } else {
                                newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                            }

                            if (comName != undefined) {
                                comName.position.set(-params.p_w / 2 + posOffset, comName.position.y, newData);
                                mainPosArray[mainPos] = newData;
                                mainPos++;
                                preDoorWidth = doorWidth;
                            }
                        } else {
                            if (params.leantoAlignmentLeft=="1" && ((comName.position.z + (doorWidth/2) + 1 > -(params.lean_p_d/2)+Number(params.add_storage)) || (comName.position.z - (doorWidth/2) - 1 < -(params.lean_p_d/2)))) {
                                if (centerAlign !== true) RemoveDoorComponent(filterRecordLLRS[i].uniqueId, filterRecordLLRS[i].component_name);
                                continue;
                            }
                            if (params.leantoAlignmentLeft=="2" && ((comName.position.z + (doorWidth/2) +1 > (params.p_d / 2)-(params.lean_p_d) + Number(params.add_storage)) || (comName.position.z - (doorWidth/2) -1 < (params.p_d / 2)-(params.lean_p_d)))) {
                                if (centerAlign !== true) RemoveDoorComponent(filterRecordLLRS[i].uniqueId, filterRecordLLRS[i].component_name);
                                continue;
                            }
                            if (params.leantoAlignmentLeft=="3" && ((comName.position.z + (doorWidth/2) +1 > -(params.p_d/2)+Number(params.add_storage)) || (comName.position.z - (doorWidth/2) -1 < -(params.p_d/2)) )) {
                                if (centerAlign !== true) RemoveDoorComponent(filterRecordLLRS[i].uniqueId, filterRecordLLRS[i].component_name);
                                continue;
                            }                            
                        }

                } else {
                    if (comName != undefined) {
                        comName.position.set(-params.p_w / 2 + posOffset, comName.position.y, comName.position.z);
                    }
                }

            }
        }
        
        if (filterRecordLLFS.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "L_L_F_S_W"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (Number(params.lean_p_w) - filterRecordLLFS.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordLLFS.length + 1);                        
            for (var i = 0; i <= filterRecordLLFS.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordLLFS[i].component_name + filterRecordLLFS[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "lean_w" && params.add_storage_check == true|| str == "left" || centerAlign) {
                    let componentdimension = filterRecordLLFS[i].name.split("x");
                    let doorWidth = (filterRecordLLFS[i].entry_type == "garage_door" || filterRecordLLFS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordLLFS[i].entry_type == "garage_door" || filterRecordLLFS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                    if (centerAlign == true && disBtw >=1) {
                        if (mainPos == 0) {
                            newData = (-params.lean_p_w) -params.p_w / 2 +((doorWidth / 2) +1);
                            if (centerAlign === true) newData = (-params.lean_p_w) -params.p_w / 2 +((doorWidth / 2) +disBtw);
                        } else {;
                            newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                        }
    
                        if (comName != undefined) {
                            comName.position.set(newData , comName.position.y, comName.position.z );
                            mainPosArray[mainPos] = newData;
                            mainPos++;
                            preDoorWidth = doorWidth;
                        }
                    } else {
                        if (((comName.position.x + (doorWidth/2) + 1) > (params.p_w / -2))  || ((comName.position.x - (doorWidth/2) - 1) < (params.p_w / -2 - params.lean_p_w))) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordLLFS[i].uniqueId, filterRecordLLFS[i].component_name);
                            continue;
                        }                
                    }
                    
                    if (comName != undefined) {
                        if(params.leantoAlignmentLeft=="1"){
                            comName.position.set(comName.position.x, comName.position.y,-(params.lean_p_d/2)+Number(params.add_storage) + posOffset);
                        }
                        if(params.leantoAlignmentLeft=="2"){
                            comName.position.set(comName.position.x, comName.position.y,(params.p_d / 2)-(params.lean_p_d) + Number(params.add_storage)+ posOffset);
                        }
                        if(params.leantoAlignmentLeft=="3"){
                            comName.position.set(comName.position.x, comName.position.y,-(params.p_d/2)+Number(params.add_storage) + posOffset);
                        }
                    }
                } else {
                    if (comName != undefined) {
                        if(params.leantoAlignmentLeft=="1"){
                            comName.position.set(comName.position.x, comName.position.y,-(params.lean_p_d/2)+Number(params.add_storage) + posOffset);
                        }
                        if(params.leantoAlignmentLeft=="2"){
                            comName.position.set(comName.position.x, comName.position.y,(params.p_d / 2)-(params.lean_p_d) + Number(params.add_storage)+ posOffset);
                        }
                        if(params.leantoAlignmentLeft=="3"){
                            comName.position.set(comName.position.x, comName.position.y,-(params.p_d/2)+Number(params.add_storage) + posOffset);
                        }
                    }
                }

            }
        }

        if (filterRecordRLRS.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "R_L_R_S_W"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (Number(params.add_storage_right) - filterRecordRLRS.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordRLRS.length + 1);                        
            for (var i = 0; i <= filterRecordRLRS.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordRLRS[i].component_name + filterRecordRLRS[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "leanR_l" && params.add_storage_check_right == true || str == "right" || str == "l" || centerAlign) {
                    let componentdimension = filterRecordRLRS[i].name.split("x");
                    let doorWidth = (filterRecordRLRS[i].entry_type == "garage_door" || filterRecordRLRS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordRLRS[i].entry_type == "garage_door" || filterRecordRLRS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                    if (centerAlign == true && disBtw >=1) {
                        if (mainPos == 0) {
                            if(params.leantoAlignmentRight=="1"){
                            newData = (-params.leanR_p_d / 2) + ((doorWidth / 2) +1);
                            if (centerAlign === true) newData = (-params.leanR_p_d / 2) + ((doorWidth / 2) +disBtw);
                            }
                            if(params.leantoAlignmentRight=="2"){
                                newData = ((params.p_d/2)-params.leanR_p_d) + ((doorWidth / 2) +1);
                                if (centerAlign === true) newData = ((params.p_d/2)-params.leanR_p_d) + ((doorWidth / 2) +disBtw);
                                }
                                if(params.leantoAlignmentRight=="3"){
                                    newData = -(params.p_d/2) + ((doorWidth / 2) +1);
                                    if (centerAlign === true) newData = -(params.p_d/2) + ((doorWidth / 2) +disBtw);
                                    }
                        } else {
                            newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                        }
                        if (comName != undefined) {
                            comName.position.set(params.p_w / 2 + params.leanR_p_w + posOffset, comName.position.y, newData);
                            mainPosArray[mainPos] = newData;
                            mainPos++;
                            preDoorWidth = doorWidth;
                        }
                    } else {
                        if (params.leantoAlignmentRight=="1" && ((comName.position.z + (doorWidth/2) + 1 > -(params.leanR_p_d/2)+Number(params.add_storage_right)) || (comName.position.z - (doorWidth/2) - 1 < -(params.leanR_p_d/2)))) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordRLRS[i].uniqueId, filterRecordRLRS[i].component_name);
                            continue;
                        }
                        if (params.leantoAlignmentRight=="2" && ((comName.position.z + (doorWidth/2) +1 > (params.p_d / 2)-(params.leanR_p_d) + Number(params.add_storage_right)) || (comName.position.z - (doorWidth/2) -1 < (params.p_d / 2)-(params.leanR_p_d)))) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordRLRS[i].uniqueId, filterRecordRLRS[i].component_name);
                            continue;
                        }
                        if (params.leantoAlignmentRight=="3" && ((comName.position.z + (doorWidth/2) +1 > -(params.p_d/2)+Number(params.add_storage_right)) || (comName.position.z - (doorWidth/2) -1 < -(params.p_d/2)) )) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordRLRS[i].uniqueId, filterRecordRLRS[i].component_name);
                            continue;
                        }                        
                    }

                } else {
                    if (comName != undefined) {
                        comName.position.set(params.p_w / 2 + params.leanR_p_w + posOffset, comName.position.y, comName.position.z);
                    }
                }

            }
        }

        if (filterRecordRLLS.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "R_L_L_S_W"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (Number(params.add_storage_right) - filterRecordRLLS.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordRLLS.length + 1);                        
            for (var i = 0; i <= filterRecordRLLS.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordRLLS[i].component_name + filterRecordRLLS[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "leanR_l" && params.add_storage_check_right == true || str == "right" || str == "l" || centerAlign) {
                    let componentdimension = filterRecordRLLS[i].name.split("x");
                    let doorWidth = (filterRecordRLLS[i].entry_type == "garage_door" || filterRecordRLLS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordRLLS[i].entry_type == "garage_door" || filterRecordRLLS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                    if (centerAlign == true && disBtw >=1) {
                        if (mainPos == 0) {
                            if(params.leantoAlignmentRight=="1"){
                            newData = (-params.leanR_p_d / 2) + ((doorWidth / 2) +1);
                            if (centerAlign === true) newData = (-params.leanR_p_d / 2) + ((doorWidth / 2) +disBtw);
                            }
                            if(params.leantoAlignmentRight=="2"){
                                newData = ((params.p_d/2)-params.leanR_p_d) + ((doorWidth / 2) +1);
                                if (centerAlign === true) newData = ((params.p_d/2)-params.leanR_p_d) + ((doorWidth / 2) +disBtw);
                                }
                                if(params.leantoAlignmentRight=="3"){
                                    newData = -(params.p_d/2) + ((doorWidth / 2) +1);
                                    if (centerAlign === true) newData = -(params.p_d/2) + ((doorWidth / 2) +disBtw);
                                    }
                        } else {
                            newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                        }
                        if (comName != undefined) {
                            comName.position.set(params.p_w / 2 - posOffset, comName.position.y, newData);
                            mainPosArray[mainPos] = newData;
                            mainPos++;
                            preDoorWidth = doorWidth;
                        }
                    } else {
                        if (params.leantoAlignmentRight=="1" && ((comName.position.z + (doorWidth/2) + 1 > -(params.leanR_p_d/2)+Number(params.add_storage_right)) || (comName.position.z - (doorWidth/2) - 1 < -(params.leanR_p_d/2)))) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordRLLS[i].uniqueId, filterRecordRLLS[i].component_name);
                            continue;
                        }
                        if (params.leantoAlignmentRight=="2" && ((comName.position.z + (doorWidth/2) +1 > (params.p_d / 2)-(params.leanR_p_d) + Number(params.add_storage_right)) || (comName.position.z - (doorWidth/2) -1 < (params.p_d / 2)-(params.leanR_p_d)))) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordRLLS[i].uniqueId, filterRecordRLLS[i].component_name);
                            continue;
                        }
                        if (params.leantoAlignmentRight=="3" && ((comName.position.z + (doorWidth/2) +1 > -(params.p_d/2)+Number(params.add_storage_right)) || (comName.position.z - (doorWidth/2) -1 > -(params.p_d/2)) )) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordRLLS[i].uniqueId, filterRecordRLLS[i].component_name);
                            continue;
                        }                        
                    }


                } else {
                    if (comName != undefined) {
                        comName.position.set(params.p_w / 2 - posOffset, comName.position.y, comName.position.z);
                    }
                }

            }
        }

        if (filterRecordRLFS.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "R_L_F_S_W"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (Number(params.leanR_p_w) - filterRecordRLFS.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordRLFS.length + 1);                        
            for (var i = 0; i <= filterRecordRLFS.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordRLFS[i].component_name + filterRecordRLFS[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "leanR_w"&& params.add_storage_check_right == true || str == "right" || centerAlign) {
                    let componentdimension = filterRecordRLFS[i].name.split("x");
                    let doorWidth = (filterRecordRLFS[i].entry_type == "garage_door" || filterRecordRLFS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordRLFS[i].entry_type == "garage_door" || filterRecordRLFS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                    if (centerAlign == true && disBtw >=1) {
                        if (mainPos == 0) {
                            newData = (params.leanR_p_w) +(params.p_w / 2) -((doorWidth / 2) +1);
                            if (centerAlign === true) newData = (params.p_w / 2) + ((doorWidth / 2) +disBtw);
                        } else {;
                            newData = Number(mainPosArray[mainPos - 1]) - ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                            if (centerAlign === true) newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                        }
    
                        if (comName != undefined) {
                            comName.position.set(newData , comName.position.y, comName.position.z );
                            mainPosArray[mainPos] = newData;
                            mainPos++;
                            preDoorWidth = doorWidth;
                        }
                    } else {
                        if (((comName.position.x + (doorWidth/2) + 1) > (params.p_w / 2 + params.leanR_p_w))  || ((comName.position.x - (doorWidth/2) - 1) < (params.p_w / 2))) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordRLFS[i].uniqueId, filterRecordRLFS[i].component_name);
                            continue;
                        }                        
                    }


                    if (comName != undefined) {
                        if(params.leantoAlignmentRight=="1"){
                            comName.position.set(comName.position.x, comName.position.y,-(params.leanR_p_d/2)+Number(params.add_storage_right) + posOffset);
                        }
                        if(params.leantoAlignmentRight=="2"){
                            comName.position.set(comName.position.x, comName.position.y,(params.p_d / 2)-(params.leanR_p_d) + Number(params.add_storage_right)+ posOffset);
                        }
                        if(params.leantoAlignmentRight=="3"){
                            comName.position.set(comName.position.x, comName.position.y,-(params.p_d/2)+Number(params.add_storage_right) + posOffset);
                        }
                    }

                } else {
                    if (comName != undefined) {
                        if(params.leantoAlignmentRight=="1"){
                            comName.position.set(comName.position.x, comName.position.y,-(params.leanR_p_d/2)+Number(params.add_storage_right) + posOffset);
                        }
                        if(params.leantoAlignmentRight=="2"){
                            comName.position.set(comName.position.x, comName.position.y,(params.p_d / 2)-(params.leanR_p_d) + Number(params.add_storage_right)+ posOffset);
                        }
                        if(params.leantoAlignmentRight=="3"){
                            comName.position.set(comName.position.x, comName.position.y,-(params.p_d/2)+Number(params.add_storage_right) + posOffset);
                        }
                    }
                }

            }
        }

        if (filterRecordFLFS.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "F_L_F_S_W"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (Number(params.add_storage_front) - filterRecordFLFS.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordFLFS.length + 1);                        
            for (var i = 0; i <= filterRecordFLFS.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordFLFS[i].component_name + filterRecordFLFS[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "leanF_l"&& params.add_storage_check_front == true || str == "front" || str == "w" || centerAlign) {
                    let componentdimension = filterRecordFLFS[i].name.split("x");
                    let doorWidth = (filterRecordFLFS[i].entry_type == "garage_door" || filterRecordFLFS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordFLFS[i].entry_type == "garage_door" || filterRecordFLFS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                    if (centerAlign == true && disBtw >=1) {
                        if (mainPos == 0) {
                            if(params.leantoAlignmentFront=="1"){
                            newData = (-params.leanF_p_d / 2) + ((doorWidth / 2) +1);
                            if (centerAlign === true) newData = (-params.leanF_p_d / 2) + ((doorWidth / 2) +disBtw);
                            }
                            if(params.leantoAlignmentFront=="3"){
                                newData = ((params.p_w/2)-params.leanF_p_d) + ((doorWidth / 2) +1);
                                if (centerAlign === true) newData = ((params.p_w/2)-params.leanF_p_d) + ((doorWidth / 2) +disBtw);
                                }
                                if(params.leantoAlignmentFront=="2"){
                                    newData = -(params.p_w/2) + ((doorWidth / 2) +1);
                                    if (centerAlign === true) newData = -(params.p_w/2) + ((doorWidth / 2) +disBtw);
                                    }
                        } else {;
                            newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                        }

                        if (comName != undefined) {
                            comName.position.set(newData , comName.position.y, params.p_d / 2 + params.leanF_p_w + posOffset );
                            mainPosArray[mainPos] = newData;
                            mainPos++;
                            preDoorWidth = doorWidth;
                        }
                    } else {
                        if (params.leantoAlignmentFront=="1" && (((comName.position.x + (doorWidth/2) + 1) > (-(params.leanF_p_d/2)+Number(params.add_storage_front))) || ((comName.position.x - (doorWidth/2) - 1) < (-params.leanF_p_d/2)))) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordFLFS[i].uniqueId, filterRecordFLFS[i].component_name);
                            continue;
                        }
                        if (params.leantoAlignmentFront=="3" && (((comName.position.x + (doorWidth/2) +1) > ((params.p_w / 2)-(params.leanF_p_d) + Number(params.add_storage_front))) || ((comName.position.x - (doorWidth/2) - 1) < ((params.p_w / 2)-(params.leanF_p_d))))) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordFLFS[i].uniqueId, filterRecordFLFS[i].component_name);
                            continue;
                        }
                        if (params.leantoAlignmentFront=="2" && (((comName.position.x + (doorWidth/2) +1) > (-(params.p_w/2)+Number(params.add_storage_front))) || ((comName.position.x - (doorWidth/2) -1) < (-params.p_w/2)))) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordFLFS[i].uniqueId, filterRecordFLFS[i].component_name);
                            continue;
                        }                        
                    }

                } else {
                    if (comName != undefined) {
                        comName.position.set(comName.position.x, comName.position.y,params.p_d / 2 + params.leanF_p_w + posOffset);
                    }
                }

            }
        }

        if (filterRecordFLBS.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "F_L_B_S_W"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (Number(params.add_storage_front) - filterRecordFLBS.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordFLBS.length + 1);                        
            for (var i = 0; i <= filterRecordFLBS.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordFLBS[i].component_name + filterRecordFLBS[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "leanF_l"&& params.add_storage_check_front == true || str == "front" || str == "w" || centerAlign) {
                    let componentdimension = filterRecordFLBS[i].name.split("x");
                    let doorWidth = (filterRecordFLBS[i].entry_type == "garage_door" || filterRecordFLBS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordFLBS[i].entry_type == "garage_door" || filterRecordFLBS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                    if (centerAlign == true && disBtw >=1) {
                        if (mainPos == 0) {
                            if(params.leantoAlignmentFront=="1"){
                            newData = (-params.leanF_p_d / 2) + ((doorWidth / 2) +1);
                            if (centerAlign === true) newData = (-params.leanF_p_d / 2) + ((doorWidth / 2) +disBtw);
                            }
                            if(params.leantoAlignmentFront=="3"){
                                newData = ((params.p_w/2)-params.leanF_p_d) + ((doorWidth / 2) +1);
                                if (centerAlign === true) newData = ((params.p_w/2)-params.leanF_p_d) + ((doorWidth / 2) +disBtw);
                                }
                                if(params.leantoAlignmentFront=="2"){
                                    newData = -(params.p_w/2) + ((doorWidth / 2) +1);
                                    if (centerAlign === true) newData = -(params.p_w/2) + ((doorWidth / 2) +disBtw);
                                    }
                        } else {;
                            newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                        }

                        if (comName != undefined) {
                            comName.position.set(newData , comName.position.y, params.p_d / 2  - posOffset );
                            mainPosArray[mainPos] = newData;
                            mainPos++;
                            preDoorWidth = doorWidth;
                        }
                    } else {
                        if (params.leantoAlignmentFront=="1" && (((comName.position.x + (doorWidth/2) + 1) > (-(params.leanF_p_d/2)+Number(params.add_storage_front))) || ((comName.position.x - (doorWidth/2) - 1) > (-params.leanF_p_d/2)))) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordFLBS[i].uniqueId, filterRecordFLBS[i].component_name);
                            continue;
                        }
                        if (params.leantoAlignmentFront=="3" && (((comName.position.x + (doorWidth/2) +1) > ((params.p_w / 2)-(params.leanF_p_d) + Number(params.add_storage_front))) || ((comName.position.x - (doorWidth/2) - 1) > ((params.p_w / 2)-(params.leanF_p_d))))) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordFLBS[i].uniqueId, filterRecordFLBS[i].component_name);
                            continue;
                        }
                        if (params.leantoAlignmentFront=="2" && (((comName.position.x + (doorWidth/2) +1) > (-(params.p_w/2)+Number(params.add_storage_front))) || ((comName.position.x + (doorWidth/2) +1) > (-params.p_w/2)))) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordFLBS[i].uniqueId, filterRecordFLBS[i].component_name);
                            continue;
                        }                        
                    }

                } else {
                    if (comName != undefined) {
                        comName.position.set(comName.position.x, comName.position.y,params.p_d / 2 - posOffset);
                    }
                }

            }
        }

        if (filterRecordFLRS.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "F_L_R_S_W"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (Number(params.leanF_p_w) - filterRecordFLRS.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordFLRS.length + 1);                        
            for (var i = 0; i <= filterRecordFLRS.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordFLRS[i].component_name + filterRecordFLRS[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "leanF_w"&& params.add_storage_check_front == true || str == "front" || centerAlign) {
                    let componentdimension = filterRecordFLRS[i].name.split("x");
                    let doorWidth = (filterRecordFLRS[i].entry_type == "garage_door" || filterRecordFLRS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordFLRS[i].entry_type == "garage_door" || filterRecordFLRS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                    if (centerAlign == true && disBtw >=1) {
                        if (mainPos == 0) {
                            newData = (params.leanF_p_w) +params.p_d / 2 -((doorWidth / 2) +1);
                            if (centerAlign === true) newData = params.p_d / 2 + ((doorWidth / 2) +disBtw);
                        } else {;
                            newData = Number(mainPosArray[mainPos - 1]) - ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                            if (centerAlign === true) newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                        }

                        if (comName != undefined) {
                            comName.position.set(comName.position.x, comName.position.y,newData );
                            mainPosArray[mainPos] = newData;
                            mainPos++;
                            preDoorWidth = doorWidth;
                        }
                    } else {
                        if (((comName.position.z - (doorWidth/2) - 1) < (params.p_d / 2)) || ((comName.position.z + (doorWidth/2) + 1) > (params.p_d / 2 + params.leanF_p_w))) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordFLRS[i].uniqueId, filterRecordFLRS[i].component_name);
                            continue;
                        }                        
                    }

                    if (comName != undefined) {
                        if(params.leantoAlignmentFront=="1"){
                            comName.position.set(-(params.leanF_p_d/2)+Number(params.add_storage_front) + posOffset,comName.position.y, comName.position.z);
                        }
                        if(params.leantoAlignmentFront=="2"){
                            comName.position.set(-(params.p_w/2)+Number(params.add_storage_front) + posOffset,comName.position.y, comName.position.z);
                        }
                        if(params.leantoAlignmentFront=="3"){
                            comName.position.set((params.p_w / 2)-(params.leanF_p_d) + Number(params.add_storage_front),comName.position.y, comName.position.z);
                        }
                    }

                } else {
                    if (comName != undefined) {
                        if(params.leantoAlignmentFront=="1"){
                            comName.position.set(-(params.leanF_p_d/2)+Number(params.add_storage_front) + posOffset,comName.position.y, comName.position.z);
                        }
                        if(params.leantoAlignmentFront=="2"){
                            comName.position.set(-(params.p_w/2)+Number(params.add_storage_front) + posOffset,comName.position.y, comName.position.z);
                        }
                        if(params.leantoAlignmentFront=="3"){
                            comName.position.set((params.p_w / 2)-(params.leanF_p_d) + Number(params.add_storage_front),comName.position.y, comName.position.z);
                        }
                    }
                }

            }
        }

        if (filterRecordBLFS.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "B_L_F_S_W"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (Number(params.add_storage_back) - filterRecordBLFS.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordBLFS.length + 1);                        
            for (var i = 0; i <= filterRecordBLFS.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordBLFS[i].component_name + filterRecordBLFS[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "leanB_l"&& params.add_storage_check_back == true || str == "back" || str == "w" || centerAlign) {
                    let componentdimension = filterRecordBLFS[i].name.split("x");
                    let doorWidth = (filterRecordBLFS[i].entry_type == "garage_door" || filterRecordBLFS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordBLFS[i].entry_type == "garage_door" || filterRecordBLFS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                    if (centerAlign == true && disBtw >=1) {
                        if (mainPos == 0) {
                            if(params.leantoAlignmentBack=="1"){
                            newData = (-params.leanB_p_d / 2) + ((doorWidth / 2) +1);
                            if (centerAlign === true) newData = (-params.leanB_p_d / 2) + ((doorWidth / 2) +disBtw);
                            }
                            if(params.leantoAlignmentBack=="2"){
                                newData = ((params.p_w/2)-params.leanB_p_d) + ((doorWidth / 2) +1);
                                if (centerAlign === true) newData = ((params.p_w/2)-params.leanB_p_d) + ((doorWidth / 2) +disBtw);
                                }
                                if(params.leantoAlignmentBack=="3"){
                                    newData = -(params.p_w/2) + ((doorWidth / 2) +1);
                                    if (centerAlign === true) newData = -(params.p_w/2) + ((doorWidth / 2) +disBtw);
                                    }
                        } else {;
                            newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                        }

                        if (comName != undefined) {
                            comName.position.set(newData , comName.position.y,-params.p_d / 2 - params.leanB_p_w - posOffset );
                            mainPosArray[mainPos] = newData;
                            mainPos++;
                            preDoorWidth = doorWidth;
                        }
                    } else {
                        if (params.leantoAlignmentBack=="1" && (((comName.position.x + (doorWidth/2) + 1) > (-(params.leanB_p_d/2)+Number(params.add_storage_back))) || ((comName.position.x - (doorWidth/2) - 1) < (-params.leanB_p_d/2)))) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordBLFS[i].uniqueId, filterRecordBLFS[i].component_name);
                            continue;
                        }
                        if (params.leantoAlignmentBack=="2" && (((comName.position.x + (doorWidth/2) +1) > ((params.p_w / 2)-(params.leanB_p_d) + Number(params.add_storage_back))) || ((comName.position.x - (doorWidth/2) - 1) < ((params.p_w / 2)-(params.leanB_p_d))))) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordBLFS[i].uniqueId, filterRecordBLFS[i].component_name);
                            continue;
                        }
                        if (params.leantoAlignmentBack=="3" && (((comName.position.x + (doorWidth/2) +1) > (-(params.p_w/2)+Number(params.add_storage_back))) || ((comName.position.x - (doorWidth/2) -1) < (-params.p_w/2)))) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordBLFS[i].uniqueId, filterRecordBLFS[i].component_name);
                            continue;
                        }                        
                    }

                } else {
                    if (comName != undefined) {
                        comName.position.set(comName.position.x, comName.position.y,-params.p_d / 2 - params.leanB_p_w - posOffset);
                    }
                }

            }
        }

        if (filterRecordBLBS.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "B_L_B_S_W"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (Number(params.add_storage_back) - filterRecordBLBS.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordBLBS.length + 1);                        
            for (var i = 0; i <= filterRecordBLBS.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordBLBS[i].component_name + filterRecordBLBS[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "leanB_l"&& params.add_storage_check_back == true || str == "back" || str == "w" || centerAlign) {
                    let componentdimension = filterRecordBLBS[i].name.split("x");
                    let doorWidth = (filterRecordBLBS[i].entry_type == "garage_door" || filterRecordBLBS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordBLBS[i].entry_type == "garage_door" || filterRecordBLBS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;


                    if (centerAlign == true && disBtw >=1) {
                        if (mainPos == 0) {
                            if(params.leantoAlignmentBack=="1"){
                            newData = (-params.leanB_p_d / 2) + ((doorWidth / 2) +1);
                            if (centerAlign === true) newData = (-params.leanB_p_d / 2) + ((doorWidth / 2) +disBtw);
                            }
                            if(params.leantoAlignmentBack=="2"){
                                newData = ((params.p_w/2)-params.leanB_p_d) + ((doorWidth / 2) +1);
                                if (centerAlign === true) newData = ((params.p_w/2)-params.leanB_p_d) + ((doorWidth / 2) +disBtw);
                                }
                                if(params.leantoAlignmentBack=="3"){
                                    newData = -(params.p_w/2) + ((doorWidth / 2) +1);
                                    if (centerAlign === true) newData = -(params.p_w/2) + ((doorWidth / 2) +disBtw);
                                    }
                        } else {;
                            newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                        }

                        if (comName != undefined) {
                            comName.position.set(newData , comName.position.y,-params.p_d / 2 + posOffset );
                            mainPosArray[mainPos] = newData;
                            mainPos++;
                            preDoorWidth = doorWidth;
                        }
                    } else {
                        if (params.leantoAlignmentBack=="1" && (((comName.position.x + (doorWidth/2) + 1) > (-(params.leanB_p_d/2)+Number(params.add_storage_back))) || ((comName.position.x - (doorWidth/2) - 1) > (-params.leanB_p_d/2)))) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordBLBS[i].uniqueId, filterRecordBLBS[i].component_name);
                            continue;
                        }
                        if (params.leantoAlignmentBack=="2" && (((comName.position.x + (doorWidth/2) +1) > ((params.p_w / 2)-(params.leanB_p_d) + Number(params.add_storage_back))) || ((comName.position.x - (doorWidth/2) - 1) > ((params.p_w / 2)-(params.leanB_p_d))))) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordBLBS[i].uniqueId, filterRecordBLBS[i].component_name);
                            continue;
                        }
                        if (params.leantoAlignmentBack=="3" && (((comName.position.x + (doorWidth/2) +1) > (-(params.p_w/2)+Number(params.add_storage_back))) || ((comName.position.x + (doorWidth/2) +1) > (-params.p_w/2)))) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordBLBS[i].uniqueId, filterRecordBLBS[i].component_name);
                            continue;
                        }                        
                    }

                } else {
                    if (comName != undefined) {
                        comName.position.set(comName.position.x, comName.position.y,-params.p_d / 2 + posOffset);
                    }
                }

            }
        }

        if (filterRecordBLLS.length > 0 && (!centerAlign || (centerAlign === true && params.activeWall === "B_L_L_S_W"))){
            let mainPosArray = [];
            let mainPos = 0;
            let preDoorWidth;
            let disBtw = 2;
            
            if (centerAlign === true) disBtw = (Number(params.leanB_p_w) - filterRecordBLLS.reduce((pre, nxt) => {return {entry_dimension_width: pre.entry_dimension_width + nxt.entry_dimension_width}})["entry_dimension_width"]) / (filterRecordBLLS.length + 1);                        
            for (var i = 0; i <= filterRecordBLLS.length - 1; i++) {
                let comName = const_var.scene.getObjectByName(filterRecordBLLS[i].component_name + filterRecordBLLS[i].uniqueId);
                let newData = "";
                let startWidth = (params.p_w) / 2;
                if (str == "leanB_w"&& params.add_storage_check_back == true || str == "back" || centerAlign) {
                    let componentdimension = filterRecordBLLS[i].name.split("x");
                    let doorWidth = (filterRecordBLLS[i].entry_type == "garage_door" || filterRecordBLLS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
                        doorHeight = (filterRecordBLLS[i].entry_type == "garage_door" || filterRecordBLLS[i].entry_type == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;

                    if (centerAlign == true && disBtw >=1) {
                        if (mainPos == 0) {

                            newData = -(params.leanB_p_w) -params.p_d / 2 +((doorWidth / 2) +1);
                            if (centerAlign === true) newData = -(params.leanB_p_w) -params.p_d / 2 +((doorWidth / 2) +disBtw);
                        } else {;
                            newData = Number(mainPosArray[mainPos - 1]) + ((doorWidth/2)+(preDoorWidth/2) + disBtw);
                        }
    
                        if (comName != undefined) {
                            comName.position.set(comName.position.x, comName.position.y,newData );
                            mainPosArray[mainPos] = newData;
                            mainPos++;
                            preDoorWidth = doorWidth;
                        }
                    } else {
                        if (((comName.position.z - (doorWidth/2) - 1) < (-params.p_d / 2 - params.leanB_p_w)) || ((comName.position.z + (doorWidth/2) + 1) > (-params.p_d / 2))) {
                            if (centerAlign !== true) RemoveDoorComponent(filterRecordBLLS[i].uniqueId, filterRecordBLLS[i].component_name);
                            continue;
                        }                        
                    }
 

                    if (comName != undefined) {
                        if(params.leantoAlignmentBack=="1"){
                            comName.position.set(-(params.leanB_p_d/2)+Number(params.add_storage_back) + posOffset,comName.position.y, comName.position.z);
                        }
                        if(params.leantoAlignmentBack=="3"){
                            comName.position.set(-(params.p_w/2)+Number(params.add_storage_back) + posOffset,comName.position.y, comName.position.z);
                        }
                        if(params.leantoAlignmentBack=="2"){
                            comName.position.set((params.p_w / 2)-(params.leanB_p_d) + Number(params.add_storage_back),comName.position.y, comName.position.z);
                        }
                    }

                } else {
                    if (comName != undefined) {
                        if(params.leantoAlignmentBack=="1"){
                            comName.position.set(-(params.leanB_p_d/2)+Number(params.add_storage_back) +posOffset,comName.position.y, comName.position.z);
                        }
                        if(params.leantoAlignmentBack=="3"){
                            comName.position.set(-(params.p_w/2)+Number(params.add_storage_back) + posOffset,comName.position.y, comName.position.z);
                        }
                        if(params.leantoAlignmentBack=="2"){
                            comName.position.set((params.p_w / 2)-(params.leanB_p_d) + Number(params.add_storage_back),comName.position.y, comName.position.z);
                        }
                    }
                }

            }
        }


    }
    // const_var.entry_points.map((val, i) => {
    //     let comName = const_var.scene.getObjectByName(val.component_name+val.uniqueId);
    //     let newData = "";
    //     // console.log(val, "handleComponentPositionOnDimensionChange");
    //     let startWidth = (params.p_w)/2;
    //     if(str=="w")
    //     {
    //         if(val.component_wall_name=="c_b_f_w")
    //         {

    //             let componentdimension = val.name.split("x");
    //             let doorWidth = (val.entry_type=="garage_door" || val.entry_type=="garage_door_frameout")?parseInt(componentdimension[0]):parseInt(componentdimension[0])/12,
    //             doorHeight = (val.entry_type=="garage_door" || val.entry_type=="garage_door_frameout")?parseInt(componentdimension[1]):parseInt(componentdimension[1])/12;
    //             console.log(mainPosArray[mainPos-1],comName,componentdimension,newData,doorWidth,"newDatanewDatanewData")
    //             if(mainPos==0)
    //             {
    //                 newData = (-params.p_w /2)+ ((doorWidth/2)+1);
    //                 // console.log(newData,"params.DoorPosOnEdit111");
    //             }else
    //             {
    //                 console.log(Number(mainPosArray[mainPos-1]),"Number(mainPosArray[mainPos-1])");
    //                 newData = Number(mainPosArray[mainPos-1]) + (doorWidth+2);
    //                 // console.log(newData,"params.DoorPosOnEdit2222",splitname,splitname[0],typeof splitname[0],Number(mainPosArray[mainPos-1]) - Number(splitname[0]+1));
    //             }
    //             console.log(newData,"newDatanewDatanewData111")
    //             comName.position.set(newData, comName.position.y, params.p_d / 2+0.1 );
    //             mainPosArray[mainPos] = newData;
    //         }
    //         mainPos++;
    //     }
    //     console.log(mainPosArray,"mainPosArray")
    //     let comName = const_var.scene.getObjectByName(val.component_name+val.uniqueId);
    //     let componentdimension = val.name.split("x");
    //     const doorWidth = (comName.entry_type=="garage_door" || comName.entry_type=="garage_door_frameout")?parseInt(componentdimension[0]):parseInt(componentdimension[0])/12,
    //     doorHeight = (comName.entry_type=="garage_door" || comName.entry_type=="garage_door_frameout")?parseInt(componentdimension[1]):parseInt(componentdimension[1])/12;
    //     switch (val.component_wall_name) {
    //     //front
    //     case "c_b_f_w":
    //         comName.position.set(0, comName.position.y, params.p_d / 2+0.1 );
    //         comName.rotation.y = Math.PI / 2;
    //         break;

    //     //left
    //     case "c_b_l_w":
    //         comName.position.set(-params.p_w / 2 - 0.25, comName.position.y, 0);
    //         comName.rotation.y = 0;
    //         break;

    //     //back
    //     case "c_b_b_w":
    //         comName.position.set(0, comName.position.y, -params.p_d / 2-0.1 );
    //         comName.rotation.y = - Math.PI / 2;
    //         break;

    //     //right
    //     case "c_b_r_w":
    //         comName.position.set(params.p_w / 2 + 0.25, comName.position.y, 0);
    //         comName.rotation.y = Math.PI;
    //         break;

    //     //center building left storage front wall
    //     case "c_b_l_s_f_w":
    //         comName.position.set(-params.p_w / 2 + Number(params.cB_addStorage_left) / 2, comName.position.y, params.p_d / 2 +0.1);
    //         comName.rotation.y = Math.PI / 2;
    //         break;

    //     //center building left storage back wall
    //     case "c_b_l_s_b_w":
    //         comName.position.set(-params.p_w / 2 + Number(params.cB_addStorage_left) / 2, comName.position.y, -params.p_d / 2 -0.1);
    //         comName.rotation.y = - Math.PI / 2;
    //         break;

    //     //center building left storage right wall
    //     case "c_b_l_s_r_w":
    //         comName.position.set(-params.p_w / 2 + Number(params.cB_addStorage_left) +0.1, comName.position.y, 0);
    //         comName.rotation.y = Math.PI;
    //         break;

    //     //center building right storage front wall
    //     case "c_b_r_s_f_w":
    //         comName.position.set(params.p_w / 2 - Number(params.cB_addStorage_right) / 2, comName.position.y, params.p_d / 2 +0.1);
    //         comName.rotation.y = Math.PI / 2;
    //         break;

    //     //center building right storage back wall
    //     case "c_b_r_s_b_w":
    //         comName.position.set(params.p_w / 2 - Number(params.cB_addStorage_right) / 2, comName.position.y, -params.p_d / 2 -0.1);
    //         comName.rotation.y = -Math.PI / 2;
    //         break;

    //     //center building right storage left wall
    //     case "c_b_r_s_l_w":
    //         comName.position.set(params.p_w / 2 - Number(params.cB_addStorage_right) -0.1, comName.position.y, 0);
    //         comName.rotation.y = 0;
    //         break;

    //     //center building back storage front wall
    //     case "c_b_f_s_w":
    //         comName.position.set(0, comName.position.y, -params.p_d / 2 + Number(params.p_u_t) +0.1);
    //         comName.rotation.y = Math.PI / 2;
    //         break;

    //     //center building back storage left wall
    //     case "c_b_l_s_w":
    //         comName.position.set(-params.p_w / 2 -0.1, comName.position.y, -params.p_d / 2 + Number(params.p_u_t) / 2);
    //         comName.rotation.y = 0;
    //         break;

    //     //center building back storage right wall
    //     case "c_b_r_s_w":
    //         comName.position.set(params.p_w / 2 +0.1, comName.position.y, -params.p_d / 2 + Number(params.p_u_t) / 2);
    //         comName.rotation.y = Math.PI;
    //         break;

    //      //Left lean side wall
    //     case "L_L_L_W":
    //         comName.position.set(params.p_w / -2 - params.lean_p_w -0.1, comName.position.y, 0);
    //         comName.rotation.y = 0;
    //         break;

    //     //Left lean back wall
    //     case "L_L_B_W":
    //         comName.position.set( -params.p_w / 2 - params.lean_p_w / 2, comName.position.y, - params.lean_p_d / 2 -0.1);
    //         comName.rotation.y = -Math.PI / 2;
    //         break;

    //     //Left lean front wall
    //     case "L_L_F_W":
    //         comName.position.set( -params.p_w / 2 - params.lean_p_w / 2, comName.position.y, params.lean_p_d / 2 +0.1);
    //         comName.rotation.y = Math.PI / 2;
    //         break;


    //     //Back lean side wall
    //     case "B_L_S_W":
    //         comName.position.set(0, comName.position.y, params.p_d / -2 - params.leanB_p_w -0.1);
    //         comName.rotation.y = -Math.PI / 2;
    //         break;

    //     //Back lean left wall
    //     case "B_L_B_W":
    //         comName.position.set( - params.leanB_p_d / 2 -0.1, comName.position.y, -params.p_d / 2 - params.leanB_p_w / 2);
    //         comName.rotation.y = 0;
    //         break;

    //     //Back lean right wall
    //     case "B_L_F_W":
    //         comName.position.set( params.leanB_p_d / 2 +0.1, comName.position.y, -params.p_d / 2 - params.leanB_p_w / 2);
    //         comName.rotation.y = Math.PI;
    //         break;

    //     //Front lean side wall
    //     case "F_L_F_W":
    //         comName.position.set(0, comName.position.y, params.p_d / 2 + params.leanF_p_w +0.1);
    //         comName.rotation.y = Math.PI / 2;
    //         break;

    //     //Front lean left wall
    //     case "F_L_L_W":
    //         comName.position.set( - params.leanF_p_d / 2 -0.1, comName.position.y, params.p_d / 2 + params.leanF_p_w / 2);
    //         comName.rotation.y = 0;
    //         break;

    //     //Front lean right wall
    //     case "F_L_R_W":
    //         comName.position.set( params.leanF_p_d / 2 +0.1, comName.position.y, params.p_d / 2 + params.leanF_p_w / 2);
    //         comName.rotation.y = Math.PI;
    //         break;

    //     //Right lean side wall
    //     case "R_L_R_W":
    //         comName.position.set(params.p_w / 2 + params.leanR_p_w +0.1, comName.position.y, 0);
    //         comName.rotation.y = Math.PI;
    //         break;

    //     //Right lean back wall
    //     case "R_L_B_W":
    //         comName.position.set( params.p_w / 2 + params.leanR_p_w / 2, comName.position.y, - params.leanR_p_d / 2 -0.1);
    //         comName.rotation.y = -Math.PI / 2;
    //         break;

    //     //Right Lean front wall
    //     case "R_L_F_W":
    //         comName.position.set( params.p_w / 2 + params.leanR_p_w / 2, comName.position.y,  params.leanR_p_d / 2 +0.1);
    //         comName.rotation.y = Math.PI / 2;
    //         break;

    //     //Left lean Storage Front wall
    //     case "L_L_F_S_W":
    //         comName.position.set( -params.p_w / 2 - params.lean_p_w / 2, comName.position.y,  -params.lean_p_d / 2 + Number(params.add_storage) +0.1);
    //         comName.rotation.y = Math.PI / 2;
    //         break;

    //     //Left lean Storage Left wall
    //     case "L_L_L_S_W":
    //         comName.position.set( -params.p_w / 2 - params.lean_p_w -0.1, comName.position.y, -params.p_d / 2 + Number(params.add_storage / 2));
    //         comName.rotation.y = 0;
    //         break;

    //     //Left Lean Storage Right wall
    //     case "L_L_R_S_W":
    //         comName.position.set( -params.p_w / 2 +0.1, comName.position.y, -params.p_d / 2 + Number(params.add_storage / 2));
    //         comName.rotation.y = Math.PI;
    //         break;

    //     //Right lean Storage Front wall
    //     case "R_L_F_S_W":
    //         comName.position.set( params.p_w / 2 + params.leanR_p_w / 2, comName.position.y, -params.p_d / 2 + Number(params.add_storage_right));
    //         comName.rotation.y = Math.PI / 2;
    //         break;

    //     //Right lean Storage Left wall
    //     case "R_L_L_S_W":
    //         comName.position.set( params.p_w / 2 -0.1, comName.position.y, -params.p_d / 2 + Number(params.add_storage_right / 2) );
    //         comName.rotation.y = 0;
    //         break;

    //     //Right Lean Storage Right wall
    //     case "R_L_R_S_W":
    //         comName.position.set( params.p_w / 2 + params.leanR_p_w +0.1, comName.position.y, -params.p_d / 2 + Number(params.add_storage_right / 2));
    //         comName.rotation.y = Math.PI;
    //         break;

    //     //Back lean Storage Front wall
    //     case "B_L_F_S_W":
    //         comName.position.set( - params.p_w / 2 + Number(params.add_storage_back / 2),comName.position.y, -params.p_d / 2 - params.leanB_p_w -0.1 );
    //         comName.rotation.y = -Math.PI / 2;
    //         break;

    //     //Back lean Storage Back wall
    //     case "B_L_B_S_W":
    //         comName.position.set(  - params.p_w / 2 + Number(params.add_storage_back / 2), comName.position.y, -params.p_d / 2 +0.1 );
    //         comName.rotation.y = Math.PI / 2;
    //         break;

    //     //Back Lean Storage Left wall
    //     case "B_L_L_S_W":
    //         comName.position.set( - params.p_w / 2 + Number(params.add_storage_back) +0.1, comName.position.y, - params.p_d / 2 - params.leanB_p_w / 2);
    //         comName.rotation.y = Math.PI;
    //         break;

    //     //Front lean Storage Front wall
    //     case "F_L_F_S_W":
    //         comName.position.set( - params.p_w / 2 + Number(params.add_storage_front / 2), comName.position.y, params.p_d / 2 + params.leanF_p_w +0.1);
    //         comName.rotation.y = Math.PI / 2;
    //         break;

    //     //Front lean Storage Back wall
    //     case "F_L_B_S_W":
    //         comName.position.set( - params.p_w / 2 + Number(params.add_storage_front / 2), comName.position.y, params.p_d / 2 -0.1 );
    //         comName.rotation.y = -Math.PI / 2;
    //         break;

    //     //Front Lean Storage Right wall
    //     case "F_L_R_S_W":
    //         comName.position.set( - params.p_w / 2 + Number(params.add_storage_front) +0.1, comName.position.y, params.p_d / 2 + params.leanF_p_w / 2);
    //         comName.rotation.y = Math.PI;
    //         break;

    //     default:
    //         return null;
    // }

    //     })
    // }
}

export const handleComponentPosition = (wallName,lean) =>{
    let filterRecord = const_var.entry_points.filter(data => data.component_wall_name == wallName);
        if(filterRecord.length>0)
        {
            let comName = const_var.scene.getObjectByName(filterRecord[0].component_name + filterRecord[0].uniqueId);
            let pos = comName.position.z;
            if(params.leantoAlignmentLeft=="2")
            {
                pos = (comName.position.z>0)?-comName.position.z:Math.abs(comName.position.z);
            }if(params.leantoAlignmentLeft=="3")
            {
                pos = (comName.position.z>0)?-comName.position.z:Math.abs(comName.position.z);
            }
            comName.position.set(comName.position.x, comName.position.y, pos);
            
        }
        
}


export const loadDoorComponent = async (compType, compName, wallName, componentsize, parentkey, childkey, nestedkey, entry_rotation, entry_position, is_edit,parentOBJ, isBreezewayFrame, breezewayUniqueId) => {
    // console.log({compType, compName, wallName, componentsize, parentkey, childkey, nestedkey, entry_rotation, entry_position, is_edit,parentOBJ, isBreezewayFrame, breezewayUniqueId});
    const gltfLoader = new GLTFLoader();
    const { default: doorURL } = require("../../assets/images/doorObj/" + compName + ".gltf");
    let chkCustomDoor = undefined;
    let componentdimension = (is_edit != undefined) ? componentsize.name.split("x") : componentsize.split("x");
    let doorWidth = (compType == "garage_door" || compType == "garage_door_frameout") ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
        doorHeight = (compType == "garage_door" || compType == "garage_door_frameout") ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;
        const isBreezewayFrameOut = ((isBreezewayFrame !== undefined && isBreezewayFrame == 'isBreezewayFrame'));

        // console.log(isBreezewayFrameOut ,"breezeway");
        if (isBreezewayFrameOut){
            const offset = params.p_r_s == 1  ? 0 : 0.2;
            doorWidth = (compType == "garage_door" || compType == "garage_door_frameout") ? componentdimension[0] : componentdimension[0] / 12;
            doorHeight = (compType == "garage_door" || compType == "garage_door_frameout") ? componentdimension[1] - offset : componentdimension[1] / 12;
            const_var.breezewayLength = Number(componentdimension[0]); 
            // console.log(const_var.breezewayLength ,"breezewayLength" );
        }
        if (isNaN(doorWidth)) doorWidth = 5;
        if (isNaN(doorHeight)) doorHeight = 5;

        var total = 0; 
        var posVal = [];
        let rightDoor,leftDoor,distance,preDistance,preDoor,lastDistance,lastDoor,pos,dimention,leanDepth1,leanDepth2,leanWidth1,leanWidth2,compWidth
        var NumberOFDoors = 0
        var data = const_var.scene.children;
        let changeComponentSize = const_var.changeComponentSize;
        // data.forEach(function(Geometry) {

        const_var.entry_points.forEach((Geometry) => {
            if(Geometry.component_wall_name == wallName){
                 /* 
                 // to filter out doors from scene children
                 */
                //  if(Geometry.name.includes("9_lite_l_swing_walkin") == true || Geometry.name.includes("solid_l_swing_walkin") == true || Geometry.name.includes("standard_window") == true ||  Geometry.name.includes("6_lite_walkin") == true || Geometry.name.includes("standard_door") == true || Geometry.name.includes("standard_walkin") == true || Geometry.name.includes("standard_trim_door") == true || Geometry.name.includes("diamond_window_walkin") == true || Geometry.name.includes("9_lite_walkin") == true || Geometry.name.includes("solid_walkin") == true || Geometry.name.includes("half_sectional_door_design") == true || Geometry.name.includes("double_delux_walkin") == true || Geometry.name.includes("sectional_door") == true || Geometry.name.includes("sectional_with_window_door") == true || Geometry.name.includes("11_lite_walkin") == true || Geometry.name.includes("4_lite_walkin") == true || Geometry.name.includes("5_lite_walkin") == true || Geometry.name.includes("double_slider_door_door")|| Geometry.name.includes("double_door_walkin")|| Geometry.name.includes("9_lite_double_door_walkin") == true){
                    if (Geometry.entry_type != "window" && Geometry.entry_type != "window_frameout") {
                     if(Geometry.entry_rotation.y == 3.141592653589793 || Geometry.entry_rotation.y == 0){
                         posVal.push(Geometry.entry_position.z)
                     }else{
                         posVal.push(Geometry.entry_position.x)
                     }
                     total += Geometry.entry_dimension_width;
                     NumberOFDoors += 1;
                 }
             }
        })
    
        // })  
        posVal.sort(function(a, b){return a-b });


        /* 
        // should run for all doors
        */
        // if(compName.includes("standard_window") == true || compName.includes("standard_door") == true || compName.includes("standard_walkin") == true || compName.includes("standard_trim_door") == true || compName.includes("diamond_window_walkin") == true || compName.includes("9_lite_walkin") == true || compName.includes("6_lite_walkin") == true || compName.includes("solid_walkin") == true || compName.includes("half_sectional_door_design") == true || compName.includes("double_delux_walkin") == true || compName.includes("sectional_door") == true || compName.includes("sectional_with_window_door") == true || compName.includes("11_lite_walkin") == true || compName.includes("4_lite_walkin") == true || compName.includes("5_lite_walkin") == true || compName.includes("double_slider_door_door")|| compName.includes("double_door_walkin")|| compName.includes("9_lite_double_door_walkin") == true){
            if(const_var.scene.getObjectByName(wallName) != undefined){
                let wallWidth = Math.round(const_var.scene.getObjectByName(wallName).scale.x);
                let compDimension = componentdimension[0]
                if( compName.includes("standard_door") == true || compName.includes("standard_trim_door") == true || compName.includes("sectional_door") == true|| compName.includes("double_slider_door_door") == true|| compName.includes("sectional_with_window_door") == true ){
                    compDimension = componentdimension[0]
                }else{
                    compDimension =  (Math.floor(parseInt(componentdimension[0])*0.083))
                }
                if((total+parseInt(compDimension)+NumberOFDoors+2) > wallWidth && (compType != 'window' && compType != 'window_frameout')){
                    const_var.isShowAlert = true;
                    const_var.alertUsedFor = "noSpaceForComponent";
                    const_var.checkDoorIsadded = false;
                    if (const_var.removed_door) {
                        const_var.removed_door_entry_point && (const_var.entry_points.push(const_var.removed_door_entry_point));
                        const_var.newDoorsArray.push(const_var.removed_door);
                        const_var.scene.add(const_var.removed_door);
                        cuBuilding.DoorCSG();
                    }

                    delete const_var.removed_door_entry_point;
                    delete const_var.removed_door;

                    if (is_edit != undefined ) const_var.sum++;
                    return
                }
            }
        // }

        // if(compName.includes("standard_door") == true || compName.includes("standard_walkin") == true || compName.includes("standard_trim_door") == true || compName.includes("diamond_window_walkin") == true || compName.includes("9_lite_walkin") == true){
        //     if(const_var.scene.getObjectByName(wallName) != undefined){
        //        let wallWidth = Math.trunc(const_var.scene.getObjectByName(wallName).scale.x);
        //        let compDimension = componentdimension[0]
        //        if( compName.includes("standard_walkin") == true || compName.includes("diamond_window_walkin") == true || compName.includes("9_lite_walkin") == true){
        //        compDimension =  (Math.floor(parseInt(componentdimension[0])*0.083))/2
        //        }
        //        if(total+parseInt(compDimension)+NumberOFDoors+1 >= wallWidth && entry_rotation==undefined && entry_position==undefined){
        //           const_var.isShowAlert = true;
        //           const_var.alertUsedFor = "noSpaceForComponent";
        //           const_var.checkDoorIsadded = false;
        //           return
        //        }
        //     }}

    const gltf = await gltfLoader.loadAsync(process.env.REACT_APP_BASE_URL+doorURL);    
    //const gltf = await gltfLoader.loadAsync(doorURL);


    if (gltf != undefined && gltf.scene !== undefined) {
        const wallComponent = gltf.scene;
        let checkWallValue = const_var.checkWallClose[wallName];
        var trimCalor = params.p_t_c.replace("#", "0x");
        if(checkWallValue == 'utility')
        {
          trimCalor = params.p_t_c.replace("#", "0x");
        }
        //  else if (params[checkWallValue]=='Open' && checkWallValue == 'utility') {
        //     trimCalor = params.p_t_c.replace("#", "0x");
        // } 
        else{
          if(params[checkWallValue]=='Open')
          {
            trimCalor = '0x94989B';
         }
       }
       if (params.isBreezeway && isBreezewayFrameOut ) {
        trimCalor = params.p_t_c.replace("#", "0x");
       }
        // console.log(compType, compName, wallName,componentsize,parentkey,childkey,nestedkey,entry_rotation,entry_position,"compType, compName, wallName,componentsize,parentkey,childkey")
        wallComponent.name = compName + const_var.sum
        wallComponent.size = componentsize;
        wallComponent.position.set(0, 4, params.p_d / 2);
        wallComponent.rotation.y = Math.PI / 2;
        wallComponent.actual_val = doorWidth + "X" + doorHeight;
        wallComponent.uniqueId = const_var.sum;
        wallComponent.scale.z = 1.5;
        wallComponent.DoorObj = { motor: params.motor ,insulated: params.insulated,"trimkit": params.trimkit, "chain_hoist": params.chain_hoist, "header_seal": params.header_seal, "certified_door": params.certified_door, "entry_note": params.extra_notes, "garage_door_color": params.g_d_c, "automatic_openers": params.automatic_openers };
        // wallComponent.pos = wallName;
        // wallComponent.BarnPos = wallName;
        wallComponent.width = doorWidth;
        wallComponent.height = doorHeight;
        wallComponent.userData.compType = compType;
        wallComponent.userData.wallName = wallName;
        wallComponent.userData.uniqueId = wallComponent.uniqueId;
        wallComponent.userData.compName = compName;
        wallComponent.userData.isBreezewayFrameOut = isBreezewayFrameOut;

        if (compName === "faux_window_window" || compName === "double_slider_door_door" ) {
            wallComponent.userData.cuttingFeatureAvailable = false;
        } else {
            wallComponent.userData.cuttingFeatureAvailable = true;
        }

        let index = wallComponent.children.findIndex(data => data.name.includes("trim") == true);
        // if (compType == "window" || compType == "window_frameout"){
        //     wallComponent.children[index].material.color.setHex( 0xFFFFFF );
        // }
        if (index != -1) {
            wallComponent.children[index].material.emissive.setHex(trimCalor);
        }
        // console.log(index,wallComponent.children,"wallComponent.children", wallComponent.children[index].material.color, wallComponent.children[index].material.emissive )



        // addDoorEditIcon(wallComponent);
        
        wallComponent.position.set(0, 0, 0);
        if (!isBreezewayFrameOut) wallComponent.userData.editIconPos = wallComponent.worldToLocal(new THREE.Box3().setFromObject(wallComponent).max);
        // let doorIcon = await addDoorEditIcon1(wallComponent);
        // console.log(params.leanF_p_d,"params.leanF_p_d",const_var.b_t_M_F_t_F.getObjectByName("F_L_R_W").position)
        // addDoorEditIcon(wallComponent);
        var kk = 0;
        var kd = 0;
        var kw = 0;
        let calQuantity = 0;
        let Yposition = doorHeight;
        let posOffset = -0.09;

        if (compType == "window" || compType == "window_frameout") {
            Yposition = params.p_h /2 + doorHeight;
            const wH = const_var.scene.getObjectByName(wallName);
            if (wH)  Yposition = (Math.round(wH.scale.y) * 0.75) * 2;
            kw++;
            calQuantity = kw;
            wallComponent.children[index].material.color.set(trimCalor);

        }
        if (compType == "walkin" || compType == "walkin_frameout") {
            kd++;
            calQuantity = kd;
        }

        Yposition -= 0.08;

        switch (wallName) {
            //front
            case "c_b_f_w":
                wallComponent.position.set(0, Yposition / 2, params.p_d / 2 + posOffset);
                wallComponent.rotation.y = Math.PI / 2;
                break;

            //left
            case "c_b_l_w":
                wallComponent.position.set(-params.p_w / 2 - posOffset, Yposition / 2, 0);
                wallComponent.rotation.y = 0;
                break;

            //back
            case "c_b_b_w":
                wallComponent.position.set(0, Yposition / 2, -params.p_d / 2 - posOffset);
                wallComponent.rotation.y = - Math.PI / 2;
                break;

            //right
            case "c_b_r_w":
                wallComponent.position.set(params.p_w / 2 + posOffset, Yposition / 2, 0);
                wallComponent.rotation.y = Math.PI;
                break;
            //Free standing Lean Right wall    
            case "F_S_L_R_W":
                wallComponent.position.set(params.p_w / 2 + posOffset, Yposition / 2, 0);
                wallComponent.rotation.y = Math.PI;
                break;

            //center building left storage front wall
            case "c_b_l_s_f_w":
                wallComponent.position.set(-params.p_w / 2 + Number(params.cB_addStorage_left) / 2, Yposition / 2, params.p_d / 2 + posOffset);
                wallComponent.rotation.y = Math.PI / 2;
                break;

            //center building left storage back wall
            case "c_b_l_s_b_w":
                wallComponent.position.set(-params.p_w / 2 + Number(params.cB_addStorage_left) / 2, Yposition / 2, -params.p_d / 2 - posOffset);
                wallComponent.rotation.y = - Math.PI / 2;
                break;

            //center building left storage right wall
            case "c_b_l_s_r_w":
                wallComponent.position.set(-params.p_w / 2 + Number(params.cB_addStorage_left) + posOffset , Yposition / 2, 0);
                wallComponent.rotation.y = Math.PI;
                break;

            //center building right storage front wall
            case "c_b_r_s_f_w":
                wallComponent.position.set(params.p_w / 2 - Number(params.cB_addStorage_right) / 2, Yposition / 2, params.p_d / 2 + posOffset);
                wallComponent.rotation.y = Math.PI / 2;
                break;

            //center building right storage back wall
            case "c_b_r_s_b_w":
                wallComponent.position.set(params.p_w / 2 - Number(params.cB_addStorage_right) / 2, Yposition / 2, -params.p_d / 2 - posOffset);
                wallComponent.rotation.y = -Math.PI / 2;
                break;

            //center building right storage left wall
            case "c_b_r_s_l_w":
                wallComponent.position.set(params.p_w / 2 - Number(params.cB_addStorage_right) - posOffset, Yposition / 2, 0);
                wallComponent.rotation.y = 0;
                break;

            //center building back storage front wall
            case "c_b_f_s_w":
                wallComponent.position.set(0, Yposition / 2, -params.p_d / 2 + Number(params.p_u_t) + posOffset);
                wallComponent.rotation.y = Math.PI / 2;
                break;

            //center building back storage left wall
            case "c_b_l_s_w":
                wallComponent.position.set(-params.p_w / 2 - posOffset, Yposition / 2, -params.p_d / 2 + Number(params.p_u_t) / 2);
                wallComponent.rotation.y = 0;
                break;

            //center building back storage right wall
            case "c_b_r_s_w":
                wallComponent.position.set(params.p_w / 2 + posOffset, Yposition / 2, -params.p_d / 2 + Number(params.p_u_t) / 2);
                wallComponent.rotation.y = Math.PI;
                break;

            //center building front storage left wall
            case "c_b_f_s_l_w":
                wallComponent.position.set(-params.p_w / 2 - posOffset, Yposition / 2, params.p_d / 2 - Number(params.cB_addStorage_front) / 2);
                wallComponent.rotation.y = 0;
                break;

            //center building front storage right wall
            case "c_b_f_s_r_w":
                wallComponent.position.set(params.p_w / 2 + posOffset, Yposition / 2, params.p_d / 2 - Number(params.cB_addStorage_front) / 2);
                wallComponent.rotation.y = Math.PI;
                break;

            //center building front storage back wall
            case "c_b_f_s_b_w":
                wallComponent.position.set(0, Yposition / 2, params.p_d / 2 - Number(params.cB_addStorage_front));
                wallComponent.rotation.y = - Math.PI / 2;
                break;

            //Left lean side wall
            case "L_L_L_W":
                if (params.add_left_front_lean_porch == true && params.add_left_back_lean_porch == false) {
                    wallComponent.position.set(params.p_w / -2 - params.lean_p_w - posOffset, Yposition / 2, (params.lean_p_d + params.leanF_p_w) / 2);
                } else if (params.add_left_front_lean_porch == false && params.add_left_back_lean_porch == true) {
                    // console.log(params.lean_p_d, "+", (-params.leanB_p_w), "+", (-params.lean_p_d + (-params.leanB_p_w)) / 2, "(params.lean_p_d+(-params.leanB_p_w))/2");
                    wallComponent.position.set(params.p_w / -2 - params.lean_p_w - posOffset, Yposition / 2, (-params.lean_p_d + (-params.leanB_p_w)) / 2);
                }else if(params.leantoAlignmentLeft=="3")
                {
                    wallComponent.position.set(params.p_w / -2 - params.lean_p_w - posOffset, Yposition / 2, (params.lean_p_d-params.p_d)/2);
                }else if(params.leantoAlignmentLeft=="2")
                {
                    wallComponent.position.set(params.p_w / -2 - params.lean_p_w - posOffset, Yposition / 2, (params.p_d-params.lean_p_d)/2);
                } else {
                    wallComponent.position.set(params.p_w / -2 - params.lean_p_w - posOffset, Yposition / 2, 0);
                }
                wallComponent.rotation.y = 0;
                break;

            //Left lean back wall
            case "L_L_B_W":
                wallComponent.position.set((-params.p_w / 2 - params.lean_p_w / 2) - const_var.scene.getObjectByName("LeftLeanWalls").position.x, Yposition / 2, (- params.lean_p_d / 2 - posOffset) + const_var.scene.getObjectByName("LeftLeanWalls").position.z);
                wallComponent.rotation.y = -Math.PI / 2;
                break;

            //Left lean front wall
            case "L_L_F_W":
                wallComponent.position.set((-params.p_w / 2 - params.lean_p_w / 2) + const_var.scene.getObjectByName("LeftLeanWalls").position.x, Yposition / 2, (params.lean_p_d / 2 + posOffset) + const_var.scene.getObjectByName("LeftLeanWalls").position.z);
                wallComponent.rotation.y = Math.PI / 2;
                break;


            //Back lean side wall
            case "B_L_S_W":
                if (params.add_right_back_lean_porch == true && params.add_left_back_lean_porch == false) {
                    wallComponent.position.set((params.leanB_p_d + params.leanR_p_w) / 2, Yposition / 2, params.p_d / -2 - params.leanB_p_w - posOffset);
                } else if (params.add_right_back_lean_porch == false && params.add_left_back_lean_porch == true) {
                    wallComponent.position.set((-params.leanB_p_d + (-params.leanR_p_w)) / 2, Yposition / 2, params.p_d / -2 - params.leanB_p_w - posOffset);
                }else if(params.leantoAlignmentBack=="2")
                {
                    wallComponent.position.set((params.p_w-params.leanB_p_w)/2, Yposition / 2, params.p_d / -2 - params.leanB_p_w - posOffset);
                }else if(params.leantoAlignmentBack=="3")
                {
                    wallComponent.position.set((params.leanB_p_w-params.p_w)/2, Yposition / 2, params.p_d / -2 - params.leanB_p_w - posOffset);
                } else {
                    wallComponent.position.set(0, Yposition / 2, params.p_d / -2 - params.leanB_p_w - posOffset);
                }
                wallComponent.rotation.y = -Math.PI / 2;
                break;

            //Back lean left wall
            case "B_L_B_W":
                wallComponent.position.set((- params.leanB_p_d / 2 - posOffset) + const_var.scene.getObjectByName("BackLeanWalls").position.x, Yposition / 2, (-params.p_d / 2 - params.leanB_p_w / 2) + const_var.scene.getObjectByName("BackLeanWalls").position.z);
                wallComponent.rotation.y = 0;
                break;

            //Back lean right wall
            case "B_L_F_W":
                wallComponent.position.set((params.leanB_p_d / 2 + posOffset) + const_var.scene.getObjectByName("BackLeanWalls").position.x, Yposition / 2, (-params.p_d / 2 - params.leanB_p_w / 2) + const_var.scene.getObjectByName("BackLeanWalls").position.z);
                wallComponent.rotation.y = Math.PI;
                break;

            //Front lean side wall
            case "F_L_F_W":
                if (params.add_right_front_lean_porch == true && params.add_left_front_lean_porch == false) {
                    wallComponent.position.set((params.leanF_p_d + params.leanR_p_w) / 2, Yposition / 2, params.p_d / 2 + params.leanF_p_w + posOffset);
                } else if (params.add_right_front_lean_porch == false && params.add_left_front_lean_porch == true) {
                    wallComponent.position.set((-params.leanF_p_d + (-params.lean_p_w)) / 2, Yposition / 2, params.p_d / 2 + params.leanF_p_w + posOffset);
                }else if(params.leantoAlignmentFront=="2")
                {
                    wallComponent.position.set((params.leanF_p_w-params.p_w)/2, Yposition / 2, params.p_d / 2 + params.leanF_p_w + posOffset);
                }else if(params.leantoAlignmentFront=="3")
                {
                    wallComponent.position.set((params.p_w-params.leanF_p_w)/2, Yposition / 2, params.p_d / 2 + params.leanF_p_w + posOffset);
                } else {
                    wallComponent.position.set(0, Yposition / 2, params.p_d / 2 + params.leanF_p_w + posOffset);
                }
                wallComponent.rotation.y = Math.PI / 2;
                break;

            //Front lean left wall
            case "F_L_L_W":
                wallComponent.position.set((- params.leanF_p_d / 2 - posOffset) + const_var.scene.getObjectByName("FrontLeanWalls").position.x, Yposition / 2, (params.p_d / 2 + params.leanF_p_w / 2) + const_var.scene.getObjectByName("FrontLeanWalls").position.z);
                wallComponent.rotation.y = 0;
                break;

            //Front lean right wall
            case "F_L_R_W":
                wallComponent.position.set((params.leanF_p_d / 2 + posOffset) + const_var.scene.getObjectByName("FrontLeanWalls").position.x, Yposition / 2, (params.p_d / 2 + params.leanF_p_w / 2) + const_var.scene.getObjectByName("FrontLeanWalls").position.z);
                wallComponent.rotation.y = Math.PI;
                break;

            //Right lean side wall
            case "R_L_R_W":
                if (params.add_right_front_lean_porch == true && params.add_right_back_lean_porch == false) {
                    wallComponent.position.set(params.p_w / 2 + params.leanR_p_w + posOffset, Yposition / 2, (params.leanR_p_d + params.leanF_p_w) / 2);
                } else if (params.add_right_front_lean_porch == false && params.add_right_back_lean_porch == true) {
                    wallComponent.position.set(params.p_w / 2 + params.leanR_p_w + posOffset, Yposition / 2, (-params.leanR_p_d + (-params.leanB_p_w)) / 2);
                }else if(params.leantoAlignmentRight=="3")
                {
                    wallComponent.position.set(params.p_w / 2 + params.leanR_p_w + posOffset, Yposition / 2, (params.leanR_p_d-params.p_d)/2);
                }else if(params.leantoAlignmentRight=="2")
                {
                    wallComponent.position.set(params.p_w / 2 + params.leanR_p_w + posOffset, Yposition / 2, (params.p_d-params.leanR_p_d)/2);
                } else {
                    wallComponent.position.set(params.p_w / 2 + params.leanR_p_w + posOffset, Yposition / 2, 0);
                }
                wallComponent.rotation.y = Math.PI;
                break;

            //Right lean back wall
            case "R_L_B_W":
                wallComponent.position.set((params.p_w / 2 + params.leanR_p_w / 2) + const_var.scene.getObjectByName("RightLeanWalls").position.x, Yposition / 2, (- params.leanR_p_d / 2 - posOffset) + const_var.scene.getObjectByName("RightLeanWalls").position.z);
                wallComponent.rotation.y = -Math.PI / 2;
                break;

            //Right Lean front wall
            case "R_L_F_W":
                wallComponent.position.set((params.p_w / 2 + params.leanR_p_w / 2) + const_var.scene.getObjectByName("RightLeanWalls").position.x, Yposition / 2, (params.leanR_p_d / 2 + posOffset) + const_var.scene.getObjectByName("RightLeanWalls").position.z);
                wallComponent.rotation.y = Math.PI / 2;
                break;

            //Left lean Storage Front wall
            case "L_L_F_S_W":
                wallComponent.position.set((-params.p_w / 2 - params.lean_p_w / 2)+ const_var.scene.getObjectByName("LeftLeanWalls").position.x, Yposition / 2, (-params.lean_p_d / 2 + Number(params.add_storage) + posOffset)+ const_var.scene.getObjectByName("LeftLeanWalls").position.z);
                wallComponent.rotation.y = Math.PI / 2;
                break;

            //Left lean Storage Left wall
            case "L_L_L_S_W":
                if ( params.leantoAlignmentLeft == "2" ) {
                    wallComponent.position.set(-params.p_w / 2 - params.lean_p_w - posOffset, Yposition / 2, (params.p_d / 2) - params.lean_p_d + Number(params.add_storage / 2));
                } else if (params.leantoAlignmentLeft == "3"){
                    wallComponent.position.set(-params.p_w / 2 - params.lean_p_w - posOffset, Yposition / 2, -params.p_d / 2 + Number(params.add_storage / 2));
                } else {
                    wallComponent.position.set(-params.p_w / 2 - params.lean_p_w - posOffset, Yposition / 2, -params.lean_p_d / 2 + Number(params.add_storage / 2));
                }           
                wallComponent.rotation.y = 0;
                break;

            //Left Lean Storage Right wall
            case "L_L_R_S_W":
                if( params.leantoAlignmentLeft=="2") {
                    wallComponent.position.set(-params.p_w / 2 + posOffset, Yposition / 2,  (params.p_d / 2) - params.lean_p_d + Number(params.add_storage / 2));
                } else if ( params.leantoAlignmentLeft == "3"){
                    wallComponent.position.set(-params.p_w / 2 + posOffset, Yposition / 2, -params.p_d / 2 + Number(params.add_storage / 2));
                } else {
                    wallComponent.position.set(-params.p_w / 2 + posOffset, Yposition / 2, -params.lean_p_d / 2 + Number(params.add_storage / 2));
                }   
                wallComponent.rotation.y = Math.PI;
                break;

            //Right lean Storage Front wall
            case "R_L_F_S_W":
                wallComponent.position.set((params.p_w / 2 + params.leanR_p_w / 2) + const_var.scene.getObjectByName("RightLeanWalls").position.x, Yposition / 2, (-params.leanR_p_d / 2 + Number(params.add_storage_right) + posOffset) + const_var.scene.getObjectByName("RightLeanWalls").position.z);
                wallComponent.rotation.y = Math.PI / 2;
                break;

            //Right lean Storage Left wall
            case "R_L_L_S_W":
                if ( params.leantoAlignmentRight == "2" ) {
                    wallComponent.position.set(params.p_w / 2 - posOffset, Yposition / 2, (params.p_d / 2) - params.leanR_p_d + Number(params.add_storage_right / 2));
                } else if ( params.leantoAlignmentRight == "3"){
                    wallComponent.position.set(params.p_w / 2 - posOffset, Yposition / 2, -params.p_d / 2 + Number(params.add_storage_right / 2));
                } else {
                    wallComponent.position.set(params.p_w / 2 - posOffset, Yposition / 2, -params.leanR_p_d / 2 + Number(params.add_storage_right / 2));
                }  
                wallComponent.rotation.y = 0;
                break;

            //Right Lean Storage Right wall
            case "R_L_R_S_W":
                if ( params.leantoAlignmentRight == "2" ) {
                    wallComponent.position.set(params.p_w / 2 + params.leanR_p_w + posOffset, Yposition / 2, (params.p_d / 2) - params.leanR_p_d + Number(params.add_storage_right / 2));
                } else if ( params.leantoAlignmentRight == "3"){
                    wallComponent.position.set(params.p_w / 2 + params.leanR_p_w + posOffset, Yposition / 2, -params.p_d / 2 + Number(params.add_storage_right / 2));
                } else {
                    wallComponent.position.set(params.p_w / 2 + params.leanR_p_w + posOffset, Yposition / 2, -params.leanR_p_d / 2 + Number(params.add_storage_right / 2));
                }  
                wallComponent.rotation.y = Math.PI;
                break;

            //Back lean Storage Front wall
            case "B_L_F_S_W":
                if ( params.leantoAlignmentBack== "2" ) {
                    wallComponent.position.set( (params.p_w / 2) - params.leanB_p_d + Number(params.add_storage_back / 2), Yposition / 2, -params.p_d / 2 - params.leanB_p_w - posOffset);
                } else if (params.leantoAlignmentBack== "3"){
                    wallComponent.position.set(-params.p_w / 2 + Number(params.add_storage_back / 2), Yposition / 2,  -params.p_d / 2 - params.leanB_p_w - posOffset );
                } else {
                    wallComponent.position.set(- params.leanB_p_d/ 2 + Number(params.add_storage_back / 2), Yposition / 2,  -params.p_d / 2 - params.leanB_p_w - posOffset);
                }  
                wallComponent.rotation.y = -Math.PI / 2;
                break;

            //Back lean Storage Back wall
            case "B_L_B_S_W":
                if ( params.leantoAlignmentBack== "2" ) {
                    wallComponent.position.set( (params.p_w / 2) - params.leanB_p_d + Number(params.add_storage_back / 2), Yposition / 2,-params.p_d / 2 + posOffset);
                } else if (params.leantoAlignmentBack== "3"){
                    wallComponent.position.set(-params.p_w / 2 + Number(params.add_storage_back / 2), Yposition / 2, -params.p_d / 2 + posOffset );
                } else {
                    wallComponent.position.set(- params.leanB_p_d/ 2 + Number(params.add_storage_back / 2), Yposition / 2, -params.p_d / 2 + posOffset);
                }
                wallComponent.rotation.y = Math.PI / 2;
                break;

            //Back Lean Storage Left wall
            case "B_L_L_S_W":
                wallComponent.position.set((- params.leanB_p_d / 2 + Number(params.add_storage_back) + posOffset)+ const_var.scene.getObjectByName("BackLeanWalls").position.x, Yposition / 2, (- params.p_d / 2 - params.leanB_p_w / 2)+ const_var.scene.getObjectByName("BackLeanWalls").position.z);
                wallComponent.rotation.y = Math.PI;
                break;

            //Front lean Storage Front wall
            case "F_L_F_S_W":
                if ( params.leantoAlignmentFront== "3" ) {
                    wallComponent.position.set( (params.p_w / 2) - params.leanF_p_d + Number(params.add_storage_front / 2), Yposition / 2,params.p_d / 2 + params.leanF_p_w + posOffset);
                } else if (params.leantoAlignmentFront== "2"){
                    wallComponent.position.set(-params.p_w / 2 + Number(params.add_storage_front / 2), Yposition / 2, params.p_d / 2 + params.leanF_p_w + posOffset );
                } else {
                    wallComponent.position.set(- params.leanF_p_d/ 2 + Number(params.add_storage_front / 2), Yposition / 2, params.p_d / 2 + params.leanF_p_w + posOffset);
                }       
                wallComponent.rotation.y = Math.PI / 2;
                break;

            //Front lean Storage Back wall
            case "F_L_B_S_W":
                if ( params.leantoAlignmentFront== "3" ) {
                    wallComponent.position.set( (params.p_w / 2) - params.leanF_p_d + Number(params.add_storage_front / 2), Yposition / 2,params.p_d / 2 - posOffset);
                } else if (params.leantoAlignmentFront== "2"){
                    wallComponent.position.set(-params.p_w / 2 + Number(params.add_storage_front / 2), Yposition / 2, params.p_d / 2 - posOffset );
                } else {
                    wallComponent.position.set(- params.leanF_p_d/ 2 + Number(params.add_storage_front / 2), Yposition / 2, params.p_d / 2 - posOffset);
                } 
                wallComponent.position.set(- params.p_w / 2 + Number(params.add_storage_front / 2), Yposition / 2, params.p_d / 2 - posOffset);
                wallComponent.rotation.y = -Math.PI / 2;
                break;

            //Front Lean Storage Right wall
            case "F_L_R_S_W":
                wallComponent.position.set((- params.leanF_p_d / 2 + Number(params.add_storage_front) + posOffset)+ const_var.scene.getObjectByName("FrontLeanWalls").position.x, Yposition / 2, (params.p_d / 2 + params.leanF_p_w / 2)+ const_var.scene.getObjectByName("FrontLeanWalls").position.z);
                wallComponent.rotation.y = Math.PI;
                break;

            default:
                return  console.log(wallName + " not defined");
        }
        // widthForDoor(wallComponent,wallComponent.position,wallComponent.rotation);
        if (entry_position != undefined && entry_position != '') {
            if(is_edit!=undefined)
            {
                if (compType == "window" || compType == "window_frameout") {
                    wallComponent.position.set(entry_position.x, entry_position.y, entry_position.z);
                } else {
                    wallComponent.position.set(entry_position.x, Yposition / 2, entry_position.z);
                }
            }else
            {
                wallComponent.position.set(entry_position.x, Yposition / 2, entry_position.z);
            }
            //wallComponent.rotation.set(entry_rotation._x,entry_rotation._y,entry_rotation._z); 
        }
        if (entry_rotation != undefined && entry_rotation != '') {
            //wallComponent.position.set(entry_position.x,entry_position.y,entry_position.z); 
            wallComponent.rotation.set(entry_rotation._x, entry_rotation._y, entry_rotation._z);
        }
        // console.log(wallComponent,"wallComponent", const_var.b_s_c_n);
        // calculateDoorDistance(wallComponent);
        var ratio = 0.1666666666666667;
        if( compName.includes("black_window") || compName.includes("window_8_grid_window") == true || compName.includes("sectional_door") == true || compName.includes("standard_door") == true || compName.includes("standard_trim_door") == true || compName.includes("standard_window") == true || compName.includes("window_with_shutters_window") == true){
            wallComponent.scale.set(1, ratio * doorHeight, ratio * doorWidth);
        }else{
            wallComponent.scale.set(1, ratio * doorHeight, (ratio*2) * doorWidth);
        }
        if (compName.includes("window_with_shutters_window") == true){
            let Shutter = wallComponent.children.find(mesh => mesh.name == "Shutters");
            if (Shutter !== undefined){
                let  wallCalor = params.p_w_c.replace("#","0x");
                Shutter.material =  new THREE.MeshPhongMaterial({ color: wallCalor});
                new THREE.TextureLoader().load(process.env.REACT_APP_BASE_URL+shutterWindowTexture,(texture)=>{
                    Shutter.material.map = texture;
                    Shutter.material.metalness = 1
                    Shutter.material.roughness = 0.5
                    Shutter.material.anisotropy = 10;
                    Shutter.material.needsUpdate = true;
                } )
                Shutter.material.color.setHex(wallCalor)
            }
        }
        if (wallComponent.name.includes("black_window" + const_var.sum) == true) {
            if (wallComponent.children != undefined) {
                let newIndex = wallComponent.children.findIndex(data=>data.name=="window");
                wallComponent.children[newIndex].material.color.setHex("#000000");
                //wallComponent.children[newIndex].material.emissive.setHex("#000000");
                let newIndex1 = wallComponent.children.findIndex(data=>data.name=="inside_trims");
                if(newIndex1!=undefined)
                {
                    wallComponent.children[newIndex1].material.emissive.setHex("#000000");
                }
                //wallComponent.children[newIndex].material.emissive.setHex("#000000");
            }

        }
        // console.log(compType.includes('_frameout'),"compType.includes('_frameout')",)
        if (!wallComponent.getObjectByName("Doors") && !wallComponent.getObjectByName("doors")) {
            // let doorBox = new THREE.Mesh(new THREE.BoxGeometry(1, doorHeight, doorWidth), new THREE.MeshBasicMaterial({transparent: true, opacity: 0.01}));
            // doorBox.visible = false;
            // wallComponent.add(doorBox);
            let doorBox = new THREE.Mesh(new THREE.BoxGeometry(2.3, doorHeight, doorWidth), new THREE.MeshBasicMaterial());
            let win = wallComponent.getObjectByName("window");
            if (compType.includes("window") && win) {
                const mesh = new THREE.Mesh(win.geometry, new THREE.MeshBasicMaterial({color: "#ff0000"}));               
                const bb = new THREE.Box3().setFromObject(mesh);
                const dim = new THREE.Vector3().subVectors(bb.max, bb.min);
                doorBox = new THREE.Mesh(new THREE.BoxGeometry(dim.x, 1, dim.z), new THREE.MeshBasicMaterial());
            }
            doorBox.visible = false;
            doorBox.name = "door1";

            if( compName.includes("black_window") == true || compName.includes("sectional_door") == true || compName.includes("standard_door") == true || compName.includes("standard_trim_door") == true || compName.includes("standard_window") == true) {
                doorBox.scale.set(1, 1 / (ratio * doorHeight), 1 / (ratio * doorWidth));
            } else {
                doorBox.scale.set(1, 1 / (ratio * doorHeight), 1 / (2*ratio * doorWidth));
            }

            if (compType.includes("window")) {
                if (win) {
                    doorBox.scale.copy(win.scale);
                    // Proper fix need to be implement and Fix ASAP
                    if ((const_var.legstype == "zigzag" && params.p_e_l) 
                    || (const_var.leanLegstype == "zigzag" && params.lean_p_e_l)
                    || (const_var.leanRLegstype == "zigzag" && params.leanR_p_e_l)
                    || (const_var.leanFLegstype == "zigzag" && params.leanF_p_e_l)
                    || (const_var.leanBLegstype == "zigzag" && params.leanB_p_e_l)) {
                        doorBox.scale.y = 3;
                    }

                    doorBox.rotation.copy(win.rotation);
                } else {
                    doorBox.scale.set(1, 1 / (ratio * (doorHeight + 0.5)), 1 / (ratio * (doorWidth + 0.4)));
                }

            }
            doorBox.material.color.setHex(trimCalor);
            wallComponent.add(doorBox);
        }
        // console.log("wallComponent",wallComponent );



        if(const_var.entry_points.length > 0 && const_var.scene.getObjectByName(wallName) != undefined){
            let wallWidth = Math.trunc(const_var.scene.getObjectByName(wallName).scale.x);
            for (let i = 0; i < const_var.entry_points.length; i++) {   
                for (let j = 0; j < const_var.entry_points.length; j++) {


                    // if (const_var.entry_points[j].entry_type == "window" || const_var.entry_points[j].entry_type == "window_frameout") continue;
                    /* 
                    // sizes according to inches/feet, for garage type door multiply by 1 and for others by 0.084 (1/12)
                    */
                    if(const_var.entry_points[j].component_name == "standard_door" || const_var.entry_points[j].component_name == "standard_trim_door" || const_var.entry_points[j].component_name == "sectional_door" || const_var.entry_points[j].component_name == "double_slider_door_door" || const_var.entry_points[j].component_name == "sectional_with_window_door"){
                        compWidth = (Number(const_var.entry_points[j].name.split('x')[0]))*1
                    }else{
                        compWidth = (Number(const_var.entry_points[j].name.split('x')[0]))*0.084
                    }
                    
                    if(const_var.entry_points[j].entry_rotation._y == 3.141592653589793 || const_var.entry_points[j].entry_rotation._y == 0){
                        pos = const_var.entry_points[j].entry_position.z
                        dimention = params.p_d;
                        leanDepth1 = params.leanR_p_d;
                        leanDepth2 = params.lean_p_d;
                        leanWidth1 = params.leanB_p_w
                        leanWidth2 = params.leanF_p_w

                    }else{
                        pos = const_var.entry_points[j].entry_position.x
                        dimention = params.p_w;
                        leanDepth1 = params.leanF_p_d;
                        leanDepth2 = params.leanB_p_d;
                        leanWidth1 = params.lean_p_w
                        leanWidth2 = params.leanR_p_w

                    }
                // if(posVal[0] == pos && const_var.entry_points[j].component_wall_name == wallName){
                //     preDistance = (wallWidth/-2) - (pos-(compWidth/2))
                //     preDoor = (pos-(compWidth/2))
                //     if(wallName == "F_L_F_W" && params.leantoAlignmentFront == "2" && params.add_left_front_lean_porch == false || wallName == "B_L_S_W" && params.leantoAlignmentBack == "3" && params.add_left_back_lean_porch == false|| wallName == "L_L_L_W" && params.leantoAlignmentLeft == "3" && params.add_left_back_lean_porch == false|| wallName == "R_L_R_W" && params.leantoAlignmentRight == "3" && params.add_right_back_lean_porch == false || wallName == "L_L_L_S_W" && params.leantoAlignmentLeft == "3" || wallName == "L_L_R_S_W" && params.leantoAlignmentLeft == "3" || wallName == "R_L_L_S_W" && params.leantoAlignmentRight == "3" || wallName == "R_L_R_S_W" && params.leantoAlignmentRight == "3" ||wallName == "F_L_F_S_W" && params.leantoAlignmentFront == "2" || wallName == "F_L_B_S_W" && params.leantoAlignmentFront == "2" || wallName == "B_L_F_S_W" && params.leantoAlignmentBack == "3" || wallName == "B_L_B_S_W" && params.leantoAlignmentBack == "3" || wallName == "c_b_l_s_f_w" || wallName == "c_b_l_s_b_w"){
                //         preDistance = pos+(dimention/2)-(compWidth/2)
                //     }


                //     if(wallName == "F_L_F_W" && (params.leantoAlignmentFront == "2" || params.leantoAlignmentFront == "1") && params.add_left_front_lean_porch == true && params.add_right_front_lean_porch == false|| wallName == "B_L_S_W" && (params.leantoAlignmentBack == "3" || params.leantoAlignmentBack == "1") && params.add_left_back_lean_porch == true && params.add_right_back_lean_porch == false || wallName == "L_L_L_W" && (params.leantoAlignmentLeft == "3" || params.leantoAlignmentLeft == "1") && params.add_left_back_lean_porch == true && params.add_left_front_lean_porch == false|| wallName == "R_L_R_W" && (params.leantoAlignmentRight == "3" || params.leantoAlignmentRight == "1") && params.add_right_back_lean_porch == true && params.add_right_front_lean_porch == false ){
                //         preDistance = pos+(dimention/2)-(compWidth/2) + leanWidth1
                //     }
                //     // if(wallName == "L_L_L_W" && params.leantoAlignmentLeft == "3" && params.add_left_back_lean_porch == true && params.add_left_front_lean_porch == false|| wallName == "R_L_R_W" && params.leantoAlignmentRight == "3" && params.add_right_back_lean_porch == true && params.add_right_front_lean_porch == false){
                //     //     preDistance = pos+(dimention/2)-(compWidth/2) + (params.leanB_p_w)
                //     // }


                //     if(wallName == "F_L_F_W" && (params.leantoAlignmentFront == "3" || params.leantoAlignmentFront == "1") && params.add_left_front_lean_porch == false|| wallName == "R_L_R_W" && (params.leantoAlignmentRight == "2" || params.leantoAlignmentRight == "1") && params.add_right_back_lean_porch == false || wallName == "R_L_L_S_W" && params.leantoAlignmentRight == "2" || wallName == "R_L_R_S_W" && params.leantoAlignmentRight == "2" || wallName == "F_L_F_S_W" && params.leantoAlignmentFront == "3" || wallName == "F_L_B_S_W" && params.leantoAlignmentFront == "3"){
                //         preDistance = pos+(dimention/2)-(compWidth/2)-(dimention-leanDepth1)
                        
                //     }
                //     if(wallName == "B_L_S_W" && (params.leantoAlignmentBack == "2" || params.leantoAlignmentBack == "1") && params.add_left_back_lean_porch == false|| wallName == "L_L_L_W" && (params.leantoAlignmentLeft == "2" || params.leantoAlignmentLeft == "1") && params.add_left_back_lean_porch == false || wallName == "L_L_L_S_W" && params.leantoAlignmentLeft == "2" || wallName == "L_L_R_S_W" && params.leantoAlignmentLeft == "2" || wallName == "B_L_F_S_W" && params.leantoAlignmentBack == "2" || wallName == "B_L_B_S_W" && params.leantoAlignmentBack == "2"){
                //         preDistance = pos+(dimention/2)-(compWidth/2)-(dimention-leanDepth2)
                        
                //     }
                //     if(wallName == "L_L_F_W" || wallName == "L_L_B_W" || wallName == "L_L_F_S_W"){
                //         preDistance = pos + (dimention/2) - (compWidth/2) + params.lean_p_w
                //     }
                //     if(wallName == "R_L_F_W" || wallName == "R_L_B_W" || wallName == "F_L_L_W" || wallName == "F_L_R_W" || wallName == "R_L_F_S_W" || wallName == "F_L_R_S_W"){
                //         preDistance = pos - (dimention/2) - (compWidth/2)
                        
                //     }    
                //     if(wallName == "B_L_F_W" || wallName == "B_L_B_W" || wallName == "B_L_L_S_W"){
                //         preDistance = pos + (dimention/2) - (compWidth/2) + params.leanB_p_w
                //     }
                //     if(wallName == "c_b_r_s_f_w" || wallName == "c_b_r_s_b_w"){
                //         preDistance = pos+(dimention/2)-(compWidth/2)-(dimention-params.cB_addStorage_right)
                //     }
                //     if(wallName == "c_b_l_s_w" || wallName == "c_b_r_s_w"){
                //         preDistance = (dimention/-2) - (pos-(compWidth/2))
                //     }
                //     if(wallName == "c_b_f_s_l_w" || wallName == "c_b_f_s_r_w"){
                //         preDistance = (pos-(compWidth/2))-((dimention/2)-params.cB_addStorage_front)
                //     }
                //     if(wallName == "L_L_L_S_W" && params.leantoAlignmentLeft == "1" || wallName == "L_L_R_S_W" && params.leantoAlignmentLeft == "1"){
                //         preDistance = (params.lean_p_d/-2) - (pos-(compWidth/2))
                //     }
                //     if(wallName == "R_L_L_S_W" && params.leantoAlignmentRight == "1" || wallName == "R_L_R_S_W" && params.leantoAlignmentRight == "1"){
                //         preDistance = (params.leanR_p_d/-2) - (pos-(compWidth/2))
                //     }
                //     if(wallName == "F_L_F_S_W" && params.leantoAlignmentFront == "1" || wallName == "F_L_B_S_W" && params.leantoAlignmentFront == "1"){
                //         preDistance = (params.leanF_p_d/-2) - (pos-(compWidth/2))
                //     }
                //     if(wallName == "B_L_F_S_W" && params.leantoAlignmentBack == "1" || wallName == "B_L_B_S_W" && params.leantoAlignmentBack == "1"){
                //         preDistance = (params.leanB_p_d/-2) - (pos-(compWidth/2))
                //     }
                //     // console.log(preDistance , (wallWidth/-2) , (pos-(compWidth/2)),"preDistance");
                // }

                if(posVal[i] == pos && const_var.entry_points[j].component_wall_name == wallName){
                  rightDoor = pos+(compWidth/2)
                }
    
                if(posVal[i+1] == pos && const_var.entry_points[j].component_wall_name == wallName){
                 leftDoor = pos-(compWidth/2)
                }
                if(posVal[i+1] != undefined){
                  distance = rightDoor - leftDoor
                }

                // console.log(preDistance ,"== 2nd", pos);
                if(posVal[posVal.length - 1] == pos && const_var.entry_points[j].component_wall_name == wallName){
                   lastDistance = (wallWidth/2) - (pos+(compWidth/2))
                   lastDoor = (pos+(compWidth/2))
                   if(wallName == "F_L_F_W" && (params.leantoAlignmentFront == "2" || params.leantoAlignmentFront == "1") && params.add_right_front_lean_porch == false || wallName == "R_L_R_W" && (params.leantoAlignmentRight == "3" || params.leantoAlignmentRight == "1") && params.add_right_front_lean_porch == false){
                       lastDistance = (pos-(dimention/2))+(dimention-leanDepth1)+(compWidth/2)
                   }
                   if(wallName == "B_L_S_W" && (params.leantoAlignmentBack == "3" || params.leantoAlignmentBack == "1") && params.add_right_back_lean_porch == false|| wallName == "L_L_L_W" && params.leantoAlignmentLeft == "3" && params.add_left_front_lean_porch == false){
                       lastDistance = (pos-(dimention/2))+(dimention-leanDepth2)+(compWidth/2)
                   }
                   if(wallName == "F_L_F_W" && params.leantoAlignmentFront == "3" && params.add_right_front_lean_porch == false|| wallName == "B_L_S_W" && params.leantoAlignmentBack == "2" && params.add_right_back_lean_porch == false|| wallName == "L_L_L_W" && params.leantoAlignmentLeft == "2" && params.add_left_front_lean_porch == false|| wallName == "R_L_R_W" && (params.leantoAlignmentRight == "2" || params.leantoAlignmentRight == "1") && params.add_right_front_lean_porch == false || wallName == "c_b_r_s_f_w" || wallName == "c_b_r_s_b_w"){
                       lastDistance = (-dimention/2)+pos+(compWidth/2)
                   }
   
   
                   if(wallName == "F_L_F_W" && (params.leantoAlignmentFront == "3" || params.leantoAlignmentFront == "1") && params.add_left_front_lean_porch == false && params.add_right_front_lean_porch == true|| wallName == "B_L_S_W" && (params.leantoAlignmentBack == "2" || params.leantoAlignmentBack == "1") && params.add_left_back_lean_porch == false && params.add_right_back_lean_porch == true || wallName == "L_L_L_W" && (params.leantoAlignmentLeft == "2" || params.leantoAlignmentLeft == "1") && params.add_left_back_lean_porch == false && params.add_left_front_lean_porch == true|| wallName == "R_L_R_W" && (params.leantoAlignmentRight == "2" || params.leantoAlignmentRight == "1") && params.add_right_back_lean_porch == false && params.add_right_front_lean_porch == true){
                       lastDistance = (-dimention/2)+pos+(compWidth/2)-leanWidth2
                   }
                   // if(wallName == "L_L_L_W" && params.leantoAlignmentLeft == "2" && params.add_left_back_lean_porch == false && params.add_left_front_lean_porch == true|| wallName == "R_L_R_W" && params.leantoAlignmentRight == "2" && params.add_right_back_lean_porch == false && params.add_right_front_lean_porch == true){
                   //     lastDistance = (-dimention/2)+pos+(compWidth/2)-params.leanF_p_w
                   // }
   
   
                   if(wallName == "L_L_F_W" || wallName == "L_L_B_W" || wallName == "B_L_F_W" || wallName == "B_L_B_W" || wallName == "L_L_F_S_W" || wallName == "B_L_L_S_W"){
                   lastDistance = pos + (dimention/2) + (compWidth/2)
                   }
                   if(wallName == "R_L_F_W" || wallName == "R_L_B_W"){
                       lastDistance = pos - (dimention/2) + (compWidth/2) - params.leanR_p_w
                   }
                   if(wallName == "F_L_L_W" || wallName == "F_L_R_W" || wallName == "F_L_R_S_W"){
                       lastDistance = pos - (dimention/2) + (compWidth/2) - params.leanF_p_w
                   }
                   if(wallName == "c_b_l_s_f_w" || wallName == "c_b_l_s_b_w"){
                       lastDistance = (pos-(dimention/2))+(dimention-Number(params.cB_addStorage_left))+(compWidth/2)
                   }
                   if(wallName == "c_b_l_s_w" || wallName == "c_b_r_s_w"){
                       lastDistance = (pos-(dimention/2))+(dimention-params.p_u_t)+(compWidth/2)
                    }
                    if(wallName == "c_b_f_s_l_w" || wallName == "c_b_f_s_r_w"){
                        lastDistance = (dimention/2) - (pos+compWidth/2)
                   }
   
                   if(wallName == "L_L_L_S_W" && params.leantoAlignmentLeft == "1" || wallName == "L_L_R_S_W" && params.leantoAlignmentLeft == "1"){
                       lastDistance = (pos-(params.lean_p_d/2))+(params.lean_p_d-params.add_storage)+(compWidth/2)
                   }
                   if(wallName == "L_L_L_S_W" && params.leantoAlignmentLeft == "2" || wallName == "L_L_R_S_W" && params.leantoAlignmentLeft == "2"){
                       lastDistance = (-dimention/2)+pos+(compWidth/2)+(params.lean_p_d-params.add_storage)
                   }
                   if(wallName == "L_L_L_S_W" && params.leantoAlignmentLeft == "3" || wallName == "L_L_R_S_W" && params.leantoAlignmentLeft == "3"){
                       lastDistance = (pos-(dimention/2))+(dimention-params.add_storage)+(compWidth/2)
                   }
   
                   if(wallName == "F_L_F_S_W" && params.leantoAlignmentFront == "1" || wallName == "F_L_B_S_W" && params.leantoAlignmentFront == "1"){
                       lastDistance = (pos-(params.leanF_p_d/2))+(params.leanF_p_d-params.add_storage_front)+(compWidth/2)
                   }
                   if(wallName == "F_L_F_S_W" && params.leantoAlignmentFront == "3" || wallName == "F_L_B_S_W" && params.leantoAlignmentFront == "3"){
                       lastDistance = (-dimention/2)+pos+(compWidth/2)+(params.leanF_p_d-params.add_storage_front)
                   }
                   if(wallName == "F_L_F_S_W" && params.leantoAlignmentFront == "2" || wallName == "F_L_B_S_W" && params.leantoAlignmentFront == "2"){
                       lastDistance = (pos-(dimention/2))+(dimention-params.add_storage_front)+(compWidth/2)
                   }
   
                   if(wallName == "B_L_F_S_W" && params.leantoAlignmentBack == "1" || wallName == "B_L_B_S_W" && params.leantoAlignmentBack == "1"){
                       lastDistance = (pos-(params.leanB_p_d/2))+(params.leanB_p_d-params.add_storage_back)+(compWidth/2)
                   }
                   if(wallName == "B_L_F_S_W" && params.leantoAlignmentBack == "2" || wallName == "B_L_B_S_W" && params.leantoAlignmentBack == "2"){
                       lastDistance = (-dimention/2)+pos+(compWidth/2)+(params.leanB_p_d-params.add_storage_back)
                   }
                   if(wallName == "B_L_F_S_W" && params.leantoAlignmentBack == "3" || wallName == "B_L_B_S_W" && params.leantoAlignmentBack == "3"){
                       lastDistance = (pos-(dimention/2))+(dimention-params.add_storage_back)+(compWidth/2)
                   }
   
                   if(wallName == "R_L_L_S_W" && params.leantoAlignmentRight == "1" || wallName == "R_L_R_S_W" && params.leantoAlignmentRight == "1"){
                       lastDistance = (pos-(params.leanR_p_d/2))+(params.leanR_p_d-params.add_storage_right)+(compWidth/2)
                   }
                   if(wallName == "R_L_L_S_W" && params.leantoAlignmentRight == "2" || wallName == "R_L_R_S_W" && params.leantoAlignmentRight == "2"){
                       lastDistance = (-dimention/2)+pos+(compWidth/2)+(params.leanR_p_d-params.add_storage_right)
                   }
                   if(wallName == "R_L_L_S_W" && params.leantoAlignmentRight == "3" || wallName == "R_L_R_S_W" && params.leantoAlignmentRight == "3"){
                       lastDistance = (pos-(dimention/2))+(dimention-params.add_storage_right)+(compWidth/2)
                   }
                   
   
                   
                   
                }
            }
            
            // console.log(Math.abs(preDistance),">",wallComponent.width + 2,Math.abs(distance),">",wallComponent.width + 2,Math.abs(lastDistance),">",wallComponent.width + 2);

            // if(wallComponent.userData.compType != "window" && wallComponent.userData.compType !=  "window_frameout"){
               if(Math.abs(preDistance)>wallComponent.width + 2){
                 if(wallComponent.rotation.y == 3.141592653589793 || wallComponent.rotation.y == 0){
                     wallComponent.position.z = preDoor - wallComponent.width/2 - 1;
                 }else{
                     wallComponent.position.x = preDoor - wallComponent.width/2 - 1;
                 }
                   break;
               }

               if(Math.abs(distance)>wallComponent.width + 2){
                   if(wallComponent.rotation.y == 3.141592653589793 || wallComponent.rotation.y == 0){
                   wallComponent.position.z = rightDoor + wallComponent.width/2 + 1;
                   }else{
                       wallComponent.position.x = rightDoor + wallComponent.width/2 + 1;
                   }
                   break;
               }

               if(Math.abs(lastDistance)>wallComponent.width + 2){
                   if(wallComponent.rotation.y == 3.141592653589793 || wallComponent.rotation.y == 0){
                   wallComponent.position.z = lastDoor + wallComponent.width/2 + 1;
                   }else{
                       wallComponent.position.x = lastDoor + wallComponent.width/2 + 1;
                   }
                   break;
               }
            // }


            }

/* 
  "preDistance" refers to the distance between the door and the left end of the wall, 
  assume that a door is being added to the right wall. In this scenario, the value on the left-hand side represents the preDistance. 
  And viceversa if we are adding door on the left side wall

  "lastDistance" refers to the distance between the door and the right end of the wall, 
  assume that a door is being added to the right wall. In this scenario, the value on the right-hand side represents the lastDistance. 
  And vice versa if we are adding door on the left side wall

 */            
            // if (entry_position != undefined && entry_position != '' && is_edit==undefined) {
            //     if (compType == "window" || compType == "window_frameout") {
            //         wallComponent.position.set(entry_position.x, entry_position.y, entry_position.z);
            //     }
            // }
        }

        // // lean-to's default hight should be grater then door hight
        // let wallHeight = const_var.scene.getObjectByName(wallName)?Math.trunc(const_var.scene.getObjectByName(wallName).scale.y): 100;

        // if (const_var.scene.getObjectByName(wallName + 1)) {
        //     let wallHeight1 = Math.trunc(const_var.scene.getObjectByName(wallName + 1).scale.y);
        //     if (wallHeight !== wallHeight1) wallHeight +=wallHeight1;            
        // }

        let spaceAvailableForComp = false;
        let spaceAvailableForComp1;
        if((Math.abs(preDistance)<=wallComponent.width + 2 && (Math.abs(distance)<=wallComponent.width + 2 || distance == undefined) && Math.abs(lastDistance)<=wallComponent.width + 2)){
            let wobj = getWallD(wallComponent.userData.wallName);
            if (wobj && wobj.wall) {
                let width = wobj.width;
                
                let sum = 1;
                const_var.newDoorsArray.forEach((child) => {
                    if (child.userData.wallName === wallName) {
                        sum += child.width + 1;    
                    }
                })

                if (width - sum >= wallComponent.width + 1) {
                    params.activeWall = wallName;
                    spaceAvailableForComp = true;
                }      
            }    
        }  

        wallComponent.traverse((c) => {
            if(c.material) c.material.format = 1023;
        })

        ///////////////////////window placement

        // const wall = const_var.scene.getObjectByName(wallName);
        // if (wall && (compType == "window" || compType == "window_frameout")){
        //     const {x, y} = wall.scale;
        //     const comps = const_var.entry_points.filter(e => e.component_wall_name === wallName).sort((a, b) => a.entry_position.x - b.entry_position.x);
        //     const arrs = {};
        //     // let dHeight = doorHeight;
        //     const uspace = 0.5
        //     for(let i = Math.round(y); (i - (doorHeight + uspace)) > 0; i -=(doorHeight + uspace) ) {
        //         arrs[`${i}-${i - doorHeight - uspace}`] = [];
        //     }
        //     // while((y - doorHeight) > 0 ) arrs[`${y}-${}`]
        //     comps.map((e) => {
        //         let h = e.entry_dimension_height;
        //         if (e.entry_type === "window" || e.entry_type === "window_frameout") {
        //             h = e.entry_size.height/12 ;
        //         }

        //         for(var key in arrs) {
        //             let [a, b] = key.split("-");
        //             if (b <= (e.entry_position.y + h/2) & a >= (e.entry_position.y - h/2)) {
        //                 arrs[key].push(e);
        //             }
        //         }

        //     });
            
        //     // let first = -Math.round(x/2);
        //     // let fourth = Math.round(x/2);
        //     // let predistance = 0;
        //     // let postdistance = 0;
        //     (() => {
        //         for(let key in arrs) {
        //             if (arrs[key].length == 0) {
        //                 // wallComponent.position.x = 0;
        //                 wallComponent.position.y = key.split("-").reduce((a, b) => Number(a)+ Number(b))/2;
        //                 spaceAvailableForComp1 = true;
        //                 return;
                        
        //             } else {
        //                 for(let i = 0; i < arrs[key].length; i++) {

                        
        //                     const comp1 = arrs[key][i - 1];
        //                     const comp2 = arrs[key][i];
        //                     const comp3 = arrs[key][i + 1]

        //                     const first = comp1 ? (comp1.entry_position.x + comp1.entry_dimension_width/2): -Math.round(x/2);
        //                     const second = comp2 ? comp2.entry_position.x - comp2.entry_dimension_width/2: Math.round(x/2);
        //                     const third = comp2 ? comp2.entry_position.x + comp2.entry_dimension_width/2: Math.round(x/2);
        //                     const fourth = comp3 ? (comp3.entry_position.x - comp3.entry_dimension_width/2): Math.round(x/2);


        //                     const predistance = second - first;
        //                     const postdistance = fourth - third;

        //                     if (predistance >= doorWidth || postdistance >= doorWidth) {
        //                         if(predistance > doorWidth) wallComponent.position.x = second - doorWidth/2;
        //                         if(postdistance > doorWidth) wallComponent.position.x = third + doorWidth/2;
        //                         wallComponent.position.y = key.split("-").reduce((a, b) => Number(a)+ Number(b))/2;
        //                         spaceAvailableForComp1 = true;
        //                         return;
        //                     }

        //                 }
        //             }
        //         }
        //     })()
        // }



        // let hcomp = [];
        let wallname = wallName;

        switch(wallName) {
            case "c_b_r_s_f_w":
            case "c_b_l_s_f_w":
                if (params.p_f_w == "Close") wallname = "c_b_f_w";
                break;
            
            case "c_b_l_s_b_w":
            case "c_b_r_s_b_w":
                if (params.p_b_w == "Close") wallname = "c_b_b_w";
                break;

            case "c_b_l_s_w":
                if (params.p_l_w == "Close") wallname = "c_b_l_w";
                break;
            case "c_b_r_s_w":
                if (params.p_r_w == "Close") {
                    if(!params.singleSlope) wallname = "c_b_r_w"
                    else  wallname = "F_S_L_R_W";
                }
                break;

            case "L_L_R_S_W":
                // if (params.p_l_w == "Close") wallname = "c_b_l_w";
                break;
            case "L_L_L_S_W":
                if (params.p_b_c_b_l == "Close") wallname = "L_L_L_W";
                break;

            case "R_L_L_S_W":
                // if (params.p_r_w == "Close") wallname = "c_b_r_w";
                break;
            case "R_L_R_S_W":
                if (params.p_b_c_b_r == "Close") wallname = "R_L_R_W";
                break;

            case "F_L_F_S_W":
                if (params.p_b_c_b_f_l == "Close") wallname = "F_L_F_W";
                break;
            case "B_L_F_S_W":
                if (params.p_b_c_b_b_l == "Close") wallname = "B_L_S_W";
                break;  

            case "L_S_F_2W_VT":
                if (params.p_f_w == "Close") {
                    wallname = "c_b_f_w";
                } else {
                    wallname = "c_b_l_s_f_w";
                }
                break;

            case "L_S_B_2W_VT":
                if (params.p_b_w == "Close") {
                    wallname = "c_b_b_w";
                } else {
                    wallname = "c_b_l_s_b_w";
                }
                break;

            case "R_S_F_2W_VT":
                if (params.p_f_w == "Close") {
                    wallname = "c_b_f_w";
                } else {
                    wallname = "c_b_r_s_f_w";
                }
                break;

            case "R_S_B_2W_VT":
                if (params.p_b_w == "Close") {
                    wallname = "c_b_b_w";
                } else {
                    wallname = "c_b_r_s_b_w";
                }
                break;                                
        }  

        let autoPlacement = true;

        if( is_edit && const_var.editAPIDataByResponse.data!=undefined && const_var.editAPIDataByResponse.data.created_at<="2023-11-06"){
            autoPlacement = false
        }
        
  
        if(autoPlacement) {      //(compType == "window" || compType == "window_frameout") && 

            let d = "x";
            let c = 0;     
            let w = 0;
            let h = 0;   
            let comps = [];  
            if (wallComponent.rotation.y == Math.PI || wallComponent.rotation.y == 0) d = "z";
            const wall = const_var.scene.getObjectByName(wallname);  
            const wall1 = const_var.scene.getObjectByName(wallname + 1);  

            let wallname2 = "";
            switch(wallname) {
                case "c_b_l_w": wallname2 = "L_L_R_S_W"; break;
                case "L_L_R_S_W": wallname2 = "c_b_l_w"; break;

                case "c_b_r_w": wallname2 = "R_L_L_S_W"; break;
                case "R_L_L_S_W": wallname2 = "c_b_r_w"; break;

            }
            
            if (wall) {
                comps = const_var.newDoorsArray.filter((e) => e.userData.wallName === wallname || (e.userData.wallName === wallname2));
                w = Math.round(wall.scale.x);
                h = Math.round(wall.scale.y);
                if (wall1) {
                    const y = Math.round(wall1.scale.y);
                    if ( h !== y) {
                        h += Math.round(wall1.scale.y);
                    } else {
                        let wallH = getBuildingSectionHeight(wallComponent);    
                        if ((wallH / 2 + 0.5) > h) {
                            h += Math.round(wall1.scale.y);
                        }               
                    }
                }
                c = wall.parent.localToWorld(wall.position.clone())[d];
            } else if ((wallname == "c_b_l_s_b_w" || wallname == "c_b_l_s_f_w") && params.p_v_w && params.cB_addStorage_check_left) {
                comps = const_var.newDoorsArray.filter((e) => e.userData.wallName === (wallname =="c_b_l_s_b_w"?"L_S_B_2W_VT":"L_S_F_2W_VT"));
                w = Number(params.cB_addStorage_left);
                h = params.p_h;
                if (wall1 && h !== Math.round(wall1.scale.y)) h += Math.round(wall1.scale.y);
                c = -params.p_w/2 + w/2;
            } else if ((wallname == "c_b_r_s_b_w" || wallname == "c_b_r_s_f_w") && params.p_v_w && params.cB_addStorage_check_right) {
                comps = const_var.newDoorsArray.filter((e) => e.userData.wallName === (wallname =="c_b_r_s_b_w"?"R_S_B_2W_VT":"R_S_F_2W_VT"));
                w = Number(params.cB_addStorage_right);
                h = params.p_h;
                if (wall1 && h !== Math.round(wall1.scale.y)) h += Math.round(wall1.scale.y);
                c = params.p_w/2 - w/2;
            }
   

            if (w > 0 && h > 0){
                let yStart = doorHeight/2 + 3;
                let yEnd = (compType == "window" || compType == "window_frameout") ? (h - doorHeight/2 - 1): yStart = ((doorHeight - 0.08)/2);
                let sign = true;

                if (h < 7) {
                    yEnd = doorHeight/2 + 1;
                    yStart = (compType == "window" || compType == "window_frameout") ? (h - doorHeight/2 - 1): yEnd = ((doorHeight - 0.08)/2);
                    sign = false;
                }

                // const xStart = Number((-w/2 + 1 + doorWidth/2 + c).toFixed(2));
                // const xEnd = Number((w/2 - 1 - doorWidth/2 + c).toFixed(2));


                const xStart = Number((c).toFixed(2));
                const xEnd1 = Number((w/2 - 1 - doorWidth/2 + c).toFixed(2));
                const xEnd2 = Number((-w/2 + 1 + doorWidth/2 + c).toFixed(2));
                
                spaceAvailableForComp1 = false;
                
                for(let k = yStart; sign ? (k <= yEnd): (k >= yEnd); sign ? (k=k+0.5): (k=k-0.5)) {
                    for(let i = xStart; i <= xEnd1; i+=0.5) {                        
                        wallComponent.position[d] = i;
                        wallComponent.position.y = k;
                        if (entry_position && changeComponentSize === true) {
                            wallComponent.position.copy(entry_position);
                            if (wallComponent.userData.compType != "window_frameout" && wallComponent.userData.compType != "window") {
                                wallComponent.position.y =(doorHeight - 0.08)/2;
                            }
                        }

                        if(is_edit != undefined && entry_position) {
                            wallComponent.position.copy(entry_position);
                            if (wallComponent.userData.compType != "window_frameout" && wallComponent.userData.compType != "window") {
                                wallComponent.position.y =(doorHeight - 0.08)/2;
                            }
                        }
                        wallComponent.updateMatrix();
                        wallComponent.updateMatrixWorld();
                        let box1M = wallComponent.getObjectByName("Doors") || wallComponent.getObjectByName("doors") || wallComponent.getObjectByName("door1"); 
                        if (box1M) {
                            box1M.updateMatrix();
                            box1M.updateMatrixWorld();
                            let box1 = new THREE.Box3().setFromObject(box1M);
                            let intersecting = false;
                            for(let j = 0; j < comps.length; j++) {  
                                const child = comps[j];  
                                let box2M = child.getObjectByName("Doors") || child.getObjectByName("doors") || child.getObjectByName("door1"); 
                                if (box2M) {
                                    box2M.updateMatrix();
                                    box2M.updateMatrixWorld();
                                    let box2 = new THREE.Box3().setFromObject(box2M);    
                                    if (((box1.max.x + 1) > box2.min.x) && (box2.max.x > (box1.min.x - 1)) && 
                                        ((box1.max.y + 1) > box2.min.y) && (box2.max.y > (box1.min.y - 1)) &&
                                        ((box1.max.z + 1) > box2.min.z) && (box2.max.z > (box1.min.z - 1))){
                                            intersecting = true;
                                            break;
                                    }      
                                }
                            }

                            if(changeComponentSize === true && intersecting == true) {
                                changeComponentSize = false;
                            }

                            if (intersecting == false) {
                                spaceAvailableForComp1 = true;
                                break;
                            }
                        }
                    }

                    if (spaceAvailableForComp1) break;

                    for(let i = xStart; i >= xEnd2; i -=0.5) {                        
                        wallComponent.position[d] = i;
                        wallComponent.position.y = k;

                        if(is_edit != undefined && entry_position) {
                            wallComponent.position.copy(entry_position);
                            if (wallComponent.userData.compType != "window_frameout" && wallComponent.userData.compType != "window") {
                                wallComponent.position.y =(doorHeight - 0.08)/2;
                            }
                        }
                        wallComponent.updateMatrix();
                        wallComponent.updateMatrixWorld();
                        let box1M = wallComponent.getObjectByName("Doors") || wallComponent.getObjectByName("doors") || wallComponent.getObjectByName("door1"); 
                        if (box1M) {
                            box1M.updateMatrix();
                            box1M.updateMatrixWorld();
                            let box1 = new THREE.Box3().setFromObject(box1M);
                            let intersecting = false;
                            for(let j = 0; j < comps.length; j++) {  
                                const child = comps[j];  
                                let box2M = child.getObjectByName("Doors") || child.getObjectByName("doors") || child.getObjectByName("door1"); 
                                if (box2M) {
                                    box2M.updateMatrix();
                                    box2M.updateMatrixWorld();
                                    let box2 = new THREE.Box3().setFromObject(box2M);    
                                    if (((box1.max.x + 1) > box2.min.x) && (box2.max.x > (box1.min.x - 1)) && 
                                        ((box1.max.y + 1) > box2.min.y) && (box2.max.y > (box1.min.y - 1)) &&
                                        ((box1.max.z + 1) > box2.min.z) && (box2.max.z > (box1.min.z - 1))){
                                            intersecting = true;
                                            break;
                                    }      
                                }
                            }

                            if (intersecting == false) {
                                spaceAvailableForComp1 = true;
                                break;
                            }
                        }
                    }

                    if (spaceAvailableForComp1) break;
                }

                
                let rearrangeComp = true;

                if ( !is_edit && rearrangeComp && !spaceAvailableForComp1 && (compType != 'window' && compType != 'window_frameout')) {
                    const doors = comps.filter((child) => child.userData.compType != 'window' && child.userData.compType != 'window_frameout');
                    const rComponents = comps.filter((child) => child.userData.compType == 'window' || child.userData.compType == 'window_frameout');
                    const savedPos = {};
                    wallComponent.position[d] = w/2 - 1 - doorWidth/2 + c;
                    doors.push(wallComponent);
                    doors.sort((a, b) => a.position[d] - b.position[d]);
                    doors.map((child) => savedPos[child.userData.uniqueId] = child.position.clone());
                    const xEnd2 = Number((w/2 - 1 + c).toFixed(2));
                    const xEnd1 = Number((-w/2 + 1 + c).toFixed(2));

                    let rearrangeNotPos = false;
                    
                    doors.map((door) => {
                        for(let i = xEnd1; i <= xEnd2; i+=0.5) {                        
                            door.position[d] = i;
                            // door.position.y = k;
                            // if (entry_position && changeComponentSize === true) {
                            //     door.position.copy(entry_position);
                            //     if (door.userData.compType != "window_frameout" && door.userData.compType != "window") {
                            //         door.position.y =(doorHeight - 0.08)/2;
                            //     }
                            // }

                            // if(is_edit != undefined && entry_position) {
                            //     door.position.copy(entry_position);
                            //     if (door.userData.compType != "window_frameout" && door.userData.compType != "window") {
                            //         door.position.y =(doorHeight - 0.08)/2;
                            //     }
                            // }

                            if(i < Number((-w/2 + 1 + door.width/2 + c).toFixed(2))) continue;
                            if(i > Number((w/2 - 1 - door.width/2 + c).toFixed(2))) break;


                            door.updateMatrix();
                            door.updateMatrixWorld();
                            let box1M = door.getObjectByName("Doors") || door.getObjectByName("doors") || door.getObjectByName("door1"); 
                            if (box1M) {
                                box1M.updateMatrix();
                                box1M.updateMatrixWorld();
                                let box1 = new THREE.Box3().setFromObject(box1M);
                                let intersecting = false;
                                for(let j = 0; j < rComponents.length; j++) {  
                                    const child = rComponents[j];  
                                    let box2M = child.getObjectByName("Doors") || child.getObjectByName("doors") || child.getObjectByName("door1"); 
                                    if (box2M) {
                                        box2M.updateMatrix();
                                        box2M.updateMatrixWorld();
                                        let box2 = new THREE.Box3().setFromObject(box2M);    
                                        if (((box1.max.x + 1) > box2.min.x) && (box2.max.x > (box1.min.x - 1)) && 
                                            ((box1.max.y + 1) > box2.min.y) && (box2.max.y > (box1.min.y - 1)) &&
                                            ((box1.max.z + 1) > box2.min.z) && (box2.max.z > (box1.min.z - 1))){
                                                intersecting = true;
                                        }    
                                    }
                                }

                                if (!intersecting) {
                                    rComponents.push(door);
                                    return;
                                }

                           

                                // if(changeComponentSize === true && intersecting == true) {
                                //     changeComponentSize = false;
                                // }

                                // if (intersecting == false) {
                                //     spaceAvailableForComp1 = true;
                                //     break;
                                // }
                            }
                        }

                        rearrangeNotPos = true;
                    });

                    if (rearrangeNotPos) {
                        doors.map((child) => child.position.copy(savedPos[child.userData.uniqueId]));
                    } else {
                        spaceAvailableForComp1 = true;
                        Arrows.centerVerticalDoorArrow('', '','','');
                        Arrows.centerVerticalDoorArrowB('', '','','');
                    }
                }
            }
        }

    


        ///////////////////////////////



        ///////////////////////////////

        let wallCheckForEnd = false, wallCheckForSide = false;
        if(const_var.entry_wall_location[wallName].includes('end')==true  && const_var.entry_wall_location[wallName] != "rfend" && const_var.entry_wall_location[wallName] != "lfend" )
        {
            wallCheckForEnd = true;
        }
        if(const_var.entry_wall_location[wallName].includes('side')==true  || const_var.entry_wall_location[wallName] == "rfend" || const_var.entry_wall_location[wallName] == "lfend")
        {
            wallCheckForSide = true;
        }
        
        // if(/*doorHeight > wallHeight ||*/ (!spaceAvailableForComp && Math.abs(preDistance)<=wallComponent.width + 2 && (Math.abs(distance)<=wallComponent.width + 2 || distance == undefined) && Math.abs(lastDistance)<=wallComponent.width + 2)){        
            if(spaceAvailableForComp1 === false){

            wallComponent.name = null;
            wallComponent.size = null;
            wallComponent.rotation.y = null;
            wallComponent.actual_val = null;
            wallComponent.uniqueId = null;
            wallComponent.scale.z = null;
            wallComponent.DoorObj = null;
            wallComponent.width = null;
            wallComponent.height = null;
            wallComponent.userData.compType = null;
            wallComponent.userData.wallName =null;
            wallComponent.userData.uniqueId = null;
            wallComponent.userData.compName = null;
            wallComponent.position.set(0, 0, 0);
            wallComponent.userData.editIconPos = null;



            const_var.checkDoorIsadded = false;
            if(is_edit == undefined) {
                const_var.isShowAlert = true;
                const_var.alertUsedFor = "noSpaceForComponent";
            } else {
                const_var.isShowAlert = true;
                const_var.alertUsedFor = "noSpaceForComponentDuringLoading";
                const_var.sum++;
            }

            if (const_var.removed_door) {
             const_var.removed_door_entry_point && (const_var.entry_points.push(const_var.removed_door_entry_point));
             const_var.newDoorsArray.push(const_var.removed_door);
             const_var.scene.add(const_var.removed_door);
             cuBuilding.DoorCSG();
            }

            delete const_var.removed_door_entry_point;
            delete const_var.removed_door;
            
        }else{
                const_var.scene.add(wallComponent);
            

        
        if (const_var.sum != undefined) {
            if (((wallComponent.name.includes("door" + const_var.sum) == true)||(wallComponent.name.includes("overhead_door_door") == true && const_var.sum == wallComponent.uniqueId)) && parentkey == "Garage") {
                if (wallComponent.children[1] != undefined) {
                    // console.log(params.g_d_c,wallComponent,"params.g_d_c");
                    if(wallComponent.name.includes("overhead_door_door")){
                        wallComponent.children.forEach((child)=>{
                            if(child.name.includes("door")) child.material.color.setHex(params.g_d_c);
                        });
                    }else{
                        wallComponent.children[1].material.color.setHex(params.g_d_c);
                    }
                    if (params.g_d_c == "0xffffff") {
                        // wallComponent.children[1].material.color.b = 1.1
                        // wallComponent.children[1].material.metalness = -0.2
                        // if (wallComponent.children.length > 0 && wallComponent.children[1].material != undefined && wallComponent.children[1].material.name != undefined && wallComponent.children[1].material.name == "Material.004") {
                        //     wallComponent.children[1].material.color.b = 0.9;
                        //     wallComponent.children[1].material.color.g = 0.85;
                        //     wallComponent.children[1].material.color.r = 0.85;
                        // }
                    }
                }

            }

        }
       

        // console.log(wallComponent,"wallComponent.children[1]");
        if(wallComponent.getObjectByName("trim") != undefined){
            wallComponent.getObjectByName("trim").name = "trims"
        }


        if (is_edit != undefined) {
            let currentObjData = componentsize;
            let doorAddOnsObj = {};
            let doornewType = "";
            if (currentObjData.child_array_key == "overhead_door_door") {
                Object.keys(currentObjData).map((e) => {
                    if (e.includes("add_on_options"))  {
                        doorAddOnsObj[e] = currentObjData[e];
                    }
                })
                
            }

            
            
            if (currentObjData.entry_motor) {
                const motors = currentObjData.entry_size.door_add_ons.filter((e) => e.door == "motor");
                if(motors.length > 0) {
                    const motor = motors[0].category.filter((e) => e.category == currentObjData.entry_motor_name);
                    if (motor.length == 0) {
                        if(motors[0].category.length > 0) {
                            currentObjData.entry_motor_name = motors[0].category[0].category;
                            currentObjData.entry_motor_price = motors[0].category[0].cost;
                        }else {
                            currentObjData.entry_motor = false;
                        }
                    }
                } else {
                    currentObjData.entry_motor = false;
                }
            }
            if(currentObjData.child_array_key=="overhead_door_door")
            {
                const wOPtion = currentObjData.entry_size.door_add_ons.filter((e) => e.door == 'window_option');
                const doorName = compName.replace("overhead_door_door_", '');
                doornewType = wOPtion[0].category.find((item) => item.category.split(' ').join('_').toLowerCase() == doorName);
                if(doornewType!='')
                {
                    doorAddOnsObj.entry_overhead_type_name = (doornewType!=undefined)?doornewType.category:'';
                    doorAddOnsObj.entry_overhead_type_price = (doornewType!=undefined)?doornewType.cost:'';
                }
            }
            
            if (parentkey == "Garage" || parentkey == "Garage_Frameout") {
                if(wallComponent.DoorObj!=undefined && wallComponent.DoorObj!=null)
                {
                    if(wallComponent.DoorObj.installation_is_end_wall==undefined)
                    {
                        wallComponent.DoorObj.installation_is_end_wall = currentObjData.installation_is_end_wall!=undefined && wallCheckForEnd==true?currentObjData.installation_is_end_wall:'';
                    }
                    if(wallComponent.DoorObj.installation_is_side_wall==undefined)
                    {
                        wallComponent.DoorObj.installation_is_side_wall = currentObjData.installation_is_side_wall!=undefined && wallCheckForSide==true?currentObjData.installation_is_side_wall:'';
                    }
                }
                kk++;
                calQuantity = kk;
                const_var.entry_points.push(Object.assign({ "entry_motor_name": currentObjData.entry_motor_name, "entry_motor": currentObjData.entry_motor, "entry_is_motor": currentObjData.entry_is_motor, "entry_motor_price": currentObjData.entry_motor_price, "entry_insulated": currentObjData.entry_insulated, "entry_is_insulated": currentObjData.entry_is_insulated, "parent_array_key": parentkey, "child_array_key": childkey, 'nested_array_key': nestedkey, 'entry_type': compType, 'entry_location': const_var.entry_wall_location[wallName], 'entry_dimension_height': doorHeight, 'entry_trim_kit_price': currentObjData.entry_trim_kit_price,'entry_is_trim_kit': currentObjData.entry_is_trim_kit, 'entry_dimension_width': doorWidth, 'uniqueId': const_var.sum, 'entry_price': currentObjData.entry_price, 'entry_size': is_edit, 'name': currentObjData.name, "entry_note": currentObjData.entry_note, "garage_door_color": currentObjData.garage_door_color, "entry_trim_kit": currentObjData.entry_trim_kit, "entry_header_seal": currentObjData.entry_header_seal, "entry_certified": currentObjData.entry_certified, "entry_chain_hoist": currentObjData.entry_chain_hoist, "entry_is_header_seal": currentObjData.entry_header_seal, "entry_is_certified": currentObjData.entry_certified, "entry_is_chain_hoist": currentObjData.entry_chain_hoist, 'entry_position': wallComponent.position, 'entry_rotation': wallComponent.rotation, 'entry_chain_hoist_price': currentObjData.entry_chain_hoist_price, 'entry_automatic_openers_price': currentObjData.entry_automatic_openers_price, 'entry_header_seal_price': currentObjData.entry_header_seal_price, 'entry_component_location': const_var.entry_wall_location[wallName], "entry_automatic_openers": currentObjData.entry_automatic_openers, "entry_is_automatic_openers": currentObjData.entry_automatic_openers, 'entry_garageDoor_color_Obj': currentObjData.entry_garageDoor_color_Obj != undefined ? currentObjData.entry_garageDoor_color_Obj : const_var.garageDoorColor[params.g_d_c_id], 'entry_garageDoor_color_price': currentObjData.entry_garageDoor_color_price!=undefined?currentObjData.entry_garageDoor_color_price:const_var.garageDoorColor[params.g_d_c_id].cost, 'component_name': compName, "component_wall_name": wallName, 'entry_quantity': calQuantity, 'entry_doorNewType': currentObjData.entry_doorNewType,'installation_is_end_wall':currentObjData.installation_is_end_wall!=undefined && wallCheckForEnd==true?currentObjData.installation_is_end_wall:'','installation_is_side_wall':currentObjData.installation_is_side_wall!=undefined && wallCheckForSide==true?currentObjData.installation_is_side_wall:'','installation_end_wall_fee':currentObjData.installation_end_wall_fee!=undefined && wallCheckForEnd==true?currentObjData.installation_end_wall_fee:0,'installation_side_wall_fee':currentObjData.installation_side_wall_fee!=undefined && wallCheckForSide==true?currentObjData.installation_side_wall_fee:0,'uniqueName':compName+const_var.sum,'overheadDoorSum':currentObjData.overheadDoorSum!=undefined?currentObjData.overheadDoorSum:undefined, 'is_breezeway_frameout':isBreezewayFrameOut ? true : false,}, doorAddOnsObj));
                if (((wallComponent.name.includes("door" + const_var.sum) == true)||(wallComponent.name.includes("overhead_door_door") == true && const_var.sum == wallComponent.uniqueId)) && parentkey == "Garage") {
                    if (wallComponent.children[1] != undefined) {
                        if(wallComponent.name.includes("overhead_door_door")){
                            wallComponent.children.forEach((child)=>{
                                if(child.name.includes("door")) child.material.color.setHex(currentObjData.garage_door_color);
                            });
                        }else{
                            wallComponent.children[1].material.color.setHex(currentObjData.garage_door_color);
                        }
                        // if (currentObjData.garage_door_color == "0xffffff") {
                            // wallComponent.children[1].material.color.b = 1.1;
                            // if(wallComponent.children.length>0 && wallComponent.children[1].material!=undefined && wallComponent.children[1].material.name!=undefined && wallComponent.children[1].material.name == "Material.004"){
                            //     wallComponent.children[1].material.color.b = 0.9;
                            //     wallComponent.children[1].material.color.g = 0.85;
                            //     wallComponent.children[1].material.color.r = 0.85;
                            // }
                            
                        // }
                    }
                }
                if(wallComponent.name.includes("sectional_with_window_door") == true)
                {
                    let index = wallComponent.children.findIndex(data=>data.name.includes("Plane")==true );
                    if(wallComponent.children[index]!=undefined)
                    {
                        wallComponent.children[index].material.color.setHex( currentObjData.garage_door_color );
                    }
                }

            } else {
                const_var.entry_points.push({  "entry_dimension_width": doorWidth, "parent_array_key": parentkey, "child_array_key": childkey, 'nested_array_key': nestedkey, 'entry_type': compType, 'entry_location': const_var.entry_wall_location[wallName], 'uniqueId': const_var.sum, 'entry_price': currentObjData.entry_price, 'entry_size': is_edit, 'name': currentObjData.name, "entry_note": currentObjData.entry_note, "garage_door_color": params.g_d_c, "entry_trim_kit": false, "entry_certified": false, "entry_automatic_openers": false, "entry_chain_hoist": false, 'entry_position': wallComponent.position, 'entry_rotation': wallComponent.rotation, 'entry_component_location': const_var.entry_wall_location[wallName], 'component_name': compName, "component_wall_name": wallName, 'entry_quantity': calQuantity, 'entry_doorNewType': currentObjData.entry_doorNewType ,'uniqueName':compName+const_var.sum,'is_breezeway_frameout':false,});
            }

        } else {

            let currentObjData = !isBreezewayFrameOut && const_var.newComponentArray[parentkey][childkey][nestedkey]!=undefined ? const_var.newComponentArray[parentkey][childkey][nestedkey]["Size"][componentsize] : undefined;
            // console.log(currentObjData,"currentObjDatacurrentObjDatacurrentObjDatacurrentObjData");
            chkCustomDoor = undefined;
            if (currentObjData == undefined) {
                const_var.newCustomSizesArray = {
                    "45_degree_angle": 0,
                    certified_cost: 0,
                    chain_hoist: 0,
                    color_cost: 0,
                    cost: 0,
                    header_bar: 0,
                    header_seal: 0,
                    height: 8,
                    id: 55374,
                    is_certified: 0,
                    is_chain_hoist: 0,
                    is_header_bar: 0,
                    is_header_seal: 0,
                    map_id: 13,
                    name: "8x8",
                    side_cost: 0,
                    vertical_side_cost: 0,
                    width: 8,
                };
                chkCustomDoor = "Custom Size";
                currentObjData = const_var.newCustomSizesArray;
                currentObjData.name = componentsize;
                currentObjData.width = componentsize.split("x")[0];
                currentObjData.height = componentsize.split("x")[1];
            }
            let trimPrice = 0;
            let componentPrice = 0;
            let onSideCost =  (currentObjData.on_side_cost && !const_var.legCutFeeMnfs.includes(Number(params.m_s_n))) ? currentObjData.on_side_cost : 0;
            let verticalOnSideCost =  (currentObjData.vertical_side_cost && !const_var.legCutFeeMnfs.includes(Number(params.m_s_n))) ? currentObjData.vertical_side_cost : 0;
            let finalComponentPrice = const_var.entry_wall_location[wallName].includes('side');
            
            if (parentkey == "Garage_Frameout") {
                trimPrice = (currentObjData.dutch_cost != undefined && currentObjData.dutch_cost_side != undefined) ? (finalComponentPrice == true) ? currentObjData.dutch_cost_side : currentObjData.dutch_cost : 0;
                //componentPrice = currentObjData.on_end;
            } else {
                trimPrice = (currentObjData['45_degree_angle'] != undefined) ? currentObjData['45_degree_angle'] : 0;
                //componentPrice = currentObjData.cost;
            }
            // console.log(trimPrice,"currentObjData['45_degree_angle']")
            // console.log(const_var.entry_wall_location, "[wallName]",const_var.entry_wall_location[wallName]);
            
            if (parentkey == "Garage_Frameout") {
                componentPrice = (finalComponentPrice == true) ? currentObjData.on_side : currentObjData.on_end;
            }
            if (parentkey == "Garage") {
                componentPrice = (finalComponentPrice == true) ? currentObjData.side_cost + currentObjData.cost : currentObjData.cost;
            }
            if (parentkey == "Walk") {
                componentPrice = (finalComponentPrice == true) ? (params.p_v_w == true) ? verticalOnSideCost + currentObjData.cost : onSideCost + currentObjData.cost : currentObjData.cost;
            }
            if (parentkey == "Walk_Frameout") {
                componentPrice = (finalComponentPrice == true) ? (params.p_v_w == true) ?  currentObjData.frameout_cost_side:currentObjData.frameout_cost_side : currentObjData.frameout_cost_end;
            }
            if (parentkey == "Windows") {
                componentPrice = (finalComponentPrice == true) ? (params.p_v_w == true) ?  verticalOnSideCost + currentObjData.cost : onSideCost + currentObjData.cost : currentObjData.cost;
            }
            if (parentkey == "Windows_Frameout") {
                componentPrice = (finalComponentPrice == true) ? (params.p_v_w == true) ? currentObjData.vertical_side_cost + currentObjData.frameout_cost_side : currentObjData.frameout_cost_side : currentObjData.frameout_cost_end;
            }
            if (isNaN((componentPrice)) == true) {
                componentPrice = 0;
            }
            if(parentkey == "Garage_Frameout" )
            {
                currentObjData.name = "Custom";
            }
            let is_trim_kit = true;
            if(currentObjData['is_45_degree_angle']!=undefined)
            {
                is_trim_kit = currentObjData['is_45_degree_angle']==1?true:false;
            }
            if(chkCustomDoor=="Custom Size" && currentObjData['is_45_degree_angle']==undefined)
            {
                is_trim_kit = false;
            }

            let is_insulated = false;
            let insulatedPrice = 0;
            let doorAddOnsObj = {};
            let is_motor = false;
            let motorPrice = 0;
            let motorName = "";
            let doornewType = "";
            if (currentObjData.door_type == "overhead_door_door") {
                const wOPtion = currentObjData.door_add_ons.filter((e) => e.door == 'window_option');
                const doorName = compName.replace("overhead_door_door_", '');
                doornewType = wOPtion[0].category.find((item) => item.category.split(' ').join('_').toLowerCase() == doorName);
                let insulatedObj = currentObjData.door_add_ons.filter((e) => e.door == "insulated");
                if (insulatedObj.length > 0) {
                    is_insulated = insulatedObj[0].category[0].is_cost == '1'? true: false;
                    insulatedPrice = parseFloat(insulatedObj[0].category[0].cost);
                    if ( parentkey =="Garage" && insulatedObj[0].category[0].is_cost == 2){
                        params.insulated = true;
                    }
                }
                currentObjData.door_add_ons.filter((e) => {
                    if (e.door == "motor") {
                        is_motor  = e.is_cost == '1';
                        motorName = e.category[0].category;
                        motorPrice = e.category[0].cost;

                        if ( parentkey =="Garage" && e.category[0].is_cost == 2){
                            params.motor = true;
                        }
                    }
                });

                let addOnOptions = currentObjData.door_add_ons.find((e) => e.door == "add_on_options");
                addOnOptions?.category.map((item) => {
                    let addObj = {};
                    
                    if (parentkey =="Garage" && item.is_cost == 2){
                        params[item.category.replace(/\s/g, '_').toLowerCase() + "_" + addOnOptions.door] = true;
                    }
                    addObj["entry_is_" + item.category.replace(/\s/g, '_').toLowerCase() + "_" + addOnOptions.door] = item.is_cost == 1? true: false;
                    addObj["entry_" + item.category.replace(/\s/g, '_').toLowerCase() + "_" + addOnOptions.door + "_price"] = parentOBJ!=undefined && parentOBJ["entry_" + item.category.replace(/\s/g, '_').toLowerCase() + "_" + addOnOptions.door + "_price"] != undefined ? parentOBJ["entry_" + item.category.replace(/\s/g, '_').toLowerCase() + "_" + addOnOptions.door + "_price"]: item.cost;
                    addObj["entry_" + item.category.replace(/\s/g, '_').toLowerCase() + "_" + addOnOptions.door] = item.category == "Frame Out"? true: params[item.category.replace(/\s/g, '_').toLowerCase() + "_" + addOnOptions.door]
                
                    return addObj;                                                                                                                                                                  
                                                                                                                                                                                         
                }).map((e) => doorAddOnsObj = {...doorAddOnsObj, ...e})
                if(doornewType!='')
                {
                    doorAddOnsObj.entry_overhead_type_name = (doornewType!=undefined)?doornewType.category:'';
                    doorAddOnsObj.entry_overhead_type_price = (doornewType!=undefined)?doornewType.cost:'';
                }
            }
            // console.log(const_var.entry_wall_location[wallName],"const_var.entry_wall_location[wallName]",wallName,finalComponentPrice);
            if ( parentkey =="Garage"){
                if(currentObjData.is_chain_hoist == 2 ) {
                    params.chain_hoist = true;
                }
                if(currentObjData.is_header_seal == 2) {
                    params.header_seal = true;
                }
                if( currentObjData.is_certified == 2 ) {
                    params.certified_door = true;
                }
                if(currentObjData.is_automatic_openers == 2 ) {
                    params.automatic_openers = true;
                }
                if (params.insulated == true) {
                        componentPrice =(parseFloat(componentPrice) + parseFloat(insulatedPrice)).toFixed(2);
                }
                if (params.certified_door == true && currentObjData.certified_cost!=0) {
                        componentPrice =(parseFloat(componentPrice) + parseFloat(currentObjData.certified_cost)).toFixed(2);
                }
                
            }

            if(parentOBJ!=undefined)
            {
                componentPrice = parentOBJ.entry_price;

                if(parentOBJ.entry_trim_kit_price!=undefined)
                {
                    trimPrice = parentOBJ.entry_trim_kit_price;
                }

                if (parentkey == "Garage" || parentkey == "Garage_Frameout") {
                    if(wallComponent.DoorObj!=undefined && wallComponent.DoorObj!=null)
                    {
                        if(wallComponent.DoorObj.installation_is_end_wall==undefined)
                        {
                            wallComponent.DoorObj.installation_is_end_wall = parentOBJ.installation_is_end_wall!=undefined && wallCheckForEnd==true?parentOBJ.installation_is_end_wall:'';
                        }
                        if(wallComponent.DoorObj.installation_is_side_wall==undefined)
                        {
                            wallComponent.DoorObj.installation_is_side_wall = parentOBJ.installation_is_side_wall!=undefined && wallCheckForSide==true?parentOBJ.installation_is_side_wall:'';
                        }
                    }
                    let doorColorPrice = (const_var.garageDoorColor[params.g_d_c_id].percentage_of_cost > 0) ? componentPrice * const_var.garageDoorColor[params.g_d_c_id].cost / 100 : const_var.garageDoorColor[params.g_d_c_id].cost;
                    const_var.entry_points.push(Object.assign({"entry_motor_name": parentOBJ.entry_motor_name, "entry_motor": parentOBJ.entry_motor, "entry_is_motor": parentOBJ.entry_is_motor, "entry_motor_price": parentOBJ.entry_motor_price, "entry_insulated": params.insulated, "entry_is_insulated": is_insulated, "parent_array_key": parentkey, "child_array_key": childkey, 'nested_array_key': nestedkey, 'entry_type': compType, 'entry_location': const_var.entry_wall_location[wallName], 'entry_dimension_height': doorHeight, 'entry_trim_kit_price': trimPrice,'entry_is_trim_kit': is_trim_kit, 'entry_dimension_width': doorWidth, 'uniqueId': const_var.sum, 'entry_price': componentPrice, 'entry_size': currentObjData, 'name': componentsize, "entry_note": params.extra_notes, "garage_door_color": params.g_d_c, "entry_trim_kit": params.trimkit, "entry_header_seal": params.header_seal, "entry_certified": params.certified_door, "entry_chain_hoist": params.chain_hoist, "entry_is_header_seal": params.header_seal, "entry_is_certified": params.certified_door, "entry_is_chain_hoist": params.chain_hoist, 'entry_position': wallComponent.position, 'entry_rotation': wallComponent.rotation, 'entry_chain_hoist_price': parentOBJ.entry_chain_hoist_price, 'entry_automatic_openers_price': parentOBJ.entry_automatic_openers_price, 'entry_header_seal_price': parentOBJ.entry_header_seal_price, 'entry_component_location': const_var.entry_wall_location[wallName], "entry_automatic_openers": params.automatic_openers, "entry_is_automatic_openers": params.automatic_openers, 'entry_garageDoor_color_Obj': const_var.garageDoorColor[params.g_d_c_id], 'entry_garageDoor_color_price': doorColorPrice, 'component_name': compName, "component_wall_name": wallName, 'entry_quantity': calQuantity, "entry_doorNewType": chkCustomDoor,'installation_is_end_wall':parentOBJ.installation_is_end_wall!=undefined && wallCheckForEnd==true?parentOBJ.installation_is_end_wall:'','installation_is_side_wall':parentOBJ.installation_is_side_wall!=undefined && wallCheckForSide==true?parentOBJ.installation_is_side_wall:'','installation_end_wall_fee':parentOBJ.installation_end_wall_fee!=undefined && wallCheckForEnd==true?parentOBJ.installation_end_wall_fee:0,'installation_side_wall_fee':parentOBJ.installation_side_wall_fee!=undefined && wallCheckForSide==true?parentOBJ.installation_side_wall_fee:0  ,'uniqueName':compName+const_var.sum,'overheadDoorSum':parentOBJ.overheadDoorSum!=undefined?parentOBJ.overheadDoorSum:undefined, 'is_breezeway_frameout':isBreezewayFrameOut ? true: false,}, doorAddOnsObj));
                } else {
                    const_var.entry_points.push({'entry_dimension_width': doorWidth, "parent_array_key": parentkey, "child_array_key": childkey, 'nested_array_key': nestedkey, 'entry_type': compType, 'entry_location': const_var.entry_wall_location[wallName], 'uniqueId': const_var.sum, 'entry_price': componentPrice, 'entry_size': currentObjData, 'name': componentsize, "entry_note": params.extra_notes, "garage_door_color": params.g_d_c, "entry_trim_kit": false, "entry_certified": false, "entry_automatic_openers": false, "entry_chain_hoist": false, 'entry_position': wallComponent.position, 'entry_rotation': wallComponent.rotation, 'entry_component_location': const_var.entry_wall_location[wallName], 'component_name': compName, "component_wall_name": wallName, 'entry_quantity': calQuantity, "entry_doorNewType": chkCustomDoor  ,'uniqueName':compName+const_var.sum,'is_breezeway_frameout':false,});
                }
            }else{
                let doorColorPrice = (const_var.garageDoorColor[params.g_d_c_id].percentage_of_cost > 0) ? componentPrice * const_var.garageDoorColor[params.g_d_c_id].cost / 100 : const_var.garageDoorColor[params.g_d_c_id].cost;
                    if (parentkey == "Garage" || parentkey == "Garage_Frameout") {
                        if(wallComponent.DoorObj!=undefined && wallComponent.DoorObj!=null)
                        {
                            if(wallComponent.DoorObj.installation_is_end_wall==undefined)
                            {
                                wallComponent.DoorObj.installation_is_end_wall = currentObjData.installation_is_end_wall!=undefined && wallCheckForEnd==true?currentObjData.installation_is_end_wall:'';
                            }
                            if(wallComponent.DoorObj.installation_is_side_wall==undefined)
                            {
                                wallComponent.DoorObj.installation_is_side_wall = currentObjData.installation_is_side_wall!=undefined && wallCheckForSide==true?currentObjData.installation_is_side_wall:'';
                            }
                        }

                    const_var.entry_points.push(Object.assign({"entry_motor_name": motorName, "entry_motor": params.motor, "entry_is_motor": is_motor, "entry_motor_price": motorPrice, "entry_insulated": params.insulated, "entry_is_insulated": is_insulated,"parent_array_key": parentkey, "child_array_key": childkey, 'nested_array_key': nestedkey, 'entry_type': compType, 'entry_location': const_var.entry_wall_location[wallName], 'entry_dimension_height': doorHeight, 'entry_trim_kit_price': trimPrice,'entry_is_trim_kit': is_trim_kit, 'entry_dimension_width': doorWidth, 'uniqueId': const_var.sum, 'entry_price': componentPrice, 'entry_size': currentObjData, 'name': componentsize, "entry_note": params.extra_notes, "garage_door_color": params.g_d_c, "entry_trim_kit": params.trimkit, "entry_header_seal": params.header_seal, "entry_certified": params.certified_door, "entry_chain_hoist": params.chain_hoist, "entry_is_header_seal": params.header_seal, "entry_is_certified": params.certified_door, "entry_is_chain_hoist": params.chain_hoist, 'entry_position': wallComponent.position, 'entry_rotation': wallComponent.rotation, 'entry_chain_hoist_price': currentObjData.chain_hoist, 'entry_automatic_openers_price': currentObjData.automatic_openers, 'entry_header_seal_price': currentObjData.header_seal, 'entry_component_location': const_var.entry_wall_location[wallName], "entry_automatic_openers": params.automatic_openers, "entry_is_automatic_openers": params.automatic_openers, 'entry_garageDoor_color_Obj': const_var.garageDoorColor[params.g_d_c_id], 'entry_garageDoor_color_price': doorColorPrice, 'component_name': compName,"component_wall_name": wallName, 'entry_quantity': calQuantity, "entry_doorNewType": chkCustomDoor,'installation_is_end_wall':currentObjData.installation_is_end_wall!=undefined && wallCheckForEnd==true?currentObjData.installation_is_end_wall:'','installation_is_side_wall':currentObjData.installation_is_side_wall!=undefined && wallCheckForSide==true?currentObjData.installation_is_side_wall:'','installation_end_wall_fee':currentObjData.installation_end_wall_fee!=undefined && wallCheckForEnd==true?currentObjData.installation_end_wall_fee:0,'installation_side_wall_fee':currentObjData.installation_side_wall_fee!=undefined && wallCheckForSide==true?currentObjData.installation_side_wall_fee:0   ,'uniqueName':compName+const_var.sum,'overheadDoorSum':currentObjData.overheadDoorSum!=undefined?currentObjData.overheadDoorSum:undefined,'is_breezeway_frameout':isBreezewayFrameOut ? true: false,}, doorAddOnsObj));
                } else {
                    const_var.entry_points.push({'entry_dimension_width': doorWidth, "parent_array_key": parentkey, "child_array_key": childkey, 'nested_array_key': nestedkey, 'entry_type': compType, 'entry_location': const_var.entry_wall_location[wallName], 'uniqueId': const_var.sum, 'entry_price': componentPrice, 'entry_size': currentObjData, 'name': componentsize, "entry_note": params.extra_notes, "garage_door_color": params.g_d_c, "entry_trim_kit": false, "entry_certified": false, "entry_automatic_openers": false, "entry_chain_hoist": false, 'entry_position': wallComponent.position, 'entry_rotation': wallComponent.rotation, 'entry_component_location': const_var.entry_wall_location[wallName], 'component_name': compName, "component_wall_name": wallName, 'entry_quantity': calQuantity, "entry_doorNewType": chkCustomDoor  ,'uniqueName':compName+const_var.sum,'is_breezeway_frameout':false,});
                }
            }
            
        }

        //console.log(const_var.entry_points,"wallCheckForSide",wallCheckForSide)
        // console.log(const_var.entry_points,"const_var.entry_points")
        
        const_var.doorUniqueId = wallComponent.uniqueId;
        
        const_var.sum++;
        const_var.newDoorsArray.push(wallComponent);
        //We have commented this function for edit case
        // updateDoorWallNameForSideCombo();
        // // if (compType.includes('frameout') == true) {
        //     wallComponent.updateMatrix();
        //     wallComponent.updateMatrixWorld();
        //     checkDoorWallCSG(wallComponent);
        //     if(params.p_w_c_n==true)
        //     {
        //         checkDoorWainscotCSG(wallComponent);
        //     }
        // }

        if(const_var.callMesure == true){
        // calculateDoorDistance(wallComponent);
        // calculateDoorDistance(wallComponent);
        }
      }

    //   if (spaceAvailableForComp /* && wallComponent.userData.compType != 'window' && wallComponent.userData.compType != 'window_frameout' */) {
    //     handleComponentPositionOnDimensionChange(undefined, true);
    //     updateWallCompDimValue();
    //   }
        //cuBuilding.cP(const_var.entry_points);
        // const_var.controls.target.set(0, params.p_h / 2, 0);
        //cuBuilding.cP();
        
        // if(fAlign) {
        //     handleComponentPositionOnDimensionChange(undefined, true, true);
        // }
        const_var.isCheckDisabled = false;
        
        if (const_var.callMesure == true) {
        Arrows.updateHorizantalArrowsforDoors();
        LeanHArrows.updateHorizantalLeanArrowsforDoors();
        calculateDoorDistance(wallComponent);
        calculateDoorDistance(wallComponent);
        }
        // if (wallName === 'c_b_f_w' && !compType.includes("window")) Arrows.centerVerticalDoorArrow(wallComponent.position, wallComponent.height, wallComponent.userData.wallName,wallComponent.uniqueId);
        // if (wallName === 'c_b_b_w' && !compType.includes("window")) Arrows.centerVerticalDoorArrowB(wallComponent.position, wallComponent.height, wallComponent.userData.wallName,wallComponent.uniqueId);

        if (isBreezewayFrameOut){
            // wallComponent.children[1].scale.set(0.01, 0.01, 0.01);
            // wallComponent.children[2].scale.set(0.01, 0.01, 0.01);
        }

        if (is_edit == undefined) {
            updateDoorWallNameForSideCombo();
        // if (compType.includes('frameout') == true) {
            wallComponent.updateMatrix();
            wallComponent.updateMatrixWorld();
            checkDoorWallCSG(wallComponent);
            if(params.p_w_c_n==true)
            {
                checkDoorWainscotCSG(wallComponent);
            }
            if ((const_var.legCutFeeMnfs.includes(Number(params.m_s_n))) && chkCustomDoor == undefined &&  wallCheckForSide && (parentkey == "Walk"  || parentkey == "Windows")) {
                walkinWindowlegCutPrice(wallComponent, true);
            }

            store.dispatch(setPricingForComponent(true, const_var.sum,const_var.entry_points.length-1));
        }
        if(is_edit!=undefined && parentkey == "Garage_Frameout")
        {
            wallComponent.children[1].visible = false;
        }
        if (is_edit!=undefined && parentkey == "Walk_Frameout") {
            wallComponent.children[0].visible = false;
            wallComponent.children[1].visible = false;
            wallComponent.children[3].visible = false;
        } if (is_edit!=undefined && parentkey == "Windows_Frameout") {
            // wallComponent.children[0].visible = false;
            wallComponent.children[1].visible = false;
            wallComponent.children[2].visible = false;
            wallComponent.children[3].visible = false;
        }
        if(is_edit!=undefined)
        {
            if(params.p_w_c_n==true)
            {
                checkDoorWainscotCSG(wallComponent);
            }
        }


         if (is_edit != undefined && const_var.sum==const_var.hodldEditBuildingData.entry_points.length) {
            updateDoorWallNameForSideCombo();
        // if (compType.includes('frameout') == true) {
            wallComponent.updateMatrix();
            wallComponent.updateMatrixWorld();
            
            checkDoorWallCSG(wallComponent);
            if(params.p_w_c_n==true)
            {
                updateDoorWainscot();
                // checkDoorWainscotCSG(wallComponent);
            }
            if(const_var.editAPIDataByResponse.data!=undefined && const_var.editAPIDataByResponse.data.request_data.building.custom_overhead_down_payment_rate!=undefined)
            {
                const_var.UpdatedPriceData.custom_overhead_down_payment_rate = const_var.editAPIDataByResponse.data.request_data.building.custom_overhead_down_payment_rate;
                const_var.UpdatedPriceData.custom_overhead_down_payment_type = const_var.editAPIDataByResponse.data.request_data.building.custom_overhead_down_payment_type;
                const_var.UpdatedPriceData.custom_overhead_down_payment_total = const_var.editAPIDataByResponse.data.request_data.building.custom_overhead_down_payment_total;
                const_var.UpdatedPriceData.custom_overhead_percentage = const_var.editAPIDataByResponse.data.request_data.building.custom_overhead_percentage;
                const_var.UpdatedPriceData.custom_overhead_total_amount = const_var.editAPIDataByResponse.data.request_data.building.custom_overhead_total_amount;
                
                
                
            }
            store.dispatch(setPricingForComponent(true, const_var.sum,const_var.entry_points.length-1,'',true));

             document.querySelector('body').classList.remove('active-modal-loader');
        } 

        else {
             document.querySelector('body').classList.remove('active-modal-loader');

        }
        
        cuBuilding.updateDoorWallNameForEnclosed();
        highlightSection( (!params.isBreezeway) ?  wallnameBySec[wallName] : breezewayWallnameByStorage[wallName]);

        typeof const_var.AddDoorComponentonWallRes === 'function' && const_var.AddDoorComponentonWallRes(wallComponent);
    }

        // const checkloaderactive = document.querySelector('body').classList.contains('active-modal-loader')

        //        if (const_var.entry_points.length-1 == 0  && checkloaderactive) {
        //                 document.querySelector('body').classList.remove('active-modal-loader');
        //             }

};


function getWallD(wallName) {
    let wall = undefined, visible = false, width = 0, height = 0;    
    wall = const_var.scene.getObjectByName(wallName);

    if (wall) {
        visible = wall.visible;
        switch (wallName) {
            //front
            case "c_b_f_w":
                width = params.p_w;
                break;
    
            //left
            case "c_b_l_w":
               width = params.p_d;
                break;
    
            //back
            case "c_b_b_w":
                width = params.p_w;
                break;
    
            //right
            case "c_b_r_w":
                width = params.p_d;
                break;
            //Free standing Lean Right wall    
            case "F_S_L_R_W":
                width = params.p_d;
                break;
    
            //center building left storage front wall
            case "c_b_l_s_f_w":
                width = params.cB_addStorage_left;
                break;
    
            //center building left storage back wall
            case "c_b_l_s_b_w":
                width = params.cB_addStorage_left;
                break;
    
            //center building left storage right wall
            case "c_b_l_s_r_w":
                width = params.p_d ;
                break;
    
            //center building right storage front wall
            case "c_b_r_s_f_w":
                width = params.cB_addStorage_right;
                break;
    
            //center building right storage back wall
            case "c_b_r_s_b_w":
                width = params.cB_addStorage_right;
                break;
    
            //center building right storage left wall
            case "c_b_r_s_l_w":
                width = params.p_d;
                break;
    
            //center building back storage front wall
            case "c_b_f_s_w":
                width = params.p_w;
                break;
    
            //center building back storage left wall
            case "c_b_l_s_w":
                width = Number(params.p_u_t);
                break;
    
            //center building back storage right wall
            case "c_b_r_s_w":
                width = Number(params.p_u_t) ;
                break;

            //center building front storage left wall
            case "c_b_f_s_l_w":
                width = Number(params.cB_addStorage_front);
                break;
    
            //center building front storage right wall
            case "c_b_f_s_r_w":
                width = Number(params.cB_addStorage_front);
                break;
    
            //center building front storage back wall
            case "c_b_f_s_b_w":
                width = params.p_w;
                break;
    
            //Left lean side wall
            case "L_L_L_W":
                if (params.add_left_front_lean_porch == true && params.add_left_back_lean_porch == false) {
                    width = params.lean_p_d + params.leanF_p_w;
                } else if (params.add_left_front_lean_porch == false && params.add_left_back_lean_porch == true) {
                    // console.log(params.lean_p_d, "+", (-params.leanB_p_w), "+", (-params.lean_p_d + (-params.leanB_p_w)) / 2, "(params.lean_p_d+(-params.leanB_p_w))/2");
                    width = params.lean_p_d + params.leanB_p_w ;
                } else if (params.add_left_front_lean_porch == true && params.add_left_back_lean_porch == true) {
                    width = params.lean_p_d + params.leanF_p_w + params.leanB_p_w;
                }
                else if(params.leantoAlignmentLeft=="3")
                {
                    width = params.lean_p_d;
                }else if(params.leantoAlignmentLeft=="2")
                {
                    width = params.lean_p_d;
                } else {
                    width = params.lean_p_d;
                }
                break;
    
            //Left lean back wall
            case "L_L_B_W":
                    width = params.lean_p_w;
                break;
    
            //Left lean front wall
            case "L_L_F_W":
                    width = params.lean_p_w;
                break;

            //Back lean side wall
            case "B_L_S_W":
                if (params.add_right_back_lean_porch == true && params.add_left_back_lean_porch == false) {
                    width = params.leanB_p_d + params.leanR_p_w;
                } else if (params.add_right_back_lean_porch == false && params.add_left_back_lean_porch == true) {
                    width = params.leanB_p_d + params.lean_p_w;
                } else if (params.add_right_back_lean_porch == true && params.add_left_back_lean_porch == true) {
                    width = params.leanB_p_d + params.lean_p_w + params.leanR_p_w;
                } else if(params.leantoAlignmentBack=="2")
                {
                    width = params.leanB_p_d;
                }else if(params.leantoAlignmentBack=="3")
                {
                    width = params.leanB_p_d;
                } else {
                    width = params.leanB_p_d;
                }
                break;
    
            //Back lean left wall
            case "B_L_B_W":
                width = params.leanB_p_w;
                break;
    
            //Back lean right wall
            case "B_L_F_W":
                width = params.leanB_p_w;
                break;
    
            //Front lean side wall
            case "F_L_F_W":
                if (params.add_right_front_lean_porch == true && params.add_left_front_lean_porch == false) {
                    width = params.leanF_p_d + params.leanR_p_w;
                } else if (params.add_right_front_lean_porch == false && params.add_left_front_lean_porch == true) {
                    width = params.leanF_p_d + params.lean_p_w;
                }else if (params.add_right_front_lean_porch == true && params.add_left_front_lean_porch == true) {
                    width = params.leanF_p_d + params.lean_p_w + params.leanR_p_w;
                }else if(params.leantoAlignmentFront=="2")
                {
                    width = params.leanF_p_d;
                }else if(params.leantoAlignmentFront=="3")
                {
                    width = params.leanF_p_d;
                } else {
                    width = params.leanF_p_d;
                }
                break;
    
            //Front lean left wall
            case "F_L_L_W":
                width = params.leanF_p_w;
                break;
    
            //Front lean right wall
            case "F_L_R_W":
                width = params.leanF_p_w;
                break;
    
            //Right lean side wall
            case "R_L_R_W":
                if (params.add_right_front_lean_porch == true && params.add_right_back_lean_porch == false) {
                    width = params.leanR_p_d + params.leanF_p_w;
                } else if (params.add_right_front_lean_porch == false && params.add_right_back_lean_porch == true) {
                    width = params.leanR_p_d + params.leanB_p_w;
                }else if (params.add_right_front_lean_porch == true && params.add_right_back_lean_porch == true) {
                    width = params.leanR_p_d + params.leanF_p_w + params.leanB_p_w;
                }else if(params.leantoAlignmentRight=="3")
                {
                    width = params.leanR_p_d;
                }else if(params.leantoAlignmentRight=="2")
                {
                    width = params.leanR_p_d ;
                } else {
                    width = params.leanR_p_d ;
                }
                break;
    
            //Right lean back wall
            case "R_L_B_W":
                    width = params.leanR_p_w;
                break;
    
            //Right Lean front wall
            case "R_L_F_W":
                    width = params.leanR_p_w;
                break;
    
            //Left lean Storage Front wall
            case "L_L_F_S_W":
                    width = params.lean_p_w;
                break;
    
            //Left lean Storage Left wall
            case "L_L_L_S_W":
                width = Number(params.add_storage);
                     
                break;
    
            //Left Lean Storage Right wall
            case "L_L_R_S_W":
                width = Number(params.add_storage);            
                break;
    
            //Right lean Storage Front wall
            case "R_L_F_S_W":
                width = params.leanR_p_w;
                break;
    
            //Right lean Storage Left wall
            case "R_L_L_S_W":
                width = params.add_storage_right;
                break;
    
            //Right Lean Storage Right wall
            case "R_L_R_S_W":
                width = params.add_storage_right;
                break;
    
            //Back lean Storage Front wall
            case "B_L_F_S_W":
                width = params.add_storage_back;
                break;
    
            //Back lean Storage Back wall
            case "B_L_B_S_W":
                width = params.leanB_p_w;
                break;
    
            //Back Lean Storage Left wall
            case "B_L_L_S_W":
                width = params.leanB_p_w;
                break;
    
            //Front lean Storage Front wall
            case "F_L_F_S_W":
                width = params.add_storage_front;    
                break;
    
            //Front lean Storage Back wall
            case "F_L_B_S_W":
                width = params.leanF_p_w;
                break;
    
            //Front Lean Storage Right wall
            case "F_L_R_S_W":
                width = params.leanF_p_w;
                break;
    
            default:
                return console.log(wallName + " not defined");
        }
    }

    return {wall, visible, width, height};
}

function addDoorEditIcon(door) {
    const texture = new THREE.TextureLoader().load(process.env.REACT_APP_BASE_URL+EDITLogo);
    const icongeometry = new THREE.CircleGeometry(0.75, 32);
    const iconmaterial = new THREE.MeshBasicMaterial({
        map: texture,
    });
    var doorIcon = new THREE.Mesh(icongeometry, iconmaterial);
    doorIcon.rotation.y = -Math.PI / 2;
    doorIcon.name = "editIcon";
    const bb = new THREE.Box3().setFromObject(door);
    const topRightCord = door.worldToLocal(bb.max);
    // console.log(topRightCord,"topRightCord");
    doorIcon.position.set(topRightCord.x - 0.01, topRightCord.y - 1, topRightCord.z - 1);
    doorIcon.uniqueId = door.uniqueId;
    doorIcon.DoorObj = door.DoorObj;
    door.add(doorIcon);
    const_var.b_d_g_b_O_cN.push(doorIcon);
}

/*
 * calaculates the distance between the doors to wall Ends 
 * showing measurements using text geometry and
 * showing vertical arrow when door is at center position
*/
export function calculateDoorDistance(doorObj) { 

// console.log(doorObj,"calculateDoorDistance");
    if(doorObj!=undefined && doorObj.actual_val!=null)
    {
    let doorWidth =  doorObj.actual_val.split("X")[0];
        // doorHeight =  doorObj.actual_val.split("X")[1];
        let doorHeight = parseInt (doorObj.actual_val.split("X")[1]);
    let widthText4L = 5, widthPostionX4L  = 0, widthPostionY4L = 0, widthPostionZ4L = 0, 
        widthRotationX4L = 0, widthRotationY4L = 0, widthRotationZ4L = 0;
    let widthText4R = 5, widthPostionX4R  = 0, widthPostionY4R = 0, widthPostionZ4R = 0, 
        widthRotationX4R = 0, widthRotationY4R = 0, widthRotationZ4R = 0;
    let wallName = doorObj.userData.wallName

    if (params.isBreezeway && (wallName == 'c_b_l_w' || wallName == 'c_b_r_w')) return ;
    let fbEnd = true;
    let lrEnd = false;
    let valName,valType,valNameRemove;

    switch (wallName) {
        //front
        case "c_b_f_w":
            widthText4L = (((params.p_w/2 + doorObj.position.x) -doorWidth/2).toFixed(2));
            widthPostionX4L = (doorObj.position.x - doorWidth/2-1.1); widthPostionY4L = 5.05; widthPostionZ4L = params.p_d/2+0.15;

            widthText4R = Math.abs ((( doorObj.position.x)-(params.p_w/2)+doorWidth/2).toFixed(2)); 
            widthPostionX4R =(((doorWidth/2)+ doorObj.position.x)+0.15);widthPostionY4R = 5.05; widthPostionZ4R = params.p_d/2+0.15; 

            valName = "Width4R"
            valNameRemove = "Width4L"
            valType = "staticR"
            break;

        //back
        case "c_b_b_w":
            widthText4L = (((params.p_w/2 + doorObj.position.x) -doorWidth/2).toFixed(2));
            widthPostionX4L = (doorObj.position.x - doorWidth/2-0.1); widthPostionY4L = 5.05; widthPostionZ4L = params.p_d/-2-0.15;
            widthRotationY4L = Math.PI;

            widthText4R = Math.abs ((( doorObj.position.x)-(params.p_w/2)+doorWidth/2).toFixed(2)); 
            widthPostionX4R = (((doorWidth/2)+ doorObj.position.x)+1.2);widthPostionY4R = 5.05; widthPostionZ4R = params.p_d/-2-0.15; 
            widthRotationY4R = Math.PI;

            fbEnd = false;
            valName = "Width4L"
            valNameRemove = "Width4R"
            valType = "staticL"
            break;

        //right
        case "c_b_r_w":
            widthText4L = (((params.p_d/2 - doorObj.position.z) -doorWidth/2).toFixed(2));
            widthPostionX4L = params.p_w/2+0.1; widthPostionY4L = 5.05; widthPostionZ4L = (doorObj.position.z + doorWidth/2+1.3);
            widthRotationY4L = Math.PI/2;
            
            widthText4R = (((params.p_d/2 + doorObj.position.z) -doorWidth/2).toFixed(2));
            widthPostionX4R = params.p_w/2+0.1; widthPostionY4R = 5.05; widthPostionZ4R = (doorObj.position.z - doorWidth/2-0.1);
            widthRotationY4R = Math.PI/2;

            fbEnd = false;
            lrEnd = true;
            // rRemove = true;
            valName = "Width4R"
            valNameRemove = "Width4L"
            valType = "staticR"
            break;
        case "F_S_L_R_W":
            widthText4L = (((params.p_d/2 - doorObj.position.z) -doorWidth/2).toFixed(2));
            widthPostionX4L = params.p_w/2+0.1; widthPostionY4L = 5.05; widthPostionZ4L = (doorObj.position.z + doorWidth/2+1.3);
            widthRotationY4L = Math.PI/2;
            
            widthText4R = (((params.p_d/2 + doorObj.position.z) -doorWidth/2).toFixed(2));
            widthPostionX4R = params.p_w/2+0.1; widthPostionY4R = 5.05; widthPostionZ4R = (doorObj.position.z - doorWidth/2-0.1);
            widthRotationY4R = Math.PI/2;

            fbEnd = false;
            lrEnd = true;
            valName = "Width4R"
            valNameRemove = "Width4L"
            valType = "staticR"
            break;
        // left
        case "c_b_l_w":
            widthText4L = (((params.p_d/2 - doorObj.position.z) -doorWidth/2).toFixed(2));
            widthPostionX4L = params.p_w/-2-0.1; widthPostionY4L = 5.05; widthPostionZ4L = (doorObj.position.z + doorWidth/2+0.1);
            widthRotationY4L = Math.PI/-2;

            widthText4R = (((params.p_d/2 + doorObj.position.z) -doorWidth/2).toFixed(2));
            widthPostionX4R = params.p_w/-2-0.1; widthPostionY4R = 5.05; widthPostionZ4R = (doorObj.position.z - doorWidth/2-1.3);
            widthRotationY4R = Math.PI/-2;

            lrEnd = true;
            valName = "Width4L"
            valNameRemove = "Width4R"
            valType = "staticL"
            break;

        //center building back storage front wall
        case "c_b_f_s_w":
            widthText4L = (((params.p_w/2 + doorObj.position.x) -doorWidth/2).toFixed(2));
            widthPostionX4L = (doorObj.position.x - doorWidth/2-1.1); widthPostionY4L = 5.05; widthPostionZ4L =  -params.p_d / 2 + Number(params.p_u_t) +0.15;

            widthText4R = Math.abs ((( doorObj.position.x)-(params.p_w/2)+doorWidth/2).toFixed(2)); 
            widthPostionX4R =(((doorWidth/2)+ doorObj.position.x)+0.15); widthPostionY4R = 5.05; widthPostionZ4R = -params.p_d / 2 + Number(params.p_u_t) + 0.25+0.15

            valName = "Width4R"
            valNameRemove = "Width4L"
            valType = "staticR"
            break;

        //center building back storage left wall
        case "c_b_l_s_w":
            // widthText4L = (((params.p_d/2 + doorObj.position.z) -doorWidth/2).toFixed(2));
            // widthPostionX4L = params.p_w/-2-0.1;    widthPostionY4L = 5.05; widthPostionZ4L =  (doorObj.position.z - doorWidth/2-1.3) 
            // widthRotationY4L = Math.PI/-2;

            // widthText4R = -((doorObj.position.z - params.p_d/2 + doorWidth/2)+(params.p_d-params.p_u_t)).toFixed(2);
            // widthPostionX4R = params.p_w/-2-0.1;   widthPostionY4R = 5.05; widthPostionZ4R = (doorObj.position.z + doorWidth/2+0.1);
            // widthRotationY4R = Math.PI/-2;

            widthText4L =   -((doorObj.position.z - params.p_d/2 + doorWidth/2)+(params.p_d-params.p_u_t)).toFixed(2);
            widthPostionX4L = params.p_w/-2-0.1; widthPostionY4L = 5.05; widthPostionZ4L = (doorObj.position.z + doorWidth/2+0.1);
            widthRotationY4L = Math.PI/-2;

            widthText4R = (((params.p_d/2 + doorObj.position.z) -doorWidth/2).toFixed(2));
            widthPostionX4R = params.p_w/-2-0.1; widthPostionY4R = 5.05; widthPostionZ4R = (doorObj.position.z - doorWidth/2-1.3);
            widthRotationY4R = Math.PI/-2;

            lrEnd = true;
            // valName = "Width4R"
            // valNameRemove = "Width4L"
            valName = "Width4L"
            valNameRemove = "Width4R"
            valType = "staticL"
            break;

        //center building back storage right wall
        case "c_b_r_s_w":
            // widthText4L = (((params.p_d/2 + doorObj.position.z) -doorWidth/2).toFixed(2));
            // widthPostionX4L = params.p_w/2+0.1; widthPostionY4L = 5.05; widthPostionZ4L = (doorObj.position.z - doorWidth/2-1) 
            // widthRotationY4L = Math.PI/2;

            // widthText4R = -((doorObj.position.z - params.p_d/2 + doorWidth/2)+(params.p_d-params.p_u_t)).toFixed(2);
            // widthPostionX4R = params.p_w/2+0.1; widthPostionY4R = 5.05; widthPostionZ4R = (doorObj.position.z + doorWidth/2+1.3);
            // widthRotationY4R = Math.PI/2;

            widthText4L = -((doorObj.position.z - params.p_d/2 + doorWidth/2)+(params.p_d-params.p_u_t)).toFixed(2);
            widthPostionX4L = params.p_w/2+0.1; widthPostionY4L = 5.05; widthPostionZ4L = (doorObj.position.z + doorWidth/2+1.3);
            widthRotationY4L = Math.PI/2;
            
            widthText4R = (((params.p_d/2 + doorObj.position.z) -doorWidth/2).toFixed(2));
            widthPostionX4R = params.p_w/2+0.1; widthPostionY4R = 5.05; widthPostionZ4R = (doorObj.position.z - doorWidth/2-0.1);
            widthRotationY4R = Math.PI/2;

            fbEnd = false;
            lrEnd = true;
            // valName = "Width4L"
            // valNameRemove = "Width4R"
            valName = "Width4R"
            valNameRemove = "Width4L"
            valType = "staticR"
            break;       
         //center building left storage front wall
         case "c_b_l_s_f_w":
            widthText4L = (((params.p_w/2 + doorObj.position.x) -doorWidth/2).toFixed(2));
            widthPostionX4L = (doorObj.position.x - doorWidth/2-1.1); widthPostionY4L = 5.05; widthPostionZ4L = params.p_d/2+0.15;

            widthText4R = Math.abs (((( doorObj.position.x)-(params.p_w/2)+doorWidth/2)+(params.p_w-params.cB_addStorage_left))).toFixed(2); 
            widthPostionX4R =(((doorWidth/2)+ doorObj.position.x)+0.15); widthPostionY4R = 5.05; widthPostionZ4R = params.p_d/2+0.15; 

            valName = "Width4R"
            valNameRemove = "Width4L"
            valType = "staticR"            
            break;
        
          //center building front storage left wall
          case "c_b_f_s_l_w":
            widthText4L = (((params.p_d/2 - doorObj.position.z) -doorWidth/2).toFixed(2));
            widthPostionX4L = params.p_w/-2-0.1; widthPostionY4L = 5.05; widthPostionZ4L = (doorObj.position.z + doorWidth/2+0.1);
            widthRotationY4L = Math.PI/-2;

            widthText4R = -((doorObj.position.z + params.p_d/2 - doorWidth/2)+(params.cB_addStorage_front-params.p_d)).toFixed(2);
            widthPostionX4R = params.p_w/-2-0.1; widthPostionY4R = 5.05; widthPostionZ4R = (doorObj.position.z - doorWidth/2-1.3);
            widthRotationY4R = Math.PI/-2;

            lrEnd = true;
            valName = "Width4L"
            valNameRemove = "Width4R"
            valType = "staticL"
            break;
    
          //center building front storage right wall
          case "c_b_f_s_r_w":
            widthText4L = (((params.p_d/2 - doorObj.position.z) -doorWidth/2).toFixed(2));
            widthPostionX4L = params.p_w/2+0.1; widthPostionY4L = 5.05; widthPostionZ4L = (doorObj.position.z + doorWidth/2+1.3);
            widthRotationY4L = Math.PI/2;
            
            widthText4R = -((doorObj.position.z + params.p_d/2 - doorWidth/2)+(params.cB_addStorage_front-params.p_d)).toFixed(2);
            widthPostionX4R = params.p_w/2+0.1; widthPostionY4R = 5.05; widthPostionZ4R = (doorObj.position.z - doorWidth/2-0.1);
            widthRotationY4R = Math.PI/2;

            fbEnd = false;
            lrEnd = true;
            // rRemove = true;
            valName = "Width4R"
            valNameRemove = "Width4L"
            valType = "staticR"
            break;

          //center building front storage back wall
          case "c_b_f_s_b_w":
            widthText4L = (((params.p_w/2 + doorObj.position.x) -doorWidth/2).toFixed(2));
            widthPostionX4L = (doorObj.position.x - doorWidth/2-0.1); widthPostionY4L = 5.05; widthPostionZ4L = params.p_d/2-params.cB_addStorage_front -0.15;
            widthRotationY4L = Math.PI;

            widthText4R = Math.abs ((( doorObj.position.x)-(params.p_w/2)+doorWidth/2).toFixed(2)); 
            widthPostionX4R = (((doorWidth/2)+ doorObj.position.x)+1.2);widthPostionY4R = 5.05; widthPostionZ4R = params.p_d/2-params.cB_addStorage_front-0.15; 
            widthRotationY4R = Math.PI;

            fbEnd = false;
            valName = "Width4L"
            valNameRemove = "Width4R"
            valType = "staticL"
            break;
        
        //center building left storage back wall
        case "c_b_l_s_b_w":
            widthText4L = (((params.p_w/2 + doorObj.position.x) -doorWidth/2).toFixed(2));
            widthPostionX4L = (doorObj.position.x - doorWidth/2-0.1); widthPostionY4L = 5.05; widthPostionZ4L = params.p_d/-2-0.15;
            widthRotationY4L = Math.PI;

            widthText4R = Math.abs (((( doorObj.position.x)-(params.p_w/2)+doorWidth/2)+(params.p_w-params.cB_addStorage_left))).toFixed(2); 
            widthPostionX4R = (((doorWidth/2)+ doorObj.position.x)+1.2); widthPostionY4R = 5.05; widthPostionZ4R = params.p_d/-2-0.15; 
            widthRotationY4R = Math.PI;

            fbEnd = false;
            valName = "Width4L"
            valNameRemove = "Width4R"
            valType = "staticL"
            break;

        //center building left storage right wall
        case "c_b_l_s_r_w":
            widthText4L = (((params.p_d/2 - doorObj.position.z) -doorWidth/2).toFixed(2));
            widthPostionX4L = (-params.p_w / 2 + Number(params.cB_addStorage_left) + 0.25); widthPostionY4L = 5.05; widthPostionZ4L = (doorObj.position.z + doorWidth/2+1.3);
            widthRotationY4L = Math.PI/2;
            
            widthText4R = (((params.p_d/2 + doorObj.position.z) -doorWidth/2).toFixed(2));
            widthPostionX4R = (-params.p_w / 2 + Number(params.cB_addStorage_left) + 0.25); widthPostionY4R = 5.05; widthPostionZ4R = (doorObj.position.z - doorWidth/2-0.1);
            widthRotationY4R = Math.PI/2;

            fbEnd = false;
            lrEnd = true;
            valName = "Width4R"
            valNameRemove = "Width4L"
            valType = "staticR"
            break;

        //center building right storage front wall
        case "c_b_r_s_f_w":
            widthText4L = (((params.p_w/2 + doorObj.position.x) -doorWidth/2).toFixed(2));
            widthText4L = Math.abs ((((params.p_w/2 + doorObj.position.x) -doorWidth/2)-(params.p_w-params.cB_addStorage_right))).toFixed(2); 
            widthPostionX4L = (doorObj.position.x - doorWidth/2-1.1); widthPostionY4L = 5.05; widthPostionZ4L = params.p_d/2+0.15;

            widthText4R = Math.abs ((( doorObj.position.x)-(params.p_w/2)+doorWidth/2).toFixed(2)); 
            widthPostionX4R =(((doorWidth/2)+ doorObj.position.x)+0.15); widthPostionY4R = 5.05; widthPostionZ4R = params.p_d/2+0.15; 

            valName = "Width4R"
            valNameRemove = "Width4L"
            valType = "staticR"            
            break;

        //center building right storage back wall
        case "c_b_r_s_b_w":
            widthText4L =  Math.abs ((((params.p_w/2 + doorObj.position.x) -doorWidth/2)-(params.p_w-params.cB_addStorage_right))).toFixed(2); 
            widthPostionX4L = (doorObj.position.x - doorWidth/2-0.1); widthPostionY4L = 5.05; widthPostionZ4L = params.p_d/-2-0.15;
            widthRotationY4L = Math.PI;

            widthText4R = Math.abs ((( doorObj.position.x)-(params.p_w/2)+doorWidth/2).toFixed(2)); 
            widthPostionX4R = (((doorWidth/2)+ doorObj.position.x)+1.2); widthPostionY4R = 5.05; widthPostionZ4R = params.p_d/-2-0.15; 
            widthRotationY4R = Math.PI;

            fbEnd = false;
            valName = "Width4L"
            valNameRemove = "Width4R"
            valType = "staticL"
            break;

        //center building right storage left wall
        case "c_b_r_s_l_w":
            widthText4L = (((params.p_d/2 - doorObj.position.z) -doorWidth/2).toFixed(2));
            widthPostionX4L = params.p_w/2- Number(params.cB_addStorage_right)-0.1; widthPostionY4L = 5.05; widthPostionZ4L = (doorObj.position.z + doorWidth/2+0.1);
            widthRotationY4L = Math.PI/-2;

            widthText4R = (((params.p_d/2 + doorObj.position.z) -doorWidth/2).toFixed(2));
            widthPostionX4R = params.p_w/2- Number(params.cB_addStorage_right)-0.1; widthPostionY4R = 5.05; widthPostionZ4R = (doorObj.position.z - doorWidth/2-1.3);
            widthRotationY4R = Math.PI/-2;

            lrEnd = true;
            valName = "Width4L"
            valNameRemove = "Width4R"
            valType = "staticL"
            break;

        //center building left storage front wall in case of vertical panels
        case "L_S_F_W_VT":
            widthText4L = (((params.p_w/2 + doorObj.position.x) -doorWidth/2).toFixed(2));
            widthPostionX4L = (doorObj.position.x - doorWidth/2-1.1); widthPostionY4L = 5.05; widthPostionZ4L = params.p_d/2+0.15;

            widthText4R = Math.abs (((( doorObj.position.x)-(params.p_w/2)+doorWidth/2)+(params.p_w-params.cB_addStorage_left))).toFixed(2); 
            widthPostionX4R =(((doorWidth/2)+ doorObj.position.x)+0.15); widthPostionY4R = 5.05; widthPostionZ4R = params.p_d/2+0.15; 

            valName = "Width4R"
            valNameRemove = "Width4L"
            valType = "staticR"            
            break;

        //center building left storage 2nd front wall in case of vertical panels
        case "L_S_F_2W_VT":
            widthText4L = (((params.p_w/2 + doorObj.position.x) -doorWidth/2).toFixed(2));
            widthPostionX4L = (doorObj.position.x - doorWidth/2-1.1); widthPostionY4L = 5.05; widthPostionZ4L = params.p_d/2+0.15;

            widthText4R = Math.abs (((( doorObj.position.x)-(params.p_w/2)+doorWidth/2)+(params.p_w-params.cB_addStorage_left))).toFixed(2); 
            widthPostionX4R =(((doorWidth/2)+ doorObj.position.x)+0.15); widthPostionY4R = 5.05; widthPostionZ4R = params.p_d/2+0.15; 

            valName = "Width4R"
            valNameRemove = "Width4L"
            valType = "staticR"            
            break;

        //center building left storage back wall in case of vertical panels
        case "L_S_B_W_VT":
            widthText4L = (((params.p_w/2 + doorObj.position.x) -doorWidth/2).toFixed(2));
            widthPostionX4L = (doorObj.position.x - doorWidth/2-0.1); widthPostionY4L = 5.05; widthPostionZ4L = params.p_d/-2-0.15;
            widthRotationY4L = Math.PI;

            widthText4R = Math.abs (((( doorObj.position.x)-(params.p_w/2)+doorWidth/2)+(params.p_w-params.cB_addStorage_left))).toFixed(2); 
            widthPostionX4R = (((doorWidth/2)+ doorObj.position.x)+1.2); widthPostionY4R = 5.05; widthPostionZ4R = params.p_d/-2-0.15; 
            widthRotationY4R = Math.PI;

            fbEnd = false;
            valName = "Width4L"
            valNameRemove = "Width4R"
            valType = "staticL"          
            break;

        //center building left storage back 2nd wall in case of vertical panels
        case "L_S_B_2W_VT":
            widthText4L = (((params.p_w/2 + doorObj.position.x) -doorWidth/2).toFixed(2));
            widthPostionX4L = (doorObj.position.x - doorWidth/2-0.1); widthPostionY4L = 5.05; widthPostionZ4L = params.p_d/-2-0.15;
            widthRotationY4L = Math.PI;

            widthText4R = Math.abs (((( doorObj.position.x)-(params.p_w/2)+doorWidth/2)+(params.p_w-params.cB_addStorage_left))).toFixed(2); 
            widthPostionX4R = (((doorWidth/2)+ doorObj.position.x)+1.2); widthPostionY4R = 5.05; widthPostionZ4R = params.p_d/-2-0.15; 
            widthRotationY4R = Math.PI;

            fbEnd = false;
            valName = "Width4L"
            valNameRemove = "Width4R"
            valType = "staticL"       
            break;    

        //center building right storage front wall in case of vertical panels
        case "R_S_F_W_VT":
            widthText4L = (((params.p_w/2 + doorObj.position.x) -doorWidth/2).toFixed(2));
            widthText4L = Math.abs ((((params.p_w/2 + doorObj.position.x) -doorWidth/2)-(params.p_w-params.cB_addStorage_right))).toFixed(2); 
            widthPostionX4L = (doorObj.position.x - doorWidth/2-1.1); widthPostionY4L = 5.05; widthPostionZ4L = params.p_d/2+0.15;

            widthText4R = Math.abs ((( doorObj.position.x)-(params.p_w/2)+doorWidth/2).toFixed(2)); 
            widthPostionX4R =(((doorWidth/2)+ doorObj.position.x)+0.15); widthPostionY4R = 5.05; widthPostionZ4R = params.p_d/2+0.15; 

            valName = "Width4R"
            valNameRemove = "Width4L"
            valType = "staticR"              
            break;

        //center building right storage front 2nd wall in case of vertical panels
        case "R_S_F_2W_VT":
            widthText4L = (((params.p_w/2 + doorObj.position.x) -doorWidth/2).toFixed(2));
            widthText4L = Math.abs ((((params.p_w/2 + doorObj.position.x) -doorWidth/2)-(params.p_w-params.cB_addStorage_right))).toFixed(2); 
            widthPostionX4L = (doorObj.position.x - doorWidth/2-1.1); widthPostionY4L = 5.05; widthPostionZ4L = params.p_d/2+0.15;

            widthText4R = Math.abs ((( doorObj.position.x)-(params.p_w/2)+doorWidth/2).toFixed(2)); 
            widthPostionX4R =(((doorWidth/2)+ doorObj.position.x)+0.15); widthPostionY4R = 5.05; widthPostionZ4R = params.p_d/2+0.15; 

            valName = "Width4R"
            valNameRemove = "Width4L"
            valType = "staticR"              
            break;

        //center building right storage back wall in case of vertical panels
        case "R_S_B_W_VT":
            widthText4L =  Math.abs ((((params.p_w/2 + doorObj.position.x) -doorWidth/2)-(params.p_w-params.cB_addStorage_right))).toFixed(2); 
            widthPostionX4L = (doorObj.position.x - doorWidth/2-0.1); widthPostionY4L = 5.05; widthPostionZ4L = params.p_d/-2-0.15;
            widthRotationY4L = Math.PI;

            widthText4R = Math.abs ((( doorObj.position.x)-(params.p_w/2)+doorWidth/2).toFixed(2)); 
            widthPostionX4R = (((doorWidth/2)+ doorObj.position.x)+1.2); widthPostionY4R = 5.05; widthPostionZ4R = params.p_d/-2-0.15; 
            widthRotationY4R = Math.PI;

            fbEnd = false;
            valName = "Width4L"
            valNameRemove = "Width4R"
            valType = "staticL"       
            break;

        //center building right storage back 2nd wall in case of vertical panels
        case "R_S_B_2W_VT":
            widthText4L =  Math.abs ((((params.p_w/2 + doorObj.position.x) -doorWidth/2)-(params.p_w-params.cB_addStorage_right))).toFixed(2); 
            widthPostionX4L = (doorObj.position.x - doorWidth/2-0.1); widthPostionY4L = 5.05; widthPostionZ4L = params.p_d/-2-0.15;
            widthRotationY4L = Math.PI;

            widthText4R = Math.abs ((( doorObj.position.x)-(params.p_w/2)+doorWidth/2).toFixed(2)); 
            widthPostionX4R = (((doorWidth/2)+ doorObj.position.x)+1.2); widthPostionY4R = 5.05; widthPostionZ4R = params.p_d/-2-0.15; 
            widthRotationY4R = Math.PI;

            fbEnd = false;
            valName = "Width4L"
            valNameRemove = "Width4R"
            valType = "staticL"          
            break;             

        //Left lean front wall
        case "L_L_F_W":
            // widthText4L = (((doorObj.position.x +params.p_w/2)+(params.lean_p_w/2))+doorWidth/2).toFixed(2);
            widthText4L = ((params.p_w/2)+(params.lean_p_w)+doorObj.position.x - (doorWidth/2)).toFixed(2);
            widthPostionX4L = (doorObj.position.x - doorWidth/2-1.1); widthPostionY4L = 4.2; widthPostionZ4L = doorObj.position.z+0.15;

            // widthText4R = Math.abs ((((doorObj.position.x +params.p_w/2)+(params.lean_p_w/2))-doorWidth/2).toFixed(2)); 
            widthText4R = (Math.abs((doorObj.position.x)+(params.p_w/2) + (doorWidth/2))).toFixed(2);
            // console.log(widthText4R,"widthText4R");
            widthPostionX4R = (((doorWidth/2)+ doorObj.position.x)+0.15); widthPostionY4R = 4.2; widthPostionZ4R = doorObj.position.z+0.15; 

            valName = "Width4R"
            valNameRemove = "Width4L"
            valType = "staticR"  
            break;   

        //Left lean side wall
        case "L_L_L_W":
            widthText4L = (((params.lean_p_d/2 - doorObj.position.z) -doorWidth/2).toFixed(2));
            widthPostionX4L = -params.lean_p_w-params.p_w/2-0.1; widthPostionY4L = 4.2; widthPostionZ4L = (doorObj.position.z + doorWidth/2+0.1);
            widthRotationY4L = Math.PI/-2;

            widthText4R = (((params.lean_p_d/2 + doorObj.position.z) -doorWidth/2).toFixed(2));
            widthPostionX4R =  -params.lean_p_w-params.p_w/2-0.1; widthPostionY4R = 4.2; widthPostionZ4R = (doorObj.position.z - doorWidth/2-1.3);
            widthRotationY4R = Math.PI/-2;

            if(params.add_left_front_lean_porch === true && params.add_left_back_lean_porch == false){
                widthText4L = (((params.p_d/2 + params.lean_p_w)- doorObj.position.z) -doorWidth/2).toFixed(2);
                widthText4R = ((params.lean_p_d/2 + doorObj.position.z) -doorWidth/2).toFixed(2);
                if (params.leantoAlignmentLeft == 2 ){
                    widthText4R = ((((params.lean_p_d-(params.p_d / 2)) + doorObj.position.z) -doorWidth/2).toFixed(2));
                }
            } else if (params.add_left_front_lean_porch === false && params.add_left_back_lean_porch === true) {
                widthText4L = ((params.lean_p_d/2 - doorObj.position.z) -doorWidth/2).toFixed(2);
                widthText4R = (((params.p_d/2 + params.lean_p_w ) + doorObj.position.z) -doorWidth/2).toFixed(2);
                if (params.leantoAlignmentLeft == 3 ){
                    widthText4L = ((((params.lean_p_d - (params.p_d / 2))- doorObj.position.z) -doorWidth/2).toFixed(2));
                }
            } else if(params.add_left_front_lean_porch === true && params.add_left_back_lean_porch==true){
                widthText4L = (((params.p_d/2 + params.lean_p_w)- doorObj.position.z) -doorWidth/2).toFixed(2);
                widthText4R = (((params.p_d/2 + params.lean_p_w ) + doorObj.position.z) -doorWidth/2).toFixed(2);
            } else if (params.leantoAlignmentLeft == 2){
                widthText4L = ((params.p_d/2 - doorObj.position.z) -doorWidth/2).toFixed(2);
                widthText4R = (((params.lean_p_d-(params.p_d / 2)) + doorObj.position.z) -doorWidth/2).toFixed(2);
            } else if (params.leantoAlignmentLeft == 3) {
                widthText4L = (((params.lean_p_d - (params.p_d / 2))- doorObj.position.z) -doorWidth/2).toFixed(2);
                widthText4R = ((params.p_d/2 + doorObj.position.z) -doorWidth/2).toFixed(2);
            } else {
                widthText4L = ((params.lean_p_d/2 - doorObj.position.z) -doorWidth/2).toFixed(2);
                widthText4R = ((params.lean_p_d/2 + doorObj.position.z) -doorWidth/2).toFixed(2);
            }

            lrEnd = true;
            valName = "Width4L"
            valNameRemove = "Width4R"
            valType = "staticL"
            break;

        //Left lean back wall
        case "L_L_B_W":
            // widthText4L =(((doorObj.position.x +params.p_w/2)+(params.lean_p_w/2))+doorWidth/2).toFixed(2);
            widthText4L = ((params.p_w/2)+(params.lean_p_w)+doorObj.position.x - (doorWidth/2)).toFixed(2);
            widthPostionX4L = (doorObj.position.x - doorWidth/2-0.1); widthPostionY4L = 4.2; widthPostionZ4L = doorObj.position.z-0.15;
            widthRotationY4L = Math.PI;

            // widthText4R = Math.abs ((((doorObj.position.x +params.p_w/2)+(params.lean_p_w/2))-doorWidth/2).toFixed(2)); 
            widthText4R = (Math.abs((doorObj.position.x)+(params.p_w/2) + (doorWidth/2))).toFixed(2);
            widthPostionX4R = (((doorWidth/2)+ doorObj.position.x)+1.2); widthPostionY4R = 4.2; widthPostionZ4R = doorObj.position.z-0.15; 
            widthRotationY4R = Math.PI;
            
            fbEnd = false;
            valName = "Width4L"
            valNameRemove = "Width4R"
            valType = "staticL"
            break;

        //Right Lean front wall
        case "R_L_F_W":
            // widthText4L = Math.abs ((((doorObj.position.x -params.p_w/2)-(params.leanR_p_w/2))+doorWidth/2).toFixed(2)); 
            widthText4L = ((params.p_w/-2)+doorObj.position.x - (doorWidth/2)).toFixed(2);
            widthPostionX4L = (doorObj.position.x - doorWidth/2-1.1); widthPostionY4L = 4.2; widthPostionZ4L = doorObj.position.z+0.15;

            // widthText4R = -(((doorObj.position.x -params.p_w/2)-(params.leanR_p_w/2))-doorWidth/2).toFixed(2);
            widthText4R =  ((params.p_w/2)-doorObj.position.x+(params.leanR_p_w) - (doorWidth/2)).toFixed(2);
            widthPostionX4R = (((doorWidth/2)+ doorObj.position.x)+0.15); widthPostionY4R = 4.2; widthPostionZ4R = doorObj.position.z+0.15; 

            valName = "Width4R"
            valNameRemove = "Width4L"
            valType = "staticR"  
            break;
        
        //Right lean side wall
        case "R_L_R_W":
             widthText4L = (((params.leanR_p_d/2 - doorObj.position.z) -doorWidth/2).toFixed(2));
             widthPostionX4L = params.leanR_p_w+params.p_w/2+0.1;widthPostionY4L = 4.2;widthPostionZ4L = (doorObj.position.z + doorWidth/2+1.3);
             widthRotationY4L = Math.PI/2;
     
             widthText4R = (((params.leanR_p_d/2 + doorObj.position.z) -doorWidth/2).toFixed(2));
             widthPostionX4R =  params.leanR_p_w+params.p_w/2+0.1; widthPostionY4R = 4.2; widthPostionZ4R = (doorObj.position.z - doorWidth/2-0.1);
             widthRotationY4R = Math.PI/2;

             if(params.add_right_front_lean_porch === true && params.add_right_back_lean_porch == false){
                widthText4L = (((params.p_d/2 + params.leanR_p_w)- doorObj.position.z) -doorWidth/2).toFixed(2);
                widthText4R = ((params.leanR_p_d/2 + doorObj.position.z) -doorWidth/2).toFixed(2);
                if (params.leantoAlignmentRight == 2 ){
                    widthText4R = ((((params.leanR_p_d-(params.p_d / 2)) + doorObj.position.z) -doorWidth/2).toFixed(2));
                }
            } else if (params.add_right_front_lean_porch === false && params.add_right_back_lean_porch === true) {
                widthText4L = ((params.leanR_p_d/2 - doorObj.position.z) -doorWidth/2).toFixed(2);
                widthText4R = (((params.p_d/2 + params.leanR_p_w ) + doorObj.position.z) -doorWidth/2).toFixed(2);
                if (params.leantoAlignmentRight == 3 ){
                    widthText4L = ((((params.leanR_p_d - (params.p_d / 2))- doorObj.position.z) -doorWidth/2).toFixed(2));
                }
            } else if(params.add_right_front_lean_porch === true && params.add_right_back_lean_porch==true){
                widthText4L = (((params.p_d/2 + params.leanR_p_w)- doorObj.position.z) -doorWidth/2).toFixed(2);
                widthText4R = (((params.p_d/2 + params.leanR_p_w ) + doorObj.position.z) -doorWidth/2).toFixed(2);
            } else if (params.leantoAlignmentRight == 2){
                widthText4L = ((params.p_d/2 - doorObj.position.z) -doorWidth/2).toFixed(2);
                widthText4R = (((params.leanR_p_d-(params.p_d / 2)) + doorObj.position.z) -doorWidth/2).toFixed(2);
            } else if (params.leantoAlignmentRight == 3) {
                widthText4L = (((params.leanR_p_d - (params.p_d / 2))- doorObj.position.z) -doorWidth/2).toFixed(2);
                widthText4R = ((params.p_d/2 + doorObj.position.z) -doorWidth/2).toFixed(2);
            } else {
                widthText4L = ((params.leanR_p_d/2 - doorObj.position.z) -doorWidth/2).toFixed(2);
                widthText4R = ((params.leanR_p_d/2 + doorObj.position.z) -doorWidth/2).toFixed(2);
            }
            
             fbEnd = false;
             lrEnd = true;
             valName = "Width4R"
             valNameRemove = "Width4L"
             valType = "staticR"
             break; 

        //Right lean back wall
        case "R_L_B_W":
            // widthText4L =Math.abs ((((doorObj.position.x -params.p_w/2)-(params.leanR_p_w/2))+doorWidth/2).toFixed(2));
            widthText4L = ((params.p_w/-2)+doorObj.position.x - (doorWidth/2)).toFixed(2);
            widthPostionX4L = (doorObj.position.x - doorWidth/2-0.1); widthPostionY4L = 4.2; widthPostionZ4L = doorObj.position.z-0.15;
            widthRotationY4L = Math.PI;

            // widthText4R = -(((doorObj.position.x -params.p_w/2)-(params.leanR_p_w/2))-doorWidth/2).toFixed(2);
            widthText4R =  ((params.p_w/2)-doorObj.position.x+(params.leanR_p_w) - (doorWidth/2)).toFixed(2);
            widthPostionX4R = (((doorWidth/2)+ doorObj.position.x)+1.2); widthPostionY4R = 4.2; widthPostionZ4R = doorObj.position.z-0.15; 
            widthRotationY4R = Math.PI;

            fbEnd = false;
            valName = "Width4L"
            valNameRemove = "Width4R"
            valType = "staticL"
            break;
        
        //Front lean side wall
        case "F_L_F_W":
            widthText4L = (((params.leanF_p_d/2 + doorObj.position.x) -doorWidth/2).toFixed(2));
            widthPostionX4L = (doorObj.position.x - doorWidth/2-1.1); widthPostionY4L = 4.2; widthPostionZ4L = params.leanF_p_w+params.p_d/2+0.15;

            widthText4R = Math.abs ((( doorObj.position.x)-(params.leanF_p_d/2)+doorWidth/2).toFixed(2)); 
            widthPostionX4R =(((doorWidth/2)+ doorObj.position.x)+0.15); widthPostionY4R = 4.2; widthPostionZ4R = params.leanF_p_w+params.p_d/2+0.15; 

            if(params.add_right_front_lean_porch === true && params.add_left_front_lean_porch == false){
                widthText4L = (((params.leanF_p_d/2) + doorObj.position.x) -doorWidth/2).toFixed(2);
                widthText4R = Math.abs((( doorObj.position.x)-((params.p_w/2)+params.leanR_p_w)+doorWidth/2).toFixed(2));
                if (params.leantoAlignmentFront == 3 ){
                    widthText4L = (((params.leanF_p_d - (params.p_w/2) ) + doorObj.position.x) -doorWidth/2).toFixed(2);
                }
            } else if (params.add_right_front_lean_porch === false && params.add_left_front_lean_porch === true) {
                widthText4L = ((((params.p_w/2) + params.lean_p_w) + doorObj.position.x) -doorWidth/2).toFixed(2);
                widthText4R = Math.abs((( doorObj.position.x)-(params.leanF_p_d/2)+doorWidth/2).toFixed(2));
                if (params.leantoAlignmentFront == 2 ){
                    widthText4R = Math.abs((( doorObj.position.x)-(params.leanF_p_d - (params.p_w/2))+doorWidth/2).toFixed(2));
                }
            } else if(params.add_right_front_lean_porch === true && params.add_left_front_lean_porch==true){
                widthText4L = ((((params.leanF_p_d/2) + params.lean_p_w) + doorObj.position.x) -doorWidth/2).toFixed(2);
                widthText4R = Math.abs((( doorObj.position.x)-((params.leanF_p_d/2)+params.leanR_p_w)+doorWidth/2).toFixed(2));
            } else if (params.leantoAlignmentFront == 2){
                widthText4L = (((params.p_w/2) + doorObj.position.x) -doorWidth/2).toFixed(2);
                widthText4R = Math.abs((( doorObj.position.x)-(params.leanF_p_d - (params.p_w/2))+doorWidth/2).toFixed(2));
            } else if (params.leantoAlignmentFront == 3) {
                widthText4L = (((params.leanF_p_d - (params.p_w/2) ) + doorObj.position.x) -doorWidth/2).toFixed(2);
                widthText4R = Math.abs((( doorObj.position.x)-(params.p_w/2)+doorWidth/2).toFixed(2));
            } else {
                widthText4L = (((params.leanF_p_d/2) + doorObj.position.x) -doorWidth/2).toFixed(2);
                widthText4R = Math.abs((( doorObj.position.x)-(params.leanF_p_d/2)+doorWidth/2).toFixed(2));
            }

            valName = "Width4R"
            valNameRemove = "Width4L"
            valType = "staticR"  
            break; 

        //Front lean left wall
        case "F_L_L_W":
            widthText4L = (( (params.leanF_p_w) + (params.p_d/2)-doorObj.position.z - (doorWidth/2)).toFixed(2));
            widthPostionX4L = doorObj.position.x-0.15; widthPostionY4L = 4.2; widthPostionZ4L = (doorObj.position.z + doorWidth/2+0.1);
            widthRotationY4L = Math.PI/-2;

            widthText4R =((( doorObj.position.z) -doorWidth/2 - (params.p_d/2)).toFixed(2));
            widthPostionX4R = doorObj.position.x-0.15; widthPostionY4R = 4.2; widthPostionZ4R = (doorObj.position.z - doorWidth/2-1.3);
            widthRotationY4R = Math.PI/-2;

            lrEnd = true;
            valName = "Width4L"
            valNameRemove = "Width4R"
            valType = "staticL"
            break; 

        //Front lean right wall
        case "F_L_R_W":
            // widthText4L = (((params.p_d/2+params.leanF_p_w/2 -doorObj.position.z) +doorWidth/2).toFixed(2));
            widthText4L = (( (params.leanF_p_w) + (params.p_d/2)-doorObj.position.z - (doorWidth/2)).toFixed(2));
            widthPostionX4L = doorObj.position.x+0.15; widthPostionY4L = 4.2; widthPostionZ4L = (doorObj.position.z + doorWidth/2+1.3);
            widthRotationY4L = Math.PI/2;
            
            // widthText4R = -(((params.p_d/2+params.leanF_p_w/2 - doorObj.position.z) -doorWidth/2).toFixed(2));
            widthText4R =((( doorObj.position.z) -doorWidth/2 - (params.p_d/2)).toFixed(2));
            widthPostionX4R = doorObj.position.x+0.15; widthPostionY4R = 4.2; widthPostionZ4R = (doorObj.position.z - doorWidth/2-0.1);
            widthRotationY4R = Math.PI/2;

            fbEnd = false;
            lrEnd = true;
            valName = "Width4R"
            valNameRemove = "Width4L"
            valType = "staticR"
            break;

        //Back lean side wall
        case "B_L_S_W":
            widthText4L = (((params.leanB_p_d/2 + doorObj.position.x) -doorWidth/2).toFixed(2));
            widthPostionX4L = (doorObj.position.x - doorWidth/2-0.1); widthPostionY4L = 4.2; widthPostionZ4L = -params.leanB_p_w+params.p_d/-2-0.15;
            widthRotationY4L = Math.PI;

            widthText4R = Math.abs ((( doorObj.position.x)-(params.leanB_p_d/2)+doorWidth/2).toFixed(2)); 
            widthPostionX4R =(((doorWidth/2)+ doorObj.position.x)+1.2); widthPostionY4R = 4.2; widthPostionZ4R = -params.leanB_p_w+params.p_d/-2-0.15; 
            widthRotationY4R = Math.PI;

            if(params.add_right_back_lean_porch === true && params.add_left_back_lean_porch == false){
                widthText4L = (((params.leanB_p_d/2) + doorObj.position.x) -doorWidth/2).toFixed(2);
                widthText4R = Math.abs((( doorObj.position.x)-((params.p_w/2)+params.leanR_p_w)+doorWidth/2).toFixed(2));
                if (params.leantoAlignmentBack == 2){
                    widthText4L = (((params.leanB_p_d - (params.p_w/2) ) + doorObj.position.x) -doorWidth/2).toFixed(2);
                }
            } else if (params.add_right_back_lean_porch === false && params.add_left_back_lean_porch === true) {
                widthText4L = ((((params.p_w/2) + params.lean_p_w) + doorObj.position.x) -doorWidth/2).toFixed(2);
                widthText4R = Math.abs((( doorObj.position.x)-(params.leanB_p_d/2)+doorWidth/2).toFixed(2));
                if (params.leantoAlignmentBack == 3){
                    widthText4R = Math.abs((( doorObj.position.x)-(params.leanB_p_d - (params.p_w/2))+doorWidth/2).toFixed(2));
                }
            } else if(params.add_right_back_lean_porch === true && params.add_left_back_lean_porch==true){
                widthText4L = ((((params.leanB_p_d/2) + params.lean_p_w) + doorObj.position.x) -doorWidth/2).toFixed(2);
                widthText4R = Math.abs((( doorObj.position.x)-((params.leanB_p_d/2)+params.leanR_p_w)+doorWidth/2).toFixed(2));
            } else if (params.leantoAlignmentBack == 3){
                widthText4L = (((params.p_w/2) + doorObj.position.x) -doorWidth/2).toFixed(2);
                widthText4R = Math.abs((( doorObj.position.x)-(params.leanB_p_d - (params.p_w/2))+doorWidth/2).toFixed(2));
            } else if (params.leantoAlignmentBack == 2) {
                widthText4L = (((params.leanB_p_d - (params.p_w/2) ) + doorObj.position.x) -doorWidth/2).toFixed(2);
                widthText4R = Math.abs((( doorObj.position.x)-(params.p_w/2)+doorWidth/2).toFixed(2));
            } else {
                widthText4L = (((params.leanB_p_d/2) + doorObj.position.x) -doorWidth/2).toFixed(2);
                widthText4R = Math.abs((( doorObj.position.x)-(params.leanB_p_d/2)+doorWidth/2).toFixed(2));
            }

            fbEnd = false;
            valName = "Width4L"
            valNameRemove = "Width4R"
            valType = "staticL"
            break;

        //Back lean left wall
        case "B_L_B_W":
            // widthText4L = (((params.p_d/-2-params.leanB_p_w/2 -doorObj.position.z) +doorWidth/2).toFixed(2));
            widthText4L = (( doorObj.position.z + (doorWidth/2) + (params.p_d/2)).toFixed(2));
            widthPostionX4L = doorObj.position.x-0.15; widthPostionY4L = 4.2; widthPostionZ4L = (doorObj.position.z + doorWidth/2+0.1);
            widthRotationY4L = Math.PI/-2;

            // widthText4R =-(((params.p_d/-2-params.leanB_p_w/2 - doorObj.position.z) -doorWidth/2).toFixed(2));
            widthText4R = (((params.p_d/2)+ doorObj.position.z -(doorWidth/2)+(params.leanB_p_w)).toFixed(2));
            widthPostionX4R = doorObj.position.x-0.15; widthPostionY4R = 4.2; widthPostionZ4R = (doorObj.position.z - doorWidth/2-1.3);
            widthRotationY4R = Math.PI/-2;

            lrEnd = true;
            valName = "Width4L"
            valNameRemove = "Width4R"
            valType = "staticL"
            break;

        //Back lean right wall
        case "B_L_F_W":
            // widthText4L =  (((params.p_d/-2-params.leanB_p_w/2 -doorObj.position.z) +doorWidth/2).toFixed(2));
            widthText4L = (( doorObj.position.z + (doorWidth/2) + (params.p_d/2)).toFixed(2));
            widthPostionX4L = doorObj.position.x+0.15; widthPostionY4L = 4.2; widthPostionZ4L = (doorObj.position.z + doorWidth/2+1.3);
            widthRotationY4L = Math.PI/2;
            
            // widthText4R = -(((params.p_d/-2-params.leanB_p_w/2 - doorObj.position.z) -doorWidth/2).toFixed(2));
            widthText4R = (((params.p_d/2)+ doorObj.position.z -(doorWidth/2)+(params.leanB_p_w)).toFixed(2));
            widthPostionX4R = doorObj.position.x+0.15;     widthPostionY4R = 4.2; widthPostionZ4R = (doorObj.position.z - doorWidth/2-0.1);
            widthRotationY4R = Math.PI/2;

            fbEnd = false;
            lrEnd = true;
            valName = "Width4R"
            valNameRemove = "Width4L"
            valType = "staticR"
            break;

        //Left lean Storage Front wall
        case "L_L_F_S_W":
            // widthText4L = (((doorObj.position.x +params.p_w/2)+(params.lean_p_w/2))+doorWidth/2).toFixed(2);
            widthText4L = ((params.p_w/2)+(params.lean_p_w)+doorObj.position.x - (doorWidth/2)).toFixed(2);
            widthPostionX4L = (doorObj.position.x - doorWidth/2-1.1); widthPostionY4L = 4.2; widthPostionZ4L = params.lean_p_d/-2+Number(params.add_storage)+0.15;

            // widthText4R = Math.abs ((((doorObj.position.x +params.p_w/2)+(params.lean_p_w/2))-doorWidth/2).toFixed(2)); 
            widthText4R = (Math.abs((doorObj.position.x)+(params.p_w/2) + (doorWidth/2))).toFixed(2);
            widthPostionX4R = (((doorWidth/2)+ doorObj.position.x)+0.15); widthPostionY4R = 4.2; widthPostionZ4R = params.lean_p_d/-2+Number(params.add_storage)+0.15; 

            valName = "Width4R"
            valNameRemove = "Width4L"
            valType = "staticR"  
            break;

        //Left lean Storage Left wall
        case "L_L_L_S_W":
            widthText4L = -((doorObj.position.z - params.lean_p_d/2 + doorWidth/2)+(params.lean_p_d-params.add_storage)).toFixed(2);
            widthPostionX4L = -params.lean_p_w-params.p_w/2-0.1; widthPostionY4L = 4.2; widthPostionZ4L = (doorObj.position.z + doorWidth/2+0.1);
            widthRotationY4L = Math.PI/-2;

            widthText4R =(((params.lean_p_d/2 + doorObj.position.z) -doorWidth/2).toFixed(2));
            widthPostionX4R =  -params.lean_p_w-params.p_w/2-0.1; widthPostionY4R = 4.2; widthPostionZ4R = (doorObj.position.z - doorWidth/2-1.3);
            widthRotationY4R = Math.PI/-2;

           if (params.leantoAlignmentLeft == 2){
               widthText4L = (((params.p_d/2-(params.lean_p_d- params.add_storage))  - doorObj.position.z) -doorWidth/2).toFixed(2);
                widthText4R = (((params.lean_p_d-(params.p_d / 2)) + doorObj.position.z) -doorWidth/2).toFixed(2);
                
            } else if (params.leantoAlignmentLeft == 3) {
                widthText4L = (((params.add_storage - (params.p_d / 2))- doorObj.position.z) -doorWidth/2).toFixed(2);
                widthText4R = ((params.p_d/2 + doorObj.position.z) -doorWidth/2).toFixed(2);
            } else {
                widthText4R = ((params.lean_p_d/2 + doorObj.position.z) -doorWidth/2).toFixed(2);
                widthText4L = -((doorObj.position.z - params.lean_p_d/2 + doorWidth/2)+(params.lean_p_d-params.add_storage)).toFixed(2);
            }


            lrEnd = true;
            valName = "Width4L"
            valNameRemove = "Width4R"
            valType = "staticL"
            break;

        case "L_L_R_S_W":
            widthText4L = -((doorObj.position.z - params.lean_p_d/2 + doorWidth/2)+(params.lean_p_d-params.add_storage)).toFixed(2);
            widthPostionX4L = -params.p_w/2+0.1; widthPostionY4L = 4.2; widthPostionZ4L = (doorObj.position.z + doorWidth/2+1.3);
            widthRotationY4L = Math.PI/2;

            widthText4R = (((params.lean_p_d/2 + doorObj.position.z) -doorWidth/2).toFixed(2));
            widthPostionX4R =  -params.p_w/2+0.1; widthPostionY4R = 4.2; widthPostionZ4R = (doorObj.position.z - doorWidth/2-0.1);
            widthRotationY4R = Math.PI/2;

            lrEnd = true;
            valName = "Width4R"
            valNameRemove = "Width4L"
            valType = "staticR"
            break;

        case "R_L_L_S_W":
            widthText4L = -((doorObj.position.z - params.leanR_p_d/2 + doorWidth/2)+(params.leanR_p_d-params.add_storage_right)).toFixed(2);
            widthPostionX4L = params.p_w/2-0.1; widthPostionY4L = 4.2; widthPostionZ4L = (doorObj.position.z + doorWidth/2+0.1);
            widthRotationY4L = Math.PI/-2;

            widthText4R = (((params.leanR_p_d/2 + doorObj.position.z) -doorWidth/2).toFixed(2));
            widthPostionX4R =  params.p_w/2-0.1; widthPostionY4R = 4.2; widthPostionZ4R = (doorObj.position.z - doorWidth/2-1.6);
            widthRotationY4R = Math.PI/-2;

            fbEnd = false;
            lrEnd = true;
            valName = "Width4R"
            valNameRemove = "Width4L"
            valType = "staticR"
            break;

        //Right lean Storage Front wall
        case "R_L_F_S_W":
            // widthText4L = Math.abs ((((doorObj.position.x -params.p_w/2)-(params.leanR_p_w/2))+doorWidth/2).toFixed(2)); 
            widthText4L = ((params.p_w/-2)+doorObj.position.x - (doorWidth/2)).toFixed(2);
            widthPostionX4L = (doorObj.position.x - doorWidth/2-1.1); widthPostionY4L = 4.2; widthPostionZ4L = params.leanR_p_d/-2+Number(params.add_storage_right)+0.15;

            // widthText4R = -(((doorObj.position.x -params.p_w/2)-(params.leanR_p_w/2))-doorWidth/2).toFixed(2);
            widthText4R =  ((params.p_w/2)-doorObj.position.x+(params.leanR_p_w) - (doorWidth/2)).toFixed(2);
            widthPostionX4R = (((doorWidth/2)+ doorObj.position.x)+0.15); widthPostionY4R = 4.2; widthPostionZ4R = params.leanR_p_d/-2+Number(params.add_storage_right)+0.15; 

            valName = "Width4R"
            valNameRemove = "Width4L"
            valType = "staticR"  
            break;

        //Right Lean Storage Right wall
        case "R_L_R_S_W":
            widthText4L = -((doorObj.position.z - params.leanR_p_d/2 + doorWidth/2)+(params.leanR_p_d-params.add_storage_right)).toFixed(2);
            widthPostionX4L = params.leanR_p_w+params.p_w/2+0.1; widthPostionY4L = 4.2; widthPostionZ4L = (doorObj.position.z + doorWidth/2+1.3);
            widthRotationY4L = Math.PI/2;
    
            widthText4R = (((params.leanR_p_d/2 + doorObj.position.z) -doorWidth/2).toFixed(2));
            widthPostionX4R =  params.leanR_p_w+params.p_w/2+0.1; widthPostionY4R = 4.2; widthPostionZ4R = (doorObj.position.z - doorWidth/2-0.1);
            widthRotationY4R = Math.PI/2;

            if (params.leantoAlignmentRight == 2){
             widthText4L = (((params.p_d/2-(params.leanR_p_d- params.add_storage_right))  - doorObj.position.z) -doorWidth/2).toFixed(2);
             widthText4R = (((params.leanR_p_d-(params.p_d / 2)) + doorObj.position.z) -doorWidth/2).toFixed(2);
             
            } else if (params.leantoAlignmentRight == 3) {
                widthText4L = (((params.add_storage_right - (params.p_d / 2))- doorObj.position.z) -doorWidth/2).toFixed(2);
                widthText4R = ((params.p_d/2 + doorObj.position.z) -doorWidth/2).toFixed(2);
            } else {
                widthText4L = -((doorObj.position.z - params.leanR_p_d/2 + doorWidth/2)+(params.leanR_p_d-params.add_storage_right)).toFixed(2);
                widthText4R = (((params.leanR_p_d/2 + doorObj.position.z) -doorWidth/2).toFixed(2));
            }

            fbEnd = false;
            lrEnd = true;
            valName = "Width4R"
            valNameRemove = "Width4L"
            valType = "staticR"
            break;

        //Back lean Storage Front wall
        case "B_L_F_S_W":
            // widthText4L = (( doorObj.position.z + (doorWidth/2) + (params.p_d/2)).toFixed(2));
            widthText4L = (((params.leanB_p_d/2 + doorObj.position.x) -doorWidth/2).toFixed(2));
            widthPostionX4L = (doorObj.position.x - doorWidth/2-0.1); widthPostionY4L = 4.2; widthPostionZ4L = -params.leanB_p_w+params.p_d/-2-0.15;
            widthRotationY4L = Math.PI;

            // widthText4R = (((params.p_d/2)+ doorObj.position.z -(doorWidth/2)+(params.leanB_p_w)).toFixed(2));
            widthText4R = Math.abs (((( doorObj.position.x)-(params.leanB_p_d/2)+doorWidth/2)+(params.leanB_p_d-params.add_storage_back)).toFixed(2)); 
            widthPostionX4R =(((doorWidth/2)+ doorObj.position.x)+1.2); widthPostionY4R = 4.2; widthPostionZ4R = -params.leanB_p_w+params.p_d/-2-0.15; 
            widthRotationY4R = Math.PI;


            if (params.leantoAlignmentBack == 3){
                widthText4L = (((params.p_w/2) + doorObj.position.x) -doorWidth/2).toFixed(2);
                widthText4R = Math.abs((( doorObj.position.x)-((params.leanB_p_d -(params.leanB_p_d-params.add_storage_back)) - (params.p_w/2))+doorWidth/2).toFixed(2));
            } else if (params.leantoAlignmentBack == 2) {
                widthText4L = (((params.leanB_p_d - (params.p_w/2) ) + doorObj.position.x) -doorWidth/2).toFixed(2);
                widthText4R = Math.abs((( doorObj.position.x)-(params.p_w/2 - (params.leanB_p_d - params.add_storage_back))+doorWidth/2).toFixed(2));
            } else {
                widthText4L = (((params.leanB_p_d/2 + doorObj.position.x) -doorWidth/2).toFixed(2));
                widthText4R =Math.abs(((( doorObj.position.x)-(params.leanB_p_d/2)+doorWidth/2)+(params.leanB_p_d-params.add_storage_back)).toFixed(2));
            }

            fbEnd = false;
            lrEnd = true;
            valName = "Width4R"
            valNameRemove = "Width4L"
            valType = "staticR"
          break;

        //Back Lean Storage Left wall
        case "B_L_L_S_W":
            widthText4L =  (((params.p_d/-2-params.leanB_p_w/2 -doorObj.position.z) +doorWidth/2).toFixed(2));
            widthPostionX4L = params.leanB_p_d/-2+ Number(params.add_storage_back) +0.1; widthPostionY4L = 4.2; widthPostionZ4L = (doorObj.position.z + doorWidth/2+1.3);
            widthRotationY4L = Math.PI/2;
            
            widthText4R = -(((params.p_d/-2-params.leanB_p_w/2 - doorObj.position.z) -doorWidth/2).toFixed(2));
            widthPostionX4R = params.leanB_p_d/-2+ Number(params.add_storage_back) +0.1; widthPostionY4R = 4.2; widthPostionZ4R = (doorObj.position.z - doorWidth/2-0.1);
            widthRotationY4R = Math.PI/2;

            fbEnd = false;
            valName = "Width4L"
            valNameRemove = "Width4R"
            valType = "staticL"
            break;

        //Front lean Storage Front wall
        case "F_L_F_S_W":
            widthText4L = (( (params.leanF_p_w) + (params.p_d/2)-doorObj.position.z - (doorWidth/2)).toFixed(2));
            widthText4L = (((params.leanF_p_d/2 + doorObj.position.x) -doorWidth/2).toFixed(2));
            widthPostionX4L = (doorObj.position.x - doorWidth/2-1.1); widthPostionY4L = 4.2; widthPostionZ4L = params.leanF_p_w+params.p_d/2+0.15;

            widthText4R =((( doorObj.position.z) -doorWidth/2 - (params.p_d/2)).toFixed(2)); 
            widthText4R =Math.abs (((( doorObj.position.x)-(params.leanF_p_d/2)+doorWidth/2)+(params.leanF_p_d-params.add_storage_front)).toFixed(2));
            widthPostionX4R =(((doorWidth/2)+ doorObj.position.x)+0.15); widthPostionY4R = 4.2; widthPostionZ4R = params.leanF_p_w+params.p_d/2+0.15; 

          if (params.leantoAlignmentFront == 2){
                widthText4L = (((params.p_w/2) + doorObj.position.x) -doorWidth/2).toFixed(2);
                widthText4R = Math.abs((( doorObj.position.x)-((params.leanF_p_d -(params.leanF_p_d-params.add_storage_front)) - (params.p_w/2))+doorWidth/2).toFixed(2));
            } else if (params.leantoAlignmentFront == 3) {
                widthText4L = (((params.leanF_p_d - (params.p_w/2) ) + doorObj.position.x) -doorWidth/2).toFixed(2);
                widthText4R = Math.abs((( doorObj.position.x)-(params.p_w/2 - (params.leanF_p_d - params.add_storage_front))+doorWidth/2).toFixed(2));
            } else {
                widthText4L = (((params.leanF_p_d/2 + doorObj.position.x) -doorWidth/2).toFixed(2));
                widthText4R =Math.abs(((( doorObj.position.x)-(params.leanF_p_d/2)+doorWidth/2)+(params.leanF_p_d-params.add_storage_front)).toFixed(2));
            }

            valName = "Width4R"
            valNameRemove = "Width4L"
            valType = "staticR" 
            break;

        //Front Lean Storage Right wall
        case "F_L_R_S_W":
            widthText4L = (( (params.leanF_p_w) + (params.p_d/2)-doorObj.position.z - (doorWidth/2)).toFixed(2));
            widthPostionX4L = params.leanF_p_d/-2+Number(params.add_storage_front)+0.1; widthPostionY4L = 4.2; widthPostionZ4L = (doorObj.position.z + doorWidth/2+1.3);
            widthRotationY4L = Math.PI/2;
            
            widthText4R =  ((( doorObj.position.z) -doorWidth/2 - (params.p_d/2)).toFixed(2));
            widthPostionX4R = params.leanF_p_d/-2+Number(params.add_storage_front)+0.1; widthPostionY4R = 4.2; widthPostionZ4R = (doorObj.position.z - doorWidth/2-0.1);
            widthRotationY4R = Math.PI/2;

            fbEnd = false;
            lrEnd = true;
            valName = "Width4R"
            valNameRemove = "Width4L"
            valType = "staticR"
            break;    

        default:
            return console.log(wallName + " not defined");
    }

    let checkWallValue = const_var.checkWallClose[wallName];
    var trimCalor = params.p_t_c.replace("#", "0x");
    if(checkWallValue == 'utility')
    {
      trimCalor = params.p_t_c.replace("#", "0x");
    }else{
      if(params[checkWallValue]=='Open')
      {
        trimCalor = '0x94989B';
     }
   }
    var inches1 = 0;
    var feet = Math.floor(widthText4L);
    var inches = Math.round((widthText4L - feet) * 12);
    if (inches > 0 && inches < 12) {
        var inches1 = inches;//"0" + inches;
    }
    if (inches == 12) {
        feet = feet + 1;
        inches = 0;
    }
    var dimension4L = (feet > 0 && inches < 12 && inches != 0) ? Math.abs(feet) + "'" + inches1 + '"' : Math.abs(feet) + "'"; 
    // console.log(dimension4L,feet,inches,"inchesinches");
//    let  doorWidthGeo4L = new THREE.TextGeometry(  widthText4L +"''" , {
   let  doorWidthGeo4L = new THREE.TextGeometry(  dimension4L , {
        font:const_var.font, size: 0.4, height: 0.02,
        curveSegments: 3, bevelEnabled: true,bevelThickness: 0.01,
        bevelSize: 0, bevelSegments: 3,
    } );
    let  doorWidthMaterial4L = new THREE.MeshPhongMaterial({color: 0x282828});
    let  doorWidth4L = new THREE.Mesh(doorWidthGeo4L, doorWidthMaterial4L);
    doorWidth4L.name = "Width4L"+doorObj.userData.uniqueId;
    doorWidth4L.visible = false;
    doorWidth4L.posValue = {'left':(((params.p_w/2 + doorObj.position.x) -doorWidth/2).toFixed(2)),'right':''};
    let chkIndex = doorObj.children.findIndex(data=>data.mainType=="staticR");
    if(doorObj.children.length>3 && chkIndex!=-1) {
        doorObj.children[chkIndex+1] = doorWidth4L;
        doorObj.children[chkIndex+1].visible = const_var.callMesure;

        doorObj.children[chkIndex+1].position.set(widthPostionX4L,widthPostionY4L,widthPostionZ4L);
        doorObj.children[chkIndex+1].rotation.set(widthRotationX4L,widthRotationY4L, widthRotationZ4L);
            // console.log(doorObj.children[chkIndex+1].position,"doorObj.children[chkIndex+1].position");
        if (feet > 0 && inches < 12 && inches != 0){
            doorObj.children[chkIndex+1].position.x = widthPostionX4L;
        } else {
            // FrontSide Left Measurement
            if (doorObj.rotation.y == 1.5707963267948966){
                doorObj.children[chkIndex+1].position.x = (Number(widthText4L) <= 9.99) ? widthPostionX4L+0.6 : widthPostionX4L+0.3;
            }
             // RightSide Left Measurement
            if (doorObj.rotation.y == 3.141592653589793){
                doorObj.children[chkIndex+1].position.z =  (Number(widthText4L) <= 9.99) ? widthPostionZ4L-0.7 : widthPostionZ4L-0.3;
            }
          
        }

        if ( doorObj.userData?.compType.includes("window") == true ) {
            doorObj.children[chkIndex+1].position.y = doorObj.position.y + 0.1;
            doorObj.children[chkIndex+1].visible = false;
        }
        if(lrEnd == true){
            doorObj.children[chkIndex+1].uuid = doorObj.position.z;
        }else{
            doorObj.children[chkIndex+1].uuid = doorObj.position.x;
        }
    } else {
        doorWidth4L.mainType = "staticL";
        doorObj.add(doorWidth4L);
    }
    var inches1 = 0;
    var feet = Math.floor(widthText4R);
    var inches = Math.round((widthText4R - feet) * 12);
    if (inches > 0 && inches < 12) {
        var inches1 = inches;//"0" + inches;
    }
    if (inches == 12) {
        feet = feet + 1;
        inches = 0;
    }
    var dimension4R = (feet > 0 && inches < 12 && inches != 0) ? Math.abs(feet) + "'" + inches1 + '"' : Math.abs(feet) + "'"; 

    let  doorWidthGeo4R = new THREE.TextGeometry(  dimension4R, {
        font:const_var.font, size: 0.4, height: 0.02,
        curveSegments: 3, bevelEnabled: true,bevelThickness: 0.01,
        bevelSize: 0, bevelSegments: 3,
    } );
    let  doorWidthMaterial4R = new THREE.MeshPhongMaterial({color: 0x282828});
    let  doorWidth4R = new THREE.Mesh(doorWidthGeo4R, doorWidthMaterial4R);
    doorWidth4R.name = "Width4R"+doorObj.userData.uniqueId;
    doorWidth4R.visible = false;
    let chkIndexR = doorObj.children.findIndex(data=>data.mainType=="staticR");

    if(doorObj.children.length>4 && chkIndexR!=-1) {
        doorObj.children[chkIndexR+2] = doorWidth4R;
        doorObj.children[chkIndexR+2].visible = const_var.callMesure;
        doorObj.children[chkIndexR+2].position.set(widthPostionX4R,widthPostionY4R,widthPostionZ4R);
        doorObj.children[chkIndexR+2].rotation.set(widthRotationX4R,widthRotationY4R, widthRotationZ4R)

        if (feet > 0 && inches < 12 && inches != 0){
            doorObj.children[chkIndexR+2].position.x = widthPostionX4R;
        } else {
            // BackSide Left Measurement
            if (doorObj.rotation.y == -1.5707963267948966){
                doorObj.children[chkIndexR+2].position.x = (Number(widthText4R) <= 9.99) ?widthPostionX4R-0.6:widthPostionX4R-0.3;
            }
            // LeftSide 
            if (doorObj.rotation.y == 0){
                doorObj.children[chkIndexR+2].position.z = (Number(widthText4R) <= 9.99) ?widthPostionZ4R+0.6:widthPostionZ4R+0.3;
            }
        }
        if (doorObj.userData?.compType.includes("window") == true ) {
            doorObj.children[chkIndexR+2].position.y = doorObj.position.y + 0.1;
            doorObj.children[chkIndexR+2].visible = false;
        }
        if(lrEnd == true){    
            doorObj.children[chkIndexR+2].uuid = doorObj.position.z;
        }else{
            doorObj.children[chkIndexR+2].uuid = doorObj.position.x;
        }
    } else {
        doorWidth4R.mainType = "staticR";
        doorObj.add(doorWidth4R);
    }

    /* This Code is for showing distance between two componrnts and remove extra dimantion showing in between them */

    let  calculatedValues = []; 
    // let  dPositionArr = []; 
    let filterRecord = const_var.entry_points.filter(data=>data.component_wall_name == wallName);
    let doorDisArr = {};
    let calWidthR , calWidthL ,dPosition ;
    for(var doorCount = 0 ; filterRecord.length > doorCount; doorCount ++  ){
        let doorWidth;

        if(filterRecord[doorCount].component_name.includes("standard_door") == true || filterRecord[doorCount].component_name.includes("standard_walkin") == true || filterRecord[doorCount].component_name.includes("standard_trim_door") == true || filterRecord[doorCount].component_name.includes("diamond_window_walkin") == true || filterRecord[doorCount].component_name.includes("9_lite_walkin") == true || filterRecord[doorCount].component_name.includes("solid_walkin") == true || filterRecord[doorCount].component_name.includes("half_sectional_door_design") == true || filterRecord[doorCount].component_name.includes("double_delux_walkin") == true || filterRecord[doorCount].component_name.includes("sectional_door") == true || filterRecord[doorCount].component_name.includes("sectional_with_window_door") == true || filterRecord[doorCount].component_name.includes("11_lite_walkin") == true || filterRecord[doorCount].component_name.includes("4_lite_walkin") == true || filterRecord[doorCount].component_name.includes("5_lite_walkin") == true ||filterRecord[doorCount].component_name.includes("double_slider_door_door")||filterRecord[doorCount].component_name.includes("double_door_walkin")||filterRecord[doorCount].component_name.includes("9_lite_double_door_walkin") == true){

            if(filterRecord[doorCount].component_name == "standard_door" || filterRecord[doorCount].component_name == "standard_trim_door" || filterRecord[doorCount].component_name == "sectional_door" || filterRecord[doorCount].component_name == "double_slider_door_door" || filterRecord[doorCount].component_name == "sectional_with_window_door"){
                doorWidth =  filterRecord[doorCount].name.split("x")[0]/2
            }else{
                doorWidth =  (Math.floor(filterRecord[doorCount].name.split("x")[0]*0.084))/2
            }
            if(lrEnd == true){    
                calWidthR = Math.abs(-params.leanF_p_w-params.p_d/2+(filterRecord[doorCount].entry_position.z)+(doorWidth))
                calWidthL = Math.abs(-params.leanF_p_w-params.p_d/2+(filterRecord[doorCount].entry_position.z)-(doorWidth))
                
                // dPosition = filterRecord[doorCount].entry_position.z + params.p_d/2 + params.leanF_p_w

            }else{
                calWidthR = Math.abs(-params.leanR_p_w-params.p_w/2+(filterRecord[doorCount].entry_position.x)+(doorWidth))
                calWidthL = Math.abs(-params.leanR_p_w-params.p_w/2+(filterRecord[doorCount].entry_position.x)-(doorWidth))

                // dPosition = filterRecord[doorCount].entry_position.x + params.p_w/2 + params.leanR_p_w
            }
             calculatedValues.push(calWidthR,calWidthL);
            //  dPositionArr.push(dPosition);
    
            if(lrEnd == true){    
                doorDisArr[filterRecord[doorCount].entry_position.z] = filterRecord[doorCount].entry_position.z;
            }else{
                doorDisArr[filterRecord[doorCount].entry_position.x] = filterRecord[doorCount].entry_position.x;
            }
        }
        
   
    }
    calculatedValues.sort(function(a, b){return b-a});
    // dPositionArr.sort(function(a, b){return a-b});
    

    let max = Math.max.apply(null, Object.keys(doorDisArr))
    delete doorDisArr[max.toString()]

    const sortable = Object.entries(doorDisArr)
    .sort(([,a],[,b]) => a-b)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    if(fbEnd == false){
    let min = Math.min.apply(null, Object.keys(sortable))
    delete sortable[min.toString()]
    }
    let calDoorValue = 0;
    let doorDistanceVal;
    for(var doorCount = 1 ; calculatedValues.length > doorCount; doorCount++  ){

        if(doorCount%2 == 1){
            calDoorValue = calculatedValues[doorCount]
        }
        if(doorCount%2 == 0){
         
            doorDistanceVal = calDoorValue - calculatedValues[doorCount];
            let i = (doorCount/2)-1
                sortable[Object.keys(sortable)[i]] = doorDistanceVal
            }
            
        }
        
        if(fbEnd == false){
            if(filterRecord.length > 1){
        sortable[max] = doorDistanceVal
            }
        delete sortable[undefined]
    }


    
    // let currentGeo,CurrentValForPre,previousGeo,previousVal,CurrentValForNxt,nextGeo,nextVal;
    var data = const_var.scene.children;
    let posVal = [];
    data.forEach(function(Geometry) {

        if(Geometry.name.includes("standard_door") == true || Geometry.name.includes("standard_walkin") == true || Geometry.name.includes("standard_trim_door") == true || Geometry.name.includes("diamond_window_walkin") == true || Geometry.name.includes("9_lite_walkin") == true || Geometry.name.includes("solid_walkin") == true || Geometry.name.includes("half_sectional_door_design") == true || Geometry.name.includes("double_delux_walkin") == true || Geometry.name.includes("sectional_door") == true || Geometry.name.includes("sectional_with_window_door") == true || Geometry.name.includes("11_lite_walkin") == true || Geometry.name.includes("4_lite_walkin") == true || Geometry.name.includes("5_lite_walkin") == true ||Geometry.name.includes("double_slider_door_door")||Geometry.name.includes("double_door_walkin")||Geometry.name.includes("9_lite_double_door_walkin") == true){
           
            if(Geometry.userData.wallName == wallName){
            //    Geometry.getObjectByName("trims").material.emissive.setHex(trimCalor);
            if(Geometry.rotation._y == 3.141592653589793 || Geometry.rotation._y == 0){
                posVal.push(Geometry.position.z)
            }else{
                posVal.push(Geometry.position.x)
            }
            }


            if(wallName == Geometry.userData.wallName){
                Geometry.children.forEach(function(childGeometry) {
                    let pos = childGeometry.uuid;

                    if(childGeometry.name.includes(valNameRemove) == true){
    
                        if(pos.toString() != Object.keys(sortable)[0] && Object.keys(sortable).length > 0 && fbEnd == true){
                            childGeometry.visible = false;
                        }else{
                            if(const_var.callMesure == true && childGeometry.mainType == undefined){
                            childGeometry.visible = true;
                            }
                        }
    
                        if(fbEnd == false && pos.toString() != Object.keys(sortable)[Object.keys(sortable).length-1] && Object.keys(sortable)[Object.keys(sortable).length-1] != undefined){
                            childGeometry.visible = false;
                        }
                    }

                    if(childGeometry.name.includes(valName) == true){
                    
                        if(sortable[pos.toString()] != undefined ){
                              
                            let feet = Math.floor(sortable[pos.toString()]);
                            let inches = Math.round((sortable[pos.toString()] - feet) * 12);
                                if (inches == 12) {
                                    feet = feet + 1;
                                    inches = 0;
                                }
                                let calDistance = (feet > 0 && inches > 0) ? (Math.abs(feet) + "'" + inches + '"') : inches === 0? (Math.abs(feet) + "'") : (Math.abs(inches) + '"'); 

                                let  widthBtwDoorGeo4R = new THREE.TextGeometry(  calDistance, {
                                    font:const_var.font, size: 0.4, height: 0.02,
                                    curveSegments: 3, bevelEnabled: true,bevelThickness: 0.01,
                                    bevelSize: 0, bevelSegments: 3,
                                } );
                                let  widthBtwDoor4R = new THREE.MeshPhongMaterial({color: 0x282828});
                                let  widthBtwDoor = new THREE.Mesh(widthBtwDoorGeo4R, widthBtwDoor4R);
                                widthBtwDoor.name = valName+Geometry.userData.uniqueId;
                                if(lrEnd == true){    
                                    widthBtwDoor.uuid = Geometry.position.z;
                                }else{
                                    widthBtwDoor.uuid = Geometry.position.x;
                                }
                                widthBtwDoor.visible = false;
                                let chkIndexR = Geometry.children.findIndex(data=>data.mainType==valType);
                                if(Geometry.children.length>4 && chkIndexR!=-1) {
                                    Geometry.children[chkIndexR+2] = widthBtwDoor;
                                    Geometry.children[chkIndexR+2].visible = const_var.callMesure;
                                    Geometry.children[chkIndexR+2].position.set(childGeometry.position.x,childGeometry.position.y,childGeometry.position.z);
                                    Geometry.children[chkIndexR+2].rotation.set(widthRotationX4R,widthRotationY4R, widthRotationZ4R)
                                } else {
                                    widthBtwDoor.mainType = valType;
                                    Geometry.add(widthBtwDoor);
                                }

                        }
                    }
                })
            }
        }
    })

    posVal.sort(function(a, b){return a-b });
    let pos,rightDoor,leftDoor,distance,compWidth,rightDoorGeo,leftDoorGeo;
    params.trimVal = -2
    if(posVal.length > 0 && const_var.scene.getObjectByName(wallName) != undefined){
        for (let i = 0; i < posVal.length; i++) {     
            for (let j = 0; j < data.length; j++) {
                if(data[j].name != undefined){
                    if(data[j].name.includes("standard_door") == true || data[j].name.includes("standard_walkin") == true || data[j].name.includes("standard_trim_door") == true || data[j].name.includes("diamond_window_walkin") == true || data[j].name.includes("9_lite_walkin") == true || data[j].name.includes("solid_walkin") == true || data[j].name.includes("half_sectional_door_design") == true || data[j].name.includes("double_delux_walkin") == true || data[j].name.includes("sectional_door") == true || data[j].name.includes("sectional_with_window_door") == true || data[j].name.includes("11_lite_walkin") == true || data[j].name.includes("4_lite_walkin") == true || data[j].name.includes("5_lite_walkin") == true ||data[j].name.includes("double_slider_door_door")||data[j].name.includes("double_door_walkin")||data[j].name.includes("9_lite_double_door_walkin") == true){          
                        // if(data[j].name.includes("standard_door") || data[j].name.includes("standard_trim_door")){
                        //     compWidth = (Number(data[j].size.split('x')[0]))*1
                        // }else{
                        //     compWidth = (Number(data[j].size.split('x')[0]))*0.084
                        // }
                        compWidth = data[j].width
                        if(data[j].userData.wallName == wallName ){
                            if(data[j].rotation._y == 3.141592653589793 || data[j].rotation._y == 0){
                                pos = data[j].position.z
                            }else{
                                pos = data[j].position.x
                            }
                        }
                        if(posVal[i] == pos && data[j].userData.wallName == wallName && (posVal[i+1] != undefined || posVal.length == 1)){
                            rightDoor = pos+(compWidth/2)
                            rightDoorGeo = data[j]
                        }
            
                        if(posVal[i+1] == pos && data[j].userData.wallName == wallName){
                         leftDoor = pos-(compWidth/2)
                         leftDoorGeo = data[j]
                        }

                        if(posVal[i+1] != undefined){
                          distance = rightDoor - leftDoor
                        }
                          
                    }
                }
            }
            
            if(distance <= -0.9){
                if(params.trimVal < -0.9){
                    rightDoorGeo.getObjectByName("trims").material.emissive.setHex(trimCalor);
                }
                leftDoorGeo.getObjectByName("trims").material.emissive.setHex(trimCalor);
            }else{
                if(posVal.length > 1){
                rightDoorGeo.getObjectByName("trims").material.emissive.setHex(0x00FFFF);
                }
                if(leftDoorGeo != undefined){
                leftDoorGeo.getObjectByName("trims").material.emissive.setHex(0x00FFFF);
                }
            }

            params.trimVal = distance
            if(i==(posVal.length-2)){break;}
        }
    }

        // window highlight
        let hcomp = [];
        // doorObj.updateMatrix();
        params.isDoorOverlap = false;
        let box1M = doorObj.getObjectByName("Doors") || doorObj.getObjectByName("doors") || doorObj.getObjectByName("door1"); 
        if (box1M) {
            doorObj.updateMatrixWorld();
            box1M.updateMatrix();
            box1M.updateMatrixWorld();
            let box1 = new THREE.Box3().setFromObject(box1M);
            doorObj.getObjectByName("trims").material.emissive.setHex(trimCalor);
            const_var.newDoorsArray.forEach((child) => {    
                if (child.userData.wallName === wallName)  {
                    let box2M = child.getObjectByName("Doors") || child.getObjectByName("doors") || child.getObjectByName("door1"); 
                    if (box2M) {
                        box2M.updateMatrix();
                        box2M.updateMatrixWorld();
                        let box2 = new THREE.Box3().setFromObject(box2M);    
                        if ( doorObj !== child &&
                            ((box1.max.x + 1) > box2.min.x) && (box2.max.x > (box1.min.x - 1)) && 
                            ((box1.max.y + 1) > box2.min.y) && (box2.max.y > (box1.min.y - 1)) &&
                            ((box1.max.z + 1) > box2.min.z) && (box2.max.z > (box1.min.z - 1))){
                            hcomp.push(child);
                        }      
                        child.getObjectByName("trims").material.emissive.setHex(trimCalor);
                    }
                }
            })

            if (hcomp.length > 0) {
                doorObj.getObjectByName("trims").material.emissive.setHex(0x00FFFF);
                params.isDoorOverlap = true;
            }
            hcomp.forEach((child) => {
                child.getObjectByName("trims").material.emissive.setHex(0x00FFFF);
            })
        }
    }
}

export const centerAlignWallComponent = (e,flag) => {
    handleComponentPositionOnDimensionChange(undefined, true);
    cuBuilding.DoorCSG();
    updateWallCompDimValue();
    const_var.scene.remove(const_var.scene.getObjectByName("fDoorArrows"));
    const_var.scene.remove(const_var.scene.getObjectByName("bDoorArrows"));
    const_var.newDoorsArray.map((comp)=>{
        if (comp.userData.wallName === params.activeWall) {
            if( comp.position.x < 3 && comp.position.x > -3 ){                          
                if (comp.position.z > 0 && flag==undefined) Arrows.centerVerticalDoorArrow(comp.position, comp.height, comp.userData.wallName,comp.uniqueId,comp.uniqueId);
                else if (comp.position.z < 0 && flag==undefined) Arrows.centerVerticalDoorArrowB(comp.position, comp.height, comp.userData.wallName,comp.uniqueId,comp.uniqueId);
            }
        }
   })
}

export const updateWallCompDimValue = () => {
    const_var.entry_points.map((value,key)=>{
        let component = const_var.scene.getObjectByName(value.component_name+value.uniqueId);
        calculateDoorDistance(component);
    })
}

async function addDoorEditIcon1(door) {

    return new Promise((resolve, reject) => {
        const loader = new SVGLoader();
        loader.load(editLogoSVG, function (data) {

            const paths = data.paths;
            const doorIcon = new THREE.Group();

            for (let i = 0; i < paths.length; i++) {

                const path = paths[i];

                const material = new THREE.MeshBasicMaterial({
                    color: path.color,
                    side: THREE.DoubleSide,
                    depthWrite: false
                });

                const shapes = SVGLoader.createShapes(path);

                for (let j = 0; j < shapes.length; j++) {

                    const shape = shapes[j];
                    const geometry = new THREE.ShapeGeometry(shape);
                    const mesh = new THREE.Mesh(geometry, material);
                    doorIcon.add(mesh);

                }

            }

            const bb = new THREE.Box3().setFromObject(door);
            const topRightCord = door.worldToLocal(bb.max);
            doorIcon.scale.set(0.0005, 0.0005, 0.0005);
            doorIcon.rotation.set(3.14, 1.57, 0);
            doorIcon.position.set(topRightCord.x, topRightCord.y - 0.2, topRightCord.z - 1.5);
            doorIcon.uniqueId = door.uniqueId;
            doorIcon.DoorObj = door.DoorObj;
            const_var.b_d_g_b_O_cN.push(doorIcon);
            door.add(doorIcon);
            resolve(doorIcon);

        },
            function (xhr) {

                console.log((xhr.loaded / xhr.total * 100) + '% loaded');

            },
            function (error) {
                console.log('An error happened: ' + error);
                reject();
            });
    });

}

export const RemoveDoorComponent = (unique, compType, compName, wall, componentsize, parentkey, childkey, nestedkey, entry_rotation, entry_position, is_trim, is_edit,isBreezewayFrame) => {
    // console.log({unique,compType, compName, wall,componentsize,parentkey,childkey,entry_rotation,entry_position,is_trim})
       
    let checkName;
    if(const_var.scene.getObjectByName(compType + unique)!=undefined){
    checkName = const_var.scene.getObjectByName(compType + unique).userData.compType.includes("_frameout")
    }
    if(const_var.scene.getObjectByName(compName + unique)!=undefined){
    checkName = const_var.scene.getObjectByName(compName + unique).userData.compType.includes("_frameout")
    }
    if(const_var.scene.getObjectByName(is_trim + unique)!=undefined){
        checkName = const_var.scene.getObjectByName(is_trim + unique).userData.compType.includes("_frameout")
    }
        if (componentsize != undefined) {
            if (is_trim != undefined) {

                const_var.scene.remove(const_var.scene.getObjectByName(is_trim + unique));
            } else {
                const_var.scene.remove(const_var.scene.getObjectByName(compName + unique));
            }

        } else {
            const_var.scene.remove(const_var.scene.getObjectByName(compType + unique));
        }
        for (var i = 0; i < const_var.newDoorsArray.length; i++) {
            if (const_var.newDoorsArray[i].uniqueId == unique) {
                const_var.removed_door_wallname = const_var.newDoorsArray[i].userData.wallName;
                const_var.removed_door = const_var.newDoorsArray.splice(i, 1)[0];
            }
        }

        const_var.entry_points.map((val, i) => {
            if (val.uniqueId == unique) {
                const_var.removed_door_entry_point = const_var.entry_points.splice(i, 1)[0];
            }
        })
        
        cuBuilding.cP();
        //const_var.showComponentEditBox = false;
        params.wallPos = "Select";
        // updateDoorWalls();
        // doDoorlegsCSG(true);
        // doDoorHatChannelsCSG();
        // if(params.p_w_c_n==true)
        // {
        //     updateDoorWainscot()
        // }
        Arrows.updateHorizantalArrowsforDoors();
        LeanHArrows.updateHorizantalLeanArrowsforDoors();
        Arrows.centerVerticalDoorArrow('', '','','');
        Arrows.centerVerticalDoorArrowB('', '','','');

        if (wall == undefined) wall = const_var.removed_door_wallname;
        let checkWallValue = const_var.checkWallClose[wall];
        var trimCalor = params.p_t_c.replace("#", "0x");
        if(checkWallValue == 'utility') {
          trimCalor = params.p_t_c.replace("#", "0x");
        } else {
          if (params[checkWallValue]=='Open') {
            trimCalor = '0x94989B';
          }
       }
    var data = const_var.scene.children;
    let posVal = [];
    data.forEach(function(Geometry) {

        if(Geometry.name.includes("standard_door") == true || Geometry.name.includes("standard_walkin") == true || Geometry.name.includes("standard_trim_door") == true || Geometry.name.includes("diamond_window_walkin") == true || Geometry.name.includes("9_lite_walkin") == true || Geometry.name.includes("solid_walkin") == true || Geometry.name.includes("half_sectional_door_design") == true || Geometry.name.includes("double_delux_walkin") == true || Geometry.name.includes("sectional_door") == true || Geometry.name.includes("sectional_with_window_door") == true || Geometry.name.includes("11_lite_walkin") == true || Geometry.name.includes("4_lite_walkin") == true || Geometry.name.includes("5_lite_walkin") == true){
           
            if(Geometry.userData.wallName == const_var.removed_door_wallname){

                if(const_var.callMesure == true){
                calculateDoorDistance(Geometry);
                }

            if(Geometry.rotation._y == 3.141592653589793 || Geometry.rotation._y == 0){
                posVal.push(Geometry.position.z)
            }else{
                posVal.push(Geometry.position.x)
            }
            }
        }
    })

    posVal.sort(function(a, b){return a-b });
    let pos,rightDoor,leftDoor,distance,compWidth,rightDoorGeo,leftDoorGeo;
    params.trimVal = -2
    if(posVal.length > 0 && const_var.scene.getObjectByName(const_var.removed_door_wallname) != undefined){
        for (let i = 0; i < posVal.length; i++) {     
            for (let j = 0; j < data.length; j++) {
                if(data[j].name != undefined){
                    if(data[j].name.includes("standard_door") == true || data[j].name.includes("standard_walkin") == true || data[j].name.includes("standard_trim_door") == true || data[j].name.includes("diamond_window_walkin") == true || data[j].name.includes("9_lite_walkin") == true || data[j].name.includes("solid_walkin") == true || data[j].name.includes("half_sectional_door_design") == true || data[j].name.includes("double_delux_walkin") == true || data[j].name.includes("sectional_door") == true || data[j].name.includes("sectional_with_window_door") == true || data[j].name.includes("11_lite_walkin") == true || data[j].name.includes("4_lite_walkin") == true || data[j].name.includes("5_lite_walkin") == true){          
                        // if(data[j].name.includes("standard_door") || data[j].name.includes("standard_trim_door")){
                        //     compWidth = (Number(data[j].size.split('x')[0]))*1
                        // }else{
                        //     compWidth = (Number(data[j].size.split('x')[0]))*0.084
                        // }
                        compWidth = data[j].width

                        if(data[j].userData.wallName == const_var.removed_door_wallname ){
                            if(data[j].rotation._y == 3.141592653589793 || data[j].rotation._y == 0){
                                pos = data[j].position.z
                            }else{
                                pos = data[j].position.x
                            }
                        }
                        if(posVal[i] == pos && data[j].userData.wallName == const_var.removed_door_wallname && (posVal[i+1] != undefined || posVal.length == 1)){
                            rightDoor = pos+(compWidth/2)
                            rightDoorGeo = data[j]
                        }
            
                        if(posVal[i+1] == pos && data[j].userData.wallName == const_var.removed_door_wallname){
                         leftDoor = pos-(compWidth/2)
                         leftDoorGeo = data[j]
                        }

                        if(posVal[i+1] != undefined){
                          distance = rightDoor - leftDoor
                        }
                          
                    }
                }
            }
            if(distance <= -0.9){
                if(params.trimVal < -0.9){
                    rightDoorGeo.getObjectByName("trims").material.emissive.setHex(trimCalor);
                }
                leftDoorGeo.getObjectByName("trims").material.emissive.setHex(trimCalor);
            }else{
                if(posVal.length > 1){
                rightDoorGeo.getObjectByName("trims").material.emissive.setHex(0x00FFFF);
                }
                if(distance == undefined){
                    rightDoorGeo.getObjectByName("trims").material.emissive.setHex(trimCalor);
                    }
                if(leftDoorGeo != undefined){
                leftDoorGeo.getObjectByName("trims").material.emissive.setHex(0x00FFFF);
                }
            }

            params.trimVal = distance
            if(i==(posVal.length-2)){break;}
        }
    }

        if (componentsize != undefined) {
            loadDoorComponent(compType, compName, wall, componentsize, parentkey, childkey, nestedkey, entry_rotation, entry_position, is_edit,undefined,isBreezewayFrame, unique);
        }
}

export const removeAlltheComponent = (flag) => {

    if (const_var.entry_points.length > 0) {
        const_var.entry_points.map((val, i) => {
            // console.log(val,i,"const_var.entry_points")
            const_var.scene.remove(const_var.scene.getObjectByName(val.component_name + val.uniqueId));
            const_var.newDoorsArray.splice(i, 1);
            // const_var.entry_points.splice(i,1);
        })
        const_var.newDoorsArray = [];
        const_var.b_d_g_b_O_cN = [];
        // cuBuilding.cP();
        const_var.showComponentEditBox = false;
    }
    if (const_var.entry_points.length > 0) {
        //for (var ii = 0; ii <= const_var.entry_points.length - 1; ii++) {
            const_var.newDoorsArray=[];
            const_var.entry_points = [];
            const_var.sum = 0;
            cuBuilding.cP();
        //}
    }
        updateDoorWalls();
        doDoorlegsCSG();
        doDoorHatChannelsCSG();
        if(params.p_w_c_n==true)
        {
            updateDoorWainscot()
        }
        // if (const_var.callMesure)
        Arrows.updateHorizantalArrowsforDoors();
        LeanHArrows.updateHorizantalLeanArrowsforDoors();
        Arrows.centerVerticalDoorArrow('', '','','');
        Arrows.centerVerticalDoorArrowB('', '','','');
    
}
export const removeWallSpecificComponent = (...wallname) => {
    // if (const_var.entry_points.length > 0) {
    //     let filterObj = '';
    //     let checkForFrame = '';
    //     // console.log(wallname,"wallname")
    //     for (let nameofwall of wallname) {
    //         let filterObj = const_var.entry_points.filter(data => data.component_wall_name == nameofwall);
    //         let checkForFrame = filterObj.filter(data =>data.entry_type.includes('_frameout') == true);
    //         for (var i = 0; i <= filterObj.length - 1; i++) {
    //             if (filterObj[i].component_wall_name == nameofwall) {
                    
    //                 for (var ii = 0; ii <= const_var.entry_points.length - 1; ii++) {
    //                     if (const_var.entry_points[ii].component_wall_name == nameofwall  && filterObj[i].entry_type.includes('_frameout') != true) {

    //                         if(const_var.scene.getObjectByName(filterObj[i].component_name + filterObj[i].uniqueId) != undefined && const_var.scene.getObjectByName(filterObj[i].component_name + filterObj[i].uniqueId).name == const_var.entry_points[ii].uniqueName){
    //                             const_var.newDoorsArray.splice(ii, 1);
    //                             const_var.entry_points.splice(ii, 1);
    //                         }
    //                         const_var.scene.remove(const_var.scene.getObjectByName(filterObj[i].component_name + filterObj[i].uniqueId));
    //                     }else
    //                     {
    //                         if ("c_b_f_w" != filterObj[i].component_wall_name && "c_b_b_w" != filterObj[i].component_wall_name && "c_b_l_w" != filterObj[i].component_wall_name && "c_b_r_w" != filterObj[i].component_wall_name && "F_L_F_W" != filterObj[i].component_wall_name && "F_L_L_W" != filterObj[i].component_wall_name && "F_L_R_W" != filterObj[i].component_wall_name && "L_L_L_W" != filterObj[i].component_wall_name && "L_L_F_W" != filterObj[i].component_wall_name && "L_L_B_W" != filterObj[i].component_wall_name && "R_L_R_W" != filterObj[i].component_wall_name && "R_L_F_W" != filterObj[i].component_wall_name && "R_L_B_W" != filterObj[i].component_wall_name && "B_L_S_W" != filterObj[i].component_wall_name && "B_L_F_W" != filterObj[i].component_wall_name && "B_L_B_W" != filterObj[i].component_wall_name && filterObj[i].entry_type.includes('_frameout') == true) {

    //                             if (const_var.entry_points[ii].component_wall_name == nameofwall) {
        
    //                                 if(const_var.scene.getObjectByName(filterObj[i].component_name + filterObj[i].uniqueId) != undefined && const_var.scene.getObjectByName(filterObj[i].component_name + filterObj[i].uniqueId).name == const_var.entry_points[ii].uniqueName){
    //                                     const_var.newDoorsArray.splice(ii, 1);
    //                                     const_var.entry_points.splice(ii, 1);
    //                                 }
    //                                 const_var.scene.remove(const_var.scene.getObjectByName(filterObj[i].component_name + filterObj[i].uniqueId));
    //                             }
                            
                            
    //                     }
    //                     }
    //                 }
                    
    //             }
                
                
                
    //         }

    //     }
    //     //const_var.b_d_g_b_O_cN = [];
    //     cuBuilding.cP();
    //     const_var.showComponentEditBox = false;
        
    //     updateDoorWalls();
    //     doDoorlegsCSG();
    //     doDoorHatChannelsCSG();
    //     if(params.p_w_c_n==true)
    //     {
    //         updateDoorWainscot()
    //     }
    //    if(const_var.callMesure == true){
    //     Arrows.updateHorizantalArrowsforDoors();
    //     LeanHArrows.updateHorizantalLeanArrowsforDoors();
    //     const_var.entry_points.map((val, i) => {
    //             Arrows.centerVerticalDoorArrow(val.entry_position, val.entry_dimension_height,val.component_wall_name,val.uniqueId);
    //             Arrows.centerVerticalDoorArrowB(val.entry_position, val.entry_dimension_height,val.component_wall_name,val.uniqueId);
    //     })
    // }
    // }
    for (let nameofwall of wallname) {
        let filterObj = const_var.entry_points.filter(data => data.component_wall_name == nameofwall);
        let checkForFrame = filterObj.filter(data =>data.entry_type.includes('_frameout') == true);
        for (var i = 0; i <= filterObj.length - 1; i++) {
            if (filterObj[i].component_wall_name == nameofwall) {
                for (var ii = 0; ii <= const_var.entry_points.length - 1; ii++) {
                    if (const_var.entry_points[ii].component_wall_name == nameofwall  && filterObj[i].entry_type.includes('_frameout') != true) {

                        if(const_var.scene.getObjectByName(filterObj[i].component_name + filterObj[i].uniqueId) != undefined && const_var.scene.getObjectByName(filterObj[i].component_name + filterObj[i].uniqueId).name == const_var.entry_points[ii].uniqueName){
                            const index = const_var.newDoorsArray.findIndex((e) => e.userData.uniqueId == const_var.entry_points[ii].uniqueId)
                            // const_var.newDoorsArray.splice(ii, 1);
                            // const_var.entry_points.splice(ii, 1);
                            
                            const_var.entry_points.splice(ii, 1);                                
                            const_var.newDoorsArray.splice(index, 1);

                            const_var.scene.remove(const_var.scene.getObjectByName(filterObj[i].component_name + filterObj[i].uniqueId));
                        }
                    }else
                    {
                        if ("F_S_L_R_W" != filterObj[i].component_wall_name && "c_b_f_w" != filterObj[i].component_wall_name && "c_b_b_w" != filterObj[i].component_wall_name && "c_b_l_w" != filterObj[i].component_wall_name && "c_b_r_w" != filterObj[i].component_wall_name && "F_L_F_W" != filterObj[i].component_wall_name && "F_L_L_W" != filterObj[i].component_wall_name && "F_L_R_W" != filterObj[i].component_wall_name && "L_L_L_W" != filterObj[i].component_wall_name && "L_L_F_W" != filterObj[i].component_wall_name && "L_L_B_W" != filterObj[i].component_wall_name && "R_L_R_W" != filterObj[i].component_wall_name && "R_L_F_W" != filterObj[i].component_wall_name && "R_L_B_W" != filterObj[i].component_wall_name && "B_L_S_W" != filterObj[i].component_wall_name && "B_L_F_W" != filterObj[i].component_wall_name && "B_L_B_W" != filterObj[i].component_wall_name && filterObj[i].entry_type.includes('_frameout') == true) {

                            if (const_var.entry_points[ii].component_wall_name == nameofwall) {
    
                                if(const_var.scene.getObjectByName(filterObj[i].component_name + filterObj[i].uniqueId) != undefined && const_var.scene.getObjectByName(filterObj[i].component_name + filterObj[i].uniqueId).name == const_var.entry_points[ii].uniqueName){
                                    const index = const_var.newDoorsArray.findIndex((e) => e.userData.uniqueId == const_var.entry_points[ii].uniqueId)
                                    // const_var.newDoorsArray.splice(ii, 1);
                                    // const_var.entry_points.splice(ii, 1);
                                    
                                    const_var.entry_points.splice(ii, 1);                                
                                    const_var.newDoorsArray.splice(index, 1);
                                    const_var.scene.remove(const_var.scene.getObjectByName(filterObj[i].component_name + filterObj[i].uniqueId));
                                }
                            }                                                
                        }
                    }
                }
                
            }
            
        }

       if(const_var.callMesure == true){
         Arrows.updateHorizantalArrowsforDoors();
         LeanHArrows.updateHorizantalLeanArrowsforDoors();
       }
        Arrows.centerVerticalDoorArrow('', '','','');
        Arrows.centerVerticalDoorArrowB('', '','','');
    }
}

export const removeWallSpecificComponentForLeanto = (...wallname) => {
    if (const_var.entry_points.length > 0) {
        let filterObj = '';
        let checkForFrame = '';
        // console.log(wallname,"wallname")
        for (let nameofwall of wallname) {
            let filterObj = const_var.entry_points.filter(data => data.component_wall_name == nameofwall);
            let checkForFrame = filterObj.filter(data =>data.entry_type.includes('_frameout') == true);
            for (var i = 0; i <= filterObj.length - 1; i++) {
                if (filterObj[i].component_wall_name == nameofwall) {
                    
                    for (var ii = 0; ii <= const_var.entry_points.length - 1; ii++) {
                        if (const_var.entry_points[ii].component_wall_name == nameofwall) {

                            if(const_var.scene.getObjectByName(filterObj[i].component_name + filterObj[i].uniqueId) != undefined && const_var.scene.getObjectByName(filterObj[i].component_name + filterObj[i].uniqueId).name == const_var.entry_points[ii].uniqueName){
                                const index = const_var.newDoorsArray.findIndex((e) => e.userData.uniqueId == const_var.entry_points[ii].uniqueId)
                                const_var.entry_points.splice(ii, 1);                                
                                const_var.newDoorsArray.splice(index, 1);
                            }
                        }
                    }
                    const_var.scene.remove(const_var.scene.getObjectByName(filterObj[i].component_name + filterObj[i].uniqueId));
                }
            }

        }
        //const_var.b_d_g_b_O_cN = [];
        cuBuilding.cP();
        const_var.showComponentEditBox = false;
        
        updateDoorWalls();
        doDoorlegsCSG();
        doDoorHatChannelsCSG();
        if(params.p_w_c_n==true)
        {
            updateDoorWainscot()
        }
       if(const_var.callMesure == true){
        Arrows.updateHorizantalArrowsforDoors();
        LeanHArrows.updateHorizantalLeanArrowsforDoors();
        Arrows.centerVerticalDoorArrow('', '','','');
        Arrows.centerVerticalDoorArrowB('', '','','');
    }
    }
}

export const RemovePorchComponent = (Val,newFlag) => { 
    let filterRecordFLF = const_var.entry_points.filter(data => data.component_wall_name == "F_L_F_W");
    let filterRecordBLS = const_var.entry_points.filter(data => data.component_wall_name == "B_L_S_W");
    let filterRecordLLL = const_var.entry_points.filter(data => data.component_wall_name == "L_L_L_W");
    let filterRecordRLR = const_var.entry_points.filter(data => data.component_wall_name == "R_L_R_W");
    let compWidth;

    if(filterRecordFLF.length > 0){
        // console.log(filterRecordFLF,"filterRecordFLF");
        for (let i = 0; i < filterRecordFLF.length; i++) {  
            if(filterRecordFLF[i].component_wall_name.includes("standard_door") || filterRecordFLF[i].component_wall_name.includes("standard_trim_door")){
                compWidth = (Number(filterRecordFLF[i].name.split('x')[0]))*1
            }else{
                compWidth = (Number(filterRecordFLF[i].name.split('x')[0]))*0.084
            }
            if(params.add_left_front_lean_porch == false){
                if(filterRecordFLF[i].entry_position.x - (compWidth/2) < -(params.p_w/2)){
                   RemoveDoorComponent(filterRecordFLF[i].uniqueId, filterRecordFLF[i].component_name);
                }
                
            }

            if(params.add_right_front_lean_porch == false){
                if(filterRecordFLF[i].entry_position.x + (compWidth/2) > (params.p_w/2)){
                   RemoveDoorComponent(filterRecordFLF[i].uniqueId, filterRecordFLF[i].component_name);
                }
                
            }
        }
    }

    if(filterRecordBLS.length > 0){
        for (let i = 0; i < filterRecordBLS.length; i++) {  
            if(filterRecordBLS[i].component_wall_name.includes("standard_door") || filterRecordBLS[i].component_wall_name.includes("standard_trim_door")){
                compWidth = (filterRecordBLS[i].name.split('x')[0])*1
            }else{
                compWidth = (filterRecordBLS[i].name.split('x')[0])*0.084
            }
            if(params.add_left_back_lean_porch == false){
                if(filterRecordBLS[i].entry_position.x - (compWidth/2) < -(params.p_w/2)){
                   RemoveDoorComponent(filterRecordBLS[i].uniqueId, filterRecordBLS[i].component_name);
                }
                
            }

            if(params.add_right_back_lean_porch == false){
                if(filterRecordBLS[i].entry_position.x + (compWidth/2) > (params.p_w/2)){
                   RemoveDoorComponent(filterRecordBLS[i].uniqueId, filterRecordBLS[i].component_name);
                }
                
            }
        }
    }

    if(filterRecordLLL.length > 0){
        for (let i = 0; i < filterRecordLLL.length; i++) {  
            if(filterRecordLLL[i].component_wall_name.includes("standard_door") || filterRecordLLL[i].component_wall_name.includes("standard_trim_door")){
                compWidth = (filterRecordLLL[i].name.split('x')[0])*1
            }else{
                compWidth = (filterRecordLLL[i].name.split('x')[0])*0.084
            }
            if(params.add_left_back_lean_porch == false){
                if(filterRecordLLL[i].entry_position.z - (compWidth/2) < -(params.p_d/2)){
                   RemoveDoorComponent(filterRecordLLL[i].uniqueId, filterRecordLLL[i].component_name);
                }
                
            }

            if(params.add_left_front_lean_porch == false){
                if(filterRecordLLL[i].entry_position.z + (compWidth/2) > (params.p_d/2)){
                   RemoveDoorComponent(filterRecordLLL[i].uniqueId, filterRecordLLL[i].component_name);
                }
                
            }
        }
    }

    if(filterRecordRLR.length > 0){
        for (let i = 0; i < filterRecordRLR.length; i++) {  
            if(filterRecordRLR[i].component_wall_name.includes("standard_door") || filterRecordRLR[i].component_wall_name.includes("standard_trim_door")){
                compWidth = (filterRecordRLR[i].name.split('x')[0])*1
            }else{
                compWidth = (filterRecordRLR[i].name.split('x')[0])*0.084
            }
            if(params.add_right_back_lean_porch == false){
                if(filterRecordRLR[i].entry_position.z - (compWidth/2) < -(params.p_d/2)){
                   RemoveDoorComponent(filterRecordRLR[i].uniqueId, filterRecordRLR[i].component_name);
                }
                
            }

            if(params.add_right_front_lean_porch == false){
                if(filterRecordRLR[i].entry_position.z + (compWidth/2) > (params.p_d/2)){
                   RemoveDoorComponent(filterRecordRLR[i].uniqueId, filterRecordRLR[i].component_name);
                }
                
            }
        }
    }

}

const cupolaCylinder = () => {
    let cylinderRadius = 2;
    const Geometry = new THREE.CylinderGeometry( cylinderRadius, cylinderRadius, params.p_d, 32);
    const Material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    const cupolaCylinder = new THREE.Mesh( Geometry, Material );
    cupolaCylinder.name = "cupolaCylinder";
    cupolaCylinder.position.set(0.05,params.p_h+((params.p_r_p/12)*(params.p_w/2))+1.5,0);
    cupolaCylinder.rotation.x = Math.PI/2
    cupolaCylinder.visible = false;
    cupolaCylinder.material.transparent = true;
    cupolaCylinder.material.opacity = 0.3;
    const_var.scene.add(cupolaCylinder)
}    

export const addCupola = async (cupolaType,width,length,dimension,price,cupolaId,cupolaName,position,isType) => {
    // console.log({cupolaType,width,length,dimension,price,cupolaId,position,isType},"addCupola");
    let totalLength = 0, NumberOFcupolas = 0, cupolasZPosition = [], isSpaceAvailable = false;
    let rightCupola,leftCupola,distance,preDistance,preCupola,lastDistance,lastCupola,zPosition,cupolaWidth;

    const_var.cupolas && const_var.cupolas.forEach((cupola) => {
        cupolasZPosition.push(cupola.position.z)
        totalLength += cupola.width;
        NumberOFcupolas += 1;
    })  

    cupolasZPosition.sort((a, b) =>  a - b );
    if(totalLength + parseInt(width)+ NumberOFcupolas + 1 >= params.p_d) {
        const_var.isCupolaAdded = false;
        const_var.isShowAlert = true;
        const_var.alertUsedFor = "noSpaceToAddCupola";
        return
    } 
    
    const gltfLoader = new GLTFLoader();
    const { default: cupolaModel } = require(`../../assets/models/${cupolaType}.gltf`);
    // const gltf = await gltfLoader.loadAsync(/*baseUrl+*/cupolaModel);
    const gltf = await gltfLoader.loadAsync(`${baseUrl}${cupolaModel}`);

    if (gltf != undefined && gltf.scene !== undefined) {
        const cupola  = gltf.scene;
        cupola.scale.set(width/48,width/48,width/48);
        cupola.position.set(0,params.p_h + ((params.p_r_s == "1")?0.490:0 ) + ((params.p_w/2)*(params.p_r_p/12))-(0.15*width),0);
        cupola.name = "cupola" + const_var.cupolaCount;
        cupola.width = width;
        cupola.length = length;
        cupola.dimension = dimension;
        cupola.uniqueId = const_var.cupolaCount;
        const bb = new THREE.Box3().setFromObject(cupola);
        cupola.userData.editIconPos = cupola.worldToLocal(new THREE.Vector3(bb.getCenter(new THREE.Vector3()).x, bb.max.y, bb.getCenter(new THREE.Vector3()).z));
        cupola.userData.uniqueId = cupola.uniqueId;

        if(const_var.cupolas && const_var.cupolas.length > 0 && (isType !== 'editmode')){
            for (let i = 0; i < const_var.cupolas.length; i++) {   
                for (let j = 0; j < const_var.cupolas.length; j++) {
                    cupolaWidth = const_var.cupolas[j].width;
                    zPosition = const_var.cupolas[j].position.z;
                    
                    if(cupolasZPosition[0] == zPosition ){
                        preDistance = (params.p_d / -2) - (zPosition - ( cupolaWidth / 2 ));
                        preCupola = zPosition - ( cupolaWidth / 2 );
                    }

                    if(cupolasZPosition[i] == zPosition ){
                        rightCupola = zPosition + ( cupolaWidth / 2 );
                    }
        
                    if(cupolasZPosition[i+1] == zPosition ){
                        leftCupola = zPosition - ( cupolaWidth / 2 );
                    }
                    if(cupolasZPosition[i+1] != undefined){
                        distance = rightCupola - leftCupola;
                    }

                    if(cupolasZPosition[cupolasZPosition.length - 1] == zPosition ){
                        lastDistance = (zPosition - ( params.p_d/2)) + (cupolaWidth / 2);
                        lastCupola = zPosition + ( cupolaWidth / 2 );
                    }
                }
            
                if(Math.abs(preDistance) >  cupola.width + 2){
                    cupola.position.z = preCupola - cupola.width/2 - 1;
                    isSpaceAvailable = true;
                    break;
                }

                if(Math.abs(distance) > cupola.width + 2){
                    cupola.position.z = rightCupola + cupola.width/2 + 1;
                    isSpaceAvailable = true;
                    break;
                }

                if(Math.abs(lastDistance) > cupola.width + 2){
                    cupola.position.z = lastCupola + cupola.width/2 + 1;
                    isSpaceAvailable = true;
                    break;
                }
            }
        }

        if (isType === 'editmode' || isType === 'update' && (position !== undefined)){
            cupola.position.z = position.z;
            isSpaceAvailable = true;
            params.cupola =true;
        } 

        if (isSpaceAvailable || const_var.cupolas.length === 0){
            
            if (cupolaType === "with_windows"){
                const cupolaOuterCube =cupola.getObjectByName("cupola_insibile_cube");
                cupolaOuterCube.visible = false;
            }
            const cupolaRoof =cupola.getObjectByName("cupola_roof");
                await applyCupolaRoofColor(cupolaRoof);
            const cupolaRoofTrim =cupola.getObjectByName("cupola_roof_trim");
                await applyCupolaRoofColor(cupolaRoofTrim);
            const cupolaBase =cupola.getObjectByName("cupola_base");
                await applyCupolaWallColor(cupolaBase,8,(params.p_v_w ? 5.1*width : 8),Math.PI/-2);
            const cupolaBaseConnector =cupola.getObjectByName("base_connector");
                await applyCupolaWallColor(cupolaBaseConnector,8,8,0);
            const cupolaTrims =cupola.getObjectByName("cupola_trims");
                await applyCupolaWallColor(cupolaTrims,10,10,Math.PI/-2 );
            const cupolaShutter =cupola.getObjectByName("cupola_shutters");
                await applyCupolaTrimColor(cupolaShutter,0,0,0);
            const cupolaWindowFrame =cupola.getObjectByName("cupola_window_farme");
                await applyCupolaTrimColor(cupolaWindowFrame);


            const cupolaRoofColor = params.p_r_c.replace("#","0x");
            cupolaRoof.material.color.setHex( cupolaRoofColor );
            cupolaRoof.material.needsUpdate = true;

            await const_var.scene.add( cupola );
            // console.log({cupola});
            const_var.cupolas.push(cupola);
            cupola.children.forEach( mesh => const_var.cupolaForMove.push(mesh));
            const_var.cupolaCount++;
            const_var.cupolaUniqueId = cupola.uniqueId;
            const_var.cupolaEntries.push({'cupolaName':cupolaName,'cupolaType':cupolaType,'name': cupola.name, 'uniqueId': cupola.uniqueId, 'cupola_price':price, 'dimension': dimension, 'width':width, 'length':length, 'position': cupola.position,'cupolaId':cupolaId,})
            const_var.isCupolaAdded = false;
            //if (!isType ||  isType === 'update' ||  isType === 'oldQuote')
            store.dispatch(setPriceForCupola(true,cupola.uniqueId));
        } else {
            const_var.isCupolaAdded = false;
            const_var.isShowAlert = true;
            const_var.alertUsedFor = "noSpaceToAddCupola"
            store.dispatch(setPriceForCupola(false));
        }
     }
    }
    
  export async function applyCupolaWallColor(geometry, repeatX,repeatY,rotation) {
        if (!geometry) return;
        // const textureImg = (params.p_r_s=="1") ? verticalTexture : horizontalTexture;
        const textureImg = horizontalTexture;
        let material = geometry.material;
        let  cWallTexture = loader.load(`${baseUrl}${textureImg}` , (wallTexture) => {
            cWallTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
            material.map = wallTexture;
            material.map.wrapS = THREE.RepeatWrapping;
            material.map.wrapT = THREE.RepeatWrapping;
            if (params.p_v_w) {
                material.map.repeat.set(repeatX,repeatY);
            } else {
                material.map.rotation = rotation;
                material.map.repeat.set(1,repeatY);
            }
        const cupolaWallColor = params.p_w_c.replace("#","0x");
            material.color.setHex( cupolaWallColor );
            material.needsUpdate = true;
    
    })
    } 

   async function applyCupolaTrimColor(geometry) {
        if (!geometry) return;
        let cupolaTrimColor = params.p_t_c.replace("#","0x");
        geometry.material.color.setHex( cupolaTrimColor );
        geometry.material.needsUpdate = true;
    }

   async function applyCupolaRoofColor(geometry) {
        if (!geometry) return;
        const textureImg = (params.p_r_s=="1") ? verticalTexture : horizontalTexture;
        let  roofTexture = loader.load(`${baseUrl}${textureImg}`, (texture) => {
            roofTexture.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 5);
            geometry.material.map = texture;
            geometry.material.map.wrapS = THREE.RepeatWrapping;
            geometry.material.map.wrapT = THREE.RepeatWrapping;
            if(params.p_r_s=="1") {
                geometry.material.map.rotation = Math.PI/2;
                geometry.material.map.repeat.set(0.1,1);
            } else  {
                geometry.material.map.rotation = Math.PI;
                geometry.material.map.repeat.set(1,0.1);
            }
            const cupolaRoofColor = params.p_r_c.replace("#","0x");
            geometry.material.color.setHex( cupolaRoofColor );
           geometry.material.needsUpdate = true;
    
        })
    } 
    

export const updataOrRemoveCupola = (uniqueId,cupolaType,Width,length,dimension,price,cupolaId,cupolaName,position,isType, oldCupolaWidth)=> {
    // console.log({uniqueId,cupolaType,Width,length,dimension,price,cupolaId,position,isType,oldCupolaWidth});

    if (isType === 'update') {
        let totalLength = 0, NumberOFcupolas = 0, cupolasZPosition = [];
        const_var.cupolas && const_var.cupolas.forEach((cupola) => {
            cupolasZPosition.push(cupola.position.z)
            totalLength += cupola.width;
            NumberOFcupolas += 1;
        })  
        
        cupolasZPosition.sort((a, b) =>  a - b );
        if((totalLength + parseInt(Width)+ NumberOFcupolas + 1) - oldCupolaWidth >= params.p_d) {
            const_var.showCupolaEditBox = false;
            const_var.isShowAlert = true;
            const_var.alertUsedFor = "noSpaceToUpdateCupola";
            return
        } 
    }

    const_var.scene.remove(const_var.scene.getObjectByName("cupola" + uniqueId));

    for (let i = 0; i < const_var.cupolas.length; i++) {
        if (const_var.cupolas[i].uniqueId == uniqueId) {
             const_var.cupolas.splice(i, 1);
        }
    }

    const_var.cupolaEntries.map((cupola, index) => {
        if (cupola.uniqueId == uniqueId) {
            const_var.cupolaEntries.splice(index, 1);
        }
    })

    let filterCupola = const_var.cupolaForMove.filter(c=> c.parent.uniqueId  == uniqueId)
    for (let ii = 0; ii <= filterCupola.length - 1; ii++) {
        if (filterCupola[ii].parent.uniqueId  == uniqueId) {
            for (let jj = 0; jj <= const_var.cupolaForMove.length - 1; jj++) {
                if (const_var.cupolaForMove[jj].parent.uniqueId  == uniqueId){
                    const_var.cupolaForMove.splice(jj, 1);
                }
            }
        }
    }

    if (isType === 'remove') heighLightCupola();
    cuBuilding.cP();
    if (Width) addCupola(cupolaType,Width,length,dimension,price,cupolaId,cupolaName,position,isType);
}

export const heighLightCupola = () => {

    let cupolasZPosition = [];
    const_var.cupolas.forEach((cupola) => {
        cupolasZPosition.push(cupola.position.z)
    })  
    cupolasZPosition.sort((a, b) =>  a - b );
    
    let cupolaPostionZ,distance,cupolaWidth,rightSide,leftSide,rightCupola,leftCupola;
    let  heilightAtDistance = -2
    if(cupolasZPosition.length > 0){
        for (let i = 0; i < cupolasZPosition.length; i++) {     
            for (let j = 0; j < const_var.cupolas.length; j++) {
                cupolaWidth = const_var.cupolas[j].width
                cupolaPostionZ = const_var.cupolas[j].position.z
            
                if ( cupolasZPosition[i] == cupolaPostionZ  && (cupolasZPosition[i+1] != undefined || cupolasZPosition.length == 1)){
                    rightSide = cupolaPostionZ+(cupolaWidth/2)
                    rightCupola = const_var.cupolas[j]
                }
    
                if ( cupolasZPosition[i+1] == cupolaPostionZ ){
                    leftSide = cupolaPostionZ-(cupolaWidth/2)
                    leftCupola = const_var.cupolas[j]
                }
    
                if ( cupolasZPosition[i+1] != undefined ){
                    distance = rightSide - leftSide
                }
            }
            
            if (distance <= -0.9) {
                const roofColor = params.p_r_c.replace("#","0x");
                const wallColor = params.p_w_c.replace("#","0x");
                
                if(heilightAtDistance < -0.9) {
                    rightCupola.getObjectByName("cupola_roof").material.color.setHex(roofColor);
                    rightCupola.getObjectByName("cupola_base").material.color.setHex(wallColor);
                    rightCupola.getObjectByName("base_connector").material.color.setHex(wallColor);
                    rightCupola.getObjectByName("cupola_trims").material.color.setHex(wallColor);
                }
                leftCupola.getObjectByName("cupola_roof").material.color.setHex(roofColor);
                leftCupola.getObjectByName("cupola_base").material.color.setHex(wallColor);
                leftCupola.getObjectByName("base_connector").material.color.setHex(wallColor);
                leftCupola.getObjectByName("cupola_trims").material.color.setHex(wallColor);
            } else {
                if (cupolasZPosition.length > 1) {
                    rightCupola.getObjectByName("cupola_roof").material.color.setRGB(1,0,0);
                    rightCupola.getObjectByName("cupola_base").material.color.setRGB(1,0,0);
                    rightCupola.getObjectByName("base_connector").material.color.setRGB(1,0,0);
                    rightCupola.getObjectByName("cupola_trims").material.color.setRGB(1,0,0);
                    // rightCupola.getObjectByName("cupola_roof").material.color.setHex(0x00FFFF);
                    // rightCupola.getObjectByName("cupola_base").material.color.setHex(0x00FFFF);
                    // rightCupola.getObjectByName("base_connector").material.color.setHex(0x00FFFF);
                    // rightCupola.getObjectByName("cupola_trims").material.color.setHex(0x00FFFF);
                    const_var.isheilightCupola = true;
                }
                if (leftCupola != undefined) {
                    // leftCupola.getObjectByName("cupola_roof").material.color.setHex(0x00FFFF);
                    // leftCupola.getObjectByName("cupola_base").material.color.setHex(0x00FFFF);
                    // leftCupola.getObjectByName("base_connector").material.color.setHex(0x00FFFF);
                    // leftCupola.getObjectByName("cupola_trims").material.color.setHex(0x00FFFF);
                    leftCupola.getObjectByName("cupola_roof").material.color.setRGB(1,0,0);
                    leftCupola.getObjectByName("cupola_base").material.color.setRGB(1,0,0);
                    leftCupola.getObjectByName("base_connector").material.color.setRGB(1,0,0);
                    leftCupola.getObjectByName("cupola_trims").material.color.setRGB(1,0,0);
                    const_var.isheilightCupola = true;
                }
            }
            heilightAtDistance = distance
            if(i==(cupolasZPosition.length-2)) break;
        }
    }
}

const moveCupola = (ip) => {
    let restrictCupola = const_var.cupola.width / 2;
    if (ip) const_var.cupola.position.z = Math.min(Math.max(ip["z"]-(restrictCupola), (params.p_d - 1 ) / -2) + restrictCupola , (params.p_d - 2) / 2 - restrictCupola);
    
    heighLightCupola();
}

export const handlCupolaPositionOnDimensionChange = (str) => {
    if (const_var.cupolaEntries.length > 0) {
        if(str == "h" || str == "w" || str == 'roofPitch'){
            const_var.cupolaEntries.map( (cupola) => {  
                let height = params.p_h + ((params.p_r_s == "1")? 0.490 : 0 ) +((params.p_w/2)*(params.p_r_p/12))- ((cupola.width)*0.15);
                 let getCupola = const_var.scene.getObjectByName(cupola.name);
                 getCupola.position.set(cupola.position.x, height,cupola.position.z);     
            })
        }
        if (str == "l") {
            const cupolaEntries = JSON.parse(JSON.stringify(const_var.cupolaEntries))
            let mainPosArray = [], mainPos = 0 ,preCupolaWidth;
            for (let i = 0; i <= cupolaEntries.length - 1; i++) {
            let cupola = const_var.scene.getObjectByName(cupolaEntries[i].name);
                let zPosition = 0;
                if (str == "l") {
                    let cupolaWidth = cupolaEntries[i].width
                    if (mainPos == 0) {
                        zPosition = (-params.p_d / 2) + ((cupolaWidth/2) + 1);
                    } else {
                        zPosition = Number(mainPosArray[mainPos - 1]) + ((cupolaWidth/2)+(preCupolaWidth/2) + 1);
                    }
                    if (zPosition + (cupolaWidth / 2 ) + 1 >= params.p_d / 2 ) {
                        updataOrRemoveCupola(cupolaEntries[i].uniqueId,);
                        continue;
                    }
                    if (cupola != undefined) {
                        cupola.position.set(cupola.position.x, cupola.position.y, zPosition);
                        mainPosArray[mainPos] = zPosition;
                        mainPos++;
                        preCupolaWidth = cupolaWidth;
                    }
                } else {
                    if (cupola != undefined) {
                        cupola.position.set(-params.p_w / 2 - 0.1, cupola.position.y, cupola.position.z);
                    }
                }
            }
         }
    }
}

export const removeAllCupolas = () => {
    if (const_var.cupolaEntries.length > 0) {
        const_var.cupolaEntries.map((cupola) => const_var.scene.remove(const_var.scene.getObjectByName(cupola.name)));
        const_var.cupolaEntries = [];
        const_var.cupolaForMove = [];
        const_var.cupolas = [];
        const_var.showCupolaEditBox = false;
        params.cupola = false;
        cuBuilding.cP();
    }
}

export const loadCupolaInEditMode = async (cupolaEntries,isOldQuotes,oldCupolasPrice,oldCupolasQty) => {
    // console.log({cupolaEntries,isOldQuotes});
    if (cupolaEntries !== undefined && cupolaEntries.length>0) {
        for(var i=0;i<=cupolaEntries.length-1;i++) {
            await addCupola(cupolaEntries[i].cupolaType, cupolaEntries[i].width,cupolaEntries[i].length, cupolaEntries[i].dimension, cupolaEntries[i].cupola_price,cupolaEntries[i].cupolaId, cupolaEntries[i].cupolaName, cupolaEntries[i].position,'editmode');
        }
    } 

    if (isOldQuotes === "Yes"){
        let cupola,cupolaType,dimension,width,length,price,cupolaId,cupolaName;
        cupola = params.cupolaObj;
        cupolaId = cupola.id;
        dimension = cupola.structure;
        width = Number(dimension.split("x")[0]);
        length = Number(dimension.split("x")[1]);
        price = parseFloat(oldCupolasPrice) / Number(oldCupolasQty);
        cupolaType = "without_windows";
        cupolaName = "Without Windows";
    
        if (const_var.scene.getObjectByName("cupola1") == undefined) {
            await addCupola(cupolaType,width,length,dimension,price,cupolaId,cupolaName,const_var.cupolaPosition.cupola1Pos,'editmode');
        }

        if (params.cupolaQty == 2 || params.cupolaQty == 3){
            if (const_var.scene.getObjectByName("cupola2") == undefined){
                await addCupola(cupolaType,width,length,dimension,price,cupolaId,cupolaName,const_var.cupolaPosition.cupola2Pos,'editmode');
            } 
        }

        if(params.cupolaQty == 3){
            if (const_var.scene.getObjectByName("cupola3") == undefined) {
                await addCupola(cupolaType,width,length,dimension,price,cupolaId,cupolaName,const_var.cupolaPosition.cupola3Pos,'editmode');
            } 
        }
    }   
}

export const aDw = async (a, b) => {
    /*const onWhitchWall = 'front';
    const wallCmpName1 = a;
    const doorWidth = Number(6);
    const doorHeight = Number(6);
    const gltfLoader = new GLTFLoader();
    var url = DoorOBJ;*/

};
export const cDW = (a, b, c) => {
    a = a || "";
    b = b || 0;
    c = c || false;
    const_var.calCulationVal = 0;
    const_var.calCulationValIndex = 0;
    var d = new THREE.Vector3();
    const_var.scene.getObjectByName("UserCamera").getWorldDirection(d);
    var e = Math.atan2(d.x, d.z);
    var f = const_var.scene.getObjectByName("UserCamera").position;
    var g = 1;
    var h = 0;
    var i = 0;
    var j = 0;
    var k = 0;
    if (f.x < params.p_w / 2 && f.x > params.p_w / -2 && f.y < params.p_h / 2 && f.y > 0 && f.z < params.p_d / 2 && f.z > params.p_d / -2) g = -1;
    var l = 0;
    var m = 0;
    var n = 0;
    var o = 0;
    params.p_u_t = parseInt(params.p_u_t);
    const_var.place_d = false;
    const_var.chk_place = true;
    if (params.b_h_t1) n = params.b_h_t1Depth;

    if (params.b_h_t3) o = params.b_h_t3Depth;

    if (params.b_h_t2 || params.b_h_t5)
        l =
            params.p_b_c_b_l_f == "Close" || params.p_b_c_b_l == "Close" || params.add_storage_check == true || a.indexOf("Frameout") != -1
                ? params.lean_p_w
                : 0;
    if (params.b_h_t4 || params.b_h_t6)
        m =
            params.p_b_c_b_r_f == "Close" || params.p_b_c_b_r == "Close" || params.add_storage_check_right == true || a.indexOf("Frameout") != -1
                ? params.leanR_p_w
                : 0;

    if (Math.abs(e * g) < Math.PI / 4 || Math.abs(e * g) > (3 * Math.PI) / 4)
        if (Math.abs(e) > Math.PI / 2) {
            const_var.main_posGet = "front";
            j = (params.p_d / 2 + n) * g + g * g;
            k = 0.5 * Math.PI * Math.abs(g - 1);
        } else {
            const_var.main_posGet = "back";
            j = (params.p_d / -2 - o) * g - g * g;
            k = 0.5 * Math.PI * (g + 1);
        }
    else if (f.x > 0) {
        const_var.main_posGet = "right";
        h = (params.p_w / 2 + m) * g + g * g;
        k = (Math.PI / 2) * g;
    } else {
        const_var.main_posGet = "left";
        h = (params.p_w / -2 - l) * g - g * g;
        k = (Math.PI / -2) * g;
    }
    var p = const_var.scene.getObjectByName(a).clone();
    p.Basename = const_var.scene.getObjectByName(a).Basename;
    if ("Trim" != p.name.substring(0, 4)) {
        if (const_var.scene.getObjectByName(a).material) p.material = const_var.scene.getObjectByName(a).material.clone();
        params.trimkit = false;
    } else {
        params.trimkit = true;
        for (var i = 0; i <= p.material.materials.length - 1; i++) {
            if (p.material.materials[i].name == "Trimkit-center") {
                p.material.materials[i].color.setHex(0xffffff);
                p.material.materials[i].side = THREE.DoubleSide;
            }
        }
    }
    p.name = a + "-clone";
    p.visible = true;
    var next_val1 = p.name.replace("-clone", "");

    if (next_val1.indexOf("Frameout") > -1) {
        next_val1 = next_val1.split("_");
        var next_val = next_val1[1];
    } else {
        next_val1 = next_val1.split("_");
        var next_val = next_val1[1];
    }
    if (
        params.p_b_t != "2" &&
        (params.p_a_g_r_u_d.indexOf("_Frameout") > 0 || params.p_d_c.indexOf("_Frameout") > 0 || params.p_w_cc.indexOf("_Frameout") > 0)
    ) {
        if (p.name.substring(0, 4) != "Trim") {
            for (var i = 0; i <= p.material.materials.length - 1; i++) {
                if (
                    p.material.materials[i].name == "RollUpDoor" ||
                    p.material.materials[i].name == "Door" ||
                    p.material.materials[i].name == "Glass"
                ) {
                    p.material.materials[i].transparent = true;
                    p.material.materials[i].opacity = 0.01;
                    p.material.materials[i].side = THREE.DoubleSide;
                    p.material.materials[i].alphaTest = false;
                    p.material.materials[i].clearAlpha = 1;
                }
            }
            const_var.walls.push(p);
        } else {
            if (next_val1.indexOf("Frameout") > 0) {
                p.material.materials[0].transparent = true;
                p.material.materials[0].opacity = 0.01;
                p.material.materials[0].side = THREE.DoubleSide;
                p.material.materials[0].alphaTest = false;
                p.material.materials[0].clearAlpha = 1;
            }
        }
    }

    const_var.main_posGet = params.DoorLocOnEdit != "" && params.DoorLocOnEdit != undefined ? params.DoorLocOnEdit : const_var.main_posGet;
    var kk = 0;
    var kd = 0;
    var kw = 0;
    var spN = p.name.replace(/[^A-Za-z]/g, "");
    var spN1 = spN.split("X");

    var newDwVal = next_val1[0].match(/\d+/g);
    p.actual_val = next_val == undefined || next_val == "Frameout" ? newDwVal[0] / 12 + "X" + newDwVal[1] / 12 : next_val;
    p.splitName = spN1[0];
    p.splitFullName = spN1[0] + "_" + spN1[1];
    p.New_name = p.name;
    p.uniqueId = const_var.sum;
    p.pos = const_var.main_posGet;
    var barnPos = "";
    if (params.UpdatedDoorPosOnEdit != "" && params.UpdatedDoorPosOnEdit != undefined) {
        p.BarnPos = params.UpdatedDoorPosOnEdit;
    } else {
        if (
            (params.p_b_c_b_l == "Close" || params.add_storage_check == true || p.name.indexOf("Frameout") != -1) &&
            p.BarnPos != "left" &&
            p.pos == "left" &&
            const_var.scene.getObjectByName("b_h_t5").visible == true
        ) {
            //console.log("params.UpdatedDoorPosOnEdit");
            barnPos = "BarnLeft";
        } else if (
            (params.p_b_c_b_r == "Close" || params.add_storage_check_right == true || p.name.indexOf("Frameout") != -1) &&
            p.BarnPos != "right" &&
            p.pos == "right" &&
            const_var.scene.getObjectByName("b_h_t6").visible == true
        ) {
            barnPos = "BarnRight";
        } else if (params.centerstorage == true || (params.p_f_w != "Close" && params.p_u_c == true)) {
            barnPos = p.pos == "front" ? "FrontS" : p.pos;
        } else {
            barnPos = p.pos;
        }
        p.BarnPos = barnPos;

        if (
            params.b_l_t_s == "FrontL" ||
            params.b_l_t_s == "FrontR" ||
            params.b_l_t_s == "BackL" ||
            params.b_l_t_s == "BackR" ||
            params.b_l_t_s == "LeftS" ||
            params.b_l_t_s == "RightS"
        ) {
            p.BarnPos = params.b_l_t_s;
        }
    }
    //console.log(p.BarnPos,"params.UpdatedDoorPosOnEdit");
    var wallSide = p.BarnPos.toLowerCase();
    if (wallSide == "barnleft") {
        wallSide = "ltleft";
    } else if (wallSide == "barnright") {
        wallSide = "ltright";
    }
    if ("wind" != p.name.substring(0, 4)) {
        var doorSpace = true;
        var remainingSpace = 0;
        if (const_var.ManageDoorArrar[wallSide].length > 0) {
            //ArrowNDistance.checkNewDoorPlace(wallSide.toLowerCase());
        } else {
            const_var.ManageDoorPlaces[wallSide.toLowerCase()][p.Basename] = true;
        }
        if (const_var.ManageDoorArrar[wallSide] != undefined && const_var.ManageDoorArrar[wallSide].length > 0) {
            //ArrowNDistance.checkNewDoorPlace(wallSide.toLowerCase());
            remainingSpace = Math.abs(Math.max.apply(Math, const_var.ManageSpaces[wallSide]));
            if (remainingSpace - 2 < p.actual_val.split("X")[0]) {
                doorSpace = false;
            }
            if (const_var.ManageDoorPlaces[wallSide.toLowerCase()][p.Basename] == false || doorSpace == false) {
            }
        }
    }
    if (params.p_b_t == "2" || params.add_left_lean == true || params.add_right_lean == true) {
        var l_t_h = 0;
        var actual_height = params.p_h;
        if (wallSide === "ltleft") actual_height = params.lean_p_h;
        else if (wallSide === "ltright") actual_height = params.leanR_p_h;

        if (params.p_r_s == "4" || params.p_r_s == "5") {
            l_t_h = actual_height - 5;
        } else {
            l_t_h = actual_height;
        }

        if (
            p.actual_val.split("X")[1] > l_t_h &&
            (wallSide == "frontl" ||
                wallSide == "backl" ||
                wallSide == "frontr" ||
                wallSide == "backr" ||
                wallSide == "ltleft" ||
                wallSide == "ltright")
        ) {
            const_var.isShowAlert = true;
            const_var.alertUsedFor = "overHeightLeanTo";
            RmComtFmLtgDr(const_var.doorUniqueId, const_var.doorUniqueId, "", "");
            //bootbox.hideAll();
            const_var.c_k_p_d = false;
            //bBaM(" No more doors can be added with selected dimensions");
            return false;
        }
    }
    if (p.actual_val.split("X")[1] == params.p_h && (const_var.main_posGet == "left" || const_var.main_posGet == "right")) {
        const_var.isShowAlert = true;
        const_var.alertUsedFor = "noSpaceAvailableOnWall";
        const_var.c_k_p_d = false;
        return false;
    }

    const_var.newCustomSizesArray = {
        "45_degree_angle": 0,
        certified_cost: 0,
        chain_hoist: 0,
        color_cost: 0,
        cost: 0,
        header_bar: 0,
        header_seal: 0,
        height: 8,
        id: 55374,
        is_certified: 0,
        is_chain_hoist: 0,
        is_header_bar: 0,
        is_header_seal: 0,
        map_id: 13,
        name: "8x8",
        side_cost: 0,
        vertical_side_cost: 0,
        width: 8,
    };
    if (params.p_a_g_r_u_d !== "Select" && const_var.c_k_p_d == true) {
        if (params.p_a_g_r_u_d_c_s != "Select" && params.p_a_g_r_u_d_c_s1 != "Select") {
            params.doorType = "CustomFrameout";
        }
        var entry_price = 0;
        var garageColorCalculation = 0;
        if (const_var.WallClass[p.pos] == "fend" || const_var.WallClass[p.pos] == "bend") {
            entry_price = const_var.CustomDoorArr[params.doorType]["EndPrice"][params.p_a_g_r_u_d];
            garageColorCalculation =
                const_var.garageDoorColor[params.g_d_c_id].percentage_of_cost > 0
                    ? (entry_price * const_var.garageDoorColor[params.g_d_c_id].percentage_of_cost) / 100
                    : const_var.garageDoorColor[params.g_d_c_id].cost;
        } else {
            entry_price = const_var.CustomDoorArr[params.doorType]["SidePrice"][params.p_a_g_r_u_d];
            garageColorCalculation =
                const_var.garageDoorColor[params.g_d_c_id].percentage_of_cost > 0
                    ? (entry_price * const_var.garageDoorColor[params.g_d_c_id].percentage_of_cost) / 100
                    : const_var.garageDoorColor[params.g_d_c_id].cost;
        }
        const_var.d_w_a_r.push({
            name: params.p_a_g_r_u_d.replace("X", ""),
            orignalname:
                params.p_a_g_r_u_d_c_s != "Select" && params.p_a_g_r_u_d_c_s1 != "Select"
                    ? params.p_a_g_r_u_d.replace("_Frameout", "")
                    : params.p_a_g_r_u_d,
            price: const_var.CustomDoorArr[params.doorType]["EndPrice"][params.p_a_g_r_u_d],
            SidePrice: const_var.CustomDoorArr[params.doorType]["SidePrice"][params.p_a_g_r_u_d],
            type: "garage",
            label_text: params.doorType == "CustomFrameout" ? "Custom Frameout" : "Garage Door",
            display_text: "Door",
            uniqueId: undefined,
            check: false,
            trimkit: params.trimkit,
            trimkitPrice:
                const_var.CustomDoorArr[params.doorType]["TrimKit"][params.p_a_g_r_u_d] != undefined
                    ? const_var.CustomDoorArr[params.doorType]["TrimKit"][params.p_a_g_r_u_d]
                    : 0,
            chain_hoist: params.chain_hoist,
            chain_hoist_price:
                const_var.CustomDoorArr[params.doorType]["Chain_Hoist"] != undefined &&
                    const_var.CustomDoorArr[params.doorType]["Chain_Hoist"][params.p_a_g_r_u_d] != undefined
                    ? const_var.CustomDoorArr[params.doorType]["Chain_Hoist"][params.p_a_g_r_u_d]
                    : 0,
            certified_door: params.certified_door,
            certified_door_price:
                const_var.CustomDoorArr[params.doorType]["Certified_Cost"] != undefined &&
                    const_var.CustomDoorArr[params.doorType]["Certified_Cost"][params.p_a_g_r_u_d] != undefined
                    ? const_var.CustomDoorArr[params.doorType]["Certified_Cost"][params.p_a_g_r_u_d]
                    : 0,
            automatic_openers: params.automatic_openers,
            automatic_openers_price:
                const_var.CustomDoorArr[params.doorType]["Automatic_Openers_Cost"] != undefined &&
                    const_var.CustomDoorArr[params.doorType]["Automatic_Openers_Cost"][params.p_a_g_r_u_d] != undefined
                    ? const_var.CustomDoorArr[params.doorType]["Automatic_Openers_Cost"][params.p_a_g_r_u_d]
                    : 0,
            header_seal: params.header_seal,
            header_seal_price:
                const_var.CustomDoorArr[params.doorType]["Header_Seal"] != undefined &&
                    const_var.CustomDoorArr[params.doorType]["Header_Seal"][params.p_a_g_r_u_d] != undefined
                    ? const_var.CustomDoorArr[params.doorType]["Header_Seal"][params.p_a_g_r_u_d]
                    : 0,
            doorType: params.doorType,
            garageDoor_color_Obj: const_var.garageDoorColor[params.g_d_c_id],
            garageDoor_color_price: garageColorCalculation,
            BarnPos: p.BarnPos,
            pos: undefined,
        });
        kk++;

        var fname = params.p_a_g_r_u_d.indexOf("_Frameout") > 0 ? "garage_door_frameout" : "garage_door";
        if (params.f_r_m_o_t != "Select" && params.f_r_m_o_t1 != "Select") {
            var entry_dimension_height = params.f_r_m_o_t1.split("_Frameout")[0];
            var entry_dimension_width = params.f_r_m_o_t;
            if (const_var.CustomDoorArr[params.doorType]["Object"][params.p_a_g_r_u_d] != undefined) {
                const_var.CustomDoorArr[params.doorType]["Object"][params.p_a_g_r_u_d].name = "Custom";
            }
        } else if (params.p_a_g_r_u_d_c_s != "Select" && params.p_a_g_r_u_d_c_s1 != "Select") {
            params.doorType = "CustomFrameout";
            var entry_dimension_height = params.p_a_g_r_u_d_c_s1;
            var entry_dimension_width = params.p_a_g_r_u_d_c_s;
            const_var.CustomDoorArr[params.doorType]["Object"][params.p_a_g_r_u_d].name = "Custom";
        } else {
            var entry_dimension_height = 0;
            var entry_dimension_width = 0;
        }

        garageColorCalculation = garageColorCalculation == undefined ? 0 : garageColorCalculation;
        if (params.certified_door == true) {
            entry_price =
                const_var.CustomDoorArr[params.doorType]["Certified_Cost"] != undefined &&
                    const_var.CustomDoorArr[params.doorType]["Certified_Cost"][params.p_a_g_r_u_d] != undefined
                    ? parseInt(entry_price) + parseInt(const_var.CustomDoorArr[params.doorType]["Certified_Cost"][params.p_a_g_r_u_d])
                    : entry_price + 0;
        }
        if (const_var.WallClass[p.pos] == "fend" && params.p_u_c == true) {
            var newPosForCom = "ufend";
        } else {
            var newPosForCom = const_var.WallClass[p.pos];
        }

        let enty_pos = "";
        let enty_rot = "";
        if (params.DoorPosOnEdit != "") {
            enty_pos = params.DoorPosOnEdit;
        } else {
            enty_pos = p.position;
        }
        if (params.DoorRotOnEdit != null) {
            enty_rot = params.DoorRotOnEdit;
        } else {
            enty_rot = k;
        }
        //console.log(enty_rot,"enty_rot",params.DoorRotOnEdit,k,"params.DoorRotOnEdit")
        if (params.p_a_g_r_u_d_c_s != "Select" && params.p_a_g_r_u_d_c_s1 != "Select") {
            params.doorType = "CustomFrameout";
            fname = "garage_door";

            var e_p = const_var.CustomDoorArr[params.doorType]["TrimKit"][params.p_a_g_r_u_d_c_s + "X" + params.p_a_g_r_u_d_c_s1 + "_Frameout"];
            var h_p =
                const_var.CustomDoorArr[params.doorType]["Header_Seal"] != undefined
                    ? const_var.CustomDoorArr[params.doorType]["Header_Seal"][params.p_a_g_r_u_d_c_s + "X" + params.p_a_g_r_u_d_c_s1 + "_Frameout"]
                    : "";
            var c_p =
                const_var.CustomDoorArr[params.doorType]["Chain_Hoist"] != undefined
                    ? const_var.CustomDoorArr[params.doorType]["Chain_Hoist"][params.p_a_g_r_u_d_c_s + "X" + params.p_a_g_r_u_d_c_s1 + "_Frameout"]
                    : "";
            var d_p =
                const_var.CustomDoorArr[params.doorType]["Automatic_Openers_Cost"] != undefined
                    ? const_var.CustomDoorArr[params.doorType]["Automatic_Openers_Cost"][
                    params.p_a_g_r_u_d_c_s + "X" + params.p_a_g_r_u_d_c_s1 + "_Frameout"
                    ]
                    : "";
            const_var.CustomDoorArr[params.doorType]["Object"][params.p_a_g_r_u_d_c_s + "X" + params.p_a_g_r_u_d_c_s1 + "_Frameout"][
                "45_degree_angle"
            ] = e_p;
            const_var.entry_points.push({
                entry_type: fname,
                entry_doorNewType: const_var.editComponentDimension,
                entry_location: newPosForCom,
                entry_dimension_height: entry_dimension_height,
                entry_trim_kit_price: e_p,
                entry_dimension_width: entry_dimension_width,
                uniqueId: p.uniqueId,
                entry_price: entry_price,
                entry_size: const_var.CustomDoorArr[params.doorType]["Object"][params.p_a_g_r_u_d],
                name: params.p_a_g_r_u_d.replace("_Frameout", ""),
                entry_note: params.extra_notes,
                garage_door_color: params.g_d_c,
                entry_quantity: kk,
                entry_trim_kit: params.trimkit,
                entry_header_seal: params.header_seal,
                entry_certified: params.certified_door,
                entry_chain_hoist: params.chain_hoist,
                entry_is_header_seal: params.header_seal,
                entry_is_certified: params.certified_door,
                entry_is_chain_hoist: params.chain_hoist,
                entry_position: enty_pos,
                entry_rotation: enty_rot,
                entry_chain_hoist_price: c_p,
                entry_header_seal_price: h_p,
                extra_component_key: p.BarnPos,
                entry_component_location: const_var.entry_component_location[p.BarnPos],
                entry_automatic_openers: params.automatic_openers,
                entry_is_automatic_openers: params.automatic_openers,
                entry_automatic_openers_price: d_p,
                entry_garageDoor_color_Obj: const_var.garageDoorColor[params.g_d_c_id],
                entry_garageDoor_color_price: garageColorCalculation,
            });
        } else if (const_var.editComponentDimension == "CustomGarageSize") {
            if (entry_price == undefined) {
                entry_price = 0;
            }

            if (fname == "garage_door_frameout") {
                const_var.newCustomSizesArray.name = "Custom";
            } else {
                const_var.newCustomSizesArray.name = params.p_a_g_r_u_d;
            }
            //const_var.customEntrySize.name = params.p_a_g_r_u_d;
            const_var.newCustomSizesArray.width = parseInt(params.p_a_g_r_u_d.split("X")[0]);
            const_var.newCustomSizesArray.height = parseInt(params.p_a_g_r_u_d.split("X")[1]);
            const_var.entry_points.push({
                entry_type: fname,
                entry_doorNewType: const_var.editComponentDimension,
                entry_location: newPosForCom,
                entry_dimension_height: entry_dimension_height,
                entry_trim_kit_price:
                    const_var.CustomDoorArr[params.doorType]["TrimKit"][params.p_a_g_r_u_d] == undefined
                        ? 0
                        : const_var.CustomDoorArr[params.doorType]["TrimKit"][params.p_a_g_r_u_d],
                entry_dimension_width: entry_dimension_width,
                uniqueId: p.uniqueId,
                entry_price: entry_price,
                entry_size: const_var.newCustomSizesArray,
                name: params.p_a_g_r_u_d,
                entry_note: params.extra_notes,
                garage_door_color: params.g_d_c,
                entry_quantity: kk,
                entry_trim_kit: params.trimkit,
                entry_header_seal: params.header_seal,
                entry_certified: params.certified_door,
                entry_chain_hoist: params.chain_hoist,
                entry_is_header_seal: params.header_seal,
                entry_is_certified: params.certified_door,
                entry_is_chain_hoist: params.chain_hoist,
                entry_position: enty_pos,
                entry_rotation: enty_rot,
                entry_chain_hoist_price:
                    const_var.CustomDoorArr[params.doorType]["Chain_Hoist"] != undefined &&
                        const_var.CustomDoorArr[params.doorType]["Chain_Hoist"][params.p_a_g_r_u_d] != undefined
                        ? const_var.CustomDoorArr[params.doorType]["Chain_Hoist"][params.p_a_g_r_u_d]
                        : 0,
                entry_automatic_openers_price:
                    const_var.CustomDoorArr[params.doorType]["Automatic_Openers_Cost"] != undefined &&
                        const_var.CustomDoorArr[params.doorType]["Automatic_Openers_Cost"][params.p_a_g_r_u_d] != undefined
                        ? const_var.CustomDoorArr[params.doorType]["Automatic_Openers_Cost"][params.p_a_g_r_u_d]
                        : 0,
                entry_header_seal_price:
                    const_var.CustomDoorArr[params.doorType]["Header_Seal"] != undefined &&
                        const_var.CustomDoorArr[params.doorType]["Header_Seal"][params.p_a_g_r_u_d] != undefined
                        ? const_var.CustomDoorArr[params.doorType]["Header_Seal"][params.p_a_g_r_u_d]
                        : 0,
                extra_component_key: p.BarnPos,
                entry_component_location: const_var.entry_component_location[p.BarnPos],
                entry_automatic_openers: params.automatic_openers,
                entry_is_automatic_openers: params.automatic_openers,
                entry_garageDoor_color_Obj: const_var.garageDoorColor[params.g_d_c_id],
                entry_garageDoor_color_price: garageColorCalculation,
            });
        } else {
            const_var.entry_points.push({
                entry_type: fname,
                entry_doorNewType: const_var.editComponentDimension,
                entry_location: newPosForCom,
                entry_dimension_height: entry_dimension_height,
                entry_trim_kit_price: const_var.CustomDoorArr[params.doorType]["TrimKit"][params.p_a_g_r_u_d],
                entry_dimension_width: entry_dimension_width,
                uniqueId: p.uniqueId,
                entry_price: entry_price,
                entry_size: const_var.CustomDoorArr[params.doorType]["Object"][params.p_a_g_r_u_d],
                name: params.p_a_g_r_u_d,
                entry_note: params.extra_notes,
                garage_door_color: params.g_d_c,
                entry_quantity: kk,
                entry_trim_kit: params.trimkit,
                entry_header_seal: params.header_seal,
                entry_certified: params.certified_door,
                entry_chain_hoist: params.chain_hoist,
                entry_is_header_seal: params.header_seal,
                entry_is_certified: params.certified_door,
                entry_is_chain_hoist: params.chain_hoist,
                entry_position: enty_pos,
                entry_rotation: enty_rot,
                entry_chain_hoist_price:
                    const_var.CustomDoorArr[params.doorType]["Chain_Hoist"] != undefined
                        ? const_var.CustomDoorArr[params.doorType]["Chain_Hoist"][params.p_a_g_r_u_d]
                        : 0,
                entry_automatic_openers_price:
                    const_var.CustomDoorArr[params.doorType]["Automatic_Openers_Cost"] != undefined &&
                        const_var.CustomDoorArr[params.doorType]["Automatic_Openers_Cost"][params.p_a_g_r_u_d] != undefined
                        ? const_var.CustomDoorArr[params.doorType]["Automatic_Openers_Cost"][params.p_a_g_r_u_d]
                        : 0,
                entry_header_seal_price:
                    const_var.CustomDoorArr[params.doorType]["Header_Seal"] != undefined
                        ? const_var.CustomDoorArr[params.doorType]["Header_Seal"][params.p_a_g_r_u_d]
                        : "",
                extra_component_key: p.BarnPos,
                entry_component_location: const_var.entry_component_location[p.BarnPos],
                entry_automatic_openers: params.automatic_openers,
                entry_is_automatic_openers: params.automatic_openers,
                entry_garageDoor_color_Obj: const_var.garageDoorColor[params.g_d_c_id],
                entry_garageDoor_color_price: garageColorCalculation,
            });
        }
        p.commonDoorType = "garage";
        if (const_var.editComponentDimension != "CustomGarageSize") {
            p.exactDoorDimension =
                params.p_a_g_r_u_d_c_s != "Select" && params.p_a_g_r_u_d_c_s1 != "Select"
                    ? params.p_a_g_r_u_d.replace("_Frameout", "")
                    : params.p_a_g_r_u_d;
        } else {
            p.exactDoorDimension = const_var.editComponentDimension;
            p.exactDoorCustomDimension = params.p_a_g_r_u_d;
        }

        p.doorProperty = {
            trimkit: params.trimkit,
            chain_hoist: params.chain_hoist,
            header_seal: params.header_seal,
            certified_door: params.certified_door,
            entry_note: params.extra_notes,
            garage_door_color: params.g_d_c,
            automatic_openers: params.automatic_openers,
        };
        const_var.door_arry["garage"].push(params.p_a_g_r_u_d);
        //console.log(const_var.entry_points,"const_var.entry_points")
    }
    if (params.p_w_cc !== "Select" && const_var.c_k_p_d == true) {
        const_var.d_w_a_r.push({
            name: params.p_w_cc.replace("X", ""),
            orignalname: params.p_w_cc,
            price: const_var.CustomDoorArr[params.doorType]["EndPrice"][params.p_w_cc],
            SidePrice: const_var.CustomDoorArr[params.doorType]["SidePrice"][params.p_w_cc],
            type: "window",
            label_text: "Window",
            display_text: "Window",
            uniqueId: undefined,
            check: false,
            trimkit: false,
            trimkitPrice: null,
            doorType: params.doorType,
            BarnPos: p.BarnPos,
            pos: undefined,
        });
        kd++;
        var fname = params.p_w_cc.indexOf("_Frameout") > 0 ? "window_frameout" : "window";
        if (const_var.WallClass[p.pos] == "fend" || const_var.WallClass[p.pos] == "bend") {
            var entry_price = const_var.CustomDoorArr[params.doorType]["EndPrice"][params.p_w_cc];
        } else {
            var entry_price = const_var.CustomDoorArr[params.doorType]["SidePrice"][params.p_w_cc];
        }
        if (const_var.WallClass[p.pos] == "fend" && params.p_u_c == true) {
            var newPosForCom = "ufend";
        } else {
            var newPosForCom = const_var.WallClass[p.pos];
        }
        let enty_pos = "";
        let enty_rot = "";
        if (params.DoorPosOnEdit != "") {
            enty_pos = params.DoorPosOnEdit;
        } else {
            enty_pos = p.position;
        }
        if (params.DoorRotOnEdit != null) {
            enty_rot = params.DoorRotOnEdit;
        } else {
            enty_rot = k;
        }
        if (const_var.editComponentDimension == "CustomGarageSize") {
            if (entry_price == undefined) {
                entry_price = 0;
            }
            const_var.newCustomSizesArray.name = params.p_w_cc;
            const_var.newCustomSizesArray.width = params.p_w_cc.split("X")[0];
            const_var.newCustomSizesArray.height = params.p_w_cc.split("X")[1];
            const_var.entry_points.push({
                entry_type: fname,
                entry_doorNewType: const_var.editComponentDimension,
                entry_location: newPosForCom,
                uniqueId: p.uniqueId,
                entry_price: entry_price,
                entry_trim_kit_price: "",
                entry_size: const_var.newCustomSizesArray,
                name: params.p_w_cc,
                entry_note: params.extra_notes,
                garage_door_color: params.g_d_c,
                entry_quantity: kd,
                entry_trim_kit: false,
                entry_certified: false,
                entry_automatic_openers: false,
                entry_chain_hoist: false,
                entry_position: enty_pos,
                entry_rotation: enty_rot,
                extra_component_key: p.BarnPos,
                entry_component_location: const_var.entry_component_location[p.BarnPos],
            });
        } else {
            const_var.entry_points.push({
                entry_type: fname,
                entry_doorNewType: const_var.editComponentDimension,
                entry_location: newPosForCom,
                uniqueId: p.uniqueId,
                entry_price: entry_price,
                entry_trim_kit_price: "",
                entry_size: const_var.CustomDoorArr[params.doorType]["Object"][params.p_w_cc],
                name: params.p_w_cc,
                entry_note: params.extra_notes,
                garage_door_color: params.g_d_c,
                entry_quantity: kd,
                entry_trim_kit: false,
                entry_certified: false,
                entry_automatic_openers: false,
                entry_chain_hoist: false,
                entry_position: enty_pos,
                entry_rotation: enty_rot,
                extra_component_key: p.BarnPos,
                entry_component_location: const_var.entry_component_location[p.BarnPos],
            });
        }
        //b_f_o_J["Window"] = const_var.d_w_a_r;
        p.commonDoorType = "window";
        if (const_var.editComponentDimension != "CustomGarageSize") {
            p.exactDoorDimension = params.p_w_cc;
        } else {
            p.exactDoorDimension = const_var.editComponentDimension;
            p.exactDoorCustomDimension = params.p_w_cc;
        }
        //p.exactDoorDimension = params.p_w_cc;
        const_var.door_arry["window"].push(params.p_w);
    }
    if (params.p_d_c !== "Select" && const_var.c_k_p_d == true) {
        const_var.d_w_a_r.push({
            name: params.p_d_c.replace("X", ""),
            orignalname: params.p_d_c,
            price: const_var.CustomDoorArr[params.doorType]["EndPrice"][params.p_d_c],
            SidePrice: const_var.CustomDoorArr[params.doorType]["SidePrice"][params.p_d_c],
            type: "door",
            label_text: "Walk-in Door",
            display_text: "Walk-in",
            uniqueId: undefined,
            check: false,
            trimkit: false,
            trimkitPrice: null,
            doorType: params.doorType,
            BarnPos: p.BarnPos,
            pos: undefined,
        });
        kw++;
        var fname = params.p_d_c.indexOf("_Frameout") > 0 ? "walkin_frameout" : "walkin";
        if (const_var.WallClass[p.pos] == "fend" || const_var.WallClass[p.pos] == "bend") {
            var entry_price = const_var.CustomDoorArr[params.doorType]["EndPrice"][params.p_d_c];
        } else {
            var entry_price = const_var.CustomDoorArr[params.doorType]["SidePrice"][params.p_d_c];
        }
        if (const_var.WallClass[p.pos] == "fend" && params.p_u_c == true) {
            var newPosForCom = "ufend";
        } else {
            var newPosForCom = const_var.WallClass[p.pos];
        }

        let enty_pos = "";
        let enty_rot = "";
        if (params.DoorPosOnEdit != "") {
            enty_pos = params.DoorPosOnEdit;
        } else {
            enty_pos = p.position;
        }
        if (params.DoorRotOnEdit != null) {
            enty_rot = params.DoorRotOnEdit;
        } else {
            enty_rot = k;
        }
        if (const_var.editComponentDimension == "CustomGarageSize") {
            if (entry_price == undefined) {
                entry_price = 0;
            }
            const_var.newCustomSizesArray.name = params.p_d_c;
            const_var.newCustomSizesArray.width = params.p_d_c.split("X")[0];
            const_var.newCustomSizesArray.height = params.p_d_c.split("X")[1];

            const_var.entry_points.push({
                entry_type: fname,
                entry_doorNewType: const_var.editComponentDimension,
                entry_location: newPosForCom,
                uniqueId: p.uniqueId,
                entry_price: entry_price,
                entry_trim_kit_price: "",
                entry_size: const_var.newCustomSizesArray,
                name: params.p_d_c,
                entry_note: params.extra_notes,
                garage_door_color: params.g_d_c,
                entry_quantity: kw,
                entry_trim_kit: false,
                entry_certified: false,
                entry_automatic_openers: false,
                entry_chain_hoist: false,
                entry_position: enty_pos,
                entry_rotation: enty_rot,
                extra_component_key: p.BarnPos,
                entry_component_location: const_var.entry_component_location[p.BarnPos],
            });
        } else {
            const_var.entry_points.push({
                entry_type: fname,
                entry_doorNewType: const_var.editComponentDimension,
                entry_location: newPosForCom,
                uniqueId: p.uniqueId,
                entry_price: entry_price,
                entry_trim_kit_price: "",
                entry_size: const_var.CustomDoorArr[params.doorType]["Object"][params.p_d_c],
                name: params.p_d_c,
                entry_note: params.extra_notes,
                garage_door_color: params.g_d_c,
                entry_quantity: kw,
                entry_trim_kit: false,
                entry_certified: false,
                entry_automatic_openers: false,
                entry_chain_hoist: false,
                entry_position: enty_pos,
                entry_rotation: enty_rot,
                extra_component_key: p.BarnPos,
                entry_component_location: const_var.entry_component_location[p.BarnPos],
            });
        }
        if (const_var.editComponentDimension != "CustomGarageSize") {
            p.exactDoorDimension = params.p_d_c;
        } else {
            p.exactDoorDimension = const_var.editComponentDimension;
            p.exactDoorCustomDimension = params.p_d_c;
        }

        p.commonDoorType = "door";
        //b_f_o_J["door"] = const_var.d_w_a_r;
        const_var.door_arry["door"].push(params.p_d);
    }
    p.exactDoorName = params.doorType;

    var constant_rollupX = 0.63;
    //add walins door

    if (p.splitName == "window") {
        p.scale.set(p.scale.x * ((p.actual_val.split("X")[0] * 12) / 35), p.scale.y * ((p.actual_val.split("X")[1] * 12) / 50), 0.7);
    }
    if (p.splitName == "walkDoorSolid") {
        p.scale.set((p.actual_val.split("X")[0] / 10) * 3, p.actual_val.split("X")[1] / 7, 0.7);
    }
    if (p.splitName == "garageRollUpDoor") {
        p.scale.set(p.actual_val.split("X")[0] / 10, p.actual_val.split("X")[1] / 10 - p.actual_val.split("X")[1] / 100, 0.7);
    }
    if (p.splitName == "Trimkit") {
    }
    var index = null;

    p.Checkcolor = false;
    p.faceIndex = const_var.d_v_i;
    p.dragableObj = true;
    p.h_value = h;
    var disValTexture1 = params.fourth_center_cost == true ? 0.5 : 1;
    //h, b, j
    var dpos = "";
    if (p.pos == "front" && p.BarnPos == "FrontS") {
        if (params.p_u_t > parseFloat(params.p_d / 2)) {
            dpos = parseFloat(parseInt(params.p_u_t) - parseFloat(const_var.b_M_g_V)) - parseFloat(params.p_d / 2) + disValTexture1;
        } else {
            dpos = -(parseFloat(params.p_d / 2) - parseFloat(parseInt(params.p_u_t) + (0.8 - parseFloat(const_var.b_M_g_V))));
        }
    }
    //        DoorPosOnEdit
    if (const_var.main_posGet == "left") {
        c = [h + 1, b, j, 0];
        if (p.BarnPos == "BarnLeft") {
            if (params.leantoAlignmentLeft == 1) {
                c = [h + 0.8, b, j, 0];
            }
            if (params.leantoAlignmentLeft == 2) {
                c = [h + 0.8, b, params.p_d / 2 / 2, 0];
            }
            if (params.leantoAlignmentLeft == 3) {
                c = [h + 0.8, b, params.p_d / -2 / 2, 0];
            }
        }
    } else if (const_var.main_posGet == "right") {
        c = [h - 1, b, j, 0];
        if (p.BarnPos == "BarnRight") {
            if (params.leantoAlignmentRight == 1) {
                c = [h - 0.8, b, j, 0];
            }
            if (params.leantoAlignmentRight == 2) {
                c = [h - 0.8, b, params.p_d / 2 / 2, 0];
            }
            if (params.leantoAlignmentRight == 3) {
                c = [h - 0.8, b, params.p_d / -2 / 2, 0];
            }
        }
    } else if (const_var.main_posGet == "back") {
        c = [h, b, j + 1, 0];
        if (p.BarnPos == "BackL") {
            //c = [(params.p_w/-2) - 6,b,j+1,0];
            let zPosLine = 0;
            if (params.leantoAlignmentLeft == 1) {
                zPosLine = j;
            }
            if (params.leantoAlignmentLeft == 2) {
                zPosLine = params.p_d / 2 - params.lean_p_d; //(params.p_d - params.lean_p_d)/-2-0.2;
            }
            if (params.leantoAlignmentLeft == 3) {
                zPosLine = params.p_d / -2; //params.p_d/-2-0.2;
            }
            c = [params.p_w / -2 - params.lean_p_w / 2, b, zPosLine + 1, 0];
        }
        if (p.BarnPos == "BackR") {
            //c = [(params.p_w/2) + 6,b,j+1,0];
            let zPosLine = 0;
            if (params.leantoAlignmentRight == 1) {
                zPosLine = j;
            }
            if (params.leantoAlignmentRight == 2) {
                zPosLine = params.p_d / 2 - params.leanR_p_d; //(params.p_d - params.lean_p_d)/-2-0.2;
            }
            if (params.leantoAlignmentRight == 3) {
                zPosLine = params.p_d / -2;
            }
            c = [params.p_w / 2 + params.leanR_p_w / 2, b, zPosLine + 1, 0];
        }
    } else {
        if (params.p_u_c == true && p.BarnPos == "FrontS") {
            c = [h, b, dpos, 0];
        } else {
            c = [h, b, params.p_d / 2, 0];
        }

        if (p.BarnPos == "FrontL") {
            let zPosLine = 0;
            if (params.leantoAlignmentLeft == 2) {
                zPosLine = params.p_d / 2;
            }
            if (params.leantoAlignmentLeft == 3) {
                zPosLine = params.p_d / -2 + params.lean_p_d;
            }
            if (params.leantoAlignmentLeft == 1) {
                zPosLine = params.lean_p_d / 2;
            }
            c = [params.p_w / -2 - params.lean_p_w / 2, b, zPosLine, 0];
        }
        if (p.BarnPos == "LeftS") {
            var disValTexture1 = 0.8;
            var spos = "";
            if (params.leantoAlignmentLeft == 1) {
                if (parseFloat(params.add_storage) > parseFloat(params.lean_p_d / 2)) {
                    spos = parseFloat(parseFloat(params.add_storage) - parseFloat(params.lean_p_d / 2)) + disValTexture1;
                } else {
                    spos = -parseFloat(parseFloat(params.lean_p_d / 2) - parseFloat(params.add_storage)) + disValTexture1;
                }
            }
            if (params.leantoAlignmentLeft == 2) {
                spos = parseFloat(parseFloat(params.p_d / 2) - parseFloat(params.lean_p_d)) + parseFloat(params.add_storage) + disValTexture1; // + disValTexture1;
            }
            if (params.leantoAlignmentLeft == 3) {
                spos = -parseFloat(parseFloat(params.p_d / 2) - parseFloat(params.add_storage)) + disValTexture1;
            }
            c = [params.p_w / -2 - params.lean_p_w / 2, b, spos, 0];
        }
        if (p.BarnPos == "FrontR") {
            let zPosLine = 0;
            if (params.leantoAlignmentRight == 2) {
                zPosLine = params.p_d / 2;
            }
            if (params.leantoAlignmentRight == 3) {
                zPosLine = params.p_d / -2 + params.leanR_p_d;
            }
            if (params.leantoAlignmentRight == 1) {
                zPosLine = params.leanR_p_d / 2;
            }
            c = [params.p_w / 2 + params.leanR_p_w / 2, b, zPosLine, 0];
        }
        if (p.BarnPos == "RightS") {
            var disValTexture1 = 0.8;
            var spos = "";

            if (params.leantoAlignmentRight == 1) {
                if (parseFloat(params.add_storage_right) > parseFloat(params.leanR_p_d / 2)) {
                    spos = parseFloat(parseFloat(params.add_storage_right) - parseFloat(params.leanR_p_d / 2)) + disValTexture1;
                } else {
                    spos = -parseFloat(parseFloat(params.leanR_p_d / 2) - parseFloat(params.add_storage_right)) + disValTexture1;
                }
            }
            if (params.leantoAlignmentRight == 2) {
                spos = parseFloat(parseFloat(params.p_d / 2) - parseFloat(params.leanR_p_d)) + parseFloat(params.add_storage_right) + disValTexture1; // + disValTexture1;
            }
            if (params.leantoAlignmentRight == 3) {
                spos = -parseFloat(parseFloat(params.p_d / 2) - parseFloat(params.add_storage_right)) + disValTexture1;
            }
            c = [params.p_w / 2 + params.leanR_p_w / 2, b, spos, 0];
        }
    }

    c =
        params.DoorPosOnEdit != "" && params.DoorPosOnEdit != null
            ? [params.DoorPosOnEdit.x, params.DoorPosOnEdit.y, params.DoorPosOnEdit.z, params.DoorRotOnEdit]
            : c;
    if (params.DoorRotOnEdit !== "") {
        k = params.DoorRotOnEdit;
    }

    if (c) {
        //isCallingDoor = false;
        if (p.actual_val.split("X")[1] == params.p_h && (const_var.main_posGet == "back" || const_var.main_posGet == "front")) {
            var frontDiv = "";
            var backDiv = "";
            var leftDiv = "";
            var rightDiv = "";
            var finalName = "";
            var finalType = "";
            var header_sealHtml,
                chain_hoistHtml = "";
            if (const_var.main_posGet == "front") {
                const_var.H_d_l_D_r_ar["front"].push(p.uniqueId);

                if (const_var.H_d_l_D_r_ar["front"].length > 1) {
                    const_var.H_d_l_D_r_ar["front"].splice(const_var.H_d_l_D_r_ar["front"].length - 1, 1);
                }
                for (var i = 0; i < const_var.b_d_g_b_O_c.length; i++) {
                    if (
                        "b_B_g_B" != const_var.b_d_g_b_O_c[i].name &&
                        "b_h_t1Bx" != const_var.b_d_g_b_O_c[i].name &&
                        "b_h_t2Bx" != const_var.b_d_g_b_O_c[i].name &&
                        "b_h_t5Bx" != const_var.b_d_g_b_O_c[i].name &&
                        "b_h_t6Bx" != const_var.b_d_g_b_O_c[i].name &&
                        "b_h_t3Bx" != const_var.b_d_g_b_O_c[i].name &&
                        "b_h_t4Bx" != const_var.b_d_g_b_O_c[i].name &&
                        "b_h_t7Bx" != const_var.b_d_g_b_O_c[i].name &&
                        "b_h_t8Bx" != const_var.b_d_g_b_O_c[i].name &&
                        false == const_var.b_d_g_b_O_c[i].name.includes("-EDIT")
                    ) {
                        if (
                            const_var.b_d_g_b_O_c[i].BarnPos == "front" &&
                            const_var.b_d_g_b_O_c[i].pos == "front" &&
                            const_var.b_d_g_b_O_c[i].uniqueId != p.uniqueId
                        ) {
                            const_var.b_d_g_b_O_c[i].visible = false;
                            params[const_var.b_d_g_b_O_c[i].name.replace("-clone", "") + "Qty"]--;
                            const_var.scene.remove(const_var.b_d_g_b_O_c[i]);
                        }
                    }
                }
                var i = const_var.d_w_a_r.length;
                while (i--) {
                    if (const_var.d_w_a_r[i].uniqueId == undefined) {
                        const_var.d_w_a_r[i].uniqueId = p.uniqueId;
                    }
                    if (const_var.d_w_a_r[i].pos == undefined) {
                        const_var.d_w_a_r[i].pos = p.pos;
                    }
                    if (
                        const_var.d_w_a_r[i].BarnPos == "front" &&
                        const_var.d_w_a_r[i].pos == "front" &&
                        const_var.d_w_a_r[i].uniqueId != p.uniqueId
                    ) {
                        const_var.d_w_a_r.splice(i, 1);
                    }
                }
                var ii = const_var.entry_points.length;
                while (ii--) {
                    if (const_var.entry_points[ii].extra_component_key == "front" && const_var.entry_points[ii].uniqueId != p.uniqueId) {
                        const_var.entry_points.splice(ii, 1);
                    }
                }
                var disValTexture = params.fourth_center_cost == true ? 0.5 : 1;
                var dpos = "";
                if (p.pos == "front" && p.BarnPos == "fronts") {
                    if (params.p_u_t > parseFloat(params.p_d / 2)) {
                        dpos = parseFloat(parseInt(params.p_u_t) - parseFloat(const_var.b_M_g_V)) - parseFloat(params.p_d / 2) + disValTexture1;
                    } else {
                        dpos = -(parseFloat(params.p_d / 2) - parseFloat(parseInt(params.p_u_t) + (0.8 - parseFloat(const_var.b_M_g_V))));
                    }
                }
                var vV = params.p_u_c == true && p.BarnPos == "FrontS" ? [0, 0, dpos, 0] : [0, 0, params.p_d / 2, 0];
                if (p.BarnPos == "FrontL") {
                    var vV = [0, 0, params.lean_p_d / 2, 0];
                }
                if (p.BarnPos == "FrontR") {
                    var vV = [0, 0, params.leanR_p_d / 2, 0];
                }
            } else {
                const_var.H_d_l_D_r_ar["back"].push(p.uniqueId);
                if (const_var.H_d_l_D_r_ar["back"].length > 1) {
                    const_var.H_d_l_D_r_ar["back"].splice(const_var.H_d_l_D_r_ar["back"].length - 1, 1);
                }

                for (var i = 0; i < const_var.b_d_g_b_O_c.length; i++) {
                    if (
                        "b_B_g_B" != const_var.b_d_g_b_O_c[i].name &&
                        "b_h_t1Bx" != const_var.b_d_g_b_O_c[i].name &&
                        "b_h_t2Bx" != const_var.b_d_g_b_O_c[i].name &&
                        "b_h_t5Bx" != const_var.b_d_g_b_O_c[i].name &&
                        "b_h_t6Bx" != const_var.b_d_g_b_O_c[i].name &&
                        "b_h_t3Bx" != const_var.b_d_g_b_O_c[i].name &&
                        "b_h_t4Bx" != const_var.b_d_g_b_O_c[i].name &&
                        "b_h_t7Bx" != const_var.b_d_g_b_O_c[i].name &&
                        "b_h_t8Bx" != const_var.b_d_g_b_O_c[i].name &&
                        false == const_var.b_d_g_b_O_c[i].name.includes("-EDIT")
                    ) {
                        if (
                            const_var.b_d_g_b_O_c[i].BarnPos == "back" &&
                            const_var.b_d_g_b_O_c[i].pos == "back" &&
                            const_var.b_d_g_b_O_c[i].uniqueId != p.uniqueId
                        ) {
                            const_var.b_d_g_b_O_c[i].visible = false;
                            params[const_var.b_d_g_b_O_c[i].name.replace("-clone", "") + "Qty"]--;
                            const_var.scene.remove(const_var.b_d_g_b_O_c[i]);
                        }
                    }
                }
                var i = const_var.d_w_a_r.length;
                while (i--) {
                    if (const_var.d_w_a_r[i].uniqueId == undefined) {
                        const_var.d_w_a_r[i].uniqueId = p.uniqueId;
                    }
                    if (const_var.d_w_a_r[i].pos == undefined) {
                        const_var.d_w_a_r[i].pos = p.pos;
                    }
                    if (const_var.d_w_a_r[i].BarnPos == "back" && const_var.d_w_a_r[i].pos == "back" && const_var.d_w_a_r[i].uniqueId != p.uniqueId) {
                        const_var.d_w_a_r.splice(i, 1);
                    }
                }
                var ii = const_var.entry_points.length;
                while (ii--) {
                    if (const_var.entry_points[ii].extra_component_key == "back" && const_var.entry_points[ii].uniqueId != p.uniqueId) {
                        const_var.entry_points.splice(ii, 1);
                    }
                }
                var vV = [0, 0, -params.p_d / 2, Math.PI / 1];
            }

            for (var i = 0; i <= const_var.d_w_a_r.length - 1; i++) {
                if (const_var.main_posGet == "front" || const_var.main_posGet == "back") {
                    const_var.d_w_a_r[i].Finalprice = const_var.d_w_a_r[i].price;
                }
                if (const_var.d_w_a_r[i].uniqueId == undefined) {
                    const_var.d_w_a_r[i].uniqueId = p.uniqueId;
                }
                if (const_var.d_w_a_r[i].pos == undefined) {
                    const_var.d_w_a_r[i].pos = p.pos;
                }
                if (const_var.d_w_a_r[i].orignalname.indexOf("_Frameout") >= 0) {
                    var SplitVar = const_var.d_w_a_r[i].orignalname.split("_Frameout");
                    finalName = SplitVar[0];
                    finalType = const_var.d_w_a_r[i].display_text + " Frameout";
                } else {
                    finalName = const_var.d_w_a_r[i].orignalname;
                    finalType = const_var.d_w_a_r[i].display_text;
                }
            }

            if ("Trim" != p.name.substring(0, 4)) {
                p.position.set(parseFloat(vV[0]), parseFloat(vV[1]), parseFloat(vV[2]));
            } else {
                p.scale.z = p.scale.z + 0.35; //+0.4;
                //p.position.set(parseFloat(c[0]), (parseFloat(c[1])+1), parseFloat(c[2])+0.2);
                //p.position.set(parseFloat(c[0]), (p.actual_val.split("X")[1]/2), parseFloat(c[2])+0.2);
                if (p.pos == "back") {
                    p.position.set(parseFloat(c[0]), p.actual_val.split("X")[1] / 2 - 0.25, parseFloat(c[2]) - 0.1);
                } else {
                    if (c[0] > 0 && (params.p_b_c_b_r == "Close" || params.add_storage_check == true)) {
                        c[0] = c[0] + 0.3;
                    }
                    if (c[0] < 0 && (params.p_b_c_b_l == "Close" || params.add_storage_check_right == true)) {
                        c[0] = c[0] - 0.3;
                    }
                    p.position.set(parseFloat(c[0]), p.actual_val.split("X")[1] / 2 - 0.25, parseFloat(c[2]) + 0.1);
                }
            }
            p.rotation.set(0, parseFloat(vV[3]), 0);
            const_var.i_c_l_g_n = false;
        } else {
            const_var.i_c_l_g_n = true;

            var frontDiv = "";
            var backDiv = "";
            var leftDiv = "";
            var rightDiv = "";
            var finalName = "";
            var finalType = "";
            var header_sealHtml,
                chain_hoistHtml = "";

            for (var i = 0; i <= const_var.d_w_a_r.length - 1; i++) {
                if (const_var.d_w_a_r[i].uniqueId == undefined) {
                    const_var.d_w_a_r[i].uniqueId = p.uniqueId;
                }
                if (const_var.d_w_a_r[i].pos == undefined) {
                    const_var.d_w_a_r[i].pos = p.pos;
                }
                if (const_var.d_w_a_r[i].orignalname.indexOf("_Frameout") >= 0) {
                    var SplitVar = const_var.d_w_a_r[i].orignalname.split("_Frameout");
                    finalName = SplitVar[0];
                    finalType = const_var.d_w_a_r[i].display_text + " Frameout";
                } else {
                    finalName = const_var.d_w_a_r[i].orignalname;
                    finalType = const_var.d_w_a_r[i].display_text;
                }

                if ("Trim" != p.name.substring(0, 4)) {
                    p.position.set(parseFloat(c[0]), parseFloat(c[1]), parseFloat(c[2]));
                } else {
                    p.scale.z = p.scale.z + 0.35; //+0.4;
                    if (p.pos == "back") {
                        p.position.set(parseFloat(c[0]), p.actual_val.split("X")[1] / 2 - 0.25, parseFloat(c[2]) - 0.1);
                    } else {
                        if (c[0] > 0 && (params.p_b_c_b_r == "Close" || params.add_storage_check == true)) {
                            c[0] = c[0] + 0.3;
                        }
                        if (c[0] < 0 && (params.p_b_c_b_l == "Close" || params.add_storage_check_right == true)) {
                            c[0] = c[0] - 0.3;
                        }
                        p.position.set(parseFloat(c[0]), p.actual_val.split("X")[1] / 2 - 0.25, parseFloat(c[2]) + 0.1);
                    }
                }
                p.rotation.set(0, k, 0);
            }

            if ("gara" == p.name.substring(0, 4)) {
                var q = parseFloat(c[4]);
                var r = parseFloat(c[5]);
            }
        }
    }


    var jsonDataArrow = { "6": .1, "7": 1, "8": 1.5, "9": 2.5, "10": 3.5, "11": 4.5, "12": 5.5, "13": 6.5, "14": 7.5, "15": 8.5, "16": 9.5, "17": 10.5, "18": 11.5, "19": 12.5, "20": 13.5 }
    if (p.splitName == "garageRollUpDoor" || p.splitName == "walkDoorSolid" || p.splitName == "Trimkit" || p.splitName == "window") {
        let texture = new THREE.TextureLoader().load(EDITLogo);
        var icongeometry = new THREE.CircleGeometry(1.1, 148);
        var iconmaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, map: texture, envMaps: "none", curveSegments: 3, alphaTest: 0.5 });
        var doorIcon = new THREE.Mesh(icongeometry, iconmaterial);
        doorIcon.position.z = 0.18;
        doorIcon.position.x = parseInt(p.actual_val.split("X")[0]) / 2 - 0.5;
        if (p.splitName == "garageRollUpDoor") {
            doorIcon.position.x = 4.0; //5.5;
            doorIcon.scale.x = 0.8;
            doorIcon.scale.y = 0.9;
            var posy = 5.5;
            var posyy = p.actual_val.split("X")[1];
            if (posyy == 14) {
                posy = 9.2;
            }
            if (posyy == 13) {
                posy = 9.2;
            }
            if (posyy == 12) {
                posy = 9.2;
            }
            if (posyy == 11) {
                posy = 9.2;
            }
            if (posyy == 10) {
                posy = 9.2;
            }
            if (posyy == 9) {
                posy = 7.4;
            }
            if (posyy == 8) {
                posy = 7.4;
            }
            if (posyy == 7) {
                posy = 12.2;
            }
            if (posyy == 6) {
                posy = 12.3;
            }
            if (posyy > 15) {
                posy = 9.5;
            }
            doorIcon.position.y = 9.0; //10.7;
        }
        if (p.splitName == "walkDoorSolid") {
            doorIcon.scale.x = 0.5;
            doorIcon.scale.y = 0.6;
            doorIcon.position.x = parseInt(p.actual_val.split("X")[0]) / 2 - 0.4;
            doorIcon.position.y = 6.0;
        }
        if (p.splitName == "Trimkit") {
            var dispos1 = 0.3;
            var dispos = 1.5 + dispos1;
            dispos = dispos - 0.48;
            doorIcon.position.x = dispos;
            doorIcon.position.y = parseInt(p.actual_val.split("X")[1]) / 5;
            doorIcon.scale.x = 0.21;
            doorIcon.scale.y = 0.22;
            doorIcon.position.z = 0.04;
            var posy = 5.5;
            var posyy = p.actual_val.split("X")[1];
            if (posyy == 14) {
                posy = 9.4;
            }
            if (posyy == 13) {
                posy = 9.4;
            }
            if (posyy == 12) {
                posy = 9.4;
            }
            if (posyy == 11) {
                posy = 9.4;
            }
            if (posyy == 10) {
                posy = 9.4;
            }
            if (posyy == 9) {
                posy = 8.4;
            }
            if (posyy == 8) {
                posy = 8.4;
            }
            if (posyy == 7) {
                posy = 8.4;
            }
            if (posyy == 6) {
                posy = 8.4;
            }
            if (posyy > 15) {
                posy = 9.4;
            }
            if (p.splitName == "Trimkit") {
                var posy = 0.6;
                if (p.actual_val.split("X")[1] > 15) {
                    posy = 9.4;
                }
            }
            doorIcon.position.y = 1.5; //posy+0.2;
            doorIcon.position.x = dispos - 0.08;
            doorIcon.position.y = 0.8;
        }
        if (p.splitName == "window") {
            doorIcon.scale.x = 0.4;
            doorIcon.scale.y = 0.5;
            doorIcon.position.x = parseInt(p.actual_val.split("X")[0]) / 2;
            doorIcon.position.y = parseInt(p.actual_val.split("X")[1]) / 2;
        }
        doorIcon.uniqueId = p.uniqueId;
        doorIcon.component = p;
        doorIcon.name = p.uniqueId + "-EDIT";
        doorIcon.visible = false;
        p.add(doorIcon);
        const_var.b_d_g_b_O_cObj[p.uniqueId] = doorIcon;
        const_var.b_d_g_b_O_cN.push(doorIcon);

        let doorDicontexture = new THREE.TextureLoader().load(DELETELogo);
        var icongeometry = new THREE.CircleGeometry(1.1, 148);
        var iconmaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, map: doorDicontexture, envMaps: "none", curveSegments: 3, alphaTest: 0.2 });
        var doorDicon = new THREE.Mesh(icongeometry, iconmaterial);
        doorDicon.uniqueId = p.uniqueId;
        doorDicon.name = p.uniqueId + "-DELETE";
        doorDicon.material.map = doorDicontexture;
        doorDicon.visible = false;
        doorDicon.scale.x = doorIcon.scale.x;
        doorDicon.scale.y = doorIcon.scale.y;
        doorDicon.position.x = -doorIcon.position.x; //0;
        doorDicon.position.y = doorIcon.position.y; // + 0.2;
        doorDicon.position.z = doorIcon.position.z; // + 0.2;
        doorDicon.component = p;
        p.add(doorDicon);
        const_var.b_d_g_b_O_cObj[p.uniqueId] = doorDicon;
        const_var.b_d_g_b_O_cN.push(doorDicon);
    }
    if (p.splitName == "walkDoorSolid") {
        var doortxtsize = p.scale.x / 2;
        if (p.actual_val.split("X")[0] >= 6) doortxtsize = p.scale.x / 4;
        var geometry1 = new THREE.TextGeometry(
            Math.round(p.actual_val.split("X")[0] * 12) + '"X' + Math.round(p.actual_val.split("X")[1] * 12) + '"',
            {
                font: const_var.font,
                size: doortxtsize,
                height: 0.08,
                weight: "normal",
                curveSegments: 1,
                bevelEnabled: false,
                bevelThickness: 0.02,
                bevelSize: 0.01,
                bevelSegments: 1,
            }
        );
        var txt_mat1 = new THREE.MeshPhongMaterial({ color: 0x000000 });
        var txt_mesh1 = new THREE.Mesh(geometry1, txt_mat1);
        txt_mesh1.position.z = 0;
        txt_mesh1.position.x = -1.0;
        txt_mesh1.position.y = 3.2;
        txt_mesh1.name = "DoorDimension";
        p.add(txt_mesh1);
    } else if (p.splitName == "garageRollUpDoor") {
        var doortxtsize = 0.5;
        if (p.actual_val.split("X")[0] == 6) doortxtsize = 1;
        if (p.actual_val.split("X")[0] == 7) doortxtsize = 0.9;
        if (p.actual_val.split("X")[0] == 8) doortxtsize = 0.8;
        if (p.actual_val.split("X")[0] == 9) doortxtsize = 0.8;
        if (p.actual_val.split("X")[0] == 10) doortxtsize = 0.7;
        if (p.actual_val.split("X")[0] == 12) doortxtsize = 0.6;
        doortxtsize = p.scale.x;
        if (p.actual_val.split("X")[0] > 10) doortxtsize = p.scale.x / 3;
        var geometry = new THREE.TextGeometry(Math.round(p.actual_val.split("X")[0]) + "'X" + Math.round(p.actual_val.split("X")[1]) + "'", {
            font: const_var.font,
            size: doortxtsize,
            height: 0.06,
            weight: "normal",
            curveSegments: 1,
            bevelEnabled: false,
            bevelThickness: 0.02,
            bevelSize: 0.01,
            bevelSegments: 1,
        });
        var txt_matfull = new THREE.MeshPhongMaterial({ color: 0x000000 });
        var txt_meshfull = new THREE.Mesh(geometry, txt_matfull);
        txt_meshfull.position.z = 0;
        txt_meshfull.position.x = -doortxtsize - 0.3;
        txt_meshfull.position.y = 5;
        txt_meshfull.name = "DoorDimension";
        p.add(txt_meshfull);
    } else if (p.splitName == "Trimkit") {
        var doortxtsize = 0.1;
        if (p.actual_val.split("X")[0] == 6) doortxtsize = p.scale.x / 10;
        if (p.actual_val.split("X")[0] == 7) doortxtsize = p.scale.x / 10;
        if (p.actual_val.split("X")[0] == 8) doortxtsize = p.scale.x / 10;
        if (p.actual_val.split("X")[0] == 9) doortxtsize = p.scale.x / 10;
        if (p.actual_val.split("X")[0] == 10) doortxtsize = p.scale.x / 10;
        if (p.actual_val.split("X")[0] == 12) doortxtsize = p.scale.x / 10;
        if (p.actual_val.split("X")[0] > 12) doortxtsize = p.scale.x / 20;

        var geometry = new THREE.TextGeometry(Math.round(p.actual_val.split("X")[0]) + "'X" + Math.round(p.actual_val.split("X")[1]) + "'", {
            font: const_var.font,
            size: doortxtsize,
            height: 0.025,
            weight: "normal",
            curveSegments: 1,
            bevelEnabled: false,
            bevelThickness: 0.01,
            bevelSize: 0.01,
            bevelSegments: 1,
        });
        var txt_matfull = new THREE.MeshPhongMaterial({ color: 0x000000 });
        var txt_meshfull = new THREE.Mesh(geometry, txt_matfull);
        txt_meshfull.position.x = -0.3;
        txt_meshfull.position.y = 0;
        txt_meshfull.name = "DoorDimension";
        p.add(txt_meshfull);
    } else if (p.splitName == "window") {
        var geometry1 = new THREE.TextGeometry(
            Math.round(p.actual_val.split("X")[0] * 12) + '"X' + Math.round(p.actual_val.split("X")[1] * 12) + '"',
            {
                font: const_var.font,
                size: 1,
                height: 0.04,
                weight: "normal",
                curveSegments: 1,
                bevelEnabled: false,
                bevelThickness: 0.02,
                bevelSize: 0.01,
                bevelSegments: 1,
            }
        );
        var txt_mat1 = new THREE.MeshPhongMaterial({ color: 0x000000 });
        var txt_mesh1 = new THREE.Mesh(geometry1, txt_mat1);
        txt_mesh1.position.z = 0.04;
        txt_mesh1.position.x = -1.5;
        txt_mesh1.position.y = 0.2;
        txt_mesh1.scale.x = 0.6;
        txt_mesh1.scale.y = 0.6;
        txt_mesh1.name = "DoorDimension";
        p.add(txt_mesh1);
    }
    if (p.splitName == "garageRollUpDoor" || p.splitName == "walkDoorSolid" || p.splitName == "Trimkit") {
        // const_var.ManageDoorArrar[const_var.main_posGet].push(p);
        //rmNode();
        if (p.BarnPos == "BarnLeft") {
            const_var.ManageDoorArrar["ltleft"].push(p);
            const_var.ManageGlobalComponent["ltleft"].push(p);
        } else if (p.BarnPos == "BarnRight") {
            const_var.ManageDoorArrar["ltright"].push(p);
            const_var.ManageGlobalComponent["ltright"].push(p);
        } else if (p.BarnPos == "FrontL") {
            const_var.ManageDoorArrar["frontl"].push(p);
            const_var.ManageGlobalComponent["frontl"].push(p);
        } else if (p.BarnPos == "FrontR") {
            const_var.ManageDoorArrar["frontr"].push(p);
            const_var.ManageGlobalComponent["frontr"].push(p);
        } else if (p.BarnPos == "BackL") {
            const_var.ManageDoorArrar["backl"].push(p);
            const_var.ManageGlobalComponent["backl"].push(p);
        } else if (p.BarnPos == "BackR") {
            const_var.ManageDoorArrar["backr"].push(p);
            const_var.ManageGlobalComponent["backr"].push(p);
        } else if (p.BarnPos == "LeftS") {
            const_var.ManageDoorArrar["lefts"].push(p);
            const_var.ManageGlobalComponent["lefts"].push(p);
        } else if (p.BarnPos == "RightS") {
            const_var.ManageDoorArrar["rights"].push(p);
            const_var.ManageGlobalComponent["rights"].push(p);
        } else if (p.BarnPos == "FrontS") {
            const_var.ManageDoorArrar["fronts"].push(p);
            const_var.ManageGlobalComponent["fronts"].push(p);
        } else {
            const_var.ManageDoorArrar[const_var.main_posGet].push(p);
            const_var.ManageGlobalComponent[const_var.main_posGet].push(p);
        }

        if (const_var.callMesure != false) {
            //ArrowNDistance.upCmpdist();
        }
    } else if (p.splitName == "window") {
        if (p.BarnPos == "BarnLeft") {
            const_var.ManageWindowArrar["ltleft"].push(p);
            const_var.ManageGlobalComponent["ltleft"].push(p);
        } else if (p.BarnPos == "BarnRight") {
            const_var.ManageWindowArrar["ltright"].push(p);
            const_var.ManageGlobalComponent["ltright"].push(p);
        } else if (p.BarnPos == "FrontL") {
            const_var.ManageWindowArrar["frontl"].push(p);
            const_var.ManageGlobalComponent["frontl"].push(p);
        } else if (p.BarnPos == "FrontR") {
            const_var.ManageWindowArrar["frontr"].push(p);
            const_var.ManageGlobalComponent["frontr"].push(p);
        } else if (p.BarnPos == "BackL") {
            const_var.ManageWindowArrar["backl"].push(p);
            const_var.ManageGlobalComponent["backl"].push(p);
        } else if (p.BarnPos == "BackR") {
            const_var.ManageWindowArrar["backr"].push(p);
            const_var.ManageGlobalComponent["backr"].push(p);
        } else if (p.BarnPos == "LeftS") {
            const_var.ManageWindowArrar["lefts"].push(p);
            const_var.ManageGlobalComponent["lefts"].push(p);
        } else if (p.BarnPos == "RightS") {
            const_var.ManageWindowArrar["rights"].push(p);
            const_var.ManageGlobalComponent["rights"].push(p);
        } else if (p.BarnPos == "FrontS") {
            const_var.ManageWindowArrar["fronts"].push(p);
            const_var.ManageGlobalComponent["fronts"].push(p);
        } else {
            const_var.ManageWindowArrar[const_var.main_posGet].push(p);
            const_var.ManageGlobalComponent[const_var.main_posGet].push(p);
        }
        if (const_var.callMesure != false) {
            //ArrowNDistance.upCmpdist();
        }
    } else {
        if (p.BarnPos == "BarnLeft") {
            const_var.ManageGlobalComponent["ltleft"].push(p);
        } else if (p.BarnPos == "BarnRight") {
            const_var.ManageGlobalComponent["ltright"].push(p);
        } else {
            const_var.ManageGlobalComponent[p.BarnPos.toLowerCase()].push(p);
        }
    }
    if ((p.exactDoorName == "Garage" || p.exactDoorName == "CustomFrameout") && p.position.y > 0 && p.splitName != "Trimkit") {
        params.DoorPosOnEdit.y = 0;
        p.position.y = 0;
    }
    params.wallPos = "Select";
    const_var.b_s_c_n = p;
    const_var.doorUniqueId = p.uniqueId;
    const_var.b_d_g_b_O_c.push(p);
    if (p.splitName == "Trimkit") {
        p.traverse(function (a) {
            if (a instanceof THREE.Mesh) {
                if (a.name != "DoorDimension" && a.name.includes("-EDIT") != true && a.name.includes("-DELETE") != true) {
                    const_var.b_d_g_b_O_c.unshift(a);
                }
            }
        });
    }
    const_var.b_d_g_b_O_c1.push(p);
    const_var.scene.add(p);
    const_var.sum++;
    params[a + "Qty"]++;
    params.b_l_t_s = "";
    /*setComponent.setWallComponent();
    setComponent.setLeftRightPos(p);*/
};
export const setRenderOrder = (wall) => { };
export const adjustComponent = () => { };
export const fnFdIdxBkYvLnAr = (arr, val) => {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            return i;
        }
    }
    return null;
};

export const fnFdIdxBkYvL = (arraytosearch, key, valuetosearch, key2, value2) => {
    for (var i = 0; i < arraytosearch.length; i++) {
        if (arraytosearch[i][key] == valuetosearch && arraytosearch[i][key2] == value2) {
            return i;
        }
    }
    return null;
};
export const fnFdIdxBkYvLUq = (arraytosearch, key, valuetosearch, key2) => {
    for (var i = 0; i < arraytosearch.length; i++) {
        if (arraytosearch[i][key] == valuetosearch && (arraytosearch[i][key2] == "" || arraytosearch[i][key2] == undefined)) {
            return i;
        }
    }
    return null;
};
export const fnFdIdxBkYvLP = (arraytosearch, key, valuetosearch, key2) => {
    for (var i = 0; i < arraytosearch.length; i++) {
        if (arraytosearch[i][key2] == undefined) {
            return i;
        }
    }
    return null;
};
export const fnFdIdxBkUiD = (arraytosearch, key, valuetosearch) => {
    for (var i = 0; i < arraytosearch.length; i++) {
        if (arraytosearch[i][key] == valuetosearch) {
            return i;
        }
    }
    return null;
};
export const fnFdIdxBkUiDN = (arraytosearch, Id, key, valuetosearch) => {
    for (var i = 0; i < const_var.d_w_a_r.length; i++) {
        if (arraytosearch[const_var.d_w_a_r[i].uniqueId] != undefined) {
            for (var j = 0; j < arraytosearch[const_var.d_w_a_r[i].uniqueId].length; j++) {
                if (arraytosearch[const_var.d_w_a_r[i].uniqueId][j][key] == valuetosearch) {
                    return j;
                }
            }
        }
    }
    return null;
};
export const chk_order_data_door = (array, val) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i]["uniqueId"] == val) {
            return i;
        }
    }
    return null;
};
export const cHkDrWdWlPs = (e) => {
    for (var i = 0; i < e.length; i++) {
        if (i < 3) {
            if (
                e[i].object.name.substring(0, 4) == "wind" ||
                "walk" == e[i].object.name.substring(0, 4) ||
                "gara" == e[i].object.name.substring(0, 4)
            ) {
                return i;
            }
        }
    }
    return null;
};
export const cHkAryDr = (arr) => {
    for (var i = 0; i <= arr.length - 1; i++) {
        arr[i].check = false;
    }
};

export function onResize() {
    let classData = document.getElementsByClassName("buildingcanvas");
        // console.log(classData[0].clientHeight);
    const_var.camera.aspect = classData[0].clientWidth / classData[0].clientHeight;
    const_var.camera.updateProjectionMatrix();
    const_var.renderer.setSize(classData[0].clientWidth, classData[0].clientHeight);
  
}

export function ontouchstart1(a) {
    if (const_var.i_c_l_g == false) {
        return false;
    }
    let rect = classData[0].getBoundingClientRect();
    var b = ((a.targetTouches[0].pageX - rect.left) / classData[0].clientWidth) * 2 - 1;
    var c = 2 * -((a.targetTouches[0].pageY - rect.top) / classData[0].clientHeight) + 1;
    var d = new THREE.Vector3(b, c, 1);
    d.unproject(const_var.camera);
    const_var.i_c_l_g_n = true;

    /*Code comment for doors & windows at 28-Sept-2017*/
    //const_var.raycaster.set(camera.position, d.sub(camera.position).normalize());
    /*End of code*/
    const_var.b_n_B_d = const_var.b_n_B_d == "" ? params.p_b_t : const_var.b_n_B_d;
    //var d_p_j_n_f_U_y_N = "d_p_j_n_f_U_y_n_"+const_var.DistanceArr[params.p_r_s];

    var e = const_var.raycaster.intersectObjects(const_var.b_d_g_b_O_c);
    var newD = const_var.raycaster.intersectObjects(const_var.b_d_g_b_O_cN);

    if (newD.length > 0) {
        const_var.showComponentEditBox = true;
        if (newD[0].object != undefined) {
            const_var.exactDoorType = newD[0].object.component.exactDoorName;
            const_var.editComponentDimension = newD[0].object.component.exactDoorDimension;
            const_var.commonDoorType = newD[0].object.component.commonDoorType;
            const_var.pos = newD[0].object.component.pos;
            const_var.doorUniqueId = newD[0].object.component.uniqueId;
            ComponentUniqueID = newD[0].object.component.uniqueId;
            params.trimkit = newD[0].object.component.doorProperty != undefined ? newD[0].object.component.doorProperty.trimkit : false;
            params.header_seal = newD[0].object.component.doorProperty != undefined ? newD[0].object.component.doorProperty.header_seal : false;
            params.chain_hoist = newD[0].object.component.doorProperty != undefined ? newD[0].object.component.doorProperty.chain_hoist : false;
            params.automatic_openers =
                newD[0].object.component.doorProperty != undefined ? newD[0].object.component.doorProperty.automatic_openers : false;

            params.certified_door = newD[0].object.component.doorProperty != undefined ? newD[0].object.component.doorProperty.certified_door : false;
            params.extra_notes =
                newD[0].object.component.doorProperty != undefined ? newD[0].object.component.doorProperty.entry_note : params.extra_notes;
            //params.g_d_c = newD[0].object.component.doorProperty != undefined ? newD[0].object.component.doorProperty.garage_door_color : params.g_d_c;
            params.f_r_m_o_t = newD[0].object.component.exactDoorDimension.split("_")[0].split("X")[0];
            params.f_r_m_o_t1 = newD[0].object.component.exactDoorDimension.split("_")[0].split("X")[1];
        }

        //objectClickHandler()
    }
    const_var.CheckDoorForEdit = false;
    if (e.length > 0) {
        for (var dnw = 0; dnw < e.length; dnw++) {
            if (
                "Trim" == e[dnw].object.name.substring(0, 4) ||
                "Plan" == e[dnw].object.name.substring(0, 4) ||
                "wind" == e[dnw].object.name.substring(0, 4) ||
                "walk" == e[dnw].object.name.substring(0, 4) ||
                "gara" == e[dnw].object.name.substring(0, 4)
            ) {
                e[dnw].faceIndex = 100;
            }
        }
    }
    if (
        e.length > 0 &&
        ("b_h_t6Bx" == e[0].object.name ||
            "b_h_t7Bx" == e[0].object.name ||
            "b_h_t8Bx" == e[0].object.name ||
            "b_h_t2Bx" == e[0].object.name ||
            "b_h_t4Bx" == e[0].object.name ||
            "b_B_g_B" == e[0].object.name ||
            "Trim" == e[0].object.name.substring(0, 4) ||
            "Plan" == e[0].object.name.substring(0, 4))
    ) {
        e.sort(function (a, b) {
            return b.faceIndex - a.faceIndex;
            return 0; //default return value (no sorting)
        });
    }
    if (params.p_b_t == "2" || params.add_left_lean == true || params.add_right_lean == true) {
        var chkPosWall = cHkDrWdWlPs(e);
        if (
            e.length > 0 &&
            chkPosWall != null &&
            ("Trim" != e[0].object.name.substring(0, 4) ||
                "wind" != e[0].object.name.substring(0, 4) ||
                "walk" != e[0].object.name.substring(0, 4) ||
                "gara" != e[0].object.name.substring(0, 4))
        ) {
            var e = const_var.raycaster.intersectObjects(const_var.b_d_g_b_O_c1);
        }
    }
    var e1 = const_var.raycaster.intersectObject(const_var.b_B_g_B);
    cHkAryDr(const_var.d_w_a_r);

    if (e1.length > 0 && ("b_B_g_B" == e1[0].object.name || "model-" == e[0].object.name.substring(0, 5)) && params.p_u_c == true) {
        if (8 == e1[0].faceIndex || 9 == e1[0].faceIndex) {
            var disValTexture = params.fourth_center_cost == true ? 0.5 : 1;
            e1[0].object.position.z = params.p_u_c == true ? Number(params.p_u_t) + disValTexture - params.p_d - const_var.b_M_g_V : 0;
        } else if (10 == e1[0].faceIndex || 11 == e1[0].faceIndex) {
            e1[0].object.position.z = 0; //(params.p_u_c==true || params.p_d>35)?0.18:-0.22;
        } else if (0 == e1[0].faceIndex || 1 == e1[0].faceIndex) {
            e1[0].object.position.z = 0;
        } else if (2 == e1[0].faceIndex || 3 == e1[0].faceIndex) {
            e1[0].object.position.z = 0;
        }
    }
    if (
        e.length > 0 &&
        (("b_B_g_B" != e[0].object.name &&
            "b_h_t1Bx" != e[0].object.name &&
            "b_h_t5Bx" != e[0].object.name &&
            "b_h_t6Bx" != e[0].object.name &&
            "b_h_t2Bx" != e[0].object.name &&
            "b_h_t3Bx" != e[0].object.name &&
            "b_h_t4Bx" != e[0].object.name &&
            "b_h_t7Bx" != e[0].object.name &&
            "b_h_t8Bx" != e[0].object.name) ||
            "model-" == e[0].object.name.substring(0, 5))
    ) {
        const_var.controls.enableRotate = false;

        if (
            "Trim" == e[0].object.name.substring(0, 4) ||
            "Plan" == e[0].object.name.substring(0, 4) ||
            "model-" == e[0].object.name.substring(0, 5) ||
            "wind" == e[0].object.name.substring(0, 4) ||
            "walk" == e[0].object.name.substring(0, 4) ||
            "gara" == e[0].object.name.substring(0, 4)
        )
            if (const_var.b_i_d_e) {
                var newName = e[0].object.name.replace("-clone", "");

                if (newName.indexOf("Frameout") > -1) {
                    var next_val1 = e[0].object.name.replace("-clone", "").match(/\d/g);
                    var next_val = next_val1.join("X");
                    var numb1 = e[0].object.name.replace("-clone", "").match(/\d/g);
                    numb1 = numb1.join("");
                    var numb = numb1 + "_Frameout";
                    var index = fnFdIdxBkYvL(const_var.d_w_a_r, "name", numb, "uniqueId", e[0].object.uniqueId);
                    const_var.d_w_a_r.splice(index, 1);

                    if (e[0].object.splitName == "garageRollUpDoor" || e[0].object.splitName == "Trimkit") {
                        var final = fnFdIdxBkYvLnAr(const_var.door_arry["garage"], next_val + "_Frameout");
                        const_var.door_arry["garage"].splice(final, 1);
                    }
                    if (e[0].object.splitName == "window") {
                        var final = fnFdIdxBkYvLnAr(const_var.door_arry["window"], next_val + "_Frameout");
                        const_var.door_arry["window"].splice(final, 1);
                    }
                    if (e[0].object.splitName == "walkDoorSolid") {
                        var final = fnFdIdxBkYvLnAr(const_var.door_arry["door"], next_val + "_Frameout");
                        const_var.door_arry["door"].splice(final, 1);
                    }

                    //f_r_o_d = "";
                } else {
                    var numb = e[0].object.name.replace("-clone", "").match(/\d/g);
                    numb = numb.join("");
                    var index = fnFdIdxBkYvL(const_var.d_w_a_r, "name", numb, "uniqueId", e[0].object.uniqueId);
                    const_var.d_w_a_r.splice(index, 1);

                    var next_val1 = e[0].object.name.replace("-clone", "").match(/\d/g);
                    var next_val = next_val1.join("X");

                    if (e[0].object.splitName == "garageRollUpDoor" || e[0].object.splitName == "Trimkit") {
                        var final = fnFdIdxBkYvLnAr(const_var.door_arry["garage"], next_val);
                        const_var.door_arry["garage"].splice(final, 1);
                    }
                    if (e[0].object.splitName == "window") {
                        var final = fnFdIdxBkYvLnAr(const_var.door_arry["window"], next_val);
                        const_var.door_arry["window"].splice(final, 1);
                    }
                    if (e[0].object.splitName == "walkDoorSolid") {
                        var final = fnFdIdxBkYvLnAr(const_var.door_arry["door"], next_val);
                        const_var.door_arry["door"].splice(final, 1);
                    }
                }

                //(StopPRAPI==true)?cP(const_var.a_p_d_a):'';
                //cSbA(false);
                e[0].object.visible = false;
                //cSbA(false);

                params[e[0].object.name.replace("-clone", "") + "Qty"]--;

                const_var.scene.remove(e[0].object);
                var data = const_var.scene.children;
                data.forEach(function (a) {
                    if (a instanceof THREE.Mesh)
                        if (
                            ("wind" == a.name.substring(0, 4) || "walk" == a.name.substring(0, 4) || "gara" == a.name.substring(0, 4)) &&
                            a.name.lastIndexOf("-clone", a.name.length - 6) == a.name.length - 6
                        )
                            for (var b = 0; b < a.material.materials.length; b++) {
                                //a.material.materials[b].opacity = 0.25;
                                //a.material.materials[b].transparent = true;
                                a.material.materials[b].emissive.setHex(0);
                                if (params.g_d_c == "0xffffff") {
                                    if (
                                        "BuildingDoors" == a.material.materials[b].name ||
                                        "RollUpDoor" == a.material.materials[b].name ||
                                        "RollUpDoor-Roll" == a.material.materials[b].name ||
                                        "RollUpDoor-RollEnds" == a.material.materials[b].name ||
                                        "Door" == a.material.materials[b].name
                                    )
                                        a.material.materials[b].emissive.setHex(3355443);
                                }
                            }
                });
                const_var.b_i_d_e = false;
                const_var.b_s_c_n = e[0].object;
                //console.log(e,"ontouchstart1");
                ontouchmove1(a);
            } else {
                var newName = e[0].object.name.replace("-clone", "");
                if (newName.indexOf("Frameout") > -1) {
                    var numb1 = e[0].object.name.replace("-clone", "").match(/\d/g);
                    numb1 = numb1.join("");
                    var numb = numb1 + "_Frameout";
                    var index = fnFdIdxBkYvLUq(const_var.d_w_a_r, "name", numb, "uniqueId", "");
                } else {
                    if (e[0].object.name.substring(0, 4) != "Plan") {
                        var numb = e[0].object.name.replace("-clone", "").match(/\d/g);
                        numb = numb.join("");
                        var index = fnFdIdxBkYvLUq(const_var.d_w_a_r, "name", numb, "uniqueId", "");
                    } else {
                        //var numb = e[0].object.parent.parent.name.replace("-clone", "").match(/\d/g);
                        var numb = e[0].object.name.replace("-clone", "").match(/\d/g);
                        numb = numb.join("");
                        var index = fnFdIdxBkYvLUq(const_var.d_w_a_r, "name", numb, "uniqueId", "");
                    }
                }

                var indexNew = chk_order_data_door(const_var.entry_points, e[0].object.uniqueId);
                if (indexNew != null) {
                    if (const_var.WallClass[e[0].object.pos] == "fend" && params.p_u_c == true) {
                        var newPosForCom = "ufend";
                    } else {
                        var newPosForCom = const_var.WallClass[e[0].object.pos];
                    }
                    const_var.entry_points[indexNew].entry_location = newPosForCom; //WallClass[e[0].object.pos];
                }
                var index = fnFdIdxBkYvLUq(const_var.d_w_a_r, "name", numb, "uniqueId", "");
                if (index !== null) {
                    const_var.d_w_a_r[index].uniqueId = e[0].object.uniqueId;
                    //const_var.d_w_a_r[index].pos = e[0].object.pos;
                }

                var index = fnFdIdxBkYvLP(const_var.d_w_a_r, "name", numb, "pos", "");
                if (index !== null) {
                    const_var.d_w_a_r[index].pos = e[0].object.pos;
                }
                const_var.b_s_c_n = e[0].object;
                if (e[0].object.name.substring(0, 4) != "Trim" && "Plan" != e[0].object.name.substring(0, 4)) {
                    const_var.place_d = true;
                    const_var.b_s_c_n = e[0].object;
                    //cSbA(false);

                    var e = const_var.raycaster.intersectObject(const_var.b_B_g_B, true);
                    for (var g = 0; g < const_var.b_s_c_n.material.materials.length; g++) {
                        //b_s_c_n.material.materials[g].opacity = 1;
                        const_var.b_s_c_n.material.materials[g].depthTest = true;
                        const_var.b_s_c_n.material.materials[g].emissive.setHex(0);
                        if (document.documentElement.clientWidth > 1021) {
                            if (const_var.b_s_c_n.material.materials[g].name == "BuildingTrim")
                                const_var.b_s_c_n.material.materials[g].color.setHex(params.p_t_c);
                        }
                        if (params.g_d_c == "0xffffff") {
                            if (
                                "BuildingDoors" == const_var.b_s_c_n.material.materials[g].name ||
                                "RollUpDoor" == const_var.b_s_c_n.material.materials[g].name ||
                                "RollUpDoor-Roll" == const_var.b_s_c_n.material.materials[g].name ||
                                "RollUpDoor-RollEnds" == const_var.b_s_c_n.material.materials[g].name ||
                                "Door" == const_var.b_s_c_n.material.materials[g].name
                            )
                                const_var.b_s_c_n.material.materials[g].emissive.setHex(3355443);
                        }
                    }
                    //console.log(e,"ontouchstart1");
                    // ontouchmove1(a);
                } else {
                    const_var.place_d = true;
                    //b_s_c_n = e[0].object.parent.parent;
                    const_var.b_s_c_n = e[0].object;
                    //cSbA(false);
                    for (var g = 0; g < const_var.b_s_c_n.material.materials.length; g++) {
                        const_var.b_s_c_n.material.materials[g].depthTest = true;
                        const_var.b_s_c_n.material.materials[g].emissive.setHex(0);
                        if (document.documentElement.clientWidth > 1021) {
                            if (const_var.b_s_c_n.material.materials[g].name == "Trimkit-trim")
                                const_var.b_s_c_n.material.materials[g].color.setHex(params.p_t_c);
                        }
                        if (params.g_d_c == "0xffffff") {
                            if ("Trimkit-center" == const_var.b_s_c_n.material.materials[g].name)
                                const_var.b_s_c_n.material.materials[g].emissive.setHex(3355443);
                        }
                    }
                }

                ontouchmove1(a);
            }
        else {
            const_var.b_s_c_n = e[0].object.parent;
            var e = const_var.raycaster.intersectObject(const_var.ground);
        }
    }
}
export function ontouchmove1(a) {
    let rect = classData[0].getBoundingClientRect();
    var b = ((a.targetTouches[0].pageX - rect.left) / classData[0].clientWidth) * 2 - 1;
    var c = 2 * -((a.targetTouches[0].pageY - rect.top) / classData[0].clientHeight) + 1;
    var d = new THREE.Vector3(b, c, 1);
    d.unproject(const_var.camera);

    const_var.raycaster.set(const_var.camera.position, d.sub(const_var.camera.position).normalize());

    const_var.b_n_B_d = const_var.b_n_B_d == "" ? params.p_b_t : const_var.b_n_B_d;
    var minVal = 0;
    if (const_var.b_s_c_n) {
        if (const_var.b_i_R_z_D == true && "gara" == const_var.b_s_c_n.name.substring(0, 4)) {
            var e = (const_var.b_s_c_s_X - (((a.targetTouches[0].pageX - rect.left) / classData[0].clientWidth) * 2 - 1)) * -1;
            var f = (const_var.b_s_c_s_Y - (((a.targetTouches[0].pageX - rect.top) / classData[0].clientHeight) * -2 + 1)) * -1;
            e = 6 * e;
            f = 6 * f;
            var g = parseFloat(const_var.b_m_P_s_X) + parseFloat(e) / 2;
            var h = parseFloat(const_var.b_m_P_s_Y) + parseFloat(f) / 2;
            g = Math.round(40 * g) / 40;
            h = Math.round(20 * h) / 20;
            if (g < -0.2) g = -0.2;
            if (h < -0.4) h = -0.4;

            const_var.b_s_c_n.morphTargetInfluences[const_var.b_s_c_n.morphTargetDictionary.width] = g;
            const_var.b_s_c_n.morphTargetInfluences[const_var.b_s_c_n.morphTargetDictionary.height] = h;
            const_var.b_s_c_n.geometry.dynamic = true;
            const_var.b_s_c_n.geometry.normalsNeedUpdate = true;
            const_var.b_s_c_n.geometry.tangentsNeedUpdate = true;
        } else if (
            0 == a.button &&
            ("Gara" == const_var.b_s_c_n.name.substring(0, 4) ||
                "Trim" == const_var.b_s_c_n.name.substring(0, 4) ||
                "wind" == const_var.b_s_c_n.name.substring(0, 4) ||
                "walk" == const_var.b_s_c_n.name.substring(0, 4) ||
                "gara" == const_var.b_s_c_n.name.substring(0, 4)) &&
            false == const_var.b_i_d_e
        ) {
            var i = 0;
            var j = 0;
            var k = 0;
            var l = "front";
            var m = null;
            var n = const_var.raycaster.intersectObject(const_var.b_B_g_B);
            if (n.length > 0) {
                var disValTexture = params.fourth_center_cost == true ? 0.5 : 1;
                if (0 == n[0].faceIndex || 1 == n[0].faceIndex) {
                    const_var.b_s_c_n.rotation.y = Math.PI / 2;
                    //n[0].object.position.z = -0.12;
                    l = "right";
                } else if (2 == n[0].faceIndex || 3 == n[0].faceIndex) {
                    const_var.b_s_c_n.rotation.y = Math.PI / -2;
                    l = "left";
                } else if (8 == n[0].faceIndex || 9 == n[0].faceIndex) {
                    const_var.b_s_c_n.rotation.y = 0;
                    n[0].object.position.z = params.p_u_c == true ? Number(params.p_u_t) + disValTexture - params.p_d - const_var.b_M_g_V : 0;
                    l = "front";
                } else if (10 == n[0].faceIndex || 11 == n[0].faceIndex) {
                    const_var.b_s_c_n.rotation.y = Math.PI / 1;
                    l = "back";
                } else l = false;

                if (const_var.b_s_c_n.pos != l) {
                    if (const_var.b_s_c_n.pos == "front") {
                        const_var.b_s_c_n.rotation.y = 0;
                        n[0].object.position.z = params.p_u_c == true ? Number(params.p_u_t) + disValTexture - params.p_d - const_var.b_M_g_V : 0;
                    }
                    if (const_var.b_s_c_n.pos == "back") {
                        const_var.b_s_c_n.rotation.y = Math.PI / 1;
                    }
                    if (const_var.b_s_c_n.pos == "left") {
                        const_var.b_s_c_n.rotation.y = Math.PI / -2;
                    }
                    if (const_var.b_s_c_n.pos == "right") {
                        const_var.b_s_c_n.rotation.y = Math.PI / 2;
                    }
                    const_var.i_c_l_g_n = false;
                    return false;
                }

                if (params.p_h == const_var.b_s_c_n.actual_val.split("X")[1] && (l == "right" || l == "left") && const_var.c_k_Do_po_s != "") {
                    const_var.c_k_Do_po_s = l;
                }
                if (params.p_h == const_var.b_s_c_n.actual_val.split("X")[1] && (l == "right" || l == "left")) {
                    l = const_var.main_posGet;
                    if (const_var.main_posGet == "front" && params.p_h == const_var.b_s_c_n.actual_val.split("X")[1]) {
                        const_var.b_s_c_n.rotation.y = 0;
                    } else if (const_var.main_posGet == "back" && params.p_h == const_var.b_s_c_n.actual_val.split("X")[1]) {
                        const_var.b_s_c_n.rotation.y = Math.PI / 1;
                    }
                }

                var GetDistance12 = params.p_d / 2;
                var b_Bn_v1 = params.p_b_c_b_l_f == "Close" || params.p_b_c_b_l == "Close" || params.add_storage_check == true ? params.lean_p_w : 0;
                var b_Bn_v2 =
                    params.p_b_c_b_r_f == "Close" || params.p_b_c_b_r == "Close" || params.add_storage_check_right == true ? params.leanR_p_w : 0;
                var GetDistance11 = params.p_w / 2;
                var sp_Val = const_var.b_s_c_n.actual_val.split("X")[0] / 2;

                if (l == "front") {
                    if (Math.sign(Math.round(const_var.b_s_c_n.position.x)) == 1 || Math.sign(Math.round(const_var.b_s_c_n.position.x)) == 0) {
                        var new1 = const_var.b_s_c_n.position.x + sp_Val;
                        var new2 = const_var.b_s_c_n.position.x - sp_Val;
                        var new3 = new1 - GetDistance11;
                        var new4 = new2 + GetDistance11;

                        if (params.p_b_c_b_r_f == "Close" || params.add_storage_check_right == true) var new3 = new1 - GetDistance11 - b_Bn_v2;

                        if (params.p_b_c_b_l_f == "Close" || params.add_storage_check == true) var new4 = new2 + GetDistance11 + b_Bn_v1;
                    }
                    if (Math.sign(Math.round(const_var.b_s_c_n.position.x)) == -1 || Math.sign(Math.round(const_var.b_s_c_n.position.x)) == -0) {
                        var new1 = const_var.b_s_c_n.position.x + sp_Val;
                        var new2 = const_var.b_s_c_n.position.x - sp_Val;
                        var new3 = new1 - GetDistance11;
                        var new4 = new2 + GetDistance11;

                        if (params.p_b_c_b_r_f == "Close" || params.add_storage_check_right == true) var new3 = new1 - GetDistance11 - b_Bn_v2;

                        if (params.p_b_c_b_l_f == "Close" || params.add_storage_check == true) var new4 = new2 + GetDistance11 + b_Bn_v1;
                    }
                } else if (l == "back") {
                    if (Math.sign(Math.round(const_var.b_s_c_n.position.x)) == 1 || Math.sign(Math.round(const_var.b_s_c_n.position.x)) == 0) {
                        var new1 = const_var.b_s_c_n.position.x + sp_Val;
                        var new2 = const_var.b_s_c_n.position.x - sp_Val;
                        var new3 = new1 - GetDistance11;
                        var new4 = new2 + GetDistance11;

                        if (params.p_b_c_b_r_f == "Close" || params.add_storage_check_right == true) var new3 = new1 - GetDistance11 - b_Bn_v2;

                        if (params.p_b_c_b_l_f == "Close" || params.add_storage_check == true) var new4 = new2 + GetDistance11 + b_Bn_v1;
                    }
                    if (Math.sign(Math.round(const_var.b_s_c_n.position.x)) == -1 || Math.sign(Math.round(const_var.b_s_c_n.position.x)) == -0) {
                        var new1 = const_var.b_s_c_n.position.x + sp_Val;
                        var new2 = const_var.b_s_c_n.position.x - sp_Val;
                        var new3 = new1 - GetDistance11;
                        var new4 = new2 + GetDistance11;

                        if (params.p_b_c_b_r_f == "Close" || params.add_storage_check_right == true) var new3 = new1 - GetDistance11 - b_Bn_v2;

                        if (params.p_b_c_b_l_f == "Close" || params.add_storage_check == true) var new4 = new2 + GetDistance11 + b_Bn_v1;
                    }
                } else if (l == "left") {
                    if (Math.sign(Math.round(const_var.b_s_c_n.position.z)) == 1 || Math.sign(Math.round(const_var.b_s_c_n.position.z)) == 0) {
                        var new1 = const_var.b_s_c_n.position.z + sp_Val;
                        var new2 = const_var.b_s_c_n.position.z - sp_Val;
                        var new3 = new1 - GetDistance12;
                        var new4 = new2 + GetDistance12;
                    }
                    if (Math.sign(Math.round(const_var.b_s_c_n.position.z)) == -1 || Math.sign(Math.round(const_var.b_s_c_n.position.z)) == -0) {
                        var new1 = const_var.b_s_c_n.position.z + sp_Val;
                        var new2 = const_var.b_s_c_n.position.z - sp_Val;
                        var new3 = new1 - GetDistance12;
                        var new4 = new2 + GetDistance12;
                    }
                } else if (l == "right") {
                    if (Math.sign(Math.round(const_var.b_s_c_n.position.z)) == 1 || Math.sign(Math.round(const_var.b_s_c_n.position.z)) == 0) {
                        var new1 = const_var.b_s_c_n.position.z + sp_Val;
                        var new2 = const_var.b_s_c_n.position.z - sp_Val;
                        var new4 = new1 - GetDistance12;
                        var new3 = new2 + GetDistance12;
                    }
                    if (Math.sign(Math.round(const_var.b_s_c_n.position.z)) == -1 || Math.sign(Math.round(const_var.b_s_c_n.position.z)) == -0) {
                        var new1 = const_var.b_s_c_n.position.z + sp_Val;
                        var new2 = const_var.b_s_c_n.position.z - sp_Val;
                        var new4 = new1 - GetDistance12;
                        var new3 = new2 + GetDistance12;
                    }
                }

                let componenteEditBox = document.getElementsByClassName("react-draggable");

                componenteEditBox[0].style.transform = "translate(0, 0)";
                var x = window.matchMedia("(min-width: 992px)");

                if (x.matches) {
                    // If media query matches

                    if (l == "front" || l == "back") {
                        if (const_var.b_s_c_n.splitName == "window") {
                            componenteEditBox[0].style.left = a.targetTouches[0].pageX - 300 + "px";
                            componenteEditBox[0].style.top = a.targetTouches[0].pageY - 200 + "px";
                        } else if (const_var.b_s_c_n.splitName == "walkDoorSolid") {
                            componenteEditBox[0].style.left = a.targetTouches[0].pageX - 330 + "px";
                            componenteEditBox[0].style.top = a.targetTouches[0].pageY - 200 + "px";
                        } else {
                            componenteEditBox[0].style.left = a.targetTouches[0].pageX - 350 + "px";
                            componenteEditBox[0].style.top = a.targetTouches[0].pageY - 200 + "px";
                        }
                    } else {
                        if (const_var.b_s_c_n.splitName == "window") {
                            componenteEditBox[0].style.left = a.targetTouches[0].pageX - 295 + "px";
                            componenteEditBox[0].style.top = a.targetTouches[0].pageY - 200 + "px";
                        } else if (const_var.b_s_c_n.splitName == "walkDoorSolid") {
                            componenteEditBox[0].style.left = a.targetTouches[0].pageX - 320 + "px";
                            componenteEditBox[0].style.top = a.targetTouches[0].pageY - 200 + "px";
                        } else {
                            componenteEditBox[0].style.left = a.targetTouches[0].pageX - 280 + "px";
                            componenteEditBox[0].style.top = a.targetTouches[0].pageY - 200 + "px";
                        }
                    }
                    if (componenteEditBox[0].style.left.split("p")[0] < 60) {
                        componenteEditBox[0].style.left = 380 + "px";
                    }
                }

                var NewDoorName = const_var.b_s_c_n.actual_val.split("X");
                const_var.b_s_c_n.leftpos = Math.abs(new4);
                const_var.b_s_c_n.rightpos = Math.abs(new3);
                const_var.b_s_c_n.leftdisfmb = Math.abs(new4);
                const_var.b_s_c_n.rightdisfmb = Math.abs(new3);
                if (const_var.b_s_c_n.pos == "back") {
                    const_var.b_s_c_n.leftpos = Math.abs(new3);
                    const_var.b_s_c_n.rightpos = Math.abs(new4);
                    const_var.b_s_c_n.leftdisfmb = Math.abs(new3);
                    const_var.b_s_c_n.rightdisfmb = Math.abs(new4);
                }
                const_var.checkFVL = new3;
                const_var.checkFVR = new4;

                if (i == 0 && k == 0) {
                    var val = const_var.b_s_c_n.actual_val.split("X")[0];
                    if ("front" == l || "back" == l) {
                        i = val / 2 - 0.5;
                        j = 0;
                    }
                    if ("left" == l || "right" == l) {
                        k = val / 2 - 0.5;
                        j = 0;
                    }
                }
                if (const_var.b_s_c_n.splitName == "window") {
                    var val = const_var.b_s_c_n.actual_val.split("X")[0] / 2;
                    var centerPoint = params.p_w / 2 - 1 - val;
                    var nd = 4;
                    var divisor = (val / nd) >> 0;
                    var remainder = val % nd;

                    if ("front" == l || "back" == l) {
                        i = val + 1;
                        //j = 1.3;
                        j = const_var.b_s_c_n.actual_val.split("X")[1] / 2;
                    }
                    if ("left" == l || "right" == l) {
                        k = val + 1;
                        //j = 2;
                        j = const_var.b_s_c_n.actual_val.split("X")[1] / 2;
                    }
                }
                if (const_var.b_s_c_n.splitName == "walkDoorSolid") {
                    var val = const_var.b_s_c_n.actual_val.split("X")[0] / 2;
                    var centerPoint = params.p_w / 2 - 1 - val;
                    var nd = 4;
                    var divisor = (val / nd) >> 0;
                    var remainder = val % nd;

                    if ("front" == l || "back" == l) {
                        i = val + 1;
                        j = 0;
                    }
                    if ("left" == l || "right" == l) {
                        k = val + 1;
                        j = 0;
                    }
                }
                if (const_var.b_s_c_n.splitName == "garageRollUpDoor") {
                    var val = const_var.b_s_c_n.actual_val.split("X")[0] / 2;
                    var centerPoint = params.p_w / 2 - 1 - val;
                    var nd = 4;
                    var divisor = (val / nd) >> 0;
                    var remainder = val % nd;

                    if ("front" == l || "back" == l) {
                        i = val + 1;
                        j = 0;
                    }
                    if ("left" == l || "right" == l) {
                        k = val + 1;
                        j = 0;
                    }
                }

                if (const_var.b_s_c_n.splitName == "Trimkit") {
                    var val = const_var.b_s_c_n.actual_val.split("X")[0] / 2;
                    var centerPoint = params.p_w / 2 - 1 - val;
                    var nd = 4;
                    var divisor = (val / nd) >> 0;
                    var remainder = val % nd;

                    if ("front" == l || "back" == l) {
                        i = val + 1;
                        j = 0;
                    }
                    if ("left" == l || "right" == l) {
                        k = val + 1;
                        j = 0;
                    }
                }

                const_var.b_s_c_n.pos = l;
                let m = n[0].point.sub(const_var.offset);
                if (l) {
                    var o = 0;
                    var p = 0;
                    var GetDistance = params.p_w / 2 - 1;
                    var GetDistance1 = -(params.p_w / 2);
                    if (params.p_u_c == true && params.p_b_t == "2") {
                        if (Math.sign(Math.round(m["x"])) == 1 || Math.sign(Math.round(m["x"])) == 0) {
                            if (Math.round(m["x"]) > GetDistance) {
                                if (params.p_w > 26) {
                                    n[0].object.position.z = 0.01;
                                } else {
                                    n[0].object.position.z = 0;
                                }
                            }
                        } else if (Math.sign(Math.round(m["x"])) == -1 || Math.sign(Math.round(m["x"])) == -0) {
                            if (Math.round(m["x"]) < GetDistance1) {
                                if (params.p_w > 26) {
                                    n[0].object.position.z = 0.01;
                                } else {
                                    n[0].object.position.z = 0;
                                }
                            }
                        }
                    }
                    //if(isCallingDoor==false){return;}
                    if (params.p_h == const_var.b_s_c_n.actual_val.split("X")[1] && (l == "front" || l == "back") && params.p_u_c == false) {
                        m["x"] = 0;
                        m["y"] = 0;
                        m["z"] = Math.min(Math.max(m["z"], params.p_d / -2 + k), params.p_d / 2 - k);
                        if ("Trim" == const_var.b_s_c_n.name.substring(0, 4)) {
                            m["y"] = m["y"] + const_var.b_s_c_n.actual_val.split("X")[1] / 2;
                            if (l == "front") m["z"] = m["z"];
                        }
                        if (null != m) {
                            //b_s_c_n.position.copy(m);
                        }
                        const_var.i_c_l_g_n = false;
                        const_var.controls.enableRotate = true;
                        const_var.controls.enablePan = true;
                        const_var.b_s_c_n = null;
                        return false;
                    } else if (params.p_u_c == true && l == "front" && params.p_h == const_var.b_s_c_n.actual_val.split("X")[1]) {
                        m["x"] = 0;
                        m["y"] = 0;
                        m["z"] = Math.min(Math.max(m["z"], params.p_d / -2 + k), params.p_d / 2 - k);
                        const_var.i_c_l_g_n = true;
                        if ("Trim" == const_var.b_s_c_n.name.substring(0, 4)) {
                            m["y"] = m["y"] + const_var.b_s_c_n.actual_val.split("X")[1] / 2;
                            m["z"] = m["z"] - 0.2;
                        }
                        if (null != m) {
                            const_var.b_s_c_n.position.copy(m);
                        }
                        const_var.controls.enableRotate = true;
                        const_var.controls.enablePan = true;
                        const_var.b_s_c_n = null;
                        return false;
                    } else if (params.p_u_c == true && l == "back" && params.p_h == const_var.b_s_c_n.actual_val.split("X")[1]) {
                        m["x"] = 0;
                        m["y"] = 0;
                        m["z"] = Math.min(Math.max(m["z"], params.p_d / -2 + k), params.p_d / 2 - k);
                        if ("Trim" == const_var.b_s_c_n.name.substring(0, 4)) {
                            m["y"] = m["y"] + const_var.b_s_c_n.actual_val.split("X")[1] / 2;
                            //m["z"] = m["z"] + 0.2;
                        }
                        if (null != m) {
                            //b_s_c_n.position.copy(m);
                        }
                        const_var.i_c_l_g_n = false;
                        const_var.controls.enableRotate = true;
                        const_var.controls.enablePan = true;
                        const_var.b_s_c_n = null;
                        return false;
                    } else {
                        const_var.i_c_l_g_n = true;

                        if (params.b_h_t2 || params.b_h_t5)
                            o =
                                params.p_b_c_b_l_f == "Close" ||
                                    params.p_b_c_b_l == "Close" ||
                                    params.add_left_lean == true ||
                                    params.add_storage_check == true
                                    ? params.lean_p_w
                                    : 0;
                        if (params.b_h_t4 || params.b_h_t6)
                            p =
                                params.p_b_c_b_r_f == "Close" ||
                                    params.p_b_c_b_r == "Close" ||
                                    params.add_right_lean == true ||
                                    params.add_storage_check_right == true
                                    ? params.leanR_p_w
                                    : 0;
                        m["x"] = Math.min(Math.max(m["x"], params.p_w / -2 - o + i), params.p_w / 2 + p - i);
                        if (0 == j) m["y"] = 0;
                        else m["y"] = Math.min(Math.max(m["y"], j), params.p_h - j);
                        m["z"] = Math.min(Math.max(m["z"], params.p_d / -2 + k), params.p_d / 2 - k);
                        if (const_var.b_s_c_n.splitName == "Trimkit") {
                            m["x"] = Math.min(Math.max(m["x"], params.p_w / -2 - o + i), params.p_w / 2 + p - i);
                        }
                        if (const_var.b_s_c_n.BarnPos == "left" || const_var.b_s_c_n.BarnPos == "right") {
                            if (params.b_h_t2 || params.b_h_t5) o = params.p_b_c_b_l_f == "Close" || params.p_b_c_b_l == "Close" ? 0 : 0;
                            if (params.b_h_t4 || params.b_h_t6) p = params.p_b_c_b_r_f == "Close" || params.p_b_c_b_r == "Close" ? 0 : 0;
                            m["x"] = Math.min(Math.max(m["x"], params.p_w / -2 - o + i), params.p_w / 2 + p - i);
                        }
                        if (const_var.b_s_c_n.BarnPos == "BarnLeft" || const_var.b_s_c_n.BarnPos == "BarnRight") {
                            if (params.b_h_t2 || params.b_h_t5)
                                o =
                                    params.p_b_c_b_l == "Close" || params.add_left_lean == true || params.add_storage_check == true
                                        ? params.lean_p_w
                                        : 0;
                            if (params.b_h_t4 || params.b_h_t6)
                                p =
                                    params.p_b_c_b_r == "Close" || params.add_right_lean == true || params.add_storage_check_right == true
                                        ? params.leanR_p_w
                                        : 0;
                            if (const_var.b_s_c_n.BarnPos == "BarnLeft") {
                                var sposL = 0;
                                if (params.leantoAlignmentLeft == 2) {
                                    sposL = params.p_d / 2;
                                    m["z"] = Math.min(Math.max(m["z"], sposL - params.lean_p_d + k), sposL - k);
                                }
                                if (params.leantoAlignmentLeft == 3) {
                                    sposL = params.p_d / -2;
                                    m["z"] = Math.min(Math.max(m["z"], sposL + k), sposL + params.lean_p_d - k);
                                }
                                if (params.leantoAlignmentLeft == 1) {
                                    sposL = params.lean_p_d / -2;
                                    m["z"] = Math.min(Math.max(m["z"], params.lean_p_d / -2 + k), params.lean_p_d / 2 - k);
                                }

                                m["x"] = Math.min(Math.max(m["x"], params.p_w / -2 - o + i), params.p_w / -2 + o - i);
                            }
                            if (const_var.b_s_c_n.BarnPos == "BarnRight") {
                                var sposL = 0;
                                if (params.leantoAlignmentRight == 2) {
                                    sposL = params.p_d / 2;
                                    m["z"] = Math.min(Math.max(m["z"], sposL - params.leanR_p_d + k), sposL - k);
                                }
                                if (params.leantoAlignmentRight == 3) {
                                    sposL = params.p_d / -2;
                                    m["z"] = Math.min(Math.max(m["z"], sposL + k), sposL + params.leanR_p_d - k);
                                }
                                if (params.leantoAlignmentRight == 1) {
                                    sposL = params.lean_p_d / -2;
                                    m["z"] = Math.min(Math.max(m["z"], params.leanR_p_d / -2 + k), params.leanR_p_d / 2 - k);
                                }
                                //m["z"] = Math.min(Math.max(m["z"], params.leanR_p_d/ -2 + k), params.leanR_p_d / 2 - k);
                                m["x"] = Math.min(Math.max(m["x"], params.p_w / 2 + p + i), params.p_w / 2 + p - i);
                            }
                        } else {
                            // m["x"] = Math.min(Math.max(m["x"], params.p_w / -2), params.p_w / 2);
                            // m["x"] = Math.min(Math.max(m["x"], params.p_w / -2 - o + i), params.p_w / 2 + p - i);
                            if (const_var.b_s_c_n.BarnPos == "front" || const_var.b_s_c_n.BarnPos == "back") {
                                m["x"] = Math.min(Math.max(m["x"], params.p_w / -2 + i), params.p_w / 2 - i);
                                m["z"] = Math.min(Math.max(m["z"], params.p_d / -2 + k), params.p_d / 2 - k);
                            }
                            if (
                                const_var.b_s_c_n.BarnPos == "FrontL" ||
                                const_var.b_s_c_n.BarnPos == "BackL" ||
                                const_var.b_s_c_n.BarnPos == "LeftS"
                            ) {
                                //console.log((params.p_w / -2 - o + i),m["x"],((params.p_w / -2) - i),i);
                                if (const_var.b_s_c_n.BarnPos == "FrontL" || params.add_storage_check == false) {
                                    let zPosLine = 0;
                                    if (params.leantoAlignmentLeft == 2) {
                                        //zPosLine = params.p_d/2;
                                        m["z"] = Math.min(Math.max(m["z"], params.p_d / 2 + k), params.p_d / 2 - k);
                                    }
                                    if (params.leantoAlignmentLeft == 3) {
                                        zPosLine = params.p_d / -2 + params.lean_p_d;
                                        m["z"] = Math.min(Math.max(m["z"], zPosLine + k), zPosLine - k);
                                    }
                                    if (params.leantoAlignmentLeft == 1) {
                                        //zPosLine = params.lean_p_d/2+0.2;
                                        m["z"] = Math.min(Math.max(m["z"], params.lean_p_d / 2 + k), params.lean_p_d / 2 - k);
                                    }
                                    //m["z"] = Math.min(Math.max(m["z"], params.lean_p_d/ -2 + k), params.lean_p_d / 2 - k);
                                    //m["z"] = Math.min(Math.max(m["z"], params.lean_p_d/ 2 + k), params.lean_p_d / 2 - k);
                                    m["x"] = Math.min(Math.max(m["x"], params.p_w / -2 - o + i), params.p_w / -2 + 0.5 - i);
                                }
                                if (const_var.b_s_c_n.BarnPos == "BackL") {
                                    let zPosLine = 0;
                                    if (params.leantoAlignmentLeft == 1) {
                                        //zPosLine = params.lean_p_d/-2;
                                        m["z"] = Math.min(Math.max(m["z"], params.lean_p_d / -2 + k), params.lean_p_d / -2 - k);
                                    }
                                    if (params.leantoAlignmentLeft == 2) {
                                        zPosLine = params.p_d / 2 - params.lean_p_d; //(params.p_d - params.lean_p_d)/-2-0.2;
                                        m["z"] = Math.min(Math.max(m["z"], zPosLine + k), zPosLine - k);
                                    }
                                    if (params.leantoAlignmentLeft == 3) {
                                        zPosLine = params.p_d / -2; //params.p_d/-2-0.2;
                                        m["z"] = Math.min(Math.max(m["z"], params.p_d / -2 + k), params.p_d / -2 - k);
                                    }
                                    //m["z"] = Math.min(Math.max(m["z"], params.lean_p_d/ -2 + k), params.lean_p_d / 2 - k);

                                    m["x"] = Math.min(Math.max(m["x"], params.p_w / -2 - o + i), params.p_w / -2 + 0.5 - i);
                                }
                                if (const_var.b_s_c_n.BarnPos == "LeftS") {
                                    var spos = "";
                                    var disValTexture1 = 0.8;
                                    if (parseFloat(params.add_storage) > parseFloat(params.lean_p_d / 2)) {
                                        disValTexture1 = 0.4;
                                        //spos = parseFloat(params.add_storage - parseFloat(params.lean_p_d/2)) + disValTexture1;
                                    } else {
                                        disValTexture1 = 0.8;
                                        //spos = -parseFloat(parseFloat(params.lean_p_d/2) - params.add_storage) + disValTexture1;
                                    }
                                    if (params.leantoAlignmentLeft == 1) {
                                        disValTexture1 = 0.8;
                                        if (parseFloat(params.add_storage) > parseFloat(params.lean_p_d / 2)) {
                                            spos = parseFloat(parseFloat(params.add_storage) - parseFloat(params.lean_p_d / 2)) + disValTexture1;
                                        } else {
                                            spos = -parseFloat(parseFloat(params.lean_p_d / 2) - parseFloat(params.add_storage)) + disValTexture1;
                                        }
                                        //spos = -parseFloat(params.lean_p_d/2) + (parseFloat(params.add_storage) + 1);//params.leanR_p_d/2;//params.p_d/2;
                                    }
                                    if (params.leantoAlignmentLeft == 2) {
                                        disValTexture1 = 0.6;
                                        spos =
                                            parseFloat(params.p_d / 2) -
                                            (parseFloat(params.lean_p_d) - parseFloat(params.add_storage)) +
                                            disValTexture1;
                                    }
                                    if (params.leantoAlignmentLeft == 3) {
                                        disValTexture1 = 0.6;
                                        spos = -parseFloat(params.p_d / 2) + (parseFloat(params.add_storage) + disValTexture1); //params.leanR_p_d/2;//params.p_d/2;
                                    }
                                    m["z"] = Math.min(Math.max(m["z"], spos + k), spos - k);
                                    m["x"] = Math.min(Math.max(m["x"], params.p_w / -2 - o + i), params.p_w / -2 + 0.5 - i);
                                }
                            }
                            if (
                                const_var.b_s_c_n.BarnPos == "FrontR" ||
                                const_var.b_s_c_n.BarnPos == "BackR" ||
                                const_var.b_s_c_n.BarnPos == "RightS"
                            ) {
                                if (const_var.b_s_c_n.BarnPos == "FrontR" || params.add_storage_check_right == false) {
                                    let zPosLine = 0;
                                    if (params.leantoAlignmentRight == 2) {
                                        //zPosLine = params.p_d/2;
                                        m["z"] = Math.min(Math.max(m["z"], params.p_d / 2 + k), params.p_d / 2 - k);
                                    }
                                    if (params.leantoAlignmentRight == 3) {
                                        zPosLine = params.p_d / -2 + params.leanR_p_d;
                                        m["z"] = Math.min(Math.max(m["z"], zPosLine + k), zPosLine - k);
                                    }
                                    if (params.leantoAlignmentRight == 1) {
                                        m["z"] = Math.min(Math.max(m["z"], params.leanR_p_d / 2 + k), params.leanR_p_d / 2 - k);
                                    }
                                    //m["z"] = Math.min(Math.max(m["z"], params.leanR_p_d/ -2 + k), params.leanR_p_d / 2 - k);
                                    //m["z"] = Math.min(Math.max(m["z"], params.leanR_p_d/ 2 + k), params.leanR_p_d / 2 - k);
                                    m["x"] = Math.max(Math.min(m["x"], params.p_w / 2 + p - i), params.p_w / 2 - 0.5 + i);
                                }
                                if (const_var.b_s_c_n.BarnPos == "BackR") {
                                    let zPosLine = 0;
                                    if (params.leantoAlignmentRight == 1) {
                                        m["z"] = Math.min(Math.max(m["z"], params.leanR_p_d / -2 + k), params.leanR_p_d / -2 - k);
                                    }
                                    if (params.leantoAlignmentRight == 2) {
                                        zPosLine = params.p_d / 2 - params.leanR_p_d; //(params.p_d - params.lean_p_d)/-2-0.2;
                                        m["z"] = Math.min(Math.max(m["z"], zPosLine + k), zPosLine - k);
                                    }
                                    if (params.leantoAlignmentRight == 3) {
                                        m["z"] = Math.min(Math.max(m["z"], params.p_d / -2 + k), params.p_d / -2 - k);
                                    }

                                    m["x"] = Math.max(Math.min(m["x"], params.p_w / 2 + p - i), params.p_w / 2 - 0.5 + i);
                                }
                                if (const_var.b_s_c_n.BarnPos == "RightS") {
                                    var spos = "";
                                    var disValTexture1 = 0.8;
                                    if (parseFloat(params.add_storage_right) > parseFloat(params.leanR_p_d / 2)) {
                                        disValTexture1 = 0.4;
                                        //spos = parseFloat(params.add_storage - parseFloat(params.leanR_p_d/2)) + disValTexture1;
                                    } else {
                                        disValTexture1 = 0.8;
                                        //spos = -parseFloat(parseFloat(params.leanR_p_d/2) - params.add_storage_right) + disValTexture1;
                                    }
                                    if (params.leantoAlignmentRight == 1) {
                                        disValTexture1 = 0.8;
                                        if (parseFloat(params.add_storage_right) > parseFloat(params.leanR_p_d / 2)) {
                                            spos =
                                                parseFloat(parseFloat(params.add_storage_right) - parseFloat(params.leanR_p_d / 2)) + disValTexture1;
                                        } else {
                                            spos =
                                                -parseFloat(parseFloat(params.leanR_p_d / 2) - parseFloat(params.add_storage_right)) + disValTexture1;
                                        }
                                    }
                                    if (params.leantoAlignmentRight == 2) {
                                        disValTexture1 = 0.6;
                                        spos =
                                            parseFloat(params.p_d / 2) -
                                            (parseFloat(params.leanR_p_d) - parseFloat(params.add_storage_right)) +
                                            disValTexture1;
                                    }
                                    if (params.leantoAlignmentRight == 3) {
                                        disValTexture1 = 0.6;
                                        spos = -parseFloat(params.p_d / 2) + (parseFloat(params.add_storage_right) + disValTexture1); //params.leanR_p_d/2;//params.p_d/2;
                                    }
                                    m["z"] = Math.min(Math.max(m["z"], spos + k), spos - k);
                                    m["x"] = Math.max(Math.min(m["x"], params.p_w / 2 + p - i), params.p_w / 2 - 0.5 + i);
                                }
                            }
                        }
                    }

                    if (const_var.b_s_c_n.pos == "front" || const_var.b_s_c_n.pos == "back") {
                        var NewDoorName = const_var.b_s_c_n.actual_val.split("X");
                        if (const_var.b_s_c_n.splitName == "window") {
                            const_var.b_s_c_n.posYpoint = const_var.b_s_c_n.position.y + NewDoorName[1] / 2;
                            const_var.b_s_c_n.negYpoint = const_var.b_s_c_n.position.y - NewDoorName[1] / 2;
                        } else if (const_var.b_s_c_n.splitName == "garageRollUpDoor") {
                            const_var.b_s_c_n.posYpoint = NewDoorName[1] - 0.7;
                            const_var.b_s_c_n.negYpoint = const_var.b_s_c_n.position.y;
                        } else {
                            const_var.b_s_c_n.posYpoint = NewDoorName[1] - 0.4;
                            const_var.b_s_c_n.negYpoint = const_var.b_s_c_n.position.y;
                        }
                        if (const_var.b_s_c_n.position.x > 0) {
                            var negVal = const_var.b_s_c_n.position.x - NewDoorName[0] / 2;
                            var posVal = const_var.b_s_c_n.position.x + NewDoorName[0] / 2;
                            const_var.b_s_c_n.NegPoint = negVal;
                            const_var.b_s_c_n.PosPoint = posVal;
                        } else {
                            var negVal = const_var.b_s_c_n.position.x - NewDoorName[0] / 2;
                            var posVal = const_var.b_s_c_n.position.x + NewDoorName[0] / 2;
                            const_var.b_s_c_n.NegPoint = negVal;
                            const_var.b_s_c_n.PosPoint = posVal;
                        }
                    } else if (const_var.b_s_c_n.pos == "left" || const_var.b_s_c_n.pos == "right") {
                        var NewDoorName = const_var.b_s_c_n.actual_val.split("X");
                        if (const_var.b_s_c_n.splitName == "window") {
                            const_var.b_s_c_n.posYpoint = const_var.b_s_c_n.position.y + NewDoorName[1] / 2;
                            const_var.b_s_c_n.negYpoint = const_var.b_s_c_n.position.y - NewDoorName[1] / 2;
                        } else if (const_var.b_s_c_n.splitName == "garageRollUpDoor") {
                            const_var.b_s_c_n.posYpoint = NewDoorName[1] - 0.7;
                            const_var.b_s_c_n.negYpoint = const_var.b_s_c_n.position.y;
                        } else {
                            const_var.b_s_c_n.posYpoint = NewDoorName[1] - 0.4;
                            const_var.b_s_c_n.negYpoint = const_var.b_s_c_n.position.y;
                        }
                        if (const_var.b_s_c_n.position.z > 0) {
                            var negVal = const_var.b_s_c_n.position.z - NewDoorName[0] / 2;
                            var posVal = const_var.b_s_c_n.position.z + NewDoorName[0] / 2;
                            const_var.b_s_c_n.NegPoint = negVal;
                            const_var.b_s_c_n.PosPoint = posVal;
                        } else {
                            var negVal = const_var.b_s_c_n.position.z - NewDoorName[0] / 2;
                            var posVal = const_var.b_s_c_n.position.z + NewDoorName[0] / 2;
                            const_var.b_s_c_n.NegPoint = negVal;
                            const_var.b_s_c_n.PosPoint = posVal;
                        }
                    }
                    var new11 = const_var.b_s_c_n.position.z + sp_Val;
                    var new22 = const_var.b_s_c_n.position.z - sp_Val;
                    //console.log("rahul",d_p_j_n[params.p_d]);
                    var chkLimit = "";
                    const_var.d_w_a_r_N_w[const_var.b_s_c_n.uniqueId] = [];
                    var headerBar = const_var.scene.getObjectByName("headerBar");
                    var scale = "";
                }
                if (null != m) {
                    var doorSide = const_var.b_s_c_n.pos;
                    if (const_var.b_s_c_n.BarnPos == "BarnLeft") {
                        doorSide = "ltleft";
                    } else if (const_var.b_s_c_n.BarnPos == "BarnRight") {
                        doorSide = "ltright";
                    } else if (const_var.b_s_c_n.BarnPos == "FrontL") {
                        doorSide = "frontl";
                    } else if (const_var.b_s_c_n.BarnPos == "FrontR") {
                        doorSide = "frontr";
                    } else if (const_var.b_s_c_n.BarnPos == "BackL") {
                        doorSide = "backl";
                    } else if (const_var.b_s_c_n.BarnPos == "BackR") {
                        doorSide = "backr";
                    } else if (const_var.b_s_c_n.BarnPos == "LeftS") {
                        doorSide = "lefts";
                    } else if (const_var.b_s_c_n.BarnPos == "RightS") {
                        doorSide = "rights";
                    }

                    if ("Trim" != const_var.b_s_c_n.name.substring(0, 4) && "Plan" != const_var.b_s_c_n.name.substring(0, 4)) {
                        doorPlacement(doorSide, const_var.b_s_c_n.id);
                        //console.log(chk_place,m,b_s_c_n.userData);
                        if (1) {
                            if (params.p_b_t == "2" || params.add_left_lean == true || params.add_right_lean == true) {
                                if (m["x"] > 0 && (params.p_b_c_b_r == "Close" || params.add_storage_check_right == true)) {
                                    m["x"] = m["x"] + 0.2;
                                }
                                if (m["x"] < 0 && (params.p_b_c_b_l == "Close" || params.add_storage_check == true)) {
                                    m["x"] = m["x"] - 0.2;
                                }
                            }
                            if (
                                (params.add_storage_check == true || params.add_storage_check_right == true) &&
                                (const_var.b_s_c_n.BarnPos == "RightS" || const_var.b_s_c_n.BarnPos == "LeftS")
                            ) {
                                if (const_var.TypeEnum[params.p_r_s] != "Regular") {
                                    if (m["z"] > 0) {
                                        //m["z"] = m["z"] + 0.3;
                                        if (params.leantoAlignmentRight == 1 || params.leantoAlignmentLeft == 1) {
                                            m["z"] = m["z"] - 0.25;
                                        }
                                        if (params.leantoAlignmentRight == 2 || params.leantoAlignmentLeft == 2) {
                                            m["z"] = m["z"] + 0.3; // + 0.25;// - 0.4;
                                        }
                                        if (params.leantoAlignmentRight == 3 || params.leantoAlignmentLeft == 3) {
                                            m["z"] = m["z"] + 0.3;
                                        }
                                    } else {
                                        if (params.leantoAlignmentRight == 1 || params.leantoAlignmentLeft == 1) {
                                            m["z"] = m["z"] - 0.25;
                                        }
                                        if (params.leantoAlignmentRight == 2 || params.leantoAlignmentLeft == 2) {
                                            m["z"] = m["z"] + 0.3; // + 0.25;
                                        }
                                        if (params.leantoAlignmentRight == 3 || params.leantoAlignmentLeft == 3) {
                                            m["z"] = m["z"] + 0.3; // - 0.15;
                                        }
                                        //m["z"] = m["z"] - 0.25;
                                    }
                                } else {
                                    if (m["z"] > 0) {
                                        //m["z"] = m["z"] + 0.3;
                                    } else {
                                        //m["z"] = m["z"] - 0.25;
                                    }
                                }
                            }
                            const_var.b_s_c_n.position.copy(m);
                        }
                    } else {
                        if (const_var.b_s_c_n.pos == "front" || const_var.b_s_c_n.pos == "back") {
                            if (const_var.b_s_c_n.BarnPos == "front" || const_var.b_s_c_n.BarnPos == "back") {
                                if (m["z"] > 0) {
                                    //m["z"] = m["z"]+0.2;
                                } else {
                                    m["z"] = m["z"] - 0.03;
                                }
                                if (params.p_u_c == true && const_var.b_s_c_n.pos == "front") {
                                    if (m["z"] > 0) {
                                        m["z"] = m["z"] - 0.25;
                                    } else {
                                        m["z"] = m["z"] - 0.2;
                                    }
                                }
                            }
                            if (const_var.b_s_c_n.BarnPos == "FrontL" || const_var.b_s_c_n.BarnPos == "FrontR") {
                                if (m["z"] > 0) {
                                    //m["z"] = m["z"]+0.2;
                                } else {
                                    m["z"] = m["z"] - 0.03;
                                }
                            }
                            if (const_var.b_s_c_n.BarnPos == "RightS" || const_var.b_s_c_n.BarnPos == "LeftS") {
                                if (m["z"] > 0) {
                                    m["z"] = m["z"] - 0.3;
                                } else {
                                    m["z"] = m["z"] - 0.25;
                                }
                            }
                            if (params.p_u_c == true && const_var.b_s_c_n.pos == "back") {
                                m["z"] = m["z"] - 0.03;
                            }
                        } else {
                            if (m["x"] > 0) {
                                m["x"] = const_var.TypeEnum[params.p_r_s] == "Regular" ? m["x"] : m["x"] - 0.15;
                            } else {
                                m["x"] = const_var.TypeEnum[params.p_r_s] == "Regular" ? m["x"] : m["x"] + 0.15;
                            }
                            if (params.p_b_t == "2" || params.add_left_lean == true || params.add_right_lean == true) {
                                if (m["x"] > 0 && (params.p_b_c_b_r == "Close" || params.add_storage_check_right == true)) {
                                    m["x"] = const_var.TypeEnum[params.p_r_s] == "Regular" ? m["x"] : m["x"] + 0.3;
                                }
                                if (m["x"] < 0 && (params.p_b_c_b_l == "Close" || params.add_storage_check == true)) {
                                    m["x"] = const_var.TypeEnum[params.p_r_s] == "Regular" ? m["x"] : m["x"] - 0.3;
                                }
                            }
                        }

                        m["y"] = m["y"] + (const_var.b_s_c_n.actual_val.split("X")[1] / 2 - const_var.b_s_c_n.actual_val.split("X")[1] / 10 + 0.6);
                        //const_var.b_s_c_n.position.copy(m);
                        doorPlacement(doorSide, const_var.b_s_c_n.id);

                        if (1) {
                            const_var.b_s_c_n.position.copy(m);
                        } else {
                        }
                    }
                }
            }
        } else if (0 == a.button) {
            var n = const_var.raycaster.intersectObject(const_var.ground);

            var m = n[0].point.sub(const_var.offset);
            const_var.b_s_c_n.position.copy(m);
        }
        if ("Driveway" == const_var.b_s_c_n.name) {
            var q = m["z"] * -1 - params.p_w / 2;
            var r = m["x"] - params.p_d / 2;
            var s = m["z"] - params.p_w / 2;
            var t = m["x"] * -1 - params.p_d / 2;
            var u = Math.min(q, r, s, t);
            var l;
            if (q == u) {
                const_var.b_s_c_n.rotation.y = 0;
                l = 1;
            } else if (r == u) {
                const_var.b_s_c_n.rotation.y = Math.PI / -2;
                l = 2;
            } else if (s == u) {
                const_var.b_s_c_n.rotation.y = Math.PI / 1;
                l = 3;
            } else if (t == u) {
                const_var.b_s_c_n.rotation.y = Math.PI / 2;
                l = 4;
            }
            if (params.p_w >= 19 && (1 == l || 3 == l)) var posX = Math.min(Math.max(m["x"], params.p_w / -2 + 9.5), params.p_w / 2 - 9.5);
            else posX = Math.min(Math.max(m["x"], params.p_w / -2), params.p_w / 2);
            if (params.p_d >= 19 && (2 == l || 4 == l)) var posZ = Math.min(Math.max(m["z"], params.p_d / -2 + 9.5), params.p_d / 2 - 9.5);
            else posZ = Math.min(Math.max(m["z"], params.p_d / -2), params.p_d / 2);
            const_var.b_s_c_n.position.set(posX, 0, posZ);
        }
    }

    //setTimeout(function(){ ontouchend1(a);}, 1000);
}



export const doorPlacement = (l, drId) => { };

export const prntLRdistNew = (doorpos, ind, chpos) => { };

export const showhidecrossBracing = (l) => { };
export const editComponent = (trimdoor, id, doorname, coomandoorType, doortype) => {
    if (doortype == "CustomFrameout") {
        // var splitval = doorname.split("X");
        // params.f_r_m_o_t = splitval[0];
        // params.f_r_m_o_t1 = splitval[1].replace("_Frameout","");
        // var Val1 = (doortype=="CustomFrameout")?doorname.split("_")[0]+"_Frameout":doorname;
        // console.log(Val1,"Val1",doorname,"doorname")
        RmComtFmLtgDrComp(trimdoor, doorname, id, id, coomandoorType, doortype);
    } else {
        RmComtFmLtgDrComp(trimdoor, doorname, id, id, coomandoorType, doortype);
    }
};
export const RmComtFmLtgDrComp = (trimdoor, Val1, Val, unique, coomandoorType, Type) => {
    var wallSide = "";
    if (Type != "CustomFrameout") {
        params.f_r_m_o_t = "Select";
        params.f_r_m_o_t1 = "Select";
    }
    for (var i = 0; i < const_var.b_d_g_b_O_c.length; i++) {
        if (
            "b_B_g_B" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t1Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t2Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t5Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t6Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t3Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t4Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t7Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t8Bx" != const_var.b_d_g_b_O_c[i].name &&
            false == const_var.b_d_g_b_O_c[i].name.includes("-EDIT") &&
            false == const_var.b_d_g_b_O_c[i].name.includes("-DELETE")
        ) {
            if (const_var.b_d_g_b_O_c[i].uniqueId == Val) {
                wallSide = const_var.b_d_g_b_O_c[i].BarnPos.toLowerCase();
                params.UpdatedDoorPosOnEdit = const_var.b_d_g_b_O_c[i].BarnPos;
                params.DoorPosOnEdit = const_var.b_d_g_b_O_c[i].position;
                params.DoorRotOnEdit = const_var.b_d_g_b_O_c[i].rotation.y;
                params.DoorLocOnEdit = const_var.b_d_g_b_O_c[i].pos;

                const_var.b_d_g_b_O_c[i].visible = false;
                params[const_var.b_d_g_b_O_c[i].name.replace("-clone", "") + "Qty"]--;
                const_var.scene.remove(const_var.b_d_g_b_O_c[i]);
                if (const_var.b_d_g_b_O_c[i].splitName == "Trimkit") {
                    const_var.b_d_g_b_O_c.splice(i, 1);
                }
                if (wallSide == "barnleft") {
                    wallSide = "ltleft";
                } else if (wallSide == "barnright") {
                    wallSide = "ltright";
                }
                //ArrowNDistance.checkNewDoorPlace(wallSide.toLowerCase());
            }
        }
    }
    // for(var i=0;i<const_var.ManageDoorArrar[params.DoorLocOnEdit].length;i++)
    // {
    //     if(const_var.ManageDoorArrar[params.DoorLocOnEdit][i].uniqueId == Val)
    //     {
    //         const_var.ManageDoorArrar[params.DoorLocOnEdit].splice(i, 1);
    //     }
    // }
    // for (var i = 0; i < const_var.b_d_g_b_O_cN.length; i++) {
    //     if (const_var.b_d_g_b_O_cN[i].uniqueId == Val) {
    //         const_var.b_d_g_b_O_cN.splice(i, 1);
    //     }
    // }
    if (wallSide != "") {
        for (var i = 0; i < const_var.ManageGlobalComponent[wallSide].length; i++) {
            if (const_var.ManageGlobalComponent[wallSide][i].uniqueId === Val) {
                const_var.ManageGlobalComponent[wallSide].splice(i, 1);
                //ArrowNDistance.checkNewDoorPlace(wallSide.toLowerCase());
            }
        }
        for (var i = 0; i < const_var.ManageDoorArrar[wallSide].length; i++) {
            if (const_var.ManageDoorArrar[wallSide][i].uniqueId == Val) {
                const_var.ManageDoorArrar[wallSide].splice(i, 1);
            }
        }
    }
    for (var i = 0; i <= const_var.d_w_a_r.length - 1; i++) {
        if (const_var.d_w_a_r[i].uniqueId == Val) {
            var indexNew = chk_order_data_door(const_var.entry_points, Val);
            if (indexNew != null) {
                const_var.entry_points.splice(indexNew, 1);
            }
            const_var.d_w_a_r.splice(i, 1);
        }
    }
    for (var i = 0; i <= const_var.H_d_l_D_r_ar["front"].length - 1; i++) {
        if (const_var.H_d_l_D_r_ar["front"][i] == Val) {
            const_var.H_d_l_D_r_ar["front"].splice(i, 1);
        }
    }
    for (var i = 0; i <= const_var.H_d_l_D_r_ar["back"].length - 1; i++) {
        if (const_var.H_d_l_D_r_ar["back"][i] == Val) {
            const_var.H_d_l_D_r_ar["back"].splice(i, 1);
        }
    }
    //const_var.H_d_l_D_r_ar["front"].splice(const_var.H_d_l_D_r_ar["front"].length-1, 1);
    const_var.c_k_p_d = true;
    if (trimdoor == "" || params.trimkit == false) {
        if (coomandoorType == "garage") {
            if (Type == "CustomFrameout") {
                if (Val1.indexOf("_Frameout") == -1 && const_var.editComponentDimension != "CustomGarageSize") {
                    Val1 = Val1 + "_Frameout";
                }
                // var splitval1 = Val1.split("_");
                // var splitval = splitval1[0].split("X");
                // params.f_r_m_o_t = splitval[0];
                // params.f_r_m_o_t1 = splitval[1];
                params.p_a_g_r_u_d = Val1;
                params.doorType = Type;
            } else {
                params.p_a_g_r_u_d = Val1;
                params.doorType = Type;
            }
            const_var.editComponentDimension = params.p_a_g_r_u_d;
            if (const_var.editComponentDimension == "CustomGarageSize") {
                params.customW = params.customW < 5 ? 5 : params.customW;
                params.customH = params.customH < 5 ? 5 : params.customH;
            }
            if (Type == "CustomFrameout") {
                params.p_a_g_r_u_d =
                    const_var.editComponentDimension == "CustomGarageSize" ? params.customW + "X" + params.customH + "_Frameout" : params.p_a_g_r_u_d;
                var splitval1 = params.p_a_g_r_u_d.split("_");
                var splitval = splitval1[0].split("X");
                params.f_r_m_o_t = splitval[0];
                params.f_r_m_o_t1 = splitval[1];
                params.doorType = Type;
            } else {
                params.p_a_g_r_u_d =
                    const_var.editComponentDimension == "CustomGarageSize" ? params.customW + "X" + params.customH : params.p_a_g_r_u_d;
            }

            aDw("garageRollUpDoor_" + params.p_a_g_r_u_d, params.p_a_g_r_u_d);
        }
        if (coomandoorType == "door") {
            params.p_d_c = Val1;
            params.doorType = Type;
            const_var.editComponentDimension = params.p_d_c;
            if (const_var.editComponentDimension == "CustomGarageSize") {
                params.customW = params.customW < 5 ? 5 : params.customW;
                params.customH = params.customH < 5 ? 5 : params.customH;
            }
            if (Type == "WalkFrameout") {
                params.p_d_c =
                    const_var.editComponentDimension == "CustomGarageSize" ? params.customW + "X" + params.customH + "_Frameout" : params.p_d_c;
            } else {
                params.p_d_c = const_var.editComponentDimension == "CustomGarageSize" ? params.customW + "X" + params.customH : params.p_d_c;
            }

            aDw("walkDoorSolid" + params.p_d_c, params.p_d_c);
            //aDw(Val1)
        }
        if (coomandoorType == "window") {
            params.p_w_cc = Val1;
            params.doorType = Type;
            const_var.editComponentDimension = params.p_w_cc;
            if (const_var.editComponentDimension == "CustomGarageSize") {
                params.customW = params.customW < 5 ? 5 : params.customW;
                params.customH = params.customH < 5 ? 5 : params.customH;
            }
            if (Type == "WindowsFrameout") {
                params.p_w_cc =
                    const_var.editComponentDimension == "CustomGarageSize" ? params.customW + "X" + params.customH + "_Frameout" : params.p_w_cc;
            } else {
                params.p_w_cc = const_var.editComponentDimension == "CustomGarageSize" ? params.customW + "X" + params.customH : params.p_w_cc;
            }

            aDw("window" + params.p_w_cc, params.p_w_cc);
        }
    } else {
        params.p_a_g_r_u_d = Val1;
        params.doorType = Type;
        const_var.editComponentDimension = params.p_a_g_r_u_d;
        if (const_var.editComponentDimension == "CustomGarageSize") {
            params.customW = params.customW < 5 ? 5 : params.customW;
            params.customH = params.customH < 5 ? 5 : params.customH;
        }
        if (Type == "CustomFrameout") {
            if (Val1.indexOf("_Frameout") == -1 && const_var.editComponentDimension != "CustomGarageSize") {
                Val1 = Val1 + "_Frameout";
            }
            params.p_a_g_r_u_d = const_var.editComponentDimension == "CustomGarageSize" ? params.customW + "X" + params.customH + "_Frameout" : Val1;
            var splitval1 = params.p_a_g_r_u_d.split("_");
            var splitval = splitval1[0].split("X");
            params.f_r_m_o_t = splitval[0];
            params.f_r_m_o_t1 = splitval[1];
            params.doorType = Type;
        } else {
            params.p_a_g_r_u_d = const_var.editComponentDimension == "CustomGarageSize" ? params.customW + "X" + params.customH : params.p_a_g_r_u_d;
        }
        //params.p_a_g_r_u_d = (const_var.editComponentDimension=="CustomGarageSize")?params.customW+"X"+params.customH:params.p_a_g_r_u_d;
        TrimLoad("Trimkit_" + params.p_a_g_r_u_d, params.p_a_g_r_u_d);
        if (params.rWindowUpFrame.length > 0) {
            //outFrameFromWall.frameOutWindowFromWall("right");
        }
        if (params.lWindowUpFrame.length > 0) {
            //outFrameFromWall.frameOutWindowFromWall("left");
        }
    }
    var sp_Val = const_var.b_s_c_n.actual_val.split("X")[0] / 2;
    var new11 = const_var.b_s_c_n.position.z + sp_Val;
    var new22 = const_var.b_s_c_n.position.z - sp_Val;

    if (const_var.b_s_c_n.BarnPos === "left" || const_var.b_s_c_n.BarnPos === "right") {
        for (var i = 0; i < const_var.makeArrayForComponent[params.p_d].length; i++) {
            var val = const_var.makeArrayForComponent[params.p_d][i];
            if (Math.floor(val) <= Math.round(new11) && Math.floor(val) >= Math.round(new22)) {
                if (const_var.d_w_a_r_N_w[const_var.doorUniqueId] === undefined) {
                    const_var.d_w_a_r_N_w[const_var.doorUniqueId] = [];
                }
                if (wallSide === "left")
                    const_var.d_w_a_r_N_w[const_var.doorUniqueId].push({
                        doorplace: "TrussCloneL" + i,
                        index: i,
                    });
                else if (wallSide === "right")
                    const_var.d_w_a_r_N_w[const_var.doorUniqueId].push({
                        doorplace: "TrussCloneL" + i,
                        index: i,
                    });
            }
        }
    } else if (wallSide === "left" && params.b_h_t2 && const_var.b_s_c_n.BarnPos === "BarnLeft") {
        for (var i = 0; i < const_var.makeArrayForComponent_Barn[params.lean_p_d].length; i++) {
            var val = const_var.makeArrayForComponent_Barn[params.lean_p_d][i];
            if (Math.floor(val) <= Math.round(new11) && Math.floor(val) >= Math.round(new22)) {
                if (const_var.d_w_a_r_N_w[const_var.doorUniqueId] === undefined) {
                    const_var.d_w_a_r_N_w[const_var.doorUniqueId] = [];
                }
                const_var.d_w_a_r_N_w[const_var.doorUniqueId].push({
                    doorplace: "TrussCloneLeanL" + i,
                    index: i,
                });
            }
        }
    } else if (wallSide === "right" && params.b_h_t4 && const_var.b_s_c_n.BarnPos === "BarnRight") {
        for (var i = 0; i < const_var.makeArrayForComponent_BarnR[params.leanR_p_d].length; i++) {
            var val = const_var.makeArrayForComponent_BarnR[params.leanR_p_d][i];
            if (Math.floor(val) <= Math.round(new11) && Math.floor(val) >= Math.round(new22)) {
                if (const_var.d_w_a_r_N_w[const_var.doorUniqueId] === undefined) {
                    const_var.d_w_a_r_N_w[const_var.doorUniqueId] = [];
                }
                const_var.d_w_a_r_N_w[const_var.doorUniqueId].push({
                    doorplace: "TrussCloneLeanR" + i,
                    index: i,
                });
            }
        }
    }
    cuBuilding.cP();
};

const setLegColor = (leg, color) => {
    if (leg.material) {
        var newMat = leg.material.clone();
        if (newMat.materials) {
            for (var k = 0, l = newMat.materials.length; k < l; k++) {
                newMat.materials[k].color.setHex(color);
            }
        } else {
            newMat.color.setHex(color);
        }
        leg.material = newMat;
    }
};

export const RmComtFmLtgDr = (Val, unique, Posi, BarnPos) => {
    var wallSide = "";
    var headerBarIndex = "";
    if (BarnPos != "BarnRight" && BarnPos != "BarnLeft") {
        TestNew(Posi);
        Test(Posi);
        //autoRotateBuilding(Posi.charAt(0).toUpperCase() + Posi.slice(1));
    }
    if (const_var.doorUniqueId != 0 && Val != const_var.doorUniqueId) {
        Val = unique = const_var.doorUniqueId;
    }
    for (var i = 0; i < const_var.b_d_g_b_O_c.length; i++) {
        if (
            "b_B_g_B" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t1Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t2Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t5Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t6Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t3Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t4Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t7Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t8Bx" != const_var.b_d_g_b_O_c[i].name &&
            false == const_var.b_d_g_b_O_c[i].name.includes("-EDIT") &&
            false == const_var.b_d_g_b_O_c[i].name.includes("-DELETE")
        ) {
            if (const_var.b_d_g_b_O_c[i].uniqueId == Val) {
                wallSide = const_var.b_d_g_b_O_c[i].BarnPos.toLowerCase();
                Posi = Posi == "" ? const_var.b_d_g_b_O_c[i].pos : Posi;
                BarnPos = BarnPos == "" ? const_var.b_d_g_b_O_c[i].BarnPos : BarnPos;
                const_var.b_d_g_b_O_c[i].visible = false;
                const_var.b_d_g_b_O_c[i].children.visible = false;
                params[const_var.b_d_g_b_O_c[i].name.replace("-clone", "") + "Qty"]--;
                const_var.scene.remove(const_var.b_d_g_b_O_c[i]);
                if (const_var.b_d_g_b_O_c[i].splitName == "Trimkit") {
                    const_var.b_d_g_b_O_c.splice(i, 1);
                    //const_var.b_d_g_b_O_c.splice(0, 1);const_var.b_d_g_b_O_c.splice(0, 1);
                }
                if (wallSide == "barnleft") {
                    wallSide = "ltleft";
                } else if (wallSide == "barnright") {
                    wallSide = "ltright";
                }
                //ArrowNDistance.checkNewDoorPlace(wallSide.toLowerCase());
            }
        }
    }
    // for (var i = 0; i < const_var.b_d_g_b_O_cN.length; i++) {
    //     if (const_var.b_d_g_b_O_cN[i].uniqueId == Val) {
    //         const_var.b_d_g_b_O_cN.splice(i, 1);
    //     }
    // }

    for (var i = 0; i < const_var.ManageDoorArrar[wallSide].length; i++) {
        var len = const_var.makeArrayForComponent[params.p_d].length;
        if (const_var.ManageDoorArrar[wallSide][i].uniqueId == Val) {
            const componentName = const_var.ManageDoorArrar[wallSide][i].splitName;
            if (wallSide == "BarnLeft") {
                wallSide = "ltleft";
                len = const_var.makeArrayForComponent_Barn[params.lean_p_d].length;
            } else if (wallSide == "BarnRight") {
                wallSide = "ltright";
                len = const_var.makeArrayForComponent_BarnR[params.leanR_p_d].length;
            }

            if (componentName === "walkDoorSolid") {
                for (var j = 0; j < len; j++) {
                    if (wallSide === "left") {
                        const_var.scene.getObjectByName("TrussCloneL" + j).children[0].position.x = 0.15;
                        setLegColor(const_var.scene.getObjectByName("TrussCloneL" + j).children[0], "0xbbbbbb");
                    }
                    if (wallSide === "right") {
                        const_var.scene.getObjectByName("TrussCloneR" + j).children[373].position.x = 0.15;
                        setLegColor(const_var.scene.getObjectByName("TrussCloneR" + j).children[373], "0xbbbbbb");
                    }
                    if (wallSide === "ltleft") {
                        const_var.scene.getObjectByName("TrussCloneLeanL" + j).children[0].position.x = 0.15;
                        setLegColor(const_var.scene.getObjectByName("TrussCloneLeanL" + j).children[0], "0xbbbbbb");
                    }
                    if (wallSide === "ltright") {
                        const_var.scene.getObjectByName("TrussCloneLeanR" + j).children[16].position.x = 0.15;
                        setLegColor(const_var.scene.getObjectByName("TrussCloneLeanR" + j).children[16], "0xbbbbbb");
                    }
                }
                if (wallSide == "left") {
                    params.lDoorTopFrame[i].visible = false;
                    params.lDoorLeftFrame[i].visible = false;
                    params.lDoorRightFrame[i].visible = false;
                    params.lDoorLeftBar[i].visible = false;
                    params.lDoorRightBar[i].visible = false;
                }
                if (wallSide == "right") {
                    params.rDoorTopFrame[i].visible = false;
                    params.rDoorLeftFrame[i].visible = false;
                    params.rDoorRightFrame[i].visible = false;
                    params.rDoorLeftBar[i].visible = false;
                    params.rDoorRightBar[i].visible = false;
                }
            } else {
                if (wallSide == "left") {
                    params.lHeaderbar[i].visible = false;
                    params.lDoorLeftFrame[i].visible = false;
                    params.lDoorRightFrame[i].visible = false;
                    params.lDLeftBaseRail[i].visible = false;
                    params.lDRightBaseRail[i].visible = false;
                }
                if (wallSide == "right") {
                    params.rHeaderbar[i].visible = false;
                    params.rDoorLeftFrame[i].visible = false;
                    params.rDoorRightFrame[i].visible = false;
                    params.rDLeftBaseRail[i].visible = false;
                    params.rDRightBaseRail[i].visible = false;
                }
                if (wallSide === "ltleft") {
                    params.ltlHeaderbar[i].visible = false;
                    if (params.ltlBaseRail[i]) params.ltlBaseRail[i].visible = false;
                    params.ltlDoorLeftFrame[i].visible = false;
                    params.ltlDoorRightFrame[i].visible = false;
                }
                if (wallSide === "ltright") {
                    params.ltrHeaderbar[i].visible = false;
                    if (params.ltrBaseRail[i]) params.ltrBaseRail[i].visible = false;
                    params.ltrDoorLeftFrame[i].visible = false;
                    params.ltrDoorRightFrame[i].visible = false;
                }
            }
            const_var.ManageDoorArrar[wallSide].splice(i, 1);
            if (const_var.ManageDoorArrar[wallSide].length > 0) {
                //cutBsRail.cutBaseRails(wallSide)
            } else {
                if (wallSide === "left") {
                    const_var.scene.getObjectByName("baseRailLeft").visible = true;
                }
                if ((wallSide = "right")) {
                    const_var.scene.getObjectByName("baseRailRight").visible = true;
                }
            }
        }
    }
    for (var i = 0; i < const_var.ManageWindowArrar[wallSide].length; i++) {
        var len = const_var.makeArrayForComponent[params.p_d].length;
        if (const_var.ManageWindowArrar[wallSide][i].uniqueId == Val) {
            if (wallSide === "BarnLeft") {
                wallSide = "ltleft";
                len = const_var.makeArrayForComponent_Barn[params.lean_p_d].length;
            } else if (wallSide === "BarnRight") {
                wallSide = "ltright";
                len = const_var.makeArrayForComponent_BarnR[params.leanR_p_d].length;
            }

            if (const_var.ManageWindowArrar[wallSide][i].splitName === "window") {
                for (var j = 0; j < len; j++) {
                    if (wallSide === "left") {
                        const_var.scene.getObjectByName("TrussCloneL" + j).children[0].position.x = 0.15;
                        setLegColor(const_var.scene.getObjectByName("TrussCloneL" + j).children[0], "0xbbbbbb");
                    }
                    if (wallSide === "right") {
                        const_var.scene.getObjectByName("TrussCloneR" + j).children[373].position.x = 0.15;
                        setLegColor(const_var.scene.getObjectByName("TrussCloneR" + j).children[373], "0xbbbbbb");
                    }
                    if (wallSide === "ltleft" || wallSide === "BarnLeft") {
                        const_var.scene.getObjectByName("TrussCloneLeanL" + j).children[0].position.x = 0.15;
                        setLegColor(const_var.scene.getObjectByName("TrussCloneLeanL" + j).children[0], "0xbbbbbb");
                        const_var.scene.getObjectByName("TrussCloneLeanL" + i).children[0].visible = const_var.TypeEnum[params.p_r_s] !== "Regular";
                    }
                    if (wallSide === "ltright" || wallSide === "BarnRight") {
                        const_var.scene.getObjectByName("TrussCloneLeanR" + j).children[16].position.x = 0.15;
                        setLegColor(const_var.scene.getObjectByName("TrussCloneLeanR" + j).children[16], "0xbbbbbb");
                        const_var.scene.getObjectByName("TrussCloneLeanR" + i).children[16].visible = const_var.TypeEnum[params.p_r_s] !== "Regular";
                    }
                }
            }
            const_var.ManageWindowArrar[wallSide].splice(i, 1);
            if (wallSide === "left") {
                params.lWindowUpFrame[i].visible = false;
                params.lWindowBottomFrame[i].visible = false;
                params.lWindowLeftFrame[i].visible = false;
                params.lWindowRightFrame[i].visible = false;
                params.lWindowLeftBar[i].visible = false;
                params.lWindowRightBar[i].visible = false;
            }
            if (wallSide === "right") {
                params.rWindowUpFrame[i].visible = false;
                params.rWindowBottomFrame[i].visible = false;
                params.rWindowLeftFrame[i].visible = false;
                params.rWindowRightFrame[i].visible = false;
                params.rWindowLeftBar[i].visible = false;
                params.rWindowRightBar[i].visible = false;
            }
        }
    }
    for (var i = 0; i < const_var.ManageGlobalComponent[wallSide].length; i++) {
        if (const_var.ManageGlobalComponent[wallSide][i].uniqueId == Val) {
            var doorSide = const_var.ManageGlobalComponent[wallSide][i].pos;
            if (const_var.ManageGlobalComponent[wallSide][i].BarnPos == "BarnLeft") {
                doorSide = "ltleft";
            } else if (const_var.ManageGlobalComponent[wallSide][i].BarnPos == "BarnRight") {
                doorSide = "ltright";
            }
            const_var.ManageGlobalComponent[wallSide].splice(i, 1);
            //ArrowNDistance.checkNewDoorPlace(doorSide.toLowerCase());
        }
    }
    for (var i = 0; i <= const_var.d_w_a_r.length - 1; i++) {
        if (const_var.d_w_a_r[i].uniqueId == Val) {
            const_var.d_w_a_r.splice(i, 1);
        }
    }
    const_var.entry_points.map((val, i) => {
        if (val.uniqueId == Val) {
            const_var.entry_points.splice(i, 1);
        }
    });
    for (var i = 0; i < const_var.entry_points.length; i++) { }
    for (var i = 0; i <= const_var.H_d_l_D_r_ar["front"].length - 1; i++) {
        if (const_var.H_d_l_D_r_ar["front"][i] == Val) {
            const_var.H_d_l_D_r_ar["front"].splice(i, 1);
        }
    }
    for (var i = 0; i <= const_var.H_d_l_D_r_ar["back"].length - 1; i++) {
        if (const_var.H_d_l_D_r_ar["back"][i] == Val) {
            const_var.H_d_l_D_r_ar["back"].splice(i, 1);
        }
    }

    UpdateLegPosAccordingtoWall(Val, Posi, BarnPos);
    //const_var.H_d_l_D_r_ar["front"].splice(const_var.H_d_l_D_r_ar["front"].length-1, 1);
    cuBuilding.cP();
    const_var.showComponentEditBox = false;
    params.wallPos = "Select";
};
export const rEaEfWbW = function (object, val) {
    if (val == "all") {
        // for(var i=0;i<object.length;i++)
        for (var i = object.length - 1; i >= 0; i--) {
            if (
                "b_B_g_B" != object[i].name &&
                "b_h_t1Bx" != object[i].name &&
                "b_h_t2Bx" != object[i].name &&
                "b_h_t5Bx" != object[i].name &&
                "b_h_t6Bx" != object[i].name &&
                "b_h_t3Bx" != object[i].name &&
                "b_h_t4Bx" != object[i].name &&
                "b_h_t7Bx" != object[i].name &&
                "b_h_t7Bx" != object[i].name &&
                "b_h_t8Bx" != object[i].name
            ) {
                if (
                    object[i].BarnPos == "front" ||
                    object[i].BarnPos == "back" ||
                    object[i].BarnPos == "left" ||
                    object[i].BarnPos == "right" ||
                    object[i].BarnPos == "FrontS"
                ) {
                    const_var.scene.remove(object[i]);
                    //RmComtFmLtgDrbyw(object[i].uniqueId,object[i].uniqueId,object[i].pos,object[i].BarnPos);
                    if (object[i] != undefined) {
                        object[i].visible = false;
                        params[object[i].name.replace("-clone", "") + "Qty"]--;
                        //const_var.scene.remove(object[i]);
                    }
                    RmComtFmLtgDrbyw(object[i].uniqueId, object[i].uniqueId, object[i].pos, object[i].BarnPos);
                }
            }
        }
    } else {
        // for(var i=0;i<object.length;i++)
        for (var i = object.length - 1; i >= 0; i--) {
            if (
                "b_B_g_B" != object[i].name &&
                "b_h_t1Bx" != object[i].name &&
                "b_h_t2Bx" != object[i].name &&
                "b_h_t5Bx" != object[i].name &&
                "b_h_t6Bx" != object[i].name &&
                "b_h_t3Bx" != object[i].name &&
                "b_h_t4Bx" != object[i].name &&
                "b_h_t7Bx" != object[i].name &&
                "b_h_t7Bx" != object[i].name &&
                "b_h_t8Bx" != object[i].name
            ) {
                if (object[i].BarnPos == val) {
                    const_var.scene.remove(object[i]);
                    //RmComtFmLtgDrbyw(object[i].uniqueId,object[i].uniqueId,object[i].pos,object[i].BarnPos);
                    if (object[i] != undefined) {
                        object[i].visible = false;
                        params[object[i].name.replace("-clone", "") + "Qty"]--;
                        const_var.scene.remove(object[i]);
                    }
                    RmComtFmLtgDrbyw(object[i].uniqueId, object[i].uniqueId, object[i].pos, object[i].BarnPos);
                }
            }
        }
    }
};

export const RmComtFmLtgDrbyw = (Val, unique, Posi, BarnPos) => {
    var wallSide = "";
    if (BarnPos != "BarnRight" && BarnPos != "BarnLeft") {
        TestNew(Posi);
        Test(Posi);
        //autoRotateBuilding(Posi.charAt(0).toUpperCase() + Posi.slice(1));
    }
    //for(var i=0;i<const_var.b_d_g_b_O_c.length;i++)
    for (var i = const_var.b_d_g_b_O_c.length - 1; i >= 0; i--) {
        if (
            "b_B_g_B" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t1Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t2Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t5Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t6Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t3Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t4Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t7Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t8Bx" != const_var.b_d_g_b_O_c[i].name &&
            false == const_var.b_d_g_b_O_c[i].name.includes("-EDIT") &&
            false == const_var.b_d_g_b_O_c[i].name.includes("-DELETE")
        ) {
            //console.log(const_var.b_d_g_b_O_c,const_var.b_d_g_b_O_c[i].uniqueId,Val);
            if (const_var.b_d_g_b_O_c[i].uniqueId == Val) {
                wallSide = const_var.b_d_g_b_O_c[i].BarnPos.toLowerCase();
                Posi = Posi == "" ? const_var.b_d_g_b_O_c[i].pos : Posi;
                BarnPos = BarnPos == "" ? const_var.b_d_g_b_O_c[i].BarnPos : BarnPos;
                const_var.b_d_g_b_O_c[i].visible = false;
                params[const_var.b_d_g_b_O_c[i].name.replace("-clone", "") + "Qty"]--;
                //const_var.scene.remove(const_var.b_d_g_b_O_c[i]);
                if (const_var.b_d_g_b_O_c[i].splitName == "Trimkit") {
                    const_var.b_d_g_b_O_c.splice(i, 1);
                    //const_var.b_d_g_b_O_c.splice(0, 1);const_var.b_d_g_b_O_c.splice(0, 1);
                }
                const_var.b_d_g_b_O_c.splice(i, 1);
                if (wallSide == "barnleft") {
                    wallSide = "ltleft";
                } else if (wallSide == "barnright") {
                    wallSide = "ltright";
                }
                //ArrowNDistance.checkNewDoorPlace(wallSide.toLowerCase());
            }
        }
    }
    // for (var i = 0; i < const_var.b_d_g_b_O_cN.length; i++) {
    //     if (const_var.b_d_g_b_O_cN[i].uniqueId == Val) {
    //         const_var.b_d_g_b_O_cN.splice(i, 1);
    //     }
    // }
    for (var i = 0; i < const_var.ManageDoorArrar[Posi].length; i++) {
        if (const_var.ManageDoorArrar[Posi][i].uniqueId == Val) {
            const_var.ManageDoorArrar[Posi].splice(i, 1);
        }
    }
    for (var i = 0; i < const_var.ManageGlobalComponent[wallSide].length; i++) {
        if (const_var.ManageGlobalComponent[wallSide][i].uniqueId == Val) {
            const_var.ManageGlobalComponent[wallSide].splice(i, 1);
        }
    }
    //for(var i=0;i<=const_var.d_w_a_r.length-1;i++)
    for (var i = const_var.d_w_a_r.length - 1; i >= 0; i--) {
        if (const_var.d_w_a_r[i].uniqueId == Val) {
            var indexNew = chk_order_data_door(const_var.entry_points, Val);
            if (indexNew != null) {
                const_var.entry_points.splice(indexNew, 1);
            }
            const_var.d_w_a_r.splice(i, 1);
        }
    }
    for (var i = 0; i <= const_var.H_d_l_D_r_ar["front"].length - 1; i++) {
        if (const_var.H_d_l_D_r_ar["front"][i] == Val) {
            const_var.H_d_l_D_r_ar["front"].splice(i, 1);
        }
    }
    for (var i = 0; i <= const_var.H_d_l_D_r_ar["back"].length - 1; i++) {
        if (const_var.H_d_l_D_r_ar["back"][i] == Val) {
            const_var.H_d_l_D_r_ar["back"].splice(i, 1);
        }
    }

    UpdateLegPosAccordingtoWall(Val, Posi, BarnPos);
    //const_var.H_d_l_D_r_ar["front"].splice(const_var.H_d_l_D_r_ar["front"].length-1, 1);
    cuBuilding.cP();
    params.wallPos = "Select";
};

export const LtgClAtn = (Val, Type, DoorType, Posi, iid) => {
    //console.log(Val,Type,DoorType,Posi,iid,"Val,Type,DoorType,Posi,iid")
    for (var i = 0; i < const_var.b_d_g_b_O_c.length; i++) {
        if (
            "b_B_g_B" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t1Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t2Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t5Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t6Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t3Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t4Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t7Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t8Bx" != const_var.b_d_g_b_O_c[i].name &&
            false == const_var.b_d_g_b_O_c[i].name.includes("-EDIT") &&
            false == const_var.b_d_g_b_O_c[i].name.includes("-DELETE")
        ) {
            if (const_var.b_d_g_b_O_c[i].uniqueId == iid) {
                var wallSide = const_var.b_d_g_b_O_c[i].BarnPos;
                if (wallSide != "BarnRight" && wallSide != "BarnLeft") {
                    TestNew(Posi);
                    Test(Posi);
                }
                Val = const_var.b_d_g_b_O_c[i].exactDoorDimension;
                params.UpdatedDoorPosOnEdit = const_var.b_d_g_b_O_c[i].BarnPos;
                params.DoorPosOnEdit = const_var.b_d_g_b_O_c[i].position;
                params.DoorRotOnEdit = const_var.b_d_g_b_O_c[i].rotation.y;
                params.DoorLocOnEdit = const_var.b_d_g_b_O_c[i].pos;
            }
        }
    }
    //params.DoorLocOnEdit = "";
    //cSbA(true);
    params.f_r_m_o_t = "Select";
    params.f_r_m_o_t1 = "Select";
    if (params.trimkit == false) {
        if (DoorType == "garage") {
            if (Type == "CustomFrameout") {
                // var splitval1 = Val.split("_");
                // var splitval = splitval1[0].split("X");
                // params.f_r_m_o_t = splitval[0];
                // params.f_r_m_o_t1 = splitval[1];
                params.p_a_g_r_u_d = Val;
                params.doorType = Type;
            } else {
                params.p_a_g_r_u_d = Val;
                params.doorType = Type;
            }
            const_var.editComponentDimension = params.p_a_g_r_u_d;
            if (const_var.editComponentDimension == "CustomGarageSize") {
                params.customW = params.customW < 5 ? 5 : params.customW;
                params.customH = params.customH < 5 ? 5 : params.customH;
            }
            if (Type == "CustomFrameout") {
                params.p_a_g_r_u_d =
                    const_var.editComponentDimension == "CustomGarageSize" ? params.customW + "X" + params.customH + "_Frameout" : params.p_a_g_r_u_d;
                var splitval1 = params.p_a_g_r_u_d.split("_");
                var splitval = splitval1[0].split("X");
                params.f_r_m_o_t = splitval[0];
                params.f_r_m_o_t1 = splitval[1];
                params.doorType = Type;
            } else {
                params.p_a_g_r_u_d =
                    const_var.editComponentDimension == "CustomGarageSize" ? params.customW + "X" + params.customH : params.p_a_g_r_u_d;
            }
            aDw("garageRollUpDoor_" + params.p_a_g_r_u_d, params.p_a_g_r_u_d);
        }
        if (DoorType == "door") {
            params.p_d_c = Val;
            params.doorType = Type;
            const_var.editComponentDimension = params.p_d_c;
            if (const_var.editComponentDimension == "CustomGarageSize") {
                params.customW = params.customW < 5 ? 5 : params.customW;
                params.customH = params.customH < 5 ? 5 : params.customH;
            }
            if (Type == "WalkFrameout") {
                params.p_d_c =
                    const_var.editComponentDimension == "CustomGarageSize" ? params.customW + "X" + params.customH + "_Frameout" : params.p_d_c;
            } else {
                params.p_d_c = const_var.editComponentDimension == "CustomGarageSize" ? params.customW + "X" + params.customH : params.p_d_c;
            }
            aDw("walkDoorSolid" + params.p_d_c, params.p_d_c);
        }
        if (DoorType == "window") {
            params.p_w_cc = Val;
            params.doorType = Type;
            const_var.editComponentDimension = params.p_w_cc;
            if (const_var.editComponentDimension == "CustomGarageSize") {
                params.customW = params.customW < 5 ? 5 : params.customW;
                params.customH = params.customH < 5 ? 5 : params.customH;
            }
            if (Type == "WindowsFrameout") {
                params.p_w_cc =
                    const_var.editComponentDimension == "CustomGarageSize" ? params.customW + "X" + params.customH + "_Frameout" : params.p_w_cc;
            } else {
                params.p_w_cc = const_var.editComponentDimension == "CustomGarageSize" ? params.customW + "X" + params.customH : params.p_w_cc;
            }
            aDw("window" + params.p_w_cc, params.p_w_cc);
        }
    } else {
        params.p_a_g_r_u_d = Val;
        params.doorType = Type;
        const_var.editComponentDimension = params.p_a_g_r_u_d;
        if (const_var.editComponentDimension == "CustomGarageSize") {
            params.customW = params.customW < 5 ? 5 : params.customW;
            params.customH = params.customH < 5 ? 5 : params.customH;
        }
        if (Type == "CustomFrameout") {
            params.p_a_g_r_u_d =
                const_var.editComponentDimension == "CustomGarageSize" ? params.customW + "X" + params.customH + "_Frameout" : params.p_a_g_r_u_d;
            var splitval1 = params.p_a_g_r_u_d.split("_");
            var splitval = splitval1[0].split("X");
            params.f_r_m_o_t = splitval[0];
            params.f_r_m_o_t1 = splitval[1];
            params.doorType = Type;
        } else {
            params.p_a_g_r_u_d = const_var.editComponentDimension == "CustomGarageSize" ? params.customW + "X" + params.customH : params.p_a_g_r_u_d;
        }
        //params.p_a_g_r_u_d = (const_var.editComponentDimension=="CustomGarageSize")?params.customW+"X"+params.customH:params.p_a_g_r_u_d;
        TrimLoad("Trimkit_" + params.p_a_g_r_u_d, params.p_a_g_r_u_d);
    }

    const_var.f_r_o_d = "";
    cuBuilding.cP(const_var.a_p_d_a);
    const_var.showComponentEditBox = false;
    //}, 1500);
    //rLaSt(false);
};

export const UpdateLegPosAccordingtoWall = (ID, Posi, BarnPos) => {
    if (BarnPos == "left" && const_var.d_w_a_r_N_w != undefined && const_var.d_w_a_r_N_w[ID] != undefined && const_var.d_w_a_r_N_w[ID].length != 0) {
        var hdrBanH = params.p_h - 0.5 - 0.01;
        if (params.singleSlope == true) {
            hdrBanH = params.p_h - (params.p_w * Math.abs(params.p_r_p)) / 12; //  - .5 -0.01;
        } else {
            hdrBanH = params.p_h - 0.5 - 0.01;
        }
        var index = fnFdIdxBkUiDN(const_var.d_w_a_r_N_w, ID, "doorplace", "TrussCloneL" + const_var.d_w_a_r_N_w[ID][0].index);
        if (index == null) {
            for (var i = 0; i <= const_var.d_w_a_r_N_w[ID].length - 1; i++) {
                const_var.scene.getObjectByName("TrussCloneL" + const_var.d_w_a_r_N_w[ID][i].index).children[0].scale.z = hdrBanH; //params.p_h- .5-0.01;
                const_var.scene.getObjectByName("TrussCloneL" + const_var.d_w_a_r_N_w[ID][i].index).children[1].scale.z = hdrBanH; //params.p_h- .5-0.01;
                const_var.scene.getObjectByName("TrussCloneL" + const_var.d_w_a_r_N_w[ID][i].index).children[4].scale.z = hdrBanH; //params.p_h- .5-0.01;
                const_var.scene.getObjectByName("TrussCloneL" + const_var.d_w_a_r_N_w[ID][i].index).children[5].scale.z = hdrBanH; //params.p_h- .5-0.01;
                const_var.scene.getObjectByName("TrussCloneL" + const_var.d_w_a_r_N_w[ID][i].index).children[0].position.y = 0.01;
                const_var.scene.getObjectByName("TrussCloneL" + const_var.d_w_a_r_N_w[ID][i].index).children[1].position.y = 0.01;
                const_var.scene.getObjectByName("TrussCloneL" + const_var.d_w_a_r_N_w[ID][i].index).children[4].position.y = 0.01;
                const_var.scene.getObjectByName("TrussCloneL" + const_var.d_w_a_r_N_w[ID][i].index).children[5].position.y = 0.01;
                const_var.scene.getObjectByName("TrussCloneL" + const_var.d_w_a_r_N_w[ID][i].index).children[8].scale.z = hdrBanH; //params.p_h- .5-0.01;
                const_var.scene.getObjectByName("TrussCloneL" + const_var.d_w_a_r_N_w[ID][i].index).children[9].scale.z = hdrBanH; //params.p_h- .5-0.01;
                const_var.scene.getObjectByName("TrussCloneL" + const_var.d_w_a_r_N_w[ID][i].index).children[8].position.y = 0.01;
                const_var.scene.getObjectByName("TrussCloneL" + const_var.d_w_a_r_N_w[ID][i].index).children[9].position.y = 0.01;
                if (
                    const_var.c_m_a[params.p_b_t] != undefined &&
                    const_var.c_m_a[params.p_b_t].trussType.length > 0 &&
                    const_var.c_m_a[params.p_b_t].trussType[0].name != "CTCT3" &&
                    const_var.c_m_a[params.p_b_t].trussType[0].name != "CTCT4"
                ) {
                    const_var.scene.getObjectByName("TrussCloneL" + const_var.d_w_a_r_N_w[ID][i].index).children[354].visible =
                        params.p_w < 31 ||
                            const_var.b_r_g_v == "4" ||
                            const_var.b_r_g_v == "5" ||
                            const_var.b_r_g_v == "6" ||
                            const_var.b_r_g_v == "7" ||
                            const_var.b_r_g_v == "8" ||
                            const_var.b_r_g_v == "9" ||
                            const_var.b_r_g_v == "10" ||
                            const_var.b_r_g_v == "11" ||
                            const_var.b_r_g_v == "12"
                            ? true
                            : false;
                    const_var.scene.getObjectByName("TrussCloneL" + const_var.d_w_a_r_N_w[ID][i].index).children[176].visible =
                        params.p_w > 30 &&
                            (const_var.b_r_g_v == "1" || const_var.b_r_g_v == "2" || const_var.b_r_g_v == "3" || const_var.b_r_g_v == "13")
                            ? true
                            : false;
                    const_var.scene.getObjectByName("TrussCloneL" + const_var.d_w_a_r_N_w[ID][i].index).children[177].visible =
                        params.p_w > 30 &&
                            (const_var.b_r_g_v == "1" || const_var.b_r_g_v == "2" || const_var.b_r_g_v == "3" || const_var.b_r_g_v == "13")
                            ? true
                            : false;
                }
                if (
                    const_var.c_m_a[params.p_b_t] != undefined &&
                    const_var.c_m_a[params.p_b_t].trussType.length > 0 &&
                    (const_var.c_m_a[params.p_b_t].trussType[0].name == "CTCT3" || const_var.c_m_a[params.p_b_t].trussType[0].name == "CTCT4")
                ) {
                    const_var.scene.getObjectByName("TrussCloneL" + const_var.d_w_a_r_N_w[ID][i].index).children[2].visible = true;
                    const_var.scene.getObjectByName("TrussCloneL" + const_var.d_w_a_r_N_w[ID][i].index).children[3].visible = true;
                }
                if (
                    (const_var.legstype != undefined && const_var.legstype == "ladder") ||
                    (const_var.c_m_a[params.p_b_t] != undefined &&
                        const_var.c_m_a[params.p_b_t].trussType.length > 0 &&
                        (const_var.c_m_a[params.p_b_t].trussType[0].name == "CTCT3" || const_var.c_m_a[params.p_b_t].trussType[0].name == "CTCT4"))
                ) {
                    if (
                        const_var.c_m_a[params.p_b_t] != undefined &&
                        const_var.c_m_a[params.p_b_t].trussType.length > 0 &&
                        (const_var.c_m_a[params.p_b_t].trussType[0].name == "CTCT3" || const_var.c_m_a[params.p_b_t].trussType[0].name == "CTCT4")
                    ) {
                        var lengthLegs = 70 + Math.round(params.p_h / 2) - 1 + Math.round(params.p_h / 2) - 1;
                        var loopVal = Math.round(params.p_h / 2) - 1;
                    } else {
                        var lengthLegs = 70 + Math.round(params.p_h / 2) + Math.round(params.p_h / 2);
                        var loopVal = Math.round(params.p_h / 2);
                    }
                    for (let jj = 0; jj < loopVal; jj++) {
                        for (let ii = 70; ii <= lengthLegs; ii++) {
                            if (
                                "B_t_u_s_W_l_S_p_T" + jj ==
                                const_var.scene.getObjectByName("TrussCloneL" + const_var.d_w_a_r_N_w[ID][i].index).children[ii].name
                            ) {
                                const_var.scene.getObjectByName("TrussCloneL" + const_var.d_w_a_r_N_w[ID][i].index).children[ii].visible = true;
                            }
                        }
                    }
                }
            }
        }
    }
    if (
        BarnPos == "BarnLeft" &&
        const_var.d_w_a_r_N_w != undefined &&
        const_var.d_w_a_r_N_w[ID] != undefined &&
        const_var.d_w_a_r_N_w[ID].length != 0
    ) {
        var index = fnFdIdxBkUiDN(const_var.d_w_a_r_N_w, ID, "doorplace", "TrussCloneLeanL" + const_var.d_w_a_r_N_w[ID][0].index);
        if (index == null) {
            for (var i = 0; i <= const_var.d_w_a_r_N_w[ID].length - 1; i++) {
                if (const_var.scene.getObjectByName("TrussCloneLeanL" + const_var.d_w_a_r_N_w[ID][i].index) != undefined) {
                    const_var.scene.getObjectByName("TrussCloneLeanL" + const_var.d_w_a_r_N_w[ID][i].index).children[0].scale.z =
                        params.lean_p_h - 0.5 - 0.01;
                    const_var.scene.getObjectByName("TrussCloneLeanL" + const_var.d_w_a_r_N_w[ID][i].index).children[1].scale.z =
                        params.lean_p_h - 0.5 - 0.01;
                    const_var.scene.getObjectByName("TrussCloneLeanL" + const_var.d_w_a_r_N_w[ID][i].index).children[4].visible = true;
                    const_var.scene.getObjectByName("TrussCloneLeanL" + const_var.d_w_a_r_N_w[ID][i].index).children[5].visible = true;
                    const_var.scene.getObjectByName("TrussCloneLeanL" + const_var.d_w_a_r_N_w[ID][i].index).children[0].position.y = 0.01;
                    const_var.scene.getObjectByName("TrussCloneLeanL" + const_var.d_w_a_r_N_w[ID][i].index).children[1].position.y = 0.01;
                    const_var.scene.getObjectByName("TrussCloneLeanL" + const_var.d_w_a_r_N_w[ID][i].index).children[2].scale.z =
                        params.lean_p_h - 0.5 - 0.01;
                    const_var.scene.getObjectByName("TrussCloneLeanL" + const_var.d_w_a_r_N_w[ID][i].index).children[3].scale.z =
                        params.lean_p_h - 0.5 - 0.01;
                    const_var.scene.getObjectByName("TrussCloneLeanL" + const_var.d_w_a_r_N_w[ID][i].index).children[2].position.y = 0.01;
                    const_var.scene.getObjectByName("TrussCloneLeanL" + const_var.d_w_a_r_N_w[ID][i].index).children[3].position.y = 0.01;
                }
            }
        }
    }
    if (BarnPos == "right" && const_var.d_w_a_r_N_w != undefined && const_var.d_w_a_r_N_w[ID] != undefined && const_var.d_w_a_r_N_w[ID].length != 0) {
        var index = fnFdIdxBkUiDN(const_var.d_w_a_r_N_w, ID, "doorplace", "TrussCloneR" + const_var.d_w_a_r_N_w[ID][0].index);
        if (index == null) {
            for (var i = 0; i <= const_var.d_w_a_r_N_w[ID].length - 1; i++) {
                if (const_var.scene.getObjectByName("TrussCloneR" + const_var.d_w_a_r_N_w[ID][i].index) != undefined) {
                    const_var.scene.getObjectByName("TrussCloneR" + const_var.d_w_a_r_N_w[ID][i].index).children[373].scale.z =
                        params.p_h - 0.5 - 0.01;
                    const_var.scene.getObjectByName("TrussCloneR" + const_var.d_w_a_r_N_w[ID][i].index).children[374].scale.z =
                        params.p_h - 0.5 - 0.01;
                    const_var.scene.getObjectByName("TrussCloneR" + const_var.d_w_a_r_N_w[ID][i].index).children[373].position.y = 0.01;
                    const_var.scene.getObjectByName("TrussCloneR" + const_var.d_w_a_r_N_w[ID][i].index).children[374].position.y = 0.01;
                    const_var.scene.getObjectByName("TrussCloneR" + const_var.d_w_a_r_N_w[ID][i].index).children[377].scale.z =
                        params.p_h - 0.5 - 0.01;
                    const_var.scene.getObjectByName("TrussCloneR" + const_var.d_w_a_r_N_w[ID][i].index).children[378].scale.z =
                        params.p_h - 0.5 - 0.01;
                    const_var.scene.getObjectByName("TrussCloneR" + const_var.d_w_a_r_N_w[ID][i].index).children[377].position.y = 0.01;
                    const_var.scene.getObjectByName("TrussCloneR" + const_var.d_w_a_r_N_w[ID][i].index).children[378].position.y = 0.01;
                    const_var.scene.getObjectByName("TrussCloneR" + const_var.d_w_a_r_N_w[ID][i].index).children[381].scale.z =
                        params.p_h - 0.5 - 0.01;
                    const_var.scene.getObjectByName("TrussCloneR" + const_var.d_w_a_r_N_w[ID][i].index).children[382].scale.z =
                        params.p_h - 0.5 - 0.01;
                    const_var.scene.getObjectByName("TrussCloneR" + const_var.d_w_a_r_N_w[ID][i].index).children[381].position.y = 0.01;
                    const_var.scene.getObjectByName("TrussCloneR" + const_var.d_w_a_r_N_w[ID][i].index).children[382].position.y = 0.01;
                    if (
                        const_var.c_m_a[params.p_b_t] != undefined &&
                        const_var.c_m_a[params.p_b_t].trussType.length > 0 &&
                        const_var.c_m_a[params.p_b_t].trussType[0].name != "CTCT3" &&
                        const_var.c_m_a[params.p_b_t].trussType[0].name != "CTCT4"
                    ) {
                        const_var.scene.getObjectByName("TrussCloneR" + const_var.d_w_a_r_N_w[ID][i].index).children[354].visible =
                            params.p_w < 31 ||
                                const_var.b_r_g_v == "4" ||
                                const_var.b_r_g_v == "5" ||
                                const_var.b_r_g_v == "6" ||
                                const_var.b_r_g_v == "7" ||
                                const_var.b_r_g_v == "8" ||
                                const_var.b_r_g_v == "9" ||
                                const_var.b_r_g_v == "10" ||
                                const_var.b_r_g_v == "11" ||
                                const_var.b_r_g_v == "12"
                                ? true
                                : false;
                        const_var.scene.getObjectByName("TrussCloneR" + const_var.d_w_a_r_N_w[ID][i].index).children[367].visible =
                            params.p_w > 30 &&
                                (const_var.b_r_g_v == "1" || const_var.b_r_g_v == "2" || const_var.b_r_g_v == "3" || const_var.b_r_g_v == "13")
                                ? true
                                : false;
                        const_var.scene.getObjectByName("TrussCloneR" + const_var.d_w_a_r_N_w[ID][i].index).children[368].visible =
                            params.p_w > 30 &&
                                (const_var.b_r_g_v == "1" || const_var.b_r_g_v == "2" || const_var.b_r_g_v == "3" || const_var.b_r_g_v == "13")
                                ? true
                                : false;
                    }
                    if (
                        const_var.c_m_a[params.p_b_t] != undefined &&
                        const_var.c_m_a[params.p_b_t].trussType.length > 0 &&
                        (const_var.c_m_a[params.p_b_t].trussType[0].name == "CTCT3" || const_var.c_m_a[params.p_b_t].trussType[0].name == "CTCT4")
                    ) {
                        const_var.scene.getObjectByName("TrussCloneR" + const_var.d_w_a_r_N_w[ID][i].index).children[375].visible = true;
                        const_var.scene.getObjectByName("TrussCloneR" + const_var.d_w_a_r_N_w[ID][i].index).children[376].visible = true;
                    }
                    if (
                        (const_var.legstype != undefined && const_var.legstype == "ladder") ||
                        (const_var.c_m_a[params.p_b_t] != undefined &&
                            const_var.c_m_a[params.p_b_t].trussType.length > 0 &&
                            (const_var.c_m_a[params.p_b_t].trussType[0].name == "CTCT3" ||
                                const_var.c_m_a[params.p_b_t].trussType[0].name == "CTCT4"))
                    ) {
                        if (
                            const_var.c_m_a[params.p_b_t] != undefined &&
                            const_var.c_m_a[params.p_b_t].trussType.length > 0 &&
                            (const_var.c_m_a[params.p_b_t].trussType[0].name == "CTCT3" || const_var.c_m_a[params.p_b_t].trussType[0].name == "CTCT4")
                        ) {
                            var lengthLegs = 383 + Math.round(params.p_h / 2) - 1 + Math.round(params.p_h / 2) - 1;
                            var loopVal = Math.round(params.p_h / 2) - 1;
                        } else {
                            var lengthLegs = 383 + Math.round(params.p_h / 2) + Math.round(params.p_h / 2);
                            var loopVal = Math.round(params.p_h / 2);
                        }
                        for (let jj = 0; jj < loopVal; jj++) {
                            for (let ii = 383; ii <= lengthLegs; ii++) {
                                if (
                                    "B_t_u_s_W_l_S_p_T_r_h_T" + jj ==
                                    const_var.scene.getObjectByName("TrussCloneR" + const_var.d_w_a_r_N_w[ID][i].index).children[ii].name
                                ) {
                                    const_var.scene.getObjectByName("TrussCloneR" + const_var.d_w_a_r_N_w[ID][i].index).children[ii].visible = true;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (
        BarnPos == "BarnRight" &&
        const_var.d_w_a_r_N_w != undefined &&
        const_var.d_w_a_r_N_w[ID] != undefined &&
        const_var.d_w_a_r_N_w[ID].length != 0
    ) {
        var index = fnFdIdxBkUiDN(const_var.d_w_a_r_N_w, ID, "doorplace", "TrussCloneLeanR" + const_var.d_w_a_r_N_w[ID][0].index);
        if (index == null) {
            for (var i = 0; i <= const_var.d_w_a_r_N_w[ID].length - 1; i++) {
                if (const_var.scene.getObjectByName("TrussCloneLeanR" + const_var.d_w_a_r_N_w[ID][i].index) != undefined) {
                    const_var.scene.getObjectByName("TrussCloneLeanR" + const_var.d_w_a_r_N_w[ID][i].index).children[16].scale.z =
                        params.leanR_p_h - 0.5 - 0.01;
                    const_var.scene.getObjectByName("TrussCloneLeanR" + const_var.d_w_a_r_N_w[ID][i].index).children[17].scale.z =
                        params.leanR_p_h - 0.5 - 0.01;
                    const_var.scene.getObjectByName("TrussCloneLeanR" + const_var.d_w_a_r_N_w[ID][i].index).children[14].visible = true;
                    const_var.scene.getObjectByName("TrussCloneLeanR" + const_var.d_w_a_r_N_w[ID][i].index).children[15].visible = true;
                    const_var.scene.getObjectByName("TrussCloneLeanR" + const_var.d_w_a_r_N_w[ID][i].index).children[16].position.y = 0.01;
                    const_var.scene.getObjectByName("TrussCloneLeanR" + const_var.d_w_a_r_N_w[ID][i].index).children[17].position.y = 0.01;
                    if (const_var.scene.getObjectByName("TrussCloneLeanR" + const_var.d_w_a_r_N_w[ID][i].index).children[18] != undefined) {
                        const_var.scene.getObjectByName("TrussCloneLeanR" + const_var.d_w_a_r_N_w[ID][i].index).children[18].scale.z =
                            params.leanR_p_h - 0.5 - 0.01;
                    }
                    if (const_var.scene.getObjectByName("TrussCloneLeanR" + const_var.d_w_a_r_N_w[ID][i].index).children[19] != undefined) {
                        const_var.scene.getObjectByName("TrussCloneLeanR" + const_var.d_w_a_r_N_w[ID][i].index).children[19].scale.z =
                            params.leanR_p_h - 0.5 - 0.01;
                    }
                    if (const_var.scene.getObjectByName("TrussCloneLeanR" + const_var.d_w_a_r_N_w[ID][i].index).children[18] != undefined) {
                        const_var.scene.getObjectByName("TrussCloneLeanR" + const_var.d_w_a_r_N_w[ID][i].index).children[18].position.y = 0.01;
                    }
                    if (const_var.scene.getObjectByName("TrussCloneLeanR" + const_var.d_w_a_r_N_w[ID][i].index).children[19] != undefined) {
                        const_var.scene.getObjectByName("TrussCloneLeanR" + const_var.d_w_a_r_N_w[ID][i].index).children[19].position.y = 0.01;
                    }
                }
            }
        }
    }
};

function encodeSvgData(svgData) {
    let svgEncodedData = JSON.stringify(svgData);
    let startIndex = svgEncodedData.indexOf("<svg");
    svgEncodedData = svgEncodedData.substring(startIndex);    
    return svgEncodedData;
}

async function myFetch() {
    // document.getElementById('autogenerated').style.contentVisibility = "visible";
    // document.getElementById('autogenerated').style.display = "flex";
    // var w = document.getElementById('autogenerated').style.width;
    // var h = document.getElementById('autogenerated').style.height;
    // var sourceHtml = document.getElementById('autogenerated');
    // let svgData  = window.canvas2d.toSVG();
    
    let floorPromise = new Promise(function(myResolve, myReject) {
        let count = 0;
        function check2DImage() {
            count += 1;
            if (const_var.layout2DMapId === const_var.generated2DMapId || count > 15) {
                myResolve();
            } else {
                setTimeout(check2DImage, 1000);
            }
        }
        setTimeout(check2DImage, 1000);
    });
    await floorPromise.then(function(val) {}, function(val) {});

    // await htmlToImage.toPng(sourceHtml, { quality: 1 })
    //     .then(function (dataUrl) {
            const_var.i_g_A_y2d = [];
        if (window.twoDMapReqPng) {
                if(const_var.twoDImageObj.length>0)
                {
                    const_var.twodImageData = [];
                    const_var.twoDImageObj.map((val,index)=>{
                        if(val.is_checked==true)
                        {
                            const_var.i_g_A_y2d.push({ "image": val.image, "image_name": "2D Layout1",'is_checked':val.is_checked });
                        }
                        // if(val.is_checked==false)
                        // {
                        //     const_var.i_g_A_y2d.push({ "image": val.image, "image_name": "2D Layout1",'is_checked':val.is_checked });
                        // }
                    })
                    const_var.i_g_A_y2d.push({ "image": window.twoDMapAutoPng, "image_name": "2D Layout" });
                    const_var.i_g_A_y2d.push({"type":"html","image":encodeSvgData(window.twoDMapAutoSvg),"image_name":"2D Layout"});  
                    
                }else{
                    const_var.i_g_A_y2d.push({ "image": window.twoDMapAutoPng, "image_name": "2D Layout" });
                    const_var.i_g_A_y2d.push({"type":"html","image":encodeSvgData(window.twoDMapAutoSvg),"image_name":"2D Layout"});  
                    
                }
                //const_var.i_g_A_y2d.push({"type":"html","image":encodeSvgData(window.twoDMapReqSvg[0]),"image_name":"2D Layout"});  
                //const_var.i_g_A_y2d.push({ "image": window.twoDMapReqPng[0], "image_name": "2D Layout" });
            }else if (window.twoDMapAutoPng) {
                const_var.i_g_A_y2d.push({ "image": window.twoDMapAutoPng, "image_name": "2D Layout" });
                const_var.i_g_A_y2d.push({"type":"html","image":encodeSvgData(window.twoDMapAutoSvg),"image_name":"2D Layout"});  
                
            } 
            // else {
            //     if (const_var.two_d_layuot != undefined && Object.keys(const_var.two_d_layuot).length > 0) {
            //         if (const_var.two_d_layuot.is_active != undefined && const_var.two_d_layuot.is_active == 1) {
            //             const_var.i_g_A_y2d.push({ "image": dataUrl, "image_name": "2D Layout" });
            //             const_var.i_g_A_y2d.push({"type":"html","image":encodeSvgData(svgData),"image_name":"2D Layout"});  
            //         }

            //     }
            // }
            const_var.twodImageData = const_var.twoDImageObj;
            
        // }).then(function () {
        //     document.getElementById('autogenerated').style.display = "none";
        //     //console.log(sourceHtml,document.getElementById('autogenerated'));
        //     //console.log(const_var.i_g_A_y2d);
        // });

}
export const TsCeSot = async (Val, chkIndex) => {

    //controls = new OrbitControls(const_var.camera, const_var.renderer.domElement);
    // const_var.controls.target.set(0, (params.p_h / 2)+1, 0);
    // const_var.camera.position.set(0, params.p_h + 0, 1.40 * params.p_d);
    if (Val == "print") {
        const_var.checkIval++;
        const_var.checkBlobImg = const_var.checkIval;
        if (const_var.checkIval <= 4) {
            //const_var.controls.BooleanVal=true;
            var zTarget = 0;
            var bWl = params.p_w / 2;
            var bWr = params.p_w / 2;
            var bW = params.p_w / 2;
            var rph = params.p_w <= 32 ? 6 : -6;
            var zPosForLean = 0;
            if (params.add_left_lean == true) {
                //bWl = bWl + params.lean_p_w + params.leanR_p_w;
                bW = bW + params.lean_p_w / 2;
                bWl = bWl + params.lean_p_w;
                rph = 0;
                zPosForLean = 8;
            }
            if (params.add_right_lean == true) {
                //bWr = bWr + params.leanR_p_w + params.lean_p_w;
                bW = bW + params.leanR_p_w / 2;
                bWr = bWr + params.leanR_p_w;
                rph = 0;
                zPosForLean = 8;
            }

            if (const_var.checkIval == 1) {
                //console.log(const_var.checkIval);
                navRotLeft("Front", true, Val);
                //const_var.i_g_A_y.push({"image":const_var.renderer.domElement.toDataURL("image/jpeg")});
                //const_var.post_data["building"].building_image = const_var.renderer.domElement.toDataURL("image/jpeg",0.5);
                //
                zTarget = params.p_d / 2 + params.p_h + bW + rph + zPosForLean;
                const_var.camera.position.set(0, params.p_h / 2, zTarget);
            } else if (const_var.checkIval == 2) {
                navRotLeft("Left", true, Val);
                //
                zTarget = params.p_d <= 300 ? params.p_d / 2 + params.p_h + bW + zPosForLean : params.p_d / 2 + params.p_h + bW + 10;
                const_var.camera.position.set(-zTarget, params.p_h / 2, 0);
                //
            } else if (const_var.checkIval == 3) {
                navRotLeft("Back", true, Val);
                //
                zTarget = params.p_d / 2 + params.p_h + bW + rph + zPosForLean;
                const_var.camera.position.set(0, params.p_h / 2, -zTarget);
                //
            } else if (const_var.checkIval == 4) {
                navRotLeft("Right", true, Val);
                //
                zTarget = params.p_d <= 300 ? params.p_d / 2 + params.p_h + bW + zPosForLean : params.p_d / 2 + params.p_h + bW + 10;
                const_var.camera.position.set(zTarget, params.p_h / 2, 0);
                //
            } else if (const_var.checkIval == 5) {
                if (const_var.crmSetting.is_show_background!=undefined && const_var.crmSetting.is_show_background == true ) {
                    const_var.controls.maxPolarAngle = Math.PI / 3; //Math.PI / 2.5;//Math.PI * 0.25;
                } else {
                    const_var.controls.maxPolarAngle = Math.PI;
                }
                const_var.controls.update();
                navRotLeft("Front", true, Val);
                //
                zTarget = params.p_d <= 300 ? params.p_d / 2 + params.p_h + bW : params.p_d / 2 + params.p_h + bW + 10;
                const_var.camera.position.set(-zTarget, params.p_h / 2, 0);
            } else if (const_var.checkIval == 6) {
                if (const_var.crmSetting.is_show_background!=undefined && const_var.crmSetting.is_show_background == true) {
                    const_var.controls.maxPolarAngle = Math.PI;
                } else {
                    const_var.controls.maxPolarAngle = Math.PI;
                }
                // const_var.controls.target.set(0, params.p_h / 2, 0);
                // const_var.camera.position.set(0, params.p_h +0, 1.25 * params.p_d);

                //const_var.controls.maxPolarAngle = Math.PI * 0.5;
                // const_var.controls.target.set(0, params.p_h / 2, 0);
                // const_var.camera.position.set(0, params.p_h + 0, 1.25 * params.p_d);
                //const_var.controls.update();
                ////navRotLeft("Front",false,Val);
            } else {
                navRotLeft("Front", false, Val);
            }
        }
        if (const_var.i_g_A_y.length == 4) {
            const_var.PrintAlertBox = true;
            const_var.PrintAlertBoxShowButton = true;
            store.dispatch(genratePrintImages(true));
            store.dispatch(showSaveLater("pdf",false))
            if(!const_var.isShowDownloadProgressBar) {
                store.dispatch(showDownloadProgressBar("show"))
            }
        }
    } else if( Val == "lead"){
        
        const_var.checkIval++;
        const_var.checkBlobImg = const_var.checkIval;
        if (const_var.checkIval <= 1) {
            //const_var.controls.BooleanVal=true;
            var zTarget = 0;
            var bWl = params.p_w / 2;
            var bWr = params.p_w / 2;
            var bW = params.p_w / 2;
            var rph = params.p_w <= 32 ? 6 : -6;
            var zPosForLean = 0;
            if (params.add_left_lean == true) {
                //bWl = bWl + params.lean_p_w + params.leanR_p_w;
                bW = bW + params.lean_p_w / 2;
                bWl = bWl + params.lean_p_w;
                rph = 0;
                zPosForLean = 8;
            }
            if (params.add_right_lean == true) {
                //bWr = bWr + params.leanR_p_w + params.lean_p_w;
                bW = bW + params.leanR_p_w / 2;
                bWr = bWr + params.leanR_p_w;
                rph = 0;
                zPosForLean = 8;
            }

            if (const_var.checkIval == 1) {
                //console.log(const_var.checkIval);
                navRotLeft("Front", true, Val);
                //const_var.i_g_A_y.push({"image":const_var.renderer.domElement.toDataURL("image/jpeg")});
                //const_var.post_data["building"].building_image = const_var.renderer.domElement.toDataURL("image/jpeg",0.5);
                //
                zTarget = params.p_d / 2 + params.p_h + bW + rph + zPosForLean;
                const_var.camera.position.set(0, params.p_h / 2, zTarget);
            } else if (const_var.checkIval == 2) {
                navRotLeft("Left", true, Val);
                //
                zTarget = params.p_d <= 300 ? params.p_d / 2 + params.p_h + bW + zPosForLean : params.p_d / 2 + params.p_h + bW + 10;
                const_var.camera.position.set(-zTarget, params.p_h / 2, 0);
                //
            } else if (const_var.checkIval == 3) {
                navRotLeft("Back", true, Val);
                //
                zTarget = params.p_d / 2 + params.p_h + bW + rph + zPosForLean;
                const_var.camera.position.set(0, params.p_h / 2, -zTarget);
                //
            } else if (const_var.checkIval == 4) {
                navRotLeft("Right", true, Val);
                //
                zTarget = params.p_d <= 300 ? params.p_d / 2 + params.p_h + bW + zPosForLean : params.p_d / 2 + params.p_h + bW + 10;
                const_var.camera.position.set(zTarget, params.p_h / 2, 0);
                //
            } else if (const_var.checkIval == 5) {
                if (const_var.crmSetting.is_show_background!=undefined && const_var.crmSetting.is_show_background == true ) {
                    const_var.controls.maxPolarAngle = Math.PI / 3; //Math.PI / 2.5;//Math.PI * 0.25;
                } else {
                    const_var.controls.maxPolarAngle = Math.PI;
                }
                const_var.controls.update();
                navRotLeft("Front", true, Val);
                //
                zTarget = params.p_d <= 300 ? params.p_d / 2 + params.p_h + bW : params.p_d / 2 + params.p_h + bW + 10;
                const_var.camera.position.set(-zTarget, params.p_h / 2, 0);
            } else if (const_var.checkIval == 6) {
                if (const_var.crmSetting.is_show_background!=undefined && const_var.crmSetting.is_show_background == true) {
                    const_var.controls.maxPolarAngle = Math.PI;
                } else {
                    const_var.controls.maxPolarAngle = Math.PI;
                }
                // const_var.controls.target.set(0, params.p_h / 2, 0);
                // const_var.camera.position.set(0, params.p_h +0, 1.25 * params.p_d);

                //const_var.controls.maxPolarAngle = Math.PI * 0.5;
                // const_var.controls.target.set(0, params.p_h / 2, 0);
                // const_var.camera.position.set(0, params.p_h + 0, 1.25 * params.p_d);
                //const_var.controls.update();
                ////navRotLeft("Front",false,Val);
            } else {
                navRotLeft("Front", false, Val);
            }
        }
        if (const_var.i_g_A_y.length == 1) {
            // const_var.PrintAlertBox = true;
            // const_var.PrintAlertBoxShowButton = true;
            // store.dispatch(genratePrintImages(true));
           
            const_var.saveLatterModal =  false
            document.querySelector('#Savelater').classList.remove('overlay-container' , 'cu-modal-overlay')

            if(const_var.orderSaveForm == true){
                document.querySelector('#saveForm').classList.remove('d-none')
                document.querySelector('#saveForm').classList.add('overlay-container' , 'gather-customer-information')    
            }else{
                document.querySelector('#saveForm').classList.add('d-none')    
                store.dispatch(ShowHideCheckout())
            }
            console.log(const_var.saveLatterModal,const_var.isShowConfigBox,"const_var.saveLatterModal")

    }
    } else {

        if (const_var.checkCaptuareImage == true) {
            if (const_var.two_d_layuot.is_active == 1 && const_var.crmSetting.is_module_name != "inventory") {
                await myFetch().then((msg) => {
                    //console.log(msg);
                });
            }

            if (const_var.i_g_A_y.length > 0) {
                const_var.CallApionAction = true;
                let settingData = const_var.crmSetting;
                // console.log(const_var.i_g_A_y,"const_var.i_g_A_y")
                for (var i = const_var.i_g_A_y.length - 1; i >= 0; i--) {
                    if (const_var.i_g_A_y[i]!=undefined && const_var.i_g_A_y[i].image_name == "2D Layout") {
                        const_var.i_g_A_y.splice(i, 1);
                    }
                    if (const_var.i_g_A_y[i]!=undefined && const_var.i_g_A_y[i].image_name == "2D Layout1" && const_var.i_g_A_y[i].is_checked == false) {
                        const_var.i_g_A_y.splice(i, 1);
                    }
                }
                if (const_var.two_d_layuot.is_active == 1 && const_var.i_g_A_y2d != undefined && const_var.i_g_A_y2d.length > 0) {
                    //const_var.i_g_A_y[(const_var.i_g_A_y.length-1)] = const_var.i_g_A_y2d[0];
                    if (const_var.crmSetting.is_module_name == "quote" && const_var.two_d_layuot.include_in_quote == 1) {
                        const_var.i_g_A_y = [...const_var.i_g_A_y,...const_var.i_g_A_y2d];
                        //const_var.i_g_A_y.push(const_var.i_g_A_y2d[1]);
                    }
                    if (const_var.crmSetting.is_module_name == "order" && const_var.two_d_layuot.include_in_order == 1) {
                        const_var.i_g_A_y = [...const_var.i_g_A_y,...const_var.i_g_A_y2d];
                        //const_var.i_g_A_y.push(const_var.i_g_A_y2d[1]);
                    }
                }
                let apiData = { api_token: settingData.api_token, module: "quote", pdf_images: const_var.i_g_A_y };
    
                return axios.post(const_var.crmSetting.api_post_url + "/api/save-oq-image", apiData).then(function (response) {    

                    if (response.data.status == true) {

                        const_var.post_data["pdf_images"] = response.data.id;
                        if (const_var.loginSession == true) {
                            store.dispatch(SendBuildingDatatoServer());
                        } else {
                            const_var.showProcessLoaderchk = false;
                            var element = document.getElementsByClassName("spinner-active")[0];
                            element.classList.remove("spinner-active");
                        }
                        // if(chkIndex!=undefined && chkIndex=="finalsubmit")
                        // {
                        //     SendBuildingDatatoServer();
                        // }else
                        // {
                        //     const_var.showProcessLoaderchk = false;
                        //     var element = document.getElementsByClassName('spinner-active')[0];
                        //     element.classList.remove("spinner-active");
                        // }
                    }
                });
            }
        } else {

            const_var.checkIval++;
            const_var.checkBlobImg = const_var.checkIval;
            //if(const_var.checkIval<=6)
            if (const_var.checkIval <= 4) {
                //const_var.controls.BooleanVal=true;
                var zTarget = 0;
                var bWl = params.p_w / 2;
                var bWr = params.p_w / 2;
                var bW = params.p_w / 2;
                var rph = params.p_w <= 32 ? 6 : -6;
                var zPosForLean = 0;
                if (params.add_left_lean == true) {
                    //bWl = bWl + params.lean_p_w + params.leanR_p_w;
                    bW = bW + params.lean_p_w / 2;
                    bWl = bWl + params.lean_p_w;
                    rph = 0;
                    zPosForLean = 8;
                }
                if (params.add_right_lean == true) {
                    //bWr = bWr + params.leanR_p_w + params.lean_p_w;
                    bW = bW + params.leanR_p_w / 2;
                    bWr = bWr + params.leanR_p_w;
                    rph = 0;
                    zPosForLean = 8;
                }

                if (const_var.checkIval == 1) {
                    //console.log(const_var.checkIval);
                    navRotLeft("Front", true, Val);
                    //const_var.i_g_A_y.push({"image":const_var.renderer.domElement.toDataURL("image/jpeg")});
                    //const_var.post_data["building"].building_image = const_var.renderer.domElement.toDataURL("image/jpeg",0.5);
                    //
                    zTarget = params.p_d / 2 + params.p_h + bW + rph + zPosForLean;
                    const_var.camera.position.set(0, params.p_h / 2, zTarget);
                } else if (const_var.checkIval == 2) {
                    navRotLeft("Left", true, Val);
                    //
                    zTarget = params.p_d <= 300 ? params.p_d / 2 + params.p_h + bW + zPosForLean : params.p_d / 2 + params.p_h + bW + 10;
                    const_var.camera.position.set(-zTarget, params.p_h / 2, 0);
                    //
                } else if (const_var.checkIval == 3) {
                    navRotLeft("Back", true, Val);
                    //
                    zTarget = params.p_d / 2 + params.p_h + bW + rph + zPosForLean;
                    const_var.camera.position.set(0, params.p_h / 2, -zTarget);
                    //
                } else if (const_var.checkIval == 4) {
                    navRotLeft("Right", true, Val);
                    //
                    zTarget = params.p_d <= 300 ? params.p_d / 2 + params.p_h + bW + zPosForLean : params.p_d / 2 + params.p_h + bW + 10;
                    const_var.camera.position.set(zTarget, params.p_h / 2, 0);
                    //
                } else if (const_var.checkIval == 5) {
                    if (const_var.crmSetting.is_show_background!=undefined && const_var.crmSetting.is_show_background == true ) {
                        const_var.controls.maxPolarAngle = Math.PI / 3; //Math.PI / 2.5;//Math.PI * 0.25;
                    } else {
                        const_var.controls.maxPolarAngle = Math.PI;
                    }
                    const_var.controls.update();
                    navRotLeft("Front", true, Val);
                    //
                    zTarget = params.p_d <= 300 ? params.p_d / 2 + params.p_h + bW : params.p_d / 2 + params.p_h + bW + 10;
                    const_var.camera.position.set(-zTarget, params.p_h / 2, 0);
                } else if (const_var.checkIval == 6) {
                    if (const_var.crmSetting.is_show_background!=undefined && const_var.crmSetting.is_show_background == true) {
                        const_var.controls.maxPolarAngle = Math.PI;
                    } else {
                        const_var.controls.maxPolarAngle = Math.PI;
                    }
                    // const_var.controls.target.set(0, params.p_h / 2, 0);
                    // const_var.camera.position.set(0, params.p_h +0, 1.25 * params.p_d);

                    //const_var.controls.maxPolarAngle = Math.PI * 0.5;
                    // const_var.controls.target.set(0, params.p_h / 2, 0);
                    // const_var.camera.position.set(0, params.p_h + 0, 1.25 * params.p_d);
                    //const_var.controls.update();
                    ////navRotLeft("Front",false,Val);
                } else {
                    navRotLeft("Front", false, Val);
                }
            } else {

                // store.dispatch({
                //     type:"GenrateBuildingDatatoServer",
                //     event:"",
                //     key:undefined
                // });
                if (const_var.two_d_layuot.is_active == 1 && const_var.crmSetting.is_module_name != "inventory") {
                    await myFetch().then((msg) => {
                            //console.log(msg);
                    });
                }

                if (const_var.i_g_A_y.length == 4) {
                    const_var.CallApionAction = true;
                    let settingData = const_var.crmSetting;
                    for (var i = const_var.i_g_A_y.length - 1; i >= 0; i--) {
                        if (const_var.i_g_A_y[i]!=undefined && const_var.i_g_A_y[i].image_name == "2D Layout") {
                            const_var.i_g_A_y.splice(i, 1);
                        }
                        if (const_var.i_g_A_y[i]!=undefined && const_var.i_g_A_y[i].image_name == "2D Layout1" && const_var.i_g_A_y[i].is_checked == false) {
                            const_var.i_g_A_y.splice(i, 1);
                        }
                    }
                    if (const_var.two_d_layuot.is_active == 1 && const_var.i_g_A_y2d != undefined && const_var.i_g_A_y2d.length > 0) {
                        //const_var.i_g_A_y[(const_var.i_g_A_y.length-1)] = const_var.i_g_A_y2d[0];
                        if (const_var.crmSetting.is_module_name == "quote" && const_var.two_d_layuot.include_in_quote == 1) {
                            const_var.i_g_A_y = [...const_var.i_g_A_y,...const_var.i_g_A_y2d];
                            //const_var.i_g_A_y.push(const_var.i_g_A_y2d[1]);
                        }
                        if (const_var.crmSetting.is_module_name == "order" && const_var.two_d_layuot.include_in_order == 1) {
                            const_var.i_g_A_y = [...const_var.i_g_A_y,...const_var.i_g_A_y2d];
                            //const_var.i_g_A_y.push(const_var.i_g_A_y2d[1]);
                        }
                    }
                    let apiData = {
                        api_token: settingData.api_token,
                        module: "quote",
                        pdf_images: const_var.i_g_A_y,
                    };


                    return axios.post(const_var.crmSetting.api_post_url + "/api/save-oq-image", apiData).then(function (response) {
                       
                        if (response.data.status == true) {
                            const_var.post_data["pdf_images"] = response.data.id;
                            if (const_var.loginSession == true) {
                                store.dispatch(SendBuildingDatatoServer());
                            }else if (const_var.isPublicEdit == true) {
                                store.dispatch(SendBuildingDatatoPublicServer());
                            } else {
                                const_var.showProcessLoaderchk = false;
                                // var element = document.getElementsByClassName("spinner-active")[0];
                                // element.classList.remove("spinner-active");
                                if(const_var.crmSetting.pre_quote_form == true && const_var.loginSession == false && const_var.saveLatterModal == true && const_var.preQuoteApiCalled == true && const_var.preQuoteError == false && const_var.post_data && const_var.post_data.full_name != undefined && const_var.post_data.full_name != '' && const_var.showStateOnly != true){
                                    // store.dispatch({
                                    //     type: "onQuoteSubmit",
                                    //     // event: e
                                    // });
                                    // if(const_var.checkValidate==false){
                                    // store.dispatch(onQuoteSubmitApi());
                                    // }
                                }
                            }
                            const_var.checkIval = 0;
                            const_var.i_g_A_y = [];
                            // if(chkIndex!=undefined && chkIndex=="finalsubmit")
                            // {
                            //     SendBuildingDatatoServer();
                            // }else
                            // {
                            //     const_var.showProcessLoaderchk = false;
                            //     var element = document.getElementsByClassName('spinner-active')[0];
                            //     element.classList.remove("spinner-active");
                            // }
                            const_var.saveLatterModal =  false
                            document.querySelector('#Savelater').classList.remove('overlay-container' , 'cu-modal-overlay')

                            if(const_var.orderSaveForm == true){
                                document.querySelector('#saveForm').classList.remove('d-none')
                                document.querySelector('#saveForm').classList.add('overlay-container' , 'gather-customer-information')    
                            }else{
                                document.querySelector('#saveForm').classList.add('d-none')    
                                store.dispatch(ShowHideCheckout())
                            }
                            console.log(const_var.saveLatterModal,const_var.isShowConfigBox,"const_var.saveLatterModal",response)

                        }
                    });


                }

                // initialState.newColor = const_var.checkIval;
                // return initialState;
            }
        }
    }
};
export const checkNewDoorPlace = (l) => {
    const_var.ManageSpaces[l] = new Array();
    if (const_var.ManageDoorArrar[l].length > 0) {
        const_var.ManageDoorArrar[l].sort(function (a, b) {
            return a.leftpos - b.leftpos;
        });
        //console.log(l,ManageDoorArrar[l].length);
        for (var j = 0; j <= const_var.ManageDoorArrar[l].length - 1; j++) {
            if (j == 0) {
                //if(params.p_b_t !="2")
                if (params.add_left_lean == false && params.add_right_lean == false) {
                    const_var.ManageSpaces[l].push(const_var.ManageDoorArrar[l][j].leftpos);
                } else {
                    if (l == "front") {
                        if (params.p_b_c_b_l_f == "Close" || params.add_storage_check == true) {
                            const_var.ManageSpaces[l].push(const_var.ManageDoorArrar[l][j].leftpos - params.lean_p_w);
                        } else {
                            const_var.ManageSpaces[l].push(const_var.ManageDoorArrar[l][j].leftpos);
                        }
                    }
                    if (l == "back") {
                        if (params.p_b_c_b_l_b == "Close" || params.add_storage_check == true) {
                            const_var.ManageSpaces[l].push(const_var.ManageDoorArrar[l][j].leftpos - params.lean_p_w);
                        } else {
                            const_var.ManageSpaces[l].push(const_var.ManageDoorArrar[l][j].leftpos);
                        }
                    }
                    if (l == "frontr" || l == "rights") {
                        if (params.p_b_c_b_l_f == "Close" || params.add_storage_check == true) {
                            const_var.ManageSpaces[l].push(const_var.ManageDoorArrar[l][j].leftpos - params.p_w - params.lean_p_w);
                        } else {
                            const_var.ManageSpaces[l].push(const_var.ManageDoorArrar[l][j].leftpos - params.p_w);
                        }
                    }

                    if (l == "frontl" || l == "backr" || l == "left" || l == "ltleft" || l == "right" || l == "ltright" || l == "lefts") {
                        const_var.ManageSpaces[l].push(const_var.ManageDoorArrar[l][j].leftpos);
                    }
                    if (l == "backl") {
                        if (params.p_b_c_b_r_b == "Close" || params.add_storage_check_right == true) {
                            const_var.ManageSpaces[l].push(const_var.ManageDoorArrar[l][j].leftpos - params.p_w - params.leanR_p_w);
                        } else {
                            const_var.ManageSpaces[l].push(const_var.ManageDoorArrar[l][j].leftpos - params.p_w);
                        }
                    }
                }
                if (const_var.ManageDoorArrar[l].length > 1) {
                    const_var.ManageSpaces[l].push(
                        const_var.ManageDoorArrar[l][j].rightpos -
                        (parseInt(const_var.ManageDoorArrar[l][j + 1].actual_val.split("X")[0]) + const_var.ManageDoorArrar[l][j + 1].rightpos)
                    );
                }
            }
            if (j > 0 && j != const_var.ManageDoorArrar[l].length - 1) {
                const_var.ManageSpaces[l].push(
                    const_var.ManageDoorArrar[l][j].rightpos -
                    (parseInt(const_var.ManageDoorArrar[l][j + 1].actual_val.split("X")[0]) + const_var.ManageDoorArrar[l][j + 1].rightpos)
                );
            }
            if (j == const_var.ManageDoorArrar[l].length - 1) {
                //if(params.p_b_t !="2")
                if (params.add_left_lean == false && params.add_right_lean == false) {
                    const_var.ManageSpaces[l].push(const_var.ManageDoorArrar[l][j].rightpos);
                } else {
                    if (l == "front") {
                        if (params.p_b_c_b_r_f == "Close" || params.add_storage_check_right == true) {
                            const_var.ManageSpaces[l].push(const_var.ManageDoorArrar[l][j].rightpos - params.leanR_p_w);
                        } else {
                            const_var.ManageSpaces[l].push(const_var.ManageDoorArrar[l][j].rightpos);
                        }
                    }
                    if (l == "back") {
                        if (params.p_b_c_b_r_b == "Close" || params.add_storage_check_right == true) {
                            const_var.ManageSpaces[l].push(const_var.ManageDoorArrar[l][j].rightpos - params.leanR_p_w);
                        } else {
                            const_var.ManageSpaces[l].push(const_var.ManageDoorArrar[l][j].rightpos);
                        }
                    }
                    if (l == "frontl" || l == "lefts") {
                        if (params.p_b_c_b_r_f == "Close" || params.add_storage_check_right == true) {
                            const_var.ManageSpaces[l].push(const_var.ManageDoorArrar[l][j].rightpos - params.p_w - params.leanR_p_w);
                        } else {
                            const_var.ManageSpaces[l].push(const_var.ManageDoorArrar[l][j].rightpos - params.p_w);
                        }
                    }

                    if (l == "frontr" || l == "backl" || l == "left" || l == "ltleft" || l == "right" || l == "ltright" || l == "rights") {
                        const_var.ManageSpaces[l].push(const_var.ManageDoorArrar[l][j].rightpos);
                    }
                    if (l == "backr") {
                        if (params.p_b_c_b_l_b == "Close" || params.add_storage_check == true) {
                            const_var.ManageSpaces[l].push(const_var.ManageDoorArrar[l][j].rightpos - params.p_w - params.lean_p_w);
                        } else {
                            const_var.ManageSpaces[l].push(const_var.ManageDoorArrar[l][j].rightpos - params.p_w);
                        }
                    }
                }
            }
            //prntLRdistNew(l,j,"rightpos");
        }
        // ManageSpaces[l].sort(function(a, b){
        //     return a - b;
        // });
        var doorSide = l;
        if (doorSide == "leftl") {
            doorSide = "ltleft";
        } else if (doorSide == "rightr") {
            doorSide = "ltright";
        }
        //console.log(Array.isArray(ManageSpaces[l]));
        if (Math.ceil(Math.max.apply(Math, const_var.ManageSpaces[l])) < 4) {
            const_var.ManageDoorPlaces[doorSide].Garage = false;
            const_var.ManageDoorPlaces[doorSide].CustomFrameout = false;
            const_var.ManageDoorPlaces[doorSide].Walk = false;
            const_var.ManageDoorPlaces[doorSide].WalkFrameout = false;
            const_var.ManageDoorPlaces[doorSide].Windows = false;
            const_var.ManageDoorPlaces[doorSide].WindowsFrameout = false;
            const_var.ManageDoorPlaces[doorSide].GarageFrameout = false;
        } else if (Math.ceil(Math.max.apply(Math, const_var.ManageSpaces[l])) <= 5) {
            const_var.ManageDoorPlaces[doorSide].Garage = false;
            const_var.ManageDoorPlaces[doorSide].CustomFrameout = false;
            const_var.ManageDoorPlaces[doorSide].Walk = true;
            const_var.ManageDoorPlaces[doorSide].WalkFrameout = true;
            const_var.ManageDoorPlaces[doorSide].Windows = true;
            const_var.ManageDoorPlaces[doorSide].WindowsFrameout = true;
            const_var.ManageDoorPlaces[doorSide].GarageFrameout = false;
        } else if (Math.ceil(Math.max.apply(Math, const_var.ManageSpaces[l])) < 8) {
            const_var.ManageDoorPlaces[doorSide].Garage = false;
            const_var.ManageDoorPlaces[doorSide].CustomFrameout = false;
            const_var.ManageDoorPlaces[doorSide].Walk = true;
            const_var.ManageDoorPlaces[doorSide].WalkFrameout = true;
            const_var.ManageDoorPlaces[doorSide].Windows = true;
            const_var.ManageDoorPlaces[doorSide].WindowsFrameout = true;
            const_var.ManageDoorPlaces[doorSide].GarageFrameout = false;
        } else {
            const_var.ManageDoorPlaces[doorSide].Garage = true;
            const_var.ManageDoorPlaces[doorSide].CustomFrameout = true;
            const_var.ManageDoorPlaces[doorSide].Walk = true;
            const_var.ManageDoorPlaces[doorSide].WalkFrameout = true;
            const_var.ManageDoorPlaces[doorSide].Windows = true;
            const_var.ManageDoorPlaces[doorSide].WindowsFrameout = true;
            const_var.ManageDoorPlaces[doorSide].GarageFrameout = true;
        }
        //console.log(ManageDoorPlaces[doorSide]);
    }
};
export const removeDoorWindowsIcons = () => {
    const_var.showComponentEditBox = false;
    const_var.b_s_c_n = null;
    
        updateDoorWalls();
        doDoorlegsCSG();
        doDoorHatChannelsCSG();
        if(params.p_w_c_n==true)
        {
            updateDoorWainscot()
        }
    
    for (var i = 0; i < const_var.b_d_g_b_O_c.length; i++) {
        if (
            "b_B_g_B" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t1Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t2Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t5Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t6Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t3Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t4Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t7Bx" != const_var.b_d_g_b_O_c[i].name &&
            "b_h_t8Bx" != const_var.b_d_g_b_O_c[i].name
        ) {
            if (const_var.b_d_g_b_O_c[i].children[0] != undefined) {
                const_var.b_d_g_b_O_c[i].children[0].visible = false;
                const_var.b_d_g_b_O_c[i].children[1].visible = false;
                const_var.b_d_g_b_O_c[i].children[2].visible = false;
            }
        }
    }
};
export const TestNew = (wallPos, commonVal) => {
    var l = wallPos.toLowerCase();
    var data = const_var.scene.children;
    //if(l == "left" || l == "right")
    {
        if (commonVal == undefined) {
            if (const_var.scene.children.length > 140) {
                for (var j = 158; j < const_var.scene.children.length; j++) {
                    if (
                        const_var.scene.children[j].BarnPos == "BarnLeft" ||
                        const_var.scene.children[j].BarnPos == "FrontL" ||
                        const_var.scene.children[j].BarnPos == "BackL" ||
                        const_var.scene.children[j].BarnPos == "LeftS"
                    ) {
                        const_var.scene.children[j].visible = l == "left" ? false : true;
                    }
                    if (const_var.scene.children[j].BarnPos == "FrontL") {
                        const_var.scene.children[j].visible = l == "lefts" || l == "left" ? false : true;
                        //ArrowNDistance.hideShowdoorArrow(l);
                    }
                    if (
                        const_var.scene.children[j].BarnPos == "BarnRight" ||
                        const_var.scene.children[j].BarnPos == "FrontR" ||
                        const_var.scene.children[j].BarnPos == "BackR" ||
                        const_var.scene.children[j].BarnPos == "RightS"
                    ) {
                        const_var.scene.children[j].visible = l == "right" ? false : true;
                    }
                    if (const_var.scene.children[j].BarnPos == "FrontR") {
                        const_var.scene.children[j].visible = l == "rights" || l == "right" ? false : true;
                        // ArrowNDistance.hideShowdoorArrow(l);
                    }
                    if (const_var.scene.children[j].BarnPos == "front") {
                        const_var.scene.children[j].visible = l == "fronts" ? false : true;
                        //ArrowNDistance.hideShowdoorArrow(l);
                    }
                }
            }
        } else {
            if (const_var.scene.children.length > 140) {
                for (var j = 158; j < const_var.scene.children.length; j++) {
                    if (
                        const_var.scene.children[j].BarnPos == "BarnLeft" ||
                        const_var.scene.children[j].BarnPos == "FrontL" ||
                        const_var.scene.children[j].BarnPos == "BackL" ||
                        const_var.scene.children[j].BarnPos == "LeftS"
                    ) {
                        const_var.scene.children[j].visible = false;
                    }
                    if (const_var.scene.children[j].BarnPos == "FrontL") {
                        const_var.scene.children[j].visible = false;
                    }
                    if (
                        const_var.scene.children[j].BarnPos == "BarnRight" ||
                        const_var.scene.children[j].BarnPos == "FrontR" ||
                        const_var.scene.children[j].BarnPos == "BackR" ||
                        const_var.scene.children[j].BarnPos == "RightS"
                    ) {
                        const_var.scene.children[j].visible = false;
                    }
                    if (const_var.scene.children[j].BarnPos == "FrontR") {
                        const_var.scene.children[j].visible = false;
                    }
                    if (const_var.scene.children[j].BarnPos == "front") {
                        const_var.scene.children[j].visible = true;
                        //ArrowNDistance.hideShowdoorArrow(l);
                    }
                }
            }
        }
    }
    //ArrowFun();
};
export const Test = (wallPos, val, commonVal) => {
    var l = wallPos.toLowerCase();
    const_var.llsh = false;
    const_var.rlsh = false;
    const_var.llff = false;
    const_var.blsh = false;
    const_var.flsh = false;
    const_var.rlff = false;
    params.centerstorage = false;
    params.leftstorage = false;
    params.rightstorage = false;
    if (commonVal != undefined) {
        if (
            (params.add_left_lean == true || params.add_right_lean == true || params.add_front_lean == true || params.add_back_lean == true) &&
            (params.add_left_lean == true || params.add_right_lean == true || params.add_front_lean == true || params.add_back_lean == true)
        ) {
            // if ((params.add_left_lean == true && params.add_right_lean == true)) {
            params.add_left_lean = false;
            params.p_l_b_l = true;
            params.add_storage_check = false;
            params.cmrpos = params.add_left_lean;
            cuBuilding.UpdateLeftLean();

            params.p_r_b_l = true;
            params.add_right_lean = false;
            params.add_storage_check_right = false;
            params.cmrpos = params.add_right_lean;
            cuBuilding.UpdateRightLean();

            params.add_front_lean = false;
            params.add_storage_check_front = false;
            params.cmrpos = params.add_front_lean;
            cuBuilding.UpdateFrontLean();

            params.add_back_lean = false;
            params.add_storage_check_back = false;
            params.cmrpos = params.add_back_lean;
            cuBuilding.UpdateBackLean();

            cuBuilding.BuildingUpdate(true, "leanwall");
            params.p_r_b_l = params.p_r_b_l == false ? false : true;
            params.p_l_b_l = false;
            params.add_left_lean = true;
            params.p_b_c_b_l = params.b_l_l_t_l;
            params.p_b_c_b_l_b = params.b_l_l_t_b;
            params.p_b_c_b_l_f = params.b_l_l_t_f;
            params.add_storage_check = params.add_storage_check_1;
            const_var.llsh = true;
            const_var.llff = true;

            params.p_l_b_l = params.p_l_b_l == false ? false : true;
            params.p_r_b_l = false;
            params.add_right_lean = true;
            params.p_b_c_b_r = params.b_r_l_t_r;
            params.p_b_c_b_r_b = params.b_r_l_t_b;
            params.p_b_c_b_r_f = params.b_r_l_t_f;
            params.add_storage_check_right = params.add_storage_check_right_1;
            const_var.rlsh = true;
            const_var.rlff = true;

            cuBuilding.BuildingUpdate(true, "leanwall");
            params.add_front_lean = true;
            const_var.flsh = true;

            params.add_back_lean = true;
            const_var.blsh = true;
        }
        //  else if ((params.add_front_lean == true && params.add_back_lean == true)) {
        //     params.add_front_lean = false;
        //     params.add_storage_check_front = false;
        //     params.cmrpos = params.add_front_lean;

        //     params.add_back_lean = false;
        //     params.add_storage_check_back = false;
        //     params.cmrpos = params.add_back_lean;

        //     cuBuilding.BuildingUpdate(true, 'leanwall');
        //     params.add_front_lean = true;
        //     const_var.flsh = true;

        //     params.add_back_lean = true;
        //     const_var.blsh = true;
        // } else if (params.add_front_lean == true && params.add_left_lean == true) {
        //     params.add_front_lean = false;
        //     params.add_storage_check_front = false;
        //     params.cmrpos = params.add_front_lean;

        //     params.add_left_lean = false;
        //     params.p_l_b_l = true;
        //     params.add_storage_check = false;
        //     params.cmrpos = params.add_left_lean;

        //     cuBuilding.BuildingUpdate(true, 'leanwall');

        //     params.p_r_b_l = (params.p_r_b_l == false) ? false : true;
        //     params.p_l_b_l = false;
        //     params.add_left_lean = true;
        //     params.p_b_c_b_l = params.b_l_l_t_l;
        //     params.p_b_c_b_l_b = params.b_l_l_t_b;
        //     params.p_b_c_b_l_f = params.b_l_l_t_f;
        //     params.add_storage_check = params.add_storage_check_1;
        //     const_var.llsh = true;
        //     const_var.llff = true;

        //     params.add_front_lean = true;
        //     const_var.flsh = true;

        // } else if (params.add_front_lean == true && params.add_right_lean == true) {
        //     params.add_front_lean = false;
        //     params.add_storage_check_front = false;
        //     params.cmrpos = params.add_front_lean;

        //     params.p_r_b_l = true;
        //     params.add_right_lean = false;
        //     params.add_storage_check_right = false;
        //     params.cmrpos = params.add_right_lean;
        //     cuBuilding.BuildingUpdate(true, 'leanwall');

        //     params.p_l_b_l = (params.p_l_b_l == false) ? false : true;
        //     params.p_r_b_l = false;
        //     params.add_right_lean = true;
        //     params.p_b_c_b_r = params.b_r_l_t_r;
        //     params.p_b_c_b_r_b = params.b_r_l_t_b;
        //     params.p_b_c_b_r_f = params.b_r_l_t_f;
        //     params.add_storage_check_right = params.add_storage_check_right_1;
        //     const_var.rlsh = true;
        //     const_var.rlff = true;

        //     params.add_front_lean = true;
        //     const_var.flsh = true;

        // }
        else {
            if (params.add_left_lean == true) {
                params.add_left_lean = false;
                params.p_l_b_l = true;
                params.add_storage_check = false;
                params.cmrpos = params.add_left_lean;
                cuBuilding.BuildingUpdate(true, "leanwall");
                cuBuilding.UpdateLeftLean();
                params.p_r_b_l = params.p_r_b_l == false ? false : true;
                params.p_l_b_l = false;
                params.add_left_lean = true;
                params.p_b_c_b_l = params.b_l_l_t_l;
                params.p_b_c_b_l_b = params.b_l_l_t_b;
                params.p_b_c_b_l_f = params.b_l_l_t_f;
                params.add_storage_check = params.add_storage_check_1;
                const_var.llsh = true;
                const_var.llff = true;
            }
            if (params.add_front_lean == true) {
                params.add_front_lean = false;
                params.p_l_b_l = true;
                params.add_storage_check_front = false;
                params.cmrpos = params.add_front_lean;
                cuBuilding.BuildingUpdate(true, "leanwall");
                params.add_front_lean = true;
                params.add_storage_check_front = params.add_storage_check_front_1;
                const_var.flsh = true;
            }
            if (params.add_back_lean == true) {
                params.add_back_lean = false;
                params.add_storage_check_back = false;
                params.cmrpos = params.add_back_lean;
                cuBuilding.BuildingUpdate(true, "leanwall");
                params.add_storage_check_back = params.add_storage_check_back_1;
                const_var.blsh = true;
                params.add_back_lean = true;
            }
            if (params.add_right_lean == true) {
                params.p_r_b_l = true;
                params.add_right_lean = false;
                params.add_storage_check_right = false;
                params.cmrpos = params.add_right_lean;
                cuBuilding.BuildingUpdate(true, "leanwall");
                params.p_l_b_l = params.p_l_b_l == false ? false : true;
                params.p_r_b_l = false;
                params.add_right_lean = true;
                params.p_b_c_b_r = params.b_r_l_t_r;
                params.p_b_c_b_r_b = params.b_r_l_t_b;
                params.p_b_c_b_r_f = params.b_r_l_t_f;
                params.add_storage_check_right = params.add_storage_check_right_1;
                const_var.rlsh = true;
                const_var.rlff = true;
            }
        }
    } else {
        if (params.p_b_t == "2" || params.add_left_lean == true || params.add_right_lean == true || l == "fronts" || l == "center" || l == "front") {
            //B(true);
            if (l == "left" && params.p_l_b_l == false) {
                params.add_left_lean = false;
                params.p_l_b_l = true;
                params.add_storage_check = false;
                params.cmrpos = params.add_left_lean;
                cuBuilding.BuildingUpdate(true, "leanwall");
                cuBuilding.UpdateLeftLean();
                params.p_r_b_l = params.p_r_b_l == false ? false : true;
                params.p_l_b_l = false;
                params.add_left_lean = true;
                params.p_b_c_b_l = params.b_l_l_t_l;
                params.p_b_c_b_l_b = params.b_l_l_t_b;
                params.p_b_c_b_l_f = params.b_l_l_t_f;
                params.add_storage_check = params.add_storage_check_1;
                const_var.llsh = true;
                const_var.llff = true;
            } else if (l == "right" && params.p_r_b_l == false) {
                params.p_r_b_l = true;
                params.add_right_lean = false;
                params.add_storage_check_right = false;
                params.cmrpos = params.add_right_lean;
                cuBuilding.BuildingUpdate(true, "leanwall");
                params.p_l_b_l = params.p_l_b_l == false ? false : true;
                params.p_r_b_l = false;
                params.add_right_lean = true;
                params.p_b_c_b_r = params.b_r_l_t_r;
                params.p_b_c_b_r_b = params.b_r_l_t_b;
                params.p_b_c_b_r_f = params.b_r_l_t_f;
                params.add_storage_check_right = params.add_storage_check_right_1;
                const_var.rlsh = true;
                const_var.rlff = true;
            } else if (l == "lefts") {
                params.b_l_t_s = val ? "LeftS" : "";
                params.p_b_c_b_l_f = "Open";
                params.cmrpos = false;
                cuBuilding.BuildingUpdate(true, "leanwall");
                //params.p_b_c_b_l_f = params.b_l_l_t_f;
                const_var.llsh = true;
            } else if (l == "rights") {
                params.b_l_t_s = val ? "RightS" : "";
                params.p_b_c_b_r_f = "Open";
                params.cmrpos = false;
                cuBuilding.BuildingUpdate(true, "leanwall");
                //params.p_b_c_b_r_f = params.b_r_l_t_f;
                const_var.rlsh = true;
            } else if (l == "fronts") {
                params.p_f_w = "Open";
                params.cmrpos = false;
                params.centerstorage = true;
                cuBuilding.BuildingUpdate(true, "leanwall");
                params.p_f_w = params.p_f_w_f;
                //onDocumentMouseWheel();
            } else {
                params.p_r_b_l = params.p_r_b_l == false ? false : true;
                params.add_right_lean = params.add_right_lean == false ? false : true;
                //params.p_l_b_l = false;
                params.p_b_c_b_l = params.b_l_l_t_l;
                params.p_b_c_b_l_b = params.b_l_l_t_b;
                params.p_b_c_b_l_f = params.b_l_l_t_f;
                params.p_l_b_l = params.p_l_b_l == false ? false : true;
                params.add_left_lean = params.add_left_lean == false ? false : true;
                //params.p_r_b_l = false;
                params.p_b_c_b_r = params.b_r_l_t_r;
                params.p_b_c_b_r_b = params.b_r_l_t_b;
                params.p_b_c_b_r_f = params.b_r_l_t_f;
                params.centerstorage = false;
                params.leftstorage = false;
                params.rightstorage = false;
                params.p_f_w = params.p_f_w_f;
                params.b_l_t_s = "";
            }
            //if(l == "front" || l == "back")
            if (l != "left" && l != "right" && l != "lefts" && l != "rights" && l != "fronts") {
                cuBuilding.BuildingUpdate(true, "centerwall");
                cuBuilding.UpdateLeftLean();
            }
        }
    }
    if (l == "fronts" || l == "front") {
        if (const_var.ManageDoorArrar["front"].length > 0) {
            if (const_var.scene.getObjectByName("frontArrow") != undefined) {
                const_var.scene.getObjectByName("frontArrow").visible = l == "fronts" ? false : true;
            }
        }
    }
    if (l == "lefts" || l == "left") {
        if (const_var.ManageDoorArrar["frontl"].length > 0) {
            if (const_var.scene.getObjectByName("frontlArrow") != undefined) {
                const_var.scene.getObjectByName("frontlArrow").visible = l == "lefts" ? false : true;
            }
        }
    }
    if (l == "rights" || l == "right") {
        if (const_var.ManageDoorArrar["frontr"].length > 0) {
            if (const_var.scene.getObjectByName("frontrArrow") != undefined) {
                const_var.scene.getObjectByName("frontrArrow").visible = l == "rights" ? false : true;
            }
        }
    }
};
export const ChangeDoorActionSelect = () => {
    params.p_w_cc = "Select";
    params.p_d_c = "Select";
    params.p_a_g_r_u_d = "Select";
};
export const autoRotateBuilding = () => {
    var d = new THREE.Vector3();
    const_var.scene.getObjectByName("UserCamera").getWorldDirection(d);
    var e = Math.atan2(d.x, d.z);
    var f = const_var.scene.getObjectByName("UserCamera").position;
    var g = 1;
    var l = "";
    if (Math.abs(e * g) < Math.PI / 4 || Math.abs(e * g) > (3 * Math.PI) / 4)
        if (Math.abs(e) > Math.PI / 2) {
            l = "Front";
        } else {
            l = "Back";
        }
    else if (f.x > 0) {
        l = "Right";
    } else {
        l = "Left";
    }
    return l;
};
export const navRotLeft = (Val, Bool, Str) => {
    // controls = new OrbitControls(const_var.camera, const_var.renderer.domElement);
    if (Val != "Select") {
        var d = new THREE.Vector3();
        const_var.scene.getObjectByName("UserCamera").getWorldDirection(d);
        var e = Math.atan2(d.x, d.z);
        var f = const_var.scene.getObjectByName("UserCamera").position;
        var g = 1;
        var l = "";
        if (Math.abs(e * g) < Math.PI / 4 || Math.abs(e * g) > (3 * Math.PI) / 4)
            if (Math.abs(e) > Math.PI / 2) {
                l = "Front";
            } else {
                l = "Back";
            }
        else if (f.x > 0) {
            l = "Right";
        } else {
            l = "Left";
        }
        const_var.controls.WallPos = Val;
        const_var.controls.WallPosPrev = l;
        const_var.controls.DoorValue = "";
        const_var.controls.DoorType = "";
        const_var.controls.EditMode = false;
        const_var.controls.Id = "";
        //controls.BooleanVal = Bool;
        const_var.controls.BooleanVal = Bool;
        const_var.controls.StringVal = Str;
        const_var.controls.DoorTypeSecond = "";
        const_var.controls.autoRotateSpeed = 6.0;
        const_var.controls.autoRotate = true;
        //const_var.controls.update();
    } else {
        const_var.controls.autoRotate = false;
        const_var.controls.update();
    }
};

window.csg = CSG;

export default componentReducer;
