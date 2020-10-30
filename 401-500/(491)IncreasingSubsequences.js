/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  const res = [];

  function DFS(nums, index, ans) {
    if (index > nums.length - 1) {
      if (ans.length > 1) {
        res.push(ans.slice());
      }

      return;
    }

    if (ans.length == 0 || nums[index] >= ans[ans.length - 1]) {
      ans.push(nums[index]);
      DFS(nums, index + 1, ans);
      ans.pop();
    }

    if (index > 0 && ans.length > 0 && nums[index] == ans[ans.length - 1]) {
      return;
    }

    DFS(nums, index + 1, ans);
  }

  DFS(nums, 0, []);
  return res;
};

// time:  O(2^n)
// space: O(n)

// [0]
// [1]
// [1, 1]
// [1, 0]
// [1, 1]
// [1, 3, 2, 4]
// [4, 6, 7, 7]
