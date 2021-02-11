/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
  let last = '';
  let str = '';

  for (const char of s) {
    if (char != last) {
      last = char;
      str += char;
    }
  }

  const len = str.length;
  const memo = [...Array(len)].map(() => Array(len).fill(0));

  function DFS(i, j) {
    if (i > j) {
      return 0;
    }

    if (memo[i][j] == 0) {
      let ans = DFS(i + 1, j) + 1;

      for (let k = i + 1; k <= j; k++) {
        if (str[k] == str[i]) {
          ans = Math.min(ans, DFS(i, k - 1) + DFS(k + 1, j));
        }
      }

      memo[i][j] = ans;
    }

    return memo[i][j];
  }


  return DFS(0, len - 1);
};

// time:  O(n^3)
// space: O(n^2)

// 'a'
// 'aa'
// 'ab'
// 'aba'
// 'abc'
// 'aaabbb'
