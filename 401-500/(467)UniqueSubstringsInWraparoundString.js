/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function(p) {
  const count = Array(26).fill(0);
  let cur = 0;

  for (let i = 0; i < p.length; i++) {
    if (i > 0 && (p.charCodeAt(i) - p.charCodeAt(i - 1) == 1 || p.charCodeAt(i - 1) - p.charCodeAt(i) == 25)) {
      cur++;
    } else {
      cur = 1;
    }

    const index = p.charCodeAt(i) - 97;
    count[index] = Math.max(count[index], cur);
  }

  return count.reduce((a, b) => a + b);
};

// time:  O(n)
// space: O(1)

// 'a'
// 'cac'
// 'zab'
// 'abcdbcd'
