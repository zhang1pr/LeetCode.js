/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const cols = Array(n).fill(false);
  const diagonal1 = Array(2 * n).fill(false);
  const diagonal2 = Array(2 * n).fill(false);
  const res = [];
  const board = [...Array(n)].map(() => Array(n).fill('.'));

  function DFS(row) {
    if (row == n) {
      res.push(board.map(arr => arr.join('')));
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
        board[row][col] = 'Q';

        DFS(row + 1);

        cols[col] = false;
        diagonal1[d1] = false;
        diagonal2[d2] = false;
        board[row][col] = '.';
      }
    }
  }

  DFS(0);

  return res;
};

// time:  O(n!)
// space: O(n^2)

// 1
// 2
// 3
// 4
// 5
