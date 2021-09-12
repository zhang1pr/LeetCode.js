/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
  let last = -1;
  let ans = 0;

  for (let i = 0; i < 32; i++) {
    if ((N >> i & 1) > 0) {
      if (last >= 0) {
        ans = Math.max(ans, i - last);
      }

      last = i;
    }
  }

  return ans;
};

// time:  O(log(n))
// space: O(1)

// 1
// 2
// 5
// 6
// 8
// 22
