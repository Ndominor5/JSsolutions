"use strict";
const markM = {
    'firstName': 'Mark',
    'lastName': 'Miller',
    'mass': 92,
    'height': 1.95,

    calcBMI: function() {
        this.BMI = (this.mass / this.height ** 2);
        return  this.BMI;
    }
};

const johnS = {
    'firstName': 'John',
    'lastName': 'Smith',
    'mass': 78,
    'height': 1.69,

    calcBMI: function() {
        this.BMI = (this.mass / this.height ** 2);
        return  this.BMI;
    }
};

markM.calcBMI();
console.log(markM.BMI);
johnS.calcBMI();
console.log(johnS.BMI);

if(markM.BMI > johnS.BMI){
    console.log( `${markM.firstName} ${markM.lastName}'s BMI (${markM.BMI}) is higher than ${johnS.firstName} ${johnS.lastName}'s (${johnS.BMI})!`);
} else {
    console.log( `${johnS.firstName} ${johnS.lastName}'s BMI (${johnS.BMI}) is higher than ${markM.firstName} ${markM.lastName}'s (${markM.BMI})!`);
};