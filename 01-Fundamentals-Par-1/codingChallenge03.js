const numTimes = 3;
let dolphinsAvg = (97 + 112 + 81) / numTimes;
let koalasAvg = (109 + 95 + 85) / numTimes;

console.log(dolphinsAvg);
console.log(koalasAvg);

// if(dolphinsAvg > koalasAvg){
//     console.log(`Dolphins are the winners!`);
// } else if(koalasAvg > dolphinsAvg){
//     console.log(`Koalas are the winners!`);
// } else {
//     console.log(`It's a draw!`);
// };

// Bonus 1 and Bonus 2
if(dolphinsAvg > koalasAvg && dolphinsAvg >= 100){
    console.log(`Dolphins are the winners!`);
} else if (koalasAvg > dolphinsAvg && koalasAvg >= 100){
    console.log(`Koalas are the winners!`);
} else if (dolphinsAvg >= 100 && koalasAvg >= 100){
    console.log(`It's a draw!`);
} else {
    console.log(`No one wins!`);
};