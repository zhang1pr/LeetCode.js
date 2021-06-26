/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
var flipgame = function(fronts, backs) {
  const set = new Set();

  const n = fronts.length;
  for (let i = 0; i < n; i++) {
    if (fronts[i] == backs[i]) {
      set.add(fronts[i]);
    }
  }

  let min = Infinity;
  for (let i = 0; i < n; i++) {
    if (!set.has(backs[i])) {
      min = Math.min(min, backs[i]);
    }

    if (!set.has(fronts[i])) {
      min = Math.min(min, fronts[i]);
    }
  }

  return min == Infinity ? 0 : min;
};

// time:  O(n)
// space: O(n)

// [1], [1]
// [1, 2, 4, 4, 7], [1, 3, 4, 1, 3]
