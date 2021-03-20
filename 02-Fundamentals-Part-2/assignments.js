"use strict";

///////////////////
// Functions

// function describeCountry(country, population, capitalCity) {
//   return `${country}, has ${population} million people and its capital city is ${capitalCity}.`;
// }

// const country = prompt(`Enter a country:`);
// const population = prompt(
//   `Enter the population of the country that you previously entered:`
// );
// const capitalCity = prompt(`Enter the capital city:`);

// const countryInformation = describeCountry(country, population, capitalCity);
// console.log(countryInformation);

/////////////////////
// Function Declaration and Expressions

// Function Declaration
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const worldPopulation1 = percentageOfWorld1(1441);
// const worldPopulation2 = percentageOfWorld1(127);
// const worldPopulation3 = percentageOfWorld1(337);

// console.log(worldPopulation1);
// console.log(worldPopulation2);
// console.log(worldPopulation3);

// Function Expression
// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };

// const wP1 = percentageOfWorld2(1441);
// const wP2 = percentageOfWorld2(127);
// const wP3 = percentageOfWorld2(337);

// console.log(wP1);
// console.log(wP2);
// console.log(wP3);

//////////////////////
// Arrow Functions

// const percentageOfWorld3 = population => (population / 7900) * 100;

// const chinaPopulation = percentageOfWorld3(1441);
// const mexicoPopulation = percentageOfWorld3(127);
// const usaPopulation = percentageOfWorld3(337);

// console.log(chinaPopulation);
// console.log(mexicoPopulation);
// console.log(usaPopulation);

////////////////////////
// Functions Calling Other Functions
// function worldPopuPercentage(countryPopulation){
//     return ((countryPopulation / 7900) * 100).toFixed(2);
// };

// const descrivbePopulation = function(country, population){
//     const worldPopulation = worldPopuPercentage(population);

//     const message = `${country} has ${population} million people, which is about ${worldPopulation}% of the world.`

//     console.log(message);
// };

// descrivbePopulation('china', 1441);
// descrivbePopulation('mexico', 127);
// descrivbePopulation('usa', 337);

//////////////////////////
// Introduction to Arrays

// const populations = [1441, 127, 337, 6];
//console.log(populations.length === 4); // his
// if (populations.length === 4) console.log(true); // mine

// function percentageOfWorld(countryPopu) {
//   return ((countryPopu / 7900) * 100).toFixed(2);
// }

// console.log('--- Percentage Added Manually ---');
// const percentages = [
//   percentageOfWorld(populations[0]),
//   percentageOfWorld(populations[1]),
//   percentageOfWorld(populations[2]),
//   percentageOfWorld(populations[3]),
// ];

// console.log(percentages);

/////////////////////////
// Basic Array Operations

// const neighbours = ['usa', 'guatemala', 'el salvador', 'belize'];
// neighbours.push('utophia');
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if(neighbours.includes('argentina') === false){
//   console.log(`Probably not a north american country`);
// }

// neighbours[2] = 'republica de el salvador';
// console.log(neighbours);

//////////////////////
// Intro to Objects

// const myCountry = {
//   country: "Mexico",
//   capital: "Mexico City",
//   language: "Spanish",
//   population: 27,
//   neighbours: ["USA", "Guatemala", "Belize"],

// For assigment on Object Methods
// isIsland: true,
// describe: function () {
//   return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighboring countries and the capital is called ${this.capital}.`;
// },

//   checkIsland: function() {
//     this.isIsland = this.neighbours.length === 0 ? true : false;
//   }
// };

// console.log(myCountry.capital);
// console.log(myCountry["neighbours"]);

//////////////////////
// Dot vs. Bracket Notation

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and the capital is called ${myCountry.capital}.`
// );

// console.log((myCountry.population += 2));
// console.log((myCountry["population"] -= 2));

//////////////////////
// Object Methods
// console.log(myCountry.describe());

//////////////////////
// for loop
// for (let voter = 1; voter <= 50; voter++) {
//   console.log(`Voter number ${voter} is currently voting.`);
// }

//////////////////////
// Looping arrays, breaking and continuing

const populations = [1441, 127, 337, 6];
const percentages2 = [];

function percentageOfWorld(countryPopu) {
  return ((countryPopu / 7900) * 100).toFixed(2);
}

console.log('--- Percentage Added with a For Loop ---');
for (let i = 0; i < populations.length; i++){
    percentages2.push(percentageOfWorld(populations[i]));
};

console.log(percentages2);

//////////////////////
// Looping Backwards and Loops in Loops

// const listOfNeighbours = [
//     ['Canada', 'Mexico'],
//     ['Spain'],
//     ['Norway', 'Sweden', 'Russia']
// ];

// for (let i = 0; i < 3; i++) {
//     //console.log(listOfNeighbours[i]);
//     for (let x = 0; x < listOfNeighbours[i].length; x++ ) {
//         if(listOfNeighbours[i].length > 1){
//             console.log(`Neighbour: ${listOfNeighbours[i][x]}`);
//         }
//     }
// }

//////////////////////
// The while loop

//const populations = [1441, 127, 337, 6];
const percentages3 = [];

function percentageOfWorld(countryPopu) {
  return ((countryPopu / 7900) * 100).toFixed(2);
}

console.log('--- Percentage Added with a While Loop ---');
let i = 0;
while (i < populations.length) {
    percentages3.push(percentageOfWorld(populations[i]));
    i++;
};

console.log(percentages3);