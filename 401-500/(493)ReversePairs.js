/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  function DFS(nums, left, right) {
    if (left >= right) {
      return 0;
    }

    const mid = (left + right) >>> 1;
    let res = DFS(nums, left, mid) + DFS(nums, mid + 1, right);

    let i = left;
    let j = mid + 1;
    let k = 0;
    let p = mid + 1;
    const arr = Array(right - left + 1);

    while (i <= mid) {
      while (p <= right && nums[i] > 2 * nums[p]) {
        p++;
      }

      res = res + p - mid - 1;

      while (j <= right && nums[i] >= nums[j]) {
        arr[k] = nums[j];
        k++;
        j++;
      }

      arr[k] = nums[i];
      k++;
      i++;
    }

    while (j <= right) {
      arr[k] = nums[j];
      k++;
      j++;
    }

    for (let i = 0; i < arr.length; i++) {
      nums[i + left] = arr[i];
    }

    return res;
  }

  return DFS(nums, 0, nums.length - 1);
};

// time:  O(nlog(n))
// space: O(n)

// [0]
// [0, 1]
// [1, 0]
// [0, 1, 2]
// [1, 2, 0]
// [2, 1, 0]
// [4, 3, 2, 1]
// [1, 3, 2, 3, 1]
// [2, 4, 3, 5, 1]
