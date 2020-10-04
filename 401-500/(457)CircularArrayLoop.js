/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = (nums) => {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] == 0) {
      continue;
    }

    let j = i;
    let k = getIndex(i, nums);
    while (nums[k] * nums[i] > 0 && nums[getIndex(k, nums)] * nums[i] > 0) {
      if (j == k) {
        if (j == getIndex(j, nums)) {
          break;
        }

        return true;
      }

      j = getIndex(j, nums);
      k = getIndex(getIndex(k, nums), nums);
    }

    j = i;
    let val = nums[i];
    while (nums[j] * val > 0) {
      let next = getIndex(j, nums);
      nums[j] = 0;
      j = next;
    }
  }

  return false;
};


var getIndex = function(i, nums) {
  const n = nums.length;
  return i + nums[i] >= 0 ? (i + nums[i]) % n : n + ((i + nums[i]) % n);
};

// time:  O(n)
// space: O(1)

// [0]
// [1]
// [1, -1]
// [1, 1]
// [2, 1]
// [-1, 2]
// [2, -1, 1, 2, 2]
// [-2, 1, -1, -2, -2]
