/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
  const MOD = 10e9 + 7;

  const A = Array(n).fill(0);
  const P = Array(n).fill(0);
  const L = Array(n).fill(0);

  P[0] = 1;
  L[0] = 1;
  L[1] = 3;
  A[0] = 1;
  A[1] = 2;
  A[2] = 4;

  if (n == 1) {
    return 3;
  }

  for (let i = 1; i < n; i++) {
    P[i] = (A[i - 1] + P[i - 1] + L[i - 1]) % MOD;

    if (i > 1) {
      L[i] = (A[i - 1] + P[i - 1] + A[i - 2] + P[i - 2]) % MOD;
    }

    if(i > 2) {
      A[i] = (A[i - 1] + A[i - 2] + A[i - 3]) % MOD;
    }
  }

  return (A[n - 1] + P[n - 1] + L[n - 1]) % MOD;
};

// time:  O(n)
// space: O(n)

// 1
// 2
// 3
// 5
// 10
// 30
