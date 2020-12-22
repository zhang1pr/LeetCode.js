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
  const count = Array(26).fill(0);
  const valid = Array(26).fill(0);
  const a = 97;

  for (let i = 0; i < length; i++) {
    count[s.charCodeAt(i) - a]++;
  }

  let sb = '';

  for (let index = 0; index < length; index++) {
    let candidatePos = findValidMax(count, valid, index);

    if (candidatePos == -1) {
      return '';
    }

    count[candidatePos]--;
    valid[candidatePos] = index + k;
    sb += String.fromCharCode(a + candidatePos);
  }

  return sb;
}

var findValidMax = function(count, valid, index) {
  let max = Number.MIN_VALUE;
  let candidatePos = -1;

  for (let i = 0; i < count.length; i++) {
    if (count[i] > 0 && count[i] > max && index >= valid[i]) {
      max = count[i];
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
