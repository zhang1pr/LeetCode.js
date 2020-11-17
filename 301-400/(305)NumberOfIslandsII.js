/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
var numIslands2 = function(m, n, positions) {
  const res = [];

  if (m <= 0 || n <= 0) {
    return res;
  }

  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  let count = 0;

  const roots = Array(m * n).fill(-1);

  for (const p of positions) {
    let root = n * p[0] + p[1];

    if (roots[root] !== -1) {
      res.push(count);
      continue;
    }

    roots[root] = root;
    count++;

    for (const dir of dirs) {
      const x = p[0] + dir[0];
      const y = p[1] + dir[1];
      const nb = n * x + y;

      if (x < 0 || x >= m || y < 0 || y >= n || roots[nb] === -1) {
        continue;
      }

      const rootNb = findIsland(roots, nb);

      if (root !== rootNb) {
        roots[root] = rootNb;
        root = rootNb;
        count--;
      }
    }

    res.push(count);
  }

  return res;
};

var findIsland = function(roots, id) {
  while (id !== roots[id]) {
    roots[id] = roots[roots[id]];
    id = roots[id];
  }

  return id;
};

// time:  O(klog(mn))
// space: O(mn)

// 3, 3, [[0,0], [0,1], [1,2], [2,1]]
