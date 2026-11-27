/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  const n = arr.length;
  let i = 0, j = n - 1;
  while (i + 1 < n && arr[i] < arr[i + 1]) {
    i++;
  }
  
  while (j > 0 && arr[j - 1] > arr[j]) {
    j--;
  }

  return i > 0 && i == j && j < n - 1;  
};

// time:  O(n)
// space: O(1)

// [2, 1]
// [3, 5, 5]
// [0, 3, 2, 1]