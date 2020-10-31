/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function(n) {
  const res = [];

  function DFS(n, start, currentres) {
    if (n == 1) {
      if (currentres.length > 1) {
        res.push(currentres.slice());
      }

      return;
    }

    for (let i = start; i <= n; i++) {
      if (n % i == 0) {
        currentres.push(i);
        DFS(n / i, i, currentres);
        currentres.pop();
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
