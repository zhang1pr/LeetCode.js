/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function(richer, quiet) {
  function DFS(node) {
    if (ans[node] == -1) {
      ans[node] = node;

      for (const child of graph[node]) {
        const cand = DFS(child);

        if (quiet[cand] < quiet[ans[node]]) {
          ans[node] = cand;
        }
      }
    }

    return ans[node];
  }

  const N = quiet.length;
  const graph = [...Array(N)].map(() => []);
  const ans = Array(N).fill(-1);

  for (const [a, b] of richer) {
    graph[b].push(a);
  }

  for (let node = 0; node < N; node++) {
    DFS(node);
  }

  return ans;
};

// time:  O(n^2)
// space: O(n^2)

// [], [0]
// [[1, 0], [2, 1], [3, 1], [3, 7], [4, 3], [5, 3], [6, 3]], [3, 2, 5, 4, 6, 1, 7, 0]
