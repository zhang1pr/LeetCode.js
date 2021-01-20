/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
  const stack = [];
  const res = Array(n).fill(0);
  let s = logs[0].split(':');
  stack.push(parseInt(s[0], 10));

  let i = 1;
  let prev = parseInt(s[2], 10);
  while (i < logs.length) {
    s = logs[i].split(':');
    if (s[1] == 'start') {
      if (stack.length) {
        res[stack[stack.length - 1]] += parseInt(s[2], 10) - prev;
      }

      stack.push(parseInt(s[0], 10));
      prev = parseInt(s[2], 10);
    } else {
      res[stack[stack.length - 1]] += parseInt(s[2], 10) - prev + 1;
      stack.pop();
      prev = parseInt(s[2], 10) + 1;
    }

    i++;
  }

  return res;
};

// time:  O(1)
// space: O(1)

// 2, logs = ['0:start:0', '1:start:2', '1:end:5', '0:end:6']
// 1, logs = ['0:start:0', '0:start:2', '0:end:5', '0:start:6', '0:end:6', '0:end:7']
// 2, logs = ['0:start:0', '0:start:2', '0:end:5', '1:start:6', '1:end:6', '0:end:7']
// 2, logs = ['0:start:0', '0:start:2', '0:end:5', '1:start:7', '1:end:7', '0:end:8']
// 1, logs = ['0:start:0', '0:end:0']
