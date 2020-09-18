/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let left = 0;
  let right = 0;
  let max = 0;
  let i;

  for (i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      left++;
    } else {
      right++;
    }

    if (left == right) {
      max = Math.max(max, 2 * right);
    } else if (right >= left) {
      left = 0;
      right = 0;
    }
  }

  left = 0;
  right = 0;

  for (i = s.length - 1; i >= 0; i--) {
    if (s[i] == '(') {
      left++;
    } else {
      right++;
    }

    if (left == right) {
      max = Math.max(max, 2 * left);
    } else if (left >= right) {
      left = 0;
      right = 0;
    }
  }

  return max;
};

// time:  O(n)
// space: O(1)

// ''
// ')('
// '()'
// '(()'
// ')()())'
// '((()())()())'
