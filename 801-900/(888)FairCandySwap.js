/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
  let sa = 0;
  let sb = 0;
  for (const x of aliceSizes) {
    sa += x;
  }

  for (const x of bobSizes) {
    sb += x;
  }

  const delta = (sb - sa) / 2;

  const setB = new Set();
  for (const x of bobSizes) {
    setB.add(x);
  }

  for (const x of aliceSizes) {
    if (setB.has(x + delta)) {
      return [x, x + delta];
    }
  }
};

// time:  O(m+n)
// space: O(n)

// [2], [1, 3]
// [1, 1], [1, 1]
// [1, 2], [2, 3]
// [1, 2, 5], [2, 4]
