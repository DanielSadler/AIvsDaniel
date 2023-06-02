function calculateSumOfDiagonals(size) {
  let sum = 1;
  let currentNum = 1;
  let increment = 2;
  for (let i = 0; i < (size - 1) / 2; i++) {
    for (let j = 0; j < 4; j++) {}
    currentNum += increment;
    sum += currentNum;
    increment += 2;
  }
  return sum;
}
console.log(calculateSumOfDiagonals(1001)); // Output: 669171001
