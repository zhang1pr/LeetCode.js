/**
 * @param {number[]} nums
 * eturn {number}
 */
var sumSubseqWidths = function(nums) {
  const MOD = 1e9 + 7;
  const N = nums.length;
  nums.sort((a, b) => a - b);

  const pow2 = Array(N).fill(0);
  pow2[0] = 1;

  for (let i = 1; i < N; i++) {
    pow2[i] = pow2[i-1] * 2 % MOD;
  }

  let ans = 0;
  for (let i = 0; i < N; i++) {
    ans = (ans + (pow2[i] - pow2[N - 1 - i]) * nums[i]) % MOD;
  }

  return ans;
};

// time:  O(nlog(n))
// space: O(n)

// [2]
// [2, 1, 3]
