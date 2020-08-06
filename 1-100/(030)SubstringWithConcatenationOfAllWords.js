/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  const result = [];

  if (!s.length || !words.length) {
    return result;
  }

  const n = words.length;
  const m = words[0].length;
  const map1 = new Map();

  for (const word of words) {
    const value = map1.get(word);

    if (value) {
      map1.set(word, value + 1);
    } else {
      map1.set(word, 1);
    }
  }

  for (let i = 0; i <= s.length - n * m; i++) {
    const map2 = new Map();

    let j;
    for (j = 0; j < n; j++) {
      const target = s.substr(i + j * m, m);

      if (!map1.get(target)) {
        break;
      }

      const value = map2.get(target);

      if (value) {
        map2.set(target, value + 1);
      } else {
        map2.set(target, 1);
      }

      if (map2.get(target) > map1.get(target)) {
        break;
      }
    }

    if (j == n) {
      result.push(i);
    }
  }

  return result;
};

// time:  O(n^2)
// space: O(m + n)

// 'foo', []
// 'foo', ['']
// '', ['foo']
// 'barfoothefoobarman', ['foo', 'bar']
// 'wordgoodgoodgoodbestword", ['word', 'good', 'best', 'word']
