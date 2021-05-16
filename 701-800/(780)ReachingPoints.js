/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function(sx, sy, tx, ty) {
  while (sx < tx && sy < ty) {
    if (tx < ty) {
      ty %= tx;
    } else {
      tx %= ty;
    }
  }

  return sx == tx && sy <= ty && (ty - sy) % sx == 0 || sy == ty && sx <= tx && (tx - sx) % sy == 0;
};

// time:  O(log(max(x,y)))
// space: O(1)

// 1, 1, 1, 1
// 1, 1, 2, 2
// 1, 1, 3, 5
