const fs = require('fs');

const names = fs.readFileSync('names.txt', 'utf8').split(',');
names.sort();

let totalScore = 0;
for (let i = 0; i < names.length; i++) {
  let nameScore = 0;

  for (let j = 0; j < names[i].length; j++) {
    nameScore += names[i].charCodeAt(j) - 64;
  }
  totalScore += nameScore * (i + 1);
}

console.log(totalScore);
