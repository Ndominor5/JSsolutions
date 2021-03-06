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

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

// console.log(jonas);

// Template literals
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log(`Template literals can be use for any strings.`);

// // Multi lines
// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String with
// multiple
// lines.`);

/////////////////////////
// Taking decisions: if/else statements
// const age = 15;

// if (age > 18) {
//   console.log(`Sarah can start driving license ????`);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
// }

// const birthYear = 2012;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

//////////////////////////
// Type Conversion and Coercion.

// Type Conversion
//  const inputYear = '1991';
//  console.log(Number(inputYear), inputYear);
//  console.log(Number(inputYear) + 18);

//  console.log(Number("fernando"));
//  console.log(typeof NaN);

//  console.log(String(23), 23); // When values are white in VS that means that they are strings.

// Type Coercion

// The plus (+) operator converts from numbers to Strings.
// console.log('I am ' + 23 + ' years old');
// The minus (-) operator converts from Strings to numbers.
// console.log('23' - '10' - 3);

// console.log('23' / '2');

// console.log('23' > '18');

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// Truthly and Falsy Values

// Falsy values
// 0, undefined, " ", NaN, null

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 1;
// if(money) {
//   console.log(`don't spend it all!`);
// } else {
//   console.log(`you should get a job!`);
// };

// let height = 0;
// if(height){
//   console.log(`yeah! Height is defined.`);
// } else {
//   console.log(`Height is undefined.`);
// };

/////////////////////////////
// Equality Operators: == vs. ===

// const age = '18';
// if(age === 18) console.log(`You just became and adult. (strict)`);

// if(age == 18) console.log(`You just became and adult. (loose)`);

// const favorite = Number(prompt(`What's your favorite number?`));
// console.log(favorite);
// console.log(typeof favorite);

// if(favorite === 23){ //23 === 23
//   console.log(`Cool! 23 is an amazing number!`);
// } else if (favorite === 7) {
//   console.log(`7 is also a cool number`);
// } else {
//   console.log(`Number is not 23 or 7`);
// };

// if ( favorite !== 23) console.log(`Why not 23?`);

//////////////////////////////
// Boolean Logic and Logical Operators

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision){
//   console.log(`Sarah is able to drive!`);
// } else {
//   console.log(`Someone else should drive...`);
// };

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired){
//   console.log(`Sarah is able to drive!`);
// } else {
//   console.log(`Someone else should drive...`);
// };

////////////////////////////
// The switch Statement

// const day = 'satuday';

// switch(day) {
//   case 'monday': // day === 'monday'
//     console.log(`Plan course structure`);
//     console.log(`Go to coding meetup`);
//     break;
//   case 'tuesday':
//     console.log(`Prepare theory videos`);
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log(`Write code examples`);
//     break;
//   case 'friday':
//     console.log(`Record videos`);
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log(`I enjoy the weekend :D`);
//     break;
//     default:
//     console.log(`Not a valid day!`);
// };

// Comparing the Switch Statement vs the if/else

// if(day === 'monday'){
//   console.log(`Plan course structure`);
//   console.log(`Go to coding meetup`);
// } else if(day === 'tuesday'){
//   console.log(`Prepare theory videos`);
// } else if(day === 'wednesday' || day === 'thursday'){
//   console.log(`Write code examples`);
// } else if (day === 'friday'){
//   console.log(`Record videos`);
// } else if ( day === 'saturday' || day === 'sunday'){
//   console.log(`I enjoy the weekend :D`);
// } else {
//   console.log(`Not a valid day!`);
// };

//////////////////////////
// Statements and Expressions

// 3 + 4 // this is a expression
// 1991 // this is a expression
// true && false && !false // this is a expression

// if (23 > 10) { // this is a statement
//   const str = '23 is bigger';
// };

// console.log(`I'm ${2037 - 1991} years old ${if (23 > 10) {
//   const str = '23 is bigger';
// };}`);  // we are inserting a statement to probe that template literals do not accept statements.

///////////////////////////////
// The Conditional (Ternary) Operator

const age = 23;
// age >= 18 ? console.log(`I like to drink wine.`) :
// console.log(`I like to drink water`);

const drink = age >= 18 ? `wine ????` : `water ????`;
console.log(drink);

let drink2;
if(age >= 18){
    drink2 = `wine ????`;
} else {
    drink2 = `water ????`;
};
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `wine ????` : `water ????`}`);