/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A) {
  const N = A.length;
  let ans = 0;
  let base = 0;

  while (base < N) {
    let end = base;
    if (end + 1 < N && A[end] < A[end + 1]) {
      while (end + 1 < N && A[end] < A[end + 1]) {
        end++;
      }

      if (end + 1 < N && A[end] > A[end + 1]) {
        while (end + 1 < N && A[end] > A[end + 1]) {
          end++;
        }

        ans = Math.max(ans, end - base + 1);
      }
    }

    base = Math.max(end, base + 1);
  }

  return ans;
};

// time:  O(n)
// space: O(1)

// [2, 2, 2]
// [2, 1, 4, 7, 3, 2, 5]
