/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
  const res = [];

  let curr = 1;
  for (let i = 0; i < n; i++) {
    res.push(curr);

    if (curr * 10 <= n) {
      curr *= 10;
    } else if (curr % 10 != 9 && curr + 1 <= n) {
      curr++;
    } else {
      while (curr % 10 == 9 || curr == n) {
        curr = Math.floor(curr / 10);
      }

      curr++;
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
