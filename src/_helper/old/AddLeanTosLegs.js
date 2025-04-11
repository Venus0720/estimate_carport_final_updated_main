import * as LeantoLegs from "../3D_Objects/LeantoLegs"
import { params} from '../redux/reducers/reducer';


export const addLeanTosLegs = () => { 

    //Condition For Front Lean To Legs Dynamically
	if(params.add_front_lean)
	{
		LeantoLegs.addLegsLeanToFront(params.add_front_lean);
	} else {
		LeantoLegs.addLegsLeanToFront(params.add_front_lean == true);
	}
    // Condition For Left Lean To Legs Dynamically
	if(params.add_left_lean)
	{
		LeantoLegs.addLegsLeanToLeft(params.add_left_lean);
	} else {
		LeantoLegs.addLegsLeanToLeft(params.add_left_lean == true);
	}
	//Condition For Right Lean To Legs Dynamically
	if(params.add_right_lean)
	{
		LeantoLegs.addLegsLeanToRight(params.add_right_lean);
	} else{
		LeantoLegs.addLegsLeanToRight(params.add_right_lean == true);
	}
	//Condition For Back Lean To Legs Dynamically
	if(params.add_back_lean)
	{
		LeantoLegs.addLegsLeanToBack(params.add_back_lean);
	} else {
		LeantoLegs.addLegsLeanToBack(params.add_back_lean == true);
	}
	
}
