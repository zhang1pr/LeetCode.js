/**
 * @param {string} S
 * @return {string}
 */
var makeLargestSpecial = function(S) {
  let cnt = 0;
  let i = 0;

  const res = [];
  for (let j = 0; j < S.length; j++) {
    if (S[j] == '1') {
      cnt++;
    } else {
      cnt--;
    }

    if (cnt == 0) {
      res.push('1' + makeLargestSpecial(S.slice(i + 1, j)) + '0');
      i = j + 1;
    }
  }

  res.sort((a, b) => a > b ? -1 : 1);
  return res.join('');
};

// time:  O(n^2)
// space: O(n)

// '11011000'
