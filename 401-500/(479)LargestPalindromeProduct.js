 /**
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function(n) {
  if (n == 1) {
    return 9;
  }

  const max = 10 ** n - 1;
  const min = Math.floor(max / 10);

  for (let h = max; h > min; h--) {
    let left = BigInt(h);
    let right = 0n;

    for (let i = h; i > 0; i = Math.floor(i / 10)) {
      right = right * 10n + BigInt(i % 10);
      left *= 10n;
    }

    const candidate = left + right;
    for (let i = max; i > min; i--) {
      let j = Number(candidate / BigInt(i));

      if (j > i) {
        break;
      }

      if (candidate % BigInt(i) == 0n) {
        return Number(candidate % 1337n);
      }
    }
  }
};

// time:  O(1)
// space: O(1)

// 1
// 2
// 7
// 8
