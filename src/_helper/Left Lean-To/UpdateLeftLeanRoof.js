import * as THREE from "three";
import verticalTexture from '../../assets/images/imgTextures/buildingImages/verticalTexture.jpeg';
import horizontalTexture from '../../assets/images/imgTextures/buildingImages/horizantalTexture.jpeg';
import { params, const_var,} from '../../redux/reducers/reducer';

export const updateLeftLeanToRoofPitch = ()=>{
    
    /*Globle Variables*/
    let roofMiddleHeight = {
	    "1":{"6":0.25,"7":0.29165,"8":0.33335,"9":0.375,"10":0.41665,"11":0.45835,"12":0.5,"13":0.5417,"14":0.5833,"15":0.6250,"16":0.6667,"17":0.7083,"18":0.7500,"19":0.7917,"20":0.8333,"21":0.8750,"22":0.9167,"23":0.9583,"24":1,"25":1.0417,"26":1.0833,"27":1.1250,"28":1.1667,"29":1.2083,"30":1.2500,"31":1.2917,"32":1.3333,"33":1.3750,"34":1.4167,"35":1.4583,"36":1.5000,"37":1.5417,"38":1.5833,"39":1.6250,"40":1.6667,"41":1.7083,"42":1.7500,"43":1.7917,"44":1.8333,"45":1.8750,"46":1.9167,"47":1.9583,"48":2.00,"49":2.0417,"50":2.0833,"51":2.1250,"52":2.1667,"53":2.2083,"54":2.2500,"55":2.2917,"56":2.3333,"57":2.3750,"58":2.4167,"59":2.4583,"60":2.5000,"61":2.5417,"62":2.5833,"63":2.6250,"64":2.6667,"65":2.7083,"66":2.7500,"67":2.7917,"68":2.8333,"69":2.8750,"70":2.9167,"71":2.9583,"72":3.00,"73":3.0417,"74":3.0833,"75":3.1250,"76":3.1667,"77":3.2083,"78":3.2500,"79":3.2917,"80":3.3330},
	    "2":{"6":0.50,"7":0.58335,"8":0.66665,"9":0.750,"10":0.83335,"11":0.91665,"12":1.0,"13":1.0833,"14":1.1667,"15":1.2500,"16":1.3333,"17":1.4167,"18":1.5000,"19":1.5833,"20":1.6667,"21":1.7500,"22":1.8333,"23":1.9167,"24":2,"25":2.0833,"26":2.1667,"27":2.2500,"28":2.3333,"29":2.4167,"30":2.5000,"31":2.5833,"32":2.6667,"33":2.7500,"34":2.8333,"35":2.9167,"36":3.0000,"37":3.0833,"38":3.1667,"39":3.2500,"40":3.3330,"41":3.4170,"42":3.5000,"43":3.5830,"44":3.6670,"45":3.7500,"46":3.8330,"47":3.9170,"48":4.00,"49":4.0830,"50":4.1670,"51":4.2500,"52":4.3330,"53":4.4170,"54":4.5000,"55":4.5830,"56":4.6670,"57":4.7500,"58":4.8330,"59":4.9170,"60":5.0000,"61":5.0830,"62":5.1670,"63":5.2500,"64":5.3330,"65":5.4170,"66":5.5000,"67":5.5830,"68":5.6670,"69":5.7500,"70":5.8330,"71":5.9170,"72":6.00,"73":6.0830,"74":6.1670,"75":6.2500,"76":6.3330,"77":6.4170,"78":6.5000,"79":6.5830,"80":6.6670},
	    "3":{"6":0.75,"7":0.87500,"8":1.00000,"9":1.125,"10":1.25000,"11":1.37500,"12":1.5,"13":1.6250,"14":1.7500,"15":1.8750,"16":2.0000,"17":2.1250,"18":2.2500,"19":2.3750,"20":2.5000,"21":2.6250,"22":2.7500,"23":2.8750,"24":3,"25":3.1250,"26":3.2500,"27":3.3750,"28":3.5000,"29":3.6250,"30":3.7500,"31":3.8750,"32":4.0000,"33":4.1250,"34":4.2500,"35":4.3750,"36":4.5000,"37":4.6250,"38":4.7500,"39":4.8750,"40":5.0000,"41":5.1250,"42":5.2500,"43":5.3750,"44":5.5000,"45":5.6250,"46":5.7500,"47":5.8750,"48":6.00,"49":6.1250,"50":6.2500,"51":6.3750,"52":6.5000,"53":6.6250,"54":6.7500,"55":6.8750,"56":7.0000,"57":7.1250,"58":7.2500,"59":7.3750,"60":7.5000,"61":7.6250,"62":7.7500,"63":7.8750,"64":8.0000,"65":8.1250,"66":8.2500,"67":8.3750,"68":8.5000,"69":8.6250,"70":8.7500,"71":8.8750,"72":9.00,"73":9.1250,"74":9.2500,"75":9.3750,"76":9.5000,"77":9.6250,"78":9.7500,"79":9.8750,"80":10.000},
	    "4":{"6":1.00,"7":1.16665,"8":1.33335,"9":1.500,"10":1.66650,"11":1.83350,"12":2.0,"13":2.1667,"14":2.3333,"15":2.5000,"16":2.6667,"17":2.8333,"18":3.0000,"19":3.1667,"20":3.3330,"21":3.5000,"22":3.6670,"23":3.8330,"24":4,"25":4.1670,"26":4.3330,"27":4.5000,"28":4.6670,"29":4.8330,"30":5.0000,"31":5.1670,"32":5.3330,"33":5.5000,"34":5.6670,"35":5.8330,"36":6.0000,"37":6.1670,"38":6.3330,"39":6.5000,"40":6.6670,"41":6.8330,"42":7.0000,"43":7.1670,"44":7.3330,"45":7.5000,"46":7.6670,"47":7.8330,"48":8.00,"49":8.1670,"50":8.3330,"51":8.5000,"52":8.6670,"53":8.8330,"54":9.0000,"55":9.1670,"56":9.3330,"57":9.5000,"58":9.6670,"59":9.8330,"60":10.000,"61":10.167,"62":10.333,"63":10.500,"64":10.667,"65":10.833,"66":11.000,"67":11.167,"68":11.333,"69":11.500,"70":11.667,"71":11.833,"72":12.0,"73":12.167,"74":12.333,"75":12.500,"76":12.667,"77":12.833,"78":13.000,"79":13.167,"80":13.333},
	    "5":{"6":1.25,"7":1.45835,"8":1.66650,"9":1.875,"10":2.08350,"11":2.29150,"12":2.5,"13":2.7083,"14":2.9167,"15":3.1250,"16":3.3330,"17":3.5420,"18":3.7500,"19":3.9580,"20":4.1670,"21":4.3750,"22":4.5830,"23":4.7920,"24":5,"25":5.2080,"26":5.4170,"27":5.6250,"28":5.8330,"29":6.0420,"30":6.2500,"31":6.4580,"32":6.6670,"33":6.8750,"34":7.0830,"35":7.2920,"36":7.5000,"37":7.7080,"38":7.9170,"39":8.1250,"40":8.3330,"41":8.5420,"42":8.7500,"43":8.9580,"44":9.1670,"45":9.3750,"46":9.5830,"47":9.7920,"48":10.0,"49":10.208,"50":10.417,"51":10.625,"52":10.833,"53":11.042,"54":11.250,"55":11.458,"56":11.667,"57":11.875,"58":12.083,"59":12.292,"60":12.500,"61":12.708,"62":12.917,"63":13.125,"64":13.333,"65":13.542,"66":13.750,"67":13.958,"68":14.167,"69":14.375,"70":14.583,"71":14.792,"72":15.0,"73":15.208,"74":15.417,"75":15.625,"76":15.833,"77":16.042,"78":16.250,"79":16.458,"80":16.667},
	    "6":{"6":1.50,"7":1.75000,"8":2.00000,"9":2.250,"10":2.50000,"11":2.75000,"12":3.0,"13":3.2500,"14":3.5000,"15":3.7500,"16":4.0000,"17":4.2500,"18":4.5000,"19":4.7500,"20":5.0000,"21":5.2500,"22":5.5000,"23":5.7500,"24":6,"25":6.2500,"26":6.5000,"27":6.7500,"28":7.0000,"29":7.2500,"30":7.5000,"31":7.7500,"32":8.0000,"33":8.2500,"34":8.5000,"35":8.7500,"36":9.0000,"37":9.2500,"38":9.5000,"39":9.7500,"40":10.000,"41":10.250,"42":10.500,"43":10.750,"44":11.000,"45":11.250,"46":11.500,"47":11.750,"48":12.0,"49":12.250,"50":12.500,"51":12.750,"52":13.000,"53":13.250,"54":13.500,"55":13.750,"56":14.000,"57":14.250,"58":14.500,"59":14.750,"60":15.000,"61":15.250,"62":15.500,"63":15.750,"64":16.000,"65":16.250,"66":16.500,"67":16.750,"68":17.000,"69":17.250,"70":17.500,"71":17.750,"72":18.0,"73":18.250,"74":18.500,"75":18.750,"76":19.000,"77":19.250,"78":19.500,"79":19.750,"80":20.000}
	};
    var bowsScale = {
        "1":{"6":0.000,"7":0.050,"8":0.10,"9":0.100,"10":0.100,"11":0.100,"12":0.00,"13":0.00,"14":0.10,"15":0.15,"16":0.20,"17":0.20,"18":0.20,"19":0.20,"20":0.20,"21":0.20,"22":0.20,"23":0.20,"24":0.20,"25":0.20,"26":0.20,"27":0.20,"28":0.20,"29":0.20,"30":0.20,"31":0.20,"32":0.25,"33":0.25,"34":0.25,"35":0.25,"36":0.30,"37":0.30,"38":0.30,"39":0.30,"40":0.35,"41":0.35,"42":0.35,"43":0.35,"44":0.40,"45":0.45,"46":0.50,"47":0.55,"48":0.60,"49":0.60,"50":0.60,"51":0.60,"52":0.60,"53":0.60,"54":0.60,"55":0.60,"56":0.60,"57":0.60,"58":0.60,"59":0.60,"60":0.60,"61":0.60,"62":0.60,"63":0.60,"64":0.60,"65":0.60,"66":0.65,"67":0.65,"68":0.65,"69":0.65,"70":0.70,"71":0.75,"72":0.80,"73":0.80,"74":0.80,"75":0.80,"76":0.80,"77":0.80,"78":0.80,"79":0.80,"80":0.80},
        "2":{"6":0.050,"7":0.050,"8":0.10,"9":0.100,"10":0.100,"11":0.125,"12":0.10,"13":0.10,"14":0.10,"15":0.10,"16":0.20,"17":0.20,"18":0.20,"19":0.20,"20":0.20,"21":0.25,"22":0.25,"23":0.25,"24":0.30,"25":0.30,"26":0.30,"27":0.30,"28":0.35,"29":0.35,"30":0.40,"31":0.40,"32":0.40,"33":0.45,"34":0.45,"35":0.45,"36":0.45,"37":0.50,"38":0.50,"39":0.55,"40":0.55,"41":0.55,"42":0.60,"43":0.65,"44":0.70,"45":0.75,"46":0.75,"47":0.80,"48":0.80,"49":0.80,"50":0.80,"51":0.80,"52":0.85,"53":0.85,"54":0.85,"55":0.85,"56":0.85,"57":0.85,"58":0.85,"59":0.85,"60":0.85,"61":0.90,"62":0.95,"63":0.95,"64":0.95,"65":0.95,"66":1.00,"67":1.05,"68":1.10,"69":1.15,"70":1.20,"71":1.20,"72":1.20,"73":1.20,"74":1.20,"75":1.20,"76":1.20,"77":1.20,"78":1.20,"79":1.20,"80":1.25},
        "3":{"6":0.100,"7":0.125,"8":0.15,"9":0.200,"10":0.225,"11":0.250,"12":0.20,"13":0.20,"14":0.25,"15":0.25,"16":0.30,"17":0.35,"18":0.40,"19":0.45,"20":0.45,"21":0.45,"22":0.50,"23":0.50,"24":0.50,"25":0.55,"26":0.55,"27":0.60,"28":0.65,"29":0.70,"30":0.75,"31":0.80,"32":0.80,"33":0.80,"34":0.85,"35":0.85,"36":0.90,"37":0.90,"38":0.90,"39":0.90,"40":0.90,"41":0.90,"42":0.95,"43":1.00,"44":1.05,"45":1.10,"46":1.15,"47":1.15,"48":1.20,"49":1.25,"50":1.25,"51":1.30,"52":1.30,"53":1.30,"54":1.30,"55":1.30,"56":1.30,"57":1.35,"58":1.40,"59":1.40,"60":1.40,"61":1.45,"62":1.45,"63":1.50,"64":1.50,"65":1.55,"66":1.55,"67":1.60,"68":1.65,"69":1.70,"70":1.75,"71":1.80,"72":1.85,"73":1.90,"74":1.90,"75":1.90,"76":1.90,"77":1.90,"78":1.90,"79":1.90,"80":1.95},
        "4":{"6":0.175,"7":0.200,"8":0.25,"9":0.300,"10":0.350,"11":0.375,"12":0.35,"13":0.35,"14":0.40,"15":0.45,"16":0.50,"17":0.55,"18":0.60,"19":0.65,"20":0.70,"21":0.70,"22":0.75,"23":0.75,"24":0.80,"25":0.85,"26":0.85,"27":0.90,"28":0.95,"29":1.00,"30":1.05,"31":1.10,"32":1.15,"33":1.20,"34":1.25,"35":1.25,"36":1.35,"37":1.35,"38":1.35,"39":1.35,"40":1.35,"41":1.40,"42":1.45,"43":1.50,"44":1.55,"45":1.60,"46":1.65,"47":1.70,"48":1.75,"49":1.80,"50":1.85,"51":1.90,"52":1.90,"53":1.90,"54":1.90,"55":1.95,"56":2.00,"57":2.05,"58":2.10,"59":2.15,"60":2.20,"61":2.25,"62":2.30,"63":2.35,"64":2.40,"65":2.40,"66":2.40,"67":2.40,"68":2.40,"69":2.45,"70":2.50,"71":2.55,"72":2.60,"73":2.65,"74":2.70,"75":2.75,"76":2.85,"77":2.85,"78":2.85,"79":2.85,"80":2.85},
        "5":{"6":0.250,"7":0.300,"8":0.35,"9":0.425,"10":0.475,"11":0.525,"12":0.50,"13":0.55,"14":0.60,"15":0.65,"16":0.70,"17":0.75,"18":0.85,"19":0.90,"20":0.95,"21":1.00,"22":1.05,"23":1.10,"24":1.15,"25":1.20,"26":1.25,"27":1.30,"28":1.35,"29":1.40,"30":1.45,"31":1.50,"32":1.55,"33":1.60,"34":1.65,"35":1.70,"36":1.75,"37":1.80,"38":1.85,"39":1.90,"40":1.95,"41":2.00,"42":2.05,"43":2.10,"44":2.15,"45":2.25,"46":2.30,"47":2.35,"48":2.40,"49":2.45,"50":2.50,"51":2.55,"52":2.60,"53":2.65,"54":2.70,"55":2.75,"56":2.85,"57":2.90,"58":2.95,"59":3.30,"60":3.05,"61":3.10,"62":3.15,"63":3.20,"64":3.25,"65":3.30,"66":3.35,"67":3.40,"68":3.45,"69":3.50,"70":3.55,"71":3.60,"72":3.65,"73":3.70,"74":3.75,"75":3.80,"76":3.85,"77":3.90,"78":3.95,"79":4.00,"80":4.05},
        "6":{"6":0.350,"7":0.450,"8":0.50,"9":0.575,"10":0.650,"11":0.700,"12":0.70,"13":0.80,"14":0.90,"15":0.95,"16":1.00,"17":1.05,"18":1.15,"19":1.20,"20":1.30,"21":1.35,"22":1.40,"23":1.50,"24":1.60,"25":1.65,"26":1.70,"27":1.75,"28":1.85,"29":1.90,"30":2.00,"31":2.05,"32":2.10,"33":2.20,"34":2.30,"35":2.40,"36":2.50,"37":2.55,"38":2.60,"39":2.65,"40":2.70,"41":2.75,"42":2.80,"43":2.90,"44":2.95,"45":3.00,"46":3.10,"47":3.20,"48":3.30,"49":3.40,"50":3.50,"51":3.50,"52":3.50,"53":3.60,"54":3.70,"55":3.80,"56":3.80,"57":3.90,"58":4.00,"59":4.10,"60":4.20,"61":4.20,"62":4.30,"63":4.35,"64":4.40,"65":4.45,"66":4.50,"67":4.55,"68":4.60,"69":4.70,"70":4.80,"71":4.90,"72":5.00,"73":5.10,"74":5.15,"75":5.20,"76":5.25,"77":5.30,"78":5.35,"79":5.40,"80":5.45}
    };

	var posBow2 = {
		"1":{"6": 5.896,"7": 6.896,"8": 7.896,"9": 8.896,"10": 9.896,"11": 10.896,"12": 11.896,"13": 12.896, "14":13.896, "15":14.896, "16":15.896, "17":16.896, "18":17.896, "19":18.896, "20":19.896, "21":20.896, "22":21.896, "23":22.896, "24":23.896},
		"2":{"6": 5.896,"7": 6.896,"8": 7.896,"9": 8.896,"10": 9.896,"11": 10.896,"12": 11.896,"13": 12.896, "14":13.896, "15":14.896, "16":15.896, "17":16.896, "18":17.896, "19":18.896, "20":19.896, "21":20.896, "22":21.896, "23":22.896, "24":23.896},
		"3":{"6": 5.896,"7": 6.896,"8": 7.896,"9": 8.896,"10": 9.896,"11": 10.896,"12": 11.896,"13": 12.896, "14":13.896, "15":14.896, "16":15.896, "17":16.896, "18":17.896, "19":18.896, "20":19.896, "21":20.896, "22":21.896, "23":22.896, "24":23.896},
		"4":{"6": 5.899,"7": 6.899,"8": 7.899,"9": 8.899,"10": 9.899,"11": 10.899,"12": 11.899,"13": 12.899, "14":13.899, "15":14.899, "16":15.899, "17":16.899, "18":17.899, "19":18.899, "20":19.899, "21":20.899, "22":21.899, "23":22.899, "24":23.899},
		"5":{"6": 5.899,"7": 6.899,"8": 7.899,"9": 8.899,"10": 9.899,"11": 10.899,"12": 11.899,"13": 12.899, "14":13.899, "15":14.899, "16":15.899, "17":16.899, "18":17.899, "19":18.899, "20":19.899, "21":20.899, "22":21.899, "23":22.899, "24":23.899},
		"6":{"6": 5.899,"7": 6.899,"8": 7.899,"9": 8.899,"10": 9.899,"11": 10.899,"12": 11.899,"13": 12.899, "14":13.899, "15":14.899, "16":15.899, "17":16.899, "18":17.899, "19":18.899, "20":19.899, "21":20.899, "22":21.899, "23":22.899, "24":23.899},
		// "1":{"6": 5.899,"7": 6.899,"8": 7.899,"9": 8.899,"10": 9.899,"11": 10.899,"12": 11.899,"13": 12.899, "14":13.899, "15":14.899, "16":15.899, "17":16.899, "18":17.899, "19":18.899, "20":19.899, "21":20.899, "22":21.899, "23":22.899, "24":23.899},
	}
    var widthBowR = {
      // "1": {"6": 0.38, "7":0.48, "8":0.60, "9":0.70, "10":0.81, "11":0.93,"12": 1.03,"13": 1.15, "14":1.26, "15":1.37, "16":1.49, "17":1.6, "18":1.7, "19":1.8, "20":1.9, "21":2.01, "22":2.12, "23":2.24, "24":1.36},
    	"1": {"6": 0.0, "7":0.0, "8":0.05, "9":0.1, "10":0.13, "11":0.14,"12": 0.18,"13": 0.21, "14":0.25, "15":0.29, "16":0.33, "17":0.36, "18":0.39, "19":0.42, "20":0.45, "21":0.49, "22":0.52, "23":0.57, "24":0.6},
    	"2": {"6": 0.0, "7":0.0, "8":0.05, "9":0.1, "10":0.13, "11":0.14,"12": 0.18,"13": 0.21, "14":0.25, "15":0.29, "16":0.33, "17":0.36, "18":0.39, "19":0.42, "20":0.45, "21":0.49, "22":0.52, "23":0.57, "24":0.6},
    	"3": {"6": 0.1, "7":0.15, "8":0.2, "9":0.25, "10":0.3, "11":0.35,"12": 0.4,"13": 0.45, "14":0.5, "15":0.56, "16":0.61, "17":0.66, "18":0.72, "19":0.77, "20":0.82, "21":0.87, "22":0.92, "23":0.97, "24":1.02},
    	"4": {"6": 0.26, "7":0.33, "8":0.4, "9":0.47, "10":0.54, "11":0.61,"12": 0.68,"13": 0.75, "14":0.82, "15":0.9, "16":0.98, "17":1.05, "18":1.13, "19":1.2, "20":1.29, "21":1.37, "22":1.45, "23":1.5, "24":1.6},
    	"5": {"6": 0.38, "7":0.48, "8":0.60, "9":0.70, "10":0.81, "11":0.93,"12": 1.03,"13": 1.15, "14":1.26, "15":1.37, "16":1.49, "17":1.6, "18":1.7, "19":1.8, "20":1.9, "21":2.01, "22":2.12, "23":2.24, "24":1.36},
      "6": {"6": 0.68, "7":0.78, "8":0.90, "9":1.10, "10":1.31, "11":1.43,"12": 1.53,"13": 1.65, "14":1.76, "15":1.87, "16":2.19, "17":2.2, "18":2.3, "19":2.5, "20":2.6, "21":2.71, "22":2.82, "23":3.04, "24":3.26},
    }
	var rotTrim2 = {
        "1":{"6": 0.415, "7":0.415, "8":0.415, "9":0.415, "10":0.415, "11":0.415,"12":0.415,"13": 0.415, "14":0.415, "15":0.415, "16":0.415, "17":0.415, "18":0.415, "19":0.415, "20":0.415, "21":0.415, "22":0.415, "23":0.415, "24":0.415},
        "2":{"6": 0.415, "7":0.415, "8":0.415, "9":0.415, "10":0.415, "11":0.415,"12":0.415,"13": 0.415, "14":0.415, "15":0.415, "16":0.415, "17":0.415, "18":0.415, "19":0.415, "20":0.415, "21":0.415, "22":0.415, "23":0.415, "24":0.415},
        "3":{"6": 0.5, "7":0.5, "8":0.5, "9":0.5, "10":0.5, "11":0.5,"12":0.5,"13": 0.5, "14":0.5, "15":0.5, "16":0.5, "17":0.5, "18":0.5, "19":0.5, "20":0.5, "21":0.5, "22":0.5, "23":0.5, "24":0.5},
        "4":{"6": 0.58, "7":0.58, "8":0.58, "9":0.58, "10":0.58, "11":0.58,"12":0.58,"13": 0.58, "14":0.58, "15":0.58, "16":0.58, "17":0.58, "18":0.58, "19":0.58, "20":0.58, "21":0.58, "22":0.58, "23":0.58, "24":0.58},
        "5":{"6": 0.65, "7":0.65, "8":0.65, "9":0.65, "10":0.65, "11":0.65,"12":0.65,"13": 0.65, "14":0.65, "15":0.65, "16":0.65, "17":0.65, "18":0.65, "19":0.65, "20":0.65, "21":0.65, "22":0.65, "23":0.7, "24":0.65},
        "6":{"6": 0.65, "7":0.65, "8":0.65, "9":0.65, "10":0.65, "11":0.65,"12":0.65,"13": 0.65, "14":0.65, "15":0.65, "16":0.65, "17":0.65, "18":0.65, "19":0.65, "20":0.65, "21":0.65, "22":0.65, "23":0.7, "24":0.65},
        // "1":{"6": 0.65, "7":0.65, "8":0.65, "9":0.65, "10":0.65, "11":0.65,"12":0.65,"13": 0.65, "14":0.65, "15":0.65, "16":0.65, "17":0.65, "18":0.65, "19":0.65, "20":0.65, "21":0.65, "22":0.65, "23":0.7, "24":0.65},
	}
    //scale and position of Bow2 acording to roof pitch
	var scaleBow2 = {"1":0.23, "2":0.23, "3":0.23, "4":0.22, "5":0.22,"6":0.22};

    //Variable For Adjust Rotation With Roof Pitch	
    var bowsRotation = { "1":(params.p_r_s != 1 && params.p_r_p != 1) ? 0.08314 : 0.082, "2":0.16515,"3":0.24500,"4":0.32175,"5":0.39480,"6":(params.p_r_s != 1)?0.46365:0.46635,};

    //rotation and position of Bow1 acording to roof pitch
	var rotBow1 = {"1":0.415,"3":0.5 , "2":0.415, "4":0.6, "5":0.65,"6":0.65};
	var posBow1 = {"1":0.055,"3":0.05, "2":0.055,"4":0.044,"5":0.04,"6":0.04};
    var scaleTrim2 ={"1":2.05,"2":2.05, "3":1.9, "4":1.9, "5":1.9, "6":1.9}
    var posCorner = {"1":0.76,"2":0.68, "3":0.605, "4":0.51, "5":0.43, "6":0.35}
	var posTrim2 = {"1":0.17,"2":0.17,"3":0.17 ,  "4":0.174, "5":0.174, "6":0.174}
 
    var legDistance = 5;

    // Bows Geometry And Material
    var bowGeometry = new THREE.BoxGeometry(0.98,0.6+0.2,0.2+0.1);
    var bowMaterial = new THREE.MeshBasicMaterial({color:0x0E6655,side:THREE.DoubleSide});
    // let rHeight = (params.b_l_t_r_p == 2)?(params.lean_p_h) : (params.o_v_h_n_g==true)?(params.lean_p_h-0.06):(params.lean_p_h-0.02)

    let slope = { "1":{"s":12,"r":0.19,"h":0.03} , "2":{"s":6,"r":0.25,"h":0.03} , "3":{"s":4,"r":0.245,"h":0.01}, "4":{"s":3.0,"r":0.32,"h":0.04}, "5":{"s":2.406,"r":0.395,"h":0.08}, "6":{"s":2.006,"r":0.5,"h":0.13}  }
    const wallDistance = (params.p_d <= 150)?0.0:0.08;
    if ("undefined" != typeof const_var.scene.getObjectByName("LeftLeanRoof")) const_var.scene.remove(const_var.scene.getObjectByName("LeftLeanRoof"));
 
    const LeftLeanRoof = new THREE.Group();
    LeftLeanRoof.name = "LeftLeanRoof";
    const_var.scene.add(LeftLeanRoof);
    // LeftLeanRoof.visible = (params.isShowCenter == true)? true :false
    let overHangSide = (params.o_v_h_n_g==true) ? Number(const_var.isOverhang.side.size) : 0.5;
    let overHangEnd = (params.o_v_h_n_g_e==true) ? Number(const_var.isOverhang.end.size) : 0.5;
    let gap = 0.07
    let rHeight = params.lean_p_h + gap - ((params.b_l_t_r_p/12)*overHangSide);

if(params.add_left_lean){

    /* Left Lean To Roof */
	if (const_var.b_t_M_L_t_L.getObjectByName("lRoof")!=undefined) {
        var lRoof = const_var.b_t_M_L_t_L.getObjectByName("lRoof").clone();

        // let quad_vertices =
        // [
        // //left front
        // -0.5,  -0.00, 0.5,
        // //right front
        // 0.0,  1.0, 0.5,
        // //right back
        // 0.0, 1.0, -0.5,
        // //left back
        // -0.5, -0.00, -0.5,
        // ];

        if(params.p_r_s==1){

          params.b_l_t_r_pH = roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w]+0.03;

          let quad_vertices =
          [
          //left front
          -(params.p_w/2)-params.lean_p_w+0.168,  params.lean_p_h+0.071, params.lean_p_d/2+0.25,
          //right front
          -(params.p_w/2),  params.lean_p_h+roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w]+0.03, params.lean_p_d/2+0.25,
          //right back
          -(params.p_w/2),  params.lean_p_h+roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w]+0.03, params.lean_p_d/-2-0.25,
          //left back
          -(params.p_w/2)-params.lean_p_w+0.168, params.lean_p_h+0.071, params.lean_p_d/-2-0.25,
          ];

          let vertices = new Float32Array( quad_vertices );
          lRoof.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
  

        }else{

          params.b_l_t_r_pH = roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w]+0.06;

        if(params.add_left_front_lean_porch == true || params.add_left_back_lean_porch == true ){
          let endOverhangBack = 0
          let endOverhangFront = 0
          if(params.add_left_front_lean_porch == true && params.add_left_back_lean_porch == false) endOverhangBack = (params.o_v_h_n_g_e==true) ? Number(const_var.isOverhang.end.size) : 0.5
          if(params.add_left_front_lean_porch == false && params.add_left_back_lean_porch == true) endOverhangFront = (params.o_v_h_n_g_e==true) ? Number(const_var.isOverhang.end.size) : 0.5

          let quad_vertices =
          [
          //left front
          -(params.p_w/2)-params.lean_p_w-overHangSide,  rHeight, params.lean_p_d/2 + endOverhangFront,
          //right front
          -(params.p_w/2)- 0.02,  params.lean_p_h+roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w]+0.06, params.lean_p_d/2 + endOverhangFront,
          //right back
          -(params.p_w/2)- 0.02,  params.lean_p_h+roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w]+0.06, params.lean_p_d/-2 - endOverhangBack,
          //left back
          -(params.p_w/2)-params.lean_p_w-overHangSide, rHeight, params.lean_p_d/-2 - endOverhangBack,
          ];
  
          let vertices = new Float32Array( quad_vertices );
          lRoof.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

        }else{

        let quad_vertices =
        [
        //left front
        -(params.p_w/2)-params.lean_p_w-overHangSide,  rHeight, params.lean_p_d/2+overHangEnd,
        //right front
        -(params.p_w/2)- 0.02,  params.lean_p_h+roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w]+0.06, params.lean_p_d/2+overHangEnd,
        //right back
        -(params.p_w/2)- 0.02,  params.lean_p_h+roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w]+0.06, params.lean_p_d/-2-overHangEnd,
        //left back
        -(params.p_w/2)-params.lean_p_w-overHangSide, rHeight, params.lean_p_d/-2-overHangEnd,
        ];

        let vertices = new Float32Array( quad_vertices );
        lRoof.geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
        }
      }
        var roofImg = verticalTexture;
        if(params.p_r_s=="3") {
          roofImg = verticalTexture;
        } else {
          roofImg = horizontalTexture;
        }
        var lRoofloader = new THREE.TextureLoader();
        var lRoofTexture = lRoofloader.load(process.env.REACT_APP_BASE_URL+roofImg, function(texture1) {
           lRoofTexture.wrapS = THREE.RepeatWrapping;
           lRoofTexture.wrapT = THREE.RepeatWrapping;
           lRoof.material.map = texture1;
           lRoof.material.bumpMap = texture1;
           lRoof.material.bumpScale = 0.02
           lRoof.material.metalness = 1
           lRoof.material.roughness = 0.8
           lRoof.material.anisotropy = 10;
           //lRoof.material.envMap = texture1;
         lRoof.material.emissiveMap = texture1;
         lRoof.material.emissiveIntensity = 1;	
         lRoof.material.shininess = 10
           if (params.p_r_s=="3") {
            lRoof.material.map.rotation = Math.PI/2;
            lRoof.material.map.repeat.set(Math.round(((params.lean_p_d/2)+(params.lean_p_d/2/3))*2)-0.35,1.8);
          } else {
            lRoof.material.map.rotation = -Math.PI/2;
            lRoof.material.map.repeat.set(1,Math.round((2*params.lean_p_w/3)*2));
          }
          lRoof.material.needsUpdate = true;
                       
          let innerWall = LeftLeanRoof.getObjectByName("double_lRoof")
          innerWall.material.map = texture1;
          innerWall.material.map.wrapS = THREE.RepeatWrapping;
          innerWall.material.map.wrapT = THREE.RepeatWrapping;
          innerWall.material.map.offset.x = params.p_w;
          innerWall.material.map.offset.y = params.p_w;
          innerWall.material.map.rotation = lRoof.material.map.rotation;
          innerWall.material.map.repeat.set(lRoof.material.map.repeat.x,lRoof.material.map.repeat.y);
          innerWall.material.color.set(0xFFFFFF)
          innerWall.material.needsUpdate = true;
    
        });
        var rCalor = params.p_r_c.replace("#","0x");   
        lRoof.visible = (params.add_left_lean == false || (( params.p_h == params.lean_p_h + (params.b_l_t_r_p/12)*(params.lean_p_w)) && params.p_r_s != "1")) ? false : true; //(params.p_r_s == "1")?false:params.add_left_lean;
        lRoof.position.y = 0.03+wallDistance
        lRoof.material.color.setHex( rCalor );

          /*code for transperant roof */
         if(params.is_translusant==true){
          lRoof.material.transparent = true;
          lRoof.material.opacity = 0.1;
          // lRoof.material.opacity =0.3;
          lRoof.material.alphaTest =false;
          lRoof.material.clearAlpha =1;
        } else {
            lRoof.material.transparent = true;
            lRoof.material.opacity = 1;
            lRoof.material.alphaTest =0;
            lRoof.material.clearAlpha =null;
        }    
        LeftLeanRoof.add(lRoof);
        // lRoof.scale.set((params.p_r_s == "1") ? 2*params.lean_p_w -0.17: 2*params.lean_p_w+0.5, roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w], params.lean_p_d+0.5);
        // lRoof.position.set(params.p_w/-2,params.lean_p_h+0.03 ,0);
        // lRoof.rotation.z = 0.0085;
        // if (params.p_r_s == "1") {
        //   lRoof.rotation.z = -0.0015;//anand
        // }
       
    }

    //Left Lean To double roof
    if (LeftLeanRoof.getObjectByName("double_lRoof")==undefined) {
          
    let lRoofClone = LeftLeanRoof.getObjectByName("lRoof");
  
      if(LeftLeanRoof.getObjectByName("lRoof") != undefined){
      let double_lRoof = lRoofClone.clone();
      
      let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.FrontSide,color: 0xADADAD });
      double_lRoof = new THREE.Mesh(double_lRoof.geometry,leftDoubleMaterial);
      double_lRoof.name = "double_lRoof"
      double_lRoof.visible = (params.is_translusant==true)? false : lRoofClone.visible
      double_lRoof.scale.set(lRoofClone.scale.x , lRoofClone.scale.y , lRoofClone.scale.z);
      double_lRoof.position.set(lRoofClone.position.x , lRoofClone.position.y -0.01, lRoofClone.position.z);
      double_lRoof.rotation.set(lRoofClone.rotation.x , lRoofClone.rotation.y , lRoofClone.rotation.z)
      
        LeftLeanRoof.add(double_lRoof);
      }
    }

if(params.p_r_s=="1") {  
if (const_var.b_t_M_L_t_L.getObjectByName("leanToRegularRoofL")!=undefined) {
  var cubeTLL = const_var.b_t_M_L_t_L.getObjectByName("leanToRegularRoofL").clone();
    var verticesT = [
    { pos: [  + 0.25,  0.0,    0.5], norm: [ -1,  0,  0], uv: [0, 0], }, // 4 uv: [0, 0],
    { pos: [  + 0.25,  0.0,   -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, // 5 uv: [1, 0],
    { pos: [  + 0.13, -0.005,  0.5], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    { pos: [  + 0.13, -0.005, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
    
    { pos: [  + 0.13, -0.005,  0.5], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
    { pos: [  + 0.13, -0.005, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
    { pos: [  + 0.07, -0.015,  0.5], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    { pos: [  + 0.07, -0.015, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
    
    { pos: [  + 0.07, -0.015,  0.5], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
    { pos: [  + 0.07, -0.015, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
    { pos: [  + 0.05, -0.025,  0.5], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    { pos: [  + 0.05, -0.025, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7
    
    { pos: [  + 0.05, -0.025,  0.5], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 1], 6
    { pos: [  + 0.05, -0.025, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 1], 7
    { pos: [  + 0.02, -0.045,  0.5], norm: [ -1,  0,  0], uv: [0, 0.008], }, //uv: [0, 1], 6
    { pos: [  + 0.02, -0.045, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, //uv: [1, 1], 7

    { pos: [  + 0.00, -0.075,  0.5], norm: [ -1,  0,  0], uv: [0, 0], }, //uv: [0, 0], 4
    { pos: [  + 0.00, -0.075, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0], }, //uv: [1, 0], 5
    { pos: [  + 0.02, -0.045,  0.5], norm: [ -1,  0,  0], uv: [0, 0.008], }, // 6 uv: [0, 1],
    { pos: [  + 0.02, -0.045, -0.5], norm: [ -1,  0,  0], uv: [0.008, 0.008], }, // 7 uv: [1, 1],
    
  ];
  var positionsT = [];
  var normalsT = [];
  var uvsT = [];
  for (var vertex of verticesT) {
    positionsT.push(...vertex.pos);
    normalsT.push(...vertex.norm);
    uvsT.push(...vertex.uv);
  }

  var geometryT = new THREE.BufferGeometry();
  var positionNumComponents = 3;
  var normalNumComponents = 3;
  var uvNumComponents = 2;
      geometryT.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positionsT), positionNumComponents));
      geometryT.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normalsT), normalNumComponents));
      geometryT.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvsT), uvNumComponents));

  var roofImg = verticalTexture;
    if (params.p_r_s=="1") {
      roofImg = verticalTexture;
    } else  {
      roofImg = horizontalTexture;
    }

    cubeTLL.name = "leanToRegularRoofCurveL";
    cubeTLL.scale.set(0.99855,roofMiddleHeight[params.b_l_t_r_p][params.lean_p_w],params.lean_p_d+0.37);
    cubeTLL.position.set(-params.lean_p_w -(params.p_w/2)- 0.08,params.lean_p_h + 0.09+wallDistance,0);
    cubeTLL.scale.y = 7;
    cubeTLL.rotation.z = 0.045;

    var lrRoofloader = new THREE.TextureLoader();
    var textureT = lrRoofloader.load(process.env.REACT_APP_BASE_URL+roofImg, function(texture1) {
      textureT.anisotropy = Math.min(const_var.renderer.capabilities.getMaxAnisotropy(), 15);
      textureT.wrapS = THREE.RepeatWrapping;
      textureT.wrapT = THREE.RepeatWrapping;
      cubeTLL.material.map = texture1;
      cubeTLL.material.bumpMap = texture1;
      cubeTLL.material.bumpScale = 0.02
      cubeTLL.material.metalness = 1
      cubeTLL.material.roughness = 0.8
      cubeTLL.material.anisotropy = 10;
      cubeTLL.material.shininess = 10
      //cubeTLL.material.envMap = texture1;
    cubeTLL.material.emissiveMap = texture1;
    cubeTLL.material.emissiveIntensity = 1;	
    if (params.p_r_s=="1") {
    cubeTLL.material.map.rotation = -Math.PI/2;
    cubeTLL.material.map.repeat.set(24,1);
    } else {
    cubeTLL.material.map.rotation = Math.PI/2;
    cubeTLL.material.map.repeat.set(1,(params.p_w/3)*2);
    }
                           
    let innerWall = LeftLeanRoof.getObjectByName("double_leanToRegularRoofCurveL")
    innerWall.material.map = texture1;
    innerWall.material.map.wrapS = THREE.RepeatWrapping;
    innerWall.material.map.wrapT = THREE.RepeatWrapping;
    innerWall.material.map.offset.x = params.p_w;
    innerWall.material.map.rotation = cubeTLL.material.map.rotation;
    innerWall.material.map.repeat.set(cubeTLL.material.map.repeat.x,cubeTLL.material.map.repeat.y);
    innerWall.material.color.set(0xFFFFFF)
    innerWall.material.needsUpdate = true;

    });

    var curvedRoofColor = params.p_r_c.replace("#","0x");
    cubeTLL.material.color.setHex( curvedRoofColor );
    cubeTLL.visible = (params.add_left_lean && params.p_r_s=="1")?true:false;

      /*code for transperant roof */
     if(params.is_translusant==true){
      cubeTLL.material.transparent = true;
      cubeTLL.material.opacity = 0.1;
      // cubeTLL.material.opacity =0.3;
      cubeTLL.material.alphaTest =false;
      cubeTLL.material.clearAlpha =1;
    } else {
        cubeTLL.material.transparent = true;
        cubeTLL.material.opacity = 1;
        cubeTLL.material.alphaTest =0;
        cubeTLL.material.clearAlpha =null;
    }    

    LeftLeanRoof.add( cubeTLL );
}

    //Left Lean To Regular roof curve
    if (LeftLeanRoof.getObjectByName("double_leanToRegularRoofCurveL")==undefined) {
          
      let leanToRegularRoofLClone = LeftLeanRoof.getObjectByName("leanToRegularRoofCurveL");
    
        if(LeftLeanRoof.getObjectByName("leanToRegularRoofCurveL") != undefined){
        let double_leanToRegularRoofCurveL = leanToRegularRoofLClone.clone();
        
        let leftDoubleMaterial= new THREE.MeshBasicMaterial({  side: THREE.DoubleSide,color: 0xADADAD });
        double_leanToRegularRoofCurveL = new THREE.Mesh(double_leanToRegularRoofCurveL.geometry,leftDoubleMaterial);
        double_leanToRegularRoofCurveL.name = "double_leanToRegularRoofCurveL"
        double_leanToRegularRoofCurveL.visible = (params.is_translusant==true)? false : leanToRegularRoofLClone.visible
        double_leanToRegularRoofCurveL.scale.set(leanToRegularRoofLClone.scale.x , leanToRegularRoofLClone.scale.y , leanToRegularRoofLClone.scale.z);
        double_leanToRegularRoofCurveL.position.set(leanToRegularRoofLClone.position.x +0.007, leanToRegularRoofLClone.position.y -0.035 -wallDistance, leanToRegularRoofLClone.position.z);
        double_leanToRegularRoofCurveL.rotation.set(leanToRegularRoofLClone.rotation.x , leanToRegularRoofLClone.rotation.y , leanToRegularRoofLClone.rotation.z)
        
          LeftLeanRoof.add(double_leanToRegularRoofCurveL);
        }
      }

      // let leftLeanToRegularBow = const_var.b_t_M_L_t_L.getObjectByName("leftLeanToRegularBow").clone();
      // leftLeanToRegularBow.name = "leftLeanToRegularBow"+Math.round(j) + "x";
      // leftLeanToRegularBow.material = leftLeanToRegularBow.material.clone();

      // let leftLeanToRegularBowGeo = new THREE.Shape();
      // leftLeanToRegularBowGeo.moveTo((params.p_w/-2)-params.lean_p_w-0.02 , params.lean_p_h-0.6);
      // leftLeanToRegularBowGeo.quadraticCurveTo((params.p_w/-2)-params.lean_p_w,params.lean_p_h, (params.p_w/-2)-params.lean_p_w+0.5, params.lean_p_h+0.1);
      // leftLeanToRegularBowGeo.lineTo((params.p_w/-2), params.lean_p_h+((params.b_l_t_r_p/12)*params.lean_p_w));
      // leftLeanToRegularBowGeo.lineTo((params.p_w/-2), params.lean_p_h+((params.b_l_t_r_p/12)*params.lean_p_w)-0.2);
      // leftLeanToRegularBowGeo.lineTo((params.p_w/-2)-params.lean_p_w+0.5, params.lean_p_h-0.1);
      // leftLeanToRegularBowGeo.quadraticCurveTo((params.p_w/-2)-params.lean_p_w+0.15,params.lean_p_h-0.6+0.35, (params.p_w/-2)-params.lean_p_w+0.2-0.02, params.lean_p_h-0.6);
      // leftLeanToRegularBowGeo.closePath();
  
  
      // let extrudeSettingsLeftLeanToRegularBow = {
      //   depth: 0.2, 
      //   bevelEnabled: false,
      //   };
      //   let geometryLeftLeanToRegularBow = new THREE.ExtrudeGeometry(
      //     leftLeanToRegularBowGeo,
      //     extrudeSettingsLeftLeanToRegularBow
      //   );
      //   leftLeanToRegularBow.geometry = geometryLeftLeanToRegularBow
  
      //   leftLeanToRegularBow.position.z = i.toFixed(2)
      //   LeftLeanRoof.add(leftLeanToRegularBow);



}

if (params.p_r_s == "1" && params.p_r_p == '1') {

}
    
        var leanToPos = params.p_w/-2 - params.lean_p_w/2;
		var leanTohInc = roofMiddleHeight[params.b_l_t_r_p][2*params.lean_p_w]/2 - 0.1;

    if(params.p_r_s==3){
    let channelDis = ((params.lean_p_w)/3).toFixed(0)
    for(var i = 0.4;i<(params.lean_p_w); i+=((params.lean_p_w)/channelDis) )
    {	
        if (const_var.b_t_M_L.getObjectByName("lRoofHeadChannel")==undefined) {
            var lRoofHeadChannel = const_var.b_t_M_R.getObjectByName("lrRoofHeadChannel").clone();
            lRoofHeadChannel.name = "lRoofHeadChannel"+i
            lRoofHeadChannel.material = lRoofHeadChannel.material.clone();
            lRoofHeadChannel.position.x =  (params.p_w/-2)-i
            lRoofHeadChannel.scale.z =  params.lean_p_d/2
            if(params.add_left_front_lean_porch==true){
              lRoofHeadChannel.scale.z =  params.lean_p_d/2+i/2
              lRoofHeadChannel.position.z =  i/2
            }
            if(params.add_left_back_lean_porch==true){
              lRoofHeadChannel.scale.z =  params.lean_p_d/2+i/2
              lRoofHeadChannel.position.z =  -i/2
            }
            if(params.add_left_front_lean_porch==true && params.add_left_back_lean_porch==true){
              lRoofHeadChannel.scale.z =  params.lean_p_d/2+i
              lRoofHeadChannel.position.z =  0
            }
            lRoofHeadChannel.position.y = params.lean_p_h-0.13+roofMiddleHeight[params.b_l_t_r_p][params.lean_p_w*2]-(i/slope[params.b_l_t_r_p]["s"])-slope[params.b_l_t_r_p]["h"]-0.01+0.11
            lRoofHeadChannel.rotation.z = slope[params.b_l_t_r_p]["r"] 
            lRoofHeadChannel.visible = (params.singleSlope == true)?false:true;
            LeftLeanRoof.add(lRoofHeadChannel);
        }
    }
    }	


    let EqiDis;
    if(params.fourth_center_cost == true){
       if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
        {
            EqiDis = (params.oncenter_val_with_action!='')?((params.lean_p_d)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.lean_p_d)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0)
        }
    } else {
        if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
        {
            EqiDis = (params.oncenter_val_with_action!='')?((params.lean_p_d)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.lean_p_d)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0)    
        }
    }

        // for (var i = 0;i<(params.lean_p_d/2 - 2);i = i+legDistance) {
          for (let i = params.lean_p_d/2 -0.12, j = 0; i > (params.lean_p_d/-2 )-1; i = i - (params.lean_p_d / EqiDis ), j++) {
                    
            if( i < params.lean_p_d / -2 + 0.12 ) i = (params.lean_p_d /-2) + 0.12

          if (const_var.b_t_M_L_t_L.getObjectByName("leftLeanToBow")==undefined) {
              const leftLeanToBow = const_var.b_t_M_L_t_L.getObjectByName("leftLeanToFrontBow").clone();
              leftLeanToBow.name = "leftLeanToBow" + j + "x";
              leftLeanToBow.material = leftLeanToBow.material.clone();
              leftLeanToBow.scale.set(params.p_w/2,0.2,1);	
              leftLeanToBow.position.set(leanToPos,params.lean_p_h + leanTohInc + 0.03,i);	
              leftLeanToBow.rotation.z = bowsRotation[params.b_l_t_r_p];
              leftLeanToBow.scale.x = params.lean_p_w + bowsScale[params.b_l_t_r_p][2*params.lean_p_w];
              leftLeanToBow.visible = (params.p_r_s != "1")?true:false;
              LeftLeanRoof.add(leftLeanToBow);
          }
              
          if (const_var.b_t_M_L_t_L.getObjectByName("leftLeanToBowR")==undefined) {
            const leftLeanToBowR = const_var.b_t_M_L_t_L.getObjectByName("leftLeanToFrontBowR").clone();
            leftLeanToBowR.name = "leftLeanToBow" + j + "xR";
            leftLeanToBowR.material = leftLeanToBowR.material.clone();
            leftLeanToBowR.scale.set(params.p_w/2,0.2,1);	
            leftLeanToBowR.position.set(leanToPos+0.1,params.lean_p_h + leanTohInc + 0.05,i);	
            leftLeanToBowR.rotation.z = bowsRotation[params.b_l_t_r_p];
            leftLeanToBowR.scale.x = (params.lean_p_w +  widthBowR[params.b_l_t_r_p][params.lean_p_w]);
            leftLeanToBowR.visible = (params.p_r_s == "1")?true:false;
            LeftLeanRoof.add(leftLeanToBowR);
          }
          
          if (const_var.b_t_M_L_t_L.getObjectByName("leanToleftBow1")==undefined) {
            const leanToleftBow1 = const_var.b_t_M_L_t_L.getObjectByName("leanToleftFrontBow1").clone();
		        leanToleftBow1.name = "leftLeanToBow" + j + "xR1";
            leanToleftBow1.material = leanToleftBow1.material.clone();
		        leanToleftBow1.position.set((params.p_w/-2 - params.lean_p_w)+0.17,params.lean_p_h -posBow1[params.b_l_t_r_p],i);	
		        leanToleftBow1.rotation.z = rotBow1[params.b_l_t_r_p];
		        leanToleftBow1.scale.set(1.9,0.21,1);
		        leanToleftBow1.visible = (params.p_r_s == "1")?true:false; 
            LeftLeanRoof.add(leanToleftBow1);
          }
  
          if (const_var.b_t_M_L_t_L.getObjectByName("leanToleftBow2")==undefined) {
              const leanToleftBow2 = const_var.b_t_M_L_t_L.getObjectByName("leanToleftFrontBow2").clone();
              leanToleftBow2.name = "leftLeanToBow" + j + "xR2";
              leanToleftBow2.material = leanToleftBow2.material.clone();
              leanToleftBow2.position.set((params.p_w/-2 - posBow2[params.b_l_t_r_p][params.lean_p_w]),params.lean_p_h -0.11,i);	
              leanToleftBow2.rotation.z = 0.91;
              leanToleftBow2.scale.set(1.5,scaleBow2[params.b_l_t_r_p],1);
              leanToleftBow2.visible = (params.p_r_s == "1")?true:false; 
              LeftLeanRoof.add(leanToleftBow2);
          }

          if (const_var.b_t_M_L_t_L.getObjectByName("leanToleftBow3")==undefined) {
            const leanToleftBow3 = const_var.b_t_M_L_t_L.getObjectByName("leanToleftFrontBow3").clone();
            leanToleftBow3.name = "leftLeanToBow" + j + "xR3";
            leanToleftBow3.material = leanToleftBow3.material.clone();
            leanToleftBow3.position.set((params.p_w/-2 - params.lean_p_w)+0.063,params.lean_p_h-0.155,i);	
            leanToleftBow3.rotation.z = 1.13;
            leanToleftBow3.scale.set(0.18,0.2,1);
            leanToleftBow3.visible = (params.p_r_s == "1")?true:false; 
            LeftLeanRoof.add(leanToleftBow3);
          }
         
          if (const_var.b_t_M_L_t_L.getObjectByName("leanToleftCorner")==undefined) {
            const leanToleftCorner = const_var.b_t_M_L_t_L.getObjectByName("leanToleftFrontCorner").clone();
            leanToleftCorner.name = "leanToleftCorner"+ j + "x";
            leanToleftCorner.material = leanToleftCorner.material.clone();
            leanToleftCorner.position.set((params.p_w/-2 - params.lean_p_w)+0.58,params.lean_p_h -posCorner[params.b_l_t_r_p],i);	
            leanToleftCorner.rotation.z = 1;
            leanToleftCorner.scale.set(1.9,0.25,1);
            leanToleftCorner.visible = (params.p_r_s != "1")?true:false; 
            leanToleftCorner.visible = true; 
            LeftLeanRoof.add(leanToleftCorner);
            const_var.legsForCut["leftLean"][leanToleftCorner.name] = leanToleftCorner;
          }
        }

        //Globle Variables
	      let rotation = Math.atan2(params.b_l_t_r_p/12, 1);
	      let base = params.lean_p_w;
	      let perpendicular = (params.b_l_t_r_p/12)*params.lean_p_w;
	      let hypotenuse = Math.sqrt(Math.pow(base, 2) + Math.pow(perpendicular, 2));

        if (const_var.b_t_M_L_t_L.getObjectByName("leftLeanToFrontTrimA")!=undefined) {
          const leftLeanToFrontTrimA = const_var.b_t_M_L_t_L.getObjectByName("leftLeanToFrontTrimA").clone();
          leftLeanToFrontTrimA.name = "leftLeanToFrontTrimA";
          leftLeanToFrontTrimA.scale.set(params.p_w/2,0.3,0.5);	
          leftLeanToFrontTrimA.position.set(leanToPos,params.lean_p_h + leanTohInc - 0.01,params.lean_p_d/2 + 0.1);	
          leftLeanToFrontTrimA.rotation.z = rotation;
          leftLeanToFrontTrimA.scale.x = hypotenuse;
          leftLeanToFrontTrimA.visible = (params.p_r_s != "1"&& params.add_left_front_lean_porch!=true)?true:false;
          if(params.is_translusant==true){
            leftLeanToFrontTrimA.material.transparent = true;
            leftLeanToFrontTrimA.material.opacity = 0.1;
            // leftLeanToFrontTrimA.material.opacity =0.3;
            leftLeanToFrontTrimA.material.alphaTest =false;
            leftLeanToFrontTrimA.material.clearAlpha =1;
          } else {
              leftLeanToFrontTrimA.material.transparent = true;
              leftLeanToFrontTrimA.material.opacity = 1;
              leftLeanToFrontTrimA.material.alphaTest =0;
              leftLeanToFrontTrimA.material.clearAlpha =null;
          }
          LeftLeanRoof.add(leftLeanToFrontTrimA);
         }

         if (const_var.b_t_M_L_t_L.getObjectByName("leftLeanToBackTrimA")==undefined) {
          const leftLeanToBackTrimA = const_var.b_t_M_L_t_L.getObjectByName("leftLeanToFrontTrimA").clone();
          leftLeanToBackTrimA.name = "leftLeanToBackTrimA";
          leftLeanToBackTrimA.scale.set(params.p_w/2,0.3,0.5);	
          leftLeanToBackTrimA.position.set(leanToPos,params.lean_p_h + leanTohInc - 0.01,params.lean_p_d/-2 - 0.1);	
          leftLeanToBackTrimA.rotation.z = rotation;
          leftLeanToBackTrimA.scale.x = hypotenuse;
          leftLeanToBackTrimA.visible = (params.p_r_s != "1"&& params.add_left_back_lean_porch!=true)?true:false;
          LeftLeanRoof.add(leftLeanToBackTrimA);
         }
         
        if (const_var.b_t_M_L_t_L.getObjectByName("leftLeantoLeftTrimA")!=undefined) {
          const leftLeantoLeftTrimA = const_var.b_t_M_L_t_L.getObjectByName("leftLeantoLeftTrimA").clone();
          leftLeantoLeftTrimA.name = "leftLeantoLeftTrimA";
          leftLeantoLeftTrimA.scale.set(0.3,params.lean_p_d + 0.1,0.9);
          leftLeantoLeftTrimA.position.set(-(params.lean_p_w+ (params.p_w/2))-0.03,params.lean_p_h-0.1025,0);
          leftLeantoLeftTrimA.rotation.x=Math.PI/-2;
          leftLeantoLeftTrimA.rotation.y=-rotation;
          leftLeantoLeftTrimA.visible = (params.p_r_s != "1")?true:false;
          LeftLeanRoof.add(leftLeantoLeftTrimA);
         }

            //Trim for left leanto regular in front position
            var leftLeanToFrontTrim = new THREE.Mesh(bowGeometry,bowMaterial);
            leftLeanToFrontTrim.name = "leftLeanToFrontTrim";
            leftLeanToFrontTrim.scale.set(params.p_w/2,0.3,0.5);	
            leftLeanToFrontTrim.position.set(leanToPos+0.1,params.lean_p_h + leanTohInc + 0.07,params.lean_p_d/2+0.25);	
            leftLeanToFrontTrim.rotation.z = bowsRotation[params.b_l_t_r_p];
            leftLeanToFrontTrim.scale.x = (params.lean_p_w +  widthBowR[params.b_l_t_r_p][params.lean_p_w]);
            leftLeanToFrontTrim.visible = (params.p_r_s == "1" && params.add_left_front_lean_porch!=true)?true:false;
            if(params.is_translusant==true){
              leftLeanToFrontTrim.material.transparent = true;
              leftLeanToFrontTrim.material.opacity = 0.1;
              // leftLeanToFrontTrim.material.opacity =0.3;
              leftLeanToFrontTrim.material.alphaTest =false;
              leftLeanToFrontTrim.material.clearAlpha =1;
            } else {
                leftLeanToFrontTrim.material.transparent = true;
                leftLeanToFrontTrim.material.opacity = 1;
                leftLeanToFrontTrim.material.alphaTest =0;
                leftLeanToFrontTrim.material.clearAlpha =null;
            }
            LeftLeanRoof.add(leftLeanToFrontTrim);

		    //Trim for left leanto regular in back position
		    var leftLeanToBackTrim = new THREE.Mesh(bowGeometry,bowMaterial);
		    leftLeanToBackTrim.name = "leftLeanToBackTrim";
		    leftLeanToBackTrim.scale.set(params.p_w/2,0.3,0.5);	
		    leftLeanToBackTrim.position.set(leanToPos+0.1,params.lean_p_h + leanTohInc + 0.07,params.lean_p_d/-2-0.25);	
		    leftLeanToBackTrim.rotation.z = bowsRotation[params.b_l_t_r_p];
		    leftLeanToBackTrim.scale.x = (params.lean_p_w +  widthBowR[params.b_l_t_r_p][params.lean_p_w]);
		    leftLeanToBackTrim.visible = (params.p_r_s == "1" && params.add_left_back_lean_porch!=true)?true:false;
		    LeftLeanRoof.add(leftLeanToBackTrim);

		    //Trim1 for left leanto regular in front position
		    var leanToLeftTrimGeo = new THREE.BoxGeometry(0.07+0.007,0.6+0.2,0.2+0.1);
		    var leanToLeftTrimMaterial = new THREE.MeshBasicMaterial({color:0x0E6655,side:THREE.DoubleSide});
		    var leanToleftFrontTrim1 = new THREE.Mesh(leanToLeftTrimGeo,leanToLeftTrimMaterial);
		    leanToleftFrontTrim1.name = "leanToleftFrontTrim1";
		    leanToleftFrontTrim1.position.set((params.p_w/-2 - params.lean_p_w)+posTrim2[params.b_l_t_r_p],params.lean_p_h -posBow1[params.b_l_t_r_p]+0.02,params.lean_p_d/2+0.25);	
		    leanToleftFrontTrim1.rotation.z = rotTrim2[params.b_l_t_r_p][params.lean_p_w];
		    leanToleftFrontTrim1.scale.set(scaleTrim2[params.b_l_t_r_p],0.31,0.5);
		    leanToleftFrontTrim1.visible = (params.p_r_s == "1" && params.add_left_front_lean_porch!=true)?true:false; 
        if(params.is_translusant==true){
          leanToleftFrontTrim1.material.transparent = true;
          leanToleftFrontTrim1.material.opacity = 0.1;
          // leanToleftFrontTrim1.material.opacity =0.3;
          leanToleftFrontTrim1.material.alphaTest =false;
          leanToleftFrontTrim1.material.clearAlpha =1;
        } else {
            leanToleftFrontTrim1.material.transparent = true;
            leanToleftFrontTrim1.material.opacity = 1;
            leanToleftFrontTrim1.material.alphaTest =0;
            leanToleftFrontTrim1.material.clearAlpha =null;
        }
        LeftLeanRoof.add(leanToleftFrontTrim1);

		    //Trim1 for left leanto regular in back position
        
		    var leanToleftBackTrim1 = new THREE.Mesh(leanToLeftTrimGeo,leanToLeftTrimMaterial);
		    leanToleftBackTrim1.name = "leanTolefBackTrim1";
		    leanToleftBackTrim1.position.set((params.p_w/-2 - params.lean_p_w)+posTrim2[params.b_l_t_r_p],params.lean_p_h -posBow1[params.b_l_t_r_p]+0.02,params.lean_p_d/-2-0.25);	
		    leanToleftBackTrim1.rotation.z = rotTrim2[params.b_l_t_r_p][params.lean_p_w];
		    leanToleftBackTrim1.scale.set(scaleTrim2[params.b_l_t_r_p],0.31,0.5);
		    leanToleftBackTrim1.visible = (params.p_r_s == "1" && params.add_left_back_lean_porch!=true)?true:false; 
		    LeftLeanRoof.add(leanToleftBackTrim1);
		    
            //Trim2 for left leanto regular in front position
		    var leanToleftFrontTrim2 = new THREE.Mesh(leanToLeftTrimGeo,leanToLeftTrimMaterial);
		    leanToleftFrontTrim2.name = "leanToleftFrontTrim2";
		    leanToleftFrontTrim2.position.set((params.p_w/-2 - posBow2[params.b_l_t_r_p][params.lean_p_w])+0.004,params.lean_p_h -0.09,params.lean_p_d/2+0.25);	
		    leanToleftFrontTrim2.rotation.z = 0.91;
		    leanToleftFrontTrim2.scale.set(1.75,scaleBow2[params.b_l_t_r_p]+0.1,0.5);
		    leanToleftFrontTrim2.visible = (params.p_r_s == "1" && params.add_left_front_lean_porch!=true)?true:false; 
        if(params.is_translusant==true){
          leanToleftFrontTrim2.material.transparent = true;
          leanToleftFrontTrim2.material.opacity = 0.1;
          // leanToleftFrontTrim2.material.opacity =0.3;
          leanToleftFrontTrim2.material.alphaTest =false;
          leanToleftFrontTrim2.material.clearAlpha =1;
        } else {
            leanToleftFrontTrim2.material.transparent = true;
            leanToleftFrontTrim2.material.opacity = 1;
            leanToleftFrontTrim2.material.alphaTest =0;
            leanToleftFrontTrim2.material.clearAlpha =null;
        }
        LeftLeanRoof.add(leanToleftFrontTrim2);

		    //Trim2 for left leanto regular in back position
		    var leanToleftBackTrim2 = new THREE.Mesh(leanToLeftTrimGeo,leanToLeftTrimMaterial);
		    leanToleftBackTrim2.name = "leanToleftBackTrim2";
		    leanToleftBackTrim2.position.set((params.p_w/-2 - posBow2[params.b_l_t_r_p][params.lean_p_w])+0.004,params.lean_p_h -0.09,params.lean_p_d/-2-0.25);	
		    leanToleftBackTrim2.rotation.z = 0.91;
		    leanToleftBackTrim2.scale.set(1.75,scaleBow2[params.b_l_t_r_p]+0.1,0.5);
		    leanToleftBackTrim2.visible = (params.p_r_s == "1" && params.add_left_back_lean_porch!=true)?true:false; 
		    LeftLeanRoof.add(leanToleftBackTrim2);
		    
            //Trim3 for left leanto regular in front position
		    var leanToLeftFrontTrim3Geo = new THREE.BoxGeometry(0.2+0.07,0.6+0.2,0.2+0.1);
		    var leanToLeftFrontTrim3Material = new THREE.MeshBasicMaterial({color:0x0E6655,side:THREE.DoubleSide,});
		    var leanToleftFrontTrim3 = new THREE.Mesh(leanToLeftFrontTrim3Geo,leanToLeftFrontTrim3Material);
		    leanToleftFrontTrim3.name = "leanToleftFrontTrim3";
		    leanToleftFrontTrim3.position.set((params.p_w/-2 - params.lean_p_w)+0.064,params.lean_p_h-0.142,params.lean_p_d/2+0.25);	
		    leanToleftFrontTrim3.rotation.z = 1.25;
		    leanToleftFrontTrim3.scale.set(0.34,0.3,0.5);
		    leanToleftFrontTrim3.visible = (params.p_r_s == "1" && params.add_left_front_lean_porch!=true)?true:false; 
        if(params.is_translusant==true){
          leanToleftFrontTrim3.material.transparent = true;
          leanToleftFrontTrim3.material.opacity = 0.1;
          // leanToleftFrontTrim3.material.opacity =0.3;
          leanToleftFrontTrim3.material.alphaTest =false;
          leanToleftFrontTrim3.material.clearAlpha =1;
        } else {
            leanToleftFrontTrim3.material.transparent = true;
            leanToleftFrontTrim3.material.opacity = 1;
            leanToleftFrontTrim3.material.alphaTest =0;
            leanToleftFrontTrim3.material.clearAlpha =null;
        }
        LeftLeanRoof.add(leanToleftFrontTrim3);

	       //Trim3 for left leanto regular in back position
		    var leanToLeftBackTrim3Geo = new THREE.BoxGeometry(0.2,0.6+0.2,0.2+0.1);
		    var leanToLeftBackTrim3Material = new THREE.MeshBasicMaterial({color:0x0E6655,side:THREE.DoubleSide,});
		    var leanToleftBackTrim3 = new THREE.Mesh(leanToLeftBackTrim3Geo,leanToLeftBackTrim3Material);
		    leanToleftBackTrim3.name = "leanToleftBackTrim3";
		    leanToleftBackTrim3.position.set((params.p_w/-2 - params.lean_p_w)+0.064,params.lean_p_h-0.142,params.lean_p_d/-2-0.25);	
		    leanToleftBackTrim3.rotation.z = 1.25;
		    leanToleftBackTrim3.scale.set(0.34,0.3,0.5);
		    leanToleftBackTrim3.visible = (params.p_r_s == "1" && params.add_left_back_lean_porch!=true)?true:false; 
		    LeftLeanRoof.add(leanToleftBackTrim3);

        //Trim4 for left leanto regular in front position
		    var leanToLeftFrontTrim4Geo = new THREE.BoxGeometry(0.2+0.07,0.6+0.2,0.2+0.1);
		    var leanToLeftFrontTrim4Material = new THREE.MeshBasicMaterial({color:0x0E6655,side:THREE.DoubleSide,});
		    var leanToleftFrontTrim4 = new THREE.Mesh(leanToLeftFrontTrim4Geo,leanToLeftFrontTrim4Material);
		    leanToleftFrontTrim4.name = "leanToleftFrontTrim4";
		    leanToleftFrontTrim4.position.set((params.p_w/-2 - params.lean_p_w)+0.058,params.lean_p_h-0.305,params.lean_p_d/2+0.25);
		    leanToleftFrontTrim4.scale.set(0.9,0.4,0.5);
		    leanToleftFrontTrim4.visible = (params.p_r_s == "1" && params.add_left_front_lean_porch!=true)?true:false; 
        if(params.is_translusant==true){
          leanToleftFrontTrim4.material.transparent = true;
          leanToleftFrontTrim4.material.opacity = 0.1;
          // leanToleftFrontTrim4.material.opacity =0.3;
          leanToleftFrontTrim4.material.alphaTest =false;
          leanToleftFrontTrim4.material.clearAlpha =1;
        } else {
            leanToleftFrontTrim4.material.transparent = true;
            leanToleftFrontTrim4.material.opacity = 1;
            leanToleftFrontTrim4.material.alphaTest =0;
            leanToleftFrontTrim4.material.clearAlpha =null;
        }
        LeftLeanRoof.add(leanToleftFrontTrim4);

        //Trim4 for left leanto regular in Back position
		    var leanToLeftBackTrim4Geo = new THREE.BoxGeometry(0.2+0.07,0.6+0.2,0.2+0.1);
		    var leanToLeftBackTrim4Material = new THREE.MeshBasicMaterial({color:0x0E6655,side:THREE.DoubleSide,});
		    var leanToleftBackTrim4 = new THREE.Mesh(leanToLeftBackTrim4Geo,leanToLeftBackTrim4Material);
		    leanToleftBackTrim4.name = "leanToleftBackTrim4";
		    leanToleftBackTrim4.position.set((params.p_w/-2 - params.lean_p_w)+0.058,params.lean_p_h-0.305,params.lean_p_d/-2-0.25);
		    leanToleftBackTrim4.scale.set(0.9,0.4,0.5);
		    leanToleftBackTrim4.visible = (params.p_r_s == "1" && params.add_left_back_lean_porch!=true)?true:false; 
        if(params.is_translusant==true){
          leanToleftBackTrim4.material.transparent = true;
          leanToleftBackTrim4.material.opacity = 0.1;
          // leanToleftBackTrim4.material.opacity =0.3;
          leanToleftBackTrim4.material.alphaTest =false;
          leanToleftBackTrim4.material.clearAlpha =1;
        } else {
            leanToleftBackTrim4.material.transparent = true;
            leanToleftBackTrim4.material.opacity = 1;
            leanToleftBackTrim4.material.alphaTest =0;
            leanToleftBackTrim4.material.clearAlpha =null;
        }
        LeftLeanRoof.add(leanToleftBackTrim4);

    }
    if (params.leantoAlignmentLeft=="1") {
		LeftLeanRoof.position.z = 0;
	}
	if (params.leantoAlignmentLeft=="2") {
		LeftLeanRoof.position.z = params.p_d/2-params.lean_p_d/2;
	}
	if (params.leantoAlignmentLeft=="3"){
	    LeftLeanRoof.position.z = -params.p_d/2+params.lean_p_d/2;
	}
  if ( params.isShowCenter == true ) {
    LeftLeanRoof.visible = false
  }

}