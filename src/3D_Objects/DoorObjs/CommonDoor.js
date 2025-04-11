import React, { Component } from 'react'
import * as THREE from "three";

import DoorOBJ from '../../assets/images/doorObj/5_lite_walkin.gltf';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export default class CommonDoor extends Component {

    addDoorToWall = async (const_var, params) => {
        const gltfLoader = new GLTFLoader();
        var url = DoorOBJ;

        const onWhitchWall = 'front';
        const wallCmpName1 = "commondoor";
        const doorWidth = Number(6);
        const doorHeight = Number(6);
        var gltf = await gltfLoader.loadAsync(url);
        if (gltf != undefined) {
            var wallComponent = gltf.scene;
            if (wallComponent != undefined) {
                wallComponent.name = wallCmpName1;
                wallComponent.position.set(0, 4, params.p_d / 2);
                wallComponent.rotation.y = 0;
                wallComponent.rotation.y = Math.PI / 2;
                wallComponent.actual_val = doorWidth + "X" + doorHeight;
                wallComponent.pos = onWhitchWall;
                wallComponent.BarnPos = onWhitchWall;
                wallComponent.width = doorWidth;
                wallComponent.height = doorHeight;
                if (onWhitchWall == "front") {
                    wallComponent.position.set(0, 3, params.p_d / 2 + 0.25);
                    wallComponent.rotation.y = Math.PI / 2;
                    if (wallCmpName1 == "AdimaondWindowsDoor1") {
                        wallComponent.rotation.y = Math.PI;
                        wallComponent.position.z = params.p_d / 2 - 0.1;
                    }
                    if (wallCmpName1 == "DoubleDeluxDoor1" || wallCmpName1 == "ALiteDoor71") {
                        wallComponent.position.z = params.p_d / 2 - 0.2;
                    }
                    if (wallCmpName1 == "Avent2") {
                    }
                }
                if (onWhitchWall == "left") {
                    wallComponent.position.set(params.p_w / -2, 4, 0);
                    wallComponent.rotation.y = 0;
                    if (wallCmpName1 == "AdimaondWindowsDoor") {
                        wallComponent.rotation.y = Math.PI / 2;
                    }
                }
                if (onWhitchWall == "back") {
                    wallComponent.position.set(0, 4, params.p_d / -2 - 0.05);
                    wallComponent.rotation.y = Math.PI / 2;
                    if (wallCmpName1 == "AdimaondWindowsDoor1") {
                        wallComponent.rotation.y = 0;
                        wallComponent.position.z = params.p_d / -2 - 0.1;
                    }
                }
                if (onWhitchWall == "right") {
                    wallComponent.position.set(params.p_w / 2 + 0.05, 4, 0);
                    wallComponent.rotation.y = 0;
                    if (wallCmpName1 == "AdimaondWindowsDoor") {
                        wallComponent.rotation.y = Math.PI / 2;
                    }
                }

                var ratio = 0.1666666666666667;
                wallComponent.scale.set(1, ratio * doorHeight, ratio * doorWidth);
                const_var.scene.add(wallComponent);
            }
        }
        /*gltfLoader.load(url, (gltf) => {
            if (gltf != undefined) {
                var wallComponent = gltf.scene;
                if (wallComponent != undefined) {
                    wallComponent.name = wallCmpName1;
                    wallComponent.position.set(0, 4, params.p_d / 2);
                    wallComponent.rotation.y = 0;
                    wallComponent.rotation.y = Math.PI / 2;
                    wallComponent.actual_val = doorWidth + "X" + doorHeight;
                    wallComponent.pos = onWhitchWall;
                    wallComponent.BarnPos = onWhitchWall;
                    wallComponent.width = doorWidth;
                    wallComponent.height = doorHeight;
                    if (onWhitchWall == "front") {
                        wallComponent.position.set(0, 3, params.p_d / 2 + 0.25);
                        wallComponent.rotation.y = Math.PI / 2;
                        if (wallCmpName1 == "AdimaondWindowsDoor1") {
                            wallComponent.rotation.y = Math.PI;
                            wallComponent.position.z = params.p_d / 2 - 0.1;
                        }
                        if (wallCmpName1 == "DoubleDeluxDoor1" || wallCmpName1 == "ALiteDoor71") {
                            wallComponent.position.z = params.p_d / 2 - 0.2;
                        }
                        if (wallCmpName1 == "Avent2") {
                        }
                    }
                    if (onWhitchWall == "left") {
                        wallComponent.position.set(params.p_w / -2, 4, 0);
                        wallComponent.rotation.y = 0;
                        if (wallCmpName1 == "AdimaondWindowsDoor") {
                            wallComponent.rotation.y = Math.PI / 2;
                        }
                    }
                    if (onWhitchWall == "back") {
                        wallComponent.position.set(0, 4, params.p_d / -2 - 0.05);
                        wallComponent.rotation.y = Math.PI / 2;
                        if (wallCmpName1 == "AdimaondWindowsDoor1") {
                            wallComponent.rotation.y = 0;
                            wallComponent.position.z = params.p_d / -2 - 0.1;
                        }
                    }
                    if (onWhitchWall == "right") {
                        wallComponent.position.set(params.p_w / 2 + 0.05, 4, 0);
                        wallComponent.rotation.y = 0;
                        if (wallCmpName1 == "AdimaondWindowsDoor") {
                            wallComponent.rotation.y = Math.PI / 2;
                        }
                    }

                    var ratio = 0.1666666666666667;
                    wallComponent.scale.set(1, ratio * doorHeight, ratio * doorWidth);
                    const_var.scene.add(wallComponent);
                }
            }
        });*/
    }

    render() {
        return <div ref={ref => (this.mount = ref)} />;
    }
}    