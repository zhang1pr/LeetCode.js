/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  const notPrime = Array(n);
  let cnt = 0;

  for (let i = 2; i < n; i++) {
    if (!notPrime[i]) {
      cnt++;

      for (let j = 2; j * i < n; j++) {
        notPrime[j * i] = true;
      }
    }
  }

  return cnt;
};

// time:  O(n)
// space: O(n)

// 0
// 1
// 2
// 3
// 10
