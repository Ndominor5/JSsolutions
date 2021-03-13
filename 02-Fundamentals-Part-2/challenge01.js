"use strict";

////////////////////////
// Challenge 01
const calcAvg = (sc1, sc2, sc3) => (sc1 + sc2 + sc3) / 3;

function checkWinner(dolphinsAvg, koalasAvg) {
  if (dolphinsAvg > 2 * koalasAvg) {
    console.log(`Dolphins win (${dolphinsAvg} vs. ${koalasAvg})`);
  } else if (koalasAvg > 2 * dolphinsAvg) {
    console.log(`Koalas win (${koalasAvg} vs. ${dolphinsAvg})`);
  } else {
    console.log(`no team wins`);
  }
}

const dolphinsAvg = calcAvg(23, 34, 27);
const koalasAvg = calcAvg(85, 54, 41);

checkWinner(dolphinsAvg, koalasAvg);
