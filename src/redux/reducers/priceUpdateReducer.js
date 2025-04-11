import { params, const_var} from './reducer';
import * as cuBuilding from './pricingReducer';
export const priceUpdateState = {
	changePriceCalculation:'',
	UpdatedPriceData:'',
	PriceData:'',
}
priceUpdateState.UpdatedPriceData = const_var.UpdatedPriceData;
const priceUpdateReducer = (state = priceUpdateState,action) =>
{
	const newState = {...state};
	switch (action.type)
	{
		case "updatePriceCalculation":
            cuBuilding.updatePriceCalculation(action.newVal,action.oldVal,action.key,action.leanVal,action.objIndex,action.uniqueId, action.elementObjIndex,action.extraItemType,action.cupolaId);
            state.PriceData = const_var.post_data.building;
        return{
            ...state,
            changePriceCalculation:action
        }
	}
	return newState;
}
export default priceUpdateReducer;