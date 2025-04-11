import React, { Component } from 'react';
// import { Checkbox } from '@rmwc/checkbox';
// import { Select } from '@rmwc/select';
// import { TextField } from '@rmwc/textfield';
// import { Radio } from '@rmwc/radio';
import { connect } from "react-redux";
import EditPriceItem from './EditPriceItem.js';
import * as actionCreator from "../../../action/index.js";
import * as cuComponent from '../../../redux/reducers/componentReducer';
import { Fragment } from 'react';
import Draggable from 'react-draggable';
import CurrencyFormat from 'react-currency-format';
import {const_var, params } from '../../../redux/reducers/reducer';


const WallOption = [
   { value: 'open', label: 'open' },
   { value: 'close', label: 'close' },
   { value: 'regular gable', label: 'regular gable' },
   { value: 'certified gable', label: 'certified gable' },
];
// let tOLeft = testleft.offsetLeft;
// if (tOLeft > 5) {
//   alert('over');
// }
class DoorWindowEditBox extends Component {
   state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: 0, y: 0
    },
  };
   handleDrag = (e, ui) => {
     const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY - 100,
      }
    });
  };
  onStart = () => { 

    this.setState({activeDrags: ++this.state.activeDrags});
  };
  onStop = () => {
    this.setState({activeDrags: --this.state.activeDrags});
  };
  
  onControlledDrag = (e, position) => {  
        const {x, y} = position;
    this.setState({controlledPosition: {x, y}});
  };

  onControlledDragStop = (e, position) => {   
       this.onControlledDrag(e, position);
    this.onStop();
  };
  handleCloseforDoorWindows = (key,e,val,val1,val2,val3)=>{
    const {x, y} = this.state.controlledPosition;
    this.setState({controlledPosition: {x: 0, y:0}});
    if(key=="done")
    {
      this.props.handleCloseforDoorWindows(e);
    }if(key=="remove")
    {
      this.props.removeComponent(e,val,val1);
    }if(key=="clone")
    {
      this.props.cloneComponent(e,val);
    }
  }


  
  componentDidUpdate(){

  //document.addEventListener("mouseup", cuComponent.onResize, false);

        let dweditbox = document.querySelector('.dw-show-edit-box-wrapper');
        

        let canvaswrapper = document.querySelector('.buildcanvas-section')?.offsetWidth - 340;

                  let tOLeft = dweditbox.offsetLeft;                   

                        if (tOLeft > canvaswrapper) {
                            dweditbox.classList.add('outfromdom');
                        }

                        else {
                             dweditbox.classList.remove('outfromdom');
                        }
}

shouldComponentUpdate() {
   // console.warn("shouldcompoentn called");

   let doorUniqueId = this.props.const_var.doorUniqueId;
   let priceData = this.props.const_var.entry_points.filter(entry_points => entry_points.uniqueId == doorUniqueId);
   if (priceData.length === 0) return false;
   
   return true;
}
          

handleClick = (val1,val2,val3,val4,val5,val6)=>{
    if(val2=="CustomGarageSize" && (this.props.const_var.commonDoorType=="door" || this.props.const_var.commonDoorType=="window"))
    {
        this.props.params.customW = 24;
        this.props.params.customH = (this.props.const_var.commonDoorType=="window")?60:72;
    }else
    {
      this.props.params.customW = 5;
      this.props.params.customH = 5;
    }
    this.props.editComponentSize(val1,val2,val3,val4,val5,val6);
  }



  handleFrameoutClick11 = (val1,val2,val3,val4,val5,val6)=>{
    val2 = "CustomGarageSize";
    if(val2=="CustomGarageSize" && (this.props.const_var.commonDoorType=="door" || this.props.const_var.commonDoorType=="window"))
    {
        this.props.params.customW = 24;
        this.props.params.customH = (this.props.const_var.commonDoorType=="window")?60:72;
    }
    this.props.editComponentSize(val1,val2,val3,val4,val5,val6);
   //  console.log("here2--------------");
  }
 
handleCustomClick = (val1,val2,val3,val4,val5,val6,val7,val8)=>{
    if(val8=="garage")
    {
      if(val7=="Width")
      {
          let maxWidth = (this.props.const_var.pos=="front" || this.props.const_var.pos=="back")?this.props.params.p_w-2:this.props.params.p_d-2;
          this.props.params.customW = (val2 > maxWidth)?5:val2;
         //  console.log("here3--------------");
      }if(val7=="Height")
      {
          let maxHeight = this.props.params.p_h-1;
          this.props.params.customH = (val2 > maxHeight)?5:val2;
      }
    }else
    {
        if(val7=="Width")
        {
            this.props.params.customW = val2;
        }if(val7=="Height")
        {
            this.props.params.customH = val2;
        }
    }
    this.props.editComponentSize(val1,"CustomGarageSize",val3,val4,val5,val6);
  } 

      render() {
        if(this.props.const_var.showComponentEditBox==true) {
               document.querySelector('body').classList.add('active-dw-edit');
            }
            else {  document.querySelector('body').classList.remove('active-dw-edit');}

        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {deltaPosition, controlledPosition} = this.state;
    let DoorVar = this.props.const_var.exactDoorType;
    let doorUniqueId = this.props.const_var.doorUniqueId;
    let commonDoorType = this.props.const_var.commonDoorType;
    let pos = this.props.const_var.pos;
    
    let NewUpdatedName = DoorVar.split("Frameout");
    let NewUpdatedDimension = "";
    if(this.props.const_var.editComponentDimension!="CustomGarageSize")
    {
      NewUpdatedDimension = this.props.const_var.editComponentDimension.replace("_Frameout"," ");
    }else
    {
        NewUpdatedDimension = this.props.params.customW +"X"+ this.props.params.customH;
    }
    let dataNNN = this.props.const_var.entry_points;
    let findIndex = this.props.const_var.entry_points.findIndex(entry_points => entry_points.uniqueId == doorUniqueId);
    let priceData = this.props.const_var.entry_points.filter(entry_points => entry_points.uniqueId == doorUniqueId);
    let EntrynotesData = "";
    if(this.props.const_var.post_data.building!=undefined && priceData.length>0 && priceData[0].entry_note!='')
    {
        EntrynotesData = priceData[0].entry_note!=null?priceData[0].entry_note:'';
    }else
    {
        EntrynotesData = this.props.params.extra_notes!=null?this.props.params.extra_notes:'';
    }
    
    let exactComName = "";
    if(this.props.const_var.editComponentDimension=="CustomGarageSize")
    {
        if(DoorVar=="Garage")
        {
            exactComName = DoorVar +" Door " + NewUpdatedDimension+"'";
        }if(DoorVar=="CustomFrameout")
        {
            exactComName = " Frameout " + NewUpdatedDimension+"'";
        }if(DoorVar=="Walk")
        {
            exactComName = DoorVar+"in"+ " Door " + NewUpdatedDimension+'"';
        }if(DoorVar=="WalkFrameout")
        {
            exactComName = "Walk Frameout " + NewUpdatedDimension+'"';
        }if(DoorVar=="Windows")
        {
            exactComName = DoorVar+" "+ NewUpdatedDimension+'"';
        }if(DoorVar=="WindowsFrameout")
        {
            exactComName = "Window Frameout " + NewUpdatedDimension+'"';
        }
    }

    let maxWidth1 = '';
    let maxHeight1 = '';
    let minWidth1 = '';
    let minHeight1 = '';

    let DoorObjData = '';
    let doorColorData = '';
    if(priceData.length>0){
        if(this.props.const_var.newComponentArray[priceData[0].parent_array_key] != undefined && this.props.const_var.newComponentArray[priceData[0].parent_array_key][priceData[0].child_array_key]!=undefined && this.props.const_var.newComponentArray[priceData[0].parent_array_key][priceData[0].child_array_key][priceData[0].nested_array_key]!=undefined)
        {
            DoorObjData = this.props.const_var.newComponentArray[priceData[0].parent_array_key][priceData[0].child_array_key][priceData[0].nested_array_key]['Size'][priceData[0].name];
            if(DoorObjData==undefined)
            {
                DoorObjData = this.props.const_var.newCustomSizesArray;
            }
            doorColorData = this.props.const_var.newComponentArray[priceData[0].parent_array_key][priceData[0].child_array_key][priceData[0].nested_array_key]['garageDoorColor'];
        }

        if(priceData[0].parent_array_key=="Walk" || priceData[0].parent_array_key=="Walk_Frameout")
        {
          maxWidth1 = 72;
          maxHeight1 = 84;
          minWidth1 = 24;
          minHeight1 = 60;
        }else if(priceData[0].parent_array_key=="Windows" || priceData[0].parent_array_key=="Windows_Frameout")
        {
          maxWidth1 = 60;
          maxHeight1 = 72;
          minWidth1 = 24;
          minHeight1 = 24;
        }
        else
        {
         //  let buildingPos =   
          maxWidth1 = (priceData[0].entry_location.includes('end')==true)?this.props.params.p_w-2:this.props.params.p_d-2;
          maxHeight1 = this.props.params.p_h ;
            
                if(this.props.const_var.a_p_d_a!=undefined && this.props.const_var.a_p_d_a.garage_custom_frameout!=undefined)
                {
                  if(this.props.const_var.a_p_d_a.garage_custom_frameout.length>0)
                  {
                      if(this.props.const_var.a_p_d_a.garage_custom_frameout[0].is_checked==true && priceData[0].parent_array_key=="Garage_Frameout")
                      {
                          if(this.props.const_var.editAPIDataByResponse.data==undefined)
                          {
                              maxWidth1 = (priceData[0].entry_location.includes('end')==true)? parseInt(this.props.const_var.a_p_d_a.garage_custom_frameout[0].end):parseInt(this.props.const_var.a_p_d_a.garage_custom_frameout[0].side);
                          }else{

                              if(this.props.const_var.editAPIDataByResponse.data!=undefined && this.props.const_var.editAPIDataByResponse.data.created_at>="2024-01-17")
                              { 
                                maxWidth1 = (priceData[0].entry_location.includes('end')==true)? parseInt(this.props.const_var.a_p_d_a.garage_custom_frameout[0].end):parseInt(this.props.const_var.a_p_d_a.garage_custom_frameout[0].side);
                              }
                          }
                      }
                  }
                }
            
        }
    } 
    
    let wallCheckForEnd = false;
    let wallCheckForSide = false;
    if(priceData.length > 0 && priceData[0].entry_location.includes('end')==true)
    {
        wallCheckForEnd = true;
    }
    if(priceData.length > 0 && priceData[0].entry_location.includes('side')==true)
    {
        wallCheckForSide = true;
    }

      let isStyleFeature = false;
      
      let is_overhead_door = (priceData.length > 0 && priceData[0].child_array_key == "overhead_door_door" && this.props.const_var.newComponentArray[priceData[0].parent_array_key][priceData[0].child_array_key][priceData[0].nested_array_key]['Size'][priceData[0].name]?.door_add_ons.length > 0)
      let overhead_addons, motorOption, insulatedOption, insulatedIsCost,addOnOption;




      if (is_overhead_door) {
         overhead_addons = this.props.const_var.newComponentArray[priceData[0].parent_array_key][priceData[0].child_array_key][priceData[0].nested_array_key]['Size'][priceData[0].name]?.door_add_ons;
         motorOption = overhead_addons.find((e) => e.door == "motor");
         insulatedOption = overhead_addons.find((e) => {
            if (e.door == "insulated") {
               // insulatedIsCost = e.is_cost
               return true;
            }
         });
         addOnOption = overhead_addons.find((e) => e.door == "add_on_options");
      }

      let styleFeature = (<>
      <div className="section-title-wrapper mb-3">
         <h5 className="section-title mb-0 no-underline">Style & Features</h5>
      </div>
      <div className=" d-block">
    {(const_var.loginSession == false && priceData.length > 0 && priceData[0].entry_trim_kit_price!=undefined && DoorObjData["45_degree_angle"] != undefined && DoorObjData["45_degree_angle"] != 0) ?
    
       <div className={priceData[0].nested_array_key=="Sectional"?"prow mb-1 d-none":"prow mb-2"}>
         {isStyleFeature = true}
          <div className='pcol-7'> 
          {/* <div className="checkbox d-flex justify-content-between">
                  <div>
                     <input
                        type='checkbox'
                        className="secondary"
                        ripple="RipplePropF"
                        label="45 degree angle"
                        checked={(priceData[0].entry_trim_kit==undefined)?this.props.params.trimkit:priceData[0].entry_trim_kit}
                        onChange={e =>
                         this.props.changeComponentSize(e.target.value,doorUniqueId,priceData[0],'trim',e.target.checked)} 
                     />


                  </div>
                  
                </div> */}
                     <div className="input-checkbox form-element">      
                        <div className="input-box">
                            <input
                                type='checkbox'
                                checked={(priceData[0].entry_trim_kit==undefined)?this.props.params.trimkit:priceData[0].entry_trim_kit} 
                                id="45 degree angle"
                                onClick={e =>
                                 this.props.changeComponentSize(e.target.value,doorUniqueId,priceData[0],'trim',e.target.checked)} 
                            />
                            <label for={"45 degree angle"}>{"45 degree angle"}</label>
                        </div>          
                    </div>
          </div>

          <div className='pcol-5 text-right'> 
             {((this.props.const_var.loginSession == true && this.props.const_var.post_data.building != undefined && priceData.length > 0 && priceData[0].entry_trim_kit == true)) ?
          <aside className="price-box price-box-sm">
                <EditPriceItem uniqueId={priceData[0].uniqueId} componentPrice="true" jsonObj={priceData[0].entry_trim_kit_price} jsonObjKey="entry_trim_kit_price" />
          </aside>
                :
          <div className="price-box-type-2 text-right">
              {this.props.const_var.hide_price_calculation != 1 && this.props.const_var.loginSession == false && 
                
                  <CurrencyFormat value = {(this.props.params.trimkit && priceData.length > 0 && (priceData[0].entry_trim_kit_price != undefined || priceData[0].entry_trim_kit_price != null)) ? priceData[0].entry_trim_kit_price : 0} displayType={'text'} thousandSeparator={true} prefix={'$'} />
              }
            </div>
       }
          </div>
       </div>
       : null
    }
    {(priceData.length > 0 && priceData[0].entry_trim_kit_price!=undefined && const_var.loginSession == true && priceData[0].entry_is_trim_kit!=false) ?
       <div className={priceData[0].nested_array_key=="Sectional"?"prow mb-1 d-none":"prow mb-2"}>
          {isStyleFeature = true}
          <div className='pcol-7'> 
          {/* <div className="checkbox d-flex justify-content-between">
                  <div className='input-box' >
                  <input
                  type='checkbox'
                      className = 'secondary'
                      ripple="RipplePropF"
                      label="45 degree angle"
                      checked={(priceData[0].entry_trim_kit==undefined)?this.props.params.trimkit:priceData[0].entry_trim_kit}
                      onChange={e =>
                         this.props.changeComponentSize(e.target.value,doorUniqueId,priceData[0],'trim',e.target.checked)} 
                  />
                  </div>

                  
                </div> */}
                  <div className="input-checkbox form-element">      
                     <div className="input-box">
                           <input
                              type='checkbox'
                              checked={(priceData[0].entry_trim_kit==undefined)?this.props.params.trimkit:priceData[0].entry_trim_kit} 
                              id="45 degree angle"
                              onClick={e =>
                              this.props.changeComponentSize(e.target.value,doorUniqueId,priceData[0],'trim',e.target.checked)} 
                           />
                           <label for={"45 degree angle"}>{"45 degree angle"}</label>
                     </div>          
                  </div>
          </div>

          <div className='pcol-5 text-right'> 
             {((this.props.const_var.loginSession == true && this.props.const_var.post_data.building != undefined && priceData.length > 0 && priceData[0].entry_trim_kit == true)) ?
          <aside className="price-box price-box-sm">
                <EditPriceItem uniqueId={priceData[0].uniqueId} componentPrice="true" jsonObj={priceData[0].entry_trim_kit_price} jsonObjKey="entry_trim_kit_price" />
          </aside>
                :
          <div className="price-box-type-2 text-right">
             {this.props.const_var.hide_price_calculation != 1 && this.props.const_var.loginSession == false && 
              <CurrencyFormat value = {(priceData.length > 0 && priceData[0].entry_trim_kit == true && (priceData[0].entry_trim_kit_price != undefined || priceData[0].entry_trim_kit_price != null)) ? priceData[0].entry_trim_kit_price : 0} displayType={'text'} thousandSeparator={true} prefix={'$'} />
             }
            </div>
       }
          </div>
       </div>
       : null
    }
    {(priceData.length > 0 && DoorObjData.is_header_seal!=undefined && (DoorObjData.header_seal != 0 || DoorObjData.is_header_seal == 2))?
       <div className="prow mb-2">
          {isStyleFeature = true}
          <div className="pcol-7">
            
                {/* <div className="checkbox d-flex justify-content-between">
                <div className='input-box' >
                  <input
                      className="secondary"
                      ripple="RipplePropF"
                      label="Header Seal"
                      disabled={(DoorObjData.is_header_seal == 2) ? true : false}
                      checked={(DoorObjData.is_header_seal == 2) ? true : (priceData[0].entry_header_seal!=undefined)?priceData[0].entry_header_seal:this.props.params.header_seal}
                      onChange={e =>
                         this.props.headerSealChainHoistAction(e.target.value, 'headerSeal', doorUniqueId,DoorObjData)} 
                  />
                  </div>

                  
                  
                </div> */}
                  <div className="input-checkbox form-element">      
                     <div className={(DoorObjData.is_header_seal == 2) ? "input-box disabled-checkbox" : "input-box"}>
                           <input
                              type='checkbox'
                              disabled={(DoorObjData.is_header_seal == 2) ? true : false}
                              checked={(DoorObjData.is_header_seal == 2) ? true : (priceData[0].entry_header_seal!=undefined)?priceData[0].entry_header_seal:this.props.params.header_seal}
                              id="Header Seal"
                              onClick={e =>
                                 this.props.headerSealChainHoistAction(e.target.value, 'headerSeal', doorUniqueId,DoorObjData)}  
                           />
                           <label for={"Header Seal"}>{"Header Seal"}</label>
                     </div>          
                  </div>
            
          </div>
          <div className="pcol-5 text-right">
             {((this.props.const_var.loginSession == true && this.props.const_var.post_data.building != undefined && priceData.length > 0 && priceData[0].entry_header_seal == true && DoorObjData.is_header_seal != 2)) ?
                <aside className="price-box price-box-sm">
                   <EditPriceItem uniqueId={priceData[0].uniqueId} componentPrice="true" jsonObj={priceData[0].entry_header_seal_price} jsonObjKey="entry_header_seal_price" />
                </aside>
                :
             <div className="price-box-type-2 d-inline-flex ml-2">
                 {this.props.const_var.hide_price_calculation != 1 && this.props.const_var.loginSession == false && 
                  <CurrencyFormat value = {this.props.params.header_seal && priceData.length > 0 && priceData[0].entry_header_seal_price !== undefined ? priceData[0].entry_header_seal_price : 0} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                  }
             </div>
             }
             </div>
     
       </div>
       : null
    }
    { (priceData.length > 0 && DoorObjData.is_chain_hoist!=undefined && (DoorObjData.chain_hoist != 0 || DoorObjData.is_chain_hoist == 2))?
       <div className="prow mb-2">
          {isStyleFeature = true}
          <div className="pcol-7">                          
                {/* <div className="checkbox d-flex justify-content-between">
                <div className='input-box' >
                  <input
                      className="secondary"
                      ripple="RipplePropF"
                      label="Chain-Hoist"
                      disabled={(DoorObjData.is_chain_hoist == 2) ? true : false}
                      checked={(DoorObjData.is_chain_hoist == 2) ? true : (priceData[0].entry_chain_hoist!=undefined)?priceData[0].entry_chain_hoist:this.props.params.chain_hoist}
                      onChange={e =>
                         this.props.headerSealChainHoistAction(e.target.value, 'chainHoist', doorUniqueId,DoorObjData)} 
                  />
                  </div>
                </div> */}
                  <div className="input-checkbox form-element">      
                     <div className={(DoorObjData.is_chain_hoist == 2) ? "input-box disabled-checkbox" : "input-box"}>
                           <input
                              type='checkbox'
                              disabled={(DoorObjData.is_chain_hoist == 2) ? true : false}
                              checked={(DoorObjData.is_chain_hoist == 2) ? true : (priceData[0].entry_chain_hoist!=undefined)?priceData[0].entry_chain_hoist:this.props.params.chain_hoist}
                              id="Chain-Hoist"
                              onClick={e =>
                                 this.props.headerSealChainHoistAction(e.target.value, 'chainHoist', doorUniqueId,DoorObjData)} 
                           />
                           <label for={"Chain-Hoist"}>{"Chain-Hoist"}</label>
                     </div>          
                  </div>
           
          </div>

          <div className="pcol-5 text-right">    
             {((this.props.const_var.loginSession == true && this.props.const_var.post_data.building != undefined && priceData.length > 0 && priceData[0].entry_chain_hoist== true && DoorObjData.is_chain_hoist != 2)) ?
          <aside className="price-box price-box-sm">
                <EditPriceItem uniqueId={priceData[0].uniqueId} componentPrice="true" jsonObj={priceData[0].entry_chain_hoist_price} jsonObjKey="entry_chain_hoist_price" />
          </aside>
                : 
             <div className="price-box-type-2 d-inline-flex ml-2">
                {this.props.const_var.hide_price_calculation != 1 && this.props.const_var.loginSession == false && 
                  <CurrencyFormat value = {this.props.params.chain_hoist && priceData.length > 0 && priceData[0].entry_chain_hoist_price !== undefined ? priceData[0].entry_chain_hoist_price : 0} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                }  
             </div>      
             }
          </div>
      
       </div>
       : null
    }
    {(priceData.length > 0 && DoorObjData.is_certified!=undefined && (DoorObjData.certified_cost != 0 || DoorObjData.is_certified == 2)) ?
       <div className="prow mb-2">
          {isStyleFeature = true}
          <div className="pcol-7">
            
                {/* <div className="checkbox d-flex justify-content-between">
                  <div className='input-box' >
                     <input
                        className="secondary"
                        ripple="RipplePropF"
                        label="Certified Door"
                        disabled={(DoorObjData.is_certified == 2) ? true : false}
                        checked={(DoorObjData.is_certified == 2) ? true : (priceData[0].entry_certified!=undefined)?priceData[0].entry_certified :this.props.params.certified_door}
                        onChange={e =>
                           this.props.headerSealChainHoistAction(e.target.value, 'certified_door', doorUniqueId,this.props.params.certified_door,DoorObjData)} 
                     />
                  </div>
                  
                   <div className="price-box-type-2 d-inline-flex ml-2">
                      //<CurrencyFormat value = 1595 displayType={'text'} thousandSeparator={true} prefix={'$'} />
                   </div>
                </div> */}
               <div className="input-checkbox form-element">      
                  <div className={(DoorObjData.is_certified == 2) ? "input-box disabled-checkbox" : "input-box"}>
                        <input
                           type='checkbox'
                           disabled={(DoorObjData.is_certified == 2) ? true : false}
                           checked={(DoorObjData.is_certified == 2) ? true : (priceData[0].entry_certified!=undefined)?priceData[0].entry_certified :this.props.params.certified_door}
                           id="Certified Door"
                           onClick={e =>
                              this.props.headerSealChainHoistAction(e.target.value, 'certified_door', doorUniqueId,this.props.params.certified_door,DoorObjData)} 
                        />
                        <label for={"Certified Door"}>{"Certified Door"}</label>
                  </div>          
               </div>
            
          </div>
       </div>
       : null
    }

{motorOption ? (<div>  
         <div className="prow mb-2">
         {isStyleFeature = true}
          <div className="pcol-7">
            
               {/* <div className="checkbox d-flex justify-content-between">
               <div className='input-box' >
                  <input
                     className="secondary"
                     ripple="RipplePropF"
                     label="Motors"
                     checked={priceData[0].entry_motor}
                     onChange={ e => {
                           this.props.headerSealChainHoistAction(e.target.checked, "motorOption", doorUniqueId,this.props.params.motor,DoorObjData)
                        }
                     }
                  />
                  </ div>
                    
                </div> */}
                  <div className="input-checkbox form-element">      
                     <div className="input-box">
                           <input
                              type='checkbox'
                              checked={priceData[0].entry_motor}
                              id="Motors"
                              onClick={e =>
                                 this.props.headerSealChainHoistAction(e.target.checked, "motorOption", doorUniqueId,this.props.params.motor,DoorObjData)} 
                           />
                           <label for={"Motors"}>{"Motors"}</label>
                     </div>          
                  </div>
            
          </div>
      </div>  
      {priceData[0].entry_motor?
         motorOption.category.map((citem, cindex) => {
            return ((priceData.length > 0 && citem.is_cost!=undefined && (citem.cost != 0 || citem.is_cost == 2)) && <div key={cindex} className="prow mb-2">
               {isStyleFeature = true}
               <div className="pcol-7">
                  
                     {/* <div className="checkbox d-flex justify-content-between">
                        <input 
                           type='radio'
                           // className="secondary"
                           // ripple="RipplePropF"
                           label={citem.category}
                           value={citem.category}
                           checked={citem.category == priceData[0].entry_motor_name}
                        
                           onChange={e =>
                              this.props.headerSealChainHoistAction({name: citem.category, price: citem.cost}, motorOption.door, doorUniqueId,this.props.params.motor,DoorObjData)
                           } 
                        />
                        
                     </div> */}

                     <div className='input-box'>
                        <input
                           type='radio'
                           id={citem.category}
                           style={{border:'none', boxShadow:'0px 0px 0px 1px #b3b3b3'}}
                           // value="yes"
                           checked={(citem.category == priceData[0].entry_motor_name)?true:false}
                           name="motorOption"
                           onclick={e => this.props.headerSealChainHoistAction({name: citem.category, price: citem.cost}, motorOption.door, doorUniqueId,this.props.params.motor,DoorObjData)}
                        />
                        <label className='label-pointer' for={citem.category}>{citem.category}</label>
                     </div>
                  
               </div>
               <div className="pcol-5 text-right">
                  {((this.props.const_var.loginSession == true && this.props.const_var.post_data.building != undefined && priceData.length > 0 && citem.category == priceData[0].entry_motor_name)) ?
                     <aside className="price-box price-box-sm">
                        <EditPriceItem uniqueId={priceData[0].uniqueId} componentPrice="true" jsonObj={priceData[0].entry_motor_price} jsonObjKey="entry_motor_price" />
                     </aside>
                     :
                  <div className="price-box-type-2 d-inline-flex ml-2">
                     {this.props.const_var.hide_price_calculation != 1 && this.props.const_var.loginSession == false && 
                        <CurrencyFormat value = {citem.category == priceData[0].entry_motor_name ? priceData[0].entry_motor_price: 0} displayType={'text'} thousandSeparator={true} prefix={citem.cost_type} />
                        }
                  </div>
                  }
                  </div>
            </div>)
         }): null
      } 
      </div>)
       : null
    }





{insulatedOption ?
   insulatedOption.category.map((item, index) => {
       return ((priceData.length > 0 && item.is_cost!=undefined && (item.cost != 0 || item.is_cost == 2)) && <div className="prow mb-2">
         {isStyleFeature = true}
          <div className="pcol-7">
            
               {/* <div className="checkbox d-flex justify-content-between">
               <div className='input-box' >
                  <input
                     className="secondary"
                     ripple="RipplePropF"
                     label={item.category}
                     value={item.cost}
                     disabled={(item.is_cost == 2) ? true : false}
                     checked={(item.is_cost == 2) ? true : (priceData[0].entry_insulated!=undefined)?priceData[0].entry_insulated:this.props.params.insulated}                    
                     onChange={e =>
                        this.props.headerSealChainHoistAction(Number(e.target.value), insulatedOption.door, doorUniqueId,this.props.params.insulated,DoorObjData)
                     } 
                  />
                  </div>
                    
                </div> */}
                  <div className="input-checkbox form-element">      
                     <div className={(item.is_cost == 2) ? "input-box disabled-checkbox" : "input-box"}>
                           <input
                              type='checkbox'
                              disabled={(item.is_cost == 2) ? true : false}
                              checked={(item.is_cost == 2) ? true : (priceData[0].entry_insulated!=undefined)?priceData[0].entry_insulated:this.props.params.insulated}  
                              id={item.category}
                              value={item.cost}
                              onClick={e =>
                                 this.props.headerSealChainHoistAction(Number(e.target.value), insulatedOption.door, doorUniqueId,this.props.params.insulated,DoorObjData)} 
                           />
                           <label for={item.category}>{item.category}</label>
                     </div>          
                  </div>
            
          </div>
       </div>)
      })
       : null
    }

{addOnOption ?
   addOnOption.category.map((item, index) => {
       return ((priceData.length > 0 && item.is_cost!=undefined && (item.cost != 0 || item.is_cost == 2)) && <div className="prow mb-2">
         {isStyleFeature = true}
          <div className="pcol-7">
            
               {/* <div className="checkbox d-flex justify-content-between">
               <div className='input-box' >
                  <input
                     className="secondary"
                     ripple="RipplePropF"
                     label={item.category}
                     value= {priceData[0]["entry_" + item.category.replace(/\s/g, '_').toLowerCase() + "_" + addOnOption.door + "_price"]}
                     disabled={(item.is_cost == 2) ||((item.category == "Frame Out") && priceData[0]["entry_" + item.category.replace(/\s/g, '_').toLowerCase() + "_" + addOnOption.door]) ? true : false}
                     checked={(item.is_cost == 2) ? true : (priceData[0]["entry_" + item.category.replace(/\s/g, '_').toLowerCase() + "_" + addOnOption.door]!=undefined)?priceData[0]["entry_" + item.category.replace(/\s/g, '_').toLowerCase() + "_" + addOnOption.door]:this.props.params[item.category.replace(/\s/g, '_').toLowerCase() + "_" + addOnOption.door]}                                        
                     onChange={e =>
                        this.props.headerSealChainHoistAction(item.cost, item.category.replace(/\s/g, '_').toLowerCase() + "_" + addOnOption.door, doorUniqueId,priceData[0]["entry_" + item.category.replace(/\s/g, '_').toLowerCase() + "_" + addOnOption.door],DoorObjData)
                     } 
                  />
                  </div>
                    
                </div> */}
                
               <div className="input-checkbox form-element">      
                  <div className={(item.is_cost == 2) ? "input-box disabled-checkbox" : "input-box"}>
                        <input
                           type='checkbox'
                           disabled={(item.is_cost == 2) ? true : false}
                           checked={(item.is_cost == 2) ? true : (priceData[0]["entry_" + item.category.replace(/\s/g, '_').toLowerCase() + "_" + addOnOption.door]!=undefined)?priceData[0]["entry_" + item.category.replace(/\s/g, '_').toLowerCase() + "_" + addOnOption.door]:this.props.params[item.category.replace(/\s/g, '_').toLowerCase() + "_" + addOnOption.door]}     
                           id={item.category}
                           value= {priceData[0]["entry_" + item.category.replace(/\s/g, '_').toLowerCase() + "_" + addOnOption.door + "_price"]}
                           onClick={e =>
                              this.props.headerSealChainHoistAction(item.cost, item.category.replace(/\s/g, '_').toLowerCase() + "_" + addOnOption.door, doorUniqueId,priceData[0]["entry_" + item.category.replace(/\s/g, '_').toLowerCase() + "_" + addOnOption.door],DoorObjData)} 
                        />
                        <label for={item.category}>{item.category}</label>
                  </div>          
               </div>
            
          </div>
          <div className="pcol-5 text-right">
             {item.category != "Frame Out" && (((this.props.const_var.loginSession == true && this.props.const_var.post_data.building != undefined && priceData.length > 0 && priceData[0]["entry_" + item.category.replace(/\s/g, '_').toLowerCase() + "_" + addOnOption.door]/* && priceData[0].entry_header_seal == true && DoorObjData.is_header_seal != 2 */)) ?
                <aside className="price-box price-box-sm">
                   <EditPriceItem uniqueId={priceData[0].uniqueId} componentPrice="true" jsonObj={priceData[0]["entry_" + item.category.replace(/\s/g, '_').toLowerCase() + "_" + addOnOption.door + "_price"]} jsonObjKey={"entry_" + item.category.replace(/\s/g, '_').toLowerCase() + "_" + addOnOption.door + "_price"} />
                </aside>
                :
             <div className="price-box-type-2 d-inline-flex ml-2">
                 {this.props.const_var.hide_price_calculation != 1 && this.props.const_var.loginSession == false && 
                  <CurrencyFormat value = {priceData[0]["entry_" + item.category.replace(/\s/g, '_').toLowerCase() + "_" + addOnOption.door]? priceData[0]["entry_" + item.category.replace(/\s/g, '_').toLowerCase() + "_" + addOnOption.door + "_price"]: 0} displayType={'text'} thousandSeparator={true} prefix={item.cost_type} />
                  }
             </div>)
             }
             </div>
       </div>)
      })
       : null
    }



    {(priceData.length > 0 && DoorObjData.is_automatic_openers!=undefined  && (DoorObjData.automatic_openers !=0 || DoorObjData.is_automatic_openers == 2))?
       <div className="prow mb-2">
          {isStyleFeature = true}
          <div className="pcol-7">
      
                {/* <div className="checkbox d-flex justify-content-between">
                <div className='input-box' >
                  <input
                      className="secondary"
                      ripple="RipplePropF"
                      label="Automatic Opener"
                      disabled={(DoorObjData.is_automatic_openers == 2) ? true : false}
                      checked={(DoorObjData.is_automatic_openers == 2) ? true : (priceData[0].entry_automatic_openers!=undefined)?priceData[0].entry_automatic_openers:this.props.params.automatic_openers}
                      onChange={e =>
                         this.props.headerSealChainHoistAction(e.target.value, 'automatic_openers', doorUniqueId,DoorObjData)} 
                  />
                  </div>
                </div> */}
               <div className="input-checkbox form-element">      
                  <div className={(DoorObjData.is_automatic_openers == 2) ? "input-box disabled-checkbox" : "input-box"}>
                        <input
                           type='checkbox'
                           disabled={(DoorObjData.is_automatic_openers == 2) ? true : false}
                           checked={(DoorObjData.is_automatic_openers == 2) ? true : (priceData[0].entry_automatic_openers!=undefined)?priceData[0].entry_automatic_openers:this.props.params.automatic_openers}     
                           id={"Automatic Opener"}
                           onClick={e =>
                              this.props.headerSealChainHoistAction(e.target.value, 'automatic_openers', doorUniqueId,DoorObjData)} 
                        />
                        <label for={"Automatic Opener"}>{"Automatic Opener"}</label>
                  </div>          
               </div>
            
          </div>
          <div className="pcol-5 text-right">
             {((this.props.const_var.loginSession == true && this.props.const_var.post_data.building != undefined && priceData.length > 0 && priceData[0].entry_automatic_openers == true && DoorObjData.is_automatic_openers != 2)) ?
          <aside className="price-box price-box-sm">
                <EditPriceItem uniqueId={priceData[0].uniqueId} componentPrice="true" jsonObj={priceData[0].entry_automatic_openers_price} jsonObjKey="entry_automatic_openers_price" />
          </aside>
                : 
             <div className="price-box-type-2 d-inline-flex ml-2">
             {this.props.const_var.hide_price_calculation != 1 && this.props.const_var.loginSession == false && 
              <CurrencyFormat value = {this.props.params.automatic_openers && priceData.length > 0 && priceData[0].entry_automatic_openers_price !== undefined ? priceData[0].entry_automatic_openers_price : 0} displayType={'text'} thousandSeparator={true} prefix={'$'} />
             }
             </div>

             }
             </div>
     
       </div>
       : null
    }
    {(priceData.length > 0 && priceData[0].installation_is_end_wall!=undefined  && (priceData[0].installation_is_end_wall !='') && wallCheckForEnd==true)?
       <div className="prow mb-2">
          {isStyleFeature = true}
          <div className={(priceData[0].installation_is_end_wall == "included")?"pcol-12":"pcol-7"}>
      
                {/* <div className="checkbox d-flex justify-content-between">
                  <div className='input-box' >
                     <input
                        className="secondary"
                        ripple="RipplePropF"
                        label={(priceData[0].installation_is_end_wall == "included")?"End Installation Fee (Included)":"End Installation Fee"}
                        disabled={(priceData[0].installation_is_end_wall == "included") ? true : false}
                        checked={(priceData[0].installation_is_end_wall != 'no') ? true : false}
                        onChange={e =>
                           this.props.headerSealChainHoistAction(e.target.value, 'installation_is_end_wall', doorUniqueId,DoorObjData)} 
                     />
                  </div>
                </div> */}
               <div className="input-checkbox form-element">      
                  <div className={(priceData[0].installation_is_end_wall == "included") ? "input-box disabled-checkbox" : "input-box"}>
                        <input
                           type='checkbox'
                           disabled={(priceData[0].installation_is_end_wall == "included") ? true : false}
                           checked={(priceData[0].installation_is_end_wall != 'no') ? true : false}
                           id={"End Installation Fee"}
                           onClick={e =>
                              this.props.headerSealChainHoistAction(e.target.value, 'installation_is_end_wall', doorUniqueId,DoorObjData)} 
                        />
                        <label for={"End Installation Fee"}>{(priceData[0].installation_is_end_wall == "included")?"End Installation Fee (Included)":"End Installation Fee"}</label>
                  </div>          
               </div>
            
          </div>
          <div className="pcol-5 text-right">
             {((this.props.const_var.loginSession == true && this.props.const_var.post_data.building != undefined && priceData.length > 0 && priceData[0].installation_is_end_wall != "no" && DoorObjData.installation_is_end_wall != "included")) ?
          <aside className="price-box price-box-sm">
                <EditPriceItem uniqueId={priceData[0].uniqueId} componentPrice="true" jsonObj={priceData[0].installation_end_wall_fee} jsonObjKey="installation_end_wall_fee" />
          </aside>
                : 
             <div className="price-box-type-2 d-inline-flex ml-2">
             {this.props.const_var.hide_price_calculation != 1 && this.props.const_var.loginSession == false && 
              <CurrencyFormat value = {priceData.length > 0 && priceData[0].installation_end_wall_fee !== undefined ? priceData[0].installation_end_wall_fee : 0} displayType={'text'} thousandSeparator={true} prefix={'$'} />
             }
             </div>

             }
             </div>
     
       </div>
       : null
    }
    {(priceData.length > 0 && priceData[0].installation_is_side_wall!=undefined  && (priceData[0].installation_is_side_wall !='') && wallCheckForSide==true)?
       <div className="prow mb-2">
          {isStyleFeature = true}
          <div className={(priceData[0].installation_is_side_wall == "included")?"pcol-12":"pcol-7"}>
      
                {/* <div className="checkbox d-flex justify-content-between">
                <div className='input-box' >
                  <input
                      className="secondary"
                      ripple="RipplePropF"
                      label={(priceData[0].installation_is_side_wall == "included")?"Side Installation Fee (Included)":"Side Installation Fee"}
                      disabled={(priceData[0].installation_is_side_wall == "included") ? true : false}
                      checked={(priceData[0].installation_is_side_wall != 'no') ? true : false}
                      onChange={e =>
                         this.props.headerSealChainHoistAction(e.target.value, 'installation_is_side_wall', doorUniqueId,DoorObjData)} 
                     />
                  </div>
                </div> */}
                
               <div className="input-checkbox form-element">      
                  <div className={(priceData[0].installation_is_side_wall == "included") ? "input-box disabled-checkbox" : "input-box"}>
                        <input
                           type='checkbox'
                           disabled={(priceData[0].installation_is_side_wall == "included") ? true : false}
                           checked={(priceData[0].installation_is_side_wall != 'no') ? true : false}
                           id={"Side Installation Fee"}
                           onClick={e =>
                              this.props.headerSealChainHoistAction(e.target.value, 'installation_is_side_wall', doorUniqueId,DoorObjData)} 
                        />
                        <label for={"Side Installation Fee"}>{(priceData[0].installation_is_side_wall == "included")?"Side Installation Fee (Included)":"Side Installation Fee"}</label>
                  </div>          
               </div>
            
          </div>
          <div className="pcol-5 text-right">
             {((this.props.const_var.loginSession == true && this.props.const_var.post_data.building != undefined && priceData.length > 0 && priceData[0].installation_is_side_wall  != "no" && DoorObjData.installation_is_side_wall != "included")) ?
          <aside className="price-box price-box-sm">
                <EditPriceItem uniqueId={priceData[0].uniqueId} componentPrice="true" jsonObj={priceData[0].installation_side_wall_fee} jsonObjKey="installation_side_wall_fee" />
          </aside>
                : 
             <div className="price-box-type-2 d-inline-flex ml-2">
             {this.props.const_var.hide_price_calculation != 1 && this.props.const_var.loginSession == false && 
              <CurrencyFormat value = {priceData.length > 0 && priceData[0].installation_side_wall_fee !== undefined ? priceData[0].installation_side_wall_fee : 0} displayType={'text'} thousandSeparator={true} prefix={'$'} />
             }
             </div>

             }
             </div>
     
       </div>
       : null
    }
    {(priceData.length>0 && priceData[0].entry_garageDoor_color_price!=undefined && doorColorData!=undefined) ?
    <div className="colors-section-wrapper door-colors p-0 mt-3">
       {isStyleFeature = true}
       <div className="prow ">
       <div className="pcol-10">
             
                <aside className="colors-section-wrapper-label">
                <h5 className="section-title mb-0">Door</h5>
                <label>
                   <span className="color-box-value" style={{ background: this.props.params.g_d_c.replace("0x", "#") }}></span>
                   <span className="color-box-name">{(priceData.length>0 && priceData[0].entry_garageDoor_color_Obj!=undefined)?"("+priceData[0].entry_garageDoor_color_Obj.name+")":''}</span>
                </label>
                </aside>
          
          </div>
          <div className="pcol-5 text-right">
          <aside className="price-box price-box-sm">
             {((this.props.const_var.loginSession == true &&this.props.const_var.post_data.building != undefined && priceData.length > 0 )) ?
                <EditPriceItem is_disabled="false" uniqueId={priceData[0].uniqueId} componentPrice="true" jsonObj={(this.props.const_var.post_data.building != undefined) ? priceData[0].entry_garageDoor_color_price : 0} jsonObjKey="entry_garageDoor_color_price" />
                : null
             }
       </aside>
             </div>
   
       </div>
       <div className="mt-3">
          <div className="prow m-0">
             <aside className="">
                <aside className="colors-section-wrapper-value">
                <div className="colors-box-sec">

                   <div className="btn-group btn-group-toggles" data-toggle="buttons">
                      {
                      this.props.const_var.garageDoorColor.map((val, index) => {
                         return (
                            <label key={index} className={priceData[0].garage_door_color == val.hex_value.replace("#", "0x") ? "btn-clrd  active " : "btn-clrd " } 
                            style={{ background: val.hex_value }}
                             onChange={e => this.props.headerSealChainHoistAction(val, 'door_color_price', doorUniqueId,DoorObjData)}>
                            <input type="radio" name="options" value={val.hex_value} id={"doorColor" + index} />
                            </label>
                         )
                      })
                      }

                   </div>
                </div>
                </aside>
             </aside>
          </div>
       </div></div>
          :
       null
       }
      </div>
      </>)

      if (isStyleFeature === false) {
         styleFeature = null;
      }

      
      let overhead_door_name_arr = (priceData[0]?.component_name)?.replace("overhead_door_door_", "").split("_");
      let overhead_door_name = ''
      if(overhead_door_name_arr != undefined){
         overhead_door_name_arr = overhead_door_name_arr.map((name) => {
            return name[0].toUpperCase() + name.slice(1);
         })
         overhead_door_name = overhead_door_name_arr.join(" ");
      }
      return (
        <div  className={this.props.const_var.showComponentEditBox==true ?'dw-show-edit-box-wrapper ':'dw-show-edit-box-wrapper  d-none'}>
           <div onClick={e=>this.props.hancleClickOutside()} className='dweditbox-overlay'></div>
      <Draggable
position={controlledPosition} {...dragHandlers} handle=".handle" onDrag={this.onControlledDrag} 
bounds="parent" 
className={'card-box'}
>
<div className="door-window-drag-inner" style={{background: "white", top:"100px", width: "275px"}}>
   <div className="handle"><span class="icon-drag"><span class="path1"></span><span class="path2"></span></span></div>
            <div className="dw-show-edit-box-wrapper-top">
               <div className='prow align-items-center mb-2'>
                  <div className='pcol-7'>
                  {(this.props.const_var.editComponentDimension != "CustomGarageSize" && priceData.length > 0 ) ?
                  <h5 class="section-title no-underline mb-0">{(priceData.length > 0 && priceData[0].parent_array_key=="Garage") ? "Garage Door" +' '+ priceData[0].name + "'":priceData[0].parent_array_key+' '+ priceData[0].name + '"'}
                  <span className="price-box-type-2 text-right d-none">
                     <CurrencyFormat value = {priceData.length > 0 && priceData[0].entry_price !== undefined ? priceData[0].entry_price : 0} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                  </span>
                   </h5>
                  :
                  <h5 class="section-title no-underline mb-0">{"Custom Size " + exactComName}
                  <span className="price-box-type-2 text-right d-none">
                     <CurrencyFormat value = {priceData.length > 0 && priceData[0].entry_price !== undefined ? priceData[0].entry_price : 0} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                  </span>
                  </h5>
               }
                  </div>

                  <div className='pcol-5 text-right'>
                           {((this.props.const_var.loginSession == true && this.props.const_var.post_data.building != undefined && priceData.length > 0 && this.props.const_var.editComponentDimension != "CustomGarageSize")) ?
                        <aside className="price-box">
                              <EditPriceItem entry_pointsData={priceData[0]} uniqueId={priceData[0].uniqueId} componentPrice="true" jsonObj={priceData[0].entry_price} jsonObjKey="entry_price" />
                        </aside>
                              :
                               <>
                              {(this.props.const_var.editComponentDimension != "CustomGarageSize" && priceData.length > 0 ) 
                              ?
                              <span className="price-box-type-2">
                              {this.props.const_var.hide_price_calculation != 1 && this.props.const_var.loginSession == false && 
                                <CurrencyFormat value = {priceData.length > 0 && priceData[0].entry_price !== undefined ? priceData[0].entry_price : 0} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                              }
                              </span>
                              :
                              <span className="price-box-type-2">
                              {this.props.const_var.hide_price_calculation != 1 && this.props.const_var.loginSession == false && 
                              <CurrencyFormat value = {priceData.length > 0 && priceData[0].entry_price !== undefined ? priceData[0].entry_price : 0} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                              }
                                 </span>
                              }
                              </>
                           }


                  </div>
               </div>
            
               <div className="prow">
                  {(priceData.length > 0 && priceData[0].parent_array_key!="Garage_Frameout") ?
                     <div className={(is_overhead_door)?"price-row mb-3 mr-0 ml-0 pcol-6":"price-row mb-3 mr-0 ml-0"}>
                        <aside className="price-row-left">
                           <div className={(is_overhead_door)?"":"pcol-12"}> {/* className="pcol-12"*/}
                              <div className="floating-label-input floating-label-inside">
                               
                                 {/* <select
                                    onChange={e => this.props.changeComponentSize(e.target.value,doorUniqueId,priceData[0])}
                                    className="cpanelselect"
                                    label="Size"
                                    value={priceData.length > 0 && priceData[0].entry_doorNewType==undefined?priceData[0].name:priceData[0].entry_doorNewType}
                                    options={this.props.const_var.newComponentArray[priceData[0].parent_array_key][priceData[0].child_array_key][priceData[0].nested_array_key]!=undefined && Object.entries(this.props.const_var.newComponentArray[priceData[0].parent_array_key][priceData[0].child_array_key][priceData[0].nested_array_key]['Size']).map(([key, val],index) => {
                                       return (
                                          {
                                             "value": key,
                                             "label": key
                                          }
                                       )
                                    })}
                                 /> */}
                                 <div className='no-underline section-title'>Size</div>
                                 <div className='input-select form-element mt-5'>
                                    <label class='select'>
                                       <select
                                          value={priceData.length > 0 && priceData[0].entry_doorNewType==undefined?priceData[0].name:priceData[0].entry_doorNewType}
                                          onChange={e => this.props.changeComponentSize(e.target.value,doorUniqueId,priceData[0])}
                                       > 
                                          {
                                             this.props.const_var.newComponentArray[priceData[0].parent_array_key][priceData[0].child_array_key][priceData[0].nested_array_key]!=undefined && Object.entries(this.props.const_var.newComponentArray[priceData[0].parent_array_key][priceData[0].child_array_key][priceData[0].nested_array_key]['Size']).map(([key, val],index) => {
                                                return (
                                                   <option value={key}>{key}</option>                                            
                                                )
                                             })
                                          }
                                       </select>
                                    </label>
                                 </div>


                              </div>
                           </div>
                        </aside>
                     
                     </div>
                     : null}

                     {(is_overhead_door)?
                     <div className="price-row mb-3 mr-0 ml-0 pcol-6">
                        <aside className="price-row-left">
                           <div className=""> {/* className="pcol-12"*/}
                              {/* <div className="floating-label-input floating-label-inside">
                                 <select
                                    onChange={e => this.props.changeComponent(e.target.value,doorUniqueId,priceData[0])}
                                    className="cpanelselect"
                                    label="Type"
                                    value={overhead_door_name}
                                    options={this.props.const_var.newComponentArray[priceData[0].parent_array_key][priceData[0].child_array_key][priceData[0].nested_array_key]['Size'][priceData[0].name]?.door_add_ons[0].category.map((key,index) => {
                                       return (
                                          {
                                             "value": key.category,
                                             "label": key.category
                                          }
                                       )
                                    })}
                                 />
                              </div> */}

                              
                              <div className='no-underline section-title'>Type</div>
                              <div className='input-select form-element mt-5'>
                                 <label class='select'>
                                    <select
                                       onChange={e => this.props.changeComponent(e.target.value,doorUniqueId,priceData[0])}
                                       value={overhead_door_name}
                                    > 
                                       {
                                         this.props.const_var.newComponentArray[priceData[0].parent_array_key][priceData[0].child_array_key][priceData[0].nested_array_key]['Size'][priceData[0].name]?.door_add_ons[0].category.map((key,index) => {
                                             return (
                                                <option value={key.category}>{key.category}</option>                                            
                                             )
                                          })
                                       }
                                    </select>
                                 </label>
                              </div>
                           </div>
                        </aside>
                     
                     </div>
                     : null}

                     {(priceData.length>0 && priceData[0].parent_array_key=="Garage_Frameout" && priceData[0].entry_doorNewType==undefined)?

                      <div className="price-row mb-2 mr-0 ml-0">
                        <aside className="price-row-left d-flex">
                           
                                    <div className="pcol-6 pr-10">
                                       {/* <div className="floating-label-input floating-label-inside">
                                          <select
                                             onChange={e => this.props.changeComponentSize(e.target.value+'x'+priceData[0].entry_dimension_height,doorUniqueId,priceData[0])}
                                             className="cpanelselect"
                                             label="Width"
                                             value={priceData[0].entry_dimension_width}
                                             options={Object.entries(this.props.const_var.newComponentArray[priceData[0].parent_array_key][priceData[0].child_array_key][priceData[0].nested_array_key]['Width']).filter((e) => {
                                                let isSideWall = priceData[0].entry_location.includes("side");
                                                if (priceData[0].component_wall_name == "c_b_l_s_r_w" || priceData[0].component_wall_name == "c_b_r_s_l_w") isSideWall = true;
                                                if ((isSideWall && this.props.params.m_s_n==122 && e[1] > 12)) {
                                                   return false
                                                }

                                                return true;
                                             }).map(([key, val],index) => {
                                               return (
                                                  {
                                                     "value": key,
                                                     "label": key
                                                  }
                                               )
                                          })}
                                          />
                                       </div> */}

                                       <div className='no-underline section-title'>Width</div>
                                       <div className='input-select form-element mt-5'>
                                          <label class='select'>
                                             <select
                                                onChange={e => this.props.changeComponentSize(e.target.value+'x'+priceData[0].entry_dimension_height,doorUniqueId,priceData[0])}
                                                value={priceData[0].entry_dimension_width}
                                             > 
                                                {
                                                Object.entries(this.props.const_var.newComponentArray[priceData[0].parent_array_key][priceData[0].child_array_key][priceData[0].nested_array_key]['Width']).filter((e) => {
                                                   let isSideWall = priceData[0].entry_location.includes("side");
                                                   if (priceData[0].component_wall_name == "c_b_l_s_r_w" || priceData[0].component_wall_name == "c_b_r_s_l_w") isSideWall = true;
                                                   if ((isSideWall && this.props.params.m_s_n==122 && e[1] > 12)) {
                                                      return false
                                                   }
   
                                                   return true;
                                                }).map(([key, val],index) => {
                                                      return (
                                                         <option value={key}>{key}</option>                                            
                                                      )
                                                   })
                                                }
                                             </select>
                                          </label>
                                       </div>
                                    </div>
                                    <div className="pcol-6 pl-10">
                                       {/* <div className="floating-label-input floating-label-inside">
                                          <select
                                             onChange={e => this.props.changeComponentSize(priceData[0].entry_dimension_width+'x'+e.target.value,doorUniqueId,priceData[0])}
                                             className="cpanelselect"
                                             label="Height"
                                             value={priceData[0].entry_dimension_height}
                                             options={Object.entries(this.props.const_var.newComponentArray[priceData[0].parent_array_key][priceData[0].child_array_key][priceData[0].nested_array_key]['Height']).map(([key, val],index) => {
                                                return (
                                                   {
                                                      "value": key,
                                                      "label": key
                                                   }
                                                )
                                             })}
                                          />
                                       </div> */}
                                       <div className='no-underline section-title'>Height</div>
                                       <div className='input-select form-element mt-5'>
                                          <label class='select'>
                                             <select
                                                onChange={e => this.props.changeComponentSize(priceData[0].entry_dimension_width+'x'+e.target.value,doorUniqueId,priceData[0])}
                                                value={priceData[0].entry_dimension_height}
                                             > 
                                                {
                                                Object.entries(this.props.const_var.newComponentArray[priceData[0].parent_array_key][priceData[0].child_array_key][priceData[0].nested_array_key]['Height']).map(([key, val],index) => {
                                                      return (
                                                         <option value={key}>{key}</option>                                            
                                                      )
                                                   })
                                                }
                                             </select>
                                          </label>
                                       </div>
                                    </div>
                                   
                           
                        </aside>
                        
                     </div>
                     :null}
                  {(priceData.length>0 && priceData[0].entry_doorNewType!=undefined) ?
                     <Fragment>
                        <div className="price-row mb-2 mr-0 ml-0">
                        <aside className="price-row-left d-flex">
                              <div className="pcol-6 pr-10">
                                    {/* <div className="floating-label-input floating-label-inside">
                                       {(priceData[0].parent_array_key!="Garage" && priceData[0].parent_array_key!="Garage_Frameout") ?
                                       <select
                                          onChange={e => this.props.changeComponentSize(e.target.value+'x'+priceData[0].name.split("x")[1],doorUniqueId,priceData[0])}
                                          className="cpanelselect"
                                          label="Width"
                                          value={priceData[0].name.split("x")[0]}
                                          options={Array.apply(null, { length: maxWidth1 + 1 }).map(Number.call, Number).slice(minWidth1).map((val, index) => {
                                             return (
                                                {
                                                   "value": val,
                                                   "label": val
                                                }
                                             )
                                          })}
                                       />
                                       : 
                                       <select
                                          onChange={e => this.props.changeComponentSize(e.target.value+'x'+priceData[0].entry_dimension_height,doorUniqueId,priceData[0])}
                                          className="cpanelselect"
                                          label="Width"
                                          value={priceData[0].entry_dimension_width}
                                          options={Array.apply(null, { length: priceData[0].entry_location.includes("side") && 
                                          this.props.params.m_s_n==122 &&  
                                          priceData[0].parent_array_key=="Garage_Frameout"? "13": maxWidth1 + 1 }).map(Number.call, Number).slice(5).map((val, index) => {
                                             return (
                                                {
                                                   "value": val,
                                                   "label": val
                                                }
                                             )
                                          })}
                                       />
                                    }
                                 </div> */}
                                 <div className='no-underline section-title'>Width</div>
                                 <div className='input-select form-element mt-5'>
                                    {(priceData[0].parent_array_key!="Garage" && priceData[0].parent_array_key!="Garage_Frameout") ?
                                       <label class='select'>
                                          <select
                                             onChange={e => this.props.changeComponentSize(e.target.value+'x'+priceData[0].name.split("x")[1],doorUniqueId,priceData[0])}
                                             value={priceData[0].name.split("x")[0]}
                                          > 
                                             {Array.apply(null, { length: maxWidth1 + 1 }).map(Number.call, Number).slice(minWidth1).map((val, index) => {
                                                   return (
                                                      <option value={val}>{val}</option>                                            
                                                   )
                                                })
                                             }
                                          </select>
                                       </label>
                                       :
                                       <label class='select'>
                                          <select
                                             onChange={e => this.props.changeComponentSize(e.target.value+'x'+priceData[0].entry_dimension_height,doorUniqueId,priceData[0])}
                                             value={priceData[0].entry_dimension_width}
                                          > 
                                             {Array.apply(null, { length: priceData[0].entry_location.includes("side") && 
                                          this.props.params.m_s_n==122 &&  
                                          priceData[0].parent_array_key=="Garage_Frameout"? "13": maxWidth1 + 1 }).map(Number.call, Number).slice(5).map((val, index) => {
                                                   return (
                                                      <option value={val}>{val}</option>                                            
                                                   )
                                                })
                                             }
                                          </select>
                                       </label>
                                    }
                                 </div>
                              </div>
                              <div className="pcol-6 pl-10">
                                       {/* <div className="floating-label-input floating-label-inside">
                                       {(priceData[0].parent_array_key!="Garage" && priceData[0].parent_array_key!="Garage_Frameout") ?
                                     <select
                                          onChange={e => this.props.changeComponentSize(priceData[0].name.split("x")[0]+'x'+e.target.value,doorUniqueId,priceData[0])}
                                          className="cpanelselect"
                                          label="Height"
                                          value={priceData[0].name.split("x")[1]}
                                          options={Array.apply(null, { length: maxHeight1 + 1 }).map(Number.call, Number).slice(minHeight1).map((val, index) => {
                                             return (
                                                {
                                                   "value": val,
                                                   "label": val
                                                }
                                             )
                                          })}
                                       />:
                                       <select
                                          onChange={e => this.props.changeComponentSize(priceData[0].entry_dimension_width+'x'+e.target.value,doorUniqueId,priceData[0])}
                                          className="cpanelselect"
                                          label="Height"
                                          value={priceData[0].entry_dimension_height}
                                          options={Array.apply(null, { length: maxHeight1 + 1 }).map(Number.call, Number).slice(5).map((val, index) => {
                                             return (
                                                {
                                                   "value": val,
                                                   "label": val
                                                }
                                             )
                                          })}
                                       />
                                   }
                                       
                                 </div> */}
                                 <div className='no-underline section-title'>Height</div>
                                 <div className='input-select form-element mt-5'>
                                    {(priceData[0].parent_array_key!="Garage" && priceData[0].parent_array_key!="Garage_Frameout") ?
                                       <label class='select'>
                                          <select
                                             onChange={e => this.props.changeComponentSize(priceData[0].name.split("x")[0]+'x'+e.target.value,doorUniqueId,priceData[0])}
                                             value={priceData[0].name.split("x")[1]}
                                          > 
                                             {Array.apply(null, { length: maxHeight1 + 1 }).map(Number.call, Number).slice(minHeight1).map((val, index) => {
                                                   return (
                                                      <option value={val}>{val}</option>                                            
                                                   )
                                                })
                                             }
                                          </select>
                                       </label>
                                       :
                                       <label class='select'>
                                          <select
                                             onChange={e => this.props.changeComponentSize(priceData[0].entry_dimension_width+'x'+e.target.value,doorUniqueId,priceData[0])}
                                             value={priceData[0].entry_dimension_height}
                                          > 
                                             {Array.apply(null, { length: maxHeight1 + 1 }).map(Number.call, Number).slice(5).map((val, index) => {
                                                   return (
                                                      <option value={val}>{val}</option>                                            
                                                   )
                                                })
                                             }
                                          </select>
                                       </label>
                                    }
                                 </div>
                              </div>
                           </aside>
                           <aside className="price-box d-none">
                              {((this.props.const_var.loginSession == true && this.props.const_var.post_data.building != undefined && priceData.length > 0)) ?
                                 <EditPriceItem entry_pointsData={priceData[0]} uniqueId={priceData[0].uniqueId} componentPrice="true" jsonObj={priceData[0].entry_price} jsonObjKey="entry_price" />
                                 : null
                              }
                           </aside>
                        </div>
                     </Fragment>
                     : null}
                  {(this.props.params.chkFrameOpening == true) ? null :
                     <div className="price-row mb-2 mr-0 ml-0">
                        <aside className="price-row-left">
                           {
                              (DoorVar != "CustomFrameout") ? null :
                                 this.props.params.chkFrameOpening != true && this.props.const_var.CustomDoorArr[DoorVar] != undefined && this.props.const_var.CustomDoorArr[DoorVar]['Width'] != undefined ?
                                    <div className="pcol-6 pr-10">
                                       {/* <div className="floating-label-input floating-label-inside">
                                          <select
                                             onChange={e => this.props.editComponentSize('', e.target.value, commonDoorType, DoorVar, doorUniqueId, 'Width')}
                                             className="cpanelselect"
                                             label="Width"
                                             value={this.props.params.f_r_m_o_t}
                                             options={Object.entries(this.props.const_var.CustomDoorArr[DoorVar]['Width']).map((val, index) => {
                                                return (
                                                   {
                                                      "value": val[1],
                                                      "label": val[0]
                                                   }
                                                )
                                             })}
                                          />
                                       </div> */}
                                       <div className='no-underline section-title'>Width</div>
                                       <div className='input-select form-element mt-5'>
                                          <label class='select'>
                                             <select
                                                onChange={e => this.props.editComponentSize('', e.target.value, commonDoorType, DoorVar, doorUniqueId, 'Width')}
                                                value={this.props.params.f_r_m_o_t}
                                             > 
                                                {Object.entries(this.props.const_var.CustomDoorArr[DoorVar]['Width']).map((val, index) => {
                                                      return (
                                                         <option value={val}>{val}</option>                                            
                                                      )
                                                   })
                                                }
                                             </select>
                                          </label>
                                       </div>
                                    </div>
                                    : null
                           }
                           {
                              (DoorVar != "CustomFrameout") ? null :
                                 this.props.params.chkFrameOpening != true && this.props.const_var.CustomDoorArr[DoorVar] != undefined && this.props.const_var.CustomDoorArr[DoorVar]['Height'] != undefined ?
                                    <div className="pcol-6 pl-10">
                                       {/* <div className="floating-label-input floating-label-inside">
                                          <select
                                             onChange={e => this.props.editComponentSize('', e.target.value, commonDoorType, DoorVar, doorUniqueId, 'Height')}
                                             className="cpanelselect"
                                             label="Height"
                                             value={this.props.params.f_r_m_o_t1}
                                             options={Object.entries(this.props.const_var.CustomDoorArr[DoorVar]['Height']).map((val, index) => {
                                                return (
                                                   {
                                                      "value": val[1],
                                                      "label": val[0]
                                                   }
                                                )
                                             })}
                                          />
                                       </div> */}
                                       <div className='no-underline section-title'>Height</div>
                                       <div className='input-select form-element mt-5'>
                                          <label class='select'>
                                             <select
                                                onChange={e => this.props.editComponentSize('', e.target.value, commonDoorType, DoorVar, doorUniqueId, 'Height')}
                                                value={this.props.params.f_r_m_o_t1}
                                             > 
                                                {Object.entries(this.props.const_var.CustomDoorArr[DoorVar]['Height']).map((val, index) => {
                                                      return (
                                                         <option value={val}>{val}</option>                                            
                                                      )
                                                   })
                                                }
                                             </select>
                                          </label>
                                       </div>
                                    </div>
                                    : null
                           }
                        </aside>
                        {
                           (DoorVar != "CustomFrameout") ? null :
                              <aside className="price-box">
                                 {((this.props.const_var.loginSession == true && this.props.const_var.post_data.building != undefined && priceData.length > 0)) ?
                                    <EditPriceItem uniqueId={priceData[0].uniqueId} componentPrice="true" jsonObj={priceData[0].entry_price} jsonObjKey="entry_price" />
                                    : null
                                 }
                              </aside>
                        }
                     </div>
                  }
                  {(priceData.length>0 && priceData[0].parent_array_key=="Garage_Frameout" && this.props.const_var.loginSession != false) ? 
                        <div className="price-row mb-2 mr-0 ml-0">
                           <aside className="price-row-left">
                              <div className="pcol-12">
                                 <div className="checkbox">
                                 <div className='input-box' >
                                    <input
                                       className="secondary"
                                       ripple="RipplePropF"
                                       label="Custom Size"
                                       checked={priceData.length > 0 && priceData[0].entry_doorNewType!=undefined?true:false}
                                       onChange={e => this.props.changeComponentSize('Custom Size',doorUniqueId,priceData[0],'',e.target.checked)} 
                                       />
                                    </div>
                                    <div className="price-box-type-2 d-inline-flex ml-2 text-right d-none">
                                       {this.props.const_var.hide_price_calculation != 1 && this.props.const_var.loginSession == false && 
                                        <CurrencyFormat value = {this.props.params.chkFrameOpening && priceData.length > 0 && priceData[0].entry_price !== undefined ? priceData[0].entry_price : 0} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                       }
                                    </div>
                                 </div>
                              </div>
                           </aside>
                           <aside className="price-box price-box-sm">
                           </aside>
                        </div>
                        : null
                  }
               </div>
             
             {
               styleFeature 
             }
                  
               <div className="price-row m-0">
                  <aside className="price-row-left">
                     <div className="floating-label-input remove-helper-line w-full mt-3">
                        <inpput 
                           type="text"
                           value={EntrynotesData}
                           textarea
                           fullwidth
                           label="Additional Notes"
                           rows={2}
                           maxLength={500}
                           onChange={e => this.props.headerSealChainHoistAction(e.target.value, 'extra_notes', doorUniqueId,DoorObjData)}
                           characterCount
                           helpText={{
                              persistent: true,
                           }}
                        />
                     </div>
                  </aside>
               </div>
            </div>
            <div className="dw-show-edit-box-bottom">
                {(priceData.length>0)?
                <a className="" onClick={e=>this.handleCloseforDoorWindows('clone',doorUniqueId,priceData[0])} ><span className="text">Clone</span></a> 
                  :null
                }
               {(priceData.length>0)?
               <a onClick={e=>this.handleCloseforDoorWindows('remove',doorUniqueId,priceData[0].component_name,findIndex) } ><span className="text">Remove</span></a>
                :null
                }
               <button onClick={(e)=>this.handleCloseforDoorWindows('done',doorUniqueId)} className="btn btn-secondary btn-xs barlow-semibold text-uppercase">Done</button>
            </div>
            </div>
            </Draggable>
         </div>
      );
   }
}
const mapStateToProps = (state) => {
   return { ...state.reducer, ...state.eventReducer, ...state.priceUpdateReducer }
}
export default connect(
   mapStateToProps,
   actionCreator
)(React.memo(DoorWindowEditBox));