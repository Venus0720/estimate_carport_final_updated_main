import { params, const_var, } from '../../redux/reducers/reducer';
import * as THREE from "three" 
import { zigZagLegs, wallHeightCalculation } from '../../redux/reducers/utils';

export const updateCenterBuildingLegs = () => { 

	let roofMiddleHeight = {
	    "1":{"6":0.25,"7":0.29165,"8":0.33335,"9":0.375,"10":0.41665,"11":0.45835,"12":0.5,"13":0.5417,"14":0.5833,"15":0.6250,"16":0.6667,"17":0.7083,"18":0.7500,"19":0.7917,"20":0.8333,"21":0.8750,"22":0.9167,"23":0.9583,"24":1,"25":1.0417,"26":1.0833,"27":1.1250,"28":1.1667,"29":1.2083,"30":1.2500,"31":1.2917,"32":1.3333,"33":1.3750,"34":1.4167,"35":1.4583,"36":1.5000,"37":1.5417,"38":1.5833,"39":1.6250,"40":1.6667,"41":1.7083,"42":1.7500,"43":1.7917,"44":1.8333,"45":1.8750,"46":1.9167,"47":1.9583,"48":2.00,"49":2.0417,"50":2.0833,"51":2.1250,"52":2.1667,"53":2.2083,"54":2.2500,"55":2.2917,"56":2.3333,"57":2.3750,"58":2.4167,"59":2.4583,"60":2.5000,"61":2.5417,"62":2.5833,"63":2.6250,"64":2.6667,"65":2.7083,"66":2.7500,"67":2.7917,"68":2.8333,"69":2.8750,"70":2.9167,"71":2.9583,"72":3.00,"73":3.0417,"74":3.0833,"75":3.1250,"76":3.1667,"77":3.2083,"78":3.2500,"79":3.2917,"80":3.3330},
	    "2":{"6":0.50,"7":0.58335,"8":0.66665,"9":0.750,"10":0.83335,"11":0.91665,"12":1.0,"13":1.0833,"14":1.1667,"15":1.2500,"16":1.3333,"17":1.4167,"18":1.5000,"19":1.5833,"20":1.6667,"21":1.7500,"22":1.8333,"23":1.9167,"24":2,"25":2.0833,"26":2.1667,"27":2.2500,"28":2.3333,"29":2.4167,"30":2.5000,"31":2.5833,"32":2.6667,"33":2.7500,"34":2.8333,"35":2.9167,"36":3.0000,"37":3.0833,"38":3.1667,"39":3.2500,"40":3.3330,"41":3.4170,"42":3.5000,"43":3.5830,"44":3.6670,"45":3.7500,"46":3.8330,"47":3.9170,"48":4.00,"49":4.0830,"50":4.1670,"51":4.2500,"52":4.3330,"53":4.4170,"54":4.5000,"55":4.5830,"56":4.6670,"57":4.7500,"58":4.8330,"59":4.9170,"60":5.0000,"61":5.0830,"62":5.1670,"63":5.2500,"64":5.3330,"65":5.4170,"66":5.5000,"67":5.5830,"68":5.6670,"69":5.7500,"70":5.8330,"71":5.9170,"72":6.00,"73":6.0830,"74":6.1670,"75":6.2500,"76":6.3330,"77":6.4170,"78":6.5000,"79":6.5830,"80":6.6670},
	    "3":{"6":0.75,"7":0.87500,"8":1.00000,"9":1.125,"10":1.25000,"11":1.37500,"12":1.5,"13":1.6250,"14":1.7500,"15":1.8750,"16":2.0000,"17":2.1250,"18":2.2500,"19":2.3750,"20":2.5000,"21":2.6250,"22":2.7500,"23":2.8750,"24":3,"25":3.1250,"26":3.2500,"27":3.3750,"28":3.5000,"29":3.6250,"30":3.7500,"31":3.8750,"32":4.0000,"33":4.1250,"34":4.2500,"35":4.3750,"36":4.5000,"37":4.6250,"38":4.7500,"39":4.8750,"40":5.0000,"41":5.1250,"42":5.2500,"43":5.3750,"44":5.5000,"45":5.6250,"46":5.7500,"47":5.8750,"48":6.00,"49":6.1250,"50":6.2500,"51":6.3750,"52":6.5000,"53":6.6250,"54":6.7500,"55":6.8750,"56":7.0000,"57":7.1250,"58":7.2500,"59":7.3750,"60":7.5000,"61":7.6250,"62":7.7500,"63":7.8750,"64":8.0000,"65":8.1250,"66":8.2500,"67":8.3750,"68":8.5000,"69":8.6250,"70":8.7500,"71":8.8750,"72":9.00,"73":9.1250,"74":9.2500,"75":9.3750,"76":9.5000,"77":9.6250,"78":9.7500,"79":9.8750,"80":10.000},
	    "4":{"6":1.00,"7":1.16665,"8":1.33335,"9":1.500,"10":1.66650,"11":1.83350,"12":2.0,"13":2.1667,"14":2.3333,"15":2.5000,"16":2.6667,"17":2.8333,"18":3.0000,"19":3.1667,"20":3.3330,"21":3.5000,"22":3.6670,"23":3.8330,"24":4,"25":4.1670,"26":4.3330,"27":4.5000,"28":4.6670,"29":4.8330,"30":5.0000,"31":5.1670,"32":5.3330,"33":5.5000,"34":5.6670,"35":5.8330,"36":6.0000,"37":6.1670,"38":6.3330,"39":6.5000,"40":6.6670,"41":6.8330,"42":7.0000,"43":7.1670,"44":7.3330,"45":7.5000,"46":7.6670,"47":7.8330,"48":8.00,"49":8.1670,"50":8.3330,"51":8.5000,"52":8.6670,"53":8.8330,"54":9.0000,"55":9.1670,"56":9.3330,"57":9.5000,"58":9.6670,"59":9.8330,"60":10.000,"61":10.167,"62":10.333,"63":10.500,"64":10.667,"65":10.833,"66":11.000,"67":11.167,"68":11.333,"69":11.500,"70":11.667,"71":11.833,"72":12.0,"73":12.167,"74":12.333,"75":12.500,"76":12.667,"77":12.833,"78":13.000,"79":13.167,"80":13.333},
	    "5":{"6":1.25,"7":1.45835,"8":1.66650,"9":1.875,"10":2.08350,"11":2.29150,"12":2.5,"13":2.7083,"14":2.9167,"15":3.1250,"16":3.3330,"17":3.5420,"18":3.7500,"19":3.9580,"20":4.1670,"21":4.3750,"22":4.5830,"23":4.7920,"24":5,"25":5.2080,"26":5.4170,"27":5.6250,"28":5.8330,"29":6.0420,"30":6.2500,"31":6.4580,"32":6.6670,"33":6.8750,"34":7.0830,"35":7.2920,"36":7.5000,"37":7.7080,"38":7.9170,"39":8.1250,"40":8.3330,"41":8.5420,"42":8.7500,"43":8.9580,"44":9.1670,"45":9.3750,"46":9.5830,"47":9.7920,"48":10.0,"49":10.208,"50":10.417,"51":10.625,"52":10.833,"53":11.042,"54":11.250,"55":11.458,"56":11.667,"57":11.875,"58":12.083,"59":12.292,"60":12.500,"61":12.708,"62":12.917,"63":13.125,"64":13.333,"65":13.542,"66":13.750,"67":13.958,"68":14.167,"69":14.375,"70":14.583,"71":14.792,"72":15.0,"73":15.208,"74":15.417,"75":15.625,"76":15.833,"77":16.042,"78":16.250,"79":16.458,"80":16.667},
	    "6":{"6":1.50,"7":1.75000,"8":2.00000,"9":2.250,"10":2.50000,"11":2.75000,"12":3.0,"13":3.2500,"14":3.5000,"15":3.7500,"16":4.0000,"17":4.2500,"18":4.5000,"19":4.7500,"20":5.0000,"21":5.2500,"22":5.5000,"23":5.7500,"24":6,"25":6.2500,"26":6.5000,"27":6.7500,"28":7.0000,"29":7.2500,"30":7.5000,"31":7.7500,"32":8.0000,"33":8.2500,"34":8.5000,"35":8.7500,"36":9.0000,"37":9.2500,"38":9.5000,"39":9.7500,"40":10.000,"41":10.250,"42":10.500,"43":10.750,"44":11.000,"45":11.250,"46":11.500,"47":11.750,"48":12.0,"49":12.250,"50":12.500,"51":12.750,"52":13.000,"53":13.250,"54":13.500,"55":13.750,"56":14.000,"57":14.250,"58":14.500,"59":14.750,"60":15.000,"61":15.250,"62":15.500,"63":15.750,"64":16.000,"65":16.250,"66":16.500,"67":16.750,"68":17.000,"69":17.250,"70":17.500,"71":17.750,"72":18.0,"73":18.250,"74":18.500,"75":18.750,"76":19.000,"77":19.250,"78":19.500,"79":19.750,"80":20.000}
	};
	var f_S_LeanLegScale = {
		"1":{"6":0.000,"7":0.050,"8":0.10,"9":0.100,"10":0.100,"11":0.100,"12":0.00,"13":0.00,"14":0.10,"15":0.15,"16":0.20,"17":0.20,"18":0.20,"19":0.20,"20":0.20,"21":0.20,"22":0.20,"23":0.20,"24":0.20,"25":0.20,"26":0.20,"27":0.20,"28":0.20,"29":0.20,"30":0.20,},
		"2":{"6":0.83,"7":0.95,"8":1.1,"9":1.3,"10":1.3,"11":1.6,"12":1.9,"13":2.0,"14":2.2,"15":2.4,"16":2.6,"17":2.9,"18":2.9,"19":3.1,"20":3.2,"21":3.33,"22":3.65,"23":3.9,"24":4.05,"25":2.9,"26":2.9,"27":2.9,"28":2.9,"29":2.9,"30":2.9,},
		"3":{"6":1.40,"7":1.70,"8":2.06,"9":2.24,"10":2.60,"11":2.78,"12":3.10,"13":3.20,"14":3.50,"15":3.70,"16":4.02,"17":4.25,"18":4.30,"19":4.60,"20":4.90,"21":5.20,"22":5.55,"23":5.65,"24":5.95,"25":0.55,"26":0.55,"27":0.60,"28":0.65,"29":0.70,"30":0.75,},
		"4":{"6":0.175,"7":0.200,"8":0.25,"9":0.300,"10":0.350,"11":0.375,"12":0.35,"13":0.35,"14":0.40,"15":0.45,"16":0.50,"17":0.55,"18":0.60,"19":0.65,"20":0.70,"21":0.70,"22":0.75,"23":0.75,"24":0.80,"25":0.85,"26":0.85,"27":0.90,"28":0.95,"29":1.00,"30":1.05,},
		"5":{"6":0.250,"7":0.300,"8":0.35,"9":0.425,"10":0.475,"11":0.525,"12":0.50,"13":0.55,"14":0.60,"15":0.65,"16":0.70,"17":0.75,"18":0.85,"19":0.90,"20":0.95,"21":1.00,"22":1.05,"23":1.10,"24":1.15,"25":1.20,"26":1.25,"27":1.30,"28":1.35,"29":1.40,"30":1.45,},
		"6":{"6":0.350,"7":0.450,"8":0.50,"9":0.575,"10":0.650,"11":0.700,"12":0.70,"13":0.80,"14":0.90,"15":0.95,"16":1.00,"17":1.05,"18":1.15,"19":1.20,"20":1.30,"21":1.35,"22":1.40,"23":1.50,"24":1.60,"25":1.65,"26":1.70,"27":1.75,"28":1.85,"29":1.90,"30":2.00,},
		
	};
	var f_S_LeanLegHeight = {
		"1":{"6":0.000,"7":0.050,"8":0.10,"9":0.100,"10":0.100,"11":0.100,"12":0.00,"13":0.00,"14":0.10,"15":0.15,"16":0.20,"17":0.20,"18":0.20,"19":0.20,"20":0.20,"21":0.20,"22":0.20,"23":0.20,"24":0.20,"25":0.20,"26":0.20,"27":0.20,"28":0.20,"29":0.20,"30":0.20,},
		"2":{"6":0.47,"7":0.50,"8":0.60,"9":0.70,"10":0.88,"11":0.90,"12":0.98,"13":1.10,"14":1.12,"15":1.20,"16":1.25,"17":1.32,"18":1.40,"19":1.55,"20":1.63,"21":1.72,"22":1.75,"23":1.80,"24":1.90,"25":1.4,"26":0.30,"27":0.30,"28":0.35,"29":0.35,"30":0.40,},
		"3":{"6":0.70,"7":0.80,"8":0.85,"9":1.00,"10":1.10,"11":1.25,"12":1.35,"13":1.45,"14":1.65,"15":1.80,"16":1.90,"17":2.00,"18":2.20,"19":2.30,"20":2.40,"21":2.52,"22":2.64,"23":2.80,"24":2.90,"25":0.55,"26":0.55,"27":0.60,"28":0.65,"29":0.70,"30":0.75,},
		"4":{"6":0.175,"7":0.200,"8":0.25,"9":0.300,"10":0.350,"11":0.375,"12":0.35,"13":0.35,"14":0.40,"15":0.45,"16":0.50,"17":0.55,"18":0.60,"19":0.65,"20":0.70,"21":0.70,"22":0.75,"23":0.75,"24":0.80,"25":0.85,"26":0.85,"27":0.90,"28":0.95,"29":1.00,"30":1.05,},
		"5":{"6":0.250,"7":0.300,"8":0.35,"9":0.425,"10":0.475,"11":0.525,"12":0.50,"13":0.55,"14":0.60,"15":0.65,"16":0.70,"17":0.75,"18":0.85,"19":0.90,"20":0.95,"21":1.00,"22":1.05,"23":1.10,"24":1.15,"25":1.20,"26":1.25,"27":1.30,"28":1.35,"29":1.40,"30":1.45,},
		"6":{"6":0.350,"7":0.45,"8":0.50,"9":0.575,"10":0.650,"11":0.700,"12":0.70,"13":0.80,"14":0.90,"15":0.95,"16":1.00,"17":1.05,"18":1.15,"19":1.20,"20":1.30,"21":1.35,"22":1.40,"23":1.50,"24":1.60,"25":1.65,"26":1.70,"27":1.75,"28":1.85,"29":1.90,"30":2.00,},
	};
	var f_S_LeanLegScale = {
		"1":{"6":0.000,"7":0.050,"8":0.10,"9":0.100,"10":0.100,"11":0.100,"12":0.00,"13":0.00,"14":0.10,"15":0.15,"16":0.20,"17":0.20,"18":0.20,"19":0.20,"20":0.20,"21":0.20,"22":0.20,"23":0.20,"24":0.20,"25":0.20,"26":0.20,"27":0.20,"28":0.20,"29":0.20,"30":0.20,},
		"2":{"6":0.83,"7":0.95,"8":1.1,"9":1.3,"10":1.3,"11":1.6,"12":1.9,"13":2.0,"14":2.2,"15":2.4,"16":2.6,"17":2.9,"18":2.9,"19":3.1,"20":3.2,"21":3.33,"22":3.65,"23":3.9,"24":4.05,"25":2.9,"26":2.9,"27":2.9,"28":2.9,"29":2.9,"30":2.9,},
		"3":{"6":1.40,"7":1.70,"8":2.06,"9":2.24,"10":2.60,"11":2.78,"12":3.10,"13":3.20,"14":3.50,"15":3.70,"16":4.02,"17":4.25,"18":4.30,"19":4.60,"20":4.90,"21":5.20,"22":5.55,"23":5.65,"24":5.95,"25":0.55,"26":0.55,"27":0.60,"28":0.65,"29":0.70,"30":0.75,},
		"4":{"6":0.175,"7":0.200,"8":0.25,"9":0.300,"10":0.350,"11":0.375,"12":0.35,"13":0.35,"14":0.40,"15":0.45,"16":0.50,"17":0.55,"18":0.60,"19":0.65,"20":0.70,"21":0.70,"22":0.75,"23":0.75,"24":0.80,"25":0.85,"26":0.85,"27":0.90,"28":0.95,"29":1.00,"30":1.05,},
		"5":{"6":0.250,"7":0.300,"8":0.35,"9":0.425,"10":0.475,"11":0.525,"12":0.50,"13":0.55,"14":0.60,"15":0.65,"16":0.70,"17":0.75,"18":0.85,"19":0.90,"20":0.95,"21":1.00,"22":1.05,"23":1.10,"24":1.15,"25":1.20,"26":1.25,"27":1.30,"28":1.35,"29":1.40,"30":1.45,},
		"6":{"6":0.350,"7":0.450,"8":0.50,"9":0.575,"10":0.650,"11":0.700,"12":0.70,"13":0.80,"14":0.90,"15":0.95,"16":1.00,"17":1.05,"18":1.15,"19":1.20,"20":1.30,"21":1.35,"22":1.40,"23":1.50,"24":1.60,"25":1.65,"26":1.70,"27":1.75,"28":1.85,"29":1.90,"30":2.00,},
		
	};
	var f_S_LeanLegHeight = {
		"1":{"6":0.000,"7":0.050,"8":0.10,"9":0.100,"10":0.100,"11":0.100,"12":0.00,"13":0.00,"14":0.10,"15":0.15,"16":0.20,"17":0.20,"18":0.20,"19":0.20,"20":0.20,"21":0.20,"22":0.20,"23":0.20,"24":0.20,"25":0.20,"26":0.20,"27":0.20,"28":0.20,"29":0.20,"30":0.20,},
		"2":{"6":0.47,"7":0.50,"8":0.60,"9":0.70,"10":0.80,"11":0.90,"12":0.98,"13":1.10,"14":1.15,"15":1.20,"16":1.25,"17":1.32,"18":1.40,"19":1.55,"20":1.63,"21":1.72,"22":1.75,"23":1.80,"24":1.90,"25":1.4,"26":0.30,"27":0.30,"28":0.35,"29":0.35,"30":0.40,},
		"3":{"6":0.70,"7":0.80,"8":0.85,"9":1.00,"10":1.10,"11":1.25,"12":1.35,"13":1.45,"14":1.65,"15":1.80,"16":1.90,"17":2.00,"18":2.20,"19":2.30,"20":2.40,"21":2.52,"22":2.64,"23":2.80,"24":2.90,"25":0.55,"26":0.55,"27":0.60,"28":0.65,"29":0.70,"30":0.75,},
		"4":{"6":0.175,"7":0.200,"8":0.25,"9":0.300,"10":0.350,"11":0.375,"12":0.35,"13":0.35,"14":0.40,"15":0.45,"16":0.50,"17":0.55,"18":0.60,"19":0.65,"20":0.70,"21":0.70,"22":0.75,"23":0.75,"24":0.80,"25":0.85,"26":0.85,"27":0.90,"28":0.95,"29":1.00,"30":1.05,},
		"5":{"6":0.250,"7":0.300,"8":0.35,"9":0.425,"10":0.475,"11":0.525,"12":0.50,"13":0.55,"14":0.60,"15":0.65,"16":0.70,"17":0.75,"18":0.85,"19":0.90,"20":0.95,"21":1.00,"22":1.05,"23":1.10,"24":1.15,"25":1.20,"26":1.25,"27":1.30,"28":1.35,"29":1.40,"30":1.45,},
		"6":{"6":0.350,"7":0.45,"8":0.50,"9":0.575,"10":0.650,"11":0.700,"12":0.70,"13":0.80,"14":0.90,"15":0.95,"16":1.00,"17":1.05,"18":1.15,"19":1.20,"20":1.30,"21":1.35,"22":1.40,"23":1.50,"24":1.60,"25":1.65,"26":1.70,"27":1.75,"28":1.85,"29":1.90,"30":2.00,},
	};

	var hrzBowYpos = {
        // "1": { "12": 0.05, "13": 0.05, "14": 0.05, "15": 0.05, "16": 0.05, "17": 0.05, "18": 0.05, "19": 0.05, "20": 0.05, "21": 0.05, "22": 0.05, "23": 0.05, "24": 0.05, "25": 0.05, "26": 0.2, "27": 0.2, "28": 0.2, "29": 0.2, "30": 0.2, "31": 0.2, "32": 0.2, "33": 0.2, "34": 0.2, "35": 0.2, "36": 0.2, "37": 0.2, "38": 0.2, "39": 0.2, "40": 0.2, "41": 0.2, "42": 18.0, "43": 18.0, "44": 18.0, "45": 18.0, "46": 18.0, "47": 18.0, "48": 18.0, "49": 18.0, "50": 18.0, "51": 18.0, "52": 18.0, "53": 18.0, "54": 18.0, "55": 18.0, "56": 18.0, "57": 18.0, "58": 18.0, "59": 18.0, "60": 18.0, "61": 18.0, "62": 18.0, "63": 18.0, "64": 18.0, "65": 18.0, "66": 18.0, "67": 18.0, "68": 18.0, "69": 18.0, "70": 18.0, "71": 18.0, "72": 18.0, "73": 18.0, "74": 18.0, "75": 18.0, "76": 18.0, "77": 18.0, "78": 18.0, "79": 18.0, "80": 18.0 },
        "1": { "12": 0.15, "13": 0.15, "14": 0.15, "15": 0.15, "16": 0.15, "17": 0.15, "18": 0.15, "19": 0.15, "20": 0.15, "21": 0.15, "22": 0.15, "23": 0.15, "24": 0.15, "25": 0.15, "26": 0.4, "27": 0.4, "28": 0.4, "29": 0.4, "30": 0.4, "31": 0.4, "32": 0.4, "33": 0.4, "34": 0.4, "35": 0.4, "36": 0.4, "37": 0.4, "38": 0.4, "39": 0.4, "40": 0.4, "41": 0.4, "42": 9.00, "43": 9.00, "44": 9.00, "45": 9.00, "46": 9.00, "47": 9.00, "48": 9.00, "49": 9.00, "50": 9.00, "51": 9.00, "52": 9.00, "53": 9.00, "54": 9.00, "55": 9.00, "56": 9.00, "57": 9.00, "58": 9.00, "59": 9.00, "60": 9.00, "61": 9.00, "62": 9.00, "63": 9.00, "64": 9.00, "65": 9.00, "66": 9.00, "67": 9.00, "68": 9.00, "69": 9.00, "70": 9.00, "71": 9.00, "72": 9.00, "73": 9.00, "74": 9.00, "75": 9.00, "76": 9.00, "77": 9.00, "78": 9.00, "79": 9.00, "80": 9.00 },
        "2": { "12": 0.15, "13": 0.15, "14": 0.15, "15": 0.15, "16": 0.15, "17": 0.15, "18": 0.15, "19": 0.15, "20": 0.15, "21": 0.15, "22": 0.15, "23": 0.15, "24": 0.15, "25": 0.15, "26": 0.4, "27": 0.4, "28": 0.4, "29": 0.4, "30": 0.4, "31": 0.4, "32": 0.4, "33": 0.4, "34": 0.4, "35": 0.4, "36": 0.4, "37": 0.4, "38": 0.4, "39": 0.4, "40": 0.4, "41": 0.4, "42": 9.00, "43": 9.00, "44": 9.00, "45": 9.00, "46": 9.00, "47": 9.00, "48": 9.00, "49": 9.00, "50": 9.00, "51": 9.00, "52": 9.00, "53": 9.00, "54": 9.00, "55": 9.00, "56": 9.00, "57": 9.00, "58": 9.00, "59": 9.00, "60": 9.00, "61": 9.00, "62": 9.00, "63": 9.00, "64": 9.00, "65": 9.00, "66": 9.00, "67": 9.00, "68": 9.00, "69": 9.00, "70": 9.00, "71": 9.00, "72": 9.00, "73": 9.00, "74": 9.00, "75": 9.00, "76": 9.00, "77": 9.00, "78": 9.00, "79": 9.00, "80": 9.00 },
        "3": { "12": 0.25, "13": 0.25, "14": 0.25, "15": 0.25, "16": 0.25, "17": 0.25, "18": 0.25, "19": 0.25, "20": 0.25, "21": 0.25, "22": 0.25, "23": 0.25, "24": 0.25, "25": 0.25, "26": 0.6, "27": 0.6, "28": 0.6, "29": 0.6, "30": 0.6, "31": 0.6, "32": 0.6, "33": 0.6, "34": 0.6, "35": 0.6, "36": 0.6, "37": 0.6, "38": 0.6, "39": 0.6, "40": 0.6, "41": 0.6, "42": 7.00, "43": 7.00, "44": 7.00, "45": 7.00, "46": 7.00, "47": 7.00, "48": 7.00, "49": 7.00, "50": 7.00, "51": 7.00, "52": 7.00, "53": 7.00, "54": 7.00, "55": 7.00, "56": 7.00, "57": 7.00, "58": 7.00, "59": 7.00, "60": 7.00, "61": 7.00, "62": 7.00, "63": 7.00, "64": 7.00, "65": 7.00, "66": 7.00, "67": 7.00, "68": 7.00, "69": 7.00, "70": 7.00, "71": 7.00, "72": 7.00, "73": 7.00, "74": 7.00, "75": 7.00, "76": 7.00, "77": 7.00, "78": 7.00, "79": 7.00, "80": 7.00 },
        "4": { "12": 0.40, "13": 0.40, "14": 0.40, "15": 0.40, "16": 0.40, "17": 0.40, "18": 0.40, "19": 0.40, "20": 0.40, "21": 0.40, "22": 0.40, "23": 0.40, "24": 0.40, "25": 0.40, "26": 0.2, "27": 0.2, "28": 0.2, "29": 0.2, "30": 0.2, "31": 0.2, "32": 0.2, "33": 0.2, "34": 0.2, "35": 0.2, "36": 0.2, "37": 0.2, "38": 0.2, "39": 0.2, "40": 0.2, "41": 0.2, "42": 5.00, "43": 5.00, "44": 5.00, "45": 5.00, "46": 5.00, "47": 5.00, "48": 5.00, "49": 5.00, "50": 5.00, "51": 5.00, "52": 5.00, "53": 5.00, "54": 5.00, "55": 5.00, "56": 5.00, "57": 5.00, "58": 5.00, "59": 5.00, "60": 5.00, "61": 5.00, "62": 5.00, "63": 5.00, "64": 5.00, "65": 5.00, "66": 5.00, "67": 5.00, "68": 5.00, "69": 5.00, "70": 5.00, "71": 5.00, "72": 5.00, "73": 5.00, "74": 5.00, "75": 5.00, "76": 5.00, "77": 5.00, "78": 5.00, "79": 5.00, "80": 5.00 },
        "5": { "12": 0.50, "13": 0.50, "14": 0.50, "15": 0.50, "16": 0.50, "17": 0.50, "18": 0.50, "19": 0.50, "20": 0.50, "21": 0.50, "22": 0.50, "23": 0.50, "24": 0.50, "25": 0.50, "26": 0.4, "27": 0.4, "28": 0.4, "29": 0.4, "30": 0.4, "31": 0.4, "32": 0.4, "33": 0.4, "34": 0.4, "35": 0.4, "36": 0.4, "37": 0.4, "38": 0.4, "39": 0.4, "40": 0.4, "41": 0.4, "42": 4.00, "43": 4.00, "44": 4.00, "45": 4.00, "46": 4.00, "47": 4.00, "48": 4.00, "49": 4.00, "50": 4.00, "51": 4.00, "52": 4.00, "53": 4.00, "54": 4.00, "55": 4.00, "56": 4.00, "57": 4.00, "58": 4.00, "59": 4.00, "60": 4.00, "61": 4.00, "62": 4.00, "63": 4.00, "64": 4.00, "65": 4.00, "66": 4.00, "67": 4.00, "68": 4.00, "69": 4.00, "70": 4.00, "71": 4.00, "72": 4.00, "73": 4.00, "74": 4.00, "75": 4.00, "76": 4.00, "77": 4.00, "78": 4.00, "79": 4.00, "80": 4.00 },
        "6": { "12": 0.60, "13": 0.60, "14": 0.60, "15": 0.60, "16": 0.60, "17": 0.60, "18": 0.60, "19": 0.60, "20": 0.60, "21": 0.60, "22": 0.60, "23": 0.60, "24": 0.60, "25": 0.60, "26": 0.4, "27": 0.4, "28": 0.4, "29": 0.4, "30": 0.4, "31": 0.4, "32": 0.4, "33": 0.4, "34": 0.4, "35": 0.4, "36": 0.4, "37": 0.4, "38": 0.4, "39": 0.4, "40": 0.4, "41": 0.4, "42": 3.80, "43": 3.80, "44": 3.80, "45": 3.80, "46": 3.80, "47": 3.80, "48": 3.80, "49": 3.80, "50": 3.80, "51": 3.80, "52": 3.80, "53": 3.80, "54": 3.80, "55": 3.80, "56": 3.80, "57": 3.80, "58": 3.80, "59": 3.80, "60": 3.80, "61": 3.80, "62": 3.80, "63": 3.80, "64": 3.80, "65": 3.80, "66": 3.80, "67": 3.80, "68": 3.80, "69": 3.80, "70": 3.80, "71": 3.80, "72": 3.80, "73": 3.80, "74": 3.80, "75": 3.80, "76": 3.80, "77": 3.80, "78": 3.80, "79": 3.80, "80": 3.80 }
    };

	let channelDis = ((params.p_h/5)+1).toFixed(0)

	if ("undefined" != typeof const_var.scene.getObjectByName("b_t_M_L")) const_var.scene.remove(const_var.scene.getObjectByName("b_t_M_L"));
	if ("undefined" != typeof const_var.scene.getObjectByName("b_t_M_R")) const_var.scene.remove(const_var.scene.getObjectByName("b_t_M_R"));
	if ("undefined" != typeof const_var.scene.getObjectByName("F_S_L_R")) const_var.scene.remove(const_var.scene.getObjectByName("F_S_L_R"));

	if ("undefined" != typeof const_var.scene.getObjectByName("L_F_L_P")) const_var.scene.remove(const_var.scene.getObjectByName("L_F_L_P"));



       if ("undefined" != typeof const_var.scene.getObjectByName("C_B_L_P_Legs")) const_var.scene.remove(const_var.scene.getObjectByName("C_B_L_P_Legs"));
       if ("undefined" != typeof const_var.scene.getObjectByName("C_B_R_P_Legs")) const_var.scene.remove(const_var.scene.getObjectByName("C_B_R_P_Legs"));
	   if ("undefined" != typeof const_var.scene.getObjectByName("F_S_L_RightLegs")) const_var.scene.remove(const_var.scene.getObjectByName("F_S_L_RightLegs"));
	   if ("undefined" != typeof const_var.scene.getObjectByName("c_b_f_s_b_w_h_c")) const_var.scene.remove(const_var.scene.getObjectByName("c_b_f_s_b_w_h_c"));
	   if ("undefined" != typeof const_var.scene.getObjectByName("c_b_b_s_f_w_h_c")) const_var.scene.remove(const_var.scene.getObjectByName("c_b_b_s_f_w_h_c"));
	 
       const C_B_L_P = new THREE.Group();
       C_B_L_P.name = "C_B_L_P_Legs";
       const_var.scene.add(C_B_L_P);
       
       const C_B_R_P = new THREE.Group();
       C_B_R_P.name = "C_B_R_P_Legs";
	   C_B_R_P.visible =(params.singleSlope == true)? false :true;
       const_var.scene.add(C_B_R_P);

       const F_S_L_RightLegs = new THREE.Group();
       F_S_L_RightLegs.name = "F_S_L_RightLegs";
       const_var.scene.add(F_S_L_RightLegs);

	   const c_b_f_s_b_w_h_c = new THREE.Group();
       c_b_f_s_b_w_h_c.name = "c_b_f_s_b_w_h_c";
	   c_b_f_s_b_w_h_c.visible = (params.singleSlope == true)? false :true;
       const_var.scene.add(c_b_f_s_b_w_h_c);

	   const c_b_b_s_f_w_h_c = new THREE.Group();
       c_b_b_s_f_w_h_c.name = "c_b_b_s_f_w_h_c";
	   c_b_b_s_f_w_h_c.visible = (params.singleSlope == true)? false :true;
       const_var.scene.add(c_b_b_s_f_w_h_c);

	   var disFor2Legs = 0.20;
	   var disForVShapLegs = 0.5;
	   var hightFor2Legs = params.p_h;
	   var hightForVShapLegs = params.p_h + (params.p_r_p*0.08);
	   let f_s_L_DoubleLegHeight = params.p_h;
	
	   if (const_var.legstype == "zigzag") {
	   	disFor2Legs = 0.9875;
		f_s_L_DoubleLegHeight = params.p_h - (((Number(params.p_r_p)/12) * disFor2Legs))-0.2;
	   	hightFor2Legs =(params.p_r_s == 1) ? (params.p_h + params.p_r_p/20 + 0.38) : (params.p_h + params.p_r_p/20 - 0.08);
	   }
	   if (const_var.legstype == "ladder") {
	   	disFor2Legs = 0.60;
	   	hightFor2Legs =params.p_h + ((params.p_r_p/12)*disFor2Legs) - 0.1;
	   }
	   if (const_var.legstype == "double") {

	   	disFor2Legs = 0.25+0.09;
	   	hightFor2Legs = params.p_h + ((params.p_r_p/12)*disFor2Legs) - 0.1;
	   }
	   const leftBaseRail = const_var.b_t_M_L.getObjectByName("leftBaseRail").clone();
       leftBaseRail.name = "leftBaseRail";
	   leftBaseRail.material = leftBaseRail.material.clone();
       leftBaseRail.scale.set(0.5,params.p_d-0.02,0.7);
       leftBaseRail.position.set(params.p_w/-2+0.08,0.08,0);
       leftBaseRail.rotation.x=Math.PI/-2;
       C_B_L_P.add(leftBaseRail);
	   const_var.legsForCut["left"][leftBaseRail.name] = leftBaseRail;

	   const_var.isSingleBaseRail = const_var.singleBaseRailByMnf.includes(Number(params.m_s_n)) && const_var.isTripleWide && const_var.legstype == "double" ? true : false;
       const leftBaseRailforDouble = const_var.b_t_M_L.getObjectByName("leftBaseRail").clone();
       leftBaseRailforDouble.name = "leftBaseRailforDouble";
	   leftBaseRailforDouble.material = leftBaseRailforDouble.material.clone();
       leftBaseRailforDouble.scale.set(0.5,params.p_d-0.02,0.7);
       leftBaseRailforDouble.position.set(params.p_w/-2+disFor2Legs,0.08,0);
       leftBaseRailforDouble.rotation.x=Math.PI/-2;
    //    leftBaseRailforDouble.visible = params.p_e_l  && params.trussType != "CTCT";
       leftBaseRailforDouble.visible = params.p_e_l && (const_var.legstype == "double" || const_var.legstype == "ladder" || const_var.legstype == "zigzag");
	   if (const_var.isSingleBaseRail) leftBaseRailforDouble.visible = false;
	   C_B_L_P.add(leftBaseRailforDouble);
	   const_var.legsForCut["left"][leftBaseRailforDouble.name] = leftBaseRailforDouble;

       const rightBaseRail = const_var.b_t_M_R.getObjectByName("rightBaseRail").clone();
       rightBaseRail.name = "rightBaseRail";
	   rightBaseRail.material = rightBaseRail.material.clone();
       rightBaseRail.scale.set(0.5,params.p_d-0.02,0.7);
       rightBaseRail.position.set(params.p_w/2-0.08,0.08,0);
       rightBaseRail.rotation.x=Math.PI/-2;
       C_B_R_P.add(rightBaseRail);
	   const_var.legsForCut["right"][rightBaseRail.name] = rightBaseRail;


       const rightBaseRailforDouble = const_var.b_t_M_R.getObjectByName("rightBaseRail").clone();
       rightBaseRailforDouble.name = "rightBaseRailforDouble";
	   rightBaseRailforDouble.material = rightBaseRailforDouble.material.clone();
       rightBaseRailforDouble.scale.set(0.5,params.p_d-0.02,0.7);
       rightBaseRailforDouble.position.set(params.p_w/2-disFor2Legs,0.08,0);
       rightBaseRailforDouble.rotation.x=Math.PI/-2;
    //    rightBaseRailforDouble.visible = params.p_e_l  && params.trussType != "CTCT";
       rightBaseRailforDouble.visible = params.p_e_l &&  (const_var.legstype == "double" || const_var.legstype == "ladder" || const_var.legstype == "zigzag");
	   if (const_var.isSingleBaseRail) rightBaseRailforDouble.visible = false;
       C_B_R_P.add(rightBaseRailforDouble);
	   const_var.legsForCut["right"][rightBaseRailforDouble.name] = rightBaseRailforDouble;


	   const f_S_LeanRightBaseRail = const_var.F_S_L_R.getObjectByName("f_S_LeanRightBaseRail").clone();
      	f_S_LeanRightBaseRail.name = "f_S_LeanRightBaseRail";
		f_S_LeanRightBaseRail.material = f_S_LeanRightBaseRail.material.clone();
		f_S_LeanRightBaseRail.scale.set(0.5,params.p_d - 0.02,0.7);
		f_S_LeanRightBaseRail.position.set(params.p_w/2-0.18,0.08,0);
		f_S_LeanRightBaseRail.visible = (params.singleSlope == true)?true:false;
		f_S_LeanRightBaseRail.rotation.x=Math.PI/-2;
		F_S_L_RightLegs.add(f_S_LeanRightBaseRail);
		const_var.legsForCut["right"][f_S_LeanRightBaseRail.name] = f_S_LeanRightBaseRail;

		const f_S_LeanRightBaseRailforDouble = const_var.F_S_L_R.getObjectByName("f_S_LeanRightBaseRail").clone();
		f_S_LeanRightBaseRailforDouble.name = "f_S_LeanRightBaseRailforDouble";
		f_S_LeanRightBaseRailforDouble.material = f_S_LeanRightBaseRailforDouble.material.clone();
	    f_S_LeanRightBaseRailforDouble.scale.set(0.5,params.p_d - 0.02,0.7);
	    f_S_LeanRightBaseRailforDouble.position.set(params.p_w/2-disFor2Legs-0.1,0.08,0);
	    f_S_LeanRightBaseRailforDouble.visible = (params.p_e_l ==true && params.singleSlope ==true)?true:false;
	    f_S_LeanRightBaseRailforDouble.rotation.x=Math.PI/-2;
	    F_S_L_RightLegs.add(f_S_LeanRightBaseRailforDouble);
		const_var.legsForCut["right"][f_S_LeanRightBaseRailforDouble.name] = f_S_LeanRightBaseRailforDouble;		

		
		let eqiDis;
		if(params.fourth_center_cost == true){
			if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
		{
			eqiDis = (params.oncenter_val_with_action!='')?((params.p_d)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.p_d)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0);
		}
		} else {
			if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
			{
				eqiDis = (params.oncenter_val_with_action!='')?((params.p_d)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.p_d)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0)
			}
		}
		const_var.count_numberofLegs = parseFloat(eqiDis)+1;
		for (let i = params.p_d/2 -0.12, j = 0; i > (params.p_d/-2 )-1; i = i - (params.p_d/eqiDis ), j++) {
			
			if( i < params.p_d / -2 + 0.12 ) i = (params.p_d /-2) + 0.12
			 
            const leftLegs = const_var.b_t_M_L.getObjectByName("leftFrontLeg").clone();
            leftLegs.name = "leftLegs"+ Math.round(j) + "x";
			leftLegs.material = leftLegs.material.clone();
			if (params.singleSlope) {
				leftLegs.scale.set(0.5,params.p_h - (Number(params.p_r_p)/12) * params.p_w,1);
				leftLegs.position.set(params.p_w/-2+0.08,(params.p_h - (Number(params.p_r_p)/12) * params.p_w)/2 - 0.02,i.toFixed(2));			
			} else {
				leftLegs.scale.set(0.5,params.p_h,1);
				leftLegs.position.set(params.p_w/-2+0.08,params.p_h/2,i.toFixed(2));
			}
			leftLegs.material = leftLegs.material.clone();
            C_B_L_P.add(leftLegs);
			const_var.legsForCut["left"][leftLegs.name] = leftLegs;
			const_var.legsForCutFee["left"][leftLegs.name] = leftLegs;
			if (params.p_e_l == true){
			const leftDoubleLeg = const_var.b_t_M_L.getObjectByName("leftFrontLeg").clone();
			leftDoubleLeg.name = "leftDoubleLeg"+ Math.round(j) + "x";
			leftDoubleLeg.material = leftDoubleLeg.material.clone();
			// leftDoubleLeg.visible = params.p_e_l  && params.trussType != "CTCT";
			leftDoubleLeg.visible = params.p_e_l && (const_var.legstype == "double" || const_var.legstype == "ladder" || const_var.legstype == "zigzag");
			if (params.singleSlope) {
				leftDoubleLeg.scale.set(0.5,params.p_h - (Number(params.p_r_p)/12) * params.p_w,1);
				leftDoubleLeg.position.set(params.p_w/-2+disFor2Legs,(params.p_h - (Number(params.p_r_p)/12) * params.p_w)/2,i.toFixed(2));			
			} else {
				leftDoubleLeg.scale.set(0.5,hightFor2Legs,1);
				leftDoubleLeg.position.set(params.p_w/-2+disFor2Legs,hightFor2Legs/2,i.toFixed(2));
			}
			C_B_L_P.add(leftDoubleLeg);
			const_var.legsForCut["left"][leftDoubleLeg.name] = leftDoubleLeg;
			}

			const leftVShapLeg = const_var.b_t_M_L.getObjectByName("leftFrontLeg").clone();
			leftVShapLeg.name = "leftVShapLeg"+i;
			// leftVShapLeg.visible = params.p_e_l;
			// leftVShapLeg.visible = params.p_e_l && params.trussType == "CTCT";
			leftVShapLeg.visible = false;
			leftVShapLeg.scale.set(0.5,hightForVShapLegs,1);
			leftVShapLeg.position.set(params.p_w/-2+disForVShapLegs,hightForVShapLegs/2,i.toFixed(2));
			leftVShapLeg.rotation.z = -0.1325 + (params.p_h * 0.005);//-0.0325;//-0.0925;						
			// C_B_L_P.add(leftVShapLeg);

			const rightLegs = const_var.b_t_M_R.getObjectByName("rightFrontLeg").clone();
            rightLegs.name = "rightLegs"+ Math.round(j) + "x";
			rightLegs.material = rightLegs.material.clone();
            rightLegs.scale.set(0.5,params.p_h,1);
            rightLegs.position.set(params.p_w/2-0.08,params.p_h/2,i.toFixed(2));
			if(params.canopy == true){
				rightLegs.position.set(params.p_w/2-0.08,((params.p_h/2) + roofMiddleHeight[params.p_r_p][params.p_w])-0.07,i.toFixed(2));
				rightLegs.scale.set(0.5,params.p_h + (roofMiddleHeight[params.p_r_p][params.p_w]*2)-0.14,1);
			}
            C_B_R_P.add(rightLegs);
			const_var.legsForCut["right"][rightLegs.name] = rightLegs;
			const_var.legsForCutFee["right"][rightLegs.name] = rightLegs;

			if (params.p_e_l == true){
			const rightDoubleLeg = const_var.b_t_M_R.getObjectByName("rightFrontLeg").clone();
			rightDoubleLeg.name = "rightDoubleLeg"+ Math.round(j) + "x";
			// rightDoubleLeg.visible = params.p_e_l  && params.trussType != "CTCT";
			rightDoubleLeg.material = rightDoubleLeg.material.clone();
			rightDoubleLeg.visible = params.p_e_l && (const_var.legstype == "double" || const_var.legstype == "ladder"  || const_var.legstype == "zigzag");
			rightDoubleLeg.scale.set(0.5,hightFor2Legs,1);
			rightDoubleLeg.position.set(params.p_w/2-disFor2Legs,hightFor2Legs/2,i.toFixed(2));
			C_B_R_P.add(rightDoubleLeg);
			const_var.legsForCut["right"][rightDoubleLeg.name] = rightDoubleLeg;
			}
			const rightVShapLeg = const_var.b_t_M_R.getObjectByName("rightFrontLeg").clone();
			rightVShapLeg.name = "rightVShapLeg"+i;
			// rightVShapLeg.visible = params.p_e_l && params.trussType == "CTCT";
			rightVShapLeg.visible = false;
			rightVShapLeg.scale.set(0.5,hightForVShapLegs,1);
			rightVShapLeg.position.set(params.p_w/2-disForVShapLegs,hightForVShapLegs/2,i.toFixed(2));
			rightVShapLeg.rotation.z = 0.1325 - (params.p_h * 0.005);				
			// C_B_R_P.add(rightVShapLeg);

			const f_S_L_R_Leg = const_var.F_S_L_R.getObjectByName("f_S_L_R_FrontLeg").clone();
			f_S_L_R_Leg.name = "f_S_L_R_Leg"+ j + "x";
			f_S_L_R_Leg.material = f_S_L_R_Leg.material.clone();
			f_S_L_R_Leg.scale.set(0.5,params.p_h - 0.3,1);
			f_S_L_R_Leg.position.set(params.p_w/2-0.18, params.p_h/2 - 0.1,i.toFixed(2));
			f_S_L_R_Leg.visible = params.singleSlope;
			F_S_L_RightLegs.add(f_S_L_R_Leg);
			const_var.legsForCut["right"][f_S_L_R_Leg.name] = f_S_L_R_Leg;
			// if (params.singleSlope) const_var.legsForCut[f_S_L_R_Leg.name] = f_S_L_R_Leg;

			const f_S_L_R_LegforDouble = const_var.F_S_L_R.getObjectByName("f_S_L_R_FrontLeg").clone();
			f_S_L_R_LegforDouble.name = "f_S_L_R_LegforDouble"+ j + "x";
			f_S_L_R_LegforDouble.material = f_S_L_R_LegforDouble.material.clone();
			f_S_L_R_LegforDouble.scale.set(0.5,params.p_h - 0.3 - (Math.atan(Number(params.p_r_p)/12)/2),1);
			f_S_L_R_LegforDouble.position.set(params.p_w/2-disFor2Legs-0.1, params.p_h/2 - 0.1 - (Math.atan(Number(params.p_r_p)/12)/4),i.toFixed(2));
			if (const_var.legstype == "zigzag" && params.p_e_l){
				f_S_L_R_LegforDouble.scale.set(0.5,f_s_L_DoubleLegHeight,1);
				f_S_L_R_LegforDouble.position.set(params.p_w/2-disFor2Legs-0.1, f_s_L_DoubleLegHeight/2,i.toFixed(2));
			}
			f_S_L_R_LegforDouble.visible =  (params.p_e_l ==true && params.singleSlope ==true)?true:false;
			F_S_L_RightLegs.add(f_S_L_R_LegforDouble);
			const_var.legsForCut["right"][f_S_L_R_LegforDouble.name] = f_S_L_R_LegforDouble;
		}

	  if (const_var.legstype == "ladder" && params.p_e_l){
	    let connectorDis = 2
	    for (let i = 0;i<((params.p_h) - 1); i = i+connectorDis) {

		    for (let e = params.p_d/2 -0.12, j = 0; e > (params.p_d/-2 )-1; e = e - (params.p_d / eqiDis ), j++) {
                    
                if( e < params.p_d / -2 + 0.12 ) e = (params.p_d /-2) + 0.12

				if(e >= (params.p_d/2)-2){
					e = (params.p_d/2)-0.12;
				}

	        	const leftFrontLegConnector = const_var.b_t_M_L.getObjectByName("legConnector").clone();
       	    	leftFrontLegConnector.name = "leftFrontLegConnector"+ j + 'x' + i;
				leftFrontLegConnector.material = leftFrontLegConnector.material.clone();
       	    	leftFrontLegConnector.scale.set(0.5,0.2,0.3);
       	    	leftFrontLegConnector.position.set(params.p_w/-2+0.4,i+0.075,e);
       	    	leftFrontLegConnector.position.set(params.p_w/-2+0.4,i+0.075,e);
		    	// leftFrontLegConnector.visible =  (const_var.legstype == "ladder" &&  params.trussType != "CTCT") ? true :false; 
    	    	leftFrontLegConnector.visible =  (const_var.legstype == "ladder" && params.p_e_l==true) ? true :false; 
				if (params.singleSlope == true) {
					if (i < (params.p_h - 1 - ((Number(params.p_r_p)/12) * params.p_w + 0.3))) {
						C_B_L_P.add(leftFrontLegConnector);
						const_var.legsForCut["left"][leftFrontLegConnector.name] = leftFrontLegConnector;
					}
				} else {
					C_B_L_P.add(leftFrontLegConnector);
				 	const_var.legsForCut["left"][leftFrontLegConnector.name] = leftFrontLegConnector;
				}

				const rightFrontLegConnector = const_var.b_t_M_L.getObjectByName("legConnector").clone();
       	    	rightFrontLegConnector.name = "rightFrontLegConnector" + j + 'x' + i;
				rightFrontLegConnector.material = rightFrontLegConnector.material.clone();
       	    	rightFrontLegConnector.scale.set(0.5,0.2,0.3);
       	    	rightFrontLegConnector.position.set(params.p_w/2-0.4,i+0.075,e);
		    	// rightFrontLegConnector.visible =  (const_var.legstype == "ladder" &&  params.trussType != "CTCT") ? true :false;
		    	rightFrontLegConnector.visible =  (const_var.legstype == "ladder" && params.p_e_l==true) ? true :false;
       	    	C_B_L_P.add(rightFrontLegConnector);	
				const_var.legsForCut["right"][rightFrontLegConnector.name] = rightFrontLegConnector;	   

			}
	    }
	  }

		if (const_var.legstype == "zigzag" && params.p_e_l) {
			if (!params.singleSlope){
				zigZagLegs(params.p_w, params.p_d, params.p_h, C_B_L_P, C_B_R_P, eqiDis, "left", "right");
			} else {
				zigZagLegs(params.p_w, params.p_d, params.p_h - ((Number(params.p_r_p)/12) * params.p_w), C_B_L_P, undefined, eqiDis, "left", undefined);
				zigZagLegs(params.p_w-0.1, params.p_d, params.p_h, undefined, F_S_L_RightLegs, eqiDis, undefined, "right");
			}
		}




		
		/*
		if( params.p_e_l && params.trussType == "CTCT"){
			for (let i = (params.p_h/2);i<params.p_h; i = i+connectorDis) {
	 
				 for (let e = params.p_d/2 -0.12; e > (params.p_d/-2 )-1; e = e - (params.p_d / eqiDis )) {
						
					if( e < params.p_d / -2 + 0.12 ) e = (params.p_d /-2) + 0.12
	 
					 if(e >= (params.p_d/2)-2){
						 e = (params.p_d/2)-0.12;
					 }
	 
					 const vShapeLegConnectorL = const_var.b_t_M_L.getObjectByName("legConnector").clone();
					 vShapeLegConnectorL.name = "vShapeLegConnectorL"+e;
					 vShapeLegConnectorL.scale.set(0.5,0.2,0.3);
					 vShapeLegConnectorL.position.set( -(params.p_w/2)+0.35,i,e);
					 vShapeLegConnectorL.visible =  const_var.legstype == "ladder"
					 vShapeLegConnectorL.position.x = -(params.p_w/2)+(((i*0.15)-(params.p_h*0.005*i))/2)//+0.35
					 vShapeLegConnectorL.scale.x = (i*0.15) -(params.p_h*0.006*i)
					 vShapeLegConnectorL.visible = params.p_e_l
					 C_B_L_P.add(vShapeLegConnectorL);

					 const vShapeLegConnectorR = const_var.b_t_M_L.getObjectByName("legConnector").clone();
					 vShapeLegConnectorR.name = "vShapeLegConnectorR"+e;
					 vShapeLegConnectorR.scale.set(0.5,0.2,0.3);
					 vShapeLegConnectorR.position.set( (params.p_w/2)-0.35,i,e);
					 vShapeLegConnectorR.visible =  const_var.legstype == "ladder"
					 vShapeLegConnectorR.position.x = (params.p_w/2)-(((i*0.15)-(params.p_h*0.005*i))/2)//+0.35
					 vShapeLegConnectorR.scale.x = (i*0.15) -(params.p_h*0.006*i)
					 vShapeLegConnectorR.visible = params.p_e_l
					 C_B_L_P.add(vShapeLegConnectorR);
				 }
			 }
		 }
		*/
	   //End Cross Bracing Left Leg
	  let e_c_b_height = (params.p_r_s == "1")? 0.3:0;
	   const e_c_b_leftLeg = const_var.b_t_M_L.getObjectByName("endCrossBracing").clone();
	   e_c_b_leftLeg.name = "e_c_b_leftLeg";
	   e_c_b_leftLeg.scale.set(0.2,params.p_h+(params.p_r_p*0.2)+e_c_b_height,0.3);
	   e_c_b_leftLeg.position.set(params.p_w/-2+2.5,(params.p_h+(params.p_r_p*0.2)+e_c_b_height)/2,params.p_d/2-0.12);
	   e_c_b_leftLeg.visible = params.p_e_c_b
	   C_B_L_P.add(e_c_b_leftLeg);  
	   const_var.legsForCut["front"][e_c_b_leftLeg.name] = e_c_b_leftLeg;

	   //End Cross Bracing Left Back Leg
	   const e_c_b_leftBackLeg = const_var.b_t_M_L.getObjectByName("endCrossBracing").clone();
	   e_c_b_leftBackLeg.name = "e_c_b_leftBackLeg";
	   e_c_b_leftBackLeg.scale.set(0.2,params.p_h+(params.p_r_p*0.2+e_c_b_height),0.3);
	   e_c_b_leftBackLeg.position.set(params.p_w/-2+2.5,(params.p_h+(params.p_r_p*0.2)+e_c_b_height)/2,params.p_d/-2+0.12);
	   e_c_b_leftBackLeg.visible = params.p_e_c_b
	   C_B_L_P.add(e_c_b_leftBackLeg);  
	   const_var.legsForCut["back"][e_c_b_leftBackLeg.name] = e_c_b_leftBackLeg;

	   //End Cross Bracing right Leg
	   const e_c_b_rightLeg = const_var.b_t_M_L.getObjectByName("endCrossBracing").clone();
	   e_c_b_rightLeg.name = "e_c_b_rightLeg";
	   e_c_b_rightLeg.scale.set(0.2,(params.p_h+(params.p_r_p*0.2)+e_c_b_height),0.3);
	   e_c_b_rightLeg.position.set(params.p_w/2-2.5,(params.p_h+(params.p_r_p*0.2)+e_c_b_height)/2,params.p_d/2-0.12);
	   e_c_b_rightLeg.visible = params.p_e_c_b
	   C_B_L_P.add(e_c_b_rightLeg); 
	   const_var.legsForCut["front"][e_c_b_rightLeg.name] = e_c_b_rightLeg;

	   //End Cross Bracing right Leg
	   const e_c_b_rightBackLeg = const_var.b_t_M_L.getObjectByName("endCrossBracing").clone();
	   e_c_b_rightBackLeg.name = "e_c_b_rightBackLeg";
	   e_c_b_rightBackLeg.scale.set(0.2,(params.p_h+(params.p_r_p*0.2)+e_c_b_height),0.3);
	   e_c_b_rightBackLeg.position.set(params.p_w/2-2.5,(params.p_h+(params.p_r_p*0.2)+e_c_b_height)/2,params.p_d/-2+0.12);
	   e_c_b_rightBackLeg.visible = params.p_e_c_b
	   C_B_L_P.add(e_c_b_rightBackLeg); 
	   const_var.legsForCut["back"][e_c_b_rightBackLeg.name] = e_c_b_rightBackLeg;	   

    for (let i = 0;i<params.p_h; i = i+3) {
		if(params.p_e_c_b == true){
	   	//End Cross Left Horizontal bows
	   const e_c_b_leftHrzBow = const_var.b_t_M_L.getObjectByName("endCrossBracing").clone();
	   e_c_b_leftHrzBow.name = "e_c_b_leftHrzBow" + i;
	   e_c_b_leftHrzBow.scale.set(2.6,0.2,0.3);
	   e_c_b_leftHrzBow.position.set(params.p_w/-2+1.3,i+0.075,params.p_d/2-0.12);
	   e_c_b_leftHrzBow.visible = params.p_e_c_b
	   C_B_L_P.add(e_c_b_leftHrzBow); 
	   const_var.legsForCut["front"][e_c_b_leftHrzBow.name] = e_c_b_leftHrzBow;


	    //End Cross Left vertical bows
	   const e_c_b_leftVrtBow = const_var.b_t_M_L.getObjectByName("endCrossBracing").clone();
	   e_c_b_leftVrtBow.name = "e_c_b_leftVrtBow" + i;
	   e_c_b_leftVrtBow.scale.set(3.7,0.2,0.3);
	   e_c_b_leftVrtBow.position.set(params.p_w/-2+1.3,i+1.575,params.p_d/2-0.12);
	   e_c_b_leftVrtBow.rotation.z = Math.PI/-3.4
	   e_c_b_leftVrtBow.visible = params.p_e_c_b
	   C_B_L_P.add(e_c_b_leftVrtBow);
	   const_var.legsForCut["front"][e_c_b_leftVrtBow.name] = e_c_b_leftVrtBow;


	   //End Cross Left Back Horizontal bows
	   const e_c_b_leftBackHrzBow = const_var.b_t_M_L.getObjectByName("endCrossBracing").clone();
	   e_c_b_leftBackHrzBow.name = "e_c_b_leftBackHrzBow" + i;
	   e_c_b_leftBackHrzBow.scale.set(2.6,0.2,0.3);
	   e_c_b_leftBackHrzBow.position.set(params.p_w/-2+1.3,i+0.075,params.p_d/-2+0.12);
	   e_c_b_leftBackHrzBow.visible = params.p_e_c_b
	   C_B_L_P.add(e_c_b_leftBackHrzBow); 
	   const_var.legsForCut["back"][e_c_b_leftBackHrzBow.name] = e_c_b_leftBackHrzBow;

	   //End Cross Left Back vertical bows
	   const e_c_b_leftBackVrtBow = const_var.b_t_M_L.getObjectByName("endCrossBracing").clone();
	   e_c_b_leftBackVrtBow.name = "e_c_b_leftBackVrtBow" + i;
	   e_c_b_leftBackVrtBow.scale.set(3.7,0.2,0.3);
	   e_c_b_leftBackVrtBow.position.set(params.p_w/-2+1.3,i+1.575,params.p_d/-2+0.12);
	   e_c_b_leftBackVrtBow.rotation.z = Math.PI/-3.4
	   e_c_b_leftBackVrtBow.visible = params.p_e_c_b
	   C_B_L_P.add(e_c_b_leftBackVrtBow);
	   const_var.legsForCut["back"][e_c_b_leftBackVrtBow.name] = e_c_b_leftBackVrtBow;

	   	//End Cross right Horizontal bows
	   const e_c_b_rightHrzBow = const_var.b_t_M_L.getObjectByName("endCrossBracing").clone();
	   e_c_b_rightHrzBow.name = "e_c_b_rightHrzBow" + i;
	   e_c_b_rightHrzBow.scale.set(2.6,0.2,0.3);
	   e_c_b_rightHrzBow.position.set(params.p_w/2-1.3,i+0.075,params.p_d/2-0.12);
	   e_c_b_rightHrzBow.visible = params.p_e_c_b
	   C_B_L_P.add(e_c_b_rightHrzBow); 
	   const_var.legsForCut["front"][e_c_b_rightHrzBow.name] = e_c_b_rightHrzBow;

	    //End Cross right vertical bows
	   const e_c_b_rightVrtBow = const_var.b_t_M_L.getObjectByName("endCrossBracing").clone();
	   e_c_b_rightVrtBow.name = "e_c_b_rightVrtBow" + i;
	   e_c_b_rightVrtBow.scale.set(3.7,0.2,0.3);
	   e_c_b_rightVrtBow.position.set(params.p_w/2-1.3,i+1.575,params.p_d/2-0.12);
	   e_c_b_rightVrtBow.rotation.z = Math.PI/3.4
	   e_c_b_rightVrtBow.visible = params.p_e_c_b
	   C_B_L_P.add(e_c_b_rightVrtBow);	  
	   const_var.legsForCut["front"][e_c_b_rightVrtBow.name] = e_c_b_rightVrtBow; 

	   	//End Cross right Back Horizontal bows
	   const e_c_b_rightBackHrzBow = const_var.b_t_M_L.getObjectByName("endCrossBracing").clone();
	   e_c_b_rightBackHrzBow.name = "e_c_b_rightBackHrzBow" + i;
	   e_c_b_rightBackHrzBow.scale.set(2.6,0.2,0.3);
	   e_c_b_rightBackHrzBow.position.set(params.p_w/2-1.3,i+0.075,params.p_d/-2+0.12);
	   e_c_b_rightBackHrzBow.visible = params.p_e_c_b
	   C_B_L_P.add(e_c_b_rightBackHrzBow); 
	   const_var.legsForCut["back"][e_c_b_rightBackHrzBow.name] = e_c_b_rightBackHrzBow;

	    //End Cross right Back vertical bows
	   const e_c_b_rightBackVrtBow = const_var.b_t_M_L.getObjectByName("endCrossBracing").clone();
	   e_c_b_rightBackVrtBow.name = "e_c_b_rightBackVrtBow" + i;
	   e_c_b_rightBackVrtBow.scale.set(3.7,0.2,0.3);
	   e_c_b_rightBackVrtBow.position.set(params.p_w/2-1.3,i+1.575,params.p_d/-2+0.12);
	   e_c_b_rightBackVrtBow.rotation.z = Math.PI/3.4
	   e_c_b_rightBackVrtBow.visible = params.p_e_c_b
	   C_B_L_P.add(e_c_b_rightBackVrtBow);	  
	   const_var.legsForCut["back"][e_c_b_rightBackVrtBow.name] = e_c_b_rightBackVrtBow; 	   

	   if(i>params.p_h-3){
		e_c_b_leftVrtBow.visible = false;
		e_c_b_rightVrtBow.visible = false;
		e_c_b_leftBackVrtBow.visible = false;
		e_c_b_rightBackVrtBow.visible = false;
	   }
	}

       /*Side Cross Bracing */
	   if(params.p_s_c_b == true){
       let dis = parseInt(params.p_d.toString().slice(-1))
	   let pos;
	   if(dis<5){
		pos = dis+5
	   }else{
		   pos = dis-5
	   }
	   //Side Cross Left Horizontal bows
	   const s_c_b_leftHrzBow = const_var.b_t_M_L.getObjectByName("endCrossBracing").clone();
	   s_c_b_leftHrzBow.name = "s_c_b_leftHrzBow" + i;
	   s_c_b_leftHrzBow.scale.set(0.2,0.2,2.4);
	   s_c_b_leftHrzBow.scale.z = params.p_d/eqiDis
	   s_c_b_leftHrzBow.position.set(params.p_w/-2+0.07,i+0.075,(params.p_d/2-0.12)-((params.p_d/eqiDis)/2));
	   s_c_b_leftHrzBow.visible = params.p_s_c_b
	   C_B_L_P.add(s_c_b_leftHrzBow); 
	   const_var.legsForCut["left"][s_c_b_leftHrzBow.name] = s_c_b_leftHrzBow;

	    //Side Cross Double Left Horizontal bows
		if(const_var.legstype == "ladder"){
		const s_c_b_leftHrzBowD = C_B_L_P.getObjectByName("s_c_b_leftHrzBow" + i).clone();
		s_c_b_leftHrzBowD.name = "s_c_b_leftHrzBowD" + i;
		s_c_b_leftHrzBowD.position.set(params.p_w/-2+0.57,i+0.075,(params.p_d/2-0.12)-((params.p_d/eqiDis)/2));
		C_B_L_P.add(s_c_b_leftHrzBowD); 
		const_var.legsForCut["left"][s_c_b_leftHrzBowD.name] = s_c_b_leftHrzBowD;
		}

	   //Side Cross Left vertical bows
	   const s_c_b_leftVrtBow = const_var.b_t_M_L.getObjectByName("endCrossBracing").clone();
	   s_c_b_leftVrtBow.name = "s_c_b_leftVrtBow" + i;
	   s_c_b_leftVrtBow.scale.set(0.2,0.2,3.9);
	   s_c_b_leftVrtBow.scale.z = (params.p_d/eqiDis)+((params.p_d/eqiDis)*0.1)
	   s_c_b_leftVrtBow.position.set(params.p_w/-2+0.07,i+1.575,(params.p_d/2-0.12)-((params.p_d/eqiDis)/2));
	   s_c_b_leftVrtBow.rotation.x =  (Math.PI/-((params.p_d/eqiDis)+0.4))
	   s_c_b_leftVrtBow.visible = params.p_s_c_b
	   C_B_L_P.add(s_c_b_leftVrtBow);
	   const_var.legsForCut["left"][s_c_b_leftVrtBow.name] = s_c_b_leftVrtBow;

	   	//Side Cross Double Left Vertical bows
		if(const_var.legstype == "ladder"){
		const s_c_b_leftVrtBowD = C_B_L_P.getObjectByName("s_c_b_leftVrtBow" + i).clone();
		s_c_b_leftVrtBowD.name = "s_c_b_leftVrtBowD" + i;
		s_c_b_leftVrtBowD.position.set(params.p_w/-2+0.57,i+1.575,(params.p_d/2-0.12)-((params.p_d/eqiDis)/2));
		C_B_L_P.add(s_c_b_leftVrtBowD); 
		const_var.legsForCut["left"][s_c_b_leftVrtBowD.name] = s_c_b_leftVrtBowD;
		if(i>params.p_h-4){
			s_c_b_leftVrtBowD.visible = false;
		}
		}

	   //Side Cross Left Back Horizontal bows
	   const s_c_b_leftBackHrzBow = const_var.b_t_M_L.getObjectByName("endCrossBracing").clone();
	   s_c_b_leftBackHrzBow.name = "s_c_b_leftBackHrzBow" + i;
	   s_c_b_leftBackHrzBow.scale.set(0.2,0.2,2.4);
	   s_c_b_leftBackHrzBow.scale.z = params.p_d/eqiDis
	   s_c_b_leftBackHrzBow.position.set(params.p_w/-2+0.07,i+0.075,((params.p_d/-2))+((params.p_d/eqiDis)/2));
	   s_c_b_leftBackHrzBow.visible = params.p_s_c_b
	   C_B_L_P.add(s_c_b_leftBackHrzBow); 
	   const_var.legsForCut["left"][s_c_b_leftBackHrzBow.name] = s_c_b_leftBackHrzBow;

	    //Side Cross Double Left Back Horizontal bows
		if(const_var.legstype == "ladder"){
		const s_c_b_leftBackHrzBowD = C_B_L_P.getObjectByName("s_c_b_leftBackHrzBow" + i).clone();
		s_c_b_leftBackHrzBowD.name = "s_c_b_leftBackHrzBowD" + i;
		s_c_b_leftBackHrzBowD.position.set(params.p_w/-2+0.57,i+0.075,((params.p_d/-2))+((params.p_d/eqiDis)/2));
		C_B_L_P.add(s_c_b_leftBackHrzBowD); 
		const_var.legsForCut["left"][s_c_b_leftBackHrzBowD.name] = s_c_b_leftBackHrzBowD;
		}  

	   //Side Cross Left Back vertical bows
	   const s_c_b_leftBackVrtBow = const_var.b_t_M_L.getObjectByName("endCrossBracing").clone();
	   s_c_b_leftBackVrtBow.name = "s_c_b_leftBackVrtBow" + i;
	   s_c_b_leftBackVrtBow.scale.set(0.2,0.2,3.9);
	   s_c_b_leftBackVrtBow.scale.z = (params.p_d/eqiDis)+((params.p_d/eqiDis)*0.1)
	   s_c_b_leftBackVrtBow.position.set(params.p_w/-2+0.07,i+1.575,(params.p_d/-2+0.12)+((params.p_d/eqiDis)/2));
	   s_c_b_leftBackVrtBow.rotation.x =  (Math.PI/((params.p_d/eqiDis)+0.4))
	   s_c_b_leftBackVrtBow.visible = params.p_s_c_b
	   C_B_L_P.add(s_c_b_leftBackVrtBow);
	   const_var.legsForCut["left"][s_c_b_leftBackVrtBow.name] = s_c_b_leftBackVrtBow;

	   	//Side Cross Double Left Back Vertical bows
		if(const_var.legstype == "ladder"){
		const s_c_b_leftBackVrtBowD = C_B_L_P.getObjectByName("s_c_b_leftBackVrtBow" + i).clone();
		s_c_b_leftBackVrtBowD.name = "s_c_b_leftBackVrtBowD" + i;
		s_c_b_leftBackVrtBowD.position.set(params.p_w/-2+0.57,i+1.575,(params.p_d/-2+0.12)+((params.p_d/eqiDis)/2));
		C_B_L_P.add(s_c_b_leftBackVrtBowD);
		const_var.legsForCut["left"][s_c_b_leftBackVrtBowD.name] = s_c_b_leftBackVrtBowD;
		
		if(i>params.p_h-4){
			s_c_b_leftBackVrtBowD.visible = false;
		}
		}

	   //Side Cross Right Horizontal bows
	   const s_c_b_rightHrzBow = const_var.b_t_M_L.getObjectByName("endCrossBracing").clone();
	   s_c_b_rightHrzBow.name = "s_c_b_rightHrzBow" + i;
	   s_c_b_rightHrzBow.scale.set(0.2,0.2,2.4);
	   s_c_b_rightHrzBow.scale.z = params.p_d/eqiDis
	   s_c_b_rightHrzBow.position.set(params.p_w/2-0.07,i+0.075,(params.p_d/2-0.12)-((params.p_d/eqiDis)/2));
	   s_c_b_rightHrzBow.visible = params.p_s_c_b
	   C_B_L_P.add(s_c_b_rightHrzBow); 
	   const_var.legsForCut["right"][s_c_b_rightHrzBow.name] = s_c_b_rightHrzBow;

	    //Side Cross Double Left Horizontal bows
		if(const_var.legstype == "ladder"){
		const s_c_b_rightHrzBowD = C_B_L_P.getObjectByName("s_c_b_rightHrzBow" + i).clone();
		s_c_b_rightHrzBowD.name = "s_c_b_rightHrzBowD" + i;
		s_c_b_rightHrzBowD.position.set(params.p_w/2-0.57,i,(params.p_d/2-0.12)-((params.p_d/eqiDis)/2));
		C_B_L_P.add(s_c_b_rightHrzBowD);
		const_var.legsForCut["right"][s_c_b_rightHrzBowD.name] = s_c_b_rightHrzBowD;
		}	   

	   //Side Cross Right vertical bows
	   const s_c_b_rightVrtBow = const_var.b_t_M_L.getObjectByName("endCrossBracing").clone();
	   s_c_b_rightVrtBow.name = "s_c_b_rightVrtBow" + i;
	   s_c_b_rightVrtBow.scale.set(0.2,0.2,3.9);
	   s_c_b_rightVrtBow.scale.z = (params.p_d/eqiDis)+((params.p_d/eqiDis)*0.1)
	   s_c_b_rightVrtBow.position.set(params.p_w/2-0.07,i+1.575,(params.p_d/2-0.12)-((params.p_d/eqiDis)/2));
	   s_c_b_rightVrtBow.rotation.x =  (Math.PI/-((params.p_d/eqiDis)+0.4))
	   s_c_b_rightVrtBow.visible = params.p_s_c_b
	   C_B_L_P.add(s_c_b_rightVrtBow);	
	   const_var.legsForCut["right"][s_c_b_rightVrtBow.name] = s_c_b_rightVrtBow;   

	   	//Side Cross Double Right Vertical bows
		if(const_var.legstype == "ladder"){
		const s_c_b_rightVrtBowD = C_B_L_P.getObjectByName("s_c_b_rightVrtBow" + i).clone();
		s_c_b_rightVrtBowD.name = "s_c_b_rightVrtBowD" + i;
		s_c_b_rightVrtBowD.position.set(params.p_w/2-0.57,i+1.575,(params.p_d/2-0.12)-((params.p_d/eqiDis)/2));
		C_B_L_P.add(s_c_b_rightVrtBowD); 
		const_var.legsForCut["right"][s_c_b_rightVrtBowD.name] = s_c_b_rightVrtBowD;

		if(i>params.p_h-4){
			s_c_b_rightVrtBowD.visible = false;
		}
		}	   

	   //Side Cross Right Back Horizontal bows
	   const s_c_b_rightBackHrzBow = const_var.b_t_M_L.getObjectByName("endCrossBracing").clone();
	   s_c_b_rightBackHrzBow.name = "s_c_b_rightBackHrzBow" + i;
	   s_c_b_rightBackHrzBow.scale.set(0.2,0.2,2.4);
	   s_c_b_rightBackHrzBow.scale.z = (params.p_d/eqiDis)
	   s_c_b_rightBackHrzBow.position.set(params.p_w/2-0.07,i+0.075,(params.p_d/-2)+((params.p_d/eqiDis)/2));
	   s_c_b_rightBackHrzBow.visible = params.p_s_c_b
	   C_B_L_P.add(s_c_b_rightBackHrzBow); 
	   const_var.legsForCut["right"][s_c_b_rightBackHrzBow.name] = s_c_b_rightBackHrzBow;

	    //Side Cross Double Left Horizontal bows
		if(const_var.legstype == "ladder"){
		const s_c_b_rightBackHrzBowD = C_B_L_P.getObjectByName("s_c_b_rightBackHrzBow" + i).clone();
		s_c_b_rightBackHrzBowD.name = "s_c_b_rightBackHrzBowD" + i;
		s_c_b_rightBackHrzBowD.position.set(params.p_w/2-0.57,i+0.075,(params.p_d/-2)+((params.p_d/eqiDis)/2));
		C_B_L_P.add(s_c_b_rightBackHrzBowD);
		const_var.legsForCut["right"][s_c_b_rightBackHrzBowD.name] = s_c_b_rightBackHrzBowD;
		}		   

	   //Side Cross Right Back vertical bows
	   const s_c_b_rightBackVrtBow = const_var.b_t_M_L.getObjectByName("endCrossBracing").clone();
	   s_c_b_rightBackVrtBow.name = "s_c_b_rightBackVrtBow" + i;
	   s_c_b_rightBackVrtBow.scale.set(0.2,0.2,3.9);
	   s_c_b_rightBackVrtBow.scale.z = (params.p_d/eqiDis)+((params.p_d/eqiDis)*0.1)
	   s_c_b_rightBackVrtBow.position.set(params.p_w/2-0.07,i+1.575,(params.p_d/-2+0.12)+((params.p_d/eqiDis)/2));
	   s_c_b_rightBackVrtBow.rotation.x =  (Math.PI/((params.p_d/eqiDis)+0.4))
	   s_c_b_rightBackVrtBow.visible = params.p_s_c_b
	   C_B_L_P.add(s_c_b_rightBackVrtBow);	
	   const_var.legsForCut["right"][s_c_b_rightBackVrtBow.name] = s_c_b_rightBackVrtBow;

	   	//Side Cross Double Right Vertical bows
		if(const_var.legstype == "ladder"){
		const s_c_b_rightBackVrtBowD = C_B_L_P.getObjectByName("s_c_b_rightBackVrtBow" + i).clone();
		s_c_b_rightBackVrtBowD.name = "s_c_b_rightBackVrtBowD" + i;
		s_c_b_rightBackVrtBowD.position.set(params.p_w/2-0.57,i+1.575,(params.p_d/-2+0.12)+((params.p_d/eqiDis)/2));
		C_B_L_P.add(s_c_b_rightBackVrtBowD); 
		const_var.legsForCut["right"][s_c_b_rightBackVrtBowD.name] = s_c_b_rightBackVrtBowD;

		if(i>params.p_h-4){
			s_c_b_rightBackVrtBowD.visible = false;
		}
		}	 	   
	   
	   if(i>params.p_h-4){
		s_c_b_leftVrtBow.visible = false;
		s_c_b_leftBackVrtBow.visible = false;
		s_c_b_rightVrtBow.visible = false;
		s_c_b_rightBackVrtBow.visible = false;
	   }
	}   
	  

    }
	

	const_var.c_b_h_c = [];
		if(params.p_v_w == true){
            let maxLength = (params.p_d <= 150)?1:3;
		    for(var i = 0.08 ; i<(params.p_h)+1 ; i += (params.p_h/channelDis))
		    {	
				if(i>params.p_h){
					i = params.p_h-0.06
				}

				if(params.p_l_w == "Close"){
		            if (const_var.b_t_M_L.getObjectByName("leftChannel")!=undefined) {
		            	var leftChannel = const_var.b_t_M_L.getObjectByName("leftChannel").clone();
		            	leftChannel.name = "leftChannel"
		            	leftChannel.scale.set(0.2,0.1,params.p_d);
		            	leftChannel.position.y =  i.toFixed(2)
		    	    	leftChannel.position.x =  params.p_w/-2+0.06*maxLength
		            	leftChannel.rotation.z = Math.PI/2
		            	C_B_R_P.add(leftChannel);
						const_var.c_b_h_c.push(leftChannel);
		            }
			    }

				if(params.p_r_w == "Close"){
				    if (const_var.b_t_M_L.getObjectByName("rightChannel")==undefined) {
		            	var rightChannel = const_var.b_t_M_L.getObjectByName("leftChannel").clone();
		            	rightChannel.name = "rightChannel"
		            	rightChannel.scale.set(0.2,0.1,params.p_d);
		            	rightChannel.position.y =  i.toFixed(2)
		    	    	rightChannel.position.x =  params.p_w/2-0.06*maxLength
		            	rightChannel.rotation.z = Math.PI/2
		            	C_B_R_P.add(rightChannel);
						const_var.c_b_h_c.push(rightChannel);
		            }
			    }

				if(params.p_b_w == "Close"){
				    if (const_var.b_t_M_L.getObjectByName("backChannel")==undefined) {
		            	var backChannel = const_var.b_t_M_L.getObjectByName("leftChannel").clone();
		            	backChannel.name = "backChannel"
		            	backChannel.scale.set(0.2,0.1,params.p_w);
		            	backChannel.position.y =  i.toFixed(2)
		    	    	backChannel.position.z =  params.p_d/-2+0.08*maxLength
		            	backChannel.rotation.z = Math.PI/2
						backChannel.rotation.y = Math.PI/2
						C_B_R_P.add(backChannel); 
						// if(!params.isBreezeway) C_B_R_P.add(backChannel); 
						// else c_b_b_s_f_w_h_c.add(backChannel);
						const_var.c_b_h_c.push(backChannel);
		            }
			    }

				if(params.p_f_w == "Close"){
				    if (const_var.b_t_M_L.getObjectByName("frontChannel")==undefined) {
		            	var frontChannel = const_var.b_t_M_L.getObjectByName("leftChannel").clone();
		            	frontChannel.name = "frontChannel"
		            	frontChannel.scale.set(0.2,0.1,params.p_w);
		            	frontChannel.position.y =  i.toFixed(2)
		    	    	frontChannel.position.z =  params.p_d/2-0.09*maxLength
		            	frontChannel.rotation.z = Math.PI/2
						frontChannel.rotation.y = Math.PI/2
						C_B_R_P.add(frontChannel)
						// if(!params.isBreezeway) C_B_R_P.add(frontChannel); 
						// else c_b_f_s_b_w_h_c.add(frontChannel);
						const_var.c_b_h_c.push(frontChannel);
		            }
			    }
		    	

			    if(params.p_u_c == true){
			    	if (const_var.b_t_M_L.getObjectByName("storageChannel")==undefined) {
			    		var storageChannel = const_var.b_t_M_L.getObjectByName("leftChannel").clone();
			    		storageChannel.name = "storageChannel"
			    		storageChannel.scale.set(0.2,0.1,params.p_w);
			    		storageChannel.position.y =  i.toFixed(2)
			    		storageChannel.position.z =  (params.p_d/-2)+(parseInt(params.p_u_t))-0.12*maxLength
			    		storageChannel.rotation.z = Math.PI/2
			    		storageChannel.rotation.y = Math.PI/2
						C_B_R_P.add(storageChannel); 
						// if(!params.isBreezeway) C_B_R_P.add(storageChannel); 
						// else c_b_b_s_f_w_h_c.add(storageChannel);
						const_var.c_b_h_c.push(storageChannel);
			    	}
			    }

			    if(params.cB_addStorage_check_front){
					let frontStorageBackWallHorizantalChannel = const_var.b_t_M_L.getObjectByName("leftChannel").clone();
					frontStorageBackWallHorizantalChannel.name = "frontStorageBackWallHorizantalChannel"
					frontStorageBackWallHorizantalChannel.scale.set(0.2,0.1,params.p_w);
					frontStorageBackWallHorizantalChannel.position.y =  i.toFixed(2)
					frontStorageBackWallHorizantalChannel.position.z =  params.p_d / 2 - Number(params.cB_addStorage_front)+0.12*maxLength
					frontStorageBackWallHorizantalChannel.rotation.z = Math.PI/2
					frontStorageBackWallHorizantalChannel.rotation.y = Math.PI/2
					C_B_R_P.add(frontStorageBackWallHorizantalChannel);
					// if(!params.isBreezeway) C_B_R_P.add(frontStorageBackWallHorizantalChannel); 
					// else c_b_f_s_b_w_h_c.add(frontStorageBackWallHorizantalChannel);
					const_var.c_b_h_c.push(frontStorageBackWallHorizantalChannel);
			    }
		    }
	    }

    //Center Building Left Front Trim
	let trimGeo = new THREE.BoxGeometry(0.25+0.1,1,0.2+0.1);
	let trimMaterial = new THREE.MeshBasicMaterial({color:0x0E6655,side:THREE.DoubleSide});
	var trimCalor = params.p_t_c.replace("#","0x");
	trimMaterial.color.setHex( trimCalor );

	let frontWallHeight = wallHeightCalculation(params.p_f_w,params.p_h,"front");
	let leftWallHeight = wallHeightCalculation(params.p_l_w,params.p_h,"left");
	let rightWallHeight = wallHeightCalculation(params.p_r_w,params.p_h,"right");
	let backWallHeight = wallHeightCalculation(params.p_b_w,params.p_h,"back");
	let rightLeanFrontWallHeight = wallHeightCalculation(params.p_b_c_b_r_f,params.leanR_p_h);
	let rightLeanBackWallHeight = wallHeightCalculation(params.p_b_c_b_r_b,params.leanR_p_h);
	let leftLeanFrontWallHeight = wallHeightCalculation(params.p_b_c_b_l_f,params.lean_p_h);
	let leftLeanBackWallHeight = wallHeightCalculation(params.p_b_c_b_l_b,params.lean_p_h);

	//Left Leg Front Trim For Top
	let finalLeftFrontHeight = Math.min(frontWallHeight,leftWallHeight)
	let finalLeftFrontHeightUpper = params.p_h
	if(params.add_left_lean == true && ((params.lean_p_d == params.p_d) || (params.leantoAlignmentLeft == "2") || (params.cB_addStorage_check_left == true && ((params.lean_p_d == params.p_d) || (params.leantoAlignmentLeft == "2")))) && params.p_b_c_b_l_f != "Open" && params.p_r_s != "1") finalLeftFrontHeight = params.lean_p_h + ((params.b_l_t_r_p/12)*params.lean_p_w) - 0.22
	if(params.singleSlope == true) {
		finalLeftFrontHeightUpper =  params.p_h - ((params.p_r_p/12)*params.p_w) - 0.22;
		let leftWallHeightSS = wallHeightCalculation(params.p_l_w,params.p_h - ((params.p_r_p/12)*params.p_w),"left");
		let frontWallHeightSS = wallHeightCalculation(params.p_f_w,params.p_h - ((params.p_r_p/12)*params.p_w),"front");
		finalLeftFrontHeight = Math.min(frontWallHeightSS,leftWallHeightSS)
    }

	let leftLegFrontTopTrimShape = new THREE.Shape();
	leftLegFrontTopTrimShape.moveTo(-params.p_w/2 -0.1 , finalLeftFrontHeight);
	leftLegFrontTopTrimShape.lineTo(-params.p_w/2 + 0.14, finalLeftFrontHeight);
	leftLegFrontTopTrimShape.lineTo(-params.p_w/2 + 0.14,finalLeftFrontHeightUpper); 
	leftLegFrontTopTrimShape.lineTo(-params.p_w/2 - 0.1,finalLeftFrontHeightUpper); 
	leftLegFrontTopTrimShape.closePath()
	
	let extrudeSettingsleftLegFrontTopTrim = {
	  steps: 1,
	  depth: 0.1,
	  bevelEnabled: false,
	  };

	let leftLegFrontTopTrimGeo = new THREE.ExtrudeGeometry( leftLegFrontTopTrimShape, extrudeSettingsleftLegFrontTopTrim );
	let leftLegFrontTopTrim = new THREE.Mesh( leftLegFrontTopTrimGeo, trimMaterial ) ;
	leftLegFrontTopTrim.name = "leftLegFrontTopTrim"
	leftLegFrontTopTrim.visible = true; 
	leftLegFrontTopTrim.position.z = params.p_d/2; 
	C_B_L_P.add(leftLegFrontTopTrim);
	translucent(leftLegFrontTopTrim);


    //Left Leg Front Trim For Bottom
	let frontWallHeightForBottomFront = (params.cB_addStorage_check_left == true) ? 0 : frontWallHeight
	let finalLeftFrontHeightForBottom = Math.max(frontWallHeightForBottomFront,leftLeanFrontWallHeight)
	let finalLeftFrontHeightForBottom2 = Math.min(frontWallHeightForBottomFront,leftLeanFrontWallHeight,leftWallHeight)

	let leftLegFrontBottomTrimShape = new THREE.Shape();
	leftLegFrontBottomTrimShape.moveTo(-params.p_w/2 -0.1 , finalLeftFrontHeightForBottom);
	leftLegFrontBottomTrimShape.lineTo(-params.p_w/2 + 0.14, finalLeftFrontHeightForBottom);
	leftLegFrontBottomTrimShape.lineTo(-params.p_w/2 + 0.14,finalLeftFrontHeightForBottom2); 
	leftLegFrontBottomTrimShape.lineTo(-params.p_w/2 - 0.1,finalLeftFrontHeightForBottom2); 
	leftLegFrontBottomTrimShape.closePath()
	
	let extrudeSettingsleftLegFrontBottomTrim = {
	  steps: 1,
	  depth: 0.1,
	  bevelEnabled: false,
	  };

	let leftLegFrontBottomTrimGeo = new THREE.ExtrudeGeometry( leftLegFrontBottomTrimShape, extrudeSettingsleftLegFrontBottomTrim );
	let leftLegFrontBottomTrim = new THREE.Mesh( leftLegFrontBottomTrimGeo, trimMaterial ) ;
	leftLegFrontBottomTrim.name = "leftLegFrontBottomTrim"
	leftLegFrontBottomTrim.visible = true; 
	leftLegFrontBottomTrim.position.z = params.p_d/2; 
	if(params.add_left_lean == true && ((params.lean_p_d == params.p_d) || (params.leantoAlignmentLeft == "2") || (params.cB_addStorage_check_left == true && ((params.lean_p_d == params.p_d) || (params.leantoAlignmentLeft == "2")))) && params.p_b_c_b_l_f != "Open") C_B_L_P.add(leftLegFrontBottomTrim);
	translucent(leftLegFrontBottomTrim);


	//Right Leg Front Trim For Top
	let s_l_height = 0
	let finalRightFrontHeight = Math.min(frontWallHeight,rightWallHeight)
	if(params.add_right_lean == true && ((params.leanR_p_d == params.p_d) || (params.leantoAlignmentRight == "2") || (params.cB_addStorage_check_right == true && ((params.leanR_p_d == params.p_d) || (params.leantoAlignmentRight == "2")))) && params.p_b_c_b_r_f != "Open" && params.p_r_s != "1") finalRightFrontHeight = params.leanR_p_h + ((params.b_l_t_r_pR/12)*params.leanR_p_w) - 0.22;
	if(params.singleSlope) {
		s_l_height = 0.22
		let rightWallHeightSS = wallHeightCalculation(params.p_r_w,params.p_h,"right");
		let frontWallHeightSS = wallHeightCalculation(params.p_f_w,params.p_h - ((params.p_r_p/12)*params.p_w),"front");
		if(params.p_f_w == "Open") frontWallHeightSS = params.p_h
		finalRightFrontHeight = Math.min(frontWallHeightSS,rightWallHeightSS)
		if(params.p_c_p_r && params.p_r_w == "Open" && params.p_f_w == "Open") finalRightFrontHeight = params.p_h - 2
	}
	if(finalRightFrontHeight > params.p_h) finalRightFrontHeight = params.p_h
    
	let rightLegFrontTopTrimShape = new THREE.Shape();
	rightLegFrontTopTrimShape.moveTo(params.p_w/2 +0.1 , finalRightFrontHeight);
	rightLegFrontTopTrimShape.lineTo(params.p_w/2 - 0.14, finalRightFrontHeight);
	rightLegFrontTopTrimShape.lineTo(params.p_w/2 - 0.14,params.p_h - s_l_height); 
	rightLegFrontTopTrimShape.lineTo(params.p_w/2 + 0.1,params.p_h - s_l_height); 
	rightLegFrontTopTrimShape.closePath()
	
	let extrudeSettingsrightLegFrontTopTrim = {
	  steps: 1,
	  depth: 0.1,
	  bevelEnabled: false,
	  };

	let rightLegFrontTopTrimGeo = new THREE.ExtrudeGeometry( rightLegFrontTopTrimShape, extrudeSettingsrightLegFrontTopTrim );
	let rightLegFrontTopTrim = new THREE.Mesh( rightLegFrontTopTrimGeo, trimMaterial ) ;
	rightLegFrontTopTrim.name = "rightLegFrontTopTrim"
	rightLegFrontTopTrim.visible = (params.p_r_w == "Open" && params.p_f_w == "Open" && !params.p_c_p_r) ? false : true; 
	rightLegFrontTopTrim.position.z = params.p_d/2; 
	C_B_L_P.add(rightLegFrontTopTrim);
	translucent(rightLegFrontTopTrim);


    //Right Leg Front Trim For Bottom
	let frontWallHeightForBottomFrontR = (params.cB_addStorage_check_right == true) ? 0 : frontWallHeight
	let finalRightFrontHeightForBottom = Math.max(frontWallHeightForBottomFrontR,rightLeanFrontWallHeight)
	let finalRightFrontHeightForBottom2 = Math.min(frontWallHeightForBottomFrontR,rightLeanFrontWallHeight,rightWallHeight)
	let rightLegFrontBottomTrimShape = new THREE.Shape();
	rightLegFrontBottomTrimShape.moveTo(params.p_w/2 +0.1 , finalRightFrontHeightForBottom);
	rightLegFrontBottomTrimShape.lineTo(params.p_w/2 - 0.14, finalRightFrontHeightForBottom);
	rightLegFrontBottomTrimShape.lineTo(params.p_w/2 - 0.14,finalRightFrontHeightForBottom2); 
	rightLegFrontBottomTrimShape.lineTo(params.p_w/2 + 0.1,finalRightFrontHeightForBottom2); 
	rightLegFrontBottomTrimShape.closePath()
	
	let extrudeSettingsrightLegFrontBottomTrim = {
	  steps: 1,
	  depth: 0.1,
	  bevelEnabled: false,
	  };

	let rightLegFrontBottomTrimGeo = new THREE.ExtrudeGeometry( rightLegFrontBottomTrimShape, extrudeSettingsrightLegFrontBottomTrim );
	let rightLegFrontBottomTrim = new THREE.Mesh( rightLegFrontBottomTrimGeo, trimMaterial ) ;
	rightLegFrontBottomTrim.name = "rightLegFrontBottomTrim"
	rightLegFrontBottomTrim.visible = true; 
	rightLegFrontBottomTrim.position.z = params.p_d/2; 
	if(params.add_right_lean == true && ((params.leanR_p_d == params.p_d) || (params.leantoAlignmentRight == "2") || (params.cB_addStorage_check_right == true && ((params.leanR_p_d == params.p_d) || (params.leantoAlignmentRight == "2")))) && params.p_b_c_b_r_f != "Open") C_B_L_P.add(rightLegFrontBottomTrim);
	translucent(rightLegFrontBottomTrim);

	//Left Leg Back Trim For Top
	let finalLeftBackHeight = Math.min(backWallHeight,leftWallHeight)
	let finalLeftBackHeightUpper = params.p_h
	if(params.add_left_lean == true && ((params.lean_p_d == params.p_d) || (params.leantoAlignmentLeft == "3") || (params.cB_addStorage_check_left == true && ((params.lean_p_d == params.p_d) || (params.leantoAlignmentLeft == "3")))) && params.p_b_c_b_l_b != "Open" && params.p_r_s != "1") finalLeftBackHeight = params.lean_p_h + ((params.b_l_t_r_p/12)*params.lean_p_w) - 0.22
	if(params.singleSlope == true) {
		finalLeftBackHeightUpper = params.p_h - ((params.p_r_p/12)*params.p_w) - 0.22;
		let leftWallHeightSS = wallHeightCalculation(params.p_l_w,params.p_h - ((params.p_r_p/12)*params.p_w),"left");
		let backWallHeightSS = wallHeightCalculation(params.p_b_w,params.p_h - ((params.p_r_p/12)*params.p_w),"front");
		finalLeftBackHeight = Math.min(backWallHeightSS,leftWallHeightSS)
	}

	if(finalLeftBackHeight > params.p_h) finalLeftBackHeight = params.p_h

	let leftLegBackTopTrimShape = new THREE.Shape();
	leftLegBackTopTrimShape.moveTo(-params.p_w/2 -0.1 , finalLeftBackHeight);
	leftLegBackTopTrimShape.lineTo(-params.p_w/2 + 0.14, finalLeftBackHeight);
	leftLegBackTopTrimShape.lineTo(-params.p_w/2 + 0.14,finalLeftBackHeightUpper); 
	leftLegBackTopTrimShape.lineTo(-params.p_w/2 - 0.1,finalLeftBackHeightUpper); 
	leftLegBackTopTrimShape.closePath()
	
	let extrudeSettingsleftLegBackTopTrim = {
	  steps: 1,
	  depth: 0.1,
	  bevelEnabled: false,
	  };

	let leftLegBackTopTrimGeo = new THREE.ExtrudeGeometry( leftLegBackTopTrimShape, extrudeSettingsleftLegBackTopTrim );
	let leftLegBackTopTrim = new THREE.Mesh( leftLegBackTopTrimGeo, trimMaterial ) ;
	leftLegBackTopTrim.name = "leftLegBackTopTrim"
	leftLegBackTopTrim.visible = true; 
	leftLegBackTopTrim.position.z = params.p_d/-2 - 0.1; 
	C_B_L_P.add(leftLegBackTopTrim);
	translucent(leftLegBackTopTrim);


    //Left Leg Back Trim For Bottom
	let frontWallHeightForBottomBack = (params.cB_addStorage_check_left == true) ? 0 : backWallHeight
	let finalLeftBackHeightForBottom = Math.max(frontWallHeightForBottomBack,leftLeanBackWallHeight)
	let finalLeftBackHeightForBottom2 = Math.min(frontWallHeightForBottomBack,leftLeanBackWallHeight,leftWallHeight)

	let leftLegBackBottomTrimShape = new THREE.Shape();
	leftLegBackBottomTrimShape.moveTo(-params.p_w/2 -0.1 , finalLeftBackHeightForBottom);
	leftLegBackBottomTrimShape.lineTo(-params.p_w/2 + 0.14, finalLeftBackHeightForBottom);
	leftLegBackBottomTrimShape.lineTo(-params.p_w/2 + 0.14,finalLeftBackHeightForBottom2); 
	leftLegBackBottomTrimShape.lineTo(-params.p_w/2 - 0.1,finalLeftBackHeightForBottom2); 
	leftLegBackBottomTrimShape.closePath()
	
	let extrudeSettingsleftLegBackBottomTrim = {
	  steps: 1,
	  depth: 0.1,
	  bevelEnabled: false,
	  };

	let leftLegBackBottomTrimGeo = new THREE.ExtrudeGeometry( leftLegBackBottomTrimShape, extrudeSettingsleftLegBackBottomTrim );
	let leftLegBackBottomTrim = new THREE.Mesh( leftLegBackBottomTrimGeo, trimMaterial ) ;
	leftLegBackBottomTrim.name = "leftLegBackBottomTrim"
	leftLegBackBottomTrim.visible = true; 
	leftLegBackBottomTrim.position.z = params.p_d/-2 - 0.1; 
	if(params.add_left_lean == true && ((params.lean_p_d == params.p_d) || (params.leantoAlignmentLeft == "3") || (params.cB_addStorage_check_left == true && ((params.lean_p_d == params.p_d) || (params.leantoAlignmentLeft == "3")))) && params.p_b_c_b_l_b != "Open") C_B_L_P.add(leftLegBackBottomTrim);
	translucent(leftLegBackBottomTrim);

	//Right Leg Back Trim For Top
	let finalRightBackHeight = Math.min(backWallHeight,rightWallHeight)
	if(params.add_right_lean == true && ((params.leanR_p_d == params.p_d) || (params.leantoAlignmentRight == "3") || (params.cB_addStorage_check_right == true && ((params.leanR_p_d == params.p_d) || (params.leantoAlignmentRight == "3")))) && params.p_b_c_b_r_b != "Open" && params.p_r_s != "1") finalRightBackHeight = params.leanR_p_h + ((params.b_l_t_r_pR/12)*params.leanR_p_w) - 0.22;
	
	if(params.singleSlope) {
		let rightWallHeightSS = wallHeightCalculation(params.p_r_w,params.p_h,"right");
		let frontWallHeightSS = wallHeightCalculation(params.p_b_w,params.p_h - ((params.p_r_p/12)*params.p_w),"front");
		if(params.p_b_w == "Open") frontWallHeightSS = params.p_h
		finalRightBackHeight = Math.min(frontWallHeightSS,rightWallHeightSS)
		if(params.p_c_p_r && params.p_r_w == "Open" && params.p_b_w == "Open") finalRightBackHeight = params.p_h - 2
	}

	if(finalRightBackHeight > params.p_h) finalRightBackHeight = params.p_h

	let rightLegBackTopTrimShape = new THREE.Shape();
	rightLegBackTopTrimShape.moveTo(params.p_w/2 +0.1 , finalRightBackHeight);
	rightLegBackTopTrimShape.lineTo(params.p_w/2 - 0.14, finalRightBackHeight);
	rightLegBackTopTrimShape.lineTo(params.p_w/2 - 0.14,params.p_h - s_l_height); 
	rightLegBackTopTrimShape.lineTo(params.p_w/2 + 0.1,params.p_h - s_l_height); 
	rightLegBackTopTrimShape.closePath()
	
	let extrudeSettingsrightLegBackTopTrim = {
	  steps: 1,
	  depth: 0.1,
	  bevelEnabled: false,
	  };

	let rightLegBackTopTrimGeo = new THREE.ExtrudeGeometry( rightLegBackTopTrimShape, extrudeSettingsrightLegBackTopTrim );
	let rightLegBackTopTrim = new THREE.Mesh( rightLegBackTopTrimGeo, trimMaterial ) ;
	rightLegBackTopTrim.name = "rightLegBackTopTrim"
	rightLegBackTopTrim.visible = (params.p_r_w == "Open" && params.p_b_w == "Open" && !params.p_c_p_r) ? false : true; 
	rightLegBackTopTrim.position.z = params.p_d/-2 - 0.1; 
	C_B_L_P.add(rightLegBackTopTrim);
	translucent(rightLegBackTopTrim);


    //Right Leg Back Trim For Bottom
	let frontWallHeightForBottomBackR = (params.cB_addStorage_check_right == true) ? 0 : backWallHeight
	let finalRightBackHeightForBottom = Math.max(frontWallHeightForBottomBackR,rightLeanBackWallHeight)
	let finalRightBackHeightForBottom2 = Math.min(frontWallHeightForBottomBackR,rightLeanBackWallHeight,rightWallHeight)
	let rightLegBackBottomTrimShape = new THREE.Shape();
	rightLegBackBottomTrimShape.moveTo(params.p_w/2 +0.1 , finalRightBackHeightForBottom);
	rightLegBackBottomTrimShape.lineTo(params.p_w/2 - 0.14, finalRightBackHeightForBottom);
	rightLegBackBottomTrimShape.lineTo(params.p_w/2 - 0.14,finalRightBackHeightForBottom2); 
	rightLegBackBottomTrimShape.lineTo(params.p_w/2 + 0.1,finalRightBackHeightForBottom2); 
	rightLegBackBottomTrimShape.closePath()
	
	let extrudeSettingsrightLegBackBottomTrim = {
	  steps: 1,
	  depth: 0.1,
	  bevelEnabled: false,
	  };

	let rightLegBackBottomTrimGeo = new THREE.ExtrudeGeometry( rightLegBackBottomTrimShape, extrudeSettingsrightLegBackBottomTrim );
	let rightLegBackBottomTrim = new THREE.Mesh( rightLegBackBottomTrimGeo, trimMaterial ) ;
	rightLegBackBottomTrim.name = "rightLegBackBottomTrim"
	rightLegBackBottomTrim.visible = true; 
	rightLegBackBottomTrim.position.z = params.p_d/-2 - 0.1; 
	if(params.add_right_lean == true && ((params.leanR_p_d == params.p_d) || (params.leantoAlignmentRight == "3") || (params.cB_addStorage_check_right == true && ((params.leanR_p_d == params.p_d) || (params.leantoAlignmentRight == "3")))) && params.p_b_c_b_r_b != "Open") C_B_L_P.add(rightLegBackBottomTrim);
	translucent(rightLegBackBottomTrim);


	// Back Storage Left-Front Trim
	let StorageLeftFrontTrimHeight = leftWallHeight
	if(params.p_l_w == "Open") StorageLeftFrontTrimHeight = params.p_h
	if(params.singleSlope == true) {
		let leftWallHeightSS = wallHeightCalculation(params.p_l_w,params.p_h - ((params.p_r_p/12)*params.p_w),"left");
		// let frontWallHeightSS = wallHeightCalculation(params.p_f_w,params.p_h - ((params.p_r_p/12)*params.p_w),"front");
		StorageLeftFrontTrimHeight = leftWallHeightSS+0.1
		if(params.p_l_w == "Open") StorageLeftFrontTrimHeight = StorageLeftFrontTrimHeight - 0.2
    }
	let backStorageLeftFrontTrimShape = new THREE.Shape();
	backStorageLeftFrontTrimShape.moveTo(-params.p_w/2 -0.1 , StorageLeftFrontTrimHeight);
	backStorageLeftFrontTrimShape.lineTo(-params.p_w/2 + 0.14, StorageLeftFrontTrimHeight);
	backStorageLeftFrontTrimShape.lineTo(-params.p_w/2 + 0.14,0); 
	backStorageLeftFrontTrimShape.lineTo(-params.p_w/2 - 0.1,0); 
	backStorageLeftFrontTrimShape.closePath()
	
	let extrudeSettingsbackStorageLeftFrontTrim = {
		steps: 1,
		depth: 0.1,
		bevelEnabled: false,
		};

	let backStorageLeftFrontTrimGeo = new THREE.ExtrudeGeometry( backStorageLeftFrontTrimShape, extrudeSettingsbackStorageLeftFrontTrim );
	let backStorageLeftFrontTrim = new THREE.Mesh( backStorageLeftFrontTrimGeo, trimMaterial ) ;
	backStorageLeftFrontTrim.name = "backStorageLeftFrontTrim"
	backStorageLeftFrontTrim.visible = true; 
	backStorageLeftFrontTrim.position.z = params.p_d/-2 + Number(params.p_u_t); 
	if(params.p_u_c == true && params.p_l_w != "Close") C_B_L_P.add(backStorageLeftFrontTrim);
	translucent(backStorageLeftFrontTrim);

	// Back Storage Right-Front Trim
	let StorageRightFrontTrimHeight = rightWallHeight
	if(params.singleSlope) StorageRightFrontTrimHeight = StorageRightFrontTrimHeight + 0.1
	if(params.p_r_w == "Open") StorageRightFrontTrimHeight = params.p_h
	let backStorageRightFrontTrimShape = new THREE.Shape();
	backStorageRightFrontTrimShape.moveTo(params.p_w/2 +0.1 , StorageRightFrontTrimHeight);
	backStorageRightFrontTrimShape.lineTo(params.p_w/2 - 0.14, StorageRightFrontTrimHeight);
	backStorageRightFrontTrimShape.lineTo(params.p_w/2 - 0.14,0); 
	backStorageRightFrontTrimShape.lineTo(params.p_w/2 + 0.1,0); 
	backStorageRightFrontTrimShape.closePath()
	
	let extrudeSettingsbackStorageRightFrontTrim = {
		steps: 1,
		depth: 0.1,
		bevelEnabled: false,
		};

	let backStorageRightFrontTrimGeo = new THREE.ExtrudeGeometry( backStorageRightFrontTrimShape, extrudeSettingsbackStorageRightFrontTrim );
	let backStorageRightFrontTrim = new THREE.Mesh( backStorageRightFrontTrimGeo, trimMaterial ) ;
	backStorageRightFrontTrim.name = "backStorageRightFrontTrim"
	backStorageRightFrontTrim.visible = true; 
	backStorageRightFrontTrim.position.z = params.p_d/-2 + Number(params.p_u_t); 
	if(params.p_u_c == true && params.p_r_w != "Close") C_B_L_P.add(backStorageRightFrontTrim);
	translucent(backStorageRightFrontTrim);


// 	/* Free Standing Lean To Right Front Leg Trim */
	
// 	var f_S_L_R_LegFrontTrim = new THREE.Mesh(trimGeo,trimMaterial);
// 	f_S_L_R_LegFrontTrim.name = "f_S_L_R_FrontTrimLeg";
// 	f_S_L_R_LegFrontTrim.visible = false
// 	f_S_L_R_LegFrontTrim.scale.set(0.5+0.17, params.p_h+0.07,0.7);

//     f_S_L_R_LegFrontTrim.position.set(params.p_w/2-0.018,params.p_h/2-0.06,params.p_d/2);

// 	var wH = params.p_h;
// 	var wP = params.p_h - wH/2;

// 	if(params.singleSlope) wH = params.p_h - ((Number(params.p_r_p)/12) * params.p_w);

// 	f_S_L_R_LegFrontTrim.position.y = wP;				
// 	f_S_L_R_LegFrontTrim.scale.set(params.p_w ,wH ,0);

// 	switch(params.p_f_w)
// 	{
// 		case "One_Fourth_Close":
// 			wH = wH/4;
// 			if (params.singleSlope) wH = (params.p_h + 3 * ((Number(params.p_r_p)/12) * params.p_w))/4;
// 			wP = params.p_h - wH/2;
// 			break;
// 		case "Half_Close":
// 			wH = wH/2;
// 			if (params.singleSlope) wH = (params.p_h + ((Number(params.p_r_p)/12) * params.p_w))/2;
// 			wP = params.p_h - wH/2;
// 			break;					
// 		case "Three_Fourth_Close":
// 			wH = wH * 3/4;
// 			if (params.singleSlope) wH = (params.p_h * 3/4 + ((Number(params.p_r_p)/12) * params.p_w)/4) ;
// 			wP = params.p_h - wH/2;
// 			break;
// 		case "Extended Gable":
// 			wH = 3 ;
// 			if (params.singleSlope) wH = 3 + ((Number(params.p_r_p)/12) * params.p_w);
// 			wP = params.p_h - wH/2;
// 			break;
// 		case "Gable":
// 			wH = 0.2;
// 			if (params.singleSlope) wH = 0.2 + ((Number(params.p_r_p)/12) * params.p_w);
// 			wP = params.p_h - wH/2; 
// 			break;
// 		case "Close":
// 			wH = params.p_h;
// 			wP = params.p_h - wH/2;
// 			break;
// 		default:
// 			f_S_L_R_LegFrontTrim.visible = false; 
// 			break;
			
// 	}

// 	// if(params.singleSlope == true){
// 	// 	wH = wH + ((f_S_LeanLegScale[params.p_r_p][params.p_w]));
// 	// 	wP = wP + ((f_S_LeanLegScale[params.p_r_p][params.p_w])/2);
// 	// }
// 	f_S_L_R_LegFrontTrim.position.y = wP - 0.1;				
// 	f_S_L_R_LegFrontTrim.scale.set(0.5+0.07, wH - 0.15, 0.7);
	
// 	// if (params.singleSlope) {
// 	// 	f_S_L_R_LegFrontTrim.position.y = wP - f_S_LeanLegScale[params.p_r_p][params.p_w]/2;				
// 	// 	f_S_L_R_LegFrontTrim.scale.set(0.5+0.07, wH- f_S_LeanLegScale[params.p_r_p][params.p_w], 0.7);
// 	// }
// 	F_S_L_RightLegs.add(f_S_L_R_LegFrontTrim);
// 	translucent(f_S_L_R_LegFrontTrim);

// 	/* Free Standing Lean To Right Front Leg Trim for right wall */
// if (params.singleSlope) {
// 	var f_S_L_R_LegFrontTrimR = new THREE.Mesh(trimGeo,trimMaterial);
// 	f_S_L_R_LegFrontTrimR.name = "f_S_L_R_FrontTrimRLeg";
// 	f_S_L_R_LegFrontTrimR.visible = false
// 	f_S_L_R_LegFrontTrimR.scale.set(0.5+0.17, params.p_h+0.07,0.5);
// 	f_S_L_R_LegFrontTrimR.position.set(params.p_w/2-0.018,params.p_h/2-0.06,params.p_d/2+0.02);

// 	var wH = params.p_h;
// 	var wP = params.p_h - wH/2;

// 		f_S_L_R_LegFrontTrimR.position.y = wP;				
// 		f_S_L_R_LegFrontTrimR.scale.set(params.p_w,wH,0);
				
// 		switch(params.p_r_w)
// 		{
// 			case "One_Fourth_Close":
// 				wH = wH/4;
// 				wP = params.p_h -( wH/2);
// 				break;
// 			case "Half_Close":
// 				wH = wH/2 ;
// 				wP = params.p_h -( wH/2);
// 				break;                          
// 			case "Three_Fourth_Close":
// 				wH = wH * 3/4;
// 				wP = params.p_h -( wH/2);
// 				break;
// 			case "Open":
// 				f_S_L_R_LegFrontTrimR.visible = false;
// 				wH = 0;
// 				wP = params.p_h - wH/2; 
// 				break;				
// 			case "Close":
// 				wH =  params.p_h;
// 				wP = params.p_h -( wH/2);
// 				break;
// 			default:	
// 				if(params.p_r_w=="Open" ){    
// 					f_S_L_R_LegFrontTrimR.visible = false;
// 				} else {
// 					// if(params.add_right_lean!=true)
// 					// {
// 						wH = Math.abs(params.p_r_w.replace(/\D/g, "")) * 3;
// 					    wP = params.p_h - wH/2;
// 					// }
// 				}
// 				break;
// 		}
// 		if(params.p_r_w=="Open" && params.p_c_p_r==true && params.singleSlope == true) {
// 		 wH = 2;
// 		 wP = params.p_h - wH/2;
// 		 f_S_L_R_LegFrontTrimR.visible = true;
// 		}
// 		if(params.p_r_w!=="Open" && params.p_c_p_r==true) {
// 		 wH = wH + 1.5;
// 		 wP = params.p_h - wH/2;
// 		}

// 		if(params.p_c_p_r==true && wH >= params.p_h){
// 			wH = wH - 1.5;
// 			wP = params.p_h - wH/2;
// 		}

// 		if(params.cB_addStorage_check_right == true && params.singleSlope==true) {
// 			wH = params.p_h;
// 			wP = params.p_h - wH/2;
// 			f_S_L_R_LegFrontTrimR.visible = false;
// 		}	
// 	f_S_L_R_LegFrontTrimR.position.y = wP;				
// 	f_S_L_R_LegFrontTrimR.scale.set(0.5+0.07, wH, 0.7);
// 	if (params.singleSlope) {
// 		f_S_L_R_LegFrontTrimR.position.y = wP - 0.1;				
// 		f_S_L_R_LegFrontTrimR.scale.set(0.5+0.07, wH -0.15, 0.7);
// 	}
// 	F_S_L_RightLegs.add(f_S_L_R_LegFrontTrimR);
// 	translucent(f_S_L_R_LegFrontTrimR);
// }
	
// 	/* Free Standing Lean To Right Back Leg Trim*/
// 	var f_S_L_R_LegBackTrim = new THREE.Mesh(trimGeo,trimMaterial);
// 	f_S_L_R_LegBackTrim.name = "f_S_L_R_BackTrimLeg";
// 	f_S_L_R_LegBackTrim.visible = false
// 	f_S_L_R_LegBackTrim.scale.set(0.5+0.17, params.p_h+0.07,0.5);
// 	f_S_L_R_LegBackTrim.position.set(params.p_w/2-0.018,params.p_h/2-0.06,params.p_d/-2);

// 	var wH = params.p_h;
// 	var wP = params.p_h - wH/2;

// 	if(params.singleSlope) wH = params.p_h - ((Number(params.p_r_p)/12) * params.p_w);

// 	f_S_L_R_LegBackTrim.position.y = wP;				
// 	f_S_L_R_LegBackTrim.scale.set(params.p_w,wH,0);
	
// 	switch(params.p_b_w)
// 	{
// 		case "One_Fourth_Close":
// 			wH = wH/4;
// 			if (params.singleSlope) wH = (params.p_h + 3 * ((Number(params.p_r_p)/12) * params.p_w))/4;
// 			wP = params.p_h - wH/2;
// 			break;
// 		case "Half_Close":
// 			wH = wH/2;
// 			if (params.singleSlope) wH = (params.p_h + ((Number(params.p_r_p)/12) * params.p_w))/2;
// 			wP = params.p_h - wH/2;
// 			break;					
// 		case "Three_Fourth_Close":
// 			wH = wH * 3/4;
// 			if (params.singleSlope) wH = (params.p_h * 3/4 + ((Number(params.p_r_p)/12) * params.p_w)/4) ;
// 			wP = params.p_h - wH/2;
// 			break;
// 		case "Extended Gable":
// 			wH = 3;
// 			if (params.singleSlope) wH = 3 + ((Number(params.p_r_p)/12) * params.p_w);
// 			wP = params.p_h - wH/2;
// 			break;
// 		case "Gable":
// 			wH = 0.2;
// 			if (params.singleSlope) wH = 0.2 + ((Number(params.p_r_p)/12) * params.p_w);
// 			wP = params.p_h - wH/2; 
// 			break;
// 		case "Close":
// 			wH = params.p_h;
// 			wP = params.p_h - wH/2;
// 			break;
// 		default:
// 			f_S_L_R_LegBackTrim.visible = false; 
// 			break;
			
// 	}

// 	// if(params.singleSlope == true){
// 	// 	wH = wH + ((f_S_LeanLegScale[params.p_r_p][params.p_w]));
// 	// 	wP = wP + ((f_S_LeanLegScale[params.p_r_p][params.p_w])/2);
// 	// }

// 	f_S_L_R_LegBackTrim.position.y = wP - 0.1;				
// 	f_S_L_R_LegBackTrim.scale.set(0.5+0.07, wH - 0.15, 0.7);

// 	// if (params.singleSlope) {		
// 	// 	f_S_L_R_LegBackTrim.position.y = wP - f_S_LeanLegScale[params.p_r_p][params.p_w]/2;				
// 	// 	f_S_L_R_LegBackTrim.scale.set(0.5+0.07, wH- f_S_LeanLegScale[params.p_r_p][params.p_w], 0.7);
// 	// }
// 	F_S_L_RightLegs.add(f_S_L_R_LegBackTrim);

// 	/* Free Standing Lean To Right Back Leg Trim for right wall */
// 	if (params.singleSlope){
// 	var f_S_L_R_LegBackTrimR = new THREE.Mesh(trimGeo,trimMaterial);
// 	f_S_L_R_LegBackTrimR.name = "f_S_L_R_BackTrimRLeg";
// 	f_S_L_R_LegBackTrimR.visible = false
// 	f_S_L_R_LegBackTrimR.scale.set(0.5+0.17, params.p_h+0.07,0.5);
// 	f_S_L_R_LegBackTrimR.position.set(params.p_w/2-0.018,params.p_h/2 +f_S_LeanLegHeight[params.p_r_p][params.p_w]-0.06,params.p_d/-2-0.02);

// 	var wH = params.p_h;
// 	var wP = params.p_h - wH/2;
	
// 		f_S_L_R_LegBackTrimR.position.y = wP;				
// 		f_S_L_R_LegBackTrimR.scale.set(params.p_w,wH,0);
		
// 		switch(params.p_r_w)
// 		{
// 			case "One_Fourth_Close":
// 				wH = wH/4;
// 				wP = params.p_h -( wH/2);
// 				break;
// 			case "Half_Close":
// 				wH = wH/2 ;
// 				wP = params.p_h -( wH/2);
// 				break;                          
// 			case "Three_Fourth_Close":
// 				wH = wH* 3/4;
// 				wP = params.p_h -( wH/2);
// 				break;
// 			case "Open":
// 				f_S_L_R_LegBackTrimR.visible = false;
// 				wH = 0;
// 				wP = params.p_h - wH/2; 
// 				break;				
// 			case "Close":
// 				wH =  params.p_h;
// 				wP = params.p_h -( wH/2);
// 				break;
// 			default:
// 				if(params.p_r_w=="Open" ) {    
// 					f_S_L_R_LegBackTrimR.visible = false;
// 				} else {
// 					// if(params.add_right_lean!=true)
// 					// {
// 						wH = Math.abs(params.p_r_w.replace(/\D/g, "")) * 3;
// 						wP = params.p_h - wH/2;
// 					// }
// 				}
// 				break;
// 		}
// 		if(params.p_r_w=="Open" && params.p_c_p_r==true  && params.singleSlope == true){
// 			wH = 2	;
// 			wP = params.p_h - wH/2;
// 			f_S_L_R_LegBackTrimR.visible = false;
// 		}
// 		if(params.p_r_w!=="Open" && params.p_c_p_r==true) {
// 			wH = wH + 1.5;
// 			wP = params.p_h - wH/2;
// 		}

// 		if(params.p_c_p_r==true && wH >= params.p_h){
// 			wH = wH - 1.5;
// 			wP = params.p_h - wH/2;
// 		}
// 		if(params.cB_addStorage_check_right == true && params.singleSlope==true){
// 			wH = params.p_h;
// 			wP = params.p_h - wH/2;
// 			f_S_L_R_LegBackTrimR.visible = false;
// 		}
//       if (params.singleSlope == true && params.p_u_c == true ) {
// 		wH = params.p_h;
// 		wP = params.p_h - wH/2; 
// 		f_S_L_R_LegBackTrimR.visible = false;
// 	  }
// 	f_S_L_R_LegBackTrimR.position.y = wP;				
// 	f_S_L_R_LegBackTrimR.scale.set(0.5+0.07, wH, 0.7);

// 	if (params.singleSlope) {
// 		f_S_L_R_LegBackTrimR.position.y = wP - 0.1;				
// 		f_S_L_R_LegBackTrimR.scale.set(0.5+0.07, wH -0.15, 0.7);
// 	}

// 	F_S_L_RightLegs.add(f_S_L_R_LegBackTrimR);
// 	translucent(f_S_L_R_LegBackTrimR);

// 		/* Free Standing Lean-to stoarage Right Front Trim */
// 		const f_S_LstoarageRightFrontTrim = F_S_L_RightLegs.getObjectByName("f_S_L_R_BackTrimRLeg").clone();
// 		f_S_LstoarageRightFrontTrim.name = "f_S_LstoarageRightFrontTrim";
// 		f_S_LstoarageRightFrontTrim.position.z = params.p_d /-2+ parseInt(params.p_u_t);
// 		f_S_LstoarageRightFrontTrim.visible = (params.p_u_c ==true && params.singleSlope == true && params.p_r_w != "Close")?true:false;
// 		F_S_L_RightLegs.add(f_S_LstoarageRightFrontTrim);
// 		translucent(f_S_LstoarageRightFrontTrim);
// 	}
    // Front Trim For Center Building Left Storage 
	let L_S_trimGeo = new THREE.BoxGeometry(0.25+0.1,1,0.2+0.1);
	var trimCalor = params.p_t_c.replace("#","0x");
	let L_S_trimMaterial = new THREE.MeshBasicMaterial({color:trimCalor,side:THREE.DoubleSide});
	let cb_L_S_FrontTrim = new THREE.Mesh(L_S_trimGeo,L_S_trimMaterial);
	let rts = 0;
	let rtp = 0;
	if(params.p_r_s=="1"){
		 rts = 0.4;
	     rtp = 0.2;
	}
	cb_L_S_FrontTrim.name = "CB_L_S_F_T";
	if(params.p_f_w=="Open"){
	      if(params.cB_addStorage_left <= params.p_w /2 || params.singleSlope == true || params.canopy == true){
	      cb_L_S_FrontTrim.scale.set(0.5+0.17, params.p_h+(params.cB_addStorage_left*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2)))+rts, 0.7);
	      cb_L_S_FrontTrim.position.set(-(params.p_w/2 - params.cB_addStorage_left),((params.p_h+(params.cB_addStorage_left*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2))))/2)+rtp,params.p_d/2);
	      }else{
	      cb_L_S_FrontTrim.scale.set(0.5+0.17, 0, 0.7);
	      cb_L_S_FrontTrim.position.set(-(params.p_w/2 - params.cB_addStorage_left),0,params.p_d/2);
	      cb_L_S_FrontTrim.scale.y =(params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_left-(params.p_w/2))*(params.p_r_p/12))+rts
	      cb_L_S_FrontTrim.position.y = (((params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_left-(params.p_w/2))*(params.p_r_p/12)))/2)+rtp
	      }
    }else{
		              
		let wH = params.p_h;
		let wP = params.p_h - wH/2;
		
		

		switch(params.p_f_w )
		{
			case "One_Fourth_Close":
				if (params.singleSlope) {
					wH = (params.p_h-(wH - ((Number(params.p_r_p)/12) * params.p_w))/4) + 0.1;
					wP = params.p_h - wH/2-((params.p_h - ((Number(params.p_r_p)/12) * params.p_w))/4) + 0.05;
				} else {
					wH = params.p_h-wH/4;
					wP = params.p_h - wH/2-(params.p_h/4);
				}
				break;
			case "Half_Close":
				if (params.singleSlope) {
					wH = (params.p_h-(wH- ((Number(params.p_r_p)/12) * params.p_w))/2) + 0.1;
					wP = params.p_h - wH/2-((params.p_h - ((Number(params.p_r_p)/12) * params.p_w))/2) + 0.05;
				} else {
					wH = params.p_h-wH/2;
					wP = params.p_h - wH/2-(params.p_h/2);
				}
				break;					
			case "Three_Fourth_Close":
				if (params.singleSlope) {
					wH = (params.p_h-(wH - ((Number(params.p_r_p)/12) * params.p_w))* 3/4) + 0.1;
					wP = params.p_h - wH/2-((params.p_h - ((Number(params.p_r_p)/12) * params.p_w))*3/4) + 0.05;					
				} else {
					wH = params.p_h-wH * 3/4;
					wP = params.p_h - wH/2-(params.p_h*3/4);
				}
				break;
			case "Extended Gable":
				if (params.singleSlope) {
					wH =params.p_h- 3 + 0.1;
					wP = params.p_h - wH/2-(3) + 0.05;
				}else{
					wH =params.p_h- 3;
					wP = params.p_h - wH/2-(3);
				}
				break;
			case "Gable":
				wH = (params.p_h)-0.1;
				wP = params.p_h - (wH/2)-0.1; 
				break;
			case "Close":
				wH =params.p_h- params.p_h;
				wP = (params.p_h - wH/2);
				break;
			default:
				break;
		}

		let hdfp = params.p_h - (params.leanF_p_h + (parseInt(params.b_l_t_r_pF)/12) * params.leanF_p_w);
		if(params.add_front_lean ==true && Object.values(const_var.wallArray["front"])[0] == params.p_f_w || params.add_front_lean ==true && params.p_f_w == "Open")
		{    
		  // wH = (params.p_w == params.p_f_w )?hdfp+0.2:hdfp;
		  // wP = params.p_h - wH/2;
		  wH = params.p_h - hdfp;
		  wP = wH/2;
		  cb_L_S_FrontTrim.visible = true; 
		}

		cb_L_S_FrontTrim.scale.set(0.5+0.07,wH, 0.7);
		cb_L_S_FrontTrim.position.set(-(params.p_w/2 - params.cB_addStorage_left),wP,params.p_d/2);

	}
	if (params.singleSlope)		 {
		cb_L_S_FrontTrim.scale.y -= ((Number(params.p_r_p)/12) * params.p_w) +0.1;
		cb_L_S_FrontTrim.position.y -= ((Number(params.p_r_p)/12) * params.p_w)/2;
	}
	cb_L_S_FrontTrim.visible = (params.cB_addStorage_check_left!=false && params.p_f_w != "Close")?true:false;
	if (cb_L_S_FrontTrim.visible) translucent(cb_L_S_FrontTrim); 
	C_B_L_P.add(cb_L_S_FrontTrim);

    	// Back Trim For Center Building Left Storage 
	let cb_L_S_trimGeo = new THREE.BoxGeometry(0.25+0.1,1,0.2+0.1);
	let cb_L_S_trimMaterial = new THREE.MeshBasicMaterial({color:trimCalor,side:THREE.DoubleSide});
	let cb_L_S_BackTrim = new THREE.Mesh(cb_L_S_trimGeo,cb_L_S_trimMaterial);
	cb_L_S_BackTrim.name = "CB_L_S_B_T";
	if(params.p_b_w=="Open"){
	    if(params.cB_addStorage_left <= params.p_w /2 || params.singleSlope == true || params.canopy == true){
	      cb_L_S_BackTrim.scale.set(0.5+0.17, params.p_h+(params.cB_addStorage_left*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2)))+rts, 0.5);
	      cb_L_S_BackTrim.position.set(-(params.p_w/2 - params.cB_addStorage_left),((params.p_h+(params.cB_addStorage_left*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2))))/2)+rtp,params.p_d/-2);
	    }else{
	      cb_L_S_BackTrim.scale.set(0.5+0.17, 0, 0.5);
	      cb_L_S_BackTrim.position.set(-(params.p_w/2 - params.cB_addStorage_left),0,params.p_d/-2);
	      cb_L_S_BackTrim.scale.y =(params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_left-(params.p_w/2))*(params.p_r_p/12))+rts
	      cb_L_S_BackTrim.position.y = (((params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_left-(params.p_w/2))*(params.p_r_p/12)))/2)+rtp
	    }
    }else{		
		let wH = params.p_h;
		let wP = params.p_h - wH/2;
		
		

		switch(params.p_b_w )
		{
			case "One_Fourth_Close":
				if (params.singleSlope) {
					wH = (params.p_h-(wH - ((Number(params.p_r_p)/12) * params.p_w))/4) + 0.1;
					wP = params.p_h - wH/2-((params.p_h- ((Number(params.p_r_p)/12) * params.p_w))/4) + 0.05;
				} else {
					wH = params.p_h-wH/4;
					wP = params.p_h - wH/2-(params.p_h/4);
				}
				break;
			case "Half_Close":
				if (params.singleSlope) {
					wH = (params.p_h-(wH- ((Number(params.p_r_p)/12) * params.p_w))/2) + 0.1;
					wP = params.p_h - wH/2-((params.p_h- ((Number(params.p_r_p)/12) * params.p_w))/2) + 0.05;
				} else {
					wH = params.p_h-wH/2;
					wP = params.p_h - wH/2-(params.p_h/2);
				}
				break;					
			case "Three_Fourth_Close":
				if (params.singleSlope) {
					wH = (params.p_h-(wH - ((Number(params.p_r_p)/12) * params.p_w))* 3/4) + 0.1;
					wP = params.p_h - wH/2-((params.p_h- ((Number(params.p_r_p)/12) * params.p_w))*3/4) + 0.05;					
				} else {
					wH = params.p_h-wH * 3/4;
					wP = params.p_h - wH/2-(params.p_h*3/4);
				}
				break;
			case "Extended Gable":
				if (params.singleSlope) {
					wH =params.p_h- 3 + 0.1;
					wP = params.p_h - wH/2-(3) + 0.05;
				}else{
					wH =params.p_h- 3;
					wP = params.p_h - wH/2-(3);
				}
				break;
			case "Gable":
				wH = (params.p_h)-0.1;
				wP = params.p_h - (wH/2)-0.1; 
				break;
			case "Close":
				wH =params.p_h- params.p_h;
				wP = (params.p_h - wH/2);
				break;
			default:
				break;
		}

		let hdfp = params.p_h - (params.leanB_p_h + (parseInt(params.b_l_t_r_pB)/12) * params.leanB_p_w);
		if(params.add_back_lean && Object.values(const_var.wallArray["back"])[0] == params.p_b_w || params.add_back_lean ==true && params.p_b_w == "Open")
		{    
			wH = params.p_h - hdfp;
			wP = wH/2;
			cb_L_S_BackTrim.visible = true; 
		} 
	

		cb_L_S_BackTrim.scale.set(0.5+0.17,wH, 0.5);
		cb_L_S_BackTrim.position.set(-(params.p_w/2 - params.cB_addStorage_left),wP,params.p_d/-2);
	}

	if (params.singleSlope)	{
		cb_L_S_BackTrim.scale.y -= (Number(params.p_r_p)/12) * params.p_w +0.1;
		cb_L_S_BackTrim.position.y -= ((Number(params.p_r_p)/12) * params.p_w)/2;
	}

	cb_L_S_BackTrim.visible = (params.cB_addStorage_check_left!=false && params.p_u_c==false  && params.p_b_w != "Close")?true:false;
	if (cb_L_S_BackTrim.visible) translucent(cb_L_S_BackTrim); 
	C_B_L_P.add(cb_L_S_BackTrim);

    	//Left Front Trim For Center Building Right Storage 
	let cb_R_S_trimGeo = new THREE.BoxGeometry(0.25+0.1,1,0.2+0.1);
	let cb_R_S_trimMaterial = new THREE.MeshBasicMaterial({color:trimCalor,side:THREE.DoubleSide});
	let cb_R_S_FrontTrim = new THREE.Mesh(cb_R_S_trimGeo,cb_R_S_trimMaterial);
	cb_R_S_FrontTrim.name = "CB_R_S_F_T";
	if(params.p_f_w=="Open"){
	if(params.cB_addStorage_right <= params.p_w /2){
	cb_R_S_FrontTrim.scale.set(0.5+0.17, params.p_h+(params.cB_addStorage_right*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2)))+rts, 0.7);
	cb_R_S_FrontTrim.position.set(params.p_w/2 - params.cB_addStorage_right,((params.p_h+(params.cB_addStorage_right*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2))))/2)+rtp,params.p_d/2);
	}else{
	cb_R_S_FrontTrim.scale.set(0.5+0.17, 0, 0.7);
	cb_R_S_FrontTrim.position.set(params.p_w/2 - params.cB_addStorage_right,0,params.p_d/2);
	cb_R_S_FrontTrim.scale.y =(params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12))+rts
	cb_R_S_FrontTrim.position.y = (((params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12)))/2)+rtp
	}
	if (params.singleSlope == true || params.canopy == true) {
		cb_R_S_FrontTrim.scale.set(0.5+0.17, 0, 0.7);
		cb_R_S_FrontTrim.position.set(params.p_w/2 - params.cB_addStorage_right,0,params.p_d/2);
		cb_R_S_FrontTrim.scale.y =(params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12))+rts
		cb_R_S_FrontTrim.position.y = (((params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12)))/2)+rtp
	}
    }else{
		let wH = params.p_h;
		let wP = params.p_h - wH/2;
		
		

		switch(params.p_f_w )
		{
			case "One_Fourth_Close":
				if (params.singleSlope) {
					wH = (params.p_h-(wH - ((Number(params.p_r_p)/12) * params.p_w))/4) + 0.1;
					wP = params.p_h - wH/2-((params.p_h- ((Number(params.p_r_p)/12) * params.p_w))/4) + 0.05;
					} else {
					wH = params.p_h-wH/4;
					wP = params.p_h - wH/2-(params.p_h/4);
				}
				break;
			case "Half_Close":
				if (params.singleSlope) {
					wH = (params.p_h-(wH- ((Number(params.p_r_p)/12) * params.p_w))/2) + 0.1;
					wP = params.p_h - wH/2-((params.p_h- ((Number(params.p_r_p)/12) * params.p_w))/2) + 0.05;
				} else {
					wH = params.p_h-wH/2;
					wP = params.p_h - wH/2-(params.p_h/2);
				}
				break;					
			case "Three_Fourth_Close":
				if (params.singleSlope) {
					wH = (params.p_h-(wH - ((Number(params.p_r_p)/12) * params.p_w))* 3/4) + 0.1;
					wP = params.p_h - wH/2-((params.p_h- ((Number(params.p_r_p)/12) * params.p_w))*3/4) + 0.05;					
				} else {
					wH = params.p_h-wH * 3/4;
					wP = params.p_h - wH/2-(params.p_h*3/4);
				}
				break;
			case "Extended Gable":
				if (params.singleSlope) {
					wH =params.p_h- 3 + 0.1;
					wP = params.p_h - wH/2-(3) + 0.05;
				}else{
					wH =params.p_h- 3;
					wP = params.p_h - wH/2-(3);
				}
				break;
			case "Gable":
				wH = (params.p_h)-0.1;
				wP = params.p_h - (wH/2)-0.1; 
				break;
			case "Close":
				wH =params.p_h- params.p_h;
				wP = (params.p_h - wH/2);
				break;
			default:
				break;
		}

	let hdfp = params.p_h - (params.leanF_p_h + (parseInt(params.b_l_t_r_pF)/12) * params.leanF_p_w);
		if(params.add_front_lean ==true && Object.values(const_var.wallArray["front"])[0] == params.p_f_w || params.add_front_lean ==true && params.p_f_w == "Open") {    
		  wH = params.p_h - hdfp;
		  wP = wH/2;
		}
		cb_R_S_FrontTrim.scale.set(0.5+0.17,wH, 0.7);
		cb_R_S_FrontTrim.position.set(params.p_w/2 - params.cB_addStorage_right,wP,params.p_d/2);
	}		

	if (params.singleSlope)		 {
		cb_R_S_FrontTrim.scale.y -= ((Number(params.p_r_p)/12) * params.p_w) +0.1;
		cb_R_S_FrontTrim.position.y -= ((Number(params.p_r_p)/12) * params.p_w)/2;
	}

	cb_R_S_FrontTrim.visible = (params.cB_addStorage_check_right!=false && params.p_f_w != "Close")?true:false;
	if (cb_R_S_FrontTrim.visible) translucent(cb_R_S_FrontTrim); 
	C_B_L_P.add(cb_R_S_FrontTrim);
   

	//Left Back Trim For Center Building Right Storage 
	let cb_R_S_B_trimGeo = new THREE.BoxGeometry(0.25+0.1,1,0.2+0.1);
	let cb_R_S_B_trimMaterial = new THREE.MeshBasicMaterial({color:trimCalor,side:THREE.DoubleSide});
	let cb_R_S_BackTrim = new THREE.Mesh(cb_R_S_B_trimGeo,cb_R_S_B_trimMaterial);
	cb_R_S_BackTrim.name = "CB_R_S_B_T";

	if(params.p_b_w=="Open"){

	if(params.cB_addStorage_right <= params.p_w /2){
	cb_R_S_BackTrim.scale.set(0.5+0.17, params.p_h+(params.cB_addStorage_right*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2)))+rts, 0.5);
	cb_R_S_BackTrim.position.set(params.p_w/2 - params.cB_addStorage_right,((params.p_h+(params.cB_addStorage_right*(roofMiddleHeight[params.p_r_p][params.p_w]/(params.p_w/2))))/2)+rtp,params.p_d/-2);
	}else{
	cb_R_S_BackTrim.scale.set(0.5+0.17, 0, 0.5);
	cb_R_S_BackTrim.position.set(params.p_w/2 - params.cB_addStorage_right,0,params.p_d/-2);
	cb_R_S_BackTrim.scale.y =(params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12))+rts
	cb_R_S_BackTrim.position.y = (((params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12)))/2)+rtp
	}
	if (params.singleSlope == true || params.canopy == true) {
	cb_R_S_BackTrim.scale.set(0.5+0.17, 0, 0.5);
	cb_R_S_BackTrim.position.set(params.p_w/2 - params.cB_addStorage_right,0,params.p_d/-2);
	cb_R_S_BackTrim.scale.y =(params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12))+rts
	cb_R_S_BackTrim.position.y = (((params.p_h+(roofMiddleHeight[params.p_r_p][params.p_w]))-((params.cB_addStorage_right-(params.p_w/2))*(params.p_r_p/12)))/2)+rtp	
	}
    }else{
    	let wH = params.p_h;
    	let wP = params.p_h - wH/2;
    	
    	
    
    	switch(params.p_b_w )
    	{
    		case "One_Fourth_Close":
				if (params.singleSlope) {
					wH = (params.p_h-(wH - ((Number(params.p_r_p)/12) * params.p_w))/4) + 0.1;
					wP = params.p_h - wH/2-((params.p_h- ((Number(params.p_r_p)/12) * params.p_w))/4) + 0.05;
				} else {
    			wH = params.p_h-wH/4;
    			wP = params.p_h - wH/2-(params.p_h/4);
				}
    			break;
    		case "Half_Close":
				if (params.singleSlope) {
					wH = (params.p_h-(wH- ((Number(params.p_r_p)/12) * params.p_w))/2) + 0.1;
					wP = params.p_h - wH/2-((params.p_h- ((Number(params.p_r_p)/12) * params.p_w))/2) + 0.05;
				} else {
    			wH = params.p_h-wH/2;
    			wP = params.p_h - wH/2-(params.p_h/2);
				}
    			break;					
    		case "Three_Fourth_Close":
				if (params.singleSlope) {
					wH = (params.p_h-(wH - ((Number(params.p_r_p)/12) * params.p_w))* 3/4) + 0.1;
					wP = params.p_h - wH/2-((params.p_h- ((Number(params.p_r_p)/12) * params.p_w))*3/4) + 0.05;					
				} else {
    			wH = params.p_h-wH * 3/4;
    			wP = params.p_h - wH/2-(params.p_h*3/4);
				}
    			break;
    		case "Extended Gable":
				if (params.singleSlope) {
					wH =params.p_h- 3 + 0.1;
					wP = params.p_h - wH/2-(3) + 0.05;
				}else{
				    wH =params.p_h- 3;
					wP = params.p_h - wH/2-(3);	
				}
    			break;
    		case "Gable":
				wH = (params.p_h)-0.1;
				wP = params.p_h - (wH/2)-0.1; 
    			break;
    		case "Close":
    			wH =params.p_h- params.p_h;
    			wP = (params.p_h - wH/2);
    			break;
    		default:
    			break;
    	}
    
    
		let hdfp = params.p_h - (params.leanB_p_h + (parseInt(params.b_l_t_r_pB)/12) * params.leanB_p_w);
		if(params.add_back_lean && Object.values(const_var.wallArray["back"])[0] == params.p_b_w || params.add_back_lean ==true && params.p_b_w == "Open") {    
			wH = params.p_h - hdfp;
			wP = wH/2;
		} 
    
    	cb_R_S_BackTrim.scale.set(0.5+0.17,wH, 0.5);
    	cb_R_S_BackTrim.position.set(params.p_w/2 - params.cB_addStorage_right,wP,params.p_d/-2);
    }	
	
	if (params.singleSlope)	{
		cb_R_S_BackTrim.scale.y -= ((Number(params.p_r_p)/12) * params.p_w) +0.1;
		cb_R_S_BackTrim.position.y -= ((Number(params.p_r_p)/12) * params.p_w)/2;
	}

	cb_R_S_BackTrim.visible = (params.cB_addStorage_check_right!=false && params.p_u_c==false  && params.p_b_w != "Close")?true:false;
	if (cb_R_S_BackTrim.visible) translucent(cb_R_S_BackTrim);
	C_B_L_P.add(cb_R_S_BackTrim);


	let endsEqiDis;
	if(params.fourth_center_cost == true){
		if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
	{
		endsEqiDis = (params.oncenter_val_with_action!='')?((params.p_w)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.p_w)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0);
	}
	} else {
		if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
		{
			endsEqiDis = (params.oncenter_val_with_action!='')?((params.p_w)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.p_w)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0)
		}
	}

	let slope = { "1": 12, "2": 6, "3": 4, "4": 3, "5": 2.4, "6": 2 }
	// params.p_h  + ((params.p_w/2)*(params.p_r_p/12))
	let cut = 0 /*params.p_w - params.leanF_p_d*/
	let hInc = roofMiddleHeight[params.p_r_p][params.p_w] / 2 - 0.1;
    let hIncForBow = (params.p_w < 25) ? (2 * hInc - hrzBowYpos[params.p_r_p][params.p_w]) : hInc;
    let hBowsScale = (params.p_w < 25) ? 3 : params.p_w / 2 + hrzBowYpos[params.p_r_p][params.p_w];


	if ((params.p_f_w == "Close") || (params.p_b_w == "Close")) {

		const FrontBaseRail = const_var.b_t_M_L.getObjectByName("leftBaseRail").clone();
		FrontBaseRail.name = "FrontBaseRail";
		FrontBaseRail.scale.set(0.5,params.p_w-0.02,0.7);
		FrontBaseRail.position.set(0,0.08,(params.p_d / 2) - 0.12);
		FrontBaseRail.visible = true
		FrontBaseRail.rotation.x=Math.PI/-2;
		FrontBaseRail.rotation.z=Math.PI/-2;

		const BackBaseRail = FrontBaseRail.clone();
		BackBaseRail.scale.set(0.5,params.p_w-0.02,0.7);
		BackBaseRail.position.set(0,0.08,(params.p_d / -2) + 0.12);
		BackBaseRail.name = "backBaseRail";
		BackBaseRail.visible = true
		BackBaseRail.rotation.x=Math.PI/-2;
		BackBaseRail.rotation.z=Math.PI/-2;

		if( params.p_f_w == "Close"){
		    C_B_L_P.add(FrontBaseRail);
			const_var.legsForCut["front"][FrontBaseRail.name] = FrontBaseRail;
		}

		if( params.p_b_w == "Close"){
			C_B_L_P.add(BackBaseRail);
			const_var.legsForCut["back"][BackBaseRail.name] = BackBaseRail;
		}

		for (let i = (params.p_w / endsEqiDis); i <= (params.p_w) - 1; i = i + (params.p_w / endsEqiDis)) {

			let zpos = ((params.p_d / 2) - 0.12)


			const FrontLegs = const_var.b_t_M_L.getObjectByName("leftFrontLeg").clone();
			FrontLegs.name = "FrontLegs" + i;
			FrontLegs.rotation.y = Math.PI/2
			// const_var.legsForCut["left"][FrontLegs.name] = FrontLegs;			

			if ((i > (params.p_w / 2) - (cut / 2) - (hBowsScale / 2))  && !params.singleSlope) {
				let hFrR = (params.p_r_s == "1") ? 0.490 : 0;
				FrontLegs.scale.set(0.5, params.p_h + hIncForBow + hFrR, 1);
				FrontLegs.position.set((params.p_w / -2) +i , (params.p_h + hIncForBow + hFrR) / 2, zpos);
			} else {
				FrontLegs.scale.set(0.5, (params.p_h + i / slope[params.p_r_p]) + (cut * params.p_r_p * 0.04), 1);
				FrontLegs.position.set((params.p_w / -2) +i , (params.p_h / 2 + (i / (slope[params.p_r_p] * 2))) + (cut * params.p_r_p * 0.02), zpos);

				if (params.singleSlope == true) {
					FrontLegs.scale.set(0.5, (params.p_h - (Number(params.p_r_p)/12) * (params.p_w - i) -0.1), 1);
					FrontLegs.position.set((params.p_w / -2) +i , (params.p_h - (Number(params.p_r_p)/12) * (params.p_w - i) -0.1)/2, zpos);	
				}
			}
			if ((i >= ((params.p_w / 2) - (cut / 2) - (hBowsScale / 2)) + hBowsScale)  && !params.singleSlope) {
				FrontLegs.scale.set(0.5, ((params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) * 2) - (cut * params.p_r_p * 0.042), 1);
				FrontLegs.position.set((params.p_w / -2) +i , params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - (cut * params.p_r_p * 0.021), zpos);
			}


			if ((params.trussType == "ACDT" || params.trussType == "QCT") && !params.singleSlope) {
				if (i > (params.p_w / 2) - (cut / 2) - (hBowsScale / 2)) {
					if (params.p_w > 41) {
						FrontLegs.scale.set(0.5, params.p_h + hIncForBow - 1.8, 1);
						FrontLegs.position.set((params.p_w / -2) +i , (params.p_h + hIncForBow - 1.8) / 2, zpos);
					}
					if (params.p_w > 31 && params.p_w < 41) {
						FrontLegs.scale.set(0.5, params.p_h + hIncForBow - 1, 1);
						FrontLegs.position.set((params.p_w / -2) +i , (params.p_h + hIncForBow - 1) / 2, zpos);
					}
				} else {
					if (params.p_w > 31) {
						FrontLegs.scale.set(0.5, params.p_h + i / slope[params.p_r_p] - 1 + (cut * params.p_r_p * 0.04), 1);
						FrontLegs.position.set((params.p_w / -2) +i , params.p_h / 2 + (i / (slope[params.p_r_p] * 2)) - 0.5 + (cut * params.p_r_p * 0.02), zpos);
					} else {
						FrontLegs.scale.set(0.5, (params.p_h + i / slope[params.p_r_p]) + (cut * params.p_r_p * 0.04), 1);
						FrontLegs.position.set((params.p_w / -2) +i , (params.p_h / 2 + (i / (slope[params.p_r_p] * 2))) + (cut * params.p_r_p * 0.02), zpos);
					}
				}
				if (i >= ((params.p_w / 2) - (cut / 2) - (hBowsScale / 2)) + hBowsScale) {
					if (params.p_w > 31) {
						FrontLegs.scale.set(0.5, ((params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.5) * 2) - (cut * params.p_r_p * 0.042), 1);
						FrontLegs.position.set((params.p_w / -2) +i , (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.5) - (cut * params.p_r_p * 0.021), zpos);
					} else {
						FrontLegs.scale.set(0.5, ((params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) * 2) - (cut * params.p_r_p * 0.042), 1);
						FrontLegs.position.set((params.p_w / -2) +i , (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) - (cut * params.p_r_p * 0.021), zpos);
					}
				}
			}

			if (params.trussType == "ACT" && !params.singleSlope) {
				if (i > (params.p_w / 2) - (cut / 2) - (hBowsScale / 2)) {
					if (params.p_w > 41) {
						FrontLegs.scale.set(0.5, params.p_h + hIncForBow - 1.5, 1);
						FrontLegs.position.set((params.p_w / -2) +i , (params.p_h + hIncForBow - 1.5) / 2, zpos);
					}
					if (params.p_w > 31 && params.p_w < 41) {
						FrontLegs.scale.set(0.5, params.p_h + hIncForBow - 0.8, 1);
						FrontLegs.position.set((params.p_w / -2) +i , (params.p_h + hIncForBow - 0.8) / 2, zpos);
					}
				} else {
					if (params.p_w > 31) {
						FrontLegs.scale.set(0.5, (params.p_h + i / slope[params.p_r_p] - 0.8) + (cut * params.p_r_p * 0.04), 1);
						FrontLegs.position.set((params.p_w / -2) +i , (params.p_h / 2 + (i / (slope[params.p_r_p] * 2)) - 0.4) + (cut * params.p_r_p * 0.02), zpos);
					} else {
						FrontLegs.scale.set(0.5, (params.p_h + i / slope[params.p_r_p]) + (cut * params.p_r_p * 0.04), 1);
						FrontLegs.position.set((params.p_w / -2) +i , (params.p_h / 2 + (i / (slope[params.p_r_p] * 2))) + (cut * params.p_r_p * 0.02), zpos);
					}
				}
				if (i >= ((params.p_w / 2) - (cut / 2) - (hBowsScale / 2)) + hBowsScale) {
					if (params.p_w > 31) {
						FrontLegs.scale.set(0.5, ((params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.4) * 2) - (cut * params.p_r_p * 0.042), 1);
						FrontLegs.position.set((params.p_w / -2) +i , (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.4) - (cut * params.p_r_p * 0.021), zpos);
					} else {
						FrontLegs.scale.set(0.5, ((params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) * 2) - (cut * params.p_r_p * 0.042), 1);
						FrontLegs.position.set((params.p_w / -2) +i , (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) - (cut * params.p_r_p * 0.021), zpos);
					}
				}
			}

			if (params.trussType == "CTCT" && !params.singleSlope) {
				if (i > (params.p_w / 2) - (cut / 2) - (hBowsScale / 2)) {
					if (params.p_w > 31 && params.p_w < 41) {
						var hDis = (params.p_r_p > 3) ? 0.9 : 1.0;
						FrontLegs.scale.set(0.5, params.p_h + hIncForBow - hDis, 1);
						FrontLegs.position.set((params.p_w / -2) +i , (params.p_h + hIncForBow - hDis) / 2, zpos);
					}
					if (params.p_w > 41) {
						var hDis = (params.p_r_p > 3) ? 1.7 : 1.8;
						FrontLegs.scale.set(0.5, params.p_h + hIncForBow - hDis, 1);
						FrontLegs.position.set((params.p_w / -2) +i , (params.p_h + hIncForBow - hDis) / 2, zpos);
					}
				} else {
					if (params.p_w > 31) {
						FrontLegs.scale.set(0.5, (params.p_h + i / slope[params.p_r_p] - 1) + (cut * params.p_r_p * 0.04), 1);
						FrontLegs.position.set((params.p_w / -2) +i , (params.p_h / 2 + (i / (slope[params.p_r_p] * 2)) - 0.5) + (cut * params.p_r_p * 0.02), zpos);
					} else {
						FrontLegs.scale.set(0.5, (params.p_h + i / slope[params.p_r_p]) + (cut * params.p_r_p * 0.04), 1);
						FrontLegs.position.set((params.p_w / -2) +i , (params.p_h / 2 + (i / (slope[params.p_r_p] * 2))) + (cut * params.p_r_p * 0.02), zpos);
					}
				}
				if (i >= ((params.p_w / 2) - (cut / 2) - (hBowsScale / 2)) + hBowsScale) {
					if (params.p_w > 31) {
						FrontLegs.scale.set(0.5, ((params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.5) * 2) - (cut * params.p_r_p * 0.042), 1);
						FrontLegs.position.set((params.p_w / -2) +i , (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.5) - (cut * params.p_r_p * 0.021), zpos);
					} else {
						FrontLegs.scale.set(0.5, ((params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) * 2) - (cut * params.p_r_p * 0.042), 1);
						FrontLegs.position.set((params.p_w / -2) +i , (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) - (cut * params.p_r_p * 0.021), zpos);
					}
				}
			}

			if (params.trussType == "SBST" && !params.singleSlope) {
				if (params.p_w > 31 && params.p_w < 41) {
					FrontLegs.scale.set(0.5, params.p_h, 1);
					FrontLegs.position.set((params.p_w / -2) +i , (params.p_h) / 2, zpos);
				}
				if (params.p_w > 41) {
					FrontLegs.scale.set(0.5, params.p_h, 1);
					FrontLegs.position.set((params.p_w / -2) +i , (params.p_h) / 2, zpos);
				}
			}

			if ((params.trussType == "ECT" || params.trussType == "LST" || params.trussType == "RNT") && !params.singleSlope) {
				var posForBow = { "1": { "p": 1.5, "s": 0 }, "2": { "p": 1.5, "s": 0 }, "3": { "p": 1.5, "s": 0.1 }, "4": { "p": 1.45, "s": 0.4 }, "5": { "p": 1.5, "s": 0.1 }, "6": { "p": 1.55, "s": 0.3 } };
				if (i > (params.p_w / 2) - (cut / 2) - (hBowsScale + posForBow[params.p_r_p]["s"]) / 2) {
					if (params.p_w > 30 && params.p_w < 41) {
						FrontLegs.scale.set(0.5, params.p_h + hIncForBow - 0.6, 1);
						FrontLegs.position.set((params.p_w / -2) +i , (params.p_h + hIncForBow - 0.6) / 2, zpos);
					}
					if (params.p_w > 41 && params.p_w <= 70) {
						FrontLegs.scale.set(0.5, params.p_h + hIncForBow - 1.5, 1);
						FrontLegs.position.set((params.p_w / -2) +i , (params.p_h + hIncForBow - 1.5) / 2, zpos);
					}
					if (params.p_w > 70) {
						var posForBow = { "1": { "p": 1.5, "s": 0 }, "2": { "p": 1.5, "s": 0 }, "3": { "p": 1.5, "s": 0.1 }, "4": { "p": 1.45, "s": 0.4 }, "5": { "p": 1.5, "s": 0.1 }, "6": { "p": 1.55, "s": 0.3 } };
						FrontLegs.scale.set(0.5, params.p_h + hIncForBow - posForBow[params.p_r_p]["p"], 1);
						FrontLegs.position.set((params.p_w / -2) +i , (params.p_h + hIncForBow - posForBow[params.p_r_p]["p"]) / 2, zpos);
					}
				} else {
					if (params.p_w > 31) {
						FrontLegs.scale.set(0.5, ((params.p_h + i / slope[params.p_r_p] - 0.8)) + (cut * params.p_r_p * 0.04), 1);
						FrontLegs.position.set((params.p_w / -2) +i , (params.p_h / 2 + (i / (slope[params.p_r_p] * 2)) - 0.4) + (cut * params.p_r_p * 0.02), zpos);
					} else {
						FrontLegs.scale.set(0.5, (params.p_h + i / slope[params.p_r_p]) + (cut * params.p_r_p * 0.04), 1);
						FrontLegs.position.set((params.p_w / -2) +i , (params.p_h / 2 + (i / (slope[params.p_r_p] * 2))) + (cut * params.p_r_p * 0.02), zpos);
					}
				}

				if (i > (params.p_w / 2) - (cut / 2) - ((hBowsScale + posForBow[params.p_r_p]["s"]) / 2) + (hBowsScale + posForBow[params.p_r_p]["s"])) {
					if (params.p_w > 31) {
						FrontLegs.scale.set(0.5, ((params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.4) * 2) - (cut * params.p_r_p * 0.042), 1);
						FrontLegs.position.set((params.p_w / -2) +i , (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.4) - (cut * params.p_r_p * 0.021), zpos);
					} else {
						FrontLegs.scale.set(0.5, ((params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) * 2) - (cut * params.p_r_p * 0.042), 1);
						FrontLegs.position.set((params.p_w / -2) +i , (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) - (cut * params.p_r_p * 0.021), zpos);
					}
				}
			}

			if ( params.trussType == "CST"  && !params.singleSlope) {
				if (i > (params.p_w / 2) - (cut / 2)) {
					if (params.p_w >= 26) {
						FrontLegs.scale.set(0.5, params.p_h + hIncForBow - 1.8, 1);
						FrontLegs.position.set((params.p_w / -2) +i, (params.p_h + hIncForBow - 1.8) / 2, zpos);
					}
					

				} else {
					if (params.p_w >= 26) {
						FrontLegs.scale.set(0.5, params.p_h + i / slope[params.p_r_p] - 1 + (cut * params.p_r_p * 0.04), 1);
						FrontLegs.position.set((params.p_w / -2) +i, params.p_h / 2 + (i / (slope[params.p_r_p] * 2)) - 0.5 + (cut * params.p_r_p * 0.02), zpos);
					} else {
						FrontLegs.scale.set(0.5, (params.p_h + i / slope[params.p_r_p]) + (cut * params.p_r_p * 0.04)-0.4, 1);
						FrontLegs.position.set((params.p_w / -2) +i, (params.p_h / 2 + (i / (slope[params.p_r_p] * 2))) + (cut * params.p_r_p * 0.02)-0.2, zpos);
					}
				}
				if (i >= ((params.p_w / 2) - (cut / 2)) + 0) {
					if (params.p_w >= 26) {
						FrontLegs.scale.set(0.5, ((params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.5) * 2) - (cut * params.p_r_p * 0.042), 1);
						FrontLegs.position.set((params.p_w / -2) +i, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.5) - (cut * params.p_r_p * 0.021), zpos);
					} else {
						FrontLegs.scale.set(0.5, ((params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) * 2) - (cut * params.p_r_p * 0.042), 1);
						FrontLegs.position.set((params.p_w / -2) +i, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) - (cut * params.p_r_p * 0.021), zpos);
					}
				}
			}

			if(params.canopy == true){
				FrontLegs.scale.set(0.5, (params.p_h + i / slope[params.p_r_p]) + (cut * params.p_r_p * 0.04), 1);
				FrontLegs.position.set((params.p_w / -2) +i , (params.p_h / 2 + (i / (slope[params.p_r_p] * 2))) + (cut * params.p_r_p * 0.02), zpos);
			}

			const BackLegs = const_var.b_t_M_L.getObjectByName("leftFrontLeg").clone();
			BackLegs.name = "BackLegs" + i;
			BackLegs.rotation.y = Math.PI/2
			// const_var.legsForCut["left"][BackLegs.name] = BackLegs;			

			BackLegs.scale.set(FrontLegs.scale.x,FrontLegs.scale.y,FrontLegs.scale.z)
			BackLegs.position.set(FrontLegs.position.x,FrontLegs.position.y,(params.p_d / -2) + 0.12)


			if(params.p_f_w == "Close"){
			    FrontLegs.visible = true;
			    C_B_L_P.add(FrontLegs);
				const_var.legsForCut["front"][FrontLegs.name] = FrontLegs;
			}

			if(params.p_b_w == "Close"){
			    BackLegs.visible = true;
			    C_B_L_P.add(BackLegs);
				const_var.legsForCut["back"][BackLegs.name] = BackLegs;
			}

			if(params.p_r_s == 1){
				FrontLegs.scale.y = FrontLegs.scale.y + 0.4
				FrontLegs.position.y = FrontLegs.position.y + 0.2
			}
		}
	}

	if (params.cB_addStorage_check_front) {
		const frontStoarageLeftBackTrim = C_B_L_P.getObjectByName("leftLegBackTrim").clone();
		frontStoarageLeftBackTrim.name = "frontStoarageLeftBackTrim";
		frontStoarageLeftBackTrim.position.z = params.p_d /2-(parseInt(params.cB_addStorage_front))+0.02;
		frontStoarageLeftBackTrim.visible = params.cB_addStorage_front;
		C_B_L_P.add(frontStoarageLeftBackTrim);

		const frontStoarageRightBackTrim = C_B_R_P.getObjectByName("rightLegBackTrim").clone();
		frontStoarageRightBackTrim.name = "frontStoarageRightBackTrim";
		frontStoarageRightBackTrim.position.z = params.p_d /2-(parseInt(params.cB_addStorage_front))+0.02;
		frontStoarageRightBackTrim.visible = params.cB_addStorage_front;
		C_B_R_P.add(frontStoarageRightBackTrim);
	}
}

function translucent(component) {
	if(params.is_translusant==true){
		component.material.transparent = true;
		component.material.opacity = 0.1;
		component.material.alphaTest =false;
		component.material.clearAlpha =1;
	  } else {
		  component.material.transparent = true;
		  component.material.opacity = 1;
		  component.material.alphaTest =0;
		  component.material.clearAlpha =null;
	  } 
}