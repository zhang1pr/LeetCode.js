/**
 * @param {string} left
 * @param {string} right
 * @return {number}
 */
var superpalindromesInRange = function(left, right) {
  let L = BigInt(left), R = BigInt(right);
  let bound = 100000;
  let ans = 0;

  for (let k = 1; k < bound; k++) {
    let str = k.toString();
    for (let i = str.length - 2; i >= 0; i--) {
      str += str[i];
    }

    const v = BigInt(str) ** 2n;
    if (v > R) break;
    if (v >= L && isPalindrome(v)) ans++;
  }

  for (let k = 1; k < bound; k++) {
    let str = k.toString();
    for (let i = str.length - 1; i >= 0; i--) {
      str += str[i];
    }

    const v = BigInt(str) ** 2n;
    if (v > R) break;
    if (v >= L && isPalindrome(v)) ans++;
  }

  return ans;
};

function isPalindrome(x) {
  return x == reverse(x);
}

function reverse(x) {
  let ans = 0n;
  let temp = x;

  while (temp > 0n) {
    ans = 10n * ans + (temp % 10n);
    temp = temp / 10n;
  }

  return ans;
}

// time:  O(n^(1/4)*log(n))
// space: O(log(n))

// '1', '2'
// '4', '1000'