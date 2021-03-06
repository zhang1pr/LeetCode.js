/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  const res = [];

  function DFS(s, istart, jstart, end, left, right) {
    let cnt = 0;
    for (let i = istart; i < end; i++) {
      if (s[i] == left) {
        cnt++;
      } else if (s[i] == right) {
        cnt--;
      }

      if (cnt < 0) {
        for (let j = jstart; j <= i; j++) {
          if (s[j] == right && (j == 0 || s[j - 1] != right)) {
            DFS(s.slice(0, j) + s.slice(j + 1), i, j, end, left, right);
          }
        }

        return;
      }
    }

    s = s.split('').reverse().join('');

    if (left == '(') {
      DFS(s, 0, 0, s.length, ')', '(');
    } else {
      res.push(s);
    }
  }

  DFS(s, 0, 0, s.length, '(', ')');

  return res;
};

// time:  O(2^n)
// space: O(n)

// ')('
// '()())()'
// '(a)())()'
