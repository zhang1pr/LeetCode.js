/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  let i;
  let j;
  let index;
  let max = 0;
  let unique;
  let noLessThanK;

  for (let h = 1; h <= 26; h++) {
    arr = Array(26).fill(0);
    i = 0;
    j = 0;
    unique = 0;
    noLessThanK = 0;

    while (j < s.length) {
      if (unique <= h) {
        index = s[j].charCodeAt(0) - 97;

        if ([index] == 0) {
          unique++;
        }

        arr[index]++;

        if ([index] == k) {
          noLessThanK++;
        }

        j++;
      } else {
        index = s[i].charCodeAt(0) - 97;

        if ([index] == k) {
          noLessThanK--;
        }

        arr[index]--;

        if ([index] == 0) {
          unique--;
        }

        i++;
      }

      if (unique == h && unique == noLessThanK) {
        max = Math.max(j - i, max);
      }
    }
  }

  return max;
};

// time:  O(n)
// space: O(1)

// 'a', 1
// 'ab', 1
// 'ab', 2
// 'aab', 2
// 'aaabb', 3
// 'ababbc', 2
