/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
  let open = 0, close = 0;
  
  for (let ch of s) {
    if (ch == '(') {
      open++;
    } else if (open == 0)  {
      close++;
    } else {
      open--;
    }
  }

  return open + close;
};

// time:  O(n)
// space: O(1)

// '())'
// '((('