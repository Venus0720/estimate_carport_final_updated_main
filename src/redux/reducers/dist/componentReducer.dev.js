"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerRendererEventListener = registerRendererEventListener;
exports.onDocumentMouseWheel = onDocumentMouseWheel;
exports.onescFunction = onescFunction;
exports.onResize = onResize;
exports.ontouchstart1 = ontouchstart1;
exports.ontouchmove1 = ontouchmove1;
exports.onDocumentMouseDown = onDocumentMouseDown;
exports.onDocumentMouseMove = onDocumentMouseMove;
exports.onDocumentMouseUp = onDocumentMouseUp;
exports["default"] = exports.navRotLeft = exports.autoRotateBuilding = exports.ChangeDoorActionSelect = exports.Test = exports.TestNew = exports.removeDoorWindowsIcons = exports.checkNewDoorPlace = exports.TsCeSot = exports.UpdateLegPosAccordingtoWall = exports.LtgClAtn = exports.RmComtFmLtgDrbyw = exports.rEaEfWbW = exports.RmComtFmLtgDr = exports.RmComtFmLtgDrComp = exports.editComponent = exports.showhidecrossBracing = exports.prntLRdistNew = exports.doorPlacement = exports.cHkAryDr = exports.cHkDrWdWlPs = exports.chk_order_data_door = exports.fnFdIdxBkUiDN = exports.fnFdIdxBkUiD = exports.fnFdIdxBkYvLP = exports.fnFdIdxBkYvLUq = exports.fnFdIdxBkYvL = exports.fnFdIdxBkYvLnAr = exports.adjustComponent = exports.setRenderOrder = exports.cDW = exports.aDw = exports.removeWallSpecificComponent = exports.removeAlltheComponent = exports.RemoveDoorComponent = exports.loadDoorComponent = exports.handleComponentPositionOnDimensionChange = exports.cameraFocusOnWall = exports.bBmFd = exports.TrimLoad = exports.componentState = void 0;

var THREE = _interopRequireWildcard(require("three"));

var _GLTFLoader = require("three/examples/jsm/loaders/GLTFLoader");

var _react = require("react");

var _edit = _interopRequireDefault(require("../../assets/images/edit.png"));

var _edit_icon = _interopRequireDefault(require("../../assets/images/edit_icon.svg"));

var _delete = _interopRequireDefault(require("../../assets/images/delete.png"));

var _buildingInstallation = _interopRequireDefault(require("../../assets/images/building-installation.svg"));

var _reducer = require("./reducer");

var _index = require("../../action/index.js");

var _leadcustomerAction = require("../../action/leadcustomer.action.js");

var cuBuilding = _interopRequireWildcard(require("./pricingReducer"));

var _OrbitControls = require("three/examples/jsm/controls/OrbitControls");

var _axios = _interopRequireDefault(require("axios"));

var _index2 = _interopRequireDefault(require("../store/index.js"));

var _tween = _interopRequireDefault(require("@tweenjs/tween.js"));

var _SVGLoader = require("three/examples/jsm/loaders/SVGLoader");

var _UpdateArrowDimension = require("../../_helper/UpdateArrow&Dimension");

var _threeCsg = _interopRequireDefault(require("../../assets/libs/three-csg"));

var _Asectionaldoor = _interopRequireDefault(require("../../assets/images/doorObj/Asectionaldoor.gltf"));

var _Avent = _interopRequireDefault(require("../../assets/images/doorObj/Avent1.gltf"));

var _AdimaondWindowsDoor = _interopRequireDefault(require("../../assets/images/doorObj/AdimaondWindowsDoor.gltf"));

var _AdimaondWindowsDoor2 = _interopRequireDefault(require("../../assets/images/doorObj/AdimaondWindowsDoor1.gltf"));

var _ADimaondWindowsDoorLeftKnob = _interopRequireDefault(require("../../assets/images/doorObj/ADimaondWindowsDoorLeftKnob.gltf"));

var _ADoubleGlassDoorWalkDoor = _interopRequireDefault(require("../../assets/images/doorObj/ADoubleGlassDoorWalkDoor.gltf"));

var _AhaifSectionalDoorDesign = _interopRequireDefault(require("../../assets/images/doorObj/AhaifSectionalDoorDesign.gltf"));

var _ALiteDoor = _interopRequireDefault(require("../../assets/images/doorObj/ALiteDoor7.gltf"));

var _ALiteDoor2 = _interopRequireDefault(require("../../assets/images/doorObj/ALiteDoor71.gltf"));

var _ASectionalDoor = _interopRequireDefault(require("../../assets/images/doorObj/ASectionalDoor8.gltf"));

var _Asoliddoor = _interopRequireDefault(require("../../assets/images/doorObj/Asoliddoor1.gltf"));

var _Avent2 = _interopRequireDefault(require("../../assets/images/doorObj/Avent.gltf"));

var _Avent3 = _interopRequireDefault(require("../../assets/images/doorObj/Avent2.gltf"));

var _Avent4 = _interopRequireDefault(require("../../assets/images/doorObj/Avent3.gltf"));

var _standard_door = _interopRequireDefault(require("../../assets/images/doorObj/standard_door.gltf"));

var _standard_trim_door = _interopRequireDefault(require("../../assets/images/doorObj/standard_trim_door.gltf"));

var _lite = _interopRequireDefault(require("../../assets/images/doorObj/5_lite.gltf"));

var _lite2 = _interopRequireDefault(require("../../assets/images/doorObj/4_lite.gltf"));

var _lite3 = _interopRequireDefault(require("../../assets/images/doorObj/9_lite.gltf"));

var _lite4 = _interopRequireDefault(require("../../assets/images/doorObj/11_lite.gltf"));

var _sectinal_door_window = _interopRequireDefault(require("../../assets/images/doorObj/sectinal_door_window.gltf"));

var _sectional_door = _interopRequireDefault(require("../../assets/images/doorObj/Sectional_Door.gltf"));

var _standard_window = _interopRequireDefault(require("../../assets/images/doorObj/standard_window.gltf"));

var _standard_walkin = _interopRequireDefault(require("../../assets/images/doorObj/standard_walkin.gltf"));

var _double_delux_door = _interopRequireDefault(require("../../assets/images/doorObj/double_delux_door.gltf"));

var _diamond_window = _interopRequireDefault(require("../../assets/images/doorObj/diamond_window.gltf"));

var _half_sectional_door_design = _interopRequireDefault(require("../../assets/images/doorObj/half_sectional_door_design.gltf"));

var _solid_walk_door = _interopRequireDefault(require("../../assets/images/doorObj/solid_walk_door.gltf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var controls = "";
var classData = document.getElementsByClassName("buildingcanvas");
var ComponentUniqueID = 0;
var doorPath = "../../assets/images/doorObj/";
var componentState = {
  updateStateAccordingtoCondition: "",
  updateNewAction: ""
};
exports.componentState = componentState;

var componentReducer = function componentReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : componentState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var newState = _objectSpread({}, state);

  switch (action.type) {
    case "genrateBlobImage":
      action.event.preventDefault();
      _reducer.const_var.checkIval = 0;
      _reducer.const_var.i_g_A_y = [];
      TsCeSot("quote", "", "test");
      return _objectSpread({}, state, {
        updateStateAccordingtoCondition: action + state.updateNewAction
      });
  }

  return newState;
}; // document.addEventListener("mousedown", onDocumentMouseDown, false);
// document.addEventListener("mousemove", onDocumentMouseMove, false);


document.addEventListener("mousewheel", onDocumentMouseWheel, false);
document.addEventListener("touchstart", ontouchstart1, false); // document.addEventListener("touchsend", onDocumentMouseUp, false);
//Prince

function registerRendererEventListener() {
  _reducer.const_var.renderer.domElement.addEventListener("mousedown", onRendererMouseDownForDoor, true);

  _reducer.const_var.renderer.domElement.addEventListener("mousemove", onRendererMouseMoveForDoor, true);

  _reducer.const_var.renderer.domElement.addEventListener("mouseup", onRendererMouseUpForDoor, true);
}

function onRendererMouseDownForDoor(event) {
  setRaycaster(event);
  _reducer.const_var.doorWindowIconsPos = [];

  var intersectedDoorIcon = _reducer.const_var.raycaster.intersectObjects(_reducer.const_var.b_d_g_b_O_cN, true);

  var intersectedDoor = _reducer.const_var.raycaster.intersectObjects(_reducer.const_var.newDoorsArray, true);

  var componenteEditBox = document.getElementsByClassName('react-draggable');
  componenteEditBox[0].style.transform = "translate(0, 0)";
  var x = window.matchMedia("(min-width: 992px)");
  componenteEditBox[0].style.left = event.clientX - 350 + 'px';
  componenteEditBox[0].style.top = event.clientY - 200 + 'px';

  if (intersectedDoorIcon.length > 0) {
    _reducer.const_var.showComponentEditBox = true;
    _reducer.const_var.doorUniqueId = intersectedDoorIcon[0].object.uniqueId;
    ComponentUniqueID = intersectedDoorIcon[0].object.uniqueId;
    _reducer.params.trimkit = intersectedDoorIcon[0].object.DoorObj != undefined ? intersectedDoorIcon[0].object.DoorObj.trimkit : false;
    _reducer.params.header_seal = intersectedDoorIcon[0].object.DoorObj != undefined ? intersectedDoorIcon[0].object.DoorObj.header_seal : false;
    _reducer.params.chain_hoist = intersectedDoorIcon[0].object.DoorObj != undefined ? intersectedDoorIcon[0].object.DoorObj.chain_hoist : false;
    _reducer.params.automatic_openers = intersectedDoorIcon[0].object.DoorObj != undefined ? intersectedDoorIcon[0].object.DoorObj.automatic_openers : false;
    _reducer.params.certified_door = intersectedDoorIcon[0].object.DoorObj != undefined ? intersectedDoorIcon[0].object.DoorObj.certified_door : false;
    _reducer.params.extra_notes = intersectedDoorIcon[0].object.DoorObj != undefined ? intersectedDoorIcon[0].object.DoorObj.entry_note : _reducer.params.extra_notes;
  } else if (intersectedDoor.length > 0) {
    _reducer.const_var.dragging = true;
    _reducer.const_var.controls.enableRotate = false;
    _reducer.const_var.b_s_c_n = intersectedDoor[0].object.parent;
    if (undefined != _reducer.const_var.scene.getObjectByName("doorWidth4L" + _reducer.const_var.b_s_c_n.userData.uniqueId)) _reducer.const_var.scene.remove(_reducer.const_var.scene.getObjectByName("doorWidth4L" + _reducer.const_var.b_s_c_n.userData.uniqueId));
    event.target.style.cursor = "move";
  }
}

function setRaycaster(event) {
  var rect = _reducer.const_var.renderer.domElement.getBoundingClientRect();

  var mouse = new THREE.Vector3();
  mouse.x = (event.clientX - rect.left) / rect.width * 2 - 1;
  mouse.y = 2 * -((event.clientY - rect.top) / rect.height) + 1;

  _reducer.const_var.raycaster.setFromCamera(mouse, _reducer.const_var.camera);
}

function onRendererMouseMoveForDoor(event) {
  if (_reducer.const_var.dragging === true) {
    setRaycaster(event);

    var cbWalls = _reducer.const_var.scene.getObjectByName(_reducer.const_var.b_s_c_n && _reducer.const_var.b_s_c_n.userData.wallName); //console.log(cbWalls,"cbWalls",const_var.scene.getObjectByName(const_var.b_s_c_n.userData.wallName),const_var.b_s_c_n.userData.wallName,const_var.b_s_c_n)


    if (cbWalls) {
      var intersectedObject = _reducer.const_var.raycaster.intersectObject(cbWalls);

      intersectedObject.length > 0 && moveDoor(intersectedObject[0].point);
    }
  }
}

function moveDoor(m) {
  _reducer.const_var.b_s_c_n.userData.compType == "window" && (_reducer.const_var.b_s_c_n.position.y = m["y"]);
  var x = _reducer.const_var.b_s_c_n.width / 2;
  var doorEndPoint = 1; //console.log(m["x"],"m[]")

  switch (_reducer.const_var.b_s_c_n.userData.wallName) {
    case "c_b_f_w":
      _reducer.const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (_reducer.params.p_w - doorEndPoint) / -2 + x), (_reducer.params.p_w - doorEndPoint) / 2 - x);
      break;

    case "c_b_b_w":
      _reducer.const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (_reducer.params.p_w - doorEndPoint) / -2 + x), (_reducer.params.p_w - doorEndPoint) / 2 - x);
      break;

    case "c_b_l_w":
      _reducer.const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], (_reducer.params.p_d - doorEndPoint) / -2 + x), (_reducer.params.p_d - doorEndPoint) / 2 - x);
      _reducer.const_var.b_s_c_n.position.x = m["x"];
      break;

    case "c_b_r_w":
      _reducer.const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], (_reducer.params.p_d - doorEndPoint) / -2 + x), (_reducer.params.p_d - doorEndPoint) / 2 - x);
      _reducer.const_var.b_s_c_n.position.x = m["x"];
      break;

    case "c_b_l_s_f_w":
      _reducer.const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], _reducer.params.p_w / -2 + x), _reducer.params.p_f_w != "Close" ? -_reducer.params.p_w / 2 + Number(_reducer.params.cB_addStorage_left) - x : _reducer.params.p_w / 2 - x);
      break;

    case "c_b_l_s_b_w":
      _reducer.const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], _reducer.params.p_w / -2 + x), _reducer.params.p_b_w != "Close" ? -_reducer.params.p_w / 2 + Number(_reducer.params.cB_addStorage_left) - x : _reducer.params.p_w / 2 - x);
      break;

    case "c_b_l_s_r_w":
      _reducer.const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], _reducer.params.p_d / -2 + x), _reducer.params.p_d / 2 - x);
      break;

    case "c_b_r_s_f_w":
      _reducer.const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], _reducer.params.p_w / 2 - Number(_reducer.params.cB_addStorage_right) + x), _reducer.params.p_w / 2 - x);
      break;

    case "c_b_r_s_b_w":
      _reducer.const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], _reducer.params.p_w / 2 - Number(_reducer.params.cB_addStorage_right) + x), _reducer.params.p_w / 2 - x);
      break;

    case "c_b_r_s_l_w":
      _reducer.const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], -_reducer.params.p_d / 2 + x), _reducer.params.p_d / 2 - x);
      break;

    case "c_b_f_s_w":
      _reducer.const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], (_reducer.params.p_w - doorEndPoint) / -2 + x), (_reducer.params.p_w - doorEndPoint) / 2 - x);
      break;

    case "c_b_l_s_w":
      _reducer.const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], (_reducer.params.p_d - doorEndPoint) / -2 + x), -(_reducer.params.p_d + doorEndPoint) / 2 + Number(_reducer.params.p_u_t) - x);
      break;

    case "c_b_r_s_w":
      _reducer.const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], (_reducer.params.p_d - doorEndPoint) / -2 + x), -(_reducer.params.p_d + doorEndPoint) / 2 + Number(_reducer.params.p_u_t) - x);
      break;

    case "L_L_L_W":
      _reducer.const_var.b_s_c_n.position.z = m["z"]; //const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], params.lean_p_d / -2 + x), params.lean_p_d / 2 - x);

      break;

    case "L_L_F_W":
      _reducer.const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], _reducer.params.p_w / -2 - _reducer.params.lean_p_w + x), -_reducer.params.p_w / 2 - x);
      break;

    case "L_L_B_W":
      _reducer.const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], _reducer.params.p_w / -2 - _reducer.params.lean_p_w + x), -_reducer.params.p_w / 2 - x);
      break;

    case "B_L_S_W":
      _reducer.const_var.b_s_c_n.position.x = m["x"]; //const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], params.leanB_p_d / -2 + x), params.leanB_p_d / 2 - x);

      break;

    case "B_L_B_W":
      _reducer.const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], _reducer.params.p_d / -2 - _reducer.params.leanB_p_w + x), -_reducer.params.p_d / 2 - x);
      break;

    case "B_L_F_W":
      _reducer.const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], _reducer.params.p_d / -2 - _reducer.params.leanB_p_w + x), -_reducer.params.p_d / 2 - x);
      break;

    case "F_L_F_W":
      _reducer.const_var.b_s_c_n.position.x = m["x"]; //const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"],params.leanF_p_d / -2 + x),params.leanF_p_d / 2 - x);

      break;

    case "F_L_L_W":
      _reducer.const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], _reducer.params.p_d / 2 + x), _reducer.params.p_d / 2 + _reducer.params.leanF_p_w - x);
      break;

    case "F_L_R_W":
      _reducer.const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], _reducer.params.p_d / 2 + x), _reducer.params.p_d / 2 + _reducer.params.leanF_p_w - x);
      break;

    case "R_L_R_W":
      _reducer.const_var.b_s_c_n.position.z = m["z"]; //const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], params.leanR_p_d / -2 + x), params.leanR_p_d / 2 - x);

      break;

    case "R_L_B_W":
      _reducer.const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], _reducer.params.p_w / 2 + x), _reducer.params.p_w / 2 + _reducer.params.leanR_p_w - x);
      break;

    case "R_L_F_W":
      _reducer.const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], _reducer.params.p_w / 2 + x), _reducer.params.p_w / 2 + _reducer.params.leanR_p_w - x);
      break;

    case "L_L_F_S_W":
      _reducer.const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], -_reducer.params.p_w / 2 - _reducer.params.lean_p_w + x), -_reducer.params.p_w / 2 - x);
      break;

    case "L_L_L_S_W":
      _reducer.const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], -_reducer.params.lean_p_d / 2 + x), -_reducer.params.lean_p_d / 2 + Number(_reducer.params.add_storage) - x);
      break;

    case "L_L_R_S_W":
      _reducer.const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], -_reducer.params.lean_p_d / 2 + x), -_reducer.params.lean_p_d / 2 + Number(_reducer.params.add_storage) - x);
      break;

    case "R_L_F_S_W":
      _reducer.const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], _reducer.params.p_w / 2 + x), _reducer.params.p_w / 2 + _reducer.params.leanR_p_w - x);
      break;

    case "R_L_L_S_W":
      _reducer.const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], -_reducer.params.leanR_p_d / 2 + x), -_reducer.params.leanR_p_d / 2 + Number(_reducer.params.add_storage_right) - x);
      break;

    case "R_L_R_S_W":
      _reducer.const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], -_reducer.params.leanR_p_d / 2 + x), -_reducer.params.leanR_p_d / 2 + Number(_reducer.params.add_storage_right) - x);
      break;

    case "B_L_F_S_W":
      _reducer.const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], -_reducer.params.leanB_p_d / 2 + x), -_reducer.params.leanB_p_d / 2 + Number(_reducer.params.add_storage_back) - x);
      break;

    case "B_L_B_S_W":
      _reducer.const_var.b_s_c_n.position.x = m["x"]; //const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], - params.leanB_p_d / 2  + x), - params.leanB_p_d / 2 + Number(params.add_storage_back) - x);

      break;

    case "B_L_L_S_W":
      _reducer.const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], -_reducer.params.p_d / 2 - _reducer.params.leanB_p_w + x), -_reducer.params.p_d / 2 - x);
      break;

    case "F_L_F_S_W":
      _reducer.const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], -_reducer.params.leanF_p_d / 2 + x), -_reducer.params.leanF_p_d / 2 + Number(_reducer.params.add_storage_front) - x);
      break;

    case "F_L_B_S_W":
      _reducer.const_var.b_s_c_n.position.x = Math.min(Math.max(m["x"], -_reducer.params.leanF_p_d / 2 + x), -_reducer.params.leanF_p_d / 2 + Number(_reducer.params.add_storage_front) - x);
      break;

    case "F_L_R_S_W":
      _reducer.const_var.b_s_c_n.position.z = Math.min(Math.max(m["z"], _reducer.params.p_d / 2 + x), _reducer.params.p_d / 2 + _reducer.params.leanF_p_w - x);
      break;

    default:
      console.log("Wall not defined: " + _reducer.const_var.b_s_c_n.userData.wallName);
  } // calculateDoorDistance(const_var.b_s_c_n,const_var.b_s_c_n.position,const_var.b_s_c_n.rotation,true);

}

function onRendererMouseUpForDoor(event) {
  //    if(const_var.b_s_c_n != null ) calculateDoorDistance(const_var.b_s_c_n,const_var.b_s_c_n.position,const_var.b_s_c_n.rotation,true);
  _reducer.const_var.dragging = false;
  _reducer.const_var.controls.enableRotate = true;
  event.target.style.cursor = "";

  if (_reducer.const_var.b_s_c_n != undefined && _reducer.const_var.b_s_c_n != null && _reducer.const_var.b_s_c_n.userData.compType.includes('frameout') == true) {
    checkDoorWallCSG(_reducer.const_var.b_s_c_n);
  }

  _reducer.const_var.b_s_c_n = null; // const rect = const_var.renderer.domElement.getBoundingClientRect();
  // const_var.doorWindowIconsPos = [];
  // const_var.newDoorsArray.forEach((door) => {
  //     if(door.userData.editIconPos) {
  //         let vector = door.localToWorld(door.userData.editIconPos.clone());
  //         vector.project(const_var.camera);
  //         vector.x = (1 + vector.x) / 2 * rect.width;
  //         vector.y = (1 - vector.y) / 2 * rect.height;
  //         const_var.doorWindowIconsPos.push({top: `${Math.round(vector.y)}px`, left:  `${Math.round(vector.x)}px`});
  //     }
  // })
}

function updateDoorWalls() {
  //center building
  var arr = ["c_b_f_w", "c_b_l_w", "c_b_r_w", "c_b_b_w", "c_b_f_s_w", "c_b_l_s_w", "c_b_r_s_w", "c_b_l_s_f_w", "c_b_l_s_b_w", "c_b_l_s_r_w", "c_b_r_s_f_w", "c_b_r_s_b_w", "c_b_r_s_l_w", "L_L_L_W", "L_L_F_W", "L_L_B_W", "L_L_F_S_W", "L_L_L_S_W", "L_L_R_S_W", "R_L_F_W", "R_L_B_W", "R_L_R_W", "R_L_F_S_W", "R_L_L_S_W", "R_L_R_S_W", "F_L_F_W", "F_L_R_W", "F_L_L_W", "F_L_F_S_W", "F_L_R_S_W", "F_L_B_S_W", "B_L_S_W", "B_L_B_W", "B_L_F_W", "B_L_L_S_W", "B_L_F_S_W", "B_L_B_S_W"];
  arr.forEach(function (wallname) {
    var mesh = _reducer.const_var.scene.getObjectByName(wallname);

    if (mesh) doDoorWallCSG(mesh);
    mesh = _reducer.const_var.scene.getObjectByName(wallname + "_inner");
    if (mesh) doDoorWallCSG(mesh);
  });
}

function checkDoorWallCSG(door) {
  if (door && door.userData.compType.includes('frameout') == true) {
    var wallname = door.userData.wallName;

    var mesh = _reducer.const_var.scene.getObjectByName(wallname);

    if (mesh) doDoorWallCSG(mesh);
    mesh = _reducer.const_var.scene.getObjectByName(wallname + "_inner");
    if (mesh) doDoorWallCSG(mesh);

    if (door.userData.compType == "walkin_frameout") {
      door.children[0].visible = false;
      door.children[1].visible = false;
      door.children[3].visible = false;
    }

    if (door.userData.compType == "window_frameout") {
      door.children[0].visible = false;
      door.children[1].visible = false;
    }

    if (door.userData.compType == "garage_door_frameout") {
      door.children[1].visible = false;
    } //door.children[1].visible = false;

  }
}

function doDoorWallCSG(oldWall) {
  oldWall.updateMatrix();
  oldWall.updateMatrixWorld();
  var parent = oldWall.parent;

  var newWall = _reducer.const_var.wallsForCut[oldWall.name].clone();

  newWall.visible = true;
  newWall.position.set(0, 0, 0);
  newWall.scale.set(1, 1, 1);
  newWall.rotation.set(0, 0, 0);
  newWall.applyMatrix4(oldWall.matrixWorld);

  _reducer.const_var.newDoorsArray.forEach(function (door) {
    if (door.userData.compType.includes('frameout') == true) {
      var newDoor = door.children[door.children.length - 1].clone();
      newDoor.applyMatrix(door.matrix);

      var mesh1BSP = _threeCsg["default"].fromMesh(newWall);

      var mesh2BSP = _threeCsg["default"].fromMesh(newDoor);

      var subtractBSP = mesh1BSP.subtract(mesh2BSP);
      newWall = _threeCsg["default"].toMesh(subtractBSP, oldWall.matrixWorld, oldWall.material);
    }
  });

  newWall.name = oldWall.name;
  parent.add(newWall); // newWall.position.set(0 ,0, 0);
  // newWall.scale.set(1, 1, 1);
  // newWall.rotation.set(0, 0, 0);

  newWall.applyMatrix4(oldWall.matrixWorld.invert());
  newWall.applyMatrix4(oldWall.matrix);
  parent.remove(oldWall);
} //document.getElementById("buildingcanvas").addEventListener('mousewheel DOMMouseScroll', function(event){ alert("hi")});


function onDocumentMouseWheel() { } //document.addEventListener("mouseup", onDocumentMouseUp, false);


document.addEventListener("keydown", onescFunction, false);

function onescFunction(e) {// if(e.keyCode === 27) {
  //   return true;
  // }
}

var TrimLoad = function TrimLoad(c, b) { };

exports.TrimLoad = TrimLoad;

var bBmFd = function bBmFd(Val) {
  if (_reducer.const_var.c_h_d_M_l == false) {
    _reducer.const_var.isShowDoorwindowmobile = true;
    _reducer.const_var.c_h_d_M_l = true;
    return false;
  }
};

exports.bBmFd = bBmFd;

var cameraFocusOnWall = function cameraFocusOnWall(store, wall) {
  // let y = params.p_h * 0.75;
  var obj = _reducer.const_var.scene.getObjectByName(wall);

  if (obj) {
    _reducer.const_var.controls.target.copy(obj.position);

    var x = obj.position.x;
    var y = obj.position.y;
    var z = obj.position.z;
    var d = 20;
    var h = 5;

    switch (wall) {
      case "c_b_f_w":
        if (store.isFullyEnclosedCheckedForFrontLeanTo === false) {
          new _tween["default"].Tween(_reducer.const_var.camera.position).to({
            x: x,
            y: y,
            z: z + d
          }, 1000).easing(_tween["default"].Easing.Quadratic.InOut).yoyo(true).start();
        } else {
          new _tween["default"].Tween(_reducer.const_var.camera.position).to({
            x: x,
            y: y,
            z: z + _reducer.params.leanF_p_w - 1
          }, 1000).easing(_tween["default"].Easing.Quadratic.InOut).yoyo(true).start();
        }

        break;

      case "c_b_b_w":
        if (store.isFullyEnclosedCheckedForBackLeanTo === false) {
          new _tween["default"].Tween(_reducer.const_var.camera.position).to({
            x: x,
            y: y,
            z: z - d
          }, 1000).easing(_tween["default"].Easing.Quadratic.InOut).yoyo(true).start();
        } else {
          new _tween["default"].Tween(_reducer.const_var.camera.position).to({
            x: x,
            y: y,
            z: z - _reducer.params.leanB_p_w + 1
          }, 1000).easing(_tween["default"].Easing.Quadratic.InOut).yoyo(true).start();
        }

        break;

      case "c_b_l_w":
        if (store.isFullyEnclosedCheckedForLeftLeanTo === false) {
          new _tween["default"].Tween(_reducer.const_var.camera.position).to({
            x: x - d,
            y: y,
            z: z
          }, 1000).easing(_tween["default"].Easing.Quadratic.InOut).yoyo(true).start();
        } else {
          new _tween["default"].Tween(_reducer.const_var.camera.position).to({
            x: x - _reducer.params.lean_p_w + 1,
            y: y,
            z: z
          }, 1000).easing(_tween["default"].Easing.Quadratic.InOut).yoyo(true).start();
        }

        break;

      case "c_b_r_w":
        if (store.isFullyEnclosedCheckedForRightLeanTo === false) {
          new _tween["default"].Tween(_reducer.const_var.camera.position).to({
            x: x + d,
            y: y,
            z: z
          }, 1000).start();
        } else {
          new _tween["default"].Tween(_reducer.const_var.camera.position).to({
            x: x + _reducer.params.leanR_p_w - 1,
            y: y,
            z: z
          }, 1000).start();
        }

        break;
      //center building left storage front wall

      case "c_b_l_s_f_w":
        if (store.isFullyEnclosedCheckedForFrontLeanTo === false) {
          new _tween["default"].Tween(_reducer.const_var.camera.position).to({
            x: x,
            y: y,
            z: z + d
          }, 1000).start();
        } else {
          new _tween["default"].Tween(_reducer.const_var.camera.position).to({
            x: x,
            y: y,
            z: z + _reducer.params.leanF_p_w - 1
          }, 1000).easing(_tween["default"].Easing.Quadratic.InOut).yoyo(true).start();
        }

        break;
      //center building left storage back wall

      case "c_b_l_s_b_w":
        if (store.isFullyEnclosedCheckedForBackLeanTo === false) {
          new _tween["default"].Tween(_reducer.const_var.camera.position).to({
            x: x,
            y: y,
            z: z - d
          }, 1000).easing(_tween["default"].Easing.Quadratic.InOut).yoyo(true).start();
        } else {
          new _tween["default"].Tween(_reducer.const_var.camera.position).to({
            x: x,
            y: y,
            z: z - _reducer.params.leanB_p_w + 1
          }, 1000).easing(_tween["default"].Easing.Quadratic.InOut).yoyo(true).start();
        }

        break;
      //center building left storage right wall

      case "c_b_l_s_r_w":
        new _tween["default"].Tween(_reducer.const_var.camera.position).to({
          x: _reducer.params.p_w / 2 - 1,
          y: y,
          z: z
        }, 1000).start();
        break;
      //center building right storage front wall

      case "c_b_r_s_f_w":
        if (store.isFullyEnclosedCheckedForFrontLeanTo === false) {
          new _tween["default"].Tween(_reducer.const_var.camera.position).to({
            x: x,
            y: y,
            z: z + d
          }, 1000).start();
        } else {
          new _tween["default"].Tween(_reducer.const_var.camera.position).to({
            x: x,
            y: y,
            z: z + _reducer.params.leanF_p_w - 1
          }, 1000).easing(_tween["default"].Easing.Quadratic.InOut).yoyo(true).start();
        }

        break;
      //center building right storage back wall

      case "c_b_r_s_b_w":
        if (store.isFullyEnclosedCheckedForBackLeanTo === false) {
          new _tween["default"].Tween(_reducer.const_var.camera.position).to({
            x: x,
            y: y,
            z: z - d
          }, 1000).easing(_tween["default"].Easing.Quadratic.InOut).yoyo(true).start();
        } else {
          new _tween["default"].Tween(_reducer.const_var.camera.position).to({
            x: x,
            y: y,
            z: z - _reducer.params.leanB_p_w + 1
          }, 1000).easing(_tween["default"].Easing.Quadratic.InOut).yoyo(true).start();
        }

        break;
      //center building right storage left wall

      case "c_b_r_s_l_w":
        new _tween["default"].Tween(_reducer.const_var.camera.position).to({
          x: -_reducer.params.p_w / 2 + 1,
          y: y,
          z: z
        }, 1000).start();
        break;
      //center building back storage front wall

      case "c_b_f_s_w":
        new _tween["default"].Tween(_reducer.const_var.camera.position).to({
          x: x,
          y: y,
          z: _reducer.params.p_d / 2 - 1
        }, 1000).start();
        break;
      //center building back storage left wall

      case "c_b_l_s_w":
        if (store.isFullyEnclosedCheckedForLeftLeanTo === false) {
          new _tween["default"].Tween(_reducer.const_var.camera.position).to({
            x: x - d,
            y: y,
            z: z
          }, 1000).start();
        } else {
          new _tween["default"].Tween(_reducer.const_var.camera.position).to({
            x: x - _reducer.params.lean_p_w + 1,
            y: y,
            z: z
          }, 1000).start();
        }

        break;
      //center building back storage right wall

      case "c_b_r_s_w":
        if (store.isFullyEnclosedCheckedForRightLeanTo === false) {
          new _tween["default"].Tween(_reducer.const_var.camera.position).to({
            x: x + d,
            y: y,
            z: z
          }, 1000).start();
        } else {
          new _tween["default"].Tween(_reducer.const_var.camera.position).to({
            x: x + _reducer.params.leanR_p_w - 1,
            y: y,
            z: z
          }, 1000).start();
        }

        break;
      //Left lean side wall

      case "L_L_L_W":
        new _tween["default"].Tween(_reducer.const_var.camera.position).to({
          x: x - d,
          y: y,
          z: z
        }, 1000).start();
        break;
      //Left lean front wall

      case "L_L_F_W":
        new _tween["default"].Tween(_reducer.const_var.camera.position).to({
          x: x,
          y: y,
          z: z + d
        }, 1000).start();
        break;
      //Left lean back wall

      case "L_L_B_W":
        new _tween["default"].Tween(_reducer.const_var.camera.position).to({
          x: x,
          y: y,
          z: z - d
        }, 1000).start();
        break;
      //Back lean side wall

      case "B_L_S_W":
        new _tween["default"].Tween(_reducer.const_var.camera.position).to({
          x: z,
          y: y,
          z: x - d
        }, 1000).start();

        _reducer.const_var.controls.target.set(z, y, x);

        break;
      //Back lean left wall

      case "B_L_B_W":
        new _tween["default"].Tween(_reducer.const_var.camera.position).to({
          x: -z - d,
          y: y,
          z: x
        }, 1000).start();

        _reducer.const_var.controls.target.set(-z, y, x);

        break;
      //Back lean right wall

      case "B_L_F_W":
        new _tween["default"].Tween(_reducer.const_var.camera.position).to({
          x: -z + d,
          y: y,
          z: x
        }, 1000).start();

        _reducer.const_var.controls.target.set(-z, y, x);

        break;
      //Front lean side wall

      case "F_L_F_W":
        new _tween["default"].Tween(_reducer.const_var.camera.position).to({
          x: z,
          y: y,
          z: -x + d
        }, 1000).start();

        _reducer.const_var.controls.target.set(z, y, -x);

        break;
      //Front lean left wall

      case "F_L_L_W":
        new _tween["default"].Tween(_reducer.const_var.camera.position).to({
          x: z - d,
          y: y,
          z: -x
        }, 1000).start(); //x: z - d, y, z: x

        _reducer.const_var.controls.target.set(z, y, -x);

        break;
      //Front lean right wall

      case "F_L_R_W":
        new _tween["default"].Tween(_reducer.const_var.camera.position).to({
          x: z + d,
          y: y,
          z: -x
        }, 1000).start();

        _reducer.const_var.controls.target.set(z, y, -x);

        break;
      //Right lean side wall

      case "R_L_R_W":
        new _tween["default"].Tween(_reducer.const_var.camera.position).to({
          x: x + d,
          y: y,
          z: z
        }, 1000).start();
        break;
      //Right lean back wall

      case "R_L_B_W":
        new _tween["default"].Tween(_reducer.const_var.camera.position).to({
          x: x,
          y: y,
          z: z - d
        }, 1000).start();
        break;
      //Right Lean front wall

      case "R_L_F_W":
        new _tween["default"].Tween(_reducer.const_var.camera.position).to({
          x: x,
          y: y,
          z: z + d
        }, 1000).start();
        break;
      //Left lean Storage Front wall

      case "L_L_F_S_W":
        new _tween["default"].Tween(_reducer.const_var.camera.position).to({
          x: x,
          y: y,
          z: z + d
        }, 1000).start();
        break;
      //Left lean Storage Left wall

      case "L_L_L_S_W":
        new _tween["default"].Tween(_reducer.const_var.camera.position).to({
          x: x - d,
          y: y,
          z: z
        }, 1000).start();
        break;
      //Left Lean Storage Right wall

      case "L_L_R_S_W":
        new _tween["default"].Tween(_reducer.const_var.camera.position).to({
          x: x + d,
          y: y,
          z: z
        }, 1000).start();
        break;
      //Right lean Storage Front wall

      case "R_L_F_S_W":
        new _tween["default"].Tween(_reducer.const_var.camera.position).to({
          x: x,
          y: y,
          z: z + d
        }, 1000).start();
        break;
      //Right lean Storage Left wall

      case "R_L_L_S_W":
        new _tween["default"].Tween(_reducer.const_var.camera.position).to({
          x: x - d,
          y: y,
          z: z
        }, 1000).start();
        break;
      //Right Lean Storage Right wall

      case "R_L_R_S_W":
        new _tween["default"].Tween(_reducer.const_var.camera.position).to({
          x: x + d,
          y: y,
          z: z
        }, 1000).start();
        break;
      //Back lean Storage Front wall

      case "B_L_F_S_W":
        new _tween["default"].Tween(_reducer.const_var.camera.position).to({
          x: -z,
          y: y,
          z: x - d
        }, 1000).start();

        _reducer.const_var.controls.target.set(-z, y, x);

        break;
      //Back lean Storage Back wall

      case "B_L_B_S_W":
        new _tween["default"].Tween(_reducer.const_var.camera.position).to({
          x: -z,
          y: y,
          z: x + d
        }, 1000).start();

        _reducer.const_var.controls.target.set(-z, y, x);

        break;
      //Back Lean Storage Left wall

      case "B_L_L_S_W":
        new _tween["default"].Tween(_reducer.const_var.camera.position).to({
          x: -z + d,
          y: y,
          z: x
        }, 1000).start();

        _reducer.const_var.controls.target.set(-z, y, x);

        break;
      //Front lean Storage Front wall

      case "F_L_F_S_W":
        new _tween["default"].Tween(_reducer.const_var.camera.position).to({
          x: z,
          y: y,
          z: -x + d
        }, 1000).start();

        _reducer.const_var.controls.target.set(z, y, -x);

        break;
      //Front lean Storage Back wall

      case "F_L_B_S_W":
        new _tween["default"].Tween(_reducer.const_var.camera.position).to({
          x: z,
          y: y,
          z: -x - d
        }, 1000).start();

        _reducer.const_var.controls.target.set(z, y, -x);

        break;
      //Front Lean Storage Right wall

      case "F_L_R_S_W":
        new _tween["default"].Tween(_reducer.const_var.camera.position).to({
          x: z + d,
          y: y,
          z: -x
        }, 1000).start();

        _reducer.const_var.controls.target.set(z, y, -x);

        break;

      default:
        console.log("Camera focus not defined for: ", wall);
    }
  }

  _reducer.const_var.controls.update();
};

exports.cameraFocusOnWall = cameraFocusOnWall;

var handleComponentPositionOnDimensionChange = function handleComponentPositionOnDimensionChange(str) {
  if (_reducer.const_var.entry_points.length > 0) {
    var mainPos = 0;
    var mainPosArray = [];

    _reducer.const_var.entry_points.map(function (val, i) {
      var comName = _reducer.const_var.scene.getObjectByName(val.component_name + val.uniqueId);

      var newData = ""; // console.log(val, "handleComponentPositionOnDimensionChange");

      var startWidth = _reducer.params.p_w / 2;

      if (str == "w") {
        if (val.component_wall_name == "c_b_f_w") {
          var componentdimension = val.name.split("x");
          var doorWidth = val.entry_type == "garage_door" || val.entry_type == "garage_door_frameout" ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12,
            doorHeight = val.entry_type == "garage_door" || val.entry_type == "garage_door_frameout" ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;
          console.log(mainPosArray[mainPos - 1], comName, componentdimension, newData, doorWidth, "newDatanewDatanewData");

          if (mainPosArray[mainPos - 1] == undefined) {
            newData = -_reducer.params.p_w / 2 + (doorWidth / 2 + 1); // console.log(newData,"params.DoorPosOnEdit111");
          } else {
            newData = Number(mainPosArray[mainPos - 1]) + (doorWidth + 2); // console.log(newData,"params.DoorPosOnEdit2222",splitname,splitname[0],typeof splitname[0],Number(mainPosArray[mainPos-1]) - Number(splitname[0]+1));
          }

          console.log(newData, "newDatanewDatanewData111");
          comName.position.set(newData, comName.position.y, _reducer.params.p_d / 2 + 0.1);
          mainPosArray[mainPos] = newData;
        }
      }

      console.log(mainPosArray, "mainPosArray"); //     let comName = const_var.scene.getObjectByName(val.component_name+val.uniqueId);
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

      mainPos++;
    });
  }
};

exports.handleComponentPositionOnDimensionChange = handleComponentPositionOnDimensionChange;

var loadDoorComponent = function loadDoorComponent(compType, compName, wallName, componentsize, parentkey, childkey, nestedkey, entry_rotation, entry_position, is_edit) {
  var gltfLoader, _require, doorURL, componentdimension, doorWidth, doorHeight, gltf, wallComponent, kk, kd, kw, calQuantity, Yposition, ratio, doorBox, currentObjData, _currentObjData, trimPrice;

  return regeneratorRuntime.async(function loadDoorComponent$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(compType, compName, wallName, componentsize, parentkey, childkey, nestedkey, entry_rotation, entry_position, is_edit, "compType, compName, wallName,componentsize,parentkey,childkey,nestedkey,entry_rotation,entry_position,is_edit");
          gltfLoader = new _GLTFLoader.GLTFLoader();
          _require = require("../../assets/images/doorObj/" + compName + ".gltf"), doorURL = _require["default"];
          componentdimension = is_edit != undefined ? componentsize.name.split("x") : componentsize.split("x");
          doorWidth = compType == "garage_door" || compType == "garage_door_frameout" ? parseInt(componentdimension[0]) : parseInt(componentdimension[0]) / 12, doorHeight = compType == "garage_door" || compType == "garage_door_frameout" ? parseInt(componentdimension[1]) : parseInt(componentdimension[1]) / 12;
          console.log(_reducer.initialState, "store");
          _context.next = 8;
          return regeneratorRuntime.awrap(gltfLoader.loadAsync(doorURL));

        case 8:
          gltf = _context.sent;

          if (!(gltf != undefined && gltf.scene !== undefined)) {
            _context.next = 168;
            break;
          }

          wallComponent = gltf.scene; // console.log(compType, compName, wallName,componentsize,parentkey,childkey,nestedkey,entry_rotation,entry_position,"compType, compName, wallName,componentsize,parentkey,childkey")

          wallComponent.name = compName + _reducer.const_var.sum;
          wallComponent.size = componentsize;
          wallComponent.position.set(0, 4, _reducer.params.p_d / 2);
          wallComponent.rotation.y = Math.PI / 2;
          wallComponent.actual_val = doorWidth + "X" + doorHeight;
          wallComponent.uniqueId = _reducer.const_var.sum;
          wallComponent.scale.z = 1.5;
          wallComponent.DoorObj = {
            "trimkit": _reducer.params.trimkit,
            "chain_hoist": _reducer.params.chain_hoist,
            "header_seal": _reducer.params.header_seal,
            "certified_door": _reducer.params.certified_door,
            "entry_note": _reducer.params.extra_notes,
            "garage_door_color": _reducer.params.g_d_c,
            "automatic_openers": _reducer.params.automatic_openers
          }; // wallComponent.pos = wallName;
          // wallComponent.BarnPos = wallName;

          wallComponent.width = doorWidth;
          wallComponent.height = doorHeight;
          wallComponent.userData.compType = compType;
          wallComponent.userData.wallName = wallName;
          wallComponent.userData.uniqueId = wallComponent.uniqueId;
          wallComponent.userData.compName = compName; // console.log(wallComponent.children,"wallComponent");
          // addDoorEditIcon(wallComponent);

          _reducer.const_var.scene.add(wallComponent);

          wallComponent.position.set(0, 0, 0);
          wallComponent.userData.editIconPos = wallComponent.worldToLocal(new THREE.Box3().setFromObject(wallComponent).max); // let doorIcon = await addDoorEditIcon1(wallComponent);

          console.log(_reducer.params.leanF_p_d, "params.leanF_p_d", _reducer.const_var.b_t_M_F_t_F.getObjectByName("F_L_R_W").position);
          addDoorEditIcon(wallComponent);
          kk = 0;
          kd = 0;
          kw = 0;
          calQuantity = 0;
          Yposition = doorHeight;

          if (compType == "window" || compType == "window_frameout") {
            Yposition = doorHeight + _reducer.params.p_h / 2;
            kw++;
            calQuantity = kw;
          }

          if (compType == "walkin" || compType == "walkin_frameout") {
            kd++;
            calQuantity = kd;
          }

          _context.t0 = wallName;
          _context.next = _context.t0 === "c_b_f_w" ? 40 : _context.t0 === "c_b_l_w" ? 43 : _context.t0 === "c_b_b_w" ? 46 : _context.t0 === "c_b_r_w" ? 49 : _context.t0 === "c_b_l_s_f_w" ? 52 : _context.t0 === "c_b_l_s_b_w" ? 55 : _context.t0 === "c_b_l_s_r_w" ? 58 : _context.t0 === "c_b_r_s_f_w" ? 61 : _context.t0 === "c_b_r_s_b_w" ? 64 : _context.t0 === "c_b_r_s_l_w" ? 67 : _context.t0 === "c_b_f_s_w" ? 70 : _context.t0 === "c_b_l_s_w" ? 73 : _context.t0 === "c_b_r_s_w" ? 76 : _context.t0 === "L_L_L_W" ? 79 : _context.t0 === "L_L_B_W" ? 82 : _context.t0 === "L_L_F_W" ? 85 : _context.t0 === "B_L_S_W" ? 88 : _context.t0 === "B_L_B_W" ? 91 : _context.t0 === "B_L_F_W" ? 94 : _context.t0 === "F_L_F_W" ? 97 : _context.t0 === "F_L_L_W" ? 100 : _context.t0 === "F_L_R_W" ? 103 : _context.t0 === "R_L_R_W" ? 106 : _context.t0 === "R_L_B_W" ? 109 : _context.t0 === "R_L_F_W" ? 112 : _context.t0 === "L_L_F_S_W" ? 115 : _context.t0 === "L_L_L_S_W" ? 118 : _context.t0 === "L_L_R_S_W" ? 121 : _context.t0 === "R_L_F_S_W" ? 124 : _context.t0 === "R_L_L_S_W" ? 127 : _context.t0 === "R_L_R_S_W" ? 130 : _context.t0 === "B_L_F_S_W" ? 133 : _context.t0 === "B_L_B_S_W" ? 136 : _context.t0 === "B_L_L_S_W" ? 139 : _context.t0 === "F_L_F_S_W" ? 142 : _context.t0 === "F_L_B_S_W" ? 145 : _context.t0 === "F_L_R_S_W" ? 148 : 151;
          break;

        case 40:
          wallComponent.position.set(0, Yposition / 2, _reducer.params.p_d / 2 + 0.1);
          wallComponent.rotation.y = Math.PI / 2;
          return _context.abrupt("break", 152);

        case 43:
          wallComponent.position.set(-_reducer.params.p_w / 2 - 0.1, Yposition / 2, 0);
          wallComponent.rotation.y = 0;
          return _context.abrupt("break", 152);

        case 46:
          wallComponent.position.set(0, Yposition / 2, -_reducer.params.p_d / 2 - 0.15);
          wallComponent.rotation.y = -Math.PI / 2;
          return _context.abrupt("break", 152);

        case 49:
          wallComponent.position.set(_reducer.params.p_w / 2 + 0.1, Yposition / 2, 0);
          wallComponent.rotation.y = Math.PI;
          return _context.abrupt("break", 152);

        case 52:
          wallComponent.position.set(-_reducer.params.p_w / 2 + Number(_reducer.params.cB_addStorage_left) / 2, Yposition / 2, _reducer.params.p_d / 2 + 0.1);
          wallComponent.rotation.y = Math.PI / 2;
          return _context.abrupt("break", 152);

        case 55:
          wallComponent.position.set(-_reducer.params.p_w / 2 + Number(_reducer.params.cB_addStorage_left) / 2, Yposition / 2, -_reducer.params.p_d / 2 - 0.1);
          wallComponent.rotation.y = -Math.PI / 2;
          return _context.abrupt("break", 152);

        case 58:
          wallComponent.position.set(-_reducer.params.p_w / 2 + Number(_reducer.params.cB_addStorage_left) + 0.1, Yposition / 2, 0);
          wallComponent.rotation.y = Math.PI;
          return _context.abrupt("break", 152);

        case 61:
          wallComponent.position.set(_reducer.params.p_w / 2 - Number(_reducer.params.cB_addStorage_right) / 2, Yposition / 2, _reducer.params.p_d / 2 + 0.1);
          wallComponent.rotation.y = Math.PI / 2;
          return _context.abrupt("break", 152);

        case 64:
          wallComponent.position.set(_reducer.params.p_w / 2 - Number(_reducer.params.cB_addStorage_right) / 2, Yposition / 2, -_reducer.params.p_d / 2 - 0.1);
          wallComponent.rotation.y = -Math.PI / 2;
          return _context.abrupt("break", 152);

        case 67:
          wallComponent.position.set(_reducer.params.p_w / 2 - Number(_reducer.params.cB_addStorage_right) - 0.1, Yposition / 2, 0);
          wallComponent.rotation.y = 0;
          return _context.abrupt("break", 152);

        case 70:
          wallComponent.position.set(0, Yposition / 2, -_reducer.params.p_d / 2 + Number(_reducer.params.p_u_t) + 0.1);
          wallComponent.rotation.y = Math.PI / 2;
          return _context.abrupt("break", 152);

        case 73:
          wallComponent.position.set(-_reducer.params.p_w / 2 - 0.1, Yposition / 2, -_reducer.params.p_d / 2 + Number(_reducer.params.p_u_t) / 2);
          wallComponent.rotation.y = 0;
          return _context.abrupt("break", 152);

        case 76:
          wallComponent.position.set(_reducer.params.p_w / 2 + 0.1, Yposition / 2, -_reducer.params.p_d / 2 + Number(_reducer.params.p_u_t) / 2);
          wallComponent.rotation.y = Math.PI;
          return _context.abrupt("break", 152);

        case 79:
          wallComponent.position.set(_reducer.params.p_w / -2 - _reducer.params.lean_p_w - 0.1, Yposition / 2, 0);
          wallComponent.rotation.y = 0;
          return _context.abrupt("break", 152);

        case 82:
          wallComponent.position.set(-_reducer.params.p_w / 2 - _reducer.params.lean_p_w / 2 - _reducer.const_var.scene.getObjectByName("LeftLeanWalls").position.x, Yposition / 2, -_reducer.params.lean_p_d / 2 - 0.1 + _reducer.const_var.scene.getObjectByName("LeftLeanWalls").position.z);
          wallComponent.rotation.y = -Math.PI / 2;
          return _context.abrupt("break", 152);

        case 85:
          wallComponent.position.set(-_reducer.params.p_w / 2 - _reducer.params.lean_p_w / 2 + _reducer.const_var.scene.getObjectByName("LeftLeanWalls").position.x, Yposition / 2, _reducer.params.lean_p_d / 2 + 0.1 + _reducer.const_var.scene.getObjectByName("LeftLeanWalls").position.z);
          wallComponent.rotation.y = Math.PI / 2;
          return _context.abrupt("break", 152);

        case 88:
          wallComponent.position.set(0, Yposition / 2, _reducer.params.p_d / -2 - _reducer.params.leanB_p_w - 0.1);
          wallComponent.rotation.y = -Math.PI / 2;
          return _context.abrupt("break", 152);

        case 91:
          wallComponent.position.set(-_reducer.params.leanB_p_d / 2 - 0.1 + _reducer.const_var.scene.getObjectByName("BackLeanWalls").position.x, Yposition / 2, -_reducer.params.p_d / 2 - _reducer.params.leanB_p_w / 2 + _reducer.const_var.scene.getObjectByName("BackLeanWalls").position.z);
          wallComponent.rotation.y = 0;
          return _context.abrupt("break", 152);

        case 94:
          wallComponent.position.set(_reducer.params.leanB_p_d / 2 + 0.1 + _reducer.const_var.scene.getObjectByName("BackLeanWalls").position.x, Yposition / 2, -_reducer.params.p_d / 2 - _reducer.params.leanB_p_w / 2 + _reducer.const_var.scene.getObjectByName("BackLeanWalls").position.z);
          wallComponent.rotation.y = Math.PI;
          return _context.abrupt("break", 152);

        case 97:
          wallComponent.position.set(0, Yposition / 2, _reducer.params.p_d / 2 + _reducer.params.leanF_p_w + 0.1);
          wallComponent.rotation.y = Math.PI / 2;
          return _context.abrupt("break", 152);

        case 100:
          wallComponent.position.set(-_reducer.params.leanF_p_d / 2 - 0.1 + _reducer.const_var.scene.getObjectByName("FrontLeanWalls").position.x, Yposition / 2, _reducer.params.p_d / 2 + _reducer.params.leanF_p_w / 2 + _reducer.const_var.scene.getObjectByName("FrontLeanWalls").position.z);
          wallComponent.rotation.y = 0;
          return _context.abrupt("break", 152);

        case 103:
          wallComponent.position.set(_reducer.params.leanF_p_d / 2 + 0.1 + _reducer.const_var.scene.getObjectByName("FrontLeanWalls").position.x, Yposition / 2, _reducer.params.p_d / 2 + _reducer.params.leanF_p_w / 2 + _reducer.const_var.scene.getObjectByName("FrontLeanWalls").position.z);
          wallComponent.rotation.y = Math.PI;
          return _context.abrupt("break", 152);

        case 106:
          wallComponent.position.set(_reducer.params.p_w / 2 + _reducer.params.leanR_p_w + 0.1, Yposition / 2, 0);
          wallComponent.rotation.y = Math.PI;
          return _context.abrupt("break", 152);

        case 109:
          wallComponent.position.set(_reducer.params.p_w / 2 + _reducer.params.leanR_p_w / 2 + _reducer.const_var.scene.getObjectByName("RightLeanWalls").position.x, Yposition / 2, -_reducer.params.leanR_p_d / 2 - 0.1 + _reducer.const_var.scene.getObjectByName("RightLeanWalls").position.z);
          wallComponent.rotation.y = -Math.PI / 2;
          return _context.abrupt("break", 152);

        case 112:
          wallComponent.position.set(_reducer.params.p_w / 2 + _reducer.params.leanR_p_w / 2 + _reducer.const_var.scene.getObjectByName("RightLeanWalls").position.x, Yposition / 2, _reducer.params.leanR_p_d / 2 + 0.1 + _reducer.const_var.scene.getObjectByName("RightLeanWalls").position.z);
          wallComponent.rotation.y = Math.PI / 2;
          return _context.abrupt("break", 152);

        case 115:
          wallComponent.position.set(-_reducer.params.p_w / 2 - _reducer.params.lean_p_w / 2, Yposition / 2, -_reducer.params.lean_p_d / 2 + Number(_reducer.params.add_storage) + 0.1);
          wallComponent.rotation.y = Math.PI / 2;
          return _context.abrupt("break", 152);

        case 118:
          // wallComponent.position.set( (-params.p_w / 2 - params.lean_p_w)-const_var.scene.getObjectByName("LeftLeanWalls").position.x, - 0.1, Yposition/2,( -params.p_d / 2 + Number(params.add_storage / 2))+const_var.scene.getObjectByName("LeftLeanWalls").position.z);
          wallComponent.position.set(-_reducer.params.p_w / 2 - _reducer.params.lean_p_w - 0.1, Yposition / 2, -_reducer.params.p_d / 2 + Number(_reducer.params.add_storage / 2));
          wallComponent.rotation.y = 0;
          return _context.abrupt("break", 152);

        case 121:
          wallComponent.position.set(-_reducer.params.p_w / 2 + 0.1, Yposition / 2, -_reducer.params.p_d / 2 + Number(_reducer.params.add_storage / 2));
          wallComponent.rotation.y = Math.PI;
          return _context.abrupt("break", 152);

        case 124:
          wallComponent.position.set(_reducer.params.p_w / 2 + _reducer.params.leanR_p_w / 2, doorHeight / 2, -_reducer.params.p_d / 2 + Number(_reducer.params.add_storage_right));
          wallComponent.rotation.y = Math.PI / 2;
          return _context.abrupt("break", 152);

        case 127:
          wallComponent.position.set(_reducer.params.p_w / 2 - 0.25, doorHeight / 2, -_reducer.params.p_d / 2 + Number(_reducer.params.add_storage_right / 2));
          wallComponent.rotation.y = 0;
          return _context.abrupt("break", 152);

        case 130:
          wallComponent.position.set(_reducer.params.p_w / 2 + _reducer.params.leanR_p_w + 0.25, doorHeight / 2, -_reducer.params.p_d / 2 + Number(_reducer.params.add_storage_right / 2));
          wallComponent.rotation.y = Math.PI;
          return _context.abrupt("break", 152);

        case 133:
          wallComponent.position.set(-_reducer.params.p_w / 2 + Number(_reducer.params.add_storage_back / 2), Yposition / 2, -_reducer.params.p_d / 2 - _reducer.params.leanB_p_w - 0.1);
          wallComponent.rotation.y = -Math.PI / 2;
          return _context.abrupt("break", 152);

        case 136:
          wallComponent.position.set(-_reducer.params.p_w / 2 + Number(_reducer.params.add_storage_back / 2), Yposition / 2, -_reducer.params.p_d / 2 + 0.1);
          wallComponent.rotation.y = Math.PI / 2;
          return _context.abrupt("break", 152);

        case 139:
          wallComponent.position.set(-_reducer.params.p_w / 2 + Number(_reducer.params.add_storage_back) + 0.1, Yposition / 2, -_reducer.params.p_d / 2 - _reducer.params.leanB_p_w / 2);
          wallComponent.rotation.y = Math.PI;
          return _context.abrupt("break", 152);

        case 142:
          wallComponent.position.set(-_reducer.params.p_w / 2 + Number(_reducer.params.add_storage_front / 2), Yposition / 2, _reducer.params.p_d / 2 + _reducer.params.leanF_p_w + 0.1);
          wallComponent.rotation.y = Math.PI / 2;
          return _context.abrupt("break", 152);

        case 145:
          wallComponent.position.set(-_reducer.params.p_w / 2 + Number(_reducer.params.add_storage_front / 2), Yposition / 2, _reducer.params.p_d / 2 - 0.1);
          wallComponent.rotation.y = -Math.PI / 2;
          return _context.abrupt("break", 152);

        case 148:
          wallComponent.position.set(-_reducer.params.p_w / 2 + Number(_reducer.params.add_storage_front) + 0.1, Yposition / 2, _reducer.params.p_d / 2 + _reducer.params.leanF_p_w / 2);
          wallComponent.rotation.y = Math.PI;
          return _context.abrupt("break", 152);

        case 151:
          return _context.abrupt("return", alert(wallName + " not defined"));

        case 152:
          // widthForDoor(wallComponent,wallComponent.position,wallComponent.rotation);
          console.log(entry_rotation, entry_position, "entry_rotation");

          if (entry_position != undefined && entry_position != '') {
            wallComponent.position.set(entry_position.x, entry_position.y, entry_position.z); //wallComponent.rotation.set(entry_rotation._x,entry_rotation._y,entry_rotation._z); 
          }

          if (entry_rotation != undefined && entry_rotation != '') {
            //wallComponent.position.set(entry_position.x,entry_position.y,entry_position.z); 
            wallComponent.rotation.set(entry_rotation._x, entry_rotation._y, entry_rotation._z);
          } // calculateDoorDistance(wallComponent,wallComponent.position,wallComponent.rotation);


          ratio = 0.1666666666666667;
          wallComponent.scale.set(1, ratio * doorHeight, ratio * doorWidth);
          console.log(compType.includes('_frameout'), "compType.includes('_frameout')");

          if (compType.includes('_frameout') == true) {
            // let doorBox = new THREE.Mesh(new THREE.BoxGeometry(1, doorHeight, doorWidth), new THREE.MeshBasicMaterial({transparent: true, opacity: 0.01}));
            // doorBox.visible = false;
            // wallComponent.add(doorBox);
            doorBox = new THREE.Mesh(new THREE.BoxGeometry(1, doorHeight, doorWidth), new THREE.MeshBasicMaterial());
            doorBox.visible = false;
            doorBox.scale.set(1, 1 / (ratio * doorHeight), 1 / (ratio * doorWidth));
            wallComponent.add(doorBox);
          }

          if (_reducer.const_var.scene.getObjectByName("standard_door" + _reducer.const_var.sum) != undefined) {
            _reducer.const_var.scene.getObjectByName("standard_door" + _reducer.const_var.sum).children[1].material.metalness = -0.2;
            _reducer.const_var.scene.getObjectByName("standard_door" + _reducer.const_var.sum).children[1].material.color.b = 1.1;
          } // console.log(wallComponent,"wallComponent",const_var.newComponentArray[parentkey][childkey][nestedkey]["Size"][componentsize])


          if (is_edit != undefined) {
            currentObjData = componentsize;

            if (parentkey == "Garage" || parentkey == "Garage_Frameout") {
              kk++;
              calQuantity = kk;

              _reducer.const_var.entry_points.push({
                "parent_array_key": parentkey,
                "child_array_key": childkey,
                'nested_array_key': nestedkey,
                'entry_type': compType,
                'entry_location': _reducer.const_var.entry_wall_location[wallName],
                'entry_dimension_height': doorHeight,
                'entry_trim_kit_price': currentObjData.entry_trim_kit_price,
                'entry_dimension_width': doorWidth,
                'uniqueId': _reducer.const_var.sum,
                'entry_price': currentObjData.entry_price,
                'entry_size': is_edit,
                'name': currentObjData.name,
                "entry_note": _reducer.params.extra_notes,
                "garage_door_color": _reducer.params.g_d_c,
                "entry_trim_kit": _reducer.params.trimkit,
                "entry_header_seal": _reducer.params.header_seal,
                "entry_certified": _reducer.params.certified_door,
                "entry_chain_hoist": _reducer.params.chain_hoist,
                "entry_is_header_seal": _reducer.params.header_seal,
                "entry_is_certified": _reducer.params.certified_door,
                "entry_is_chain_hoist": _reducer.params.chain_hoist,
                'entry_position': wallComponent.position,
                'entry_rotation': wallComponent.rotation,
                'entry_chain_hoist_price': currentObjData.entry_chain_hoist_price,
                'entry_automatic_openers_price': currentObjData.entry_automatic_openers_price,
                'entry_header_seal_price': currentObjData.entry_header_seal_price,
                'entry_component_location': _reducer.const_var.entry_wall_location[wallName],
                "entry_automatic_openers": _reducer.params.automatic_openers,
                "entry_is_automatic_openers": _reducer.params.automatic_openers,
                'entry_garageDoor_color_Obj': _reducer.const_var.garageDoorColor[_reducer.params.g_d_c_id],
                'entry_garageDoor_color_price': 0,
                'component_name': compName,
                "component_wall_name": wallName,
                'entry_quantity': calQuantity
              });
            } else {
              _reducer.const_var.entry_points.push({
                "parent_array_key": parentkey,
                "child_array_key": childkey,
                'nested_array_key': nestedkey,
                'entry_type': compType,
                'entry_location': _reducer.const_var.entry_wall_location[wallName],
                'uniqueId': _reducer.const_var.sum,
                'entry_price': currentObjData.entry_price,
                'entry_size': is_edit,
                'name': currentObjData.name,
                "entry_note": _reducer.params.extra_notes,
                "garage_door_color": _reducer.params.g_d_c,
                "entry_trim_kit": false,
                "entry_certified": false,
                "entry_automatic_openers": false,
                "entry_chain_hoist": false,
                'entry_position': wallComponent.position,
                'entry_rotation': wallComponent.rotation,
                'entry_component_location': _reducer.const_var.entry_wall_location[wallName],
                'component_name': compName,
                "component_wall_name": wallName,
                'entry_quantity': calQuantity
              });
            }
          } else {
            _currentObjData = _reducer.const_var.newComponentArray[parentkey][childkey][nestedkey]["Size"][componentsize];
            trimPrice = _currentObjData['45_degree_angle'] != undefined ? _currentObjData['45_degree_angle'] : 0; // console.log(trimPrice,"currentObjData['45_degree_angle']")

            if (parentkey == "Garage" || parentkey == "Garage_Frameout") {
              _reducer.const_var.entry_points.push({
                "parent_array_key": parentkey,
                "child_array_key": childkey,
                'nested_array_key': nestedkey,
                'entry_type': compType,
                'entry_location': _reducer.const_var.entry_wall_location[wallName],
                'entry_dimension_height': doorHeight,
                'entry_trim_kit_price': trimPrice,
                'entry_dimension_width': doorWidth,
                'uniqueId': _reducer.const_var.sum,
                'entry_price': _currentObjData.cost,
                'entry_size': _currentObjData,
                'name': componentsize,
                "entry_note": _reducer.params.extra_notes,
                "garage_door_color": _reducer.params.g_d_c,
                "entry_trim_kit": _reducer.params.trimkit,
                "entry_header_seal": _reducer.params.header_seal,
                "entry_certified": _reducer.params.certified_door,
                "entry_chain_hoist": _reducer.params.chain_hoist,
                "entry_is_header_seal": _reducer.params.header_seal,
                "entry_is_certified": _reducer.params.certified_door,
                "entry_is_chain_hoist": _reducer.params.chain_hoist,
                'entry_position': wallComponent.position,
                'entry_rotation': wallComponent.rotation,
                'entry_chain_hoist_price': _currentObjData.chain_hoist,
                'entry_automatic_openers_price': _currentObjData.automatic_openers,
                'entry_header_seal_price': _currentObjData.header_seal,
                'entry_component_location': _reducer.const_var.entry_wall_location[wallName],
                "entry_automatic_openers": _reducer.params.automatic_openers,
                "entry_is_automatic_openers": _reducer.params.automatic_openers,
                'entry_garageDoor_color_Obj': _reducer.const_var.garageDoorColor[_reducer.params.g_d_c_id],
                'entry_garageDoor_color_price': 0,
                'component_name': compName,
                "component_wall_name": wallName,
                'entry_quantity': calQuantity
              });
            } else {
              _reducer.const_var.entry_points.push({
                "parent_array_key": parentkey,
                "child_array_key": childkey,
                'nested_array_key': nestedkey,
                'entry_type': compType,
                'entry_location': _reducer.const_var.entry_wall_location[wallName],
                'uniqueId': _reducer.const_var.sum,
                'entry_price': _currentObjData.cost,
                'entry_size': _currentObjData,
                'name': componentsize,
                "entry_note": _reducer.params.extra_notes,
                "garage_door_color": _reducer.params.g_d_c,
                "entry_trim_kit": false,
                "entry_certified": false,
                "entry_automatic_openers": false,
                "entry_chain_hoist": false,
                'entry_position': wallComponent.position,
                'entry_rotation': wallComponent.rotation,
                'entry_component_location': _reducer.const_var.entry_wall_location[wallName],
                'component_name': compName,
                "component_wall_name": wallName,
                'entry_quantity': calQuantity
              });
            }
          }

          console.log(_reducer.const_var.entry_points, "const_var.entry_points"); // console.log(const_var.entry_points,"wallComponentEntry")

          _reducer.const_var.doorUniqueId = wallComponent.uniqueId;
          _reducer.const_var.sum++;

          _reducer.const_var.newDoorsArray.push(wallComponent);

          if (compType.includes('frameout') == true) {
            wallComponent.updateMatrix();
            wallComponent.updateMatrixWorld();
            checkDoorWallCSG(wallComponent);
          }

          _reducer.const_var.controls.target.set(0, _reducer.params.p_h / 2, 0); //cuBuilding.cP();


          _index2["default"].dispatch((0, _index.setPricingForComponent)(true, _reducer.const_var.sum));

        case 168:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.loadDoorComponent = loadDoorComponent;

function addDoorEditIcon(door) {
  var texture = new THREE.TextureLoader().load(_edit["default"]);
  var icongeometry = new THREE.CircleGeometry(0.75, 32);
  var iconmaterial = new THREE.MeshBasicMaterial({
    map: texture
  });
  var doorIcon = new THREE.Mesh(icongeometry, iconmaterial);
  doorIcon.rotation.y = -Math.PI / 2;
  doorIcon.name = "editIcon";
  var bb = new THREE.Box3().setFromObject(door);
  var topRightCord = door.worldToLocal(bb.max);
  console.log(topRightCord, "topRightCord");
  doorIcon.position.set(topRightCord.x - 0.01, topRightCord.y - 1, topRightCord.z - 1);
  doorIcon.uniqueId = door.uniqueId;
  doorIcon.DoorObj = door.DoorObj;
  door.add(doorIcon);

  _reducer.const_var.b_d_g_b_O_cN.push(doorIcon);
}

function calculateDoorDistance(doorObj) {
  console.log(doorObj, "doorObjdoorObj", doorObj.position); // console.log(const_var.b_d_g_b_O_cN, const_var.newDoorsArray,"newDoorsArray" );

  var doorWidth = doorObj.actual_val.split("X")[0],
    doorHeight = doorObj.actual_val.split("X")[1];
  var widthText4L = 5,
    widthPostionX4L = 0,
    widthPostionY4L = 0,
    widthPostionZ4L = 0,
    widthRotationX4L = 0,
    widthRotationY4L = 0,
    widthRotationZ4L = 0;
  var widthText4R = 5,
    widthPostionX4R = 0,
    widthPostionY4R = 0,
    widthPostionZ4R = 0,
    widthRotationX4R = 0,
    widthRotationY4R = 0,
    widthRotationZ4R = 0;
  var wallName = doorObj.userData.wallName; // if ( doorObj.position.x === 0){

  (0, _UpdateArrowDimension.updateCenterBuildingArrows)(doorObj); // }

  switch (wallName) {
    //front
    case "c_b_f_w":
      widthText4L = (_reducer.params.p_w / 2 + doorObj.position.x - doorWidth / 2).toFixed(2);
      widthPostionX4L = doorObj.position.x - doorWidth / 2 - 1.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = _reducer.params.p_d / 2 + 0.15;
      widthText4R = Math.abs((doorObj.position.x - _reducer.params.p_w / 2 + doorWidth / 2).toFixed(2));
      widthPostionX4R = doorWidth / 2 + doorObj.position.x + 0.15;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = _reducer.params.p_d / 2 + 0.15;
      break;
    //back

    case "c_b_b_w":
      widthText4L = (_reducer.params.p_w / 2 + doorObj.position.x - doorWidth / 2).toFixed(2);
      widthPostionX4L = doorObj.position.x - doorWidth / 2 - 0.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = _reducer.params.p_d / -2 - 0.15;
      widthRotationY4L = Math.PI;
      widthText4R = Math.abs((doorObj.position.x - _reducer.params.p_w / 2 + doorWidth / 2).toFixed(2));
      widthPostionX4R = doorWidth / 2 + doorObj.position.x + 1.2;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = _reducer.params.p_d / -2 - 0.15;
      widthRotationY4R = Math.PI;
      break;
    //right

    case "c_b_r_w":
      widthText4L = (_reducer.params.p_d / 2 - doorObj.position.z - doorWidth / 2).toFixed(2);
      widthPostionX4L = _reducer.params.p_w / 2 + 0.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = doorObj.position.z + doorWidth / 2 + 1.3;
      widthRotationY4L = Math.PI / 2;
      widthText4R = (_reducer.params.p_d / 2 + doorObj.position.z - doorWidth / 2).toFixed(2);
      widthPostionX4R = _reducer.params.p_w / 2 + 0.1;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = doorObj.position.z - doorWidth / 2 - 0.1;
      widthRotationY4R = Math.PI / 2;
      break;
    // left

    case "c_b_l_w":
      widthText4L = (_reducer.params.p_d / 2 - doorObj.position.z - doorWidth / 2).toFixed(2);
      widthPostionX4L = _reducer.params.p_w / -2 - 0.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = doorObj.position.z + doorWidth / 2 + 0.1;
      widthRotationY4L = Math.PI / -2;
      widthText4R = (_reducer.params.p_d / 2 + doorObj.position.z - doorWidth / 2).toFixed(2);
      widthPostionX4R = _reducer.params.p_w / -2 - 0.1;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = doorObj.position.z - doorWidth / 2 - 1.3;
      widthRotationY4R = Math.PI / -2;
      break;
    //center building back storage front wall

    case "c_b_f_s_w":
      widthText4L = (_reducer.params.p_w / 2 + doorObj.position.x - doorWidth / 2).toFixed(2);
      widthPostionX4L = doorObj.position.x - doorWidth / 2 - 1.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = -_reducer.params.p_d / 2 + Number(_reducer.params.p_u_t) + 0.15;
      widthText4R = Math.abs((doorObj.position.x - _reducer.params.p_w / 2 + doorWidth / 2).toFixed(2));
      widthPostionX4R = doorWidth / 2 + doorObj.position.x + 0.15;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = -_reducer.params.p_d / 2 + Number(_reducer.params.p_u_t) + 0.25 + 0.15;
      break;
    //center building back storage left wall

    case "c_b_l_s_w":
      widthText4L = (_reducer.params.p_d / 2 + doorObj.position.z - doorWidth / 2).toFixed(2);
      widthPostionX4L = _reducer.params.p_w / -2 - 0.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = doorObj.position.z - doorWidth / 2 - 1.3;
      widthRotationY4L = Math.PI / -2;
      widthText4R = -(doorObj.position.z - _reducer.params.p_d / 2 + doorWidth / 2 + (_reducer.params.p_d - _reducer.params.p_u_t)).toFixed(2);
      widthPostionX4R = _reducer.params.p_w / -2 - 0.1;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = doorObj.position.z + doorWidth / 2 + 0.1;
      widthRotationY4R = Math.PI / -2;
      break;
    //center building back storage right wall

    case "c_b_r_s_w":
      widthText4L = (_reducer.params.p_d / 2 + doorObj.position.z - doorWidth / 2).toFixed(2);
      widthPostionX4L = _reducer.params.p_w / 2 + 0.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = doorObj.position.z - doorWidth / 2 - 1;
      widthRotationY4L = Math.PI / 2;
      widthText4R = -(doorObj.position.z - _reducer.params.p_d / 2 + doorWidth / 2 + (_reducer.params.p_d - _reducer.params.p_u_t)).toFixed(2);
      widthPostionX4R = _reducer.params.p_w / 2 + 0.1;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = doorObj.position.z + doorWidth / 2 + 1.3;
      widthRotationY4R = Math.PI / 2;
      break;
    //center building left storage front wall

    case "c_b_l_s_f_w":
      widthText4L = (_reducer.params.p_w / 2 + doorObj.position.x - doorWidth / 2).toFixed(2);
      widthPostionX4L = doorObj.position.x - doorWidth / 2 - 1.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = _reducer.params.p_d / 2 + 0.15;
      widthText4R = Math.abs(doorObj.position.x - _reducer.params.p_w / 2 + doorWidth / 2 + (_reducer.params.p_w - _reducer.params.cB_addStorage_left)).toFixed(2);
      widthPostionX4R = doorWidth / 2 + doorObj.position.x + 0.15;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = _reducer.params.p_d / 2 + 0.15;
      break;
    //center building left storage back wall

    case "c_b_l_s_b_w":
      widthText4L = (_reducer.params.p_w / 2 + doorObj.position.x - doorWidth / 2).toFixed(2);
      widthPostionX4L = doorObj.position.x - doorWidth / 2 - 0.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = _reducer.params.p_d / -2 - 0.15;
      widthRotationY4L = Math.PI;
      widthText4R = Math.abs(doorObj.position.x - _reducer.params.p_w / 2 + doorWidth / 2 + (_reducer.params.p_w - _reducer.params.cB_addStorage_left)).toFixed(2);
      widthPostionX4R = doorWidth / 2 + doorObj.position.x + 1.2;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = _reducer.params.p_d / -2 - 0.15;
      widthRotationY4R = Math.PI;
      break;
    //center building left storage right wall

    case "c_b_l_s_r_w":
      widthText4L = (_reducer.params.p_d / 2 - doorObj.position.z - doorWidth / 2).toFixed(2);
      widthPostionX4L = -_reducer.params.p_w / 2 + Number(_reducer.params.cB_addStorage_left) + 0.25;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = doorObj.position.z + doorWidth / 2 + 1.3;
      widthRotationY4L = Math.PI / 2;
      widthText4R = (_reducer.params.p_d / 2 + doorObj.position.z - doorWidth / 2).toFixed(2);
      widthPostionX4R = -_reducer.params.p_w / 2 + Number(_reducer.params.cB_addStorage_left) + 0.25;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = doorObj.position.z - doorWidth / 2 - 0.1;
      widthRotationY4R = Math.PI / 2;
      break;
    //center building right storage front wall

    case "c_b_r_s_f_w":
      widthText4L = (_reducer.params.p_w / 2 + doorObj.position.x - doorWidth / 2).toFixed(2);
      widthText4L = Math.abs(_reducer.params.p_w / 2 + doorObj.position.x - doorWidth / 2 - (_reducer.params.p_w - _reducer.params.cB_addStorage_right)).toFixed(2);
      widthPostionX4L = doorObj.position.x - doorWidth / 2 - 1.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = _reducer.params.p_d / 2 + 0.15;
      widthText4R = Math.abs((doorObj.position.x - _reducer.params.p_w / 2 + doorWidth / 2).toFixed(2));
      widthPostionX4R = doorWidth / 2 + doorObj.position.x + 0.15;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = _reducer.params.p_d / 2 + 0.15;
      break;
    //center building right storage back wall

    case "c_b_r_s_b_w":
      widthText4L = Math.abs(_reducer.params.p_w / 2 + doorObj.position.x - doorWidth / 2 - (_reducer.params.p_w - _reducer.params.cB_addStorage_right)).toFixed(2);
      widthPostionX4L = doorObj.position.x - doorWidth / 2 - 0.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = _reducer.params.p_d / -2 - 0.15;
      widthRotationY4L = Math.PI;
      widthText4R = Math.abs((doorObj.position.x - _reducer.params.p_w / 2 + doorWidth / 2).toFixed(2));
      widthPostionX4R = doorWidth / 2 + doorObj.position.x + 1.2;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = _reducer.params.p_d / -2 - 0.15;
      widthRotationY4R = Math.PI;
      break;
    //center building right storage left wall

    case "c_b_r_s_l_w":
      widthText4L = (_reducer.params.p_d / 2 - doorObj.position.z - doorWidth / 2).toFixed(2);
      widthPostionX4L = _reducer.params.p_w / -2 + Number(_reducer.params.cB_addStorage_right) - 0.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = doorObj.position.z + doorWidth / 2 + 0.1;
      widthRotationY4L = Math.PI / -2;
      widthText4R = (_reducer.params.p_d / 2 + doorObj.position.z - doorWidth / 2).toFixed(2);
      widthPostionX4R = _reducer.params.p_w / -2 + Number(_reducer.params.cB_addStorage_right) - 0.1;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = doorObj.position.z - doorWidth / 2 - 1.3;
      widthRotationY4R = Math.PI / -2;
      break;
    //Left lean front wall

    case "L_L_F_W":
      widthText4L = (doorObj.position.x + _reducer.params.p_w / 2 + _reducer.params.lean_p_w / 2 + doorWidth / 2).toFixed(2);
      widthPostionX4L = doorObj.position.x - doorWidth / 2 - 1.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = _reducer.params.lean_p_d / 2 + 0.15;
      widthText4R = Math.abs((doorObj.position.x + _reducer.params.p_w / 2 + _reducer.params.lean_p_w / 2 - doorWidth / 2).toFixed(2));
      widthPostionX4R = doorWidth / 2 + doorObj.position.x + 0.15;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = _reducer.params.lean_p_d / 2 + 0.15;
      break;
    //Left lean side wall

    case "L_L_L_W":
      widthText4L = (_reducer.params.lean_p_d / 2 - doorObj.position.z - doorWidth / 2).toFixed(2);
      widthPostionX4L = -_reducer.params.lean_p_w - _reducer.params.p_w / 2 - 0.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = doorObj.position.z + doorWidth / 2 + 0.1;
      widthRotationY4L = Math.PI / -2;
      widthText4R = (_reducer.params.lean_p_d / 2 + doorObj.position.z - doorWidth / 2).toFixed(2);
      widthPostionX4R = -_reducer.params.lean_p_w - _reducer.params.p_w / 2 - 0.1;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = doorObj.position.z - doorWidth / 2 - 1.6;
      widthRotationY4R = Math.PI / -2;
      break;
    //Left lean back wall

    case "L_L_B_W":
      widthText4L = (doorObj.position.x + _reducer.params.p_w / 2 + _reducer.params.lean_p_w / 2 + doorWidth / 2).toFixed(2);
      widthPostionX4L = doorObj.position.x - doorWidth / 2 - 0.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = _reducer.params.lean_p_d / -2 - 0.15;
      widthRotationY4L = Math.PI;
      widthText4R = Math.abs((doorObj.position.x + _reducer.params.p_w / 2 + _reducer.params.lean_p_w / 2 - doorWidth / 2).toFixed(2));
      widthPostionX4R = doorWidth / 2 + doorObj.position.x + 1.2;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = _reducer.params.lean_p_d / -2 - 0.15;
      widthRotationY4R = Math.PI;
      break;
    //Right Lean front wall

    case "R_L_F_W":
      widthText4L = Math.abs((doorObj.position.x - _reducer.params.p_w / 2 - _reducer.params.leanR_p_w / 2 + doorWidth / 2).toFixed(2));
      widthPostionX4L = doorObj.position.x - doorWidth / 2 - 1.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = _reducer.params.leanR_p_d / 2 + 0.15;
      widthText4R = -(doorObj.position.x - _reducer.params.p_w / 2 - _reducer.params.leanR_p_w / 2 - doorWidth / 2).toFixed(2);
      widthPostionX4R = doorWidth / 2 + doorObj.position.x + 0.15;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = _reducer.params.leanR_p_d / 2 + 0.15;
      break;
    //Right lean side wall

    case "R_L_R_W":
      widthText4L = (_reducer.params.leanR_p_d / 2 - doorObj.position.z - doorWidth / 2).toFixed(2);
      widthPostionX4L = _reducer.params.leanR_p_w + _reducer.params.p_w / 2 + 0.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = doorObj.position.z + doorWidth / 2 + 1.3;
      widthRotationY4L = Math.PI / 2;
      widthText4R = (_reducer.params.leanR_p_d / 2 + doorObj.position.z - doorWidth / 2).toFixed(2);
      widthPostionX4R = _reducer.params.leanR_p_w + _reducer.params.p_w / 2 + 0.1;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = doorObj.position.z - doorWidth / 2 - 0.1;
      widthRotationY4R = Math.PI / 2;
      break;
    //Right lean back wall

    case "R_L_B_W":
      widthText4L = Math.abs((doorObj.position.x - _reducer.params.p_w / 2 - _reducer.params.leanR_p_w / 2 + doorWidth / 2).toFixed(2));
      widthPostionX4L = doorObj.position.x - doorWidth / 2 - 0.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = _reducer.params.leanR_p_d / -2 - 0.15;
      widthRotationY4L = Math.PI;
      widthText4R = -(doorObj.position.x - _reducer.params.p_w / 2 - _reducer.params.leanR_p_w / 2 - doorWidth / 2).toFixed(2);
      widthPostionX4R = doorWidth / 2 + doorObj.position.x + 1.2;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = _reducer.params.leanR_p_d / -2 - 0.15;
      widthRotationY4R = Math.PI;
      break;
    //Front lean side wall

    case "F_L_F_W":
      widthText4L = (_reducer.params.leanF_p_d / 2 + doorObj.position.x - doorWidth / 2).toFixed(2);
      widthPostionX4L = doorObj.position.x - doorWidth / 2 - 1.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = _reducer.params.leanF_p_w + _reducer.params.p_d / 2 + 0.15;
      widthText4R = Math.abs((doorObj.position.x - _reducer.params.leanF_p_d / 2 + doorWidth / 2).toFixed(2));
      widthPostionX4R = doorWidth / 2 + doorObj.position.x + 0.15;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = _reducer.params.leanF_p_w + _reducer.params.p_d / 2 + 0.15;
      break;
    //Front lean left wall

    case "F_L_L_W":
      widthText4L = (_reducer.params.p_d / 2 + _reducer.params.leanF_p_w / 2 - doorObj.position.z + doorWidth / 2).toFixed(2);
      widthPostionX4L = _reducer.params.p_w / -2 - 0.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = doorObj.position.z + doorWidth / 2 + 0.1;
      widthRotationY4L = Math.PI / -2;
      widthText4R = -(_reducer.params.p_d / 2 + _reducer.params.leanF_p_w / 2 - doorObj.position.z - doorWidth / 2).toFixed(2);
      widthPostionX4R = _reducer.params.p_w / -2 - 0.1;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = doorObj.position.z - doorWidth / 2 - 1.6;
      widthRotationY4R = Math.PI / -2;
      break;
    //Front lean right wall

    case "F_L_R_W":
      widthText4L = (_reducer.params.p_d / 2 + _reducer.params.leanF_p_w / 2 - doorObj.position.z + doorWidth / 2).toFixed(2);
      widthPostionX4L = _reducer.params.leanF_p_d / 2 + 0.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = doorObj.position.z + doorWidth / 2 + 1.3;
      widthRotationY4L = Math.PI / 2;
      widthText4R = -(_reducer.params.p_d / 2 + _reducer.params.leanF_p_w / 2 - doorObj.position.z - doorWidth / 2).toFixed(2);
      widthPostionX4R = _reducer.params.leanF_p_d / 2 + 0.1;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = doorObj.position.z - doorWidth / 2 - 0.1;
      widthRotationY4R = Math.PI / 2;
      break;
    //Back lean side wall

    case "B_L_S_W":
      widthText4L = (_reducer.params.leanB_p_d / 2 + doorObj.position.x - doorWidth / 2).toFixed(2);
      widthPostionX4L = doorObj.position.x - doorWidth / 2 - 0.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = -_reducer.params.leanB_p_w + _reducer.params.p_d / -2 - 0.15;
      widthRotationY4L = Math.PI;
      widthText4R = Math.abs((doorObj.position.x - _reducer.params.leanB_p_d / 2 + doorWidth / 2).toFixed(2));
      widthPostionX4R = doorWidth / 2 + doorObj.position.x + 1.2;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = -_reducer.params.leanB_p_w + _reducer.params.p_d / -2 - 0.15;
      widthRotationY4R = Math.PI;
      break;
    //Back lean left wall

    case "B_L_B_W":
      widthText4L = (_reducer.params.p_d / -2 - _reducer.params.leanB_p_w / 2 - doorObj.position.z + doorWidth / 2).toFixed(2);
      widthPostionX4L = _reducer.params.p_w / -2 - 0.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = doorObj.position.z + doorWidth / 2 + 0.1;
      widthRotationY4L = Math.PI / -2;
      console.log(doorObj.position.z, "doorObj.position.z");
      widthText4R = -(_reducer.params.p_d / -2 - _reducer.params.leanB_p_w / 2 - doorObj.position.z - doorWidth / 2).toFixed(2);
      widthPostionX4R = _reducer.params.p_w / -2 - 0.1;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = doorObj.position.z - doorWidth / 2 - 1.6;
      widthRotationY4R = Math.PI / -2;
      break;
    //Back lean right wall

    case "B_L_F_W":
      widthText4L = (_reducer.params.p_d / -2 - _reducer.params.leanB_p_w / 2 - doorObj.position.z + doorWidth / 2).toFixed(2);
      widthPostionX4L = _reducer.params.leanB_p_d / 2 + 0.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = doorObj.position.z + doorWidth / 2 + 1.3;
      widthRotationY4L = Math.PI / 2;
      widthText4R = -(_reducer.params.p_d / -2 - _reducer.params.leanB_p_w / 2 - doorObj.position.z - doorWidth / 2).toFixed(2);
      widthPostionX4R = _reducer.params.leanB_p_d / 2 + 0.1;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = doorObj.position.z - doorWidth / 2 - 0.1;
      widthRotationY4R = Math.PI / 2;
      break;
    //Left lean Storage Front wall

    case "L_L_F_S_W":
      widthText4L = (doorObj.position.x + _reducer.params.p_w / 2 + _reducer.params.lean_p_w / 2 + doorWidth / 2).toFixed(2);
      widthPostionX4L = doorObj.position.x - doorWidth / 2 - 1.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = _reducer.params.lean_p_d / -2 + Number(_reducer.params.add_storage) + 0.15;
      widthText4R = Math.abs((doorObj.position.x + _reducer.params.p_w / 2 + _reducer.params.lean_p_w / 2 - doorWidth / 2).toFixed(2));
      widthPostionX4R = doorWidth / 2 + doorObj.position.x + 0.15;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = _reducer.params.lean_p_d / -2 + Number(_reducer.params.add_storage) + 0.15;
      break;
    //Left lean Storage Left wall

    case "L_L_L_S_W":
      widthText4L = -(doorObj.position.z - _reducer.params.lean_p_d / 2 + doorWidth / 2 + (_reducer.params.lean_p_d - _reducer.params.add_storage)).toFixed(2);
      widthPostionX4L = -_reducer.params.lean_p_w - _reducer.params.p_w / 2 - 0.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = doorObj.position.z + doorWidth / 2 + 0.1;
      widthRotationY4L = Math.PI / -2;
      widthText4R = (_reducer.params.lean_p_d / 2 + doorObj.position.z - doorWidth / 2).toFixed(2);
      widthPostionX4R = -_reducer.params.lean_p_w - _reducer.params.p_w / 2 - 0.1;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = doorObj.position.z - doorWidth / 2 - 1.6;
      widthRotationY4R = Math.PI / -2;
      break;
    //Right lean Storage Front wall

    case "R_L_F_S_W":
      widthText4L = Math.abs((doorObj.position.x - _reducer.params.p_w / 2 - _reducer.params.leanR_p_w / 2 + doorWidth / 2).toFixed(2));
      widthPostionX4L = doorObj.position.x - doorWidth / 2 - 1.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = _reducer.params.leanR_p_d / -2 + Number(_reducer.params.add_storage_right) + 0.15;
      widthText4R = -(doorObj.position.x - _reducer.params.p_w / 2 - _reducer.params.leanR_p_w / 2 - doorWidth / 2).toFixed(2);
      widthPostionX4R = doorWidth / 2 + doorObj.position.x + 0.15;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = _reducer.params.leanR_p_d / -2 + Number(_reducer.params.add_storage_right) + 0.15;
      break;
    //Right Lean Storage Right wall

    case "R_L_R_S_W":
      widthText4L = -(doorObj.position.z - _reducer.params.leanR_p_d / 2 + doorWidth / 2 + (_reducer.params.leanR_p_d - _reducer.params.add_storage_right)).toFixed(2);
      widthPostionX4L = _reducer.params.leanR_p_w + _reducer.params.p_w / 2 + 0.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = doorObj.position.z + doorWidth / 2 + 1.3;
      widthRotationY4L = Math.PI / 2;
      widthText4R = (_reducer.params.leanR_p_d / 2 + doorObj.position.z - doorWidth / 2).toFixed(2);
      widthPostionX4R = _reducer.params.leanR_p_w + _reducer.params.p_w / 2 + 0.1;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = doorObj.position.z - doorWidth / 2 - 0.1;
      widthRotationY4R = Math.PI / 2;
      break;
    //Back lean Storage Front wall

    case "B_L_F_S_W":
      widthText4L = (_reducer.params.leanB_p_d / 2 + doorObj.position.x - doorWidth / 2).toFixed(2);
      widthPostionX4L = doorObj.position.x - doorWidth / 2 - 0.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = -_reducer.params.leanB_p_w + _reducer.params.p_d / -2 - 0.15;
      widthRotationY4L = Math.PI;
      widthText4R = Math.abs((doorObj.position.x - _reducer.params.leanB_p_d / 2 + doorWidth / 2).toFixed(2));
      widthText4R = Math.abs((doorObj.position.x - _reducer.params.leanB_p_d / 2 + doorWidth / 2 + (_reducer.params.leanB_p_d - _reducer.params.add_storage_front)).toFixed(2));
      widthPostionX4R = doorWidth / 2 + doorObj.position.x + 1.2;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = -_reducer.params.leanB_p_w + _reducer.params.p_d / -2 - 0.15;
      widthRotationY4R = Math.PI;
      break;
    //Back Lean Storage Left wall

    case "B_L_L_S_W":
      widthText4L = (_reducer.params.p_d / -2 - _reducer.params.leanB_p_w / 2 - doorObj.position.z + doorWidth / 2).toFixed(2);
      widthPostionX4L = _reducer.params.leanB_p_d / -2 + Number(_reducer.params.add_storage_back) + 0.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = doorObj.position.z + doorWidth / 2 + 1.3;
      widthRotationY4L = Math.PI / 2;
      widthText4R = -(_reducer.params.p_d / -2 - _reducer.params.leanB_p_w / 2 - doorObj.position.z - doorWidth / 2).toFixed(2);
      widthPostionX4R = _reducer.params.leanB_p_d / -2 + Number(_reducer.params.add_storage_back) + 0.1;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = doorObj.position.z - doorWidth / 2 - 0.1;
      widthRotationY4R = Math.PI / 2;
      break;
    //Front lean Storage Front wall

    case "F_L_F_S_W":
      widthText4L = (_reducer.params.leanF_p_d / 2 + doorObj.position.x - doorWidth / 2).toFixed(2);
      widthPostionX4L = doorObj.position.x - doorWidth / 2 - 1.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = _reducer.params.leanF_p_w + _reducer.params.p_d / 2 + 0.15;
      widthText4R = Math.abs((doorObj.position.x - _reducer.params.leanF_p_d / 2 + doorWidth / 2 + (_reducer.params.leanF_p_d - _reducer.params.add_storage_front)).toFixed(2));
      widthPostionX4R = doorWidth / 2 + doorObj.position.x + 0.15;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = _reducer.params.leanF_p_w + _reducer.params.p_d / 2 + 0.15;
      break;
    //Front Lean Storage Right wall

    case "F_L_R_S_W":
      widthText4L = (_reducer.params.p_d / 2 + _reducer.params.leanF_p_w / 2 - doorObj.position.z + doorWidth / 2).toFixed(2);
      widthPostionX4L = _reducer.params.leanF_p_d / -2 + Number(_reducer.params.add_storage_front) + 0.1;
      widthPostionY4L = doorHeight / 2;
      widthPostionZ4L = doorObj.position.z + doorWidth / 2 + 1.3;
      widthRotationY4L = Math.PI / 2;
      widthText4R = -(_reducer.params.p_d / 2 + _reducer.params.leanF_p_w / 2 - doorObj.position.z - doorWidth / 2).toFixed(2);
      widthPostionX4R = _reducer.params.leanF_p_d / -2 + Number(_reducer.params.add_storage_front) + 0.1;
      widthPostionY4R = doorHeight / 2;
      widthPostionZ4R = doorObj.position.z - doorWidth / 2 - 0.1;
      widthRotationY4R = Math.PI / 2;
      break;

    default:
      return alert(wallName + " not defined");
  }

  var doorWidthGeo4L = new THREE.TextGeometry(widthText4L + "''", {
    font: _reducer.const_var.font,
    size: 0.3,
    height: 0.02,
    curveSegments: 3,
    bevelEnabled: true,
    bevelThickness: 0.01,
    bevelSize: 0,
    bevelSegments: 3
  });
  var doorWidthMaterial4L = new THREE.MeshPhongMaterial({
    color: 0x282828
  });
  var doorWidth4L = new THREE.Mesh(doorWidthGeo4L, doorWidthMaterial4L);
  doorWidth4L.name = "doorWidth4L" + doorObj.userData.uniqueId;
  doorWidth4L.visible = false;
  doorWidth4L.posValue = {
    'left': (_reducer.params.p_w / 2 + doorObj.position.x - doorWidth / 2).toFixed(2),
    'right': ''
  };

  if (doorObj.children.length > 3) {
    doorObj.children[4] = doorWidth4L; // doorObj.children[4].visible = const_var.callMesure;

    doorObj.children[4].position.set(widthPostionX4L, widthPostionY4L, widthPostionZ4L);
    doorObj.children[4].rotation.set(widthRotationX4L, widthRotationY4L, widthRotationZ4L);
  } else {
    doorObj.add(doorWidth4L);
  }

  var doorWidthGeo4R = new THREE.TextGeometry(widthText4R + "''", {
    font: _reducer.const_var.font,
    size: 0.35,
    height: 0.02,
    curveSegments: 3,
    bevelEnabled: true,
    bevelThickness: 0.01,
    bevelSize: 0,
    bevelSegments: 3
  });
  var doorWidthMaterial4R = new THREE.MeshPhongMaterial({
    color: 0x282828
  });
  var doorWidth4R = new THREE.Mesh(doorWidthGeo4R, doorWidthMaterial4R);
  doorWidth4R.name = "doorWidth4R" + doorObj.userData.uniqueId;
  doorWidth4R.visible = false;

  if (doorObj.children.length > 4) {
    doorObj.children[5] = doorWidth4R; // doorObj.children[5].visible = const_var.callMesure;

    doorObj.children[5].position.set(widthPostionX4R, widthPostionY4R, widthPostionZ4R);
    doorObj.children[5].rotation.set(widthRotationX4R, widthRotationY4R, widthRotationZ4R);
  } else {
    doorObj.add(doorWidth4R);
  }
}

function addDoorEditIcon1(door) {
  return regeneratorRuntime.async(function addDoorEditIcon1$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", new Promise(function (resolve, reject) {
            var loader = new _SVGLoader.SVGLoader();
            loader.load(_edit_icon["default"], function (data) {
              var paths = data.paths;
              var doorIcon = new THREE.Group();

              for (var i = 0; i < paths.length; i++) {
                var path = paths[i];
                var material = new THREE.MeshBasicMaterial({
                  color: path.color,
                  side: THREE.DoubleSide,
                  depthWrite: false
                });

                var shapes = _SVGLoader.SVGLoader.createShapes(path);

                for (var j = 0; j < shapes.length; j++) {
                  var shape = shapes[j];
                  var geometry = new THREE.ShapeGeometry(shape);
                  var mesh = new THREE.Mesh(geometry, material);
                  doorIcon.add(mesh);
                }
              }

              var bb = new THREE.Box3().setFromObject(door);
              var topRightCord = door.worldToLocal(bb.max);
              doorIcon.scale.set(0.0005, 0.0005, 0.0005);
              doorIcon.rotation.set(3.14, 1.57, 0);
              doorIcon.position.set(topRightCord.x, topRightCord.y - 0.2, topRightCord.z - 1.5);
              doorIcon.uniqueId = door.uniqueId;
              doorIcon.DoorObj = door.DoorObj;

              _reducer.const_var.b_d_g_b_O_cN.push(doorIcon);

              door.add(doorIcon);
              resolve(doorIcon);
            }, function (xhr) {
              console.log(xhr.loaded / xhr.total * 100 + '% loaded');
            }, function (error) {
              console.log('An error happened: ' + error);
              reject();
            });
          }));

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
}

var RemoveDoorComponent = function RemoveDoorComponent(unique, compType, compName, wall, componentsize, parentkey, childkey, nestedkey, entry_rotation, entry_position, is_trim, is_edit) {
  // console.log(unique,compType, compName, wall,componentsize,parentkey,childkey,entry_rotation,entry_position,is_trim,"unique,compType, compName, wall,componentsize,parentkey,childkey")
  if (componentsize != undefined) {
    if (is_trim != undefined) {
      _reducer.const_var.scene.remove(_reducer.const_var.scene.getObjectByName(is_trim + unique));
    } else {
      _reducer.const_var.scene.remove(_reducer.const_var.scene.getObjectByName(compName + unique));
    }
  } else {
    _reducer.const_var.scene.remove(_reducer.const_var.scene.getObjectByName(compType + unique));
  }

  for (var i = 0; i < _reducer.const_var.b_d_g_b_O_cN.length; i++) {
    if (_reducer.const_var.b_d_g_b_O_cN[i].uniqueId == unique) {
      _reducer.const_var.b_d_g_b_O_cN.splice(i, 1);
    }
  }

  for (var i = 0; i < _reducer.const_var.newDoorsArray.length; i++) {
    if (_reducer.const_var.newDoorsArray[i].uniqueId == unique) {
      _reducer.const_var.newDoorsArray.splice(i, 1);
    }
  }

  _reducer.const_var.entry_points.map(function (val, i) {
    if (val.uniqueId == unique) {
      _reducer.const_var.entry_points.splice(i, 1);
    }
  });

  cuBuilding.cP();
  _reducer.const_var.showComponentEditBox = false;
  _reducer.params.wallPos = "Select";

  if (componentsize != undefined) {
    loadDoorComponent(compType, compName, wall, componentsize, parentkey, childkey, nestedkey, entry_rotation, entry_position, is_edit);
  }
};

exports.RemoveDoorComponent = RemoveDoorComponent;

var removeAlltheComponent = function removeAlltheComponent() {
  console.log(_reducer.const_var.entry_points, _reducer.const_var.b_s_c_n, "const_var.entry_points");

  if (_reducer.const_var.entry_points.length > 0) {
    _reducer.const_var.entry_points.map(function (val, i) {
      // console.log(val,i,"const_var.entry_points")
      _reducer.const_var.scene.remove(_reducer.const_var.scene.getObjectByName(val.component_name + val.uniqueId)); // const_var.entry_points.splice(i,1);

    });

    _reducer.const_var.newDoorsArray = [];
    _reducer.const_var.b_d_g_b_O_cN = [];
    cuBuilding.cP();
    _reducer.const_var.showComponentEditBox = false;
  }

  if (_reducer.const_var.entry_points.length > 0) {
    for (var ii = 0; ii <= _reducer.const_var.entry_points.length - 1; ii++) {
      _reducer.const_var.entry_points.splice(ii, 1);
    }
  }
};

exports.removeAlltheComponent = removeAlltheComponent;

var removeWallSpecificComponent = function removeWallSpecificComponent() {
  // console.log(const_var.entry_points,"const_var.entry_points")
  if (_reducer.const_var.entry_points.length > 0) {
    for (var _len = arguments.length, wallname = new Array(_len), _key = 0; _key < _len; _key++) {
      wallname[_key] = arguments[_key];
    }

    console.log(wallname, "wallname");

    var _loop = function _loop() {
      var nameofwall = _wallname[_i];

      // if(nameofwall=="c_b_b_w" && params.cB_addStorage_check_left==true && params.p_b_w=="Close")
      // {
      //     let filterObj = const_var.entry_points.filter(data=>data.component_wall_name=="c_b_l_s_b_w")[0];
      //     const_var.scene.getObjectByName(filterObj.component_name+filterObj.uniqueId).userData.wallName = nameofwall;
      //     console.log(filterObj,"filterObj",const_var.scene.getObjectByName(filterObj.component_name+filterObj.uniqueId))
      // }
      var filterObj = _reducer.const_var.entry_points.filter(function (data) {
        return data.component_wall_name == nameofwall;
      });

      console.log(filterObj, "filterObj");

      for (i = 0; i <= filterObj.length - 1; i++) {
        console.log(filterObj[i].component_wall_name, "filterObj");

        if (filterObj[i].component_wall_name == nameofwall) {
          console.log(filterObj[i].component_name + filterObj[i].uniqueId, "filterObj");

          _reducer.const_var.scene.remove(_reducer.const_var.scene.getObjectByName(filterObj[i].component_name + filterObj[i].uniqueId));

          var bdIndex = _reducer.const_var.b_d_g_b_O_cN.findIndex(function (data) {
            return data.uniqueId == filterObj[i].uniqueId;
          });

          var nwIndex = _reducer.const_var.newDoorsArray.findIndex(function (data) {
            return data.uniqueId == filterObj[i].uniqueId;
          });

          _reducer.const_var.b_d_g_b_O_cN.splice(i, 1);

          _reducer.const_var.newDoorsArray.splice(i, 1); // const_var.entry_points.splice(i,1);
          // console.log(bdIndex,"bdIndex",nwIndex,const_var.b_d_g_b_O_cN,const_var.newDoorsArray);

        }
      }

      for (ii = 0; ii <= _reducer.const_var.entry_points.length - 1; ii++) {
        if (_reducer.const_var.entry_points[ii].component_wall_name == nameofwall) {
          _reducer.const_var.entry_points.splice(ii, 1);
        }
      } //     const_var.entry_points.map((val, i) => {
      //     console.log(val.component_wall_name,"==",nameofwall,"nameofwall")
      //     if(val.component_wall_name==nameofwall)
      //     {
      //         const_var.scene.remove(const_var.scene.getObjectByName(val.component_name+val.uniqueId));
      //         const_var.entry_points.splice(i,1);
      //         let bdIndex = const_var.b_d_g_b_O_cN.findIndex(data=>data.uniqueId==val.uniqueId);
      //         let nwIndex = const_var.newDoorsArray.findIndex(data=>data.uniqueId==val.uniqueId);
      //         const_var.b_d_g_b_O_cN.splice(i,1);
      //         const_var.newDoorsArray.splice(i,1);
      //         console.log(bdIndex,"bdIndex",nwIndex,const_var.b_d_g_b_O_cN,const_var.newDoorsArray);
      //     }
      // })

    };

    for (var _i = 0, _wallname = wallname; _i < _wallname.length; _i++) {
      var i;
      var ii;

      _loop();
    } //const_var.b_d_g_b_O_cN = [];


    cuBuilding.cP();
    _reducer.const_var.showComponentEditBox = false;
  }
};

exports.removeWallSpecificComponent = removeWallSpecificComponent;

var aDw = function aDw(a, b) {
  return regeneratorRuntime.async(function aDw$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.aDw = aDw;

var cDW = function cDW(a, b, c) {
  a = a || "";
  b = b || 0;
  c = c || false;
  _reducer.const_var.calCulationVal = 0;
  _reducer.const_var.calCulationValIndex = 0;
  var d = new THREE.Vector3();

  _reducer.const_var.scene.getObjectByName("UserCamera").getWorldDirection(d);

  var e = Math.atan2(d.x, d.z);

  var f = _reducer.const_var.scene.getObjectByName("UserCamera").position;

  var g = 1;
  var h = 0;
  var i = 0;
  var j = 0;
  var k = 0;
  if (f.x < _reducer.params.p_w / 2 && f.x > _reducer.params.p_w / -2 && f.y < _reducer.params.p_h / 2 && f.y > 0 && f.z < _reducer.params.p_d / 2 && f.z > _reducer.params.p_d / -2) g = -1;
  var l = 0;
  var m = 0;
  var n = 0;
  var o = 0;
  _reducer.params.p_u_t = parseInt(_reducer.params.p_u_t);
  _reducer.const_var.place_d = false;
  _reducer.const_var.chk_place = true;
  if (_reducer.params.b_h_t1) n = _reducer.params.b_h_t1Depth;
  if (_reducer.params.b_h_t3) o = _reducer.params.b_h_t3Depth;
  if (_reducer.params.b_h_t2 || _reducer.params.b_h_t5) l = _reducer.params.p_b_c_b_l_f == "Close" || _reducer.params.p_b_c_b_l == "Close" || _reducer.params.add_storage_check == true || a.indexOf("Frameout") != -1 ? _reducer.params.lean_p_w : 0;
  if (_reducer.params.b_h_t4 || _reducer.params.b_h_t6) m = _reducer.params.p_b_c_b_r_f == "Close" || _reducer.params.p_b_c_b_r == "Close" || _reducer.params.add_storage_check_right == true || a.indexOf("Frameout") != -1 ? _reducer.params.leanR_p_w : 0;
  if (Math.abs(e * g) < Math.PI / 4 || Math.abs(e * g) > 3 * Math.PI / 4) {
    if (Math.abs(e) > Math.PI / 2) {
      _reducer.const_var.main_posGet = "front";
      j = (_reducer.params.p_d / 2 + n) * g + g * g;
      k = 0.5 * Math.PI * Math.abs(g - 1);
    } else {
      _reducer.const_var.main_posGet = "back";
      j = (_reducer.params.p_d / -2 - o) * g - g * g;
      k = 0.5 * Math.PI * (g + 1);
    }
  } else if (f.x > 0) {
    _reducer.const_var.main_posGet = "right";
    h = (_reducer.params.p_w / 2 + m) * g + g * g;
    k = Math.PI / 2 * g;
  } else {
    _reducer.const_var.main_posGet = "left";
    h = (_reducer.params.p_w / -2 - l) * g - g * g;
    k = Math.PI / -2 * g;
  }

  var p = _reducer.const_var.scene.getObjectByName(a).clone();

  p.Basename = _reducer.const_var.scene.getObjectByName(a).Basename;

  if ("Trim" != p.name.substring(0, 4)) {
    if (_reducer.const_var.scene.getObjectByName(a).material) p.material = _reducer.const_var.scene.getObjectByName(a).material.clone();
    _reducer.params.trimkit = false;
  } else {
    _reducer.params.trimkit = true;

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

  if (_reducer.params.p_b_t != "2" && (_reducer.params.p_a_g_r_u_d.indexOf("_Frameout") > 0 || _reducer.params.p_d_c.indexOf("_Frameout") > 0 || _reducer.params.p_w_cc.indexOf("_Frameout") > 0)) {
    if (p.name.substring(0, 4) != "Trim") {
      for (var i = 0; i <= p.material.materials.length - 1; i++) {
        if (p.material.materials[i].name == "RollUpDoor" || p.material.materials[i].name == "Door" || p.material.materials[i].name == "Glass") {
          p.material.materials[i].transparent = true;
          p.material.materials[i].opacity = 0.01;
          p.material.materials[i].side = THREE.DoubleSide;
          p.material.materials[i].alphaTest = false;
          p.material.materials[i].clearAlpha = 1;
        }
      }

      _reducer.const_var.walls.push(p);
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

  _reducer.const_var.main_posGet = _reducer.params.DoorLocOnEdit != "" && _reducer.params.DoorLocOnEdit != undefined ? _reducer.params.DoorLocOnEdit : _reducer.const_var.main_posGet;
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
  p.uniqueId = _reducer.const_var.sum;
  p.pos = _reducer.const_var.main_posGet;
  var barnPos = "";

  if (_reducer.params.UpdatedDoorPosOnEdit != "" && _reducer.params.UpdatedDoorPosOnEdit != undefined) {
    p.BarnPos = _reducer.params.UpdatedDoorPosOnEdit;
  } else {
    if ((_reducer.params.p_b_c_b_l == "Close" || _reducer.params.add_storage_check == true || p.name.indexOf("Frameout") != -1) && p.BarnPos != "left" && p.pos == "left" && _reducer.const_var.scene.getObjectByName("b_h_t5").visible == true) {
      //console.log("params.UpdatedDoorPosOnEdit");
      barnPos = "BarnLeft";
    } else if ((_reducer.params.p_b_c_b_r == "Close" || _reducer.params.add_storage_check_right == true || p.name.indexOf("Frameout") != -1) && p.BarnPos != "right" && p.pos == "right" && _reducer.const_var.scene.getObjectByName("b_h_t6").visible == true) {
      barnPos = "BarnRight";
    } else if (_reducer.params.centerstorage == true || _reducer.params.p_f_w != "Close" && _reducer.params.p_u_c == true) {
      barnPos = p.pos == "front" ? "FrontS" : p.pos;
    } else {
      barnPos = p.pos;
    }

    p.BarnPos = barnPos;

    if (_reducer.params.b_l_t_s == "FrontL" || _reducer.params.b_l_t_s == "FrontR" || _reducer.params.b_l_t_s == "BackL" || _reducer.params.b_l_t_s == "BackR" || _reducer.params.b_l_t_s == "LeftS" || _reducer.params.b_l_t_s == "RightS") {
      p.BarnPos = _reducer.params.b_l_t_s;
    }
  } //console.log(p.BarnPos,"params.UpdatedDoorPosOnEdit");


  var wallSide = p.BarnPos.toLowerCase();

  if (wallSide == "barnleft") {
    wallSide = "ltleft";
  } else if (wallSide == "barnright") {
    wallSide = "ltright";
  }

  if ("wind" != p.name.substring(0, 4)) {
    var doorSpace = true;
    var remainingSpace = 0;

    if (_reducer.const_var.ManageDoorArrar[wallSide].length > 0) {//ArrowNDistance.checkNewDoorPlace(wallSide.toLowerCase());
    } else {
      _reducer.const_var.ManageDoorPlaces[wallSide.toLowerCase()][p.Basename] = true;
    }

    if (_reducer.const_var.ManageDoorArrar[wallSide] != undefined && _reducer.const_var.ManageDoorArrar[wallSide].length > 0) {
      //ArrowNDistance.checkNewDoorPlace(wallSide.toLowerCase());
      remainingSpace = Math.abs(Math.max.apply(Math, _reducer.const_var.ManageSpaces[wallSide]));

      if (remainingSpace - 2 < p.actual_val.split("X")[0]) {
        doorSpace = false;
      }

      if (_reducer.const_var.ManageDoorPlaces[wallSide.toLowerCase()][p.Basename] == false || doorSpace == false) { }
    }
  }

  if (_reducer.params.p_b_t == "2" || _reducer.params.add_left_lean == true || _reducer.params.add_right_lean == true) {
    var l_t_h = 0;
    var actual_height = _reducer.params.p_h;
    if (wallSide === "ltleft") actual_height = _reducer.params.lean_p_h; else if (wallSide === "ltright") actual_height = _reducer.params.leanR_p_h;

    if (_reducer.params.p_r_s == "4" || _reducer.params.p_r_s == "5") {
      l_t_h = actual_height - 5;
    } else {
      l_t_h = actual_height;
    }

    if (p.actual_val.split("X")[1] > l_t_h && (wallSide == "frontl" || wallSide == "backl" || wallSide == "frontr" || wallSide == "backr" || wallSide == "ltleft" || wallSide == "ltright")) {
      _reducer.const_var.isShowAlert = true;
      _reducer.const_var.alertUsedFor = "overHeightLeanTo";
      RmComtFmLtgDr(_reducer.const_var.doorUniqueId, _reducer.const_var.doorUniqueId, "", ""); //bootbox.hideAll();

      _reducer.const_var.c_k_p_d = false; //bBaM(" No more doors can be added with selected dimensions");

      return false;
    }
  }

  if (p.actual_val.split("X")[1] == _reducer.params.p_h && (_reducer.const_var.main_posGet == "left" || _reducer.const_var.main_posGet == "right")) {
    _reducer.const_var.isShowAlert = true;
    _reducer.const_var.alertUsedFor = "noSpaceAvailableOnWall";
    _reducer.const_var.c_k_p_d = false;
    return false;
  }

  _reducer.const_var.newCustomSizesArray = {
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
    width: 8
  };

  if (_reducer.params.p_a_g_r_u_d !== "Select" && _reducer.const_var.c_k_p_d == true) {
    if (_reducer.params.p_a_g_r_u_d_c_s != "Select" && _reducer.params.p_a_g_r_u_d_c_s1 != "Select") {
      _reducer.params.doorType = "CustomFrameout";
    }

    var entry_price = 0;
    var garageColorCalculation = 0;

    if (_reducer.const_var.WallClass[p.pos] == "fend" || _reducer.const_var.WallClass[p.pos] == "bend") {
      entry_price = _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["EndPrice"][_reducer.params.p_a_g_r_u_d];
      garageColorCalculation = _reducer.const_var.garageDoorColor[_reducer.params.g_d_c_id].percentage_of_cost > 0 ? entry_price * _reducer.const_var.garageDoorColor[_reducer.params.g_d_c_id].percentage_of_cost / 100 : _reducer.const_var.garageDoorColor[_reducer.params.g_d_c_id].cost;
    } else {
      entry_price = _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["SidePrice"][_reducer.params.p_a_g_r_u_d];
      garageColorCalculation = _reducer.const_var.garageDoorColor[_reducer.params.g_d_c_id].percentage_of_cost > 0 ? entry_price * _reducer.const_var.garageDoorColor[_reducer.params.g_d_c_id].percentage_of_cost / 100 : _reducer.const_var.garageDoorColor[_reducer.params.g_d_c_id].cost;
    }

    _reducer.const_var.d_w_a_r.push({
      name: _reducer.params.p_a_g_r_u_d.replace("X", ""),
      orignalname: _reducer.params.p_a_g_r_u_d_c_s != "Select" && _reducer.params.p_a_g_r_u_d_c_s1 != "Select" ? _reducer.params.p_a_g_r_u_d.replace("_Frameout", "") : _reducer.params.p_a_g_r_u_d,
      price: _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["EndPrice"][_reducer.params.p_a_g_r_u_d],
      SidePrice: _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["SidePrice"][_reducer.params.p_a_g_r_u_d],
      type: "garage",
      label_text: _reducer.params.doorType == "CustomFrameout" ? "Custom Frameout" : "Garage Door",
      display_text: "Door",
      uniqueId: undefined,
      check: false,
      trimkit: _reducer.params.trimkit,
      trimkitPrice: _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["TrimKit"][_reducer.params.p_a_g_r_u_d] != undefined ? _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["TrimKit"][_reducer.params.p_a_g_r_u_d] : 0,
      chain_hoist: _reducer.params.chain_hoist,
      chain_hoist_price: _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Chain_Hoist"] != undefined && _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Chain_Hoist"][_reducer.params.p_a_g_r_u_d] != undefined ? _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Chain_Hoist"][_reducer.params.p_a_g_r_u_d] : 0,
      certified_door: _reducer.params.certified_door,
      certified_door_price: _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Certified_Cost"] != undefined && _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Certified_Cost"][_reducer.params.p_a_g_r_u_d] != undefined ? _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Certified_Cost"][_reducer.params.p_a_g_r_u_d] : 0,
      automatic_openers: _reducer.params.automatic_openers,
      automatic_openers_price: _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Automatic_Openers_Cost"] != undefined && _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Automatic_Openers_Cost"][_reducer.params.p_a_g_r_u_d] != undefined ? _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Automatic_Openers_Cost"][_reducer.params.p_a_g_r_u_d] : 0,
      header_seal: _reducer.params.header_seal,
      header_seal_price: _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Header_Seal"] != undefined && _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Header_Seal"][_reducer.params.p_a_g_r_u_d] != undefined ? _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Header_Seal"][_reducer.params.p_a_g_r_u_d] : 0,
      doorType: _reducer.params.doorType,
      garageDoor_color_Obj: _reducer.const_var.garageDoorColor[_reducer.params.g_d_c_id],
      garageDoor_color_price: garageColorCalculation,
      BarnPos: p.BarnPos,
      pos: undefined
    });

    kk++;
    var fname = _reducer.params.p_a_g_r_u_d.indexOf("_Frameout") > 0 ? "garage_door_frameout" : "garage_door";

    if (_reducer.params.f_r_m_o_t != "Select" && _reducer.params.f_r_m_o_t1 != "Select") {
      var entry_dimension_height = _reducer.params.f_r_m_o_t1.split("_Frameout")[0];

      var entry_dimension_width = _reducer.params.f_r_m_o_t;

      if (_reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Object"][_reducer.params.p_a_g_r_u_d] != undefined) {
        _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Object"][_reducer.params.p_a_g_r_u_d].name = "Custom";
      }
    } else if (_reducer.params.p_a_g_r_u_d_c_s != "Select" && _reducer.params.p_a_g_r_u_d_c_s1 != "Select") {
      _reducer.params.doorType = "CustomFrameout";
      var entry_dimension_height = _reducer.params.p_a_g_r_u_d_c_s1;
      var entry_dimension_width = _reducer.params.p_a_g_r_u_d_c_s;
      _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Object"][_reducer.params.p_a_g_r_u_d].name = "Custom";
    } else {
      var entry_dimension_height = 0;
      var entry_dimension_width = 0;
    }

    garageColorCalculation = garageColorCalculation == undefined ? 0 : garageColorCalculation;

    if (_reducer.params.certified_door == true) {
      entry_price = _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Certified_Cost"] != undefined && _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Certified_Cost"][_reducer.params.p_a_g_r_u_d] != undefined ? parseInt(entry_price) + parseInt(_reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Certified_Cost"][_reducer.params.p_a_g_r_u_d]) : entry_price + 0;
    }

    if (_reducer.const_var.WallClass[p.pos] == "fend" && _reducer.params.p_u_c == true) {
      var newPosForCom = "ufend";
    } else {
      var newPosForCom = _reducer.const_var.WallClass[p.pos];
    }

    var enty_pos = "";
    var enty_rot = "";

    if (_reducer.params.DoorPosOnEdit != "") {
      enty_pos = _reducer.params.DoorPosOnEdit;
    } else {
      enty_pos = p.position;
    }

    if (_reducer.params.DoorRotOnEdit != null) {
      enty_rot = _reducer.params.DoorRotOnEdit;
    } else {
      enty_rot = k;
    } //console.log(enty_rot,"enty_rot",params.DoorRotOnEdit,k,"params.DoorRotOnEdit")


    if (_reducer.params.p_a_g_r_u_d_c_s != "Select" && _reducer.params.p_a_g_r_u_d_c_s1 != "Select") {
      _reducer.params.doorType = "CustomFrameout";
      fname = "garage_door";
      var e_p = _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["TrimKit"][_reducer.params.p_a_g_r_u_d_c_s + "X" + _reducer.params.p_a_g_r_u_d_c_s1 + "_Frameout"];
      var h_p = _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Header_Seal"] != undefined ? _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Header_Seal"][_reducer.params.p_a_g_r_u_d_c_s + "X" + _reducer.params.p_a_g_r_u_d_c_s1 + "_Frameout"] : "";
      var c_p = _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Chain_Hoist"] != undefined ? _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Chain_Hoist"][_reducer.params.p_a_g_r_u_d_c_s + "X" + _reducer.params.p_a_g_r_u_d_c_s1 + "_Frameout"] : "";
      var d_p = _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Automatic_Openers_Cost"] != undefined ? _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Automatic_Openers_Cost"][_reducer.params.p_a_g_r_u_d_c_s + "X" + _reducer.params.p_a_g_r_u_d_c_s1 + "_Frameout"] : "";
      _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Object"][_reducer.params.p_a_g_r_u_d_c_s + "X" + _reducer.params.p_a_g_r_u_d_c_s1 + "_Frameout"]["45_degree_angle"] = e_p;

      _reducer.const_var.entry_points.push({
        entry_type: fname,
        entry_doorNewType: _reducer.const_var.editComponentDimension,
        entry_location: newPosForCom,
        entry_dimension_height: entry_dimension_height,
        entry_trim_kit_price: e_p,
        entry_dimension_width: entry_dimension_width,
        uniqueId: p.uniqueId,
        entry_price: entry_price,
        entry_size: _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Object"][_reducer.params.p_a_g_r_u_d],
        name: _reducer.params.p_a_g_r_u_d.replace("_Frameout", ""),
        entry_note: _reducer.params.extra_notes,
        garage_door_color: _reducer.params.g_d_c,
        entry_quantity: kk,
        entry_trim_kit: _reducer.params.trimkit,
        entry_header_seal: _reducer.params.header_seal,
        entry_certified: _reducer.params.certified_door,
        entry_chain_hoist: _reducer.params.chain_hoist,
        entry_is_header_seal: _reducer.params.header_seal,
        entry_is_certified: _reducer.params.certified_door,
        entry_is_chain_hoist: _reducer.params.chain_hoist,
        entry_position: enty_pos,
        entry_rotation: enty_rot,
        entry_chain_hoist_price: c_p,
        entry_header_seal_price: h_p,
        extra_component_key: p.BarnPos,
        entry_component_location: _reducer.const_var.entry_component_location[p.BarnPos],
        entry_automatic_openers: _reducer.params.automatic_openers,
        entry_is_automatic_openers: _reducer.params.automatic_openers,
        entry_automatic_openers_price: d_p,
        entry_garageDoor_color_Obj: _reducer.const_var.garageDoorColor[_reducer.params.g_d_c_id],
        entry_garageDoor_color_price: garageColorCalculation
      });
    } else if (_reducer.const_var.editComponentDimension == "CustomGarageSize") {
      if (entry_price == undefined) {
        entry_price = 0;
      }

      if (fname == "garage_door_frameout") {
        _reducer.const_var.newCustomSizesArray.name = "Custom";
      } else {
        _reducer.const_var.newCustomSizesArray.name = _reducer.params.p_a_g_r_u_d;
      } //const_var.customEntrySize.name = params.p_a_g_r_u_d;


      _reducer.const_var.newCustomSizesArray.width = parseInt(_reducer.params.p_a_g_r_u_d.split("X")[0]);
      _reducer.const_var.newCustomSizesArray.height = parseInt(_reducer.params.p_a_g_r_u_d.split("X")[1]);

      _reducer.const_var.entry_points.push({
        entry_type: fname,
        entry_doorNewType: _reducer.const_var.editComponentDimension,
        entry_location: newPosForCom,
        entry_dimension_height: entry_dimension_height,
        entry_trim_kit_price: _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["TrimKit"][_reducer.params.p_a_g_r_u_d] == undefined ? 0 : _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["TrimKit"][_reducer.params.p_a_g_r_u_d],
        entry_dimension_width: entry_dimension_width,
        uniqueId: p.uniqueId,
        entry_price: entry_price,
        entry_size: _reducer.const_var.newCustomSizesArray,
        name: _reducer.params.p_a_g_r_u_d,
        entry_note: _reducer.params.extra_notes,
        garage_door_color: _reducer.params.g_d_c,
        entry_quantity: kk,
        entry_trim_kit: _reducer.params.trimkit,
        entry_header_seal: _reducer.params.header_seal,
        entry_certified: _reducer.params.certified_door,
        entry_chain_hoist: _reducer.params.chain_hoist,
        entry_is_header_seal: _reducer.params.header_seal,
        entry_is_certified: _reducer.params.certified_door,
        entry_is_chain_hoist: _reducer.params.chain_hoist,
        entry_position: enty_pos,
        entry_rotation: enty_rot,
        entry_chain_hoist_price: _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Chain_Hoist"] != undefined && _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Chain_Hoist"][_reducer.params.p_a_g_r_u_d] != undefined ? _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Chain_Hoist"][_reducer.params.p_a_g_r_u_d] : 0,
        entry_automatic_openers_price: _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Automatic_Openers_Cost"] != undefined && _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Automatic_Openers_Cost"][_reducer.params.p_a_g_r_u_d] != undefined ? _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Automatic_Openers_Cost"][_reducer.params.p_a_g_r_u_d] : 0,
        entry_header_seal_price: _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Header_Seal"] != undefined && _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Header_Seal"][_reducer.params.p_a_g_r_u_d] != undefined ? _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Header_Seal"][_reducer.params.p_a_g_r_u_d] : 0,
        extra_component_key: p.BarnPos,
        entry_component_location: _reducer.const_var.entry_component_location[p.BarnPos],
        entry_automatic_openers: _reducer.params.automatic_openers,
        entry_is_automatic_openers: _reducer.params.automatic_openers,
        entry_garageDoor_color_Obj: _reducer.const_var.garageDoorColor[_reducer.params.g_d_c_id],
        entry_garageDoor_color_price: garageColorCalculation
      });
    } else {
      _reducer.const_var.entry_points.push({
        entry_type: fname,
        entry_doorNewType: _reducer.const_var.editComponentDimension,
        entry_location: newPosForCom,
        entry_dimension_height: entry_dimension_height,
        entry_trim_kit_price: _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["TrimKit"][_reducer.params.p_a_g_r_u_d],
        entry_dimension_width: entry_dimension_width,
        uniqueId: p.uniqueId,
        entry_price: entry_price,
        entry_size: _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Object"][_reducer.params.p_a_g_r_u_d],
        name: _reducer.params.p_a_g_r_u_d,
        entry_note: _reducer.params.extra_notes,
        garage_door_color: _reducer.params.g_d_c,
        entry_quantity: kk,
        entry_trim_kit: _reducer.params.trimkit,
        entry_header_seal: _reducer.params.header_seal,
        entry_certified: _reducer.params.certified_door,
        entry_chain_hoist: _reducer.params.chain_hoist,
        entry_is_header_seal: _reducer.params.header_seal,
        entry_is_certified: _reducer.params.certified_door,
        entry_is_chain_hoist: _reducer.params.chain_hoist,
        entry_position: enty_pos,
        entry_rotation: enty_rot,
        entry_chain_hoist_price: _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Chain_Hoist"] != undefined ? _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Chain_Hoist"][_reducer.params.p_a_g_r_u_d] : 0,
        entry_automatic_openers_price: _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Automatic_Openers_Cost"] != undefined && _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Automatic_Openers_Cost"][_reducer.params.p_a_g_r_u_d] != undefined ? _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Automatic_Openers_Cost"][_reducer.params.p_a_g_r_u_d] : 0,
        entry_header_seal_price: _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Header_Seal"] != undefined ? _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Header_Seal"][_reducer.params.p_a_g_r_u_d] : "",
        extra_component_key: p.BarnPos,
        entry_component_location: _reducer.const_var.entry_component_location[p.BarnPos],
        entry_automatic_openers: _reducer.params.automatic_openers,
        entry_is_automatic_openers: _reducer.params.automatic_openers,
        entry_garageDoor_color_Obj: _reducer.const_var.garageDoorColor[_reducer.params.g_d_c_id],
        entry_garageDoor_color_price: garageColorCalculation
      });
    }

    p.commonDoorType = "garage";

    if (_reducer.const_var.editComponentDimension != "CustomGarageSize") {
      p.exactDoorDimension = _reducer.params.p_a_g_r_u_d_c_s != "Select" && _reducer.params.p_a_g_r_u_d_c_s1 != "Select" ? _reducer.params.p_a_g_r_u_d.replace("_Frameout", "") : _reducer.params.p_a_g_r_u_d;
    } else {
      p.exactDoorDimension = _reducer.const_var.editComponentDimension;
      p.exactDoorCustomDimension = _reducer.params.p_a_g_r_u_d;
    }

    p.doorProperty = {
      trimkit: _reducer.params.trimkit,
      chain_hoist: _reducer.params.chain_hoist,
      header_seal: _reducer.params.header_seal,
      certified_door: _reducer.params.certified_door,
      entry_note: _reducer.params.extra_notes,
      garage_door_color: _reducer.params.g_d_c,
      automatic_openers: _reducer.params.automatic_openers
    };

    _reducer.const_var.door_arry["garage"].push(_reducer.params.p_a_g_r_u_d); //console.log(const_var.entry_points,"const_var.entry_points")

  }

  if (_reducer.params.p_w_cc !== "Select" && _reducer.const_var.c_k_p_d == true) {
    _reducer.const_var.d_w_a_r.push({
      name: _reducer.params.p_w_cc.replace("X", ""),
      orignalname: _reducer.params.p_w_cc,
      price: _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["EndPrice"][_reducer.params.p_w_cc],
      SidePrice: _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["SidePrice"][_reducer.params.p_w_cc],
      type: "window",
      label_text: "Window",
      display_text: "Window",
      uniqueId: undefined,
      check: false,
      trimkit: false,
      trimkitPrice: null,
      doorType: _reducer.params.doorType,
      BarnPos: p.BarnPos,
      pos: undefined
    });

    kd++;
    var fname = _reducer.params.p_w_cc.indexOf("_Frameout") > 0 ? "window_frameout" : "window";

    if (_reducer.const_var.WallClass[p.pos] == "fend" || _reducer.const_var.WallClass[p.pos] == "bend") {
      var entry_price = _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["EndPrice"][_reducer.params.p_w_cc];
    } else {
      var entry_price = _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["SidePrice"][_reducer.params.p_w_cc];
    }

    if (_reducer.const_var.WallClass[p.pos] == "fend" && _reducer.params.p_u_c == true) {
      var newPosForCom = "ufend";
    } else {
      var newPosForCom = _reducer.const_var.WallClass[p.pos];
    }

    var _enty_pos = "";
    var _enty_rot = "";

    if (_reducer.params.DoorPosOnEdit != "") {
      _enty_pos = _reducer.params.DoorPosOnEdit;
    } else {
      _enty_pos = p.position;
    }

    if (_reducer.params.DoorRotOnEdit != null) {
      _enty_rot = _reducer.params.DoorRotOnEdit;
    } else {
      _enty_rot = k;
    }

    if (_reducer.const_var.editComponentDimension == "CustomGarageSize") {
      if (entry_price == undefined) {
        entry_price = 0;
      }

      _reducer.const_var.newCustomSizesArray.name = _reducer.params.p_w_cc;
      _reducer.const_var.newCustomSizesArray.width = _reducer.params.p_w_cc.split("X")[0];
      _reducer.const_var.newCustomSizesArray.height = _reducer.params.p_w_cc.split("X")[1];

      _reducer.const_var.entry_points.push({
        entry_type: fname,
        entry_doorNewType: _reducer.const_var.editComponentDimension,
        entry_location: newPosForCom,
        uniqueId: p.uniqueId,
        entry_price: entry_price,
        entry_trim_kit_price: "",
        entry_size: _reducer.const_var.newCustomSizesArray,
        name: _reducer.params.p_w_cc,
        entry_note: _reducer.params.extra_notes,
        garage_door_color: _reducer.params.g_d_c,
        entry_quantity: kd,
        entry_trim_kit: false,
        entry_certified: false,
        entry_automatic_openers: false,
        entry_chain_hoist: false,
        entry_position: _enty_pos,
        entry_rotation: _enty_rot,
        extra_component_key: p.BarnPos,
        entry_component_location: _reducer.const_var.entry_component_location[p.BarnPos]
      });
    } else {
      _reducer.const_var.entry_points.push({
        entry_type: fname,
        entry_doorNewType: _reducer.const_var.editComponentDimension,
        entry_location: newPosForCom,
        uniqueId: p.uniqueId,
        entry_price: entry_price,
        entry_trim_kit_price: "",
        entry_size: _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Object"][_reducer.params.p_w_cc],
        name: _reducer.params.p_w_cc,
        entry_note: _reducer.params.extra_notes,
        garage_door_color: _reducer.params.g_d_c,
        entry_quantity: kd,
        entry_trim_kit: false,
        entry_certified: false,
        entry_automatic_openers: false,
        entry_chain_hoist: false,
        entry_position: _enty_pos,
        entry_rotation: _enty_rot,
        extra_component_key: p.BarnPos,
        entry_component_location: _reducer.const_var.entry_component_location[p.BarnPos]
      });
    } //b_f_o_J["Window"] = const_var.d_w_a_r;


    p.commonDoorType = "window";

    if (_reducer.const_var.editComponentDimension != "CustomGarageSize") {
      p.exactDoorDimension = _reducer.params.p_w_cc;
    } else {
      p.exactDoorDimension = _reducer.const_var.editComponentDimension;
      p.exactDoorCustomDimension = _reducer.params.p_w_cc;
    } //p.exactDoorDimension = params.p_w_cc;


    _reducer.const_var.door_arry["window"].push(_reducer.params.p_w);
  }

  if (_reducer.params.p_d_c !== "Select" && _reducer.const_var.c_k_p_d == true) {
    _reducer.const_var.d_w_a_r.push({
      name: _reducer.params.p_d_c.replace("X", ""),
      orignalname: _reducer.params.p_d_c,
      price: _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["EndPrice"][_reducer.params.p_d_c],
      SidePrice: _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["SidePrice"][_reducer.params.p_d_c],
      type: "door",
      label_text: "Walk-in Door",
      display_text: "Walk-in",
      uniqueId: undefined,
      check: false,
      trimkit: false,
      trimkitPrice: null,
      doorType: _reducer.params.doorType,
      BarnPos: p.BarnPos,
      pos: undefined
    });

    kw++;
    var fname = _reducer.params.p_d_c.indexOf("_Frameout") > 0 ? "walkin_frameout" : "walkin";

    if (_reducer.const_var.WallClass[p.pos] == "fend" || _reducer.const_var.WallClass[p.pos] == "bend") {
      var entry_price = _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["EndPrice"][_reducer.params.p_d_c];
    } else {
      var entry_price = _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["SidePrice"][_reducer.params.p_d_c];
    }

    if (_reducer.const_var.WallClass[p.pos] == "fend" && _reducer.params.p_u_c == true) {
      var newPosForCom = "ufend";
    } else {
      var newPosForCom = _reducer.const_var.WallClass[p.pos];
    }

    var _enty_pos2 = "";
    var _enty_rot2 = "";

    if (_reducer.params.DoorPosOnEdit != "") {
      _enty_pos2 = _reducer.params.DoorPosOnEdit;
    } else {
      _enty_pos2 = p.position;
    }

    if (_reducer.params.DoorRotOnEdit != null) {
      _enty_rot2 = _reducer.params.DoorRotOnEdit;
    } else {
      _enty_rot2 = k;
    }

    if (_reducer.const_var.editComponentDimension == "CustomGarageSize") {
      if (entry_price == undefined) {
        entry_price = 0;
      }

      _reducer.const_var.newCustomSizesArray.name = _reducer.params.p_d_c;
      _reducer.const_var.newCustomSizesArray.width = _reducer.params.p_d_c.split("X")[0];
      _reducer.const_var.newCustomSizesArray.height = _reducer.params.p_d_c.split("X")[1];

      _reducer.const_var.entry_points.push({
        entry_type: fname,
        entry_doorNewType: _reducer.const_var.editComponentDimension,
        entry_location: newPosForCom,
        uniqueId: p.uniqueId,
        entry_price: entry_price,
        entry_trim_kit_price: "",
        entry_size: _reducer.const_var.newCustomSizesArray,
        name: _reducer.params.p_d_c,
        entry_note: _reducer.params.extra_notes,
        garage_door_color: _reducer.params.g_d_c,
        entry_quantity: kw,
        entry_trim_kit: false,
        entry_certified: false,
        entry_automatic_openers: false,
        entry_chain_hoist: false,
        entry_position: _enty_pos2,
        entry_rotation: _enty_rot2,
        extra_component_key: p.BarnPos,
        entry_component_location: _reducer.const_var.entry_component_location[p.BarnPos]
      });
    } else {
      _reducer.const_var.entry_points.push({
        entry_type: fname,
        entry_doorNewType: _reducer.const_var.editComponentDimension,
        entry_location: newPosForCom,
        uniqueId: p.uniqueId,
        entry_price: entry_price,
        entry_trim_kit_price: "",
        entry_size: _reducer.const_var.CustomDoorArr[_reducer.params.doorType]["Object"][_reducer.params.p_d_c],
        name: _reducer.params.p_d_c,
        entry_note: _reducer.params.extra_notes,
        garage_door_color: _reducer.params.g_d_c,
        entry_quantity: kw,
        entry_trim_kit: false,
        entry_certified: false,
        entry_automatic_openers: false,
        entry_chain_hoist: false,
        entry_position: _enty_pos2,
        entry_rotation: _enty_rot2,
        extra_component_key: p.BarnPos,
        entry_component_location: _reducer.const_var.entry_component_location[p.BarnPos]
      });
    }

    if (_reducer.const_var.editComponentDimension != "CustomGarageSize") {
      p.exactDoorDimension = _reducer.params.p_d_c;
    } else {
      p.exactDoorDimension = _reducer.const_var.editComponentDimension;
      p.exactDoorCustomDimension = _reducer.params.p_d_c;
    }

    p.commonDoorType = "door"; //b_f_o_J["door"] = const_var.d_w_a_r;

    _reducer.const_var.door_arry["door"].push(_reducer.params.p_d);
  }

  p.exactDoorName = _reducer.params.doorType;
  var constant_rollupX = 0.63; //add walins door

  if (p.splitName == "window") {
    p.scale.set(p.scale.x * (p.actual_val.split("X")[0] * 12 / 35), p.scale.y * (p.actual_val.split("X")[1] * 12 / 50), 0.7);
  }

  if (p.splitName == "walkDoorSolid") {
    p.scale.set(p.actual_val.split("X")[0] / 10 * 3, p.actual_val.split("X")[1] / 7, 0.7);
  }

  if (p.splitName == "garageRollUpDoor") {
    p.scale.set(p.actual_val.split("X")[0] / 10, p.actual_val.split("X")[1] / 10 - p.actual_val.split("X")[1] / 100, 0.7);
  }

  if (p.splitName == "Trimkit") { }

  var index = null;
  p.Checkcolor = false;
  p.faceIndex = _reducer.const_var.d_v_i;
  p.dragableObj = true;
  p.h_value = h;
  var disValTexture1 = _reducer.params.fourth_center_cost == true ? 0.5 : 1; //h, b, j

  var dpos = "";

  if (p.pos == "front" && p.BarnPos == "FrontS") {
    if (_reducer.params.p_u_t > parseFloat(_reducer.params.p_d / 2)) {
      dpos = parseFloat(parseInt(_reducer.params.p_u_t) - parseFloat(_reducer.const_var.b_M_g_V)) - parseFloat(_reducer.params.p_d / 2) + disValTexture1;
    } else {
      dpos = -(parseFloat(_reducer.params.p_d / 2) - parseFloat(parseInt(_reducer.params.p_u_t) + (0.8 - parseFloat(_reducer.const_var.b_M_g_V))));
    }
  } //        DoorPosOnEdit


  if (_reducer.const_var.main_posGet == "left") {
    c = [h + 1, b, j, 0];

    if (p.BarnPos == "BarnLeft") {
      if (_reducer.params.leantoAlignmentLeft == 1) {
        c = [h + 0.8, b, j, 0];
      }

      if (_reducer.params.leantoAlignmentLeft == 2) {
        c = [h + 0.8, b, _reducer.params.p_d / 2 / 2, 0];
      }

      if (_reducer.params.leantoAlignmentLeft == 3) {
        c = [h + 0.8, b, _reducer.params.p_d / -2 / 2, 0];
      }
    }
  } else if (_reducer.const_var.main_posGet == "right") {
    c = [h - 1, b, j, 0];

    if (p.BarnPos == "BarnRight") {
      if (_reducer.params.leantoAlignmentRight == 1) {
        c = [h - 0.8, b, j, 0];
      }

      if (_reducer.params.leantoAlignmentRight == 2) {
        c = [h - 0.8, b, _reducer.params.p_d / 2 / 2, 0];
      }

      if (_reducer.params.leantoAlignmentRight == 3) {
        c = [h - 0.8, b, _reducer.params.p_d / -2 / 2, 0];
      }
    }
  } else if (_reducer.const_var.main_posGet == "back") {
    c = [h, b, j + 1, 0];

    if (p.BarnPos == "BackL") {
      //c = [(params.p_w/-2) - 6,b,j+1,0];
      var zPosLine = 0;

      if (_reducer.params.leantoAlignmentLeft == 1) {
        zPosLine = j;
      }

      if (_reducer.params.leantoAlignmentLeft == 2) {
        zPosLine = _reducer.params.p_d / 2 - _reducer.params.lean_p_d; //(params.p_d - params.lean_p_d)/-2-0.2;
      }

      if (_reducer.params.leantoAlignmentLeft == 3) {
        zPosLine = _reducer.params.p_d / -2; //params.p_d/-2-0.2;
      }

      c = [_reducer.params.p_w / -2 - _reducer.params.lean_p_w / 2, b, zPosLine + 1, 0];
    }

    if (p.BarnPos == "BackR") {
      //c = [(params.p_w/2) + 6,b,j+1,0];
      var _zPosLine = 0;

      if (_reducer.params.leantoAlignmentRight == 1) {
        _zPosLine = j;
      }

      if (_reducer.params.leantoAlignmentRight == 2) {
        _zPosLine = _reducer.params.p_d / 2 - _reducer.params.leanR_p_d; //(params.p_d - params.lean_p_d)/-2-0.2;
      }

      if (_reducer.params.leantoAlignmentRight == 3) {
        _zPosLine = _reducer.params.p_d / -2;
      }

      c = [_reducer.params.p_w / 2 + _reducer.params.leanR_p_w / 2, b, _zPosLine + 1, 0];
    }
  } else {
    if (_reducer.params.p_u_c == true && p.BarnPos == "FrontS") {
      c = [h, b, dpos, 0];
    } else {
      c = [h, b, _reducer.params.p_d / 2, 0];
    }

    if (p.BarnPos == "FrontL") {
      var _zPosLine2 = 0;

      if (_reducer.params.leantoAlignmentLeft == 2) {
        _zPosLine2 = _reducer.params.p_d / 2;
      }

      if (_reducer.params.leantoAlignmentLeft == 3) {
        _zPosLine2 = _reducer.params.p_d / -2 + _reducer.params.lean_p_d;
      }

      if (_reducer.params.leantoAlignmentLeft == 1) {
        _zPosLine2 = _reducer.params.lean_p_d / 2;
      }

      c = [_reducer.params.p_w / -2 - _reducer.params.lean_p_w / 2, b, _zPosLine2, 0];
    }

    if (p.BarnPos == "LeftS") {
      var disValTexture1 = 0.8;
      var spos = "";

      if (_reducer.params.leantoAlignmentLeft == 1) {
        if (parseFloat(_reducer.params.add_storage) > parseFloat(_reducer.params.lean_p_d / 2)) {
          spos = parseFloat(parseFloat(_reducer.params.add_storage) - parseFloat(_reducer.params.lean_p_d / 2)) + disValTexture1;
        } else {
          spos = -parseFloat(parseFloat(_reducer.params.lean_p_d / 2) - parseFloat(_reducer.params.add_storage)) + disValTexture1;
        }
      }

      if (_reducer.params.leantoAlignmentLeft == 2) {
        spos = parseFloat(parseFloat(_reducer.params.p_d / 2) - parseFloat(_reducer.params.lean_p_d)) + parseFloat(_reducer.params.add_storage) + disValTexture1; // + disValTexture1;
      }

      if (_reducer.params.leantoAlignmentLeft == 3) {
        spos = -parseFloat(parseFloat(_reducer.params.p_d / 2) - parseFloat(_reducer.params.add_storage)) + disValTexture1;
      }

      c = [_reducer.params.p_w / -2 - _reducer.params.lean_p_w / 2, b, spos, 0];
    }

    if (p.BarnPos == "FrontR") {
      var _zPosLine3 = 0;

      if (_reducer.params.leantoAlignmentRight == 2) {
        _zPosLine3 = _reducer.params.p_d / 2;
      }

      if (_reducer.params.leantoAlignmentRight == 3) {
        _zPosLine3 = _reducer.params.p_d / -2 + _reducer.params.leanR_p_d;
      }

      if (_reducer.params.leantoAlignmentRight == 1) {
        _zPosLine3 = _reducer.params.leanR_p_d / 2;
      }

      c = [_reducer.params.p_w / 2 + _reducer.params.leanR_p_w / 2, b, _zPosLine3, 0];
    }

    if (p.BarnPos == "RightS") {
      var disValTexture1 = 0.8;
      var spos = "";

      if (_reducer.params.leantoAlignmentRight == 1) {
        if (parseFloat(_reducer.params.add_storage_right) > parseFloat(_reducer.params.leanR_p_d / 2)) {
          spos = parseFloat(parseFloat(_reducer.params.add_storage_right) - parseFloat(_reducer.params.leanR_p_d / 2)) + disValTexture1;
        } else {
          spos = -parseFloat(parseFloat(_reducer.params.leanR_p_d / 2) - parseFloat(_reducer.params.add_storage_right)) + disValTexture1;
        }
      }

      if (_reducer.params.leantoAlignmentRight == 2) {
        spos = parseFloat(parseFloat(_reducer.params.p_d / 2) - parseFloat(_reducer.params.leanR_p_d)) + parseFloat(_reducer.params.add_storage_right) + disValTexture1; // + disValTexture1;
      }

      if (_reducer.params.leantoAlignmentRight == 3) {
        spos = -parseFloat(parseFloat(_reducer.params.p_d / 2) - parseFloat(_reducer.params.add_storage_right)) + disValTexture1;
      }

      c = [_reducer.params.p_w / 2 + _reducer.params.leanR_p_w / 2, b, spos, 0];
    }
  }

  c = _reducer.params.DoorPosOnEdit != "" && _reducer.params.DoorPosOnEdit != null ? [_reducer.params.DoorPosOnEdit.x, _reducer.params.DoorPosOnEdit.y, _reducer.params.DoorPosOnEdit.z, _reducer.params.DoorRotOnEdit] : c;

  if (_reducer.params.DoorRotOnEdit !== "") {
    k = _reducer.params.DoorRotOnEdit;
  }

  if (c) {
    //isCallingDoor = false;
    if (p.actual_val.split("X")[1] == _reducer.params.p_h && (_reducer.const_var.main_posGet == "back" || _reducer.const_var.main_posGet == "front")) {
      var frontDiv = "";
      var backDiv = "";
      var leftDiv = "";
      var rightDiv = "";
      var finalName = "";
      var finalType = "";
      var header_sealHtml,
        chain_hoistHtml = "";

      if (_reducer.const_var.main_posGet == "front") {
        _reducer.const_var.H_d_l_D_r_ar["front"].push(p.uniqueId);

        if (_reducer.const_var.H_d_l_D_r_ar["front"].length > 1) {
          _reducer.const_var.H_d_l_D_r_ar["front"].splice(_reducer.const_var.H_d_l_D_r_ar["front"].length - 1, 1);
        }

        for (var i = 0; i < _reducer.const_var.b_d_g_b_O_c.length; i++) {
          if ("b_B_g_B" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t1Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t2Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t5Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t6Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t3Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t4Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t7Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t8Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && false == _reducer.const_var.b_d_g_b_O_c[i].name.includes("-EDIT")) {
            if (_reducer.const_var.b_d_g_b_O_c[i].BarnPos == "front" && _reducer.const_var.b_d_g_b_O_c[i].pos == "front" && _reducer.const_var.b_d_g_b_O_c[i].uniqueId != p.uniqueId) {
              _reducer.const_var.b_d_g_b_O_c[i].visible = false;
              _reducer.params[_reducer.const_var.b_d_g_b_O_c[i].name.replace("-clone", "") + "Qty"]--;

              _reducer.const_var.scene.remove(_reducer.const_var.b_d_g_b_O_c[i]);
            }
          }
        }

        var i = _reducer.const_var.d_w_a_r.length;

        while (i--) {
          if (_reducer.const_var.d_w_a_r[i].uniqueId == undefined) {
            _reducer.const_var.d_w_a_r[i].uniqueId = p.uniqueId;
          }

          if (_reducer.const_var.d_w_a_r[i].pos == undefined) {
            _reducer.const_var.d_w_a_r[i].pos = p.pos;
          }

          if (_reducer.const_var.d_w_a_r[i].BarnPos == "front" && _reducer.const_var.d_w_a_r[i].pos == "front" && _reducer.const_var.d_w_a_r[i].uniqueId != p.uniqueId) {
            _reducer.const_var.d_w_a_r.splice(i, 1);
          }
        }

        var ii = _reducer.const_var.entry_points.length;

        while (ii--) {
          if (_reducer.const_var.entry_points[ii].extra_component_key == "front" && _reducer.const_var.entry_points[ii].uniqueId != p.uniqueId) {
            _reducer.const_var.entry_points.splice(ii, 1);
          }
        }

        var disValTexture = _reducer.params.fourth_center_cost == true ? 0.5 : 1;
        var dpos = "";

        if (p.pos == "front" && p.BarnPos == "fronts") {
          if (_reducer.params.p_u_t > parseFloat(_reducer.params.p_d / 2)) {
            dpos = parseFloat(parseInt(_reducer.params.p_u_t) - parseFloat(_reducer.const_var.b_M_g_V)) - parseFloat(_reducer.params.p_d / 2) + disValTexture1;
          } else {
            dpos = -(parseFloat(_reducer.params.p_d / 2) - parseFloat(parseInt(_reducer.params.p_u_t) + (0.8 - parseFloat(_reducer.const_var.b_M_g_V))));
          }
        }

        var vV = _reducer.params.p_u_c == true && p.BarnPos == "FrontS" ? [0, 0, dpos, 0] : [0, 0, _reducer.params.p_d / 2, 0];

        if (p.BarnPos == "FrontL") {
          var vV = [0, 0, _reducer.params.lean_p_d / 2, 0];
        }

        if (p.BarnPos == "FrontR") {
          var vV = [0, 0, _reducer.params.leanR_p_d / 2, 0];
        }
      } else {
        _reducer.const_var.H_d_l_D_r_ar["back"].push(p.uniqueId);

        if (_reducer.const_var.H_d_l_D_r_ar["back"].length > 1) {
          _reducer.const_var.H_d_l_D_r_ar["back"].splice(_reducer.const_var.H_d_l_D_r_ar["back"].length - 1, 1);
        }

        for (var i = 0; i < _reducer.const_var.b_d_g_b_O_c.length; i++) {
          if ("b_B_g_B" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t1Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t2Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t5Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t6Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t3Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t4Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t7Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t8Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && false == _reducer.const_var.b_d_g_b_O_c[i].name.includes("-EDIT")) {
            if (_reducer.const_var.b_d_g_b_O_c[i].BarnPos == "back" && _reducer.const_var.b_d_g_b_O_c[i].pos == "back" && _reducer.const_var.b_d_g_b_O_c[i].uniqueId != p.uniqueId) {
              _reducer.const_var.b_d_g_b_O_c[i].visible = false;
              _reducer.params[_reducer.const_var.b_d_g_b_O_c[i].name.replace("-clone", "") + "Qty"]--;

              _reducer.const_var.scene.remove(_reducer.const_var.b_d_g_b_O_c[i]);
            }
          }
        }

        var i = _reducer.const_var.d_w_a_r.length;

        while (i--) {
          if (_reducer.const_var.d_w_a_r[i].uniqueId == undefined) {
            _reducer.const_var.d_w_a_r[i].uniqueId = p.uniqueId;
          }

          if (_reducer.const_var.d_w_a_r[i].pos == undefined) {
            _reducer.const_var.d_w_a_r[i].pos = p.pos;
          }

          if (_reducer.const_var.d_w_a_r[i].BarnPos == "back" && _reducer.const_var.d_w_a_r[i].pos == "back" && _reducer.const_var.d_w_a_r[i].uniqueId != p.uniqueId) {
            _reducer.const_var.d_w_a_r.splice(i, 1);
          }
        }

        var ii = _reducer.const_var.entry_points.length;

        while (ii--) {
          if (_reducer.const_var.entry_points[ii].extra_component_key == "back" && _reducer.const_var.entry_points[ii].uniqueId != p.uniqueId) {
            _reducer.const_var.entry_points.splice(ii, 1);
          }
        }

        var vV = [0, 0, -_reducer.params.p_d / 2, Math.PI / 1];
      }

      for (var i = 0; i <= _reducer.const_var.d_w_a_r.length - 1; i++) {
        if (_reducer.const_var.main_posGet == "front" || _reducer.const_var.main_posGet == "back") {
          _reducer.const_var.d_w_a_r[i].Finalprice = _reducer.const_var.d_w_a_r[i].price;
        }

        if (_reducer.const_var.d_w_a_r[i].uniqueId == undefined) {
          _reducer.const_var.d_w_a_r[i].uniqueId = p.uniqueId;
        }

        if (_reducer.const_var.d_w_a_r[i].pos == undefined) {
          _reducer.const_var.d_w_a_r[i].pos = p.pos;
        }

        if (_reducer.const_var.d_w_a_r[i].orignalname.indexOf("_Frameout") >= 0) {
          var SplitVar = _reducer.const_var.d_w_a_r[i].orignalname.split("_Frameout");

          finalName = SplitVar[0];
          finalType = _reducer.const_var.d_w_a_r[i].display_text + " Frameout";
        } else {
          finalName = _reducer.const_var.d_w_a_r[i].orignalname;
          finalType = _reducer.const_var.d_w_a_r[i].display_text;
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
          if (c[0] > 0 && (_reducer.params.p_b_c_b_r == "Close" || _reducer.params.add_storage_check == true)) {
            c[0] = c[0] + 0.3;
          }

          if (c[0] < 0 && (_reducer.params.p_b_c_b_l == "Close" || _reducer.params.add_storage_check_right == true)) {
            c[0] = c[0] - 0.3;
          }

          p.position.set(parseFloat(c[0]), p.actual_val.split("X")[1] / 2 - 0.25, parseFloat(c[2]) + 0.1);
        }
      }

      p.rotation.set(0, parseFloat(vV[3]), 0);
      _reducer.const_var.i_c_l_g_n = false;
    } else {
      _reducer.const_var.i_c_l_g_n = true;
      var frontDiv = "";
      var backDiv = "";
      var leftDiv = "";
      var rightDiv = "";
      var finalName = "";
      var finalType = "";
      var header_sealHtml,
        chain_hoistHtml = "";

      for (var i = 0; i <= _reducer.const_var.d_w_a_r.length - 1; i++) {
        if (_reducer.const_var.d_w_a_r[i].uniqueId == undefined) {
          _reducer.const_var.d_w_a_r[i].uniqueId = p.uniqueId;
        }

        if (_reducer.const_var.d_w_a_r[i].pos == undefined) {
          _reducer.const_var.d_w_a_r[i].pos = p.pos;
        }

        if (_reducer.const_var.d_w_a_r[i].orignalname.indexOf("_Frameout") >= 0) {
          var SplitVar = _reducer.const_var.d_w_a_r[i].orignalname.split("_Frameout");

          finalName = SplitVar[0];
          finalType = _reducer.const_var.d_w_a_r[i].display_text + " Frameout";
        } else {
          finalName = _reducer.const_var.d_w_a_r[i].orignalname;
          finalType = _reducer.const_var.d_w_a_r[i].display_text;
        }

        if ("Trim" != p.name.substring(0, 4)) {
          p.position.set(parseFloat(c[0]), parseFloat(c[1]), parseFloat(c[2]));
        } else {
          p.scale.z = p.scale.z + 0.35; //+0.4;

          if (p.pos == "back") {
            p.position.set(parseFloat(c[0]), p.actual_val.split("X")[1] / 2 - 0.25, parseFloat(c[2]) - 0.1);
          } else {
            if (c[0] > 0 && (_reducer.params.p_b_c_b_r == "Close" || _reducer.params.add_storage_check == true)) {
              c[0] = c[0] + 0.3;
            }

            if (c[0] < 0 && (_reducer.params.p_b_c_b_l == "Close" || _reducer.params.add_storage_check_right == true)) {
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

  var jsonDataArrow = {
    "6": .1,
    "7": 1,
    "8": 1.5,
    "9": 2.5,
    "10": 3.5,
    "11": 4.5,
    "12": 5.5,
    "13": 6.5,
    "14": 7.5,
    "15": 8.5,
    "16": 9.5,
    "17": 10.5,
    "18": 11.5,
    "19": 12.5,
    "20": 13.5
  };

  if (p.splitName == "garageRollUpDoor" || p.splitName == "walkDoorSolid" || p.splitName == "Trimkit" || p.splitName == "window") {
    var texture = new THREE.TextureLoader().load(_edit["default"]);
    var icongeometry = new THREE.CircleGeometry(1.1, 148);
    var iconmaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      map: texture,
      envMaps: "none",
      curveSegments: 3,
      alphaTest: 0.5
    });
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
    _reducer.const_var.b_d_g_b_O_cObj[p.uniqueId] = doorIcon;

    _reducer.const_var.b_d_g_b_O_cN.push(doorIcon);

    var doorDicontexture = new THREE.TextureLoader().load(_delete["default"]);
    var icongeometry = new THREE.CircleGeometry(1.1, 148);
    var iconmaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      map: doorDicontexture,
      envMaps: "none",
      curveSegments: 3,
      alphaTest: 0.2
    });
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
    _reducer.const_var.b_d_g_b_O_cObj[p.uniqueId] = doorDicon;

    _reducer.const_var.b_d_g_b_O_cN.push(doorDicon);
  }

  if (p.splitName == "walkDoorSolid") {
    var doortxtsize = p.scale.x / 2;
    if (p.actual_val.split("X")[0] >= 6) doortxtsize = p.scale.x / 4;
    var geometry1 = new THREE.TextGeometry(Math.round(p.actual_val.split("X")[0] * 12) + '"X' + Math.round(p.actual_val.split("X")[1] * 12) + '"', {
      font: _reducer.const_var.font,
      size: doortxtsize,
      height: 0.08,
      weight: "normal",
      curveSegments: 1,
      bevelEnabled: false,
      bevelThickness: 0.02,
      bevelSize: 0.01,
      bevelSegments: 1
    });
    var txt_mat1 = new THREE.MeshPhongMaterial({
      color: 0x000000
    });
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
      font: _reducer.const_var.font,
      size: doortxtsize,
      height: 0.06,
      weight: "normal",
      curveSegments: 1,
      bevelEnabled: false,
      bevelThickness: 0.02,
      bevelSize: 0.01,
      bevelSegments: 1
    });
    var txt_matfull = new THREE.MeshPhongMaterial({
      color: 0x000000
    });
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
      font: _reducer.const_var.font,
      size: doortxtsize,
      height: 0.025,
      weight: "normal",
      curveSegments: 1,
      bevelEnabled: false,
      bevelThickness: 0.01,
      bevelSize: 0.01,
      bevelSegments: 1
    });
    var txt_matfull = new THREE.MeshPhongMaterial({
      color: 0x000000
    });
    var txt_meshfull = new THREE.Mesh(geometry, txt_matfull);
    txt_meshfull.position.x = -0.3;
    txt_meshfull.position.y = 0;
    txt_meshfull.name = "DoorDimension";
    p.add(txt_meshfull);
  } else if (p.splitName == "window") {
    var geometry1 = new THREE.TextGeometry(Math.round(p.actual_val.split("X")[0] * 12) + '"X' + Math.round(p.actual_val.split("X")[1] * 12) + '"', {
      font: _reducer.const_var.font,
      size: 1,
      height: 0.04,
      weight: "normal",
      curveSegments: 1,
      bevelEnabled: false,
      bevelThickness: 0.02,
      bevelSize: 0.01,
      bevelSegments: 1
    });
    var txt_mat1 = new THREE.MeshPhongMaterial({
      color: 0x000000
    });
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
      _reducer.const_var.ManageDoorArrar["ltleft"].push(p);

      _reducer.const_var.ManageGlobalComponent["ltleft"].push(p);
    } else if (p.BarnPos == "BarnRight") {
      _reducer.const_var.ManageDoorArrar["ltright"].push(p);

      _reducer.const_var.ManageGlobalComponent["ltright"].push(p);
    } else if (p.BarnPos == "FrontL") {
      _reducer.const_var.ManageDoorArrar["frontl"].push(p);

      _reducer.const_var.ManageGlobalComponent["frontl"].push(p);
    } else if (p.BarnPos == "FrontR") {
      _reducer.const_var.ManageDoorArrar["frontr"].push(p);

      _reducer.const_var.ManageGlobalComponent["frontr"].push(p);
    } else if (p.BarnPos == "BackL") {
      _reducer.const_var.ManageDoorArrar["backl"].push(p);

      _reducer.const_var.ManageGlobalComponent["backl"].push(p);
    } else if (p.BarnPos == "BackR") {
      _reducer.const_var.ManageDoorArrar["backr"].push(p);

      _reducer.const_var.ManageGlobalComponent["backr"].push(p);
    } else if (p.BarnPos == "LeftS") {
      _reducer.const_var.ManageDoorArrar["lefts"].push(p);

      _reducer.const_var.ManageGlobalComponent["lefts"].push(p);
    } else if (p.BarnPos == "RightS") {
      _reducer.const_var.ManageDoorArrar["rights"].push(p);

      _reducer.const_var.ManageGlobalComponent["rights"].push(p);
    } else if (p.BarnPos == "FrontS") {
      _reducer.const_var.ManageDoorArrar["fronts"].push(p);

      _reducer.const_var.ManageGlobalComponent["fronts"].push(p);
    } else {
      _reducer.const_var.ManageDoorArrar[_reducer.const_var.main_posGet].push(p);

      _reducer.const_var.ManageGlobalComponent[_reducer.const_var.main_posGet].push(p);
    }

    if (_reducer.const_var.callMesure != false) {//ArrowNDistance.upCmpdist();
    }
  } else if (p.splitName == "window") {
    if (p.BarnPos == "BarnLeft") {
      _reducer.const_var.ManageWindowArrar["ltleft"].push(p);

      _reducer.const_var.ManageGlobalComponent["ltleft"].push(p);
    } else if (p.BarnPos == "BarnRight") {
      _reducer.const_var.ManageWindowArrar["ltright"].push(p);

      _reducer.const_var.ManageGlobalComponent["ltright"].push(p);
    } else if (p.BarnPos == "FrontL") {
      _reducer.const_var.ManageWindowArrar["frontl"].push(p);

      _reducer.const_var.ManageGlobalComponent["frontl"].push(p);
    } else if (p.BarnPos == "FrontR") {
      _reducer.const_var.ManageWindowArrar["frontr"].push(p);

      _reducer.const_var.ManageGlobalComponent["frontr"].push(p);
    } else if (p.BarnPos == "BackL") {
      _reducer.const_var.ManageWindowArrar["backl"].push(p);

      _reducer.const_var.ManageGlobalComponent["backl"].push(p);
    } else if (p.BarnPos == "BackR") {
      _reducer.const_var.ManageWindowArrar["backr"].push(p);

      _reducer.const_var.ManageGlobalComponent["backr"].push(p);
    } else if (p.BarnPos == "LeftS") {
      _reducer.const_var.ManageWindowArrar["lefts"].push(p);

      _reducer.const_var.ManageGlobalComponent["lefts"].push(p);
    } else if (p.BarnPos == "RightS") {
      _reducer.const_var.ManageWindowArrar["rights"].push(p);

      _reducer.const_var.ManageGlobalComponent["rights"].push(p);
    } else if (p.BarnPos == "FrontS") {
      _reducer.const_var.ManageWindowArrar["fronts"].push(p);

      _reducer.const_var.ManageGlobalComponent["fronts"].push(p);
    } else {
      _reducer.const_var.ManageWindowArrar[_reducer.const_var.main_posGet].push(p);

      _reducer.const_var.ManageGlobalComponent[_reducer.const_var.main_posGet].push(p);
    }

    if (_reducer.const_var.callMesure != false) {//ArrowNDistance.upCmpdist();
    }
  } else {
    if (p.BarnPos == "BarnLeft") {
      _reducer.const_var.ManageGlobalComponent["ltleft"].push(p);
    } else if (p.BarnPos == "BarnRight") {
      _reducer.const_var.ManageGlobalComponent["ltright"].push(p);
    } else {
      _reducer.const_var.ManageGlobalComponent[p.BarnPos.toLowerCase()].push(p);
    }
  }

  if ((p.exactDoorName == "Garage" || p.exactDoorName == "CustomFrameout") && p.position.y > 0 && p.splitName != "Trimkit") {
    _reducer.params.DoorPosOnEdit.y = 0;
    p.position.y = 0;
  }

  _reducer.params.wallPos = "Select";
  _reducer.const_var.b_s_c_n = p;
  _reducer.const_var.doorUniqueId = p.uniqueId;

  _reducer.const_var.b_d_g_b_O_c.push(p);

  if (p.splitName == "Trimkit") {
    p.traverse(function (a) {
      if (a instanceof THREE.Mesh) {
        if (a.name != "DoorDimension" && a.name.includes("-EDIT") != true && a.name.includes("-DELETE") != true) {
          _reducer.const_var.b_d_g_b_O_c.unshift(a);
        }
      }
    });
  }

  _reducer.const_var.b_d_g_b_O_c1.push(p);

  _reducer.const_var.scene.add(p);

  _reducer.const_var.sum++;
  _reducer.params[a + "Qty"]++;
  _reducer.params.b_l_t_s = "";
  /*setComponent.setWallComponent();
  setComponent.setLeftRightPos(p);*/
};

exports.cDW = cDW;

var setRenderOrder = function setRenderOrder(wall) { };

exports.setRenderOrder = setRenderOrder;

var adjustComponent = function adjustComponent() { };

exports.adjustComponent = adjustComponent;

var fnFdIdxBkYvLnAr = function fnFdIdxBkYvLnAr(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      return i;
    }
  }

  return null;
};

exports.fnFdIdxBkYvLnAr = fnFdIdxBkYvLnAr;

var fnFdIdxBkYvL = function fnFdIdxBkYvL(arraytosearch, key, valuetosearch, key2, value2) {
  for (var i = 0; i < arraytosearch.length; i++) {
    if (arraytosearch[i][key] == valuetosearch && arraytosearch[i][key2] == value2) {
      return i;
    }
  }

  return null;
};

exports.fnFdIdxBkYvL = fnFdIdxBkYvL;

var fnFdIdxBkYvLUq = function fnFdIdxBkYvLUq(arraytosearch, key, valuetosearch, key2) {
  for (var i = 0; i < arraytosearch.length; i++) {
    if (arraytosearch[i][key] == valuetosearch && (arraytosearch[i][key2] == "" || arraytosearch[i][key2] == undefined)) {
      return i;
    }
  }

  return null;
};

exports.fnFdIdxBkYvLUq = fnFdIdxBkYvLUq;

var fnFdIdxBkYvLP = function fnFdIdxBkYvLP(arraytosearch, key, valuetosearch, key2) {
  for (var i = 0; i < arraytosearch.length; i++) {
    if (arraytosearch[i][key2] == undefined) {
      return i;
    }
  }

  return null;
};

exports.fnFdIdxBkYvLP = fnFdIdxBkYvLP;

var fnFdIdxBkUiD = function fnFdIdxBkUiD(arraytosearch, key, valuetosearch) {
  for (var i = 0; i < arraytosearch.length; i++) {
    if (arraytosearch[i][key] == valuetosearch) {
      return i;
    }
  }

  return null;
};

exports.fnFdIdxBkUiD = fnFdIdxBkUiD;

var fnFdIdxBkUiDN = function fnFdIdxBkUiDN(arraytosearch, Id, key, valuetosearch) {
  for (var i = 0; i < _reducer.const_var.d_w_a_r.length; i++) {
    if (arraytosearch[_reducer.const_var.d_w_a_r[i].uniqueId] != undefined) {
      for (var j = 0; j < arraytosearch[_reducer.const_var.d_w_a_r[i].uniqueId].length; j++) {
        if (arraytosearch[_reducer.const_var.d_w_a_r[i].uniqueId][j][key] == valuetosearch) {
          return j;
        }
      }
    }
  }

  return null;
};

exports.fnFdIdxBkUiDN = fnFdIdxBkUiDN;

var chk_order_data_door = function chk_order_data_door(array, val) {
  for (var i = 0; i < array.length; i++) {
    if (array[i]["uniqueId"] == val) {
      return i;
    }
  }

  return null;
};

exports.chk_order_data_door = chk_order_data_door;

var cHkDrWdWlPs = function cHkDrWdWlPs(e) {
  for (var i = 0; i < e.length; i++) {
    if (i < 3) {
      if (e[i].object.name.substring(0, 4) == "wind" || "walk" == e[i].object.name.substring(0, 4) || "gara" == e[i].object.name.substring(0, 4)) {
        return i;
      }
    }
  }

  return null;
};

exports.cHkDrWdWlPs = cHkDrWdWlPs;

var cHkAryDr = function cHkAryDr(arr) {
  for (var i = 0; i <= arr.length - 1; i++) {
    arr[i].check = false;
  }
};

exports.cHkAryDr = cHkAryDr;

function onResize() {
  //let classData = document.getElementsByClassName("buildingcanvas");
  _reducer.const_var.camera.aspect = classData[0].clientWidth / classData[0].clientHeight;

  _reducer.const_var.camera.updateProjectionMatrix();

  _reducer.const_var.renderer.setSize(classData[0].clientWidth, classData[0].clientHeight);
}

function ontouchstart1(a) {
  if (_reducer.const_var.i_c_l_g == false) {
    return false;
  }

  var rect = classData[0].getBoundingClientRect();
  var b = (a.targetTouches[0].pageX - rect.left) / classData[0].clientWidth * 2 - 1;
  var c = 2 * -((a.targetTouches[0].pageY - rect.top) / classData[0].clientHeight) + 1;
  var d = new THREE.Vector3(b, c, 1);
  d.unproject(_reducer.const_var.camera);
  _reducer.const_var.i_c_l_g_n = true;
  /*Code comment for doors & windows at 28-Sept-2017*/
  //const_var.raycaster.set(camera.position, d.sub(camera.position).normalize());

  /*End of code*/

  _reducer.const_var.b_n_B_d = _reducer.const_var.b_n_B_d == "" ? _reducer.params.p_b_t : _reducer.const_var.b_n_B_d; //var d_p_j_n_f_U_y_N = "d_p_j_n_f_U_y_n_"+const_var.DistanceArr[params.p_r_s];

  var e = _reducer.const_var.raycaster.intersectObjects(_reducer.const_var.b_d_g_b_O_c);

  var newD = _reducer.const_var.raycaster.intersectObjects(_reducer.const_var.b_d_g_b_O_cN);

  if (newD.length > 0) {
    _reducer.const_var.showComponentEditBox = true;

    if (newD[0].object != undefined) {
      _reducer.const_var.exactDoorType = newD[0].object.component.exactDoorName;
      _reducer.const_var.editComponentDimension = newD[0].object.component.exactDoorDimension;
      _reducer.const_var.commonDoorType = newD[0].object.component.commonDoorType;
      _reducer.const_var.pos = newD[0].object.component.pos;
      _reducer.const_var.doorUniqueId = newD[0].object.component.uniqueId;
      ComponentUniqueID = newD[0].object.component.uniqueId;
      _reducer.params.trimkit = newD[0].object.component.doorProperty != undefined ? newD[0].object.component.doorProperty.trimkit : false;
      _reducer.params.header_seal = newD[0].object.component.doorProperty != undefined ? newD[0].object.component.doorProperty.header_seal : false;
      _reducer.params.chain_hoist = newD[0].object.component.doorProperty != undefined ? newD[0].object.component.doorProperty.chain_hoist : false;
      _reducer.params.automatic_openers = newD[0].object.component.doorProperty != undefined ? newD[0].object.component.doorProperty.automatic_openers : false;
      _reducer.params.certified_door = newD[0].object.component.doorProperty != undefined ? newD[0].object.component.doorProperty.certified_door : false;
      _reducer.params.extra_notes = newD[0].object.component.doorProperty != undefined ? newD[0].object.component.doorProperty.entry_note : _reducer.params.extra_notes; //params.g_d_c = newD[0].object.component.doorProperty != undefined ? newD[0].object.component.doorProperty.garage_door_color : params.g_d_c;

      _reducer.params.f_r_m_o_t = newD[0].object.component.exactDoorDimension.split("_")[0].split("X")[0];
      _reducer.params.f_r_m_o_t1 = newD[0].object.component.exactDoorDimension.split("_")[0].split("X")[1];
    } //objectClickHandler()

  }

  _reducer.const_var.CheckDoorForEdit = false;

  if (e.length > 0) {
    for (var dnw = 0; dnw < e.length; dnw++) {
      if ("Trim" == e[dnw].object.name.substring(0, 4) || "Plan" == e[dnw].object.name.substring(0, 4) || "wind" == e[dnw].object.name.substring(0, 4) || "walk" == e[dnw].object.name.substring(0, 4) || "gara" == e[dnw].object.name.substring(0, 4)) {
        e[dnw].faceIndex = 100;
      }
    }
  }

  if (e.length > 0 && ("b_h_t6Bx" == e[0].object.name || "b_h_t7Bx" == e[0].object.name || "b_h_t8Bx" == e[0].object.name || "b_h_t2Bx" == e[0].object.name || "b_h_t4Bx" == e[0].object.name || "b_B_g_B" == e[0].object.name || "Trim" == e[0].object.name.substring(0, 4) || "Plan" == e[0].object.name.substring(0, 4))) {
    e.sort(function (a, b) {
      return b.faceIndex - a.faceIndex;
      return 0; //default return value (no sorting)
    });
  }

  if (_reducer.params.p_b_t == "2" || _reducer.params.add_left_lean == true || _reducer.params.add_right_lean == true) {
    var chkPosWall = cHkDrWdWlPs(e);

    if (e.length > 0 && chkPosWall != null && ("Trim" != e[0].object.name.substring(0, 4) || "wind" != e[0].object.name.substring(0, 4) || "walk" != e[0].object.name.substring(0, 4) || "gara" != e[0].object.name.substring(0, 4))) {
      var e = _reducer.const_var.raycaster.intersectObjects(_reducer.const_var.b_d_g_b_O_c1);
    }
  }

  var e1 = _reducer.const_var.raycaster.intersectObject(_reducer.const_var.b_B_g_B);

  cHkAryDr(_reducer.const_var.d_w_a_r);

  if (e1.length > 0 && ("b_B_g_B" == e1[0].object.name || "model-" == e[0].object.name.substring(0, 5)) && _reducer.params.p_u_c == true) {
    if (8 == e1[0].faceIndex || 9 == e1[0].faceIndex) {
      var disValTexture = _reducer.params.fourth_center_cost == true ? 0.5 : 1;
      e1[0].object.position.z = _reducer.params.p_u_c == true ? Number(_reducer.params.p_u_t) + disValTexture - _reducer.params.p_d - _reducer.const_var.b_M_g_V : 0;
    } else if (10 == e1[0].faceIndex || 11 == e1[0].faceIndex) {
      e1[0].object.position.z = 0; //(params.p_u_c==true || params.p_d>35)?0.18:-0.22;
    } else if (0 == e1[0].faceIndex || 1 == e1[0].faceIndex) {
      e1[0].object.position.z = 0;
    } else if (2 == e1[0].faceIndex || 3 == e1[0].faceIndex) {
      e1[0].object.position.z = 0;
    }
  }

  if (e.length > 0 && ("b_B_g_B" != e[0].object.name && "b_h_t1Bx" != e[0].object.name && "b_h_t5Bx" != e[0].object.name && "b_h_t6Bx" != e[0].object.name && "b_h_t2Bx" != e[0].object.name && "b_h_t3Bx" != e[0].object.name && "b_h_t4Bx" != e[0].object.name && "b_h_t7Bx" != e[0].object.name && "b_h_t8Bx" != e[0].object.name || "model-" == e[0].object.name.substring(0, 5))) {
    _reducer.const_var.controls.enableRotate = false;
    if ("Trim" == e[0].object.name.substring(0, 4) || "Plan" == e[0].object.name.substring(0, 4) || "model-" == e[0].object.name.substring(0, 5) || "wind" == e[0].object.name.substring(0, 4) || "walk" == e[0].object.name.substring(0, 4) || "gara" == e[0].object.name.substring(0, 4)) {
      if (_reducer.const_var.b_i_d_e) {
        var newName = e[0].object.name.replace("-clone", "");

        if (newName.indexOf("Frameout") > -1) {
          var next_val1 = e[0].object.name.replace("-clone", "").match(/\d/g);
          var next_val = next_val1.join("X");
          var numb1 = e[0].object.name.replace("-clone", "").match(/\d/g);
          numb1 = numb1.join("");
          var numb = numb1 + "_Frameout";
          var index = fnFdIdxBkYvL(_reducer.const_var.d_w_a_r, "name", numb, "uniqueId", e[0].object.uniqueId);

          _reducer.const_var.d_w_a_r.splice(index, 1);

          if (e[0].object.splitName == "garageRollUpDoor" || e[0].object.splitName == "Trimkit") {
            var _final = fnFdIdxBkYvLnAr(_reducer.const_var.door_arry["garage"], next_val + "_Frameout");

            _reducer.const_var.door_arry["garage"].splice(_final, 1);
          }

          if (e[0].object.splitName == "window") {
            var _final = fnFdIdxBkYvLnAr(_reducer.const_var.door_arry["window"], next_val + "_Frameout");

            _reducer.const_var.door_arry["window"].splice(_final, 1);
          }

          if (e[0].object.splitName == "walkDoorSolid") {
            var _final = fnFdIdxBkYvLnAr(_reducer.const_var.door_arry["door"], next_val + "_Frameout");

            _reducer.const_var.door_arry["door"].splice(_final, 1);
          } //f_r_o_d = "";

        } else {
          var numb = e[0].object.name.replace("-clone", "").match(/\d/g);
          numb = numb.join("");
          var index = fnFdIdxBkYvL(_reducer.const_var.d_w_a_r, "name", numb, "uniqueId", e[0].object.uniqueId);

          _reducer.const_var.d_w_a_r.splice(index, 1);

          var next_val1 = e[0].object.name.replace("-clone", "").match(/\d/g);
          var next_val = next_val1.join("X");

          if (e[0].object.splitName == "garageRollUpDoor" || e[0].object.splitName == "Trimkit") {
            var _final = fnFdIdxBkYvLnAr(_reducer.const_var.door_arry["garage"], next_val);

            _reducer.const_var.door_arry["garage"].splice(_final, 1);
          }

          if (e[0].object.splitName == "window") {
            var _final = fnFdIdxBkYvLnAr(_reducer.const_var.door_arry["window"], next_val);

            _reducer.const_var.door_arry["window"].splice(_final, 1);
          }

          if (e[0].object.splitName == "walkDoorSolid") {
            var _final = fnFdIdxBkYvLnAr(_reducer.const_var.door_arry["door"], next_val);

            _reducer.const_var.door_arry["door"].splice(_final, 1);
          }
        } //(StopPRAPI==true)?cP(const_var.a_p_d_a):'';
        //cSbA(false);


        e[0].object.visible = false; //cSbA(false);

        _reducer.params[e[0].object.name.replace("-clone", "") + "Qty"]--;

        _reducer.const_var.scene.remove(e[0].object);

        var data = _reducer.const_var.scene.children;
        data.forEach(function (a) {
          if (a instanceof THREE.Mesh) if (("wind" == a.name.substring(0, 4) || "walk" == a.name.substring(0, 4) || "gara" == a.name.substring(0, 4)) && a.name.lastIndexOf("-clone", a.name.length - 6) == a.name.length - 6) for (var b = 0; b < a.material.materials.length; b++) {
            //a.material.materials[b].opacity = 0.25;
            //a.material.materials[b].transparent = true;
            a.material.materials[b].emissive.setHex(0);

            if (_reducer.params.g_d_c == "0xffffff") {
              if ("BuildingDoors" == a.material.materials[b].name || "RollUpDoor" == a.material.materials[b].name || "RollUpDoor-Roll" == a.material.materials[b].name || "RollUpDoor-RollEnds" == a.material.materials[b].name || "Door" == a.material.materials[b].name) a.material.materials[b].emissive.setHex(3355443);
            }
          }
        });
        _reducer.const_var.b_i_d_e = false;
        _reducer.const_var.b_s_c_n = e[0].object; //console.log(e,"ontouchstart1");

        ontouchmove1(a);
      } else {
        var newName = e[0].object.name.replace("-clone", "");

        if (newName.indexOf("Frameout") > -1) {
          var numb1 = e[0].object.name.replace("-clone", "").match(/\d/g);
          numb1 = numb1.join("");
          var numb = numb1 + "_Frameout";
          var index = fnFdIdxBkYvLUq(_reducer.const_var.d_w_a_r, "name", numb, "uniqueId", "");
        } else {
          if (e[0].object.name.substring(0, 4) != "Plan") {
            var numb = e[0].object.name.replace("-clone", "").match(/\d/g);
            numb = numb.join("");
            var index = fnFdIdxBkYvLUq(_reducer.const_var.d_w_a_r, "name", numb, "uniqueId", "");
          } else {
            //var numb = e[0].object.parent.parent.name.replace("-clone", "").match(/\d/g);
            var numb = e[0].object.name.replace("-clone", "").match(/\d/g);
            numb = numb.join("");
            var index = fnFdIdxBkYvLUq(_reducer.const_var.d_w_a_r, "name", numb, "uniqueId", "");
          }
        }

        var indexNew = chk_order_data_door(_reducer.const_var.entry_points, e[0].object.uniqueId);

        if (indexNew != null) {
          if (_reducer.const_var.WallClass[e[0].object.pos] == "fend" && _reducer.params.p_u_c == true) {
            var newPosForCom = "ufend";
          } else {
            var newPosForCom = _reducer.const_var.WallClass[e[0].object.pos];
          }

          _reducer.const_var.entry_points[indexNew].entry_location = newPosForCom; //WallClass[e[0].object.pos];
        }

        var index = fnFdIdxBkYvLUq(_reducer.const_var.d_w_a_r, "name", numb, "uniqueId", "");

        if (index !== null) {
          _reducer.const_var.d_w_a_r[index].uniqueId = e[0].object.uniqueId; //const_var.d_w_a_r[index].pos = e[0].object.pos;
        }

        var index = fnFdIdxBkYvLP(_reducer.const_var.d_w_a_r, "name", numb, "pos", "");

        if (index !== null) {
          _reducer.const_var.d_w_a_r[index].pos = e[0].object.pos;
        }

        _reducer.const_var.b_s_c_n = e[0].object;

        if (e[0].object.name.substring(0, 4) != "Trim" && "Plan" != e[0].object.name.substring(0, 4)) {
          _reducer.const_var.place_d = true;
          _reducer.const_var.b_s_c_n = e[0].object; //cSbA(false);

          var e = _reducer.const_var.raycaster.intersectObject(_reducer.const_var.b_B_g_B, true);

          for (var g = 0; g < _reducer.const_var.b_s_c_n.material.materials.length; g++) {
            //b_s_c_n.material.materials[g].opacity = 1;
            _reducer.const_var.b_s_c_n.material.materials[g].depthTest = true;

            _reducer.const_var.b_s_c_n.material.materials[g].emissive.setHex(0);

            if (document.documentElement.clientWidth > 1021) {
              if (_reducer.const_var.b_s_c_n.material.materials[g].name == "BuildingTrim") _reducer.const_var.b_s_c_n.material.materials[g].color.setHex(_reducer.params.p_t_c);
            }

            if (_reducer.params.g_d_c == "0xffffff") {
              if ("BuildingDoors" == _reducer.const_var.b_s_c_n.material.materials[g].name || "RollUpDoor" == _reducer.const_var.b_s_c_n.material.materials[g].name || "RollUpDoor-Roll" == _reducer.const_var.b_s_c_n.material.materials[g].name || "RollUpDoor-RollEnds" == _reducer.const_var.b_s_c_n.material.materials[g].name || "Door" == _reducer.const_var.b_s_c_n.material.materials[g].name) _reducer.const_var.b_s_c_n.material.materials[g].emissive.setHex(3355443);
            }
          } //console.log(e,"ontouchstart1");


          ontouchmove1(a);
        } else {
          _reducer.const_var.place_d = true; //b_s_c_n = e[0].object.parent.parent;

          _reducer.const_var.b_s_c_n = e[0].object; //cSbA(false);

          for (var g = 0; g < _reducer.const_var.b_s_c_n.material.materials.length; g++) {
            _reducer.const_var.b_s_c_n.material.materials[g].depthTest = true;

            _reducer.const_var.b_s_c_n.material.materials[g].emissive.setHex(0);

            if (document.documentElement.clientWidth > 1021) {
              if (_reducer.const_var.b_s_c_n.material.materials[g].name == "Trimkit-trim") _reducer.const_var.b_s_c_n.material.materials[g].color.setHex(_reducer.params.p_t_c);
            }

            if (_reducer.params.g_d_c == "0xffffff") {
              if ("Trimkit-center" == _reducer.const_var.b_s_c_n.material.materials[g].name) _reducer.const_var.b_s_c_n.material.materials[g].emissive.setHex(3355443);
            }
          }
        }

        ontouchmove1(a);
      }
    } else {
      _reducer.const_var.b_s_c_n = e[0].object.parent;

      var e = _reducer.const_var.raycaster.intersectObject(_reducer.const_var.ground);
    }
  }
}

function ontouchmove1(a) {
  var rect = classData[0].getBoundingClientRect();
  var b = (a.targetTouches[0].pageX - rect.left) / classData[0].clientWidth * 2 - 1;
  var c = 2 * -((a.targetTouches[0].pageY - rect.top) / classData[0].clientHeight) + 1;
  var d = new THREE.Vector3(b, c, 1);
  d.unproject(_reducer.const_var.camera);

  _reducer.const_var.raycaster.set(_reducer.const_var.camera.position, d.sub(_reducer.const_var.camera.position).normalize());

  _reducer.const_var.b_n_B_d = _reducer.const_var.b_n_B_d == "" ? _reducer.params.p_b_t : _reducer.const_var.b_n_B_d;
  var minVal = 0;

  if (_reducer.const_var.b_s_c_n) {
    if (_reducer.const_var.b_i_R_z_D == true && "gara" == _reducer.const_var.b_s_c_n.name.substring(0, 4)) {
      var e = (_reducer.const_var.b_s_c_s_X - ((a.targetTouches[0].pageX - rect.left) / classData[0].clientWidth * 2 - 1)) * -1;
      var f = (_reducer.const_var.b_s_c_s_Y - ((a.targetTouches[0].pageX - rect.top) / classData[0].clientHeight * -2 + 1)) * -1;
      e = 6 * e;
      f = 6 * f;
      var g = parseFloat(_reducer.const_var.b_m_P_s_X) + parseFloat(e) / 2;
      var h = parseFloat(_reducer.const_var.b_m_P_s_Y) + parseFloat(f) / 2;
      g = Math.round(40 * g) / 40;
      h = Math.round(20 * h) / 20;
      if (g < -0.2) g = -0.2;
      if (h < -0.4) h = -0.4;
      _reducer.const_var.b_s_c_n.morphTargetInfluences[_reducer.const_var.b_s_c_n.morphTargetDictionary.width] = g;
      _reducer.const_var.b_s_c_n.morphTargetInfluences[_reducer.const_var.b_s_c_n.morphTargetDictionary.height] = h;
      _reducer.const_var.b_s_c_n.geometry.dynamic = true;
      _reducer.const_var.b_s_c_n.geometry.normalsNeedUpdate = true;
      _reducer.const_var.b_s_c_n.geometry.tangentsNeedUpdate = true;
    } else if (0 == a.button && ("Gara" == _reducer.const_var.b_s_c_n.name.substring(0, 4) || "Trim" == _reducer.const_var.b_s_c_n.name.substring(0, 4) || "wind" == _reducer.const_var.b_s_c_n.name.substring(0, 4) || "walk" == _reducer.const_var.b_s_c_n.name.substring(0, 4) || "gara" == _reducer.const_var.b_s_c_n.name.substring(0, 4)) && false == _reducer.const_var.b_i_d_e) {
      var i = 0;
      var j = 0;
      var k = 0;
      var l = "front";
      var m = null;

      var n = _reducer.const_var.raycaster.intersectObject(_reducer.const_var.b_B_g_B);

      if (n.length > 0) {
        var disValTexture = _reducer.params.fourth_center_cost == true ? 0.5 : 1;

        if (0 == n[0].faceIndex || 1 == n[0].faceIndex) {
          _reducer.const_var.b_s_c_n.rotation.y = Math.PI / 2; //n[0].object.position.z = -0.12;

          l = "right";
        } else if (2 == n[0].faceIndex || 3 == n[0].faceIndex) {
          _reducer.const_var.b_s_c_n.rotation.y = Math.PI / -2;
          l = "left";
        } else if (8 == n[0].faceIndex || 9 == n[0].faceIndex) {
          _reducer.const_var.b_s_c_n.rotation.y = 0;
          n[0].object.position.z = _reducer.params.p_u_c == true ? Number(_reducer.params.p_u_t) + disValTexture - _reducer.params.p_d - _reducer.const_var.b_M_g_V : 0;
          l = "front";
        } else if (10 == n[0].faceIndex || 11 == n[0].faceIndex) {
          _reducer.const_var.b_s_c_n.rotation.y = Math.PI / 1;
          l = "back";
        } else l = false;

        if (_reducer.const_var.b_s_c_n.pos != l) {
          if (_reducer.const_var.b_s_c_n.pos == "front") {
            _reducer.const_var.b_s_c_n.rotation.y = 0;
            n[0].object.position.z = _reducer.params.p_u_c == true ? Number(_reducer.params.p_u_t) + disValTexture - _reducer.params.p_d - _reducer.const_var.b_M_g_V : 0;
          }

          if (_reducer.const_var.b_s_c_n.pos == "back") {
            _reducer.const_var.b_s_c_n.rotation.y = Math.PI / 1;
          }

          if (_reducer.const_var.b_s_c_n.pos == "left") {
            _reducer.const_var.b_s_c_n.rotation.y = Math.PI / -2;
          }

          if (_reducer.const_var.b_s_c_n.pos == "right") {
            _reducer.const_var.b_s_c_n.rotation.y = Math.PI / 2;
          }

          _reducer.const_var.i_c_l_g_n = false;
          return false;
        }

        if (_reducer.params.p_h == _reducer.const_var.b_s_c_n.actual_val.split("X")[1] && (l == "right" || l == "left") && _reducer.const_var.c_k_Do_po_s != "") {
          _reducer.const_var.c_k_Do_po_s = l;
        }

        if (_reducer.params.p_h == _reducer.const_var.b_s_c_n.actual_val.split("X")[1] && (l == "right" || l == "left")) {
          l = _reducer.const_var.main_posGet;

          if (_reducer.const_var.main_posGet == "front" && _reducer.params.p_h == _reducer.const_var.b_s_c_n.actual_val.split("X")[1]) {
            _reducer.const_var.b_s_c_n.rotation.y = 0;
          } else if (_reducer.const_var.main_posGet == "back" && _reducer.params.p_h == _reducer.const_var.b_s_c_n.actual_val.split("X")[1]) {
            _reducer.const_var.b_s_c_n.rotation.y = Math.PI / 1;
          }
        }

        var GetDistance12 = _reducer.params.p_d / 2;
        var b_Bn_v1 = _reducer.params.p_b_c_b_l_f == "Close" || _reducer.params.p_b_c_b_l == "Close" || _reducer.params.add_storage_check == true ? _reducer.params.lean_p_w : 0;
        var b_Bn_v2 = _reducer.params.p_b_c_b_r_f == "Close" || _reducer.params.p_b_c_b_r == "Close" || _reducer.params.add_storage_check_right == true ? _reducer.params.leanR_p_w : 0;
        var GetDistance11 = _reducer.params.p_w / 2;
        var sp_Val = _reducer.const_var.b_s_c_n.actual_val.split("X")[0] / 2;

        if (l == "front") {
          if (Math.sign(Math.round(_reducer.const_var.b_s_c_n.position.x)) == 1 || Math.sign(Math.round(_reducer.const_var.b_s_c_n.position.x)) == 0) {
            var new1 = _reducer.const_var.b_s_c_n.position.x + sp_Val;
            var new2 = _reducer.const_var.b_s_c_n.position.x - sp_Val;
            var new3 = new1 - GetDistance11;
            var new4 = new2 + GetDistance11;
            if (_reducer.params.p_b_c_b_r_f == "Close" || _reducer.params.add_storage_check_right == true) var new3 = new1 - GetDistance11 - b_Bn_v2;
            if (_reducer.params.p_b_c_b_l_f == "Close" || _reducer.params.add_storage_check == true) var new4 = new2 + GetDistance11 + b_Bn_v1;
          }

          if (Math.sign(Math.round(_reducer.const_var.b_s_c_n.position.x)) == -1 || Math.sign(Math.round(_reducer.const_var.b_s_c_n.position.x)) == -0) {
            var new1 = _reducer.const_var.b_s_c_n.position.x + sp_Val;
            var new2 = _reducer.const_var.b_s_c_n.position.x - sp_Val;
            var new3 = new1 - GetDistance11;
            var new4 = new2 + GetDistance11;
            if (_reducer.params.p_b_c_b_r_f == "Close" || _reducer.params.add_storage_check_right == true) var new3 = new1 - GetDistance11 - b_Bn_v2;
            if (_reducer.params.p_b_c_b_l_f == "Close" || _reducer.params.add_storage_check == true) var new4 = new2 + GetDistance11 + b_Bn_v1;
          }
        } else if (l == "back") {
          if (Math.sign(Math.round(_reducer.const_var.b_s_c_n.position.x)) == 1 || Math.sign(Math.round(_reducer.const_var.b_s_c_n.position.x)) == 0) {
            var new1 = _reducer.const_var.b_s_c_n.position.x + sp_Val;
            var new2 = _reducer.const_var.b_s_c_n.position.x - sp_Val;
            var new3 = new1 - GetDistance11;
            var new4 = new2 + GetDistance11;
            if (_reducer.params.p_b_c_b_r_f == "Close" || _reducer.params.add_storage_check_right == true) var new3 = new1 - GetDistance11 - b_Bn_v2;
            if (_reducer.params.p_b_c_b_l_f == "Close" || _reducer.params.add_storage_check == true) var new4 = new2 + GetDistance11 + b_Bn_v1;
          }

          if (Math.sign(Math.round(_reducer.const_var.b_s_c_n.position.x)) == -1 || Math.sign(Math.round(_reducer.const_var.b_s_c_n.position.x)) == -0) {
            var new1 = _reducer.const_var.b_s_c_n.position.x + sp_Val;
            var new2 = _reducer.const_var.b_s_c_n.position.x - sp_Val;
            var new3 = new1 - GetDistance11;
            var new4 = new2 + GetDistance11;
            if (_reducer.params.p_b_c_b_r_f == "Close" || _reducer.params.add_storage_check_right == true) var new3 = new1 - GetDistance11 - b_Bn_v2;
            if (_reducer.params.p_b_c_b_l_f == "Close" || _reducer.params.add_storage_check == true) var new4 = new2 + GetDistance11 + b_Bn_v1;
          }
        } else if (l == "left") {
          if (Math.sign(Math.round(_reducer.const_var.b_s_c_n.position.z)) == 1 || Math.sign(Math.round(_reducer.const_var.b_s_c_n.position.z)) == 0) {
            var new1 = _reducer.const_var.b_s_c_n.position.z + sp_Val;
            var new2 = _reducer.const_var.b_s_c_n.position.z - sp_Val;
            var new3 = new1 - GetDistance12;
            var new4 = new2 + GetDistance12;
          }

          if (Math.sign(Math.round(_reducer.const_var.b_s_c_n.position.z)) == -1 || Math.sign(Math.round(_reducer.const_var.b_s_c_n.position.z)) == -0) {
            var new1 = _reducer.const_var.b_s_c_n.position.z + sp_Val;
            var new2 = _reducer.const_var.b_s_c_n.position.z - sp_Val;
            var new3 = new1 - GetDistance12;
            var new4 = new2 + GetDistance12;
          }
        } else if (l == "right") {
          if (Math.sign(Math.round(_reducer.const_var.b_s_c_n.position.z)) == 1 || Math.sign(Math.round(_reducer.const_var.b_s_c_n.position.z)) == 0) {
            var new1 = _reducer.const_var.b_s_c_n.position.z + sp_Val;
            var new2 = _reducer.const_var.b_s_c_n.position.z - sp_Val;
            var new4 = new1 - GetDistance12;
            var new3 = new2 + GetDistance12;
          }

          if (Math.sign(Math.round(_reducer.const_var.b_s_c_n.position.z)) == -1 || Math.sign(Math.round(_reducer.const_var.b_s_c_n.position.z)) == -0) {
            var new1 = _reducer.const_var.b_s_c_n.position.z + sp_Val;
            var new2 = _reducer.const_var.b_s_c_n.position.z - sp_Val;
            var new4 = new1 - GetDistance12;
            var new3 = new2 + GetDistance12;
          }
        }

        var componenteEditBox = document.getElementsByClassName("react-draggable");
        componenteEditBox[0].style.transform = "translate(0, 0)";
        var x = window.matchMedia("(min-width: 992px)");

        if (x.matches) {
          // If media query matches
          if (l == "front" || l == "back") {
            if (_reducer.const_var.b_s_c_n.splitName == "window") {
              componenteEditBox[0].style.left = a.targetTouches[0].pageX - 300 + "px";
              componenteEditBox[0].style.top = a.targetTouches[0].pageY - 200 + "px";
            } else if (_reducer.const_var.b_s_c_n.splitName == "walkDoorSolid") {
              componenteEditBox[0].style.left = a.targetTouches[0].pageX - 330 + "px";
              componenteEditBox[0].style.top = a.targetTouches[0].pageY - 200 + "px";
            } else {
              componenteEditBox[0].style.left = a.targetTouches[0].pageX - 350 + "px";
              componenteEditBox[0].style.top = a.targetTouches[0].pageY - 200 + "px";
            }
          } else {
            if (_reducer.const_var.b_s_c_n.splitName == "window") {
              componenteEditBox[0].style.left = a.targetTouches[0].pageX - 295 + "px";
              componenteEditBox[0].style.top = a.targetTouches[0].pageY - 200 + "px";
            } else if (_reducer.const_var.b_s_c_n.splitName == "walkDoorSolid") {
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

        var NewDoorName = _reducer.const_var.b_s_c_n.actual_val.split("X");

        _reducer.const_var.b_s_c_n.leftpos = Math.abs(new4);
        _reducer.const_var.b_s_c_n.rightpos = Math.abs(new3);
        _reducer.const_var.b_s_c_n.leftdisfmb = Math.abs(new4);
        _reducer.const_var.b_s_c_n.rightdisfmb = Math.abs(new3);

        if (_reducer.const_var.b_s_c_n.pos == "back") {
          _reducer.const_var.b_s_c_n.leftpos = Math.abs(new3);
          _reducer.const_var.b_s_c_n.rightpos = Math.abs(new4);
          _reducer.const_var.b_s_c_n.leftdisfmb = Math.abs(new3);
          _reducer.const_var.b_s_c_n.rightdisfmb = Math.abs(new4);
        }

        _reducer.const_var.checkFVL = new3;
        _reducer.const_var.checkFVR = new4;

        if (i == 0 && k == 0) {
          var val = _reducer.const_var.b_s_c_n.actual_val.split("X")[0];

          if ("front" == l || "back" == l) {
            i = val / 2 - 0.5;
            j = 0;
          }

          if ("left" == l || "right" == l) {
            k = val / 2 - 0.5;
            j = 0;
          }
        }

        if (_reducer.const_var.b_s_c_n.splitName == "window") {
          var val = _reducer.const_var.b_s_c_n.actual_val.split("X")[0] / 2;
          var centerPoint = _reducer.params.p_w / 2 - 1 - val;
          var nd = 4;
          var divisor = val / nd >> 0;
          var remainder = val % nd;

          if ("front" == l || "back" == l) {
            i = val + 1; //j = 1.3;

            j = _reducer.const_var.b_s_c_n.actual_val.split("X")[1] / 2;
          }

          if ("left" == l || "right" == l) {
            k = val + 1; //j = 2;

            j = _reducer.const_var.b_s_c_n.actual_val.split("X")[1] / 2;
          }
        }

        if (_reducer.const_var.b_s_c_n.splitName == "walkDoorSolid") {
          var val = _reducer.const_var.b_s_c_n.actual_val.split("X")[0] / 2;
          var centerPoint = _reducer.params.p_w / 2 - 1 - val;
          var nd = 4;
          var divisor = val / nd >> 0;
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

        if (_reducer.const_var.b_s_c_n.splitName == "garageRollUpDoor") {
          var val = _reducer.const_var.b_s_c_n.actual_val.split("X")[0] / 2;
          var centerPoint = _reducer.params.p_w / 2 - 1 - val;
          var nd = 4;
          var divisor = val / nd >> 0;
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

        if (_reducer.const_var.b_s_c_n.splitName == "Trimkit") {
          var val = _reducer.const_var.b_s_c_n.actual_val.split("X")[0] / 2;
          var centerPoint = _reducer.params.p_w / 2 - 1 - val;
          var nd = 4;
          var divisor = val / nd >> 0;
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

        _reducer.const_var.b_s_c_n.pos = l;

        var _m = n[0].point.sub(_reducer.const_var.offset);

        if (l) {
          var o = 0;
          var p = 0;
          var GetDistance = _reducer.params.p_w / 2 - 1;
          var GetDistance1 = -(_reducer.params.p_w / 2);

          if (_reducer.params.p_u_c == true && _reducer.params.p_b_t == "2") {
            if (Math.sign(Math.round(_m["x"])) == 1 || Math.sign(Math.round(_m["x"])) == 0) {
              if (Math.round(_m["x"]) > GetDistance) {
                if (_reducer.params.p_w > 26) {
                  n[0].object.position.z = 0.01;
                } else {
                  n[0].object.position.z = 0;
                }
              }
            } else if (Math.sign(Math.round(_m["x"])) == -1 || Math.sign(Math.round(_m["x"])) == -0) {
              if (Math.round(_m["x"]) < GetDistance1) {
                if (_reducer.params.p_w > 26) {
                  n[0].object.position.z = 0.01;
                } else {
                  n[0].object.position.z = 0;
                }
              }
            }
          } //if(isCallingDoor==false){return;}


          if (_reducer.params.p_h == _reducer.const_var.b_s_c_n.actual_val.split("X")[1] && (l == "front" || l == "back") && _reducer.params.p_u_c == false) {
            _m["x"] = 0;
            _m["y"] = 0;
            _m["z"] = Math.min(Math.max(_m["z"], _reducer.params.p_d / -2 + k), _reducer.params.p_d / 2 - k);

            if ("Trim" == _reducer.const_var.b_s_c_n.name.substring(0, 4)) {
              _m["y"] = _m["y"] + _reducer.const_var.b_s_c_n.actual_val.split("X")[1] / 2;
              if (l == "front") _m["z"] = _m["z"];
            }

            if (null != _m) {//b_s_c_n.position.copy(m);
            }

            _reducer.const_var.i_c_l_g_n = false;
            _reducer.const_var.controls.enableRotate = true;
            _reducer.const_var.controls.enablePan = true;
            _reducer.const_var.b_s_c_n = null;
            return false;
          } else if (_reducer.params.p_u_c == true && l == "front" && _reducer.params.p_h == _reducer.const_var.b_s_c_n.actual_val.split("X")[1]) {
            _m["x"] = 0;
            _m["y"] = 0;
            _m["z"] = Math.min(Math.max(_m["z"], _reducer.params.p_d / -2 + k), _reducer.params.p_d / 2 - k);
            _reducer.const_var.i_c_l_g_n = true;

            if ("Trim" == _reducer.const_var.b_s_c_n.name.substring(0, 4)) {
              _m["y"] = _m["y"] + _reducer.const_var.b_s_c_n.actual_val.split("X")[1] / 2;
              _m["z"] = _m["z"] - 0.2;
            }

            if (null != _m) {
              _reducer.const_var.b_s_c_n.position.copy(_m);
            }

            _reducer.const_var.controls.enableRotate = true;
            _reducer.const_var.controls.enablePan = true;
            _reducer.const_var.b_s_c_n = null;
            return false;
          } else if (_reducer.params.p_u_c == true && l == "back" && _reducer.params.p_h == _reducer.const_var.b_s_c_n.actual_val.split("X")[1]) {
            _m["x"] = 0;
            _m["y"] = 0;
            _m["z"] = Math.min(Math.max(_m["z"], _reducer.params.p_d / -2 + k), _reducer.params.p_d / 2 - k);

            if ("Trim" == _reducer.const_var.b_s_c_n.name.substring(0, 4)) {
              _m["y"] = _m["y"] + _reducer.const_var.b_s_c_n.actual_val.split("X")[1] / 2; //m["z"] = m["z"] + 0.2;
            }

            if (null != _m) {//b_s_c_n.position.copy(m);
            }

            _reducer.const_var.i_c_l_g_n = false;
            _reducer.const_var.controls.enableRotate = true;
            _reducer.const_var.controls.enablePan = true;
            _reducer.const_var.b_s_c_n = null;
            return false;
          } else {
            _reducer.const_var.i_c_l_g_n = true;
            if (_reducer.params.b_h_t2 || _reducer.params.b_h_t5) o = _reducer.params.p_b_c_b_l_f == "Close" || _reducer.params.p_b_c_b_l == "Close" || _reducer.params.add_left_lean == true || _reducer.params.add_storage_check == true ? _reducer.params.lean_p_w : 0;
            if (_reducer.params.b_h_t4 || _reducer.params.b_h_t6) p = _reducer.params.p_b_c_b_r_f == "Close" || _reducer.params.p_b_c_b_r == "Close" || _reducer.params.add_right_lean == true || _reducer.params.add_storage_check_right == true ? _reducer.params.leanR_p_w : 0;
            _m["x"] = Math.min(Math.max(_m["x"], _reducer.params.p_w / -2 - o + i), _reducer.params.p_w / 2 + p - i);
            if (0 == j) _m["y"] = 0; else _m["y"] = Math.min(Math.max(_m["y"], j), _reducer.params.p_h - j);
            _m["z"] = Math.min(Math.max(_m["z"], _reducer.params.p_d / -2 + k), _reducer.params.p_d / 2 - k);

            if (_reducer.const_var.b_s_c_n.splitName == "Trimkit") {
              _m["x"] = Math.min(Math.max(_m["x"], _reducer.params.p_w / -2 - o + i), _reducer.params.p_w / 2 + p - i);
            }

            if (_reducer.const_var.b_s_c_n.BarnPos == "left" || _reducer.const_var.b_s_c_n.BarnPos == "right") {
              if (_reducer.params.b_h_t2 || _reducer.params.b_h_t5) o = _reducer.params.p_b_c_b_l_f == "Close" || _reducer.params.p_b_c_b_l == "Close" ? 0 : 0;
              if (_reducer.params.b_h_t4 || _reducer.params.b_h_t6) p = _reducer.params.p_b_c_b_r_f == "Close" || _reducer.params.p_b_c_b_r == "Close" ? 0 : 0;
              _m["x"] = Math.min(Math.max(_m["x"], _reducer.params.p_w / -2 - o + i), _reducer.params.p_w / 2 + p - i);
            }

            if (_reducer.const_var.b_s_c_n.BarnPos == "BarnLeft" || _reducer.const_var.b_s_c_n.BarnPos == "BarnRight") {
              if (_reducer.params.b_h_t2 || _reducer.params.b_h_t5) o = _reducer.params.p_b_c_b_l == "Close" || _reducer.params.add_left_lean == true || _reducer.params.add_storage_check == true ? _reducer.params.lean_p_w : 0;
              if (_reducer.params.b_h_t4 || _reducer.params.b_h_t6) p = _reducer.params.p_b_c_b_r == "Close" || _reducer.params.add_right_lean == true || _reducer.params.add_storage_check_right == true ? _reducer.params.leanR_p_w : 0;

              if (_reducer.const_var.b_s_c_n.BarnPos == "BarnLeft") {
                var sposL = 0;

                if (_reducer.params.leantoAlignmentLeft == 2) {
                  sposL = _reducer.params.p_d / 2;
                  _m["z"] = Math.min(Math.max(_m["z"], sposL - _reducer.params.lean_p_d + k), sposL - k);
                }

                if (_reducer.params.leantoAlignmentLeft == 3) {
                  sposL = _reducer.params.p_d / -2;
                  _m["z"] = Math.min(Math.max(_m["z"], sposL + k), sposL + _reducer.params.lean_p_d - k);
                }

                if (_reducer.params.leantoAlignmentLeft == 1) {
                  sposL = _reducer.params.lean_p_d / -2;
                  _m["z"] = Math.min(Math.max(_m["z"], _reducer.params.lean_p_d / -2 + k), _reducer.params.lean_p_d / 2 - k);
                }

                _m["x"] = Math.min(Math.max(_m["x"], _reducer.params.p_w / -2 - o + i), _reducer.params.p_w / -2 + o - i);
              }

              if (_reducer.const_var.b_s_c_n.BarnPos == "BarnRight") {
                var sposL = 0;

                if (_reducer.params.leantoAlignmentRight == 2) {
                  sposL = _reducer.params.p_d / 2;
                  _m["z"] = Math.min(Math.max(_m["z"], sposL - _reducer.params.leanR_p_d + k), sposL - k);
                }

                if (_reducer.params.leantoAlignmentRight == 3) {
                  sposL = _reducer.params.p_d / -2;
                  _m["z"] = Math.min(Math.max(_m["z"], sposL + k), sposL + _reducer.params.leanR_p_d - k);
                }

                if (_reducer.params.leantoAlignmentRight == 1) {
                  sposL = _reducer.params.lean_p_d / -2;
                  _m["z"] = Math.min(Math.max(_m["z"], _reducer.params.leanR_p_d / -2 + k), _reducer.params.leanR_p_d / 2 - k);
                } //m["z"] = Math.min(Math.max(m["z"], params.leanR_p_d/ -2 + k), params.leanR_p_d / 2 - k);


                _m["x"] = Math.min(Math.max(_m["x"], _reducer.params.p_w / 2 + p + i), _reducer.params.p_w / 2 + p - i);
              }
            } else {
              // m["x"] = Math.min(Math.max(m["x"], params.p_w / -2), params.p_w / 2);
              // m["x"] = Math.min(Math.max(m["x"], params.p_w / -2 - o + i), params.p_w / 2 + p - i);
              if (_reducer.const_var.b_s_c_n.BarnPos == "front" || _reducer.const_var.b_s_c_n.BarnPos == "back") {
                _m["x"] = Math.min(Math.max(_m["x"], _reducer.params.p_w / -2 + i), _reducer.params.p_w / 2 - i);
                _m["z"] = Math.min(Math.max(_m["z"], _reducer.params.p_d / -2 + k), _reducer.params.p_d / 2 - k);
              }

              if (_reducer.const_var.b_s_c_n.BarnPos == "FrontL" || _reducer.const_var.b_s_c_n.BarnPos == "BackL" || _reducer.const_var.b_s_c_n.BarnPos == "LeftS") {
                //console.log((params.p_w / -2 - o + i),m["x"],((params.p_w / -2) - i),i);
                if (_reducer.const_var.b_s_c_n.BarnPos == "FrontL" || _reducer.params.add_storage_check == false) {
                  var zPosLine = 0;

                  if (_reducer.params.leantoAlignmentLeft == 2) {
                    //zPosLine = params.p_d/2;
                    _m["z"] = Math.min(Math.max(_m["z"], _reducer.params.p_d / 2 + k), _reducer.params.p_d / 2 - k);
                  }

                  if (_reducer.params.leantoAlignmentLeft == 3) {
                    zPosLine = _reducer.params.p_d / -2 + _reducer.params.lean_p_d;
                    _m["z"] = Math.min(Math.max(_m["z"], zPosLine + k), zPosLine - k);
                  }

                  if (_reducer.params.leantoAlignmentLeft == 1) {
                    //zPosLine = params.lean_p_d/2+0.2;
                    _m["z"] = Math.min(Math.max(_m["z"], _reducer.params.lean_p_d / 2 + k), _reducer.params.lean_p_d / 2 - k);
                  } //m["z"] = Math.min(Math.max(m["z"], params.lean_p_d/ -2 + k), params.lean_p_d / 2 - k);
                  //m["z"] = Math.min(Math.max(m["z"], params.lean_p_d/ 2 + k), params.lean_p_d / 2 - k);


                  _m["x"] = Math.min(Math.max(_m["x"], _reducer.params.p_w / -2 - o + i), _reducer.params.p_w / -2 + 0.5 - i);
                }

                if (_reducer.const_var.b_s_c_n.BarnPos == "BackL") {
                  var _zPosLine4 = 0;

                  if (_reducer.params.leantoAlignmentLeft == 1) {
                    //zPosLine = params.lean_p_d/-2;
                    _m["z"] = Math.min(Math.max(_m["z"], _reducer.params.lean_p_d / -2 + k), _reducer.params.lean_p_d / -2 - k);
                  }

                  if (_reducer.params.leantoAlignmentLeft == 2) {
                    _zPosLine4 = _reducer.params.p_d / 2 - _reducer.params.lean_p_d; //(params.p_d - params.lean_p_d)/-2-0.2;

                    _m["z"] = Math.min(Math.max(_m["z"], _zPosLine4 + k), _zPosLine4 - k);
                  }

                  if (_reducer.params.leantoAlignmentLeft == 3) {
                    _zPosLine4 = _reducer.params.p_d / -2; //params.p_d/-2-0.2;

                    _m["z"] = Math.min(Math.max(_m["z"], _reducer.params.p_d / -2 + k), _reducer.params.p_d / -2 - k);
                  } //m["z"] = Math.min(Math.max(m["z"], params.lean_p_d/ -2 + k), params.lean_p_d / 2 - k);


                  _m["x"] = Math.min(Math.max(_m["x"], _reducer.params.p_w / -2 - o + i), _reducer.params.p_w / -2 + 0.5 - i);
                }

                if (_reducer.const_var.b_s_c_n.BarnPos == "LeftS") {
                  var spos = "";
                  var disValTexture1 = 0.8;

                  if (parseFloat(_reducer.params.add_storage) > parseFloat(_reducer.params.lean_p_d / 2)) {
                    disValTexture1 = 0.4; //spos = parseFloat(params.add_storage - parseFloat(params.lean_p_d/2)) + disValTexture1;
                  } else {
                    disValTexture1 = 0.8; //spos = -parseFloat(parseFloat(params.lean_p_d/2) - params.add_storage) + disValTexture1;
                  }

                  if (_reducer.params.leantoAlignmentLeft == 1) {
                    disValTexture1 = 0.8;

                    if (parseFloat(_reducer.params.add_storage) > parseFloat(_reducer.params.lean_p_d / 2)) {
                      spos = parseFloat(parseFloat(_reducer.params.add_storage) - parseFloat(_reducer.params.lean_p_d / 2)) + disValTexture1;
                    } else {
                      spos = -parseFloat(parseFloat(_reducer.params.lean_p_d / 2) - parseFloat(_reducer.params.add_storage)) + disValTexture1;
                    } //spos = -parseFloat(params.lean_p_d/2) + (parseFloat(params.add_storage) + 1);//params.leanR_p_d/2;//params.p_d/2;

                  }

                  if (_reducer.params.leantoAlignmentLeft == 2) {
                    disValTexture1 = 0.6;
                    spos = parseFloat(_reducer.params.p_d / 2) - (parseFloat(_reducer.params.lean_p_d) - parseFloat(_reducer.params.add_storage)) + disValTexture1;
                  }

                  if (_reducer.params.leantoAlignmentLeft == 3) {
                    disValTexture1 = 0.6;
                    spos = -parseFloat(_reducer.params.p_d / 2) + (parseFloat(_reducer.params.add_storage) + disValTexture1); //params.leanR_p_d/2;//params.p_d/2;
                  }

                  _m["z"] = Math.min(Math.max(_m["z"], spos + k), spos - k);
                  _m["x"] = Math.min(Math.max(_m["x"], _reducer.params.p_w / -2 - o + i), _reducer.params.p_w / -2 + 0.5 - i);
                }
              }

              if (_reducer.const_var.b_s_c_n.BarnPos == "FrontR" || _reducer.const_var.b_s_c_n.BarnPos == "BackR" || _reducer.const_var.b_s_c_n.BarnPos == "RightS") {
                if (_reducer.const_var.b_s_c_n.BarnPos == "FrontR" || _reducer.params.add_storage_check_right == false) {
                  var _zPosLine5 = 0;

                  if (_reducer.params.leantoAlignmentRight == 2) {
                    //zPosLine = params.p_d/2;
                    _m["z"] = Math.min(Math.max(_m["z"], _reducer.params.p_d / 2 + k), _reducer.params.p_d / 2 - k);
                  }

                  if (_reducer.params.leantoAlignmentRight == 3) {
                    _zPosLine5 = _reducer.params.p_d / -2 + _reducer.params.leanR_p_d;
                    _m["z"] = Math.min(Math.max(_m["z"], _zPosLine5 + k), _zPosLine5 - k);
                  }

                  if (_reducer.params.leantoAlignmentRight == 1) {
                    _m["z"] = Math.min(Math.max(_m["z"], _reducer.params.leanR_p_d / 2 + k), _reducer.params.leanR_p_d / 2 - k);
                  } //m["z"] = Math.min(Math.max(m["z"], params.leanR_p_d/ -2 + k), params.leanR_p_d / 2 - k);
                  //m["z"] = Math.min(Math.max(m["z"], params.leanR_p_d/ 2 + k), params.leanR_p_d / 2 - k);


                  _m["x"] = Math.max(Math.min(_m["x"], _reducer.params.p_w / 2 + p - i), _reducer.params.p_w / 2 - 0.5 + i);
                }

                if (_reducer.const_var.b_s_c_n.BarnPos == "BackR") {
                  var _zPosLine6 = 0;

                  if (_reducer.params.leantoAlignmentRight == 1) {
                    _m["z"] = Math.min(Math.max(_m["z"], _reducer.params.leanR_p_d / -2 + k), _reducer.params.leanR_p_d / -2 - k);
                  }

                  if (_reducer.params.leantoAlignmentRight == 2) {
                    _zPosLine6 = _reducer.params.p_d / 2 - _reducer.params.leanR_p_d; //(params.p_d - params.lean_p_d)/-2-0.2;

                    _m["z"] = Math.min(Math.max(_m["z"], _zPosLine6 + k), _zPosLine6 - k);
                  }

                  if (_reducer.params.leantoAlignmentRight == 3) {
                    _m["z"] = Math.min(Math.max(_m["z"], _reducer.params.p_d / -2 + k), _reducer.params.p_d / -2 - k);
                  }

                  _m["x"] = Math.max(Math.min(_m["x"], _reducer.params.p_w / 2 + p - i), _reducer.params.p_w / 2 - 0.5 + i);
                }

                if (_reducer.const_var.b_s_c_n.BarnPos == "RightS") {
                  var spos = "";
                  var disValTexture1 = 0.8;

                  if (parseFloat(_reducer.params.add_storage_right) > parseFloat(_reducer.params.leanR_p_d / 2)) {
                    disValTexture1 = 0.4; //spos = parseFloat(params.add_storage - parseFloat(params.leanR_p_d/2)) + disValTexture1;
                  } else {
                    disValTexture1 = 0.8; //spos = -parseFloat(parseFloat(params.leanR_p_d/2) - params.add_storage_right) + disValTexture1;
                  }

                  if (_reducer.params.leantoAlignmentRight == 1) {
                    disValTexture1 = 0.8;

                    if (parseFloat(_reducer.params.add_storage_right) > parseFloat(_reducer.params.leanR_p_d / 2)) {
                      spos = parseFloat(parseFloat(_reducer.params.add_storage_right) - parseFloat(_reducer.params.leanR_p_d / 2)) + disValTexture1;
                    } else {
                      spos = -parseFloat(parseFloat(_reducer.params.leanR_p_d / 2) - parseFloat(_reducer.params.add_storage_right)) + disValTexture1;
                    }
                  }

                  if (_reducer.params.leantoAlignmentRight == 2) {
                    disValTexture1 = 0.6;
                    spos = parseFloat(_reducer.params.p_d / 2) - (parseFloat(_reducer.params.leanR_p_d) - parseFloat(_reducer.params.add_storage_right)) + disValTexture1;
                  }

                  if (_reducer.params.leantoAlignmentRight == 3) {
                    disValTexture1 = 0.6;
                    spos = -parseFloat(_reducer.params.p_d / 2) + (parseFloat(_reducer.params.add_storage_right) + disValTexture1); //params.leanR_p_d/2;//params.p_d/2;
                  }

                  _m["z"] = Math.min(Math.max(_m["z"], spos + k), spos - k);
                  _m["x"] = Math.max(Math.min(_m["x"], _reducer.params.p_w / 2 + p - i), _reducer.params.p_w / 2 - 0.5 + i);
                }
              }
            }
          }

          if (_reducer.const_var.b_s_c_n.pos == "front" || _reducer.const_var.b_s_c_n.pos == "back") {
            var NewDoorName = _reducer.const_var.b_s_c_n.actual_val.split("X");

            if (_reducer.const_var.b_s_c_n.splitName == "window") {
              _reducer.const_var.b_s_c_n.posYpoint = _reducer.const_var.b_s_c_n.position.y + NewDoorName[1] / 2;
              _reducer.const_var.b_s_c_n.negYpoint = _reducer.const_var.b_s_c_n.position.y - NewDoorName[1] / 2;
            } else if (_reducer.const_var.b_s_c_n.splitName == "garageRollUpDoor") {
              _reducer.const_var.b_s_c_n.posYpoint = NewDoorName[1] - 0.7;
              _reducer.const_var.b_s_c_n.negYpoint = _reducer.const_var.b_s_c_n.position.y;
            } else {
              _reducer.const_var.b_s_c_n.posYpoint = NewDoorName[1] - 0.4;
              _reducer.const_var.b_s_c_n.negYpoint = _reducer.const_var.b_s_c_n.position.y;
            }

            if (_reducer.const_var.b_s_c_n.position.x > 0) {
              var negVal = _reducer.const_var.b_s_c_n.position.x - NewDoorName[0] / 2;
              var posVal = _reducer.const_var.b_s_c_n.position.x + NewDoorName[0] / 2;
              _reducer.const_var.b_s_c_n.NegPoint = negVal;
              _reducer.const_var.b_s_c_n.PosPoint = posVal;
            } else {
              var negVal = _reducer.const_var.b_s_c_n.position.x - NewDoorName[0] / 2;
              var posVal = _reducer.const_var.b_s_c_n.position.x + NewDoorName[0] / 2;
              _reducer.const_var.b_s_c_n.NegPoint = negVal;
              _reducer.const_var.b_s_c_n.PosPoint = posVal;
            }
          } else if (_reducer.const_var.b_s_c_n.pos == "left" || _reducer.const_var.b_s_c_n.pos == "right") {
            var NewDoorName = _reducer.const_var.b_s_c_n.actual_val.split("X");

            if (_reducer.const_var.b_s_c_n.splitName == "window") {
              _reducer.const_var.b_s_c_n.posYpoint = _reducer.const_var.b_s_c_n.position.y + NewDoorName[1] / 2;
              _reducer.const_var.b_s_c_n.negYpoint = _reducer.const_var.b_s_c_n.position.y - NewDoorName[1] / 2;
            } else if (_reducer.const_var.b_s_c_n.splitName == "garageRollUpDoor") {
              _reducer.const_var.b_s_c_n.posYpoint = NewDoorName[1] - 0.7;
              _reducer.const_var.b_s_c_n.negYpoint = _reducer.const_var.b_s_c_n.position.y;
            } else {
              _reducer.const_var.b_s_c_n.posYpoint = NewDoorName[1] - 0.4;
              _reducer.const_var.b_s_c_n.negYpoint = _reducer.const_var.b_s_c_n.position.y;
            }

            if (_reducer.const_var.b_s_c_n.position.z > 0) {
              var negVal = _reducer.const_var.b_s_c_n.position.z - NewDoorName[0] / 2;
              var posVal = _reducer.const_var.b_s_c_n.position.z + NewDoorName[0] / 2;
              _reducer.const_var.b_s_c_n.NegPoint = negVal;
              _reducer.const_var.b_s_c_n.PosPoint = posVal;
            } else {
              var negVal = _reducer.const_var.b_s_c_n.position.z - NewDoorName[0] / 2;
              var posVal = _reducer.const_var.b_s_c_n.position.z + NewDoorName[0] / 2;
              _reducer.const_var.b_s_c_n.NegPoint = negVal;
              _reducer.const_var.b_s_c_n.PosPoint = posVal;
            }
          }

          var new11 = _reducer.const_var.b_s_c_n.position.z + sp_Val;
          var new22 = _reducer.const_var.b_s_c_n.position.z - sp_Val; //console.log("rahul",d_p_j_n[params.p_d]);

          var chkLimit = "";
          _reducer.const_var.d_w_a_r_N_w[_reducer.const_var.b_s_c_n.uniqueId] = [];

          var headerBar = _reducer.const_var.scene.getObjectByName("headerBar");

          var scale = "";
        }

        if (null != _m) {
          var doorSide = _reducer.const_var.b_s_c_n.pos;

          if (_reducer.const_var.b_s_c_n.BarnPos == "BarnLeft") {
            doorSide = "ltleft";
          } else if (_reducer.const_var.b_s_c_n.BarnPos == "BarnRight") {
            doorSide = "ltright";
          } else if (_reducer.const_var.b_s_c_n.BarnPos == "FrontL") {
            doorSide = "frontl";
          } else if (_reducer.const_var.b_s_c_n.BarnPos == "FrontR") {
            doorSide = "frontr";
          } else if (_reducer.const_var.b_s_c_n.BarnPos == "BackL") {
            doorSide = "backl";
          } else if (_reducer.const_var.b_s_c_n.BarnPos == "BackR") {
            doorSide = "backr";
          } else if (_reducer.const_var.b_s_c_n.BarnPos == "LeftS") {
            doorSide = "lefts";
          } else if (_reducer.const_var.b_s_c_n.BarnPos == "RightS") {
            doorSide = "rights";
          }

          if ("Trim" != _reducer.const_var.b_s_c_n.name.substring(0, 4) && "Plan" != _reducer.const_var.b_s_c_n.name.substring(0, 4)) {
            doorPlacement(doorSide, _reducer.const_var.b_s_c_n.id); //console.log(chk_place,m,b_s_c_n.userData);

            if (1) {
              if (_reducer.params.p_b_t == "2" || _reducer.params.add_left_lean == true || _reducer.params.add_right_lean == true) {
                if (_m["x"] > 0 && (_reducer.params.p_b_c_b_r == "Close" || _reducer.params.add_storage_check_right == true)) {
                  _m["x"] = _m["x"] + 0.2;
                }

                if (_m["x"] < 0 && (_reducer.params.p_b_c_b_l == "Close" || _reducer.params.add_storage_check == true)) {
                  _m["x"] = _m["x"] - 0.2;
                }
              }

              if ((_reducer.params.add_storage_check == true || _reducer.params.add_storage_check_right == true) && (_reducer.const_var.b_s_c_n.BarnPos == "RightS" || _reducer.const_var.b_s_c_n.BarnPos == "LeftS")) {
                if (_reducer.const_var.TypeEnum[_reducer.params.p_r_s] != "Regular") {
                  if (_m["z"] > 0) {
                    //m["z"] = m["z"] + 0.3;
                    if (_reducer.params.leantoAlignmentRight == 1 || _reducer.params.leantoAlignmentLeft == 1) {
                      _m["z"] = _m["z"] - 0.25;
                    }

                    if (_reducer.params.leantoAlignmentRight == 2 || _reducer.params.leantoAlignmentLeft == 2) {
                      _m["z"] = _m["z"] + 0.3; // + 0.25;// - 0.4;
                    }

                    if (_reducer.params.leantoAlignmentRight == 3 || _reducer.params.leantoAlignmentLeft == 3) {
                      _m["z"] = _m["z"] + 0.3;
                    }
                  } else {
                    if (_reducer.params.leantoAlignmentRight == 1 || _reducer.params.leantoAlignmentLeft == 1) {
                      _m["z"] = _m["z"] - 0.25;
                    }

                    if (_reducer.params.leantoAlignmentRight == 2 || _reducer.params.leantoAlignmentLeft == 2) {
                      _m["z"] = _m["z"] + 0.3; // + 0.25;
                    }

                    if (_reducer.params.leantoAlignmentRight == 3 || _reducer.params.leantoAlignmentLeft == 3) {
                      _m["z"] = _m["z"] + 0.3; // - 0.15;
                    } //m["z"] = m["z"] - 0.25;

                  }
                } else {
                  if (_m["z"] > 0) {//m["z"] = m["z"] + 0.3;
                  } else {//m["z"] = m["z"] - 0.25;
                  }
                }
              }

              _reducer.const_var.b_s_c_n.position.copy(_m);
            }
          } else {
            if (_reducer.const_var.b_s_c_n.pos == "front" || _reducer.const_var.b_s_c_n.pos == "back") {
              if (_reducer.const_var.b_s_c_n.BarnPos == "front" || _reducer.const_var.b_s_c_n.BarnPos == "back") {
                if (_m["z"] > 0) {//m["z"] = m["z"]+0.2;
                } else {
                  _m["z"] = _m["z"] - 0.03;
                }

                if (_reducer.params.p_u_c == true && _reducer.const_var.b_s_c_n.pos == "front") {
                  if (_m["z"] > 0) {
                    _m["z"] = _m["z"] - 0.25;
                  } else {
                    _m["z"] = _m["z"] - 0.2;
                  }
                }
              }

              if (_reducer.const_var.b_s_c_n.BarnPos == "FrontL" || _reducer.const_var.b_s_c_n.BarnPos == "FrontR") {
                if (_m["z"] > 0) {//m["z"] = m["z"]+0.2;
                } else {
                  _m["z"] = _m["z"] - 0.03;
                }
              }

              if (_reducer.const_var.b_s_c_n.BarnPos == "RightS" || _reducer.const_var.b_s_c_n.BarnPos == "LeftS") {
                if (_m["z"] > 0) {
                  _m["z"] = _m["z"] - 0.3;
                } else {
                  _m["z"] = _m["z"] - 0.25;
                }
              }

              if (_reducer.params.p_u_c == true && _reducer.const_var.b_s_c_n.pos == "back") {
                _m["z"] = _m["z"] - 0.03;
              }
            } else {
              if (_m["x"] > 0) {
                _m["x"] = _reducer.const_var.TypeEnum[_reducer.params.p_r_s] == "Regular" ? _m["x"] : _m["x"] - 0.15;
              } else {
                _m["x"] = _reducer.const_var.TypeEnum[_reducer.params.p_r_s] == "Regular" ? _m["x"] : _m["x"] + 0.15;
              }

              if (_reducer.params.p_b_t == "2" || _reducer.params.add_left_lean == true || _reducer.params.add_right_lean == true) {
                if (_m["x"] > 0 && (_reducer.params.p_b_c_b_r == "Close" || _reducer.params.add_storage_check_right == true)) {
                  _m["x"] = _reducer.const_var.TypeEnum[_reducer.params.p_r_s] == "Regular" ? _m["x"] : _m["x"] + 0.3;
                }

                if (_m["x"] < 0 && (_reducer.params.p_b_c_b_l == "Close" || _reducer.params.add_storage_check == true)) {
                  _m["x"] = _reducer.const_var.TypeEnum[_reducer.params.p_r_s] == "Regular" ? _m["x"] : _m["x"] - 0.3;
                }
              }
            }

            _m["y"] = _m["y"] + (_reducer.const_var.b_s_c_n.actual_val.split("X")[1] / 2 - _reducer.const_var.b_s_c_n.actual_val.split("X")[1] / 10 + 0.6); //const_var.b_s_c_n.position.copy(m);

            doorPlacement(doorSide, _reducer.const_var.b_s_c_n.id);

            if (1) {
              _reducer.const_var.b_s_c_n.position.copy(_m);
            } else { }
          }
        }
      }
    } else if (0 == a.button) {
      var n = _reducer.const_var.raycaster.intersectObject(_reducer.const_var.ground);

      var m = n[0].point.sub(_reducer.const_var.offset);

      _reducer.const_var.b_s_c_n.position.copy(m);
    }

    if ("Driveway" == _reducer.const_var.b_s_c_n.name) {
      var q = m["z"] * -1 - _reducer.params.p_w / 2;
      var r = m["x"] - _reducer.params.p_d / 2;
      var s = m["z"] - _reducer.params.p_w / 2;
      var t = m["x"] * -1 - _reducer.params.p_d / 2;
      var u = Math.min(q, r, s, t);
      var l;

      if (q == u) {
        _reducer.const_var.b_s_c_n.rotation.y = 0;
        l = 1;
      } else if (r == u) {
        _reducer.const_var.b_s_c_n.rotation.y = Math.PI / -2;
        l = 2;
      } else if (s == u) {
        _reducer.const_var.b_s_c_n.rotation.y = Math.PI / 1;
        l = 3;
      } else if (t == u) {
        _reducer.const_var.b_s_c_n.rotation.y = Math.PI / 2;
        l = 4;
      }

      if (_reducer.params.p_w >= 19 && (1 == l || 3 == l)) var posX = Math.min(Math.max(m["x"], _reducer.params.p_w / -2 + 9.5), _reducer.params.p_w / 2 - 9.5); else posX = Math.min(Math.max(m["x"], _reducer.params.p_w / -2), _reducer.params.p_w / 2);
      if (_reducer.params.p_d >= 19 && (2 == l || 4 == l)) var posZ = Math.min(Math.max(m["z"], _reducer.params.p_d / -2 + 9.5), _reducer.params.p_d / 2 - 9.5); else posZ = Math.min(Math.max(m["z"], _reducer.params.p_d / -2), _reducer.params.p_d / 2);

      _reducer.const_var.b_s_c_n.position.set(posX, 0, posZ);
    }
  } //setTimeout(function(){ ontouchend1(a);}, 1000);

}

function onDocumentMouseDown(a) { }

function onDocumentMouseMove(a) { }

function onDocumentMouseUp() { }

var doorPlacement = function doorPlacement(l, drId) { };

exports.doorPlacement = doorPlacement;

var prntLRdistNew = function prntLRdistNew(doorpos, ind, chpos) { };

exports.prntLRdistNew = prntLRdistNew;

var showhidecrossBracing = function showhidecrossBracing(l) { };

exports.showhidecrossBracing = showhidecrossBracing;

var editComponent = function editComponent(trimdoor, id, doorname, coomandoorType, doortype) {
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

exports.editComponent = editComponent;

var RmComtFmLtgDrComp = function RmComtFmLtgDrComp(trimdoor, Val1, Val, unique, coomandoorType, Type) {
  var wallSide = "";

  if (Type != "CustomFrameout") {
    _reducer.params.f_r_m_o_t = "Select";
    _reducer.params.f_r_m_o_t1 = "Select";
  }

  for (var i = 0; i < _reducer.const_var.b_d_g_b_O_c.length; i++) {
    if ("b_B_g_B" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t1Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t2Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t5Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t6Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t3Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t4Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t7Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t8Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && false == _reducer.const_var.b_d_g_b_O_c[i].name.includes("-EDIT") && false == _reducer.const_var.b_d_g_b_O_c[i].name.includes("-DELETE")) {
      if (_reducer.const_var.b_d_g_b_O_c[i].uniqueId == Val) {
        wallSide = _reducer.const_var.b_d_g_b_O_c[i].BarnPos.toLowerCase();
        _reducer.params.UpdatedDoorPosOnEdit = _reducer.const_var.b_d_g_b_O_c[i].BarnPos;
        _reducer.params.DoorPosOnEdit = _reducer.const_var.b_d_g_b_O_c[i].position;
        _reducer.params.DoorRotOnEdit = _reducer.const_var.b_d_g_b_O_c[i].rotation.y;
        _reducer.params.DoorLocOnEdit = _reducer.const_var.b_d_g_b_O_c[i].pos;
        _reducer.const_var.b_d_g_b_O_c[i].visible = false;
        _reducer.params[_reducer.const_var.b_d_g_b_O_c[i].name.replace("-clone", "") + "Qty"]--;

        _reducer.const_var.scene.remove(_reducer.const_var.b_d_g_b_O_c[i]);

        if (_reducer.const_var.b_d_g_b_O_c[i].splitName == "Trimkit") {
          _reducer.const_var.b_d_g_b_O_c.splice(i, 1);
        }

        if (wallSide == "barnleft") {
          wallSide = "ltleft";
        } else if (wallSide == "barnright") {
          wallSide = "ltright";
        } //ArrowNDistance.checkNewDoorPlace(wallSide.toLowerCase());

      }
    }
  } // for(var i=0;i<const_var.ManageDoorArrar[params.DoorLocOnEdit].length;i++)
  // {
  //     if(const_var.ManageDoorArrar[params.DoorLocOnEdit][i].uniqueId == Val)
  //     {
  //         const_var.ManageDoorArrar[params.DoorLocOnEdit].splice(i, 1);
  //     }
  // }


  for (var i = 0; i < _reducer.const_var.b_d_g_b_O_cN.length; i++) {
    if (_reducer.const_var.b_d_g_b_O_cN[i].uniqueId == Val) {
      _reducer.const_var.b_d_g_b_O_cN.splice(i, 1);
    }
  }

  if (wallSide != "") {
    for (var i = 0; i < _reducer.const_var.ManageGlobalComponent[wallSide].length; i++) {
      if (_reducer.const_var.ManageGlobalComponent[wallSide][i].uniqueId === Val) {
        _reducer.const_var.ManageGlobalComponent[wallSide].splice(i, 1); //ArrowNDistance.checkNewDoorPlace(wallSide.toLowerCase());

      }
    }

    for (var i = 0; i < _reducer.const_var.ManageDoorArrar[wallSide].length; i++) {
      if (_reducer.const_var.ManageDoorArrar[wallSide][i].uniqueId == Val) {
        _reducer.const_var.ManageDoorArrar[wallSide].splice(i, 1);
      }
    }
  }

  for (var i = 0; i <= _reducer.const_var.d_w_a_r.length - 1; i++) {
    if (_reducer.const_var.d_w_a_r[i].uniqueId == Val) {
      var indexNew = chk_order_data_door(_reducer.const_var.entry_points, Val);

      if (indexNew != null) {
        _reducer.const_var.entry_points.splice(indexNew, 1);
      }

      _reducer.const_var.d_w_a_r.splice(i, 1);
    }
  }

  for (var i = 0; i <= _reducer.const_var.H_d_l_D_r_ar["front"].length - 1; i++) {
    if (_reducer.const_var.H_d_l_D_r_ar["front"][i] == Val) {
      _reducer.const_var.H_d_l_D_r_ar["front"].splice(i, 1);
    }
  }

  for (var i = 0; i <= _reducer.const_var.H_d_l_D_r_ar["back"].length - 1; i++) {
    if (_reducer.const_var.H_d_l_D_r_ar["back"][i] == Val) {
      _reducer.const_var.H_d_l_D_r_ar["back"].splice(i, 1);
    }
  } //const_var.H_d_l_D_r_ar["front"].splice(const_var.H_d_l_D_r_ar["front"].length-1, 1);


  _reducer.const_var.c_k_p_d = true;

  if (trimdoor == "" || _reducer.params.trimkit == false) {
    if (coomandoorType == "garage") {
      if (Type == "CustomFrameout") {
        if (Val1.indexOf("_Frameout") == -1 && _reducer.const_var.editComponentDimension != "CustomGarageSize") {
          Val1 = Val1 + "_Frameout";
        } // var splitval1 = Val1.split("_");
        // var splitval = splitval1[0].split("X");
        // params.f_r_m_o_t = splitval[0];
        // params.f_r_m_o_t1 = splitval[1];


        _reducer.params.p_a_g_r_u_d = Val1;
        _reducer.params.doorType = Type;
      } else {
        _reducer.params.p_a_g_r_u_d = Val1;
        _reducer.params.doorType = Type;
      }

      _reducer.const_var.editComponentDimension = _reducer.params.p_a_g_r_u_d;

      if (_reducer.const_var.editComponentDimension == "CustomGarageSize") {
        _reducer.params.customW = _reducer.params.customW < 5 ? 5 : _reducer.params.customW;
        _reducer.params.customH = _reducer.params.customH < 5 ? 5 : _reducer.params.customH;
      }

      if (Type == "CustomFrameout") {
        _reducer.params.p_a_g_r_u_d = _reducer.const_var.editComponentDimension == "CustomGarageSize" ? _reducer.params.customW + "X" + _reducer.params.customH + "_Frameout" : _reducer.params.p_a_g_r_u_d;

        var splitval1 = _reducer.params.p_a_g_r_u_d.split("_");

        var splitval = splitval1[0].split("X");
        _reducer.params.f_r_m_o_t = splitval[0];
        _reducer.params.f_r_m_o_t1 = splitval[1];
        _reducer.params.doorType = Type;
      } else {
        _reducer.params.p_a_g_r_u_d = _reducer.const_var.editComponentDimension == "CustomGarageSize" ? _reducer.params.customW + "X" + _reducer.params.customH : _reducer.params.p_a_g_r_u_d;
      }

      aDw("garageRollUpDoor_" + _reducer.params.p_a_g_r_u_d, _reducer.params.p_a_g_r_u_d);
    }

    if (coomandoorType == "door") {
      _reducer.params.p_d_c = Val1;
      _reducer.params.doorType = Type;
      _reducer.const_var.editComponentDimension = _reducer.params.p_d_c;

      if (_reducer.const_var.editComponentDimension == "CustomGarageSize") {
        _reducer.params.customW = _reducer.params.customW < 5 ? 5 : _reducer.params.customW;
        _reducer.params.customH = _reducer.params.customH < 5 ? 5 : _reducer.params.customH;
      }

      if (Type == "WalkFrameout") {
        _reducer.params.p_d_c = _reducer.const_var.editComponentDimension == "CustomGarageSize" ? _reducer.params.customW + "X" + _reducer.params.customH + "_Frameout" : _reducer.params.p_d_c;
      } else {
        _reducer.params.p_d_c = _reducer.const_var.editComponentDimension == "CustomGarageSize" ? _reducer.params.customW + "X" + _reducer.params.customH : _reducer.params.p_d_c;
      }

      aDw("walkDoorSolid" + _reducer.params.p_d_c, _reducer.params.p_d_c); //aDw(Val1)
    }

    if (coomandoorType == "window") {
      _reducer.params.p_w_cc = Val1;
      _reducer.params.doorType = Type;
      _reducer.const_var.editComponentDimension = _reducer.params.p_w_cc;

      if (_reducer.const_var.editComponentDimension == "CustomGarageSize") {
        _reducer.params.customW = _reducer.params.customW < 5 ? 5 : _reducer.params.customW;
        _reducer.params.customH = _reducer.params.customH < 5 ? 5 : _reducer.params.customH;
      }

      if (Type == "WindowsFrameout") {
        _reducer.params.p_w_cc = _reducer.const_var.editComponentDimension == "CustomGarageSize" ? _reducer.params.customW + "X" + _reducer.params.customH + "_Frameout" : _reducer.params.p_w_cc;
      } else {
        _reducer.params.p_w_cc = _reducer.const_var.editComponentDimension == "CustomGarageSize" ? _reducer.params.customW + "X" + _reducer.params.customH : _reducer.params.p_w_cc;
      }

      aDw("window" + _reducer.params.p_w_cc, _reducer.params.p_w_cc);
    }
  } else {
    _reducer.params.p_a_g_r_u_d = Val1;
    _reducer.params.doorType = Type;
    _reducer.const_var.editComponentDimension = _reducer.params.p_a_g_r_u_d;

    if (_reducer.const_var.editComponentDimension == "CustomGarageSize") {
      _reducer.params.customW = _reducer.params.customW < 5 ? 5 : _reducer.params.customW;
      _reducer.params.customH = _reducer.params.customH < 5 ? 5 : _reducer.params.customH;
    }

    if (Type == "CustomFrameout") {
      if (Val1.indexOf("_Frameout") == -1 && _reducer.const_var.editComponentDimension != "CustomGarageSize") {
        Val1 = Val1 + "_Frameout";
      }

      _reducer.params.p_a_g_r_u_d = _reducer.const_var.editComponentDimension == "CustomGarageSize" ? _reducer.params.customW + "X" + _reducer.params.customH + "_Frameout" : Val1;

      var splitval1 = _reducer.params.p_a_g_r_u_d.split("_");

      var splitval = splitval1[0].split("X");
      _reducer.params.f_r_m_o_t = splitval[0];
      _reducer.params.f_r_m_o_t1 = splitval[1];
      _reducer.params.doorType = Type;
    } else {
      _reducer.params.p_a_g_r_u_d = _reducer.const_var.editComponentDimension == "CustomGarageSize" ? _reducer.params.customW + "X" + _reducer.params.customH : _reducer.params.p_a_g_r_u_d;
    } //params.p_a_g_r_u_d = (const_var.editComponentDimension=="CustomGarageSize")?params.customW+"X"+params.customH:params.p_a_g_r_u_d;


    TrimLoad("Trimkit_" + _reducer.params.p_a_g_r_u_d, _reducer.params.p_a_g_r_u_d);

    if (_reducer.params.rWindowUpFrame.length > 0) {//outFrameFromWall.frameOutWindowFromWall("right");
    }

    if (_reducer.params.lWindowUpFrame.length > 0) {//outFrameFromWall.frameOutWindowFromWall("left");
    }
  }

  var sp_Val = _reducer.const_var.b_s_c_n.actual_val.split("X")[0] / 2;
  var new11 = _reducer.const_var.b_s_c_n.position.z + sp_Val;
  var new22 = _reducer.const_var.b_s_c_n.position.z - sp_Val;

  if (_reducer.const_var.b_s_c_n.BarnPos === "left" || _reducer.const_var.b_s_c_n.BarnPos === "right") {
    for (var i = 0; i < _reducer.const_var.makeArrayForComponent[_reducer.params.p_d].length; i++) {
      var val = _reducer.const_var.makeArrayForComponent[_reducer.params.p_d][i];

      if (Math.floor(val) <= Math.round(new11) && Math.floor(val) >= Math.round(new22)) {
        if (_reducer.const_var.d_w_a_r_N_w[_reducer.const_var.doorUniqueId] === undefined) {
          _reducer.const_var.d_w_a_r_N_w[_reducer.const_var.doorUniqueId] = [];
        }

        if (wallSide === "left") _reducer.const_var.d_w_a_r_N_w[_reducer.const_var.doorUniqueId].push({
          doorplace: "TrussCloneL" + i,
          index: i
        }); else if (wallSide === "right") _reducer.const_var.d_w_a_r_N_w[_reducer.const_var.doorUniqueId].push({
          doorplace: "TrussCloneL" + i,
          index: i
        });
      }
    }
  } else if (wallSide === "left" && _reducer.params.b_h_t2 && _reducer.const_var.b_s_c_n.BarnPos === "BarnLeft") {
    for (var i = 0; i < _reducer.const_var.makeArrayForComponent_Barn[_reducer.params.lean_p_d].length; i++) {
      var val = _reducer.const_var.makeArrayForComponent_Barn[_reducer.params.lean_p_d][i];

      if (Math.floor(val) <= Math.round(new11) && Math.floor(val) >= Math.round(new22)) {
        if (_reducer.const_var.d_w_a_r_N_w[_reducer.const_var.doorUniqueId] === undefined) {
          _reducer.const_var.d_w_a_r_N_w[_reducer.const_var.doorUniqueId] = [];
        }

        _reducer.const_var.d_w_a_r_N_w[_reducer.const_var.doorUniqueId].push({
          doorplace: "TrussCloneLeanL" + i,
          index: i
        });
      }
    }
  } else if (wallSide === "right" && _reducer.params.b_h_t4 && _reducer.const_var.b_s_c_n.BarnPos === "BarnRight") {
    for (var i = 0; i < _reducer.const_var.makeArrayForComponent_BarnR[_reducer.params.leanR_p_d].length; i++) {
      var val = _reducer.const_var.makeArrayForComponent_BarnR[_reducer.params.leanR_p_d][i];

      if (Math.floor(val) <= Math.round(new11) && Math.floor(val) >= Math.round(new22)) {
        if (_reducer.const_var.d_w_a_r_N_w[_reducer.const_var.doorUniqueId] === undefined) {
          _reducer.const_var.d_w_a_r_N_w[_reducer.const_var.doorUniqueId] = [];
        }

        _reducer.const_var.d_w_a_r_N_w[_reducer.const_var.doorUniqueId].push({
          doorplace: "TrussCloneLeanR" + i,
          index: i
        });
      }
    }
  }

  cuBuilding.cP();
};

exports.RmComtFmLtgDrComp = RmComtFmLtgDrComp;

var setLegColor = function setLegColor(leg, color) {
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

var RmComtFmLtgDr = function RmComtFmLtgDr(Val, unique, Posi, BarnPos) {
  var wallSide = "";
  var headerBarIndex = "";

  if (BarnPos != "BarnRight" && BarnPos != "BarnLeft") {
    TestNew(Posi);
    Test(Posi); //autoRotateBuilding(Posi.charAt(0).toUpperCase() + Posi.slice(1));
  }

  if (_reducer.const_var.doorUniqueId != 0 && Val != _reducer.const_var.doorUniqueId) {
    Val = unique = _reducer.const_var.doorUniqueId;
  }

  for (var i = 0; i < _reducer.const_var.b_d_g_b_O_c.length; i++) {
    if ("b_B_g_B" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t1Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t2Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t5Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t6Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t3Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t4Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t7Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t8Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && false == _reducer.const_var.b_d_g_b_O_c[i].name.includes("-EDIT") && false == _reducer.const_var.b_d_g_b_O_c[i].name.includes("-DELETE")) {
      if (_reducer.const_var.b_d_g_b_O_c[i].uniqueId == Val) {
        wallSide = _reducer.const_var.b_d_g_b_O_c[i].BarnPos.toLowerCase();
        Posi = Posi == "" ? _reducer.const_var.b_d_g_b_O_c[i].pos : Posi;
        BarnPos = BarnPos == "" ? _reducer.const_var.b_d_g_b_O_c[i].BarnPos : BarnPos;
        _reducer.const_var.b_d_g_b_O_c[i].visible = false;
        _reducer.const_var.b_d_g_b_O_c[i].children.visible = false;
        _reducer.params[_reducer.const_var.b_d_g_b_O_c[i].name.replace("-clone", "") + "Qty"]--;

        _reducer.const_var.scene.remove(_reducer.const_var.b_d_g_b_O_c[i]);

        if (_reducer.const_var.b_d_g_b_O_c[i].splitName == "Trimkit") {
          _reducer.const_var.b_d_g_b_O_c.splice(i, 1); //const_var.b_d_g_b_O_c.splice(0, 1);const_var.b_d_g_b_O_c.splice(0, 1);

        }

        if (wallSide == "barnleft") {
          wallSide = "ltleft";
        } else if (wallSide == "barnright") {
          wallSide = "ltright";
        } //ArrowNDistance.checkNewDoorPlace(wallSide.toLowerCase());

      }
    }
  }

  for (var i = 0; i < _reducer.const_var.b_d_g_b_O_cN.length; i++) {
    if (_reducer.const_var.b_d_g_b_O_cN[i].uniqueId == Val) {
      _reducer.const_var.b_d_g_b_O_cN.splice(i, 1);
    }
  }

  for (var i = 0; i < _reducer.const_var.ManageDoorArrar[wallSide].length; i++) {
    var len = _reducer.const_var.makeArrayForComponent[_reducer.params.p_d].length;

    if (_reducer.const_var.ManageDoorArrar[wallSide][i].uniqueId == Val) {
      var componentName = _reducer.const_var.ManageDoorArrar[wallSide][i].splitName;

      if (wallSide == "BarnLeft") {
        wallSide = "ltleft";
        len = _reducer.const_var.makeArrayForComponent_Barn[_reducer.params.lean_p_d].length;
      } else if (wallSide == "BarnRight") {
        wallSide = "ltright";
        len = _reducer.const_var.makeArrayForComponent_BarnR[_reducer.params.leanR_p_d].length;
      }

      if (componentName === "walkDoorSolid") {
        for (var j = 0; j < len; j++) {
          if (wallSide === "left") {
            _reducer.const_var.scene.getObjectByName("TrussCloneL" + j).children[0].position.x = 0.15;
            setLegColor(_reducer.const_var.scene.getObjectByName("TrussCloneL" + j).children[0], "0xbbbbbb");
          }

          if (wallSide === "right") {
            _reducer.const_var.scene.getObjectByName("TrussCloneR" + j).children[373].position.x = 0.15;
            setLegColor(_reducer.const_var.scene.getObjectByName("TrussCloneR" + j).children[373], "0xbbbbbb");
          }

          if (wallSide === "ltleft") {
            _reducer.const_var.scene.getObjectByName("TrussCloneLeanL" + j).children[0].position.x = 0.15;
            setLegColor(_reducer.const_var.scene.getObjectByName("TrussCloneLeanL" + j).children[0], "0xbbbbbb");
          }

          if (wallSide === "ltright") {
            _reducer.const_var.scene.getObjectByName("TrussCloneLeanR" + j).children[16].position.x = 0.15;
            setLegColor(_reducer.const_var.scene.getObjectByName("TrussCloneLeanR" + j).children[16], "0xbbbbbb");
          }
        }

        if (wallSide == "left") {
          _reducer.params.lDoorTopFrame[i].visible = false;
          _reducer.params.lDoorLeftFrame[i].visible = false;
          _reducer.params.lDoorRightFrame[i].visible = false;
          _reducer.params.lDoorLeftBar[i].visible = false;
          _reducer.params.lDoorRightBar[i].visible = false;
        }

        if (wallSide == "right") {
          _reducer.params.rDoorTopFrame[i].visible = false;
          _reducer.params.rDoorLeftFrame[i].visible = false;
          _reducer.params.rDoorRightFrame[i].visible = false;
          _reducer.params.rDoorLeftBar[i].visible = false;
          _reducer.params.rDoorRightBar[i].visible = false;
        }
      } else {
        if (wallSide == "left") {
          _reducer.params.lHeaderbar[i].visible = false;
          _reducer.params.lDoorLeftFrame[i].visible = false;
          _reducer.params.lDoorRightFrame[i].visible = false;
          _reducer.params.lDLeftBaseRail[i].visible = false;
          _reducer.params.lDRightBaseRail[i].visible = false;
        }

        if (wallSide == "right") {
          _reducer.params.rHeaderbar[i].visible = false;
          _reducer.params.rDoorLeftFrame[i].visible = false;
          _reducer.params.rDoorRightFrame[i].visible = false;
          _reducer.params.rDLeftBaseRail[i].visible = false;
          _reducer.params.rDRightBaseRail[i].visible = false;
        }

        if (wallSide === "ltleft") {
          _reducer.params.ltlHeaderbar[i].visible = false;
          if (_reducer.params.ltlBaseRail[i]) _reducer.params.ltlBaseRail[i].visible = false;
          _reducer.params.ltlDoorLeftFrame[i].visible = false;
          _reducer.params.ltlDoorRightFrame[i].visible = false;
        }

        if (wallSide === "ltright") {
          _reducer.params.ltrHeaderbar[i].visible = false;
          if (_reducer.params.ltrBaseRail[i]) _reducer.params.ltrBaseRail[i].visible = false;
          _reducer.params.ltrDoorLeftFrame[i].visible = false;
          _reducer.params.ltrDoorRightFrame[i].visible = false;
        }
      }

      _reducer.const_var.ManageDoorArrar[wallSide].splice(i, 1);

      if (_reducer.const_var.ManageDoorArrar[wallSide].length > 0) {//cutBsRail.cutBaseRails(wallSide)
      } else {
        if (wallSide === "left") {
          _reducer.const_var.scene.getObjectByName("baseRailLeft").visible = true;
        }

        if (wallSide = "right") {
          _reducer.const_var.scene.getObjectByName("baseRailRight").visible = true;
        }
      }
    }
  }

  for (var i = 0; i < _reducer.const_var.ManageWindowArrar[wallSide].length; i++) {
    var len = _reducer.const_var.makeArrayForComponent[_reducer.params.p_d].length;

    if (_reducer.const_var.ManageWindowArrar[wallSide][i].uniqueId == Val) {
      if (wallSide === "BarnLeft") {
        wallSide = "ltleft";
        len = _reducer.const_var.makeArrayForComponent_Barn[_reducer.params.lean_p_d].length;
      } else if (wallSide === "BarnRight") {
        wallSide = "ltright";
        len = _reducer.const_var.makeArrayForComponent_BarnR[_reducer.params.leanR_p_d].length;
      }

      if (_reducer.const_var.ManageWindowArrar[wallSide][i].splitName === "window") {
        for (var j = 0; j < len; j++) {
          if (wallSide === "left") {
            _reducer.const_var.scene.getObjectByName("TrussCloneL" + j).children[0].position.x = 0.15;
            setLegColor(_reducer.const_var.scene.getObjectByName("TrussCloneL" + j).children[0], "0xbbbbbb");
          }

          if (wallSide === "right") {
            _reducer.const_var.scene.getObjectByName("TrussCloneR" + j).children[373].position.x = 0.15;
            setLegColor(_reducer.const_var.scene.getObjectByName("TrussCloneR" + j).children[373], "0xbbbbbb");
          }

          if (wallSide === "ltleft" || wallSide === "BarnLeft") {
            _reducer.const_var.scene.getObjectByName("TrussCloneLeanL" + j).children[0].position.x = 0.15;
            setLegColor(_reducer.const_var.scene.getObjectByName("TrussCloneLeanL" + j).children[0], "0xbbbbbb");
            _reducer.const_var.scene.getObjectByName("TrussCloneLeanL" + i).children[0].visible = _reducer.const_var.TypeEnum[_reducer.params.p_r_s] !== "Regular";
          }

          if (wallSide === "ltright" || wallSide === "BarnRight") {
            _reducer.const_var.scene.getObjectByName("TrussCloneLeanR" + j).children[16].position.x = 0.15;
            setLegColor(_reducer.const_var.scene.getObjectByName("TrussCloneLeanR" + j).children[16], "0xbbbbbb");
            _reducer.const_var.scene.getObjectByName("TrussCloneLeanR" + i).children[16].visible = _reducer.const_var.TypeEnum[_reducer.params.p_r_s] !== "Regular";
          }
        }
      }

      _reducer.const_var.ManageWindowArrar[wallSide].splice(i, 1);

      if (wallSide === "left") {
        _reducer.params.lWindowUpFrame[i].visible = false;
        _reducer.params.lWindowBottomFrame[i].visible = false;
        _reducer.params.lWindowLeftFrame[i].visible = false;
        _reducer.params.lWindowRightFrame[i].visible = false;
        _reducer.params.lWindowLeftBar[i].visible = false;
        _reducer.params.lWindowRightBar[i].visible = false;
      }

      if (wallSide === "right") {
        _reducer.params.rWindowUpFrame[i].visible = false;
        _reducer.params.rWindowBottomFrame[i].visible = false;
        _reducer.params.rWindowLeftFrame[i].visible = false;
        _reducer.params.rWindowRightFrame[i].visible = false;
        _reducer.params.rWindowLeftBar[i].visible = false;
        _reducer.params.rWindowRightBar[i].visible = false;
      }
    }
  }

  for (var i = 0; i < _reducer.const_var.ManageGlobalComponent[wallSide].length; i++) {
    if (_reducer.const_var.ManageGlobalComponent[wallSide][i].uniqueId == Val) {
      var doorSide = _reducer.const_var.ManageGlobalComponent[wallSide][i].pos;

      if (_reducer.const_var.ManageGlobalComponent[wallSide][i].BarnPos == "BarnLeft") {
        doorSide = "ltleft";
      } else if (_reducer.const_var.ManageGlobalComponent[wallSide][i].BarnPos == "BarnRight") {
        doorSide = "ltright";
      }

      _reducer.const_var.ManageGlobalComponent[wallSide].splice(i, 1); //ArrowNDistance.checkNewDoorPlace(doorSide.toLowerCase());

    }
  }

  for (var i = 0; i <= _reducer.const_var.d_w_a_r.length - 1; i++) {
    if (_reducer.const_var.d_w_a_r[i].uniqueId == Val) {
      _reducer.const_var.d_w_a_r.splice(i, 1);
    }
  }

  _reducer.const_var.entry_points.map(function (val, i) {
    if (val.uniqueId == Val) {
      _reducer.const_var.entry_points.splice(i, 1);
    }
  });

  for (var i = 0; i < _reducer.const_var.entry_points.length; i++) { }

  for (var i = 0; i <= _reducer.const_var.H_d_l_D_r_ar["front"].length - 1; i++) {
    if (_reducer.const_var.H_d_l_D_r_ar["front"][i] == Val) {
      _reducer.const_var.H_d_l_D_r_ar["front"].splice(i, 1);
    }
  }

  for (var i = 0; i <= _reducer.const_var.H_d_l_D_r_ar["back"].length - 1; i++) {
    if (_reducer.const_var.H_d_l_D_r_ar["back"][i] == Val) {
      _reducer.const_var.H_d_l_D_r_ar["back"].splice(i, 1);
    }
  }

  UpdateLegPosAccordingtoWall(Val, Posi, BarnPos); //const_var.H_d_l_D_r_ar["front"].splice(const_var.H_d_l_D_r_ar["front"].length-1, 1);

  cuBuilding.cP();
  _reducer.const_var.showComponentEditBox = false;
  _reducer.params.wallPos = "Select";
};

exports.RmComtFmLtgDr = RmComtFmLtgDr;

var rEaEfWbW = function rEaEfWbW(object, val) {
  if (val == "all") {
    // for(var i=0;i<object.length;i++)
    for (var i = object.length - 1; i >= 0; i--) {
      if ("b_B_g_B" != object[i].name && "b_h_t1Bx" != object[i].name && "b_h_t2Bx" != object[i].name && "b_h_t5Bx" != object[i].name && "b_h_t6Bx" != object[i].name && "b_h_t3Bx" != object[i].name && "b_h_t4Bx" != object[i].name && "b_h_t7Bx" != object[i].name && "b_h_t7Bx" != object[i].name && "b_h_t8Bx" != object[i].name) {
        if (object[i].BarnPos == "front" || object[i].BarnPos == "back" || object[i].BarnPos == "left" || object[i].BarnPos == "right" || object[i].BarnPos == "FrontS") {
          _reducer.const_var.scene.remove(object[i]); //RmComtFmLtgDrbyw(object[i].uniqueId,object[i].uniqueId,object[i].pos,object[i].BarnPos);


          if (object[i] != undefined) {
            object[i].visible = false;
            _reducer.params[object[i].name.replace("-clone", "") + "Qty"]--; //const_var.scene.remove(object[i]);
          }

          RmComtFmLtgDrbyw(object[i].uniqueId, object[i].uniqueId, object[i].pos, object[i].BarnPos);
        }
      }
    }
  } else {
    // for(var i=0;i<object.length;i++)
    for (var i = object.length - 1; i >= 0; i--) {
      if ("b_B_g_B" != object[i].name && "b_h_t1Bx" != object[i].name && "b_h_t2Bx" != object[i].name && "b_h_t5Bx" != object[i].name && "b_h_t6Bx" != object[i].name && "b_h_t3Bx" != object[i].name && "b_h_t4Bx" != object[i].name && "b_h_t7Bx" != object[i].name && "b_h_t7Bx" != object[i].name && "b_h_t8Bx" != object[i].name) {
        if (object[i].BarnPos == val) {
          _reducer.const_var.scene.remove(object[i]); //RmComtFmLtgDrbyw(object[i].uniqueId,object[i].uniqueId,object[i].pos,object[i].BarnPos);


          if (object[i] != undefined) {
            object[i].visible = false;
            _reducer.params[object[i].name.replace("-clone", "") + "Qty"]--;

            _reducer.const_var.scene.remove(object[i]);
          }

          RmComtFmLtgDrbyw(object[i].uniqueId, object[i].uniqueId, object[i].pos, object[i].BarnPos);
        }
      }
    }
  }
};

exports.rEaEfWbW = rEaEfWbW;

var RmComtFmLtgDrbyw = function RmComtFmLtgDrbyw(Val, unique, Posi, BarnPos) {
  var wallSide = "";

  if (BarnPos != "BarnRight" && BarnPos != "BarnLeft") {
    TestNew(Posi);
    Test(Posi); //autoRotateBuilding(Posi.charAt(0).toUpperCase() + Posi.slice(1));
  } //for(var i=0;i<const_var.b_d_g_b_O_c.length;i++)


  for (var i = _reducer.const_var.b_d_g_b_O_c.length - 1; i >= 0; i--) {
    if ("b_B_g_B" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t1Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t2Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t5Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t6Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t3Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t4Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t7Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t8Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && false == _reducer.const_var.b_d_g_b_O_c[i].name.includes("-EDIT") && false == _reducer.const_var.b_d_g_b_O_c[i].name.includes("-DELETE")) {
      //console.log(const_var.b_d_g_b_O_c,const_var.b_d_g_b_O_c[i].uniqueId,Val);
      if (_reducer.const_var.b_d_g_b_O_c[i].uniqueId == Val) {
        wallSide = _reducer.const_var.b_d_g_b_O_c[i].BarnPos.toLowerCase();
        Posi = Posi == "" ? _reducer.const_var.b_d_g_b_O_c[i].pos : Posi;
        BarnPos = BarnPos == "" ? _reducer.const_var.b_d_g_b_O_c[i].BarnPos : BarnPos;
        _reducer.const_var.b_d_g_b_O_c[i].visible = false;
        _reducer.params[_reducer.const_var.b_d_g_b_O_c[i].name.replace("-clone", "") + "Qty"]--; //const_var.scene.remove(const_var.b_d_g_b_O_c[i]);

        if (_reducer.const_var.b_d_g_b_O_c[i].splitName == "Trimkit") {
          _reducer.const_var.b_d_g_b_O_c.splice(i, 1); //const_var.b_d_g_b_O_c.splice(0, 1);const_var.b_d_g_b_O_c.splice(0, 1);

        }

        _reducer.const_var.b_d_g_b_O_c.splice(i, 1);

        if (wallSide == "barnleft") {
          wallSide = "ltleft";
        } else if (wallSide == "barnright") {
          wallSide = "ltright";
        } //ArrowNDistance.checkNewDoorPlace(wallSide.toLowerCase());

      }
    }
  }

  for (var i = 0; i < _reducer.const_var.b_d_g_b_O_cN.length; i++) {
    if (_reducer.const_var.b_d_g_b_O_cN[i].uniqueId == Val) {
      _reducer.const_var.b_d_g_b_O_cN.splice(i, 1);
    }
  }

  for (var i = 0; i < _reducer.const_var.ManageDoorArrar[Posi].length; i++) {
    if (_reducer.const_var.ManageDoorArrar[Posi][i].uniqueId == Val) {
      _reducer.const_var.ManageDoorArrar[Posi].splice(i, 1);
    }
  }

  for (var i = 0; i < _reducer.const_var.ManageGlobalComponent[wallSide].length; i++) {
    if (_reducer.const_var.ManageGlobalComponent[wallSide][i].uniqueId == Val) {
      _reducer.const_var.ManageGlobalComponent[wallSide].splice(i, 1);
    }
  } //for(var i=0;i<=const_var.d_w_a_r.length-1;i++)


  for (var i = _reducer.const_var.d_w_a_r.length - 1; i >= 0; i--) {
    if (_reducer.const_var.d_w_a_r[i].uniqueId == Val) {
      var indexNew = chk_order_data_door(_reducer.const_var.entry_points, Val);

      if (indexNew != null) {
        _reducer.const_var.entry_points.splice(indexNew, 1);
      }

      _reducer.const_var.d_w_a_r.splice(i, 1);
    }
  }

  for (var i = 0; i <= _reducer.const_var.H_d_l_D_r_ar["front"].length - 1; i++) {
    if (_reducer.const_var.H_d_l_D_r_ar["front"][i] == Val) {
      _reducer.const_var.H_d_l_D_r_ar["front"].splice(i, 1);
    }
  }

  for (var i = 0; i <= _reducer.const_var.H_d_l_D_r_ar["back"].length - 1; i++) {
    if (_reducer.const_var.H_d_l_D_r_ar["back"][i] == Val) {
      _reducer.const_var.H_d_l_D_r_ar["back"].splice(i, 1);
    }
  }

  UpdateLegPosAccordingtoWall(Val, Posi, BarnPos); //const_var.H_d_l_D_r_ar["front"].splice(const_var.H_d_l_D_r_ar["front"].length-1, 1);

  cuBuilding.cP();
  _reducer.params.wallPos = "Select";
};

exports.RmComtFmLtgDrbyw = RmComtFmLtgDrbyw;

var LtgClAtn = function LtgClAtn(Val, Type, DoorType, Posi, iid) {
  //console.log(Val,Type,DoorType,Posi,iid,"Val,Type,DoorType,Posi,iid")
  for (var i = 0; i < _reducer.const_var.b_d_g_b_O_c.length; i++) {
    if ("b_B_g_B" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t1Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t2Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t5Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t6Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t3Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t4Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t7Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t8Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && false == _reducer.const_var.b_d_g_b_O_c[i].name.includes("-EDIT") && false == _reducer.const_var.b_d_g_b_O_c[i].name.includes("-DELETE")) {
      if (_reducer.const_var.b_d_g_b_O_c[i].uniqueId == iid) {
        var wallSide = _reducer.const_var.b_d_g_b_O_c[i].BarnPos;

        if (wallSide != "BarnRight" && wallSide != "BarnLeft") {
          TestNew(Posi);
          Test(Posi);
        }

        Val = _reducer.const_var.b_d_g_b_O_c[i].exactDoorDimension;
        _reducer.params.UpdatedDoorPosOnEdit = _reducer.const_var.b_d_g_b_O_c[i].BarnPos;
        _reducer.params.DoorPosOnEdit = _reducer.const_var.b_d_g_b_O_c[i].position;
        _reducer.params.DoorRotOnEdit = _reducer.const_var.b_d_g_b_O_c[i].rotation.y;
        _reducer.params.DoorLocOnEdit = _reducer.const_var.b_d_g_b_O_c[i].pos;
      }
    }
  } //params.DoorLocOnEdit = "";
  //cSbA(true);


  _reducer.params.f_r_m_o_t = "Select";
  _reducer.params.f_r_m_o_t1 = "Select";

  if (_reducer.params.trimkit == false) {
    if (DoorType == "garage") {
      if (Type == "CustomFrameout") {
        // var splitval1 = Val.split("_");
        // var splitval = splitval1[0].split("X");
        // params.f_r_m_o_t = splitval[0];
        // params.f_r_m_o_t1 = splitval[1];
        _reducer.params.p_a_g_r_u_d = Val;
        _reducer.params.doorType = Type;
      } else {
        _reducer.params.p_a_g_r_u_d = Val;
        _reducer.params.doorType = Type;
      }

      _reducer.const_var.editComponentDimension = _reducer.params.p_a_g_r_u_d;

      if (_reducer.const_var.editComponentDimension == "CustomGarageSize") {
        _reducer.params.customW = _reducer.params.customW < 5 ? 5 : _reducer.params.customW;
        _reducer.params.customH = _reducer.params.customH < 5 ? 5 : _reducer.params.customH;
      }

      if (Type == "CustomFrameout") {
        _reducer.params.p_a_g_r_u_d = _reducer.const_var.editComponentDimension == "CustomGarageSize" ? _reducer.params.customW + "X" + _reducer.params.customH + "_Frameout" : _reducer.params.p_a_g_r_u_d;

        var splitval1 = _reducer.params.p_a_g_r_u_d.split("_");

        var splitval = splitval1[0].split("X");
        _reducer.params.f_r_m_o_t = splitval[0];
        _reducer.params.f_r_m_o_t1 = splitval[1];
        _reducer.params.doorType = Type;
      } else {
        _reducer.params.p_a_g_r_u_d = _reducer.const_var.editComponentDimension == "CustomGarageSize" ? _reducer.params.customW + "X" + _reducer.params.customH : _reducer.params.p_a_g_r_u_d;
      }

      aDw("garageRollUpDoor_" + _reducer.params.p_a_g_r_u_d, _reducer.params.p_a_g_r_u_d);
    }

    if (DoorType == "door") {
      _reducer.params.p_d_c = Val;
      _reducer.params.doorType = Type;
      _reducer.const_var.editComponentDimension = _reducer.params.p_d_c;

      if (_reducer.const_var.editComponentDimension == "CustomGarageSize") {
        _reducer.params.customW = _reducer.params.customW < 5 ? 5 : _reducer.params.customW;
        _reducer.params.customH = _reducer.params.customH < 5 ? 5 : _reducer.params.customH;
      }

      if (Type == "WalkFrameout") {
        _reducer.params.p_d_c = _reducer.const_var.editComponentDimension == "CustomGarageSize" ? _reducer.params.customW + "X" + _reducer.params.customH + "_Frameout" : _reducer.params.p_d_c;
      } else {
        _reducer.params.p_d_c = _reducer.const_var.editComponentDimension == "CustomGarageSize" ? _reducer.params.customW + "X" + _reducer.params.customH : _reducer.params.p_d_c;
      }

      aDw("walkDoorSolid" + _reducer.params.p_d_c, _reducer.params.p_d_c);
    }

    if (DoorType == "window") {
      _reducer.params.p_w_cc = Val;
      _reducer.params.doorType = Type;
      _reducer.const_var.editComponentDimension = _reducer.params.p_w_cc;

      if (_reducer.const_var.editComponentDimension == "CustomGarageSize") {
        _reducer.params.customW = _reducer.params.customW < 5 ? 5 : _reducer.params.customW;
        _reducer.params.customH = _reducer.params.customH < 5 ? 5 : _reducer.params.customH;
      }

      if (Type == "WindowsFrameout") {
        _reducer.params.p_w_cc = _reducer.const_var.editComponentDimension == "CustomGarageSize" ? _reducer.params.customW + "X" + _reducer.params.customH + "_Frameout" : _reducer.params.p_w_cc;
      } else {
        _reducer.params.p_w_cc = _reducer.const_var.editComponentDimension == "CustomGarageSize" ? _reducer.params.customW + "X" + _reducer.params.customH : _reducer.params.p_w_cc;
      }

      aDw("window" + _reducer.params.p_w_cc, _reducer.params.p_w_cc);
    }
  } else {
    _reducer.params.p_a_g_r_u_d = Val;
    _reducer.params.doorType = Type;
    _reducer.const_var.editComponentDimension = _reducer.params.p_a_g_r_u_d;

    if (_reducer.const_var.editComponentDimension == "CustomGarageSize") {
      _reducer.params.customW = _reducer.params.customW < 5 ? 5 : _reducer.params.customW;
      _reducer.params.customH = _reducer.params.customH < 5 ? 5 : _reducer.params.customH;
    }

    if (Type == "CustomFrameout") {
      _reducer.params.p_a_g_r_u_d = _reducer.const_var.editComponentDimension == "CustomGarageSize" ? _reducer.params.customW + "X" + _reducer.params.customH + "_Frameout" : _reducer.params.p_a_g_r_u_d;

      var splitval1 = _reducer.params.p_a_g_r_u_d.split("_");

      var splitval = splitval1[0].split("X");
      _reducer.params.f_r_m_o_t = splitval[0];
      _reducer.params.f_r_m_o_t1 = splitval[1];
      _reducer.params.doorType = Type;
    } else {
      _reducer.params.p_a_g_r_u_d = _reducer.const_var.editComponentDimension == "CustomGarageSize" ? _reducer.params.customW + "X" + _reducer.params.customH : _reducer.params.p_a_g_r_u_d;
    } //params.p_a_g_r_u_d = (const_var.editComponentDimension=="CustomGarageSize")?params.customW+"X"+params.customH:params.p_a_g_r_u_d;


    TrimLoad("Trimkit_" + _reducer.params.p_a_g_r_u_d, _reducer.params.p_a_g_r_u_d);
  }

  _reducer.const_var.f_r_o_d = "";
  cuBuilding.cP(_reducer.const_var.a_p_d_a);
  _reducer.const_var.showComponentEditBox = false; //}, 1500);
  //rLaSt(false);
};

exports.LtgClAtn = LtgClAtn;

var UpdateLegPosAccordingtoWall = function UpdateLegPosAccordingtoWall(ID, Posi, BarnPos) {
  if (BarnPos == "left" && _reducer.const_var.d_w_a_r_N_w != undefined && _reducer.const_var.d_w_a_r_N_w[ID] != undefined && _reducer.const_var.d_w_a_r_N_w[ID].length != 0) {
    var hdrBanH = _reducer.params.p_h - 0.5 - 0.01;

    if (_reducer.params.singleSlope == true) {
      hdrBanH = _reducer.params.p_h - _reducer.params.p_w * Math.abs(_reducer.params.p_r_p) / 12; //  - .5 -0.01;
    } else {
      hdrBanH = _reducer.params.p_h - 0.5 - 0.01;
    }

    var index = fnFdIdxBkUiDN(_reducer.const_var.d_w_a_r_N_w, ID, "doorplace", "TrussCloneL" + _reducer.const_var.d_w_a_r_N_w[ID][0].index);

    if (index == null) {
      for (var i = 0; i <= _reducer.const_var.d_w_a_r_N_w[ID].length - 1; i++) {
        _reducer.const_var.scene.getObjectByName("TrussCloneL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[0].scale.z = hdrBanH; //params.p_h- .5-0.01;

        _reducer.const_var.scene.getObjectByName("TrussCloneL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[1].scale.z = hdrBanH; //params.p_h- .5-0.01;

        _reducer.const_var.scene.getObjectByName("TrussCloneL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[4].scale.z = hdrBanH; //params.p_h- .5-0.01;

        _reducer.const_var.scene.getObjectByName("TrussCloneL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[5].scale.z = hdrBanH; //params.p_h- .5-0.01;

        _reducer.const_var.scene.getObjectByName("TrussCloneL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[0].position.y = 0.01;
        _reducer.const_var.scene.getObjectByName("TrussCloneL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[1].position.y = 0.01;
        _reducer.const_var.scene.getObjectByName("TrussCloneL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[4].position.y = 0.01;
        _reducer.const_var.scene.getObjectByName("TrussCloneL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[5].position.y = 0.01;
        _reducer.const_var.scene.getObjectByName("TrussCloneL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[8].scale.z = hdrBanH; //params.p_h- .5-0.01;

        _reducer.const_var.scene.getObjectByName("TrussCloneL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[9].scale.z = hdrBanH; //params.p_h- .5-0.01;

        _reducer.const_var.scene.getObjectByName("TrussCloneL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[8].position.y = 0.01;
        _reducer.const_var.scene.getObjectByName("TrussCloneL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[9].position.y = 0.01;

        if (_reducer.const_var.c_m_a[_reducer.params.p_b_t] != undefined && _reducer.const_var.c_m_a[_reducer.params.p_b_t].trussType.length > 0 && _reducer.const_var.c_m_a[_reducer.params.p_b_t].trussType[0].name != "CTCT3" && _reducer.const_var.c_m_a[_reducer.params.p_b_t].trussType[0].name != "CTCT4") {
          _reducer.const_var.scene.getObjectByName("TrussCloneL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[354].visible = _reducer.params.p_w < 31 || _reducer.const_var.b_r_g_v == "4" || _reducer.const_var.b_r_g_v == "5" || _reducer.const_var.b_r_g_v == "6" || _reducer.const_var.b_r_g_v == "7" || _reducer.const_var.b_r_g_v == "8" || _reducer.const_var.b_r_g_v == "9" || _reducer.const_var.b_r_g_v == "10" || _reducer.const_var.b_r_g_v == "11" || _reducer.const_var.b_r_g_v == "12" ? true : false;
          _reducer.const_var.scene.getObjectByName("TrussCloneL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[176].visible = _reducer.params.p_w > 30 && (_reducer.const_var.b_r_g_v == "1" || _reducer.const_var.b_r_g_v == "2" || _reducer.const_var.b_r_g_v == "3" || _reducer.const_var.b_r_g_v == "13") ? true : false;
          _reducer.const_var.scene.getObjectByName("TrussCloneL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[177].visible = _reducer.params.p_w > 30 && (_reducer.const_var.b_r_g_v == "1" || _reducer.const_var.b_r_g_v == "2" || _reducer.const_var.b_r_g_v == "3" || _reducer.const_var.b_r_g_v == "13") ? true : false;
        }

        if (_reducer.const_var.c_m_a[_reducer.params.p_b_t] != undefined && _reducer.const_var.c_m_a[_reducer.params.p_b_t].trussType.length > 0 && (_reducer.const_var.c_m_a[_reducer.params.p_b_t].trussType[0].name == "CTCT3" || _reducer.const_var.c_m_a[_reducer.params.p_b_t].trussType[0].name == "CTCT4")) {
          _reducer.const_var.scene.getObjectByName("TrussCloneL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[2].visible = true;
          _reducer.const_var.scene.getObjectByName("TrussCloneL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[3].visible = true;
        }

        if (_reducer.const_var.legstype != undefined && _reducer.const_var.legstype == "ladder" || _reducer.const_var.c_m_a[_reducer.params.p_b_t] != undefined && _reducer.const_var.c_m_a[_reducer.params.p_b_t].trussType.length > 0 && (_reducer.const_var.c_m_a[_reducer.params.p_b_t].trussType[0].name == "CTCT3" || _reducer.const_var.c_m_a[_reducer.params.p_b_t].trussType[0].name == "CTCT4")) {
          if (_reducer.const_var.c_m_a[_reducer.params.p_b_t] != undefined && _reducer.const_var.c_m_a[_reducer.params.p_b_t].trussType.length > 0 && (_reducer.const_var.c_m_a[_reducer.params.p_b_t].trussType[0].name == "CTCT3" || _reducer.const_var.c_m_a[_reducer.params.p_b_t].trussType[0].name == "CTCT4")) {
            var lengthLegs = 70 + Math.round(_reducer.params.p_h / 2) - 1 + Math.round(_reducer.params.p_h / 2) - 1;
            var loopVal = Math.round(_reducer.params.p_h / 2) - 1;
          } else {
            var lengthLegs = 70 + Math.round(_reducer.params.p_h / 2) + Math.round(_reducer.params.p_h / 2);
            var loopVal = Math.round(_reducer.params.p_h / 2);
          }

          for (var jj = 0; jj < loopVal; jj++) {
            for (var ii = 70; ii <= lengthLegs; ii++) {
              if ("B_t_u_s_W_l_S_p_T" + jj == _reducer.const_var.scene.getObjectByName("TrussCloneL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[ii].name) {
                _reducer.const_var.scene.getObjectByName("TrussCloneL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[ii].visible = true;
              }
            }
          }
        }
      }
    }
  }

  if (BarnPos == "BarnLeft" && _reducer.const_var.d_w_a_r_N_w != undefined && _reducer.const_var.d_w_a_r_N_w[ID] != undefined && _reducer.const_var.d_w_a_r_N_w[ID].length != 0) {
    var index = fnFdIdxBkUiDN(_reducer.const_var.d_w_a_r_N_w, ID, "doorplace", "TrussCloneLeanL" + _reducer.const_var.d_w_a_r_N_w[ID][0].index);

    if (index == null) {
      for (var i = 0; i <= _reducer.const_var.d_w_a_r_N_w[ID].length - 1; i++) {
        if (_reducer.const_var.scene.getObjectByName("TrussCloneLeanL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index) != undefined) {
          _reducer.const_var.scene.getObjectByName("TrussCloneLeanL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[0].scale.z = _reducer.params.lean_p_h - 0.5 - 0.01;
          _reducer.const_var.scene.getObjectByName("TrussCloneLeanL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[1].scale.z = _reducer.params.lean_p_h - 0.5 - 0.01;
          _reducer.const_var.scene.getObjectByName("TrussCloneLeanL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[4].visible = true;
          _reducer.const_var.scene.getObjectByName("TrussCloneLeanL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[5].visible = true;
          _reducer.const_var.scene.getObjectByName("TrussCloneLeanL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[0].position.y = 0.01;
          _reducer.const_var.scene.getObjectByName("TrussCloneLeanL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[1].position.y = 0.01;
          _reducer.const_var.scene.getObjectByName("TrussCloneLeanL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[2].scale.z = _reducer.params.lean_p_h - 0.5 - 0.01;
          _reducer.const_var.scene.getObjectByName("TrussCloneLeanL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[3].scale.z = _reducer.params.lean_p_h - 0.5 - 0.01;
          _reducer.const_var.scene.getObjectByName("TrussCloneLeanL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[2].position.y = 0.01;
          _reducer.const_var.scene.getObjectByName("TrussCloneLeanL" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[3].position.y = 0.01;
        }
      }
    }
  }

  if (BarnPos == "right" && _reducer.const_var.d_w_a_r_N_w != undefined && _reducer.const_var.d_w_a_r_N_w[ID] != undefined && _reducer.const_var.d_w_a_r_N_w[ID].length != 0) {
    var index = fnFdIdxBkUiDN(_reducer.const_var.d_w_a_r_N_w, ID, "doorplace", "TrussCloneR" + _reducer.const_var.d_w_a_r_N_w[ID][0].index);

    if (index == null) {
      for (var i = 0; i <= _reducer.const_var.d_w_a_r_N_w[ID].length - 1; i++) {
        if (_reducer.const_var.scene.getObjectByName("TrussCloneR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index) != undefined) {
          _reducer.const_var.scene.getObjectByName("TrussCloneR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[373].scale.z = _reducer.params.p_h - 0.5 - 0.01;
          _reducer.const_var.scene.getObjectByName("TrussCloneR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[374].scale.z = _reducer.params.p_h - 0.5 - 0.01;
          _reducer.const_var.scene.getObjectByName("TrussCloneR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[373].position.y = 0.01;
          _reducer.const_var.scene.getObjectByName("TrussCloneR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[374].position.y = 0.01;
          _reducer.const_var.scene.getObjectByName("TrussCloneR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[377].scale.z = _reducer.params.p_h - 0.5 - 0.01;
          _reducer.const_var.scene.getObjectByName("TrussCloneR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[378].scale.z = _reducer.params.p_h - 0.5 - 0.01;
          _reducer.const_var.scene.getObjectByName("TrussCloneR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[377].position.y = 0.01;
          _reducer.const_var.scene.getObjectByName("TrussCloneR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[378].position.y = 0.01;
          _reducer.const_var.scene.getObjectByName("TrussCloneR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[381].scale.z = _reducer.params.p_h - 0.5 - 0.01;
          _reducer.const_var.scene.getObjectByName("TrussCloneR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[382].scale.z = _reducer.params.p_h - 0.5 - 0.01;
          _reducer.const_var.scene.getObjectByName("TrussCloneR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[381].position.y = 0.01;
          _reducer.const_var.scene.getObjectByName("TrussCloneR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[382].position.y = 0.01;

          if (_reducer.const_var.c_m_a[_reducer.params.p_b_t] != undefined && _reducer.const_var.c_m_a[_reducer.params.p_b_t].trussType.length > 0 && _reducer.const_var.c_m_a[_reducer.params.p_b_t].trussType[0].name != "CTCT3" && _reducer.const_var.c_m_a[_reducer.params.p_b_t].trussType[0].name != "CTCT4") {
            _reducer.const_var.scene.getObjectByName("TrussCloneR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[354].visible = _reducer.params.p_w < 31 || _reducer.const_var.b_r_g_v == "4" || _reducer.const_var.b_r_g_v == "5" || _reducer.const_var.b_r_g_v == "6" || _reducer.const_var.b_r_g_v == "7" || _reducer.const_var.b_r_g_v == "8" || _reducer.const_var.b_r_g_v == "9" || _reducer.const_var.b_r_g_v == "10" || _reducer.const_var.b_r_g_v == "11" || _reducer.const_var.b_r_g_v == "12" ? true : false;
            _reducer.const_var.scene.getObjectByName("TrussCloneR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[367].visible = _reducer.params.p_w > 30 && (_reducer.const_var.b_r_g_v == "1" || _reducer.const_var.b_r_g_v == "2" || _reducer.const_var.b_r_g_v == "3" || _reducer.const_var.b_r_g_v == "13") ? true : false;
            _reducer.const_var.scene.getObjectByName("TrussCloneR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[368].visible = _reducer.params.p_w > 30 && (_reducer.const_var.b_r_g_v == "1" || _reducer.const_var.b_r_g_v == "2" || _reducer.const_var.b_r_g_v == "3" || _reducer.const_var.b_r_g_v == "13") ? true : false;
          }

          if (_reducer.const_var.c_m_a[_reducer.params.p_b_t] != undefined && _reducer.const_var.c_m_a[_reducer.params.p_b_t].trussType.length > 0 && (_reducer.const_var.c_m_a[_reducer.params.p_b_t].trussType[0].name == "CTCT3" || _reducer.const_var.c_m_a[_reducer.params.p_b_t].trussType[0].name == "CTCT4")) {
            _reducer.const_var.scene.getObjectByName("TrussCloneR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[375].visible = true;
            _reducer.const_var.scene.getObjectByName("TrussCloneR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[376].visible = true;
          }

          if (_reducer.const_var.legstype != undefined && _reducer.const_var.legstype == "ladder" || _reducer.const_var.c_m_a[_reducer.params.p_b_t] != undefined && _reducer.const_var.c_m_a[_reducer.params.p_b_t].trussType.length > 0 && (_reducer.const_var.c_m_a[_reducer.params.p_b_t].trussType[0].name == "CTCT3" || _reducer.const_var.c_m_a[_reducer.params.p_b_t].trussType[0].name == "CTCT4")) {
            if (_reducer.const_var.c_m_a[_reducer.params.p_b_t] != undefined && _reducer.const_var.c_m_a[_reducer.params.p_b_t].trussType.length > 0 && (_reducer.const_var.c_m_a[_reducer.params.p_b_t].trussType[0].name == "CTCT3" || _reducer.const_var.c_m_a[_reducer.params.p_b_t].trussType[0].name == "CTCT4")) {
              var lengthLegs = 383 + Math.round(_reducer.params.p_h / 2) - 1 + Math.round(_reducer.params.p_h / 2) - 1;
              var loopVal = Math.round(_reducer.params.p_h / 2) - 1;
            } else {
              var lengthLegs = 383 + Math.round(_reducer.params.p_h / 2) + Math.round(_reducer.params.p_h / 2);
              var loopVal = Math.round(_reducer.params.p_h / 2);
            }

            for (var _jj = 0; _jj < loopVal; _jj++) {
              for (var _ii = 383; _ii <= lengthLegs; _ii++) {
                if ("B_t_u_s_W_l_S_p_T_r_h_T" + _jj == _reducer.const_var.scene.getObjectByName("TrussCloneR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[_ii].name) {
                  _reducer.const_var.scene.getObjectByName("TrussCloneR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[_ii].visible = true;
                }
              }
            }
          }
        }
      }
    }
  }

  if (BarnPos == "BarnRight" && _reducer.const_var.d_w_a_r_N_w != undefined && _reducer.const_var.d_w_a_r_N_w[ID] != undefined && _reducer.const_var.d_w_a_r_N_w[ID].length != 0) {
    var index = fnFdIdxBkUiDN(_reducer.const_var.d_w_a_r_N_w, ID, "doorplace", "TrussCloneLeanR" + _reducer.const_var.d_w_a_r_N_w[ID][0].index);

    if (index == null) {
      for (var i = 0; i <= _reducer.const_var.d_w_a_r_N_w[ID].length - 1; i++) {
        if (_reducer.const_var.scene.getObjectByName("TrussCloneLeanR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index) != undefined) {
          _reducer.const_var.scene.getObjectByName("TrussCloneLeanR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[16].scale.z = _reducer.params.leanR_p_h - 0.5 - 0.01;
          _reducer.const_var.scene.getObjectByName("TrussCloneLeanR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[17].scale.z = _reducer.params.leanR_p_h - 0.5 - 0.01;
          _reducer.const_var.scene.getObjectByName("TrussCloneLeanR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[14].visible = true;
          _reducer.const_var.scene.getObjectByName("TrussCloneLeanR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[15].visible = true;
          _reducer.const_var.scene.getObjectByName("TrussCloneLeanR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[16].position.y = 0.01;
          _reducer.const_var.scene.getObjectByName("TrussCloneLeanR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[17].position.y = 0.01;

          if (_reducer.const_var.scene.getObjectByName("TrussCloneLeanR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[18] != undefined) {
            _reducer.const_var.scene.getObjectByName("TrussCloneLeanR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[18].scale.z = _reducer.params.leanR_p_h - 0.5 - 0.01;
          }

          if (_reducer.const_var.scene.getObjectByName("TrussCloneLeanR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[19] != undefined) {
            _reducer.const_var.scene.getObjectByName("TrussCloneLeanR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[19].scale.z = _reducer.params.leanR_p_h - 0.5 - 0.01;
          }

          if (_reducer.const_var.scene.getObjectByName("TrussCloneLeanR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[18] != undefined) {
            _reducer.const_var.scene.getObjectByName("TrussCloneLeanR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[18].position.y = 0.01;
          }

          if (_reducer.const_var.scene.getObjectByName("TrussCloneLeanR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[19] != undefined) {
            _reducer.const_var.scene.getObjectByName("TrussCloneLeanR" + _reducer.const_var.d_w_a_r_N_w[ID][i].index).children[19].position.y = 0.01;
          }
        }
      }
    }
  }
};

exports.UpdateLegPosAccordingtoWall = UpdateLegPosAccordingtoWall;

var TsCeSot = function TsCeSot(Val, chkIndex) {
  var zTarget, bWl, bWr, bW, rph, zPosForLean, settingData, i, apiData, _settingData, _apiData;

  return regeneratorRuntime.async(function TsCeSot$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          if (!(Val == "print")) {
            _context4.next = 7;
            break;
          }

          _reducer.const_var.checkIval++;
          _reducer.const_var.checkBlobImg = _reducer.const_var.checkIval;

          if (_reducer.const_var.checkIval <= 4) {
            //const_var.controls.BooleanVal=true;
            zTarget = 0;
            bWl = _reducer.params.p_w / 2;
            bWr = _reducer.params.p_w / 2;
            bW = _reducer.params.p_w / 2;
            rph = _reducer.params.p_w <= 32 ? 6 : -6;
            zPosForLean = 0;

            if (_reducer.params.add_left_lean == true) {
              //bWl = bWl + params.lean_p_w + params.leanR_p_w;
              bW = bW + _reducer.params.lean_p_w / 2;
              bWl = bWl + _reducer.params.lean_p_w;
              rph = 0;
              zPosForLean = 8;
            }

            if (_reducer.params.add_right_lean == true) {
              //bWr = bWr + params.leanR_p_w + params.lean_p_w;
              bW = bW + _reducer.params.leanR_p_w / 2;
              bWr = bWr + _reducer.params.leanR_p_w;
              rph = 0;
              zPosForLean = 8;
            }

            if (_reducer.const_var.checkIval == 1) {
              //console.log(const_var.checkIval);
              navRotLeft("Front", true, Val); //const_var.i_g_A_y.push({"image":const_var.renderer.domElement.toDataURL("image/jpeg")});
              //const_var.post_data["building"].building_image = const_var.renderer.domElement.toDataURL("image/jpeg",0.5);
              //

              zTarget = _reducer.params.p_d / 2 + _reducer.params.p_h + bW + rph + zPosForLean;

              _reducer.const_var.camera.position.set(0, _reducer.params.p_h / 2, zTarget);
            } else if (_reducer.const_var.checkIval == 2) {
              navRotLeft("Left", true, Val); //

              zTarget = _reducer.params.p_d <= 300 ? _reducer.params.p_d / 2 + _reducer.params.p_h + bW + zPosForLean : _reducer.params.p_d / 2 + _reducer.params.p_h + bW + 10;

              _reducer.const_var.camera.position.set(-zTarget, _reducer.params.p_h / 2, 0); //

            } else if (_reducer.const_var.checkIval == 3) {
              navRotLeft("Back", true, Val); //

              zTarget = _reducer.params.p_d / 2 + _reducer.params.p_h + bW + rph + zPosForLean;

              _reducer.const_var.camera.position.set(0, _reducer.params.p_h / 2, -zTarget); //

            } else if (_reducer.const_var.checkIval == 4) {
              navRotLeft("Right", true, Val); //

              zTarget = _reducer.params.p_d <= 300 ? _reducer.params.p_d / 2 + _reducer.params.p_h + bW + zPosForLean : _reducer.params.p_d / 2 + _reducer.params.p_h + bW + 10;

              _reducer.const_var.camera.position.set(zTarget, _reducer.params.p_h / 2, 0); //

            } else if (_reducer.const_var.checkIval == 5) {
              if (_reducer.const_var.crmSetting.is_show_background == true || _reducer.const_var.crmSetting.is_show_background == undefined) {
                _reducer.const_var.controls.maxPolarAngle = Math.PI / 3; //Math.PI / 2.5;//Math.PI * 0.25;
              } else {
                _reducer.const_var.controls.maxPolarAngle = Math.PI;
              }

              _reducer.const_var.controls.update();

              navRotLeft("Front", true, Val); //

              zTarget = _reducer.params.p_d <= 300 ? _reducer.params.p_d / 2 + _reducer.params.p_h + bW : _reducer.params.p_d / 2 + _reducer.params.p_h + bW + 10;

              _reducer.const_var.camera.position.set(-zTarget, _reducer.params.p_h / 2, 0);
            } else if (_reducer.const_var.checkIval == 6) {
              if (_reducer.const_var.crmSetting.is_show_background == true || _reducer.const_var.crmSetting.is_show_background == undefined) {
                _reducer.const_var.controls.maxPolarAngle = Math.PI;
              } else {
                _reducer.const_var.controls.maxPolarAngle = Math.PI;
              } // const_var.controls.target.set(0, params.p_h / 2, 0);
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

          if (_reducer.const_var.i_g_A_y.length == 4) {
            _reducer.const_var.PrintAlertBox = true;
            _reducer.const_var.PrintAlertBoxShowButton = true;

            _index2["default"].dispatch((0, _index.genratePrintImages)(true));
          }

          _context4.next = 39;
          break;

        case 7:
          if (!(_reducer.const_var.checkCaptuareImage == true)) {
            _context4.next = 17;
            break;
          }

          if (!(_reducer.const_var.i_g_A_y.length > 0)) {
            _context4.next = 15;
            break;
          }

          _reducer.const_var.CallApionAction = true;
          settingData = _reducer.const_var.crmSetting;

          for (i = _reducer.const_var.i_g_A_y.length - 1; i >= 0; i--) {
            if (_reducer.const_var.i_g_A_y[i].image_name == "2D Layout") {
              _reducer.const_var.i_g_A_y.splice(i, 1);
            }
          }

          if (_reducer.const_var.two_d_layuot.is_active == 1 && _reducer.const_var.i_g_A_y2d != undefined && _reducer.const_var.i_g_A_y2d.length > 0) {
            //const_var.i_g_A_y[(const_var.i_g_A_y.length-1)] = const_var.i_g_A_y2d[0];
            if (_reducer.const_var.crmSetting.is_module_name == "quote" && _reducer.const_var.two_d_layuot.include_in_quote == 1) {
              _reducer.const_var.i_g_A_y.push(_reducer.const_var.i_g_A_y2d[0]);
            }

            if (_reducer.const_var.crmSetting.is_module_name == "order" && _reducer.const_var.two_d_layuot.include_in_order == 1) {
              _reducer.const_var.i_g_A_y.push(_reducer.const_var.i_g_A_y2d[0]);
            }
          }

          apiData = {
            api_token: settingData.api_token,
            module: "quote",
            pdf_images: _reducer.const_var.i_g_A_y
          };
          return _context4.abrupt("return", _axios["default"].post(_reducer.const_var.crmSetting.api_post_url + "/api/save-oq-image", apiData).then(function (response) {
            if (response.data.status == true) {
              _reducer.const_var.post_data["pdf_images"] = response.data.id;

              if (_reducer.const_var.loginSession == true) {
                _index2["default"].dispatch((0, _leadcustomerAction.SendBuildingDatatoServer)());
              } else {
                _reducer.const_var.showProcessLoaderchk = false;
                var element = document.getElementsByClassName("spinner-active")[0];
                element.classList.remove("spinner-active");
              } // if(chkIndex!=undefined && chkIndex=="finalsubmit")
              // {
              //     SendBuildingDatatoServer();
              // }else
              // {
              //     const_var.showProcessLoaderchk = false;
              //     var element = document.getElementsByClassName('spinner-active')[0];
              //     element.classList.remove("spinner-active");
              // }

            }
          }));

        case 15:
          _context4.next = 39;
          break;

        case 17:
          _reducer.const_var.checkIval++;
          _reducer.const_var.checkBlobImg = _reducer.const_var.checkIval; //if(const_var.checkIval<=6)

          if (!(_reducer.const_var.checkIval <= 4)) {
            _context4.next = 31;
            break;
          }

          //const_var.controls.BooleanVal=true;
          zTarget = 0;
          bWl = _reducer.params.p_w / 2;
          bWr = _reducer.params.p_w / 2;
          bW = _reducer.params.p_w / 2;
          rph = _reducer.params.p_w <= 32 ? 6 : -6;
          zPosForLean = 0;

          if (_reducer.params.add_left_lean == true) {
            //bWl = bWl + params.lean_p_w + params.leanR_p_w;
            bW = bW + _reducer.params.lean_p_w / 2;
            bWl = bWl + _reducer.params.lean_p_w;
            rph = 0;
            zPosForLean = 8;
          }

          if (_reducer.params.add_right_lean == true) {
            //bWr = bWr + params.leanR_p_w + params.lean_p_w;
            bW = bW + _reducer.params.leanR_p_w / 2;
            bWr = bWr + _reducer.params.leanR_p_w;
            rph = 0;
            zPosForLean = 8;
          }

          if (_reducer.const_var.checkIval == 1) {
            //console.log(const_var.checkIval);
            navRotLeft("Front", true, Val); //const_var.i_g_A_y.push({"image":const_var.renderer.domElement.toDataURL("image/jpeg")});
            //const_var.post_data["building"].building_image = const_var.renderer.domElement.toDataURL("image/jpeg",0.5);
            //

            zTarget = _reducer.params.p_d / 2 + _reducer.params.p_h + bW + rph + zPosForLean;

            _reducer.const_var.camera.position.set(0, _reducer.params.p_h / 2, zTarget);
          } else if (_reducer.const_var.checkIval == 2) {
            navRotLeft("Left", true, Val); //

            zTarget = _reducer.params.p_d <= 300 ? _reducer.params.p_d / 2 + _reducer.params.p_h + bW + zPosForLean : _reducer.params.p_d / 2 + _reducer.params.p_h + bW + 10;

            _reducer.const_var.camera.position.set(-zTarget, _reducer.params.p_h / 2, 0); //

          } else if (_reducer.const_var.checkIval == 3) {
            navRotLeft("Back", true, Val); //

            zTarget = _reducer.params.p_d / 2 + _reducer.params.p_h + bW + rph + zPosForLean;

            _reducer.const_var.camera.position.set(0, _reducer.params.p_h / 2, -zTarget); //

          } else if (_reducer.const_var.checkIval == 4) {
            navRotLeft("Right", true, Val); //

            zTarget = _reducer.params.p_d <= 300 ? _reducer.params.p_d / 2 + _reducer.params.p_h + bW + zPosForLean : _reducer.params.p_d / 2 + _reducer.params.p_h + bW + 10;

            _reducer.const_var.camera.position.set(zTarget, _reducer.params.p_h / 2, 0); //

          } else if (_reducer.const_var.checkIval == 5) {
            if (_reducer.const_var.crmSetting.is_show_background == true || _reducer.const_var.crmSetting.is_show_background == undefined) {
              _reducer.const_var.controls.maxPolarAngle = Math.PI / 3; //Math.PI / 2.5;//Math.PI * 0.25;
            } else {
              _reducer.const_var.controls.maxPolarAngle = Math.PI;
            }

            _reducer.const_var.controls.update();

            navRotLeft("Front", true, Val); //

            zTarget = _reducer.params.p_d <= 300 ? _reducer.params.p_d / 2 + _reducer.params.p_h + bW : _reducer.params.p_d / 2 + _reducer.params.p_h + bW + 10;

            _reducer.const_var.camera.position.set(-zTarget, _reducer.params.p_h / 2, 0);
          } else if (_reducer.const_var.checkIval == 6) {
            if (_reducer.const_var.crmSetting.is_show_background == true || _reducer.const_var.crmSetting.is_show_background == undefined) {
              _reducer.const_var.controls.maxPolarAngle = Math.PI;
            } else {
              _reducer.const_var.controls.maxPolarAngle = Math.PI;
            } // const_var.controls.target.set(0, params.p_h / 2, 0);
            // const_var.camera.position.set(0, params.p_h +0, 1.25 * params.p_d);
            //const_var.controls.maxPolarAngle = Math.PI * 0.5;
            // const_var.controls.target.set(0, params.p_h / 2, 0);
            // const_var.camera.position.set(0, params.p_h + 0, 1.25 * params.p_d);
            //const_var.controls.update();
            ////navRotLeft("Front",false,Val);

          } else {
            navRotLeft("Front", false, Val);
          }

          _context4.next = 39;
          break;

        case 31:
          // store.dispatch({
          //     type:"GenrateBuildingDatatoServer",
          //     event:"",
          //     key:undefined
          // });
          if (_reducer.const_var.two_d_layuot.is_active == 1) {// await myFetch().then((msg) => {
            //     //console.log(msg);
            // });
          }

          if (!(_reducer.const_var.i_g_A_y.length == 4)) {
            _context4.next = 39;
            break;
          }

          _reducer.const_var.CallApionAction = true;
          _settingData = _reducer.const_var.crmSetting;

          for (i = _reducer.const_var.i_g_A_y.length - 1; i >= 0; i--) {
            if (_reducer.const_var.i_g_A_y[i].image_name == "2D Layout") {
              _reducer.const_var.i_g_A_y.splice(i, 1);
            }
          }

          if (_reducer.const_var.two_d_layuot.is_active == 1 && _reducer.const_var.i_g_A_y2d != undefined && _reducer.const_var.i_g_A_y2d.length > 0) {
            //const_var.i_g_A_y[(const_var.i_g_A_y.length-1)] = const_var.i_g_A_y2d[0];
            if (_reducer.const_var.crmSetting.is_module_name == "quote" && _reducer.const_var.two_d_layuot.include_in_quote == 1) {
              _reducer.const_var.i_g_A_y.push(_reducer.const_var.i_g_A_y2d[0]);
            }

            if (_reducer.const_var.crmSetting.is_module_name == "order" && _reducer.const_var.two_d_layuot.include_in_order == 1) {
              _reducer.const_var.i_g_A_y.push(_reducer.const_var.i_g_A_y2d[0]);
            }
          }

          _apiData = {
            api_token: _settingData.api_token,
            module: "quote",
            pdf_images: _reducer.const_var.i_g_A_y
          };
          return _context4.abrupt("return", _axios["default"].post(_reducer.const_var.crmSetting.api_post_url + "/api/save-oq-image", _apiData).then(function (response) {
            if (response.data.status == true) {
              _reducer.const_var.post_data["pdf_images"] = response.data.id;

              if (_reducer.const_var.loginSession == true) {
                _index2["default"].dispatch((0, _leadcustomerAction.SendBuildingDatatoServer)());
              } else {
                _reducer.const_var.showProcessLoaderchk = false;
                var element = document.getElementsByClassName("spinner-active")[0];
                element.classList.remove("spinner-active");
              }

              _reducer.const_var.checkIval = 0;
              _reducer.const_var.i_g_A_y = []; // if(chkIndex!=undefined && chkIndex=="finalsubmit")
              // {
              //     SendBuildingDatatoServer();
              // }else
              // {
              //     const_var.showProcessLoaderchk = false;
              //     var element = document.getElementsByClassName('spinner-active')[0];
              //     element.classList.remove("spinner-active");
              // }
            }
          }));

        case 39:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.TsCeSot = TsCeSot;

var checkNewDoorPlace = function checkNewDoorPlace(l) {
  _reducer.const_var.ManageSpaces[l] = new Array();

  if (_reducer.const_var.ManageDoorArrar[l].length > 0) {
    _reducer.const_var.ManageDoorArrar[l].sort(function (a, b) {
      return a.leftpos - b.leftpos;
    }); //console.log(l,ManageDoorArrar[l].length);


    for (var j = 0; j <= _reducer.const_var.ManageDoorArrar[l].length - 1; j++) {
      if (j == 0) {
        //if(params.p_b_t !="2")
        if (_reducer.params.add_left_lean == false && _reducer.params.add_right_lean == false) {
          _reducer.const_var.ManageSpaces[l].push(_reducer.const_var.ManageDoorArrar[l][j].leftpos);
        } else {
          if (l == "front") {
            if (_reducer.params.p_b_c_b_l_f == "Close" || _reducer.params.add_storage_check == true) {
              _reducer.const_var.ManageSpaces[l].push(_reducer.const_var.ManageDoorArrar[l][j].leftpos - _reducer.params.lean_p_w);
            } else {
              _reducer.const_var.ManageSpaces[l].push(_reducer.const_var.ManageDoorArrar[l][j].leftpos);
            }
          }

          if (l == "back") {
            if (_reducer.params.p_b_c_b_l_b == "Close" || _reducer.params.add_storage_check == true) {
              _reducer.const_var.ManageSpaces[l].push(_reducer.const_var.ManageDoorArrar[l][j].leftpos - _reducer.params.lean_p_w);
            } else {
              _reducer.const_var.ManageSpaces[l].push(_reducer.const_var.ManageDoorArrar[l][j].leftpos);
            }
          }

          if (l == "frontr" || l == "rights") {
            if (_reducer.params.p_b_c_b_l_f == "Close" || _reducer.params.add_storage_check == true) {
              _reducer.const_var.ManageSpaces[l].push(_reducer.const_var.ManageDoorArrar[l][j].leftpos - _reducer.params.p_w - _reducer.params.lean_p_w);
            } else {
              _reducer.const_var.ManageSpaces[l].push(_reducer.const_var.ManageDoorArrar[l][j].leftpos - _reducer.params.p_w);
            }
          }

          if (l == "frontl" || l == "backr" || l == "left" || l == "ltleft" || l == "right" || l == "ltright" || l == "lefts") {
            _reducer.const_var.ManageSpaces[l].push(_reducer.const_var.ManageDoorArrar[l][j].leftpos);
          }

          if (l == "backl") {
            if (_reducer.params.p_b_c_b_r_b == "Close" || _reducer.params.add_storage_check_right == true) {
              _reducer.const_var.ManageSpaces[l].push(_reducer.const_var.ManageDoorArrar[l][j].leftpos - _reducer.params.p_w - _reducer.params.leanR_p_w);
            } else {
              _reducer.const_var.ManageSpaces[l].push(_reducer.const_var.ManageDoorArrar[l][j].leftpos - _reducer.params.p_w);
            }
          }
        }

        if (_reducer.const_var.ManageDoorArrar[l].length > 1) {
          _reducer.const_var.ManageSpaces[l].push(_reducer.const_var.ManageDoorArrar[l][j].rightpos - (parseInt(_reducer.const_var.ManageDoorArrar[l][j + 1].actual_val.split("X")[0]) + _reducer.const_var.ManageDoorArrar[l][j + 1].rightpos));
        }
      }

      if (j > 0 && j != _reducer.const_var.ManageDoorArrar[l].length - 1) {
        _reducer.const_var.ManageSpaces[l].push(_reducer.const_var.ManageDoorArrar[l][j].rightpos - (parseInt(_reducer.const_var.ManageDoorArrar[l][j + 1].actual_val.split("X")[0]) + _reducer.const_var.ManageDoorArrar[l][j + 1].rightpos));
      }

      if (j == _reducer.const_var.ManageDoorArrar[l].length - 1) {
        //if(params.p_b_t !="2")
        if (_reducer.params.add_left_lean == false && _reducer.params.add_right_lean == false) {
          _reducer.const_var.ManageSpaces[l].push(_reducer.const_var.ManageDoorArrar[l][j].rightpos);
        } else {
          if (l == "front") {
            if (_reducer.params.p_b_c_b_r_f == "Close" || _reducer.params.add_storage_check_right == true) {
              _reducer.const_var.ManageSpaces[l].push(_reducer.const_var.ManageDoorArrar[l][j].rightpos - _reducer.params.leanR_p_w);
            } else {
              _reducer.const_var.ManageSpaces[l].push(_reducer.const_var.ManageDoorArrar[l][j].rightpos);
            }
          }

          if (l == "back") {
            if (_reducer.params.p_b_c_b_r_b == "Close" || _reducer.params.add_storage_check_right == true) {
              _reducer.const_var.ManageSpaces[l].push(_reducer.const_var.ManageDoorArrar[l][j].rightpos - _reducer.params.leanR_p_w);
            } else {
              _reducer.const_var.ManageSpaces[l].push(_reducer.const_var.ManageDoorArrar[l][j].rightpos);
            }
          }

          if (l == "frontl" || l == "lefts") {
            if (_reducer.params.p_b_c_b_r_f == "Close" || _reducer.params.add_storage_check_right == true) {
              _reducer.const_var.ManageSpaces[l].push(_reducer.const_var.ManageDoorArrar[l][j].rightpos - _reducer.params.p_w - _reducer.params.leanR_p_w);
            } else {
              _reducer.const_var.ManageSpaces[l].push(_reducer.const_var.ManageDoorArrar[l][j].rightpos - _reducer.params.p_w);
            }
          }

          if (l == "frontr" || l == "backl" || l == "left" || l == "ltleft" || l == "right" || l == "ltright" || l == "rights") {
            _reducer.const_var.ManageSpaces[l].push(_reducer.const_var.ManageDoorArrar[l][j].rightpos);
          }

          if (l == "backr") {
            if (_reducer.params.p_b_c_b_l_b == "Close" || _reducer.params.add_storage_check == true) {
              _reducer.const_var.ManageSpaces[l].push(_reducer.const_var.ManageDoorArrar[l][j].rightpos - _reducer.params.p_w - _reducer.params.lean_p_w);
            } else {
              _reducer.const_var.ManageSpaces[l].push(_reducer.const_var.ManageDoorArrar[l][j].rightpos - _reducer.params.p_w);
            }
          }
        }
      } //prntLRdistNew(l,j,"rightpos");

    } // ManageSpaces[l].sort(function(a, b){
    //     return a - b;
    // });


    var doorSide = l;

    if (doorSide == "leftl") {
      doorSide = "ltleft";
    } else if (doorSide == "rightr") {
      doorSide = "ltright";
    } //console.log(Array.isArray(ManageSpaces[l]));


    if (Math.ceil(Math.max.apply(Math, _reducer.const_var.ManageSpaces[l])) < 4) {
      _reducer.const_var.ManageDoorPlaces[doorSide].Garage = false;
      _reducer.const_var.ManageDoorPlaces[doorSide].CustomFrameout = false;
      _reducer.const_var.ManageDoorPlaces[doorSide].Walk = false;
      _reducer.const_var.ManageDoorPlaces[doorSide].WalkFrameout = false;
      _reducer.const_var.ManageDoorPlaces[doorSide].Windows = false;
      _reducer.const_var.ManageDoorPlaces[doorSide].WindowsFrameout = false;
      _reducer.const_var.ManageDoorPlaces[doorSide].GarageFrameout = false;
    } else if (Math.ceil(Math.max.apply(Math, _reducer.const_var.ManageSpaces[l])) <= 5) {
      _reducer.const_var.ManageDoorPlaces[doorSide].Garage = false;
      _reducer.const_var.ManageDoorPlaces[doorSide].CustomFrameout = false;
      _reducer.const_var.ManageDoorPlaces[doorSide].Walk = true;
      _reducer.const_var.ManageDoorPlaces[doorSide].WalkFrameout = true;
      _reducer.const_var.ManageDoorPlaces[doorSide].Windows = true;
      _reducer.const_var.ManageDoorPlaces[doorSide].WindowsFrameout = true;
      _reducer.const_var.ManageDoorPlaces[doorSide].GarageFrameout = false;
    } else if (Math.ceil(Math.max.apply(Math, _reducer.const_var.ManageSpaces[l])) < 8) {
      _reducer.const_var.ManageDoorPlaces[doorSide].Garage = false;
      _reducer.const_var.ManageDoorPlaces[doorSide].CustomFrameout = false;
      _reducer.const_var.ManageDoorPlaces[doorSide].Walk = true;
      _reducer.const_var.ManageDoorPlaces[doorSide].WalkFrameout = true;
      _reducer.const_var.ManageDoorPlaces[doorSide].Windows = true;
      _reducer.const_var.ManageDoorPlaces[doorSide].WindowsFrameout = true;
      _reducer.const_var.ManageDoorPlaces[doorSide].GarageFrameout = false;
    } else {
      _reducer.const_var.ManageDoorPlaces[doorSide].Garage = true;
      _reducer.const_var.ManageDoorPlaces[doorSide].CustomFrameout = true;
      _reducer.const_var.ManageDoorPlaces[doorSide].Walk = true;
      _reducer.const_var.ManageDoorPlaces[doorSide].WalkFrameout = true;
      _reducer.const_var.ManageDoorPlaces[doorSide].Windows = true;
      _reducer.const_var.ManageDoorPlaces[doorSide].WindowsFrameout = true;
      _reducer.const_var.ManageDoorPlaces[doorSide].GarageFrameout = true;
    } //console.log(ManageDoorPlaces[doorSide]);

  }
};

exports.checkNewDoorPlace = checkNewDoorPlace;

var removeDoorWindowsIcons = function removeDoorWindowsIcons() {
  _reducer.const_var.showComponentEditBox = false;
  _reducer.const_var.b_s_c_n = null;

  for (var i = 0; i < _reducer.const_var.b_d_g_b_O_c.length; i++) {
    if ("b_B_g_B" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t1Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t2Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t5Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t6Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t3Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t4Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t7Bx" != _reducer.const_var.b_d_g_b_O_c[i].name && "b_h_t8Bx" != _reducer.const_var.b_d_g_b_O_c[i].name) {
      if (_reducer.const_var.b_d_g_b_O_c[i].children[0] != undefined) {
        _reducer.const_var.b_d_g_b_O_c[i].children[0].visible = false;
        _reducer.const_var.b_d_g_b_O_c[i].children[1].visible = false;
        _reducer.const_var.b_d_g_b_O_c[i].children[2].visible = false;
      }
    }
  }
};

exports.removeDoorWindowsIcons = removeDoorWindowsIcons;

var TestNew = function TestNew(wallPos, commonVal) {
  var l = wallPos.toLowerCase();
  var data = _reducer.const_var.scene.children; //if(l == "left" || l == "right")

  {
    if (commonVal == undefined) {
      if (_reducer.const_var.scene.children.length > 140) {
        for (var j = 158; j < _reducer.const_var.scene.children.length; j++) {
          if (_reducer.const_var.scene.children[j].BarnPos == "BarnLeft" || _reducer.const_var.scene.children[j].BarnPos == "FrontL" || _reducer.const_var.scene.children[j].BarnPos == "BackL" || _reducer.const_var.scene.children[j].BarnPos == "LeftS") {
            _reducer.const_var.scene.children[j].visible = l == "left" ? false : true;
          }

          if (_reducer.const_var.scene.children[j].BarnPos == "FrontL") {
            _reducer.const_var.scene.children[j].visible = l == "lefts" || l == "left" ? false : true; //ArrowNDistance.hideShowdoorArrow(l);
          }

          if (_reducer.const_var.scene.children[j].BarnPos == "BarnRight" || _reducer.const_var.scene.children[j].BarnPos == "FrontR" || _reducer.const_var.scene.children[j].BarnPos == "BackR" || _reducer.const_var.scene.children[j].BarnPos == "RightS") {
            _reducer.const_var.scene.children[j].visible = l == "right" ? false : true;
          }

          if (_reducer.const_var.scene.children[j].BarnPos == "FrontR") {
            _reducer.const_var.scene.children[j].visible = l == "rights" || l == "right" ? false : true; // ArrowNDistance.hideShowdoorArrow(l);
          }

          if (_reducer.const_var.scene.children[j].BarnPos == "front") {
            _reducer.const_var.scene.children[j].visible = l == "fronts" ? false : true; //ArrowNDistance.hideShowdoorArrow(l);
          }
        }
      }
    } else {
      if (_reducer.const_var.scene.children.length > 140) {
        for (var j = 158; j < _reducer.const_var.scene.children.length; j++) {
          if (_reducer.const_var.scene.children[j].BarnPos == "BarnLeft" || _reducer.const_var.scene.children[j].BarnPos == "FrontL" || _reducer.const_var.scene.children[j].BarnPos == "BackL" || _reducer.const_var.scene.children[j].BarnPos == "LeftS") {
            _reducer.const_var.scene.children[j].visible = false;
          }

          if (_reducer.const_var.scene.children[j].BarnPos == "FrontL") {
            _reducer.const_var.scene.children[j].visible = false;
          }

          if (_reducer.const_var.scene.children[j].BarnPos == "BarnRight" || _reducer.const_var.scene.children[j].BarnPos == "FrontR" || _reducer.const_var.scene.children[j].BarnPos == "BackR" || _reducer.const_var.scene.children[j].BarnPos == "RightS") {
            _reducer.const_var.scene.children[j].visible = false;
          }

          if (_reducer.const_var.scene.children[j].BarnPos == "FrontR") {
            _reducer.const_var.scene.children[j].visible = false;
          }

          if (_reducer.const_var.scene.children[j].BarnPos == "front") {
            _reducer.const_var.scene.children[j].visible = true; //ArrowNDistance.hideShowdoorArrow(l);
          }
        }
      }
    }
  } //ArrowFun();
};

exports.TestNew = TestNew;

var Test = function Test(wallPos, val, commonVal) {
  var l = wallPos.toLowerCase();
  _reducer.const_var.llsh = false;
  _reducer.const_var.rlsh = false;
  _reducer.const_var.llff = false;
  _reducer.const_var.blsh = false;
  _reducer.const_var.flsh = false;
  _reducer.const_var.rlff = false;
  _reducer.params.centerstorage = false;
  _reducer.params.leftstorage = false;
  _reducer.params.rightstorage = false;

  if (commonVal != undefined) {
    if ((_reducer.params.add_left_lean == true || _reducer.params.add_right_lean == true || _reducer.params.add_front_lean == true || _reducer.params.add_back_lean == true) && (_reducer.params.add_left_lean == true || _reducer.params.add_right_lean == true || _reducer.params.add_front_lean == true || _reducer.params.add_back_lean == true)) {
      // if ((params.add_left_lean == true && params.add_right_lean == true)) {
      _reducer.params.add_left_lean = false;
      _reducer.params.p_l_b_l = true;
      _reducer.params.add_storage_check = false;
      _reducer.params.cmrpos = _reducer.params.add_left_lean;
      _reducer.params.p_r_b_l = true;
      _reducer.params.add_right_lean = false;
      _reducer.params.add_storage_check_right = false;
      _reducer.params.cmrpos = _reducer.params.add_right_lean;
      _reducer.params.add_front_lean = false;
      _reducer.params.add_storage_check_front = false;
      _reducer.params.cmrpos = _reducer.params.add_front_lean;
      _reducer.params.add_back_lean = false;
      _reducer.params.add_storage_check_back = false;
      _reducer.params.cmrpos = _reducer.params.add_back_lean;
      cuBuilding.BuildingUpdate(true, "leanwall");
      _reducer.params.p_r_b_l = _reducer.params.p_r_b_l == false ? false : true;
      _reducer.params.p_l_b_l = false;
      _reducer.params.add_left_lean = true;
      _reducer.params.p_b_c_b_l = _reducer.params.b_l_l_t_l;
      _reducer.params.p_b_c_b_l_b = _reducer.params.b_l_l_t_b;
      _reducer.params.p_b_c_b_l_f = _reducer.params.b_l_l_t_f;
      _reducer.params.add_storage_check = _reducer.params.add_storage_check_1;
      _reducer.const_var.llsh = true;
      _reducer.const_var.llff = true;
      _reducer.params.p_l_b_l = _reducer.params.p_l_b_l == false ? false : true;
      _reducer.params.p_r_b_l = false;
      _reducer.params.add_right_lean = true;
      _reducer.params.p_b_c_b_r = _reducer.params.b_r_l_t_r;
      _reducer.params.p_b_c_b_r_b = _reducer.params.b_r_l_t_b;
      _reducer.params.p_b_c_b_r_f = _reducer.params.b_r_l_t_f;
      _reducer.params.add_storage_check_right = _reducer.params.add_storage_check_right_1;
      _reducer.const_var.rlsh = true;
      _reducer.const_var.rlff = true;
      cuBuilding.BuildingUpdate(true, "leanwall");
      _reducer.params.add_front_lean = true;
      _reducer.const_var.flsh = true;
      _reducer.params.add_back_lean = true;
      _reducer.const_var.blsh = true;
    } //  else if ((params.add_front_lean == true && params.add_back_lean == true)) {
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
      if (_reducer.params.add_left_lean == true) {
        _reducer.params.add_left_lean = false;
        _reducer.params.p_l_b_l = true;
        _reducer.params.add_storage_check = false;
        _reducer.params.cmrpos = _reducer.params.add_left_lean;
        cuBuilding.BuildingUpdate(true, "leanwall");
        _reducer.params.p_r_b_l = _reducer.params.p_r_b_l == false ? false : true;
        _reducer.params.p_l_b_l = false;
        _reducer.params.add_left_lean = true;
        _reducer.params.p_b_c_b_l = _reducer.params.b_l_l_t_l;
        _reducer.params.p_b_c_b_l_b = _reducer.params.b_l_l_t_b;
        _reducer.params.p_b_c_b_l_f = _reducer.params.b_l_l_t_f;
        _reducer.params.add_storage_check = _reducer.params.add_storage_check_1;
        _reducer.const_var.llsh = true;
        _reducer.const_var.llff = true;
      }

      if (_reducer.params.add_front_lean == true) {
        _reducer.params.add_front_lean = false;
        _reducer.params.p_l_b_l = true;
        _reducer.params.add_storage_check_front = false;
        _reducer.params.cmrpos = _reducer.params.add_front_lean;
        cuBuilding.BuildingUpdate(true, "leanwall");
        _reducer.params.add_front_lean = true;
        _reducer.params.add_storage_check_front = _reducer.params.add_storage_check_front_1;
        _reducer.const_var.flsh = true;
      }

      if (_reducer.params.add_back_lean == true) {
        _reducer.params.add_back_lean = false;
        _reducer.params.add_storage_check_back = false;
        _reducer.params.cmrpos = _reducer.params.add_back_lean;
        cuBuilding.BuildingUpdate(true, "leanwall");
        _reducer.params.add_storage_check_back = _reducer.params.add_storage_check_back_1;
        _reducer.const_var.blsh = true;
        _reducer.params.add_back_lean = true;
      }

      if (_reducer.params.add_right_lean == true) {
        _reducer.params.p_r_b_l = true;
        _reducer.params.add_right_lean = false;
        _reducer.params.add_storage_check_right = false;
        _reducer.params.cmrpos = _reducer.params.add_right_lean;
        cuBuilding.BuildingUpdate(true, "leanwall");
        _reducer.params.p_l_b_l = _reducer.params.p_l_b_l == false ? false : true;
        _reducer.params.p_r_b_l = false;
        _reducer.params.add_right_lean = true;
        _reducer.params.p_b_c_b_r = _reducer.params.b_r_l_t_r;
        _reducer.params.p_b_c_b_r_b = _reducer.params.b_r_l_t_b;
        _reducer.params.p_b_c_b_r_f = _reducer.params.b_r_l_t_f;
        _reducer.params.add_storage_check_right = _reducer.params.add_storage_check_right_1;
        _reducer.const_var.rlsh = true;
        _reducer.const_var.rlff = true;
      }
    }
  } else {
    if (_reducer.params.p_b_t == "2" || _reducer.params.add_left_lean == true || _reducer.params.add_right_lean == true || l == "fronts" || l == "center" || l == "front") {
      //B(true);
      if (l == "left" && _reducer.params.p_l_b_l == false) {
        _reducer.params.add_left_lean = false;
        _reducer.params.p_l_b_l = true;
        _reducer.params.add_storage_check = false;
        _reducer.params.cmrpos = _reducer.params.add_left_lean;
        cuBuilding.BuildingUpdate(true, "leanwall");
        _reducer.params.p_r_b_l = _reducer.params.p_r_b_l == false ? false : true;
        _reducer.params.p_l_b_l = false;
        _reducer.params.add_left_lean = true;
        _reducer.params.p_b_c_b_l = _reducer.params.b_l_l_t_l;
        _reducer.params.p_b_c_b_l_b = _reducer.params.b_l_l_t_b;
        _reducer.params.p_b_c_b_l_f = _reducer.params.b_l_l_t_f;
        _reducer.params.add_storage_check = _reducer.params.add_storage_check_1;
        _reducer.const_var.llsh = true;
        _reducer.const_var.llff = true;
      } else if (l == "right" && _reducer.params.p_r_b_l == false) {
        _reducer.params.p_r_b_l = true;
        _reducer.params.add_right_lean = false;
        _reducer.params.add_storage_check_right = false;
        _reducer.params.cmrpos = _reducer.params.add_right_lean;
        cuBuilding.BuildingUpdate(true, "leanwall");
        _reducer.params.p_l_b_l = _reducer.params.p_l_b_l == false ? false : true;
        _reducer.params.p_r_b_l = false;
        _reducer.params.add_right_lean = true;
        _reducer.params.p_b_c_b_r = _reducer.params.b_r_l_t_r;
        _reducer.params.p_b_c_b_r_b = _reducer.params.b_r_l_t_b;
        _reducer.params.p_b_c_b_r_f = _reducer.params.b_r_l_t_f;
        _reducer.params.add_storage_check_right = _reducer.params.add_storage_check_right_1;
        _reducer.const_var.rlsh = true;
        _reducer.const_var.rlff = true;
      } else if (l == "lefts") {
        _reducer.params.b_l_t_s = val ? "LeftS" : "";
        _reducer.params.p_b_c_b_l_f = "Open";
        _reducer.params.cmrpos = false;
        cuBuilding.BuildingUpdate(true, "leanwall"); //params.p_b_c_b_l_f = params.b_l_l_t_f;

        _reducer.const_var.llsh = true;
      } else if (l == "rights") {
        _reducer.params.b_l_t_s = val ? "RightS" : "";
        _reducer.params.p_b_c_b_r_f = "Open";
        _reducer.params.cmrpos = false;
        cuBuilding.BuildingUpdate(true, "leanwall"); //params.p_b_c_b_r_f = params.b_r_l_t_f;

        _reducer.const_var.rlsh = true;
      } else if (l == "fronts") {
        _reducer.params.p_f_w = "Open";
        _reducer.params.cmrpos = false;
        _reducer.params.centerstorage = true;
        cuBuilding.BuildingUpdate(true, "leanwall");
        _reducer.params.p_f_w = _reducer.params.p_f_w_f; //onDocumentMouseWheel();
      } else {
        _reducer.params.p_r_b_l = _reducer.params.p_r_b_l == false ? false : true;
        _reducer.params.add_right_lean = _reducer.params.add_right_lean == false ? false : true; //params.p_l_b_l = false;

        _reducer.params.p_b_c_b_l = _reducer.params.b_l_l_t_l;
        _reducer.params.p_b_c_b_l_b = _reducer.params.b_l_l_t_b;
        _reducer.params.p_b_c_b_l_f = _reducer.params.b_l_l_t_f;
        _reducer.params.p_l_b_l = _reducer.params.p_l_b_l == false ? false : true;
        _reducer.params.add_left_lean = _reducer.params.add_left_lean == false ? false : true; //params.p_r_b_l = false;

        _reducer.params.p_b_c_b_r = _reducer.params.b_r_l_t_r;
        _reducer.params.p_b_c_b_r_b = _reducer.params.b_r_l_t_b;
        _reducer.params.p_b_c_b_r_f = _reducer.params.b_r_l_t_f;
        _reducer.params.centerstorage = false;
        _reducer.params.leftstorage = false;
        _reducer.params.rightstorage = false;
        _reducer.params.p_f_w = _reducer.params.p_f_w_f;
        _reducer.params.b_l_t_s = "";
      } //if(l == "front" || l == "back")


      if (l != "left" && l != "right" && l != "lefts" && l != "rights" && l != "fronts") {
        cuBuilding.BuildingUpdate(true, "centerwall");
      }
    }
  }

  if (l == "fronts" || l == "front") {
    if (_reducer.const_var.ManageDoorArrar["front"].length > 0) {
      if (_reducer.const_var.scene.getObjectByName("frontArrow") != undefined) {
        _reducer.const_var.scene.getObjectByName("frontArrow").visible = l == "fronts" ? false : true;
      }
    }
  }

  if (l == "lefts" || l == "left") {
    if (_reducer.const_var.ManageDoorArrar["frontl"].length > 0) {
      if (_reducer.const_var.scene.getObjectByName("frontlArrow") != undefined) {
        _reducer.const_var.scene.getObjectByName("frontlArrow").visible = l == "lefts" ? false : true;
      }
    }
  }

  if (l == "rights" || l == "right") {
    if (_reducer.const_var.ManageDoorArrar["frontr"].length > 0) {
      if (_reducer.const_var.scene.getObjectByName("frontrArrow") != undefined) {
        _reducer.const_var.scene.getObjectByName("frontrArrow").visible = l == "rights" ? false : true;
      }
    }
  }
};

exports.Test = Test;

var ChangeDoorActionSelect = function ChangeDoorActionSelect() {
  _reducer.params.p_w_cc = "Select";
  _reducer.params.p_d_c = "Select";
  _reducer.params.p_a_g_r_u_d = "Select";
};

exports.ChangeDoorActionSelect = ChangeDoorActionSelect;

var autoRotateBuilding = function autoRotateBuilding() {
  var d = new THREE.Vector3();

  _reducer.const_var.scene.getObjectByName("UserCamera").getWorldDirection(d);

  var e = Math.atan2(d.x, d.z);

  var f = _reducer.const_var.scene.getObjectByName("UserCamera").position;

  var g = 1;
  var l = "";
  if (Math.abs(e * g) < Math.PI / 4 || Math.abs(e * g) > 3 * Math.PI / 4) {
    if (Math.abs(e) > Math.PI / 2) {
      l = "Front";
    } else {
      l = "Back";
    }
  } else if (f.x > 0) {
    l = "Right";
  } else {
    l = "Left";
  }
  return l;
};

exports.autoRotateBuilding = autoRotateBuilding;

var navRotLeft = function navRotLeft(Val, Bool, Str) {
  // controls = new OrbitControls(const_var.camera, const_var.renderer.domElement);
  if (Val != "Select") {
    var d = new THREE.Vector3();

    _reducer.const_var.scene.getObjectByName("UserCamera").getWorldDirection(d);

    var e = Math.atan2(d.x, d.z);

    var f = _reducer.const_var.scene.getObjectByName("UserCamera").position;

    var g = 1;
    var l = "";
    if (Math.abs(e * g) < Math.PI / 4 || Math.abs(e * g) > 3 * Math.PI / 4) {
      if (Math.abs(e) > Math.PI / 2) {
        l = "Front";
      } else {
        l = "Back";
      }
    } else if (f.x > 0) {
      l = "Right";
    } else {
      l = "Left";
    }
    _reducer.const_var.controls.WallPos = Val;
    _reducer.const_var.controls.WallPosPrev = l;
    _reducer.const_var.controls.DoorValue = "";
    _reducer.const_var.controls.DoorType = "";
    _reducer.const_var.controls.EditMode = false;
    _reducer.const_var.controls.Id = ""; //controls.BooleanVal = Bool;

    _reducer.const_var.controls.BooleanVal = Bool;
    _reducer.const_var.controls.StringVal = Str;
    _reducer.const_var.controls.DoorTypeSecond = "";
    _reducer.const_var.controls.autoRotateSpeed = 6.0;
    _reducer.const_var.controls.autoRotate = true; //const_var.controls.update();
  } else {
    _reducer.const_var.controls.autoRotate = false;

    _reducer.const_var.controls.update();
  }
};

exports.navRotLeft = navRotLeft;
var _default = componentReducer;
exports["default"] = _default;