/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  const set = new Set(wordDict);
  const map = new Map();

  function DFS(s) {
    if (s.length == 0) {
      return [];
    }

    if (map.has(s)) {
      return map.get(s);
    }

    const res = [];
    for (let j = 0; j < s.length; j++) {
      const target = s.substring(j, s.length);

      if (set.has(target)) {
        if (j == 0) {
          res.push(target);
        } else {
          for (const item of DFS(s.substring(0, j), map)) {
            res.push(item + ' ' + target);
          }
        }
      }
    }

    map.set(s, res);
    return res;
  }

  return DFS(s);
};

// time:  O(2^n)
// space: O(2^n)

// 'leetcode', ['leet', 'code']
// 'applepenapple', ['apple', 'pen']
// 'catsandog', ['cats', 'dog', 'sand', 'and', 'cat']
// 'aaaaab', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaa']
