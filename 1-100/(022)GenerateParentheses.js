/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = [];

  function addParenthesis(left, right, string) {
    if (!left && !right) {
      result.push(string);
    } else if (!left) {
      result.push(string + ')'.repeat(right));
    } else {
      addParenthesis(left - 1, right, string + '(');

      if (right > left) {
        addParenthesis(left, right - 1, string + ')');
      }
    }
  }

  addParenthesis(n, n, '');

  return result;
};

// time:  O(4^n/n^(-1/2))
// space: O(4^n/n^(-1/2))

// test cases:
// 0
// 1
// 5
