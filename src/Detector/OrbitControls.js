import {
	EventDispatcher,
	MOUSE,
	Quaternion,
	Spherical,
	TOUCH,
	Vector2,
	Vector3
} from 'three';
import * as THREE from "three";
import { params, const_var, updateSlider, } from '../redux/reducers/reducer';
import * as cuComponent from '../redux/reducers/componentReducer';
import store from '../redux/store';

// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one-finger move
//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
//    Pan - right mouse, or left mouse + ctrl/meta/shiftKey, or arrow keys / touch: two-finger move

const _changeEvent = { type: 'change' };
const _startEvent = { type: 'start' };
const _endEvent = { type: 'end' };

class OrbitControls extends EventDispatcher {

	constructor( object, domElement ) {

		super();

		if ( domElement === undefined ) console.warn( 'THREE.OrbitControls: The second parameter "domElement" is now mandatory.' );
		if ( domElement === document ) console.error( 'THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.' );

		this.object = object;
		this.domElement = domElement;
		this.domElement.style.touchAction = 'none'; // disable touch scroll

		// Set to false to disable this control
		this.enabled = true;

		// "target" sets the location of focus, where the object orbits around
		this.target = new Vector3();

		// How far you can dolly in and out ( PerspectiveCamera only )
		this.minDistance = 0;
		this.maxDistance = Infinity;

		// How far you can zoom in and out ( OrthographicCamera only )
		this.minZoom = 0;
		this.maxZoom = Infinity;

		// How far you can orbit vertically, upper and lower limits.
		// Range is 0 to Math.PI radians.
		this.minPolarAngle = 0; // radians
		this.maxPolarAngle = Math.PI; // radians

		// How far you can orbit horizontally, upper and lower limits.
		// If set, the interval [ min, max ] must be a sub-interval of [ - 2 PI, 2 PI ], with ( max - min < 2 PI )
		this.minAzimuthAngle = - Infinity; // radians
		this.maxAzimuthAngle = Infinity; // radians

		// Set to true to enable damping (inertia)
		// If damping is enabled, you must call controls.update() in your animation loop
		this.enableDamping = false;
		this.dampingFactor = 0.05;

		// This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
		// Set to false to disable zooming
		this.enableZoom = true;
		this.zoomSpeed = 1.0;

		// Set to false to disable rotating
		this.enableRotate = true;
		this.rotateSpeed = 1.0;

		// Set to false to disable panning
		this.enablePan = true;
		this.panSpeed = 1.0;
		this.screenSpacePanning = true; // if false, pan orthogonal to world-space direction camera.up
		this.keyPanSpeed = 7.0;	// pixels moved per arrow key push

		// Set to true to automatically rotate around the target
		// If auto-rotate is enabled, you must call controls.update() in your animation loop
		this.autoRotate = false;
		this.autoRotateSpeed = 2.0; // 30 seconds per orbit when fps is 60

		// The four arrow keys
		this.keys = { LEFT: 'ArrowLeft', UP: 'ArrowUp', RIGHT: 'ArrowRight', BOTTOM: 'ArrowDown' };

		// Mouse buttons
		this.mouseButtons = { LEFT: MOUSE.ROTATE, MIDDLE: MOUSE.DOLLY, RIGHT: MOUSE.PAN };

		// Touch fingers
		this.touches = { ONE: TOUCH.ROTATE, TWO: TOUCH.DOLLY_PAN };

		// for reset
		this.target0 = this.target.clone();
		this.position0 = this.object.position.clone();
		this.zoom0 = this.object.zoom;

		// the target DOM element for key events
		this._domElementKeyEvents = null;

		//
		// public methods
		//

		this.getPolarAngle = function () {

			return spherical.phi;

		};

		this.getAzimuthalAngle = function () {

			return spherical.theta;

		};

		this.getDistance = function () {

			return this.object.position.distanceTo( this.target );

		};

		this.listenToKeyEvents = function ( domElement ) {

			domElement.addEventListener( 'keydown', onKeyDown );
			this._domElementKeyEvents = domElement;

		};

		this.saveState = function () {

			scope.target0.copy( scope.target );
			scope.position0.copy( scope.object.position );
			scope.zoom0 = scope.object.zoom;

		};

		this.reset = function () {

			scope.target.copy( scope.target0 );
			scope.object.position.copy( scope.position0 );
			scope.object.zoom = scope.zoom0;

			scope.object.updateProjectionMatrix();
			scope.dispatchEvent( _changeEvent );

			scope.update();

			state = STATE.NONE;

		};

		// this method is exposed, but perhaps it would be better if we can make it private...
		this.update = function () {

			const offset = new Vector3();

			// so camera.up is the orbit axis
			const quat = new Quaternion().setFromUnitVectors( object.up, new Vector3( 0, 1, 0 ) );
			const quatInverse = quat.clone().invert();

			const lastPosition = new Vector3();
			const lastQuaternion = new Quaternion();

			const twoPI = 2 * Math.PI;

			return function update() {

				if (state === STATE.ROTATE || state === STATE.TOUCH_ROTATE) {
					

					let rotAngle = scope.getAzimuthalAngle();

				  if (!params.isBreezeway) {

					!const_var.b_s_c_n && scope.target.set(0, 5, 0);

					if ((const_var.focusedSection === 'centerbuilding' || const_var.focusedSection == '') && !const_var.b_s_c_n) {
						
						let rotAngle = scope.getAzimuthalAngle();

						if (-Math.PI/4 < rotAngle && rotAngle < Math.PI/4) {
							// if (!params.add_left_front_lean_porch && params.add_left_lean && rotAngle < -Math.PI/8) {
							// 	params.activeWall = "L_L_F_W";
							// }else if (!params.add_right_front_lean_porch && params.add_right_lean && rotAngle > Math.PI/8){
							// 	params.activeWall = "R_L_F_W";
							// } else if (params.add_front_lean && params.isShowCenter==false) {
							// 	params.activeWall = "F_L_F_W";
							// } else 
							if(params.p_u_c == true && params.p_f_w !="Close"){
								params.activeWall = "c_b_f_s_w";
							} else {
								params.activeWall = "c_b_f_w";
							}

							if (const_var.activemaintabkey == "doorWindows") store.dispatch({type: "changeActiveWall", value: params.activeWall});
						} else if ( Math.PI/4 < rotAngle && rotAngle < 3 * Math.PI/4 ) {
							// if (!params.add_right_front_lean_porch && params.add_front_lean && rotAngle < (Math.PI * 3 / 8)) {
							// 	params.activeWall = "F_L_R_W";
							// }else if (!params.add_right_back_lean_porch && params.add_back_lean && rotAngle > (Math.PI * 5 / 8 )){
							// 	params.activeWall = "B_L_F_W";
							// } else if (params.add_right_lean && params.isShowCenter==false) {
							// 	params.activeWall = "R_L_R_W";
							// } else
							 if(params.p_u_c == true && params.p_r_w !="Close"){
								params.activeWall = "c_b_r_s_w";
							} else {
								params.activeWall = ((params.singleSlope == true)? "F_S_L_R_W" : 'c_b_r_w');
							}
							if (const_var.activemaintabkey == "doorWindows") store.dispatch({type: "changeActiveWall", value: params.activeWall});
						} else if (3 * Math.PI/4 < rotAngle || rotAngle < - 3 * Math.PI/4) {
							// if (!params.add_right_back_lean_porch && params.add_right_lean && rotAngle < (Math.PI * 7 / 8) && (3 * Math.PI/4) < rotAngle) {
							// 	params.activeWall = "R_L_B_W";
							// }else if (!params.add_left_back_lean_porch && params.add_left_lean && rotAngle > (- Math.PI * 7 / 8) && rotAngle < (- 3 * Math.PI/4)){
							// 	params.activeWall = "L_L_B_W";
							// } else if (params.add_back_lean && params.isShowCenter==false) {
							// 	params.activeWall = "B_L_S_W";
							// } else 
							if(params.p_u_c == true && params.p_b_w !="Close"){
								params.activeWall = "c_b_b_s_w";
							} else {
								params.activeWall = "c_b_b_w";
							}
							if (const_var.activemaintabkey == "doorWindows") store.dispatch({type: "changeActiveWall", value: params.activeWall});
						} else if ( -Math.PI/4 > rotAngle && rotAngle > - 3 * Math.PI/4) {
							// if (!params.add_left_front_lean_porch && params.add_front_lean && rotAngle > (-Math.PI * 3 / 8)) {
							// 	params.activeWall = "F_L_L_W";
							// }else if (!params.add_left_back_lean_porch && params.add_back_lean && rotAngle < (-Math.PI * 5 / 8 )){
							// 	params.activeWall = "B_L_B_W";
							// } else if (params.add_left_lean && params.isShowCenter == false) {
							// 	params.activeWall = "L_L_L_W";
							// } else 
							if (params.p_l_w!="Close" && params.p_u_c==true) {
								params.activeWall = "c_b_l_s_w";
							} else {
								params.activeWall = "c_b_l_w";
							}
							if (const_var.activemaintabkey == "doorWindows") store.dispatch({type: "changeActiveWall", value: params.activeWall});
						}
					}
				  } else {
					if (-Math.PI/4 < rotAngle && rotAngle < Math.PI/4) {
						if (params.activeWall === "c_b_f_s_b_w" || params.activeWall === "c_b_f_s_w") params.activeWall = params.activeWall;
						else params.activeWall = "c_b_f_w";
					 } else if ( Math.PI/4 < rotAngle && rotAngle < 3 * Math.PI/4 ) {
					 	if ( Math.PI/4 < rotAngle && 1.644 > rotAngle ) {
					 		params.activeWall = "c_b_f_s_r_w";
					 	} else {
					 		params.activeWall = "c_b_r_s_w";
					 	}
					 } else if (3 * Math.PI/4 < rotAngle || rotAngle < - 3 * Math.PI/4) {
						if (params.activeWall === "c_b_f_s_b_w" || params.activeWall === "c_b_f_s_w") params.activeWall = params.activeWall;
						else params.activeWall = "c_b_b_w";
					 } else if ( -Math.PI/4 > rotAngle && rotAngle > - 3 * Math.PI/4) {
					 	if ( -Math.PI/4 > rotAngle && -1.600 > rotAngle ) {
					 		params.activeWall = "c_b_l_s_w";
					 	} else {
					 		params.activeWall = "c_b_f_s_l_w";
					 	}
					 }
				  }
					
				}

				const position = scope.object.position;

				offset.copy( position ).sub( scope.target );

				// rotate offset to "y-axis-is-up" space
				offset.applyQuaternion( quat );

				// angle from z-axis around y-axis
				spherical.setFromVector3( offset );

				if ( scope.autoRotate && state === STATE.NONE ) {

					rotateLeft( getAutoRotationAngle() );

				}

				if ( scope.enableDamping ) {

					spherical.theta += sphericalDelta.theta * scope.dampingFactor;
					spherical.phi += sphericalDelta.phi * scope.dampingFactor;

				} else {

					spherical.theta += sphericalDelta.theta;
					spherical.phi += sphericalDelta.phi;

				}

				// restrict theta to be between desired limits

				let min = scope.minAzimuthAngle;
				let max = scope.maxAzimuthAngle;

				if ( isFinite( min ) && isFinite( max ) ) {

					if ( min < - Math.PI ) min += twoPI; else if ( min > Math.PI ) min -= twoPI;

					if ( max < - Math.PI ) max += twoPI; else if ( max > Math.PI ) max -= twoPI;

					if ( min <= max ) {

						spherical.theta = Math.max( min, Math.min( max, spherical.theta ) );

					} else {

						spherical.theta = ( spherical.theta > ( min + max ) / 2 ) ?
							Math.max( min, spherical.theta ) :
							Math.min( max, spherical.theta );

					}

				}
				if (scope.autoRotate && state === STATE.NONE) {
					var d = new THREE.Vector3();
        			const_var.scene.getObjectByName("UserCamera").getWorldDirection(d);
					var e = Math.atan2(d.x, d.z);
					var f = const_var.scene.getObjectByName("UserCamera").position;
					var g = 1;
					var l = "";
					var val = "";
					var checkVal = "";
					if(scope.WallPos!="")
					{
						
						if (Math.abs(e * g) < Math.PI / 4 || Math.abs(e * g) > 3 * Math.PI / 4) if (Math.abs(e) > Math.PI / 2) {
							l = "Front";
							val = Math.round(const_var.scene.getObjectByName("UserCamera").position.x);
							checkVal = (params.p_w/2)-2;
						}else{
							l = "Back";
							val = Math.round(const_var.scene.getObjectByName("UserCamera").position.x);
							checkVal = (params.p_w/2)-2;
						}else if(f.x > 0)
						{
							l = "Right";
							val = Math.round(const_var.scene.getObjectByName("UserCamera").position.z);
							checkVal = (params.p_d/2)-2;
						}else{
							l = "Left";
							val = Math.round(const_var.scene.getObjectByName("UserCamera").position.z);
							checkVal = (params.p_d/2)-2;
						}
						//console.log("Malviya Test",l,scope.WallPosPrev,scope.WallPos,val,const_var.i_g_A_y.length,const_var.checkIval,e.toFixed(2),Math.sign(e));
						if(scope.WallPosPrev=="Right" && scope.WallPos=="Back")
						{
							//rotateLeft( 2 * -Math.PI / 60 / 60 * scope.autoRotateSpeed );
							rotateLeft( 2 * -Math.PI / 60 / 60 * scope.autoRotateSpeed );
						}
						else if(scope.WallPosPrev=="Back" && scope.WallPos=="Left")
						{
							//rotateLeft( 2 * -Math.PI / 60 / 60 * scope.autoRotateSpeed );
							rotateLeft( 2 * -Math.PI / 60 / 60 * scope.autoRotateSpeed );
						}else if(scope.WallPosPrev=="Left" && scope.WallPos=="Front")
						{
							//rotateLeft( 2 * -Math.PI / 60 / 60 * scope.autoRotateSpeed );
							rotateLeft( 2 * -Math.PI / 60 / 60 * scope.autoRotateSpeed );
						}else if(scope.WallPosPrev=="Front" && scope.WallPos=="Right")
						{
							//rotateLeft( 2 * -Math.PI / 60 / 60 * scope.autoRotateSpeed );
							rotateLeft( 2 * -Math.PI / 60 / 60 * scope.autoRotateSpeed );
						}else{
							//rotateLeft( 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed );
							rotateLeft( 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed );
						}
						if(l==scope.WallPos && (Math.abs(val)>=0 && Math.abs(val)<=checkVal) && scope.DoorValue!="")
						{
							if(scope.DoorValue!="" && scope.EditMode==false)
							{
								if(scope.DoorTypeSecond=="garage")
								{
									if(scope.DoorType=="CustomFrameout")
									{
										var splitval = scope.DoorValue.split("X");
										
										params.f_r_m_o_t = splitval[0];
										params.f_r_m_o_t1 = splitval[1];
									}
									params.p_a_g_r_u_d = (scope.DoorType=="CustomFrameout")?scope.DoorValue+"_Frameout":scope.DoorValue;
									params.doorType = scope.DoorType;
									//a_d_w_w.addGarageRollUpDoor(params.p_a_g_r_u_d);
								}if(scope.DoorTypeSecond=="door")
								{
									params.p_d_c = (scope.DoorType=="WalkFrameout")?scope.DoorValue+"_Frameout":scope.DoorValue;
									params.doorType = scope.DoorType;
								   //a_d_w_w.addDoor(params.p_d_c)
								}if(scope.DoorTypeSecond=="window")
								{
									params.p_w_cc = (scope.DoorType=="WindowsFrameout")?scope.DoorValue+"_Frameout":scope.DoorValue;
									params.doorType = scope.DoorType;
									//a_d_w_w.addWindow(params.p_w_cc)
								}
							}
							if(scope.DoorValue!="" && scope.EditMode==true)
							{
								if(scope.DoorType=="CustomFrameout")
								{
									var splitval = scope.DoorValue.split("X");
		  
									params.f_r_m_o_t = splitval[0];
									params.f_r_m_o_t1 = splitval[1];
									var Val1 = (scope.DoorType=="CustomFrameout")?scope.DoorValue+"_Frameout":scope.DoorValue;
									//RmComtFmLtgDrComp(Val1,scope.Id,scope.Id,scope.WallPos,scope.DoorTypeSecond,scope.DoorType);
								}else{
									//RmComtFmLtgDrComp(scope.DoorValue,scope.Id,scope.Id,scope.WallPos,scope.DoorTypeSecond,scope.DoorType);
								}
								
							}
							scope.autoRotate = false;
							//(l=="Left")?dollyIn((Math.pow( 2, scope.zoomSpeed ))):'';
						}
						//console.log(l,scope.WallPos,val);
						if(l==scope.WallPos && (Math.abs(val)>=0 && Math.abs(val)<=2) && scope.DoorValue=="")
						{//console.log(const_var.i_g_A_y,"Reducer2",Math.abs(spherical.theta));
						  //console.log(l,scope.WallPos,val);  
							/*if(scope.BooleanVal==true && const_var.i_g_A_y.length<=5)
							{
								var ImgTitle = (const_var.i_g_A_y.length==4)?"Top":scope.WallPos;
								const_var.i_g_A_y.push({"image":const_var.renderer.domElement.toDataURL("image/jpeg"),"image_name":ImgTitle});
								if(const_var.i_g_A_y.length==5)
								{
									//PerformAction(scope.StringVal);
								}
							}                                    
							scope.autoRotate = false;
							*/
							if(scope.StringVal=='')
							{
							  scope.autoRotate = false;
							}
							// if(scope.WallPos!="Select")
							// {
							//     $(".componentSelection").css('display', 'inline-block');
							// }else{
							//     $(".componentSelection").css('display', 'none');
							// }
							//(l=="Left")?dollyIn((Math.pow( 2, scope.zoomSpeed ))):'';
						}
						
						var eVal = e.toFixed(2);//console.log(l,scope.BooleanVal,const_var.i_g_A_y.length,const_var.checkIval,eVal,Math.sign(eVal));
						if(scope.DoorValue=="" && const_var.i_g_A_y.length<=6)
						  {
							if(l == "Front" && const_var.checkIval == 1 && (Math.abs(eVal)<= 3.12) && Math.sign(eVal) == 1)// && const_var.i_g_A_y.length == 3
							{
							  var ImgTitle = "Front";//(const_var.i_g_A_y.length==4)?"Top":title;
							  const_var.i_g_A_y.push({"image":const_var.renderer.domElement.toDataURL("image/jpeg"),"image_name":ImgTitle});
							  scope.autoRotate = false;
							  //console.log(const_var.checkIval);
							  if(scope.BooleanVal = true && const_var.checkIval<=6 && const_var.checkIval > 0)
							  {
								  cuComponent.TsCeSot(scope.StringVal);
							  }
							}
							if(l == "Left" && const_var.checkIval == 2 && (Math.abs(eVal)<= 2.12) && Math.sign(eVal) == 1)// && const_var.i_g_A_y.length == 3
							{
							  var ImgTitle = "Left";//(const_var.i_g_A_y.length==4)?"Top":title;
							  const_var.i_g_A_y.push({"image":const_var.renderer.domElement.toDataURL("image/jpeg"),"image_name":ImgTitle});
							  scope.autoRotate = false;
							  //console.log(const_var.checkIval);
							  if(scope.BooleanVal = true && const_var.checkIval<=6 && const_var.checkIval > 0)
							  {
								  cuComponent.TsCeSot(scope.StringVal);
							  }
							}
							if(l == "Back" && const_var.checkIval == 3 && (Math.abs(eVal)<= 0.12) && Math.sign(eVal) == 1)// && const_var.i_g_A_y.length == 3
							{
							  var ImgTitle = "Back";//(const_var.i_g_A_y.length==4)?"Top":title;
							  const_var.i_g_A_y.push({"image":const_var.renderer.domElement.toDataURL("image/jpeg"),"image_name":ImgTitle});
							  scope.autoRotate = false;
							  //console.log(const_var.checkIval);
							  if(scope.BooleanVal = true && const_var.checkIval<=6 && const_var.checkIval > 0)
							  {
								  cuComponent.TsCeSot(scope.StringVal);
							  }
							}
							if(l == "Right" && const_var.checkIval == 4 && (Math.abs(eVal)>= 2.12) && Math.sign(eVal) == -1)// && const_var.i_g_A_y.length == 3
							{
							  var ImgTitle = "Right";//(const_var.i_g_A_y.length==4)?"Top":title;
							  const_var.i_g_A_y.push({"image":const_var.renderer.domElement.toDataURL("image/jpeg"),"image_name":ImgTitle});
							  scope.autoRotate = false;
							  //console.log(const_var.checkIval);
							  if(scope.BooleanVal = true && const_var.checkIval<=6 && const_var.checkIval > 0)
							  {
								  cuComponent.TsCeSot(scope.StringVal);
							  }
							}
							if(l == "Front" && const_var.checkIval == 5 && (Math.abs(eVal)>= 3.07) && Math.sign(eVal) == -1)// && const_var.i_g_A_y.length == 3
							{
							  scope.object.maxPolarAngle = Math.PI * 0.25;
							  var ImgTitle = "Top";//(const_var.i_g_A_y.length==4)?"Top":title;
							  const_var.i_g_A_y.push({"image":const_var.renderer.domElement.toDataURL("image/jpeg"),"image_name":ImgTitle});
							  scope.autoRotate = false;
							  //console.log(const_var.checkIval);
							  if(scope.BooleanVal = true && const_var.checkIval<=6 && const_var.checkIval > 0)
							  {
								  cuComponent.TsCeSot(scope.StringVal);
							  }
							  scope.autoRotate = false;
							}
							
							if(scope.BooleanVal = true && const_var.checkIval<=6 && const_var.checkIval > 0 && const_var.i_g_A_y.length == 5)
							{  
								//cuComponent.TsCeSot(scope.StringVal);
							}
							//console.log(const_var.i_g_A_y);
						  }
						  //console.log(scope.autoRotate);
						//if(l!=scope.WallPos && (Math.abs(eVal)== 0.39 || Math.abs(eVal)== 1.17 || Math.abs(eVal)== 1.95 || Math.abs(eVal)== 2.73) && scope.DoorValue=="")
						//if(l!=scope.WallPos && (Math.abs(eVal)== 0.42 || Math.abs(eVal)== 2.12 || Math.abs(eVal)== 2.12 || Math.abs(eVal)== 2.63 || Math.abs(eVal)== 3.1) && scope.DoorValue=="")
						if(false && l!=scope.WallPos && (Math.abs(eVal)== 2.12 || Math.abs(eVal)== 2.12 || Math.abs(eVal)== 3.1) && scope.DoorValue=="")
						{                
						//   console.log(const_var.checkIval,Math.abs(eVal),Math.sign(eVal),eVal);
						  //scope.autoRotate = false;                 
						  if(scope.BooleanVal==true && const_var.i_g_A_y.length<=5)
						  {const_var.animationPlay = false;
							// console.log(l,Math.abs(eVal),Math.sign(eVal),eVal,scope.WallPos);
							  var title = "";                    
							  //if((Math.abs(eVal)== 2.12) && Math.sign(eVal) == 1 && const_var.checkIval == 1)// && const_var.i_g_A_y.length == 0
							  if((Math.abs(eVal)== 2.12) && Math.sign(eVal) == 1 && const_var.checkIval == 2)
							  {
								scope.autoRotate = false;
								title = "Left";console.log(title,Math.abs(eVal),Math.sign(eVal),eVal);
								var ImgTitle = title;//(const_var.i_g_A_y.length==4)?"Top":title;
								const_var.i_g_A_y.push({"image":const_var.renderer.domElement.toDataURL("image/jpeg"),"image_name":ImgTitle});
								//scope.autoRotate = false;
								console.log(const_var.checkIval);
								if(scope.BooleanVal = true && const_var.checkIval<=6 && const_var.checkIval > 0)
								{
									//cuComponent.TsCeSot(scope.StringVal);
								}
							  }
							  if((Math.abs(eVal)== 0.42) && Math.sign(eVal) == 1 && const_var.checkIval == 2)// && const_var.i_g_A_y.length == 1
							  {/*                      
								title = "Back";console.log(title,Math.abs(eVal),Math.sign(eVal),eVal);
								var ImgTitle = title;//(const_var.i_g_A_y.length==4)?"Top":title;
								//const_var.i_g_A_y.push({"image":const_var.renderer.domElement.toDataURL("image/jpeg"),"image_name":ImgTitle});
							  */}
							  //if((Math.abs(eVal)== 2.12) && Math.sign(eVal) == -1 && const_var.checkIval == 3)// && const_var.i_g_A_y.length == 2
							  if((Math.abs(eVal)== 2.12) && Math.sign(eVal) == -1 && const_var.checkIval == 4)
							  {
								title = "Right";console.log(title,Math.abs(eVal),Math.sign(eVal),eVal);
								var ImgTitle = title;//(const_var.i_g_A_y.length==4)?"Top":title;
								const_var.i_g_A_y.push({"image":const_var.renderer.domElement.toDataURL("image/jpeg"),"image_name":ImgTitle});
								scope.autoRotate = false;
								console.log(const_var.checkIval);
								if(scope.BooleanVal = true && const_var.checkIval<=6 && const_var.checkIval > 0)
								{
									//cuComponent.TsCeSot(scope.StringVal);
								}
							  }
							  if((Math.abs(eVal)== 2.63) && Math.sign(eVal) == -1 && const_var.checkIval == 4)// && const_var.i_g_A_y.length == 3
							  {/*
								title = "Front";console.log(title,Math.abs(eVal),Math.sign(eVal),eVal);
								var ImgTitle = title;//(const_var.i_g_A_y.length==4)?"Top":title;
								//const_var.i_g_A_y.push({"image":const_var.renderer.domElement.toDataURL("image/jpeg"),"image_name":ImgTitle});
							  */}
							  //if((Math.abs(eVal)== 3.1))// && const_var.i_g_A_y.length == 4
							  if((Math.abs(eVal)== 3.1) && const_var.checkIval == 5)
							  {
								title = "Top";console.log(title,Math.abs(eVal),Math.sign(eVal),eVal);
								//scope.object.maxPolarAngle = Math.PI * 0.25;
								var ImgTitle = title;//(const_var.i_g_A_y.length==4)?"Top":title;
								//const_var.i_g_A_y.push({"image":const_var.renderer.domElement.toDataURL("image/jpeg"),"image_name":ImgTitle});
								scope.autoRotate = false;
								console.log(const_var.checkIval);
								if(scope.BooleanVal = true && const_var.checkIval<=6 && const_var.checkIval > 0)
								{
									//cuComponent.TsCeSot(scope.StringVal);
								}
							  }
							  /*var ImgTitle = (const_var.i_g_A_y.length==4)?"Top":title;
							  const_var.i_g_A_y.push({"image":const_var.renderer.domElement.toDataURL("image/jpeg"),"image_name":ImgTitle});
							  if(const_var.i_g_A_y.length==5)
							  {
								  //PerformAction(scope.StringVal);
							  }*/
							//   console.log(const_var.checkIval,const_var.i_g_A_y,"Reducer2",Math.abs(eVal),ImgTitle);
						  }
						  /*scope.autoRotate = false;
						  console.log(const_var.checkIval);
						  if(scope.BooleanVal = true && const_var.checkIval<=6 && const_var.checkIval > 0)
						  {
							  cuComponent.TsCeSot(scope.StringVal);
						  }*/                                   
						}
						
						//console.log(const_var.checkIval,l,scope.WallPos,scope.DoorValue,Math.abs(eVal));
						//console.log(const_var.checkIval,const_var.i_g_A_y.length,const_var.i_g_A_y,"Reducer2",Math.abs(spherical.theta),Math.abs(e));              
					}else{
						rotateLeft( 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed );
					}          
					//rotateLeft(getAutoRotationAngle());
				  }

				// restrict phi to be between desired limits
				spherical.phi = Math.max( scope.minPolarAngle, Math.min( scope.maxPolarAngle, spherical.phi ) );

				spherical.makeSafe();


				spherical.radius *= scale;

				// restrict radius to be between desired limits
				spherical.radius = Math.max( scope.minDistance, Math.min( scope.maxDistance, spherical.radius ) );

				// move target to panned location

				if ( scope.enableDamping === true ) {

					scope.target.addScaledVector( panOffset, scope.dampingFactor );

				} else {

					scope.target.add( panOffset );

				}

				offset.setFromSpherical( spherical );

				// rotate offset back to "camera-up-vector-is-up" space
				offset.applyQuaternion( quatInverse );

				position.copy( scope.target ).add( offset );

				scope.object.lookAt( scope.target );

				if ( scope.enableDamping === true ) {

					sphericalDelta.theta *= ( 1 - scope.dampingFactor );
					sphericalDelta.phi *= ( 1 - scope.dampingFactor );

					panOffset.multiplyScalar( 1 - scope.dampingFactor );

				} else {

					sphericalDelta.set( 0, 0, 0 );

					panOffset.set( 0, 0, 0 );

				}

				scale = 1;

				// update condition is:
				// min(camera displacement, camera rotation in radians)^2 > EPS
				// using small-angle approximation cos(x/2) = 1 - x^2 / 8

				if ( zoomChanged ||
					lastPosition.distanceToSquared( scope.object.position ) > EPS ||
					8 * ( 1 - lastQuaternion.dot( scope.object.quaternion ) ) > EPS ) {

					scope.dispatchEvent( _changeEvent );

					lastPosition.copy( scope.object.position );
					lastQuaternion.copy( scope.object.quaternion );
					zoomChanged = false;

					return true;

				}

				return false;

			};

		}();

		this.dispose = function () {

			scope.domElement.removeEventListener( 'contextmenu', onContextMenu );

			scope.domElement.removeEventListener( 'pointerdown', onPointerDown );
			scope.domElement.removeEventListener( 'pointercancel', onPointerCancel );
			scope.domElement.removeEventListener( 'wheel', onMouseWheel );

			scope.domElement.removeEventListener( 'pointermove', onPointerMove );
			scope.domElement.removeEventListener( 'pointerup', onPointerUp );


			if ( scope._domElementKeyEvents !== null ) {

				scope._domElementKeyEvents.removeEventListener( 'keydown', onKeyDown );

			}

			//scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?

		};
		
		/*  Acessing in Building controller file */
		this.setDollyIn = function(dollyScale) {
			dollyIn(dollyScale);
		}
		this.setDollyOut = function(dollyScale) {
			dollyOut(dollyScale);
		}

		/* End*/ 

		const ZoomOut = () => {
			const_var.scene.children.forEach(function(Group) {

				if ("leftWallName" == Group.name || "rightWallName" == Group.name || "frontWallName" == Group.name || "backWallName" == Group.name 
					// || "RLfrontWallName" == Group.name || "RLsideWallName" == Group.name || "RLbackWallName" == Group.name ||
					// "LLfrontWallName" == Group.name || "LLsideWallName" == Group.name || "LLbackWallName" == Group.name ||
					// "FLbackWallName" == Group.name || "FLfrontWallName" == Group.name || "FLsideWallName" == Group.name || 
					// "BLfrontWallName" == Group.name || "BLsideWallName" == Group.name || "BLbackWallName" == Group.name 
					) { 
					var scaleVector = new THREE.Vector3();
					var scaleFactor = 30;
					var zoomScale = scaleVector.subVectors(Group.position, const_var.camera.position).length() / scaleFactor;
					Group.scale.set(zoomScale*1.2, zoomScale*1.2, zoomScale*1.2);
					Group.position.y = zoomScale*0.8

				}

				if ("C_B_ArrowsBody" == Group.name  || "FrontLeanArrowBody" == Group.name || "BackLeanArrowBody" == Group.name || "LeftLeanArrowBody" == Group.name || "RightLeanArrowBody" == Group.name 
				|| "cbDoorArrowsBody" == Group.name || "LeftLeanDoorArrowBody" == Group.name|| "RightLeanDoorArrowBody" == Group.name|| "FrontLeanDoorArrowBody" == Group.name|| "BackLeanDoorArrowBody" == Group.name) { 
					Group.children.map(geo => {
						  var scaleVector = new THREE.Vector3();
						 var scaleFactor = 30;
						 var zoomScale = scaleVector.subVectors(geo.position, const_var.camera.position).length() / scaleFactor;
						 geo.scale.set(zoomScale*1.2,1,zoomScale*1.2);
					})
				} else if ("C_B_ArrowsDim" == Group.name  || "FrontLeanArrowDim" == Group.name || "BackLeanArrowDim" == Group.name || "LeftLeanArrowDim" == Group.name || "RightLeanArrowDim" == Group.name ) {
					Group.children.map(geo => {
						   var scaleVector = new THREE.Vector3();
						   var scaleFactor = 30;
						   var zoomScale = scaleVector.subVectors(geo.position, const_var.camera.position).length() / scaleFactor;
						   geo.scale.set(zoomScale,zoomScale,1);
					})
				 }  	else if ("C_B_Arrows"== Group.name  || "FrontLeanArrow" == Group.name || "BackLeanArrows" == Group.name|| "LeftLeanArrows" == Group.name || "RightLeanArrows" == Group.name
				         || "cbDoorArrows" == Group.name|| "FrontLeanDoorArrow" == Group.name|| "BackLeanDoorArrows" == Group.name|| "RightLeanDoorArrows" == Group.name|| "LeftLeanDoorArrows" == Group.name  ) {
					Group.children.map(geo => {
						var scaleVector = new THREE.Vector3();
						var scaleFactor = 30;
						var zoomScale = scaleVector.subVectors(geo.position, const_var.camera.position).length() / scaleFactor;
						geo.scale.set(zoomScale*1.8, zoomScale*1.8, zoomScale*1.8);
					})
				}
			  })
		}

		this.ZoomOut = ZoomOut

		const ZoomIn = () =>{
			const_var.scene.children.forEach(function(Group) {

				if ("leftWallName" == Group.name || "rightWallName" == Group.name || "frontWallName" == Group.name || "backWallName" == Group.name
					// || "RLfrontWallName" == Group.name || "RLsideWallName" == Group.name || "RLbackWallName" == Group.name ||
					// "LLfrontWallName" == Group.name || "LLsideWallName" == Group.name || "LLbackWallName" == Group.name ||
					// "FLbackWallName" == Group.name || "FLfrontWallName" == Group.name || "FLsideWallName" == Group.name || 
					// "BLfrontWallName" == Group.name || "BLsideWallName" == Group.name || "BLbackWallName" == Group.name 
					) { 
					var scaleVector = new THREE.Vector3();
					var scaleFactor = 30;
					var zoomScale = scaleVector.subVectors(Group.position, const_var.camera.position).length() / scaleFactor;
					Group.scale.set(zoomScale*1.2, zoomScale*1.2, zoomScale*1.2);
					Group.position.y = zoomScale*0.8

				}

				if ("C_B_ArrowsBody" == Group.name || "FrontLeanArrowBody" == Group.name || "LeftLeanArrowBody" == Group.name || "BackLeanArrowBody" == Group.name || "RightLeanArrowBody" == Group.name || "cbDoorArrowsBody" == Group.name || "LeftLeanDoorArrowBody" == Group.name|| "RightLeanDoorArrowBody" == Group.name|| "FrontLeanDoorArrowBody" == Group.name|| "BackLeanDoorArrowBody" == Group.name) { 
				  Group.children.map(geometry => {
				      var scaleVector = new THREE.Vector3();
            	      var scaleFactor = 30;
            	      var zoomScale = scaleVector.subVectors(geometry.position, const_var.camera.position).length() / scaleFactor;
            	      geometry.scale.set(zoomScale*1.2, 1, zoomScale*1.2);
					})
            	} else if ("C_B_ArrowsDim" == Group.name  || "FrontLeanArrowDim" == Group.name || "BackLeanArrowDim" == Group.name || "LeftLeanArrowDim" == Group.name || "RightLeanArrowDim" == Group.name ) {
				  	Group.children.map(geometry => {
				  		var scaleVector = new THREE.Vector3();
				  		var scaleFactor = 30;
				  		var zoomScale = scaleVector.subVectors(geometry.position, const_var.camera.position).length() / scaleFactor;
				  		geometry.scale.set(zoomScale*1.2, zoomScale*1.2, 1);
					})
				} else if ("C_B_Arrows" == Group.name  || "FrontLeanArrow" == Group.name || "BackLeanArrows" == Group.name || "LeftLeanArrows" == Group.name || "RightLeanArrows" == Group.name 
				   || "cbDoorArrows" == Group.name || "FrontLeanDoorArrow" == Group.name|| "BackLeanDoorArrows" == Group.name|| "RightLeanDoorArrows" == Group.name|| "LeftLeanDoorArrows" == Group.name ) {
				    Group.children.map(geometry => {
						var scaleVector = new THREE.Vector3();
						var scaleFactor = 30;
						var zoomScale = scaleVector.subVectors(geometry.position, const_var.camera.position).length() / scaleFactor;
						geometry.scale.set(zoomScale*1.8, zoomScale*1.8, zoomScale*1.8);
					})
				}
       		})
		}
		//
		// internals
		//

		const scope = this;

		const STATE = {
			NONE: - 1,
			ROTATE: 0,
			DOLLY: 1,
			PAN: 2,
			TOUCH_ROTATE: 3,
			TOUCH_PAN: 4,
			TOUCH_DOLLY_PAN: 5,
			TOUCH_DOLLY_ROTATE: 6
		};

		let state = STATE.NONE;

		const EPS = 0.000001;

		// current position in spherical coordinates
		const spherical = new Spherical();
		const sphericalDelta = new Spherical();

		let scale = 1;
		const panOffset = new Vector3();
		let zoomChanged = false;

		const rotateStart = new Vector2();
		const rotateEnd = new Vector2();
		const rotateDelta = new Vector2();

		const panStart = new Vector2();
		const panEnd = new Vector2();
		const panDelta = new Vector2();

		const dollyStart = new Vector2();
		const dollyEnd = new Vector2();
		const dollyDelta = new Vector2();

		const pointers = [];
		const pointerPositions = {};

		function getAutoRotationAngle() {

			return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

		}

		function getZoomScale() {

			return Math.pow( 0.95, scope.zoomSpeed );

		}

		function rotateLeft( angle ) {
			sphericalDelta.theta -= angle;
			ZoomOut();
			ZoomIn();

		}

		function rotateUp( angle ) {
			sphericalDelta.phi -= angle;
			ZoomOut();
			ZoomIn();

		}

		const panLeft = function () {

			const v = new Vector3();

			return function panLeft( distance, objectMatrix ) {

				v.setFromMatrixColumn( objectMatrix, 0 ); // get X column of objectMatrix
				v.multiplyScalar( - distance );

				panOffset.add( v );

			};

		}();

		const panUp = function () {

			const v = new Vector3();

			return function panUp( distance, objectMatrix ) {

				if ( scope.screenSpacePanning === true ) {

					v.setFromMatrixColumn( objectMatrix, 1 );

				} else {

					v.setFromMatrixColumn( objectMatrix, 0 );
					v.crossVectors( scope.object.up, v );

				}

				v.multiplyScalar( distance );

				panOffset.add( v );

			};

		}();

		// deltaX and deltaY are in pixels; right and down are positive
		const pan = function () {

			const offset = new Vector3();

			return function pan( deltaX, deltaY ) {

				const element = scope.domElement;

				if ( scope.object.isPerspectiveCamera ) {

					// perspective
					const position = scope.object.position;
					offset.copy( position ).sub( scope.target );
					let targetDistance = offset.length();

					// half of the fov is center to top of screen
					targetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );

					// we use only clientHeight here so aspect ratio does not distort speed
					panLeft( 2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix );
					panUp( 2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix );
					ZoomOut();
					ZoomIn();
				} else if ( scope.object.isOrthographicCamera ) {

					// orthographic
					panLeft( deltaX * ( scope.object.right - scope.object.left ) / scope.object.zoom / element.clientWidth, scope.object.matrix );
					panUp( deltaY * ( scope.object.top - scope.object.bottom ) / scope.object.zoom / element.clientHeight, scope.object.matrix );

				} else {

					// camera neither orthographic nor perspective
					console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );
					scope.enablePan = false;

				}

			};

		}();

		function dollyOut( dollyScale ) {
			if ( scope.object.isPerspectiveCamera ) {

				scale /= dollyScale;
				ZoomOut();
			} else if ( scope.object.isOrthographicCamera ) {
				scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom * dollyScale ) );
				scope.object.updateProjectionMatrix();
				zoomChanged = true;
			} else {
				console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
				scope.enableZoom = false;
			}
		}
		

		function dollyIn( dollyScale ) {
			if ( scope.object.isPerspectiveCamera ) {
				scale *= dollyScale;
			   ZoomIn();
			} else if ( scope.object.isOrthographicCamera ) {
				scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom / dollyScale ) );
				scope.object.updateProjectionMatrix();
				zoomChanged = true;
			} else {
				console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
				scope.enableZoom = false;
			}

		}

		//
		// event callbacks - update the object state
		//

		function handleMouseDownRotate( event ) {

			rotateStart.set( event.clientX, event.clientY );

		}

		function handleMouseDownDolly( event ) {

			dollyStart.set( event.clientX, event.clientY );

		}

		function handleMouseDownPan( event ) {

			panStart.set( event.clientX, event.clientY );

		}

		function handleMouseMoveRotate( event ) {

			rotateEnd.set( event.clientX, event.clientY );

			rotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( scope.rotateSpeed );

			const element = scope.domElement;

			rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientHeight ); // yes, height

			rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight );

			rotateStart.copy( rotateEnd );

			scope.update();

		}

		function handleMouseMoveDolly( event ) {

			dollyEnd.set( event.clientX, event.clientY );

			dollyDelta.subVectors( dollyEnd, dollyStart );

			if ( dollyDelta.y > 0 ) {

				dollyOut( getZoomScale() );

			} else if ( dollyDelta.y < 0 ) {

				dollyIn( getZoomScale() );

			}

			dollyStart.copy( dollyEnd );

			scope.update();

		}

		function handleMouseMovePan( event ) {

			panEnd.set( event.clientX, event.clientY );

			panDelta.subVectors( panEnd, panStart ).multiplyScalar( scope.panSpeed );

			pan( panDelta.x, panDelta.y );

			panStart.copy( panEnd );

			scope.update();

		}

		function handleMouseUp( /*event*/ ) {

			// no-op

		}

		function handleMouseWheel( event ) {

			if ( event.deltaY < 0 ) {

				dollyIn( getZoomScale() );

			} else if ( event.deltaY > 0 ) {

				dollyOut( getZoomScale() );

			}

			scope.update();

		}

		function handleKeyDown( event ) {

			let needsUpdate = false;

			switch ( event.code ) {

				case scope.keys.UP:
					pan( 0, scope.keyPanSpeed );
					needsUpdate = true;
					break;

				case scope.keys.BOTTOM:
					pan( 0, - scope.keyPanSpeed );
					needsUpdate = true;
					break;

				case scope.keys.LEFT:
					pan( scope.keyPanSpeed, 0 );
					needsUpdate = true;
					break;

				case scope.keys.RIGHT:
					pan( - scope.keyPanSpeed, 0 );
					needsUpdate = true;
					break;

			}

			if ( needsUpdate ) {

				// prevent the browser from scrolling on cursor keys
				event.preventDefault();

				scope.update();

			}


		}

		function handleTouchStartRotate() {

			if ( pointers.length === 1 ) {

				rotateStart.set( pointers[ 0 ].pageX, pointers[ 0 ].pageY );

			} else {

				const x = 0.5 * ( pointers[ 0 ].pageX + pointers[ 1 ].pageX );
				const y = 0.5 * ( pointers[ 0 ].pageY + pointers[ 1 ].pageY );

				rotateStart.set( x, y );

			}

		}

		function handleTouchStartPan() {

			if ( pointers.length === 1 ) {

				panStart.set( pointers[ 0 ].pageX, pointers[ 0 ].pageY );

			} else {

				const x = 0.5 * ( pointers[ 0 ].pageX + pointers[ 1 ].pageX );
				const y = 0.5 * ( pointers[ 0 ].pageY + pointers[ 1 ].pageY );

				panStart.set( x, y );

			}

		}

		function handleTouchStartDolly() {

			const dx = pointers[ 0 ].pageX - pointers[ 1 ].pageX;
			const dy = pointers[ 0 ].pageY - pointers[ 1 ].pageY;

			const distance = Math.sqrt( dx * dx + dy * dy );

			dollyStart.set( 0, distance );

		}

		function handleTouchStartDollyPan() {

			if ( scope.enableZoom ) handleTouchStartDolly();

			if ( scope.enablePan ) handleTouchStartPan();

		}

		function handleTouchStartDollyRotate() {

			if ( scope.enableZoom ) handleTouchStartDolly();

			if ( scope.enableRotate ) handleTouchStartRotate();

		}

		function handleTouchMoveRotate( event ) {

			if ( pointers.length == 1 ) {

				rotateEnd.set( event.pageX, event.pageY );

			} else {

				const position = getSecondPointerPosition( event );

				const x = 0.5 * ( event.pageX + position.x );
				const y = 0.5 * ( event.pageY + position.y );

				rotateEnd.set( x, y );

			}

			rotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( scope.rotateSpeed );

			const element = scope.domElement;

			rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientHeight ); // yes, height

			rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight );

			rotateStart.copy( rotateEnd );

		}

		function handleTouchMovePan( event ) {

			if ( pointers.length === 1 ) {

				panEnd.set( event.pageX, event.pageY );

			} else {

				const position = getSecondPointerPosition( event );

				const x = 0.5 * ( event.pageX + position.x );
				const y = 0.5 * ( event.pageY + position.y );

				panEnd.set( x, y );

			}

			panDelta.subVectors( panEnd, panStart ).multiplyScalar( scope.panSpeed );

			pan( panDelta.x, panDelta.y );

			panStart.copy( panEnd );

		}

		function handleTouchMoveDolly( event ) {

			const position = getSecondPointerPosition( event );

			const dx = event.pageX - position.x;
			const dy = event.pageY - position.y;

			const distance = Math.sqrt( dx * dx + dy * dy );

			dollyEnd.set( 0, distance );

			dollyDelta.set( 0, Math.pow( dollyEnd.y / dollyStart.y, scope.zoomSpeed ) );

			dollyOut( dollyDelta.y );

			dollyStart.copy( dollyEnd );

		}

		function handleTouchMoveDollyPan( event ) {

			if ( scope.enableZoom ) handleTouchMoveDolly( event );

			if ( scope.enablePan ) handleTouchMovePan( event );

		}

		function handleTouchMoveDollyRotate( event ) {

			if ( scope.enableZoom ) handleTouchMoveDolly( event );

			if ( scope.enableRotate ) handleTouchMoveRotate( event );

		}

		function handleTouchEnd( /*event*/ ) {

			// no-op

		}

		//
		// event handlers - FSM: listen for events and reset state
		//

		function onPointerDown( event ) {

			if ( scope.enabled === false ) return;

			if ( pointers.length === 0 ) {

				scope.domElement.setPointerCapture( event.pointerId );

				scope.domElement.addEventListener( 'pointermove', onPointerMove );
				scope.domElement.addEventListener( 'pointerup', onPointerUp );

			}

			//

			addPointer( event );

			if ( event.pointerType === 'touch' ) {

				onTouchStart( event );

			} else {

				onMouseDown( event );

			}

		}

		function onPointerMove( event ) {

			if ( scope.enabled === false ) return;

			if ( event.pointerType === 'touch' ) {

				onTouchMove( event );

			} else {

				onMouseMove( event );

			}

			/*---------code to update the Slider value---------*/

			let state = store.getState().reducer
			updateSlider(state)


		}

		function onPointerUp( event ) {

			if ( scope.enabled === false ) return;

			if ( event.pointerType === 'touch' ) {

				onTouchEnd();

			} else {

				onMouseUp( event );

			}

			removePointer( event );

			//

			if ( pointers.length === 0 ) {

				scope.domElement.releasePointerCapture( event.pointerId );

				scope.domElement.removeEventListener( 'pointermove', onPointerMove );
				scope.domElement.removeEventListener( 'pointerup', onPointerUp );

			}

		}

		function onPointerCancel( event ) {

			removePointer( event );

		}

		function onMouseDown( event ) {

			let mouseAction;

			switch ( event.button ) {

				case 0:

					mouseAction = scope.mouseButtons.LEFT;
					break;

				case 1:

					mouseAction = scope.mouseButtons.MIDDLE;
					break;

				case 2:

					mouseAction = scope.mouseButtons.RIGHT;
					break;

				default:

					mouseAction = - 1;

			}

			switch ( mouseAction ) {

				case MOUSE.DOLLY:

					if ( scope.enableZoom === false ) return;

					handleMouseDownDolly( event );

					state = STATE.DOLLY;

					break;

				case MOUSE.ROTATE:

					if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

						if ( scope.enablePan === false ) return;

						handleMouseDownPan( event );

						state = STATE.PAN;

					} else {

						if ( scope.enableRotate === false ) return;

						handleMouseDownRotate( event );

						state = STATE.ROTATE;

					}

					break;

				case MOUSE.PAN:

					if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

						if ( scope.enableRotate === false ) return;

						handleMouseDownRotate( event );

						state = STATE.ROTATE;

					} else {

						if ( scope.enablePan === false ) return;

						handleMouseDownPan( event );

						state = STATE.PAN;

					}

					break;

				default:

					state = STATE.NONE;

			}

			if ( state !== STATE.NONE ) {

				scope.dispatchEvent( _startEvent );

			}

		}

		function onMouseMove( event ) {

			if ( scope.enabled === false ) return;

			switch ( state ) {

				case STATE.ROTATE:

					if ( scope.enableRotate === false ) return;

					handleMouseMoveRotate( event );

					break;

				case STATE.DOLLY:

					if ( scope.enableZoom === false ) return;

					handleMouseMoveDolly( event );

					break;

				case STATE.PAN:

					if ( scope.enablePan === false ) return;

					handleMouseMovePan( event );

					break;

			}

		}

		function onMouseUp( event ) {

			handleMouseUp( event );

			scope.dispatchEvent( _endEvent );

			state = STATE.NONE;

		}

		function onMouseWheel( event ) {

			if ( scope.enabled === false || scope.enableZoom === false || ( state !== STATE.NONE && state !== STATE.ROTATE ) ) return;

			event.preventDefault();

			scope.dispatchEvent( _startEvent );

			handleMouseWheel( event );

			scope.dispatchEvent( _endEvent );

		}

		function onKeyDown( event ) {

			if ( scope.enabled === false || scope.enablePan === false ) return;

			handleKeyDown( event );

		}

		function onTouchStart( event ) {

			trackPointer( event );

			switch ( pointers.length ) {

				case 1:

					switch ( scope.touches.ONE ) {

						case TOUCH.ROTATE:

							if ( scope.enableRotate === false ) return;

							handleTouchStartRotate();

							state = STATE.TOUCH_ROTATE;

							break;

						case TOUCH.PAN:

							if ( scope.enablePan === false ) return;

							handleTouchStartPan();

							state = STATE.TOUCH_PAN;

							break;

						default:

							state = STATE.NONE;

					}

					break;

				case 2:

					switch ( scope.touches.TWO ) {

						case TOUCH.DOLLY_PAN:

							if ( scope.enableZoom === false && scope.enablePan === false ) return;

							handleTouchStartDollyPan();

							state = STATE.TOUCH_DOLLY_PAN;

							break;

						case TOUCH.DOLLY_ROTATE:

							if ( scope.enableZoom === false && scope.enableRotate === false ) return;

							handleTouchStartDollyRotate();

							state = STATE.TOUCH_DOLLY_ROTATE;

							break;

						default:

							state = STATE.NONE;

					}

					break;

				default:

					state = STATE.NONE;

			}

			if ( state !== STATE.NONE ) {

				scope.dispatchEvent( _startEvent );

			}

		}

		function onTouchMove( event ) {

			trackPointer( event );

			switch ( state ) {

				case STATE.TOUCH_ROTATE:

					if ( scope.enableRotate === false ) return;

					handleTouchMoveRotate( event );

					scope.update();

					break;

				case STATE.TOUCH_PAN:

					if ( scope.enablePan === false ) return;

					handleTouchMovePan( event );

					scope.update();

					break;

				case STATE.TOUCH_DOLLY_PAN:

					if ( scope.enableZoom === false && scope.enablePan === false ) return;

					handleTouchMoveDollyPan( event );

					scope.update();

					break;

				case STATE.TOUCH_DOLLY_ROTATE:

					if ( scope.enableZoom === false && scope.enableRotate === false ) return;

					handleTouchMoveDollyRotate( event );

					scope.update();

					break;

				default:

					state = STATE.NONE;

			}

		}

		function onTouchEnd( event ) {

			handleTouchEnd( event );

			scope.dispatchEvent( _endEvent );

			state = STATE.NONE;

		}

		function onContextMenu( event ) {

			if ( scope.enabled === false ) return;

			event.preventDefault();

		}

		function addPointer( event ) {

			pointers.push( event );

		}

		function removePointer( event ) {

			delete pointerPositions[ event.pointerId ];

			for ( let i = 0; i < pointers.length; i ++ ) {

				if ( pointers[ i ].pointerId == event.pointerId ) {

					pointers.splice( i, 1 );
					return;

				}

			}

		}

		function trackPointer( event ) {

			let position = pointerPositions[ event.pointerId ];

			if ( position === undefined ) {

				position = new Vector2();
				pointerPositions[ event.pointerId ] = position;

			}

			position.set( event.pageX, event.pageY );

		}

		function getSecondPointerPosition( event ) {

			const pointer = ( event.pointerId === pointers[ 0 ].pointerId ) ? pointers[ 1 ] : pointers[ 0 ];

			return pointerPositions[ pointer.pointerId ];

		}

		//

		scope.domElement.addEventListener( 'contextmenu', onContextMenu );

		scope.domElement.addEventListener( 'pointerdown', onPointerDown );
		scope.domElement.addEventListener( 'pointercancel', onPointerCancel );
		scope.domElement.addEventListener( 'wheel', onMouseWheel, { passive: false } );

		// force an update at start

		this.update();

	}

}


// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
// This is very similar to OrbitControls, another set of touch behavior
//
//    Orbit - right mouse, or left mouse + ctrl/meta/shiftKey / touch: two-finger rotate
//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
//    Pan - left mouse, or arrow keys / touch: one-finger move

class MapControls extends OrbitControls {

	constructor( object, domElement ) {

		super( object, domElement );

		this.screenSpacePanning = false; // pan orthogonal to world-space direction camera.up

		this.mouseButtons.LEFT = MOUSE.PAN;
		this.mouseButtons.RIGHT = MOUSE.ROTATE;

		this.touches.ONE = TOUCH.PAN;
		this.touches.TWO = TOUCH.DOLLY_ROTATE;

	}

}

export { OrbitControls, MapControls };
