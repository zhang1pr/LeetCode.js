/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  const visited = new Set();
  let res = 0;

  function DFS(i) {
    for (let j = 0; j < M.length; j++) {
      if (M[i][j] == 1 && !visited.has(j)) {
        visited.add(j);
        DFS(j);
      }
    }
  }

  for (let i = 0; i < M.length; i++) {
    if (!visited.has(i)) {
      DFS(i);
      res++;
    }
  }

  return res;
};

// [[1]]
// [[1, 0], [0, 1]]
// [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
// [[1, 1, 0], [1, 1, 0], [0, 0, 1]]
// [[1, 1, 0], [1, 1, 1], [0, 1, 1]]
