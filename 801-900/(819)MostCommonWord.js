/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const ban = new Set(banned);
  const map = new Map();

  const words = paragraph.replaceAll(/\W+/g, ' ').toLowerCase().split(' ');
  for (const word of words) {
    if (!ban.has(word)) {
      map.set(word, (map.get(word) || 0) + 1);
    }
  }

  let count = 0;
  let res = '';

  for (const [key, val] of map) {
    if (count < val) {
      count = val;
      res = key;
    }
  }

  return res;
};

// time:  O(n+m)
// space: O(n+m)

// 'a.', []
// 'a, a, a, a, b,b,b,c, c', ['a']
// 'Bob. hIt, baLl', ['bob', 'hit']
// 'Bob hit a ball, the hit BALL flew far after it was hit.', ['hit']
