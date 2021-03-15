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
// console.log(populations.length === 4); // his
// if (populations.length === 4) console.log(true); // mine

// function percentageOfWorld(countryPopu) {
//   return ((countryPopu / 7900) * 100).toFixed(2);
// }

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
