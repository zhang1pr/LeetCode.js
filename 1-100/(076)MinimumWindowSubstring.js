/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let min = '';
  let left = 0;
  let right = -1;
  const map = {};

  for (let i = 0; i < t.length; i++) {
    if (map[t[i]] == null) {
      map[t[i]] = 1;
    } else {
      map[t[i]]++;
    }
  };

  let count = Object.keys(map).length;

  let current;
  let temp;
  while (right <= s.length) {
    if (count == 0) {
      current = s[left];

      if (map[current] != null) {
        map[current]++;
      }

      if (map[current] > 0) {
        count++;
      }

      temp = s.substring(left, right+1);

      if (min == '') {
        min = temp;
      } else {
        min = min.length < temp.length ? min : temp;
      }
      left++;
    } else {
      right++;
      current = s[right];

      if (map[current] != null) {
        map[current]--;
      }

      if (map[current] == 0) {
        count--;
      }
    }
  }

  return min;
}

// time:  O(m+n)
// space: O(m+n)

// 'A', 'A'
// 'AAA', 'A'
// 'ABC', 'ABC'
// 'BCBBBCB', 'BBCC'
// 'ADOBECODEBANC', 'ABC'
