/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
  const N = arr.length;
  const index = new Map();
  arr.map((v, i) => index.set(v, i));

  const longest = new Map();
  let ans = 0;

  for (let k = 0; k < N; k++) {
    for (let j = 0; j < k; j++) {
      const i = index.get(arr[k] - arr[j]);
      if (i == null || i >= j) {
        continue;
      }

      if (!longest.has(i * N + j)) {
        longest.set(i * N + j, 2);
      }

      const cur = longest.get(i * N + j) + 1;
      longest.set(j * N + k, cur);
      ans = Math.max(ans, cur);
    }
  }

  return ans >= 3 ? ans : 0;
};

// time:  O(n^2)
// space: O(nlogmaxArr)

// [1, 2, 3, 4, 5, 6, 7, 8]
// [1, 3, 7, 11, 12, 14, 18]
