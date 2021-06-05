/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function(formula) {
  const map = new Map();
  const stack = [];
  let product = 1;
  let ele = '';
  let cnt = 0;
  let j = 0;
  let res = '';

  for (let i = formula.length - 1; i >= 0; i--) {
    if ('0' <= formula[i] && formula[i] <= '9') {
      cnt += Number(formula[i]) * (10 ** j);
      j++;
    } else if (formula[i] == ')') {
      stack.push(cnt || 1);
      product *= cnt || 1;
      j = 0;
      cnt = 0;
    } else if (formula[i] == '(') {
      product = Math.floor(product / stack.pop());
      j = 0;
      cnt = 0;
    } else if (formula[i] == formula[i].toUpperCase()) {
      ele += formula[i];
      ele = ele.split('').reverse().join('');

      if (!map.has(ele)) {
        map.set(ele, 0);
      }

      map.set(ele, map.get(ele) + (cnt || 1) * product);
      ele = '';
      j = 0;
      cnt = 0;
    } else {
      ele += formula[i];
    }
  }

  const arr = [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));

  for (const [key, val] of arr) {
    res += val > 1 ? key + val.toString(): key;
  }

  return res;
};

// time:  O(n^2)
// space: O(n)

// 'H2O'
// 'Be32'
// 'Mg(OH)2'
// 'Mg(H2O)N'
// 'K4(ON(SO3)2)2'
