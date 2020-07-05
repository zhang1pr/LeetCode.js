/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function(n) {
  const result = [];

  function DFS(n, start, currentResult) {
    if (n == 1) {
      if (currentResult.length > 1) {
        result.push(currentResult.slice());
      }
      
      return;
    }

    for (let i = start; i <= n; i++) {
      if (n % i == 0) {
        currentResult.push(i);
        DFS(n / i, i, currentResult);
        currentResult.pop();    
      }
    }
  }

  DFS(n, 2, []);

  return result;
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
