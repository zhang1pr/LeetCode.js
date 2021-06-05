/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSwap = function(nums1, nums2) {
  const N = nums1.length;
  const swap = Array(N).fill(0);
  const notSwap = Array(N).fill(0);
  swap[0] = 1;

  for (let i = 1; i < N; i++) {
    notSwap[i] = N;
    swap[i] = N;

    if (nums1[i - 1] < nums1[i] && nums2[i - 1] < nums2[i]) {
      swap[i] = swap[i - 1] + 1;
      notSwap[i] = notSwap[i - 1];
    }

    if (nums1[i - 1] < nums2[i] && nums2[i - 1] < nums1[i]) {
      swap[i] = Math.min(swap[i], notSwap[i - 1] + 1);
      notSwap[i] = Math.min(notSwap[i], swap[i - 1]);
    }
  }

  return Math.min(swap[N - 1], notSwap[N - 1]);
};

// time:  O(n)
// space: O(n)

// [1], [2]
// [1, 2, 3], [2, 3, 4]
// [1, 2, 4], [1, 3, 3]
// [1, 3, 5, 4], [1, 2, 3, 7]
