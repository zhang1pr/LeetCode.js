/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
  const m = board.length;
  const n = board[0].length;
  let queue = [click];

  while (queue.length) {
    const newQueue = [];

    for (const [row, col] of queue) {
      if (board[row][col] == 'M') {
        board[row][col] = 'X';
      } else {
        let cnt = 0;

        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            if (i == 0 && j == 0) {
              continue;
            }

            const r = row + i;
            const c = col + j;

            if (r < 0 || r >= m || c < 0 || c >= n) {
              continue;
            }

            if (board[r][c] == 'M' || board[r][c] == 'X') {
              cnt++;
            }
          }
        }

        if (cnt > 0) {
          board[row][col] = cnt.toString();
        } else {

          for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
              if (i == 0 && j == 0) {
                continue;
              }

              let r = row + i;
              let c = col + j;

              if (r < 0 || r >= m || c < 0 || c >= n) {
                continue;
              }

              if (board[r][c] == 'E') {
                newQueue.push([r, c]);
                board[r][c] = 'B';
              }
            }
          }
        }
      }
    }

    queue = newQueue;
  }

  return board;
}

// time:  O(mn)
// space: O(m+n)

// [['E']], [0, 0]
// [['E', 'E', 'E', 'E', 'E'], ['E', 'E', 'M', 'E', 'E'], ['E', 'E', 'E', 'E', 'E'], ['E', 'E', 'E', 'E', 'E']], [3, 0]
// [['B', '1', 'E', '1', 'B'], ['B', '1', 'M', '1', 'B'], ['B', '1', '1', '1', 'B'], ['B', 'B', 'B', 'B', 'B']], [1, 2]
