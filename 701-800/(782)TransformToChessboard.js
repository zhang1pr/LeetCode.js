/**
 * @param {number[][]} board
 * @return {number}
 */
var movesToChessboard = function(board) {
  const N = board.length;
  let rowSum = 0;
  let colSum = 0;
  let rowSwap = 0;
  let colSwap = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if ((board[0][0] ^ board[i][0] ^ board[0][j] ^ board[i][j]) == 1) {
        return -1;
      }
    }
  }

  for (let i = 0; i < N; i++) {
    rowSum += board[0][i];
    colSum += board[i][0];

    if (board[i][0] == i % 2) {
      rowSwap++;
    }

    if (board[0][i] == i % 2) {
      colSwap++;
    }
  }

  if (rowSum != Math.floor(N / 2) && rowSum != Math.ceil(N / 2)) {
    return -1;
  }

  if (colSum != Math.floor(N / 2) && colSum != Math.ceil(N / 2)) {
    return -1;
  }

  if (N % 2 == 1) {
    if (colSwap % 2 == 1) {
      colSwap = N - colSwap;
    }

    if (rowSwap % 2 == 1) {
      rowSwap = N - rowSwap;
    }
  } else {
    colSwap = Math.min(N - colSwap, colSwap);
    rowSwap = Math.min(N - rowSwap, rowSwap);
  }

  return (colSwap + rowSwap) / 2;
};

// time:  O(n^2)
// space: O(n)

// [[0, 1], [1, 0]]
// [[1, 0], [1, 0]]
// [[0, 1, 0], [0, 1, 0], [1, 0, 1]]
// [[0, 1, 1, 0], [0, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1]]
