/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = [];
  let num = 0;
  let res = '';

  for (const c of s) {
    if (c == '[') {
      stack.push(res);
      stack.push(num);
      res = '';
      num = 0;
    } else if (c == ']') {
      const count = stack.pop();
      const str = stack.pop();

      res = str + res.repeat(count);
    } else if (Number.isInteger(Number(c))) {
      num = num * 10 + Number(c);
    } else {
      res += c;
    }
  }

  return res;
};

// time:  O(n)
// space: O(1)

// 'a'
// '2[a]'
// 'a2[b]a'
// '3[a2[c]]'
// '3[a]2[bc]'
// 'abc3[cd]xyz'
// '2[abc]3[cd]ef'
