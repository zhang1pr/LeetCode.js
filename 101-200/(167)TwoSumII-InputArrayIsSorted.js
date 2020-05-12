/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let low = 0;
  let high = numbers.length - 1;

  while (low < high) {
    if (numbers[low] + numbers[high] > target) {
      high--;
    } else if (numbers[low] + numbers[high] < target) {
      low++;
    } else {
      return [low + 1, high + 1];
    }
  }
};

// time:  O(n)
// space: O(1)

// test cases:
// [0, 0], 0
// [5, 25, 75], 100
// [2, 7, 11, 15], 9
// [-6, -3, 4, 5], -1
