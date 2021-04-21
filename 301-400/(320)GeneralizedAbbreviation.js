/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function(word) {
  const res = [];

  function DFS(pos, cur, cnt) {
    if (pos === word.length) {
      if (cnt > 0) {
        cur += cnt.toString();
      }

      res.push(cur);
      return;
    }

    DFS(pos + 1, cur, cnt + 1);
    DFS(pos + 1, cur + (cnt > 0 ? cnt.toString() : '') + word[pos], 0);
  }

  DFS(0, '', 0);
  return res;
};

// time:  O(2^n)
// space: O(n^2)

// 'a'
// 'aa'
// 'ab'
// 'word'
