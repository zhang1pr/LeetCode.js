/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let res = 0;

  function expand(ss, low, high) {
    let res = 0;

    while (low >= 0 && high < ss.length) {
      if (ss[low] != ss[high]) {
        break;
      }

      low--;
      high++;
      res++;
    }

    return res;
  }

  for (let i = 0; i < s.length; i++) {
    res += expand(s, i, i);
    res += expand(s, i, i + 1);
  }

  return res;
};

// time:  O(n^2)
// space: O(1)

// 'a'
// 'aa'
// 'aaa'
// 'abc'
