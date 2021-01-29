/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  pairs.sort((a, b) => a[1] - b[1]);

  let cur = -Infinity;
  let res = 0;

  for (const [a, b] of pairs) {
    if (cur < a) {
      cur = b;
      res++;
    }
  }

  return res;
};

// time:  O(nlog(n))
// space: O(n)

// [[1, 2]]
// [[1, 2], [2, 3]]
// [[1, 2], [2, 3], [3, 4]]
