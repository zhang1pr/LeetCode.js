/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function(p, q) {
  while (p % 2 == 0 && q % 2 == 0) {
    p /= 2;
    q /= 2;
  }

  if (p % 2 == 1 && q % 2 == 0) {
    return 0;
  }

  if (p % 2 == 1 && q % 2 == 1) {
    return 1;
  }

  if (p % 2 == 0 && q % 2 == 1) {
    return 2;
  }

  return -1;
};

// time:  O(log(p)+log(q))
// space: O(1)

// 2, 1
// 3, 1
