/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  const code = [0];

  for (let i = 0; i < n; i++) {
    add = 1 << i;

    for (let j = code.length - 1; j >= 0; j--) {
      code.push(code[j] + add);
    }
  }

  return code;
};

// time:  O(2^n)
// space: O(1)

// 0
// 1
// 2
// 3
