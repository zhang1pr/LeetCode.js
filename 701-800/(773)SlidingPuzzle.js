/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
  const target = '123450';
  let start = '';
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      start += board[i][j];
    }
  }

  const visited = new Set().add(start);
  const dir = [[1, 3], [0, 2, 4], [1, 5], [0, 4], [1, 3, 5], [2, 4]];

  let queue = [start];
  let res = 0;
  while (queue.length) {
    const newQueue = [];

    for (const cur of queue) {
      if (cur == target) {
        return res;
      }

      const zero = cur.indexOf('0');

      for (const str of dir[zero]) {
        const next = swap(cur, zero, str);
        if (visited.has(next)) {
          continue;
        }

        visited.add(next);
        newQueue.push(next);
      }
    }

    queue = newQueue;
    res++;
  }

  return -1;
};

var swap = function(str, i, j) {
  let iChar = str[i];
  let jChar = str[j];

  str = str.slice(0, i) + jChar + str.slice(i + 1);
  str = str.slice(0, j) + iChar + str.slice(j + 1);
  return str;
};

// time:  O(1)
// space: O(1)

// [[1, 2, 3], [4, 0, 5]]
// [[1, 2, 3], [5, 4, 0]]
