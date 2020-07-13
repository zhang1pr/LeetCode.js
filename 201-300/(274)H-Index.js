/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  citations.sort((a, b) => a - b);
  
  const n = citations.length;

  for (let i = 0; i < n; i++) {
    if (citations[i] >= n - i) {
      return n - i;
    }
  }

  return 0;
}

// time:  O(nlog(n))
// space: O(log(n))

// [0]
// [1]
// [0, 1]
// [0, 1, 3]
// [3, 0, 6, 1, 5]
