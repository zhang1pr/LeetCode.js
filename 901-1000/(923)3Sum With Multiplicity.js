/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(arr, target) {
  const c = Array(101).fill(0);
  for (const x of arr) {
    c[x]++;
  }
  
  let res = 0;
  const MOD = 1e9 + 7;
  
  for (let i = 0; i <= 100; i++) {
    for (let j = i; j <= 100; j++) {
      let k = target - i - j;
      if (k > 100 || k < 0) continue;
      
      if (i == j && j == k) {
        res += c[i] * (c[i] - 1) * (c[i] - 2) / 6;
      } else if (i == j && j != k) {
        res += (c[i] * (c[i] - 1) / 2) * c[k];
      } else if (j < k) {
        res += c[i] * c[j] * c[k];
      }
    }
  }
  
  return res % MOD;
};

// time:  O(n+m^2)
// space: O(1)

// [2, 1, 3], 6
// [1, 1, 2, 2, 2, 2], 5
// [1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 8
