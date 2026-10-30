/**
 * @param {number[][]} graph
 * @return {number}
 */
var catMouseGame = function(graph) {
  const N = graph.length;
  const DRAW = 0, MOUSE = 1, CAT = 2;

  const color = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => Array(3).fill(0))
  );
  const degree = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => Array(3).fill(0))
  );

  for (let m = 0; m < N; m++) {
    for (let c = 0; c < N; c++) {
      degree[m][c][1] = graph[m].length;
      degree[m][c][2] = graph[c].length;
      
      for (const x of graph[c]) {
        if (x === 0) {
          degree[m][c][2]--;
          break;
        }
      }
    }
  }

  let q = [];
  for (let i = 0; i < N; ++i) {
    for (let t = 1; t <= 2; ++t) {
      color[0][i][t] = MOUSE;
      q.push([0, i, t, MOUSE]);
      
      if (i > 0) {
        color[i][i][t] = CAT;
        q.push([i, i, t, CAT]);
      }
    }
  }

  while (q.length > 0) {
    const nq = [];

    for (const [i, j, t, c] of q) {
      for (const [i2, j2, t2] of parents(graph, i, j, t)) {
        if (color[i2][j2][t2] === DRAW) {
          if (t2 === c) {
            color[i2][j2][t2] = c;
            nq.push([i2, j2, t2, c]);
          } else {
            degree[i2][j2][t2]--;
            if (degree[i2][j2][t2] === 0) {
              color[i2][j2][t2] = 3 - t2;
              nq.push([i2, j2, t2, 3 - t2]);
            }
          }
        }
      }
    }

    q = nq;
  }

  return color[1][2][1];  
};

function parents(graph, m, c, t) {
  const ans = [];
  if (t == 2) {
    for (const m2 of graph[m]) {
      ans.push([m2, c, 3 - t]);
    }
  } else {
    for (const c2 of graph[c]) {
      if (c2 > 0) {
        ans.push([m, c2, 3 - t]);
      }
    }
  }
  return ans;
}

// time:  O(n^3)
// space: O(n^2)

// [[1, 3], [0], [3], [0, 2]]
// [[2, 5], [3], [0, 4, 5], [1, 4, 5], [2, 3], [0, 2, 3]]