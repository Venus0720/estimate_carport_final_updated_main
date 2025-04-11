import React, { Component } from 'react';
import {connect} from 'react-redux';
// import { TextField  } from '@rmwc/textfield';
import * as actionCreator from "../../../action/priceUpdate.action.js";
// import * as cuComponent from '../../redux/reducers/componentReducer';
// import * as validate from '../Modals/validations';
import CurrencyFormat from 'react-currency-format';
// import { convertToTwoDecimalNumber } from '../../redux/reducers/utils.js';

class EditEditPriceItem extends Component {

  render() {
    // console.log(this.props.const_var.UpdatedPriceData.leanto, "roof_pitch_price");
    let UpdatedPrice = 0;
    if(this.props.jsonObj=="extraitems" && this.props.const_var.UpdatedPriceData['elements']!=undefined && this.props.const_var.UpdatedPriceData['elements'][this.props.jsonObjKey]==undefined)
    {
      if(this.props.jsonObjValue==false || this.props.jsonObjValue==undefined)
      {
        UpdatedPrice = 0;
      }
    }else
    {
      if(this.props.jsonObj=="extraitems" && this.props.const_var.UpdatedPriceData['elements']!=undefined && this.props.const_var.UpdatedPriceData['elements'][this.props.jsonObjKey]!=undefined)
      {
        UpdatedPrice = this.props.const_var.UpdatedPriceData['elements'][this.props.jsonObjKey].item_price
      }else{

        if(this.props.jsonIsLeanto!=undefined && this.props.const_var.UpdatedPriceData.leanto!=undefined && this.props.const_var.UpdatedPriceData.leanto.length>0)
        {
          // console.log("roof_pitch_price222",this.props.jsonObjIndex,this.props.jsonObjKey,"this.props.jsonObjIndex",this.props.const_var.UpdatedPriceData.leanto[this.props.jsonObjIndex][this.props.jsonObjKey]);
          UpdatedPrice = this.props.const_var.UpdatedPriceData.leanto[this.props.jsonObjIndex][this.props.jsonObjKey];
        }else
        {
          if(this.props.jsonObjKey == "order_extra_items") {
            UpdatedPrice = this.props.const_var.UpdatedPriceData[this.props.jsonObjKey]?.order_permit_fee
          }else {
             UpdatedPrice = this.props.const_var.UpdatedPriceData[this.props.jsonObjKey]
          }
        }
      }
  }
    if(this.props.componentPrice!=undefined && this.props.componentPrice=="true")
    {
        UpdatedPrice = this.props.jsonObj;//this.props.const_var.UpdatedPriceData.entry_points[this.props.jsonObjKey];
    }
    if(this.props.cupolaPrice!=undefined && this.props.cupolaPrice=="true")
    {
        UpdatedPrice = this.props.jsonObj;
    }
    if(this.props.is_priceChanged!=undefined && this.props.is_priceChanged=="false")
    {
      UpdatedPrice = this.props.jsonObjKey;
    }
    //UpdatedPrice = UpdatedPrice !== undefined && UpdatedPrice % 1 != 0 ? Number(UpdatedPrice).toFixed(2): UpdatedPrice ;
    UpdatedPrice = UpdatedPrice !== undefined && UpdatedPrice % 1 !== 0 ? Number(UpdatedPrice): UpdatedPrice ;
    let disabledCheck = (this.props.is_disabled!=undefined && this.props.is_disabled=="true")?this.props.is_disabled:"false";
    if(this.props.const_var.crmSetting.is_quote_Edit==true)
    {
      disabledCheck = "true";
    }

    if(this.props.onChangeFnNew != undefined && this.props.onChangeFnNew == true){
      UpdatedPrice = this.props.jsonNewObj != undefined ? this.props.jsonNewObj : 0
      //console.log('UpdatedPrice',UpdatedPrice, this.props.jsonNewObj)
    }

    //console.log(UpdatedPrice,this.props.jsonObj,this.props.const_var.UpdatedPriceData,"this.props.const_var.UpdatedPriceData")
    //console.log(this.props.is_disabled,"this.props.is_disabled",this.props.jsonObj,this.props.jsonObjValue,this.props.jsonObjKey,"jsonObj",this.props.const_var.UpdatedPriceData['elements'],UpdatedPrice,this.props.jsonIsLeanto,this.props.jsonObjIndex,this.props.const_var.post_data.building!=undefined ?this.props.const_var.post_data.building[this.props.jsonObjKey]:0);
    return        <div className="edit-price-wrapper">
              <span className={this.props.const_var.is_loader==true?"active saving-effect saving-effect-type-2":"saving-effect saving-effect-type-2"}><span></span><span></span><span></span></span>  
              <input
                      type='text'
                      className="component-input d-none" 
                        value={UpdatedPrice}
                        maxLength="5"
                        disabled={disabledCheck=="true"?true:false}
                        onChange={e => this.props.onChangeFnNew != undefined && this.props.onChangeFnNew == true ? this.props.onchangeFn(e) : this.props.updatePriceCalculation(e.target.value,this.props.jsonObj,this.props.jsonObjKey,this.props.jsonIsLeanto,this.props.jsonObjIndex,this.props.uniqueId) } 
                         />
                         <CurrencyFormat className={((disabledCheck=="true"))?"no-cursor component-input":"component-input"} customInput={<input/>} 
                          inputMode="numeric"
                          maxLength="9"
                          allowNegative={false}
                          value={(UpdatedPrice==undefined)?0:UpdatedPrice}
                          onChange={e => this.props.onChangeFnNew != undefined && this.props.onChangeFnNew == true ? this.props.onchangeFn(e,'engineer_drawings', 'yes') : this.props.updatePriceCalculation(e.target.value,this.props.jsonObj,this.props.jsonObjKey,this.props.jsonIsLeanto,this.props.jsonObjIndex,this.props.uniqueId, this.props.elementObjIndex, this.props.extraItemType, this.props.cupolaId ) } 
                          thousandSeparator={true}  />
                       </div>
  }

}

const mapStateToProps = (state) => {
  return {...state.priceUpdateReducer,...state.reducer,...state.orderExtrasReducer};
}
export default connect(
mapStateToProps,

actionCreator
)(EditEditPriceItem);