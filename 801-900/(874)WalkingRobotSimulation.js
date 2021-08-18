/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
 var robotSim = function(commands, obstacles) {
  const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const set = new Set();

  for (const [a, b] of obstacles) {
    set.add(a + ',' + b);
  }

  let d = 0;
  let x = 0;
  let y = 0;
  let res = 0;

  for (let c of commands) {
    if (c == -1) {
      d++;

      if (d == 4) {
        d = 0;
      }
    } else if (c == -2) {
      d--;

      if (d == -1) {
        d = 3;
      }
    } else {
      while (c > 0 && !set.has((x + dir[d][0]) + ',' + (y + dir[d][1]))) {
        x += dir[d][0];
        y += dir[d][1];
        c--;
      }
    }

    res = Math.max(res, x * x + y * y);
  }

  return res;
};

// time:  O(n*maxCommmand)
// space: O(obs)

// [4, -1, 3], []
// [4, -1, 4, -2, 4], [[2, 4]]
