// const R = ["BR", "O", "LG", "DG", "DB", "Y"];
// const DB = ["DP", "R", "Y", "DG", "O"];
// const Y = ["DB", "R"];
// const O = ["DG", "BR", "R", "DB"];
// const LG = ["R", "LB", "DP"];
// const DG = ["O", "R", "DB"];
// const LB = ["BR", "LG", "BR"];
// const BR = ["LB", "LG", "O", "R"];
// const PI = ["O"]
// const DP = ["DB","LG"];
// const dict = {"R" : R,
//             "DB" : DB,
//             "Y" : Y,
//             "O" : O,
//             "LG": LG,
//             "DG": DG,
//             "LB": LB,
//             "BR": BR,
//             "PI": PI,
//             "DP": DP};
// const dict2 = {
//     "Airport": "DG",
//     "AsiaWorld-Expo": "DG",
//     "Austin": "BR",
//     "Causeway Bay": "DB",
//     "Chai Wan": "DB",
//     "Che Kung Temple": "BR",
//     "Cheung Sha Wan": "R",
//     "Choi Hung": "LG",
//     "City One": "BR",
//     "Disneyland Resort": "PI",
//     "East Tsim Sha Tsui": "BR",
//     "Fanling": "LB",
//     "Fo Tan": "LB",
//     "Fortress Hill": "DB",
//     "Hang Hau": "DP",
//     "Heng Fa Chuen": "DB",
//     "Heng On": "BR",
//     "Hin Keng": "BR",
//     "HKU": "DB",
//     "Jordan": "R",
//     "Kai Tak": "BR",
//     "Kam Sheung Road": "BR",
//     "Kennedy Town": "DB",
//     "Kowloon Bay": "LG",
//     "Kowloon Tong": "LG",
//     "Kowloon Tung": "LB",
//     "Kwai Fong": "R",
//     "Kwai Hing": "R",
//     "Kwun Tong": "LG",
//     "Lai Chi Kok": "R",
//     "Lam Tin": "LG",
//     "Lei Tung": "Y",
//     "Lo Wu": "LB",
//     "Lohas Park": "DP",
//     "Lok Fu": "LG",
//     "Lok Ma Chau": "LB",
//     "Long Ping": "BR",
//     "Ma On Shan": "BR",
//     "Mong Kok East": "LB",
//     "Ngau Tau Kok": "LG",
//     "Ocean Park": "Y",
//     "Olympic": "O",
//     "Po Lam": "DP",
//     "Race Course": "LB",
//     "Sai Wan Ho": "DB",
//     "Sai Ying Pun": "DB",
//     "Sha Tin Wan": "BR",
//     "Sha Tin": "LB",
//     "Sham Shui Po": "R",
//     "Shau Kei Wan": "DB",
//     "Shek Kip Mei": "LG",
//     "Shek Mun": "BR",
//     "Sheung Shui": "LB",
//     "Sheung Wan": "DB",
//     "Siu Hong": "BR",
//     "South Horizons": "Y",
//     "Sung Wong Toi": "BR",
//     "Tai Koo": "DB",
//     "Tai Po Market": "LB",
//     "Tai Shui Hang": "BR",
//     "Tai Wai": "LB",
//     "Tai Wan": "BR",
//     "Tai Wo Hau": "R",
//     "Tai Wo": "LB",
//     "Tin Hau": "DB",
//     "Tin Shui Wan": "BR",
//     "To Kwa Wan": "BR",
//     "Tseung Kwan O": "DP",
//     "Tsim Sha Tsui": "R",
//     "Tsuen Wan West": "BR",
//     "Tsuen Wan": "R",
//     "Tuen Mun": "BR",
//     "Tung Chung": "O",
//     "University": "LB",
//     "Wan Chai": "DB",
//     "Whampoa": "LG",
//     "Wong Chuk Hang": "Y",
//     "Wong Tai Sin": "LG",
//     "Wu Kai Sha": "BR",
//     "Yuen Long": "BR",
// }

// const dict3 = {
//   "Admiralty": "R",
//   "Central": "DB",
//   "Diamond Hill": "BR",
//   "Ho Man Tin": "LG",
//   "Hong Kong": "DG",
//   "Hung Hom": "BR",
//   "Kowloon": "O",
//   "Lai King": "R",
//   "Mei Foo": "R",
//   "Mong Kok": "R",
//   "Nam Cheong": "O",
//   "North Point": "DB",
//   "Prince Edward": "R",
//   "Quarry Bay": "DB",
//   "Sunny Bay": "O",
//   "Tiu Keng Leng": "LG",
//   "Tsing Yi": "O",
//   "Yau Ma Tei": "R",
//   "Yau Tong": "LG",
// }

// function mFilter(all){
//     var length1 = 100000;
//     var hasoccured = false;
//     const broken = ["BROKEN", "BROKEN", "BROKEN"]
//     var temp = [];
//     for (let i = 0; i < all.length; i++){
//         // console.log(all[i]);
//         var temp2 = all[i].length-1;
//         if (all[i][temp2] == "FINISHED"){
//             hasoccured = true;
//             if (all[i].length < length1){
//                 length1 = all[i].length;
//                 temp.push(all[i]);
//             }
//         }
//     }
//     if (hasoccured){
//         return temp[temp.length-1];
//     } else {
//         return broken;
//     }
    
// }

// function mREC(final, base){
    
//     const sorted = [];
//     if ((base.length) > 1){
//         if (base[base.length-1] == final){
//             base.push("FINISHED");
//             return base;
//         }
//         for (let i = 0; i < base.length; i++){
//             sorted.push(base[i]);
//         }
//         sorted.sort();
//         for (let i = 1; i < sorted.length; i++){
//             if (sorted[i] == sorted[i-1]){
//                 base.push("BROKEN");
//                 // console.log("OCCURED LMAO      ", sorted[i]); /////////////////
//                 return base;
//                 // console.log("OCCURED LMAOdfsaffdsfsfdsf      ", sorted[i]);
//             }
//         }
//     }
    
//     const baseF = base[base.length-1];
//     const dicta = dict[baseF];
//     const all = [];
//     for (let i = 0; i < dicta.length; i++){
//         if (dicta[i] == final){
//             base.push(dicta[i]);
//             base.push("FINISHED");
//             return base;
//         }
        
//     }
//     const bSCOPY = [];
//     for (let i = 0; i < base.length; i++){
//         bSCOPY.push(base[i]);
//     }
//     for (let i = 0; i < dicta.length; i++){
//         let temp = bSCOPY.slice();
//         temp.push(dicta[i]);
//         const v1 = mREC(final, temp);
//         // console.log(v1);
//         all.push(v1)
//     }
//     // console.log(all);
//     return mFilter(all);
// }
// // console.log(mREC("BR", ["DB"]));
// function everything(final, initialize){
//   const basic = [];
//   let state = true;
//   for (var i in dict3){
//     if (i == initialize){
//       basic.push(dict3[i]);
//       state = false;
//     }
//   }
//   if (state){
//     basic.push(dict2[initialize]);
//   }
//   state = true;
//   for (var i in dict3){
//     if (i == final){
//       final = dict3[final];
//       state = false;
//     }
//   }
//   if (state){
//     final = dict2[final];
//   }
//   return mREC(final, basic);
// }


// // console.log(everything("Tsuen Wan West", "Wan Chai"));