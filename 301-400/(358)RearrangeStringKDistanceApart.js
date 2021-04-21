/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var rearrangeString = function(s, k) {
  if (k > 26) {
    return '';
  }

  const length = s.length;
  const cnt = Array(26).fill(0);
  const valid = Array(26).fill(0);
  const a = 97;

  for (let i = 0; i < length; i++) {
    cnt[s.charCodeAt(i) - a]++;
  }

  let sb = '';

  for (let index = 0; index < length; index++) {
    let candidatePos = findValidMax(cnt, valid, index);

    if (candidatePos == -1) {
      return '';
    }

    cnt[candidatePos]--;
    valid[candidatePos] = index + k;
    sb += String.fromCharCode(a + candidatePos);
  }

  return sb;
}

var findValidMax = function(cnt, valid, index) {
  let max = Number.MIN_VALUE;
  let candidatePos = -1;

  for (let i = 0; i < cnt.length; i++) {
    if (cnt[i] > 0 && cnt[i] > max && index >= valid[i]) {
      max = cnt[i];
      candidatePos = i;
    }
  }

  return candidatePos;
};

// time:  O(n^2)
// space: O(n)

// 'aabbcc', 3
// 'aaabc', 3
// 'aaadbbcc', 2
