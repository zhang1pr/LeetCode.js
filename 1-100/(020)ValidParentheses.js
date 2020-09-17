/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const arr = [];
  const left = ['(', '[', '{'];
  const right = [')', ']', '}'];

  for (let i = 0; i < s.length; i++) {
    const index = right.indexOf(s[i]);

    if (index != -1) {
      const target = arr.pop();

      if (!target || left.indexOf(target) != index) {
        return false;
      }
    } else {
      arr.push(s[i]);
    }
  }

  return !arr.length;
};

// time:  O(n)
// space: O(n)

// ''
// '()'
// '}{'
// '([)]'
// '([])}'
