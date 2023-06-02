console.log('Start Here!');
const width = 20;
const height = 20;
const graphMax = width + height;

const factorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

const totalMoves = Math.floor(
  factorial(graphMax) / factorial(width) / factorial(height)
);

console.log(totalMoves);
