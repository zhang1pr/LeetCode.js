/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.split(' ').map(word => word.split('').reverse().join('')).join(' ');
};

// time:  O(n)
// space: O(n)

// 'A'
// 'Apple'
// 'Apple Banana'
// 'Let's take LeetCode contest'
