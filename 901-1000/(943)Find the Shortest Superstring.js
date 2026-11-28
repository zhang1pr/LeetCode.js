/**
 * @param {string[]} words
 * @return {string}
 */
var shortestSuperstring = function(words) {
  const N = words.length;

  const overlaps = Array.from({ length: N }, () => Array(N).fill(0));
  for (let i = 0; i < N; ++i) {
    for (let j = 0; j < N; ++j) {
      if (i != j) {
        const m = Math.min(words[i].length, words[j].length);
        for (let k = m; k >= 0; k--) {
          if (words[i].endsWith(words[j].slice(0, k))) {
            overlaps[i][j] = k;
            break;
          }
        }
      }
    }
  }

  const dp = Array.from({ length: 1 << N }, () => Array(N).fill(0));
  const parent = Array.from({ length: 1 << N }, () => Array(N).fill(-1));

  for (let mask = 0; mask < (1 << N); mask++) {
    for (let bit = 0; bit < N; bit++) {
      if (((mask >> bit) & 1) > 0) {
        const pmask = mask ^ (1 << bit);
        if (pmask == 0) continue;
        for (let i = 0; i < N; ++i) {
          if (((pmask >> i) & 1) > 0) {
            const val = dp[pmask][i] + overlaps[i][bit];
            if (val > dp[mask][bit]) {
              dp[mask][bit] = val;
              parent[mask][bit] = i;
            }
          }
        }
      }
    }
  }

  const perm = Array(N).fill(0);
  const seen = Array(N).fill(false);
  let t = 0;
  let mask = (1 << N) - 1;

  let p = 0;
  for (let j = 0; j < N; ++j) {
    if (dp[(1 << N) - 1][j] > dp[(1 << N) - 1][p]) {
      p = j;
    }
  }

  while (p != -1) {
    perm[t++] = p;
    seen[p] = true;
    const p2 = parent[mask][p];
    mask ^= 1 << p;
    p = p2;
  }

  for (let i = 0; i < Math.floor(t / 2); i++) {
    const v = perm[i];
    perm[i] = perm[t - 1 - i];
    perm[t - 1 - i] = v;
  }

  for (let i = 0; i < N; ++i) {
    if (!seen[i]) {
      perm[t++] = i;
    }
  }

  let ans = words[perm[0]];
  for (let i = 1; i < N; ++i) {
    const overlap = overlaps[perm[i - 1]][perm[i]];
    ans += words[perm[i]].slice(overlap);
  }

  return ans;
};

// time:  O(n^2*(2^n+maxWordLen))
// space: O(n^2*(2^n+maxWordLen))

// ['alex', 'loves', 'leetcode']
// ['catg', 'ctaagt', 'gcta', 'ttca', 'atgcatc']