/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {
  if (n == 1) {
    return 10;
  }

  let A = 4;
  let B = 2;
  let C = 2;
  let D = 1;
  const MOD = 1e9 + 7;

  for (let i = 0; i < n - 1; i++) {
    const tempA = A;
    const tempB = B;
    const tempC = C;
    const tempD = D;

    A = ((2 * tempB) % MOD + (2 * tempC) % MOD) % MOD;
    B = tempA;
    C = (tempA + (2 * tempD) % MOD) % MOD;
    D = tempC;
  }

  let ans = (A + B) % MOD;
  ans = (ans + C) % MOD;
  return (ans + D) % MOD;
};

// time:  O(n)
// space: O(1)

// 1
// 2
// 3131