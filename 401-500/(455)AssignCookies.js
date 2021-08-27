/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let res = 0;

  for (let j = 0; res < g.length && j < s.length; j++) {
    if (g[res] <= s[j]) {
      res++;
    }
  }

  return res;
};

// time:  O(glog(g) + slog(s))
// space: O(g + s)

// [1], [1]
// [1, 2], [1, 3]
// [1, 2, 3], [1, 1]
// [1, 2], [1, 2, 3]
