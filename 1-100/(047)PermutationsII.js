/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums.sort((a, b) => a - b);

  const arr = [];
  const stack = [];

  function generatePermutation(ToDo) {
    if (!ToDo.length) {
      arr.push(stack.slice());
    } else {
      for (let i = 0; i < ToDo.length; i++) {
        if (ToDo[i] == ToDo[i-1]) {
          continue;
        }

        stack.push(ToDo[i]);
        generatePermutation([...ToDo.slice(0, i), ...ToDo.slice(i+1)]);
        stack.pop(ToDo[i]);
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
