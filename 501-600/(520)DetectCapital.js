/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  let count = 0;

  for (const char of word) {
    if (char == char.toUpperCase()) {
      count++;
    }
  }

  return count == word.length || count == 0 || count == 1 && word[0] == word[0].toUpperCase();
};

// time:  O(n)
// space: O(1)

// 'USA'
// 'FlaG'
// 'Google'
// 'leetcode'
