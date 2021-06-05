/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
  const res = [];

  let cur = 1;
  for (let i = 0; i < n; i++) {
    res.push(cur);

    if (cur * 10 <= n) {
      cur *= 10;
    } else if (cur % 10 != 9 && cur + 1 <= n) {
      cur++;
    } else {
      while (cur % 10 == 9 || cur == n) {
        cur = Math.floor(cur / 10);
      }

      cur++;
    }
  }

  return res;
};

// time:  O(n)
// space: O(1)

// 1
// 2
// 9
// 10
// 13
// 99
// 100
// 101
