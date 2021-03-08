/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function(stickers, target) {
  const n = target.length;
  const N = 1 << n;

  const dp = Array(N).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < N; i++) {
    if (dp[i] != Infinity) {
      for (const sticker of stickers) {
        let now = i;

        for (const ch of sticker) {
          for (let r = 0; r < n; r++) {
            if (target[r] == ch && !((now >> r) & 1)) {
              now |= 1 << r;
              break;
            }
          }
        }

        dp[now] = Math.min(dp[now], dp[i] + 1);
      }
    }
  }

  return dp[N - 1] != Infinity ? dp[N - 1] : -1;
};

// time:  O(mn*2^n)
// space: O(2^n)

// ['notice', 'possible'], 'basicbasic'
// ['with', 'example', 'science'], 'thehat'
