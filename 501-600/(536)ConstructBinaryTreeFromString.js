/**
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree = function(s) {
  const stack = [];

  for (let i = 0, j = 0; i < s.length; i++) {
    j = i;

    const char = s[i];
    if (char == ')') {
      stack.pop();
    } else if (char != '(') {
      while (i + 1 < s.length && s[i + 1] >= '0' && s[i + 1] <= '9') {
        i++;
      }

      const cur = new TreeNode(Number(s.slice(j, i + 1)));

      if (stack.length) {
        const parent = stack[stack.length - 1];
        if (parent.left) {
          parent.right = cur;
        } else {
          parent.left = cur;
        }
      }

      stack.push(cur);
    }
  }

  return stack.length ? stack[0] : null;
}

// time:  O(n)
// space: O(n)

// ''
// '1'
// '-1'
// '0(1(10(100)))'
// '4(2(3)(1))(6(5))'
