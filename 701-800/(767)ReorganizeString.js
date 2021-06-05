/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
  const hash = Array(26).fill(0);
  for (const ch of S) {
    hash[ch.charCodeAt(0) - 97]++;
  }

  let max = 0;
  let letter = 0;

  for (let i = 0; i < hash.length; i++) {
    if (hash[i] > max) {
      max = hash[i];
      letter = i;
    }
  }

  if (max > Math.floor((S.length + 1) / 2)) {
    return '';
  }

  const res = Array(S.length).fill(0);
  let idx = 0;
  while (hash[letter] > 0) {
    res[idx] = String.fromCharCode(letter + 97);
    idx += 2;
    hash[letter]--;
  }

  for (let i = 0; i < hash.length; i++) {
    while (hash[i] > 0) {
      if (idx >= res.length) {
        idx = 1;
      }

      res[idx] = String.fromCharCode(i + 97);
      idx += 2;
      hash[i]--;
    }
  }

  return res.join('');
};

// time:  O(n)
// space: O(n)

// 'aab'
// 'aaab'
