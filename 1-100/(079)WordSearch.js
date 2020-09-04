/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const m = board.length;
  const n = board[0].length;
  const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const set = new Set();

  function DFS(i, j, index) {
    if (word.length == index) {
      return true;
    }

    set.add(i + ',' + j);

    for (const [di, dj] of dir) {
      const newI = di + i;
      const newJ = dj + j;

      const newStr = newI + ',' + newJ;

      if (!set.has(newStr) && 0 <= newI && newI < m && 0 <= newJ && newJ < n && board[newI][newJ] == word[index] && DFS(newI, newJ, index+1)) {
        return true;
      }
    }

    set.delete(i + ',' + j);

    return false;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == word[0] && DFS(i, j, 1)) {
        return true;
      }
    }
  }

  return false;
};

// time:  O(n^2*3^k)
// space: O(1)

// [[]], ''
// [['A']], 'A'
// [['A', 'B']], 'AB'
// [['A', 'A']], 'AAA'
// [['A', 'A'], ['A', 'A']], 'AAAA'
// [['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'SEE'
// [['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ADED'
// [['A', 'B', 'C', 'E'], ['S', 'F', 'E', 'S'], ['A', 'D', 'E', 'E']], 'ABCB'
// [['A', 'B', 'C', 'E'], ['S', 'F', 'E', 'S'], ['A', 'D', 'E', 'E']], 'ABCESEEEFS'
