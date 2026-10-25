/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
  const MOD = 1e9 + 7;
  const stack = [];
  const res = Array(arr.length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }

    const j = stack.length ? stack[stack.length - 1] : -1;
    if (j == -1) {
      res[i] = 0
    } else {
      res[i] = res[j]
    }

    res[i] += (i - j) * arr[i];

    stack.push(i);
  }

  return res.reduce((a, b) => a + b) % MOD;    
};

// time:  O(n)
// space: O(n)

// [3, 1, 2, 4]
// [11, 81, 94, 43, 3]