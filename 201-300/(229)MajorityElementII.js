/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  const n = nums.length;
  let group1 = 0;
  let count1 = 0;
  let group2 = 1;
  let count2 = 0;

  for (const num of nums) {
    if (num == group1) {
      count1++;
    } else if (num == group2) {
      count2++;
    } else if (count1 == 0) {
      group1 = num;
      count1 = 1;
    } else if (count2 == 0) {
      group2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  count1 = 0;
  count2 = 0;

  for (const num of nums) {
    if (num == group1) {
      count1++;
    }

    if (num == group2) {
      count2++;
    }
  }
  
  const result = [];
  if (count1 > n / 3) {
    result.push(group1);
  }

  if (count2 > n / 3) {
    result.push(group2);
  }

  return result;
};

// time:  O(1)
// space: O(1)

// test cases:
// [1]
// [1, 2]
// [3, 2, 3]
// [1, 1, 1, 3, 3, 2, 2, 2]
