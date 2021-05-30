/**
 * @param {number} k
 * @return {number}
 */
var preimageSizeFZF = function(k) {
  let last = 1;
  while (last < k) {
    last = last * 5 + 1;
  }

  while (last > 1) {
    k %= last;

    if (last - 1 == k) {
      return 0;
    }

    last = (last - 1) / 5;
  }

  return 5;
};

// time:  O(log(n))
// space: O(1)

// 0
// 1
// 2
// 3
// 4
// 5
// 10
// 15
