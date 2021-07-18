/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  function build(s) {
    const ans = [];

    for (const ch of s) {
      if (ch != '#') {
        ans.push(ch);
      } else if (ans.length) {
        ans.pop();
      }
    }

    return ans.toString();
  }

  return build(s) == build(t);
};

// time:  O(n)
// space: O(n)

// 'a#c', 'b'
// 'ab#c', 'ad#c'
// 'ab##', 'c#d#'
// 'a##c', '#a#c'
