/**
 * @param {number} n
 * @return {number}
 */
var findDerangement = function(n) {
  const MOD = 1e9 + 7;

  if (n == 1) {
    return 0;
  }

  let first = 1;
  let second = 0;

  for (let i = 2; i <= n; i++) {
    let temp = second;
    second = (i - 1) * (first + second) % MOD;
    first = temp;
  }

  return second;
};

// time:  O(n)
// space: O(1)
// 1
// 2
// 3
// 5
// 8
