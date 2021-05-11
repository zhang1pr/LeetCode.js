/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
 var numJewelsInStones = function(J, S) {
  const set = new Set(J);

  let result = 0;

  for (const char of S) {
    if (set.has(char)) {
      result++;
    }
  }

  return result;
};

// time:  O(m+n)
// space: O(m)

// 'z', 'ZZ'
// 'aA', 'aAAbbbb'
