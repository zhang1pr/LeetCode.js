/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
  let ans = 0;
  let bal = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      bal++;
    } else {
      bal--;

      if (s[i - 1] == '(') {
        ans = ans + 2 ** bal;
      }
    }
  }

  return ans;
};

// time:  O(n)
// space: O(1)

// '()'
// '(())'
// '()()'
// '(()(()))'
