/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
  const left = new Map();
  const end = new Map();

  for (const num of nums) {
    left.set(num, (left.get(num) || 0) + 1);
  }

  for (const num of nums) {
    const get = left.get(num);
    if (get == 0) {
      continue;
    }

    left.set(num, get - 1);

    if (end.get(num - 1) > 0) {
      end.set(num - 1, end.get(num - 1) - 1);
      end.set(num, (end.get(num) || 0) + 1);
    } else if (left.get(num + 1) > 0 && left.get(num + 2) > 0) {
      left.set(num + 1, left.get(num + 1) - 1);
      left.set(num + 2, left.get(num + 2) - 1);
      end.set(num + 2, (end.get(num + 2) || 0) + 1);
    } else {
      return false;
    }
  }

  return true;
};

// time:  O(n)
// space: O(n)

// [1]
// [1, 2]
// [1, 3]
// [1, 2, 3]
// [1, 2, 3, 4]
// [1, 2, 3, 5]
// [1, 2, 3, 4, 5]
// [1, 2, 3, 3, 4, 5]
// [1, 2, 3, 4, 4, 5]
// [1, 2, 3, 3, 4, 4, 5, 5]
