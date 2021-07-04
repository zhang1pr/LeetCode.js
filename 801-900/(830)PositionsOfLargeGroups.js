/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
  const ans = [];
  let i = 0;
  const N = s.length;
  for (let j = 0; j < N; j++) {
    if (j == N - 1 || s[j] != s[j+1]) {
      if (j - i + 1 >= 3) {
        ans.push([i, j]);
      }

      i = j + 1;
    }
  }

  return ans;
};

// time:  O(n)
// space: O(1)

// 'aba"
// "abc"
// "abbxxxxzzy"
// "abcdddeeeeaabbbcd"
