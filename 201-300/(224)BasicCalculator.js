/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const array = Array.from(s);
  const n = array.length;
  const stack = [];
  let num = 0;
  let pow = 1;
  
  for (let i = n - 1; i >= 0; i--) {
    if (array[i] == ' ') {
      continue;
    }

    if (array[i] >= '0' && array[i] <= '9') {
      num = Number(array[i]) * pow + num;
      pow *= 10;
    } else {
      if (pow != 1) {
        stack.push(num);
        num = 0;
        pow = 1;
      }

      if (array[i] == '+' || array[i] == '-') {
        stack.push(array[i] == '+' ? 1 : -1);
      } else if (array[i] == '(') {
        const res = evaluateExpr(stack);
        stack.pop();
        stack.push(res);
      } else if (array[i] == ')') {
        stack.push(-2);
      }
    }
  }
  
  if (pow != 1) {
    stack.push(num);
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
