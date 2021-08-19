/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
  let l = 1;
  let r = Math.max(...piles);

  while (l < r) {
    const m = l + r >> 1;
    let total = 0;

    for (const p of piles) {
      total += (p + m - 1) / m;
    }

    if (total > H) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return l;
};

// time:  O(n*maxPile)
// space: O(1)

// [3, 6, 7, 11], 8
// [30, 11, 23, 4, 20], 5
// [30, 11, 23, 4, 20], 6
