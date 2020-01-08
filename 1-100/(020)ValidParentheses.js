/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const array = [];
  const left = ['(', '[', '{'];
  const right = [')', ']', '}'];

  for (let i = 0; i < s.length; i++) {
    const index = right.indexOf(s[i]);

    if (index != -1) {
      const target = array.pop();

      if (!target || left.indexOf(target) != index) {
        return false;
      }
    } else {
      array.push(s[i]);
    }
  }

  return !array.length;
};

// time:  O(n)
// space: O(n)

// test cases:
// ''
// '()'
// '}{'
// '([)]'
// '([])}'
