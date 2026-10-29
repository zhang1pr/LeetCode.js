/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  mergeSort(nums, 0, nums.length - 1);
  return nums;
};

function mergeSort(arr, low, high) {
  if (low >= high) return;
  
  const mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}

function merge(arr, low, mid, high) {
  const n1 = mid - low + 1;
  const n2 = high - mid;
  const leftPart = arr.slice(low, mid + 1);
  const rightPart = arr.slice(mid + 1, high + 1);
  
  let p1 = 0, p2 = 0, writeInd = low;
  
  while (p1 < n1 && p2 < n2) {
    if (leftPart[p1] <= rightPart[p2]) {
      arr[writeInd++] = leftPart[p1++];
    } else {
      arr[writeInd++] = rightPart[p2++];
    }
  }
  
  while (p1 < n1) {
    arr[writeInd++] = leftPart[p1++];
  }
  
  while (p2 < n2) {
    arr[writeInd++] = rightPart[p2++];
  }
}

// time:  O(nlog(n))
// space: O(n)

// [5, 2, 3, 1]
// [5, 1, 1, 2, 0, 0]