/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
  const res = [];
  DFS('', 0, 0, 0);

  function DFS(path, start, eval, pre) {
    if (start == num.length) {
      if (target == eval) {
        res.push(path);
      }

      return;
    }

    for (let i = start; i < num.length; i++) {
      if (num[start] == '0' && i > start) {
        break;
      }

      let cur = parseInt(num.slice(start, i + 1), 10);

      if (start == 0) {
        DFS(path + cur, i + 1, cur, cur);
      } else {
        DFS(path + '+' + cur, i + 1, eval + cur, cur);
        DFS(path + '-' + cur, i + 1, eval - cur, -cur);
        DFS(path + '*' + cur, i + 1, eval - pre + pre * cur, pre * cur);
      }
    }
  }

  return res;
};

// time:  O(4^n)
// space: O(n)

// '0', 0
// '1', 2
// '00', 0
// '105', 5
// '123', 6
// '232', 8
// '3456237490', 9191
