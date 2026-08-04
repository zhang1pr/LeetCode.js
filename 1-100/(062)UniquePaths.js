/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  if (m === 1 || n === 1) return 1;
    
  m--; 
  n--;
  
  if (m < n) {
    [m, n] = [n, m]; 
  }
  
  let res = 1;
  let j = 1;
  
  for (let i = m + 1; i <= m + n; i++, j++) {
    res *= i;
    res = Math.floor(res / j);
  }
  
  return res;
};

// time:  O(m+n)
// space: O(1)

// 1, 1
// 1, 3
// 3, 1
// 7, 3
