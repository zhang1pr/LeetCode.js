/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
  let res = 0;
  let min = arrays[0][0];
  let max = arrays[0][arrays[0].length - 1];

  for (let i = 1; i < arrays.length; i++) {
    const arr = arrays[i];

    res = Math.max(res, arr[arr.length - 1] - min, max - arr[0]);
    min = Math.min(min, arr[0]);
    max = Math.max(max, arr[arr.length - 1]);
  }

  return res;
};

// time:  O(n)
// space: O(1)

// [[1], [1]]
// [[1], [2]]
// [[1, 4], [0, 5]]
// [[1, 2, 3], [4, 5], [1, 2, 3]]
