/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
var atMostNGivenDigitSet = function(digits, n) {
  let S = n.toString();
  let K = S.length;
  let dp = Array(K + 1).fill(0);
  dp[K] = 1;

  for (let i = K-1; i >= 0; i--) {
    let Si = +S[i];
    for (let d of digits) {
      let val = +d;
      if (val < Si) {
        dp[i] += Math.pow(digits.length, K - i - 1);
      } else if (val == Si) {
        dp[i] += dp[i + 1];
      }
    }
  }

  for (let i = 1; i < K; i++) {
    dp[0] += Math.pow(digits.length, i);
  }
  
  return dp[0]; 
};

// time:  O(log(n))
// space: O(log(n))

// ['1', '3', '5', '7'], 100
// ['1', '4', '9'], 1000000000
// ['7'], 8