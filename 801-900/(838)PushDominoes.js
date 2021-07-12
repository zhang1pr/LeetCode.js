/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
  let N = dominoes.length;
  const forces = Array(N).fill(0);

  let force = 0;
  for (let i = 0; i < N; i++) {
    if (dominoes[i] == 'R') {
      force = N;
    } else if (dominoes[i] == 'L') {
      force = 0;
    } else {
      force = Math.max(force - 1, 0);
    }

    forces[i] += force;
  }

  force = 0;
  for (let i = N - 1; i >= 0; i--) {
    if (dominoes[i] == 'L') {
      force = N;
    } else if (dominoes[i] == 'R') {
      force = 0;
    } else {
      force = Math.max(force - 1, 0);
    }

    forces[i] -= force;
  }

  let ans = '';

  for (const f of forces) {
    ans += f > 0 ? 'R' : f < 0 ? 'L' : '.';
  }

  return ans;
};

// time:  O(n)
// space: O(n)

// 'RR.L'
// '.L.R...LR..L..'
