/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const len1 = s1.length;
  const len2 = s2.length;
  if (len1 > len2) {
    return false;
  }

  const cnt = Array(26).fill(0);
  for (let i = 0; i < len1; i++) {
    cnt[s1[i].charCodeAt(0) - 97]++;
    cnt[s2[i].charCodeAt(0) - 97]--;
  }

  if (cnt.every(a => a == 0)) {
    return true;
  }

  for (let i = len1; i < len2; i++) {
    cnt[s2[i].charCodeAt(0) - 97]--;
    cnt[s2[i - len1].charCodeAt(0) - 97]++;

    if (cnt.every(a => a == 0)) {
      return true;
    }
  }

  return false;
};

// time:  O(n)
// space: O(1)

// 'ab', 'a'
// 'ab', 'ab'
// 'ab', 'ba'
// 'ab', 'aaab'
// 'ab', 'aabb'
// 'ab', 'aacb'
// 'ab', 'eidbaooo'
// 'ab', 'eidboaoo'
