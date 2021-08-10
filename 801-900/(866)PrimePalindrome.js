/**
 * @param {number} n
 * @return {number}
 */
var primePalindrome = function(n) {

  function isPrime(n) {
    if (n < 2) {
      return false;
    }

    const R = Math.floor(Math.sqrt(n));
    for (let d = 2; d <= R; d++) {
      if (n % d == 0) {
        return false;
      }
    }

    return true;
  }

  function reverse(n) {
    let ans = 0;

    while (n > 0) {
      ans = 10 * ans + (n % 10);
      n = Math.floor(n / 10);
    }

    return ans;
  }

  while (true) {
    if (n == reverse(n) && isPrime(n)) {
      return n;
    }

    n++;

    if (1e7 < n && n < 1e8) {
      n = 1e8;
    }
  }
};

// time:  O(n)
// space: O(1)

// 1
// 2
// 3
// 4
// 5
// 6
// 8
// 13
