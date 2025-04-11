import React, { Component } from 'react';
import * as THREE from "three";

export default class centerBuildingArrows extends Component {

    addArrowsIntoBuilding = (const_var,params)=>{

        const dir = new THREE.Vector3( 0, 0, 0);
        dir.normalize();
        const origin = new THREE.Vector3( 0, 0, 0 );
        const length = 1;
        // const width = 5;
        const hex = 0x040405;
        const Arrow = new THREE.ArrowHelper( dir, origin, length, hex, 0.25, 0.08 );
        // Arrow.line.material.linewidth = width;
        Arrow.name ="Arrow"
        Arrow.setLength(1, 0.18,0.1)
        const_var.b_t_M_R.add( Arrow );

        const geometry = new THREE.ConeGeometry( 5, 20, 32 );
        const material = new THREE.MeshBasicMaterial( {color: 0x282828} );
        const cone = new THREE.Mesh( geometry, material );
        const_var.b_t_M_R.add( cone );


        // cone geometry
        const arrowHeadGeo = new THREE.ConeGeometry( 0.06, 0.25, 64 );
        const arrowHeadMaterial = new THREE.MeshBasicMaterial( {color: 0x282828} );
        const arrowHead = new THREE.Mesh( arrowHeadGeo, arrowHeadMaterial );
        arrowHead.name = "ArrowHead";
        arrowHead.visible = false;
        const_var.b_t_M_R.add( arrowHead );

        const arrowHead1Geo = new THREE.ConeGeometry( 0.06, 0.25, 64 );
        const arrowHead1Material = new THREE.MeshBasicMaterial( {color: 0x282828} );
        const arrowHead1 = new THREE.Mesh( arrowHead1Geo, arrowHead1Material );
        arrowHead1.name = "ArrowHead1";
        arrowHead1.visible = false;
        const_var.b_t_M_R.add( arrowHead1 );

        const arrowBodyGeo = new THREE.CylinderGeometry( 0.01, 0.01, params.p_w-0.2, 68 );
        const arrowBodymaterial = new THREE.MeshBasicMaterial( {color: 0x282828} );
        const arrowBody = new THREE.Mesh( arrowBodyGeo, arrowBodymaterial );
        arrowBody.name = "ArrowBody"
        arrowBody.position.set(0, params.p_h/2+1, params.p_d/2+0.2);
        arrowBody.rotation.z = Math.PI/2;
        const_var.b_t_M_R.add( arrowBody );







        
        let  widthGeo = new THREE.TextGeometry( params.p_w+"'", {
            font:const_var.font, size: 0.2, height: 0.02, /*weight: 'bolder',*/
            curveSegments: 1, bevelEnabled: true,bevelThickness: 0.02,
            bevelSize: 0, bevelSegments: 1,
        } );
        let  widthMaterial = new THREE.MeshPhongMaterial({color:0x323232});
        let  dimensionWidth = new THREE.Mesh(widthGeo, widthMaterial);
             dimensionWidth.name = "dimensionWidth"
             dimensionWidth.visible = false
        const_var.b_t_M_R.add(dimensionWidth);

        let  lengthGeo = new THREE.TextGeometry( params.p_d+"'", {
            font:const_var.font, size: 0.1, height: 0.02, weight: 'bolder',
            curveSegments: 1, bevelEnabled: true,bevelThickness: 0.02,
            bevelSize: 0, bevelSegments: 1,
        } );
        let  lengthMaterial = new THREE.MeshPhongMaterial({color:0x323232});
        let  dimensionLength = new THREE.Mesh(lengthGeo, lengthMaterial);
        dimensionLength.name = "dimensionLength"
        dimensionLength .visible = false
        const_var.b_t_M_R.add(dimensionLength);

        let  heightGeo = new THREE.TextGeometry( params.p_h+"'", {
            font:const_var.font, size: 0.5, height: 0.02, weight: 'bolder',
            curveSegments: 1, bevelEnabled: true,bevelThickness: 0.02,
            bevelSize: 0, bevelSegments: 1,
        } );
        let  heightMaterial = new THREE.MeshPhongMaterial({color:0x323232});
        let  dimensionHeight = new THREE.Mesh(heightGeo, heightMaterial);
        dimensionHeight.name = "dimensionHeight"
        dimensionHeight.visible = false
        const_var.b_t_M_R.add(dimensionHeight);

     

 
    }

    render() {
        return <div ref={ref => (this.mount = ref)} />;
    }    
}  