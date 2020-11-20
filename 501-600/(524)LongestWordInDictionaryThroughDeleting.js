/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
  let res = '';

  for (const word of d) {
    let i = 0;

    for (const char of s) {
      if (i < word.length && char == word[i]) {
        i++;
      }
    }

    if (i == word.length && word.length >= res.length) {
      if (word.length > res.length || word < res) {
        res = word;
      }
    }
  }

  return res;
};

// time:  O(n*sLen)
// space: O(1)

// '', ['a']
// 'a', ['']
// 'a', ['a']
// 'a', ['', 'a', 'aa']
// 'abpcplea', ['a', 'b', 'c']
// 'abpcplea', ['ale', 'apple', 'monkey', 'plea']
