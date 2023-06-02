const getPrimes = (max) => {
  const sieve = {};
  const primes = [];
  const notPrimes = {};
  for (let i = 2; i <= max; i++) {
    if (!sieve[i]) {
      primes.push(i);
      for (let j = 0; j <= max; j += i) {
        sieve[j] = true;
      }
    } else {
      notPrimes[i] = true;
    }
  }
  return { primes, notPrimes };
};

const maxConsec = (max) => {
  let maxSum = 0;
  let maxRun = -1;
  const { primes, notPrimes } = getPrimes(max);

  for (let i = 0; i < primes.length; i++) {
    let sum = 0;
    for (let j = i; j < primes.length; j++) {
      sum += primes[j];
      if (sum > max) {
        break;
      }
      if (!notPrimes[sum] && sum > maxSum && j - i > maxRun) {
        maxRun = j - i;
        maxSum = sum;
      }
    }
  }
  return maxSum;
};

console.log(maxConsec(1000000));
