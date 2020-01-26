/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = [];

  function findCombination(index, target, array) {
    if (target == 0) {
      result.push(array.slice());
    } else if (target > 0) {
      for (let i = index; i < candidates.length; i++) {
        array.push(candidates[i]);

        findCombination(i, target - candidates[i], array);

        array.pop();
      }
    }
  }

  findCombination(0, target, [])

  return result;
};

// time:  O(n*2^k)
// space: O(n)

// test cases:
// [1], 1
// [1], 3
// [2, 4], 12
// [5, 3, 2], 8
// [2, 3, 6, 7], 7
