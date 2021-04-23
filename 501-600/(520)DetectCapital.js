/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  let cnt = 0;

  for (const char of word) {
    if (char == char.toUpperCase()) {
      cnt++;
    }
  }

  return cnt == word.length || cnt == 0 || cnt == 1 && word[0] == word[0].toUpperCase();
};

// time:  O(n)
// space: O(1)

// 'USA'
// 'FlaG'
// 'Google'
// 'leetcode'
