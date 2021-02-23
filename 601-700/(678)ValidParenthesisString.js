/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  let low = 0;
  let high = 0;

  for (const ch of s) {
    low += ch == '(' ? 1 : -1;
    high += ch != ')' ? 1 : -1;

    if (high < 0) {
      break;
    }

    low = Math.max(low, 0);
  }

  return low == 0;
};

// time:  O(n)
// space: O(1)

// '*'
// '('
// ')'
// '()'
// ')('
// '**'
// '(*)'
// ')*('
// '(*))'
// '()*)'
// '(())'
// '()()'
// '(**)'
// '((*));
