/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.trim().split(/\s+/).reverse().join(' ');
};

// time:  O(n)
// space: O(n)

// test cases:
// ''
// ' '
// '   '
// ' a '
// 'the sky is blue'
// '  hello world!  '
// 'a good   example'
