/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  if (s.length < 4 || s.length > 12) {
    return [];
  }

  const result = [];
  const stack = [];

  function generateAddresses(stack, s, start) {
    if (stack.length == 4) {
      if (start == s.length) {
        result.push(stack.join('.'));
      }
      return;
    }

    for (let i = 1; i <= 3; i++) {
      if (start + i > s.length) {
        return;
      }

      let fragment = Number(s.substr(start, i));
      if (fragment < 256) {
        stack.push(fragment);
        generateAddresses(stack, s, start + i);
        stack.pop();
      }

      if (fragment == 0) {
        return;
      }
    }
  }

  generateAddresses(stack, s, 0);

  return result;
};

// time:  O(1)
// space: O(1)

// test cases:
// '111'
// '2555'
// '010010'
// '25525511135'
// '255255111355'
// '2552551111111'
