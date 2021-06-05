/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function(n) {
  const res = [];

  function DFS(n, start, curres) {
    if (n == 1) {
      if (curres.length > 1) {
        res.push(curres.slice());
      }

      return;
    }

    for (let i = start; i <= n; i++) {
      if (n % i == 0) {
        curres.push(i);
        DFS(n / i, i, curres);
        curres.pop();
      }
    }
  }

  DFS(n, 2, []);

  return res;
};

// time:  O(nlog(n))
// space: O(log(n))

// 1
// 2
// 3
// 4
// 8
// 32
// 37
