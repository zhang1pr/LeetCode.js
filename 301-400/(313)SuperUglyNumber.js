/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
  const arr = Array(n);
  const index = Array(primes.length).fill(0);

  arr[0] = 1;
  for (let i = 1; i < n; i++) {
    arr[i] = Infinity;
    for (let j = 0; j < primes.length; j++) {
      arr[i] = Math.min([i], primes[j] * arr[index[j]]);
    }

    for (let j = 0; j < primes.length; j++) {
      while (primes[j] * arr[index[j]] <= arr[i]) {
        index[j]++;
      }
    }
  }

  return arr[n - 1];
};

// time:  O(kn)
// space: O(n+k)

// 1, [2]
// 5, [2]
// 5, [2, 3, 11]
// 12, [2, 7, 13, 19]
