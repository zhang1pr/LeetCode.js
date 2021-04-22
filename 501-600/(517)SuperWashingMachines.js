/**
 * @param {number[]} machines
 * @return {number}
 */
var findMinMoves = function(machines) {
  const sum = machines.reduce((a, b) => a + b);

  if (sum % machines.length != 0) {
    return -1;
  }

  const avg = sum / machines.length;
  let cnt = 0;
  let max = 0;

  for (const machine of machines) {
    cnt = cnt + machine - avg;
    max = Math.max(max, Math.abs(cnt), machine - avg);
  }

  return max;
};

// time:  O(n)
// space: O(1)

// [0]
// [1]
// [1, 2]
// [1, 3]
// [2, 2]
// [1, 0, 5]
// [0, 3, 0]
// [0, 2, 0]
