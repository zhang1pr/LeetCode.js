/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  const max = Math.max(...nums);

  const cnt = Array(max + 1).fill(0);

  for (const num of nums) {
    cnt[num]++;
  }

  let avoid = 0;
  let using = 0;
  let prev = -1;

  for (let k = 0; k <= max; k++) {
    if (cnt[k] > 0) {
      const m = Math.max(avoid, using);

      if (k - 1 != prev) {
        using = k * cnt[k] + m;
        avoid = m;
      } else {
        using = k * cnt[k] + avoid;
        avoid = m;
      }

      prev = k;
    }
  }

  return Math.max(avoid, using);
};

// time:  O(max(n, nmax))
// space: O(nmax)

// [3, 4, 2]
// [2, 2, 3, 3, 3, 4]
