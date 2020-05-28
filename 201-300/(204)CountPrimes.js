/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  const notPrime = new Array(n);
  let count = 0;

  for (let i = 2; i < n; i++) {
    if (!notPrime[i]) {
      count++;
      
      for (let j = 2; j * i < n; j++) {
        notPrime[j * i] = true;
      }
    }
  }

  return count;
};

// time:  O(n)
// space: O(n)

// 0
// 1
// 2
// 3
// 10
