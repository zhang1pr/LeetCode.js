/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  const n = citations.length;
  let low = 0;
  let high = n - 1;
  let before;

  while (low <= high) {
    let mid = (low + high) >>> 1;

    if (citations[mid] >= n - mid) {
      if (mid == 0) {
        return n;
      }

      before = mid - 1;
      if (citations[before] < n - before) {
        return n - mid;
      }

      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return 0;
};

// time:  O(log(n))
// space: O(1)

// [0]
// [1]
// [0, 1]
// [0, 1, 3]
// [0, 1, 3, 5, 6]
