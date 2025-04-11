import { params, const_var, } from '../../redux/reducers/reducer';
import * as THREE from "three"
import { zigZagLegs } from '../../redux/reducers/utils';

export const updateBackLeanToLegs = (leanToCheck) => {
    if ("undefined" != typeof const_var.scene.getObjectByName("BackLeanLegs")) const_var.scene.remove(const_var.scene.getObjectByName("BackLeanLegs"));
    if ("undefined" != typeof const_var.scene.getObjectByName("b_t_M_B_t_B")) const_var.scene.remove(const_var.scene.getObjectByName("b_t_M_B_t_B"));

    const BackLeanLegs = new THREE.Group();
    BackLeanLegs.name = "BackLeanLegs";
    const_var.scene.add(BackLeanLegs);
    BackLeanLegs.rotation.set(0, Math.PI / -2, 0);
    let storagePos = {
        "5": 5, "10": 10, "15": 15, "20": 20, "25": 25, "30": 30, "35": 35, "40": 40, "45": 45, "50": 50, "55": 55, "60": 60, "65": 65, "70": 70, "75": 75, "80": 80, "85": 85, "90": 90, "95": 95, "100": 100
    }

    let roofMiddleHeight = {
        "1": { "6": 0.25, "7": 0.29165, "8": 0.33335, "9": 0.375, "10": 0.41665, "11": 0.45835, "12": 0.5, "13": 0.5417, "14": 0.5833, "15": 0.6250, "16": 0.6667, "17": 0.7083, "18": 0.7500, "19": 0.7917, "20": 0.8333, "21": 0.8750, "22": 0.9167, "23": 0.9583, "24": 1, "25": 1.0417, "26": 1.0833, "27": 1.1250, "28": 1.1667, "29": 1.2083, "30": 1.2500, "31": 1.2917, "32": 1.3333, "33": 1.3750, "34": 1.4167, "35": 1.4583, "36": 1.5000, "37": 1.5417, "38": 1.5833, "39": 1.6250, "40": 1.6667, "41": 1.7083, "42": 1.7500, "43": 1.7917, "44": 1.8333, "45": 1.8750, "46": 1.9167, "47": 1.9583, "48": 2.00, "49": 2.0417, "50": 2.0833, "51": 2.1250, "52": 2.1667, "53": 2.2083, "54": 2.2500, "55": 2.2917, "56": 2.3333, "57": 2.3750, "58": 2.4167, "59": 2.4583, "60": 2.5000, "61": 2.5417, "62": 2.5833, "63": 2.6250, "64": 2.6667, "65": 2.7083, "66": 2.7500, "67": 2.7917, "68": 2.8333, "69": 2.8750, "70": 2.9167, "71": 2.9583, "72": 3.00, "73": 3.0417, "74": 3.0833, "75": 3.1250, "76": 3.1667, "77": 3.2083, "78": 3.2500, "79": 3.2917, "80": 3.3330 },
        "2": { "6": 0.50, "7": 0.58335, "8": 0.66665, "9": 0.750, "10": 0.83335, "11": 0.91665, "12": 1.0, "13": 1.0833, "14": 1.1667, "15": 1.2500, "16": 1.3333, "17": 1.4167, "18": 1.5000, "19": 1.5833, "20": 1.6667, "21": 1.7500, "22": 1.8333, "23": 1.9167, "24": 2, "25": 2.0833, "26": 2.1667, "27": 2.2500, "28": 2.3333, "29": 2.4167, "30": 2.5000, "31": 2.5833, "32": 2.6667, "33": 2.7500, "34": 2.8333, "35": 2.9167, "36": 3.0000, "37": 3.0833, "38": 3.1667, "39": 3.2500, "40": 3.3330, "41": 3.4170, "42": 3.5000, "43": 3.5830, "44": 3.6670, "45": 3.7500, "46": 3.8330, "47": 3.9170, "48": 4.00, "49": 4.0830, "50": 4.1670, "51": 4.2500, "52": 4.3330, "53": 4.4170, "54": 4.5000, "55": 4.5830, "56": 4.6670, "57": 4.7500, "58": 4.8330, "59": 4.9170, "60": 5.0000, "61": 5.0830, "62": 5.1670, "63": 5.2500, "64": 5.3330, "65": 5.4170, "66": 5.5000, "67": 5.5830, "68": 5.6670, "69": 5.7500, "70": 5.8330, "71": 5.9170, "72": 6.00, "73": 6.0830, "74": 6.1670, "75": 6.2500, "76": 6.3330, "77": 6.4170, "78": 6.5000, "79": 6.5830, "80": 6.6670 },
        "3": { "6": 0.75, "7": 0.87500, "8": 1.00000, "9": 1.125, "10": 1.25000, "11": 1.37500, "12": 1.5, "13": 1.6250, "14": 1.7500, "15": 1.8750, "16": 2.0000, "17": 2.1250, "18": 2.2500, "19": 2.3750, "20": 2.5000, "21": 2.6250, "22": 2.7500, "23": 2.8750, "24": 3, "25": 3.1250, "26": 3.2500, "27": 3.3750, "28": 3.5000, "29": 3.6250, "30": 3.7500, "31": 3.8750, "32": 4.0000, "33": 4.1250, "34": 4.2500, "35": 4.3750, "36": 4.5000, "37": 4.6250, "38": 4.7500, "39": 4.8750, "40": 5.0000, "41": 5.1250, "42": 5.2500, "43": 5.3750, "44": 5.5000, "45": 5.6250, "46": 5.7500, "47": 5.8750, "48": 6.00, "49": 6.1250, "50": 6.2500, "51": 6.3750, "52": 6.5000, "53": 6.6250, "54": 6.7500, "55": 6.8750, "56": 7.0000, "57": 7.1250, "58": 7.2500, "59": 7.3750, "60": 7.5000, "61": 7.6250, "62": 7.7500, "63": 7.8750, "64": 8.0000, "65": 8.1250, "66": 8.2500, "67": 8.3750, "68": 8.5000, "69": 8.6250, "70": 8.7500, "71": 8.8750, "72": 9.00, "73": 9.1250, "74": 9.2500, "75": 9.3750, "76": 9.5000, "77": 9.6250, "78": 9.7500, "79": 9.8750, "80": 10.000 },
        "4": { "6": 1.00, "7": 1.16665, "8": 1.33335, "9": 1.500, "10": 1.66650, "11": 1.83350, "12": 2.0, "13": 2.1667, "14": 2.3333, "15": 2.5000, "16": 2.6667, "17": 2.8333, "18": 3.0000, "19": 3.1667, "20": 3.3330, "21": 3.5000, "22": 3.6670, "23": 3.8330, "24": 4, "25": 4.1670, "26": 4.3330, "27": 4.5000, "28": 4.6670, "29": 4.8330, "30": 5.0000, "31": 5.1670, "32": 5.3330, "33": 5.5000, "34": 5.6670, "35": 5.8330, "36": 6.0000, "37": 6.1670, "38": 6.3330, "39": 6.5000, "40": 6.6670, "41": 6.8330, "42": 7.0000, "43": 7.1670, "44": 7.3330, "45": 7.5000, "46": 7.6670, "47": 7.8330, "48": 8.00, "49": 8.1670, "50": 8.3330, "51": 8.5000, "52": 8.6670, "53": 8.8330, "54": 9.0000, "55": 9.1670, "56": 9.3330, "57": 9.5000, "58": 9.6670, "59": 9.8330, "60": 10.000, "61": 10.167, "62": 10.333, "63": 10.500, "64": 10.667, "65": 10.833, "66": 11.000, "67": 11.167, "68": 11.333, "69": 11.500, "70": 11.667, "71": 11.833, "72": 12.0, "73": 12.167, "74": 12.333, "75": 12.500, "76": 12.667, "77": 12.833, "78": 13.000, "79": 13.167, "80": 13.333 },
        "5": { "6": 1.25, "7": 1.45835, "8": 1.66650, "9": 1.875, "10": 2.08350, "11": 2.29150, "12": 2.5, "13": 2.7083, "14": 2.9167, "15": 3.1250, "16": 3.3330, "17": 3.5420, "18": 3.7500, "19": 3.9580, "20": 4.1670, "21": 4.3750, "22": 4.5830, "23": 4.7920, "24": 5, "25": 5.2080, "26": 5.4170, "27": 5.6250, "28": 5.8330, "29": 6.0420, "30": 6.2500, "31": 6.4580, "32": 6.6670, "33": 6.8750, "34": 7.0830, "35": 7.2920, "36": 7.5000, "37": 7.7080, "38": 7.9170, "39": 8.1250, "40": 8.3330, "41": 8.5420, "42": 8.7500, "43": 8.9580, "44": 9.1670, "45": 9.3750, "46": 9.5830, "47": 9.7920, "48": 10.0, "49": 10.208, "50": 10.417, "51": 10.625, "52": 10.833, "53": 11.042, "54": 11.250, "55": 11.458, "56": 11.667, "57": 11.875, "58": 12.083, "59": 12.292, "60": 12.500, "61": 12.708, "62": 12.917, "63": 13.125, "64": 13.333, "65": 13.542, "66": 13.750, "67": 13.958, "68": 14.167, "69": 14.375, "70": 14.583, "71": 14.792, "72": 15.0, "73": 15.208, "74": 15.417, "75": 15.625, "76": 15.833, "77": 16.042, "78": 16.250, "79": 16.458, "80": 16.667 },
        "6": { "6": 1.50, "7": 1.75000, "8": 2.00000, "9": 2.250, "10": 2.50000, "11": 2.75000, "12": 3.0, "13": 3.2500, "14": 3.5000, "15": 3.7500, "16": 4.0000, "17": 4.2500, "18": 4.5000, "19": 4.7500, "20": 5.0000, "21": 5.2500, "22": 5.5000, "23": 5.7500, "24": 6, "25": 6.2500, "26": 6.5000, "27": 6.7500, "28": 7.0000, "29": 7.2500, "30": 7.5000, "31": 7.7500, "32": 8.0000, "33": 8.2500, "34": 8.5000, "35": 8.7500, "36": 9.0000, "37": 9.2500, "38": 9.5000, "39": 9.7500, "40": 10.000, "41": 10.250, "42": 10.500, "43": 10.750, "44": 11.000, "45": 11.250, "46": 11.500, "47": 11.750, "48": 12.0, "49": 12.250, "50": 12.500, "51": 12.750, "52": 13.000, "53": 13.250, "54": 13.500, "55": 13.750, "56": 14.000, "57": 14.250, "58": 14.500, "59": 14.750, "60": 15.000, "61": 15.250, "62": 15.500, "63": 15.750, "64": 16.000, "65": 16.250, "66": 16.500, "67": 16.750, "68": 17.000, "69": 17.250, "70": 17.500, "71": 17.750, "72": 18.0, "73": 18.250, "74": 18.500, "75": 18.750, "76": 19.000, "77": 19.250, "78": 19.500, "79": 19.750, "80": 20.000 }
    };

    //scale of lean to regular leg according to hight
    let scaleLegR = { "6": 0.23, "7": 0.28, "8": 0.34, "9": 0.40, "10": 0.45, "11": 0.5, "12": 0.55, "13": 0.6, "14": 0.65, "15": 0.7, "16": 0.75, "17": 0.8, "18": 0.85, "19": 0.9 };

    var hrzBowYpos = {
        "1": { "12": 0.05, "13": 0.05, "14": 0.05, "15": 0.05, "16": 0.05, "17": 0.05, "18": 0.05, "19": 0.05, "20": 0.05, "21": 0.05, "22": 0.05, "23": 0.05, "24": 0.05, "25": 0.05, "26": 0.2, "27": 0.2, "28": 0.2, "29": 0.2, "30": 0.2, "31": 0.2, "32": 0.2, "33": 0.2, "34": 0.2, "35": 0.2, "36": 0.2, "37": 0.2, "38": 0.2, "39": 0.2, "40": 0.2, "41": 0.2, "42": 18.0, "43": 18.0, "44": 18.0, "45": 18.0, "46": 18.0, "47": 18.0, "48": 18.0, "49": 18.0, "50": 18.0, "51": 18.0, "52": 18.0, "53": 18.0, "54": 18.0, "55": 18.0, "56": 18.0, "57": 18.0, "58": 18.0, "59": 18.0, "60": 18.0, "61": 18.0, "62": 18.0, "63": 18.0, "64": 18.0, "65": 18.0, "66": 18.0, "67": 18.0, "68": 18.0, "69": 18.0, "70": 18.0, "71": 18.0, "72": 18.0, "73": 18.0, "74": 18.0, "75": 18.0, "76": 18.0, "77": 18.0, "78": 18.0, "79": 18.0, "80": 18.0 },
        "2": { "12": 0.15, "13": 0.15, "14": 0.15, "15": 0.15, "16": 0.15, "17": 0.15, "18": 0.15, "19": 0.15, "20": 0.15, "21": 0.15, "22": 0.15, "23": 0.15, "24": 0.15, "25": 0.15, "26": 0.4, "27": 0.4, "28": 0.4, "29": 0.4, "30": 0.4, "31": 0.4, "32": 0.4, "33": 0.4, "34": 0.4, "35": 0.4, "36": 0.4, "37": 0.4, "38": 0.4, "39": 0.4, "40": 0.4, "41": 0.4, "42": 9.00, "43": 9.00, "44": 9.00, "45": 9.00, "46": 9.00, "47": 9.00, "48": 9.00, "49": 9.00, "50": 9.00, "51": 9.00, "52": 9.00, "53": 9.00, "54": 9.00, "55": 9.00, "56": 9.00, "57": 9.00, "58": 9.00, "59": 9.00, "60": 9.00, "61": 9.00, "62": 9.00, "63": 9.00, "64": 9.00, "65": 9.00, "66": 9.00, "67": 9.00, "68": 9.00, "69": 9.00, "70": 9.00, "71": 9.00, "72": 9.00, "73": 9.00, "74": 9.00, "75": 9.00, "76": 9.00, "77": 9.00, "78": 9.00, "79": 9.00, "80": 9.00 },
        "3": { "12": 0.25, "13": 0.25, "14": 0.25, "15": 0.25, "16": 0.25, "17": 0.25, "18": 0.25, "19": 0.25, "20": 0.25, "21": 0.25, "22": 0.25, "23": 0.25, "24": 0.25, "25": 0.25, "26": 0.6, "27": 0.6, "28": 0.6, "29": 0.6, "30": 0.6, "31": 0.6, "32": 0.6, "33": 0.6, "34": 0.6, "35": 0.6, "36": 0.6, "37": 0.6, "38": 0.6, "39": 0.6, "40": 0.6, "41": 0.6, "42": 7.00, "43": 7.00, "44": 7.00, "45": 7.00, "46": 7.00, "47": 7.00, "48": 7.00, "49": 7.00, "50": 7.00, "51": 7.00, "52": 7.00, "53": 7.00, "54": 7.00, "55": 7.00, "56": 7.00, "57": 7.00, "58": 7.00, "59": 7.00, "60": 7.00, "61": 7.00, "62": 7.00, "63": 7.00, "64": 7.00, "65": 7.00, "66": 7.00, "67": 7.00, "68": 7.00, "69": 7.00, "70": 7.00, "71": 7.00, "72": 7.00, "73": 7.00, "74": 7.00, "75": 7.00, "76": 7.00, "77": 7.00, "78": 7.00, "79": 7.00, "80": 7.00 },
        "4": { "12": 0.40, "13": 0.40, "14": 0.40, "15": 0.40, "16": 0.40, "17": 0.40, "18": 0.40, "19": 0.40, "20": 0.40, "21": 0.40, "22": 0.40, "23": 0.40, "24": 0.40, "25": 0.40, "26": 0.2, "27": 0.2, "28": 0.2, "29": 0.2, "30": 0.2, "31": 0.2, "32": 0.2, "33": 0.2, "34": 0.2, "35": 0.2, "36": 0.2, "37": 0.2, "38": 0.2, "39": 0.2, "40": 0.2, "41": 0.2, "42": 5.00, "43": 5.00, "44": 5.00, "45": 5.00, "46": 5.00, "47": 5.00, "48": 5.00, "49": 5.00, "50": 5.00, "51": 5.00, "52": 5.00, "53": 5.00, "54": 5.00, "55": 5.00, "56": 5.00, "57": 5.00, "58": 5.00, "59": 5.00, "60": 5.00, "61": 5.00, "62": 5.00, "63": 5.00, "64": 5.00, "65": 5.00, "66": 5.00, "67": 5.00, "68": 5.00, "69": 5.00, "70": 5.00, "71": 5.00, "72": 5.00, "73": 5.00, "74": 5.00, "75": 5.00, "76": 5.00, "77": 5.00, "78": 5.00, "79": 5.00, "80": 5.00 },
        "5": { "12": 0.50, "13": 0.50, "14": 0.50, "15": 0.50, "16": 0.50, "17": 0.50, "18": 0.50, "19": 0.50, "20": 0.50, "21": 0.50, "22": 0.50, "23": 0.50, "24": 0.50, "25": 0.50, "26": 0.4, "27": 0.4, "28": 0.4, "29": 0.4, "30": 0.4, "31": 0.4, "32": 0.4, "33": 0.4, "34": 0.4, "35": 0.4, "36": 0.4, "37": 0.4, "38": 0.4, "39": 0.4, "40": 0.4, "41": 0.4, "42": 4.00, "43": 4.00, "44": 4.00, "45": 4.00, "46": 4.00, "47": 4.00, "48": 4.00, "49": 4.00, "50": 4.00, "51": 4.00, "52": 4.00, "53": 4.00, "54": 4.00, "55": 4.00, "56": 4.00, "57": 4.00, "58": 4.00, "59": 4.00, "60": 4.00, "61": 4.00, "62": 4.00, "63": 4.00, "64": 4.00, "65": 4.00, "66": 4.00, "67": 4.00, "68": 4.00, "69": 4.00, "70": 4.00, "71": 4.00, "72": 4.00, "73": 4.00, "74": 4.00, "75": 4.00, "76": 4.00, "77": 4.00, "78": 4.00, "79": 4.00, "80": 4.00 },
        "6": { "12": 0.60, "13": 0.60, "14": 0.60, "15": 0.60, "16": 0.60, "17": 0.60, "18": 0.60, "19": 0.60, "20": 0.60, "21": 0.60, "22": 0.60, "23": 0.60, "24": 0.60, "25": 0.60, "26": 0.4, "27": 0.4, "28": 0.4, "29": 0.4, "30": 0.4, "31": 0.4, "32": 0.4, "33": 0.4, "34": 0.4, "35": 0.4, "36": 0.4, "37": 0.4, "38": 0.4, "39": 0.4, "40": 0.4, "41": 0.4, "42": 3.80, "43": 3.80, "44": 3.80, "45": 3.80, "46": 3.80, "47": 3.80, "48": 3.80, "49": 3.80, "50": 3.80, "51": 3.80, "52": 3.80, "53": 3.80, "54": 3.80, "55": 3.80, "56": 3.80, "57": 3.80, "58": 3.80, "59": 3.80, "60": 3.80, "61": 3.80, "62": 3.80, "63": 3.80, "64": 3.80, "65": 3.80, "66": 3.80, "67": 3.80, "68": 3.80, "69": 3.80, "70": 3.80, "71": 3.80, "72": 3.80, "73": 3.80, "74": 3.80, "75": 3.80, "76": 3.80, "77": 3.80, "78": 3.80, "79": 3.80, "80": 3.80 }
    };
    let hInc = roofMiddleHeight[params.p_r_p][params.p_w] / 2 - 0.1;
    let hIncForBow = (params.p_w < 25) ? (2 * hInc - hrzBowYpos[params.p_r_p][params.p_w]) : hInc;
    let hBowsScale = (params.p_w < 25) ? 3 : params.p_w / 2 + hrzBowYpos[params.p_r_p][params.p_w];

    let legDistance = 5;

    let dis;
    if (params.fourth_center_cost == true) {
        if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
        {
            dis = (params.oncenter_val_with_action!='')?((params.leanB_p_d)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.leanB_p_d)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0)
        }
    } else {
        if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
        {
            dis = (params.oncenter_val_with_action!='')?((params.leanB_p_d)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.leanB_p_d)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0)    
        }
    }

    var disFor2Legs = 0.20;
    var disForVShapLegs = 0.5;
    var hightFor2Legs = params.leanB_p_h;
    var hightForVShapLegs = params.leanB_p_h + (params.b_l_t_r_pB * 0.08);

    if (const_var.leanBLegstype == "zigzag") {
        disFor2Legs = 0.9875;
        hightFor2Legs = (params.p_r_s == 1) ? (params.leanB_p_h + params.b_l_t_r_pB / 35 + - 0.08) : (params.leanB_p_h + params.b_l_t_r_pB / 20 - 0.08);
    }
    if (const_var.leanBLegstype == "ladder") {
        disFor2Legs = 0.60;
        hightFor2Legs = (params.p_r_s == 1) ? (params.leanB_p_h + params.b_l_t_r_pB / 35 + - 0.08) : (params.leanB_p_h + params.b_l_t_r_pB / 20 - 0.08);
    }
    if (const_var.leanBLegstype == "double") {
        disFor2Legs = 0.25 + 0.09;
        hightFor2Legs = (params.p_r_s == 1) ? (params.leanB_p_h + params.b_l_t_r_pB / 35 + - 0.08) : (params.leanB_p_h + params.b_l_t_r_pB / 20 - 0.08);
    }

    if (leanToCheck) {

        var leanToLeg = params.p_d / -2 - params.leanB_p_w;

        /* Back Lean To Right Leg Trim */
        if (const_var.b_t_M_B_t_B.getObjectByName("backLeanToRightWallTrim") != undefined) {
            const backLeanToRightWallTrim = const_var.b_t_M_B_t_B.getObjectByName("backLeanToRightWallTrim").clone();
            backLeanToRightWallTrim.name = "backLeanToRightWallTrim";
            // backLeanToRightWallTrim.scale.set(0.6, params.leanB_p_h + scaleLegR[params.leanB_p_h], 0.5);
            backLeanToRightWallTrim.position.set(leanToLeg + 0.03, params.leanB_p_h / 2, params.leanB_p_d / 2+0.02);
            if (params.add_left_back_lean_porch == true) {
                backLeanToRightWallTrim.position.set(leanToLeg + 0.03, params.leanB_p_h / 2, params.leanB_p_d / 2 + params.lean_p_w+0.02);
            }
            backLeanToRightWallTrim.visible = (params.p_b_c_b_b_b!="Open" && !params.add_storage_check_back)?true:false;

            var wH = params.leanB_p_h;
            var wP = params.leanB_p_h - wH / 2;

            backLeanToRightWallTrim.position.y = wP;
            backLeanToRightWallTrim.scale.set(params.p_w, wH, 0);

            switch (params.p_b_c_b_b_b) {
                case "One_Fourth_Close":
                    wH = wH / 4;
                    wP = params.leanB_p_h - wH / 2;
                    break;
                case "Half_Close":
                    wH = wH / 2;
                    wP = params.leanB_p_h - wH / 2;
                    break;
                case "Three_Fourth_Close":
                    wH = wH * 3 / 4;
                    wP = params.leanB_p_h - wH / 2;
                    break;
                case "Extended Gable":
                    wH = wH / 6;
                    wP = params.leanB_p_h - wH / 2;
                    break;
                case "Gable":
                    wH = 0;
                    wP = params.leanB_p_h - wH / 2;
                    backLeanToRightWallTrim.visible = false
                    break;
                case "Close":
                    wH = params.leanB_p_h;
                    wP = params.leanB_p_h - wH / 2;
                    break;
                default:
                    backLeanToRightWallTrim.visible = false;
                    break;

            }

            if(params.p_r_s=="1"){
                wH = wH-0.3;
                wP = wP-0.15;
            }
            backLeanToRightWallTrim.position.y = wP - 0.07;
            backLeanToRightWallTrim.scale.set(0.6, wH - 0.14, 0.5);
            if (params.is_translusant == true) {
                backLeanToRightWallTrim.material.transparent = true;
                backLeanToRightWallTrim.material.opacity = 0.1;
                // backLeanToRightWallTrim.material.opacity =0.3;
                backLeanToRightWallTrim.material.alphaTest = false;
                backLeanToRightWallTrim.material.clearAlpha = 1;
            } else {
                backLeanToRightWallTrim.material.transparent = true;
                backLeanToRightWallTrim.material.opacity = 1;
                backLeanToRightWallTrim.material.alphaTest = 0;
                backLeanToRightWallTrim.material.clearAlpha = null;
            }

            BackLeanLegs.add(backLeanToRightWallTrim);
        }

        // back leanto stoarge front wall Right side trim
        if (const_var.b_t_M_B_t_B.getObjectByName("backLeanStoarageRWFTrim") == undefined && params.add_storage_check_back) {
            const backLeanStoarageRWFTrim = BackLeanLegs.getObjectByName("backLeanToRightWallTrim").clone();
            backLeanStoarageRWFTrim.name = "backLeanStoarageRWFTrim";
            backLeanStoarageRWFTrim.visible =(params.add_storage_check_back == true && params.p_b_c_b_b_l != "Close") ? true : false
            backLeanStoarageRWFTrim.position.set(leanToLeg + 0.03, params.leanB_p_h / 2, params.leanB_p_d / 2+0.02);
            BackLeanLegs.add(backLeanStoarageRWFTrim);
        }


        if (const_var.b_t_M_B_t_B.getObjectByName("backLeanToRWFSTrim") == undefined) {
            const backLeanToRWFSTrim = BackLeanLegs.getObjectByName("backLeanToRightWallTrim").clone();
            backLeanToRWFSTrim.name = "backLeanToRWFSTrim";
            backLeanToRWFSTrim.position.z = (params.leanB_p_d / 2) - (parseInt(params.add_storage_back))+0.02;
            backLeanToRWFSTrim.visible = (params.add_storage_check_back == true && params.p_b_c_b_b_l != "Close") ? true : false
            BackLeanLegs.add(backLeanToRWFSTrim);
        }

        /* Back Lean To Left Leg Trim */
        if (const_var.b_t_M_B_t_B.getObjectByName("backLeanToLeftWallTrim") == undefined) {
            const backLeanToLeftWallTrim = const_var.b_t_M_B_t_B.getObjectByName("backLeanToRightWallTrim").clone();
            backLeanToLeftWallTrim.name = "backLeanToLeftWallTrim";
            //    backLeanToLeftWallTrim.scale.set(0.6, params.leanB_p_h + scaleLegR[params.leanB_p_h], 0.5);
            backLeanToLeftWallTrim.position.set(leanToLeg + 0.03, (params.leanB_p_h / 2) - 0.1, params.leanB_p_d / -2-0.02);
            if (params.add_right_back_lean_porch == true) {
                backLeanToLeftWallTrim.position.set(leanToLeg + 0.03, (params.leanB_p_h / 2) - 0.1, params.leanB_p_d / -2 - params.leanR_p_w-0.02);
            }
               backLeanToLeftWallTrim.visible = ( params.p_b_c_b_b_f!="Open")?true:false;

            var wH = params.leanB_p_h;
            var wP = params.leanB_p_h - wH / 2;

            backLeanToLeftWallTrim.position.y = wP;
            backLeanToLeftWallTrim.scale.set(params.p_w, wH, 0);

            switch (params.p_b_c_b_b_f) {
                case "One_Fourth_Close":
                    wH = wH / 4;
                    wP = params.leanB_p_h - wH / 2;
                    break;
                case "Half_Close":
                    wH = wH / 2;
                    wP = params.leanB_p_h - wH / 2;
                    break;
                case "Three_Fourth_Close":
                    wH = wH * 3 / 4;
                    wP = params.leanB_p_h - wH / 2;
                    break;
                case "Extended Gable":
                    wH = wH / 6;
                    wP = params.leanB_p_h - wH / 2;
                    break;
                case "Gable":
                    wH = 0;
                    wP = params.leanB_p_h - wH / 2;
                    backLeanToLeftWallTrim.visible = false
                    break;
                case "Close":
                    wH = params.leanB_p_h;
                    wP = params.leanB_p_h - wH / 2;
                    break;
                default:
                    backLeanToLeftWallTrim.visible = false;
                    break;

            }
            if(params.p_r_s=="1"){
                wH = wH-0.3;
                wP = wP-0.15;
            }
            backLeanToLeftWallTrim.position.y = wP - 0.07;
            backLeanToLeftWallTrim.scale.set(0.6, wH - 0.14, 0.5);


            BackLeanLegs.add(backLeanToLeftWallTrim);
        }

        if (const_var.b_t_M_B_t_B.getObjectByName("backLeanToRFrontWallTrim") != undefined) {
            const backLeanToRFrontWallTrim = const_var.b_t_M_B_t_B.getObjectByName("backLeanToRFrontWallTrim").clone();
            backLeanToRFrontWallTrim.name = "backLeanToRFrontWallTrim";
            // backLeanToRFrontWallTrim.scale.set(0.6, params.leanB_p_h + scaleLegR[params.leanB_p_h], 0.5);
            backLeanToRFrontWallTrim.position.set(leanToLeg + 0.03, params.leanB_p_h / 2, params.leanB_p_d / 2+0.02);
            backLeanToRFrontWallTrim.visible = (params.add_left_back_lean_porch != true) ? true : false;
            backLeanToRFrontWallTrim.visible = (params.p_b_c_b_b_l != "Open") ? true : false;
            if (params.add_left_back_lean_porch == true) {
                backLeanToRFrontWallTrim.position.set(leanToLeg + 0.03, params.leanB_p_h / 2, params.leanB_p_d / 2 + params.lean_p_w+0.02);
            }

            var wH = params.leanB_p_h;
            var wP = params.leanB_p_h - wH / 2;

            backLeanToRFrontWallTrim.position.y = wP;
            backLeanToRFrontWallTrim.scale.set(params.p_w, wH, 0);

            switch (params.p_b_c_b_b_l) {
                case "One_Fourth_Close":
                    wH = wH / 4;
                    wP = params.leanB_p_h - wH / 2;
                    break;
                case "Half_Close":
                    wH = wH / 2;
                    wP = params.leanB_p_h - wH / 2;
                    break;
                case "Three_Fourth_Close":
                    wH = wH * 3 / 4;
                    wP = params.leanB_p_h - wH / 2;
                    break;
                // case "1":
                //     if (params.p_r_s == "1") {
                //         wH = (Math.abs(params.p_b_c_b_b_l.replace(/\D/g, "")) * 3) + 0.28;
                //     } else {
                //         wH = (Math.abs(params.p_b_c_b_b_l.replace(/\D/g, "")) * 3);
                //     }
                //     wP = params.leanB_p_h - wH / 2;
                //     break;
                case "Gable":
                    break;
                case "Close":
                    wH = params.leanB_p_h;
                    wP = params.leanB_p_h - wH / 2;
                    break;
                default:
                    if(params.p_r_s == "1"){
                        wH = (Math.abs(params.p_b_c_b_b_l.replace(/\D/g, "")) * 3)+0.3;
                        wP = params.leanB_p_h - wH/2;
                    }else{
                    wH = (Math.abs(params.p_b_c_b_b_l.replace(/\D/g, "")) * 3);
                    wP = params.leanB_p_h - wH/2;
                    }

                    break;

            }
            if(params.p_r_s=="1"){
                wH = wH-0.3;
                wP = wP-0.15;
            }
            // if (params.p_r_s == "1") {
            //     backLeanToRFrontWallTrim.position.y = wP - 0.14;
            //     backLeanToRFrontWallTrim.scale.set(0.6, wH, 0.5);
            // } else {
                backLeanToRFrontWallTrim.position.y = wP - 0.07;
                backLeanToRFrontWallTrim.scale.set(0.6, wH - 0.14, 0.5);
            // }

            BackLeanLegs.add(backLeanToRFrontWallTrim);
        }

        if (const_var.b_t_M_B_t_B.getObjectByName("backLeanToLFrontWallTrim") == undefined) {
            const backLeanToLFrontWallTrim = const_var.b_t_M_B_t_B.getObjectByName("backLeanToRFrontWallTrim").clone();
            backLeanToLFrontWallTrim.name = "backLeanToLFrontWallTrim";
            // backLeanToLFrontWallTrim.scale.set(0.6, params.leanB_p_h + scaleLegR[params.leanB_p_h], 0.5);
            backLeanToLFrontWallTrim.position.set(leanToLeg + 0.03, params.leanB_p_h / 2, params.leanB_p_d / -2-0.02);
            if(params.add_right_back_lean_porch) {
                backLeanToLFrontWallTrim.position.set(leanToLeg + 0.03, params.leanB_p_h / 2, params.leanB_p_d / -2- params.leanR_p_w-0.02);
            }
            backLeanToLFrontWallTrim.visible = (params.add_right_back_lean_porch != true) ? true : false;
            backLeanToLFrontWallTrim.visible = (params.p_b_c_b_b_l != "Open") ? true : false;

            var wH = params.leanB_p_h;
            var wP = params.leanB_p_h - wH / 2;

            backLeanToLFrontWallTrim.position.y = wP;
            backLeanToLFrontWallTrim.scale.set(params.p_w, wH, 0);

            switch (params.p_b_c_b_b_l) {
                case "One_Fourth_Close":
                    wH = wH / 4;
                    wP = params.leanB_p_h - wH / 2;
                    break;
                case "Half_Close":
                    wH = wH / 2;
                    wP = params.leanB_p_h - wH / 2;
                    break;
                case "Three_Fourth_Close":
                    wH = wH * 3 / 4;
                    wP = params.leanB_p_h - wH / 2;
                    break;
                // case "1":
                //     if (params.p_r_s == "1") {
                //         wH = (Math.abs(params.p_b_c_b_b_l.replace(/\D/g, "")) * 3) + 0.28;
                //     } else {
                //         wH = (Math.abs(params.p_b_c_b_b_l.replace(/\D/g, "")) * 3);
                //     }
                //     wP = params.leanB_p_h - wH / 2;
                //     break;
                case "Gable":
                    break;
                case "Close":
                    wH = params.leanB_p_h;
                    wP = params.leanB_p_h - wH / 2;
                    break;
                default:
                    if(params.p_r_s == "1"){
                        wH = (Math.abs(params.p_b_c_b_b_l.replace(/\D/g, "")) * 3)+0.3;
                        wP = params.leanB_p_h - wH/2;
                    }else{
                    wH = (Math.abs(params.p_b_c_b_b_l.replace(/\D/g, "")) * 3);
                    wP = params.leanB_p_h - wH/2;
                    }

                    break;

            }
            if(params.p_r_s=="1"){
                wH = wH-0.3;
                wP = wP-0.15;
            }
            // if (params.p_r_s == "1") {
            //     backLeanToLFrontWallTrim.position.y = wP - 0.14;
            //     backLeanToLFrontWallTrim.scale.set(0.6, wH, 0.5);
            // } else {
                backLeanToLFrontWallTrim.position.y = wP - 0.07;
                backLeanToLFrontWallTrim.scale.set(0.6, wH - 0.14, 0.5);
            // }

            BackLeanLegs.add(backLeanToLFrontWallTrim);
        }

        /* Back Leanto Base Rail For Legs*/
        const backLeantoBaseRail = const_var.b_t_M_B_t_B.getObjectByName("backLeantoBaseRail").clone();
        backLeantoBaseRail.name = "backLeantoBaseRail";
        backLeantoBaseRail.material = backLeantoBaseRail.material.clone();
        backLeantoBaseRail.scale.set(0.5, params.leanB_p_d - 0.02, 0.7);
        backLeantoBaseRail.position.set(-(params.leanB_p_w + (params.p_d / 2)) + 0.08, 0.08, 0);
        backLeantoBaseRail.rotation.x = Math.PI / -2;
        backLeantoBaseRail.visible = params.add_back_lean;
        BackLeanLegs.add(backLeantoBaseRail);
        const_var.legsForCut["backLean"][backLeantoBaseRail.name] = backLeantoBaseRail;

        const backLeantoBaseRailDouble = const_var.b_t_M_B_t_B.getObjectByName("backLeantoBaseRail").clone();
        backLeantoBaseRailDouble.name = "backLeantoBaseRailDouble";
        backLeantoBaseRailDouble.material = backLeantoBaseRailDouble.material.clone();
        backLeantoBaseRailDouble.scale.set(0.5, params.leanB_p_d - 0.02, 0.7);
        backLeantoBaseRailDouble.position.set(-(params.leanB_p_w + (params.p_d / 2)) + disFor2Legs, 0.08, 0);
        backLeantoBaseRailDouble.rotation.x = Math.PI / -2;
        // backLeantoBaseRailDouble.visible = params.leanB_p_e_l  && params.trussType != "CTCT";
        backLeantoBaseRailDouble.visible = params.leanB_p_e_l;
        BackLeanLegs.add(backLeantoBaseRailDouble);
        const_var.legsForCut["backLean"][backLeantoBaseRailDouble.name] = backLeantoBaseRailDouble;

        const backLeantoRightBaseRail = const_var.b_t_M_B_t_B.getObjectByName("backLeantoBaseRail").clone();
        backLeantoRightBaseRail.name = "backLeantoRightBaseRail";
        backLeantoRightBaseRail.material = backLeantoRightBaseRail.material.clone();
        backLeantoRightBaseRail.scale.set(0.5, params.leanB_p_d - 0.02, 0.7);
        backLeantoRightBaseRail.position.set(-((params.p_d / 2)) + 0.08, 0.08, 0);
        backLeantoRightBaseRail.rotation.x = Math.PI / -2;
        backLeantoRightBaseRail.visible = params.add_back_lean;
        BackLeanLegs.add(backLeantoRightBaseRail);
        const_var.legsForCut["back"][backLeantoRightBaseRail.name] = backLeantoRightBaseRail;

        let slope = { "1": 12, "2": 6, "3": 4, "4": 3, "5": 2.4, "6": 2 }


    let cut = params.p_w - params.leanB_p_d
    if(params.p_b_w != "Close"){
        // Back Lean-to Left Legs According to Center Allignment for all Roof Trusses and Buildings
        if (params.leantoAlignmentBack == "1") {
            for (let i = 0.12; i <= (params.leanB_p_d) + 1; i = i + (params.leanB_p_d / dis)) {

                let zpos = ((params.leanB_p_d / 2) - i.toFixed(2))

                if (zpos <= params.leanB_p_d / -2 + 0.12) {
                    zpos = params.leanB_p_d / -2 + 0.12
                }


                const backLeanToLeftFMiddleLeg = const_var.b_t_M_B_t_B.getObjectByName("backLeanToFrontLeg").clone();
                backLeanToLeftFMiddleLeg.name = "backLeanToLeftFMiddleLeg" + i;
                backLeanToLeftFMiddleLeg.material = backLeanToLeftFMiddleLeg.material.clone();
                // backLeanToLeftFMiddleLeg.rotation.y = Math.PI/2
                const_var.legsForCut["back"][backLeanToLeftFMiddleLeg.name] = backLeanToLeftFMiddleLeg;

                if (i > (params.p_w / 2) - (cut / 2) - (hBowsScale / 2)) {
                    let hFrR = (params.p_r_s == "1") ? 0.490 : 0;
                    backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow + hFrR, 1);
                    backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow + hFrR) / 2, zpos);
                } else {
                    backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h + i / slope[params.p_r_p]) + (cut * params.p_r_p * 0.04), 1);
                    backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h / 2 + (i / (slope[params.p_r_p] * 2))) + (cut * params.p_r_p * 0.02), zpos);
                }
                if (i >= ((params.p_w / 2) - (cut / 2) - (hBowsScale / 2)) + hBowsScale) {
                    backLeanToLeftFMiddleLeg.scale.set(0.5, ((params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) * 2) - (cut * params.p_r_p * 0.042), 1);
                    backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - (cut * params.p_r_p * 0.021), zpos);
                }


                if (params.trussType == "ACDT" || params.trussType == "QCT") {
                    if (i > (params.p_w / 2) - (cut / 2) - (hBowsScale / 2)) {
                        if (params.p_w > 41) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - 1.8, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - 1.8) / 2, zpos);
                        }
                        if (params.p_w > 31 && params.p_w < 41) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - 1, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - 1) / 2, zpos);
                        }
                    } else {
                        if (params.p_w > 31) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + i / slope[params.p_r_p] - 1 + (cut * params.p_r_p * 0.04), 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (i / (slope[params.p_r_p] * 2)) - 0.5 + (cut * params.p_r_p * 0.02), zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h + i / slope[params.p_r_p]) + (cut * params.p_r_p * 0.04), 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h / 2 + (i / (slope[params.p_r_p] * 2))) + (cut * params.p_r_p * 0.02), zpos);
                        }
                    }
                    if (i >= ((params.p_w / 2) - (cut / 2) - (hBowsScale / 2)) + hBowsScale) {
                        if (params.p_w > 31) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, ((params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.5) * 2) - (cut * params.p_r_p * 0.042), 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.5) - (cut * params.p_r_p * 0.021), zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, ((params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) * 2) - (cut * params.p_r_p * 0.042), 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) - (cut * params.p_r_p * 0.021), zpos);
                        }
                    }
                }

                if (params.trussType == "ACT") {
                    if (i > (params.p_w / 2) - (cut / 2) - (hBowsScale / 2)) {
                        if (params.p_w > 41) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - 1.5, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - 1.5) / 2, zpos);
                        }
                        if (params.p_w > 31 && params.p_w < 41) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - 0.8, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - 0.8) / 2, zpos);
                        }
                    } else {
                        if (params.p_w > 31) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h + i / slope[params.p_r_p] - 0.8) + (cut * params.p_r_p * 0.04), 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h / 2 + (i / (slope[params.p_r_p] * 2)) - 0.4) + (cut * params.p_r_p * 0.02), zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h + i / slope[params.p_r_p]) + (cut * params.p_r_p * 0.04), 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h / 2 + (i / (slope[params.p_r_p] * 2))) + (cut * params.p_r_p * 0.02), zpos);
                        }
                    }
                    if (i >= ((params.p_w / 2) - (cut / 2) - (hBowsScale / 2)) + hBowsScale) {
                        if (params.p_w > 31) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, ((params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.4) * 2) - (cut * params.p_r_p * 0.042), 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.4) - (cut * params.p_r_p * 0.021), zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, ((params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) * 2) - (cut * params.p_r_p * 0.042), 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) - (cut * params.p_r_p * 0.021), zpos);
                        }
                    }
                }

                if (params.trussType == "CTCT") {
                    if (i > (params.p_w / 2) - (cut / 2) - (hBowsScale / 2)) {
                        if (params.p_w > 31 && params.p_w < 41) {
                            var hDis = (params.p_r_p > 3) ? 0.9 : 1.0;
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - hDis, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - hDis) / 2, zpos);
                        }
                        if (params.p_w > 41) {
                            var hDis = (params.p_r_p > 3) ? 1.7 : 1.8;
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - hDis, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - hDis) / 2, zpos);
                        }
                    } else {
                        if (params.p_w > 31) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h + i / slope[params.p_r_p] - 1) + (cut * params.p_r_p * 0.04), 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h / 2 + (i / (slope[params.p_r_p] * 2)) - 0.5) + (cut * params.p_r_p * 0.02), zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h + i / slope[params.p_r_p]) + (cut * params.p_r_p * 0.04), 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h / 2 + (i / (slope[params.p_r_p] * 2))) + (cut * params.p_r_p * 0.02), zpos);
                        }
                    }
                    if (i >= ((params.p_w / 2) - (cut / 2) - (hBowsScale / 2)) + hBowsScale) {
                        if (params.p_w > 31) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, ((params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.5) * 2) - (cut * params.p_r_p * 0.042), 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.5) - (cut * params.p_r_p * 0.021), zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, ((params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) * 2) - (cut * params.p_r_p * 0.042), 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) - (cut * params.p_r_p * 0.021), zpos);
                        }
                    }
                }

                if (params.trussType == "SBST") {
                    if (params.p_w > 31 && params.p_w < 41) {
                        backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h, 1);
                        backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h) / 2, zpos);
                    }
                    if (params.p_w > 41) {
                        backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h, 1);
                        backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h) / 2, zpos);
                    }
                }

                if (params.trussType == "ECT" || params.trussType == "LST" || params.trussType == "RNT") {
                    var posForBow = { "1": { "p": 1.5, "s": 0 }, "2": { "p": 1.5, "s": 0 }, "3": { "p": 1.5, "s": 0.1 }, "4": { "p": 1.45, "s": 0.4 }, "5": { "p": 1.5, "s": 0.1 }, "6": { "p": 1.55, "s": 0.3 } };
                    if (i > (params.p_w / 2) - (cut / 2) - (hBowsScale + posForBow[params.p_r_p]["s"]) / 2) {
                        if (params.p_w > 30 && params.p_w < 41) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - 0.6, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - 0.6) / 2, zpos);
                        }
                        if (params.p_w > 41 && params.p_w < 70) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - 1.5, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - 1.5) / 2, zpos);
                        }
                        if (params.p_w > 70) {
                            var posForBow = { "1": { "p": 1.5, "s": 0 }, "2": { "p": 1.5, "s": 0 }, "3": { "p": 1.5, "s": 0.1 }, "4": { "p": 1.45, "s": 0.4 }, "5": { "p": 1.5, "s": 0.1 }, "6": { "p": 1.55, "s": 0.3 } };
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - posForBow[params.p_r_p]["p"], 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - posForBow[params.p_r_p]["p"]) / 2, zpos);
                        }
                    } else {
                        if (params.p_w > 31) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, ((params.p_h + i / slope[params.p_r_p] - 0.8)) + (cut * params.p_r_p * 0.04), 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h / 2 + (i / (slope[params.p_r_p] * 2)) - 0.4) + (cut * params.p_r_p * 0.02), zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h + i / slope[params.p_r_p]) + (cut * params.p_r_p * 0.04), 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h / 2 + (i / (slope[params.p_r_p] * 2))) + (cut * params.p_r_p * 0.02), zpos);
                        }
                    }

                    if (i > (params.p_w / 2) - (cut / 2) - ((hBowsScale + posForBow[params.p_r_p]["s"]) / 2) + (hBowsScale + posForBow[params.p_r_p]["s"])) {
                        if (params.p_w > 31) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, ((params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.4) * 2) - (cut * params.p_r_p * 0.042), 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.4) - (cut * params.p_r_p * 0.021), zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, ((params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) * 2) - (cut * params.p_r_p * 0.042), 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) - (cut * params.p_r_p * 0.021), zpos);
                        }
                    }
                }

                if ( params.trussType == "CST") {
                    if (i > (params.p_w / 2) - (cut / 2)) {
                        if (params.p_w >= 26) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - 1.8, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - 1.8) / 2, zpos);
                        }
                        

                    } else {
                        if (params.p_w >= 26) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + i / slope[params.p_r_p] - 1 + (cut * params.p_r_p * 0.04), 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (i / (slope[params.p_r_p] * 2)) - 0.5 + (cut * params.p_r_p * 0.02), zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h + i / slope[params.p_r_p]) + (cut * params.p_r_p * 0.04)-0.4, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h / 2 + (i / (slope[params.p_r_p] * 2))) + (cut * params.p_r_p * 0.02)-0.2, zpos);
                        }
                    }
                    if (i >= ((params.p_w / 2) - (cut / 2)) + 0) {
                        if (params.p_w >= 26) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, ((params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.5) * 2) - (cut * params.p_r_p * 0.042), 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.5) - (cut * params.p_r_p * 0.021), zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, ((params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) * 2) - (cut * params.p_r_p * 0.042), 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) - (cut * params.p_r_p * 0.021), zpos);
                        }
                    }
                }

                backLeanToLeftFMiddleLeg.visible = true;
                BackLeanLegs.add(backLeanToLeftFMiddleLeg);
            }
        }


        // Back Lean-to Left Legs According to Right Allignment for all Roof Trusses and Buildings
        for (let i = params.leanB_p_d / dis; i <= (params.leanB_p_d) + 1; i = i + (params.leanB_p_d / dis)) {
            let zpos = ((params.leanB_p_d / 2 + 0.12) - i.toFixed(2))

            if (params.leantoAlignmentBack == "3") {
                const backLeanToLeftFMiddleLeg = const_var.b_t_M_B_t_B.getObjectByName("backLeanToFrontLeg").clone();
                backLeanToLeftFMiddleLeg.name = "backLeanToLeftFMiddleLeg" + i;
                backLeanToLeftFMiddleLeg.material = backLeanToLeftFMiddleLeg.material.clone();
                // backLeanToLeftFMiddleLeg.rotation.y = Math.PI/2
                const_var.legsForCut["back"][backLeanToLeftFMiddleLeg.name] = backLeanToLeftFMiddleLeg;

                if (i > (params.p_w / 2) - (hBowsScale / 2)) {
                    let hFrR = (params.p_r_s == "1") ? 0.490 : 0;
                    backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow + hFrR, 1);
                    backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow + hFrR) / 2, zpos);
                } else {
                    backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + i / slope[params.p_r_p], 1);
                    backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (i / (slope[params.p_r_p] * 2)), zpos);
                }
                if (i >= ((params.p_w / 2) - (hBowsScale / 2)) + hBowsScale) {
                    backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) * 2, 1);
                    backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)), zpos);
                }


                if (params.trussType == "ACDT" || params.trussType == "QCT") {
                    if (i > (params.p_w / 2) - (hBowsScale / 2)) {
                        if (params.p_w > 41) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - 1.8, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - 1.8) / 2, zpos);
                        }
                        if (params.p_w > 31 && params.p_w < 41) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - 1, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - 1) / 2, zpos);
                        }
                    } else {
                        if (params.p_w > 31) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + i / slope[params.p_r_p] - 1, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (i / (slope[params.p_r_p] * 2)) - 0.5, zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + i / slope[params.p_r_p], 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (i / (slope[params.p_r_p] * 2)), zpos);
                        }
                    }
                    if (i >= ((params.p_w / 2) - (hBowsScale / 2)) + hBowsScale) {
                        if (params.p_w > 31) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.5) * 2, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.5, zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) * 2, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)), zpos);
                        }
                    }
                }

                if (params.trussType == "ACT") {
                    if (i > (params.p_w / 2) - (hBowsScale / 2)) {
                        if (params.p_w > 41) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - 1.5, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - 1.5) / 2, zpos);
                        }
                        if (params.p_w > 31 && params.p_w < 41) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - 0.8, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - 0.8) / 2, zpos);
                        }
                    } else {
                        if (params.p_w > 31) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + i / slope[params.p_r_p] - 0.8, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (i / (slope[params.p_r_p] * 2)) - 0.4, zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + i / slope[params.p_r_p], 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (i / (slope[params.p_r_p] * 2)), zpos);
                        }
                    }
                    if (i >= ((params.p_w / 2) - (hBowsScale / 2)) + hBowsScale) {
                        if (params.p_w > 31) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.4) * 2, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.4, zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) * 2, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)), zpos);
                        }
                    }
                }

                if (params.trussType == "CTCT") {
                    if (i > (params.p_w / 2) - (hBowsScale / 2)) {
                        if (params.p_w > 31 && params.p_w < 41) {
                            var hDis = (params.p_r_p > 3) ? 0.9 : 1.0;
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - hDis, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - hDis) / 2, zpos);
                        }
                        if (params.p_w > 41) {
                            var hDis = (params.p_r_p > 3) ? 1.7 : 1.8;
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - hDis, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - hDis) / 2, zpos);
                        }
                    } else {
                        if (params.p_w > 31) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + i / slope[params.p_r_p] - 1, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (i / (slope[params.p_r_p] * 2)) - 0.5, zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + i / slope[params.p_r_p], 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (i / (slope[params.p_r_p] * 2)), zpos);
                        }
                    }
                    if (i >= ((params.p_w / 2) - (hBowsScale / 2)) + hBowsScale) {
                        if (params.p_w > 31) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.5) * 2, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.5, zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) * 2, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)), zpos);
                        }
                    }
                }

                if (params.trussType == "SBST") {
                    if (params.p_w > 31 && params.p_w < 41) {
                        backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h, 1);
                        backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h) / 2, zpos);
                    }
                    if (params.p_w > 41) {
                        backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h, 1);
                        backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h) / 2, zpos);
                    }
                }

                if (params.trussType == "ECT" || params.trussType == "LST" || params.trussType == "RNT") {
                    var posForBow = { "1": { "p": 1.5, "s": 0 }, "2": { "p": 1.5, "s": 0 }, "3": { "p": 1.5, "s": 0.1 }, "4": { "p": 1.45, "s": 0.4 }, "5": { "p": 1.5, "s": 0.1 }, "6": { "p": 1.55, "s": 0.3 } };
                    if (i > (params.p_w / 2) - (hBowsScale + posForBow[params.p_r_p]["s"]) / 2) {
                        if (params.p_w > 30 && params.p_w < 41) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - 0.6, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - 0.6) / 2, zpos);
                        }
                        if (params.p_w > 41 && params.p_w < 70) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - 1.5, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - 1.5) / 2, zpos);
                        }
                        if (params.p_w > 70) {
                            var posForBow = { "1": { "p": 1.5, "s": 0 }, "2": { "p": 1.5, "s": 0 }, "3": { "p": 1.5, "s": 0.1 }, "4": { "p": 1.45, "s": 0.4 }, "5": { "p": 1.5, "s": 0.1 }, "6": { "p": 1.55, "s": 0.3 } };
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - posForBow[params.p_r_p]["p"], 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - posForBow[params.p_r_p]["p"]) / 2, zpos);
                        }
                    } else {
                        if (params.p_w > 31) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + i / slope[params.p_r_p] - 0.8, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (i / (slope[params.p_r_p] * 2)) - 0.4, zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + i / slope[params.p_r_p], 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (i / (slope[params.p_r_p] * 2)), zpos);
                        }
                    }

                    if (i > (params.p_w / 2) - ((hBowsScale + posForBow[params.p_r_p]["s"]) / 2) + (hBowsScale + posForBow[params.p_r_p]["s"])) {
                        if (params.p_w > 31) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.4) * 2, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.4, zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) * 2, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)), zpos);
                        }
                    }
                }

                
                if (params.trussType == "CST") {
                    var posForBow = { "1": { "p": 1.5, "s": 0 }, "2": { "p": 1.5, "s": 0 }, "3": { "p": 1.5, "s": 0.1 }, "4": { "p": 1.45, "s": 0.4 }, "5": { "p": 1.5, "s": 0.1 }, "6": { "p": 1.55, "s": 0.3 } };
                    if (i > (params.p_w / 2) - (0 + posForBow[params.p_r_p]["s"]) / 2) {
                        if (params.p_w > 26 ) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + 0 - 0.8, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + 0 - 0.8) / 2, zpos);
                        }

                    } else {
                        if (params.p_w > 26) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + i / slope[params.p_r_p] - 1, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (i / (slope[params.p_r_p] * 2)) - 0.5, zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h + i / slope[params.p_r_p])-0.2, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (i / (slope[params.p_r_p] * 2))-0.1, zpos);
                        }
                    }

                    if (i > (params.p_w / 2) - ((0 + posForBow[params.p_r_p]["s"]) / 2) + (0 + posForBow[params.p_r_p]["s"])) {
                        if (params.p_w > 26) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.6) * 2, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.6, zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))-0.2) * 2, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))-0.2, zpos);
                        }
                    }
                }

                backLeanToLeftFMiddleLeg.visible = true;
                BackLeanLegs.add(backLeanToLeftFMiddleLeg);
            }
        }

        // Back Lean-to Right Legs According to Left Allignment for all Roof Trusses and Buildings
        for (let i = params.leanB_p_d / dis; i <= (params.leanB_p_d) + 1; i = i + (params.leanB_p_d / dis)) {
            let zpos = (((params.leanB_p_d / -2) - 0.12) + i)


            if (params.leantoAlignmentBack == "2") {
                const backLeanToLeftFMiddleLeg = const_var.b_t_M_B_t_B.getObjectByName("backLeanToFrontLeg").clone();
                backLeanToLeftFMiddleLeg.name = "backLeanToLeftFMiddleLeg" + i;
                backLeanToLeftFMiddleLeg.material = backLeanToLeftFMiddleLeg.material.clone();
                const_var.legsForCut["back"][backLeanToLeftFMiddleLeg.name] = backLeanToLeftFMiddleLeg;

                if (i > (params.p_w / 2) - (hBowsScale / 2)) {
                    let hFrR = (params.p_r_s == "1") ? 0.490 : 0;
                    backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow + hFrR, 1);
                    backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow + hFrR) / 2, zpos);
                } else {
                    backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + i / slope[params.p_r_p], 1);
                    backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (i / (slope[params.p_r_p] * 2)), zpos);
                }
                if (i >= ((params.p_w / 2) - (hBowsScale / 2)) + hBowsScale) {
                    backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) * 2, 1);
                    backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)), zpos);
                }


                if (params.trussType == "ACDT" || params.trussType == "QCT") {
                    if (i > (params.p_w / 2) - (hBowsScale / 2)) {
                        if (params.p_w > 41) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - 1.8, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - 1.8) / 2, zpos);
                        }
                        if (params.p_w > 31 && params.p_w < 41) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - 1, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - 1) / 2, zpos);
                        }
                    } else {
                        if (params.p_w > 31) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + i / slope[params.p_r_p] - 1, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (i / (slope[params.p_r_p] * 2)) - 0.5, zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + i / slope[params.p_r_p], 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (i / (slope[params.p_r_p] * 2)), zpos);
                        }
                    }
                    if (i >= ((params.p_w / 2) - (hBowsScale / 2)) + hBowsScale) {
                        if (params.p_w > 31) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.5) * 2, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.5, zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) * 2, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)), zpos);
                        }
                    }
                }

                if (params.trussType == "ACT") {
                    if (i > (params.p_w / 2) - (hBowsScale / 2)) {
                        if (params.p_w > 41) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - 1.5, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - 1.5) / 2, zpos);
                        }
                        if (params.p_w > 31 && params.p_w < 41) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - 0.8, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - 0.8) / 2, zpos);
                        }
                    } else {
                        if (params.p_w > 31) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + i / slope[params.p_r_p] - 0.8, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (i / (slope[params.p_r_p] * 2)) - 0.4, zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + i / slope[params.p_r_p], 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (i / (slope[params.p_r_p] * 2)), zpos);
                        }
                    }
                    if (i >= ((params.p_w / 2) - (hBowsScale / 2)) + hBowsScale) {
                        if (params.p_w > 31) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.4) * 2, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.4, zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) * 2, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)), zpos);
                        }
                    }
                }

                if (params.trussType == "CTCT") {
                    if (i > (params.p_w / 2) - (hBowsScale / 2)) {
                        if (params.p_w > 31 && params.p_w < 41) {
                            var hDis = (params.p_r_p > 3) ? 0.9 : 1.0;
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - hDis, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - hDis) / 2, zpos);
                        }
                        if (params.p_w > 41) {
                            var hDis = (params.p_r_p > 3) ? 1.7 : 1.8;
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - hDis, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - hDis) / 2, zpos);
                        }
                    } else {
                        if (params.p_w > 31) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + i / slope[params.p_r_p] - 1, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (i / (slope[params.p_r_p] * 2)) - 0.5, zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + i / slope[params.p_r_p], 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (i / (slope[params.p_r_p] * 2)), zpos);
                        }
                    }
                    if (i >= ((params.p_w / 2) - (hBowsScale / 2)) + hBowsScale) {
                        if (params.p_w > 31) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.5) * 2, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.5, zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) * 2, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)), zpos);
                        }
                    }
                }

                if (params.trussType == "SBST") {
                    if (params.p_w > 31 && params.p_w < 41) {
                        backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h, 1);
                        backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h) / 2, zpos);
                    }
                    if (params.p_w > 41) {
                        backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h, 1);
                        backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h) / 2, zpos);
                    }
                }

                if (params.trussType == "ECT" || params.trussType == "LST" || params.trussType == "RNT") {
                    var posForBow = { "1": { "p": 1.5, "s": 0 }, "2": { "p": 1.5, "s": 0 }, "3": { "p": 1.5, "s": 0.1 }, "4": { "p": 1.45, "s": 0.4 }, "5": { "p": 1.5, "s": 0.1 }, "6": { "p": 1.55, "s": 0.3 } };
                    if (i > (params.p_w / 2) - (hBowsScale + posForBow[params.p_r_p]["s"]) / 2) {
                        if (params.p_w > 30 && params.p_w < 41) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - 0.6, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - 0.6) / 2, zpos);
                        }
                        if (params.p_w > 41 && params.p_w < 70) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - 1.5, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - 1.5) / 2, zpos);
                        }
                        if (params.p_w > 70) {
                            var posForBow = { "1": { "p": 1.5, "s": 0 }, "2": { "p": 1.5, "s": 0 }, "3": { "p": 1.5, "s": 0.1 }, "4": { "p": 1.45, "s": 0.4 }, "5": { "p": 1.5, "s": 0.1 }, "6": { "p": 1.55, "s": 0.3 } };
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + hIncForBow - posForBow[params.p_r_p]["p"], 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + hIncForBow - posForBow[params.p_r_p]["p"]) / 2, zpos);
                        }
                    } else {
                        if (params.p_w > 31) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + i / slope[params.p_r_p] - 0.8, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (i / (slope[params.p_r_p] * 2)) - 0.4, zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + i / slope[params.p_r_p], 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (i / (slope[params.p_r_p] * 2)), zpos);
                        }
                    }

                    if (i > (params.p_w / 2) - ((hBowsScale + posForBow[params.p_r_p]["s"]) / 2) + (hBowsScale + posForBow[params.p_r_p]["s"])) {
                        if (params.p_w > 31) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.4) * 2, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.4, zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) * 2, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)), zpos);
                        }
                    }
                }

                
                if (params.trussType == "CST") {
                    if (i > (params.p_w / 2)) {
                        if (params.p_w >= 26) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + 0 - 1.8, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, (params.p_h + 0 - 1.8) / 2, zpos);
                        }

                    } else {
                        if (params.p_w >= 26) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + i / slope[params.p_r_p] - 1, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (i / (slope[params.p_r_p] * 2)) - 0.5, zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, params.p_h + i / slope[params.p_r_p], 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (i / (slope[params.p_r_p] * 2)), zpos);
                        }
                    }
                    if (i >= ((params.p_w / 2)) ) {
                        if (params.p_w >= 26) {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.5) * 2, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)) - 0.5, zpos);
                        } else {
                            backLeanToLeftFMiddleLeg.scale.set(0.5, (params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2))) * 2, 1);
                            backLeanToLeftFMiddleLeg.position.set((params.p_d / -2) + 0.08, params.p_h / 2 + (roofMiddleHeight[params.p_r_p][params.p_w]) - (i / (slope[params.p_r_p] * 2)), zpos);
                        }
                    }
                }


                backLeanToLeftFMiddleLeg.visible = true;
                BackLeanLegs.add(backLeanToLeftFMiddleLeg);
            }
        }
    }

        let EqiDis;
        if (params.fourth_center_cost == true) {
            if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
            {
                EqiDis = (params.oncenter_val_with_action!='')?((params.leanB_p_d)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.leanB_p_d)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0)
            }
        } else {
            if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
            {
                EqiDis = (params.oncenter_val_with_action!='')?((params.leanB_p_d)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.leanB_p_d)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0)    
            }
        }

        /* Loop For Add Legs Dynamically For Back Lean To */
        let legsCount = 0;
        for (let i = params.leanB_p_d / 2 - 0.12, j = 0; i > (params.leanB_p_d / -2) - 1; i = i - (params.leanB_p_d / EqiDis), j++) {

            if (i < params.leanB_p_d / -2 + 0.12) i = (params.leanB_p_d / -2) + 0.12

            const backLeanToLeg = const_var.b_t_M_B_t_B.getObjectByName("backLeanToFrontLeg").clone();
            backLeanToLeg.name = "backLeanToLeg" + j + "x";
            backLeanToLeg.material = backLeanToLeg.material.clone();
            backLeanToLeg.scale.set(0.5, params.leanB_p_h, 1);
            backLeanToLeg.position.set(leanToLeg + 0.08, params.leanB_p_h / 2, i.toFixed(2));
            backLeanToLeg.visible = (params.p_r_s != "1") ? true : false;
            BackLeanLegs.add(backLeanToLeg);
            legsCount++; 
            if (params.p_r_s != "1"){
                const_var.legsForCut["backLean"][backLeanToLeg.name] = backLeanToLeg;
                const_var.legsForCutFee["backLean"][backLeanToLeg.name] = backLeanToLeg;
            } 

            if (params.leanB_p_e_l) {
                const backLeanToLegDouble = const_var.b_t_M_B_t_B.getObjectByName("backLeanToFrontLeg").clone();
                backLeanToLegDouble.name = "backLeanToDoubleLeg" + j + "x";
                backLeanToLegDouble.material = backLeanToLegDouble.material.clone();
                backLeanToLegDouble.scale.set(0.5, hightFor2Legs, 1);
                backLeanToLegDouble.position.set(leanToLeg + disFor2Legs, hightFor2Legs / 2, i.toFixed(2));
                // backLeanToLegDouble.visible = params.leanB_p_e_l  && params.trussType != "CTCT";
                backLeanToLegDouble.visible = params.leanB_p_e_l;
                BackLeanLegs.add(backLeanToLegDouble);
                const_var.legsForCut["backLean"][backLeanToLegDouble.name] = backLeanToLegDouble;
            }
            const backLeanToVShapLeg = const_var.b_t_M_B_t_B.getObjectByName("backLeanToFrontLeg").clone();
            backLeanToVShapLeg.name = "backLeanToVShapLeg" + i;
            backLeanToVShapLeg.material = backLeanToVShapLeg.material.clone();
            // backLeanToVShapLeg.visible = params.leanB_p_e_l;
            backLeanToVShapLeg.visible = params.leanB_p_e_l && params.trussType == "CTCT";
            backLeanToVShapLeg.visible = false;
            backLeanToVShapLeg.scale.set(0.5, hightForVShapLegs, 1);
            backLeanToVShapLeg.position.set(leanToLeg + disForVShapLegs, hightForVShapLegs / 2, i.toFixed(2));
            backLeanToVShapLeg.rotation.z = -0.1325 + (params.leanB_p_h * 0.005);//-0.0325;//-0.0925;                       
            BackLeanLegs.add(backLeanToVShapLeg);

            const backLeanToLegR = const_var.b_t_M_B_t_B.getObjectByName("backLeanToFrontLegR").clone();
            backLeanToLegR.name = "backLeanToLeg" + j + "xR";
            backLeanToLegR.material = backLeanToLegR.material.clone();
            backLeanToLegR.scale.set(0.5, params.leanB_p_h - 0.1, 1);
            backLeanToLegR.position.set(leanToLeg + 0.08, (params.leanB_p_h / 2) - 0.05, i.toFixed(2));
            backLeanToLegR.visible = (params.p_r_s == "1") ? true : false;
            BackLeanLegs.add(backLeanToLegR);
            if (params.p_r_s == "1") {
                const_var.legsForCut["backLean"][backLeanToLegR.name] = backLeanToLegR;
                const_var.legsForCutFee["backLean"][backLeanToLegR.name] = backLeanToLegR;
            }

            // const backLeanToRightFMiddleLeg = const_var.b_t_M_B_t_B.getObjectByName("backLeanToFrontLeg").clone();
            // backLeanToRightFMiddleLeg.name = "backLeanToRightFMiddleLeg" + i;
            // // backLeanToRightFMiddleLeg.rotation.y = Math.PI/2
            // backLeanToRightFMiddleLeg.scale.set(0.5, params.p_h + roofMiddleHeight[params.p_r_p][params.p_w]-i/slope[params.p_r_p], 1);
            // backLeanToRightFMiddleLeg.position.set((params.p_d /-2) + 0.08,params.p_h / 2+ (roofMiddleHeight[params.p_r_p][params.p_w]/2)-i/(slope[params.p_r_p]*2),i.toFixed(2));
            // // backLeanToRightFMiddleLeg.visible = (params.p_r_s != "1")?true:false;
            // BackLeanLegs.add(backLeanToRightFMiddleLeg); 

            // const backLeanToRightBMiddleLeg = const_var.b_t_M_B_t_B.getObjectByName("backLeanToFrontLeg").clone();
            // backLeanToRightBMiddleLeg.name = "backLeanToRightBMiddleLeg" + i;
            // // backLeanToRightBMiddleLeg.rotation.y = Math.PI/2
            // backLeanToRightBMiddleLeg.scale.set(0.5, params.p_h + roofMiddleHeight[params.p_r_p][params.p_w]-i/slope[params.p_r_p], 1);
            // backLeanToRightBMiddleLeg.position.set((params.p_d /-2) + 0.08,params.p_h / 2+ (roofMiddleHeight[params.p_r_p][params.p_w]/2)-i/(slope[params.p_r_p]*2),-i.toFixed(2));
            // // backLeanToRightBMiddleLeg.visible = (params.p_r_s != "1")?true:false;
            // BackLeanLegs.add(backLeanToRightBMiddleLeg);
        }

        let connectorDis = 2
        for (let i = 0; i < ((params.leanB_p_h) - 1); i = i + connectorDis) {

            for (let e = params.leanB_p_d / 2 - 0.12, j = 0; e > (params.leanB_p_d / -2) - 1; e = e - (params.leanB_p_d / EqiDis), j++) {

                if (e < params.leanB_p_d / -2 + 0.12) e = (params.leanB_p_d / -2) + 0.12

                if (e >= (params.leanB_p_d / 2) - 2) {
                    e = (params.leanB_p_d / 2) - 0.12;
                }

                const legConnector = const_var.b_t_M_L.getObjectByName("legConnector").clone();
                legConnector.name = "bllegConnector" + j + 'x' + i;
                legConnector.material = legConnector.material.clone();
                legConnector.scale.set(0.5, 0.2, 0.3);
                legConnector.position.set(-(params.leanB_p_w) - (params.p_d / 2) + 0.35, i+0.075, e);
                legConnector.visible = const_var.leanBLegstype == "ladder" && params.leanB_p_e_l
                BackLeanLegs.add(legConnector);
                const_var.legsForCut["backLean"][legConnector.name] = legConnector;
            }
        }

        if(params.p_b_c_b_b_f == "Close" || params.p_b_c_b_b_b == "Close"){    

        /* Back Leanto Base Rail For End Legs*/
        if(params.p_b_c_b_b_b == "Close"){
        const backLeantoRightBaseRail = const_var.b_t_M_B_t_B.getObjectByName("backLeantoBaseRail").clone();
        backLeantoRightBaseRail.name = "backLeantoRightBaseRail";
        backLeantoRightBaseRail.material = backLeantoRightBaseRail.material.clone();
        backLeantoRightBaseRail.scale.set(0.5, params.leanB_p_w - 0.02, 0.7);
        backLeantoRightBaseRail.position.set(-((params.leanB_p_w/2) + (params.p_d / 2)), 0.08, (params.leanB_p_d/2)- 0.12);
        backLeantoRightBaseRail.rotation.x = Math.PI / -2;
        backLeantoRightBaseRail.rotation.z = Math.PI / 2;
        backLeantoRightBaseRail.visible = params.add_back_lean;
        BackLeanLegs.add(backLeantoRightBaseRail);
        const_var.legsForCut["backBackLean"][backLeantoRightBaseRail.name] = backLeantoRightBaseRail;
        }

        if(params.p_b_c_b_b_f == "Close"){
        const backLeantoLeftBaseRail = const_var.b_t_M_B_t_B.getObjectByName("backLeantoBaseRail").clone();
        backLeantoLeftBaseRail.name = "backLeantoLeftBaseRail";
        backLeantoLeftBaseRail.material = backLeantoLeftBaseRail.material.clone();
        backLeantoLeftBaseRail.scale.set(0.5, params.leanB_p_w - 0.02, 0.7);
        backLeantoLeftBaseRail.position.set(-((params.leanB_p_w/2) + (params.p_d / 2)), 0.08, (params.leanB_p_d/-2)+ 0.12);
        backLeantoLeftBaseRail.rotation.x = Math.PI / -2;
        backLeantoLeftBaseRail.rotation.z = Math.PI / 2;
        backLeantoLeftBaseRail.visible = params.add_back_lean;
        BackLeanLegs.add(backLeantoLeftBaseRail);
        const_var.legsForCut["backFrontLean"][backLeantoLeftBaseRail.name] = backLeantoLeftBaseRail;
        }

            let slope = 0
            let endsEqiDis;
            if (params.fourth_center_cost == true) {
                    if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
                {
                    endsEqiDis = (params.oncenter_val_with_action!='')?((params.leanB_p_w)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.leanB_p_w)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0)
                }
            } else {
                if(const_var.DistanceArr.length>0 && const_var.DistanceArr[params.p_b_t][params.p_r_s]!=undefined)
                {
                    endsEqiDis = (params.oncenter_val_with_action!='')?((params.leanB_p_w)/parseInt(params.oncenter_val_with_action)).toFixed(0):((params.leanB_p_w)/parseInt(const_var.DistanceArr[params.p_b_t][params.p_r_s])).toFixed(0)    
                }
            }
    
            
    
            for (let i = params.p_d / -2 - params.leanB_p_w ; i < -(params.p_d /2); i = i + (params.leanB_p_w / endsEqiDis)) { 
    
                if(params.p_b_c_b_b_b == "Close" && i != params.p_d / -2 - params.leanB_p_w ){
                    const backLeantoFrontLegs = const_var.b_t_M_B_t_B.getObjectByName("backLeanToFrontLeg").clone();
                    backLeantoFrontLegs.name = "backLeantoFrontLegs" + i;
                    backLeantoFrontLegs.material = backLeantoFrontLegs.material.clone();
                    backLeantoFrontLegs.scale.set(0.5, params.leanB_p_h == 0 ? 1: params.leanB_p_h + ((params.b_l_t_r_pB/12)*(slope*(params.leanB_p_w / endsEqiDis))), 1);
                    backLeantoFrontLegs.position.set((0.08 +i).toFixed(2), (params.leanB_p_h+((params.b_l_t_r_pB/12)*(slope*(params.leanB_p_w / endsEqiDis)))) / 2, params.leanB_p_d / 2 - 0.12);
                    backLeantoFrontLegs.rotation.y = Math.PI/2
                    backLeantoFrontLegs.visible =true;
                    BackLeanLegs.add(backLeantoFrontLegs);
                    legsCount++; 
                    const_var.legsForCut["backBackLean"][backLeantoFrontLegs.name] = backLeantoFrontLegs;
                }
    
                if(params.p_b_c_b_b_f == "Close" && i != params.p_d / -2 - params.leanB_p_w){
                    const backLeantoBackLegs = const_var.b_t_M_B_t_B.getObjectByName("backLeanToFrontLeg").clone();
                    backLeantoBackLegs.name = "backLeantoBackLegs" + i;
                    backLeantoBackLegs.material = backLeantoBackLegs.material.clone();
                    backLeantoBackLegs.scale.set(0.5, params.leanB_p_h == 0 ? 1: params.leanB_p_h + ((params.b_l_t_r_pB/12)*(slope*(params.leanB_p_w / endsEqiDis))), 1);
                    backLeantoBackLegs.position.set((0.08 +i).toFixed(2), (params.leanB_p_h+((params.b_l_t_r_pB/12)*(slope*(params.leanB_p_w / endsEqiDis)))) / 2, params.leanB_p_d / -2 + 0.12);
                    backLeantoBackLegs.rotation.y = Math.PI/2
                    backLeantoBackLegs.visible =true;
                    BackLeanLegs.add(backLeantoBackLegs);
                    legsCount++; 
                    const_var.legsForCut["backFrontLean"][backLeantoBackLegs.name] = backLeantoBackLegs;
                }
                
                slope += 1
    
            }
        }
        const_var.backLeanLegs = legsCount;
        const_var.lengthData.backLean.legsCount = legsCount;


        /*
        if( params.leanB_p_e_l && params.trussType == "CTCT"){
            for (let i = (params.leanB_p_h/2);i<params.leanB_p_h; i = i+connectorDis) {
    
                for (let e = params.leanB_p_d/2 -0.12; e > (params.leanB_p_d/-2 )-1; e = e - (params.leanB_p_d / EqiDis )) {
                        
                    if( e < params.leanB_p_d / -2 + 0.12 ) e = (params.leanB_p_d /-2) + 0.12
    
                    if(e >= (params.leanB_p_d/2)-2){
                    e = (params.leanB_p_d/2)-0.12;
                    }
    
                    const vShapeLegConnector = const_var.b_t_M_L.getObjectByName("legConnector").clone();
                            vShapeLegConnector.name = "vShapeLegConnector"+e;
                            vShapeLegConnector.scale.set(0.5,0.2,0.3);
                            vShapeLegConnector.position.set(-(params.leanB_p_w)-(params.p_d/2)+0.35,i,e);
                    vShapeLegConnector.visible =  const_var.leanBLegstype  == "ladder"
                    vShapeLegConnector.position.x = -(params.leanB_p_w)-(params.p_d/2)+(((i*0.15)-(params.leanB_p_h*0.005*i))/2)//+0.35
                    vShapeLegConnector.scale.x = (i*0.15) -(params.leanB_p_h*0.006*i)
                    vShapeLegConnector.visible = params.leanB_p_e_l
                    BackLeanLegs.add(vShapeLegConnector);
                }
            }
    
        }
        */

        if (const_var.leanBLegstype == "zigzag" && params.leanB_p_e_l ) {
            zigZagLegs((params.leanB_p_w*2) + (params.p_d), params.leanB_p_d, params.leanB_p_h,  BackLeanLegs, undefined, EqiDis,  "backLean", undefined,);
        }   
        
    }
    
    /* Back Leanto Alignment */
    if (params.leantoAlignmentBack == "1") {
        BackLeanLegs.position.x = 0;
    }
    if (params.leantoAlignmentBack == "2") {
        BackLeanLegs.position.x = params.p_w / 2 - params.leanB_p_d / 2;
    }
    if (params.leantoAlignmentBack == "3") {
        BackLeanLegs.position.x = -params.p_w / 2 + params.leanB_p_d / 2;
    }
    if (params.isShowCenter == true) {
        BackLeanLegs.visible = false
    }
}