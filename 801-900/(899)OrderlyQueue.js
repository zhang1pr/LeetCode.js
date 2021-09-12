/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function(s, k) {
  if (k == 1) {
    let ans = s;
    for (let i = 1; i < s.length; i++) {
      const temp = s.slice(i) + s.slice(0, i);

      if (temp < ans) {
        ans = temp;
      }
    }

    return ans;
  } else {
    return [...s].sort((a, b) => a.localeCompare(b)).join('');
  }
};

// time:  O(n^2)
// space: O(n)

// 'cba', 1
// 'baaca', 3
