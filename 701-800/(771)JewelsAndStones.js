/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const set = new Set(J);

  let res = 0;

  for (const char of S) {
    if (set.has(char)) {
      res++;
    }
  }

  return res;
};

// time:  O(m+n)
// space: O(m)

// 'z', 'ZZ'
// 'aA', 'aAAbbbb'
