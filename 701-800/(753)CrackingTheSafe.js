/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var crackSafe = function(n, k) {
  if (n == 1 && k == 1) {
    return '0';
  }

  const seen = new Set();
  let res = '';

  let str = ''.padStart(n-1,'0');

  function DFS(node) {
    for (let x = 0; x < k; x++) {
      const nei = node + x.toString();
      if (!seen.has(nei)) {
        seen.add(nei);
        DFS(nei.slice(1));
        res += x.toString();
      }
    }
  }

  DFS(str);
  res += str;
  return res;
};

// time:  O(n*k^n)
// space: O(n*k^n)

// 1, 1
// 1, 2
// 2, 2
// 2, 3
// 2, 4
// 4, 10
