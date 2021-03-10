// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

let markMass = 95;
let johnMass = 85;
let markHeight = 1.88;
let johnHeight = 1.76;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

if(markBMI > johnBMI){
    console.log("Mark\'s BMI (" + markBMI + ") is higher than John\'s (" + johnBMI + ")!");
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
};
