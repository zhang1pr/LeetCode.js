/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  const cols = new Array(n).fill(false);
  const diagonal1 = new Array(2 * n).fill(false);
  const diagonal2 = new Array(2 * n).fill(false);
  let res = 0;

  function DFS(row) {
    if (row == n) {
      res++;
    } else {
      for (let i = 0; i < n; i++) {
        const col = i;
        const d1 = row + col;
        const d2 = row - col + n;

        if (cols[col] || diagonal1[d1] || diagonal2[d2]) {
          continue;
        }

        cols[col] = true;
        diagonal1[d1] = true;
        diagonal2[d2] = true;

        DFS(row + 1);

        cols[col] = false;
        diagonal1[d1] = false;
        diagonal2[d2] = false;
      }
    }
  }

  DFS(0);

  return res;
};

// time:  O(n!)
// space: O(n)

// test cases:
// 1
// 2
// 3
// 4
// 5
