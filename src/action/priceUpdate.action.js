import axios from 'axios';

export function updatePriceCalculation(newVal,oldVal,key,leanVal,leanIndex,uniqueId,elementObjIndex, extraItemType,cupolaId)
{
	newVal = newVal.replace(/,/g, '');
	return{
        type:"updatePriceCalculation",
        newVal:newVal,
        oldVal:oldVal,
        key:key,
        leanVal:leanVal,
        objIndex:leanIndex,
        uniqueId:uniqueId,
        elementObjIndex:elementObjIndex,
        extraItemType:extraItemType,
        cupolaId:cupolaId,
    }

}