/**
 * @param {number[]} arr
 * @return {number[]}
 */
var threeEqualParts = function(arr) {
  let n = arr.length;
  let countNumberOfOnes = 0;
  
  for (let i = 0; i < n; i++) {
    if (arr[i] == 1) {
      countNumberOfOnes++;
    }
  }
  
  if (countNumberOfOnes == 0) {
    return [0, n - 1];
  }
  
  if (countNumberOfOnes % 3 != 0) {
    return [-1, -1];
  }
  
  let k = countNumberOfOnes / 3;
  let i = 0;
  
  while (arr[i] !== 1) {
    i++;
  }
  let start = i;
  
  let count1 = 0;
  for (i = 0; i < n; i++) {
    if (arr[i] == 1) {
      count1++;
    }
    if (count1 == k + 1) {
      break;
    }
  }

  let mid = i;
  
  count1 = 0;
  for (i = 0; i < n; i++) {
    if (arr[i] == 1) {
      count1++;
    }

    if (count1 == 2 * k + 1) {
      break;
    }
  }
  
  let end = i;
  
  while (end < n && arr[start] == arr[mid] && arr[mid] == arr[end]) {
    start++;
    mid++;
    end++;
  }
  
  if (end == n) {
    return [start - 1, mid];
  }
  
  return [-1, -1];
};

// time:  O(n)
// space: O(1)

// [1, 0, 1, 0, 1]
// [1, 1, 0, 1, 1]
// [1, 1, 0, 0, 1]