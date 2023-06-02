function findLongestConsecutivePrimeSum(limit) {
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  let maxSum = 0;
  let maxLength = 0;
  let primes = [];

  for (let i = 2; i < limit; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  for (let i = 0; i < primes.length; i++) {
    let sum = primes[i];
    let length = 1;

    for (let j = i + 1; j < primes.length; j++) {
      sum += primes[j];
      length++;

      if (sum >= limit) {
        break;
      }

      if (isPrime(sum) && length > maxLength) {
        maxSum = sum;
        maxLength = length;
      }
    }
  }

  return maxSum;
}

console.log(findLongestConsecutivePrimeSum(1000000));
