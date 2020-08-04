/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  const count = new Array(nums.length).fill(0);
  const indices = [...new Array(nums.length)].map((_, i) => i);
  
  function mergeSort(start, end) {
    if (end <= start) {
      return;
    }
    
    const mid = (start + end) >>> 1;
    mergeSort(start, mid);
    mergeSort(mid + 1, end);
    
    merge(start, end);       
  }

  function merge(start, end) {
    let mid = (start + end) >>> 1;
    let left = start;
    let right = mid + 1;
    let rightCount = 0;    	
    const newIndices = new Array(end - start + 1);
  
    let i = 0;
    while (left <= mid && right <= end) {
      if (nums[indices[right]] < nums[indices[left]]) {
        newIndices[i] = indices[right];
        rightCount++;
        right++;
      } else {
        newIndices[i] = indices[left];
        count[indices[left]] += rightCount;
        left++;
      }

      i++;
    }

    while (left <= mid) {
      newIndices[i] = indices[left];
      count[indices[left]] += rightCount;
      left++;
      i++;
    }

    while (right <= end) {
      newIndices[i] = indices[right];
      i++;
      right++;
    }
    
    for (let i = start; i <= end; i++) {
      indices[i] = newIndices[i - start];
    }
  }

  mergeSort(0, nums.length - 1);

  return count;
}

// time:  O(n)
// space: O(n)

// [1]
// [1, 2]
// [2, 1]
// [3, 1, 2]
// [5, 2, 6, 1]
