/**
 * @param {string} n
 * @return {string}
 */
var smallestGoodBase = function (n) {
  const len = Math.floor(Math.log(n) / Math.log(2));

  for (let m = len; m > 1; m--) {
    const k = parseInt(n ** m ** -1, 10);

    if (parseInt((BigInt(k) ** BigInt(m + 1) - 1n) / BigInt(k - 1), 10) == n) {
      return k.toString();
    }
  }

  return (BigInt(n) - 1n).toString();
};

// time:  O(log(n)^2)
// space: O(1)

// '3'
// '4'
// '5'
// '13'
// '100'
// '4681'
// '14919921443713777'
// '821424692950225218'
// '1000000000000000000'
