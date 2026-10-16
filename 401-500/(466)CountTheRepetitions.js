/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function(s1, n1, s2, n2) {
  let l1 = s1.length, l2 = s2.length;
  let next = new Array(l2 + 1).fill(0);
  let count = new Array(l2 + 1).fill(0);
  let cnt = 0, p = 0;

  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < l1; j++) {
      if (s1[j] == s2[p]) {
        p++;
      }
      if (p == l2) {
        cnt++;
        p = 0;
      }
    }

    count[i] = cnt;
    next[i] = p;

    for (let j = 0; j < i; j++) {
      if (next[j] == p) {
        const prev_count = count[j];
        const pattern_count = (count[i] - count[j]) * Math.floor((n1 - j - 1) / (i - j));
        const remain_count = count[j + (n1 - j - 1) % (i - j)] - count[j];
        return Math.floor((prev_count + pattern_count + remain_count) / n2);
      }
    }
  }

  return Math.floor(count[n1 - 1] / n2);
};

// time:  O(s1Len*s2Len)
// space: O(s2Len)

// 'a', 1, 'a', 1
// 'ab', 1, 'b', 1
// 'abc', 1, 'bc', 1
// 'abc', 4, 'a', 1
// 'acb', 4, 'ab', 2

