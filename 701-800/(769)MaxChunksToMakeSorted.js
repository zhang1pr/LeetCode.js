/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
  const n = arr.length;
  const leftMax = Array(n).fill(0);
  const rightMin = Array(n).fill(0);

  leftMax[0] = arr[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], arr[i]);
  }

  rightMin[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMin[i] = Math.min(rightMin[i + 1], arr[i]);
  }

  let res = 1;
  for (let i = 0; i < n - 1; i++) {
    if (leftMax[i] <= rightMin[i + 1]) {
      res++;
    }
  }

  return res;
};

// time:  O(n)
// space: O(n)

// [4, 3, 2, 1, 0]
// [1, 0, 2, 3, 4]
