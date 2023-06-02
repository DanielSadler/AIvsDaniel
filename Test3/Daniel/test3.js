const getSumofDiagonals = (spiralSize) => {
  const maxNum = spiralSize * spiralSize;
  let count = 0;
  let increment = 1;
  let incrementCounter = 0;
  for (let i = 1; i <= maxNum; i++) {
    count += i;
    i += increment;
    incrementCounter = (incrementCounter + 1) % 4;
    if (incrementCounter === 0) increment += 2;
  }
  return count;
};

console.log(getSumofDiagonals(1001));
