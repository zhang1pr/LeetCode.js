/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
  const array = new Array(n);
  const index = new Array(primes.length).fill(0);

  array[0] = 1;
  for (let i = 1; i < n; i++) {
    array[i] = Infinity;
    for (let j = 0; j < primes.length; j++) {
      array[i] = Math.min(array[i], primes[j] * array[index[j]]);
    }
    
    for (let j = 0; j < primes.length; j++) {
      while (primes[j] * array[index[j]] <= array[i]) {
        index[j]++;
      }
    }
  }

  return array[n - 1];  
};

// time:  O(kn)
// space: O(n+k)

// 1, [2]
// 5, [2]
// 5, [2, 3, 11]
// 12, [2, 7, 13, 19]
