/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums.sort((a, b) => a - b);

  const array = [];
  const stack = [];

  function generatePermutation(arrayToDo) {
    if (!arrayToDo.length) {
      array.push(stack.slice());
    } else {
      for (let i = 0; i < arrayToDo.length; i++) {
        if (arrayToDo[i] == arrayToDo[i-1]) {
          continue;
        }

        stack.push(arrayToDo[i]);
        generatePermutation([...arrayToDo.slice(0, i), ...arrayToDo.slice(i+1)]);
        stack.pop(arrayToDo[i]);
      }
    }
  }

  generatePermutation(nums);

  return array;
};

// time:  O(n!)
// space: O(n^2)

// test cases:
// []
// [1]
// [1, 2]
// [1, 1, 2]
// [1, 1, 1, 2, 2, 3]
