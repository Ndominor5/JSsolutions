"use strict";

//////////////////////
// Use of Strict

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

//////////////////////
// Functions

// function logger() {
//   console.log(`My name is Jonas`);
// }

// calling, running, invoking the function.
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   //console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// // Loggin the funtion by using the function instead of using a variable.
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

///////////////////////
// Function Declaration and Expressions.

// Function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);

// // Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age1, age2);

//////////////////////
// Arrow Functions

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     //return retirement;
//     return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'John'));

////////////////////////
// Functions Calling Other Functions

// function cutFruitPieces(fruit){
//     return fruit * 4;
// };

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// };

// console.log(fruitProcessor(2, 3));

////////////////////////////
// Function Review

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const calcRetirement = function (age) {
//   return 65 - age;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = calcRetirement(age);

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1950, "Mike"));

/////////////////////////////
// Introductions to Arrays

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);
// console.log(y);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);
// friends = ['Bob', 'Alice'] We cannot replace an entire array.

// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);
// console.log(jonas.length);

// Excercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

//////////////////////
// Basic Array Operations (Methods)

// Add elements
// const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// // Remove elements
// friends.pop();
// const pop = friends.pop();
// console.log(pop);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));

//////////////////////
// Intro to Objects

// const jonas = {
//   firstName: "Jonas",
//   lastName: 'Schmedtmann',
//   age = 2037 - 1991,
//   job = 'teacher',
//   friends : ['Michael', 'Peter', 'Steven']
// };

//////////////////////
// Dot vs. Bracket notation

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Jonas? choose between firstName, lastName, age, job, and friends"
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     `Wrong request! choose between firstName, lastName, age, job, and friends`
//   );
// }

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasshmedtman";
// console.log(jonas);

// // Challenge
// // Jonas has 3 friends, and his best friend is Michael. From object Jona, 3, and Michael.
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length}, and his best friend is ${jonas.friends[0]}.`
// );

//////////////////////
// Object Methods

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: false,

// Adding a function as a key-value pair.
//   calcAge: function(birthYear) {
//     return 2037 - birthYear;
//   }

// Using the this variable.
//   calcAge: function() {
//     console.log(this);
//     return 2037 - this.birthYear;
//   }

// Storing the age value in the Jonas object and we can retrieve it as a property from the object.
// calcAge: function () {
//   this.age = 2037 - this.birthYear;
//   return this.age;
// },

// Trying to get the license info
// driversLic: function () {
//   if (this.hasDriversLicense === true) {
//     this.license = "has";
//     return this.license;
//   } else {
//     this.license = "doesn't";
//     return this.license;
//   }
// },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-years old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license.`;
//   },
// };

// console.log(jonas.calcAge());
// console.log(jonas['calcAge'](1991));

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// Challenge for this video.
// Jonas is a 46-years old teacher, and he has/doesn't a drivers license.
// console.log(
//   `${jonas.firstName} is a ${jonas.age}-years old ${jonas.job}, and he ${jonas.driversLic} a drivers license.`
// );

// console.log(jonas.getSummary());

//////////////////////
// For loop

// for loop keeps running while condition is true.
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️`);
// }

//////////////////////
// Looping arrays, breaking and continuing
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

for (let i = 0; i < 5; i++) {
  console.log(jonas[i]);
}
