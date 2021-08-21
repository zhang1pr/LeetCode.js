/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function(n, a, b) {
  const MOD = 1e9 + 7;

  const L = a / gcd(a, b) * b;

  let lo = 0;
  let hi = n * Math.min(a, b);

  while (lo < hi) {
    let mi = lo + Math.floor((hi - lo) / 2);

    if (Math.floor(mi/a) + Math.floor(mi / b) - Math.floor(mi / L) < n) {
      lo = mi + 1;
    } else {
      hi = mi;
    }
  }

  return lo % MOD;
};

var gcd = function(a, b) {
  let temp;
  while (b != 0) {
    temp = a % b;
    a = b;
    b = temp;
  }

  return a;
}

// time:  O(log(n*min(a,b)))
// space: O(1)

// 1, 2, 3
// 4, 2, 3
// 5, 2, 4
// 3, 6, 4
