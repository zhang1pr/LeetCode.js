/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const arr = Array.from(s);
  const n = arr.length;
  const stack = [];
  let num = 0;
  let pow = 1;

  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] == ' ') {
      continue;
    }

    if (arr[i] >= '0' && arr[i] <= '9') {
      num = Number(arr[i]) * pow + num;
      pow *= 10;
    } else {
      if (pow != 1) {
        stack.push(num);
        num = 0;
        pow = 1;
      }

      if (arr[i] == '+' || arr[i] == '-') {
        stack.push(arr[i] == '+' ? 1 : -1);
      } else if (arr[i] == '(') {
        const res = evaluateExpr(stack);
        stack.pop();
        stack.push(res);
      } else if (arr[i] == ')') {
        stack.push(-2);
      }
    }
  }

  if (pow != 1) {
    stack.push(num);
  }

  if (stack.length % 2 == 0) {
    stack.push(0);
  }

  return evaluateExpr(stack);
};

var evaluateExpr = function(stack) {
  let res = stack.pop();
  while (stack.length != 0 && stack[stack.length - 1] != -2) {
    res += stack.pop() * stack.pop();
  }

  return res;
}

// time:  O(n)
// space: O(1)

// '0'
// '1 + 1'
// ' 2-1 + 2 '
// '(1+(4+5+2)-3)+(6+8)'
