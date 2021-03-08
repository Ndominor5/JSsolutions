/*
////////////////////////
// Values and Variables

let js = "amazing";
if (js === "amazing") alert("JS is fun!");

40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);*/

///////////////////////
// Data Types

// let jsIsFun = true;
// console.log(jsIsFun);

// console.log(typeof true);
// console.log(typeof jsIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1990;
// console.log(year);
// console.log(typeof year);

///////////////////////////////
// let, const and var


///////////////////////////////
// Basic Operators

// Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

// // Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 400
// x++; // x = x + 1
// x--; // x = x - 1
// x--;
// console.log(x);

// // Comparison operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// Operator precendence

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah);

////////////////////////////
// Strings and Template Literals

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

console.log(jonas);

// Template literals
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Template literals can be use for any strings.`);

// Multi lines
console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines.`);