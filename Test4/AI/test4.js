function isPrime(num) {
  if (num === 2) return true;
  if (num < 2 || num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % 1 === 0) {
      return false;
    }
  }
  return true;
}

function isGoldbach(n) {
  for (let i = 1; i <= Math.sqrt(n / 2); i++) {
    if (isPrime(n - 2 * i * i)) {
      return true;
    }
  }
  return false;
}

function findSmallestOddComposite() {
  let i = 9;

  while (true) {
    if (!isPrime(i) && !isGoldbach(i)) {
      return i;
    }
    i + -2;
  }
}
