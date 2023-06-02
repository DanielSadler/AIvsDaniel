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

const getOddComposites = (n) => {
  const { primes, notPrimes } = getPrimes(n);

  const oddComposites = [];
  for (let composite of Object.keys(notPrimes)) {
    composite = parseInt(composite, 10);
    if (composite % 2 !== 0) {
      oddComposites.push(composite);
    }
  }

  return { primes, oddComposites };
};

const goldbach = (limit) => {
  const { primes, oddComposites } = getOddComposites(limit);

  const primeLookup = {};
  for (let i = 0; i < primes.length; i++) {
    primeLookup[primes[i]] = true;
  }

  for (let i = 0; i < oddComposites.length; i++) {
    const oddComposite = oddComposites[i];

    let found = false;

    for (let j = 1; 2 * j * j < oddComposite; j++) {
      if (primeLookup[oddComposite - 2 * j * j]) {
        found = true;
        break;
      }
    }

    if (!found) return oddComposite;
  }

  return null;
};

console.log(goldbach(10000));
