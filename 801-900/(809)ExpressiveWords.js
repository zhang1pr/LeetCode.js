/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(S, words) {
  function check(S, W) {
    const n = S.length;
    const m = W.length;
    let j = 0;

    for (let i = 0; i < n; i++) {
      if (j < m && S[i] == W[j]) {
        j++;
      } else if (i > 1 && S[i] == S[i - 1] && S[i - 1] == S[i - 2]) {
        continue;
      } else if (0 < i && i < n - 1 && S[i - 1] == S[i] && S[i] == S[i + 1]) {
        continue;
      } else {
        return false;
      }
    }

    return j == m;
  }

  let res = 0;
  for (const W of words) {
    if (check(S, W)) {
      res++;
    }
  }

  return res;
};

// time:  O(n*wordLen)
// space: O(1)

// 'heeellooo', ['hello', 'hi', 'helo']
