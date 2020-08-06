/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function(word) {
  const result = [];

  function DFS(pos, cur, count) {
    if (pos === word.length) {
      if (count > 0) {
        cur += count.toString();
      }

      result.push(cur);
      return;
    }
    
    DFS(pos + 1, cur, count + 1);
    DFS(pos + 1, cur + (count > 0 ? count.toString() : '') + word[pos], 0);
  }

  DFS(0, '', 0);
  return result;
};

// time:  O(2^n)
// space: O(n^2)

// 'a'
// 'aa'
// 'ab'
// 'word'
