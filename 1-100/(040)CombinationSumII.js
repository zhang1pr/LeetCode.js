/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => b - a);
  const result = [];

  function findCombination(index, target, array) {
    for (let i = index; i < candidates.length; i++) {
      if (i == index || candidates[i] != candidates[i-1]) {
        if (candidates[i] == target) {
          result.push([...array, candidates[i]]);
        } else if (candidates[i] < target) {
          findCombination(i + 1, target - candidates[i], [...array, candidates[i]]);
        }
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
// [2, 5, 2, 1], 5
// [2, 2, 2, 4, 4, 4], 8
