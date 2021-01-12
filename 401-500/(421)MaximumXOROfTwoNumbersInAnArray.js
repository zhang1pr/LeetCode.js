/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  let max = 0;
  let mask = 0;

  for (let i = 31; i >= 0; i--) {
    mask |= (1 << i);

    const set = new Set();
    for (const num of nums) {
      set.add(num & mask);
    }

    const temp = max | (1 << i);
    for (const prefix of set) {
      if (set.has(temp ^ prefix)) {
        max = temp;
        break;
      }
    }
  }

  return max;
};

// time:  O(n)
// space: O(n)

// [0]
// [2, 4]
// [8, 10, 2]
// [3, 10, 5, 25, 2, 8]
// [14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70]
