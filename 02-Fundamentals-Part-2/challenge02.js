"use strict";

const bills = [125, 555, 44];

function calcTip(billValue){
    if(billValue >= 50 && billValue <=300){;
        return billValue * 0.15;
    } else {
        return billValue * 0.2;
    }

    // return billValue >= 50 && billValue <= 300 ? billValue * 015 : billValue * 0.2;

}

// const calcTip = billValue => billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2])
];

const total = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
]

console.log(tips);
console.log(total);
