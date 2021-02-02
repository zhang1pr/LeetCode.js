/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
var findMinStep = function(board, hand) {
  const boardSet = new Set(board);
  const handSet = new Set();

  const count = Array(26).fill(0);
  for (const char of hand) {
    if (boardSet.has(char)) {
      count[char.charCodeAt(0) - 65]++;
      handSet.add(char);
    }
  }

  function DFS(s) {
    s = removeConsecutive(s);
    if (s == '#') {
      return 0;
    }

    let res = Infinity;

    for (const char of [...handSet]) {
      for (let i = 0; i < s.length; i++) {
        count[char.charCodeAt(0) - 65]--;
        if (count[char.charCodeAt(0) - 65] == 0) {
          handSet.delete(char);
        }

        res = Math.min(res, 1 + DFS(s.slice(0, i) + char + s.slice(i)));
        count[char.charCodeAt(0) - 65]++;

        if (count[char.charCodeAt(0) - 65] == 1) {
          handSet.add(char);
        }
      }

    }

    return res;
  }

  const res = DFS(board + '#');
  return res == Infinity ? -1 : res;
};

var removeConsecutive = function(board) {
  const stack = [];

  for (let i = 0; i < board.length; i++) {
    const char = board[i];

    if (!stack.length) {
      stack.push([char, 1]);
    } else {
      if (char == stack[stack.length - 1][0]) {
        stack[stack.length - 1][1]++;
      } else if (stack[stack.length - 1][1] >= 3) {
        stack.pop();
        i--;
      } else {
        stack.push([char, 1]);
      }
    }
  }

  let newBoard = '';

  while (stack.length) {
    const [char, times] = stack.pop();

    newBoard = char.repeat(times) + newBoard;
  }

  return newBoard;
};

// time:  O(hLen*bLen^2)
// space: O(1)

// 'G', 'GGGGG'
// 'WRRBBW', 'RB'
// 'WWBBWBBWW', 'BB'
// 'RRWWRRBBRR', 'WB'
// 'WWRRBBWW', 'WRBRW'
// 'RBYYBBRRB', 'YRBGB'
