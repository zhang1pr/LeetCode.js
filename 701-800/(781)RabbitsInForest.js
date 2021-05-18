/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
  const map = new Map();

  for (const i of answers) {
    map.set(i, (map.get(i) || 0) + 1);
  }

  let res = 0;
  for (const i of map.keys()) {
    res += Math.floor((map.get(i) + i) / (i + 1)) * (i + 1);
  }

  return res;
};

// time:  O(n)
// space: O(n)

// []
// [1, 1, 2]
// [10, 10, 10]
// [1, 0, 1, 0, 0]
