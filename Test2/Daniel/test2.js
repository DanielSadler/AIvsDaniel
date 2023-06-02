const fs = require('fs');
const nameArray = fs
  .readFileSync('./names.txt')
  .toString('utf-8')
  .split(',')
  .map((name) => name.replace(/"/g, ''));
nameArray.sort();

const nameScores = nameArray.map((name, index) => {
  let total = 0;
  for (let i = 0; i < name.length; i++) {
    total += name.charCodeAt(i) - 64;
  }
  return total * (index + 1);
});

const totalScore = nameScores.reduce((acc, score) => {
  return acc + score;
}, 0);
console.log(totalScore);
