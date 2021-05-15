/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
  let cnt = 0;

  for (const ch of (k - 1).toString(2)) {
    if (ch == '1') {
      cnt++;
    }
  }

  return cnt & 1;
};

// time:  O(log(k))
// space: O(log(k))

// 1, 1
// 2, 1
// 2, 2
// 3, 1
