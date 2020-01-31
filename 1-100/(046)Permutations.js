/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const array = [];
  const stack = [];

  function generatePermutation(arrayToDo) {
    if (!arrayToDo.length) {
      array.push(stack.slice());
    } else {
      for (let i = 0; i < arrayToDo.length; i++) {
        stack.push(arrayToDo[i]);
        generatePermutation([...arrayToDo.slice(0, i), ...arrayToDo.slice(i+1)]);
        stack.pop(arrayToDo[i]);
      }
    }
  }

  generatePermutation(nums);

  return array;
};

// []
// [1]
// [1, 2]
// [1, 2, 3]
