/**
 * @param {number[]} nums
 * @return {number}
 */
var bestRotation = function(nums) {
  const N = nums.length;
  const bad = Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    const left = (i - nums[i] + 1 + N) % N;
    const right = (i + 1) % N;

    bad[left]--;
    bad[right]++;

    if (left > right) {
      bad[0]--;
    }
  }

  let best = -N;
  let res = 0;
  let cur = 0;

  for (let i = 0; i < N; i++) {
    cur += bad[i];

    if (cur > best) {
      best = cur;
      res = i;
    }
  }

  return res;
};

// time:  O(n)
// space: O(n)

// [1, 3, 0, 2, 4]
// [2, 3, 1, 4, 0]
