/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums.sort((a, b) => a - b);

  const arr = [];
  const stack = [];

  function generatePermutation(targetArr) {
    if (!targetArr.length) {
      arr.push(stack.slice());
    } else {
      for (let i = 0; i < targetArr.length; i++) {
        if (targetArr[i] == targetArr[i - 1]) {
          continue;
        }

        stack.push(targetArr[i]);
        generatePermutation([...targetArr.slice(0, i), ...targetArr.slice(i + 1)]);
        stack.pop(targetArr[i]);
      }
    }
  }

  generatePermutation(nums);

  return arr;
};

// time:  O(n!)
// space: O(n^2)

// []
// [1]
// [1, 2]
// [1, 1, 2]
// [1, 1, 1, 2, 2, 3]
