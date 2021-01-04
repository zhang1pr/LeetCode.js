/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let cur = 0;
  const size = flowerbed.length;

  for (let i = 0; i <= size; i++) {
    if (i < size && flowerbed[i] == 0) {
      cur++;
      if (i == 0) {
        cur++;
      }

      if (i == size - 1) {
        cur++;
      }
    } else {
      n -= Math.trunc((cur - 1) / 2);
      if (n <= 0) {
        return true;
      }

      cur = 0;
    }
  }

  return false;
};

// time:  O(n)
// space: O(1)

// [1, 0, 0, 0, 1], 1
// [1, 0, 0, 0, 1], 2
