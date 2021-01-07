/**
 * @param {string} s
 * @param {string[]} dict
 * @return {string}
 */
var addBoldTag = function(s, dict) {
  const arr = Array(s.length).fill(false);
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    for (const word of dict) {
      if (s.startsWith(word, i)) {
        end = Math.max(end, i + word.length);
      }
    }

    arr[i] = end > i;
  }

  let res = '';
  for (let i = 0; i < s.length; i++) {
    if (!arr[i]) {
      res += s[i];
      continue;
    }

    let j = i;
    while (j < s.length && arr[j]) {
      j++;
    }

    res += '<b>' + s.slice(i, j) + '</b>';
    i = j - 1;
  }

  return res;
};

// time:  O(mn*wordLen)
// space: O(n)

// 'abcxyz123', ['abc', '123']
// 'aaabbcc', ['aaa', 'aab', 'bc']
